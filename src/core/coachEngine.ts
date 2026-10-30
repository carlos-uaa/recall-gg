import type { GameMap, Hero, HeroMapEvaluation, RankTier, RecommendationResult, Role } from '../types/game';
import { OVERWATCH_HEROES } from '../games/overwatch/heroes';
import { evaluateHeroMapSynergy } from '../games/overwatch/mapSynergies';
import { getRankInfo } from '../games/overwatch/ranks';

interface CoachOptions {
  role?: Role | 'all';
  gameMap: GameMap | null;
  allyHeroIds: string[];
  enemyHeroIds: string[];
  rankTier: RankTier;
}

// Special pairs verified from Toniki / competitive meta
const PERFECT_PAIRS: Array<{ a: string; b: string; bonus: number; reason: string }> = [
  { a: 'zarya', b: 'reaper', bonus: 22, reason: 'Zarya le pone burbujas a Reaper y hacen un combo devastador' },
  { a: 'zarya', b: 'vendetta', bonus: 22, reason: 'Zarya le pone burbujas a Vendetta y hacen un combo muy bueno' },
  { a: 'pharah', b: 'mercy', bonus: 20, reason: 'Pocket aéreo permanente con amplificación de daño' },
  { a: 'echo', b: 'mercy', bonus: 18, reason: 'Pocket aéreo letal con resurrección y amplificación de daño' },
  { a: 'freja', b: 'mercy', bonus: 18, reason: 'Pocket aéreo para virote automático constante' },
  { a: 'genji', b: 'ana', bonus: 18, reason: 'Combo Nano-Blade con el potencial más alto de exterminio' },
  { a: 'reinhardt', b: 'lucio', bonus: 18, reason: 'Speed boost vital para cerrar distancias con el martillo' },
  { a: 'wuyang', b: 'jetpack-cat', bonus: 16, reason: 'Doble soporte hidro-aéreo con rotación constante de recursos' },
  { a: 'doctrine', b: 'genji', bonus: 16, reason: 'Drones vigorizantes e Infuse potencian los dashes de Genji' },
  { a: 'doctrine', b: 'vendetta', bonus: 16, reason: 'Infuse potencia los tajos constantes de Vendetta' },
  { a: 'sombra', b: 'tracer', bonus: 16, reason: 'Coordinación de dive letal contra soportes enemigos' },
  { a: 'kiriko', b: 'roadhog', bonus: 16, reason: 'Suzu de protección le limpia la anticuración a Roadhog' },
  { a: 'kiriko', b: 'mauga', bonus: 16, reason: 'Suzu de protección le limpia la anticuración a Mauga' },
];

const ANTI_SYNERGIES: Array<{ a: string; b: string; penalty: number; reason: string }> = [
  { a: 'lucio', b: 'juno', penalty: 16, reason: 'No combinan bien: dos aceleradores de velocidad desaprovechan recursos' },
];

const INDIVIDUAL_RANK_WEIGHTS: Record<
  RankTier,
  { diff1: number; diff2: number; diff3: number; coordMultiplier: number }
> = {
  bronze:      { diff1: 8,  diff2: 1, diff3: -9, coordMultiplier: 0.85 },
  silver:      { diff1: 6,  diff2: 1, diff3: -6, coordMultiplier: 0.90 },
  gold:        { diff1: 4,  diff2: 1, diff3: -4, coordMultiplier: 0.95 },
  platinum:    { diff1: 2,  diff2: 1, diff3: -1, coordMultiplier: 1.00 },
  diamond:     { diff1: 0,  diff2: 1, diff3: 2,  coordMultiplier: 1.05 },
  master:      { diff1: -2, diff2: 1, diff3: 4,  coordMultiplier: 1.10 },
  grandmaster: { diff1: -3, diff2: 0, diff3: 6,  coordMultiplier: 1.15 },
  champion:    { diff1: -4, diff2: 0, diff3: 7,  coordMultiplier: 1.20 },
  top500:      { diff1: -5, diff2: 0, diff3: 8,  coordMultiplier: 1.22 },
};

export function calculateRecommendations(options: CoachOptions): RecommendationResult[] {
  const { role = 'all', gameMap, allyHeroIds, enemyHeroIds, rankTier } = options;
  const rankMeta = getRankInfo(rankTier);
  const rw = INDIVIDUAL_RANK_WEIGHTS[rankTier] || INDIVIDUAL_RANK_WEIGHTS.diamond;

  const candidateHeroes = OVERWATCH_HEROES.filter(h => {
    if (role === 'all') return true;
    return h.role === role;
  });

  const allyHeroes = OVERWATCH_HEROES.filter(h => allyHeroIds.includes(h.id));
  const enemyHeroes = OVERWATCH_HEROES.filter(h => enemyHeroIds.includes(h.id));

  // Macro RPS helper: Dive > Poke > Brawl > Dive
  const styleAdvantage = (a: string, b: string): number => {
    if (a === b) return 0;
    if ((a === 'dive' && b === 'poke') || (a === 'poke' && b === 'brawl') || (a === 'brawl' && b === 'dive')) {
      return 3;
    }
    return -3;
  };

  // Determine dominant ally composition style
  const styleCounts: Record<string, number> = { brawl: 0, dive: 0, poke: 0 };
  allyHeroes.forEach(h => {
    styleCounts[h.style] = (styleCounts[h.style] || 0) + 1;
  });
  let dominantAllyStyle: string | null = null;
  let maxStyleCount = 0;
  Object.entries(styleCounts).forEach(([st, cnt]) => {
    if (cnt > maxStyleCount) {
      maxStyleCount = cnt;
      dominantAllyStyle = st;
    }
  });

  const results: RecommendationResult[] = candidateHeroes.map(hero => {
    const pros: string[] = [];
    const cons: string[] = [];

    // 0. Base Meta Tier Points
    let tierBaseScore = 0;
    const tier = hero.tier || 'B';
    if (tier === 'S') {
      tierBaseScore = 10;
    } else if (tier === 'A') {
      tierBaseScore = 7;
    } else if (tier === 'B') {
      tierBaseScore = 3;
    } else if (tier === 'C') {
      tierBaseScore = 0;
    } else {
      tierBaseScore = -4;
    }

    // 1. Coherent Anti-Symmetric Counter Matchups vs Enemy Team
    let rawCounterScore = 0;
    enemyHeroes.forEach(enemy => {
      if (enemy.id === hero.id) return; // Mirror match is 50/50 skill matchup

      const isHardStrong = hero.counters.hardStrongAgainst?.includes(enemy.id);
      const isSoftStrong = hero.counters.strongAgainst.includes(enemy.id);
      const strongMotivo = hero.counters.strongDetails?.[enemy.id]?.motivo;

      const isHardWeak = hero.counters.hardWeakAgainst?.includes(enemy.id);
      const isSoftWeak = hero.counters.weakAgainst.includes(enemy.id);
      const weakMotivo = hero.counters.weakDetails?.[enemy.id]?.motivo;

      if (isHardStrong) {
        rawCounterScore += 16;
        pros.push(strongMotivo ? `★ Counter duro de ${enemy.name}: "${strongMotivo}"` : `★ Counter duro directo contra ${enemy.name}`);
      } else if (isSoftStrong) {
        rawCounterScore += 10;
        pros.push(strongMotivo ? `Favorable contra ${enemy.name}: ${strongMotivo}` : `Favorable contra el kit de ${enemy.name}`);
      } else if (isHardWeak) {
        rawCounterScore -= 16;
        cons.push(weakMotivo ? `★ ${enemy.name} es tu counter duro: "${weakMotivo}"` : `★ ${enemy.name} es counter duro directo y anula tu kit`);
      } else if (isSoftWeak) {
        rawCounterScore -= 10;
        cons.push(weakMotivo ? `Desfavorable contra ${enemy.name}: ${weakMotivo}` : `Desfavorable frente a ${enemy.name}`);
      } else {
        rawCounterScore += styleAdvantage(hero.style, enemy.style);
      }
    });

    // 2. Specific Map & Geometry Synergy (-16 to +16)
    let rawMapScore = 0;
    if (gameMap) {
      const mapEval = evaluateHeroMapSynergy(hero, gameMap);
      rawMapScore = mapEval.score;

      if (mapEval.rating === 'ideal') {
        pros.push(`★ Mapa ideal (${gameMap.name}, +${mapEval.score} pts): ${mapEval.reason}`);
      } else if (mapEval.rating === 'favorable') {
        pros.push(`Buen mapa (${gameMap.name}, +${mapEval.score} pts): ${mapEval.reason}`);
      } else if (mapEval.rating === 'poor') {
        cons.push(`★ Mapa muy desfavorable (${gameMap.name}, ${mapEval.score} pts): ${mapEval.reason}`);
      } else if (mapEval.rating === 'unfavorable') {
        cons.push(`Geometría incómoda en ${gameMap.name} (${mapEval.score} pts): ${mapEval.reason}`);
      }
    }

    // 3. Synergy with Ally Team (excluding self, scaled slightly by rank coordination)
    let rawSynergyScore = 0;
    allyHeroes.forEach(ally => {
      if (ally.id === hero.id) return;

      const anti = ANTI_SYNERGIES.find(
        p => (p.a === hero.id && p.b === ally.id) || (p.b === hero.id && p.a === ally.id)
      );
      if (anti) {
        rawSynergyScore -= 12;
        cons.push(anti.reason);
      }

      const perfect = PERFECT_PAIRS.find(
        p => (p.a === hero.id && p.b === ally.id) || (p.b === hero.id && p.a === ally.id)
      );
      if (perfect) {
        rawSynergyScore += Math.round(14 * rw.coordMultiplier);
        pros.push(`Sinergia perfecta con ${ally.name}: ${perfect.reason}`);
      } else if (hero.synergies.includes(ally.id) || ally.synergies.includes(hero.id)) {
        rawSynergyScore += Math.round(9 * rw.coordMultiplier);
        pros.push(`Gran sinergia con ${ally.name}`);
      } else if (ally.style === hero.style) {
        rawSynergyScore += 3;
      }
    });

    if (dominantAllyStyle && hero.style === dominantAllyStyle && maxStyleCount >= 2) {
      rawSynergyScore += 6;
      pros.push(`Encaja con el estilo del equipo (${hero.style.toUpperCase()})`);
    }

    // 4. Individual Rank / Elo Weight Modifier
    let rankModifier =
      hero.difficulty === 1 ? rw.diff1 : hero.difficulty === 2 ? rw.diff2 : rw.diff3;

    if (rankModifier >= 4) {
      if (hero.difficulty === 1) {
        pros.push(`Consistencia mecánica muy alta en rango ${rankMeta.name}`);
      } else {
        pros.push(`Alto techo de habilidad bien explotado en rango ${rankMeta.name}`);
      }
    } else if (rankModifier <= -4) {
      if (hero.difficulty === 3) {
        cons.push(`Exige alta precisión mecánica para rendir al máximo en ${rankMeta.name}`);
      } else {
        cons.push(`Techo de impacto más predecible frente a rivales de ${rankMeta.name}`);
      }
    }

    // Add tier note at the end if pros/cons still have room so counters & map come first!
    if (tier === 'S' && pros.length < 4) {
      pros.push('Héroe Tier S en el meta competitivo actual');
    } else if (tier === 'A' && pros.length < 4) {
      pros.push('Tier A: Pick muy sólido y consistente en el parche actual');
    } else if (tier === 'C' && cons.length < 4) {
      cons.push('Tier C: Rendimiento más situacional en el meta actual');
    }

    // Normalized Total Score (Target 5 - 99)
    let totalScore = 50 + tierBaseScore + rawCounterScore + rawSynergyScore + rawMapScore + rankModifier;
    totalScore = Math.max(5, Math.min(99, Math.round(totalScore)));

    let tacticalVerdict = '';
    if (totalScore >= 82) {
      tacticalVerdict = `Pick dominante: Destruye la composición enemiga y explota al máximo el mapa.`;
    } else if (totalScore >= 68) {
      tacticalVerdict = `Sólida elección: Ventajas tácticas claras y buena adaptación a ${gameMap?.name || 'la partida'}.`;
    } else if (totalScore >= 48) {
      tacticalVerdict = `Elección neutral: Viable, pero dependerá fuertemente de tu posicionamiento individual.`;
    } else {
      tacticalVerdict = `Riesgo alto: El mapa o los counters enemigos reducen drásticamente tu impacto.`;
    }

    return {
      hero,
      totalScore,
      breakdown: {
        enemyCounterScore: rawCounterScore,
        allySynergyScore: rawSynergyScore,
        mapFitScore: rawMapScore,
        rankModifier,
      },
      pros: pros.slice(0, 4),
      cons: cons.slice(0, 4),
      tacticalVerdict,
    };
  });

  return results.sort((a, b) => b.totalScore - a.totalScore);
}

export interface PlayerHeroDiagnosis {
  hero: Hero;
  score: number;
  verdict: string;
  mapEvaluation: HeroMapEvaluation | null;
  breakdown: {
    enemyCounterScore: number;
    allySynergyScore: number;
    mapFitScore: number;
    rankModifier: number;
  };
  directThreats: Hero[];
  hardThreats: Hero[];
  favorableTargets: Hero[];
  hardTargets: Hero[];
  recommendedSwitches: Array<{
    hero: Hero;
    score: number;
    reason: string;
    hardCounteredThreats: string[];
  }>;
}

export function analyzePlayerPick(
  playerHeroId: string,
  allyHeroIds: string[],
  enemyHeroIds: string[],
  gameMap: GameMap | null,
  rankTier: RankTier
): PlayerHeroDiagnosis | null {
  const playerHero = OVERWATCH_HEROES.find(h => h.id === playerHeroId);
  if (!playerHero) return null;

  const enemyHeroes = OVERWATCH_HEROES.filter(h => enemyHeroIds.includes(h.id));
  const mapEvaluation = gameMap ? evaluateHeroMapSynergy(playerHero, gameMap) : null;

  const allRoleRecommendations = calculateRecommendations({
    role: playerHero.role,
    gameMap,
    allyHeroIds,
    enemyHeroIds,
    rankTier,
  });

  const currentPickData = allRoleRecommendations.find(r => r.hero.id === playerHeroId);
  const currentScore = currentPickData ? currentPickData.totalScore : 50;
  const breakdown = currentPickData?.breakdown || {
    enemyCounterScore: 0,
    allySynergyScore: 0,
    mapFitScore: mapEvaluation?.score || 0,
    rankModifier: 0,
  };

  const directThreats = enemyHeroes.filter(
    enemy => enemy.id !== playerHeroId && playerHero.counters.weakAgainst.includes(enemy.id)
  );
  const hardThreats = enemyHeroes.filter(
    enemy => enemy.id !== playerHeroId && playerHero.counters.hardWeakAgainst?.includes(enemy.id)
  );

  const favorableTargets = enemyHeroes.filter(
    enemy => enemy.id !== playerHeroId && playerHero.counters.strongAgainst.includes(enemy.id)
  );
  const hardTargets = enemyHeroes.filter(
    enemy => enemy.id !== playerHeroId && playerHero.counters.hardStrongAgainst?.includes(enemy.id)
  );

  let verdict = '';
  const mapName = gameMap?.name || 'este mapa';
  if (currentScore >= 80) {
    verdict =
      mapEvaluation && mapEvaluation.score >= 10
        ? `¡Pick letal! ${playerHero.name} domina ${mapName} y tiene clara ventaja frente al rival.`
        : `¡Excelente elección! Tu ${playerHero.name} tiene ventaja táctica directa en esta partida.`;
  } else if (currentScore >= 62) {
    verdict =
      mapEvaluation && mapEvaluation.score <= -8
        ? `Pick jugable por enfrentamientos, aunque la geometría de ${mapName} (${mapEvaluation.score} pts) limita tus ángulos.`
        : `Elección sólida y viable. Aprovecha tus ángulos en ${mapName} junto a tu equipo.`;
  } else if (currentScore >= 46) {
    verdict =
      mapEvaluation && mapEvaluation.score <= -10
        ? `Mapa adverso: ${mapName} penaliza el kit de ${playerHero.name} (${mapEvaluation.score} pts). Juega con mucha cautela o valora rotar.`
        : `Situación neutral/exigente. Cuida tus enfriamientos frente a la presión rival.`;
  } else {
    verdict =
      mapEvaluation && mapEvaluation.score <= -10 && directThreats.length === 0
        ? `⚠️ Mapa muy desfavorable: ${mapName} anula las fortalezas de ${playerHero.name}. Se recomienda cambiar a un héroe favorecido por el escenario.`
        : `⚠️ Elección de alto riesgo por counters rivales y geometría de ${mapName}. Se sugiere cambio urgente.`;
  }

  // Find recommended switches within the EXACT SAME ROLE
  const alternativePicks = allRoleRecommendations
    .filter(r => r.hero.id !== playerHeroId && r.totalScore > currentScore)
    .slice(0, 3)
    .map(alt => {
      let reason = `Ofrece mayor impacto táctico (+${alt.totalScore - currentScore} pts)`;

      const hardCounteredThreats = hardThreats
        .filter(threat => alt.hero.counters.strongAgainst.includes(threat.id))
        .map(t => t.name);
      const softCounteredThreats = directThreats
        .filter(threat => alt.hero.counters.strongAgainst.includes(threat.id))
        .map(t => t.name);

      const altMapEval = gameMap ? evaluateHeroMapSynergy(alt.hero, gameMap) : null;

      if (hardCounteredThreats.length > 0) {
        reason = `Destruye a ${hardCounteredThreats.join(' y ')}, que actualmente te hacen counter duro`;
      } else if (softCounteredThreats.length > 0) {
        reason = `Gana ventaja sobre ${softCounteredThreats.join(' y ')}, frenando la presión enemiga`;
      } else if (
        gameMap &&
        altMapEval &&
        altMapEval.score >= 10 &&
        (!mapEvaluation || altMapEval.score - mapEvaluation.score >= 12)
      ) {
        reason = `Domina ${gameMap.name} (+${altMapEval.score} pts): ${altMapEval.reason}`;
      } else if (alt.pros.length > 0) {
        reason = alt.pros[0];
      }

      return {
        hero: alt.hero,
        score: alt.totalScore,
        reason,
        hardCounteredThreats,
      };
    });

  return {
    hero: playerHero,
    score: currentScore,
    verdict,
    mapEvaluation,
    breakdown,
    directThreats,
    hardThreats,
    favorableTargets,
    hardTargets,
    recommendedSwitches: alternativePicks,
  };
}

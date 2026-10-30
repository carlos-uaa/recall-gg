import type { GameMap, Hero, RankTier, RecommendationResult, Role } from '../types/game';
import { OVERWATCH_HEROES } from '../games/overwatch/heroes';

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

export function calculateRecommendations(options: CoachOptions): RecommendationResult[] {
  const { role = 'all', gameMap, allyHeroIds, enemyHeroIds, rankTier } = options;

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
      pros.push(`Héroe Tier S en el meta actual (máxima prioridad competitiva)`);
    } else if (tier === 'A') {
      tierBaseScore = 7;
      pros.push(`Tier A: Pick muy sólido y consistente en el parche actual`);
    } else if (tier === 'B') {
      tierBaseScore = 3;
    } else if (tier === 'C') {
      tierBaseScore = 0;
      cons.push(`Tier C: Rendimiento situacional en este meta`);
    } else {
      tierBaseScore = -4;
      cons.push(`Tier D: Requiere condiciones muy favorables para brillar`);
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
        // Subtle macro-style interaction (Dive > Poke > Brawl > Dive)
        rawCounterScore += styleAdvantage(hero.style, enemy.style);
      }
    });

    // 2. Synergy with Ally Team (excluding self)
    let rawSynergyScore = 0;
    allyHeroes.forEach(ally => {
      if (ally.id === hero.id) return;

      // Check for Anti-Synergies
      const anti = ANTI_SYNERGIES.find(
        p => (p.a === hero.id && p.b === ally.id) || (p.b === hero.id && p.a === ally.id)
      );
      if (anti) {
        rawSynergyScore -= 12;
        cons.push(anti.reason);
      }

      // Check for Perfect Pairs
      const perfect = PERFECT_PAIRS.find(
        p => (p.a === hero.id && p.b === ally.id) || (p.b === hero.id && p.a === ally.id)
      );
      if (perfect) {
        rawSynergyScore += 14;
        pros.push(`Sinergia perfecta con ${ally.name}: ${perfect.reason}`);
      } else if (hero.synergies.includes(ally.id) || ally.synergies.includes(hero.id)) {
        rawSynergyScore += 9;
        pros.push(`Gran sinergia con ${ally.name}`);
      } else if (ally.style === hero.style) {
        rawSynergyScore += 3;
      }
    });

    if (dominantAllyStyle && hero.style === dominantAllyStyle && maxStyleCount >= 2) {
      rawSynergyScore += 6;
      pros.push(`Encaja con el estilo del equipo (${hero.style.toUpperCase()})`);
    }

    // 3. Map & Mode Fit
    let rawMapScore = 0;
    if (gameMap) {
      if (gameMap.favoredStyles.includes(hero.style)) {
        rawMapScore += 8;
        pros.push(`Favorable en ${gameMap.name} por su estilo ${hero.style.toUpperCase()}`);
      }

      if (gameMap.longSightlines && (hero.range === 'Largo' || hero.range === 'Medio')) {
        rawMapScore += 5;
        pros.push(`Aprovecha las líneas de visión largas de ${gameMap.name}`);
      } else if (gameMap.isCloseQuarters && (hero.range === 'Corto' || hero.range === 'Melee')) {
        rawMapScore += 5;
        pros.push(`Efectivo en las distancias cerradas de este mapa`);
      }

      if (gameMap.hasHighGround && hero.style === 'brawl' && hero.range === 'Melee' && hero.id !== 'doomfist') {
        rawMapScore -= 7;
        cons.push(`Dificultades disputando el High Ground en ${gameMap.name}`);
      }
    }

    // 4. Rank / Elo Weight Modifier
    let rankModifier = 0;
    if (rankTier === 'bronze_gold') {
      if (hero.difficulty === 1) {
        rankModifier += 6;
        pros.push('Mecánicamente consistente y de alto impacto en este rango');
      } else if (hero.difficulty === 3) {
        rankModifier -= 6;
        cons.push('Exige alta precisión mecánica para sacarle valor óptimo');
      }
    } else if (rankTier === 'master_top500') {
      if (hero.difficulty === 3) {
        rankModifier += 5;
        pros.push('Techo de habilidad altísimo en rangos altos');
      }
    }

    // Normalized Total Score (Target 5 - 99)
    let totalScore = 50 + tierBaseScore + rawCounterScore + rawSynergyScore + rawMapScore + rankModifier;
    totalScore = Math.max(5, Math.min(99, Math.round(totalScore)));

    let tacticalVerdict = '';
    if (totalScore >= 82) {
      tacticalVerdict = `Pick dominante: Destruye la composición enemiga y maximiza las sinergias de tu equipo.`;
    } else if (totalScore >= 68) {
      tacticalVerdict = `Sólida elección: Tiene ventajas tácticas claras y buena presencia en el mapa.`;
    } else if (totalScore >= 48) {
      tacticalVerdict = `Elección neutral: Viable, pero dependerá fuertemente de tu ejecución individual.`;
    } else {
      tacticalVerdict = `Riesgo alto: La composición rival o el mapa tienen counters directos para anularte.`;
    }

    return {
      hero,
      totalScore,
      breakdown: {
        enemyCounterScore: rawCounterScore,
        allySynergyScore: rawSynergyScore,
        mapFitScore: rawMapScore,
        rankModifier
      },
      pros: pros.slice(0, 4),
      cons: cons.slice(0, 4),
      tacticalVerdict
    };
  });

  return results.sort((a, b) => b.totalScore - a.totalScore);
}

export interface PlayerHeroDiagnosis {
  hero: Hero;
  score: number;
  verdict: string;
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
  
  // Calculate player hero recommendation details
  const allRoleRecommendations = calculateRecommendations({
    role: playerHero.role,
    gameMap,
    allyHeroIds,
    enemyHeroIds,
    rankTier,
  });

  const currentPickData = allRoleRecommendations.find(r => r.hero.id === playerHeroId);
  const currentScore = currentPickData ? currentPickData.totalScore : 50;

  // Identify direct and hard enemy threats (strictly anti-symmetric, excluding mirror)
  const directThreats = enemyHeroes.filter(
    enemy => enemy.id !== playerHeroId && playerHero.counters.weakAgainst.includes(enemy.id)
  );
  const hardThreats = enemyHeroes.filter(
    enemy => enemy.id !== playerHeroId && playerHero.counters.hardWeakAgainst?.includes(enemy.id)
  );

  // Identify favorable and hard targets
  const favorableTargets = enemyHeroes.filter(
    enemy => enemy.id !== playerHeroId && playerHero.counters.strongAgainst.includes(enemy.id)
  );
  const hardTargets = enemyHeroes.filter(
    enemy => enemy.id !== playerHeroId && playerHero.counters.hardStrongAgainst?.includes(enemy.id)
  );

  let verdict = '';
  if (currentScore >= 80) {
    verdict = `¡Excelente elección! Tu ${playerHero.name} tiene ventaja táctica directa frente a la composición enemiga.`;
  } else if (currentScore >= 62) {
    verdict = `Elección viable. Puedes sacar buen valor si te mantienes coordinado y juegas con tu equipo.`;
  } else if (currentScore >= 46) {
    verdict = `Situación neutral/compleja. Si el equipo rival presiona con sus picks clave, empezarás a sufrir desgaste.`;
  } else {
    verdict = `⚠️ Elección de alto riesgo. La alineación enemiga cuenta con counters directos que anulan tu impacto. Se sugiere cambio urgente.`;
  }

  // Find recommended switches within the EXACT SAME ROLE
  const alternativePicks = allRoleRecommendations
    .filter(r => r.hero.id !== playerHeroId && r.totalScore > currentScore)
    .slice(0, 3)
    .map(alt => {
      let reason = `Ofrece mayor impacto táctico (+${alt.totalScore - currentScore} pts)`;
      
      // Check which enemy threat this alternative counter-attacks (prioritizing hard counters)
      const hardCounteredThreats = hardThreats.filter(threat => alt.hero.counters.strongAgainst.includes(threat.id)).map(t => t.name);
      const softCounteredThreats = directThreats.filter(threat => alt.hero.counters.strongAgainst.includes(threat.id)).map(t => t.name);

      if (hardCounteredThreats.length > 0) {
        reason = `Destruye a ${hardCounteredThreats.join(' y ')}, que actualmente te hacen counter duro`;
      } else if (softCounteredThreats.length > 0) {
        reason = `Gana ventaja sobre ${softCounteredThreats.join(' y ')}, frenando la presión enemiga`;
      } else if (alt.pros.length > 0) {
        reason = alt.pros[0];
      }

      return {
        hero: alt.hero,
        score: alt.totalScore,
        reason,
        hardCounteredThreats
      };
    });

  return {
    hero: playerHero,
    score: currentScore,
    verdict,
    directThreats,
    hardThreats,
    favorableTargets,
    hardTargets,
    recommendedSwitches: alternativePicks,
  };
}

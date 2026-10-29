import type { GameMap, Hero, RankTier, RecommendationResult, Role } from '../types/game';
import { OVERWATCH_HEROES } from '../games/overwatch/heroes';

interface CoachOptions {
  role?: Role | 'all';
  gameMap: GameMap | null;
  allyHeroIds: string[];
  enemyHeroIds: string[];
  rankTier: RankTier;
}

export function calculateRecommendations(options: CoachOptions): RecommendationResult[] {
  const { role = 'all', gameMap, allyHeroIds, enemyHeroIds, rankTier } = options;

  const candidateHeroes = OVERWATCH_HEROES.filter(h => {
    if (role === 'all') return true;
    return h.role === role;
  });

  const allyHeroes = OVERWATCH_HEROES.filter(h => allyHeroIds.includes(h.id));
  const enemyHeroes = OVERWATCH_HEROES.filter(h => enemyHeroIds.includes(h.id));

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

    // 1. Counter Matchups vs Enemy Team (Base: 50% weight)
    let rawCounterScore = 0;
    enemyHeroes.forEach(enemy => {
      const weCounterEnemy = hero.counters.strongAgainst.includes(enemy.id);
      const enemyCountersUs = hero.counters.weakAgainst.includes(enemy.id) || enemy.counters.strongAgainst.includes(hero.id);

      if (weCounterEnemy) {
        rawCounterScore += 22;
        pros.push(`Excelente counter contra ${enemy.name}`);
      }
      if (enemyCountersUs) {
        rawCounterScore -= 24;
        cons.push(`Sufre fuertemente contra el kit de ${enemy.name}`);
      }
    });

    // 2. Synergy with Ally Team
    let rawSynergyScore = 0;
    allyHeroes.forEach(ally => {
      if (hero.synergies.includes(ally.id)) {
        rawSynergyScore += 12;
        pros.push(`Gran sinergia con ${ally.name}`);
      }
    });

    if (dominantAllyStyle && hero.style === dominantAllyStyle && maxStyleCount >= 2) {
      rawSynergyScore += 10;
      pros.push(`Encaja con el arquetipo de equipo (${hero.style.toUpperCase()})`);
    }

    // 3. Map & Mode Fit
    let rawMapScore = 0;
    if (gameMap) {
      if (gameMap.favoredStyles.includes(hero.style)) {
        rawMapScore += 15;
        pros.push(`Favorable en ${gameMap.name} por su estilo ${hero.style}`);
      }

      if (gameMap.longSightlines && (hero.range === 'Largo' || hero.range === 'Medio')) {
        rawMapScore += 8;
        pros.push(`Aprovecha las líneas de visión largas de ${gameMap.name}`);
      } else if (gameMap.isCloseQuarters && (hero.range === 'Corto' || hero.range === 'Melee')) {
        rawMapScore += 8;
        pros.push(`Efectivo en las distancias cerradas de este mapa`);
      }

      if (gameMap.hasHighGround && hero.style === 'brawl' && hero.range === 'Melee' && hero.id !== 'doomfist') {
        rawMapScore -= 10;
        cons.push(`Dificultades disputando el High Ground en ${gameMap.name}`);
      }
    }

    // 4. Rank / Elo Weight Modifier
    let rankModifier = 0;
    if (rankTier === 'bronze_gold') {
      if (hero.difficulty === 1) {
        rankModifier += 8;
        pros.push('Mecánicamente consistente y de alto impacto en este rango');
      } else if (hero.difficulty === 3) {
        rankModifier -= 8;
        cons.push('Exige alta precisión mecánica para sacarle valor óptimo');
      }
    } else if (rankTier === 'master_top500') {
      if (hero.difficulty === 3) {
        rankModifier += 6;
        pros.push('Techo de habilidad altísimo en rangos altos');
      }
    }

    // Normalized Total Score (Target 0 - 100)
    let totalScore = 50 + rawCounterScore + rawSynergyScore + rawMapScore + rankModifier;
    totalScore = Math.max(12, Math.min(99, Math.round(totalScore)));

    let tacticalVerdict = '';
    if (totalScore >= 80) {
      tacticalVerdict = `Pick dominante: Castiga la alineación enemiga y potencia la composición de tu equipo.`;
    } else if (totalScore >= 65) {
      tacticalVerdict = `Sólida elección: Tiene ventajas tácticas claras si juegas coordinado con tus aliados.`;
    } else if (totalScore >= 45) {
      tacticalVerdict = `Elección neutral: Viable, pero dependerá fuertemente de tu ejecución individual.`;
    } else {
      tacticalVerdict = `Riesgo alto: La composición rival o el mapa tienen herramientas directas para anularte.`;
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
  favorableTargets: Hero[];
  recommendedSwitches: Array<{
    hero: Hero;
    score: number;
    reason: string;
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

  // Identify direct enemy threats and favorable targets
  const directThreats = enemyHeroes.filter(
    enemy => playerHero.counters.weakAgainst.includes(enemy.id) || enemy.counters.strongAgainst.includes(playerHero.id)
  );

  const favorableTargets = enemyHeroes.filter(
    enemy => playerHero.counters.strongAgainst.includes(enemy.id)
  );

  let verdict = '';
  if (currentScore >= 78) {
    verdict = `¡Excelente elección! Tu ${playerHero.name} tiene ventaja táctica directa frente a la composición enemiga.`;
  } else if (currentScore >= 60) {
    verdict = `Elección viable. Puedes sacar buen valor si te mantienes coordinado y juegas con tu equipo.`;
  } else if (currentScore >= 45) {
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
      // Check which enemy threat this alternative counter-attacks
      const counteredThreats = directThreats.filter(threat => alt.hero.counters.strongAgainst.includes(threat.id));
      if (counteredThreats.length > 0) {
        reason = `Destruye a ${counteredThreats.map(t => t.name).join(' y ')}, que actualmente te anulan`;
      } else if (alt.pros.length > 0) {
        reason = alt.pros[0];
      }
      return {
        hero: alt.hero,
        score: alt.totalScore,
        reason,
      };
    });

  return {
    hero: playerHero,
    score: currentScore,
    verdict,
    directThreats,
    favorableTargets,
    recommendedSwitches: alternativePicks,
  };
}

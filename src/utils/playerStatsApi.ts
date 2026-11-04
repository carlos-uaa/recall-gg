import type { UserProfileData, HeroPlayerStats, RoleRankInfo } from '../types/userProfile';
import type { Role, RankTier } from '../types/game';
import { OVERWATCH_HEROES } from '../games/overwatch/heroes';

const OVERFAST_API_BASE = 'https://overfast-api.tekrop.fr';

export interface PlayerSearchResult {
  playerId: string;
  name: string;
  avatar?: string;
  namecard?: string;
  title?: string;
  isPublic: boolean;
  careerUrl?: string;
  lastUpdatedAt?: number;
}

export const RANK_NAMES_ES: Record<RankTier, string> = {
  bronze: 'Bronce',
  silver: 'Plata',
  gold: 'Oro',
  platinum: 'Platino',
  diamond: 'Diamante',
  master: 'Maestro',
  grandmaster: 'Gran Maestro',
  champion: 'Campeón',
  top500: 'Top 500',
};

export function formatRankName(tier: RankTier, divisionNumber?: number): string {
  const baseName = RANK_NAMES_ES[tier] || tier.charAt(0).toUpperCase() + tier.slice(1);
  if (tier === 'top500') {
    return divisionNumber && divisionNumber > 0 ? `Top 500 (#${divisionNumber})` : 'Top 500';
  }
  if (divisionNumber && divisionNumber >= 1 && divisionNumber <= 5) {
    return `${baseName} ${divisionNumber}`;
  }
  return baseName;
}

/**
 * Normaliza nombres o IDs de rangos de Blizzard a nuestros RankTiers
 */
function normalizeRankTier(tierName?: string): RankTier {
  if (!tierName) return 'diamond';
  const lower = tierName.toLowerCase();
  if (lower.includes('bronze') || lower.includes('bronce')) return 'bronze';
  if (lower.includes('silver') || lower.includes('plata')) return 'silver';
  if (lower.includes('gold') || lower.includes('oro')) return 'gold';
  if (lower.includes('plat')) return 'platinum';
  if (lower.includes('diam')) return 'diamond';
  if (lower.includes('master') || lower.includes('maestro')) return 'master';
  if (lower.includes('grandmaster') || lower.includes('gran')) return 'grandmaster';
  if (lower.includes('champ') || lower.includes('campeón')) return 'champion';
  if (lower.includes('top') || lower.includes('500')) return 'top500';
  return 'diamond';
}

/**
 * Detecta si el texto ingresado es una URL directa de perfil de Blizzard o un ID cifrado de OW2
 */
export function extractPlayerIdFromInput(input: string): { type: 'id' | 'name'; value: string } {
  const trimmed = input.trim();
  // Formato URL: https://overwatch.blizzard.com/es-es/career/dc5fa285fe...%7C.../ o similar
  const urlMatch = trimmed.match(/career\/([^/?#\s]+)/i);
  if (urlMatch && urlMatch[1]) {
    // Si viene con barra final, limpiarla
    const cleanId = urlMatch[1].replace(/\/$/, '');
    return { type: 'id', value: cleanId };
  }
  // Formato ID cifrado con separador %7C o |
  if (trimmed.includes('%7C') || (trimmed.includes('|') && trimmed.length > 20)) {
    return { type: 'id', value: trimmed.replace('|', '%7C') };
  }
  // Formato BattleTag directo (ej: Nano#13824 -> Nano-13824)
  if (trimmed.includes('#')) {
    const formatted = trimmed.replace('#', '-');
    return { type: 'id', value: formatted };
  }
  // Formato BattleTag con guion y número (ej: Nano-13824)
  if (trimmed.includes('-') && /-[0-9]+$/.test(trimmed)) {
    return { type: 'id', value: trimmed };
  }
  return { type: 'name', value: trimmed };
}

/**
 * Busca jugadores públicos por nombre o BattleTag en la API de OverFast
 */
export async function searchPlayers(query: string): Promise<PlayerSearchResult[]> {
  const trimmed = query.trim();
  if (!trimmed) return [];

  // Extraer el nombre base si el usuario escribió con '#' o '-'
  const baseName = trimmed.includes('#')
    ? trimmed.split('#')[0]
    : trimmed.includes('-') && !trimmed.startsWith('-')
    ? trimmed.split('-')[0]
    : trimmed;

  const cleanQuery = encodeURIComponent(baseName.trim());
  if (!cleanQuery) return [];

  const response = await fetch(`${OVERFAST_API_BASE}/players?name=${cleanQuery}&limit=100`, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error del servidor al buscar jugadores (${response.status})`);
  }

  const data = await response.json();
  const results = (data.results || []).map((r: any) => ({
    playerId: r.player_id,
    name: r.name,
    avatar: r.avatar,
    namecard: r.namecard,
    title: r.title,
    isPublic: r.is_public !== false,
    careerUrl: r.career_url,
    lastUpdatedAt: r.last_updated_at,
  }));

  return results;
}

/**
 * Obtiene el perfil completo (summary + stats) de un jugador y lo convierte al modelo de RecallGG
 */
export async function fetchPlayerProfile(
  playerId: string,
  displayTag?: string
): Promise<UserProfileData> {
  const encodedId = encodeURIComponent(playerId);

  // 1. Fetch Summary
  const summaryRes = await fetch(`${OVERFAST_API_BASE}/players/${encodedId}/summary`);
  if (!summaryRes.ok) {
    if (summaryRes.status === 404) {
      throw new Error(
        'Jugador no encontrado en los registros de Blizzard. Comprueba el nombre o asegúrate de que el perfil sea público.'
      );
    }
    if (summaryRes.status === 429) {
      throw new Error('Servidor ocupado. Intenta de nuevo en unos momentos (Límite de peticiones).');
    }
    throw new Error(`No se pudo obtener el resumen del perfil (${summaryRes.status})`);
  }

  const summary = await summaryRes.json();

  if (summary.is_public === false) {
    throw new Error(
      `El perfil de "${summary.username || playerId}" está configurado como PRIVADO en Overwatch 2. Para consultarlo, cámbialo a Público en: Ajustes > Social > Privacidad > Perfil de trayectoria.`
    );
  }

  // 2. Fetch Stats (Heroes and general performance)
  let statsData: any = null;
  try {
    const statsRes = await fetch(`${OVERFAST_API_BASE}/players/${encodedId}/stats/summary`);
    if (statsRes.ok) {
      statsData = await statsRes.json();
    }
  } catch (err) {
    console.warn('No se pudieron obtener las estadísticas detalladas por héroe:', err);
  }

  // Parse ranks
  const ranks: UserProfileData['ranks'] = {};
  const competitive = summary.competitive?.pc || summary.competitive?.console || {};

  ['tank', 'damage', 'support'].forEach(roleKey => {
    const roleData = competitive[roleKey];
    if (roleData && (roleData.division || roleData.tier)) {
      const tier = normalizeRankTier(roleData.division || roleData.tier);
      const divisionNum = typeof roleData.tier === 'number' ? roleData.tier : 1;
      ranks[roleKey as Role] = {
        role: roleKey as Role,
        tier,
        division: divisionNum,
        rankName: formatRankName(tier, divisionNum),
        iconUrl: roleData.icon_url,
      };
    }
  });

  // Open Queue rank (Cola Abierta / Rango Competitivo de Consola o PC)
  const openData = competitive.open;
  if (openData && (openData.division || openData.tier)) {
    const tier = normalizeRankTier(openData.division || openData.tier);
    const divisionNum = typeof openData.tier === 'number' ? openData.tier : 1;
    ranks.open = {
      role: 'damage',
      tier,
      division: divisionNum,
      rankName: `Cola Abierta: ${formatRankName(tier, divisionNum)}`,
      iconUrl: openData.icon_url,
    };
  }

  // Parse General Stats
  const generalSummary = statsData?.general || {};
  const totalGames = generalSummary.games_played || 0;
  const totalWins = generalSummary.games_won || 0;
  const totalLosses = generalSummary.games_lost || Math.max(0, totalGames - totalWins);
  const winrate = generalSummary.winrate || (totalGames > 0 ? (totalWins / totalGames) * 100 : 50);
  const totalTimeHours = Math.round((generalSummary.time_played || 0) / 3600);

  // Parse Heroes Stats
  const heroesObj = statsData?.heroes || {};
  const allHeroStats: Record<string, HeroPlayerStats> = {};

  Object.entries(heroesObj).forEach(([rawHeroKey, heroStats]: [string, any]) => {
    const matchedHero = OVERWATCH_HEROES.find(
      h => h.id.toLowerCase() === rawHeroKey.toLowerCase() || h.name.toLowerCase() === rawHeroKey.toLowerCase()
    );

    const heroId = matchedHero ? matchedHero.id : rawHeroKey.toLowerCase();
    const heroName = matchedHero ? matchedHero.name : rawHeroKey;
    const role: Role = matchedHero ? matchedHero.role : 'damage';

    const hGames = heroStats.games_played || 0;
    const hWins = heroStats.games_won || 0;
    const hLosses = heroStats.games_lost || Math.max(0, hGames - hWins);
    const hTimeHours = Math.round(((heroStats.time_played || 0) / 3600) * 10) / 10;
    const hWinrate = heroStats.winrate ?? (hGames > 0 ? Math.round((hWins / hGames) * 1000) / 10 : 50);

    allHeroStats[heroId] = {
      heroId,
      heroName,
      role,
      gamesPlayed: hGames,
      gamesWon: hWins,
      gamesLost: hLosses,
      timePlayedHours: hTimeHours,
      winrate: hWinrate,
      kda: heroStats.kda || 3.0,
      avgElimsPer10: heroStats.average?.eliminations || 0,
      avgDeathsPer10: heroStats.average?.deaths || 0,
      avgDamagePer10: Math.round(heroStats.average?.damage || 0),
      avgHealingPer10: Math.round(heroStats.average?.healing || 0),
      weaponAccuracy: heroStats.weapon_accuracy,
      criticalHitAccuracy: heroStats.critical_hit_accuracy,
      color: matchedHero?.id === 'ana' ? '#6f8fc9' : undefined,
    };
  });

  // Top Heroes sorted by time played
  const topHeroes = Object.values(allHeroStats)
    .sort((a, b) => b.timePlayedHours - a.timePlayedHours)
    .slice(0, 10);

  return {
    username: summary.username || playerId,
    tag: displayTag || summary.username,
    avatarUrl: summary.avatar,
    namecardUrl: summary.namecard,
    title: summary.title || undefined,
    endorsementLevel: summary.endorsement?.level || 1,
    isPublic: true,
    lastUpdated: new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }),
    source: 'live-api',
    ranks,
    general: {
      totalGames,
      totalWins,
      totalLosses,
      winrate: Math.round(winrate * 10) / 10,
      totalTimeHours,
      kda: generalSummary.kda || 3.2,
      avgElimsPer10: generalSummary.average?.eliminations || 15.0,
      avgDeathsPer10: generalSummary.average?.deaths || 5.0,
      avgDamagePer10: Math.round(generalSummary.average?.damage || 7000),
      avgHealingPer10: Math.round(generalSummary.average?.healing || 6000),
    },
    topHeroes,
    allHeroStats,
  };
}

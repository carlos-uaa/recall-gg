import type { RankInfo, RankTier } from '../../types/game';
import type { Language } from '../../utils/i18n';

export const OVERWATCH_RANKS: RankInfo[] = [
  {
    id: 'bronze',
    name: 'Bronce',
    englishName: 'Bronze',
    icon: '/ranks/bronze.webp',
    accentColor: '#cd7f32',
    summary: 'Prioriza supervivencia autónoma y mecánicas consistentes',
    summaryEn: 'Prioritizes autonomous survival and consistent mechanics',
    coachingNote: 'Premia héroes autosuficientes con valor constante y penaliza selecciones que exigen puntería crítica o coordinación milimétrica.',
    coachingNoteEn: 'Rewards self-sufficient heroes with steady value and penalizes picks requiring pinpoint aim or pixel-perfect team coordination.',
  },
  {
    id: 'silver',
    name: 'Plata',
    englishName: 'Silver',
    icon: '/ranks/silver.webp',
    accentColor: '#cbd5e1',
    summary: 'Castiga sobreextensiones y premia impacto directo',
    summaryEn: 'Punishes overextensions and rewards direct impact',
    coachingNote: 'Favorece kits con control de zona claro, curación confiable y daño sostenido fácil de confirmar.',
    coachingNoteEn: 'Favors kits with clear area control, reliable healing, and easily confirmed sustained damage.',
  },
  {
    id: 'gold',
    name: 'Oro',
    englishName: 'Gold',
    icon: '/ranks/gold.webp',
    accentColor: '#f59e0b',
    summary: 'Equilibrio inicial entre fundamentos y counters',
    summaryEn: 'Initial balance between fundamentals and counters',
    coachingNote: 'Los counters directos empiezan a definir peleas; los héroes de dificultad baja y media mantienen gran estabilidad.',
    coachingNoteEn: 'Direct counter-picks start deciding fights; low and medium difficulty heroes retain great stability.',
  },
  {
    id: 'platinum',
    name: 'Platino',
    englishName: 'Platinum',
    icon: '/ranks/platinum.webp',
    accentColor: '#2dd4bf',
    summary: 'Gestión de ultimates, posicionamiento y adaptación',
    summaryEn: 'Ultimate economy, positioning, and adaptability',
    coachingNote: 'Ponderación competitiva equilibrada: importan tanto los counters directos como aprovechar líneas de visión del mapa.',
    coachingNoteEn: 'Balanced competitive weighting: direct counters and leveraging map sightlines both carry equal weight.',
  },
  {
    id: 'diamond',
    name: 'Diamante',
    englishName: 'Diamond',
    icon: '/ranks/diamond.webp',
    accentColor: '#38bdf8',
    summary: 'Ejecución mecánica sólida y control de High Ground',
    summaryEn: 'Solid mechanical execution and high ground control',
    coachingNote: 'Se castigan los enfriamientos gastados; los tiradores precisos y tanques de Dive ganan impacto real.',
    coachingNoteEn: 'Wasted cooldowns are punished; precision hitscans and Dive tanks gain massive real-match impact.',
  },
  {
    id: 'master',
    name: 'Maestro',
    englishName: 'Master',
    icon: '/ranks/master.webp',
    accentColor: '#34d399',
    summary: 'Coordinación de tempo, sinergias y presión de ángulos',
    summaryEn: 'Tempo coordination, synergies, and off-angle pressure',
    coachingNote: 'Las sinergias de equipo (Dive/Rush) y el dominio geométrico del mapa pesan fuerte en el resultado.',
    coachingNoteEn: 'Team synergies (Dive/Rush) and geometric map control heavily dictate the outcome.',
  },
  {
    id: 'grandmaster',
    name: 'Gran Maestro',
    englishName: 'Grandmaster',
    icon: '/ranks/grandmaster.webp',
    accentColor: '#a78bfa',
    summary: 'Alto techo mecánico y castigo instantáneo de errores',
    summaryEn: 'High mechanical ceiling and instant mistake punishment',
    coachingNote: 'Potencia picks de alta habilidad (Tracer, Genji, Sojourn, Widowmaker, Ana, Winston) y combos coordinados.',
    coachingNoteEn: 'Amplifies high-skill picks (Tracer, Genji, Sojourn, Widowmaker, Ana, Winston) and coordinated burst combos.',
  },
  {
    id: 'champion',
    name: 'Campeón',
    englishName: 'Champion',
    icon: '/ranks/champion.webp',
    accentColor: '#e879f9',
    summary: 'Precisión élite y optimización absoluta del meta',
    summaryEn: 'Elite precision and absolute meta optimization',
    coachingNote: 'Evalúa los enfrentamientos asumiendo ejecución óptima, rotaciones perfectas y máxima presión sobre debilidades de mapa.',
    coachingNoteEn: 'Evaluates matchups assuming optimal execution, flawless rotations, and maximal pressure on map weaknesses.',
  },
  {
    id: 'top500',
    name: 'Top 500',
    englishName: 'Top 500',
    icon: '/ranks/top500.webp',
    accentColor: '#fbbf24',
    summary: 'Cúspide competitiva: micro-sinergias y meta estricto',
    summaryEn: 'Competitive pinnacle: micro-synergies and strict meta',
    coachingNote: 'Prioriza el techo mecánico máximo, sinergias de nivel torneo y ventaja estricta de mapa y composición.',
    coachingNoteEn: 'Prioritizes maximum mechanical ceiling, tournament-level synergies, and decisive map advantage.',
  },
];

export function getRankInfo(rankTier: RankTier): RankInfo {
  return OVERWATCH_RANKS.find(r => r.id === rankTier) || OVERWATCH_RANKS[4]; // default Diamond
}

export function getRankDisplayName(rank: RankInfo, lang: Language = 'es'): string {
  return lang === 'en' ? rank.englishName : rank.name;
}

export function getRankSummary(rank: RankInfo, lang: Language = 'es'): string {
  return lang === 'en' ? rank.summaryEn || rank.summary : rank.summary;
}

export function getRankCoachingNote(rank: RankInfo, lang: Language = 'es'): string {
  return lang === 'en' ? rank.coachingNoteEn || rank.coachingNote : rank.coachingNote;
}

import type { RankInfo, RankTier } from '../../types/game';

export const OVERWATCH_RANKS: RankInfo[] = [
  {
    id: 'bronze',
    name: 'Bronce',
    englishName: 'Bronze',
    icon: '/ranks/bronze.webp',
    accentColor: '#cd7f32',
    summary: 'Prioriza supervivencia autónoma y mecánicas consistentes',
    coachingNote: 'Premia héroes autosuficientes con valor constante y penaliza selecciones que exigen puntería crítica o coordinación milimétrica.',
  },
  {
    id: 'silver',
    name: 'Plata',
    englishName: 'Silver',
    icon: '/ranks/silver.webp',
    accentColor: '#cbd5e1',
    summary: 'Castiga sobreextensiones y premia impacto directo',
    coachingNote: 'Favorece kits con control de zona claro, curación confiable y daño sostenido fácil de confirmar.',
  },
  {
    id: 'gold',
    name: 'Oro',
    englishName: 'Gold',
    icon: '/ranks/gold.webp',
    accentColor: '#f59e0b',
    summary: 'Equilibrio inicial entre fundamentos y counters',
    coachingNote: 'Los counters directos empiezan a definir peleas; los héroes de dificultad baja y media mantienen gran estabilidad.',
  },
  {
    id: 'platinum',
    name: 'Platino',
    englishName: 'Platinum',
    icon: '/ranks/platinum.webp',
    accentColor: '#2dd4bf',
    summary: 'Gestión de ultimates, posicionamiento y adaptación',
    coachingNote: 'Ponderación competitiva equilibrada: importan tanto los counters directos como aprovechar líneas de visión del mapa.',
  },
  {
    id: 'diamond',
    name: 'Diamante',
    englishName: 'Diamond',
    icon: '/ranks/diamond.webp',
    accentColor: '#38bdf8',
    summary: 'Ejecución mecánica sólida y control de High Ground',
    coachingNote: 'Se castigan los enfriamientos gastados; los tiradores precisos y tanques de Dive ganan impacto real.',
  },
  {
    id: 'master',
    name: 'Maestro',
    englishName: 'Master',
    icon: '/ranks/master.webp',
    accentColor: '#34d399',
    summary: 'Coordinación de tempo, sinergias y presión de ángulos',
    coachingNote: 'Las sinergias de equipo (Dive/Rush) y el dominio geométrico del mapa pesan fuerte en el resultado.',
  },
  {
    id: 'grandmaster',
    name: 'Gran Maestro',
    englishName: 'Grandmaster',
    icon: '/ranks/grandmaster.webp',
    accentColor: '#a78bfa',
    summary: 'Alto techo mecánico y castigo instantáneo de errores',
    coachingNote: 'Potencia picks de alta habilidad (Tracer, Genji, Sojourn, Widowmaker, Ana, Winston) y combos coordinados.',
  },
  {
    id: 'champion',
    name: 'Campeón',
    englishName: 'Champion',
    icon: '/ranks/champion.webp',
    accentColor: '#e879f9',
    summary: 'Precisión élite y optimización absoluta del meta',
    coachingNote: 'Evalúa los enfrentamientos asumiendo ejecución óptima, rotaciones perfectas y máxima presión sobre debilidades de mapa.',
  },
  {
    id: 'top500',
    name: 'Top 500',
    englishName: 'Top 500',
    icon: '/ranks/top500.webp',
    accentColor: '#fbbf24',
    summary: 'Cúspide competitiva: micro-sinergias y meta estricto',
    coachingNote: 'Prioriza el techo mecánico máximo, sinergias de nivel torneo y ventaja estricta de mapa y composición.',
  },
];

export function getRankInfo(rankTier: RankTier): RankInfo {
  return OVERWATCH_RANKS.find(r => r.id === rankTier) || OVERWATCH_RANKS[4]; // default Diamond
}

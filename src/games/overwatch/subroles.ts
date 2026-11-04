import type { Role } from '../../types/game';

export type SubroleId =
  // Tanques
  | 'iniciador'
  | 'bruiser'
  | 'baluarte'
  // Daño
  | 'flanqueador'
  | 'reconocimiento'
  | 'especialista'
  | 'tirador'
  // Soporte
  | 'tactico'
  | 'medico'
  | 'superviviente';

export interface SubroleMeta {
  id: SubroleId;
  role: Role;
  name: string;
  englishName: string;
  badge: string;
  accentColor: string;
  passiveName: string;
  passiveShortSummary: string;
  passiveDescription: string;
  heroIds: string[];
}

export const OVERWATCH_SUBROLES: Record<SubroleId, SubroleMeta> = {
  // ==================== TANQUES ====================
  iniciador: {
    id: 'iniciador',
    role: 'tank',
    name: 'Iniciador',
    englishName: 'Initiator',
    badge: 'Aéreo & Movilidad',
    accentColor: '#38bdf8', // sky-400
    passiveName: 'Regeneración Aérea & Impulso',
    passiveShortSummary: 'Sana al estar en el aire y al usar habilidades de movimiento vertical/engage.',
    passiveDescription:
      'Al estar en el aire o activar habilidades de salto/propulsión, recibes una regeneración ligera continua de salud que amortigua el fuego cruzado al iniciar peleas.',
    heroIds: ['dva', 'doomfist', 'hazard', 'winston', 'wrecking-ball'],
  },
  bruiser: {
    id: 'bruiser',
    role: 'tank',
    name: 'Bruiser',
    englishName: 'Bruiser',
    badge: 'Furia & Brawler',
    accentColor: '#f97316', // orange-500
    passiveName: 'Resistencia Crítica & Furia',
    passiveShortSummary: 'Recibe daño crítico reducido y gana velocidad de movimiento al tener salud crítica (<50%).',
    passiveDescription:
      'Los disparos a la cabeza recibidos infligen un multiplicador de daño crítico reducido. Además, al bajar del 50% de vida máxima se activa un bono de velocidad de movimiento para reposicionarse o rematar objetivos.',
    heroIds: ['mauga', 'orisa', 'roadhog', 'zarya'],
  },
  baluarte: {
    id: 'baluarte',
    role: 'tank',
    name: 'Baluarte',
    englishName: 'Stalwart',
    badge: 'Defensa Inamovible',
    accentColor: '#eab308', // yellow-500
    passiveName: 'Resistencia a Empujes & Ralentizaciones',
    passiveShortSummary: 'Reduce en un 40% los efectos de empuje (knockback) y las ralentizaciones.',
    passiveDescription:
      'Otorga una firmeza pasiva superior frente a habilidades de control: reduce en un 40% la distancia de empujes y la duración o intensidad de las ralentizaciones de movimiento.',
    heroIds: ['junker-queen', 'ramattra', 'reinhardt', 'sigma', 'domina', 'dmon'],
  },

  // ==================== DAÑO (DPS) ====================
  flanqueador: {
    id: 'flanqueador',
    role: 'damage',
    name: 'Flanqueador',
    englishName: 'Flanker',
    badge: 'Carroñero & Duelo',
    accentColor: '#a855f7', // purple-500
    passiveName: 'Carroñero de Botiquines',
    passiveShortSummary: 'Los botiquines curan mucho más: +75 HP extra en pequeños (125 HP) y hasta 300 HP en grandes.',
    passiveDescription:
      'Al recoger botiquines en el mapa, recibes sanación incrementada: los botiquines pequeños otorgan 125 HP (en vez de 75) y los grandes restauran 300 HP o tu barra entera, permitiendo sobrevivir en solitario tras líneas enemigas.',
    heroIds: ['genji', 'tracer', 'reaper', 'venture', 'shion', 'vendetta', 'anran'],
  },
  reconocimiento: {
    id: 'reconocimiento',
    role: 'damage',
    name: 'Reconocimiento',
    englishName: 'Recon',
    badge: 'Visión & Detección',
    accentColor: '#06b6d4', // cyan-500
    passiveName: 'Rastreo de Presas Heridas',
    passiveShortSummary: 'Dañar a enemigos con <50% de salud los revela a través de paredes durante 5s.',
    passiveDescription:
      'Cualquier impacto infligido a un oponente que se encuentre por debajo del 50% de su salud total lo marca y lo revela a través de las paredes y obstáculos durante 5 segundos para todo tu equipo.',
    heroIds: ['echo', 'freja', 'pharah', 'sierra'],
  },
  especialista: {
    id: 'especialista',
    role: 'damage',
    name: 'Especialista',
    englishName: 'Specialist',
    badge: 'Control & Ráfaga',
    accentColor: '#10b981', // emerald-500
    passiveName: 'Recarga Táctica en Eliminación',
    passiveShortSummary: 'Conseguir una baja o asistencia decisiva acelera un 50% tu velocidad de recarga.',
    passiveDescription:
      'Al asegurar una eliminación o asistencia final, tu velocidad de recarga aumenta drásticamente (50% más rápida) durante varios segundos para mantener la presión de fuego en el punto.',
    heroIds: ['bastion', 'junkrat', 'mei', 'soldier76', 'symmetra', 'torbjorn', 'emre'],
  },
  tirador: {
    id: 'tirador',
    role: 'damage',
    name: 'Tirador',
    englishName: 'Sharpshooter',
    badge: 'Precisión Hitscan',
    accentColor: '#ef4444', // red-500
    passiveName: 'Precisión Crítica de Movilidad',
    passiveShortSummary: 'Acertar disparos críticos a la cabeza reduce el enfriamiento de tus escapes.',
    passiveDescription:
      'Cada disparo crítico acertado en la cabeza reduce activamente los tiempos de recarga de tus habilidades de movilidad y reposicionamiento (como gancho, voltereta o deslizamiento).',
    heroIds: ['ashe', 'cassidy', 'hanzo', 'sojourn', 'widowmaker'],
  },

  // ==================== SOPORTE ====================
  tactico: {
    id: 'tactico',
    role: 'support',
    name: 'Táctico',
    englishName: 'Tactician',
    badge: 'Control & Definitiva',
    accentColor: '#3b82f6', // blue-500
    passiveName: 'Reserva Excedente de Definitiva',
    passiveShortSummary: 'Almacena hasta un 25% de carga extra de ultimate que se transfiere a la siguiente ulti.',
    passiveDescription:
      'Permite acumular carga de definitiva más allá del 100% (hasta un 25% de reserva adicional). Al activar tu definitiva, ese porcentaje excedente se conserva como carga base para tu próxima ultimate.',
    heroIds: ['ana', 'baptiste', 'lucio', 'zenyatta', 'jetpack-cat', 'sombra'],
  },
  medico: {
    id: 'medico',
    role: 'support',
    name: 'Médico',
    englishName: 'Medic',
    badge: 'Sanación Pura',
    accentColor: '#ec4899', // pink-500
    passiveName: 'Sanación Simbiótica',
    passiveShortSummary: 'Curar a tus aliados con tus armas o habilidades primarias te regenera vida a ti mismo.',
    passiveDescription:
      'Cada punto de sanación que proporcionas activamente a un aliado mediante tu armamento o flujo curativo principal restaura un porcentaje de tu propia salud de forma simultánea.',
    heroIds: ['kiriko', 'lifeweaver', 'mercy', 'moira'],
  },
  superviviente: {
    id: 'superviviente',
    role: 'support',
    name: 'Superviviente',
    englishName: 'Survivor',
    badge: 'Movilidad & Escape',
    accentColor: '#14b8a6', // teal-500
    passiveName: 'Regeneración por Movilidad',
    passiveShortSummary: 'Usar habilidades de movimiento activa de inmediato la regeneración pasiva de salud.',
    passiveDescription:
      'Al activar cualquier habilidad de movimiento o desplazamiento (como Carga con Escudo, Carrera, Vuelo o Salto solar), se dispara instantáneamente la regeneración de salud pasiva sin esperar el tiempo de fuera de combate.',
    heroIds: ['brigitte', 'illari', 'juno', 'mizuki', 'wuyang', 'doctrine'],
  },
};

/**
 * Obtiene la metadata del subrol de un héroe dado su id
 */
export function getSubroleForHero(heroId: string): SubroleMeta {
  const targetId = heroId.toLowerCase();
  for (const subrole of Object.values(OVERWATCH_SUBROLES)) {
    if (subrole.heroIds.includes(targetId)) {
      return subrole;
    }
  }
  // Fallback si no está mapeado
  return OVERWATCH_SUBROLES.especialista;
}

/**
 * Obtiene todos los subroles pertenecientes a un rol ('tank' | 'damage' | 'support')
 */
export function getSubrolesByRole(role: Role): SubroleMeta[] {
  return Object.values(OVERWATCH_SUBROLES).filter(sub => sub.role === role);
}

/**
 * Hook simple para persistir la preferencia de segmentación:
 * 'subrole' = Dividir cada rol en sus subroles oficiales con su pasiva
 * 'role' = Agrupar todos los héroes del rol mezclados alfabéticamente
 */
export type HeroGroupingMode = 'subrole' | 'role';

const GROUPING_STORAGE_KEY = 'recall_hero_grouping_mode';

export function getStoredHeroGroupingMode(): HeroGroupingMode {
  if (typeof window === 'undefined') return 'subrole';
  const val = localStorage.getItem(GROUPING_STORAGE_KEY);
  if (val === 'role' || val === 'subrole') return val;
  return 'subrole';
}

export function setStoredHeroGroupingMode(mode: HeroGroupingMode): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(GROUPING_STORAGE_KEY, mode);
  window.dispatchEvent(new CustomEvent('recall-grouping-mode-change', { detail: mode }));
}

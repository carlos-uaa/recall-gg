import type { Role } from '../../types/game';
import type { Language } from '../../utils/i18n';

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
  englishBadge: string;
  accentColor: string;
  passiveName: string;
  englishPassiveName: string;
  passiveShortSummary: string;
  englishPassiveShortSummary: string;
  passiveDescription: string;
  englishPassiveDescription: string;
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
    englishBadge: 'Air & Mobility',
    accentColor: '#38bdf8', // sky-400
    passiveName: 'Regeneración Aérea & Impulso',
    englishPassiveName: 'Aerial Regeneration & Boost',
    passiveShortSummary: 'Sana al estar en el aire y al usar habilidades de movimiento vertical/engage.',
    englishPassiveShortSummary: 'Heals while airborne and when using vertical/engage mobility tools.',
    passiveDescription:
      'Al estar en el aire o activar habilidades de salto/propulsión, recibes una regeneración ligera continua de salud que amortigua el fuego cruzado al iniciar peleas.',
    englishPassiveDescription:
      'While airborne or activating jump/booster mobility abilities, you receive continuous light health regeneration that cushions crossfire during initiations.',
    heroIds: ['dva', 'doomfist', 'hazard', 'winston', 'wrecking-ball'],
  },
  bruiser: {
    id: 'bruiser',
    role: 'tank',
    name: 'Bruiser',
    englishName: 'Bruiser',
    badge: 'Furia & Brawler',
    englishBadge: 'Fury & Brawler',
    accentColor: '#f97316', // orange-500
    passiveName: 'Resistencia Crítica & Furia',
    englishPassiveName: 'Critical Resilience & Enrage',
    passiveShortSummary: 'Recibe daño crítico reducido y gana velocidad de movimiento al tener salud crítica (<50%).',
    englishPassiveShortSummary: 'Takes reduced critical damage and gains speed boost at critical health (<50%).',
    passiveDescription:
      'Los disparos a la cabeza recibidos infligen un multiplicador de daño crítico reducido. Además, al bajar del 50% de vida máxima se activa un bono de velocidad de movimiento para reposicionarse o rematar objetivos.',
    englishPassiveDescription:
      'Headshots received inflict a reduced critical damage multiplier. Dropping below 50% health triggers a movement speed boost to reposition or finish targets.',
    heroIds: ['mauga', 'orisa', 'roadhog', 'zarya'],
  },
  baluarte: {
    id: 'baluarte',
    role: 'tank',
    name: 'Baluarte',
    englishName: 'Stalwart',
    badge: 'Defensa Inamovible',
    englishBadge: 'Unstoppable Defense',
    accentColor: '#eab308', // yellow-500
    passiveName: 'Resistencia a Empujes & Ralentizaciones',
    englishPassiveName: 'Knockback & Slow Resistance',
    passiveShortSummary: 'Reduce en un 40% los efectos de empuje (knockback) y las ralentizaciones.',
    englishPassiveShortSummary: 'Reduces knockback distance and slow effects by 40%.',
    passiveDescription:
      'Otorga una firmeza pasiva superior frente a habilidades de control: reduce en un 40% la distancia de empujes y la duración o intensidad de las ralentizaciones de movimiento.',
    englishPassiveDescription:
      'Grants superior passive resistance against crowd control: reduces knockback distances and slow durations/intensities by 40%.',
    heroIds: ['junker-queen', 'ramattra', 'reinhardt', 'sigma', 'domina', 'dmon'],
  },

  // ==================== DAÑO (DPS) ====================
  flanqueador: {
    id: 'flanqueador',
    role: 'damage',
    name: 'Flanqueador',
    englishName: 'Flanker',
    badge: 'Carroñero & Duelo',
    englishBadge: 'Scavenger & Duelist',
    accentColor: '#a855f7', // purple-500
    passiveName: 'Carroñero de Botiquines',
    englishPassiveName: 'Health Pack Scavenger',
    passiveShortSummary: 'Los botiquines curan mucho más: +75 HP extra en pequeños (125 HP) y hasta 300 HP en grandes.',
    englishPassiveShortSummary: 'Health packs heal much more: +75 HP on small (125 HP) and up to 300 HP on mega packs.',
    passiveDescription:
      'Al recoger botiquines en el mapa, recibes sanación incrementada: los botiquines pequeños otorgan 125 HP (en vez de 75) y los grandes restauran 300 HP o tu barra entera, permitiendo sobrevivir en solitario tras líneas enemigas.',
    englishPassiveDescription:
      'Picking up map health packs grants enhanced healing: mini packs restore 125 HP (up from 75) and mega packs restore 300 HP or full health, enabling solo survivability behind enemy lines.',
    heroIds: ['genji', 'tracer', 'reaper', 'venture', 'shion', 'vendetta', 'anran'],
  },
  reconocimiento: {
    id: 'reconocimiento',
    role: 'damage',
    name: 'Reconocimiento',
    englishName: 'Recon',
    badge: 'Visión & Detección',
    englishBadge: 'Vision & Tracking',
    accentColor: '#06b6d4', // cyan-500
    passiveName: 'Rastreo de Presas Heridas',
    englishPassiveName: 'Prey Tracker',
    passiveShortSummary: 'Dañar a enemigos con <50% de salud los revela a través de paredes durante 5s.',
    englishPassiveShortSummary: 'Damaging enemies below 50% health reveals them through walls for 5s.',
    passiveDescription:
      'Cualquier impacto infligido a un oponente que se encuentre por debajo del 50% de su salud total lo marca y lo revela a través de las paredes y obstáculos durante 5 segundos para todo tu equipo.',
    englishPassiveDescription:
      'Any damage dealt to an opponent who is below 50% total health tags and reveals them through walls and obstacles for 5 seconds for your entire team.',
    heroIds: ['echo', 'freja', 'pharah', 'sierra'],
  },
  especialista: {
    id: 'especialista',
    role: 'damage',
    name: 'Especialista',
    englishName: 'Specialist',
    badge: 'Control & Ráfaga',
    englishBadge: 'Control & Burst',
    accentColor: '#10b981', // emerald-500
    passiveName: 'Recarga Táctica en Eliminación',
    englishPassiveName: 'Elimination Tactical Reload',
    passiveShortSummary: 'Conseguir una baja o asistencia decisiva acelera un 50% tu velocidad de recarga.',
    englishPassiveShortSummary: 'Securing an elimination or final assist boosts reload speed by 50% for several seconds.',
    passiveDescription:
      'Al asegurar una eliminación o asistencia final, tu velocidad de recarga aumenta drásticamente (50% más rápida) durante varios segundos para mantener la presión de fuego en el punto.',
    englishPassiveDescription:
      'Securing an elimination or final assist dramatically accelerates reload speed (50% faster) for several seconds to maintain point pressure.',
    heroIds: ['bastion', 'junkrat', 'mei', 'soldier76', 'symmetra', 'torbjorn', 'emre'],
  },
  tirador: {
    id: 'tirador',
    role: 'damage',
    name: 'Tirador',
    englishName: 'Sharpshooter',
    badge: 'Precisión Hitscan',
    englishBadge: 'Precision Hitscan',
    accentColor: '#ef4444', // red-500
    passiveName: 'Precisión Crítica de Movilidad',
    englishPassiveName: 'Critical Precision',
    passiveShortSummary: 'Acertar disparos críticos a la cabeza reduce el enfriamiento de tus escapes.',
    englishPassiveShortSummary: 'Landing critical headshots actively reduces mobility and escape ability cooldowns.',
    passiveDescription:
      'Cada disparo crítico acertado en la cabeza reduce activamente los tiempos de recarga de tus habilidades de movilidad y reposicionamiento (como gancho, voltereta o deslizamiento).',
    englishPassiveDescription:
      'Every critical headshot landed directly reduces the cooldowns of your escape and mobility tools (such as grapple, roll, or slide).',
    heroIds: ['ashe', 'cassidy', 'hanzo', 'sojourn', 'widowmaker'],
  },

  // ==================== SOPORTE ====================
  tactico: {
    id: 'tactico',
    role: 'support',
    name: 'Táctico',
    englishName: 'Tactician',
    badge: 'Control & Definitiva',
    englishBadge: 'Control & Ultimate',
    accentColor: '#3b82f6', // blue-500
    passiveName: 'Reserva Excedente de Definitiva',
    englishPassiveName: 'Surplus Ultimate Bank',
    passiveShortSummary: 'Almacena hasta un 25% de carga extra de ultimate que se transfiere a la siguiente ulti.',
    englishPassiveShortSummary: 'Store up to 25% extra ultimate charge that carries over to your next ultimate upon cast.',
    passiveDescription:
      'Permite acumular carga de definitiva más allá del 100% (hasta un 25% de reserva adicional). Al activar tu definitiva, ese porcentaje excedente se conserva como carga base para tu próxima ultimate.',
    englishPassiveDescription:
      'Allows accumulating ultimate charge past 100% (up to a 25% surplus bank). Upon using your ultimate, that extra charge carries over as starting charge for your next ult.',
    heroIds: ['ana', 'baptiste', 'lucio', 'zenyatta', 'jetpack-cat', 'sombra'],
  },
  medico: {
    id: 'medico',
    role: 'support',
    name: 'Médico',
    englishName: 'Medic',
    badge: 'Sanación Pura',
    englishBadge: 'Pure Healing',
    accentColor: '#ec4899', // pink-500
    passiveName: 'Sanación Simbiótica',
    englishPassiveName: 'Symbiotic Healing',
    passiveShortSummary: 'Curar a tus aliados con tus armas o habilidades primarias te regenera vida a ti mismo.',
    englishPassiveShortSummary: 'Healing allies with your primary weapons or abilities automatically restores health to yourself.',
    passiveDescription:
      'Cada punto de sanación que proporcionas activamente a un aliado mediante tu armamento o flujo curativo principal restaura un porcentaje de tu propia salud de forma simultánea.',
    englishPassiveDescription:
      'Every point of active healing delivered to an ally via your primary weapons or healing stream simultaneously restores a percentage of your own health.',
    heroIds: ['kiriko', 'lifeweaver', 'mercy', 'moira'],
  },
  superviviente: {
    id: 'superviviente',
    role: 'support',
    name: 'Superviviente',
    englishName: 'Survivor',
    badge: 'Movilidad & Escape',
    englishBadge: 'Mobility & Escape',
    accentColor: '#14b8a6', // teal-500
    passiveName: 'Regeneración por Movilidad',
    englishPassiveName: 'Mobility Health Regeneration',
    passiveShortSummary: 'Usar habilidades de movimiento activa de inmediato la regeneración pasiva de salud.',
    englishPassiveShortSummary: 'Using any movement ability instantly triggers passive health regeneration.',
    passiveDescription:
      'Al activar cualquier habilidad de movimiento o desplazamiento (como Carga con Escudo, Carrera, Vuelo o Salto solar), se dispara instantáneamente la regeneración de salud pasiva sin esperar el tiempo de fuera de combate.',
    englishPassiveDescription:
      'Activating any movement or repositioning ability (such as Shield Bash, Dash, Flight, or Outburst) immediately triggers passive health regen without waiting for the out-of-combat timer.',
    heroIds: ['brigitte', 'illari', 'juno', 'mizuki', 'wuyang', 'doctrine'],
  },
};

export function getSubroleDisplayName(subrole: SubroleMeta, lang: Language = 'es'): string {
  return lang === 'en' ? subrole.englishName : subrole.name;
}

export function getSubrolePassiveName(subrole: SubroleMeta, lang: Language = 'es'): string {
  return lang === 'en' ? subrole.englishPassiveName : subrole.passiveName;
}

export function getSubrolePassiveSummary(subrole: SubroleMeta, lang: Language = 'es'): string {
  return lang === 'en' ? subrole.englishPassiveShortSummary : subrole.passiveShortSummary;
}

export function getSubrolePassiveDescription(subrole: SubroleMeta, lang: Language = 'es'): string {
  return lang === 'en' ? subrole.englishPassiveDescription : subrole.passiveDescription;
}

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
  return OVERWATCH_SUBROLES.especialista;
}

/**
 * Obtiene todos los subroles pertenecientes a un rol ('tank' | 'damage' | 'support')
 */
export function getSubrolesByRole(role: Role): SubroleMeta[] {
  return Object.values(OVERWATCH_SUBROLES).filter(sub => sub.role === role);
}

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

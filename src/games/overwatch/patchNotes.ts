import type { Role } from '../../types/game';

export type PatchType = 'mid-season' | 'season-launch' | 'hotfix' | 'balance';

export type ChangeImpact = 'buff' | 'nerf' | 'adjustment' | 'rework';

export interface AbilityChangeItem {
  abilityName: string;
  abilityIcon?: string;
  impact: ChangeImpact;
  summary: string;
  previousValue?: string;
  newValue?: string;
  details?: string;
}

export interface HeroPatchChange {
  heroId: string;
  heroName: string;
  role: Role;
  subrole: string;
  overallImpact: ChangeImpact;
  developerNotes?: string;
  abilities: AbilityChangeItem[];
}

export interface GeneralSystemChange {
  title: string;
  category: 'Sistema' | 'Pasivas de Rol' | 'Modos de Juego' | 'Mapas' | 'UI / Calidad de Vida';
  description: string;
}

export interface PatchNote {
  id: string;
  version: string;
  date: string; // ISO format or display format
  displayDate: string;
  title: string;
  patchType: PatchType;
  badgeLabel: string;
  summary: string;
  developerIntro?: string;
  affectedHeroIds: string[];
  systemChanges?: GeneralSystemChange[];
  heroChanges: HeroPatchChange[];
}

export const OVERWATCH_PATCHES: PatchNote[] = [
  // ==========================================
  // PARCHE 1: MID-SEASON NOVIEMBRE 2026 (AYER)
  // ==========================================
  {
    id: 'patch-2026-11-03',
    version: '2.14.2',
    date: '2026-11-03',
    displayDate: '3 de Noviembre de 2026',
    title: 'Ajustes de Mitad de Temporada: Resiliencia Brawl, Ajuste a Deflect y Potenciación de Illari y Junker Queen',
    patchType: 'mid-season',
    badgeLabel: 'Mid-Season 14',
    summary:
      'Gran impacto en el meta de tanques y duelistas. Junker Queen y Mauga reciben mayor resistencia y capacidad ofensiva continua, Reaper gana durabilidad para peleas en choke points, Illari ve acelerada su recarga solar y pilón curativo, mientras que Deflect de Genji se reduce a 1.5s y la Granada Biótica de Ana reduce su daño a 60.',
    developerIntro:
      'En esta actualización de mitad de temporada nos enfocamos en darle mayor viabilidad a tanques que estaban sufriendo frente al poke sostenido (como Junker Queen y Mauga). Al mismo tiempo, reducimos las ventanas defensivas más opresivas en duelos de flanqueo para acelerar el ritmo de juego y premiar el castigo a errores de posicionamiento.',
    affectedHeroIds: ['junker-queen', 'mauga', 'reaper', 'illari', 'genji', 'ana', 'doctrine', 'jetpack-cat'],
    systemChanges: [
      {
        title: 'Optimización de Cooldowns en Pasivas de Soporte Superviviente',
        category: 'Pasivas de Rol',
        description:
          'Se ajustó la sensibilidad del temporizador de la pasiva Superviviente para asegurar que las habilidades de movilidad canceladas anticipadamente activen la regeneración de salud con un retraso máximo de 0.25 segundos.',
      },
      {
        title: 'Normalización de Detección en la Pasiva Flanqueador (Carroñero)',
        category: 'Pasivas de Rol',
        description:
          'La curación incrementada (+75 HP en botiquines pequeños y 300 HP en grandes) ahora se aplica en el mismo frame de recogida sin desfase de red.',
      },
    ],
    heroChanges: [
      {
        heroId: 'junker-queen',
        heroName: 'Junker Queen',
        role: 'tank',
        subrole: 'Baluarte',
        overallImpact: 'buff',
        developerNotes:
          'Junker Queen necesitaba mayor colchón de vida para aguantar las fases de aproximación antes de conectar su combo de hacha y sangrado en espacios cerrados.',
        abilities: [
          {
            abilityName: 'Salud Base (Role Queue)',
            impact: 'buff',
            summary: 'Salud base aumentada en +50 puntos.',
            previousValue: '375 HP (450 total en 5v5)',
            newValue: '425 HP (500 total en 5v5 / 6v6)',
            details: 'Aumenta drásticamente su supervivencia frente al fuego concentrado al entrar a distancia corta.',
          },
          {
            abilityName: 'Matanza (Carnage)',
            impact: 'buff',
            summary: 'Tiempo de reutilización base reducido.',
            previousValue: '9 segundos',
            newValue: '7 segundos',
            details: 'Permite encadenar tajos con mayor frecuencia, especialmente al combinarse con su perk de reducción de enfriamiento por impacto.',
          },
        ],
      },
      {
        heroId: 'mauga',
        heroName: 'Mauga',
        role: 'tank',
        subrole: 'Bruiser',
        overallImpact: 'buff',
        developerNotes:
          'Mauga dependía excesivamente del pocket healing durante el fuego cruzado inicial. Aumentamos su armadura base para amortiguar proyectiles de dispersión.',
        abilities: [
          {
            abilityName: 'Armadura Base',
            impact: 'buff',
            summary: 'Armadura base incrementada para mayor mitigación de daño.',
            previousValue: '125 de armadura',
            newValue: '150 de armadura',
            details: 'Reduce el daño recibido de escopetas, ametralladoras y ataques rápidos sostenidos.',
          },
        ],
      },
      {
        heroId: 'reaper',
        heroName: 'Reaper',
        role: 'damage',
        subrole: 'Flanqueador',
        overallImpact: 'buff',
        developerNotes:
          'El aumento de daño general en temporadas recientes redujo la capacidad de Reaper de mantenerse en el punto de contacto contra tanques enemigos.',
        abilities: [
          {
            abilityName: 'Salud Base',
            impact: 'buff',
            summary: 'Salud total incrementada.',
            previousValue: '300 HP',
            newValue: '325 HP (+25 HP)',
            details: 'Mayor aguante para castigar a tanques en espacios reducidos y salir ileso con Forma Espectral.',
          },
        ],
      },
      {
        heroId: 'illari',
        heroName: 'Illari',
        role: 'support',
        subrole: 'Superviviente',
        overallImpact: 'buff',
        developerNotes:
          'Illari no lograba competir contra otros apoyos de daño hitscan debido al retraso en la recarga de energía de su rifle solar.',
        abilities: [
          {
            abilityName: 'Rifle Solar (Fuego Principal)',
            impact: 'buff',
            summary: 'Tiempo de recarga de carga solar acelerado.',
            previousValue: '1.0s para recarga al 100%',
            newValue: '0.85s para recarga al 100%',
            details: 'Permite disparar tiros completamente cargados de 75 de daño con una cadencia más fluida y letal.',
          },
          {
            abilityName: 'Pilón de Curación',
            impact: 'buff',
            summary: 'Salud del pilón y tasa de sanación optimizadas.',
            previousValue: '100 HP + 25 Escudos',
            newValue: '100 HP + 50 Escudos',
            details: 'Mayor resistencia contra flanqueadores que intenten destruir el pilón desde ángulos ciegos.',
          },
        ],
      },
      {
        heroId: 'genji',
        heroName: 'Genji',
        role: 'damage',
        subrole: 'Flanqueador',
        overallImpact: 'nerf',
        developerNotes:
          'Una duración de 2.0 segundos en Deflect le otorgaba a Genji un tiempo de estancamiento excesivo para esperar refuerzos o resetear Dash.',
        abilities: [
          {
            abilityName: 'Desvío (Deflect)',
            impact: 'nerf',
            summary: 'Duración máxima de canalización reducida.',
            previousValue: '2.0 segundos',
            newValue: '1.5 segundos',
            details: 'Los rivales ahora tienen una ventana más estrecha y predecible para castigar a Genji una vez finalizado el desvío.',
          },
        ],
      },
      {
        heroId: 'ana',
        heroName: 'Ana',
        role: 'support',
        subrole: 'Táctico',
        overallImpact: 'nerf',
        developerNotes:
          'El potencial de solo-kill sorpresa de Ana con el combo de dardo sedante + disparo + granada biótica de 90 de daño resultaba demasiado punitivo.',
        abilities: [
          {
            abilityName: 'Granada Biótica',
            impact: 'nerf',
            summary: 'Daño de impacto directo reducido (la sanación y efecto anti-heal se mantienen iguales).',
            previousValue: '90 de daño',
            newValue: '60 de daño',
            details: 'Mantiene intacta su utilidad estratégica de denegación de curación enemiga, pero reduce su daño de estallido solitario.',
          },
        ],
      },
      {
        heroId: 'doctrine',
        heroName: 'Doctrine',
        role: 'support',
        subrole: 'Superviviente',
        overallImpact: 'nerf',
        developerNotes:
          'La dominancia de Doctrine en rangos altos se debía a su ciclo ininterrumpido de infusión y reposicionamiento etéreo.',
        abilities: [
          {
            abilityName: 'Impulso Sombrío (Shrouded Momentum)',
            impact: 'nerf',
            summary: 'Tiempo de reutilización aumentado.',
            previousValue: '7 segundos',
            newValue: '8.5 segundos',
            details: 'Aumenta el tiempo en que Doctrine es vulnerable antes de volver a escapar.',
          },
          {
            abilityName: 'Infusión Etérea',
            impact: 'nerf',
            summary: 'Eficacia de sobrecuración disminuida ligeramente.',
            previousValue: '50 HP de sobreescudo temporal',
            newValue: '35 HP de sobreescudo temporal',
            details: 'Evita que los flanqueadores aliados reciban excesivo soporte preventivo antes de iniciar el combate.',
          },
        ],
      },
      {
        heroId: 'jetpack-cat',
        heroName: 'Jetpack Cat',
        role: 'support',
        subrole: 'Táctico',
        overallImpact: 'nerf',
        developerNotes:
          'Jetpack Cat contaba con un perfil de hitbox aéreo reducido que, combinado con 225 HP, la hacía casi inmune al poke de francotiradores.',
        abilities: [
          {
            abilityName: 'Salud Base',
            impact: 'nerf',
            summary: 'Salud total reducida a la categoría de héroe ágil de 200 HP.',
            previousValue: '225 HP',
            newValue: '200 HP',
            details: 'Ahora es vulnerable a dos disparos de precisión de hitscans y a impactos directos de proyectiles pesados.',
          },
        ],
      },
    ],
  },

  // ==========================================
  // PARCHE 2: LANZAMIENTO TEMPORADA 14 (OCT 2026)
  // ==========================================
  {
    id: 'patch-2026-10-15',
    version: '2.14.0',
    date: '2026-10-15',
    displayDate: '15 de Octubre de 2026',
    title: 'Lanzamiento de Temporada 14: Renovación de Pasivas de Subrol y Escalamiento de Armaduras',
    patchType: 'season-launch',
    badgeLabel: 'Season 14 Launch',
    summary:
      'Llegada de la Temporada 14 con la integración total del sistema de Pasivas Especiales de Subrol (Iniciador, Bruiser, Baluarte, Flanqueador, Especialista, Reconocimiento, Tirador, Táctico, Médico y Superviviente). Ajustes a la mitigación de armadura contra daño por tick.',
    developerIntro:
      '¡Bienvenidos a la Temporada 14! Con esta actualización formalizamos las pasivas de subrol que otorgan identidad táctica tangible a cada categoría de héroe sin necesidad de uniformizar a todo el rol general.',
    affectedHeroIds: ['hazard', 'dmon', 'freja', 'sombra', 'shion', 'venture', 'cassidy'],
    systemChanges: [
      {
        title: 'Mecánica de Subroles Activa Oficial',
        category: 'Pasivas de Rol',
        description:
          'Todos los héroes se clasifican formalmente en uno de los 10 subroles oficiales, recibiendo su pasiva correspondiente activa desde el inicio de la partida.',
      },
      {
        title: 'Mitigación de Armadura Estandarizada',
        category: 'Sistema',
        description:
          'La armadura reduce ahora 5 de daño por impacto (hasta un máximo del 50% de daño por disparo), otorgando mayor protección frente a daño continuo y armas automáticas.',
      },
    ],
    heroChanges: [
      {
        heroId: 'hazard',
        heroName: 'Hazard',
        role: 'tank',
        subrole: 'Iniciador',
        overallImpact: 'buff',
        abilities: [
          {
            abilityName: 'Muro Dentado',
            impact: 'buff',
            summary: 'Tiempo de despliegue acelerado de 0.8s a 0.5s.',
            previousValue: '0.8 segundos',
            newValue: '0.5 segundos',
          },
        ],
      },
      {
        heroId: 'freja',
        heroName: 'Freja',
        role: 'damage',
        subrole: 'Reconocimiento',
        overallImpact: 'buff',
        abilities: [
          {
            abilityName: 'Pasiva: Rastreo de Presas',
            impact: 'buff',
            summary: 'La duración del revelado a través de paredes aumentó de 3s a 5s.',
            previousValue: '3 segundos',
            newValue: '5 segundos',
          },
        ],
      },
      {
        heroId: 'cassidy',
        heroName: 'Cassidy',
        role: 'damage',
        subrole: 'Tirador',
        overallImpact: 'adjustment',
        abilities: [
          {
            abilityName: 'Pacificador',
            impact: 'adjustment',
            summary: 'Caída de daño a distancia ajustada de 25-35m a 30-40m.',
            previousValue: '25m - 35m',
            newValue: '30m - 40m',
          },
        ],
      },
    ],
  },

  // ==========================================
  // PARCHE 3: MID-SEASON TEMPORADA 13 (SEP 2026)
  // ==========================================
  {
    id: 'patch-2026-09-17',
    version: '2.13.2',
    date: '2026-09-17',
    displayDate: '17 de Septiembre de 2026',
    title: 'Ajustes de Mitad de Temporada 13: Calibración de Tanques Dive y Soportes de Asistencia Rápida',
    patchType: 'mid-season',
    badgeLabel: 'Mid-Season 13',
    summary:
      'Ajustes al Cañón Tesla de Winston en armaduras, aumento de la velocidad de vuelo de D.Va, retoques de sanación a Lifeweaver y estabilización de daño de proyectil de Hanzo y Mei.',
    developerIntro:
      'Observamos que las composiciones Dive estaban dominando en mapas con verticalidad extrema, mientras que en mapas llanos los apoyos tradicionales sufrían por falta de peel.',
    affectedHeroIds: ['winston', 'dva', 'lifeweaver', 'hanzo', 'mei'],
    heroChanges: [
      {
        heroId: 'winston',
        heroName: 'Winston',
        role: 'tank',
        subrole: 'Iniciador',
        overallImpact: 'adjustment',
        abilities: [
          {
            abilityName: 'Cañón Tesla',
            impact: 'adjustment',
            summary: 'El daño continuo ahora ignora el 20% de la mitigación plana de armadura.',
            previousValue: 'Mitigación de armadura estándar',
            newValue: 'Mitigación reducida en un 20%',
          },
        ],
      },
      {
        heroId: 'lifeweaver',
        heroName: 'Lifeweaver',
        role: 'support',
        subrole: 'Médico',
        overallImpact: 'buff',
        abilities: [
          {
            abilityName: 'Floración Sanadora',
            impact: 'buff',
            summary: 'Tiempo de recarga de sanación máxima reducido de 1.15s a 1.0s.',
            previousValue: '1.15 segundos',
            newValue: '1.0 segundos',
          },
        ],
      },
    ],
  },

  // ==========================================
  // PARCHE 4: LANZAMIENTO TEMPORADA 13 (AGO 2026)
  // ==========================================
  {
    id: 'patch-2026-08-20',
    version: '2.13.0',
    date: '2026-08-20',
    displayDate: '20 de Agosto de 2026',
    title: 'Lanzamiento de Temporada 13: Implementación de la Pasiva Carroñero para Flanqueadores',
    patchType: 'season-launch',
    badgeLabel: 'Season 13 Launch',
    summary:
      'Introducción de la pasiva Carroñero para Tracer, Genji, Reaper, Venture y Shion, permitiendo a los flanqueadores obtener +75 HP extra en botiquines pequeños. Rework de tiempo de reaparición cooperativo.',
    developerIntro:
      'Queríamos resolver la fricción entre flanqueadores y apoyos de línea trasera: ahora los héroes de flanqueo tienen la autonomía necesaria para mantenerse en el mapa usando los recursos del entorno.',
    affectedHeroIds: ['tracer', 'genji', 'reaper', 'venture', 'shion', 'anran', 'vendetta'],
    systemChanges: [
      {
        title: 'Pasiva Carroñero de Flanqueadores Activa',
        category: 'Pasivas de Rol',
        description:
          'Los héroes del subrol Flanqueador ahora restauran 125 HP de los botiquines pequeños (anteriormente 75 HP) y hasta 300 HP de los grandes.',
      },
    ],
    heroChanges: [
      {
        heroId: 'tracer',
        heroName: 'Tracer',
        role: 'damage',
        subrole: 'Flanqueador',
        overallImpact: 'adjustment',
        abilities: [
          {
            abilityName: 'Pistolas de Pulsos',
            impact: 'adjustment',
            summary: 'Dispersión ajustada en distancias medias para premiar el acercamiento a quemarropa.',
            previousValue: 'Dispersión 1.25',
            newValue: 'Dispersión 1.15',
          },
        ],
      },
    ],
  },

  // ==========================================
  // PARCHE 5: BALANCE COMPETITIVO VERANO (JUL 2026)
  // ==========================================
  {
    id: 'patch-2026-07-10',
    version: '2.12.3',
    date: '2026-07-10',
    displayDate: '10 de Julio de 2026',
    title: 'Actualización de Balance Competitivo: Resistencia a Controles y Afinación de Defensivas',
    patchType: 'balance',
    badgeLabel: 'Balance Patch',
    summary:
      'Ajuste en la resistencia al derribo y empujes para tanques Baluarte (Reinhardt, Sigma, Ramattra). Reducción de la duración del campo de inmortalidad de Baptiste.',
    developerIntro:
      'Ajustes destinados a mejorar la claridad de los duelos de frontline en torneos oficiales y reducir la frustración por habilidades que bloquean muertes instantáneas.',
    affectedHeroIds: ['reinhardt', 'sigma', 'ramattra', 'baptiste', 'kiriko'],
    heroChanges: [
      {
        heroId: 'baptiste',
        heroName: 'Baptiste',
        role: 'support',
        subrole: 'Táctico',
        overallImpact: 'nerf',
        abilities: [
          {
            abilityName: 'Campo de Inmortalidad',
            impact: 'nerf',
            summary: 'Duración reducida de 5.0s a 4.0s; enfriamiento mantenido en 25s.',
            previousValue: '5.0 segundos',
            newValue: '4.0 segundos',
          },
        ],
      },
      {
        heroId: 'reinhardt',
        heroName: 'Reinhardt',
        role: 'tank',
        subrole: 'Baluarte',
        overallImpact: 'buff',
        abilities: [
          {
            abilityName: 'Campo de Barrera',
            impact: 'buff',
            summary: 'Salud del escudo aumentada de 1400 a 1500 HP.',
            previousValue: '1400 HP',
            newValue: '1500 HP',
          },
        ],
      },
    ],
  },
];

/**
 * Obtiene todos los parches ordenados del más reciente al más antiguo
 */
export function getAllPatches(): PatchNote[] {
  return OVERWATCH_PATCHES.slice().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Filtra los parches que afectaron a un héroe en específico
 */
export function getPatchesForHero(heroId: string): PatchNote[] {
  const targetId = heroId.toLowerCase();
  return getAllPatches().filter(p => p.affectedHeroIds.includes(targetId));
}

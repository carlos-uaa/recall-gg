export type Role = 'tank' | 'damage' | 'support';

export type CompStyle = 'brawl' | 'dive' | 'poke';

export type GameId = 'overwatch' | 'valorant' | 'marvel-rivals';

export type AppTab = 'coach' | 'heroes' | 'counters' | 'meta' | 'guesser' | 'profile';

export type RankTier =
  | 'bronze'
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'diamond'
  | 'master'
  | 'grandmaster'
  | 'champion'
  | 'top500';

export interface RankInfo {
  id: RankTier;
  name: string;
  englishName: string;
  icon: string;
  accentColor: string;
  summary: string;
  coachingNote: string;
}

export type MapSynergyRating = 'ideal' | 'favorable' | 'neutral' | 'unfavorable' | 'poor';

export interface HeroMapEvaluation {
  mapId: string;
  score: number; // -16 to +16
  rating: MapSynergyRating;
  reason: string;
}

export interface CounterDetail {
  hard: boolean;
  motivo?: string;
}

export interface HeroAbilityItem {
  name: string;
  description: string;
  icon?: string;
}

export interface HeroPerkItem {
  name: string;
  description: string;
  icon?: string;
  pickRate?: number; // Porcentaje de selección en competitivo/ladder (0 a 100)
  proPick?: boolean; // Verdadero si es la selección prioritaria de profesionales (OWCS / Top 500)
  proReason?: string; // Justificación táctica de por qué los profesionales la eligen
}

export interface HeroKitData {
  accentColor: string;
  fullPortrait: string;
  hitpoints: {
    health: number;
    armor: number;
    shields: number;
    total: number;
  };
  weapons: HeroAbilityItem[];
  ultimate: HeroAbilityItem[];
  abilities: HeroAbilityItem[];
  passives: HeroAbilityItem[];
  perks: {
    minor: HeroPerkItem[];
    major: HeroPerkItem[];
  };
}

export interface Hero {
  id: string;
  name: string;
  role: Role;
  gender: 'Masculino' | 'Femenino' | 'No binario' | 'Ómnico' | 'Animal' | 'Otro';
  age: number;
  country: string;
  affiliation: string;
  releaseYear: number;
  range: 'Corto' | 'Medio' | 'Largo' | 'Melee';
  style: CompStyle;
  subrole: string;
  icon?: string;
  difficulty: 1 | 2 | 3; // 1: Fácil/Baja, 2: Media, 3: Alta (Widow, Tracer, Genji)
  description: string;
  tier?: 'S' | 'A' | 'B' | 'C' | 'D';
  counterAdvice?: string; // Consejo táctico de cómo hacerle counter
  perks: string[];
  counters: {
    strongAgainst: string[]; // Heroes this hero counters
    weakAgainst: string[];   // Heroes that counter this hero
    hardStrongAgainst?: string[]; // Hard counters against targets
    hardWeakAgainst?: string[];   // Hard countered by
    strongDetails?: Record<string, CounterDetail>;
    weakDetails?: Record<string, CounterDetail>;
  };
  synergies: string[];       // Heroes that work exceptionally well together
}

export type MapMode = 'Escolta' | 'Híbrido' | 'Control' | 'Avance' | 'Punto Caliente' | 'Invasión / Clash';

export interface GameMap {
  id: string;
  name: string;
  mode: MapMode;
  image?: string;
  favoredStyles: CompStyle[];
  hasHighGround: boolean;
  isCloseQuarters: boolean;
  longSightlines: boolean;
}

export interface RecommendationResult {
  hero: Hero;
  totalScore: number; // 0 to 100
  breakdown: {
    enemyCounterScore: number;
    allySynergyScore: number;
    mapFitScore: number;
    rankModifier: number;
  };
  pros: string[];
  cons: string[];
  tacticalVerdict: string;
}

export interface GuessAttributeFeedback {
  matched: boolean;
  partial?: boolean;
  value: string | number;
  direction?: 'higher' | 'lower'; // for numeric comparisons (age, release year)
}

export interface GuessFeedback {
  hero: Hero;
  name: GuessAttributeFeedback;
  role: GuessAttributeFeedback;
  gender: GuessAttributeFeedback;
  affiliation: GuessAttributeFeedback;
  country: GuessAttributeFeedback;
  age: GuessAttributeFeedback;
  releaseYear: GuessAttributeFeedback;
  range: GuessAttributeFeedback;
  isCorrect: boolean;
}

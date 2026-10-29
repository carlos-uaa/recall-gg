export type Role = 'tank' | 'damage' | 'support';

export type CompStyle = 'brawl' | 'dive' | 'poke';

export type GameId = 'overwatch' | 'valorant' | 'marvel-rivals';

export type RankTier = 'bronze_gold' | 'plat_diamond' | 'master_top500';

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
  icon?: string;
  difficulty: 1 | 2 | 3; // 1: Fácil/Baja, 2: Media, 3: Alta (Widow, Tracer, Genji)
  description: string;
  perks: string[];
  counters: {
    strongAgainst: string[]; // Heroes this hero counters
    weakAgainst: string[];   // Heroes that counter this hero
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

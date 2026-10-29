import type { GameId } from '../types/game';

export interface GameMetadata {
  id: GameId;
  name: string;
  tagline: string;
  badge: string;
  active: boolean;
  accentColor: string;
}

export const SUPPORTED_GAMES: GameMetadata[] = [
  {
    id: 'overwatch',
    name: 'Overwatch 2',
    tagline: 'Asistente Táctico de Héroes & Recalldle',
    badge: 'Disponible',
    active: true,
    accentColor: '#f97316', // Overwatch Orange
  },
  {
    id: 'marvel-rivals',
    name: 'Marvel Rivals',
    tagline: 'Vanguards, Duelistas, Estrategas & Team-Ups',
    badge: 'Próximamente',
    active: false,
    accentColor: '#38bdf8', // Rivals Blue
  },
  {
    id: 'valorant',
    name: 'Valorant',
    tagline: 'Composiciones de Agentes, Humos y Sites',
    badge: 'Próximamente',
    active: false,
    accentColor: '#ef4444', // Vandal Red
  },
];

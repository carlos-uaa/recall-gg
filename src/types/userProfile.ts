import type { Role, RankTier } from './game';

export interface HeroPlayerStats {
  heroId: string;
  heroName: string;
  role: Role;
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  timePlayedHours: number;
  winrate: number; // 0 a 100
  kda: number;
  avgElimsPer10: number;
  avgDeathsPer10: number;
  avgDamagePer10: number;
  avgHealingPer10: number;
  weaponAccuracy?: number; // 0 a 100
  criticalHitAccuracy?: number; // 0 a 100
  color?: string;
}

export interface RoleRankInfo {
  role: Role;
  tier: RankTier;
  division: number; // 1 a 5
  rankName: string;
  iconUrl?: string;
}

export interface UserProfileData {
  username: string;
  tag?: string;
  avatarUrl?: string;
  namecardUrl?: string;
  title?: string;
  endorsementLevel: number;
  isPublic: boolean;
  lastUpdated?: string;
  ranks: {
    tank?: RoleRankInfo;
    damage?: RoleRankInfo;
    support?: RoleRankInfo;
    open?: RoleRankInfo;
  };
  general: {
    totalGames: number;
    totalWins: number;
    totalLosses: number;
    winrate: number;
    totalTimeHours: number;
    kda: number;
    avgElimsPer10: number;
    avgDeathsPer10: number;
    avgDamagePer10: number;
    avgHealingPer10: number;
  };
  topHeroes: HeroPlayerStats[];
  allHeroStats: Record<string, HeroPlayerStats>;
  source: 'live-api' | 'demo' | 'custom';
}

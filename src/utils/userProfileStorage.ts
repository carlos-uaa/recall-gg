import { useState, useEffect, useCallback } from 'react';
import type { UserProfileData } from '../types/userProfile';

const STORAGE_KEY = 'recallgg_user_profile_data';

export const DEMO_PROFILES: Record<string, UserProfileData> = {
  nano: {
    username: 'Nano',
    tag: 'Nano#13824',
    avatarUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/7df15c87d4eaef560b5ff89ae487bb7a9ede9475c166e2d305f716cd88d3123f.png',
    title: 'Ángel Celestial',
    endorsementLevel: 5,
    isPublic: true,
    lastUpdated: 'Reciente',
    source: 'live-api',
    ranks: {
      open: { role: 'damage', tier: 'platinum', division: 3, rankName: 'Cola Abierta: Platino 3' },
    },
    general: {
      totalGames: 2621,
      totalWins: 1351,
      totalLosses: 1270,
      winrate: 51.55,
      totalTimeHours: 346,
      kda: 2.23,
      avgElimsPer10: 16.76,
      avgDeathsPer10: 8.0,
      avgDamagePer10: 7631,
      avgHealingPer10: 2212,
    },
    topHeroes: [
      {
        heroId: 'hanzo',
        heroName: 'Hanzo',
        role: 'damage',
        gamesPlayed: 344,
        gamesWon: 167,
        gamesLost: 177,
        timePlayedHours: 43.8,
        winrate: 48.55,
        kda: 2.38,
        avgElimsPer10: 19.4,
        avgDeathsPer10: 8.2,
        avgDamagePer10: 9840,
        avgHealingPer10: 0,
        weaponAccuracy: 31,
        criticalHitAccuracy: 12,
        color: '#76848f',
      },
      {
        heroId: 'genji',
        heroName: 'Genji',
        role: 'damage',
        gamesPlayed: 272,
        gamesWon: 133,
        gamesLost: 139,
        timePlayedHours: 36.1,
        winrate: 48.9,
        kda: 2.31,
        avgElimsPer10: 20.1,
        avgDeathsPer10: 8.7,
        avgDamagePer10: 8950,
        avgHealingPer10: 0,
        weaponAccuracy: 34,
        criticalHitAccuracy: 18,
        color: '#84fe01',
      },
      {
        heroId: 'ashe',
        heroName: 'Ashe',
        role: 'damage',
        gamesPlayed: 177,
        gamesWon: 88,
        gamesLost: 89,
        timePlayedHours: 24.3,
        winrate: 49.72,
        kda: 2.42,
        avgElimsPer10: 20.23,
        avgDeathsPer10: 8.35,
        avgDamagePer10: 11361,
        avgHealingPer10: 0,
        weaponAccuracy: 46,
        criticalHitAccuracy: 14,
        color: '#6e7a83',
      },
      {
        heroId: 'ana',
        heroName: 'Ana',
        role: 'support',
        gamesPlayed: 165,
        gamesWon: 90,
        gamesLost: 75,
        timePlayedHours: 21.4,
        winrate: 54.55,
        kda: 2.83,
        avgElimsPer10: 10.75,
        avgDeathsPer10: 5.99,
        avgDamagePer10: 4165,
        avgHealingPer10: 6887,
        weaponAccuracy: 68,
        criticalHitAccuracy: 0,
        color: '#6f8fc9',
      },
      {
        heroId: 'illari',
        heroName: 'Illari',
        role: 'support',
        gamesPlayed: 154,
        gamesWon: 90,
        gamesLost: 64,
        timePlayedHours: 21.3,
        winrate: 58.44,
        kda: 3.12,
        avgElimsPer10: 16.8,
        avgDeathsPer10: 5.4,
        avgDamagePer10: 6800,
        avgHealingPer10: 7400,
        weaponAccuracy: 49,
        criticalHitAccuracy: 16,
        color: '#b45309',
      },
    ],
    allHeroStats: {},
  },
  karq: {
    username: 'KarQ',
    tag: 'KarQ#1234',
    avatarUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/279f3b9a6e44f334b204917dd4b57f7101f55d994140f9b793d2b35758915a02.png',
    namecardUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/588d470b4a4e123f4f406a7f110498256435c3e5180886b97b9a6b7a74583001.png',
    title: 'Fluffy Friend',
    endorsementLevel: 5,
    isPublic: true,
    lastUpdated: 'Reciente',
    source: 'demo',
    ranks: {
      tank: { role: 'tank', tier: 'diamond', division: 3, rankName: 'Diamante 3' },
      damage: { role: 'damage', tier: 'master', division: 4, rankName: 'Maestro 4' },
      support: { role: 'support', tier: 'grandmaster', division: 2, rankName: 'Gran Maestro 2' },
    },
    general: {
      totalGames: 1420,
      totalWins: 812,
      totalLosses: 608,
      winrate: 57.2,
      totalTimeHours: 320,
      kda: 3.82,
      avgElimsPer10: 14.8,
      avgDeathsPer10: 4.2,
      avgDamagePer10: 6420,
      avgHealingPer10: 9850,
    },
    topHeroes: [
      {
        heroId: 'ana',
        heroName: 'Ana',
        role: 'support',
        gamesPlayed: 480,
        gamesWon: 288,
        gamesLost: 192,
        timePlayedHours: 112,
        winrate: 60.0,
        kda: 4.1,
        avgElimsPer10: 12.8,
        avgDeathsPer10: 3.9,
        avgDamagePer10: 5120,
        avgHealingPer10: 10450,
        weaponAccuracy: 72,
        criticalHitAccuracy: 0,
        color: '#6f8fc9',
      },
      {
        heroId: 'kiriko',
        heroName: 'Kiriko',
        role: 'support',
        gamesPlayed: 320,
        gamesWon: 188,
        gamesLost: 132,
        timePlayedHours: 74,
        winrate: 58.8,
        kda: 4.35,
        avgElimsPer10: 15.2,
        avgDeathsPer10: 3.5,
        avgDamagePer10: 4890,
        avgHealingPer10: 8900,
        weaponAccuracy: 38,
        criticalHitAccuracy: 24,
        color: '#c026d3',
      },
      {
        heroId: 'baptiste',
        heroName: 'Baptiste',
        role: 'support',
        gamesPlayed: 210,
        gamesWon: 118,
        gamesLost: 92,
        timePlayedHours: 48,
        winrate: 56.2,
        kda: 3.9,
        avgElimsPer10: 16.1,
        avgDeathsPer10: 4.4,
        avgDamagePer10: 6850,
        avgHealingPer10: 9200,
        weaponAccuracy: 42,
        criticalHitAccuracy: 14,
        color: '#22d3ee',
      },
      {
        heroId: 'cassidy',
        heroName: 'Cassidy',
        role: 'damage',
        gamesPlayed: 140,
        gamesWon: 76,
        gamesLost: 64,
        timePlayedHours: 32,
        winrate: 54.3,
        kda: 3.1,
        avgElimsPer10: 18.5,
        avgDeathsPer10: 5.9,
        avgDamagePer10: 8400,
        avgHealingPer10: 0,
        weaponAccuracy: 52,
        criticalHitAccuracy: 16,
        color: '#b91c1c',
      },
      {
        heroId: 'lucio',
        heroName: 'Lúcio',
        role: 'support',
        gamesPlayed: 95,
        gamesWon: 52,
        gamesLost: 43,
        timePlayedHours: 21,
        winrate: 54.7,
        kda: 3.4,
        avgElimsPer10: 13.9,
        avgDeathsPer10: 4.1,
        avgDamagePer10: 5200,
        avgHealingPer10: 7800,
        weaponAccuracy: 32,
        criticalHitAccuracy: 9,
        color: '#84cc16',
      },
    ],
    allHeroStats: {},
  },
  super: {
    username: 'SuperTF',
    tag: 'Super#1111',
    avatarUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/9da8a506f528bf804c8f5d08fae0869a8342e478546ca8ef621d157a9f8fba3b.png',
    title: 'Top 500 Champion',
    endorsementLevel: 4,
    isPublic: true,
    lastUpdated: 'Reciente',
    source: 'demo',
    ranks: {
      tank: { role: 'tank', tier: 'top500', division: 1, rankName: 'Top 500 (#24)' },
      damage: { role: 'damage', tier: 'grandmaster', division: 1, rankName: 'Gran Maestro 1' },
      support: { role: 'support', tier: 'master', division: 1, rankName: 'Maestro 1' },
    },
    general: {
      totalGames: 2600,
      totalWins: 1612,
      totalLosses: 988,
      winrate: 62.0,
      totalTimeHours: 640,
      kda: 4.25,
      avgElimsPer10: 19.5,
      avgDeathsPer10: 4.6,
      avgDamagePer10: 9200,
      avgHealingPer10: 0,
    },
    topHeroes: [
      {
        heroId: 'reinhardt',
        heroName: 'Reinhardt',
        role: 'tank',
        gamesPlayed: 920,
        gamesWon: 588,
        gamesLost: 332,
        timePlayedHours: 230,
        winrate: 63.9,
        kda: 4.4,
        avgElimsPer10: 19.2,
        avgDeathsPer10: 4.4,
        avgDamagePer10: 9100,
        avgHealingPer10: 0,
        color: '#eab308',
      },
      {
        heroId: 'winston',
        heroName: 'Winston',
        role: 'tank',
        gamesPlayed: 640,
        gamesWon: 410,
        gamesLost: 230,
        timePlayedHours: 160,
        winrate: 64.1,
        kda: 4.7,
        avgElimsPer10: 21.0,
        avgDeathsPer10: 4.5,
        avgDamagePer10: 8800,
        avgHealingPer10: 0,
        color: '#60a5fa',
      },
      {
        heroId: 'roadhog',
        heroName: 'Roadhog',
        role: 'tank',
        gamesPlayed: 380,
        gamesWon: 232,
        gamesLost: 148,
        timePlayedHours: 92,
        winrate: 61.1,
        kda: 4.1,
        avgElimsPer10: 18.0,
        avgDeathsPer10: 4.2,
        avgDamagePer10: 9500,
        avgHealingPer10: 3800,
        weaponAccuracy: 58,
        color: '#f97316',
      },
      {
        heroId: 'genji',
        heroName: 'Genji',
        role: 'damage',
        gamesPlayed: 250,
        gamesWon: 145,
        gamesLost: 105,
        timePlayedHours: 62,
        winrate: 58.0,
        kda: 3.6,
        avgElimsPer10: 19.8,
        avgDeathsPer10: 5.5,
        avgDamagePer10: 8400,
        avgHealingPer10: 0,
        color: '#84cc16',
      },
    ],
    allHeroStats: {},
  },
  proper: {
    username: 'ProperOW',
    tag: 'Proper#2024',
    avatarUrl: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f46b2db32d326c59b207559a4fa1ae87bc8a7cfd145cbe5b6e40939527f070cb.png',
    title: 'MVP de Torneo',
    endorsementLevel: 4,
    isPublic: true,
    lastUpdated: 'Reciente',
    source: 'demo',
    ranks: {
      tank: { role: 'tank', tier: 'master', division: 2, rankName: 'Maestro 2' },
      damage: { role: 'damage', tier: 'top500', division: 1, rankName: 'Top 500 (#3)' },
      support: { role: 'support', tier: 'grandmaster', division: 3, rankName: 'Gran Maestro 3' },
    },
    general: {
      totalGames: 1890,
      totalWins: 1240,
      totalLosses: 650,
      winrate: 65.6,
      totalTimeHours: 470,
      kda: 5.1,
      avgElimsPer10: 24.2,
      avgDeathsPer10: 4.1,
      avgDamagePer10: 11400,
      avgHealingPer10: 0,
    },
    topHeroes: [
      {
        heroId: 'tracer',
        heroName: 'Tracer',
        role: 'damage',
        gamesPlayed: 740,
        gamesWon: 504,
        gamesLost: 236,
        timePlayedHours: 190,
        winrate: 68.1,
        kda: 5.8,
        avgElimsPer10: 26.5,
        avgDeathsPer10: 3.9,
        avgDamagePer10: 10800,
        avgHealingPer10: 0,
        weaponAccuracy: 46,
        criticalHitAccuracy: 12,
        color: '#f59e0b',
      },
      {
        heroId: 'sojourn',
        heroName: 'Sojourn',
        role: 'damage',
        gamesPlayed: 510,
        gamesWon: 342,
        gamesLost: 168,
        timePlayedHours: 128,
        winrate: 67.1,
        kda: 5.2,
        avgElimsPer10: 24.8,
        avgDeathsPer10: 4.2,
        avgDamagePer10: 12300,
        avgHealingPer10: 0,
        weaponAccuracy: 54,
        criticalHitAccuracy: 22,
        color: '#0284c7',
      },
      {
        heroId: 'freja',
        heroName: 'Freja',
        role: 'damage',
        gamesPlayed: 280,
        gamesWon: 178,
        gamesLost: 102,
        timePlayedHours: 68,
        winrate: 63.6,
        kda: 4.6,
        avgElimsPer10: 22.1,
        avgDeathsPer10: 4.8,
        avgDamagePer10: 11100,
        avgHealingPer10: 0,
        color: '#06b6d4',
      },
      {
        heroId: 'widowmaker',
        heroName: 'Widowmaker',
        role: 'damage',
        gamesPlayed: 190,
        gamesWon: 122,
        gamesLost: 68,
        timePlayedHours: 47,
        winrate: 64.2,
        kda: 4.4,
        avgElimsPer10: 21.3,
        avgDeathsPer10: 4.6,
        avgDamagePer10: 9400,
        avgHealingPer10: 0,
        weaponAccuracy: 64,
        criticalHitAccuracy: 32,
        color: '#a855f7',
      },
    ],
    allHeroStats: {},
  },
};

// Fill allHeroStats for each demo profile
Object.values(DEMO_PROFILES).forEach(profile => {
  profile.topHeroes.forEach(h => {
    profile.allHeroStats[h.heroId] = h;
  });
});

export function getStoredUserProfile(): UserProfileData | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading user profile from localStorage:', e);
    return null;
  }
}

export function saveStoredUserProfile(profile: UserProfileData | null): void {
  if (typeof window === 'undefined') return;
  try {
    if (!profile) {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    }
    window.dispatchEvent(new Event('recallgg_user_profile_updated'));
  } catch (e) {
    console.error('Error saving user profile to localStorage:', e);
  }
}

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfileData | null>(() => getStoredUserProfile());

  const reload = useCallback(() => {
    setProfile(getStoredUserProfile());
  }, []);

  useEffect(() => {
    const handler = () => reload();
    window.addEventListener('recallgg_user_profile_updated', handler);
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener('recallgg_user_profile_updated', handler);
      window.removeEventListener('storage', handler);
    };
  }, [reload]);

  const setAndSaveProfile = useCallback((newProfile: UserProfileData | null) => {
    saveStoredUserProfile(newProfile);
    setProfile(newProfile);
  }, []);

  const loadDemoProfile = useCallback((demoKey: keyof typeof DEMO_PROFILES) => {
    const p = DEMO_PROFILES[demoKey];
    if (p) {
      setAndSaveProfile(p);
    }
  }, [setAndSaveProfile]);

  const clearProfile = useCallback(() => {
    setAndSaveProfile(null);
  }, [setAndSaveProfile]);

  return {
    profile,
    setProfile: setAndSaveProfile,
    loadDemoProfile,
    clearProfile,
    reload,
  };
}

import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'recall_favorite_heroes';
const EVENT_NAME = 'recall:favorites_changed';

/**
 * Get all favorite hero IDs from localStorage
 */
export function getFavoriteHeroIds(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/**
 * Save favorite hero IDs to localStorage and notify all listeners
 */
export function saveFavoriteHeroIds(ids: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: ids }));
  } catch {
    // Ignore storage quota/permission issues
  }
}

/**
 * Toggle favorite status of a hero ID
 */
export function toggleFavoriteHero(heroId: string): boolean {
  const current = getFavoriteHeroIds();
  const exists = current.includes(heroId);
  const updated = exists ? current.filter(id => id !== heroId) : [...current, heroId];
  saveFavoriteHeroIds(updated);
  return !exists;
}

/**
 * Check if a hero is in favorites
 */
export function isHeroFavorite(heroId: string): boolean {
  return getFavoriteHeroIds().includes(heroId);
}

/**
 * Custom React hook for subscribing and managing favorite/main heroes
 */
export function useFavoriteHeroes() {
  const [favorites, setFavorites] = useState<string[]>(() => getFavoriteHeroIds());

  useEffect(() => {
    const handleUpdate = () => {
      setFavorites(getFavoriteHeroIds());
    };

    window.addEventListener(EVENT_NAME, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(EVENT_NAME, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const toggle = useCallback((heroId: string) => {
    return toggleFavoriteHero(heroId);
  }, []);

  const isFavorite = useCallback(
    (heroId: string) => favorites.includes(heroId),
    [favorites]
  );

  return {
    favoriteHeroIds: favorites,
    isFavorite,
    toggleFavorite: toggle,
  };
}

import React, { useState, useEffect, useMemo } from 'react';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import { OVERWATCH_HERO_KITS } from '../../games/overwatch/heroKits';
import type { Hero, Role } from '../../types/game';
import { Shield, Swords, Heart, Lock, Star, Zap, Flame, Crosshair, Layers, Users } from 'lucide-react';
import { useFavoriteHeroes } from '../../utils/favorites';
import {
  getStoredHeroGroupingMode,
  setStoredHeroGroupingMode,
  type HeroGroupingMode,
  getSubroleForHero,
} from '../../games/overwatch/subroles';

interface HeroSelectScreenProps {
  selectedHeroId: string | null;
  onSelectHero: (heroId: string) => void;
  allyHeroIds?: string[]; // Heroes already taken in ally team (cannot be repeated)
  theme?: 'dark' | 'light';
  playerRole?: Role;
  onPlayerRoleChange?: (role: Role) => void;
  title?: string;
  hideRoleLock?: boolean;
  preloadFullKits?: boolean;
  accentColor?: string;
  favoriteHeroIds?: string[];
  onToggleFavorite?: (heroId: string) => void;
}

const preloadedHeroIds = new Set<string>();

function preloadHeroImages(heroId: string) {
  if (preloadedHeroIds.has(heroId) || typeof window === 'undefined') return;
  preloadedHeroIds.add(heroId);
  const kit = OVERWATCH_HERO_KITS[heroId];
  if (!kit) return;
  const urls = [
    kit.fullPortrait,
    ...kit.weapons.map(w => w.icon),
    ...kit.ultimate.map(u => u.icon),
    ...kit.abilities.map(a => a.icon),
    ...kit.passives.map(p => p.icon),
    ...kit.perks.minor.map(p => p.icon),
    ...kit.perks.major.map(p => p.icon),
  ].filter((u): u is string => Boolean(u));

  urls.forEach(url => {
    const img = new Image();
    img.decoding = 'async';
    img.src = url;
  });
}

export const HeroSelectScreen: React.FC<HeroSelectScreenProps> = ({
  selectedHeroId,
  onSelectHero,
  allyHeroIds = [],
  theme = 'dark',
  playerRole,
  onPlayerRoleChange,
  title = 'SELECCIÓN DE TU HÉROE',
  hideRoleLock = false,
  preloadFullKits = false,
  accentColor,
  favoriteHeroIds: propFavs,
  onToggleFavorite: propToggle,
}) => {
  const isDark = theme === 'dark';
  const hookFavs = useFavoriteHeroes();
  const favoriteHeroIds = propFavs ?? hookFavs.favoriteHeroIds;
  const toggleFavorite = propToggle ?? hookFavs.toggleFavorite;
  const isFavorite = (id: string) => favoriteHeroIds.includes(id);

  const [activeTab, setActiveTab] = useState<Role | 'all' | 'mains'>('all');
  const [roleQueueLocked, setRoleQueueLocked] = useState(false);
  const [groupingMode, setGroupingModeState] = useState<HeroGroupingMode>(getStoredHeroGroupingMode);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail === 'role' || detail === 'subrole') {
        setGroupingModeState(detail);
      }
    };
    window.addEventListener('recall-grouping-mode-change', handler);
    return () => window.removeEventListener('recall-grouping-mode-change', handler);
  }, []);

  const handleSetGroupingMode = (mode: HeroGroupingMode) => {
    setGroupingModeState(mode);
    setStoredHeroGroupingMode(mode);
  };

  // Group heroes by role for the authentic Overwatch select screen look, sorted alphabetically A-Z
  const tanks = useMemo(
    () =>
      OVERWATCH_HEROES.filter(h => h.role === 'tank')
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })),
    []
  );
  const damage = useMemo(
    () =>
      OVERWATCH_HEROES.filter(h => h.role === 'damage')
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })),
    []
  );
  const supports = useMemo(
    () =>
      OVERWATCH_HEROES.filter(h => h.role === 'support')
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })),
    []
  );

  const roleCategories: Array<{ role: Role; label: string; icon: React.ReactNode; heroes: Hero[] }> = [
    { role: 'tank', label: 'TANQUES', icon: <Shield className="w-3 h-3 text-blue-400" />, heroes: tanks },
    { role: 'damage', label: 'DAÑO (DPS)', icon: <Swords className="w-3 h-3 text-rose-400" />, heroes: damage },
    { role: 'support', label: 'APOYO', icon: <Heart className="w-3 h-3 text-emerald-400" />, heroes: supports },
  ];

  const renderStyleIcon = (style: Hero['style']) => {
    if (style === 'dive') return <Zap className="w-2 h-2 flex-shrink-0" />;
    if (style === 'brawl') return <Flame className="w-2 h-2 flex-shrink-0" />;
    return <Crosshair className="w-2 h-2 flex-shrink-0" />;
  };

  const renderHeroPortrait = (hero: Hero) => {
    const isSelected = selectedHeroId === hero.id;
    const isTakenByAlly = allyHeroIds.includes(hero.id) && !isSelected;
    const isLockedOut = roleQueueLocked && playerRole && playerRole !== hero.role;
    const isDisabled = isTakenByAlly || isLockedOut;
    const isMain = isFavorite(hero.id);
    const heroHex = accentColor && isSelected ? accentColor : undefined;

    return (
      <button
        key={hero.id}
        type="button"
        disabled={isDisabled}
        onMouseEnter={() => {
          if (preloadFullKits) preloadHeroImages(hero.id);
        }}
        onFocus={() => {
          if (preloadFullKits) preloadHeroImages(hero.id);
        }}
        onClick={() => {
          onSelectHero(hero.id);
          if (onPlayerRoleChange && hero.role !== playerRole) {
            onPlayerRoleChange(hero.role);
          }
        }}
        style={
          heroHex
            ? {
                borderColor: heroHex,
                boxShadow: `0 0 0 2px ${heroHex}, 0 6px 16px color-mix(in oklab, ${heroHex} 45%, transparent)`,
              }
            : isMain
            ? {
                borderColor: '#f59e0b',
                boxShadow: '0 0 10px rgba(245, 158, 11, 0.45)',
              }
            : undefined
        }
        title={`${hero.name} • ${hero.subrole} • ${isMain ? '★ TU MAIN • ' : ''}Composición ${hero.style.toUpperCase()}`}
        className={`group relative flex-shrink-0 w-9.5 sm:w-12 md:w-14 h-13 sm:h-16 md:h-18 rounded-md overflow-hidden border transition-all duration-150 select-none ${
          isSelected
            ? heroHex
              ? 'scale-110 z-20'
              : 'border-orange-500 ring-2 ring-orange-500 shadow-md shadow-orange-500/50 scale-110 z-20'
            : isDisabled
            ? 'opacity-30 grayscale border-slate-700/60 bg-slate-900 cursor-not-allowed'
            : isMain
            ? 'border-amber-400 bg-amber-950/20 shadow-md'
            : isDark
            ? 'border-slate-700/70 bg-slate-800/90 hover:border-orange-400 hover:scale-105 hover:z-10 shadow-sm'
            : 'border-slate-300 bg-slate-100 hover:border-orange-400 hover:scale-105 hover:z-10 shadow-sm'
        }`}
      >
        {/* Full Image Canvas */}
        <img
          src={hero.icon}
          alt={hero.name}
          decoding="async"
          className="w-full h-full object-cover object-top transition duration-200 group-hover:scale-105"
        />

        {/* Top-Left Corner Flush Composition & Difficulty Badge */}
        <span
          className={`absolute top-0 left-0 z-10 h-3.5 sm:h-4 px-1 rounded-br-md flex items-center justify-center gap-0.5 font-mono font-black text-[7.5px] sm:text-[8.5px] leading-none border-b border-r shadow-sm ${
            hero.style === 'dive'
              ? 'bg-purple-950/90 text-purple-200 border-purple-400/50'
              : hero.style === 'brawl'
              ? 'bg-amber-950/90 text-amber-200 border-amber-400/50'
              : 'bg-cyan-950/90 text-cyan-200 border-cyan-400/50'
          }`}
        >
          {renderStyleIcon(hero.style)}
          <span>{hero.style[0].toUpperCase()}</span>
          <span className="text-amber-400 flex items-center ml-0.5">
            {Array.from({ length: hero.difficulty }).map((_, i) => (
              <Star key={i} className="w-1 h-1 fill-current" />
            ))}
          </span>
        </span>

        {/* Top-Right Touch-Friendly Main/Favorite Star Button */}
        <span
          role="button"
          tabIndex={0}
          aria-label={isMain ? `Quitar ${hero.name} de tus Mains` : `Marcar ${hero.name} como Main`}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(hero.id);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.stopPropagation();
              toggleFavorite(hero.id);
            }
          }}
          title={isMain ? '★ Es tu Main (Toca para desmarcar)' : '☆ Toca para marcar como Main'}
          className={`absolute top-0 right-0 z-30 w-4.5 h-4.5 rounded-bl-md flex items-center justify-center cursor-pointer transition active:scale-125 ${
            isMain
              ? 'bg-amber-500 text-slate-950 shadow-md ring-1 ring-amber-300'
              : 'bg-black/75 text-slate-400 hover:text-amber-400 border-b border-l border-white/15'
          }`}
        >
          <Star className={`w-2.5 h-2.5 ${isMain ? 'fill-current text-slate-950' : 'fill-none'}`} />
        </span>

        {/* Lock Overlay if Disabled */}
        {isDisabled && (
          <div className="absolute inset-0 bg-black/65 flex flex-col items-center justify-center z-20 p-0.5 text-center">
            <Lock className="w-2.5 h-2.5 text-slate-300 mb-0.5" />
            <span className="text-[6px] font-bold text-slate-300 uppercase leading-none">
              {isTakenByAlly ? 'En Equipo' : 'Bloq'}
            </span>
          </div>
        )}

        {/* Bottom Footer: Gradient + Hero Name + Main Indicator */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent pt-2.5 pb-0.5 px-0.5 text-center z-10">
          <span
            style={heroHex ? { color: heroHex } : undefined}
            className={`block text-[8px] sm:text-[9px] font-black uppercase tracking-tight truncate leading-none transition ${
              isMain
                ? 'text-amber-400'
                : isSelected && !heroHex
                ? 'text-orange-400'
                : 'text-white'
            }`}
          >
            {hero.name}
          </span>
        </div>
      </button>
    );
  };

  return (
    <div
      className={`border rounded-2xl p-2.5 sm:p-4 shadow-xl relative transition overflow-x-hidden max-w-full ${
        isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
      }`}
    >
      {/* Compact Header & Role Navigation Bar */}
      <div
        className={`flex flex-col lg:flex-row lg:items-center justify-between gap-2 pb-2.5 mb-2.5 border-b ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <div
            style={accentColor ? { backgroundColor: accentColor } : undefined}
            className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"
          />
          <h2
            className={`text-xs sm:text-sm font-black uppercase tracking-tight flex items-center space-x-1.5 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            <span>{title}</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/30 font-mono">
              {OVERWATCH_HEROES.length}
            </span>
          </h2>

          {/* Touch-Friendly Favorite / Main Toggle for currently selected hero */}
          {selectedHeroId && (
            <button
              type="button"
              onClick={() => toggleFavorite(selectedHeroId)}
              className={`flex items-center space-x-1 px-2 py-0.5 rounded-lg text-[11px] font-bold border transition active:scale-95 shadow-sm ${
                isFavorite(selectedHeroId)
                  ? 'bg-amber-500 text-slate-950 border-amber-300 ring-1 ring-amber-400/50'
                  : isDark
                  ? 'bg-slate-800/90 text-amber-400 border-slate-700 hover:border-amber-400'
                  : 'bg-slate-100 text-amber-600 border-slate-300 hover:border-amber-400'
              }`}
              title="Toca para marcar o desmarcar el héroe seleccionado como tu Main"
            >
              <Star className={`w-3 h-3 ${isFavorite(selectedHeroId) ? 'fill-current text-slate-950' : 'text-amber-400'}`} />
              <span>{isFavorite(selectedHeroId) ? '★ Tu Main' : '☆ Marcar como Main'}</span>
            </button>
          )}

          {/* Mini Composition Badge Legend */}
          <div className="hidden sm:flex items-center gap-1.5 ml-2 text-[9px] font-mono">
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-purple-950/80 text-purple-200 border border-purple-500/40 font-bold">
              <Zap className="w-2.5 h-2.5" /> D = Dive
            </span>
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-200 border border-amber-500/40 font-bold">
              <Flame className="w-2.5 h-2.5" /> B = Brawl
            </span>
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-200 border border-cyan-500/40 font-bold">
              <Crosshair className="w-2.5 h-2.5" /> P = Poke
            </span>
          </div>
        </div>

        {/* Role & Mains Filter Tabs */}
        <div className="flex items-center space-x-2 flex-wrap gap-y-1">
          {/* Mode Switch: Subroles vs Rol completo */}
          <div
            className={`p-0.5 rounded-lg flex items-center border ${
              isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => handleSetGroupingMode('subrole')}
              className={`flex items-center space-x-1 px-2 py-0.5 rounded-md text-[11px] font-bold transition ${
                groupingMode === 'subrole'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Segmentar héroes por sus subroles y pasivas especiales (Iniciador, Flanqueador, Reconocimiento, etc.)"
            >
              <Layers className="w-3 h-3" />
              <span>Por Subrol</span>
            </button>
            <button
              type="button"
              onClick={() => handleSetGroupingMode('role')}
              className={`flex items-center space-x-1 px-2 py-0.5 rounded-md text-[11px] font-bold transition ${
                groupingMode === 'role'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Mostrar todos los héroes del rol mezclados juntos en orden alfabético"
            >
              <Users className="w-3 h-3" />
              <span>Solo por Rol</span>
            </button>
          </div>

          <div
            className={`p-0.5 rounded-lg flex items-center border ${
              isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition ${
                activeTab === 'all'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('mains')}
              className={`flex items-center space-x-1 px-2 py-0.5 rounded-md text-[11px] font-bold transition ${
                activeTab === 'mains'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                  : favoriteHeroIds.length > 0
                  ? isDark
                    ? 'text-amber-400 hover:text-amber-300'
                    : 'text-amber-600 hover:text-amber-800'
                  : isDark
                  ? 'text-slate-400 hover:text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Filtrar solo los héroes que tienes marcados como Mains"
            >
              <Star className={`w-3 h-3 ${favoriteHeroIds.length > 0 ? 'fill-current text-amber-400' : ''}`} />
              <span>Mains ({favoriteHeroIds.length})</span>
            </button>
            {roleCategories.map(cat => (
              <button
                key={cat.role}
                type="button"
                onClick={() => setActiveTab(cat.role)}
                className={`flex items-center space-x-1 px-2 py-0.5 rounded-md text-[11px] font-bold transition ${
                  activeTab === cat.role
                    ? 'bg-orange-500 text-white shadow-sm'
                    : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.icon}
                <span>{cat.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Role Queue Lock Button */}
          {!hideRoleLock && (
            <button
              type="button"
              onClick={() => setRoleQueueLocked(!roleQueueLocked)}
              className={`flex items-center space-x-1 px-2 py-0.5 rounded-lg text-[11px] font-bold border transition ${
                roleQueueLocked
                  ? 'bg-amber-500/20 text-amber-500 border-amber-500/40 shadow-sm'
                  : isDark
                  ? 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
                  : 'bg-slate-100 text-slate-600 border-slate-300 hover:bg-slate-200'
              }`}
              title="Simula la cola de roles competitiva bloqueando los demás roles"
            >
              <Lock className={`w-2.5 h-2.5 ${roleQueueLocked ? 'text-amber-500' : 'text-slate-400'}`} />
              <span>Role Queue {roleQueueLocked ? 'Fijo' : 'Libre'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Empty State for Mains tab */}
      {activeTab === 'mains' && favoriteHeroIds.length === 0 && (
        <div className={`p-6 text-center rounded-xl border border-dashed my-3 ${
          isDark ? 'border-slate-700 bg-slate-800/30' : 'border-slate-300 bg-slate-50'
        }`}>
          <Star className="w-8 h-8 text-amber-400 mx-auto mb-2 opacity-80" />
          <h4 className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
            No has marcado ningún Main todavía
          </h4>
          <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
            Toca la estrella <strong>⭐</strong> en la esquina superior de cualquier héroe para añadirlo a tus Mains. Así el Coach evaluará cómo rendirían tus personajes preferidos en esta partida.
          </p>
        </div>
      )}

      {/* Hero Rosters with Subrole Clusters or Unified Role Roster */}
      <div className="space-y-3">
        {roleCategories
          .map(cat => {
            const filteredHeroes = cat.heroes.filter(
              h => activeTab !== 'mains' || isFavorite(h.id)
            );
            return { ...cat, heroes: filteredHeroes };
          })
          .filter(cat => (activeTab === 'all' || activeTab === 'mains' || activeTab === cat.role) && cat.heroes.length > 0)
          .map(cat => {
            if (groupingMode === 'role') {
              // Unified alphabetical view for the role (all DPS/Tanks/Supports mixed together)
              return (
                <div key={cat.role} className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400 px-1">
                    <div className="flex items-center space-x-1.5">
                      {cat.icon}
                      <span className={isDark ? 'text-slate-300' : 'text-slate-800'}>
                        {cat.label} ({cat.heroes.length})
                      </span>
                    </div>
                    <span className="text-[9px] text-slate-400 lowercase">
                      todos mezclados en orden alfabético
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-1.5 max-w-full py-1">
                    {cat.heroes.map(hero => renderHeroPortrait(hero))}
                  </div>
                </div>
              );
            }

            // Subrole segmented view with official passives
            const subroleMap: Record<string, Hero[]> = {};
            cat.heroes.forEach(h => {
              if (!subroleMap[h.subrole]) subroleMap[h.subrole] = [];
              subroleMap[h.subrole].push(h);
            });

            Object.keys(subroleMap).forEach(k => {
              subroleMap[k].sort((a, b) => a.name.localeCompare(b.name, 'es'));
            });

            const subroleKeys = Object.keys(subroleMap);

            return (
              <div key={cat.role} className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono font-bold tracking-wider uppercase text-slate-400 px-1">
                  <div className="flex items-center space-x-1.5">
                    {cat.icon}
                    <span className={isDark ? 'text-slate-300' : 'text-slate-800'}>
                      {cat.label} ({cat.heroes.length})
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-400 lowercase">
                    {subroleKeys.length} subroles con pasivas de rol
                  </span>
                </div>

                <div className="flex flex-wrap items-end justify-center gap-y-2 gap-x-1 sm:gap-x-2 max-w-full">
                  {subroleKeys.map((sub, index) => {
                    const heroesInSub = subroleMap[sub];
                    const subMeta = getSubroleForHero(heroesInSub[0]?.id || '');

                    return (
                      <React.Fragment key={sub}>
                        <div className="flex flex-col items-center max-w-full">
                          <div
                            title={`${subMeta.name} (${subMeta.englishName}) — Pasiva: ${subMeta.passiveName}\n${subMeta.passiveDescription}`}
                            className={`flex items-center space-x-1 text-[7.5px] sm:text-[8.5px] font-mono uppercase tracking-wider font-bold mb-0.5 px-1.5 py-0.5 rounded border truncate max-w-[140px] cursor-help transition ${
                              isDark
                                ? 'text-slate-300 bg-slate-800/60 border-slate-700/60 hover:border-slate-500'
                                : 'text-slate-700 bg-slate-100 border-slate-300 hover:border-slate-400'
                            }`}
                          >
                            <span style={{ color: subMeta.accentColor }}>●</span>
                            <span className="truncate">{subMeta.name}</span>
                            <span className="opacity-60">({heroesInSub.length})</span>
                          </div>

                          <div className="flex flex-wrap items-center justify-center gap-0.5 sm:gap-1 max-w-full">
                            {heroesInSub.map(hero => renderHeroPortrait(hero))}
                          </div>
                        </div>

                        {index < subroleKeys.length - 1 && (
                          <div className="h-10 w-px bg-slate-700/40 mx-1 sm:mx-1.5 self-end mb-1 hidden md:block" />
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

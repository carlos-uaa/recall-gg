import React, { useState } from 'react';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import type { Hero, Role } from '../../types/game';
import { HeroAvatar } from '../common/HeroAvatar';
import { Shield, Swords, Heart, Lock, Check, Star, Filter } from 'lucide-react';

interface HeroSelectScreenProps {
  selectedHeroId: string | null;
  onSelectHero: (heroId: string) => void;
  allyHeroIds: string[]; // Heroes already taken in ally team (cannot be repeated)
  theme?: 'dark' | 'light';
  playerRole?: Role; // If role queue is locked
  onPlayerRoleChange?: (role: Role) => void;
}

export const HeroSelectScreen: React.FC<HeroSelectScreenProps> = ({
  selectedHeroId,
  onSelectHero,
  allyHeroIds,
  theme = 'dark',
  playerRole = 'damage',
  onPlayerRoleChange,
}) => {
  const isDark = theme === 'dark';
  const [roleFilter, setRoleFilter] = useState<Role | 'all'>(playerRole);
  const [roleQueueLocked, setRoleQueueLocked] = useState(false);

  // If role queue is locked, enforce playerRole
  const activeCategory = roleQueueLocked ? playerRole : roleFilter;

  const filteredHeroes = OVERWATCH_HEROES.filter(hero => {
    if (activeCategory === 'all') return true;
    return hero.role === activeCategory;
  });

  const roles: Array<{ key: Role; label: string; icon: React.ReactNode; color: string }> = [
    { key: 'tank', label: 'TANQUE', icon: <Shield className="w-4 h-4" />, color: 'blue' },
    { key: 'damage', label: 'DAÑO', icon: <Swords className="w-4 h-4" />, color: 'rose' },
    { key: 'support', label: 'APOYO', icon: <Heart className="w-4 h-4" />, color: 'emerald' },
  ];

  return (
    <div className={`border-2 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden transition ${
      isDark
        ? 'bg-gradient-to-b from-slate-900 via-slate-900/95 to-[#0b0f19] border-slate-700/80'
        : 'bg-white border-slate-300'
    }`}>
      {/* Header styled like Overwatch 2 Assemble Your Team */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
              SELECCIÓN DE TU PERSONAJE
            </span>
          </div>
          <h2 className={`text-xl sm:text-2xl font-black uppercase tracking-tight mt-0.5 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            ¿A quién vas a jugar en esta partida?
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Elige tu héroe. El coach evaluará tu pick y no permitirá duplicados en tu equipo.
          </p>
        </div>

        {/* Role Category Tabs & Role Lock Toggle */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Role Filter Tabs */}
          <div className={`p-1 rounded-2xl flex items-center border ${
            isDark ? 'bg-slate-800/90 border-slate-700' : 'bg-slate-100 border-slate-300'
          }`}>
            <button
              onClick={() => {
                setRoleFilter('all');
                if (roleQueueLocked) setRoleQueueLocked(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                activeCategory === 'all'
                  ? 'bg-orange-500 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todos
            </button>

            {roles.map(r => {
              const isSelected = activeCategory === r.key;
              const isLockedOut = roleQueueLocked && playerRole !== r.key;

              return (
                <button
                  key={r.key}
                  disabled={isLockedOut}
                  onClick={() => {
                    setRoleFilter(r.key);
                    if (onPlayerRoleChange) onPlayerRoleChange(r.key);
                  }}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                    isSelected
                      ? 'bg-orange-500 text-white shadow'
                      : isLockedOut
                      ? 'text-slate-600 opacity-40 cursor-not-allowed'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isLockedOut ? <Lock className="w-3 h-3 text-slate-600" /> : r.icon}
                  <span>{r.label}</span>
                </button>
              );
            })}
          </div>

          {/* Role Queue Lock Button */}
          <button
            onClick={() => setRoleQueueLocked(!roleQueueLocked)}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition ${
              roleQueueLocked
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 shadow'
                : isDark
                ? 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                : 'bg-slate-100 text-slate-600 border-slate-300'
            }`}
            title="Simula la cola de roles competitiva bloqueando los demás roles"
          >
            <Lock className={`w-3.5 h-3.5 ${roleQueueLocked ? 'text-amber-400' : 'text-slate-400'}`} />
            <span>Role Queue {roleQueueLocked ? 'Activado' : 'Libre'}</span>
          </button>
        </div>
      </div>

      {/* Hero Cards Gallery */}
      <div className="pt-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredHeroes.map(hero => {
            const isSelected = selectedHeroId === hero.id;
            // Check if hero is already picked by another ally slot (excluding player's own current pick)
            const isTakenByAlly = allyHeroIds.includes(hero.id) && !isSelected;

            return (
              <button
                key={hero.id}
                disabled={isTakenByAlly}
                onClick={() => onSelectHero(hero.id)}
                className={`group relative p-2.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'border-orange-500 bg-orange-500/15 ring-2 ring-orange-500 shadow-xl shadow-orange-500/20 scale-[1.02]'
                    : isTakenByAlly
                    ? 'opacity-40 grayscale cursor-not-allowed border-slate-800 bg-slate-900/40'
                    : isDark
                    ? 'border-slate-800 bg-slate-800/60 hover:bg-slate-800 hover:border-slate-600'
                    : 'border-slate-200 bg-slate-50 hover:bg-orange-50/50 hover:border-orange-300'
                }`}
              >
                {/* Active Indicator Checkmark */}
                {isSelected && (
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg font-bold">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                )}

                {/* Already Taken by Ally Badge */}
                {isTakenByAlly && (
                  <div className="absolute inset-0 bg-black/60 rounded-2xl flex flex-col items-center justify-center z-10 p-2">
                    <Lock className="w-4 h-4 text-slate-400 mb-0.5" />
                    <span className="text-[10px] font-bold text-slate-300 text-center uppercase tracking-tight">
                      En tu equipo
                    </span>
                  </div>
                )}

                {/* Hero Header: Avatar + Identity */}
                <div>
                  <div className="flex items-center space-x-2.5 mb-2">
                    <HeroAvatar hero={hero} size="md" showRoleBadge />
                    <div className="truncate">
                      <div className={`font-black text-sm truncate transition ${
                        isSelected
                          ? 'text-orange-400'
                          : isDark ? 'text-white group-hover:text-orange-300' : 'text-slate-900'
                      }`}>
                        {hero.name}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">
                        {hero.subrole}
                      </div>
                    </div>
                  </div>

                  {/* Badges / Chips: Comp Style + Difficulty */}
                  <div className="flex flex-wrap items-center gap-1 mt-1">
                    {/* Comp Style Chip */}
                    <span className={`text-[9px] font-mono uppercase font-bold px-1.5 py-0.5 rounded border ${
                      hero.style === 'dive'
                        ? 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                        : hero.style === 'brawl'
                        ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                        : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
                    }`}>
                      {hero.style}
                    </span>

                    {/* Range Chip */}
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {hero.range}
                    </span>
                  </div>
                </div>

                {/* Footer: Stars Difficulty */}
                <div className="mt-2.5 pt-1.5 border-t border-slate-700/50 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="text-[9px] uppercase font-semibold">Dificultad</span>
                  <div className="flex items-center text-amber-400">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-2.5 h-2.5 ${
                          i < hero.difficulty ? 'fill-current text-amber-400' : 'text-slate-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import type { Hero, Role } from '../../types/game';
import { Shield, Swords, Heart, Lock, Star } from 'lucide-react';

interface HeroSelectScreenProps {
  selectedHeroId: string | null;
  onSelectHero: (heroId: string) => void;
  allyHeroIds: string[]; // Heroes already taken in ally team (cannot be repeated)
  theme?: 'dark' | 'light';
  playerRole?: Role;
  onPlayerRoleChange?: (role: Role) => void;
}

export const HeroSelectScreen: React.FC<HeroSelectScreenProps> = ({
  selectedHeroId,
  onSelectHero,
  allyHeroIds,
  theme = 'dark',
  playerRole,
  onPlayerRoleChange,
}) => {
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState<Role | 'all'>('all');
  const [roleQueueLocked, setRoleQueueLocked] = useState(false);

  // Group heroes by role for the authentic Overwatch select screen look
  const tanks = useMemo(() => OVERWATCH_HEROES.filter(h => h.role === 'tank'), []);
  const damage = useMemo(() => OVERWATCH_HEROES.filter(h => h.role === 'damage'), []);
  const supports = useMemo(() => OVERWATCH_HEROES.filter(h => h.role === 'support'), []);

  const roleCategories: Array<{ role: Role; label: string; icon: React.ReactNode; heroes: Hero[] }> = [
    { role: 'tank', label: 'TANQUES', icon: <Shield className="w-3.5 h-3.5 text-blue-400" />, heroes: tanks },
    { role: 'damage', label: 'DAÑO (DPS)', icon: <Swords className="w-3.5 h-3.5 text-rose-400" />, heroes: damage },
    { role: 'support', label: 'APOYO', icon: <Heart className="w-3.5 h-3.5 text-emerald-400" />, heroes: supports },
  ];

  const renderHeroPortrait = (hero: Hero) => {
    const isSelected = selectedHeroId === hero.id;
    const isTakenByAlly = allyHeroIds.includes(hero.id) && !isSelected;
    const isLockedOut = roleQueueLocked && playerRole && playerRole !== hero.role;
    const isDisabled = isTakenByAlly || isLockedOut;

    return (
      <button
        key={hero.id}
        disabled={isDisabled}
        onClick={() => {
          onSelectHero(hero.id);
          if (onPlayerRoleChange && hero.role !== playerRole) {
            onPlayerRoleChange(hero.role);
          }
        }}
        title={`${hero.name} • ${hero.subrole} • ${hero.style.toUpperCase()}`}
        className={`group relative flex-shrink-0 w-16 sm:w-[72px] h-20 sm:h-[94px] rounded-lg overflow-hidden border transition-all duration-150 select-none ${
          isSelected
            ? 'border-orange-500 ring-2 ring-orange-500 shadow-md shadow-orange-500/50 scale-105 z-20'
            : isDisabled
            ? 'opacity-30 grayscale border-slate-700/60 bg-slate-900 cursor-not-allowed'
            : isDark
            ? 'border-slate-700/70 bg-slate-800/90 hover:border-orange-400 hover:scale-105 hover:z-10 shadow-sm'
            : 'border-slate-300 bg-slate-100 hover:border-orange-400 hover:scale-105 hover:z-10 shadow-sm'
        }`}
      >
        {/* Full Image Canvas */}
        <img
          src={hero.icon}
          alt={hero.name}
          className="w-full h-full object-cover object-top transition duration-200 group-hover:scale-105"
          loading="lazy"
        />

        {/* Top Left: Style Badge Pill */}
        <div className="absolute top-1 left-1 z-10">
          <span
            className={`text-[7px] font-mono font-black uppercase px-1 py-0.2 rounded shadow backdrop-blur-sm border ${
              hero.style === 'dive'
                ? 'bg-purple-950/80 text-purple-300 border-purple-500/40'
                : hero.style === 'brawl'
                ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                : 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
            }`}
          >
            {hero.style}
          </span>
        </div>

        {/* Top Right: Difficulty Stars */}
        <div className="absolute top-1 right-1 z-10 flex items-center bg-black/60 backdrop-blur-sm px-0.5 py-0.2 rounded text-[7px] text-amber-400">
          {Array.from({ length: hero.difficulty }).map((_, i) => (
            <Star key={i} className="w-1.5 h-1.5 fill-current" />
          ))}
        </div>

        {/* Lock Overlay if Disabled */}
        {isDisabled && (
          <div className="absolute inset-0 bg-black/65 flex flex-col items-center justify-center z-20 p-0.5 text-center">
            <Lock className="w-3.5 h-3.5 text-slate-300 mb-0.5" />
            <span className="text-[7px] font-bold text-slate-300 uppercase leading-tight">
              {isTakenByAlly ? 'En Equipo' : 'Bloqueado'}
            </span>
          </div>
        )}

        {/* Bottom Footer: Gradient + Hero Name */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-3 pb-1 px-0.5 text-center z-10">
          <span className={`block text-[10px] font-black uppercase tracking-tight truncate leading-none transition ${
            isSelected ? 'text-orange-400' : 'text-white'
          }`}>
            {hero.name}
          </span>
        </div>
      </button>
    );
  };

  return (
    <div className={`border rounded-2xl p-4 sm:p-5 shadow-xl relative transition ${
      isDark
        ? 'bg-slate-900/90 border-slate-800'
        : 'bg-white border-slate-200'
    }`}>
      {/* Compact Header & Role Navigation Bar */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 mb-3 border-b ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div className="flex items-center space-x-2.5">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
          <div>
            <h2 className={`text-sm sm:text-base font-black uppercase tracking-tight flex items-center space-x-2 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <span>SELECCIÓN DE HÉROE</span>
              <span className="text-[10px] px-2 py-0.2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30 font-mono">
                {OVERWATCH_HEROES.length}
              </span>
            </h2>
          </div>
        </div>

        {/* Role Filter Tabs */}
        <div className="flex items-center space-x-2">
          <div className={`p-0.5 rounded-xl flex items-center border ${
            isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-300'
          }`}>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                activeTab === 'all'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todos
            </button>
            {roleCategories.map(cat => (
              <button
                key={cat.role}
                onClick={() => setActiveTab(cat.role)}
                className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                  activeTab === cat.role
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.icon}
                <span>{cat.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Role Queue Lock Button */}
          <button
            onClick={() => setRoleQueueLocked(!roleQueueLocked)}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded-xl text-xs font-bold border transition ${
              roleQueueLocked
                ? 'bg-amber-500/20 text-amber-500 border-amber-500/40 shadow-sm'
                : isDark
                ? 'bg-slate-800/80 text-slate-400 border-slate-700 hover:text-white'
                : 'bg-slate-100 text-slate-600 border-slate-300 hover:bg-slate-200'
            }`}
            title="Simula la cola de roles competitiva bloqueando los demás roles"
          >
            <Lock className={`w-3 h-3 ${roleQueueLocked ? 'text-amber-500' : 'text-slate-400'}`} />
            <span>Role Queue {roleQueueLocked ? 'Fijo' : 'Libre'}</span>
          </button>
        </div>
      </div>

      {/* Hero Rosters with Subrole Clusters & Small Spacers (COMPACT, NO GIANT SCROLL!) */}
      <div className="space-y-4">
        {roleCategories
          .filter(cat => activeTab === 'all' || activeTab === cat.role)
          .map(cat => {
            // Group heroes by their subrole within this role
            const subroleMap: Record<string, Hero[]> = {};
            cat.heroes.forEach(h => {
              if (!subroleMap[h.subrole]) subroleMap[h.subrole] = [];
              subroleMap[h.subrole].push(h);
            });

            // Sort heroes A-Z inside each subrole
            Object.keys(subroleMap).forEach(k => {
              subroleMap[k].sort((a, b) => a.name.localeCompare(b.name, 'es'));
            });

            const subroleKeys = Object.keys(subroleMap);

            return (
              <div key={cat.role} className="space-y-1.5">
                {/* Role Tiny Header Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono font-bold tracking-wider uppercase text-slate-400 px-1">
                  <div className="flex items-center space-x-1.5">
                    {cat.icon}
                    <span className={isDark ? 'text-slate-300' : 'text-slate-800'}>
                      {cat.label} ({cat.heroes.length})
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 lowercase">
                    {subroleKeys.length} subroles agrupados
                  </span>
                </div>

                {/* Subrole Clusters Flow in a Single Responsive Wrapped Row */}
                <div className="flex flex-wrap items-end justify-center gap-y-2 gap-x-1 sm:gap-x-1.5">
                  {subroleKeys.map((sub, index) => {
                    const heroesInSub = subroleMap[sub];
                    const subLabel = sub.split('/')[0].trim();

                    return (
                      <React.Fragment key={sub}>
                        {/* Subrole Group: Tiny Label at Top + Heroes in a tight row */}
                        <div className="flex flex-col items-center">
                          <span className="text-[8px] font-mono uppercase tracking-wider text-slate-400 font-bold mb-1 px-1.5 py-0.2 rounded bg-slate-800/40 border border-slate-700/40 truncate max-w-[120px]">
                            {subLabel} ({heroesInSub.length})
                          </span>

                          <div className="flex items-center space-x-1 sm:space-x-1.5">
                            {heroesInSub.map(hero => renderHeroPortrait(hero))}
                          </div>
                        </div>

                        {/* Small Spacer / Divider between Subroles */}
                        {index < subroleKeys.length - 1 && (
                          <div className="h-16 w-px bg-slate-700/40 mx-1 sm:mx-2 self-end mb-2 hidden md:block" />
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

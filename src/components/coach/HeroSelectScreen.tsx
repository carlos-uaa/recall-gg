import React, { useState } from 'react';
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
  const tanks = OVERWATCH_HEROES.filter(h => h.role === 'tank');
  const damage = OVERWATCH_HEROES.filter(h => h.role === 'damage');
  const supports = OVERWATCH_HEROES.filter(h => h.role === 'support');

  const roleCategories: Array<{ role: Role; label: string; icon: React.ReactNode; heroes: Hero[] }> = [
    { role: 'tank', label: 'TANQUE', icon: <Shield className="w-4 h-4 text-blue-400" />, heroes: tanks },
    { role: 'damage', label: 'DAÑO', icon: <Swords className="w-4 h-4 text-rose-400" />, heroes: damage },
    { role: 'support', label: 'APOYO', icon: <Heart className="w-4 h-4 text-emerald-400" />, heroes: supports },
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
        className={`group relative flex-shrink-0 w-20 sm:w-24 h-28 sm:h-32 rounded-xl overflow-hidden border-2 transition-all duration-200 select-none ${
          isSelected
            ? 'border-orange-500 ring-4 ring-orange-500/50 shadow-xl shadow-orange-500/50 scale-105 z-20'
            : isDisabled
            ? 'opacity-35 grayscale border-slate-700 bg-slate-900 cursor-not-allowed'
            : isDark
            ? 'border-slate-700/80 bg-slate-800 hover:border-orange-400 hover:scale-105 hover:z-10 shadow-md'
            : 'border-slate-300 bg-slate-100 hover:border-orange-400 hover:scale-105 hover:z-10 shadow-sm'
        }`}
      >
        {/* Full Image Canvas */}
        <img
          src={hero.icon}
          alt={hero.name}
          className="w-full h-full object-cover object-top transition duration-300 group-hover:scale-110"
          loading="lazy"
        />

        {/* Top Overlay: Composition Badge Pill */}
        <div className="absolute top-1.5 left-1.5 z-10">
          <span
            className={`text-[8px] font-mono font-black uppercase px-1.5 py-0.5 rounded shadow backdrop-blur-md border ${
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

        {/* Top Right: Difficulty Stars (Subtle) */}
        <div className="absolute top-1.5 right-1.5 z-10 flex items-center bg-black/60 backdrop-blur-md px-1 py-0.5 rounded text-[8px] text-amber-400">
          {Array.from({ length: hero.difficulty }).map((_, i) => (
            <Star key={i} className="w-2 h-2 fill-current" />
          ))}
        </div>

        {/* Lock Overlay if Disabled */}
        {isDisabled && (
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center z-20 p-1 text-center">
            <Lock className="w-4 h-4 text-slate-300 mb-0.5" />
            <span className="text-[8px] font-bold text-slate-300 uppercase leading-tight">
              {isTakenByAlly ? 'En Equipo' : 'Bloqueado'}
            </span>
          </div>
        )}

        {/* Bottom Footer: Gradient + Hero Name */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-4 pb-1.5 px-1 text-center z-10">
          <span className={`block text-[11px] font-black uppercase tracking-tight truncate leading-tight transition ${
            isSelected ? 'text-orange-400' : 'text-white'
          }`}>
            {hero.name}
          </span>
        </div>
      </button>
    );
  };

  return (
    <div className={`border-2 rounded-3xl p-5 sm:p-6 shadow-2xl relative transition ${
      isDark
        ? 'bg-slate-900/90 border-slate-700/80'
        : 'bg-white border-slate-200'
    }`}>
      {/* Top Controls Header */}
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div className="flex items-center space-x-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></div>
          <div>
            <h2 className={`text-lg sm:text-xl font-black uppercase tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              SELECCIÓN DE TU HÉROE
            </h2>
            <p className="text-xs text-slate-400">
              Haz clic en el personaje que vas a jugar. Centrado como en Overwatch original.
            </p>
          </div>
        </div>

        {/* Tabs / Filters & Role Queue Lock */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Role Tabs */}
          <div className={`p-1 rounded-2xl flex items-center border ${
            isDark ? 'bg-slate-800/90 border-slate-700' : 'bg-slate-100 border-slate-300'
          }`}>
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
                activeTab === 'all'
                  ? 'bg-orange-500 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todos
            </button>
            {roleCategories.map(cat => (
              <button
                key={cat.role}
                onClick={() => setActiveTab(cat.role)}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-xl text-xs font-bold transition ${
                  activeTab === cat.role
                    ? 'bg-orange-500 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Role Queue Lock Button */}
          <button
            onClick={() => setRoleQueueLocked(!roleQueueLocked)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
              roleQueueLocked
                ? 'bg-amber-500/20 text-amber-500 border-amber-500/40 shadow'
                : isDark
                ? 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                : 'bg-slate-100 text-slate-600 border-slate-300 hover:bg-slate-200'
            }`}
            title="Simula la cola de roles competitiva bloqueando los demás roles"
          >
            <Lock className={`w-3 h-3 ${roleQueueLocked ? 'text-amber-500' : 'text-slate-400'}`} />
            <span>Role Queue {roleQueueLocked ? 'Bloqueado' : 'Libre'}</span>
          </button>
        </div>
      </div>

      {/* Role Segments Gallery (CENTERED LIKE OVERWATCH!) */}
      <div className="space-y-6">
        {roleCategories
          .filter(cat => activeTab === 'all' || activeTab === cat.role)
          .map(cat => (
            <div key={cat.role} className="space-y-3">
              <div className="flex items-center justify-center space-x-3 text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
                <span className={`h-[1px] w-12 hidden sm:block ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}></span>
                <span className="flex items-center space-x-1.5">
                  {cat.icon}
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{cat.label} ({cat.heroes.length})</span>
                </span>
                <span className={`h-[1px] w-12 hidden sm:block ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}></span>
              </div>

              {/* Centered Wrap Grid: If a hero overflows, it centers naturally */}
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 max-w-5xl mx-auto">
                {cat.heroes.map(hero => renderHeroPortrait(hero))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import type { Role } from '../../types/game';
import { HeroAvatar } from '../common/HeroAvatar';
import { TRANSLATIONS, type Language } from '../../utils/i18n';
import {
  BarChart3,
  Star,
  Flame,
  TrendingUp,
  TrendingDown,
  Sparkles,
  Zap,
  Shield,
  Crosshair,
  Heart
} from 'lucide-react';

interface MetaViewProps {
  language?: Language;
  theme?: 'dark' | 'light';
}

export const MetaView: React.FC<MetaViewProps> = ({ language = 'es', theme = 'dark' }) => {
  const t = TRANSLATIONS[language];
  const isDark = theme === 'dark';

  const [selectedRole, setSelectedRole] = useState<Role | 'all'>('all');
  const [search] = useState('');

  // Tier List actualizada tras el Parche Oficial Mid-Season (Noviembre 2026)
  const metaTiers: Record<string, string[]> = {
    S: ['winston', 'tracer', 'sombra', 'kiriko'],
    A: [
      'junker-queen',
      'dva',
      'hazard',
      'reaper',
      'illari',
      'dmon',
      'shion',
      'cassidy',
      'sojourn',
      'genji',
      'torbjorn',
      'vendetta',
      'ana',
      'doctrine',
    ],
    B: [
      'mauga',
      'zarya',
      'orisa',
      'sigma',
      'ramattra',
      'doomfist',
      'wrecking-ball',
      'bastion',
      'hanzo',
      'freja',
      'soldier76',
      'symmetra',
      'widowmaker',
      'lucio',
      'baptiste',
      'juno',
      'wuyang',
    ],
    C: [
      'jetpack-cat',
      'domina',
      'reinhardt',
      'roadhog',
      'anran',
      'ashe',
      'venture',
      'junkrat',
      'mei',
      'pharah',
      'echo',
      'emre',
      'sierra',
      'brigitte',
      'mizuki',
      'moira',
      'zenyatta',
      'lifeweaver',
      'mercy',
    ],
    D: [],
  };

  const getTierForHero = (heroId: string): string => {
    for (const [tier, heroList] of Object.entries(metaTiers)) {
      if (heroList.includes(heroId)) return tier;
    }
    return 'B';
  };

  const filteredHeroes = OVERWATCH_HEROES.filter(h => {
    const roleMatch = selectedRole === 'all' || h.role === selectedRole;
    const searchMatch = h.name.toLowerCase().includes(search.toLowerCase());
    return roleMatch && searchMatch;
  });

  const tiers = ['S', 'A', 'B', 'C', 'D'] as const;

  return (
    <div className="space-y-6">
      {/* Meta Header */}
      <div className={`border rounded-3xl p-6 shadow-xl transition ${
        isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold mb-2">
              <BarChart3 className="w-4 h-4" />
              <span>TIER LIST COMPETITIVA & META ACTUAL</span>
            </div>
            <h1 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.metaTitle}
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              {t.metaSubtitle}
            </p>
          </div>

          {/* Role Filters */}
          <div className={`flex items-center space-x-1.5 p-1.5 rounded-xl border ${
            isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-300'
          }`}>
            {(['all', 'tank', 'damage', 'support'] as const).map(r => (
              <button
                key={r}
                onClick={() => setSelectedRole(r)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition capitalize ${
                  selectedRole === r ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {r === 'all' ? t.allRoles : r === 'damage' ? t.damage : r === 'tank' ? t.tank : t.support}
              </button>
            ))}
          </div>
        </div>

        {/* Legend for Stars Difficulty */}
        <div className="mt-4 pt-4 border-t border-slate-800 flex items-center space-x-4 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Dificultad de Uso:</span>
          <span className="flex items-center text-amber-400 text-[11px]">
            ★☆☆ <span className="ml-1 text-slate-400">Baja / Fácil</span>
          </span>
          <span className="flex items-center text-amber-400 text-[11px]">
            ★★☆ <span className="ml-1 text-slate-400">Media</span>
          </span>
          <span className="flex items-center text-amber-400 text-[11px]">
            ★★★ <span className="ml-1 text-slate-400">Alta / Exigente mecánicamente</span>
          </span>
        </div>
      </div>

      {/* Mid-Season Patch Balance Impact Banner */}
      <div
        className={`border rounded-3xl p-5 shadow-xl transition relative overflow-hidden ${
          isDark
            ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950/20 border-orange-500/30'
            : 'bg-gradient-to-br from-orange-50/70 via-white to-amber-50/70 border-orange-200'
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center gap-1">
                <Flame className="w-3 h-3 text-orange-500 animate-pulse" />
                PARCHE MID-SEASON (NOVIEMBRE 2026)
              </span>
              <span className="text-xs text-slate-400 font-mono">Actualizado con cambios de balance</span>
            </div>
            <h2 className={`text-base sm:text-lg font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Impacto del Parche en el Meta & Movimientos en la Tier List
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-3xl leading-relaxed">
              Junker Queen y Reaper lideran el resurgir de composiciones Brawl y Rush. Illari y Mauga se benefician de mayor sustain, mientras Doctrine, Genji y Ana reciben ajustes a sus capacidades de burst individual.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {/* Buffs Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="px-2 py-0.5 rounded-xl text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                Junker Queen (+50 HP · Carnicería 7s) → Tier A
              </span>
              <span className="px-2 py-0.5 rounded-xl text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                Mauga (+25 Armadura = 150) → Tier B
              </span>
              <span className="px-2 py-0.5 rounded-xl text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                Reaper (+25 HP) → Tier A
              </span>
              <span className="px-2 py-0.5 rounded-xl text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                Illari (Pilón & Recarga solar) → Tier A
              </span>
            </div>

            {/* Nerfs Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="px-2 py-0.5 rounded-xl text-[11px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" />
                Doctrine (Cooldowns & Infuse) → Tier A
              </span>
              <span className="px-2 py-0.5 rounded-xl text-[11px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" />
                Genji (Desvío 1.5s)
              </span>
              <span className="px-2 py-0.5 rounded-xl text-[11px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" />
                Ana (Granada 60 dmg)
              </span>
              <span className="px-2 py-0.5 rounded-xl text-[11px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center gap-1">
                <TrendingDown className="w-3.5 h-3.5" />
                Jetpack Cat (200 HP) → Tier C
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tier Rows */}
      <div className="space-y-4">
        {tiers.map(tier => {
          const tierHeroes = filteredHeroes.filter(h => getTierForHero(h.id) === tier);
          if (tierHeroes.length === 0) return null;

          let badgeColor = 'bg-slate-800 text-slate-300 border-slate-700';
          if (tier === 'S') badgeColor = 'bg-rose-500 text-white border-rose-400 shadow-lg shadow-rose-500/20';
          if (tier === 'A') badgeColor = 'bg-orange-500 text-white border-orange-400 shadow-lg shadow-orange-500/20';
          if (tier === 'B') badgeColor = 'bg-amber-500 text-slate-900 border-amber-400 font-black';
          if (tier === 'C') badgeColor = 'bg-emerald-600 text-white border-emerald-500';
          if (tier === 'D') badgeColor = 'bg-slate-700 text-slate-300 border-slate-600';

          return (
            <div
              key={tier}
              className={`border rounded-3xl p-4 flex flex-col md:flex-row md:items-center gap-4 shadow-lg transition ${
                isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl border flex-shrink-0 ${badgeColor}`}>
                {tier}
              </div>

              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {tierHeroes.map(hero => (
                  <div
                    key={hero.id}
                    className={`border rounded-2xl p-3 transition group flex flex-col justify-between ${
                      isDark
                        ? 'bg-slate-800/80 border-slate-700 hover:border-blue-500/50'
                        : 'bg-slate-50 border-slate-200 hover:border-blue-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-900 text-slate-400">
                          {hero.role === 'damage' ? 'DPS' : hero.role === 'tank' ? 'Tanque' : 'Apoyo'}
                        </span>
                        <div className="flex items-center text-amber-400" title={`Dificultad de uso: ${hero.difficulty}/3`}>
                          {Array.from({ length: 3 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-2.5 h-2.5 ${i < hero.difficulty ? 'fill-current text-amber-400' : 'text-slate-600'}`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center space-x-2.5">
                        <HeroAvatar hero={hero} size="sm" />
                        <div className="truncate">
                          <div className={`font-bold text-sm truncate group-hover:text-blue-400 transition ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}>
                            {hero.name}
                          </div>
                          <div className="text-[10px] text-slate-400 uppercase font-mono">
                            {hero.style}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-700/60 text-[10px] text-slate-400 truncate" title={hero.perks[0]}>
                      {hero.perks[0]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

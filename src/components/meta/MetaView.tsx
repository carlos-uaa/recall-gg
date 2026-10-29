import React, { useState } from 'react';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import type { Role } from '../../types/game';
import { BarChart3, Star } from 'lucide-react';

export const MetaView: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role | 'all'>('all');
  const [search] = useState('');

  // Defined tiers based on current OW2 competitive meta
  const metaTiers: Record<string, string[]> = {
    S: ['tracer', 'winston', 'kiriko', 'lucio', 'dva', 'sojourn', 'baptiste', 'juno'],
    A: ['ashe', 'cassidy', 'ana', 'sigma', 'genji', 'reinhardt', 'illari', 'doomfist', 'venture'],
    B: ['ramattra', 'junker-queen', 'widowmaker', 'soldier76', 'brigitte', 'moira', 'echo', 'mei', 'zarya'],
    C: ['roadhog', 'mauga', 'orisa', 'bastion', 'torbjorn', 'junkrat', 'zenyatta', 'sombra', 'symmetra'],
    D: ['hanzo', 'reaper', 'pharah', 'lifeweaver', 'mercy', 'wrecking-ball'],
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
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold mb-2">
              <BarChart3 className="w-4 h-4" />
              <span>TIER LIST COMPETITIVA & META ACTUAL</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ranking de Héroes Overwatch 2
            </h1>
            <p className="text-sm text-slate-400">
              Clasificación actualizada según torneos, partidas competitivas de alto rango y efectividad global.
            </p>
          </div>

          {/* Role Filters */}
          <div className="flex items-center space-x-1.5 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700">
            {(['all', 'tank', 'damage', 'support'] as const).map(r => (
              <button
                key={r}
                onClick={() => setSelectedRole(r)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition capitalize ${
                  selectedRole === r ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {r === 'all' ? 'Todos' : r === 'damage' ? 'DPS' : r === 'tank' ? 'Tanque' : 'Apoyo'}
              </button>
            ))}
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
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row md:items-center gap-4 shadow-lg"
            >
              {/* Tier Badge Box */}
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center font-black text-2xl border flex-shrink-0 ${badgeColor}`}>
                {tier}
              </div>

              {/* Heroes in this Tier */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {tierHeroes.map(hero => (
                  <div
                    key={hero.id}
                    className="bg-slate-800/80 border border-slate-700 rounded-xl p-3 hover:border-blue-500/50 hover:bg-slate-800 transition group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-900 text-slate-400">
                          {hero.role === 'damage' ? 'DPS' : hero.role === 'tank' ? 'Tanque' : 'Apoyo'}
                        </span>
                        <div className="flex items-center text-amber-400" title={`Dificultad: ${hero.difficulty}/3`}>
                          {Array.from({ length: hero.difficulty }).map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 fill-current" />
                          ))}
                        </div>
                      </div>

                      <div className="font-bold text-white text-sm group-hover:text-blue-400 transition truncate">
                        {hero.name}
                      </div>
                      <div className="text-[11px] text-slate-400 uppercase font-mono mt-0.5">
                        {hero.style} • {hero.range}
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

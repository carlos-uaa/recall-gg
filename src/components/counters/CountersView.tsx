import React, { useState } from 'react';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import type { Hero } from '../../types/game';
import { Swords, Sparkles, CheckCircle2, AlertOctagon, Zap } from 'lucide-react';

export const CountersView: React.FC = () => {
  const [selectedHeroId, setSelectedHeroId] = useState<string>('tracer');
  const [search, setSearch] = useState('');

  const selectedHero: Hero = OVERWATCH_HEROES.find(h => h.id === selectedHeroId) || OVERWATCH_HEROES[0];

  const strongAgainstHeroes = OVERWATCH_HEROES.filter(h => selectedHero.counters.strongAgainst.includes(h.id));
  const weakAgainstHeroes = OVERWATCH_HEROES.filter(h => selectedHero.counters.weakAgainst.includes(h.id));
  const synergyHeroes = OVERWATCH_HEROES.filter(h => selectedHero.synergies.includes(h.id));

  const filteredRoster = OVERWATCH_HEROES.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur shadow-xl">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-2">
          <Swords className="w-4 h-4" />
          <span>MATRIZ DE ENFRENTAMIENTOS & COUNTERS</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Guía de Counters & Sinergias
        </h1>
        <p className="text-sm text-slate-400">
          Selecciona a cualquier personaje para ver de inmediato a quién destruye, quién lo anula y qué compañeros multiplican su efectividad.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Quick Hero Picker List */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 shadow-lg flex flex-col h-[650px]">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Buscar héroe..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="flex-1 overflow-y-auto space-y-1.5 pr-1">
            {filteredRoster.map(hero => (
              <button
                key={hero.id}
                onClick={() => setSelectedHeroId(hero.id)}
                className={`w-full text-left p-2.5 rounded-xl flex items-center justify-between transition ${
                  hero.id === selectedHeroId
                    ? 'bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-600/30'
                    : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center space-x-2.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                    hero.id === selectedHeroId ? 'bg-black/20 text-white' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {hero.name.substring(0, 2)}
                  </div>
                  <span className="text-xs">{hero.name}</span>
                </div>
                <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded ${
                  hero.id === selectedHeroId ? 'bg-black/20 text-white' : 'bg-slate-900 text-slate-400'
                }`}>
                  {hero.role === 'damage' ? 'DPS' : hero.role === 'tank' ? 'Tanque' : 'Apoyo'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Detailed Matchups Inspector */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hero Profile Banner */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center font-black text-2xl text-white shadow-lg shadow-emerald-500/30">
                  {selectedHero.name.substring(0, 2)}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-2xl font-black text-white">{selectedHero.name}</h2>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-mono uppercase">
                      {selectedHero.role === 'damage' ? 'DPS' : selectedHero.role === 'tank' ? 'Tanque' : 'Apoyo'}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Estilo: <span className="text-emerald-400 font-bold uppercase">{selectedHero.style}</span> • Alcance: {selectedHero.range} • {selectedHero.country}
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700 text-right">
                <div className="text-[10px] uppercase text-slate-400 font-semibold">Dificultad Mecánica</div>
                <div className="text-base font-bold text-amber-400">
                  {selectedHero.difficulty === 1 ? 'Baja (Consistente)' : selectedHero.difficulty === 2 ? 'Media' : 'Alta (Requiere Precisión)'}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 mt-4 leading-relaxed bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
              {selectedHero.description}
            </p>

            {/* Perks list */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center">
                <Zap className="w-3.5 h-3.5 text-amber-400 mr-1" /> Perks Destacados:
              </span>
              {selectedHero.perks.map((perk, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 border border-slate-700">
                  {perk}
                </span>
              ))}
            </div>
          </div>

          {/* Matchups Breakdown: Counters vs Countered By */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Strong Against */}
            <div className="bg-slate-900/70 border border-emerald-500/30 rounded-2xl p-5 shadow-lg">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>Héroes a los que {selectedHero.name} domina ({strongAgainstHeroes.length})</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-3">
                Tu kit ofrece ventajas tácticas directas para cazar o neutralizar a estos objetivos:
              </p>

              <div className="grid grid-cols-2 gap-2">
                {strongAgainstHeroes.length > 0 ? (
                  strongAgainstHeroes.map(h => (
                    <div key={h.id} className="p-2 rounded-xl bg-slate-800/80 border border-emerald-500/20 flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                        {h.name.substring(0, 2)}
                      </div>
                      <div className="truncate">
                        <div className="font-semibold text-xs text-white truncate">{h.name}</div>
                        <div className="text-[10px] text-slate-400 uppercase font-mono">{h.role}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-xs text-slate-400 italic p-3 text-center bg-slate-800/40 rounded-xl">
                    Héroe neutral / basado en utilidad situacional.
                  </div>
                )}
              </div>
            </div>

            {/* Weak Against */}
            <div className="bg-slate-900/70 border border-rose-500/30 rounded-2xl p-5 shadow-lg">
              <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm mb-3">
                <AlertOctagon className="w-4 h-4" />
                <span>Counters que debes evitar ({weakAgainstHeroes.length})</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-3">
                Si el equipo rival tiene 2 o más de estos picks, considera cambiar de personaje:
              </p>

              <div className="grid grid-cols-2 gap-2">
                {weakAgainstHeroes.length > 0 ? (
                  weakAgainstHeroes.map(h => (
                    <div key={h.id} className="p-2 rounded-xl bg-slate-800/80 border border-rose-500/20 flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-xs">
                        {h.name.substring(0, 2)}
                      </div>
                      <div className="truncate">
                        <div className="font-semibold text-xs text-white truncate">{h.name}</div>
                        <div className="text-[10px] text-slate-400 uppercase font-mono">{h.role}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-xs text-slate-400 italic p-3 text-center bg-slate-800/40 rounded-xl">
                    Sin counters duros directos en el meta actual.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Synergies */}
          <div className="bg-slate-900/70 border border-blue-500/30 rounded-2xl p-5 shadow-lg">
            <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Mejores Sinergias y Compañeros de Equipo</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
              {synergyHeroes.map(h => (
                <div key={h.id} className="p-2 rounded-xl bg-slate-800/80 border border-blue-500/20 flex items-center space-x-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                    {h.name.substring(0, 2)}
                  </div>
                  <div className="truncate">
                    <div className="font-semibold text-xs text-white truncate">{h.name}</div>
                    <div className="text-[10px] text-slate-400 uppercase font-mono">{h.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

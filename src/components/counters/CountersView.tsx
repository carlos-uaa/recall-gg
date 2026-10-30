import React, { useState } from 'react';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import type { Hero } from '../../types/game';
import { HeroAvatar } from '../common/HeroAvatar';
import { TRANSLATIONS, type Language } from '../../utils/i18n';
import { Swords, Sparkles, CheckCircle2, AlertOctagon, Zap, Star, ShieldAlert, Award, MessageSquare } from 'lucide-react';

interface CountersViewProps {
  language?: Language;
  theme?: 'dark' | 'light';
}

export const CountersView: React.FC<CountersViewProps> = ({ language = 'es', theme = 'dark' }) => {
  const t = TRANSLATIONS[language];
  const isDark = theme === 'dark';

  const [selectedHeroId, setSelectedHeroId] = useState<string>('tracer');
  const [search, setSearch] = useState('');

  const selectedHero: Hero = OVERWATCH_HEROES.find(h => h.id === selectedHeroId) || OVERWATCH_HEROES[0];

  // Divide strong against into Hard and Soft counters
  const strongAgainstHeroes = OVERWATCH_HEROES.filter(h => selectedHero.counters.strongAgainst.includes(h.id));
  const hardStrongAgainstHeroes = OVERWATCH_HEROES.filter(h => selectedHero.counters.hardStrongAgainst?.includes(h.id));
  const softStrongAgainstHeroes = strongAgainstHeroes.filter(h => !selectedHero.counters.hardStrongAgainst?.includes(h.id));

  // Divide weak against into Hard and Soft counters
  const weakAgainstHeroes = OVERWATCH_HEROES.filter(h => selectedHero.counters.weakAgainst.includes(h.id));
  const hardWeakAgainstHeroes = OVERWATCH_HEROES.filter(h => selectedHero.counters.hardWeakAgainst?.includes(h.id));
  const softWeakAgainstHeroes = weakAgainstHeroes.filter(h => !selectedHero.counters.hardWeakAgainst?.includes(h.id));

  const synergyHeroes = OVERWATCH_HEROES.filter(h => selectedHero.synergies.includes(h.id));

  const filteredRoster = OVERWATCH_HEROES.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  const getTierColor = (tier: string = 'B') => {
    switch (tier) {
      case 'S':
        return 'bg-rose-500 text-white border-rose-400 shadow-rose-500/30';
      case 'A':
        return 'bg-orange-500 text-white border-orange-400 shadow-orange-500/30';
      case 'B':
        return 'bg-amber-500 text-slate-900 border-amber-400 font-black';
      case 'C':
        return 'bg-emerald-600 text-white border-emerald-500';
      default:
        return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className={`border rounded-3xl p-4 sm:p-6 shadow-xl transition ${
        isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-2">
          <Swords className="w-4 h-4" />
          <span>MATRIZ DE ENFRENTAMIENTOS & COUNTERS OFICIALES</span>
        </div>
        <h1 className={`text-2xl sm:text-3xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {t.countersTitle}
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          {t.countersSubtitle} — Matriz 100% coherente y antisimétrica de los 54 héroes, con counters duros, motivos tácticos y consejos directos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
        {/* Left: Quick Hero Picker List */}
        <div className={`border rounded-3xl p-3.5 sm:p-4 shadow-lg flex flex-col max-h-60 lg:max-h-none lg:h-[700px] transition ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Buscar héroe..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full border rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${
                isDark
                  ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500'
                  : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>

          <div className="flex-1 overflow-y-auto space-y-1.5 pr-1">
            {filteredRoster.map(hero => (
              <button
                key={hero.id}
                onClick={() => setSelectedHeroId(hero.id)}
                className={`w-full text-left p-2.5 rounded-2xl flex items-center justify-between transition ${
                  hero.id === selectedHeroId
                    ? 'bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-600/30'
                    : isDark ? 'bg-slate-800/60 hover:bg-slate-800 text-slate-300' : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                }`}
              >
                <div className="flex items-center space-x-2.5 truncate">
                  <HeroAvatar hero={hero} size="xs" />
                  <span className="text-xs truncate">{hero.name}</span>
                </div>
                <div className="flex items-center space-x-1.5 flex-shrink-0">
                  <span className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded ${
                    hero.id === selectedHeroId ? 'bg-black/20 text-white' : 'bg-slate-900 text-slate-400'
                  }`}>
                    {hero.role === 'damage' ? 'DPS' : hero.role === 'tank' ? 'Tanque' : 'Apoyo'}
                  </span>
                  <span className={`text-[9px] font-mono font-black px-1.5 py-0.5 rounded ${getTierColor(hero.tier)}`}>
                    {hero.tier || 'B'}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Detailed Matchups Inspector */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hero Profile Banner */}
          <div className={`border rounded-3xl p-6 shadow-xl relative overflow-hidden transition ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <HeroAvatar hero={selectedHero} size="xl" showRoleBadge />
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {selectedHero.name}
                    </h2>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-mono uppercase">
                      {selectedHero.role === 'damage' ? 'DPS' : selectedHero.role === 'tank' ? 'Tanque' : 'Apoyo'}
                    </span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-black border shadow-sm ${getTierColor(selectedHero.tier)}`}>
                      Tier {selectedHero.tier || 'B'}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Subrol: <span className="text-orange-400 font-bold">{selectedHero.subrole}</span> • Estilo: <span className="text-emerald-400 font-bold uppercase">{selectedHero.style}</span> • {selectedHero.country}
                  </div>
                </div>
              </div>

              <div className={`rounded-2xl p-3 border text-right ${
                isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-200'
              }`}>
                <div className="text-[10px] uppercase text-slate-400 font-semibold">Dificultad de Uso</div>
                <div className="text-sm font-bold text-amber-400 flex items-center justify-end space-x-1 mt-0.5">
                  <div className="flex">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < selectedHero.difficulty ? 'fill-current text-amber-400' : 'text-slate-600'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-300 ml-1">
                    {selectedHero.difficulty === 1 ? 'Baja' : selectedHero.difficulty === 2 ? 'Media' : 'Alta'}
                  </span>
                </div>
              </div>
            </div>

            <p className={`text-xs mt-4 leading-relaxed p-3.5 rounded-2xl border ${
              isDark ? 'bg-slate-800/40 border-slate-700/50 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
            }`}>
              {selectedHero.description}
            </p>

            {/* Tactical Advice Box (Cómo hacerle counter / Consejo semi-pro) */}
            {selectedHero.counterAdvice && (
              <div className={`mt-4 p-4 rounded-2xl border transition flex items-start space-x-3 ${
                isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-200' : 'bg-amber-50 border-amber-200 text-amber-900'
              }`}>
                <MessageSquare className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-black uppercase tracking-wide text-amber-400 mb-1">
                    Consejos del Coach: Cómo jugarle en contra a {selectedHero.name}
                  </div>
                  <p className="text-xs leading-relaxed opacity-95">
                    "{selectedHero.counterAdvice}"
                  </p>
                </div>
              </div>
            )}

            {/* Perks list */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center">
                <Zap className="w-3.5 h-3.5 text-amber-400 mr-1" /> {t.featuredPerks}:
              </span>
              {selectedHero.perks.map((perk, i) => (
                <span key={i} className={`px-2.5 py-1 rounded-xl text-xs border ${
                  isDark ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}>
                  {perk}
                </span>
              ))}
            </div>
          </div>

          {/* Matchups Breakdown: Counters vs Countered By */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Strong Against */}
            <div className={`border rounded-3xl p-5 shadow-lg transition ${
              isDark ? 'bg-slate-900/70 border-emerald-500/30' : 'bg-white border-emerald-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t.strongAgainst} ({strongAgainstHeroes.length})</span>
                </div>
                {hardStrongAgainstHeroes.length > 0 && (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    {hardStrongAgainstHeroes.length} duro{hardStrongAgainstHeroes.length > 1 ? 's' : ''}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 mb-3">
                Tu kit ofrece ventajas tácticas directas para cazar o neutralizar a estos objetivos:
              </p>

              <div className="space-y-2">
                {strongAgainstHeroes.length > 0 ? (
                  strongAgainstHeroes.map(h => {
                    const detail = selectedHero.counters.strongDetails?.[h.id];
                    const isHard = detail?.hard || selectedHero.counters.hardStrongAgainst?.includes(h.id);

                    return (
                      <div
                        key={h.id}
                        className={`p-2.5 rounded-2xl border transition flex flex-col justify-between ${
                          isHard
                            ? 'bg-emerald-950/40 border-emerald-500/50 shadow-sm shadow-emerald-500/20 ring-1 ring-emerald-500/30'
                            : isDark ? 'bg-slate-800/80 border-emerald-500/20' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2.5">
                            <HeroAvatar hero={h} size="xs" />
                            <div>
                              <div className="font-bold text-xs text-white flex items-center space-x-1.5">
                                <span>{h.name}</span>
                                {isHard && (
                                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500 text-slate-950 font-black">
                                    ★ HARD
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] text-slate-400 uppercase font-mono">{h.role} • {h.subrole}</div>
                            </div>
                          </div>
                        </div>

                        {detail?.motivo && (
                          <div className="mt-2 pt-1.5 border-t border-emerald-500/20 text-[11px] text-emerald-300 italic">
                            "{detail.motivo}"
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="text-xs text-slate-400 italic p-3 text-center bg-slate-800/40 rounded-xl">
                    Héroe neutral / enfocado en utilidad situacional y sinergias.
                  </div>
                )}
              </div>
            </div>

            {/* Weak Against */}
            <div className={`border rounded-3xl p-5 shadow-lg transition ${
              isDark ? 'bg-slate-900/70 border-rose-500/30' : 'bg-white border-rose-200'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
                  <AlertOctagon className="w-4 h-4" />
                  <span>{t.weakAgainst} ({weakAgainstHeroes.length})</span>
                </div>
                {hardWeakAgainstHeroes.length > 0 && (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40">
                    {hardWeakAgainstHeroes.length} duro{hardWeakAgainstHeroes.length > 1 ? 's' : ''}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-400 mb-3">
                Si el equipo rival cuenta con estos personajes, tu efectividad caerá drásticamente:
              </p>

              <div className="space-y-2">
                {weakAgainstHeroes.length > 0 ? (
                  weakAgainstHeroes.map(h => {
                    const detail = selectedHero.counters.weakDetails?.[h.id];
                    const isHard = detail?.hard || selectedHero.counters.hardWeakAgainst?.includes(h.id);

                    return (
                      <div
                        key={h.id}
                        className={`p-2.5 rounded-2xl border transition flex flex-col justify-between ${
                          isHard
                            ? 'bg-rose-950/40 border-rose-500/50 shadow-sm shadow-rose-500/20 ring-1 ring-rose-500/30'
                            : isDark ? 'bg-slate-800/80 border-rose-500/20' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2.5">
                            <HeroAvatar hero={h} size="xs" />
                            <div>
                              <div className="font-bold text-xs text-white flex items-center space-x-1.5">
                                <span>{h.name}</span>
                                {isHard && (
                                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-rose-500 text-white font-black">
                                    ★ HARD
                                  </span>
                                )}
                              </div>
                              <div className="text-[10px] text-slate-400 uppercase font-mono">{h.role} • {h.subrole}</div>
                            </div>
                          </div>
                        </div>

                        {detail?.motivo && (
                          <div className="mt-2 pt-1.5 border-t border-rose-500/20 text-[11px] text-rose-300 italic">
                            "{detail.motivo}"
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="text-xs text-slate-400 italic p-3 text-center bg-slate-800/40 rounded-xl">
                    ¡Sin counters directos en el meta actual!
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Synergies */}
          <div className={`border rounded-3xl p-5 shadow-lg transition ${
            isDark ? 'bg-slate-900/70 border-blue-500/30' : 'bg-white border-blue-200'
          }`}>
            <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{t.synergies} ({synergyHeroes.length})</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
              {synergyHeroes.map(h => (
                <div key={h.id} className="p-2 rounded-2xl bg-slate-800/80 border border-blue-500/20 flex items-center space-x-2.5">
                  <HeroAvatar hero={h} size="xs" />
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

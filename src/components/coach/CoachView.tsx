import React, { useState, useMemo } from 'react';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import { OVERWATCH_MAPS } from '../../games/overwatch/maps';
import type { GameMap, RankTier, Role } from '../../types/game';
import { calculateRecommendations } from '../../core/coachEngine';
import { 
  Shield, 
  Swords, 
  Heart, 
  MapPin, 
  Trophy, 
  CheckCircle2, 
  AlertTriangle, 
  Plus, 
  X, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const CoachView: React.FC = () => {
  const [selectedMapId, setSelectedMapId] = useState<string>('kings-row');
  const [rankTier, setRankTier] = useState<RankTier>('plat_diamond');
  const [selectedRole, setSelectedRole] = useState<Role | 'all'>('all');
  const [allyHeroIds, setAllyHeroIds] = useState<string[]>([]);
  const [enemyHeroIds, setEnemyHeroIds] = useState<string[]>(['winston', 'tracer', 'ana']);
  const [modalTarget, setModalTarget] = useState<'ally' | 'enemy' | null>(null);
  const [searchFilter, setSearchFilter] = useState('');
  const [viewMode, setViewMode] = useState<'quick' | 'detailed'>('detailed');

  const selectedMap: GameMap = useMemo(() => {
    return OVERWATCH_MAPS.find(m => m.id === selectedMapId) || OVERWATCH_MAPS[0];
  }, [selectedMapId]);

  const recommendations = useMemo(() => {
    return calculateRecommendations({
      role: selectedRole,
      gameMap: selectedMap,
      allyHeroIds,
      enemyHeroIds,
      rankTier,
    });
  }, [selectedRole, selectedMap, allyHeroIds, enemyHeroIds, rankTier]);

  const toggleAllyHero = (id: string) => {
    if (allyHeroIds.includes(id)) {
      setAllyHeroIds(allyHeroIds.filter(h => h !== id));
    } else {
      if (allyHeroIds.length < 4) {
        setAllyHeroIds([...allyHeroIds, id]);
      }
    }
    setModalTarget(null);
  };

  const toggleEnemyHero = (id: string) => {
    if (enemyHeroIds.includes(id)) {
      setEnemyHeroIds(enemyHeroIds.filter(h => h !== id));
    } else {
      if (enemyHeroIds.length < 5) {
        setEnemyHeroIds([...enemyHeroIds, id]);
      }
    }
    setModalTarget(null);
  };

  const loadPreset = (type: 'dive' | 'brawl' | 'poke') => {
    if (type === 'dive') {
      setEnemyHeroIds(['winston', 'tracer', 'genji', 'kiriko', 'lucio']);
    } else if (type === 'brawl') {
      setEnemyHeroIds(['reinhardt', 'reaper', 'mei', 'lucio', 'baptiste']);
    } else if (type === 'poke') {
      setEnemyHeroIds(['sigma', 'ashe', 'widowmaker', 'baptiste', 'zenyatta']);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner / Controls Bar */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-6 backdrop-blur shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/30">
                OVERCOACH LIBRE & POTENCIADO
              </span>
              <span className="text-xs text-slate-400">Algoritmo Táctico v2.0</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
              Asistente Táctico de Partida
            </h1>
            <p className="text-sm text-slate-400">
              Analiza en tiempo real el mapa, rango y composiciones para recomendarte el pick con mayor probabilidad de victoria.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            {/* View Mode Toggle */}
            <div className="bg-slate-800/80 p-1 rounded-xl flex items-center border border-slate-700/60">
              <button
                onClick={() => setViewMode('quick')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  viewMode === 'quick' ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Modo Rápido
              </button>
              <button
                onClick={() => setViewMode('detailed')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  viewMode === 'detailed' ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                Modo Táctico
              </button>
            </div>
          </div>
        </div>

        {/* Global Match Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
          {/* Map Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>Mapa de la Partida</span>
            </label>
            <select
              value={selectedMapId}
              onChange={(e) => setSelectedMapId(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {OVERWATCH_MAPS.map((map) => (
                <option key={map.id} value={map.id}>
                  {map.name} ({map.mode})
                </option>
              ))}
            </select>
            <div className="flex items-center space-x-2 mt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Estilo favorecido:</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-orange-300 border border-slate-700 font-mono text-[11px] uppercase">
                {selectedMap.favoredStyles.join(' / ')}
              </span>
            </div>
          </div>

          {/* Rank Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>Rango Competitivo</span>
            </label>
            <select
              value={rankTier}
              onChange={(e) => setRankTier(e.target.value as RankTier)}
              className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="bronze_gold">Bronce — Oro (Foco en consistencia)</option>
              <option value="plat_diamond">Platino — Diamante (Equilibrado)</option>
              <option value="master_top500">Master — Top 500 (Máximo techo mecánico)</option>
            </select>
            <p className="text-[11px] text-slate-400 mt-2">
              Ajusta el peso de dificultad mecánica de héroes como Widow o Tracer.
            </p>
          </div>

          {/* Role Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>Tu Rol a Jugar</span>
            </label>
            <div className="grid grid-cols-4 gap-1.5 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
              {(['all', 'tank', 'damage', 'support'] as const).map(r => (
                <button
                  key={r}
                  onClick={() => setSelectedRole(r)}
                  className={`py-1.5 rounded-lg text-xs font-bold transition capitalize ${
                    selectedRole === r ? 'bg-orange-500 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {r === 'all' ? 'Todos' : r === 'damage' ? 'DPS' : r === 'tank' ? 'Tanque' : 'Apoyo'}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Filtra las sugerencias por la cola de roles en la que entraste.
            </p>
          </div>
        </div>
      </div>

      {/* Team Composition Pickers (Ally & Enemy) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Ally Team */}
        <div className="bg-slate-900/60 border border-blue-500/20 rounded-2xl p-4 sm:p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
              <h3 className="font-bold text-white text-sm">Tu Equipo Aliado ({allyHeroIds.length}/4)</h3>
            </div>
            {allyHeroIds.length > 0 && (
              <button
                onClick={() => setAllyHeroIds([])}
                className="text-xs text-slate-400 hover:text-rose-400 transition"
              >
                Limpiar
              </button>
            )}
          </div>

          <div className="flex items-center space-x-3 overflow-x-auto py-1">
            {allyHeroIds.map(id => {
              const hero = OVERWATCH_HEROES.find(h => h.id === id);
              if (!hero) return null;
              return (
                <div
                  key={id}
                  className="flex-shrink-0 relative group bg-slate-800 border border-blue-500/30 rounded-xl p-2 flex flex-col items-center w-20"
                >
                  <button
                    onClick={() => toggleAllyHero(id)}
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center font-bold text-blue-400 mb-1">
                    {hero.name.charAt(0)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-200 truncate w-full text-center">
                    {hero.name}
                  </span>
                  <span className="text-[9px] text-slate-400 uppercase font-mono">{hero.style}</span>
                </div>
              );
            })}

            {allyHeroIds.length < 4 && (
              <button
                onClick={() => setModalTarget('ally')}
                className="flex-shrink-0 w-20 h-20 rounded-xl border-2 border-dashed border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/5 flex flex-col items-center justify-center text-slate-400 hover:text-blue-400 transition group"
              >
                <Plus className="w-5 h-5 mb-1 group-hover:scale-110 transition" />
                <span className="text-[11px] font-medium">Aliado</span>
              </button>
            )}
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Agrega los héroes que ya eligieron tus compañeros para calcular sinergias.
          </p>
        </div>

        {/* Enemy Team */}
        <div className="bg-slate-900/60 border border-rose-500/20 rounded-2xl p-4 sm:p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
              <h3 className="font-bold text-white text-sm">Equipo Rival ({enemyHeroIds.length}/5)</h3>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-slate-400">Presets:</span>
              <button
                onClick={() => loadPreset('dive')}
                className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-purple-400 hover:bg-purple-500/20 transition"
              >
                Dive
              </button>
              <button
                onClick={() => loadPreset('brawl')}
                className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-amber-400 hover:bg-amber-500/20 transition"
              >
                Brawl
              </button>
              <button
                onClick={() => loadPreset('poke')}
                className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-cyan-400 hover:bg-cyan-500/20 transition"
              >
                Poke
              </button>
              {enemyHeroIds.length > 0 && (
                <button
                  onClick={() => setEnemyHeroIds([])}
                  className="text-xs text-slate-400 hover:text-rose-400 ml-2 transition"
                >
                  Limpiar
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3 overflow-x-auto py-1">
            {enemyHeroIds.map(id => {
              const hero = OVERWATCH_HEROES.find(h => h.id === id);
              if (!hero) return null;
              return (
                <div
                  key={id}
                  className="flex-shrink-0 relative group bg-slate-800 border border-rose-500/30 rounded-xl p-2 flex flex-col items-center w-20"
                >
                  <button
                    onClick={() => toggleEnemyHero(id)}
                    className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center font-bold text-rose-400 mb-1">
                    {hero.name.charAt(0)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-200 truncate w-full text-center">
                    {hero.name}
                  </span>
                  <span className="text-[9px] text-slate-400 uppercase font-mono">{hero.style}</span>
                </div>
              );
            })}

            {enemyHeroIds.length < 5 && (
              <button
                onClick={() => setModalTarget('enemy')}
                className="flex-shrink-0 w-20 h-20 rounded-xl border-2 border-dashed border-slate-700 hover:border-rose-500/50 hover:bg-rose-500/5 flex flex-col items-center justify-center text-slate-400 hover:text-rose-400 transition group"
              >
                <Plus className="w-5 h-5 mb-1 group-hover:scale-110 transition" />
                <span className="text-[11px] font-medium">Rival</span>
              </button>
            )}
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            Selecciona a los héroes enemigos detectados para calcular counters inmediatos.
          </p>
        </div>
      </div>

      {/* Hero Selection Modal */}
      {modalTarget && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-white text-lg">
                  Seleccionar {modalTarget === 'ally' ? 'Héroe Aliado' : 'Héroe Rival'}
                </h3>
                <p className="text-xs text-slate-400">
                  Haz clic en un retrato para añadirlo a la composición.
                </p>
              </div>
              <button
                onClick={() => setModalTarget(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 border-b border-slate-800">
              <input
                type="text"
                placeholder="Buscar por nombre (e.g. Tracer, Reinhardt, Ana)..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                autoFocus
              />
            </div>

            <div className="p-4 overflow-y-auto space-y-4">
              {(['tank', 'damage', 'support'] as const).map(role => {
                const heroesInRole = OVERWATCH_HEROES.filter(
                  h => h.role === role && h.name.toLowerCase().includes(searchFilter.toLowerCase())
                );
                if (heroesInRole.length === 0) return null;

                return (
                  <div key={role}>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center space-x-1.5">
                      {role === 'tank' && <Shield className="w-3.5 h-3.5 text-blue-400" />}
                      {role === 'damage' && <Swords className="w-3.5 h-3.5 text-rose-400" />}
                      {role === 'support' && <Heart className="w-3.5 h-3.5 text-emerald-400" />}
                      <span>{role === 'tank' ? 'Tanques' : role === 'damage' ? 'DPS' : 'Apoyos'}</span>
                    </div>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
                      {heroesInRole.map(hero => {
                        const isSelected = modalTarget === 'ally'
                          ? allyHeroIds.includes(hero.id)
                          : enemyHeroIds.includes(hero.id);

                        return (
                          <button
                            key={hero.id}
                            onClick={() => {
                              if (modalTarget === 'ally') toggleAllyHero(hero.id);
                              else toggleEnemyHero(hero.id);
                            }}
                            className={`p-2 rounded-xl border flex flex-col items-center transition ${
                              isSelected
                                ? 'bg-orange-500/20 border-orange-500 text-orange-300'
                                : 'bg-slate-800/80 border-slate-700/80 text-slate-200 hover:bg-slate-700/80 hover:border-slate-600'
                            }`}
                          >
                            <div className="w-9 h-9 rounded-lg bg-slate-700 flex items-center justify-center font-bold text-sm mb-1 text-white">
                              {hero.name.substring(0, 2)}
                            </div>
                            <span className="text-xs font-semibold truncate w-full text-center">
                              {hero.name}
                            </span>
                            <span className="text-[10px] text-slate-400">{hero.range}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tactical Recommendations Feed */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <h2 className="text-xl font-black text-white tracking-tight">
              Recomendación Táctica Inteligente ({recommendations.length} Héroes)
            </h2>
          </div>
          <span className="text-xs text-slate-400">
            Ordenado de mayor a menor viabilidad calculada
          </span>
        </div>

        {/* Hero Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map((item, index) => {
            const { hero, totalScore, pros, cons, tacticalVerdict } = item;

            // Score badge color styling
            let scoreBg = 'bg-rose-500/10 text-rose-400 border-rose-500/30';
            let barColor = 'bg-rose-500';
            if (totalScore >= 80) {
              scoreBg = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
              barColor = 'bg-emerald-500';
            } else if (totalScore >= 65) {
              scoreBg = 'bg-blue-500/10 text-blue-400 border-blue-500/30';
              barColor = 'bg-blue-500';
            } else if (totalScore >= 45) {
              scoreBg = 'bg-amber-500/10 text-amber-400 border-amber-500/30';
              barColor = 'bg-amber-500';
            }

            return (
              <div
                key={hero.id}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition flex flex-col justify-between shadow-lg relative group"
              >
                {/* Header: Hero identity + Score */}
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center font-black text-xl text-white shadow-inner">
                        {hero.name.substring(0, 2)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-bold text-white text-base">{hero.name}</h3>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                            #{index + 1}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-slate-400">
                          <span className="capitalize">{hero.role === 'damage' ? 'DPS' : hero.role === 'tank' ? 'Tanque' : 'Apoyo'}</span>
                          <span>•</span>
                          <span className="uppercase text-orange-400 font-semibold">{hero.style}</span>
                          <span>•</span>
                          <span>{hero.range}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`px-3 py-1.5 rounded-xl border text-center font-mono font-black ${scoreBg}`}>
                      <div className="text-xl leading-none">{totalScore}</div>
                      <div className="text-[9px] uppercase tracking-wider font-sans font-bold">SCORE</div>
                    </div>
                  </div>

                  {/* Score Progress Bar */}
                  <div className="w-full bg-slate-800 rounded-full h-1.5 mb-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                      style={{ width: `${totalScore}%` }}
                    ></div>
                  </div>

                  {/* Tactical Verdict */}
                  <div className="bg-slate-800/60 rounded-xl p-2.5 text-xs text-slate-300 mb-3 border border-slate-700/50">
                    <span className="font-semibold text-orange-400">Dictamen: </span>
                    {tacticalVerdict}
                  </div>

                  {/* Pros & Cons List */}
                  {viewMode === 'detailed' && (
                    <div className="space-y-2 mb-4">
                      {pros.slice(0, 2).map((pro, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-emerald-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </div>
                      ))}
                      {cons.slice(0, 2).map((con, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-rose-300">
                          <AlertTriangle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer: Perks / Talents preview */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="truncate max-w-[200px]" title={hero.perks.join(', ')}>
                    <span className="font-semibold text-slate-300">Perk clave:</span> {hero.perks[0]}
                  </div>
                  <span className="text-orange-400 font-semibold group-hover:translate-x-0.5 transition flex items-center">
                    Ver Kit <ChevronRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

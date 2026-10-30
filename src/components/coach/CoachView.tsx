import React, { useState, useMemo } from 'react';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import { OVERWATCH_MAPS } from '../../games/overwatch/maps';
import type { GameMap, RankTier, Role } from '../../types/game';
import { calculateRecommendations, analyzePlayerPick } from '../../core/coachEngine';
import { HeroAvatar } from '../common/HeroAvatar';
import { HeroSelectScreen } from './HeroSelectScreen';
import { TRANSLATIONS, type Language } from '../../utils/i18n';
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
  Sparkles, 
  Star, 
  RefreshCw, 
  UserCheck, 
  AlertOctagon, 
  Lock,
  Flame,
  Award
} from 'lucide-react';

interface CoachViewProps {
  language?: Language;
  theme?: 'dark' | 'light';
}

interface RoleSlot {
  id: string;
  role: Role;
  label: string;
  heroId: string | null;
  isMyPick?: boolean;
}

export const CoachView: React.FC<CoachViewProps> = ({ language = 'es', theme = 'dark' }) => {
  const t = TRANSLATIONS[language];
  const isDark = theme === 'dark';

  const [selectedMapId, setSelectedMapId] = useState<string>('kings-row');
  const [rankTier, setRankTier] = useState<RankTier>('plat_diamond');
  const [gameFormat, setGameFormat] = useState<'5v5' | '6v6'>('5v5');
  const [viewMode, setViewMode] = useState<'quick' | 'detailed'>('detailed');

  // Player's selected hero (The Hero Select Screen at the top)
  const [playerHeroId, setPlayerHeroId] = useState<string>('tracer');
  const [mapPickerOpen, setMapPickerOpen] = useState(false);
  const [mapFilterMode, setMapFilterMode] = useState<string>('all');
  const [rankPickerOpen, setRankPickerOpen] = useState(false);


  // Ally Slots (Structure by role)
  const [allySlots, setAllySlots] = useState<RoleSlot[]>([
    { id: 'a-tank-1', role: 'tank', label: 'Tanque', heroId: null },
    { id: 'a-dps-1', role: 'damage', label: 'DPS 1', heroId: 'tracer', isMyPick: true },
    { id: 'a-dps-2', role: 'damage', label: 'DPS 2', heroId: null },
    { id: 'a-sup-1', role: 'support', label: 'Apoyo 1', heroId: null },
    { id: 'a-sup-2', role: 'support', label: 'Apoyo 2', heroId: null },
  ]);

  // Enemy Slots (Structure by role)
  const [enemySlots, setEnemySlots] = useState<RoleSlot[]>([
    { id: 'e-tank-1', role: 'tank', label: 'Tanque Rival', heroId: null },
    { id: 'e-dps-1', role: 'damage', label: 'DPS Rival 1', heroId: null },
    { id: 'e-dps-2', role: 'damage', label: 'DPS Rival 2', heroId: null },
    { id: 'e-sup-1', role: 'support', label: 'Apoyo Rival 1', heroId: null },
    { id: 'e-sup-2', role: 'support', label: 'Apoyo Rival 2', heroId: null },
  ]);

  // Player's hero object
  const playerHero = useMemo(() => {
    return OVERWATCH_HEROES.find(h => h.id === playerHeroId) || OVERWATCH_HEROES[0];
  }, [playerHeroId]);

  // Handler for selecting hero from the top HeroSelectScreen
  const handleSelectMyHero = (heroId: string) => {
    const hero = OVERWATCH_HEROES.find(h => h.id === heroId);
    if (!hero) return;

    setPlayerHeroId(heroId);

    // Update allySlots: Find the first slot matching this hero's role to be "isMyPick"
    setAllySlots(slots => {
      const cleaned = slots.map(s => (s.heroId === heroId && !s.isMyPick ? { ...s, heroId: null } : s));
      
      let assigned = false;
      return cleaned.map(s => {
        if (!assigned && s.role === hero.role) {
          assigned = true;
          return { ...s, heroId, isMyPick: true };
        }
        return { ...s, isMyPick: false };
      });
    });
  };

  // Adjust slots when switching between 5v5 and 6v6
  const handleFormatChange = (fmt: '5v5' | '6v6') => {
    setGameFormat(fmt);
    if (fmt === '6v6') {
      if (allySlots.length === 5) {
        setAllySlots([
          allySlots[0],
          { id: 'a-tank-2', role: 'tank', label: 'Tanque 2', heroId: 'dva' },
          ...allySlots.slice(1)
        ]);
      }
      if (enemySlots.length === 5) {
        setEnemySlots([
          enemySlots[0],
          { id: 'e-tank-2', role: 'tank', label: 'Tanque Rival 2', heroId: 'zarya' },
          ...enemySlots.slice(1)
        ]);
      }
    } else {
      if (allySlots.length === 6) {
        setAllySlots([allySlots[0], ...allySlots.slice(2)]);
      }
      if (enemySlots.length === 6) {
        setEnemySlots([enemySlots[0], ...enemySlots.slice(2)]);
      }
    }
  };

  // Modal selection state
  const [activeSlotTarget, setActiveSlotTarget] = useState<{ team: 'ally' | 'enemy'; slotId: string; role: Role } | null>(null);
  const [searchFilter, setSearchFilter] = useState('');

  // Selected Map
  const selectedMap: GameMap = useMemo(() => {
    return OVERWATCH_MAPS.find(m => m.id === selectedMapId) || OVERWATCH_MAPS[0];
  }, [selectedMapId]);

  // Flattened ally and enemy IDs for calculations
  const allyHeroIds = useMemo(() => {
    return allySlots.map(s => s.heroId).filter((id): id is string => Boolean(id));
  }, [allySlots]);

  const enemyHeroIds = useMemo(() => {
    return enemySlots.map(s => s.heroId).filter((id): id is string => Boolean(id));
  }, [enemySlots]);

  // Player pick diagnosis
  const playerPickDiagnosis = useMemo(() => {
    return analyzePlayerPick(playerHeroId, allyHeroIds, enemyHeroIds, selectedMap, rankTier);
  }, [playerHeroId, allyHeroIds, enemyHeroIds, selectedMap, rankTier]);

  // General recommendations for the player's role
  const recommendations = useMemo(() => {
    return calculateRecommendations({
      role: playerHero.role,
      gameMap: selectedMap,
      allyHeroIds,
      enemyHeroIds,
      rankTier,
    });
  }, [playerHero.role, selectedMap, allyHeroIds, enemyHeroIds, rankTier]);

  // Assign hero to a slot with DUPLICATE PREVENTION
  const assignHeroToSlot = (heroId: string) => {
    if (!activeSlotTarget) return;

    if (activeSlotTarget.team === 'ally') {
      setAllySlots(slots =>
        slots.map(s => {
          if (s.id === activeSlotTarget.slotId) {
            if (s.isMyPick) setPlayerHeroId(heroId);
            return { ...s, heroId };
          }
          if (s.heroId === heroId) return { ...s, heroId: null };
          return s;
        })
      );
    } else {
      setEnemySlots(slots =>
        slots.map(s => {
          if (s.id === activeSlotTarget.slotId) return { ...s, heroId };
          if (s.heroId === heroId) return { ...s, heroId: null };
          return s;
        })
      );
    }
    setActiveSlotTarget(null);
    setSearchFilter('');
  };

  const clearSlot = (team: 'ally' | 'enemy', slotId: string) => {
    if (team === 'ally') {
      setAllySlots(slots =>
        slots.map(s => (s.id === slotId ? { ...s, heroId: null } : s))
      );
    } else {
      setEnemySlots(slots =>
        slots.map(s => (s.id === slotId ? { ...s, heroId: null } : s))
      );
    }
  };

  const loadPreset = (type: 'dive' | 'brawl' | 'poke') => {
    if (type === 'dive') {
      const heroes = ['winston', 'genji', 'sombra', 'kiriko', 'lucio', 'dva'];
      setEnemySlots(slots =>
        slots.map((s, idx) => ({ ...s, heroId: heroes[idx] || null }))
      );
    } else if (type === 'brawl') {
      const heroes = ['reinhardt', 'reaper', 'mei', 'lucio', 'baptiste', 'zarya'];
      setEnemySlots(slots =>
        slots.map((s, idx) => ({ ...s, heroId: heroes[idx] || null }))
      );
    } else if (type === 'poke') {
      const heroes = ['sigma', 'ashe', 'widowmaker', 'baptiste', 'zenyatta', 'ramattra'];
      setEnemySlots(slots =>
        slots.map((s, idx) => ({ ...s, heroId: heroes[idx] || null }))
      );
    }
  };

  // Helper colors for the diagnosis card depending on theme
  const getDiagnosisCardStyles = (score: number) => {
    if (isDark) {
      if (score >= 70) return 'border-emerald-500/60 bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-900 text-white';
      if (score >= 50) return 'border-amber-500/60 bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-900 text-white';
      return 'border-rose-500/60 bg-gradient-to-b from-rose-950/40 via-slate-900 to-slate-900 text-white';
    } else {
      if (score >= 70) return 'border-emerald-300 bg-gradient-to-b from-emerald-50 via-white to-white text-slate-800 shadow-xl';
      if (score >= 50) return 'border-amber-300 bg-gradient-to-b from-amber-50 via-white to-white text-slate-800 shadow-xl';
      return 'border-rose-300 bg-gradient-to-b from-rose-50 via-white to-white text-slate-800 shadow-xl';
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. TOP GLOBAL SETTINGS BAR */}
      <div className={`border rounded-3xl p-5 sm:p-6 shadow-xl backdrop-blur transition ${
        isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b ${
          isDark ? 'border-slate-800/60' : 'border-slate-200'
        }`}>
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500/20 text-orange-500 border border-orange-500/30">
                {t.badgeOvercoach}
              </span>
              <span className="text-xs text-slate-400">{t.algorithmVersion}</span>
            </div>
            <h1 className={`text-2xl sm:text-3xl font-black tracking-tight mt-1 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {t.coachTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              {t.coachSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Format Selector (5v5 vs 6v6) */}
            <div className={`p-1 rounded-xl flex items-center border ${
              isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-300'
            }`}>
              <button
                onClick={() => handleFormatChange('5v5')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  gameFormat === '5v5'
                    ? 'bg-orange-500 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                5v5 Role Lock
              </button>
              <button
                onClick={() => handleFormatChange('6v6')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  gameFormat === '6v6'
                    ? 'bg-orange-500 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                6v6 Clásico
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className={`p-1 rounded-xl flex items-center border ${
              isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-300'
            }`}>
              <button
                onClick={() => setViewMode('quick')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  viewMode === 'quick' ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.quickMode}
              </button>
              <button
                onClick={() => setViewMode('detailed')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  viewMode === 'detailed' ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t.tacticalMode}
              </button>
            </div>
          </div>
        </div>

        {/* Visual Selectors with Images (Map Card & Rank Card) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5">
          {/* Map Visual Card Picker */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>MAPA DE LA PARTIDA</span>
              </label>
              <button
                type="button"
                onClick={() => setMapPickerOpen(true)}
                className="text-xs font-bold text-orange-400 hover:text-orange-300 transition"
              >
                Cambiar Mapa →
              </button>
            </div>

            {/* Clickable Map Hero Banner */}
            <div
              onClick={() => setMapPickerOpen(true)}
              className="group relative h-28 sm:h-32 rounded-2xl overflow-hidden border border-slate-700/80 cursor-pointer shadow-lg transition hover:border-orange-500 hover:scale-[1.01]"
            >
              <img
                src={selectedMap.image || 'https://tonikiraw.com/assets/img/mapas/kings-row.webp'}
                alt={selectedMap.name}
                className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-400">
                      {selectedMap.mode}
                    </span>
                    <h3 className="text-lg font-black text-white leading-tight">
                      {selectedMap.name}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-1">
                    {selectedMap.favoredStyles.map(st => (
                      <span
                        key={st}
                        className={`text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded shadow backdrop-blur-sm border ${
                          st === 'dive'
                            ? 'bg-purple-950/80 text-purple-300 border-purple-500/40'
                            : st === 'brawl'
                            ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                            : 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
                        }`}
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rank Visual Card Picker */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-300 flex items-center space-x-1.5">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>RANGO COMPETITIVO</span>
              </label>
              <button
                type="button"
                onClick={() => setRankPickerOpen(true)}
                className="text-xs font-bold text-amber-400 hover:text-amber-300 transition"
              >
                Cambiar Rango →
              </button>
            </div>

            {/* Clickable Rank Banner */}
            <div
              onClick={() => setRankPickerOpen(true)}
              className={`group relative h-28 sm:h-32 rounded-2xl border p-4 flex items-center justify-between cursor-pointer shadow-lg transition hover:border-amber-400 hover:scale-[1.01] ${
                rankTier === 'master_top500'
                  ? 'border-purple-500/50 bg-gradient-to-r from-purple-950/40 via-slate-900 to-slate-900'
                  : rankTier === 'plat_diamond'
                  ? 'border-cyan-500/50 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-900'
                  : 'border-amber-500/50 bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl border shadow-lg ${
                  rankTier === 'master_top500'
                    ? 'bg-purple-900/60 border-purple-400 text-purple-300 shadow-purple-500/30'
                    : rankTier === 'plat_diamond'
                    ? 'bg-cyan-900/60 border-cyan-400 text-cyan-300 shadow-cyan-500/30'
                    : 'bg-amber-900/60 border-amber-400 text-amber-300 shadow-amber-500/30'
                }`}>
                  {rankTier === 'master_top500' ? 'GM' : rankTier === 'plat_diamond' ? 'DIA' : 'ORO'}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400">
                    Modificador de Habilidad
                  </span>
                  <h3 className="text-lg font-black text-white">
                    {rankTier === 'bronze_gold'
                      ? 'Bronce — Oro'
                      : rankTier === 'plat_diamond'
                      ? 'Platino — Diamante'
                      : 'Master — Top 500'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {rankTier === 'bronze_gold'
                      ? 'Premia consistencia y castiga exigencia mecánica'
                      : rankTier === 'plat_diamond'
                      ? 'Ponderación equilibrada entre meta y utilidad'
                      : 'Prioriza techo mecánico y sinergias coordinadas'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. OVERWATCH HERO SELECT SCREEN (ARRIBA DE TODO, CENTRADO EXACTO COMO EN OVERWATCH) */}
      <HeroSelectScreen
        selectedHeroId={playerHeroId}
        onSelectHero={handleSelectMyHero}
        allyHeroIds={allyHeroIds}
        theme={theme}
        playerRole={playerHero.role}
      />

      {/* 3. TEAM COMPOSITIONS (CASILLAS DE EQUIPO ALIADO Y RIVAL) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Ally Team */}
        <div className={`border rounded-3xl p-5 shadow-lg relative ${
          isDark ? 'bg-slate-900/70 border-blue-500/30' : 'bg-white border-blue-200'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <h3 className={`font-black text-sm uppercase tracking-wider ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {t.allyTeam} ({gameFormat})
              </h3>
            </div>
            <span className="text-[11px] text-slate-400">
              Sin héroes repetidos en tu equipo
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {allySlots.map(slot => {
              const hero = slot.heroId ? OVERWATCH_HEROES.find(h => h.id === slot.heroId) : null;

              return (
                <div
                  key={slot.id}
                  className={`relative p-2.5 rounded-2xl border flex flex-col items-center justify-between transition group ${
                    slot.isMyPick
                      ? 'border-amber-400 bg-amber-500/10 ring-2 ring-amber-400/40 shadow-lg'
                      : hero
                      ? isDark ? 'border-blue-500/40 bg-slate-800/80' : 'border-blue-200 bg-blue-50/50'
                      : isDark ? 'border-dashed border-slate-700 bg-slate-800/40' : 'border-dashed border-slate-300 bg-slate-50'
                  }`}
                >
                  <div className="w-full flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                      {slot.label}
                    </span>
                    {slot.isMyPick && (
                      <span className="text-[9px] font-bold text-amber-500 bg-amber-500/20 px-1.5 py-0.2 rounded border border-amber-500/30">
                        TÚ
                      </span>
                    )}
                  </div>

                  {hero ? (
                    <div
                      onClick={() => setActiveSlotTarget({ team: 'ally', slotId: slot.id, role: slot.role })}
                      className="cursor-pointer flex flex-col items-center w-full"
                    >
                      <HeroAvatar hero={hero} size="lg" />
                      <span className={`text-xs font-bold truncate w-full text-center mt-1.5 ${
                        isDark ? 'text-slate-200' : 'text-slate-800'
                      }`}>
                        {hero.name}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase font-mono">
                        {hero.style}
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveSlotTarget({ team: 'ally', slotId: slot.id, role: slot.role })}
                      className="w-full py-4 flex flex-col items-center justify-center text-slate-400 hover:text-blue-400 transition"
                    >
                      <Plus className="w-6 h-6 mb-1" />
                      <span className="text-[11px] font-semibold">Elegir {slot.label}</span>
                    </button>
                  )}

                  {hero && !slot.isMyPick && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        clearSlot('ally', slot.id);
                      }}
                      title="Eliminar del equipo"
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center transition shadow-md z-20 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Enemy Team */}
        <div className={`border rounded-3xl p-5 shadow-lg relative ${
          isDark ? 'bg-slate-900/70 border-rose-500/30' : 'bg-white border-rose-200'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <h3 className={`font-black text-sm uppercase tracking-wider ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {t.enemyTeam} ({gameFormat})
              </h3>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="text-[10px] text-slate-400 font-semibold uppercase">Presets:</span>
              <button
                onClick={() => loadPreset('dive')}
                className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition font-mono"
              >
                Dive
              </button>
              <button
                onClick={() => loadPreset('brawl')}
                className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition font-mono"
              >
                Brawl
              </button>
              <button
                onClick={() => loadPreset('poke')}
                className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition font-mono"
              >
                Poke
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {enemySlots.map(slot => {
              const hero = slot.heroId ? OVERWATCH_HEROES.find(h => h.id === slot.heroId) : null;

              return (
                <div
                  key={slot.id}
                  className={`relative p-2.5 rounded-2xl border flex flex-col items-center justify-between transition group ${
                    hero
                      ? isDark ? 'border-rose-500/40 bg-slate-800/80' : 'border-rose-200 bg-rose-50/50'
                      : isDark ? 'border-dashed border-slate-700 bg-slate-800/40' : 'border-dashed border-slate-300 bg-slate-50'
                  }`}
                >
                  <div className="w-full text-center mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                      {slot.label}
                    </span>
                  </div>

                  {hero ? (
                    <div
                      onClick={() => setActiveSlotTarget({ team: 'enemy', slotId: slot.id, role: slot.role })}
                      className="cursor-pointer flex flex-col items-center w-full"
                    >
                      <HeroAvatar hero={hero} size="lg" />
                      <span className={`text-xs font-bold truncate w-full text-center mt-1.5 ${
                        isDark ? 'text-slate-200' : 'text-slate-800'
                      }`}>
                        {hero.name}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase font-mono">
                        {hero.style}
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveSlotTarget({ team: 'enemy', slotId: slot.id, role: slot.role })}
                      className="w-full py-4 flex flex-col items-center justify-center text-slate-400 hover:text-rose-400 transition"
                    >
                      <Plus className="w-6 h-6 mb-1" />
                      <span className="text-[11px] font-semibold">Elegir {slot.label}</span>
                    </button>
                  )}

                  {hero && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        clearSlot('enemy', slot.id);
                      }}
                      title="Eliminar del equipo"
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center transition shadow-md z-20 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. CARD CENTRAL DE TU PERSONAJE SELECCIONADO (CON CALIFICACIÓN FINAL Y MEJORES RECOMENDACIONES) */}
      {playerPickDiagnosis && (
        <div className={`border-2 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden transition ${getDiagnosisCardStyles(playerPickDiagnosis.score)}`}>
          {/* Central Hero Showcase Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto pb-6 border-b border-slate-700/30">
            {/* Hero Large Avatar with Glowing Accent */}
            <div className="relative mb-3">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-4 border-orange-500 shadow-2xl shadow-orange-500/40 ring-4 ring-orange-500/20">
                <img
                  src={playerPickDiagnosis.hero.icon}
                  alt={playerPickDiagnosis.hero.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-orange-600 text-white text-[10px] font-black uppercase tracking-wider shadow">
                TU ELECCIÓN
              </div>
            </div>

            {/* Hero Name & Identity Badges */}
            <h2 className={`text-3xl sm:text-4xl font-black uppercase tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {playerPickDiagnosis.hero.name}
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
              <span className="px-2.5 py-1 rounded-xl text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-orange-500 border border-orange-500/30">
                {playerPickDiagnosis.hero.role === 'damage' ? 'DPS' : playerPickDiagnosis.hero.role === 'tank' ? 'Tanque' : 'Apoyo'}
              </span>
              <span className={`px-2.5 py-1 rounded-xl text-xs font-mono font-semibold border ${
                isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-300'
              }`}>
                {playerPickDiagnosis.hero.subrole}
              </span>
              <span className={`px-2.5 py-1 rounded-xl text-xs font-mono font-bold uppercase border ${
                playerPickDiagnosis.hero.style === 'dive'
                  ? 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                  : playerPickDiagnosis.hero.style === 'brawl'
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                  : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
              }`}>
                {playerPickDiagnosis.hero.style}
              </span>
            </div>

            {/* Prominent Score Metric */}
            <div className="my-5 p-4 rounded-2xl border flex items-center justify-center space-x-6 w-full max-w-md mx-auto bg-slate-900/40 backdrop-blur border-slate-700/40">
              <div className="text-center">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Calificación Final
                </span>
                <span className={`text-4xl sm:text-5xl font-black font-mono leading-none ${
                  playerPickDiagnosis.score >= 70 ? 'text-emerald-400' : playerPickDiagnosis.score >= 50 ? 'text-amber-400' : 'text-rose-400'
                }`}>
                  {playerPickDiagnosis.score}<span className="text-xl text-slate-500">/100</span>
                </span>
              </div>
              <div className="h-10 w-[1px] bg-slate-700/50"></div>
              <div className="text-left">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Estado del Pick
                </span>
                <span className={`text-base sm:text-lg font-black uppercase ${
                  playerPickDiagnosis.score >= 70 ? 'text-emerald-400' : playerPickDiagnosis.score >= 50 ? 'text-amber-400' : 'text-rose-400'
                }`}>
                  {playerPickDiagnosis.score >= 78 ? 'Dominante' : playerPickDiagnosis.score >= 60 ? 'Viable' : 'En Riesgo'}
                </span>
              </div>
            </div>

            <p className={`text-sm max-w-xl ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              {playerPickDiagnosis.verdict}
            </p>
          </div>

          {/* Threats & Favorable Targets Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5 border-b border-slate-700/30">
            {/* Direct Threats */}
            <div className={`rounded-2xl p-4 border transition ${
              isDark ? 'bg-slate-900/60 border-rose-500/30' : 'bg-rose-50/70 border-rose-200'
            }`}>
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center space-x-2 text-rose-500 font-bold text-xs">
                  <AlertOctagon className="w-4 h-4" />
                  <span>Counters rivales que te amenazan ({playerPickDiagnosis.directThreats.length})</span>
                </div>
                {playerPickDiagnosis.hardThreats.length > 0 && (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40">
                    {playerPickDiagnosis.hardThreats.length} crítico{playerPickDiagnosis.hardThreats.length > 1 ? 's' : ''}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {playerPickDiagnosis.directThreats.length > 0 ? (
                  playerPickDiagnosis.directThreats.map(threat => {
                    const isHard = playerPickDiagnosis.hardThreats.some(h => h.id === threat.id);
                    const motivo = playerHero.counters.weakDetails?.[threat.id]?.motivo || threat.counters.strongDetails?.[playerHero.id]?.motivo;
                    return (
                      <div
                        key={threat.id}
                        title={motivo ? `${threat.name}: ${motivo}` : undefined}
                        className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-xl border transition ${
                          isHard
                            ? 'bg-rose-950/60 border-rose-500/70 text-rose-200 ring-1 ring-rose-500/40 shadow-sm'
                            : isDark ? 'bg-slate-800 border-rose-500/30 text-rose-300' : 'bg-white border-rose-300 text-rose-900 shadow-sm'
                        }`}
                      >
                        <HeroAvatar hero={threat} size="xs" />
                        <span className="text-xs font-semibold">{threat.name}</span>
                        {isHard && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-rose-500 text-white font-black">
                            ★ DURO
                          </span>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <span className="text-xs text-emerald-500 font-medium italic">
                    ¡Ningún héroe rival te hace counter directo en este momento!
                  </span>
                )}
              </div>
            </div>

            {/* Favorable Targets */}
            <div className={`rounded-2xl p-4 border transition ${
              isDark ? 'bg-slate-900/60 border-emerald-500/30' : 'bg-emerald-50/70 border-emerald-200'
            }`}>
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center space-x-2 text-emerald-500 font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Objetivos a los que dominas ({playerPickDiagnosis.favorableTargets.length})</span>
                </div>
                {playerPickDiagnosis.hardTargets.length > 0 && (
                  <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    {playerPickDiagnosis.hardTargets.length} duro{playerPickDiagnosis.hardTargets.length > 1 ? 's' : ''}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {playerPickDiagnosis.favorableTargets.length > 0 ? (
                  playerPickDiagnosis.favorableTargets.map(target => {
                    const isHard = playerPickDiagnosis.hardTargets.some(h => h.id === target.id);
                    const motivo = playerHero.counters.strongDetails?.[target.id]?.motivo;
                    return (
                      <div
                        key={target.id}
                        title={motivo ? `${target.name}: ${motivo}` : undefined}
                        className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-xl border transition ${
                          isHard
                            ? 'bg-emerald-950/60 border-emerald-500/70 text-emerald-200 ring-1 ring-emerald-500/40 shadow-sm'
                            : isDark ? 'bg-slate-800 border-emerald-500/30 text-emerald-300' : 'bg-white border-emerald-300 text-emerald-900 shadow-sm'
                        }`}
                      >
                        <HeroAvatar hero={target} size="xs" />
                        <span className="text-xs font-semibold">{target.name}</span>
                        {isHard && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500 text-slate-950 font-black">
                            ★ DURO
                          </span>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <span className="text-xs text-slate-400 italic">
                    Enfócate en desgastar escudos o coordinar con tus tanques.
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* BEST RECOMMENDATIONS & COUNTER-SWITCHES */}
          <div className="pt-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span className={`text-sm font-black uppercase tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {t.switchRecommendations}
                </span>
              </div>
              <span className="text-[11px] text-slate-400">
                Opciones dentro de tu rol ({playerHero.role.toUpperCase()})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {playerPickDiagnosis.recommendedSwitches.map(alt => (
                <div
                  key={alt.hero.id}
                  onClick={() => handleSelectMyHero(alt.hero.id)}
                  className={`border rounded-2xl p-3.5 flex items-center justify-between cursor-pointer transition shadow-lg group ${
                    isDark
                      ? 'bg-slate-800/90 border-orange-500/30 hover:border-orange-500'
                      : 'bg-white border-orange-200 hover:border-orange-500'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <HeroAvatar hero={alt.hero} size="md" />
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className={`font-black text-sm group-hover:text-orange-500 transition ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          {alt.hero.name}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-500 font-black">
                          {alt.score} pts
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight mt-0.5">
                        {alt.reason}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-orange-500 font-bold uppercase opacity-0 group-hover:opacity-100 transition">
                    Cambiar
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. MODAL CON VALIDACIÓN DE NO-REPETICIÓN */}
      {activeSlotTarget && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`border rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden ${
            isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-300'
          }`}>
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
              <div>
                <h3 className={`font-black text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Seleccionar {activeSlotTarget.role === 'tank' ? 'Tanque' : activeSlotTarget.role === 'damage' ? 'DPS' : 'Apoyo'} ({activeSlotTarget.team === 'ally' ? 'Aliado' : 'Rival'})
                </h3>
                <p className="text-xs text-slate-400">
                  Los héroes ya seleccionados en este equipo se muestran bloqueados para evitar repeticiones.
                </p>
              </div>
              <button
                onClick={() => setActiveSlotTarget(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 border-b border-slate-800">
              <input
                type="text"
                placeholder="Buscar por nombre..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className={`w-full text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 border ${
                  isDark
                    ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500'
                    : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                }`}
                autoFocus
              />
            </div>

            <div className="p-4 sm:p-5 overflow-y-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {OVERWATCH_HEROES.filter(
                  h => h.role === activeSlotTarget.role && h.name.toLowerCase().includes(searchFilter.toLowerCase())
                ).map(hero => {
                  const isTaken = activeSlotTarget.team === 'ally'
                    ? allyHeroIds.includes(hero.id)
                    : enemyHeroIds.includes(hero.id);

                  return (
                    <button
                      key={hero.id}
                      disabled={isTaken}
                      onClick={() => assignHeroToSlot(hero.id)}
                      className={`relative p-3 rounded-2xl border flex items-center space-x-3 transition text-left group ${
                        isTaken
                          ? 'opacity-35 grayscale cursor-not-allowed border-slate-800 bg-slate-900/40'
                          : isDark
                          ? 'bg-slate-800/80 border-slate-700/80 hover:bg-slate-700 hover:border-orange-500'
                          : 'bg-slate-50 border-slate-200 hover:bg-orange-50 hover:border-orange-400'
                      }`}
                    >
                      {isTaken && (
                        <div className="absolute top-1 right-1">
                          <Lock className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                      )}
                      <HeroAvatar hero={hero} size="sm" />
                      <div className="truncate">
                        <div className="text-xs font-bold text-white group-hover:text-orange-400 transition truncate">
                          {hero.name}
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase font-mono">
                          {hero.subrole}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. GENERAL ROLE VIABILITY RECOMMENDATIONS */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <h2 className={`text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Otras Opciones en tu Rol: {playerHero.role.toUpperCase()} ({recommendations.length} Héroes)
            </h2>
          </div>

          <div className="flex items-center space-x-3 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">{t.difficultyLegend}:</span>
            <span className="flex items-center text-amber-400 text-[11px]">
              ★☆☆ <span className="ml-1 text-slate-400">{t.diffEasy}</span>
            </span>
            <span className="flex items-center text-amber-400 text-[11px]">
              ★★☆ <span className="ml-1 text-slate-400">{t.diffMedium}</span>
            </span>
            <span className="flex items-center text-amber-400 text-[11px]">
              ★★★ <span className="ml-1 text-slate-400">{t.diffHard}</span>
            </span>
          </div>
        </div>

        {/* Hero Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map((item, index) => {
            const { hero, totalScore, pros, cons, tacticalVerdict } = item;

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
                className={`border rounded-3xl p-5 hover:border-slate-700 transition flex flex-col justify-between shadow-lg relative group ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <HeroAvatar hero={hero} size="lg" showRoleBadge />
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {hero.name}
                          </h3>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                            #{index + 1}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-slate-400">
                          <span className="capitalize">{hero.role === 'damage' ? 'DPS' : hero.role === 'tank' ? 'Tanque' : 'Apoyo'}</span>
                          <span>•</span>
                          <span className="uppercase text-orange-400 font-semibold">{hero.style}</span>
                          <span>•</span>
                          <div className="flex items-center text-amber-400" title={`Dificultad de uso: ${hero.difficulty}/3`}>
                            {Array.from({ length: 3 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-2.5 h-2.5 ${i < hero.difficulty ? 'fill-current text-amber-400' : 'text-slate-600'}`}
                              />
                            ))}
                          </div>
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

                  {/* Pros & Cons */}
                  {viewMode === 'detailed' && (
                    <div className="space-y-1.5 mb-4">
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
                  <button
                    onClick={() => handleSelectMyHero(hero.id)}
                    className="text-orange-400 font-semibold hover:text-orange-300 transition flex items-center"
                  >
                    Elegir <ChevronRight className="w-3 h-3 ml-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. MODAL SELECTOR VISUAL DE MAPAS */}
      {mapPickerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`w-full max-w-4xl max-h-[85vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden transition ${
            isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-300'
          }`}>
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                <h3 className="text-lg font-black text-white">SELECCIONA EL MAPA</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                  {OVERWATCH_MAPS.length} MAPAS
                </span>
              </div>
              <button
                onClick={() => setMapPickerOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mode Filters */}
            <div className="p-3 border-b border-slate-800 flex flex-wrap gap-1.5 bg-slate-950/40">
              {['all', 'Híbrido', 'Escolta', 'Control', 'Avance', 'Punto Caliente', 'Invasión / Clash'].map(m => (
                <button
                  key={m}
                  onClick={() => setMapFilterMode(m)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
                    mapFilterMode === m
                      ? 'bg-orange-500 text-white shadow'
                      : 'text-slate-400 hover:text-white bg-slate-800/60'
                  }`}
                >
                  {m === 'all' ? 'Todos los modos' : m}
                </button>
              ))}
            </div>

            {/* Maps Grid with Large Images */}
            <div className="p-4 overflow-y-auto flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {OVERWATCH_MAPS
                .filter(m => mapFilterMode === 'all' || m.mode === mapFilterMode)
                .map(m => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setSelectedMapId(m.id);
                      setMapPickerOpen(false);
                    }}
                    className={`group relative h-28 rounded-2xl overflow-hidden border-2 text-left transition ${
                      m.id === selectedMapId
                        ? 'border-orange-500 ring-2 ring-orange-500 scale-[1.02]'
                        : 'border-slate-800 hover:border-slate-600'
                    }`}
                  >
                    <img
                      src={m.image || 'https://tonikiraw.com/assets/img/mapas/kings-row.webp'}
                      alt={m.name}
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-2.5">
                      <span className="text-[9px] font-mono text-orange-400 font-bold uppercase leading-none">
                        {m.mode}
                      </span>
                      <span className="text-xs font-black text-white truncate mt-0.5">
                        {m.name}
                      </span>
                      <div className="flex items-center space-x-1 mt-1">
                        {m.favoredStyles.map(st => (
                          <span key={st} className="text-[8px] uppercase font-mono px-1 py-0.2 rounded bg-black/60 text-slate-300">
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* 6. MODAL SELECTOR VISUAL DE RANGO */}
      {rankPickerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`w-full max-w-xl rounded-3xl border shadow-2xl overflow-hidden transition ${
            isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-300'
          }`}>
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                <h3 className="text-lg font-black text-white">SELECCIONA TU RANGO COMPETITIVO</h3>
              </div>
              <button
                onClick={() => setRankPickerOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Ranks Cards */}
            <div className="p-4 space-y-3">
              {[
                {
                  id: 'bronze_gold' as RankTier,
                  title: 'Bronce — Oro',
                  tag: 'BRONZE / SILVER / GOLD',
                  badge: 'ORO',
                  desc: 'Pondera héroes con alta consistencia de impacto y castiga selecciones muy exigentes mecánicamente.',
                  color: 'border-amber-500/40 bg-amber-950/20 text-amber-300 hover:border-amber-400'
                },
                {
                  id: 'plat_diamond' as RankTier,
                  title: 'Platino — Diamante',
                  tag: 'PLATINUM / DIAMOND',
                  badge: 'DIA',
                  desc: 'Ponderación estándar competitiva. Buen equilibrio entre mecánicas, counters directos y posicionamiento.',
                  color: 'border-cyan-500/40 bg-cyan-950/20 text-cyan-300 hover:border-cyan-400'
                },
                {
                  id: 'master_top500' as RankTier,
                  title: 'Master — Top 500',
                  tag: 'MASTER / GRANDMASTER / CHAMPION',
                  badge: 'GM',
                  desc: 'Premia héroes con alto techo de habilidad (Genji, Tracer, Doomfist) y sinergias altamente coordinadas.',
                  color: 'border-purple-500/40 bg-purple-950/20 text-purple-300 hover:border-purple-400'
                }
              ].map(r => (
                <div
                  key={r.id}
                  onClick={() => {
                    setRankTier(r.id);
                    setRankPickerOpen(false);
                  }}
                  className={`border-2 rounded-2xl p-4 flex items-center justify-between cursor-pointer transition shadow-md ${
                    rankTier === r.id ? 'ring-2 ring-orange-500 border-orange-500' : r.color
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-black/40 border border-current flex items-center justify-center font-black text-xl shadow">
                      {r.badge}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-400">
                        {r.tag}
                      </span>
                      <h4 className="text-base font-black text-white">{r.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 max-w-sm">{r.desc}</p>
                    </div>
                  </div>
                  {rankTier === r.id && (
                    <span className="px-2.5 py-1 rounded-full bg-orange-500 text-white text-[10px] font-black uppercase shadow">
                      Activo
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

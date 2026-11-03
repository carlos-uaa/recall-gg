import React, { useState, useMemo } from 'react';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import { OVERWATCH_MAPS } from '../../games/overwatch/maps';
import { OVERWATCH_RANKS, getRankInfo } from '../../games/overwatch/ranks';
import { evaluateHeroMapSynergy } from '../../games/overwatch/mapSynergies';
import type { GameMap, RankTier, Role } from '../../types/game';
import { calculateRecommendations, analyzePlayerPick } from '../../core/coachEngine';
import { HeroAvatar } from '../common/HeroAvatar';
import { HeroSelectScreen } from './HeroSelectScreen';
import { useFavoriteHeroes } from '../../utils/favorites';
import { useUserProfile } from '../../utils/userProfileStorage';
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
  const { favoriteHeroIds, isFavorite, toggleFavorite } = useFavoriteHeroes();
  const { profile } = useUserProfile();

  const [selectedMapId, setSelectedMapId] = useState<string>('kings-row');
  const [rankTier, setRankTier] = useState<RankTier>('diamond');
  const selectedRank = useMemo(() => getRankInfo(rankTier), [rankTier]);
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
          { id: 'a-tank-2', role: 'tank', label: 'Tanque 2', heroId: null },
          ...allySlots.slice(1)
        ]);
      }
      if (enemySlots.length === 5) {
        setEnemySlots([
          enemySlots[0],
          { id: 'e-tank-2', role: 'tank', label: 'Tanque Rival 2', heroId: null },
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

  // Flattened teammate IDs (excluding player's own slot so candidate switches don't count replaced hero as a teammate)
  const allyHeroIds = useMemo(() => {
    return allySlots.filter(s => !s.isMyPick).map(s => s.heroId).filter((id): id is string => Boolean(id));
  }, [allySlots]);

  const enemyHeroIds = useMemo(() => {
    return enemySlots.map(s => s.heroId).filter((id): id is string => Boolean(id));
  }, [enemySlots]);

  // Player pick diagnosis (incorporates user profile mastery if present)
  const playerPickDiagnosis = useMemo(() => {
    return analyzePlayerPick(playerHeroId, allyHeroIds, enemyHeroIds, selectedMap, rankTier, favoriteHeroIds, profile);
  }, [playerHeroId, allyHeroIds, enemyHeroIds, selectedMap, rankTier, favoriteHeroIds, profile]);

  // General recommendations for the player's role (boosts comfort mains if user profile active)
  const recommendations = useMemo(() => {
    return calculateRecommendations({
      role: playerHero.role,
      gameMap: selectedMap,
      allyHeroIds,
      enemyHeroIds,
      rankTier,
      userProfile: profile,
    });
  }, [playerHero.role, selectedMap, allyHeroIds, enemyHeroIds, rankTier, profile]);

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

            {/* User Profile Sync Status Pill */}
            {profile ? (
              <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-medium bg-emerald-500/10 border-emerald-500/30 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="truncate">
                  Perfil activo: <strong className="font-bold text-white">{profile.username}</strong>
                  {profile.ranks[playerHero.role]?.rankName ? ` (${profile.ranks[playerHero.role]?.rankName})` : ''} · Estadísticas y Mains sincronizados
                </span>
              </div>
            ) : (
              <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1.2 rounded-xl border text-[11px] text-slate-400 bg-slate-800/40 border-slate-700/50">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 flex-shrink-0" />
                <span>
                  Modo manual activo. También puedes vincular tu BattleTag en <strong>Perfil & Stats</strong> para afinar el análisis con tu Win Rate.
                </span>
              </div>
            )}
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
              className="group relative h-24 sm:h-32 rounded-2xl overflow-hidden border border-slate-700/80 cursor-pointer shadow-lg transition hover:border-orange-500 hover:scale-[1.01]"
            >
              <img
                src={selectedMap.image || 'https://tonikiraw.com/assets/img/mapas/kings-row.webp'}
                alt={selectedMap.name}
                className="w-full h-full object-cover object-center transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-2.5 sm:p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-orange-400">
                      {selectedMap.mode}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                      {selectedMap.name}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-1">
                    {selectedMap.favoredStyles.map(st => (
                      <span
                        key={st}
                        className={`text-[8.5px] sm:text-[9px] font-mono font-black uppercase px-1.5 sm:px-2 py-0.5 rounded shadow backdrop-blur-sm border ${
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
              <label className={`text-xs font-bold flex items-center space-x-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <Trophy className="w-3.5 h-3.5 text-amber-500" />
                <span>RANGO COMPETITIVO INDIVIDUAL</span>
              </label>
              <button
                type="button"
                onClick={() => setRankPickerOpen(true)}
                className="text-xs font-bold text-amber-500 hover:text-amber-400 transition"
              >
                Elegir Rango →
              </button>
            </div>

            {/* Clickable Rank Banner with Official Rank Emblem */}
            <div
              onClick={() => setRankPickerOpen(true)}
              style={{
                borderColor: `color-mix(in oklab, ${selectedRank.accentColor} ${isDark ? '55%' : '65%'}, ${isDark ? '#1e293b' : '#cbd5e1'})`,
                backgroundImage: isDark
                  ? `linear-gradient(95deg, color-mix(in oklab, ${selectedRank.accentColor} 20%, #0f172a) 0%, #0f172a 65%)`
                  : `linear-gradient(95deg, color-mix(in oklab, ${selectedRank.accentColor} 18%, white) 0%, #ffffff 70%)`,
              }}
              className="group relative h-24 sm:h-32 rounded-2xl border p-2.5 sm:p-4 flex items-center justify-between cursor-pointer shadow-lg transition hover:scale-[1.01]"
            >
              <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                <div
                  style={{
                    borderColor: `color-mix(in oklab, ${selectedRank.accentColor} 65%, white)`,
                    boxShadow: `0 8px 22px color-mix(in oklab, ${selectedRank.accentColor} 32%, transparent)`,
                  }}
                  className={`w-13 h-13 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 flex items-center justify-center border flex-shrink-0 transition group-hover:scale-105 ${
                    isDark ? 'bg-slate-950/80' : 'bg-slate-900/90'
                  }`}
                >
                  <img
                    src={selectedRank.icon}
                    alt={selectedRank.name}
                    className="w-full h-full object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.65)]"
                  />
                </div>
                <div className="min-w-0">
                  <span
                    style={{
                      color: isDark
                        ? `color-mix(in oklab, ${selectedRank.accentColor} 80%, white)`
                        : `color-mix(in oklab, ${selectedRank.accentColor} 78%, #0f172a)`,
                    }}
                    className="text-[9px] sm:text-[10px] font-mono uppercase font-black tracking-wider block"
                  >
                    RANGO {selectedRank.englishName.toUpperCase()}
                  </span>
                  <h3 className={`text-base sm:text-xl font-black leading-tight truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {selectedRank.name}
                  </h3>
                  <p className={`text-[11px] sm:text-xs mt-0.5 line-clamp-1 sm:line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {selectedRank.summary}
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
        favoriteHeroIds={favoriteHeroIds}
        onToggleFavorite={toggleFavorite}
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
            {allySlots.map(slot => {
              const hero = slot.heroId ? OVERWATCH_HEROES.find(h => h.id === slot.heroId) : null;

              return (
                <div
                  key={slot.id}
                  className={`relative p-2 sm:p-2.5 rounded-2xl border flex flex-col items-center justify-between transition group ${
                    slot.isMyPick
                      ? 'border-amber-400 bg-amber-500/10 ring-2 ring-amber-400/40 shadow-lg'
                      : hero
                      ? isDark ? 'border-blue-500/40 bg-slate-800/80' : 'border-blue-200 bg-blue-50/50'
                      : isDark ? 'border-dashed border-slate-700 bg-slate-800/40' : 'border-dashed border-slate-300 bg-slate-50'
                  }`}
                >
                  <div className="w-full flex items-center justify-between mb-1">
                    <span className="text-[9.5px] sm:text-[10px] font-mono font-bold text-slate-400 uppercase truncate">
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
                      <HeroAvatar hero={hero} size="md" />
                      <span className={`text-xs font-bold truncate w-full text-center mt-1 sm:mt-1.5 ${
                        isDark ? 'text-slate-200' : 'text-slate-800'
                      }`}>
                        {hero.name}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono">
                        {hero.style}
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveSlotTarget({ team: 'ally', slotId: slot.id, role: slot.role })}
                      className="w-full py-2.5 sm:py-4 flex flex-col items-center justify-center text-slate-400 hover:text-blue-400 transition"
                    >
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 sm:mb-1" />
                      <span className="text-[10.5px] sm:text-[11px] font-semibold">{slot.label}</span>
                    </button>
                  )}

                  {hero && !slot.isMyPick && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        clearSlot('ally', slot.id);
                      }}
                      title="Eliminar del equipo"
                      className="absolute -top-2 -right-2 w-6.5 h-6.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center transition shadow-md z-20 cursor-pointer active:scale-90"
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
            {enemySlots.map(slot => {
              const hero = slot.heroId ? OVERWATCH_HEROES.find(h => h.id === slot.heroId) : null;

              return (
                <div
                  key={slot.id}
                  className={`relative p-2 sm:p-2.5 rounded-2xl border flex flex-col items-center justify-between transition group ${
                    hero
                      ? isDark ? 'border-rose-500/40 bg-slate-800/80' : 'border-rose-200 bg-rose-50/50'
                      : isDark ? 'border-dashed border-slate-700 bg-slate-800/40' : 'border-dashed border-slate-300 bg-slate-50'
                  }`}
                >
                  <div className="w-full text-center mb-1">
                    <span className="text-[9.5px] sm:text-[10px] font-mono font-bold text-slate-400 uppercase truncate block">
                      {slot.label}
                    </span>
                  </div>

                  {hero ? (
                    <div
                      onClick={() => setActiveSlotTarget({ team: 'enemy', slotId: slot.id, role: slot.role })}
                      className="cursor-pointer flex flex-col items-center w-full"
                    >
                      <HeroAvatar hero={hero} size="md" />
                      <span className={`text-xs font-bold truncate w-full text-center mt-1 sm:mt-1.5 ${
                        isDark ? 'text-slate-200' : 'text-slate-800'
                      }`}>
                        {hero.name}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-mono">
                        {hero.style}
                      </span>
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveSlotTarget({ team: 'enemy', slotId: slot.id, role: slot.role })}
                      className="w-full py-2.5 sm:py-4 flex flex-col items-center justify-center text-slate-400 hover:text-rose-400 transition"
                    >
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5 sm:mb-1" />
                      <span className="text-[10.5px] sm:text-[11px] font-semibold">{slot.label}</span>
                    </button>
                  )}

                  {hero && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        clearSlot('enemy', slot.id);
                      }}
                      title="Eliminar del equipo"
                      className="absolute -top-2 -right-2 w-6.5 h-6.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center transition shadow-md z-20 cursor-pointer active:scale-90"
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
        <div className={`border-2 rounded-3xl p-3.5 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden transition ${getDiagnosisCardStyles(playerPickDiagnosis.score)}`}>
          {/* Central Hero Showcase Header */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto pb-4 sm:pb-6 border-b border-slate-700/30">
            {/* Hero Large Avatar with Glowing Accent */}
            <div className="relative mb-2.5 sm:mb-3">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl overflow-hidden border-3 sm:border-4 border-orange-500 shadow-2xl shadow-orange-500/40 ring-4 ring-orange-500/20">
                <img
                  src={playerPickDiagnosis.hero.icon}
                  alt={playerPickDiagnosis.hero.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-orange-600 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow">
                TU ELECCIÓN
              </div>
            </div>

            {/* Hero Name & Identity Badges */}
            <h2 className={`text-2xl sm:text-4xl font-black uppercase tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {playerPickDiagnosis.hero.name}
            </h2>

            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-orange-500 border border-orange-500/30">
                {playerPickDiagnosis.hero.role === 'damage' ? 'DPS' : playerPickDiagnosis.hero.role === 'tank' ? 'Tanque' : 'Apoyo'}
              </span>
              <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl text-[11px] sm:text-xs font-mono font-semibold border ${
                isDark ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-300'
              }`}>
                {playerPickDiagnosis.hero.subrole}
              </span>
              <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-xl text-[11px] sm:text-xs font-mono font-bold uppercase border ${
                playerPickDiagnosis.hero.style === 'dive'
                  ? 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                  : playerPickDiagnosis.hero.style === 'brawl'
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                  : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
              }`}>
                {playerPickDiagnosis.hero.style}
              </span>
            </div>

            {/* Touch-Friendly Main / Favorito Toggle Button */}
            <button
              type="button"
              onClick={() => toggleFavorite(playerPickDiagnosis.hero.id)}
              className={`mt-2.5 inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border transition shadow-sm active:scale-95 cursor-pointer ${
                isFavorite(playerPickDiagnosis.hero.id)
                  ? 'bg-amber-500 text-slate-950 border-amber-300 ring-2 ring-amber-400/40 shadow-amber-500/20'
                  : isDark
                  ? 'bg-slate-800/90 text-amber-400 border-slate-700 hover:border-amber-500/60'
                  : 'bg-white text-amber-600 border-slate-300 hover:border-amber-500'
              }`}
              title="Toca para marcar o desmarcar este héroe como tu Main"
            >
              <Star className={`w-3.5 h-3.5 ${isFavorite(playerPickDiagnosis.hero.id) ? 'fill-current text-slate-950' : 'text-amber-400'}`} />
              <span>{isFavorite(playerPickDiagnosis.hero.id) ? '★ Es tu Main (Toca para desmarcar)' : '☆ Marcar como tu Main'}</span>
            </button>

            {/* Prominent Score Metric + Map & Rank Breakdown */}
            <div className={`my-4 sm:my-5 p-3 sm:p-4 rounded-2xl border flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-2xl mx-auto backdrop-blur ${
              isDark ? 'bg-slate-900/55 border-slate-700/50' : 'bg-slate-900/5 border-slate-300/80'
            }`}>
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="text-center">
                  <span className="block text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Calificación Final
                  </span>
                  <span className={`text-3xl sm:text-5xl font-black font-mono leading-none ${
                    playerPickDiagnosis.score >= 70 ? 'text-emerald-500' : playerPickDiagnosis.score >= 50 ? 'text-amber-500' : 'text-rose-500'
                  }`}>
                    {playerPickDiagnosis.score}<span className="text-base sm:text-xl text-slate-400">/100</span>
                  </span>
                </div>
                <div className="h-8 sm:h-10 w-[1px] bg-slate-500/30"></div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Estado del Pick
                  </span>
                  <span className={`text-base sm:text-lg font-black uppercase ${
                    playerPickDiagnosis.score >= 70 ? 'text-emerald-500' : playerPickDiagnosis.score >= 50 ? 'text-amber-500' : 'text-rose-500'
                  }`}>
                    {playerPickDiagnosis.score >= 78 ? 'Dominante' : playerPickDiagnosis.score >= 60 ? 'Viable' : 'En Riesgo'}
                  </span>
                </div>
              </div>

              {playerPickDiagnosis.mapEvaluation && (
                <>
                  <div className="hidden sm:block h-10 w-[1px] bg-slate-500/30"></div>
                  <div className="text-center sm:text-left">
                    <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      Sinergia en {selectedMap.name}
                    </span>
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
                      <span
                        className={`px-2 py-0.5 rounded-lg text-xs font-mono font-black border ${
                          playerPickDiagnosis.mapEvaluation.score >= 5
                            ? 'bg-emerald-500/20 text-emerald-500 border-emerald-500/40'
                            : playerPickDiagnosis.mapEvaluation.score <= -5
                            ? 'bg-rose-500/20 text-rose-500 border-rose-500/40'
                            : isDark
                            ? 'bg-slate-800 text-slate-300 border-slate-700'
                            : 'bg-slate-200 text-slate-700 border-slate-300'
                        }`}
                      >
                        {playerPickDiagnosis.mapEvaluation.score > 0
                          ? `+${playerPickDiagnosis.mapEvaluation.score}`
                          : playerPickDiagnosis.mapEvaluation.score}{' '}
                        pts
                      </span>
                      <span className={`text-xs font-bold uppercase ${
                        playerPickDiagnosis.mapEvaluation.rating === 'ideal'
                          ? 'text-emerald-500'
                          : playerPickDiagnosis.mapEvaluation.rating === 'favorable'
                          ? 'text-emerald-400'
                          : playerPickDiagnosis.mapEvaluation.rating === 'poor'
                          ? 'text-rose-500'
                          : playerPickDiagnosis.mapEvaluation.rating === 'unfavorable'
                          ? 'text-amber-500'
                          : 'text-slate-400'
                      }`}>
                        {playerPickDiagnosis.mapEvaluation.rating === 'ideal'
                          ? 'Mapa Ideal'
                          : playerPickDiagnosis.mapEvaluation.rating === 'favorable'
                          ? 'Favorable'
                          : playerPickDiagnosis.mapEvaluation.rating === 'poor'
                          ? 'Muy Cerrado / Adverso'
                          : playerPickDiagnosis.mapEvaluation.rating === 'unfavorable'
                          ? 'Incómodo'
                          : 'Neutral'}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {playerPickDiagnosis.mapEvaluation && (
              <div className={`mb-3 px-3.5 py-2 rounded-xl border text-xs max-w-xl mx-auto flex items-center gap-2 text-left ${
                playerPickDiagnosis.mapEvaluation.score >= 5
                  ? isDark ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : playerPickDiagnosis.mapEvaluation.score <= -5
                  ? isDark ? 'bg-rose-950/40 border-rose-500/30 text-rose-200' : 'bg-rose-50 border-rose-200 text-rose-900'
                  : isDark ? 'bg-slate-800/60 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                <MapPin className="w-4 h-4 flex-shrink-0 text-orange-400" />
                <span>
                  <strong>{selectedMap.name}:</strong> {playerPickDiagnosis.mapEvaluation.reason}.
                </span>
              </div>
            )}

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
            {/* 1. SECCIÓN DE MAINS: SI EL JUGADOR TIENE HÉROES FAVORITOS EN ESTE ROL */}
            {playerPickDiagnosis.mainSwitches && playerPickDiagnosis.mainSwitches.length > 0 ? (
              <div className="mb-6 p-4 rounded-2xl border-2 border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className={`text-sm font-black uppercase tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      Alternativas entre tus Mains ({playerPickDiagnosis.mainSwitches.length})
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold">
                      Héroes que juegas
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Calculados vs la composición rival y {selectedMap.name}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {playerPickDiagnosis.mainSwitches.map(mainAlt => {
                    const isIdeal = mainAlt.verdict === 'ideal';
                    const isRisky = mainAlt.verdict === 'risky';

                    return (
                      <div
                        key={mainAlt.hero.id}
                        onClick={() => handleSelectMyHero(mainAlt.hero.id)}
                        className={`border-2 rounded-2xl p-3.5 flex flex-col justify-between cursor-pointer transition shadow-lg group relative overflow-hidden ${
                          isIdeal
                            ? isDark
                              ? 'bg-amber-950/40 border-amber-400 ring-1 ring-amber-400/50 hover:bg-amber-950/60'
                              : 'bg-amber-50 border-amber-400 ring-1 ring-amber-400/40 hover:bg-amber-100/80'
                            : isRisky
                            ? isDark
                              ? 'bg-slate-800/80 border-rose-500/40 hover:border-rose-400'
                              : 'bg-white border-rose-200 hover:border-rose-400'
                            : isDark
                            ? 'bg-slate-800/90 border-amber-500/30 hover:border-amber-400'
                            : 'bg-white border-amber-200 hover:border-amber-400'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex items-center space-x-2.5">
                            <div className="relative">
                              <HeroAvatar hero={mainAlt.hero} size="md" />
                              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[9px] font-black shadow">
                                ★
                              </span>
                            </div>
                            <div>
                              <div className="flex items-center space-x-1.5">
                                <span className={`font-black text-sm group-hover:text-amber-400 transition ${
                                  isDark ? 'text-white' : 'text-slate-900'
                                }`}>
                                  {mainAlt.hero.name}
                                </span>
                                <span className="text-[8.5px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40 font-black">
                                  TU MAIN
                                </span>
                              </div>
                              <span className={`text-[10px] font-mono font-black ${
                                mainAlt.score >= 70 ? 'text-emerald-400' : mainAlt.score >= 50 ? 'text-amber-400' : 'text-rose-400'
                              }`}>
                                {mainAlt.score} pts ({mainAlt.scoreDiff >= 0 ? `+${mainAlt.scoreDiff}` : mainAlt.scoreDiff} vs actual)
                              </span>
                            </div>
                          </div>

                          <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full border ${
                            isIdeal
                              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                              : isRisky
                              ? 'bg-rose-500/20 text-rose-400 border-rose-500/40'
                              : 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                          }`}>
                            {isIdeal ? '¡Recomendado!' : isRisky ? 'Riesgoso' : 'Viable'}
                          </span>
                        </div>

                        <p className={`text-[11px] leading-tight mb-2.5 ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          {mainAlt.reason}
                        </p>

                        <div className="pt-2 border-t border-slate-700/30 flex items-center justify-between">
                          <span className="text-[10px] font-mono text-slate-400 uppercase">
                            {mainAlt.hero.style} · {mainAlt.hero.subrole}
                          </span>
                          <span className="text-[11px] font-black uppercase text-amber-500 group-hover:underline flex items-center">
                            Cambiar a mi Main →
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className={`mb-5 p-3 rounded-2xl border flex items-center justify-between flex-wrap gap-2 text-xs ${
                isDark ? 'bg-slate-800/40 border-slate-700/60 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}>
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>
                    ¿Juegas pocos personajes? <strong>Toca la estrella ⭐ en cualquier héroe</strong> para marcarlo como tu Main y verás aquí su viabilidad exacta en cada partida.
                  </span>
                </div>
              </div>
            )}

            {/* 2. RECOMENDACIONES GENERALES DE CAMBIO */}
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
                    alt.isMain
                      ? isDark
                        ? 'bg-amber-950/30 border-amber-400/70 hover:border-amber-400'
                        : 'bg-amber-50/80 border-amber-300 hover:border-amber-500'
                      : isDark
                      ? 'bg-slate-800/90 border-orange-500/30 hover:border-orange-500'
                      : 'bg-white border-orange-200 hover:border-orange-500'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <HeroAvatar hero={alt.hero} size="md" />
                      {alt.isMain && (
                        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[8px] font-black shadow">
                          ★
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center space-x-1.5 flex-wrap">
                        <span className={`font-black text-sm group-hover:text-orange-500 transition ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          {alt.hero.name}
                        </span>
                        {alt.isMain && (
                          <span className="text-[8.5px] px-1.5 py-0.2 rounded bg-amber-500 text-slate-950 font-black tracking-wider shadow-sm">
                            ★ TU MAIN
                          </span>
                        )}
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
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4">
          <div className={`border rounded-3xl w-full max-w-2xl max-h-[92dvh] flex flex-col shadow-2xl overflow-hidden ${
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
                  const targetSlot = allySlots.find(s => s.id === activeSlotTarget.slotId);
                  const isTaken = activeSlotTarget.team === 'ally'
                    ? allyHeroIds.includes(hero.id) || (!targetSlot?.isMyPick && hero.id === playerHeroId)
                    : enemyHeroIds.includes(hero.id);

                  return (
                    <button
                      key={hero.id}
                      disabled={isTaken}
                      onClick={() => assignHeroToSlot(hero.id)}
                      className={`relative p-3 rounded-2xl border flex items-center space-x-3 transition text-left group overflow-hidden ${
                        isTaken
                          ? 'opacity-35 grayscale cursor-not-allowed border-slate-800 bg-slate-900/40'
                          : isDark
                          ? 'bg-slate-800/80 border-slate-700/80 hover:bg-slate-700 hover:border-orange-500'
                          : 'bg-slate-50 border-slate-200 hover:bg-orange-50 hover:border-orange-400'
                      }`}
                    >
                      {/* Top-right corner style pill */}
                      {isTaken ? (
                        <div className="absolute top-1.5 right-1.5">
                          <Lock className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                      ) : (
                        <span
                          className={`absolute top-0 right-0 px-1.5 py-0.5 rounded-bl-lg text-[8px] font-mono font-black uppercase leading-none border-b border-l ${
                            hero.style === 'dive'
                              ? 'bg-purple-950/90 text-purple-200 border-purple-500/40'
                              : hero.style === 'brawl'
                              ? 'bg-amber-950/90 text-amber-200 border-amber-500/40'
                              : 'bg-cyan-950/90 text-cyan-200 border-cyan-500/40'
                          }`}
                        >
                          {hero.style}
                        </span>
                      )}
                      <HeroAvatar hero={hero} size="sm" />
                      <div className="truncate pr-4">
                        <div className={`text-xs font-bold group-hover:text-orange-500 transition truncate ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          {hero.name}
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase font-mono truncate">
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

      {/* 5. MODAL SELECTOR VISUAL DE MAPAS (CON SINERGIA DE TU HÉROE EN TIEMPO REAL) */}
      {mapPickerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-4">
          <div className={`w-full max-w-4xl max-h-[92dvh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden transition ${
            isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-300'
          }`}>
            {/* Modal Header */}
            <div className={`p-4 sm:p-5 border-b flex items-center justify-between ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                <MapPin className="w-5 h-5 text-orange-500" />
                <h3 className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  SELECCIONA EL MAPA
                </h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${
                  isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                }`}>
                  {OVERWATCH_MAPS.length} MAPAS · Sinergia para {playerHero.name}
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
            <div className={`p-3 border-b flex flex-wrap gap-1.5 ${
              isDark ? 'border-slate-800 bg-slate-950/40' : 'border-slate-200 bg-slate-50'
            }`}>
              {['all', 'Híbrido', 'Escolta', 'Control', 'Avance', 'Punto Caliente', 'Invasión / Clash'].map(m => (
                <button
                  key={m}
                  onClick={() => setMapFilterMode(m)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
                    mapFilterMode === m
                      ? 'bg-orange-500 text-white shadow'
                      : isDark
                      ? 'text-slate-400 hover:text-white bg-slate-800/60'
                      : 'text-slate-600 hover:text-slate-900 bg-slate-200/70'
                  }`}
                >
                  {m === 'all' ? 'Todos los modos' : m}
                </button>
              ))}
            </div>

            {/* Maps Grid with Large Images + Per-Hero Map Synergy Score */}
            <div className="p-4 overflow-y-auto flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {OVERWATCH_MAPS
                .filter(m => mapFilterMode === 'all' || m.mode === mapFilterMode)
                .map(m => {
                  const heroMapSyn = evaluateHeroMapSynergy(playerHero, m);
                  return (
                    <button
                      key={m.id}
                      title={`${m.name}: ${heroMapSyn.reason}`}
                      onClick={() => {
                        setSelectedMapId(m.id);
                        setMapPickerOpen(false);
                      }}
                      className={`group relative h-28 rounded-2xl overflow-hidden border-2 text-left transition ${
                        m.id === selectedMapId
                          ? 'border-orange-500 ring-2 ring-orange-500 scale-[1.02]'
                          : isDark
                          ? 'border-slate-800 hover:border-slate-600'
                          : 'border-slate-300 hover:border-orange-400'
                      }`}
                    >
                      <img
                        src={m.image || 'https://tonikiraw.com/assets/img/mapas/kings-row.webp'}
                        alt={m.name}
                        className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Top-right Hero Synergy Score Pill */}
                      <span
                        className={`absolute top-1.5 right-1.5 z-10 px-1.5 py-0.5 rounded-md text-[9px] font-mono font-black shadow backdrop-blur-sm border ${
                          heroMapSyn.score >= 5
                            ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/60'
                            : heroMapSyn.score <= -5
                            ? 'bg-rose-950/90 text-rose-300 border-rose-500/60'
                            : 'bg-slate-900/85 text-slate-300 border-slate-600/60'
                        }`}
                      >
                        {heroMapSyn.score > 0 ? `+${heroMapSyn.score}` : heroMapSyn.score} pts
                      </span>

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
                  );
                })}
            </div>
          </div>
        </div>
      )}

      {/* 6. MODAL SELECTOR INDIVIDUAL DE RANGOS (CON ÍCONOS OFICIALES DE OVERWATCH 2) */}
      {rankPickerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-4">
          <div className={`w-full max-w-3xl max-h-[92dvh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden transition ${
            isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-300'
          }`}>
            {/* Modal Header */}
            <div className={`p-4 sm:p-5 border-b flex items-center justify-between ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  <h3 className={`text-lg font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    ELIGE TU RANGO COMPETITIVO INDIVIDUAL
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">
                  Cada división ajusta individualmente el peso del techo mecánico y la coordinación táctica.
                </p>
              </div>
              <button
                onClick={() => setRankPickerOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Individual 9-Rank Visual Grid */}
            <div className="p-4 sm:p-5 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {OVERWATCH_RANKS.map(r => {
                const isSelected = rankTier === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => {
                      setRankTier(r.id);
                      setRankPickerOpen(false);
                    }}
                    style={{
                      borderColor: isSelected
                        ? r.accentColor
                        : `color-mix(in oklab, ${r.accentColor} ${isDark ? '35%' : '45%'}, ${isDark ? '#1e293b' : '#cbd5e1'})`,
                      backgroundImage: isDark
                        ? `linear-gradient(145deg, color-mix(in oklab, ${r.accentColor} ${isSelected ? '24%' : '12%'}, #0f172a), #0f172a)`
                        : `linear-gradient(145deg, color-mix(in oklab, ${r.accentColor} ${isSelected ? '22%' : '10%'}, white), #ffffff)`,
                      boxShadow: isSelected
                        ? `0 0 0 2px ${r.accentColor}, 0 12px 26px color-mix(in oklab, ${r.accentColor} 28%, transparent)`
                        : undefined,
                    }}
                    className="relative rounded-2xl border-2 p-3.5 text-left flex flex-col justify-between gap-2.5 cursor-pointer transition hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          borderColor: `color-mix(in oklab, ${r.accentColor} 60%, white)`,
                        }}
                        className="w-14 h-14 rounded-xl bg-slate-950/90 border p-1.5 flex items-center justify-center flex-shrink-0 shadow-md"
                      >
                        <img
                          src={r.icon}
                          alt={r.name}
                          className="w-full h-full object-contain drop-shadow-[0_3px_8px_rgba(0,0,0,0.65)]"
                        />
                      </div>
                      <div className="min-w-0">
                        <span
                          style={{
                            color: isDark
                              ? `color-mix(in oklab, ${r.accentColor} 80%, white)`
                              : `color-mix(in oklab, ${r.accentColor} 78%, #0f172a)`,
                          }}
                          className="block text-[9px] font-mono uppercase font-black tracking-wider"
                        >
                          {r.englishName}
                        </span>
                        <h4 className={`text-base font-black leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {r.name}
                        </h4>
                      </div>
                    </div>

                    <p className={`text-[11px] leading-snug ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {r.coachingNote}
                    </p>

                    {isSelected && (
                      <span
                        style={{ backgroundColor: r.accentColor }}
                        className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-slate-950 text-[9px] font-black uppercase shadow"
                      >
                        Activo
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

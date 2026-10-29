import React, { useState, useMemo } from 'react';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import { OVERWATCH_MAPS } from '../../games/overwatch/maps';
import type { GameMap, RankTier, Role, Hero } from '../../types/game';
import { calculateRecommendations, analyzePlayerPick } from '../../core/coachEngine';
import { HeroAvatar } from '../common/HeroAvatar';
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
  AlertOctagon
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
  const [selectedRole, setSelectedRole] = useState<Role | 'all'>('all');
  const [gameFormat, setGameFormat] = useState<'5v5' | '6v6'>('5v5');
  const [viewMode, setViewMode] = useState<'quick' | 'detailed'>('detailed');

  // Ally Slots
  const [allySlots, setAllySlots] = useState<RoleSlot[]>([
    { id: 'a-tank-1', role: 'tank', label: 'Tanque', heroId: 'reinhardt' },
    { id: 'a-dps-1', role: 'damage', label: 'DPS 1', heroId: 'tracer', isMyPick: true },
    { id: 'a-dps-2', role: 'damage', label: 'DPS 2', heroId: 'cassidy' },
    { id: 'a-sup-1', role: 'support', label: 'Apoyo 1', heroId: 'ana' },
    { id: 'a-sup-2', role: 'support', label: 'Apoyo 2', heroId: 'lucio' },
  ]);

  // Enemy Slots
  const [enemySlots, setEnemySlots] = useState<RoleSlot[]>([
    { id: 'e-tank-1', role: 'tank', label: 'Tanque Rival', heroId: 'winston' },
    { id: 'e-dps-1', role: 'damage', label: 'DPS Rival 1', heroId: 'genji' },
    { id: 'e-dps-2', role: 'damage', label: 'DPS Rival 2', heroId: 'sombra' },
    { id: 'e-sup-1', role: 'support', label: 'Apoyo Rival 1', heroId: 'kiriko' },
    { id: 'e-sup-2', role: 'support', label: 'Apoyo Rival 2', heroId: 'lucio' },
  ]);

  // Adjust slots when switching between 5v5 and 6v6
  const handleFormatChange = (fmt: '5v5' | '6v6') => {
    setGameFormat(fmt);
    if (fmt === '6v6') {
      if (allySlots.length === 5) {
        setAllySlots([
          allySlots[0],
          { id: 'a-tank-2', role: 'tank', label: 'Tanque 2', heroId: 'zarya' },
          ...allySlots.slice(1)
        ]);
      }
      if (enemySlots.length === 5) {
        setEnemySlots([
          enemySlots[0],
          { id: 'e-tank-2', role: 'tank', label: 'Tanque Rival 2', heroId: 'dva' },
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

  // The player's chosen hero
  const mySlot = allySlots.find(s => s.isMyPick);
  const myHeroId = mySlot ? mySlot.heroId : null;

  // Set a slot as "My Hero"
  const setSlotAsMyPick = (slotId: string) => {
    setAllySlots(slots =>
      slots.map(s => ({
        ...s,
        isMyPick: s.id === slotId,
      }))
    );
  };

  // Specific diagnosis for player's chosen hero
  const playerPickDiagnosis = useMemo(() => {
    if (!myHeroId) return null;
    return analyzePlayerPick(myHeroId, allyHeroIds, enemyHeroIds, selectedMap, rankTier);
  }, [myHeroId, allyHeroIds, enemyHeroIds, selectedMap, rankTier]);

  // General recommendations
  const recommendations = useMemo(() => {
    // If the user has picked a role through their hero, prioritize that role if not set to 'all'
    const roleToRecommend = selectedRole === 'all' && mySlot && mySlot.heroId
      ? OVERWATCH_HEROES.find(h => h.id === mySlot.heroId)?.role || 'all'
      : selectedRole;

    return calculateRecommendations({
      role: roleToRecommend,
      gameMap: selectedMap,
      allyHeroIds,
      enemyHeroIds,
      rankTier,
    });
  }, [selectedRole, mySlot, selectedMap, allyHeroIds, enemyHeroIds, rankTier]);

  // Handle slot pick
  const assignHeroToSlot = (heroId: string) => {
    if (!activeSlotTarget) return;

    if (activeSlotTarget.team === 'ally') {
      setAllySlots(slots =>
        slots.map(s => (s.id === activeSlotTarget.slotId ? { ...s, heroId } : s))
      );
    } else {
      setEnemySlots(slots =>
        slots.map(s => (s.id === activeSlotTarget.slotId ? { ...s, heroId } : s))
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
      const heroes = ['winston', 'genji', 'tracer', 'kiriko', 'lucio'];
      setEnemySlots(slots =>
        slots.map((s, idx) => ({ ...s, heroId: heroes[idx] || null }))
      );
    } else if (type === 'brawl') {
      const heroes = ['reinhardt', 'reaper', 'mei', 'lucio', 'baptiste'];
      setEnemySlots(slots =>
        slots.map((s, idx) => ({ ...s, heroId: heroes[idx] || null }))
      );
    } else if (type === 'poke') {
      const heroes = ['sigma', 'ashe', 'widowmaker', 'baptiste', 'zenyatta'];
      setEnemySlots(slots =>
        slots.map((s, idx) => ({ ...s, heroId: heroes[idx] || null }))
      );
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Controls Bar */}
      <div className={`border rounded-3xl p-5 sm:p-6 shadow-xl backdrop-blur transition ${
        isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 border-b border-slate-800/60">
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

        {/* Global Match Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
          {/* Map Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>{t.mapLabel}</span>
            </label>
            <select
              value={selectedMapId}
              onChange={(e) => setSelectedMapId(e.target.value)}
              className={`w-full text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 border ${
                isDark
                  ? 'bg-slate-800 border-slate-700 text-white'
                  : 'bg-slate-50 border-slate-300 text-slate-900'
              }`}
            >
              {OVERWATCH_MAPS.map((map) => (
                <option key={map.id} value={map.id}>
                  {map.name} ({map.mode})
                </option>
              ))}
            </select>
            <div className="flex items-center space-x-2 mt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Estilo:</span>
              <span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 font-mono text-[11px] uppercase">
                {selectedMap.favoredStyles.join(' / ')}
              </span>
            </div>
          </div>

          {/* Rank Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.rankLabel}</span>
            </label>
            <select
              value={rankTier}
              onChange={(e) => setRankTier(e.target.value as RankTier)}
              className={`w-full text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500 border ${
                isDark
                  ? 'bg-slate-800 border-slate-700 text-white'
                  : 'bg-slate-50 border-slate-300 text-slate-900'
              }`}
            >
              <option value="bronze_gold">{t.rankBronzeGold}</option>
              <option value="plat_diamond">{t.rankPlatDiamond}</option>
              <option value="master_top500">{t.rankMasterTop500}</option>
            </select>
            <p className="text-[11px] text-slate-400 mt-2">
              Pondera la tasa de éxito mecánica del rango seleccionado.
            </p>
          </div>

          {/* Role Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>{t.roleLabel}</span>
            </label>
            <div className={`grid grid-cols-4 gap-1.5 p-1 rounded-xl border ${
              isDark ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-300'
            }`}>
              {(['all', 'tank', 'damage', 'support'] as const).map(r => (
                <button
                  key={r}
                  onClick={() => setSelectedRole(r)}
                  className={`py-1.5 rounded-lg text-xs font-bold transition capitalize ${
                    selectedRole === r ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {r === 'all' ? t.allRoles : r === 'damage' ? t.damage : r === 'tank' ? t.tank : t.support}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 mt-2">
              Filtra las sugerencias por el rol que deseas consultar.
            </p>
          </div>
        </div>
      </div>

      {/* Structured Role Slots for 5v5 & 6v6 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Ally Team Slots */}
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
              Marca la estrella en tu casilla personal
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
                      ? 'border-amber-400 bg-amber-500/10 shadow-lg shadow-amber-500/10 ring-2 ring-amber-400/40'
                      : hero
                      ? isDark ? 'border-blue-500/40 bg-slate-800/80' : 'border-blue-200 bg-blue-50/50'
                      : isDark ? 'border-dashed border-slate-700 bg-slate-800/40' : 'border-dashed border-slate-300 bg-slate-50'
                  }`}
                >
                  {/* Top Slot Header: Role badge & Star toggle */}
                  <div className="w-full flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                      {slot.label}
                    </span>
                    <button
                      onClick={() => setSlotAsMyPick(slot.id)}
                      className={`p-1 rounded-md transition ${
                        slot.isMyPick
                          ? 'text-amber-400 bg-amber-400/20'
                          : 'text-slate-500 hover:text-amber-400'
                      }`}
                      title={slot.isMyPick ? 'Tu personaje seleccionado' : 'Marcar como mi personaje'}
                    >
                      <Star className={`w-3.5 h-3.5 ${slot.isMyPick ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Hero Portrait or Empty Add Button */}
                  {hero ? (
                    <div
                      onClick={() => setActiveSlotTarget({ team: 'ally', slotId: slot.id, role: slot.role })}
                      className="cursor-pointer flex flex-col items-center w-full"
                    >
                      <HeroAvatar hero={hero} size="lg" />
                      <span className="text-xs font-bold text-slate-200 truncate w-full text-center mt-1.5">
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

                  {/* Clear button if filled */}
                  {hero && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        clearSlot('ally', slot.id);
                      }}
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Enemy Team Slots */}
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
                      <span className="text-xs font-bold text-slate-200 truncate w-full text-center mt-1.5">
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
                      className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FEATURE: "MI ELECCIÓN EN PARTIDA" (SPECIFIC PICK DIAGNOSIS & SWITCH RECOMMENDATION) */}
      {playerPickDiagnosis && (
        <div className={`border-2 rounded-3xl p-6 shadow-2xl relative overflow-hidden transition ${
          playerPickDiagnosis.score >= 70
            ? 'border-emerald-500/50 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-900'
            : playerPickDiagnosis.score >= 50
            ? 'border-amber-500/50 bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900'
            : 'border-rose-500/60 bg-gradient-to-r from-rose-950/40 via-slate-900 to-slate-900'
        }`}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-5 border-b border-slate-800">
            {/* Player Hero Info */}
            <div className="flex items-center space-x-4">
              <HeroAvatar hero={playerPickDiagnosis.hero} size="xl" showRoleBadge />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/30 flex items-center">
                    <UserCheck className="w-3 h-3 mr-1" /> TU PICK ACTUAL
                  </span>
                  <span className="text-xs text-slate-400 capitalize">
                    {playerPickDiagnosis.hero.role === 'damage' ? 'DPS' : playerPickDiagnosis.hero.role === 'tank' ? 'Tanque' : 'Apoyo'}
                  </span>
                </div>
                <h2 className="text-2xl font-black text-white mt-1">
                  {playerPickDiagnosis.hero.name}
                </h2>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  {playerPickDiagnosis.verdict}
                </p>
              </div>
            </div>

            {/* Score Pill */}
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="text-[10px] uppercase font-bold text-slate-400">Viabilidad de tu Elección</div>
                <div className={`text-2xl font-black font-mono ${
                  playerPickDiagnosis.score >= 70 ? 'text-emerald-400' : playerPickDiagnosis.score >= 50 ? 'text-amber-400' : 'text-rose-400'
                }`}>
                  {playerPickDiagnosis.score}/100
                </div>
              </div>
            </div>
          </div>

          {/* Threat & Target Matchups for Player */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 border-b border-slate-800">
            {/* Threats */}
            <div className="bg-slate-900/60 rounded-2xl p-3.5 border border-rose-500/20">
              <div className="flex items-center space-x-2 text-rose-400 font-bold text-xs mb-2">
                <AlertOctagon className="w-4 h-4" />
                <span>Enemigos que te anulan directamente ({playerPickDiagnosis.directThreats.length})</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {playerPickDiagnosis.directThreats.length > 0 ? (
                  playerPickDiagnosis.directThreats.map(threat => (
                    <div key={threat.id} className="flex items-center space-x-2 bg-slate-800 px-2.5 py-1.5 rounded-xl border border-rose-500/30">
                      <HeroAvatar hero={threat} size="xs" />
                      <span className="text-xs font-semibold text-rose-300">{threat.name}</span>
                    </div>
                  ))
                ) : (
                  <span className="text-xs text-emerald-400 font-medium italic">
                    ¡Ningún héroe rival te hace hard-counter directo en este momento!
                  </span>
                )}
              </div>
            </div>

            {/* Favorable Targets */}
            <div className="bg-slate-900/60 rounded-2xl p-3.5 border border-emerald-500/20">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Tus objetivos favoritos en el equipo rival ({playerPickDiagnosis.favorableTargets.length})</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {playerPickDiagnosis.favorableTargets.length > 0 ? (
                  playerPickDiagnosis.favorableTargets.map(target => (
                    <div key={target.id} className="flex items-center space-x-2 bg-slate-800 px-2.5 py-1.5 rounded-xl border border-emerald-500/30">
                      <HeroAvatar hero={target} size="xs" />
                      <span className="text-xs font-semibold text-emerald-300">{target.name}</span>
                    </div>
                  ))
                ) : (
                  <span className="text-xs text-slate-400 italic">
                    Enfócate en desgastar los escudos o coordinar con tus tanques.
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* COUNTER-SWITCH SUGGESTIONS (WITHIN SAME ROLE) */}
          <div className="pt-4">
            <div className="flex items-center space-x-2 text-sm font-black text-white mb-3">
              <RefreshCw className="w-4 h-4 text-orange-400 animate-spin-slow" />
              <span>{t.switchRecommendations}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {playerPickDiagnosis.recommendedSwitches.map(alt => (
                <div
                  key={alt.hero.id}
                  className="bg-slate-800/90 border border-orange-500/30 rounded-2xl p-3 flex items-center justify-between hover:border-orange-500 transition shadow-lg group"
                >
                  <div className="flex items-center space-x-3">
                    <HeroAvatar hero={alt.hero} size="md" />
                    <div>
                      <div className="flex items-center space-x-1.5">
                        <span className="font-bold text-white text-sm group-hover:text-orange-400 transition">
                          {alt.hero.name}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold">
                          {alt.score} pts
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-tight mt-0.5">
                        {alt.reason}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Selection Modal (Filtered directly by slot role!) */}
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
                  Filtrado automáticamente para cumplir la restricción del rol.
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
                ).map(hero => (
                  <button
                    key={hero.id}
                    onClick={() => assignHeroToSlot(hero.id)}
                    className={`p-3 rounded-2xl border flex items-center space-x-3 transition text-left group ${
                      isDark
                        ? 'bg-slate-800/80 border-slate-700/80 hover:bg-slate-700 hover:border-orange-500'
                        : 'bg-slate-50 border-slate-200 hover:bg-orange-50 hover:border-orange-400'
                    }`}
                  >
                    <HeroAvatar hero={hero} size="sm" />
                    <div className="truncate">
                      <div className="text-xs font-bold text-white group-hover:text-orange-400 transition truncate">
                        {hero.name}
                      </div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">
                        {hero.style}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* General Recommendations Feed */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <h2 className={`text-xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.recommendationsForRole} ({recommendations.length} Héroes)
            </h2>
          </div>

          {/* Dificultad Legend */}
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

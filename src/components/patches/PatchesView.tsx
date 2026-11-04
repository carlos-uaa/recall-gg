import React, { useState, useMemo } from 'react';
import { OVERWATCH_PATCHES, type PatchNote, type ChangeImpact, type HeroPatchChange } from '../../games/overwatch/patchNotes';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import { getSubroleForHero } from '../../games/overwatch/subroles';
import { HeroAvatar } from '../common/HeroAvatar';
import type { Language } from '../../utils/i18n';
import {
  FileText,
  ChevronDown,
  ChevronUp,
  Search,
  Sparkles,
  TrendingUp,
  TrendingDown,
  SlidersHorizontal,
  Layers,
  ArrowRight,
  Shield,
  Swords,
  Heart,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react';

interface PatchesViewProps {
  language?: Language;
  theme?: 'dark' | 'light';
}

export const PatchesView: React.FC<PatchesViewProps> = ({ language = 'es', theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedHeroFilter, setSelectedHeroFilter] = useState<string>('all');
  const [expandedPatchIds, setExpandedPatchIds] = useState<Set<string>>(() => new Set(['patch-2026-11-03']));
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const toggleExpand = (patchId: string) => {
    setExpandedPatchIds(prev => {
      const next = new Set(prev);
      if (next.has(patchId)) {
        next.delete(patchId);
      } else {
        next.add(patchId);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedPatchIds(new Set(OVERWATCH_PATCHES.map(p => p.id)));
  };

  const collapseAll = () => {
    setExpandedPatchIds(new Set());
  };

  // Filter patches based on search, patch type, and selected hero
  const filteredPatches = useMemo(() => {
    return OVERWATCH_PATCHES.filter(patch => {
      // Type filter
      if (filterType !== 'all' && patch.patchType !== filterType) {
        return false;
      }

      // Hero filter
      if (selectedHeroFilter !== 'all' && !patch.affectedHeroIds.includes(selectedHeroFilter)) {
        return false;
      }

      // Search term
      if (search.trim()) {
        const query = search.toLowerCase();
        const matchesTitle = patch.title.toLowerCase().includes(query);
        const matchesVersion = patch.version.toLowerCase().includes(query);
        const matchesDate = patch.displayDate.toLowerCase().includes(query);
        const matchesSummary = patch.summary.toLowerCase().includes(query);
        const matchesHero = patch.heroChanges.some(
          hc =>
            hc.heroName.toLowerCase().includes(query) ||
            hc.abilities.some(
              a => a.abilityName.toLowerCase().includes(query) || a.summary.toLowerCase().includes(query)
            )
        );
        return matchesTitle || matchesVersion || matchesDate || matchesSummary || matchesHero;
      }

      return true;
    });
  }, [search, filterType, selectedHeroFilter]);

  const visiblePatches = useMemo(() => {
    return filteredPatches.slice(0, visibleCount);
  }, [filteredPatches, visibleCount]);

  const getImpactBadge = (impact: ChangeImpact) => {
    switch (impact) {
      case 'buff':
        return (
          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-black uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <TrendingUp className="w-3 h-3 text-emerald-400" />
            <span>BUFF</span>
          </span>
        );
      case 'nerf':
        return (
          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-black uppercase bg-rose-500/15 text-rose-400 border border-rose-500/30">
            <TrendingDown className="w-3 h-3 text-rose-400" />
            <span>NERF</span>
          </span>
        );
      case 'rework':
        return (
          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-black uppercase bg-purple-500/15 text-purple-400 border border-purple-500/30">
            <Sparkles className="w-3 h-3 text-purple-400" />
            <span>REWORK</span>
          </span>
        );
      case 'adjustment':
      default:
        return (
          <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-black uppercase bg-sky-500/15 text-sky-400 border border-sky-500/30">
            <SlidersHorizontal className="w-3 h-3 text-sky-400" />
            <span>AJUSTE</span>
          </span>
        );
    }
  };

  const getRoleIcon = (role: string) => {
    if (role === 'tank') return <Shield className="w-3.5 h-3.5 text-blue-400" />;
    if (role === 'damage') return <Swords className="w-3.5 h-3.5 text-rose-400" />;
    return <Heart className="w-3.5 h-3.5 text-emerald-400" />;
  };

  return (
    <div className="space-y-6 max-w-full overflow-x-hidden">
      {/* Header Banner */}
      <div
        className={`border rounded-3xl p-4 sm:p-6 shadow-xl transition ${
          isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold mb-2">
              <FileText className="w-4 h-4" />
              <span>HISTORIAL OFICIAL DE PARCHES & CAMBIOS DE BALANCE</span>
            </div>
            <h1
              className={`text-2xl sm:text-3xl font-black tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Notas de Parche & Evolución del Meta
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Consulta el historial completo de cambios por parche, segmentado bajo demanda. Revisa los buffs, nerfs,
              reajustes de pasivas de subrol y comentarios de los desarrolladores para entender cada cambio competitivo.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div
            className={`flex items-center space-x-3 px-4 py-2.5 rounded-2xl border flex-shrink-0 self-start md:self-auto ${
              isDark ? 'bg-slate-800/80 border-slate-700/80' : 'bg-slate-100 border-slate-300'
            }`}
          >
            <div className="text-center">
              <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Parches</div>
              <div className="text-lg font-black text-orange-500">{OVERWATCH_PATCHES.length}</div>
            </div>
            <div className="h-6 w-px bg-slate-700/60" />
            <div className="text-center">
              <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Último Parche</div>
              <div className="text-xs font-black text-emerald-400 font-mono">v2.14.2</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div
        className={`border rounded-2xl p-3 sm:p-4 shadow-md transition ${
          isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por versión (v2.14.2), héroe, habilidad o cambio..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm border transition focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                isDark
                  ? 'bg-slate-800/90 border-slate-700 text-white placeholder-slate-500'
                  : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 lg:pb-0">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex-shrink-0 ${
                filterType === 'all'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : isDark
                  ? 'text-slate-400 hover:text-white bg-slate-800/60'
                  : 'text-slate-600 hover:text-slate-900 bg-slate-100'
              }`}
            >
              Todos ({OVERWATCH_PATCHES.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterType('mid-season')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex-shrink-0 ${
                filterType === 'mid-season'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : isDark
                  ? 'text-slate-400 hover:text-white bg-slate-800/60'
                  : 'text-slate-600 hover:text-slate-900 bg-slate-100'
              }`}
            >
              Mid-Season
            </button>
            <button
              type="button"
              onClick={() => setFilterType('season-launch')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex-shrink-0 ${
                filterType === 'season-launch'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : isDark
                  ? 'text-slate-400 hover:text-white bg-slate-800/60'
                  : 'text-slate-600 hover:text-slate-900 bg-slate-100'
              }`}
            >
              Inicio de Temporada
            </button>
            <button
              type="button"
              onClick={() => setFilterType('balance')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex-shrink-0 ${
                filterType === 'balance'
                  ? 'bg-orange-500 text-white shadow-sm'
                  : isDark
                  ? 'text-slate-400 hover:text-white bg-slate-800/60'
                  : 'text-slate-600 hover:text-slate-900 bg-slate-100'
              }`}
            >
              Balance General
            </button>
          </div>

          {/* Hero Specific Filter Dropdown */}
          <div className="flex items-center space-x-2">
            <select
              value={selectedHeroFilter}
              onChange={e => setSelectedHeroFilter(e.target.value)}
              className={`px-3 py-2 rounded-xl text-xs font-bold border transition focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                isDark
                  ? 'bg-slate-800 border-slate-700 text-slate-200'
                  : 'bg-slate-100 border-slate-300 text-slate-800'
              }`}
            >
              <option value="all">Filtrar por Héroe: Todos</option>
              {OVERWATCH_HEROES.slice()
                .sort((a, b) => a.name.localeCompare(b.name, 'es'))
                .map(hero => (
                  <option key={hero.id} value={hero.id}>
                    {hero.name} ({hero.role === 'damage' ? 'DPS' : hero.role === 'tank' ? 'Tanque' : 'Apoyo'})
                  </option>
                ))}
            </select>

            {/* Quick Expand / Collapse Controls */}
            <button
              type="button"
              onClick={expandAll}
              className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold border transition ${
                isDark
                  ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              }`}
              title="Desplegar todos los parches"
            >
              Abrir todos
            </button>
            <button
              type="button"
              onClick={collapseAll}
              className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold border transition ${
                isDark
                  ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              }`}
              title="Colapsar todos los parches"
            >
              Cerrar todos
            </button>
          </div>
        </div>
      </div>

      {/* Segmented Patches Timeline / Accordion */}
      {filteredPatches.length === 0 ? (
        <div
          className={`p-12 text-center rounded-3xl border border-dashed my-6 ${
            isDark ? 'border-slate-800 bg-slate-900/40' : 'border-slate-300 bg-slate-50'
          }`}
        >
          <FileText className="w-12 h-12 text-slate-500 mx-auto mb-3 opacity-60" />
          <h3 className={`text-base font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
            No se encontraron parches con los filtros seleccionados
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
            Prueba a buscar con otro término o limpia los filtros de tipo de parche y héroe.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setFilterType('all');
              setSelectedHeroFilter('all');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase transition"
          >
            Limpiar Filtros
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {visiblePatches.map(patch => {
            const isExpanded = expandedPatchIds.has(patch.id);
            const affectedHeroes = OVERWATCH_HEROES.filter(h => patch.affectedHeroIds.includes(h.id));

            return (
              <div
                key={patch.id}
                className={`border rounded-3xl shadow-xl transition-all duration-200 overflow-hidden ${
                  isDark ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200'
                }`}
              >
                {/* Collapsible Header (Always visible: Version, Date, Summary, Affected Heroes, Toggle Button) */}
                <div
                  onClick={() => toggleExpand(patch.id)}
                  className={`p-4 sm:p-6 cursor-pointer select-none transition flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    isDark ? 'hover:bg-slate-800/40' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="space-y-2 flex-1">
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-orange-500 text-slate-950 font-black text-xs font-mono shadow-sm">
                        v{patch.version}
                      </span>
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono font-bold">
                        <Calendar className="w-3 h-3 text-orange-400" />
                        <span>{patch.displayDate}</span>
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-md text-[11px] font-mono font-bold border ${
                          patch.patchType === 'mid-season'
                            ? 'bg-amber-500/15 text-amber-400 border-amber-500/30'
                            : patch.patchType === 'season-launch'
                            ? 'bg-purple-500/15 text-purple-400 border-purple-500/30'
                            : 'bg-blue-500/15 text-blue-400 border-blue-500/30'
                        }`}
                      >
                        {patch.badgeLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className={`text-base sm:text-lg font-black tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {patch.title}
                    </h2>

                    {/* Short Summary */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl">{patch.summary}</p>

                    {/* Affected Heroes Mini Avatars Row */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mr-1">
                        Héroes ({patch.affectedHeroIds.length}):
                      </span>
                      {affectedHeroes.map(hero => {
                        const heroChange = patch.heroChanges.find(hc => hc.heroId === hero.id);
                        const impact = heroChange?.overallImpact || 'adjustment';

                        return (
                          <div
                            key={hero.id}
                            title={`${hero.name} (${impact.toUpperCase()})`}
                            className="relative group/avatar"
                          >
                            <HeroAvatar hero={hero} size="xs" />
                            <span
                              className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full flex items-center justify-center text-[7px] font-black border ring-1 ring-black ${
                                impact === 'buff'
                                  ? 'bg-emerald-500 text-white border-emerald-300'
                                  : impact === 'nerf'
                                  ? 'bg-rose-500 text-white border-rose-300'
                                  : 'bg-sky-500 text-white border-sky-300'
                              }`}
                            >
                              {impact === 'buff' ? '▲' : impact === 'nerf' ? '▼' : '●'}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Expand / Collapse Button Pill */}
                  <div className="flex items-center space-x-2 self-end md:self-center flex-shrink-0">
                    <button
                      type="button"
                      className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-bold border transition shadow-sm ${
                        isExpanded
                          ? 'bg-orange-500 text-white border-orange-400'
                          : isDark
                          ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                          : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                      }`}
                    >
                      <span>{isExpanded ? 'Ocultar detalles' : 'Desplegar cambios'}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Breakdown (Consultado bajo demanda) */}
                {isExpanded && (
                  <div
                    className={`border-t p-4 sm:p-6 space-y-6 transition-all duration-300 ${
                      isDark ? 'border-slate-800 bg-[#090e18]/80' : 'border-slate-200 bg-slate-50/70'
                    }`}
                  >
                    {/* Developer Comments / Context */}
                    {patch.developerIntro && (
                      <div
                        className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                          isDark
                            ? 'bg-slate-800/50 border-slate-700/60 text-slate-300'
                            : 'bg-white border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center space-x-2 text-orange-400 font-bold mb-1 uppercase font-mono text-[11px]">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Comentario de los Desarrolladores</span>
                        </div>
                        <p>{patch.developerIntro}</p>
                      </div>
                    )}

                    {/* General / System Changes (If any) */}
                    {patch.systemChanges && patch.systemChanges.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                          <Layers className="w-3.5 h-3.5 text-orange-400" />
                          <span>Ajustes Generales de Sistema & Pasivas de Rol</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {patch.systemChanges.map((sys, idx) => (
                            <div
                              key={idx}
                              className={`p-3.5 rounded-2xl border space-y-1 ${
                                isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <h4
                                  className={`text-xs font-black ${
                                    isDark ? 'text-white' : 'text-slate-900'
                                  }`}
                                >
                                  {sys.title}
                                </h4>
                                <span className="text-[10px] px-2 py-0.5 rounded font-mono font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                                  {sys.category}
                                </span>
                              </div>
                              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                                {sys.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Detailed Hero Changes Cards */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">
                        <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Detalle de Cambios por Personaje</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {patch.heroChanges.map(heroChange => {
                          const heroObj = OVERWATCH_HEROES.find(h => h.id === heroChange.heroId);
                          const subMeta = getSubroleForHero(heroChange.heroId);

                          return (
                            <div
                              key={heroChange.heroId}
                              className={`border rounded-2xl p-4 space-y-3 shadow-md transition ${
                                isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
                              }`}
                            >
                              {/* Hero Header with Role, Subrole & Overall Impact */}
                              <div className="flex items-center justify-between gap-2 border-b pb-2.5 border-slate-800/40">
                                <div className="flex items-center space-x-2.5">
                                  {heroObj ? (
                                    <HeroAvatar hero={heroObj} size="sm" showRoleBadge />
                                  ) : (
                                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold">
                                      {heroChange.heroName[0]}
                                    </div>
                                  )}
                                  <div>
                                    <div className="flex items-center space-x-1.5">
                                      <h3
                                        className={`text-sm font-black tracking-tight ${
                                          isDark ? 'text-white' : 'text-slate-900'
                                        }`}
                                      >
                                        {heroChange.heroName}
                                      </h3>
                                    </div>
                                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-400">
                                      <span className="flex items-center space-x-0.5">
                                        {getRoleIcon(heroChange.role)}
                                        <span className="capitalize">{heroChange.role}</span>
                                      </span>
                                      <span>•</span>
                                      <span
                                        title={`Pasiva: ${subMeta.passiveName}\n${subMeta.passiveDescription}`}
                                        className="font-bold text-orange-400 cursor-help"
                                      >
                                        {subMeta.name}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                <div>{getImpactBadge(heroChange.overallImpact)}</div>
                              </div>

                              {/* Developer Reasoning Note */}
                              {heroChange.developerNotes && (
                                <p className="text-[11px] text-slate-400 italic bg-black/20 p-2 rounded-lg border border-white/5">
                                  "{heroChange.developerNotes}"
                                </p>
                              )}

                              {/* Abilities Changed */}
                              <div className="space-y-2.5 pt-1">
                                {heroChange.abilities.map((ab, abIdx) => (
                                  <div
                                    key={abIdx}
                                    className={`p-2.5 rounded-xl border space-y-1 ${
                                      isDark ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between">
                                      <h4
                                        className={`text-xs font-bold ${
                                          isDark ? 'text-slate-200' : 'text-slate-800'
                                        }`}
                                      >
                                        {ab.abilityName}
                                      </h4>
                                      <span
                                        className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded uppercase ${
                                          ab.impact === 'buff'
                                            ? 'text-emerald-400 bg-emerald-500/10'
                                            : ab.impact === 'nerf'
                                            ? 'text-rose-400 bg-rose-500/10'
                                            : 'text-sky-400 bg-sky-500/10'
                                        }`}
                                      >
                                        {ab.impact}
                                      </span>
                                    </div>

                                    {/* Previous -> New Value if defined */}
                                    {(ab.previousValue || ab.newValue) && (
                                      <div className="flex items-center space-x-1.5 text-[10px] font-mono pt-0.5">
                                        {ab.previousValue && (
                                          <span className="line-through text-slate-500">
                                            {ab.previousValue}
                                          </span>
                                        )}
                                        <ArrowRight className="w-2.5 h-2.5 text-orange-400 flex-shrink-0" />
                                        {ab.newValue && (
                                          <span className="font-bold text-orange-400">{ab.newValue}</span>
                                        )}
                                      </div>
                                    )}

                                    <p className="text-[11px] text-slate-300 leading-snug">{ab.summary}</p>
                                    {ab.details && (
                                      <p className="text-[10px] text-slate-400 opacity-80">{ab.details}</p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* Pagination / Load More Segment Control */}
          {visibleCount < filteredPatches.length && (
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setVisibleCount(prev => prev + 4)}
                className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-orange-600/30"
              >
                Cargar Más Parches ({filteredPatches.length - visibleCount} restantes)
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

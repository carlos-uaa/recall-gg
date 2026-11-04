import React, { useState, useEffect, useMemo } from 'react';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import { OVERWATCH_HERO_KITS } from '../../games/overwatch/heroKits';
import { getHeroMapBreakdown } from '../../games/overwatch/mapSynergies';
import { getEnrichedHeroPerks } from '../../games/overwatch/heroPerksMeta';
import {
  getSubroleForHero,
  getSubroleDisplayName,
  getSubrolePassiveName,
  getSubrolePassiveDescription,
} from '../../games/overwatch/subroles';
import type { Hero, HeroAbilityItem, HeroPerkItem } from '../../types/game';
import { HeroSelectScreen } from '../coach/HeroSelectScreen';
import { useFavoriteHeroes } from '../../utils/favorites';
import { TRANSLATIONS, type Language } from '../../utils/i18n';
import {
  Shield,
  Crosshair,
  Zap,
  Sparkles,
  Flame,
  Star,
  MapPin,
  Users,
  Calendar,
  CheckCircle2,
  AlertOctagon,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface HeroesViewProps {
  language?: Language;
  theme?: 'dark' | 'light';
}

const RoleEmblem: React.FC<{ role: Hero['role']; className?: string }> = ({ role, className = 'w-6 h-6' }) => {
  if (role === 'tank') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M12 2L4 5.5v6.2c0 5.1 3.4 9.8 8 11.3 4.6-1.5 8-6.2 8-11.3V5.5L12 2zm0 2.3l5.8 2.5v4.9c0 3.9-2.5 7.6-5.8 8.9-3.3-1.3-5.8-5-5.8-8.9V6.8L12 4.3z" />
      </svg>
    );
  }
  if (role === 'damage') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M6.5 4C5.7 4 5 5.3 5 7v5h3V7c0-1.7-.7-3-1.5-3zM5 13.5V19h3v-5.5H5zm7-9.5c-.8 0-1.5 1.3-1.5 3v5h3V7c0-1.7-.7-3-1.5-3zm-1.5 9.5V19h3v-5.5h-3zm7-9.5c-.8 0-1.5 1.5-1.5 3v5h3V7c0-1.7-.7-3-1.5-3zM16 13.5V19h3v-5.5h-3z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5V4z" />
    </svg>
  );
};

const KitIconBadge: React.FC<{
  iconUrl?: string;
  fallbackType: 'weapon' | 'ult' | 'ability' | 'passive' | 'perk' | 'role-tank' | 'role-damage' | 'role-support';
  accent?: boolean;
  heroColor: string;
}> = ({ iconUrl, fallbackType, accent = false, heroColor }) => {
  const [imgErr, setImgErr] = useState(false);

  const renderFallback = () => {
    if (fallbackType === 'role-tank') return <RoleEmblem role="tank" className="w-6 h-6 text-white" />;
    if (fallbackType === 'role-damage') return <RoleEmblem role="damage" className="w-6 h-6 text-white" />;
    if (fallbackType === 'role-support') return <RoleEmblem role="support" className="w-6 h-6 text-white" />;
    if (fallbackType === 'weapon') return <Crosshair className="w-6 h-6 text-white" />;
    if (fallbackType === 'ult') return <Flame className="w-6 h-6 text-white" />;
    if (fallbackType === 'perk') return <Sparkles className="w-5 h-5 text-white" />;
    if (fallbackType === 'passive') return <Shield className="w-5 h-5 text-white" />;
    return <Zap className="w-5 h-5 text-white" />;
  };

  return (
    <div
      style={
        accent
          ? {
              background: `linear-gradient(135deg, color-mix(in oklab, ${heroColor} 80%, white), ${heroColor})`,
              boxShadow: `0 6px 18px color-mix(in oklab, ${heroColor} 38%, transparent)`,
            }
          : {
              background: `linear-gradient(135deg, color-mix(in oklab, ${heroColor} 45%, #cbd5e1), color-mix(in oklab, ${heroColor} 25%, #475569))`,
            }
      }
      className="relative flex-shrink-0 w-10 h-10 sm:w-13 sm:h-13 rounded-full p-0.5 flex items-center justify-center shadow-md transition-all duration-300 group-hover/item:scale-105"
    >
      <div
        style={
          accent
            ? { borderColor: `color-mix(in oklab, ${heroColor} 70%, white)` }
            : { borderColor: `color-mix(in oklab, ${heroColor} 35%, #475569)` }
        }
        className="w-full h-full rounded-full flex items-center justify-center border bg-slate-950"
      >
        {iconUrl && !imgErr ? (
          <img
            src={iconUrl}
            alt=""
            decoding="async"
            className="w-5 h-5 sm:w-7 sm:h-7 object-contain brightness-110"
            onError={() => setImgErr(true)}
          />
        ) : (
          renderFallback()
        )}
      </div>
    </div>
  );
};

export const HeroesView: React.FC<HeroesViewProps> = ({ language = 'es', theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[language];
  const { favoriteHeroIds, isFavorite, toggleFavorite } = useFavoriteHeroes();

  const [selectedHeroId, setSelectedHeroId] = useState<string>('freja');
  const [portraitLoaded, setPortraitLoaded] = useState<boolean>(false);

  const selectedIndex = OVERWATCH_HEROES.findIndex(h => h.id === selectedHeroId);
  const selectedHero: Hero =
    selectedIndex >= 0 ? OVERWATCH_HEROES[selectedIndex] : OVERWATCH_HEROES[0];

  const kit = OVERWATCH_HERO_KITS[selectedHero.id];
  const heroColor = kit?.accentColor || '#38bdf8';

  const enrichedPerks = useMemo(
    () => getEnrichedHeroPerks(selectedHero.id, kit?.perks),
    [selectedHero.id, kit?.perks]
  );

  // Reset smooth fade state and preload neighbor heroes so Prev/Next & browsing are instant
  useEffect(() => {
    setPortraitLoaded(false);
    if (typeof window === 'undefined') return;
    const prevIdx = (selectedIndex - 1 + OVERWATCH_HEROES.length) % OVERWATCH_HEROES.length;
    const nextIdx = (selectedIndex + 1) % OVERWATCH_HEROES.length;
    [OVERWATCH_HEROES[prevIdx]?.id, OVERWATCH_HEROES[nextIdx]?.id].forEach(nid => {
      const nkit = nid ? OVERWATCH_HERO_KITS[nid] : undefined;
      if (nkit?.fullPortrait) {
        const img = new Image();
        img.decoding = 'async';
        img.src = nkit.fullPortrait;
      }
    });
  }, [selectedHero.id, selectedIndex]);

  const stepHero = (delta: number) => {
    const nextIdx = (selectedIndex + delta + OVERWATCH_HEROES.length) % OVERWATCH_HEROES.length;
    setSelectedHeroId(OVERWATCH_HEROES[nextIdx].id);
  };

  const subMeta = getSubroleForHero(selectedHero.id);

  const hp = kit?.hitpoints || { health: 250, armor: 0, shields: 0, total: 250 };
  const healthPct = Math.round((hp.health / hp.total) * 100);
  const armorPct = Math.round((hp.armor / hp.total) * 100);
  const shieldsPct = Math.max(0, 100 - healthPct - armorPct);

  const topStrong = OVERWATCH_HEROES.filter(h =>
    selectedHero.counters.strongAgainst.includes(h.id)
  )
    .sort((a, b) => {
      const aH = selectedHero.counters.hardStrongAgainst?.includes(a.id) ? 1 : 0;
      const bH = selectedHero.counters.hardStrongAgainst?.includes(b.id) ? 1 : 0;
      return bH - aH || a.name.localeCompare(b.name, 'es');
    })
    .slice(0, 6);

  const topWeak = OVERWATCH_HEROES.filter(h =>
    selectedHero.counters.weakAgainst.includes(h.id)
  )
    .sort((a, b) => {
      const aH = selectedHero.counters.hardWeakAgainst?.includes(a.id) ? 1 : 0;
      const bH = selectedHero.counters.hardWeakAgainst?.includes(b.id) ? 1 : 0;
      return bH - aH || a.name.localeCompare(b.name, 'es');
    })
    .slice(0, 6);

  const mapBreakdown = getHeroMapBreakdown(selectedHero);

  // Readable dynamic heading color using color-mix in oklab (maintains strong contrast in both Light and Dark mode)
  const sectionTitleColor = isDark
    ? `color-mix(in oklab, ${heroColor} 78%, white)`
    : `color-mix(in oklab, ${heroColor} 72%, #0f172a)`;

  const panelBorderColor = isDark
    ? `color-mix(in oklab, ${heroColor} 58%, #1e293b)`
    : `color-mix(in oklab, ${heroColor} 65%, #cbd5e1)`;

  const stripGradient = `linear-gradient(180deg, color-mix(in oklab, ${heroColor} 75%, white), ${heroColor}, color-mix(in oklab, ${heroColor} 82%, black))`;

  const renderKitItem = (
    item: HeroAbilityItem | HeroPerkItem,
    fallbackType: 'weapon' | 'ult' | 'ability' | 'passive' | 'perk',
    accent = false
  ) => {
    let resolvedFallback: 'weapon' | 'ult' | 'ability' | 'passive' | 'perk' | 'role-tank' | 'role-damage' | 'role-support' =
      fallbackType;
    if (item.name.startsWith('ROL: TANQUE')) resolvedFallback = 'role-tank';
    else if (item.name.startsWith('ROL: DAÑO')) resolvedFallback = 'role-damage';
    else if (item.name.startsWith('ROL: APOYO')) resolvedFallback = 'role-support';

    return (
      <div
        key={item.name}
        className={`group/item flex items-start gap-3.5 p-2 -m-2 rounded-xl transition ${
          isDark ? 'hover:bg-white/[0.03]' : 'hover:bg-slate-900/[0.03]'
        }`}
      >
        <KitIconBadge
          iconUrl={item.icon}
          fallbackType={resolvedFallback}
          accent={accent}
          heroColor={heroColor}
        />
        <div className="min-w-0 flex-1 pt-0.5">
          <h4
            style={accent ? { color: sectionTitleColor } : undefined}
            className={`text-xs sm:text-sm font-black uppercase tracking-wide leading-tight ${
              !accent ? (isDark ? 'text-white' : 'text-slate-900') : ''
            }`}
          >
            {item.name}
          </h4>
          <p
            className={`text-[11px] sm:text-xs leading-snug mt-1 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {item.description}
          </p>
        </div>
      </div>
    );
  };

  const renderPerkTier = (
    tierTitle: string,
    tierSubtitle: string,
    perks: HeroPerkItem[],
    isMajor: boolean
  ) => {
    const p0 = perks[0];
    const p1 = perks[1];
    const p0Rate = p0?.pickRate ?? 50;
    const p1Rate = p1?.pickRate ?? 50;

    return (
      <div className="space-y-3.5">
        {/* Tier Header with Pro Meta and Pick Rate Legend */}
        <div className="flex items-center justify-between flex-wrap gap-2 pb-1 border-b border-slate-700/20">
          <div>
            <h3
              style={{ color: sectionTitleColor }}
              className="text-xs sm:text-sm font-black uppercase tracking-[0.14em] flex items-center gap-1.5"
            >
              <span>{tierTitle}</span>
              {isMajor && (
                <span className="text-[10px] px-1.5 py-0.2 rounded font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  {language === 'es' ? 'MAYOR' : 'MAJOR'}
                </span>
              )}
            </h3>
            <p className="text-[10px] text-slate-400">
              {tierSubtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-mono">
            <span className="inline-flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-3 h-3 fill-amber-400" />
              {language === 'es' ? 'Meta Pro' : 'Pro Meta'}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">
              {language === 'es' ? '% Selección' : 'Pick Rate'}
            </span>
          </div>
        </div>

        {/* Comparative Popularity Bar (Perk 1 vs Perk 2) */}
        {p0 && p1 && (
          <div
            className={`p-2.5 rounded-xl border space-y-1.5 transition-colors ${
              isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white/90 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between text-[11px] font-mono font-bold">
              <div className="flex items-center gap-1.5 truncate max-w-[48%]">
                {p0.proPick && (
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400 flex-shrink-0 animate-pulse" />
                )}
                <span
                  className={`truncate ${
                    p0.proPick
                      ? 'text-amber-400 font-black'
                      : isDark
                      ? 'text-slate-200'
                      : 'text-slate-700'
                  }`}
                >
                  {p0.name}
                </span>
                <span
                  style={{
                    color: p0.proPick
                      ? '#f59e0b'
                      : isDark
                      ? '#38bdf8'
                      : '#0284c7',
                  }}
                  className="text-xs font-black"
                >
                  {p0Rate}%
                </span>
              </div>

              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-1">
                VS
              </span>

              <div className="flex items-center justify-end gap-1.5 truncate max-w-[48%]">
                <span
                  style={{
                    color: p1.proPick
                      ? '#f59e0b'
                      : isDark
                      ? '#c084fc'
                      : '#9333ea',
                  }}
                  className="text-xs font-black"
                >
                  {p1Rate}%
                </span>
                <span
                  className={`truncate ${
                    p1.proPick
                      ? 'text-amber-400 font-black'
                      : isDark
                      ? 'text-slate-200'
                      : 'text-slate-700'
                  }`}
                >
                  {p1.name}
                </span>
                {p1.proPick && (
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400 flex-shrink-0 animate-pulse" />
                )}
              </div>
            </div>

            {/* Semantic Accessible Progressbar Container */}
            <div
              role="progressbar"
              aria-label={`${tierTitle}: ${p0.name} (${p0Rate}%) vs ${p1.name} (${p1Rate}%)`}
              aria-valuenow={p0Rate}
              aria-valuemin={0}
              aria-valuemax={100}
              className="w-full h-2 rounded-full overflow-hidden flex gap-0.5 bg-slate-800/80 p-0.5"
            >
              <div
                style={{ width: `${p0Rate}%` }}
                className={`h-full rounded-l-full transition-all duration-500 ${
                  p0.proPick
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                    : 'bg-gradient-to-r from-sky-500 to-cyan-400'
                }`}
              />
              <div
                style={{ width: `${p1Rate}%` }}
                className={`h-full rounded-r-full transition-all duration-500 ${
                  p1.proPick
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                    : 'bg-gradient-to-r from-purple-500 to-indigo-400'
                }`}
              />
            </div>
          </div>
        )}

        {/* Perk Cards */}
        <div className="space-y-3">
          {perks.map((p, idx) => {
            const isPro = !!p.proPick;
            const rate = p.pickRate ?? (idx === 0 ? 55 : 45);
            const isPopular = rate >= 50;

            return (
              <div
                key={p.name}
                className={`relative rounded-xl border p-3 sm:p-3.5 transition-all duration-300 ${
                  isPro
                    ? isDark
                      ? 'bg-gradient-to-br from-amber-950/30 via-[#181d2c] to-[#141824] border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.15)] ring-1 ring-amber-400/40'
                      : 'bg-gradient-to-br from-amber-50/90 via-white to-white border-amber-400 shadow-sm ring-1 ring-amber-400/50'
                    : isDark
                    ? 'bg-slate-900/60 border-slate-800/90 hover:border-slate-700'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Header Row: Pro Pick Badge & Pick Rate Pill */}
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {isPro ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-sm">
                        <Star className="w-3 h-3 fill-slate-950 text-slate-950" />
                        {language === 'es' ? '★ ELECCIÓN PRO (OWCS / T500)' : '★ PRO PICK (OWCS / T500)'}
                      </span>
                    ) : isPopular ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-orange-500/15 text-orange-400 border border-orange-500/30">
                        <Flame className="w-2.5 h-2.5" />
                        {language === 'es' ? 'Más Popular en Ladder' : 'Most Popular in Ladder'}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-500/15 text-slate-400 border border-slate-500/30">
                        {language === 'es' ? 'Alternativa Táctica' : 'Tactical Alternative'}
                      </span>
                    )}
                  </div>

                  {/* Pick Rate Pill */}
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[11px] font-mono font-black px-2 py-0.5 rounded-md ${
                        isPro
                          ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                          : isPopular
                          ? 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                          : isDark
                          ? 'bg-slate-800 text-slate-400 border border-slate-700'
                          : 'bg-slate-100 text-slate-600 border border-slate-300'
                      }`}
                    >
                      {rate}% {language === 'es' ? 'selección general' : 'pick rate'}
                    </span>
                  </div>
                </div>

                {/* Perk Content (Icon, Name, Description) */}
                <div className="flex items-start gap-3">
                  <KitIconBadge
                    iconUrl={p.icon}
                    fallbackType="perk"
                    accent={isPro}
                    heroColor={isPro ? '#f59e0b' : heroColor}
                  />
                  <div className="min-w-0 flex-1">
                    <h4
                      className={`text-xs sm:text-sm font-black uppercase tracking-wide leading-tight flex items-center gap-1.5 ${
                        isPro
                          ? 'text-amber-400'
                          : isDark
                          ? 'text-white'
                          : 'text-slate-900'
                      }`}
                    >
                      <span>{p.name}</span>
                      {isPro && (
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 flex-shrink-0" />
                      )}
                    </h4>
                    <p
                      className={`text-[11px] sm:text-xs leading-snug mt-1 ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {p.description}
                    </p>
                  </div>
                </div>

                {/* Tactical Pro Rationale Pill (Highlighting WHY pros use this over the popular choice) */}
                {isPro && p.proReason && (
                  <div
                    className={`mt-2.5 p-2 rounded-lg border text-[11px] leading-relaxed flex items-start gap-2 ${
                      isDark
                        ? 'bg-amber-950/35 border-amber-500/35 text-amber-200'
                        : 'bg-amber-50 border-amber-300 text-amber-950'
                    }`}
                  >
                    <Star className="w-3.5 h-3.5 flex-shrink-0 fill-amber-400 text-amber-400 mt-0.5" />
                    <div>
                      <strong className="font-bold uppercase tracking-wider text-[10px] block text-amber-400 dark:text-amber-300 mb-0.5">
                        {language === 'es'
                          ? '¿Por qué lo eligen los profesionales?'
                          : 'Why do pros choose this?'}
                      </strong>
                      <span>{p.proReason}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* 1. COMPACT OVERWATCH HERO SELECTOR WITH HOVER PRELOADING & HERO SIGNATURE HIGHLIGHT */}
      <HeroSelectScreen
        selectedHeroId={selectedHeroId}
        onSelectHero={setSelectedHeroId}
        theme={theme}
        language={language}
        title={language === 'es' ? 'GALERÍA DE HÉROES — SELECCIONA UN PERSONAJE' : 'HERO GALLERY — SELECT A CHARACTER'}
        hideRoleLock={true}
        preloadFullKits={true}
        accentColor={heroColor}
        favoriteHeroIds={favoriteHeroIds}
        onToggleFavorite={toggleFavorite}
      />

      {/* 2. OFFICIAL OVERWATCH 2 INFOGRAPHIC HERO CARD WITH DYNAMIC HERO SIGNATURE COLOR */}
      <article
        style={
          {
            containerType: 'inline-size',
            '--hero-color': heroColor,
            borderColor: panelBorderColor,
            boxShadow: isDark
              ? `0 24px 60px -15px color-mix(in oklab, ${heroColor} 24%, black)`
              : `0 20px 50px -15px color-mix(in oklab, ${heroColor} 22%, #64748b)`,
          } as React.CSSProperties
        }
        className={`relative rounded-3xl border-2 overflow-hidden transition-all duration-300 ${
          isDark ? 'bg-[#111520] text-white' : 'bg-white text-slate-900'
        }`}
      >
        {/* Dynamic Hero Ambient Spotlight & Signature Geometric Arc */}
        <div
          aria-hidden="true"
          style={{
            background: `radial-gradient(circle at 18% 35%, color-mix(in oklab, ${heroColor} ${isDark ? '24%' : '18%'}, transparent), transparent 62%)`,
          }}
          className="pointer-events-none absolute inset-0 transition-all duration-500"
        />
        <div
          aria-hidden="true"
          style={{
            borderColor: `color-mix(in oklab, ${heroColor} 40%, transparent)`,
          }}
          className="pointer-events-none absolute -left-24 top-24 w-[430px] h-[520px] rounded-full border-[26px] opacity-60 transition-colors duration-500"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 p-3.5 sm:p-6 lg:p-8 items-stretch">
          {/* LEFT SHOWCASE COLUMN */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between relative">
            <header className="space-y-2.5 z-10">
              {/* Top Row: OVERWATCH 2 + Prev/Next Hero Switcher */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="inline-flex items-center space-x-1.5 select-none">
                  <span
                    className={`text-xs sm:text-base font-black uppercase tracking-[0.22em] ${
                      isDark ? 'text-slate-100' : 'text-slate-800'
                    }`}
                  >
                    OVERWATCH
                  </span>
                  <span
                    style={{ backgroundColor: heroColor }}
                    className="px-1.5 py-0.5 rounded text-slate-950 font-black text-xs sm:text-sm leading-none shadow-sm transition-colors duration-300"
                  >
                    2
                  </span>
                </div>

                {/* Main/Favorito Touch Toggle & Quick Prev / Next Stepper */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  <button
                    type="button"
                    onClick={() => toggleFavorite(selectedHero.id)}
                    className={`px-2.5 py-1 rounded-lg border text-xs font-black uppercase tracking-wider transition flex items-center space-x-1.5 shadow-sm active:scale-95 cursor-pointer ${
                      isFavorite(selectedHero.id)
                        ? 'bg-amber-500 text-slate-950 border-amber-300 ring-2 ring-amber-400/40 shadow-amber-500/20'
                        : isDark
                        ? 'bg-slate-900/80 border-slate-700 text-amber-400 hover:border-amber-400'
                        : 'bg-white border-slate-300 text-amber-600 hover:border-amber-400'
                    }`}
                    title={isFavorite(selectedHero.id) ? t.mainActiveTooltip : t.mainMarkTooltip}
                  >
                    <Star className={`w-3.5 h-3.5 ${isFavorite(selectedHero.id) ? 'fill-current text-slate-950' : 'text-amber-400'}`} />
                    <span>{isFavorite(selectedHero.id) ? t.mainActive : t.mainMark}</span>
                  </button>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => stepHero(-1)}
                      title={language === 'en' ? 'Previous hero' : 'Héroe anterior'}
                      className={`p-1.5 rounded-lg border transition ${
                        isDark
                          ? 'bg-slate-900/80 border-slate-700 text-slate-300 hover:text-white hover:border-slate-500'
                          : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => stepHero(1)}
                      title={language === 'en' ? 'Next hero' : 'Siguiente héroe'}
                      className={`p-1.5 rounded-lg border transition ${
                        isDark
                          ? 'bg-slate-900/80 border-slate-700 text-slate-300 hover:text-white hover:border-slate-500'
                          : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Giant Italic Hero Name in Hero Signature Gradient + Role Emblem */}
              <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                <h1
                  style={{
                    fontSize: 'clamp(1.9rem, 1.3rem + 2.8vw, 4.1rem)',
                    backgroundImage: isDark
                      ? `linear-gradient(180deg, #ffffff 10%, color-mix(in oklab, ${heroColor} 55%, white) 55%, ${heroColor} 100%)`
                      : `linear-gradient(180deg, #0f172a 5%, color-mix(in oklab, ${heroColor} 75%, #0f172a) 100%)`,
                    filter: isDark
                      ? `drop-shadow(0 6px 20px color-mix(in oklab, ${heroColor} 32%, transparent))`
                      : undefined,
                  }}
                  className="font-black italic uppercase leading-[0.92] tracking-tight bg-clip-text text-transparent transition-all duration-300 truncate max-w-full"
                >
                  {selectedHero.name}
                </h1>

                <div
                  style={{
                    borderColor: heroColor,
                    boxShadow: `0 0 16px color-mix(in oklab, ${heroColor} 35%, transparent)`,
                  }}
                  title={
                    selectedHero.role === 'tank'
                      ? `${t.roleLabel}: ${t.tank}`
                      : selectedHero.role === 'damage'
                      ? `${t.roleLabel}: ${t.damageDps}`
                      : `${t.roleLabel}: ${t.support}`
                  }
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 p-0.5 flex items-center justify-center flex-shrink-0 bg-slate-950 text-white transition-all duration-300"
                >
                  <div
                    style={{ borderColor: `color-mix(in oklab, ${heroColor} 55%, white)` }}
                    className="w-full h-full rounded-full border flex items-center justify-center"
                  >
                    <RoleEmblem role={selectedHero.role} className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Tactical Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span
                  style={{
                    color: sectionTitleColor,
                    borderColor: `color-mix(in oklab, ${heroColor} 50%, transparent)`,
                    backgroundColor: `color-mix(in oklab, ${heroColor} 14%, transparent)`,
                  }}
                  title={`${t.subroleLabel}: ${getSubroleDisplayName(subMeta, language)} (${subMeta.englishName})\n${t.passiveLabel}: ${getSubrolePassiveName(subMeta, language)}\n${getSubrolePassiveDescription(subMeta, language)}`}
                  className="inline-flex items-center space-x-1 text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-full border transition-colors duration-300 cursor-help"
                >
                  <span style={{ color: subMeta.accentColor }}>●</span>
                  <span>{getSubroleDisplayName(subMeta, language)}</span>
                  <span className="opacity-75 font-normal">({getSubrolePassiveName(subMeta, language)})</span>
                </span>
                <span
                  className={`text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded-full border ${
                    selectedHero.style === 'dive'
                      ? isDark
                        ? 'bg-purple-950/80 text-purple-300 border-purple-500/40'
                        : 'bg-purple-100 text-purple-800 border-purple-300'
                      : selectedHero.style === 'brawl'
                      ? isDark
                        ? 'bg-amber-950/80 text-amber-300 border-amber-500/40'
                        : 'bg-amber-100 text-amber-800 border-amber-300'
                      : isDark
                      ? 'bg-sky-950/80 text-sky-300 border-sky-500/40'
                      : 'bg-sky-100 text-sky-800 border-sky-300'
                  }`}
                >
                  {selectedHero.style}
                </span>
                <span
                  style={{ backgroundColor: heroColor }}
                  className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded-full text-slate-950 shadow-sm"
                >
                  Tier {selectedHero.tier || 'B'}
                </span>
                <span
                  className={`inline-flex items-center space-x-0.5 text-[10px] px-2 py-0.5 rounded-full border ${
                    isDark
                      ? 'bg-slate-800/90 border-slate-700 text-amber-400'
                      : 'bg-slate-100 border-slate-300 text-amber-500'
                  }`}
                >
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-2.5 h-2.5 ${
                        idx < selectedHero.difficulty ? 'fill-current' : 'opacity-25'
                      }`}
                    />
                  ))}
                </span>
              </div>

              {/* Segmented Overwatch Health / Armor / Shields Bar */}
              <div
                className={`mt-2 p-2.5 rounded-xl border ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase mb-1.5">
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                    {t.totalHealth}:{' '}
                    <strong style={{ color: sectionTitleColor }} className="text-xs">
                      {hp.total} HP
                    </strong>
                  </span>
                  <span className="text-slate-400">
                    {hp.health} {t.healthHp}
                    {hp.armor > 0 ? ` · ${hp.armor} ${t.armorHp}` : ''}
                    {hp.shields > 0 ? ` · ${hp.shields} ${t.shieldsHp}` : ''}
                  </span>
                </div>
                <div className="w-full h-2.5 rounded-full overflow-hidden flex gap-0.5 bg-slate-800/50 p-0.5">
                  {hp.health > 0 && (
                    <div
                      style={{ width: `${healthPct}%` }}
                      className={`h-full rounded-l-full ${isDark ? 'bg-white' : 'bg-slate-700'}`}
                    />
                  )}
                  {hp.armor > 0 && (
                    <div style={{ width: `${armorPct}%` }} className="h-full bg-amber-500" />
                  )}
                  {hp.shields > 0 && (
                    <div
                      style={{ width: `${shieldsPct}%` }}
                      className="h-full rounded-r-full bg-cyan-400"
                    />
                  )}
                </div>
              </div>
            </header>

            {/* Full-Body Hero Render with High Fetch Priority & Instant Shimmer Fallback */}
            <div className="relative my-2 sm:my-3 flex-1 min-h-[220px] sm:min-h-[350px] flex items-end justify-center overflow-hidden">
              {!portraitLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div
                    style={{
                      borderColor: heroColor,
                      boxShadow: `0 0 40px color-mix(in oklab, ${heroColor} 45%, transparent)`,
                    }}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 overflow-hidden animate-pulse bg-slate-900/60"
                  >
                    <img
                      src={selectedHero.icon}
                      alt=""
                      className="w-full h-full object-cover opacity-80"
                    />
                  </div>
                </div>
              )}

              <img
                key={selectedHero.id}
                src={kit?.fullPortrait || selectedHero.icon}
                alt={selectedHero.name}
                fetchPriority="high"
                decoding="async"
                style={{
                  aspectRatio: '4 / 5',
                  filter: `drop-shadow(0 18px 28px rgba(0,0,0,0.55)) drop-shadow(0 0 26px color-mix(in oklab, ${heroColor} 25%, transparent))`,
                }}
                onLoad={() => setPortraitLoaded(true)}
                onError={(e) => {
                  setPortraitLoaded(true);
                  if (selectedHero.icon && e.currentTarget.src !== selectedHero.icon) {
                    e.currentTarget.src = selectedHero.icon;
                  }
                }}
                className={`max-h-[280px] sm:max-h-[380px] md:max-h-[440px] w-auto object-contain object-bottom transition-all duration-300 hover:scale-[1.03] ${
                  portraitLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              />
            </div>

            {/* Compact Lore & Biographical Strip */}
            <div
              className={`rounded-2xl p-3 border text-xs space-y-2 z-10 ${
                isDark
                  ? 'bg-slate-900/85 border-slate-800 text-slate-300'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <p className="leading-relaxed text-[11px] sm:text-xs">{selectedHero.description}</p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 border-t border-slate-700/30 text-[10px] font-mono text-slate-400">
                <span className="inline-flex items-center gap-1">
                  <MapPin style={{ color: sectionTitleColor }} className="w-3 h-3" />
                  {selectedHero.country}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Users className="w-3 h-3 text-orange-400" />
                  {selectedHero.affiliation}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  Debut {selectedHero.releaseYear} · {selectedHero.age} {language === 'en' ? 'years old' : 'años'}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT DUAL INFOGRAPHIC PANELS: ABILITY KIT + PERKS */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-5 justify-between">
            {/* PANEL 1: ABILITY KIT */}
            <section
              style={{ borderColor: panelBorderColor }}
              className={`rounded-2xl border-2 overflow-hidden flex flex-col sm:flex-row flex-1 shadow-lg transition-colors duration-300 ${
                isDark ? 'bg-[#171c28]/90' : 'bg-slate-50/90'
              }`}
            >
              {/* Mobile Top Header Banner */}
              <div
                style={{ background: stripGradient }}
                className="text-slate-950 px-3 py-1.5 flex items-center justify-center sm:hidden transition-all duration-300"
              >
                <span className="font-black uppercase tracking-[0.2em] text-xs select-none">
                  {t.heroKit}
                </span>
              </div>

              {/* Desktop Left Vertical Strip */}
              <div
                style={{ background: stripGradient }}
                className="hidden sm:flex text-slate-950 px-3 py-6 items-center justify-center sm:w-10 flex-shrink-0 transition-all duration-300"
              >
                <span className="font-black uppercase tracking-[0.22em] text-xs sm:text-sm [writing-mode:vertical-rl] rotate-180 select-none">
                  {t.heroKit}
                </span>
              </div>

              <div className="flex-1 p-3.5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Sub-column Left: WEAPON + ULTIMATE */}
                <div className="space-y-5 sm:space-y-6">
                  <div className="space-y-3 sm:space-y-3.5">
                    <h3
                      style={{ color: sectionTitleColor }}
                      className="text-xs sm:text-sm font-black uppercase tracking-[0.14em]"
                    >
                      {t.weaponSection}
                    </h3>
                    <div className="space-y-3.5 sm:space-y-4">
                      {(kit?.weapons || []).map(w => renderKitItem(w, 'weapon', false))}
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-3.5 pt-3 border-t border-slate-700/30">
                    <h3
                      style={{ color: sectionTitleColor }}
                      className="text-xs sm:text-sm font-black uppercase tracking-[0.14em]"
                    >
                      {t.ultimateSection}
                    </h3>
                    <div className="space-y-3.5 sm:space-y-4">
                      {(kit?.ultimate || []).map(u => renderKitItem(u, 'ult', true))}
                    </div>
                  </div>
                </div>

                {/* Sub-column Right: ABILITIES + PASSIVES */}
                <div className="space-y-5 sm:space-y-6">
                  {kit?.abilities && kit.abilities.length > 0 && (
                    <div className="space-y-3 sm:space-y-3.5">
                      <h3
                        style={{ color: sectionTitleColor }}
                        className="text-xs sm:text-sm font-black uppercase tracking-[0.14em]"
                      >
                        {t.abilitiesSection}
                      </h3>
                      <div className="space-y-3.5 sm:space-y-4">
                        {kit.abilities.map(ab => renderKitItem(ab, 'ability', false))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-3 sm:space-y-3.5 pt-3 border-t border-slate-700/30">
                    <h3
                      style={{ color: sectionTitleColor }}
                      className="text-xs sm:text-sm font-black uppercase tracking-[0.14em]"
                    >
                      {t.passivesSection}
                    </h3>
                    <div className="space-y-3.5 sm:space-y-4">
                      {(kit?.passives || []).map(pa => renderKitItem(pa, 'passive', false))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* PANEL 2: PERKS (MINOR LEVEL 2 & MAJOR LEVEL 3) */}
            <section
              style={{ borderColor: panelBorderColor }}
              className={`rounded-2xl border-2 overflow-hidden flex flex-col sm:flex-row shadow-lg transition-colors duration-300 ${
                isDark ? 'bg-[#171c28]/90' : 'bg-slate-50/90'
              }`}
            >
              {/* Mobile Top Header Banner */}
              <div
                style={{ background: stripGradient }}
                className="text-slate-950 px-3 py-1.5 flex items-center justify-center sm:hidden transition-all duration-300"
              >
                <span className="font-black uppercase tracking-[0.2em] text-xs select-none">
                  {t.perksSection}
                </span>
              </div>

              {/* Desktop Left Vertical Strip */}
              <div
                style={{ background: stripGradient }}
                className="hidden sm:flex text-slate-950 px-3 py-6 items-center justify-center sm:w-10 flex-shrink-0 transition-all duration-300"
              >
                <span className="font-black uppercase tracking-[0.22em] text-xs sm:text-sm [writing-mode:vertical-rl] rotate-180 select-none">
                  {t.perksSection}
                </span>
              </div>

              <div className="flex-1 p-3.5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {renderPerkTier(
                  t.minorPerkLevel,
                  t.minorPerkSubtitle,
                  enrichedPerks.minor,
                  false
                )}

                {renderPerkTier(
                  t.majorPerkLevel,
                  t.majorPerkSubtitle,
                  enrichedPerks.major,
                  true
                )}
              </div>
            </section>
          </div>
        </div>

        {/* 3. MAP SYNERGY BREAKDOWN (MEJORES Y PEORES MAPAS DEL PERSONAJE) */}
        <section
          className={`relative z-10 border-t px-5 sm:px-8 py-5 space-y-4 ${
            isDark ? 'bg-[#141925]/90 border-slate-800' : 'bg-slate-50/90 border-slate-200'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div className="flex items-center gap-2">
              <MapPin style={{ color: sectionTitleColor }} className="w-4 h-4 flex-shrink-0" />
              <h3
                style={{ color: sectionTitleColor }}
                className="text-xs sm:text-sm font-black uppercase tracking-[0.14em]"
              >
                {t.tacticalMapSynergies} ({selectedHero.name.toUpperCase()})
              </h3>
            </div>
            <p className={`text-xs max-w-2xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {mapBreakdown.archetypeSummary}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Best Maps */}
            <div
              className={`rounded-2xl border p-3.5 space-y-2.5 ${
                isDark ? 'bg-slate-950/60 border-emerald-500/25' : 'bg-white border-emerald-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t.favorableMaps}</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">{t.favorableMapsSub}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {mapBreakdown.bestMaps.slice(0, 4).map(({ map, eval: ev }) => (
                  <div
                    key={map.id}
                    className={`group relative rounded-xl overflow-hidden border flex items-stretch min-h-[68px] ${
                      isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="w-20 flex-shrink-0 relative overflow-hidden">
                      <img
                        src={map.image}
                        alt={map.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                      />
                      <span className="absolute bottom-1 left-1 px-1 py-0.2 rounded bg-emerald-600 text-white text-[9px] font-mono font-black shadow">
                        +{ev.score}
                      </span>
                    </div>
                    <div className="p-2 flex-1 min-w-0 flex flex-col justify-center">
                      <div className="flex items-center justify-between gap-1">
                        <span className={`text-xs font-black truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {map.name}
                        </span>
                        <span className="text-[9px] font-mono uppercase text-slate-400 flex-shrink-0">
                          {map.mode.split(' ')[0]}
                        </span>
                      </div>
                      <p className={`text-[10px] leading-snug mt-0.5 line-clamp-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {ev.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Worst Maps */}
            <div
              className={`rounded-2xl border p-3.5 space-y-2.5 ${
                isDark ? 'bg-slate-950/60 border-rose-500/25' : 'bg-white border-rose-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-wider text-rose-500 flex items-center gap-1.5">
                  <AlertOctagon className="w-3.5 h-3.5" />
                  <span>{t.unfavorableMaps}</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">{t.unfavorableMapsSub}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {mapBreakdown.worstMaps.slice(0, 4).map(({ map, eval: ev }) => (
                  <div
                    key={map.id}
                    className={`group relative rounded-xl overflow-hidden border flex items-stretch min-h-[68px] ${
                      isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="w-20 flex-shrink-0 relative overflow-hidden">
                      <img
                        src={map.image}
                        alt={map.name}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale-[35%] transition duration-300 group-hover:scale-110"
                      />
                      <span className="absolute bottom-1 left-1 px-1 py-0.2 rounded bg-rose-600 text-white text-[9px] font-mono font-black shadow">
                        {ev.score}
                      </span>
                    </div>
                    <div className="p-2 flex-1 min-w-0 flex flex-col justify-center">
                      <div className="flex items-center justify-between gap-1">
                        <span className={`text-xs font-black truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {map.name}
                        </span>
                        <span className="text-[9px] font-mono uppercase text-slate-400 flex-shrink-0">
                          {map.mode.split(' ')[0]}
                        </span>
                      </div>
                      <p className={`text-[10px] leading-snug mt-0.5 line-clamp-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {ev.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. BOTTOM QUICK MATCHUPS STRIP */}
        <footer
          className={`relative z-10 border-t px-5 sm:px-8 py-4 grid grid-cols-1 md:grid-cols-2 gap-4 ${
            isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-100/80 border-slate-200'
          }`}
        >
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-black uppercase tracking-wider text-emerald-500 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t.favoredAgainstCount} ({selectedHero.counters.strongAgainst.length})</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {topStrong.map(target => {
                const isHard = selectedHero.counters.hardStrongAgainst?.includes(target.id);
                return (
                  <button
                    key={target.id}
                    type="button"
                    onClick={() => setSelectedHeroId(target.id)}
                    title={selectedHero.counters.strongDetails?.[target.id]?.motivo || target.name}
                    className={`inline-flex items-center space-x-1.5 pr-2.5 pl-1 py-1 rounded-full text-xs font-bold border transition hover:scale-105 ${
                      isHard
                        ? isDark
                          ? 'bg-emerald-950/80 border-emerald-500/60 text-emerald-200'
                          : 'bg-emerald-100 border-emerald-400 text-emerald-900'
                        : isDark
                        ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-emerald-500/50'
                        : 'bg-white border-slate-300 text-slate-800 hover:border-emerald-500'
                    }`}
                  >
                    <img
                      src={target.icon}
                      alt=""
                      loading="lazy"
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span>{target.name}</span>
                    {isHard && (
                      <span className="text-[9px] px-1 rounded bg-emerald-500 text-slate-950 font-black uppercase">
                        Hard
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-1.5 text-xs font-black uppercase tracking-wider text-rose-500 mb-2">
              <AlertOctagon className="w-3.5 h-3.5" />
              <span>{t.counteredByCount} ({selectedHero.counters.weakAgainst.length})</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {topWeak.map(threat => {
                const isHard = selectedHero.counters.hardWeakAgainst?.includes(threat.id);
                return (
                  <button
                    key={threat.id}
                    type="button"
                    onClick={() => setSelectedHeroId(threat.id)}
                    title={selectedHero.counters.weakDetails?.[threat.id]?.motivo || threat.name}
                    className={`inline-flex items-center space-x-1.5 pr-2.5 pl-1 py-1 rounded-full text-xs font-bold border transition hover:scale-105 ${
                      isHard
                        ? isDark
                          ? 'bg-rose-950/80 border-rose-500/60 text-rose-200'
                          : 'bg-rose-100 border-rose-400 text-rose-900'
                        : isDark
                        ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-rose-500/50'
                        : 'bg-white border-slate-300 text-slate-800 hover:border-rose-500'
                    }`}
                  >
                    <img
                      src={threat.icon}
                      alt=""
                      loading="lazy"
                      className="w-5 h-5 rounded-full object-cover"
                    />
                    <span>{threat.name}</span>
                    {isHard && (
                      <span className="text-[9px] px-1 rounded bg-rose-500 text-white font-black uppercase">
                        Counter
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

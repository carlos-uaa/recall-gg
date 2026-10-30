import React, { useState } from 'react';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import { OVERWATCH_HERO_KITS } from '../../games/overwatch/heroKits';
import type { Hero, HeroAbilityItem, HeroPerkItem } from '../../types/game';
import { HeroSelectScreen } from '../coach/HeroSelectScreen';
import { TRANSLATIONS, type Language } from '../../utils/i18n';
import {
  Shield,
  Swords,
  Heart,
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
} from 'lucide-react';

interface HeroesViewProps {
  language?: Language;
  theme?: 'dark' | 'light';
}

// Official-style Overwatch Role Emblem SVG (Tank shield / Damage 3-rounds / Support cross)
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
        <path d="M6.5 4C5.7 4 5 5.3 5 7v5h3V7c0-1.7-.7-3-1.5-3zM5 13.5V19h3v-5.5H5zm7-9.5c-.8 0-1.5 1.3-1.5 3v5h3V7c0-1.7-.7-3-1.5-3zm-1.5 9.5V19h3v-5.5h-3zm7-9.5c-.8 0-1.5 1.3-1.5 3v5h3V7c0-1.7-.7-3-1.5-3zM16 13.5V19h3v-5.5h-3z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5V4z" />
    </svg>
  );
};

// Circular double-ring icon badge (always dark interior so official white Blizzard PNG icons stay crisp in both themes)
const KitIconBadge: React.FC<{
  iconUrl?: string;
  fallbackType: 'weapon' | 'ult' | 'ability' | 'passive' | 'perk' | 'role-tank' | 'role-damage' | 'role-support';
  accent?: boolean;
}> = ({ iconUrl, fallbackType, accent = false }) => {
  const [imgErr, setImgErr] = useState(false);

  const renderFallback = () => {
    if (fallbackType === 'role-tank') return <RoleEmblem role="tank" className="w-6 h-6 text-white" />;
    if (fallbackType === 'role-damage') return <RoleEmblem role="damage" className="w-6 h-6 text-white" />;
    if (fallbackType === 'role-support') return <RoleEmblem role="support" className="w-6 h-6 text-white" />;
    if (fallbackType === 'weapon') return <Crosshair className="w-6 h-6 text-white" />;
    if (fallbackType === 'ult') return <Flame className="w-6 h-6 text-cyan-300" />;
    if (fallbackType === 'perk') return <Sparkles className="w-5 h-5 text-cyan-300" />;
    if (fallbackType === 'passive') return <Shield className="w-5 h-5 text-white" />;
    return <Zap className="w-5 h-5 text-white" />;
  };

  return (
    <div
      className={`relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 flex items-center justify-center shadow-md ${
        accent
          ? 'bg-gradient-to-br from-cyan-300 to-teal-500 shadow-cyan-500/25'
          : 'bg-gradient-to-br from-slate-300/80 to-slate-500/80'
      }`}
    >
      <div
        className={`w-full h-full rounded-full flex items-center justify-center border ${
          accent
            ? 'bg-slate-950 border-cyan-400/60'
            : 'bg-slate-900 border-slate-600/80'
        }`}
      >
        {iconUrl && !imgErr ? (
          <img
            src={iconUrl}
            alt=""
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain brightness-110"
            loading="lazy"
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
  const t = TRANSLATIONS[language];
  const isDark = theme === 'dark';

  const [selectedHeroId, setSelectedHeroId] = useState<string>('freja');

  const selectedHero: Hero =
    OVERWATCH_HEROES.find(h => h.id === selectedHeroId) || OVERWATCH_HEROES[0];

  const kit = OVERWATCH_HERO_KITS[selectedHero.id];

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
      <div key={item.name} className="flex items-start gap-3.5">
        <KitIconBadge
          iconUrl={item.icon}
          fallbackType={resolvedFallback}
          accent={accent}
        />
        <div className="min-w-0 flex-1 pt-0.5">
          <h4
            className={`text-xs sm:text-sm font-black uppercase tracking-wide leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
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

  return (
    <div className="space-y-6">
      {/* 1. COMPACT OVERWATCH HERO SELECTOR (IDENTICAL STYLE TO TACTICAL COACH) */}
      <HeroSelectScreen
        selectedHeroId={selectedHeroId}
        onSelectHero={setSelectedHeroId}
        theme={theme}
        title={language === 'es' ? 'GALERÍA DE HÉROES — SELECCIONA UN PERSONAJE' : 'HERO GALLERY — SELECT A CHARACTER'}
        hideRoleLock={true}
      />

      {/* 2. OFFICIAL OVERWATCH 2 INFOGRAPHIC HERO CARD (CONTAINER-QUERY ADAPTIVE) */}
      <article
        style={{ containerType: 'inline-size' }}
        className={`relative rounded-3xl border overflow-hidden shadow-2xl transition-colors duration-200 ${
          isDark
            ? 'bg-[#12161f] border-slate-800 text-white'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Subtle decorative background geometric pattern & cyan arc */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -left-24 top-28 w-[420px] h-[520px] rounded-full border-[26px] opacity-35 ${
            isDark ? 'border-cyan-400/30' : 'border-cyan-400/40'
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 opacity-[0.03] ${
            isDark ? 'bg-[radial-gradient(#38bdf8_1px,transparent_1px)]' : 'bg-[radial-gradient(#0284c7_1px,transparent_1px)]'
          } [background-size:20px_20px]`}
        />

        <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-6 p-5 sm:p-7 lg:p-8 items-stretch">
          {/* LEFT SHOWCASE COLUMN: LOGO, GIANT HERO NAME, STATS & FULL-BODY RENDER */}
          <div className="xl:col-span-4 flex flex-col justify-between relative">
            <header className="space-y-2 z-10">
              {/* OVERWATCH 2 Header Badge */}
              <div className="inline-flex items-center space-x-1.5 select-none">
                <span
                  className={`text-sm sm:text-base font-black uppercase tracking-[0.22em] ${
                    isDark ? 'text-slate-100' : 'text-slate-800'
                  }`}
                >
                  OVERWATCH
                </span>
                <span className="px-1.5 py-0.5 rounded bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm leading-none shadow-sm">
                  2
                </span>
              </div>

              {/* Giant Italic Hero Name + Role Circle Badge */}
              <div className="flex items-center gap-3 flex-wrap">
                <h1
                  style={{ fontSize: 'clamp(2.35rem, 1.5rem + 3.6vw, 4.1rem)' }}
                  className={`font-black italic uppercase leading-[0.92] tracking-tight bg-clip-text text-transparent ${
                    isDark
                      ? 'bg-gradient-to-b from-white via-cyan-100 to-cyan-300 drop-shadow-[0_4px_18px_rgba(34,211,238,0.2)]'
                      : 'bg-gradient-to-b from-slate-900 via-slate-800 to-cyan-700'
                  }`}
                >
                  {selectedHero.name}
                </h1>

                {/* Role Double-Ring Badge (like Freja's Damage circle) */}
                <div
                  title={
                    selectedHero.role === 'tank'
                      ? 'Rol: Tanque'
                      : selectedHero.role === 'damage'
                      ? 'Rol: Daño (DPS)'
                      : 'Rol: Apoyo'
                  }
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 p-0.5 flex items-center justify-center flex-shrink-0 ${
                    isDark
                      ? 'border-white/80 bg-slate-900/90 text-white'
                      : 'border-slate-800 bg-slate-900 text-white'
                  }`}
                >
                  <div className="w-full h-full rounded-full border border-white/40 flex items-center justify-center">
                    <RoleEmblem role={selectedHero.role} className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Tactical Pills: Subrole, Style, Tier & Difficulty */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                <span
                  className={`text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-full border ${
                    isDark
                      ? 'bg-cyan-500/15 text-cyan-300 border-cyan-400/40'
                      : 'bg-cyan-50 text-cyan-800 border-cyan-300'
                  }`}
                >
                  {selectedHero.subrole}
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
                <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded-full bg-orange-500 text-white shadow-sm">
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
                    SALUD TOTAL: <strong className="text-cyan-400 text-xs">{hp.total} HP</strong>
                  </span>
                  <span className="text-slate-400">
                    {hp.health} Vida
                    {hp.armor > 0 ? ` · ${hp.armor} Armadura` : ''}
                    {hp.shields > 0 ? ` · ${hp.shields} Escudo` : ''}
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

            {/* Full-Body Hero Render */}
            <div className="relative my-3 flex-1 min-h-[280px] sm:min-h-[360px] flex items-end justify-center overflow-hidden">
              <img
                key={selectedHero.id}
                src={kit?.fullPortrait || selectedHero.icon}
                alt={selectedHero.name}
                style={{ aspectRatio: '4 / 5' }}
                onError={(e) => {
                  if (selectedHero.icon && e.currentTarget.src !== selectedHero.icon) {
                    e.currentTarget.src = selectedHero.icon;
                  }
                }}
                className="max-h-[430px] w-auto object-contain object-bottom drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:scale-[1.03]"
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
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  {selectedHero.country}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Users className="w-3 h-3 text-orange-400" />
                  {selectedHero.affiliation}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-emerald-400" />
                  Debut {selectedHero.releaseYear} · {selectedHero.age} años
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT DUAL INFOGRAPHIC PANELS: ABILITY KIT + PERKS */}
          <div className="xl:col-span-8 flex flex-col gap-5 justify-between">
            {/* PANEL 1: ABILITY KIT */}
            <section
              className={`rounded-2xl border-2 overflow-hidden flex flex-col sm:flex-row flex-1 shadow-lg ${
                isDark
                  ? 'bg-[#1a202c]/90 border-cyan-400/50'
                  : 'bg-slate-50/90 border-cyan-500/60'
              }`}
            >
              {/* Left Vertical Cyan Strip ("ABILITY KIT") */}
              <div className="bg-gradient-to-b from-cyan-300 via-cyan-400 to-teal-400 text-slate-950 px-3 py-2 sm:py-6 flex items-center justify-center sm:w-10 flex-shrink-0">
                <span className="font-black uppercase tracking-[0.22em] text-xs sm:text-sm sm:[writing-mode:vertical-rl] sm:rotate-180 select-none">
                  {language === 'es' ? 'KIT DE HABILIDADES' : 'ABILITY KIT'}
                </span>
              </div>

              {/* 2-Column Content Inside Ability Kit */}
              <div className="flex-1 p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sub-column Left: WEAPON + ULTIMATE */}
                <div className="space-y-6">
                  {/* WEAPON */}
                  <div className="space-y-3.5">
                    <h3
                      className={`text-xs sm:text-sm font-black uppercase tracking-[0.14em] ${
                        isDark ? 'text-cyan-300' : 'text-cyan-700'
                      }`}
                    >
                      {language === 'es' ? 'ARMA' : 'WEAPON'}
                    </h3>
                    <div className="space-y-4">
                      {(kit?.weapons || []).map(w => renderKitItem(w, 'weapon', false))}
                    </div>
                  </div>

                  {/* ULTIMATE */}
                  <div className="space-y-3.5 pt-2 border-t border-slate-700/30">
                    <h3
                      className={`text-xs sm:text-sm font-black uppercase tracking-[0.14em] ${
                        isDark ? 'text-cyan-300' : 'text-cyan-700'
                      }`}
                    >
                      {language === 'es' ? 'DEFINITIVA' : 'ULTIMATE'}
                    </h3>
                    <div className="space-y-4">
                      {(kit?.ultimate || []).map(u => renderKitItem(u, 'ult', true))}
                    </div>
                  </div>
                </div>

                {/* Sub-column Right: ABILITIES + PASSIVES */}
                <div className="space-y-6">
                  {/* ABILITIES */}
                  {kit?.abilities && kit.abilities.length > 0 && (
                    <div className="space-y-3.5">
                      <h3
                        className={`text-xs sm:text-sm font-black uppercase tracking-[0.14em] ${
                          isDark ? 'text-cyan-300' : 'text-cyan-700'
                        }`}
                      >
                        {language === 'es' ? 'HABILIDADES' : 'ABILITIES'}
                      </h3>
                      <div className="space-y-4">
                        {kit.abilities.map(ab => renderKitItem(ab, 'ability', false))}
                      </div>
                    </div>
                  )}

                  {/* PASSIVES */}
                  <div className="space-y-3.5 pt-2 border-t border-slate-700/30">
                    <h3
                      className={`text-xs sm:text-sm font-black uppercase tracking-[0.14em] ${
                        isDark ? 'text-cyan-300' : 'text-cyan-700'
                      }`}
                    >
                      {language === 'es' ? 'PASIVAS' : 'PASSIVES'}
                    </h3>
                    <div className="space-y-4">
                      {(kit?.passives || []).map(pa => renderKitItem(pa, 'passive', false))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* PANEL 2: PERKS (MINOR LEVEL 2 & MAJOR LEVEL 3) */}
            <section
              className={`rounded-2xl border-2 overflow-hidden flex flex-col sm:flex-row shadow-lg ${
                isDark
                  ? 'bg-[#1a202c]/90 border-cyan-400/50'
                  : 'bg-slate-50/90 border-cyan-500/60'
              }`}
            >
              {/* Left Vertical Cyan Strip ("PERKS") */}
              <div className="bg-gradient-to-b from-cyan-300 via-cyan-400 to-teal-400 text-slate-950 px-3 py-2 sm:py-6 flex items-center justify-center sm:w-10 flex-shrink-0">
                <span className="font-black uppercase tracking-[0.22em] text-xs sm:text-sm sm:[writing-mode:vertical-rl] sm:rotate-180 select-none">
                  PERKS
                </span>
              </div>

              <div className="flex-1 p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* MINOR (LEVEL 2) */}
                <div className="space-y-3.5">
                  <h3
                    className={`text-xs sm:text-sm font-black uppercase tracking-[0.14em] ${
                      isDark ? 'text-cyan-300' : 'text-cyan-700'
                    }`}
                  >
                    {language === 'es' ? 'MENOR (NIVEL 2)' : 'MINOR (LEVEL 2)'}
                  </h3>
                  <div className="space-y-4">
                    {(kit?.perks.minor || []).map(p => renderKitItem(p, 'perk', false))}
                  </div>
                </div>

                {/* MAJOR (LEVEL 3) */}
                <div className="space-y-3.5">
                  <h3
                    className={`text-xs sm:text-sm font-black uppercase tracking-[0.14em] ${
                      isDark ? 'text-cyan-300' : 'text-cyan-700'
                    }`}
                  >
                    {language === 'es' ? 'MAYOR (NIVEL 3)' : 'MAJOR (LEVEL 3)'}
                  </h3>
                  <div className="space-y-4">
                    {(kit?.perks.major || []).map(p => renderKitItem(p, 'perk', true))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* 3. BOTTOM QUICK MATCHUPS STRIP (CLICK ANY HERO TO JUMP DIRECTLY TO THEIR KIT CARD!) */}
        <footer
          className={`relative z-10 border-t px-5 sm:px-8 py-4 grid grid-cols-1 md:grid-cols-2 gap-4 ${
            isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-100/80 border-slate-200'
          }`}
        >
          {/* Strong Against Quick Chips */}
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-black uppercase tracking-wider text-emerald-500 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>
                Favorable contra ({selectedHero.counters.strongAgainst.length})
              </span>
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

          {/* Weak Against Quick Chips */}
          <div>
            <div className="flex items-center space-x-1.5 text-xs font-black uppercase tracking-wider text-rose-500 mb-2">
              <AlertOctagon className="w-3.5 h-3.5" />
              <span>
                Sufre contra / Counters ({selectedHero.counters.weakAgainst.length})
              </span>
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

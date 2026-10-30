import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { Hero, GuessFeedback } from '../../types/game';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import { OVERWATCH_HERO_KITS } from '../../games/overwatch/heroKits';
import { compareGuess, getDailyHero, getRandomHero } from '../../core/guesserEngine';
import { HeroAvatar } from '../common/HeroAvatar';
import { TRANSLATIONS, type Language } from '../../utils/i18n';
import confetti from 'canvas-confetti';
import {
  Gamepad2,
  RotateCcw,
  ArrowUp,
  ArrowDown,
  Search,
  Share2,
  Trophy,
  Calendar,
  Flame,
  Zap,
  Swords,
  Eye,
  Heart,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

interface GuesserViewProps {
  language?: Language;
  theme?: 'dark' | 'light';
}

type ArcadeGameId = 'classic' | 'kit-quiz' | 'counter-clash' | 'silhouette';

interface KitQuestion {
  hero: Hero;
  categoryLabel: string;
  itemName: string;
  redactedDescription: string;
  icon?: string;
  options: Hero[];
}

interface CounterQuestion {
  enemy: Hero;
  correctHero: Hero;
  isHard: boolean;
  motivo: string;
  options: Hero[];
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function redactHeroName(text: string, heroName: string): string {
  const escaped = heroName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escaped, 'gi');
  return text.replace(regex, '[HÉROE]');
}

function generateKitQuestion(excludeHeroId?: string): KitQuestion {
  const candidates = OVERWATCH_HEROES.filter(h => h.id !== excludeHeroId && OVERWATCH_HERO_KITS[h.id]);
  const hero = candidates[Math.floor(Math.random() * candidates.length)] || OVERWATCH_HEROES[0];
  const kit = OVERWATCH_HERO_KITS[hero.id];

  const pool: Array<{ categoryLabel: string; name: string; description: string; icon?: string }> = [
    ...kit.weapons.filter(w => w.icon).map(w => ({ categoryLabel: 'ARMA', ...w })),
    ...kit.ultimate.filter(u => u.icon).map(u => ({ categoryLabel: 'DEFINITIVA', ...u })),
    ...kit.abilities.filter(a => a.icon).map(a => ({ categoryLabel: 'HABILIDAD', ...a })),
    ...kit.perks.minor.filter(p => p.icon).map(p => ({ categoryLabel: 'PERK MENOR (NV. 2)', ...p })),
    ...kit.perks.major.filter(p => p.icon).map(p => ({ categoryLabel: 'PERK MAYOR (NV. 3)', ...p })),
  ];

  const chosen = pool[Math.floor(Math.random() * pool.length)] || {
    categoryLabel: 'DEFINITIVA',
    name: kit.ultimate[0]?.name || 'Habilidad',
    description: kit.ultimate[0]?.description || hero.description,
    icon: kit.ultimate[0]?.icon,
  };

  // Pick 3 decoys (2 from same role + 1 any role)
  const sameRole = shuffleArray(OVERWATCH_HEROES.filter(h => h.id !== hero.id && h.role === hero.role)).slice(0, 2);
  const otherRole = shuffleArray(
    OVERWATCH_HEROES.filter(h => h.id !== hero.id && !sameRole.some(s => s.id === h.id))
  ).slice(0, 1);

  return {
    hero,
    categoryLabel: chosen.categoryLabel,
    itemName: chosen.name,
    redactedDescription: redactHeroName(chosen.description, hero.name),
    icon: chosen.icon,
    options: shuffleArray([hero, ...sameRole, ...otherRole]),
  };
}

function generateCounterQuestion(excludeEnemyId?: string): CounterQuestion {
  const validEnemies = OVERWATCH_HEROES.filter(
    h => h.id !== excludeEnemyId && h.counters.weakAgainst.length >= 2 && h.counters.strongAgainst.length >= 3
  );
  const enemy = validEnemies[Math.floor(Math.random() * validEnemies.length)] || OVERWATCH_HEROES[0];

  // Prefer hard counters when available so the correct answer is unmistakably dominant
  const hardPool = enemy.counters.hardWeakAgainst && enemy.counters.hardWeakAgainst.length > 0
    ? enemy.counters.hardWeakAgainst
    : enemy.counters.weakAgainst;
  const correctId = hardPool[Math.floor(Math.random() * hardPool.length)];
  const correctHero = OVERWATCH_HEROES.find(h => h.id === correctId) || OVERWATCH_HEROES[0];
  const isHard = Boolean(enemy.counters.hardWeakAgainst?.includes(correctId));
  const motivo =
    enemy.counters.weakDetails?.[correctId]?.motivo ||
    `${correctHero.name} anula directamente el kit de ${enemy.name}`;

  // Decoys MUST NOT also counter `enemy`! Pick from heroes that `enemy` is strongAgainst!
  const losingIds = shuffleArray(
    enemy.counters.strongAgainst.filter(id => id !== correctId && !enemy.counters.weakAgainst.includes(id))
  ).slice(0, 3);

  const decoyHeroes = losingIds
    .map(id => OVERWATCH_HEROES.find(h => h.id === id))
    .filter((h): h is Hero => Boolean(h));

  // Fallback fill if fewer than 3 decoys
  while (decoyHeroes.length < 3) {
    const extra = OVERWATCH_HEROES.find(
      h =>
        h.id !== enemy.id &&
        h.id !== correctHero.id &&
        !enemy.counters.weakAgainst.includes(h.id) &&
        !decoyHeroes.some(d => d.id === h.id)
    );
    if (!extra) break;
    decoyHeroes.push(extra);
  }

  return {
    enemy,
    correctHero,
    isHard,
    motivo,
    options: shuffleArray([correctHero, ...decoyHeroes]),
  };
}

export const GuesserView: React.FC<GuesserViewProps> = ({ language = 'es', theme = 'dark' }) => {
  const t = TRANSLATIONS[language];
  const isDark = theme === 'dark';

  const [activeGame, setActiveGame] = useState<ArcadeGameId>('classic');

  // ==================== GAME 1: CLASSIC RECALLDLE ====================
  const [gameMode, setGameMode] = useState<'daily' | 'infinite'>('daily');
  const [targetHero, setTargetHero] = useState<Hero>(getDailyHero());
  const [guesses, setGuesses] = useState<GuessFeedback[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    resetClassicGame(gameMode);
  }, [gameMode]);

  const resetClassicGame = (mode: 'daily' | 'infinite') => {
    const newTarget = mode === 'daily' ? getDailyHero() : getRandomHero();
    setTargetHero(newTarget);
    setGuesses([]);
    setIsGameOver(false);
    setSearchQuery('');
    setDropdownOpen(false);
    setCopiedShare(false);
  };

  const handleSelectClassicHero = (hero: Hero) => {
    if (isGameOver) return;
    if (guesses.some(g => g.hero.id === hero.id)) return;

    const feedback = compareGuess(hero, targetHero);
    const newGuesses = [feedback, ...guesses];
    setGuesses(newGuesses);
    setSearchQuery('');
    setDropdownOpen(false);

    if (feedback.isCorrect) {
      setIsGameOver(true);
      confetti({ particleCount: 120, spread: 85, origin: { y: 0.6 } });
    }
  };

  const availableClassicHeroes = OVERWATCH_HEROES.filter(h => {
    const alreadyGuessed = guesses.some(g => g.hero.id === h.id);
    const matchesQuery = h.name.toLowerCase().includes(searchQuery.toLowerCase());
    return !alreadyGuessed && matchesQuery;
  });

  const shareResults = () => {
    const emojis = guesses
      .map(g => (g.isCorrect ? '🟩🟩🟩🟩🟩' : '🟥🟥🟨🟥🟥'))
      .reverse()
      .join('\n');

    const text = `Recalldle Overwatch (${gameMode === 'daily' ? 'Diario' : 'Infinito'}) en ${guesses.length} intentos!\n\n${emojis}\n\nJuega gratis en RecallGG`;
    navigator.clipboard.writeText(text);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  // ==================== GAME 2: KIT & PERK QUIZ ====================
  const [kitQ, setKitQ] = useState<KitQuestion>(() => generateKitQuestion());
  const [kitPickedId, setKitPickedId] = useState<string | null>(null);
  const [kitShowNameHint, setKitShowNameHint] = useState<boolean>(false);
  const [kitStreak, setKitStreak] = useState<number>(0);
  const [kitBestStreak, setKitBestStreak] = useState<number>(0);
  const [kitScore, setKitScore] = useState<number>(0);

  const handlePickKitOption = (heroId: string) => {
    if (kitPickedId) return;
    setKitPickedId(heroId);
    if (heroId === kitQ.hero.id) {
      const nextStreak = kitStreak + 1;
      setKitStreak(nextStreak);
      setKitBestStreak(prev => Math.max(prev, nextStreak));
      setKitScore(prev => prev + (kitShowNameHint ? 50 : 100) + nextStreak * 10);
      if (nextStreak % 5 === 0) {
        confetti({ particleCount: 90, spread: 75, origin: { y: 0.65 } });
      }
    } else {
      setKitStreak(0);
    }
  };

  const nextKitQuestion = () => {
    setKitQ(generateKitQuestion(kitQ.hero.id));
    setKitPickedId(null);
    setKitShowNameHint(false);
  };

  // ==================== GAME 3: COUNTER CLASH ARENA ====================
  const [counterQ, setCounterQ] = useState<CounterQuestion>(() => generateCounterQuestion());
  const [counterPickedId, setCounterPickedId] = useState<string | null>(null);
  const [counterLives, setCounterLives] = useState<number>(3);
  const [counterStreak, setCounterStreak] = useState<number>(0);
  const [counterBest, setCounterBest] = useState<number>(0);

  const handlePickCounterOption = (heroId: string) => {
    if (counterPickedId || counterLives <= 0) return;
    setCounterPickedId(heroId);
    if (heroId === counterQ.correctHero.id) {
      const next = counterStreak + 1;
      setCounterStreak(next);
      setCounterBest(prev => Math.max(prev, next));
      if (next % 5 === 0) {
        confetti({ particleCount: 100, spread: 80, origin: { y: 0.65 } });
      }
    } else {
      setCounterLives(prev => Math.max(0, prev - 1));
      setCounterStreak(0);
    }
  };

  const nextCounterQuestion = () => {
    if (counterLives <= 0) {
      setCounterLives(3);
      setCounterStreak(0);
    }
    setCounterQ(generateCounterQuestion(counterQ.enemy.id));
    setCounterPickedId(null);
  };

  // ==================== GAME 4: MYSTERY SILHOUETTE ====================
  const [silHero, setSilHero] = useState<Hero>(() => getRandomHero());
  const [silAttempts, setSilAttempts] = useState<Hero[]>([]);
  const [silSearch, setSilSearch] = useState<string>('');
  const [silWon, setSilWon] = useState<boolean>(false);
  const [silGivenUp, setSilGivenUp] = useState<boolean>(false);
  const [silStreak, setSilStreak] = useState<number>(0);

  const MAX_SIL_TRIES = 5;
  const silFinished = silWon || silGivenUp || silAttempts.length >= MAX_SIL_TRIES;

  const resetSilhouette = useCallback(() => {
    const pool = OVERWATCH_HEROES.filter(h => h.id !== silHero.id);
    setSilHero(pool[Math.floor(Math.random() * pool.length)] || getRandomHero());
    setSilAttempts([]);
    setSilSearch('');
    setSilWon(false);
    setSilGivenUp(false);
  }, [silHero.id]);

  const handleGuessSilhouette = (hero: Hero) => {
    if (silFinished || silAttempts.some(a => a.id === hero.id)) return;
    const nextAttempts = [hero, ...silAttempts];
    setSilAttempts(nextAttempts);
    setSilSearch('');

    if (hero.id === silHero.id) {
      setSilWon(true);
      setSilStreak(s => s + 1);
      confetti({ particleCount: 120, spread: 85, origin: { y: 0.6 } });
    } else if (nextAttempts.length >= MAX_SIL_TRIES) {
      setSilStreak(0);
    }
  };

  const renderFeedbackCell = (
    title: string,
    value: string | number,
    matched: boolean,
    direction?: 'higher' | 'lower',
    partial?: boolean
  ) => {
    let bg = isDark
      ? 'bg-slate-800/90 border-slate-700 text-slate-300'
      : 'bg-slate-100 border-slate-200 text-slate-700';
    if (matched) {
      bg = 'bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/20 border-emerald-500';
    } else if (partial) {
      bg = 'bg-amber-600 text-white font-bold shadow-lg shadow-amber-500/20 border-amber-500';
    }

    return (
      <div
        className={`p-2.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all duration-300 ${bg}`}
      >
        <span className="text-[10px] uppercase tracking-wider opacity-75 font-medium mb-0.5">
          {title}
        </span>
        <div className="flex items-center space-x-1 text-xs font-semibold">
          <span>{value}</span>
          {direction === 'higher' && <ArrowUp className="w-3.5 h-3.5 text-amber-300 animate-bounce" />}
          {direction === 'lower' && <ArrowDown className="w-3.5 h-3.5 text-cyan-300 animate-bounce" />}
        </div>
      </div>
    );
  };

  const arcadeModes: Array<{
    id: ArcadeGameId;
    title: string;
    subtitle: string;
    badge: string;
    icon: React.ReactNode;
    accentCls: string;
  }> = [
    {
      id: 'classic',
      title: 'Recalldle Clásico',
      subtitle: 'Adivina el héroe por rol, edad, país y año',
      badge: 'DIARIO',
      icon: <Gamepad2 className="w-5 h-5" />,
      accentCls: 'from-purple-600 to-indigo-600 border-purple-400/50 shadow-purple-500/25',
    },
    {
      id: 'kit-quiz',
      title: '¿De quién es el Kit?',
      subtitle: 'Identifica al dueño del icono de habilidad o perk',
      badge: 'NUEVO',
      icon: <Zap className="w-5 h-5" />,
      accentCls: 'from-cyan-500 to-blue-600 border-cyan-400/50 shadow-cyan-500/25',
    },
    {
      id: 'counter-clash',
      title: 'Arena de Counters',
      subtitle: 'Elige el counter exacto contra la amenaza rival',
      badge: 'ENTRENA',
      icon: <Swords className="w-5 h-5" />,
      accentCls: 'from-emerald-500 to-teal-600 border-emerald-400/50 shadow-emerald-500/25',
    },
    {
      id: 'silhouette',
      title: 'Silueta Oculta',
      subtitle: 'Descubre quién se esconde tras la sombra en 5 intentos',
      badge: 'VISUAL',
      icon: <Eye className="w-5 h-5" />,
      accentCls: 'from-orange-500 to-rose-600 border-orange-400/50 shadow-orange-500/25',
    },
  ];

  const silKit = OVERWATCH_HERO_KITS[silHero.id];
  const silColor = silKit?.accentColor || '#f97316';
  const zoomScale = silFinished ? 1 : Math.max(1, 1.32 - silAttempts.length * 0.08);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* 1. ARCADE GAME SELECTOR CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {arcadeModes.map(mode => {
          const isSelected = activeGame === mode.id;
          return (
            <button
              key={mode.id}
              type="button"
              onClick={() => setActiveGame(mode.id)}
              className={`text-left p-4 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? `bg-gradient-to-br ${mode.accentCls} text-white shadow-xl scale-[1.02]`
                  : isDark
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-600'
                  : 'bg-white border-slate-200 text-slate-800 hover:border-slate-400 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <div
                  className={`p-2 rounded-xl ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : isDark
                      ? 'bg-slate-800 text-slate-300'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {mode.icon}
                </div>
                <span
                  className={`text-[9px] font-mono font-black uppercase px-2 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-black/30 text-white'
                      : isDark
                      ? 'bg-slate-800 text-slate-400'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {mode.badge}
                </span>
              </div>
              <div>
                <h2 className="font-black text-sm tracking-tight">{mode.title}</h2>
                <p
                  className={`text-[11px] leading-snug mt-0.5 ${
                    isSelected ? 'text-white/85' : 'text-slate-400'
                  }`}
                >
                  {mode.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* ===================================================================== */}
      {/* MODE 1: CLASSIC RECALLDLE                                             */}
      {/* ===================================================================== */}
      {activeGame === 'classic' && (
        <>
          <div
            className={`border rounded-3xl p-6 shadow-xl text-center relative overflow-hidden transition ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold mb-3">
              <Gamepad2 className="w-4 h-4" />
              <span>RECALLDLE — 54 HÉROES ACTIVOS</span>
            </div>

            <h1 className={`text-2xl sm:text-4xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {t.guesserTitle}
            </h1>
            <p className="text-sm text-slate-400 max-w-xl mx-auto mt-2">{t.guesserSubtitle}</p>

            <div className="flex items-center justify-center space-x-3 mt-5">
              <button
                type="button"
                onClick={() => setGameMode('daily')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
                  gameMode === 'daily'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : isDark
                    ? 'bg-slate-800 text-slate-400 hover:text-white'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>{t.dailyChallenge}</span>
              </button>

              <button
                type="button"
                onClick={() => setGameMode('infinite')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
                  gameMode === 'infinite'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                    : isDark
                    ? 'bg-slate-800 text-slate-400 hover:text-white'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                }`}
              >
                <Flame className="w-4 h-4" />
                <span>{t.freePractice}</span>
              </button>

              {gameMode === 'infinite' && (
                <button
                  type="button"
                  onClick={() => resetClassicGame('infinite')}
                  className={`p-2 rounded-xl border transition ${
                    isDark
                      ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
                      : 'bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900'
                  }`}
                  title={t.newHeroRandom}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {!isGameOver ? (
            <div className="relative max-w-xl mx-auto">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder={t.typeHeroPlaceholder}
                  value={searchQuery}
                  onChange={e => {
                    setSearchQuery(e.target.value);
                    setDropdownOpen(true);
                  }}
                  onFocus={() => setDropdownOpen(true)}
                  className={`w-full border-2 rounded-2xl pl-12 pr-4 py-3.5 font-semibold text-sm focus:outline-none focus:border-purple-500 shadow-xl transition ${
                    isDark
                      ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>

              {dropdownOpen && searchQuery.length > 0 && (
                <div
                  className={`absolute left-0 right-0 mt-2 border rounded-2xl max-h-64 overflow-y-auto z-40 shadow-2xl p-2 divide-y ${
                    isDark ? 'bg-slate-900 border-slate-700 divide-slate-800' : 'bg-white border-slate-200 divide-slate-100'
                  }`}
                >
                  {availableClassicHeroes.length > 0 ? (
                    availableClassicHeroes.map(hero => (
                      <button
                        key={hero.id}
                        type="button"
                        onClick={() => handleSelectClassicHero(hero)}
                        className={`w-full text-left p-2.5 rounded-xl flex items-center justify-between transition ${
                          isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <HeroAvatar hero={hero} size="sm" />
                          <div>
                            <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                              {hero.name}
                            </div>
                            <div className="text-[11px] text-slate-400 capitalize">
                              {hero.role === 'damage' ? 'DPS' : hero.role === 'tank' ? 'Tanque' : 'Apoyo'} • {hero.country}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                          Seleccionar
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="p-4 text-center text-xs text-slate-400">
                      No se encontraron héroes o ya fue adivinado.
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div
              className={`border-2 border-purple-500/50 rounded-3xl p-8 max-w-xl mx-auto text-center shadow-2xl ${
                isDark
                  ? 'bg-gradient-to-b from-purple-900/40 to-slate-900 text-white'
                  : 'bg-gradient-to-b from-purple-50 to-white text-slate-900'
              }`}
            >
              <div className="flex justify-center mb-4">
                <HeroAvatar hero={targetHero} size="xl" showRoleBadge />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black">
                {t.victoryTitle} <span className="text-purple-500">{targetHero.name}</span>!
              </h2>
              <p className={`text-sm mt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Lograste descifrar al héroe en <span className="font-bold font-mono">{guesses.length}</span>{' '}
                {guesses.length === 1 ? t.attempt : t.attempts}.
              </p>

              <div className="flex items-center justify-center space-x-3 mt-6">
                <button
                  type="button"
                  onClick={shareResults}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copiedShare ? t.copiedClipboard : t.shareResults}</span>
                </button>

                {gameMode === 'infinite' && (
                  <button
                    type="button"
                    onClick={() => resetClassicGame('infinite')}
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>{t.playAgain}</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {guesses.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-400 px-2">
                <span>
                  {t.historyAttempts} ({guesses.length})
                </span>
                <div className="flex items-center space-x-3">
                  <span className="flex items-center space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                    <span>Coincide</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                    <span>Parcial</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block"></span>
                    <span>No coincide</span>
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {guesses.map((guess, index) => (
                  <div
                    key={index}
                    className={`border rounded-2xl p-4 shadow-lg backdrop-blur transition ${
                      isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <HeroAvatar hero={guess.hero} size="sm" />
                        <span className="text-xs font-mono font-bold text-purple-400">
                          #{guesses.length - index}
                        </span>
                        <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                          {guess.hero.name}
                        </span>
                      </div>
                      {guess.isCorrect && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-500 text-[10px] font-bold border border-emerald-500/30">
                          ¡ACERTASTE!
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                      {renderFeedbackCell(t.colRole, guess.role.value, guess.role.matched)}
                      {renderFeedbackCell(t.colGender, guess.gender.value, guess.gender.matched)}
                      {renderFeedbackCell(
                        t.colAffiliation,
                        guess.affiliation.value,
                        guess.affiliation.matched,
                        undefined,
                        guess.affiliation.partial
                      )}
                      {renderFeedbackCell(t.colCountry, guess.country.value, guess.country.matched)}
                      {renderFeedbackCell(t.colAge, guess.age.value, guess.age.matched, guess.age.direction)}
                      {renderFeedbackCell(
                        t.colYear,
                        guess.releaseYear.value,
                        guess.releaseYear.matched,
                        guess.releaseYear.direction
                      )}
                      {renderFeedbackCell(t.colRange, guess.range.value, guess.range.matched)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* ===================================================================== */}
      {/* MODE 2: ¿DE QUIÉN ES EL KIT? (ABILITY & PERK QUIZ)                    */}
      {/* ===================================================================== */}
      {activeGame === 'kit-quiz' && (
        <div
          className={`border rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 transition ${
            isDark ? 'bg-slate-900/85 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Stats Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-700/30">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-cyan-400">
                TRIVIA DE HABILIDADES & PERKS OFICIALES
              </span>
              <h2 className="text-2xl font-black">¿A qué héroe pertenece este icono?</h2>
            </div>

            <div className="flex items-center gap-3">
              <div
                className={`px-3.5 py-2 rounded-xl border text-center ${
                  isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-slate-400">Racha</div>
                <div className="text-base font-black text-cyan-400 flex items-center justify-center gap-1">
                  <Flame className="w-4 h-4 text-orange-400" />
                  {kitStreak}
                </div>
              </div>
              <div
                className={`px-3.5 py-2 rounded-xl border text-center ${
                  isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-slate-400">Récord</div>
                <div className="text-base font-black text-amber-400 flex items-center justify-center gap-1">
                  <Trophy className="w-4 h-4" />
                  {kitBestStreak}
                </div>
              </div>
              <div
                className={`px-3.5 py-2 rounded-xl border text-center ${
                  isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-slate-400">Puntos</div>
                <div className="text-base font-black text-emerald-400 font-mono">{kitScore}</div>
              </div>
            </div>
          </div>

          {/* Mystery Ability / Perk Card */}
          <div
            className={`rounded-2xl border-2 p-6 flex flex-col items-center text-center max-w-2xl mx-auto space-y-4 ${
              isDark
                ? 'bg-slate-950/70 border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                : 'bg-cyan-50/50 border-cyan-300'
            }`}
          >
            <span className="px-3 py-0.5 rounded-full text-[11px] font-mono font-black uppercase bg-cyan-500/20 text-cyan-400 border border-cyan-400/30">
              {kitQ.categoryLabel}
            </span>

            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-br from-cyan-400 to-blue-600 shadow-xl shadow-cyan-500/30 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center border border-cyan-300/40">
                {kitQ.icon ? (
                  <img src={kitQ.icon} alt="" className="w-14 h-14 object-contain" />
                ) : (
                  <Sparkles className="w-10 h-10 text-cyan-300" />
                )}
              </div>
            </div>

            {kitShowNameHint || kitPickedId ? (
              <h3 className="text-lg font-black uppercase tracking-wide text-cyan-400">
                «{kitQ.itemName}»
              </h3>
            ) : (
              <button
                type="button"
                onClick={() => setKitShowNameHint(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition"
              >
                <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>Pista: revelar nombre (-50 pts)</span>
              </button>
            )}

            <p className={`text-sm max-w-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              “{kitQ.redactedDescription}”
            </p>
          </div>

          {/* 4 Hero Options */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {kitQ.options.map(opt => {
              const isCorrect = opt.id === kitQ.hero.id;
              const isSelected = kitPickedId === opt.id;
              let btnStyle = isDark
                ? 'bg-slate-800/80 border-slate-700 hover:border-cyan-400'
                : 'bg-slate-50 border-slate-200 hover:border-cyan-500';

              if (kitPickedId) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-600/20 border-emerald-500 ring-2 ring-emerald-500 text-emerald-400';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-600/20 border-rose-500 ring-2 ring-rose-500 text-rose-400';
                } else {
                  btnStyle = 'opacity-40 grayscale border-slate-700';
                }
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={Boolean(kitPickedId)}
                  onClick={() => handlePickKitOption(opt.id)}
                  className={`p-3.5 rounded-2xl border-2 flex flex-col items-center gap-2 transition ${btnStyle}`}
                >
                  <HeroAvatar hero={opt} size="lg" />
                  <span className="font-black text-sm uppercase tracking-tight">{opt.name}</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">{opt.subrole.split('/')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Result & Next Button */}
          {kitPickedId && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto pt-2">
              <div className="flex items-center gap-2 text-sm font-bold">
                {kitPickedId === kitQ.hero.id ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="text-emerald-500">
                      ¡Correcto! «{kitQ.itemName}» pertenece al kit de {kitQ.hero.name}.
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-500" />
                    <span className="text-rose-500">
                      Era {kitQ.hero.name} («{kitQ.itemName}»).
                    </span>
                  </>
                )}
              </div>

              <button
                type="button"
                onClick={nextKitQuestion}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-sm shadow-lg shadow-cyan-500/25 transition"
              >
                <span>Siguiente habilidad</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* ===================================================================== */}
      {/* MODE 3: ARENA DE COUNTERS (COUNTER CLASH)                             */}
      {/* ===================================================================== */}
      {activeGame === 'counter-clash' && (
        <div
          className={`border rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 transition ${
            isDark ? 'bg-slate-900/85 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Top Bar: Lives & Streak */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-700/30">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-emerald-400">
                ENTRENAMIENTO COMPETITIVO DE COUNTERS
              </span>
              <h2 className="text-2xl font-black">¿Qué pick destruye a esta amenaza rival?</h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Hearts */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <Heart
                    key={idx}
                    className={`w-5 h-5 transition ${
                      idx < counterLives ? 'text-rose-500 fill-rose-500' : 'text-slate-600 opacity-40'
                    }`}
                  />
                ))}
              </div>

              <div
                className={`px-3.5 py-1.5 rounded-xl border text-center ${
                  isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'
                }`}
              >
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Racha</span>
                <span className="text-sm font-black text-emerald-400">{counterStreak} (Máx {counterBest})</span>
              </div>
            </div>
          </div>

          {/* Enemy Boss Card */}
          <div
            className={`rounded-2xl border-2 p-5 max-w-xl mx-auto flex items-center gap-4 ${
              isDark
                ? 'bg-gradient-to-r from-rose-950/50 via-slate-900 to-slate-900 border-rose-500/40'
                : 'bg-rose-50/70 border-rose-300'
            }`}
          >
            <HeroAvatar hero={counterQ.enemy} size="xl" showRoleBadge />
            <div className="min-w-0">
              <span className="text-[10px] font-mono font-black uppercase px-2 py-0.5 rounded bg-rose-500 text-white">
                AMENAZA RIVAL EN PARTIDA
              </span>
              <h3 className="text-2xl font-black uppercase mt-1">{counterQ.enemy.name}</h3>
              <p className="text-xs text-slate-400">
                {counterQ.enemy.subrole} • Estilo {counterQ.enemy.style.toUpperCase()}
              </p>
            </div>
          </div>

          {/* 4 Candidate Counter Picks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {counterQ.options.map(opt => {
              const isCorrect = opt.id === counterQ.correctHero.id;
              const isSelected = counterPickedId === opt.id;
              let cls = isDark
                ? 'bg-slate-800/80 border-slate-700 hover:border-emerald-400'
                : 'bg-slate-50 border-slate-200 hover:border-emerald-500';

              if (counterPickedId) {
                if (isCorrect) {
                  cls = 'bg-emerald-600/20 border-emerald-500 ring-2 ring-emerald-500';
                } else if (isSelected) {
                  cls = 'bg-rose-600/20 border-rose-500 ring-2 ring-rose-500';
                } else {
                  cls = 'opacity-40 grayscale border-slate-700';
                }
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={Boolean(counterPickedId)}
                  onClick={() => handlePickCounterOption(opt.id)}
                  className={`p-3.5 rounded-2xl border-2 flex flex-col items-center gap-2 transition ${cls}`}
                >
                  <HeroAvatar hero={opt} size="lg" />
                  <span className="font-black text-sm uppercase">{opt.name}</span>
                  <span className="text-[10px] font-mono uppercase text-slate-400">
                    {opt.role === 'tank' ? 'Tanque' : opt.role === 'damage' ? 'DPS' : 'Apoyo'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Tactical Explanation Box on Answer */}
          {counterPickedId && (
            <div
              className={`max-w-3xl mx-auto p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                counterPickedId === counterQ.correctHero.id
                  ? isDark
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                    : 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : isDark
                  ? 'bg-rose-950/40 border-rose-500/40 text-rose-200'
                  : 'bg-rose-50 border-rose-300 text-rose-900'
              }`}
            >
              <div className="space-y-1">
                <div className="font-black text-sm flex items-center gap-1.5">
                  {counterPickedId === counterQ.correctHero.id ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  )}
                  <span>
                    {counterPickedId === counterQ.correctHero.id
                      ? `¡Excelente lectura! ${counterQ.correctHero.name} es su ${counterQ.isHard ? 'Counter Duro' : 'Counter'}.`
                      : `¡Cuidado! El mejor counter aquí era ${counterQ.correctHero.name}.`}
                  </span>
                </div>
                <p className="text-xs opacity-90 leading-relaxed">
                  <strong>Por qué:</strong> {counterQ.motivo}
                </p>
              </div>

              <button
                type="button"
                onClick={nextCounterQuestion}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider whitespace-nowrap shadow-lg transition"
              >
                {counterLives <= 0 ? 'Reiniciar Arena (3 ❤️)' : 'Siguiente Rival →'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* ===================================================================== */}
      {/* MODE 4: SILUETA OCULTA ("¿QUIÉN ES ESE HÉROE?")                       */}
      {/* ===================================================================== */}
      {activeGame === 'silhouette' && (
        <div
          className={`border rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 transition ${
            isDark ? 'bg-slate-900/85 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-700/30">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-orange-400">
                DESAFÍO VISUAL — 5 INTENTOS
              </span>
              <h2 className="text-2xl font-black">¿Quién se oculta detrás de la silueta?</h2>
            </div>

            <div className="flex items-center gap-3">
              <div
                className={`px-3.5 py-1.5 rounded-xl border text-center ${
                  isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'
                }`}
              >
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Intentos</span>
                <span className="text-sm font-black text-orange-400">
                  {silAttempts.length} / {MAX_SIL_TRIES}
                </span>
              </div>
              <div
                className={`px-3.5 py-1.5 rounded-xl border text-center ${
                  isDark ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 border-slate-200'
                }`}
              >
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Racha</span>
                <span className="text-sm font-black text-amber-400">{silStreak}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Silhouette Stage */}
            <div
              style={{
                background: silFinished
                  ? `radial-gradient(circle, color-mix(in oklab, ${silColor} 35%, transparent), transparent 70%)`
                  : 'radial-gradient(circle, rgba(249,115,22,0.14), transparent 70%)',
              }}
              className={`relative h-80 sm:h-96 rounded-3xl border-2 flex items-center justify-center overflow-hidden ${
                isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-200 border-slate-300'
              }`}
            >
              <img
                key={silHero.id}
                src={silKit?.fullPortrait || silHero.icon}
                alt="Héroe misterioso"
                style={{
                  transform: `scale(${zoomScale})`,
                  filter: silFinished ? 'none' : 'brightness(0) contrast(200%)',
                }}
                className="max-h-72 sm:max-h-80 w-auto object-contain select-none pointer-events-none transition-all duration-500"
              />
            </div>

            {/* Progressive Clues + Search Input */}
            <div className="space-y-4">
              {/* Progressive Clues */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase font-bold text-slate-400">
                  Pistas desbloqueadas (cada fallo revela más):
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div
                    className={`p-2.5 rounded-xl border ${
                      silAttempts.length >= 1 || silFinished
                        ? 'border-orange-500/40 bg-orange-500/10'
                        : isDark
                        ? 'border-slate-800 bg-slate-800/40 text-slate-500'
                        : 'border-slate-200 bg-slate-100 text-slate-400'
                    }`}
                  >
                    <span className="block text-[10px] font-mono uppercase opacity-70">Pista 1 · Rol</span>
                    <strong>
                      {silAttempts.length >= 1 || silFinished
                        ? silHero.role === 'tank'
                          ? 'Tanque'
                          : silHero.role === 'damage'
                          ? 'Daño (DPS)'
                          : 'Apoyo'
                        : '🔒 Bloqueada'}
                    </strong>
                  </div>

                  <div
                    className={`p-2.5 rounded-xl border ${
                      silAttempts.length >= 2 || silFinished
                        ? 'border-orange-500/40 bg-orange-500/10'
                        : isDark
                        ? 'border-slate-800 bg-slate-800/40 text-slate-500'
                        : 'border-slate-200 bg-slate-100 text-slate-400'
                    }`}
                  >
                    <span className="block text-[10px] font-mono uppercase opacity-70">Pista 2 · Subrol</span>
                    <strong>
                      {silAttempts.length >= 2 || silFinished
                        ? `${silHero.subrole} (${silHero.style.toUpperCase()})`
                        : '🔒 Bloqueada'}
                    </strong>
                  </div>

                  <div
                    className={`p-2.5 rounded-xl border ${
                      silAttempts.length >= 3 || silFinished
                        ? 'border-orange-500/40 bg-orange-500/10'
                        : isDark
                        ? 'border-slate-800 bg-slate-800/40 text-slate-500'
                        : 'border-slate-200 bg-slate-100 text-slate-400'
                    }`}
                  >
                    <span className="block text-[10px] font-mono uppercase opacity-70">Pista 3 · Origen</span>
                    <strong>
                      {silAttempts.length >= 3 || silFinished ? silHero.country : '🔒 Bloqueada'}
                    </strong>
                  </div>

                  <div
                    className={`p-2.5 rounded-xl border ${
                      silAttempts.length >= 4 || silFinished
                        ? 'border-orange-500/40 bg-orange-500/10'
                        : isDark
                        ? 'border-slate-800 bg-slate-800/40 text-slate-500'
                        : 'border-slate-200 bg-slate-100 text-slate-400'
                    }`}
                  >
                    <span className="block text-[10px] font-mono uppercase opacity-70">Pista 4 · Definitiva</span>
                    <strong>
                      {silAttempts.length >= 4 || silFinished
                        ? silKit?.ultimate[0]?.name || 'Clasificada'
                        : '🔒 Bloqueada'}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Search or Result */}
              {!silFinished ? (
                <div className="space-y-2 relative">
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={silSearch}
                      onChange={e => setSilSearch(e.target.value)}
                      placeholder="Escribe el nombre del héroe..."
                      className={`w-full border-2 rounded-xl pl-10 pr-4 py-3 text-sm font-semibold focus:outline-none focus:border-orange-500 ${
                        isDark
                          ? 'bg-slate-950 border-slate-700 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  {silSearch.trim().length > 0 && (
                    <div
                      className={`border rounded-xl max-h-48 overflow-y-auto p-1.5 divide-y shadow-xl ${
                        isDark
                          ? 'bg-slate-900 border-slate-700 divide-slate-800'
                          : 'bg-white border-slate-200 divide-slate-100'
                      }`}
                    >
                      {OVERWATCH_HEROES.filter(
                        h =>
                          !silAttempts.some(a => a.id === h.id) &&
                          h.name.toLowerCase().includes(silSearch.toLowerCase())
                      ).map(h => (
                        <button
                          key={h.id}
                          type="button"
                          onClick={() => handleGuessSilhouette(h)}
                          className={`w-full p-2 rounded-lg flex items-center gap-2.5 text-left text-xs font-bold transition ${
                            isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'
                          }`}
                        >
                          <HeroAvatar hero={h} size="xs" />
                          <span>{h.name}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        setSilGivenUp(true);
                        setSilStreak(0);
                      }}
                      className="text-xs text-slate-400 hover:text-rose-400 underline"
                    >
                      Rendirse y revelar héroe
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  className={`p-4 rounded-2xl border-2 space-y-3 ${
                    silWon
                      ? 'border-emerald-500/50 bg-emerald-500/10'
                      : 'border-rose-500/50 bg-rose-500/10'
                  }`}
                >
                  <div className="font-black text-lg">
                    {silWon
                      ? `¡Lo adivinaste! Era ${silHero.name}`
                      : `¡Se acabaron los intentos! Era ${silHero.name}`}
                  </div>
                  <button
                    type="button"
                    onClick={resetSilhouette}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white font-black text-xs uppercase tracking-wider shadow-lg transition"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Nueva Silueta Misteriosa</span>
                  </button>
                </div>
              )}

              {/* Previous wrong attempts */}
              {silAttempts.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {silAttempts.map(a => (
                    <span
                      key={a.id}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${
                        a.id === silHero.id
                          ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400'
                          : 'bg-rose-500/15 border-rose-500/30 text-rose-400 line-through'
                      }`}
                    >
                      <img src={a.icon} alt="" className="w-4 h-4 rounded-full object-cover" />
                      {a.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

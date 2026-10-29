import React, { useState, useEffect, useRef } from 'react';
import type { Hero, GuessFeedback } from '../../types/game';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
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
  Flame 
} from 'lucide-react';

interface GuesserViewProps {
  language?: Language;
  theme?: 'dark' | 'light';
}

export const GuesserView: React.FC<GuesserViewProps> = ({ language = 'es', theme = 'dark' }) => {
  const t = TRANSLATIONS[language];
  const isDark = theme === 'dark';

  const [gameMode, setGameMode] = useState<'daily' | 'infinite'>('daily');
  const [targetHero, setTargetHero] = useState<Hero>(getDailyHero());
  const [guesses, setGuesses] = useState<GuessFeedback[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    resetGame(gameMode);
  }, [gameMode]);

  const resetGame = (mode: 'daily' | 'infinite') => {
    const newTarget = mode === 'daily' ? getDailyHero() : getRandomHero();
    setTargetHero(newTarget);
    setGuesses([]);
    setIsGameOver(false);
    setSearchQuery('');
    setDropdownOpen(false);
    setCopiedShare(false);
  };

  const handleSelectHero = (hero: Hero) => {
    if (isGameOver) return;
    if (guesses.some(g => g.hero.id === hero.id)) return;

    const feedback = compareGuess(hero, targetHero);
    const newGuesses = [feedback, ...guesses];
    setGuesses(newGuesses);
    setSearchQuery('');
    setDropdownOpen(false);

    if (feedback.isCorrect) {
      setIsGameOver(true);
      confetti({
        particleCount: 130,
        spread: 90,
        origin: { y: 0.6 }
      });
    }
  };

  const availableHeroes = OVERWATCH_HEROES.filter(h => {
    const alreadyGuessed = guesses.some(g => g.hero.id === h.id);
    const matchesQuery = h.name.toLowerCase().includes(searchQuery.toLowerCase());
    return !alreadyGuessed && matchesQuery;
  });

  const renderFeedbackCell = (
    title: string,
    value: string | number,
    matched: boolean,
    direction?: 'higher' | 'lower',
    partial?: boolean
  ) => {
    let bg = isDark ? 'bg-slate-800/90 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700';
    if (matched) {
      bg = 'bg-emerald-600 text-white font-bold shadow-lg shadow-emerald-500/20 border-emerald-500';
    } else if (partial) {
      bg = 'bg-amber-600 text-white font-bold shadow-lg shadow-amber-500/20 border-amber-500';
    }

    return (
      <div className={`p-2.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all duration-300 ${bg}`}>
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

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div className={`border rounded-3xl p-6 shadow-xl text-center relative overflow-hidden transition ${
        isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold mb-3">
          <Gamepad2 className="w-4 h-4" />
          <span>MINIJUEGO ADICTIVO: RECALLDLE</span>
        </div>

        <h1 className={`text-3xl sm:text-4xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {t.guesserTitle}
        </h1>
        <p className="text-sm text-slate-400 max-w-xl mx-auto mt-2">
          {t.guesserSubtitle}
        </p>

        {/* Mode Selector */}
        <div className="flex items-center justify-center space-x-3 mt-5">
          <button
            onClick={() => setGameMode('daily')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
              gameMode === 'daily'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>{t.dailyChallenge}</span>
          </button>

          <button
            onClick={() => setGameMode('infinite')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
              gameMode === 'infinite'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : isDark ? 'bg-slate-800 text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>{t.freePractice}</span>
          </button>

          {gameMode === 'infinite' && (
            <button
              onClick={() => resetGame('infinite')}
              className={`p-2 rounded-xl border transition ${
                isDark ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-300 text-slate-600 hover:text-slate-900'
              }`}
              title={t.newHeroRandom}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Input / Search Hero Area */}
      {!isGameOver ? (
        <div className="relative max-w-xl mx-auto">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder={t.typeHeroPlaceholder}
              value={searchQuery}
              onChange={(e) => {
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
            <div className={`absolute left-0 right-0 mt-2 border rounded-2xl max-h-64 overflow-y-auto z-40 shadow-2xl p-2 divide-y ${
              isDark ? 'bg-slate-900 border-slate-700 divide-slate-800' : 'bg-white border-slate-200 divide-slate-100'
            }`}>
              {availableHeroes.length > 0 ? (
                availableHeroes.map(hero => (
                  <button
                    key={hero.id}
                    onClick={() => handleSelectHero(hero)}
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
        /* Victory Modal Card */
        <div className="bg-gradient-to-b from-purple-900/40 to-slate-900 border-2 border-purple-500/50 rounded-3xl p-8 max-w-xl mx-auto text-center shadow-2xl animate-in fade-in zoom-in-95 duration-300">
          <div className="flex justify-center mb-4">
            <HeroAvatar hero={targetHero} size="xl" showRoleBadge />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {t.victoryTitle} <span className="text-purple-400">{targetHero.name}</span>!
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Lograste descifrar al héroe en <span className="font-bold text-white font-mono">{guesses.length}</span> {guesses.length === 1 ? t.attempt : t.attempts}.
          </p>

          <div className="flex items-center justify-center space-x-3 mt-6">
            <button
              onClick={shareResults}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition"
            >
              <Share2 className="w-4 h-4" />
              <span>{copiedShare ? t.copiedClipboard : t.shareResults}</span>
            </button>

            {gameMode === 'infinite' && (
              <button
                onClick={() => resetGame('infinite')}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{t.playAgain}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Guesses Board */}
      {guesses.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 px-2">
            <span>{t.historyAttempts} ({guesses.length})</span>
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
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                      ¡ACERTASTE!
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                  {renderFeedbackCell(t.colRole, guess.role.value, guess.role.matched)}
                  {renderFeedbackCell(t.colGender, guess.gender.value, guess.gender.matched)}
                  {renderFeedbackCell(t.colAffiliation, guess.affiliation.value, guess.affiliation.matched, undefined, guess.affiliation.partial)}
                  {renderFeedbackCell(t.colCountry, guess.country.value, guess.country.matched)}
                  {renderFeedbackCell(t.colAge, guess.age.value, guess.age.matched, guess.age.direction)}
                  {renderFeedbackCell(t.colYear, guess.releaseYear.value, guess.releaseYear.matched, guess.releaseYear.direction)}
                  {renderFeedbackCell(t.colRange, guess.range.value, guess.range.matched)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

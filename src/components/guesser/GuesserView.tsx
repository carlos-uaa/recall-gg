import React, { useState, useEffect, useRef } from 'react';
import type { Hero, GuessFeedback } from '../../types/game';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import { compareGuess, getDailyHero, getRandomHero } from '../../core/guesserEngine';
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

export const GuesserView: React.FC = () => {
  const [gameMode, setGameMode] = useState<'daily' | 'infinite'>('daily');
  const [targetHero, setTargetHero] = useState<Hero>(getDailyHero());
  const [guesses, setGuesses] = useState<GuessFeedback[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Initialize or change mode
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
    if (guesses.some(g => g.hero.id === hero.id)) return; // Already guessed

    const feedback = compareGuess(hero, targetHero);
    const newGuesses = [feedback, ...guesses];
    setGuesses(newGuesses);
    setSearchQuery('');
    setDropdownOpen(false);

    if (feedback.isCorrect) {
      setIsGameOver(true);
      confetti({
        particleCount: 120,
        spread: 80,
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
    let bg = 'bg-slate-800/90 border-slate-700 text-slate-300';
    if (matched) {
      bg = 'bg-emerald-600/90 border-emerald-500 text-white font-bold shadow-lg shadow-emerald-500/20';
    } else if (partial) {
      bg = 'bg-amber-600/90 border-amber-500 text-white font-bold shadow-lg shadow-amber-500/20';
    }

    return (
      <div className={`p-2.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all duration-300 ${bg}`}>
        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mb-0.5">
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
      {/* Guesser Header */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur shadow-xl text-center relative overflow-hidden">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold mb-3">
          <Gamepad2 className="w-4 h-4" />
          <span>MINIJUEGO ADICTIVO: RECALLDLE</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          ¿Puedes adivinar al Héroe de Hoy?
        </h1>
        <p className="text-sm text-slate-400 max-w-xl mx-auto mt-2">
          Escribe el nombre de un personaje. Te mostraremos pistas con colores según coincidan el rol, género, edad, país y afiliación.
        </p>

        {/* Mode Selector */}
        <div className="flex items-center justify-center space-x-3 mt-5">
          <button
            onClick={() => setGameMode('daily')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
              gameMode === 'daily'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Desafío Diario</span>
          </button>

          <button
            onClick={() => setGameMode('infinite')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
              gameMode === 'infinite'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>Modo Práctica Libre</span>
          </button>

          {gameMode === 'infinite' && (
            <button
              onClick={() => resetGame('infinite')}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
              title="Nuevo Héroe Aleatorio"
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
              placeholder="Escribe el nombre del héroe (ej. Tracer, Reinhardt, Mercy)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setDropdownOpen(true);
              }}
              onFocus={() => setDropdownOpen(true)}
              className="w-full bg-slate-900 border-2 border-slate-700 rounded-2xl pl-12 pr-4 py-3.5 text-white placeholder-slate-500 font-semibold text-sm focus:outline-none focus:border-purple-500 shadow-xl"
            />
          </div>

          {dropdownOpen && searchQuery.length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-2xl max-h-64 overflow-y-auto z-40 shadow-2xl p-2 divide-y divide-slate-800">
              {availableHeroes.length > 0 ? (
                availableHeroes.map(hero => (
                  <button
                    key={hero.id}
                    onClick={() => handleSelectHero(hero)}
                    className="w-full text-left p-2.5 rounded-xl flex items-center justify-between hover:bg-slate-800 transition"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center font-bold text-xs text-white">
                        {hero.name.substring(0, 2)}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{hero.name}</div>
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
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-amber-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/40">
            <Trophy className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white">
            ¡VICTORIA! Era <span className="text-purple-400">{targetHero.name}</span>
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Lograste descifrar al héroe en <span className="font-bold text-white font-mono">{guesses.length}</span> {guesses.length === 1 ? 'intento' : 'intentos'}.
          </p>

          <div className="flex items-center justify-center space-x-3 mt-6">
            <button
              onClick={shareResults}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-600/30 transition"
            >
              <Share2 className="w-4 h-4" />
              <span>{copiedShare ? '¡Copiado al Portapapeles!' : 'Compartir Resultado'}</span>
            </button>

            {gameMode === 'infinite' && (
              <button
                onClick={() => resetGame('infinite')}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Jugar Otra Vez</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Guesses Board */}
      {guesses.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 px-2">
            <span>HISTORIAL DE INTENTOS ({guesses.length})</span>
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
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700 inline-block"></span>
                <span>No coincide</span>
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {guesses.map((guess, index) => (
              <div
                key={index}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 shadow-lg backdrop-blur"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs font-mono font-bold text-purple-400">
                    #{guesses.length - index}
                  </span>
                  <span className="text-sm font-bold text-white">
                    {guess.hero.name}
                  </span>
                  {guess.isCorrect && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                      ¡ACERTASTE!
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                  {renderFeedbackCell('Rol', guess.role.value, guess.role.matched)}
                  {renderFeedbackCell('Género', guess.gender.value, guess.gender.matched)}
                  {renderFeedbackCell('Afiliación', guess.affiliation.value, guess.affiliation.matched, undefined, guess.affiliation.partial)}
                  {renderFeedbackCell('País', guess.country.value, guess.country.matched)}
                  {renderFeedbackCell('Edad', guess.age.value, guess.age.matched, guess.age.direction)}
                  {renderFeedbackCell('Año Debut', guess.releaseYear.value, guess.releaseYear.matched, guess.releaseYear.direction)}
                  {renderFeedbackCell('Alcance', guess.range.value, guess.range.matched)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

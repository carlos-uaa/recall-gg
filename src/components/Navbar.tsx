import React, { useState } from 'react';
import type { GameId } from '../types/game';
import { SUPPORTED_GAMES } from '../games/registry';
import { Crosshair, Gamepad2, BarChart3, Swords, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentGame: GameId;
  onSelectGame: (game: GameId) => void;
  activeTab: 'coach' | 'guesser' | 'meta' | 'counters';
  onSelectTab: (tab: 'coach' | 'guesser' | 'meta' | 'counters') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentGame,
  onSelectGame,
  activeTab,
  onSelectTab,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const activeGameMeta = SUPPORTED_GAMES.find(g => g.id === currentGame) || SUPPORTED_GAMES[0];

  return (
    <header className="sticky top-0 z-50 bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Branding */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onSelectTab('coach')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20 text-white font-black text-xl tracking-wider">
                R
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                    RECALL<span className="text-orange-500">.GG</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    100% Libre
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                  TACTICAL COMPANION & MINIGAMES
                </p>
              </div>
            </div>

            {/* Game Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-sm font-semibold text-slate-200 border border-slate-700/60 transition"
              >
                <span className="w-2 h-2 rounded-full bg-orange-500 inline-block animate-pulse"></span>
                <span>{activeGameMeta.name}</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl py-2 z-50">
                  <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Seleccionar Juego
                  </div>
                  {SUPPORTED_GAMES.map(game => (
                    <button
                      key={game.id}
                      onClick={() => {
                        if (game.active) {
                          onSelectGame(game.id);
                          setDropdownOpen(false);
                        }
                      }}
                      disabled={!game.active}
                      className={`w-full text-left px-3 py-2.5 flex items-center justify-between text-sm transition ${
                        game.id === currentGame
                          ? 'bg-orange-500/10 text-orange-400 font-semibold'
                          : game.active
                          ? 'text-slate-300 hover:bg-slate-800'
                          : 'text-slate-500 cursor-not-allowed opacity-60'
                      }`}
                    >
                      <div>
                        <div className="font-medium">{game.name}</div>
                        <div className="text-xs text-slate-400">{game.tagline}</div>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                        game.active ? 'bg-orange-500/20 text-orange-400' : 'bg-slate-800 text-slate-500'
                      }`}>
                        {game.badge}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => onSelectTab('coach')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeTab === 'coach'
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <Crosshair className="w-4 h-4" />
              <span>Coach Táctico</span>
            </button>

            <button
              onClick={() => onSelectTab('guesser')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeTab === 'guesser'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Recalldle</span>
              <span className="hidden md:inline-flex px-1.5 py-0.2 bg-purple-400/20 text-purple-300 text-[10px] rounded uppercase font-bold tracking-wider">
                Juego
              </span>
            </button>

            <button
              onClick={() => onSelectTab('meta')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeTab === 'meta'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="hidden sm:inline">Meta & Tier List</span>
              <span className="sm:hidden">Meta</span>
            </button>

            <button
              onClick={() => onSelectTab('counters')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition ${
                activeTab === 'counters'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                  : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
              }`}
            >
              <Swords className="w-4 h-4" />
              <span className="hidden sm:inline">Counters</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

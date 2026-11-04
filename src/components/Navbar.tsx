import React, { useState } from 'react';
import type { AppTab, GameId } from '../types/game';
import { SUPPORTED_GAMES } from '../games/registry';
import { TRANSLATIONS, type Language } from '../utils/i18n';
import { useUserProfile } from '../utils/userProfileStorage';
import { 
  Crosshair, 
  Users,
  Gamepad2, 
  BarChart3, 
  Swords, 
  ChevronDown, 
  Sun, 
  Moon, 
  Globe,
  User
} from 'lucide-react';

interface NavbarProps {
  currentGame: GameId;
  onSelectGame: (game: GameId) => void;
  activeTab: AppTab;
  onSelectTab: (tab: AppTab) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  language: Language;
  onToggleLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentGame,
  onSelectGame,
  activeTab,
  onSelectTab,
  theme,
  onToggleTheme,
  language,
  onToggleLanguage,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { profile } = useUserProfile();
  const t = TRANSLATIONS[language];
  const activeGameMeta = SUPPORTED_GAMES.find(g => g.id === currentGame) || SUPPORTED_GAMES[0];

  const isDark = theme === 'dark';

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-200 ${
      isDark ? 'bg-[#090d16]/95 border-slate-800' : 'bg-white/95 border-slate-200 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Top Bar on Desktop or Row 1 on Mobile/Tablet */}
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
          {/* Logo & Branding (Protected against squishing/shrinking) */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
            <div
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer select-none flex-shrink-0"
              onClick={() => onSelectTab('coach')}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20 text-white font-black text-lg sm:text-xl tracking-wider flex-shrink-0">
                R
              </div>
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <span className={`text-base sm:text-xl font-extrabold tracking-tight font-mono ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    RECALL<span className="text-orange-500">.GG</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center px-1.5 py-0.2 rounded text-[10px] sm:text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    {t.freeBadge}
                  </span>
                </div>
                <p className={`hidden sm:block text-[10px] font-medium tracking-wide ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {t.tagline}
                </p>
              </div>
            </div>

            {/* Game Selector Dropdown */}
            <div className="relative flex-shrink-0">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs sm:text-sm font-semibold border transition ${
                  isDark
                    ? 'bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border-slate-700/60'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                }`}
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500 inline-block animate-pulse"></span>
                <span className="font-bold">{activeGameMeta.name}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {dropdownOpen && (
                <div className={`absolute left-0 mt-2 w-64 rounded-xl border shadow-2xl py-2 z-50 ${
                  isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
                }`}>
                  <div className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {t.selectGame}
                  </div>
                  {SUPPORTED_GAMES.map(game => (
                    <button
                      key={game.id}
                      type="button"
                      onClick={() => {
                        if (game.active) {
                          onSelectGame(game.id);
                          setDropdownOpen(false);
                        }
                      }}
                      disabled={!game.active}
                      className={`w-full text-left px-3 py-2.5 flex items-center justify-between text-sm transition ${
                        game.id === currentGame
                          ? 'bg-orange-500/10 text-orange-500 font-semibold'
                          : game.active
                          ? isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
                          : 'text-slate-400 cursor-not-allowed opacity-50'
                      }`}
                    >
                      <div>
                        <div className="font-medium">{game.name}</div>
                        <div className="text-xs text-slate-400">{game.tagline}</div>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                        game.active ? 'bg-orange-500/20 text-orange-500' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {game.badge}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation Tabs (Visible on screens >= 1280px to prevent crowding) */}
          <nav className="hidden xl:flex items-center space-x-1 sm:space-x-1.5">
            <button
              type="button"
              onClick={() => onSelectTab('coach')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                activeTab === 'coach'
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                  : isDark
                  ? 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Crosshair className="w-4 h-4" />
              <span>{t.coachTab}</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('profile')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                activeTab === 'profile'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/25'
                  : isDark
                  ? 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <User className="w-4 h-4" />
              <span>{t.profileTab}</span>
              {profile && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              )}
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('heroes')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                activeTab === 'heroes'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                  : isDark
                  ? 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>{t.heroesTab}</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('counters')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                activeTab === 'counters'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                  : isDark
                  ? 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Swords className="w-4 h-4" />
              <span>{t.countersTab}</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('meta')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                activeTab === 'meta'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : isDark
                  ? 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>{t.metaTab}</span>
            </button>

            <button
              type="button"
              onClick={() => onSelectTab('guesser')}
              className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                activeTab === 'guesser'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                  : isDark
                  ? 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>{t.guesserTab}</span>
            </button>
          </nav>

          {/* Theme & Language Controls */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 pl-1.5 sm:pl-2 border-l border-slate-700/50 flex-shrink-0">
            {/* Language Switch */}
            <button
              type="button"
              onClick={() => onToggleLanguage(language === 'es' ? 'en' : 'es')}
              className={`flex items-center space-x-1 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-bold border transition ${
                isDark
                  ? 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              }`}
              title="Cambiar Idioma / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-orange-500" />
              <span className="uppercase text-[11px] sm:text-xs">{language}</span>
            </button>

            {/* Theme Switch */}
            <button
              type="button"
              onClick={onToggleTheme}
              className={`p-1.5 sm:p-2 rounded-lg border transition ${
                isDark
                  ? 'bg-slate-800 text-amber-400 border-slate-700 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
              }`}
              title={isDark ? t.lightMode : t.darkMode}
            >
              {isDark ? <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Tab Bar (Row 2, active on screens < xl) */}
        <nav className="flex xl:hidden items-center justify-start md:justify-center space-x-1.5 sm:space-x-2.5 overflow-x-auto py-2.5 -mx-3 sm:-mx-6 lg:-mx-8 px-3 sm:px-6 lg:px-8 border-t border-slate-800/40 overscroll-contain no-scrollbar">
          <button
            type="button"
            onClick={() => onSelectTab('coach')}
            className={`flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex-shrink-0 whitespace-nowrap active:scale-95 ${
              activeTab === 'coach'
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                : isDark
                ? 'bg-slate-800/80 text-slate-300 border border-slate-700/80 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200'
            }`}
          >
            <Crosshair className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
            <span>{t.coachTab}</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('profile')}
            className={`flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex-shrink-0 whitespace-nowrap active:scale-95 ${
              activeTab === 'profile'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/30'
                : isDark
                ? 'bg-slate-800/80 text-slate-300 border border-slate-700/80 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            <span>{t.profileTab}</span>
            {profile && <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />}
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('heroes')}
            className={`flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex-shrink-0 whitespace-nowrap active:scale-95 ${
              activeTab === 'heroes'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30'
                : isDark
                ? 'bg-slate-800/80 text-slate-300 border border-slate-700/80 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200'
            }`}
          >
            <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
            <span>{t.heroesTab}</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('counters')}
            className={`flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex-shrink-0 whitespace-nowrap active:scale-95 ${
              activeTab === 'counters'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : isDark
                ? 'bg-slate-800/80 text-slate-300 border border-slate-700/80 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200'
            }`}
          >
            <Swords className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            <span>{t.countersTab}</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('meta')}
            className={`flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex-shrink-0 whitespace-nowrap active:scale-95 ${
              activeTab === 'meta'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                : isDark
                ? 'bg-slate-800/80 text-slate-300 border border-slate-700/80 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
            <span>{t.metaTab}</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectTab('guesser')}
            className={`flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex-shrink-0 whitespace-nowrap active:scale-95 ${
              activeTab === 'guesser'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : isDark
                ? 'bg-slate-800/80 text-slate-300 border border-slate-700/80 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
            <span>{t.guesserTab}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

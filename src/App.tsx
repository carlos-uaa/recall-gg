import { useState, useEffect } from 'react';
import type { GameId } from './types/game';
import type { Language } from './utils/i18n';
import { Navbar } from './components/Navbar';
import { CoachView } from './components/coach/CoachView';
import { GuesserView } from './components/guesser/GuesserView';
import { MetaView } from './components/meta/MetaView';
import { CountersView } from './components/counters/CountersView';
import { Gamepad2 } from 'lucide-react';

export function App() {
  const [currentGame, setCurrentGame] = useState<GameId>('overwatch');
  const [activeTab, setActiveTab] = useState<'coach' | 'guesser' | 'meta' | 'counters'>('coach');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [language, setLanguage] = useState<Language>('es');

  // Sync background of HTML body with theme
  useEffect(() => {
    if (theme === 'light') {
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
    } else {
      document.body.style.backgroundColor = '#070a12';
      document.body.style.color = '#f8fafc';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-200 selection:bg-orange-500 selection:text-white ${
      isDark ? 'bg-[#070a12] text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Top Navbar */}
      <Navbar
        currentGame={currentGame}
        onSelectGame={setCurrentGame}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        theme={theme}
        onToggleTheme={toggleTheme}
        language={language}
        onToggleLanguage={setLanguage}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {currentGame === 'overwatch' ? (
          <>
            {activeTab === 'coach' && <CoachView language={language} theme={theme} />}
            {activeTab === 'guesser' && <GuesserView language={language} theme={theme} />}
            {activeTab === 'meta' && <MetaView language={language} theme={theme} />}
            {activeTab === 'counters' && <CountersView language={language} theme={theme} />}
          </>
        ) : (
          /* Multi-game Teaser */
          <div className={`border rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto my-12 backdrop-blur shadow-2xl ${
            isDark ? 'bg-slate-900/60 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mx-auto mb-4 text-orange-500">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black">
              Soporte para {currentGame === 'marvel-rivals' ? 'Marvel Rivals' : 'Valorant'}
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-md mx-auto">
              {currentGame === 'marvel-rivals'
                ? 'Estamos adaptando la matriz para la mecánica exclusiva de Team-Ups, Vanguards, Duelistas y destrucción de mapa.'
                : 'Próximamente: Asistente de utilidades por Site (Humos, Flashes, Info) y análisis de composiciones de agentes.'}
            </p>
            <button
              onClick={() => setCurrentGame('overwatch')}
              className="mt-6 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-orange-600/30"
            >
              Volver a Overwatch 2
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`border-t py-8 text-center text-xs transition-colors duration-200 ${
        isDark ? 'border-slate-800/80 bg-slate-950/80 text-slate-500' : 'border-slate-200 bg-white text-slate-400'
      }`}>
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="flex items-center justify-center space-x-2 font-mono">
            <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>RECALL.GG</span>
            <span>•</span>
            <span>100% Free & Open Overwatch Community Coach & Gaming Hub</span>
          </div>
          <p className="text-[11px] opacity-75">
            Diseñado como proyecto táctico y recreativo independiente. Overwatch es marca registrada de Blizzard Entertainment.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

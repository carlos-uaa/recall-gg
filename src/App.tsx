import { useState } from 'react';
import type { GameId } from './types/game';
import { Navbar } from './components/Navbar';
import { CoachView } from './components/coach/CoachView';
import { GuesserView } from './components/guesser/GuesserView';
import { MetaView } from './components/meta/MetaView';
import { CountersView } from './components/counters/CountersView';
import { Gamepad2 } from 'lucide-react';

export function App() {
  const [currentGame, setCurrentGame] = useState<GameId>('overwatch');
  const [activeTab, setActiveTab] = useState<'coach' | 'guesser' | 'meta' | 'counters'>('coach');

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentGame={currentGame}
        onSelectGame={setCurrentGame}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Game Content Switcher */}
        {currentGame === 'overwatch' ? (
          <>
            {activeTab === 'coach' && <CoachView />}
            {activeTab === 'guesser' && <GuesserView />}
            {activeTab === 'meta' && <MetaView />}
            {activeTab === 'counters' && <CountersView />}
          </>
        ) : (
          /* Multi-game Coming Soon Teaser */
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto my-12 backdrop-blur shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-4 text-orange-400">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
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
      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <div className="flex items-center justify-center space-x-2 font-mono text-slate-400">
            <span className="font-bold text-white">RECALL.GG</span>
            <span>•</span>
            <span>Herramienta Abierta y Gratuita para la Comunidad Gamer</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Diseñado como proyecto táctico y recreativo independiente. Overwatch es marca registrada de Blizzard Entertainment.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

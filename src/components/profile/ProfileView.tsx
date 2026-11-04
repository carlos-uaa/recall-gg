import React, { useState, useMemo } from 'react';
import { TRANSLATIONS, type Language } from '../../utils/i18n';
import type { Role, RankTier } from '../../types/game';
import type { UserProfileData, HeroPlayerStats } from '../../types/userProfile';
import { useUserProfile, DEMO_PROFILES } from '../../utils/userProfileStorage';
import {
  searchPlayers,
  fetchPlayerProfile,
  formatRankName,
  extractPlayerIdFromInput,
  RANK_NAMES_ES,
  type PlayerSearchResult
} from '../../utils/playerStatsApi';
import { OVERWATCH_HEROES } from '../../games/overwatch/heroes';
import { OVERWATCH_HERO_KITS } from '../../games/overwatch/heroKits';
import {
  Search,
  User,
  Trophy,
  Shield,
  Crosshair,
  Heart,
  Sparkles,
  Clock,
  Flame,
  TrendingUp,
  Percent,
  Star,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  X,
  Target,
  Zap,
  Info,
  SlidersHorizontal,
  Check,
  ChevronRight
} from 'lucide-react';

interface ProfileViewProps {
  language?: Language;
  theme?: 'dark' | 'light';
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  language = 'es',
  theme = 'dark',
}) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[language];
  const { profile, setProfile, loadDemoProfile, clearProfile } = useUserProfile();

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<PlayerSearchResult[] | null>(null);
  const [candidateFilter, setCandidateFilter] = useState('');
  const [loadingPlayerId, setLoadingPlayerId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<Role | 'all'>('all');
  const [selectedHeroId, setSelectedHeroId] = useState<string>('ana');

  // Manual configuration modal state
  const [showManualModal, setShowManualModal] = useState(false);
  const [manualTag, setManualTag] = useState('Nano#13824');
  const [manualTitle, setManualTitle] = useState('Jugador Competitivo');
  const [manualTankTier, setManualTankTier] = useState<RankTier | 'none'>('none');
  const [manualTankDiv, setManualTankDiv] = useState(3);
  const [manualDamageTier, setManualDamageTier] = useState<RankTier | 'none'>('diamond');
  const [manualDamageDiv, setManualDamageDiv] = useState(4);
  const [manualSupportTier, setManualSupportTier] = useState<RankTier | 'none'>('platinum');
  const [manualSupportDiv, setManualSupportDiv] = useState(1);
  const [manualMains, setManualMains] = useState<string[]>(['ana', 'kiriko', 'tracer']);

  // Handle Search Submission
  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    setIsSearching(true);
    setErrorMessage(null);
    setSearchResults(null);

    try {
      // 1. Detectar si el usuario pegó un enlace directo de Blizzard o un BattleTag exacto (ej: Nano#13824 -> Nano-13824)
      const extracted = extractPlayerIdFromInput(query);
      if (extracted.type === 'id') {
        try {
          setLoadingPlayerId(extracted.value);
          const fullProfile = await fetchPlayerProfile(extracted.value, query);
          setProfile(fullProfile);
          setSearchResults(null);
          setSearchQuery('');
          return;
        } catch (idErr: any) {
          console.warn('Direct ID/BattleTag lookup failed, falling through to search:', idErr);
        }
      }

      // 2. Búsqueda por nombre o BattleTag
      const results = await searchPlayers(query);
      if (!results || results.length === 0) {
        setErrorMessage(
          `No se encontró ningún registro público en Blizzard para "${query}". Si acabas de poner tu perfil en público, Blizzard puede tardar un tiempo en indexarlo. Puedes pegar tu enlace directo de Blizzard o usar el botón "Configurar Manual".`
        );
        return;
      }

      if (results.length === 1) {
        const target = results[0];
        setLoadingPlayerId(target.playerId);
        const fullProfile = await fetchPlayerProfile(target.playerId, query);
        setProfile(fullProfile);
        setSearchResults(null);
        setSearchQuery('');
      } else {
        // Multiple matching accounts found! Display list for user to select
        setSearchResults(results);
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Error al consultar las estadísticas');
    } finally {
      setIsSearching(false);
      setLoadingPlayerId(null);
    }
  };

  // Select a specific candidate from multiple search results
  const handleSelectCandidate = async (candidate: PlayerSearchResult) => {
    setLoadingPlayerId(candidate.playerId);
    setErrorMessage(null);
    try {
      const fullProfile = await fetchPlayerProfile(candidate.playerId, searchQuery || candidate.name);
      setProfile(fullProfile);
      setSearchResults(null);
      setSearchQuery('');
    } catch (err: any) {
      setErrorMessage(err.message || 'No se pudo cargar este perfil.');
    } finally {
      setLoadingPlayerId(null);
    }
  };

  // Save manual profile configuration
  const handleSaveManualProfile = () => {
    const cleanTag = manualTag.trim() || 'Jugador#1234';
    const username = cleanTag.includes('#') ? cleanTag.split('#')[0] : cleanTag;
    const ranks: UserProfileData['ranks'] = {};

    if (manualTankTier !== 'none') {
      ranks.tank = {
        role: 'tank',
        tier: manualTankTier,
        division: manualTankDiv,
        rankName: formatRankName(manualTankTier, manualTankDiv, language),
      };
    }

    if (manualDamageTier !== 'none') {
      ranks.damage = {
        role: 'damage',
        tier: manualDamageTier,
        division: manualDamageDiv,
        rankName: formatRankName(manualDamageTier, manualDamageDiv, language),
      };
    }

    if (manualSupportTier !== 'none') {
      ranks.support = {
        role: 'support',
        tier: manualSupportTier,
        division: manualSupportDiv,
        rankName: formatRankName(manualSupportTier, manualSupportDiv, language),
      };
    }

    const topHeroes: HeroPlayerStats[] = manualMains.map((heroId, idx) => {
      const h = OVERWATCH_HEROES.find(item => item.id === heroId);
      const heroName = h?.name || heroId;
      const role = h?.role || 'damage';
      const hours = [85, 52, 34][idx] || 25;
      const wr = [59.4, 56.1, 53.8][idx] || 52;
      return {
        heroId,
        heroName,
        role,
        gamesPlayed: Math.round(hours * 4.2),
        gamesWon: Math.round(hours * 4.2 * (wr / 100)),
        gamesLost: Math.round(hours * 4.2 * ((100 - wr) / 100)),
        timePlayedHours: hours,
        winrate: wr,
        kda: 3.5,
        avgElimsPer10: 16.5,
        avgDeathsPer10: 4.8,
        avgDamagePer10: 7800,
        avgHealingPer10: role === 'support' ? 8900 : 0,
        weaponAccuracy: 48,
        criticalHitAccuracy: 16,
      };
    });

    const allHeroStats: Record<string, HeroPlayerStats> = {};
    topHeroes.forEach(h => {
      allHeroStats[h.heroId] = h;
    });

    const customProfile: UserProfileData = {
      username,
      tag: cleanTag,
      title: manualTitle.trim() || undefined,
      avatarUrl:
        'https://d15f34w2p8l1cc.cloudfront.net/overwatch/76516371683932b558b1f58df3134e34f72b3d0c97077d8364cd73a7f313da92.png',
      endorsementLevel: 3,
      isPublic: true,
      lastUpdated: 'Personalizado',
      source: 'custom',
      ranks,
      general: {
        totalGames: topHeroes.reduce((acc, h) => acc + h.gamesPlayed, 0),
        totalWins: topHeroes.reduce((acc, h) => acc + h.gamesWon, 0),
        totalLosses: topHeroes.reduce((acc, h) => acc + h.gamesLost, 0),
        winrate: 56.5,
        totalTimeHours: topHeroes.reduce((acc, h) => acc + h.timePlayedHours, 0),
        kda: 3.6,
        avgElimsPer10: 17.2,
        avgDeathsPer10: 4.7,
        avgDamagePer10: 8200,
        avgHealingPer10: 6400,
      },
      topHeroes,
      allHeroStats,
    };

    setProfile(customProfile);
    setShowManualModal(false);
    setSearchResults(null);
    setErrorMessage(null);
  };

  // Active or Fallback Profile (defaults to Nano#13824 Ángel Celestial)
  const activeProfile: UserProfileData = useMemo(() => {
    if (profile) return profile;
    return DEMO_PROFILES.nano || DEMO_PROFILES.karq;
  }, [profile]);

  const hasLoadedProfile = Boolean(profile);

  // List of heroes in the profile
  const availableHeroes: HeroPlayerStats[] = useMemo(() => {
    const list = Object.values(activeProfile.allHeroStats);
    if (list.length > 0) {
      return list;
    }
    return activeProfile.topHeroes;
  }, [activeProfile]);

  // Filtered heroes list
  const filteredHeroes = useMemo(() => {
    return availableHeroes.filter(h => {
      if (selectedRoleFilter === 'all') return true;
      return h.role === selectedRoleFilter;
    });
  }, [availableHeroes, selectedRoleFilter]);

  // Selected hero stats object
  const currentHeroStats: HeroPlayerStats = useMemo(() => {
    const found = availableHeroes.find(h => h.heroId === selectedHeroId);
    if (found) return found;
    return availableHeroes[0] || activeProfile.topHeroes[0];
  }, [availableHeroes, selectedHeroId]);

  // Selected hero metadata (icon, color)
  const heroMeta = useMemo(() => {
    const hero = OVERWATCH_HEROES.find(h => h.id === currentHeroStats.heroId);
    const kit = OVERWATCH_HERO_KITS[currentHeroStats.heroId];
    return {
      hero,
      kit,
      color: kit?.accentColor || currentHeroStats.color || '#38bdf8',
    };
  }, [currentHeroStats]);

  // Role Breakdown Calculations
  const roleDistribution = useMemo(() => {
    let tankHours = 0;
    let dpsHours = 0;
    let supportHours = 0;

    availableHeroes.forEach(h => {
      if (h.role === 'tank') tankHours += h.timePlayedHours;
      else if (h.role === 'damage') dpsHours += h.timePlayedHours;
      else if (h.role === 'support') supportHours += h.timePlayedHours;
    });

    const total = Math.max(1, tankHours + dpsHours + supportHours);
    return {
      tankHours: Math.round(tankHours),
      dpsHours: Math.round(dpsHours),
      supportHours: Math.round(supportHours),
      tankPct: Math.round((tankHours / total) * 100),
      dpsPct: Math.round((dpsHours / total) * 100),
      supportPct: Math.max(0, 100 - Math.round((tankHours / total) * 100) - Math.round((dpsHours / total) * 100)),
    };
  }, [availableHeroes]);

  return (
    <div className="space-y-6">
      {/* 1. TOP HEADER & SEARCH / CONNECT BAR */}
      <section
        className={`rounded-3xl border p-5 sm:p-7 shadow-xl backdrop-blur transition-all duration-300 ${
          isDark
            ? 'bg-gradient-to-br from-slate-900/95 via-[#0b101d]/90 to-slate-900/95 border-slate-800'
            : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 pb-6 border-b border-slate-700/30">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/30">
                ESTADÍSTICAS OFICIALES DE BLIZZARD
              </span>
              <span className="text-xs text-slate-400">OverFast & Web Scraping Sync</span>
            </div>
            <h1
              className={`text-2xl sm:text-3xl font-black tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {language === 'es' ? 'Panel del Usuario & Historial' : 'Player Stats Dashboard'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {language === 'es'
                ? 'Consulta tus victorias, K/D, horas por héroe y rangos de Overwatch 2. Las estadísticas de tus Mains se vinculan automáticamente al Asistente Táctico para darte recomendaciones personalizadas.'
                : 'Inspect your win rates, K/D, hours per hero, and competitive ranks. Your main hero stats automatically link with the Tactical Coach to give you personalized recommendations.'}
            </p>
          </div>

          {/* Quick Demo Profile Switcher Chips */}
          <div className="flex flex-col sm:items-end gap-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
              {language === 'es' ? 'Perfiles de prueba disponibles:' : 'Preset demo profiles:'}
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                type="button"
                onClick={() => {
                  loadDemoProfile('nano');
                  setErrorMessage(null);
                }}
                className={`px-3 py-1 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 active:scale-95 ${
                  activeProfile.username === 'Nano' && (activeProfile.title === 'Ángel Celestial' || activeProfile.title === 'Celestial Angel')
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white border-orange-400 shadow-md shadow-orange-500/30'
                    : isDark
                    ? 'bg-slate-800/80 hover:bg-slate-700 text-amber-300 border-slate-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-amber-800 border-slate-300'
                }`}
                title="Cargar perfil oficial verificado de Nano#13824 (Ángel Celestial)"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Nano#13824 (Ángel Celestial)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  loadDemoProfile('karq');
                  setErrorMessage(null);
                }}
                className={`px-3 py-1 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 active:scale-95 ${
                  activeProfile.username === 'KarQ' && hasLoadedProfile
                    ? 'bg-orange-500 text-white border-orange-400 shadow-md shadow-orange-500/30'
                    : isDark
                    ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                }`}
              >
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                <span>KarQ (Support)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  loadDemoProfile('super');
                  setErrorMessage(null);
                }}
                className={`px-3 py-1 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 active:scale-95 ${
                  activeProfile.username === 'SuperTF' && hasLoadedProfile
                    ? 'bg-orange-500 text-white border-orange-400 shadow-md shadow-orange-500/30'
                    : isDark
                    ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                }`}
              >
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Super (Tank)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  loadDemoProfile('proper');
                  setErrorMessage(null);
                }}
                className={`px-3 py-1 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 active:scale-95 ${
                  activeProfile.username === 'ProperOW' && hasLoadedProfile
                    ? 'bg-orange-500 text-white border-orange-400 shadow-md shadow-orange-500/30'
                    : isDark
                    ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-300 border-slate-700'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                }`}
              >
                <Crosshair className="w-3.5 h-3.5 text-sky-400" />
                <span>Proper (DPS)</span>
              </button>

              {hasLoadedProfile && (
                <button
                  type="button"
                  onClick={() => clearProfile()}
                  title="Desvincular perfil y volver al modo manual"
                  className="p-1.5 rounded-xl border border-red-500/40 text-red-400 hover:bg-red-500/10 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Search Input Form */}
        <form onSubmit={handleSearch} className="mt-5 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="BattleTag (ej: KarQ#1234), nombre, o enlace directo (overwatch.blizzard.com/career/...)..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                isDark
                  ? 'bg-slate-950/80 border-slate-800 text-white placeholder-slate-500'
                  : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>

          <button
            type="submit"
            disabled={isSearching || !searchQuery.trim()}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider transition shadow-lg shadow-orange-600/25 flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
          >
            {isSearching ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Buscando...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                <span>Consultar</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              if (searchQuery.trim()) {
                setManualTag(searchQuery.trim());
              }
              setShowManualModal(true);
            }}
            className={`w-full sm:w-auto px-4 py-2.5 rounded-xl border text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer flex-shrink-0 ${
              isDark
                ? 'bg-slate-800/80 hover:bg-slate-700 text-slate-200 border-slate-700'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
            }`}
            title="Configurar manualmente tu BattleTag, rangos y mains sin depender de los servidores web de Blizzard"
          >
            <SlidersHorizontal className="w-4 h-4 text-orange-400" />
            <span>Configurar Manual</span>
          </button>
        </form>

        <p className="mt-2 text-[11px] text-slate-400 flex items-center gap-1.5 flex-wrap">
          <Info className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
          <span>
            {language === 'es'
              ? 'Consejo: Si acabas de poner tu perfil en público, puedes pegar directamente el enlace de tu trayectoria de Blizzard o pulsar "Configurar Manual".'
              : 'Tip: If you just set your profile to public, you can paste your direct Blizzard career link or click "Configurar Manual".'}
          </span>
        </p>

        {/* MULTIPLE MATCHING RESULTS PICKER */}
        {searchResults && searchResults.length > 0 && (
          <div
            className={`mt-5 p-4 sm:p-5 rounded-2xl border space-y-3.5 transition-all animate-in fade-in duration-200 ${
              isDark ? 'bg-slate-950/90 border-slate-700' : 'bg-slate-100 border-slate-300'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-orange-400 flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  <span>Cuentas coincidentes en Blizzard ({searchResults.length} encontradas)</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Varios jugadores comparten este nombre. Elige tu cuenta verificando tu Título o Avatar:
                </p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={candidateFilter}
                  onChange={e => setCandidateFilter(e.target.value)}
                  placeholder="Filtrar por título..."
                  className={`px-3 py-1.5 rounded-xl border text-xs ${
                    isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setSearchResults(null)}
                  className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Privacy notice banner */}
            <div className="p-3 rounded-xl border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs flex items-start gap-2.5">
              <Info className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>¿No reconoces tu cuenta entre las opciones?</strong> Si tu perfil en Overwatch 2 está en <em>Privado</em> o <em>Solo amigos</em>, Blizzard no lo incluye en su buscador web público. Puedes cambiarlo en el juego (<em>Ajustes &gt; Social &gt; Privacidad &gt; Visibilidad: Público</em>) o pulsar <strong>"Configurar Manual"</strong> para vincular <span className="font-bold underline text-white">{searchQuery || 'Nano#13824'}</span> directamente con tus rangos y mains.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
              {searchResults
                .filter(r => {
                  if (!candidateFilter.trim()) return true;
                  const f = candidateFilter.toLowerCase();
                  return (
                    (r.title && r.title.toLowerCase().includes(f)) ||
                    r.name.toLowerCase().includes(f)
                  );
                })
                .map((r, idx) => (
                  <div
                    key={r.playerId || idx}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition ${
                      isDark
                        ? 'bg-slate-900/90 border-slate-800 hover:border-orange-500/60'
                        : 'bg-white border-slate-200 hover:border-orange-400'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={
                          r.avatar ||
                          'https://d15f34w2p8l1cc.cloudfront.net/overwatch/76516371683932b558b1f58df3134e34f72b3d0c97077d8364cd73a7f313da92.png'
                        }
                        alt=""
                        className="w-10 h-10 rounded-xl object-cover bg-slate-950 flex-shrink-0 border border-white/10"
                      />
                      <div className="min-w-0">
                        <span className="text-xs font-black truncate block text-white">{r.name}</span>
                        <span className="text-[11px] font-bold text-orange-400 truncate block">
                          {r.title || 'Sin título'}
                        </span>
                        <span
                          className={`text-[10px] font-mono ${
                            r.isPublic ? 'text-emerald-400' : 'text-slate-500'
                          }`}
                        >
                          {r.isPublic ? '● Perfil Público' : '○ Perfil Privado'}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={loadingPlayerId === r.playerId}
                      onClick={() => handleSelectCandidate(r)}
                      className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider transition flex-shrink-0 active:scale-95 shadow"
                    >
                      {loadingPlayerId === r.playerId ? (
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        'Elegir'
                      )}
                    </button>
                  </div>
                ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs">
              <span className="text-slate-400">¿Prefieres guardar tus datos exactos de inmediato?</span>
              <button
                type="button"
                onClick={() => {
                  setManualTag(searchQuery || 'Nano#13824');
                  setShowManualModal(true);
                }}
                className="text-xs font-bold text-orange-400 hover:underline flex items-center gap-1"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Configurar "{searchQuery || 'Nano#13824'}" manualmente</span>
              </button>
            </div>
          </div>
        )}

        {/* Error message alert */}
        {errorMessage && (
          <div className="mt-4 p-3.5 rounded-xl border text-xs flex items-start gap-3 bg-rose-500/10 border-rose-500/40 text-rose-300">
            <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1.5 flex-1">
              <strong className="font-bold block">No pudimos conectar con ese perfil</strong>
              <p>{errorMessage}</p>
              <div className="pt-1 flex items-center gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => {
                    setManualTag(searchQuery || 'Nano#13824');
                    setShowManualModal(true);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs shadow flex items-center gap-1.5"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Configurar "{searchQuery || 'Nano#13824'}" manualmente</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    loadDemoProfile('karq');
                    setErrorMessage(null);
                  }}
                  className="underline text-orange-400 hover:text-orange-300 font-bold text-xs"
                >
                  Probar el perfil demo de KarQ
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 2. PLAYER PROFILE HERO CARD (AVATAR, NAMECARD, TITLE, RANKS) */}
      <section
        className={`relative rounded-3xl border overflow-hidden p-5 sm:p-7 shadow-xl transition ${
          isDark ? 'bg-[#0f1422] border-slate-800' : 'bg-white border-slate-200'
        }`}
      >
        {/* Subtle Ambient Background */}
        <div
          aria-hidden="true"
          style={{
            backgroundImage: activeProfile.namecardUrl ? `url(${activeProfile.namecardUrl})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="absolute inset-0 opacity-15 pointer-events-none filter blur-[2px]"
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Avatar and Identity */}
          <div className="flex items-center gap-4 sm:gap-5 min-w-0">
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-orange-500/60 overflow-hidden shadow-xl bg-slate-950 p-0.5">
                <img
                  src={activeProfile.avatarUrl || 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/279f3b9a6e44f334b204917dd4b57f7101f55d994140f9b793d2b35758915a02.png'}
                  alt={activeProfile.username}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div
                title={`Nivel de elogio: ${activeProfile.endorsementLevel}`}
                className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-slate-950 border border-amber-400 flex items-center justify-center text-[11px] font-black font-mono text-amber-400 shadow-md"
              >
                {activeProfile.endorsementLevel}
              </div>
            </div>

            <div className="min-w-0 space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black tracking-tight truncate text-white">
                  {activeProfile.username}
                </h2>
                {activeProfile.tag && activeProfile.tag !== activeProfile.username && (
                  <span className="text-xs font-mono text-slate-400">
                    {activeProfile.tag}
                  </span>
                )}
                {activeProfile.source === 'demo' && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-amber-500/20 text-amber-400 border border-amber-500/40">
                    DEMO
                  </span>
                )}
              </div>

              {activeProfile.title && (
                <p className="text-xs font-bold text-orange-400">
                  {activeProfile.title}
                </p>
              )}

              <div className="flex items-center gap-2 pt-0.5 text-[11px] font-mono text-slate-400 flex-wrap">
                <span className="inline-flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Perfil Público
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1 text-sky-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  Sincronizado con Coach Táctico
                </span>
              </div>
            </div>
          </div>

          {/* Triple Role Ranks */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            {/* Tank Rank */}
            <div
              className={`p-2.5 sm:p-3 rounded-2xl border flex items-center gap-2.5 min-w-[130px] ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">{t.tank}</span>
                {activeProfile.ranks.tank?.rankName ? (
                  <span className="text-xs font-black truncate block text-slate-200">
                    {activeProfile.ranks.tank.rankName}
                  </span>
                ) : (
                  <span className="text-xs font-medium text-slate-500 italic block">
                    {language === 'en' ? 'Unranked' : 'Sin rango'}
                  </span>
                )}
              </div>
            </div>

            {/* Damage Rank */}
            <div
              className={`p-2.5 sm:p-3 rounded-2xl border flex items-center gap-2.5 min-w-[130px] ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0">
                <Crosshair className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">{t.damage}</span>
                {activeProfile.ranks.damage?.rankName ? (
                  <span className="text-xs font-black truncate block text-slate-200">
                    {activeProfile.ranks.damage.rankName}
                  </span>
                ) : (
                  <span className="text-xs font-medium text-slate-500 italic block">
                    {language === 'en' ? 'Unranked' : 'Sin rango'}
                  </span>
                )}
              </div>
            </div>

            {/* Support Rank */}
            <div
              className={`p-2.5 sm:p-3 rounded-2xl border flex items-center gap-2.5 min-w-[130px] ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <Heart className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">{t.support}</span>
                {activeProfile.ranks.support?.rankName ? (
                  <span className="text-xs font-black truncate block text-slate-200">
                    {activeProfile.ranks.support.rankName}
                  </span>
                ) : (
                  <span className="text-xs font-medium text-slate-500 italic block">
                    {language === 'en' ? 'Unranked' : 'Sin rango'}
                  </span>
                )}
              </div>
            </div>

            {/* Open Queue / Cola Abierta Rank if present */}
            {activeProfile.ranks.open?.rankName && (
              <div
                className={`p-2.5 sm:p-3 rounded-2xl border flex items-center gap-2.5 min-w-[130px] ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">Cola Abierta</span>
                  <span className="text-xs font-black truncate block text-slate-200">
                    {activeProfile.ranks.open.rankName.replace('Cola Abierta: ', '')}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. OVERVIEW KPIS WITH PROGRESS-RING & ACCESSIBLE DATA CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Win Rate KPI with Semantic Progress-Ring */}
        <div
          className={`p-5 rounded-3xl border flex items-center gap-4 transition shadow-lg ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          {/* Progress ring using conic-gradient as specified by modern web guidance */}
          <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
            <div
              style={{
                background: `conic-gradient(#f97316 ${activeProfile.general.winrate}%, #1e293b 0)`,
              }}
              className="w-16 h-16 rounded-full flex items-center justify-center p-2 shadow-inner"
            >
              <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center text-xs font-black text-orange-400">
                {activeProfile.general.winrate}%
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">
              WIN RATE GENERAL
            </span>
            <div className="text-lg font-black text-white">
              {activeProfile.general.winrate}%
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {activeProfile.general.totalWins}W — {activeProfile.general.totalLosses}L
            </p>
          </div>
        </div>

        {/* K/D Ratio & Eliminations */}
        <div
          className={`p-5 rounded-3xl border flex items-center gap-4 transition shadow-lg ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 flex-shrink-0">
            <Target className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">
              RATIO K/D & ELIMINACIONES
            </span>
            <div className="text-lg font-black text-white">
              {activeProfile.general.kda.toFixed(2)} K/D
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {activeProfile.general.avgElimsPer10.toFixed(1)} elims / 10 min
            </p>
          </div>
        </div>

        {/* Total Time & Games */}
        <div
          className={`p-5 rounded-3xl border flex items-center gap-4 transition shadow-lg ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">
              TIEMPO TOTAL EN PARTIDA
            </span>
            <div className="text-lg font-black text-white">
              {activeProfile.general.totalTimeHours} Horas
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {activeProfile.general.totalGames} partidas registradas
            </p>
          </div>
        </div>

        {/* Combat Output (Damage & Healing) */}
        <div
          className={`p-5 rounded-3xl border flex items-center gap-4 transition shadow-lg ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
            <Zap className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">
              PRODUCCIÓN POR 10 MIN
            </span>
            <div className="text-sm font-black text-slate-200">
              ⚔️ {activeProfile.general.avgDamagePer10.toLocaleString()} Daño
            </div>
            <p className="text-[11px] font-bold text-emerald-400 mt-0.5">
              💚 {activeProfile.general.avgHealingPer10.toLocaleString()} Sanación
            </p>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE HERO PERFORMANCE EXPLORER WITH DYNAMIC HERO COLOR */}
      <section
        style={
          {
            '--hero-color': heroMeta.color,
            borderColor: `color-mix(in oklab, ${heroMeta.color} 40%, ${isDark ? '#1e293b' : '#cbd5e1'})`,
            boxShadow: `0 20px 50px -15px color-mix(in oklab, ${heroMeta.color} 20%, transparent)`,
          } as React.CSSProperties
        }
        className={`rounded-3xl border-2 p-5 sm:p-7 transition-all duration-500 relative overflow-hidden ${
          isDark ? 'bg-[#101524]' : 'bg-white'
        }`}
      >
        {/* Dynamic ambient color glow */}
        <div
          aria-hidden="true"
          style={{
            background: `radial-gradient(circle at 85% 20%, color-mix(in oklab, ${heroMeta.color} 22%, transparent), transparent 60%)`,
          }}
          className="absolute inset-0 pointer-events-none transition-all duration-700"
        />

        {/* Header with Hero Filter Pills */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-700/30">
          <div>
            <h3
              style={{ color: heroMeta.color }}
              className="text-xs sm:text-sm font-black uppercase tracking-[0.16em] flex items-center gap-2"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>ESTADÍSTICAS INDIVIDUALES POR PERSONAJE</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Selecciona un héroe para ver su rendimiento detallado, precisión y sinergia con el Coach.
            </p>
          </div>

          {/* Role Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-bold">
            {(['all', 'tank', 'damage', 'support'] as const).map(roleKey => (
              <button
                key={roleKey}
                type="button"
                onClick={() => setSelectedRoleFilter(roleKey)}
                className={`px-3 py-1 rounded-lg transition active:scale-95 ${
                  selectedRoleFilter === roleKey
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {roleKey === 'all'
                  ? 'Todos'
                  : roleKey === 'tank'
                  ? 'Tanques'
                  : roleKey === 'damage'
                  ? 'Daño'
                  : 'Apoyo'}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Selector Chips (Horizontal Scrollable) */}
        <div className="relative z-10 flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
          {filteredHeroes.map(h => {
            const isSelected = h.heroId === selectedHeroId;
            const heroData = OVERWATCH_HEROES.find(item => item.id === h.heroId);
            const heroColor = OVERWATCH_HERO_KITS[h.heroId]?.accentColor || '#38bdf8';

            return (
              <button
                key={h.heroId}
                type="button"
                onClick={() => setSelectedHeroId(h.heroId)}
                style={
                  isSelected
                    ? {
                        borderColor: heroColor,
                        backgroundColor: `color-mix(in oklab, ${heroColor} 18%, transparent)`,
                        boxShadow: `0 0 16px color-mix(in oklab, ${heroColor} 40%, transparent)`,
                      }
                    : undefined
                }
                className={`flex items-center gap-2 px-3 py-2 rounded-2xl border transition-all flex-shrink-0 cursor-pointer active:scale-95 ${
                  isSelected
                    ? 'text-white border-2'
                    : isDark
                    ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <img
                  src={heroData?.icon || 'https://tonikiraw.com/assets/img/heroes/ana.png'}
                  alt={h.heroName}
                  className="w-7 h-7 rounded-full object-cover border border-white/20"
                />
                <div className="text-left min-w-0">
                  <span className="text-xs font-black block leading-none truncate">{h.heroName}</span>
                  <span className="text-[10px] font-mono text-slate-400 block mt-0.5">
                    {h.timePlayedHours}h · <strong className="text-emerald-400">{h.winrate}%</strong>
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Hero Stats Display with Hero Color Scheme */}
        <div className="relative z-10 mt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Hero Spotlight & Portrait */}
          <div
            className={`lg:col-span-4 rounded-2xl border p-5 flex flex-col justify-between ${
              isDark ? 'bg-slate-900/75 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span
                  style={{ color: heroMeta.color, borderColor: heroMeta.color }}
                  className="text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded-full border bg-white/5"
                >
                  ROL: {currentHeroStats.role.toUpperCase()}
                </span>
                <span className="text-xs font-mono font-bold text-slate-400">
                  {currentHeroStats.timePlayedHours} Horas Jugadas
                </span>
              </div>

              <h2
                style={{ color: heroMeta.color }}
                className="text-3xl font-black italic uppercase tracking-tight mt-2"
              >
                {currentHeroStats.heroName}
              </h2>

              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                {heroMeta.hero?.description || 'Héroe de Overwatch 2'}
              </p>
            </div>

            {/* Tactical Coach Integration Card */}
            <div
              style={{
                borderColor: `color-mix(in oklab, ${heroMeta.color} 40%, transparent)`,
                backgroundColor: `color-mix(in oklab, ${heroMeta.color} 8%, transparent)`,
              }}
              className="mt-4 p-3 rounded-xl border text-xs space-y-1"
            >
              <div className="flex items-center gap-1.5 font-bold" style={{ color: heroMeta.color }}>
                <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Impacto en el Tactical Coach</span>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-300">
                Al jugar con {currentHeroStats.heroName}, el algoritmo reconoce tu{' '}
                <strong style={{ color: heroMeta.color }}>{currentHeroStats.winrate}% de efectividad</strong>{' '}
                personal y experiencia de {currentHeroStats.timePlayedHours}h, otorgando prioridad de confort cuando la partida lo amerite.
              </p>
            </div>
          </div>

          {/* Right Column: Hero Metrics & Performance Gauges */}
          <div
            className={`lg:col-span-8 rounded-2xl border p-5 sm:p-6 space-y-5 ${
              isDark ? 'bg-slate-900/75 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}
          >
            {/* Row 1: Win Rate Bar */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-slate-300">Porcentaje de Victoria (Win Rate):</span>
                <span style={{ color: heroMeta.color }} className="text-sm font-black">
                  {currentHeroStats.winrate}%
                </span>
              </div>
              <div
                role="progressbar"
                aria-label={`Win Rate de ${currentHeroStats.heroName}: ${currentHeroStats.winrate}%`}
                aria-valuenow={currentHeroStats.winrate}
                aria-valuemin={0}
                aria-valuemax={100}
                className="w-full h-3 rounded-full overflow-hidden flex gap-0.5 bg-slate-800/80 p-0.5"
              >
                <div
                  style={{
                    width: `${currentHeroStats.winrate}%`,
                    backgroundColor: heroMeta.color,
                  }}
                  className="h-full rounded-full transition-all duration-500 shadow-sm"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{currentHeroStats.gamesWon} Victorias</span>
                <span>{currentHeroStats.gamesLost} Derrotas ({currentHeroStats.gamesPlayed} partidas)</span>
              </div>
            </div>

            {/* Row 2: 4 Tactical Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl border border-slate-800 bg-slate-950/60 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">KDA Ratio</span>
                <span className="text-base font-black text-sky-400 mt-0.5 block">
                  {currentHeroStats.kda.toFixed(2)}
                </span>
                <span className="text-[10px] text-slate-500">K/D en combate</span>
              </div>

              <div className="p-3 rounded-xl border border-slate-800 bg-slate-950/60 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Elims / 10m</span>
                <span className="text-base font-black text-emerald-400 mt-0.5 block">
                  {currentHeroStats.avgElimsPer10.toFixed(1)}
                </span>
                <span className="text-[10px] text-slate-500">Bajas por partida</span>
              </div>

              <div className="p-3 rounded-xl border border-slate-800 bg-slate-950/60 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Daño / 10m</span>
                <span className="text-base font-black text-orange-400 mt-0.5 block">
                  {currentHeroStats.avgDamagePer10.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-500">Daño promedio</span>
              </div>

              <div className="p-3 rounded-xl border border-slate-800 bg-slate-950/60 text-center">
                <span className="text-[10px] font-mono text-slate-400 uppercase block">Sanación / 10m</span>
                <span className="text-base font-black text-teal-400 mt-0.5 block">
                  {currentHeroStats.avgHealingPer10.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-500">Soporte médico</span>
              </div>
            </div>

            {/* Row 3: Weapon Accuracy & Precision (if available) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-950/40 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-300 block">Puntería del Arma</span>
                  <span className="text-[10px] text-slate-500">Disparos impactados</span>
                </div>
                <span className="text-base font-mono font-black text-amber-400">
                  {currentHeroStats.weaponAccuracy !== undefined ? `${currentHeroStats.weaponAccuracy}%` : '72%'}
                </span>
              </div>

              <div className="p-3 rounded-xl border border-slate-800/80 bg-slate-950/40 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-300 block">Precisión Crítica</span>
                  <span className="text-[10px] text-slate-500">Disparos a la cabeza</span>
                </div>
                <span className="text-base font-mono font-black text-rose-400">
                  {currentHeroStats.criticalHitAccuracy !== undefined ? `${currentHeroStats.criticalHitAccuracy}%` : '18%'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VISUAL CHARTS: TOP 5 HEROES TIME COMPARISON & ROLE TIME DISTRIBUTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart A: Top 5 Heroes by Hours Played */}
        <div
          className={`rounded-3xl border p-5 sm:p-6 shadow-xl space-y-4 ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-orange-400" />
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                TOP HÉROES MÁS JUGADOS (HORAS)
              </h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Tiempo en partidas</span>
          </div>

          <div className="space-y-3 pt-1">
            {activeProfile.topHeroes.slice(0, 5).map(h => {
              const maxHours = Math.max(1, activeProfile.topHeroes[0]?.timePlayedHours || 100);
              const barWidth = Math.max(10, Math.round((h.timePlayedHours / maxHours) * 100));
              const heroColor = OVERWATCH_HERO_KITS[h.heroId]?.accentColor || '#38bdf8';

              return (
                <div key={h.heroId} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-slate-200">{h.heroName}</span>
                    <span className="font-mono text-slate-400">
                      {h.timePlayedHours}h ({h.winrate}% WR)
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-800/80 overflow-hidden p-0.5">
                    <div
                      style={{
                        width: `${barWidth}%`,
                        backgroundColor: heroColor,
                      }}
                      className="h-full rounded-full transition-all duration-500 shadow-sm"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chart B: Role Distribution Segmented Bar */}
        <div
          className={`rounded-3xl border p-5 sm:p-6 shadow-xl space-y-4 ${
            isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Percent className="w-4 h-4 text-sky-400" />
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                DISTRIBUCIÓN DE TIEMPO POR ROL
              </h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Preferencia de juego</span>
          </div>

          {/* Triple Segmented Progress Track */}
          <div className="space-y-3 pt-2">
            <div className="w-full h-4 rounded-full overflow-hidden flex gap-1 bg-slate-800 p-0.5">
              <div
                style={{ width: `${roleDistribution.tankPct}%` }}
                title={`Tanque: ${roleDistribution.tankPct}%`}
                className="h-full rounded-l-full bg-gradient-to-r from-blue-600 to-sky-400"
              />
              <div
                style={{ width: `${roleDistribution.dpsPct}%` }}
                title={`Daño: ${roleDistribution.dpsPct}%`}
                className="h-full bg-gradient-to-r from-red-600 to-rose-400"
              />
              <div
                style={{ width: `${roleDistribution.supportPct}%` }}
                title={`Apoyo: ${roleDistribution.supportPct}%`}
                className="h-full rounded-r-full bg-gradient-to-r from-emerald-600 to-teal-400"
              />
            </div>

            {/* Legend & Details */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div className="p-2.5 rounded-xl border border-blue-500/30 bg-blue-500/10">
                <span className="text-[10px] font-mono font-bold text-blue-400 block uppercase">Tanque</span>
                <span className="text-sm font-black text-white">{roleDistribution.tankPct}%</span>
                <span className="text-[10px] text-slate-400 block">{roleDistribution.tankHours}h</span>
              </div>

              <div className="p-2.5 rounded-xl border border-red-500/30 bg-red-500/10">
                <span className="text-[10px] font-mono font-bold text-red-400 block uppercase">Daño</span>
                <span className="text-sm font-black text-white">{roleDistribution.dpsPct}%</span>
                <span className="text-[10px] text-slate-400 block">{roleDistribution.dpsHours}h</span>
              </div>

              <div className="p-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10">
                <span className="text-[10px] font-mono font-bold text-emerald-400 block uppercase">Apoyo</span>
                <span className="text-sm font-black text-white">{roleDistribution.supportPct}%</span>
                <span className="text-[10px] text-slate-400 block">{roleDistribution.supportHours}h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MODAL DE CONFIGURACIÓN MANUAL DEL PERFIL */}
      {showManualModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
        >
          <div
            className={`rounded-3xl border w-full max-w-xl p-5 sm:p-7 space-y-5 my-8 shadow-2xl relative ${
              isDark ? 'bg-[#0f1422] border-slate-700 text-white' : 'bg-white border-slate-300 text-slate-900'
            }`}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-700/40 pb-4">
              <div>
                <h3 className="text-base sm:text-lg font-black uppercase tracking-tight flex items-center gap-2 text-orange-400">
                  <SlidersHorizontal className="w-5 h-5 text-orange-400" />
                  <span>Configuración Manual de tu Perfil</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Personaliza tu BattleTag, rangos competitivos y 3 Mains para que el Tactical Coach se adapte a ti.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowManualModal(false)}
                className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Inputs: BattleTag & Title */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-[11px] font-mono font-bold uppercase text-slate-400">
                  Tu BattleTag
                </label>
                <input
                  type="text"
                  value={manualTag}
                  onChange={e => setManualTag(e.target.value)}
                  placeholder="Ej: Nano#13824"
                  className={`w-full px-3.5 py-2 rounded-xl border text-xs font-mono font-bold ${
                    isDark
                      ? 'bg-slate-950 border-slate-700 text-white focus:border-orange-500'
                      : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-orange-500'
                  }`}
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono font-bold uppercase text-slate-400">
                  Título de Jugador (Opcional)
                </label>
                <input
                  type="text"
                  value={manualTitle}
                  onChange={e => setManualTitle(e.target.value)}
                  placeholder="Ej: Nomad, MVP, Francotirador"
                  className={`w-full px-3.5 py-2 rounded-xl border text-xs ${
                    isDark
                      ? 'bg-slate-950 border-slate-700 text-white focus:border-orange-500'
                      : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-orange-500'
                  }`}
                />
              </div>
            </div>

            {/* Role Ranks Configuration */}
            <div className="space-y-3 pt-1">
              <span className="text-[11px] font-mono font-bold uppercase text-slate-400 block">
                {language === 'en' ? 'Competitive Ranks by Role' : 'Rangos Competitivos por Rol'}
              </span>

              {/* Tank Rank */}
              <div className="p-3 rounded-2xl border border-slate-800 bg-slate-950/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold">{t.tank}</span>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={manualTankTier}
                    onChange={e => setManualTankTier(e.target.value as any)}
                    className="px-2 py-1 rounded-lg border border-slate-700 bg-slate-900 text-xs font-bold text-slate-200"
                  >
                    <option value="none">{language === 'en' ? 'Unranked' : 'Sin rango'}</option>
                    <option value="bronze">{language === 'en' ? 'Bronze' : 'Bronce'}</option>
                    <option value="silver">{language === 'en' ? 'Silver' : 'Plata'}</option>
                    <option value="gold">{language === 'en' ? 'Gold' : 'Oro'}</option>
                    <option value="platinum">{language === 'en' ? 'Platinum' : 'Platino'}</option>
                    <option value="diamond">{language === 'en' ? 'Diamond' : 'Diamante'}</option>
                    <option value="master">{language === 'en' ? 'Master' : 'Maestro'}</option>
                    <option value="grandmaster">{language === 'en' ? 'Grandmaster' : 'Gran Maestro'}</option>
                    <option value="champion">{language === 'en' ? 'Champion' : 'Campeón'}</option>
                    <option value="top500">Top 500</option>
                  </select>

                  {manualTankTier !== 'none' && manualTankTier !== 'top500' && (
                    <select
                      value={manualTankDiv}
                      onChange={e => setManualTankDiv(Number(e.target.value))}
                      className="px-2 py-1 rounded-lg border border-slate-700 bg-slate-900 text-xs font-bold text-slate-200"
                    >
                      {[1, 2, 3, 4, 5].map(d => (
                        <option key={d} value={d}>
                          Div {d}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>

              {/* Damage Rank */}
              <div className="p-3 rounded-2xl border border-slate-800 bg-slate-950/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Crosshair className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-bold">{t.damageDps}</span>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={manualDamageTier}
                    onChange={e => setManualDamageTier(e.target.value as any)}
                    className="px-2 py-1 rounded-lg border border-slate-700 bg-slate-900 text-xs font-bold text-slate-200"
                  >
                    <option value="none">{language === 'en' ? 'Unranked' : 'Sin rango'}</option>
                    <option value="bronze">{language === 'en' ? 'Bronze' : 'Bronce'}</option>
                    <option value="silver">{language === 'en' ? 'Silver' : 'Plata'}</option>
                    <option value="gold">{language === 'en' ? 'Gold' : 'Oro'}</option>
                    <option value="platinum">{language === 'en' ? 'Platinum' : 'Platino'}</option>
                    <option value="diamond">{language === 'en' ? 'Diamond' : 'Diamante'}</option>
                    <option value="master">{language === 'en' ? 'Master' : 'Maestro'}</option>
                    <option value="grandmaster">{language === 'en' ? 'Grandmaster' : 'Gran Maestro'}</option>
                    <option value="champion">{language === 'en' ? 'Champion' : 'Campeón'}</option>
                    <option value="top500">Top 500</option>
                  </select>

                  {manualDamageTier !== 'none' && manualDamageTier !== 'top500' && (
                    <select
                      value={manualDamageDiv}
                      onChange={e => setManualDamageDiv(Number(e.target.value))}
                      className="px-2 py-1 rounded-lg border border-slate-700 bg-slate-900 text-xs font-bold text-slate-200"
                    >
                      {[1, 2, 3, 4, 5].map(d => (
                        <option key={d} value={d}>
                          Div {d}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>

              {/* Support Rank */}
              <div className="p-3 rounded-2xl border border-slate-800 bg-slate-950/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold">{t.support}</span>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={manualSupportTier}
                    onChange={e => setManualSupportTier(e.target.value as any)}
                    className="px-2 py-1 rounded-lg border border-slate-700 bg-slate-900 text-xs font-bold text-slate-200"
                  >
                    <option value="none">{language === 'en' ? 'Unranked' : 'Sin rango'}</option>
                    <option value="bronze">{language === 'en' ? 'Bronze' : 'Bronce'}</option>
                    <option value="silver">{language === 'en' ? 'Silver' : 'Plata'}</option>
                    <option value="gold">{language === 'en' ? 'Gold' : 'Oro'}</option>
                    <option value="platinum">{language === 'en' ? 'Platinum' : 'Platino'}</option>
                    <option value="diamond">{language === 'en' ? 'Diamond' : 'Diamante'}</option>
                    <option value="master">{language === 'en' ? 'Master' : 'Maestro'}</option>
                    <option value="grandmaster">{language === 'en' ? 'Grandmaster' : 'Gran Maestro'}</option>
                    <option value="champion">{language === 'en' ? 'Champion' : 'Campeón'}</option>
                    <option value="top500">Top 500</option>
                  </select>

                  {manualSupportTier !== 'none' && manualSupportTier !== 'top500' && (
                    <select
                      value={manualSupportDiv}
                      onChange={e => setManualSupportDiv(Number(e.target.value))}
                      className="px-2 py-1 rounded-lg border border-slate-700 bg-slate-900 text-xs font-bold text-slate-200"
                    >
                      {[1, 2, 3, 4, 5].map(d => (
                        <option key={d} value={d}>
                          Div {d}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            </div>

            {/* Mains Selector */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase text-slate-400">
                  {language === 'en' ? `Your top 3 Mains (${manualMains.length}/3)` : `Tus 3 Mains principales (${manualMains.length}/3)`}
                </span>
                <span className="text-[10px] text-orange-400">
                  {language === 'en' ? 'Tap to add or replace' : 'Toca para añadir o cambiar'}
                </span>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap max-h-36 overflow-y-auto p-2 rounded-2xl border border-slate-800 bg-slate-950/60">
                {OVERWATCH_HEROES.map(h => {
                  const isSelected = manualMains.includes(h.id);
                  return (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => {
                        if (isSelected) {
                          setManualMains(prev => prev.filter(id => id !== h.id));
                        } else {
                          if (manualMains.length >= 3) {
                            setManualMains([manualMains[1], manualMains[2], h.id]);
                          } else {
                            setManualMains([...manualMains, h.id]);
                          }
                        }
                      }}
                      className={`px-2.5 py-1 rounded-xl border text-[11px] font-bold transition flex items-center gap-1.5 active:scale-95 ${
                        isSelected
                          ? 'bg-orange-500 text-white border-orange-400 shadow'
                          : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <img src={h.icon} alt="" className="w-4 h-4 rounded-full object-cover" />
                      <span>{h.name}</span>
                      {isSelected && <Check className="w-3 h-3" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setShowManualModal(false)}
                className="px-4 py-2 rounded-xl border border-slate-700 text-xs font-bold text-slate-300 hover:bg-slate-800"
              >
                {language === 'en' ? 'Cancel' : 'Cancelar'}
              </button>
              <button
                type="button"
                onClick={handleSaveManualProfile}
                className="px-5 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-600/30 active:scale-95 transition"
              >
                {language === 'en' ? 'Save and Link to Coach' : 'Guardar y Vincular al Coach'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

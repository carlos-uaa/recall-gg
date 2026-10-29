import type { Hero } from '../../types/game';

export const OVERWATCH_HEROES: Hero[] = [
  // TANKS
  {
    id: 'dva',
    name: 'D.Va',
    role: 'tank',
    gender: 'Femenino',
    age: 21,
    country: 'Corea del Sur',
    affiliation: 'MEKA',
    releaseYear: 2016,
    range: 'Corto',
    style: 'dive',
    difficulty: 2,
    description: 'Tanque móvil con propulsores, micro misiles y Matriz de Defensa para anular proyectiles y ultimates.',
    perks: ['Matriz extendida', 'Propulsores con microaturdimiento', 'Recarga veloz de misiles'],
    counters: {
      strongAgainst: ['winston', 'pharah', 'widowmaker', 'reaper', 'ashe', 'soldier76', 'junkrat'],
      weakAgainst: ['zarya', 'mei', 'symmetra', 'roadhog', 'doomfist']
    },
    synergies: ['winston', 'tracer', 'genji', 'kiriko', 'lucio', 'sombra']
  },
  {
    id: 'doomfist',
    name: 'Doomfist',
    role: 'tank',
    gender: 'Masculino',
    age: 47,
    country: 'Nigeria',
    affiliation: 'Talon',
    releaseYear: 2017,
    range: 'Melee',
    style: 'dive',
    difficulty: 3,
    description: 'Tanque brawler de alta movilidad y control de masas que genera sobreescudos al golpear con sus habilidades.',
    perks: ['Bloqueo reforzado', 'Salto sísmico de largo alcance', 'Puño cohete cargado rápido'],
    counters: {
      strongAgainst: ['widowmaker', 'zenyatta', 'ana', 'reinhardt', 'ashe', 'soldier76'],
      weakAgainst: ['sombra', 'ana', 'roadhog', 'cassidy', 'orisa']
    },
    synergies: ['tracer', 'genji', 'kiriko', 'lucio', 'venture']
  },
  {
    id: 'junker-queen',
    name: 'Junker Queen',
    role: 'tank',
    gender: 'Femenino',
    age: 31,
    country: 'Australia',
    affiliation: 'Junkers',
    releaseYear: 2022,
    range: 'Corto',
    style: 'brawl',
    difficulty: 2,
    description: 'Luchadora agresiva que inflige sangrado y se cura a través de las heridas de sus enemigos.',
    perks: ['Grito de mando con más velocidad', 'Cuchillo magnético con sangrado extra', 'Golpe de carnicero amplio'],
    counters: {
      strongAgainst: ['reinhardt', 'roadhog', 'winston', 'doomfist', 'moira'],
      weakAgainst: ['ana', 'widowmaker', 'pharah', 'kiriko', 'sigma']
    },
    synergies: ['lucio', 'genji', 'reaper', 'brigitte', 'baptiste']
  },
  {
    id: 'mauga',
    name: 'Mauga',
    role: 'tank',
    gender: 'Masculino',
    age: 37,
    country: 'Samoa',
    affiliation: 'Talon',
    releaseYear: 2023,
    range: 'Medio',
    style: 'brawl',
    difficulty: 1,
    description: 'Tanque colosal con ametralladoras gemelas que incendian y asestan golpes críticos, con robo de vida en área.',
    perks: ['Embestida con aturdimiento largo', 'Aura de sobremarcha con resistencia ampliada', 'Encendido rápido'],
    counters: {
      strongAgainst: ['reinhardt', 'roadhog', 'winston', 'doomfist', 'wrecking-ball'],
      weakAgainst: ['ana', 'zenyatta', 'dva', 'sigma', 'sombra']
    },
    synergies: ['lucio', 'kiriko', 'bastion', 'baptiste', 'reaper']
  },
  {
    id: 'orisa',
    name: 'Orisa',
    role: 'tank',
    gender: 'Ómnico',
    age: 1,
    country: 'Numbani',
    affiliation: 'Numbani',
    releaseYear: 2017,
    range: 'Medio',
    style: 'brawl',
    difficulty: 1,
    description: 'Ancla inamovible con Fortificación inmune a CC, lanza de jabalina y giro de lanza defensivo.',
    perks: ['Jabalina con daño de empuje', 'Fortificación de mayor duración', 'Enfriamiento reducido'],
    counters: {
      strongAgainst: ['reinhardt', 'doomfist', 'roadhog', 'wrecking-ball', 'junker-queen'],
      weakAgainst: ['zarya', 'sigma', 'zenyatta', 'symmeta', 'sojourn']
    },
    synergies: ['baptiste', 'torbjorn', 'bastion', 'ana', 'cassidy']
  },
  {
    id: 'ramattra',
    name: 'Ramattra',
    role: 'tank',
    gender: 'Ómnico',
    age: 28,
    country: 'Nepal',
    affiliation: 'Null Sector',
    releaseYear: 2022,
    range: 'Medio',
    style: 'brawl',
    difficulty: 2,
    description: 'Líder de Null Sector con modo Ómnico táctico a distancia y forma Némesis para golpear a través de escudos.',
    perks: ['Vórtice voraz ralentizante', 'Forma Némesis con armadura extra', 'Bloqueo con reducción del 80%'],
    counters: {
      strongAgainst: ['reinhardt', 'dva', 'brigitte', 'genji', 'tracer'],
      weakAgainst: ['ana', 'zenyatta', 'roadhog', 'reaper', 'bastion']
    },
    synergies: ['lucio', 'baptiste', 'mei', 'reaper', 'kiriko']
  },
  {
    id: 'reinhardt',
    name: 'Reinhardt',
    role: 'tank',
    gender: 'Masculino',
    age: 63,
    country: 'Alemania',
    affiliation: 'Overwatch',
    releaseYear: 2016,
    range: 'Melee',
    style: 'brawl',
    difficulty: 1,
    description: 'Caballero con escudo de barrera masivo y martillo propulsado; el pilar clásico del juego de avance cuerpo a cuerpo.',
    perks: ['Doble onda de fuego', 'Cancelación de carga precisa', 'Escudo con regeneración acelerada'],
    counters: {
      strongAgainst: ['soldier76', 'widowmaker', 'ashe', 'zenyatta', 'cassidy'],
      weakAgainst: ['ramattra', 'orisa', 'mauga', 'bastion', 'pharah', 'reaper', 'tracer']
    },
    synergies: ['lucio', 'ana', 'brigitte', 'mei', 'cassidy', 'reaper']
  },
  {
    id: 'roadhog',
    name: 'Roadhog',
    role: 'tank',
    gender: 'Masculino',
    age: 50,
    country: 'Australia',
    affiliation: 'Junkers',
    releaseYear: 2016,
    range: 'Corto',
    style: 'brawl',
    difficulty: 1,
    description: 'Superviviente despiadado con un gancho mortal, trampa de cerdos y autocuración con inhalador recargable.',
    perks: ['Inhalador con resistencia al daño', 'Gancho con mayor alcance', 'Trampa electrificada'],
    counters: {
      strongAgainst: ['winston', 'doomfist', 'wrecking-ball', 'reaper', 'mercy'],
      weakAgainst: ['ana', 'zenyatta', 'mauga', 'dva', 'orisa']
    },
    synergies: ['kiriko', 'baptiste', 'junkrat', 'cassidy', 'ashe']
  },
  {
    id: 'sigma',
    name: 'Sigma',
    role: 'tank',
    gender: 'Masculino',
    age: 64,
    country: 'Países Bajos',
    affiliation: 'Talon',
    releaseYear: 2019,
    range: 'Largo',
    style: 'poke',
    difficulty: 2,
    description: 'Astrofísico brillante con control de la gravedad, barrera móvil reposicionable y absorción de proyectiles.',
    perks: ['Acreción con daño de choque', 'Absorción con sobreescudos ampliados', 'Barrera con recarga instantánea'],
    counters: {
      strongAgainst: ['bastion', 'torbjorn', 'soldier76', 'ashe', 'widowmaker', 'mauga'],
      weakAgainst: ['winston', 'zarya', 'symmeta', 'reinhardt', 'moira', 'doomfist']
    },
    synergies: ['baptiste', 'zenyatta', 'ashe', 'widowmaker', 'hanzo', 'soldier76']
  },
  {
    id: 'winston',
    name: 'Winston',
    role: 'tank',
    gender: 'Animal',
    age: 31,
    country: 'Colonia Lunar Horizon',
    affiliation: 'Overwatch',
    releaseYear: 2016,
    range: 'Corto',
    style: 'dive',
    difficulty: 2,
    description: 'Científico gorila genéticamente modificado, maestro del salto propulsado y cañón tesla para desarticular francotiradores y apoyos.',
    perks: ['Disparo secundario cargado a distancia', 'Escudo burbuja con más durabilidad', 'Salto con daño sísmico'],
    counters: {
      strongAgainst: ['widowmaker', 'genji', 'hanzo', 'zenyatta', 'ana', 'ashe'],
      weakAgainst: ['reaper', 'bastion', 'roadhog', 'mauga', 'dva', 'torbjorn']
    },
    synergies: ['tracer', 'genji', 'sombra', 'ana', 'kiriko', 'lucio']
  },
  {
    id: 'wrecking-ball',
    name: 'Wrecking Ball',
    role: 'tank',
    gender: 'Animal',
    age: 16,
    country: 'Colonia Lunar Horizon',
    affiliation: 'Junkers',
    releaseYear: 2018,
    range: 'Corto',
    style: 'dive',
    difficulty: 3,
    description: 'Hámster hiperinteligente (Hammond) que pilota un meca esférico veloz con gancho, martinete y escudos adaptativos.',
    perks: ['Escudos adaptativos compartidos', 'Gancho retráctil continuo', 'Martinete de amplio radio'],
    counters: {
      strongAgainst: ['widowmaker', 'ashe', 'zenyatta', 'hanzo', 'ana'],
      weakAgainst: ['sombra', 'roadhog', 'cassidy', 'mei', 'ana', 'junkrat']
    },
    synergies: ['tracer', 'sombra', 'zenyatta', 'kiriko', 'pharah']
  },
  {
    id: 'zarya',
    name: 'Zarya',
    role: 'tank',
    gender: 'Femenino',
    age: 30,
    country: 'Rusia',
    affiliation: 'Fuerzas de Defensa Rusas',
    releaseYear: 2016,
    range: 'Corto',
    style: 'brawl',
    difficulty: 2,
    description: 'Una de las mujeres más fuertes del mundo; absorbe daño con sus burbujas de partículas para potenciar su rayo letal.',
    perks: ['Burbuja con enfriamiento reducido', 'Retención de energía al morir', 'Doble carga gravitatoria'],
    counters: {
      strongAgainst: ['dva', 'orisa', 'genji', 'junkrat', 'sigma'],
      weakAgainst: ['reinhardt', 'winston', 'pharah', 'widowmaker', 'bastion']
    },
    synergies: ['reaper', 'genji', 'hanzo', 'lucio', 'ana', 'baptiste']
  },

  // DAMAGE (DPS)
  {
    id: 'ashe',
    name: 'Ashe',
    role: 'damage',
    gender: 'Femenino',
    age: 41,
    country: 'Estados Unidos',
    affiliation: 'Banda Deadlock',
    releaseYear: 2018,
    range: 'Largo',
    style: 'poke',
    difficulty: 2,
    description: 'Líder de la banda Deadlock armada con rifle de palanca Viper, dinamita detonable y su fiel secuaz B.O.B.',
    perks: ['Dinamita con propagación mayor', 'Disparo de escopeta con retroceso seguro', 'Carga veloz de B.O.B.'],
    counters: {
      strongAgainst: ['pharah', 'echo', 'mercy', 'reaper', 'junkrat'],
      weakAgainst: ['widowmaker', 'genji', 'tracer', 'winston', 'dva', 'sombra']
    },
    synergies: ['mercy', 'sigma', 'baptiste', 'zenyatta', 'reinhardt']
  },
  {
    id: 'bastion',
    name: 'Bastion',
    role: 'damage',
    gender: 'Ómnico',
    age: 32,
    country: 'Bosque Negro',
    affiliation: 'Independiente',
    releaseYear: 2016,
    range: 'Medio',
    style: 'poke',
    difficulty: 1,
    description: 'Unidad de asedio ómnica capaz de transformarse en una torreta ametralladora móvil con granada táctica.',
    perks: ['Modo asalto con mayor velocidad', 'Granada de rebote aumentada', 'Blindaje reactivo'],
    counters: {
      strongAgainst: ['reinhardt', 'winston', 'mauga', 'roadhog', 'ramattra'],
      weakAgainst: ['genji', 'tracer', 'hanzo', 'sigma', 'sombra', 'ana']
    },
    synergies: ['baptiste', 'sigma', 'orisa', 'mercy', 'mei']
  },
  {
    id: 'cassidy',
    name: 'Cassidy',
    role: 'damage',
    gender: 'Masculino',
    age: 39,
    country: 'Estados Unidos',
    affiliation: 'Overwatch',
    releaseYear: 2016,
    range: 'Medio',
    style: 'brawl',
    difficulty: 2,
    description: 'Pistolero justiciero con revólver Pacifista, granada magnética que anula habilidades de movimiento y tiro certero.',
    perks: ['Voltereta con recarga doble', 'Granada con efecto de anclaje pesado', 'Tiro certero veloz'],
    counters: {
      strongAgainst: ['tracer', 'genji', 'doomfist', 'pharah', 'echo', 'wrecking-ball', 'sombra'],
      weakAgainst: ['widowmaker', 'ashe', 'sigma', 'hanzo']
    },
    synergies: ['reinhardt', 'lucio', 'ana', 'brigitte', 'junker-queen']
  },
  {
    id: 'echo',
    name: 'Echo',
    role: 'damage',
    gender: 'Ómnico',
    age: 14,
    country: 'Suiza',
    affiliation: 'Overwatch',
    releaseYear: 2020,
    range: 'Medio',
    style: 'dive',
    difficulty: 3,
    description: 'Robot evolutiva con vuelo libre, bombas pegajosas, haz de enfoque ejecutor y capacidad de duplicar a cualquier enemigo.',
    perks: ['Haz de enfoque ejecutor anticipado', 'Planeo aerodinámico prolongado', 'Recarga veloz al duplicar'],
    counters: {
      strongAgainst: ['reinhardt', 'junkrat', 'reaper', 'roadhog', 'torbjorn'],
      weakAgainst: ['hitscan', 'cassidy', 'ashe', 'soldier76', 'widowmaker', 'dva']
    },
    synergies: ['mercy', 'zenyatta', 'winston', 'tracer', 'pharah']
  },
  {
    id: 'genji',
    name: 'Genji',
    role: 'damage',
    gender: 'Masculino',
    age: 37,
    country: 'Japón',
    affiliation: 'Overwatch',
    releaseYear: 2016,
    range: 'Corto',
    style: 'dive',
    difficulty: 3,
    description: 'Ninja cibernético con shurikens, desvío de proyectiles, corte veloz reseteable con bajas y Hoja del Dragón.',
    perks: ['Desvío de proyectiles extendido', 'Corte con daño de sangrado', 'Shurikens adicionales'],
    counters: {
      strongAgainst: ['widowmaker', 'hanzo', 'bastion', 'zenyatta', 'ana', 'ashe'],
      weakAgainst: ['winston', 'zarya', 'mei', 'symmeta', 'moira', 'brigitte']
    },
    synergies: ['ana', 'winston', 'tracer', 'kiriko', 'lucio']
  },
  {
    id: 'hanzo',
    name: 'Hanzo',
    role: 'damage',
    gender: 'Masculino',
    age: 40,
    country: 'Japón',
    affiliation: 'Clan Shimada',
    releaseYear: 2016,
    range: 'Largo',
    style: 'poke',
    difficulty: 3,
    description: 'Arquero maestro que dispara flechas sónicas rastreadoras, ráfagas tormentosas y convoca dragones espectrales.',
    perks: ['Flecha sónica con pulso ampliado', 'Flechas de tormenta con rebote', 'Salto acrobático doble'],
    counters: {
      strongAgainst: ['bastion', 'torbjorn', 'roadhog', 'cassidy', 'zenyatta'],
      weakAgainst: ['genji', 'tracer', 'winston', 'dva', 'sombra', 'widowmaker']
    },
    synergies: ['zarya', 'sigma', 'mercy', 'baptiste', 'zenyatta']
  },
  {
    id: 'junkrat',
    name: 'Junkrat',
    role: 'damage',
    gender: 'Masculino',
    age: 27,
    country: 'Australia',
    affiliation: 'Junkers',
    releaseYear: 2016,
    range: 'Medio',
    style: 'brawl',
    difficulty: 1,
    description: 'Anarquista demente obsesionado con explosivos de rebote, cepos inmovilizadores y minas de conmoción.',
    perks: ['Triple mina de choque', 'Cepo reforzado con daño aumentado', 'Neumático con turbo'],
    counters: {
      strongAgainst: ['reinhardt', 'orisa', 'bastion', 'brigitte', 'torbjorn'],
      weakAgainst: ['pharah', 'echo', 'widowmaker', 'ashe', 'zarya', 'dva']
    },
    synergies: ['reinhardt', 'roadhog', 'baptiste', 'mei']
  },
  {
    id: 'mei',
    name: 'Mei',
    role: 'damage',
    gender: 'Femenino',
    age: 33,
    country: 'China',
    affiliation: 'Overwatch',
    releaseYear: 2016,
    range: 'Corto',
    style: 'brawl',
    difficulty: 2,
    description: 'Climatologist armada con un cañón endotérmico para aislar tanques con muros de hielo y congelar zonas.',
    perks: ['Muro de hielo con más pilares', 'Bloque de hielo con explosión térmica', 'Carámbano perforante'],
    counters: {
      strongAgainst: ['dva', 'genji', 'wrecking-ball', 'reinhardt', 'lucio'],
      weakAgainst: ['pharah', 'echo', 'widowmaker', 'ashe', 'sombra']
    },
    synergies: ['reinhardt', 'ramattra', 'lucio', 'baptiste', 'reaper']
  },
  {
    id: 'pharah',
    name: 'Pharah',
    role: 'damage',
    gender: 'Femenino',
    age: 34,
    country: 'Egipto',
    affiliation: 'Helix Security',
    releaseYear: 2016,
    range: 'Largo',
    style: 'poke',
    difficulty: 2,
    description: 'Oficial de seguridad con traje Raptor capaz de surcar los cielos lanzando cohetes devastadores y ráfagas concusivas.',
    perks: ['Propulsión lateral continua', 'Cohetes con daño concusivo de impacto', 'Bombardeo protegido'],
    counters: {
      strongAgainst: ['reinhardt', 'junkrat', 'reaper', 'mei', 'brigitte', 'symmeta'],
      weakAgainst: ['widowmaker', 'ashe', 'cassidy', 'soldier76', 'dva', 'ana']
    },
    synergies: ['mercy', 'zenyatta', 'winston', 'wrecking-ball']
  },
  {
    id: 'reaper',
    name: 'Reaper',
    role: 'damage',
    gender: 'Masculino',
    age: 60,
    country: 'Estados Unidos',
    affiliation: 'Talon',
    releaseYear: 2016,
    range: 'Corto',
    style: 'brawl',
    difficulty: 1,
    description: 'Espectro ejecutor con escopetas Hellfire gemelas, robo de vida pasivo, forma fantasmal invulnerable y teletransporte.',
    perks: ['Paso de las sombras instantáneo', 'Robo de vida aumentado', 'Forma fantasmal veloz'],
    counters: {
      strongAgainst: ['winston', 'reinhardt', 'roadhog', 'ramattra', 'mauga'],
      weakAgainst: ['pharah', 'echo', 'widowmaker', 'ashe', 'dva', 'cassidy']
    },
    synergies: ['lucio', 'reinhardt', 'junker-queen', 'kiriko', 'mei']
  },
  {
    id: 'sojourn',
    name: 'Sojourn',
    role: 'damage',
    gender: 'Femenino',
    age: 47,
    country: 'Canadá',
    affiliation: 'Overwatch',
    releaseYear: 2022,
    range: 'Medio',
    style: 'poke',
    difficulty: 3,
    description: 'Comandante cibernética con cañón de riel de precisión alimentado por energía, disparo disruptor y deslizamiento potente.',
    perks: ['Deslizamiento con super salto', 'Disparo disruptor con efecto ralentizante', 'Riel con carga pasiva'],
    counters: {
      strongAgainst: ['pharah', 'torbjorn', 'bastion', 'mercy', 'roadhog'],
      weakAgainst: ['widowmaker', 'genji', 'tracer', 'dva', 'winston']
    },
    synergies: ['mercy', 'sigma', 'winston', 'lucio', 'baptiste']
  },
  {
    id: 'soldier76',
    name: 'Soldier: 76',
    role: 'damage',
    gender: 'Masculino',
    age: 58,
    country: 'Estados Unidos',
    affiliation: 'Overwatch',
    releaseYear: 2016,
    range: 'Medio',
    style: 'poke',
    difficulty: 1,
    description: 'Super-soldado vigilante con rifle de pulsos, cohetes Helix de impacto, sprint táctico infinito y campo biótico curativo.',
    perks: ['Sprint con disparo continuo', 'Campo biótico de mayor radio', 'Cohetes Helix con doble carga'],
    counters: {
      strongAgainst: ['pharah', 'echo', 'mercy', 'torbjorn', 'reaper'],
      weakAgainst: ['widowmaker', 'dva', 'sigma', 'genji', 'doomfist']
    },
    synergies: ['mercy', 'baptiste', 'sigma', 'reinhardt', 'ana']
  },
  {
    id: 'sombra',
    name: 'Sombra',
    role: 'damage',
    gender: 'Femenino',
    age: 32,
    country: 'México',
    affiliation: 'Talon',
    releaseYear: 2016,
    range: 'Corto',
    style: 'dive',
    difficulty: 2,
    description: 'Hacker maestra invisible con subfusil, virus letal con daño por segundo, translocalizador táctico y hackeo disruptivo.',
    perks: ['Virus con infección rápida', 'Hackeo con mayor supresión', 'Translocalizador con señuelo'],
    counters: {
      strongAgainst: ['doomfist', 'wrecking-ball', 'widowmaker', 'zenyatta', 'reinhardt', 'bastion'],
      weakAgainst: ['winston', 'dva', 'cassidy', 'torbjorn', 'brigitte', 'mei']
    },
    synergies: ['tracer', 'winston', 'doomfist', 'kiriko', 'genji']
  },
  {
    id: 'symmetra',
    name: 'Symmetra',
    role: 'damage',
    gender: 'Femenino',
    age: 30,
    country: 'India',
    affiliation: 'Vishkar Corporation',
    releaseYear: 2016,
    range: 'Corto',
    style: 'brawl',
    difficulty: 2,
    description: 'Arquitecta de luz sólida armada con proyector de fotones que se recarga con escudos, torretas centinela y teletransportador.',
    perks: ['Torretas con curación/ralentización', 'Rayo de fotones con alcance extendido', 'Teletransportador instantáneo'],
    counters: {
      strongAgainst: ['dva', 'sigma', 'genji', 'reinhardt', 'orisa'],
      weakAgainst: ['pharah', 'echo', 'widowmaker', 'winston', 'ashe']
    },
    synergies: ['reinhardt', 'ramattra', 'mei', 'baptiste', 'lucio']
  },
  {
    id: 'torbjorn',
    name: 'Torbjörn',
    role: 'damage',
    gender: 'Masculino',
    age: 59,
    country: 'Suecia',
    affiliation: 'Overwatch',
    releaseYear: 2016,
    range: 'Medio',
    style: 'brawl',
    difficulty: 1,
    description: 'Maestro armero con pistola de remaches, sobrecarga con armadura y velocidad, torreta automática defensiva y lava fundida.',
    perks: ['Torreta con misiles menores', 'Sobrecarga de doble duración', 'Remaches incendiarios'],
    counters: {
      strongAgainst: ['tracer', 'genji', 'sombra', 'winston', 'wrecking-ball'],
      weakAgainst: ['widowmaker', 'hanzo', 'pharah', 'ana', 'sigma']
    },
    synergies: ['orisa', 'sigma', 'reinhardt', 'baptiste', 'bastion']
  },
  {
    id: 'tracer',
    name: 'Tracer',
    role: 'damage',
    gender: 'Femenino',
    age: 28,
    country: 'Reino Unido',
    affiliation: 'Overwatch',
    releaseYear: 2016,
    range: 'Corto',
    style: 'dive',
    difficulty: 3,
    description: 'Piloto que desafía el tiempo con traslaciones hiperactivas, regresión temporal curativa, pistolas de pulsos y bomba de pulsos.',
    perks: ['Cuarta traslación temporal', 'Regresión con curación completa', 'Bomba de pulsos con mayor imán'],
    counters: {
      strongAgainst: ['zenyatta', 'ana', 'widowmaker', 'ashe', 'hanzo', 'reinhardt'],
      weakAgainst: ['cassidy', 'torbjorn', 'brigitte', 'sombra', 'moira']
    },
    synergies: ['winston', 'genji', 'sombra', 'kiriko', 'lucio']
  },
  {
    id: 'venture',
    name: 'Venture',
    role: 'damage',
    gender: 'No binario',
    age: 26,
    country: 'Canadá',
    affiliation: 'Sociedad Wayfinder',
    releaseYear: 2024,
    range: 'Corto',
    style: 'dive',
    difficulty: 2,
    description: 'Arqueólogue intrépide con excavador inteligente que dispara cargas sísmicas, se sumerge bajo tierra y embiste.',
    perks: ['Excavación subterránea veloz', 'Escudos pasivos aumentados al usar habilidades', 'Onda de choque mayor'],
    counters: {
      strongAgainst: ['zenyatta', 'ana', 'widowmaker', 'ashe', 'reinhardt'],
      weakAgainst: ['pharah', 'echo', 'cassidy', 'dva', 'roadhog']
    },
    synergies: ['winston', 'doomfist', 'tracer', 'kiriko', 'lucio']
  },
  {
    id: 'widowmaker',
    name: 'Widowmaker',
    role: 'damage',
    gender: 'Femenino',
    age: 35,
    country: 'Francia',
    affiliation: 'Talon',
    releaseYear: 2016,
    range: 'Largo',
    style: 'poke',
    difficulty: 3,
    description: 'Asesina letal armada con el rifle de francotirador Beso de la Viuda, gancho de agarre, mina venenosa y visión infrarroja.',
    perks: ['Gancho con reseteo al acertar tiro a la cabeza', 'Mina venenosa con rastreo', 'Carga de mira acelerada'],
    counters: {
      strongAgainst: ['pharah', 'echo', 'torbjorn', 'bastion', 'soldier76', 'mercy', 'zenyatta'],
      weakAgainst: ['winston', 'dva', 'genji', 'tracer', 'sombra', 'wrecking-ball']
    },
    synergies: ['mercy', 'sigma', 'zenyatta', 'baptiste']
  },

  // SUPPORT
  {
    id: 'ana',
    name: 'Ana',
    role: 'support',
    gender: 'Femenino',
    age: 62,
    country: 'Egipto',
    affiliation: 'Overwatch',
    releaseYear: 2016,
    range: 'Largo',
    style: 'poke',
    difficulty: 3,
    description: 'Francotiradora veterana armada con rifle biótico, granada anti-curación destructora de tanques, dardo sedante y Nanoestimulante.',
    perks: ['Dardo sedante con recarga veloz', 'Granada biótica con curación extendida', 'Rifle con mira termográfica'],
    counters: {
      strongAgainst: ['roadhog', 'mauga', 'junker-queen', 'zenyatta', 'bastion', 'reaper'],
      weakAgainst: ['winston', 'dva', 'genji', 'tracer', 'sombra', 'wrecking-ball']
    },
    synergies: ['genji', 'reinhardt', 'soldier76', 'winston', 'brigitte']
  },
  {
    id: 'baptiste',
    name: 'Baptiste',
    role: 'support',
    gender: 'Masculino',
    age: 38,
    country: 'Haití',
    affiliation: 'Ex-Talon',
    releaseYear: 2019,
    range: 'Medio',
    style: 'poke',
    difficulty: 2,
    description: 'Médico de combate con lanzagranadas biótico, botas exoesqueleto de gran salto, campo de inmortalidad y matriz de amplificación.',
    perks: ['Botas exoesqueleto con carga instantánea', 'Campo de inmortalidad con mayor radio', 'Curación regenerativa potente'],
    counters: {
      strongAgainst: ['pharah', 'echo', 'junkrat', 'torbjorn', 'reinhardt'],
      weakAgainst: ['genji', 'tracer', 'sombra', 'doomfist', 'widowmaker']
    },
    synergies: ['sigma', 'reinhardt', 'bastion', 'soldier76', 'ashe', 'zenyatta']
  },
  {
    id: 'brigitte',
    name: 'Brigitte',
    role: 'support',
    gender: 'Femenino',
    age: 25,
    country: 'Suecia',
    affiliation: 'Overwatch',
    releaseYear: 2018,
    range: 'Melee',
    style: 'brawl',
    difficulty: 2,
    description: 'Guerrera escudera que cura con Inspiración al golpear, protege con escudo y rechaza flankers con lanzamiento de mayal.',
    perks: ['Escudo con 500 de vida', 'Lanzamiento de mayal con aturdimiento', 'Paquetes de reparación dobles'],
    counters: {
      strongAgainst: ['tracer', 'genji', 'winston', 'doomfist', 'wrecking-ball', 'sombra'],
      weakAgainst: ['pharah', 'echo', 'junkrat', 'ramattra', 'widowmaker']
    },
    synergies: ['ana', 'zenyatta', 'reinhardt', 'junker-queen', 'cassidy']
  },
  {
    id: 'illari',
    name: 'Illari',
    role: 'support',
    gender: 'Femenino',
    age: 18,
    country: 'Perú',
    affiliation: 'Guerreros Inti',
    releaseYear: 2023,
    range: 'Largo',
    style: 'poke',
    difficulty: 2,
    description: 'Última guerrera solar con rifle de precisión solar, pilón de curación automático desplegable y ultimate Sol Cautivo.',
    perks: ['Pilón curativo con escudos', 'Estallido solar con derribo', 'Rifle con recarga solar instantánea'],
    counters: {
      strongAgainst: ['pharah', 'echo', 'widowmaker', 'tracer', 'mercy'],
      weakAgainst: ['winston', 'dva', 'genji', 'sombra', 'doomfist']
    },
    synergies: ['sigma', 'baptiste', 'soldier76', 'ashe', 'cassidy']
  },
  {
    id: 'juno',
    name: 'Juno',
    role: 'support',
    gender: 'Femenino',
    age: 19,
    country: 'Marte',
    affiliation: 'Proyecto Lucerna',
    releaseYear: 2024,
    range: 'Medio',
    style: 'dive',
    difficulty: 2,
    description: 'Exploradora espacial marciana con bláster médico de ráfagas, hiperanillo de aceleración masiva y torpedos teledirigidos.',
    perks: ['Hiperanillo con bono de daño', 'Torpedos teledirigidos dobles', 'Vuelo gravitacional extendido'],
    counters: {
      strongAgainst: ['roadhog', 'reinhardt', 'reaper', 'junkrat'],
      weakAgainst: ['widowmaker', 'ashe', 'cassidy', 'sombra', 'dva']
    },
    synergies: ['winston', 'tracer', 'genji', 'dva', 'reinhardt', 'ana']
  },
  {
    id: 'kiriko',
    name: 'Kiriko',
    role: 'support',
    gender: 'Femenino',
    age: 21,
    country: 'Japón',
    affiliation: 'Yokai',
    releaseYear: 2022,
    range: 'Medio',
    style: 'dive',
    difficulty: 3,
    description: 'Ninja protectora con kunais de crítico letal, talismanes curativos teledirigidos, Suzu purificador y Paso Ligero a través de paredes.',
    perks: ['Suzu con invulnerabilidad aumentada', 'Paso ligero con escudo al salir', 'Kunai con crítico triplicado'],
    counters: {
      strongAgainst: ['ana', 'junker-queen', 'roadhog', 'reinhardt', 'sombra', 'tracer'],
      weakAgainst: ['winston', 'widowmaker', 'pharah', 'sojourn']
    },
    synergies: ['winston', 'tracer', 'genji', 'doomfist', 'mauga', 'lucio']
  },
  {
    id: 'lifeweaver',
    name: 'Lifeweaver',
    role: 'support',
    gender: 'Masculino',
    age: 31,
    country: 'Tailandia',
    affiliation: 'Independiente',
    releaseYear: 2023,
    range: 'Largo',
    style: 'poke',
    difficulty: 2,
    description: 'Bioluz innovadora que salva aliados en apuros con Agarre Vital, crea plataformas de pétalo elevadoras y planta el Árbol de la Vida.',
    perks: ['Plataforma de pétalo con curación', 'Agarre vital con regeneración masiva', 'Ráfaga de espinas perforante'],
    counters: {
      strongAgainst: ['zarya', 'reinhardt', 'orisa', 'roadhog'],
      weakAgainst: ['sombra', 'tracer', 'genji', 'widowmaker', 'winston']
    },
    synergies: ['ana', 'baptiste', 'cassidy', 'bastion', 'torbjorn']
  },
  {
    id: 'lucio',
    name: 'Lúcio',
    role: 'support',
    gender: 'Masculino',
    age: 28,
    country: 'Brasil',
    affiliation: 'Overwatch',
    releaseYear: 2016,
    range: 'Corto',
    style: 'brawl',
    difficulty: 2,
    description: 'DJ revolucionario que patrocina la velocidad del equipo con música y patinaje sobre muros; el corazón del juego Brawl y Rush.',
    perks: ['Amp it up con velocidad del 80%', 'Empuje de onda sonora con aturdimiento', 'Patinaje continuo sin fricción'],
    counters: {
      strongAgainst: ['widowmaker', 'roadhog', 'reaper', 'reinhardt'],
      weakAgainst: ['pharah', 'echo', 'torbjorn', 'sombra', 'cassidy', 'moira']
    },
    synergies: ['reinhardt', 'ramattra', 'junker-queen', 'reaper', 'mei', 'ana', 'kiriko']
  },
  {
    id: 'mercy',
    name: 'Mercy',
    role: 'support',
    gender: 'Femenino',
    age: 39,
    country: 'Suiza',
    affiliation: 'Overwatch',
    releaseYear: 2016,
    range: 'Medio',
    style: 'poke',
    difficulty: 1,
    description: 'Médico ángel de la guardia que potencia el daño aliado, cura con rayo continuo, planea con agilidad y resucita compañeros caídos.',
    perks: ['Resurrección con escudo protector', 'Potenciador de daño al 35%', 'Super salto libre'],
    counters: {
      strongAgainst: [],
      weakAgainst: ['widowmaker', 'genji', 'tracer', 'sombra', 'winston', 'cassidy']
    },
    synergies: ['pharah', 'echo', 'ashe', 'sojourn', 'soldier76', 'widowmaker']
  },
  {
    id: 'moira',
    name: 'Moira',
    role: 'support',
    gender: 'Femenino',
    age: 50,
    country: 'Irlanda',
    affiliation: 'Talon',
    releaseYear: 2017,
    range: 'Corto',
    style: 'brawl',
    difficulty: 1,
    description: 'Genetista brillante que equilibra curación masiva con drenaje biótico, orbes teledirigidos y Desvanecimiento para escapar de todo peligro.',
    perks: ['Desvanecimiento con purga aliada', 'Orbes de doble duración', 'Drenaje con mayor alcance'],
    counters: {
      strongAgainst: ['genji', 'tracer', 'sombra', 'lucio', 'symmeta'],
      weakAgainst: ['dva', 'ana', 'widowmaker', 'ashe', 'bastion']
    },
    synergies: ['reinhardt', 'lucio', 'reaper', 'ramattra', 'junker-queen']
  },
  {
    id: 'zenyatta',
    name: 'Zenyatta',
    role: 'support',
    gender: 'Ómnico',
    age: 33,
    country: 'Nepal',
    affiliation: 'Monasterio Shambali',
    releaseYear: 2016,
    range: 'Largo',
    style: 'poke',
    difficulty: 2,
    description: 'Monje ómnico que debilita enemigos con el Orbe de la Discordia aumentando el daño recibido, cura con armonía y trasciende el plano.',
    perks: ['Discordia con efecto acumulativo', 'Patada de empuje gravitatorio', 'Orbe de armonía amplificado'],
    counters: {
      strongAgainst: ['roadhog', 'mauga', 'reinhardt', 'orisa', 'bastion'],
      weakAgainst: ['sombra', 'tracer', 'genji', 'winston', 'widowmaker', 'doomfist']
    },
    synergies: ['sigma', 'baptiste', 'brigitte', 'ashe', 'soldier76', 'widowmaker']
  }
];

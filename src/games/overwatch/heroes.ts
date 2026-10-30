import type { Hero } from '../../types/game';

export const OVERWATCH_HEROES: Hero[] = [
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
    subrole: 'Iniciador / Dive',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/df5a5532862d9292634fb3dc0e51a4705aa601de65e5e815513ccc663d84de56.png',
    description: 'Tanque móvil con propulsores, micro misiles y Matriz de Defensa para anular proyectiles y ultimates.',
    tier: 'A',
    counterAdvice: "D.Va sufre contra rayos, láseres y stuns que no puede parar. Mantente a distancia, bupéala cuando puedas y aprovéchate cuando no le quede Matriz.",
    perks: [
          "Matriz extendida",
          "Propulsores con microaturdimiento",
          "Recarga veloz de misiles"
    ],
    counters: {
          "strongAgainst": [
                "ana",
                "mauga",
                "roadhog",
                "winston"
          ],
          "weakAgainst": [
                "zarya",
                "mei",
                "symmetra",
                "brigitte",
                "dmon",
                "domina",
                "mizuki",
                "orisa",
                "vendetta",
                "lucio",
                "anran"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "brigitte",
                "mizuki",
                "vendetta"
          ],
          "strongDetails": {
                "ana": {
                      "hard": false,
                      "motivo": ""
                },
                "mauga": {
                      "hard": false,
                      "motivo": ""
                },
                "roadhog": {
                      "hard": false,
                      "motivo": ""
                },
                "winston": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "zarya": {
                      "hard": false,
                      "motivo": ""
                },
                "mei": {
                      "hard": false,
                      "motivo": ""
                },
                "symmetra": {
                      "hard": false,
                      "motivo": ""
                },
                "brigitte": {
                      "hard": true,
                      "motivo": "Sus golpes cuerpo a cuerpo no los para la Matriz"
                },
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "domina": {
                      "hard": false,
                      "motivo": ""
                },
                "mizuki": {
                      "hard": true,
                      "motivo": "Su cadena atrapa a D.Va y la Matriz no la para"
                },
                "orisa": {
                      "hard": false,
                      "motivo": ""
                },
                "vendetta": {
                      "hard": true,
                      "motivo": "Su espada no la para la Matriz: le da espadazos sin parar"
                },
                "lucio": {
                      "hard": false,
                      "motivo": ""
                },
                "anran": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["winston","tracer","genji","kiriko","lucio","sombra"]
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
    subrole: 'Iniciador / Dive',
    difficulty: 3,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ff5c54f43ad253c7faeda9c4ed31d42582ea6b19205d197866f3dd0c0aa14c16.png',
    description: 'Tanque brawler de alta movilidad y control de masas que genera sobreescudos al golpear con sus habilidades.',
    tier: 'B',
    counterAdvice: "Con Doomfist tienes dos opciones: o esquivas sus puños y le ignoras, o le castigas cuando está bloqueando. Si tu héroe puede castigarle cuando bloquea, esa es la clave.",
    perks: [
          "Bloqueo reforzado",
          "Salto sísmico de largo alcance",
          "Puño cohete cargado rápido"
    ],
    counters: {
          "strongAgainst": [
                "dmon",
                "domina",
                "doomfist",
                "hazard",
                "ramattra",
                "reinhardt"
          ],
          "weakAgainst": [
                "junker-queen",
                "orisa",
                "cassidy",
                "echo",
                "ana",
                "zenyatta",
                "jetpack-cat",
                "juno",
                "mizuki",
                "pharah",
                "doomfist"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "orisa",
                "ana",
                "mizuki"
          ],
          "strongDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "domina": {
                      "hard": false,
                      "motivo": ""
                },
                "doomfist": {
                      "hard": false,
                      "motivo": ""
                },
                "hazard": {
                      "hard": false,
                      "motivo": ""
                },
                "ramattra": {
                      "hard": false,
                      "motivo": ""
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "junker-queen": {
                      "hard": false,
                      "motivo": "Puede clavarle el cuchillo mientras bloquea y luego tirar de él hacia atrás"
                },
                "orisa": {
                      "hard": true,
                      "motivo": "Su stun perjudica a Doomfist durante su bloqueo, que es su habilidad central"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": ""
                },
                "echo": {
                      "hard": false,
                      "motivo": ""
                },
                "ana": {
                      "hard": true,
                      "motivo": ""
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": ""
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Es muy molesta para Doomfist, que nunca llega a poder hacerle nada"
                },
                "juno": {
                      "hard": false,
                      "motivo": "Con tanta movilidad esquiva su puñetazo, y con la velocidad se le escapa fácilmente"
                },
                "mizuki": {
                      "hard": true,
                      "motivo": ""
                },
                "pharah": {
                      "hard": false,
                      "motivo": ""
                },
                "doomfist": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["tracer","genji","kiriko","lucio","venture"]
  },
  {
    id: 'hazard',
    name: 'Hazard',
    role: 'tank',
    gender: 'Masculino',
    age: 24,
    country: 'Escocia',
    affiliation: 'The Phreaks',
    releaseYear: 2024,
    range: 'Corto',
    style: 'brawl',
    subrole: 'Iniciador / Dive',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca48b96dbae6ea7f58ce8a5e73513c8c62b1685bdbf258020fb78bb21a008b5f.png',
    description: 'Líder de The Phreaks armado con púas de vanadio, guardia de espinas que absorbe daño frontal, salto violento y muro dentado.',
    tier: 'A',
    counterAdvice: "Hazard sufre contra grandes cantidades de daño, incluso cuando bloquea. Intenta dispararle constantemente para forzar su bloqueo y mantente lejos de su golpe violento.",
    perks: [
          "Muro de púas con derribo y empuje",
          "Guardia de espinas con recarga de munición",
          "Salto violento con doble tajo"
    ],
    counters: {
          "strongAgainst": [
                "lucio"
          ],
          "weakAgainst": [
                "freja",
                "ana",
                "cassidy",
                "doomfist",
                "echo",
                "pharah",
                "torbjorn",
                "sojourn",
                "mizuki",
                "orisa",
                "roadhog",
                "sigma",
                "zarya",
                "zenyatta"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "torbjorn",
                "mizuki",
                "orisa"
          ],
          "strongDetails": {
                "lucio": {
                      "hard": false,
                      "motivo": "Apenas lo puede bupear y le hace mucho daño de burst. Si además va con una Tracer, no tiene supervivencia"
                }
          },
          "weakDetails": {
                "freja": {
                      "hard": false,
                      "motivo": ""
                },
                "ana": {
                      "hard": false,
                      "motivo": ""
                },
                "cassidy": {
                      "hard": false,
                      "motivo": ""
                },
                "doomfist": {
                      "hard": false,
                      "motivo": ""
                },
                "echo": {
                      "hard": false,
                      "motivo": ""
                },
                "pharah": {
                      "hard": false,
                      "motivo": ""
                },
                "torbjorn": {
                      "hard": true,
                      "motivo": "Con la cantidad de spam de daño que tiene, castiga a Hazard"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": ""
                },
                "mizuki": {
                      "hard": true,
                      "motivo": ""
                },
                "orisa": {
                      "hard": true,
                      "motivo": "Su stun detiene a Hazard, que bloquea con su propio cuerpo"
                },
                "roadhog": {
                      "hard": false,
                      "motivo": ""
                },
                "sigma": {
                      "hard": false,
                      "motivo": ""
                },
                "zarya": {
                      "hard": false,
                      "motivo": ""
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["lucio","kiriko","reaper","sombra","baptiste","doctrine"]
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
    subrole: 'Iniciador / Dive',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/46a10db3aa908c590ddc4e7606376a88143d1f1306ecfbea043263040f9529a5.png',
    description: 'Científico gorila genéticamente modificado, maestro del salto propulsado y cañón tesla para desarticular francotiradores y apoyos.',
    tier: 'S',
    counterAdvice: "Contra Winston es importante tener el timing de sus saltos: si salta demasiado lejos, hay que castigarle. Su burbuja es difícil de destruir, por lo que muchas veces es mejor entrar dentro de ella e intentar matarlo.",
    perks: [
          "Disparo secundario cargado a distancia",
          "Escudo burbuja con más durabilidad",
          "Salto con daño sísmico"
    ],
    counters: {
          "strongAgainst": [
                "sigma",
                "zarya"
          ],
          "weakAgainst": [
                "bastion",
                "reaper",
                "zenyatta",
                "dva",
                "dmon",
                "cassidy",
                "shion",
                "vendetta"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "sigma": {
                      "hard": false,
                      "motivo": ""
                },
                "zarya": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "bastion": {
                      "hard": false,
                      "motivo": ""
                },
                "reaper": {
                      "hard": false,
                      "motivo": ""
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": ""
                },
                "dva": {
                      "hard": false,
                      "motivo": ""
                },
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "cassidy": {
                      "hard": false,
                      "motivo": ""
                },
                "shion": {
                      "hard": false,
                      "motivo": ""
                },
                "vendetta": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["tracer","genji","sombra","ana","kiriko","lucio"]
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
    subrole: 'Iniciador / Dive',
    difficulty: 3,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/9ef1d58867136e0b26f928d896000b9dab216118f6e2f59e53f2e975e1e27afa.png',
    description: 'Hámster hiperinteligente (Hammond) que pilota un meca esférico veloz con gancho, martinete y escudos adaptativos.',
    tier: 'B',
    counterAdvice: "Dispárale siempre que aparezca delante de ti: moléstale y fuérzale los escudos. Lo mejor que puedes hacer es jugar stuns o habilidades que bupeen para romperle la inercia. Si te distrae demasiado, juega algo móvil y rápido para poder ignorarlo.",
    perks: [
          "Escudos adaptativos compartidos",
          "Gancho retráctil continuo",
          "Martinete de amplio radio"
    ],
    counters: {
          "strongAgainst": [
                "ramattra",
                "reinhardt"
          ],
          "weakAgainst": [
                "orisa",
                "roadhog",
                "cassidy",
                "tracer",
                "ana",
                "brigitte",
                "lucio",
                "zenyatta",
                "mauga",
                "mizuki",
                "shion",
                "sierra"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "orisa",
                "cassidy",
                "mizuki"
          ],
          "strongDetails": {
                "ramattra": {
                      "hard": false,
                      "motivo": ""
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "orisa": {
                      "hard": true,
                      "motivo": ""
                },
                "roadhog": {
                      "hard": false,
                      "motivo": ""
                },
                "cassidy": {
                      "hard": true,
                      "motivo": ""
                },
                "tracer": {
                      "hard": false,
                      "motivo": ""
                },
                "ana": {
                      "hard": false,
                      "motivo": ""
                },
                "brigitte": {
                      "hard": false,
                      "motivo": ""
                },
                "lucio": {
                      "hard": false,
                      "motivo": ""
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": ""
                },
                "mauga": {
                      "hard": false,
                      "motivo": ""
                },
                "mizuki": {
                      "hard": true,
                      "motivo": ""
                },
                "shion": {
                      "hard": false,
                      "motivo": ""
                },
                "sierra": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["tracer","sombra","zenyatta","kiriko","pharah"]
  },
  {
    id: 'domina',
    name: 'Domina',
    role: 'tank',
    gender: 'Femenino',
    age: 36,
    country: 'Italia',
    affiliation: 'Vishkar',
    releaseYear: 2025,
    range: 'Medio',
    style: 'poke',
    subrole: 'Escudo & Control',
    difficulty: 1,
    icon: 'https://tonikiraw.com/assets/img/heroes/domina.webp',
    description: 'Comandante de tecnología de luz sólida con Matriz de barrera reposicionable, Cañón de fotones de largo alcance y Cargas de cristal con detonación disruptiva.',
    tier: 'C',
    counterAdvice: "El punto débil de Domina es su escudo: en cuanto lo usa, va a estar mucho rato sin él. Así que todo lo que pueda destruirle el escudo o ignorarlo va a ser bueno contra ella.",
    perks: [
          "Diseño eficiente con restauración de escudo",
          "Detonación disruptiva con ralentización del 30%",
          "Retiro corporativo para reposicionar la barrera"
    ],
    counters: {
          "strongAgainst": [
                "dva"
          ],
          "weakAgainst": [
                "bastion",
                "doomfist",
                "ramattra",
                "sojourn",
                "reinhardt"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "sojourn"
          ],
          "strongDetails": {
                "dva": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "bastion": {
                      "hard": false,
                      "motivo": ""
                },
                "doomfist": {
                      "hard": false,
                      "motivo": ""
                },
                "ramattra": {
                      "hard": false,
                      "motivo": ""
                },
                "sojourn": {
                      "hard": true,
                      "motivo": ""
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["baptiste","zenyatta","sigma","ashe","soldier76"]
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
    subrole: 'Escudo & Control',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ddef7c9fb8ce4256e8508196b486f81950efe7aaa6cf27fec4668beb4cd15774.png',
    description: 'Líder de Null Sector con modo Ómnico táctico a distancia y forma Némesis para golpear a través de escudos.',
    tier: 'B',
    counterAdvice: "No intentes destruir el escudo de Ramattra: juega alrededor de él. Cuando esté en forma Némesis, intenta pararlo y alejarte de sus puños. Cuando esté bloqueando, intenta stunearle para que deje de bloquear.",
    perks: [
          "Vórtice voraz ralentizante",
          "Forma Némesis con armadura extra",
          "Bloqueo con reducción del 80%"
    ],
    counters: {
          "strongAgainst": [
                "dmon",
                "domina",
                "reinhardt",
                "sigma"
          ],
          "weakAgainst": [
                "orisa",
                "echo",
                "pharah",
                "sigma",
                "wrecking-ball",
                "vendetta",
                "doomfist",
                "zenyatta"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "orisa",
                "vendetta"
          ],
          "strongDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "domina": {
                      "hard": false,
                      "motivo": ""
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": ""
                },
                "sigma": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "orisa": {
                      "hard": true,
                      "motivo": "Aguanta su forma Némesis y con la lanza le aturde y le corta las habilidades"
                },
                "echo": {
                      "hard": false,
                      "motivo": ""
                },
                "pharah": {
                      "hard": false,
                      "motivo": ""
                },
                "sigma": {
                      "hard": false,
                      "motivo": ""
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": ""
                },
                "vendetta": {
                      "hard": true,
                      "motivo": "Su espada atraviesa el escudo y el bloqueo de Ramattra y le hace mucho daño constante"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": ""
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["lucio","baptiste","mei","reaper","kiriko"]
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
    subrole: 'Escudo & Control',
    difficulty: 1,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/551fbe070c16fdfcc17f7f1de63af22c53e7d2f1340fc2f3172441504527bc4e.png',
    description: 'Caballero con escudo de barrera masivo y martillo propulsado; el pilar clásico del juego de avance cuerpo a cuerpo.',
    tier: 'C',
    counterAdvice: "Contra Reinhardt tienes dos opciones: ignorarlo o destruirle el escudo. Busca ángulos donde no esté protegiendo con el escudo y haz daño a su backline. Si quieres destruir su escudo, héroes como Bastion o Sierra le hacen mucho daño. También puedes jugar héroes que ignoran su escudo, como Ramattra, o que le hacen la vida imposible, como Orisa.",
    perks: [
          "Doble onda de fuego",
          "Cancelación de carga precisa",
          "Escudo con regeneración acelerada"
    ],
    counters: {
          "strongAgainst": [
                "domina",
                "sigma",
                "zarya"
          ],
          "weakAgainst": [
                "dmon",
                "doomfist",
                "orisa",
                "ramattra",
                "wrecking-ball",
                "pharah",
                "echo",
                "mei",
                "bastion"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "mei",
                "bastion"
          ],
          "strongDetails": {
                "domina": {
                      "hard": false,
                      "motivo": ""
                },
                "sigma": {
                      "hard": false,
                      "motivo": ""
                },
                "zarya": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "doomfist": {
                      "hard": false,
                      "motivo": ""
                },
                "orisa": {
                      "hard": false,
                      "motivo": ""
                },
                "ramattra": {
                      "hard": false,
                      "motivo": ""
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": ""
                },
                "pharah": {
                      "hard": false,
                      "motivo": ""
                },
                "echo": {
                      "hard": false,
                      "motivo": ""
                },
                "mei": {
                      "hard": true,
                      "motivo": ""
                },
                "bastion": {
                      "hard": true,
                      "motivo": "Mucho daño que debilita su escudo y no le deja avanzar"
                }
          }
    },
    synergies: ["lucio","ana","brigitte","mei","cassidy","reaper","zarya"]
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
    subrole: 'Escudo & Control',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a4c032fa466c9a6d9c6974747635d7ef910027f91cd58892af0c899db565f92d.png',
    description: 'Astrofísico brillante con control de la gravedad, barrera móvil reposicionable y absorción de proyectiles.',
    tier: 'B',
    counterAdvice: "Sigma es vulnerable después de utilizar su habilidad de absorción. Baitéale constantemente: después de que la use, ese es el momento.",
    perks: [
          "Acreción con daño de choque",
          "Absorción con sobreescudos ampliados",
          "Barrera con recarga instantánea"
    ],
    counters: {
          "strongAgainst": [
                "hazard",
                "ramattra",
                "sigma"
          ],
          "weakAgainst": [
                "reinhardt",
                "winston",
                "ramattra",
                "pharah",
                "echo",
                "mei",
                "lucio",
                "dmon",
                "vendetta",
                "sigma"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "hazard": {
                      "hard": false,
                      "motivo": ""
                },
                "ramattra": {
                      "hard": false,
                      "motivo": ""
                },
                "sigma": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "reinhardt": {
                      "hard": false,
                      "motivo": ""
                },
                "winston": {
                      "hard": false,
                      "motivo": ""
                },
                "ramattra": {
                      "hard": false,
                      "motivo": ""
                },
                "pharah": {
                      "hard": false,
                      "motivo": ""
                },
                "echo": {
                      "hard": false,
                      "motivo": ""
                },
                "mei": {
                      "hard": false,
                      "motivo": ""
                },
                "lucio": {
                      "hard": false,
                      "motivo": ""
                },
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "vendetta": {
                      "hard": false,
                      "motivo": ""
                },
                "sigma": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["baptiste","zenyatta","ashe","widowmaker","hanzo","soldier76"]
  },
  {
    id: 'dmon',
    name: 'D.Mon',
    role: 'tank',
    gender: 'Femenino',
    age: 21,
    country: 'Corea del Sur',
    affiliation: 'MEKA',
    releaseYear: 2025,
    range: 'Corto',
    style: 'brawl',
    subrole: 'Brawler / Asalto',
    difficulty: 2,
    icon: 'https://tonikiraw.com/assets/img/heroes/dmon.webp',
    description: 'Miembro de MEKA armada con mecha acorazado con Sable de plasma, Barrera de energía, Golpe arrollador con robo de salud y Fusión concentrada.',
    tier: 'A',
    counterAdvice: "D.Mon es un tanque sin movilidad vertical, así que tomar la altura contra ella es beneficioso. No intentes aturdirla o dormirla. Lo mejor que puedes hacer es dispararle y romperle el escudo para que sea vulnerable.",
    perks: [
          "Bestia interior: Golpes de sable sanan 40 a Barrera",
          "Golpetazo con 150% de robo de salud",
          "Fusión concentrada de alta potencia"
    ],
    counters: {
          "strongAgainst": [
                "dmon",
                "dva",
                "reinhardt",
                "roadhog",
                "sigma",
                "winston",
                "zarya"
          ],
          "weakAgainst": [
                "bastion",
                "echo",
                "freja",
                "mauga",
                "ramattra",
                "vendetta",
                "dmon",
                "orisa",
                "doomfist"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "vendetta"
          ],
          "strongDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "dva": {
                      "hard": false,
                      "motivo": ""
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": ""
                },
                "roadhog": {
                      "hard": false,
                      "motivo": ""
                },
                "sigma": {
                      "hard": false,
                      "motivo": ""
                },
                "winston": {
                      "hard": false,
                      "motivo": ""
                },
                "zarya": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "bastion": {
                      "hard": false,
                      "motivo": ""
                },
                "echo": {
                      "hard": false,
                      "motivo": ""
                },
                "freja": {
                      "hard": false,
                      "motivo": ""
                },
                "mauga": {
                      "hard": false,
                      "motivo": ""
                },
                "ramattra": {
                      "hard": false,
                      "motivo": ""
                },
                "vendetta": {
                      "hard": true,
                      "motivo": "Le da espadazos constantemente y la hace sufrir mucho"
                },
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "orisa": {
                      "hard": false,
                      "motivo": ""
                },
                "doomfist": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["lucio","kiriko","genji","reaper","doctrine"]
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
    subrole: 'Brawler / Asalto',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/06eeecb359f311f43a8f5121d4f9f3a93c565d70b30e94ef543c05596c9a39dc.png',
    description: 'Luchadora agresiva que inflige sangrado y se cura a través de las heridas de sus enemigos.',
    tier: 'C',
    counterAdvice: "Junker Queen es vulnerable todo el tiempo, así que no dejes de dispararle. Intenta alejarte cuando pega el hachazo, porque es su habilidad para recuperar salud. Si sabes que tiene ulti, intenta separarte del resto del equipo.",
    perks: [
          "Grito de mando con más velocidad",
          "Cuchillo magnético con sangrado extra",
          "Golpe de carnicero amplio"
    ],
    counters: {
          "strongAgainst": [
                "doomfist"
          ],
          "weakAgainst": [
                "orisa",
                "cassidy",
                "echo",
                "pharah",
                "ana",
                "kiriko",
                "bastion",
                "freja",
                "roadhog",
                "lucio"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "orisa",
                "ana",
                "kiriko"
          ],
          "strongDetails": {
                "doomfist": {
                      "hard": false,
                      "motivo": "Puede clavarle el cuchillo mientras bloquea y luego tirar de él hacia atrás"
                }
          },
          "weakDetails": {
                "orisa": {
                      "hard": true,
                      "motivo": "Junker Queen no tiene escudo: el stun de Orisa la para en seco"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": ""
                },
                "echo": {
                      "hard": false,
                      "motivo": ""
                },
                "pharah": {
                      "hard": false,
                      "motivo": ""
                },
                "ana": {
                      "hard": true,
                      "motivo": "Depende mucho de su curación y la anticuración de Ana le fastidia mucho"
                },
                "kiriko": {
                      "hard": true,
                      "motivo": "Kiriko limpia el sangrado y la anticuración de su ulti: se la deniega por completo"
                },
                "bastion": {
                      "hard": false,
                      "motivo": ""
                },
                "freja": {
                      "hard": false,
                      "motivo": ""
                },
                "roadhog": {
                      "hard": false,
                      "motivo": ""
                },
                "lucio": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["lucio","genji","reaper","brigitte","baptiste"]
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
    subrole: 'Brawler / Asalto',
    difficulty: 1,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/33d39bb439c08975197fc52eff4874716839711b5356c4fdc174f9c24bac1d0e.png',
    description: 'Tanque colosal con ametralladoras gemelas que incendian y asestan golpes críticos, con robo de vida en área.',
    tier: 'C',
    counterAdvice: "Mauga se beneficia de dispararte para curarse, así que intenta que no te dispare de frente. Apártate de su camino mientras carga y prepárate para atacarle cuando lo haya hecho, ya que ahí será vulnerable.",
    perks: [
          "Embestida con aturdimiento largo",
          "Aura de sobremarcha con resistencia ampliada",
          "Encendido rápido"
    ],
    counters: {
          "strongAgainst": [
                "dmon",
                "mauga",
                "roadhog",
                "wrecking-ball",
                "zarya"
          ],
          "weakAgainst": [
                "orisa",
                "sojourn",
                "ana",
                "bastion",
                "dva",
                "kiriko",
                "lifeweaver",
                "zarya",
                "sierra",
                "mauga"
          ],
          "hardStrongAgainst": [
                "mauga",
                "roadhog"
          ],
          "hardWeakAgainst": [
                "orisa",
                "ana",
                "mauga"
          ],
          "strongDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "mauga": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                },
                "roadhog": {
                      "hard": true,
                      "motivo": ""
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": ""
                },
                "zarya": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "orisa": {
                      "hard": true,
                      "motivo": "Mauga no tiene escudo: el stun de Orisa le para en seco"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": ""
                },
                "ana": {
                      "hard": true,
                      "motivo": "Puede cortar curaciones con la granada"
                },
                "bastion": {
                      "hard": false,
                      "motivo": ""
                },
                "dva": {
                      "hard": false,
                      "motivo": ""
                },
                "kiriko": {
                      "hard": false,
                      "motivo": ""
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": ""
                },
                "zarya": {
                      "hard": false,
                      "motivo": ""
                },
                "sierra": {
                      "hard": false,
                      "motivo": ""
                },
                "mauga": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                }
          }
    },
    synergies: ["lucio","kiriko","bastion","baptiste","reaper"]
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
    subrole: 'Brawler / Asalto',
    difficulty: 1,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/a73958a28551f5254f3ab3f97c5f5f8d698a95c0b6a515d1a2b1caac169205a6.png',
    description: 'Ancla inamovible con Fortificación inmune a CC, lanza de jabalina y giro de lanza defensivo.',
    tier: 'B',
    counterAdvice: "Orisa es muy difícil de matar: muchas veces es mejor hacer focus a sus supports antes que a ella. Pero si tienes que matarla, lleva la cuenta de sus habilidades: cuando gaste la forma dorada, ese es el momento.",
    perks: [
          "Jabalina con daño de empuje",
          "Fortificación de mayor duración",
          "Enfriamiento reducido"
    ],
    counters: {
          "strongAgainst": [
                "dmon",
                "doomfist",
                "dva",
                "hazard",
                "junker-queen",
                "mauga",
                "orisa",
                "ramattra",
                "reinhardt",
                "roadhog",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "zarya",
                "symmetra",
                "cassidy",
                "zenyatta",
                "freja",
                "orisa"
          ],
          "hardStrongAgainst": [
                "doomfist",
                "hazard",
                "junker-queen",
                "mauga",
                "orisa",
                "ramattra",
                "roadhog",
                "wrecking-ball"
          ],
          "hardWeakAgainst": [
                "orisa"
          ],
          "strongDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "doomfist": {
                      "hard": true,
                      "motivo": "Su stun perjudica a Doomfist durante su bloqueo, que es su habilidad central"
                },
                "dva": {
                      "hard": false,
                      "motivo": ""
                },
                "hazard": {
                      "hard": true,
                      "motivo": "Su stun detiene a Hazard, que bloquea con su propio cuerpo"
                },
                "junker-queen": {
                      "hard": true,
                      "motivo": "Junker Queen no tiene escudo: el stun de Orisa la para en seco"
                },
                "mauga": {
                      "hard": true,
                      "motivo": "Mauga no tiene escudo: el stun de Orisa le para en seco"
                },
                "orisa": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                },
                "ramattra": {
                      "hard": true,
                      "motivo": "Aguanta su forma Némesis y con la lanza le aturde y le corta las habilidades"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": ""
                },
                "roadhog": {
                      "hard": true,
                      "motivo": "Roadhog no tiene escudo: el stun de Orisa le para en seco"
                },
                "wrecking-ball": {
                      "hard": true,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "zarya": {
                      "hard": false,
                      "motivo": ""
                },
                "symmetra": {
                      "hard": false,
                      "motivo": ""
                },
                "cassidy": {
                      "hard": false,
                      "motivo": ""
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": ""
                },
                "freja": {
                      "hard": false,
                      "motivo": ""
                },
                "orisa": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                }
          }
    },
    synergies: ["baptiste","torbjorn","bastion","ana","cassidy"]
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
    subrole: 'Brawler / Asalto',
    difficulty: 1,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/89ddf07e4b619ed96169042e296a1b8856d102746f35add88284b44a9a5a6a03.png',
    description: 'Superviviente despiadado con un gancho mortal, trampa de cerdos y autocuración con inhalador recargable.',
    tier: 'C',
    counterAdvice: "Dispárale constantemente para forzar su sanación: cuando se esté curando es el momento de aturdirlo o lanzarle una granada. Juega con las paredes para que su gancho no tenga efecto.",
    perks: [
          "Inhalador con resistencia al daño",
          "Gancho con mayor alcance",
          "Trampa electrificada"
    ],
    counters: {
          "strongAgainst": [
                "hazard",
                "junker-queen",
                "roadhog",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "ana",
                "sojourn",
                "dmon",
                "dva",
                "mauga",
                "orisa",
                "sierra",
                "lifeweaver",
                "zenyatta",
                "mizuki",
                "sombra",
                "roadhog"
          ],
          "hardStrongAgainst": [
                "roadhog"
          ],
          "hardWeakAgainst": [
                "ana",
                "sojourn",
                "mauga",
                "orisa",
                "zenyatta",
                "sombra",
                "roadhog"
          ],
          "strongDetails": {
                "hazard": {
                      "hard": false,
                      "motivo": ""
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": ""
                },
                "roadhog": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "ana": {
                      "hard": true,
                      "motivo": "Depende mucho de su curación y la anticuración de Ana le fastidia mucho"
                },
                "sojourn": {
                      "hard": true,
                      "motivo": ""
                },
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "dva": {
                      "hard": false,
                      "motivo": ""
                },
                "mauga": {
                      "hard": true,
                      "motivo": ""
                },
                "orisa": {
                      "hard": true,
                      "motivo": "Roadhog no tiene escudo: el stun de Orisa le para en seco"
                },
                "sierra": {
                      "hard": false,
                      "motivo": ""
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": ""
                },
                "zenyatta": {
                      "hard": true,
                      "motivo": ""
                },
                "mizuki": {
                      "hard": false,
                      "motivo": ""
                },
                "sombra": {
                      "hard": true,
                      "motivo": "Con Ciberespacio le deniega tanto la curación como el daño después de que enganche a alguien"
                },
                "roadhog": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                }
          }
    },
    synergies: ["kiriko","baptiste","junkrat","cassidy","ashe"]
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
    subrole: 'Brawler / Asalto',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/9b6f63cc66ddf9d5e0862173c733cc0d2e574c5c89357798d91b93b2f95a7080.png',
    description: 'Una de las mujeres más fuertes del mundo; absorbe daño con sus burbujas de partículas para potenciar su rayo letal.',
    tier: 'B',
    counterAdvice: "Vigila bien a quién le pone las burbujas Zarya y cuenta siempre cuántas ha utilizado: si sabes que solo le queda una y la ha usado en ella misma, muchas veces es mejor rompérsela e intentar matarla. Zarya no tiene apenas movilidad, así que si se pasa de frenada puedes castigarla mucho.",
    perks: [
          "Burbuja con enfriamiento reducido",
          "Retención de energía al morir",
          "Doble carga gravitatoria"
    ],
    counters: {
          "strongAgainst": [
                "dva",
                "hazard",
                "mauga",
                "orisa",
                "zarya"
          ],
          "weakAgainst": [
                "winston",
                "mauga",
                "dmon",
                "bastion",
                "lucio",
                "reinhardt",
                "zarya"
          ],
          "hardStrongAgainst": [
                "zarya"
          ],
          "hardWeakAgainst": [
                "zarya"
          ],
          "strongDetails": {
                "dva": {
                      "hard": false,
                      "motivo": ""
                },
                "hazard": {
                      "hard": false,
                      "motivo": ""
                },
                "mauga": {
                      "hard": false,
                      "motivo": ""
                },
                "orisa": {
                      "hard": false,
                      "motivo": ""
                },
                "zarya": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                }
          },
          "weakDetails": {
                "winston": {
                      "hard": false,
                      "motivo": ""
                },
                "mauga": {
                      "hard": false,
                      "motivo": ""
                },
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "bastion": {
                      "hard": false,
                      "motivo": ""
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Mantiene a su equipo fuera del alcance del rayo de Zarya y le ayuda a guardar la distancia"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": ""
                },
                "zarya": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                }
          }
    },
    synergies: ["reaper","genji","hanzo","lucio","ana","baptiste","vendetta"]
  },
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
    subrole: 'Hitscan / Tirador',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4076bbaa2eb52a0bfe612434071e56e7702d5454473dbbea2f9e392a9d997a94.png',
    description: 'Líder de la banda Deadlock armada con rifle de palanca Viper, dinamita detonable y su fiel secuaz B.O.B.',
    tier: 'C',
    counterAdvice: "Contra Ashe, recorta las distancias y aprovecha para dispararle a la cabeza cuando está apuntando, ya que es más vulnerable.",
    perks: [
          "Dinamita con propagación mayor",
          "Disparo de escopeta con retroceso seguro",
          "Carga veloz de B.O.B."
    ],
    counters: {
          "strongAgainst": [
                "echo",
                "freja",
                "pharah"
          ],
          "weakAgainst": [],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "echo": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                }
          },
          "weakDetails": {}
    },
    synergies: ["mercy","sigma","baptiste","zenyatta","reinhardt"]
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
    subrole: 'Hitscan / Tirador',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/9240cd64cc8ef58df9acbf55204ab1b5d8578f743fda5931f0dbccbd75ab841b.png',
    description: 'Pistolero justiciero con revólver Pacifista, granada magnética que anula habilidades de movimiento y tiro certero.',
    tier: 'A',
    counterAdvice: "Intenta jugar siempre donde la granada de Cassidy no tenga efecto. Cassidy sufre en las distancias largas: si juegas aéreos, hazlo de lejos; si juegas snipers, aléjate también; y si juegas flankers, cuidado con la granada.",
    perks: [
          "Voltereta con recarga doble",
          "Granada con efecto de anclaje pesado",
          "Tiro certero veloz"
    ],
    counters: {
          "strongAgainst": [
                "anran",
                "cassidy",
                "doomfist",
                "echo",
                "freja",
                "genji",
                "hazard",
                "junker-queen",
                "orisa",
                "pharah",
                "reaper",
                "shion",
                "tracer",
                "vendetta",
                "venture",
                "winston",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "cassidy"
          ],
          "hardStrongAgainst": [
                "anran",
                "cassidy",
                "genji",
                "reaper",
                "shion",
                "tracer",
                "vendetta",
                "venture",
                "wrecking-ball"
          ],
          "hardWeakAgainst": [
                "cassidy"
          ],
          "strongDetails": {
                "anran": {
                      "hard": true,
                      "motivo": "Su granada y su daño letal a corta distancia castigan a quien se le tira encima"
                },
                "cassidy": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": ""
                },
                "echo": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "genji": {
                      "hard": true,
                      "motivo": "Su granada y su daño letal a corta distancia castigan a quien se le tira encima"
                },
                "hazard": {
                      "hard": false,
                      "motivo": ""
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": ""
                },
                "orisa": {
                      "hard": false,
                      "motivo": ""
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "reaper": {
                      "hard": true,
                      "motivo": "Con su daño a media distancia y su granada neutraliza sus habilidades de movilidad"
                },
                "shion": {
                      "hard": true,
                      "motivo": "Su granada y su daño letal a corta distancia castigan a quien se le tira encima"
                },
                "tracer": {
                      "hard": true,
                      "motivo": "Su granada y su daño letal a corta distancia castigan a quien se le tira encima"
                },
                "vendetta": {
                      "hard": true,
                      "motivo": "Su granada y su daño letal a corta distancia castigan a quien se le tira encima"
                },
                "venture": {
                      "hard": true,
                      "motivo": "Con su daño a media distancia y su granada neutraliza sus habilidades de movilidad"
                },
                "winston": {
                      "hard": false,
                      "motivo": ""
                },
                "wrecking-ball": {
                      "hard": true,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "cassidy": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                }
          }
    },
    synergies: ["reinhardt","lucio","ana","brigitte","junker-queen"]
  },
  {
    id: 'emre',
    name: 'Emre',
    role: 'damage',
    gender: 'Masculino',
    age: 44,
    country: 'Turquía',
    affiliation: 'Overwatch',
    releaseYear: 2025,
    range: 'Medio',
    style: 'poke',
    subrole: 'Hitscan / Tirador',
    difficulty: 1,
    icon: 'https://tonikiraw.com/assets/img/heroes/emre.webp',
    description: 'Veterano de la Operación Cúpula Blanca con Pistola sifonadora hitscan, Granada cibernética adhesiva con daño explosivo y Protocolo de anulación con proyectiles supresores.',
    tier: 'C',
    counterAdvice: "Cuidado con las granadas de Emre: son su punto fuerte. Cuando tire la ulti, es mucho mejor esconderse, a menos que no puedas.",
    perks: [
          "Seguridad supresiva con ralentización del 30%",
          "Disipador térmico para disparo continuo",
          "Adhesión cibernética con detonación fijada"
    ],
    counters: {
          "strongAgainst": [
                "echo",
                "freja",
                "pharah"
          ],
          "weakAgainst": [],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "echo": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                }
          },
          "weakDetails": {}
    },
    synergies: ["ana","baptiste","reinhardt","sigma","junker-queen"]
  },
  {
    id: 'sierra',
    name: 'Sierra',
    role: 'damage',
    gender: 'Femenino',
    age: 27,
    country: 'España',
    affiliation: 'Talon',
    releaseYear: 2025,
    range: 'Largo',
    style: 'poke',
    subrole: 'Hitscan / Tirador',
    difficulty: 1,
    icon: 'https://tonikiraw.com/assets/img/heroes/sierra.webp',
    description: 'Especialista en supresión pesada con Rifle hélice de cadencia acelerada, Disparo rastreador que potencia velocidad de ataque y Drones de anclaje de apoyo médico.',
    tier: 'C',
    counterAdvice: "Contra Sierra es muy importante que juegues cerca de paredes. Si te clava el dardo, simplemente escóndete hasta que se te pase el efecto.",
    perks: [
          "Fijada: 20% velocidad de ataque tras marcar objetivo",
          "Drones médicos con botiquín incorporado",
          "Agarre firme con reducción de dispersión"
    ],
    counters: {
          "strongAgainst": [
                "mauga",
                "roadhog",
                "wrecking-ball"
          ],
          "weakAgainst": [],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "mauga": {
                      "hard": false,
                      "motivo": ""
                },
                "roadhog": {
                      "hard": false,
                      "motivo": ""
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {}
    },
    synergies: ["sigma","baptiste","zenyatta","domina","mercy"]
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
    subrole: 'Hitscan / Tirador',
    difficulty: 3,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/82b8c1b8765dcb9a0ba16e343c3516bf324c771ac81e9878473280216e70a889.png',
    description: 'Comandante cibernética con cañón de riel de precisión alimentado por energía, disparo disruptor y deslizamiento potente.',
    tier: 'A',
    counterAdvice: "Contra Sojourn, vigila mucho el resplandor cuando tiene el tiro cargado. Cuenta también sus dashes: al principio de la partida tendrá uno, y si la partida está más avanzada, tendrá dos.",
    perks: [
          "Deslizamiento con super salto",
          "Disparo disruptor con efecto ralentizante",
          "Riel con carga pasiva"
    ],
    counters: {
          "strongAgainst": [
                "domina",
                "echo",
                "freja",
                "hazard",
                "mauga",
                "pharah",
                "roadhog"
          ],
          "weakAgainst": [],
          "hardStrongAgainst": [
                "domina",
                "roadhog"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "domina": {
                      "hard": true,
                      "motivo": ""
                },
                "echo": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "hazard": {
                      "hard": false,
                      "motivo": ""
                },
                "mauga": {
                      "hard": false,
                      "motivo": ""
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "roadhog": {
                      "hard": true,
                      "motivo": ""
                }
          },
          "weakDetails": {}
    },
    synergies: ["mercy","sigma","winston","lucio","baptiste"]
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
    subrole: 'Hitscan / Tirador',
    difficulty: 1,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/c93b5f0a528c40473188f77cc2a267aee7d5b6cf5c9e104105d634b4388674e2.png',
    description: 'Super-soldado vigilante con rifle de pulsos, cohetes Helix de impacto, sprint táctico infinito y campo biótico curativo.',
    tier: 'B',
    counterAdvice: "Entre su curación y su arma, Soldado a larga distancia es bastante bueno: intenta recortar espacios con él. Si te lo encuentras de cerca, es muy fácil acabar con él.",
    perks: [
          "Sprint con disparo continuo",
          "Campo biótico de mayor radio",
          "Cohetes Helix con doble carga"
    ],
    counters: {
          "strongAgainst": [
                "echo",
                "freja",
                "pharah"
          ],
          "weakAgainst": [],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "echo": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                }
          },
          "weakDetails": {}
    },
    synergies: ["mercy","baptiste","sigma","reinhardt","ana"]
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
    subrole: 'Hitscan / Tirador',
    difficulty: 3,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/6e4702b45f196aaf51555cf57327322721f45458b17f5f0643ed008a88378259.png',
    description: 'Asesina letal armada con el rifle de francotirador Beso de la Viuda, gancho de agarre, mina venenosa y visión infrarroja.',
    tier: 'B',
    counterAdvice: "Evita asomarte cuando sabes que Widowmaker tiene tomado un ángulo. Recorta distancias, flanquéala o gana el duelo de snipers.",
    perks: [
          "Gancho con reseteo al acertar tiro a la cabeza",
          "Mina venenosa con rastreo",
          "Carga de mira acelerada"
    ],
    counters: {
          "strongAgainst": [
                "echo",
                "freja",
                "pharah",
                "widowmaker"
          ],
          "weakAgainst": [
                "wuyang",
                "widowmaker"
          ],
          "hardStrongAgainst": [
                "widowmaker"
          ],
          "hardWeakAgainst": [
                "widowmaker"
          ],
          "strongDetails": {
                "echo": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                }
          },
          "weakDetails": {
                "wuyang": {
                      "hard": false,
                      "motivo": ""
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                }
          }
    },
    synergies: ["mercy","sigma","zenyatta","baptiste"]
  },
  {
    id: 'anran',
    name: 'Anran',
    role: 'damage',
    gender: 'Femenino',
    age: 22,
    country: 'China',
    affiliation: 'Independiente',
    releaseYear: 2025,
    range: 'Corto',
    style: 'dive',
    subrole: 'Flanker / Asesino',
    difficulty: 2,
    icon: 'https://tonikiraw.com/assets/img/heroes/anran.webp',
    description: 'Ágil piromante con Ignición abrasadora continua, Carga infernal con reducción de recarga, Llama danzante sanadora y escudos de calor temporales.',
    tier: 'C',
    counterAdvice: "Mantén tu distancia respecto a Anran siempre que puedas para obligarla a gastar sus cooldowns. No te agobies al luchar contra ella: intenta pelear e ignora el fuego.",
    perks: [
          "A fuego lento: daño de ignición prolongado",
          "Mecha corta: reducción de cooldown en carga",
          "Llama hambrienta con autosanación mejorada"
    ],
    counters: {
          "strongAgainst": [
                "dva",
                "genji"
          ],
          "weakAgainst": [
                "cassidy",
                "kiriko"
          ],
          "hardStrongAgainst": [
                "genji"
          ],
          "hardWeakAgainst": [
                "cassidy"
          ],
          "strongDetails": {
                "dva": {
                      "hard": false,
                      "motivo": ""
                },
                "genji": {
                      "hard": true,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "cassidy": {
                      "hard": true,
                      "motivo": "Su granada y su daño letal a corta distancia castigan a quien se le tira encima"
                },
                "kiriko": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["sombra","doctrine","winston","kiriko","lucio"]
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
    subrole: 'Flanker / Asesino',
    difficulty: 3,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/156b12c20b1aea872c1eeb5bb37a7de1047b2ab30ecefd0663a8925badde1ea8.png',
    description: 'Ninja cibernético con shurikens, desvío de proyectiles, corte veloz reseteable con bajas y Hoja del Dragón.',
    tier: 'A',
    counterAdvice: "Contra Genji juega rayos y armas que no pueda desviar. Ten siempre en cuenta cuándo gasta el desvío: es el momento en el que le puedes atacar sin miedo.",
    perks: [
          "Desvío de proyectiles extendido",
          "Corte con daño de sangrado",
          "Shurikens adicionales"
    ],
    counters: {
          "strongAgainst": [],
          "weakAgainst": [
                "cassidy",
                "lucio",
                "anran",
                "freja",
                "symmetra",
                "moira",
                "mei"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "cassidy",
                "anran",
                "symmetra"
          ],
          "strongDetails": {},
          "weakDetails": {
                "cassidy": {
                      "hard": true,
                      "motivo": "Su granada y su daño letal a corta distancia castigan a quien se le tira encima"
                },
                "lucio": {
                      "hard": false,
                      "motivo": ""
                },
                "anran": {
                      "hard": true,
                      "motivo": ""
                },
                "freja": {
                      "hard": false,
                      "motivo": ""
                },
                "symmetra": {
                      "hard": true,
                      "motivo": "Genji es vulnerable a los rayos: no puede desviar el rayo de Symmetra"
                },
                "moira": {
                      "hard": false,
                      "motivo": ""
                },
                "mei": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["ana","winston","tracer","kiriko","lucio","doctrine"]
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
    subrole: 'Flanker / Asesino',
    difficulty: 1,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/dc6ff07ac790c00dc95a40882449617bb6e0e38906b353a630cffe0c815270a9.png',
    description: 'Espectro ejecutor con escopetas Hellfire gemelas, robo de vida pasivo, forma fantasmal invulnerable y teletransporte.',
    tier: 'B',
    counterAdvice: "Siempre que veas a un Reaper, dispárale para forzarle el Paso fantasmal. Si hace un teletransporte, busca hacia dónde ha ido. Cuando tenga ulti, no entres en pánico: dispárale constantemente.",
    perks: [
          "Paso de las sombras instantáneo",
          "Robo de vida aumentado",
          "Forma fantasmal veloz"
    ],
    counters: {
          "strongAgainst": [
                "winston"
          ],
          "weakAgainst": [
                "cassidy"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "cassidy"
          ],
          "strongDetails": {
                "winston": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "cassidy": {
                      "hard": true,
                      "motivo": "Con su daño a media distancia y su granada neutraliza sus habilidades de movilidad"
                }
          }
    },
    synergies: ["lucio","reinhardt","junker-queen","kiriko","mei"]
  },
  {
    id: 'shion',
    name: 'Shion',
    role: 'damage',
    gender: 'Femenino',
    age: 23,
    country: 'Japón',
    affiliation: 'Neo-Tokyo Drifters',
    releaseYear: 2025,
    range: 'Corto',
    style: 'dive',
    subrole: 'Flanker / Asesino',
    difficulty: 2,
    icon: 'https://tonikiraw.com/assets/img/heroes/shion.webp',
    description: 'Piloto urbana con moto cibernética y cuchillas sopladoras, dotada de Evasión con exceso de salud, Ejecución demoledora y Vuelta salvaje con regeneración activa.',
    tier: 'A',
    counterAdvice: "El punto fuerte de Shion es la moto: cuando la haya gastado, es el momento en que tienes que hacerle focus.",
    perks: [
          "Instinto de supervivencia con mayor duración de salud",
          "Máquina X: 20% más daño en objetivos <50% vida",
          "Vuelta salvaje con regeneración continua"
    ],
    counters: {
          "strongAgainst": [
                "winston",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "cassidy"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "cassidy"
          ],
          "strongDetails": {
                "winston": {
                      "hard": false,
                      "motivo": ""
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "cassidy": {
                      "hard": true,
                      "motivo": "Su granada y su daño letal a corta distancia castigan a quien se le tira encima"
                }
          }
    },
    synergies: ["winston","sombra","kiriko","lucio","genji"]
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
    subrole: 'Flanker / Asesino',
    difficulty: 3,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4504f6f15cb3feaa92ecd38e01dcf751cb5abdac2e0bb52d0555727e53277502.png',
    description: 'Piloto que desafía el tiempo con traslaciones hiperactivas, regresión temporal curativa, pistolas de pulsos y bomba de pulsos.',
    tier: 'S',
    counterAdvice: "A Tracer le molesta mucho que le vayas disparando de poquito a poquito: incluso aunque no la puedas matar, echarla de donde está jugando es útil. Cuando gaste el Recall, cántaselo siempre a tu equipo: es el momento de hacerle focus.",
    perks: [
          "Cuarta traslación temporal",
          "Regresión con curación completa",
          "Bomba de pulsos con mayor imán"
    ],
    counters: {
          "strongAgainst": [
                "juno",
                "lucio",
                "tracer",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "cassidy",
                "tracer"
          ],
          "hardStrongAgainst": [
                "tracer"
          ],
          "hardWeakAgainst": [
                "cassidy",
                "tracer"
          ],
          "strongDetails": {
                "juno": {
                      "hard": false,
                      "motivo": "Juno tiene poca vida y Tracer la trackea fácil"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Poca salud, Tracer le hace mucho daño"
                },
                "tracer": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "cassidy": {
                      "hard": true,
                      "motivo": "Su granada y su daño letal a corta distancia castigan a quien se le tira encima"
                },
                "tracer": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                }
          }
    },
    synergies: ["winston","genji","sombra","kiriko","lucio"]
  },
  {
    id: 'vendetta',
    name: 'Vendetta',
    role: 'damage',
    gender: 'Femenino',
    age: 29,
    country: 'Italia',
    affiliation: 'Talon',
    releaseYear: 2025,
    range: 'Corto',
    style: 'dive',
    subrole: 'Flanker / Asesino',
    difficulty: 2,
    icon: 'https://tonikiraw.com/assets/img/heroes/vendetta.webp',
    description: 'Espadachina asesina de Talon con Corte proyectado, Espiral de tajos con daño en área, Arremetida veloz acumulable y Golpe drenante con robo de salud.',
    tier: 'A',
    counterAdvice: "Dispara constantemente a Vendetta. Sé que da miedo, pero que pierda vida o que pierda el bloqueo le fastidia mucho.",
    perks: [
          "Filo extra con reducción de coste energético",
          "Golpe drenante con 40% de robo de salud",
          "Implacable: acumula velocidad de ataque y movimiento"
    ],
    counters: {
          "strongAgainst": [
                "dmon",
                "dva",
                "ramattra",
                "sigma",
                "winston"
          ],
          "weakAgainst": [
                "cassidy",
                "junkrat",
                "torbjorn"
          ],
          "hardStrongAgainst": [
                "dmon",
                "dva",
                "ramattra"
          ],
          "hardWeakAgainst": [
                "cassidy"
          ],
          "strongDetails": {
                "dmon": {
                      "hard": true,
                      "motivo": "Le da espadazos constantemente y la hace sufrir mucho"
                },
                "dva": {
                      "hard": true,
                      "motivo": "Su espada no la para la Matriz: le da espadazos sin parar"
                },
                "ramattra": {
                      "hard": true,
                      "motivo": "Su espada atraviesa el escudo y el bloqueo de Ramattra y le hace mucho daño constante"
                },
                "sigma": {
                      "hard": false,
                      "motivo": ""
                },
                "winston": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "cassidy": {
                      "hard": true,
                      "motivo": "Su granada y su daño letal a corta distancia castigan a quien se le tira encima"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": ""
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["zarya","sombra","doctrine","lucio","kiriko"]
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
    subrole: 'Flanker / Asesino',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/dcab9123f5f55df22e54d4e797de43c71b917e0149dd059a7fd6136f48464cd0.png',
    description: 'Arqueólogue intrépide con excavador inteligente que dispara cargas sísmicas, se sumerge bajo tierra y embiste.',
    tier: 'C',
    counterAdvice: "Contra Venture, fíjate muy bien en cuándo va a salir del suelo: en ese momento no podrá volver a meterse hasta dentro de un rato, y es el momento de hacerle focus.",
    perks: [
          "Excavación subterránea veloz",
          "Escudos pasivos aumentados al usar habilidades",
          "Onda de choque mayor"
    ],
    counters: {
          "strongAgainst": [],
          "weakAgainst": [
                "junkrat",
                "cassidy"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "cassidy"
          ],
          "strongDetails": {},
          "weakDetails": {
                "junkrat": {
                      "hard": false,
                      "motivo": ""
                },
                "cassidy": {
                      "hard": true,
                      "motivo": "Con su daño a media distancia y su granada neutraliza sus habilidades de movilidad"
                }
          }
    },
    synergies: ["winston","doomfist","tracer","kiriko","lucio"]
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
    subrole: 'Proyectil & Control',
    difficulty: 1,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4ede795c2a681aaccfa72d0c901cba0cb8a2c292fd6a97b2ba9faed161c2d184.png',
    description: 'Unidad de asedio ómnica capaz de transformarse en una torreta ametralladora móvil con granada táctica.',
    tier: 'B',
    counterAdvice: "Contra Bastion, ten siempre en la cabeza cuándo ha utilizado el modo torreta. Durante el modo torreta, escóndete; durante el modo centinela, atácale.",
    perks: [
          "Modo asalto con mayor velocidad",
          "Granada de rebote aumentada",
          "Blindaje reactivo"
    ],
    counters: {
          "strongAgainst": [
                "dmon",
                "domina",
                "echo",
                "freja",
                "junker-queen",
                "mauga",
                "pharah",
                "reinhardt",
                "winston",
                "zarya"
          ],
          "weakAgainst": [],
          "hardStrongAgainst": [
                "reinhardt"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "domina": {
                      "hard": false,
                      "motivo": ""
                },
                "echo": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": ""
                },
                "mauga": {
                      "hard": false,
                      "motivo": ""
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "reinhardt": {
                      "hard": true,
                      "motivo": "Mucho daño que debilita su escudo y no le deja avanzar"
                },
                "winston": {
                      "hard": false,
                      "motivo": ""
                },
                "zarya": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {}
    },
    synergies: ["baptiste","sigma","orisa","mercy","mei"]
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
    subrole: 'Proyectil & Control',
    difficulty: 3,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/78b61c3e806fb26b02b8980fba62189155074fc15bd865b0883268e546030be5.png',
    description: 'Arquero maestro que dispara flechas sónicas rastreadoras, ráfagas tormentosas y convoca dragones espectrales.',
    tier: 'B',
    counterAdvice: "Hanzo nunca te va a matar: tú mueres contra él. Ten en cuenta si ha tirado una flecha sónica al cruzar una esquina y, sobre todo, no hagas movimientos predecibles si sabes que hay un Hanzo delante.",
    perks: [
          "Flecha sónica con pulso ampliado",
          "Flechas de tormenta con rebote",
          "Salto acrobático doble"
    ],
    counters: {
          "strongAgainst": [],
          "weakAgainst": [],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {},
          "weakDetails": {}
    },
    synergies: ["zarya","sigma","mercy","baptiste","zenyatta"]
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
    subrole: 'Proyectil & Control',
    difficulty: 1,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/7660b9fc6f25f30858fdd8797fe0d52b2306f1e78fef99843f58a274e69af046.png',
    description: 'Anarquista demente obsesionado con explosivos de rebote, cepos inmovilizadores y minas de conmoción.',
    tier: 'C',
    counterAdvice: "Junkrat va a estar spameando detrás de un sitio constantemente: simplemente mira dónde dispara e intenta evitar esa zona. Contra el RIP-Tire, muchas veces es mejor esconderse y no hacer ruido si eres un support; si eres un DPS o un tanque, búscalo e intenta romperlo.",
    perks: [
          "Triple mina de choque",
          "Cepo reforzado con daño aumentado",
          "Neumático con turbo"
    ],
    counters: {
          "strongAgainst": [
                "vendetta",
                "venture"
          ],
          "weakAgainst": [],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "vendetta": {
                      "hard": false,
                      "motivo": ""
                },
                "venture": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {}
    },
    synergies: ["reinhardt","roadhog","baptiste","mei"]
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
    subrole: 'Proyectil & Control',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/4a55ced3bd597fb08e0fde9dc007f8543ac616ba98ca3db9b0e4d871a8ae17f8.png',
    description: 'Climatologist armada con un cañón endotérmico para aislar tanques con muros de hielo y congelar zonas.',
    tier: 'C',
    counterAdvice: "Dispara a Mei para forzar su cubito de hielo y, después de ello, hazle focus.",
    perks: [
          "Muro de hielo con más pilares",
          "Bloque de hielo con explosión térmica",
          "Carámbano perforante"
    ],
    counters: {
          "strongAgainst": [
                "dva",
                "genji",
                "reinhardt",
                "sigma"
          ],
          "weakAgainst": [],
          "hardStrongAgainst": [
                "reinhardt"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "dva": {
                      "hard": false,
                      "motivo": ""
                },
                "genji": {
                      "hard": false,
                      "motivo": ""
                },
                "reinhardt": {
                      "hard": true,
                      "motivo": ""
                },
                "sigma": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {}
    },
    synergies: ["reinhardt","ramattra","lucio","baptiste","reaper"]
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
    subrole: 'Proyectil & Control',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ebec57e8bd68b3d4383edfeb34f8f52dd0b94a6467d594c2fee722e8a97c32aa.png',
    description: 'Arquitecta de luz sólida armada con proyector de fotones que se recarga con escudos, torretas centinela y teletransportador.',
    tier: 'B',
    counterAdvice: "Mantente lejos del rayo de Symmetra y juega alrededor de sus teletransportadores. Destrúyeselos siempre que puedas: le fastidiarás muchísimo la movilidad y la capacidad de reposicionarse.",
    perks: [
          "Torretas con curación/ralentización",
          "Rayo de fotones con alcance extendido",
          "Teletransportador instantáneo"
    ],
    counters: {
          "strongAgainst": [
                "dva",
                "genji",
                "orisa"
          ],
          "weakAgainst": [
                "sombra"
          ],
          "hardStrongAgainst": [
                "genji"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "dva": {
                      "hard": false,
                      "motivo": ""
                },
                "genji": {
                      "hard": true,
                      "motivo": "Genji es vulnerable a los rayos: no puede desviar el rayo de Symmetra"
                },
                "orisa": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "sombra": {
                      "hard": false,
                      "motivo": "El PEM de Sombra anula por completo su ulti"
                }
          }
    },
    synergies: ["reinhardt","ramattra","mei","baptiste","lucio"]
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
    subrole: 'Proyectil & Control',
    difficulty: 1,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce17118cedc29b0d2ac1e059666bed36b9531c85079b0b894bb402d12c917ba9.png',
    description: 'Maestro armero con pistola de remaches, sobrecarga con armadura y velocidad, torreta automática defensiva y lava fundida.',
    tier: 'A',
    counterAdvice: "Destruye siempre la torreta de Torbjörn cuando la veas. Cuando gaste su sobrecarga, es el momento de intentar hacerle focus.",
    perks: [
          "Torreta con misiles menores",
          "Sobrecarga de doble duración",
          "Remaches incendiarios"
    ],
    counters: {
          "strongAgainst": [
                "hazard",
                "vendetta"
          ],
          "weakAgainst": [],
          "hardStrongAgainst": [
                "hazard"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "hazard": {
                      "hard": true,
                      "motivo": "Con la cantidad de spam de daño que tiene, castiga a Hazard"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {}
    },
    synergies: ["orisa","sigma","reinhardt","baptiste","bastion"]
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
    subrole: 'Aéreo / Movilidad',
    difficulty: 3,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/d4f2d5b0c2b7e82d61353186c5f23152ccba9d3569b50839aa580dca3e9114ba.png',
    description: 'Robot evolutiva con vuelo libre, bombas pegajosas, haz de enfoque ejecutor y capacidad de duplicar a cualquier enemigo.',
    tier: 'C',
    counterAdvice: "Es muy sencillo matar a Echo: lo único que tienes que hacer es recortar distancias con ella. Intentará jugarte de lejos o sorprenderte flanqueando.",
    perks: [
          "Haz de enfoque ejecutor anticipado",
          "Planeo aerodinámico prolongado",
          "Recarga veloz al duplicar"
    ],
    counters: {
          "strongAgainst": [
                "dmon",
                "doomfist",
                "hazard",
                "junker-queen",
                "ramattra",
                "reinhardt",
                "sigma"
          ],
          "weakAgainst": [
                "ashe",
                "bastion",
                "cassidy",
                "soldier76",
                "widowmaker",
                "emre",
                "sojourn",
                "doctrine"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "doomfist": {
                      "hard": false,
                      "motivo": ""
                },
                "hazard": {
                      "hard": false,
                      "motivo": ""
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": ""
                },
                "ramattra": {
                      "hard": false,
                      "motivo": ""
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": ""
                },
                "sigma": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "ashe": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "bastion": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Como Illari, castiga a los voladores con su disparo a media distancia"
                }
          }
    },
    synergies: ["mercy","zenyatta","winston","tracer","pharah"]
  },
  {
    id: 'freja',
    name: 'Freja',
    role: 'damage',
    gender: 'Femenino',
    age: 26,
    country: 'Noruega',
    affiliation: 'Valkyrie Aerospace',
    releaseYear: 2025,
    range: 'Largo',
    style: 'poke',
    subrole: 'Aéreo / Movilidad',
    difficulty: 2,
    icon: 'https://tonikiraw.com/assets/img/heroes/freja.webp',
    description: 'Tiradora aérea armada con virote automático de precisión, Corriente ascendente con planeo sostenido, Desplazamiento veloz y sanación aérea pasiva.',
    tier: 'B',
    counterAdvice: "Intenta no hacer movimientos predecibles contra Freja y juega con las paredes para que no pueda dispararte los virotes. Recorta distancias para acabar con ella, ya que tiene poca vida.",
    perks: [
          "Andanada implacable: recarga virote al impactar",
          "Recuperación aérea con sanación activa planeando",
          "Vientos crecientes con carga adicional"
    ],
    counters: {
          "strongAgainst": [
                "dmon",
                "freja",
                "genji",
                "hazard",
                "junker-queen",
                "orisa"
          ],
          "weakAgainst": [
                "ashe",
                "bastion",
                "cassidy",
                "emre",
                "sojourn",
                "soldier76",
                "widowmaker",
                "doctrine",
                "freja"
          ],
          "hardStrongAgainst": [
                "freja"
          ],
          "hardWeakAgainst": [
                "freja"
          ],
          "strongDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": ""
                },
                "freja": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                },
                "genji": {
                      "hard": false,
                      "motivo": ""
                },
                "hazard": {
                      "hard": false,
                      "motivo": ""
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": ""
                },
                "orisa": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "ashe": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "bastion": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Como Illari, castiga a los voladores con su disparo a media distancia"
                },
                "freja": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                }
          }
    },
    synergies: ["mercy","zenyatta","sigma","baptiste","hazard"]
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
    subrole: 'Aéreo / Movilidad',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/60ac2d5de4a6d34644d8872233da402f1436c87f804bb11a21661bb30bf4a51f.png',
    description: 'Oficial de seguridad con traje Raptor capaz de surcar los cielos lanzando cohetes devastadores y ráfagas concusivas.',
    tier: 'C',
    counterAdvice: "Recorta las distancias con Pharah y acércate con un hitscan con el que puedas matarla. Echo y Freja también son útiles contra ella, y jugar D.Va o tanques que la ignoren suele estar muy bien.",
    perks: [
          "Propulsión lateral continua",
          "Cohetes con daño concusivo de impacto",
          "Bombardeo protegido"
    ],
    counters: {
          "strongAgainst": [
                "doomfist",
                "hazard",
                "junker-queen",
                "lucio",
                "mizuki",
                "ramattra",
                "reinhardt",
                "sigma"
          ],
          "weakAgainst": [
                "cassidy",
                "soldier76",
                "ashe",
                "widowmaker",
                "sojourn",
                "bastion",
                "emre",
                "doctrine"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "doomfist": {
                      "hard": false,
                      "motivo": ""
                },
                "hazard": {
                      "hard": false,
                      "motivo": ""
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": ""
                },
                "lucio": {
                      "hard": false,
                      "motivo": ""
                },
                "mizuki": {
                      "hard": false,
                      "motivo": ""
                },
                "ramattra": {
                      "hard": false,
                      "motivo": ""
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": ""
                },
                "sigma": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "cassidy": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "bastion": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Con sus disparos instantáneos castiga a los voladores cuando están en el aire"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Como Illari, castiga a los voladores con su disparo a media distancia"
                }
          }
    },
    synergies: ["mercy","zenyatta","winston","wrecking-ball"]
  },
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
    subrole: 'Sanación Principal',
    difficulty: 3,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/985b06beae46b7ba3ca87d1512d0fc62ca7f206ceca58ef16fc44d43a1cc84ed.png',
    description: 'Francotiradora veterana armada con rifle biótico, granada anti-curación destructora de tanques, dardo sedante y Nanoestimulante.',
    tier: 'A',
    counterAdvice: "Su hitbox es bastante fácil de acertar con los hitscans. Si quieres encarar el combate cuerpo a cuerpo, ten muy en cuenta su sleep y juega en torno al área de su granada: oblígala a decidir si curarse a ella o tirártela a ti.",
    perks: [
          "Dardo sedante con recarga veloz",
          "Granada biótica con curación extendida",
          "Rifle con mira termográfica"
    ],
    counters: {
          "strongAgainst": [
                "doomfist",
                "hazard",
                "junker-queen",
                "mauga",
                "roadhog",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "dva"
          ],
          "hardStrongAgainst": [
                "doomfist",
                "junker-queen",
                "mauga",
                "roadhog"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "doomfist": {
                      "hard": true,
                      "motivo": ""
                },
                "hazard": {
                      "hard": false,
                      "motivo": ""
                },
                "junker-queen": {
                      "hard": true,
                      "motivo": "Depende mucho de su curación y la anticuración de Ana le fastidia mucho"
                },
                "mauga": {
                      "hard": true,
                      "motivo": "Puede cortar curaciones con la granada"
                },
                "roadhog": {
                      "hard": true,
                      "motivo": "Depende mucho de su curación y la anticuración de Ana le fastidia mucho"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "dva": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["genji","reinhardt","soldier76","winston","brigitte"]
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
    subrole: 'Sanación Principal',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/d4e6f1ca45d9f88fa89260787397f141a6f007b14e5b26698883b6a17bab9680.png',
    description: 'Médico de combate con lanzagranadas biótico, botas exoesqueleto de gran salto, campo de inmortalidad y matriz de amplificación.',
    tier: 'B',
    counterAdvice: "Con Baptiste es importante que tengas en cuenta su lámpara de inmortalidad. No gastes todos tus recursos en él sabiendo que la tiene, porque luego puede volverse en tu contra.",
    perks: [
          "Botas exoesqueleto con carga instantánea",
          "Campo de inmortalidad con mayor radio",
          "Curación regenerativa potente"
    ],
    counters: {
          "strongAgainst": [],
          "weakAgainst": [],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {},
          "weakDetails": {}
    },
    synergies: ["sigma","reinhardt","bastion","soldier76","ashe","zenyatta"]
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
    subrole: 'Sanación Principal',
    difficulty: 3,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/408603fe037e8576078eaac5eab2fb251489ced4003b11f5f522776d43d0b83d.png',
    description: 'Ninja protectora con kunais de crítico letal, talismanes curativos teledirigidos, Suzu purificador y Paso Ligero a través de paredes.',
    tier: 'A',
    counterAdvice: "Kiriko tiene dos habilidades de supervivencia, el Suzu y el teletransporte. Cuando sepas que tiene el teletransporte, juega teniendo en cuenta hacia dónde puede irse. Si ves que gasta el Suzu, es el momento de atacar.",
    perks: [
          "Suzu con invulnerabilidad aumentada",
          "Paso ligero con escudo al salir",
          "Kunai con crítico triplicado"
    ],
    counters: {
          "strongAgainst": [
                "anran",
                "junker-queen",
                "kiriko",
                "mauga"
          ],
          "weakAgainst": [
                "kiriko"
          ],
          "hardStrongAgainst": [
                "junker-queen",
                "kiriko"
          ],
          "hardWeakAgainst": [
                "kiriko"
          ],
          "strongDetails": {
                "anran": {
                      "hard": false,
                      "motivo": ""
                },
                "junker-queen": {
                      "hard": true,
                      "motivo": "Kiriko limpia el sangrado y la anticuración de su ulti: se la deniega por completo"
                },
                "kiriko": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                },
                "mauga": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "kiriko": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                }
          }
    },
    synergies: ["winston","tracer","genji","doomfist","mauga","lucio"]
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
    subrole: 'Sanación Principal',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3376515cebed0904012e67e956f6d1b9c12e03da642845eeaf787b7e4c7b339d.png',
    description: 'Bioluz innovadora que salva aliados en apuros con Agarre Vital, crea plataformas de pétalo elevadoras y planta el Árbol de la Vida.',
    tier: 'C',
    counterAdvice: "Lifeweaver jugará siempre muy atrás del equipo: intenta acortar las distancias con él. Una vez fuerces su dash, será vulnerable.",
    perks: [
          "Plataforma de pétalo con curación",
          "Agarre vital con regeneración masiva",
          "Ráfaga de espinas perforante"
    ],
    counters: {
          "strongAgainst": [
                "mauga",
                "roadhog"
          ],
          "weakAgainst": [],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "mauga": {
                      "hard": false,
                      "motivo": ""
                },
                "roadhog": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {}
    },
    synergies: ["ana","baptiste","cassidy","bastion","torbjorn"]
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
    subrole: 'Sanación Principal',
    difficulty: 1,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/f48f8485056d5d00dad195859188d23e50f7126b8b08b5646f46ef1b42f5e1de.png',
    description: 'Genetista brillante que equilibra curación masiva con drenaje biótico, orbes teledirigidos y Desvanecimiento para escapar de todo peligro.',
    tier: 'C',
    counterAdvice: "Cuando pelees contra Moira, quédate quieto para acertar más balas: moviéndote muy rápido harás que falles, y ella no te fallará. Una vez gaste su habilidad de movimiento, persíguela, porque será muy vulnerable.",
    perks: [
          "Desvanecimiento con purga aliada",
          "Orbes de doble duración",
          "Drenaje con mayor alcance"
    ],
    counters: {
          "strongAgainst": [
                "genji"
          ],
          "weakAgainst": [],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "genji": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {}
    },
    synergies: ["reinhardt","lucio","reaper","ramattra","junker-queen"]
  },
  {
    id: 'doctrine',
    name: 'Doctrine',
    role: 'support',
    gender: 'Masculino',
    age: 77,
    country: 'Islandia',
    affiliation: 'Independiente',
    releaseYear: 2025,
    range: 'Medio',
    style: 'poke',
    subrole: 'Táctico & Utilidad',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/2492a15c575c12314907d0d77501ec337b4d56796bc7f03e5dfb50d415612bae.png',
    description: 'Cibernético y supervillano que comanda drones drenadores de vida, cetro eterno bioeléctrico que cura o hiere, potenciador Infuse y vuelo etéreo.',
    tier: 'S',
    counterAdvice: "El mayor punto fuerte de Doctrine es su habilidad de vuelo: cuando la gaste, es el momento de ir a por él.",
    perks: [
          "Drones vigorizantes con sobrecuración",
          "Infuse con doble carga de habilidad",
          "Cetro eterno con ráfaga penetrante"
    ],
    counters: {
          "strongAgainst": [
                "echo",
                "freja",
                "jetpack-cat",
                "pharah"
          ],
          "weakAgainst": [
                "sombra"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "echo": {
                      "hard": false,
                      "motivo": "Como Illari, castiga a los voladores con su disparo a media distancia"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Como Illari, castiga a los voladores con su disparo a media distancia"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": ""
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Como Illari, castiga a los voladores con su disparo a media distancia"
                }
          },
          "weakDetails": {
                "sombra": {
                      "hard": false,
                      "motivo": "El PEM de Sombra anula por completo su ulti"
                }
          }
    },
    synergies: ["sigma","ashe","soldier76","hazard","baptiste","genji","vendetta","junker-queen","echo","freja","pharah"]
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
    subrole: 'Táctico & Utilidad',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce42d1455e03e79f321345fea84b27a8918b5db8bd7ab9b2ca9e569606ede9e4.png',
    description: 'Última guerrera solar con rifle de precisión solar, pilón de curación automático desplegable y ultimate Sol Cautivo.',
    tier: 'C',
    counterAdvice: "Destruye siempre el pilón de Illari antes de encarar un combate, porque así será bastante más vulnerable.",
    perks: [
          "Pilón curativo con escudos",
          "Estallido solar con derribo",
          "Rifle con recarga solar instantánea"
    ],
    counters: {
          "strongAgainst": [],
          "weakAgainst": [],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {},
          "weakDetails": {}
    },
    synergies: ["sigma","baptiste","soldier76","ashe","cassidy"]
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
    subrole: 'Táctico & Utilidad',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/040bb13f5123ab93faad2f95627ba184608aef4b2469a4d3003859c7087df044.png',
    description: 'DJ revolucionario que patrocina la velocidad del equipo con música y patinaje sobre muros; el corazón del juego Brawl y Rush.',
    tier: 'B',
    counterAdvice: "Lúcio parece muy rápido, pero realmente tiene poca vida. Dispárale cuando lo veas y forzarás que utilice su amplificador.",
    perks: [
          "Amp it up con velocidad del 80%",
          "Empuje de onda sonora con aturdimiento",
          "Patinaje continuo sin fricción"
    ],
    counters: {
          "strongAgainst": [
                "dva",
                "genji",
                "junker-queen",
                "sigma",
                "sombra",
                "wrecking-ball",
                "zarya"
          ],
          "weakAgainst": [
                "hazard",
                "tracer",
                "pharah"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "dva": {
                      "hard": false,
                      "motivo": ""
                },
                "genji": {
                      "hard": false,
                      "motivo": ""
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": ""
                },
                "sigma": {
                      "hard": false,
                      "motivo": ""
                },
                "sombra": {
                      "hard": false,
                      "motivo": "Su ulti defensiva protege al equipo de la ulti de Sombra"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": ""
                },
                "zarya": {
                      "hard": false,
                      "motivo": "Mantiene a su equipo fuera del alcance del rayo de Zarya y le ayuda a guardar la distancia"
                }
          },
          "weakDetails": {
                "hazard": {
                      "hard": false,
                      "motivo": "Apenas lo puede bupear y le hace mucho daño de burst. Si además va con una Tracer, no tiene supervivencia"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Poca salud, Tracer le hace mucho daño"
                },
                "pharah": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["reinhardt","ramattra","junker-queen","reaper","mei","ana","kiriko"]
  },
  {
    id: 'sombra',
    name: 'Sombra',
    role: 'support',
    gender: 'Femenino',
    age: 32,
    country: 'México',
    affiliation: 'Talon',
    releaseYear: 2016,
    range: 'Corto',
    style: 'dive',
    subrole: 'Táctico & Utilidad',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/47727b02a16e3bd7b2447d86ae1edf11587bc320b2aecb4f2f16a7ca4ad4e8a0.png',
    description: 'Hacker de apoyo táctico con Hotfix para regenerar aliados y hackear recursos, Cyberspace para debilitar y curar en zona, Translocalizador y EMP masivo.',
    tier: 'S',
    counterAdvice: "Si detectas a Sombra, intenta seguir disparándole: así no podrá volver a meterse en invisible. Juega en un rango en el que, con su Ciberespacio, tenga que elegir entre afectarte a ti o solo a ella.",
    perks: [
          "Hotfix con mayor regeneración",
          "Cyberspace de radio extendido",
          "EMP con daño a barreras aumentado"
    ],
    counters: {
          "strongAgainst": [
                "doctrine",
                "roadhog",
                "sombra",
                "symmetra"
          ],
          "weakAgainst": [
                "lucio",
                "sombra"
          ],
          "hardStrongAgainst": [
                "roadhog",
                "sombra"
          ],
          "hardWeakAgainst": [
                "sombra"
          ],
          "strongDetails": {
                "doctrine": {
                      "hard": false,
                      "motivo": "El PEM de Sombra anula por completo su ulti"
                },
                "roadhog": {
                      "hard": true,
                      "motivo": "Con Ciberespacio le deniega tanto la curación como el daño después de que enganche a alguien"
                },
                "sombra": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "El PEM de Sombra anula por completo su ulti"
                }
          },
          "weakDetails": {
                "lucio": {
                      "hard": false,
                      "motivo": "Su ulti defensiva protege al equipo de la ulti de Sombra"
                },
                "sombra": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                }
          }
    },
    synergies: ["tracer","winston","doomfist","kiriko","genji","hazard"]
  },
  {
    id: 'wuyang',
    name: 'Wuyang',
    role: 'support',
    gender: 'Masculino',
    age: 30,
    country: 'China',
    affiliation: 'Monasterio de las Mareas',
    releaseYear: 2025,
    range: 'Medio',
    style: 'poke',
    subrole: 'Táctico & Utilidad',
    difficulty: 2,
    icon: 'https://tonikiraw.com/assets/img/heroes/wuyang.webp',
    description: 'Maestro de la hidroquinesis con Torrente impetuoso, Ola guardiana retornable con empuje, Flujo restaurativo en área y Orbes acuáticos de impacto múltiple.',
    tier: 'B',
    counterAdvice: "A corta distancia, Wuyang no podrá hacerte nada.",
    perks: [
          "Flujo y reflujo: Ola guardiana retorna a origen",
          "Lluvia arreciante con 3 orbes simultáneos",
          "Desborde con 50% extra de recursos de sanación"
    ],
    counters: {
          "strongAgainst": [
                "widowmaker"
          ],
          "weakAgainst": [],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "widowmaker": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {}
    },
    synergies: ["jetpack-cat","sigma","ramattra","soldier76","cassidy"]
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
    subrole: 'Táctico & Utilidad',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/7d1546b1541a8afc39353f9337a408d6275a141b0432b7e560ef61579996b0fc.png',
    description: 'Monje ómnico que debilita enemigos con el Orbe de la Discordia aumentando el daño recibido, cura con armonía y trasciende el plano.',
    tier: 'C',
    counterAdvice: "Flanquear a Zenyatta siempre es la mejor opción. Estate muy pendiente: si te pone el Discord, quédate detrás de una pared durante 3 segundos y luego podrás salir cómodamente y pelear contra él.",
    perks: [
          "Discordia con efecto acumulativo",
          "Patada de empuje gravitatorio",
          "Orbe de armonía amplificado"
    ],
    counters: {
          "strongAgainst": [
                "doomfist",
                "hazard",
                "orisa",
                "ramattra",
                "roadhog",
                "winston",
                "wrecking-ball"
          ],
          "weakAgainst": [],
          "hardStrongAgainst": [
                "roadhog"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "doomfist": {
                      "hard": false,
                      "motivo": ""
                },
                "hazard": {
                      "hard": false,
                      "motivo": ""
                },
                "orisa": {
                      "hard": false,
                      "motivo": ""
                },
                "ramattra": {
                      "hard": false,
                      "motivo": ""
                },
                "roadhog": {
                      "hard": true,
                      "motivo": ""
                },
                "winston": {
                      "hard": false,
                      "motivo": ""
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {}
    },
    synergies: ["sigma","baptiste","brigitte","ashe","soldier76","widowmaker","doctrine"]
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
    subrole: 'Anti-Dive / Escolta',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/795fba91376d87d441a7f359ae12a3175dfa95825ccc4414cc6b95b129fc4cb0.png',
    description: 'Guerrera escudera que cura con Inspiración al golpear, protege con escudo y rechaza flankers con lanzamiento de mayal.',
    tier: 'C',
    counterAdvice: "Contra Brigitte tienes que jugar en torno a la distancia de su golpe principal de mangual y tener en cuenta su shift. Si juegas un tanque de dive, ten en cuenta que se puede ir con su dash y te puede alejar con su golpe de mangual. Así que lo mejor contra Brigitte es el poke.",
    perks: [
          "Escudo con 500 de vida",
          "Lanzamiento de mayal con aturdimiento",
          "Paquetes de reparación dobles"
    ],
    counters: {
          "strongAgainst": [
                "dva",
                "wrecking-ball"
          ],
          "weakAgainst": [],
          "hardStrongAgainst": [
                "dva"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "dva": {
                      "hard": true,
                      "motivo": "Sus golpes cuerpo a cuerpo no los para la Matriz"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": ""
                }
          },
          "weakDetails": {}
    },
    synergies: ["ana","zenyatta","reinhardt","junker-queen","cassidy"]
  },
  {
    id: 'mizuki',
    name: 'Mizuki',
    role: 'support',
    gender: 'Masculino',
    age: 35,
    country: 'Japón',
    affiliation: 'Kanezaka',
    releaseYear: 2025,
    range: 'Corto',
    style: 'brawl',
    subrole: 'Anti-Dive / Escolta',
    difficulty: 2,
    icon: 'https://tonikiraw.com/assets/img/heroes/mizuki.webp',
    description: 'Custodio espiritual de Kanezaka con Aura reparadora perimetral, Cadena vinculante que frena el dive y amplifica el daño recibido, Sanación Kasa con rebote amplificado y Paso rápido Katashiro.',
    tier: 'C',
    counterAdvice: "Contra Mizuki, cuando gaste su dash, pelea contra él, pero intenta buscar al mismo tiempo dónde está su retorno.",
    perks: [
          "Alma expuesta: 30% más de daño tras Cadena vinculante",
          "Regreso resonante con rebote adicional de Kasa",
          "Paso rápido con aumento de velocidad en Aura"
    ],
    counters: {
          "strongAgainst": [
                "doomfist",
                "dva",
                "hazard",
                "roadhog",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "pharah"
          ],
          "hardStrongAgainst": [
                "doomfist",
                "dva",
                "hazard",
                "wrecking-ball"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "doomfist": {
                      "hard": true,
                      "motivo": ""
                },
                "dva": {
                      "hard": true,
                      "motivo": "Su cadena atrapa a D.Va y la Matriz no la para"
                },
                "hazard": {
                      "hard": true,
                      "motivo": ""
                },
                "roadhog": {
                      "hard": false,
                      "motivo": ""
                },
                "wrecking-ball": {
                      "hard": true,
                      "motivo": ""
                }
          },
          "weakDetails": {
                "pharah": {
                      "hard": false,
                      "motivo": ""
                }
          }
    },
    synergies: ["reinhardt","junker-queen","brigitte","cassidy","reaper"]
  },
  {
    id: 'jetpack-cat',
    name: 'Jetpack Cat',
    role: 'support',
    gender: 'Animal',
    age: 4,
    country: 'Suecia',
    affiliation: 'Ironclad Guild',
    releaseYear: 2025,
    range: 'Corto',
    style: 'dive',
    subrole: 'Móvil & Aéreo',
    difficulty: 2,
    icon: 'https://tonikiraw.com/assets/img/heroes/jetpack-cat.webp',
    description: 'Gatita equipada con jetpack de la familia Lindholm armada con Patiproyectiles bióticos teledirigidos, Transporte aéreo de aliados protegidos con escudo, Ronroneo curativo y Garras ralentizantes.',
    tier: 'B',
    counterAdvice: "Dispara a Jetpack Cat siempre que la veas: eso la obligará a moverse o a gastar su habilidad de autocurarse.",
    perks: [
          "Transporte protegido con 50 de escudo adicional",
          "Ronroneo perfecto de triple pulso restaurador",
          "Garras fuera con 40 de daño y ralentización"
    ],
    counters: {
          "strongAgainst": [
                "doomfist",
                "jetpack-cat"
          ],
          "weakAgainst": [
                "doctrine",
                "jetpack-cat"
          ],
          "hardStrongAgainst": [
                "jetpack-cat"
          ],
          "hardWeakAgainst": [
                "jetpack-cat"
          ],
          "strongDetails": {
                "doomfist": {
                      "hard": false,
                      "motivo": "Es muy molesta para Doomfist, que nunca llega a poder hacerle nada"
                },
                "jetpack-cat": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                }
          },
          "weakDetails": {
                "doctrine": {
                      "hard": false,
                      "motivo": ""
                },
                "jetpack-cat": {
                      "hard": true,
                      "motivo": "Su mejor counter es otro igual que él: el espejo"
                }
          }
    },
    synergies: ["sombra","wuyang","winston","tracer","genji","hazard"]
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
    subrole: 'Móvil & Aéreo',
    difficulty: 2,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/c0167d251e57b0aa2b1e16c37d87f0e7c77263db9dd0503d77b5f2589bf3e4a0.png',
    description: 'Exploradora espacial marciana con bláster médico de ráfagas, hiperanillo de aceleración masiva y torpedos teledirigidos.',
    tier: 'B',
    counterAdvice: "Escóndete de los micromisiles de Juno: después de eso suele ser muy vulnerable al dive.",
    perks: [
          "Hiperanillo con bono de daño",
          "Torpedos teledirigidos dobles",
          "Vuelo gravitacional extendido"
    ],
    counters: {
          "strongAgainst": [
                "doomfist"
          ],
          "weakAgainst": [
                "tracer"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "doomfist": {
                      "hard": false,
                      "motivo": "Con tanta movilidad esquiva su puñetazo, y con la velocidad se le escapa fácilmente"
                }
          },
          "weakDetails": {
                "tracer": {
                      "hard": false,
                      "motivo": "Juno tiene poca vida y Tracer la trackea fácil"
                }
          }
    },
    synergies: ["winston","tracer","genji","dva","reinhardt","ana"]
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
    subrole: 'Móvil & Aéreo',
    difficulty: 1,
    icon: 'https://d15f34w2p8l1cc.cloudfront.net/overwatch/3bfb8bd8ec827e53d870f1238ab73d8aa1f5dbfbcfaaf7f96ffcd35b5c6102ab.png',
    description: 'Médico ángel de la guardia que potencia el daño aliado, cura con rayo continuo, planea con agilidad y resucita compañeros caídos.',
    tier: 'C',
    counterAdvice: "Mercy sufre muchísimo contra el dive. Busca perseguirla, pero ten en cuenta también hacia dónde se puede ir volando.",
    perks: [
          "Resurrección con escudo protector",
          "Potenciador de daño al 35%",
          "Super salto libre"
    ],
    counters: {
          "strongAgainst": [],
          "weakAgainst": [],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {},
          "weakDetails": {}
    },
    synergies: ["pharah","echo","ashe","sojourn","soldier76","widowmaker","freja","cassidy"]
  }
];

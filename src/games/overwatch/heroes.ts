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
          "Superconejito",
          "Impulsores mejorados",
          "Sistema de escudo",
          "Fusión de precisión"
    ],
    counters: {
          "strongAgainst": [
                "ana",
                "baptiste",
                "bastion",
                "doctrine",
                "illari",
                "lifeweaver",
                "mauga",
                "mercy",
                "moira",
                "roadhog",
                "sojourn",
                "widowmaker",
                "winston",
                "wuyang",
                "zenyatta"
          ],
          "weakAgainst": [
                "anran",
                "brigitte",
                "cassidy",
                "dmon",
                "domina",
                "lucio",
                "mei",
                "mizuki",
                "orisa",
                "symmetra",
                "torbjorn",
                "vendetta",
                "zarya"
          ],
          "hardStrongAgainst": [
                "moira",
                "sojourn",
                "widowmaker"
          ],
          "hardWeakAgainst": [
                "brigitte",
                "mizuki",
                "vendetta"
          ],
          "strongDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y D.Va llega a por él enseguida"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y D.Va llega a por él enseguida"
                },
                "bastion": {
                      "hard": false,
                      "motivo": "Matriz de defensa anula varios segundos clave de su Modo asalto mientras su equipo lo enfoca"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Matriz de defensa absorbe proyectiles y D.Va presiona a Doctrine con Micromisiles"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y D.Va llega a por él enseguida"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y D.Va llega a por él enseguida"
                },
                "mauga": {
                      "hard": false,
                      "motivo": "Matriz de defensa bloquea ambas ametralladoras durante Sobreestimulación cardíaca y niega su curación"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y D.Va llega a por él enseguida"
                },
                "moira": {
                      "hard": true,
                      "motivo": "Matriz de defensa devora todos los Orbes bióticos de sanación y daño de Moira"
                },
                "roadhog": {
                      "hard": false,
                      "motivo": "Matriz de defensa salva a cualquier compañero enganchado por el Garfio de Roadhog"
                },
                "sojourn": {
                      "hard": true,
                      "motivo": "Matriz de defensa absorbe tanto el Disparo inmovilizador como los tiros cargados de Cañón de riel"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Vuela hacia su posición bloqueando todos sus tiros con Matriz de defensa"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Sus Cañones de fusión y Micromisiles destrozan la burbuja y la gran hitbox de Winston de cerca"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y D.Va llega a por él enseguida"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y D.Va llega a por él enseguida"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Llama danzante esquiva sus Micromisiles y la quemadura continua desgasta la armadura de D.Va"
                },
                "brigitte": {
                      "hard": true,
                      "motivo": "La defensa de D.Va no para el rayo ni los golpes de Brigitte"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Cassidy tiene con qué frenar a D.Va cuando se le tira encima"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "D.Mon tiene enfrentamiento favorable contra D.Va"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Domina tiene enfrentamiento favorable contra D.Va"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Lúcio tiene enfrentamiento favorable contra D.Va"
                },
                "mei": {
                      "hard": false,
                      "motivo": "La defensa de D.Va no para el rayo ni los golpes de Mei"
                },
                "mizuki": {
                      "hard": true,
                      "motivo": "Su cadena atrapa a D.Va y la Matriz no la para"
                },
                "orisa": {
                      "hard": false,
                      "motivo": "Orisa tiene enfrentamiento favorable contra D.Va"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "La defensa de D.Va no para el rayo ni los golpes de Symmetra"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a D.Va cuando se le tira encima"
                },
                "vendetta": {
                      "hard": true,
                      "motivo": "La defensa de D.Va no para el rayo ni los golpes de Vendetta"
                },
                "zarya": {
                      "hard": false,
                      "motivo": "La defensa de D.Va no para el rayo ni los golpes de Zarya"
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
          "Doblete",
          "Supervivencia del más apto",
          "Réplica",
          "Matriz de poder"
    ],
    counters: {
          "strongAgainst": [
                "anran",
                "baptiste",
                "dmon",
                "domina",
                "hazard",
                "illari",
                "lifeweaver",
                "mercy",
                "ramattra",
                "reinhardt",
                "sigma",
                "widowmaker",
                "wuyang",
                "zarya",
                "zenyatta"
          ],
          "weakAgainst": [
                "ana",
                "brigitte",
                "cassidy",
                "echo",
                "jetpack-cat",
                "junker-queen",
                "juno",
                "mizuki",
                "orisa",
                "pharah",
                "roadhog",
                "sombra",
                "torbjorn"
          ],
          "hardStrongAgainst": [
                "widowmaker",
                "zenyatta"
          ],
          "hardWeakAgainst": [
                "ana",
                "mizuki",
                "orisa",
                "roadhog",
                "sombra"
          ],
          "strongDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Puño cohete aturde a Anran contra muros e interrumpe su presión en espacios cerrados"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Doomfist llega a por él enseguida"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Doomfist tiene enfrentamiento favorable contra D.Mon"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Doomfist entra, desordena y sale, y Domina es demasiado lento para perseguirle"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Doomfist tiene enfrentamiento favorable contra Hazard"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Doomfist llega a por él enseguida"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Doomfist llega a por él enseguida"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Doomfist llega a por él enseguida"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Doomfist entra, desordena y sale, y Ramattra es demasiado lento para perseguirle"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Doomfist entra, desordena y sale, y Reinhardt es demasiado lento para perseguirle"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Doomfist entra, desordena y sale, y Sigma es demasiado lento para perseguirle"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Cruza el mapa de un salto y castiga la inmovilidad de Widowmaker al apuntar"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Doomfist llega a por él enseguida"
                },
                "zarya": {
                      "hard": false,
                      "motivo": "Doomfist entra, desordena y sale, y Zarya es demasiado lento para perseguirle"
                },
                "zenyatta": {
                      "hard": true,
                      "motivo": "Zenyatta tiene poca vida y Doomfist llega a por él enseguida"
                }
          },
          "weakDetails": {
                "ana": {
                      "hard": true,
                      "motivo": "Doomfist no tiene escudo que le cubra del control de Ana"
                },
                "brigitte": {
                      "hard": false,
                      "motivo": "Carga con escudo choca y derriba el Puño cohete de Doomfist protegiendo a su apoyo"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Cassidy tiene con qué frenar a Doomfist cuando se le tira encima"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Echo tiene enfrentamiento favorable contra Doomfist"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Es muy molesta para Doomfist, que nunca llega a poder hacerle nada"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Puede clavarle el cuchillo mientras bloquea y luego tirar de él hacia atrás"
                },
                "juno": {
                      "hard": false,
                      "motivo": "Con tanta movilidad esquiva su puñetazo, y con la velocidad se le escapa fácilmente"
                },
                "mizuki": {
                      "hard": true,
                      "motivo": "Doomfist no tiene escudo que le cubra del control de Mizuki"
                },
                "orisa": {
                      "hard": true,
                      "motivo": "Su stun perjudica a Doomfist durante su bloqueo, que es su habilidad central"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Doomfist"
                },
                "roadhog": {
                      "hard": true,
                      "motivo": "El Garfio atrapa a Doomfist durante Bloqueo de poder y lo arrastra fuera de posición"
                },
                "sombra": {
                      "hard": true,
                      "motivo": "Sus efectos disruptivos y PEM cortan el ciclo de habilidades del que depende Doomfist"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a Doomfist cuando se le tira encima"
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
          "Reconstitución",
          "Celo anárquico",
          "Salto profundo",
          "Empalamientos explosivos"
    ],
    counters: {
          "strongAgainst": [
                "baptiste",
                "illari",
                "lifeweaver",
                "lucio",
                "mercy",
                "wuyang",
                "zenyatta"
          ],
          "weakAgainst": [
                "ana",
                "brigitte",
                "cassidy",
                "doomfist",
                "echo",
                "freja",
                "mei",
                "mizuki",
                "orisa",
                "pharah",
                "roadhog",
                "sigma",
                "sojourn",
                "symmetra",
                "torbjorn",
                "vendetta",
                "zarya"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "mizuki",
                "orisa",
                "torbjorn"
          ],
          "strongDetails": {
                "baptiste": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Hazard llega a por él enseguida"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Hazard llega a por él enseguida"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Hazard llega a por él enseguida"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Apenas lo puede bupear y le hace mucho daño de burst. Si además va con una Tracer, no tiene supervivencia"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Hazard llega a por él enseguida"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Hazard llega a por él enseguida"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Hazard llega a por él enseguida"
                }
          },
          "weakDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Hazard no tiene escudo que le cubra del control de Ana"
                },
                "brigitte": {
                      "hard": false,
                      "motivo": "La defensa de Hazard no para el rayo ni los golpes de Brigitte"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Cassidy tiene con qué frenar a Hazard cuando se le tira encima"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Doomfist tiene enfrentamiento favorable contra Hazard"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Echo tiene enfrentamiento favorable contra Hazard"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Freja tiene enfrentamiento favorable contra Hazard"
                },
                "mei": {
                      "hard": false,
                      "motivo": "La defensa de Hazard no para el rayo ni los golpes de Mei"
                },
                "mizuki": {
                      "hard": true,
                      "motivo": "Hazard no tiene escudo que le cubra del control de Mizuki"
                },
                "orisa": {
                      "hard": true,
                      "motivo": "Su stun detiene a Hazard, que bloquea con su propio cuerpo"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Hazard"
                },
                "roadhog": {
                      "hard": false,
                      "motivo": "Roadhog tiene enfrentamiento favorable contra Hazard"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Sigma tiene enfrentamiento favorable contra Hazard"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn tiene enfrentamiento favorable contra Hazard"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "La defensa de Hazard no para el rayo ni los golpes de Symmetra"
                },
                "torbjorn": {
                      "hard": true,
                      "motivo": "Torbjörn tiene con qué frenar a Hazard cuando se le tira encima"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "La defensa de Hazard no para el rayo ni los golpes de Vendetta"
                },
                "zarya": {
                      "hard": false,
                      "motivo": "La defensa de Hazard no para el rayo ni los golpes de Zarya"
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
          "Carga eléctrica",
          "Aterrizaje pesado",
          "Cadena de relámpagos",
          "Barrera revitalizadora"
    ],
    counters: {
          "strongAgainst": [
                "ana",
                "baptiste",
                "illari",
                "kiriko",
                "lifeweaver",
                "mercy",
                "sigma",
                "sojourn",
                "widowmaker",
                "wuyang",
                "zarya",
                "zenyatta"
          ],
          "weakAgainst": [
                "bastion",
                "cassidy",
                "dmon",
                "doctrine",
                "dva",
                "hanzo",
                "junker-queen",
                "mauga",
                "reaper",
                "roadhog",
                "shion",
                "sierra",
                "torbjorn",
                "vendetta"
          ],
          "hardStrongAgainst": [
                "sojourn",
                "widowmaker",
                "zenyatta"
          ],
          "hardWeakAgainst": [
                "roadhog"
          ],
          "strongDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Winston llega a por él enseguida"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Winston llega a por él enseguida"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Winston llega a por él enseguida"
                },
                "kiriko": {
                      "hard": false,
                      "motivo": "Cañón tesla atraviesa esquivas cortas y fuerza el Paso ligero de Kiriko constantemente"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Winston llega a por él enseguida"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Winston llega a por él enseguida"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Winston tiene enfrentamiento favorable contra Sigma"
                },
                "sojourn": {
                      "hard": true,
                      "motivo": "Salta sobre Sojourn con Campo de fuerza negándole objetivos para cargar energía de riel"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Salta directamente a su altura con Campo de fuerza y la obliga a huir o morir"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Winston llega a por él enseguida"
                },
                "zarya": {
                      "hard": false,
                      "motivo": "Winston tiene enfrentamiento favorable contra Zarya"
                },
                "zenyatta": {
                      "hard": true,
                      "motivo": "Zenyatta tiene poca vida y Winston llega a por él enseguida"
                }
          },
          "weakDetails": {
                "bastion": {
                      "hard": false,
                      "motivo": "Bastion rompe enseguida el escudo de Winston y le deja al descubierto"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Cassidy tiene con qué frenar a Winston cuando se le tira encima"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "D.Mon tiene enfrentamiento favorable contra Winston"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "El alto sustento propio con Imbuir y Drones vigorizantes resiste el daño continuo del Cañón tesla"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Sus Cañones de fusión y Micromisiles destrozan la burbuja y la gran hitbox de Winston de cerca"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Hanzo rompe enseguida el escudo de Winston y le deja al descubierto"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Escopeta y heridas de sangrado ganan el duelo cerrado dentro de la burbuja de Winston"
                },
                "mauga": {
                      "hard": false,
                      "motivo": "Mauga rompe enseguida el escudo de Winston y le deja al descubierto"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Reaper tiene enfrentamiento favorable contra Winston"
                },
                "roadhog": {
                      "hard": true,
                      "motivo": "Destruye el Campo de fuerza a quemarropa y revienta la gran hitbox de Winston con Chatarrera"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Shion tiene enfrentamiento favorable contra Winston"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Sierra rompe enseguida el escudo de Winston y le deja al descubierto"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a Winston cuando se le tira encima"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta tiene enfrentamiento favorable contra Winston"
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
          "Apisonadora",
          "Multibola",
          "Tiempo aéreo",
          "Barrera adaptativa"
    ],
    counters: {
          "strongAgainst": [
                "baptiste",
                "illari",
                "lifeweaver",
                "mercy",
                "ramattra",
                "reinhardt",
                "sojourn",
                "widowmaker",
                "wuyang",
                "zenyatta"
          ],
          "weakAgainst": [
                "ana",
                "brigitte",
                "cassidy",
                "lucio",
                "mauga",
                "mizuki",
                "orisa",
                "roadhog",
                "shion",
                "sierra",
                "sombra",
                "torbjorn",
                "tracer"
          ],
          "hardStrongAgainst": [
                "widowmaker",
                "zenyatta"
          ],
          "hardWeakAgainst": [
                "ana",
                "brigitte",
                "cassidy",
                "mizuki",
                "orisa",
                "roadhog",
                "sombra"
          ],
          "strongDetails": {
                "baptiste": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Wrecking Ball llega a por él enseguida"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Wrecking Ball llega a por él enseguida"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Wrecking Ball llega a por él enseguida"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Wrecking Ball llega a por él enseguida"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Wrecking Ball tiene enfrentamiento favorable contra Ramattra"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Wrecking Ball tiene enfrentamiento favorable contra Reinhardt"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sin cabeza crítica en modo bola, persigue a Sojourn incluso después de usar Maniobra evasiva"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Sin cabeza crítica en modo bola, llega a toda velocidad y elimina a Widowmaker"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Wrecking Ball llega a por él enseguida"
                },
                "zenyatta": {
                      "hard": true,
                      "motivo": "Zenyatta tiene poca vida y Wrecking Ball llega a por él enseguida"
                }
          },
          "weakDetails": {
                "ana": {
                      "hard": true,
                      "motivo": "Wrecking Ball no tiene escudo que le cubra del control de Ana"
                },
                "brigitte": {
                      "hard": true,
                      "motivo": "Brigitte tiene enfrentamiento favorable contra Wrecking Ball"
                },
                "cassidy": {
                      "hard": true,
                      "motivo": "Cassidy tiene con qué frenar a Wrecking Ball cuando se le tira encima"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Lúcio tiene enfrentamiento favorable contra Wrecking Ball"
                },
                "mauga": {
                      "hard": false,
                      "motivo": "Mauga tiene enfrentamiento favorable contra Wrecking Ball"
                },
                "mizuki": {
                      "hard": true,
                      "motivo": "Wrecking Ball no tiene escudo que le cubra del control de Mizuki"
                },
                "orisa": {
                      "hard": true,
                      "motivo": "Orisa es counter duro directo de Wrecking Ball"
                },
                "roadhog": {
                      "hard": true,
                      "motivo": "Roadhog tiene enfrentamiento favorable contra Wrecking Ball"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Shion tiene enfrentamiento favorable contra Wrecking Ball"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Sierra tiene enfrentamiento favorable contra Wrecking Ball"
                },
                "sombra": {
                      "hard": true,
                      "motivo": "Desactiva Bola arrolladora y destruye Campo de minas al instante con PEM"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a Wrecking Ball cuando se le tira encima"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Tracer tiene enfrentamiento favorable contra Wrecking Ball"
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
          "Diseño eficiente",
          "Poder ampliado",
          "Detonación disruptiva",
          "Retiro corporativo"
    ],
    counters: {
          "strongAgainst": [
                "ashe",
                "baptiste",
                "cassidy",
                "dva",
                "emre",
                "illari",
                "soldier76",
                "widowmaker"
          ],
          "weakAgainst": [
                "bastion",
                "doomfist",
                "hanzo",
                "junkrat",
                "mauga",
                "ramattra",
                "reinhardt",
                "sierra",
                "sojourn",
                "torbjorn",
                "vendetta"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "ramattra",
                "sojourn"
          ],
          "strongDetails": {
                "ashe": {
                      "hard": false,
                      "motivo": "Matriz de barrera bloquea las líneas largas de Ashe y niega sus ángulos de tiro"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Matriz de barrera neutraliza las ventanas de daño frontal de Baptiste"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Matriz de barrera bloquea las líneas de tiro de Cassidy y Cañón de fotones lo desplaza"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Domina tiene enfrentamiento favorable contra D.Va"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Bloquea las ráfagas y granadas de Emre con Matriz de barrera a media distancia"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Su escudo niega la carga del Rifle solar de Illari a distancia"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Absorbe la presión frontal del Rifle de pulsos con Matriz de barrera y controla el espacio"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Cierra líneas de francotirador con Matriz de barrera protegiendo el avance aliado"
                }
          },
          "weakDetails": {
                "bastion": {
                      "hard": false,
                      "motivo": "Bastion rompe enseguida el escudo de Domina y le deja al descubierto"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Doomfist entra, desordena y sale, y Domina es demasiado lento para perseguirle"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Hanzo rompe enseguida el escudo de Domina y le deja al descubierto"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Destruye rápidamente la Matriz de barrera de Domina con spam explosivo en cuellos de botella"
                },
                "mauga": {
                      "hard": false,
                      "motivo": "Mauga rompe enseguida el escudo de Domina y le deja al descubierto"
                },
                "ramattra": {
                      "hard": true,
                      "motivo": "Ramattra tiene enfrentamiento favorable contra Domina"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Reinhardt tiene enfrentamiento favorable contra Domina"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Sierra rompe enseguida el escudo de Domina y le deja al descubierto"
                },
                "sojourn": {
                      "hard": true,
                      "motivo": "Sojourn rompe enseguida el escudo de Domina y le deja al descubierto"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Torbjörn rompe enseguida el escudo de Domina y le deja al descubierto"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta le da espadazos sin parar a Domina, que es demasiado lento para quitársela de encima"
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
          "Forma implacable",
          "Barrera prolongada",
          "Ráfaga de vacío",
          "Nanorreparación"
    ],
    counters: {
          "strongAgainst": [
                "brigitte",
                "dmon",
                "domina",
                "mei",
                "mizuki",
                "reinhardt",
                "sigma"
          ],
          "weakAgainst": [
                "bastion",
                "doctrine",
                "doomfist",
                "echo",
                "hanzo",
                "junkrat",
                "juno",
                "mauga",
                "orisa",
                "pharah",
                "sierra",
                "sojourn",
                "torbjorn",
                "vendetta",
                "wrecking-ball",
                "zenyatta"
          ],
          "hardStrongAgainst": [
                "brigitte",
                "domina",
                "reinhardt",
                "sigma"
          ],
          "hardWeakAgainst": [
                "orisa",
                "vendetta"
          ],
          "strongDetails": {
                "brigitte": {
                      "hard": true,
                      "motivo": "Los puños de Forma de némesis atraviesan el Escudo barrera de Brigitte y la eliminan rápido"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Ramattra tiene enfrentamiento favorable contra D.Mon"
                },
                "domina": {
                      "hard": true,
                      "motivo": "Ramattra tiene enfrentamiento favorable contra Domina"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Suficiente aguante en Forma de némesis y presión constante contra posiciones cerradas de Mei"
                },
                "mizuki": {
                      "hard": false,
                      "motivo": "Aporrear castiga la baja movilidad de Mizuki y atraviesa defensas frontales"
                },
                "reinhardt": {
                      "hard": true,
                      "motivo": "Ramattra tiene enfrentamiento favorable contra Reinhardt"
                },
                "sigma": {
                      "hard": true,
                      "motivo": "Ramattra tiene enfrentamiento favorable contra Sigma"
                }
          },
          "weakDetails": {
                "bastion": {
                      "hard": false,
                      "motivo": "Bastion rompe enseguida el escudo de Ramattra y le deja al descubierto"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Drones vigorizantes y el robo de vida con Imbuir sostienen al equipo frente al desgaste de Ramattra"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Doomfist entra, desordena y sale, y Ramattra es demasiado lento para perseguirle"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Echo tiene enfrentamiento favorable contra Ramattra"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Hanzo rompe enseguida el escudo de Ramattra y le deja al descubierto"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "El Cepo frena en seco el avance en Forma de némesis de Ramattra y las minas lo desplazan"
                },
                "juno": {
                      "hard": false,
                      "motivo": "La velocidad de Hiperanillo saca a los aliados del rango de Forma de némesis y Aniquilación"
                },
                "mauga": {
                      "hard": false,
                      "motivo": "Mauga rompe enseguida el escudo de Ramattra y le deja al descubierto"
                },
                "orisa": {
                      "hard": true,
                      "motivo": "Aguanta su forma Némesis y con la lanza le aturde y le corta las habilidades"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Ramattra"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Sierra rompe enseguida el escudo de Ramattra y le deja al descubierto"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn rompe enseguida el escudo de Ramattra y le deja al descubierto"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Torbjörn rompe enseguida el escudo de Ramattra y le deja al descubierto"
                },
                "vendetta": {
                      "hard": true,
                      "motivo": "Vendetta le da espadazos sin parar a Ramattra, que es demasiado lento para quitársela de encima"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": "Wrecking Ball tiene enfrentamiento favorable contra Ramattra"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Zenyatta tiene enfrentamiento favorable contra Ramattra"
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
          "Fuego del cruzado",
          "Determinación cruzada",
          "Embate con escudo",
          "Furia ardiente"
    ],
    counters: {
          "strongAgainst": [
                "cassidy",
                "domina",
                "hanzo",
                "sigma",
                "soldier76",
                "zarya"
          ],
          "weakAgainst": [
                "baptiste",
                "bastion",
                "dmon",
                "doomfist",
                "echo",
                "jetpack-cat",
                "junker-queen",
                "junkrat",
                "juno",
                "lifeweaver",
                "mauga",
                "mei",
                "mercy",
                "orisa",
                "pharah",
                "ramattra",
                "sierra",
                "sojourn",
                "torbjorn",
                "vendetta",
                "wrecking-ball",
                "wuyang",
                "zenyatta"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "bastion",
                "junkrat",
                "mei",
                "ramattra"
          ],
          "strongDetails": {
                "cassidy": {
                      "hard": false,
                      "motivo": "Su escudo bloquea los disparos y Sin perdón mientras domina espacios cerrados"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Reinhardt tiene enfrentamiento favorable contra Domina"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Protege a su equipo de flechas letales con 1500+ de escudo en cuellos de botella"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Reinhardt tiene enfrentamiento favorable contra Sigma"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Campo protector anula todo el daño frontal y el Visor táctico de Soldado: 76"
                },
                "zarya": {
                      "hard": false,
                      "motivo": "Reinhardt tiene enfrentamiento favorable contra Zarya"
                }
          },
          "weakDetails": {
                "baptiste": {
                      "hard": false,
                      "motivo": "Exobotas evitan a Reinhardt subiendo a altura y Matriz amplificadora destroza su escudo"
                },
                "bastion": {
                      "hard": true,
                      "motivo": "Bastion rompe enseguida el escudo de Reinhardt y le deja al descubierto"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "D.Mon tiene enfrentamiento favorable contra Reinhardt"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Doomfist entra, desordena y sale, y Reinhardt es demasiado lento para perseguirle"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Echo tiene enfrentamiento favorable contra Reinhardt"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Vuelo permanente y Línea de vida rescatan aliados fuera del alcance del martillo de Reinhardt"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Grito de mando entra y sale del rango del martillo mientras Matanza golpea a través del escudo"
                },
                "junkrat": {
                      "hard": true,
                      "motivo": "Rompe el Campo protector de Reinhardt a gran velocidad y su Mina lo vuela por losaires"
                },
                "juno": {
                      "hard": false,
                      "motivo": "Hiperanillo permite a todo su equipo kitear a Reinhardt y evitar sus embestidas"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Agarre vital salva instantáneamente a cualquier aliado clavado por Embestida o Seísmo"
                },
                "mauga": {
                      "hard": false,
                      "motivo": "Mauga rompe enseguida el escudo de Reinhardt y le deja al descubierto"
                },
                "mei": {
                      "hard": true,
                      "motivo": "Mei es counter duro directo de Reinhardt"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Permanece en el aire y en alturas donde el martillo de Reinhardt no puede tocarla"
                },
                "orisa": {
                      "hard": false,
                      "motivo": "Orisa tiene enfrentamiento favorable contra Reinhardt"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Reinhardt"
                },
                "ramattra": {
                      "hard": true,
                      "motivo": "Ramattra tiene enfrentamiento favorable contra Reinhardt"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Sierra rompe enseguida el escudo de Reinhardt y le deja al descubierto"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn rompe enseguida el escudo de Reinhardt y le deja al descubierto"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Torbjörn rompe enseguida el escudo de Reinhardt y le deja al descubierto"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta le da espadazos sin parar a Reinhardt, que es demasiado lento para quitársela de encima"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": "Wrecking Ball tiene enfrentamiento favorable contra Reinhardt"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Ola guardiana empuja hacia atrás a Reinhardt y frena su avance de rush"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Presiona su escudo desde lejos y aplica Discordia apenas baja el Campo protector"
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
          "Ciclo cinético",
          "Hiperregeneración",
          "Hiperasalto",
          "Levitación"
    ],
    counters: {
          "strongAgainst": [
                "ashe",
                "bastion",
                "cassidy",
                "hazard",
                "mauga",
                "soldier76",
                "torbjorn",
                "widowmaker"
          ],
          "weakAgainst": [
                "dmon",
                "doomfist",
                "echo",
                "hanzo",
                "junker-queen",
                "junkrat",
                "lucio",
                "mei",
                "pharah",
                "ramattra",
                "reinhardt",
                "sierra",
                "sojourn",
                "sombra",
                "vendetta",
                "winston"
          ],
          "hardStrongAgainst": [
                "bastion",
                "cassidy"
          ],
          "hardWeakAgainst": [
                "ramattra",
                "sombra"
          ],
          "strongDetails": {
                "ashe": {
                      "hard": false,
                      "motivo": "Reposiciona la Barrera experimental constantemente en la cara de Ashe para anular sus ángulos"
                },
                "bastion": {
                      "hard": true,
                      "motivo": "Agarre cinético absorbe todo el Modo asalto convirtiéndolo en sobreescudo masivo"
                },
                "cassidy": {
                      "hard": true,
                      "motivo": "Barrera experimental y Agarre cinético anulan los disparos y Sin perdón de Cassidy"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Sigma tiene enfrentamiento favorable contra Hazard"
                },
                "mauga": {
                      "hard": false,
                      "motivo": "Agarre cinético y escudo niegan las ametralladoras y el robo de vida de Sobreestimulación cardíaca"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Agarre cinético y Barrera experimental bloquean el daño sostenido y el Visor táctico"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Esferas rebotadas destruyen la torreta en esquinas y Agarre absorbe Sobrecarga"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Coloca su Barrera experimental directamente frente a la posición de Widowmaker"
                }
          },
          "weakDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": "D.Mon tiene enfrentamiento favorable contra Sigma"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Doomfist entra, desordena y sale, y Sigma es demasiado lento para perseguirle"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Echo tiene enfrentamiento favorable contra Sigma"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Hanzo rompe enseguida el escudo de Sigma y le deja al descubierto"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Acelera sobre Sigma con Grito de mando y Matanza atraviesa su Agarre cinético"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Rebota granadas tras paredes y rompe la Barrera experimental sin exponerse a línea de mira"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Lúcio tiene enfrentamiento favorable contra Sigma"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Mei tiene enfrentamiento favorable contra Sigma"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Sigma"
                },
                "ramattra": {
                      "hard": true,
                      "motivo": "Ramattra tiene enfrentamiento favorable contra Sigma"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Reinhardt tiene enfrentamiento favorable contra Sigma"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Sierra rompe enseguida el escudo de Sigma y le deja al descubierto"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn rompe enseguida el escudo de Sigma y le deja al descubierto"
                },
                "sombra": {
                      "hard": true,
                      "motivo": "PEM destruye al instante la Barrera experimental y cancela Flujo gravitacional"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta le da espadazos sin parar a Sigma, que es demasiado lento para quitársela de encima"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Winston tiene enfrentamiento favorable contra Sigma"
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
          "Bestia interior",
          "Movilidad de MEKA",
          "Golpetazo",
          "Fusión concentrada"
    ],
    counters: {
          "strongAgainst": [
                "ana",
                "baptiste",
                "dva",
                "illari",
                "lifeweaver",
                "mercy",
                "reinhardt",
                "sigma",
                "winston",
                "wuyang",
                "zarya",
                "zenyatta"
          ],
          "weakAgainst": [
                "bastion",
                "cassidy",
                "doomfist",
                "echo",
                "freja",
                "hanzo",
                "junker-queen",
                "mauga",
                "orisa",
                "ramattra",
                "roadhog",
                "sierra",
                "sojourn",
                "torbjorn",
                "vendetta"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "vendetta"
          ],
          "strongDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y D.Mon llega a por él enseguida"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y D.Mon llega a por él enseguida"
                },
                "dva": {
                      "hard": false,
                      "motivo": "D.Mon tiene enfrentamiento favorable contra D.Va"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y D.Mon llega a por él enseguida"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y D.Mon llega a por él enseguida"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y D.Mon llega a por él enseguida"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "D.Mon tiene enfrentamiento favorable contra Reinhardt"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "D.Mon tiene enfrentamiento favorable contra Sigma"
                },
                "winston": {
                      "hard": false,
                      "motivo": "D.Mon tiene enfrentamiento favorable contra Winston"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y D.Mon llega a por él enseguida"
                },
                "zarya": {
                      "hard": false,
                      "motivo": "D.Mon tiene enfrentamiento favorable contra Zarya"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y D.Mon llega a por él enseguida"
                }
          },
          "weakDetails": {
                "bastion": {
                      "hard": false,
                      "motivo": "Bastion rompe enseguida el escudo de D.Mon y le deja al descubierto"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Cassidy tiene con qué frenar a D.Mon cuando se le tira encima"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Doomfist tiene enfrentamiento favorable contra D.Mon"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Echo tiene enfrentamiento favorable contra D.Mon"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Freja tiene enfrentamiento favorable contra D.Mon"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Hanzo rompe enseguida el escudo de D.Mon y le deja al descubierto"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Sus golpes de hacha y cuchillo ignoran la Barrera de energía de D.Mon"
                },
                "mauga": {
                      "hard": false,
                      "motivo": "Mauga rompe enseguida el escudo de D.Mon y le deja al descubierto"
                },
                "orisa": {
                      "hard": false,
                      "motivo": "Orisa tiene enfrentamiento favorable contra D.Mon"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Ramattra tiene enfrentamiento favorable contra D.Mon"
                },
                "roadhog": {
                      "hard": false,
                      "motivo": "El Garfio saca a D.Mon de su posición defensiva y la castiga a corta distancia"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Sierra rompe enseguida el escudo de D.Mon y le deja al descubierto"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn rompe enseguida el escudo de D.Mon y le deja al descubierto"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a D.Mon cuando se le tira encima"
                },
                "vendetta": {
                      "hard": true,
                      "motivo": "Le da espadazos constantemente y la hace sufrir mucho"
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
    description: 'Luchadora agresiva que inflige sangrado y se cura a través de las heridas de sus enemigos. Muy potenciada en el parche mid-season con +50 HP y Carnicería a 7s.',
    tier: 'A',
    counterAdvice: "Con su buff de +50 HP de base y Carnicería en 7s, Junker Queen tiene un aguante y presencia temible en melé. Mantén la distancia con héroes de largo alcance (Ashe, Pharah, Echo) y córtale la autocuración con granada biótica de Ana.",
    perks: [
          "Carga desenfrenada",
          "Grito de batalla",
          "Willy-Willy",
          "Saciedad salvaje"
    ],
    counters: {
          "strongAgainst": [
                "dmon",
                "doomfist",
                "reinhardt",
                "roadhog",
                "sigma",
                "winston"
          ],
          "weakAgainst": [
                "ana",
                "ashe",
                "bastion",
                "brigitte",
                "cassidy",
                "echo",
                "emre",
                "freja",
                "illari",
                "jetpack-cat",
                "juno",
                "kiriko",
                "lucio",
                "mei",
                "mizuki",
                "orisa",
                "pharah",
                "soldier76",
                "symmetra",
                "vendetta",
                "wuyang",
                "zarya",
                "zenyatta"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "ana",
                "kiriko",
                "orisa"
          ],
          "strongDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": "Sus golpes de hacha y cuchillo ignoran la Barrera de energía de D.Mon"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Puede clavarle el cuchillo mientras bloquea y luego tirar de él hacia atrás"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Grito de mando entra y sale del rango del martillo mientras Matanza golpea a través del escudo"
                },
                "roadhog": {
                      "hard": false,
                      "motivo": "Su definitiva Masacre aplica anticuración total sobre Roadhog y su hitbox pequeña esquiva perdigones"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Acelera sobre Sigma con Grito de mando y Matanza atraviesa su Agarre cinético"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Escopeta y heridas de sangrado ganan el duelo cerrado dentro de la burbuja de Winston"
                }
          },
          "weakDetails": {
                "ana": {
                      "hard": true,
                      "motivo": "Junker Queen no tiene escudo que le cubra del control de Ana"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Aprovecha la falta de escudo de Junker Queen para quemarla con Dinamita y tiros críticos"
                },
                "bastion": {
                      "hard": false,
                      "motivo": "Bastion tiene enfrentamiento favorable contra Junker Queen"
                },
                "brigitte": {
                      "hard": false,
                      "motivo": "La defensa de Junker Queen no para el rayo ni los golpes de Brigitte"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Junker Queen no tiene escudo que le cubra del control de Cassidy"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Echo tiene enfrentamiento favorable contra Junker Queen"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Protocolo de anulación y Granada cibernética frenan y castigan a Junker Queen sin escudo"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Freja tiene enfrentamiento favorable contra Junker Queen"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Mantiene distancia con Erupción y castiga la falta de escudo de Junker Queen"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Saca a los aliados heridos del rango de Matanza mediante transporte aéreo"
                },
                "juno": {
                      "hard": false,
                      "motivo": "Acelera la rotación del equipo para negar las entradas cuerpo a cuerpo de Junker Queen"
                },
                "kiriko": {
                      "hard": true,
                      "motivo": "Suzu de protección limpia instantáneamente el sangrado y la anticuración de Masacre"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Lúcio tiene enfrentamiento favorable contra Junker Queen"
                },
                "mei": {
                      "hard": false,
                      "motivo": "La defensa de Junker Queen no para el rayo ni los golpes de Mei"
                },
                "mizuki": {
                      "hard": false,
                      "motivo": "Junker Queen no tiene escudo que le cubra del control de Mizuki"
                },
                "orisa": {
                      "hard": true,
                      "motivo": "Junker Queen no tiene escudo: el stun de Orisa la para en seco"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Junker Queen"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Kitea el rango corto de Junker Queen corriendo con Sprint mientras la desgasta sin escudo"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "La defensa de Junker Queen no para el rayo ni los golpes de Symmetra"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "La defensa de Junker Queen no para el rayo ni los golpes de Vendetta"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Ola guardiana descoloca las entradas de Junker Queen y los orbes castigan su avance lineal"
                },
                "zarya": {
                      "hard": false,
                      "motivo": "La defensa de Junker Queen no para el rayo ni los golpes de Zarya"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Orbe de discordia y Patada veloz castigan las entradas sin escudo de Junker Queen"
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
    description: 'Tanque colosal con ametralladoras gemelas que incendian y asestan golpes críticos, con robo de vida en área y 150 de armadura base.',
    tier: 'B',
    counterAdvice: "Con su armadura incrementada a 150, Mauga resiste mucho mejor el fuego concentrado. La clave para neutralizarlo sigue siendo forzar su Sobrecarga cardíaca y castigarlo con daño de rayos (Zarya, Symmetra) o anti-heal de Ana cuando termine la carga.",
    perks: [
          "Bandolera cinética",
          "Piromanía",
          "Fuego camina conmigo",
          "Combustible de combate"
    ],
    counters: {
          "strongAgainst": [
                "dmon",
                "domina",
                "ramattra",
                "reinhardt",
                "roadhog",
                "winston",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "ana",
                "bastion",
                "dva",
                "emre",
                "kiriko",
                "lifeweaver",
                "mizuki",
                "orisa",
                "sierra",
                "sigma",
                "sojourn",
                "zarya",
                "zenyatta"
          ],
          "hardStrongAgainst": [
                "roadhog"
          ],
          "hardWeakAgainst": [
                "ana",
                "orisa",
                "zarya",
                "zenyatta"
          ],
          "strongDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": "Mauga rompe enseguida el escudo de D.Mon y le deja al descubierto"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Mauga rompe enseguida el escudo de Domina y le deja al descubierto"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Mauga rompe enseguida el escudo de Ramattra y le deja al descubierto"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Mauga rompe enseguida el escudo de Reinhardt y le deja al descubierto"
                },
                "roadhog": {
                      "hard": true,
                      "motivo": "Mauga es counter duro directo de Roadhog"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Mauga rompe enseguida el escudo de Winston y le deja al descubierto"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": "Mauga tiene enfrentamiento favorable contra Wrecking Ball"
                }
          },
          "weakDetails": {
                "ana": {
                      "hard": true,
                      "motivo": "Mauga no tiene escudo que le cubra del control de Ana"
                },
                "bastion": {
                      "hard": false,
                      "motivo": "Bastion tiene enfrentamiento favorable contra Mauga"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Matriz de defensa bloquea ambas ametralladoras durante Sobreestimulación cardíaca y niega su curación"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Desgasta de forma constante a Mauga desde cobertura media con Granada cibernética"
                },
                "kiriko": {
                      "hard": false,
                      "motivo": "Kiriko tiene enfrentamiento favorable contra Mauga"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene enfrentamiento favorable contra Mauga"
                },
                "mizuki": {
                      "hard": false,
                      "motivo": "Mauga no tiene escudo que le cubra del control de Mizuki"
                },
                "orisa": {
                      "hard": true,
                      "motivo": "Mauga no tiene escudo: el stun de Orisa le para en seco"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Sierra tiene enfrentamiento favorable contra Mauga"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Agarre cinético y escudo niegan las ametralladoras y el robo de vida de Sobreestimulación cardíaca"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn tiene enfrentamiento favorable contra Mauga"
                },
                "zarya": {
                      "hard": true,
                      "motivo": "Zarya tiene enfrentamiento favorable contra Mauga"
                },
                "zenyatta": {
                      "hard": true,
                      "motivo": "Orbe de discordia multiplica el daño recibido por Mauga al no tener escudo para cubrirse"
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
          "Protocolo de defensa",
          "Fortificación móvil",
          "Jabalina pesada",
          "Barrera protectora"
    ],
    counters: {
          "strongAgainst": [
                "dmon",
                "doomfist",
                "dva",
                "hazard",
                "junker-queen",
                "mauga",
                "ramattra",
                "reinhardt",
                "roadhog",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "bastion",
                "cassidy",
                "doctrine",
                "freja",
                "hanzo",
                "lifeweaver",
                "sierra",
                "sojourn",
                "symmetra",
                "torbjorn",
                "vendetta",
                "zarya",
                "zenyatta"
          ],
          "hardStrongAgainst": [
                "doomfist",
                "hazard",
                "junker-queen",
                "mauga",
                "ramattra",
                "roadhog",
                "wrecking-ball"
          ],
          "hardWeakAgainst": [
                "lifeweaver",
                "zarya"
          ],
          "strongDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": "Orisa tiene enfrentamiento favorable contra D.Mon"
                },
                "doomfist": {
                      "hard": true,
                      "motivo": "Su stun perjudica a Doomfist durante su bloqueo, que es su habilidad central"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Orisa tiene enfrentamiento favorable contra D.Va"
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
                "ramattra": {
                      "hard": true,
                      "motivo": "Aguanta su forma Némesis y con la lanza le aturde y le corta las habilidades"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Orisa tiene enfrentamiento favorable contra Reinhardt"
                },
                "roadhog": {
                      "hard": true,
                      "motivo": "Roadhog no tiene escudo: el stun de Orisa le para en seco"
                },
                "wrecking-ball": {
                      "hard": true,
                      "motivo": "Orisa es counter duro directo de Wrecking Ball"
                }
          },
          "weakDetails": {
                "bastion": {
                      "hard": false,
                      "motivo": "Bastion rompe enseguida el escudo de Orisa y le deja al descubierto"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Cassidy tiene enfrentamiento favorable contra Orisa"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Presión constante con Cetro eterno e Imbuir desgastan a Orisa en peleas prolongadas"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Freja tiene enfrentamiento favorable contra Orisa"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Hanzo rompe enseguida el escudo de Orisa y le deja al descubierto"
                },
                "lifeweaver": {
                      "hard": true,
                      "motivo": "Plataforma petaloide y Agarre vital anulan por completo Terraluvión de Orisa"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Sierra rompe enseguida el escudo de Orisa y le deja al descubierto"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn rompe enseguida el escudo de Orisa y le deja al descubierto"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "Symmetra tiene enfrentamiento favorable contra Orisa"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Torbjörn rompe enseguida el escudo de Orisa y le deja al descubierto"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta le da espadazos sin parar a Orisa, que es demasiado lento para quitársela de encima"
                },
                "zarya": {
                      "hard": true,
                      "motivo": "Zarya tiene enfrentamiento favorable contra Orisa"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Zenyatta tiene enfrentamiento favorable contra Orisa"
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
          "Garfio de chatarra",
          "Ven, cochinillo",
          "Exposición al hogdrógeno",
          "Tubo de escape tóxico"
    ],
    counters: {
          "strongAgainst": [
                "dmon",
                "doomfist",
                "hazard",
                "lucio",
                "moira",
                "winston",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "ana",
                "dva",
                "emre",
                "junker-queen",
                "lifeweaver",
                "mauga",
                "mizuki",
                "orisa",
                "sierra",
                "sojourn",
                "soldier76",
                "sombra",
                "vendetta",
                "zenyatta"
          ],
          "hardStrongAgainst": [
                "doomfist",
                "winston",
                "wrecking-ball"
          ],
          "hardWeakAgainst": [
                "ana",
                "mauga",
                "orisa",
                "sojourn",
                "sombra",
                "zenyatta"
          ],
          "strongDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": "El Garfio saca a D.Mon de su posición defensiva y la castiga a corta distancia"
                },
                "doomfist": {
                      "hard": true,
                      "motivo": "El Garfio atrapa a Doomfist durante Bloqueo de poder y lo arrastra fuera de posición"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Roadhog tiene enfrentamiento favorable contra Hazard"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Un impacto de Garfio elimina a Lúcio cuando intenta disputar el punto de cerca"
                },
                "moira": {
                      "hard": false,
                      "motivo": "El Garfio cancela Coalescencia y el poco daño de Moira no amenaza la vida de Roadhog"
                },
                "winston": {
                      "hard": true,
                      "motivo": "Destruye el Campo de fuerza a quemarropa y revienta la gran hitbox de Winston con Chatarrera"
                },
                "wrecking-ball": {
                      "hard": true,
                      "motivo": "Roadhog tiene enfrentamiento favorable contra Wrecking Ball"
                }
          },
          "weakDetails": {
                "ana": {
                      "hard": true,
                      "motivo": "Roadhog no tiene escudo que le cubra del control de Ana"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Matriz de defensa salva a cualquier compañero enganchado por el Garfio de Roadhog"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Castiga el gran tamaño sin escudo de Roadhog con ráfagas sintéticas y Granada cibernética"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Su definitiva Masacre aplica anticuración total sobre Roadhog y su hitbox pequeña esquiva perdigones"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene enfrentamiento favorable contra Roadhog"
                },
                "mauga": {
                      "hard": true,
                      "motivo": "Mauga es counter duro directo de Roadhog"
                },
                "mizuki": {
                      "hard": false,
                      "motivo": "Roadhog no tiene escudo que le cubra del control de Mizuki"
                },
                "orisa": {
                      "hard": true,
                      "motivo": "Roadhog no tiene escudo: el stun de Orisa le para en seco"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Sierra tiene enfrentamiento favorable contra Roadhog"
                },
                "sojourn": {
                      "hard": true,
                      "motivo": "Sojourn es counter duro directo de Roadhog"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Se reposiciona rápido con Sprint fuera del rango del Garfio y carga definitiva fácilmente en Roadhog"
                },
                "sombra": {
                      "hard": true,
                      "motivo": "Con Ciberespacio le deniega tanto la curación como el daño después de que enganche a alguien"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta le da espadazos sin parar a Roadhog, que es demasiado lento para quitársela de encima"
                },
                "zenyatta": {
                      "hard": true,
                      "motivo": "Orbe de discordia obliga a Roadhog a esconderse constantemente pese a su gran vida"
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
          "Saltos y más saltos",
          "Refuerzo",
          "Más chicha",
          "Lanza de energía"
    ],
    counters: {
          "strongAgainst": [
                "anran",
                "brigitte",
                "dva",
                "genji",
                "hazard",
                "junker-queen",
                "junkrat",
                "mauga",
                "orisa",
                "shion"
          ],
          "weakAgainst": [
                "bastion",
                "dmon",
                "doomfist",
                "lifeweaver",
                "lucio",
                "reinhardt",
                "vendetta",
                "winston",
                "zenyatta"
          ],
          "hardStrongAgainst": [
                "genji",
                "junkrat",
                "mauga",
                "orisa"
          ],
          "hardWeakAgainst": [
                "lifeweaver"
          ],
          "strongDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Las barreras limpian inmediatamente la quemadura de Ignición en Zarya y sus aliados"
                },
                "brigitte": {
                      "hard": false,
                      "motivo": "El rayo de alta energía derrite a Brigitte en distancias cortas"
                },
                "dva": {
                      "hard": false,
                      "motivo": "La defensa de D.Va no para el rayo ni los golpes de Zarya"
                },
                "genji": {
                      "hard": true,
                      "motivo": "El rayo láser no puede ser devuelto por el Desvío de Genji"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "La defensa de Hazard no para el rayo ni los golpes de Zarya"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "La defensa de Junker Queen no para el rayo ni los golpes de Zarya"
                },
                "junkrat": {
                      "hard": true,
                      "motivo": "El spam de granadas de Junkrat regala el 100% de energía constante a las barreras de Zarya"
                },
                "mauga": {
                      "hard": true,
                      "motivo": "Zarya tiene enfrentamiento favorable contra Mauga"
                },
                "orisa": {
                      "hard": true,
                      "motivo": "Zarya tiene enfrentamiento favorable contra Orisa"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Las barreras proyectadas salvan al objetivo de la Ejecución de Shion y cargan energía"
                }
          },
          "weakDetails": {
                "bastion": {
                      "hard": false,
                      "motivo": "Bastion tiene enfrentamiento favorable contra Zarya"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "D.Mon tiene enfrentamiento favorable contra Zarya"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Doomfist entra, desordena y sale, y Zarya es demasiado lento para perseguirle"
                },
                "lifeweaver": {
                      "hard": true,
                      "motivo": "Plataforma petaloide eleva a todo el equipo fuera de la Bomba de gravedad de Zarya"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Mantiene a su equipo fuera del alcance del rayo de Zarya y le ayuda a guardar la distancia"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Reinhardt tiene enfrentamiento favorable contra Zarya"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta le da espadazos sin parar a Zarya, que es demasiado lento para quitársela de encima"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Winston tiene enfrentamiento favorable contra Zarya"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Trascendencia anula por completo el combo letal de Bomba de gravedad de Zarya"
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
          "Detonador a distancia",
          "Doble cañón",
          "Picadura de víbora",
          "Ráfaga de aire"
    ],
    counters: {
          "strongAgainst": [
                "cassidy",
                "doctrine",
                "echo",
                "freja",
                "junker-queen",
                "junkrat",
                "mei",
                "mizuki",
                "moira",
                "pharah",
                "reaper",
                "symmetra"
          ],
          "weakAgainst": [
                "anran",
                "domina",
                "genji",
                "kiriko",
                "shion",
                "sigma",
                "sojourn",
                "tracer",
                "vendetta",
                "venture",
                "widowmaker"
          ],
          "hardStrongAgainst": [
                "pharah"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "cassidy": {
                      "hard": false,
                      "motivo": "Mayor alcance efectivo con Víbora apuntando y presión constante con Dinamita"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Castiga desde distancia segura donde Cetro eterno pierde efectividad"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Ashe es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Ashe es un DPS hitscan y castiga a Freja cuando está en el aire"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Aprovecha la falta de escudo de Junker Queen para quemarla con Dinamita y tiros críticos"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Domina desde alturas lejanas fuera del rebote de las granadas de Junkrat"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Dinamita quema por encima del Muro de hielo y Víbora castiga a Mei a distancia"
                },
                "mizuki": {
                      "hard": false,
                      "motivo": "Presiona desde media-larga distancia y quema al grupo dentro de su Aura reparadora con Dinamita"
                },
                "moira": {
                      "hard": false,
                      "motivo": "Supera ampliamente los 20 metros de alcance de Moira desde posiciones elevadas"
                },
                "pharah": {
                      "hard": true,
                      "motivo": "Ashe es un DPS hitscan y castiga a Pharah cuando está en el aire"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Mantiene distancia con Recortada y castiga la aproximación lenta de Reaper"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "Elimina torretas y presiona a Symmetra mucho antes de que entre en rango de rayo"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Anran es rápido y llega a Ashe, que es lento y no tiene con qué frenarle"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Matriz de barrera bloquea las líneas largas de Ashe y niega sus ángulos de tiro"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Genji es rápido y llega a Ashe, que es lento y no tiene con qué frenarle"
                },
                "kiriko": {
                      "hard": false,
                      "motivo": "Suzu de protección apaga la quemadura de Dinamita en varios aliados a la vez"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Shion es rápido y llega a Ashe, que es lento y no tiene con qué frenarle"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Reposiciona la Barrera experimental constantemente en la cara de Ashe para anular sus ángulos"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn es rápido y llega a Ashe, que es lento y no tiene con qué frenarle"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Tracer es rápido y llega a Ashe, que es lento y no tiene con qué frenarle"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta es rápido y llega a Ashe, que es lento y no tiene con qué frenarle"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Venture es rápido y llega a Ashe, que es lento y no tiene con qué frenarle"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Mayor alcance letal de un solo impacto en duelos de francotirador largos"
                }
          }
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
          "Bang, bang",
          "¡Arre!",
          "Resumen rodante",
          "Bala de plata"
    ],
    counters: {
          "strongAgainst": [
                "anran",
                "dmon",
                "doomfist",
                "dva",
                "echo",
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
                "ana",
                "ashe",
                "domina",
                "freja",
                "hanzo",
                "reinhardt",
                "sigma",
                "sojourn",
                "widowmaker",
                "zenyatta"
          ],
          "hardStrongAgainst": [
                "anran",
                "genji",
                "reaper",
                "shion",
                "tracer",
                "vendetta",
                "venture",
                "wrecking-ball"
          ],
          "hardWeakAgainst": [
                "sigma",
                "widowmaker"
          ],
          "strongDetails": {
                "anran": {
                      "hard": true,
                      "motivo": "Cassidy tiene con qué frenar a Anran cuando va a por él"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Cassidy tiene con qué frenar a D.Mon cuando se le tira encima"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Cassidy tiene con qué frenar a Doomfist cuando se le tira encima"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Cassidy tiene con qué frenar a D.Va cuando se le tira encima"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Cassidy es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "genji": {
                      "hard": true,
                      "motivo": "Cassidy tiene con qué frenar a Genji cuando va a por él"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Cassidy tiene con qué frenar a Hazard cuando se le tira encima"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Junker Queen no tiene escudo que le cubra del control de Cassidy"
                },
                "orisa": {
                      "hard": false,
                      "motivo": "Cassidy tiene enfrentamiento favorable contra Orisa"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Cassidy es un DPS hitscan y castiga a Pharah cuando está en el aire"
                },
                "reaper": {
                      "hard": true,
                      "motivo": "Con su daño a media distancia y su granada neutraliza sus habilidades de movilidad"
                },
                "shion": {
                      "hard": true,
                      "motivo": "Cassidy tiene con qué frenar a Shion cuando va a por él"
                },
                "tracer": {
                      "hard": true,
                      "motivo": "Cassidy tiene con qué frenar a Tracer cuando va a por él"
                },
                "vendetta": {
                      "hard": true,
                      "motivo": "Granada cegadora detiene Arremetida y Corte volador dejándola vendida a corta distancia"
                },
                "venture": {
                      "hard": true,
                      "motivo": "Con su daño a media distancia y su granada neutraliza sus habilidades de movilidad"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Cassidy tiene con qué frenar a Winston cuando se le tira encima"
                },
                "wrecking-ball": {
                      "hard": true,
                      "motivo": "Cassidy tiene con qué frenar a Wrecking Ball cuando se le tira encima"
                }
          },
          "weakDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Dardo sedante cancela Sin perdón fácilmente y Ana opera fuera del rango óptimo de Cassidy"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Mayor alcance efectivo con Víbora apuntando y presión constante con Dinamita"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Matriz de barrera bloquea las líneas de tiro de Cassidy y Cañón de fotones lo desplaza"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Ángulos aéreos lejanos con Apuntado castigan la falta de movilidad de Cassidy"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "La hitbox ancha y baja movilidad de Cassidy facilitan impactos críticos de Hanzo desde lejos"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Su escudo bloquea los disparos y Sin perdón mientras domina espacios cerrados"
                },
                "sigma": {
                      "hard": true,
                      "motivo": "Barrera experimental y Agarre cinético anulan los disparos y Sin perdón de Cassidy"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Supera el rango medio de Cassidy con rieles cargados y escapa con Maniobra evasiva"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Domina a Cassidy desde larga distancia donde el Pacificador pierde daño por caída"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Orbe de discordia y voleas a larga distancia castigan la poca movilidad de Cassidy"
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
          "Seguridad supresiva",
          "Agilidad mejorada",
          "Disipador térmico",
          "Adhesión cibernética"
    ],
    counters: {
          "strongAgainst": [
                "echo",
                "freja",
                "junker-queen",
                "mauga",
                "mei",
                "pharah",
                "reaper",
                "roadhog",
                "symmetra"
          ],
          "weakAgainst": [
                "anran",
                "domina",
                "genji",
                "shion",
                "sojourn",
                "tracer",
                "vendetta",
                "venture",
                "widowmaker"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "echo": {
                      "hard": false,
                      "motivo": "Emre es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Emre es un DPS hitscan y castiga a Freja cuando está en el aire"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Protocolo de anulación y Granada cibernética frenan y castigan a Junker Queen sin escudo"
                },
                "mauga": {
                      "hard": false,
                      "motivo": "Desgasta de forma constante a Mauga desde cobertura media con Granada cibernética"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Presiona desde rango medio fuera del alcance del rayo endotérmico de Mei"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Emre es un DPS hitscan y castiga a Pharah cuando está en el aire"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Ralentiza y mantiene a raya la entrada corta de Reaper antes de que llegue a quemarropa"
                },
                "roadhog": {
                      "hard": false,
                      "motivo": "Castiga el gran tamaño sin escudo de Roadhog con ráfagas sintéticas y Granada cibernética"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "Destruye despliegues de Symmetra y gana el duelo a media distancia"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Anran es rápido y llega a Emre, que es lento y no tiene con qué frenarle"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Bloquea las ráfagas y granadas de Emre con Matriz de barrera a media distancia"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Genji es rápido y llega a Emre, que es lento y no tiene con qué frenarle"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Shion es rápido y llega a Emre, que es lento y no tiene con qué frenarle"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn es rápido y llega a Emre, que es lento y no tiene con qué frenarle"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Tracer es rápido y llega a Emre, que es lento y no tiene con qué frenarle"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta es rápido y llega a Emre, que es lento y no tiene con qué frenarle"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Venture es rápido y llega a Emre, que es lento y no tiene con qué frenarle"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Supera ampliamente el rango medio de Emre desde líneas de visión largas"
                }
          }
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
          "Vuelo completo",
          "Agarre firme",
          "Drones médicos",
          "Fijada"
    ],
    counters: {
          "strongAgainst": [
                "dmon",
                "domina",
                "mauga",
                "orisa",
                "ramattra",
                "reinhardt",
                "roadhog",
                "sigma",
                "winston",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "anran",
                "genji",
                "reaper",
                "shion",
                "sojourn",
                "tracer",
                "vendetta",
                "venture"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "dmon": {
                      "hard": false,
                      "motivo": "Sierra rompe enseguida el escudo de D.Mon y le deja al descubierto"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Sierra rompe enseguida el escudo de Domina y le deja al descubierto"
                },
                "mauga": {
                      "hard": false,
                      "motivo": "Sierra tiene enfrentamiento favorable contra Mauga"
                },
                "orisa": {
                      "hard": false,
                      "motivo": "Sierra rompe enseguida el escudo de Orisa y le deja al descubierto"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Sierra rompe enseguida el escudo de Ramattra y le deja al descubierto"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Sierra rompe enseguida el escudo de Reinhardt y le deja al descubierto"
                },
                "roadhog": {
                      "hard": false,
                      "motivo": "Sierra tiene enfrentamiento favorable contra Roadhog"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Sierra rompe enseguida el escudo de Sigma y le deja al descubierto"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Sierra rompe enseguida el escudo de Winston y le deja al descubierto"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": "Sierra tiene enfrentamiento favorable contra Wrecking Ball"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Anran es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Genji es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Reaper es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Shion es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Tracer es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Venture es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                }
          }
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
          "Sobrecarga",
          "Campo de deceleración",
          "Generadores de fricción",
          "Doble propulsor"
    ],
    counters: {
          "strongAgainst": [
                "ana",
                "anran",
                "ashe",
                "baptiste",
                "bastion",
                "cassidy",
                "dmon",
                "doctrine",
                "domina",
                "echo",
                "emre",
                "freja",
                "hanzo",
                "hazard",
                "illari",
                "junkrat",
                "kiriko",
                "lifeweaver",
                "mauga",
                "mercy",
                "orisa",
                "pharah",
                "ramattra",
                "reinhardt",
                "roadhog",
                "sierra",
                "sigma",
                "soldier76",
                "wuyang",
                "zenyatta"
          ],
          "weakAgainst": [
                "dva",
                "genji",
                "shion",
                "sombra",
                "torbjorn",
                "tracer",
                "widowmaker",
                "winston",
                "wrecking-ball"
          ],
          "hardStrongAgainst": [
                "bastion",
                "domina",
                "roadhog"
          ],
          "hardWeakAgainst": [
                "dva",
                "widowmaker",
                "winston"
          ],
          "strongDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Sojourn llega a por él enseguida"
                },
                "anran": {
                      "hard": false,
                      "motivo": "Maniobra evasiva escapa de Carga infernal y el Cañón de riel la elimina de un disparo"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Sojourn es rápido y llega a Ashe, que es lento y no tiene con qué frenarle"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Sojourn llega a por él enseguida"
                },
                "bastion": {
                      "hard": true,
                      "motivo": "Carga el 100% del Cañón de riel gratis en el enorme cuerpo de Bastion y lo castiga desde cobertura"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Supera el rango medio de Cassidy con rieles cargados y escapa con Maniobra evasiva"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Sojourn rompe enseguida el escudo de D.Mon y le deja al descubierto"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "El estallido del Cañón de riel cargado supera la curación sostenida de Doctrine"
                },
                "domina": {
                      "hard": true,
                      "motivo": "Sojourn rompe enseguida el escudo de Domina y le deja al descubierto"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Sojourn es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Sojourn es rápido y llega a Emre, que es lento y no tiene con qué frenarle"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Sojourn es un DPS hitscan y castiga a Freja cuando está en el aire"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Sojourn es rápido y llega a Hanzo, que es lento y no tiene con qué frenarle"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Sojourn tiene enfrentamiento favorable contra Hazard"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Sojourn llega a por él enseguida"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Sojourn es rápido y llega a Junkrat, que es lento y no tiene con qué frenarle"
                },
                "kiriko": {
                      "hard": false,
                      "motivo": "El disparo secundario de riel cargado mata de golpe sin ventana para Suzu de protección"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Sojourn llega a por él enseguida"
                },
                "mauga": {
                      "hard": false,
                      "motivo": "Sojourn tiene enfrentamiento favorable contra Mauga"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Sojourn llega a por él enseguida"
                },
                "orisa": {
                      "hard": false,
                      "motivo": "Sojourn rompe enseguida el escudo de Orisa y le deja al descubierto"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Sojourn es un DPS hitscan y castiga a Pharah cuando está en el aire"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Sojourn rompe enseguida el escudo de Ramattra y le deja al descubierto"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Sojourn rompe enseguida el escudo de Reinhardt y le deja al descubierto"
                },
                "roadhog": {
                      "hard": true,
                      "motivo": "Sojourn es counter duro directo de Roadhog"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Sojourn es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Sojourn rompe enseguida el escudo de Sigma y le deja al descubierto"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Sojourn es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Sojourn llega a por él enseguida"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Sojourn llega a por él enseguida"
                }
          },
          "weakDetails": {
                "dva": {
                      "hard": true,
                      "motivo": "Matriz de defensa absorbe tanto el Disparo inmovilizador como los tiros cargados de Cañón de riel"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Desvío puede devolver el tiro letal del Cañón de riel y Corte veloz persigue su Maniobra evasiva"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Cierra distancia rápidamente y castiga los 225 de salud de Sojourn tras gastar su deslizamiento"
                },
                "sombra": {
                      "hard": false,
                      "motivo": "Presiona lateralmente a Sojourn y corta su escape de Maniobra evasiva en momentos clave"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a Sojourn cuando va a por él"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Con 225 de vida, Sojourn sufre en duelos cercanos contra los parpadeos impredecibles de Tracer"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Mayor alcance instantáneo: elimina los 225 de vida de Sojourn antes de que cargue su riel"
                },
                "winston": {
                      "hard": true,
                      "motivo": "Salta sobre Sojourn con Campo de fuerza negándole objetivos para cargar energía de riel"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": "Sin cabeza crítica en modo bola, persigue a Sojourn incluso después de usar Maniobra evasiva"
                }
          }
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
          "Propulsión de hélices",
          "Salva táctica",
          "Zancada completa",
          "Estimulantes"
    ],
    counters: {
          "strongAgainst": [
                "echo",
                "freja",
                "junker-queen",
                "junkrat",
                "mercy",
                "pharah",
                "roadhog",
                "symmetra"
          ],
          "weakAgainst": [
                "anran",
                "domina",
                "genji",
                "reaper",
                "reinhardt",
                "shion",
                "sigma",
                "sojourn",
                "tracer",
                "vendetta",
                "venture",
                "widowmaker"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "echo": {
                      "hard": false,
                      "motivo": "Soldier: 76 es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Soldier: 76 es un DPS hitscan y castiga a Freja cuando está en el aire"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Kitea el rango corto de Junker Queen corriendo con Sprint mientras la desgasta sin escudo"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Toma alturas a media distancia lejos de las trampas y granadas de Junkrat"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Presión hitscan continua y Visor táctico cazan a Mercy en el aire"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Soldier: 76 es un DPS hitscan y castiga a Pharah cuando está en el aire"
                },
                "roadhog": {
                      "hard": false,
                      "motivo": "Se reposiciona rápido con Sprint fuera del rango del Garfio y carga definitiva fácilmente en Roadhog"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "Rompe torretas al instante y mantiene la distancia con Sprint frente al rayo de Symmetra"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Anran es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Absorbe la presión frontal del Rifle de pulsos con Matriz de barrera y controla el espacio"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Genji es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Reaper es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Campo protector anula todo el daño frontal y el Visor táctico de Soldado: 76"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Shion es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Agarre cinético y Barrera experimental bloquean el daño sostenido y el Visor táctico"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Tracer es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Venture es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Elimina instantáneamente a Soldado: 76 antes de que su daño sostenido haga efecto"
                }
          }
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
          "Eficiencia con la mira",
          "Instinto de francotirador",
          "Mina rastreadora",
          "Mordisco de viuda"
    ],
    counters: {
          "strongAgainst": [
                "ana",
                "ashe",
                "baptiste",
                "bastion",
                "cassidy",
                "doctrine",
                "echo",
                "emre",
                "freja",
                "illari",
                "kiriko",
                "mizuki",
                "moira",
                "pharah",
                "sojourn",
                "soldier76",
                "torbjorn",
                "wuyang",
                "zenyatta"
          ],
          "weakAgainst": [
                "anran",
                "domina",
                "doomfist",
                "dva",
                "genji",
                "reaper",
                "shion",
                "sigma",
                "sombra",
                "tracer",
                "vendetta",
                "venture",
                "winston",
                "wrecking-ball"
          ],
          "hardStrongAgainst": [
                "cassidy",
                "doctrine",
                "echo",
                "freja",
                "kiriko",
                "mizuki",
                "pharah",
                "sojourn"
          ],
          "hardWeakAgainst": [
                "doomfist",
                "dva",
                "genji",
                "shion",
                "tracer",
                "winston",
                "wrecking-ball"
          ],
          "strongDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Gana el duelo de francotiradoras gracias a su letalidad de un solo impacto crítico"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Mayor alcance letal de un solo impacto en duelos de francotirador largos"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Un disparo crítico elimina a Baptiste antes de que pueda reaccionar con Campo de inmortalidad"
                },
                "bastion": {
                      "hard": false,
                      "motivo": "Castiga desde larguísima distancia donde la dispersión de Bastion pierde efectividad"
                },
                "cassidy": {
                      "hard": true,
                      "motivo": "Domina a Cassidy desde larga distancia donde el Pacificador pierde daño por caída"
                },
                "doctrine": {
                      "hard": true,
                      "motivo": "El disparo crítico instantáneo ignora toda la curación sostenida y el robo de vida de Doctrine"
                },
                "echo": {
                      "hard": true,
                      "motivo": "Widowmaker es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Supera ampliamente el rango medio de Emre desde líneas de visión largas"
                },
                "freja": {
                      "hard": true,
                      "motivo": "Widowmaker es un DPS hitscan y castiga a Freja cuando está en el aire"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Supera en alcance letal al Rifle solar de Illari y destruye su pilón si queda expuesto"
                },
                "kiriko": {
                      "hard": true,
                      "motivo": "Un tiro en la cabeza instantáneo elimina a Kiriko sin darle tiempo a lanzar Suzu"
                },
                "mizuki": {
                      "hard": true,
                      "motivo": "Elimina a Mizuki desde líneas largas totalmente fuera del alcance de Cadena vinculante"
                },
                "moira": {
                      "hard": false,
                      "motivo": "Elimina de un disparo a Moira desde distancias donde ella no puede interactuar"
                },
                "pharah": {
                      "hard": true,
                      "motivo": "Widowmaker es un DPS hitscan y castiga a Pharah cuando está en el aire"
                },
                "sojourn": {
                      "hard": true,
                      "motivo": "Mayor alcance instantáneo: elimina los 225 de vida de Sojourn antes de que cargue su riel"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Elimina instantáneamente a Soldado: 76 antes de que su daño sostenido haga efecto"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Destruye su torreta desde lejos y aprovecha la gran cabeza crítica de Torbjörn"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Castiga la baja movilidad de Wuyang desde ángulos lejanos"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Hitbox redonda y ausencia de movilidad hacen de Zenyatta una baja fácil a distancia"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Anran es rápido y llega a Widowmaker, que es lento y no tiene con qué frenarle"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Cierra líneas de francotirador con Matriz de barrera protegiendo el avance aliado"
                },
                "doomfist": {
                      "hard": true,
                      "motivo": "Cruza el mapa de un salto y castiga la inmovilidad de Widowmaker al apuntar"
                },
                "dva": {
                      "hard": true,
                      "motivo": "Vuela hacia su posición bloqueando todos sus tiros con Matriz de defensa"
                },
                "genji": {
                      "hard": true,
                      "motivo": "Genji es rápido y llega a Widowmaker, que es lento y no tiene con qué frenarle"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Reaper es rápido y llega a Widowmaker, que es lento y no tiene con qué frenarle"
                },
                "shion": {
                      "hard": true,
                      "motivo": "Shion es rápido y llega a Widowmaker, que es lento y no tiene con qué frenarle"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Coloca su Barrera experimental directamente frente a la posición de Widowmaker"
                },
                "sombra": {
                      "hard": false,
                      "motivo": "Movilidad sigilosa con Baliza de translocación permite presionar posiciones fijas de Widowmaker"
                },
                "tracer": {
                      "hard": true,
                      "motivo": "Tracer es rápido y llega a Widowmaker, que es lento y no tiene con qué frenarle"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta es rápido y llega a Widowmaker, que es lento y no tiene con qué frenarle"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Venture es rápido y llega a Widowmaker, que es lento y no tiene con qué frenarle"
                },
                "winston": {
                      "hard": true,
                      "motivo": "Salta directamente a su altura con Campo de fuerza y la obliga a huir o morir"
                },
                "wrecking-ball": {
                      "hard": true,
                      "motivo": "Sin cabeza crítica en modo bola, llega a toda velocidad y elimina a Widowmaker"
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
          "A fuego lento",
          "Escudo de calor",
          "Mecha corta",
          "Llama hambrienta"
    ],
    counters: {
          "strongAgainst": [
                "ana",
                "ashe",
                "baptiste",
                "doctrine",
                "dva",
                "emre",
                "genji",
                "hanzo",
                "illari",
                "jetpack-cat",
                "junkrat",
                "juno",
                "lifeweaver",
                "lucio",
                "mercy",
                "sierra",
                "soldier76",
                "sombra",
                "widowmaker",
                "wuyang",
                "zenyatta"
          ],
          "weakAgainst": [
                "brigitte",
                "cassidy",
                "doomfist",
                "echo",
                "kiriko",
                "mizuki",
                "moira",
                "pharah",
                "sojourn",
                "torbjorn",
                "zarya"
          ],
          "hardStrongAgainst": [
                "genji"
          ],
          "hardWeakAgainst": [
                "cassidy",
                "mizuki"
          ],
          "strongDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Anran llega a por él enseguida"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Anran es rápido y llega a Ashe, que es lento y no tiene con qué frenarle"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Anran llega a por él enseguida"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "La quemadura continua de Ignición y el burst de Abanicos Zhuque superan el sustento de Cetro eterno"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Llama danzante esquiva sus Micromisiles y la quemadura continua desgasta la armadura de D.Va"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Anran es rápido y llega a Emre, que es lento y no tiene con qué frenarle"
                },
                "genji": {
                      "hard": true,
                      "motivo": "El fuego continuo de Ignición y Llama danzante queman a Genji a través de su Desvío"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Anran es rápido y llega a Hanzo, que es lento y no tiene con qué frenarle"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Anran llega a por él enseguida"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Anran flanquea y Jetpack Cat, con poca vida, no aguanta su ataque"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Anran es rápido y llega a Junkrat, que es lento y no tiene con qué frenarle"
                },
                "juno": {
                      "hard": false,
                      "motivo": "Anran flanquea y Juno, con poca vida, no aguanta su ataque"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Anran llega a por él enseguida"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Anran flanquea y Lúcio, con poca vida, no aguanta su ataque"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Anran llega a por él enseguida"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Anran es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Anran es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "sombra": {
                      "hard": false,
                      "motivo": "Anran flanquea y Sombra, con poca vida, no aguanta su ataque"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Anran es rápido y llega a Widowmaker, que es lento y no tiene con qué frenarle"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Anran llega a por él enseguida"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Anran llega a por él enseguida"
                }
          },
          "weakDetails": {
                "brigitte": {
                      "hard": false,
                      "motivo": "Inspiración, Escudo barrera y Lanzamiento de mangual niegan los flanqueos de Anran sobre los apoyos"
                },
                "cassidy": {
                      "hard": true,
                      "motivo": "Cassidy tiene con qué frenar a Anran cuando va a por él"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Puño cohete aturde a Anran contra muros e interrumpe su presión en espacios cerrados"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Vuelo libre y Bombas lapa castigan a Anran desde ángulos aéreos difíciles de contestar"
                },
                "kiriko": {
                      "hard": false,
                      "motivo": "Suzu de protección limpia al instante la quemadura de Ignición y de su definitiva"
                },
                "mizuki": {
                      "hard": true,
                      "motivo": "Cadena vinculante atrapa a Anran en pleno flanqueo e impide que escape con Carga infernal"
                },
                "moira": {
                      "hard": false,
                      "motivo": "Evanescencia limpia la quemadura de Ignición y el Orbe biótico aguanta el duelo lateral"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pelea desde gran altura fuera del alcance efectivo de Carga infernal y Llama danzante"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Maniobra evasiva escapa de Carga infernal y el Cañón de riel la elimina de un disparo"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a Anran cuando va a por él"
                },
                "zarya": {
                      "hard": false,
                      "motivo": "Las barreras limpian inmediatamente la quemadura de Ignición en Zarya y sus aliados"
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
    description: 'Ninja cibernético con shurikens, desvío de proyectiles ajustado a 1.5s, corte veloz reseteable con bajas y Hoja del Dragón.',
    tier: 'A',
    counterAdvice: "Contra Genji utiliza rayos y armas continuas (Zarya, Mei, Moira, Winston). Con el parche mid-season su Desvío dura solo 1.5s: su ventana de inmunidad es notablemente más corta, prepárate para rematarlo apenas baje la espada.",
    perks: [
          "Cortes fugaces",
          "Sed de dragón",
          "Giro de hoja",
          "Meditación"
    ],
    counters: {
          "strongAgainst": [
                "ana",
                "ashe",
                "baptiste",
                "bastion",
                "emre",
                "hanzo",
                "illari",
                "jetpack-cat",
                "junkrat",
                "juno",
                "lifeweaver",
                "mercy",
                "sierra",
                "sojourn",
                "soldier76",
                "sombra",
                "widowmaker",
                "wuyang",
                "zenyatta"
          ],
          "weakAgainst": [
                "anran",
                "cassidy",
                "echo",
                "freja",
                "lucio",
                "mei",
                "mizuki",
                "moira",
                "pharah",
                "symmetra",
                "torbjorn",
                "zarya"
          ],
          "hardStrongAgainst": [
                "bastion",
                "widowmaker"
          ],
          "hardWeakAgainst": [
                "anran",
                "cassidy",
                "mizuki",
                "moira",
                "symmetra",
                "zarya"
          ],
          "strongDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Genji llega a por él enseguida"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Genji es rápido y llega a Ashe, que es lento y no tiene con qué frenarle"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Genji llega a por él enseguida"
                },
                "bastion": {
                      "hard": true,
                      "motivo": "Desvío devuelve toda la ráfaga del Modo asalto contra el propio Bastion"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Genji es rápido y llega a Emre, que es lento y no tiene con qué frenarle"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Genji es rápido y llega a Hanzo, que es lento y no tiene con qué frenarle"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Genji llega a por él enseguida"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Genji flanquea y Jetpack Cat, con poca vida, no aguanta su ataque"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Genji es rápido y llega a Junkrat, que es lento y no tiene con qué frenarle"
                },
                "juno": {
                      "hard": false,
                      "motivo": "Genji flanquea y Juno, con poca vida, no aguanta su ataque"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Genji llega a por él enseguida"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Genji llega a por él enseguida"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Genji es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Desvío puede devolver el tiro letal del Cañón de riel y Corte veloz persigue su Maniobra evasiva"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Genji es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "sombra": {
                      "hard": false,
                      "motivo": "Genji flanquea y Sombra, con poca vida, no aguanta su ataque"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Genji es rápido y llega a Widowmaker, que es lento y no tiene con qué frenarle"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Genji llega a por él enseguida"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Genji llega a por él enseguida"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": true,
                      "motivo": "El fuego continuo de Ignición y Llama danzante queman a Genji a través de su Desvío"
                },
                "cassidy": {
                      "hard": true,
                      "motivo": "Cassidy tiene con qué frenar a Genji cuando va a por él"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Echo ataca desde el aire y Genji no puede dispararle fácilmente"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Genji no puede dispararle fácilmente"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Lúcio tiene enfrentamiento favorable contra Genji"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Mei tiene enfrentamiento favorable contra Genji"
                },
                "mizuki": {
                      "hard": true,
                      "motivo": "Cadena vinculante atraviesa el juego de flanqueo de Genji y Aura reparadora sostiene a la backline"
                },
                "moira": {
                      "hard": true,
                      "motivo": "Moira tiene enfrentamiento favorable contra Genji"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pharah ataca desde el aire y Genji no puede dispararle fácilmente"
                },
                "symmetra": {
                      "hard": true,
                      "motivo": "Genji es vulnerable a los rayos: no puede desviar el rayo de Symmetra"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a Genji cuando va a por él"
                },
                "zarya": {
                      "hard": true,
                      "motivo": "El rayo láser no puede ser devuelto por el Desvío de Genji"
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
    description: 'Espectro ejecutor con escopetas Hellfire gemelas, robo de vida pasivo, forma fantasmal invulnerable y +25 de salud extra tras el parche mid-season.',
    tier: 'A',
    counterAdvice: "Con sus +25 HP adicionales, Reaper gana duelos a quemarropa con mucha mayor facilidad. Mantente fuera de su rango de escopetas con héroes móviles o de poke (Cassidy, Ashe, Pharah) y no persigas su Paso fantasmal a ciegas.",
    perks: [
          "Siega de almas",
          "Espectro persistente",
          "Traslación sombría",
          "Dedo suelto"
    ],
    counters: {
          "strongAgainst": [
                "ana",
                "baptiste",
                "illari",
                "jetpack-cat",
                "junkrat",
                "juno",
                "lifeweaver",
                "lucio",
                "mercy",
                "moira",
                "sierra",
                "soldier76",
                "sombra",
                "widowmaker",
                "winston",
                "wuyang",
                "zenyatta"
          ],
          "weakAgainst": [
                "ashe",
                "cassidy",
                "echo",
                "emre",
                "freja",
                "hanzo",
                "pharah"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "cassidy"
          ],
          "strongDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Reaper llega a por él enseguida"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Reaper llega a por él enseguida"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Reaper llega a por él enseguida"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Reaper flanquea y Jetpack Cat, con poca vida, no aguanta su ataque"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Reaper es rápido y llega a Junkrat, que es lento y no tiene con qué frenarle"
                },
                "juno": {
                      "hard": false,
                      "motivo": "Reaper flanquea y Juno, con poca vida, no aguanta su ataque"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Reaper llega a por él enseguida"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Reaper flanquea y Lúcio, con poca vida, no aguanta su ataque"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Reaper llega a por él enseguida"
                },
                "moira": {
                      "hard": false,
                      "motivo": "Reaper flanquea y Moira, con poca vida, no aguanta su ataque"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Reaper es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Reaper es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "sombra": {
                      "hard": false,
                      "motivo": "Reaper flanquea y Sombra, con poca vida, no aguanta su ataque"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Reaper es rápido y llega a Widowmaker, que es lento y no tiene con qué frenarle"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Reaper tiene enfrentamiento favorable contra Winston"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Reaper llega a por él enseguida"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Reaper llega a por él enseguida"
                }
          },
          "weakDetails": {
                "ashe": {
                      "hard": false,
                      "motivo": "Mantiene distancia con Recortada y castiga la aproximación lenta de Reaper"
                },
                "cassidy": {
                      "hard": true,
                      "motivo": "Con su daño a media distancia y su granada neutraliza sus habilidades de movilidad"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Echo ataca desde el aire y Reaper no puede dispararle fácilmente"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Ralentiza y mantiene a raya la entrada corta de Reaper antes de que llegue a quemarropa"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Reaper no puede dispararle fácilmente"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Hanzo hace spam de daño desde lejos y castiga a un objetivo tan grande como Reaper"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pharah ataca desde el aire y Reaper no puede dispararle fácilmente"
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
          "Instinto de supervivencia",
          "Máquina X",
          "Repostar",
          "Caras de la muerte"
    ],
    counters: {
          "strongAgainst": [
                "ana",
                "ashe",
                "baptiste",
                "emre",
                "hanzo",
                "illari",
                "jetpack-cat",
                "junkrat",
                "juno",
                "lifeweaver",
                "lucio",
                "mercy",
                "sierra",
                "sojourn",
                "soldier76",
                "sombra",
                "widowmaker",
                "winston",
                "wrecking-ball",
                "wuyang",
                "zenyatta"
          ],
          "weakAgainst": [
                "brigitte",
                "cassidy",
                "echo",
                "mizuki",
                "moira",
                "pharah",
                "torbjorn",
                "zarya"
          ],
          "hardStrongAgainst": [
                "widowmaker"
          ],
          "hardWeakAgainst": [
                "cassidy",
                "mizuki"
          ],
          "strongDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Shion llega a por él enseguida"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Shion es rápido y llega a Ashe, que es lento y no tiene con qué frenarle"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Shion llega a por él enseguida"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Shion es rápido y llega a Emre, que es lento y no tiene con qué frenarle"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Shion es rápido y llega a Hanzo, que es lento y no tiene con qué frenarle"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Shion llega a por él enseguida"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Shion flanquea y Jetpack Cat, con poca vida, no aguanta su ataque"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Shion es rápido y llega a Junkrat, que es lento y no tiene con qué frenarle"
                },
                "juno": {
                      "hard": false,
                      "motivo": "Shion flanquea y Juno, con poca vida, no aguanta su ataque"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Shion llega a por él enseguida"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Shion flanquea y Lúcio, con poca vida, no aguanta su ataque"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Shion llega a por él enseguida"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Shion es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Cierra distancia rápidamente y castiga los 225 de salud de Sojourn tras gastar su deslizamiento"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Shion es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "sombra": {
                      "hard": false,
                      "motivo": "Shion flanquea y Sombra, con poca vida, no aguanta su ataque"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Shion es rápido y llega a Widowmaker, que es lento y no tiene con qué frenarle"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Shion tiene enfrentamiento favorable contra Winston"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": "Shion tiene enfrentamiento favorable contra Wrecking Ball"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Shion llega a por él enseguida"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Shion llega a por él enseguida"
                }
          },
          "weakDetails": {
                "brigitte": {
                      "hard": false,
                      "motivo": "Protege a su otro apoyo con Kit de reparación y empuja a Shion lejos con Lanzamiento de mangual"
                },
                "cassidy": {
                      "hard": true,
                      "motivo": "Cassidy tiene con qué frenar a Shion cuando va a por él"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Superioridad aérea con Vuelo y Haz enfocado para rematar a Shion tras gastar Evasión"
                },
                "mizuki": {
                      "hard": true,
                      "motivo": "Cadena vinculante frena en seco las entradas rápidas de Shion sobre la retaguardia"
                },
                "moira": {
                      "hard": false,
                      "motivo": "Consistencia de Rayo biótico y Orbe sanador desgastan las entradas de Shion"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Opera desde el cielo lejos de las Pistolas Kira de corta distancia de Shion"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a Shion cuando va a por él"
                },
                "zarya": {
                      "hard": false,
                      "motivo": "Las barreras proyectadas salvan al objetivo de la Ejecución de Shion y cargan energía"
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
          "Regeneración temporal",
          "Recarga cinética",
          "Packs de traslación",
          "Entramado cuántico"
    ],
    counters: {
          "strongAgainst": [
                "ana",
                "ashe",
                "baptiste",
                "doctrine",
                "emre",
                "hanzo",
                "illari",
                "jetpack-cat",
                "junkrat",
                "juno",
                "lifeweaver",
                "lucio",
                "mercy",
                "sierra",
                "sojourn",
                "soldier76",
                "sombra",
                "widowmaker",
                "wrecking-ball",
                "wuyang",
                "zenyatta"
          ],
          "weakAgainst": [
                "brigitte",
                "cassidy",
                "kiriko",
                "mizuki",
                "moira",
                "pharah",
                "torbjorn"
          ],
          "hardStrongAgainst": [
                "widowmaker"
          ],
          "hardWeakAgainst": [
                "brigitte",
                "cassidy",
                "mizuki",
                "torbjorn"
          ],
          "strongDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Tracer llega a por él enseguida"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Tracer es rápido y llega a Ashe, que es lento y no tiene con qué frenarle"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Tracer llega a por él enseguida"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Alta movilidad lateral y Bomba de pulsos superan la capacidad de reacción de Doctrine"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Tracer es rápido y llega a Emre, que es lento y no tiene con qué frenarle"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Tracer es rápido y llega a Hanzo, que es lento y no tiene con qué frenarle"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Tracer llega a por él enseguida"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Tracer flanquea y Jetpack Cat, con poca vida, no aguanta su ataque"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Tracer es rápido y llega a Junkrat, que es lento y no tiene con qué frenarle"
                },
                "juno": {
                      "hard": false,
                      "motivo": "Tracer flanquea y Juno, con poca vida, no aguanta su ataque"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Tracer llega a por él enseguida"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Tracer flanquea y Lúcio, con poca vida, no aguanta su ataque"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Tracer llega a por él enseguida"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Tracer es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Con 225 de vida, Sojourn sufre en duelos cercanos contra los parpadeos impredecibles de Tracer"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Tracer es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "sombra": {
                      "hard": false,
                      "motivo": "Tracer flanquea y Sombra, con poca vida, no aguanta su ataque"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Tracer es rápido y llega a Widowmaker, que es lento y no tiene con qué frenarle"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": "Tracer tiene enfrentamiento favorable contra Wrecking Ball"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Tracer llega a por él enseguida"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Tracer llega a por él enseguida"
                }
          },
          "weakDetails": {
                "brigitte": {
                      "hard": true,
                      "motivo": "Escudo barrera, Inspiración y mangual impiden a Tracer eliminar apoyos y la fuerzan a regresar"
                },
                "cassidy": {
                      "hard": true,
                      "motivo": "Cassidy tiene con qué frenar a Tracer cuando va a por él"
                },
                "kiriko": {
                      "hard": false,
                      "motivo": "Un Kunái crítico más golpe cuerpo a cuerpo obliga a Tracer a gastar Regresión al instante"
                },
                "mizuki": {
                      "hard": true,
                      "motivo": "Cadena vinculante inmoviliza a Tracer y anula su Traslación para asegurar la baja"
                },
                "moira": {
                      "hard": false,
                      "motivo": "Rayo biótico de fijación constante castiga los 175 de vida de Tracer y Evanescencia limpia su bomba"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Vuela totalmente fuera del alcance de las Pistolas de pulsos mientras la presiona con daño en área"
                },
                "torbjorn": {
                      "hard": true,
                      "motivo": "Torbjörn tiene con qué frenar a Tracer cuando va a por él"
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
          "Filo extra",
          "Tormenta enfurecida",
          "Golpe drenante",
          "Implacable"
    ],
    counters: {
          "strongAgainst": [
                "ashe",
                "baptiste",
                "dmon",
                "domina",
                "dva",
                "emre",
                "hanzo",
                "hazard",
                "illari",
                "jetpack-cat",
                "junker-queen",
                "junkrat",
                "juno",
                "lifeweaver",
                "lucio",
                "mercy",
                "moira",
                "orisa",
                "ramattra",
                "reinhardt",
                "roadhog",
                "sierra",
                "sigma",
                "soldier76",
                "sombra",
                "widowmaker",
                "winston",
                "wuyang",
                "zarya",
                "zenyatta"
          ],
          "weakAgainst": [
                "ana",
                "cassidy",
                "echo",
                "freja",
                "pharah",
                "torbjorn"
          ],
          "hardStrongAgainst": [
                "dmon",
                "dva",
                "ramattra"
          ],
          "hardWeakAgainst": [
                "cassidy",
                "echo",
                "pharah"
          ],
          "strongDetails": {
                "ashe": {
                      "hard": false,
                      "motivo": "Vendetta es rápido y llega a Ashe, que es lento y no tiene con qué frenarle"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Vendetta llega a por él enseguida"
                },
                "dmon": {
                      "hard": true,
                      "motivo": "Le da espadazos constantemente y la hace sufrir mucho"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Vendetta le da espadazos sin parar a Domina, que es demasiado lento para quitársela de encima"
                },
                "dva": {
                      "hard": true,
                      "motivo": "La defensa de D.Va no para el rayo ni los golpes de Vendetta"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Vendetta es rápido y llega a Emre, que es lento y no tiene con qué frenarle"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Vendetta es rápido y llega a Hanzo, que es lento y no tiene con qué frenarle"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "La defensa de Hazard no para el rayo ni los golpes de Vendetta"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Vendetta llega a por él enseguida"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Vendetta flanquea y Jetpack Cat, con poca vida, no aguanta su ataque"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "La defensa de Junker Queen no para el rayo ni los golpes de Vendetta"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Vendetta es rápido y llega a Junkrat, que es lento y no tiene con qué frenarle"
                },
                "juno": {
                      "hard": false,
                      "motivo": "Vendetta flanquea y Juno, con poca vida, no aguanta su ataque"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Vendetta llega a por él enseguida"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Vendetta flanquea y Lúcio, con poca vida, no aguanta su ataque"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Vendetta llega a por él enseguida"
                },
                "moira": {
                      "hard": false,
                      "motivo": "Vendetta flanquea y Moira, con poca vida, no aguanta su ataque"
                },
                "orisa": {
                      "hard": false,
                      "motivo": "Vendetta le da espadazos sin parar a Orisa, que es demasiado lento para quitársela de encima"
                },
                "ramattra": {
                      "hard": true,
                      "motivo": "Vendetta le da espadazos sin parar a Ramattra, que es demasiado lento para quitársela de encima"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Vendetta le da espadazos sin parar a Reinhardt, que es demasiado lento para quitársela de encima"
                },
                "roadhog": {
                      "hard": false,
                      "motivo": "Vendetta le da espadazos sin parar a Roadhog, que es demasiado lento para quitársela de encima"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Vendetta es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Vendetta le da espadazos sin parar a Sigma, que es demasiado lento para quitársela de encima"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Vendetta es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "sombra": {
                      "hard": false,
                      "motivo": "Vendetta flanquea y Sombra, con poca vida, no aguanta su ataque"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Vendetta es rápido y llega a Widowmaker, que es lento y no tiene con qué frenarle"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Vendetta tiene enfrentamiento favorable contra Winston"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Vendetta llega a por él enseguida"
                },
                "zarya": {
                      "hard": false,
                      "motivo": "Vendetta le da espadazos sin parar a Zarya, que es demasiado lento para quitársela de encima"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Vendetta llega a por él enseguida"
                }
          },
          "weakDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Dardo sedante castiga la entrada predecible de Corte volador de Vendetta"
                },
                "cassidy": {
                      "hard": true,
                      "motivo": "Granada cegadora detiene Arremetida y Corte volador dejándola vendida a corta distancia"
                },
                "echo": {
                      "hard": true,
                      "motivo": "Echo ataca desde el aire y Vendetta no puede dispararle fácilmente"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Vendetta no puede dispararle fácilmente"
                },
                "pharah": {
                      "hard": true,
                      "motivo": "Pharah ataca desde el aire y Vendetta no puede dispararle fácilmente"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Torbjörn tiene enfrentamiento favorable contra Vendetta"
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
          "Excavación profunda",
          "Emoción de la excavación",
          "Extensor inteligente",
          "De barro hasta arriba"
    ],
    counters: {
          "strongAgainst": [
                "ana",
                "ashe",
                "baptiste",
                "emre",
                "hanzo",
                "illari",
                "juno",
                "lifeweaver",
                "lucio",
                "moira",
                "sierra",
                "soldier76",
                "sombra",
                "widowmaker",
                "wuyang",
                "zenyatta"
          ],
          "weakAgainst": [
                "cassidy",
                "echo",
                "freja",
                "jetpack-cat",
                "junkrat",
                "mercy",
                "mizuki",
                "pharah"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "cassidy"
          ],
          "strongDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Venture llega a por él enseguida"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Venture es rápido y llega a Ashe, que es lento y no tiene con qué frenarle"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Venture llega a por él enseguida"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Venture es rápido y llega a Emre, que es lento y no tiene con qué frenarle"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Venture es rápido y llega a Hanzo, que es lento y no tiene con qué frenarle"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Venture llega a por él enseguida"
                },
                "juno": {
                      "hard": false,
                      "motivo": "Venture flanquea y Juno, con poca vida, no aguanta su ataque"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Venture llega a por él enseguida"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Venture flanquea y Lúcio, con poca vida, no aguanta su ataque"
                },
                "moira": {
                      "hard": false,
                      "motivo": "Venture flanquea y Moira, con poca vida, no aguanta su ataque"
                },
                "sierra": {
                      "hard": false,
                      "motivo": "Venture es rápido y llega a Sierra, que es lento y no tiene con qué frenarle"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Venture es rápido y llega a Soldier: 76, que es lento y no tiene con qué frenarle"
                },
                "sombra": {
                      "hard": false,
                      "motivo": "Venture flanquea y Sombra, con poca vida, no aguanta su ataque"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Venture es rápido y llega a Widowmaker, que es lento y no tiene con qué frenarle"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Venture llega a por él enseguida"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Venture llega a por él enseguida"
                }
          },
          "weakDetails": {
                "cassidy": {
                      "hard": true,
                      "motivo": "Con su daño a media distancia y su granada neutraliza sus habilidades de movilidad"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Echo ataca desde el aire y Venture no puede dispararle fácilmente"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Venture no puede dispararle fácilmente"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Vuelo constante ignora las emboscadas subterráneas de Venture y protege a su otro apoyo"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Junkrat tiene enfrentamiento favorable contra Venture"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Vuelo vertical continuo evade el combo subterráneo de corta distancia de Venture"
                },
                "mizuki": {
                      "hard": false,
                      "motivo": "Cadena vinculante captura a Venture al emerger y Aura reparadora absorbe su combo"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pharah ataca desde el aire y Venture no puede dispararle fácilmente"
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
          "Bomba inteligente",
          "Modo recarga",
          "Explosivos Lindholm",
          "Autorreparación"
    ],
    counters: {
          "strongAgainst": [
                "brigitte",
                "dmon",
                "domina",
                "echo",
                "freja",
                "junker-queen",
                "mauga",
                "orisa",
                "ramattra",
                "reinhardt",
                "winston",
                "zarya"
          ],
          "weakAgainst": [
                "ana",
                "dva",
                "genji",
                "hanzo",
                "junkrat",
                "pharah",
                "sigma",
                "sojourn",
                "widowmaker",
                "zenyatta"
          ],
          "hardStrongAgainst": [
                "reinhardt"
          ],
          "hardWeakAgainst": [
                "ana",
                "genji",
                "sigma",
                "sojourn"
          ],
          "strongDetails": {
                "brigitte": {
                      "hard": false,
                      "motivo": "Modo asalto pulveriza el escudo de Brigitte en una fracción de segundo"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Bastion rompe enseguida el escudo de D.Mon y le deja al descubierto"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Bastion rompe enseguida el escudo de Domina y le deja al descubierto"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Bastion es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Bastion es un DPS hitscan y castiga a Freja cuando está en el aire"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Bastion tiene enfrentamiento favorable contra Junker Queen"
                },
                "mauga": {
                      "hard": false,
                      "motivo": "Bastion tiene enfrentamiento favorable contra Mauga"
                },
                "orisa": {
                      "hard": false,
                      "motivo": "Bastion rompe enseguida el escudo de Orisa y le deja al descubierto"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Bastion rompe enseguida el escudo de Ramattra y le deja al descubierto"
                },
                "reinhardt": {
                      "hard": true,
                      "motivo": "Bastion rompe enseguida el escudo de Reinhardt y le deja al descubierto"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Bastion rompe enseguida el escudo de Winston y le deja al descubierto"
                },
                "zarya": {
                      "hard": false,
                      "motivo": "Bastion tiene enfrentamiento favorable contra Zarya"
                }
          },
          "weakDetails": {
                "ana": {
                      "hard": true,
                      "motivo": "Dardo sedante y Granada biótica castigan de inmediato la enorme hitbox lenta de Bastion en Modo asalto"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Matriz de defensa anula varios segundos clave de su Modo asalto mientras su equipo lo enfoca"
                },
                "genji": {
                      "hard": true,
                      "motivo": "Desvío devuelve toda la ráfaga del Modo asalto contra el propio Bastion"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Hanzo hace spam de daño desde lejos y castiga a un objetivo tan grande como Bastion"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Bombardea la posición lenta de Bastion usando parábolas detrás de cobertura"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Dispara cohetes desde ángulos lejanos usando coberturas aéreas contra la lentitud de Bastion"
                },
                "sigma": {
                      "hard": true,
                      "motivo": "Agarre cinético absorbe todo el Modo asalto convirtiéndolo en sobreescudo masivo"
                },
                "sojourn": {
                      "hard": true,
                      "motivo": "Carga el 100% del Cañón de riel gratis en el enorme cuerpo de Bastion y lo castiga desde cobertura"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Castiga desde larguísima distancia donde la dispersión de Bastion pierde efectividad"
                },
                "zenyatta": {
                      "hard": false,
                      "motivo": "Orbe de discordia y voleas cargadas derriten los 350 de salud de Bastion apenas asoma"
                }
          }
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
          "Disrupción sónica",
          "Furia del dragón",
          "Flecha de escarcha",
          "Flechas de dispersión"
    ],
    counters: {
          "strongAgainst": [
                "bastion",
                "cassidy",
                "dmon",
                "doctrine",
                "domina",
                "kiriko",
                "mei",
                "mizuki",
                "orisa",
                "ramattra",
                "reaper",
                "sigma",
                "symmetra",
                "torbjorn",
                "winston"
          ],
          "weakAgainst": [
                "anran",
                "genji",
                "reinhardt",
                "shion",
                "sojourn",
                "tracer",
                "vendetta",
                "venture"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "bastion": {
                      "hard": false,
                      "motivo": "Hanzo hace spam de daño desde lejos y castiga a un objetivo tan grande como Bastion"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "La hitbox ancha y baja movilidad de Cassidy facilitan impactos críticos de Hanzo desde lejos"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Hanzo rompe enseguida el escudo de D.Mon y le deja al descubierto"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Un impacto crítico de Arco de tormenta elimina a Doctrine antes de activar Liberación"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Hanzo rompe enseguida el escudo de Domina y le deja al descubierto"
                },
                "kiriko": {
                      "hard": false,
                      "motivo": "Las flechas letales eliminan a Kiriko instantáneamente antes de que pueda reaccionar con Suzu"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Hanzo hace spam de daño desde lejos y castiga a un objetivo tan grande como Mei"
                },
                "mizuki": {
                      "hard": false,
                      "motivo": "Poca movilidad de Mizuki la convierte en blanco fácil para flechas cargadas a distancia"
                },
                "orisa": {
                      "hard": false,
                      "motivo": "Hanzo rompe enseguida el escudo de Orisa y le deja al descubierto"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Hanzo rompe enseguida el escudo de Ramattra y le deja al descubierto"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Hanzo hace spam de daño desde lejos y castiga a un objetivo tan grande como Reaper"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Hanzo rompe enseguida el escudo de Sigma y le deja al descubierto"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "Hanzo hace spam de daño desde lejos y castiga a un objetivo tan grande como Symmetra"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Hanzo hace spam de daño desde lejos y castiga a un objetivo tan grande como Torbjörn"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Hanzo rompe enseguida el escudo de Winston y le deja al descubierto"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Anran es rápido y llega a Hanzo, que es lento y no tiene con qué frenarle"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Genji es rápido y llega a Hanzo, que es lento y no tiene con qué frenarle"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Protege a su equipo de flechas letales con 1500+ de escudo en cuellos de botella"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Shion es rápido y llega a Hanzo, que es lento y no tiene con qué frenarle"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn es rápido y llega a Hanzo, que es lento y no tiene con qué frenarle"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Tracer es rápido y llega a Hanzo, que es lento y no tiene con qué frenarle"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta es rápido y llega a Hanzo, que es lento y no tiene con qué frenarle"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Venture es rápido y llega a Hanzo, que es lento y no tiene con qué frenarle"
                }
          }
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
          "Nitro",
          "¡Bueeen viaje!",
          "Reciclaje de mina",
          "Cañón de lanzamiento"
    ],
    counters: {
          "strongAgainst": [
                "bastion",
                "brigitte",
                "domina",
                "ramattra",
                "reinhardt",
                "sigma",
                "symmetra",
                "torbjorn",
                "venture"
          ],
          "weakAgainst": [
                "anran",
                "ashe",
                "baptiste",
                "echo",
                "freja",
                "genji",
                "jetpack-cat",
                "juno",
                "mercy",
                "pharah",
                "reaper",
                "shion",
                "sojourn",
                "soldier76",
                "tracer",
                "vendetta",
                "zarya"
          ],
          "hardStrongAgainst": [
                "brigitte",
                "reinhardt"
          ],
          "hardWeakAgainst": [
                "zarya"
          ],
          "strongDetails": {
                "bastion": {
                      "hard": false,
                      "motivo": "Bombardea la posición lenta de Bastion usando parábolas detrás de cobertura"
                },
                "brigitte": {
                      "hard": true,
                      "motivo": "Las granadas rompen enseguida su Escudo barrera y la castigan en espacios cerrados"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Destruye rápidamente la Matriz de barrera de Domina con spam explosivo en cuellos de botella"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "El Cepo frena en seco el avance en Forma de némesis de Ramattra y las minas lo desplazan"
                },
                "reinhardt": {
                      "hard": true,
                      "motivo": "Rompe el Campo protector de Reinhardt a gran velocidad y su Mina lo vuela por losaires"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Rebota granadas tras paredes y rompe la Barrera experimental sin exponerse a línea de mira"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "Limpia nidos de torretas y Teletransportador con daño explosivo en área"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Destruye la torreta de Torbjörn desde detrás de esquinas sin recibir ni un disparo"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Junkrat tiene enfrentamiento favorable contra Venture"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Anran es rápido y llega a Junkrat, que es lento y no tiene con qué frenarle"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Domina desde alturas lejanas fuera del rebote de las granadas de Junkrat"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Exobotas permiten subir a alturas seguras lejos de las granadas y Campo salva de Rueda explosiva"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Echo ataca desde el aire y Junkrat no puede dispararle fácilmente"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Junkrat no puede dispararle fácilmente"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Genji es rápido y llega a Junkrat, que es lento y no tiene con qué frenarle"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Opera desde el aire lejos del Cepo y el spam de granadas terrestres"
                },
                "juno": {
                      "hard": false,
                      "motivo": "Planeo elevado mantiene a Juno fuera del spam terrestre de Junkrat"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Vuela constantemente fuera del alcance de las granadas y revierte bajas aisladas con Resurrección"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pharah ataca desde el aire y Junkrat no puede dispararle fácilmente"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Reaper es rápido y llega a Junkrat, que es lento y no tiene con qué frenarle"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Shion es rápido y llega a Junkrat, que es lento y no tiene con qué frenarle"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn es rápido y llega a Junkrat, que es lento y no tiene con qué frenarle"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Toma alturas a media distancia lejos de las trampas y granadas de Junkrat"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Tracer es rápido y llega a Junkrat, que es lento y no tiene con qué frenarle"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta es rápido y llega a Junkrat, que es lento y no tiene con qué frenarle"
                },
                "zarya": {
                      "hard": true,
                      "motivo": "El spam de granadas de Junkrat regala el 100% de energía constante a las barreras de Zarya"
                }
          }
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
          "Pista de patinaje",
          "Propulsión glacial",
          "Criogenización",
          "Criotormenta"
    ],
    counters: {
          "strongAgainst": [
                "dva",
                "genji",
                "hazard",
                "junker-queen",
                "reinhardt",
                "sigma"
          ],
          "weakAgainst": [
                "ashe",
                "echo",
                "emre",
                "freja",
                "hanzo",
                "jetpack-cat",
                "juno",
                "kiriko",
                "lifeweaver",
                "mercy",
                "pharah",
                "ramattra",
                "wuyang"
          ],
          "hardStrongAgainst": [
                "reinhardt"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "dva": {
                      "hard": false,
                      "motivo": "La defensa de D.Va no para el rayo ni los golpes de Mei"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Mei tiene enfrentamiento favorable contra Genji"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "La defensa de Hazard no para el rayo ni los golpes de Mei"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "La defensa de Junker Queen no para el rayo ni los golpes de Mei"
                },
                "reinhardt": {
                      "hard": true,
                      "motivo": "Mei es counter duro directo de Reinhardt"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Mei tiene enfrentamiento favorable contra Sigma"
                }
          },
          "weakDetails": {
                "ashe": {
                      "hard": false,
                      "motivo": "Dinamita quema por encima del Muro de hielo y Víbora castiga a Mei a distancia"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Echo ataca desde el aire y Mei no puede dispararle fácilmente"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Presiona desde rango medio fuera del alcance del rayo endotérmico de Mei"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Mei no puede dispararle fácilmente"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Hanzo hace spam de daño desde lejos y castiga a un objetivo tan grande como Mei"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Extrae aliados atrapados por Muro de hielo usando Línea de vida desde el aire"
                },
                "juno": {
                      "hard": false,
                      "motivo": "Impulso de planeo e Hiperanillo evitan los cierres con Muro de hielo de Mei"
                },
                "kiriko": {
                      "hard": false,
                      "motivo": "Suzu salva a los compañeros atrapados dentro de Ventisca justo antes de congelarse"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Agarre vital y Plataforma petaloide rescatan aliados encerrados por Muro de hielo o Ventisca"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Ángel de la guarda escapa fácilmente del rango corto y la ralentización de Mei"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pharah ataca desde el aire y Mei no puede dispararle fácilmente"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Suficiente aguante en Forma de némesis y presión constante contra posiciones cerradas de Mei"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Empuja a Mei lejos del equipo y desgasta sus posiciones cerradas con orbes de agua"
                }
          }
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
          "Capacidad de vigilancia",
          "Alineamiento perfecto",
          "Barrera flotante",
          "Batería de escudo"
    ],
    counters: {
          "strongAgainst": [
                "brigitte",
                "dva",
                "genji",
                "hazard",
                "junker-queen",
                "orisa"
          ],
          "weakAgainst": [
                "ashe",
                "echo",
                "emre",
                "freja",
                "hanzo",
                "jetpack-cat",
                "junkrat",
                "juno",
                "mercy",
                "pharah",
                "soldier76",
                "sombra",
                "wuyang"
          ],
          "hardStrongAgainst": [
                "genji"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "brigitte": {
                      "hard": false,
                      "motivo": "Carga su Proyector de fotones contra el escudo de Brigitte hasta nivel máximo"
                },
                "dva": {
                      "hard": false,
                      "motivo": "La defensa de D.Va no para el rayo ni los golpes de Symmetra"
                },
                "genji": {
                      "hard": true,
                      "motivo": "Genji es vulnerable a los rayos: no puede desviar el rayo de Symmetra"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "La defensa de Hazard no para el rayo ni los golpes de Symmetra"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "La defensa de Junker Queen no para el rayo ni los golpes de Symmetra"
                },
                "orisa": {
                      "hard": false,
                      "motivo": "Symmetra tiene enfrentamiento favorable contra Orisa"
                }
          },
          "weakDetails": {
                "ashe": {
                      "hard": false,
                      "motivo": "Elimina torretas y presiona a Symmetra mucho antes de que entre en rango de rayo"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Echo ataca desde el aire y Symmetra no puede dispararle fácilmente"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Destruye despliegues de Symmetra y gana el duelo a media distancia"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Symmetra no puede dispararle fácilmente"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Hanzo hace spam de daño desde lejos y castiga a un objetivo tan grande como Symmetra"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Evita torretas y rayo corto volando mientras reposiciona compañeros"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Limpia nidos de torretas y Teletransportador con daño explosivo en área"
                },
                "juno": {
                      "hard": false,
                      "motivo": "Rotaciones rápidas con Hiperanillo superan las zonas estáticas de torretas de Symmetra"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Movilidad aérea constante lejos del rayo corto y las torretas de Symmetra"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pharah ataca desde el aire y Symmetra no puede dispararle fácilmente"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Rompe torretas al instante y mantiene la distancia con Sprint frente al rayo de Symmetra"
                },
                "sombra": {
                      "hard": false,
                      "motivo": "El PEM de Sombra anula por completo su ulti"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Destruye despliegues de Symmetra con explosiones de agua y frena su avance corto"
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
          "Hora del martillo",
          "Precalentado",
          "Pernos de anclaje",
          "Torreta sobrecargada"
    ],
    counters: {
          "strongAgainst": [
                "anran",
                "dmon",
                "domina",
                "doomfist",
                "dva",
                "genji",
                "hazard",
                "orisa",
                "ramattra",
                "reinhardt",
                "shion",
                "sojourn",
                "tracer",
                "vendetta",
                "winston",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "echo",
                "freja",
                "hanzo",
                "junkrat",
                "pharah",
                "sigma",
                "widowmaker",
                "wuyang"
          ],
          "hardStrongAgainst": [
                "hazard",
                "tracer"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a Anran cuando va a por él"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a D.Mon cuando se le tira encima"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Torbjörn rompe enseguida el escudo de Domina y le deja al descubierto"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a Doomfist cuando se le tira encima"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a D.Va cuando se le tira encima"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a Genji cuando va a por él"
                },
                "hazard": {
                      "hard": true,
                      "motivo": "Torbjörn tiene con qué frenar a Hazard cuando se le tira encima"
                },
                "orisa": {
                      "hard": false,
                      "motivo": "Torbjörn rompe enseguida el escudo de Orisa y le deja al descubierto"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Torbjörn rompe enseguida el escudo de Ramattra y le deja al descubierto"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Torbjörn rompe enseguida el escudo de Reinhardt y le deja al descubierto"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a Shion cuando va a por él"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a Sojourn cuando va a por él"
                },
                "tracer": {
                      "hard": true,
                      "motivo": "Torbjörn tiene con qué frenar a Tracer cuando va a por él"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Torbjörn tiene enfrentamiento favorable contra Vendetta"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a Winston cuando se le tira encima"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": "Torbjörn tiene con qué frenar a Wrecking Ball cuando se le tira encima"
                }
          },
          "weakDetails": {
                "echo": {
                      "hard": false,
                      "motivo": "Echo ataca desde el aire y Torbjörn no puede dispararle fácilmente"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Torbjörn no puede dispararle fácilmente"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Hanzo hace spam de daño desde lejos y castiga a un objetivo tan grande como Torbjörn"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Destruye la torreta de Torbjörn desde detrás de esquinas sin recibir ni un disparo"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pharah ataca desde el aire y Torbjörn no puede dispararle fácilmente"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Esferas rebotadas destruyen la torreta en esquinas y Agarre absorbe Sobrecarga"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Destruye su torreta desde lejos y aprovecha la gran cabeza crítica de Torbjörn"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Los orbes de agua castigan posiciones estáticas y la torreta de Torbjörn"
                }
          }
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
          "Municiones aéreas",
          "Escáner parcial",
          "Andanada total",
          "Carga concentrada"
    ],
    counters: {
          "strongAgainst": [
                "anran",
                "brigitte",
                "dmon",
                "doomfist",
                "genji",
                "hazard",
                "junker-queen",
                "junkrat",
                "mei",
                "mizuki",
                "ramattra",
                "reaper",
                "reinhardt",
                "shion",
                "sigma",
                "symmetra",
                "torbjorn",
                "vendetta",
                "venture"
          ],
          "weakAgainst": [
                "ashe",
                "baptiste",
                "bastion",
                "cassidy",
                "doctrine",
                "emre",
                "freja",
                "illari",
                "sojourn",
                "soldier76",
                "widowmaker"
          ],
          "hardStrongAgainst": [
                "brigitte",
                "vendetta"
          ],
          "hardWeakAgainst": [
                "widowmaker"
          ],
          "strongDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Vuelo libre y Bombas lapa castigan a Anran desde ángulos aéreos difíciles de contestar"
                },
                "brigitte": {
                      "hard": true,
                      "motivo": "Vuelo constante y Bombas lapa destruyen el escudo de Brigitte sin exponerse"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Echo tiene enfrentamiento favorable contra D.Mon"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Echo tiene enfrentamiento favorable contra Doomfist"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Echo ataca desde el aire y Genji no puede dispararle fácilmente"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Echo tiene enfrentamiento favorable contra Hazard"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Echo tiene enfrentamiento favorable contra Junker Queen"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Echo ataca desde el aire y Junkrat no puede dispararle fácilmente"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Echo ataca desde el aire y Mei no puede dispararle fácilmente"
                },
                "mizuki": {
                      "hard": false,
                      "motivo": "Ataca desde ángulos verticales fuera del rango efectivo de Cadena vinculante"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Echo tiene enfrentamiento favorable contra Ramattra"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Echo ataca desde el aire y Reaper no puede dispararle fácilmente"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Echo tiene enfrentamiento favorable contra Reinhardt"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Superioridad aérea con Vuelo y Haz enfocado para rematar a Shion tras gastar Evasión"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Echo tiene enfrentamiento favorable contra Sigma"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "Echo ataca desde el aire y Symmetra no puede dispararle fácilmente"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Echo ataca desde el aire y Torbjörn no puede dispararle fácilmente"
                },
                "vendetta": {
                      "hard": true,
                      "motivo": "Echo ataca desde el aire y Vendetta no puede dispararle fácilmente"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Echo ataca desde el aire y Venture no puede dispararle fácilmente"
                }
          },
          "weakDetails": {
                "ashe": {
                      "hard": false,
                      "motivo": "Ashe es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Presión hitscan precisa contra el vuelo de Echo y Exobotas para disputar alturas"
                },
                "bastion": {
                      "hard": false,
                      "motivo": "Bastion es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Cassidy es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Como Illari, castiga a los voladores con su disparo a media distancia"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Emre es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Freja es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Disparos cargados de Rifle solar castigan a Echo cada vez que asoma en el aire"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Soldier: 76 es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Widowmaker es un DPS hitscan y castiga a Echo cuando está en el aire"
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
          "Andanada implacable",
          "Potenciador de impulso",
          "Recuperación aérea",
          "Vientos crecientes"
    ],
    counters: {
          "strongAgainst": [
                "brigitte",
                "cassidy",
                "dmon",
                "echo",
                "genji",
                "hazard",
                "junker-queen",
                "junkrat",
                "mei",
                "mizuki",
                "orisa",
                "pharah",
                "reaper",
                "symmetra",
                "torbjorn",
                "vendetta",
                "venture"
          ],
          "weakAgainst": [
                "ashe",
                "baptiste",
                "bastion",
                "doctrine",
                "emre",
                "illari",
                "sojourn",
                "soldier76",
                "widowmaker"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "widowmaker"
          ],
          "strongDetails": {
                "brigitte": {
                      "hard": false,
                      "motivo": "Presión aérea continua con virotes explosivos fuera del alcance de Brigitte"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Ángulos aéreos lejanos con Apuntado castigan la falta de movilidad de Cassidy"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Freja tiene enfrentamiento favorable contra D.Mon"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Freja es un DPS hitscan y castiga a Echo cuando está en el aire"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Genji no puede dispararle fácilmente"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Freja tiene enfrentamiento favorable contra Hazard"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Freja tiene enfrentamiento favorable contra Junker Queen"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Junkrat no puede dispararle fácilmente"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Mei no puede dispararle fácilmente"
                },
                "mizuki": {
                      "hard": false,
                      "motivo": "Virotes explosivos con Apuntado desde el aire superan el alcance defensivo de Mizuki"
                },
                "orisa": {
                      "hard": false,
                      "motivo": "Freja tiene enfrentamiento favorable contra Orisa"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Freja es un DPS hitscan y castiga a Pharah cuando está en el aire"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Reaper no puede dispararle fácilmente"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Symmetra no puede dispararle fácilmente"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Torbjörn no puede dispararle fácilmente"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Vendetta no puede dispararle fácilmente"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Freja ataca desde el aire y Venture no puede dispararle fácilmente"
                }
          },
          "weakDetails": {
                "ashe": {
                      "hard": false,
                      "motivo": "Ashe es un DPS hitscan y castiga a Freja cuando está en el aire"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Disparo hitscan constante que obliga a Freja a bajar del aire y Campo de inmortalidad contra boleadora"
                },
                "bastion": {
                      "hard": false,
                      "motivo": "Bastion es un DPS hitscan y castiga a Freja cuando está en el aire"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Como Illari, castiga a los voladores con su disparo a media distancia"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Emre es un DPS hitscan y castiga a Freja cuando está en el aire"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Rifle solar hitscan compite desde larga distancia contra los saltos aéreos de Freja"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn es un DPS hitscan y castiga a Freja cuando está en el aire"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Soldier: 76 es un DPS hitscan y castiga a Freja cuando está en el aire"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Widowmaker es un DPS hitscan y castiga a Freja cuando está en el aire"
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
          "Fuerza de conmoción",
          "Escudos Helix",
          "Reservas de combustible",
          "Salva de cohetes"
    ],
    counters: {
          "strongAgainst": [
                "anran",
                "bastion",
                "brigitte",
                "doomfist",
                "genji",
                "hazard",
                "junker-queen",
                "junkrat",
                "lucio",
                "mei",
                "mizuki",
                "moira",
                "ramattra",
                "reaper",
                "reinhardt",
                "shion",
                "sigma",
                "symmetra",
                "torbjorn",
                "tracer",
                "vendetta",
                "venture"
          ],
          "weakAgainst": [
                "ashe",
                "baptiste",
                "cassidy",
                "doctrine",
                "emre",
                "freja",
                "illari",
                "sojourn",
                "soldier76",
                "widowmaker"
          ],
          "hardStrongAgainst": [
                "brigitte",
                "mizuki",
                "vendetta"
          ],
          "hardWeakAgainst": [
                "ashe",
                "illari",
                "widowmaker"
          ],
          "strongDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Pelea desde gran altura fuera del alcance efectivo de Carga infernal y Llama danzante"
                },
                "bastion": {
                      "hard": false,
                      "motivo": "Dispara cohetes desde ángulos lejanos usando coberturas aéreas contra la lentitud de Bastion"
                },
                "brigitte": {
                      "hard": true,
                      "motivo": "Daño explosivo desde el cielo que Brigitte es incapaz de alcanzar con su mangual"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Doomfist"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Pharah ataca desde el aire y Genji no puede dispararle fácilmente"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Hazard"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Junker Queen"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Pharah ataca desde el aire y Junkrat no puede dispararle fácilmente"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Lúcio"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Pharah ataca desde el aire y Mei no puede dispararle fácilmente"
                },
                "mizuki": {
                      "hard": true,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Mizuki"
                },
                "moira": {
                      "hard": false,
                      "motivo": "Vuela fuera del alcance del Rayo biótico mientras castiga su posición tras Evanescencia"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Ramattra"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Pharah ataca desde el aire y Reaper no puede dispararle fácilmente"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Reinhardt"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Opera desde el cielo lejos de las Pistolas Kira de corta distancia de Shion"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Sigma"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "Pharah ataca desde el aire y Symmetra no puede dispararle fácilmente"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Pharah ataca desde el aire y Torbjörn no puede dispararle fácilmente"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Vuela totalmente fuera del alcance de las Pistolas de pulsos mientras la presiona con daño en área"
                },
                "vendetta": {
                      "hard": true,
                      "motivo": "Pharah ataca desde el aire y Vendetta no puede dispararle fácilmente"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Pharah ataca desde el aire y Venture no puede dispararle fácilmente"
                }
          },
          "weakDetails": {
                "ashe": {
                      "hard": true,
                      "motivo": "Ashe es un DPS hitscan y castiga a Pharah cuando está en el aire"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Su rifle hitscan de ráfagas castiga a Pharah en el aire mientras Campo de inmortalidad frena Bombardeo"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Cassidy es un DPS hitscan y castiga a Pharah cuando está en el aire"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Como Illari, castiga a los voladores con su disparo a media distancia"
                },
                "emre": {
                      "hard": false,
                      "motivo": "Emre es un DPS hitscan y castiga a Pharah cuando está en el aire"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Freja es un DPS hitscan y castiga a Pharah cuando está en el aire"
                },
                "illari": {
                      "hard": true,
                      "motivo": "Rifle solar hitscan cargado derriba rápidamente a Pharah en pleno vuelo"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Sojourn es un DPS hitscan y castiga a Pharah cuando está en el aire"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Soldier: 76 es un DPS hitscan y castiga a Pharah cuando está en el aire"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Widowmaker es un DPS hitscan y castiga a Pharah cuando está en el aire"
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
    description: 'Francotiradora veterana armada con rifle biótico, granada anti-curación ajustada a 60 de daño, dardo sedante y Nanoestimulante.',
    tier: 'A',
    counterAdvice: "Tras el parche mid-season el daño de su granada bajó de 90 a 60, reduciendo su capacidad de burst solitario. Presiónala con flanqueadores rápidos como Tracer o Sombra, cebo su dardo sedante y oblígala a quemar la granada en autocuración.",
    perks: [
          "Anestesia local",
          "Suero de velocidad",
          "Rebote biótico",
          "Cazarrecompensas"
    ],
    counters: {
          "strongAgainst": [
                "bastion",
                "cassidy",
                "doctrine",
                "doomfist",
                "hazard",
                "junker-queen",
                "mauga",
                "mizuki",
                "moira",
                "roadhog",
                "vendetta",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "anran",
                "dmon",
                "dva",
                "genji",
                "kiriko",
                "reaper",
                "shion",
                "sojourn",
                "tracer",
                "venture",
                "widowmaker",
                "winston"
          ],
          "hardStrongAgainst": [
                "bastion",
                "doctrine",
                "doomfist",
                "junker-queen",
                "mauga",
                "moira",
                "roadhog",
                "wrecking-ball"
          ],
          "hardWeakAgainst": [
                "kiriko"
          ],
          "strongDetails": {
                "bastion": {
                      "hard": true,
                      "motivo": "Dardo sedante y Granada biótica castigan de inmediato la enorme hitbox lenta de Bastion en Modo asalto"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Dardo sedante cancela Sin perdón fácilmente y Ana opera fuera del rango óptimo de Cassidy"
                },
                "doctrine": {
                      "hard": true,
                      "motivo": "Granada biótica bloquea toda la autosanación de Imbuir y la curación de Cetro eterno"
                },
                "doomfist": {
                      "hard": true,
                      "motivo": "Doomfist no tiene escudo que le cubra del control de Ana"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Hazard no tiene escudo que le cubra del control de Ana"
                },
                "junker-queen": {
                      "hard": true,
                      "motivo": "Junker Queen no tiene escudo que le cubra del control de Ana"
                },
                "mauga": {
                      "hard": true,
                      "motivo": "Mauga no tiene escudo que le cubra del control de Ana"
                },
                "mizuki": {
                      "hard": false,
                      "motivo": "Granada biótica anula por completo la curación grupal de Aura reparadora y Sanación Kasa"
                },
                "moira": {
                      "hard": true,
                      "motivo": "Granada biótica corta su autosanación y Dardo sedante cancela Coalescencia"
                },
                "roadhog": {
                      "hard": true,
                      "motivo": "Roadhog no tiene escudo que le cubra del control de Ana"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Dardo sedante castiga la entrada predecible de Corte volador de Vendetta"
                },
                "wrecking-ball": {
                      "hard": true,
                      "motivo": "Wrecking Ball no tiene escudo que le cubra del control de Ana"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Anran llega a por él enseguida"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y D.Mon llega a por él enseguida"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y D.Va llega a por él enseguida"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Genji llega a por él enseguida"
                },
                "kiriko": {
                      "hard": true,
                      "motivo": "Suzu de protección anula por completo tanto la Granada biótica como el Dardo sedante de Ana"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Reaper llega a por él enseguida"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Shion llega a por él enseguida"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Sojourn llega a por él enseguida"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Tracer llega a por él enseguida"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Venture llega a por él enseguida"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Gana el duelo de francotiradoras gracias a su letalidad de un solo impacto crítico"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Ana tiene poca vida y Winston llega a por él enseguida"
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
          "Campo expandido",
          "Energía de asalto",
          "Sanación automatizada",
          "Botas cohete"
    ],
    counters: {
          "strongAgainst": [
                "echo",
                "freja",
                "jetpack-cat",
                "junkrat",
                "mercy",
                "pharah",
                "reinhardt"
          ],
          "weakAgainst": [
                "anran",
                "dmon",
                "domina",
                "doomfist",
                "dva",
                "genji",
                "hazard",
                "reaper",
                "shion",
                "sojourn",
                "tracer",
                "vendetta",
                "venture",
                "widowmaker",
                "winston",
                "wrecking-ball"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "echo": {
                      "hard": false,
                      "motivo": "Presión hitscan precisa contra el vuelo de Echo y Exobotas para disputar alturas"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Disparo hitscan constante que obliga a Freja a bajar del aire y Campo de inmortalidad contra boleadora"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Ráfagas hitscan precisas presionan el vuelo de Jetpack Cat en cielo abierto"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Exobotas permiten subir a alturas seguras lejos de las granadas y Campo salva de Rueda explosiva"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Castiga con ráfagas hitscan a Mercy cada vez que se expone con Ángel de la guarda"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Su rifle hitscan de ráfagas castiga a Pharah en el aire mientras Campo de inmortalidad frena Bombardeo"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Exobotas evitan a Reinhardt subiendo a altura y Matriz amplificadora destroza su escudo"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Anran llega a por él enseguida"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y D.Mon llega a por él enseguida"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Matriz de barrera neutraliza las ventanas de daño frontal de Baptiste"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Doomfist llega a por él enseguida"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y D.Va llega a por él enseguida"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Genji llega a por él enseguida"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Hazard llega a por él enseguida"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Reaper llega a por él enseguida"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Shion llega a por él enseguida"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Sojourn llega a por él enseguida"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Tracer llega a por él enseguida"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Vendetta llega a por él enseguida"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Venture llega a por él enseguida"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Un disparo crítico elimina a Baptiste antes de que pueda reaccionar con Campo de inmortalidad"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Winston llega a por él enseguida"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": "Baptiste tiene poca vida y Wrecking Ball llega a por él enseguida"
                }
          }
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
          "Atención de urgencia",
          "Vidente",
          "Paso preparado",
          "Baile"
    ],
    counters: {
          "strongAgainst": [
                "ana",
                "anran",
                "ashe",
                "illari",
                "junker-queen",
                "mauga",
                "mei",
                "sombra",
                "tracer"
          ],
          "weakAgainst": [
                "hanzo",
                "sojourn",
                "widowmaker",
                "winston"
          ],
          "hardStrongAgainst": [
                "ana",
                "junker-queen"
          ],
          "hardWeakAgainst": [
                "widowmaker"
          ],
          "strongDetails": {
                "ana": {
                      "hard": true,
                      "motivo": "Suzu de protección anula por completo tanto la Granada biótica como el Dardo sedante de Ana"
                },
                "anran": {
                      "hard": false,
                      "motivo": "Suzu de protección limpia al instante la quemadura de Ignición y de su definitiva"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Suzu de protección apaga la quemadura de Dinamita en varios aliados a la vez"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Suzu de protección elimina la marca explosiva de Sol cautivo antes de que detone"
                },
                "junker-queen": {
                      "hard": true,
                      "motivo": "Suzu de protección limpia instantáneamente el sangrado y la anticuración de Masacre"
                },
                "mauga": {
                      "hard": false,
                      "motivo": "Kiriko tiene enfrentamiento favorable contra Mauga"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Suzu salva a los compañeros atrapados dentro de Ventisca justo antes de congelarse"
                },
                "sombra": {
                      "hard": false,
                      "motivo": "Suzu limpia efectos negativos de PEM y Paso ligero rescata aliados presionados"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Un Kunái crítico más golpe cuerpo a cuerpo obliga a Tracer a gastar Regresión al instante"
                }
          },
          "weakDetails": {
                "hanzo": {
                      "hard": false,
                      "motivo": "Las flechas letales eliminan a Kiriko instantáneamente antes de que pueda reaccionar con Suzu"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "El disparo secundario de riel cargado mata de golpe sin ventana para Suzu de protección"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Un tiro en la cabeza instantáneo elimina a Kiriko sin darle tiempo a lanzar Suzu"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Cañón tesla atraviesa esquivas cortas y fuerza el Paso ligero de Kiriko constantemente"
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
          "Protección petaloide",
          "Escape vertiginoso",
          "Siembra de semillas",
          "Floración masiva"
    ],
    counters: {
          "strongAgainst": [
                "mauga",
                "mei",
                "orisa",
                "reinhardt",
                "roadhog",
                "zarya"
          ],
          "weakAgainst": [
                "anran",
                "dmon",
                "doctrine",
                "doomfist",
                "dva",
                "genji",
                "hazard",
                "reaper",
                "shion",
                "sojourn",
                "tracer",
                "vendetta",
                "venture",
                "winston",
                "wrecking-ball"
          ],
          "hardStrongAgainst": [
                "orisa",
                "zarya"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "mauga": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene enfrentamiento favorable contra Mauga"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Agarre vital y Plataforma petaloide rescatan aliados encerrados por Muro de hielo o Ventisca"
                },
                "orisa": {
                      "hard": true,
                      "motivo": "Plataforma petaloide y Agarre vital anulan por completo Terraluvión de Orisa"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Agarre vital salva instantáneamente a cualquier aliado clavado por Embestida o Seísmo"
                },
                "roadhog": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene enfrentamiento favorable contra Roadhog"
                },
                "zarya": {
                      "hard": true,
                      "motivo": "Plataforma petaloide eleva a todo el equipo fuera de la Bomba de gravedad de Zarya"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Anran llega a por él enseguida"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y D.Mon llega a por él enseguida"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Mayor presión ofensiva con Imbuir frente al estilo puramente reactivo de Lifeweaver"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Doomfist llega a por él enseguida"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y D.Va llega a por él enseguida"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Genji llega a por él enseguida"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Hazard llega a por él enseguida"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Reaper llega a por él enseguida"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Shion llega a por él enseguida"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Sojourn llega a por él enseguida"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Tracer llega a por él enseguida"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Vendetta llega a por él enseguida"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Venture llega a por él enseguida"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Winston llega a por él enseguida"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": "Lifeweaver tiene poca vida y Wrecking Ball llega a por él enseguida"
                }
          }
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
          "División destructora",
          "Nutrición ética",
          "Reversión",
          "Paso fantasmal"
    ],
    counters: {
          "strongAgainst": [
                "anran",
                "genji",
                "jetpack-cat",
                "lucio",
                "shion",
                "sombra",
                "tracer"
          ],
          "weakAgainst": [
                "ana",
                "ashe",
                "doctrine",
                "dva",
                "pharah",
                "reaper",
                "roadhog",
                "vendetta",
                "venture",
                "widowmaker"
          ],
          "hardStrongAgainst": [
                "genji"
          ],
          "hardWeakAgainst": [
                "ana",
                "dva"
          ],
          "strongDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Evanescencia limpia la quemadura de Ignición y el Orbe biótico aguanta el duelo lateral"
                },
                "genji": {
                      "hard": true,
                      "motivo": "Moira tiene enfrentamiento favorable contra Genji"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Los 20 metros del Rayo biótico alcanzan y desgastan el vuelo bajo de Jetpack Cat"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "Rayo biótico ignora la evasión en muros de Lúcio con daño sostenido constante"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Consistencia de Rayo biótico y Orbe sanador desgastan las entradas de Shion"
                },
                "sombra": {
                      "hard": false,
                      "motivo": "Interrumpe fácilmente a Sombra con Rayo biótico y reposiciona con Evanescencia"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Rayo biótico de fijación constante castiga los 175 de vida de Tracer y Evanescencia limpia su bomba"
                }
          },
          "weakDetails": {
                "ana": {
                      "hard": true,
                      "motivo": "Granada biótica corta su autosanación y Dardo sedante cancela Coalescencia"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Supera ampliamente los 20 metros de alcance de Moira desde posiciones elevadas"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Imbuir y Drones vigorizantes ganan el intercambio de desgaste frente al daño bajo de Moira"
                },
                "dva": {
                      "hard": true,
                      "motivo": "Matriz de defensa devora todos los Orbes bióticos de sanación y daño de Moira"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Vuela fuera del alcance del Rayo biótico mientras castiga su posición tras Evanescencia"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Reaper flanquea y Moira, con poca vida, no aguanta su ataque"
                },
                "roadhog": {
                      "hard": false,
                      "motivo": "El Garfio cancela Coalescencia y el poco daño de Moira no amenaza la vida de Roadhog"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta flanquea y Moira, con poca vida, no aguanta su ataque"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Venture flanquea y Moira, con poca vida, no aguanta su ataque"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Elimina de un disparo a Moira desde distancias donde ella no puede interactuar"
                }
          }
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
    tier: 'A',
    counterAdvice: "Con los mayores enfriamientos en Impulso Sombrío e Infuse tras el parche mid-season, Doctrine tiene ventanas de vulnerabilidad mucho más amplias. Castígalo en el suelo cuando consuma su vuelo.",
    perks: [
          "Salvación",
          "Succión sanguinaria",
          "Transfusión",
          "El precio de la vida"
    ],
    counters: {
          "strongAgainst": [
                "brigitte",
                "echo",
                "freja",
                "jetpack-cat",
                "lifeweaver",
                "moira",
                "orisa",
                "pharah",
                "ramattra",
                "winston"
          ],
          "weakAgainst": [
                "ana",
                "anran",
                "ashe",
                "dva",
                "hanzo",
                "sojourn",
                "sombra",
                "tracer",
                "widowmaker"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [
                "ana",
                "widowmaker"
          ],
          "strongDetails": {
                "brigitte": {
                      "hard": false,
                      "motivo": "Supera a Brigitte desde media distancia con Cetro eterno sin entrar en rango de su mangual"
                },
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
                      "motivo": "Doctrine tiene enfrentamiento favorable contra Jetpack Cat"
                },
                "lifeweaver": {
                      "hard": false,
                      "motivo": "Mayor presión ofensiva con Imbuir frente al estilo puramente reactivo de Lifeweaver"
                },
                "moira": {
                      "hard": false,
                      "motivo": "Imbuir y Drones vigorizantes ganan el intercambio de desgaste frente al daño bajo de Moira"
                },
                "orisa": {
                      "hard": false,
                      "motivo": "Presión constante con Cetro eterno e Imbuir desgastan a Orisa en peleas prolongadas"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Como Illari, castiga a los voladores con su disparo a media distancia"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Drones vigorizantes y el robo de vida con Imbuir sostienen al equipo frente al desgaste de Ramattra"
                },
                "winston": {
                      "hard": false,
                      "motivo": "El alto sustento propio con Imbuir y Drones vigorizantes resiste el daño continuo del Cañón tesla"
                }
          },
          "weakDetails": {
                "ana": {
                      "hard": true,
                      "motivo": "Granada biótica bloquea toda la autosanación de Imbuir y la curación de Cetro eterno"
                },
                "anran": {
                      "hard": false,
                      "motivo": "La quemadura continua de Ignición y el burst de Abanicos Zhuque superan el sustento de Cetro eterno"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Castiga desde distancia segura donde Cetro eterno pierde efectividad"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Matriz de defensa absorbe proyectiles y D.Va presiona a Doctrine con Micromisiles"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Un impacto crítico de Arco de tormenta elimina a Doctrine antes de activar Liberación"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "El estallido del Cañón de riel cargado supera la curación sostenida de Doctrine"
                },
                "sombra": {
                      "hard": false,
                      "motivo": "El PEM de Sombra anula por completo su ulti"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Alta movilidad lateral y Bomba de pulsos superan la capacidad de reacción de Doctrine"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "El disparo crítico instantáneo ignora toda la curación sostenida y el robo de vida de Doctrine"
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
    description: 'Última guerrera solar con rifle de precisión solar de recarga acelerada, pilón de curación potenciado y ultimate Sol Cautivo.',
    tier: 'A',
    counterAdvice: "Con su pilón más resistente y mayor cadencia de disparo solar, Illari castiga agresivamente a media distancia. Destruye siempre su pilón antes de iniciar una tf y acércate con escudos o dive para neutralizar su poke.",
    perks: [
          "Construcción rápida",
          "Solsticio de verano",
          "Erupción solar",
          "Quemadura solar"
    ],
    counters: {
          "strongAgainst": [
                "echo",
                "freja",
                "jetpack-cat",
                "junker-queen",
                "mercy",
                "pharah"
          ],
          "weakAgainst": [
                "anran",
                "dmon",
                "domina",
                "doomfist",
                "dva",
                "genji",
                "hazard",
                "kiriko",
                "reaper",
                "shion",
                "sojourn",
                "tracer",
                "vendetta",
                "venture",
                "widowmaker",
                "winston",
                "wrecking-ball"
          ],
          "hardStrongAgainst": [
                "pharah"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "echo": {
                      "hard": false,
                      "motivo": "Disparos cargados de Rifle solar castigan a Echo cada vez que asoma en el aire"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Rifle solar hitscan compite desde larga distancia contra los saltos aéreos de Freja"
                },
                "jetpack-cat": {
                      "hard": false,
                      "motivo": "Rifle solar hitscan castiga el vuelo constante de Jetpack Cat"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Mantiene distancia con Erupción y castiga la falta de escudo de Junker Queen"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Impactos precisos de Rifle solar impiden a Mercy volar libremente por el mapa"
                },
                "pharah": {
                      "hard": true,
                      "motivo": "Rifle solar hitscan cargado derriba rápidamente a Pharah en pleno vuelo"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Anran llega a por él enseguida"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y D.Mon llega a por él enseguida"
                },
                "domina": {
                      "hard": false,
                      "motivo": "Su escudo niega la carga del Rifle solar de Illari a distancia"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Doomfist llega a por él enseguida"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y D.Va llega a por él enseguida"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Genji llega a por él enseguida"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Hazard llega a por él enseguida"
                },
                "kiriko": {
                      "hard": false,
                      "motivo": "Suzu de protección elimina la marca explosiva de Sol cautivo antes de que detone"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Reaper llega a por él enseguida"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Shion llega a por él enseguida"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Sojourn llega a por él enseguida"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Tracer llega a por él enseguida"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Vendetta llega a por él enseguida"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Venture llega a por él enseguida"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Supera en alcance letal al Rifle solar de Illari y destruye su pilón si queda expuesto"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Winston llega a por él enseguida"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": "Illari tiene poca vida y Wrecking Ball llega a por él enseguida"
                }
          }
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
          "Trotaondas sonoras",
          "Subidón",
          "Música muy alta",
          "Acelerando"
    ],
    counters: {
          "strongAgainst": [
                "dva",
                "genji",
                "junker-queen",
                "sigma",
                "wrecking-ball",
                "zarya"
          ],
          "weakAgainst": [
                "anran",
                "hazard",
                "moira",
                "pharah",
                "reaper",
                "roadhog",
                "shion",
                "sombra",
                "tracer",
                "vendetta",
                "venture"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "dva": {
                      "hard": false,
                      "motivo": "Lúcio tiene enfrentamiento favorable contra D.Va"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Lúcio tiene enfrentamiento favorable contra Genji"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Lúcio tiene enfrentamiento favorable contra Junker Queen"
                },
                "sigma": {
                      "hard": false,
                      "motivo": "Lúcio tiene enfrentamiento favorable contra Sigma"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": "Lúcio tiene enfrentamiento favorable contra Wrecking Ball"
                },
                "zarya": {
                      "hard": false,
                      "motivo": "Mantiene a su equipo fuera del alcance del rayo de Zarya y le ayuda a guardar la distancia"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Anran flanquea y Lúcio, con poca vida, no aguanta su ataque"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Apenas lo puede bupear y le hace mucho daño de burst. Si además va con una Tracer, no tiene supervivencia"
                },
                "moira": {
                      "hard": false,
                      "motivo": "Rayo biótico ignora la evasión en muros de Lúcio con daño sostenido constante"
                },
                "pharah": {
                      "hard": false,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Lúcio"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Reaper flanquea y Lúcio, con poca vida, no aguanta su ataque"
                },
                "roadhog": {
                      "hard": false,
                      "motivo": "Un impacto de Garfio elimina a Lúcio cuando intenta disputar el punto de cerca"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Shion flanquea y Lúcio, con poca vida, no aguanta su ataque"
                },
                "sombra": {
                      "hard": false,
                      "motivo": "PEM elimina completamente los sobreescudos otorgados por Barrera de sonido"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Tracer flanquea y Lúcio, con poca vida, no aguanta su ataque"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta flanquea y Lúcio, con poca vida, no aguanta su ataque"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Venture flanquea y Lúcio, con poca vida, no aguanta su ataque"
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
          "Hackeo vital",
          "CTRL ALT ESC",
          "Paquete de datos",
          "Ciberseguridad"
    ],
    counters: {
          "strongAgainst": [
                "doctrine",
                "doomfist",
                "lucio",
                "roadhog",
                "sigma",
                "sojourn",
                "symmetra",
                "widowmaker",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "anran",
                "genji",
                "kiriko",
                "moira",
                "reaper",
                "shion",
                "tracer",
                "vendetta",
                "venture"
          ],
          "hardStrongAgainst": [
                "doomfist",
                "roadhog",
                "sigma",
                "wrecking-ball"
          ],
          "hardWeakAgainst": [],
          "strongDetails": {
                "doctrine": {
                      "hard": false,
                      "motivo": "El PEM de Sombra anula por completo su ulti"
                },
                "doomfist": {
                      "hard": true,
                      "motivo": "Sus efectos disruptivos y PEM cortan el ciclo de habilidades del que depende Doomfist"
                },
                "lucio": {
                      "hard": false,
                      "motivo": "PEM elimina completamente los sobreescudos otorgados por Barrera de sonido"
                },
                "roadhog": {
                      "hard": true,
                      "motivo": "Con Ciberespacio le deniega tanto la curación como el daño después de que enganche a alguien"
                },
                "sigma": {
                      "hard": true,
                      "motivo": "PEM destruye al instante la Barrera experimental y cancela Flujo gravitacional"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Presiona lateralmente a Sojourn y corta su escape de Maniobra evasiva en momentos clave"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "El PEM de Sombra anula por completo su ulti"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Movilidad sigilosa con Baliza de translocación permite presionar posiciones fijas de Widowmaker"
                },
                "wrecking-ball": {
                      "hard": true,
                      "motivo": "Desactiva Bola arrolladora y destruye Campo de minas al instante con PEM"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Anran flanquea y Sombra, con poca vida, no aguanta su ataque"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Genji flanquea y Sombra, con poca vida, no aguanta su ataque"
                },
                "kiriko": {
                      "hard": false,
                      "motivo": "Suzu limpia efectos negativos de PEM y Paso ligero rescata aliados presionados"
                },
                "moira": {
                      "hard": false,
                      "motivo": "Interrumpe fácilmente a Sombra con Rayo biótico y reposiciona con Evanescencia"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Reaper flanquea y Sombra, con poca vida, no aguanta su ataque"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Shion flanquea y Sombra, con poca vida, no aguanta su ataque"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Tracer flanquea y Sombra, con poca vida, no aguanta su ataque"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta flanquea y Sombra, con poca vida, no aguanta su ataque"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Venture flanquea y Sombra, con poca vida, no aguanta su ataque"
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
          "Desborde",
          "Equilibrio",
          "Flujo y reflujo",
          "Lluvia arreciante"
    ],
    counters: {
          "strongAgainst": [
                "brigitte",
                "junker-queen",
                "mei",
                "reinhardt",
                "symmetra",
                "torbjorn"
          ],
          "weakAgainst": [
                "anran",
                "dmon",
                "doomfist",
                "dva",
                "genji",
                "hazard",
                "reaper",
                "shion",
                "sojourn",
                "tracer",
                "vendetta",
                "venture",
                "widowmaker",
                "winston",
                "wrecking-ball"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "brigitte": {
                      "hard": false,
                      "motivo": "Daño en área de los orbes de agua rodea el pequeño escudo de Brigitte"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Ola guardiana descoloca las entradas de Junker Queen y los orbes castigan su avance lineal"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Empuja a Mei lejos del equipo y desgasta sus posiciones cerradas con orbes de agua"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Ola guardiana empuja hacia atrás a Reinhardt y frena su avance de rush"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "Destruye despliegues de Symmetra con explosiones de agua y frena su avance corto"
                },
                "torbjorn": {
                      "hard": false,
                      "motivo": "Los orbes de agua castigan posiciones estáticas y la torreta de Torbjörn"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Anran llega a por él enseguida"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y D.Mon llega a por él enseguida"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Doomfist llega a por él enseguida"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y D.Va llega a por él enseguida"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Genji llega a por él enseguida"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Hazard llega a por él enseguida"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Reaper llega a por él enseguida"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Shion llega a por él enseguida"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Sojourn llega a por él enseguida"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Tracer llega a por él enseguida"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Vendetta llega a por él enseguida"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Venture llega a por él enseguida"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Castiga la baja movilidad de Wuyang desde ángulos lejanos"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Winston llega a por él enseguida"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": "Wuyang tiene poca vida y Wrecking Ball llega a por él enseguida"
                }
          }
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
          "Reparación discordante",
          "Ascensión",
          "Destrucción concentrada",
          "Armonía dual"
    ],
    counters: {
          "strongAgainst": [
                "bastion",
                "cassidy",
                "junker-queen",
                "mauga",
                "orisa",
                "ramattra",
                "reinhardt",
                "roadhog",
                "zarya"
          ],
          "weakAgainst": [
                "anran",
                "dmon",
                "doomfist",
                "dva",
                "genji",
                "hazard",
                "reaper",
                "shion",
                "sojourn",
                "tracer",
                "vendetta",
                "venture",
                "widowmaker",
                "winston",
                "wrecking-ball"
          ],
          "hardStrongAgainst": [
                "mauga",
                "roadhog"
          ],
          "hardWeakAgainst": [
                "doomfist",
                "winston",
                "wrecking-ball"
          ],
          "strongDetails": {
                "bastion": {
                      "hard": false,
                      "motivo": "Orbe de discordia y voleas cargadas derriten los 350 de salud de Bastion apenas asoma"
                },
                "cassidy": {
                      "hard": false,
                      "motivo": "Orbe de discordia y voleas a larga distancia castigan la poca movilidad de Cassidy"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Orbe de discordia y Patada veloz castigan las entradas sin escudo de Junker Queen"
                },
                "mauga": {
                      "hard": true,
                      "motivo": "Orbe de discordia multiplica el daño recibido por Mauga al no tener escudo para cubrirse"
                },
                "orisa": {
                      "hard": false,
                      "motivo": "Zenyatta tiene enfrentamiento favorable contra Orisa"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Zenyatta tiene enfrentamiento favorable contra Ramattra"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Presiona su escudo desde lejos y aplica Discordia apenas baja el Campo protector"
                },
                "roadhog": {
                      "hard": true,
                      "motivo": "Orbe de discordia obliga a Roadhog a esconderse constantemente pese a su gran vida"
                },
                "zarya": {
                      "hard": false,
                      "motivo": "Trascendencia anula por completo el combo letal de Bomba de gravedad de Zarya"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Anran llega a por él enseguida"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y D.Mon llega a por él enseguida"
                },
                "doomfist": {
                      "hard": true,
                      "motivo": "Zenyatta tiene poca vida y Doomfist llega a por él enseguida"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y D.Va llega a por él enseguida"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Genji llega a por él enseguida"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Hazard llega a por él enseguida"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Reaper llega a por él enseguida"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Shion llega a por él enseguida"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Sojourn llega a por él enseguida"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Tracer llega a por él enseguida"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Vendetta llega a por él enseguida"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Zenyatta tiene poca vida y Venture llega a por él enseguida"
                },
                "widowmaker": {
                      "hard": false,
                      "motivo": "Hitbox redonda y ausencia de movilidad hacen de Zenyatta una baja fácil a distancia"
                },
                "winston": {
                      "hard": true,
                      "motivo": "Zenyatta tiene poca vida y Winston llega a por él enseguida"
                },
                "wrecking-ball": {
                      "hard": true,
                      "motivo": "Zenyatta tiene poca vida y Wrecking Ball llega a por él enseguida"
                }
          }
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
          "Médica de combate",
          "Subida de moral",
          "Golpe inspirador",
          "Latigazo cervical"
    ],
    counters: {
          "strongAgainst": [
                "anran",
                "doomfist",
                "dva",
                "hazard",
                "junker-queen",
                "shion",
                "tracer",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "bastion",
                "doctrine",
                "echo",
                "freja",
                "junkrat",
                "mercy",
                "pharah",
                "ramattra",
                "symmetra",
                "wuyang",
                "zarya"
          ],
          "hardStrongAgainst": [
                "dva",
                "tracer",
                "wrecking-ball"
          ],
          "hardWeakAgainst": [
                "echo",
                "junkrat",
                "pharah",
                "ramattra"
          ],
          "strongDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Inspiración, Escudo barrera y Lanzamiento de mangual niegan los flanqueos de Anran sobre los apoyos"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Carga con escudo choca y derriba el Puño cohete de Doomfist protegiendo a su apoyo"
                },
                "dva": {
                      "hard": true,
                      "motivo": "La defensa de D.Va no para el rayo ni los golpes de Brigitte"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "La defensa de Hazard no para el rayo ni los golpes de Brigitte"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "La defensa de Junker Queen no para el rayo ni los golpes de Brigitte"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Protege a su otro apoyo con Kit de reparación y empuja a Shion lejos con Lanzamiento de mangual"
                },
                "tracer": {
                      "hard": true,
                      "motivo": "Escudo barrera, Inspiración y mangual impiden a Tracer eliminar apoyos y la fuerzan a regresar"
                },
                "wrecking-ball": {
                      "hard": true,
                      "motivo": "Brigitte tiene enfrentamiento favorable contra Wrecking Ball"
                }
          },
          "weakDetails": {
                "bastion": {
                      "hard": false,
                      "motivo": "Modo asalto pulveriza el escudo de Brigitte en una fracción de segundo"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Supera a Brigitte desde media distancia con Cetro eterno sin entrar en rango de su mangual"
                },
                "echo": {
                      "hard": true,
                      "motivo": "Vuelo constante y Bombas lapa destruyen el escudo de Brigitte sin exponerse"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Presión aérea continua con virotes explosivos fuera del alcance de Brigitte"
                },
                "junkrat": {
                      "hard": true,
                      "motivo": "Las granadas rompen enseguida su Escudo barrera y la castigan en espacios cerrados"
                },
                "mercy": {
                      "hard": false,
                      "motivo": "Se mantiene en alturas y cielo abierto donde Brigitte no puede activar Inspiración contra ella"
                },
                "pharah": {
                      "hard": true,
                      "motivo": "Daño explosivo desde el cielo que Brigitte es incapaz de alcanzar con su mangual"
                },
                "ramattra": {
                      "hard": true,
                      "motivo": "Los puños de Forma de némesis atraviesan el Escudo barrera de Brigitte y la eliminan rápido"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "Carga su Proyector de fotones contra el escudo de Brigitte hasta nivel máximo"
                },
                "wuyang": {
                      "hard": false,
                      "motivo": "Daño en área de los orbes de agua rodea el pequeño escudo de Brigitte"
                },
                "zarya": {
                      "hard": false,
                      "motivo": "El rayo de alta energía derrite a Brigitte en distancias cortas"
                }
          }
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
          "Manantial",
          "Alma expuesta",
          "Regreso resonante",
          "Paso rápido"
    ],
    counters: {
          "strongAgainst": [
                "anran",
                "doomfist",
                "dva",
                "genji",
                "hazard",
                "junker-queen",
                "mauga",
                "roadhog",
                "shion",
                "tracer",
                "venture",
                "wrecking-ball"
          ],
          "weakAgainst": [
                "ana",
                "ashe",
                "echo",
                "freja",
                "hanzo",
                "pharah",
                "ramattra",
                "widowmaker"
          ],
          "hardStrongAgainst": [
                "anran",
                "doomfist",
                "dva",
                "genji",
                "hazard",
                "shion",
                "tracer",
                "wrecking-ball"
          ],
          "hardWeakAgainst": [
                "pharah",
                "widowmaker"
          ],
          "strongDetails": {
                "anran": {
                      "hard": true,
                      "motivo": "Cadena vinculante atrapa a Anran en pleno flanqueo e impide que escape con Carga infernal"
                },
                "doomfist": {
                      "hard": true,
                      "motivo": "Doomfist no tiene escudo que le cubra del control de Mizuki"
                },
                "dva": {
                      "hard": true,
                      "motivo": "Su cadena atrapa a D.Va y la Matriz no la para"
                },
                "genji": {
                      "hard": true,
                      "motivo": "Cadena vinculante atraviesa el juego de flanqueo de Genji y Aura reparadora sostiene a la backline"
                },
                "hazard": {
                      "hard": true,
                      "motivo": "Hazard no tiene escudo que le cubra del control de Mizuki"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Junker Queen no tiene escudo que le cubra del control de Mizuki"
                },
                "mauga": {
                      "hard": false,
                      "motivo": "Mauga no tiene escudo que le cubra del control de Mizuki"
                },
                "roadhog": {
                      "hard": false,
                      "motivo": "Roadhog no tiene escudo que le cubra del control de Mizuki"
                },
                "shion": {
                      "hard": true,
                      "motivo": "Cadena vinculante frena en seco las entradas rápidas de Shion sobre la retaguardia"
                },
                "tracer": {
                      "hard": true,
                      "motivo": "Cadena vinculante inmoviliza a Tracer y anula su Traslación para asegurar la baja"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Cadena vinculante captura a Venture al emerger y Aura reparadora absorbe su combo"
                },
                "wrecking-ball": {
                      "hard": true,
                      "motivo": "Wrecking Ball no tiene escudo que le cubra del control de Mizuki"
                }
          },
          "weakDetails": {
                "ana": {
                      "hard": false,
                      "motivo": "Granada biótica anula por completo la curación grupal de Aura reparadora y Sanación Kasa"
                },
                "ashe": {
                      "hard": false,
                      "motivo": "Presiona desde media-larga distancia y quema al grupo dentro de su Aura reparadora con Dinamita"
                },
                "echo": {
                      "hard": false,
                      "motivo": "Ataca desde ángulos verticales fuera del rango efectivo de Cadena vinculante"
                },
                "freja": {
                      "hard": false,
                      "motivo": "Virotes explosivos con Apuntado desde el aire superan el alcance defensivo de Mizuki"
                },
                "hanzo": {
                      "hard": false,
                      "motivo": "Poca movilidad de Mizuki la convierte en blanco fácil para flechas cargadas a distancia"
                },
                "pharah": {
                      "hard": true,
                      "motivo": "Pharah tiene enfrentamiento favorable contra Mizuki"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "Aporrear castiga la baja movilidad de Mizuki y atraviesa defensas frontales"
                },
                "widowmaker": {
                      "hard": true,
                      "motivo": "Elimina a Mizuki desde líneas largas totalmente fuera del alcance de Cadena vinculante"
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
    description: 'Gatita equipada con jetpack de la familia Lindholm armada con Patiproyectiles bióticos teledirigidos, Transporte aéreo de aliados, Ronroneo curativo y salud reducida a 200 HP.',
    tier: 'C',
    counterAdvice: "Con su salud reducida a 200 HP en el parche mid-season, Jetpack Cat es mucho más frágil ante proyectiles y armas hitscan (Cassidy, Ashe, Soldier). Castígala cada vez que intente elevarse sin cobertura.",
    perks: [
          "Segundas intenciones",
          "Transporte protegido",
          "Ronroneo perfecto",
          "Garras fuera"
    ],
    counters: {
          "strongAgainst": [
                "doomfist",
                "junker-queen",
                "junkrat",
                "mei",
                "reinhardt",
                "symmetra",
                "venture"
          ],
          "weakAgainst": [
                "anran",
                "baptiste",
                "doctrine",
                "genji",
                "illari",
                "moira",
                "reaper",
                "shion",
                "tracer",
                "vendetta"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "doomfist": {
                      "hard": false,
                      "motivo": "Es muy molesta para Doomfist, que nunca llega a poder hacerle nada"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Saca a los aliados heridos del rango de Matanza mediante transporte aéreo"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Opera desde el aire lejos del Cepo y el spam de granadas terrestres"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Extrae aliados atrapados por Muro de hielo usando Línea de vida desde el aire"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Vuelo permanente y Línea de vida rescatan aliados fuera del alcance del martillo de Reinhardt"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "Evita torretas y rayo corto volando mientras reposiciona compañeros"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Vuelo constante ignora las emboscadas subterráneas de Venture y protege a su otro apoyo"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Anran flanquea y Jetpack Cat, con poca vida, no aguanta su ataque"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Ráfagas hitscan precisas presionan el vuelo de Jetpack Cat en cielo abierto"
                },
                "doctrine": {
                      "hard": false,
                      "motivo": "Doctrine tiene enfrentamiento favorable contra Jetpack Cat"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Genji flanquea y Jetpack Cat, con poca vida, no aguanta su ataque"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Rifle solar hitscan castiga el vuelo constante de Jetpack Cat"
                },
                "moira": {
                      "hard": false,
                      "motivo": "Los 20 metros del Rayo biótico alcanzan y desgastan el vuelo bajo de Jetpack Cat"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Reaper flanquea y Jetpack Cat, con poca vida, no aguanta su ataque"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Shion flanquea y Jetpack Cat, con poca vida, no aguanta su ataque"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Tracer flanquea y Jetpack Cat, con poca vida, no aguanta su ataque"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta flanquea y Jetpack Cat, con poca vida, no aguanta su ataque"
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
          "Constantes vitales familiares",
          "Objetivo fijado",
          "Despegue",
          "Mediarma rápida"
    ],
    counters: {
          "strongAgainst": [
                "doomfist",
                "junker-queen",
                "junkrat",
                "mei",
                "ramattra",
                "reinhardt",
                "symmetra"
          ],
          "weakAgainst": [
                "anran",
                "genji",
                "reaper",
                "shion",
                "tracer",
                "vendetta",
                "venture"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "doomfist": {
                      "hard": false,
                      "motivo": "Con tanta movilidad esquiva su puñetazo, y con la velocidad se le escapa fácilmente"
                },
                "junker-queen": {
                      "hard": false,
                      "motivo": "Acelera la rotación del equipo para negar las entradas cuerpo a cuerpo de Junker Queen"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Planeo elevado mantiene a Juno fuera del spam terrestre de Junkrat"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Impulso de planeo e Hiperanillo evitan los cierres con Muro de hielo de Mei"
                },
                "ramattra": {
                      "hard": false,
                      "motivo": "La velocidad de Hiperanillo saca a los aliados del rango de Forma de némesis y Aniquilación"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Hiperanillo permite a todo su equipo kitear a Reinhardt y evitar sus embestidas"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "Rotaciones rápidas con Hiperanillo superan las zonas estáticas de torretas de Symmetra"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Anran flanquea y Juno, con poca vida, no aguanta su ataque"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Genji flanquea y Juno, con poca vida, no aguanta su ataque"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Reaper flanquea y Juno, con poca vida, no aguanta su ataque"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Shion flanquea y Juno, con poca vida, no aguanta su ataque"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Tracer flanquea y Juno, con poca vida, no aguanta su ataque"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Vendetta flanquea y Juno, con poca vida, no aguanta su ataque"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Venture flanquea y Juno, con poca vida, no aguanta su ataque"
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
          "Resurrección angelical",
          "Alcance alado",
          "Potenciación en cadena",
          "Doble dosis"
    ],
    counters: {
          "strongAgainst": [
                "brigitte",
                "junkrat",
                "mei",
                "reinhardt",
                "symmetra",
                "venture"
          ],
          "weakAgainst": [
                "anran",
                "baptiste",
                "dmon",
                "doomfist",
                "dva",
                "genji",
                "hazard",
                "illari",
                "reaper",
                "shion",
                "sojourn",
                "soldier76",
                "tracer",
                "vendetta",
                "winston",
                "wrecking-ball"
          ],
          "hardStrongAgainst": [],
          "hardWeakAgainst": [],
          "strongDetails": {
                "brigitte": {
                      "hard": false,
                      "motivo": "Se mantiene en alturas y cielo abierto donde Brigitte no puede activar Inspiración contra ella"
                },
                "junkrat": {
                      "hard": false,
                      "motivo": "Vuela constantemente fuera del alcance de las granadas y revierte bajas aisladas con Resurrección"
                },
                "mei": {
                      "hard": false,
                      "motivo": "Ángel de la guarda escapa fácilmente del rango corto y la ralentización de Mei"
                },
                "reinhardt": {
                      "hard": false,
                      "motivo": "Permanece en el aire y en alturas donde el martillo de Reinhardt no puede tocarla"
                },
                "symmetra": {
                      "hard": false,
                      "motivo": "Movilidad aérea constante lejos del rayo corto y las torretas de Symmetra"
                },
                "venture": {
                      "hard": false,
                      "motivo": "Vuelo vertical continuo evade el combo subterráneo de corta distancia de Venture"
                }
          },
          "weakDetails": {
                "anran": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Anran llega a por él enseguida"
                },
                "baptiste": {
                      "hard": false,
                      "motivo": "Castiga con ráfagas hitscan a Mercy cada vez que se expone con Ángel de la guarda"
                },
                "dmon": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y D.Mon llega a por él enseguida"
                },
                "doomfist": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Doomfist llega a por él enseguida"
                },
                "dva": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y D.Va llega a por él enseguida"
                },
                "genji": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Genji llega a por él enseguida"
                },
                "hazard": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Hazard llega a por él enseguida"
                },
                "illari": {
                      "hard": false,
                      "motivo": "Impactos precisos de Rifle solar impiden a Mercy volar libremente por el mapa"
                },
                "reaper": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Reaper llega a por él enseguida"
                },
                "shion": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Shion llega a por él enseguida"
                },
                "sojourn": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Sojourn llega a por él enseguida"
                },
                "soldier76": {
                      "hard": false,
                      "motivo": "Presión hitscan continua y Visor táctico cazan a Mercy en el aire"
                },
                "tracer": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Tracer llega a por él enseguida"
                },
                "vendetta": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Vendetta llega a por él enseguida"
                },
                "winston": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Winston llega a por él enseguida"
                },
                "wrecking-ball": {
                      "hard": false,
                      "motivo": "Mercy tiene poca vida y Wrecking Ball llega a por él enseguida"
                }
          }
    },
    synergies: ["pharah","echo","ashe","sojourn","soldier76","widowmaker","freja","cassidy"]
  }
];

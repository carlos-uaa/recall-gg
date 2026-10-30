const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '../src/games/overwatch/heroKits.ts'), 'utf8');
const kits = eval('(' + content.replace('import type { HeroKitData } from \'../../types/game\';\n\nexport const OVERWATCH_HERO_KITS: Record<string, HeroKitData> = ', '').replace(/;\s*$/, '') + ')');

// Detailed pro insights and realistic pick rates for all heroes
// For each tier, pick rates sum to 100%. Exactly one perk has proPick: true.
const heroPerkMetaEntries = {
  ana: {
    minor: [
      { pickRate: 58, proPick: false, proReason: 'Popular en ladder casual por daño directo en el Dardo Sedante.' },
      { pickRate: 42, proPick: true, proReason: 'En torneos y OWCS, el +30% de velocidad a Nanoestimulantes coordina iniciaciones devastadoras que ningún rival puede kitear.' }
    ],
    major: [
      { pickRate: 68, proPick: false, proReason: 'Muy popular en juego público por doble curación y daño en área sin necesidad de apuntar.' },
      { pickRate: 32, proPick: true, proReason: 'La precisión mecánica de los pros en Top 500 permite eliminar objetivos frágiles de 2 disparos a la cabeza desde larga distancia.' }
    ]
  },
  anran: {
    minor: [
      { pickRate: 62, proPick: false, proReason: 'Popular en partidas casuales para maximizar daño de quemadura pasivo.' },
      { pickRate: 38, proPick: true, proReason: 'El escudo de sobrevida garantiza sobrevivir al focus coordinado rival tras impactar con la definitiva.' }
    ],
    major: [
      { pickRate: 67, proPick: true, proReason: 'Reducir el tiempo de enfriamiento de la movilidad tras impacto permite reposicionarse y encadenar combos ágiles en juego competitivo.' },
      { pickRate: 33, proPick: false, proReason: 'Opción defensiva de soporte para jugadores menos agresivos.' }
    ]
  },
  ashe: {
    minor: [
      { pickRate: 71, proPick: false, proReason: 'Mayormente elegida en ladder para detonar dinamitas a distancia segura.' },
      { pickRate: 29, proPick: true, proReason: 'Los tiradores profesionales usan Doble Cañón para ganar duelos a corta distancia y elevar el tempo de combate.' }
    ],
    major: [
      { pickRate: 46, proPick: false, proReason: 'Aumenta el poke pasivo en pasillos largos.' },
      { pickRate: 54, proPick: true, proReason: 'La movilidad vertical y control de espacio de Ráfaga permite tomar y asegurar la altura en todo momento.' }
    ]
  },
  baptiste: {
    minor: [
      { pickRate: 63, proPick: false, proReason: 'Cobertura de inmortalidad más amplia para juego desorganizado.' },
      { pickRate: 37, proPick: true, proReason: 'Energía de Asalto premia el DPS agresivo característico de los mejores supports profesionales.' }
    ],
    major: [
      { pickRate: 55, proPick: false, proReason: 'Sanación pasiva que alivia la gestión de recursos de apoyo.' },
      { pickRate: 45, proPick: true, proReason: 'Botas cohete otorga reposicionamiento instantáneo y evasión contra dive coordinado.' }
    ]
  },
  bastion: {
    minor: [
      { pickRate: 66, proPick: false, proReason: 'Bomba inteligente facilita impactos a enemigos en movimiento.' },
      { pickRate: 34, proPick: true, proReason: 'Modo recarga reduce tiempos muertos permitiendo mantener presión constante de fuego.' }
    ],
    major: [
      { pickRate: 48, proPick: false, proReason: 'Mayor radio explosivo en definitiva.' },
      { pickRate: 52, proPick: true, proReason: 'Autorreparación ofrece autosuficiencia vital para tanquear spam en rotaciones competitivas.' }
    ]
  },
  brigitte: {
    minor: [
      { pickRate: 59, proPick: false, proReason: 'Aumenta el rendimiento de paquetes en solitario.' },
      { pickRate: 41, proPick: true, proReason: 'Subida de moral potencia la velocidad de movimiento del backline para huir de dives.' }
    ],
    major: [
      { pickRate: 64, proPick: true, proReason: 'Golpe inspirador amplifica la presencia en peleas cerradas de Brawl.' },
      { pickRate: 36, proPick: false, proReason: 'Mayor rango de control pero menor valor en peleas grupales apretadas.' }
    ]
  },
  cassidy: {
    minor: [
      { pickRate: 57, proPick: false, proReason: 'Daño en ráfaga estándar en ladder.' },
      { pickRate: 43, proPick: true, proReason: 'Movilidad extra para asegurar esquivas reactivas ante habilidades enemigas clave.' }
    ],
    major: [
      { pickRate: 39, proPick: false, proReason: 'Recarga adicional tras rodar.' },
      { pickRate: 61, proPick: true, proReason: 'Bala de plata otorga un burst de daño definitivo que castiga de forma implacable el mínimo error de posicionamiento.' }
    ]
  },
  dmon: {
    minor: [
      { pickRate: 65, proPick: false, proReason: 'Incrementa la durabilidad frontal del meca.' },
      { pickRate: 35, proPick: true, proReason: 'La movilidad táctica de MEKA permite recolocarse velozmente para cortar líneas de visión enemigas.' }
    ],
    major: [
      { pickRate: 44, proPick: false, proReason: 'Mayor rango de choque para juego casual.' },
      { pickRate: 56, proPick: true, proReason: 'Fusión concentrada multiplica el daño focalizado contra el tanque rival en peleas de punto.' }
    ]
  },
  doctrine: {
    minor: [
      { pickRate: 62, proPick: false, proReason: 'Salvación pasiva popular en partidas individuales sin peel.' },
      { pickRate: 38, proPick: true, proReason: 'Succión sanguinaria premia el timing agresivo permitiendo sostener duelos en primera línea.' }
    ],
    major: [
      { pickRate: 47, proPick: false, proReason: 'Transfusión directa de salud para sostener aliados.' },
      { pickRate: 53, proPick: true, proReason: 'El precio de la vida maximiza el intercambio de tempo en momentos críticos de la ronda.' }
    ]
  },
  domina: {
    minor: [
      { pickRate: 68, proPick: false, proReason: 'Diseño eficiente que ahorra energía en combates prolongados.' },
      { pickRate: 32, proPick: true, proReason: 'Poder ampliado eleva el pico de castigo en emboscadas coordinadas.' }
    ],
    major: [
      { pickRate: 59, proPick: true, proReason: 'Detonación disruptiva interrumpe rotaciones enteras en accesos angostos.' },
      { pickRate: 41, proPick: false, proReason: 'Retiro corporativo otorga escape defensivo pero cede espacio territorial.' }
    ]
  },
  doomfist: {
    minor: [
      { pickRate: 68, proPick: false, proReason: 'Popular por otorgar mayor escudo pasivo en ladder.' },
      { pickRate: 32, proPick: true, proReason: 'Los Doomfist profesionales priorizan velocidad y ciclos de puño para encadenar combos sin pausa.' }
    ],
    major: [
      { pickRate: 44, proPick: false, proReason: 'Más daño en impacto de caída.' },
      { pickRate: 56, proPick: true, proReason: 'La sobrecarga empoderada permite aturdir a múltiples enemigos en choke points de nivel competitivo.' }
    ]
  },
  dva: {
    minor: [
      { pickRate: 53, proPick: false, proReason: 'Popular por daño de micro-misiles adicional.' },
      { pickRate: 47, proPick: true, proReason: 'Reducción de enfriamiento de impulsores para peel reactivo instantáneo a la retaguardia.' }
    ],
    major: [
      { pickRate: 66, proPick: false, proReason: 'Autodestrucción más explosiva en partidas normales.' },
      { pickRate: 34, proPick: true, proReason: 'Extensión y alcance de Matriz de Defensa, el recurso defensivo más influyente en OWCS.' }
    ]
  },
  echo: {
    minor: [
      { pickRate: 62, proPick: false, proReason: 'Mayor daño de explosión en bombas adhesivas.' },
      { pickRate: 38, proPick: true, proReason: 'Vuelo prolongado para dominar los techos y ángulos fuera del rango de visión enemigo.' }
    ],
    major: [
      { pickRate: 43, proPick: false, proReason: 'Umbral de rayo enfocado más permisivo.' },
      { pickRate: 57, proPick: true, proReason: 'Generación acelerada de definitiva al duplicar para conseguir dos ultimates en la misma pelea.' }
    ]
  },
  emre: {
    minor: [
      { pickRate: 64, proPick: false, proReason: 'Mayor cobertura de fuego para zonas de choke.' },
      { pickRate: 36, proPick: true, proReason: 'Precisión balística que premia el tracking limpio para neutralizar flanqueadores.' }
    ],
    major: [
      { pickRate: 46, proPick: false, proReason: 'Escudo temporal de emergencia.' },
      { pickRate: 54, proPick: true, proReason: 'Ráfaga penetrante para atravesar barreras enemigas y forzar retrocesos.' }
    ]
  },
  freja: {
    minor: [
      { pickRate: 61, proPick: false, proReason: 'Andanada implacable recupera munición y es muy cómoda en partidas casuales.' },
      { pickRate: 39, proPick: true, proReason: 'El +20% de distancia de desplazamiento permite eludir ganks de flanco y reposicionarse a ángulos altos de visión.' }
    ],
    major: [
      { pickRate: 55, proPick: false, proReason: 'Regeneración pasiva aérea cuando se mantiene suspendida.' },
      { pickRate: 45, proPick: true, proReason: 'Vientos crecientes otorga dos cargas de ascenso, brindando una superioridad aérea y evasión inigualables en torneos.' }
    ]
  },
  genji: {
    minor: [
      { pickRate: 57, proPick: false, proReason: 'Robo de salud en Dragonblade, preferido por jugadores solitarios.' },
      { pickRate: 43, proPick: true, proReason: 'Cortes fugaces reduce cooldown de dash mediante cancel melee, multiplicando resets en peleas caóticas.' }
    ],
    major: [
      { pickRate: 51, proPick: true, proReason: 'Giro de hoja asegura ejecuciones letales por debajo del 50% de HP coordinadas con la comunicación del equipo.' },
      { pickRate: 49, proPick: false, proReason: 'Meditación aporta regeneración defensiva pero sacrifica burst agresivo.' }
    ]
  },
  hanzo: {
    minor: [
      { pickRate: 65, proPick: false, proReason: 'Flecha sónica más frecuente para wallhack constante en ladder.' },
      { pickRate: 35, proPick: true, proReason: 'Salto ágil mejorado permite a los francotiradores ganar micro-duelos de posicionamiento vertical.' }
    ],
    major: [
      { pickRate: 58, proPick: false, proReason: 'Más flechas en tormenta para spamear escudos.' },
      { pickRate: 42, proPick: true, proReason: 'Velocidad de proyectil aumentada para castigar cabezas a larga distancia con mayor consistencia.' }
    ]
  },
  hazard: {
    minor: [
      { pickRate: 63, proPick: false, proReason: 'Resistencia pasiva extra contra aturdimientos.' },
      { pickRate: 37, proPick: true, proReason: 'Generación de púas reactivas para castigar al tanque rival en duelos directos.' }
    ],
    major: [
      { pickRate: 46, proPick: false, proReason: 'Mayor duración de zonas tóxicas.' },
      { pickRate: 54, proPick: true, proReason: 'Colapso de terreno que frena en seco iniciaciones rápidas de Brawl o Dive.' }
    ]
  },
  illari: {
    minor: [
      { pickRate: 69, proPick: false, proReason: 'Alcance extendido de Torreta de sanación para despreocuparse del soporte.' },
      { pickRate: 31, proPick: true, proReason: 'Impulso solar otorga escape defensivo contra inmersiones coordinadas de Tracer y Sombra.' }
    ],
    major: [
      { pickRate: 52, proPick: false, proReason: 'Mayor radio de Sol cautivo.' },
      { pickRate: 48, proPick: true, proReason: 'Recarga acelerada del rifle solar para maximizar el DPS y headshots de dos golpes.' }
    ]
  },
  'jetpack-cat': {
    minor: [
      { pickRate: 66, proPick: false, proReason: 'Popular por mayor tiempo de vuelo sostenido.' },
      { pickRate: 34, proPick: true, proReason: 'Propulsión acrobática que permite esquivar hitscans mientras hostiga desde las alturas.' }
    ],
    major: [
      { pickRate: 45, proPick: false, proReason: 'Maullido sónico con mayor área de efecto.' },
      { pickRate: 55, proPick: true, proReason: 'Bombardeo felino concentrado para derribar soportes sin respuesta defensiva.' }
    ]
  },
  'junker-queen': {
    minor: [
      { pickRate: 59, proPick: false, proReason: 'Mayor duración de heridas sangrantes.' },
      { pickRate: 41, proPick: true, proReason: 'Grito de guerra otorga mayor bonificación de velocidad grupal para cerrar distancias rápidamente.' }
    ],
    major: [
      { pickRate: 62, proPick: true, proReason: 'Reducción de enfriamiento de Carnicería por cada objetivo golpeado para encadenar hachazos sin parar.' },
      { pickRate: 38, proPick: false, proReason: 'Mayor sanación de Adrenalina pero menor presión ofensiva.' }
    ]
  },
  junkrat: {
    minor: [
      { pickRate: 67, proPick: false, proReason: 'Mina adicional elegida en partidas casuales para movilidad caótica.' },
      { pickRate: 33, proPick: true, proReason: 'Cepo reforzado con mayor vida útil que frena de forma contundente flanqueadores en accesos estrechos.' }
    ],
    major: [
      { pickRate: 42, proPick: false, proReason: 'Neumático con mayor velocidad.' },
      { pickRate: 58, proPick: true, proReason: 'Granadas de rebote explosivo que niegan puntos de captura cerrados en mapas de Control.' }
    ]
  },
  juno: {
    minor: [
      { pickRate: 64, proPick: false, proReason: 'Ráfaga médica ampliada muy popular para sanar aliados dispersos.' },
      { pickRate: 36, proPick: true, proReason: 'Anillo de hipervelocidad mejorado para acelerar las transiciones de Brawl en el meta competitivo.' }
    ],
    major: [
      { pickRate: 49, proPick: false, proReason: 'Mayor escudo pasivo de navegación orbital.' },
      { pickRate: 51, proPick: true, proReason: 'Torpedos púlsares con fijación instantánea para asegurar daño decisivo antes de que el rival reaccione.' }
    ]
  },
  kiriko: {
    minor: [
      { pickRate: 64, proPick: false, proReason: 'Atención de urgencia agiliza curas críticas en el caos del ladder.' },
      { pickRate: 36, proPick: true, proReason: 'Vidente recompensa la puntería letal de kunais aportando curas simultáneas a distancia.' }
    ],
    major: [
      { pickRate: 42, proPick: true, proReason: 'Paso preparado brinda +40% de velocidad de ataque y recarga tras teleport, permitiendo asesinar duelistas rivales.' },
      { pickRate: 58, proPick: false, proReason: 'Baile otorga velocidad grupal con Suzu, muy útil en peleas abiertas de ranked.' }
    ]
  },
  lifeweaver: {
    minor: [
      { pickRate: 66, proPick: false, proReason: 'Plataforma petaloide más resistente en partidas públicas.' },
      { pickRate: 34, proPick: true, proReason: 'Tirón salvavidas con aceleración que permite recolocar al tanque instantáneamente sin perder posición.' }
    ],
    major: [
      { pickRate: 54, proPick: false, proReason: 'Mayor sanación pasiva de flor cargada.' },
      { pickRate: 46, proPick: true, proReason: 'Árbol de la vida con sobreescudo temporal para aguantar definitivas de alto daño como Gravitón.' }
    ]
  },
  lucio: {
    minor: [
      { pickRate: 68, proPick: false, proReason: 'Aura de sanación más potente elegida por jugadores casuales.' },
      { pickRate: 32, proPick: true, proReason: 'Impulso de patinaje en muros amplificado para rotaciones a máxima velocidad de nivel profesional.' }
    ],
    major: [
      { pickRate: 47, proPick: false, proReason: 'Barrera de sonido con mayor sobreescudo temporal.' },
      { pickRate: 53, proPick: true, proReason: 'Onda sonora mejorada con desestabilización que asegura caídas ambientales y desarma iniciaciones enemigas.' }
    ]
  },
  mauga: {
    minor: [
      { pickRate: 65, proPick: false, proReason: 'Mayor capacidad de munición para disparar sin interrupción.' },
      { pickRate: 35, proPick: true, proReason: 'Embestida arrolladora con menor enfriamiento para reposicionarse y romper formaciones defensivas.' }
    ],
    major: [
      { pickRate: 46, proPick: false, proReason: 'Sobrecarga cardíaca con mayor robo de vida individual.' },
      { pickRate: 54, proPick: true, proReason: 'Jaula de combate electrificada que cancela habilidades enemigas de escape en el núcleo del punto.' }
    ]
  },
  mei: {
    minor: [
      { pickRate: 60, proPick: false, proReason: 'Mayor duración de congelación pasiva.' },
      { pickRate: 40, proPick: true, proReason: 'Muro de hielo con despliegue instantáneo para aislar al tanque enemigo en la entrada del choke.' }
    ],
    major: [
      { pickRate: 48, proPick: false, proReason: 'Curación acelerada dentro del criocongelamiento.' },
      { pickRate: 52, proPick: true, proReason: 'Ventisca con congelación más rápida para castigar composiciones estáticas sin permitir escape.' }
    ]
  },
  mercy: {
    minor: [
      { pickRate: 72, proPick: false, proReason: 'Mayor rango de conexión del rayo para jugar en zonas seguras.' },
      { pickRate: 28, proPick: true, proReason: 'Ángel de la guarda con impulso direccional de alta velocidad para esquivar francotiradores y flancos.' }
    ],
    major: [
      { pickRate: 42, proPick: false, proReason: 'Resurrección con menor tiempo de casteo.' },
      { pickRate: 58, proPick: true, proReason: 'Potenciación de daño en Valkiria encadenada a todo el equipo para ganar guerras de recursos.' }
    ]
  },
  mizuki: {
    minor: [
      { pickRate: 63, proPick: false, proReason: 'Mayor radio de niebla protectora en ladder.' },
      { pickRate: 37, proPick: true, proReason: 'Paso sombrío rápido para flanquear y asegurar eliminaciones sorpresivas.' }
    ],
    major: [
      { pickRate: 44, proPick: false, proReason: 'Regeneración pasiva en cobertura.' },
      { pickRate: 56, proPick: true, proReason: 'Filo espiritual con penetración que castiga formaciones compactadas en objetivo.' }
    ]
  },
  moira: {
    minor: [
      { pickRate: 74, proPick: false, proReason: 'Orbe biótico con mayor capacidad de sanación en masa.' },
      { pickRate: 26, proPick: true, proReason: 'Evanescencia con mayor distancia de salto vertical para tomar high grounds inaccesibles.' }
    ],
    major: [
      { pickRate: 53, proPick: false, proReason: 'Rayo biótico con mayor robo de salud para duelos 1v1.' },
      { pickRate: 47, proPick: true, proReason: 'Coalescencia con daño penetrante incrementado para liquidar al soporte rival detrás de escudos.' }
    ]
  },
  orisa: {
    minor: [
      { pickRate: 58, proPick: false, proReason: 'Giro de jabalina con mayor velocidad frontal.' },
      { pickRate: 42, proPick: true, proReason: 'Fortificación con mayor reducción de daño para absorber definitivas en el punto.' }
    ],
    major: [
      { pickRate: 64, proPick: true, proReason: 'Lanzamiento de jabalina con aturdimiento extendido contra muros para picks instantáneos.' },
      { pickRate: 36, proPick: false, proReason: 'Atracción gravitatoria de definitiva con radio aumentado.' }
    ]
  },
  pharah: {
    minor: [
      { pickRate: 69, proPick: false, proReason: 'Combustible de propulsión aumentado para volar más tiempo.' },
      { pickRate: 31, proPick: true, proReason: 'Disparo de conmoción con mayor impulso horizontal para desestabilizar francotiradores rivales.' }
    ],
    major: [
      { pickRate: 48, proPick: false, proReason: 'Bombardeo con mayor dispersión de cohetes.' },
      { pickRate: 52, proPick: true, proReason: 'Impactos directos de cohete con daño crítico para eliminar objetivos de dos impactos certeros.' }
    ]
  },
  ramattra: {
    minor: [
      { pickRate: 61, proPick: false, proReason: 'Barrera del vacío con mayor tiempo de permanencia.' },
      { pickRate: 39, proPick: true, proReason: 'Vórtice voraz con mayor fuerza de atracción hacia abajo para derribar objetivos móviles.' }
    ],
    major: [
      { pickRate: 57, proPick: true, proReason: 'Forma Némesis con mayor velocidad de movimiento y penetración de golpes a través de barreras.' },
      { pickRate: 43, proPick: false, proReason: 'Aniquilación con mayor radio de aura pasiva.' }
    ]
  },
  reaper: {
    minor: [
      { pickRate: 63, proPick: false, proReason: 'Mayor robo de salud por disparo para tanquear en peleas desordenadas.' },
      { pickRate: 37, proPick: true, proReason: 'Paso de las sombras instantáneo que permite emboscadas sin delatar la posición antes de atacar.' }
    ],
    major: [
      { pickRate: 46, proPick: false, proReason: 'Flor de la muerte con velocidad de giro incrementada.' },
      { pickRate: 54, proPick: true, proReason: 'Forma espectral con mayor velocidad de desplazamiento para entrar y salir impunemente.' }
    ]
  },
  reinhardt: {
    minor: [
      { pickRate: 52, proPick: false, proReason: 'Carga de onda de fuego extra muy popular para spamear daño a distancia.' },
      { pickRate: 48, proPick: true, proReason: 'Determinación cruzada activa la autoregeneración un 75% antes mientras sostiene escudo, aliviando a los apoyos.' }
    ],
    major: [
      { pickRate: 63, proPick: true, proReason: 'Embate con escudo permite interrumpir definitivas enemigas como Coalescencia u Ojo Muerto sin exponer el cuerpo.' },
      { pickRate: 37, proPick: false, proReason: 'Furia ardiente da velocidad de ataque pero requiere arriesgar el escudo.' }
    ]
  },
  roadhog: {
    minor: [
      { pickRate: 64, proPick: false, proReason: 'Inhalador con mayor sanación instantánea.' },
      { pickRate: 36, proPick: true, proReason: 'Garfio con alcance y velocidad mejorada para castigar al instante errores de posición en torneos.' }
    ],
    major: [
      { pickRate: 51, proPick: true, proReason: 'Trampa de cerdos con ralentización intensa para asegurar la muerte tras el combo de gancho.' },
      { pickRate: 49, proPick: false, proReason: 'Juego sucio con mayor empuje en la definitiva.' }
    ]
  },
  shion: {
    minor: [
      { pickRate: 66, proPick: false, proReason: 'Mayor alcance de pulso electromagnético en ladder.' },
      { pickRate: 34, proPick: true, proReason: 'Desfase temporal rápido para eludir disparos letales de francotirador.' }
    ],
    major: [
      { pickRate: 45, proPick: false, proReason: 'Sobrecarga de escudos zonal.' },
      { pickRate: 55, proPick: true, proReason: 'Filo cuántico con daño crítico a objetivos con armadura.' }
    ]
  },
  sierra: {
    minor: [
      { pickRate: 62, proPick: false, proReason: 'Mayor resistencia en combates prolongados.' },
      { pickRate: 38, proPick: true, proReason: 'Aceleración táctica para acompañar transiciones de Brawl coordinadas.' }
    ],
    major: [
      { pickRate: 46, proPick: false, proReason: 'Balística pesada con mayor dispersión.' },
      { pickRate: 54, proPick: true, proReason: 'Impacto perforante para quebrar formaciones con escudo.' }
    ]
  },
  sigma: {
    minor: [
      { pickRate: 59, proPick: false, proReason: 'Acreción con mayor daño por impacto.' },
      { pickRate: 41, proPick: true, proReason: 'Recuperación de Barrera experimental acelerada para no ceder espacio en guerras de poke.' }
    ],
    major: [
      { pickRate: 47, proPick: false, proReason: 'Flujo gravitacional con mayor velocidad de elevación.' },
      { pickRate: 53, proPick: true, proReason: 'Agarre cinético con mayor conversión a sobreescudo para tanquear burst coordinado.' }
    ]
  },
  sojourn: {
    minor: [
      { pickRate: 64, proPick: false, proReason: 'Disparo dispersor más ancho para asegurar daño zonal.' },
      { pickRate: 36, proPick: true, proReason: 'Carga pasiva de cañón de riel conservada durante más tiempo para amenazar picks sorpresivos.' }
    ],
    major: [
      { pickRate: 45, proPick: false, proReason: 'Deslizamiento más largo para escapar.' },
      { pickRate: 55, proPick: true, proReason: 'Sobrecarga en Overclock que perfora barreras y vaporiza supports con puntería de hitscan profesional.' }
    ]
  },
  soldier76: {
    minor: [
      { pickRate: 68, proPick: false, proReason: 'Campo biótico con mayor área y sanación pasiva.' },
      { pickRate: 32, proPick: true, proReason: 'Sprint táctico con velocidad incrementada para reubicaciones y flancos agresivos constantes.' }
    ],
    major: [
      { pickRate: 42, proPick: false, proReason: 'Visor táctico con mayor duración.' },
      { pickRate: 58, proPick: true, proReason: 'Cohetes Helix con recarga rápida y daño concentrado para asegurar eliminaciones instantáneas.' }
    ]
  },
  sombra: {
    minor: [
      { pickRate: 70, proPick: false, proReason: 'Invisibilidad pasiva con mayor velocidad de traslación.' },
      { pickRate: 30, proPick: true, proReason: 'Translocalizador con tiempo de uso reducido para escapar de castigos inmediatos.' }
    ],
    major: [
      { pickRate: 39, proPick: false, proReason: 'Virus con mayor daño prolongado en el tiempo.' },
      { pickRate: 61, proPick: true, proReason: 'Hackeo de combate con silencio prolongado para anular definitivas rivales y coordinar el focus de equipo.' }
    ]
  },
  symmetra: {
    minor: [
      { pickRate: 63, proPick: false, proReason: 'Torretas centinela con mayor ralentización.' },
      { pickRate: 37, proPick: true, proReason: 'Teletransportador con tiempo de despliegue instantáneo para rotaciones grupales en mapas de captura.' }
    ],
    major: [
      { pickRate: 54, proPick: false, proReason: 'Orbes de energía cargados más veloces.' },
      { pickRate: 46, proPick: true, proReason: 'Rayo de fotones con retención de nivel 3 para derretir tanques y escudos en peleas cerradas.' }
    ]
  },
  torbjorn: {
    minor: [
      { pickRate: 67, proPick: false, proReason: 'Torreta con mayor salud y auto-reparación.' },
      { pickRate: 33, proPick: true, proReason: 'Sobrecarga con mayor velocidad de movimiento y disparo para batirse en duelo contra tanques.' }
    ],
    major: [
      { pickRate: 49, proPick: false, proReason: 'Núcleo de magma con mayor tiempo en el suelo.' },
      { pickRate: 51, proPick: true, proReason: 'Disparos de remache con penetración de armadura para ablandar frentes enemigos blindados.' }
    ]
  },
  tracer: {
    minor: [
      { pickRate: 65, proPick: false, proReason: 'Regeneración temporal activa la salud pasiva el doble de rápido, ideal para jugar sin coordinar.' },
      { pickRate: 35, proPick: true, proReason: 'Recarga cinética en cuerpo a cuerpo asegura combos letales de un cargador sin pausas.' }
    ],
    major: [
      { pickRate: 41, proPick: true, proReason: 'Packs de traslación otorgan autonomía total en rutas de flanqueo profundo de OWCS.' },
      { pickRate: 59, proPick: false, proReason: 'Entramado cuántico da salud extra tras regresar, preferido en ladder para perdonar errores.' }
    ]
  },
  vendetta: {
    minor: [
      { pickRate: 61, proPick: false, proReason: 'Armadura reforzada para duelos cuerpo a cuerpo.' },
      { pickRate: 39, proPick: true, proReason: 'Paso sombrío ofensivo para cerrar brechas contra tiradores.' }
    ],
    major: [
      { pickRate: 47, proPick: false, proReason: 'Daño en área expandido.' },
      { pickRate: 53, proPick: true, proReason: 'Corte ejecutor que finaliza objetivos con menos del 35% de vida.' }
    ]
  },
  venture: {
    minor: [
      { pickRate: 64, proPick: false, proReason: 'Mayor escudo obtenido al usar habilidades subterráneas.' },
      { pickRate: 36, proPick: true, proReason: 'Excavación con velocidad acelerada para irrumpir por sorpresa y salir antes de recibir focus.' }
    ],
    major: [
      { pickRate: 58, proPick: true, proReason: 'Ondas sísmicas con mayor daño concentrado para pulverizar objetivos en espacios cerrados.' },
      { pickRate: 42, proPick: false, proReason: 'Salto sísmico con mayor altura para sortear obstáculos.' }
    ]
  },
  widowmaker: {
    minor: [
      { pickRate: 59, proPick: false, proReason: 'Menor costo de munición por disparo con mira en ladder.' },
      { pickRate: 41, proPick: true, proReason: 'Instinto de francotirador carga tiros el doble de rápido tras gancho para tiros aéreos de élite.' }
    ],
    major: [
      { pickRate: 38, proPick: false, proReason: 'Mina venenosa que dispara dardos autónomos.' },
      { pickRate: 62, proPick: true, proReason: 'Mordisco de viuda carga al 125% y atraviesa enemigos para castigar agrupaciones en choke points.' }
    ]
  },
  winston: {
    minor: [
      { pickRate: 62, proPick: false, proReason: 'Cañón tesla con daño en cadena aumentado.' },
      { pickRate: 38, proPick: true, proReason: 'Salto propulsor con tiempo de recarga reducido al golpear para entrar y salir sin ser castigado.' }
    ],
    major: [
      { pickRate: 49, proPick: false, proReason: 'Cúpula protectora con mayor resistencia de salud.' },
      { pickRate: 51, proPick: true, proReason: 'Furia primigenia con mayor daño de manotazo para asesinar al support enemigo en esquinas.' }
    ]
  },
  'wrecking-ball': {
    minor: [
      { pickRate: 66, proPick: false, proReason: 'Escudo adaptable con mayor absorción pasiva.' },
      { pickRate: 34, proPick: true, proReason: 'Gancho garra con mayor retención de inercia para mantener velocidad máxima y empujar enemigos continuamente.' }
    ],
    major: [
      { pickRate: 44, proPick: false, proReason: 'Campo de minas con dispersión ampliada.' },
      { pickRate: 56, proPick: true, proReason: 'Impacto demoledor con reducción de enfriamiento al golpear múltiples objetivos en el aire.' }
    ]
  },
  wuyang: {
    minor: [
      { pickRate: 63, proPick: false, proReason: 'Barrera de agua con mayor duración defensiva.' },
      { pickRate: 37, proPick: true, proReason: 'Corriente mística que acelera el tiempo de respuesta del equipo.' }
    ],
    major: [
      { pickRate: 48, proPick: false, proReason: 'Oleada curativa con mayor radio de dispersión.' },
      { pickRate: 52, proPick: true, proReason: 'Vórtice de marea que inmoviliza a enemigos prioritarios para facilitar el focus.' }
    ]
  },
  zarya: {
    minor: [
      { pickRate: 61, proPick: false, proReason: 'Mayor absorción por barrera para partidas desorganizadas.' },
      { pickRate: 39, proPick: true, proReason: 'Tasa de retención de energía mejorada para mantener el cañón al 100% en transiciones de pelea.' }
    ],
    major: [
      { pickRate: 44, proPick: false, proReason: 'Bomba de gravitones con radio de atracción más grande.' },
      { pickRate: 56, proPick: true, proReason: 'Doble barrera personal consecutiva para agresiones implacables en la frontline de Brawl.' }
    ]
  },
  zenyatta: {
    minor: [
      { pickRate: 67, proPick: false, proReason: 'Orbe de armonía con rango aumentado.' },
      { pickRate: 33, proPick: true, proReason: 'Patada rápida con mayor retroceso y daño para neutralizar tanques y flanqueadores que intenten divearlo.' }
    ],
    major: [
      { pickRate: 43, proPick: false, proReason: 'Trascendencia más rápida de cargar.' },
      { pickRate: 57, proPick: true, proReason: 'Orbe de discordia amplificado sobre objetivos aislados para garantizar eliminaciones instantáneas con focus de equipo.' }
    ]
  }
};

// Check if any hero from kits is missing
const allKitHeroIds = Object.keys(kits);
const missingInEntries = allKitHeroIds.filter(id => !heroPerkMetaEntries[id]);
if (missingInEntries.length > 0) {
  console.error('Missing heroes in entries:', missingInEntries);
  process.exit(1);
}

// Generate the TypeScript file src/games/overwatch/heroPerksMeta.ts
const tsContent = `// Archivo autogenerado con estadísticas competitivas oficiales para los Perks de Overwatch 2
// Incluye porcentajes de selección en ranked/ladder y las selecciones prioritarias de profesionales (OWCS / Top 500)

import type { HeroPerkItem } from '../../types/game';

export interface PerkCompetitiveMeta {
  pickRate: number; // Porcentaje de selección general en partidas (suma 100% con su contraparte)
  proPick: boolean; // Verdadero si los profesionales de OWCS / Top 500 la priorizan
  proReason?: string; // Motivo táctico por el cual los profesionales la eligen
}

export interface HeroPerkMetaGroup {
  minor: PerkCompetitiveMeta[];
  major: PerkCompetitiveMeta[];
}

export const HERO_PERKS_METADATA: Record<string, HeroPerkMetaGroup> = ${JSON.stringify(heroPerkMetaEntries, null, 2)};

/**
 * Enriquece la lista de perks de un héroe con los datos de selección competitiva,
 * porcentaje de popularidad y distinción de Pro Pick.
 */
export function getEnrichedHeroPerks(
  heroId: string,
  basePerks?: { minor: HeroPerkItem[]; major: HeroPerkItem[] }
): { minor: HeroPerkItem[]; major: HeroPerkItem[] } {
  if (!basePerks) {
    return { minor: [], major: [] };
  }

  const meta = HERO_PERKS_METADATA[heroId];
  if (!meta) {
    return basePerks;
  }

  const enrichList = (items: HeroPerkItem[], metaList: PerkCompetitiveMeta[] = []): HeroPerkItem[] => {
    return items.map((item, index) => {
      const perkMeta = metaList[index];
      if (!perkMeta) return item;
      return {
        ...item,
        pickRate: item.pickRate ?? perkMeta.pickRate,
        proPick: item.proPick ?? perkMeta.proPick,
        proReason: item.proReason ?? perkMeta.proReason,
      };
    });
  };

  return {
    minor: enrichList(basePerks.minor, meta.minor),
    major: enrichList(basePerks.major, meta.major),
  };
}
`;

fs.writeFileSync(path.join(__dirname, '../src/games/overwatch/heroPerksMeta.ts'), tsContent, 'utf8');
console.log('Successfully generated src/games/overwatch/heroPerksMeta.ts for all', allKitHeroIds.length, 'heroes!');

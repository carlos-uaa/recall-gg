import type { GameMap, Hero, HeroMapEvaluation, MapSynergyRating } from '../../types/game';
import { OVERWATCH_MAPS } from './maps';

export interface MapGeometryProfile {
  sightlines: 1 | 2 | 3 | 4 | 5;    // 5 = extreme sniper corridors, 1 = enclosed indoor rooms
  verticality: 1 | 2 | 3 | 4 | 5;   // 5 = multi-tier mandatory high ground, 1 = flat streets
  tightChokes: 1 | 2 | 3 | 4 | 5;   // 5 = tight corners/chokes/rooms, 1 = wide open
  boopPotential: 0 | 1 | 2 | 3 | 4 | 5; // 5 = iconic pits/wells/bridges
  flankOpenness: 1 | 2 | 3 | 4 | 5; // 5 = sprawling 360° flank lanes, 1 = single linear lane
  skybox: 1 | 2 | 3 | 4 | 5;        // 5 = open sky with roof cover, 1 = low ceilings/exposed sniper lane
}

export const MAP_GEOMETRY: Record<string, MapGeometryProfile> = {
  // Híbrido
  'kings-row':            { sightlines: 2, verticality: 2, tightChokes: 5, boopPotential: 2, flankOpenness: 3, skybox: 3 },
  'midtown':              { sightlines: 4, verticality: 3, tightChokes: 3, boopPotential: 1, flankOpenness: 3, skybox: 3 },
  'eichenwalde':          { sightlines: 3, verticality: 4, tightChokes: 4, boopPotential: 3, flankOpenness: 2, skybox: 5 },
  'blizzard-world':       { sightlines: 4, verticality: 4, tightChokes: 2, boopPotential: 1, flankOpenness: 4, skybox: 4 },
  'hollywood':            { sightlines: 3, verticality: 4, tightChokes: 3, boopPotential: 0, flankOpenness: 3, skybox: 3 },
  'paraiso':              { sightlines: 2, verticality: 5, tightChokes: 3, boopPotential: 2, flankOpenness: 3, skybox: 5 },
  'numbani':              { sightlines: 3, verticality: 5, tightChokes: 2, boopPotential: 1, flankOpenness: 3, skybox: 4 },

  // Escolta
  'circuit-royal':        { sightlines: 5, verticality: 3, tightChokes: 1, boopPotential: 1, flankOpenness: 1, skybox: 2 },
  'dorado':               { sightlines: 3, verticality: 5, tightChokes: 2, boopPotential: 1, flankOpenness: 4, skybox: 4 },
  'watchpoint-gibraltar': { sightlines: 4, verticality: 5, tightChokes: 2, boopPotential: 1, flankOpenness: 4, skybox: 3 },
  'havana':               { sightlines: 5, verticality: 3, tightChokes: 1, boopPotential: 1, flankOpenness: 1, skybox: 2 },
  'junkertown':           { sightlines: 5, verticality: 3, tightChokes: 1, boopPotential: 0, flankOpenness: 2, skybox: 2 },
  'rialto':               { sightlines: 4, verticality: 2, tightChokes: 3, boopPotential: 4, flankOpenness: 2, skybox: 5 },
  'route-66':             { sightlines: 4, verticality: 4, tightChokes: 2, boopPotential: 1, flankOpenness: 3, skybox: 3 },
  'shambali-monastery':   { sightlines: 3, verticality: 4, tightChokes: 4, boopPotential: 1, flankOpenness: 2, skybox: 2 },

  // Control
  'busan':                { sightlines: 4, verticality: 4, tightChokes: 2, boopPotential: 4, flankOpenness: 4, skybox: 4 },
  'ilios':                { sightlines: 4, verticality: 3, tightChokes: 2, boopPotential: 5, flankOpenness: 4, skybox: 5 },
  'lijiang-tower':        { sightlines: 1, verticality: 1, tightChokes: 5, boopPotential: 5, flankOpenness: 3, skybox: 4 },
  'nepal':                { sightlines: 2, verticality: 2, tightChokes: 4, boopPotential: 4, flankOpenness: 3, skybox: 3 },
  'oasis':                { sightlines: 2, verticality: 3, tightChokes: 4, boopPotential: 2, flankOpenness: 5, skybox: 5 },
  'antarctic-peninsula':  { sightlines: 1, verticality: 2, tightChokes: 5, boopPotential: 1, flankOpenness: 2, skybox: 1 },
  'samoa':                { sightlines: 1, verticality: 3, tightChokes: 4, boopPotential: 3, flankOpenness: 4, skybox: 3 },

  // Avance (Push)
  'colosseo':             { sightlines: 4, verticality: 3, tightChokes: 3, boopPotential: 0, flankOpenness: 4, skybox: 3 },
  'new-queen-street':     { sightlines: 3, verticality: 2, tightChokes: 3, boopPotential: 0, flankOpenness: 5, skybox: 3 },
  'esperanca':            { sightlines: 3, verticality: 3, tightChokes: 3, boopPotential: 1, flankOpenness: 5, skybox: 4 },
  'runasapi':             { sightlines: 2, verticality: 4, tightChokes: 3, boopPotential: 3, flankOpenness: 5, skybox: 4 },

  // Punto Caliente (Flashpoint)
  'new-junk-city':        { sightlines: 1, verticality: 2, tightChokes: 5, boopPotential: 0, flankOpenness: 5, skybox: 2 },
  'suravasa':             { sightlines: 2, verticality: 2, tightChokes: 4, boopPotential: 1, flankOpenness: 5, skybox: 4 },
  'aatlis':               { sightlines: 2, verticality: 3, tightChokes: 4, boopPotential: 2, flankOpenness: 5, skybox: 3 },

  // Invasión / Clash
  'grimsvotn':            { sightlines: 2, verticality: 4, tightChokes: 3, boopPotential: 2, flankOpenness: 4, skybox: 3 },
  'neon-junction':        { sightlines: 2, verticality: 4, tightChokes: 3, boopPotential: 1, flankOpenness: 4, skybox: 3 },
  'hanaoka':              { sightlines: 1, verticality: 3, tightChokes: 5, boopPotential: 0, flankOpenness: 3, skybox: 2 },
  'throne-of-anubis':     { sightlines: 1, verticality: 3, tightChokes: 5, boopPotential: 0, flankOpenness: 3, skybox: 2 },
};

interface HeroGeometryWeights {
  sightlines?: number;
  verticality?: number;
  tightChokes?: number;
  boopPotential?: number;
  flankOpenness?: number;
  skybox?: number;
}

export interface HeroMapSynergyProfile {
  archetypeSummary: string;
  weights: HeroGeometryWeights;
  idealMaps: Record<string, { score: number; reason: string }>;
  poorMaps: Record<string, { score: number; reason: string }>;
}

export const HERO_MAP_PROFILES: Record<string, HeroMapSynergyProfile> = {
  // ============================================================================
  // TANKS (15)
  // ============================================================================
  dva: {
    archetypeSummary: 'Brilla en mapas con múltiples alturas (High Ground) para disputar francotiradores y pierde valor en pasillos estrechos donde los rayos no tienen cobertura.',
    weights: { verticality: 3.2, flankOpenness: 1.5, tightChokes: -1.5 },
    idealMaps: {
      'watchpoint-gibraltar': { score: 16, reason: 'Control absoluto de las pasarelas altas y el hangar con Impulsores' },
      'dorado': { score: 15, reason: 'Domina los techos y balcones desde el primer hasta el último punto' },
      'numbani': { score: 15, reason: 'Limpia fácilmente las galerías superiores del Punto A y calles' },
      'paraiso': { score: 14, reason: 'Rotación vertical inmediata para proteger soportes o cazar tiradores' },
      'busan': { score: 13, reason: 'Gran movilidad para controlar ángulos abiertos y base MEKA' },
    },
    poorMaps: {
      'kings-row': { score: -11, reason: 'Calles estrechas y planas que favorecen a Zarya, Symmetra y Mei en tu contra' },
      'lijiang-tower': { score: -10, reason: 'Puntos cerrados donde los tanques de Brawl y rayos imponen el ritmo' },
      'antarctic-peninsula': { score: -11, reason: 'Salas techadas de corta distancia donde la Matriz se agota rápido' },
      'hanaoka': { score: -9, reason: 'Objetivos muy cerrados que premian el Brawl frontal sobre la verticalidad' },
    },
  },
  doomfist: {
    archetypeSummary: 'Domina mapas con esquinas cerradas combinadas con High Ground para emboscar soportes y sufre en rectas abiertas sin coberturas.',
    weights: { verticality: 2.5, flankOpenness: 2.2, sightlines: -1.8 },
    idealMaps: {
      'dorado': { score: 15, reason: 'Tejados, balcones y flanqueos cortos ideales para iniciar y escapar' },
      'paraiso': { score: 14, reason: 'Desniveles constantes para cargar Puño cohete desde ángulos ciegos' },
      'ilios': { score: 14, reason: 'Muros cercanos y pozos letales para empujar rivales al vacío' },
      'lijiang-tower': { score: 13, reason: 'Puentes, columnas y bordes ambientales perfectos para su movilidad' },
      'esperanca': { score: 13, reason: 'Abundantes rutas laterales para cazar la retaguardia enemiga' },
    },
    poorMaps: {
      'havana': { score: -14, reason: 'Rectas larguísimas sin cobertura donde sufres poke antes de entrar' },
      'circuit-royal': { score: -14, reason: 'Pasillo lineal dominado por francotiradores y escudos de Poke' },
      'junkertown': { score: -13, reason: 'Primer sector demasiado abierto que castiga tus entradas cuerpo a cuerpo' },
      'midtown': { score: -8, reason: 'Líneas largas que exponen tus tiempos de recarga si fallas el combo' },
    },
  },
  hazard: {
    archetypeSummary: 'Excelente en mapas híbridos y de desnivel medio donde su muro dentado bloquea salidas en cuellos de botella y le permite saltar sobre objetivos.',
    weights: { verticality: 2.0, tightChokes: 2.2, sightlines: -2.0 },
    idealMaps: {
      'eichenwalde': { score: 14, reason: 'Bloquea el cuello de botella inicial y salta a las almenas del castillo' },
      'paraiso': { score: 14, reason: 'Combina peleas cerradas con desniveles cortos ideales para su salto' },
      'samoa': { score: 13, reason: 'Puntos compactos con cobertura donde encierra rivales con su muro' },
      'runasapi': { score: 13, reason: 'Terreno escalonado perfecto para acorralar soportes sin escape' },
    },
    poorMaps: {
      'havana': { score: -13, reason: 'Excesiva distancia abierta donde su alcance corto queda vendido' },
      'junkertown': { score: -13, reason: 'Líneas de visión demasiado largas frente a composiciones de Poke' },
      'circuit-royal': { score: -12, reason: 'Cuesta arriba lineal donde el daño a distancia desgasta su entrada' },
    },
  },
  winston: {
    archetypeSummary: 'Rey indiscutible de los mapas verticales con High Ground dominante; sufre en pasillos estrechos frente a escopetas y Brawl pesado.',
    weights: { verticality: 3.6, flankOpenness: 1.4, tightChokes: -1.4 },
    idealMaps: {
      'watchpoint-gibraltar': { score: 16, reason: 'El mejor mapa de Winston: controla el High Ground en las 3 fases' },
      'dorado': { score: 16, reason: 'Salto propulsor domina balcones e impide que los hitscans respiren' },
      'numbani': { score: 15, reason: ' Aísla instantáneamente a los soportes enemigos en las pasarelas altas' },
      'paraiso': { score: 14, reason: 'Verticalidad constante con techos para bailar dentro de su burbuja' },
      'busan': { score: 13, reason: 'Gran control de alturas y rotaciones rápidas sobre objetivos abiertos' },
    },
    poorMaps: {
      'kings-row': { score: -11, reason: 'Calles angostas sin escapatoria vertical donde Reaper y Rein te castigan' },
      'antarctic-peninsula': { score: -12, reason: 'Techos bajos que impiden saltos limpios y favorecen el Brawl cerrado' },
      'new-junk-city': { score: -10, reason: 'Puntos interiores cerrados donde los tanques de asalto te ganan el duelo' },
      'circuit-royal': { score: -10, reason: 'Pocas rutas de flanqueo para saltar sin recibir todo el Poke frontal' },
    },
  },
  'wrecking-ball': {
    archetypeSummary: 'Prospera en mapas amplios de Control, Avance y Punto Caliente llenos de botiquines, pilares de giro y bordes ambientales.',
    weights: { flankOpenness: 3.0, boopPotential: 2.0, tightChokes: -1.8 },
    idealMaps: {
      'lijiang-tower': { score: 15, reason: 'Puentes, columnas centrales y abismos perfectos para Garra y empujones' },
      'ilios': { score: 15, reason: 'Pozos, faro y amplios flancos con botiquines para disrupción infinita' },
      'esperanca': { score: 14, reason: 'Mapa abierto con múltiples rutas para cortar refuerzos y rotar al instante' },
      'suravasa': { score: 14, reason: 'Largas rotaciones entre puntos donde tu velocidad llega primero siempre' },
      'new-queen-street': { score: 13, reason: 'Calles anchas y botiquines accesibles para hostigar sin depender de curas' },
    },
    poorMaps: {
      'kings-row': { score: -13, reason: 'Pasillos estrechos donde un solo stun o muro corta toda tu inercia' },
      'antarctic-peninsula': { score: -13, reason: 'Geometría interior apretada que traba el balanceo del gancho' },
      'shambali-monastery': { score: -11, reason: 'Curvas cerradas donde tu equipo queda sin escudo frontal' },
      'hanaoka': { score: -11, reason: 'Puntos cerrados con poca amplitud para tomar velocidad máxima' },
    },
  },
  domina: {
    archetypeSummary: 'Especialista en controlar líneas medias-largas y cuellos de botella estructurados gracias a su barrera segmentada y presión de Poke.',
    weights: { sightlines: 2.6, tightChokes: 1.0, flankOpenness: -2.0 },
    idealMaps: {
      'circuit-royal': { score: 15, reason: 'Pasillo largo ideal para anclar tu barrera y dominar el intercambio de Poke' },
      'havana': { score: 14, reason: 'Sostiene ángulos largos protegiendo a tus tiradores del fuego rival' },
      'shambali-monastery': { score: 13, reason: 'Curvas ascendentes donde su barrera bloquea toda la calle principal' },
      'midtown': { score: 13, reason: 'Excelente control de las avenidas largas del primer y segundo sector' },
    },
    poorMaps: {
      'new-junk-city': { score: -12, reason: 'Flancos de 360 grados donde rodean tu escudo con facilidad' },
      'suravasa': { score: -12, reason: 'Rotaciones rápidas y entradas múltiples que castigan su baja movilidad' },
      'watchpoint-gibraltar': { score: -11, reason: 'Demasiada altura vertical donde los tanques Dive ignoran tu frente' },
    },
  },
  ramattra: {
    archetypeSummary: 'Muy versátil en mapas Híbridos y de Control con cuellos de botella definidos, donde alterna Poke con escudo y Forma Némesis en espacios cerrados.',
    weights: { tightChokes: 2.4, verticality: -1.8 },
    idealMaps: {
      'kings-row': { score: 15, reason: 'Domina el arco inicial y aplasta rivales en calles cerradas con Némesis' },
      'shambali-monastery': { score: 15, reason: 'Su mapa natal: esquinas y pendientes hechas a medida para Aniquilación' },
      'antarctic-peninsula': { score: 13, reason: 'Objetivos compactos donde sus puños atraviesan escudos sin escape' },
      'oasis': { score: 12, reason: 'Puntos cerrados ideales para sostener presencia con Vórtice voraz' },
    },
    poorMaps: {
      'watchpoint-gibraltar': { score: -14, reason: 'Sin movilidad vertical para contestar las pasarelas altas del hangar' },
      'dorado': { score: -13, reason: 'Sufre contra equipos apostados en balcones fuera del alcance de Némesis' },
      'numbani': { score: -12, reason: 'Dificultad severa para limpiar el High Ground del primer punto' },
      'junkertown': { score: -10, reason: 'Espacios demasiado abiertos en el primer punto antes de cerrar distancia' },
    },
  },
  reinhardt: {
    archetypeSummary: 'Imparable en mapas planos y estrechos con esquinas cerradas; sufre enormemente en mapas con líneas largas o High Ground inalcanzable.',
    weights: { tightChokes: 3.6, sightlines: -2.4, verticality: -2.6 },
    idealMaps: {
      'kings-row': { score: 16, reason: 'El santuario histórico de Reinhardt: esquinas cortas y pasillos para Seísmo' },
      'lijiang-tower': { score: 15, reason: 'Centro de Control y Mercado Nocturno fuerzan peleas a rango de martillo' },
      'antarctic-peninsula': { score: 14, reason: ' pasillos interiores estrechos donde nadie escapa a tus golpes' },
      'hanaoka': { score: 14, reason: 'Puntos lineales y cerrados ideales para avanzar con Lúcio y aplastar' },
      'eichenwalde': { score: 13, reason: 'Fuerte dominio del primer arco y la fase final dentro del salón del trono' },
    },
    poorMaps: {
      'watchpoint-gibraltar': { score: -16, reason: 'Verticalidad extrema donde te disparan desde arriba sin que puedas subir' },
      'junkertown': { score: -15, reason: 'Tu escudo se rompe antes de cruzar las enormes explanadas abiertas' },
      'havana': { score: -15, reason: 'Líneas de francotirador larguísimas que hacen inviable caminar de frente' },
      'dorado': { score: -14, reason: 'Balcones elevados constantes que anulan el alcance cuerpo a cuerpo' },
      'circuit-royal': { score: -13, reason: 'Cuesta larga dominada por Poke que funde tu barrera rápidamente' },
    },
  },
  sigma: {
    archetypeSummary: 'El mejor tanque ancla para mapas de Escolta con líneas de visión largas; pierde terreno en mapas caóticos y cerrados de Brawl rápido.',
    weights: { sightlines: 3.6, tightChokes: -1.8, flankOpenness: -1.2 },
    idealMaps: {
      'circuit-royal': { score: 16, reason: 'El mejor mapa de Sigma: domina cada curva larga con escudo y roca' },
      'junkertown': { score: 16, reason: 'Controla líneas largas protegiendo tiradores y absorbiendo ráfagas' },
      'havana': { score: 16, reason: 'Sostiene el Poke a larga distancia mejor que cualquier otro tanque' },
      'rialto': { score: 14, reason: 'Puentes y ángulos largos perfectos para sus Hiperesferas rebotadas' },
      'shambali-monastery': { score: 13, reason: 'Defensa sólida en ángulos largos escalonados' },
    },
    poorMaps: {
      'lijiang-tower': { score: -13, reason: 'Puntos cerrados donde Reinhardt, Ramattra o Junker Queen te pasan por encima' },
      'antarctic-peninsula': { score: -13, reason: 'Distancias cortas que anulan tu ventaja de rango y te exponen al Rush' },
      'new-junk-city': { score: -12, reason: 'Rotaciones rápidas y peleas cuerpo a cuerpo que castigan tu lentitud' },
      'samoa': { score: -11, reason: 'Objetivos cerrados donde el Brawl agresivo rompe tu posición fácilmente' },
    },
  },
  dmon: {
    archetypeSummary: 'Meca pesado de asalto que arrasa en objetivos cerrados y puntos de captura compactos, pero sufre desgaste en explanadas abiertas.',
    weights: { tightChokes: 2.8, sightlines: -2.2, verticality: -1.2 },
    idealMaps: {
      'kings-row': { score: 14, reason: 'Domina el cuerpo a cuerpo en las calles estrechas del recorrido' },
      'busan': { score: 13, reason: 'Gran presencia en el punto central de Base MEKA y santuario cerrado' },
      'samoa': { score: 14, reason: 'Objetivos cerrados ideales para sostener peleas frontales prolongadas' },
      'new-junk-city': { score: 13, reason: 'Fuerte control de las arenas interiores de Punto Caliente' },
    },
    poorMaps: {
      'havana': { score: -14, reason: 'Explanadas demasiado largas donde sufres Poke constante al avanzar' },
      'junkertown': { score: -13, reason: 'Falta de coberturas cercanas frente a francotiradores rivales' },
      'watchpoint-gibraltar': { score: -12, reason: 'Poca capacidad para disputar múltiples alturas simultáneas' },
    },
  },
  'junker-queen': {
    archetypeSummary: 'Letal en mapas de Control, Punto Caliente y Avance con esquinas cortas donde el cuchillo y Carnicería golpean a varios objetivos.',
    weights: { tightChokes: 3.0, flankOpenness: 1.2, sightlines: -2.4, verticality: -1.8 },
    idealMaps: {
      'new-junk-city': { score: 16, reason: 'Su arena local: esquinas cerradas y rotaciones rápidas con Grito de mando' },
      'suravasa': { score: 15, reason: 'Grito de mando acelera las rotaciones y domina los puntos cerrados' },
      'lijiang-tower': { score: 14, reason: 'Espacios reducidos donde Carnicería impacta a múltiples enemigos' },
      'kings-row': { score: 14, reason: 'Peleas frontales de esquina donde sus sangrados sostienen toda la pelea' },
      'samoa': { score: 13, reason: 'Coberturas cercanas al punto que facilitan enganchar con Hoja dentada' },
    },
    poorMaps: {
      'circuit-royal': { score: -15, reason: 'Sin escudo ni rango para cruzar las larguísimas rectas de francotirador' },
      'havana': { score: -15, reason: 'El Poke enemigo te desgasta mucho antes de entrar en rango de escopeta' },
      'junkertown': { score: -13, reason: 'Irónicamente su primer sector abierto castiga duramente la falta de barrera' },
      'watchpoint-gibraltar': { score: -14, reason: 'Incapaz de contestar equipos apostados en las pasarelas altas' },
    },
  },
  mauga: {
    archetypeSummary: 'Fuerte en mapas planos y pasillos cerrados con buena cobertura natural cerca del objetivo; muy vulnerable en líneas largas abiertas o contra alturas.',
    weights: { tightChokes: 2.6, sightlines: -2.4, verticality: -2.2 },
    idealMaps: {
      'samoa': { score: 15, reason: 'Coberturas pegadas al punto donde Lucha enjaulada encierra a todo el rival' },
      'antarctic-peninsula': { score: 14, reason: 'Salas cerradas donde sus dos ametralladoras derriten a corta distancia' },
      'lijiang-tower': { score: 13, reason: 'Objetivos compactos que fuerzan al tanque rival a pelear frente a ti' },
      'new-junk-city': { score: 13, reason: 'Puntos cerrados ideales para Arrollar y activar Sobreestimulación' },
    },
    poorMaps: {
      'havana': { score: -15, reason: 'Blanco gigante sin escudo en rectas abiertas frente a Ana, Zen y Widow' },
      'circuit-royal': { score: -14, reason: 'El Poke de largo alcance drena tus recursos antes de tocar el carro' },
      'watchpoint-gibraltar': { score: -14, reason: 'Sufre muchísimo contra ángulos elevados fuera de su alcance efectivo' },
      'dorado': { score: -12, reason: 'Demasiados balcones elevados desde donde evitan pelear en tu cara' },
    },
  },
  orisa: {
    archetypeSummary: 'Ancla sólida en mapas de Control, Híbridos cerrados y bordes con vacío donde Jabalina y Giro bloquean entradas enteras.',
    weights: { tightChokes: 2.4, boopPotential: 1.5, verticality: -2.0 },
    idealMaps: {
      'ilios': { score: 14, reason: 'Domina el Pozo y Faro empujando enemigos con Giro de jabalina' },
      'nepal': { score: 14, reason: 'Controla el Santuario y la Aldea negando el paso por las puertas estrechas' },
      'kings-row': { score: 13, reason: 'Clava objetivos contra los muros estrechos con Jabalina energética' },
      'samoa': { score: 13, reason: 'Gran aguante en peleas prolongadas dentro del punto central' },
    },
    poorMaps: {
      'watchpoint-gibraltar': { score: -14, reason: 'Cero movilidad vertical: los equipos Dive te ignoran por las alturas' },
      'dorado': { score: -13, reason: 'No puede subir rápidamente a disputar balcones dominados por el rival' },
      'numbani': { score: -12, reason: 'Sufre para limpiar las pasarelas altas del primer punto' },
    },
  },
  roadhog: {
    archetypeSummary: 'Especialista letal en mapas con pozos, abismos y esquinas cortas donde el Garfio garantiza bajas instantáneas o ambientales.',
    weights: { boopPotential: 3.4, tightChokes: 1.8, sightlines: -2.0, verticality: -1.8 },
    idealMaps: {
      'ilios': { score: 16, reason: 'El Pozo de Ilios convierte cada Garfio en baja ambiental instantánea' },
      'lijiang-tower': { score: 14, reason: 'Puentes y bordes exteriores ideales para enganchar hacia el abismo' },
      'rialto': { score: 14, reason: 'Los puentes sobre el canal ofrecen bajas ambientales gratuitas' },
      'nepal': { score: 13, reason: 'El foso del Santuario y las salas cerradas favorecen tu combo de Garfio' },
    },
    poorMaps: {
      'havana': { score: -15, reason: 'Rectas abiertas más largas que tu Garfio donde eres batería de ultimates' },
      'circuit-royal': { score: -14, reason: 'Sin escudo frente a francotiradores fuera del alcance de 20m del Garfio' },
      'watchpoint-gibraltar': { score: -13, reason: 'Verticalidad excesiva que deja a tus objetivos fuera de ángulo' },
      'junkertown': { score: -12, reason: 'El primer punto abierto te expone a anticuración y daño lejano constante' },
    },
  },
  zarya: {
    archetypeSummary: 'Brilla en mapas planos y estrechos con cuellos de botella intensos donde carga 100% de energía rápido y lanza Gravitón sin escapatoria.',
    weights: { tightChokes: 3.4, verticality: -2.8, sightlines: -1.5 },
    idealMaps: {
      'kings-row': { score: 16, reason: 'Uno de sus mejores mapas: calles angostas que regalan carga máxima y Gravitones letales' },
      'lijiang-tower': { score: 14, reason: 'Peleas cerradas en el punto donde su rayo cargado derrite sin fallo' },
      'antarctic-peninsula': { score: 14, reason: 'Pasillos techados donde nadie puede rodearte por las alturas' },
      'hanaoka': { score: 13, reason: 'Choques frontales constantes ideales para rotar burbujas con tu Brawl' },
    },
    poorMaps: {
      'watchpoint-gibraltar': { score: -16, reason: 'Sin movilidad vertical: imposible contestar enemigos en pasarelas altas' },
      'numbani': { score: -14, reason: 'Las alturas del Punto A dejan a Zarya completamente fuera de alcance' },
      'dorado': { score: -14, reason: 'Los balcones elevados anulan la presión de su cañón de partículas' },
      'havana': { score: -13, reason: 'Distancias demasiado largas para su rayo de 15 metros' },
    },
  },

  // ============================================================================
  // DAMAGE / DPS (23)
  // ============================================================================
  ashe: {
    archetypeSummary: 'Domina mapas con líneas de visión medias-largas y balcones elevados (High Ground) donde Escopeta recortada le da posición privilegiada y Dinamita castiga grupos.',
    weights: { sightlines: 3.0, verticality: 2.0, tightChokes: -1.8 },
    idealMaps: {
      'route-66': { score: 16, reason: 'Balcones altos y ángulos medios-largos perfectos para Dinamita y B.O.B.' },
      'circuit-royal': { score: 15, reason: 'Líneas limpias y elevadas donde domina el desgaste a distancia' },
      'junkertown': { score: 15, reason: 'Explanadas abiertas ideales para presionar con mira telescópica' },
      'midtown': { score: 14, reason: 'Puentes y plataformas superiores que explotan todo su alcance efectivo' },
      'ilios': { score: 13, reason: 'Ruinas y Faro ofrecen ángulos largos letales para tiradores' },
    },
    poorMaps: {
      'antarctic-peninsula': { score: -13, reason: 'Salas cerradas y techadas donde te acortan distancia al instante' },
      'lijiang-tower': { score: -12, reason: 'Centro de Control y Mercado son demasiado cerrados para jugar con mira' },
      'new-junk-city': { score: -12, reason: 'Flancos cortos de 360° que facilitan emboscadas contra tu posición' },
      'samoa': { score: -10, reason: 'Coberturas densas en el punto que bloquean tus líneas largas' },
    },
  },
  cassidy: {
    archetypeSummary: 'Muy consistente en mapas cerrados y de media distancia donde controla flanqueadores en esquinas; pierde impacto frente a francotiradores puros en rectas extremas.',
    weights: { tightChokes: 2.2, sightlines: -1.2 },
    idealMaps: {
      'kings-row': { score: 15, reason: 'Distancias cortas-medias ideales para su revólver y Granada cegadora' },
      'lijiang-tower': { score: 14, reason: 'Domina los duelos cercanos del punto y frena a Tracer/Genji rivales' },
      'new-junk-city': { score: 13, reason: 'Arenas compactas donde su ráfaga media impone respeto en cada puerta' },
      'oasis': { score: 13, reason: 'Rotaciones cortas alrededor del objetivo dentro de su rango óptimo sin caída' },
    },
    poorMaps: {
      'havana': { score: -13, reason: 'La caída de daño por distancia te deja en desventaja contra Widow y Ashe' },
      'junkertown': { score: -12, reason: 'Líneas demasiado largas en el primer y tercer punto para tu rango medio' },
      'circuit-royal': { score: -11, reason: 'Superado en alcance por francotiradores puros en las rectas largas' },
    },
  },
  emre: {
    archetypeSummary: 'Tirador táctico de media distancia que destaca en mapas urbanos con coberturas escalonadas y flancos moderados.',
    weights: { sightlines: 1.5, flankOpenness: 1.5, tightChokes: 0.8 },
    idealMaps: {
      'midtown': { score: 14, reason: 'Coberturas urbanas y distancias medias perfectas para su rifle y granadas' },
      'colosseo': { score: 13, reason: 'Pasillos largos con pilares que favorecen sus intercambios tácticos' },
      'hollywood': { score: 13, reason: 'Buena versatilidad entre calles medias y tejados accesibles' },
      'esperanca': { score: 12, reason: 'Ángulos laterales fluidos para presionar constantemente al robot' },
    },
    poorMaps: {
      'havana': { score: -10, reason: 'Los francotiradores de largo alcance dominan las rectas más extremas' },
      'antarctic-peninsula': { score: -9, reason: 'Espacios demasiado cerrados donde los brawlers puros llevan ventaja' },
      'watchpoint-gibraltar': { score: -9, reason: 'Verticalidad muy pronunciada que exige movilidad aérea constante' },
    },
  },
  sierra: {
    archetypeSummary: 'Especialista de precisión y rastreo que explota líneas de visión largas y balcones despejados, pero sufre en interiores laberínticos.',
    weights: { sightlines: 3.0, verticality: 1.8, tightChokes: -2.0 },
    idealMaps: {
      'junkertown': { score: 15, reason: 'Ángulos abiertos extensos que maximizan su presión de largo alcance' },
      'circuit-royal': { score: 15, reason: 'Líneas limpias para castigar cualquier asomo sin cobertura' },
      'route-66': { score: 14, reason: 'Plataformas elevadas ideales para controlar el paso de la carga' },
      'busan': { score: 13, reason: 'Buen dominio visual en Centro y Santuario' },
    },
    poorMaps: {
      'antarctic-peninsula': { score: -13, reason: 'Interiores cerrados que anulan su ventaja de alcance lejano' },
      'lijiang-tower': { score: -12, reason: 'Peleas caóticas a quemarropa desfavorables para un tirador puro' },
      'new-junk-city': { score: -12, reason: 'Demasiados ángulos ciegos cortos para flanqueadores enemigos' },
    },
  },
  sojourn: {
    archetypeSummary: 'Extremadamente versátil gracias a Deslizamiento potenciado: brilla especialmente en mapas con alturas medias-altas y líneas de visión abiertas.',
    weights: { verticality: 2.2, sightlines: 2.2, flankOpenness: 1.2 },
    idealMaps: {
      'colosseo': { score: 15, reason: 'Recta central y balcones laterales hechos a medida para su Cañón de riel' },
      'esperanca': { score: 15, reason: 'Deslizamiento domina los desniveles y ángulos abiertos del recorrido' },
      'midtown': { score: 14, reason: 'Carga energía rápido en el frente y sube al puente para eliminar soportes' },
      'watchpoint-gibraltar': { score: 14, reason: 'Salto potenciado le permite tomar y abandonar el High Ground al instante' },
      'busan': { score: 13, reason: 'Gran control de líneas largas y rotación ágil entre coberturas' },
    },
    poorMaps: {
      'antarctic-peninsula': { score: -9, reason: 'Espacios muy reducidos que limitan sus ángulos limpios de riel' },
      'lijiang-tower': { score: -8, reason: 'En Centro de Control los duelos cerrados reducen su margen de maniobra' },
      'hanaoka': { score: -8, reason: 'Puntos cerrados donde el Brawl compacto deja menos líneas despejadas' },
    },
  },
  soldier76: {
    archetypeSummary: 'Destaca en mapas amplios con flancos largos y High Ground accesible por escaleras donde Sprint le permite reposicionarse sin descanso.',
    weights: { flankOpenness: 2.4, sightlines: 1.8, verticality: 1.4, tightChokes: -1.6 },
    idealMaps: {
      'new-queen-street': { score: 14, reason: 'Sprint aprovecha las calles anchas para tomar ángulos laterales constantes' },
      'esperanca': { score: 14, reason: 'Rotaciones rápidas hacia alturas abiertas con Visor táctico letal' },
      'dorado': { score: 13, reason: 'Balcones largos conectados por escaleras ideales para su presión sostenida' },
      'blizzard-world': { score: 13, reason: 'Pasarelas elevadas en el segundo punto con gran visión del campo' },
    },
    poorMaps: {
      'kings-row': { score: -10, reason: 'Pocas rutas anchas de flanqueo y escudos pesados cerrando calles' },
      'antarctic-peninsula': { score: -11, reason: 'Cuartos pequeños donde el daño explosivo te supera a corta distancia' },
      'hanaoka': { score: -10, reason: 'Objetivos cerrados que fuerzan combates frontales a quemarropa' },
    },
  },
  widowmaker: {
    archetypeSummary: 'Depende críticamente del mapa: es devastadora en mapas abiertos con líneas largas (Junkertown, Havana, Circuit Royal, Busan) y cae en picada en mapas cerrados.',
    weights: { sightlines: 4.5, tightChokes: -3.2, verticality: 1.2 },
    idealMaps: {
      'junkertown': { score: 16, reason: 'Paraíso francotirador: líneas abiertas masivas donde dominas toda la partida' },
      'havana': { score: 16, reason: 'Primera y tercera fase con rectas larguísimas prácticamente incontestables' },
      'circuit-royal': { score: 16, reason: 'Ángulos largos y lineales donde un solo pick frena todo el avance rival' },
      'ilios': { score: 14, reason: 'Ruinas es uno de los escenarios más dominantes del juego para Widowmaker' },
      'busan': { score: 13, reason: 'Centro y Santuario ofrecen líneas limpias y balcones letales para franco' },
      'rialto': { score: 12, reason: 'Grandes líneas de visión sobre la plaza inicial y los canales' },
    },
    poorMaps: {
      'antarctic-peninsula': { score: -16, reason: 'Mapa totalmente cerrado y techado que anula tu mira telescópica' },
      'lijiang-tower': { score: -15, reason: 'Puntos cerrados y esquinas cortas donde Dive y Brawl te alcanzan sin verte' },
      'new-junk-city': { score: -15, reason: 'Arenas interiores compactas sin líneas largas ni distancia segura' },
      'samoa': { score: -14, reason: 'Geometría cerrada alrededor del objetivo que impide sostener ángulos lejanos' },
      'hanaoka': { score: -14, reason: 'Combates cerrados y rotaciones cortas muy desfavorables para francotirador' },
      'suravasa': { score: -13, reason: 'Puntos rodeados de muros y flancos cortos donde quedas vendida' },
    },
  },
  anran: {
    archetypeSummary: 'Asesina ígnea de corto alcance que brilla en mapas cerrados, de flancos cortos y esquinas estrechas; sufre en explanadas abiertas de francotirador.',
    weights: { tightChokes: 2.6, flankOpenness: 2.2, sightlines: -2.8 },
    idealMaps: {
      'lijiang-tower': { score: 15, reason: 'Distancias cortas y coberturas densas para encadenar abanicos ígneos' },
      'samoa': { score: 14, reason: 'Flancos rápidos alrededor del punto para emboscar y prender fuego al grupo' },
      'suravasa': { score: 14, reason: 'Pasillos laterales ideales para sorprender soportes a quemarropa' },
      'kings-row': { score: 13, reason: 'Calles estrechas donde su daño de área ígneo impacta a varios rivales' },
      'new-junk-city': { score: 14, reason: 'Duelos cerrados constantes donde explota su movilidad agresiva' },
    },
    poorMaps: {
      'junkertown': { score: -15, reason: 'Explanadas abiertas donde los hitscans te eliminan antes de acercarte' },
      'havana': { score: -15, reason: 'Rectas larguísimas sin cobertura para su rango estrictamente corto' },
      'circuit-royal': { score: -14, reason: 'Pasillo lineal dominado por Poke lejano que frena tus entradas' },
      'ilios': { score: -9, reason: 'En Ruinas las líneas abiertas favorecen a tiradores y aéreos sobre ti' },
    },
  },
  genji: {
    archetypeSummary: 'Sobresale en mapas verticales con muros escalables y múltiples rutas de flanqueo; pierde eficacia en pasillos cerrados llenos de rayos y control de masas.',
    weights: { verticality: 3.2, flankOpenness: 2.0, tightChokes: -1.2 },
    idealMaps: {
      'watchpoint-gibraltar': { score: 16, reason: 'Cibermovilidad explota cada pasarela alta para cazar francotiradores y soportes' },
      'dorado': { score: 15, reason: 'Escalada constante a tejados y balcones para flanqueos impredecibles' },
      'paraiso': { score: 14, reason: 'Verticalidad continua que potencia Hoja del dragón y escapes limpios' },
      'numbani': { score: 14, reason: 'Domina las galerías superiores junto a tanques de Dive' },
      'runasapi': { score: 13, reason: 'Múltiples alturas y flancos cortos para aislar objetivos vulnerables' },
    },
    poorMaps: {
      'antarctic-peninsula': { score: -10, reason: 'Salas cerradas donde Mei, Symmetra y Moira castigan cada entrada' },
      'circuit-royal': { score: -10, reason: 'Pocas rutas laterales cubiertas para acercarse sin gastar Desvío antes' },
      'hanaoka': { score: -9, reason: 'Puntos muy compactos dominados por composiciones densas de Brawl' },
    },
  },
  reaper: {
    archetypeSummary: 'Devastador en mapas cerrados, interiores y objetivos pequeños; prácticamente injugable en mapas de líneas abiertas largas.',
    weights: { tightChokes: 3.8, sightlines: -3.2, verticality: -0.8 },
    idealMaps: {
      'lijiang-tower': { score: 16, reason: 'Puntos cerrados perfectos para destrozar tanques y usar Espiral de muerte' },
      'antarctic-peninsula': { score: 15, reason: 'Pasillos cortos donde tus escopetas hacen daño máximo en cada esquina' },
      'kings-row': { score: 15, reason: 'Esquinas estrechas y teletransportes cortos a espaldas del equipo rival' },
      'new-junk-city': { score: 14, reason: 'Arenas cerradas de Punto Caliente ideales para emboscadas a quemarropa' },
      'samoa': { score: 14, reason: 'Coberturas pegadas al punto que obligan al rival a pelear en tu cara' },
    },
    poorMaps: {
      'junkertown': { score: -16, reason: 'Distancias enormes donde tus escopetas no hacen daño y te eliminan de lejos' },
      'havana': { score: -16, reason: 'Rectas abiertas de francotirador que anulan por completo tu kit cercano' },
      'circuit-royal': { score: -15, reason: 'Sin flancos cubiertos para cerrar distancia contra composiciones Poke' },
      'ilios': { score: -11, reason: 'Espacios abiertos y verticales donde Pharah, Echo y Ashe te dominan' },
    },
  },
  shion: {
    archetypeSummary: 'Flanqueador ágil que aprovecha mapas con rutas laterales múltiples y alturas medias para aislar objetivos en la retaguardia.',
    weights: { flankOpenness: 2.8, verticality: 2.0, sightlines: -1.5 },
    idealMaps: {
      'esperanca': { score: 14, reason: 'Rutas laterales fluidas para cortar soportes durante el avance del robot' },
      'runasapi': { score: 14, reason: 'Desniveles y flancos rápidos ideales para entrar y salir con ventaja' },
      'oasis': { score: 13, reason: 'Mapas simétricos con coberturas abundantes para duelos aislados' },
      'busan': { score: 13, reason: 'Buena combinación de flancos abiertos y alturas accesibles' },
    },
    poorMaps: {
      'circuit-royal': { score: -13, reason: 'Cuello lineal estrecho que impide rodear a la línea frontal enemiga' },
      'havana': { score: -12, reason: 'Demasiada exposición a tiradores antes de alcanzar la retaguardia' },
      'kings-row': { score: -9, reason: 'Pasillos angostos fáciles de bloquear con daño en área' },
    },
  },
  tracer: {
    archetypeSummary: 'Reina de los mapas abiertos de Control, Avance y Punto Caliente con espacio horizontal de 360°; sufre en cuellos únicos verticales o muy estrechos.',
    weights: { flankOpenness: 3.6, sightlines: -0.5, verticality: -0.6 },
    idealMaps: {
      'oasis': { score: 16, reason: 'Flancos de 360° y botiquines perfectos para dominar con Traslación' },
      'esperanca': { score: 16, reason: 'Espacio horizontal amplio para presionar retaguardia sin parar' },
      'new-queen-street': { score: 15, reason: 'Múltiples calles laterales donde nadie puede encerrarte' },
      'busan': { score: 14, reason: 'Terreno plano con coberturas ideales para duelos y control de punto' },
      'suravasa': { score: 14, reason: 'Rotaciones veloces y ángulos abiertos para cazar rezagados' },
    },
    poorMaps: {
      'circuit-royal': { score: -12, reason: 'Un único carril lineal sin flancos donde el Poke concentra todo el daño' },
      'eichenwalde': { score: -10, reason: 'El primer cuello estrecho y las almenas altas del 2.º punto limitan tus rutas' },
      'watchpoint-gibraltar': { score: -9, reason: 'Alturas muy elevadas sin escaleras rápidas que obligan a rodeos largos' },
      'shambali-monastery': { score: -10, reason: 'Pasillos estrechos en pendiente con pocas vías de flanqueo limpias' },
    },
  },
  vendetta: {
    archetypeSummary: 'Duelista letal en mapas cerrados y de desnivel corto donde encadena tajos sobre varios enemigos sin exponerse a líneas largas.',
    weights: { tightChokes: 2.8, flankOpenness: 2.0, sightlines: -2.8 },
    idealMaps: {
      'kings-row': { score: 15, reason: 'Esquinas cortas y callejones perfectos para desatar tajos en cadena' },
      'lijiang-tower': { score: 15, reason: 'Combate cerrado constante dentro del objetivo donde brilla su letalidad' },
      'new-junk-city': { score: 14, reason: 'Puntos interiores compactos que fuerzan duelos en su rango ideal' },
      'hanaoka': { score: 13, reason: 'Transiciones rápidas entre puntos cerrados con buena cobertura' },
    },
    poorMaps: {
      'junkertown': { score: -15, reason: 'Demasiado campo abierto donde te desgastan antes de poder entrar' },
      'havana': { score: -15, reason: 'Líneas de francotirador extremas que castigan tu rango corto' },
      'circuit-royal': { score: -14, reason: 'Falta de rutas laterales cubiertas para sorprender a la retaguardia' },
    },
  },
  venture: {
    archetypeSummary: 'Domina mapas con esquinas cerradas, desniveles cortos y bordes ambientales donde Excavar permite acercarse invulnerable y empujar con Taladro.',
    weights: { tightChokes: 3.0, boopPotential: 1.8, sightlines: -2.8 },
    idealMaps: {
      'antarctic-peninsula': { score: 15, reason: 'Salas cerradas donde emerge bajo los pies del rival y controla esquinas' },
      'samoa': { score: 15, reason: 'Geometría compacta con fosos cercanos para empujar con Perforación' },
      'new-junk-city': { score: 14, reason: 'Rotaciones subterráneas letales entre habitaciones estrechas' },
      'ilios': { score: 13, reason: 'Pozos y bordes en Faro/Pozo ideales para empujones ambientales' },
      'kings-row': { score: 13, reason: 'Choque telúrico arrasa en las calles estrechas sin cobertura aérea' },
    },
    poorMaps: {
      'havana': { score: -15, reason: 'Alcance máximo limitado frente a las rectas más largas del juego' },
      'junkertown': { score: -15, reason: 'Cuando sales de tierra en campo abierto quedas vendida al Poke lejano' },
      'circuit-royal': { score: -13, reason: 'Líneas largas que superan por mucho el rango de tu excavadora' },
    },
  },
  bastion: {
    archetypeSummary: 'Fuerte rompiendo escudos en pasillos estrechos y defendiendo cargas lineales; sufre cuando lo rodean desde múltiples flancos o alturas lejanas.',
    weights: { tightChokes: 2.4, flankOpenness: -2.2, verticality: -1.4 },
    idealMaps: {
      'kings-row': { score: 14, reason: 'Funde escudos en el arco inicial y barre las calles estrechas en Modo Asalto' },
      'shambali-monastery': { score: 13, reason: 'Curvas estrechas donde el tanque enemigo no puede esquivar tu ráfaga' },
      'eichenwalde': { score: 13, reason: 'Excelente presión sobre el primer cuello de botella y fase interior final' },
      'rialto': { score: 12, reason: 'Puentes estrechos que canalizan al equipo enemigo frente a tu torreta' },
    },
    poorMaps: {
      'new-queen-street': { score: -13, reason: 'Demasiados flancos abiertos desde donde te rodean con tu gran hitbox' },
      'suravasa': { score: -13, reason: 'Rotaciones largas y ángulos de 360° que castigan tu lentitud' },
      'watchpoint-gibraltar': { score: -12, reason: 'Los equipos Dive te saltan desde las pasarelas altas con facilidad' },
      'oasis': { score: -11, reason: 'Flanqueadores aprovechan el mapa abierto cuando termina tu Modo Asalto' },
    },
  },
  hanzo: {
    archetypeSummary: 'Letal tanto en líneas medias-largas como en cuellos de botella con muros escalables donde Flecha sónica revela cada asomo.',
    weights: { sightlines: 2.6, verticality: 1.8, tightChokes: 1.2, flankOpenness: -1.2 },
    idealMaps: {
      'kings-row': { score: 15, reason: 'Flecha sónica y Tormenta dominan las esquinas estrechas y balcones' },
      'junkertown': { score: 14, reason: 'Grandes líneas de visión con desniveles escalables para tiros letales' },
      'circuit-royal': { score: 14, reason: 'Presión constante de un tiro sobre ángulos largos predecibles' },
      'midtown': { score: 13, reason: 'Controla los pasillos largos y escala rápido hacia posiciones elevadas' },
      'rialto': { score: 13, reason: 'Puentes y esquinas canalizadas ideales para Flecha dragón' },
    },
    poorMaps: {
      'oasis': { score: -11, reason: 'Flancos abiertos de 360° donde Tracer, Genji y Sombra te cazan fácil' },
      'new-junk-city': { score: -11, reason: 'Peleas caóticas a quemarropa que reducen el valor de tu arco' },
      'samoa': { score: -10, reason: 'Objetivos muy cerrados donde el Brawl rápido te pasa por encima' },
    },
  },
  junkrat: {
    archetypeSummary: 'Especialista absoluto en pasillos estrechos, habitaciones cerradas y cuellos de botella; pierde casi todo su valor en explanadas abiertas.',
    weights: { tightChokes: 3.8, sightlines: -3.0, skybox: -1.2 },
    idealMaps: {
      'kings-row': { score: 15, reason: 'Rebotes letales en calles estrechas y hoteles cerrados' },
      'eichenwalde': { score: 15, reason: 'Bloquea por completo el primer arco y las salas estrechas del castillo' },
      'antarctic-peninsula': { score: 15, reason: 'Cuartos pequeños y techos bajos donde nadie esquiva tus granadas' },
      'lijiang-tower': { score: 14, reason: 'Controla puertas estrechas y lanza enemigos al vacío con sus minas' },
      'nepal': { score: 14, reason: 'Aldea y Santuario canalizan todo el tráfico por entradas angostas' },
    },
    poorMaps: {
      'junkertown': { score: -15, reason: 'Irónicamente en el 1.er sector abierto los hitscans y aéreos te dominan de lejos' },
      'havana': { score: -16, reason: 'Explanadas abiertas donde tus granadas lentas son fáciles de esquivar' },
      'circuit-royal': { score: -14, reason: 'Líneas largas que favorecen francotiradores muy fuera de tu alcance' },
      'ilios': { score: -12, reason: 'Cielo abierto donde Pharah, Echo y Widowmaker te castigan sin respuesta' },
    },
  },
  mei: {
    archetypeSummary: 'Reina táctica de los cuellos de botella estrechos: su Muro de hielo parte equipos enteros en dos cuando solo existe una puerta principal.',
    weights: { tightChokes: 4.0, sightlines: -2.4, verticality: -1.6 },
    idealMaps: {
      'kings-row': { score: 16, reason: 'El Muro de hielo en el arco inicial encierra al tanque enemigo sin salida' },
      'lijiang-tower': { score: 15, reason: 'Puertas angostas en Jardín y Centro perfectas para aislar y usar Ventisca' },
      'antarctic-peninsula': { score: 15, reason: 'Su hogar: pasillos estrechos donde su rayo ralentiza a múltiples rivales' },
      'nepal': { score: 15, reason: 'En Aldea un solo muro bloquea toda la entrada al punto central' },
      'hanaoka': { score: 14, reason: 'Puntos cerrados ideales para partir en dos los avances de Brawl' },
    },
    poorMaps: {
      'junkertown': { score: -15, reason: 'Mapa ancho sin puertas estrechas que bloquear con tu Muro de hielo' },
      'havana': { score: -15, reason: 'Avenidas anchas y largas donde los francotiradores te superan ampliamente' },
      'watchpoint-gibraltar': { score: -14, reason: 'Los rivales saltan por encima de tu muro hacia las pasarelas altas' },
      'circuit-royal': { score: -12, reason: 'Largas distancias abiertas donde cuesta cerrar el paso sin recibir Poke' },
    },
  },
  symmetra: {
    archetypeSummary: 'Domina mapas de Control y cuellos cerrados donde sus torretas vigilan puertas y el Teletransportador permite rotaciones de equipo letales.',
    weights: { tightChokes: 3.8, sightlines: -2.6 },
    idealMaps: {
      'lijiang-tower': { score: 16, reason: 'El mejor mapa de Symmetra: TP directo al punto y torretas letales en puertas' },
      'nepal': { score: 15, reason: 'Domina Aldea y Santuario cargando su rayo al máximo en espacios cerrados' },
      'oasis': { score: 14, reason: 'Rotaciones instantáneas con TP y gran control del punto cerrado' },
      'antarctic-peninsula': { score: 14, reason: 'Salas techadas ideales para acumular carga nivel 3 con seguridad' },
      'eichenwalde': { score: 13, reason: 'El Teletransportador permite cruzar el primer cuello difícil al instante' },
    },
    poorMaps: {
      'havana': { score: -16, reason: 'Rectas abiertas larguísimas donde tus torretas y rayo corto no tienen alcance' },
      'junkertown': { score: -15, reason: 'Explanadas sin muros cercanos que dejan tu kit totalmente expuesto' },
      'circuit-royal': { score: -14, reason: 'Líneas de Poke lejano que destruyen tu TP y te impiden cargar el rayo' },
      'watchpoint-gibraltar': { score: -11, reason: 'Alturas amplias donde cuesta sostener torretas efectivas' },
    },
  },
  torbjorn: {
    archetypeSummary: 'Excelente defendiendo mapas Híbridos y de Control donde su torreta cubre ángulos cruzados contra flanqueadores y Fusión niega el punto.',
    weights: { tightChokes: 2.2, flankOpenness: 0.8, sightlines: -0.6 },
    idealMaps: {
      'eichenwalde': { score: 15, reason: 'Ángulos de torreta brutales en defensa del Punto A y dentro del castillo' },
      'hollywood': { score: 14, reason: 'Cubre flanqueos aéreos/terrestres mientras Fusión cierra calles enteras' },
      'numbani': { score: 13, reason: 'Torreta en pasarela cruzada frena los intentos de Dive sobre Punto A' },
      'nepal': { score: 13, reason: 'Fusión niega por completo el espacio reducido de los puntos de captura' },
    },
    poorMaps: {
      'havana': { score: -12, reason: 'Los francotiradores destruyen tu torreta desde distancias extremas' },
      'circuit-royal': { score: -12, reason: 'Líneas rectas largas donde el Poke enemigo rompe tu torreta al instante' },
      'junkertown': { score: -11, reason: 'Poca cobertura para mantener viva la torreta en la explanada inicial' },
    },
  },
  echo: {
    archetypeSummary: 'Depredadora aérea que brilla en mapas con tejados altos, flancos verticales y cielo abierto con cobertura natural.',
    weights: { skybox: 3.2, verticality: 2.6, tightChokes: -1.4 },
    idealMaps: {
      'ilios': { score: 15, reason: 'Cielo abierto con edificios altos para asesinar desde ángulos imprevistos' },
      'oasis': { score: 15, reason: 'Tejados y columnas perfectas para asomar con Bombas lapa y Haz focalizado' },
      'eichenwalde': { score: 14, reason: 'Vuela sobre los tejados del Punto A y domina las torres del castillo' },
      'dorado': { score: 14, reason: 'Sorprende francotiradores y soportes usando los techos como cobertura' },
      'paraiso': { score: 14, reason: 'Verticalidad constante ideal para entrar en picado y escapar volando' },
    },
    poorMaps: {
      'antarctic-peninsula': { score: -13, reason: 'Techos bajos e interiores cerrados que limitan severamente tu Vuelo' },
      'new-junk-city': { score: -11, reason: 'Puntos techados donde pierdes superioridad aérea' },
      'havana': { score: -11, reason: 'Cielo despejado sin edificios altos frente a Widowmaker y Ashe' },
      'hanaoka': { score: -10, reason: 'Peleas interiores cerradas que reducen tus ángulos verticales' },
    },
  },
  freja: {
    archetypeSummary: 'Cazadora aeromóvil letal en mapas con líneas medias-largas y espacios verticales donde Corriente ascendente abre ángulos explosivos.',
    weights: { skybox: 2.6, sightlines: 2.4, verticality: 2.0, tightChokes: -1.8 },
    idealMaps: {
      'ilios': { score: 15, reason: 'Corriente ascendente domina ángulos altos en Ruinas y Faro con virotes explosivos' },
      'rialto': { score: 14, reason: 'Azoteas y canales largos ideales para clavar Tiro boleadora en grupos' },
      'eichenwalde': { score: 14, reason: 'Ángulos aéreos sobre el puente y el castillo fuera del alcance terrestre' },
      'busan': { score: 13, reason: 'Gran visibilidad aérea y distancias óptimas para su ballesta automática' },
      'midtown': { score: 13, reason: 'Excelente presión desde el aire sobre las avenidas principales' },
    },
    poorMaps: {
      'antarctic-peninsula': { score: -14, reason: 'Techos bajos que bloquean Corriente ascendente y te encierran con brawlers' },
      'new-junk-city': { score: -12, reason: 'Habitaciones cerradas donde pierdes tu movilidad aérea y ventaja de rango' },
      'lijiang-tower': { score: -10, reason: 'En Centro de Control el techo interior limita tus saltos verticales' },
    },
  },
  pharah: {
    archetypeSummary: 'Domina mapas con cielo alto, tejados para cubrirse en el aire y bordes con abismo; sufre en interiores bajos o explanadas sin cobertura aérea.',
    weights: { skybox: 3.8, boopPotential: 2.0, tightChokes: -0.6 },
    idealMaps: {
      'ilios': { score: 16, reason: 'Su mejor mapa: tejados de cobertura y bajas ambientales constantes con Explosión conmocionante' },
      'lijiang-tower': { score: 15, reason: 'En Jardín y Mercado Nocturno domina el cielo y empuja rivales al vacío' },
      'eichenwalde': { score: 15, reason: 'Rodea por encima de los edificios y bombardea cuellos estrechos con impunidad' },
      'oasis': { score: 14, reason: 'Arquitectura alta en Jardines que ofrece cobertura aérea permanente' },
      'rialto': { score: 13, reason: 'Flanqueos sobre el agua y puentes vulnerables a empujones' },
    },
    poorMaps: {
      'antarctic-peninsula': { score: -15, reason: 'Techos interiores bajísimos donde no puedes volar y te expones a corta distancia' },
      'havana': { score: -14, reason: 'Cielo abierto sin ningún edificio alto para cubrirte de Widowmaker y Ashe' },
      'junkertown': { score: -13, reason: 'Explanadas despejadas donde los hitscans tienen visión libre hacia ti' },
      'circuit-royal': { score: -13, reason: 'Pasillo largo dominado por francotiradores sin rutas aéreas cubiertas' },
      'new-junk-city': { score: -12, reason: 'Objetivos techados que neutralizan tu ventaja de altura' },
    },
  },

  // ============================================================================
  // SUPPORTS (16)
  // ============================================================================
  ana: {
    archetypeSummary: 'Excepcional en mapas con líneas de visión largas y High Ground seguro desde donde cura a todo el mapa y lanza Granada biótica sin ser alcanzada.',
    weights: { sightlines: 2.8, verticality: 2.0, flankOpenness: -1.4 },
    idealMaps: {
      'watchpoint-gibraltar': { score: 15, reason: 'Desde las pasarelas altas tiene visión limpia para apoyar todo el Dive y tirar Nano' },
      'dorado': { score: 15, reason: 'Balcones seguros con ángulos largos para curar y clavar granadas decisivas' },
      'hollywood': { score: 14, reason: 'Plataformas elevadas con excelente control visual del punto y las calles' },
      'route-66': { score: 14, reason: 'Líneas largas donde aprovecha su rifle telescópico desde distancia segura' },
      'kings-row': { score: 13, reason: 'Pasillos rectos que facilitan Granadas bióticas masivas sobre el tanque rival' },
    },
    poorMaps: {
      'new-junk-city': { score: -12, reason: 'Esquinas cerradas que cortan tu línea de visión y facilitan flanqueos contra ti' },
      'suravasa': { score: -12, reason: 'Rotaciones largas sin movilidad y ángulos de 360° peligrosos para Ana' },
      'antarctic-peninsula': { score: -11, reason: 'Muros interiores densos que bloquean curas lejanas y favorecen el Rush encima tuyo' },
      'samoa': { score: -10, reason: 'Poca distancia segura respecto a las peleas caóticas del objetivo' },
    },
  },
  baptiste: {
    archetypeSummary: 'Brilla en mapas de Poke/Brawl con alturas accesibles mediante Exo-botas y calles agrupadas donde sus granadas curativas y Matriz rinden al máximo.',
    weights: { sightlines: 2.0, verticality: 1.8, tightChokes: 1.5, flankOpenness: -1.2 },
    idealMaps: {
      'circuit-royal': { score: 16, reason: 'Domina el Poke lejano con Matriz amplificadora y Campo de inmortalidad' },
      'kings-row': { score: 15, reason: 'Cura a todo el grupo junto en calles estrechas y escapa a balcones con Exo-botas' },
      'havana': { score: 14, reason: 'Sostiene intercambios largos de francotiradores con Inmortalidad oportuna' },
      'shambali-monastery': { score: 14, reason: 'Rutas agrupadas y desniveles ideales para sus saltos verticales' },
      'eichenwalde': { score: 13, reason: 'Gran valor curativo en área sobre los cuellos de botella del mapa' },
    },
    poorMaps: {
      'oasis': { score: -10, reason: 'Composiciones Dive muy dispersas donde tus granadas curativas pierden eficiencia' },
      'esperanca': { score: -9, reason: 'Peleas abiertas en movimiento donde aliados aéreos o flanqueadores se separan' },
      'busan': { score: -9, reason: 'Equipos muy abiertos dificultan sacar valor grupal a tus curas en arco' },
    },
  },
  kiriko: {
    archetypeSummary: 'Se adapta a casi cualquier mapa, pero brilla al máximo en mapas verticales, de Avance y Punto Caliente gracias a trepar muros, Paso ligero y Rush.',
    weights: { flankOpenness: 2.2, verticality: 2.2, tightChokes: 0.6 },
    idealMaps: {
      'esperanca': { score: 15, reason: 'Acompaña flanqueadores por cualquier muro y lanza Kitsune en los pasillos largos' },
      'runasapi': { score: 14, reason: 'Escalada y teletransporte brillan entre los desniveles y flancos del mapa' },
      'dorado': { score: 14, reason: 'Sube balcones sin enfriamiento y salva aliados aislados al instante' },
      'new-queen-street': { score: 13, reason: 'Gran movilidad para rotar en peleas dinámicas alrededor del robot' },
      'kings-row': { score: 13, reason: 'Kitsune Rush en línea recta por las calles estrechas es devastador' },
    },
    poorMaps: {
      'havana': { score: -7, reason: 'En explanadas larguísimas de francotirador puro los soportes de Poke aportan más daño constante' },
      'circuit-royal': { score: -6, reason: 'Pasillo muy abierto donde Zenyatta o Baptiste maximizan más la presión frontal' },
    },
  },
  lifeweaver: {
    archetypeSummary: 'Muy valioso en mapas con balcones elevados o peligros ambientales donde Plataforma de pétalo crea alturas y Agarre vital salva caídas o emboscadas.',
    weights: { verticality: 2.0, boopPotential: 2.2, sightlines: 1.4, tightChokes: -1.2 },
    idealMaps: {
      'ilios': { score: 14, reason: 'Agarre vital rescata compañeros de caídas al Pozo y domina alturas seguras' },
      'junkertown': { score: 13, reason: 'Curación teledirigida de largo alcance y pétalos para subir tiradores' },
      'rialto': { score: 13, reason: 'Salva bajas ambientales en los puentes y planta el Árbol para frenar el carro' },
      'circuit-royal': { score: 12, reason: 'Sostiene desde lejos y eleva aliados sin movilidad a posiciones clave' },
    },
    poorMaps: {
      'antarctic-peninsula': { score: -12, reason: 'Techos bajos que traban la Plataforma de pétalo y exponen tu gran hitbox' },
      'new-junk-city': { score: -12, reason: 'Ritmo frenético a corta distancia donde cuesta pasar al ataque' },
      'lijiang-tower': { score: -10, reason: 'En Centro de Control el Brawl rápido castiga su falta de daño explosivo' },
    },
  },
  moira: {
    archetypeSummary: 'Potentísima en mapas cerrados y techados donde sus Orbes bióticos rebotan múltiples veces y cura a todo el bloque de Brawl a la vez.',
    weights: { tightChokes: 3.6, sightlines: -2.6, verticality: -2.0 },
    idealMaps: {
      'antarctic-peninsula': { score: 16, reason: 'Paredes y techos cerrados que multiplican los rebotes de tus Orbes bióticos' },
      'lijiang-tower': { score: 15, reason: 'Curación masiva en grupo cerrado y Coalescencia letal en el punto' },
      'kings-row': { score: 14, reason: 'Calles angostas donde Coalescencia atraviesa a ambos equipos enteros' },
      'new-junk-city': { score: 14, reason: 'Habitaciones compactas ideales para sobrevivir flanqueos con Evanescencia' },
      'hanaoka': { score: 13, reason: 'Peleas grupales pegadas donde su espray biótico rinde al 100%' },
    },
    poorMaps: {
      'watchpoint-gibraltar': { score: -15, reason: 'Sin movilidad vertical para curar aliados en las pasarelas altas' },
      'junkertown': { score: -15, reason: 'Espacios abiertos donde tus orbes se pierden al cielo y no alcanzas a nadie' },
      'havana': { score: -14, reason: 'Distancias demasiado largas sin utilidad de largo alcance para tu equipo' },
      'dorado': { score: -13, reason: 'Desniveles verticales constantes que dejan tu curación corta fuera de ángulo' },
    },
  },
  doctrine: {
    archetypeSummary: 'Estratega táctico que destaca en mapas estructurados de media distancia y control de ángulos donde sus drones potencian rotaciones ofensivas.',
    weights: { sightlines: 1.8, flankOpenness: 1.6, tightChokes: 1.0 },
    idealMaps: {
      'midtown': { score: 14, reason: 'Líneas medias limpias para mantener drones activos sobre tus flanqueadores' },
      'esperanca': { score: 14, reason: 'Excelente tempo ofensivo acompañando ataques coordinados alrededor del robot' },
      'colosseo': { score: 13, reason: 'Pasillos largos con coberturas laterales que favorecen su presión táctica' },
      'busan': { score: 13, reason: 'Buena visión del punto para coordinar Infuse con DPS agresivos' },
    },
    poorMaps: {
      'antarctic-peninsula': { score: -10, reason: 'Cuartos demasiado cerrados donde el Brawl pesado te salta encima sin margen' },
      'havana': { score: -9, reason: 'En las rectas más extremas sufre contra francotiradores de un solo tiro' },
    },
  },
  illari: {
    archetypeSummary: 'Fuerte defendiendo cuellos de botella y ángulos medios-largos donde el Pilón de sanación queda oculto tras un muro indestructible para el enemigo.',
    weights: { sightlines: 2.4, tightChokes: 1.8, flankOpenness: -2.0 },
    idealMaps: {
      'circuit-royal': { score: 15, reason: 'Esquinas perfectas para esconder el Pilón mientras presionas como tercer DPS' },
      'eichenwalde': { score: 14, reason: 'El Pilón detrás del arco inicial sostiene toda la defensa sin exposición' },
      'shambali-monastery': { score: 14, reason: 'Muros altos seguros para el Pilón y pasillos juntos para Sol cautivo' },
      'kings-row': { score: 13, reason: 'Gran valor defensivo en Punto A y Sol cautivo devastador en calles estrechas' },
      'runasapi': { score: 13, reason: 'Su mapa natal ofrece buenos ángulos escalonados y muros protectores' },
    },
    poorMaps: {
      'new-queen-street': { score: -12, reason: 'Combate en movimiento constante que obliga a reubicar el Pilón sin parar' },
      'suravasa': { score: -12, reason: 'Flancos abiertos por donde destruyen tu Pilón antes de empezar la pelea' },
      'oasis': { score: -11, reason: 'Equipos Dive rompen el Pilón fácilmente desde múltiples ángulos' },
    },
  },
  lucio: {
    archetypeSummary: 'Indispensable en Control, Punto Caliente, Avance y mapas con abismos ambientales; pierde valor en defensas estáticas de Poke puro.',
    weights: { boopPotential: 4.0, tightChokes: 2.0, flankOpenness: 1.8, sightlines: -2.0 },
    idealMaps: {
      'ilios': { score: 16, reason: 'Pozo y Faro son el patio de recreo definitivo para patinar y lograr boops' },
      'lijiang-tower': { score: 16, reason: 'Llega primero al punto con velocidad y domina los puentes hacia el vacío' },
      'nepal': { score: 15, reason: 'Foso del Santuario y aceleración clave para ganar cada choque de Control' },
      'suravasa': { score: 14, reason: 'La velocidad de rotación entre Puntos Calientes da ventaja estratégica enorme' },
      'kings-row': { score: 14, reason: 'Acelera a Reinhardt y al bloque de Brawl a través del cuello de botella' },
    },
    poorMaps: {
      'circuit-royal': { score: -14, reason: 'Composiciones estáticas de Poke donde tu aura de velocidad aporta muy poco' },
      'havana': { score: -14, reason: 'Explanadas abiertas de francotirador con escasos muros útiles y poca cura bruta' },
      'junkertown': { score: -13, reason: 'El primer punto abierto exige curación lejana y presión de rango, no Brawl' },
    },
  },
  sombra: {
    archetypeSummary: 'Como soporte táctico de infiltración, brilla en mapas amplios llenos de rutas de flanqueo y botiquines donde coordina emboscadas e interrumpe ultimates.',
    weights: { flankOpenness: 3.4, verticality: 1.6, tightChokes: -1.4 },
    idealMaps: {
      'esperanca': { score: 15, reason: 'Rutas abiertas infinitas para infiltrarse, apoyar a Dive y cortar refuerzos' },
      'new-queen-street': { score: 15, reason: 'Calles conectadas y botiquines clave para controlar el tempo del mapa' },
      'oasis': { score: 14, reason: 'Ángulos de 360° ideales para habilitar a Tracer/Winston y tirar PEM masivos' },
      'colosseo': { score: 13, reason: 'Excelente control de los flancos laterales paralelos al puente central' },
      'dorado': { score: 13, reason: 'Su mapa clásico: accesos rápidos a alturas para desactivar defensas' },
    },
    poorMaps: {
      'kings-row': { score: -11, reason: 'Equipos muy juntos en calles estrechas que reaccionan al instante si apareces' },
      'circuit-royal': { score: -11, reason: 'Pasillo estrecho donde todo el equipo enemigo juega agrupado vigilándose' },
      'antarctic-peninsula': { score: -10, reason: 'Salas pequeñas con daño en área constante que revela tu posición' },
    },
  },
  wuyang: {
    archetypeSummary: 'Soporte hidro-cinético fluido en mapas con desniveles medios, puentes y objetivos dinámicos donde sus corrientes reposicionan peleas.',
    weights: { boopPotential: 2.2, flankOpenness: 1.8, verticality: 1.4 },
    idealMaps: {
      'lijiang-tower': { score: 15, reason: 'Sus corrientes de agua dominan el control espacial y los bordes del mapa' },
      'rialto': { score: 14, reason: 'Control excepcional sobre los puentes y rotaciones fluidas junto al canal' },
      'runasapi': { score: 13, reason: 'Movilidad acuática ideal para acompañar peleas rápidas en desnivel' },
      'busan': { score: 13, reason: 'Gran versatilidad para sostener tanto ángulos medios como el punto' },
    },
    poorMaps: {
      'havana': { score: -11, reason: 'Las distancias extremas reducen el impacto de sus ondas de medio alcance' },
      'circuit-royal': { score: -10, reason: 'Superado en alcance puro frente a duelos estáticos de francotiradores' },
    },
  },
  zenyatta: {
    archetypeSummary: 'Devastador en mapas lineales de Escolta con líneas largas donde Discordia y sus descargas dominan pasillos sin rutas fáciles para que lo flanqueen.',
    weights: { sightlines: 3.8, flankOpenness: -2.6 },
    idealMaps: {
      'circuit-royal': { score: 16, reason: 'El mejor mapa de Zenyatta: líneas rectas sin flancos donde Discordia funde tanques' },
      'havana': { score: 16, reason: 'Sin caída de daño por distancia, letal cargando ráfagas en esquinas lejanas' },
      'junkertown': { score: 15, reason: 'Visión abierta total para mantener Orbe de discordia permanente' },
      'shambali-monastery': { score: 13, reason: 'Pasillos ascendentes canalizados donde sus voleas castigan cualquier avance' },
      'midtown': { score: 12, reason: 'Buena presión en las rectas largas protegido por su línea frontal' },
    },
    poorMaps: {
      'new-queen-street': { score: -14, reason: 'Flancos de 360° donde Sombra, Tracer y tanques Dive te cazan sin escape' },
      'suravasa': { score: -14, reason: 'Rotaciones largas y emboscadas laterales letales para tu nula movilidad' },
      'oasis': { score: -13, reason: 'Mapas abiertos a flanqueadores veloces que explotan tu hitbox redonda' },
      'esperanca': { score: -13, reason: 'Volver desde la base sin movilidad tras morir cuesta peleas enteras en Avance' },
      'watchpoint-gibraltar': { score: -12, reason: 'Winston, D.Va y Genji caen desde las pasarelas altas directamente sobre ti' },
    },
  },
  brigitte: {
    archetypeSummary: 'Guardaespaldas suprema en mapas donde debe escoltar a otro soporte en alturas disputadas por Dive o pelear en puntos de Control cerrados.',
    weights: { tightChokes: 2.0, boopPotential: 2.0, verticality: 1.0, sightlines: -2.2 },
    idealMaps: {
      'watchpoint-gibraltar': { score: 14, reason: 'Protege a Ana en el High Ground empujando a Winston/Genji con Mangual' },
      'dorado': { score: 14, reason: 'Niega saltos enemigos a los balcones y sostiene posiciones clave' },
      'ilios': { score: 14, reason: 'Lanzamiento de látigo consigue bajas ambientales e impide entradas al punto' },
      'lijiang-tower': { score: 13, reason: 'Activa Inspiración sin parar en las peleas cerradas de Control' },
      'nepal': { score: 13, reason: 'Gran aguante grupal y control de puertas estrechas en Santuario/Aldea' },
    },
    poorMaps: {
      'junkertown': { score: -15, reason: 'Imposible activar Inspiración cuando ambos equipos pelean a 40 metros' },
      'havana': { score: -15, reason: 'El Poke lejano rompe tu escudo pequeño sin que puedas golpear a nadie' },
      'circuit-royal': { score: -14, reason: 'Rango cuerpo a cuerpo inútil frente a duelos largos de francotiradores' },
    },
  },
  mizuki: {
    archetypeSummary: 'Especialista anti-dive de corto-medio alcance que brilla defendiendo objetivos compactos y puntos donde los asesinos intentan entrar.',
    weights: { tightChokes: 2.4, flankOpenness: 1.0, sightlines: -2.0 },
    idealMaps: {
      'samoa': { score: 14, reason: 'Frena entradas agresivas en espacios cerrados alrededor del punto' },
      'lijiang-tower': { score: 14, reason: 'Sus cadenas y control cercano anulan flanqueadores dentro del objetivo' },
      'hanaoka': { score: 13, reason: 'Excelente protección de retaguardia en choques rápidos y cortos' },
      'kings-row': { score: 13, reason: 'Castiga severamente a quien intente cruzar las esquinas estrechas' },
    },
    poorMaps: {
      'havana': { score: -13, reason: 'Poca influencia ofensiva frente a líneas extremas de francotirador' },
      'junkertown': { score: -13, reason: 'Distancias demasiado abiertas para sacar provecho a su control cercano' },
      'circuit-royal': { score: -12, reason: 'Sufre desgaste lejano sin objetivos cercanos que encadenar' },
    },
  },
  'jetpack-cat': {
    archetypeSummary: 'Soporte aéreo hiper-móvil que domina mapas con verticalidad, cielo amplio y abismos, pero queda apretado en techos interiores muy bajos.',
    weights: { skybox: 3.4, verticality: 2.4, boopPotential: 2.0, tightChokes: -1.4 },
    idealMaps: {
      'ilios': { score: 15, reason: 'Libertad aérea total, rescates sobre el vacío y gran control de alturas' },
      'watchpoint-gibraltar': { score: 14, reason: 'Sube y baja de cualquier pasarela al instante apoyando composiciones Dive' },
      'eichenwalde': { score: 14, reason: 'Vuela sobre tejados y almenas fuera del alcance de tanques terrestres' },
      'paraiso': { score: 13, reason: 'Aprovecha cada techo elevado para asistir ataques verticales' },
    },
    poorMaps: {
      'antarctic-peninsula': { score: -13, reason: 'Techos interiores bajos que cortan tus rutas de propulsión aérea' },
      'new-junk-city': { score: -11, reason: 'Salas cerradas donde es más fácil que los hitscans cercanos te alcancen' },
      'hanaoka': { score: -10, reason: 'Puntos cubiertos con poco margen para maniobrar en altura' },
    },
  },
  juno: {
    archetypeSummary: 'Excelente en mapas dinámicos de Avance, Punto Caliente y Control donde Anillo hiperespacial acelera rotaciones y Torpedos tienen visión abierta.',
    weights: { flankOpenness: 2.4, skybox: 1.8, verticality: 1.6 },
    idealMaps: {
      'esperanca': { score: 15, reason: 'Anillo hiperespacial domina el tempo del robot y Torpedos fijan a todo el equipo' },
      'suravasa': { score: 15, reason: 'Rotaciones rapidísimas entre puntos y Rayo orbital letal en capturas' },
      'runasapi': { score: 14, reason: 'Planeo orbital aprovecha los desniveles manteniendo visión sobre aliados' },
      'oasis': { score: 14, reason: 'Cielo despejado para fijar Torpedos de púlsar sobre múltiples objetivos' },
      'colosseo': { score: 13, reason: 'Acelera entradas y salidas en el pasillo central con gran fluidez' },
    },
    poorMaps: {
      'antarctic-peninsula': { score: -9, reason: 'Muros interiores cortos que interrumpen el fijado de los Torpedos de púlsar' },
      'kings-row': { score: -7, reason: 'En esquinas muy cerradas Lúcio o Baptiste aportan más supervivencia pura' },
    },
  },
  mercy: {
    archetypeSummary: 'Brilla en mapas con líneas largas o cielo abierto donde potencia (pocket) a tiradores y héroes aéreos usando coberturas altas para Ángel guardián.',
    weights: { skybox: 2.6, sightlines: 2.4, verticality: 1.8, tightChokes: -1.8 },
    idealMaps: {
      'ilios': { score: 15, reason: 'El mejor escenario para potenciar a Pharah, Echo, Freja o Ashe desde el cielo' },
      'junkertown': { score: 15, reason: 'Amplificación de daño letal en tiradores y resurrecciones tras esquinas lejanas' },
      'circuit-royal': { score: 14, reason: 'Potencia el Poke de largo alcance y revierte bajas iniciales de francotirador' },
      'havana': { score: 14, reason: 'Da ventaja decisiva en duelos de francotiradores con rayo azul y Resurrección' },
      'eichenwalde': { score: 13, reason: 'Excelente movilidad aérea entre tejados acompañando DPS voladores' },
    },
    poorMaps: {
      'antarctic-peninsula': { score: -13, reason: 'Salas pequeñas y techos bajos donde Ángel guardián tiene poco espacio seguro' },
      'lijiang-tower': { score: -11, reason: 'En Centro de Control las composiciones Brawl necesitan curación en área y velocidad' },
      'new-junk-city': { score: -11, reason: 'Peleas cerradas y caóticas donde es muy arriesgado canalizar Resurrección' },
      'hanaoka': { score: -10, reason: 'Objetivos compactos que favorecen soportes de impacto grupal directo' },
    },
  },
};

function ratingFromScore(score: number): MapSynergyRating {
  if (score >= 12) return 'ideal';
  if (score >= 5) return 'favorable';
  if (score <= -11) return 'poor';
  if (score <= -5) return 'unfavorable';
  return 'neutral';
}

/**
 * Evaluates exact competitive synergy (-16 to +16) between a specific Hero and a specific GameMap.
 */
export function evaluateHeroMapSynergy(hero: Hero, map: GameMap): HeroMapEvaluation {
  const profile = HERO_MAP_PROFILES[hero.id];
  const geo = MAP_GEOMETRY[map.id] || {
    sightlines: map.longSightlines ? 4 : map.isCloseQuarters ? 2 : 3,
    verticality: map.hasHighGround ? 4 : 2,
    tightChokes: map.isCloseQuarters ? 4 : 2,
    boopPotential: 1,
    flankOpenness: 3,
    skybox: 3,
  };

  // 1. Explicit curated Ideal / Poor map match
  if (profile?.idealMaps[map.id]) {
    const entry = profile.idealMaps[map.id];
    return {
      mapId: map.id,
      score: entry.score,
      rating: ratingFromScore(entry.score),
      reason: entry.reason,
    };
  }

  if (profile?.poorMaps[map.id]) {
    const entry = profile.poorMaps[map.id];
    return {
      mapId: map.id,
      score: entry.score,
      rating: ratingFromScore(entry.score),
      reason: entry.reason,
    };
  }

  // 2. Geometry-weighted tactical calculation centered around neutral (3)
  let raw = 0;
  if (profile?.weights) {
    const w = profile.weights;
    if (w.sightlines) raw += (geo.sightlines - 3) * w.sightlines;
    if (w.verticality) raw += (geo.verticality - 3) * w.verticality;
    if (w.tightChokes) raw += (geo.tightChokes - 3) * w.tightChokes;
    if (w.boopPotential) raw += (geo.boopPotential - 1.8) * w.boopPotential * 0.7;
    if (w.flankOpenness) raw += (geo.flankOpenness - 3) * w.flankOpenness;
    if (w.skybox) raw += (geo.skybox - 3) * w.skybox;
  }

  // Subtle style alignment tie-breaker
  if (map.favoredStyles.includes(hero.style)) {
    raw += 2.5;
  } else if (
    (hero.style === 'poke' && geo.tightChokes >= 4 && geo.sightlines <= 2) ||
    (hero.style === 'brawl' && geo.sightlines >= 4 && geo.tightChokes <= 2)
  ) {
    raw -= 2.5;
  }

  const clamped = Math.max(-12, Math.min(11, Math.round(raw)));
  const rating = ratingFromScore(clamped);

  let reason = `Mapa equilibrado para el kit de ${hero.name}`;
  if (clamped >= 5) {
    if (geo.sightlines >= 4 && hero.range === 'Largo') {
      reason = `Buenas líneas de visión en ${map.name} para presionar a distancia`;
    } else if (geo.verticality >= 4 && hero.style === 'dive') {
      reason = `Alturas favorables en ${map.name} para iniciar y rotar con ventaja`;
    } else if (geo.tightChokes >= 4 && (hero.range === 'Corto' || hero.range === 'Melee')) {
      reason = `Distancias cerradas en ${map.name} que favorecen tu combate cercano`;
    } else if (geo.flankOpenness >= 4) {
      reason = `Rutas abiertas en ${map.name} que facilitan tus rotaciones y ángulos`;
    } else {
      reason = `Geometría favorable en ${map.name} para tu estilo ${hero.style.toUpperCase()}`;
    }
  } else if (clamped <= -5) {
    if (geo.tightChokes >= 4 && hero.range === 'Largo') {
      reason = `Geometría cerrada en ${map.name} que reduce tus líneas de tiro largas`;
    } else if (geo.sightlines >= 4 && (hero.range === 'Corto' || hero.range === 'Melee')) {
      reason = `Tramos muy abiertos en ${map.name} donde sufres desgaste al acercarte`;
    } else if (geo.verticality >= 4) {
      reason = `El High Ground pronunciado de ${map.name} dificulta tu posicionamiento`;
    } else {
      reason = `El diseño de ${map.name} limita el impacto óptimo de ${hero.name}`;
    }
  }

  return {
    mapId: map.id,
    score: clamped,
    rating,
    reason,
  };
}

/**
 * Helper for HeroesView: returns sorted top favorable maps and worst maps for a hero.
 */
export function getHeroMapBreakdown(hero: Hero): {
  archetypeSummary: string;
  bestMaps: Array<{ map: GameMap; eval: HeroMapEvaluation }>;
  worstMaps: Array<{ map: GameMap; eval: HeroMapEvaluation }>;
} {
  const profile = HERO_MAP_PROFILES[hero.id];
  const evaluated = OVERWATCH_MAPS.map(map => ({
    map,
    eval: evaluateHeroMapSynergy(hero, map),
  }));

  const bestMaps = [...evaluated]
    .filter(x => x.eval.score >= 5)
    .sort((a, b) => b.eval.score - a.eval.score)
    .slice(0, 5);

  const worstMaps = [...evaluated]
    .filter(x => x.eval.score <= -5)
    .sort((a, b) => a.eval.score - b.eval.score)
    .slice(0, 4);

  return {
    archetypeSummary:
      profile?.archetypeSummary ||
      'Adapta tu posicionamiento a las coberturas y líneas de visión principales del mapa.',
    bestMaps,
    worstMaps,
  };
}

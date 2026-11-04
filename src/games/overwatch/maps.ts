import type { GameMap } from '../../types/game';

const RAW_OVERWATCH_MAPS: GameMap[] = [
  {
    "id": "kings-row",
    "name": "King's Row",
    "mode": "Híbrido",
    "image": "https://tonikiraw.com/assets/img/mapas/kings-row.webp",
    "favoredStyles": [
      "brawl"
    ],
    "hasHighGround": false,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "midtown",
    "name": "Midtown",
    "mode": "Híbrido",
    "image": "https://tonikiraw.com/assets/img/mapas/midtown.webp",
    "favoredStyles": [
      "brawl",
      "poke"
    ],
    "hasHighGround": true,
    "isCloseQuarters": false,
    "longSightlines": true
  },
  {
    "id": "eichenwalde",
    "name": "Eichenwalde",
    "mode": "Híbrido",
    "image": "https://tonikiraw.com/assets/img/mapas/eichenwalde.webp",
    "favoredStyles": [
      "brawl",
      "poke"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "blizzard-world",
    "name": "Blizzard World",
    "mode": "Híbrido",
    "image": "https://tonikiraw.com/assets/img/mapas/blizzard-world.webp",
    "favoredStyles": [
      "brawl",
      "dive"
    ],
    "hasHighGround": true,
    "isCloseQuarters": false,
    "longSightlines": true
  },
  {
    "id": "hollywood",
    "name": "Hollywood",
    "mode": "Híbrido",
    "image": "https://tonikiraw.com/assets/img/mapas/hollywood.webp",
    "favoredStyles": [
      "brawl",
      "poke"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "paraiso",
    "name": "Paraíso",
    "mode": "Híbrido",
    "image": "https://tonikiraw.com/assets/img/mapas/paraiso.webp",
    "favoredStyles": [
      "dive",
      "brawl"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "numbani",
    "name": "Numbani",
    "mode": "Híbrido",
    "image": "https://tonikiraw.com/assets/img/mapas/numbani.webp",
    "favoredStyles": [
      "dive"
    ],
    "hasHighGround": true,
    "isCloseQuarters": false,
    "longSightlines": true
  },
  {
    "id": "circuit-royal",
    "name": "Circuit Royal",
    "mode": "Escolta",
    "image": "https://tonikiraw.com/assets/img/mapas/circuit-royal.webp",
    "favoredStyles": [
      "poke"
    ],
    "hasHighGround": true,
    "isCloseQuarters": false,
    "longSightlines": true
  },
  {
    "id": "dorado",
    "name": "Dorado",
    "mode": "Escolta",
    "image": "https://tonikiraw.com/assets/img/mapas/dorado.webp",
    "favoredStyles": [
      "dive"
    ],
    "hasHighGround": true,
    "isCloseQuarters": false,
    "longSightlines": true
  },
  {
    "id": "watchpoint-gibraltar",
    "name": "Watchpoint: Gibraltar",
    "mode": "Escolta",
    "image": "https://tonikiraw.com/assets/img/mapas/watchpoint-gibraltar.webp",
    "favoredStyles": [
      "dive"
    ],
    "hasHighGround": true,
    "isCloseQuarters": false,
    "longSightlines": true
  },
  {
    "id": "havana",
    "name": "Havana",
    "mode": "Escolta",
    "image": "https://tonikiraw.com/assets/img/mapas/havana.webp",
    "favoredStyles": [
      "poke"
    ],
    "hasHighGround": true,
    "isCloseQuarters": false,
    "longSightlines": true
  },
  {
    "id": "junkertown",
    "name": "Junkertown",
    "mode": "Escolta",
    "image": "https://tonikiraw.com/assets/img/mapas/junkertown.webp",
    "favoredStyles": [
      "poke"
    ],
    "hasHighGround": true,
    "isCloseQuarters": false,
    "longSightlines": true
  },
  {
    "id": "rialto",
    "name": "Rialto",
    "mode": "Escolta",
    "image": "https://tonikiraw.com/assets/img/mapas/rialto.webp",
    "favoredStyles": [
      "dive",
      "brawl"
    ],
    "hasHighGround": false,
    "isCloseQuarters": true,
    "longSightlines": true
  },
  {
    "id": "route-66",
    "name": "Ruta 66",
    "mode": "Escolta",
    "image": "https://tonikiraw.com/assets/img/mapas/route-66.webp",
    "favoredStyles": [
      "poke",
      "dive"
    ],
    "hasHighGround": true,
    "isCloseQuarters": false,
    "longSightlines": true
  },
  {
    "id": "shambali-monastery",
    "name": "Monasterio Shambali",
    "mode": "Escolta",
    "image": "https://tonikiraw.com/assets/img/mapas/shambali-monastery.webp",
    "favoredStyles": [
      "brawl"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "busan",
    "name": "Busan",
    "mode": "Control",
    "image": "https://tonikiraw.com/assets/img/mapas/busan.webp",
    "favoredStyles": [
      "dive",
      "poke"
    ],
    "hasHighGround": true,
    "isCloseQuarters": false,
    "longSightlines": true
  },
  {
    "id": "ilios",
    "name": "Ilios",
    "mode": "Control",
    "image": "https://tonikiraw.com/assets/img/mapas/ilios.webp",
    "favoredStyles": [
      "dive",
      "poke"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": true
  },
  {
    "id": "lijiang-tower",
    "name": "Torre Lijiang",
    "mode": "Control",
    "image": "https://tonikiraw.com/assets/img/mapas/lijiang-tower.webp",
    "favoredStyles": [
      "dive",
      "brawl"
    ],
    "hasHighGround": false,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "nepal",
    "name": "Nepal",
    "mode": "Control",
    "image": "https://tonikiraw.com/assets/img/mapas/nepal.webp",
    "favoredStyles": [
      "dive",
      "brawl"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "oasis",
    "name": "Oasis",
    "mode": "Control",
    "image": "https://tonikiraw.com/assets/img/mapas/oasis.webp",
    "favoredStyles": [
      "dive",
      "brawl"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "antarctic-peninsula",
    "name": "Península Antártica",
    "mode": "Control",
    "image": "https://tonikiraw.com/assets/img/mapas/antarctic-peninsula.webp",
    "favoredStyles": [
      "brawl"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "samoa",
    "name": "Samoa",
    "mode": "Control",
    "image": "https://tonikiraw.com/assets/img/mapas/samoa.webp",
    "favoredStyles": [
      "dive"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "colosseo",
    "name": "Colosseo",
    "mode": "Avance",
    "image": "https://tonikiraw.com/assets/img/mapas/colosseo.webp",
    "favoredStyles": [
      "brawl"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": true
  },
  {
    "id": "new-queen-street",
    "name": "New Queen Street",
    "mode": "Avance",
    "image": "https://tonikiraw.com/assets/img/mapas/new-queen-street.webp",
    "favoredStyles": [
      "brawl"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "esperanca",
    "name": "Esperança",
    "mode": "Avance",
    "image": "https://tonikiraw.com/assets/img/mapas/esperanca.webp",
    "favoredStyles": [
      "brawl"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "runasapi",
    "name": "Runasapi",
    "mode": "Avance",
    "image": "https://tonikiraw.com/assets/img/mapas/runasapi.webp",
    "favoredStyles": [
      "dive"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "new-junk-city",
    "name": "New Junk City",
    "mode": "Punto Caliente",
    "image": "https://tonikiraw.com/assets/img/mapas/new-junk-city.webp",
    "favoredStyles": [
      "dive"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "suravasa",
    "name": "Suravasa",
    "mode": "Punto Caliente",
    "image": "https://tonikiraw.com/assets/img/mapas/suravasa.webp",
    "favoredStyles": [
      "brawl"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "aatlis",
    "name": "Aatlis",
    "mode": "Punto Caliente",
    "image": "https://tonikiraw.com/assets/img/mapas/aatlis.webp",
    "favoredStyles": [
      "dive"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "grimsvotn",
    "name": "Grímsvötn",
    "mode": "Invasión / Clash",
    "image": "https://tonikiraw.com/assets/img/mapas/grimsvotn.webp",
    "favoredStyles": [
      "dive"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "neon-junction",
    "name": "Neon Junction",
    "mode": "Invasión / Clash",
    "image": "https://tonikiraw.com/assets/img/mapas/neon-junction.webp",
    "favoredStyles": [
      "dive"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "hanaoka",
    "name": "Hanaoka",
    "mode": "Invasión / Clash",
    "image": "https://overfast-api.tekrop.fr/static/maps/hanaoka.jpg",
    "favoredStyles": [
      "brawl",
      "dive"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  },
  {
    "id": "throne-of-anubis",
    "name": "Trono de Anubis",
    "mode": "Invasión / Clash",
    "image": "https://overfast-api.tekrop.fr/static/maps/throne-of-anubis.jpg",
    "favoredStyles": [
      "brawl",
      "dive"
    ],
    "hasHighGround": true,
    "isCloseQuarters": true,
    "longSightlines": false
  }
];

export const OVERWATCH_MAPS: GameMap[] = [...RAW_OVERWATCH_MAPS].sort((a, b) =>
  a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
);

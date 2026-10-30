import type { HeroKitData } from '../../types/game';

export const OVERWATCH_HERO_KITS: Record<string, HeroKitData> = {
  "ana": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/ana.webp",
    "hitpoints": {
      "shields": 0,
      "health": 250,
      "armor": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Rifle biótico",
        "description": "Rifle de gran alcance que sana a los aliados y daña a los enemigos.  Mantenlo pulsado para hacer zoom.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/db33c39f25d96a2cabcacb778cf784535279180f6d9119ef56311bdcdf6077df.png"
      }
    ],
    "ultimate": [
      {
        "name": "Nanoestimulantes",
        "description": "Aumentas el daño de un aliado, al tiempo que reduces el daño que este recibe.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/726f2fa5b149e5ac58310f11893db1850a7312270db4f88c164bb43a84f962cf.png"
      }
    ],
    "abilities": [
      {
        "name": "Dardo sedante",
        "description": "Disparas un dardo que duerme a un enemigo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/620a97282b81ea178951b565e8249361e67c868387e61a4297261ffa11bace13.png"
      },
      {
        "name": "Granada biótica",
        "description": "Lanzas una bomba que sana y aumenta la sanación a los aliados; al mismo tiempo, inflige daño y evita que se pueda sanar a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/886454bdb7df9ad8a47c4a3a8fa5dd488f5b2996e311f16d42a5f022942c4d18.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: TÁCTICO",
        "description": "Puedes acumular carga de definitiva excedente que se conserva tras usar tu habilidad definitiva."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Anestesia local",
          "description": "Dardo sedante explota al impactar, lo que ralentiza a los enemigos y les inflige 45 de daño durante 3 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ae02fae670005f987ff17803a469c958a1281c236aa2817fd1b8a03e119ad77d.png"
        },
        {
          "name": "Suero de velocidad",
          "description": "Nanoestimulantes otorga un aumento de un 30% de la velocidad de movimiento a Ana y a su objetivo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2dc4cdf319916abf18c9972b4fb8d14e5dd92e319960b36846c270b3bd5ffa4f.png"
        }
      ],
      "major": [
        {
          "name": "Rebote biótico",
          "description": "Tras explotar, Granada biótica rebota y vuelve a explotar, lo que causa 60 de daño y sanación.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/388dfc3c6fb4cb6a233350b887d1400876890a33c79e49d7fb3c6ca220eddc31.png"
        },
        {
          "name": "Cazarrecompensas",
          "description": "Rifle biótico puede infligir críticos a los enemigos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/fe56a0ef536dd3f17d3c7728151ff60ef1a48071e93c2071c095f4e1712e6721.png"
        }
      ]
    },
    "accentColor": "#6f8fc9"
  },
  "anran": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/anran.webp",
    "hitpoints": {
      "shields": 0,
      "health": 250,
      "armor": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Abanicos Zhuque",
        "description": "Abanicos que disparan proyectiles ardientes.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b575eb7daebdb64b81b0942c466b00117b31925678d10ab8739781e0ccf1bd69.png"
      },
      {
        "name": "Atizar el fuego",
        "description": "Una explosión de aire caliente que aumenta el daño por quemadura.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/66ed3af8219952edc022c4ef08c65191cdd6839aae0a2c451f70f8f61d2bc7de.png"
      }
    ],
    "ultimate": [
      {
        "name": "Ascenso bermellón",
        "description": "Carga hacia delante, explota al impactar y prende fuego a los enemigos inmediatamente.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a7f971f4e0c7c898e634d0787f4a0da48ae78b7adbdc7b71149efa0352319c76.png"
      },
      {
        "name": "Renacimiento bermellón",
        "description": "Cuando mueres, te revive con una explosión abrasadora.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9060d9e2e407a31ab95948e6512373a4318ebd8883aefa91e9f2fa9bbffb7076.png"
      }
    ],
    "abilities": [
      {
        "name": "Llama danzante",
        "description": "Golpea a los enemigos cercanos mientras esquivas todo el daño y te sanas por cada enemigo golpeado.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c8a106a2acae1b9edf47495af102cf17fd7e8320c76b201d533f5723afc45d14.png"
      },
      {
        "name": "Carga infernal",
        "description": "Te impulsa hacia delante y daña a los enemigos con los que impactas.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/92cd63b84d95581dfbe8c3974be31c9f303db4d25bfd117474f93ab5bc9cca4b.png"
      }
    ],
    "passives": [
      {
        "name": "Ignición",
        "description": "Golpea a los enemigos con ataques de fuego para quemarlos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f4a70d5eacbfa0f6e8290ad352df6e06e72e5dc755ecc650e120697bf59fa7ad.png"
      },
      {
        "name": "SUBROL: FLANQUEADOR",
        "description": "Los packs de salud restauran mucha más vida adicional."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "A fuego lento",
          "description": "Los enemigos afectados por Ignición arden durante 1,5 segundos más",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5d927315af0a5729ab1be838556dc1e2d9206bbe0fd69bf3c084b64a761c9b12.png"
        },
        {
          "name": "Escudo de calor",
          "description": "Obtienes 50 de exceso de salud cuando usas tu definitiva y por cada enemigo que incendies con ella.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/52a35ec19286d15384a73910c2763d02774674069f3cfd0ee5681afd545f3c82.png"
        }
      ],
      "major": [
        {
          "name": "Mecha corta",
          "description": "Impactar en un enemigo con Carga infernal reduce su tiempo de reutilización en 1,5 segundos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6aedcee19eff304025cefdba8f089cf356293389088f53c8c6f4de11a008ba63.png"
        },
        {
          "name": "Llama hambrienta",
          "description": "Aumenta en 25 la sanación de los golpes posteriores de Llama danzante.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/110e0b00345b359281b3ae871725d149051bed40fce266435806b4c390729722.png"
        }
      ]
    },
    "accentColor": "#e0533d"
  },
  "ashe": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/ashe.webp",
    "hitpoints": {
      "shields": 0,
      "health": 250,
      "armor": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Víbora",
        "description": "Rifle semiautomático.  Mantén pulsado para hacer zoom, lo que aumenta el daño y la precisión, pero reduce la velocidad de disparo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1e5c0d3360d2357d28d4c5eacb6727589ac3d4ca99b09e3f8fd67846b6b2ef4e.png"
      }
    ],
    "ultimate": [
      {
        "name": "BOB",
        "description": "Despliegas a Bob, que carga hacia delante y lanza a los enemigos por los aires. Luego ataca con los cañones de su brazo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/224dd7fd039ee71e2633520cac81186fddabe4d399a64650263514829b936295.png"
      }
    ],
    "abilities": [
      {
        "name": "Recortada",
        "description": "Acribillas a los enemigos frente a ti y te impulsas hacia atrás.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/834538cfbc7c2eb7f9fd18aea7ba91264446af706199d716526060e6e34b48ed.png"
      },
      {
        "name": "Dinamita",
        "description": "Lanzas un explosivo que detona tras un breve periodo o al instante si le disparas.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0e2cc18253fc824f3eac3df4623dfb03210937e27901cc868a8694a4a65e68ad.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: TIRADOR",
        "description": "Los impactos críticos reducen ligeramente los tiempos de reutilización de tus habilidades de movimiento."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Detonador a distancia",
          "description": "Tras usar dinamita, pulsar de nuevo E lo hace denotar tras un retardo de 0,5 segundos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/aa6a6fe0ff9bc45cd066c0938191f02c59b81c97c4b1d74d6de14550894fbf7c.png"
        },
        {
          "name": "Doble cañón",
          "description": "Tras repeler a un enemigo con Recortada, podrás volver a utilizarla una vez más durante 2 segundos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cb7352dd49a08b2b95183a0ae7ef831f711754167e84968316c72052ec0affe8.png"
        }
      ],
      "major": [
        {
          "name": "Picadura de víbora",
          "description": "Acertar 2 disparos con mira consecutivos en un mismo objetivo inflige 25 de daño adicional.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/24f39937222b86f1b15717b96ab8b344104a9b69aaca142965d6c8ebc841a5ca.png"
        },
        {
          "name": "Ráfaga de aire",
          "description": "Mientras está en el aire, el radio de explosión de Dinamita aumenta un 40%, y devuelve 6 de munición cuando se lanza.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5c01e6810c9aac8d790e97f6b1e090aef6e89970c16eb9601812332e1cdb8f8f.png"
        }
      ]
    },
    "accentColor": "#b8a08a"
  },
  "baptiste": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/baptiste.webp",
    "hitpoints": {
      "shields": 0,
      "health": 250,
      "armor": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Lanzagranadas biótico",
        "description": "Un arma que dispara ráfagas de tres proyectiles.  Lanzas un proyectil sanador que sana a todos los aliados cerca del punto de impacto.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3c6e635c598b687805163bd2173624d18e3c989ca3c0f7b37e7dadd5179a59c1.png"
      }
    ],
    "ultimate": [
      {
        "name": "Matriz amplificadora",
        "description": "Proyectas una matriz que duplica el daño y la sanación de los proyectiles aliados.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/35311fd3b5a6bdd90d9e58101685675e0ee3562b2d63eb0c5775dd1f7b86cc3b.png"
      }
    ],
    "abilities": [
      {
        "name": "Energía regeneradora",
        "description": "Actívala para sanarte a ti y a los aliados cercanos al instante y obtener sanación adicional en el tiempo. La sanación instantánea se duplica en los objetivos que tienen menos de la mitad de la salud.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/995d4c830cd4d6d458333a645561fefb75aab4f5228fe6b7923ea55b29f0496d.png"
      },
      {
        "name": "Campo de inmortalidad",
        "description": "Lanzas un dispositivo que impide que los aliados mueran. El dispositivo se puede destruir.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8e586114b79ae8281255d8e5a5a48d3a855be6e88b3d7abeda93288f4fffe909.png"
      }
    ],
    "passives": [
      {
        "name": "Exobotas",
        "description": "Te agachas para poder dar un salto de gran altura.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b3451a608be2eea1a38669721c9cd96ef9114172cec10b06c27e8048f42614bd.png"
      },
      {
        "name": "SUBROL: TÁCTICO",
        "description": "Puedes acumular carga de definitiva excedente que se conserva tras usar tu habilidad definitiva."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Campo expandido",
          "description": "El radio de Campo de inmortalidad es un 30% más grande.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/99a5dc8c29d169d2c8e095495657d8d69a57e19e311f8282c8d5f6648cd74f9e.png"
        },
        {
          "name": "Energía de asalto",
          "description": "Energía regeneradora ahora otorga a Baptiste un 20% más de velocidad de ataque durante 3 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/78de19e8f754a2882980435a03ada17d1bd791bbec10bfa9a076cdf82ef9ccce.png"
        }
      ],
      "major": [
        {
          "name": "Sanación automatizada",
          "description": "Al usar una habilidad, se activa la torreta sobre el hombro de Baptiste, la cual dispara periódicamente hasta 3 veces a aliados. Cada disparo restaura 40 de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0ba2344d9af993c4ba4f74f7a381327f20bcf153e78d2b0269a2fa1ef5884a6a.png"
        },
        {
          "name": "Botas cohete",
          "description": "Mientras estés en el aire con las Exobotas, usa ESPACIO para lanzarte hacia delante horizontalmente.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d2a943d5fce3bba49e1f482c0cd56973cb287fb40d2fd089f40a15047856a378.png"
        }
      ]
    },
    "accentColor": "#4fb3c8"
  },
  "bastion": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/bastion.webp",
    "hitpoints": {
      "shields": 0,
      "health": 250,
      "armor": 100,
      "total": 350
    },
    "weapons": [
      {
        "name": "Modo asalto",
        "description": "Un tanque de desplazamiento lento con un poderoso cañón rotativo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c3391c7eb4ce0ac2483d1821299fa684072e2ace043ac6ae7839f81f09c187f9.png"
      },
      {
        "name": "Modo reconocimiento",
        "description": "Móvil y con un arma ligera de gran precisión.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9febc039b8d8f7743539e8743f78b15495e3ea619615ab763dc747acd29b9615.png"
      }
    ],
    "ultimate": [
      {
        "name": "Modo artillería",
        "description": "Te vuelves inmóvil y disparas hasta 3 proyectiles muy potentes.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/891396b354d31ef404bf525651f8f95048da8f8816a381021ce8d6e8ccabfafa.png"
      }
    ],
    "abilities": [
      {
        "name": "Granada táctica A-36",
        "description": "Lanzas una bomba que rebota en las paredes y explota cuando impacta contra los enemigos o el suelo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/80deb4f0bd0d41f4f9747c3728e31758dee523821abded024b6c242c659ff454.png"
      },
      {
        "name": "Reconfiguración",
        "description": "Alternas entre un modo y el otro.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/eb87350ce8e74c06df5b7fb33cfc2904cbb918777d3740f9e0ee87ff5260265f.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: ESPECIALISTA",
        "description": "Eliminar a un enemigo aumenta brevemente tu velocidad de recarga."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Bomba inteligente",
          "description": "La repulsión a uno mismo de Granada táctica A-36 aumenta un 25% y no inflige daño.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/813550a1cb8390ac118eb81441c1b76bf40bf0ff536cfb2fdb0ed1e8ab53262f.png"
        },
        {
          "name": "Modo recarga",
          "description": "Reduce el tiempo de reutilización de Granada táctica A-36 en 4 segundos cuando se cambian las configuraciones.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0e3078ec09e5ad1bf131e3cfd820e6dd7fe0cf568545a7093e0b2b41e019f995.png"
        }
      ],
      "major": [
        {
          "name": "Explosivos Lindholm",
          "description": "El arma de Modo asalto dispara proyectiles explosivos lentamente en lugar de usar un cañón rotativo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/18e73dc037267e2b8e315bbbc76c826360633cc67f16dedeed21a86cd4f7f97e.png"
        },
        {
          "name": "Autorreparación",
          "description": "Pulsa E para sanarte rápidamente.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0322e5394e3b67a011c27be4d8c84c0a4f74771d557339ac680dae7edbc3aaf7.png"
        }
      ]
    },
    "accentColor": "#8fae6f"
  },
  "brigitte": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/brigitte.webp",
    "hitpoints": {
      "health": 175,
      "armor": 75,
      "shields": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Mangual mecánico",
        "description": "Arma cuerpo a cuerpo con alcance aumentado.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e75775c837abbf4aa1ec944fb08f3978819699a27242c64e27f3d52201dee5dc.png"
      }
    ],
    "ultimate": [
      {
        "name": "Formación",
        "description": "Obtienes armadura, potencias Escudo barrera y proporcionas salud adicional a los aliados cercanos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/28664c18171b484aefc61836b34d749dac8971f1393c6a17c88ccb60b8c2d0b3.png"
      }
    ],
    "abilities": [
      {
        "name": "Kit de reparación",
        "description": "Sana a un aliado durante un breve período.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6a2c40a4d0a87dfb1d07dada2a3aa4bc46e8361e76f10294585fcb28008903b8.png"
      },
      {
        "name": "Lanzamiento de mangual",
        "description": "Lanzas el mangual hacia delante para repeler y alejar de ti a un enemigo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b1f72a2f8c1c8df901af39ec7fa33ab69d79c8b92d7bf3319e4a2081e4712dac.png"
      },
      {
        "name": "Escudo barrera",
        "description": "Mantén pulsado  para activar una barrera de energía frontal.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d90077573a1495f77345c56ea9231366bac05d3750053e26ccf0b733225ea4c1.png"
      },
      {
        "name": "Carga con escudo",
        "description": "Disponible al tener el Escudo barrera desplegado. Cargas hacia delante y repeles y aturdes a un enemigo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/da7bcc6cd41e74adbe68450d5afc7809745717e8bdac3fd9cba22f12d6419297.png"
      }
    ],
    "passives": [
      {
        "name": "Inspiración",
        "description": "Infligir daño a los enemigos sana a los aliados cercanos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2d239f8ca1265f4c5f7be415edc5568481ca347e70a6e2dbf5790551fe63ea9b.png"
      },
      {
        "name": "SUBROL: SUPERVIVIENTE",
        "description": "Usar una habilidad de movimiento activa inmediatamente tu regeneración pasiva de salud."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Médica de combate",
          "description": "Los ataques cuerpo a cuerpo contra enemigos reducen el tiempo de reutilización de Kit de reparación en 0,75 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/653e76687c41ac4c2f6aa02bcb0277228c13a7d0ac62b8b4dc6259191bad98ff.png"
        },
        {
          "name": "Subida de moral",
          "description": "Inspiración dura 3 segundos más cuando se activa con Lanzamiento de mangual.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce74272f296ac761d22db50718ce39fe4622c0304cc2570ab9a7e2bb82ca135f.png"
        }
      ],
      "major": [
        {
          "name": "Golpe inspirador",
          "description": "Carga con escudo otorga un 30% más de velocidad de movimiento durante 2 s. Al golpear a un enemigo con Carga con escudo se aplica inmediatamente un efecto de sanación completo de Inspiración.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a1a518ab82a42370401a2b3e4284e7efca3f2eb4bc2dd55d11755ea192afcae8.png"
        },
        {
          "name": "Latigazo cervical",
          "description": "La repulsión de Lanzamiento de mangual puede estampar a los enemigos contra las paredes, lo que inflige 60 de daño adicional.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9d6a8ce740dd9b84adc1b60a518501c66d83f4c592ae84dec4cd3c9e4f159a40.png"
        }
      ]
    },
    "accentColor": "#d0705e"
  },
  "cassidy": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/cassidy.webp",
    "hitpoints": {
      "health": 250,
      "armor": 0,
      "shields": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Pacificador",
        "description": "Un revólver preciso y potente.  Disparas todas las balas restantes frenéticamente.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/96aadaed5019913a61810e895d9c17d38d369f7c3a3213ced78ef562147a83a5.png"
      }
    ],
    "ultimate": [
      {
        "name": "Sin perdón",
        "description": "Retas a tus enemigos a un duelo. Pulsa Q para apuntar y luego Q o HABILIDAD 3 para disparar.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6b78a5cb96040a70e6b41e767a6ea59c2af4e773521b8b4e0bf2c6fd642a3824.png"
      }
    ],
    "abilities": [
      {
        "name": "Evasión",
        "description": "Ruedas en la dirección en la que te estás moviendo para recibir menos daño y recargar el arma.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b22144e644a4a63963e063fc8cc969cfb9061e29993d713b0c64a89b1ac9f280.png"
      },
      {
        "name": "Granada cegadora",
        "description": "Lanza una granada de corto alcance que entorpece y ralentiza el movimiento de los enemigos cercanos."
      }
    ],
    "passives": [
      {
        "name": "SUBROL: TIRADOR",
        "description": "Los impactos críticos reducen ligeramente los tiempos de reutilización de tus habilidades de movimiento."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Bang, bang",
          "description": "Cassidy lanza una segunda Granada cegadora que llega más lejos, pero ambas granadas infligen un 40% menos de daño.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4cf99ebedab5eb72e47c1388000cb29ad521fb2faf7e7b31f526bbbe3f212632.png"
        },
        {
          "name": "¡Arre!",
          "description": "Después de usar Evasión, Cassidy obtiene un 60% de aumento de velocidad de movimiento que se reduce a lo largo de 1,5 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b0d48ad9c8bdf1ce4ec5aeb9fe01b8fe8c1db55e4a5c411eedb74a7c41967526.png"
        }
      ],
      "major": [
        {
          "name": "Resumen rodante",
          "description": "Evasión también sana 15 de salud por cada bala recargada.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4eb33f06a39774d03562b84d4541ed691de840de3aedefc18fb6b809a9f01b8f.png"
        },
        {
          "name": "Bala de plata",
          "description": "El disparo secundario de Pacificador se sustituye con un disparo perforador que inflige sangrado. Evasión y Sin perdón restablecen sus tiempos de reutilización.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/383425b058c7a8a60439132ecb199ea59e91be71b7e57835019c28beb7f080a2.png"
        }
      ]
    },
    "accentColor": "#c4504a"
  },
  "dmon": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/dmon.webp",
    "hitpoints": {
      "health": 425,
      "armor": 275,
      "shields": 0,
      "total": 700
    },
    "weapons": [
      {
        "name": "Sable de plasma",
        "description": "Arma cuerpo a cuerpo de energía rápida.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5b8ae7f23071c20d472d55243ddebe666c361bab598c18e12161b8415ee058de.png"
      },
      {
        "name": "Cañón automático de fusión portátil",
        "description": "Ametralladora pesada.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bedcca9c4d45135065757cd2f5ff48137b9694159ea5929959efa63e9a45dac7.png"
      },
      {
        "name": "Cañón automático de fusión",
        "description": "Activa una ametralladora pesada de cadencia rápida.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/db227e82342a3b2f97f3223616ffc5923999ea9d3badf019a341f2ba1b38843f.png"
      }
    ],
    "ultimate": [
      {
        "name": "Ruptura de límites",
        "description": "Asesta un tajo con barrido que le otorga exceso de salud y amplifica el daño que reciben los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1dba45b4791b7de30f525eb4a4ab38e605c14d93bc5a5a4e4d121186b3d71020.png"
      },
      {
        "name": "Meca",
        "description": "Reconstruye el meca.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/751219a659df8c345ade932ed66dea60bdc844c71c2c185d64bcea83ea8c1ae2.png"
      }
    ],
    "abilities": [
      {
        "name": "Barrera de energía",
        "description": "Mantén pulsado  para activar una barrera de energía frontal.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/fc4fc3dc561102b6469a81771190f915f07ac7186b1c9597451018f885c6b99c.png"
      },
      {
        "name": "Golpe arrollador",
        "description": "Mientras Barrera de energía esté desplegada, golpea hacia delante para infligir daño a tus enemigos y empujarlos hacia atrás.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e2027a7ba82448e64bf82f5714adaaeafea76d9c6c8ef461e226300a060a7fa8.png"
      },
      {
        "name": "Propulsores",
        "description": "Consume combustible para abalanzarte hacia cualquier dirección en horizontal.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ea768e2c364167941c4b0a3bc8bc65d959274e1c0439ab5f6073611aff8c4e37.png"
      }
    ],
    "passives": [
      {
        "name": "¡Eyección!",
        "description": "Saltas de tu meca cuando lo destruyen.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/caeb745949c69cdc2c088c2f77827ca1485ef13e19b06fa4353c4f18fb219ac2.png"
      },
      {
        "name": "SUBROL: BALUARTE",
        "description": " Mayor resistencia frente a ralentizaciones y empujes frontales."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Bestia interior",
          "description": "Los impactos de Sable de plasma sanan 40 de salud a Barrera de energía.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a49a4aa586ec9a0f10b16d299e541fdfeb6da4ee2c1bf75a4f2bab1f4170ee45.png"
        },
        {
          "name": "Movilidad de MEKA",
          "description": "Al mantener pulsado Barrera de energía, el combustible consumido por Propulsores se reduce un 30%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8d2f97ae5a2dc9b137d45bcf277030fc32754a67155c55d3d7f0525d6ea9ac6e.png"
        }
      ],
      "major": [
        {
          "name": "Golpetazo",
          "description": "Golpe arrollador obtiene un 150% de robo de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b87f463706a6816a371f8c8b0cb62cd77f33860e85baa19998dd2aad97f89662.png"
        },
        {
          "name": "Fusión concentrada",
          "description": "El cañón automático de fusión dispara con más potencia, sin dispersión y con una cadencia menor.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/46d8466d7de4b04dea213c55cae621e407206055eb3b9247796b3f8cd7ba2b4e.png"
        }
      ]
    },
    "accentColor": "#9b5de5"
  },
  "doctrine": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/doctrine.webp",
    "hitpoints": {
      "shields": 0,
      "health": 250,
      "armor": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Cetro eterno",
        "description": "Arma de alcance medio que sana a los aliados e inflige daño a los enemigos.  Imbuir: Lanza un disparo perforador mayor.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3ffab68d983c0108cb80c8c55e9980ae855342f5d31c94e3a3f9e7bcf8ac7b6d.png"
      }
    ],
    "ultimate": [
      {
        "name": "Liberación",
        "description": "Lanzas un enjambre de drones que reduce la salud máxima del enemigo y otorga exceso de salud a los aliados.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8ebbedfc4f56c80106e83280513eaf433471ac96900f782ffef8fcf764faeebb.png"
      }
    ],
    "abilities": [
      {
        "name": "Imbuir",
        "description": "Añade un poderoso efecto a tu siguiente habilidad.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/13178efb1b3fceb275829ff4caa894fd883011d49d2ab33b9130ccf5d777597c.png"
      },
      {
        "name": "Drones vigorizantes",
        "description": "Despliegas drones hacia un aliado, que le otorgan velocidad de ataque y sanación.  Imbuir: Los drones también te afectan a ti.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a0db060f87598d0c57247dd03d2da4d13ea194e7c5c72d93cde7ed0c5393002c.png"
      },
      {
        "name": "Impulso velado",
        "description": "Te desplazas horizontalmente y sufres menos daño.  Imbuir: Puedes volar libremente.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c3d96fb3fe2df91421d82e134385f0fe23b8950af35ac73e50d91eb0371cd18d.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: SUPERVIVIENTE",
        "description": "Usar una habilidad de movimiento activa inmediatamente tu regeneración pasiva de salud."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Salvación",
          "description": "Drones vigorizantes sanan 40 de salud al aplicarlos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/65d3986853fa5e6fb01fae33f5b50e75956080770eb077149a3fc6438f78f10c.png"
        },
        {
          "name": "Succión sanguinaria",
          "description": "Te sanas un 50% del daño infligido con Cetro eterno con Imbuir.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/32ffd184fd6bf247ca7539d2d3175659acb8bec2be892a2008c2e281c5f5468f.png"
        }
      ],
      "major": [
        {
          "name": "Transfusión",
          "description": "El daño y la sanación realizados reducen el tiempo de reutilización de Imbuir.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d4231c031993e68b5cd6359ca35be5f1bac7571f0619ada25cd30f48e9091e5a.png"
        },
        {
          "name": "El precio de la vida",
          "description": "Sacrificas 25 de salud máxima. La sanación de Cetro eterno aumenta un 20%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1f60c2577f3709fe41fbf494432e7539b4a942374b301b06a97ed7c0bb11017f.png"
        }
      ]
    },
    "accentColor": "#e05596"
  },
  "domina": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/domina.webp",
    "hitpoints": {
      "health": 250,
      "armor": 0,
      "shields": 400,
      "total": 650
    },
    "weapons": [
      {
        "name": "Cañón de fotones",
        "description": "Haz de alcance medio que culmina con un disparo de alto impacto.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6a661b5275bfbc67f584a80c080b17b7cb4d91d665294b9bbb364e9bcf31812b.png"
      }
    ],
    "ultimate": [
      {
        "name": "Panóptico",
        "description": "Dispara una barrera de luz sólida que aprisiona a los jugadores y detona al acabar.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5685ed099de9b6438a493e6060d692bd10ce08424cff88a767dc5b13a7edcb5e.png"
      }
    ],
    "abilities": [
      {
        "name": "Matriz de barrera",
        "description": "Construye una barrera segmentada.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/909e0bb235934d7961a51fe41f90fadafaee33784b8199f62c92f3dd946da76f.png"
      },
      {
        "name": "Repulsores sónicos",
        "description": "Empuja hacia atrás a los enemigos, aturdiéndolos si golpean una pared.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f54ab0fa0be464fe670b61ee5665e5b3b562909f2e9afa7ad1b95e568e91b1f.png"
      },
      {
        "name": "Carga de cristal",
        "description": "Proyecta un cristal explosivo y lo reactiva para detonarlo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e2a15136441c63461f9c187e39d902fd64710aebc7e87d8430839cc083ca9b45.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: BALUARTE",
        "description": " Mayor resistencia frente a ralentizaciones y empujes frontales."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Diseño eficiente",
          "description": "Tras usar Matriz de barrera, restaura 50 de escudo y activa la regeneración pasiva de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e875e96eb7ae576aadb73eda105c4c75c7d6ee8e838db32d7f157e381eaff665.png"
        },
        {
          "name": "Poder ampliado",
          "description": "El alcance del disparo principal de Cañón de fotones aumenta un 20%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8525083a67878879365273e04f3a6b2f8585b804f457a4b34b005d52204a70cc.png"
        }
      ],
      "major": [
        {
          "name": "Detonación disruptiva",
          "description": "Los enemigos golpeados por la explosión de Carga de cristal se ralentizan un 30% durante 2 segundos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7dc9179235d865d3d3725fec2c7dce9a042a727dd2715028e30484ca97610336.png"
        },
        {
          "name": "Retiro corporativo",
          "description": "Mientras Matriz de barrera está activa, se puede mover una vez a otra ubicación.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6006092e920e1e719a22090967108f164083e4217a748fabfc00eb905724b421.png"
        }
      ]
    },
    "accentColor": "#e0a83c"
  },
  "doomfist": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/doomfist.webp",
    "hitpoints": {
      "health": 525,
      "armor": 0,
      "shields": 0,
      "total": 525
    },
    "weapons": [
      {
        "name": "Cañón de mano",
        "description": "Arma de disparo esparcido de corto alcance. Se recarga automáticamente.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3b3a99fadfbd19067a787782d7152ae500ada480f40ae773b9c6d5f8909dd80f.png"
      }
    ],
    "ultimate": [
      {
        "name": "Meteoro",
        "description": "Pulsa Q para saltar, mueve el círculo de aterrizaje y pulsa HABILIDAD 3 para atacar la zona seleccionada.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dd68ed0cdc85d2bd688a487dc0778cd64e7dc1d11f8e4d5e7bbf421fb1144315.png"
      }
    ],
    "abilities": [
      {
        "name": "Puño cohete",
        "description": "Mantén pulsado y luego suelta para lanzarte hacia adelante y repeler a un enemigo. El daño aumenta si el enemigo choca contra un obstáculo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/79fa2ac1beeaaecc23735e2bc41068a99838c76ff626a12ac07fcdc5efd70bd9.png"
      },
      {
        "name": "Golpe sísmico",
        "description": "Saltas y golpeas el suelo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4bc170a43b0d19921079fefcf16e66d720019271e37303413971b12e0ced9eca.png"
      },
      {
        "name": "Bloqueo de poder",
        "description": "Te proteges de los ataques frontales. Bloquear mucho daño potencia Puño cohete.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2af34b2442543da4b3a588ae8791c2b9f8a24cf5e17c935f146a7c88b0d02bd4.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: INICIADOR",
        "description": "Permanecer en el aire otorga una ligera regeneración al aterrizar tras iniciar combate."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Doblete",
          "description": "Golpear a un enemigo contra la pared con Puño cohete recarga la munición del cañón de mano y aumenta la munición en 2.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cba3de1c0d4fa0f5283b1a5490952d52ba3e6de9b1e01fde4241bf3bfe453b07.png"
        },
        {
          "name": "Supervivencia del más apto",
          "description": "La mejor defensa... otorga 25 de exceso de salud por eliminaciones y el exceso de salud máximo aumenta en 50.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0eaf218a00f6a8070c4ead8272cb00113022d89d145a94bf3cebb812b062798f.png"
        }
      ],
      "major": [
        {
          "name": "Réplica",
          "description": "Golpear a un enemigo con Golpe sísmico lo ralentiza un 40% durante 2 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8fd3cab5cd978820e2d79bf8180d3b76bfdf22cdf622cf8671bba3924385f025.png"
        },
        {
          "name": "Matriz de poder",
          "description": "Bloqueo de poder absorbe proyectiles durante los primeros 0,8 segundos de duración.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0b831053f68b3255806c0da470c2c8b9a8fff17f5bd04839bba0fa407618ea43.png"
        }
      ]
    },
    "accentColor": "#a0583f"
  },
  "dva": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/dva.webp",
    "hitpoints": {
      "health": 350,
      "armor": 325,
      "shields": 0,
      "total": 675
    },
    "weapons": [
      {
        "name": "Cañones de fusión",
        "description": "Armas automáticas de corto alcance y disparo esparcido.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1b8dd81bd8353ce0a66009578dc4d7b6a51464e5bc7898010053ff46159f4fa1.png"
      },
      {
        "name": "Pistola de luz",
        "description": "Arma automática.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/969a72050f376bf6ee5ed5550a8033cdd661f2f9883c1229e9ee70dd3ae58ec4.png"
      }
    ],
    "ultimate": [
      {
        "name": "Autodestrucción",
        "description": "Sales eyectada y sobrecargas tu meca, que explota tras unos instantes.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3ae91694dd2901ced5b3c6789b686fbda4175f807abe602101df6a26bfdf3491.png"
      },
      {
        "name": "Meca",
        "description": "Solicitas un nuevo meca.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7117851e322ccefb98a710f926daffe1aabee9d47662c26d35c938c633897e71.png"
      }
    ],
    "abilities": [
      {
        "name": "Impulsores",
        "description": "Vuelas en la dirección en la que miras.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7076c739fe2c1d11f4f118d9e22a3d8f66303242434b71a7e4451e62f5d27b65.png"
      },
      {
        "name": "Matriz de defensa",
        "description": "Bloqueas los proyectiles en un área frente a ti.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e3806878b38cbab585c4d48e05f2dd63817a36a4f69cedbaf62fd3af6ca5bbd2.png"
      },
      {
        "name": "Micromisiles",
        "description": "Lanzas una salva de cohetes explosivos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/adcd1c898f2ab66779554711451303ee83ca15b70a0951e18964520f5f02566a.png"
      }
    ],
    "passives": [
      {
        "name": "¡Eyección!",
        "description": "Saltas de tu meca cuando lo destruyen.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3aa95031ecc236c99d902971910edece23982e95743630e949b1259ba48f5c63.png"
      },
      {
        "name": "SUBROL: INICIADOR",
        "description": "Permanecer en el aire otorga una ligera regeneración al aterrizar tras iniciar combate."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Superconejito",
          "description": "Eyección otorga 75 de exceso de salud temporal y el radio de daño de Meca aumenta un 50%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/54ead00f47feb653f1f96d36df958d12a4d8134f800e6047985011ee5e636f2c.png"
        },
        {
          "name": "Impulsores mejorados",
          "description": "Golpear a un enemigo con Impulsores inflige un 40% más de daño y aumenta su duración en 0,5 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b608a2bec9030da11e1ba0aaaa09276ab5bbd50f5c4b29b937c6fea7292145b0.png"
        }
      ],
      "major": [
        {
          "name": "Sistema de escudo",
          "description": "Convierte 100 de salud en escudo. Matriz de defensa recupera escudo por valor de un 25% del daño absorbido.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8c050a50706ca610e8a4500865366d993e644125f1b2a987e6c763d9cc5d7763.png"
        },
        {
          "name": "Fusión de precisión",
          "description": "Pulsa R para reducir la dispersión de Cañones de fusión un 75% durante 3 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8399d146264d0b180cf50a2e96661d7ae408a4a7eb60cad67c80812a18c35f1a.png"
        }
      ]
    },
    "accentColor": "#f07cc0"
  },
  "echo": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/echo.webp",
    "hitpoints": {
      "shields": 75,
      "health": 150,
      "armor": 0,
      "total": 225
    },
    "weapons": [
      {
        "name": "Disparo triple",
        "description": "Lanza 3 disparos a la vez en un patrón triangular.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/eda680580d3957d2c06b3006fbe0f0b2f7637a3931c05a266a357984587e4f9f.png"
      }
    ],
    "ultimate": [
      {
        "name": "Duplicado",
        "description": "Te conviertes en una copia del héroe seleccionado, que no puede cambiar de héroe mientras dure el efecto.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d374c55bb34248543dc4b63b73738fd17a488afa29eaa63f800008edda7f3907.png"
      }
    ],
    "abilities": [
      {
        "name": "Bombas lapa",
        "description": "Lanza una salva de bombas lapa que explotan tras unos instantes.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5dd1a8e7c4097e3822db4a36d6bb5277203da4ba6bfd1ebe5ecab0311d199dbc.png"
      },
      {
        "name": "Vuelo",
        "description": "Vuela rápidamente hacia delante y luego planea con libertad durante unos instantes.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/edbca7879024d5b35a24e942ee5ebdec9780a425ef5e8d64f8113f7d5f2048b3.png"
      },
      {
        "name": "Haz enfocado",
        "description": "Canaliza un haz durante unos segundos. Inflige una gran cantidad de daño a los objetivos con menos de la mitad de salud.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/864e210890c8ac666d29fdda118a2a8c0ae16fc5471812ef4da4ab322d11bb8e.png"
      }
    ],
    "passives": [
      {
        "name": "Planeo",
        "description": "Mantén pulsado el botón de salto mientras caes para planear.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4668bf556984868ba73b931a45fa61bae503f7c67371f1a4f8085c8f992cd6bd.png"
      },
      {
        "name": "SUBROL: RECONOCIMIENTO",
        "description": "Dañar a un enemigo con menos de la mitad de salud lo revela a través de paredes brevemente."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Municiones aéreas",
          "description": "Echo tiene munición infinita durante el vuelo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/63cadc2da0d3063b10f9add1480a6ebff8c87963de15a9fdfdb22e9356429c07.png"
        },
        {
          "name": "Escáner parcial",
          "description": "Duplicado comienza con un 30% de su carga de la definitiva.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/150c696d8ec1329c43c139c68729ea408ae03216d41b5e759d5b7648d8584605.png"
        }
      ],
      "major": [
        {
          "name": "Andanada total",
          "description": "Bombas lapa dispara 2 proyectiles adicionales.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/47a96fff39ffc551e830cd5cb3f3baf424563e9fd263a2779e01eb1bd5a7d8a4.png"
        },
        {
          "name": "Carga concentrada",
          "description": "El alcance de Haz enfocado aumenta 8 metros y la velocidad de movimiento se incrementa un 25% cuando está activo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/13a06093b579b9a0588d37534cf8fd8f31e3c129f67b3585b58dca171fcdca68.png"
        }
      ]
    },
    "accentColor": "#7fc4ff"
  },
  "emre": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/emre.webp",
    "hitpoints": {
      "health": 250,
      "armor": 0,
      "shields": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Rifle de ráfaga sintética",
        "description": "Un arma que dispara ráfagas de tres.  Mantenlo pulsado para hacer zoom, lo que aumenta la precisión y el alcance de la caída.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6db52d088dd5272c7b6aca53746b68a0f6ea7ad23a2ee8143c11d495d602f64b.png"
      }
    ],
    "ultimate": [
      {
        "name": "Protocolo de anulación",
        "description": "Se inicia una anulación, transformándote en un arma viva.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/fc8088a2968e2850ef438645fd2286ea7abe1779b2eae5cf85638168736ecddc.png"
      }
    ],
    "abilities": [
      {
        "name": "Granada cibernética",
        "description": "Lanza una granada que detona tras rebotar brevemente.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/58eeb3950828ceadc16565163bfc03231a0cecdf3a0a6ce78de34bdff4bf09bf.png"
      }
    ],
    "passives": [
      {
        "name": "Vitales alterados",
        "description": "La regeneración pasiva de salud se activa antes y restaura inmediatamente 30 puntos de salud cuando se activa.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/fec616f100308698fe85eb6c7a36daa8af6d26181de8fa2f0e59ee2414bcb6df.png"
      },
      {
        "name": "SUBROL: ESPECIALISTA",
        "description": "Eliminar a un enemigo aumenta brevemente tu velocidad de recarga."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Seguridad supresiva",
          "description": "Los proyectiles ligeros de Protocolo de anulación ralentizan a los enemigos un 30% durante 1,5 segundos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/241ca51517666e1a6d64dda896c55d67151beab7e7ba1a54936beddb00186261.png"
        },
        {
          "name": "Agilidad mejorada",
          "description": "Se ha aumentado la velocidad de movimiento de Pistola sifonadora un 20% cuando no está disparando.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0a82995c66a16506c6637fa41deefa87b913bb398126e68091ff308f544d9219.png"
        }
      ],
      "major": [
        {
          "name": "Disipador térmico",
          "description": "Los golpes directos con la Pistola sifonadora disipan un 60% de calor y aumentan su duración en 0,1 segundos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/be7d093a726667fb18c02a46983edf58dda1e07c1e6b411e202461414d28ccba.png"
        },
        {
          "name": "Adhesión cibernética",
          "description": "Granada cibernética ahora se pega al tocarla, infligiendo 40 puntos de daño extra a los enemigos pegados.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c1e486e48f92254734e19a47d63672f81c187bfbcb524f9634fe295ea89d36ee.png"
        }
      ]
    },
    "accentColor": "#d1823c"
  },
  "freja": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/freja.webp",
    "hitpoints": {
      "health": 225,
      "armor": 0,
      "shields": 0,
      "total": 225
    },
    "weapons": [
      {
        "name": "Ballesta de repetición",
        "description": "Dispara rápidamente virotes automáticos de forma continua."
      },
      {
        "name": "Apuntado",
        "description": "Apunta despacio y con cuidado para disparar un virote explosivo a alta velocidad. Usar Desplazamiento veloz recarga Apuntado.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a86fa2849d7ab515d256e390e75387e4ae306f5d64c5cf24a1ba33038da91e45.png"
      }
    ],
    "ultimate": [
      {
        "name": "Disparo de boleadora",
        "description": "Dispara una boleadora explosiva. Golpear a un enemigo con ella lo atrapa y atrae hacia él a otros enemigos cercanos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f3b485b68fdf2b703537b38d2c9a30a6377772ca42e5ae6442c3cad5c3cc98be.png"
      }
    ],
    "abilities": [
      {
        "name": "Desplazamiento veloz",
        "description": "Te lanza en la dirección hacia la que te estés moviendo y recarga Apuntado.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/571c4a87204cad7117e3f127e94f5a54c93f6e81674f46d25b73eddd76eaa2c2.png"
      },
      {
        "name": "Corriente ascendente",
        "description": "Te lanzas hacia arriba con una ráfaga de viento.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cf6b96a730b9a772c6ff9320dfb0723dbb304c52b2ef666651739d8716d5f96e.png"
      }
    ],
    "passives": [
      {
        "name": "Cazarrecompensas",
        "description": "Cada 3 golpes de gracia obtienes carga adicional de habilidad definitiva."
      },
      {
        "name": "SUBROL: RECONOCIMIENTO",
        "description": "Dañar a un enemigo con menos de la mitad de salud lo revela a través de paredes brevemente."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Andanada implacable",
          "description": "Los golpes directos con Apuntado recuperan 5 de munición del virote automático.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b4716c0312754221a259f0d7dd2bf04eb3671b8f2bb70692854217403137d0d4.png"
        },
        {
          "name": "Potenciador de impulso",
          "description": "La distancia de Desplazamiento veloz está aumentada un 20%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2444e973875857e2425dfcc64f3aa5de3aba82fe12887134e6cfb38172a074f6.png"
        }
      ],
      "major": [
        {
          "name": "Recuperación aérea",
          "description": "Tras usar Corriente ascendente, sana por 30 de salud cada segundo hasta que Freja toca el suelo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e374851a1c97f54461526905d9e97b3466ea7ef0c7c592994eb098e404a7ef2a.png"
        },
        {
          "name": "Vientos crecientes",
          "description": "Corriente ascendente obtiene una carga adicional.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4ac4daca1df0efba3715a3406834bf8efb379dc636682e7d771377dc5139c3f9.png"
        }
      ]
    },
    "accentColor": "#e0a25a"
  },
  "genji": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/genji.webp",
    "hitpoints": {
      "health": 250,
      "armor": 0,
      "shields": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Shuriken",
        "description": "Lanzas una ráfaga precisa de 3 proyectiles.  Lanzas 3 proyectiles en un arco.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/75fe50db5b246e9786632963f6e1126029bd270bfaaa8b9f564e303a9b938906.png"
      }
    ],
    "ultimate": [
      {
        "name": "Hoja del dragón",
        "description": "Desenfundas un arma cuerpo a cuerpo mortífera.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/12e6d44381805e22db2b69679028bdf5ee626586663d44e8deb20e96ae7657c2.png"
      }
    ],
    "abilities": [
      {
        "name": "Desvío",
        "description": "Desvías los proyectiles recibidos hacia la dirección en la que miras y bloqueas ataques cuerpo a cuerpo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6947d8eeddce8d295ed96525cdabfe36c94b3b67b50baf87aabb8ae61d32495a.png"
      },
      {
        "name": "Corte veloz",
        "description": "Cargas rápidamente hacia delante y dañas a los enemigos. Las eliminaciones reinician el tiempo de reutilización.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/76519481d06f1a23600eb1f3d3c163268ff6e55ecde410751b508de434a7426b.png"
      }
    ],
    "passives": [
      {
        "name": "Ciberagilidad",
        "description": "Escalas paredes y tienes doble salto.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d006aeb97a48941414492f160bf22b9a5c129ddb6e1956275752953eb1b0472e.png"
      },
      {
        "name": "SUBROL: FLANQUEADOR",
        "description": "Los packs de salud restauran mucha más vida adicional."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Cortes fugaces",
          "description": "Cuerpo a cuerpo rápido reduce el tiempo de reutilización de Corte veloz 3 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/72c205ea67dbe8dad29066f1b63b9377fe269eb134a2d58c203c16ed9e641f0c.png"
        },
        {
          "name": "Sed de dragón",
          "description": "Los tajos de Hoja del dragón obtienen un 30% de robo de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8eaca93d060776d4d3204338656e0aaad85afeeae516d21e47ccfc91aae4efde.png"
        }
      ],
      "major": [
        {
          "name": "Giro de hoja",
          "description": "Corte veloz inflige 25 de daño adicional en el tiempo si el enemigo tiene menos de la mitad de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/abcef6f42d1803faa1442b14f351ba1165f93c993e8530145d165e43419dda1d.png"
        },
        {
          "name": "Meditación",
          "description": "Regeneras 50 de salud por segundo mientras Desvío esté activo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f6046ca3bc6b1dde0cece4f255b2e30eba0ef50aecff6ecfbe3858b0ee7cc4c2.png"
        }
      ]
    },
    "accentColor": "#8ee048"
  },
  "hanzo": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/hanzo.webp",
    "hitpoints": {
      "health": 250,
      "armor": 0,
      "shields": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Arco de tormenta",
        "description": "Mantenlo pulsado para cargar las flechas, y luego suéltalo para dispararlas más lejos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e38382e38d83492de12d3428bc30ef2f8833f8cef89298daa5a5a6d0b4420269.png"
      }
    ],
    "ultimate": [
      {
        "name": "Ataque del dragón",
        "description": "Lanzas un espíritu dragón letal que arrasa con los enemigos a los que atraviesa.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ec52a328bd2febd049dddd9f61a0004b0688688d3254929002ef22338e205366.png"
      }
    ],
    "abilities": [
      {
        "name": "Tormenta de flechas",
        "description": "Las siguientes 5 flechas rebotan, se lanzan de forma instantánea e infligen daño reducido.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5b2a2a02cf8087005216db110ab5aba37112eeca29c32f4491abb29caeb1910b.png"
      },
      {
        "name": "Flecha sónica",
        "description": "Tras impactar, revela a los enemigos durante un breve período de tiempo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3a378bcfc321bb2b2416db2ae3a52d22b2ca771d6f69522c1950132c5fefa59d.png"
      },
      {
        "name": "Agilidad de dragón",
        "description": "Tienes doble salto.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8b0423ecd27436f808b99254ad57bc453a839c5590c6a5b925855f13dd4ecc18.png"
      }
    ],
    "passives": [
      {
        "name": "Escalada",
        "description": "Saltas hacia una pared para trepar por ella.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d23ec9b85d43aa414b489bf5ccfcc683b9f6b66f866d723ed4c0cb7556a8cbbd.png"
      },
      {
        "name": "SUBROL: TIRADOR",
        "description": "Los impactos críticos reducen ligeramente los tiempos de reutilización de tus habilidades de movimiento."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Disrupción sónica",
          "description": "Flecha sónica hackea los packs de salud cercanos durante 30 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/87e55e35423446812982cb7bb692f2ae1f3f344b9eff67240468c3eb884bad87.png"
        },
        {
          "name": "Furia del dragón",
          "description": "Tras golpear a un enemigo con el disparo principal, tu velocidad de ataque aumenta un 20% durante 1,5 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/19a87e5ad2913df72cfb62ab905bd15328ef6b02a6aa4beb15fe37337f3d69ad.png"
        }
      ],
      "major": [
        {
          "name": "Flecha de escarcha",
          "description": "Pulsa R para preparar una flecha de escarcha explosiva, ralentizando a los enemigos golpeados un 35% durante 2 segundos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/73b91f4b7b4e7b5250ff1e7c1e027bb3a543fce82d607e3363d1cca2771fc83d.png"
        },
        {
          "name": "Flechas de dispersión",
          "description": "En su primer rebote, Tormenta de flechas se divide en 5 proyectiles que infligen un 33% de daño y rebota una vez más.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/32b18f33f63e27446cb66662a1e26ec9fff6456bbfe75e17634174ca44885c14.png"
        }
      ]
    },
    "accentColor": "#c9b67a"
  },
  "hazard": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/hazard.webp",
    "hitpoints": {
      "health": 425,
      "armor": 225,
      "shields": 0,
      "total": 650
    },
    "weapons": [
      {
        "name": "Lanzaespinas",
        "description": "Disparas una ráfaga de púas.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a840d02b1e6b87c8f1884b386be7a216842fac65ad24fa6c8aa88c45c4a4421a.png"
      }
    ],
    "ultimate": [
      {
        "name": "Aguacero",
        "description": "Haces que llueva un torrente de púas que inmoviliza a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/85894376fb7803b87f71e900d73606e2daa14c0ca11122c100871b3d20bd2024.png"
      }
    ],
    "abilities": [
      {
        "name": "Protección de púas",
        "description": "Te proteges del daño frontal, lanzas púas dirigidas a los enemigos cercanos y recargas munición.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d1d1bb23a702a4e9f831b3acf5dd85f2da68459059f84f080b6c519f0f1db1d9.png"
      },
      {
        "name": "Salto violento",
        "description": "Te lanzas hacia delante. Actívala de nuevo para dar un tajo a los enemigos y repelerlos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b82ab1a5ed08f039461be720c32b8c54e66cdb78d40b798feb69dbbea807303f.png"
      },
      {
        "name": "Muro afilado",
        "description": "Lanzas un muro de púas que hace daño y repele a los enemigos cercanos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8c82b489f5d8756f98a6671e445d394e93ee5658135c9a54122d079d5d59995b.png"
      }
    ],
    "passives": [
      {
        "name": "Brinco",
        "description": "Escalas muros bajos y te agarras a los salientes.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d006aeb97a48941414492f160bf22b9a5c129ddb6e1956275752953eb1b0472e.png"
      },
      {
        "name": "SUBROL: INICIADOR",
        "description": "Permanecer en el aire otorga una ligera regeneración al aterrizar tras iniciar combate."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Reconstitución",
          "description": "Los golpes de Muro afilado sobrecargan Protección de púas con un 25% de energía adicional.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/62bfe61a4ea9e9152030ab3b52d52d16eeb5db74fdb1109d1e9545e79011d62c.png"
        },
        {
          "name": "Celo anárquico",
          "description": "Las púas de Protección de púas obtienen un 40% de robo de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5769d726c1fd432aee499cc0adfc4812a82bd3a928af713302de5157e03986cd.png"
        }
      ],
      "major": [
        {
          "name": "Salto profundo",
          "description": "El alcance de Salto violento aumenta un 20%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/26384e47df6a6723ce3a777ae72b667f60f4bdf317ac87bd01df4af34dbb95b9.png"
        },
        {
          "name": "Empalamientos explosivos",
          "description": "Lanzaespinas marca a los objetivos con espinas. El cuerpo a cuerpo rápido y Salto violento las detonan e infligen 30 de daño explosivo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d6c6cff5997b09cc6c02c03b0d2bfce48afc4bbf3f95717ea337f633af985b5f.png"
        }
      ]
    },
    "accentColor": "#8b5cf6"
  },
  "illari": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/illari.webp",
    "hitpoints": {
      "shields": 0,
      "health": 250,
      "armor": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Rifle solar",
        "description": "Rifle de largo alcance con carga automática.  Rayo curativo de medio alcance que consume energía solar.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b5bbee12c4a45526f3ab0c73b0027eae88f4da57192e68e9b30bbc9da3e032a6.png"
      }
    ],
    "ultimate": [
      {
        "name": "Sol cautivo",
        "description": "Dispara una bola explosiva de energía solar. Los enemigos alcanzados quedan ralentizados y explotan después de recibir mucho daño.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/853a9ed59d241e1fd477a7c36dc826a1cf3321114b5ee3095780aa800649ff8e.png"
      }
    ],
    "abilities": [
      {
        "name": "Helioterapia",
        "description": "Despliega una torreta que sana a los aliados.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/97656e46d5815627032b7e9783381a09b1dee4c553c802afc3c57767768bd281.png"
      },
      {
        "name": "Erupción",
        "description": "Te lanza en la dirección hacia la que te estás moviendo y repele a los enemigos. Mantén pulsado para ascender más alto.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/fa2fa52626c761a91588ac62d835ddc7ec2f9a1d9034d06587e39129b8c2a94b.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: SUPERVIVIENTE",
        "description": "Usar una habilidad de movimiento activa inmediatamente tu regeneración pasiva de salud."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Construcción rápida",
          "description": "Helioterapia se construye un 300% más rápido y su tiempo de reutilización se reduce 2 segundos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4b8c74a61160d2de10a3105ce10635be1d623c52f3dfacd633ae20c1d6a1045b.png"
        },
        {
          "name": "Solsticio de verano",
          "description": "Sol cautivo le otorga a Illari un 20% de aumento en la velocidad de ataque y vuelo y alarga su vuelo 3 segundos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b31ad6c4eea05cd96084c7b87509b0c3678ac8f04678f388863f16a271e496c4.png"
        }
      ],
      "major": [
        {
          "name": "Erupción solar",
          "description": "Pulsa  mientras usas el haz sanador de Rifle solar para sanar a los aliados frente a Illari hasta un máximo de 100 p. de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3b39d69790004174fc0367ed9c7fbce8e430ffe8e885c8e32ae1d678fd8c42e5.png"
        },
        {
          "name": "Quemadura solar",
          "description": "Erupción quema a los enemigos y les inflige 50 de daño adicional durante 3 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2405e6d589b8d6c7bd5e072f7788480bbcfeda6a1ce48ad67e2d8915289e8798.png"
        }
      ]
    },
    "accentColor": "#f2c94c"
  },
  "jetpack-cat": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/jetpack-cat.webp",
    "hitpoints": {
      "shields": 0,
      "health": 225,
      "armor": 0,
      "total": 225
    },
    "weapons": [
      {
        "name": "Patiproyectiles bióticos",
        "description": "Expansión de proyectiles a distancia media que sanan aliados o dañan enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f69a07e928053431f7a1ac72a29c045d3eba5b6ae3bf29fdb21ee24e6f5d41e3.png"
      }
    ],
    "ultimate": [
      {
        "name": "Gata secuestradora",
        "description": "Lánzate hacia un punto del suelo, derribando a enemigos y atando al más cercano a ti.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/01fd22b375088be5c2b0e3a00a8e09c97de48d634d939627d3d46b13a2428c28.png"
      }
    ],
    "abilities": [
      {
        "name": "Vuelo frenético",
        "description": "Acelera en dirección a tu movimiento. La recuperación de combustible se ralentiza al llevar a otro jugador.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f957b6f5803bd08a99eec642365c30f22e817ad33afb4b95d8e1856c87cba1b2.png"
      },
      {
        "name": "Línea de vida",
        "description": "Activa el modo transporte, lo que permite remolcar a un aliado. Aumenta la velocidad de movimiento y sana a tu aliado.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d0c899ac61aa5b72e7de931b014b02176605fba7c9f022cc7a968b6cc6ebf19b.png"
      },
      {
        "name": "Ronroneo",
        "description": "Sanación de zona pulsante que aumenta en frecuencia con el tiempo. Repele a los enemigos cercanos cuando se activa.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4632fb81d5af7bcac3502108fa283f614b98cbeb18e3149808dcc2e50042f927.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: TÁCTICO",
        "description": "Puedes acumular carga de definitiva excedente que se conserva tras usar tu habilidad definitiva."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Segundas intenciones",
          "description": "Un 15% de sanación de Patiproyectiles bióticos se recupera en combustible.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1d18749d884a8c09dfa5789c5f31eb99f6c78e4b93b3268960f60730abcaf924.png"
        },
        {
          "name": "Transporte protegido",
          "description": "Obtén hasta 50 de salud de escudo extra mientras transportas a otro héroe.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/acd4b58fc4607cf4471de067547d9dd1fd1760fbf55d67217f0574567aa0e98b.png"
        }
      ],
      "major": [
        {
          "name": "Ronroneo perfecto",
          "description": "Cada pulso de Ronroneo contiene 3 olas.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7b90c625a71b1ab6709796db494907b934637e3f793895d4729f0387fadbc35f.png"
        },
        {
          "name": "Garras fuera",
          "description": "Cuerpo a cuerpo rápido se potencia cada 6 segundos, hiriendo a los enemigos con 40 de daño y ralentizándolos un 30% durante 1 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/989caae5faf782438c32b4ed7451ac93ebff03d884c065c768c1cee265b8aae9.png"
        }
      ]
    },
    "accentColor": "#f0a040"
  },
  "junker-queen": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/junker-queen.webp",
    "hitpoints": {
      "health": 525,
      "armor": 0,
      "shields": 0,
      "total": 525
    },
    "weapons": [
      {
        "name": "Escopeta",
        "description": "Escopeta de corredera.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2d5df1a8232c23ea96183a39a9ce930b26c53e87dc12ff77bd972e4805690c6f.png"
      }
    ],
    "ultimate": [
      {
        "name": "Masacre",
        "description": "Cargas hacia delante para herir a los enemigos, infligirles daño en el tiempo y evitar que reciban sanaciones.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/17ff06bcf2e7fe6c2f66590573e6b274b416f0a8855f925c4479ac20b4d8d977.png"
      }
    ],
    "abilities": [
      {
        "name": "Grito de mando",
        "description": "Concedes salud y velocidad de movimiento temporalmente a tus aliados y a ti.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ef3c2fb9bdb4c913d2b048ef4363fce335553c8f4ee74524f2af86af961ba648.png"
      },
      {
        "name": "Matanza",
        "description": "Hieres a los enemigos delante de ti, les infliges daño en el tiempo y reduces el tiempo de reutilización por cada enemigo golpeado.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/85c3796fdb062e1038fb130450f1586ce1f3c047886b0baf13f937d93a4e05d4.png"
      }
    ],
    "passives": [
      {
        "name": "Subidón de adrenalina",
        "description": "Te sanas mediante el daño en el tiempo que infligen las heridas.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5a05a31b7196b53d751219c5d4d0814cc58e37db5eeb37a1648b37327309f794.png"
      },
      {
        "name": "SUBROL: BALUARTE",
        "description": " Mayor resistencia frente a ralentizaciones y empujes frontales."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Carga desenfrenada",
          "description": "Obtén Imparable y reduce todos los tiempos de reutilización 6 s al usar Masacre.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/69acb5b21896563bbddc2d166f1d53b31ab96257adec55ca0fb20a9d38f1e726.png"
        },
        {
          "name": "Grito de batalla",
          "description": "Grito de mando recarga por completo la escopeta y aumenta la velocidad de recarga de los aliados un 50%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c0c7a9fabfe1e722d591074d61212cd951ca241daf4f857e16277520f66a7bf2.png"
        }
      ],
      "major": [
        {
          "name": "Willy-Willy",
          "description": "Al recuperar Cuchilla dentada, su radio aumenta un 100% e inflige 30 de daño de impacto adicional.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/79f03361567257341b863613a591508eca0077c5b934a590f6ed34822616f005.png"
        },
        {
          "name": "Saciedad salvaje",
          "description": "El daño por impacto de Matanza obtiene un 100% de robo de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6f359a8501d72e8e4b4fcceff1dc353b68a4303bfb5e0f853d894b2478d0bce4.png"
        }
      ]
    },
    "accentColor": "#4f9fd6"
  },
  "junkrat": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/junkrat.webp",
    "hitpoints": {
      "shields": 0,
      "health": 250,
      "armor": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Lanzagranadas",
        "description": "Arma de proyectiles explosivos que rebotan.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b8ba613f23c771523b25caf8db1d43f518c9267b13fea2a684a2610ae46585f1.png"
      }
    ],
    "ultimate": [
      {
        "name": "Rueda explosiva",
        "description": "Diriges y detonas una rueda explosiva.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/946029ed03ebc3dae775fd0b0ca80faa2f8627cb568c51170190a432ba9e3e50.png"
      }
    ],
    "abilities": [
      {
        "name": "Mina de conmoción",
        "description": "Lanzas una mina que repele con MAYÚS IZQ y la detonas con HABILIDAD 1.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/11dd2b5573ebc5ec231911d443733507e5d92822ff5b6d5dd93cd69c9827c92a.png"
      },
      {
        "name": "Cepo",
        "description": "Colocas una trampa inmovilizadora.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3b231767363675405aeda173403c44740cca76b8d3653730c075f561e513f935.png"
      }
    ],
    "passives": [
      {
        "name": "Caos total",
        "description": "No sufres daño de tus propios explosivos. Sueltas bombas al morir.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4720883e2f44ebac617748f717908183a4cb7e6e90d29226602a54708c4f57d1.png"
      },
      {
        "name": "SUBROL: ESPECIALISTA",
        "description": "Eliminar a un enemigo aumenta brevemente tu velocidad de recarga."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Nitro",
          "description": "Usa MAYÚS IZQ mientras Rueda explosiva está activa para obtener un impulso rápido de velocidad. Esto reduce el daño de Rueda explosiva un 50%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/150e4b3594f8ddc25eca19a90f39ca146c9dfcd5449e7538c5c131ee15b2277b.png"
        },
        {
          "name": "¡Bueeen viaje!",
          "description": "Tras lanzarse por los aires con Mina de conmoción, Junkrat obtiene un 35% más de velocidad de ataque durante 3 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/11b40305e441dbcdfcd86232e84758683d290f13ef0d28fe9dc7e0c3aa8d3d24.png"
        }
      ],
      "major": [
        {
          "name": "Reciclaje de mina",
          "description": "Las eliminaciones con Mina de conmoción restauran una carga.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/76e4650ee601f21fa966ff326d80366271d862199f7250edaafa9033aa29e236.png"
        },
        {
          "name": "Cañón de lanzamiento",
          "description": "Se ha aumentado la velocidad de los proyectiles de Lanzagranadas un 25%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/046617c7617e09bec3445e0b3059d6157f1bdabe842650ec2ed3962634a52da0.png"
        }
      ]
    },
    "accentColor": "#e8b84a"
  },
  "juno": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/juno.webp",
    "hitpoints": {
      "health": 75,
      "armor": 0,
      "shields": 150,
      "total": 225
    },
    "weapons": [
      {
        "name": "Mediarma",
        "description": "Arma de disparo de ráfaga que sana a los aliados e inflige daño a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d75b0943dbbf45729efb48ab3d40bef9de9e4742d208f887d57ed9fd75d4ed9e.png"
      }
    ],
    "ultimate": [
      {
        "name": "Rayo orbital",
        "description": "Lanza desde el cielo un rayo que viaja hacia delante, sana a los aliados y aumenta el daño que infligen.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5723182cddc6719ee19a5b35d840d2fb3ed933c861f3f66514d66fc29630c84a.png"
      }
    ],
    "abilities": [
      {
        "name": "Torpedos de púlsar",
        "description": "Pulsa  para fijar objetivo y luego DISPARO SECUNDARIO para disparar proyectiles guiados. Sana a los aliados con el tiempo e inflige daño a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/24ad567c5400d4eb7a5d7b9f938a197654e5465dfd2e881754e8f4f699f84088.png"
      },
      {
        "name": "Hiperanillo",
        "description": "Despliega un anillo que aumenta la velocidad de movimiento de los aliados que pasan a través de él.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bfdddb5d1857a8a13713381d3fe6cc6b690f71efef9131147116adc10b00d245.png"
      },
      {
        "name": "Impulso de planeo",
        "description": "Planea en horizontal con mayor velocidad de movimiento.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/39ea7b359006e25f0b6d373c87e690209c9daefed5196b51f945f3d1a2743af0.png"
      }
    ],
    "passives": [
      {
        "name": "Cubrebotas marciano",
        "description": "En el aire, pulsa ESPACIO para realizar un doble salto y mantén ESPACIO para planear.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/edb2f175e4231589a8fc9fd2607f8c98c2566ec6f517e699194164274bfee94e.png"
      },
      {
        "name": "SUBROL: SUPERVIVIENTE",
        "description": "Usar una habilidad de movimiento activa inmediatamente tu regeneración pasiva de salud."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Constantes vitales familiares",
          "description": "Torpedos de púlsar fijan a los aliados un 35% más rápido.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c797b7a1b9be4f7df0cf86824570d408ed7a0e4112ad51545b3eaf78c4dbf44a.png"
        },
        {
          "name": "Objetivo fijado",
          "description": "El tiempo de reutilización de Torpedos de púlsar se reduce en 1 s por cada enemigo golpeado.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/477a3abe9f68e2a2324e3f2a8faeb14bb6102b2e0c272d93463d6d27726629ae.png"
        }
      ],
      "major": [
        {
          "name": "Despegue",
          "description": "Cubrebotas marciano ahora puede tener un triple salto.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/efe7a92601ea7fc95274ee11d1628fb31238c707331b87545a7c754fcd48ca68.png"
        },
        {
          "name": "Mediarma rápida",
          "description": "Mientras Impulso de planeo está activo, Mediarma dispara continuamente.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7b122bd8091f5005bfee07aa787f98126ddbe80aacdd11e7a2d076b9d03e35b2.png"
        }
      ]
    },
    "accentColor": "#c07cf0"
  },
  "kiriko": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/kiriko.webp",
    "hitpoints": {
      "health": 225,
      "armor": 0,
      "shields": 0,
      "total": 225
    },
    "weapons": [
      {
        "name": "Ofuda de sanación",
        "description": "Canalizas una ráfaga de talismanes de sanación que van hacia los aliados seleccionados.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4ebf8c956da05591160da7416299bb3b641a268fbf334debf7892b8c7b3c326d.png"
      },
      {
        "name": "Kunái",
        "description": "Proyectil arrojadizo de largo alcance.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/81466ccd866d29b1edc9884cd0842b2e32ef0b5712198ea137ae212494feb1f4.png"
      }
    ],
    "ultimate": [
      {
        "name": "Marcha del kitsune",
        "description": "Invocas el espíritu de un zorro que avanza hacia delante y potencia el movimiento, la velocidad de ataque y los tiempos de reutilización de los aliados que sigan su camino.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4ad7d2913e24d538c906eaa95c0e87f148d63f8dfe3c443c408f443c2de8bae8.png"
      }
    ],
    "abilities": [
      {
        "name": "Paso ligero",
        "description": "Te teletransportas junto a un aliado.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/155642954764b574f3b6845af58961e941a26a12e5d05053a8f7101f6005cc97.png"
      },
      {
        "name": "Suzu de protección",
        "description": "Lanzas un amuleto protector que vuelve invulnerables a los aliados durante unos instantes y elimina la mayoría de los efectos negativos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a5c1a2e74ccb598d376aac2c1cd255aa46570a08886e72b06d5a6f64203c8072.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: MÉDICO",
        "description": "Sanar a tus aliados con tu arma también te sana a ti por un porcentaje de la curación."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Atención de urgencia",
          "description": "La velocidad de proyectil de Ofuda de sanación aumenta un 50 % al rastrear aliados que tienen menos de la mitad de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d057fa16941cc466d1d934ad3270ba3e6dc6fdd30b8ae78af0d8c684a4afbd21.png"
        },
        {
          "name": "Vidente",
          "description": "Los impactos de kunái lanzan 2 Ofudas de sanación a un aliado que tengas delante.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/50a9304063fc8ea8c23b6533940563cf666fb0a1f80e6240b30344aa014d40b6.png"
        }
      ],
      "major": [
        {
          "name": "Paso preparado",
          "description": "Paso ligero otorga a Kiriko un 40% de ataque aumentado y velocidad de recarga durante 3 segundos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e5443afa1c9fe57e7839befb9a986eb960fb08d66a0085f1bba898335a7eb740.png"
        },
        {
          "name": "Baile",
          "description": "Suzu de protección otorga un 30% más de velocidad de movimiento a los aliados durante 4 segundos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd3b70802f80c187212db9a9db342e6aa4f0cd349d1979055e52eb7539a8cc30.png"
        }
      ]
    },
    "accentColor": "#ef4f66"
  },
  "lifeweaver": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/lifeweaver.webp",
    "hitpoints": {
      "shields": 50,
      "health": 200,
      "armor": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Brote sanador",
        "description": "Mantén pulsado para cargar una sanación y suéltalo para sanar al aliado seleccionado. Se carga pasivamente a una velocidad reducida cuando no se utiliza.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd2fde345ddbf726922a007add13188566a2810aee2fe14773c5dedf2778d34f.png"
      },
      {
        "name": "Salva espinosa",
        "description": "Disparas rápidamente proyectiles a pares.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6f96b55eaf1922f2ea57166062c4cd7f7c373cbcc1795888def7a9aa24abb258.png"
      }
    ],
    "ultimate": [
      {
        "name": "Árbol de vida",
        "description": "Plantas un árbol que brota y sana a los aliados al instante. Otorga sanación continua mientras vive.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/03d294ff2fbd7cf4a66220be5734b3607bc5cfc57d3af2a0ce4ad823e1656b75.png"
      }
    ],
    "abilities": [
      {
        "name": "Plataforma petaloide",
        "description": "Lanzas una plataforma que se eleva cuando alguien se sube. Se reinicia cuando no se utiliza.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/040f6c05bfe6a0540c0139034d13ac09f3a4f6e2c611ff75113ac70596a65da7.png"
      },
      {
        "name": "Paso regenerador",
        "description": "Cargas hacia la dirección de desplazamiento y te curas un poco.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9be0b14c8d6a1ac5f73ca118487e1fbe0feaae1be7b87c12bd9eb44bd0e82f57.png"
      },
      {
        "name": "Agarre vital",
        "description": "Atraes a un aliado a tu ubicación y lo proteges durante el recorrido.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7202804f05ffb9fce9f66f7dabfd4104981671fe1d632326c4b3a04a5bbfe2ad.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: MÉDICO",
        "description": "Sanar a tus aliados con tu arma también te sana a ti por un porcentaje de la curación."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Protección petaloide",
          "description": "Los aliados recuperan 20 de salud por segundo mientras están en la Plataforma petaloide.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1efd5d2d43a1bcbd135d7fb815d8fa8211d43a0c9aaf9bb091652ebb543e4a6a.png"
        },
        {
          "name": "Escape vertiginoso",
          "description": "La distancia de Paso regenerador ha aumentado un 30%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3fd45b41f03f1d54652bf4581c7894cbef10a3b6dfe0f3a13132537cf0b4ff58.png"
        }
      ],
      "major": [
        {
          "name": "Siembra de semillas",
          "description": "Realiza un ataque cuerpo a cuerpo con Brote sanador para lanzar una semilla. Otro aliado puede recogerla para obtener exceso de salud y velocidad de movimiento.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/53c7d91e379667b66889bffbd535f14c62e1dbdfc10622f43c25ad9d3d973291.png"
        },
        {
          "name": "Floración masiva",
          "description": "Cuando se clavan suficientes espinas en 2,5 s, estallan e infligen 40 de daño adicional.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/fc70f669169965a725f86e2d4dc21d3bd2f1610b2dd2c1a5b4abb948413e1c05.png"
        }
      ]
    },
    "accentColor": "#f0a3cf"
  },
  "lucio": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/lucio.webp",
    "hitpoints": {
      "health": 225,
      "armor": 0,
      "shields": 0,
      "total": 225
    },
    "weapons": [
      {
        "name": "Amplificador sónico",
        "description": "Lanzador de proyectiles sónicos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5dc58c552d2b8ee4018f166b7a1c7eeda839c631fa09fb3bfac3e413e2a6e47d.png"
      }
    ],
    "ultimate": [
      {
        "name": "Barrera de sonido",
        "description": "Creas salud adicional temporal para los aliados cercanos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f84b670bff38d0b97c44a084159bb41c140b5cf7e52348782ab9755d47cdbb0a.png"
      }
    ],
    "abilities": [
      {
        "name": "Cambio de pista",
        "description": "Alternas entre dos canciones. Mejora de sanación sana a los aliados cercanos. Mejora de velocidad hace que los aliados cercanos se muevan más rápido.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/452af9dde57a4c3c85c9089dd28b57738fe33e225048602196989bea672450bd.png"
      },
      {
        "name": "Subidón",
        "description": "Aumentas la eficacia de tu canción actual.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9b1c9a43f51d39286dd9204b24cc590eae9f40fa4970d54676565240285a8339.png"
      },
      {
        "name": "Onda sonora",
        "description": "Provocas una explosión de corto alcance que repele a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f0ccd9830fc8f3b3a719faf0a6b4babf06677bd136287812efe7c6fa358cc389.png"
      }
    ],
    "passives": [
      {
        "name": "Trotamuros",
        "description": "Saltas a una pared para impulsarte por ella.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/20518d53a53b3f8cc26816f7d55182e43331b33b5d0eb2b491d12d6a59ea0941.png"
      },
      {
        "name": "SUBROL: TÁCTICO",
        "description": "Puedes acumular carga de definitiva excedente que se conserva tras usar tu habilidad definitiva."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Trotaondas sonoras",
          "description": "Trotamuros potencia la próxima Onda sonora, aumentando su repulsión un 25% y su daño un 50%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5ab9044637d85c3c53022189dbab7913eec2faedc95176069a754441588ac630.png"
        },
        {
          "name": "Subidón",
          "description": "Subidón está activo durante 4 s al lanzar Barrera de sonido.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4639fbbde04ac4e8ca26a56ebd4ddc3f34ccf5c20add8796fe2282a2b2b739fa.png"
        }
      ],
      "major": [
        {
          "name": "Música muy alta",
          "description": "El alcance de Cambio de pista aumenta un 150% mientras Subidón esté activo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/37679a0a1cca337b61885f503002dd8698de32df504b0e8de93a627d89afb59f.png"
        },
        {
          "name": "Acelerando",
          "description": "Consigue un 15% de velocidad de ataque mientras está activa la canción de velocidad de Lúcio, triplicado durante Subidón.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c932c84f75d245fb1308f918d80e6a0a9ba93004e40f27e55d63016bd29fb340.png"
        }
      ]
    },
    "accentColor": "#7fd04a"
  },
  "mauga": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/mauga.webp",
    "hitpoints": {
      "health": 575,
      "armor": 150,
      "shields": 0,
      "total": 725
    },
    "weapons": [
      {
        "name": "Cañones de cadena incendiario y volátil",
        "description": "Ametralladora izquierda que prende fuego a los enemigos e inflige críticos con la derecha sobre objetivos en llamas."
      }
    ],
    "ultimate": [
      {
        "name": "Mano a mano",
        "description": "Despliegas una barrera que os encierra a ti y a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/fca5c4296a62de30239f2f372ff70574b74da36d1524101485038e94a86c658d.png"
      }
    ],
    "abilities": [
      {
        "name": "Arrollar",
        "description": "Embistes y das un pisotón para lanzar a los enemigos por los aires. Eres imparable mientras embistes.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/10f358f93cd59c2f2b31278cd09bfc7a986c7af6e9a15cdf96db16375b596cee.png"
      },
      {
        "name": "Sobreestimulación cardíaca",
        "description": "Otorga reducción de daño y los aliados cercanos se sanan al infligir daño.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/33ccf2e8708d8625137b15c81528efd8b5c5100dcb29d137ab9a4750be3c9229.png"
      }
    ],
    "passives": [
      {
        "name": "Berserker",
        "description": "Obtienes salud temporal al infligir daño crítico.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/50b53f48c47c549e7926ef5ab9976a3b03327b0cf6d6df4dea501c8e544aa204.png"
      },
      {
        "name": "SUBROL: MATÓN",
        "description": "Reduce el daño crítico recibido y obtiene velocidad de movimiento al estar con salud crítica."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Bandolera cinética",
          "description": "Arrollar recarga hasta 150 de munición durante el primer segundo de carga.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6adca5324793138777cdd09152168778785188b1d32962e42df933638ab49321.png"
        },
        {
          "name": "Piromanía",
          "description": "Abrasar a los enemigos con Cañón de cadena incendiario otorga 50 de exceso de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3b22a3f8c185339e203c006abf3b40ef16074f8439855dcd27ecbf3779f46792.png"
        }
      ],
      "major": [
        {
          "name": "Fuego camina conmigo",
          "description": "Arrollar quema a los enemigos al impactar.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/83b13a8976492b76d22ef89abd6815e90fcc7f3133853d86a9e898bc07db8c5a.png"
        },
        {
          "name": "Combustible de combate",
          "description": "Los críticos otorgan a Mauga 4 de exceso de salud temporal para el siguiente uso de Sobreestimulación cardíaca, hasta un máximo de 150 de exceso de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/69aae6d3636721510e30bc9d1578944c8e9705ab403d9e421798aceebf0f1a9b.png"
        }
      ]
    },
    "accentColor": "#e0503a"
  },
  "mei": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/mei.webp",
    "hitpoints": {
      "shields": 0,
      "health": 300,
      "armor": 0,
      "total": 300
    },
    "weapons": [
      {
        "name": "Pistola endotérmica",
        "description": "Arma de rociado de corto alcance que ralentiza a los enemigos.  Lanzacarámbanos de largo alcance.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/02f402130df2ecfcedb6c5bdb7dd3eea199d1d1e833c567bb810c7edd7a717e7.png"
      }
    ],
    "ultimate": [
      {
        "name": "Ventisca",
        "description": "Lanzas un dron de control climático que congela a los enemigos en una gran área.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7d834967543c76f8bccf5ea7b4d33a8ee9b335ec1e7a96ed444c0251b9fe937d.png"
      }
    ],
    "abilities": [
      {
        "name": "Criónica",
        "description": "Te vuelves invulnerable y te sanas.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b7d01a56fe14d8b456aa716773760f51581a61e88a889e3e48e6a2f929388c48.png"
      },
      {
        "name": "Muro de hielo",
        "description": "Creas un muro de hielo frente a ti.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d5ac85b5a26546ea052de796e1da27090b559bbcda27b7e9613aaaa09813d2f7.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: ESPECIALISTA",
        "description": "Eliminar a un enemigo aumenta brevemente tu velocidad de recarga."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Pista de patinaje",
          "description": "Los aliados con Ventisca obtienen un 25% de velocidad de movimiento aumentada y sanación de 50 de salud por segundo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/10f6bf7a34140e74cf639ae596ccaaf4a84d2850f7b4058662a922ce45c58515.png"
        },
        {
          "name": "Propulsión glacial",
          "description": "El doble salto crea un pequeño pilar de hielo que impulsa a Mei hacia el aire.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/55f25d042e203d5c4fb858df4caadd51875b51d7344e0c7e49427eaf64c61229.png"
        }
      ],
      "major": [
        {
          "name": "Criogenización",
          "description": "Golpear continuamente a los enemigos con el disparo principal los congela durante un breve período.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e6241c9fb1a5cfd31085dd1a5ab417a6ad29904d75989f7718aa417b390126e6.png"
        },
        {
          "name": "Criotormenta",
          "description": "Criónica ralentiza a los enemigos cercanos e inflige 70 de daño por segundo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6d0f58c3d4df90c6562b381a584da6608beef0826e03d34a0bcf7b964afaff3a.png"
        }
      ]
    },
    "accentColor": "#6fb6f0"
  },
  "mercy": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/mercy.webp",
    "hitpoints": {
      "shields": 0,
      "health": 225,
      "armor": 0,
      "total": 225
    },
    "weapons": [
      {
        "name": "Bastón caduceo",
        "description": "Mantenlo pulsado para sanar a un aliado.  Mantenlo pulsado para aumentar el daño que inflige un aliado.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/149e46752f75bc9f6fece61f1a7b8e08bd1d3dbea8a723efd518f6b9aa4a70b0.png"
      },
      {
        "name": "Pistola caducea",
        "description": "Arma automática.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d113f98e3c2a70b43ea99d9f4ccf7f9cc3b140c029e4fa9db6733a9ab3474fb0.png"
      }
    ],
    "ultimate": [
      {
        "name": "Valkiria",
        "description": "Te permite volar y potencia tus habilidades.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8465f0b6e120a6cdbd7b4b0124adcfe6a1585e6b417275f9c6cf86d248318ffd.png"
      }
    ],
    "abilities": [
      {
        "name": "Ángel de la guarda",
        "description": "Vuelas hacia un aliado. Durante el vuelo, saltar te lanza hacia delante y agacharte te propulsa hacia arriba.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b8cee01a366f6c5fb1298426463aa27724bec1dd2b6a92a36b42b3884a73e8d5.png"
      },
      {
        "name": "Resurrección",
        "description": "Resucitas a un aliado caído.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9dcafd3a6c3cbb12be763d13ee1b06a677fdf7f740eee29f20921927d6cab337.png"
      }
    ],
    "passives": [
      {
        "name": "Descenso angélico",
        "description": "Ralentizas tu caída.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8a0f7aad37480b3adbe6e7ebafc2bd253397bec324148812e27caa3d1ee8ab92.png"
      },
      {
        "name": "SUBROL: MÉDICO",
        "description": "Sanar a tus aliados con tu arma también te sana a ti por un porcentaje de la curación."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Resurrección angelical",
          "description": "Mercy obtiene 100 de exceso de salud tras lanzar Resurrección.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/39c6fcef8a4380d73f7714d7276c6559bc25547d0c090631d603d05ed4d6620e.png"
        },
        {
          "name": "Alcance alado",
          "description": "El alcance de Ángel de la guarda aumenta un 30%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/77e68b4b2cdab6bdbb2509b8dcaf964cbbaffa14523b72d1fe512abc87f3576f.png"
        }
      ],
      "major": [
        {
          "name": "Potenciación en cadena",
          "description": "El aumento de daño de Bastón caduceo aumenta un 5% y se vincula a un segundo aliado cercano.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/48d23bc9eebad7092ef2b1895abc99ff1f4207a1ac423a88b8418b388f10f4eb.png"
        },
        {
          "name": "Doble dosis",
          "description": "Sanación instantánea obtiene una carga adicional, pero la sanación base se reduce en 10.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e0887d16a296e6419cf0e8a32ed74ceea31bd96efbd25576511516ba0339c870.png"
        }
      ]
    },
    "accentColor": "#f2d77a"
  },
  "mizuki": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/mizuki.webp",
    "hitpoints": {
      "health": 250,
      "armor": 0,
      "shields": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Guja espiritual",
        "description": "Un proyectil que rebota y daña a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/407d795518aaf89ffd41fda4c392421c7e783c3486292bcabd412274ae8bfe6d.png"
      }
    ],
    "ultimate": [
      {
        "name": "Santuario Kekkai",
        "description": "Crea un santuario que sana a los aliados en su interior y absorbe los proyectiles del enemigo que lo atraviesan.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/79d5017e5ae3c3fb8fa91b5ea13f890add3042c5b0ed9532e62fe4ee138ca033.png"
      }
    ],
    "abilities": [
      {
        "name": "Sanación Kasa",
        "description": "Lanza tu sombrero para que rebote entre los aliados y los sane.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c97cbb4a6b1e7be7ce6d0f26434efc8e6d18674b24d29bff3d17389b43dedec9.png"
      },
      {
        "name": "Cadena vinculante",
        "description": "Lanza una cadena a un enemigo que frena su movimiento.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3404150b1babd17665ceced735828eedb701ee1d276debcedcd1a5d95d8d1cf7.png"
      },
      {
        "name": "Regreso Katashiro",
        "description": "Da un salto hacia delante y obtén velocidad de movimiento aumentada. Vuelve a activarlo para teletransportarte de vuelta.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/291ad4dfccb3678979f4f5ca8c24d219b9bb61a383731057547760646dcd5c04.png"
      }
    ],
    "passives": [
      {
        "name": "Aura reparadora",
        "description": "Sana a los aliados cercanos. Es más fuerte al infligir daño y sanar a otros.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/11ba949531e0cf7d2fab159f0806c08c31a9e770836ec5efcc408df043b72995.png"
      },
      {
        "name": "SUBROL: SUPERVIVIENTE",
        "description": "Usar una habilidad de movimiento activa inmediatamente tu regeneración pasiva de salud."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Manantial",
          "description": "La generación de Aura reparadora se ha aumentado un 25%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/65dc63c40f3f40290ad291f9dda4f981e4cf9980b676946d1b145336b4aa1858.png"
        },
        {
          "name": "Alma expuesta",
          "description": "Golpear a un enemigo con Cadena vinculante aumenta el daño que le infliges un 30% durante 2 segundos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/44773ab19e89d3732249176897c44c9164c5099e5c8e29599255ba3cc3e29f62.png"
        }
      ],
      "major": [
        {
          "name": "Regreso resonante",
          "description": "Sanación Kasa rebota una vez más. Cada rebote aumenta la sanación en 10 puntos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f87c6cc1b61157dc4d40cac191544a3ebfa2c0a44b956e8526e6bf6eef6d5351.png"
        },
        {
          "name": "Paso rápido",
          "description": "Mientras está activo Regreso Katashiro, los aliados en el Aura reparadora obtienen un 20% de aumento de velocidad de movimiento.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d29b3404035091c9429058c468bef3b7cd9299a366e8fa203ef343177db586bd.png"
        }
      ]
    },
    "accentColor": "#2fbf71"
  },
  "moira": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/moira.webp",
    "hitpoints": {
      "health": 225,
      "armor": 0,
      "shields": 0,
      "total": 225
    },
    "weapons": [
      {
        "name": "Rayo biótico",
        "description": "Mantén pulsado para sanar a todos los aliados frente a ti. Consumes energía biótica.  Arma con haz de largo alcance. El daño infligido te sana y repone tu energía biótica.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e74ba239c376cb9de7a0f82418f4713e3183092d48988198825dd376da0b0a12.png"
      }
    ],
    "ultimate": [
      {
        "name": "Coalescencia",
        "description": "Disparas un haz que sana a los aliados y daña a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8791876838df722d9153ecc6d1c7a76445892d13fcec304609435b2f91fcc2c1.png"
      }
    ],
    "abilities": [
      {
        "name": "Orbe biótico",
        "description": "Disparas una bola que rebota y que sana a los aliados cercanos o daña a los enemigos cercanos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/66a472473965ecbe525afb991bab0f950248542232a13a3d34607d9b71a8ddee.png"
      },
      {
        "name": "Evanescencia",
        "description": "Desapareces, aceleras tu movimiento y te vuelves invulnerable, pero no puedes disparar.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e71cb3d2a4e880089a87b3a2ff609c5484fb8e04d6151507179646b1b4d97d64.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: MÉDICO",
        "description": "Sanar a tus aliados con tu arma también te sana a ti por un porcentaje de la curación."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "División destructora",
          "description": "Coalescencia permite alternar entre sanación pura o daño puro, con un 30% más de efecto.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5278bcb65c1456dde7bf000c52953a6f08dfff2264bff6b81e70a1879340804b.png"
        },
        {
          "name": "Nutrición ética",
          "description": "Orbe biótico sana 30 de salud instantáneamente a los aliados con los que interactúe.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f2da4eb4ebcd69bfc9a7f7b9be13e9b4aa80ba4828e9b6406c97b3e032de4690.png"
        }
      ],
      "major": [
        {
          "name": "Reversión",
          "description": "La reactivación de Orbe biótico invierte su trayectoria.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/202e75ee3c419f82f8557cd12864995d583faded5f6654b043372fd42d4206a7.png"
        },
        {
          "name": "Paso fantasmal",
          "description": "Evanescencia dura 0,5 s más y aumenta la altura del salto un 50%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6d3b8b3719ce56537a1279e91318980d66752490946799643bd5226987115ed6.png"
        }
      ]
    },
    "accentColor": "#8c3cc8"
  },
  "orisa": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/orisa.webp",
    "hitpoints": {
      "health": 300,
      "armor": 300,
      "shields": 0,
      "total": 600
    },
    "weapons": [
      {
        "name": "Ametralladora de fusión aumentada",
        "description": "Arma térmica automática.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/80e4eabdaee092406062ae026ab50f5491d0d634fd27d791e999f03f798ae5ab.png"
      }
    ],
    "ultimate": [
      {
        "name": "Terraluvión",
        "description": "Atraes a los enemigos, te quedas quieta y obtienes los efectos de Fortificación mientras cargas un aluvión de daño. Usa Q para liberarlo antes de tiempo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a0e2704fdc1d50a9670c8629b9da8cb7b2491523c3dd4616912e25b477b35427.png"
      }
    ],
    "abilities": [
      {
        "name": "Jabalina de energía",
        "description": "Lanzas la jabalina a un enemigo para aturdirlo y repelerlo. La efectividad aumenta si el enemigo choca contra una pared.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/50c5f92db1d3688b0395c88270a04f9730e468d0ca63f1c13c259b848b6e1b49.png"
      },
      {
        "name": "Fortificación",
        "description": "Obtienes salud de duración limitada, reduces todo el daño recibido y te vuelves imparable.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a2003ee5e140d12cf850a0e5f1092e47f78b8111464d55489abb194bbbfa5523.png"
      },
      {
        "name": "Girojabalina",
        "description": "Giras la jabalina para destruir proyectiles y bloquear ataques cuerpo a cuerpo, y también para empujar a los enemigos y aumentar la velocidad de movimiento hacia delante.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3d688c6c6361f15ec3f83e6e42a39accb5b498f4e1fd8de9cd8d7daf805be759.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: MATÓN",
        "description": "Reduce el daño crítico recibido y obtiene velocidad de movimiento al estar con salud crítica."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Protocolo de defensa",
          "description": "Regeneras 100 de salud cada segundo mientras cargas Terraluvión.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/319851240bac7253ea1601534c66860a126c2f6a9bd6af56bdb25265c3521fe0.png"
        },
        {
          "name": "Fortificación móvil",
          "description": "Mientras Fortificación está activo, Orisa no tiene reducción de velocidad de movimiento ni generación de calor.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/02ffaf6f362417f64e8bd50919d2d2d5d9238c2f9a7e168b3d68192c4c604004.png"
        }
      ],
      "major": [
        {
          "name": "Jabalina pesada",
          "description": "La repulsión de Jabalina de energía aumenta un 25% y el daño de impacto contra muros aumenta 15.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bcfd342643f783df7b6710fd613f2a2a7fc4e84d33e2d2235f203e8e6c6e58ea.png"
        },
        {
          "name": "Barrera protectora",
          "description": "Transforma Girojabalina para que lance una barrera.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/88b6e3613c49bf6c6edbd2e32fb8aaa71ba58d556ff0d6403688d1ceabc70f31.png"
        }
      ]
    },
    "accentColor": "#4fa64a"
  },
  "pharah": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/pharah.webp",
    "hitpoints": {
      "health": 225,
      "armor": 0,
      "shields": 0,
      "total": 225
    },
    "weapons": [
      {
        "name": "Lanzacohetes",
        "description": "Arma de proyectiles explosivos de largo alcance.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f41d86b7413491d430cf2bf9802f8110062ab190819b423098a642286443ff74.png"
      }
    ],
    "ultimate": [
      {
        "name": "Bombardeo",
        "description": "Lanzas una salva continua de minicohetes.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/69a9067ddf8a7138d200c3bad9d01e09760df5b3f07bfb1cfa82ee70f385576c.png"
      }
    ],
    "abilities": [
      {
        "name": "Impulso",
        "description": "Te impulsas horizontalmente.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/025fb94110f48c67d64e41536962e670410d6ba9fe38f2bb6255ff0750c6b9c8.png"
      },
      {
        "name": "Propulsores",
        "description": "Asciendes rápidamente y recuperas un poco de combustible.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4bf45e79768cc35aadd3ac66e31d19ac75e1bb088480c490866fdafcf9fc49b6.png"
      },
      {
        "name": "Disparo de conmoción",
        "description": "Lanzas un cohete explosivo que repele a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/666c55a0b7810194a486e73fddac9dac6b64eb0303a14be8d1453c9f29c210df.png"
      }
    ],
    "passives": [
      {
        "name": "Planeador",
        "description": "Mantenlo pulsado para planear. Caes despacio cuando el combustible se termina. El combustible solo se regenera mientras se está en el suelo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/452f72706d3da3b217d0a2e749aebcd7483f7128b048692ebd86dc905612b866.png"
      },
      {
        "name": "SUBROL: RECONOCIMIENTO",
        "description": "Dañar a un enemigo con menos de la mitad de salud lo revela a través de paredes brevemente."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Fuerza de conmoción",
          "description": "Disparo de conmoción inflige hasta 30 de daño de explosión.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f539cb6ea0b24ef0edd895d2d734d3fb2bc85345c1c5371c5987f92e784eb82e.png"
        },
        {
          "name": "Escudos Helix",
          "description": "Convierte 125 de salud en escudo. Los golpes directos con el lanzacohetes activan la regeneración pasiva de escudo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4136731c24d8b49678a8a9def5f5d3e5f7e3c5897cd9c151c1409dbdead93f71.png"
        }
      ],
      "major": [
        {
          "name": "Reservas de combustible",
          "description": "Impulso proporciona un 50% de combustible. Aumenta la sobrecarga de combustible máxima un 100%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1b28fe153dc36c6b379ff6793420d280d5ce16bb855188cd35b6f078393cb134.png"
        },
        {
          "name": "Salva de cohetes",
          "description": "Tras usar una habilidad de movimiento, tu siguiente disparo principal también dispara dos minicohetes en espiral, cada uno de los cuales explota e inflige 30 de daño.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/34efa97b9ef729fabe003953ca7e5e33e23d07c07c37aee8a6ffa4c5a88cf6bd.png"
        }
      ]
    },
    "accentColor": "#3f80d9"
  },
  "ramattra": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/ramattra.webp",
    "hitpoints": {
      "shields": 0,
      "health": 425,
      "armor": 100,
      "total": 525
    },
    "weapons": [
      {
        "name": "Acelerador de vacío (Forma de ómnico)",
        "description": "Lanzas una andanada de proyectiles.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b860a9ba344656b591451cf17d419633e75c0c1abf2737e0c3c470fe94b70768.png"
      }
    ],
    "ultimate": [
      {
        "name": "Aniquilación",
        "description": "Adoptas la Forma de némesis y creas un enjambre letal que se abalanza sobre los enemigos cercanos y que dura más cuando inflige daño a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/283267c35bf45ecfaf8f8fdeee5f8b29e36ab6937fda9112f730dce85e963213.png"
      }
    ],
    "abilities": [
      {
        "name": "Barrera de vacío (Forma de ómnico)",
        "description": "Creas una barrera en la ubicación seleccionada.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/94d29f925b938d4898f440d06d8543e49c772e09cb89ef9812826fb2be54f9c7.png"
      },
      {
        "name": "Aporrear (Forma de némesis)",
        "description": "Lanzas un puñetazo, lo que genera una oleada de energía perforadora con cada golpe.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b38ab7e9dddd67875853b77de9a3b9db270ea1d9d107753debae2c07f1f5061f.png"
      },
      {
        "name": "Vórtice voraz",
        "description": "Lanzas una esfera de energía que detona en el suelo que ralentiza y derriba a los enemigos. Actívala de nuevo para detonarla antes.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/80e96eddbc10af5e1b08c7392f4f61aabc0e5408e31e72961595a936ccceabcc.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: BALUARTE",
        "description": " Mayor resistencia frente a ralentizaciones y empujes frontales."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Forma implacable",
          "description": "Las eliminaciones alargan 2 s la duración de Forma de némesis cuando está activa. Este efecto se reduce a la mitad durante Aniquilación.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8671fcad5ba90ab73fe1c01d831801d5ecac6f9b75bf1bbabde065d2277dc4de.png"
        },
        {
          "name": "Barrera prolongada",
          "description": "La duración y el tamaño de Barrera de vacío aumentan un 25%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b94428b88e5858d65ac4a0f9800c344ecd11c9f31698d42d55a9f3ab4df241cb.png"
        }
      ],
      "major": [
        {
          "name": "Ráfaga de vacío",
          "description": "El acelerador de vacío lanza periódicamente una ráfaga de 6 proyectiles adicionales durante sus disparos continuos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8c4ab35a42b172b78cc2124f5c6098e1da757ff31c2c73e51d45c43b0b382bb2.png"
        },
        {
          "name": "Nanorreparación",
          "description": "Ramattra se sana 100 de salud por segundo mientras permanezca dentro de Vórtice voraz.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0f01814ad4c072dbbaddb1f15e72178f6bb5e7bc2c0eb3874c9f5838f98e30e7.png"
        }
      ]
    },
    "accentColor": "#8e5be0"
  },
  "reaper": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/reaper.webp",
    "hitpoints": {
      "health": 300,
      "armor": 0,
      "shields": 0,
      "total": 300
    },
    "weapons": [
      {
        "name": "Escopetas infernales",
        "description": "Armas de corto alcance y disparo esparcido.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/903d169dd299e13294d43bf01c61ad5351169ef7cc0bd69bddb3855472b88359.png"
      }
    ],
    "ultimate": [
      {
        "name": "Espiral de muerte",
        "description": "Dañas a todos los enemigos cercanos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/01b5c2f0f26e964707ff9e382a639a402f9f7b3fff3025dadd79f8e6a3f902d1.png"
      }
    ],
    "abilities": [
      {
        "name": "Paso de las tinieblas",
        "description": "Te teletransportas a la ubicación seleccionada.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e20a77100283c55a2e3366eb903936eae445364f96575975005c5373f30d722d.png"
      },
      {
        "name": "Forma espectral",
        "description": "Aceleras tu movimiento y te vuelves invulnerable, pero no puedes disparar.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b85663ad878344ecf1de8037ff96b4df699d003db95c409b8de46485cdae47c2.png"
      }
    ],
    "passives": [
      {
        "name": "Siega",
        "description": "Infligir daño te sana.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d6efc2a1bddf6bdafd95d6bf650bea70fe83d45000c400a1eaa6a86b042ef0a5.png"
      },
      {
        "name": "SUBROL: FLANQUEADOR",
        "description": "Los packs de salud restauran mucha más vida adicional."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Siega de almas",
          "description": "Reúnes almas de los enemigos caídos para restaurar 50 de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/703054950487245c1a60a25bf65e8301d6050559e5216c17f4970c1adc46fd0b.png"
        },
        {
          "name": "Espectro persistente",
          "description": "Salir de Forma espectral otorga un 30% de velocidad de movimiento durante 2 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6fe85e04ebeacfca484fbd776da1bf7935102577c30a5d9e9b12ad7e859cc415.png"
        }
      ],
      "major": [
        {
          "name": "Traslación sombría",
          "description": "Paso de las tinieblas ahora es un 25% más rápido, pero se reduce el alcance un 25%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ad2d66c3c90bb3b92e262998d99f3ff30cc9b917205339cb59a4e13f8e23fa33.png"
        },
        {
          "name": "Dedo suelto",
          "description": "Usar una habilidad y recargar restablecen el tiempo de reutilización de Gatillos calamitosos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/668cd4b407c22f66b8c0f703c352293542dce4d6e0535efd2fb4f2123ff8ed1a.png"
        }
      ]
    },
    "accentColor": "#a33240"
  },
  "reinhardt": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/reinhardt.webp",
    "hitpoints": {
      "shields": 0,
      "health": 400,
      "armor": 300,
      "total": 700
    },
    "weapons": [
      {
        "name": "Martillo a reacción",
        "description": "Arma cuerpo a cuerpo devastadora.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/22c800a8529b46a64f391cd432c94023dca2745ef9c9eec52ad9a7843d7df4e5.png"
      }
    ],
    "ultimate": [
      {
        "name": "Seísmo",
        "description": "Derribas a todos los enemigos frente a ti.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c5c5d0db3af35de00d60dd68e6350a540febbbac094bafaf0663f25ae4dcfd2b.png"
      }
    ],
    "abilities": [
      {
        "name": "Embestida",
        "description": "Cargas hacia delante y empotras a un enemigo contra la pared.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6b7b226ab508dc7a45908b0613dc889558cf2cc217c04d072940e0a539ac56aa.png"
      },
      {
        "name": "Onda de fuego",
        "description": "Lanzas un proyectil de fuego.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ca90071b2e0c9cbf5a6e91e580682c73456298b88e34d40d7bf5eb5c098173a1.png"
      },
      {
        "name": "Campo protector",
        "description": "Mantén pulsado  para activar una barrera de energía frontal.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/423dec435587464e24a663cdd4f35178020854e1f924af5902eebba5be9607f2.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: BALUARTE",
        "description": " Mayor resistencia frente a ralentizaciones y empujes frontales."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Fuego del cruzado",
          "description": "Recupera una carga de Onda de fuego al aturdir a un enemigo, y se pueden conseguir hasta 3.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c52c47ea96e1485d5eefb4b968b8ddd3c85705023f9696f4d5ea9c70887e060f.png"
        },
        {
          "name": "Determinación cruzada",
          "description": "Al usar Campo protector, la regeneración pasiva de salud se activa un 75 % antes.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c5b0de9c882813ed237ae4822f9059b9c496f5b249ceeb79fdb2fbc4cff05e07.png"
        }
      ],
      "major": [
        {
          "name": "Embate con escudo",
          "description": "Mientras Campo protector está activo, puedes usar  para dañar y repeler a los enemigos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f439f368062a58b9ee190afb5d4ea3ad28692d298600292f1f47e6e68151d108.png"
        },
        {
          "name": "Furia ardiente",
          "description": "Por cada enemigo que golpeas con Onda de fuego, obtienes un 25% de aumento en la velocidad de ataque durante 2 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/543ee152a75898b667a5c0a0127326b36716df02b6e2baace4bb0d9784571c6a.png"
        }
      ]
    },
    "accentColor": "#a5b4bf"
  },
  "roadhog": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/roadhog.webp",
    "hitpoints": {
      "shields": 0,
      "health": 750,
      "armor": 0,
      "total": 750
    },
    "weapons": [
      {
        "name": "Chatarrera",
        "description": "Escopeta de corto alcance que dispara en dos ráfagas.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d48d0b264d765e3732abda784e986595f7a6c5ad0e56f1929c008ffc0492a39d.png"
      }
    ],
    "ultimate": [
      {
        "name": "Juego sucio",
        "description": "Dañas y repeles a todos los enemigos frente a ti.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/907eeb4e179b70ea279ca8dd0e276bf45a1b1a13875757ae3b8fd2305f2affa9.png"
      }
    ],
    "abilities": [
      {
        "name": "Compactadora de basura",
        "description": "Absorbe los proyectiles enemigos y los compacta para convertirlos en una bola explosiva de chatarra.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/23bd9bc7960a9958d04584375c5ea81c6615da668e9ad8c6cbb4920561f7c199.png"
      },
      {
        "name": "Garfio",
        "description": "Arrastras a un enemigo hacia ti.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7edc1cdef13c2fd21e279043816aa1d2975dc784298502fd121b927729e1e86d.png"
      },
      {
        "name": "Inhalador",
        "description": "Te curas y reduces el daño que recibes.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/064bde1e9f9f65e2a1ca0898abe09432394dca3b0729da0dcccff41b5f5be69b.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: MATÓN",
        "description": "Reduce el daño crítico recibido y obtiene velocidad de movimiento al estar con salud crítica."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Garfio de chatarra",
          "description": "Acertar con Garfio recarga 4 de munición.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2ca8a50b6b369d47a33ec5d4a3e42e12ca1aebb8144a29d959a134fb4226934a.png"
        },
        {
          "name": "Ven, cochinillo",
          "description": "El tiempo de reutilización de Garfio se reduce un 80% durante Juego sucio.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4b0364924157ffcb8dc2673e4e1daf86c8e3651b664bc9c1cc494a281dfaabba.png"
        }
      ],
      "major": [
        {
          "name": "Exposición al hogdrógeno",
          "description": "Inhalador también sana a los aliados cercanos un 50% de su capacidad de sanación.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bbeb9d0110d04466eda5f4a845bd27685f80703264c967c0cf224f1b99d6f49d.png"
        },
        {
          "name": "Tubo de escape tóxico",
          "description": "Los enemigos que se encuentren frente a Roadhog mientras Compactadora de basura esté activa sufren una reducción de velocidad del 30% y reciben 20 de daño por segundo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d9dcccfe7fb8e200ca9b3eec39dc3eec0789f99f8d6de38d26997bd591963eae.png"
        }
      ]
    },
    "accentColor": "#c49052"
  },
  "shion": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/shion.webp",
    "hitpoints": {
      "health": 250,
      "armor": 0,
      "shields": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Pistolas Kira",
        "description": "Pistolas de ánima de fuego rápido.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/364a8441812d647fb1324804223f963fc904add29b9396bf98f40d9bffa6fe43.png"
      }
    ],
    "ultimate": [
      {
        "name": "Satsuriku",
        "description": "Avanza a toda velocidad 3 veces en medio de una lluvia de disparos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/758c015bd3da645e207d99d8a70275e114728101e6a5b7bc15dc24dba6c8962d.png"
      }
    ],
    "abilities": [
      {
        "name": "Ejecución",
        "description": "Dispara una salva con forma de X. Mantén presionado para contener la dispersión.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dbd96d63564e1d99cfa5593f86796c9e5ab360214eb0e50c18d6a9503093c7c5.png"
      },
      {
        "name": "Vuelta salvaje",
        "description": "Acelera el motor. Vuelve a activar para bajarte y lanzar la moto hacia delante.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a0279c43c165fe4f240c61baa6b7a721e73b84d7f940809e2a1897d94b2302ef.png"
      },
      {
        "name": "Evasión",
        "description": "Corre y obtiene exceso de salud brevemente",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/460c2fb7f11b1ea206f11a72a7c93bfed0cd314bdfb35333287177a966e21c01.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: FLANQUEADOR",
        "description": "Los packs de salud restauran mucha más vida adicional."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Instinto de supervivencia",
          "description": "La duración del exceso de salud de Evasión aumenta en 1 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2785c741990d138c080612ae2edccaf84fc913b437c559b5f56db2da5244d10c.png"
        },
        {
          "name": "Máquina X",
          "description": "Ejecución inflige un 20% más de daño a los enemigos con menos de la mitad de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7d496f8a59eb6f13d661bc282be234e96a683862347777ec7281a92516b8bb1c.png"
        }
      ],
      "major": [
        {
          "name": "Repostar",
          "description": "Vuelta salvaje restaura inmediatamente 50 de salud y regenera 20 de salud cada segundo mientras está activa.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ef825e7cd91405f38bb5e0400b9d20162a01fa81e726d574528a0d3ef3812abc.png"
        },
        {
          "name": "Caras de la muerte",
          "description": "Obtiene el resto de pasivas de funciones secundarias de daño (reconocimiento, especialista y tirador).",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/60e45c630f647bf5b254bb31b02c2597b8d7ace1e7444b05357b694dac3a1d54.png"
        }
      ]
    },
    "accentColor": "#e04a5f"
  },
  "sierra": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/sierra.webp",
    "hitpoints": {
      "shields": 0,
      "health": 250,
      "armor": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Rifle hélice",
        "description": "Arma de asalto automática. Dispara en forma de hélice, obteniendo precisión con fuego sostenido.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d12e2bc19f1619b71d13816c01ef96ad54bb6a7cb4ee00ae8bea8be3d2e2102d.png"
      }
    ],
    "ultimate": [
      {
        "name": "Abrecaminos",
        "description": "Despliegas un dron que vuela hacia delante y lanza explosivos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4a300c381bac87785f406965cf94ef8d75ee2592bb07d867d50d1c738d8312c8.png"
      }
    ],
    "abilities": [
      {
        "name": "Disparo rastreador",
        "description": "Marca a un enemigo. Los disparos de Rifle hélice rastrean automáticamente a los enemigos marcados.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6c77d58daaeaae211088786b8bf9bff92178ef2df3f0ca6ec9a721d6b4258e55.png"
      },
      {
        "name": "Carga sísmica",
        "description": "Lanzas una carga que crea una onda de choque al impactar.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f4b141af6f5e6b6c392cdde07083f29d1b5374303c7fc39e37c3f4ed51985e52.png"
      },
      {
        "name": "Dron de anclaje",
        "description": "Lanzas un dron de anclaje. Reactívalo para lanzarte hacia él.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f9e6fff99bff3c24a9ea9e57ae7c71b067982e6df9b0acb50529fe58131b6e7b.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: RECONOCIMIENTO",
        "description": "Dañar a un enemigo con menos de la mitad de salud lo revela a través de paredes brevemente."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Vuelo completo",
          "description": "Aumenta el vuelo de Dron de anclaje y el alcance del enganche un 25%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/87310bf39feb0d3fb4d672e3f4a78a212c678971301fc33abc5bf619431474f9.png"
        },
        {
          "name": "Agarre firme",
          "description": "La dispersión de las balas de Rifle hélice se reduce un 70% más rápido y se amplia un 30% más lento.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b61cf59f034272059a12bc580f5554c80cada3d3efb58bd2a50b6422f8dd228f.png"
        }
      ],
      "major": [
        {
          "name": "Drones médicos",
          "description": "Los drones de anclaje tienen un botiquín que puede sanar a Sierra.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/40bee6462dc1424e2a7b0edf20ed84689f3ea5729d41377187a257982524e818.png"
        },
        {
          "name": "Fijada",
          "description": "Golpear a un enemigo con Disparo rastreador aumenta tu velocidad de ataque un 20% durante 2 segundos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/656d1dee1ba31c2433d36512c973f0958231dae8dcfc70226c16497819ddc65f.png"
        }
      ]
    },
    "accentColor": "#e0394b"
  },
  "sigma": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/sigma.webp",
    "hitpoints": {
      "health": 350,
      "armor": 0,
      "shields": 250,
      "total": 600
    },
    "weapons": [
      {
        "name": "Hiperesferas",
        "description": "Lanzas dos cargas que implosionan tras un corto periodo de tiempo, lo que inflige daño en un área.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/30fc5dd8efdcc6aa5a34191c3ff308fb77fdfd542b2bfc36e1536f0db7bdb618.png"
      }
    ],
    "ultimate": [
      {
        "name": "Flujo gravitacional",
        "description": "Manipula la gravedad para alzar a los enemigos en el aire y luego estrellarlos contra el suelo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0a5cda51d0e802e9adbdedefee7461c5abe2b6c6a7027d55903ac9a28281b2e4.png"
      }
    ],
    "abilities": [
      {
        "name": "Agarre cinético",
        "description": "Absorbes proyectiles frente a ti y los conviertes en salud adicional.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c8af801acf16c796c38a8aa8abb571eda481d6490f0562105aa20f319cccdf41.png"
      },
      {
        "name": "Acreción",
        "description": "Reúnes una masa de escombros, la lanzas contra un enemigo y lo derribas.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f7fd30ad038cc989f39b28bac6744b6ab0215e9817adfd67d077f3b40bc10fdf.png"
      },
      {
        "name": "Barrera experimental",
        "description": "Mantenlo pulsado para proyectar una barrera flotante; suéltalo para parar. Pulsa de nuevo para hacer que la barrera vuelva a ti.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2ad5aa270071c229fd0a83b49d0ebd6b502489f0a0b5bcb109140eea79a5fb6b.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: BALUARTE",
        "description": " Mayor resistencia frente a ralentizaciones y empujes frontales."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Ciclo cinético",
          "description": "Absorber proyectiles con Agarre cinético también reduce el tiempo de reutilización de Acreción.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f22dbfb1aaeff73f2fea11906bf431b2063f68160ba54473337c24a8d01cc524.png"
        },
        {
          "name": "Hiperregeneración",
          "description": "El 30% del daño de las hiperesferas restaura la salud de Barrera experimental.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a6f10bff0408ce201f848449e2ae55ae8b2f368b42165090922b08854a90cb86.png"
        }
      ],
      "major": [
        {
          "name": "Hiperasalto",
          "description": "Cada 5 golpes directos con Hiperesferas, tu siguiente ataque cuerpo a cuerpo rápido hace levitar a los enemigos y los repele.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f5bbae6e666458d5d8a382c67056ea3cf0ce0781d575c540a6afb58267e92027.png"
        },
        {
          "name": "Levitación",
          "description": "Activa y mantén el doble salto para levitar ligeramente hacia arriba.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/15828d0a39a88da3687e84e52a1a119fb0b5b08812e11c356bfffb8fe90d8a41.png"
        }
      ]
    },
    "accentColor": "#7fb5c4"
  },
  "sojourn": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/sojourn.webp",
    "hitpoints": {
      "shields": 0,
      "health": 225,
      "armor": 0,
      "total": 225
    },
    "weapons": [
      {
        "name": "Cañón de riel",
        "description": "Proyectiles de gran velocidad que generan energía al impactar.  Disparo de potencia elevada que gasta la energía acumulada y atraviesa a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e5b9de0193dfaf675dd1cd1cbfe4ac96c8cc62059b376a728da56f59f639ee25.png"
      }
    ],
    "ultimate": [
      {
        "name": "Supercarga",
        "description": "La energía del cañón de riel se carga automáticamente durante un breve periodo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5772b79f0a9d28125abb69412bce2a025d79f9b6023b561427592ece2b761588.png"
      }
    ],
    "abilities": [
      {
        "name": "Maniobra evasiva",
        "description": "Desplazamiento por el suelo que puede convertirse en un salto elevado.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/96315794f51b0dd88c540803fc3930472d75dca3cf00c02ad89dda1b0551493c.png"
      },
      {
        "name": "Disparo inmovilizador",
        "description": "Lanzas una ráfaga de energía que inflige daño a los enemigos que se encuentran en su interior.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/aeee6090d3c14383487584bda86043add0b69c02331ad01dfd01958a545dddcf.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: TIRADOR",
        "description": "Los impactos críticos reducen ligeramente los tiempos de reutilización de tus habilidades de movimiento."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Sobrecarga",
          "description": "La energía máxima del cañón de riel aumenta en 50 mientras Supercarga está activa.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5e3658d0e7ce5ab2941fad17e8201fc2f658db8554d7f83c114bafcbc54740b8.png"
        },
        {
          "name": "Campo de deceleración",
          "description": "Los enemigos golpeados por Disparo inmovilizador se ralentizan un 25%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f9a050171b880b1cba0411bfd11eb0739f3d06bf579dd5f3e9cfc9ed767d05e5.png"
        }
      ],
      "major": [
        {
          "name": "Generadores de fricción",
          "description": "Maniobra evasiva genera hasta 75 de energía.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/26003dd94835d340f1045db8be6b5342b23790e73bb13d258748d6fe86af8a8e.png"
        },
        {
          "name": "Doble propulsor",
          "description": "Maniobra evasiva obtiene una carga adicional y la altura del salto pasa a ser movimiento lateral.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/78ec26ed402e4ea8a1a2cafcbab9759f35886d3d529c7fa653527cd554f2ed9f.png"
        }
      ]
    },
    "accentColor": "#e05044"
  },
  "soldier76": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/soldier-76.webp",
    "hitpoints": {
      "shields": 0,
      "health": 250,
      "armor": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Rifle de pulsos pesado",
        "description": "Arma de asalto automática.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/92a278e67041e7d4fa9b1a392a0a632ae61878b166c07bfa4486fc8f331542c5.png"
      }
    ],
    "ultimate": [
      {
        "name": "Visor táctico",
        "description": "Apuntas tu arma automáticamente a los objetivos visibles.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/be3396e23ba0199441cfa6f3b1ed92400031c662b933c2354288111070210e6f.png"
      }
    ],
    "abilities": [
      {
        "name": "Sprint",
        "description": "Corres más rápido hacia delante.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5b9ad6138762e898cd82c4d4573580004ee603976b7cd8e18362c902a00b496e.png"
      },
      {
        "name": "Campo biótico",
        "description": "Despliegas un campo que os sana a tus aliados y a ti.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a7ff449a9b1d26894358265bedbe1f6cbb75707359f9b5b86266e2ce5d1aa3a3.png"
      },
      {
        "name": "Cohetes hélice",
        "description": "Lanzas una salva de cohetes explosivos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4b430bbf1650e264875441dab1f4bd1083d106375fc1a7ef0e0c88e1d7371bc4.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: ESPECIALISTA",
        "description": "Eliminar a un enemigo aumenta brevemente tu velocidad de recarga."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Propulsión de hélices",
          "description": "Se ha aumentado la velocidad de los proyectiles de Cohetes hélice un 50%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f3edf6d186c45e6e380ea7402199287e9724390b8b48f6702687ab6f18f47655.png"
        },
        {
          "name": "Salva táctica",
          "description": "Durante Visor táctico, el tiempo de reutilización de Cohetes hélice se reduce un 80% y no interrumpe los disparos de Rifle de pulsos pesado.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c2b0f0b31aa7064f89843efe9f3d4a1ed47b235e9727a925b8a268c6981ddf57.png"
        }
      ],
      "major": [
        {
          "name": "Zancada completa",
          "description": "La bonificación de velocidad de movimiento de Sprint aumenta gradualmente un 25% adicional a lo largo de 2 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/062d822ee3836054bd987c73831c74c87f9e18ce74b7ceec14e0450d582aa524.png"
        },
        {
          "name": "Estimulantes",
          "description": "Estimulantes sustituye a Campo biótico. Al usarlo, Soldado: 76 recupera 30 de salud cada s y obtiene un 20% más de velocidad de ataque durante 5 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/534498771c3a5a981a3d3f8c2f55df2998753e791f2fd77b51ac95fe501edafd.png"
        }
      ]
    },
    "accentColor": "#5873b8"
  },
  "sombra": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/sombra.webp",
    "hitpoints": {
      "health": 225,
      "armor": 0,
      "shields": 0,
      "total": 225
    },
    "weapons": [
      {
        "name": "Subfusil",
        "description": "Un arma automática de corto alcance.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5750af901db77f479be41f01c55a5b3d5e644d2f99c179b77bd824eecf5fcbbc.png"
      }
    ],
    "ultimate": [
      {
        "name": "PEM",
        "description": "Infliges daño a todos los enemigos cercanos según un porcentaje de su salud actual, los hackeas y destruyes las barreras a tu alrededor.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9ccf2688b89c3f17c3f6410c3142510ea413718f0d165f78e712184ec636b2e4.png"
      }
    ],
    "abilities": [
      {
        "name": "Parche",
        "description": "Sana a un aliado de forma gradual hasta una cantidad determinada de salud. También puede piratear los packs de salud y la mayoría de los desplegables del enemigo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8646a0e19104f5185b6296c0123fd768c3333a18ffe4aa922e2724df9b2aa041.png"
      },
      {
        "name": "Ciberespacio",
        "description": "Lanza un proyectil que explota al impactar y crea una zona que debilita a los enemigos y sana a los aliados.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/22bfcf655c54a065b149c3359ce2447f6c4c09835fd957ce72fa8a4e023ba7ef.png"
      },
      {
        "name": "Baliza de translocación",
        "description": "Lanzas una baliza y te teletransportas hasta ella. Tras teletransportarte, entras en sigilo durante un breve periodo de tiempo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/13259eeec8db36c3158d1d4bd4fe99667067ee7bf678349eec5cbd0d32da3a7f.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: TÁCTICO",
        "description": "Puedes acumular carga de definitiva excedente que se conserva tras usar tu habilidad definitiva."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Hackeo vital",
          "description": "PEM aplica Parche a todos los aliados cercanos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/34e108b70ea2d33e67e973b4e3d62d8c6587a0ea3eea3a9645630f469f3321ae.png"
        },
        {
          "name": "CTRL ALT ESC",
          "description": "Teletransportarse con Baliza de translocación inicia una regeneración de salud pasiva cuando tienes menos de la mitad de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b6d526c6b4a6dc8af1266bafb5dca4e649754e3ad4ffd8b7338601f40adb0b87.png"
        }
      ],
      "major": [
        {
          "name": "Paquete de datos",
          "description": "Si hackeas los packs de salud con Parche, su tiempo de reutilización principal se reduce en 4 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/87fec003fc9753ad1d6233bc54f163ef280684396101f9088727e886f15b24fd.png"
        },
        {
          "name": "Ciberseguridad",
          "description": "La sanación de Ciberespacio se duplica en aliados con la salud por debajo de la mitad.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/28a09178c65bff6e100c872bf029d5c8f98f13f57679ad793b30782546eb027b.png"
        }
      ]
    },
    "accentColor": "#9d5cf0"
  },
  "symmetra": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/symmetra.webp",
    "hitpoints": {
      "shields": 150,
      "health": 125,
      "armor": 0,
      "total": 275
    },
    "weapons": [
      {
        "name": "Proyector de fotones",
        "description": "Arma de corto alcance cuyo haz inflige cada vez más daño.  Mantenlo pulsado para cargar y suéltalo para disparar un orbe explosivo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8a4fdf92378cdc77364729fe493013e913d794975c5a9b94865cd740f471d528.png"
      }
    ],
    "ultimate": [
      {
        "name": "Barrera de fotones",
        "description": "Despliegas una barrera de energía enorme.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/33e5dd2a53729dad19d77e7528de49e2e3e3a6500657d47fe1c331afd1c0a88f.png"
      }
    ],
    "abilities": [
      {
        "name": "Torreta centinela",
        "description": "Despliegas una pequeña torreta que daña y ralentiza a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2b4544ab4d75b4499b7cb6b1b6b44e8487b6d3d3857ee119ebbf29d59e903d45.png"
      },
      {
        "name": "Teletransportador",
        "description": "Creas dos teletransportadores temporales que permiten viajar de uno a otro al instante.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1c4fb9dbd9b6d02c2e75c3ad142b79955ba3e6e73469d676c79bdaef7f7a610f.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: ESPECIALISTA",
        "description": "Eliminar a un enemigo aumenta brevemente tu velocidad de recarga."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Capacidad de vigilancia",
          "description": "Torreta centinela obtiene una carga adicional.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4e1fb364d87d9e78b9103b2bac3b553f743fd44a1bb5170aaae128fe4d79eac5.png"
        },
        {
          "name": "Alineamiento perfecto",
          "description": "El alcance del disparo principal de Proyector de fotones aumenta un 20%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b36193e986b8e815b07ebf01a85bc2c29a1cd34c2ee50c458f7d07d933b4a0d8.png"
        }
      ],
      "major": [
        {
          "name": "Barrera flotante",
          "description": "En su lugar, Teletransportador obtiene la opción de crear una barrera que se mueve hacia delante. Pulsar de nuevo E ralentiza el movimiento de la barrera.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/674c0286e244b391dbda20695dfb4ed08c9ab7265741c91be4549f7fcbf4d3a7.png"
        },
        {
          "name": "Batería de escudo",
          "description": "Symmetra regenera 20 de escudo por segundo mientras está a 10 m de su teletransportador.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2bec4e3cd61b5516075b478abdb34676bd458579ab1764699a1ab106a1dbaefb.png"
        }
      ]
    },
    "accentColor": "#5fc6dc"
  },
  "torbjorn": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/torbjorn.webp",
    "hitpoints": {
      "health": 225,
      "armor": 75,
      "shields": 0,
      "total": 300
    },
    "weapons": [
      {
        "name": "Remachadora",
        "description": "Arma de largo alcance y baja cadencia de fuego.  Arma de corto alcance, poderosa pero poco precisa.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2020ce8ffa1d19edbfa7097499ed5763ac18500a0f76cde75cc37243fd6aab27.png"
      },
      {
        "name": "Martillo de forja",
        "description": "Golpeas con el martillo para reparar tu torreta o dañar a un enemigo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f88b11b8a6cceb1ba4a15e3d6bc4beb5a1bce9ae5dbcb088b2d51ace54af13bc.png"
      }
    ],
    "ultimate": [
      {
        "name": "Fusión nuclear",
        "description": "Creas charcos de escoria fundida que daña a los enemigos. Infliges daño adicional a la armadura.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f90a17a62ce6d21dfca5f9dd0df6598f582872f88269c76f51efdec1e198ffe4.png"
      }
    ],
    "abilities": [
      {
        "name": "Desplegar torreta",
        "description": "Despliegas una torreta que se autoconstruye.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/856576a7a6b8bc93e8024a152a8a300178ed4030c869edebaaf61469cdbc330c.png"
      },
      {
        "name": "Sobrecarga",
        "description": "Obtienes salud adicional y mejoran tus velocidades de ataque, movimiento y recarga.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9751ee2ad26041a274f60dab106a3d52eb0f0d7941b4bc48cd14e737e05dc6bd.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: ESPECIALISTA",
        "description": "Eliminar a un enemigo aumenta brevemente tu velocidad de recarga."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Hora del martillo",
          "description": "Te mueves un 20% más rápido si Martillo de forja está equipado.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d60050f7eff6fa99e2914cceacd5fcc2e5bec6b1c898155246743d51be4bebc4.png"
        },
        {
          "name": "Precalentado",
          "description": "Fusión nuclear activa Sobrecarga.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/510847cb9a3e297cea8bdab984e2589cc30f72dd611899b26409dbb5fe8a84fd.png"
        }
      ],
      "major": [
        {
          "name": "Pernos de anclaje",
          "description": "El alcance de lanzamiento de Desplegar torreta aumenta un 25% y se puede colocar en paredes y techos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/5f3ae1fcd2f9a78ae44293324d53c8cd9273b42cf9be0d56ff920ee5f45c589d.png"
        },
        {
          "name": "Torreta sobrecargada",
          "description": "Sobrecarga mejora tu torreta durante 5 s, lo que aumenta su salud y el daño que inflige.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c6eb6f52be58ddb12bf57b744d374f00871fd0068345e61b0c962eb04c0901b5.png"
        }
      ]
    },
    "accentColor": "#d06a4a"
  },
  "tracer": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/tracer.webp",
    "hitpoints": {
      "health": 175,
      "armor": 0,
      "shields": 0,
      "total": 175
    },
    "weapons": [
      {
        "name": "Pistolas de pulsos",
        "description": "Armas automáticas de corto alcance.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/17a3bc41fc57a8527c4f44a5615e249acca62cb69319e52b61d499e4e91cf346.png"
      }
    ],
    "ultimate": [
      {
        "name": "Bomba de pulsos",
        "description": "Lanzas un potente explosivo adhesivo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a2613e52845b252aee119c75e1b527cd0dd1c6d4c0605b3d48983188268d3581.png"
      }
    ],
    "abilities": [
      {
        "name": "Traslación",
        "description": "Te teletransportas en la dirección en la que te estás moviendo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b8c86be415dba78af80c8f1536aba583096396327e0609607d21acea6a806276.png"
      },
      {
        "name": "Regresión",
        "description": "Restableces tu ubicación y salud anteriores al viajar atrás en el tiempo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cfa2264173c1d8a365c514972412fbb802d78cd70451b1d38f37579cea500872.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: FLANQUEADOR",
        "description": "Los packs de salud restauran mucha más vida adicional."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Regeneración temporal",
          "description": "La regeneración de salud pasiva se activa un 100% más rápido.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/abd0ec9faa55dabce39858b243817ae53ac30baf210f7c2214768b60806d9dae.png"
        },
        {
          "name": "Recarga cinética",
          "description": "Los golpes cuerpo a cuerpo recargan 12 de munición.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0f73a044de1866a093ccb2e7e368a730387936eae6cb18274b4dbafed26fa0fe.png"
        }
      ],
      "major": [
        {
          "name": "Packs de traslación",
          "description": "Los packs de salud restauran 1 carga de Traslación.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/de00cd532bf045c7d4e242d01944723f724f2eaa6f8df8a44769450d8f49b0d3.png"
        },
        {
          "name": "Entramado cuántico",
          "description": "Regresión otorga 50 de exceso de salud y 20 de munición que se reduce con el tiempo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ace0ed5106148847a2b2f4dfcee58b883ed38bb2851ccbd106528f4ddea6cf41.png"
        }
      ]
    },
    "accentColor": "#ff9c2a"
  },
  "vendetta": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/vendetta.webp",
    "hitpoints": {
      "health": 175,
      "armor": 100,
      "shields": 0,
      "total": 275
    },
    "weapons": [
      {
        "name": "Colmillo palatino",
        "description": "Espadón de luz sólida. Encadena tajos para terminar con un golpe destructivo por encima de la cabeza.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9754a770516c07712b3cbababb825972eec78c08b3fbc141dbcee31d9c58c137.png"
      }
    ],
    "ultimate": [
      {
        "name": "Partemundos",
        "description": "Atraviesa prácticamente todas las defensas e inflige mucho daño a los enemigos frente a ti.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/827e0c55b3d2f335f5950c676f1f52c8668ad33f34ea4c6052c4a122ac005ce8.png"
      }
    ],
    "abilities": [
      {
        "name": "Postura de protección",
        "description": "Bloquea con tu espada, reduce el daño frontal y repele los ataques cuerpo a cuerpo. Bloquear daño consume energía.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/fa9a88278d46e3fc49aad27df9a0b70541f16fb517e96711514e7c736c377243.png"
      },
      {
        "name": "Espiral de tajos",
        "description": "Te lanzas hacia delante y realizas un tajo circular.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/646af7a4d6b6b65adee6543ec70b33c9ffd36989c8dd4e8b22079c6b9e074c79.png"
      },
      {
        "name": "Corte volador",
        "description": "Lanza tu espada en la dirección a la que te diriges y luego vuela hacia ella.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/785bffa90ccf067fbfd86c7a6d6729ed12566a02554f28d76974b573d3a5c6a0.png"
      },
      {
        "name": "Corte proyectado",
        "description": "Disponible cuando está activa la postura de protección. Consume energía para lanzar un proyectil ancho.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/82d88959c1044cf01449e6909cb962590a6ff4a188565f367a5b8a3b3a038ccb.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: FLANQUEADOR",
        "description": "Los packs de salud restauran mucha más vida adicional."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Filo extra",
          "description": "Corte proyectado cuesta un 25% menos de energía.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e970c9fa76693e93f3f490fdfd46efd56ba6a603d9b9169daa32b4b9a9cae1e8.png"
        },
        {
          "name": "Tormenta enfurecida",
          "description": "Espiral de tajos continúa girando, golpeando 3 veces más por 30 de daño en una zona amplia.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/954fc7de0d9e63b963e255eb433ceba0a8fe7af235e93023bbc2788decec218e.png"
        }
      ],
      "major": [
        {
          "name": "Golpe drenante",
          "description": "Los golpes desde arriba obtienen un 40% de robo de salud.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2f56f724364510363723ecace47dd3d08358146b1d689dca22fe1040c7f61705.png"
        },
        {
          "name": "Implacable",
          "description": "Arremetida se puede acumular 3 veces más, aumentando la velocidad de ataque un 5% y la velocidad de movimiento un 3% por acumulación.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/6f16af6f1ddffb07db1c5885caf9ed63754c025d0ad7d0be09d7b45908fad80e.png"
        }
      ]
    },
    "accentColor": "#c0303f"
  },
  "venture": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/venture.webp",
    "hitpoints": {
      "shields": 0,
      "health": 250,
      "armor": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Excavación inteligente",
        "description": "Lanzas una carga sísmica que explota a poca distancia.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b2cc1eb839f7e907defe189101077716373a30e6ee17859521ab558a907a7925.png"
      }
    ],
    "ultimate": [
      {
        "name": "Impacto tectónico",
        "description": "Lanza ondas de choque dañinas.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/41ee94ca95e5e7258fc67aa501aa9972c7a828f4df7b578b4eb44e01490e2679.png"
      }
    ],
    "abilities": [
      {
        "name": "Perforación",
        "description": "Te lanzas hacia delante tanto si estás bajo tierra como en la superficie, lo que hace retroceder a los enemigos. El tiempo de reutilización se recarga más rápido mientras Enterrarse esté activa.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dd98f66d96b860803bd144bb4376d236275bf994228de6f9bd7826ec5c4522e6.png"
      },
      {
        "name": "Enterrarse",
        "description": "Te entierras y te vuelves invulnerable. Pulsa o mantén MAYÚS IZQ para emerger e infligir daño a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/725f02ba7e5bba99db26300cdf1d7478e111b2a4049b7fd41b6ef3a4a6cb0e57.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: FLANQUEADOR",
        "description": "Los packs de salud restauran mucha más vida adicional."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Excavación profunda",
          "description": "La distancia de Perforación es un 75% mayor mientras está bajo tierra.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/74c79013c0286944d1b98298ed164d3d7d8f8c4248c3369af265fecadb7154b1.png"
        },
        {
          "name": "Emoción de la excavación",
          "description": "Mientras Impacto tectónico está activo, los tiempos de reutilización se recargan un 300% más rápido.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/d960ab39306289f689d7796d9ed40bc638e5ff8179c48be8cc6f7fa8a5b22497.png"
        }
      ],
      "major": [
        {
          "name": "Extensor inteligente",
          "description": "Potencia Excavación inteligente con E para aumentar su alcance máximo de proyectil un 100 % durante 4 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/8d8769f9aedd55622b1c994ae8cf7cddefbc66a55e0b33bbb4f07b2de7220e15.png"
        },
        {
          "name": "De barro hasta arriba",
          "description": "Infligir daño con Paliza otorga hasta 40 de escudo de Determinación exploradora.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bd3a6e0335e5c643bac274f1c7e6920712eb2844d2ef60e19434f1841990a238.png"
        }
      ]
    },
    "accentColor": "#e0a84d"
  },
  "widowmaker": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/widowmaker.webp",
    "hitpoints": {
      "health": 225,
      "armor": 0,
      "shields": 0,
      "total": 225
    },
    "weapons": [
      {
        "name": "Beso de la viuda",
        "description": "Arma de asalto automática.  Mantenlo pulsado para usar un rifle de francotirador de largo alcance.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/da5b161187088a765de4a40df65e8737bd9b6b09c896c9cc960f8fa322a78f22.png"
      }
    ],
    "ultimate": [
      {
        "name": "Infravisión",
        "description": "Permites a tu equipo ver la ubicación de los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7f5d2bca0cdf2d33170ed1253344059db14755fc69efb524d19cebb4f3dc2903.png"
      }
    ],
    "abilities": [
      {
        "name": "Gancho",
        "description": "Lanzas un gancho que te sube a una cornisa.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9984591b905b66ab69c48c04e2f2829e32ffce04941b57403f1ec21c125fe573.png"
      },
      {
        "name": "Mina venenosa",
        "description": "Lanzas una trampa venenosa.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/800b4cd6b00024479ac681dc160a50030a3883a334499da6c6918d7c239bec55.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: TIRADOR",
        "description": "Los impactos críticos reducen ligeramente los tiempos de reutilización de tus habilidades de movimiento."
      },
      {
        "name": "ROL: DAÑO",
        "description": "Dañar a un enemigo reduce temporalmente la sanación que recibe."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Eficiencia con la mira",
          "description": "Los disparos con la mira cuestan 3 de munición en lugar de 5.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7b4791cbfcc18876850b21a4c555d150081fa4689e9b489d6291bee40e0d8e9e.png"
        },
        {
          "name": "Instinto de francotirador",
          "description": "Los disparos con mira cargan un 100% más rápido durante 2 s tras usar Gancho.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c7788454504da63392a16b1cee6c2edc3675eb4520c0c6e08fb2543c289648b2.png"
        }
      ],
      "major": [
        {
          "name": "Mina rastreadora",
          "description": "Mina venenosa ahora dispara dardos con veneno a los enemigos a menos de 10 m y permanece encendida después de activarse.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/24e57c5145c859408f311fd13ca239da270c9258f0749e6e302a3ecdbdfb9044.png"
        },
        {
          "name": "Mordisco de viuda",
          "description": "Los disparos con mira pueden cargarse hasta un 125%, atravesando a los enemigos cuando están completamente cargados.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0643cb690b369b1c2bcaab485ea20113ad629755c37bf2e14b7beb9b470cddba.png"
        }
      ]
    },
    "accentColor": "#a05fc0"
  },
  "winston": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/winston.webp",
    "hitpoints": {
      "health": 425,
      "armor": 200,
      "shields": 0,
      "total": 625
    },
    "weapons": [
      {
        "name": "Cañón tesla",
        "description": "Arma que dispara electricidad en un cono frontal.  Mantenlo pulsado para cargar y suéltalo para disparar electricidad concentrada.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bee62b73fa25c243366aa1334aaac2d3b14b626156155895c4355dc3601ecb27.png"
      }
    ],
    "ultimate": [
      {
        "name": "Rabia primigenia",
        "description": "Obtienes gran cantidad de salud, pero solo puedes saltar y dar puñetazos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3dc843c002049f4c954545f8a11570fb347caddb24365a8839563e2302a2ad7c.png"
      }
    ],
    "abilities": [
      {
        "name": "Salto potenciado",
        "description": "Saltas por el aire. Si aterrizas sobre un enemigo, le infliges daño.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2bdebd912f34716becf022295dd66d83abd6d156dde2aad43c87498445050f62.png"
      },
      {
        "name": "Campo de fuerza",
        "description": "Despliegas una cúpula de energía protectora.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/37fc72590a04cbcc4d8ddc3b839e853640a617bad0b6ce8904f6ebe8f07400ba.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: INICIADOR",
        "description": "Permanecer en el aire otorga una ligera regeneración al aterrizar tras iniciar combate."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Carga eléctrica",
          "description": "Winston obtiene un 10% de velocidad de movimiento por cada enemigo que daña con el disparo principal de Cañón tesla, hasta un 30%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/cd3ce407e3817830cf930bdf156b96669a9d811f73a2ed9cd421e6b27b64cc9c.png"
        },
        {
          "name": "Aterrizaje pesado",
          "description": "Durante Rabia primigenia, el daño y el área de Salto potenciado aumentan hasta un 75% mientras estás en el aire.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e75d5742d239f04d14979fee4015ecd173b21786324b88739721b1b75db500fa.png"
        }
      ],
      "major": [
        {
          "name": "Cadena de relámpagos",
          "description": "Los disparos secundarios totalmente cargados rebotan hasta a 2 objetivos adicionales.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/07057b7cb8a72dfe55a0880562ab4afbe9a056e226e19c3c1ae6e2fa88d59c14.png"
        },
        {
          "name": "Barrera revitalizadora",
          "description": "Campo de fuerza sana a los aliados en su interior 35 de salud por segundo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/92c7620c5f92eb1eabb51b9ffeeab93e6be9e0966e7981b3cf515f3fe6ae27ae.png"
        }
      ]
    },
    "accentColor": "#7d9fd6"
  },
  "wrecking-ball": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/wrecking-ball.webp",
    "hitpoints": {
      "health": 450,
      "armor": 125,
      "shields": 150,
      "total": 725
    },
    "weapons": [
      {
        "name": "Cañones cuádruples",
        "description": "Armas de asalto automáticas.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ac31602c3ce6b5732e1730f3b9745a5d10573b819332f730f6f3f0e9cd7fffba.png"
      }
    ],
    "ultimate": [
      {
        "name": "Campo de minas",
        "description": "Despliegas un gran campo de minas de proximidad.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3477845322ea7befaff326fd662ff07eda2d7d49cb1a3518d27ec9531d10afaa.png"
      }
    ],
    "abilities": [
      {
        "name": "Gancho garra",
        "description": "Lanzas un gancho que te permite desplazarte rápidamente por la zona. También hace que dañes a un enemigo y lo repelas cuando chocas contra él a gran velocidad.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/59622a0a190adb30f2ac004485b44e1956cd5fd7a984df1bb4b0e0c156878ed6.png"
      },
      {
        "name": "Bola arrolladora",
        "description": "Te transformas en una bola, lo que aumenta tu velocidad de movimiento máxima.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/657f78a26e980f5fa339edb9cd318f348e00b9a0fd0079e4989584cedad40f52.png"
      },
      {
        "name": "Impacto demoledor",
        "description": "Te lanzas al suelo en picado, infliges daño a los enemigos y los haces saltar por los aires.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/dfb63a6f4f8f8e4d69109d5db9107be47deaec938b1bac6725e756b0a74b8aaa.png"
      },
      {
        "name": "Escudo adaptable",
        "description": "Creas salud adicional de duración limitada que aumenta cuantos más enemigos tengas cerca. Puedes transferir parte de esa salud a tus aliados.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0424cbb07a23692153df454ddbab6cbd11d735a7ac4f680d449e36e49d4fbd02.png"
      }
    ],
    "passives": [
      {
        "name": "SUBROL: INICIADOR",
        "description": "Permanecer en el aire otorga una ligera regeneración al aterrizar tras iniciar combate."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Apisonadora",
          "description": "Los impactos con Bola arrolladora infligen un 100% más de daño a los tanques.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/61ba1ca38638f3d83c7feaf3370ae8040c72bc49e77bad42a311d36031363155.png"
        },
        {
          "name": "Multibola",
          "description": "Pulsa Q en un periodo de 5 segundos tras usar Campo de minas para desplegar 7 minas más.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e542dc40c07eeb35f2c0c4c01e30357c408a8d343c14d6b177e6a904644a2a18.png"
        }
      ],
      "major": [
        {
          "name": "Tiempo aéreo",
          "description": "Impacto demoledor se carga durante más tiempo, lo que te otorga control mientras estás en el aire e inflige hasta un 50% más de daño.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/3647153c08c0af7933fa49fff4669ff44db4fb20aa893a047307c08da5288115.png"
        },
        {
          "name": "Barrera adaptativa",
          "description": "Escudo adaptable genera una barrera de 1 s al activarse.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/91c944d1e02f4bf1619b3b2f81d4af774a08c61d2974ee956e501dfc21a20f41.png"
        }
      ]
    },
    "accentColor": "#f0a540"
  },
  "wuyang": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/wuyang.webp",
    "hitpoints": {
      "health": 225,
      "armor": 0,
      "shields": 0,
      "total": 225
    },
    "weapons": [
      {
        "name": "Bastón de Xuanwu",
        "description": "Dispara un orbe de agua dañino. Mantén para controlar su trayectoria y potenciar la explosión.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/51dee96ac9a92d773bfa56a45272db8cf94ade9c051981f7a240782b0d16f8ec.png"
      }
    ],
    "ultimate": [
      {
        "name": "Estallido de marea",
        "description": "Protege a un aliado o a ti mismo con agua que detona tras unos instantes. La explosión derriba a los enemigos y sana enormemente al objetivo protegido.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/1c1289f947063b60cdb43226bd997557161910a3ea8f5ffcb1d1ad69e91b24b7.png"
      }
    ],
    "abilities": [
      {
        "name": "Torrente impetuoso",
        "description": "Desplázate sobre el agua para moverte más rápido y saltar más alto.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b545f1bee1ec06f66fee071afcece10cee6bf5f4eb2323e4daeacb7861dd8b1d.png"
      },
      {
        "name": "Ola guardiana",
        "description": "Envía una ola hacia delante que aumenta la cantidad de sanación que reciben los aliados y repele a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a1a3efdb2c0db62876f6e39dc82b6095a1058803e3f428ca12c912391f818d35.png"
      }
    ],
    "passives": [
      {
        "name": "Flujo restaurativo",
        "description": "Dirige un flujo sanador pasivo hacia un aliado. Mantén sobre el objetivo para sanar manualmente a un ritmo más rápido, lo que consume recursos de sanación.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/f4d4b3abcf4581b0cfb268f571aa1e657533c294d475043b8ef0ca0d3e9696b0.png"
      },
      {
        "name": "SUBROL: SUPERVIVIENTE",
        "description": "Usar una habilidad de movimiento activa inmediatamente tu regeneración pasiva de salud."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Desborde",
          "description": "Obtienes 10 de munición y un 50% de recursos de sanación mientras Torrente impetuoso esté activo.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4159af4f1e6cb3fa0879727deec0d07d151a8b96e883b4b2e13ab570d840d514.png"
        },
        {
          "name": "Equilibrio",
          "description": "Cuando infliges daño con orbes de agua, aumenta un 30% la sanación de la pasiva Flujo restaurativo durante 2 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/0ef4ae1adde715d22a18b57810ede98b0ed61b649d71364b0077ffe3dbb965fc.png"
        }
      ],
      "major": [
        {
          "name": "Flujo y reflujo",
          "description": "Ola guardiana retorna hasta su ubicación inicial.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/ce177940cb80eb007a9b845861407335caf18048affe226b1e2c39b4a01c6b22.png"
        },
        {
          "name": "Lluvia arreciante",
          "description": "Controla 3 orbes de agua a la vez que infligen un 60% menos de daño y tiene un 25% menos de radio de explosión potenciada.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b4b736a801ab836d8c66825bb8dfc7051333b54f42406ef79520c11d43159a7a.png"
        }
      ]
    },
    "accentColor": "#3fa7d6"
  },
  "zarya": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/zarya.webp",
    "hitpoints": {
      "health": 325,
      "armor": 0,
      "shields": 225,
      "total": 550
    },
    "weapons": [
      {
        "name": "Cañón de partículas",
        "description": "Arma que dispara un haz lineal de corto alcance.  Lanzas granadas de energía.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/b7f554bd5736dcf6493d9ba6c4961f5b93252d692123c7d10d43a4d1b3db62c3.png"
      }
    ],
    "ultimate": [
      {
        "name": "Bomba de gravedad",
        "description": "Lanzas un pozo de gravedad que atrae a los enemigos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9a3f92c4af25b973f82ea2d8ea9a2ec266e0ccd387b053b317eb3cd977f10073.png"
      }
    ],
    "abilities": [
      {
        "name": "Barrera de partículas",
        "description": "Creas una barrera de daño a tu alrededor.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/2311738a2f08aa2e72198b01ef5131337d39275fe0722143e53509592b22612a.png"
      },
      {
        "name": "Barrera proyectada",
        "description": "Creas una barrera de daño alrededor de un aliado.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/80f5c53f2835ef60c6527802de36a603b90ea212af41bce469664817692fc97e.png"
      }
    ],
    "passives": [
      {
        "name": "Energía",
        "description": "El daño que bloquean las barreras aumenta el daño del cañón de partículas.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/34d08df453dae3f8c01cabc9015e43ecfbb5fa764885a6f1f431ee90a98dcee2.png"
      },
      {
        "name": "SUBROL: MATÓN",
        "description": "Reduce el daño crítico recibido y obtiene velocidad de movimiento al estar con salud crítica."
      },
      {
        "name": "ROL: TANQUE",
        "description": "Reduce los efectos de derribo recibidos, disminuye la carga de definitiva generada por daño y sanación contra ti y reduce el daño crítico recibido."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Saltos y más saltos",
          "description": "La autorrepulsión del disparo secundario aumenta un 75%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/a1c471e92b4c70a11e2ad276fcc7589f653ae06cdfb0e38967a4593653866de6.png"
        },
        {
          "name": "Refuerzo",
          "description": "Barrera proyectada activa la regeneración de salud aliada y aumenta su velocidad de movimiento un 20%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/198c67146cb8a79d7584fab1a0762bc9bba2f37e24852bf716dc9587acffecbc.png"
        }
      ],
      "major": [
        {
          "name": "Más chicha",
          "description": "Cuando una barrera está activa, infligir daño con el haz de Cañón de partículas genera energía.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/e1327b5d6c493bf9a2b89e7c6a0e68d6fbb5f5dd3f1291b648534ddb68f2dc44.png"
        },
        {
          "name": "Lanza de energía",
          "description": "El haz del cañón de partículas atraviesa a los enemigos.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7592ce85cb4ce0f6bc90aeca6da706a2e73dcc42f31372553c8fa44c501931ea.png"
        }
      ]
    },
    "accentColor": "#f070b0"
  },
  "zenyatta": {
    "fullPortrait": "https://tonikiraw.com/assets/img/heroes-full/zenyatta.webp",
    "hitpoints": {
      "shields": 175,
      "health": 75,
      "armor": 0,
      "total": 250
    },
    "weapons": [
      {
        "name": "Orbe de destrucción",
        "description": "Arma de proyectiles de energía.  Cárgalo para lanzar más proyectiles.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9aaea64b6fd5f024741aab112dea6ef5e3adc706af58122a6beb92505889a5f1.png"
      }
    ],
    "ultimate": [
      {
        "name": "Trascendencia",
        "description": "Te vuelves invulnerable, te mueves más rápido y sanas a los aliados cercanos.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/bb8671b591d6310c3a956c354669fe8ef4b581517dea0813b5172092a8ab420c.png"
      }
    ],
    "abilities": [
      {
        "name": "Orbe de discordia",
        "description": "Lanzas este orbe a un enemigo para aumentar el daño que sufre.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4000886b6906480f519f4a87c167bc1877b131f1dc43e8583bfc0fcf7e415904.png"
      },
      {
        "name": "Orbe de armonía",
        "description": "Lanzas este orbe a un aliado para sanarlo.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/c8e37e2f3e147fde823bb9566b57e3e20d238430f0cb4f8aa8b581525a4f225e.png"
      }
    ],
    "passives": [
      {
        "name": "Patada veloz",
        "description": "El daño de los ataques cuerpo a cuerpo aumenta un 50 % y la repulsión aumenta de forma considerable.",
        "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4bf9bae454ad8571a99b5418fe14b42b18922ca9521981797b66e9b1a9791fc7.png"
      },
      {
        "name": "SUBROL: TÁCTICO",
        "description": "Puedes acumular carga de definitiva excedente que se conserva tras usar tu habilidad definitiva."
      },
      {
        "name": "ROL: APOYO",
        "description": "Comienza a regenerar salud pasivamente más rápido tras no recibir daño."
      }
    ],
    "perks": {
      "minor": [
        {
          "name": "Reparación discordante",
          "description": "Zenyatta obtiene un 15% de robo de vida contra enemigos con Orbe de discordia.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9f317bc17cfa00574118e7a32fe2853e0a9a6fe71abcdae996dabacd58b3adf2.png"
        },
        {
          "name": "Ascensión",
          "description": "Activa y mantén el doble salto para planear hasta 3 s.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/54dffa6e3725551b4c14147386ed29351e495f2571401dbfc9e51034764025c5.png"
        }
      ],
      "major": [
        {
          "name": "Destrucción concentrada",
          "description": "El disparo secundario se carga un 20% más rápido y se puede almacenar 1 orbe de destrucción extra.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/95348852bb0e41f8e9dd66917be4d89f9536daa7afa660c9212dc3fd3ca5826e.png"
        },
        {
          "name": "Armonía dual",
          "description": "Obtienes un segundo Orbe de armonía, pero ambos sanan con una efectividad de un 70%.",
          "icon": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/9898f52ec09a2846050183112728e3baa06bd46061897644db6423f357486628.png"
        }
      ]
    },
    "accentColor": "#f0d860"
  }
};

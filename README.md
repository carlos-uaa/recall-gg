# 🛡️ RecallGG — Tactical Coach, Meta & Gaming Hub

> *"The world could always use more heroes."*  
> **RecallGG** es una plataforma táctica abierta, gratuita y comunitaria diseñada para jugadores de **Overwatch 2** (con arquitectura modular preparada para **Valorant** y **Marvel Rivals**).

---

## 🎯 ¿Qué soluciona RecallGG?
Herramientas similares en el mercado (como Overcoach de Toniki) mantienen sus funciones analíticas principales bloqueadas detrás de suscripciones de pago de Twitch. **RecallGG nace como una alternativa 100% libre, ultrarrápida (0 ms de latencia) y orientada a la comunidad**, integrando además entretenimiento gamificado y análisis algorítmico sin sesgos.

---

## ✨ Características Principales

### 1. 🎯 Asistente Táctico de Partida (Coach en Vivo)
- **Cálculo en Tiempo Real:** Introduce el mapa, tu rol, tu rango y los héroes seleccionados por ambos equipos.
- **Algoritmo Multidimensional (0 a 100):**
  - **Matchup Score:** Ponderación de counters a favor y amenazas enemigas.
  - **Synergy Score:** Bonificación por sinergias composicionales directas y armonía de arquetipo (*Brawl / Rush*, *Dive*, *Poke*).
  - **Map Fit Score:** Compatibilidad con características del mapa (High Ground, líneas de visión abiertas, choke points cerrados).
  - **Rank / Elo Modifier:** Adaptación al nivel competitivo (consistencia mecánica en rangos bajos vs techo de habilidad en Master/Top 500).
- **Modos Rápido y Táctico:** Modo exprés para consultar en el monitor secundario durante los 30 segundos de la sala de espera, o modo táctico detallado con explicación de dictamen y pros/contras.

### 2. 🎮 Recalldle (Minijuego de Adivinanza de Héroes)
- Adivina el héroe secreto en base a atributos clave:
  - **Rol:** Tanque / DPS / Apoyo.
  - **Género / Tipo:** Masculino / Femenino / No binario / Ómnico / Animal.
  - **Afiliación / Organización:** Overwatch, Talon, Junkers, Blackwatch, etc.
  - **País de Origen.**
  - **Edad y Año de Debut:** Con pistas de dirección ($\uparrow$ Mayor, $\downarrow$ Menor).
  - **Alcance de Combate:** Corto / Medio / Largo / Melee.
- **Feedback visual:** Verde (acierto), Amarillo (parcial) y Gris (desacierto).
- **Modos:** *Desafío Diario* (el mismo héroe para toda la comunidad hoy) y *Modo Práctica Libre* (héroes aleatorios continuos) con confeti de victoria y botón para compartir tus resultados en redes sociales.

### 3. 📊 Meta Actual & Tier List
- Clasificación visual (Tiers S, A, B, C, D) filtrable por rol.
- Nivel de dificultad mecánica (1 a 3 estrellas) y perks clave de cada héroe.

### 4. ⚔️ Matriz de Counters & Héroes
- Inspector individual: Selecciona cualquier héroe para ver instantáneamente a quién destruye, sus peores counters y sus mejores compañeros de equipo.

### 5. 🌐 Arquitectura Multi-Juego Modular
- Preparado estructuralmente en `src/games/` para soportar:
  - **Overwatch 2** (Activo)
  - **Marvel Rivals** (Vanguards, Estrategas y mecánicas de Team-Up)
  - **Valorant** (Sites, humos, flashes e iniciadores)

---

## 🛠️ Stack Tecnológico
- **Frontend:** React 19 + TypeScript + Vite
- **Estilos:** Tailwind CSS v4 con estética HUD gamer oscura
- **Iconografía:** Lucide React
- **Efectos:** Canvas Confetti

---

## 🚀 Instalación y Desarrollo Local

```bash
# 1. Clonar el repositorio
git clone <URL_DE_TU_REPOSITORIO>

# 2. Entrar a la carpeta
cd recall-gg

# 3. Instalar dependencias
npm install

# 4. Iniciar en modo desarrollo
npm run dev

# 5. Compilar para producción
npm run build
```

---

## 📄 Licencia
Proyecto libre de código abierto para fines educativos y comunitarios.  
*Overwatch es una marca comercial registrada de Blizzard Entertainment.*

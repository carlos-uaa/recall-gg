import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const patchNotesPath = path.join(rootDir, 'src', 'games', 'overwatch', 'patchNotes.ts');

const HERO_NAME_TO_ID = {
  'd.va': 'dva',
  'dva': 'dva',
  'doomfist': 'doomfist',
  'hazard': 'hazard',
  'winston': 'winston',
  'wrecking ball': 'wrecking-ball',
  'domina': 'domina',
  'ramattra': 'ramattra',
  'reinhardt': 'reinhardt',
  'sigma': 'sigma',
  'd.mon': 'dmon',
  'dmon': 'dmon',
  'junker queen': 'junker-queen',
  'reina junker': 'junker-queen',
  'mauga': 'mauga',
  'orisa': 'orisa',
  'roadhog': 'roadhog',
  'zarya': 'zarya',
  'ashe': 'ashe',
  'cassidy': 'cassidy',
  'emre': 'emre',
  'sierra': 'sierra',
  'sojourn': 'sojourn',
  'soldier: 76': 'soldier76',
  'soldado: 76': 'soldier76',
  'soldier76': 'soldier76',
  'widowmaker': 'widowmaker',
  'anran': 'anran',
  'genji': 'genji',
  'reaper': 'reaper',
  'shion': 'shion',
  'tracer': 'tracer',
  'vendetta': 'vendetta',
  'venture': 'venture',
  'bastion': 'bastion',
  'hanzo': 'hanzo',
  'junkrat': 'junkrat',
  'mei': 'mei',
  'symmetra': 'symmetra',
  'torbjörn': 'torbjorn',
  'torbjorn': 'torbjorn',
  'echo': 'echo',
  'freja': 'freja',
  'pharah': 'pharah',
  'ana': 'ana',
  'baptiste': 'baptiste',
  'kiriko': 'kiriko',
  'lifeweaver': 'lifeweaver',
  'moira': 'moira',
  'doctrine': 'doctrine',
  'illari': 'illari',
  'lúcio': 'lucio',
  'lucio': 'lucio',
  'sombra': 'sombra',
  'wuyang': 'wuyang',
  'zenyatta': 'zenyatta',
  'brigitte': 'brigitte',
  'mizuki': 'mizuki',
  'jetpack cat': 'jetpack-cat',
  'juno': 'juno',
  'mercy': 'mercy',
};

async function syncPatches() {
  console.log('[Sync] Consultando notas oficiales de Blizzard...');
  
  let html = '';
  try {
    const res = await fetch('https://overwatch.blizzard.com/es-es/news/patch-notes/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      }
    });
    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
    }
    html = await res.text();
  } catch (err) {
    console.error('[Sync] Error al conectar con Blizzard:', err.message);
    process.exit(1);
  }

  // Extraer el título del parche más reciente
  const titleMatch = html.match(/class="[^"]*PatchNotes-patchTitle[^"]*"[^>]*>([\s\S]*?)<\/[a-z0-9]+>/);
  if (!titleMatch) {
    console.log('[Sync] No se encontró el bloque de título de parche en la página de Blizzard.');
    return;
  }

  const patchTitle = titleMatch[1].replace(/<[^>]+>/g, '').trim();
  console.log(`[Sync] Parche más reciente en Blizzard: "${patchTitle}"`);

  // Extraer fecha del título o del elemento PatchNotes-date
  const dateMatch = html.match(/class="[^"]*PatchNotes-date[^"]*"[^>]*>([\s\S]*?)<\/[a-z0-9]+>/);
  const displayDate = dateMatch
    ? dateMatch[1].replace(/<[^>]+>/g, '').trim()
    : patchTitle.replace(/^.*–\s*/, '').trim();

  // Leer nuestro patchNotes.ts actual
  const currentContent = fs.readFileSync(patchNotesPath, 'utf8');

  // Verificar si ya tenemos este parche registrado
  if (currentContent.includes(displayDate) || currentContent.includes(patchTitle)) {
    console.log(`[Sync] El parche "${displayDate}" ya se encuentra registrado y actualizado en el sistema.`);
    if (process.env.GITHUB_OUTPUT) {
      fs.appendFileSync(process.env.GITHUB_OUTPUT, 'has_changes=false\n');
    }
    return;
  }

  console.log(`[Sync] ¡Nuevo parche detectado! Procesando cambios de balance...`);

  // Extraer héroes y cambios de habilidades
  const heroSections = [...html.matchAll(/<div class="[^"]*PatchNotesHeroUpdate[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g)];
  const heroChanges = [];
  const affectedHeroIds = new Set();

  for (const match of heroSections) {
    const block = match[1];
    const nameMatch = block.match(/class="[^"]*PatchNotesHeroUpdate-name[^"]*"[^>]*>([\s\S]*?)<\/[a-z0-9]+>/);
    if (!nameMatch) continue;

    const heroName = nameMatch[1].replace(/<[^>]+>/g, '').trim();
    const cleanKey = heroName.toLowerCase().replace(/['’]/g, '');
    const heroId = HERO_NAME_TO_ID[cleanKey];
    if (!heroId) continue;

    affectedHeroIds.add(heroId);

    // Extraer comentario de los desarrolladores si existe
    const devMatch = block.match(/class="[^"]*PatchNotesHeroUpdate-dev[^"]*"[^>]*>([\s\S]*?)<\/[a-z0-9]+>/);
    const devNotes = devMatch
      ? devMatch[1].replace(/<[^>]+>/g, '').replace(/Comentario de los desarrolladores:?\s*/i, '').trim()
      : undefined;

    // Extraer habilidades
    const abilities = [];
    const abilityMatches = [...block.matchAll(/<div class="[^"]*PatchNotesAbilityUpdate[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/g)];

    for (const abMatch of abilityMatches) {
      const abBlock = abMatch[1];
      const abNameMatch = abBlock.match(/class="[^"]*PatchNotesAbilityUpdate-name[^"]*"[^>]*>([\s\S]*?)<\/[a-z0-9]+>/);
      if (!abNameMatch) continue;

      const abilityName = abNameMatch[1].replace(/<[^>]+>/g, '').trim();

      // Detalles y viñetas
      const details = [...abBlock.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)]
        .map(m => m[1].replace(/<[^>]+>/g, '').trim())
        .join(' ');

      // Determinar impacto
      let impact = 'adjustment';
      const lowerDetails = details.toLowerCase();
      if (lowerDetails.includes('aumenta') || lowerDetails.includes('reduce el tiempo de reutilización') || lowerDetails.includes('mejora')) {
        impact = 'buff';
      } else if (lowerDetails.includes('reduce') || lowerDetails.includes('aumenta el tiempo de reutilización') || lowerDetails.includes('disminuye')) {
        impact = 'nerf';
      }

      abilities.push({
        abilityName,
        impact,
        summary: details || `Ajuste de balance en ${abilityName}.`,
      });
    }

    // Determinar impacto general
    const buffs = abilities.filter(a => a.impact === 'buff').length;
    const nerfs = abilities.filter(a => a.impact === 'nerf').length;
    const overallImpact = buffs > nerfs ? 'buff' : nerfs > buffs ? 'nerf' : 'adjustment';

    heroChanges.push({
      heroId,
      heroName,
      role: 'damage', // Normalizado por la interfaz
      subrole: 'General',
      overallImpact,
      developerNotes: devNotes,
      abilities: abilities.length > 0 ? abilities : [{ abilityName: 'Ajuste general', impact: 'adjustment', summary: 'Ajustes de calibración de balance.' }],
    });
  }

  // Generar ID único basado en la fecha
  const isoDate = new Date().toISOString().split('T')[0];
  const patchId = `patch-${isoDate}`;
  const version = patchTitle.match(/v?(\d+\.\d+(\.\d+)?)/)?.[1] || `${new Date().getFullYear()}.${new Date().getMonth() + 1}`;

  const newPatchObject = {
    id: patchId,
    version,
    date: isoDate,
    displayDate,
    title: patchTitle,
    patchType: 'balance',
    badgeLabel: 'Live Balance Update',
    summary: `Actualización oficial de balance de Overwatch 2 con cambios en ${heroChanges.length} héroes.`,
    affectedHeroIds: Array.from(affectedHeroIds),
    heroChanges,
  };

  const patchString = JSON.stringify(newPatchObject, null, 2);

  // Inserción en el array OVERWATCH_PATCHES
  const targetArrayDeclaration = 'export const OVERWATCH_PATCHES: PatchNote[] = [';
  if (currentContent.includes(targetArrayDeclaration)) {
    const updatedContent = currentContent.replace(
      targetArrayDeclaration,
      `${targetArrayDeclaration}\n  ${patchString.split('\n').join('\n  ')},`
    );
    fs.writeFileSync(patchNotesPath, updatedContent, 'utf8');
    console.log(`[Sync] ¡Nuevo parche añadido exitosamente en src/games/overwatch/patchNotes.ts!`);

    if (process.env.GITHUB_OUTPUT) {
      fs.appendFileSync(process.env.GITHUB_OUTPUT, 'has_changes=true\n');
      fs.appendFileSync(process.env.GITHUB_OUTPUT, `patch_title=${patchTitle}\n`);
    }
  }
}

syncPatches();

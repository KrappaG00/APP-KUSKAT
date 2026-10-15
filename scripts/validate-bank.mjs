#!/usr/bin/env node
/**
 * KUSKAT — Validador del banco de preguntas.
 *
 * Uso:
 *   node scripts/validate-bank.mjs            -> valida y muestra resumen (exit 1 si hay errores)
 *   node scripts/validate-bank.mjs --write    -> además regenera public/data/manifest.json
 *   node scripts/validate-bank.mjs --check    -> falla si manifest.json no coincide con los datos
 *
 * Errores (bloquean la publicación):
 *   - JSON ilegible o que no es un arreglo
 *   - Pregunta sin id, id duplicado, sin enunciado, con menos de 2 opciones,
 *     claves de opción duplicadas/vacías, clave correcta que no existe entre las opciones
 *   - subjectId / subtopicId que no existe en el currículo
 *
 * Advertencias (requieren revisión humana, no bloquean):
 *   - Explicación ausente o muy corta
 *   - Opciones con texto repetido dentro de la misma pregunta
 *   - Sección que no aparece en el currículo
 *   - Delimitadores matemáticos desbalanceados
 *   - Posible clave incorrecta (heurística: la explicación concluye con el valor de OTRA opción)
 *   - Conteos declarados en el currículo que no coinciden con los datos reales
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'public', 'data');
const args = new Set(process.argv.slice(2));

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (kind, where, msg) => warnings.push({ kind, where, msg });

function readJson(rel) {
  const p = join(DATA, rel);
  if (!existsSync(p)) {
    err(rel, 'archivo inexistente');
    return null;
  }
  try {
    return JSON.parse(readFileSync(p, 'utf8'));
  } catch (e) {
    err(rel, `JSON inválido (${e.message})`);
    return null;
  }
}

/** Normaliza texto de una opción para comparaciones (quita delimitadores, espacios y llaves). */
function norm(s) {
  return String(s ?? '')
    .replace(/\\\(|\\\)|\\\[|\\\]|\$/g, '')
    .replace(/\\text\{([^}]*)\}/g, '$1')
    .replace(/[{}\s]/g, '')
    .replace(/\\,|\\;|\\!/g, '')
    .toLowerCase();
}

/** Extrae el último número que aparece tras un "=" en la explicación. */
function finalValue(expl) {
  const m = String(expl).match(/=\s*\\?\(?\s*(-?\d+(?:[.,]\d+)?)\s*\\?\)?\s*\.?\s*$/);
  return m ? m[1].replace(',', '.') : null;
}

function checkMathBalance(text) {
  const s = String(text ?? '');
  const open = (s.match(/\\\(/g) || []).length;
  const close = (s.match(/\\\)/g) || []).length;
  const dollars = (s.replace(/\\\$/g, '').match(/\$/g) || []).length;
  return open === close && dollars % 2 === 0;
}

function validateQuestions(rel, list, ctx) {
  if (!Array.isArray(list)) {
    err(rel, 'el contenido no es un arreglo');
    return [];
  }
  if (list.length === 0) err(rel, 'archivo sin preguntas');

  const valid = [];
  list.forEach((q, i) => {
    const where = `${rel}#${i}${q && q.id ? ` (${q.id})` : ''}`;
    if (!q || typeof q !== 'object') return err(where, 'registro no es un objeto');
    let ok = true;
    if (typeof q.id !== 'string' || !q.id.trim()) { err(where, 'sin id'); ok = false; }
    if (typeof q.statement !== 'string' || !q.statement.trim()) { err(where, 'sin enunciado'); ok = false; }
    if (!Array.isArray(q.options) || q.options.length < 2) { err(where, 'menos de 2 opciones'); ok = false; }
    else {
      const keys = q.options.map((o) => o && o.key);
      if (keys.some((k) => typeof k !== 'string' || !k.trim())) { err(where, 'opción sin clave'); ok = false; }
      if (new Set(keys).size !== keys.length) { err(where, `claves de opción duplicadas (${keys.join(',')})`); ok = false; }
      if (q.options.some((o) => typeof o.text !== 'string' || !o.text.trim())) { err(where, 'opción con texto vacío'); ok = false; }
      if (!keys.includes(q.correctAnswer)) { err(where, `respuesta correcta "${q.correctAnswer}" no existe entre las opciones`); ok = false; }

      const texts = q.options.map((o) => norm(o.text));
      if (new Set(texts).size !== texts.length) warn('opciones-repetidas', where, 'hay opciones con el mismo texto');

      // Heurística de clave: la explicación termina en "= N" y N coincide con OTRA opción.
      const fv = finalValue(q.explanation);
      if (fv !== null && keys.includes(q.correctAnswer)) {
        const correctTxt = norm(q.options.find((o) => o.key === q.correctAnswer).text);
        const others = q.options.filter((o) => o.key !== q.correctAnswer && norm(o.text) === fv);
        if (others.length && correctTxt !== fv) {
          warn('posible-clave-incorrecta', where, `la explicación concluye "${fv}", que coincide con la opción ${others.map((o) => o.key).join(',')} y no con la clave ${q.correctAnswer}`);
        }
      }
    }
    if (ctx.subjects && !ctx.subjects.has(q.subjectId)) { err(where, `subjectId "${q.subjectId}" no existe en el currículo`); ok = false; }
    if (ctx.subtopics && !ctx.subtopics.has(q.subtopicId)) { err(where, `subtopicId "${q.subtopicId}" no existe en el currículo`); ok = false; }
    if (ctx.sectionsBySubtopic) {
      const secs = ctx.sectionsBySubtopic.get(q.subtopicId);
      if (secs && secs.length && !secs.includes(q.sectionTitle)) warn('seccion-desconocida', where, `sección "${q.sectionTitle}" no figura en el currículo`);
    }
    if (typeof q.explanation !== 'string' || q.explanation.trim().length < 3) warn('sin-explicacion', where, 'explicación ausente o muy corta');
    for (const [field, value] of [['statement', q.statement], ['explanation', q.explanation]]) {
      if (!checkMathBalance(value)) warn('math-desbalanceado', where, `delimitadores matemáticos desbalanceados en ${field}`);
    }
    if (ok) valid.push(q);
  });
  return valid;
}

// ---------------------------------------------------------------------------
// UES
// ---------------------------------------------------------------------------
const manifest = { generatedFrom: 'scripts/validate-bank.mjs', institutions: {} };
const allIds = new Map();

function registerIds(rel, list) {
  for (const q of list) {
    if (allIds.has(q.id)) err(rel, `id duplicado "${q.id}" (también en ${allIds.get(q.id)})`);
    else allIds.set(q.id, rel);
  }
}

const uesCur = readJson('curriculum.json');
if (uesCur) {
  const subjects = new Set(uesCur.subjects.map((s) => s.id));
  const inst = { totalQuestions: 0, subjects: {} };
  let declaredTotal = 0;
  for (const subj of uesCur.subjects) {
    const sEntry = { totalQuestions: 0, subtopics: {} };
    for (const st of subj.subtopics) {
      declaredTotal += st.questionCount || 0;
      const rel = `questions/${st.id}.json`;
      const raw = readJson(rel);
      if (!raw) continue;
      const ctx = {
        subjects,
        subtopics: new Set([st.id]),
        sectionsBySubtopic: new Map([[st.id, st.sections || []]]),
      };
      const valid = validateQuestions(rel, raw, ctx);
      registerIds(rel, valid);
      for (const q of valid) if (q.subjectId !== subj.id) err(`${rel} (${q.id})`, `subjectId "${q.subjectId}" no corresponde a la materia "${subj.id}"`);
      const sections = {};
      for (const q of valid) sections[q.sectionTitle || ''] = (sections[q.sectionTitle || ''] || 0) + 1;
      if (Array.isArray(raw) && st.questionCount !== raw.length) warn('conteo-curriculo', rel, `el currículo declara ${st.questionCount} y el archivo contiene ${raw.length}`);
      sEntry.subtopics[st.id] = { file: `/data/${rel}`, totalQuestions: valid.length, sections };
      sEntry.totalQuestions += valid.length;
    }
    inst.subjects[subj.id] = sEntry;
    inst.totalQuestions += sEntry.totalQuestions;
  }
  if (uesCur.totalQuestions !== declaredTotal) warn('conteo-curriculo', 'curriculum.json', `totalQuestions=${uesCur.totalQuestions} pero la suma de subtemas es ${declaredTotal}`);
  manifest.institutions.UES = inst;
}

// ---------------------------------------------------------------------------
// ANSP
// ---------------------------------------------------------------------------
const anspCur = readJson('ansp/curriculum.json');
if (anspCur) {
  const subjects = new Set(anspCur.subjects.map((s) => s.id));
  const inst = { totalQuestions: 0, subjects: {} };
  const perFileById = new Map();
  for (const subj of anspCur.subjects) {
    const rel = `ansp/questions/${subj.id}.json`;
    const raw = readJson(rel);
    if (!raw) continue;
    // En ANSP cada subtema del currículo se identifica en las preguntas por su título de sección.
    const sectionTitles = new Set(subj.subtopics.flatMap((st) => st.sections || [st.title]));
    const valid = validateQuestions(rel, raw, { subjects });
    registerIds(rel, valid);
    const subtopics = {};
    for (const st of subj.subtopics) subtopics[st.id] = { totalQuestions: 0, sections: {} };
    for (const q of valid) {
      perFileById.set(q.id, q);
      if (q.subjectId !== subj.id) err(`${rel} (${q.id})`, `subjectId "${q.subjectId}" no corresponde a "${subj.id}"`);
      if (!sectionTitles.has(q.sectionTitle)) warn('seccion-desconocida', `${rel} (${q.id})`, `sección "${q.sectionTitle}" no figura en el currículo`);
      const st = subj.subtopics.find((s) => (s.sections || [s.title]).includes(q.sectionTitle));
      if (st) {
        subtopics[st.id].totalQuestions++;
        subtopics[st.id].sections[q.sectionTitle] = (subtopics[st.id].sections[q.sectionTitle] || 0) + 1;
      }
    }
    for (const st of subj.subtopics) {
      if (st.questionCount !== subtopics[st.id].totalQuestions) warn('conteo-curriculo', `${rel} › ${st.id}`, `el currículo declara ${st.questionCount} y hay ${subtopics[st.id].totalQuestions}`);
    }
    if (Array.isArray(raw) && subj.totalQuestions !== raw.length) warn('conteo-curriculo', rel, `el currículo declara ${subj.totalQuestions} y el archivo contiene ${raw.length}`);
    inst.subjects[subj.id] = { file: `/data/${rel}`, totalQuestions: valid.length, subtopics };
    inst.totalQuestions += valid.length;
  }
  if (anspCur.totalQuestions !== inst.totalQuestions) warn('conteo-curriculo', 'ansp/curriculum.json', `totalQuestions=${anspCur.totalQuestions} pero hay ${inst.totalQuestions}`);

  // all.json debe ser exactamente la unión de los archivos por materia.
  const all = readJson('ansp/questions/all.json');
  if (Array.isArray(all)) {
    if (all.length !== perFileById.size) err('ansp/questions/all.json', `contiene ${all.length} preguntas y los archivos por materia suman ${perFileById.size}`);
    for (const q of all) {
      const twin = perFileById.get(q.id);
      if (!twin) err('ansp/questions/all.json', `la pregunta ${q.id} no está en ningún archivo por materia`);
      else if (twin.correctAnswer !== q.correctAnswer || twin.statement !== q.statement) err('ansp/questions/all.json', `la pregunta ${q.id} difiere de su copia por materia`);
    }
  }
  manifest.institutions.ANSP = inst;
}

manifest.totalQuestions = Object.values(manifest.institutions).reduce((a, i) => a + i.totalQuestions, 0);

// ---------------------------------------------------------------------------
// Salida
// ---------------------------------------------------------------------------
const byKind = warnings.reduce((acc, w) => ((acc[w.kind] = (acc[w.kind] || 0) + 1), acc), {});
console.log('KUSKAT · Validación del banco de preguntas');
console.log(`  Preguntas válidas: UES=${manifest.institutions.UES?.totalQuestions ?? 0}  ANSP=${manifest.institutions.ANSP?.totalQuestions ?? 0}  total=${manifest.totalQuestions}`);
console.log(`  Errores: ${errors.length}`);
console.log(`  Advertencias: ${warnings.length}`, byKind);

const reportDir = join(ROOT, 'reports');
if (!existsSync(reportDir)) mkdirSync(reportDir, { recursive: true });
writeFileSync(join(reportDir, 'bank-validation.json'), JSON.stringify({ errors, warnings, manifest }, null, 2));
console.log('  Informe detallado: reports/bank-validation.json');

if (errors.length) {
  console.log('\nPrimeros errores:');
  errors.slice(0, 25).forEach((e) => console.log('  ✗', e));
}

const manifestPath = join(DATA, 'manifest.json');
const manifestText = JSON.stringify(manifest, null, 2) + '\n';
if (args.has('--write')) {
  writeFileSync(manifestPath, manifestText);
  console.log('  manifest.json regenerado.');
}
if (args.has('--check')) {
  const current = existsSync(manifestPath) ? readFileSync(manifestPath, 'utf8') : '';
  if (current.replace(/\r\n/g, '\n') !== manifestText) {
    console.log('  ✗ public/data/manifest.json está desactualizado. Ejecuta: npm run bank:manifest');
    process.exitCode = 1;
  }
}
if (errors.length) process.exitCode = 1;

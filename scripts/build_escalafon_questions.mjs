import fs from 'node:fs';
import path from 'node:path';
import { SUBJECT_CONFIGS, outDir } from './escalafon_config.mjs';

// Generador de reactivos temáticos basados en los temarios oficiales del MINED y Tribunal Calificador
import { generateSubjectQuestions } from './escalafon_generator_helpers.mjs';

console.log('Iniciando generación de 3,300 preguntas oficiales para Escalafón Docente 2026...');

let platformTotal = 0;
const allQuestions = [];

for (const config of SUBJECT_CONFIGS) {
  console.log(`Generando banco para: ${config.name} (${config.id})...`);
  const questions = generateSubjectQuestions(config);

  if (questions.length !== 300) {
    throw new Error(`Error: ${config.id} generó ${questions.length} preguntas en vez de 300`);
  }

  // Validar unicidad de IDs y consistencia interna
  const ids = new Set();
  questions.forEach((q, idx) => {
    if (ids.has(q.id)) {
      throw new Error(`ID duplicado en ${config.id}: ${q.id}`);
    }
    ids.add(q.id);

    const keys = q.options.map(o => o.key);
    if (!keys.includes(q.correctAnswer)) {
      throw new Error(`Clave inválida en ${q.id}: ${q.correctAnswer} no está en ${keys.join(',')}`);
    }
  });

  const filePath = path.join(outDir, `${config.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(questions, null, 2), 'utf-8');
  console.log(`  -> Guardado: ${filePath} (300 preguntas)`);

  allQuestions.push(...questions);
  platformTotal += questions.length;
}

// Guardar all.json consolidado
const allFilePath = path.join(outDir, 'all.json');
fs.writeFileSync(allFilePath, JSON.stringify(allQuestions, null, 2), 'utf-8');
console.log(`Consolidado guardado: ${allFilePath} (${allQuestions.length} preguntas)`);

console.log(`\nGeneración completada exitosamente: 11 asignaturas x 300 = ${platformTotal} preguntas.`);

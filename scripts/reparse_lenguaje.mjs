import fs from 'fs';
import path from 'path';

const RAW_DIR = 'C:/Users/kg-88/.gemini/antigravity/brain/66e3eae3-025f-45af-8318-7cc6f64e2c48/scratch/orig/media_1791934986698_02f13662/scripts/raw';
const OUT_DIR = 'public/data/questions';

const files = [
  { file: 'lenguaje_2_1.txt', code: '2.1' },
  { file: 'lenguaje_2_2.txt', code: '2.2' },
  { file: 'lenguaje_2_3.txt', code: '2.3' },
  { file: 'lenguaje_2_4.txt', code: '2.4' },
  { file: 'lenguaje_2_5.txt', code: '2.5' },
];

function parseLenguajeFile(rawPath, code) {
  const content = fs.readFileSync(rawPath, 'utf-8');
  const lines = content.split('\n');

  // 1. Separar preguntas y solucionario
  const claveIdx = lines.findIndex((l) => l.includes('# CLAVE DE RESPUESTAS') || l.includes('SOLUCIONARIO'));
  const questionLines = claveIdx !== -1 ? lines.slice(0, claveIdx) : lines;
  const answerLines = claveIdx !== -1 ? lines.slice(claveIdx) : [];

  // 2. Mapear solucionario
  const answersMap = new Map();
  for (const line of answerLines) {
    const match = line.match(/^\*\*(\d+)\.\*\*\s+([A-F])\.?\s*(.*)$/);
    if (match) {
      const qNum = parseInt(match[1], 10);
      const ansKey = match[2].trim();
      const expl = match[3] ? match[3].trim() : '';
      answersMap.set(qNum, { ansKey, expl });
    }
  }

  // 3. Parsear secciones y preguntas
  const questions = [];
  let currentSectionTitle = `SECCIÓN GENERAL ${code}`;
  let i = 0;

  while (i < questionLines.length) {
    const line = questionLines[i].trim();

    if (line.startsWith('## SECCIÓN') || line.startsWith('## Secci') || line.startsWith('##SECCIÓN')) {
      const secMatch = line.match(/##\s*(SECCIÓN\s+[IVXLCDM]+:?[^\n\r]*)/i);
      if (secMatch) {
        currentSectionTitle = secMatch[1].trim();
      } else {
        currentSectionTitle = line.replace(/^##\s*/, '').trim();
      }
      i++;
      continue;
    }

    const qMatch = line.match(/^\*\*(\d+)\.\*\*\s*(.*)$/);
    if (qMatch) {
      const qNum = parseInt(qMatch[1], 10);
      let statement = qMatch[2].trim();

      i++;
      let optionsBlock = '';
      while (
        i < questionLines.length &&
        !questionLines[i].trim().match(/^\*\*(\d+)\.\*\*/) &&
        !questionLines[i].trim().startsWith('##') &&
        !questionLines[i].trim().startsWith('#')
      ) {
        const nextLine = questionLines[i].trim();
        if (
          nextLine.match(/^[A-F]\)/) ||
          nextLine.includes('A) ') ||
          optionsBlock.length > 0
        ) {
          optionsBlock += ' ' + nextLine;
        } else if (nextLine.length > 0 && !nextLine.startsWith('---')) {
          statement += ' ' + nextLine;
        }
        i++;
      }

      // Extraer opciones con regex robusto
      // Cada opción comienza con A), B), C), etc. precedida de espacio o inicio de línea
      const options = [];
      const optRegex = /(?:^|\s+)([A-F])\)\s*([\s\S]*?)(?=(?:\s+[A-F]\)|$))/g;
      let optMatch;
      while ((optMatch = optRegex.exec(optionsBlock)) !== null) {
        const key = optMatch[1];
        const text = optMatch[2].trim();
        if (text) {
          options.push({ key, text });
        }
      }

      const ansInfo = answersMap.get(qNum) || { ansKey: 'A', expl: 'Respuesta oficial.' };

      // Si por alguna razón la clave no está en las opciones encontradas, verificar
      const hasKey = options.some((o) => o.key === ansInfo.ansKey);

      questions.push({
        id: `${code}_q${qNum}`,
        number: qNum,
        subtopicId: code,
        subjectId: 'lenguaje',
        sectionTitle: currentSectionTitle,
        statement: statement.trim(),
        options,
        correctAnswer: ansInfo.ansKey,
        explanation: ansInfo.expl,
      });
      continue;
    }

    i++;
  }

  return questions;
}

for (const { file, code } of files) {
  const rawPath = path.join(RAW_DIR, file);
  const qs = parseLenguajeFile(rawPath, code);
  console.log(`Parsed ${file} (${code}): ${qs.length} questions`);

  // Escribir en public/data/questions/{code}.json
  const outPath = path.join(OUT_DIR, `${code}.json`);
  fs.writeFileSync(outPath, JSON.stringify(qs, null, 2) + '\n');
  console.log(`Saved to ${outPath}`);
}

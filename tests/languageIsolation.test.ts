import { describe, it, expect } from 'vitest';
import {
  fetchDynamicQuizPool,
  fetchSubtopicQuestions,
  getStrictFallbackQuestions,
} from '../src/services/bancoService';

// Expresión regular para caracteres Hanzi / Chinos (CJK Unified Ideographs)
const CHINESE_CHAR_REGEX = /[\u4e00-\u9fa5]/;

describe('Suite de Aislamiento Estricto de Lenguas y Materias (Cero Contaminación Cruzada)', { timeout: 35000 }, () => {
  it('1. Al solicitar el simulador para Náhuat Pipil, el 100% de los reactivos pertenecen a Náhuat y hay CERO caracteres en Mandarín/Chino', async () => {
    const pool = await fetchDynamicQuizPool({
      category: 'INGLES',
      languageId: 'nahuat',
      subjectId: 'ALL',
      subtopicId: 'ALL',
      count: 100,
    });

    expect(pool.length).toBe(100);

    for (const q of pool) {
      // Prefijo de identificación
      expect(q.subjectId).toMatch(/^nahuat_/);
      expect(q.id).toMatch(/^nahuat_/);
      expect(q.sectionTitle).toContain('Náhuat Pipil');

      // Cero caracteres chinos en enunciado, opciones ni explicaciones
      expect(CHINESE_CHAR_REGEX.test(q.statement)).toBe(false);
      expect(CHINESE_CHAR_REGEX.test(q.explanation || '')).toBe(false);
      for (const opt of q.options) {
        expect(CHINESE_CHAR_REGEX.test(opt.text)).toBe(false);
      }

      // Cero reactivos de otras lenguas
      expect(q.subjectId).not.toContain('mandarin');
      expect(q.subjectId).not.toContain('arabic');
      expect(q.subjectId).not.toContain('german');
      expect(q.subjectId).not.toContain('ingles');
      expect(q.subjectId).not.toContain('lenca');
      expect(q.subjectId).not.toContain('kakawira');
    }
  });

  it('2. Al solicitar el simulador para Mandarín, el 100% de los reactivos pertenecen a Mandarín', async () => {
    const pool = await fetchDynamicQuizPool({
      category: 'INGLES',
      languageId: 'mandarin',
      subjectId: 'ALL',
      subtopicId: 'ALL',
      count: 100,
    });

    expect(pool.length).toBe(100);

    for (const q of pool) {
      expect(q.subjectId).toMatch(/^mandarin_/);
      expect(q.id).toMatch(/^mandarin_/);
      expect(q.sectionTitle).toContain('Mandarín');

      // Cero reactivos de náhuat u otras lenguas
      expect(q.subjectId).not.toContain('nahuat');
      expect(q.subjectId).not.toContain('arabic');
      expect(q.subjectId).not.toContain('german');
      expect(q.subjectId).not.toContain('lenca');
      expect(q.subjectId).not.toContain('kakawira');
    }
  });

  it('3. Verificación de Aislamiento Bilateral Estricto entre las 7 lenguas de la Escuela de Idiomas', async () => {
    const languages = [
      { id: 'ingles', prefix: 'ingles_', name: 'Inglés' },
      { id: 'nahuat', prefix: 'nahuat_', name: 'Náhuat Pipil' },
      { id: 'lenca', prefix: 'lenca_', name: 'Lenca Potón' },
      { id: 'kakawira', prefix: 'kakawira_', name: 'Kakawira' },
      { id: 'german', prefix: 'german_', name: 'Alemán' },
      { id: 'arabic', prefix: 'arabic_', name: 'Árabe' },
      { id: 'mandarin', prefix: 'mandarin_', name: 'Mandarín' },
    ];

    for (const lang of languages) {
      const pool = await fetchDynamicQuizPool({
        category: 'INGLES',
        languageId: lang.id,
        subjectId: 'ALL',
        subtopicId: 'ALL',
        count: 50,
      });

      expect(pool.length).toBe(50);

      // Todas las preguntas pertenecen única y exclusivamente al idioma solicitado
      for (const q of pool) {
        expect(q.subjectId.startsWith(lang.prefix)).toBe(true);

        // Ningún reactivo de los otros 6 idiomas
        const otherLangs = languages.filter((l) => l.id !== lang.id);
        for (const other of otherLangs) {
          expect(q.subjectId.startsWith(other.prefix)).toBe(false);
        }
      }
    }
  }, 30000);

  it('4. fetchSubtopicQuestions con identificador puro de idioma retorna la totalidad de reactivos de ese idioma sin mezclas', async () => {
    const nahuatAll = await fetchSubtopicQuestions('INGLES', 'nahuat');
    expect(nahuatAll.length).toBe(2400);

    for (const q of nahuatAll) {
      expect(q.subjectId.startsWith('nahuat_')).toBe(true);
      expect(CHINESE_CHAR_REGEX.test(q.statement)).toBe(false);
    }

    const mandarinAll = await fetchSubtopicQuestions('INGLES', 'mandarin');
    expect(mandarinAll.length).toBe(2400);

    for (const q of mandarinAll) {
      expect(q.subjectId.startsWith('mandarin_')).toBe(true);
    }
  });

  it('5. fetchSubtopicQuestions con subtema específico (ej. nahuat_a1) retorna exactamente los 400 reactivos del nivel A1 de Náhuat', async () => {
    const nahuatA1 = await fetchSubtopicQuestions('INGLES', 'nahuat_a1');
    expect(nahuatA1.length).toBe(400);

    for (const q of nahuatA1) {
      expect(q.subtopicId).toBe('nahuat_a1');
      expect(q.subjectId).toBe('nahuat_a1');
      expect(q.sectionTitle).toContain('Náhuat Pipil • Nivel A1');
    }
  });

  it('6. Aislamiento riguroso en UES y ANSP: las materias académicas no se contaminan entre sí', () => {
    const mathFallback = getStrictFallbackQuestions('UES', 'matematicas');
    expect(mathFallback.length).toBeGreaterThan(0);
    for (const q of mathFallback) {
      expect(q.institution).toBe('UES');
      expect(q.subject.toLowerCase()).toContain('matem');
      expect(q.subject.toLowerCase()).not.toContain('biología');
      expect(q.subject.toLowerCase()).not.toContain('literatura');
    }

    const anspFallback = getStrictFallbackQuestions('ANSP');
    expect(anspFallback.length).toBeGreaterThan(0);
    for (const q of anspFallback) {
      expect(q.institution).toBe('ANSP');
    }
  });
});

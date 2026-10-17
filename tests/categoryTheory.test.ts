import { describe, it, expect } from 'vitest';
import {
  CATEGORY_THEORY_DATA,
  LANGUAGE_THEORY_DATA,
  getCategoryTheory,
  getLanguageTheory,
  countWords,
} from '../src/data/categoryTheoryData';
import { Institution } from '../src/types';

describe('Módulo Maestro de Teoría por Categoría y Bibliografía APA 7.ª Edición', () => {
  const institutions: Institution[] = ['UES', 'ESCALAFON', 'AVANZO', 'ASD', 'ENA', 'ANSP', 'INGLES'];
  const languageIds = ['english', 'nahuat', 'lenca', 'kakawira', 'german', 'arabic', 'mandarin'];

  describe('1. Verificación de Categorías Institucionales (UES, ESCALAFON, AVANZO, ASD, ENA, ANSP, INGLES)', () => {
    it.each(institutions)(
      'Categoría %s debe tener teoría con MÍNIMO 500 palabras, explicación del porqué, ejemplos y APA 7.ª',
      (inst) => {
        const theory = getCategoryTheory(inst);
        expect(theory).toBeDefined();
        expect(theory.id).toBe(inst);
        expect(theory.institution).toBe(inst);
        expect(theory.categoryName).toBeTruthy();
        expect(theory.badgeText).toBeTruthy();

        // 1. Verificación del "Porqué"
        expect(theory.whyExplanation).toBeTruthy();
        expect(theory.whyExplanation.length).toBeGreaterThan(150);
        expect(countWords(theory.whyExplanation)).toBeGreaterThanOrEqual(100);

        // 2. Verificación de Teoría y Marco Conceptual
        expect(theory.detailedTheory).toBeTruthy();
        expect(theory.detailedTheory.length).toBeGreaterThan(300);
        expect(countWords(theory.detailedTheory)).toBeGreaterThanOrEqual(200);

        // 3. Verificación de Principios Rectores
        expect(theory.keyPrinciples).toBeDefined();
        expect(theory.keyPrinciples.length).toBeGreaterThanOrEqual(3);

        // 4. Verificación de Ejemplos Modelados
        expect(theory.examples).toBeDefined();
        expect(theory.examples.length).toBeGreaterThanOrEqual(1);
        theory.examples.forEach((ex) => {
          expect(ex.title).toBeTruthy();
          expect(ex.statement).toBeTruthy();
          expect(ex.options.length).toBe(4);
          expect(['A', 'B', 'C', 'D']).toContain(ex.correctAnswer);
          expect(ex.explanation).toBeTruthy();
        });

        // 5. Verificación de Citas Bibliográficas en APA 7.ª Edición
        expect(theory.apaReferences).toBeDefined();
        expect(theory.apaReferences.length).toBeGreaterThanOrEqual(2);
        theory.apaReferences.forEach((ref) => {
          expect(ref.author).toBeTruthy();
          expect(ref.year).toBeTruthy();
          expect(ref.title).toBeTruthy();
          expect(ref.source).toBeTruthy();
          expect(ref.formattedCitation).toContain(ref.year);
          // Valida formato básico APA 7: Autor. (Año). Título. Editorial/Fuente
          expect(ref.formattedCitation).toMatch(/\(\d{4}[^\)]*\)/);
        });

        // 6. Verificación Matemática Estricta de MÍNIMO 500 PALABRAS
        const fullText = [
          theory.categoryName,
          theory.whyExplanation,
          theory.detailedTheory,
          ...theory.keyPrinciples,
          ...theory.examples.map((ex) => `${ex.statement} ${ex.explanation}`),
          ...theory.apaReferences.map((ref) => ref.formattedCitation),
        ].join(' ');

        const totalWordCount = countWords(fullText);
        expect(totalWordCount).toBeGreaterThanOrEqual(500);
        expect(theory.wordCount).toBeGreaterThanOrEqual(500);
      }
    );
  });

  describe('2. Verificación de Idiomas (Inglés, Náhuat, Lenca, Kakawira, Alemán, Árabe, Mandarín)', () => {
    it.each(languageIds)(
      'Idioma %s debe tener teoría con MÍNIMO 500 palabras, explicación del porqué, ejemplos y APA 7.ª',
      (langId) => {
        const theory = getLanguageTheory(langId);
        expect(theory).toBeDefined();
        expect(theory.id).toBe(langId);
        expect(theory.name).toBeTruthy();
        expect(theory.nativeName).toBeTruthy();
        expect(theory.flag).toBeTruthy();

        // 1. Verificación del "Porqué"
        expect(theory.whyExplanation).toBeTruthy();
        expect(countWords(theory.whyExplanation)).toBeGreaterThanOrEqual(100);

        // 2. Verificación de Teoría y Marco Conceptual
        expect(theory.detailedTheory).toBeTruthy();
        expect(countWords(theory.detailedTheory)).toBeGreaterThanOrEqual(200);

        // 3. Verificación de Principios Lingüísticos
        expect(theory.keyPrinciples.length).toBeGreaterThanOrEqual(3);

        // 4. Verificación de Ejemplos
        expect(theory.examples.length).toBeGreaterThanOrEqual(1);
        theory.examples.forEach((ex) => {
          expect(ex.title).toBeTruthy();
          expect(ex.statement).toBeTruthy();
          expect(ex.options.length).toBe(4);
          expect(['A', 'B', 'C', 'D']).toContain(ex.correctAnswer);
          expect(ex.explanation).toBeTruthy();
        });

        // 5. Citas Bibliográficas en APA 7.ª Edición
        expect(theory.apaReferences.length).toBeGreaterThanOrEqual(2);
        theory.apaReferences.forEach((ref) => {
          expect(ref.author).toBeTruthy();
          expect(ref.year).toBeTruthy();
          expect(ref.title).toBeTruthy();
          expect(ref.source).toBeTruthy();
          expect(ref.formattedCitation).toMatch(/\(\d{4}[^\)]*\)/);
        });

        // 6. Conteo de Palabras Matemático Estricto (>= 500 palabras)
        const fullText = [
          theory.name,
          theory.nativeName,
          theory.whyExplanation,
          theory.detailedTheory,
          ...theory.keyPrinciples,
          ...theory.examples.map((ex) => `${ex.statement} ${ex.explanation}`),
          ...theory.apaReferences.map((ref) => ref.formattedCitation),
        ].join(' ');

        const totalWordCount = countWords(fullText);
        expect(totalWordCount).toBeGreaterThanOrEqual(500);
        expect(theory.wordCount).toBeGreaterThanOrEqual(500);
      }
    );
  });
});

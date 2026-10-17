import { describe, it, expect } from 'vitest';
import { INSTITUTIONS_LIST, calculateScorePoints } from '../src/services/statsService';
import {
  CEFR_CURRICULUM,
  CEFRLevel,
  ENGLISH_QUESTIONS_BANK,
  GRAMMAR_DISTINCTIONS,
  PHONETIC_DISTINCTIONS,
  SPELLING_RULES,
  VOCABULARY_PAIRS,
} from '../src/data/languages/englishData';
import { LANGUAGES_CATALOG } from '../src/data/languages/languagesRegistry';
import { fetchCurriculum, getSubjectNameFromId } from '../src/services/bancoService';

describe('Módulo Maestro de IDIOMAS & Categoría INGLES en KUSKAT', () => {
  it('1. La categoría INGLES está debidamente registrada en INSTITUTIONS_LIST', () => {
    const englishInst = INSTITUTIONS_LIST.find((inst) => inst.id === 'INGLES');
    expect(englishInst).toBeDefined();
    expect(englishInst?.name).toContain('Inglés');
  });

  it('2. El catálogo de idiomas es extensible y cuenta con Inglés activo y próximos idiomas', () => {
    expect(LANGUAGES_CATALOG.length).toBeGreaterThanOrEqual(2);
    const english = LANGUAGES_CATALOG.find((l) => l.id === 'english');
    expect(english).toBeDefined();
    expect(english?.status).toBe('active');
    expect(english?.levels).toEqual(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);

    const upcoming = LANGUAGES_CATALOG.filter((l) => l.status === 'upcoming');
    expect(upcoming.length).toBeGreaterThan(0);
  });

  it('3. La teoría de inglés cubre rigurosamente los 6 niveles del MCER (A1, A2, B1, B2, C1, C2)', () => {
    const levels: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    levels.forEach((lvl) => {
      const info = CEFR_CURRICULUM[lvl];
      expect(info).toBeDefined();
      expect(info.level).toBe(lvl);
      expect(info.canDoStatements.length).toBeGreaterThan(0);
      expect(info.coreTopics.length).toBeGreaterThan(0);
      expect(info.grammarLessons.length).toBeGreaterThan(0);

      // Cada lección tiene reglas, ejemplos para US y UK, y enlace de referencia
      info.grammarLessons.forEach((lesson) => {
        expect(lesson.title).toBeTruthy();
        expect(lesson.rules.length).toBeGreaterThan(0);
        expect(lesson.examplesUS.length).toBeGreaterThan(0);
        expect(lesson.examplesUK.length).toBeGreaterThan(0);
        expect(lesson.referenceLink).toMatch(/^https?:\/\//);
      });
    });
  });

  it('4. La comparación entre American English (US) y British English (UK) está completamente desarrollada', () => {
    // Ortografía
    expect(SPELLING_RULES.length).toBeGreaterThanOrEqual(5);
    SPELLING_RULES.forEach((sr) => {
      expect(sr.pattern).toBeTruthy();
      expect(sr.us).toBeTruthy();
      expect(sr.uk).toBeTruthy();
      expect(sr.explanation).toBeTruthy();
      expect(sr.examples.length).toBeGreaterThan(0);
    });

    // Vocabulario
    expect(VOCABULARY_PAIRS.length).toBeGreaterThanOrEqual(15);
    VOCABULARY_PAIRS.forEach((vp) => {
      expect(vp.us).toBeTruthy();
      expect(vp.uk).toBeTruthy();
      expect(vp.spanish).toBeTruthy();
      expect(vp.sampleSentenceUS).toBeTruthy();
      expect(vp.sampleSentenceUK).toBeTruthy();
    });

    // Gramática estructural
    expect(GRAMMAR_DISTINCTIONS.length).toBeGreaterThanOrEqual(4);
    GRAMMAR_DISTINCTIONS.forEach((gd) => {
      expect(gd.title).toBeTruthy();
      expect(gd.ruleUS).toBeTruthy();
      expect(gd.ruleUK).toBeTruthy();
      expect(gd.exampleUS).toBeTruthy();
      expect(gd.exampleUK).toBeTruthy();
      expect(gd.pedagogicalNote).toBeTruthy();
    });

    // Fonética
    expect(PHONETIC_DISTINCTIONS.length).toBeGreaterThanOrEqual(3);
    PHONETIC_DISTINCTIONS.forEach((pd) => {
      expect(pd.topic).toBeTruthy();
      expect(pd.usBehavior).toBeTruthy();
      expect(pd.ukBehavior).toBeTruthy();
      expect(pd.examples.length).toBeGreaterThan(0);
    });
  });

  it('5. Todas las preguntas del simulador son ESTRICTAMENTE de opción múltiple (A, B, C, D)', () => {
    expect(ENGLISH_QUESTIONS_BANK.length).toBeGreaterThanOrEqual(15);

    ENGLISH_QUESTIONS_BANK.forEach((q) => {
      // Debe tener exactamente 4 opciones: A, B, C, D
      expect(q.options.length).toBe(4);
      const keys = q.options.map((o) => o.key);
      expect(keys).toEqual(['A', 'B', 'C', 'D']);

      // La respuesta correcta debe ser una de las 4 opciones válidas
      expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);

      // Cada reactivo debe contar con enunciado, justificación pedagógica y referencia
      expect(q.statement.trim().length).toBeGreaterThan(10);
      expect(q.explanation.trim().length).toBeGreaterThan(15);
      expect(q.referenceSite).toBeTruthy();

      // Ninguna pregunta evalúa audio ni escritura abierta
      expect(q.statement).not.toMatch(/escribe un ensayo|graba un audio|pronuncia/i);
    });
  });

  it('6. El banco de preguntas cita fuentes oficiales: Englisch-hilfen.de, Englishteststore.net o Agendaweb.org', () => {
    const references = ENGLISH_QUESTIONS_BANK.map((q) => q.referenceSite.toLowerCase());
    const hasEnglischHilfen = references.some((r) => r.includes('englisch-hilfen'));
    const hasEnglishTestStore = references.some((r) => r.includes('englishteststore'));
    const hasAgendaWeb = references.some((r) => r.includes('agendaweb'));

    expect(hasEnglischHilfen).toBe(true);
    expect(hasEnglishTestStore).toBe(true);
    expect(hasAgendaWeb).toBe(true);
  });

  it('7. La regla de puntaje Kuskat (+1 acierto, -2 error, tope 0) es estricta', () => {
    expect(calculateScorePoints(5, 0)).toBe(5);
    expect(calculateScorePoints(5, 1)).toBe(3); // 5 - 2 = 3
    expect(calculateScorePoints(2, 2)).toBe(0); // 2 - 4 = -2 -> 0
    expect(calculateScorePoints(0, 10)).toBe(0); // 0 - 20 = -20 -> tope 0
  });

  it('8. El servicio bancoService devuelve la malla curricular y nombres para INGLES', async () => {
    const curr = await fetchCurriculum('INGLES');
    expect(curr).toBeDefined();
    expect(curr.subjects.length).toBe(6);
    expect(curr.subjects.map((s) => s.id)).toEqual([
      'ingles_a1',
      'ingles_a2',
      'ingles_b1',
      'ingles_b2',
      'ingles_c1',
      'ingles_c2',
    ]);

    const a1Name = getSubjectNameFromId('ingles_a1', 'INGLES');
    expect(a1Name).toContain('Nivel A1');
    const c2Name = getSubjectNameFromId('ingles_c2', 'INGLES');
    expect(c2Name).toContain('Nivel C2');
  });
});

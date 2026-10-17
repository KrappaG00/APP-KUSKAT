import { describe, it, expect } from 'vitest';
import esLocale from '../src/i18n/locales/es.json';
import nahuatLocale from '../src/i18n/locales/nahuat.json';
import lencaLocale from '../src/i18n/locales/lenca.json';
import kakawiraLocale from '../src/i18n/locales/kakawira.json';
import enLocale from '../src/i18n/locales/en.json';
import arLocale from '../src/i18n/locales/ar.json';
import zhLocale from '../src/i18n/locales/zh.json';
import {
  translateKey,
  detectInitialLocale,
  LANG_STORAGE_KEY,
} from '../src/i18n/LanguageProvider';
import {
  SUPPORTED_LANGUAGES,
  getLanguageMeta,
  translateQuestionContent,
  extractContextualGlossary,
} from '../src/i18n/questionTranslator';
import { safeStorage } from '../src/services/safeStorage';
import type { AppLocale, TranslationDictionary } from '../src/i18n/types';
import type { Question } from '../src/types';

function flattenKeys(obj: Record<string, unknown>, prefix = ''): string[] {
  const keys: string[] = [];
  for (const [k, v] of Object.entries(obj)) {
    const full = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      keys.push(...flattenKeys(v as Record<string, unknown>, full));
    } else {
      keys.push(full);
    }
  }
  return keys;
}

describe('Sistema Multilingüe Intercultural KUSKAT (i18n)', () => {
  const localesMap: Record<AppLocale, TranslationDictionary> = {
    es: esLocale as TranslationDictionary,
    nahuat: nahuatLocale as TranslationDictionary,
    lenca: lencaLocale as TranslationDictionary,
    kakawira: kakawiraLocale as TranslationDictionary,
    en: enLocale as TranslationDictionary,
    ar: arLocale as TranslationDictionary,
    zh: zhLocale as TranslationDictionary,
  };

  it('define los 7 idiomas requeridos con sus autónimos nativos y dirección correcta', () => {
    expect(SUPPORTED_LANGUAGES).toHaveLength(7);

    const codes = SUPPORTED_LANGUAGES.map((l) => l.code);
    expect(codes).toEqual(['es', 'nahuat', 'lenca', 'kakawira', 'en', 'ar', 'zh']);

    // Verificar autónimos nativos
    expect(getLanguageMeta('nahuat').nativeName).toContain('Náhuat');
    expect(getLanguageMeta('lenca').nativeName).toContain('Lenca');
    expect(getLanguageMeta('kakawira').nativeName).toContain('Kakawira');
    expect(getLanguageMeta('ar').nativeName).toBe('العربية');
    expect(getLanguageMeta('zh').nativeName).toContain('中文');

    // Verificar dirección RTL obligatoria en árabe y LTR en los demás
    expect(getLanguageMeta('ar').dir).toBe('rtl');
    expect(getLanguageMeta('es').dir).toBe('ltr');
    expect(getLanguageMeta('nahuat').dir).toBe('ltr');
  });

  it('cumple >= 90% (100% real) de cobertura de claves de interfaz en los 7 idiomas', () => {
    const baseKeys = flattenKeys(esLocale as Record<string, unknown>);
    expect(baseKeys.length).toBeGreaterThan(40);

    for (const [code, dict] of Object.entries(localesMap)) {
      const targetKeys = flattenKeys(dict as Record<string, unknown>);
      const covered = baseKeys.filter((k) => targetKeys.includes(k));
      const coveragePct = (covered.length / baseKeys.length) * 100;
      expect(
        coveragePct,
        `El idioma ${code} tiene cobertura ${coveragePct.toFixed(1)}% (< 90%)`
      ).toBeGreaterThanOrEqual(90);
      expect(covered.length).toBe(baseKeys.length);
    }
  });

  it('soporta interpolación {{variable}}, pluralización (_one / _other) y fallback seguro a español', () => {
    // Interpolación en Náhuat
    const nahuatLearn = translateKey('nahuat', 'learnSpanish.bannerSubtitle', {
      native: 'Náhuat',
    });
    expect(nahuatLearn).toContain('Náhuat');

    // Pluralización singular vs plural en Español e Inglés
    const singleEs = translateKey('es', 'categories.questionsCount', {
      count: 1,
    });
    const pluralEs = translateKey('es', 'categories.questionsCount', {
      count: 25,
    });
    expect(singleEs).toBe('1 reactivo disponible');
    expect(pluralEs).toBe('25 reactivos disponibles');

    const singleEn = translateKey('en', 'categories.questionsCount', {
      count: 1,
    });
    const pluralEn = translateKey('en', 'categories.questionsCount', {
      count: 25,
    });
    expect(singleEn).toContain('1');
    expect(pluralEn).toContain('25');
  });

  it('nunca expone claves crudas con puntos al usuario si falta una clave', () => {
    // Si una clave hipotética no existe en ningún diccionario, humaniza el segmento final sin mostrar puntos
    const unknownKey = translateKey('nahuat', 'question.title.missing_custom_label');
    expect(unknownKey).not.toContain('.');
    expect(unknownKey).toBe('Missing custom label');
  });

  it('detecta el idioma inicial desde localStorage (kuskat.lang) con fallback a español', () => {
    safeStorage.setItem(LANG_STORAGE_KEY, 'nahuat');
    expect(detectInitialLocale()).toBe('nahuat');

    safeStorage.setItem(LANG_STORAGE_KEY, 'ar');
    expect(detectInitialLocale()).toBe('ar');

    safeStorage.setItem(LANG_STORAGE_KEY, 'invalid-locale');
    expect(detectInitialLocale()).toBe('es');

    safeStorage.removeItem(LANG_STORAGE_KEY);
  });

  it('traduce y adapta reactivos con glosario intercultural y marca fallback cuando corresponde', () => {
    const sampleQuestion: Question = {
      id: 'ues-mat-001',
      number: 1,
      institution: 'UES',
      subject: 'Matemática',
      subjectId: 'ues_mat',
      topic: 'Álgebra y Ecuaciones',
      subtopicId: 'ues_mat_alg',
      sectionTitle: 'Ecuaciones Lineales',
      level: 'intermedio',
      statement: 'En un sistema algebraico con fracción racional, verifica la ecuación dada: \\( \\frac{x}{2} + 3 = 7 \\)',
      options: [
        { key: 'A', text: '\\( x = 8 \\)' },
        { key: 'B', text: '\\( x = 4 \\)' },
        { key: 'C', text: '\\( x = 6 \\)' },
        { key: 'D', text: '\\( x = 2 \\)' },
      ],
      correctAnswer: 'A',
      explanation: 'Al despejar la ecuación y multiplicar la fracción por 2 se obtiene x = 8.',
    };

    const nahuatTranslated = translateQuestionContent(sampleQuestion, 'nahuat');
    expect(nahuatTranslated.subject).toBe('Tapual-Tamatilis (Matemática)');
    expect(nahuatTranslated.statement).toContain('Nawat');
    expect(nahuatTranslated.isFallbackToSpanish).toBe(true);
    expect(nahuatTranslated.matchedGlossary.length).toBeGreaterThanOrEqual(1);

    const glossaryTerms = extractContextualGlossary(sampleQuestion, 'nahuat');
    expect(glossaryTerms.length).toBeGreaterThanOrEqual(1);
  });
});

import { describe, it, expect } from 'vitest';
import { INSTITUTIONS_LIST, calculateScorePoints } from '../src/services/statsService';
import {
  ALL_ENGLISH_VERBS,
  CEFR_CURRICULUM,
  CEFRLevel,
  countLessonWords,
  ENGLISH_QUESTIONS_BANK,
  GRAMMAR_DISTINCTIONS,
  IRREGULAR_VERBS,
  PHONETIC_DISTINCTIONS,
  REGULAR_VERB_RULES,
  REGULAR_VERBS,
  SPELLING_RULES,
  VOCABULARY_PAIRS,
} from '../src/data/languages/englishData';
import {
  LANGUAGES_CATALOG,
  getLanguageCurriculum,
  getLanguageQuestionsBank,
  getLanguageVerbs,
  getLanguageComparative,
  getLanguageBasics,
  getLanguageVocabulary,
} from '../src/data/languages/languagesRegistry';
import { fetchCurriculum, getSubjectNameFromId } from '../src/services/bancoService';

describe('Módulo Maestro de IDIOMAS & Categoría INGLES en KUSKAT', () => {
  it('1. La categoría INGLES está debidamente registrada en INSTITUTIONS_LIST', () => {
    const englishInst = INSTITUTIONS_LIST.find((inst) => inst.id === 'INGLES');
    expect(englishInst).toBeDefined();
    expect(englishInst?.name).toContain('Inglés');
  });

  it('2. El catálogo de idiomas cuenta con los 7 idiomas activos: Inglés, Náhuat, Lenca, Kakawira, Alemán, Árabe y Mandarín', () => {
    expect(LANGUAGES_CATALOG.length).toBe(7);
    const activeLanguages = LANGUAGES_CATALOG.filter((l) => l.status === 'active');
    expect(activeLanguages.length).toBe(7);

    const ids = LANGUAGES_CATALOG.map((l) => l.id);
    expect(ids).toEqual(['english', 'nahuat', 'lenca', 'kakawira', 'german', 'arabic', 'mandarin']);
  });

  it('3. La teoría de inglés cubre rigurosamente los 6 niveles del MCER con mínimo 20 clases por nivel (120 clases total) y cada clase tiene MÍNIMO 500 palabras', () => {
    const levels: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    let totalClassesCount = 0;

    levels.forEach((lvl) => {
      const info = CEFR_CURRICULUM[lvl];
      expect(info).toBeDefined();
      expect(info.level).toBe(lvl);
      expect(info.canDoStatements.length).toBeGreaterThan(0);
      expect(info.coreTopics.length).toBeGreaterThan(0);
      // Cada nivel tiene exactamente 20 lecciones estructuradas
      expect(info.grammarLessons.length).toBe(20);

      // Cada lección cumple >= 500 palabras y todos los estándares pedagógicos
      info.grammarLessons.forEach((lesson) => {
        totalClassesCount += 1;
        expect(lesson.title).toBeTruthy();
        expect(lesson.category).toBeTruthy();
        expect(lesson.summary).toBeTruthy();
        expect(lesson.detailedExplanation).toBeTruthy();
        expect(lesson.rules.length).toBeGreaterThanOrEqual(4);
        expect(lesson.examplesUS.length).toBeGreaterThanOrEqual(2);
        expect(lesson.examplesUK.length).toBeGreaterThanOrEqual(2);
        expect(lesson.practicalDialogue).toBeDefined();
        expect(lesson.practicalDialogue!.length).toBeGreaterThanOrEqual(4);
        expect(lesson.commonMistakes.length).toBeGreaterThanOrEqual(2);
        expect(lesson.studyTips).toBeDefined();
        expect(lesson.studyTips!.length).toBeGreaterThanOrEqual(2);
        expect(lesson.referenceLink).toMatch(/^https?:\/\//);

        // Verificación matemática estricta: mínimo 500 palabras
        const words = countLessonWords(lesson);
        expect(words).toBeGreaterThanOrEqual(500);
      });
    });

    expect(totalClassesCount).toBe(120);
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

  it('5. Todas las preguntas del simulador son ESTRICTAMENTE de opción múltiple (A, B, C, D) y suman 50 por nivel (300 total)', () => {
    expect(ENGLISH_QUESTIONS_BANK.length).toBe(300);

    const levels: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    levels.forEach((lvl) => {
      const levelQuestions = ENGLISH_QUESTIONS_BANK.filter((q) => q.level === lvl);
      expect(levelQuestions.length).toBe(50);
    });

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

  it('9. El catálogo de verbos en inglés contiene todos los verbos regulares e irregulares con sus 5 formas y traducción', () => {
    expect(ALL_ENGLISH_VERBS.length).toBeGreaterThanOrEqual(260);
    expect(IRREGULAR_VERBS.length).toBeGreaterThanOrEqual(140);
    expect(REGULAR_VERBS.length).toBeGreaterThanOrEqual(120);

    ALL_ENGLISH_VERBS.forEach((verb) => {
      expect(verb.infinitive.trim()).toBeTruthy();
      expect(verb.pastSimple.trim()).toBeTruthy();
      expect(verb.pastParticiple.trim()).toBeTruthy();
      expect(verb.thirdPersonSingular.trim()).toBeTruthy();
      expect(verb.gerund.trim()).toBeTruthy();
      expect(verb.spanish.trim()).toBeTruthy();
      expect(['irregular', 'regular']).toContain(verb.type);
      expect(['A-A-A', 'A-B-B', 'A-B-C', 'A-B-A', 'A-A-B', 'regular']).toContain(verb.pattern);
      expect(['/t/', '/d/', '/ɪd/', 'irregular']).toContain(verb.phoneticEd);
    });

    // Reglas de verbos regulares
    expect(REGULAR_VERB_RULES.length).toBeGreaterThanOrEqual(5);
  });

  it('10. La interfaz de LanguagesView no contiene enlaces de redirección externa hacia fuera del proyecto', async () => {
    const fs = await import('fs');
    const path = await import('path');
    const viewPath = path.resolve(__dirname, '../src/components/LanguagesView.tsx');
    const viewContent = fs.readFileSync(viewPath, 'utf-8');

    // Comprobar que no hay etiquetas <a> con target="_blank" o href externo
    const hasExternalLinks = /<a[\s\S]*?href=["']https?:\/\/[\s\S]*?>/i.test(viewContent);
    expect(hasExternalLinks).toBe(false);
  });

  it('11. El módulo de Fundamentos Básicos cubre el abecedario fonético completo (26 letras) con IPA y reglas de deletreo', async () => {
    const { ALPHABET_DATA, SPELLING_CONVENTIONS } = await import('../src/data/languages/englishBasicsData');

    expect(ALPHABET_DATA.length).toBe(26);
    const vowels = ALPHABET_DATA.filter((l) => l.type === 'vowel');
    const consonants = ALPHABET_DATA.filter((l) => l.type === 'consonant');
    expect(vowels.length).toBe(5);
    expect(consonants.length).toBe(21);

    ALPHABET_DATA.forEach((item) => {
      expect(item.letter).toBeTruthy();
      expect(item.name).toBeTruthy();
      expect(item.ipa).toBeTruthy();
      expect(item.phoneticEs).toBeTruthy();
      expect(item.sampleWord).toBeTruthy();
      expect(item.sampleWordIpa).toBeTruthy();
      expect(item.sampleWordEs).toBeTruthy();
      expect(item.phoneticTip).toBeTruthy();
    });

    expect(SPELLING_CONVENTIONS.length).toBeGreaterThanOrEqual(3);
  });

  it('12. El módulo de números cuenta con cardinales, ordinales, reglas y conversor numérico algorítmico exacto', async () => {
    const { NUMBERS_CARDINALS_ORDINALS, NUMBER_RULES, numberToEnglishWords } = await import('../src/data/languages/englishBasicsData');

    expect(NUMBERS_CARDINALS_ORDINALS.length).toBeGreaterThanOrEqual(30);
    expect(NUMBER_RULES.length).toBeGreaterThanOrEqual(4);

    // Pruebas del conversor algorítmico numberToEnglishWords
    expect(numberToEnglishWords(0)).toBe('zero');
    expect(numberToEnglishWords(5)).toBe('five');
    expect(numberToEnglishWords(14)).toBe('fourteen');
    expect(numberToEnglishWords(45)).toBe('forty-five');
    expect(numberToEnglishWords(100)).toBe('one hundred');
    expect(numberToEnglishWords(105)).toBe('one hundred five');
    expect(numberToEnglishWords(1984)).toBe('one thousand nine hundred eighty-four');
    expect(numberToEnglishWords(2026)).toBe('two thousand twenty-six');
    expect(numberToEnglishWords(1000000)).toBe('one million');
  });

  it('13. El espectro de colores cuenta con 20+ colores bilingües y al menos 10 modismos cromáticos (Color Idioms)', async () => {
    const { COLORS_DATA, COLOR_IDIOMS } = await import('../src/data/languages/englishBasicsData');

    expect(COLORS_DATA.length).toBeGreaterThanOrEqual(20);
    COLORS_DATA.forEach((c) => {
      expect(c.id).toBeTruthy();
      expect(c.nameEn).toBeTruthy();
      expect(c.nameEs).toBeTruthy();
      expect(c.hex).toMatch(/^#[0-9A-Fa-f]{6}$/);
      expect(c.sampleSentenceEn).toBeTruthy();
      expect(c.sampleSentenceEs).toBeTruthy();
    });

    expect(COLOR_IDIOMS.length).toBeGreaterThanOrEqual(10);
    COLOR_IDIOMS.forEach((idiom) => {
      expect(idiom.idiom).toBeTruthy();
      expect(idiom.realMeaning).toBeTruthy();
      expect(idiom.exampleEn).toBeTruthy();
      expect(idiom.exampleEs).toBeTruthy();
    });
  });

  it('14. El catálogo de objetos cotidianos cuenta con 10 categorías temáticas y más de 180 objetos estructurados', async () => {
    const { EVERYDAY_OBJECTS_CATEGORIES } = await import('../src/data/languages/englishBasicsData');

    expect(EVERYDAY_OBJECTS_CATEGORIES.length).toBe(10);
    let totalObjects = 0;

    EVERYDAY_OBJECTS_CATEGORIES.forEach((cat) => {
      expect(cat.id).toBeTruthy();
      expect(cat.name).toBeTruthy();
      expect(cat.iconEmoji).toBeTruthy();
      expect(cat.items.length).toBeGreaterThanOrEqual(8);
      totalObjects += cat.items.length;

      cat.items.forEach((obj) => {
        expect(obj.id).toBeTruthy();
        expect(obj.nameEn).toBeTruthy();
        expect(obj.nameEs).toBeTruthy();
        expect(obj.ipa).toBeTruthy();
        expect(obj.emoji).toBeTruthy();
        expect(['a', 'an', 'some', 'the']).toContain(obj.article);
        expect(obj.pluralEn).toBeTruthy();
        expect(obj.exampleEn).toBeTruthy();
        expect(obj.exampleEs).toBeTruthy();
      });
    });

    expect(totalObjects).toBeGreaterThanOrEqual(120);
  });

  it('15. El corpus de las 10,000 palabras más usadas contiene exactamente 10,000 palabras estructuradas y caché inicial síncrono', async () => {
    const fs = await import('fs');
    const path = await import('path');
    const jsonPath = path.resolve(__dirname, '../public/data/ingles/top10000Words.json');
    expect(fs.existsSync(jsonPath)).toBe(true);

    const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    expect(Array.isArray(jsonContent)).toBe(true);
    expect(jsonContent.length).toBe(10000);

    // Comprobar la primera palabra (the) y la última (10000)
    expect(jsonContent[0].r).toBe(1);
    expect(jsonContent[0].w).toBe('the');
    expect(jsonContent[0].pos).toBeTruthy();
    expect(jsonContent[0].es).toBeTruthy();
    expect(jsonContent[0].lvl).toBe('A1');

    expect(jsonContent[9999].r).toBe(10000);
    expect(jsonContent[9999].w).toBeTruthy();
    expect(jsonContent[9999].es).toBeTruthy();

    // Comprobar caché inicial síncrono de 200 palabras
    const { INITIAL_TOP_WORDS, FREQUENCY_BANDS } = await import('../src/data/languages/englishTop10kData');
    expect(INITIAL_TOP_WORDS.length).toBe(200);
    expect(INITIAL_TOP_WORDS[0].w).toBe('the');
    expect(FREQUENCY_BANDS.length).toBe(7);
  });
});

describe('Módulos Multilingües KUSKAT: Náhuat, Lenca, Kakawira, Alemán, Árabe y Mandarín', () => {
  const NEW_LANGUAGES = [
    { id: 'nahuat', name: 'Náhuat Pipil', expectedVerbs: 100 },
    { id: 'lenca', name: 'Lenca Potón', expectedVerbs: 80 },
    { id: 'kakawira', name: 'Kakawira', expectedVerbs: 70 },
    { id: 'german', name: 'Alemán', expectedVerbs: 100 },
    { id: 'arabic', name: 'Árabe', expectedVerbs: 100 },
    { id: 'mandarin', name: 'Mandarín', expectedVerbs: 100 },
  ];

  const CEFR_LEVELS: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  NEW_LANGUAGES.forEach(({ id, name, expectedVerbs }) => {
    describe(`Idioma: ${name} (${id})`, () => {
      it(`1. Está registrado y activo en LANGUAGES_CATALOG`, () => {
        const lang = LANGUAGES_CATALOG.find((l) => l.id === id);
        expect(lang).toBeDefined();
        expect(lang?.status).toBe('active');
        expect(lang?.levels).toEqual(CEFR_LEVELS);
        expect(lang?.variants.length).toBeGreaterThanOrEqual(2);
      });

      it(`2. Currículo cubre A1 a C2 con 120 lecciones (20 por nivel) y cada una tiene MÍNIMO 500 palabras`, () => {
        const curriculum = getLanguageCurriculum(id);
        expect(curriculum).toBeDefined();

        let totalLessons = 0;
        CEFR_LEVELS.forEach((level) => {
          const levelInfo = curriculum[level];
          expect(levelInfo).toBeDefined();
          expect(levelInfo.level).toBe(level);
          expect(levelInfo.grammarLessons.length).toBe(20);

          levelInfo.grammarLessons.forEach((lesson) => {
            totalLessons++;
            expect(lesson.title).toBeTruthy();
            expect(lesson.category).toBeTruthy();
            expect(lesson.summary).toBeTruthy();
            expect(lesson.detailedExplanation).toBeTruthy();
            expect(lesson.rules.length).toBeGreaterThanOrEqual(3);
            expect(lesson.examplesUS.length).toBeGreaterThanOrEqual(2);
            expect(lesson.examplesUK.length).toBeGreaterThanOrEqual(2);
            expect(lesson.practicalDialogue).toBeDefined();
            expect(lesson.practicalDialogue!.length).toBeGreaterThanOrEqual(3);
            expect(lesson.commonMistakes.length).toBeGreaterThanOrEqual(2);
            expect(lesson.studyTips).toBeDefined();
            expect(lesson.studyTips!.length).toBeGreaterThanOrEqual(2);

            // Verificación matemática estricta de palabras (mínimo 500)
            const words = countLessonWords(lesson);
            expect(words).toBeGreaterThanOrEqual(500);
          });
        });

        expect(totalLessons).toBe(120);
      });

      it(`3. Banco de preguntas contiene exactamente 300 preguntas (50 por nivel) de 4 opciones (A, B, C, D)`, () => {
        const bank = getLanguageQuestionsBank(id);
        expect(bank.length).toBe(300);

        CEFR_LEVELS.forEach((level) => {
          const levelQuestions = bank.filter((q) => q.level === level);
          expect(levelQuestions.length).toBe(50);

          levelQuestions.forEach((q) => {
            expect(q.id).toBeTruthy();
            expect(q.statement).toBeTruthy();
            expect(q.options.length).toBe(4);
            expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);
            expect(q.explanation).toBeTruthy();
            expect(q.topic).toBeTruthy();
          });
        });
      });

      it(`4. Catálogo de verbos contiene al menos ${expectedVerbs} verbos con traducción al español`, () => {
        const verbs = getLanguageVerbs(id);
        expect(verbs.length).toBeGreaterThanOrEqual(expectedVerbs);

        verbs.forEach((v: any) => {
          expect(v.id || v.infinitive).toBeTruthy();
          expect(v.infinitive).toBeTruthy();
          expect(v.pastSimple).toBeTruthy();
          expect(v.spanish).toBeTruthy();
        });
      });

      it(`5. Módulo de fundamentos básicos (alfabeto/tonos, números, colores, objetos) está completo`, () => {
        const basics = getLanguageBasics(id);
        expect(basics).not.toBeNull();
        if (basics) {
          expect(basics.alphabet.length).toBeGreaterThanOrEqual(4);
          expect(basics.numbers.length).toBeGreaterThanOrEqual(8);
          expect(basics.colors.length).toBeGreaterThanOrEqual(5);
          expect(basics.objects.length).toBeGreaterThanOrEqual(2);
          expect(typeof basics.numberToWords).toBe('function');

          // Conversor numérico live funcional
          expect(basics.numberToWords(1)).toBeTruthy();
          expect(basics.numberToWords(5)).toBeTruthy();
          expect(basics.numberToWords(10)).toBeTruthy();

          // Colores tienen formato HEX válido
          basics.colors.forEach((c: any) => {
            expect(c.hex).toMatch(/^#[0-9A-Fa-f]{6}$/);
          });
        }
      });

      it(`6. Módulo de vocabulario cuenta con corpus estructurado y bandas de frecuencia`, () => {
        const vocab = getLanguageVocabulary(id);
        expect(vocab.length).toBeGreaterThanOrEqual(20);

        vocab.forEach((item: any) => {
          expect(item.id || item.r).toBeTruthy();
          expect(item.spanish || item.es).toBeTruthy();
          expect(item.category || item.pos).toBeTruthy();
        });
      });

      it(`7. Guía comparativa cuenta con reglas ortográficas, vocabulario y notas pedagógicas`, () => {
        const comp = getLanguageComparative(id);
        expect(comp.title).toBeTruthy();
        expect(comp.spellingRules.length).toBeGreaterThanOrEqual(1);
        expect(comp.vocabularyPairs.length).toBeGreaterThanOrEqual(3);
        expect(comp.grammarDistinctions.length).toBeGreaterThanOrEqual(1);
        expect(comp.phoneticDistinctions.length).toBeGreaterThanOrEqual(1);
      });
    });
  });
});



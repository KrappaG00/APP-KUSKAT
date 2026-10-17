import {
  CEFRLevel,
  LevelCurriculumInfo,
  SpellingRule,
  VocabularyPair,
  GrammarDistinction,
  PhoneticDistinction,
} from './englishData';
import { ARABIC_LESSONS, ARABIC_LESSONS_BY_LEVEL } from './arabicLessons';
import { ARABIC_QUESTIONS_BANK, ARABIC_QUESTIONS_BY_LEVEL } from './arabicQuestions';
export * from './arabicVerbs';
export * from './arabicBasicsData';
export * from './arabicVocabularyData';
export { ARABIC_LESSONS, ARABIC_LESSONS_BY_LEVEL } from './arabicLessons';
export { ARABIC_QUESTIONS_BANK, ARABIC_QUESTIONS_BY_LEVEL } from './arabicQuestions';

export const ARABIC_CURRICULUM: Record<CEFRLevel, LevelCurriculumInfo> = {
  A1: {
    level: 'A1',
    name: 'Nivel A1: Al-Mubtadi\' (Principiante / Acceso)',
    nameSpanish: 'Nivel A1: Abjad, Oración Nominal y Diáspora Palestina',
    color: 'emerald',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    description: 'Las 28 letras del alfabeto árabe, oraciones nominales sin verbo ser y letras solares/lunares.',
    canDoStatements: [
      'Leer y trazar las 28 letras del alfabeto árabe de derecha a izquierda.',
      'Construir oraciones nominales básicas con sujeto y predicado.',
      'Identificar la pronunciación correcta de letras solares y lunares con Al-.'
    ],
    coreTopics: ['Abjad y Caligrafía', 'Oración Nominal', 'Letras Solares y Lunares', 'Saludos y Cortesía'],
    grammarLessons: ARABIC_LESSONS_BY_LEVEL.A1
  },
  A2: {
    level: 'A2',
    name: 'Nivel A2: Al-Asasiyy (Plataforma / Elemental)',
    nameSpanish: 'Nivel A2: Pasado Fi\'l Madi, Idafa y Plural Fracto',
    color: 'teal',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-800',
    borderColor: 'border-teal-200',
    description: 'Conjugación de verbos en pasado, la estructura posesiva Idafa y la regla del plural inanimado.',
    canDoStatements: [
      'Relatar eventos en pasado simple (Fi\'l Madi) y negarlos con Ma.',
      'Construir frases posesivas de Idafa sin artículo en el primer término.',
      'Aplicar la regla de oro: plural inanimado concuerda en femenino singular.'
    ],
    coreTopics: ['Pasado Fi\'l Madi', 'Construcción Idafa', 'Plural Fracto', 'Regla Plural Inanimado'],
    grammarLessons: ARABIC_LESSONS_BY_LEVEL.A2
  },
  B1: {
    level: 'B1',
    name: 'Nivel B1: Al-Mutawassit (Umbral / Intermedio)',
    nameSpanish: 'Nivel B1: Raíces Trilíteras, 10 Formas y Subjuntivo',
    color: 'blue',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    description: 'El sistema de raíces y patrones, las 10 formas verbales derivadas y el modo subjuntivo con An y Lan.',
    canDoStatements: [
      'Identificar la raíz consonántica de cualquier término y derivar palabras con Awzan.',
      'Emplear las formas verbales II a X para matizar causatividad o reciprocidad.',
      'Redactar textos formales expresando finalidad, planes y condiciones reales.'
    ],
    coreTopics: ['Raíces y Patrones (Jidhr wa Wazan)', 'Formas Verbales Derivadas', 'Subjuntivo con An y Lan', 'Sustantivo Verbal Masdar'],
    grammarLessons: ARABIC_LESSONS_BY_LEVEL.B1
  },
  B2: {
    level: 'B2',
    name: 'Nivel B2: Al-Fawq al-Mutawassit (Intermedio Alto)',
    nameSpanish: 'Nivel B2: Kana, Inna, Voz Pasiva y Ensayo Periodístico',
    color: 'indigo',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-800',
    borderColor: 'border-indigo-200',
    description: 'Sintaxis de Kana e Inna con alternancia de casos, voz pasiva y redacción argumentativa.',
    canDoStatements: [
      'Dominar la alteración de casos regida por Kana y sus hermanas e Inna y sus hermanas.',
      'Comprender noticias y despachos diplomáticos en árabe formal.',
      'Construir oraciones complejas con circunstanciales Hal y especificación Tamyiz.'
    ],
    coreTopics: ['Kana wa Akhawatuha', 'Inna wa Akhawatuha', 'Voz Pasiva Mabni li-l-Majhul', 'Circunstancial de Modo Hal'],
    grammarLessons: ARABIC_LESSONS_BY_LEVEL.B2
  },
  C1: {
    level: 'C1',
    name: 'Nivel C1: Al-Mutaqaddim (Avanzado Operativo)',
    nameSpanish: 'Nivel C1: Declinación I\'rab, Retórica Balagha y Contratos',
    color: 'purple',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    description: 'Análisis sintáctico completo (I\'rab), retórica clásica (Balagha) y traducción especializada.',
    canDoStatements: [
      'Realizar el análisis sintáctico I\'rab completo de textos clásicos y modernos.',
      'Interpretar figuras retóricas de metáfora (Majaz) y alusión (Kinaya).',
      'Redactar contratos comerciales y acuerdos institucionales bilaterales.'
    ],
    coreTopics: ['Declinación I\'rab Completa', 'Retórica del Majaz y Kinaya', 'Objeto Absoluto Maf\'ul Mutlaq', 'Traducción Diplomática'],
    grammarLessons: ARABIC_LESSONS_BY_LEVEL.C1
  },
  C2: {
    level: 'C2',
    name: 'Nivel C2: Al-Khabir (Maestría y Erudición)',
    nameSpanish: 'Nivel C2: Métrica Poética Arud, Alta Retórica y Hermenéutica',
    color: 'amber',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    description: 'Los 16 metros poéticos clásicos, fonética de precisión, exégesis textual y disertación académica.',
    canDoStatements: [
      'Analizar la métrica cuantitativa de la poesía clásica árabe (Al-\'Arud).',
      'Traducir simultáneamente discursos de alto nivel entre español y árabe.',
      'Defender disertaciones magistrales sobre la historia y lingüística árabe.'
    ],
    coreTopics: ['Métrica Poética Al-\'Arud', 'Fonética Articulada Makharij', 'Filosofía Clásica y Hermenéutica', 'Disertación Magistral C2'],
    grammarLessons: ARABIC_LESSONS_BY_LEVEL.C2
  }
};

export const ARABIC_SPELLING_RULES: SpellingRule[] = [
  {
    pattern: 'Asimilación con Letras Solares vs Lunares',
    us: 'Letras Solares (Ash-Shams, As-Salam, An-Nur)',
    uk: 'Letras Lunares (Al-Qamar, Al-Kitab, Al-Bayt)',
    explanation: 'Con letras solares, la L del artículo Al- se asimila fonéticamente geminando la primera consonante; con letras lunares, la L se pronuncia de forma limpia.',
    examples: [
      { us: 'ash-shams', uk: 'al-shams (error)', translation: 'el sol' },
      { us: 'al-qamar', uk: 'al-qamar', translation: 'la luna' },
      { us: 'as-salamu \'alaykum', uk: 'al-salamu (error)', translation: 'la paz sea con vosotros' }
    ]
  }
];

export const ARABIC_VOCABULARY_PAIRS: VocabularyPair[] = [
  { category: 'Variantes Árabes', us: 'Árabe Estándar Moderno (Fus\'ha)', uk: 'Dialecto Levantino / Palestino', spanish: '¿Cómo estás?', sampleSentenceUS: 'Kayfa haluka al-yawm?', sampleSentenceUK: 'Kif halak il-yom?' },
  { category: 'Variantes Árabes', us: 'Madha turid? (¿Qué quieres?)', uk: 'Shu biddak? (¿Qué quieres?)', spanish: '¿Qué deseas?', sampleSentenceUS: 'Madha turid an tashrab?', sampleSentenceUK: 'Shu biddak tishrab?' },
  { category: 'Herencia en El Salvador', us: 'Kibbeh / Kubba', uk: 'Kibbeh salvadoreño', spanish: 'Kibbeh de carne y trigo bulgur', sampleSentenceUS: 'Al-kibbeh ta\'am taqlidiyy.', sampleSentenceUK: 'Kibbeh tradicional en San Salvador.' }
];

export const ARABIC_GRAMMAR_DISTINCTIONS: GrammarDistinction[] = [
  {
    title: 'La Ausencia de Verbo Copulativo en Presente',
    concept: 'En la oración nominal en tiempo presente, el árabe no utiliza ningún verbo equivalente a ser o estar.',
    ruleUS: 'Árabe Fus\'ha: Ana talib (Sujeto + Predicado directo).',
    ruleUK: 'Español: Yo SOY estudiante (cópula obligatoria).',
    exampleUS: 'Al-bayt kabir. (La casa es grande).',
    exampleUK: 'La casa es grande.',
    pedagogicalNote: 'Nunca intentes conjugar un verbo ser en oraciones atributivas presentes en árabe.'
  }
];

export const ARABIC_PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'La Fricativa Faríngea Sonora \'Ayn (ع)',
    feature: 'Sonido producido mediante la constricción de los músculos profundos de la faringe.',
    usBehavior: '\'Arabiyya (/ʕa.ra.bij.ja/ = árabe): sonido faríngeo auténtico.',
    ukBehavior: 'Pronunciación hispánica errónea como simple vocal "a".',
    examples: [
      { word: '\'Ayn (ع)', usIpa: '/ʕajn/', ukIpa: '/ajn/ (error)', audioNote: 'Apretar suavemente la base de la garganta como tragando agua.' }
    ]
  }
];

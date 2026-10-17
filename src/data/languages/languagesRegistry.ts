/**
 * APP-KUSKAT • REGISTRO MAESTRO DE IDIOMAS
 *
 * Arquitectura modular y extensible para el aprendizaje de idiomas,
 * adaptada pedagógicamente para hablantes de español de El Salvador.
 *
 * Idiomas activos:
 * 1. Inglés (English - US & UK)
 * 2. Náhuat (Pipil de El Salvador - Witzapan / Cuisnahuat)
 * 3. Lenca (Potón de El Salvador - Guatajiagua / Chilanga)
 * 4. Kakawira (Cacaopera de El Salvador - Morazán)
 * 5. Alemán (Deutsch - Hochdeutsch & DACH)
 * 6. Árabe (Al-'Arabiyya - Fus'ha & Diáspora Palestina en El Salvador)
 * 7. Mandarín (Pǔtōnghuà - Chino Estándar & Comunidad China-Salvadoreña)
 */

import {
  CEFR_CURRICULUM,
  CEFRLevel,
  ENGLISH_QUESTIONS_BANK,
  GRAMMAR_DISTINCTIONS,
  LanguageQuestion,
  LevelCurriculumInfo,
  PHONETIC_DISTINCTIONS,
  SPELLING_RULES,
  VOCABULARY_PAIRS,
  ALL_ENGLISH_VERBS,
} from './englishData';

import {
  NAHUAT_CURRICULUM,
  NAHUAT_QUESTIONS_BANK,
  NAHUAT_VERBS_CATALOGUE,
  NAHUAT_SPELLING_RULES,
  NAHUAT_VOCABULARY_PAIRS,
  NAHUAT_GRAMMAR_DISTINCTIONS,
  NAHUAT_PHONETIC_DISTINCTIONS,
  NAHUAT_ALPHABET_DATA,
  NAHUAT_NUMBERS_DATA,
  NAHUAT_COLORS_DATA,
  NAHUAT_OBJECTS_CATEGORIES,
  NAHUAT_VOCABULARY_CORPUS,
  numberToNahuatWords,
} from './nahuatData';

import {
  LENCA_CURRICULUM,
  LENCA_QUESTIONS_BANK,
  LENCA_VERBS_CATALOGUE,
  LENCA_SPELLING_RULES,
  LENCA_VOCABULARY_PAIRS,
  LENCA_GRAMMAR_DISTINCTIONS,
  LENCA_PHONETIC_DISTINCTIONS,
  LENCA_ALPHABET_DATA,
  LENCA_NUMBERS_DATA,
  LENCA_COLORS_DATA,
  LENCA_OBJECTS_CATEGORIES,
  LENCA_VOCABULARY_CORPUS,
  numberToLencaWords,
} from './lencaData';

import {
  KAKAWIRA_CURRICULUM,
  KAKAWIRA_QUESTIONS_BANK,
  KAKAWIRA_VERBS_CATALOGUE,
  KAKAWIRA_SPELLING_RULES,
  KAKAWIRA_VOCABULARY_PAIRS,
  KAKAWIRA_GRAMMAR_DISTINCTIONS,
  KAKAWIRA_PHONETIC_DISTINCTIONS,
  KAKAWIRA_ALPHABET_DATA,
  KAKAWIRA_NUMBERS_DATA,
  KAKAWIRA_COLORS_DATA,
  KAKAWIRA_OBJECTS_CATEGORIES,
  KAKAWIRA_VOCABULARY_CORPUS,
  numberToKakawiraWords,
} from './kakawiraData';

import {
  GERMAN_CURRICULUM,
  GERMAN_QUESTIONS_BANK,
  GERMAN_VERBS_CATALOGUE,
  GERMAN_SPELLING_RULES,
  GERMAN_VOCABULARY_PAIRS,
  GERMAN_GRAMMAR_DISTINCTIONS,
  GERMAN_PHONETIC_DISTINCTIONS,
  GERMAN_ALPHABET_DATA,
  GERMAN_NUMBERS_DATA,
  GERMAN_COLORS_DATA,
  GERMAN_OBJECTS_CATEGORIES,
  GERMAN_VOCABULARY_CORPUS,
  numberToGermanWords,
} from './germanData';

import {
  ARABIC_CURRICULUM,
  ARABIC_QUESTIONS_BANK,
  ARABIC_VERBS_CATALOGUE,
  ARABIC_SPELLING_RULES,
  ARABIC_VOCABULARY_PAIRS,
  ARABIC_GRAMMAR_DISTINCTIONS,
  ARABIC_PHONETIC_DISTINCTIONS,
  ARABIC_ALPHABET_DATA,
  ARABIC_NUMBERS_DATA,
  ARABIC_COLORS_DATA,
  ARABIC_OBJECTS_CATEGORIES,
  ARABIC_VOCABULARY_CORPUS,
  numberToArabicWords,
} from './arabicData';

import {
  MANDARIN_CURRICULUM,
  MANDARIN_QUESTIONS_BANK,
  MANDARIN_VERBS_CATALOGUE,
  MANDARIN_SPELLING_RULES,
  MANDARIN_VOCABULARY_PAIRS,
  MANDARIN_GRAMMAR_DISTINCTIONS,
  MANDARIN_PHONETIC_DISTINCTIONS,
  MANDARIN_TONES_DATA,
  MANDARIN_NUMBERS_DATA,
  MANDARIN_COLORS_DATA,
  MANDARIN_OBJECTS_CATEGORIES,
  MANDARIN_VOCABULARY_CORPUS,
  numberToMandarinWords,
} from './mandarinData';

export interface LanguageManifest {
  id: string;
  name: string;
  flag: string;
  nativeName: string;
  status: 'active' | 'upcoming';
  description: string;
  variants: {
    id: string;
    name: string;
    code: string;
    flag: string;
    description: string;
  }[];
  levels: CEFRLevel[];
  stats: {
    theoryLessonsCount: number;
    comparativeRulesCount: number;
    vocabularyTermsCount: number;
    questionsCount: number;
    verbsCount: number;
  };
}

export const LANGUAGES_CATALOG: LanguageManifest[] = [
  {
    id: 'english',
    name: 'Inglés',
    nativeName: 'English',
    flag: '🇬🇧 / 🇺🇸',
    status: 'active',
    description:
      'Programa integral de inglés basado en el MCER / CEFR (A1-C2) con desglose comparativo riguroso entre Inglés Americano (US) e Inglés Británico (UK).',
    variants: [
      { id: 'US', name: 'Inglés Americano (US)', code: 'en-US', flag: '🇺🇸', description: 'Ortografía Webster, participio gotten y pronunciación rótica.' },
      { id: 'UK', name: 'Inglés Británico (UK)', code: 'en-GB', flag: '🇬🇧', description: 'Ortografía Oxford/Cambridge, Present Perfect estricto y no rótico.' },
      { id: 'ALL', name: 'Guía Comparativa (US vs. UK)', code: 'en-COMP', flag: '🌐', description: 'Análisis contrastivo de ortografía, fonética, vocabulario y sintaxis.' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    stats: {
      theoryLessonsCount: 120,
      comparativeRulesCount: SPELLING_RULES.length + GRAMMAR_DISTINCTIONS.length + PHONETIC_DISTINCTIONS.length,
      vocabularyTermsCount: VOCABULARY_PAIRS.length,
      questionsCount: ENGLISH_QUESTIONS_BANK.length,
      verbsCount: ALL_ENGLISH_VERBS.length,
    },
  },
  {
    id: 'nahuat',
    name: 'Náhuat Pipil',
    nativeName: 'Nawat (Pipil de Cuscatlán)',
    flag: '🇸🇻',
    status: 'active',
    description:
      'Lengua originaria ancestral de la región occidental y central de El Salvador (Witzapan, Cuisnahuat, Izalco, Nahuizalco). 120 clases completas de A1 a C2 orientadas a hablantes de español salvadoreño.',
    variants: [
      { id: 'WITZAPAN', name: 'Variante Witzapan (Santo Domingo)', code: 'naw-WITZ', flag: '🇸🇻', description: 'Norma de Santo Domingo de Guzmán con rica tradición oral de nanas y tatas.' },
      { id: 'CUISNAHUAT', name: 'Variante Cuisnahuat / Izalco', code: 'naw-CUIS', flag: '🇸🇻', description: 'Variante de los izalcos y la cordillera del Bálsamo con rasgos arcaicos.' },
      { id: 'ALL', name: 'Norma Estandarizada IRIN/MINED', code: 'naw-STD', flag: '🌐', description: 'Ortografía unificada oficial con la letra K y fonología pipil estandarizada.' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    stats: {
      theoryLessonsCount: 120,
      comparativeRulesCount: NAHUAT_SPELLING_RULES.length + NAHUAT_GRAMMAR_DISTINCTIONS.length + NAHUAT_PHONETIC_DISTINCTIONS.length,
      vocabularyTermsCount: NAHUAT_VOCABULARY_PAIRS.length,
      questionsCount: NAHUAT_QUESTIONS_BANK.length,
      verbsCount: NAHUAT_VERBS_CATALOGUE.length,
    },
  },
  {
    id: 'lenca',
    name: 'Lenca Potón',
    nativeName: 'Potón (Lenca de Guatajiagua)',
    flag: '🇸🇻',
    status: 'active',
    description:
      'Lengua originaria ancestral del oriente salvadoreño (Guatajiagua, Chilanga, Morazán). Estructura SOV, léxico del barro negro y cosmovisión lenca.',
    variants: [
      { id: 'GUATAJIAGUA', name: 'Variante Guatajiagua (Morazán)', code: 'len-GUAT', flag: '🏺', description: 'Cuna de la alfarería tradicional del barro negro y preservación de raíces potonas.' },
      { id: 'CHILANGA', name: 'Variante Chilanga', code: 'len-CHIL', flag: '⛰️', description: 'Variante histórica de las serranías de Morazán.' },
      { id: 'ALL', name: 'Norma de Revitalización Potón', code: 'len-STD', flag: '🌐', description: 'Reconstrucción lingüística de la comunidad indígena de Guatajiagua.' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    stats: {
      theoryLessonsCount: 120,
      comparativeRulesCount: LENCA_SPELLING_RULES.length + LENCA_GRAMMAR_DISTINCTIONS.length + LENCA_PHONETIC_DISTINCTIONS.length,
      vocabularyTermsCount: LENCA_VOCABULARY_PAIRS.length,
      questionsCount: LENCA_QUESTIONS_BANK.length,
      verbsCount: LENCA_VERBS_CATALOGUE.length,
    },
  },
  {
    id: 'kakawira',
    name: 'Kakawira',
    nativeName: 'Kakawira (Cacaopera)',
    flag: '🇸🇻',
    status: 'active',
    description:
      'Lengua originaria de la familia Misumalpa en Cacaopera (Morazán). Vinculada a la Danza de los Emplumados, río Torola y toponimia sagrada.',
    variants: [
      { id: 'CACAOPERA', name: 'Cacaopera Tradicional (Morazán)', code: 'kaka-MOR', flag: '🪶', description: 'Cuna de la Danza de los Emplumados y memoria histórica viva de ADIK.' },
      { id: 'ALL', name: 'Norma Lingüística Misumalpa', code: 'kaka-STD', flag: '🌐', description: 'Patrimonio de la familia lingüística Misumalpa de Cacaopera.' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    stats: {
      theoryLessonsCount: 120,
      comparativeRulesCount: KAKAWIRA_SPELLING_RULES.length + KAKAWIRA_GRAMMAR_DISTINCTIONS.length + KAKAWIRA_PHONETIC_DISTINCTIONS.length,
      vocabularyTermsCount: KAKAWIRA_VOCABULARY_PAIRS.length,
      questionsCount: KAKAWIRA_QUESTIONS_BANK.length,
      verbsCount: KAKAWIRA_VERBS_CATALOGUE.length,
    },
  },
  {
    id: 'german',
    name: 'Alemán',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    status: 'active',
    description:
      'Curso completo de Alemán (A1-C2) para hispanohablantes salvadoreños: Regla de posición 2 (V2), 4 casos (Nominativ, Akkusativ, Dativ, Genitiv), declinación de adjetivos y variantes DACH.',
    variants: [
      { id: 'DE', name: 'Alemán Estándar (Hochdeutsch)', code: 'de-DE', flag: '🇩🇪', description: 'Norma federal de Alemania e instituciones europeas.' },
      { id: 'AT', name: 'Alemán Austriaco (Österreichisch)', code: 'de-AT', flag: '🇦🇹', description: 'Variante de Austria con particularidades léxicas y saludos tradicionales.' },
      { id: 'CH', name: 'Alemán Suizo (Schweizerhochdeutsch)', code: 'de-CH', flag: '🇨🇭', description: 'Norma escrita en Suiza (sin eszett ß).' },
      { id: 'ALL', name: 'Guía Comparativa DACH', code: 'de-COMP', flag: '🌐', description: 'Análisis contrastivo entre variantes de Alemania, Austria y Suiza.' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    stats: {
      theoryLessonsCount: 120,
      comparativeRulesCount: GERMAN_SPELLING_RULES.length + GERMAN_GRAMMAR_DISTINCTIONS.length + GERMAN_PHONETIC_DISTINCTIONS.length,
      vocabularyTermsCount: GERMAN_VOCABULARY_PAIRS.length,
      questionsCount: GERMAN_QUESTIONS_BANK.length,
      verbsCount: GERMAN_VERBS_CATALOGUE.length,
    },
  },
  {
    id: 'arabic',
    name: 'Árabe',
    nativeName: 'اللغة العربية الفصحى',
    flag: '🇸🇻🇵🇸',
    status: 'active',
    description:
      'Árabe Estándar Moderno (Fus\'ha) con especial valoración de la comunidad palestino-salvadoreña de Belén y Jerusalén. Raíces trilíteras, 28 letras del Abjad y regla del plural inanimado.',
    variants: [
      { id: 'FUSHA', name: 'Árabe Estándar Moderno (Fus\'ha)', code: 'ar-MSA', flag: '🌐', description: 'La lengua literaria, periodística y oficial de los 22 países de la Liga Árabe.' },
      { id: 'SHAMI', name: 'Árabe Levantino / Palestino (\'Ammiyya)', code: 'ar-LEV', flag: '🇵🇸', description: 'El dialecto de la diáspora salvadoreña de Belén, Jerusalén y Beit Jala.' },
      { id: 'ALL', name: 'Guía Fus\'ha vs. Levantino', code: 'ar-COMP', flag: '🇸🇻', description: 'Comparativa pedagógica entre la norma escrita y la lengua viva de la comunidad.' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    stats: {
      theoryLessonsCount: 120,
      comparativeRulesCount: ARABIC_SPELLING_RULES.length + ARABIC_GRAMMAR_DISTINCTIONS.length + ARABIC_PHONETIC_DISTINCTIONS.length,
      vocabularyTermsCount: ARABIC_VOCABULARY_PAIRS.length,
      questionsCount: ARABIC_QUESTIONS_BANK.length,
      verbsCount: ARABIC_VERBS_CATALOGUE.length,
    },
  },
  {
    id: 'mandarin',
    name: 'Mandarín',
    nativeName: '普通话 / 现代标准汉语',
    flag: '🇸🇻🇨🇳',
    status: 'active',
    description:
      'Chino Mandarín Estándar (Pǔtōnghuà) adaptado para hispanohablantes salvadoreños: 4 tonos con mnemotecnias salvadoreñas, clasificadores nominales, gramática sin conjugaciones y lazos con la comunidad china.',
    variants: [
      { id: 'PUTONGHUA', name: 'Mandarín Simplificado (Pǔtōnghuà)', code: 'zh-CN', flag: '🇨🇳', description: 'Estándar oficial nacional de China continental y negocios globales.' },
      { id: 'TRADITIONAL', name: 'Caracteres Tradicionales (Fántǐzì)', code: 'zh-TW', flag: '🇭🇰', description: 'Preservado en Taiwán, Hong Kong y la memoria histórica de la primera diáspora.' },
      { id: 'ALL', name: 'Guía Integral Pǔtōnghuà', code: 'zh-COMP', flag: '🌐', description: 'Comparativa de fonética Pinyin, trazos y registros coloquial vs escrito.' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    stats: {
      theoryLessonsCount: 120,
      comparativeRulesCount: MANDARIN_SPELLING_RULES.length + MANDARIN_GRAMMAR_DISTINCTIONS.length + MANDARIN_PHONETIC_DISTINCTIONS.length,
      vocabularyTermsCount: MANDARIN_VOCABULARY_PAIRS.length,
      questionsCount: MANDARIN_QUESTIONS_BANK.length,
      verbsCount: MANDARIN_VERBS_CATALOGUE.length,
    },
  },
];

/**
 * Retorna el currículum pedagógico completo (A1 a C2) según el idioma seleccionado.
 */
export function getLanguageCurriculum(languageId: string): Record<CEFRLevel, LevelCurriculumInfo> {
  switch (languageId) {
    case 'nahuat':
      return NAHUAT_CURRICULUM;
    case 'lenca':
      return LENCA_CURRICULUM;
    case 'kakawira':
      return KAKAWIRA_CURRICULUM;
    case 'german':
      return GERMAN_CURRICULUM;
    case 'arabic':
      return ARABIC_CURRICULUM;
    case 'mandarin':
      return MANDARIN_CURRICULUM;
    case 'english':
    default:
      return CEFR_CURRICULUM;
  }
}

/**
 * Retorna el banco de 300 preguntas oficiales de selección múltiple según el idioma seleccionado.
 */
export function getLanguageQuestionsBank(languageId: string): LanguageQuestion[] {
  switch (languageId) {
    case 'nahuat':
      return NAHUAT_QUESTIONS_BANK;
    case 'lenca':
      return LENCA_QUESTIONS_BANK;
    case 'kakawira':
      return KAKAWIRA_QUESTIONS_BANK;
    case 'german':
      return GERMAN_QUESTIONS_BANK;
    case 'arabic':
      return ARABIC_QUESTIONS_BANK;
    case 'mandarin':
      return MANDARIN_QUESTIONS_BANK;
    case 'english':
    default:
      return ENGLISH_QUESTIONS_BANK;
  }
}

/**
 * Retorna el catálogo completo de verbos conjugados según el idioma seleccionado.
 */
export function getLanguageVerbs(languageId: string): any[] {
  switch (languageId) {
    case 'nahuat':
      return NAHUAT_VERBS_CATALOGUE;
    case 'lenca':
      return LENCA_VERBS_CATALOGUE;
    case 'kakawira':
      return KAKAWIRA_VERBS_CATALOGUE;
    case 'german':
      return GERMAN_VERBS_CATALOGUE;
    case 'arabic':
      return ARABIC_VERBS_CATALOGUE;
    case 'mandarin':
      return MANDARIN_VERBS_CATALOGUE;
    case 'english':
    default:
      return ALL_ENGLISH_VERBS;
  }
}

/**
 * Retorna las reglas comparativas y pares de vocabulario según el idioma seleccionado.
 */
export function getLanguageComparative(languageId: string) {
  switch (languageId) {
    case 'nahuat':
      return {
        title: 'Guía Comparativa Náhuat (Witzapan vs. Cuisnahuat vs. IRIN)',
        spellingRules: NAHUAT_SPELLING_RULES,
        vocabularyPairs: NAHUAT_VOCABULARY_PAIRS,
        grammarDistinctions: NAHUAT_GRAMMAR_DISTINCTIONS,
        phoneticDistinctions: NAHUAT_PHONETIC_DISTINCTIONS,
      };
    case 'lenca':
      return {
        title: 'Guía Comparativa Lenca Potón (Guatajiagua vs. Chilanga)',
        spellingRules: LENCA_SPELLING_RULES,
        vocabularyPairs: LENCA_VOCABULARY_PAIRS,
        grammarDistinctions: LENCA_GRAMMAR_DISTINCTIONS,
        phoneticDistinctions: LENCA_PHONETIC_DISTINCTIONS,
      };
    case 'kakawira':
      return {
        title: 'Guía Comparativa Kakawira (Cacaopera Misumalpa vs. Castellano)',
        spellingRules: KAKAWIRA_SPELLING_RULES,
        vocabularyPairs: KAKAWIRA_VOCABULARY_PAIRS,
        grammarDistinctions: KAKAWIRA_GRAMMAR_DISTINCTIONS,
        phoneticDistinctions: KAKAWIRA_PHONETIC_DISTINCTIONS,
      };
    case 'german':
      return {
        title: 'Guía Comparativa Alemán (Hochdeutsch vs. Österreichisch vs. Schweizerdeutsch)',
        spellingRules: GERMAN_SPELLING_RULES,
        vocabularyPairs: GERMAN_VOCABULARY_PAIRS,
        grammarDistinctions: GERMAN_GRAMMAR_DISTINCTIONS,
        phoneticDistinctions: GERMAN_PHONETIC_DISTINCTIONS,
      };
    case 'arabic':
      return {
        title: 'Guía Comparativa Árabe (Fus\'ha vs. Árabe Levantino / Palestino de El Salvador)',
        spellingRules: ARABIC_SPELLING_RULES,
        vocabularyPairs: ARABIC_VOCABULARY_PAIRS,
        grammarDistinctions: ARABIC_GRAMMAR_DISTINCTIONS,
        phoneticDistinctions: ARABIC_PHONETIC_DISTINCTIONS,
      };
    case 'mandarin':
      return {
        title: 'Guía Comparativa Mandarín (Pǔtōnghuà vs. Caracteres Tradicionales / Registro)',
        spellingRules: MANDARIN_SPELLING_RULES,
        vocabularyPairs: MANDARIN_VOCABULARY_PAIRS,
        grammarDistinctions: MANDARIN_GRAMMAR_DISTINCTIONS,
        phoneticDistinctions: MANDARIN_PHONETIC_DISTINCTIONS,
      };
    case 'english':
    default:
      return {
        title: 'Guía Comparativa (Inglés Americano US vs. Británico UK)',
        spellingRules: SPELLING_RULES,
        vocabularyPairs: VOCABULARY_PAIRS,
        grammarDistinctions: GRAMMAR_DISTINCTIONS,
        phoneticDistinctions: PHONETIC_DISTINCTIONS,
      };
  }
}

/**
 * Retorna los módulos de fundamentos (Alfabeto/Tonos, Números, Colores, Objetos) para cualquier idioma.
 */
export function getLanguageBasics(languageId: string) {
  switch (languageId) {
    case 'nahuat':
      return {
        alphabet: NAHUAT_ALPHABET_DATA,
        numbers: NAHUAT_NUMBERS_DATA,
        colors: NAHUAT_COLORS_DATA,
        objects: NAHUAT_OBJECTS_CATEGORIES,
        numberToWords: numberToNahuatWords,
        systemType: 'vigesimal' as const,
      };
    case 'lenca':
      return {
        alphabet: LENCA_ALPHABET_DATA,
        numbers: LENCA_NUMBERS_DATA,
        colors: LENCA_COLORS_DATA,
        objects: LENCA_OBJECTS_CATEGORIES,
        numberToWords: numberToLencaWords,
        systemType: 'decimal' as const,
      };
    case 'kakawira':
      return {
        alphabet: KAKAWIRA_ALPHABET_DATA,
        numbers: KAKAWIRA_NUMBERS_DATA,
        colors: KAKAWIRA_COLORS_DATA,
        objects: KAKAWIRA_OBJECTS_CATEGORIES,
        numberToWords: numberToKakawiraWords,
        systemType: 'decimal' as const,
      };
    case 'german':
      return {
        alphabet: GERMAN_ALPHABET_DATA,
        numbers: GERMAN_NUMBERS_DATA,
        colors: GERMAN_COLORS_DATA,
        objects: GERMAN_OBJECTS_CATEGORIES,
        numberToWords: numberToGermanWords,
        systemType: 'inverted_tens' as const,
      };
    case 'arabic':
      return {
        alphabet: ARABIC_ALPHABET_DATA,
        numbers: ARABIC_NUMBERS_DATA,
        colors: ARABIC_COLORS_DATA,
        objects: ARABIC_OBJECTS_CATEGORIES,
        numberToWords: numberToArabicWords,
        systemType: 'eastern_arabic' as const,
      };
    case 'mandarin':
      return {
        alphabet: MANDARIN_TONES_DATA,
        numbers: MANDARIN_NUMBERS_DATA,
        colors: MANDARIN_COLORS_DATA,
        objects: MANDARIN_OBJECTS_CATEGORIES,
        numberToWords: numberToMandarinWords,
        systemType: 'hanzi_pinyin' as const,
      };
    case 'english':
    default:
      return null; // English usa EnglishBasicsView nativo existente
  }
}

/**
 * Retorna el corpus de vocabulario según el idioma seleccionado.
 */
export function getLanguageVocabulary(languageId: string): any[] {
  switch (languageId) {
    case 'nahuat':
      return NAHUAT_VOCABULARY_CORPUS;
    case 'lenca':
      return LENCA_VOCABULARY_CORPUS;
    case 'kakawira':
      return KAKAWIRA_VOCABULARY_CORPUS;
    case 'german':
      return GERMAN_VOCABULARY_CORPUS;
    case 'arabic':
      return ARABIC_VOCABULARY_CORPUS;
    case 'mandarin':
      return MANDARIN_VOCABULARY_CORPUS;
    case 'english':
    default:
      return []; // English carga async sus 10,000 palabras en EnglishTop10kView
  }
}

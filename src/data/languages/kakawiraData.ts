import { CEFRLevel, LevelCurriculumInfo, SpellingRule, VocabularyPair, GrammarDistinction, PhoneticDistinction } from './englishData';
import { KAKAWIRA_LESSONS_BY_LEVEL } from './kakawiraLessons';
import { KAKAWIRA_QUESTIONS_BANK, KAKAWIRA_QUESTIONS_BY_LEVEL } from './kakawiraQuestions';
export * from './kakawiraVerbs';
export * from './kakawiraBasicsData';
export * from './kakawiraVocabularyData';
export { KAKAWIRA_LESSONS_BY_LEVEL } from './kakawiraLessons';
export { KAKAWIRA_QUESTIONS_BANK, KAKAWIRA_QUESTIONS_BY_LEVEL } from './kakawiraQuestions';

export const KAKAWIRA_CURRICULUM: Record<CEFRLevel, LevelCurriculumInfo> = {
  A1: {
    level: 'A1',
    name: 'Nivel A1: Asun (El Hogar / Inicio)',
    nameSpanish: 'Nivel A1: Saludos, Sintaxis SOV y Danza de Emplumados',
    color: 'emerald',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    description: 'Saludos tradicionales de Cacaopera, pronombres personales y números del 1 al 10.',
    canDoStatements: [
      'Saludar en Kakawira con respeto a los mayores de Cacaopera.',
      'Construir oraciones cotidianas con orden Sujeto-Objeto-Verbo.',
      'Conocer el vocabulario de la Danza de los Emplumados y la familia.'
    ],
    coreTopics: ['Saludos de Cacaopera', 'Pronombres Yam, Man, An', 'Orden SOV', 'Danza de Emplumados'],
    grammarLessons: KAKAWIRA_LESSONS_BY_LEVEL.A1
  },
  A2: {
    level: 'A2',
    name: 'Nivel A2: Wapa (El Fuego / Plataforma)',
    nameSpanish: 'Nivel A2: Pretérito, Futuro y Máscaras Tradicionales',
    color: 'teal',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-800',
    borderColor: 'border-teal-200',
    description: 'Tiempos verbales del pasado y futuro, posposiciones y Danza de los Negritos.',
    canDoStatements: [
      'Narrar faenas campesinas en pasado en el río Torola.',
      'Usar posposiciones espaciales y temporales.',
      'Describir la elaboración de máscaras de madera tradicionales.'
    ],
    coreTopics: ['Tiempos del Pasado', 'Posposiciones Espaciales', 'Danza de los Negritos', 'Río Torola'],
    grammarLessons: KAKAWIRA_LESSONS_BY_LEVEL.A2
  },
  B1: {
    level: 'B1',
    name: 'Nivel B1: Li (El Agua / Umbral Intermedio)',
    nameSpanish: 'Nivel B1: Causatividad, Pasiva y Tronco Misumalpa',
    color: 'blue',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    description: 'Morfología causativa, relaciones con el Matagalpa y cantos ceremoniales.',
    canDoStatements: [
      'Comprender la filiación Misumalpa del pueblo Kakawira.',
      'Interpretar los sones de pito y tamboril de Morazán.',
      'Elaborar discursos de bienvenida en la Casa Comunal.'
    ],
    coreTopics: ['Causativos', 'Tronco Misumalpa', 'Etnomusicología', 'Asamblea Comunal ADIK'],
    grammarLessons: KAKAWIRA_LESSONS_BY_LEVEL.B1
  },
  B2: {
    level: 'B2',
    name: 'Nivel B2: Yau (La Tierra / Intermedio Alto)',
    nameSpanish: 'Nivel B2: Polisíntesis y Cosmogonía del Torola',
    color: 'indigo',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-800',
    borderColor: 'border-indigo-200',
    description: 'Estructuras polisintéticas complejas, medicina tradicional y poesía de resistencia.',
    canDoStatements: [
      'Comparar variantes históricas del enclave de Morazán.',
      'Expresar conceptos filosóficos sobre el fuego (wapa) y el viento.',
      'Redactar crónicas sobre la memoria histórica de Cacaopera.'
    ],
    coreTopics: ['Polisíntesis Avanzada', 'Filosofía del Fuego', 'Toponimia de Cacaopera', 'Crónica de Memoria'],
    grammarLessons: KAKAWIRA_LESSONS_BY_LEVEL.B2
  },
  C1: {
    level: 'C1',
    name: 'Nivel C1: Wirika (El Ave Sagrada / Avanzado)',
    nameSpanish: 'Nivel C1: Oratoria Sagrada y Etnolingüística',
    color: 'purple',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    description: 'Oratoria en el Consejo de Ancianos, análisis de fuentes de Pedro Geoffroy Rivas.',
    canDoStatements: [
      'Pronunciar oraciones formales en las fiestas tradicionales de agosto.',
      'Analizar los textos de Walter Lehmann y Campbell sobre el Kakawira.',
      'Diseñar metodologías de revitalización cultural para escuelas.'
    ],
    coreTopics: ['Consejo de Ancianos', 'Hermenéutica de Cantos', 'Fuentes Filológicas', 'Pedagogía Indígena'],
    grammarLessons: KAKAWIRA_LESSONS_BY_LEVEL.C1
  },
  C2: {
    level: 'C2',
    name: 'Nivel C2: Danza Mayor (Maestría y Trascendencia)',
    nameSpanish: 'Nivel C2: Reconstrucción Mayor y Eternidad Kakawira',
    color: 'amber',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    description: 'Reconstrucción lingüística integral, epopeya de los danzantes emplumados y sabiduría ancestral.',
    canDoStatements: [
      'Pronunciar discursos magistrales sin interferencia del español.',
      'Traducir obras literarias al Kakawira de El Salvador.',
      'Liderar la preservación etnolingüística en Morazán.'
    ],
    coreTopics: ['Discurso Magistral', 'Epopeya de los Danzantes', 'Diccionario Mayor Kakawira', 'Eternidad Kakawira'],
    grammarLessons: KAKAWIRA_LESSONS_BY_LEVEL.C2
  }
};

export const KAKAWIRA_SPELLING_RULES: SpellingRule[] = [
  {
    pattern: 'Grafemas del Alfabeto Kakawira',
    us: 'Norma ADIK Cacaopera (burbur, wirika, asun)',
    uk: 'Grafías Coloniales Hispanizadas',
    explanation: 'El alfabeto oficial impulsado por la Asociación de Desarrollo Indígena Kakawira preserva los fonemas puros de la lengua.',
    examples: [
      { us: 'wirika', uk: 'huirica', translation: 'guacamaya' },
      { us: 'burbur', uk: 'bulbul', translation: 'blanco' }
    ]
  }
];

export const KAKAWIRA_VOCABULARY_PAIRS: VocabularyPair[] = [
  { category: 'Términos de Cacaopera', us: 'Cacaopera Tradicional', uk: 'Tronco Misumalpa', spanish: 'Agua del río', sampleSentenceUS: 'Yam li am tik Cacaopera.', sampleSentenceUK: 'Apik li am tik río Torola.' },
  { category: 'Términos de Cacaopera', us: 'wirika (guacamaya)', uk: 'tocado de plumas', spanish: 'Plumas sagradas', sampleSentenceUS: 'Wali wirika plumas.', sampleSentenceUK: 'Danza ka plumas.' },
  { category: 'Términos de Cacaopera', us: 'wapa (fuego del hogar)', uk: 'taltikpak (tierra sagrada)', spanish: 'Elementos del cosmos', sampleSentenceUS: 'Puk ne wapa tik asun.', sampleSentenceUK: 'Yar ne taltikpak pal Morazán.' }
];

export const KAKAWIRA_GRAMMAR_DISTINCTIONS: GrammarDistinction[] = [
  {
    title: 'Sujeto - Objeto - Verbo en Familia Misumalpa',
    concept: 'En Kakawira, el predicado verbal se sitúa al final de la oración.',
    ruleUS: 'Kakawira: Yam li am (Yo agua bebo).',
    ruleUK: 'Español: Yo bebo agua (SVO).',
    exampleUS: 'Yam wirika ita.',
    exampleUK: 'Yo veo la guacamaya.',
    pedagogicalNote: 'Respeta el orden SOV para preservar la sintaxis ancestral de Cacaopera.'
  }
];

export const KAKAWIRA_PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'La consonante W /w/ en Kakawira',
    feature: 'Sonido suave aproximante labiovelar.',
    usBehavior: 'Wirika (/wiˈri.ka/ = guacamaya).',
    ukBehavior: 'Wapa (/ˈwa.pa/ = fuego).',
    examples: [
      { word: 'wirika', usIpa: '/wiˈri.ka/', ukIpa: '/wi.ri.ka/', audioNote: 'Pronunciación ceremonial de Cacaopera.' }
    ]
  }
];

export const KAKAWIRA_OBJECT_CATEGORIES = [
  {
    id: 'kaka_ceremonia',
    name: 'Danza de los Emplumados y Ritos',
    iconEmoji: '🪶',
    items: [
      { id: 'ko1', nameEn: 'wirika', nameEs: 'plumas de guacamaya', ipa: '/wiˈri.ka/', emoji: '🪶', article: 'some', pluralEn: 'wirika', exampleEn: 'Burbur ne wirika plumas.', exampleEs: 'Blancas y hermosas son las plumas.' },
      { id: 'ko2', nameEn: 'corona', nameEs: 'corona ceremonial', ipa: '/koˈro.na/', emoji: '👑', article: 'a', pluralEn: 'corona-kuna', exampleEn: 'Corona pal danza.', exampleEs: 'Corona para la danza sagrada.' },
      { id: 'ko3', nameEn: 'sonaja', nameEs: 'sonaja de ayaka', ipa: '/soˈna.ha/', emoji: '🪇', article: 'a', pluralEn: 'sonaja-kuna', exampleEn: 'Sonaja pal ayaka.', exampleEs: 'Sonaja ceremonial de ayaka.' },
      { id: 'ko4', nameEn: 'tambor', nameEs: 'tambor de madera', ipa: '/tamˈbor/', emoji: '🥁', article: 'a', pluralEn: 'tambor-kuna', exampleEn: 'Tambor tik Cacaopera.', exampleEs: 'El tambor en la fiesta patronal.' }
    ]
  },
  {
    id: 'kaka_geografia',
    name: 'Geografía Sagrada de Cacaopera',
    iconEmoji: '🌊',
    items: [
      { id: 'ko5', nameEn: 'torola', nameEs: 'río Torola', ipa: '/toˈro.la/', emoji: '🌊', article: 'the', pluralEn: 'torola', exampleEn: 'Río Torola pal Morazán.', exampleEs: 'El río Torola de aguas limpias.' },
      { id: 'ko6', nameEn: 'pelon', nameEs: 'cerro Pelón', ipa: '/peˈlon/', emoji: '⛰️', article: 'the', pluralEn: 'pelon', exampleEn: 'Cerro Pelón sagrado.', exampleEs: 'El cerro Pelón ancestral.' },
      { id: 'ko7', nameEn: 'amate', nameEs: 'árbol de amate', ipa: '/aˈma.te/', emoji: '🌳', article: 'a', pluralEn: 'amate-kuna', exampleEn: 'Amate tik ne plaza.', exampleEs: 'El gran amate de la plaza.' }
    ]
  },
  {
    id: 'kaka_hogar',
    name: 'Hogar y Vida Cotidiana Kakawira',
    iconEmoji: '🛖',
    items: [
      { id: 'ko8', nameEn: 'asun', nameEs: 'hogar / choza', ipa: '/ˈa.sun/', emoji: '🛖', article: 'a', pluralEn: 'asun-kuna', exampleEn: 'Puk ne wapa tik asun.', exampleEs: 'Cálido es el fuego en el hogar.' },
      { id: 'ko9', nameEn: 'tinaja', nameEs: 'tinaja de agua', ipa: '/tiˈna.ha/', emoji: '🏺', article: 'a', pluralEn: 'tinaja-kuna', exampleEn: 'Li tik tinaja.', exampleEs: 'Agua fresca en la tinaja.' },
      { id: 'ko10', nameEn: 'hamaca', nameEs: 'hamaca de descanso', ipa: '/aˈma.ka/', emoji: '🛏️', article: 'a', pluralEn: 'hamaca-kuna', exampleEn: 'Hamaca pal asun.', exampleEs: 'Hamaca en el corredor.' }
    ]
  }
];

export {
  KAKAWIRA_ALPHABET as KAKAWIRA_ALPHABET_DATA,
  KAKAWIRA_NUMBERS as KAKAWIRA_NUMBERS_DATA,
  KAKAWIRA_COLORS as KAKAWIRA_COLORS_DATA,
} from './kakawiraBasicsData';

export const KAKAWIRA_OBJECTS_CATEGORIES = KAKAWIRA_OBJECT_CATEGORIES;

export {
  KAKAWIRA_FULL_WORDS as KAKAWIRA_VOCABULARY_CORPUS,
} from './kakawiraVocabularyData';

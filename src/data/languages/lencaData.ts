import { CEFRLevel, LevelCurriculumInfo, SpellingRule, VocabularyPair, GrammarDistinction, PhoneticDistinction } from './englishData';
import { LENCA_LESSONS_BY_LEVEL } from './lencaLessons';
import { LENCA_QUESTIONS_BANK, LENCA_QUESTIONS_BY_LEVEL } from './lencaQuestions';
export * from './lencaVerbs';
export * from './lencaBasicsData';
export * from './lencaVocabularyData';
export { LENCA_LESSONS_BY_LEVEL } from './lencaLessons';
export { LENCA_QUESTIONS_BANK, LENCA_QUESTIONS_BY_LEVEL } from './lencaQuestions';

export const LENCA_CURRICULUM: Record<CEFRLevel, LevelCurriculumInfo> = {
  A1: {
    level: 'A1',
    name: 'Nivel A1: Kualkat (Inicio / Acceso)',
    nameSpanish: 'Nivel A1: Saludos, Sintaxis SOV y Alfarería',
    color: 'emerald',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    description: 'Saludos tradicionales de Guatajiagua, orden Sujeto-Objeto-Verbo y números del 1 al 10.',
    canDoStatements: [
      'Saludar en Lenca Potón en la comunidad de Guatajiagua.',
      'Construir oraciones básicas con orden Sujeto-Objeto-Verbo.',
      'Identificar vocabulario esencial del barro negro y la alfarería.'
    ],
    coreTopics: ['Saludos Tradicionales', 'Orden SOV', 'Pronombres Lencas', 'Vocabulario de Alfarería'],
    grammarLessons: LENCA_LESSONS_BY_LEVEL.A1
  },
  A2: {
    level: 'A2',
    name: 'Nivel A2: Masun (Plataforma / Básico)',
    nameSpanish: 'Nivel A2: Pretérito, Futuro y Posposiciones',
    color: 'teal',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-800',
    borderColor: 'border-teal-200',
    description: 'Tiempos verbales del pasado y futuro, posposiciones de lugar y toponimia de Morazán.',
    canDoStatements: [
      'Narrar acciones en pasado describiendo faenas alfareras.',
      'Usar posposiciones para indicar ubicación en el taller o cerro.',
      'Reconocer la toponimia Lenca de Morazán y San Miguel.'
    ],
    coreTopics: ['Tiempos del Pasado', 'Posposiciones Espaciales', 'Toponimia de Morazán', 'Imperativos'],
    grammarLessons: LENCA_LESSONS_BY_LEVEL.A2
  },
  B1: {
    level: 'B1',
    name: 'Nivel B1: Tisin (Fuego / Umbral Intermedio)',
    nameSpanish: 'Nivel B1: Causatividad, Pasiva y Cueva de Corinto',
    color: 'blue',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    description: 'Morfología causativa, arte rupestre de Corinto y narraciones tradicionales.',
    canDoStatements: [
      'Explicar el proceso de cocción del barro negro con zacate.',
      'Relatar leyendas de los cerros orientales de El Salvador.',
      'Interpretar petroglifos de la Cueva de Corinto.'
    ],
    coreTopics: ['Causativos', 'Petroglifos de Corinto', 'Pasiva Lenca', 'Discurso de Ancianos'],
    grammarLessons: LENCA_LESSONS_BY_LEVEL.B1
  },
  B2: {
    level: 'B2',
    name: 'Nivel B2: Gualala (Consolidación / Intermedio Alto)',
    nameSpanish: 'Nivel B2: Dialectología y Sabiduría Ancestral',
    color: 'indigo',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-800',
    borderColor: 'border-indigo-200',
    description: 'Comparación Lenca Potón vs Lenca Hondureño, medicina tradicional y poética.',
    canDoStatements: [
      'Comparar variantes dialectales del Lenca centroamericano.',
      'Expresar razonamientos filosóficos sobre la Madre Tierra.',
      'Redactar ensayos sobre la memoria alfarera de Guatajiagua.'
    ],
    coreTopics: ['Dialectología Lenca', 'Medicina Tradicional', 'Filosofía de la Tierra', 'Poética de Morazán'],
    grammarLessons: LENCA_LESSONS_BY_LEVEL.B2
  },
  C1: {
    level: 'C1',
    name: 'Nivel C1: Tukan (Avanzado / Dominio Operativo)',
    nameSpanish: 'Nivel C1: Oratoria Sagrada y Etnolingüística',
    color: 'purple',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    description: 'Oratoria en asambleas indígenas, análisis de fuentes históricas de Walter Lehmann.',
    canDoStatements: [
      'Dirigir asambleas comunitarias con discurso formal lenca.',
      'Analizar los manuscritos lingüísticos de Lehmann y Campbell.',
      'Elaborar materiales didácticos para escuelas de Morazán.'
    ],
    coreTopics: ['Oratoria Sagrada', 'Manuscritos Lehmann', 'Etnomusicología', 'Derechos Colectivos'],
    grammarLessons: LENCA_LESSONS_BY_LEVEL.C1
  },
  C2: {
    level: 'C2',
    name: 'Nivel C2: Walat (Maestría / Sabiduría Superior)',
    nameSpanish: 'Nivel C2: Reconstrucción Mayor y Eternidad Lenca',
    color: 'amber',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    description: 'Reconstrucción lingüística integral, epigrafía y memoria perenne del pueblo Potón.',
    canDoStatements: [
      'Pronunciar discursos magistrales sin interferencia del español.',
      'Traducir obras literarias al Lenca Potón de El Salvador.',
      'Liderar la revitalización etnolingüística en el oriente del país.'
    ],
    coreTopics: ['Discurso Magistral', 'Cosmogonía del Cacahuatique', 'Reconstrucción Mayor', 'Perennidad Lenca'],
    grammarLessons: LENCA_LESSONS_BY_LEVEL.C2
  }
};

export const LENCA_SPELLING_RULES: SpellingRule[] = [
  {
    pattern: 'Uso de SH en Lenca Potón',
    us: 'Norma Guatajiagua (shi-pel, seran, shushuk)',
    uk: 'Grafías Coloniales o Hispanizadas',
    explanation: 'El dígrafo sh representa la fricativa postalveolar /ʃ/, crucial para diferenciar términos y mandatos.',
    examples: [
      { us: 'shi-pel', uk: 'xipel', translation: '¡trabaja!' },
      { us: 'seran', uk: 'celan', translation: 'negro' }
    ]
  }
];

export const LENCA_VOCABULARY_PAIRS: VocabularyPair[] = [
  { category: 'Dialectos Lencas', us: 'Guatajiagua (Morazán)', uk: 'Chilanga (Morazán)', spanish: 'Agua fresca', sampleSentenceUS: 'U li am tik Guatajiagua.', sampleSentenceUK: 'U li am tik Chilanga.' },
  { category: 'Dialectos Lencas', us: 'seran apas (vasija negra)', uk: 'tuku apas (vasija clara)', spanish: 'Vasija de barro', sampleSentenceUS: 'Kichiwa seran apas.', sampleSentenceUK: 'Kichiwa tuku apas.' },
  { category: 'Dialectos Lencas', us: 'sinti (maíz)', uk: 'masan (venado)', spanish: 'Alimentos del campo', sampleSentenceUS: 'U sinti pi tik milpa.', sampleSentenceUK: 'U masan itak tik tepet.' }
];

export const LENCA_GRAMMAR_DISTINCTIONS: GrammarDistinction[] = [
  {
    title: 'Sujeto - Objeto - Verbo (SOV)',
    concept: 'En Lenca Potón, el verbo obligatoriamente cierra la cláusula.',
    ruleUS: 'Lenca: U li am (Yo agua bebo).',
    ruleUK: 'Español: Yo bebo agua (SVO).',
    exampleUS: 'U seran comal chiwa.',
    exampleUK: 'Yo hago el comal negro.',
    pedagogicalNote: 'Nunca coloques el verbo antes del objeto en Lenca Potón.'
  }
];

export const LENCA_PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'La oclusiva velar K /k/ en Lenca',
    feature: 'Pronunciación nítida sin aspiración en raíces sagradas.',
    usBehavior: 'Kualkat (/ˈkʷal.kat/ = bueno / hermoso).',
    ukBehavior: 'Pronunciación hispanizada con c débil.',
    examples: [
      { word: 'kualkat', usIpa: '/ˈkʷal.kat/', ukIpa: '/kwal.kat/', audioNote: 'Pronunciación tradicional de Guatajiagua.' }
    ]
  }
];

export const LENCA_OBJECT_CATEGORIES = [
  {
    id: 'lenca_alfareria',
    name: 'Alfarería de Barro Negro (Guatajiagua)',
    iconEmoji: '🏺',
    items: [
      { id: 'lo1', nameEn: 'apas', nameEs: 'cántaro de barro', ipa: '/ˈa.pas/', emoji: '🏺', article: 'a', pluralEn: 'apas-kuna', exampleEn: 'U apas seran chiwa.', exampleEs: 'Yo hago el cántaro de barro negro.' },
      { id: 'lo2', nameEn: 'comal', nameEs: 'comal tradicional', ipa: '/koˈmal/', emoji: '🍳', article: 'a', pluralEn: 'comal-kuna', exampleEn: 'Comal pal tisin.', exampleEs: 'Comal para el fuego y pupusas.' },
      { id: 'lo3', nameEn: 'horno', nameEs: 'horno alfarero', ipa: '/ˈoɾ.no/', emoji: '🔥', article: 'a', pluralEn: 'horno-kuna', exampleEn: 'Chili ne tisin tik horno.', exampleEs: 'Rojo es el fuego en el horno.' },
      { id: 'lo4', nameEn: 'tisin', nameEs: 'fuego de leña', ipa: '/tiˈsin/', emoji: '🪵', article: 'a', pluralEn: 'tisin-kuna', exampleEn: 'Tisin pal Guatajiagua.', exampleEs: 'Fuego de leña de Guatajiagua.' }
    ]
  },
  {
    id: 'lenca_naturaleza',
    name: 'Naturaleza y Cerros de Morazán',
    iconEmoji: '⛰️',
    items: [
      { id: 'lo5', nameEn: 'tepet', nameEs: 'cerro Cacahuatique', ipa: '/teˈpet/', emoji: '⛰️', article: 'a', pluralEn: 'tepet-kuna', exampleEn: 'Susun ne tepet.', exampleEs: 'Verde es el cerro sagrado.' },
      { id: 'lo6', nameEn: 'li', nameEs: 'agua de manantial', ipa: '/li/', emoji: '💧', article: 'some', pluralEn: 'li', exampleEn: 'Tuku ne manantial pal li.', exampleEs: 'Pura es el agua del manantial.' },
      { id: 'lo7', nameEn: 'sinti', nameEs: 'maíz de la milpa', ipa: '/ˈsin.ti/', emoji: '🌽', article: 'some', pluralEn: 'sinti', exampleEn: 'Yari ne sinti.', exampleEs: 'Amarillo es el maíz maduro.' },
      { id: 'lo8', nameEn: 'masan', nameEs: 'venado de la serranía', ipa: '/maˈsan/', emoji: '🦌', article: 'a', pluralEn: 'masan-kuna', exampleEn: 'Masan tik ne tepet.', exampleEs: 'El venado en el cerro.' }
    ]
  },
  {
    id: 'lenca_comunidad',
    name: 'Comunidad y Hogar Potón',
    iconEmoji: '🏡',
    items: [
      { id: 'lo9', nameEn: 'kal', nameEs: 'casa comunal', ipa: '/kal/', emoji: '🏡', article: 'a', pluralEn: 'kal-kuna', exampleEn: 'Kal pal ne comunidad.', exampleEs: 'Casa de la comunidad potón.' },
      { id: 'lo10', nameEn: 'ohtli', nameEs: 'camino ancestral', ipa: '/ˈo.tli/', emoji: '🛤️', article: 'a', pluralEn: 'ohtli-kuna', exampleEn: 'Ohtli pal Chilanga.', exampleEs: 'Camino ancestral hacia Chilanga.' },
      { id: 'lo11', nameEn: 'kualkat', nameEs: 'corazón bondadoso', ipa: '/ˈkʷal.kat/', emoji: '🤍', article: 'a', pluralEn: 'kualkat', exampleEn: 'Kualkat corazón.', exampleEs: 'Un corazón noble y puro.' }
    ]
  }
];

export {
  LENCA_ALPHABET as LENCA_ALPHABET_DATA,
  LENCA_NUMBERS as LENCA_NUMBERS_DATA,
  LENCA_COLORS as LENCA_COLORS_DATA,
} from './lencaBasicsData';

export const LENCA_OBJECTS_CATEGORIES = LENCA_OBJECT_CATEGORIES;

export {
  LENCA_FULL_WORDS as LENCA_VOCABULARY_CORPUS,
} from './lencaVocabularyData';

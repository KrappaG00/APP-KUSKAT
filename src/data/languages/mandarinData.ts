import {
  CEFRLevel,
  LevelCurriculumInfo,
  SpellingRule,
  VocabularyPair,
  GrammarDistinction,
  PhoneticDistinction,
} from './englishData';
import { MANDARIN_LESSONS, MANDARIN_LESSONS_BY_LEVEL } from './mandarinLessons';
import { MANDARIN_QUESTIONS_BANK, MANDARIN_QUESTIONS_BY_LEVEL } from './mandarinQuestions';
export * from './mandarinVerbs';
export * from './mandarinBasicsData';
export * from './mandarinVocabularyData';
export { MANDARIN_LESSONS, MANDARIN_LESSONS_BY_LEVEL } from './mandarinLessons';
export { MANDARIN_QUESTIONS_BANK, MANDARIN_QUESTIONS_BY_LEVEL } from './mandarinQuestions';

export const MANDARIN_CURRICULUM: Record<CEFRLevel, LevelCurriculumInfo> = {
  A1: {
    level: 'A1',
    name: 'Nivel A1: Rùmén (Acceso / Principiante)',
    nameSpanish: 'Nivel A1: Fonética Pinyin, 4 Tonos y Clasificadores Nominales',
    color: 'emerald',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    description: 'Los cuatro tonos fonéticos del Pinyin, orden SVO sin conjugaciones y clasificadores universales como 个.',
    canDoStatements: [
      'Pronunciar con precisión los 4 tonos fonéticos y aplicar la regla de Tone Sandhi.',
      'Presentarse y decir su nacionalidad salvadoreña con el verbo 是 (Shì).',
      'Emplear clasificadores nominales obligatorios al contar personas y objetos.'
    ],
    coreTopics: ['Pinyin y los 4 Tonos', 'Tone Sandhi de 3er Tono', 'Verbo Cópula 是', 'Clasificadores Nominales'],
    grammarLessons: MANDARIN_LESSONS_BY_LEVEL.A1
  },
  A2: {
    level: 'A2',
    name: 'Nivel A2: Chūjí (Plataforma / Elemental)',
    nameSpanish: 'Nivel A2: Partícula de Aspecto 了, Comparativas y Negación con 没',
    color: 'teal',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-800',
    borderColor: 'border-teal-200',
    description: 'La partícula 了 de acción completada y cambio de estado, comparaciones con 比 y complementos de dirección.',
    canDoStatements: [
      'Indicar la finalización de acciones usando la partícula de aspecto verbal 了.',
      'Construir oraciones comparativas con 比 y de igualdad con 跟...一样.',
      'Negar acciones pasadas rigurosamente con 没 o 没有.'
    ],
    coreTopics: ['Aspecto Verbal con 了', 'Experiencial con 过', 'Comparativas con 比', 'Negación con 没 / 没有'],
    grammarLessons: MANDARIN_LESSONS_BY_LEVEL.A2
  },
  B1: {
    level: 'B1',
    name: 'Nivel B1: Zhōngjí (Umbral / Intermedio)',
    nameSpanish: 'Nivel B1: Estructuras con 把 y 被, Partículas 的/得/地 y Chengyu',
    color: 'blue',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    description: 'La estructura de disposición con 把, voz pasiva con 被, las 3 partículas De y cultura del té.',
    canDoStatements: [
      'Construir oraciones complejas de disposición utilizando la estructura con 把.',
      'Diferenciar las tres partículas de modificación 的, de grado 得 y adverbial 地.',
      'Incorporar proverbios tradicionales de cuatro caracteres (Chengyu) en conversaciones.'
    ],
    coreTopics: ['Estructura de Disposición 把', 'Voz Pasiva con 被', 'Partículas 的, 得, 地', 'Chengyu Fundamentales'],
    grammarLessons: MANDARIN_LESSONS_BY_LEVEL.B1
  },
  B2: {
    level: 'B2',
    name: 'Nivel B2: Zhōng Gāojí (Intermedio Alto)',
    nameSpanish: 'Nivel B2: Chino Escrito Formal, Caracteres Tradicionales y Guanxi',
    color: 'indigo',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-800',
    borderColor: 'border-indigo-200',
    description: 'Diferencias entre chino coloquial y escrito formal, complementos metafóricos y lectura de caracteres tradicionales.',
    canDoStatements: [
      'Redactar textos argumentativos utilizando conectores de registro formal como 此外 y 因此.',
      'Reconocer las equivalencias fundamentales entre caracteres simplificados y tradicionales.',
      'Comprender noticias económicas y artículos de opinión en medios sinohablantes.'
    ],
    coreTopics: ['Registro Escrito (书面语)', 'Simplificados vs Tradicionales', 'Complementos Figurados', 'Negociación y Guanxi'],
    grammarLessons: MANDARIN_LESSONS_BY_LEVEL.B2
  },
  C1: {
    level: 'C1',
    name: 'Nivel C1: Gāojí (Avanzado Operativo)',
    nameSpanish: 'Nivel C1: Chino Clásico Wenyanwen en Prosa Moderna y Diplomacia',
    color: 'purple',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    description: 'Partículas clásicas (之, 其, 亦, 乃), sintaxis de tópico prominente, redacción de contratos y discursos de la ONU.',
    canDoStatements: [
      'Integrar partículas literarias clásicas para condensar ideas con máxima elegancia.',
      'Interpretar discursos oficiales de alto nivel y comunicados diplomáticos.',
      'Redactar contratos comerciales bilingües con terminología jurídica precisa.'
    ],
    coreTopics: ['Partículas Clásicas 之 y 其', 'Sintaxis de Tópico Prominente', 'Contratos y Comercio Exterior', 'Poesía Dinastía Tang'],
    grammarLessons: MANDARIN_LESSONS_BY_LEVEL.C1
  },
  C2: {
    level: 'C2',
    name: 'Nivel C2: Jīngtōng (Maestría y Dominio Pleno)',
    nameSpanish: 'Nivel C2: Paleografía Jiaguwen, Alta Exégesis Clásica y Simposio',
    color: 'amber',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    description: 'Evolución paleográfica de radicales Kangxi, interpretación simultánea de cabina y disertación final.',
    canDoStatements: [
      'Realizar interpretación simultánea fluida entre español y chino mandarín en foros multilaterales.',
      'Analizar textos históricos dinásticos sin necesidad de adaptación moderna.',
      'Defender disertaciones magistrales y ensayos filosóficos de máxima exigencia académica.'
    ],
    coreTopics: ['Paleografía y Epigrafía', 'Interpretación Simultánea de Cabina', 'Filosofía Daoísta y Confuciana', 'Disertación Magistral C2'],
    grammarLessons: MANDARIN_LESSONS_BY_LEVEL.C2
  }
};

export const MANDARIN_SPELLING_RULES: SpellingRule[] = [
  {
    pattern: 'Caracteres Simplificados frente a Tradicionales',
    us: 'Norma Simplificada (简体字 - 中国, 学习, 门)',
    uk: 'Norma Tradicional (繁體字 - 中國, 學習, 門)',
    explanation: 'China continental unificó los caracteres simplificados en la década de 1950 para facilitar la alfabetización masiva, reduciendo trazos complejos manteniendo la base fonética y semántica.',
    examples: [
      { us: '中国 (Zhōngguó)', uk: '中國 (Zhōngguó)', translation: 'China' },
      { us: '汉字 (Hànzì)', uk: '漢字 (Hànzì)', translation: 'Caracteres chinos' },
      { us: '买卖 (Mǎimài)', uk: '買賣 (Mǎimài)', translation: 'Comercio / Comprar y vender' }
    ]
  }
];

export const MANDARIN_VOCABULARY_PAIRS: VocabularyPair[] = [
  { category: 'Registro Léxico', us: 'Chino Coloquial (口语 Kǒuyǔ)', uk: 'Chino Escrito Formal (书面语 Shūmiànyǔ)', spanish: 'Mirar / Observar', sampleSentenceUS: 'Nǐ kàn zhè ge. (Mira esto).', sampleSentenceUK: 'Guānkàn cǐ jiémù. (Observar este programa).' },
  { category: 'Registro Léxico', us: 'Chī fàn (Comer)', uk: 'Yòng cān (Comer / Cenar formal)', spanish: 'Comer', sampleSentenceUS: 'Wǒmen chī fàn ba.', sampleSentenceUK: 'Huānyíng dàjiā yòng cān.' },
  { category: 'Herencia en El Salvador', us: 'Chaomín (Chǎomiàn)', uk: 'Chaomín cuscatleco', spanish: 'Fideos salteados chinos en El Salvador', sampleSentenceUS: 'Wǒ xǐhuan chī chǎomiàn.', sampleSentenceUK: 'Chaomín preparado en el mercado salvadoreño.' }
];

export const MANDARIN_GRAMMAR_DISTINCTIONS: GrammarDistinction[] = [
  {
    title: 'Adjetivos Predicativos sin Verbo Cópula 是',
    concept: 'En chino los adjetivos son verbos estativos que incorporan el estado en su propio significado; no se usa 是 ante adjetivos comunes.',
    ruleUS: 'Chino Estándar: Wǒ hěn gāoxìng (Sujeto + Adverbio + Adjetivo).',
    ruleUK: 'Español: Yo ESTOY muy feliz (verbo estar obligatorio).',
    exampleUS: 'Tā hěn máng. (Él está muy ocupado).',
    exampleUK: 'Él está muy ocupado.',
    pedagogicalNote: 'Decir *Wǒ shì hěn gāo es un error común por transferencia directa del español.'
  }
];

export const MANDARIN_PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'Oposición entre 1er Tono Plano y 4º Tono Descendente',
    feature: 'El tono modifica completamente el significado del morfema.',
    usBehavior: 'Mā (妈 = madre): 1er tono sostenido y alto.',
    ukBehavior: 'Mà (骂 = regañar): 4º tono cortante y descendente.',
    examples: [
      { word: 'Mā vs Mà', usIpa: '[ma˥˥]', ukIpa: '[ma˥˩]', audioNote: '1er tono alto y plano; 4º tono seco y hacia abajo.' }
    ]
  }
];

import { CEFRLevel, LevelCurriculumInfo, SpellingRule, VocabularyPair, GrammarDistinction, PhoneticDistinction } from './englishData';
import { NAHUAT_LESSONS_BY_LEVEL } from './nahuatLessons';
import { NAHUAT_QUESTIONS_BANK, NAHUAT_QUESTIONS_BY_LEVEL } from './nahuatQuestions';
export * from './nahuatVerbs';
export * from './nahuatBasicsData';
export * from './nahuatVocabularyData';
export { NAHUAT_LESSONS_BY_LEVEL } from './nahuatLessons';
export { NAHUAT_QUESTIONS_BANK, NAHUAT_QUESTIONS_BY_LEVEL } from './nahuatQuestions';

export const NAHUAT_CURRICULUM: Record<CEFRLevel, LevelCurriculumInfo> = {
  A1: {
    level: 'A1',
    name: 'Nivel A1: Yejyektzin (Inicial / Acceso)',
    nameSpanish: 'Nivel A1: Saludos, Pronombres y Morfología Absolutiva',
    color: 'emerald',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    description: 'Bases fonéticas, prefijos de persona sujeto, sustantivos absolutivos y números del 1 al 10.',
    canDoStatements: [
      'Saludar de acuerdo al momento del día (yejyek tunal, yejyek tiutak, yejyek taywa).',
      'Presentarse a sí mismo y a su familia utilizando prefijos de posesión.',
      'Identificar sustantivos del entorno rural salvadoreño (milpa, comal, tecomate).'
    ],
    coreTopics: ['Saludos y Cortesía', 'Prefijos de Sujeto ni-, ti-', 'Sustantivos Absolutivos', 'Posesión Nominal'],
    grammarLessons: NAHUAT_LESSONS_BY_LEVEL.A1
  },
  A2: {
    level: 'A2',
    name: 'Nivel A2: Pehpetzat (Plataforma / Elemental)',
    nameSpanish: 'Nivel A2: Pretérito en -ki, Objetos ki-/kin- e Imperativo',
    color: 'teal',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-800',
    borderColor: 'border-teal-200',
    description: 'Verbos intransitivos, formación de pretérito, órdenes con shi- y objetos transitivos.',
    canDoStatements: [
      'Narrar acciones sucedidas en el pasado usando el pretérito en -ki.',
      'Formular mandatos y peticiones ceremoniales de cortesía con shi-.',
      'Manejar el sistema vigesimal náhuat del 11 al 20.'
    ],
    coreTopics: ['Clases Verbales', 'Pretérito Perfecto en -ki', 'Imperativo con shi-', 'Objetos ki- y kin-'],
    grammarLessons: NAHUAT_LESSONS_BY_LEVEL.A2
  },
  B1: {
    level: 'B1',
    name: 'Nivel B1: Tajtakamet (Umbral / Intermedio)',
    nameSpanish: 'Nivel B1: Causativos en -tia, Aplicativos en -lia y Pasiva',
    color: 'blue',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    description: 'Morfología derivativa avanzada, causativos, voz pasiva y cláusulas condicionales.',
    canDoStatements: [
      'Construir verbos causativos y aplicativos para expresar intenciones complejas.',
      'Comprender testimonios orales de nawataketzani sobre la historia comunitaria.',
      'Manejar el sistema vigesimal completo hasta 100.'
    ],
    coreTopics: ['Causativos en -tia', 'Aplicativos en -lia', 'Voz Pasiva en -wa', 'Condicionales con tla'],
    grammarLessons: NAHUAT_LESSONS_BY_LEVEL.B1
  },
  B2: {
    level: 'B2',
    name: 'Nivel B2: Masewal (Consolidación / Intermedio Alto)',
    nameSpanish: 'Nivel B2: Modo Potencial en -skia y Polisíntesis',
    color: 'indigo',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-800',
    borderColor: 'border-indigo-200',
    description: 'Situaciones hipotéticas contrafácticas, incorporación nominal y toponimia sagrada.',
    canDoStatements: [
      'Expresar hipótesis y deseos contrafácticos con el sufijo -skia.',
      'Describir el ciclo agrícola ceremonial del maíz y la cosmovisión pipil.',
      'Analizar la etimología náhuat de municipios y ríos de El Salvador.'
    ],
    coreTopics: ['Condicional Irreal en -skia', 'Incorporación Nominal', 'Reduplicación Repetitiva', 'Toponimia Cuscatleca'],
    grammarLessons: NAHUAT_LESSONS_BY_LEVEL.B2
  },
  C1: {
    level: 'C1',
    name: 'Nivel C1: Nawataketzani (Dominio Operativo / Avanzado)',
    nameSpanish: 'Nivel C1: Discurso Reverencial y Filología Pipil',
    color: 'purple',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    description: 'Polisíntesis profunda, oraciones hendidas, análisis de documentos coloniales y poesía.',
    canDoStatements: [
      'Declamar e interpretar cantos tradicionales y metáforas poéticas (in xuchit in kwikat).',
      'Leer e interpretar testamentos coloniales pipiles de Izalco y Caluco.',
      'Enseñar náhuat a jóvenes salvadoreños hispanohablantes con didáctica moderna.'
    ],
    coreTopics: ['Discurso Reverencial', 'Oraciones Hendidas', 'Dialectología Pipil', 'Filología Colonial'],
    grammarLessons: NAHUAT_LESSONS_BY_LEVEL.C1
  },
  C2: {
    level: 'C2',
    name: 'Nivel C2: Tamachtiani (Maestría / Sabiduría Ancestral)',
    nameSpanish: 'Nivel C2: Epopeya Tradicional y Filosofía del Yejyek Nemilis',
    color: 'amber',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    description: 'Oratoria sagrada, reconstrucción etnolingüística, hermenéutica y memoria histórica.',
    canDoStatements: [
      'Pronunciar discursos magistrales en asambleas indígenas sin interferencias del español.',
      'Elaborar neologismos técnicos legítimos basados en morfología náhuat productiva.',
      'Preservar y transmitir la memoria viva de los abuelos de 1932 y el Yejyek Nemilis.'
    ],
    coreTopics: ['Oratoria Sagrada', 'Hermenéutica de Cantos', 'Memoria Histórica de 1932', 'Filosofía Yejyek Nemilis'],
    grammarLessons: NAHUAT_LESSONS_BY_LEVEL.C2
  }
};

export const NAHUAT_SPELLING_RULES: SpellingRule[] = [
  {
    pattern: 'Uso de K en lugar de C y QU',
    us: 'Norma Estandarizada IRIN (kuchi, kalat, tuki)',
    uk: 'Ortografía Colonial Hispánica (cuchi, calat, tuqui)',
    explanation: 'La norma moderna del náhuat unificada por IRIN y el MINED utiliza la letra K para todos los sonidos velares /k/, eliminando la ambigüedad colonial de c/qu.',
    examples: [
      { us: 'kalat', uk: 'calat', translation: 'casa' },
      { us: 'kuchi', uk: 'cuchi', translation: 'dormir' },
      { us: 'kisa', uk: 'quisa', translation: 'salir' }
    ]
  },
  {
    pattern: 'Evolución de TL a T en Náhuat Pipil',
    us: 'Náhuat de El Salvador (takat, at, tlet)',
    uk: 'Náhuatl Mexicano Central (tlacatl, atl, tletl)',
    explanation: 'El rasgo diagnóstico fundamental del náhuat pipil salvadoreño es la evolución del fonema /tɬ/ a /t/ simple.',
    examples: [
      { us: 'takat', uk: 'tlacatl', translation: 'hombre' },
      { us: 'at', uk: 'atl', translation: 'agua' },
      { us: 'tamal', uk: 'tamalli', translation: 'tamal' }
    ]
  }
];

export const NAHUAT_VOCABULARY_PAIRS: VocabularyPair[] = [
  { category: 'Dialectos Pipiles', us: 'Witzapan (Santo Domingo)', uk: 'Cuisnahuat / Izalco', spanish: 'Buenos días', sampleSentenceUS: 'Yejyek tunal nu-kniw.', sampleSentenceUK: 'Yejyek tunal nu-tatan.' },
  { category: 'Dialectos Pipiles', us: 'k-ita (lo mira)', uk: 'k-itztuk (lo está viendo)', spanish: 'Ver / Mirar', sampleSentenceUS: 'Ni-k-ita ne xuchit.', sampleSentenceUK: 'Ni-k-itztuk ne xuchit.' },
  { category: 'Dialectos Pipiles', us: 'chucho (perro)', uk: 'itzkwintli (perro tradicional)', spanish: 'Perro', sampleSentenceUS: 'Ne chucho kuchi tik petat.', sampleSentenceUK: 'Ne itzkwintli kuchi tik petat.' }
];

export const NAHUAT_GRAMMAR_DISTINCTIONS: GrammarDistinction[] = [
  {
    title: 'Prefijos de Sujeto vs Pronombres Independientes',
    concept: 'En náhuat, el pronombre independiente (naha, taha) es opcional y solo se usa para énfasis. El prefijo verbal (ni-, ti-) es estrictamente obligatorio.',
    ruleUS: 'Náhuat Pipil: Ni-taketza (Yo hablo) - prefijo obligatorio.',
    ruleUK: 'Español: Hablo (el sujeto yo es tácito desinencial).',
    exampleUS: 'Naha ni-taketza nawat.',
    exampleUK: 'Yo hablo náhuat.',
    pedagogicalNote: 'Nunca digas solamente *taketza para decir yo hablo, porque significa él o ella habla.'
  }
];

export const NAHUAT_PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'El fonema Sh /ʃ/ vs S /s/',
    feature: 'Oposición fonológica entre la sibilante alveolar y la postalveolar.',
    usBehavior: 'Shushuknak (/ʃu.ʃuk.nak/ = verde): fricativa postalveolar.',
    ukBehavior: 'Sinti (/sin.ti/ = maíz): fricativa alveolar dental.',
    examples: [
      { word: 'shuchit', usIpa: '/ˈʃu.tʃit/', ukIpa: '/ˈsu.tʃit/ (error)', audioNote: 'Pronunciar con sonido sh del inglés en shine.' }
    ]
  }
];

export {
  NAHUAT_ALPHABET as NAHUAT_ALPHABET_DATA,
  NAHUAT_NUMBERS as NAHUAT_NUMBERS_DATA,
  NAHUAT_COLORS as NAHUAT_COLORS_DATA,
  NAHUAT_OBJECT_CATEGORIES as NAHUAT_OBJECTS_CATEGORIES,
} from './nahuatBasicsData';

export {
  NAHUAT_FULL_WORDS as NAHUAT_VOCABULARY_CORPUS,
} from './nahuatVocabularyData';

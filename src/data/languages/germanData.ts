import { CEFRLevel, LevelCurriculumInfo, SpellingRule, VocabularyPair, GrammarDistinction, PhoneticDistinction } from './englishData';
import { GERMAN_LESSONS_BY_LEVEL } from './germanLessons';
import { GERMAN_QUESTIONS_BANK, GERMAN_QUESTIONS_BY_LEVEL } from './germanQuestions';
export * from './germanVerbs';
export * from './germanBasicsData';
export * from './germanVocabularyData';
export { GERMAN_LESSONS_BY_LEVEL } from './germanLessons';
export { GERMAN_QUESTIONS_BANK, GERMAN_QUESTIONS_BY_LEVEL } from './germanQuestions';

export const GERMAN_CURRICULUM: Record<CEFRLevel, LevelCurriculumInfo> = {
  A1: {
    level: 'A1',
    name: 'Nivel A1: Start Deutsch 1 (Acceso / Principiante)',
    nameSpanish: 'Nivel A1: Fonética, Artículos Der/Die/Das y Sintaxis V2',
    color: 'emerald',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    description: 'Regla de posición V2, los tres géneros, acusativo básico y números del 1 al 100.',
    canDoStatements: [
      'Saludar y presentarse en alemán formal e informal.',
      'Comprender la diferencia de género der, die, das y la negación con kein.',
      'Formular oraciones principales respetando la posición 2 del verbo.'
    ],
    coreTopics: ['Posición 2 del Verbo', 'Artículos Der/Die/Das', 'Akkusativ Básico', 'Verbos Separables'],
    grammarLessons: GERMAN_LESSONS_BY_LEVEL.A1
  },
  A2: {
    level: 'A2',
    name: 'Nivel A2: Start Deutsch 2 (Plataforma / Elemental)',
    nameSpanish: 'Nivel A2: Pasado Perfekt, Caso Dativo y Subordinadas',
    color: 'teal',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-800',
    borderColor: 'border-teal-200',
    description: 'Pasado Perfekt con haben y sein, caso dativo, preposiciones de doble caso y weil/dass.',
    canDoStatements: [
      'Relatar viajes y rutinas pasadas con el tiempo Perfekt.',
      'Manejar el caso dativo y las preposiciones aus, bei, mit, nach, zu.',
      'Construir oraciones subordinadas con el verbo al final.'
    ],
    coreTopics: ['Perfekt con Haben y Sein', 'Caso Dativo', 'Wechselpräpositionen', 'Subordinadas con Weil'],
    grammarLessons: GERMAN_LESSONS_BY_LEVEL.A2
  },
  B1: {
    level: 'B1',
    name: 'Nivel B1: Zertifikat Deutsch B1 (Umbral / Intermedio)',
    nameSpanish: 'Nivel B1: Präteritum, Genitivo, Pasiva y Konjunktiv II',
    color: 'blue',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    description: 'Pretérito narrativo, caso genitivo, oraciones de relativo, voz pasiva y Konjunktiv II.',
    canDoStatements: [
      'Expresar hipótesis y deseos irreales con hätte, wäre y würde.',
      'Redactar correos electrónicos formales a instituciones alemanas.',
      'Utilizar oraciones de relativo y voz pasiva en el ámbito laboral.'
    ],
    coreTopics: ['Präteritum Narrativo', 'Caso Genitivo', 'Voz Pasiva con Werden', 'Konjunktiv II de Deseo'],
    grammarLessons: GERMAN_LESSONS_BY_LEVEL.B1
  },
  B2: {
    level: 'B2',
    name: 'Nivel B2: Goethe-Zertifikat B2 (Intermedio Alto)',
    nameSpanish: 'Nivel B2: Nominalización, Konjunktiv I y Discurso Técnico',
    color: 'indigo',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-800',
    borderColor: 'border-indigo-200',
    description: 'Estilo nominal académico, discurso indirecto periodístico, participios extendidos.',
    canDoStatements: [
      'Participar en debates profesionales y negociaciones en Alemania.',
      'Comprender artículos de prensa de Die Zeit, Der Spiegel y FAZ.',
      'Dominar el estilo nominal y conectores de alta complejidad.'
    ],
    coreTopics: ['Nominalstil', 'Konjunktiv I Periodístico', 'Participios Atributivos', 'Funktionsverbgefüge'],
    grammarLessons: GERMAN_LESSONS_BY_LEVEL.B2
  },
  C1: {
    level: 'C1',
    name: 'Nivel C1: Goethe-Zertifikat C1 / TestDaF (Avanzado)',
    nameSpanish: 'Nivel C1: Discurso Académico, Filosofía y Retórica',
    color: 'purple',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    description: 'Estructuras de inversión estilística, filosofía alemana y precisión lexicográfica.',
    canDoStatements: [
      'Redactar monografías académicas y defender tesis universitarias en Alemania.',
      'Interpretar obras literarias y textos filosóficos originales.',
      'Dominar las partículas modales y matices finos del habla culta.'
    ],
    coreTopics: ['Cleft Sentences y Foco', 'Filosofía Germánica', 'Partículas Modales', 'Lingüística del Texto'],
    grammarLessons: GERMAN_LESSONS_BY_LEVEL.C1
  },
  C2: {
    level: 'C2',
    name: 'Nivel C2: Großes Deutsches Sprachdiplom (Maestría)',
    nameSpanish: 'Nivel C2: Maestría Nativa y Hermenéutica Mayor',
    color: 'amber',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    description: 'Elocuencia estilística nativa, filología histórica, derecho y dialéctica superior.',
    canDoStatements: [
      'Pronunciar conferencias magistrales en universidades de habla alemana.',
      'Traducir obras literarias complejas preservando la métrica y ritmo.',
      'Dominar la variación dialectal de Alemania, Austria y Suiza.'
    ],
    coreTopics: ['Hermenéutica Clásica', 'Derecho Constitucional Alemán', 'Dialectología DACH', 'Epistemología'],
    grammarLessons: GERMAN_LESSONS_BY_LEVEL.C2
  }
};

export const GERMAN_SPELLING_RULES: SpellingRule[] = [
  {
    pattern: 'Uso de la Eszett (ß) vs Doble S (ss)',
    us: 'Norma de Alemania y Austria (Straße, groß, weiß)',
    uk: 'Norma de Suiza y Liechtenstein (Strasse, gross, weiss)',
    explanation: 'En Alemania y Austria se escribe ß tras vocales largas y diptongos, mientras que Suiza abolió la letra ß y utiliza universalmente "ss".',
    examples: [
      { us: 'Straße', uk: 'Strasse', translation: 'calle' },
      { us: 'groß', uk: 'gross', translation: 'grande' },
      { us: 'Fuß', uk: 'Fuss', translation: 'pie' }
    ]
  }
];

export const GERMAN_VOCABULARY_PAIRS: VocabularyPair[] = [
  { category: 'Variantes DACH', us: 'Alemania (Hochdeutsch)', uk: 'Austria (Österreich)', spanish: 'Tomate', sampleSentenceUS: 'Ich kaufe eine Tomate.', sampleSentenceUK: 'Ich kaufe einen Paradeiser.' },
  { category: 'Variantes DACH', us: 'der Schornsteinfeger', uk: 'der Rauchfangkehrer', spanish: 'Deshollinador', sampleSentenceUS: 'Der Schornsteinfeger bringt Glück.', sampleSentenceUK: 'Der Rauchfangkehrer bringt Glück.' },
  { category: 'Variantes DACH', us: 'die Sahne / Schlagsahne', uk: 'das Schlagobers', spanish: 'Crema batida', sampleSentenceUS: 'Kaffee mit Sahne bitte.', sampleSentenceUK: 'Kaffee mit Schlagobers bitte.' }
];

export const GERMAN_GRAMMAR_DISTINCTIONS: GrammarDistinction[] = [
  {
    title: 'Regla V2: Verbo en Posición 2',
    concept: 'En oraciones principales, el verbo conjugado ocupa obligatoriamente el segundo bloque sintáctico.',
    ruleUS: 'Alemán: Heute lerne ich Deutsch (inversión obligatoria).',
    ruleUK: 'Español: Hoy yo aprendo alemán (sujeto antes del verbo).',
    exampleUS: 'Morgen fahren wir nach Berlin.',
    exampleUK: 'Mañana nosotros viajamos a Berlín.',
    pedagogicalNote: 'Nunca comiences con un adverbio y dejes el sujeto antes del verbo (*Morgen wir fahren).'
  }
];

export const GERMAN_PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'El sonido Ch: Ich-Laut vs Ach-Laut',
    feature: 'Fricativa palatal sorda tras vocales claras vs fricativa velar tras oscuras.',
    usBehavior: 'Ich-Laut (/ç/ en ich, nicht, sprechen): lengua hacia el paladar duro.',
    ukBehavior: 'Ach-Laut (/x/ en Buch, machen, kochen): sonido en el velo del paladar.',
    examples: [
      { word: 'ich', usIpa: '/ɪç/', ukIpa: '/ɪx/ (error)', audioNote: 'Sonido suave de brisa palatal.' },
      { word: 'Buch', usIpa: '/buːx/', ukIpa: '/buːç/ (error)', audioNote: 'Sonido velar profundo tras vocal u.' }
    ]
  }
];

export const GERMAN_OBJECT_CATEGORIES = [
  {
    id: 'ger_haus',
    name: 'Haus und Wohnen (Hogar y Vivienda)',
    iconEmoji: '🏠',
    items: [
      { id: 'go1', nameEn: 'das Haus', nameEs: 'la casa', ipa: '/haʊ̯s/', emoji: '🏠', article: 'a', pluralEn: 'die Häuser', exampleEn: 'Das Haus ist sehr groß.', exampleEs: 'La casa es muy grande.' },
      { id: 'go2', nameEn: 'die Tür', nameEs: 'la puerta', ipa: '/tyːɐ̯/', emoji: '🚪', article: 'a', pluralEn: 'die Türen', exampleEn: 'Bitte schließen Sie die Tür.', exampleEs: 'Por favor cierre la puerta.' },
      { id: 'go3', nameEn: 'das Fenster', nameEs: 'la ventana', ipa: '/ˈfɛnstɐ/', emoji: '🪟', article: 'a', pluralEn: 'die Fenster', exampleEn: 'Das Fenster ist offen.', exampleEs: 'La ventana está abierta.' },
      { id: 'go4', nameEn: 'der Tisch', nameEs: 'la mesa', ipa: '/tɪʃ/', emoji: '🪵', article: 'a', pluralEn: 'die Tische', exampleEn: 'Der Tisch aus Holz.', exampleEs: 'La mesa de madera.' }
    ]
  },
  {
    id: 'ger_schule',
    name: 'Schule und Beruf (Educación y Trabajo)',
    iconEmoji: '📚',
    items: [
      { id: 'go5', nameEn: 'das Buch', nameEs: 'el libro', ipa: '/buːx/', emoji: '📖', article: 'a', pluralEn: 'die Bücher', exampleEn: 'Ich lese ein deutsches Buch.', exampleEs: 'Leo un libro alemán.' },
      { id: 'go6', nameEn: 'der Stift', nameEs: 'el bolígrafo / lápiz', ipa: '/ʃtɪft/', emoji: '✏️', article: 'a', pluralEn: 'die Stifte', exampleEn: 'Der Stift schreibt blau.', exampleEs: 'El bolígrafo escribe azul.' },
      { id: 'go7', nameEn: 'der Computer', nameEs: 'la computadora', ipa: '/kɔmˈpjuːtɐ/', emoji: '💻', article: 'a', pluralEn: 'die Computer', exampleEn: 'Der Computer ist modern.', exampleEs: 'La computadora es moderna.' }
    ]
  },
  {
    id: 'ger_essen',
    name: 'Essen und Trinken (Comida y Bebida)',
    iconEmoji: '🥨',
    items: [
      { id: 'go8', nameEn: 'das Brot', nameEs: 'el pan alemán', ipa: '/bʁoːt/', emoji: '🍞', article: 'some', pluralEn: 'die Brote', exampleEn: 'Frisches deutsches Brot.', exampleEs: 'Pan alemán fresco y crujiente.' },
      { id: 'go9', nameEn: 'der Kaffee', nameEs: 'el café', ipa: '/ˈkafe/', emoji: '☕', article: 'some', pluralEn: 'die Kaffees', exampleEn: 'Ein Kaffee aus El Salvador bitte.', exampleEs: 'Un café de El Salvador por favor.' },
      { id: 'go10', nameEn: 'das Wasser', nameEs: 'el agua mineral', ipa: '/ˈvasɐ/', emoji: '💧', article: 'some', pluralEn: 'die Wasser', exampleEn: 'Wasser mit Kohlensäure.', exampleEs: 'Agua mineral con gas.' }
    ]
  }
];

export {
  GERMAN_ALPHABET as GERMAN_ALPHABET_DATA,
  GERMAN_NUMBERS as GERMAN_NUMBERS_DATA,
  GERMAN_COLORS as GERMAN_COLORS_DATA,
} from './germanBasicsData';

export const GERMAN_OBJECTS_CATEGORIES = GERMAN_OBJECT_CATEGORIES;

export {
  GERMAN_FULL_WORDS as GERMAN_VOCABULARY_CORPUS,
} from './germanVocabularyData';

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

export * from './lencaCommunicativeData';

export const LENCA_SPELLING_RULES: SpellingRule[] = [
  {
    pattern: 'Uso de SH en Lenca Potón',
    us: 'Norma Guatajiagua (shi-pel, seran, shushuk)',
    uk: 'Grafías Coloniales o Hispanizadas (xipel, celan, chuchuc)',
    explanation: 'El dígrafo sh representa la fricativa postalveolar /ʃ/, crucial para diferenciar términos patrimoniales y mandatos imperativos.',
    examples: [
      { us: 'shi-pel', uk: 'xipel', translation: '¡trabaja!' },
      { us: 'seran', uk: 'celan', translation: 'negro' },
      { us: 'shushuk', uk: 'chuchuc', translation: 'verde / fresco' }
    ]
  },
  {
    pattern: 'Consonantes Oclusivas K, T y P Invariables',
    us: 'Grafía Estandarizada Potón (kualkat, tuku, pe)',
    uk: 'Grafías Hispanizadas con C/QU (cualcat, tucu, que)',
    explanation: 'Se utiliza sistemáticamente K para la oclusiva velar sorda /k/, evitando la alternancia colonial c/qu.',
    examples: [
      { us: 'kualkat', uk: 'cualcat', translation: 'bueno / hermoso' },
      { us: 'tuku', uk: 'tucu', translation: 'blanco / puro' },
      { us: 'kuku', uk: 'cucu', translation: 'fuego / leña' }
    ]
  },
  {
    pattern: 'Ausencia de Fricativas Dentales y F en Raíces Nativas',
    us: 'Raíces Fonémicas Puras (peli, wata, siri)',
    uk: 'Interferencias Castellanas (feli, fata, firi)',
    explanation: 'El sistema fonológico Lenca Potón carece originalmente de los fonemas /f/ y /θ/, resolviendo préstamos mediante /p/ o /w/.',
    examples: [
      { us: 'peli', uk: 'feli (error)', translation: 'perro de campo' },
      { us: 'wata', uk: 'fata (error)', translation: 'casa comunal' }
    ]
  },
  {
    pattern: 'Posposiciones Locativas Aglutinadas (-ba, -ti)',
    us: 'Sufijación Espacial Directa (u-ba, li-ba, tepet-ti)',
    uk: 'Separación Preposicional Analítica',
    explanation: 'Las relaciones espaciales no se expresan con preposiciones aisladas, sino mediante clíticos y posposiciones unidas a la base nominal.',
    examples: [
      { us: 'u-ba', uk: 'en la casa', translation: 'dentro de la casa' },
      { us: 'li-ba', uk: 'en el río', translation: 'en el agua / río' },
      { us: 'tepet-ti', uk: 'hacia el cerro', translation: 'en el cerro' }
    ]
  },
  {
    pattern: 'Pluralización Colectiva con -kuna',
    us: 'Colectivo Nominal Potón (apas-kuna, shutu-kuna)',
    uk: 'Forma Base Singular (apas, shutu)',
    explanation: 'Para enfatizar la pluralidad de objetos o seres emparentados, se sufija la partícula colectiva -kuna.',
    examples: [
      { us: 'apas-kuna', uk: 'apas', translation: 'cántaros de barro / cántaro' },
      { us: 'shutu-kuna', uk: 'shutu', translation: 'ollas / olla' },
      { us: 'kuka-kuna', uk: 'kuka', translation: 'abuelos / abuelo' }
    ]
  }
];

export const LENCA_VOCABULARY_PAIRS: VocabularyPair[] = [
  { category: 'Dialectos Lencas', us: 'Guatajiagua (Morazán)', uk: 'Chilanga (Morazán)', spanish: 'Agua fresca', sampleSentenceUS: 'U li am tik Guatajiagua.', sampleSentenceUK: 'U li am tik Chilanga.' },
  { category: 'Dialectos Lencas', us: 'seran apas (vasija negra)', uk: 'tuku apas (vasija clara)', spanish: 'Vasija de barro', sampleSentenceUS: 'Kichiwa seran apas.', sampleSentenceUK: 'Kichiwa tuku apas.' },
  { category: 'Dialectos Lencas', us: 'sinti (maíz)', uk: 'masan (venado)', spanish: 'Alimentos del campo', sampleSentenceUS: 'U sinti pi tik milpa.', sampleSentenceUK: 'U masan itak tik tepet.' },
  { category: 'Alfarería Tradicional', us: 'comal (disco de barro)', uk: 'apas (tinaja para agua)', spanish: 'Utensilios de cocina', sampleSentenceUS: 'Seran comal pal tortilla.', sampleSentenceUK: 'Apas li amba guarda.' },
  { category: 'Parentesco y Familia', us: 'tata (padre / señor)', uk: 'nana (madre / señora)', spanish: 'Padres del hogar', sampleSentenceUS: 'Tata u-ba wara.', sampleSentenceUK: 'Nana seran apas chiwa.' },
  { category: 'Geografía y Montaña', us: 'tepet (cerro tutelar)', uk: 'li (agua de manantial)', spanish: 'Naturaleza sagrada', sampleSentenceUS: 'Cacahuatique tepet wey.', sampleSentenceUK: 'Li am manantial wara.' },
  { category: 'Cromática Tradicional', us: 'seran (negro brillante)', uk: 'susun (verde monte)', spanish: 'Colores ceremoniales', sampleSentenceUS: 'Seran apas pulido yam.', sampleSentenceUK: 'Susun wirika tepet-ba.' }
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
  },
  {
    title: 'Posposiciones en Lugar de Preposiciones',
    concept: 'Las relaciones directivas, ablativas y locativas se sitúan después del sustantivo que rigen.',
    ruleUS: 'Lenca: Tepet-ba (cerro-en) / Li-ra (agua-hacia).',
    ruleUK: 'Español: En el cerro / Hacia el agua.',
    exampleUS: 'U wara u-ba.',
    exampleUK: 'Yo voy a la casa.',
    pedagogicalNote: 'La inversión preposicional es la huella sintáctica más robusta de las lenguas de la familia Lenca.'
  },
  {
    title: 'Prefijos Posesivos Inalienables u- y a-',
    concept: 'Los sustantivos de parentesco y partes del cuerpo requieren un prefijo obligatorio de posesión.',
    ruleUS: 'u-tata (mi padre), a-nana (su madre de él/ella).',
    ruleUK: 'Español: Mi padre, su madre (determinantes posesivos libres).',
    exampleUS: 'U-tata pel kichiwa.',
    exampleUK: 'Mi padre trabaja la milpa.',
    pedagogicalNote: 'Omitir el prefijo en términos de parentesco deshumaniza el sustantivo en Lenca.'
  },
  {
    title: 'Morfología Aglutinante de Aspecto y Modo',
    concept: 'Los verbos incorporan sufijos de continuidad y mandato de forma secuencial.',
    ruleUS: 'Raíz + Marcador aspectual + Desinencia de persona.',
    ruleUK: 'Español: Conjugación flexiva fusionada (am-ó, cant-arás).',
    exampleUS: 'Shi-pel (imperativo: ¡trabaja tú!).',
    exampleUK: '¡Trabaja!',
    pedagogicalNote: 'El prefijo shi- marca mandato directo enfático en Guatajiagua.'
  }
];

export const LENCA_PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'La oclusiva velar K /k/ en Lenca',
    feature: 'Pronunciación nítida sin aspiración en raíces sagradas.',
    usBehavior: 'Kualkat (/ˈkʷal.kat/ = bueno / hermoso).',
    ukBehavior: 'Pronunciación hispanizada con c débil.',
    examples: [
      { word: 'kualkat', usIpa: '/ˈkʷal.kat/', ukIpa: '/kwal.kat/', audioNote: 'Pronunciación tradicional de Guatajiagua.' },
      { word: 'kuku', usIpa: '/ˈku.ku/', ukIpa: '/ku.ku/', audioNote: 'Oclusiva velar limpia sorda.' }
    ]
  },
  {
    topic: 'Fricativa Postalveolar Sh /ʃ/ vs Alveolar S /s/',
    feature: 'Oposición fonológica entre sibilantes en verbos y nombres.',
    usBehavior: 'Shi-pel (/ʃiˈpel/ = ¡trabaja!): articulación palatal.',
    ukBehavior: 'Seran (/seˈɾan/ = negro): sibilante alveolar pura.',
    examples: [
      { word: 'shushuk', usIpa: '/ʃuˈʃuk/', ukIpa: '/suˈsuk/ (error)', audioNote: 'Pronunciar con sonido sh palatal bien definido.' }
    ]
  },
  {
    topic: 'Vibrante Simple R /ɾ/ Intervocálica',
    feature: 'Articulación vibrante simple alveolar sin fricción áspera.',
    usBehavior: 'Seran (/seˈɾan/ = negro): vibrante suave de un solo toque.',
    ukBehavior: 'Pronunciación hispanizante exagerada como rr múltiple.',
    examples: [
      { word: 'seran', usIpa: '/seˈɾan/', ukIpa: '/seˈran/ (error)', audioNote: 'Un solo toque apical contra los alvéolos superiores.' }
    ]
  },
  {
    topic: 'Vocalismo de Cinco Timbres Puros (a, e, i, o, u)',
    feature: 'Las vocales lencas son estables y no sufren diptongación espontánea.',
    usBehavior: 'Tuku (/ˈtu.ku/ = blanco): vocales cerradas homogéneas.',
    ukBehavior: 'Diptongación o relajación vocálica.',
    examples: [
      { word: 'apas', usIpa: '/ˈa.pas/', ukIpa: '/ˈa.pas/', audioNote: 'Vocal abierta anterior clara en ambas sílabas.' }
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

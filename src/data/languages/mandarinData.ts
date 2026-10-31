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

export * from './mandarinCommunicativeData';

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
  },
  {
    pattern: 'Reglas de Ortografía de Pinyin para Semivocales (y, w)',
    us: 'Pinyin Estandarizado (yī, wǔ, yú, yéye)',
    uk: 'Forma Fonética Teórica sin Inicial (*i, *u, *ü)',
    explanation: 'Cuando una sílaba inicia con i-, u- o ü- sin consonante inicial, se transforma ortográficamente: i -> yi, u -> wu, ü -> yu, evitando ambigüedad visual.',
    examples: [
      { us: 'yī (一)', uk: 'ī (error)', translation: 'uno' },
      { us: 'wǔ (五)', uk: 'ǔ (error)', translation: 'cinco' },
      { us: 'yú (鱼)', uk: 'ǘ (error)', translation: 'pez / pescado' }
    ]
  },
  {
    pattern: 'Omisión de Diéresis en ü con Iniciales Alveolopalatales (j, q, x)',
    us: 'Escritura Simplificada sin Puntos (jù, qù, xū)',
    uk: 'Mantenimiento de Puntos con Dentales (nǚ, lǜ)',
    explanation: 'Con las iniciales j, q, x, la vocal ü se escribe simplemente como u (ju, qu, xu) porque u posterior nunca se combina con estas iniciales; con n y l se conserva ü.',
    examples: [
      { us: 'qù (去)', uk: 'qǜ (redundante)', translation: 'ir' },
      { us: 'xuéxí (学习)', uk: 'xüéxí (redundante)', translation: 'estudiar' },
      { us: 'lǜchá (绿茶)', uk: 'lücha con diéresis obligatoria', translation: 'té verde' }
    ]
  },
  {
    pattern: 'El Orden Canónico de Trazos (笔顺 Bǐshùn)',
    us: 'Principios Fundamentales (de arriba a abajo, de izquierda a derecha, centro antes que lados)',
    uk: 'Trazado Arbitrario o Invertido',
    explanation: 'Escribir caracteres chinos exige respetar los 7 principios de orden de trazos para lograr equilibrio caligráfico y memorización motriz adecuada.',
    examples: [
      { us: '十 (shí): horizontal primero, vertical después', uk: 'vertical primero (error)', translation: 'diez' },
      { us: '人 (rén): trazo descendente izquierdo撇 antes de derecho捺', uk: 'inverso (error)', translation: 'persona' },
      { us: '国 (guó): exterior primero, interior después, cerrar al final', uk: 'cerrar antes (error)', translation: 'país' }
    ]
  },
  {
    pattern: 'Colocación del Signo de Tono en Pinyin',
    us: 'Jerarquía Vocálica (a > o > e > i/u > ü)',
    uk: 'Colocación en Consonantes (agramatical)',
    explanation: 'La marca de tono se coloca siempre sobre la vocal principal según la jerarquía canónica: a, o, e; en la combinación iu o ui, el tono va siempre en la segunda vocal.',
    examples: [
      { us: 'xièxie (sobre la primera e)', uk: 'xiexie sin tono', translation: 'gracias' },
      { us: 'shuǐ (sobre la i en combinación ui)', uk: 'shǔi (error)', translation: 'agua' },
      { us: 'hǎo (sobre la a)', uk: 'haǒ (error)', translation: 'bueno / bien' }
    ]
  }
];

export const MANDARIN_VOCABULARY_PAIRS: VocabularyPair[] = [
  { category: 'Registro Léxico', us: 'Chino Coloquial (口语 Kǒuyǔ)', uk: 'Chino Escrito Formal (书面语 Shūmiànyǔ)', spanish: 'Mirar / Observar', sampleSentenceUS: 'Nǐ kàn zhè ge. (Mira esto).', sampleSentenceUK: 'Guānkàn cǐ jiémù. (Observar este programa).' },
  { category: 'Registro Léxico', us: 'Chī fàn (Comer)', uk: 'Yòng cān (Comer / Cenar formal)', spanish: 'Comer', sampleSentenceUS: 'Wǒmen chī fàn ba.', sampleSentenceUK: 'Huānyíng dàjiā yòng cān.' },
  { category: 'Herencia en El Salvador', us: 'Chaomín (Chǎomiàn)', uk: 'Chaomín cuscatleco', spanish: 'Fideos salteados chinos en El Salvador', sampleSentenceUS: 'Wǒ xǐhuan chī chǎomiàn.', sampleSentenceUK: 'Chaomín preparado en el mercado salvadoreño.' },
  { category: 'Tratamiento de Cortesía', us: 'Nín (您 - honorífico respetuoso)', uk: 'Nǐ (你 - informal cercano)', spanish: 'Tratamiento de tú vs usted', sampleSentenceUS: 'Lǎoshī, nín hǎo!', sampleSentenceUK: 'Péngyou, nǐ hǎo!' },
  { category: 'Familia Paterna vs Materna', us: 'Yéye hé Nǎinai (abuelos paternos)', uk: 'Wàigōng hé Wàipó (abuelos maternos)', spanish: 'Abuelos en mandarín', sampleSentenceUS: 'Wǒ kàn yéye nǎinai.', sampleSentenceUK: 'Wàigōng zhù zài běifāng.' },
  { category: 'Bebidas Tradicionales', us: 'Lǜchá (té verde)', uk: 'Wūlóngchá (té oolong)', spanish: 'Variedades de té', sampleSentenceUS: 'Qǐng hē bēi lǜchá.', sampleSentenceUK: 'Wūlóngchá wèidào nóng.' },
  { category: 'Comercio y Pago', us: 'Xiànjīn (efectivo)', uk: 'Shuākǎ (pagar con tarjeta)', spanish: 'Modalidades de pago', sampleSentenceUS: 'Wǒ fù xiànjīn.', sampleSentenceUK: 'Kěyǐ shuākǎ ma?' }
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
  },
  {
    title: 'La Partícula Estructural 的 (de) de Subordinación y Posesión',
    concept: 'La partícula 的 conecta el modificador con el núcleo nominal (poseedor + 的 + poseído; adjetivo + 的 + sustantivo).',
    ruleUS: 'Wǒ de shū (mi libro) / Piàoliang de huā (flores hermosas).',
    ruleUK: 'Español: El libro DE Juan (preposición de postpuesta al núcleo).',
    exampleUS: 'Zhè shì wǒ de lǎoshī.',
    exampleUK: 'Este es mi profesor.',
    pedagogicalNote: 'Con parientes de primer grado o instituciones íntimas, 的 se omite de forma natural: 我妈妈 (mi madre).'
  },
  {
    title: 'La Partícula Modal y de Aspecto 了 (le)',
    concept: '了 no equivale al tiempo pasado del español, sino que marca la compleción de una acción o un cambio de estado emergente.',
    ruleUS: 'Verbo + 了 (acción completada) / Final de oración (cambio de situación).',
    ruleUK: 'Español: Conjugación en pretérito perfecto (comí, llegó).',
    exampleUS: 'Wǒ chī fàn le. (Ya he comido / Ya comí).',
    exampleUK: 'Ya comí.',
    pedagogicalNote: 'No confundas 了 con un pasado universal; si la acción habitual no cambia de estado, no se emplea 了.'
  },
  {
    title: 'Preguntas con Partícula 吗 (ma) frente a Afirmativo-Negativo',
    concept: 'Las preguntas cerradas de sí/no se forman añadiendo 吗 al final de la declarativa o repitiendo el verbo en afirmativo-negativo.',
    ruleUS: 'Nǐ qù ma? (¿Vas?) / Nǐ qù bu qù? (¿Vas o no vas?).',
    ruleUK: 'Español: Entonación ascendente interrogativa (¿Tú vas?).',
    exampleUS: 'Nǐ hǎo ma?',
    exampleUK: '¿Cómo estás? / ¿Estás bien?',
    pedagogicalNote: 'Nunca combines 吗 con la estructura afirmativo-negativa en la misma oración (*Nǐ qù bu qù ma? es un error).'
  }
];

export const MANDARIN_PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'Oposición entre 1er Tono Plano y 4º Tono Descendente',
    feature: 'El tono modifica completamente el significado del morfema.',
    usBehavior: 'Mā (妈 = madre): 1er tono sostenido y alto [55].',
    ukBehavior: 'Mà (骂 = regañar): 4º tono cortante y descendente [51].',
    examples: [
      { word: 'Mā vs Mà', usIpa: '[ma˥˥]', ukIpa: '[ma˥˩]', audioNote: '1er tono alto y plano; 4º tono seco y hacia abajo.' },
      { word: 'Bā vs Bà', usIpa: '[pa˥˥] (ocho) vs [pa˥˩] (papá)', ukIpa: '[pa] indistinto', audioNote: 'Ocho es plano y alto; papá es descendente enérgico.' }
    ]
  },
  {
    topic: 'Regla de Modificación Tonal del 3er Tono (三声变调)',
    feature: 'Dos terceros tonos contiguos hacen que el primero se pronuncie en segundo tono ascendente.',
    usBehavior: 'Nǐ hǎo (3º + 3º) se pronuncia oralmente [ní hǎo] (2º + 3º).',
    ukBehavior: 'Pronunciar ambos en tercer tono bajo pleno (antinatural y forzado).',
    examples: [
      { word: 'Nǐ hǎo (你好)', usIpa: '[ni˧˥ xaw˨˩˦]', ukIpa: '[ni˨˩˦ xaw˨˩˦]', audioNote: 'El primer tono asciende como en pregunta.' }
    ]
  },
  {
    topic: 'Consonantes Aspiradas vs No Aspiradas (p/b, t/d, k/g)',
    feature: 'En chino no hay distinción de sonoridad como en español, sino de emisión fuerte de aire (aspiración).',
    usBehavior: 'Pā (/pʰa/ con soplo de aire audible) frente a Bā (/pa/ sorda sin aspiración).',
    ukBehavior: 'Confusión al interpretar b/d/g como sonoras vibrantes españolas.',
    examples: [
      { word: 'Pà vs Bà', usIpa: '[pʰa˥˩] (temer) vs [pa˥˩] (papá)', ukIpa: '[ba˥˩] con b sonora', audioNote: 'Colocar una hoja de papel frente a la boca: con P se mueve, con B no.' }
    ]
  },
  {
    topic: 'Consonantes Retroflejas (zh, ch, sh, r) vs Dentales (z, c, s)',
    feature: 'La punta de la lengua se dobla hacia atrás tocando el paladar duro en las retroflejas.',
    usBehavior: 'Zhī (/ʈʂɨ/ retrofleja con lengua retraída) frente a Zī (/tsɨ/ dental plana en los dientes).',
    ukBehavior: 'Pronunciación indistinta sin retracción lingual.',
    examples: [
      { word: 'Zhāng vs Zāng', usIpa: '[ʈʂɑŋ˥˥] (apellido) vs [tsɑŋ˥˥] (sucio)', ukIpa: '[tsɑŋ] indistinto', audioNote: 'Doblar la lengua hacia el cielo de la boca para las retroflejas.' }
    ]
  }
];

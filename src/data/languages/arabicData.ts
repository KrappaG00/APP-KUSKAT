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

export * from './arabicCommunicativeData';

export const ARABIC_SPELLING_RULES: SpellingRule[] = [
  {
    pattern: 'Asimilación con Letras Solares vs Lunares',
    us: 'Letras Solares (Ash-Shams, As-Salam, An-Nur)',
    uk: 'Letras Lunares (Al-Qamar, Al-Kitab, Al-Bayt)',
    explanation: 'Con letras solares (14 letras dentales/alveolares/coronales), la L del artículo Al- se asimila fonéticamente geminando la primera consonante con shaddah; con letras lunares, la L se pronuncia de forma limpia con sukūn.',
    examples: [
      { us: 'ash-shams (الشَّمْس)', uk: 'al-shams (error)', translation: 'el sol' },
      { us: 'al-qamar (القَمَر)', uk: 'al-qamar', translation: 'la luna' },
      { us: 'as-salamu \'alaykum', uk: 'al-salamu (error)', translation: 'la paz sea con vosotros' }
    ]
  },
  {
    pattern: 'Ta Marbuta (ة) vs Ta Maftuha (ت)',
    us: 'Ta Marbuta Nominal Femenina (مدينة madīnah, جامعة jāmiʿah)',
    uk: 'Ta Maftuha de Raíz o Verbo (بيت bayt, كتبت katabat)',
    explanation: 'La Ta Marbuta (ة) es un sufijo exclusivo de sustantivos y adjetivos femeninos que se pronuncia como "ah" en pausa y como "t" en estado constructo o vocalizado.',
    examples: [
      { us: 'madīnah (مدينة)', uk: 'madīnat (en Idāfah: مدينة القدس)', translation: 'ciudad / ciudad de Jerusalén' },
      { us: 'bayt (بَيْت)', uk: 'bayt', translation: 'casa' },
      { us: 'shajarah (شَجَرَة)', uk: 'shajarah', translation: 'árbol' }
    ]
  },
  {
    pattern: 'Ortografía de la Hamza (ء, أ, إ, ؤ, ئ)',
    us: 'Asiento según Jerarquía Vocálica (kasrah > ḍammah > fatḥah > sukūn)',
    uk: 'Hamza Aislada sobre la Línea (سماء, ماء)',
    explanation: 'La posición de la hamza media depende de la vocal más fuerte entre la propia y la precedente: kasrah impone ya (ئ), ḍammah impone waw (ؤ), fatḥah impone alif (أ).',
    examples: [
      { us: 'suʾāl (سُؤَال)', uk: 'su-al', translation: 'pregunta' },
      { us: 'raʾīs (رَئِيس)', uk: 'ra-is', translation: 'presidente / líder' },
      { us: 'qirāʾah (قِرَاءَة)', uk: 'qira-ah', translation: 'lectura' }
    ]
  },
  {
    pattern: 'Alif Maqsura (ى) frente a Ya (ي)',
    us: 'Alif Maqsura Etimológica (إلى, على, مستشفى)',
    uk: 'Ya con Puntos Diacríticos Inferiores (في, أخي, كتابي)',
    explanation: 'El grafema ى representa una vocal /aː/ larga final derivada etimológicamente de una raíz con semiconsonante débil, y se escribe sin los dos puntos de la ya.',
    examples: [
      { us: 'ilā (إِلَى)', uk: 'ili (error)', translation: 'hacia / a' },
      { us: 'fī (فِي)', uk: 'fī', translation: 'en / dentro de' },
      { us: 'mustashfā (مُسْتَشْفَى)', uk: 'mustashfi (error)', translation: 'hospital' }
    ]
  },
  {
    pattern: 'Tanwīn o Nunación de Indefinición (-un, -an, -in)',
    us: 'Caso Indefinido (كِتَابٌ kitābun, كِتَاباً kitāban, كِتَابٍ kitābin)',
    uk: 'Estado Determinado con Al- (الكِتَابُ al-kitābu)',
    explanation: 'El tanwīn indica que el sustantivo es indefinido; en acusativo (-an) requiere habitualmente un alif de soporte ortográfico ortopédico.',
    examples: [
      { us: 'shukran (شُكْراً)', uk: 'shukran con alif de tanwīn', translation: 'gracias (caso acusativo adverbial)' },
      { us: 'ahlan (أَهْلاً)', uk: 'ahlan con alif', translation: 'bienvenido' }
    ]
  }
];

export const ARABIC_VOCABULARY_PAIRS: VocabularyPair[] = [
  { category: 'Variantes Árabes', us: 'Árabe Estándar Moderno (Fus\'ha)', uk: 'Dialecto Levantino / Palestino', spanish: '¿Cómo estás?', sampleSentenceUS: 'Kayfa haluka al-yawm?', sampleSentenceUK: 'Kif halak il-yom?' },
  { category: 'Variantes Árabes', us: 'Madha turid? (¿Qué quieres?)', uk: 'Shu biddak? (¿Qué quieres?)', spanish: '¿Qué deseas?', sampleSentenceUS: 'Madha turid an tashrab?', sampleSentenceUK: 'Shu biddak tishrab?' },
  { category: 'Herencia en El Salvador', us: 'Kibbeh / Kubba', uk: 'Kibbeh salvadoreño', spanish: 'Kibbeh de carne y trigo bulgur', sampleSentenceUS: 'Al-kibbeh ta\'am taqlidiyy.', sampleSentenceUK: 'Kibbeh tradicional en San Salvador.' },
  { category: 'Gastronomía Tradicional', us: 'waraq \'inab (hojas de parra rellenas)', uk: 'khubz \'arabiyy (pan pita)', spanish: 'Alimentos levantinos', sampleSentenceUS: 'Waraq al-\'inab ladhidh.', sampleSentenceUK: 'Khubz \'arabiyy fī l-ma\'idah.' },
  { category: 'Léxico Comercial', us: 'kam si\'ru hadha? (¿cuál es el precio?)', uk: 'bi-kam hadha? (¿a cuánto está?)', spanish: 'Preguntando costos', sampleSentenceUS: 'Kam si\'ru hadha al-qamisi?', sampleSentenceUK: 'Bi-kam hadha al-kitabu?' },
  { category: 'Parentesco Familiar', us: '\'amm (tío paterno)', uk: 'khal (tío materno)', spanish: 'Tíos en árabe', sampleSentenceUS: '\'Ammī yusāfiru ghadan.', sampleSentenceUK: 'Khālī ya\'īshu fī San Salvador.' },
  { category: 'Cortesía y Hospitalidad', us: 'tafaddal (sírvase usted masc.)', uk: 'tafaddalī (sírvase usted fem.)', spanish: 'Pase adelante / tome', sampleSentenceUS: 'Tafaddal bi-l-julūs ya sayyidī.', sampleSentenceUK: 'Tafaddalī bi-l-qahwah ya ustādhah.' }
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
  },
  {
    title: 'La Construcción Genitiva Idāfah (إضافة)',
    concept: 'Dos sustantivos se yuxtaponen directamente sin preposición para indicar posesión o relación íntima.',
    ruleUS: 'Primer elemento (poseído, sin Al-) + Segundo elemento (poseedor en caso genitivo).',
    ruleUK: 'Español: La casa DE la abuela (requiere preposición de).',
    exampleUS: 'Baytu l-jadd (بَيْتُ الجَدِّ, la casa del abuelo).',
    exampleUK: 'La casa del abuelo.',
    pedagogicalNote: 'El primer sustantivo jamás lleva artículo Al- ni tanwīn en una Idāfah legítima.'
  },
  {
    title: 'El Número Dual (المثنى) en Nombres y Verbos',
    concept: 'El árabe cuenta con una categoría morfológica obligatoria y productiva para exactamente dos entidades.',
    ruleUS: 'Sufijo -ān (nominativo kitābān) / -ayn (acusativo/genitivo kitābayn).',
    ruleUK: 'Español: Numeral dos + sustantivo en plural (dos libros).',
    exampleUS: 'ʿIndī kitābāni thnān. (Tengo exactamente dos libros).',
    exampleUK: 'Tengo dos libros.',
    pedagogicalNote: 'Utilizar plural para dos personas o cosas es un error morfológico grave en árabe estándar.'
  },
  {
    title: 'Concordancia de Plural No Humano con Femenino Singular',
    concept: 'Todo sustantivo plural que no designe seres humanos racionales concierta gramaticalmente en femenino singular.',
    ruleUS: 'Plural inanimado + Adjetivo/Verbo en femenino singular (السيارات سريعة).',
    ruleUK: 'Español: Concordancia en plural femenino (los coches son rápidos).',
    exampleUS: 'Al-kutubu jadīdah. (Los libros son nuevos, lit. "los libros es nueva").',
    exampleUK: 'Los libros son nuevos.',
    pedagogicalNote: 'Esta regla rige para adjetivos, pronombres relativos, demostrativos y verbos referidos a cosas, plantas o animales.'
  }
];

export const ARABIC_PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'La Fricativa Faríngea Sonora \'Ayn (ع)',
    feature: 'Sonido producido mediante la constricción de los músculos profundos de la faringe.',
    usBehavior: '\'Arabiyya (/ʕa.ra.bij.ja/ = árabe): sonido faríngeo auténtico.',
    ukBehavior: 'Pronunciación hispánica errónea como simple vocal "a".',
    examples: [
      { word: '\'Ayn (ع)', usIpa: '/ʕajn/', ukIpa: '/ajn/ (error)', audioNote: 'Apretar suavemente la base de la garganta como tragando agua.' },
      { word: '\'Alī (علي)', usIpa: '/ʕaˈliː/', ukIpa: '/aˈli/ (error)', audioNote: 'Oclusión faríngea sonora clara y vibrante.' }
    ]
  },
  {
    topic: 'La Oclusiva Uvular Sorda Qaf (ق)',
    feature: 'Oclusión sorda producida por el contacto del dorso posterior lingual con la úvula.',
    usBehavior: 'Qalam (/qalam/ = pluma/bolígrafo): timbre uvular hondo.',
    ukBehavior: 'Confusión con la oclusiva velar común K /k/.',
    examples: [
      { word: 'Qalb vs Kalb', usIpa: '/qalb/ (corazón) vs /kalb/ (perro)', ukIpa: '/kalb/ indistinto', audioNote: 'Qaf articula en la campanilla; Kaf articula en el velo del paladar.' }
    ]
  },
  {
    topic: 'Consonantes Enfáticas o Faringalizadas (ص, ض, ط, ظ)',
    feature: 'Velarización secundaria que ensancha la cavidad bucal y oscurece las vocales adyacentes.',
    usBehavior: 'Ṭālib (/tˤaːlib/ = estudiante): T enfática que transforma la \'a\' en timbre posterior [ɑ].',
    ukBehavior: 'Pronunciación simple como t, s, d dentales planas.',
    examples: [
      { word: 'Sayf vs Ṣayf', usIpa: '/sajf/ (espada) vs /sˤajf/ (verano)', ukIpa: '/sajf/ indistinto', audioNote: 'Ṣad ensancha la boca oscureciendo el diptongo.' }
    ]
  },
  {
    topic: 'La Fricativa Faríngea Sorda Ḥa (ح) frente a Kha (خ)',
    feature: 'Ḥa es un suspiro puro profundo en la faringe sin fricción velar áspera.',
    usBehavior: 'Ḥalīb (/ħaliːb/ = leche): fricativa faríngea limpia semejante a limpiar un cristal con el aliento.',
    ukBehavior: 'Pronunciación como la J española áspera velar /x/.',
    examples: [
      { word: 'Ḥalwā (حلوى)', usIpa: '/ˈħalwaː/', ukIpa: '/ˈxalwa/ (error)', audioNote: 'Fricación suave en la faringe media, no en la garganta superior.' }
    ]
  }
];

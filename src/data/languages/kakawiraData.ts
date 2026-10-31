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

export * from './kakawiraCommunicativeData';

export const KAKAWIRA_SPELLING_RULES: SpellingRule[] = [
  {
    pattern: 'Grafemas del Alfabeto Kakawira ADIK',
    us: 'Norma ADIK Cacaopera (burbur, wirika, asun)',
    uk: 'Grafías Coloniales Hispanizadas (bulbul, huirica, azun)',
    explanation: 'El alfabeto unificado por la Asociación de Desarrollo Indígena Kakawira preserva los fonemas puros de la lengua sin distorsiones hispánicas.',
    examples: [
      { us: 'wirika', uk: 'huirica', translation: 'guacamaya / ave silvestre' },
      { us: 'burbur', uk: 'bulbul', translation: 'blanco' },
      { us: 'asun', uk: 'azun', translation: 'gracias / gratitud' }
    ]
  },
  {
    pattern: 'Preservación de Oclusivas Sonoras (B, D, G)',
    us: 'Kakawira Misumalpan (dumi, binikuna, gueta)',
    uk: 'Familias Sordas como el Náhuat (carece de d, b, g)',
    explanation: 'A diferencia de las lenguas uto-aztecas mesoamericanas, el Kakawira posee fonemas oclusivos sonoros distintivos /b/, /d/, /g/.',
    examples: [
      { us: 'dumi', uk: 'tumi (error)', translation: 'día / sol' },
      { us: 'binikuna', uk: 'pinikuna (error)', translation: 'hijo / niño' },
      { us: 'gueta', uk: 'kueta (error)', translation: 'faena comunal' }
    ]
  },
  {
    pattern: 'Sufijación Posposicional Espacial (-ba, -ra, -ri)',
    us: 'Posposición Aglutinada (u-ba, yar-ba, man-ri)',
    uk: 'Preposición Analítica Libre',
    explanation: 'Las coordenadas locativas y benefactivas se adosan directamente al final de la raíz sustantiva o pronominal.',
    examples: [
      { us: 'u-ba', uk: 'en la casa', translation: 'en / dentro de la casa' },
      { us: 'yar-ba', uk: 'en la tierra', translation: 'en la tierra / suelo' },
      { us: 'man-ri', uk: 'para ti', translation: 'hacia ti / para ti' }
    ]
  },
  {
    pattern: 'Plural Colectivo Misumalpan en -kuna',
    us: 'Sufijo Colectivo de Linaje (alau-kuna, kuka-kuna)',
    uk: 'Singular de Base (alau, kuka)',
    explanation: 'La marca de pluralización nominal general en la familia Misumalpa se realiza mediante el sufijo colectivo -kuna.',
    examples: [
      { us: 'alaukuna', uk: 'alau', translation: 'hermanos / hermano' },
      { us: 'kukakuna', uk: 'kuka', translation: 'abuelos / abuelo' },
      { us: 'walaukuna', uk: 'walau', translation: 'hermanas / hermana' }
    ]
  },
  {
    pattern: 'Estativo Descriptivo en -ki',
    us: 'Sufijo de Estado (yam-ki, pura-ki)',
    uk: 'Raíz Libre (yam, pura)',
    explanation: 'Para predicar una condición temporal o cualidad estativa, la raíz adjetival adopta el sufijo derivativo -ki.',
    examples: [
      { us: 'yamki', uk: 'yam', translation: 'está bien / se encuentra bien' },
      { us: 'puraki', uk: 'pura', translation: 'está seco / limpio' }
    ]
  }
];

export const KAKAWIRA_VOCABULARY_PAIRS: VocabularyPair[] = [
  { category: 'Términos de Cacaopera', us: 'Cacaopera Tradicional', uk: 'Tronco Misumalpa', spanish: 'Agua del río', sampleSentenceUS: 'Yam li am tik Cacaopera.', sampleSentenceUK: 'Apik li am tik río Torola.' },
  { category: 'Términos de Cacaopera', us: 'wirika (guacamaya / ave)', uk: 'tocado de plumas ritual', spanish: 'Plumas sagradas', sampleSentenceUS: 'Wali wirika plumas.', sampleSentenceUK: 'Danza ka plumas.' },
  { category: 'Términos de Cacaopera', us: 'wapa (fuego del hogar)', uk: 'taltikpak (tierra sagrada)', spanish: 'Elementos del cosmos', sampleSentenceUS: 'Puk ne wapa tik asun.', sampleSentenceUK: 'Yar ne taltikpak pal Morazán.' },
  { category: 'Parentesco Familiar', us: 'tata (padre / venerable)', uk: 'nana (madre / protectora)', spanish: 'Padres del linaje', sampleSentenceUS: 'I-tata yar yapa.', sampleSentenceUK: 'I-nana kuyu tamal yapa.' },
  { category: 'Danza Ceremonial', us: 'wali (danzante ritual)', uk: 'tumpa (penacho y tambor)', spanish: 'Elementos de la Danza', sampleSentenceUS: 'Wali wara atrio-ba.', sampleSentenceUK: 'Tumpa son daira yam.' },
  { category: 'Agricultura Ancestral', us: 'kuyu (maíz de milpa)', uk: 'muti (frijol negro)', spanish: 'Granos de subsistencia', sampleSentenceUS: 'Kuyu amba yar-ba wara.', sampleSentenceUK: 'Muti pura daira yam.' },
  { category: 'Toponimia e Hidrografía', us: 'Li Torola (río Torola sagrado)', uk: 'yar cerro (monte tutelar)', spanish: 'Entorno geográfico', sampleSentenceUS: 'Li Torola amba wara.', sampleSentenceUK: 'Yar cerro wirika guarda.' }
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
  },
  {
    title: 'Prefijos Posesivos Inalienables i-, ma-, a- y ura-',
    concept: 'La relación de pertenencia íntima se codifica mediante prefijos pronominales inalienables fijos.',
    ruleUS: 'i- (mi), ma- (tu), a- (su de él/ella), ura- (nuestro).',
    ruleUK: 'Español: Determinantes posesivos libres antepuestos.',
    exampleUS: 'Ura-winakirika yar yam yapa.',
    exampleUK: 'Nuestra comunidad cuida la tierra con amor.',
    pedagogicalNote: 'Los prefijos posesivos se adhieren directamente a la raíz sin partícula intermedia.'
  },
  {
    title: 'Construcción Auxiliar Causativa con yapa',
    concept: 'El verbo yapa (hacer / cultivar / propiciar) funciona como auxiliar causativo para generar acciones activas.',
    ruleUS: 'Sustantivo + yapa (ej. fuego yapa = encender fuego; daño yapa = perjudicar).',
    ruleUK: 'Español: Verbos simples independientes (encender, bañar, cultivar).',
    exampleUS: 'Yar yapa kuyu yam.',
    exampleUK: 'La tierra hace crecer bien el maíz.',
    pedagogicalNote: 'Yapa es la raíz verbal más productiva del léxico de acción en Cacaopera.'
  },
  {
    title: 'Ausencia de Género Gramatical Arbitrario',
    concept: 'Los sustantivos inanimados no poseen género masculino o femenino; solo los seres animados diferencian sexo mediante calificadores.',
    ruleUS: 'Binikuna alau (hijo varón) / binikuna walau (hija mujer).',
    ruleUK: 'Español: Género intrínseco obligatorio en todo sustantivo (la mesa, el libro).',
    exampleUS: 'Li am yam ki.',
    exampleUK: 'El agua fresca está buena.',
    pedagogicalNote: 'No busques marcas de género en objetos inertes o plantas en lengua Kakawira.'
  }
];

export const KAKAWIRA_PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'La consonante W /w/ en Kakawira',
    feature: 'Sonido suave aproximante labiovelar.',
    usBehavior: 'Wirika (/wiˈri.ka/ = guacamaya).',
    ukBehavior: 'Wapa (/ˈwa.pa/ = fuego).',
    examples: [
      { word: 'wirika', usIpa: '/wiˈri.ka/', ukIpa: '/wi.ri.ka/', audioNote: 'Pronunciación ceremonial de Cacaopera.' },
      { word: 'wali', usIpa: '/ˈwa.li/', ukIpa: '/va.li/ (error)', audioNote: 'Aproximante labiovelar limpia sin roce labiodental.' }
    ]
  },
  {
    topic: 'Oclusiva Sonora B /b/ frente a P sorda',
    feature: 'Contraste de sonoridad oclusiva bilabial en raíces primarias.',
    usBehavior: 'Burbur (/buɾˈbuɾ/ = blanco): oclusiva sonora.',
    ukBehavior: 'Pojna (/pojˈna/ = tres): oclusiva sorda bilabial.',
    examples: [
      { word: 'binikuna', usIpa: '/bi.niˈku.na/', ukIpa: '/pi.ni.ku.na/ (error)', audioNote: 'Sonoridad bilabial plena al inicio de palabra.' }
    ]
  },
  {
    topic: 'La Líquida Vibrante Simple R /ɾ/ en Cacaopera',
    feature: 'Sonido suave alveolar simple en grupos silábicos.',
    usBehavior: 'Yar (/jaɾ/ = tierra): toque suave apical.',
    ukBehavior: 'Pronunciación ensordecida o gutural.',
    examples: [
      { word: 'tarka', usIpa: '/ˈtaɾ.ka/', ukIpa: '/ta.ka/ (error)', audioNote: 'Vibrante alveolar simple claramente perceptible ante oclusiva velar.' }
    ]
  },
  {
    topic: 'Acentuación Predominantemente Paroxítona (Llana)',
    feature: 'La mayoría de bisílabos y polisílabos llevan el golpe de voz en la penúltima sílaba.',
    usBehavior: 'Dumi (/ˈdu.mi/), Kuyu (/ˈku.ju/): acento en penúltima sílaba.',
    ukBehavior: 'Agudización artificial hispánica (*dumí, *kuyú).',
    examples: [
      { word: 'kuyu', usIpa: '/ˈku.ju/', ukIpa: '/kuˈju/ (error)', audioNote: 'Pronunciar con acentuación serena en la primera sílaba.' }
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

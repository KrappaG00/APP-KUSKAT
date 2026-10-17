import { ENGLISH_LESSONS_BY_LEVEL } from './englishLessons';
import { ENGLISH_QUESTIONS_BANK, ENGLISH_QUESTIONS_BY_LEVEL } from './englishQuestions';
export * from './englishVerbs';
export { ENGLISH_LESSONS_BY_LEVEL } from './englishLessons';
export { ENGLISH_QUESTIONS_BANK, ENGLISH_QUESTIONS_BY_LEVEL } from './englishQuestions';

/**
 * APP-KUSKAT • MÓDULO MAESTRO DE IDIOMAS: INGLÉS
 *
 * Estructura Curricular y Teórica Integral basada en el MCER / CEFR (A1 a C2),
 * dividida rigurosamente entre Inglés Americano (US) e Inglés Británico (UK).
 *
 * Sitios de Referencia y Fuentes Metodológicas Integradas:
 * - Englisch-hilfen.de (Reglas gramaticales, ortografía US vs. UK, tablas de verbos y ejercicios)
 * - Englishteststore.net (Banco estandarizado de selección múltiple por competencias A1-C2)
 * - Agendaweb.org (Syllabus pedagógico, sintaxis y morfología clasificada)
 *
 * Formato de evaluación:
 * - Estrictamente selección múltiple (A, B, C, D)
 * - Sin pruebas de escritura libre ni producción oral
 * - Claves oficiales y justificaciones pedagógicas detalladas
 */

export type VariantType = 'US' | 'UK' | 'ALL';
export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export interface LanguageOption {
  key: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface LanguageQuestion {
  id: string;
  number: number;
  level: CEFRLevel;
  variant: VariantType;
  topic: string;
  statement: string;
  options: LanguageOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  distractorAnalysis?: {
    option: 'A' | 'B' | 'C' | 'D';
    reason: string;
  }[];
  referenceSite: string;
}

export interface SpellingRule {
  pattern: string;
  us: string;
  uk: string;
  explanation: string;
  examples: { us: string; uk: string; translation: string }[];
}

export interface VocabularyPair {
  category: string;
  us: string;
  uk: string;
  spanish: string;
  sampleSentenceUS: string;
  sampleSentenceUK: string;
}

export interface GrammarDistinction {
  title: string;
  concept: string;
  ruleUS: string;
  ruleUK: string;
  exampleUS: string;
  exampleUK: string;
  pedagogicalNote: string;
}

export interface PhoneticDistinction {
  topic: string;
  feature: string;
  usBehavior: string;
  ukBehavior: string;
  examples: { word: string; usIpa: string; ukIpa: string; audioNote: string }[];
}

export interface GrammarTopicLesson {
  id: string;
  title: string;
  level: CEFRLevel;
  category: string;
  summary: string;
  formula?: string;
  rules: string[];
  examplesUS: string[];
  examplesUK: string[];
  commonMistakes: string[];
  referenceLink: string;
}

export interface LevelCurriculumInfo {
  level: CEFRLevel;
  name: string;
  nameSpanish: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  description: string;
  canDoStatements: string[];
  coreTopics: string[];
  grammarLessons: GrammarTopicLesson[];
}

// ============================================================================
// 1. COMPARATIVA INTEGRAL: AMERICAN ENGLISH (US) vs. BRITISH ENGLISH (UK)
// ============================================================================

export const SPELLING_RULES: SpellingRule[] = [
  {
    pattern: '-or vs. -our',
    us: 'color, honor, favor, labor, neighbor, humor, flavor',
    uk: 'colour, honour, favour, labour, neighbour, humour, flavour',
    explanation: 'Noah Webster eliminó la "u" innecesaria en el primer diccionario estadounidense para reflejar la raíz latina directa y simplificar la ortografía respecto al francés normando adoptado en Gran Bretaña.',
    examples: [
      { us: 'What is your favorite color?', uk: 'What is your favourite colour?', translation: '¿Cuál es tu color favorito?' },
      { us: 'It is a great honor to meet you.', uk: 'It is a great honour to meet you.', translation: 'Es un gran honor conocerle.' },
      { us: 'Our neighbors are very kind.', uk: 'Our neighbours are very kind.', translation: 'Nuestros vecinos son muy amables.' },
    ],
  },
  {
    pattern: '-ize vs. -ise',
    us: 'organize, realize, recognize, analyze (con -yze)',
    uk: 'organise, realise, recognise, analyse (con -yse)',
    explanation: 'En el estándar británico general es predominante la terminación "-ise" (estilo BBC y Cambridge), aunque el Oxford English Dictionary permite "-ize". En el estándar estadounidense "-ize" y "-yze" (analyze, paralyze) son estrictamente obligatorios.',
    examples: [
      { us: 'They need to organize the event.', uk: 'They need to organise the event.', translation: 'Necesitan organizar el evento.' },
      { us: 'She didn’t realize the danger.', uk: 'She didn’t realise the danger.', translation: 'Ella no se dio cuenta del peligro.' },
      { us: 'We must analyze the scientific data.', uk: 'We must analyse the scientific data.', translation: 'Debemos analizar los datos científicos.' },
    ],
  },
  {
    pattern: '-er vs. -re',
    us: 'center, theater, meter, liter, fiber, caliber',
    uk: 'centre, theatre, metre, litre, fibre, calibre',
    explanation: 'El inglés británico conservó la grafía de raíz francesa medieval "-re". El inglés estadounidense adoptó la grafía fonética lógica "-er". (Nota: En UK, "meter" se reserva solo para instrumentos de medición como velocímetro o termómetro).',
    examples: [
      { us: 'We met at the city center.', uk: 'We met at the city centre.', translation: 'Nos encontramos en el centro de la ciudad.' },
      { us: 'The theater was crowded.', uk: 'The theatre was crowded.', translation: 'El teatro estaba lleno.' },
      { us: 'The track is 400 meters long.', uk: 'The track is 400 metres long.', translation: 'La pista mide 400 metros de largo.' },
    ],
  },
  {
    pattern: '-ense vs. -ence',
    us: 'defense, offense, license (sustantivo y verbo), practice (sust. y verbo)',
    uk: 'defence, offence, licence (sust.) / license (verbo), practice (sust.) / practise (verbo)',
    explanation: 'En el inglés británico existe distinción morfosintáctica obligatoria: "-ce" es sustantivo (driving licence, legal practice) y "-se" es verbo (to license, to practise). En el inglés estadounidense se homogeneizó: "defense/offense" con "s", y "license/practice" para ambas categorías gramaticales.',
    examples: [
      { us: 'A strong defense won the game.', uk: 'A strong defence won the match.', translation: 'Una sólida defensa ganó el juego/partido.' },
      { us: 'Do you have a driver’s license?', uk: 'Do you have a driving licence?', translation: '¿Tienes licencia de conducir?' },
      { us: 'Doctors license new treatments.', uk: 'Doctors licence new treatments.', translation: 'Los médicos autorizan nuevos tratamientos.' },
    ],
  },
  {
    pattern: 'Duplicación de "L" (Consonante Final)',
    us: 'traveling, canceled, fueled, labeled, modeling',
    uk: 'travelling, cancelled, fuelled, labelled, modelling',
    explanation: 'En el inglés británico, la consonante "l" final tras una sola vocal siempre se duplica al añadir sufijos vocálicos (-ing, -ed, -er), sin importar la sílaba tónica. En el inglés estadounidense solo se duplica si el acento recae en la última sílaba (compel -> compelled, pero travel -> traveled).',
    examples: [
      { us: 'I enjoy traveling around the world.', uk: 'I enjoy travelling around the world.', translation: 'Disfruto viajar por el mundo.' },
      { us: 'The morning flight was canceled.', uk: 'The morning flight was cancelled.', translation: 'El vuelo de la mañana fue cancelado.' },
    ],
  },
  {
    pattern: '-og vs. -ogue',
    us: 'catalog, dialog, analog, monolog',
    uk: 'catalogue, dialogue, analogue, monologue',
    explanation: 'Simplificación moderna en EE. UU. eliminando el dígrafo mudo francés "-ue". El estándar británico y de la Commonwealth retiene la forma clásica completa.',
    examples: [
      { us: 'Check our online catalog.', uk: 'Check our online catalogue.', translation: 'Revisa nuestro catálogo en línea.' },
      { us: 'A meaningful dialog took place.', uk: 'A meaningful dialogue took place.', translation: 'Se llevó a cabo un diálogo constructivo.' },
    ],
  },
  {
    pattern: 'Diptongos Clásicos (-ae- / -oe-)',
    us: 'pediatric, encyclopedia, leukemia, maneuver',
    uk: 'paediatric, encyclopaedia, leukaemia, manoeuvre',
    explanation: 'El inglés británico preserva la raíz etimológica grecolatina clásica con "ae" y "oe". El inglés estadounidense simplificó estos grupos vocálicos a una sola "e".',
    examples: [
      { us: 'He is a pediatric doctor.', uk: 'He is a paediatric doctor.', translation: 'Él es un médico pediatra.' },
      { us: 'Look it up in the encyclopedia.', uk: 'Look it up in the encyclopaedia.', translation: 'Búscalo en la enciclopedia.' },
    ],
  },
];

export const VOCABULARY_PAIRS: VocabularyPair[] = [
  // Vivienda & Ciudad
  {
    category: 'Vivienda & Ciudad',
    us: 'Apartment',
    uk: 'Flat',
    spanish: 'Apartamento / Piso',
    sampleSentenceUS: 'I just rented a new apartment in Chicago.',
    sampleSentenceUK: 'I have just rented a new flat in Manchester.',
  },
  {
    category: 'Vivienda & Ciudad',
    us: 'Elevator',
    uk: 'Lift',
    spanish: 'Ascensor / Elevador',
    sampleSentenceUS: 'Take the elevator to the tenth floor.',
    sampleSentenceUK: 'Take the lift to the tenth floor.',
  },
  {
    category: 'Vivienda & Ciudad',
    us: 'First floor',
    uk: 'Ground floor',
    spanish: 'Planta baja (Nota: 2nd floor en US = 1st floor en UK)',
    sampleSentenceUS: 'The reception desk is on the first floor.',
    sampleSentenceUK: 'The reception desk is on the ground floor.',
  },
  {
    category: 'Vivienda & Ciudad',
    us: 'Sidewalk',
    uk: 'Pavement / Footpath',
    spanish: 'Acera / Vereda',
    sampleSentenceUS: 'Please walk on the sidewalk for your safety.',
    sampleSentenceUK: 'Please walk on the pavement for your safety.',
  },
  {
    category: 'Vivienda & Ciudad',
    us: 'Crosswalk',
    uk: 'Zebra crossing / Pedestrian crossing',
    spanish: 'Paso de cebra / Cruce peatonal',
    sampleSentenceUS: 'Wait at the crosswalk until the light turns green.',
    sampleSentenceUK: 'Wait at the zebra crossing until the green man shows.',
  },
  {
    category: 'Vivienda & Ciudad',
    us: 'Trash / Garbage',
    uk: 'Rubbish',
    spanish: 'Basura / Desechos',
    sampleSentenceUS: 'Do not throw garbage on the street.',
    sampleSentenceUK: 'Do not throw rubbish in the street.',
  },
  {
    category: 'Vivienda & Ciudad',
    us: 'Trash can',
    uk: 'Dustbin / Bin',
    spanish: 'Basurero / Tacho de basura',
    sampleSentenceUS: 'Drop the empty cup in the trash can.',
    sampleSentenceUK: 'Drop the empty cup into the bin.',
  },

  // Transporte & Automotores
  {
    category: 'Transporte & Automotores',
    us: 'Subway',
    uk: 'Underground / Tube',
    spanish: 'Tren subterráneo / Metro',
    sampleSentenceUS: 'The New York subway runs 24 hours a day.',
    sampleSentenceUK: 'The London Underground is also known as the Tube.',
  },
  {
    category: 'Transporte & Automotores',
    us: 'Gas / Gasoline',
    uk: 'Petrol',
    spanish: 'Gasolina / Combustible vehicular',
    sampleSentenceUS: 'We need to stop for gas before the highway.',
    sampleSentenceUK: 'We need to fill up with petrol before the motorway.',
  },
  {
    category: 'Transporte & Automotores',
    us: 'Highway / Freeway',
    uk: 'Motorway',
    spanish: 'Autopista / Autovía de alta velocidad',
    sampleSentenceUS: 'There was heavy traffic on the freeway this morning.',
    sampleSentenceUK: 'There was heavy traffic on the motorway this morning.',
  },
  {
    category: 'Transporte & Automotores',
    us: 'Trunk (of a car)',
    uk: 'Boot',
    spanish: 'Maletero / Cajuela del auto',
    sampleSentenceUS: 'Put your heavy suitcases in the trunk.',
    sampleSentenceUK: 'Put your heavy suitcases in the boot.',
  },
  {
    category: 'Transporte & Automotores',
    us: 'Hood (of a car)',
    uk: 'Bonnet',
    spanish: 'Capó del motor',
    sampleSentenceUS: 'Open the hood to check the engine oil.',
    sampleSentenceUK: 'Open the bonnet to inspect the engine.',
  },
  {
    category: 'Transporte & Automotores',
    us: 'Windshield',
    uk: 'Windscreen',
    spanish: 'Parabrisas',
    sampleSentenceUS: 'A pebble cracked the car windshield.',
    sampleSentenceUK: 'A stone chipped the car windscreen.',
  },
  {
    category: 'Transporte & Automotores',
    us: 'Parking lot',
    uk: 'Car park',
    spanish: 'Estacionamiento / Parqueadero',
    sampleSentenceUS: 'The parking lot is full on weekends.',
    sampleSentenceUK: 'The car park is full at weekends.',
  },
  {
    category: 'Transporte & Automotores',
    us: 'Truck',
    uk: 'Lorry',
    spanish: 'Camión de carga pesada',
    sampleSentenceUS: 'A large delivery truck blocked the street.',
    sampleSentenceUK: 'A large delivery lorry blocked the road.',
  },

  // Ropa & Calzado
  {
    category: 'Ropa & Calzado',
    us: 'Pants',
    uk: 'Trousers (pants = ropa interior)',
    spanish: 'Pantalones (¡Alerta!: en UK "pants" significa calzoncillo/braga)',
    sampleSentenceUS: 'He bought a new pair of gray pants.',
    sampleSentenceUK: 'He bought a smart pair of grey trousers.',
  },
  {
    category: 'Ropa & Calzado',
    us: 'Sneakers',
    uk: 'Trainers',
    spanish: 'Zapatillas deportivas / Tenis',
    sampleSentenceUS: 'Put on your running sneakers for the marathon.',
    sampleSentenceUK: 'Lace up your trainers before the jog.',
  },
  {
    category: 'Ropa & Calzado',
    us: 'Sweater',
    uk: 'Jumper / Pullover',
    spanish: 'Suéter / Jersey de lana',
    sampleSentenceUS: 'It is chilly outside, put on a warm sweater.',
    sampleSentenceUK: 'It is quite cold today, wear a woollen jumper.',
  },
  {
    category: 'Ropa & Calzado',
    us: 'Diaper',
    uk: 'Nappy',
    spanish: 'Pañal infantil',
    sampleSentenceUS: 'The baby needs a clean diaper.',
    sampleSentenceUK: 'The baby needs a fresh nappy.',
  },
  {
    category: 'Ropa & Calzado',
    us: 'Band-Aid',
    uk: 'Plaster',
    spanish: 'Curita / Parche adhesivo medicinal',
    sampleSentenceUS: 'Put a Band-Aid over the paper cut.',
    sampleSentenceUK: 'Stick a plaster on your cut.',
  },

  // Comida & Bebida
  {
    category: 'Comida & Bebida',
    us: 'Cookie',
    uk: 'Biscuit',
    spanish: 'Galleta dulce',
    sampleSentenceUS: 'Chocolate chip cookies are my favorite snack.',
    sampleSentenceUK: 'Would you like a digestive biscuit with your tea?',
  },
  {
    category: 'Comida & Bebida',
    us: 'Potato chips',
    uk: 'Crisps',
    spanish: 'Papas fritas de bolsa',
    sampleSentenceUS: 'I bought a bag of barbecue potato chips.',
    sampleSentenceUK: 'I bought a packet of salt and vinegar crisps.',
  },
  {
    category: 'Comida & Bebida',
    us: 'French fries',
    uk: 'Chips (Fish and chips)',
    spanish: 'Papas fritas calientes en bastón',
    sampleSentenceUS: 'Do you want french fries with your burger?',
    sampleSentenceUK: 'I ordered fish and chips with mushy peas.',
  },
  {
    category: 'Comida & Bebida',
    us: 'Eggplant',
    uk: 'Aubergine',
    spanish: 'Berenjena',
    sampleSentenceUS: 'We baked an eggplant parmesan.',
    sampleSentenceUK: 'She cooked a delicious aubergine curry.',
  },
  {
    category: 'Comida & Bebida',
    us: 'Zucchini',
    uk: 'Courgette',
    spanish: 'Calabacín',
    sampleSentenceUS: 'Add sliced zucchini to the pasta sauce.',
    sampleSentenceUK: 'Stir in diced courgette to the stew.',
  },
  {
    category: 'Comida & Bebida',
    us: 'Cotton candy',
    uk: 'Candy floss',
    spanish: 'Algodón de azúcar',
    sampleSentenceUS: 'Children love pink cotton candy at the fair.',
    sampleSentenceUK: 'Children adore candy floss at the seaside carnival.',
  },

  // Educación & Cotidiano
  {
    category: 'Educación & Cotidiano',
    us: 'Vacation',
    uk: 'Holiday(s)',
    spanish: 'Vacaciones',
    sampleSentenceUS: 'Where are you going on summer vacation?',
    sampleSentenceUK: 'Where are you going for your summer holiday?',
  },
  {
    category: 'Educación & Cotidiano',
    us: 'Eraser',
    uk: 'Rubber',
    spanish: 'Borrador / Goma de borrar',
    sampleSentenceUS: 'Can I borrow your pencil eraser?',
    sampleSentenceUK: 'May I borrow your rubber, please?',
  },
  {
    category: 'Educación & Cotidiano',
    us: 'Principal',
    uk: 'Headmaster / Headteacher',
    spanish: 'Director(a) escolar',
    sampleSentenceUS: 'The principal addressed the whole high school.',
    sampleSentenceUK: 'The headteacher gave a speech at morning assembly.',
  },
  {
    category: 'Educación & Cotidiano',
    us: 'Schedule',
    uk: 'Timetable',
    spanish: 'Horario de clases o de trenes',
    sampleSentenceUS: 'Check the class schedule online.',
    sampleSentenceUK: 'Check the train timetable at the station.',
  },
  {
    category: 'Educación & Cotidiano',
    us: 'Fall (estación)',
    uk: 'Autumn',
    spanish: 'Otoño',
    sampleSentenceUS: 'The leaves turn red and gold in the fall.',
    sampleSentenceUK: 'The leaves turn golden during autumn.',
  },
  {
    category: 'Educación & Cotidiano',
    us: 'Cell phone',
    uk: 'Mobile (phone)',
    spanish: 'Teléfono celular / Móvil',
    sampleSentenceUS: 'Turn off your cell phone during the movie.',
    sampleSentenceUK: 'Switch off your mobile phone in the theatre.',
  },
  {
    category: 'Educación & Cotidiano',
    us: 'Line (en espera)',
    uk: 'Queue',
    spanish: 'Fila / Cola de espera',
    sampleSentenceUS: 'We had to stand in line for thirty minutes.',
    sampleSentenceUK: 'We had to join the queue at the post office.',
  },
  {
    category: 'Educación & Cotidiano',
    us: 'Mail / Mailbox',
    uk: 'Post / Postbox',
    spanish: 'Correo postal / Buzón',
    sampleSentenceUS: 'Did you check the mailbox this morning?',
    sampleSentenceUK: 'Did you drop the letter into the postbox?',
  },
];

export const GRAMMAR_DISTINCTIONS: GrammarDistinction[] = [
  {
    title: 'Present Perfect vs. Past Simple con Adverbios de Tiempo (just, already, yet)',
    concept: 'Conexión psicológica con el presente frente al reporte de acciones cerradas en el pasado.',
    ruleUS: 'En el inglés estadounidense informal y estándar es muy habitual y correcto emplear el Past Simple con adverbios como "just", "already" o "yet" cuando la acción ya ocurrió.',
    ruleUK: 'En el estándar británico formal y académico (Cambridge, Oxford) es estrictamente mandatorio usar el Present Perfect porque los adverbios "just", "already" y "yet" vinculan la acción directamente con el momento de hablar.',
    exampleUS: 'I just ate lunch. / Did you finish your homework yet? / I already saw that movie.',
    exampleUK: 'I have just eaten lunch. / Have you finished your homework yet? / I have already seen that film.',
    pedagogicalNote: 'En exámenes de suficiencia británica (IELTS, Cambridge First/Advanced) usar "I already did it" suele penalizarse, mientras que en exámenes estadounidenses (TOEFL, SAT, Duolingo) ambas alternativas son válidas.',
  },
  {
    title: 'Posesión y Estado: "Have" vs. "Have got"',
    concept: 'Estructuración sintáctica de la posesión en tiempo presente.',
    ruleUS: 'El inglés estadounidense prefiere el uso regular del verbo transitivo "have" con los auxiliares "do / does / did" en interrogativas y negativas.',
    ruleUK: 'El inglés británico prefiere idiomáticamente la construcción con participio "have got / has got", realizando preguntas y negaciones mediante inversión con el propio auxiliar "have".',
    exampleUS: 'Do you have a car? — No, I don’t have one. / He has two sisters.',
    exampleUK: 'Have you got a car? — No, I haven’t got one. / He has got two sisters.',
    pedagogicalNote: 'En pasado, ambas variantes recurren casi unánimemente a "had" (Did you have...? / I had a bicycle).',
  },
  {
    title: 'Concordancia con Sustantivos Colectivos (Collective Nouns Agreement)',
    concept: 'Concordancia gramatical formal frente a concordancia nocional o semántica.',
    ruleUS: 'Los sustantivos colectivos (team, government, committee, family, staff, band) son tratados rigurosamente como una sola entidad unitaria singular neutra ("it"), por lo que exigen verbo en singular.',
    ruleUK: 'El inglés británico permite la "concordancia nocional": si el hablante concibe al colectivo como un grupo de individuos independientes actuando por separado, utiliza el verbo en plural. Si lo concibe como bloque unitario, usa singular.',
    exampleUS: 'The committee is deciding the budget. / The team is winning the championship.',
    exampleUK: 'The committee are deciding the budget. / The team are celebrating their victory.',
    pedagogicalNote: 'Un error frecuente en estudiantes latinoamericanos es calificar de error gramatical oraciones como "The government are having discussions", cuando en UK es la norma más habitual y respetada.',
  },
  {
    title: 'Preposiciones Temporales y Espaciales',
    concept: 'Colocaciones preposicionales fijas en el discurso cotidiano.',
    ruleUS: 'Usa "on the weekend", "different than / from", "on a team", "Monday through Friday", "quarter after/of".',
    ruleUK: 'Usa "at the weekend", "different to / from", "in a team", "Monday to Friday (inclusive)", "quarter past/to".',
    exampleUS: 'What are you doing on the weekend? / School runs Monday through Friday.',
    exampleUK: 'What are you doing at the weekend? / School runs Monday to Friday.',
    pedagogicalNote: '"Different than" es muy popular en EE. UU.; en el Reino Unido se considera un error estilístico y se prefiere "different from" o "different to".',
  },
  {
    title: 'Morfología de Verbos Irregulares y el Participio "Gotten"',
    concept: 'Preservación de formas arcaicas en EE. UU. vs. regularización o simplificación británica.',
    ruleUS: 'El inglés estadounidense conserva el participio arcaico triforme: get – got – GOTTEN para expresar obtención, proceso o transformación. Para verbos con "-ed/-t", prefiere la terminación regular: burned, dreamed, learned, smelled, spilled.',
    ruleUK: 'El inglés británico abolió "gotten" en el siglo XVII (retiene get – got – GOT). Para verbos mixtos prefiere la variante irregular tradicional con "-t": burnt, dreamt, learnt, smelt, spilt.',
    exampleUS: 'She has gotten much better at English. / He learned how to drive.',
    exampleUK: 'She has got much better at English. / He learnt how to drive.',
    pedagogicalNote: 'En EE. UU., "have got" se restringe a posesión u obligación ("I have got ten dollars" / "I have got to go"), mientras que "have gotten" indica adquisición ("I have gotten ten responses so far"). En UK, "have got" cubre ambos sentidos.',
  },
  {
    title: 'El Modo Subjuntivo Mandativo (Mandative Subjunctive)',
    concept: 'Uso de la forma base verbal tras verbos de mandato, exigencia o recomendación.',
    ruleUS: 'Es sumamente productivo y frecuente en el inglés estadounidense formal y periodístico. Tras verbos o adjetivos como "insist, demand, recommend, crucial that", el verbo subordinado adopta la forma base pura (infinitivo sin "to") para todas las personas.',
    ruleUK: 'El inglés británico tradicional prefiere la perífrasis modal con "should + bare infinitive" o el indicativo en pasado/presente en lugar del subjuntivo simple.',
    exampleUS: 'The doctor insisted that she take a rest and that he be present.',
    exampleUK: 'The doctor insisted that she should take a rest (o: took a rest) and that he should be present.',
    pedagogicalNote: 'Construcciones como "It is vital that he attend the meeting" son 100% estándar en US, mientras que en UK muchos hablantes dirían "It is vital that he should attend".',
  },
];

export const PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'Roticidad (Rhoticity)',
    feature: 'Pronunciación de la letra "R" postvocálica y final.',
    usBehavior: 'Rótico general (General American): La "r" siempre se pronuncia claramente mediante retroflexión o constricción de la lengua (/ɹ/), tanto al final de palabra como antes de consonante (car /kɑːɹ/, hard /hɑːɹd/, bird /bɝːd/).',
    ukBehavior: 'No rótico (Received Pronunciation & Standard Southern British): La "r" solo se articula si va inmediatamente seguida de sonido vocálico. En posición final o pre-consonántica se vocaliza alargando la vocal previa o convirtiéndose en schwa (car /kɑː/, hard /hɑːd/, bird /bɜːd/).',
    examples: [
      { word: 'Car', usIpa: '/kɑːɹ/', ukIpa: '/kɑː/', audioNote: 'US pronuncia la "r" con resonancia bucal; UK alarga la vocal abierta.' },
      { word: 'Water', usIpa: '/ˈwɑː.t̬ɚ/ o /ˈwɔː.t̬ɚ/', ukIpa: '/ˈwɔː.tə/', audioNote: 'US tiene schwa rótica final; UK termina en schwa pura sin vibración.' },
      { word: 'Hard', usIpa: '/hɑːɹd/', ukIpa: '/hɑːd/', audioNote: 'US articula "r" antes de la "d"; UK la omite por completo.' },
    ],
  },
  {
    topic: 'Flapped T (Alveolar Tap [ɾ]) vs. Plosive / Glottal T',
    feature: 'Comportamiento de la consonante /t/ intervocálica.',
    usBehavior: 'La "t" (y a menudo la "d") entre dos vocales, o tras vocal y antes de sílaba átona, se convierte en un toque alveolar suave [ɾ] (similar a la "r" suave del español en "pero"). Palabras como "butter", "city", "water" suenan con toque suave.',
    ukBehavior: 'Conserva la articulación oclusiva alveolar sorda clara /t/ con aspiración, o en registros coloquiales/urbanos se sustituye por oclusión glotal [ʔ] (glottal stop en Cockney y Estuary English).',
    examples: [
      { word: 'Better', usIpa: '/ˈbe.t̬ɚ/ ([ˈbɛɾɚ])', ukIpa: '/ˈbe.tə/', audioNote: 'En US suena similar a "bére-er"; en UK suena con "t" seca y nítida.' },
      { word: 'City', usIpa: '/ˈsɪ.t̬i/ ([ˈsɪɾi])', ukIpa: '/ˈsɪ.ti/', audioNote: 'Toque suave en US; plosión alveolar en UK.' },
    ],
  },
  {
    topic: 'Vocal de BATH (/ɑː/ en UK vs. /æ/ en US)',
    feature: 'Diferencia cualitativa en el fonema vocálico de palabras monosilábicas con "a".',
    usBehavior: 'Pronuncia la vocal abierta anterior no redondeada /æ/ (el sonido "flat a" de "cat"): bath /bæθ/, fast /fæst/, dance /dæns/, ask /æsk/.',
    ukBehavior: 'Pronuncia la vocal abierta posterior larga /ɑː/ ("broad a"): bath /bɑːθ/, fast /fɑːst/, dance /dɑːns/, ask /ɑːsk/.',
    examples: [
      { word: 'Dance', usIpa: '/dæns/', ukIpa: '/dɑːns/', audioNote: 'US usa vocal abierta anterior; UK vocal posterior profunda.' },
      { word: 'Can’t', usIpa: '/kænt/', ukIpa: '/kɑːnt/', audioNote: 'Diferencia fonética radical entre ambas variantes.' },
    ],
  },
  {
    topic: 'Acentuación Silábica en Préstamos Franceses (Word Stress)',
    feature: 'Posición del acento tónico principal.',
    usBehavior: 'Tiende a mantener el acento agudo en la última sílaba, preservando el patrón galo original: adult (a-DULT), garage (ga-RAGE), ballet (ba-LLET), debris (de-BRIS).',
    ukBehavior: 'Suele trasladar el acento a la primera sílaba (patrón germánico trocaico habitual del inglés): AD-ult, GAR-age, BAL-let, DEB-ris.',
    examples: [
      { word: 'Adult', usIpa: '/əˈdʌlt/', ukIpa: '/ˈæd.ʌlt/', audioNote: 'US acentúa segunda sílaba; UK acentúa la primera.' },
      { word: 'Garage', usIpa: '/ɡəˈrɑːʒ/', ukIpa: '/ˈɡær.ɑːʒ/ o /ˈɡær.ɪdʒ/', audioNote: 'US agudo con fricativa final; UK llano.' },
    ],
  },
];

// ============================================================================
// 2. SYLLABUS Y LECCIONES TEÓRICAS POR NIVELES MCER / CEFR (A1 A C2)
// ============================================================================

export const CEFR_CURRICULUM: Record<CEFRLevel, LevelCurriculumInfo> = {
  A1: {
    level: 'A1',
    name: 'Breakthrough / Beginner',
    nameSpanish: 'Principiante / Acceso',
    color: 'from-emerald-600 to-teal-700',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    description: 'Comprende y utiliza expresiones cotidianas de uso muy frecuente y frases sencillas dirigidas a la satisfacción de necesidades inmediatas.',
    canDoStatements: [
      'Presentarse a sí mismo y a otros, responder y hacer preguntas personales (domicilio, posesiones, familia).',
      'Interactuar de forma elemental siempre que el interlocutor hable despacio y con claridad.',
      'Identificar números, horas, días de la semana, fechas y señales públicas básicas.',
    ],
    coreTopics: [
      'Verb To Be (Afirmativo, Negativo, Interrogativo y Respuestas Cortas)',
      'Present Simple & Reglas de la 3ª Persona del Singular (-s, -es, -ies)',
      'Adverbios de Frecuencia (always, usually, often, sometimes, never)',
      'Pronombres Sujeto, Objeto, Posesivos y Genitivo Sajón (\'s)',
      'Artículos: A vs. AN (Regla Fonética Consonante/Vocal) y The',
      'Preposiciones de Tiempo (AT horas, ON días/fechas, IN meses/años)',
      'There is / There are y Cuantificadores Básicos (some, any)',
      'Wh- Questions (What, Where, When, Who, Why, How, How much/many)',
    ],
    grammarLessons: ENGLISH_LESSONS_BY_LEVEL['A1'],
  },
  A2: {
    level: 'A2',
    name: 'Waystage / Elementary',
    nameSpanish: 'Elemental / Plataforma',
    color: 'from-cyan-600 to-blue-700',
    badgeBg: 'bg-cyan-100',
    badgeText: 'text-cyan-800',
    borderColor: 'border-cyan-200',
    description: 'Comprende frases y vocabulario habitual sobre temas de interés personal (familia, compras, trabajo, lugares). Comunica tareas simples y rutinarias en pasado y futuro.',
    canDoStatements: [
      'Describir experiencias pasadas, rutinas previas y eventos concluidos con fechas exactas.',
      'Comparar personas, objetos y situaciones (adjetivos comparativos y superlativos).',
      'Expresar planes futuros concretos (going to) y decisiones espontáneas o predicciones (will).',
      'Manejar sustantivos contables e incontables y sus respectivos cuantificadores.',
    ],
    coreTopics: [
      'Past Simple (Verbos Regulares y Reglas Fonéticas de -ed / Verbos Irregulares)',
      'Past Simple vs. Past Continuous (Estructura con While y When)',
      'Comparativos y Superlativos (Regulares, -y, Polisílabos e Irregulares)',
      'Futuro: Be Going to vs. Will vs. Present Continuous para Arreglos',
      'Sustantivos Contables e Incontables & Cuantificadores (Much, Many, Few, Little)',
      'Verbos Modales de Habilidad y Consejo (Can, Could, Must, Have to, Should)',
      'Infinitivo de Propósito y Verbos seguidos de Gerundio (like, love, enjoy + -ing)',
    ],
    grammarLessons: ENGLISH_LESSONS_BY_LEVEL['A2'],
  },
  B1: {
    level: 'B1',
    name: 'Threshold / Intermediate',
    nameSpanish: 'Intermedio / Umbral',
    color: 'from-blue-600 to-indigo-700',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    description: 'Comprende los puntos principales de textos claros en lengua estándar sobre temas conocidos (trabajo, ocio, estudio). Puede desenvolverse en situaciones cotidianas de viaje y producir textos sencillos y coherentes.',
    canDoStatements: [
      'Contrastar experiencias pasadas y acciones inconclusas con repercusión en el presente (Present Perfect vs. Past Simple).',
      'Elaborar hipótesis reales e hipotéticas presentes (Condicionales 0, 1 y 2).',
      'Construir oraciones en voz pasiva básica para poner el foco en el objeto y no en el agente.',
      'Unir oraciones mediante cláusulas relativas definitorias y emplear modales de deducción lógica.',
    ],
    coreTopics: [
      'Present Perfect Simple vs. Past Simple (Marcadores For, Since, Ever, Never, Just, Already, Yet)',
      'Present Perfect Continuous (Énfasis en la Duración de una Actividad Reciente o en Curso)',
      'Condicionales Cero, Primero y Segundo (Regla del Subjuntivo If I were you)',
      'Voz Pasiva (Presente y Pasado Simple: Estructura Be + Participio Pasado)',
      'Cláusulas Relativas Especificativas (Who, Which, That, Whose, Where & Omisión del Objeto)',
      'Costumbres en el Pasado: Used to vs. Would vs. Past Simple',
      'Modales de Deducción Lógica en Presente (Must = Certeza / Can\'t = Imposibilidad / Might = Posibilidad)',
      'Question Tags (Reglas de Polaridad Inversa y Auxiliares)',
    ],
    grammarLessons: ENGLISH_LESSONS_BY_LEVEL['B1'],
  },
  B2: {
    level: 'B2',
    name: 'Vantage / Upper-Intermediate',
    nameSpanish: 'Intermedio Alto / Avanzado',
    color: 'from-indigo-600 to-purple-700',
    badgeBg: 'bg-indigo-100',
    badgeText: 'text-indigo-800',
    borderColor: 'border-indigo-200',
    description: 'Comprende ideas principales de textos complejos técnicos y abstractos. Se comunica con hablantes nativos con fluidez natural sin esfuerzo. Produce textos detallados argumentando pros y contras.',
    canDoStatements: [
      'Narrar secuencias temporales pasadas complejas usando Past Perfect Simple y Continuous.',
      'Proyectar metas con Future Perfect y Future Continuous.',
      'Manejar Tercer Condicional y Condicionales Mixtos para lamentar hechos pasados con impacto presente.',
      'Transformar oraciones al estilo indirecto (Reported Speech) con verbos de reporte avanzados.',
      'Dominar verbos que cambian de significado al combinarse con Gerundio o Infinitivo (stop, remember, try).',
    ],
    coreTopics: [
      'Past Perfect Simple & Continuous (La Acción Anterior al Pasado y Conectores Cronológicos)',
      'Future Continuous (Acción en Progreso en el Futuro) & Future Perfect (Acción Completada)',
      'Third Conditional & Mixed Conditionals (Condición Pasada con Consecuencia Presente)',
      'Reported Speech Completo: Reglas de Backshift y Reporting Verbs Sintácticos',
      'Gerunds vs. Infinitives con Cambio Semántico Drástico (Remember, Forget, Stop, Regret, Try)',
      'Cláusulas Relativas No Especificativas (Non-Defining con Comas y Pronombres Fijos)',
      'Sintaxis de Phrasal Verbs (Separables con Pronombres Objeto e Inseparables de 3 Palabras)',
      'Estructuras de Deseo y Lamento: Wish / If only (+ Past Simple / + Past Perfect / + Would)',
    ],
    grammarLessons: ENGLISH_LESSONS_BY_LEVEL['B2'],
  },
  C1: {
    level: 'C1',
    name: 'Effective Operational Proficiency',
    nameSpanish: 'Avanzado / Dominio Operativo Eficaz',
    color: 'from-purple-600 to-pink-700',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    description: 'Comprende textos extensos y exigentes reconociendo sentidos implícitos y matices sutiles. Se expresa de forma fluida y espontánea para fines sociales, académicos y profesionales.',
    canDoStatements: [
      'Utilizar estructuras enfáticas de inversión estilística con adverbios restrictivos negativos.',
      'Estructurar oraciones hendidas (Cleft Sentences) para focalizar elementos retóricos del discurso.',
      'Emplear pasivas impersonales y de reporte ("It is said that...", "Subject is alleged to have done...").',
      'Dominar el subjuntivo mandativo y el pasado irreal (It is high time you did, would rather you did).',
      'Articular argumentos con conectores discursivos de concesión sofisticados (albeit, notwithstanding, much as).',
    ],
    coreTopics: [
      'Inversión Sujeto-Auxiliar con Adverbios Negativos (Hardly, Seldom, Rarely, Under no circumstances)',
      'Cleft Sentences Enfáticas (It-clefts, Wh- pseudo-clefts, All that clefts)',
      'Pasiva Impersonal y Estructuras Causativas Avanzadas (Have something done / Get someone to do)',
      'Subjuntivo Mandativo y Pasado Irreal (High time + Past Simple / Would rather + Past Simple)',
      'Modales de Deducción en Pasado (Must have been, Can\'t have done, Needn\'t have done vs. Didn\'t need to)',
      'Marcadores Discursivos y Cohesivos Avanzados (Notwithstanding, Albeit, In spite of the fact that)',
    ],
    grammarLessons: ENGLISH_LESSONS_BY_LEVEL['C1'],
  },
  C2: {
    level: 'C2',
    name: 'Mastery / Proficiency',
    nameSpanish: 'Maestría / Proficiencia Nativa',
    color: 'from-rose-600 to-red-800',
    badgeBg: 'bg-rose-100',
    badgeText: 'text-rose-800',
    borderColor: 'border-rose-200',
    description: 'Comprende con facilidad prácticamente todo lo que lee u oye. Reconstruye información de diversas fuentes lingüísticas con argumentación coherente. Se expresa con máxima fluidez y precisión reconociendo los matices más finos de registro y retórica.',
    canDoStatements: [
      'Dominar inversiones estilísticas literarias y construcciones absolutas de participio con sujeto independiente.',
      'Utilizar elipsis sofisticada y mecanismos de cohesión avanzada para evitar redundancias.',
      'Manejar binomios léxicos irreversibles y colocaciones densas del registro profesional e institucional.',
      'Identificar y emplear la modalización epistémica sutil (disposición habitual con will, to be to para destino).',
    ],
    coreTopics: [
      'Inversiones Literarias y de Movimiento Locativo (Fronting preposicional, adjetival y participial)',
      'Construcciones Absolutas de Participio con Sujeto Propio (Absolute Clauses & Dangling Avoidance)',
      'Elipsis Sintáctica Completa y Sustitución Cohesiva (so, neither, nor, such, not)',
      'Modalización Epistémica y Deóntica Arcaica / Formal (To be to + infinitive, Disposición habitual con will)',
      'Fronting Estilístico, Lítotes y Doble Negación Retórica (Not inconsiderable, Difficult though it was)',
      'Binomios Irreversibles y Colocaciones Léxico-Gramaticales Densas (Part and parcel, Null and void)',
    ],
    grammarLessons: ENGLISH_LESSONS_BY_LEVEL['C2'],
  },
};

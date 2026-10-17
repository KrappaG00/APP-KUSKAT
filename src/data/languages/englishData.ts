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
    grammarLessons: [
      {
        id: 'a1_tobe',
        title: 'El Verbo To Be: Ser y Estar',
        level: 'A1',
        category: 'Verbos Fundamentales',
        summary: 'Pilar angular del idioma. Funciona como verbo principal y verbo auxiliar. No requiere auxiliares do/does para negar o preguntar.',
        formula: 'Afirmativo: Sujeto + am/is/are. Negativo: Sujeto + am/is/are + not. Pregunta: Am/Is/Are + Sujeto?',
        rules: [
          'I concuerda únicamente con AM (contracción: I\'m).',
          'He, She, It (3ª persona singular) concuerdan con IS (contracciones: He\'s, She\'s, It\'s; negativa: isn\'t).',
          'You, We, They (plurales y 2ª persona) concuerdan con ARE (contracciones: You\'re, We\'re, They\'re; negativa: aren\'t).',
          'En preguntas, se invierte la posición: Is he a doctor? / Are they at home?',
          'En respuestas cortas afirmativas NUNCA se usa contracción: "Yes, I am" (correcto) vs "Yes, I\'m" (incorrecto).',
        ],
        examplesUS: ['I am from New York. / Are you a student? / Yes, I am.'],
        examplesUK: ['I am from London. / Are you a student? / Yes, I am.'],
        commonMistakes: [
          'Decir "I have 20 years" en vez de "I am 20 years old" (en inglés la edad se es, no se tiene).',
          'Contratar en respuestas cortas afirmativas: decir "Yes, he\'s" en vez de "Yes, he is".',
        ],
        referenceLink: 'https://www.englisch-hilfen.de/en/grammar/to_be.htm',
      },
      {
        id: 'a1_presentsimple',
        title: 'Present Simple: Hábitos, Rutinas y Verdades Generales',
        level: 'A1',
        category: 'Tiempos Verbales Presentes',
        summary: 'Expresa acciones habituales, hechos científicos y estados permanentes. Requiere atención especial a la terminación -s en la 3ª persona singular.',
        formula: 'Afirmativo: S + V(base) / V(-s/-es). Negativo: S + do/does + not + V(base). Pregunta: Do/Does + S + V(base)?',
        rules: [
          'Regla general de 3ª persona: añadir -s (work -> works, live -> lives).',
          'Verbos terminados en -ch, -sh, -ss, -x, -o: añadir -es (watch -> watches, wash -> washes, pass -> passes, go -> goes).',
          'Verbos terminados en consonante + y: cambian a -ies (study -> studies, fly -> flies). Si terminan en vocal + y, solo -s (play -> plays).',
          'Auxiliares de negación y pregunta: Do/Don\'t (I, you, we, they) y Does/Doesn\'t (he, she, it).',
          '¡REGLA DE ORO!: Cuando el auxiliar DOES o DOESN\'T está presente, el verbo principal pierde la -s y vuelve a su forma base (He doesn\'t work, NOT He doesn\'t works).',
        ],
        examplesUS: ['He lives in California and he drives a truck to work every day.'],
        examplesUK: ['He lives in Surrey and he drives a lorry to work every day.'],
        commonMistakes: [
          'Olvidar la -s en afirmativas de 3ª persona: "She work here" (error).',
          'Mantener la -s con auxiliar does: "Does he lives here?" (error grave).',
        ],
        referenceLink: 'https://www.englisch-hilfen.de/en/grammar/sim_pres.htm',
      },
      {
        id: 'a1_articles',
        title: 'Artículos: A vs. AN y The',
        level: 'A1',
        category: 'Determinantes & Fonética',
        summary: 'La elección entre "a" y "an" depende exclusivamente del SONIDO inicial (fonema) de la palabra siguiente, no de su letra gráfica.',
        formula: 'A + sonido consonante. AN + sonido vocálico.',
        rules: [
          'Usa "a" ante sonido consonante: a book, a car, a dog, a pencil.',
          'Usa "an" ante sonido vocal: an apple, an elephant, an ice cream, an umbrella.',
          '¡Caso de la H!: Si la H es muda (sonido vocal), usa AN: an hour, an honor, an honest man. Si la H suena aspirada (/h/), usa A: a house, a hospital, a hotel.',
          '¡Caso de la U y EU!: Si la U suena como semiconsonante /juː/, usa A: a university, a uniform, a European country. Si suena como vocal corta /ʌ/, usa AN: an uncle, an umbrella.',
          'THE es el artículo definido (el/la/los/las). No se usa con nombres genéricos en plural: "Dogs are loyal" (correcto), no "The dogs are loyal" para todos los perros.',
        ],
        examplesUS: ['She works in a university and arrived an hour ago.'],
        examplesUK: ['She works at a university and arrived an hour ago.'],
        commonMistakes: [
          'Escribir "a hour" creyendo que la H siempre es consonante (la H en hour es muda).',
          'Escribir "an university" ignorando que la pronunciación fonética inicia con sonido semiconsonántico /j/.',
        ],
        referenceLink: 'https://agendaweb.org/grammar/articles-exercises.html',
      },
      {
        id: 'a1_prepositions',
        title: 'Preposiciones de Tiempo: AT, ON, IN',
        level: 'A1',
        category: 'Preposiciones',
        summary: 'La regla piramidal de tiempo: de lo muy específico (AT) a lo intermedio (ON) y lo muy amplio o general (IN).',
        rules: [
          'AT (horas y puntos precisos): at 5:00 PM, at midnight, at noon, at night, at Christmas (festividad completa en UK).',
          'ON (días específicos y fechas calendario): on Monday, on Friday morning, on October 16th, on Christmas Day.',
          'IN (meses, años, estaciones, siglos y partes del día): in July, in 2026, in the summer, in the morning, in the evening.',
          'Diferencia US vs. UK: en EE. UU. se dice "on the weekend", mientras que en el Reino Unido se dice "at the weekend".',
        ],
        examplesUS: ['Our class begins at 8:00 on Monday morning and ends in June. We relax on the weekend.'],
        examplesUK: ['Our class begins at 8:00 on Monday morning and ends in June. We relax at the weekend.'],
        commonMistakes: [
          'Decir "in Monday" o "at July".',
          'Confundir "in the night" con "at night" (at night es el término genérico de rutina nocturna).',
        ],
        referenceLink: 'https://www.englisch-hilfen.de/en/grammar/preposition_time.htm',
      },
    ],
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
    grammarLessons: [
      {
        id: 'a2_pastsimple',
        title: 'Past Simple: Verbos Regulares, Irregulares y Fonética de -ED',
        level: 'A2',
        category: 'Tiempos Verbales Pasados',
        summary: 'Expresa acciones terminadas en un tiempo específico del pasado (yesterday, last year, two weeks ago, in 2020).',
        formula: 'Afirmativo: Sujeto + V(past). Negativo: Sujeto + didn\'t + V(base). Pregunta: Did + Sujeto + V(base)?',
        rules: [
          'Verbos regulares: añaden -ed (worked, lived, stopped con duplicación de consonante tras vocal corta tónica).',
          'Pronunciación de -ED: /ɪd/ solo tras sonidos /t/ o /d/ (wanted, decided); /t/ tras consonantes sordas /p, k, f, s, ʃ, tʃ/ (watched, laughed); /d/ tras sonidos sonoros y vocales (played, lived).',
          'Verbos irregulares fundamentales: go -> went, see -> saw, buy -> bought, have -> had, come -> came, take -> took.',
          'Auxiliar DID/DIDN\'T: al utilizar "did" o "didn\'t", el verbo principal NUNCA va en pasado, sino en su forma base infinitiva.',
        ],
        examplesUS: ['Yesterday I traveled to Chicago and bought a new cell phone.'],
        examplesUK: ['Yesterday I travelled to London and bought a new mobile phone.'],
        commonMistakes: [
          'Duplicar el pasado: decir "I didn\'t went" en lugar de "I didn\'t go".',
          'Pronunciar -ed como una sílaba extra siempre (decir "work-ed" con dos sílabas en vez de /wɜːkt/ monosilábico).',
        ],
        referenceLink: 'https://www.englisch-hilfen.de/en/grammar/sim_past.htm',
      },
      {
        id: 'a2_comparatives',
        title: 'Comparativos y Superlativos: Reglas Morfológicas',
        level: 'A2',
        category: 'Adjetivos & Gradación',
        summary: 'Mecanismos morfológicos para comparar dos elementos (comparativo) o destacar uno sobre todo un grupo (superlativo).',
        formula: 'Comparativo: Adj + -er than / More + Adj + than. Superlativo: The + Adj + -est / The most + Adj.',
        rules: [
          '1 sílaba: añade -er / -est (fast -> faster -> fastest; big -> bigger -> biggest).',
          '2 sílabas terminadas en -y: cambian a -ier / -iest (happy -> happier -> happiest).',
          '2 o más sílabas generales: usan more / most (expensive -> more expensive -> most expensive).',
          'Irregulares obligatorios: good -> better -> best; bad -> worse -> worst; far -> farther/further -> farthest/furthest.',
          'Estructura de igualdad: as + adjetivo + as (as tall as my brother).',
        ],
        examplesUS: ['Public transit in Boston is faster than driving, but parking is the most expensive cost.'],
        examplesUK: ['Public transport in London is faster than driving, but the tube is the most convenient option.'],
        commonMistakes: [
          'Decir "more better" o "more big" (pleonasmo incorrecto).',
          'Confundir "then" (luego/entonces) con la partícula comparativa "than" (que).',
        ],
        referenceLink: 'https://www.englisch-hilfen.de/en/grammar/adjektive_steig.htm',
      },
      {
        id: 'a2_futureforms',
        title: 'Futuro: Be Going to vs. Will',
        level: 'A2',
        category: 'Tiempos Verbales Futuros',
        summary: 'Diferenciación psicológica entre planes premeditados (going to) y decisiones espontáneas o predicciones de opinión (will).',
        rules: [
          'BE GOING TO: se emplea para planes ya decididos antes de hablar ("I am going to visit my grandmother this Saturday") y predicciones basadas en evidencia visual presente ("Look at those dark clouds; it is going to rain").',
          'WILL: se emplea para decisiones espontáneas tomadas en el mismo instante de la conversación ("The phone is ringing. I\'ll get it"), promesas ("I will never lie to you"), ofertas de ayuda ("I\'ll help you carry that bag") y predicciones basadas en fe u opinión ("I think it will be sunny").',
          'Present Continuous para futuro: reservado para citas y arreglos irrevocables en día y hora fijos ("I am flying to Madrid tomorrow at 10 AM").',
        ],
        examplesUS: ['I\'m going to buy a new laptop next week. If it breaks, the store will replace it.'],
        examplesUK: ['I\'m going to purchase a new laptop next week. If it fails, the shop will replace it.'],
        commonMistakes: [
          'Usar "will" para planes organizados de vacaciones ("Next summer I will travel" en vez de "I\'m going to travel").',
          'Olvidar el verbo to be con going to (decir "I going to study" en lugar de "I AM going to study").',
        ],
        referenceLink: 'https://agendaweb.org/verbs/future-will-going-to.html',
      },
    ],
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
    grammarLessons: [
      {
        id: 'b1_presentperfect',
        title: 'Present Perfect Simple vs. Past Simple',
        level: 'B1',
        category: 'Tiempos Verbales Conectores',
        summary: 'La gran frontera gramatical en el aprendizaje del inglés: el contraste entre el tiempo cerrado (Past Simple) y el tiempo conectado con el ahora (Present Perfect).',
        formula: 'Present Perfect: Sujeto + have/has + Participio Pasado (3ª columna). Past Simple: Sujeto + V(past).',
        rules: [
          'Usa PAST SIMPLE cuando el periodo de tiempo está cerrado y finalizado (yesterday, last month, in 2019, when I was seven).',
          'Usa PRESENT PERFECT cuando el periodo de tiempo sigue abierto (today, this week, this year, in my life) o cuando el momento exacto no importa, solo el resultado presente.',
          'FOR vs. SINCE: "For" se usa con duración de tiempo (for three years, for two hours). "Since" se usa con un punto de partida exacto (since 2015, since 8:00 AM, since yesterday).',
          'Diferencia US vs. UK: en el Reino Unido "just", "already" y "yet" exigen Present Perfect ("I have already seen it"). En EE. UU. se admite con frecuencia el Past Simple ("I already saw it").',
        ],
        examplesUS: ['I haven\'t finished the report yet, but I already reviewed the financial figures.'],
        examplesUK: ['I haven\'t finished the report yet, but I have already reviewed the financial figures.'],
        commonMistakes: [
          'Usar Present Perfect con fechas cerradas: "I have visited France in 2018" (error -> debe ser "I visited France in 2018").',
          'Confundir "since three years" (error) con "for three years".',
        ],
        referenceLink: 'https://www.englisch-hilfen.de/en/grammar/pres_perf.htm',
      },
      {
        id: 'b1_conditionals',
        title: 'Condicionales: Zero, First & Second Conditional',
        level: 'B1',
        category: 'Estructuras Hipotéticas',
        summary: 'De verdades científicas irrefutables (Zero) a probabilidades futuras (First) e hipótesis irreales en presente (Second).',
        rules: [
          'ZERO CONDITIONAL (Hechos universales): If + Present Simple, Present Simple ("If you heat ice, it melts").',
          'FIRST CONDITIONAL (Situación real/probable en futuro): If + Present Simple, Will + forma base ("If it rains tomorrow, we will stay at home"). Cláusulas con UNLESS (= if not): "Unless you hurry, you will miss the train".',
          'SECOND CONDITIONAL (Hipótesis irreal o contraria al presente): If + Past Simple, Would + forma base ("If I had a million dollars, I would buy an island").',
          'SUBJUNTIVO "WERE": En el segundo condicional, la norma culta formal usa "were" para todas las personas gramaticales: "If I were you, I would take that job offer".',
        ],
        examplesUS: ['If I were the CEO, I would increase the minimum wage immediately.'],
        examplesUK: ['If I were the managing director, I would raise the minimum wage immediately.'],
        commonMistakes: [
          'Poner "will" o "would" dentro de la cláusula de IF: "If I will go..." (error grave) o "If I would have money..." (error grave).',
          'Usar "was" en exámenes formales: "If I was you" es coloquial; "If I were you" es el estándar evaluado.',
        ],
        referenceLink: 'https://www.englisch-hilfen.de/en/grammar/if.htm',
      },
      {
        id: 'b1_modalsdeduction',
        title: 'Modales de Deducción Lógica en Presente (Must, Can\'t, Might)',
        level: 'B1',
        category: 'Verbos Modales Epistémicos',
        summary: 'Evalúa el grado de certeza o deducción lógica que el hablante infiere a partir de la evidencia observable.',
        rules: [
          'MUST (Certeza Afirmativa / 99% seguro de que sí): "He works 14 hours a day and drives a Ferrari; he must be rich."',
          'CAN\'T (Certeza Negativa / 99% seguro de que no / Imposibilidad): "He left Madrid just 10 minutes ago; he can\'t be in Barcelona already."',
          'MIGHT / MAY / COULD (Posibilidad / 50% de probabilidad): "Take a raincoat; it might rain this afternoon."',
          '¡ALERTA CRÍTICA!: "Mustn\'t" NO es deducción de imposibilidad; "mustn\'t" significa estricta PROHIBICIÓN moral o legal (You mustn\'t park here). Para imposibilidad deductiva solo se usa CAN\'T.',
        ],
        examplesUS: ['The store lights are off and the door is locked; they must be closed.'],
        examplesUK: ['The shop lights are switched off and the blinds are drawn; they must be shut.'],
        commonMistakes: [
          'Usar "mustn\'t" para deducción: "It mustn\'t be true" (error) -> debe decirse "It can\'t be true".',
        ],
        referenceLink: 'https://agendaweb.org/verbs/modals-deduction-exercises.html',
      },
    ],
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
    grammarLessons: [
      {
        id: 'b2_pastperfect',
        title: 'Past Perfect Simple & Continuous: La Anterioridad Relativa',
        level: 'B2',
        category: 'Tiempos Verbales Narrativos',
        summary: 'Permite ordenar eventos en el pasado. Es el "pasado del pasado", señalando cuál de dos acciones pretéritas ocurrió antes.',
        formula: 'Past Perfect Simple: S + had + Participio Pasado. Continuous: S + had been + V(-ing).',
        rules: [
          'Usa Past Perfect Simple para la acción más antigua y Past Simple para la posterior: "When the firefighters arrived (Past Simple), the fire had already destroyed the warehouse (Past Perfect)".',
          'Past Perfect Continuous se enfoca en la DURACIÓN y causa continua en el pasado: "His eyes were exhausted because he had been coding for 12 hours".',
          'Conectores clave: by the time (+ Past Simple), before, after, as soon as, already.',
        ],
        examplesUS: ['By the time the manager approved the project, the client had canceled the contract.'],
        examplesUK: ['By the time the manager approved the project, the client had cancelled the contract.'],
        commonMistakes: [
          'Abusar del Past Perfect sin necesidad cronológica cuando las acciones son secuenciales inmediatas con "then" (en ese caso basta Past Simple).',
        ],
        referenceLink: 'https://www.englisch-hilfen.de/en/grammar/past_perf.htm',
      },
      {
        id: 'b2_mixedconditionals',
        title: 'Tercer Condicional y Condicionales Mixtos (Mixed Conditionals)',
        level: 'B2',
        category: 'Estructuras Hipotéticas Avanzadas',
        summary: 'Hipótesis sobre el pasado que no ocurrieron y combinaciones de tiempos donde el pasado altera el presente.',
        rules: [
          'THIRD CONDITIONAL (Hipotético pasado con resultado pasado): If + Past Perfect, Would have + Participio ("If I had studied harder, I would have passed the admission test").',
          'MIXED CONDITIONAL TIPO 1 (Causa hipotética en el pasado con resultado en el PRESENTE): If + Past Perfect, Would + forma base ("If we had caught that train this morning, we would be in Paris right now").',
          'MIXED CONDITIONAL TIPO 2 (Condición permanente presente con resultado en el PASADO): If + Past Simple, Would have + Participio ("If she weren\'t so afraid of flying, she would have traveled with us last week").',
        ],
        examplesUS: ['If I had taken that scholarship last year, I wouldn\'t be paying student loans right now.'],
        examplesUK: ['If I had accepted that university scholarship last year, I wouldn\'t be struggling with tuition right now.'],
        commonMistakes: [
          'Escribir "would have" dentro de la cláusula de IF: "If I would have known..." (grave error; la estructura correcta es "If I had known...").',
        ],
        referenceLink: 'https://www.englisch-hilfen.de/en/grammar/if_mixed.htm',
      },
      {
        id: 'b2_gerundinfinitive',
        title: 'Gerundio vs. Infinitivo con Cambio de Significado',
        level: 'B2',
        category: 'Patrones Sintácticos Verbales',
        summary: 'Verbos cuyo significado cambia radicalmente según vayan seguidos de un verbo en -ing o un infinitivo con to.',
        rules: [
          'STOP + to-infinitive: pausar una acción para hacer otra ("On his way home, he stopped to buy coffee").',
          'STOP + gerund: abandonar o cesar un hábito o actividad por completo ("The doctor advised him to stop smoking").',
          'REMEMBER + to-infinitive: recordar hacer un deber o tarea pendiente ("Remember to lock the door before leaving").',
          'REMEMBER + gerund: evocar el recuerdo nostálgico de una vivencia pasada ("I remember visiting Disney as a child").',
          'TRY + to-infinitive: esforzarse físicamente o mentalmente en una tarea difícil ("I tried to lift the piano, but it was too heavy").',
          'TRY + gerund: experimentar una alternativa o método para resolver un problema ("If you have a headache, try drinking a glass of water").',
          'REGRET + to-infinitive: fórmula formal para comunicar una mala noticia ("We regret to inform you that your application was rejected").',
          'REGRET + gerund: arrepentirse amargamente de un error del pasado ("I regret saying those rude words to my best friend").',
        ],
        examplesUS: ['He stopped drinking coffee because of insomnia, but he stopped to chat with his coworker.'],
        examplesUK: ['He stopped drinking coffee because of insomnia, but he stopped to talk to his colleague.'],
        commonMistakes: [
          'Decir "I stopped to smoke" cuando se quiere decir que se dejó el hábito del cigarrillo (significaría que se detuvo para encender un cigarrillo).',
        ],
        referenceLink: 'https://agendaweb.org/verbs/gerund-infinitive-difference.html',
      },
    ],
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
    grammarLessons: [
      {
        id: 'c1_inversion',
        title: 'Inversión Sujeto-Auxiliar con Adverbios Restrictivos Negativos',
        level: 'C1',
        category: 'Sintaxis y Énfasis Estilístico',
        summary: 'Técnica retórica formal para conferir dramatismo o énfasis extremo invirtiendo el sujeto y el auxiliar al inicio de la oración.',
        formula: 'Adverbio Negativo/Restrictivo + Auxiliar + Sujeto + Verbo principal + Complemento.',
        rules: [
          'Hardly / Scarcely... WHEN: "Hardly had I opened the umbrella when it started pouring."',
          'No sooner... THAN: "No sooner had the plane landed than the passengers unbuckled their seatbelts."',
          'Rarely / Seldom: "Rarely have we witnessed such outstanding scientific leadership."',
          'Under no circumstances / On no account: "Under no circumstances should you touch the high-voltage wire."',
          'Not only... BUT ALSO: "Not only did they meet the deadline, but they also exceeded the revenue targets."',
          'Only after / Only when / Not until: la inversión ocurre en la cláusula PRINCIPAL: "Only when the police arrived did the witnesses feel safe."',
        ],
        examplesUS: ['Under no circumstances are unauthorized personnel permitted in the server room.'],
        examplesUK: ['Under no circumstances are unauthorised personnel permitted in the server room.'],
        commonMistakes: [
          'Olvidar colocar el verbo auxiliar: decir "Hardly I arrived" en lugar de "Hardly HAD I arrived".',
          'Usar "than" con Hardly (Hardly se combina exclusivamente con WHEN; No sooner se combina con THAN).',
        ],
        referenceLink: 'https://www.englisch-hilfen.de/en/grammar/inversion.htm',
      },
      {
        id: 'c1_cleftsentences',
        title: 'Oraciones Hendidas (Cleft Sentences) para Focalización',
        level: 'C1',
        category: 'Estructuras Retóricas',
        summary: 'Divide una sola proposición en dos cláusulas para resaltar o enfatizar un sujeto, objeto, tiempo o acción.',
        rules: [
          'IT-CLEFTS: It + be (is/was) + elemento enfocado + who/that + cláusula ("It was Michael who discovered the error, not Laura").',
          'WH- CLEFTS (Pseudo-clefts): What + cláusula + be (is/was) + elemento enfocado ("What surprised the board was the CFO\'s resignation").',
          'ALL-CLEFTS: All + cláusula + is/was... ("All I need is a little cooperation").',
          'THE PERSON WHO / THE THING THAT: "The thing that bothers me is his complete lack of accountability."',
        ],
        examplesUS: ['What the CEO insisted upon was that everyone be present on Monday morning.'],
        examplesUK: ['What the managing director insisted upon was that everyone should be present on Monday morning.'],
        commonMistakes: [
          'Concordancia errónea en Wh- clefts cuando el complemento es plural: "What we need is new computers" (habitual) vs "What we need ARE new computers" (formal riguroso).',
        ],
        referenceLink: 'https://agendaweb.org/grammar/cleft-sentences.html',
      },
      {
        id: 'c1_mandativesubjunctive',
        title: 'El Subjuntivo Mandativo y el Pasado Irreal',
        level: 'C1',
        category: 'Modo y Deonticidad',
        summary: 'Expresión de necesidad imperativa, recomendación o urgencia institucional mediante la forma base verbal.',
        rules: [
          'Subjuntivo Mandativo en EE. UU.: Se exige tras verbos (recommend, insist, demand, propose, mandate) y adjetivos (essential, crucial, vital, imperative) seguidos de cláusula con THAT: "The court ordered that he PAY the fine" (no pays) y "They demanded that she BE released" (no is).',
          'En el Reino Unido: El estándar culto británico suele preferir la fórmula con modal: "The court ordered that he SHOULD PAY the fine".',
          'IT IS HIGH TIME + Past Simple (reproche o urgencia por una acción atrasada): "It is high time you found a job" (ya deberías tenerlo).',
          'WOULD RATHER + Sujeto + Past Simple (preferencia sobre la conducta de otra persona): "I would rather you didn\'t smoke inside the building."',
        ],
        examplesUS: ['It is essential that each candidate submit their credentials before Friday. I\'d rather you took the exam today.'],
        examplesUK: ['It is essential that each candidate should submit their credentials before Friday. I\'d rather you took the exam today.'],
        commonMistakes: [
          'Poner presente tras "high time": decir "It\'s high time we leave" (error grave -> debe ser "It\'s high time we left").',
        ],
        referenceLink: 'https://www.englisch-hilfen.de/en/grammar/subjunctive.htm',
      },
    ],
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
    grammarLessons: [
      {
        id: 'c2_literaryinversion',
        title: 'Inversiones Literarias, Locativas y Fronting Adjetival',
        level: 'C2',
        category: 'Estilística Literaria y Retórica Superior',
        summary: 'Construcciones sintácticas elevadas propias de la prosa literaria, el periodismo de alto nivel y el discurso solemne.',
        rules: [
          'Inversión locativa / de movimiento: Tras frases preposicionales de dirección al inicio de la oración, el verbo completo (no un auxiliar) precede al sujeto sustantivo: "Down the cobblestone street strolled the mysterious diplomat" (¡Ojo!: si el sujeto es pronombre personal no se invierte: "Down the street he strolled").',
          'Inversión participial / adjetival: "So devastating was the typhoon that entire towns were washed away" / "Gone were the days of effortless economic growth."',
          'Fronting con THOUGH / AS: "Exhausted though they were, the rescue team refused to abandon the search" / "Strange as it may seem, he declined the prestigious award."',
        ],
        examplesUS: ['Gone are the days when companies could ignore digital transformation. Difficult though it was, they persevered.'],
        examplesUK: ['Gone are the days when firms could ignore digital transformation. Difficult though it was, they persevered.'],
        commonMistakes: [
          'Invertir pronombres personales en movimiento locativo: decir "Out of the room ran he" (error -> debe ser "Out of the room he ran").',
        ],
        referenceLink: 'https://www.englisch-hilfen.de/en/grammar/inversion_advanced.htm',
      },
      {
        id: 'c2_absoluteclauses',
        title: 'Cláusulas Absolutas de Participio (Absolute Constructions)',
        level: 'C2',
        category: 'Sintaxis Periférica & Cláusulas Reducidas',
        summary: 'Construcciones subordinadas no finitas que poseen su propio sujeto explícito, independiente del sujeto de la oración principal.',
        rules: [
          'Estructura: Sustantivo/Pronombre + Participio (de presente -ing o de pasado -ed) + complementos: "The weather permitting, the rocket launch will proceed on schedule."',
          'Causa o condición implícita: "His hands trembling with anxiety, the surgeon made the delicate incision."',
          'Participio perfecto pasivo: "The contract having been signed by both parties, the merger became legally binding."',
          'Diferenciación crucial con el "Dangling Participle": Una cláusula de participio sin sujeto propio DEBE referirse inequívocamente al sujeto de la oración principal; de lo contrario, se convierte en un participio flotante agramatical.',
        ],
        examplesUS: ['All things considered, the fiscal stimulus achieved its primary macroeconomic goals.'],
        examplesUK: ['All things considered, the fiscal stimulus achieved its primary macroeconomic objectives.'],
        commonMistakes: [
          'Incurrir en participio flotante: "Walking into the office, the phone rang" (error: sugiere que el teléfono iba caminando). Forma correcta: "Walking into the office, I heard the phone ring".',
        ],
        referenceLink: 'https://agendaweb.org/grammar/participle-clauses-exercises.html',
      },
      {
        id: 'c2_lexicalgrammar',
        title: 'Binomios Irreversibles y Colocaciones Léxico-Gramaticales',
        level: 'C2',
        category: 'Competencia Fraseológica & Colocacional',
        summary: 'Dominio de combinaciones de palabras consagradas idiomáticamente que no admiten inversión en su orden ni reemplazo sinonímico.',
        rules: [
          'Binomios irreversibles: part and parcel (parte consustancial e inseparable), null and void (nulo y sin valor legal), touch and go (incierto y arriesgado), through thick and thin (en las buenas y en las malas), ins and outs (pormenores minuciosos).',
          'Colocaciones densas institucionales: to cast aspersions on someone (difamar), to wreak havoc (causar estragos), to draw the line at (poner un límite ético tajante), to pay lip service to (apoyar solo de palabra).',
          'Lítotes retórico (afirmar algo mediante la negación de su opuesto): "His contribution was not inconsiderable" (= fue verdaderamente gigantesca).',
        ],
        examplesUS: ['Stress is part and parcel of executive management, but the contract was declared null and void.'],
        examplesUK: ['Stress is part and parcel of senior management, but the contract was declared null and void.'],
        commonMistakes: [
          'Invertir el orden fijo de los binomios: decir "parcel and part" o "void and null" resulta completamente artificial.',
        ],
        referenceLink: 'https://www.englisch-hilfen.de/en/grammar/collocations.htm',
      },
    ],
  },
};

// ============================================================================
// 3. BANCO DE PREGUNTAS DE SELECCIÓN MÚLTIPLE (A1 A C2 / US & UK)
// ============================================================================

export const ENGLISH_QUESTIONS_BANK: LanguageQuestion[] = [
  // --------------------------------------------------------------------------
  // NIVEL A1 (Principiante)
  // --------------------------------------------------------------------------
  {
    id: 'eng_a1_01',
    number: 1,
    level: 'A1',
    variant: 'ALL',
    topic: 'Present Simple & 3rd Person Singular',
    statement: 'Sarah is an experienced doctor. She ________ at the municipal hospital every morning.',
    options: [
      { key: 'A', text: 'work' },
      { key: 'B', text: 'works' },
      { key: 'C', text: 'is work' },
      { key: 'D', text: 'working' },
    ],
    correctAnswer: 'B',
    explanation: 'En el Present Simple afirmativo, los sujetos de tercera persona del singular (he, she, it) requieren la terminación gramatical "-s" en el verbo regular (work -> works). La expresión temporal "every morning" denota un hábito rutinario.',
    distractorAnalysis: [
      { option: 'A', reason: '"work" carece de la desinencia "-s" exigida por el sujeto singular "She".' },
      { option: 'C', reason: '"is work" es una combinación agramatical que mezcla el verbo to be con una forma base.' },
      { option: 'D', reason: '"working" es un participio de presente que requeriría un auxiliar como "is working" y no se usa para hábitos permanentes.' },
    ],
    referenceSite: 'Englisch-hilfen.de (Simple Present Exercises)',
  },
  {
    id: 'eng_a1_02',
    number: 2,
    level: 'A1',
    variant: 'ALL',
    topic: 'Prepositions of Time (AT / ON)',
    statement: 'The introductory English lecture begins ________ 8:30 AM ________ Monday mornings.',
    options: [
      { key: 'A', text: 'in / on' },
      { key: 'B', text: 'at / in' },
      { key: 'C', text: 'at / on' },
      { key: 'D', text: 'on / at' },
    ],
    correctAnswer: 'C',
    explanation: 'Para horas del reloj y momentos exactos se usa obligatoriamente la preposición "at" (at 8:30 AM). Cuando se especifica un día de la semana acompañado de una parte del día, la regla del día de la semana predomina, exigiéndose "on" (on Monday mornings).',
    distractorAnalysis: [
      { option: 'A', reason: '"in" no se puede usar con horas puntuales del reloj.' },
      { option: 'B', reason: '"in Monday mornings" es incorrecto porque el día de la semana rige "on".' },
      { option: 'D', reason: 'Invierte las preposiciones violando ambas reglas sintácticas.' },
    ],
    referenceSite: 'Agendaweb.org (Prepositions of Time)',
  },
  {
    id: 'eng_a1_03',
    number: 3,
    level: 'A1',
    variant: 'UK',
    topic: 'British English Daily Lexicon (Flat / Lift)',
    statement: 'David lives in London. He lives on the third floor of an old building, so he always takes the ________ up to his ________.',
    options: [
      { key: 'A', text: 'elevator / apartment' },
      { key: 'B', text: 'lift / flat' },
      { key: 'C', text: 'lift / apartment' },
      { key: 'D', text: 'elevator / flat' },
    ],
    correctAnswer: 'B',
    explanation: 'En el estándar británico (Reino Unido), el dispositivo mecánico para subir pisos se denomina "lift" y la vivienda individual en un edificio de apartamentos se denomina "flat".',
    distractorAnalysis: [
      { option: 'A', reason: '"elevator / apartment" corresponde exclusivamente al estándar del inglés estadounidense (US).' },
      { option: 'C', reason: 'Es una mezcla híbrida inconsistente entre dialectos.' },
      { option: 'D', reason: 'Es una mezcla híbrida inconsistente entre dialectos.' },
    ],
    referenceSite: 'Englisch-hilfen.de (British vs. American Vocabulary)',
  },
  {
    id: 'eng_a1_04',
    number: 4,
    level: 'A1',
    variant: 'ALL',
    topic: 'Articles: Phonetic Rule (A vs. AN)',
    statement: 'She is studying at ________ prestigious university and usually leaves ________ hour before sunset.',
    options: [
      { key: 'A', text: 'an / a' },
      { key: 'B', text: 'a / an' },
      { key: 'C', text: 'a / a' },
      { key: 'D', text: 'an / an' },
    ],
    correctAnswer: 'B',
    explanation: 'Aunque "university" empieza con la vocal escrita "u", su pronunciación fonética inicia con el sonido semiconsonántico /juː/, exigiendo el artículo "a". Por el contrario, en "hour" la letra "h" es muda y el sonido inicial es vocálico /aʊər/, exigiendo "an".',
    distractorAnalysis: [
      { option: 'A', reason: 'Confunde los dos sonidos fonéticos iniciales.' },
      { option: 'C', reason: '"a hour" es un error fonético ya que la hache es muda.' },
      { option: 'D', reason: '"an university" es un error fonético clásico del aprendiz hispanohablante.' },
    ],
    referenceSite: 'Englishteststore.net (Articles Level A1)',
  },

  // --------------------------------------------------------------------------
  // NIVEL A2 (Elemental)
  // --------------------------------------------------------------------------
  {
    id: 'eng_a2_01',
    number: 5,
    level: 'A2',
    variant: 'ALL',
    topic: 'Past Simple vs. Past Continuous',
    statement: 'While the family ________ dinner in the dining room, suddenly the electrical power ________ out.',
    options: [
      { key: 'A', text: 'had / was going' },
      { key: 'B', text: 'were having / went' },
      { key: 'C', text: 'had had / has gone' },
      { key: 'D', text: 'have had / went' },
    ],
    correctAnswer: 'B',
    explanation: 'La cláusula subordinada introducida por "while" describe una acción continua que servía de trasfondo temporal en el pasado (were having - Past Continuous). La interrupción repentina señalada por "suddenly" requiere Past Simple (went).',
    distractorAnalysis: [
      { option: 'A', reason: 'Invierte la lógica: el corte no fue una acción en desarrollo continuo que interrumpió una cena instantánea.' },
      { option: 'C', reason: 'Present Perfect (has gone) no puede colocarse en un marco cerrado del pasado.' },
      { option: 'D', reason: 'Mezcla agramaticalmente tiempos verbales incompatibles.' },
    ],
    referenceSite: 'Englisch-hilfen.de (Past Simple vs. Continuous)',
  },
  {
    id: 'eng_a2_02',
    number: 6,
    level: 'A2',
    variant: 'ALL',
    topic: 'Countable / Uncountable & Quantifiers',
    statement: 'We cannot bake the cake because there is ________ butter left in the fridge and we don\'t have ________ eggs either.',
    options: [
      { key: 'A', text: 'many / some' },
      { key: 'B', text: 'little / any' },
      { key: 'C', text: 'a few / much' },
      { key: 'D', text: 'few / no' },
    ],
    correctAnswer: 'B',
    explanation: '"Butter" es incontable; "little" (sin artículo) tiene connotación negativa de escasez insuficiente. En la segunda cláusula, al estar el verbo negado ("don\'t have"), la partícula gramatical para indicar ausencia total es "any".',
    distractorAnalysis: [
      { option: 'A', reason: '"many" solo modifica sustantivos contables en plural, no a "butter".' },
      { option: 'C', reason: '"a few" se usa exclusivamente con contables en plural.' },
      { option: 'D', reason: '"don\'t have no" genera una doble negación incorrecta en el registro estándar.' },
    ],
    referenceSite: 'Agendaweb.org (Quantifiers: Little, Few, Any)',
  },
  {
    id: 'eng_a2_03',
    number: 7,
    level: 'A2',
    variant: 'ALL',
    topic: 'Comparative Adjectives & Irregulars',
    statement: 'The traffic situation in the capital is getting ________ than it was last year, but public transport has become much ________.',
    options: [
      { key: 'A', text: 'badder / expensiver' },
      { key: 'B', text: 'worse / more expensive' },
      { key: 'C', text: 'worst / most expensive' },
      { key: 'D', text: 'more bad / expensivest' },
    ],
    correctAnswer: 'B',
    explanation: 'El comparativo del adjetivo irregular "bad" es "worse" (nunca "badder"). El adjetivo "expensive" posee tres sílabas, por lo que forma su comparativo anteponiendo "more" (more expensive).',
    distractorAnalysis: [
      { option: 'A', reason: '"badder" y "expensiver" son regularizaciones inexistentes en la lengua inglesa.' },
      { option: 'C', reason: 'Usa formas superlativas ("worst"), incompatibles con la conjunción comparativa "than".' },
      { option: 'D', reason: '"more bad" y "expensivest" violan las reglas morfológicas del inglés.' },
    ],
    referenceSite: 'Englishteststore.net (Comparatives and Superlatives A2)',
  },

  // --------------------------------------------------------------------------
  // NIVEL B1 (Intermedio)
  // --------------------------------------------------------------------------
  {
    id: 'eng_b1_01',
    number: 8,
    level: 'B1',
    variant: 'UK',
    topic: 'Present Perfect with Already/Just (UK Rule)',
    statement: 'In British English formal grammar, which of the following sentences is considered the ONLY strictly standard option?',
    options: [
      { key: 'A', text: '"I already saw that historical documentary on television yesterday."' },
      { key: 'B', text: '"Did you eat your dinner yet? The restaurant is closing."' },
      { key: 'C', text: '"I have already seen that documentary, but I watched it again last night."' },
      { key: 'D', text: '"She just finished her bachelor dissertation two minutes ago."' },
    ],
    correctAnswer: 'C',
    explanation: 'En la norma británica formal (IELTS, Cambridge, Englisch-hilfen), adverbios como "already", "just" y "yet" exigen rigurosamente el Present Perfect ("have already seen"). En la segunda cláusula, la mención de un marco temporal cerrado ("last night") exige correctamente el Past Simple ("watched").',
    distractorAnalysis: [
      { option: 'A', reason: 'Combina "already" con "yesterday" y Past Simple, lo cual es redundante y erróneo en el estándar británico.' },
      { option: 'B', reason: '"Did you eat... yet?" es típico del habla informal estadounidense; en UK se exige "Have you eaten... yet?".' },
      { option: 'D', reason: 'Usa Past Simple con "just", lo cual es aceptado en US pero censurado en la gramática académica británica.' },
    ],
    referenceSite: 'Englisch-hilfen.de (Present Perfect with Just, Already, Yet)',
  },
  {
    id: 'eng_b1_02',
    number: 9,
    level: 'B1',
    variant: 'ALL',
    topic: 'Second Conditional & Were-Subjunctive',
    statement: 'If Mark ________ more discreet with confidential files, the supervisory board ________ him to lead the international team.',
    options: [
      { key: 'A', text: 'would be / trusted' },
      { key: 'B', text: 'were / would trust' },
      { key: 'C', text: 'is / will trust' },
      { key: 'D', text: 'had been / trusted' },
    ],
    correctAnswer: 'B',
    explanation: 'La estructura del Second Conditional para situaciones hipotéticas o contrarias a la realidad presente requiere "If + Past Simple (con el subjuntivo \'were\' para todas las personas)" en la condición, y "would + forma base" en la consecuencia.',
    distractorAnalysis: [
      { option: 'A', reason: 'Comete el error clásico de colocar "would" dentro de la cláusula condicional introducida por "if".' },
      { option: 'C', reason: 'Corresponde a un primer condicional de posibilidad real futura, no a una hipótesis irreal presente.' },
      { option: 'D', reason: 'Mezcla tiempos sin coherencia condicional estándar.' },
    ],
    referenceSite: 'Agendaweb.org (Second Conditional Exercises)',
  },
  {
    id: 'eng_b1_03',
    number: 10,
    level: 'B1',
    variant: 'ALL',
    topic: 'Modals of Deduction: Certainty vs. Impossibility',
    statement: 'Look at the mansion! All the window shutters are closed and mail is piling up on the porch. The owners ________ be in town; they ________ be away traveling.',
    options: [
      { key: 'A', text: 'mustn\'t / should' },
      { key: 'B', text: 'can\'t / must' },
      { key: 'C', text: 'shouldn\'t / can' },
      { key: 'D', text: 'might not / have to' },
    ],
    correctAnswer: 'B',
    explanation: 'La evidencia física acumulada genera una certeza negativa lógica: se usa "can\'t" para imposibilidad ("no pueden estar en la ciudad"). A su vez, la deducción lógica afirmativa de casi total certeza se expresa con "must" ("deben de estar de viaje").',
    distractorAnalysis: [
      { option: 'A', reason: '"mustn\'t" indica prohibición moral/legal, jamás deducción lógica de imposibilidad.' },
      { option: 'C', reason: '"shouldn\'t" expresa consejo o expectativa no cumplida, no deducción lógica de certeza.' },
      { option: 'D', reason: '"might not" expresa una probabilidad débil, sin la fuerza concluyente de la evidencia observada.' },
    ],
    referenceSite: 'Englishteststore.net (Modal Verbs of Deduction B1)',
  },

  // --------------------------------------------------------------------------
  // NIVEL B2 (Intermedio Alto)
  // --------------------------------------------------------------------------
  {
    id: 'eng_b2_01',
    number: 11,
    level: 'B2',
    variant: 'ALL',
    topic: 'Mixed Conditionals (Past Cause, Present Consequence)',
    statement: 'If the travel agent ________ our flight reservations last month, we ________ stranded at the airport terminal right now.',
    options: [
      { key: 'A', text: 'confirmed / wouldn\'t be' },
      { key: 'B', text: 'had confirmed / wouldn\'t be' },
      { key: 'C', text: 'had confirmed / wouldn\'t have been' },
      { key: 'D', text: 'have confirmed / won\'t be' },
    ],
    correctAnswer: 'B',
    explanation: 'Es un Condicional Mixto: la cláusula condicional hace referencia a un punto finalizado en el pasado ("last month"), por lo que requiere Past Perfect (had confirmed). Sin embargo, la consecuencia hace referencia directa al momento presente ("right now"), exigiendo "would + forma base" (wouldn\'t be).',
    distractorAnalysis: [
      { option: 'A', reason: 'Usa Past Simple en la condición, confundiendo el segundo condicional con el mixto.' },
      { option: 'C', reason: 'Corresponde a un tercer condicional puro, lo que indicaría que el estar varados terminó en el pasado, contradiciendo "right now".' },
      { option: 'D', reason: 'El Present Perfect es incompatible con el marcador pretérito "last month".' },
    ],
    referenceSite: 'Englisch-hilfen.de (Mixed Conditionals B2)',
  },
  {
    id: 'eng_b2_02',
    number: 12,
    level: 'B2',
    variant: 'ALL',
    topic: 'Gerund vs. Infinitive with Meaning Shift (Stop)',
    statement: 'On his way to the medical congress, Dr. Collins stopped ________ a cup of coffee, but he subsequently stopped ________ caffeine due to high blood pressure.',
    options: [
      { key: 'A', text: 'drinking / to buy' },
      { key: 'B', text: 'to buy / to drink' },
      { key: 'C', text: 'to buy / drinking' },
      { key: 'D', text: 'buying / drinking' },
    ],
    correctAnswer: 'C',
    explanation: '"Stop + to-infinitive" expresa interrumpir un desplazamiento o actividad con el propósito de iniciar otra acción (stopped to buy = se detuvo para comprar). "Stop + gerund (-ing)" significa cesar permanentemente una costumbre o consumo (stopped drinking = dejó de tomar).',
    distractorAnalysis: [
      { option: 'A', reason: 'Invierte de forma incoherente el significado de ambas expresiones.' },
      { option: 'B', reason: 'Sugiere falsamente que hizo una pausa con el propósito de tomar más cafeína.' },
      { option: 'D', reason: 'Usa gerundio en la primera posición, indicando que dejó de comprar café de camino al evento.' },
    ],
    referenceSite: 'Agendaweb.org (Gerund and Infinitive Differences)',
  },
  {
    id: 'eng_b2_03',
    number: 13,
    level: 'B2',
    variant: 'ALL',
    topic: 'Reporting Verbs Syntax (Deny + Gerund)',
    statement: '"I definitely did not disclose any private client data," the financial consultant stated.\nWhich indirect sentence reports this statement most accurately using an advanced reporting verb?',
    options: [
      { key: 'A', text: 'The consultant denied to disclose any private client data.' },
      { key: 'B', text: 'The consultant refused disclosing any private client data.' },
      { key: 'C', text: 'The consultant denied having disclosed any private client data.' },
      { key: 'D', text: 'The consultant warned about disclosing any private client data.' },
    ],
    correctAnswer: 'C',
    explanation: 'El verbo de reporte "deny" rige obligatoriamente un gerundio (-ing) o un gerundio compuesto (having + participio) para rechazar la autoría de un hecho previo: "denied having disclosed" o "denied disclosing".',
    distractorAnalysis: [
      { option: 'A', reason: '"deny" jamás se construye con infinitivo con "to".' },
      { option: 'B', reason: '"refuse" significa negarse a realizar una acción futura y rige infinitivo con "to" (refused to disclose), cambiando el sentido.' },
      { option: 'D', reason: '"warn" significa advertir a otros sobre un peligro, desvirtuando la declaración del consultor.' },
    ],
    referenceSite: 'Englishteststore.net (Reported Speech and Reporting Verbs B2)',
  },

  // --------------------------------------------------------------------------
  // NIVEL C1 (Avanzado Operativo)
  // --------------------------------------------------------------------------
  {
    id: 'eng_c1_01',
    number: 14,
    level: 'C1',
    variant: 'ALL',
    topic: 'Inversion with Negative & Restrictive Adverbials',
    statement: 'Rarely ________ such blatant disregard for international environmental treaties, nor ________ any intent to rectify the damages caused.',
    options: [
      { key: 'A', text: 'we have witnessed / the company has shown' },
      { key: 'B', text: 'have we witnessed / did the company show' },
      { key: 'C', text: 'we witnessed / was the company showing' },
      { key: 'D', text: 'had we witnessed / the company showed' },
    ],
    correctAnswer: 'B',
    explanation: 'Cuando una oración comienza con un adverbio de frecuencia negativa o restrictiva como "Rarely", se desencadena obligatoriamente la inversión de sujeto y auxiliar (Rarely have we witnessed). De igual modo, la conjunción copulativa negativa "nor" exige inversión en la segunda cláusula (nor did the company show).',
    distractorAnalysis: [
      { option: 'A', reason: 'Omite la inversión en ambas cláusulas, resultando agramatical en este registro retórico.' },
      { option: 'C', reason: 'No aplica la inversión obligatoria en la primera cláusula tras "Rarely".' },
      { option: 'D', reason: 'Aplica inversión en la primera cláusula pero la omite en la segunda tras "nor".' },
    ],
    referenceSite: 'Englisch-hilfen.de (Inversion with Negative Adverbials C1)',
  },
  {
    id: 'eng_c1_02',
    number: 15,
    level: 'C1',
    variant: 'US',
    topic: 'Mandative Subjunctive (American Standard)',
    statement: 'In American English standard formal grammar, select the sentence that correctly utilizes the mandative subjunctive:',
    options: [
      { key: 'A', text: '"The regulatory committee recommended that the facility shuts down its auxiliary reactor."' },
      { key: 'B', text: '"The regulatory committee recommended that the facility shut down its auxiliary reactor."' },
      { key: 'C', text: '"The regulatory committee recommended that the facility would shut down its auxiliary reactor."' },
      { key: 'D', text: '"The regulatory committee recommended for the facility shutting down its auxiliary reactor."' },
    ],
    correctAnswer: 'B',
    explanation: 'En el inglés estadounidense formal (mandative subjunctive), las cláusulas con "that" que siguen a verbos o adjetivos de mandato o recomendación (recommend, demand, insist) exigen la forma base pura del verbo (shut down) para todas las personas gramaticales, sin la "-s" de tercera persona ni auxiliares modales.',
    distractorAnalysis: [
      { option: 'A', reason: 'Usa el indicativo con "-s" (shuts down), violando la regla del subjuntivo mandativo de EE. UU.' },
      { option: 'C', reason: 'Inserta el modal "would", el cual es incorrecto tras verbos de recomendación.' },
      { option: 'D', reason: 'Estructura preposicional agramatical e inconsistente.' },
    ],
    referenceSite: 'Agendaweb.org (The Subjunctive in English)',
  },
  {
    id: 'eng_c1_03',
    number: 16,
    level: 'C1',
    variant: 'ALL',
    topic: 'Unreal Past with High Time & Would Rather',
    statement: 'It is high time the international community ________ decisive measures against cybercrime, and I would rather governments ________ independent audits.',
    options: [
      { key: 'A', text: 'takes / conduct' },
      { key: 'B', text: 'took / conducted' },
      { key: 'C', text: 'had taken / have conducted' },
      { key: 'D', text: 'would take / to conduct' },
    ],
    correctAnswer: 'B',
    explanation: 'La locución "It is high time + sujeto" exige Past Simple ("took") para denotar que la acción debió haberse ejecutado con anterioridad. Asimismo, "would rather + sujeto diferente" rige un Past Simple hipotético ("conducted") para expresar deseo o preferencia sobre la conducta ajena.',
    distractorAnalysis: [
      { option: 'A', reason: 'Usa Present Simple, ignorando la exigencia sintáctica de pasado irreal de ambas estructuras.' },
      { option: 'C', reason: 'Usa Past Perfect, el cual solo se emplearía si el lamento estuviese cerrado en el pasado.' },
      { option: 'D', reason: '"would rather" con sujeto no admite infinitivo con "to".' },
    ],
    referenceSite: 'Englishteststore.net (Unreal Past and Subjunctive C1)',
  },

  // --------------------------------------------------------------------------
  // NIVEL C2 (Maestría y Proficiencia)
  // --------------------------------------------------------------------------
  {
    id: 'eng_c2_01',
    number: 17,
    level: 'C2',
    variant: 'ALL',
    topic: 'Literary Locative Inversion vs. Pronominal Constraint',
    statement: 'Which of the following literary sentences demonstrates the CORRECT stylistic inversion?',
    options: [
      { key: 'A', text: '"Into the grand ballroom stepped the distinguished prime minister, but into the garden ran he."' },
      { key: 'B', text: '"Into the grand ballroom stepped the distinguished prime minister, and into the garden he ran."' },
      { key: 'C', text: '"Into the grand ballroom did the distinguished prime minister step, and into the garden ran he."' },
      { key: 'D', text: '"Into the grand ballroom stepped he, and into the garden ran the guard."' },
    ],
    correctAnswer: 'B',
    explanation: 'En la inversión locativa y de movimiento, cuando el sujeto es un sustantivo léxico completo ("the distinguished prime minister"), el verbo se coloca antes del sujeto (stepped the prime minister). Sin embargo, existe una restricción sintáctica absoluta en inglés: cuando el sujeto es un pronombre personal (he, she, they), la inversión NO se aplica (into the garden he ran, nunca "ran he").',
    distractorAnalysis: [
      { option: 'A', reason: 'Aplica erróneamente la inversión al pronombre personal "ran he".' },
      { option: 'C', reason: 'Inserta el auxiliar "did" sin necesidad enfática y vuelve a invertir erróneamente el pronombre "ran he".' },
      { option: 'D', reason: 'Aplica inversión al pronombre "stepped he", violando la restricción pronominal.' },
    ],
    referenceSite: 'Englisch-hilfen.de (Advanced Stylistic Inversion C2)',
  },
  {
    id: 'eng_c2_02',
    number: 18,
    level: 'C2',
    variant: 'ALL',
    topic: 'Absolute Participle Clauses (Dangling Avoidance)',
    statement: 'Identify the syntactically flawless absolute construction:',
    options: [
      { key: 'A', text: '"His hands trembling with immense tension, the master safe-cracker manipulated the dial."' },
      { key: 'B', text: '"Trembling with immense tension, the safe was opened by the burglar in seconds."' },
      { key: 'C', text: '"Walking into the ancient cathedral, the magnificent stained-glass windows amazed us."' },
      { key: 'D', text: '"Having failed the safety inspection, the engineer decided to close down the building."' },
    ],
    correctAnswer: 'A',
    explanation: 'La opción A es una cláusula absoluta genuina y correcta: posee su propio sujeto nominal explícito ("His hands") que no depende del sujeto de la oración principal ("the master safe-cracker").',
    distractorAnalysis: [
      { option: 'B', reason: 'Contiene un participio flotante (dangling participle): sugiere que la caja fuerte ("the safe") estaba temblando de tensión.' },
      { option: 'C', reason: 'Contiene un participio flotante: sugiere que los vitrales ("the stained-glass windows") iban caminando hacia la catedral.' },
      { option: 'D', reason: 'Sugiere que el ingeniero suspendió la inspección, cuando en realidad fue el edificio el que reprobó la prueba técnica.' },
    ],
    referenceSite: 'Agendaweb.org (Participle Clauses and Dangling Modifiers)',
  },
  {
    id: 'eng_c2_03',
    number: 19,
    level: 'C2',
    variant: 'ALL',
    topic: 'Irreversible Binomials & High-Register Collocations',
    statement: 'Constant media scrutiny is ________ of public political life, and should the audit prove fraud, the agreement will be declared ________.',
    options: [
      { key: 'A', text: 'parcel and part / void and null' },
      { key: 'B', text: 'part and parcel / null and void' },
      { key: 'C', text: 'thick and thin / touch and go' },
      { key: 'D', text: 'hard and fast / null and void' },
    ],
    correctAnswer: 'B',
    explanation: '"Part and parcel" es un binomio irreversible que significa elemento consustancial e inseparable de una experiencia. Por su parte, "null and void" es el binomio jurídico estándar que define un contrato o acuerdo legalmente revocado y sin valor.',
    distractorAnalysis: [
      { option: 'A', reason: 'Invierte de forma aberrante el orden consagrado e irreversible de ambos binomios.' },
      { option: 'C', reason: '"thick and thin" (en las buenas y en las malas) y "touch and go" (incierto) no concuerdan con el sentido proposicional de la oración.' },
      { option: 'D', reason: '"hard and fast" (estricto/inamovible) no se utiliza para describir la naturaleza intrínseca de una vivencia profesional.' },
    ],
    referenceSite: 'Englishteststore.net (Idioms, Binomials and Collocations C2)',
  },
  {
    id: 'eng_c2_04',
    number: 20,
    level: 'C2',
    variant: 'UK',
    topic: 'British Archaic/Formal Modalization (To Be To)',
    statement: 'The monarch ________ the newly appointed ambassador at Buckingham Palace yesterday, but the sudden protocol crisis prevented the reception.',
    options: [
      { key: 'A', text: 'was to have received' },
      { key: 'B', text: 'was to receive' },
      { key: 'C', text: 'would have received' },
      { key: 'D', text: 'had received' },
    ],
    correctAnswer: 'A',
    explanation: 'La estructura formal británica "was/were to have + past participle" se emplea en la prosa elevada para expresar un arreglo oficial, destino o evento ceremonial que estaba solemnemente programado en el pasado pero que finalmente NO llegó a realizarse.',
    distractorAnalysis: [
      { option: 'B', reason: '"was to receive" indicaría que el evento estaba programado, pero es neutro respecto a si se cumplió o no; la forma de infinitivo perfecto ("to have received") es la que denota el destino frustrado.' },
      { option: 'C', reason: '"would have received" es una hipótesis condicional genérica sin el valor institucional de un decreto oficial o cita de estado.' },
      { option: 'D', reason: '"had received" afirmaría falsamente que la monarca sí recibió al diplomático.' },
    ],
    referenceSite: 'Englisch-hilfen.de (To Be To in Formal English)',
  },
];

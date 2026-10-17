/**
 * APP-KUSKAT • MÓDULO DE FUNDAMENTOS BÁSICOS DEL IDIOMA INGLÉS
 *
 * Contenido pedagógico estructurado para el aprendizaje desde cero:
 * 1. El Abecedario en Inglés (The English Alphabet: fonética IPA, deletreo, vocales, consonantes, letras mudas)
 * 2. Los Números (Cardinales, Ordinales, Fracciones, Decimales, Lectura de Años, Horas y Conversor)
 * 3. Los Colores (Primarios, Secundarios, Matices, Contraste Ortográfico US vs. UK y Modismos Idiomáticos)
 * 4. Objetos Cotidianos y Vocabulario Esencial Temático (10 Categorías con más de 190 elementos)
 */

export interface AlphabetLetter {
  letter: string;
  name: string;
  ipa: string;
  phoneticEs: string;
  type: 'vowel' | 'consonant';
  sampleWord: string;
  sampleWordIpa: string;
  sampleWordEs: string;
  phoneticTip: string;
}

export interface NumberEntry {
  number: number;
  cardinal: string;
  ordinal: string;
  ordinalAbbr: string;
  pronunciationEs: string;
  note?: string;
}

export interface ColorEntry {
  id: string;
  nameEn: string;
  nameEs: string;
  hex: string;
  category: 'primary' | 'secondary' | 'neutral' | 'shades';
  usVsUk?: string;
  sampleSentenceEn: string;
  sampleSentenceEs: string;
}

export interface ColorIdiom {
  idiom: string;
  literalTranslation: string;
  realMeaning: string;
  exampleEn: string;
  exampleEs: string;
  originNote: string;
}

export interface EverydayObject {
  id: string;
  nameEn: string;
  nameEs: string;
  ipa: string;
  category: string;
  emoji: string;
  article: 'a' | 'an' | 'some' | 'the';
  pluralEn: string;
  usVsUkNote?: string;
  exampleEn: string;
  exampleEs: string;
}

export interface ObjectCategoryInfo {
  id: string;
  name: string;
  englishTitle: string;
  iconEmoji: string;
  description: string;
  items: EverydayObject[];
}

// ============================================================================
// 1. EL ABECEDARIO EN INGLÉS (THE ENGLISH ALPHABET - 26 LETRAS)
// ============================================================================
export const ALPHABET_DATA: AlphabetLetter[] = [
  {
    letter: 'A',
    name: 'ay',
    ipa: '/eɪ/',
    phoneticEs: 'ey',
    type: 'vowel',
    sampleWord: 'Apple',
    sampleWordIpa: '/ˈæp.əl/',
    sampleWordEs: 'Manzana',
    phoneticTip: 'Vocal abierta. Suena como /eɪ/ en su nombre (cake), o como /æ/ corta en apple, cat y map.'
  },
  {
    letter: 'B',
    name: 'bee',
    ipa: '/biː/',
    phoneticEs: 'bi',
    type: 'consonant',
    sampleWord: 'Book',
    sampleWordIpa: '/bʊk/',
    sampleWordEs: 'Libro',
    phoneticTip: 'Consonante oclusiva bilabial sonora. Cuidado con letras mudas: es silenciosa tras "m" al final (climb, thumb, bomb) o antes de "t" (debt, doubt).'
  },
  {
    letter: 'C',
    name: 'see',
    ipa: '/siː/',
    phoneticEs: 'si',
    type: 'consonant',
    sampleWord: 'Cat',
    sampleWordIpa: '/kæt/',
    sampleWordEs: 'Gato',
    phoneticTip: 'Suena suave como /s/ ante e, i, y (city, center, cycle); y fuerte como /k/ ante a, o, u o consonantes (cat, coffee, cup).'
  },
  {
    letter: 'D',
    name: 'dee',
    ipa: '/diː/',
    phoneticEs: 'di',
    type: 'consonant',
    sampleWord: 'Door',
    sampleWordIpa: '/dɔːr/',
    sampleWordEs: 'Puerta',
    phoneticTip: 'Oclusiva alveolar sonora. La punta de la lengua toca los alvéolos superiores, más retrasada que en español.'
  },
  {
    letter: 'E',
    name: 'ee',
    ipa: '/iː/',
    phoneticEs: 'i',
    type: 'vowel',
    sampleWord: 'Elephant',
    sampleWordIpa: '/ˈel.ə.fənt/',
    sampleWordEs: 'Elefante',
    phoneticTip: 'Suena como /iː/ larga en su nombre (be, see, tree), o como /e/ corta en bed, pen y ten. Al final de palabra suele ser muda (make, time).'
  },
  {
    letter: 'F',
    name: 'ef',
    ipa: '/ef/',
    phoneticEs: 'ef',
    type: 'consonant',
    sampleWord: 'Fish',
    sampleWordIpa: '/fɪʃ/',
    sampleWordEs: 'Pez / Pescado',
    phoneticTip: 'Fricativa labiodental sorda. Se produce apoyando los dientes superiores suavemente sobre el labio inferior.'
  },
  {
    letter: 'G',
    name: 'jee',
    ipa: '/dʒiː/',
    phoneticEs: 'yi / dshi',
    type: 'consonant',
    sampleWord: 'Garden',
    sampleWordIpa: '/ˈɡɑːr.dən/',
    sampleWordEs: 'Jardín',
    phoneticTip: 'Sonido suave /dʒ/ ante e, i, y (gym, giant); fuerte /ɡ/ ante a, o, u (garden, good, gun). Es muda en combinaciones como "sign" o "foreign".'
  },
  {
    letter: 'H',
    name: 'aych',
    ipa: '/eɪtʃ/',
    phoneticEs: 'eich',
    type: 'consonant',
    sampleWord: 'House',
    sampleWordIpa: '/haʊs/',
    sampleWordEs: 'Casa',
    phoneticTip: 'En inglés la H es generalmente aspirada /h/ (house, hope, happy), no muda como en español. Excepciones mudas clave: hour, honest, honor, heir.'
  },
  {
    letter: 'I',
    name: 'eye',
    ipa: '/aɪ/',
    phoneticEs: 'ai',
    type: 'vowel',
    sampleWord: 'Island',
    sampleWordIpa: '/ˈaɪ.lənd/',
    sampleWordEs: 'Isla',
    phoneticTip: 'Suena como /aɪ/ en su nombre (ice, bike, time) o como la /ɪ/ corta relajada en sit, fish, live y milk.'
  },
  {
    letter: 'J',
    name: 'jay',
    ipa: '/dʒeɪ/',
    phoneticEs: 'yey / dshey',
    type: 'consonant',
    sampleWord: 'Juice',
    sampleWordIpa: '/dʒuːs/',
    sampleWordEs: 'Jugo / Zumo',
    phoneticTip: 'Africada postalveolar sonora /dʒ/, como en "judge" o "jacket". Nunca suena como la J española ni como la H aspirada.'
  },
  {
    letter: 'K',
    name: 'kay',
    ipa: '/keɪ/',
    phoneticEs: 'key',
    type: 'consonant',
    sampleWord: 'Key',
    sampleWordIpa: '/kiː/',
    sampleWordEs: 'Llave / Clave',
    phoneticTip: 'Oclusiva velar sorda aspirada [kʰ]. Es completamente silenciosa ante N al inicio de palabra (knife, knee, know, knight).'
  },
  {
    letter: 'L',
    name: 'el',
    ipa: '/el/',
    phoneticEs: 'el',
    type: 'consonant',
    sampleWord: 'Lion',
    sampleWordIpa: '/ˈlaɪ.ən/',
    sampleWordEs: 'León',
    phoneticTip: 'Posee dos variantes: L clara al inicio (light) y L oscura /ɫ/ con elevación del dorso lingual al final de sílaba (milk, ball, table).'
  },
  {
    letter: 'M',
    name: 'em',
    ipa: '/em/',
    phoneticEs: 'em',
    type: 'consonant',
    sampleWord: 'Moon',
    sampleWordIpa: '/muːn/',
    sampleWordEs: 'Luna',
    phoneticTip: 'Nasal bilabial sonora. Los labios se cierran por completo y el aire fluye libremente por la cavidad nasal.'
  },
  {
    letter: 'N',
    name: 'en',
    ipa: '/en/',
    phoneticEs: 'en',
    type: 'consonant',
    sampleWord: 'Night',
    sampleWordIpa: '/naɪt/',
    sampleWordEs: 'Noche',
    phoneticTip: 'Nasal alveolar sonora. Cuidado: es muda tras M al final de palabra en vocablos como autumn, solemn y hymn.'
  },
  {
    letter: 'O',
    name: 'oh',
    ipa: '/oʊ/ (US) /əʊ/ (UK)',
    phoneticEs: 'ou',
    type: 'vowel',
    sampleWord: 'Orange',
    sampleWordIpa: '/ˈɔːr.ɪndʒ/',
    sampleWordEs: 'Naranja',
    phoneticTip: 'Diptongo /oʊ/ o /əʊ/ en su nombre (go, home, open), o vocal corta redondeada /ɒ/ o /ɑː/ en hot, pot y stop.'
  },
  {
    letter: 'P',
    name: 'pee',
    ipa: '/piː/',
    phoneticEs: 'pi',
    type: 'consonant',
    sampleWord: 'Pen',
    sampleWordIpa: '/pen/',
    sampleWordEs: 'Bolígrafo / Pluma',
    phoneticTip: 'Oclusiva bilabial sorda fuertemente aspirada al inicio de sílaba tónica ([pʰ] en pen, park). Silenciosa en vocablos de origen griego como psychology y receipt.'
  },
  {
    letter: 'Q',
    name: 'cue',
    ipa: '/kjuː/',
    phoneticEs: 'kiu',
    type: 'consonant',
    sampleWord: 'Queen',
    sampleWordIpa: '/kwiːn/',
    sampleWordEs: 'Reina',
    phoneticTip: 'Casi siempre va acompañada de la letra U, pronunciándose como la secuencia /kw/ (quick, quiet, question).'
  },
  {
    letter: 'R',
    name: 'ar',
    ipa: '/ɑːr/ (US) /ɑː/ (UK)',
    phoneticEs: 'ar',
    type: 'consonant',
    sampleWord: 'Rain',
    sampleWordIpa: '/reɪn/',
    sampleWordEs: 'Lluvia',
    phoneticTip: 'Aproximante alveolar inglesa /r/, nunca vibrante como la R española. En inglés británico es no rótica (no suena al final de sílaba: car /kɑː/).'
  },
  {
    letter: 'S',
    name: 'es',
    ipa: '/es/',
    phoneticEs: 'es',
    type: 'consonant',
    sampleWord: 'Sun',
    sampleWordIpa: '/sʌn/',
    sampleWordEs: 'Sol',
    phoneticTip: 'Fricativa alveolar sorda /s/. Error frecuente de hispanohablantes: añadir una e inicial ante s líquida (decir *eschool* en vez de school).'
  },
  {
    letter: 'T',
    name: 'tee',
    ipa: '/tiː/',
    phoneticEs: 'ti',
    type: 'consonant',
    sampleWord: 'Tree',
    sampleWordIpa: '/triː/',
    sampleWordEs: 'Árbol',
    phoneticTip: 'Oclusiva alveolar aspirada [tʰ]. En inglés americano intervocálica se pronuncia como "Flap T" [ɾ] (water suena como "wá-der").'
  },
  {
    letter: 'U',
    name: 'you',
    ipa: '/juː/',
    phoneticEs: 'yu',
    type: 'vowel',
    sampleWord: 'Umbrella',
    sampleWordIpa: '/ʌmˈbrel.ə/',
    sampleWordEs: 'Paraguas',
    phoneticTip: 'Pronunciada /juː/ en su nombre (universe, music, computer), o como la vocal corta central /ʌ/ en sun, cup, bus y umbrella.'
  },
  {
    letter: 'V',
    name: 'vee',
    ipa: '/viː/',
    phoneticEs: 'vi (labiodental)',
    type: 'consonant',
    sampleWord: 'Voice',
    sampleWordIpa: '/vɔɪs/',
    sampleWordEs: 'Voz',
    phoneticTip: 'Fricativa labiodental sonora /v/. A diferencia del español, en inglés B y V tienen sonidos completamente distintos (berry vs. very; ban vs. van).'
  },
  {
    letter: 'W',
    name: 'double-u',
    ipa: '/ˈdʌb.əl.juː/',
    phoneticEs: 'dábol-yu',
    type: 'consonant',
    sampleWord: 'Water',
    sampleWordIpa: '/ˈwɔː.tər/',
    sampleWordEs: 'Agua',
    phoneticTip: 'Aproximante labiovelar sonora /w/. Es muda antes de R al inicio de palabra (write, wrong, wrist, wrap).'
  },
  {
    letter: 'X',
    name: 'ex',
    ipa: '/eks/',
    phoneticEs: 'ex',
    type: 'consonant',
    sampleWord: 'Xylophone / Box',
    sampleWordIpa: '/ˈzaɪ.lə.foʊn/ /bɒks/',
    sampleWordEs: 'Xilófono / Caja',
    phoneticTip: 'Al inicio de palabra suele sonar como /z/ (xenon, xylophone); en posición medial o final suena como /ks/ (box, fox, taxi) o /ɡz/ (exam, exact).'
  },
  {
    letter: 'Y',
    name: 'why',
    ipa: '/waɪ/',
    phoneticEs: 'uay',
    type: 'consonant',
    sampleWord: 'Yellow',
    sampleWordIpa: '/ˈjel.oʊ/',
    sampleWordEs: 'Amarillo',
    phoneticTip: 'Semivocal. Funciona como consonante /j/ al inicio de sílaba (yes, yellow, year) y como vocal /i/ o /aɪ/ al final (baby, city, fly, sky).'
  },
  {
    letter: 'Z',
    name: 'zee (US) / zed (UK)',
    ipa: '/ziː/ (US) /zɛd/ (UK)',
    phoneticEs: 'zi (vibrante) / zed',
    type: 'consonant',
    sampleWord: 'Zebra',
    sampleWordIpa: '/ˈziː.brə/ (US) /ˈzɛb.rə/ (UK)',
    sampleWordEs: 'Cebra',
    phoneticTip: 'Fricativa alveolar sonora con vibración de las cuerdas vocales (como el zumbido de una abeja). En US se deletrea "zee" y en UK "zed".'
  }
];

export const SPELLING_CONVENTIONS = [
  {
    title: 'Deletreo de Correos Electrónicos y Sitios Web',
    rules: [
      '@ se pronuncia "at" (ej: contact@school.com ➔ contact AT school DOT com)',
      '. se pronuncia "dot" (punto web), nunca "point" ni "period"',
      '- se pronuncia "hyphen" o "dash"',
      '_ se pronuncia "underscore"',
      '/ se pronuncia "slash" o "forward slash"'
    ]
  },
  {
    title: 'Deletreo de Nombres y Letras Dobles',
    rules: [
      'Letras duplicadas seguidas: en UK es muy común decir "double [letra]" (ej: Apple = A - double P - L - E; Emma = E - double M - A).',
      'En US es frecuente pronunciarlas individualmente o usar "double" indistintamente (ej: A - P - P - L - E).',
      'Mayúsculas: se indica "capital [letter]" o "uppercase [letter]". Minúsculas: "lowercase [letter]".'
    ]
  },
  {
    title: 'Letras Mudas Comunes en Inglés (Silent Letters)',
    rules: [
      'Silent B: doubt, debt, subtle, climb, bomb, thumb, lamb (la B no suena).',
      'Silent K: knife, knee, know, knight, knock (K antes de N al inicio no suena).',
      'Silent W: write, wrong, wrist, answer, sword, two (la W no suena).',
      'Silent G: sign, foreign, champagne, design, high, light (la G es muda).',
      'Silent L: talk, walk, half, calm, salmon, could, should, would (la L no suena).'
    ]
  }
];

// ============================================================================
// 2. LOS NÚMEROS EN INGLÉS (NUMBERS)
// ============================================================================
export const NUMBERS_CARDINALS_ORDINALS: NumberEntry[] = [
  { number: 0, cardinal: 'zero', ordinal: 'zeroth', ordinalAbbr: '0th', pronunciationEs: 'zí-rou' },
  { number: 1, cardinal: 'one', ordinal: 'first', ordinalAbbr: '1st', pronunciationEs: 'uan / férst' },
  { number: 2, cardinal: 'two', ordinal: 'second', ordinalAbbr: '2nd', pronunciationEs: 'tu / sé-cond' },
  { number: 3, cardinal: 'three', ordinal: 'third', ordinalAbbr: '3rd', pronunciationEs: 'zri / zérd' },
  { number: 4, cardinal: 'four', ordinal: 'fourth', ordinalAbbr: '4th', pronunciationEs: 'for / forz' },
  { number: 5, cardinal: 'five', ordinal: 'fifth', ordinalAbbr: '5th', pronunciationEs: 'faiv / fifz (cambio V a F)' },
  { number: 6, cardinal: 'six', ordinal: 'sixth', ordinalAbbr: '6th', pronunciationEs: 'six / sixz' },
  { number: 7, cardinal: 'seven', ordinal: 'seventh', ordinalAbbr: '7th', pronunciationEs: 'sé-ven / sé-venz' },
  { number: 8, cardinal: 'eight', ordinal: 'eighth', ordinalAbbr: '8th', pronunciationEs: 'eit / eitz' },
  { number: 9, cardinal: 'nine', ordinal: 'ninth', ordinalAbbr: '9th', pronunciationEs: 'nain / nainz (pierde la E)' },
  { number: 10, cardinal: 'ten', ordinal: 'tenth', ordinalAbbr: '10th', pronunciationEs: 'ten / tenz' },
  { number: 11, cardinal: 'eleven', ordinal: 'eleventh', ordinalAbbr: '11th', pronunciationEs: 'i-lé-ven' },
  { number: 12, cardinal: 'twelve', ordinal: 'twelfth', ordinalAbbr: '12th', pronunciationEs: 'tüelv / tüelfz' },
  { number: 13, cardinal: 'thirteen', ordinal: 'thirteenth', ordinalAbbr: '13th', pronunciationEs: 'zer-tíin' },
  { number: 14, cardinal: 'fourteen', ordinal: 'fourteenth', ordinalAbbr: '14th', pronunciationEs: 'for-tíin' },
  { number: 15, cardinal: 'fifteen', ordinal: 'fifteenth', ordinalAbbr: '15th', pronunciationEs: 'fif-tíin' },
  { number: 16, cardinal: 'sixteen', ordinal: 'sixteenth', ordinalAbbr: '16th', pronunciationEs: 'six-tíin' },
  { number: 17, cardinal: 'seventeen', ordinal: 'seventeenth', ordinalAbbr: '17th', pronunciationEs: 'sé-ven-tíin' },
  { number: 18, cardinal: 'eighteen', ordinal: 'eighteenth', ordinalAbbr: '18th', pronunciationEs: 'ei-tíin' },
  { number: 19, cardinal: 'nineteen', ordinal: 'nineteenth', ordinalAbbr: '19th', pronunciationEs: 'nain-tíin' },
  { number: 20, cardinal: 'twenty', ordinal: 'twentieth', ordinalAbbr: '20th', pronunciationEs: 'tuén-ti / tuén-ti-ez' },
  { number: 21, cardinal: 'twenty-one', ordinal: 'twenty-first', ordinalAbbr: '21st', pronunciationEs: 'tuén-ti uan (con guion)' },
  { number: 22, cardinal: 'twenty-two', ordinal: 'twenty-second', ordinalAbbr: '22nd', pronunciationEs: 'tuén-ti tu' },
  { number: 30, cardinal: 'thirty', ordinal: 'thirtieth', ordinalAbbr: '30th', pronunciationEs: 'zér-ti' },
  { number: 40, cardinal: 'forty', ordinal: 'fortieth', ordinalAbbr: '40th', pronunciationEs: 'fór-ti (¡Ojo: sin U!)' },
  { number: 50, cardinal: 'fifty', ordinal: 'fiftieth', ordinalAbbr: '50th', pronunciationEs: 'fíf-ti' },
  { number: 60, cardinal: 'sixty', ordinal: 'sixtieth', ordinalAbbr: '60th', pronunciationEs: 'síx-ti' },
  { number: 70, cardinal: 'seventy', ordinal: 'seventieth', ordinalAbbr: '70th', pronunciationEs: 'sé-ven-ti' },
  { number: 80, cardinal: 'eighty', ordinal: 'eightieth', ordinalAbbr: '80th', pronunciationEs: 'éi-ti' },
  { number: 90, cardinal: 'ninety', ordinal: 'ninetieth', ordinalAbbr: '90th', pronunciationEs: 'náin-ti' },
  { number: 100, cardinal: 'one hundred', ordinal: 'one hundredth', ordinalAbbr: '100th', pronunciationEs: 'uan ján-dred' },
  { number: 1000, cardinal: 'one thousand', ordinal: 'one thousandth', ordinalAbbr: '1,000th', pronunciationEs: 'uan záu-sand' },
  { number: 1000000, cardinal: 'one million', ordinal: 'one millionth', ordinalAbbr: '1,000,000th', pronunciationEs: 'uan mí-lion' },
  { number: 1000000000, cardinal: 'one billion', ordinal: 'one billionth', ordinalAbbr: '1,000,000,000th', pronunciationEs: 'uan bí-lion (mil millones)' }
];

export const NUMBER_RULES = [
  {
    title: 'Guion en Números Compuestos (21 al 99)',
    explanation: 'Todos los números de dos dígitos entre 21 y 99 se escriben SIEMPRE con un guion intermedio en inglés: twenty-one, thirty-five, fifty-eight, ninety-nine.'
  },
  {
    title: 'Regla del "AND" entre Cientos y Decenas (US vs. UK)',
    explanation: 'En British English (UK) es OBLIGATORIO usar "and" entre las centenas y las decenas: 125 = "one hundred and twenty-five". En American English (US) es muy común omitir el "and": "one hundred twenty-five".'
  },
  {
    title: 'Invariabilidad en Plural (Hundred, Thousand, Million)',
    explanation: 'Hundred, thousand, million y billion NUNCA llevan "-s" cuando van acompañados de un número exacto: "three million people" (CORRECTO), NO *"three millions people"*. Solo llevan "-s" en expresiones de cantidad indefinida con of: "millions of stars".'
  },
  {
    title: 'Fracciones y Decimales',
    explanation: 'En inglés el separador decimal es un PUNTO ("point"), no una coma: 3.5 se lee "three point five". En fracciones: 1/2 = "a half / one half", 1/3 = "a third", 1/4 = "a quarter / one fourth", 3/4 = "three quarters".'
  },
  {
    title: 'Lectura de Años y Fechas',
    explanation: 'Los años se leen en bloques de dos dígitos: 1984 = "nineteen eighty-four"; 1999 = "nineteen ninety-nine". Del 2000 al 2009: "two thousand (and) five". A partir de 2010 se puede decir "twenty ten" o "two thousand and ten".'
  }
];

/**
 * Convierte cualquier número entero de 0 a 999,999,999 a su representación en palabras en inglés.
 */
export function numberToEnglishWords(n: number): string {
  if (isNaN(n)) return '';
  if (n === 0) return 'zero';
  if (n < 0) return 'minus ' + numberToEnglishWords(Math.abs(n));

  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  function convertChunk(num: number): string {
    let str = '';
    const h = Math.floor(num / 100);
    const rest = num % 100;

    if (h > 0) {
      str += ones[h] + ' hundred';
      if (rest > 0) str += ' ';
    }

    if (rest > 0) {
      if (rest < 10) {
        str += ones[rest];
      } else if (rest < 20) {
        str += teens[rest - 10];
      } else {
        const t = Math.floor(rest / 10);
        const o = rest % 10;
        str += tens[t];
        if (o > 0) str += '-' + ones[o];
      }
    }

    return str;
  }

  const millions = Math.floor(n / 1000000);
  const thousands = Math.floor((n % 1000000) / 1000);
  const remainder = n % 1000;

  const parts: string[] = [];

  if (millions > 0) {
    parts.push(convertChunk(millions) + ' million');
  }
  if (thousands > 0) {
    parts.push(convertChunk(thousands) + ' thousand');
  }
  if (remainder > 0) {
    parts.push(convertChunk(remainder));
  }

  return parts.join(' ');
}

// ============================================================================
// 3. LOS COLORES EN INGLÉS (COLORS / COLOURS)
// ============================================================================
export const COLORS_DATA: ColorEntry[] = [
  {
    id: 'red',
    nameEn: 'Red',
    nameEs: 'Rojo',
    hex: '#EF4444',
    category: 'primary',
    sampleSentenceEn: 'The red sports car accelerated along the coastal highway.',
    sampleSentenceEs: 'El coche deportivo rojo aceleró por la carretera costera.'
  },
  {
    id: 'blue',
    nameEn: 'Blue',
    nameEs: 'Azul',
    hex: '#3B82F6',
    category: 'primary',
    sampleSentenceEn: 'The clear blue sky indicated that sunny weather would persist.',
    sampleSentenceEs: 'El cielo azul despejado indicaba que el clima soleado persistiría.'
  },
  {
    id: 'yellow',
    nameEn: 'Yellow',
    nameEs: 'Amarillo',
    hex: '#FACC15',
    category: 'primary',
    sampleSentenceEn: 'Bright yellow sunflowers were planted along the wooden fence.',
    sampleSentenceEs: 'Girasoles amarillos brillantes fueron plantados a lo largo de la cerca de madera.'
  },
  {
    id: 'green',
    nameEn: 'Green',
    nameEs: 'Verde',
    hex: '#22C55E',
    category: 'secondary',
    sampleSentenceEn: 'Dense green pine forests cover the mountain slopes.',
    sampleSentenceEs: 'Densos bosques verdes de pinos cubren las laderas de la montaña.'
  },
  {
    id: 'orange',
    nameEn: 'Orange',
    nameEs: 'Naranja / Anaranjado',
    hex: '#F97316',
    category: 'secondary',
    sampleSentenceEn: 'An orange sunset illuminated the western horizon.',
    sampleSentenceEs: 'Un atardecer naranja iluminó el horizonte occidental.'
  },
  {
    id: 'purple',
    nameEn: 'Purple',
    nameEs: 'Morado / Púrpura',
    hex: '#A855F7',
    category: 'secondary',
    sampleSentenceEn: 'Ancient Roman emperors wore deep purple ceremonial robes.',
    sampleSentenceEs: 'Los antiguos emperadores romanos vestían túnicas ceremoniales de color púrpura oscuro.'
  },
  {
    id: 'pink',
    nameEn: 'Pink',
    nameEs: 'Rosa / Rosado',
    hex: '#EC4899',
    category: 'shades',
    sampleSentenceEn: 'Delicate pink cherry blossoms bloom during early spring.',
    sampleSentenceEs: 'Delicadas flores rosadas de cerezo florecen a principios de la primavera.'
  },
  {
    id: 'brown',
    nameEn: 'Brown',
    nameEs: 'Marrón / Café',
    hex: '#854D0E',
    category: 'neutral',
    sampleSentenceEn: 'He carried a vintage brown leather briefcase to the interview.',
    sampleSentenceEs: 'Él llevaba un maletín de cuero marrón clásico a la entrevista.'
  },
  {
    id: 'black',
    nameEn: 'Black',
    nameEs: 'Negro',
    hex: '#0F172A',
    category: 'neutral',
    sampleSentenceEn: 'Formal black tuxedos were mandatory for the gala dinner.',
    sampleSentenceEs: 'Los esmóquines negros formales eran obligatorios para la cena de gala.'
  },
  {
    id: 'white',
    nameEn: 'White',
    nameEs: 'Blanco',
    hex: '#F8FAFC',
    category: 'neutral',
    sampleSentenceEn: 'Pristine white snow covered the rooftops throughout the city.',
    sampleSentenceEs: 'Nieve blanca e impecable cubría los tejados por toda la ciudad.'
  },
  {
    id: 'gray',
    nameEn: 'Gray (US) / Grey (UK)',
    nameEs: 'Gris',
    hex: '#64748B',
    category: 'neutral',
    usVsUk: 'Ortografía: "Gray" en inglés americano (US) vs. "Grey" en inglés británico (UK). Ambos con idéntica pronunciación /ɡreɪ/.',
    sampleSentenceEn: 'Heavy gray clouds gathered before the afternoon thunderstorm.',
    sampleSentenceEs: 'Pesadas nubes grises se acumularon antes de la tormenta de la tarde.'
  },
  {
    id: 'navy',
    nameEn: 'Navy Blue',
    nameEs: 'Azul Marino',
    hex: '#1E3A8A',
    category: 'shades',
    sampleSentenceEn: 'The diplomat wore an elegant navy blue bespoke suit.',
    sampleSentenceEs: 'El diplomático vestía un elegante traje a medida de color azul marino.'
  },
  {
    id: 'cyan',
    nameEn: 'Cyan / Light Blue',
    nameEs: 'Cian / Celeste',
    hex: '#06B6D4',
    category: 'shades',
    sampleSentenceEn: 'The tropical ocean water sparkled with brilliant cyan tones.',
    sampleSentenceEs: 'El agua del océano tropical brillaba con brillantes tonos cian.'
  },
  {
    id: 'teal',
    nameEn: 'Teal',
    nameEs: 'Verde Azulado / Cerceta',
    hex: '#0D9488',
    category: 'shades',
    sampleSentenceEn: 'The living room walls were painted in a soothing teal hue.',
    sampleSentenceEs: 'Las paredes de la sala de estar fueron pintadas en un relajante tono verde azulado.'
  },
  {
    id: 'beige',
    nameEn: 'Beige',
    nameEs: 'Beis / Beige',
    hex: '#D4C5A9',
    category: 'neutral',
    sampleSentenceEn: 'Warm beige tiles were installed throughout the entrance hall.',
    sampleSentenceEs: 'Azulejos beige cálidos fueron instalados en todo el vestíbulo de entrada.'
  },
  {
    id: 'gold',
    nameEn: 'Gold / Golden',
    nameEs: 'Dorado / Oro',
    hex: '#EAB308',
    category: 'shades',
    sampleSentenceEn: 'The museum displayed an ancient golden crown adorned with rubies.',
    sampleSentenceEs: 'El museo exhibía una antigua corona dorada adornada con rubíes.'
  },
  {
    id: 'silver',
    nameEn: 'Silver',
    nameEs: 'Plateado / Plata',
    hex: '#94A3B8',
    category: 'shades',
    sampleSentenceEn: 'A shiny silver medal was awarded to the marathon runner.',
    sampleSentenceEs: 'Una brillante medalla de plata fue otorgada al corredor de maratón.'
  },
  {
    id: 'maroon',
    nameEn: 'Maroon',
    nameEs: 'Granate / Burdeos',
    hex: '#881337',
    category: 'shades',
    sampleSentenceEn: 'The private university selected maroon and gold as their official heraldic colors.',
    sampleSentenceEs: 'La universidad privada seleccionó granate y dorado como sus colores heráldicos oficiales.'
  },
  {
    id: 'turquoise',
    nameEn: 'Turquoise',
    nameEs: 'Turquesa',
    hex: '#14B8A6',
    category: 'shades',
    sampleSentenceEn: 'Native American artisans crafted magnificent turquoise jewelry.',
    sampleSentenceEs: 'Artesanos nativos americanos elaboraron magníficas joyas de turquesa.'
  },
  {
    id: 'olive',
    nameEn: 'Olive Green',
    nameEs: 'Verde Oliva',
    hex: '#65A30D',
    category: 'shades',
    sampleSentenceEn: 'Tactical uniforms were manufactured using durable olive green fabric.',
    sampleSentenceEs: 'Los uniformes tácticos fueron fabricados con tela duradera de color verde oliva.'
  }
];

export const COLOR_IDIOMS: ColorIdiom[] = [
  {
    idiom: 'Out of the blue',
    literalTranslation: 'Fuera de lo azul',
    realMeaning: 'De manera completamente inesperada, repentina y sin previo aviso.',
    exampleEn: 'She resigned from the executive board completely out of the blue.',
    exampleEs: 'Ella renunció a la junta ejecutiva de manera totalmente imprevista.',
    originNote: 'Proviene de "a bolt out of the blue", una centella o rayo caído de un cielo despejado azul.'
  },
  {
    idiom: 'Catch red-handed',
    literalTranslation: 'Atrapar con las manos rojas',
    realMeaning: 'Atrapar a alguien en el acto exacto cometiendo una falta o delito.',
    exampleEn: 'The security guards caught the shoplifter red-handed with the merchandise.',
    exampleEs: 'Los guardias de seguridad atraparon al ladrón con las manos en la masa con la mercancía.',
    originNote: 'Antigua ley escocesa: se requería probar que un cazador furtivo aún tenía sangre roja fresca en las manos.'
  },
  {
    idiom: 'Green thumb (US) / Green fingers (UK)',
    literalTranslation: 'Pulgar verde / Dedos verdes',
    realMeaning: 'Tener una habilidad o talento natural sobresaliente para cultivar plantas y jardines.',
    exampleEn: 'My grandmother has a green thumb; her orchid garden blooms year-round.',
    exampleEs: 'Mi abuela tiene excelente mano para las plantas; su jardín de orquídeas florece todo el año.',
    originNote: 'En Estados Unidos se utiliza universalmente "green thumb", mientras que en el Reino Unido se dice "green fingers".'
  },
  {
    idiom: 'Black sheep',
    literalTranslation: 'Oveja negra',
    realMeaning: 'La persona de una familia o grupo que es considerada extraña, desobediente o rebelde.',
    exampleEn: 'He became an artist rather than a corporate lawyer, making him the black sheep of the family.',
    exampleEs: 'Se convirtió en artista en lugar de abogado corporativo, lo que lo convirtió en la oveja negra de la familia.',
    originNote: 'Los pastores valoraban menos la lana de ovejas negras porque no se podía teñir con facilidad.'
  },
  {
    idiom: 'White lie',
    literalTranslation: 'Mentira blanca',
    realMeaning: 'Una mentira piadosa o inofensiva que se dice para no herir los sentimientos de otra persona.',
    exampleEn: 'I told a white lie and said her new haircut looked fantastic.',
    exampleEs: 'Dije una mentira piadosa y dije que su nuevo corte de cabello lucía fantástico.',
    originNote: 'El blanco se asocia con la pureza o inocencia, contrastando con una mentira maliciosa o perjudicial.'
  },
  {
    idiom: 'Red tape',
    literalTranslation: 'Cinta roja',
    realMeaning: 'Burocracia excesiva, trámites engorrosos e innecesarios que retrasan un proceso.',
    exampleEn: 'Starting a small business involves navigating endless government red tape.',
    exampleEs: 'Iniciar una pequeña empresa implica lidiar con una interminable burocracia gubernamental.',
    originNote: 'Históricamente, los documentos oficiales británicos e hispanos se ataban con cintas rojas.'
  },
  {
    idiom: 'Golden opportunity',
    literalTranslation: 'Oportunidad dorada',
    realMeaning: 'Una oportunidad excepcional e irrepetible que no debe dejarse escapar.',
    exampleEn: 'The international fellowship was a golden opportunity to conduct groundbreaking research.',
    exampleEs: 'La beca internacional fue una oportunidad de oro para realizar investigaciones pioneras.',
    originNote: 'Alusión al oro como el metal más valioso y codiciado desde la antigüedad.'
  },
  {
    idiom: 'Grey area / Gray area',
    literalTranslation: 'Área gris',
    realMeaning: 'Una situación ambigua donde las reglas, la ética o la legalidad no están claramente definidas.',
    exampleEn: 'Tax deductions for digital remote work remain a legal grey area.',
    exampleEs: 'Las deducciones fiscales por trabajo remoto digital siguen siendo una zona legal ambigua.',
    originNote: 'Metafóricamente se sitúa entre el blanco (lo permitido) y el negro (lo prohibido).'
  },
  {
    idiom: 'Once in a blue moon',
    literalTranslation: 'Una vez en una luna azul',
    realMeaning: 'Un evento que ocurre con extrema rareza o casi nunca.',
    exampleEn: 'Due to his demanding surgical schedule, he visits his hometown once in a blue moon.',
    exampleEs: 'Debido a su exigente horario quirúrgico, él visita su pueblo natal muy rara vez.',
    originNote: 'Una "luna azul" es la segunda luna llena en un mismo mes del calendario, un fenómeno astronómico infrecuente.'
  },
  {
    idiom: 'See red',
    literalTranslation: 'Ver rojo',
    realMeaning: 'Ponerse furioso, enfurecerse súbitamente hasta perder el control.',
    exampleEn: 'He saw red when he discovered his project files had been deleted without authorization.',
    exampleEs: 'Se puso furioso cuando descubrió que los archivos de su proyecto habían sido borrados sin autorización.',
    originNote: 'Asociado con la creencia popular sobre la furia de los toros ante el color rojo y el rubor en la sangre.'
  },
  {
    idiom: 'Tickled pink',
    literalTranslation: 'Hacer cosquillas rosa',
    realMeaning: 'Estar sumamente contento, encantado y complacido con una noticia.',
    exampleEn: 'The professor was tickled pink when her students won first place in the national science fair.',
    exampleEs: 'La profesora estaba encantadísima cuando sus alumnos obtuvieron el primer lugar en la feria científica nacional.',
    originNote: 'Alude al tono rosado y sonrojado que adquieren las mejillas al reírse alegremente por cosquillas.'
  },
  {
    idiom: 'In the black / In the red',
    literalTranslation: 'En el negro / En el rojo',
    realMeaning: '"In the black" significa tener ganancias y superávit; "In the red" significa tener pérdidas o deudas.',
    exampleEn: 'After five quarters of losses, the startup is finally operating in the black.',
    exampleEs: 'Tras cinco trimestres de pérdidas, la nueva empresa finalmente está operando con números negros (ganancias).',
    originNote: 'Proviene de la contabilidad clásica: la tinta roja señalaba déficits y la tinta negra marcaba saldos positivos.'
  }
];

// ============================================================================
// 4. OBJETOS COTIDIANOS Y VOCABULARIO POR CATEGORÍAS (10 CATEGORÍAS)
// ============================================================================
export const EVERYDAY_OBJECTS_CATEGORIES: ObjectCategoryInfo[] = [
  {
    id: 'classroom',
    name: 'El Salón de Clase y Oficina',
    englishTitle: 'Classroom & Office Equipment',
    iconEmoji: '🎒',
    description: 'Útiles escolares, mobiliario de estudio, papelería y equipos administrativos esenciales.',
    items: [
      { id: 'desk', nameEn: 'Desk', nameEs: 'Escritorio / Pupitre', ipa: '/desk/', category: 'classroom', emoji: '🪑', article: 'a', pluralEn: 'desks', exampleEn: 'Place your textbook on the desk.', exampleEs: 'Coloca tu libro de texto sobre el escritorio.' },
      { id: 'chair', nameEn: 'Chair', nameEs: 'Silla', ipa: '/tʃeər/', category: 'classroom', emoji: '🪑', article: 'a', pluralEn: 'chairs', exampleEn: 'The ergonomic office chair supports lumbar posture.', exampleEs: 'La silla ergonómica de oficina apoya la postura lumbar.' },
      { id: 'notebook', nameEn: 'Notebook', nameEs: 'Cuaderno / Libreta', ipa: '/ˈnoʊt.bʊk/', category: 'classroom', emoji: '📓', article: 'a', pluralEn: 'notebooks', exampleEn: 'She writes grammar notes in her spiral notebook.', exampleEs: 'Ella escribe apuntes de gramática en su cuaderno de espiral.' },
      { id: 'pen', nameEn: 'Pen', nameEs: 'Bolígrafo / Lapicero', ipa: '/pen/', category: 'classroom', emoji: '🖊️', article: 'a', pluralEn: 'pens', exampleEn: 'Please sign the contract with a black pen.', exampleEs: 'Por favor firma el contrato con un bolígrafo negro.' },
      { id: 'pencil', nameEn: 'Pencil', nameEs: 'Lápiz', ipa: '/ˈpen.səl/', category: 'classroom', emoji: '✏️', article: 'a', pluralEn: 'pencils', exampleEn: 'Always use a pencil when answering bubble sheets.', exampleEs: 'Usa siempre un lápiz al responder hojas de respuestas de burbuja.' },
      { id: 'backpack', nameEn: 'Backpack / Rucksack', nameEs: 'Mochila', ipa: '/ˈbæk.pæk/', category: 'classroom', emoji: '🎒', article: 'a', pluralEn: 'backpacks', usVsUk: 'US suele decir "backpack"; UK a menudo utiliza "rucksack".', exampleEn: 'He packed his laptop into his waterproof backpack.', exampleEs: 'Empacó su computadora portátil en su mochila impermeable.' },
      { id: 'eraser', nameEn: 'Eraser (US) / Rubber (UK)', nameEs: 'Borrador / Goma de borrar', ipa: '/ɪˈreɪ.sər/ / /ˈrʌb.ər/', category: 'classroom', emoji: '🧼', article: 'an', pluralEn: 'erasers', usVsUk: '¡Cuidado cultural! En UK "rubber" es el borrador de lápiz; en US "rubber" es un coloquialismo para preservativo, por lo que en US se debe decir exclusivamente "eraser".', exampleEn: 'Erase the pencil calculation with a clean eraser.', exampleEs: 'Borra el cálculo a lápiz con un borrador limpio.' },
      { id: 'ruler', nameEn: 'Ruler', nameEs: 'Regla', ipa: '/ˈruː.lər/', category: 'classroom', emoji: '📏', article: 'a', pluralEn: 'rulers', exampleEn: 'Draw a straight line using a plastic ruler.', exampleEs: 'Traza una línea recta utilizando una regla plástica.' },
      { id: 'scissors', nameEn: 'Scissors', nameEs: 'Tijeras', ipa: '/ˈsɪz.ərz/', category: 'classroom', emoji: '✂️', article: 'some', pluralEn: 'scissors (a pair of scissors)', exampleEn: 'Carefully cut the cardboard with sharp scissors.', exampleEs: 'Corta cuidadosamente el cartón con tijeras afiladas.' },
      { id: 'stapler', nameEn: 'Stapler', nameEs: 'Engrapadora / Grapadora', ipa: '/ˈsteɪ.plər/', category: 'classroom', emoji: '📎', article: 'a', pluralEn: 'staplers', exampleEn: 'Fasten the printed pages together with a stapler.', exampleEs: 'Une las páginas impresas con una engrapadora.' },
      { id: 'whiteboard', nameEn: 'Whiteboard', nameEs: 'Pizarra blanca', ipa: '/ˈwaɪt.bɔːrd/', category: 'classroom', emoji: '📋', article: 'a', pluralEn: 'whiteboards', exampleEn: 'The teacher wrote the grammatical formula on the whiteboard.', exampleEs: 'El profesor escribió la fórmula gramatical en la pizarra blanca.' },
      { id: 'highlighter', nameEn: 'Highlighter', nameEs: 'Resaltador / Marcador fluorescente', ipa: '/ˈhaɪˌlaɪ.tər/', category: 'classroom', emoji: '🖍️', article: 'a', pluralEn: 'highlighters', exampleEn: 'Highlight key terminology with a yellow highlighter.', exampleEs: 'Resalta la terminología clave con un resaltador amarillo.' },
      { id: 'paperclip', nameEn: 'Paperclip', nameEs: 'Clip para papel', ipa: '/ˈpeɪ.pər.klɪp/', category: 'classroom', emoji: '📎', article: 'a', pluralEn: 'paperclips', exampleEn: 'Attach the receipt to the expense form with a paperclip.', exampleEs: 'Adjunta el recibo al formulario de gastos con un clip.' },
      { id: 'binder', nameEn: 'Binder / Folder', nameEs: 'Archivador / Carpeta', ipa: '/ˈbaɪn.dər/', category: 'classroom', emoji: '📁', article: 'a', pluralEn: 'binders', exampleEn: 'Keep all historical handouts inside a three-ring binder.', exampleEs: 'Conserva todos los folletos históricos dentro de un archivador de tres aros.' },
      { id: 'sharpener', nameEn: 'Pencil sharpener', nameEs: 'Sacapuntas', ipa: '/ˈpen.səl ˌʃɑːr.pən.ər/', category: 'classroom', emoji: '✏️', article: 'a', pluralEn: 'pencil sharpeners', exampleEn: 'He sharpened his pencil before the geometry examination.', exampleEs: 'Sacó punta a su lápiz antes del examen de geometría.' }
    ]
  },
  {
    id: 'house',
    name: 'La Casa y Muebles',
    englishTitle: 'House, Rooms & Furniture',
    iconEmoji: '🏠',
    description: 'Espacios habitacionales, mobiliario, iluminación y accesorios del hogar.',
    items: [
      { id: 'bed', nameEn: 'Bed', nameEs: 'Cama', ipa: '/bed/', category: 'house', emoji: '🛏️', article: 'a', pluralEn: 'beds', exampleEn: 'A comfortable queen-size bed ensures restful sleep.', exampleEs: 'Una cómoda cama de matrimonio asegura un sueño reparador.' },
      { id: 'sofa', nameEn: 'Sofa / Couch', nameEs: 'Sofá', ipa: '/ˈsoʊ.fə/ / /kaʊtʃ/', category: 'house', emoji: '🛋️', article: 'a', pluralEn: 'sofas', usVsUk: 'En US "couch" y "sofa" son intercambiables; en UK "sofa" es la forma preferida.', exampleEn: 'We sat on the leather sofa to watch the documentary.', exampleEs: 'Nos sentamos en el sofá de cuero a ver el documental.' },
      { id: 'wardrobe', nameEn: 'Closet (US) / Wardrobe (UK)', nameEs: 'Armario / Clóset / Ropero', ipa: '/ˈklɑː.zət/ / /ˈwɔːr.droʊb/', category: 'house', emoji: '🚪', article: 'a', pluralEn: 'wardrobes', usVsUk: 'En US un "closet" suele estar empotrado en la pared; en UK un "wardrobe" es un mueble exento de madera.', exampleEn: 'Hang your winter coats neatly inside the wardrobe.', exampleEs: 'Cuelga tus abrigos de invierno ordenadamente dentro del armario.' },
      { id: 'lamp', nameEn: 'Lamp', nameEs: 'Lámpara', ipa: '/læmp/', category: 'house', emoji: '💡', article: 'a', pluralEn: 'lamps', exampleEn: 'Turn on the bedside lamp to read at night.', exampleEs: 'Enciende la lámpara de noche para leer.' },
      { id: 'mirror', nameEn: 'Mirror', nameEs: 'Espejo', ipa: '/ˈmɪr.ər/', category: 'house', emoji: '🪞', article: 'a', pluralEn: 'mirrors', exampleEn: 'A large decorative mirror hangs in the foyer.', exampleEs: 'Un gran espejo decorativo cuelga en el vestíbulo.' },
      { id: 'bookshelf', nameEn: 'Bookshelf / Bookcase', nameEs: 'Estantería de libros / Librero', ipa: '/ˈbʊk.ʃelf/', category: 'house', emoji: '📚', article: 'a', pluralEn: 'bookshelves', exampleEn: 'The mahogany bookshelf is filled with classical literature.', exampleEs: 'La estantería de caoba está llena de literatura clásica.' },
      { id: 'rug', nameEn: 'Rug / Carpet', nameEs: 'Alfombra / Tapete', ipa: '/rʌɡ/ / /ˈkɑːr.pɪt/', category: 'house', emoji: '🧶', article: 'a', pluralEn: 'rugs', usVsUk: 'En inglés "carpet" suele cubrir todo el suelo de pared a pared; "rug" es un tapete móvil de área.', exampleEn: 'A Persian wool rug covers the hardwood floor.', exampleEs: 'Una alfombra persa de lana cubre el suelo de madera.' },
      { id: 'curtains', nameEn: 'Drapes (US) / Curtains (UK)', nameEs: 'Cortinas', ipa: '/dreɪps/ / /ˈkɜːr.tənz/', category: 'house', emoji: '🪟', article: 'some', pluralEn: 'curtains', exampleEn: 'Close the blackout curtains to block morning sunlight.', exampleEs: 'Cierra las cortinas opacas para bloquear la luz matutina.' },
      { id: 'pillow', nameEn: 'Pillow', nameEs: 'Almohada', ipa: '/ˈpɪl.oʊ/', category: 'house', emoji: '🛏️', article: 'a', pluralEn: 'pillows', usVsUk: 'Para dormir se dice "pillow"; para cojines decorativos de sofá se dice "cushion".', exampleEn: 'He prefers a firm memory-foam pillow for neck support.', exampleEs: 'Él prefiere una almohada firme de espuma viscoelástica.' },
      { id: 'blanket', nameEn: 'Blanket / Quilt', nameEs: 'Manta / Cobija / Colcha', ipa: '/ˈblæŋ.kɪt/', category: 'house', emoji: '🛋️', article: 'a', pluralEn: 'blankets', exampleEn: 'Wrap yourself in a warm blanket during winter evenings.', exampleEs: 'Envuélvete en una manta cálida durante las noches de invierno.' },
      { id: 'drawer', nameEn: 'Drawer', nameEs: 'Cajón / Gaveta', ipa: '/drɔːr/', category: 'house', emoji: '🗄️', article: 'a', pluralEn: 'drawers', exampleEn: 'Keep official passports safely inside the top desk drawer.', exampleEs: 'Guarda los pasaportes oficiales dentro del cajón superior del escritorio.' },
      { id: 'clock', nameEn: 'Clock', nameEs: 'Reloj de pared o mesa', ipa: '/klɑːk/', category: 'house', emoji: '⏰', article: 'a', pluralEn: 'clocks', usVsUk: 'Diferencia crucial: "clock" es reloj de pared o despertador; "watch" es reloj de pulsera.', exampleEn: 'The antique grandfather clock chimes on the hour.', exampleEs: 'El antiguo reloj de pie da las campanadas cada hora.' }
    ]
  },
  {
    id: 'kitchen',
    name: 'La Cocina y Utensilios',
    englishTitle: 'Kitchen Appliances & Tableware',
    iconEmoji: '🍳',
    description: 'Electrodomésticos, cubertería, vajilla y herramientas de cocina.',
    items: [
      { id: 'refrigerator', nameEn: 'Refrigerator / Fridge', nameEs: 'Refrigerador / Nevera', ipa: '/rɪˈfrɪdʒ.ə.reɪ.tər/', category: 'kitchen', emoji: '🧊', article: 'a', pluralEn: 'refrigerators', exampleEn: 'Store fresh dairy and vegetables in the refrigerator.', exampleEs: 'Guarda los lácteos frescos y las verduras en el refrigerador.' },
      { id: 'stove', nameEn: 'Stove (US) / Cooker (UK)', nameEs: 'Estufa / Cocina', ipa: '/stoʊv/ / /ˈkʊk.ər/', category: 'kitchen', emoji: '🔥', article: 'a', pluralEn: 'stoves', usVsUk: 'US dice "stove"; UK prefiere "cooker". La superficie superior con quemadores se llama "cooktop" o "hob".', exampleEn: 'Simmer the vegetable broth over low heat on the stove.', exampleEs: 'Cocina a fuego lento el caldo de verduras sobre la estufa.' },
      { id: 'oven', nameEn: 'Oven', nameEs: 'Horno', ipa: '/ˈʌv.ən/', category: 'kitchen', emoji: '🥘', article: 'an', pluralEn: 'ovens', exampleEn: 'Preheat the convection oven to 375 degrees Fahrenheit.', exampleEs: 'Precalienta el horno de convección a 375 grados Fahrenheit.' },
      { id: 'microwave', nameEn: 'Microwave oven', nameEs: 'Microondas', ipa: '/ˈmaɪ.kroʊ.weɪv/', category: 'kitchen', emoji: '📻', article: 'a', pluralEn: 'microwaves', exampleEn: 'Warm the leftovers in the microwave for two minutes.', exampleEs: 'Calienta las sobras en el microondas durante dos minutos.' },
      { id: 'fork', nameEn: 'Fork', nameEs: 'Tenedor', ipa: '/fɔːrk/', category: 'kitchen', emoji: '🍴', article: 'a', pluralEn: 'forks', exampleEn: 'Set the dinner fork to the left of the ceramic plate.', exampleEs: 'Coloca el tenedor de mesa a la izquierda del plato de cerámica.' },
      { id: 'knife', nameEn: 'Knife', nameEs: 'Cuchillo', ipa: '/naɪf/', category: 'kitchen', emoji: '🔪', article: 'a', pluralEn: 'knives (plural irregular)', exampleEn: 'Chop the onions finely with a chef’s knife.', exampleEs: 'Pica las cebollas finamente con un cuchillo de chef.' },
      { id: 'spoon', nameEn: 'Spoon', nameEs: 'Cuchara', ipa: '/spuːn/', category: 'kitchen', emoji: '🥄', article: 'a', pluralEn: 'spoons', exampleEn: 'Stir the hot soup gently with a wooden spoon.', exampleEs: 'Revuelve la sopa caliente suavemente con una cuchara de madera.' },
      { id: 'plate', nameEn: 'Plate / Dish', nameEs: 'Plato', ipa: '/pleɪt/', category: 'kitchen', emoji: '🍽️', article: 'a', pluralEn: 'plates', exampleEn: 'Serve the grilled salmon on a warm porcelain plate.', exampleEs: 'Sirve el salmón asado en un plato caliente de porcelana.' },
      { id: 'cup', nameEn: 'Cup / Mug', nameEs: 'Taza / Tazón', ipa: '/kʌp/ / /mʌɡ/', category: 'kitchen', emoji: '☕', article: 'a', pluralEn: 'cups', usVsUk: 'Una "cup" suele tener platillo y es fina; un "mug" es una taza cilíndrica grande para café.', exampleEn: 'He poured freshly brewed coffee into his ceramic mug.', exampleEs: 'Sirvió café recién hecho en su taza de cerámica.' },
      { id: 'glass', nameEn: 'Glass', nameEs: 'Vaso / Copa de vidrio', ipa: '/ɡlæs/', category: 'kitchen', emoji: '🥛', article: 'a', pluralEn: 'glasses', exampleEn: 'Drink a tall glass of cold water after exercising.', exampleEs: 'Bebe un vaso alto de agua fría después de hacer ejercicio.' },
      { id: 'pan', nameEn: 'Frying pan / Skillet', nameEs: 'Sartén', ipa: '/ˈfraɪ.ɪŋ ˌpæn/', category: 'kitchen', emoji: '🍳', article: 'a', pluralEn: 'frying pans', usVsUk: 'En US se llama frecuentemente "skillet"; en UK y US se usa "frying pan".', exampleEn: 'Melt a dollop of butter in the cast-iron skillet.', exampleEs: 'Derrite una porción de mantequilla en la sartén de hierro fundido.' },
      { id: 'pot', nameEn: 'Pot / Saucepan', nameEs: 'Olla / Cacerola', ipa: '/pɑːt/', category: 'kitchen', emoji: '🍲', article: 'a', pluralEn: 'pots', exampleEn: 'Boil salted water in a large stainless-steel pot.', exampleEs: 'Hierve agua con sal en una olla grande de acero inoxidable.' },
      { id: 'kettle', nameEn: 'Kettle', nameEs: 'Hervidor / Tetera', ipa: '/ˈket.əl/', category: 'kitchen', emoji: '🫖', article: 'a', pluralEn: 'kettles', exampleEn: 'In Britain, an electric kettle is an indispensable household appliance.', exampleEs: 'En Gran Bretaña, un hervidor eléctrico es un electrodoméstico indispensable.' }
    ]
  },
  {
    id: 'clothes',
    name: 'Ropa y Accesorios',
    englishTitle: 'Clothes, Footwear & Accessories',
    iconEmoji: '👔',
    description: 'Prendas de vestir, calzado y complementos en inglés americano y británico.',
    items: [
      { id: 'shirt', nameEn: 'Shirt', nameEs: 'Camisa formal de botones', ipa: '/ʃɜːrt/', category: 'clothes', emoji: '👔', article: 'a', pluralEn: 'shirts', exampleEn: 'Iron your white dress shirt before the job interview.', exampleEs: 'Plancha tu camisa blanca de vestir antes de la entrevista.' },
      { id: 'tshirt', nameEn: 'T-shirt', nameEs: 'Camiseta / Playera / Remera', ipa: '/ˈtiː.ʃɜːrt/', category: 'clothes', emoji: '👕', article: 'a', pluralEn: 't-shirts', exampleEn: 'He wore a plain cotton T-shirt on the weekend.', exampleEs: 'Llevó una camiseta sencilla de algodón el fin de semana.' },
      { id: 'pants', nameEn: 'Pants (US) / Trousers (UK)', nameEs: 'Pantalones', ipa: '/pænts/ / /ˈtraʊ.zərz/', category: 'clothes', emoji: '👖', article: 'some', pluralEn: 'pants (a pair of pants)', usVsUk: '¡Cuidado con este falso amigo! En US "pants" son pantalones de vestir; en UK "pants" significa ropa interior masculina (calzoncillos). En UK se dice "trousers".', exampleEn: 'He bought tailored wool trousers for the formal banquet.', exampleEs: 'Compró pantalones de lana a medida para el banquete formal.' },
      { id: 'shoes', nameEn: 'Shoes', nameEs: 'Zapatos', ipa: '/ʃuːz/', category: 'clothes', emoji: '👞', article: 'some', pluralEn: 'shoes (a pair of shoes)', exampleEn: 'Polish your leather dress shoes until they shine.', exampleEs: 'Lustra tus zapatos de vestir de cuero hasta que brillen.' },
      { id: 'sneakers', nameEn: 'Sneakers (US) / Trainers (UK)', nameEs: 'Zapatillas deportivas / Tenis', ipa: '/ˈsniː.kərz/ / /ˈtreɪ.nərz/', category: 'clothes', emoji: '👟', article: 'some', pluralEn: 'sneakers', usVsUk: 'US usa "sneakers"; UK usa "trainers"; en Australia se dice "runners".', exampleEn: 'Tie your running sneakers securely before the marathon.', exampleEs: 'Ata bien tus zapatillas para correr antes del maratón.' },
      { id: 'jacket', nameEn: 'Jacket', nameEs: 'Chaqueta / Saco', ipa: '/ˈdʒæk.ɪt/', category: 'clothes', emoji: '🧥', article: 'a', pluralEn: 'jackets', exampleEn: 'Zip up your windproof jacket against the sea breeze.', exampleEs: 'Sube la cremallera de tu chaqueta cortavientos contra la brisa.' },
      { id: 'coat', nameEn: 'Coat / Overcoat', nameEs: 'Abrigo largo', ipa: '/koʊt/', category: 'clothes', emoji: '🧥', article: 'a', pluralEn: 'coats', exampleEn: 'Wear a heavy wool coat when traveling through snowy regions.', exampleEs: 'Usa un abrigo pesado de lana al viajar por regiones nevadas.' },
      { id: 'dress', nameEn: 'Dress', nameEs: 'Vestido', ipa: '/dres/', category: 'clothes', emoji: '👗', article: 'a', pluralEn: 'dresses', exampleEn: 'She wore an emerald green silk dress to the reception.', exampleEs: 'Lució un vestido de seda verde esmeralda para la recepción.' },
      { id: 'skirt', nameEn: 'Skirt', nameEs: 'Falda', ipa: '/skɜːrt/', category: 'clothes', emoji: '👗', article: 'a', pluralEn: 'skirts', exampleEn: 'The traditional Scottish kilt is a pleated tartan skirt.', exampleEs: 'El kilt escocés tradicional es una falda plisada de tartán.' },
      { id: 'sweater', nameEn: 'Sweater (US) / Jumper (UK)', nameEs: 'Suéter / Jersey', ipa: '/ˈswet.ər/ / /ˈdʒʌm.pər/', category: 'clothes', emoji: '🧶', article: 'a', pluralEn: 'sweaters', usVsUk: 'US utiliza "sweater"; UK prefiere "jumper" o "pullover".', exampleEn: 'Knit a warm cashmere sweater for the autumn chill.', exampleEs: 'Teje un suéter de cachemira para el frío otoñal.' },
      { id: 'socks', nameEn: 'Socks', nameEs: 'Calcetines / Medias', ipa: '/sɑːks/', category: 'clothes', emoji: '🧦', article: 'some', pluralEn: 'socks (a pair of socks)', exampleEn: 'Thermal wool socks keep your feet warm in the snow.', exampleEs: 'Los calcetines térmicos de lana mantienen tus pies calientes.' },
      { id: 'tie', nameEn: 'Necktie / Tie', nameEs: 'Corbata', ipa: '/taɪ/', category: 'clothes', emoji: '👔', article: 'a', pluralEn: 'ties', exampleEn: 'He tied a Windsor knot in his silk necktie.', exampleEs: 'Hizo un nudo Windsor en su corbata de seda.' },
      { id: 'belt', nameEn: 'Belt', nameEs: 'Cinturón / Cinto', ipa: '/belt/', category: 'clothes', emoji: '🩲', article: 'a', pluralEn: 'belts', exampleEn: 'Fasten your leather belt through the trouser loops.', exampleEs: 'Ajusta tu cinturón de cuero a través de las trabillas del pantalón.' }
    ]
  },
  {
    id: 'technology',
    name: 'Tecnología y Dispositivos',
    englishTitle: 'Technology & Digital Devices',
    iconEmoji: '💻',
    description: 'Hardware, telefonía móvil, periféricos y accesorios informáticos.',
    items: [
      { id: 'laptop', nameEn: 'Laptop computer', nameEs: 'Computadora portátil / Portátil', ipa: '/ˈlæp.tɑːp/', category: 'technology', emoji: '💻', article: 'a', pluralEn: 'laptops', exampleEn: 'Shut down your laptop before packing it into your bag.', exampleEs: 'Apaga tu computadora portátil antes de guardarla.' },
      { id: 'smartphone', nameEn: 'Smartphone / Mobile phone', nameEs: 'Teléfono inteligente / Celular / Móvil', ipa: '/ˈsmɑːrt.foʊn/', category: 'technology', emoji: '📱', article: 'a', pluralEn: 'smartphones', usVsUk: 'US dice "cell phone" o "smartphone"; UK dice "mobile phone" o "mobile".', exampleEn: 'Charge your smartphone overnight to ensure full battery life.', exampleEs: 'Carga tu teléfono durante la noche para tener batería completa.' },
      { id: 'charger', nameEn: 'Charger', nameEs: 'Cargador', ipa: '/ˈtʃɑːr.dʒər/', category: 'technology', emoji: '🔌', article: 'a', pluralEn: 'chargers', exampleEn: 'Do not bend the USB-C fast charger cable.', exampleEs: 'No dobles el cable del cargador rápido USB-C.' },
      { id: 'headphones', nameEn: 'Headphones / Earphones', nameEs: 'Auriculares / Audífonos', ipa: '/ˈhed.foʊnz/', category: 'technology', emoji: '🎧', article: 'some', pluralEn: 'headphones', usVsUk: '"Headphones" cubren las orejas; "earbuds / earphones" se insertan en el oído.', exampleEn: 'Noise-canceling headphones are perfect for long flights.', exampleEs: 'Los auriculares con cancelación de ruido son ideales para vuelos largos.' },
      { id: 'keyboard', nameEn: 'Keyboard', nameEs: 'Teclado', ipa: '/ˈkiː.bɔːrd/', category: 'technology', emoji: '⌨️', article: 'a', pluralEn: 'keyboards', exampleEn: 'A mechanical keyboard provides tactile typing feedback.', exampleEs: 'Un teclado mecánico proporciona una respuesta táctil al teclear.' },
      { id: 'mouse', nameEn: 'Mouse', nameEs: 'Ratón de computadora', ipa: '/maʊs/', category: 'technology', emoji: '🖱️', article: 'a', pluralEn: 'mice / mouses', exampleEn: 'Click the left button on your wireless optical mouse.', exampleEs: 'Haz clic en el botón izquierdo de tu ratón óptico inalámbrico.' },
      { id: 'screen', nameEn: 'Screen / Monitor', nameEs: 'Pantalla / Monitor', ipa: '/skriːn/', category: 'technology', emoji: '🖥️', article: 'a', pluralEn: 'screens', exampleEn: 'Adjust the screen brightness to prevent visual fatigue.', exampleEs: 'Ajusta el brillo de la pantalla para prevenir la fatiga visual.' },
      { id: 'flashdrive', nameEn: 'Flash drive (US) / USB stick (UK)', nameEs: 'Memoria USB / Pendrive', ipa: '/ˈflæʃ ˌdraɪv/', category: 'technology', emoji: '💾', article: 'a', pluralEn: 'flash drives', usVsUk: 'US suele decir "flash drive" o "thumb drive"; UK suele decir "memory stick" o "USB stick".', exampleEn: 'Back up your academic thesis on an external flash drive.', exampleEs: 'Respalda tu tesis académica en una memoria USB externa.' }
    ]
  },
  {
    id: 'transport',
    name: 'Ciudad, Transporte y Lugares',
    englishTitle: 'City Infrastructure & Transportation',
    iconEmoji: '🚗',
    description: 'Medios de transporte, vías públicas e instituciones urbanas clave.',
    items: [
      { id: 'car', nameEn: 'Car / Automobile', nameEs: 'Automóvil / Carro / Coche', ipa: '/kɑːr/', category: 'transport', emoji: '🚗', article: 'a', pluralEn: 'cars', exampleEn: 'Electric cars produce zero direct carbon tailpipe emissions.', exampleEs: 'Los autos eléctricos producen cero emisiones directas por el escape.' },
      { id: 'bus', nameEn: 'Bus', nameEs: 'Autobús / Bus', ipa: '/bʌs/', category: 'transport', emoji: '🚌', article: 'a', pluralEn: 'buses', exampleEn: 'The double-decker red bus is an iconic London landmark.', exampleEs: 'El autobús rojo de dos pisos es un emblema icónico de Londres.' },
      { id: 'subway', nameEn: 'Subway (US) / Underground / Tube (UK)', nameEs: 'Metro / Tren subterráneo', ipa: '/ˈsʌb.weɪ/ / /ˈʌn.dər.ɡraʊnd/', category: 'transport', emoji: '🚇', article: 'the', pluralEn: 'subways', usVsUk: 'En New York es el "Subway"; en Londres es el "Underground" o coloquialmente "The Tube".', exampleEn: 'Take the subway uptown toward Central Park.', exampleEs: 'Toma el metro en dirección norte hacia Central Park.' },
      { id: 'train', nameEn: 'Train', nameEs: 'Tren', ipa: '/treɪn/', category: 'transport', emoji: '🚆', article: 'a', pluralEn: 'trains', exampleEn: 'The high-speed bullet train reached speeds exceeding 300 km/h.', exampleEs: 'El tren bala de alta velocidad superó los 300 km/h.' },
      { id: 'airplane', nameEn: 'Airplane (US) / Aeroplane (UK)', nameEs: 'Avión', ipa: '/ˈer.pleɪn/ / /ˈeə.rə.pleɪn/', category: 'transport', emoji: '✈️', article: 'an', pluralEn: 'airplanes', usVsUk: 'Ortografía: US escribe "airplane"; UK escribe tradicionalmente "aeroplane".', exampleEn: 'The international passenger airplane touched down smoothly.', exampleEs: 'El avión de pasajeros internacional aterrizó suavemente.' },
      { id: 'bicycle', nameEn: 'Bicycle / Bike', nameEs: 'Bicicleta', ipa: '/ˈbaɪ.sɪ.kəl/', category: 'transport', emoji: '🚲', article: 'a', pluralEn: 'bicycles', exampleEn: 'Commuting by bicycle reduces municipal road congestion.', exampleEs: 'Desplazarse en bicicleta reduce la congestión vial de la ciudad.' },
      { id: 'trafficlight', nameEn: 'Traffic light', nameEs: 'Semáforo', ipa: '/ˈtræf.ɪk ˌlaɪt/', category: 'transport', emoji: '🚦', article: 'a', pluralEn: 'traffic lights', exampleEn: 'Vehicles must stop completely when the traffic light turns red.', exampleEs: 'Los vehículos deben detenerse cuando el semáforo cambia a rojo.' },
      { id: 'sidewalk', nameEn: 'Sidewalk (US) / Pavement (UK)', nameEs: 'Acera / Banqueta / Vereda', ipa: '/ˈsaɪd.wɑːk/ / /ˈpeɪv.mənt/', category: 'transport', emoji: '🚶', article: 'a', pluralEn: 'sidewalks', usVsUk: 'US usa "sidewalk"; UK usa "pavement". ¡Cuidado! En US "pavement" es el asfalto donde van los coches.', exampleEn: 'Pedestrians should always walk along the designated sidewalk.', exampleEs: 'Los peatones siempre deben caminar por la acera designada.' },
      { id: 'crosswalk', nameEn: 'Crosswalk (US) / Zebra crossing (UK)', nameEs: 'Paso peatonal / Paso de cebra', ipa: '/ˈkrɑːs.wɑːk/', category: 'transport', emoji: '🦓', article: 'a', pluralEn: 'crosswalks', exampleEn: 'Cross the four-lane avenue only at the marked crosswalk.', exampleEs: 'Cruza la avenida de cuatro carriles únicamente por el paso peatonal.' },
      { id: 'hospital', nameEn: 'Hospital', nameEs: 'Hospital', ipa: '/ˈhɑː.spɪ.t̬əl/', category: 'transport', emoji: '🏥', article: 'a', pluralEn: 'hospitals', usVsUk: 'Sintaxis: En US se dice "in THE hospital" (He is in the hospital); en UK se elide el artículo: "in hospital" (He is in hospital).', exampleEn: 'Emergency paramedics rushed the patient to the metropolitan hospital.', exampleEs: 'Los paramédicos trasladaron de urgencia al paciente al hospital metropolitano.' },
      { id: 'airport', nameEn: 'Airport', nameEs: 'Aeropuerto', ipa: '/ˈer.pɔːrt/', category: 'transport', emoji: '🛫', article: 'an', pluralEn: 'airports', exampleEn: 'Arrive at the international airport three hours before departure.', exampleEs: 'Llega al aeropuerto internacional tres horas antes de la salida.' }
    ]
  },
  {
    id: 'body',
    name: 'El Cuerpo Humano y Salud',
    englishTitle: 'Human Body Parts & Anatomy',
    iconEmoji: '🫀',
    description: 'Anatomía humana externa, órganos vitales y términos de salud.',
    items: [
      { id: 'head', nameEn: 'Head', nameEs: 'Cabeza', ipa: '/hed/', category: 'body', emoji: '🗣️', article: 'a', pluralEn: 'heads', exampleEn: 'Always wear a protective helmet on your head when cycling.', exampleEs: 'Usa siempre un casco protector en la cabeza al andar en bicicleta.' },
      { id: 'eye', nameEn: 'Eye', nameEs: 'Ojo', ipa: '/aɪ/', category: 'body', emoji: '👁️', article: 'an', pluralEn: 'eyes', exampleEn: 'She has expressive dark brown eyes.', exampleEs: 'Ella tiene expresivos ojos castaños oscuros.' },
      { id: 'ear', nameEn: 'Ear', nameEs: 'Oreja / Oído', ipa: '/ɪər/', category: 'body', emoji: '👂', article: 'an', pluralEn: 'ears', exampleEn: 'The human ear detects acoustic frequencies up to 20,000 Hertz.', exampleEs: 'El oído humano detecta frecuencias acústicas de hasta 20,000 Hertz.' },
      { id: 'nose', nameEn: 'Nose', nameEs: 'Nariz', ipa: '/noʊz/', category: 'body', emoji: '👃', article: 'a', pluralEn: 'noses', exampleEn: 'Inhale deeply through your nose and exhale through your mouth.', exampleEs: 'Inhala profundamente por la nariz y exhala por la boca.' },
      { id: 'mouth', nameEn: 'Mouth', nameEs: 'Boca', ipa: '/maʊθ/', category: 'body', emoji: '👄', article: 'a', pluralEn: 'mouths', exampleEn: 'Cover your mouth when coughing or sneezing.', exampleEs: 'Cubre tu boca al toser o estornudar.' },
      { id: 'tooth', nameEn: 'Tooth', nameEs: 'Diente', ipa: '/tuːθ/', category: 'body', emoji: '🦷', article: 'a', pluralEn: 'teeth (plural irregular)', exampleEn: 'Brush your teeth twice daily to prevent dental cavities.', exampleEs: 'Cepilla tus dientes dos veces al día para prevenir caries.' },
      { id: 'hand', nameEn: 'Hand', nameEs: 'Mano', ipa: '/hænd/', category: 'body', emoji: '✋', article: 'a', pluralEn: 'hands', exampleEn: 'Wash your hands thoroughly with antibacterial soap.', exampleEs: 'Lava tus manos a fondo con jabón antibacterial.' },
      { id: 'finger', nameEn: 'Finger', nameEs: 'Dedo de la mano', ipa: '/ˈfɪŋ.ɡər/', category: 'body', emoji: '☝️', article: 'a', pluralEn: 'fingers', usVsUk: 'Diferencia en inglés: dedos de la mano son "fingers"; los dedos del pie son exclusivamente "toes".', exampleEn: 'He placed the wedding ring onto her finger.', exampleEs: 'Colocó el anillo de bodas en su dedo.' },
      { id: 'foot', nameEn: 'Foot', nameEs: 'Pie', ipa: '/fʊt/', category: 'body', emoji: '🦶', article: 'a', pluralEn: 'feet (plural irregular)', exampleEn: 'He injured his right foot while playing soccer.', exampleEs: 'Se lastimó el pie derecho jugando al fútbol.' },
      { id: 'heart', nameEn: 'Heart', nameEs: 'Corazón', ipa: '/hɑːrt/', category: 'body', emoji: '❤️', article: 'a', pluralEn: 'hearts', exampleEn: 'Aerobic exercise strengthens cardiac muscle in the human heart.', exampleEs: 'El ejercicio aeróbico fortalece el músculo cardíaco en el corazón.' }
    ]
  },
  {
    id: 'family',
    name: 'Familia y Personas',
    englishTitle: 'Family Members & Relationships',
    iconEmoji: '👨‍👩‍👧‍👦',
    description: 'Parentescos familiares, relaciones interpersonales y términos genealógicos.',
    items: [
      { id: 'father', nameEn: 'Father / Dad', nameEs: 'Padre / Papá', ipa: '/ˈfɑː.ðər/', category: 'family', emoji: '👨', article: 'a', pluralEn: 'fathers', exampleEn: 'My father taught me how to drive a manual car.', exampleEs: 'Mi padre me enseñó a conducir un auto manual.' },
      { id: 'mother', nameEn: 'Mother / Mom (US) / Mum (UK)', nameEs: 'Madre / Mamá', ipa: '/ˈmʌð.ər/', category: 'family', emoji: '👩', article: 'a', pluralEn: 'mothers', usVsUkNote: 'En US se escribe "Mom"; en UK y Australia se escribe "Mum".', exampleEn: 'Her mother holds a master’s degree in clinical psychology.', exampleEs: 'Su madre tiene una maestría en psicología clínica.' },
      { id: 'brother', nameEn: 'Brother', nameEs: 'Hermano', ipa: '/ˈbrʌð.ər/', category: 'family', emoji: '👦', article: 'a', pluralEn: 'brothers', exampleEn: 'His younger brother studies software engineering at university.', exampleEs: 'Su hermano menor estudia ingeniería de software en la universidad.' },
      { id: 'sister', nameEn: 'Sister', nameEs: 'Hermana', ipa: '/ˈsɪs.tər/', category: 'family', emoji: '👧', article: 'a', pluralEn: 'sisters', exampleEn: 'My sister is an architectural designer in Chicago.', exampleEs: 'Mi hermana es diseñadora arquitectónica en Chicago.' },
      { id: 'sibling', nameEn: 'Sibling', nameEs: 'Hermano o hermana (género neutro)', ipa: '/ˈsɪb.lɪŋ/', category: 'family', emoji: '🧑‍🤝‍🧑', article: 'a', pluralEn: 'siblings', exampleEn: 'Do you have any brothers or sisters? Yes, I have two siblings.', exampleEs: '¿Tienes hermanos o hermanas? Sí, tengo dos hermanos.' },
      { id: 'son', nameEn: 'Son', nameEs: 'Hijo', ipa: '/sʌn/', category: 'family', emoji: '👶', article: 'a', pluralEn: 'sons', exampleEn: 'Their eldest son recently graduated with honors from high school.', exampleEs: 'Su hijo mayor se graduó recientemente con honores.' },
      { id: 'daughter', nameEn: 'Daughter', nameEs: 'Hija', ipa: '/ˈdɔː.tər/', category: 'family', emoji: '👧', article: 'a', pluralEn: 'daughters', exampleEn: 'Their daughter won first place in the regional piano contest.', exampleEs: 'Su hija obtuvo el primer lugar en el concurso regional de piano.' },
      { id: 'grandfather', nameEn: 'Grandfather / Grandpa', nameEs: 'Abuelo', ipa: '/ˈɡræn.fɑː.ðər/', category: 'family', emoji: '👴', article: 'a', pluralEn: 'grandfathers', exampleEn: 'My grandfather served as a naval navigator in the Pacific.', exampleEs: 'Mi abuelo sirvió como navegante naval en el Pacífico.' },
      { id: 'grandmother', nameEn: 'Grandmother / Grandma', nameEs: 'Abuela', ipa: '/ˈɡræn.mʌð.ər/', category: 'family', emoji: '👵', article: 'a', pluralEn: 'grandmothers', exampleEn: 'Grandma baked traditional pumpkin pie for Thanksgiving dinner.', exampleEs: 'La abuela horneó pastel tradicional de calabaza.' },
      { id: 'cousin', nameEn: 'Cousin', nameEs: 'Primo / Prima', ipa: '/ˈkʌz.ən/', category: 'family', emoji: '🧑', article: 'a', pluralEn: 'cousins', exampleEn: 'We celebrated the summer holidays with all our cousins.', exampleEs: 'Celebramos las vacaciones de verano con todos nuestros primos.' },
      { id: 'uncle', nameEn: 'Uncle', nameEs: 'Tío', ipa: '/ˈʌŋ.kəl/', category: 'family', emoji: '👨‍🦰', article: 'an', pluralEn: 'uncles', exampleEn: 'My uncle works as an aeronautical engineer in Seattle.', exampleEs: 'Mi tío trabaja como ingeniero aeronáutico en Seattle.' },
      { id: 'aunt', nameEn: 'Aunt', nameEs: 'Tía', ipa: '/ænt/ / /ɑːnt/', category: 'family', emoji: '👩‍🦱', article: 'an', pluralEn: 'aunts', usVsUkNote: 'Pronunciación: en US suele sonar /ænt/ (como "ant"); en UK suena /ɑːnt/.', exampleEn: 'Aunt Clara visited us with homemade strawberry jam.', exampleEs: 'La tía Clara nos visitó con mermelada de fresa casera.' },
      { id: 'nephew', nameEn: 'Nephew', nameEs: 'Sobrino', ipa: '/ˈnef.juː/', category: 'family', emoji: '🧒', article: 'a', pluralEn: 'nephews', exampleEn: 'His nephew plays the cello in the youth philharmonic orchestra.', exampleEs: 'Su sobrino toca el violonchelo en la orquesta filarmónica juvenil.' },
      { id: 'niece', nameEn: 'Niece', nameEs: 'Sobrina', ipa: '/niːs/', category: 'family', emoji: '👧', article: 'a', pluralEn: 'nieces', exampleEn: 'Their niece scored highest in the national mathematics Olympiad.', exampleEs: 'Su sobrina obtuvo el puntaje más alto en la olimpiada de matemáticas.' },
      { id: 'baby', nameEn: 'Baby', nameEs: 'Bebé', ipa: '/ˈbeɪ.bi/', category: 'family', emoji: '👶', article: 'a', pluralEn: 'babies', exampleEn: 'The newborn baby fell asleep peacefully in the cradle.', exampleEs: 'El bebé recién nacido se durmió plácidamente en la cuna.' },
      { id: 'child', nameEn: 'Child', nameEs: 'Niño / Niña', ipa: '/tʃaɪld/', category: 'family', emoji: '🧒', article: 'a', pluralEn: 'children (irregular)', exampleEn: 'Every child deserves access to free quality public education.', exampleEs: 'Todo niño merece acceso a educación pública gratuita y de calidad.' }
    ]
  },
  {
    id: 'nature',
    name: 'Naturaleza, Animales y Clima',
    englishTitle: 'Nature, Wildlife & Weather',
    iconEmoji: '🌿',
    description: 'Fauna, flora, accidentes geográficos y fenómenos meteorológicos.',
    items: [
      { id: 'sun', nameEn: 'Sun', nameEs: 'Sol', ipa: '/sʌn/', category: 'nature', emoji: '☀️', article: 'the', pluralEn: 'suns', exampleEn: 'The sun provides radiant heat and light energy to the solar system.', exampleEs: 'El sol proporciona calor radiante y energía lumínica.' },
      { id: 'moon', nameEn: 'Moon', nameEs: 'Luna', ipa: '/muːn/', category: 'nature', emoji: '🌕', article: 'the', pluralEn: 'moons', exampleEn: 'The full moon illuminated the mountain valley at midnight.', exampleEs: 'La luna llena iluminó el valle montañoso a medianoche.' },
      { id: 'tree', nameEn: 'Tree', nameEs: 'Árbol', ipa: '/triː/', category: 'nature', emoji: '🌳', article: 'a', pluralEn: 'trees', exampleEn: 'An ancient oak tree stood in the middle of the village square.', exampleEs: 'Un roble milenario se alzaba en medio de la plaza del pueblo.' },
      { id: 'rain', nameEn: 'Rain', nameEs: 'Lluvia', ipa: '/reɪn/', category: 'nature', emoji: '🌧️', article: 'some', pluralEn: 'rain (incontable)', exampleEn: 'Heavy rain caused flash flooding along rural riverbanks.', exampleEs: 'Fuertes lluvias provocaron inundaciones repentinas en los ríos.' },
      { id: 'dog', nameEn: 'Dog', nameEs: 'Perro', ipa: '/dɑːɡ/', category: 'nature', emoji: '🐕', article: 'a', pluralEn: 'dogs', exampleEn: 'The loyal golden retriever dog greeted visitors warmly.', exampleEs: 'El leal perro golden retriever saludó cálidamente a los visitantes.' },
      { id: 'cat', nameEn: 'Cat', nameEs: 'Gato', ipa: '/kæt/', category: 'nature', emoji: '🐈', article: 'a', pluralEn: 'cats', exampleEn: 'The domestic cat purred softly while curling on the windowsill.', exampleEs: 'El gato doméstico ronroneaba suavemente sobre el alféizar.' },
      { id: 'horse', nameEn: 'Horse', nameEs: 'Caballo', ipa: '/hɔːrs/', category: 'nature', emoji: '🐎', article: 'a', pluralEn: 'horses', exampleEn: 'A thoroughbred horse galloped across the green meadow.', exampleEs: 'Un caballo purasangre galopó a través de la pradera verde.' },
      { id: 'bird', nameEn: 'Bird', nameEs: 'Pájaro / Ave', ipa: '/bɜːrd/', category: 'nature', emoji: '🐦', article: 'a', pluralEn: 'birds', exampleEn: 'Migratory birds navigate using Earth’s magnetic field.', exampleEs: 'Las aves migratorias navegan utilizando el campo magnético.' },
      { id: 'mountain', nameEn: 'Mountain', nameEs: 'Montaña', ipa: '/ˈmaʊn.tən/', category: 'nature', emoji: '⛰️', article: 'a', pluralEn: 'mountains', exampleEn: 'Snow covered the rugged peaks of the Rocky Mountains.', exampleEs: 'La nieve cubría los picos escarpados de las Montañas Rocosas.' },
      { id: 'river', nameEn: 'River', nameEs: 'Río', ipa: '/ˈrɪv.ər/', category: 'nature', emoji: '🌊', article: 'a', pluralEn: 'rivers', exampleEn: 'Freshwater fish thrive in the crystal-clear mountain river.', exampleEs: 'Los peces de agua dulce prosperan en el río montañoso cristalino.' },
      { id: 'ocean', nameEn: 'Ocean / Sea', nameEs: 'Océano / Mar', ipa: '/ˈoʊ.ʃən/', category: 'nature', emoji: '🌊', article: 'the', pluralEn: 'oceans', exampleEn: 'The vast Pacific Ocean covers more than thirty percent of Earth.', exampleEs: 'El vasto océano Pacífico cubre más del treinta por ciento de la Tierra.' },
      { id: 'forest', nameEn: 'Forest / Woods', nameEs: 'Bosque', ipa: '/ˈfɔːr.ɪst/', category: 'nature', emoji: '🌲', article: 'a', pluralEn: 'forests', exampleEn: 'A dense pine forest stretched across the northern territory.', exampleEs: 'Un denso bosque de pinos se extendía por el territorio norte.' },
      { id: 'flower', nameEn: 'Flower', nameEs: 'Flor', ipa: '/ˈflaʊ.ər/', category: 'nature', emoji: '🌺', article: 'a', pluralEn: 'flowers', exampleEn: 'Wild purple flowers blossomed across the alpine hillside.', exampleEs: 'Flores silvestres púrpuras florecieron en la ladera alpina.' },
      { id: 'cloud', nameEn: 'Cloud', nameEs: 'Nube', ipa: '/klaʊd/', category: 'nature', emoji: '☁️', article: 'a', pluralEn: 'clouds', exampleEn: 'Fluffy white cumulus clouds floated across the azure sky.', exampleEs: 'Esponjosas nubes blancas flotaban en el cielo azul.' },
      { id: 'wind', nameEn: 'Wind', nameEs: 'Viento', ipa: '/wɪnd/', category: 'nature', emoji: '💨', article: 'the', pluralEn: 'winds', exampleEn: 'A brisk autumn wind rustled the dry golden leaves.', exampleEs: 'Un viento otoñal fresco hizo crujir las hojas doradas secas.' },
      { id: 'fire', nameEn: 'Fire', nameEs: 'Fuego', ipa: '/faɪər/', category: 'nature', emoji: '🔥', article: 'some', pluralEn: 'fires', exampleEn: 'Campers gathered closely around the warm campfire at night.', exampleEs: 'Los campistas se reunieron alrededor de la cálida fogata por la noche.' }
    ]
  },
  {
    id: 'calendar',
    name: 'Días, Meses, Estaciones y Horas',
    englishTitle: 'Calendar, Seasons & Time Expressions',
    iconEmoji: '📅',
    description: 'Días de la semana, meses del año, estaciones, horas y cortesía.',
    items: [
      { id: 'monday', nameEn: 'Monday', nameEs: 'Lunes', ipa: '/ˈmʌn.deɪ/', category: 'calendar', emoji: '🗓️', article: 'a', pluralEn: 'Mondays', exampleEn: 'School classes commence promptly on Monday morning.', exampleEs: 'Las clases comienzan puntualmente el lunes por la mañana.' },
      { id: 'tuesday', nameEn: 'Tuesday', nameEs: 'Martes', ipa: '/ˈtuːz.deɪ/', category: 'calendar', emoji: '🗓️', article: 'a', pluralEn: 'Tuesdays', exampleEn: 'The team holds its weekly sprint retrospective on Tuesday.', exampleEs: 'El equipo celebra su retrospectiva semanal el martes.' },
      { id: 'wednesday', nameEn: 'Wednesday', nameEs: 'Miércoles', ipa: '/ˈwenz.deɪ/', category: 'calendar', emoji: '🗓️', article: 'a', pluralEn: 'Wednesdays', exampleEn: 'Wednesday is often informally called "Hump Day" in American offices.', exampleEs: 'El miércoles suele llamarse informalmente "Hump Day" en oficinas de EE. UU.' },
      { id: 'thursday', nameEn: 'Thursday', nameEs: 'Jueves', ipa: '/ˈθɜːrz.deɪ/', category: 'calendar', emoji: '🗓️', article: 'a', pluralEn: 'Thursdays', exampleEn: 'We submitted the semester research project on Thursday afternoon.', exampleEs: 'Entregamos el proyecto de investigación el jueves por la tarde.' },
      { id: 'friday', nameEn: 'Friday', nameEs: 'Viernes', ipa: '/ˈfraɪ.deɪ/', category: 'calendar', emoji: '🎉', article: 'a', pluralEn: 'Fridays', exampleEn: 'Colleagues celebrate the arrival of the weekend on Friday.', exampleEs: 'Los colegas celebran la llegada del fin de semana el viernes.' },
      { id: 'saturday', nameEn: 'Saturday', nameEs: 'Sábado', ipa: '/ˈsæt̬.ɚ.deɪ/', category: 'calendar', emoji: '🏕️', article: 'a', pluralEn: 'Saturdays', exampleEn: 'Many families visit farmers markets and public parks on Saturday.', exampleEs: 'Muchas familias visitan ferias y parques públicos el sábado.' },
      { id: 'sunday', nameEn: 'Sunday', nameEs: 'Domingo', ipa: '/ˈsʌn.deɪ/', category: 'calendar', emoji: '☕', article: 'a', pluralEn: 'Sundays', exampleEn: 'Sunday brunch with freshly baked croissants is a beloved tradition.', exampleEs: 'El desayuno tardío de domingo con cruasanes es una querida tradición.' },
      { id: 'january', nameEn: 'January', nameEs: 'Enero', ipa: '/ˈdʒæn.ju.er.i/', category: 'calendar', emoji: '❄️', article: 'a', pluralEn: 'Januaries', exampleEn: 'January is typically the coldest winter month in New York.', exampleEs: 'Enero es típicamente el mes más frío de invierno en Nueva York.' },
      { id: 'july', nameEn: 'July', nameEs: 'Julio', ipa: '/dʒuˈlaɪ/', category: 'calendar', emoji: '☀️', article: 'a', pluralEn: 'Julys', exampleEn: 'Independence Day in the United States is celebrated on July 4th.', exampleEs: 'El Día de la Independencia en EE. UU. se celebra el 4 de julio.' },
      { id: 'spring', nameEn: 'Spring', nameEs: 'Primavera', ipa: '/sprɪŋ/', category: 'calendar', emoji: '🌸', article: 'some', pluralEn: 'springs', exampleEn: 'Flowers bloom and trees produce fresh leaves in spring.', exampleEs: 'Las flores brotan y los árboles producen hojas frescas en primavera.' },
      { id: 'summer', nameEn: 'Summer', nameEs: 'Verano', ipa: '/ˈsʌm.ər/', category: 'calendar', emoji: '🏖️', article: 'some', pluralEn: 'summers', exampleEn: 'Families travel to the coast during summer vacation.', exampleEs: 'Las familias viajan a la costa durante las vacaciones de verano.' },
      { id: 'autumn', nameEn: 'Fall (US) / Autumn (UK)', nameEs: 'Otoño', ipa: '/fɑːl/ / /ˈɔː.təm/', category: 'calendar', emoji: '🍂', article: 'some', pluralEn: 'autumns', usVsUkNote: 'En US se usa universalmente "Fall"; en UK se prefiere "Autumn".', exampleEn: 'Deciduous leaves change to golden and red hues in autumn.', exampleEs: 'Las hojas caducas cambian a tonos dorados y rojos en otoño.' },
      { id: 'winter', nameEn: 'Winter', nameEs: 'Invierno', ipa: '/ˈwɪn.tər/', category: 'calendar', emoji: '☃️', article: 'some', pluralEn: 'winters', exampleEn: 'Snowstorms frequently disrupt air travel throughout winter.', exampleEs: 'Las tormentas de nieve interrumpen con frecuencia los vuelos en invierno.' },
      { id: 'morning', nameEn: 'Morning', nameEs: 'Mañana', ipa: '/ˈmɔːr.nɪŋ/', category: 'calendar', emoji: '🌅', article: 'the', pluralEn: 'mornings', exampleEn: 'A cup of black coffee is part of my morning routine.', exampleEs: 'Una taza de café negro forma parte de mi rutina matutina.' },
      { id: 'afternoon', nameEn: 'Afternoon', nameEs: 'Tarde', ipa: '/ˌæf.tɚˈnuːn/', category: 'calendar', emoji: '☀️', article: 'the', pluralEn: 'afternoons', exampleEn: 'We scheduled the product demonstration for early afternoon.', exampleEs: 'Programamos la demostración del producto para primera hora de la tarde.' },
      { id: 'night', nameEn: 'Night', nameEs: 'Noche', ipa: '/naɪt/', category: 'calendar', emoji: '🌙', article: 'the', pluralEn: 'nights', exampleEn: 'Astronomers observed distant celestial galaxies throughout the night.', exampleEs: 'Los astrónomos observaron galaxias distantes durante la noche.' }
    ]
  }
];

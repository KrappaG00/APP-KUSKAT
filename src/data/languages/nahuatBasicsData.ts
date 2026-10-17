import { AlphabetLetter, NumberEntry, ColorEntry, ColorIdiom, ObjectCategoryInfo } from './englishBasicsData';

export const NAHUAT_ALPHABET: AlphabetLetter[] = [
  {
    "letter": "A",
    "name": "a",
    "ipa": "/a/",
    "phoneticEs": "a",
    "type": "vowel",
    "sampleWord": "At",
    "sampleWordIpa": "/at/",
    "sampleWordEs": "Agua",
    "phoneticTip": "Vocal abierta. Suena como en español; puede presentarse como vocal larga 'aa'."
  },
  {
    "letter": "Ch",
    "name": "che",
    "ipa": "/tʃ/",
    "phoneticEs": "ch",
    "type": "consonant",
    "sampleWord": "Chiltik",
    "sampleWordIpa": "/ˈtʃil.tik/",
    "sampleWordEs": "Rojo",
    "phoneticTip": "Africada postalveolar sorda, idéntica a la 'ch' de El Salvador."
  },
  {
    "letter": "E",
    "name": "e",
    "ipa": "/e/",
    "phoneticEs": "e",
    "type": "vowel",
    "sampleWord": "Elut",
    "sampleWordIpa": "/ˈe.lut/",
    "sampleWordEs": "Elote / Mazorca tierna",
    "phoneticTip": "Vocal media anterior. Suena clara como en español."
  },
  {
    "letter": "I",
    "name": "i",
    "ipa": "/i/",
    "phoneticEs": "i",
    "type": "vowel",
    "sampleWord": "Istak",
    "sampleWordIpa": "/ˈis.tak/",
    "sampleWordEs": "Blanco",
    "phoneticTip": "Vocal cerrada anterior. Nunca se elide ante consonante."
  },
  {
    "letter": "K",
    "name": "ka",
    "ipa": "/k/",
    "phoneticEs": "k",
    "type": "consonant",
    "sampleWord": "Kalat",
    "sampleWordIpa": "/ˈka.lat/",
    "sampleWordEs": "Casa",
    "phoneticTip": "Oclusiva velar sorda; en la ortografía moderna IRIN reemplaza a la 'c' y 'qu'."
  },
  {
    "letter": "Kw",
    "name": "kwa",
    "ipa": "/kʷ/",
    "phoneticEs": "cu / kw",
    "type": "consonant",
    "sampleWord": "Kwawit",
    "sampleWordIpa": "/ˈkʷa.wit/",
    "sampleWordEs": "Árbol / Leña / Palo",
    "phoneticTip": "Consonante labiovelar sorda unitaria; se pronuncia como 'cu' rápida."
  },
  {
    "letter": "L",
    "name": "le",
    "ipa": "/l/",
    "phoneticEs": "l",
    "type": "consonant",
    "sampleWord": "Lulut",
    "sampleWordIpa": "/ˈlu.lut/",
    "sampleWordEs": "Lombriz",
    "phoneticTip": "Alveolar lateral; nunca se pronuncia como 'll' española."
  },
  {
    "letter": "M",
    "name": "me",
    "ipa": "/m/",
    "phoneticEs": "m",
    "type": "consonant",
    "sampleWord": "Masat",
    "sampleWordIpa": "/ˈma.sat/",
    "sampleWordEs": "Venado",
    "phoneticTip": "Bilabial nasal sonoro, idéntico al español."
  },
  {
    "letter": "N",
    "name": "ne",
    "ipa": "/n/",
    "phoneticEs": "n",
    "type": "consonant",
    "sampleWord": "Nawat",
    "sampleWordIpa": "/ˈna.wat/",
    "sampleWordEs": "Náhuat / Habla clara",
    "phoneticTip": "Alveolar nasal; al final de palabra suele asimilarse ante consonantes."
  },
  {
    "letter": "P",
    "name": "pe",
    "ipa": "/p/",
    "phoneticEs": "p",
    "type": "consonant",
    "sampleWord": "Petat",
    "sampleWordIpa": "/ˈpe.tat/",
    "sampleWordEs": "Petate / Estera de tule",
    "phoneticTip": "Oclusiva bilabial sorda sin aspiración."
  },
  {
    "letter": "S",
    "name": "se",
    "ipa": "/s/",
    "phoneticEs": "s",
    "type": "consonant",
    "sampleWord": "Sinti",
    "sampleWordIpa": "/ˈsin.ti/",
    "sampleWordEs": "Maíz en mazorca",
    "phoneticTip": "Fricativa alveolar sorda, idéntica a la 's' salvadoreña."
  },
  {
    "letter": "Sh",
    "name": "she",
    "ipa": "/ʃ/",
    "phoneticEs": "sh",
    "type": "consonant",
    "sampleWord": "Shuchit",
    "sampleWordIpa": "/ˈʃu.tʃit/",
    "sampleWordEs": "Flor",
    "phoneticTip": "Fricativa postalveolar sorda (como la 'sh' en inglés); nunca suena como 's' ni 'j'."
  },
  {
    "letter": "T",
    "name": "te",
    "ipa": "/t/",
    "phoneticEs": "t",
    "type": "consonant",
    "sampleWord": "Tunal",
    "sampleWordIpa": "/ˈtu.nal/",
    "sampleWordEs": "Sol / Día / Destino",
    "phoneticTip": "Oclusiva dental sorda; en náhuat pipil reemplazó históricamente al 'tl' mexicano."
  },
  {
    "letter": "Tz",
    "name": "tze",
    "ipa": "/ts/",
    "phoneticEs": "tz",
    "type": "consonant",
    "sampleWord": "Tzuntik",
    "sampleWordIpa": "/ˈtsun.tik/",
    "sampleWordEs": "Cabello / Cabeza",
    "phoneticTip": "Africada alveolar sorda; suena como 'ts' unida (como en 'tsunami')."
  },
  {
    "letter": "U",
    "name": "u",
    "ipa": "/u/ / /o/",
    "phoneticEs": "u / o",
    "type": "vowel",
    "sampleWord": "Ume",
    "sampleWordIpa": "/ˈu.me/",
    "sampleWordEs": "Dos",
    "phoneticTip": "Vocal posterior; fonológicamente puede sonar entre 'u' y 'o'."
  },
  {
    "letter": "W",
    "name": "we",
    "ipa": "/w/",
    "phoneticEs": "w / hu",
    "type": "consonant",
    "sampleWord": "Wey",
    "sampleWordIpa": "/weɪ/",
    "sampleWordEs": "Grande",
    "phoneticTip": "Aproximante labiovelar; se pronuncia como la 'hu' de 'hueso'."
  },
  {
    "letter": "Y",
    "name": "ye",
    "ipa": "/j/",
    "phoneticEs": "y",
    "type": "consonant",
    "sampleWord": "Yejyek",
    "sampleWordIpa": "/ˈjeʝ.jek/",
    "sampleWordEs": "Bueno / Bonito",
    "phoneticTip": "Aproximante palatal; suena suave como en 'yegua'."
  },
  {
    "letter": "H",
    "name": "he (saltillo)",
    "ipa": "/h/ / /ʔ/",
    "phoneticEs": "h aspirada",
    "type": "consonant",
    "sampleWord": "Tijtit",
    "sampleWordIpa": "/ˈtih.tit/",
    "sampleWordEs": "Vientres / Barrigas",
    "phoneticTip": "Representa el saltillo o suave aspiración glotal que separa sílabas y marca plurales."
  }
];

export const NAHUAT_NUMBERS: NumberEntry[] = [
  {
    "number": 0,
    "cardinal": "tatka / amunte",
    "ordinal": "inic tatka",
    "ordinalAbbr": "0º",
    "pronunciationEs": "tát-ka",
    "note": "Concepto de nada o vacío"
  },
  {
    "number": 1,
    "cardinal": "se",
    "ordinal": "inic se",
    "ordinalAbbr": "1º",
    "pronunciationEs": "se",
    "note": "Unidad fundamental"
  },
  {
    "number": 2,
    "cardinal": "ume",
    "ordinal": "inic ume",
    "ordinalAbbr": "2º",
    "pronunciationEs": "ú-me",
    "note": "Dualidad sagrada"
  },
  {
    "number": 3,
    "cardinal": "yey",
    "ordinal": "inic yey",
    "ordinalAbbr": "3º",
    "pronunciationEs": "yey",
    "note": "Las tres piedras del tlekwil (fogón)"
  },
  {
    "number": 4,
    "cardinal": "nawi",
    "ordinal": "inic nawi",
    "ordinalAbbr": "4º",
    "pronunciationEs": "ná-wi",
    "note": "Los cuatro rumbos cósmicos"
  },
  {
    "number": 5,
    "cardinal": "makwil",
    "ordinal": "inic makwil",
    "ordinalAbbr": "5º",
    "pronunciationEs": "mák-wil",
    "note": "Una mano completa (mey)"
  },
  {
    "number": 6,
    "cardinal": "chikwasen",
    "ordinal": "inic chikwasen",
    "ordinalAbbr": "6º",
    "pronunciationEs": "chik-wá-sen",
    "note": "5 + 1"
  },
  {
    "number": 7,
    "cardinal": "chikume",
    "ordinal": "inic chikume",
    "ordinalAbbr": "7º",
    "pronunciationEs": "chi-kú-me",
    "note": "5 + 2"
  },
  {
    "number": 8,
    "cardinal": "chikwey",
    "ordinal": "inic chikwey",
    "ordinalAbbr": "8º",
    "pronunciationEs": "chik-wéy",
    "note": "5 + 3"
  },
  {
    "number": 9,
    "cardinal": "chiknawi",
    "ordinal": "inic chiknawi",
    "ordinalAbbr": "9º",
    "pronunciationEs": "chik-ná-wi",
    "note": "5 + 4"
  },
  {
    "number": 10,
    "cardinal": "majtakti",
    "ordinal": "inic majtakti",
    "ordinalAbbr": "10º",
    "pronunciationEs": "maj-ták-ti",
    "note": "Las dos manos completas"
  },
  {
    "number": 11,
    "cardinal": "majtakti-se",
    "ordinal": "inic majtakti-se",
    "ordinalAbbr": "11º",
    "pronunciationEs": "maj-ták-ti se",
    "note": "10 + 1"
  },
  {
    "number": 12,
    "cardinal": "majtakti-ume",
    "ordinal": "inic majtakti-ume",
    "ordinalAbbr": "12º",
    "pronunciationEs": "maj-ták-ti ú-me",
    "note": "10 + 2"
  },
  {
    "number": 15,
    "cardinal": "kashtul",
    "ordinal": "inic kashtul",
    "ordinalAbbr": "15º",
    "pronunciationEs": "kash-túl",
    "note": "Tres grupos de cinco"
  },
  {
    "number": 16,
    "cardinal": "kashtul-se",
    "ordinal": "inic kashtul-se",
    "ordinalAbbr": "16º",
    "pronunciationEs": "kash-túl se",
    "note": "15 + 1"
  },
  {
    "number": 20,
    "cardinal": "sempuwal",
    "ordinal": "inic sempuwal",
    "ordinalAbbr": "20º",
    "pronunciationEs": "sem-pú-wal",
    "note": "Una cuenta completa (dedos de manos y pies)"
  },
  {
    "number": 40,
    "cardinal": "umpuwal",
    "ordinal": "inic umpuwal",
    "ordinalAbbr": "40º",
    "pronunciationEs": "um-pú-wal",
    "note": "2 x 20"
  },
  {
    "number": 60,
    "cardinal": "yeypuwal",
    "ordinal": "inic yeypuwal",
    "ordinalAbbr": "60º",
    "pronunciationEs": "yey-pú-wal",
    "note": "3 x 20"
  },
  {
    "number": 80,
    "cardinal": "nawipuwal",
    "ordinal": "inic nawipuwal",
    "ordinalAbbr": "80º",
    "pronunciationEs": "na-wi-pú-wal",
    "note": "4 x 20"
  },
  {
    "number": 100,
    "cardinal": "makwilpuwal",
    "ordinal": "inic makwilpuwal",
    "ordinalAbbr": "100º",
    "pronunciationEs": "mak-wil-pú-wal",
    "note": "5 x 20 (un ciento tradicional)"
  },
  {
    "number": 400,
    "cardinal": "centzuntli",
    "ordinal": "inic centzuntli",
    "ordinalAbbr": "400º",
    "pronunciationEs": "sen-tsún-tli",
    "note": "20 x 20 (cifra astronómica y militar sagrada)"
  }
];

export const NAHUAT_COLORS: ColorEntry[] = [
  {
    "id": "c1",
    "nameEn": "Istak",
    "nameEs": "Blanco",
    "hex": "#FFFFFF",
    "category": "primary",
    "sampleSentenceEn": "Istak ne tiupan pal Witzapan.",
    "sampleSentenceEs": "Blanca es la iglesia de Santo Domingo de Guzmán."
  },
  {
    "id": "c2",
    "nameEn": "Tiltik",
    "nameEs": "Negro",
    "hex": "#1A1A1A",
    "category": "primary",
    "sampleSentenceEn": "Tiltik ne comal keman kichiwa tortilla.",
    "sampleSentenceEs": "Negro es el comal cuando cuece tortillas."
  },
  {
    "id": "c3",
    "nameEn": "Chiltik",
    "nameEs": "Rojo",
    "hex": "#DC2626",
    "category": "primary",
    "sampleSentenceEn": "Chiltik ne tamal ka chil.",
    "sampleSentenceEs": "Rojo es el tamal con chile."
  },
  {
    "id": "c4",
    "nameEn": "Shushuknak",
    "nameEs": "Verde / Azul",
    "hex": "#16A34A",
    "category": "secondary",
    "sampleSentenceEn": "Shushuknak ne iswat pal ne kuawit.",
    "sampleSentenceEs": "Verde es la hoja del árbol en la milpa."
  },
  {
    "id": "c5",
    "nameEn": "Tultik / Kostik",
    "nameEs": "Amarillo",
    "hex": "#EAB308",
    "category": "primary",
    "sampleSentenceEn": "Tultik ne sinti keman ya wakik.",
    "sampleSentenceEs": "Amarillo es el maíz cuando ya secó."
  },
  {
    "id": "c6",
    "nameEn": "Kamawak / Kamatik",
    "nameEs": "Morado / Púrpura",
    "hex": "#9333EA",
    "category": "secondary",
    "sampleSentenceEn": "Kamawak ne xuchit tik ne tepet.",
    "sampleSentenceEs": "Morada es la flor silvestre en el cerro."
  },
  {
    "id": "c7",
    "nameEn": "Chocolatik",
    "nameEs": "Café / Castaño",
    "hex": "#78350F",
    "category": "neutral",
    "sampleSentenceEn": "Chocolatik ne taltikpak pal tutukay.",
    "sampleSentenceEs": "Color café es la tierra fértil de nuestra siembra."
  },
  {
    "id": "c8",
    "nameEn": "Nexik",
    "nameEs": "Gris / Color ceniza",
    "hex": "#6B7280",
    "category": "neutral",
    "sampleSentenceEn": "Nexik ne nexesti tik ne tlekwil.",
    "sampleSentenceEs": "Gris es la ceniza en el fogón de leña."
  }
];

export const NAHUAT_COLOR_IDIOMS: ColorIdiom[] = [
  {
    "idiom": "I-yul istak",
    "literalTranslation": "Su corazón es blanco",
    "realMeaning": "Persona de intenciones nobles, honesta y transparente",
    "exampleEn": "Ne nawataketzani kipiya i-yul istak.",
    "exampleEs": "La abuela hablante tiene un corazón noble y limpio.",
    "originNote": "En la cosmovisión pipil, el blanco representa la claridad y la pureza."
  },
  {
    "idiom": "I-yul chiltik",
    "literalTranslation": "Su corazón es rojo",
    "realMeaning": "Persona valiente, llena de vigor y energía vital",
    "exampleEn": "Ne tekitini kipiya i-yul chiltik.",
    "exampleEs": "El trabajador es valiente y decidido.",
    "originNote": "El rojo simboliza la sangre, la fuerza de Tonatiuh (el sol) y el fuego interior."
  },
  {
    "idiom": "Tiltik tunal",
    "literalTranslation": "Día negro",
    "realMeaning": "Jornada de luto, calamidad o gran tristeza comunitaria",
    "exampleEn": "Katka se tiltik tunal keman tesu taketzaluk.",
    "exampleEs": "Fue un tiempo oscuro cuando se prohibió hablar náhuat.",
    "originNote": "Alude a momentos históricos trágicos de El Salvador."
  }
];

export const NAHUAT_OBJECT_CATEGORIES: ObjectCategoryInfo[] = [
  {
    "id": "hogar_pipil",
    "name": "El Hogar y Utensilios Campesinos",
    "englishTitle": "Pipil Rural Home & Tools",
    "iconEmoji": "🏠",
    "description": "Instrumentos tradicionales de cocina, barro y descanso en el campo salvadoreño.",
    "items": [
      {
        "id": "comal",
        "nameEn": "Comal",
        "nameEs": "Comal de barro cocido",
        "ipa": "/koˈmal/",
        "category": "hogar_pipil",
        "emoji": "🍳",
        "article": "a",
        "pluralEn": "comalmet",
        "exampleEn": "Ne comal nemi pak ne tlekwil.",
        "exampleEs": "El comal está sobre el fogón de leña."
      },
      {
        "id": "metat",
        "nameEn": "Metat",
        "nameEs": "Metate / Piedra de moler",
        "ipa": "/ˈme.tat/",
        "category": "hogar_pipil",
        "emoji": "🪨",
        "article": "a",
        "pluralEn": "metatmet",
        "exampleEn": "Tik ne metat kitesi ne sinti.",
        "exampleEs": "En el metate muele el maíz para la masa."
      },
      {
        "id": "petat",
        "nameEn": "Petat",
        "nameEs": "Petate / Estera de tule",
        "ipa": "/ˈpe.tat/",
        "category": "hogar_pipil",
        "emoji": "🪵",
        "article": "a",
        "pluralEn": "petatmet",
        "exampleEn": "Kuchi tik ne yejyek petat.",
        "exampleEs": "Duerme sobre el petate de tule fino."
      },
      {
        "id": "apas",
        "nameEn": "Apas",
        "nameEs": "Apaste / Olla grande de barro",
        "ipa": "/ˈa.pas/",
        "category": "hogar_pipil",
        "emoji": "🏺",
        "article": "an",
        "pluralEn": "apasmet",
        "exampleEn": "Ne apas kipiya at pal takwa.",
        "exampleEs": "El apaste tiene agua fresca para el consumo."
      },
      {
        "id": "tecomat",
        "nameEn": "Tecomat",
        "nameEs": "Tecomate / Cantimplora de calabaza",
        "ipa": "/teˈko.mat/",
        "category": "hogar_pipil",
        "emoji": "🍶",
        "article": "a",
        "pluralEn": "tecomatmet",
        "exampleEn": "Kiwika at tik ne tecomat keman yawi tik milpa.",
        "exampleEs": "Lleva agua en el tecomate cuando va a la milpa."
      },
      {
        "id": "guacal",
        "nameEn": "Wakal / Kalat",
        "nameEs": "Huacal de morro",
        "ipa": "/ˈwa.kal/",
        "category": "hogar_pipil",
        "emoji": "🥣",
        "article": "a",
        "pluralEn": "wakalmet",
        "exampleEn": "Shi-k-maka at tik ne wakal.",
        "exampleEs": "Dame agua en el huacal de morro."
      },
      {
        "id": "tlekwil",
        "nameEn": "Tlekwil",
        "nameEs": "Tlecuil / Fogón de leña tradicional",
        "ipa": "/tleˈkʷil/",
        "category": "hogar_pipil",
        "emoji": "🔥",
        "article": "a",
        "pluralEn": "tlekwilmet",
        "exampleEn": "Ne tlekwil kipiya yey tet.",
        "exampleEs": "El tlecuil tiene tres piedras sagradas."
      },
      {
        "id": "chikiwit",
        "nameEn": "Chikiwit",
        "nameEs": "Chiquigüite / Canasto de caña",
        "ipa": "/tʃiˈki.wit/",
        "category": "hogar_pipil",
        "emoji": "🧺",
        "article": "a",
        "pluralEn": "chikiwitmet",
        "exampleEn": "Kiwika ne tortillas tik ne chikiwit.",
        "exampleEs": "Lleva las tortillas en el chiquigüite."
      }
    ]
  },
  {
    "id": "milpa_pipil",
    "name": "La Milpa y el Maíz Sagrado",
    "englishTitle": "The Sacred Cornfield & Harvest",
    "iconEmoji": "🌽",
    "description": "Términos agrícolas ancestrales de la siembra salvadoreña.",
    "items": [
      {
        "id": "sinti",
        "nameEn": "Sinti",
        "nameEs": "Maíz en mazorca seca",
        "ipa": "/ˈsin.ti/",
        "category": "milpa_pipil",
        "emoji": "🌽",
        "article": "some",
        "pluralEn": "sintimet",
        "exampleEn": "Ne sinti tultik kichiwa wey masa.",
        "exampleEs": "El maíz amarillo hace buena masa."
      },
      {
        "id": "elut",
        "nameEn": "Elut",
        "nameEs": "Elote / Mazorca tierna",
        "ipa": "/ˈe.lut/",
        "category": "milpa_pipil",
        "emoji": "🌽",
        "article": "an",
        "pluralEn": "elutmet",
        "exampleEn": "Tiktukuat elut tik ne atwit.",
        "exampleEs": "Comemos elotes en tiempo de lluvias."
      },
      {
        "id": "tamal",
        "nameEn": "Tamal",
        "nameEs": "Tamal tradicional salvadoreño",
        "ipa": "/taˈmal/",
        "category": "milpa_pipil",
        "emoji": "🫔",
        "article": "a",
        "pluralEn": "tamalmet",
        "exampleEn": "Ne tamal pisque yejyek ka chil.",
        "exampleEs": "El tamal pisque es sabroso con chile."
      },
      {
        "id": "atul",
        "nameEn": "Atul",
        "nameEs": "Atol / Bebida espesa de maíz",
        "ipa": "/aˈtul/",
        "category": "milpa_pipil",
        "emoji": "🍵",
        "article": "some",
        "pluralEn": "atulmet",
        "exampleEn": "Atul shuco ka frijoles negros.",
        "exampleEs": "Atol chuco servido en huacal con frijoles."
      },
      {
        "id": "milpa",
        "nameEn": "Milpa / Milli",
        "nameEs": "Milpa / Terreno cultivado",
        "ipa": "/ˈmil.pa/",
        "category": "milpa_pipil",
        "emoji": "🌱",
        "article": "a",
        "pluralEn": "milpamet",
        "exampleEn": "Nu-tatan tekiti tik ne wey milpa.",
        "exampleEs": "Mi padre trabaja en la gran milpa."
      },
      {
        "id": "chil",
        "nameEn": "Chil",
        "nameEs": "Chile verde o picante",
        "ipa": "/tʃil/",
        "category": "milpa_pipil",
        "emoji": "🌶️",
        "article": "a",
        "pluralEn": "chilmet",
        "exampleEn": "Ne chil kukuk pero yejyek.",
        "exampleEs": "El chile pica pero es muy sabroso."
      },
      {
        "id": "ayut",
        "nameEn": "Ayut",
        "nameEs": "Ayote / Calabaza salvadoreña",
        "ipa": "/ˈa.jut/",
        "category": "milpa_pipil",
        "emoji": "🎃",
        "article": "an",
        "pluralEn": "ayutmet",
        "exampleEn": "Ayut en miel para las fiestas.",
        "exampleEs": "Ayote dulce cocido con panela."
      },
      {
        "id": "frijol",
        "nameEn": "Et",
        "nameEs": "Frijol",
        "ipa": "/et/",
        "category": "milpa_pipil",
        "emoji": "🫘",
        "article": "some",
        "pluralEn": "etmet",
        "exampleEn": "Ne et tiltik kipalewia tutakwal.",
        "exampleEs": "El frijol negro sustenta nuestra alimentación."
      }
    ]
  }
];

export function numberToNahuatWords(n: number): string {
  if (n === 0) return 'tatka / amunte';
  if (n === 1) return 'se';
  if (n === 2) return 'ume';
  if (n === 3) return 'yey';
  if (n === 4) return 'nawi';
  if (n === 5) return 'makwil';
  if (n === 6) return 'chikwasen';
  if (n === 7) return 'chikume';
  if (n === 8) return 'chikwey';
  if (n === 9) return 'chiknawi';
  if (n === 10) return 'majtakti';
  if (n < 15) return `majtakti-${numberToNahuatWords(n - 10)}`;
  if (n === 15) return 'kashtul';
  if (n < 20) return `kashtul-${numberToNahuatWords(n - 15)}`;
  if (n === 20) return 'sempuwal';
  if (n < 40) return `sempuwal wan ${numberToNahuatWords(n - 20)}`;
  if (n === 40) return 'umpuwal';
  if (n < 60) return `umpuwal wan ${numberToNahuatWords(n - 40)}`;
  if (n === 60) return 'yeypuwal';
  if (n < 80) return `yeypuwal wan ${numberToNahuatWords(n - 60)}`;
  if (n === 80) return 'nawipuwal';
  if (n < 100) return `nawipuwal wan ${numberToNahuatWords(n - 80)}`;
  if (n === 100) return 'makwilpuwal';
  if (n === 400) return 'centzuntli';
  return `cuenta vigesimal (${n})`;
}

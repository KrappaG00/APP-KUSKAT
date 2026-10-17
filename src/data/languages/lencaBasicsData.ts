import { AlphabetLetter, NumberEntry, ColorEntry, ColorIdiom, ObjectCategoryInfo } from './englishBasicsData';

export const LENCA_ALPHABET: AlphabetLetter[] = [
  {
    "letter": "A",
    "name": "a",
    "ipa": "/a/",
    "phoneticEs": "a",
    "type": "vowel",
    "sampleWord": "Am",
    "sampleWordIpa": "/am/",
    "sampleWordEs": "Comer / Beber",
    "phoneticTip": "Vocal abierta anterior."
  },
  {
    "letter": "E",
    "name": "e",
    "ipa": "/e/",
    "phoneticEs": "e",
    "type": "vowel",
    "sampleWord": "Eta",
    "sampleWordIpa": "/ˈe.ta/",
    "sampleWordEs": "Uno (1)",
    "phoneticTip": "Vocal media anterior."
  },
  {
    "letter": "I",
    "name": "i",
    "ipa": "/i/",
    "phoneticEs": "i",
    "type": "vowel",
    "sampleWord": "Ita",
    "sampleWordIpa": "/ˈi.ta/",
    "sampleWordEs": "Ver / Mirar",
    "phoneticTip": "Vocal cerrada anterior."
  },
  {
    "letter": "O",
    "name": "o",
    "ipa": "/o/",
    "phoneticEs": "o",
    "type": "vowel",
    "sampleWord": "Olla",
    "sampleWordIpa": "/ˈo.ja/",
    "sampleWordEs": "Olla de barro cocido",
    "phoneticTip": "Vocal media posterior."
  },
  {
    "letter": "U",
    "name": "u",
    "ipa": "/u/",
    "phoneticEs": "u",
    "type": "vowel",
    "sampleWord": "U",
    "sampleWordIpa": "/u/",
    "sampleWordEs": "Yo (pronombre)",
    "phoneticTip": "Vocal cerrada posterior."
  },
  {
    "letter": "P",
    "name": "pe",
    "ipa": "/p/",
    "phoneticEs": "p",
    "type": "consonant",
    "sampleWord": "Pe",
    "sampleWordIpa": "/pe/",
    "sampleWordEs": "Dos (2)",
    "phoneticTip": "Oclusiva bilabial sorda."
  },
  {
    "letter": "T",
    "name": "te",
    "ipa": "/t/",
    "phoneticEs": "t",
    "type": "consonant",
    "sampleWord": "Tisin",
    "sampleWordIpa": "/ˈti.sin/",
    "sampleWordEs": "Fuego / Fogón",
    "phoneticTip": "Oclusiva alveolar sorda."
  },
  {
    "letter": "K",
    "name": "ka",
    "ipa": "/k/",
    "phoneticEs": "k",
    "type": "consonant",
    "sampleWord": "Kualkat",
    "sampleWordIpa": "/ˈkʷal.kat/",
    "sampleWordEs": "Bueno / Hermoso",
    "phoneticTip": "Oclusiva velar sorda."
  },
  {
    "letter": "S",
    "name": "se",
    "ipa": "/s/",
    "phoneticEs": "s",
    "type": "consonant",
    "sampleWord": "Seran",
    "sampleWordIpa": "/ˈse.ran/",
    "sampleWordEs": "Negro (barro)",
    "phoneticTip": "Fricativa alveolar sorda."
  },
  {
    "letter": "Sh",
    "name": "she",
    "ipa": "/ʃ/",
    "phoneticEs": "sh",
    "type": "consonant",
    "sampleWord": "Shi-pel",
    "sampleWordIpa": "/ʃi.pel/",
    "sampleWordEs": "¡Trabaja!",
    "phoneticTip": "Fricativa postalveolar sorda."
  },
  {
    "letter": "L",
    "name": "le",
    "ipa": "/l/",
    "phoneticEs": "l",
    "type": "consonant",
    "sampleWord": "Li",
    "sampleWordIpa": "/li/",
    "sampleWordEs": "Agua / Río",
    "phoneticTip": "Lateral alveolar sonora."
  },
  {
    "letter": "M",
    "name": "me",
    "ipa": "/m/",
    "phoneticEs": "m",
    "type": "consonant",
    "sampleWord": "Masun",
    "sampleWordIpa": "/ˈma.sun/",
    "sampleWordEs": "Casa / Choza",
    "phoneticTip": "Nasal bilabial sonora."
  },
  {
    "letter": "N",
    "name": "ne",
    "ipa": "/n/",
    "phoneticEs": "n",
    "type": "consonant",
    "sampleWord": "Nana",
    "sampleWordIpa": "/ˈna.na/",
    "sampleWordEs": "Madre / Mamá",
    "phoneticTip": "Nasal alveolar sonora."
  }
];

export const LENCA_NUMBERS: NumberEntry[] = [
  {
    "number": 0,
    "cardinal": "tatka",
    "ordinal": "inic tatka",
    "ordinalAbbr": "0º",
    "pronunciationEs": "tát-ka",
    "note": "Nada"
  },
  {
    "number": 1,
    "cardinal": "eta / ita",
    "ordinal": "inic eta",
    "ordinalAbbr": "1º",
    "pronunciationEs": "é-ta",
    "note": "Uno"
  },
  {
    "number": 2,
    "cardinal": "pe",
    "ordinal": "inic pe",
    "ordinalAbbr": "2º",
    "pronunciationEs": "pe",
    "note": "Dos"
  },
  {
    "number": 3,
    "cardinal": "lagua",
    "ordinal": "inic lagua",
    "ordinalAbbr": "3º",
    "pronunciationEs": "lá-gwa",
    "note": "Tres"
  },
  {
    "number": 4,
    "cardinal": "eria",
    "ordinal": "inic eria",
    "ordinalAbbr": "4º",
    "pronunciationEs": "é-rya",
    "note": "Cuatro"
  },
  {
    "number": 5,
    "cardinal": "saj / tsaj",
    "ordinal": "inic saj",
    "ordinalAbbr": "5º",
    "pronunciationEs": "saj",
    "note": "Cinco (mano)"
  },
  {
    "number": 6,
    "cardinal": "itisaj",
    "ordinal": "inic itisaj",
    "ordinalAbbr": "6º",
    "pronunciationEs": "i-ti-sáj",
    "note": "5 + 1"
  },
  {
    "number": 7,
    "cardinal": "pesaj",
    "ordinal": "inic pesaj",
    "ordinalAbbr": "7º",
    "pronunciationEs": "pe-sáj",
    "note": "5 + 2"
  },
  {
    "number": 8,
    "cardinal": "laguasaj",
    "ordinal": "inic laguasaj",
    "ordinalAbbr": "8º",
    "pronunciationEs": "la-gwa-sáj",
    "note": "5 + 3"
  },
  {
    "number": 9,
    "cardinal": "eriasaj",
    "ordinal": "inic eriasaj",
    "ordinalAbbr": "9º",
    "pronunciationEs": "e-rya-sáj",
    "note": "5 + 4"
  },
  {
    "number": 10,
    "cardinal": "tishi",
    "ordinal": "inic tishi",
    "ordinalAbbr": "10º",
    "pronunciationEs": "tí-ʃi",
    "note": "Diez"
  },
  {
    "number": 20,
    "cardinal": "sem-puwal",
    "ordinal": "inic sempuwal",
    "ordinalAbbr": "20º",
    "pronunciationEs": "sem-pú-wal",
    "note": "Veintena"
  }
];

export const LENCA_COLORS: ColorEntry[] = [
  {
    "id": "l1",
    "nameEn": "Tuku",
    "nameEs": "Blanco",
    "hex": "#FFFFFF",
    "category": "primary",
    "sampleSentenceEn": "Tuku ne manantial pal li.",
    "sampleSentenceEs": "Blanco y transparente es el manantial de agua pura."
  },
  {
    "id": "l2",
    "nameEn": "Seran",
    "nameEs": "Negro",
    "hex": "#111827",
    "category": "primary",
    "sampleSentenceEn": "Seran ne comal pal Guatajiagua.",
    "sampleSentenceEs": "Negro es el comal de barro de Guatajiagua."
  },
  {
    "id": "l3",
    "nameEn": "Chili",
    "nameEs": "Rojo",
    "hex": "#EF4444",
    "category": "primary",
    "sampleSentenceEn": "Chili ne tisin tik ne horno.",
    "sampleSentenceEs": "Rojo es el fuego vivo en el horno alfarero."
  },
  {
    "id": "l4",
    "nameEn": "Susun",
    "nameEs": "Verde",
    "hex": "#22C55E",
    "category": "secondary",
    "sampleSentenceEn": "Susun ne tepet Cacahuatique.",
    "sampleSentenceEs": "Verde es el cerro Cacahuatique en invierno."
  },
  {
    "id": "l5",
    "nameEn": "Yari",
    "nameEs": "Amarillo",
    "hex": "#FACC15",
    "category": "primary",
    "sampleSentenceEn": "Yari ne sinti pal ne milpa.",
    "sampleSentenceEs": "Amarillo es el maíz maduro de la milpa."
  }
];

export function numberToLencaWords(n: number): string {
  if (n === 0) return 'tatka';
  if (n === 1) return 'eta';
  if (n === 2) return 'pe';
  if (n === 3) return 'lagua';
  if (n === 4) return 'eria';
  if (n === 5) return 'saj';
  if (n === 6) return 'itisaj';
  if (n === 7) return 'pesaj';
  if (n === 8) return 'laguasaj';
  if (n === 9) return 'eriasaj';
  if (n === 10) return 'tishi';
  if (n < 20) return `tishi-${numberToLencaWords(n - 10)}`;
  if (n === 20) return 'sem-puwal';
  return `cuenta lenca (${n})`;
}

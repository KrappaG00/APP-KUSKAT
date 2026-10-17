import { AlphabetLetter, NumberEntry, ColorEntry, ColorIdiom, ObjectCategoryInfo } from './englishBasicsData';

export const KAKAWIRA_ALPHABET: AlphabetLetter[] = [
  {
    "letter": "A",
    "name": "a",
    "ipa": "/a/",
    "phoneticEs": "a",
    "type": "vowel",
    "sampleWord": "Asun",
    "sampleWordIpa": "/ˈa.sun/",
    "sampleWordEs": "Casa / Hogar",
    "phoneticTip": "Vocal abierta."
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
    "letter": "U",
    "name": "u",
    "ipa": "/u/",
    "phoneticEs": "u",
    "type": "vowel",
    "sampleWord": "U",
    "sampleWordIpa": "/u/",
    "sampleWordEs": "Río / Corriente",
    "phoneticTip": "Vocal cerrada posterior."
  },
  {
    "letter": "E",
    "name": "e",
    "ipa": "/e/",
    "phoneticEs": "e",
    "type": "vowel",
    "sampleWord": "El",
    "sampleWordIpa": "/el/",
    "sampleWordEs": "Sol / Luz",
    "phoneticTip": "Vocal media."
  },
  {
    "letter": "O",
    "name": "o",
    "ipa": "/o/",
    "phoneticEs": "o",
    "type": "vowel",
    "sampleWord": "Ocot",
    "sampleWordIpa": "/ˈo.kot/",
    "sampleWordEs": "Pino / Ocote",
    "phoneticTip": "Vocal media posterior."
  },
  {
    "letter": "P",
    "name": "pe",
    "ipa": "/p/",
    "phoneticEs": "p",
    "type": "consonant",
    "sampleWord": "Puk",
    "sampleWordIpa": "/puk/",
    "sampleWordEs": "Rojo",
    "phoneticTip": "Bilabial sorda."
  },
  {
    "letter": "T",
    "name": "te",
    "ipa": "/t/",
    "phoneticEs": "t",
    "type": "consonant",
    "sampleWord": "Torola",
    "sampleWordIpa": "/toˈro.la/",
    "sampleWordEs": "Río Torola",
    "phoneticTip": "Alveolar dental."
  },
  {
    "letter": "K",
    "name": "ka",
    "ipa": "/k/",
    "phoneticEs": "k",
    "type": "consonant",
    "sampleWord": "Kakawira",
    "sampleWordIpa": "/ka.kaˈwi.ra/",
    "sampleWordEs": "Pueblo Kakawira",
    "phoneticTip": "Oclusiva velar sorda."
  },
  {
    "letter": "B",
    "name": "be",
    "ipa": "/b/",
    "phoneticEs": "b",
    "type": "consonant",
    "sampleWord": "Burbur",
    "sampleWordIpa": "/ˈbur.bur/",
    "sampleWordEs": "Blanco",
    "phoneticTip": "Bilabial sonora."
  },
  {
    "letter": "D",
    "name": "de",
    "ipa": "/d/",
    "phoneticEs": "d",
    "type": "consonant",
    "sampleWord": "Danza",
    "sampleWordIpa": "/ˈdan.sa/",
    "sampleWordEs": "Danza de Emplumados",
    "phoneticTip": "Dental sonora."
  },
  {
    "letter": "S",
    "name": "se",
    "ipa": "/s/",
    "phoneticEs": "s",
    "type": "consonant",
    "sampleWord": "Say",
    "sampleWordIpa": "/saɪ/",
    "sampleWordEs": "Cinco (5)",
    "phoneticTip": "Alveolar fricativa."
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
    "phoneticTip": "Postalveolar sorda."
  },
  {
    "letter": "M",
    "name": "me",
    "ipa": "/m/",
    "phoneticEs": "m",
    "type": "consonant",
    "sampleWord": "Ma",
    "sampleWordIpa": "/ma/",
    "sampleWordEs": "Madre / Mamá",
    "phoneticTip": "Bilabial nasal."
  },
  {
    "letter": "N",
    "name": "ne",
    "ipa": "/n/",
    "phoneticEs": "n",
    "type": "consonant",
    "sampleWord": "Nana",
    "sampleWordIpa": "/ˈna.na/",
    "sampleWordEs": "Abuela",
    "phoneticTip": "Alveolar nasal."
  },
  {
    "letter": "W",
    "name": "we",
    "ipa": "/w/",
    "phoneticEs": "w",
    "type": "consonant",
    "sampleWord": "Wapa",
    "sampleWordIpa": "/ˈwa.pa/",
    "sampleWordEs": "Fuego / Llama",
    "phoneticTip": "Labiovelar aproximante."
  },
  {
    "letter": "Y",
    "name": "ye",
    "ipa": "/j/",
    "phoneticEs": "y",
    "type": "consonant",
    "sampleWord": "Yau",
    "sampleWordIpa": "/jaʊ/",
    "sampleWordEs": "Padre / Señor",
    "phoneticTip": "Palatal aproximante."
  }
];

export const KAKAWIRA_NUMBERS: NumberEntry[] = [
  {
    "number": 0,
    "cardinal": "tatka",
    "ordinal": "inic tatka",
    "ordinalAbbr": "0º",
    "pronunciationEs": "tát-ka",
    "note": "Vacío"
  },
  {
    "number": 1,
    "cardinal": "ai",
    "ordinal": "inic ai",
    "ordinalAbbr": "1º",
    "pronunciationEs": "ay",
    "note": "Uno"
  },
  {
    "number": 2,
    "cardinal": "buru",
    "ordinal": "inic buru",
    "ordinalAbbr": "2º",
    "pronunciationEs": "bú-ru",
    "note": "Dos"
  },
  {
    "number": 3,
    "cardinal": "wasi",
    "ordinal": "inic wasi",
    "ordinalAbbr": "3º",
    "pronunciationEs": "wá-si",
    "note": "Tres"
  },
  {
    "number": 4,
    "cardinal": "adamka",
    "ordinal": "inic adamka",
    "ordinalAbbr": "4º",
    "pronunciationEs": "a-dám-ka",
    "note": "Cuatro"
  },
  {
    "number": 5,
    "cardinal": "say",
    "ordinal": "inic say",
    "ordinalAbbr": "5º",
    "pronunciationEs": "say",
    "note": "Cinco (mano)"
  },
  {
    "number": 10,
    "cardinal": "diez-kakawira",
    "ordinal": "inic diez",
    "ordinalAbbr": "10º",
    "pronunciationEs": "diez",
    "note": "Diez"
  },
  {
    "number": 20,
    "cardinal": "sempuwal",
    "ordinal": "inic sempuwal",
    "ordinalAbbr": "20º",
    "pronunciationEs": "sem-pú-wal",
    "note": "Veintena"
  }
];

export const KAKAWIRA_COLORS: ColorEntry[] = [
  {
    "id": "k1",
    "nameEn": "Burbur",
    "nameEs": "Blanco",
    "hex": "#FFFFFF",
    "category": "primary",
    "sampleSentenceEn": "Burbur ne wirika plumas.",
    "sampleSentenceEs": "Blancas y brillantes son las plumas ceremoniales."
  },
  {
    "id": "k2",
    "nameEn": "Yar",
    "nameEs": "Negro",
    "hex": "#1F2937",
    "category": "primary",
    "sampleSentenceEn": "Yar ne taltikpak pal Morazán.",
    "sampleSentenceEs": "Negra y fértil es la tierra de Morazán."
  },
  {
    "id": "k3",
    "nameEn": "Puk",
    "nameEs": "Rojo",
    "hex": "#DC2626",
    "category": "primary",
    "sampleSentenceEn": "Puk ne wapa tik ne asun.",
    "sampleSentenceEs": "Rojo es el fuego cálido en el hogar Kakawira."
  },
  {
    "id": "k4",
    "nameEn": "Lul",
    "nameEs": "Verde",
    "hex": "#16A34A",
    "category": "secondary",
    "sampleSentenceEn": "Lul ne monte tik ne río Torola.",
    "sampleSentenceEs": "Verde es la vegetación ribereña del Torola."
  },
  {
    "id": "k5",
    "nameEn": "Yari",
    "nameEs": "Amarillo",
    "hex": "#F59E0B",
    "category": "primary",
    "sampleSentenceEn": "Yari ne sinti maduro.",
    "sampleSentenceEs": "Amarillo es el maíz sagrado de Cacaopera."
  }
];

export function numberToKakawiraWords(n: number): string {
  if (n === 0) return 'tatka';
  if (n === 1) return 'ai';
  if (n === 2) return 'buru';
  if (n === 3) return 'wasi';
  if (n === 4) return 'adamka';
  if (n === 5) return 'say';
  if (n < 10) return `say-${n - 5}`;
  if (n === 10) return 'diez-kakawira';
  if (n === 20) return 'sempuwal';
  return `cuenta kakawira (${n})`;
}

/**
 * APP-KUSKAT • REGISTRO MAESTRO DE IDIOMAS
 *
 * Arquitectura modular y extensible para el aprendizaje de idiomas.
 * Permite registrar múltiples idiomas (actualmente Inglés completo A1-C2 / US & UK,
 * con soporte preparado para Francés, Alemán, Italiano, Portugués y Japonés).
 */

import {
  CEFR_CURRICULUM,
  ENGLISH_QUESTIONS_BANK,
  GRAMMAR_DISTINCTIONS,
  LanguageQuestion,
  LevelCurriculumInfo,
  PHONETIC_DISTINCTIONS,
  SPELLING_RULES,
  VOCABULARY_PAIRS,
} from './englishData';

export interface LanguageManifest {
  id: string;
  name: string;
  flag: string;
  nativeName: string;
  status: 'active' | 'upcoming';
  description: string;
  variants: {
    id: string;
    name: string;
    code: string;
    flag: string;
    description: string;
  }[];
  levels: ('A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2')[];
  stats: {
    theoryLessonsCount: number;
    comparativeRulesCount: number;
    vocabularyTermsCount: number;
    questionsCount: number;
  };
}

export const LANGUAGES_CATALOG: LanguageManifest[] = [
  {
    id: 'english',
    name: 'Inglés',
    nativeName: 'English',
    flag: '🇬🇧 / 🇺🇸',
    status: 'active',
    description:
      'Programa completo y riguroso de aprendizaje del idioma inglés basado en el Marco Común Europeo de Referencia (MCER / CEFR) desde el nivel A1 hasta el C2, con desglose comparativo entre Inglés Americano (US) e Inglés Británico (UK).',
    variants: [
      {
        id: 'US',
        name: 'Inglés Americano (US)',
        code: 'en-US',
        flag: '🇺🇸',
        description: 'Ortografía Webster, gramática de concordancia formal, participio gotten y pronunciación rótica.',
      },
      {
        id: 'UK',
        name: 'Inglés Británico (UK)',
        code: 'en-GB',
        flag: '🇬🇧',
        description: 'Ortografía tradicional (Oxford/Cambridge), concordancia nocional, Present Perfect riguroso y no rótico.',
      },
      {
        id: 'ALL',
        name: 'Guía Comparativa (US vs. UK)',
        code: 'en-COMP',
        flag: '🌐',
        description: 'Análisis contrastivo de ortografía, fonética, vocabulario y sintaxis entre ambas normas internacionales.',
      },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    stats: {
      theoryLessonsCount: Object.values(CEFR_CURRICULUM).reduce(
        (acc, l) => acc + l.grammarLessons.length,
        0
      ),
      comparativeRulesCount:
        SPELLING_RULES.length +
        GRAMMAR_DISTINCTIONS.length +
        PHONETIC_DISTINCTIONS.length,
      vocabularyTermsCount: VOCABULARY_PAIRS.length,
      questionsCount: ENGLISH_QUESTIONS_BANK.length,
    },
  },
  {
    id: 'french',
    name: 'Francés',
    nativeName: 'Français',
    flag: '🇫🇷',
    status: 'upcoming',
    description: 'En desarrollo: Gramática francesa, concordancia del participio pasado, fonética nasal y niveles A1-C2.',
    variants: [
      { id: 'FR', name: 'Francés Metropolitano (Francia)', code: 'fr-FR', flag: '🇫🇷', description: 'Norma estándar de la Académie Française.' },
      { id: 'QC', name: 'Francés Canadiense (Québec)', code: 'fr-CA', flag: '🇨🇦', description: 'Variante quebequense con léxico y pronunciación autóctona.' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    stats: { theoryLessonsCount: 0, comparativeRulesCount: 0, vocabularyTermsCount: 0, questionsCount: 0 },
  },
  {
    id: 'german',
    name: 'Alemán',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    status: 'upcoming',
    description: 'En desarrollo: Casos gramaticales (Nominativ, Akkusativ, Dativ, Genitiv), declinación de adjetivos y niveles A1-C2.',
    variants: [
      { id: 'DE', name: 'Alemán Estándar (Hochdeutsch)', code: 'de-DE', flag: '🇩🇪', description: 'Alemán federal estándar.' },
      { id: 'AT', name: 'Alemán Austriaco', code: 'de-AT', flag: '🇦🇹', description: 'Variante de Austria con particularidades léxicas.' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    stats: { theoryLessonsCount: 0, comparativeRulesCount: 0, vocabularyTermsCount: 0, questionsCount: 0 },
  },
  {
    id: 'italian',
    name: 'Italiano',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    status: 'upcoming',
    description: 'En desarrollo: Verbos auxiliares essere vs. avere, pronombres combinados y niveles A1-C2.',
    variants: [
      { id: 'IT', name: 'Italiano Estándar', code: 'it-IT', flag: '🇮🇹', description: 'Estándar florentino nacional.' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    stats: { theoryLessonsCount: 0, comparativeRulesCount: 0, vocabularyTermsCount: 0, questionsCount: 0 },
  },
  {
    id: 'portuguese',
    name: 'Portugués',
    nativeName: 'Português',
    flag: '🇧🇷 / 🇵🇹',
    status: 'upcoming',
    description: 'En desarrollo: Portugués Brasileño vs. Portugués Europeo (Portugal), colocación pronominal y niveles A1-C2.',
    variants: [
      { id: 'BR', name: 'Portugués de Brasil', code: 'pt-BR', flag: '🇧🇷', description: 'Pronunciación palatalizada y sintaxis brasileña.' },
      { id: 'PT', name: 'Portugués Europeo', code: 'pt-PT', flag: '🇵🇹', description: 'Pronunciación cerrada y sintaxis de Portugal.' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    stats: { theoryLessonsCount: 0, comparativeRulesCount: 0, vocabularyTermsCount: 0, questionsCount: 0 },
  },
  {
    id: 'japanese',
    name: 'Japonés',
    nativeName: '日本語',
    flag: '🇯🇵',
    status: 'upcoming',
    description: 'En desarrollo: Silabarios Hiragana, Katakana, Kanji, partículas y niveles JLPT N5 a N1.',
    variants: [
      { id: 'JP', name: 'Japonés Estándar (Tokio)', code: 'ja-JP', flag: '🇯🇵', description: 'Dialecto estándar hyōjungo.' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    stats: { theoryLessonsCount: 0, comparativeRulesCount: 0, vocabularyTermsCount: 0, questionsCount: 0 },
  },
];

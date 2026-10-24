/**
 * APP-KUSKAT • SISTEMA MULTILINGÜE INTERCULTURAL (i18n)
 * Definiciones de tipos estrictos para soporte de lenguas originarias de El Salvador
 * (Náhuat, Lenca, Kakawira), Español, Inglés, Árabe (RTL) y Chino Mandarín.
 */

export type AppLocale = 'es' | 'nahuat' | 'lenca' | 'kakawira' | 'en' | 'ar' | 'zh';

export type TextDirection = 'ltr' | 'rtl';

export type ScriptFamily = 'latin' | 'arabic' | 'chinese';

export interface LanguageMeta {
  code: AppLocale;
  /** Nombre en la propia lengua (autónimo) */
  nativeName: string;
  /** Nombre descriptivo en español */
  spanishName: string;
  /** Región o comunidad lingüística */
  region: string;
  /** Dirección de escritura */
  dir: TextDirection;
  /** Familia tipográfica requerida */
  script: ScriptFamily;
  /** Símbolo o monograma cultural respetuoso (sin usar banderas estatales inapropiadas para pueblos originarios) */
  monogram: string;
  /** Es lengua originaria de El Salvador */
  isIndigenous: boolean;
  /** Código BCP 47 para atributos HTML lang e Intl */
  bcp47: string;
}

export interface GlossaryTerm {
  termEs: string;
  termTarget: string;
  category: 'matematica' | 'ciencias' | 'sociales' | 'lenguaje' | 'pedagogia';
  definitionEs: string;
  definitionTarget: string;
  isLoanword?: boolean;
  culturalNote?: string;
}

export interface TranslatedQuestionContent {
  statement: string;
  options: { key: string; text: string }[];
  explanation: string;
  topic: string;
  subject: string;
  isFallbackToSpanish: boolean;
  matchedGlossary: GlossaryTerm[];
}

export type TranslationValue = string | { [key: string]: TranslationValue };

export type TranslationDictionary = Record<string, TranslationValue>;

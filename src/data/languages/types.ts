/**
 * APP-KUSKAT • Contratos de Interfaz del Módulo de Idiomas
 * Definiciones canónicas para vocabulario auténtico, gramática contrastiva y unidades comunicativas R4.
 */

export interface LanguageVocabulary {
  id: string;
  word: string;
  translation: string;
  phonetic?: string;
  category: string;
  exampleSentence?: string;
  exampleTranslation?: string;
  // Campos de compatibilidad con vistas genéricas y corpus estructurados
  r?: number;
  w?: string;
  nahuat?: string;
  lenca?: string;
  kakawira?: string;
  arabic?: string;
  hanzi?: string;
  pinyin?: string;
  transliteration?: string;
  root?: string;
  pos?: string;
  es?: string;
  spanish?: string;
  lvl?: string;
  hskLevel?: 'HSK1' | 'HSK2' | 'HSK3' | 'HSK4' | 'HSK5' | 'HSK6';
  frequencyBand?: 'top500' | 'top1000' | 'top2000' | 'top5000' | 'advanced';
  ex?: string;
  exEs?: string;
}

export interface DialogueTurn {
  speaker: string;
  text: string;
  translation: string;
  phonetic?: string;
}

export interface GrammaticalBreakdown {
  gloss: string;
  syntaxPattern: string;
  culturalNotes?: string;
}

export interface SolvedDialogue {
  id: string;
  title?: string;
  context?: string;
  scenario?: string;
  dialogue?: string;
  turns?: DialogueTurn[];
  grammaticalBreakdown: string | GrammaticalBreakdown;
}

export interface CommunicativeUnit {
  id: string;
  title: string;
  topic?: string;
  substantiveGuide: string;
  solvedDialogues: SolvedDialogue[];
}

export interface LanguageGrammar {
  title?: string;
  spellingRules: any[];
  vocabularyPairs?: any[];
  pairDistinctions?: any[];
  grammarDistinctions?: any[];
  phoneticDistinctions?: any[];
  communicativeUnits: CommunicativeUnit[];
}

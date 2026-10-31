/**
 * Interface contracts for the Salvadoran Patriotic History, Civics, and Culture module.
 * APP-KUSKAT Platform - Milestone M2
 */

export interface SolvedHistoricalCaseStudy {
  id: string;
  title: string;
  historicalContext: string;
  dilemmaOrIssue: string;
  historiographicalAnalysis: string;
  civicSignificance: string;
}

export interface HistoricalMilestone {
  year: string;
  event: string;
  significance: string;
}

export interface PatrioticThematicUnit {
  id: string;
  title: string;
  period: string;
  subtitle: string;
  icon?: string;
  substantiveAnalysis: string;
  solvedCaseStudies: SolvedHistoricalCaseStudy[];
  keyMilestones: HistoricalMilestone[];
}

export interface PatrioticQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  thematicUnitId: string;
  historicalReference: string;
}

export interface PatrioticSymbol {
  id: string;
  name: string;
  scientificOrOfficialName?: string;
  category: 'emblema' | 'himno' | 'flora' | 'fauna' | 'oracion';
  yearOfficialized: string;
  decree: string;
  meaning: string;
  detailedHistory: string;
  civicDetails: string[];
  icon: string;
}

export interface PresidentRecord {
  id: string;
  name: string;
  period: string;
  years: string;
  type: 'Constitucional' | 'Cívico-Militar' | 'De Facto' | 'Provisional';
  context: string;
  pros: string[];
  cons: string[];
}

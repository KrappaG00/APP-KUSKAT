/**
 * Definiciones de Tipos del Módulo Oficial de Licencia de Conducir VMT & Seguridad Vial
 * Basado en la Ley de Transporte Terrestre, Tránsito y Seguridad Vial (D.L. 477),
 * Reglamento General de Tránsito y Seguridad Vial (D.E. 61), Reglamento de Transporte
 * Terrestre de Carga (D.E. 23), Código Penal (Art. 147-E) y Manual SIECA.
 */

export interface PracticalTrafficCase {
  id: string;
  title: string;
  scenario: string;
  legalReference: string;
  analysis: string;
  resolvedOutcome: string;
}

export interface DriverUnit {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  substantiveTheory: string;
  practicalCases: PracticalTrafficCase[];
}

export interface DriverQuestion {
  id: string;
  question: string;
  statement: string; // Alias retrocompatible con interfaz previa
  options: string[];
  correctAnswer: number; // 0: A, 1: B, 2: C, 3: D
  correctKey: string; // 'A' | 'B' | 'C' | 'D'
  explanation: string;
  distractorRationale: Record<string, string>;
  category: 'teorico' | 'psicologico';
  topic: string;
  legalReference?: string;
  signId?: string;
}

export type RoadSignCategory =
  | 'reglamentaria'
  | 'preventiva'
  | 'informativa'
  | 'obras'
  | 'horizontal';

export interface RoadSign {
  id: string;
  name: string;
  category: RoadSignCategory;
  type: RoadSignCategory; // Alias retrocompatible
  description: string;
  meaning: string;
  rule: string; // Alias retrocompatible
  siecaCode: string;
  code: string; // Alias retrocompatible
  iconSvg: string;
}

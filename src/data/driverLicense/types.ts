/**
 * Definiciones de Tipos del Módulo Oficial de Licencia de Conducir VMT & Seguridad Vial
 * Basado en la Ley de Transporte Terrestre, Tránsito y Seguridad Vial,
 * Reglamento General de Tránsito (DE 86), Código Penal (Art. 147-E) y Manual SIECA.
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
  category: 'teorico' | 'psicologico';
  topic: string;
  legalReference?: string;
}

export interface RoadSign {
  id: string;
  name: string;
  category: 'reglamentaria' | 'preventiva' | 'informativa';
  type: 'reglamentaria' | 'preventiva' | 'informativa'; // Alias retrocompatible
  description: string;
  meaning: string;
  rule: string; // Alias retrocompatible
  siecaCode: string;
  code: string; // Alias retrocompatible
  iconSvg: string;
}

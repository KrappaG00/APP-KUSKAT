// Part 1: Types and Specialties definition
const headerAndTypes = `/**
 * BANCO DE PREGUNTAS, CASOS CLÍNICOS RESUELTOS Y UNIDADES TEMÁTICAS
 * EXAMEN DE RESIDENTADO MÉDICO (ENAR) — EL SALVADOR
 * Consejo para la Enseñanza y Aprendizaje Académico de las Prácticas Clínicas
 * Especialidades Troncales: Medicina Interna, Cirugía General, Pediatría,
 * Ginecología y Obstetricia, Medicina Familiar y Atención Primaria, y Salud Pública
 * Conforme a Guías Clínicas Oficiales del MINSAL, OPS/OMS y Estándares de Especialidad.
 */

export interface ResidentadoQuestion {
  id: string;
  specialty: 'medicina_interna' | 'cirugia_general' | 'pediatria' | 'ginecologia_obstetricia' | 'medicina_familiar' | 'salud_publica';
  topic: string;
  clinicalVignette: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
  keyTakeaway: string;
  distractorRationale: Record<string, string>;
  officialReference: string;
}

export interface ResidentadoSolvedCase {
  id: string;
  title: string;
  patientProfile: string;
  initialVignette: string;
  diagnosticReasoning: string;
  differentialDiagnosis: {
    condition: string;
    rulingRationale: string;
  }[];
  managementPlan: string[];
  clinicalPearls: string[];
  officialProtocolRef: string;
}

export interface ResidentadoThematicUnit {
  id: string;
  specialtyId: 'medicina_interna' | 'cirugia_general' | 'pediatria' | 'ginecologia_obstetricia' | 'medicina_familiar';
  specialtyName: string;
  title: string;
  substantiveTheory: string;
  keyClinicalProtocols: {
    protocolName: string;
    summary: string;
    institution: string;
  }[];
  solvedClinicalCases: ResidentadoSolvedCase[];
}

export const RESIDENTADO_SPECIALTIES = [
  { id: 'all', name: 'Todas las Especialidades', icon: 'Stethoscope' },
  { id: 'medicina_interna', name: 'Medicina Interna', icon: 'Activity' },
  { id: 'cirugia_general', name: 'Cirugía General', icon: 'Scissors' },
  { id: 'pediatria', name: 'Pediatría', icon: 'Baby' },
  { id: 'ginecologia_obstetricia', name: 'Ginecología y Obstetricia', icon: 'Heart' },
  { id: 'medicina_familiar', name: 'Medicina Familiar y Atención Primaria', icon: 'Users' },
  { id: 'salud_publica', name: 'Salud Pública & Normas MINSAL', icon: 'ShieldCheck' },
];
`;

module.exports = { headerAndTypes };

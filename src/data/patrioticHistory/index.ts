export * from './types';
export * from './symbolsData';
export * from './presidentsData';
export * from './unit1PrecolombinoData';
export * from './unit2IndependenciaData';
export * from './unit3RepublicaModernaData';
export * from './unit4SimbolosValoresData';
export * from './unit5PatrimonioLiteraturaData';
export * from './patrioticQuestionsData';

import { PatrioticThematicUnit, SolvedHistoricalCaseStudy } from './types';
import { unit1PrecolombinoData } from './unit1PrecolombinoData';
import { unit2IndependenciaData } from './unit2IndependenciaData';
import { unit3RepublicaModernaData } from './unit3RepublicaModernaData';
import { unit4SimbolosValoresData } from './unit4SimbolosValoresData';
import { unit5PatrimonioLiteraturaData } from './unit5PatrimonioLiteraturaData';

export const PATRIOTIC_THEMATIC_UNITS: PatrioticThematicUnit[] = [
  unit1PrecolombinoData,
  unit2IndependenciaData,
  unit3RepublicaModernaData,
  unit4SimbolosValoresData,
  unit5PatrimonioLiteraturaData,
];

export const ALL_PATRIOTIC_CASE_STUDIES: SolvedHistoricalCaseStudy[] = [
  ...unit1PrecolombinoData.solvedCaseStudies,
  ...unit2IndependenciaData.solvedCaseStudies,
  ...unit3RepublicaModernaData.solvedCaseStudies,
  ...unit4SimbolosValoresData.solvedCaseStudies,
  ...unit5PatrimonioLiteraturaData.solvedCaseStudies,
];

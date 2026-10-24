# Project: APP-KUSKAT Specialized Modules Expansion & Densification

## Architecture
APP-KUSKAT provides specialized professional examination, jurisprudence, and simulation modules tailored to Salvadoran regulatory, medical, and legal frameworks. These specialized modules are decoupled from the 17,640 base question bank in `public/data/` and reside in `src/data/`, feeding specialized interactive UI components with audio synthesis, FSRS error logging, and dynamic assessment:

- **Medical & Health Track (`src/data/`)**:
  - `csspHealthData.ts`: 25 comprehensive items across 5 Juntas (JVPM, JVPO, JVPE, JVPQF, JVPPS) with bioética, consentimiento informado, farmacovigilancia, BPD, and Ley Crecer Juntos Art. 16. Consumed by `CsspHealthView.tsx`.
  - `residentadoBranchingCases.ts`: 4 major trunk clinical branches (Medicina Interna, Pediatría, Gineco-Obstetricia [Código Naranja Zuspan], Cirugía General/Trauma [ATLS 10ª ed, Choque IV, MTP 1:1:1, TXA, Damage Control]). Consumed by `ResidentadoMedicoView.tsx`.
- **Legal & Judicial Track (`src/data/`)**:
  - `notaryExamData.ts`: 20 comprehensive questions covering testamentos, protocolizaciones, testigos de conocimiento (Art. 32 LN), LENJVOD (herencia, remedición), poderes especiales Art. 69 CPCM, sociedades mercantiles, y nulidades absolutas Sala de lo Civil/Corte Plena. Re-exported and consumed by `NotaryExamView.tsx`.
  - `constitucionalJurisprudenciaData.ts`: 10 landmark Constitutional Chamber rulings with ratio decidendi and dogmatic quizzes covering Arts. 86/231 Cn., Hábeas Corpus detención y carcelario, Amparo medicamentos Art. 65 Cn., LAIP transparencia, y decretos ejecutivos. Consumed by `ConstitutionLawView.tsx`.
- **Security & Financial Compliance Track (`src/data/`)**:
  - `anspAscensoData.ts`: 18 comprehensive reactivos (6 Cabo, 6 Sargento, 6 Oficial) covering ITOP, flagrancia, cadena de custodia, LEIV, LEIT, FGR, régimen disciplinario, y estándares ONU/Corte IDH. Consumed by `AnspAscensoView.tsx`.
  - `complianceAmlData.ts`: 16 questions (8 AML, 8 Seguros) covering pitufeo, DDI offshore/fideicomisos, APNFD, regla proporcional de infraseguro (Art. 1383 C.Com.), sobreseguro, y fianzas públicas. Consumed by `ComplianceFinancialView.tsx`.
- **Verification & Invariant Gate**:
  - Automated Vitest test suites in `tests/`.
  - Base question bank validation intact at 17,640 (`scripts/validate-bank.mjs`).
  - Multi-language UI shell coverage 100% across 7 locales (`scripts/validate-i18n.mjs`).
  - TypeScript zero static errors (`tsc --noEmit`).
  - Zero private contact phone occurrences (`git grep "7943 9901"` = 0).
  - Production build clean (`npm run build`).

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | CSSP Health Expansion (25 items) | 5 questions per Junta (JVPM, JVPO, JVPE, JVPQF, JVPPS) with bioética, consentimiento, farmacovigilancia, BPD, and Ley Crecer Juntos Art. 16 | M1 | Survey |
| 2 | Residentado Caso 3: Gineco-Obstetricia | Código Naranja: Preeclampsia severa / eclampsia inminente, Zuspan IV, sulfato de Mg 20%, ROT/FR/diuresis, gluconato de calcio 10%, labetalol/hidralazina | M2 | Survey |
| 3 | Residentado Caso 4: Cirugía / Trauma | Politraumatizado con Choque Hemorrágico Grado IV, ATLS 10ª ed, MTP 1:1:1, TXA 1g <3h, laparotomía control de daños con packing y second look | M2 | Survey |
| 4 | Residentado Selector Grid Update | Adjust grid in `ResidentadoMedicoView.tsx` to `sm:grid-cols-2 lg:grid-cols-4` | M2 | Survey |
| 5 | Notary Exam Data Extraction & Expansion (20 items) | Decouple data to `notaryExamData.ts`, expand to 20 items with testamentos (Arts. 1009-1017 CC), protocolizaciones, Art. 32 LN, LENJVOD, Art. 69 CPCM, sociedades, nulidades | M3 | Survey |
| 6 | Casoteca Constitucional Expansion (10 sentencias) | Expand `constitucionalJurisprudenciaData.ts` to 10 sentencias with ratio decidendi and dogmatic quizzes covering emergency decrees, prison conditions, LAIP, taxes | M4 | Survey |
| 7 | Ascenso Policial ANSP Expansion (18 reactivos) | Expand `anspAscensoData.ts` to 18 reactivos (6 Cabo, 6 Sargento, 6 Oficial) with ITOP, flagrancia, cadena de custodia, LEIV, LEIT, FGR, Ley Carrera Policial | M5 | Survey |
| 8 | Cumplimiento AML & Seguros SSF (16 preguntas) | Expand `complianceAmlData.ts` to 16 preguntas (8 AML, 8 Seguros) with smurfing, DDI offshore, APNFD, infraseguro (Art. 1383 C.Com.), sobreseguro, fianzas | M6 | Survey |
| 9 | Automated Test Suites & Invariant Verification | Implement unit tests for all 6 modules, verify typecheck, test suites, bank count (17,640), i18n, build, and phone scan | M7 | Survey |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | CSSP Health Data Expansion | `src/data/csspHealthData.ts` (25 items across 5 Juntas) | Survey complete | **DONE** |
| M2 | Residentado Branching Cases | `src/data/residentadoBranchingCases.ts` (4 cases) & `ResidentadoMedicoView.tsx` | Survey complete | **DONE** |
| M3 | Notary Exam Expansion | `src/data/notaryExamData.ts` (20 items) & `NotaryExamView.tsx` | Survey complete | **DONE** |
| M4 | Casoteca Constitucional Expansion | `src/data/constitucionalJurisprudenciaData.ts` (10 sentencias) | Survey complete | **DONE** |
| M5 | Ascenso Policial ANSP Expansion | `src/data/anspAscensoData.ts` (18 reactivos: 6 Cabo, 6 Sargento, 6 Oficial) | Survey complete | **DONE** |
| M6 | Cumplimiento AML & Seguros SSF | `src/data/complianceAmlData.ts` (16 preguntas: 8 AML, 8 Seguros) | Survey complete | **DONE** |
| M7 | Automated Unit Tests & Invariant Gate | Dedicated Vitest tests + full verification pipeline | M1-M6 | **DONE** |

## Code Layout & Write Boundaries
To ensure strict isolation between concurrent workers:
- **Worker Medical (M1, M2)**:
  - Exclusive write ownership: `src/data/csspHealthData.ts`, `src/data/residentadoBranchingCases.ts`, `src/components/ResidentadoMedicoView.tsx`, `tests/medicalModules.test.ts`.
- **Worker Legal (M3, M4)**:
  - Exclusive write ownership: `src/data/notaryExamData.ts`, `src/components/NotaryExamView.tsx`, `src/data/constitucionalJurisprudenciaData.ts`, `tests/legalModules.test.ts`.
- **Worker Security & Compliance (M5, M6)**:
  - Exclusive write ownership: `src/data/anspAscensoData.ts`, `src/data/complianceAmlData.ts`, `tests/securityCompliance.test.ts`.

## Interface Contracts
- **`CsspQuestion`**:
  - `id: string` (`cssp-jvpm-01`..`05`, `cssp-jvpo-01`..`05`, `cssp-jvpe-01`..`05`, `cssp-jvpqf-01`..`05`, `cssp-jvpps-01`..`05`)
  - `juntaId: 'jvpm' | 'jvpo' | 'jvpe' | 'jvpqf' | 'jvpps'`
  - `options: Record<string, string>` with keys `'A' | 'B' | 'C' | 'D'`
  - `correctAnswer: 'A' | 'B' | 'C' | 'D'`
- **`BranchingCaseScenario`**:
  - Exactly 4 cases: `Medicina Interna`, `Pediatría`, `Gineco-Obstetricia`, `Cirugía`
  - Each case has $\ge 3$ stages with `vitals`, `options` (exactly 1 optimal), `minsalProtocolRef`.
- **`NotaryQuestion`**:
  - `id: string` (`not-01`..`not-20`)
  - `options: { key: string; text: string }[]` with keys `'A' | 'B' | 'C' | 'D'`
  - `correctKey: string`
- **`ConstitutionalRulingCase`**:
  - Exactly 10 sentencias: `id`, `refNumber`, `year`, `rulingType`, `title`, `constitutionalArticles`, `factsSummary`, `ratioDecidendi`, `practicalImpact`, `legalQuiz`.
- **`AnspQuestion`**:
  - Exactly 18 items: 6 `Cabo`, 6 `Sargento`, 6 `Oficial`
  - `options: { key: string; text: string }[]`, `correctAnswer: 'A' | 'B' | 'C' | 'D'`.
- **`ComplianceQuestion`**:
  - Exactly 16 items: 8 `AML`, 8 `Seguros`
  - `options: { A: string; B: string; C: string; D: string }`, `correctAnswer: 'A' | 'B' | 'C' | 'D'`.

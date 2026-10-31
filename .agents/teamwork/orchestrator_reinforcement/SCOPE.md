# Project: Refuerzo Integral de Plataforma Educativa APP-KUSKAT

## Architecture
- **Academic High-Performance**: `src/data/jovenesTalentoData.ts` & `src/components/JovenesTalentoView.tsx` (Olympic modules: Math, Physics, Chemistry, Biology, Informatics).
- **One-Page Cheat Sheets**: `src/data/onePageSheetsData.ts` & `src/components/OnePageCheatSheetsView.tsx` (high-yield printable and interactive cheat sheets).
- **Legal & Procedural**: `src/data/oralLitigationData.ts` & `src/components/OralLitigationSimulatorView.tsx` (Oral litigation units, drills, objections); `src/data/constitucionalJurisprudenciaData.ts` & `src/components/ConstitutionLawView.tsx` (Landmark rulings, 10 legal branches, Amparo/Habeas Corpus/Inconstitucionalidad guides).
- **Health & Medical**: `src/data/residentadoMedicoData.ts`, `src/data/residentadoBranchingCases.ts` & `src/components/ResidentadoMedicoView.tsx` (Core specialties: Internal Medicine, Surgery, Pediatrics, OB/GYN, Family Medicine; clinical cases, guides, expanded questions).
- **Energy & Technical**: `src/data/sigetSolarData.ts` & `src/components/SigetSolarView.tsx` (Solar engineering, SIGET/NEC 690 norms, sizing calculations, electrical categories).
- **Quality Assurance & Verification**: `tests/platformReinforcementCompliance.test.ts` (automated tests validating >=500 substantive words, >=5 distinct solved examples, question rationales, and all platform invariants).

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Jóvenes Talento (MINED-UES) | 5 Olympic thematic units (Math ONM Number Theory, Math ONM Combinatorics, Physics ONF Rotation, Chemistry ONQ Thermodynamics, Biology ONB/Computing OSI) >=500 words each + 5 step-by-step solved proof examples per unit (25 total) + interactive Olympic problems | M1 | Survey Explorer 3 |
| 2 | One-Page Cheat Sheets | Expand from 4 to 9 institutional sheets (adding STEM Olympic, SIGET Solar, Clinical Pharmacology, AML/SSF, Náhuat Pipil) with >=5 step-by-step solved practical application examples per sheet + retention drills | M1 | Survey Explorer 3 |
| 3 | Simulador de Litigación Oral | 5 thematic units (Teoría del Caso, Interrogatorio Directo, Contrainterrogatorio, Objeciones Arts. 209-212 PrPn, Impugnación y Evidencia Material) >=500 words each + 5 step-by-step solved courtroom dialogue cases per unit (25 total) | M2 | Survey Explorer 1 |
| 4 | Casoteca Constitucional & Ramas | Expand 10 branches of law (Constitucional, Penal, Procesal, Administrativo, Tributario, Internacional, Civil, Mercantil, Laboral, Familia) to >=500 words each + 5 solved cases each (50 total) + procedural guides for Amparo, Hábeas Corpus, Inconstitucionalidad | M2 | Survey Explorer 1 |
| 5 | Residentado Médico (ENAR) | 5 thematic units for core specialties (Medicina Interna, Cirugía General, Pediatría, Ginecología y Obstetricia, Medicina Familiar y Atención Primaria) >=500 words each + 5 step-by-step solved clinical cases each (25 total) + expand bank from 11 to >=50 questions | M3 | Survey Explorer 2 |
| 6 | Técnico Solar & Normativa SIGET | 4-6 engineering units (NTCOGD/Net Metering, NEC 690 & DC protections, SIGET Electrical Categories, Off-Grid & Batteries, Grounding/Safety IEEE 1547) >=500 words each + 5 step-by-step engineering design calculations each (25 total) + expand bank from 15 to >=50 questions | M4 | Survey Explorer 2 |
| 7 | Invariant Preservation | Certify 17,640 base bank questions untouched, 200 Notary questions untouched, 97 ESMATE units intact, 0 private phones ("7943 9901"), official WhatsApp +503 7657 4463, text-white heading, 100% ads | M5 | ORIGINAL_REQUEST R3/R4 |
| 8 | Automated Compliance Suite & Verification | Dedicated Vitest test suite (`tests/platformReinforcementCompliance.test.ts`) validating >=500 words, >=5 examples, question rationales, and 100% pass on typecheck, test, build, validate:bank, validate:i18n | M5 | ORIGINAL_REQUEST R4 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M0 | Survey & Global Platform Audit | Exhaustive read-only audit across all modules, quantify gaps, inventory features | None | DONE |
| M1 | Academic High-Performance & Cheat Sheets | Jóvenes Talento (MINED-UES) 5 units + 25 examples; One-Page Sheets 5 new sheets + examples | M0 | PLANNED |
| M2 | Legal & Procedural Modules | Litigación Oral 5 units + 25 cases; Casoteca 10 branches + 50 cases + 3 procedural guides | M0 | PLANNED |
| M3 | Health & Medical Modules | Residentado Médico (ENAR) 5 units + 25 clinical cases + >=50 questions | M0 | PLANNED |
| M4 | Energy & Technical Modules | Técnico Solar & SIGET 5 units + 25 engineering calculations + >=50 questions | M0 | PLANNED |
| M5 | Compliance Tests & System Verification | Automated compliance test suite + 100% test, typecheck, build, validate:bank, validate:i18n + Forensic Audit | M1, M2, M3, M4 | PLANNED |

## Interface Contracts
### `jovenesTalentoData.ts` ↔ `JovenesTalentoView.tsx`
- `OLYMPIC_THEMATIC_UNITS: OlympicThematicUnit[]`: Array of units with `discipline`, `stage`, `title`, `substantiveTheory` (>=500 words), `keyTheorems`, `solvedExamples` (>=5 examples with `stepByStepProof`), `practiceQuestions`.
- Existing `OLYMPIC_PROBLEMS_DATA` preserved intact.

### `onePageSheetsData.ts` ↔ `OnePageCheatSheetsView.tsx`
- `ONE_PAGE_SHEETS: OnePageSheet[]`: Array extended to 9 sheets, each with `solvedPracticeExamples` (>=5 examples) and `retentionDrills`.

### `oralLitigationData.ts` ↔ `OralLitigationSimulatorView.tsx`
- `ORAL_LITIGATION_THEMATIC_UNITS: OralLitigationThematicUnit[]`: Array of 5 units, each with `substantiveTheory` (>=500 words) and `solvedCases` (>=5 courtroom dialogue cases).
- Existing `OBJECTION_DEFINITIONS` and `COURTROOM_DRILLS` preserved intact.

### `constitucionalJurisprudenciaData.ts` ↔ `ConstitutionLawView.tsx`
- `CONSTITUTION_LAW_BRANCHES: LawBranch[]`: Extended to >=500 substantive words per branch with `solvedCases` (>=5 cases per branch).
- Existing `CONSTITUTIONAL_CASES` and `AMPARO_STEP_GUIDE` preserved intact.

### `residentadoMedicoData.ts` ↔ `ResidentadoMedicoView.tsx`
- `RESIDENTADO_THEMATIC_UNITS: ResidentadoThematicUnit[]`: Array of 5 core specialty units with `substantiveTheory` (>=500 words) and `solvedClinicalCases` (>=5 cases per specialty).
- `RESIDENTADO_QUESTIONS`: Extended from 11 to >=50 questions.

### `sigetSolarData.ts` ↔ `SigetSolarView.tsx`
- `SIGET_THEMATIC_UNITS: SigetSolarThematicUnit[]`: Array of 5 engineering units with `substantiveTheory` (>=500 words) and `solvedCalculations` (>=5 step-by-step engineering calculations per unit).
- `SIGET_SOLAR_QUESTIONS`: Extended from 15 to >=50 questions.

## Code Layout
- `src/data/jovenesTalentoData.ts`: Data definitions and thematic units for Jóvenes Talento.
- `src/components/JovenesTalentoView.tsx`: UI rendering for Jóvenes Talento.
- `src/data/onePageSheetsData.ts`: Cheat sheets catalog and solved examples.
- `src/components/OnePageCheatSheetsView.tsx`: UI rendering for Cheat Sheets.
- `src/data/oralLitigationData.ts`: Litigation thematic units, drills, and objections.
- `src/components/OralLitigationSimulatorView.tsx`: UI rendering for Litigation Simulator.
- `src/data/constitucionalJurisprudenciaData.ts`: Constitutional cases, branches, and procedural guides.
- `src/components/ConstitutionLawView.tsx`: UI rendering for Constitutional Law.
- `src/data/residentadoMedicoData.ts`: Medical thematic units, clinical cases, and questions.
- `src/components/ResidentadoMedicoView.tsx`: UI rendering for Residentado Médico.
- `src/data/sigetSolarData.ts`: Solar engineering units, sizing calculations, and questions.
- `src/components/SigetSolarView.tsx`: UI rendering for Solar/SIGET.
- `tests/platformReinforcementCompliance.test.ts`: Automated compliance tests for content standards and platform invariants.

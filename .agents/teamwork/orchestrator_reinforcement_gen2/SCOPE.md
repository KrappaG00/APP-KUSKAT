# Project: Refuerzo Integral de Plataforma Educativa APP-KUSKAT (Gen 2)

## Architecture
- **Academic High-Performance**: `src/data/jovenesTalentoData.ts` & `src/components/JovenesTalentoView.tsx` (Olympic modules: Math, Physics, Chemistry, Biology, Informatics).
- **One-Page Cheat Sheets**: `src/data/onePageSheetsData.ts` & `src/components/OnePageCheatSheetsView.tsx` (high-yield printable and interactive cheat sheets).
- **Legal & Procedural**: `src/data/oralLitigationData.ts` & `src/components/OralLitigationSimulatorView.tsx` (Oral litigation units, drills, objections); `src/data/constitucionalJurisprudenciaData.ts` & `src/components/ConstitutionLawView.tsx` (Landmark rulings, 10 legal branches, Amparo/Habeas Corpus/Inconstitucionalidad guides).
- **Health & Medical**: `src/data/residentadoMedicoData.ts`, `src/data/residentadoBranchingCases.ts` & `src/components/ResidentadoMedicoView.tsx` (Core specialties: Internal Medicine, Surgery, Pediatrics, OB/GYN, Family Medicine; clinical cases, guides, expanded questions).
- **Energy & Technical**: `src/data/sigetSolarData.ts` & `src/components/SigetSolarView.tsx` (Solar engineering, SIGET/NEC 690 norms, sizing calculations, electrical categories).
- **Quality Assurance & Verification**: `tests/platformReinforcementCompliance.test.ts` & domain tests (`tests/academicEnhancementsM1.test.ts`, etc.) validating >=500 substantive words, >=5 distinct solved examples, question rationales, and all platform invariants.

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
| M1 | Academic High-Performance & Cheat Sheets | Jóvenes Talento (MINED-UES) 5 units + 25 examples; One-Page Sheets 5 new sheets + examples | M0 | DONE (10/10 tests pass) |
| M2 | Legal & Procedural Modules | Litigación Oral 5 units + 25 cases; Casoteca 10 branches + 50 cases + 3 procedural guides | M0 | DONE (25/25 tests pass) |
| M3 | Health & Medical Modules | Residentado Médico (ENAR) 5 units + 25 clinical cases + >=50 questions | M0 | DONE (22/22 tests pass) |
| M4 | Energy & Technical Modules | Técnico Solar & SIGET 5 units + 25 engineering calculations + >=50 questions | M0 | DONE (34/34 tests pass) |
| M5 | Compliance Tests & System Verification | Automated compliance test suite + 100% test, typecheck, build, validate:bank, validate:i18n + Forensic Audit | M1, M2, M3, M4 | DONE (Gate PASS) |

## Interface Contracts & File Isolation
- **M2 Legal Worker**:
  - Exclusively owns: `src/data/oralLitigationData.ts`, `src/components/OralLitigationSimulatorView.tsx`, `src/data/constitucionalJurisprudenciaData.ts`, `src/components/ConstitutionLawView.tsx`, `tests/legalReinforcementM2.test.ts`.
- **M3 Medical Worker**:
  - Exclusively owns: `src/data/residentadoMedicoData.ts`, `src/components/ResidentadoMedicoView.tsx`, `tests/medicalReinforcementM3.test.ts`.
- **M4 Solar Worker**:
  - Exclusively owns: `src/data/sigetSolarData.ts`, `src/components/SigetSolarView.tsx`, `tests/solarReinforcementM4.test.ts`.
- **M5 Compliance & Verification**:
  - `tests/platformReinforcementCompliance.test.ts`.

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
- `tests/academicEnhancementsM1.test.ts`: Verification for M1.
- `tests/legalReinforcementM2.test.ts`: Verification for M2.
- `tests/medicalReinforcementM3.test.ts`: Verification for M3.
- `tests/solarReinforcementM4.test.ts`: Verification for M4.
- `tests/platformReinforcementCompliance.test.ts`: Global compliance tests.

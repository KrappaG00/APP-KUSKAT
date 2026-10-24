# E2E Test Infra: APP-KUSKAT Specialized Modules

## Test Philosophy
- Opaque-box, requirement-driven, and structural integrity verification.
- Zero tolerance for regressions across the 17,640 base question bank.
- Rigorous domain validation: verified Salvadoran statutory articles, CSJ judicial rulings, and medical/surgical protocols.

## Feature Inventory
| # | Feature | Source (requirement) | Tier 1 (Count & Schema) | Tier 2 (Boundary & Constraints) | Tier 3 (Cross-Module Invariants) |
|---|---------|---------------------|:-----------------------:|:-------------------------------:|:--------------------------------:|
| 1 | CSSP Health Data (25 items) | ORIGINAL_REQUEST §1 | 25 items across 5 Juntas | 5 items per Junta exact | FSRS / Cuaderno de Errores |
| 2 | Residentado Branching (4 cases) | ORIGINAL_REQUEST §4 | 4 cases across 4 specialties | Zuspan & ATLS parameters | Vitals monitor & branching engine |
| 3 | CSJ Notary Exam (20 items) | ORIGINAL_REQUEST §2 | 20 items exact | 7 distinct legal themes | Score calculation & study tabs |
| 4 | CSJ Casoteca Constitucional (10 sentencias) | ORIGINAL_REQUEST §3 | 10 sentencias exact | Ratio decidendi & dogmatic quizzes | AudioSpeech integration |
| 5 | ANSP Police Promotion (18 reactivos) | ORIGINAL_REQUEST §5 | 18 reactivos exact | 6 Cabo, 6 Sargento, 6 Oficial | Escalafón filter & scoring |
| 6 | SSF Compliance & AML (16 preguntas) | ORIGINAL_REQUEST §6 | 16 preguntas exact | 8 AML, 8 Seguros | SSF categorization & scoring |
| 7 | System Invariants | ORIGINAL_REQUEST §R2 | 17,640 bank count intact | 0 private phone occurrences | Typecheck, Vitest, Build, i18n clean |

## Test Architecture
- **Unit & Structural Test Suites**:
  - `tests/medicalModules.test.ts`: Asserts 25 CSSP items (5 per Junta) and 4 Residentado cases with exact medical parameters.
  - `tests/legalModules.test.ts`: Asserts 20 Notary questions and 10 Constitutional cases with exact legal articles and precedents.
  - `tests/securityCompliance.test.ts`: Asserts 18 ANSP items (6 per rank) and 16 Compliance items (8 AML, 8 Seguros).
- **Invariant Verifiers**:
  - `npm run typecheck` (`tsc --noEmit`)
  - `npm test` (`vitest run`)
  - `npm run validate:bank` (`node scripts/validate-bank.mjs`)
  - `npm run validate:i18n` (`node scripts/validate-i18n.mjs`)
  - `npm run build` (`vite build`)
  - `git grep "7943 9901"` (must return 0 matches)

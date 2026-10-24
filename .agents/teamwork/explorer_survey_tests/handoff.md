# Handoff Report: Test & Validation Infrastructure Survey (Explorer 3)

**Date**: 2026-10-23T16:07:00Z  
**Agent**: Explorer 3 (Test & Validation Survey)  
**Parent Conversation ID**: `3f4421ca-8da7-495a-a734-3ce450e9530d`  
**Handoff Type**: Hard (Investigation Complete)  

---

## 1. Observation

### 1.1 Script Execution & Invariant Status (`package.json`)
The five core verification scripts declared in `package.json` (lines 8, 10–13) were executed directly with the following exact outputs and exit codes:

1. **`npm run typecheck` (`tsc --noEmit`)**:
   - Exit code: `0`
   - Output:
     ```
     > banco-preguntas-maestro-ues-avanzo@1.0.0 typecheck
     > tsc --noEmit
     ```
   - Status: 0 compile-time errors in `src/`.

2. **`npm test` (`vitest run`)**:
   - Exit code: `0`
   - Summary: `18 test files passed (18)`, `214 tests passed (214)`, duration `25.11s`.
   - All suites passed: `adBanner.test.ts` (6), `motionSites.test.ts` (5), `categoryTheory.test.ts` (14), `securityCompliance.test.ts` (14), `bancoService.test.ts` (11), `medicalModules.test.ts` (10), `medicalEmpiricalChallenge.test.ts` (15), `authAndStats.test.ts` (13), `challengerLegalSecurity.test.ts` (13), `errorBoundary.test.ts` (6), `i18n.test.ts` (6), `scoring.test.ts` (5), `scrollToTop.test.ts` (4), `legalModules.test.ts` (11), `tutorial.test.ts` (8), `bankValidation.test.ts` (7), `trueFalse.test.ts` (8), `languages.test.ts` (58).

3. **`npm run validate:bank` (`node scripts/validate-bank.mjs`)**:
   - Exit code: `0`
   - Output:
     ```
     KUSKAT · Validación del banco de preguntas
       Preguntas válidas: UES=7500  ANSP=250  ASD=2190  AVANZO=3000  ENA=1400  ESCALAFON=3300  total=17640
       Errores: 0
       Advertencias: 0 {}
       Informe detallado: reports/bank-validation.json
     ```

4. **`npm run validate:i18n` (`node scripts/validate-i18n.mjs`)**:
   - Exit code: `0`
   - Output:
     ```
     ================================================================
     🌐 KUSKAT — Reporte de Validación Multilingüe Intercultural (i18n)
     ================================================================
     ✔ [es      ] Español    | dir="ltr" | UI: 100% (117/117) | Banco: 100%
     ✔ [nahuat  ] Náhuat     | dir="ltr" | UI: 100% (117/117) | Banco: 73%
     ✔ [lenca   ] Lenca      | dir="ltr" | UI: 100% (117/117) | Banco: 73%
     ✔ [kakawira] Kakawira   | dir="ltr" | UI: 100% (117/117) | Banco: 73%
     ✔ [en      ] English    | dir="ltr" | UI: 100% (117/117) | Banco: 95.29%
     ✔ [ar      ] العربية    | dir="rtl" | UI: 100% (117/117) | Banco: 84.57%
     ✔ [zh      ] 中文       | dir="ltr" | UI: 100% (117/117) | Banco: 84.57%
     📄 Reporte generado en: reports/i18n-coverage.json
     ```

5. **`npm run build` (`vite build`)**:
   - Exit code: `0`
   - Output: Bundled successfully in `25.39s` without errors. All chunks generated under `dist/`.

---

### 1.2 Inspection of `validate:bank` Operation
- **File**: `scripts/validate-bank.mjs` (460 lines).
- **Target Data**: Operates exclusively against JSON files in `public/data/`:
  - `public/data/curriculum.json` + `public/data/questions/{subtopicId}.json` (UES: 7,500 questions across 25 subtopics).
  - `public/data/ansp/curriculum.json` + `public/data/ansp/questions/*.json` + `all.json` (ANSP: 250 questions across 10 subjects).
  - `public/data/asd/curriculum.json` + `public/data/asd/questions/*.json` + `all.json` (ASD: 2,190 questions across 6 subtopics in 3 grades).
  - `public/data/avanzo/curriculum.json` + `public/data/avanzo/questions/*.json` + `all.json` (AVANZO: 3,000 questions across 5 subjects).
  - `public/data/ena/curriculum.json` + `public/data/ena/questions/*.json` + `all.json` (ENA: 1,400 questions across 4 subjects).
  - `public/data/escalafon/curriculum.json` + `public/data/escalafon/questions/*.json` + `all.json` (ESCALAFON: 3,300 questions across 11 specialties).
  - **Total**: Exactly `17,640` base questions.
- **Key Invariant**: `scripts/validate-bank.mjs` **DOES NOT** inspect or validate any of the TypeScript specialized banks in `src/data/*.ts`. It strictly validates the static JSON base repository in `public/data/`.

---

### 1.3 Inspection of Existing Tests for the 7 Specialized Modules
Surveying `tests/` revealed how the specialized banks are validated and where gaps exist:

1. **Module 1 — Derecho Administrativo y Firma Electrónica (`src/data/derechoAdministrativoData.ts`)**:
   - Current count in file: 11 questions (`lpa-01` to `lpa-11`).
   - Unit tests in `tests/`: **0 tests** (file is not imported in any test).
2. **Module 2 — Salud Primaria y Farmacovigilancia (`src/data/saludPrimariaData.ts`)**:
   - Current count in file: 9 questions (`dengue-01..`, `hta-01..`, `ram-01..`).
   - Unit tests in `tests/`: **0 tests** (file is not imported in any test).
3. **Module 3 — Métodos Cuantitativos y Ciencias de Ingeniería (`src/data/ingenieriaCienciasData.ts`)**:
   - Current count in file: 9 questions (`ing-01` to `ing-09`).
   - Unit tests in `tests/`: **0 tests** (file is not imported in any test).
4. **Module 4 — Examen de Suficiencia Notarial CSJ (`src/data/notaryExamData.ts`)**:
   - Current count in file: 20 questions (`not-01` to `not-20`).
   - Unit tests in `tests/`:
     - `tests/legalModules.test.ts` (lines 11–102): Hardcoded `expect(NOTARY_QUESTIONS_FROM_DATA.length).toBe(20)`, checks `not-01` to `not-20`, checks regex `/^not-(0[1-9]|1[0-9]|20)$/`.
     - `tests/challengerLegalSecurity.test.ts` (lines 18–114): Hardcoded length 20, loop 1 to 20, score emulation (10/20 = 50%, 20/20 = 100%).
5. **Module 5 — Consejo Superior de Salud Pública CSSP (`src/data/csspHealthData.ts`)**:
   - Current count in file: 25 questions (5 per junta: JVPM, JVPO, JVPE, JVPQF, JVPPS).
   - Unit tests in `tests/`:
     - `tests/medicalModules.test.ts` (lines 5–105): Hardcoded `expect(CSSP_QUESTIONS_DATA).toHaveLength(25)` and `expect(counts[junta]).toBe(5)`.
6. **Module 6 — Ascenso Policial ANSP (`src/data/anspAscensoData.ts`)**:
   - Current count in file: 18 questions (6 Cabo, 6 Sargento, 6 Oficial).
   - Unit tests in `tests/`:
     - `tests/securityCompliance.test.ts` (lines 13–129): Hardcoded length 18, 6 Cabo, 6 Sargento, 6 Oficial.
     - `tests/challengerLegalSecurity.test.ts` (lines 178–293): Hardcoded length 18, 6 Cabo, 6 Sargento, 6 Oficial, filter tests, and score emulation.
7. **Module 7 — Cumplimiento AML & Seguros SSF (`src/data/complianceAmlData.ts`)**:
   - Current count in file: 16 questions (8 AML, 8 Seguros).
   - Unit tests in `tests/`:
     - `tests/securityCompliance.test.ts` (lines 131–250): Hardcoded length 16, 8 AML, 8 Seguros.
     - `tests/challengerLegalSecurity.test.ts` (lines 295–363): Hardcoded length 16, 8 AML, 8 Seguros, mathematical test of infraseguro Art. 1383 C.Com.

---

### 1.4 Phone Number Safety & Official Contacts
- `git grep "7943 9901"` executed: returned exit code `1` with 0 matches.
- Official WhatsApp contact `+503 7657 4463` is present in 13 locations across `src/App.tsx`, `src/components/DeveloperModal.tsx`, `src/components/ErrorBoundary.tsx`, `src/components/Header.tsx`, `src/components/HeaderNavbar.tsx`, `src/components/OnboardingTutorial.tsx`, `src/components/motionsites/MotionSitesPortal.tsx`, `src/data.ts`.

---

## 2. Logic Chain

1. **Preservation of Base Bank**:
   - `npm run validate:bank` verifies the 17,640 base JSON questions in `public/data/`.
   - Because the 7 specialized modules live exclusively in `src/data/*.ts` as TypeScript modules, modifying or densifying the 7 specialized modules will NOT impact `scripts/validate-bank.mjs` or cause regressions in the 17,640 base bank.
   - However, `tests/bankValidation.test.ts` directly asserts the 17,640 count from `public/data/manifest.json`. This remains completely decoupled from `src/data/`.

2. **Impact on Existing Test Suites**:
   - When the 4 previously tested modules (`notaryExamData.ts`, `csspHealthData.ts`, `anspAscensoData.ts`, `complianceAmlData.ts`) are expanded from 20/25/18/16 to 200 questions each, the existing assertions in `tests/legalModules.test.ts`, `tests/medicalModules.test.ts`, `tests/securityCompliance.test.ts`, and `tests/challengerLegalSecurity.test.ts` will immediately fail unless updated.
   - For instance, `expect(CSSP_QUESTIONS_DATA).toHaveLength(25)` will encounter 200 and fail; `expect(counts.jvpm).toBe(5)` will encounter 40 and fail.
   - Similarly, the Notary ID regex `^not-(0[1-9]|1[0-9]|20)$` will fail on `not-21` through `not-200`.

3. **Missing Test Coverage for the 3 New Modules**:
   - `derechoAdministrativoData.ts`, `saludPrimariaData.ts`, and `ingenieriaCienciasData.ts` currently have zero assertions in Vitest.
   - Expanding them to 200 items each requires either creating 3 dedicated test suites or an omnibus specialized bank validator test to verify their structural integrity, subcategory distributions, option schemas, and KaTeX balance.

4. **Performance Consideration**:
   - Vitest currently takes 25 seconds for 214 tests (with ~8.1s in `bankValidation.test.ts` and ~3.4s in `languages.test.ts`).
   - Testing 1,400 in-memory JavaScript/TypeScript objects takes < 150 ms in V8.
   - Therefore, adding 1,400 rigorous unit checks will have negligible impact (< 1%) on CI/local test execution time.

---

## 3. Caveats

- **No Caveats on Current State**: All 5 package scripts pass with exit code 0 on branch `pruebas-piloto`.
- **Schema Heterogeneity Across Modules**:
  - `notaryExamData` and `anspAscensoData` use `{ options: { key: string; text: string }[] }` with `correctKey` or `correctAnswer`.
  - `csspHealthData`, `complianceAmlData`, `derechoAdministrativoData`, `saludPrimariaData`, and `ingenieriaCienciasData` use `{ options: { A: string; B: string; C: string; D: string } }` (or `Record<string, string>`) with `correctAnswer: 'A' | 'B' | 'C' | 'D'`.
  - Testing helpers must accommodate both representations or normalize them during validation.
- **KaTeX Delimiters**: `ingenieriaCienciasData` utilizes LaTeX math expressions (`$`, `$$`, `\sin`, `\cos`, `\sqrt`). Delimiter parity tests must verify that unescaped `$` count is even and bracket pairs balance.

---

## 4. Conclusion & Recommended Testing Plan

### 4.1 Architecture of the Testing Plan for 1,400 Specialized Questions

To ensure 100% test reliability, zero regressions, and full coverage of the 1,400 reactivos across the 7 modules, the testing plan recommends:

#### Phase A: Adaptation of Existing Tests for the 4 Existing Modules
Update hardcoded count assertions and loops in existing test files:
1. `tests/legalModules.test.ts`:
   - Update length expectation to 200: `expect(NOTARY_QUESTIONS_FROM_DATA.length).toBe(200)`.
   - Update ID format verification from `1..20` to `1..200` (`not-01`..`not-200` or `not-001`..`not-200`).
   - Update subcategory assertions: verify 40 Notarial puro, 40 LENJVOD, 40 Sucesiones, 40 Contratos y Obligaciones, 40 Mercantil y Sociedades.
2. `tests/medicalModules.test.ts`:
   - Update CSSP count to 200: `expect(CSSP_QUESTIONS_DATA).toHaveLength(200)`.
   - Update per-junta counts from 5 to 40: `expect(counts.jvpm).toBe(40)`, `jvpo`: 40, `jvpe`: 40, `jvpqf`: 40, `jvpps`: 40.
3. `tests/securityCompliance.test.ts`:
   - Update ANSP Ascenso to 200: `expect(ANSP_ASCENSO_QUESTIONS.length).toBe(200)`.
   - Update rank counts: Cabo = 66, Sargento = 67, Oficial = 67.
   - Update Compliance AML & SSF to 200: `expect(COMPLIANCE_QUESTIONS.length).toBe(200)`.
   - Update sector counts: AML = 100, Seguros = 100.
4. `tests/challengerLegalSecurity.test.ts`:
   - Update Notary length from 20 to 200; update 50% score test (100 correct) and 100% score test (200 correct).
   - Update ANSP length from 18 to 200; update rank counts (66, 67, 67); update score emulator for 200 questions.
   - Update Compliance length from 16 to 200 (100 AML, 100 Seguros).

#### Phase B: New Specialized Invariant Suite (`tests/specializedModules200.test.ts`)
Create a dedicated test file validating all 7 modules against the 6 strict invariant rules:
1. **Quantitative Integrity**:
   - Module 1 (`derechoAdministrativoData.ts`): exactly 200.
   - Module 2 (`saludPrimariaData.ts`): exactly 200.
   - Module 3 (`ingenieriaCienciasData.ts`): exactly 200.
   - Module 4 (`notaryExamData.ts`): exactly 200.
   - Module 5 (`csspHealthData.ts`): exactly 200.
   - Module 6 (`anspAscensoData.ts`): exactly 200.
   - Module 7 (`complianceAmlData.ts`): exactly 200.
   - **Grand Total**: exactly `1,400` specialized questions.
2. **ID Uniqueness**:
   - Zero duplicated IDs within any bank.
   - Zero duplicated IDs across all 7 specialized banks (global registry of 1,400 unique IDs).
   - Zero collision with the 17,640 base JSON IDs.
3. **Options Structure & Quality**:
   - Exactly 4 options (`A`, `B`, `C`, `D`) for every question.
   - Non-empty, non-whitespace option texts (> 3 characters).
   - No duplicate options within the same question (after string normalization).
4. **Answer Key Correctness**:
   - Correct answer key is strictly in `['A', 'B', 'C', 'D']`.
   - Correct answer key references an existing option.
5. **Academic & Legal Foundation**:
   - `statement`: non-empty, > 20 characters.
   - `explanation` / `clinicalExplanation` / `formalSolution`: non-empty, > 25 characters.
   - `legalBasis` / `officialGuidelineRef` / `topic`: non-empty, > 5 characters.
   - `distractorRationale`: rationale provided for every distractor.
6. **Subcategory Quota Assertions**:
   - *Derecho Administrativo*: 150 LPA and 50 Firma Electrónica MINEC.
   - *Salud Primaria*: 150 Guías Clínicas MINSAL (Dengue, HTA, DM2, IRAS, Materno-Infantil) and 50 Farmacovigilancia SRS/DNM (Rawlins-Thompson, Naranjo, Noti-FACED).
   - *Ingeniería*: 50 Álgebra Lineal, 50 Trigonometría, 50 Cónicas, 50 Física Vectorial. Verify KaTeX balance (`$` and `$$`).
   - *Notariado*: 40 Notarial puro, 40 LENJVOD, 40 Sucesiones, 40 Contratos y Obligaciones, 40 Mercantil y Sociedades.
   - *CSSP*: exactly 40 for JVPM, 40 JVPO, 40 JVPE, 40 JVPQF, 40 JVPPS.
   - *ANSP*: 66 Cabo, 67 Sargento, 67 Oficial.
   - *Compliance*: 100 AML UIF/FGR and 100 Seguros Mercantiles SSF.

---

## 5. Verification Method

To independently reproduce and verify this investigation, execute the following commands in sequence from the project root:

```bash
# 1. Verify TypeScript compiles cleanly
npm run typecheck

# 2. Verify all Vitest test suites (18 files, 214 tests pass)
npm test

# 3. Verify the 17,640 base bank in public/data/
npm run validate:bank

# 4. Verify multilingual UI and bank coverage
npm run validate:i18n

# 5. Verify production build
npm run build

# 6. Verify phone number privacy invariant (must return exit code 1 with 0 occurrences)
git grep "7943 9901"

# 7. Verify official contact number preservation
git grep "7657 4463"
```

### Invalidation Conditions
This report is invalidated if:
1. Any of the 5 scripts above fails with exit code != 0.
2. `git grep "7943 9901"` returns any occurrences (> 0).
3. `public/data/` base question count departs from 17,640.
4. Any of the 7 specialized module data files fails to adhere to its defined TypeScript interface.

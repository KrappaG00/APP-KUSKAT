# Project: Refuerzo Curricular Oficial • Educación Básica & Media (MINED)

## Architecture
- **Data Layer (`src/data/minedCurriculum/`)**:
  - `types.ts`: Strict TypeScript interfaces for Grades, Subjects, Tomos, Units, Lessons (P-S-C-E-R), and Simulator Questions.
  - `catalog.ts`: Lightweight index (< 20 KB) of 11 grades, tomos, and official MINED units for high-performance navigation and UI rendering.
  - `curriculumService.ts`: Service providing accessor methods for curriculum data, lesson detail, and 50-question unit simulator banks.
  - Grade Modules in `grades/`:
    - `grade01PrimerGrado.ts` through `grade11SegundoBach.ts`
  - `index.ts`: Unified export barrel and backwards-compatible adapters.
- **Simulator Banks & Pedagogical Density**:
  - Exactly 50 multiple choice questions (A, B, C, D) materialized across all 97 official MINED units (4,850 unit questions total) with IDs `MINED-MAT-{GRADO}-U{XX}-Q{YYY}`, balanced answer keys (12–13 per option A/B/C/D per unit), clear contextualization, and pedagogical explanations based on official MINED textbooks.
  - Every one of the 112 MINED `PscerLesson` items across all 11 grades and every one of the 40 modules / 160 topics in `src/data/technicalCoursesData.ts` contains **>= 500 genuine words** of non-duplicated exposition and **>= 5 concrete, distinct worked examples** (`examples: string[]`).
- **Ad-Only Monetization, Privacy & SEO Infrastructure**:
  - Financed strictly via non-intrusive Google AdSense (`ca-pub-4241045160320459`) with IAB `public/ads.txt`, `public/robots.txt`, `public/sitemap.xml`, JSON-LD `EducationalOrganization` schema, and Google Consent Mode v2 integrated with `CookieBanner.tsx` and `authService.ts`.
- **Presentation Layer**:
  - `src/components/AcademicReinforcementView.tsx`: Modernized interactive view with:
    - Header with pure white text: `text-white font-black drop-shadow-sm` (R1 WCAG AAA).
    - 4-cycle ergonomic selector + grade pills.
    - Subject tabs (ESMATE, ESLENGUA, Ciencias, Ciudadanía) + Tomo 1/2 switcher.
    - Unit accordions with pedagogical progress bar.
    - P-S-C-E-R lesson viewer with KaTeX formula rendering and 5 distinct worked examples per lesson.
    - 50-question interactive simulator (blocks of 10 via `ModulePaginationBar`, 10/25/50 selector, timer, tutor vs exam mode, error review).
  - `src/components/academic/AcademicReinforcementView.tsx`: Re-export bridge for absolute path safety.
- **Testing & Quality Assurance**:
  - `tests/academicReinforcement.test.ts`: Complete test suite verifying R1 to R5 (30 tests).
  - `tests/contentAndAdCompliance.test.ts`: Automated verification of >= 500 words & >= 5 distinct examples per lesson/topic, balanced A/B/C/D keys, and AdSense / Consent Mode v2 / SEO compliance.
  - `tests/academicReinforcementEmpiricalChallenger.test.ts`: 25 empirical tests.
  - `tests/challengerCurriculumStress.test.ts`: 21 stress tests.
  - Invariant scripts: `typecheck`, `test`, `validate:bank`, `validate:i18n`, `build`.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| F1 | Pure White Title (R1) | Title in `AcademicReinforcementView.tsx` with explicit `text-white font-black drop-shadow-sm` | M3 | ORIGINAL_REQUEST §R1 |
| F2 | Curricular Data Model (R2) | Modular hierarchy: Grade (11 grades) -> Subject -> Tomo -> Unit -> Lesson (P-S-C-E-R) | M1 | ORIGINAL_REQUEST §R2 |
| F3 | P-S-C-E-R Methodology & >=500w / 5 Examples (R2) | Problema inicial, Solución paso a paso, Conclusión con KaTeX, 5 Ejemplos concretos y distintos, Resuelve con pistas (>= 500 palabras por lección) | M1 | ORIGINAL_REQUEST §R2 |
| F4 | 50-Question Simulator Banks (R3) | 50 balanced multiple choice questions (A,B,C,D) across all 97 units (4,850 questions) with MINED explanations | M2 | ORIGINAL_REQUEST §R3 |
| F5 | Simulator Features (R3) | Blocks of 10 pagination, 10/25/50 selector, timer (none, 1m, 1.5m), Tutor vs Exam mode, error review | M3 | ORIGINAL_REQUEST §R3 |
| F6 | Interactive Navigation (R4) | Cycle selector, grade selector, subject/tomo tabs, unit accordion, KaTeX viewer, real-time search | M3 | ORIGINAL_REQUEST §R4 |
| F7 | Unit & E2E Testing Suite (R5) | Automated test suites in `tests/academicReinforcement.test.ts` and `tests/contentAndAdCompliance.test.ts` | E2E-Track / M4 | ORIGINAL_REQUEST §R5 |
| F8 | Base Bank Invariant (R5) | 17,640 base questions in `public/data/` intact (`npm run validate:bank`) | M4 | ORIGINAL_REQUEST §R5 |
| F9 | i18n Invariant (R5) | 100% UI translation coverage across 7 locales (`npm run validate:i18n`) | M4 | ORIGINAL_REQUEST §R5 |
| F10 | Zero Private Phones & Local Git (R5) | 0 occurrences of private phone (`git grep "7943 9901"`) and no git push on `pruebas-piloto` | M4 | ORIGINAL_REQUEST §R5 |
| F11 | AdSense, Consent Mode v2 & SEO | `public/ads.txt`, `public/robots.txt`, `public/sitemap.xml`, Consent Mode v2, and JSON-LD schema | M5 | AUDIT_REPORT |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Curricular Data Architecture | Data models, catalog, cycle modules (1° Básica a 2° Bachillerato), P-S-C-E-R lessons with KaTeX in `src/data/minedCurriculum/` | none | DONE |
| M2 | 50-Question Simulator Banks | Complete banks of 50 validated questions per unit with explanations in `src/data/minedCurriculum/` | M1 | DONE |
| M3 | UI Modernization & White Header | Header R1, 4-cycle navigation, unit accordions, KaTeX viewer, 50-Q simulator UI in `AcademicReinforcementView.tsx` + bridge | M1, M2 | DONE |
| M4 | Final Milestone (E2E & Verification) | Pass 100% of E2E/unit tests, typecheck (0 errors), npm test (100%), validate:bank (17,640), validate:i18n (100%), build | M3, E2E-Track | DONE |
| E2E | E2E Testing Track | Requirement-driven test suite `tests/academicReinforcement.test.ts` (Tiers 1-4) + `TEST_READY.md` | none | DONE |

## Interface Contracts
### Data Layer ↔ UI Component
- `curriculumService.getGrades(): AcademicGradeInfo[]`
- `curriculumService.getGradeDetail(gradeId: string): GradeCurriculumDetail`
- `curriculumService.getUnitLessons(gradeId: string, unitId: string): MinedLesson[]`
- `curriculumService.getUnitQuestions(gradeId: string, unitId: string): UnitQuestion[]`
- `curriculumService.getUnitSimulatorQuestions(gradeId: string, unitId: string): UnitQuestion[]`
- `ACADEMIC_GRADES`: Backwards-compatible export array matching legacy schema.

## Code Layout
- `src/data/minedCurriculum/`: Core curricular datasets and services.
  - `types.ts`
  - `catalog.ts`
  - `curriculumService.ts`
  - `grades/`: `grade01PrimerGrado.ts` through `grade11SegundoBach.ts`
  - `index.ts`
- `src/components/AcademicReinforcementView.tsx`: Main user-facing view.
- `src/components/academic/AcademicReinforcementView.tsx`: Re-export bridge.
- `tests/academicReinforcement.test.ts`: Comprehensive test suite.

# Detailed Plan — Technical Courses Expansion & Curricular Densification

## Goal
Expand and densify 10 vocational and technical courses in KUSKAT to 40 pedagogical hours per course (4 modules of 10h each, 400h total), grounded in Salvadoran laws, standards, workshop formulas, and interactive self-evaluation, preserving all project invariants.

## Phases

### Phase 0: Survey & Scope Mapping
- Spawn 3 parallel Explorers:
  - Explorer 1: Inspect `TechnicalCoursesView.tsx`, existing courses, data structures, and styling.
  - Explorer 2: Analyze Salvadoran normative frameworks (INCAF Dec. Leg. 896, MTPS D.E. 86 / LGPRLT Dec. Leg. 254, SIGET, MINSAL Dec. Leg. 955, MARN Dec. Leg. 233, MAG, ANDA, OSARTEC Dec. Leg. 805) and required workshop formulas across all 10 courses.
  - Explorer 3: Inspect testing framework, vitest config, typecheck scripts, existing test patterns, and invariant validation scripts.
- Consolidate findings into root `PROJECT.md`.

### Phase 1: Milestone 1 — Data Layer & 10 Courses Curriculum
- Decouple data from view into `src/data/technicalCoursesData.ts`.
- Structure rich types: `TechnicalCourse`, `CourseModule`, `FormulaItem`, `LegalReference`, `QuizQuestion`, `QuizOption`.
- Fully populate 10 technical courses with exactly 4 modules x 10 hours = 40 hours each.
- Include legal articles, workshop formulas, safety procedures (D.E. 86), and >=3 quiz questions per module with explanations.

### Phase 2: Milestone 2 — UI Modernization (`TechnicalCoursesView.tsx`)
- Retrocompatible export/import of courses data.
- Modular navigation (tabs/accordion) for exploring modules.
- Salvadoran normative framework badge card (SIGET, MTPS, MINSAL, MARN, MAG, ANDA, OSARTEC, INCAF).
- Interactive workshop formula viewer.
- Interactive quiz simulator with immediate feedback and legal/technical justification.
- Category filters and real-time search.

### Phase 3: Milestone 3 — Comprehensive Test Suite (`tests/technicalCourses.test.ts`)
- Automated verification of:
  - 10 courses exactly.
  - 4 modules of 10h each per course (40h each, 400h total).
  - >=3 quiz questions per module with valid answers (A/B/C/D), correct keys, and explanations.
  - Legal citations in every module.
  - Technical formulas in every module.
  - Integration with existing tests.

### Phase 4: Verification & Multi-Agent Gate
- Reviewers (2) and Challengers (2) assess correctness, types, and usability.
- Forensic Auditor checks integrity and authentic implementation (no hardcoded shortcuts).
- Comprehensive validation suite:
  - `npm run typecheck`
  - `npm test`
  - `npm run validate:bank`
  - `npm run validate:i18n`
  - `npm run build`
  - `git grep "7943 9901"` = 0

### Phase 5: Handoff & Sentinel Notification
- Synthesize all findings and gate results into `handoff.md`.
- Report to Sentinel.

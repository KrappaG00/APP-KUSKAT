# Progress — explorer_test_invariants

Last visited: 2026-10-31T05:58:00Z

## Status: Investigation Completed — Ready for Handoff

- [x] Inspect package.json and test configuration (Vitest 4.1.11, vite.config.ts, tsc, scripts)
- [x] Run baseline verification commands:
  - `npm test`: 32 test files passed, 457 tests passed, 0 failures.
  - `npm run typecheck`: 0 errors.
  - `npm run build`: built in 24.01s, 0 errors.
  - `npm run validate:bank`: 17,640 base questions verified, 0 errors, 0 warnings.
  - `npm run validate:i18n`: 7 languages verified, 100% UI coverage (117/117 keys), 0 errors.
- [x] Invariants verification:
  - 17,640 base questions in `public/data/` (UES 7500, ESCALAFON 3300, AVANZO 3000, ASD 2190, ENA 1400, ANSP 250) verified via `validate:bank` and `tests/bankValidation.test.ts`.
  - Exactly 200 Notariado questions (`not-01` to `not-200`) in `src/data/notaryExamData.ts`.
  - Zero occurrences of private phone "7943 9901" in `src/` and `public/`.
  - Official WhatsApp `+503 7657 4463` present across 18 source locations in `src/`.
  - Encabezado "Refuerzo Académico (1° a 9° Grado y Bachillerato)" with CSS class `text-white` verified in `src/components/AcademicReinforcementView.tsx:822`.
  - Ad-supported model verified (Google AdSense, ads.txt, robots.txt, 0 paywalls/subscriptions).
- [x] Curriculum data structure examination for R4 design:
  - 97 official units across 11 grades.
  - Currently 112 lessons in `src/data/minedCurriculum/grades/`.
  - Identified filler boilerplate in `gradeHelpers.ts` (`buildFiveDistinctExamples`, enriched text strings).
  - Designed automated test for R4: substantive word counting algorithm, step-by-step example verification, boilerplate filter, and wiring into `tests/` (`npm test`).
- [ ] Write handoff.md following 5-component protocol.
- [ ] Send completion message to parent.

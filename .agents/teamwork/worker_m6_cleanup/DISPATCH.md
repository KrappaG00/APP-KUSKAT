# Dispatch: Worker M6 — Definitive Helpers Cleanup & KaTeX Integrity

## Objective
Finalize Milestone M6 by eliminating all generic placeholder templates and boilerplate from `src/data/minedCurriculum/grades/gradeHelpers.ts`, and ensuring 100% KaTeX delimiter balance across all lessons.

## Scope of Work
1. `src/data/minedCurriculum/grades/gradeHelpers.ts`:
   - Delete `buildFiveDistinctExamples` entirely.
   - Clean `createPscerLesson`: remove the fallback branches and synthetic paragraphs ("Contexto pedagógico...", "Desarrollo metodológico...", "Síntesis formal...").
   - `createPscerLesson` should directly return the clean `problema`, `solucion`, `conclusion`, `examples` (from `customExamples`), and `resuelve`.
   - Preserve `generate50UnitQuestions`, `ensureDistinctOptions`, `balanceQuestionOptions`, and `deterministicSeed` intact.
2. Check `src/data/minedCurriculum/grades/grade02SegundoGrado.ts`:
   - Inspect `mined-mat-2g-u02-l01` and verify KaTeX delimiter balance (even count of `$`). Fix any unpaired `$` or currency symbols if found.
3. Verification:
   - Run `npm run typecheck` (must pass with 0 errors).
   - Run `npx vitest run tests/academicReinforcement.test.ts tests/contentAndAdCompliance.test.ts tests/challengerCurriculumStress.test.ts` (all tests must pass).

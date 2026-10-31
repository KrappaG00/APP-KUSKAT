# Dispatch: Worker M5 — Educación Media (1° y 2° Bachillerato)

## Objective
Expand and deepen all lessons in Educación Media (16 official units total) based on the official MINED-ESMATE curriculum:
- `src/data/minedCurriculum/grades/grade10PrimerBach.ts` (8 units, units 1B-U01 to 1B-U08)
- `src/data/minedCurriculum/grades/grade11SegundoBach.ts` (8 units, units 2B-U01 to 2B-U08)

## Mandatory Requirements (R1, R3, R4)
1. **Substantive Content (>= 500 words per lesson/topic)**:
   - Each lesson must provide genuine mathematical explanations and pedagogical reasoning.
   - Word count of substantive text (excluding LaTeX code, repeated titles, navigation, and metadata) must be >= 500 words.
   - Structure:
     - `problema`: Rich real-world or mathematical situation (60–90 words).
     - `solucion`: Detailed analytical step-by-step resolution (120–160 words).
     - `conclusion`: Rigorous formalization with balanced KaTeX formulas (80–120 words).
2. **At least 5 Solved Step-by-Step Examples per Lesson**:
   - Pass `customExamples`: an array of at least 5 distinct strings (`customExamples.length >= 5`).
   - Each example must be a distinct, step-by-step solved problem directly pertinent to the official ESMATE lesson theme (40–80 words each, demonstrating procedural workflow: "Paso 1: ... Paso 2: ... Solución: ...").
   - ZERO template placeholders, ZERO synthetic department swapping.
3. **Preservation of Simulators (R3)**:
   - Preserve all `QuestionArchetype[]` and `generate50UnitQuestions` intact.
   - Do NOT delete or modify question generation logic.
4. **Validation**:
   - Run `npm run typecheck` (0 errors).
   - Run `npx vitest run tests/academicReinforcement.test.ts tests/contentAndAdCompliance.test.ts` (all tests passing).

## 2026-10-31T13:20:00Z
Task:
Deepen all lessons in 1° Bachillerato and 2° Bachillerato with genuine MINED-ESMATE pedagogical content:
1. Each lesson must have >= 500 words of substantive conceptual text (problema: 60-90 words, solucion: 120-160 words, conclusion: 80-120 words with KaTeX).
2. Each lesson must pass `customExamples` with an array of AT LEAST 5 distinct, solved step-by-step examples (40-80 words each, demonstrating clear mathematical procedure: Paso 1, Paso 2, Solución).
3. Do NOT use fake department names or template swapping; write real mathematical problems matching ESMATE textbooks.
4. Keep all `QuestionArchetype[]` and `generate50UnitQuestions` completely intact.
5. Verify your changes by running `npm run typecheck` and `npx vitest run tests/academicReinforcement.test.ts tests/contentAndAdCompliance.test.ts`.

## 2026-10-31T13:45:06Z
Milestones M2, M3, and M4 are now 100% complete!
Only Educación Media (`grade10PrimerBach.ts` and `grade11SegundoBach.ts`) remains. Note that lesson `mined-mat-2b-u05-l01` is at 496 words (requires >= 500).
Please finalize the expansion of all 16 units in 1B and 2B with >= 500 genuine words and 5 step-by-step solved examples per lesson, run `npm run typecheck` and Vitest tests, write `handoff.md`, and report completion.


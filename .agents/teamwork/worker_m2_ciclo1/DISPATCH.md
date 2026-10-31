# Dispatch: Worker M2 — Primer Ciclo (1° Grado, 2° Grado, 3° Grado)

## Objective
Expand and deepen all lessons in Primer Ciclo (27 official units total) based on the official MINED-ESMATE curriculum:
- `src/data/minedCurriculum/grades/grade01PrimerGrado.ts` (8 units, units 1G-U01 to 1G-U08)
- `src/data/minedCurriculum/grades/grade02SegundoGrado.ts` (9 units, units 2G-U01 to 2G-U09)
- `src/data/minedCurriculum/grades/grade03TercerGrado.ts` (10 units, units 3G-U01 to 3G-U10)

## Mandatory Requirements (R1, R3, R4)
1. **Substantive Content (>= 500 words per lesson/topic)**:
   - Each lesson must provide genuine mathematical explanations and pedagogical reasoning.
   - Word count of substantive text (excluding LaTeX code, repeated titles, navigation, and metadata) must be >= 500 words.
   - Structure:
     - `problema`: Rich real-world or pedagogical situation (60–90 words).
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


## 2026-10-31T13:19:30Z
Dispatched to worker_m2_ciclo1. Exclusive ownership: `grade01PrimerGrado.ts`, `grade02SegundoGrado.ts`, `grade03TercerGrado.ts`.

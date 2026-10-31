# Dispatch: Worker M4 — Tercer Ciclo (7° Grado, 8° Grado, 9° Grado)

## Objective
Expand and deepen all lessons in Tercer Ciclo (24 official units total) based on the official MINED-ESMATE curriculum:
- `src/data/minedCurriculum/grades/grade07SeptimoGrado.ts` (8 units, units 7G-U01 to 7G-U08)
- `src/data/minedCurriculum/grades/grade08OctavoGrado.ts` (8 units, units 8G-U01 to 8G-U08)
- `src/data/minedCurriculum/grades/grade09NovenoGrado.ts` (8 units, units 9G-U01 to 9G-U08)

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


## 2026-10-31T13:19:50Z
You are an implementation worker (teamwork_worker).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m4_ciclo3\
Authoritative user request file: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
Your dispatch instructions: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m4_ciclo3\DISPATCH.md
Implementation plan and curriculum mapping: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\orchestrator\plan.md (Read Section 3 for 7° Grado, 8° Grado, 9° Grado)

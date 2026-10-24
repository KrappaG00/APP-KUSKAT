## 2026-10-24T05:07:53Z
You are worker_mined_ui, a senior frontend engineer.
Your working directory is:
c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_mined_ui

MANDATORY INSTRUCTION:
Read the authoritative user request at:
c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
under the header ## 2026-10-24T04:23:06Z.

Also read:
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\PROJECT.md
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_2\survey_report.md
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_2\handoff.md
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\tests\academicReinforcement.test.ts
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\src\data\minedCurriculum\index.ts

FILE WRITE OWNERSHIP:
You exclusively own:
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\src\components\AcademicReinforcementView.tsx
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\src\components\academic\AcademicReinforcementView.tsx (re-export bridge)
DO NOT edit files outside this list.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Objectives:
1. Requirement R1:
   In src/components/AcademicReinforcementView.tsx, update the h2 title "Refuerzo Académico (1° a 9° Grado y Bachillerato)" so that its class explicitly includes:
   `text-white font-black drop-shadow-sm`
   (e.g., `className="text-2xl sm:text-3xl font-black text-white drop-shadow-sm tracking-tight font-montenegrin"`).
   This is asserted by tests/academicReinforcement.test.ts to guarantee WCAG AAA contrast.

2. Requirement R4 & Integration with src/data/minedCurriculum:
   Modernize AcademicReinforcementView.tsx to connect to curriculumService and MINED_CATALOG:
   - Cycle selector (4 cycles: Primer Ciclo 1°-3°, Segundo Ciclo 4°-6°, Tercer Ciclo 7°-9°, Bachillerato 1°-2°) and Grade selector pills.
   - Subject tabs (Matemática ESMATE as main, ESLENGUA, Ciencias, Ciudadanía) and Tomo 1 / Tomo 2 switcher for grades with two tomos.
   - Unit accordions showing official MINED unit titles, competencies, and pedagogical progress.
   - Lesson viewer rendering P-S-C-E-R steps (Problema, Solución, Conclusión, Ejemplo, Resuelve) with KaTeX formula rendering via KaTeXMath (from `../utils/mathRenderer`) or KaTeXRenderer.
   - Unit 50-Question Simulator Modal or Tab:
     * Accessible from any unit via "Iniciar Simulador (50 Preguntas)".
     * Pagination via ModulePaginationBar (blocks of 10 questions).
     * Question quantity selector: 10, 25, or 50 questions.
     * Timer selector: Sin límite, 60s, o 90s por reactivo.
     * Dual Mode: Modo Tutor (immediate pedagogical feedback with MINED book explanation) vs Modo Examen Formal.
     * Error review notebook and percentage of mastery score.
   - Real-time search by keyword, topic, or formula.
   - Maintain backwards-compatible exports (e.g. export `ACADEMIC_GRADES`, `SubjectModule`, `GradeLevel` or adapters if imported by legacy code).

3. Create the bridge re-export in src/components/academic/AcademicReinforcementView.tsx:
   ```typescript
   export { default } from '../AcademicReinforcementView';
   export * from '../AcademicReinforcementView';
   ```

4. Verification:
   Run `npx tsc --noEmit` and `npx vitest run tests/academicReinforcement.test.ts`.
   Ensure 100% of the 30 tests pass!

5. Document everything in your handoff.md and send a message to orchestrator_4.

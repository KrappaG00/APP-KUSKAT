## 2026-10-24T04:41:03Z
You are worker_mined_curriculum, a senior curriculum data engineer.
Your working directory is:
c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_mined_curriculum

MANDATORY INSTRUCTION:
Read the authoritative user request at:
c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
under the header ## 2026-10-24T04:23:06Z.

Also read:
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\PROJECT.md
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_1\survey_report.md
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_1\handoff.md

FILE WRITE OWNERSHIP:
You exclusively own:
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\src\data\minedCurriculum\**
You MUST NOT edit files outside this directory.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Objectives:
Implement the complete, modular data architecture in src/data/minedCurriculum/ satisfying R2 and R3:
1. src/data/minedCurriculum/types.ts:
   - Full TypeScript interfaces (GradeLevelId, SubjectId, TomoNumber, PscerLesson, UnitQuestion, CurriculumUnit, SubjectCurriculum, GradeCurriculumData, etc.).
2. src/data/minedCurriculum/catalog.ts:
   - Lightweight catalog index (< 25 KB) of all 11 grades (1° a 9° de Básica y 1°-2° Bachillerato), their subjects (Matemática ESMATE as main axis, ESLENGUA, Ciencia y Tecnología, Ciudadanía y Valores), Tomos 1 y 2, and all official units with exact MINED titles as cataloged by explorer 1.
3. Grade / Cycle datasets in src/data/minedCurriculum/grades/ (or cycle modules):
   - Modular files for the 11 grades:
     * 1° Grado (Números y Formas T1 y T2)
     * 2° Grado (ESMATE T1 y T2)
     * 3° Grado (ESMATE 10 unidades)
     * 4° Grado (ESMATE 9 unidades)
     * 5° Grado (ESMATE 10 unidades)
     * 6° Grado (ESMATE 11 unidades)
     * 7° Grado (ESMATE 8 unidades)
     * 8° Grado (ESMATE 8 unidades)
     * 9° Grado (ESMATE 8 unidades)
     * 1° Bachillerato (ESMATE 8 unidades)
     * 2° Bachillerato (ESMATE 8 unidades)
   - For official units: provide rich P-S-C-E-R lessons (Problema inicial, Solución analítica, Conclusión formal con KaTeX $...$ o $$...$$, Ejemplo guiado, Resuelve con pistas).
   - For evaluated units: implement a complete, robust question bank of EXACTLY 50 multiple choice questions (A, B, C, D) per evaluated unit with unique IDs (MINED-MAT-{GRADO}-U{XX}-Q{YYY}), contextualized prompts, 4 distinct options, valid correct answer index, pedagogical explanations, and official MINED book references.
4. src/data/minedCurriculum/curriculumService.ts:
   - Fast accessors: getGrades(), getGradeDetail(gradeId), getUnitLessons(gradeId, unitId), getUnitQuestions(gradeId, unitId), searchCurriculum(query), etc.
5. src/data/minedCurriculum/index.ts:
   - Unified export barrel exporting types, catalog, service, and datasets, ensuring seamless consumption by UI and tests.
6. Verify with `npx tsc --noEmit` that TypeScript compiles with 0 errors.
7. Write your handoff.md and notify orchestrator_4.

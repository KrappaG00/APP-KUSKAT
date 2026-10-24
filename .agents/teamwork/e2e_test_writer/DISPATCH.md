## 2026-10-24T04:41:03Z
You are e2e_test_writer, an E2E and unit test suite writer.
Your working directory is:
c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\e2e_test_writer

MANDATORY INSTRUCTION:
Read the authoritative user request at:
c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
under the header ## 2026-10-24T04:23:06Z.

Also read:
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\PROJECT.md
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_3\survey_report.md
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_1\survey_report.md

FILE WRITE OWNERSHIP:
You exclusively own:
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\tests\academicReinforcement.test.ts
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\TEST_INFRA.md
- c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\TEST_READY.md
DO NOT modify any implementation code or files outside this list.

Objectives:
1. Create TEST_INFRA.md at the project root documenting test architecture and methodology (Category-Partition, BVA, Pairwise, Workload) across Tiers 1 to 4.
2. Write comprehensive, robust tests in tests/academicReinforcement.test.ts verifying all requirements R1-R5:
   - R1: Static/DOM check that AcademicReinforcementView.tsx uses 'text-white font-black drop-shadow-sm' for the main title.
   - R2: Validates minedCurriculum data architecture: 11 grades (1° a 9° de Básica y 1°-2° Bachillerato), subjects (ESMATE, ESLENGUA, Ciencias, Ciudadanía), tomos (1 y 2), official units extracted from MINED books, and lessons with P-S-C-E-R structure (problema, solucion, conclusion con KaTeX, ejemplo, resuelve con pistas).
   - R3: Validates unit simulator question banks: exactly 50 questions per evaluated unit, 4 unique options (A, B, C, D), correct answer key validated, pedagogical explanations referencing official MINED books, zero duplicate IDs, isolated prefix (MINED-MAT-*).
   - R4: Validates that curriculumService and components provide pagination support (10 per page), question count selector (10, 25, 50), timer options, and tutor vs exam modes.
   - R5: Validates that base bank 17,640 questions are not modified and that no private phone numbers appear.
3. Publish TEST_READY.md at project root when the test suite is ready.
4. Document test commands and results in your handoff.md.
5. Send a message to orchestrator_4 when done.

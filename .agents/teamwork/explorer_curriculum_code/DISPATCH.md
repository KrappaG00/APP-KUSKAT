# Dispatch: Curriculum Codebase Architecture Explorer

## Objective
Investigate the current implementation of `src/data/minedCurriculum/` in the APP-KUSKAT codebase.
Map out how lessons, units, topics, examples, helper utilities, and question generators are structured.

## Scope of Investigation
1. Examine `src/data/minedCurriculum/` layout:
   - Identify all files and directories for grades 1 to 9 and Bachillerato 1 to 2.
   - Count the total number of units and how they are defined across grades (confirm 97 units).
   - How topics/lessons are defined within each unit (data structures, interfaces, fields).
2. Examine `src/data/minedCurriculum/grades/gradeHelpers.ts`:
   - What helper functions exist?
   - What parameterized templates or placeholder texts are currently used?
   - How do lessons consume `gradeHelpers.ts`?
3. Examine `generate50UnitQuestions`:
   - Where is it defined and how does it generate questions for each unit?
   - How to ensure expanding lesson content does NOT break `generate50UnitQuestions` or any simulators?
4. How lesson content (explanations, step-by-step solved examples) is rendered in the UI:
   - Where in `src/` are minedCurriculum units/lessons displayed?
   - How are examples, markdown, latex, or html formatted and displayed?
5. Inventory of files that will be affected by expanding all 97 units.

## Key Deliverables
Produce `handoff.md` in your working directory with concrete file paths, interfaces, and architecture details.

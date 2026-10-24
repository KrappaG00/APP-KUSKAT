## 2026-10-24T00:01:57Z
You are Worker M2 (UI Modernization & Interactive Components).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m2
Read ORIGINAL_REQUEST.md at: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
Read PROJECT.md at: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\PROJECT.md
Read Explorer 1 analysis at: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_1\analysis.md
Read `src/data/technicalCoursesData.ts` to see available types and data.

FILE OWNERSHIP:
You EXCLUSIVELY own:
- `src/components/TechnicalCoursesView.tsx`
- `src/views/TechnicalCoursesView.tsx` (create as re-export bridge pointing to `../components/TechnicalCoursesView`)
Do NOT edit other source files.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

TASK:
1. In `src/components/TechnicalCoursesView.tsx`:
   - Import `TECHNICAL_COURSES`, `SALVADORAN_NORMATIVE_INSTITUTIONS`, and types from `../data/technicalCoursesData`.
   - Re-export `TECHNICAL_COURSES` and `type TechnicalCourse` from `src/components/TechnicalCoursesView.tsx` so all existing imports maintain 100% backward compatibility.
   - Modernize the component to render the 10 vocational courses (40h each, 400h total).
   - Implement modular exploration: allow selecting/inspecting the 4 modules (10h each) per course.
   - Implement Salvadoran legal framework badge card with decrees and institutional badges (SIGET, MTPS, MINSAL, MARN, MAG, ANDA, OSARTEC, INCAF).
   - Implement workshop formulas viewer displaying expressions, variables, units, and practical examples.
   - Implement interactive formative quiz simulator per module with immediate feedback, option selection, score/result indication, and legal/technical justification display.
   - Preserve dynamic category filtering and real-time search.
2. In `src/views/TechnicalCoursesView.tsx`:
   - Create the re-export bridge: export default and named exports from `../components/TechnicalCoursesView`.
3. Verify your changes:
   - Run `npm run typecheck`
   - Run `npx vitest run tests/technicalCourses.test.ts`
4. Write your report in `handoff.md`, update `progress.md`, and send a message with your handoff.

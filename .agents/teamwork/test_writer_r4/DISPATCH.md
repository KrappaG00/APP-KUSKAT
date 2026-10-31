# Dispatch: Test Writer — Requirement R4 Automated Compliance Suite

## Objective
Implement `tests/curriculumR4Compliance.test.ts` to programmatically verify that every lesson across all 97 MINED-ESMATE units meets:
1. At least 500 words of substantive conceptual text (excluding LaTeX code/commands, metadata, navigation, repeated titles, and duplicate paragraphs).
2. At least 5 distinct solved step-by-step examples with procedural depth (>= 25 words each).
3. Zero generic filler/boilerplate sentences.
4. Total units count is exactly 97.

## Scope of Work
- Create and own `tests/curriculumR4Compliance.test.ts`.
- Integrate seamlessly into Vitest (`npm test`).
- Run `npm test`, `npm run typecheck`, and `npm run build` to verify 100% pass.


## 2026-10-31T14:00:23Z
You are a specialized test writer (teamwork_test_writer).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\test_writer_r4\
Authoritative user request file: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
Your dispatch instructions: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\test_writer_r4\DISPATCH.md
Reference design: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_test_invariants\handoff.md (Read Section 3 for the R4 test algorithm design)

Task:
Implement the automated content compliance test suite in `tests/curriculumR4Compliance.test.ts`.
It must verify:
1. `getAllUnits()` returns exactly 97 official units.
2. Every single lesson in every unit satisfies >= 500 words of substantive conceptual text (using the substantive word counting algorithm from `explorer_test_invariants/handoff.md § 3.2` that strips LaTeX `$$...$$`, `$...$`, commands `\frac`, etc., metadata, repeated titles, navigation, and duplicate paragraphs).
3. Every single lesson has at least 5 distinct solved step-by-step custom examples, each with procedural depth (>= 25 words).
4. Zero generic filler/boilerplate sentences across all lessons.
5. Verification:
   - Run `npx vitest run tests/curriculumR4Compliance.test.ts`
   - Run `npm run typecheck`
   - Run `npm test`
   All must pass with 0 errors!

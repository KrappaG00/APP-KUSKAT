## 2026-10-31T17:31:05Z
You are Worker M2 (Legal & Litigation Worker).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m2_legal_gen2

Read these files first:
1. c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
2. c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\orchestrator_reinforcement_gen2\SCOPE.md
3. c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_legal_r2\handoff.md

Your exclusive write ownership:
- `src/data/oralLitigationData.ts`
- `src/components/OralLitigationSimulatorView.tsx`
- `src/data/constitucionalJurisprudenciaData.ts`
- `src/components/ConstitutionLawView.tsx`
- `tests/legalReinforcementM2.test.ts`

Your mission:
1. Examine existing `src/data/oralLitigationData.ts` and `src/data/constitucionalJurisprudenciaData.ts`. Substantial work has already been authored. Verify that:
   - `ORAL_LITIGATION_THEMATIC_UNITS` contains 5 units (Teoría del Caso, Interrogatorio Directo, Contrainterrogatorio, Objeciones Arts. 209-212 PrPn, Impugnación y Evidencia Material). Each unit must have >= 500 substantive words and >= 5 step-by-step solved courtroom dialogue cases (25 total).
   - Preserves all 8 existing `OBJECTION_DEFINITIONS` and 10 `COURTROOM_DRILLS`.
   - `CONSTITUTION_LAW_BRANCHES` contains 10 branches (Constitucional, Penal, Procesal, Administrativo, Tributario, Internacional Público, Civil, Mercantil, Laboral, Familia). Each branch must have >= 500 substantive words and >= 5 concrete solved cases (50 total).
   - `AMPARO_STEP_GUIDE` (5 steps) and `CONSTITUTIONAL_CASES` (10 landmark rulings) and procedural guides for Hábeas Corpus & Inconstitucionalidad are complete.
2. Ensure UI integration:
   - `src/components/OralLitigationSimulatorView.tsx`: Provide tabs/navigation allowing users to view both the interactive drills / objection catalog AND the full thematic units with solved courtroom dialogue cases.
   - `src/components/ConstitutionLawView.tsx`: Provide intuitive tabs/sections for the 10 law branches, solved jurisprudence cases, and procedural workshops (Amparo, Hábeas Corpus, Inconstitucionalidad).
3. Create automated test suite in `tests/legalReinforcementM2.test.ts` verifying:
   - All 5 litigation units exist with >= 500 words and >= 5 solved cases each.
   - All 10 law branches exist with >= 500 words and >= 5 solved cases each.
   - Preserves original 200 Notary questions, 10 drills, 10 CSJ cases, and 5 Amparo steps.
4. Run verification commands:
   - `npm run typecheck` (must pass with 0 errors)
   - `npx vitest run tests/legalReinforcementM2.test.ts`
   - `npx vitest run tests/legalModules.test.ts`
5. Mandatory Integrity Warning:
> DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Document your work in `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m2_legal_gen2\handoff.md` and send completion message via `send_message`.

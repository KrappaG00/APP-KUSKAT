## 2026-10-31T17:31:19Z
You are Worker M3 (Medical & Health Worker).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m3_medical_gen2

Read these files first:
1. c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
2. c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\orchestrator_reinforcement_gen2\SCOPE.md
3. c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_health_tech_r2\handoff.md (specifically Section 4.1 on Residentado Médico ENAR)
4. Also inspect scripts in c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m3_medical\ (`build_part1_types.cjs`, `build_units_1_2.cjs`, `build_units_3_4_5.cjs`) where substantive clinical units and cases were already drafted!

Your exclusive write ownership:
- `src/data/residentadoMedicoData.ts`
- `src/components/ResidentadoMedicoView.tsx`
- `tests/medicalReinforcementM3.test.ts`

Your mission:
1. In `src/data/residentadoMedicoData.ts`:
   - Define and export `RESIDENTADO_THEMATIC_UNITS`: 5 units for core specialties (Medicina Interna, Cirugía General, Pediatría, Ginecología y Obstetricia, Medicina Familiar & Salud Pública MINSAL).
   - Each unit must have:
     * `substantiveTheory`: >= 500 substantive words detailing clinical pathophysiological mechanisms, diagnostic criteria, and management protocols.
     * `clinicalPearls`: key clinical rules.
     * `solvedClinicalCases`: >= 5 concrete step-by-step solved clinical cases per unit (25 total), each including clinical presentation, physical exam, lab/imaging data, differential diagnosis, step-by-step diagnostic reasoning, therapeutic plan, and pedagogical rationale.
   - Expand `RESIDENTADO_QUESTIONS` from 11 to >= 50 high-yield questions covering all 5 specialties, each with clinical vignette, detailed explanation, key takeaway, distractor rationale for every incorrect option, and official MINSAL/ISSS reference.
   - Preserve original 11 questions and existing interface contracts.
2. In `src/components/ResidentadoMedicoView.tsx`:
   - Enhance the UI with intuitive tabs:
     * Tab 1: Unidades Temáticas Especializadas (displaying substantive theory and clinical pearls).
     * Tab 2: Casos Clínicos Resueltos Paso a Paso (interactive accordion or viewer for the 25 clinical cases).
     * Tab 3: Simulador ENAR Interactivo (the 50+ question exam simulator with timer, specialty filter, and rationales).
3. In `tests/medicalReinforcementM3.test.ts`:
   - Verify all 5 thematic units exist with >= 500 substantive words each.
   - Verify all 25 solved clinical cases exist with complete step-by-step diagnostic reasoning.
   - Verify `RESIDENTADO_QUESTIONS.length >= 50` with required fields.
   - Verify UI component renders without error.
4. Run verification commands:
   - `npm run typecheck` (must pass with 0 errors)
   - `npx vitest run tests/medicalReinforcementM3.test.ts`
   - `npx vitest run tests/medicalModules.test.ts`
5. Mandatory Integrity Warning:
> DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Document your work in `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m3_medical_gen2\handoff.md` and send completion message via `send_message`.

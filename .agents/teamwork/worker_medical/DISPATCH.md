## 2026-10-23T15:02:47Z
You are a Worker subagent (worker_medical).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_medical
The authoritative user request is at: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
Read ORIGINAL_REQUEST.md first.
Also read PROJECT.md at: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\PROJECT.md
And review the health explorer handoff at: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_health\handoff.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your exclusive write boundaries:
- `src/data/csspHealthData.ts`
- `src/data/residentadoBranchingCases.ts`
- `src/components/ResidentadoMedicoView.tsx`
- `tests/medicalModules.test.ts`
- Files in your working directory (.agents/teamwork/worker_medical/)
DO NOT modify any other files.

Your mission:
1. Expand `src/data/csspHealthData.ts` to exactly 25 comprehensive items in `CSSP_QUESTIONS_DATA` (exactly 5 for each Junta: `jvpm`, `jvpo`, `jvpe`, `jvpqf`, `jvpps`).
   - Follow the detailed item mapping in `explorer_survey_health/handoff.md` §2.1.
   - Include genuine Salvadoran legal and sanitary foundations: Código de Salud (Arts. 40, 42, 43, 48, 102, 136-138), Código Penal Art. 146 & 175, CPP Art. 265, Ley Crecer Juntos Art. 16, Ley de Medicamentos, RTS 13.01.01:14 (Desechos bioinfecciosos), normas de la DNM, CNFV, bioética, consentimiento informado, farmacovigilancia, Buenas Prácticas de Dispensación (BPD), y deber de denuncia.
   - Strictly satisfy the `CsspQuestion` TypeScript interface with keys 'A', 'B', 'C', 'D', `correctAnswer`, `explanation`, and `distractorRationale`.
2. Update `src/data/residentadoBranchingCases.ts` to exactly 4 sequential branching cases (`BRANCHING_CLINICAL_CASES`):
   - Caso 1: Medicina Interna (`branching-case-iam-vd`) — IAM VD y FV primaria.
   - Caso 2: Pediatría (`branching-case-sepsis-pediatrica`) — Sepsis Grave / PALS Bloom.
   - Caso 3: Gineco-Obstetricia (`branching-case-preeclampsia-hellp`) — Retitle and refine to: "Código Naranja — Preeclampsia Severa y Eclampsia Inminente". Incorporate:
     * Esquema de Zuspan intravenoso con sulfato de magnesio al 20% (4g carga en 15-20 min, infusión 1-2 g/h).
     * Vigilancia de toxicidad: reflejos rotulianos presentes, FR >= 12 rpm y diuresis > 30 mL/h con sonda Foley.
     * Antídoto: Gluconato de Calcio al 10% (1g IV lento en 3-5 min).
     * Metas tensionales con Labetalol 20mg IV o Hidralazina 5mg IV.
     * Interrupción del embarazo (cesárea de urgencia).
   - Caso 4: Cirugía General y Trauma (`branching-case-trauma-choque-iv`):
     * Título: "Politraumatizado con Choque Hemorrágico Grado IV (ATLS 10.ª Edición)".
     * Etapa 1: Triaje y reanimación: PTM / MTP en razón 1:1:1 (CGR : PFC : Plaquetas), Ácido Tranexámico 1g IV en las primeras 3 horas, reanimación hipotensiva permisiva (meta PAS 80-90 mmHg).
     * Etapa 2: Laparotomía de control de daños (Damage Control Surgery): Tríada de la muerte (hipotermia, acidosis, coagulopatía), empaquetamiento abdominal / packing perihepático en 4 cuadrantes, cierre temporal con bolsa de Bogotá / VAC.
     * Etapa 3: Cuidados intensivos y reexploración programada (Second-Look) a las 24-48h para desempaquetamiento, hemostasia definitiva y cierre diferido.
3. In `src/components/ResidentadoMedicoView.tsx`:
   - Adjust the case selector grid at line 615 from `grid-cols-1 sm:grid-cols-3 gap-3` to `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3`.
4. Create `tests/medicalModules.test.ts` verifying:
   - Exactly 25 items in `CSSP_QUESTIONS_DATA`.
   - Exactly 5 items per Junta (`jvpm`, `jvpo`, `jvpe`, `jvpqf`, `jvpps`).
   - Every question has valid options A, B, C, D, valid correctAnswer, legalBasis, explanation, and distractorRationale.
   - Exactly 4 clinical cases in `BRANCHING_CLINICAL_CASES` covering 'Medicina Interna', 'Pediatría', 'Gineco-Obstetricia', and 'Cirugía'.
   - All clinical criteria (Zuspan, Sulfato de Magnesio 20%, Gluconato de Calcio 10%, ROT/FR/diuresis, ATLS 10ª ed., 1:1:1, Ácido Tranexámico, empaquetamiento / second look).
5. Run the build and test commands:
   - `npm test`
   - `npm run typecheck`
6. Document commands and results in your handoff report at:
   `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_medical\handoff.md`

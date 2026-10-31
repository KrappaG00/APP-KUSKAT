## 2026-10-31T16:35:01Z
You are Worker M3 (teamwork_worker).
Your Working Directory: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m3_medical
Project Root: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT
Original User Request Reference: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
Scope Reference: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\orchestrator_reinforcement\SCOPE.md
Explorer Survey Reference: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_health_tech_r2\handoff.md

MANDATORY FIRST STEP: Read c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md completely.
Also read the detailed specifications in c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_health_tech_r2\handoff.md (Section 4.1).

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

EXCLUSIVE FILE OWNERSHIP (Only you may modify these files):
- src/data/residentadoMedicoData.ts
- src/components/ResidentadoMedicoView.tsx

YOUR MISSION — MILESTONE M3:
Residentado Médico Especializado (ENAR El Salvador):
1. In `src/data/residentadoMedicoData.ts`:
   - Incorporate `RESIDENTADO_THEMATIC_UNITS: ResidentadoThematicUnit[]` covering the 5 core specialties:
     1) Medicina Interna (SCA/IAM, Cetoacidosis Diabética, Dengue con signos de alarma, Falla Cardíaca aguda, Enfermedad Renal Crónica no tradicional salvadoreña).
     2) Cirugía General (Abdomen agudo quirúrgico, Apendicitis complicada y Alvarado, Obstrucción intestinal, Trauma cerrado de abdomen y ATLS shock classes).
     3) Pediatría (Deshidratación y planes AIEPI, Bronquiolitis, Dengue pediátrico, Esquema nacional de vacunación PAI MINSAL, Neumonía adquirida en la comunidad).
     4) Ginecología y Obstetricia (Trastornos hipertensivos del embarazo, Esquema Zuspan para eclampsia, Código Rojo obstétrico, Manejo activo del tercer período del parto).
     5) Medicina Familiar & Atención Primaria (Riesgo cardiovascular global OPS/OMS, manejo ambulatorio de HTA/DM2 según guías ALAD, Ley Nacer con Cariño, vigilancia epidemiológica comunitaria).
   - Mandatory rule: Each of the 5 units MUST contain >= 500 words of substantive clinical rationale and medical evidence based on MINSAL protocols, OPS/OMS and official specialty standards without generic boilerplate.
   - Mandatory rule: Each unit MUST include >= 5 concrete, distinct, step-by-step solved clinical cases (25 clinical cases total) detailing initial vignette, diagnostic reasoning, differential diagnosis, evidence-based management plan, and clinical pearls.
   - Expand the interactive multiple-choice question bank `RESIDENTADO_QUESTIONS` from 11 to >= 50 questions (10 questions per specialty), each with rich clinical vignettes, full explanations, key takeaways, and official clinical references.
   - Ensure `RESIDENTADO_SPECIALTIES` includes Medicina Familiar y Atención Primaria.
2. In `src/components/ResidentadoMedicoView.tsx`:
   - Update the UI to render the 5 thematic clinical review units and their solved cases, alongside the expanded question bank and branching simulation scenarios. Keep existing branching cases in `residentadoBranchingCases.ts` functional.

PLATFORM INVARIANTS:
- Preserve official WhatsApp +503 7657 4463 (0 private phone numbers).
- 100% ad-supported model.
- Run verification commands: `npm run typecheck`, `npm test`. Fix any syntax or type issues.

Deliver your handoff report to: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m3_medical\handoff.md`.
Include verification outputs and word/example counts. Then send a brief message to parent (conversation ID: 99491d00-2080-42d6-9e30-ba4aeeaac310).

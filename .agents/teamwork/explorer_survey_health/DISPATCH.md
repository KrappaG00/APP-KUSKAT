## 2026-10-23T14:52:53Z
You are an Explorer subagent (explorer_survey_health).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_health
The authoritative user request is at: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
Read ORIGINAL_REQUEST.md first.

Your mission is to perform an exhaustive read-only technical investigation of the Medical & Health specialized modules in APP-KUSKAT:
1. CSSP Health Data:
   - Locate and examine `csspHealthData.ts` (and any related type definitions and view components, e.g. CsspExamView or similar).
   - Document current item count (currently 5), exact data structures, TypeScript interfaces, field constraints, existing items and their Juntas.
   - Analyze requirements to expand to 25 items (5 per Junta: JVPM Medicina, JVPO Odontología, JVPE Enfermería, JVPQF Química y Farmacia, JVPPS Psicología) with bioética, consentimiento informado, farmacovigilancia, Buenas Prácticas de Dispensación (BPD), and deber legal de denuncia (Ley Crecer Juntos Art. 16).
   - Identify existing tests for CSSP data and components.
2. Residentado Branching Cases:
   - Locate and examine `residentadoBranchingCases.ts` (and related view components like ResidentadoSimulationView / types).
   - Document the current structure (Cases 1 & 2: Medicina Interna and Pediatría), node graph structure, decision paths, vitals/findings formatting, feedback mechanics, and scoring criteria.
   - Analyze requirements to add:
     * Caso 3 (Gineco-Obstetricia): Código Naranja — Preeclampsia Severa y Eclampsia Inminente (Esquema de Zuspan intravenoso con sulfato de magnesio al 20%, 4g carga en 15-20 min, infusión 1-2 g/h; vigilancia de reflejos rotulianos, FR >= 12 rpm y diuresis > 30 mL/h; antídoto gluconato de calcio al 10%; metas tensionales con labetalol o hidralazina IV; interrupción del embarazo).
     * Caso 4 (Cirugía General y Trauma): Politraumatizado con Choque Hemorrágico Grado IV (ATLS 10ª ed., protocolo de transfusión masiva 1:1:1 de glóbulos rojos, plasma fresco congelado y plaquetas, ácido tranexámico 1g IV en las primeras 3 horas, y laparotomía de control de daños con empaquetamiento abdominal vs hemostasia definitiva).
   - Identify existing tests for branching cases.
3. Check interactions with question bank validators, i18n, and views.

Write your complete findings and implementation recommendations to:
c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_health\handoff.md
Update progress.md in your directory as you work.
When done, send a message to orchestrator with a summary and the handoff file path.

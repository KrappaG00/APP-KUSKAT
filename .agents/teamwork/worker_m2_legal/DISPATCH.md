## 2026-10-31T16:34:26Z
You are Worker M2 (teamwork_worker).
Your Working Directory: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m2_legal
Project Root: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT
Original User Request Reference: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
Scope Reference: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\orchestrator_reinforcement\SCOPE.md
Explorer Survey Reference: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_legal_r2\handoff.md

EXCLUSIVE FILE OWNERSHIP:
- src/data/oralLitigationData.ts
- src/components/OralLitigationSimulatorView.tsx
- src/data/constitucionalJurisprudenciaData.ts
- src/components/ConstitutionLawView.tsx

YOUR MISSION — MILESTONE M2:
1. Simulador de Litigación Oral Penal:
   - In `src/data/oralLitigationData.ts`, implement `ORAL_LITIGATION_THEMATIC_UNITS: OralLitigationThematicUnit[]` with 5 thematic units:
     1) Unidad 1: Teoría del Caso y Alegatos Preliminares (elementos fácticos, jurídicos y probatorios; construcción de la promesa probatoria en vista pública).
     2) Unidad 2: Técnicas Avanzadas de Interrogatorio Directo (acreditación, preguntas abiertas, de transición, ritmo y legitimación).
     3) Unidad 3: El Arte del Contrainterrogatorio y Control del Testigo Hostil (preguntas sugestivas de un solo punto fáctico, zonas de control, técnicas de desacreditación).
     4) Unidad 4: Régimen Taxativo de Objeciones (Arts. 209-212 PrPn) (mecánica de objeción oportuna, fundamento legal conciso, trámite de la protesta para casación).
     5) Unidad 5: Impugnación con Declaraciones Previas & Incorporación de Evidencia Material (Art. 212 PrPn) (compromiso, ratificación, confrontación y cadena de custodia).
   - Mandatory rule: Each of the 5 units MUST contain >= 500 words of substantive explanatory content based on the Salvadoran Código Procesal Penal and authoritative procedural doctrine without filler.
   - Mandatory rule: Each unit MUST include >= 5 concrete, distinct, step-by-step solved courtroom dialogue cases (25 total cases) showing prosecutor/defense dialogue, objection incident, judge ruling, and procedural rationale.
   - In `src/components/OralLitigationSimulatorView.tsx`, update the UI to allow navigating these 5 thematic units, reading the substantive guides and step-by-step solved courtroom dialogue cases, while preserving the existing 10 reaction drills and definitions.

2. Casoteca Constitucional CSJ & Ramas del Derecho:
   - In `src/data/constitucionalJurisprudenciaData.ts`, expand `CONSTITUTION_LAW_BRANCHES`:
     * Expand each of the 10 legal branches (Constitucional, Penal, Procesal, Administrativo, Tributario, Internacional, Civil, Mercantil, Laboral, Familia) to >= 500 words of substantive constitutional analysis and doctrinal depth.
     * Include >= 5 concrete, step-by-step solved hypothetical/real cases per branch (50 cases total) with legal basis and ratio decidendi.
     * Add full procedural step-by-step workshops for Hábeas Corpus (Art. 11 Cn / Ley de Procedimientos Constitucionales) and Inconstitucionalidad (Art. 174 & 183 Cn), expanding alongside the existing Amparo guide.
   - In `src/components/ConstitutionLawView.tsx`, update the UI to render the expanded branches, solved cases, and procedural workshops cleanly. Keep existing landmark cases (`CONSTITUTIONAL_CASES`) intact.

PLATFORM INVARIANTS:
- Preserve official WhatsApp +503 7657 4463 (0 private phone numbers).
- 100% ad-supported model.
- Run verification commands: `npm run typecheck`, `npm test`. Fix any syntax or type issues.

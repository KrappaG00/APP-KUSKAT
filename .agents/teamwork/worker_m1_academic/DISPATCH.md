## 2026-10-31T16:34:13Z
You are Worker M1 (teamwork_worker).
Your Working Directory: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m1_academic
Project Root: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT
Original User Request Reference: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
Scope Reference: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\orchestrator_reinforcement\SCOPE.md
Explorer Survey Reference: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_academic_r2\handoff.md

MANDATORY FIRST STEP: Read c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md completely.
Also read the detailed specifications in c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_academic_r2\handoff.md (Sections 4.1 and 4.2).

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

EXCLUSIVE FILE OWNERSHIP (Only you may modify these files):
- src/data/jovenesTalentoData.ts
- src/components/JovenesTalentoView.tsx
- src/data/onePageSheetsData.ts
- src/components/OnePageCheatSheetsView.tsx

YOUR MISSION — MILESTONE M1:
1. Programa Jóvenes Talento (MINED - UES):
   - In `src/data/jovenesTalentoData.ts`, expand the model with `OLYMPIC_THEMATIC_UNITS: OlympicThematicUnit[]` covering 5 Olympic disciplines:
     1) Matemática (ONM) — Teoría de Números & Aritmética Modular (congruencias Gauss, Fermat, Euler, Wilson, Teorema Chino del Resto, Diofánticas)
     2) Matemática (ONM) — Combinatoria & Principio del Palomar Extendido (Dirichlet, Inclusión-Exclusión, Double Counting, derangements)
     3) Física (ONF) — Mecánica Analítica de Rotación & Conservación de Momento (Steiner, rodadura pura, momento angular, trabajo rotacional)
     4) Química (ONQ) — Termodinámica Química, Entropía y Energía Libre de Gibbs (2ª/3ª ley, espontaneidad, van 't Hoff, potencial químico)
     5) Biología (ONB) & Computación (OSI) — Genética de Poblaciones & Algoritmos de Grafos/DP (Hardy-Weinberg, Dijkstra, Programación Dinámica)
   - Mandatory rule: Each of the 5 units MUST have >= 500 words of substantive explanatory content (formal definitions, theorems, KaTeX formulas) without generic boilerplate.
   - Mandatory rule: Each unit MUST include >= 5 concrete, distinct, step-by-step solved proof/problem examples (25 total).
   - In `src/components/JovenesTalentoView.tsx`, update the UI to allow students to read these units, explore the 5 step-by-step solved examples per unit, and practice interactive problems. Keep existing `OLYMPIC_PROBLEMS_DATA` intact.

2. One-Page Cheat Sheets / Fichas de Resumen (LaTeX / PDF):
   - In `src/data/onePageSheetsData.ts`, expand the catalog from 4 to 9 institutional sheets, adding:
     5) Jóvenes Talento & Olimpiadas Científicas (STEM Avanzado)
     6) Normativa Eléctrica SIGET & Fotovoltaica (NTCOGD / NEC 690)
     7) Farmacología Clínica & Dosificación Pediátrica/Adulto (MINSAL)
     8) Cumplimiento Financiero AML & Ratios de Supervisión SSF
     9) Gramática & Sintaxis Ancestral Náhuat Pipil de El Salvador
   - Mandatory rule: Each sheet must include >= 5 step-by-step solved practical application examples showing how to use the formulas/rules, plus retention drills.
   - In `src/components/OnePageCheatSheetsView.tsx`, ensure the new sheets and solved examples render smoothly and cleanly.

PLATFORM INVARIANTS:
- Preserve official WhatsApp +503 7657 4463 (NEVER include private phone "7943 9901").
- 100% ad-supported model.
- Run verification commands: `npm run typecheck`, `npm test`. Fix any syntax or type issues.

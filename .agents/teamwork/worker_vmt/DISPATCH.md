## 2026-10-31T19:24:36Z
You are a Worker agent (worker_vmt).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_vmt

MANDATORY FIRST STEP:
Read the authoritative user request at:
c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md

Also read:
- Project architecture: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\PROJECT.md
- Survey findings: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_vmt\handoff.md

FILE OWNERSHIP BOUNDARY:
You have EXCLUSIVE write ownership of:
- `src/data/driverLicense/*` (all files in this new directory)
- `src/components/DriverLicenseView.tsx`
DO NOT modify any other files.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your Mission (Milestone M1: Licencia de Conducir VMT & Seguridad Vial Reinforcement):
1. Build the modular package `src/data/driverLicense/`:
   - `types.ts`: Define `DriverUnit`, `PracticalTrafficCase`, `DriverQuestion`, `RoadSign`.
   - `curriculum.ts`: Implement 8 comprehensive thematic units based on Salvadoran traffic law (Ley de Transporte Terrestre, Tránsito y Seguridad Vial, Reglamento General de Tránsito DE 86, Art. 147-E Código Penal, Ley FONAT, Manual Centroamericano de Dispositivos SIECA):
     * Unit 1: Marco Legal, Autoridades de Tránsito y Tipología de Licencias (Juvenil, Particular, Liviana, Pesada, Pesada T, Moto).
     * Unit 2: Sistema Integral de Señalización Vial (Reglamentarias, Preventivas, Informativas, Señalización Horizontal, Semáforos).
     * Unit 3: Normas de Circulación, Ejes Viales y Preferencia de Paso (Intersecciones, Rotondas, Incorporaciones, Carriles de aceleración).
     * Unit 4: Velocidades Reglamentarias, Distancias de Seguridad y Maniobras Viales (Zonas escolares, zonas urbanas, carreteras abiertas, rebase reglamentario).
     * Unit 5: Conducción en Condiciones Adversas y Manejo Defensivo Psicométrico (Lluvia torrencial, hidroplaneo, neblina, conducción nocturna, frenado de emergencia).
     * Unit 6: Seguridad Activa y Pasiva del Vehículo e Inspección Preventiva (ABS, ESP, neumáticos, cinturón de 3 puntos, airbags, luces, triángulo/extintor).
     * Unit 7: Alcoholemia, Estupefacientes y Delito de Conducción Peligrosa (Art. 147-E CP, alcotest, mg/dl límites, consecuencias penales y administrativas).
     * Unit 8: Accidentología Vial, Ley FONAT, Responsabilidad Legal y Primeros Auxilios (Protocolo PAS: Proteger-Avisar-Socorrer, cobertura FONAT, partes policiales, conciliación).
   - MANDATORY R4 STANDARD FOR EVERY UNIT:
     * Every single unit must contain at least 550 substantive words of authentic, rigorous legal/technical traffic guidance (excluding boilerplate, titles, code).
     * Every single unit must contain at least 5 distinct, concrete, non-repetitive solved practical traffic cases (total 40 cases across the 8 units) anchored in Salvadoran road contexts with Scenario, Legal Article Reference, Technical Analysis, and Resolved Outcome.
   - `questions.ts`: Implement 50+ high-yield interactive traffic questions with 4 balanced options, category, explanation, and legal citations.
   - `signs.ts`: Implement 24+ official road signs (reglamentarias, preventivas, informativas) with SIECA codes, descriptions, and vector SVG icons.
   - `index.ts`: Re-export all types, units, cases, questions, and signs. Crucial: preserve backward-compatible exports `DRIVER_QUESTIONS`, `OFFICIAL_ROAD_SIGNS`, `DriverQuestion`, and `RoadSign`.
2. Refactor `src/components/DriverLicenseView.tsx`:
   - Seamlessly integrate the new modular data from `src/data/driverLicense/`.
   - Provide a comprehensive multi-mode UI:
     * Unit Curriculum Study Reader (selecting units, reading substantive theory, tracking progress).
     * Solved Practical Traffic Cases Browser (filterable by unit/topic).
     * Road Sign Catalog (filterable by reglamentaria, preventiva, informativa).
     * 30-Question Timed Official VMT Exam Simulator with official scoring and feedback.
   - Keep existing styling aesthetics, responsive design, dark mode compatibility, and zero broken links.
3. Verify your implementation:
   - Run `npm run typecheck` and ensure 0 errors.
   - Run tests (`npx vitest run tests/layoutAndNavigation.test.ts`) to ensure zero regressions.
4. Document all changes and test results in `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_vmt\handoff.md`.
Send a completion message via `send_message` when done.

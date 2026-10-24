## 2026-10-23T15:02:48Z
You are a Worker subagent (worker_sec_comp).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_sec_comp
The authoritative user request is at: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
Read ORIGINAL_REQUEST.md first.
Also read PROJECT.md at: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\PROJECT.md
And review the security explorer handoff at: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_sec_infra\handoff.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your exclusive write boundaries:
- `src/data/anspAscensoData.ts`
- `src/data/complianceAmlData.ts`
- `tests/securityCompliance.test.ts`
- Files in your working directory (.agents/teamwork/worker_sec_comp/)
DO NOT modify any other files.

Your mission:
1. Expand `src/data/anspAscensoData.ts` to exactly 18 reactivos completos in `ANSP_ASCENSO_QUESTIONS` (exactly 6 por cada escalafón: `Cabo`, `Sargento`, `Oficial`):
   - Incorporate:
     * procedimientos ITOP (Inspección Técnica Ocular Policial) y embalaje balístico
     * flagrancia material y Ley de Responsabilidad Penal Juvenil
     * cadena de custodia e integridad del indicio
     * auxilio urgente bajo LEIV (Ley Especial Integral para una Vida Libre de Violencia para las Mujeres)
     * dirección funcional con la FGR
     * régimen disciplinario de la Ley de la Carrera Policial (faltas graves y muy graves)
     * control de armería y bitácora de armamento
     * régimen de excepción y derechos inderogables (Arts. 29-31 Cn.)
     * estándares ONU y jurisprudencia de la Corte IDH sobre principios de necesidad, proporcionalidad y uso de la fuerza
     * intervención de telecomunicaciones bajo la LEIT
   - Preserve data contract: `options: { key: string; text: string }[]`, `correctAnswer: 'A' | 'B' | 'C' | 'D'`, `escalafon: 'Cabo' | 'Sargento' | 'Oficial'`.
2. Expand `src/data/complianceAmlData.ts` to exactly 16 preguntas completas en `COMPLIANCE_QUESTIONS` (exactamente 8 de AML y 8 de Seguros SSF):
   - Incorporate:
     * casuística de tipologías UIF/FGR: pitufeo / estructuración (smurfing)
     * Debida Diligencia Intensificada (DDI) en personas expuestas políticamente (PEP), sociedades offshore y fideicomisos
     * Sujetos obligados no financieros (APNFD Art. 9-A LCLDA: bienes raíces, metales preciosos, vehículos)
     * Beneficiario Final (UBO >= 10%)
     * autonomía del delito de lavado de dinero y extinción de dominio (LEDAB)
     * cálculo riguroso de infraseguro y regla proporcional (Art. 1383 C.Com.)
     * sobreseguro doloso vs de buena fe (Art. 1381 C.Com.)
     * subrogación legal mercantil de la aseguradora (Art. 1391 C.Com.)
     * cláusula de suicidio de 2 años e incontestabilidad en seguros de vida
     * distinción entre fianzas de cumplimiento de contrato y de anticipo/buena obra en compras públicas
   - Preserve data contract: `options: { A: string; B: string; C: string; D: string }`, `correctAnswer: 'A' | 'B' | 'C' | 'D'`, `category: 'AML' | 'Seguros'`.
3. Create `tests/securityCompliance.test.ts` verifying:
   - Exactly 18 reactivos in `ANSP_ASCENSO_QUESTIONS`.
   - Exactly 6 items for `Cabo`, 6 for `Sargento`, 6 for `Oficial`.
   - Valid options, correctAnswer, and escalafon on all items.
   - Exactly 16 questions in `COMPLIANCE_QUESTIONS`.
   - Exactly 8 items for `AML` and 8 items for `Seguros`.
   - Valid options object (A, B, C, D) and correctAnswer on all items.
4. Run the build and test commands:
   - `npm test`
   - `npm run typecheck`
5. Document commands and results in your handoff report at:
   `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_sec_comp\handoff.md`

When done, message the orchestrator with your report.

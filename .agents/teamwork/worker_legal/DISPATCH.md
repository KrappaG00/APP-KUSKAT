## 2026-10-23T15:02:48Z
You are a Worker subagent (worker_legal).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_legal
The authoritative user request is at: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
Read ORIGINAL_REQUEST.md first.
Also read PROJECT.md at: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\PROJECT.md
And review the legal explorer handoff at: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_legal\handoff.md

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your exclusive write boundaries:
- `src/data/notaryExamData.ts`
- `src/components/NotaryExamView.tsx`
- `src/data/constitucionalJurisprudenciaData.ts`
- `tests/legalModules.test.ts`
- Files in your working directory (.agents/teamwork/worker_legal/)
DO NOT modify any other files.

Your mission:
1. Standardize and expand Notary Exam Data:
   - Create `src/data/notaryExamData.ts`. Define and export interface `NotaryQuestion` and constant array `NOTARY_EXAM_QUESTIONS`.
   - In `src/components/NotaryExamView.tsx`, import `NotaryQuestion` and `NOTARY_EXAM_QUESTIONS` from `../data/notaryExamData` and re-export `NotaryQuestion` and `NOTARY_EXAM_QUESTIONS` for full backwards compatibility.
   - Expand `NOTARY_EXAM_QUESTIONS` to exactly 20 comprehensive items (`not-01` to `not-20`) following the blueprint in `explorer_survey_legal/handoff.md` §3.1.
   - Cover all required legal domains:
     * solemnidades de testamentos abiertos y cerrados (Arts. 1009-1017 C.C.)
     * protocolización de resoluciones judiciales (Arts. 55-58 LN)
     * otorgamiento sin DUI por testigos de conocimiento (Art. 32 LN)
     * diligencias de jurisdicción voluntaria (LENJVOD: aceptación de herencia, remedición de inmuebles con citación a colindantes)
     * poderes con cláusula especial (Art. 69 CPCM)
     * constitución de sociedades mercantiles S.A. de C.V. (Código de Comercio)
     * precedentes de la Sala de lo Civil y Corte Plena sobre nulidades absolutas e inhabilitación disciplinaria
2. Expand Casoteca Constitucional CSJ:
   - In `src/data/constitucionalJurisprudenciaData.ts`, expand `CONSTITUTIONAL_CASES` to exactly 10 landmark rulings (`ConstitutionalRulingCase`) following `explorer_survey_legal/handoff.md` §3.2.
   - Retain existing 4 cases (`sc-inc-044-2013`, `sc-hc-179-2011`, `sc-inc-004-2012`, `sc-amp-408-2015`) and add 6 sentencias:
     * `sc-inc-021-2020` (Inc. 21-2020 / Inc. 63-2020: Decretos ejecutivos sin habilitación legislativa durante emergencia)
     * `sc-hc-119-2014` (H.C. 119-2014: Hábeas Corpus correctivo contra hacinamiento y condiciones penitenciarias)
     * `sc-amp-713-2015` (Amp. 713-2015: Acceso a la información pública, máxima publicidad y probidad patrimonial LAIP)
     * `sc-inc-028-2015` (Inc. 28-2015: Reserva de ley tributaria, distinción entre tasas e impuestos encubiertos)
     * `sc-inc-006-2016` (Inc. 6-2016: Vicio formal de deliberación democrática y abuso de dispensa de trámite)
     * `sc-amp-068-2011` (Amp. 68-2011: Estabilidad laboral reforzada y protección a la maternidad)
   - Ensure each case includes genuine `ratioDecidendi`, `practicalImpact`, and a 4-option `legalQuiz` (options A, B, C, D) with `correctKey` and `explanation`.
3. Create `tests/legalModules.test.ts` verifying:
   - Exactly 20 questions in `NOTARY_EXAM_QUESTIONS` with valid schema, unique IDs `not-01` to `not-20`, 4 options each, valid `correctKey`, and citations of C.C., LN, LENJVOD, CPCM, C.Com.
   - Exactly 10 sentencias in `CONSTITUTIONAL_CASES` with valid schema, unique IDs, complete `ratioDecidendi`, `practicalImpact`, and 4-option `legalQuiz`.
   - Verify `AMPARO_STEP_GUIDE` intact with 5 steps.
4. Run the build and test commands:
   - `npm test`
   - `npm run typecheck`
5. Document commands and results in your handoff report at:
   `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_legal\handoff.md`

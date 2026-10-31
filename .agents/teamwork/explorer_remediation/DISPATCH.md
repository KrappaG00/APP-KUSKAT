# Dispatch: Explorer Remediation — Forensic Audit Failure Remediation

## Objective
Analyze the full evidence from the Forensic Auditor, Reviewer, and Challenger, and produce an exact, line-by-line remediation plan so that Worker Remediation can eliminate all 46 KaTeX delimiter/syntax errors and test assertion typos.

## Input Evidence (Auditor, Reviewer, Challenger Reports)
1. **Auditor Report**: `.agents/teamwork/auditor_m8/handoff.md` (Verdict: INTEGRITY VIOLATION due to `npm test` exit code 1)
2. **Reviewer Report**: `.agents/teamwork/reviewer_m8/handoff.md` (Verdict: REQUEST_CHANGES detailing 14 delimiter balance errors and 7 syntax errors)
3. **Challenger Report**: `.agents/teamwork/challenger_m8/handoff.md` (Verdict: REQUEST_CHANGES detailing KaTeX syntax errors in questions and lessons)

## Specific Defects to Remediate:
1. `src/data/minedCurriculum/grades/grade05QuintoGrado.ts:366`:
   - Replace literal `$115`, `$500`, `$385` with `115 dólares`, `500 dólares`, `385 dólares`.
2. `src/data/minedCurriculum/grades/grade06SextoGrado.ts`:
   - Line 209 (`mined-mat-6g-u02-l01`): replace `$1.25` with `1.25 dólares`.
   - Line 359 (`mined-mat-6g-u07-l01` Ex 4): replace `{$365, $365, $400, $420, $2,500}` with `{365, 365, 400, 420, 2500} dólares`, and `$810` / `$400` with `810 dólares` / `400 dólares`.
   - Also check `mined-mat-6g-u04-l01` and `mined-mat-6g-u05-l01` for currency dollar signs.
3. `src/data/minedCurriculum/grades/grade07SeptimoGrado.ts`:
   - Lesson `mined-mat-7g-u01-l01` (Ex 3 & Resuelve 1): replace `-$160` with `-160 dólares` and `-$350` with `-350 dólares`.
   - Question archetypes lines 90-93 (`MINED-MAT-7G-U01-Q026..Q030`): fix KaTeX syntax in options.
4. `src/data/minedCurriculum/grades/grade11SegundoBach.ts`:
   - Line 379 (`mined-mat-2b-u01-l01` Ex 3): double-escape LaTeX backslashes: `\\frac`, `\\pm`, `\\sqrt`, `\\neq`, `\\{`, `\\}` so they are not interpreted as form-feed `\f`.
   - Line 571 & 572 (`mined-mat-2b-u06-l01`): remove trailing `$`, replace `$\$10$` with `10 dólares`, and replace `\\$66$` with `66\text{ dólares}` or `66 dólares`.
5. `src/data/minedCurriculum/grades/gradeHelpers.ts`:
   - Ensure `createPscerLesson` normalizes currency dollar signs across `customExamples` and `resuelve` via `normalizeLooseCurrencyDollar`.
6. `tests/adversarialCurriculumStressM8.test.ts`:
   - Line 343: change `toBe(4,850)` to `toBe(4850)`.
   - Line 462: change `'src/views/AcademicReinforcementView.tsx'` to `'src/components/AcademicReinforcementView.tsx'`.

## Deliverable
Write `handoff.md` with the verified, exact replacement specifications for the remediation worker.


## 2026-10-31T14:25:52Z
Sender: c86d0692-61de-42a4-859c-60fdfb31cccd
Priority: MESSAGE_PRIORITY_HIGH

You are an exploration and analysis agent (teamwork_explorer).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_remediation\
Authoritative user request file: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
Your dispatch instructions: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_remediation\DISPATCH.md

CRITICAL AUDIT FAILURE REPORT (Full evidence):
- Forensic Auditor Report: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\auditor_m8\handoff.md
- Reviewer Report: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\reviewer_m8\handoff.md
- Challenger Report: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\challenger_m8\handoff.md

You MUST read ORIGINAL_REQUEST.md, DISPATCH.md, and the three handoff reports above before starting work.
Task:
Produce a comprehensive, exact, line-by-line remediation strategy to fix all KaTeX delimiters, KaTeX syntax errors, and test assertion typos identified by the auditor, reviewer, and challenger:
1. `grade05QuintoGrado.ts` line 366 (currency dollars).
2. `grade06SextoGrado.ts` lines 209, 359, etc. (currency dollars).
3. `grade07SeptimoGrado.ts` lines 90-93 (KaTeX options) and lesson 1.1.
4. `grade11SegundoBach.ts` line 379 (`\\frac`, `\\pm`, `\\sqrt`, `\\neq`), lines 571-572.
5. `gradeHelpers.ts` currency normalization across `customExamples` and `resuelve`.
6. `tests/adversarialCurriculumStressM8.test.ts` line 343 (`toBe(4850)`) and line 462 (`src/components/`).

Write your remediation analysis and exact code replacements to `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_remediation\handoff.md` and send a completion message.


## 2026-10-31T14:48:36Z
Sender: c86d0692-61de-42a4-859c-60fdfb31cccd
Priority: MESSAGE_PRIORITY_HIGH

**Context**: Remediation Strategy
**Content**: Status check. It has been >20 minutes since dispatch. Please provide your current status update or finalize and deliver your `handoff.md`.
**Action**: Report status or deliver handoff.md.

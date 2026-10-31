# Dispatch Task: Final Forensic Integrity Audit (Milestone M8 Iteration 2)

## Identity & Working Directory
- **Role**: Forensic Auditor M8 Final
- **Working Directory**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\auditor_m8_final\`
- **Parent Conversation ID**: `c86d0692-61de-42a4-859c-60fdfb31cccd`

## Context & Objectives
Iteration 1 of Milestone M8 failed due to INTEGRITY VIOLATION because `npm test` failed on 14 KaTeX delimiter balance errors and KaTeX parse errors.
Remediation Worker M8 has now applied the exact repairs to `grade05QuintoGrado.ts`, `grade06SextoGrado.ts`, `grade07SeptimoGrado.ts`, `grade11SegundoBach.ts`, and `gradeHelpers.ts`.

Your objective is to conduct an independent, exhaustive forensic integrity audit across the entire codebase to certify that:
1. All mathematical lessons and exercises implement genuine, authentic content from the MINED ESMATE curriculum.
2. No cheating, facades, dummy implementations, or hardcoded test bypasses exist.
3. KaTeX expressions render cleanly with balanced delimiters across all 97 units and 112 lessons.
4. All project invariants are strictly intact:
   - 17,640 base bank questions in `public/data/`.
   - Exactly 200 Notariado questions (`not-01` to `not-200`) in `src/data/notaryExamData.ts`.
   - Zero occurrences of private telephone `7943 9901` in `src/` and `public/`. WhatsApp oficial: `+503 7657 4463`.
   - Line 822 of `src/components/AcademicReinforcementView.tsx` has class `text-white`.
   - 100% ad-supported model (zero paywalls/subscriptions).
   - Zero git commits or pushes.
5. All verification commands pass with exit code 0:
   - `npx vitest run tests/adversarialCurriculumStressM8.test.ts`
   - `npx vitest run tests/curriculumR4Compliance.test.ts`
   - `npm test`
   - `npm run typecheck`
   - `npm run validate:bank`
   - `npm run validate:i18n`
   - `npm run build`

## Mandatory Files to Read First
1. `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md`
2. `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\PROJECT.md`
3. `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m8_remediation\handoff.md`

## Output Requirements
Produce a comprehensive `handoff.md` in your working directory with your binary audit verdict:
**VERDICT: CLEAN** or **VERDICT: INTEGRITY VIOLATION (reason)**.
Include exact verification command outputs and evidence chains.
Send a notification back to the parent orchestrator via `send_message`.

## 2026-10-31T15:02:01Z
Received dispatch from parent `c86d0692-61de-42a4-859c-60fdfb31cccd`:
Perform an exhaustive forensic audit for M8 Final.

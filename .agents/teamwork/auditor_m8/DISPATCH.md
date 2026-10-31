# Dispatch: Forensic Auditor M8 — Integrity & Invariants Audit

## 2026-10-31T14:14:42Z
You are a forensic integrity auditor (teamwork_auditor).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\auditor_m8\
Authoritative user request file: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
Your dispatch instructions: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\auditor_m8\DISPATCH.md
Implementation plan: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\orchestrator\plan.md

You MUST read ORIGINAL_REQUEST.md and DISPATCH.md before starting work.

Task:
Perform an exhaustive forensic audit on the MINED-ESMATE curriculum expansion and all system invariants:
1. Authenticity Forensics:
   - Verify that all 97 units across `src/data/minedCurriculum/grades/` contain genuine, authentic mathematical content and not dummy facades or fabricated texts.
   - Verify that word counts and example counts are genuinely computed and not mocked.
   - Verify that `tests/curriculumR4Compliance.test.ts` actually tests real curriculum data and does not have hardcoded pass assertions.
   - Verify that `gradeHelpers.ts` has zero synthetic boilerplate and zero template placeholders.
2. Invariants Verification (R3):
   - 17,640 base bank questions in `public/data/` intact (UES 7500, ANSP 250, ASD 2190, AVANZO 3000, ENA 1400, ESCALAFON 3300).
   - Exactly 200 Notariado questions (`not-01` to `not-200`) in `src/data/notaryExamData.ts`.
   - Zero occurrences of private phone "7943 9901" in `src/` and `public/`.
   - WhatsApp official "+503 7657 4463" present.
   - CSS class `text-white` on the Academic Reinforcement heading (`src/components/AcademicReinforcementView.tsx:822`).
   - 100% ad-supported model (no paywalls, no subscriptions).
   - Zero git commits or pushes.
3. Build & Test Certification:
   - Run `npm run typecheck`, `npm test`, `npm run build`, `npm run validate:bank`, `npm run validate:i18n`.

Write your handoff report to `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\auditor_m8\handoff.md` with explicit verdict: **CLEAN** or **INTEGRITY VIOLATION**, and send a completion message.

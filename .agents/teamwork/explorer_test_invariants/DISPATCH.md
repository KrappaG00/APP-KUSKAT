# Dispatch: Test Infrastructure & Invariants Explorer

## Objective
Investigate the project test infrastructure and system invariants in APP-KUSKAT.
Determine how to design and integrate the automated content verification test (Requirement R4) and verify all system invariants (Requirement R3).

## Scope of Investigation
1. Current Test Infrastructure:
   - What test framework is used (Vitest, Jest, custom scripts)?
   - How are `npm test`, `npm run typecheck`, `npm run build`, `npm run validate:bank`, and `npm run validate:i18n` defined in `package.json`?
   - Existing tests and how they are structured.
2. Content Verification Design (Requirement R4):
   - How to reliably measure "at least 500 words of substantive content" per topic (excluding code, navigation, metadatos, duplicate paragraphs)?
   - How to count and verify "at least 5 distinct solved step-by-step examples" per topic?
   - Where should this test live (e.g. `tests/` or similar) so it runs automatically during `npm test`?
3. System Invariants Verification (Requirement R3):
   - Invariant: 17,640 base questions in `public/data/` (how is `npm run validate:bank` verifying this?).
   - Invariant: Exactly 200 Notariado questions (`not-01` to `not-200`) in `public/data/` or relevant files.
   - Invariant: Zero occurrences of private phone "7943 9901" across `src/` and `public/`.
   - Invariant: WhatsApp official "+503 7657 4463" presence.
   - Invariant: CSS class `text-white` on "Refuerzo Académico (1° a 9° Grado y Bachillerato)".
   - Invariant: 100% ad-supported model (no paywalls/subscriptions).
   - Invariant: No git commits/pushes without approval.
4. Current baseline results of all test commands.

## Key Deliverables
Produce `handoff.md` in your working directory with verified facts, baseline test status, and design recommendations for R3 & R4.


## 2026-10-31T05:51:00Z
Task received from parent c86d0692-61de-42a4-859c-60fdfb31cccd:
Investigate the project test infrastructure and system invariants:
1. Review package.json and run baseline checks (or examine scripts): `npm test`, `npm run typecheck`, `npm run build`, `npm run validate:bank`, `npm run validate:i18n`. Report on current results and how tests are configured.
2. Invariants verification:
   - 17,640 base questions in `public/data/` (how validate:bank checks this).
   - Exactly 200 Notariado questions (`not-01` to `not-200`).
   - Cero occurrences of private phone "7943 9901" in `src/` and `public/`.
   - Presence of WhatsApp official "+503 7657 4463".
   - Encabezado "Refuerzo Académico (1° a 9° Grado y Bachillerato)" with CSS class `text-white`.
   - Ad-supported model verification (no paywalls/subscriptions).
3. Design and recommend the automated test for Requirement R4:
   - How to count substantive words (>=500 words per topic, excluding code, navigation, metadatos, repeated titles, duplicate paragraphs).
   - How to verify >=5 distinct step-by-step solved examples per topic.
   - How to wire it into the existing test suite (`npm test`).

Write complete findings and verified evidence chain to `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_test_invariants\handoff.md`.

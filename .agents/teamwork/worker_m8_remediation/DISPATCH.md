# Dispatch Task: Remediation of KaTeX Delimiters & Mathematical Syntax Across All Grades

## Identity & Working Directory
- **Role**: Remediation Worker M8
- **Working Directory**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m8_remediation\`
- **Parent Conversation ID**: `c86d0692-61de-42a4-859c-60fdfb31cccd`

## Context & Objectives
In Iteration 1 of Milestone M8, the forensic auditor and challenger discovered 14 KaTeX delimiter balance errors, 7 KaTeX syntax rendering errors in lessons, and 25 syntax errors in question generator `MINED-MAT-7G-U01-Q026..Q030` due to loose currency dollar signs (e.g. `$115`) and unescaped LaTeX backslashes (`\f`, `\pm`, `\sqrt`).
The Explorer has produced an exact, line-by-line drop-in remediation strategy in:
`c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_remediation\handoff.md`

## Mandatory Files to Read First
1. `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md`
2. `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_remediation\handoff.md` (Contains exact BEFORE and AFTER code blocks)
3. `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\PROJECT.md`

## Exact Files to Modify
1. `src/data/minedCurriculum/grades/grade05QuintoGrado.ts` (Replace loose currency `$600`, `$500`, `$100`, `$115` with `dólares`)
2. `src/data/minedCurriculum/grades/grade06SextoGrado.ts` (Replace currency `$` in lessons `u02-l01`, `u04-l01`, `u05-l01`, `u07-l01`)
3. `src/data/minedCurriculum/grades/grade07SeptimoGrado.ts` (Fix Q026..Q030 options/explanation syntax and eliminate single-dollar `-$350`, `-$160`)
4. `src/data/minedCurriculum/grades/grade11SegundoBach.ts` (Double-escape all LaTeX commands `\\frac`, `\\pm`, `\\sqrt`, `\\implies`, `\\in`, `\\{`, `\\}` in `u01-l01`, fix trailing `$` and invalid `\\` sequences in `u06-l01`)
5. `src/data/minedCurriculum/grades/gradeHelpers.ts` (Robust `normalizeLooseCurrencyDollar` function protecting `$15$` and normalizing all fields, `examples`, and `resuelve` items)

## Mandatory Integrity Warning
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

## Invariants to Strictly Preserve
- Preservar simuladores de 50 preguntas (`generate50UnitQuestions`) en las 97 unidades.
- Preservar 17,640 preguntas base en `public/data/`.
- Preservar exactamente 200 preguntas de Notariado (`not-01` a `not-200`).
- Cero ocurrencias de teléfono privado "7943 9901" en `src/` y `public/`. WhatsApp oficial: `+503 7657 4463`.
- Estilo `text-white` en encabezado en línea 822 de `src/components/AcademicReinforcementView.tsx`.
- 100% publicidad sin muros de pago ni suscripciones.
- Cero commits o pushes de git sin autorización explícita.

## Verification Requirements
Run and document the outputs of:
1. `npx vitest run tests/adversarialCurriculumStressM8.test.ts` (Must achieve 100% pass across all 33 stress tests)
2. `npm test` (Must achieve 100% pass across all 37 test suites and 617+ tests)
3. `npm run typecheck` (Must pass with 0 TypeScript errors)
4. `npm run validate:bank` (Must pass with 0 errors)
5. `npm run validate:i18n` (Must pass with 0 errors)
6. `npm run build` (Must pass with 0 build errors)

Deliver a complete `handoff.md` in your working directory and notify the parent orchestrator via `send_message`.


## 2026-10-31T14:53:20Z
You are Remediation Worker M8 for APP-KUSKAT.
Working Directory: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m8_remediation\`
Parent Conversation ID: `c86d0692-61de-42a4-859c-60fdfb31cccd`

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

First, read the following files:
1. `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m8_remediation\DISPATCH.md`
2. `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md`
3. `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_remediation\handoff.md`

Your task:
Apply the exact drop-in replacements specified in `explorer_remediation/handoff.md § 4`:
1. `src/data/minedCurriculum/grades/grade05QuintoGrado.ts` (lines 364-368)
2. `src/data/minedCurriculum/grades/grade06SextoGrado.ts` (lines 232-241, 278-291, 306-311, 359)
3. `src/data/minedCurriculum/grades/grade07SeptimoGrado.ts` (lines 86-94, 166, 172)
4. `src/data/minedCurriculum/grades/grade11SegundoBach.ts` (lines 370-381, 571-572)
5. `src/data/minedCurriculum/grades/gradeHelpers.ts` (lines 23-66: `normalizeLooseCurrencyDollar` and `createPscerLesson`)

Run all verification commands:
- `npx vitest run tests/adversarialCurriculumStressM8.test.ts`
- `npm test`
- `npm run typecheck`
- `npm run validate:bank`
- `npm run validate:i18n`
- `npm run build`

Preserve all project invariants (17,640 bank questions, 200 Notariado questions, 0 phone occurrences of 7943 9901, WhatsApp +503 7657 4463, text-white on line 822 of AcademicReinforcementView.tsx, 100% ad-supported model, 0 git commits/pushes).
Write your completion report in `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m8_remediation\handoff.md` and send a message back to the parent orchestrator via `send_message`.

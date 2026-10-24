# Handoff Report: Explorer Survey 3

## 1. Observation

1. **Vitest & Test Suite Status:**
   - Ran `npm test` (`vitest run`):
     ```
     Test Files  27 passed (27)
          Tests  364 passed (364)
       Start at  22:27:08
       Duration  19.37s
     ```
   - Configuration in `vite.config.ts` handles build and aliases (`@` -> `./src`). There is no separate `vitest.config.ts`; Vitest consumes `vite.config.ts`.
   - Existing tests in `tests/` include `technicalCourses.test.ts`, `specializedModules200.test.ts`, `challengerGate2Simulator.test.ts`, `bankValidation.test.ts`, `i18n.test.ts`, `languageIsolation.test.ts`, and others.

2. **Package Scripts:**
   - `"typecheck": "tsc --noEmit"` exited with code 0 (0 errors).
   - `"validate:bank": "node scripts/validate-bank.mjs"` exited with code 0:
     ```
     KUSKAT · Validación del banco de preguntas
       Preguntas válidas: UES=7500  ANSP=250  ASD=2190  AVANZO=3000  ENA=1400  ESCALAFON=3300  total=17640
       Errores: 0
       Advertencias: 0 {}
     ```
   - `"validate:i18n": "node scripts/validate-i18n.mjs"` exited with code 0:
     ```
     ✔ [es      ] Español    | dir="ltr" | UI: 100% (117/117) | Banco: 100%
     ✔ [nahuat  ] Náhuat     | dir="ltr" | UI: 100% (117/117) | Banco: 73%
     ✔ [lenca   ] Lenca      | dir="ltr" | UI: 100% (117/117) | Banco: 73%
     ✔ [kakawira] Kakawira   | dir="ltr" | UI: 100% (117/117) | Banco: 73%
     ✔ [en      ] English    | dir="ltr" | UI: 100% (117/117) | Banco: 95.29%
     ✔ [ar      ] العربية    | dir="rtl" | UI: 100% (117/117) | Banco: 84.57%
     ✔ [zh      ] 中文       | dir="ltr" | UI: 100% (117/117) | Banco: 84.57%
     ```
   - `"build": "vite build"` exited with code 0 in 13.71s, generating all production chunks in `dist/`.

3. **Base Bank Invariant (17,640 reactivos):**
   - The base bank resides exclusively in `public/data/` (UES 7500, ANSP 250, ASD 2190, AVANZO 3000, ENA 1400, ESCALAFON 3300).
   - `scripts/validate-bank.mjs` checks these files directly against `public/data/manifest.json`.

4. **i18n Localization Invariant:**
   - `src/i18n/locales/` contains 7 locales (`es.json`, `nahuat.json`, `lenca.json`, `kakawira.json`, `en.json`, `ar.json`, `zh.json`).
   - `tests/i18n.test.ts` line 79 asserts `expect(covered.length).toBe(baseKeys.length);`. Any key added to `es.json` must be present across all 7 locales.

5. **Security & Privacy Invariant:**
   - Executing `git grep "7943 9901"` returned code 1 (0 matches found). Official phone `+503 7657 4463` is preserved.
   - Current git branch is `pruebas-piloto` (`git branch` output: `* pruebas-piloto`).

6. **Acervo Documental Oficial MINED:**
   - Directory `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate` contains 135 downloaded PDF textbooks/guides (5.92 GB) from 1° Grado to 2° Bachillerato covering the ESMATE P-S-C-E-R methodology.

7. **Current Header in `AcademicReinforcementView.tsx`:**
   - Lines 539-541:
     ```tsx
     <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-montenegrin">
       Refuerzo Académico (1° a 9° Grado y Bachillerato)
     </h2>
     ```
   - It currently lacks `text-white font-black drop-shadow-sm` explicitly on the heading element.

---

## 2. Logic Chain

1. From Observation 1 and 2, the testing framework (Vitest) and all verification scripts are fully functional with zero errors across typechecking, unit tests, bank validation, i18n, and bundling.
2. From Observation 3, `public/data/` is strictly reserved for the 17,640 base questions. Therefore, all new Academic Reinforcement data and unit simulator questions must be placed in `src/data/minedCurriculum/` (TypeScript files), leaving `public/data/` 100% untouched.
3. To prevent ID collisions with the 17,640 base bank and the 1,400 specialized questions, all Academic Reinforcement question IDs must use an isolated prefix (e.g., `mined-ar-gX-uY-qZZ`).
4. From Observation 4, any global UI translation key added to `es.json` requires immediate synchronization across all 7 locale files to satisfy `validate:i18n` and `tests/i18n.test.ts`. Encapsulating educational text and questions in `src/data/minedCurriculum/` protects the i18n dictionary while maintaining full functional capability.
5. From Observation 6 and 7, R1 requires updating the `h2` heading in `AcademicReinforcementView.tsx` to include `text-white font-black drop-shadow-sm`. R2-R4 require implementing the 11 grades, tomos, units with P-S-C-E-R methodology, and 50 questions per evaluated unit with selector and timer options.
6. A comprehensive test suite `tests/academicReinforcement.test.ts` must be created containing rigorous invariant assertions for R1 through R5.

---

## 3. Caveats

- The current phase was strictly read-only exploration and test specification design. No source code or tests were modified during this step.
- The 135 PDF files in `Mined-Esmate` are large binaries; the curricular data module in `src/data/minedCurriculum/` should be structured cleanly in TypeScript without attempting to bundle PDF binaries into git or Vite assets.

---

## 4. Conclusion

The testing setup, verification scripts, question bank invariants, and i18n framework are completely mapped and healthy. A comprehensive test specification has been formulated in `survey_report.md` covering all acceptance criteria of R1-R5. Subsequent implementation agents can safely build `src/data/minedCurriculum/`, update `AcademicReinforcementView.tsx`, and construct `tests/academicReinforcement.test.ts` with exact knowledge of all constraints.

---

## 5. Verification Method

To independently verify all findings and test health, execute:
1. `npm run typecheck` — verify exit code 0.
2. `npm test` — verify all 27 suites and 364 tests pass.
3. `npm run validate:bank` — verify 17,640 questions and 0 errors.
4. `npm run validate:i18n` — verify 100% UI coverage across 7 locales.
5. `npm run build` — verify production build succeeds.
6. `git grep "7943 9901"` — verify 0 matches.
7. Inspect `survey_report.md` at `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_3\survey_report.md`.

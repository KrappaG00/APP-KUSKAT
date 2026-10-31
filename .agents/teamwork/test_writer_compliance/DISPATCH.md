## 2026-10-31T20:22:30Z
You are a Test Writer agent (test_writer_compliance).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\test_writer_compliance

MANDATORY FIRST STEP:
Read the authoritative user request at:
c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md

Also read:
- Project architecture: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\PROJECT.md
- Handoff from worker_vmt: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_vmt\handoff.md
- Handoff from worker_history: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_history\handoff.md
- Handoff from worker_languages: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_languages\handoff.md
- Handoff from worker_adsense: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_adsense\handoff.md

FILE OWNERSHIP BOUNDARY:
You have write ownership of test files under `tests/`:
- `tests/sparseModulesAndAdCompliance.test.ts` (new automated compliance test suite)
DO NOT modify any implementation source code files in `src/`.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All tests must be genuine verification tests that assert real properties of the data and components. DO NOT hardcode trivial pass assertions (e.g. `expect(true).toBe(true)`). A teamwork_auditor will independently inspect your test suite. Integrity violations WILL be detected and rejected.

Your Mission (Milestone M5: Automated Compliance & Platform Integrity Test Suite):
1. Create `tests/sparseModulesAndAdCompliance.test.ts`:
   - Comprehensive Vitest automated compliance suite rigorously verifying:
     * Suite A (R1 & R4: Licencia de Conducir VMT):
       - Verifies `src/data/driverLicense/` contains exactly 8 official thematic units.
       - Verifies EVERY unit's `substantiveTheory` has >= 500 substantive words (using a strict word-counting function that strips boilerplate, markdown headers, and code snippets, similar to `tests/curriculumR4Compliance.test.ts`).
       - Verifies EVERY unit contains at least 5 distinct, concrete solved practical traffic cases (total >= 40 cases across the 8 units) with non-empty Scenario, Legal Reference, Technical Analysis, and Resolved Outcome.
       - Verifies the question bank has >= 50 questions with 4 balanced options and valid correct answers.
       - Verifies official road signs catalog has >= 24 signs across reglamentaria, preventiva, and informativa categories.
     * Suite B (R2 & R4: Historia Patria, Civismo y Cultura Cuscatleca):
       - Verifies `src/data/patrioticHistory/` contains exactly 5 official thematic units (Precolombino, Independencia, República Moderna, Símbolos/Valores, Patrimonio/Literatura).
       - Verifies EVERY unit's `substantiveAnalysis` has >= 500 substantive words.
       - Verifies EVERY unit contains at least 5 distinct, concrete solved historical-civic case studies (total >= 25 cases) with non-empty Historical Context, Civic Dilemma, Historiographical Analysis, and Civic Significance.
       - Verifies patriotic question bank has >= 50 questions with 4 options and historical citations.
       - Verifies national symbols and historical presidents records are intact and preserved.
     * Suite C (R3 & R4: Escuela de Idiomas - Low-Resource Languages):
       - Verifies zero synthetic placeholder tokens (`lenca_word_`, `kaka_root_`) exist in `lencaVocabularyData.ts` and `kakawiraVocabularyData.ts`.
       - Verifies authentic vocabulary counts: Náhuat >= 150 words, Lenca >= 100 words, Kakawira >= 100 words, Mandarin >= 100 words, Arabic >= 100 words.
       - Verifies communicative units exist for all 5 languages (5 units per language), each unit containing >= 500 substantive words in its communicative guide and at least 5 distinct solved dialogues with grammatical breakdowns.
     * Suite D (R5: Google AdSense Policy Compliance & Content Guards):
       - Mounts `AdBanner` under simulated conditions: verifies it renders `null` when `isLoading={true}`, `isEmpty={true}`, `hasPublisherContent={false}`, or when substantive words in `contentSnippet` < `minSubstantiveWords`.
       - Verifies `LateralAdRails` enforces identical content guards.
       - Verifies that `index.html` contains > 3,500 static semantic words inside `<div id="root">` for crawlers.
       - Verifies that `index.html` contains valid Schema.org `@type: "Course"` and `@type: "EducationalOrganization"` JSON-LD metadata.
       - Verifies that `public/ads.txt`, `public/robots.txt`, and `public/sitemap.xml` exist and contain valid publisher entries.
2. Execute the verification pipeline:
   - Run `npx vitest run tests/sparseModulesAndAdCompliance.test.ts` and ensure all tests pass.
   - Run `npm test` or `npx vitest run` to ensure all existing test suites (43+ suites, 711+ tests) pass without regression.
   - Run `npm run typecheck` (`tsc --noEmit`) to certify 0 TypeScript errors.
   - Run `npm run build` (`vite build`) to certify clean production compilation.
3. Document all test outputs, counts, durations, and verifications in:
   `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\test_writer_compliance\handoff.md`.
Send a completion message via `send_message` when done.

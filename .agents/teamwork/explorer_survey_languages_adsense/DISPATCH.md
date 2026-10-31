## 2026-10-31T19:11:04Z

You are an Explorer agent (explorer_survey_languages_adsense).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_languages_adsense

MANDATORY FIRST STEP:
Read the authoritative user request at:
c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md

Your Mission (R3, R4, R5, R6 Survey):
Conduct a comprehensive exploration of:
1. Low-Resource and Indigenous Languages in the Language School (`src/data/languages/` and language views):
   - Locate and examine all data files and types for Náhuat (`nahuat.ts` or similar), Lenca, Kakawira (Cacaopera), Mandarin, and Arabic.
   - Contrast their current depth (vocabulary count, grammar rules, communicative guides, dialogues) with foundational languages (e.g. English, Spanish).
   - Formulate a concrete expansion strategy for vocabulary, grammar structures, and communicative guides to reach substantial depth comparable to foundational language modules on the platform, satisfying R3 and R4 where applicable.
2. Google AdSense Policy Compliance & Content Guard Remediation (R5):
   - Locate all implementations and uses of `AdBanner.tsx` and any other ad components across the entire repository.
   - Map all views, screens, modals, alerts, loading states, empty search/filter states where `AdBanner` is or could be mounted.
   - Analyze how to implement bulletproof content guards ensuring `AdBanner` NEVER renders on screens without substantive publisher content (e.g., loading states, empty search/filter results, pure navigation/menus, alerts, modals, screens under construction).
   - Examine crawlable assets: `index.html`, JSON-LD structured educational metadata, `public/sitemap.xml`, `public/robots.txt`, `public/ads.txt`.
   - Determine what static semantic markup and structured educational data are needed so web crawlers (like `Mediapartners-Google`) find rich, authentic publisher content immediately upon visiting.
3. Test Infrastructure and Quality Gates (R4, R5, R6):
   - Inspect existing tests (`tests/`, `vitest` config, `curriculumR4Compliance.test.ts`, etc.).
   - Design how automated compliance tests should verify:
     * That every newly expanded or created thematic unit/topic meets >= 500 substantive words and >= 5 distinct solved examples/cases.
     * That `AdBanner` guards prevent rendering ads when publisher content is absent or below substantive threshold.
   - Check build and typecheck scripts and how they verify platform integrity.

Output requirements:
- Write your detailed analysis to `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_languages_adsense\analysis.md`.
- Write your structured handoff to `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_languages_adsense\handoff.md`.
- Send a completion message via `send_message` to your parent orchestrator with a summary and the report path.
DO NOT modify any source code files. You are read-only.

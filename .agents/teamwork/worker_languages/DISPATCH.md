## 2026-10-31T19:25:09Z
You are a Worker agent (worker_languages).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_languages

MANDATORY FIRST STEP:
Read the authoritative user request at:
c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md

Also read:
- Project architecture: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\PROJECT.md
- Survey findings: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_languages_adsense\handoff.md

FILE OWNERSHIP BOUNDARY:
You have EXCLUSIVE write ownership of:
- `src/data/languages/*` (all files in this directory: vocabulary files, grammar files, index, types)
DO NOT modify any other files.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your Mission (Milestone M3: Escuela de Idiomas - Indigenous and Low-Resource Languages Reinforcement):
1. Sanitize and eliminate all synthetic placeholder tokens:
   - In `lencaVocabularyData.ts`: Completely remove all synthetic tokens like `lenca_word_6` through `lenca_word_125`.
   - In `kakawiraVocabularyData.ts`: Completely remove all synthetic tokens like `kaka_root_6` through `kaka_root_125`.
   - In `nahuatVocabularyData.ts`: Clean up mechanical suffix inflations (`piltzin-194`, `at-197`).
2. Substantially expand authentic vocabulary repositories (120-250 verified words each) with translations, phonetic notes, categories, and contextual usage examples:
   - Náhuat (Pipil): Expand to 150-250 authentic words based on the standard orthography (Alan R. King / MINED IRIN: Salcoatitán, Santo Domingo de Guzmán, Witzapan).
   - Lenca (Potón de El Salvador): Expand to 100-150 authentic words (Chilanga, Guatajiagua, Morazán, documentation by Lyle Campbell, Peccorini, etc.).
   - Kakawira (Cacaopera / Misumalpan): Expand to 100-150 authentic words (Cacaopera, Morazán historical linguistic records).
   - Mandarin: Expand from 20 to 120-150 authentic entries (Simplified Hanzi, Pinyin with tone marks, Spanish translation, category, and example sentence).
   - Arabic: Expand from 20 to 120-150 authentic entries (Modern Standard Arabic script, Latin transliteration, Spanish translation, category, and example sentence).
3. Expand grammar structures and contrastive guides:
   - For each of these 5 languages, add 4-6 spelling/orthographic rules, contrastive pair distinctions, and grammatical notes (phonology, morphology, verb conjugations, possessives, sentence order).
4. Implement structured communicative guides / thematic units meeting R4:
   - Provide communicative study units (e.g. Saludos y Cortesía, Familia y Comunidad, Entorno Natural y Agricultura, Comercio e Intercambio, Cosmovisión y Narrativa) containing >= 500 substantive words per guide/topic and at least 5 distinct, concrete, non-repetitive solved dialogues or practical communicative cases with grammatical breakdowns.
5. Verify your implementation:
   - Run `npm run typecheck` and ensure 0 errors.
   - Run test commands to ensure zero regressions in language loading or views.
6. Document all changes and test results in `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_languages\handoff.md`.
Send a completion message via `send_message` when done.

## 2026-10-31T20:11:00Z
**Context**: Milestone M3 Implementation Status
**Content**: Checking in on finalization of Milestone M3 (vocabulary, communicative units, grammar, and typecheck/test verification). All other milestones (M1, M2, M4) have completed cleanly.
**Action**: Please report your current progress or send your completion handoff once verification concludes.

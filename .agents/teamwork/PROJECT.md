# Project: APP-KUSKAT Sparse Areas Reinforcement & AdSense Policy Remediation

## Architecture
- **VMT Driver License Module**: `src/data/driverLicense/` provides dedicated modular curriculum data (8 units, >= 500 words each, 40 solved cases), 50+ questions, 24+ signs, consumed by `src/components/DriverLicenseView.tsx`.
- **Patriotic History & Civics Module**: `src/data/patrioticHistory/` provides dedicated modular curriculum data (5 units, >= 500 words each, 25 solved cases), 50-60 questions, symbols, and presidents, consumed by `src/components/PatrioticHistoryView.tsx`.
- **Language School (Indigenous & Low-Resource)**: `src/data/languages/` provides authentic verified vocabulary (120-250 entries each), contrastive grammar, and communicative guides for Náhuat, Lenca, Kakawira, Mandarin, and Arabic, eliminating synthetic placeholder tokens.
- **Google AdSense Policy Compliance & Content Guards**:
  - `src/components/AdBanner.tsx` and `src/components/LateralAdRails.tsx` enforce substantive content guards (suppressing ads on loading states, empty search/filter results, alerts, modals, and thin pages).
  - Remediation of ad stacking in `PracticeMode.tsx` and loading state ads in `CategoryHierarchyViewer.tsx`.
  - Static semantic crawlable markup in `index.html` (>3,500 words of authentic educational curriculum) and Schema.org `@type: "Course"` JSON-LD metadata for `Mediapartners-Google` and search crawlers.
  - Verification of `sitemap.xml`, `robots.txt`, and `ads.txt`.
- **Automated Verification & Compliance Gate**: `tests/sparseModulesAndAdCompliance.test.ts` programmatically validates R4 content standards (>= 500 words, >= 5 solved cases per topic without boilerplate) and AdSense content guards.

## Feature Inventory
Every requirement and feature from the survey is inventoried and assigned to a milestone:

| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | VMT Curriculum Data | 8 structured thematic units based on Reglamento General de Tránsito and VMT standards (>=500 words/unit) | M1 | ORIGINAL_REQUEST R1, R4 |
| 2 | VMT Solved Cases | 40 concrete, distinct practical traffic case analyses (5 per unit) with legal and technical resolutions | M1 | ORIGINAL_REQUEST R1, R4 |
| 3 | VMT Question Bank & Signs | 50+ high-yield interactive questions and 24+ official road signs with SIECA codes | M1 | ORIGINAL_REQUEST R1 |
| 4 | DriverLicenseView Integration | 4-mode UI (Curriculum Study, Practical Cases, Sign Catalog, 30-Question Official Timed Simulator) | M1 | ORIGINAL_REQUEST R1 |
| 5 | Historia Patria Curriculum | 5 structured thematic units (Precolombino, Independencia, República Moderna, Símbolos/Valores, Patrimonio/Literatura) (>=500 words/unit) | M2 | ORIGINAL_REQUEST R2, R4 |
| 6 | Historia Patria Solved Cases | 25 distinct historical-civic case studies (5 per unit) with constitutional and historiographical analysis | M2 | ORIGINAL_REQUEST R2, R4 |
| 7 | Historia Patria Question Bank | 50-60 high-yield questions with 4 options and distractor rationales, preserving symbols and presidents | M2 | ORIGINAL_REQUEST R2 |
| 8 | PatrioticHistoryView Integration | 4-tab UI (Curriculum Reader, Symbols, Presidents, Timed Exam Simulator 0.0-10.0) | M2 | ORIGINAL_REQUEST R2 |
| 9 | Low-Resource Languages Sanitization | Elimination of synthetic tokens (`lenca_word_X`, `kaka_root_X`, suffix loops) and replacement with authentic lexicons | M3 | ORIGINAL_REQUEST R3 |
| 10 | Low-Resource Languages Expansion | Expand Náhuat, Lenca, Kakawira, Mandarin, Arabic to 120-250 authentic words, contrastive grammar & communicative units | M3 | ORIGINAL_REQUEST R3, R4 |
| 11 | AdBanner Content Guards | Bulletproof props/state guards in `AdBanner` and `LateralAdRails` preventing rendering when content is absent/loading/empty | M4 | ORIGINAL_REQUEST R5 |
| 12 | Screen Ad Violations Fix | Fix loading state ad in `CategoryHierarchyViewer.tsx` and destack 5 consecutive ads in `PracticeMode.tsx` | M4 | ORIGINAL_REQUEST R5 |
| 13 | Crawlable Presence & JSON-LD | Static semantic educational HTML in `index.html` (>3,500 words), Schema.org Course JSON-LD, `sitemap.xml`, `robots.txt`, `ads.txt` | M4 | ORIGINAL_REQUEST R5 |
| 14 | Automated Compliance Suite | Vitest suite verifying >=500 substantive words, >=5 cases per topic, and AdBanner suppression behavior | M5 | ORIGINAL_REQUEST R4, R5, R6 |
| 15 | Platform Integrity Certification | npm run typecheck, npm run build, 100% vitest pass (43+ suites, 711+ tests), zero regressions, zero paywalls | M5 | ORIGINAL_REQUEST R6 |
| 16 | Independent Review & Audit Gate | Reviewers, Challengers and Forensic Auditor verify genuine logic, authentic data, and AdSense compliance | M6 | System Prompt Gate |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M0 | Survey & Codebase Exploration | Comprehensive inspection by 3 parallel Explorers (VMT, History, Languages & AdSense) | None | DONE |
| M1 | Licencia de Conducir VMT Reinforcement | Create `src/data/driverLicense/` (8 units, 40 cases, 50+ questions, 24+ signs) and upgrade `DriverLicenseView.tsx` | M0 | PLANNED |
| M2 | Historia Patria & Civismo Reinforcement | Create `src/data/patrioticHistory/` (5 units, 25 cases, 50-60 questions) and upgrade `PatrioticHistoryView.tsx` | M0 | PLANNED |
| M3 | Indigenous & Low-Resource Languages | Sanitize and expand Náhuat, Lenca, Kakawira, Mandarin, Arabic in `src/data/languages/` | M0 | PLANNED |
| M4 | Google AdSense Remediation & Crawlable Assets | Guard `AdBanner`/`LateralAdRails`, fix screen violations, enrich `index.html`, JSON-LD, `sitemap.xml`, `robots.txt`, `ads.txt` | M0 | PLANNED |
| M5 | Automated Compliance Test Suite | Implement `tests/sparseModulesAndAdCompliance.test.ts` verifying R4 and R5, run full verification (typecheck, tests, build) | M1, M2, M3, M4 | PLANNED |
| M6 | Independent Review & Forensic Audit Gate | Reviewers, Challengers, and Forensic Auditor verification and gate sign-off | M5 | PLANNED |

## Interface Contracts
### `src/data/driverLicense/types.ts`
- `DriverUnit`: `{ id: string; title: string; subtitle: string; icon: string; substantiveTheory: string; practicalCases: PracticalTrafficCase[] }`
- `PracticalTrafficCase`: `{ id: string; title: string; scenario: string; legalReference: string; analysis: string; resolvedOutcome: string }`
- `DriverQuestion`: `{ id: string; question: string; options: string[]; correctAnswer: number; explanation: string; category: string; legalReference?: string }`
- `RoadSign`: `{ id: string; name: string; category: 'reglamentaria' | 'preventiva' | 'informativa'; description: string; meaning: string; siecaCode: string; iconSvg: string }`

### `src/data/patrioticHistory/types.ts`
- `PatrioticThematicUnit`: `{ id: string; title: string; period: string; subtitle: string; substantiveAnalysis: string; solvedCaseStudies: SolvedHistoricalCaseStudy[]; keyMilestones: { year: string; event: string; significance: string }[] }`
- `SolvedHistoricalCaseStudy`: `{ id: string; title: string; historicalContext: string; dilemmaOrIssue: string; historiographicalAnalysis: string; civicSignificance: string }`
- `PatrioticQuestion`: `{ id: string; question: string; options: string[]; correctAnswer: number; explanation: string; thematicUnitId: string; historicalReference: string }`

### `src/data/languages/types.ts`
- `LanguageVocabulary`: `{ id: string; word: string; translation: string; phonetic?: string; category: string; exampleSentence?: string; exampleTranslation?: string }`
- `LanguageGrammar`: `{ spellingRules: any[]; pairDistinctions: any[]; communicativeUnits: { id: string; title: string; substantiveGuide: string; solvedDialogues: { id: string; scenario: string; dialogue: string; grammaticalBreakdown: string }[] }[] }`

### `src/components/AdBanner.tsx`
- Props: `slot?: string; format?: string; responsive?: boolean; className?: string; minSubstantiveWords?: number; hasPublisherContent?: boolean; isLoading?: boolean; isEmpty?: boolean;`
- Safety: If `isLoading === true` OR `isEmpty === true` OR `hasPublisherContent === false` -> render `null` and do not invoke `adsbygoogle.push`.

## Code Layout & Write Boundaries
- `src/data/driverLicense/*` & `src/components/DriverLicenseView.tsx` -> Owned exclusively by Worker M1.
- `src/data/patrioticHistory/*` & `src/components/PatrioticHistoryView.tsx` -> Owned exclusively by Worker M2.
- `src/data/languages/*` -> Owned exclusively by Worker M3.
- `src/components/AdBanner.tsx`, `src/components/LateralAdRails.tsx`, `src/components/PracticeMode.tsx`, `src/components/CategoryHierarchyViewer.tsx`, `index.html`, `public/sitemap.xml`, `public/robots.txt`, `public/ads.txt` -> Owned exclusively by Worker M4.
- `tests/*` -> Owned exclusively by Worker M5 / Test Writers.

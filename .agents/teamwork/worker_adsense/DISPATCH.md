## 2026-10-31T19:25:25Z
You are a Worker agent (worker_adsense).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_adsense

MANDATORY FIRST STEP:
Read the authoritative user request at:
c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md

Also read:
- Project architecture: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\PROJECT.md
- Survey findings: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_languages_adsense\handoff.md

FILE OWNERSHIP BOUNDARY:
You have EXCLUSIVE write ownership of:
- `src/components/AdBanner.tsx`
- `src/components/LateralAdRails.tsx`
- `src/components/PracticeMode.tsx`
- `src/components/CategoryHierarchyViewer.tsx`
- `index.html`
- `public/sitemap.xml`
- `public/robots.txt`
- `public/ads.txt`
DO NOT modify any other files.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your Mission (Milestone M4: Google AdSense Policy Compliance & Content Guard Remediation):
1. Strengthen `src/components/AdBanner.tsx`:
   - Implement strict publisher content guard logic:
     * Props: `hasPublisherContent?: boolean`, `isLoading?: boolean`, `isEmpty?: boolean`, `minSubstantiveWords?: number`, `contentSnippet?: string`.
     * If `isLoading === true` OR `isEmpty === true` OR `hasPublisherContent === false` OR (when `contentSnippet` is provided and substantive word count < `minSubstantiveWords`), `AdBanner` must return `null` and MUST NOT trigger `(window.adsbygoogle = window.adsbygoogle || []).push({})`.
     * Add programmatic guard: check DOM or context to ensure ads never mount in pure modal overlays, alert screens, empty search results, or unrendered containers.
2. Strengthen `src/components/LateralAdRails.tsx`:
   - Integrate identical publisher content guards so lateral desktop ad rails do not mount on thin screens, empty search filters, or initial loading states.
3. Remediate specific screen ad violations:
   - In `src/components/CategoryHierarchyViewer.tsx`: Ensure `AdBanner` is never rendered while `loadingQuestions` is true or when `filteredCategories.length === 0` (empty search state).
   - In `src/components/PracticeMode.tsx`: Remediate lines 1941-1965 where 5 consecutive `AdBanner` units are stacked directly under a single question. De-stack these into a single compliant contextual placement conforming to Google AdSense ad density policies.
4. Remediate low-value content crawler presence:
   - In `index.html`:
     * Prerender rich static semantic HTML (>3,500 words of authentic educational curriculum content, course descriptions, modules index) inside `<div id="root">`. When React boots, it replaces this markup; but when web crawlers (`Mediapartners-Google`, Googlebot) fetch `index.html`, they encounter substantial, high-value educational content rather than an empty 0-word shell.
     * Add comprehensive Schema.org `@type: "EducationalOrganization"` and `@type: "Course"` JSON-LD structured data describing the platform's primary courses (MINED ESMATE, Licencia VMT, Historia Patria, Lenguas Indígenas, etc.).
   - Review and optimize `public/sitemap.xml`, `public/robots.txt`, and `public/ads.txt` ensuring valid publisher declarations (`google.com, pub-5120531548842494, DIRECT, f08c47fec0942fa0`).
5. Verify your implementation:
   - Run `npm run typecheck` and ensure 0 errors.
   - Run `npm run build` and ensure clean production build.
6. Document all changes and test results in `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_adsense\handoff.md`.
Send a completion message via `send_message` when done.

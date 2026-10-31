Reinforce sparse areas across APP-KUSKAT (Licencia de Conducir VMT, Historia Patria, Civismo y Cultura Cuscatleca, and low-resource languages) and remediate Google AdSense policy violations regarding low-value content and ad placement on screens without substantive publisher content.

Working directory: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT
Integrity mode: development

## Requirements

### R1. Licencia de Conducir VMT / Seguridad Vial Reinforcement
Expand the driver license and traffic safety module into dedicated modular curriculum data containing structured thematic units based on the Salvadoran General Traffic Regulations (Reglamento General de Tránsito y Seguridad Vial) and VMT standards. Every unit/topic must provide in-depth legal, technical, and practical traffic guidance along with practical traffic case analyses, expanding the interactive question bank.

### R2. Historia Patria, Civismo y Cultura Cuscatleca Reinforcement
Expand the Salvadoran patriotic history, civics, and culture module into dedicated modular curriculum data containing structured thematic units covering pre-Columbian eras, independence, modern republican history, national symbols, civic values, and cultural heritage. Every unit/topic must provide substantive historical and civic analysis along with concrete historical/civic case studies, expanding the interactive question bank.

### R3. Escuela de Idiomas (Indigenous and Low-Resource Languages) Reinforcement
Reinforce the low-resource and indigenous language modules (including Náhuat, Lenca, Kakawira, Mandarin, and Arabic) in the language school. Expand their vocabulary repositories, basic grammar structures, and communicative guides to reach substantial depth comparable to foundational language modules on the platform.

### R4. Mandatory Educational Content Standard
Every educational topic within any created or expanded thematic unit across the reinforced modules must contain at least 500 substantive words and at least 5 concrete, distinct, non-repetitive solved examples or practical cases relevant to the topic. Substantive word counts must not include code snippets, navigation boilerplate, metadata, or repeated titles.

### R5. Google AdSense Policy Compliance & Content Guard Remediation
Remediate all identified Google AdSense policy violations across the platform:
- Guard against ad placement on screens without publisher content: Ensure Google AdSense ad units (`AdBanner`) never render on screens without substantive publisher content, including loading states, empty search/filter results, pure navigation/menus, alerts, modals, or screens under construction. Ad units must only display when minimum substantive educational content is present.
- Remediate low-value content violations: Ensure high-value, authentic publisher content is immediately available to crawlers and users. Enrich the crawlable presence (static semantic markup in `index.html`, JSON-LD structured educational metadata, valid `sitemap.xml`, `robots.txt`, and `ads.txt`), ensuring that web crawlers (such as `Mediapartners-Google`) encounter substantial educational substance rather than an empty shell.

### R6. Platform Integrity
Maintain platform integrity:
- Ad-supported model preserved with zero paywalls, subscriptions, or payment gateways.
- `npm run typecheck` and `npm run build` pass with zero errors.

## Acceptance Criteria

### Content Quality & Depth
- [ ] Each topic in newly expanded or created thematic units contains >= 500 substantive words (excluding boilerplate, code, and titles).
- [ ] Each topic in newly expanded or created thematic units contains at least 5 distinct, concrete, non-repetitive examples or case analyses.
- [ ] Dedicated modular data files exist for Licencia de Conducir VMT and Historia Patria, integrated into their respective views (`DriverLicenseView.tsx`, `PatrioticHistoryView.tsx`).
- [ ] Low-resource and indigenous language data files (Náhuat, Lenca, Kakawira, Mandarin, Arabic) in `src/data/languages/` are enriched with expanded vocabulary and grammatical structures.

### Google AdSense Compliance
- [ ] `AdBanner` and ad components do not mount or render ads on empty screens, loading states, error/alert displays, or purely navigational views without substantive educational content.
- [ ] Initial crawlable assets (`index.html`, JSON-LD structured data, `sitemap.xml`, `robots.txt`, `ads.txt`) contain rich semantic educational descriptions, site structure, and valid publisher declarations for crawler indexing.
- [ ] All ad placements audited to ensure strict adherence to Google AdSense screen content guidelines.

### Automated Verification & Platform Integrity
- [ ] An automated compliance test suite verifies that every reinforced unit and topic meets the >= 500 substantive words and >= 5 distinct examples criteria.
- [ ] Automated tests verify that `AdBanner` guards prevent rendering ads when publisher content is absent or below substantive threshold.
- [ ] `npm run typecheck` completes with 0 errors.
- [ ] `npm run build` completes cleanly without build or bundle errors.

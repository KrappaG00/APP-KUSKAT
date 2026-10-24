# Test Infrastructure & Methodology: Refuerzo Curricular Oficial MINED (R1-R5)

## 1. Test Philosophy & System Invariants

The test suite for **Refuerzo Curricular Oficial • Educación Básica & Media** enforces structural correctness, pedagogic rigor, accessibility standards (WCAG AAA), and absolute isolation from existing repository assets.

### Core Non-Negotiable Invariants:
1. **Intouchability of Base Question Bank (`public/data/`)**: Exactly 17,640 questions across UES, ANSP, ASD, AVANZO, ENA, and ESCALAFÓN must remain 100% unaltered (`npm run validate:bank`).
2. **Zero Global ID Collisions**: All curricular simulator items must use designated prefixes (`MINED-MAT-*`, `mined-ar-*`) and exhibit zero collision against the 17,640 base bank, the 1,400 specialized modules, and the 120 technical course questions.
3. **Accessibility & Header Contrast (WCAG AAA)**: The main heading in `AcademicReinforcementView.tsx` must explicitly carry `text-white font-black drop-shadow-sm` on dark gradients for a minimum contrast ratio of 7:1.
4. **Pedagogic Fidelity (MINED ESMATE P-S-C-E-R)**: Complete structured phases for lessons: **P** (Problema inicial), **S** (Solución analítica), **C** (Conclusión formal con KaTeX), **E** (Ejemplo guiado), and **R** (Resuelve con pistas).
5. **Strict Multiple-Choice Simulator Format**: Evaluated units must have banks of exactly 50 questions, 4 unique options (A, B, C, D), valid answer keys, and pedagogical justifications referencing official MINED textbooks.
6. **Zero Leaks & Privacy**: Strict absence of private telephone numbers (`git grep "7943 9901"` = 0) and retention of official WhatsApp channel `+503 7657 4463`.

---

## 2. Multi-Tier Test Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│ Tier 4: Real-World Workload, Performance & System Invariants           │
│ - Full Bank Cross-Collision Audit (17,640 base + 1,400 spec + MINED)   │
│ - KaTeX Token Balance & Syntax Crash Resilience                       │
│ - Privacy Audit & Local Git Branch Integrity                          │
├────────────────────────────────────────────────────────────────────────┤
│ Tier 3: Pairwise Combinatorial & Cross-Module Interactions            │
│ - Cycle × Grade × Subject × Tomo Matrix                                │
│ - Simulator Configuration: Question Count (10/25/50) × Timer × Mode    │
│ - Search Filter Cross-Matching & Dynamic Topic Isolation               │
├────────────────────────────────────────────────────────────────────────┤
│ Tier 2: Boundary Value Analysis (BVA) & Partition Edge Cases           │
│ - Pagination Bounds: First page, middle, last page, overflow          │
│ - Grade Bounds: Grade 1 (Lower) to 2° Bachillerato (Upper)            │
│ - Question Bank Bounds: Exactly 50 items (not 49, not 51)             │
│ - Option Lengths & Non-Empty String Bounds                            │
├────────────────────────────────────────────────────────────────────────┤
│ Tier 1: Functional & Contract Verification                             │
│ - R1: Pure White Header & WCAG AAA CSS Verification                   │
│ - R2: MinedCurriculum Data Architecture & P-S-C-E-R Completeness      │
│ - R3: Unit Simulator 50 Questions & Answer Key Validation              │
│ - R4: Curriculum Service API & Component Ergonomics                   │
│ - R5: Invariant Preservation Pipeline                                 │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Formal Testing Methodologies

### 3.1 Category-Partition Method
Input domain is decomposed into independent functional categories and representative partitions:

| Category | Partitions | Expected Handling |
|---|---|---|
| **Grade Level** | Primer Ciclo (1°-3°), Segundo Ciclo (4°-6°), Tercer Ciclo (7°-9°), Media (1°-2° Bach) | Validated hierarchy, correct cycle categorization, exact 11 grades |
| **Subject** | ESMATE, ESLENGUA, Ciencias, Ciudadanía | Subject module loading, primary math focus with interdisciplinary modules |
| **Tomo** | Tomo 1, Tomo 2 | Units properly mapped to their publication volume |
| **Lesson Component** | P (Problema), S (Solución), C (Conclusión), E (Ejemplo), R (Resuelve) | All 5 phases non-empty; KaTeX formulas in C/E; hints in R |
| **Question Bank** | Evaluated Unit Bank | Exactly 50 items; unique IDs; distinct options A, B, C, D; valid key index |
| **Simulator Batch** | 10 questions, 25 questions, 50 questions | Proper slice of items without undefined indexes |
| **Simulator Mode** | Modo Tutor (instant feedback) vs Modo Examen (final report) | Tutor reveals explanation immediately; Exam compiles score report |
| **Timer Option** | None (untimed), 60s per item, 90s per item | Timer config accepted and dispatched |

### 3.2 Boundary Value Analysis (BVA)
Tests specifically probe boundary limits and critical thresholds:
- **Grades**: Lower boundary (1° Grado, ID `1-grado`), Upper boundary (2° Bachillerato, ID `2-bachillerato`), Middle transition (6° to 7° Grado).
- **Question Banks**: Exactly $N = 50$ items per evaluated unit. Off-by-one errors ($N = 49$, $N = 51$) immediately fail test.
- **Options per Question**: Exactly 4 options ($K = 4$). Less than 4 or duplicate text entries trigger failures.
- **Pagination**:
  - Page index 0 (First block, items 1-10).
  - Intermediate page (Items 21-30).
  - Last page (Items 41-50 for a 50-item bank).
  - Page overflow (Requesting page index $> \lceil N / \text{pageSize} \rceil$).
- **String Length Boundaries**:
  - Statements $> 20$ characters.
  - Explanations $> 25$ characters.
  - Option text $> 1$ character.

### 3.3 Pairwise Combinatorial Testing
Reduces combinatorial explosion of multi-variable UI configurations to pairwise interaction pairs:
- **Matrix 1: Navigation State**
  - Cycle (4 values) $\times$ Grade (11 values) $\times$ Tomo (2 values) $\times$ View Tab (Lessons vs Simulator).
- **Matrix 2: Simulator Session Configuration**
  - Question Count (`[10, 25, 50]`) $\times$ Timer (`[null, 60, 90]`) $\times$ Evaluation Mode (`['tutor', 'exam']`).
  - Total combinations = $3 \times 3 \times 2 = 18$ test states covering all operational paths.

### 3.4 Workload & Real-World Stress (Tier 4)
- **Rapid Navigation / State Switching**: Rapidly querying `curriculumService` across all 11 grades sequentially to verify zero memory leak or unhandled exception.
- **Cross-Bank Collision Detection**: O(N) set intersection of all IDs across the entire repository to guarantee zero duplicate keys across 19,000+ items.
- **KaTeX Delimiter Parity**: Regex scan across all conclusion texts and explanations ensuring every opening `$` has a matching closing `$`, preventing LaTeX rendering crashes in production.

---

## 4. Requirements Traceability Matrix (RTM)

| Req | Description | Verification Target | Test Method in `tests/academicReinforcement.test.ts` |
|:---:|---|---|---|
| **R1** | Pure White Header Styling | `AcademicReinforcementView.tsx` | Static source AST/regex audit checking `'text-white font-black drop-shadow-sm'` on main title tag. |
| **R2** | MINED Curriculum Architecture | `src/data/minedCurriculum/` | Verifies 11 grades, official subjects, Tomo 1/2 split, official unit titles, and P-S-C-E-R lesson completeness. |
| **R3** | 50-Question Unit Simulator | `src/data/minedCurriculum/` | Verifies exactly 50 questions per unit, unique IDs, 4 options A/B/C/D, valid answer key, MINED references, zero mocks. |
| **R4** | UI & Service Pagination / Ergonomics | `curriculumService.ts` & UI | Tests 10-item pagination, 10/25/50 selectors, timer configs, tutor vs exam modes, and search filtering. |
| **R5** | System Invariants & Privacy | Repository-wide | Tests 17,640 base questions intact in `public/data/`, zero private phones (`7943 9901`), and test pipeline readiness. |

---

## 5. Verification Commands

```bash
# Execute focused Academic Reinforcement test suite
npx vitest run tests/academicReinforcement.test.ts

# Execute full repository unit tests
npm test

# Verify TypeScript type integrity
npm run typecheck

# Verify 17,640 base question bank
npm run validate:bank

# Verify 100% i18n dictionary coverage
npm run validate:i18n

# Production build verification
npm run build

# Security / Privacy leak check
git grep "7943 9901"
```

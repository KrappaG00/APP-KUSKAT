# E2E Test Suite Ready: Refuerzo Curricular Oficial MINED (R1-R5)

## 1. Test Runner Commands

### Focused Academic Reinforcement Test Suite:
```bash
npx vitest run tests/academicReinforcement.test.ts
```

### Full Project Quality Gate:
```bash
npm test
```

### Master Verification Pipeline:
```bash
npm run typecheck && npm test && npm run validate:bank && npm run validate:i18n && npm run build && git grep "7943 9901"
```

---

## 2. Requirement Verification Matrix (R1 - R5)

| Requirement | Test Focus & Assertion | Test Block | Current Status | Target Milestone |
|:---:|---|---|:---:|:---:|
| **R1** | Header Styling: `text-white font-black drop-shadow-sm` on `<h2>` in `AcademicReinforcementView.tsx` | Block 1 (R1.1 - R1.5) | **TEST READY** (Awaiting M3 UI) | Milestone M3 |
| **R2** | Curricular Data Model: 11 Grades (`1-grado` to `2-bachillerato`), 4 Cycles, Subjects (ESMATE, ESLENGUA, Ciencias, Ciudadanía), Tomos 1 & 2, Official MINED Units, P-S-C-E-R lesson methodology, and KaTeX balance | Block 2 (R2.1 - R2.7) | **TEST READY** (Catalog verified, awaiting M1 lesson datasets) | Milestone M1 |
| **R3** | 50-Question Unit Simulator: Exactly 50 multiple choice items per evaluated unit, 4 unique options [A, B, C, D], validated keys, MINED book references, zero placeholders, zero collisions across all 19,000+ items | Block 3 (R3.1 - R3.7) | **TEST READY** (Awaiting M2 50-Q banks) | Milestone M2 |
| **R4** | UI Ergonomics & Service: `curriculumService` accessor contracts, 10-item pagination, 10/25/50 selectors, timer configs (none, 60s, 90s), tutor vs exam modes, and real-time search | Block 4 (R4.1 - R4.6) | **TEST READY** (Logic verified, awaiting M1/M3 service integration) | Milestones M1 & M3 |
| **R5** | Repository Invariants: 17,640 base questions in `public/data/` 100% intact, zero leaks of private phone `7943 9901`, official WhatsApp `+503 7657 4463` preserved, 0 typecheck errors | Block 5 (R5.1 - R5.4) | **VERIFIED PASS** (100% Passing) | Continuous Invariant |

---

## 3. Test Architecture & Tier Mapping

| Tier | Focus | Tests Implemented | Verification Method |
|---|---|---|---|
| **Tier 1: Functional & Contract** | Basic rendering, header classes, types compilation, catalog completeness | 12 tests | Direct assertion against AST/source, `types.ts`, and `catalog.ts` |
| **Tier 2: Boundary Value Analysis** | Grade boundary (1° to 2° Bach), 50-item exact bounds, 4 unique options, pagination bounds | 8 tests | Slicing verification, off-by-one checks, string length $> 20$ |
| **Tier 3: Pairwise Combinatorial** | Cycle $\times$ Grade $\times$ Subject $\times$ Tomo matrix, Timer $\times$ Mode $\times$ Count, KaTeX syntax balance | 6 tests | Delimiter parity regex, combinatorial matrix sweep |
| **Tier 4: Workload & Invariants** | Cross-bank ID collision across 19,000+ items, base bank 17,640 preservation, privacy leak audit | 4 tests | Full set intersection against `public/data/` and specialized modules |

---

## 4. Current Execution Diagnostic (Baseline)

- **Total Unit Tests Executed in `tests/academicReinforcement.test.ts`**: 30 tests
- **Passing Tests**: 25 tests
- **Pending Implementation Gates**: 5 tests
  1. `el tag h2 del título principal tiene explícitamente las clases "text-white font-black drop-shadow-sm"` $\rightarrow$ Pending Milestone M3 (`AcademicReinforcementView.tsx`)
  2. `las lecciones curriculares implementan rigurosamente la secuencia didáctica ESMATE (P-S-C-E-R)` $\rightarrow$ Pending Milestone M1 (`curriculumService.ts` lesson detail)
  3. `cada unidad curricular evaluada cuenta con exactamente 50 reactivos completos` $\rightarrow$ Pending Milestone M2 (`50-question simulator banks`)
  4. `cero IDs duplicados dentro de la misma unidad y a través de todas las unidades MINED` $\rightarrow$ Pending Milestone M2 (`curriculumService` question bank population)
  5. `curriculumService expone métodos de consulta según el contrato de PROJECT.md` $\rightarrow$ Pending Milestone M1 (`curriculumService.ts` service implementation)

---

## 5. Artifact Status & Handover
- `tests/academicReinforcement.test.ts`: Complete, rigorous, self-contained, 100% TypeScript typecheck clean.
- `TEST_INFRA.md`: Updated and published at project root.
- `TEST_READY.md`: Published and ready for orchestrator aggregation.

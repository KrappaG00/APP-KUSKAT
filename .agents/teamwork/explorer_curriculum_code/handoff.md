# Handoff Report: Curriculum Codebase Architecture & Invariant Investigation

**Author:** `explorer_curriculum_code` (Teamwork Explorer)  
**Target Recipient:** Orchestrator (`c86d0692-61de-42a4-859c-60fdfb31cccd`)  
**Working Directory:** `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_curriculum_code\`  
**Date:** 2026-10-31T06:05:00Z  
**Reference Artifacts:**
- Full JSON Inventory: `.agents/teamwork/explorer_curriculum_code/units_inventory.json`
- Markdown Overview Table: `.agents/teamwork/explorer_curriculum_code/units_overview.md`

---

## 1. Observation

### 1.1 Files and Directory Structure of `src/data/minedCurriculum/`
The curriculum module is organized into a modular tree with a barrel entry point, metadata catalog, service layer, TypeScript interfaces, and 11 individual grade datasets plus one shared helper file:

```
src/data/minedCurriculum/
├── catalog.ts                  # Light catalog (<25 KB) with grade/subject/unit metadata
├── curriculumService.ts        # Query engine, searchCurriculum, getUnitQuestions, fallback generator
├── index.ts                    # Barrel export
├── types.ts                    # Core TypeScript interfaces (PscerLesson, CurriculumUnit, etc.)
└── grades/
    ├── grade01PrimerGrado.ts   # 1° Grado (8 units, 11 lessons, 1 static question bank)
    ├── grade02SegundoGrado.ts  # 2° Grado (9 units, 10 lessons, 1 static question bank)
    ├── grade03TercerGrado.ts   # 3° Grado (10 units, 11 lessons, 1 static question bank)
    ├── grade04CuartoGrado.ts   # 4° Grado (9 units, 9 lessons, 1 static question bank)
    ├── grade05QuintoGrado.ts   # 5° Grado (10 units, 11 lessons, 1 static question bank)
    ├── grade06SextoGrado.ts    # 6° Grado (11 units, 12 lessons, 1 static question bank)
    ├── grade07SeptimoGrado.ts  # 7° Grado (8 units, 9 lessons, 1 static question bank)
    ├── grade08OctavoGrado.ts   # 8° Grado (8 units, 9 lessons, 1 static question bank)
    ├── grade09NovenoGrado.ts   # 9° Grado (8 units, 9 lessons, 1 static question bank)
    ├── grade10PrimerBach.ts    # 1° Bachillerato (8 units, 9 lessons, 1 static question bank)
    ├── grade11SegundoBach.ts   # 2° Bachillerato (8 units, 12 lessons, 2 static question banks)
    └── gradeHelpers.ts         # Generators, normalizers, boilerplate injectors & question builder
```

### 1.2 Breakdown of the 97 Units Across All 11 Grades
Direct analysis of `src/data/minedCurriculum/grades/` and `catalog.ts` confirms exactly **97 units** across the 11 grades:

| Grado Escolar | Archivo Fuente | Ciclo Educativo | Unidades Oficiales | Lecciones Actuales | Unidades con Banco Estático |
|---|---|---|:---:|:---:|:---:|
| **1° Grado** | `grade01PrimerGrado.ts` | Primer Ciclo de Básica | **8** | 11 | U01 (`mined-mat-1g-u01`) |
| **2° Grado** | `grade02SegundoGrado.ts` | Primer Ciclo de Básica | **9** | 10 | U01 (`mined-mat-2g-u01`) |
| **3° Grado** | `grade03TercerGrado.ts` | Primer Ciclo de Básica | **10** | 11 | U01 (`mined-mat-3g-u01`) |
| **4° Grado** | `grade04CuartoGrado.ts` | Segundo Ciclo de Básica | **9** | 9 | U01 (`mined-mat-4g-u01`) |
| **5° Grado** | `grade05QuintoGrado.ts` | Segundo Ciclo de Básica | **10** | 11 | U01 (`mined-mat-5g-u01`) |
| **6° Grado** | `grade06SextoGrado.ts` | Segundo Ciclo de Básica | **11** | 12 | U01 (`mined-mat-6g-u01`) |
| **7° Grado** | `grade07SeptimoGrado.ts` | Tercer Ciclo de Básica | **8** | 9 | U01 (`mined-mat-7g-u01`) |
| **8° Grado** | `grade08OctavoGrado.ts` | Tercer Ciclo de Básica | **8** | 9 | U01 (`mined-mat-8g-u01`) |
| **9° Grado** | `grade09NovenoGrado.ts` | Tercer Ciclo de Básica | **8** | 9 | U01 (`mined-mat-9g-u01`) |
| **1° Bachillerato** | `grade10PrimerBach.ts` | Educación Media | **8** | 9 | U01 (`mined-mat-1b-u01`) |
| **2° Bachillerato** | `grade11SegundoBach.ts` | Educación Media | **8** | 12 | U01 (`mined-mat-2b-u01`), U03 (`mined-mat-2b-u03`) |
| **TOTALES** | **11 Grados** | **4 Ciclos** | **97 Unidades** | **112 Lecciones** | **12 Estáticos / 85 Dinámicos** |

*Verification Quote (`tests/challengerCurriculumStress.test.ts:135-156`):*
```ts
it('verifies that getAllUnits() returns exactly 97 official units', () => {
  const allUnits = getAllUnits();
  expect(allUnits.length).toBe(97);
});
// EXPECTED_ESMATE_UNIT_COUNTS sum = 8 + 9 + 10 + 9 + 10 + 11 + 8 + 8 + 8 + 8 + 8 = 97
```

### 1.3 Data Types and Contract Interfaces (`types.ts`)
In `src/data/minedCurriculum/types.ts`:
1. **`PscerLesson`** (lines 54–64):
   ```ts
   export interface PscerLesson {
     id: string; // ej: "mined-mat-2b-u03-l01"
     lessonNumber: string; // ej: "1.1", "2.3"
     title: string; // Título de la clase/lección
     problema: string; // P: Problema inicial
     solucion: string; // S: Solución analítica paso a paso
     conclusion: string; // C: Formalización y fórmulas con KaTeX ($...$ o $$...$$)
     ejemplo?: string; // E: Ejemplo guiado resuelto principal
     examples?: string[]; // E: Mínimo 5 ejemplos concretos y distintos desarrollados paso a paso
     resuelve: PscerResuelveItem[]; // R: Práctica formativa
   }
   ```
2. **`PscerResuelveItem`** (lines 39–44):
   ```ts
   export interface PscerResuelveItem {
     id?: string;
     exercise: string;
     hint?: string;
     answer?: string;
   }
   ```
3. **`CurriculumUnit`** (lines 85–98):
   ```ts
   export interface CurriculumUnit {
     id: string; // ej: "mined-mat-2b-u03"
     unitNumber: number;
     title: string;
     subjectId: SubjectId;
     gradeId: GradeLevelId;
     tomo: TomoNumber; // 1 | 2
     summary: string;
     competencies: string[];
     isEvaluated?: boolean;
     questionCount?: number;
     lessons: PscerLesson[];
     questions: UnitQuestion[];
   }
   ```
4. **`UnitQuestion`** (lines 69–80):
   ```ts
   export interface UnitQuestion {
     id: string; // ej: "MINED-MAT-2B-U03-Q001"
     unitId: string;
     gradeId: GradeLevelId;
     subjectId: SubjectId;
     statement: string;
     options: [string, string, string, string]; // Cuatro opciones unívocas
     correctAnswer: AnswerOptionKey; // 'A' | 'B' | 'C' | 'D'
     explanation: string;
     officialBookRef: string;
     distractorRationales?: Record<AnswerOptionKey, string>;
   }
   ```

### 1.4 Detailed Analysis of `gradeHelpers.ts`
`src/data/minedCurriculum/grades/gradeHelpers.ts` contains the following utilities:
- **`deterministicSeed(id: string): number`** (lines 15–21): Polynomial hash `(hash * 31 + char) % 10007` to pick deterministic numbers and Salvadoran department names.
- **`normalizeLooseCurrencyDollar(text: string): string`** (lines 26–32): Replaces unpaired currency `$100` into `100 dólares` so KaTeX delimiter counts remain balanced.
- **`buildFiveDistinctExamples(...)`** (lines 38–89): **This is the parameterized placeholder generator.** It builds 5 synthetic template examples:
  - *Example 1:* `"Ejemplo 1 (Aplicación directa del modelo ESMATE en Clase ${lessonNumber} - ${title}): ${safeBaseEjemplo} Para verificar este primer caso práctico de manera integral, identificamos los datos explícitos del enunciado, aplicamos de forma directa el criterio establecido en la conclusión oficial de la clase..."`
  - *Example 2:* `"Ejemplo 2 (Resolución analítica guiada de ejercicio formativo): Consideremos el planteamiento "${firstResuelve.exercise}"..."`
  - *Example 3:* `"Ejemplo 3 (Modelado contextualizado en un centro escolar de ${depto}): En un proyecto académico desarrollado en ${depto}, un equipo de estudiantes aplica el tema "${title}" para organizar datos reales de laboratorio y campo donde la primera magnitud registrada es ${valA} unidades..."`
  - *Example 4:* `"Ejemplo 4 (Diagnóstico de errores frecuentes y comprobación por operación inversa)..."`
  - *Example 5:* `"Ejemplo 5 (Caso integrador de evaluación sumativa por unidad)..."`
- **`createPscerLesson(...)`** (lines 96–166): **This is the boilerplate injector.**
  - If `customExamples && customExamples.length >= 5` is not passed, it calls `buildFiveDistinctExamples` (~300 synthetic words).
  - It appends 99 words to `problema`: `" Contexto pedagógico y análisis heurístico del problema inicial (Clase ${lessonNumber}: ${title}): En esta primera etapa fundamental de la secuencia didáctica oficial del Ministerio de Educación de El Salvador (MINED)..."`
  - It appends 90 words to `solucion`: `" Desarrollo metodológico detallado paso a paso: En primer lugar, estructuramos la información extraída del problema inicial en una secuencia ordenada..."`
  - It appends 76 words to `conclusion`: `" Síntesis formal y orientaciones didácticas de dominio: Esta conclusión constituye el pilar teórico de la clase ${lessonNumber} (${title})..."`
  - It appends synthetic `resuelve` items if `resuelve.length < 3`.
  - Total boilerplate injected into every lesson: **~565 words**.
- **`createQuestion(...)`** (lines 171–193): Simple factory for `UnitQuestion`.
- **`ensureDistinctOptions(...)`** (lines 210–241): Deduplicates options without mutating the correct answer.
- **`balanceQuestionOptions(...)`** (lines 247–266): Balances keys A, B, C, D across questions so each key receives 12 or 13 occurrences in 50 items.
- **`generate50UnitQuestions(...)`** (lines 268–330): Core 50-question generator.
- **`createCurriculumUnit(...)`** (lines 336–362): Factory for `CurriculumUnit`.

### 1.5 Word Counts and Example Counts: Empirical Finding
We executed `check_raw_words.py` across all 112 lessons in `src/data/minedCurriculum/grades/`:
- **Raw substantive words per lesson (BEFORE boilerplate padding):**
  - **Minimum:** 16 words (e.g., `4.1 Multiplicación de factores de varias cifras` in 4° Grado, `2.1 Cantidades variables` in 6° Grado).
  - **Maximum:** 130 words (e.g., `8.1 Probabilidad condicional` in 2° Bachillerato).
  - **Average:** **78.3 words**.
- **Lessons currently meeting >= 500 substantive words on their own:** **0 of 112 (0%)**.
- **Lessons currently passing custom examples:** **0 of 112 (0%)**.
- Every single lesson currently passes `tests/contentAndAdCompliance.test.ts` (>= 500 words and >= 5 examples) solely because `gradeHelpers.ts` injects ~565 words of synthetic boilerplate and 5 generic departmental templates!

### 1.6 Investigation of `generate50UnitQuestions`
- **Location:** `src/data/minedCurriculum/grades/gradeHelpers.ts:268–330`.
- **Signature:**
  ```ts
  export function generate50UnitQuestions(
    unitId: string,
    gradeId: GradeLevelId,
    gradeCode: string, // "1G", "2G", ..., "1B", "2B"
    unitNum: number,
    unitTitle: string,
    bookRef: string,
    archetypes: QuestionArchetype[]
  ): UnitQuestion[]
  ```
- **Operational Mechanics:**
  - It takes an array of `QuestionArchetype` objects. Each archetype provides a `.generate(variation, qIndex)` method producing `{ statement, options, correctAnswer, explanation }`.
  - It loops through archetypes and variations up to 50 questions.
  - It passes options through `ensureDistinctOptions` and `balanceQuestionOptions`.
  - Question ID format: `MINED-MAT-${gradeCode}-U${uStr}-Q${qNumStr}` (e.g., `MINED-MAT-1G-U01-Q001` to `Q050`).
- **Dependencies:**
  - Used in 12 units directly (`u1Questions1G` through `u1Questions1B`, plus `u1Questions2B` and `u3Questions2B`).
  - Used in `curriculumService.ts:174` inside `buildFallback50Questions` for the other 85 units.
- **Critical Isolation Property:**
  - **`generate50UnitQuestions` has ZERO dependency on `PscerLesson` or lesson prose.**
  - It only consumes `QuestionArchetype[]`, `unitId`, `gradeId`, `gradeCode`, `unitNum`, `unitTitle`, and `bookRef`.
  - Modifying or expanding lesson content in `grade01` to `grade11` or cleaning boilerplate in `createPscerLesson` will NOT disrupt question generation.

### 1.7 UI Consumption and Rendering Architecture
In `src/components/AcademicReinforcementView.tsx`:
- **Pillar 3 & 4: Accordion & Lesson Viewer (lines 1040–1339):**
  - Iterates over `filteredUnits` (from `currentSubject.units`).
  - Expanding a unit (`expandedUnitId === unit.id`) displays competencies (`unit.competencies.map(...)`) and lesson cards (`unit.lessons.map(...)`).
  - Clicking a lesson toggles `activeLessonId`.
  - **P (Problema):** Rendered inside an indigo card (`lines 1183–1191`) as `{lesson.problema}`.
  - **S (Solución):** Rendered inside an emerald card (`lines 1194–1202`) with `whitespace-pre-line` as `{lesson.solucion}`.
  - **C (Conclusión):** Rendered inside a blue card (`lines 1205–1213`) wrapped in `<KaTeXRenderer content={lesson.conclusion} />`.
  - **E (Ejemplos):**
    - If `lesson.examples && lesson.examples.length > 0`: maps over `lesson.examples`, rendering each inside its own styled card with `<KaTeXRenderer content={exItem} />` (`lines 1216–1239`).
    - Else fallback to `lesson.ejemplo` with `<KaTeXRenderer content={lesson.ejemplo} />` (`lines 1240–1250`).
  - **R (Resuelve):** Rendered in a purple/slate card (`lines 1253–1311`), mapping `lesson.resuelve` items with interactive toggle buttons for `💡 Ver Pista Didáctica` (`item.hint`) and `✓ Ver Solución` (`item.answer` rendered via `<KaTeXRenderer content={item.answer} />`).
- **Pillar 5: 50-Question Simulator Modal (lines 1345–1732):**
  - Opened via `handleOpenSimulator(unit)` button on any unit card.
  - Invokes `getUnitQuestions(selectedGradeId, unit.id)`.
  - Supports 10, 25, or 50 questions, paginated by blocks of 10 (`simItemsPerPage = 10`), timer options, tutor/exam mode, retry errors, and instant grading.
- **Header Invariant (lines 822–824):**
  ```tsx
  <h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow-sm tracking-tight font-montenegrin">
    Refuerzo Académico (1° a 9° Grado y Bachillerato)
  </h2>
  ```
  The CSS classes `text-white font-black drop-shadow-sm` are strictly verified by `tests/academicReinforcement.test.ts:110-138`.

---

## 2. Logic Chain

1. **Premise 1:** The user request mandates expanding the lessons for all 97 MINED-ESMATE units with >= 500 substantive words and 5 step-by-step solved examples per topic, while eliminating generic boilerplate and parameterized templates from `gradeHelpers.ts` (R1).
2. **Observation 1:** `units_inventory.json` confirms exactly 97 units across Grades 1–9 and Bachillerato 1–2. Currently, there are 112 lessons linked to these 97 units.
3. **Observation 2:** Our word count audit shows that before boilerplate enrichment, lessons have an average of only 78.3 words (min 16, max 130), and zero lessons have custom examples.
4. **Observation 3:** `createPscerLesson` in `gradeHelpers.ts` inflates word counts by concatenating ~565 words of generic prose and 5 fake departmental examples.
5. **Observation 4:** In `tests/contentAndAdCompliance.test.ts:107`, line `expect(totalLessons).toBe(112);` explicitly tests that exactly 112 lessons exist and each satisfies `>= 500` genuine words (excluding LaTeX/markup) and `>= 5` distinct examples.
6. **Observation 5:** In `AcademicReinforcementView.tsx:1216-1239`, the UI expects `lesson.examples` to be an array of strings, rendering each with `KaTeXRenderer`.
7. **Observation 6:** `generate50UnitQuestions` relies only on `QuestionArchetype[]` and unit metadata; it does NOT consume `PscerLesson` or lesson text.
8. **Deduction:**
   - To eliminate boilerplate from `gradeHelpers.ts`, `createPscerLesson` must accept clean substantive content without prepending or appending synthetic text.
   - To satisfy the 500-word and 5-example requirement genuinely, all 112 lessons (or topics covering the 97 units) must have real mathematical expositions based on official ESMATE textbooks written directly into their respective grade files.
   - If the lesson count is maintained at 112 (or if the test expectation in `contentAndAdCompliance.test.ts` is updated to reflect expanded lesson counts per unit), all invariant tests will continue to pass seamlessly.
   - `generate50UnitQuestions` and the 17,640 base questions in `public/data/` will remain completely unaffected because their data pathways are separate from the lesson text arrays.

---

## 3. Caveats

1. **Number of Lessons per Unit:**
   Currently, 85 of the 97 units have exactly 1 lesson defined in the codebase, while 12 units have 2 to 4 lessons, totaling 112 lessons. The requirement states: *"Cada tema dentro de una unidad debe contener una explicación conceptual específica y real de al menos 500 palabras... y al menos 5 ejemplos concretos"*. If each of the existing 112 lessons represents the unit's core thematic lesson, expanding each to >= 500 words and 5 examples satisfies all criteria and preserves `expect(totalLessons).toBe(112)` in `tests/contentAndAdCompliance.test.ts`. If multiple lessons per unit are introduced, the test's `totalLessons` count must be adjusted accordingly.
2. **KaTeX Delimiter Rigor:**
   `tests/challengerCurriculumStress.test.ts` and `KaTeXRenderer.tsx` enforce that all dollar signs `$` and `$$` in conclusions and examples must be strictly balanced (even count of `$`). Raw currency like `$25` must be written as `\$25` or `25 dólares` or embedded in math like `\$25`.
3. **Read-Only Investigation Scope:**
   As a read-only explorer, no source code in `src/` or `tests/` was altered during this investigation. All findings were verified using local analysis scripts and Vitest executions.

---

## 4. Conclusion

The architecture of `src/data/minedCurriculum/` is cleanly isolated, highly modular, and well-typed. The path forward for implementation is clear and completely feasible:

1. **97 Units Confirmed:** Exactly 97 ESMATE units across 11 grades (8, 9, 10, 9, 10, 11, 8, 8, 8, 8, 8).
2. **Current Deficit Identified:** 100% of current lessons (112 lessons) rely on ~565 words of boilerplate in `gradeHelpers.ts` to pass tests; average raw content is only 78.3 words.
3. **Boilerplate Remediation Target:**
   - Modify `createPscerLesson` in `gradeHelpers.ts` to stop appending generic heuristic paragraphs to `problema`, `solucion`, and `conclusion`, and stop injecting the 5 generic departmental templates from `buildFiveDistinctExamples`.
   - Instead, require `examples` (or `customExamples`) with 5 genuine solved step-by-step mathematical examples directly in each lesson definition.
4. **Simulator Independence:**
   - `generate50UnitQuestions` is fully decoupled from lesson text. Its mechanics, distinct options validation, and key balancing can be 100% preserved with zero regressions.
5. **UI Compatibility:**
   - `AcademicReinforcementView.tsx` already has native support for `lesson.examples` (mapping each item to a styled KaTeX-rendered block). Writing genuine examples directly populates this UI without requiring UI component changes.
6. **Files to be Affected in Implementation:**
   - `src/data/minedCurriculum/grades/gradeHelpers.ts` (clean up boilerplate generation)
   - `src/data/minedCurriculum/grades/grade01PrimerGrado.ts` through `grade11SegundoBach.ts` (11 grade files to receive real ESMATE content: >= 500 words and 5 solved examples per lesson)
   - `tests/contentAndAdCompliance.test.ts` (verify or adjust automated assertion suite)

---

## 5. Verification Method

To independently verify the observations and conclusions reported here:

1. **Inspect Full Unit Inventory:**
   ```powershell
   python .agents/teamwork/explorer_curriculum_code/generate_inventory.py
   Get-Content .agents/teamwork/explorer_curriculum_code/units_overview.md
   ```
2. **Verify TypeScript Type Safety:**
   ```powershell
   npm run typecheck
   ```
   *Expected:* Exit code 0, 0 errors.
3. **Run Curriculum and Invariant Tests:**
   ```powershell
   npx vitest run tests/academicReinforcement.test.ts tests/challengerCurriculumStress.test.ts tests/contentAndAdCompliance.test.ts
   ```
   *Expected:* All 56 tests pass.
4. **Verify Question Bank Invariants:**
   ```powershell
   npm run validate:bank
   ```
   *Expected:* Exact match of 17,640 base questions, 0 errors, 0 warnings.
5. **Verify Multilingual Intercultural Invariants:**
   ```powershell
   npm run validate:i18n
   ```
   *Expected:* 100% UI coverage across all 7 supported languages.
6. **Verify Production Build:**
   ```powershell
   npm run build
   ```
   *Expected:* Exit code 0, clean Vite production bundle generated.

# Handoff Report: Survey of Legal, Judicial & Constitutional Modules

**Date:** 2026-10-23  
**Agent:** explorer_survey_legal  
**Mission:** Exhaustive read-only technical investigation of Examen de Suficiencia Notarial CSJ and Casoteca Constitucional CSJ in APP-KUSKAT.

---

## 1. Observation

### 1.1 Baseline System Verification
We executed the verification pipeline to establish the current working state:
- `npm test`: Executed Vitest across 13 test suites (`tests/scoring.test.ts`, `tests/scrollToTop.test.ts`, `tests/errorBoundary.test.ts`, `tests/adBanner.test.ts`, `tests/motionSites.test.ts`, `tests/categoryTheory.test.ts`, `tests/bancoService.test.ts`, `tests/authAndStats.test.ts`, `tests/i18n.test.ts`, `tests/tutorial.test.ts`, `tests/bankValidation.test.ts`, `tests/trueFalse.test.ts`, `tests/languages.test.ts`). **Result: 13 passed, 151 tests passed (0 failures).**
- `npm run typecheck`: Executed `tsc --noEmit`. **Result: Exit code 0 (0 TypeScript errors).**
- `npm run validate:bank`: Checked `public/data/questions` and `manifest.json`. **Result: UES=7500, ANSP=250, ASD=2190, AVANZO=3000, ENA=1400, ESCALAFON=3300, Total=17640 valid questions, 0 errors, 0 warnings.**
- `npm run validate:i18n`: Checked multi-language coverage across 7 idioms. **Result: 100% UI coverage (117/117 keys across all languages).**
- `git grep "7943 9901"`: **Result: 0 occurrences (exit code 1).** Only the official support contact +503 7657 4463 exists.

---

### 1.2 Module 1: Examen de Suficiencia Notarial CSJ

#### A. File Locations and Architecture
- `src/components/NotaryExamView.tsx`: Exists (495 lines).
- `src/data/notaryExamData.ts`: **Does NOT exist yet**. The type `NotaryQuestion` and the constant array `NOTARY_EXAM_QUESTIONS` are currently hardcoded directly within `src/components/NotaryExamView.tsx` (lines 21–135).
- In `src/App.tsx` (lines 82, 834):
  ```tsx
  const NotaryExamView = React.lazy(() => import('./components/NotaryExamView'));
  // ...
  {activeTab === 'notary-exam' && <NotaryExamView />}
  ```
- In `tests/`: There is currently **no unit test suite** validating `NotaryExamView` or `NOTARY_EXAM_QUESTIONS`.

#### B. Current Data Structure and Type Definition
In `src/components/NotaryExamView.tsx` (lines 21–30):
```typescript
export interface NotaryQuestion {
  id: string;
  topic: string;
  legalBasis: string;
  statement: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
  csjPrecedent?: string;
}
```

#### C. Inventory of Current Items (7 Items)
1. `not-01`: *Identificación de Comparecientes sin DUI* | Art. 32 numeral 5° Ley de Notariado (LN) | Correct: 'B' | Precedent: Sección de Notariado CSJ (responsabilidad solidaria).
2. `not-02`: *Otorgamiento de Testamento Abierto y Solemnidades* | Art. 40 LN y Art. 1009 C.C. | Correct: 'B' (3 testigos idóneos) | Precedent: Ref. 184-CAC-2018 (unidad de acto).
3. `not-03`: *Aceptación de Herencia en Sede Notarial (Jurisdicción Voluntaria)* | Arts. 18-21 LENJVOD | Correct: 'B' (declaración de herederos interinos, edictos).
4. `not-04`: *Prohibición Expresa de Autorización de Instrumentos a Favor de Familiares* | Art. 9 LN | Correct: 'C' (nulidad absoluta y sanción disciplinaria) | Precedent: Corte Plena CSJ.
5. `not-05`: *Custodia, Cierre y Entrega del Libro de Protocolo* | Arts. 21-26 LN | Correct: 'B' (30 días siguientes al vencimiento del año).
6. `not-06`: *Testamento Otorgado por Persona Ciega (Solemnidad Especial)* | Art. 1010 C.C. | Correct: 'B' (doble lectura: notario y testigo elegido) | Precedent: Ref. 94-CAC-2015 (nulidad ipso jure).
7. `not-07`: *Poder General Judicial y Facultades Especiales* | Art. 69 CPCM | Correct: 'B' (facultades especiales expresas e individualizadas).

#### D. View Implementation and Assertions in `NotaryExamView.tsx`
- **Tabs**:
  1. `study`: "Ejes Sustantivos de la Función Notarial" (Art. 32 LN: Encabezamiento, Comparecencia, Cuerpo, Conclusión; Fe Pública y Responsabilidad).
  2. `jurisprudence`: "Jurisprudencia Vinculante CSJ" (Ref. 184-CAC-2018, Corte Plena Art. 9, Ref. 94-CAC-2015, Sala de lo Civil Firma a Ruego).
  3. `simulator`: Interactive simulator displaying `NOTARY_EXAM_QUESTIONS`.
- **Dynamic Scoring and Rendering**:
  - Line 152–156:
    ```typescript
    const correctCount = NOTARY_EXAM_QUESTIONS.reduce((acc, q) => {
      return acc + (selectedAnswers[q.id] === q.correctKey ? 1 : 0);
    }, 0);
    const scorePct = Math.round((correctCount / NOTARY_EXAM_QUESTIONS.length) * 100);
    ```
  - Lines 371–375:
    ```tsx
    <span>{NOTARY_EXAM_QUESTIONS.length - correctCount}</span> // Errores
    <span>{NOTARY_EXAM_QUESTIONS.length}</span>               // Total Reactivos
    ```
  - Line 383: Iterates directly over `NOTARY_EXAM_QUESTIONS.map((q, idx) => ...)`.
  - **Result**: The view dynamically adapts to any length of `NOTARY_EXAM_QUESTIONS`. Increasing the array from 7 to 20 automatically updates total questions, score calculation, error count, and rendered cards without requiring UI layout refactoring.

---

### 1.3 Module 2: Casoteca Constitucional CSJ

#### A. File Locations and Architecture
- `src/data/constitucionalJurisprudenciaData.ts`: Exists (167 lines).
- `src/components/ConstitutionLawView.tsx`: Exists (951 lines).
- In `src/App.tsx` (lines 83, 873):
  ```tsx
  const ConstitutionLawView = React.lazy(() => import('./components/ConstitutionLawView'));
  // ...
  {activeTab === 'constitution' && <ConstitutionLawView />}
  ```
- In `tests/`: There is currently **no unit test suite** validating `CONSTITUTIONAL_CASES` or `AMPARO_STEP_GUIDE`.

#### B. Current Data Structure and Type Definitions
In `src/data/constitucionalJurisprudenciaData.ts` (lines 7–32):
```typescript
export interface ConstitutionalRulingCase {
  id: string;
  refNumber: string;
  year: number;
  rulingType: 'Inconstitucionalidad' | 'Amparo' | 'Hábeas Corpus' | 'Controversia';
  title: string;
  constitutionalArticles: string[];
  factsSummary: string;
  ratioDecidendi: string;
  practicalImpact: string;
  legalQuiz: {
    question: string;
    options: { key: string; text: string }[];
    correctKey: string;
    explanation: string;
  };
}

export interface AmparoStepGuide {
  stepNumber: number;
  title: string;
  legalRequirement: string;
  practicalGuidance: string;
  commonMistakes: string;
  modelSnippet: string;
}
```

#### C. Inventory of Current Sentencias (4 Items)
1. `sc-inc-044-2013`: *Inconstitucionalidad de la Ley de Amnistía General de 1993* | Ref: Inc. 44-2013 / 145-2013 (2016) | Inconstitucionalidad | Arts. 1, 2, 144, 244 Cn. | Correct: 'B' (acceso a la verdad y justicia prevalecen).
2. `sc-hc-179-2011`: *Límites Temporales de la Detención Provisional y Motivación Judicial* | Ref: H.C. 179-2011 (2012) | Hábeas Corpus | Arts. 11, 12, 13 Cn. | Correct: 'B' (medida cautelar excepcional, no pena anticipada).
3. `sc-inc-004-2012`: *Principio de Reserva de Ley y Legalidad de la Administración Pública* | Ref: Inc. 4-2012 (2014) | Inconstitucionalidad | Arts. 86, 131 Ord. 6°, 231 Cn. | Correct: 'B' (prohibición de tipificar sanciones por reglamento).
4. `sc-amp-408-2015`: *Derecho a la Salud y Tutela Judicial Efectiva del Mínimo Vital* | Ref: Amp. 408-2015 (2017) | Amparo | Arts. 2, 65 Cn. | Correct: 'B' (medida cautelar positiva de abastecimiento médico inmediato).

Additionally, `AMPARO_STEP_GUIDE` contains 5 procedural steps (1: Legitimación, 2: Autoridad demandada, 3: Agotamiento de recursos, 4: Delimitación de derecho, 5: Medida cautelar).

#### D. View Implementation and Assertions in `ConstitutionLawView.tsx`
- In `ConstitutionLawView.tsx`, sub-tab `casoteca` (lines 661–838):
  - Line 676: Displays `{CONSTITUTIONAL_CASES.length} Sentencias de Hito`.
  - Line 681: Iterates over `CONSTITUTIONAL_CASES.map((rulingCase, cIdx) => ...)`.
  - Lines 735–740 and 751–756: Uses `AudioSpeechButton` with IDs `case-facts-${rulingCase.id}` and `case-ratio-${rulingCase.id}`.
  - Lines 786–834: Renders `rulingCase.legalQuiz` with options, selection state `quizAnswers[rulingCase.id]`, verification against `legalQuiz.correctKey`, and explanation badge.
  - **Result**: The UI dynamically renders the cases. Expanding `CONSTITUTIONAL_CASES` from 4 to 10 will immediately display "10 Sentencias de Hito" and generate interactive quizzes and audio buttons for all 10 cases without any UI code changes.

---

## 2. Logic Chain

```
[Observation: Notary questions (7) are embedded in src/components/NotaryExamView.tsx]
       │
       ▼
[Deduction: In all other specialized modules (CSSP, ANSP, AML, Residentado, Admin),
 data is decoupled into src/data/<module>Data.ts. Creating src/data/notaryExamData.ts
 standardizes the architecture, enables modular expansion to 20 items, and facilitates dedicated unit testing.]
       │
       ▼
[Observation: NotaryExamView.tsx re-exports types and dynamically uses NOTARY_EXAM_QUESTIONS.length]
       │
       ▼
[Deduction: If src/data/notaryExamData.ts exports NotaryQuestion and NOTARY_EXAM_QUESTIONS (20 items),
 and NotaryExamView.tsx imports them and re-exports them, 100% backwards compatibility is preserved,
 with 0 regressions in App.tsx or any consumers.]
       │
       ▼
[Observation: Original Request demands 20 notary items covering 7 specific legal domains:
 1. solemnidades de testamentos abiertos y cerrados (Arts. 1009-1015 C.C.)
 2. protocolización de resoluciones judiciales (Arts. 55-58 LN)
 3. otorgamiento sin DUI por testigos de conocimiento (Art. 32 LN)
 4. diligencias de jurisdicción voluntaria (LENJVOD: aceptación de herencia, remedición)
 5. poderes con cláusula especial (Art. 69 CPCM)
 6. constitución de sociedades mercantiles (Código de Comercio)
 7. precedentes de Sala de lo Civil y Corte Plena sobre nulidades absolutas y disciplina]
       │
       ▼
[Deduction: Expanding existing 7 items by adding 13 comprehensive items (not-08 through not-20)
 perfectly fulfills all 7 doctrinal requirements while maintaining established item IDs (not-01..not-07).]

─────────────────────────────────────────────────────────────────────────────────

[Observation: constitucionalJurisprudenciaData.ts contains 4 cases; ConstitutionLawView.tsx dynamically renders CONSTITUTIONAL_CASES.length]
       │
       ▼
[Observation: Original Request demands 10 sentencias paradigmáticas covering 5 specific areas:
 1. reserva de ley tributaria y punitiva (Art. 86 y 231 Cn.)
 2. Hábeas Corpus contra detención arbitraria y condiciones penitenciarias
 3. amparo contra desabastecimiento de medicamentos (Art. 65 Cn.)
 4. derecho de acceso a la información pública (LAIP)
 5. inconstitucionalidad de decretos ejecutivos sin habilitación legislativa]
       │
       ▼
[Deduction: The existing 4 cases already address:
 - Ley de Amnistía (Inc. 44-2013)
 - Detención provisional (H.C. 179-2011)
 - Reserva de ley punitiva/sancionadora (Inc. 4-2012)
 - Desabastecimiento de medicamentos (Amp. 408-2015)]
       │
       ▼
[Deduction: Adding 6 landmark sentencias will reach exactly 10 cases and fulfill all required topics:
 5. Inc. 21-2020 / Inc. 63-2020 (Decretos ejecutivos sin habilitación legislativa / COVID-19)
 6. H.C. 119-2014 (Hábeas Corpus correctivo contra hacinamiento y condiciones penitenciarias)
 7. Amp. 713-2015 (Acceso a la información pública, máxima publicidad y probidad patrimonial LAIP)
 8. Inc. 28-2015 (Reserva de ley tributaria, distinción entre tasas e impuestos encubiertos)
 9. Inc. 6-2016 (Vicio formal de deliberación democrática y abuso de dispensa de trámite)
 10. Amp. 68-2011 (Estabilidad laboral reforzada de mujer embarazada y fuero de maternidad)]
       │
       ▼
[Deduction: All 10 cases strictly comply with ConstitutionalRulingCase interface, provide
 4-option quizzes (A, B, C, D) with ratio decidendi explanations, and activate dynamic audio playback.]
```

---

## 3. Detailed Specifications for Implementation

### 3.1 Examen de Suficiencia Notarial CSJ (20 Items)

#### Target File: `src/data/notaryExamData.ts`
The data file should define `NotaryQuestion` and export `NOTARY_EXAM_QUESTIONS`:

```typescript
export interface NotaryQuestion {
  id: string;
  topic: string;
  legalBasis: string;
  statement: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
  csjPrecedent?: string;
}
```

#### Item Mapping Table (Total: 20 Items)
| ID | Area / Tema | Base Legal Salvadoreña | Clave | Resumen del Precedente CSJ |
|---|---|---|:---:|---|
| `not-01` | Identificación de comparecientes sin DUI | Art. 32 ord. 5° LN | B | Testigos de conocimiento asumen responsabilidad solidaria sobre identidad |
| `not-02` | Testamento solemne abierto y solemnidades | Arts. 40 LN y 1009 CC | B | Ref. 184-CAC-2018: unidad de acto ininterrumpida; salida de testigo causa nulidad |
| `not-03` | Aceptación de herencia notarial | Arts. 18-21 LENJVOD | B | Resolución de herederos interinos, administración y publicación de 3 edictos |
| `not-04` | Prohibición de otorgamiento a favor de parientes | Art. 9 LN | C | Corte Plena: nulidad absoluta de pleno derecho y causal de suspensión notarial |
| `not-05` | Cierre y entrega del libro de protocolo | Arts. 21-26 LN | B | Plazo perentorio de 30 días posteriores al año de vigencia |
| `not-06` | Testamento de persona ciega (solemnidad especial) | Art. 1010 CC | B | Ref. 94-CAC-2015: doble lectura íntegra en voz alta obligatoria |
| `not-07` | Poder general judicial y cláusula especial | Art. 69 CPCM | B | Cláusula especial expresa e individualizada para transigir, desistir o allanarse |
| `not-08` | Testamento cerrado y formalidades de la cubierta | Arts. 1015-1017 CC | B | Sala de lo Civil: otorgamiento ante 5 testigos; prohibido para analfabetos |
| `not-09` | Protocolización de resoluciones judiciales | Arts. 55-58 LN | B | Sala de lo Civil: protocolización transcribe resoluciones pero no subsana nulidades de fondo |
| `not-10` | Diligencias notariales de remedición de inmuebles | Art. 15 LENJVOD | B | Sala de lo Civil: citación previa a colindantes (mínimo 3 días) bajo pena de nulidad |
| `not-11` | Constitución de sociedades mercantiles (S.A. de C.V.) | Arts. 22 y 195 C.Com. | B | CNR Registro de Comercio: exhibición de cheque certificado por capital mínimo ($2,000) |
| `not-12` | Inhabilidades legales para ser testigo instrumental | Art. 31 LN | C | Corte Plena: parientes del notario dentro del 4° consanguinidad no pueden ser testigos |
| `not-13` | Firma a ruego y estampación de huella dactilar | Art. 32 ord. 12° LN | B | Sala de lo Civil: compareciente que no firma debe estampar huella más firma a ruego |
| `not-14` | Testamento otorgado en lengua extranjera | Art. 1013 CC | B | Sala de lo Civil: concurrencia obligatoria de dos intérpretes juramentados |
| `not-15` | Sustitución y delegación de poderes judiciales | Art. 72 CPCM y 1891 CC | C | Sala de lo Civil: sustitución exige facultad expresa en la matriz; prohibida sustitución tácita |
| `not-16` | Oposición en diligencias de jurisdicción voluntaria | Art. 2 inc. 2° LENJVOD | B | Corte Plena: notario pierde competencia de pleno derecho y debe remitir expediente a juez |
| `not-17` | Escrituras matrices suspendidas en el protocolo | Arts. 27-28 LN | B | Sección de Notariado CSJ: razón formal de 'SUSPENDIDA' con motivo expreso y firma |
| `not-18` | Venta de cosa ajena y tradición del dominio | Arts. 1619 CC y 46 LN | B | Sala de lo Civil: contrato vale pero tradición sin tracto sucesivo genera responsabilidad notarial |
| `not-19` | Salvedad de enmiendas, testaduras y entrerrenglonaduras | Art. 32 ord. 11° LN | B | Sala de lo Civil: palabras no salvadas formalmente antes de las firmas se tienen por no puestas |
| `not-20` | Régimen disciplinario y causales de suspensión notarial | Arts. 62-67 LN | B | Corte Plena CSJ: 'alquiler de protocolo' y préstamo de firmas acarrea inhabilitación |

---

### 3.2 Casoteca Constitucional CSJ (10 Sentencias)

#### Target File: `src/data/constitucionalJurisprudenciaData.ts`
The data file should expand `CONSTITUTIONAL_CASES` to 10 instances of `ConstitutionalRulingCase`:

```typescript
export interface ConstitutionalRulingCase {
  id: string;
  refNumber: string;
  year: number;
  rulingType: 'Inconstitucionalidad' | 'Amparo' | 'Hábeas Corpus' | 'Controversia';
  title: string;
  constitutionalArticles: string[];
  factsSummary: string;
  ratioDecidendi: string;
  practicalImpact: string;
  legalQuiz: {
    question: string;
    options: { key: string; text: string }[];
    correctKey: string;
    explanation: string;
  };
}
```

#### Sentencias Mapping Table (Total: 10 Cases)
| ID | Referencia | Año | Tipo | Título / Eje Temático | Artículos Cn. |
|---|---|:---:|---|---|---|
| `sc-inc-044-2013` | Inc. 44-2013 / 145-2013 | 2016 | Inconstitucionalidad | Inconstitucionalidad de la Ley de Amnistía General de 1993 (Justicia Transicional) | Arts. 1, 2, 144, 244 |
| `sc-hc-179-2011` | H.C. 179-2011 | 2012 | Hábeas Corpus | Límites Temporales de la Detención Provisional y Motivación Judicial | Arts. 11, 12, 13 |
| `sc-inc-004-2012` | Inc. 4-2012 | 2014 | Inconstitucionalidad | Principio de Reserva de Ley y Legalidad de la Administración Pública | Arts. 86, 131 Ord. 6°, 231 |
| `sc-amp-408-2015` | Amp. 408-2015 | 2017 | Amparo | Derecho a la Salud y Tutela Judicial Efectiva del Mínimo Vital (Medicamentos) | Arts. 2, 65 |
| `sc-inc-021-2020` | Inc. 21-2020 / Inc. 63-2020 | 2020 | Inconstitucionalidad | Inconstitucionalidad de Decretos Ejecutivos de Emergencia sin Habilitación Legislativa | Arts. 86, 131 Ord. 5°, 164, 29 |
| `sc-hc-119-2014` | H.C. 119-2014 | 2016 | Hábeas Corpus | Hábeas Corpus Correctivo contra Hacinamiento Carcelario y Condiciones Inhumanas | Arts. 2, 11, 27 |
| `sc-amp-713-2015` | Amp. 713-2015 | 2018 | Amparo | Acceso a la Información Pública y Transparencia Patrimonial (LAIP) | Arts. 6, 85, 86 |
| `sc-inc-028-2015` | Inc. 28-2015 | 2017 | Inconstitucionalidad | Reserva de Ley Tributaria y Distinción entre Tasas e Impuestos Encubiertos | Arts. 131 Ord. 6°, 204 Ord. 1°, 231 |
| `sc-inc-006-2016` | Inc. 6-2016 | 2017 | Inconstitucionalidad | Inconstitucionalidad Formal por Vicio de Deliberación Democrática en el Proceso de Ley | Arts. 125, 135, 142 |
| `sc-amp-068-2011` | Amp. 68-2011 | 2013 | Amparo | Estabilidad Laboral Reforzada de la Mujer Trabajadora en Estado de Gravidez | Arts. 1, 2, 32, 38 Ord. 11° |

---

### 3.3 Test Strategy: Proposed `tests/legalModules.test.ts`
To lock down this expansion and prevent regressions, the implementer should create `tests/legalModules.test.ts` with assertions verifying:
1. `NOTARY_EXAM_QUESTIONS`:
   - `expect(NOTARY_EXAM_QUESTIONS.length).toBe(20)`.
   - All 20 IDs match `/^not-(0[1-9]|1[0-9]|20)$/` and are strictly unique.
   - Every question has non-empty `topic`, `legalBasis`, `statement`, `correctKey` in `['A', 'B', 'C', 'D']`, `explanation`, and `csjPrecedent`.
   - Every question has exactly 4 options with keys `['A', 'B', 'C', 'D']` and non-empty text.
   - The correctKey is contained within the option keys.
   - Topics include: "testamento", "protocolización", "DUI", "jurisdicción voluntaria" / "herencia", "remedición", "poder", "sociedad", "nulidad" / "prohibición" / "disciplinario".
2. `CONSTITUTIONAL_CASES`:
   - `expect(CONSTITUTIONAL_CASES.length).toBe(10)`.
   - All 10 IDs are strictly unique.
   - Every case has `refNumber`, valid `year` (number between 2000 and 2026), `rulingType` in `['Inconstitucionalidad', 'Amparo', 'Hábeas Corpus', 'Controversia']`, non-empty `title`, at least one article in `constitutionalArticles`, non-empty `factsSummary`, `ratioDecidendi`, `practicalImpact`.
   - Every case has `legalQuiz` with non-empty `question`, exactly 4 options (`A`, `B`, `C`, `D`), valid `correctKey`, and non-empty `explanation`.
   - Sentencias cover:
     - Reserva de ley sancionadora y tributaria (`Art. 86`, `Art. 231`)
     - Hábeas Corpus (detención provisional y correctivo/condiciones penitenciarias)
     - Amparo (salud/medicamentos `Art. 65`, LAIP acceso a la información `Art. 6`, fuero de maternidad `Art. 38`)
     - Decretos ejecutivos sin habilitación legislativa (`Art. 131 Ord. 5°`, `Art. 29`, `Art. 86`)
     - Deliberación democrática en el proceso de ley (`Art. 135`)
3. `AMPARO_STEP_GUIDE`:
   - `expect(AMPARO_STEP_GUIDE.length).toBe(5)`.
   - Steps are ordered 1 to 5 with non-empty guidance and model snippets.

---

## 4. Caveats
- **Read-Only Scope**: This agent performed an exhaustive read-only inspection. No production source code or test files outside `.agents/teamwork/` were modified.
- **Data File Standardization**: While `NotaryExamView.tsx` currently houses `NOTARY_EXAM_QUESTIONS`, extracting it to `src/data/notaryExamData.ts` and re-exporting it from `NotaryExamView.tsx` ensures zero breakage for existing imports while adhering to the workspace directory convention.
- **Base Question Bank Isolation**: The 17,640 base questions validated by `npm run validate:bank` reside in `public/data/questions/` and `public/data/ansp/questions/`. Neither `src/data/notaryExamData.ts` nor `src/data/constitucionalJurisprudenciaData.ts` touch the base JSON files, guaranteeing that the 17,640 count remains 100% intact.

---

## 5. Conclusion
1. **Examen de Suficiencia Notarial**: Current count is 7 items. The data structure is clean and robust. Expanding to 20 items by extracting to `src/data/notaryExamData.ts` and adding items `not-08` through `not-20` satisfies all requirements (testamentos solemnes, protocolizaciones, testigos de conocimiento, jurisdicción voluntaria/remedición/herencia, poderes especiales Art. 69 CPCM, sociedades mercantiles S.A. de C.V., y nulidades de Sala de lo Civil y Corte Plena).
2. **Casoteca Constitucional**: Current count is 4 cases. The data structure and UI rendering in `ConstitutionLawView.tsx` are fully functional and dynamic. Expanding to 10 sentencias paradigmáticas by adding cases 5 through 10 in `src/data/constitucionalJurisprudenciaData.ts` fulfills all required themes (decretos ejecutivos de emergencia, Hábeas Corpus correctivo y penitenciario, LAIP acceso a información pública, reserva de ley tributaria, deliberación democrática y estabilidad laboral reforzada).
3. **Automated Verification**: Adding `tests/legalModules.test.ts` will raise the Vitest test count from 151 to 155+ while ensuring strict verification of counts, schemas, and legal citations.

---

## 6. Verification Method

To verify these findings and the subsequent implementation:

1. **Verify TypeScript compilation**:
   ```powershell
   npm run typecheck
   ```
   *Expected: Exit code 0, 0 errors.*

2. **Verify unit tests**:
   ```powershell
   npm test
   ```
   *Expected: 14+ suites passed, 155+ tests passed, 0 failures.*

3. **Verify question bank integrity**:
   ```powershell
   npm run validate:bank
   ```
   *Expected: Exactly 17,640 questions validated, 0 errors.*

4. **Verify i18n coverage**:
   ```powershell
   npm run validate:i18n
   ```
   *Expected: 100% UI coverage.*

5. **Verify private phone elimination**:
   ```powershell
   git grep "7943 9901"
   ```
   *Expected: 0 occurrences (exit code 1).*

6. **Verify production build**:
   ```powershell
   npm run build
   ```
   *Expected: Clean build in `dist/`.*

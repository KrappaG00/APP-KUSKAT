# Handoff Report: Technical Survey of 7 Specialized Modules

**Author**: Explorer 1 (Data Survey)  
**Date**: 2026-10-23T16:09:00Z  
**Target Audience**: Parent Orchestrator (`3f4421ca-8da7-495a-a734-3ce450e9530d`), Explorer 2 (UI/Pagination), Implementers  

---

## 1. Observation

A comprehensive inspection of the 7 specialized data modules, their TypeScript contracts, current contents, ID naming patterns, target distributions, central registry integrations, UI components, and unit test suites was conducted across `APP-KUSKAT`.

### 1.1 Summary Matrix of the 7 Specialized Data Modules

| # | Data File Path | Current Items | Target Items | TypeScript Interface | Options Shape | Answer Key Field | ID Prefix / Pattern |
|---|----------------|---------------|--------------|----------------------|---------------|------------------|---------------------|
| 1 | `src/data/derechoAdministrativoData.ts` | 11 | 200 | `AdminLawQuestion` | Record `{ A, B, C, D }` | `correctAnswer: 'A'\|'B'\|'C'\|'D'` | `lpa-01` to `lpa-200` |
| 2 | `src/data/saludPrimariaData.ts` | 9 | 200 | `SaludPrimariaQuestion` | Record `{ A, B, C, D }` | `correctAnswer: 'A'\|'B'\|'C'\|'D'` | `dengue-01..`, `hta-01..`, `ram-01..` |
| 3 | `src/data/ingenieriaCienciasData.ts` | 9 | 200 | `EngineeringMathQuestion` | Record `{ A, B, C, D }` | `correctAnswer: 'A'\|'B'\|'C'\|'D'` | `ing-01` to `ing-200` |
| 4 | `src/data/notaryExamData.ts` | 20 | 200 | `NotaryQuestion` | Array `{ key: string, text: string }[]` | `correctKey: string` | `not-01` to `not-200` |
| 5 | `src/data/csspHealthData.ts` | 25 | 200 | `CsspQuestion` | Record `Record<string, string>` | `correctAnswer: 'A'\|'B'\|'C'\|'D'` | `cssp-jvpm-01..`, `cssp-jvpo-01..` |
| 6 | `src/data/anspAscensoData.ts` | 18 | 200 | `PolicePromotionQuestion` | Array `{ key: 'A'\|'B'\|'C'\|'D', text: string }[]` | `correctAnswer: 'A'\|'B'\|'C'\|'D'` | `pnc-cabo-001..`, `pnc-sargento-001..` |
| 7 | `src/data/complianceAmlData.ts` | 16 | 200 | `ComplianceQuestion` | Record `{ A, B, C, D }` | `correctAnswer: 'A'\|'B'\|'C'\|'D'` | `aml-01..`, `seg-01..` |

Total current specialized questions: **108 items**.  
Total target specialized questions: **1,400 items** (7 × 200).  
Note: None of these 7 files use the baseline `Question` interface from `src/types/index.ts`. All 7 use specialized domain interfaces.

---

### 1.2 Module-by-Module Technical Breakdown

#### 1. `src/data/derechoAdministrativoData.ts`
- **File Location**: `src/data/derechoAdministrativoData.ts` (lines 1–417)
- **TypeScript Interface**:
  ```typescript
  export interface AdminLawQuestion {
    id: string;
    category: 'procedimiento-comun' | 'silencio-administrativo' | 'recursos-administrativos' | 'potestad-sancionadora' | 'firma-electronica';
    categoryLabel: string;
    area: string;
    statement: string;
    options: { A: string; B: string; C: string; D: string; };
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
    legalBasis: string;
    distractorRationale: { A?: string; B?: string; C?: string; D?: string; };
  }
  ```
- **Exported Symbols**: `ADMIN_LAW_SECTORS`, `LPA_PROCEDURE_FLOW`, `ADMIN_LAW_QUESTIONS`.
- **Current Counts & Categories**:
  - `procedimiento-comun`: 3 items (`lpa-01` to `lpa-03`)
  - `silencio-administrativo`: 2 items (`lpa-04`, `lpa-05`)
  - `recursos-administrativos`: 2 items (`lpa-06`, `lpa-07`)
  - `potestad-sancionadora`: 2 items (`lpa-08`, `lpa-09`)
  - `firma-electronica`: 2 items (`lpa-10`, `lpa-11`)
  - Total: 11 questions.
- **Exact Expansion Breakdown Needed (200 items)**:
  - **150 Ley de Procedimientos Administrativos (LPA)**:
    - ~38 Procedimiento Común y Plazos (`procedimiento-comun`)
    - ~37 Silencio Administrativo (`silencio-administrativo`)
    - ~38 Vía Recursiva (`recursos-administrativos`)
    - ~37 Potestad Sancionadora (`potestad-sancionadora`)
    (Sum = 150 items)
  - **50 Firma Electrónica MINEC**:
    - 50 Firma Electrónica Certificada y PSCs (`firma-electronica`)
  - **ID Convention**: `lpa-01` to `lpa-200` (or `lpa-001` to `lpa-200`).

---

#### 2. `src/data/saludPrimariaData.ts`
- **File Location**: `src/data/saludPrimariaData.ts` (lines 1–362)
- **TypeScript Interface**:
  ```typescript
  export interface SaludPrimariaQuestion {
    id: string;
    category: 'farmacovigilancia' | 'dengue' | 'hta-dm2'; // Note: see expansion below
    categoryLabel: string;
    clinicalArea: string;
    vignette?: string;
    statement: string;
    options: { A: string; B: string; C: string; D: string; };
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    clinicalExplanation: string;
    officialGuidelineRef: string;
    distractorRationale: { A?: string; B?: string; C?: string; D?: string; };
  }
  ```
- **Exported Symbols**: `SALUD_SECTORS`, `DENGUE_TRIAGE_ALGORITHM`, `SALUD_PRIMARIA_QUESTIONS`.
- **Current Counts & Categories**:
  - `dengue`: 3 items (`dengue-01` to `dengue-03`)
  - `hta-dm2`: 3 items (`hta-01` to `hta-03`)
  - `farmacovigilancia`: 3 items (`ram-01` to `ram-03`)
  - Total: 9 questions.
- **Exact Expansion Breakdown Needed (200 items)**:
  - **150 Guías Clínicas MINSAL para UCSF**:
    - Dengue (Grupos A, B, C, fluidoterapia, defervescencia, signos de alarma): ~30 items
    - Hipertensión Arterial (estadios, IECAs/ARA-II, crisis hipertensiva, MAPA): ~30 items
    - Diabetes Mellitus Tipo 2 (criterios HbA1c, metformina, insulina, pie diabético): ~30 items
    - Infecciones Respiratorias Agudas (IRAS: neumonía comunitaria, crup, bronquiolitis, broncoespasmo): ~30 items
    - Salud Materno-Infantil (control prenatal MINSAL, tamizaje neonatal, vacunación PAI, lactancia, Crecer Juntos): ~30 items
    (Sum = 150 items)
  - **50 Farmacovigilancia SRS / Centro Nacional de Farmacovigilancia (CNFV / antigua DNM)**:
    - Clasificación de Rawlins-Thompson (Tipos A, B, C, D, E, F)
    - Algoritmo de Imputabilidad de Naranjo (10 preguntas ponderadas)
    - Noti-FACED / Tarjeta Amarilla, plazos de 48-72h para RAM grave, RTCA 11.04.47:17
    (Sum = 50 items)
  - **Category Types Note**: Either keep `category: 'dengue' | 'hta-dm2' | 'farmacovigilancia'` (using `clinicalArea` for IRAS and Materno-Infantil) or expand union type to `'dengue' | 'hta-dm2' | 'iras' | 'materno-infantil' | 'farmacovigilancia'` with corresponding entries in `SALUD_SECTORS` so the filter UI allows selecting them directly. Expanding `category` and `SALUD_SECTORS` is recommended for optimal user filtering.
  - **ID Convention**: `dengue-01..`, `hta-01..`, `iras-01..`, `mat-01..`, `ram-01..` or sequential `salud-001` to `salud-200`.

---

#### 3. `src/data/ingenieriaCienciasData.ts`
- **File Location**: `src/data/ingenieriaCienciasData.ts` (lines 1–396)
- **TypeScript Interface**:
  ```typescript
  export interface EngineeringMathQuestion {
    id: string;
    category: 'algebra-lineal' | 'trigonometria-analitica' | 'geometria-conicas' | 'fisica-mecanica';
    categoryLabel: string;
    topic: string;
    problemStatement: string; // IMPORTANT: 'problemStatement' NOT 'statement'
    options: { A: string; B: string; C: string; D: string; };
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    formalSolution: string;
    stepByStepDerivation: string[];
    distractorRationale: { A?: string; B?: string; C?: string; D?: string; };
  }
  ```
- **Exported Symbols**: `INGENIERIA_SECTORS`, `INGENIERIA_FORMULAS`, `INGENIERIA_QUESTIONS`.
- **Current Counts & Categories**:
  - `algebra-lineal`: 3 items (`ing-01` to `ing-03`)
  - `trigonometria-analitica`: 2 items (`ing-04`, `ing-05`)
  - `geometria-conicas`: 2 items (`ing-06`, `ing-07`)
  - `fisica-mecanica`: 2 items (`ing-08`, `ing-09`)
  - Total: 9 problems.
- **Exact Expansion Breakdown Needed (200 items)**:
  - **50 Álgebra Lineal** (`algebra-lineal`): Matrices, determinantes (Laplace, Sarrus), Gauss-Jordan, rango, Rouché-Frobenius, valores/vectores propios, Cramer.
  - **50 Trigonometría Analítica** (`trigonometria-analitica`): Identidades pitagóricas, ángulo doble/mitad, transformaciones producto-suma, ecuaciones trigonométricas, ley de senos/cosenos (caso ambiguo LLA).
  - **50 Cónicas y Geometría Analítica** (`geometria-conicas`): Circunferencia, parábola, elipse, hipérbola, discriminante cuadrático $B^2 - 4AC$, excentricidad, asíntotas, rotación y traslación de ejes.
  - **50 Física Vectorial y Mecánica** (`fisica-mecanica`): Estática 2D/3D (primera y segunda condición de equilibrio, torques, método de nodos/secciones), dinámica de Newton, fricción de Coulomb, trabajo y energía, choque elástico/inelástico.
  - Total = Exactly 200 analíticos con KaTeX, derivación paso a paso y distractores justificados.
  - **ID Convention**: `ing-01` to `ing-200` (or `ing-001` to `ing-200`).

---

#### 4. `src/data/notaryExamData.ts`
- **File Location**: `src/data/notaryExamData.ts` (lines 1–328)
- **TypeScript Interface**:
  ```typescript
  export interface NotaryQuestion {
    id: string;
    topic: string;
    legalBasis: string;
    statement: string;
    options: { key: string; text: string }[]; // IMPORTANT: Array of objects
    correctKey: string;                       // IMPORTANT: 'correctKey' NOT 'correctAnswer'
    explanation: string;
    csjPrecedent?: string;                    // Precedentes Sala de lo Civil / Corte Plena
  }
  ```
- **Exported Symbols**: `NOTARY_EXAM_QUESTIONS`. (Re-exported by `src/components/NotaryExamView.tsx`).
- **Current Counts & IDs**:
  - Total: 20 items (`not-01` to `not-20`).
- **Exact Expansion Breakdown Needed (200 items)**:
  - **40 Notarial Puro**: Ley de Notariado (formalidades de escrituras matrices, testimonios, libro de protocolo, actas notariales, firma a ruego, testigos de conocimiento Art. 32 LN, prohibición Art. 9 LN, clausura y entrega de protocolo).
  - **40 Jurisdicción Voluntaria (LENJVOD)**: Aceptación de herencia, remedición de inmuebles con citación a colindantes, partición judicial/extrajudicial, títulos supletorios, oposición legítima Art. 2 LN.
  - **40 Sucesiones (Código Civil)**: Testamentos solemnes abiertos y cerrados (Arts. 1009-1017 C.C.), asignaciones forzosas, legítimas rigorosas, cuarta de mejoras, derecho de acrecer, desheredamiento, beneficio de inventario.
  - **40 Contratos y Obligaciones Civiles**: Compraventa, venta de cosa ajena (Art. 1619 C.C.), tracto sucesivo registral, hipotecas, promesas de venta, nulidades absolutas y relativas, rescisión, poderes y cláusulas especiales (Arts. 69 y 72 CPCM).
  - **40 Mercantil y Sociedades (Código de Comercio)**: Constitución y modificación de sociedades mercantiles (S.A. de C.V., S.A.S.), aumentos y disminuciones de capital, libros corporativos, títulos valores, letras de cambio, pagarés.
  - Total = Exactly 200 reactivos.
  - **ID Convention**: `not-01` to `not-200` (fits `not-${i.toString().padStart(2, '0')}`).

---

#### 5. `src/data/csspHealthData.ts`
- **File Location**: `src/data/csspHealthData.ts` (lines 1–626)
- **TypeScript Interface**:
  ```typescript
  export interface CsspQuestion {
    id: string;
    juntaId: 'jvpm' | 'jvpo' | 'jvpe' | 'jvpqf' | 'jvpps';
    juntaName: string;
    area: string;
    legalBasis: string;
    statement: string;
    options: Record<string, string>; // { A: string, B: string, C: string, D: string }
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
    distractorRationale: Record<string, string>;
  }
  export interface CsspJuntaMeta {
    id: 'jvpm' | 'jvpo' | 'jvpe' | 'jvpqf' | 'jvpps';
    name: string;
    shortName: string;
    profession: string;
    icon: string;
    description: string;
    legalCode: string;
  }
  ```
- **Exported Symbols**: `CSSP_JUNTAS`, `CSSP_QUESTIONS_DATA`.
- **Current Counts & IDs**:
  - `jvpm`: 5 items (`cssp-jvpm-01` to `cssp-jvpm-05`)
  - `jvpo`: 5 items (`cssp-jvpo-01` to `cssp-jvpo-05`)
  - `jvpe`: 5 items (`cssp-jvpe-01` to `cssp-jvpe-05`)
  - `jvpqf`: 5 items (`cssp-jvpqf-01` to `cssp-jvpqf-05`)
  - `jvpps`: 5 items (`cssp-jvpps-01` to `cssp-jvpps-05`)
  - Total: 25 items.
- **Exact Expansion Breakdown Needed (200 items)**:
  - **Exactamente 40 reactivos por cada una de las 5 Juntas**:
    - **40 JVPM (Medicina)**: Código de Salud Arts. 32-45, consentimiento informado, mala praxis Art. 146 CP, prescripción médica, deber de socorro.
    - **40 JVPO (Odontología)**: Código de Salud Arts. 46-52, bioseguridad, radioprotección dental, emergencias anestésicas odontológicas, farmacología estomatológica.
    - **40 JVPE (Enfermería)**: Código de Salud Arts. 53-59, PAE (Proceso de Atención de Enfermería), regla de los 10 correctos, dilución farmacológica, cadena de frío biológica.
    - **40 JVPQF (Química y Farmacia)**: Ley de Medicamentos, RTS 13.01.01:14 (BPD), RTCA BPM/BPA, control de estupefacientes y psicotrópicos, farmacovigilancia CNFV.
    - **40 JVPPS (Psicología)**: Ley del Ejercicio de la Profesión en Psicología, secreto profesional y excepciones ante riesgo de vida, consentimiento y asentimiento informado en niñez (Ley Crecer Juntos Arts. 61-64), deber legal de denuncia (Art. 16 Ley Crecer Juntos), relaciones duales y bioética forense.
  - Total = Exactly 200 reactivos (5 × 40).
  - **ID Convention**: `cssp-jvpm-01` to `cssp-jvpm-40`, `cssp-jvpo-01` to `cssp-jvpo-40`, `cssp-jvpe-01` to `cssp-jvpe-40`, `cssp-jvpqf-01` to `cssp-jvpqf-40`, `cssp-jvpps-01` to `cssp-jvpps-40`.

---

#### 6. `src/data/anspAscensoData.ts`
- **File Location**: `src/data/anspAscensoData.ts` (lines 1–474)
- **TypeScript Interface**:
  ```typescript
  export interface PolicePromotionQuestion {
    id: string;
    rank: 'cabo' | 'sargento' | 'oficial';
    escalafon: 'Cabo' | 'Sargento' | 'Oficial';
    topic: string;
    statement: string;
    options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[]; // Array of objects
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
    legalBasis: string;
    distractorRationale: Record<'A' | 'B' | 'C' | 'D', string>;
  }
  export type AnspQuestion = PolicePromotionQuestion;
  ```
- **Exported Symbols**: `POLICE_RANKS`, `ANSP_ASCENSO_QUESTIONS`, `POLICE_PROMOTION_QUESTIONS`.
- **Current Counts & IDs**:
  - `cabo`: 6 items (`pnc-cabo-001` to `pnc-cabo-006`)
  - `sargento`: 6 items (`pnc-sargento-001` to `pnc-sargento-006`)
  - `oficial`: 6 items (`pnc-oficial-001` to `pnc-oficial-006`)
  - Total: 18 items.
- **Exact Expansion Breakdown Needed (200 items)**:
  - **66 Cabo (Nivel Básico / Patrulla)**: Procedimientos operativos en terreno, ITOP, flagrancia material (Arts. 323-324 PrPn), cadena de custodia, auxilio a víctimas bajo LEIV, primeros auxilios tácticos.
  - **67 Sargento (Nivel Intermedio / Supervisión)**: Supervisión operativa de subdelegaciones y puestos, dirección funcional con FGR, libros de control y bitácoras de armamento, régimen disciplinario por faltas graves de la Ley de la Carrera Policial, control de aprehensiones y régimen de excepción (garantías inderogables).
  - **67 Oficial (Nivel Ejecutivo: Subinspector / Inspector)**: Planeación estratégica de operativos complejos bajo estándares ONU y Corte IDH sobre uso diferenciado y proporcional de la fuerza, Ley Especial para la Intervención de las Telecomunicaciones (LEIT), Tribunal de Ingresos y Ascensos (TIA), régimen de faltas muy graves, control disciplinario y amparo constitucional.
  - Sum: 66 + 67 + 67 = Exactly 200 reactivos.
  - **ID Convention**: `pnc-cabo-001` to `pnc-cabo-066`, `pnc-sargento-001` to `pnc-sargento-067`, `pnc-oficial-001` to `pnc-oficial-067`.

---

#### 7. `src/data/complianceAmlData.ts`
- **File Location**: `src/data/complianceAmlData.ts` (lines 1–418)
- **TypeScript Interface**:
  ```typescript
  export interface ComplianceQuestion {
    id: string;
    category: 'AML' | 'Seguros';
    categoryLabel: string;
    area: string;
    statement: string;
    options: { A: string; B: string; C: string; D: string; };
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
    legalBasis: string;
    distractorRationale: { A?: string; B?: string; C?: string; D?: string; };
  }
  ```
- **Exported Symbols**: `COMPLIANCE_SECTORS`, `COMPLIANCE_QUESTIONS`, `COMPLIANCE_QUESTIONS_DATA`.
- **Current Counts & IDs**:
  - `AML`: 8 items (`aml-01` to `aml-08`)
  - `Seguros`: 8 items (`seg-01` to `seg-08`)
  - Total: 16 items.
- **Exact Expansion Breakdown Needed (200 items)**:
  - **100 Prevención de Lavado de Dinero y Financiación del Terrorismo (AML/CFT - UIF/FGR & SSF)**:
    - Tipologías UIF: pitufeo / estructuración (smurfing), transferencias fraccionadas, empresas fachada.
    - Debida Diligencia Clientes (DDC) y Debida Diligencia Intensificada (DDI): Personas Expuestas Políticamente (PEPs), fideicomisos, jurisdicciones de alto riesgo / paraísos fiscales.
    - Beneficiario Final (UBO): umbral reglamentario salvadoreño del 10% o control efectivo final (Instructivo UIF y Rec. 24 GAFI).
    - Reporte de Operaciones Sospechosas (ROS) y deber de reserva estricta (anti-tipping-off, Art. 13 LCLDA).
    - Sujetos Obligados No Financieros (APNFD, Art. 9-A LCLDA): compraventa de inmuebles, vehículos, metales preciosos.
    - Autonomía procesal del delito de lavado de dinero y régimen de extinción de dominio (LEDAB).
    (Sum = 100 items)
  - **100 Seguros Mercantiles y Fianzas (SSF & Código de Comercio)**:
    - Principios del contrato de seguro: indemnizatorio, interés asegurable, principio de buena fe (uberrima fides).
    - Infraseguro y aplicación cuantitativa de la Regla Proporcional (Art. 1383 C.Com.).
    - Sobreseguro doloso vs. inculpable (Art. 1381 C.Com.).
    - Subrogación legal de la compañía de seguros (Arts. 1391 y 1393 C.Com.).
    - Seguros de personas y vida: cláusula de suicidio de 2 años e incontestabilidad (Art. 1481 C.Com.).
    - Fianzas mercantiles en compras públicas (Ley de Compras Públicas): fianza de sostenimiento de oferta, fianza de anticipo (100% de fondos), fianza de cumplimiento de contrato (10-20%), fianza de buena obra / vicios ocultos (10% por 1-2 años).
    (Sum = 100 items)
  - Total = Exactly 200 reactivos (100 AML + 100 Seguros).
  - **ID Convention**: `aml-01` to `aml-100` (or `aml-001` to `aml-100`), `seg-01` to `seg-100` (or `seg-001` to `seg-100`).

---

### 1.3 Central Registries and Application Topology

1. **Independent Module Architecture**:
   - `src/data/` has no `index.ts` file aggregating these 7 modules. They are standalone specialized modules directly imported by their corresponding components and test suites.
   - The base question bank of 17,640 questions validated by `scripts/validate-bank.mjs` and `tests/bankValidation.test.ts` resides exclusively in `public/data/` (`UES`, `ANSP`, `ASD`, `AVANZO`, `ENA`, `ESCALAFON`). The 7 modules investigated here are **independent specialized technical extensions** in `src/data/` that do NOT touch or affect the 17,640 base bank.

2. **UI Component Routing in `src/App.tsx` & `src/components/HeaderNavbar.tsx`**:
   - `activeTab === 'derecho-administrativo'` → `<DerechoAdministrativoView />` (`src/components/DerechoAdministrativoView.tsx`)
   - `activeTab === 'salud-primaria'` → `<SaludPrimariaView />` (`src/components/SaludPrimariaView.tsx`)
   - `activeTab === 'ingenieria-ciencias'` → `<IngenieriaCienciasView />` (`src/components/IngenieriaCienciasView.tsx`)
   - `activeTab === 'notary-exam'` → `<NotaryExamView />` (`src/components/NotaryExamView.tsx`)
   - `activeTab === 'cssp-health'` → `<CsspHealthView />` (`src/components/CsspHealthView.tsx`)
   - `activeTab === 'ansp-ascenso'` → `<AnspAscensoView />` (`src/components/AnspAscensoView.tsx`)
   - `activeTab === 'compliance-financial'` → `<ComplianceFinancialView />` (`src/components/ComplianceFinancialView.tsx`)

3. **Current Pagination Status Across the 7 Views**:
   - **Zero of the 7 views currently implement pagination or item slicing**.
   - Currently, each view performs `filteredQuestions.map((q, idx) => ...)` and renders all questions simultaneously into the DOM.
   - For 10–25 questions this was manageable, but with 200 complex questions per view (each containing statements, 4 options, full legal/clinical explanations, and 4 distractor rationale cards), rendering all 200 items simultaneously will produce heavy DOM trees (~1,600+ DOM nodes) and degrade performance, confirming the necessity of Requirement R2 (pagination / block selector of 10 or 20 items per page).

---

### 1.4 Unit Test Files Impacted by Expansion

Existing unit test files contain hardcoded assertions for the pre-expansion counts. When expanding to 200 items, these test suites must be updated synchronously:

1. **`tests/legalModules.test.ts`**:
   - Line 13: `expect(NOTARY_QUESTIONS_FROM_DATA.length).toBe(20)` → change to `200`.
   - Line 15: `expect(NOTARY_QUESTIONS_FROM_VIEW.length).toBe(20)` → change to `200`.
   - Line 22: `expect(uniqueIds.size).toBe(20)` → change to `200`.
   - Line 24: `for (let i = 1; i <= 20; i++)` → change to `200`.
   - Line 33: regex `toMatch(/^not-(0[1-9]|1[0-9]|20)$/)` → update to allow up to `not-200`.

2. **`tests/challengerLegalSecurity.test.ts`**:
   - Line 21: `expect(NOTARY_EXAM_QUESTIONS.length).toBe(20)` → change to `200`.
   - Line 25: `expect(idSet.size).toBe(20)` → change to `200`.
   - Line 28: loop `i <= 20` → change to `200`.
   - Line 83: 50% score test `idx < 10` → adapt to half of length.
   - ANSP tests: lines checking `toBe(18)` and `toBe(6)` for cabos/sargentos/oficiales → update to 200 (66/67/67).
   - Compliance tests: lines checking `toBe(16)` and `toBe(8)` for AML/Seguros → update to 200 (100/100).

3. **`tests/medicalModules.test.ts`**:
   - Line 7: `expect(CSSP_QUESTIONS_DATA).toHaveLength(25)` → change to `200`.
   - Lines 29–33: `expect(counts.jvpm).toBe(5)` (and jvpo, jvpe, jvpqf, jvpps) → change from `5` to `40`.

4. **`tests/medicalEmpiricalChallenge.test.ts`**:
   - Line 7: `expect(CSSP_QUESTIONS_DATA).toHaveLength(25)` → change to `200`.
   - Line 26: `toBe(5)` per junta → change to `40`.
   - Line 42: `expect(numPart).toBeLessThanOrEqual(5)` → change to `40`.

5. **`tests/securityCompliance.test.ts`**:
   - Lines 16, 21: `expect(ANSP_ASCENSO_QUESTIONS.length).toBe(18)` → change to `200`.
   - Lines 30–32, 35–37: `expect(cabos.length).toBe(6)` → change to `66` (cabo), `67` (sargento), `67` (oficial).
   - Line 43: `expect(uniqueIds.size).toBe(18)` → change to `200`.
   - Lines 134, 139: `expect(COMPLIANCE_QUESTIONS.length).toBe(16)` → change to `200`.
   - Lines 147–148: `expect(aml.length).toBe(8)` / `expect(seguros.length).toBe(8)` → change to `100` each.
   - Line 154: `expect(uniqueIds.size).toBe(16)` → change to `200`.

---

## 2. Logic Chain

1. **Observation**: 5 modules use an object `{ A, B, C, D }` for `options`, while 2 modules (`notaryExamData.ts` and `anspAscensoData.ts`) use an array of objects `{ key, text }[]`.
   - **Inference**: Data generators and validators cannot assume a single uniform shape for `options`. Generating array format for `derechoAdministrativoData.ts` would break TypeScript compilation. Each data generator must strictly follow the native schema of that specific file.
2. **Observation**: `ingenieriaCienciasData.ts` uses `problemStatement` instead of `statement`, and requires `formalSolution` and `stepByStepDerivation: string[]`.
   - **Inference**: Any generic question template will fail TypeScript typechecking if it provides `statement` instead of `problemStatement` for engineering problems. KaTeX mathematical delimiters must be balanced in all 200 engineering problems.
3. **Observation**: `notaryExamData.ts` uses `correctKey` rather than `correctAnswer`, and is tested with regex `not-(0[1-9]|1[0-9]|20)`.
   - **Inference**: Generating `correctAnswer` in `notaryExamData.ts` will trigger TypeScript error `Property 'correctKey' is missing in type...`. Generating IDs like `not-201` or non-standard prefixes will fail existing test regexes.
4. **Observation**: None of the 7 view components currently implement pagination; all render the complete array in the DOM simultaneously.
   - **Inference**: Expanding from ~10 questions to 200 questions without adding pagination will immediately cause DOM bloat and violate Requirement R2 ("mantener tiempos de renderizado inferiores a 50 ms y 60 FPS sin saturación del DOM"). Implementing pagination (e.g. 10 or 20 questions per page, similar to `EnglishTop10kView` and `QuestionExplorer`) is essential before or alongside data injection.
5. **Observation**: Vitest suites in `tests/legalModules.test.ts`, `tests/medicalModules.test.ts`, `tests/securityCompliance.test.ts`, and challenger test files explicitly assert the exact lengths `20`, `25`, `18`, `16`.
   - **Inference**: Running `npm test` after expanding data without updating these assertions will cause test failures. The test suites must be updated to expect 200 items in each category.

---

## 3. Caveats

- **No Caveats on Core Schemas**: All 7 data files exist and have clear interfaces.
- **Category Extension in `saludPrimariaData.ts`**: The original request specifies "150 Guías Clínicas MINSAL (Dengue, HTA, DM2, IRAS, Salud Materno-Infantil) and 50 Farmacovigilancia". Currently, the type union is only `'farmacovigilancia' | 'dengue' | 'hta-dm2'`. The implementers should expand the category union to include `'iras' | 'materno-infantil'` (and add them to `SALUD_SECTORS`) or use `clinicalArea` while keeping the category umbrella. The former is cleaner for filtering.
- **Base Question Bank Isolation**: The base question bank of 17,640 questions in `public/data/` (`scripts/validate-bank.mjs`) is completely independent of these 7 specialized files in `src/data/`. Modifying these 7 files will NOT alter or invalidate the 17,640 count.

---

## 4. Conclusion

1. **Schema Integrity**: The 7 modules possess distinct, specialized TypeScript interfaces that must be strictly respected.
2. **Expansion Plan**:
   - `derechoAdministrativoData.ts`: 200 items (150 LPA: ~38 com., ~37 sil., ~38 rec., ~37 sanc.; 50 firma elec.).
   - `saludPrimariaData.ts`: 200 items (150 MINSAL: 30 dengue, 30 HTA, 30 DM2, 30 IRAS, 30 materno-infantil; 50 farmacovigilancia).
   - `ingenieriaCienciasData.ts`: 200 items (50 álgebra lineal, 50 trigonometría, 50 cónicas, 50 física vectorial).
   - `notaryExamData.ts`: 200 items (40 notarial puro, 40 LENJVOD, 40 sucesiones, 40 contratos/obligaciones, 40 mercantil/sociedades).
   - `csspHealthData.ts`: 200 items (exactamente 40 por cada una de las 5 Juntas: JVPM, JVPO, JVPE, JVPQF, JVPPS).
   - `anspAscensoData.ts`: 200 items (66 Cabo, 67 Sargento, 67 Oficial).
   - `complianceAmlData.ts`: 200 items (100 AML UIF/FGR, 100 Seguros y Fianzas SSF).
3. **UI Pagination**: All 7 views need pagination (10 or 20 items per page with page selector / Next / Prev) to satisfy R2.
4. **Test Alignment**: Update the count and subcategory assertions in the 5 test suites to match the 200-item standard.

---

## 5. Verification Method

To verify the findings and confirm baseline stability:
1. `npm run typecheck` — Confirms current TypeScript compilation (exits with code 0).
2. `npm test` — Confirms all 18 test suites and 214 unit tests pass cleanly.
3. `node scripts/validate-bank.mjs` — Confirms baseline 17,640 questions in `public/data/` remain intact.
4. Spot-check file schemas: inspect `src/data/derechoAdministrativoData.ts`, `src/data/saludPrimariaData.ts`, `src/data/ingenieriaCienciasData.ts`, `src/data/notaryExamData.ts`, `src/data/csspHealthData.ts`, `src/data/anspAscensoData.ts`, `src/data/complianceAmlData.ts`.

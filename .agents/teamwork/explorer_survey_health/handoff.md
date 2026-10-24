# Handoff Report: Specialized Medical & Health Modules (CSSP & Residentado ENAR)

**Date**: 2026-10-23T15:10:00Z  
**Author**: Explorer Subagent (`explorer_survey_health`)  
**Target Recipient**: Orchestrator Agent (`efc85915-4335-4263-bdf7-a61a420fa8dc`) & Implementer Subagent  
**Working Directory**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_health`  
**Handoff Type**: Hard (Investigation complete, fully actionable)

---

## 1. Observation

### 1.1 CSSP Health Data Module (`src/data/csspHealthData.ts` & `src/components/CsspHealthView.tsx`)
- **File Location**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\src\data\csspHealthData.ts` (269 lines).
- **Current Item Count**: Exactly 8 items in `CSSP_QUESTIONS_DATA` (note: initial dispatch mentioned 5, but source code audit reveals 8 items):
  - `cssp-jvpm-01` (lines 85–104): Responsabilidad Legal y Código de Salud (Art. 40 y Código Penal Art. 146).
  - `cssp-jvpm-02` (lines 106–125): Secreto Profesional y Notificación Obligatoria (VIGEP / MINSAL).
  - `cssp-jvpo-01` (lines 131–150): Farmacología Estomatológica (dosis máxima epinefrina 0.04 mg en cardiópatas).
  - `cssp-jvpo-02` (lines 152–171): Bioseguridad y Manejo de Desechos Bioinfecciosos (RTS 13.01.01:14).
  - `cssp-jvpe-01` (lines 177–196): Cálculo de Dosis y Fluidoterapia (goteo macrogotero SSN 1,000 mL / 8 h = 42 gtt/min).
  - `cssp-jvpe-02` (lines 198–217): Seguridad del Paciente (regla de los 5 correctos de administración de medicamentos).
  - `cssp-jvpqf-01` (lines 223–242): Regulación de Medicamentos Controlados y Psicotrópicos (Clonazepam, recetario oficial DNM).
  - `cssp-jvpps-01` (lines 248–267): Ética Profesional y Deber Legal de Reporte (Ley Crecer Juntos Art. 16).
- **Juntas Representadas**:
  - `jvpm`: 2 reactivos
  - `jvpo`: 2 reactivos
  - `jvpe`: 2 reactivos
  - `jvpqf`: 1 reactivo
  - `jvpps`: 1 reactivo
  - Total: 8 reactivos (se requiere expansión a 25 reactivos: exactamente 5 por Junta).
- **TypeScript Interfaces**:
  ```typescript
  export interface CsspQuestion {
    id: string;
    juntaId: 'jvpm' | 'jvpo' | 'jvpe' | 'jvpqf' | 'jvpps';
    juntaName: string;
    area: string;
    legalBasis: string;
    statement: string;
    options: Record<string, string>;
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
- **Consumer View (`src/components/CsspHealthView.tsx`)**:
  - Dynamically renders filters using `CSSP_JUNTAS` (`jvpm`, `jvpo`, `jvpe`, `jvpqf`, `jvpps`, plus `'all'`).
  - Displays total count in badge: `Todas las Juntas ({CSSP_QUESTIONS_DATA.length})` (line 217).
  - Exam mode operates with 30-minute timer (`secondsLeft = 30 * 60`), score threshold 8.0/10.0 (`isPassed = score >= 8.0`), logging failed questions to `logQuestionError({ categoryKey: 'CSSP • ' + q.juntaName })`, and generates cryptographic certificates via `issueCertificate` for passing scores.
  - Text-to-speech integration via `AudioSpeechButton` using `accessibleSpeechHelper.ts` which replaces regex `/\bCSSP\b/g` with `"Consejo Superior de Salud Pública"`.

---

### 1.2 Residentado Branching Cases Module (`src/data/residentadoBranchingCases.ts` & `src/components/ResidentadoMedicoView.tsx`)
- **File Location**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\src\data\residentadoBranchingCases.ts` (388 lines).
- **Current Case Scenarios**:
  - Case 1 (`branching-case-iam-vd`, lines 56–168): Medicina Interna — *Síndrome Coronario Agudo con Hipotensión y Afectación Ventricular Derecha* (3 stages: Triaje, Reperfusión fármaco-invasiva, Complicación eléctrica por FV primaria).
  - Case 2 (`branching-case-preeclampsia-hellp`, lines 174–277): Gineco-Obstetricia — *Emergencia Obstétrica: Preeclampsia con Criterios de Severidad e Inminencia Eclámptica* (3 stages).
    - *Critical Observation*: Currently titled "Código Rojo" instead of "Código Naranja". Does **not** contain the Zuspan clinical monitoring parameters (reflejos rotulianos, FR >= 12 rpm, diuresis > 30 mL/h), does **not** mention the antidote *Gluconato de Calcio al 10%*, and omits magnesium toxicity triage.
  - Case 3 (`branching-case-sepsis-pediatrica`, lines 283–386): Pediatría — *Sepsis Pediátrica Refractaria y Choque Séptico (Protocolo PALS / Hospital Benjamín Bloom)* (3 stages: Reconocimiento del choque frío, Inotrópico epinefrina, Antibioticoterapia en hora de oro).
  - **Cirugía General y Trauma**: **Completamente AUSENTE** (0 casos actualmente implementados).
- **TypeScript Interfaces**:
  ```typescript
  export interface VitalSigns {
    bp: string;       // Presión arterial (mmHg)
    hr: number;       // Frecuencia cardíaca (lpm)
    rr: number;       // Frecuencia respiratoria (rpm)
    spo2: number;     // Saturación periférica de O2 (%)
    temp: number;     // Temperatura corporal (°C)
    glasgow?: number; // Escala de Coma de Glasgow (3-15)
  }

  export interface BranchingDecisionOption {
    id: string;
    action: string;
    isOptimal: boolean;
    consequenceText: string;
    vitalImpact: Partial<VitalSigns>;
    learningPoint: string;
    minsalProtocolRef: string;
  }

  export interface BranchingStage {
    id: string;
    stageNumber: number;
    stageTitle: string;
    narrative: string;
    vitals: VitalSigns;
    clinicalDataSnippet?: string;
    options: BranchingDecisionOption[];
  }

  export interface BranchingCaseScenario {
    id: string;
    title: string;
    specialty: 'Medicina Interna' | 'Gineco-Obstetricia' | 'Pediatría' | 'Cirugía';
    patientDescription: string;
    initialVitals: VitalSigns;
    stages: BranchingStage[];
    debriefSummary: {
      coreDiagnosis: string;
      goldStandardProtocol: string;
      officialMinsalNorm: string;
    };
  }
  ```
- **Consumer View (`src/components/ResidentadoMedicoView.tsx`)**:
  - Contains two sub-modes: Standard Clinical Vignettes (`vignettes`) and Interactive Branching Cases (`branching_cases`).
  - Branching selector (line 615): `<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">`. Updating this to 4 cases requires adjusting the grid to `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3` so that all 4 specialties display evenly.
  - Dynamic vital signs monitor (lines 651–719) automatically updates upon decision selection via `currentVitals = { ...prev, ...option.vitalImpact }`.
  - Suboptimal decisions automatically trigger error logging: `logQuestionError` into Cuaderno Inteligente de Errores FSRS.
  - Stage advance via `handleAdvanceStage` and final debriefing via `caseFinished`.

---

### 1.3 Repository Baseline Validation
- `npm run typecheck`: **Exit code 0** (0 errors).
- `npm test`: **Exit code 0** (13 test files passed, 151 unit tests passed).
- `npm run validate:bank`: **Exit code 0** (UES=7500, ANSP=250, ASD=2190, AVANZO=3000, ENA=1400, ESCALAFON=3300; total = 17,640 questions verified with 0 errors and 0 warnings).
- `npm run validate:i18n`: **Exit code 0** (100% UI coverage across 7 locales: `es`, `nahuat`, `lenca`, `kakawira`, `en`, `ar`, `zh`).
- `git grep "7943 9901"`: **0 occurrences** (clean).
- **Existing Unit Tests for CSSP and Branching Cases**: Currently **0 tests** exist in `tests/` for either module.

---

## 2. Logic Chain

### 2.1 CSSP Health Data Expansion Plan (8 → 25 Items)
To fulfill Requirement R1.1, `CSSP_QUESTIONS_DATA` must contain exactly 25 items (5 items per Junta). The table below specifies the complete architecture:

| ID | Junta | Área Temática | Fundamento Jurídico-Sanitario Oficial | Núcleo Clínico / Deontológico |
|---|---|---|---|---|
| `cssp-jvpm-01` | JVPM | Responsabilidad Legal y Código de Salud | Código de Salud Art. 40; Código Penal Art. 146 | Intrusismo y ejercicio de especialidad sin acreditación ante la JVPM. |
| `cssp-jvpm-02` | JVPM | Secreto Profesional y Notificación Obligatoria | Código de Salud Arts. 136-138; Ley de Vigilancia Epidemiológica MINSAL | Excepción al secreto médico: notificación inmediata (<24h) al VIGEP por enfermedades de notificación obligatoria (Dengue con signos de alarma / Cólera). |
| `cssp-jvpm-03` | JVPM | Bioética y Consentimiento Informado | Código de Salud Art. 42; Declaración de Helsinki; Código Civil Art. 21 | Consentimiento informado en paciente inconsciente con riesgo vital inminente sin familiares presentes: prevalencia del deber de auxilio y preservación de la vida. |
| `cssp-jvpm-04` | JVPM | Certificación Médica de Defunción | Código de Salud Art. 43; Ley del Registro del Estado Familiar | Prohibición de emitir certificado de defunción sin examen directo del cadáver y remisión obligatoria a IML/FGR ante sospecha de muerte violenta o causa externa. |
| `cssp-jvpm-05` | JVPM | Deber Legal de Denuncia en Urgencias | Código Procesal Penal Art. 265 ord. 1.°; Código Penal Art. 175 | Obligación legal inexcusable del médico de denunciar en <24h lesiones por arma blanca, proyectil de arma de fuego o agresiones sexuales. |
| `cssp-jvpo-01` | JVPO | Farmacología Estomatológica y Cardiópatas | Manual de Práctica Odontológica Segura de la JVPO; AHA Guidelines | Límite seguro de epinefrina a 0.04 mg (máximo 2 cartuchos al 2% 1:100,000) en hipertensos estadio 2, previa aspiración en dos planos. |
| `cssp-jvpo-02` | JVPO | Bioseguridad y Manejo de Punzocortantes | RTS 13.01.01:14 (Manejo de Desechos Bioinfecciosos) | Descarte de agujas carpule, hojas de bisturí y limas en recipientes rígidos rojos de polipropileno hasta 3/4 de su capacidad. |
| `cssp-jvpo-03` | JVPO | Profilaxis de Endocarditis Bacteriana | Guías AHA / JVPO para Profilaxis Antibiótica | Amoxicilina 2 g VO 30-60 min antes de procedimientos cruentos gingivales en pacientes con prótesis valvulares (o Clindamicina 600 mg / Azitromicina 500 mg en alérgicos). |
| `cssp-jvpo-04` | JVPO | Consentimiento Informado en Cirugía Bucal | Código de Salud Art. 48; Deontología Odontológica | Consentimiento informado por escrito advirtiendo riesgo de parestesia del nervio dentario inferior y lingual en extracción de terceros molares retenidos clase III. |
| `cssp-jvpo-05` | JVPO | Urgencias en el Consultorio Dental: Anafilaxia | Manual de Soporte Vital Básico Odontológico de la JVPO | Epinefrina (Adrenalina) 1:1,000 IM (0.3 a 0.5 mg) en cara anterolateral del muslo como fármaco de primera línea ante choque anafiláctico a anestésicos locales. |
| `cssp-jvpe-01` | JVPE | Cálculo de Dosis y Fluidoterapia | Norma de Cuidados de Enfermería y Farmacoterapia JVPE | Fórmula de goteo macrogotero (20 gtt/mL): $V \times 20 / (T \times 60) = 1000 \times 20 / 480 = 41.66 \approx 42$ gtt/min. |
| `cssp-jvpe-02` | JVPE | Seguridad del Paciente: Regla de los Correctos | Manual de Protocolos de Seguridad del Paciente JVPE/MINSAL | Regla de oro de la administración segura de medicamentos (paciente, medicamento, dosis, vía, hora, alergias, educación, registro, velocidad, caducidad). |
| `cssp-jvpe-03` | JVPE | Manejo de Medicamentos de Alto Riesgo (KCl) | Alianzas Mundiales para la Seguridad del Paciente / JVPE | Prohibición terminante de administrar Cloruro de Potasio (KCl) concentrado en bolo IV directo sin diluir (causa paro cardíaco fulminante); dilución obligatoria en cristaloides. |
| `cssp-jvpe-04` | JVPE | Prevención de Infecciones Asociadas a Catéter (BACC) | Guía Técnica del Proyecto Zero Bacteriemia — MINSAL / JVPE | Higiene de manos, uso de clorhexidina alcohólica al 2%, barrera de máxima protección e inserción preferente en vena subclavia para prevenir bacteriemias por catéter central. |
| `cssp-jvpe-05` | JVPE | Marco Deontológico y Órdenes Médicas Verbales | Código Deontológico de Enfermería de El Salvador; Ley de la JVPE | Exigencia de confirmación escrita en el expediente clínico antes de ejecutar órdenes verbales no emergentes o dudosas para salvaguardar la vida del paciente. |
| `cssp-jvpqf-01` | JVPQF | Regulación de Psicotrópicos y Estupefacientes | Ley de Medicamentos; Reglamento de Estupefacientes y Psicotrópicos | Dispensación de Clonazepam sujeta a recetario especial controlado de la DNM retenido, firma/sello de JVPM y asiento en libro de control foliado. |
| `cssp-jvpqf-02` | JVPQF | Farmacovigilancia y Reporte Oficial de RAM | Reglamento de Farmacovigilancia de El Salvador (DNM / CNFV) | Notificación obligatoria de sospechas de Reacciones Adversas a Medicamentos (RAM) y fallas terapéuticas al Centro Nacional de Farmacovigilancia en plazos <72h en casos graves. |
| `cssp-jvpqf-03` | JVPQF | Buenas Prácticas de Almacenamiento (BPA) y Cadena de Frío | Norma Técnica de Buenas Prácticas de Almacenamiento (DNM / CSSP) | Mantenimiento riguroso de temperatura entre +2 °C y +8 °C para medicamentos termolábiles (insulinas, biológicos, vacunas), con termohigrómetros calibrados y plan de contingencia eléctrica. |
| `cssp-jvpqf-04` | JVPQF | Bioequivalencia e Intercambiabilidad Genérica | Ley de Medicamentos Arts. 56-62; Reglamento de Bioequivalencia | Prohibición expresa de sustitución libre en farmacia de medicamentos de estrecho margen terapéutico (carbamazepina, fenitoína, digoxina, litio) sin estudios in vivo de bioequivalencia aprobados por la DNM. |
| `cssp-jvpqf-05` | JVPQF | Buenas Prácticas de Dispensación (BPD) y Medicamentos Vencidos | Código de Salud Art. 102; Reglamento de Farmacias y Botiquines | Obligación del regente farmacéutico de colocar en cuarentena rotulada y destruir mediante acta sanitaria los medicamentos vencidos o deteriorados, prohibiendo su retorno al anaquel. |
| `cssp-jvpps-01` | JVPPS | Deber Legal de Denuncia en Niñez (Ley Crecer Juntos) | Ley Crecer Juntos Art. 16; Código de Ética JVPPS | Prevalencia del interés superior del niño: deber imperativo e inmediato de denunciar indicios de agresión sexual ante FGR/PNC/Junta de Protección sobre el secreto profesional. |
| `cssp-jvpps-02` | JVPPS | Límite del Secreto Profesional ante Riesgo Suicida | Código de Ética de la JVPPS; Principio de Beneficencia | Excepción al secreto profesional ante ideación o plan suicida estructurado activo: deber ético de comunicar a red de apoyo familiar inmediata y servicios de salud para preservar la vida. |
| `cssp-jvpps-03` | JVPPS | Asentimiento y Consentimiento Informado en Menores | Ley Crecer Juntos Arts. 61-64; Ley de la Profesión en Psicología | Consentimiento firmado de titulares de la responsabilidad parental junto con el proceso de asentimiento informado continuo adaptado a la edad y madurez psicológica del niño/adolescente. |
| `cssp-jvpps-04` | JVPPS | Rigor Metodológico en Evaluaciones Periciales Forenses | Código Procesal Civil y Mercantil Art. 375; Deontología JVPPS | Prohibición deontológica de emitir dictámenes periciales categóricos sobre personas sin evaluación clínica directa y sin aplicación de instrumentos psicométricos baremados. |
| `cssp-jvpps-05` | JVPPS | Prohibición de Relaciones Duales y Conflicto de Intereses | Código de Ética del Profesional de la Psicología de El Salvador | Incompatibilidad ética de brindar psicoterapia a familiares cercanos, subordinados laborales o personas con quienes medie relación íntima para evitar pérdida de objetividad. |

---

### 2.2 Residentado Branching Cases Structure (4 Sequential Clinical Cases)
To fulfill Requirement R1.4, `BRANCHING_CLINICAL_CASES` must cover all four major branches of medicine:

#### Organigrama de Casos Ramificados:
1. **Caso 1: Medicina Interna** (`branching-case-iam-vd`)  
   - Diagnóstico: IAM con elevación del ST de pared inferior con extensión a Ventrículo Derecho complicado con Fibrilación Ventricular.  
   - 3 Etapas: Triaje & precarga (evitar nitratos/diuréticos), Fibrinólisis fármaco-invasiva antes de 30 min, Desfibrilación no sincronizada 200 J por FV.
2. **Caso 2: Pediatría** (`branching-case-sepsis-pediatrica`)  
   - Diagnóstico: Sepsis Grave y Choque Séptico Pediátrico Descompensado (Hospital Benjamín Bloom / PALS).  
   - 3 Etapas: Expansión con cristaloides a 20 mL/kg, Choque refractario a fluidos con Epinefrina 0.05-0.2 mcg/kg/min, Antibioticoterapia de la hora de oro (Ceftriaxona + Vancomicina).
3. **Caso 3: Gineco-Obstetricia** (`branching-case-preeclampsia-hellp`)  
   - Título: **Código Naranja — Preeclampsia Severa y Eclampsia Inminente**  
   - Componentes Clínicos Específicos:
     - **Esquema de Zuspan intravenoso**:
       - Carga: Sulfato de Magnesio al 20%, 4 g IV diluidos en 100 mL de solución glucosada al 5% o SSN 0.9% a pasar en 15-20 minutos.
       - Mantenimiento: Infusión continua a 1-2 g/h IV durante 24 horas posparto.
     - **Monitoreo estricto de toxicidad por hipermagnesemia**:
       - Reflejos osteotendinosos / rotulianos (deben estar presentes; su pérdida indica niveles de 7-10 mEq/L).
       - Frecuencia respiratoria: $\ge 12$ rpm (depresión respiratoria a $>10\text{ mEq/L}$).
       - Diuresis horaria: $> 30$ mL/h mediante sonda Foley a permanencia (el magnesio es de excreción renal exclusiva).
     - **Antídoto**:
       - *Gluconato de Calcio al 10%*: 1 g IV lento (1 ampolla de 10 mL al 10%) en 3-5 minutos si aparecen signos de toxicidad o paro respiratorio.
     - **Metas Tensionales y Antihipertensivos**:
       - Meta: PAS 140-150 mmHg, PAD 90-100 mmHg.
       - Fármacos de primera línea: Labetalol 20 mg IV en 2 min o Hidralazina 5 mg IV lento. Proscritos: IECA, ARA-II y nitroprusiato de sodio.
     - **Interrupción del Embarazo**: Cesárea de urgencia tras estabilización materna.
4. **Caso 4: Cirugía General y Trauma** (`branching-case-trauma-choque-iv`)  
   - Título: **Politraumatizado con Choque Hemorrágico Grado IV (ATLS 10.ª Edición)**  
   - Componentes Clínicos Específicos:
     - **Etapa 1: Triaje y Reanimación en Shock Room**:
       - Paciente politraumatizado por colisión vehicular con PA 65/35 mmHg, FC 145 lpm, Glasgow 8, FAST positivo en espacio de Morison y fractura de pelvis inestable.
       - Activación del **Protocolo de Transfusión Masiva (PTM / MTP)** en razón balanceada **1:1:1** (1 unidad de Concentrado de Glóbulos Rojos : 1 unidad de Plasma Fresco Congelado : 1 unidad de Plaquetas).
       - Administración inmediata de **Ácido Tranexámico (TXA)** 1 g IV en bolo en 10 minutos dentro de las primeras 3 horas del trauma (ensayo CRASH-2), seguido de infusión de 1 g en 8 horas.
       - Estrategia de **Reanimación Hipotensiva Permisiva** (meta PAS 80-90 mmHg) restringiendo cristaloides para evitar coagulopatía dilucional y desprendimiento del coágulo primario.
     - **Etapa 2: Cirugía de Control de Daños (Damage Control Surgery)**:
       - Laparotomía exploradora de urgencia. Hallazgo: hemoperitoneo de 2,500 mL por estallido hepático grado IV (segmentos VI-VII) y hematoma retroperitoneal. El paciente presenta la **Tríada de la Muerte** (Hipotermia 34.2 °C, Acidosis pH 7.12, Coagulopatía con sangrado en sábana).
       - Conducta óptima: **Laparotomía abreviada en <60-90 minutos** con **empaquetamiento abdominal / perihepático compresivo en 4 cuadrantes (packing)**, hemostasia abreviada, control rápido de contaminación y cierre temporal de pared abdominal con **bolsa de Bogotá o sistema de vacío (VAC)**, evitando cierre a tensión (prevención de Síndrome Compartimental Abdominal).
       - Traslado inmediato a UCI Quirúrgica para recalentamiento activo y corrección hemodinámica.
     - **Etapa 3: Cuidados Críticos y Reexploración Quirúrgica Programada ("Second Look")**:
       - A las 36 horas en UCI Quirúrgica, el paciente se encuentra eutérmico (36.8 °C), pH corregido (7.36), lactato en descenso y coagulograma normalizado (INR 1.1, plaquetas 110,000/mm³).
       - Conducta óptima: Reexploración programada (*second look*) para desempaquetamiento cuidadoso de compresas, hemostasia definitiva, lavado peritoneal y cierre por planos diferido de la pared abdominal.

---

### 2.3 Modificaciones en Componentes de Vista
En `src/components/ResidentadoMedicoView.tsx`:
- Línea 615:
  ```tsx
  // Cambiar de:
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
  // A:
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
  ```
  Esto garantiza que los 4 casos clínicos (Medicina Interna, Pediatría, Gineco-Obstetricia, Cirugía) se distribuyan de forma equilibrada en pantallas medianas y de escritorio.

---

### 2.4 Creación de Suites de Pruebas Unitarias Automatizadas
Para blindar ambos módulos y verificar que la adición cumpla todos los estándares, se recomienda implementar:
1. `tests/csspHealthData.test.ts`:
   - Verifica exactamente 25 preguntas en `CSSP_QUESTIONS_DATA`.
   - Verifica exactamente 5 preguntas por cada Junta (`jvpm`, `jvpo`, `jvpe`, `jvpqf`, `jvpps`).
   - Verifica la integridad de cada reactivo: claves A/B/C/D válidas, correctAnswer presente en las opciones, non-empty legalBasis, non-empty explanation, y distractorRationale para las opciones erróneas.
   - Verifica presencia explícita de citas legales: Código de Salud, Ley Crecer Juntos Art. 16, Ley de Medicamentos, RTS 13.01.01:14.
2. `tests/residentadoBranching.test.ts`:
   - Verifica exactamente 4 casos clínicos en `BRANCHING_CLINICAL_CASES`.
   - Verifica las 4 especialidades: `'Medicina Interna'`, `'Pediatría'`, `'Gineco-Obstetricia'`, `'Cirugía'`.
   - Verifica que cada caso tenga al menos 3 etapas secuenciales, con `vitals` completos, opciones de decisión con exactamente 1 opción óptima (`isOptimal: true`), `consequenceText`, `learningPoint` y `minsalProtocolRef`.
   - Verifica la presencia explícita en Caso 3 de: Esquema Zuspan, Sulfato de Magnesio al 20%, reflejos rotulianos, FR $\ge 12$ rpm, diuresis $> 30$ mL/h, Gluconato de Calcio al 10%, metas tensionales (Labetalol / Hidralazina) e interrupción del embarazo.
   - Verifica la presencia explícita en Caso 4 de: Choque Hemorrágico Grado IV, ATLS 10.ª ed., protocolo de transfusión masiva 1:1:1 (CGR, PFC, plaquetas), ácido tranexámico 1 g (<3 horas) y laparotomía de control de daños con empaquetamiento (packing) abdominal y reexploración programada (*second look*).

---

## 3. Caveats

1. **Aislamiento del Banco Base (17,640 preguntas)**:  
   Los datos de `csspHealthData.ts` y `residentadoBranchingCases.ts` residen en `src/data/` y alimentan componentes interactivos especializados (`CsspHealthView` y `ResidentadoMedicoView`). No forman parte de los JSON estáticos de `public/data/` validados por `scripts/validate-bank.mjs`. Por tanto, expandir estos módulos a 25 reactivos y 4 casos clínicos enriquecerá la plataforma sin alterar en lo absoluto el banco base de 17,640 preguntas ni requerir regeneración de `public/data/manifest.json`.
2. **Sistema Multilingüe (i18n)**:  
   Las viñetas clínicas de CSSP y Residentado contienen terminología médica y legal salvadoreña de alta densidad (e.g., artículos del Código de Salud, citas jurisprudenciales, dosis y farmacocinética) que se presentan en español con renderizado matemático KaTeX. Las cadenas estructurales de UI en ambos componentes ya cuentan con 100% de cobertura en los 7 idiomas de `src/i18n/locales/`. La accesibilidad auditiva se apoya en `AudioSpeechButton` y `accessibleSpeechHelper.ts`.
3. **Persistencia en LocalStorage y Cuaderno de Errores**:  
   Tanto en CSSP como en Residentado, los errores cometidos por el alumno se registran en `logQuestionError`. Como las nuevas preguntas y etapas tendrán identificadores consistentes (`cssp-jvpm-01`... y `branching-case-trauma-choque-iv-stage-1`), la integración con el algoritmo FSRS y el Cuaderno Inteligente de Errores es completamente transparente y libre de colisiones de IDs.

---

## 4. Conclusion

1. **CSSP Health Data**:
   - Actualmente cuenta con 8 reactivos.
   - Debe expandirse a **exactamente 25 reactivos** (5 por cada Junta de Vigilancia: JVPM, JVPO, JVPE, JVPQF, JVPPS).
   - Todos los reactivos deben seguir rigurosamente la interfaz `CsspQuestion` incorporando casos de bioética, consentimiento informado, farmacovigilancia, Buenas Prácticas de Dispensación y el deber de denuncia bajo el Art. 16 de la Ley Crecer Juntos.
2. **Residentado Branching Cases**:
   - Actualmente cuenta con 3 casos, faltando la rama troncal de Cirugía General y requiriendo refinamiento en Gineco-Obstetricia.
   - Debe completarse para alcanzar **exactamente 4 casos clínicos ramificados** correspondientes a las 4 grandes ramas de la medicina:
     - Caso 1: Medicina Interna (IAM VD y FV primaria).
     - Caso 2: Pediatría (Sepsis Pediátrica Refractaria y Choque Frío PALS / Hospital Bloom).
     - Caso 3: Gineco-Obstetricia (Código Naranja — Preeclampsia Severa e Inminencia Eclámptica: Esquema Zuspan, monitoreo ROT/FR/diuresis, antídoto Gluconato de Calcio al 10%, Labetalol/Hidralazina, interrupción del embarazo).
     - Caso 4: Cirugía General y Trauma (Politraumatizado con Choque Hemorrágico Grado IV: ATLS 10.ª ed., protocolo de transfusión masiva 1:1:1, ácido tranexámico 1g <3h, reanimación hipotensiva permisiva, laparotomía de control de daños con empaquetamiento abdominal / packing perihepático y second look a las 24-48h).
   - En `ResidentadoMedicoView.tsx`, actualizar la rejilla de selección a `sm:grid-cols-2 lg:grid-cols-4` para acomodar los 4 escenarios de forma simétrica.
3. **Pruebas y Blindaje**:
   - Crear suites dedicadas `tests/csspHealthData.test.ts` y `tests/residentadoBranching.test.ts` para verificar de forma determinista los 25 reactivos y los 4 casos ramificados con todos sus criterios clínicos.

---

## 5. Verification Method

Para verificar independientemente la implementación de estas recomendaciones:

1. **Verificación de Tipos TypeScript**:
   ```bash
   npm run typecheck
   ```
   *Criterio de aprobación*: Exit code 0, sin errores de compilación en `csspHealthData.ts`, `residentadoBranchingCases.ts`, ni en sus componentes vista.

2. **Ejecución de Pruebas Unitarias (Vitest)**:
   ```bash
   npm test
   ```
   *Criterio de aprobación*: 100% de pruebas aprobadas (151 pruebas existentes + pruebas nuevas para CSSP y Branching Cases).

3. **Verificación de Integridad del Banco Base de Preguntas**:
   ```bash
   npm run validate:bank
   ```
   *Criterio de aprobación*: Exit code 0, confirmando 17,640 preguntas válidas (UES=7500, ANSP=250, ASD=2190, AVANZO=3000, ENA=1400, ESCALAFON=3300) sin alteraciones ni discrepancias en `manifest.json`.

4. **Verificación de Cobertura Multilingüe**:
   ```bash
   npm run validate:i18n
   ```
   *Criterio de aprobación*: Exit code 0, 100% de cobertura en UI en las 7 lenguas (`es`, `nahuat`, `lenca`, `kakawira`, `en`, `ar`, `zh`).

5. **Verificación de Privacidad y Canales Oficiales**:
   ```bash
   git grep "7943 9901"
   ```
   *Criterio de aprobación*: Exactamente 0 ocurrencias en todo el repositorio.

6. **Compilación Limpia de Producción**:
   ```bash
   npm run build
   ```
   *Criterio de aprobación*: Generación exitosa de los bundles en `dist/` sin advertencias críticas de empaquetado.

7. **Condiciones de Invalidación**:
   - Si `CSSP_QUESTIONS_DATA.length !== 25` o alguna Junta no tiene exactamente 5 preguntas.
   - Si `BRANCHING_CLINICAL_CASES.length !== 4` o no cubre las 4 especialidades troncales.
   - Si se omite el Gluconato de Calcio al 10%, el protocolo Zuspan, o el monitoreo de ROT/FR/diuresis en el Caso 3.
   - Si se omite el Protocolo de Transfusión Masiva 1:1:1, el Ácido Tranexámico 1g o el empaquetamiento abdominal en el Caso 4.

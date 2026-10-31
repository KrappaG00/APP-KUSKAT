# Comprehensive Exploration and Architectural Survey: Licencia de Conducir VMT & Traffic Safety Module (Requirements R1 & R4)

**Module**: Licencia de Conducir VMT / Seguridad Vial  
**Explorer Agent**: `explorer_survey_vmt`  
**Date**: 2026-10-31  
**Project**: APP-KUSKAT (banco-preguntas-maestro-ues-avanzo)  
**Target Directives**: Requisito R1 (Licencia de Conducir VMT / Seguridad Vial Reinforcement) & Requisito R4 (Mandatory Educational Content Standard)

---

## 1. Executive Summary

A comprehensive, read-only architectural survey was conducted on the driver licensing and traffic safety capabilities of APP-KUSKAT. The investigation evaluated the current view implementation (`src/components/DriverLicenseView.tsx`), the underlying data repositories in `src/data/`, routing and navigation integration, existing automated test coverage, and the mandatory educational standards stipulated in **Requirement R1** and **Requirement R4**.

### Key Findings
1. **Extreme Data Sparsity & Lack of Modular Architecture**: Currently, there are **no modular data files** for Driver License or VMT in `src/data/` (e.g., zero files in `src/data/driverLicense/` or `src/data/driverLicenseData.ts`). All traffic content is embedded inline directly inside `src/components/DriverLicenseView.tsx`.
2. **Current Content Inventory**: The existing component contains only **9 multiple-choice questions** (5 theoretical, 4 psychological) and **9 road signs** (4 regulatory, 3 warning/preventive, 2 informative). The study tab consists of only ~200 static words across two hardcoded summary cards without unit selection or case analyses.
3. **Requirement R1 & R4 Mandate**: The user prompt and `ORIGINAL_REQUEST.md` mandate expanding this sparse area into dedicated modular curriculum data based on the Salvadoran General Traffic Regulations (*Reglamento General de Tránsito y Seguridad Vial* - Decreto Ejecutivo N° 86), the Land Transportation, Traffic and Road Safety Law (*Ley de Transporte Terrestre, Tránsito y Seguridad Vial* - Decreto Legislativo N° 477), the Penal Code (*Código Penal*, Art. 147-E Conducción Peligrosa), the Central American Manual of Uniform Traffic Control Devices (SIECA/VMT), and the Traffic Victim Care Fund (*Ley FONAT*).
4. **Mandatory Standard (R4)**: Every thematic unit/topic must strictly deliver **>= 500 substantive words** of authentic legal, technical, and defensive traffic doctrine (excluding boilerplate, repetitive titles, or markdown markup) and **>= 5 concrete, distinct, non-repetitive practical cases/solved scenarios**.
5. **Zero Dedicated Test Coverage**: While general navigation and tabs are tested in `tests/layoutAndNavigation.test.ts`, there are currently zero tests verifying traffic curriculum depth, question validity, or R4 compliance.
6. **Platform Baseline Integrity**: Baseline checks confirm that `npm run typecheck` and `npm run build` pass cleanly with 0 errors.

---

## 2. Current Codebase Inventory & Diagnostics

### 2.1 File Map

| Path | Lines / Size | Role & Current State |
|---|---|---|
| `src/components/DriverLicenseView.tsx` | 842 lines / 44.3 KB | Monolithic component containing inline types, 9 questions (`DRIVER_QUESTIONS`), 9 road signs (`OFFICIAL_ROAD_SIGNS`), and 3 sub-tabs (`study`, `signs`, `quiz`). |
| `src/App.tsx` (Lines 80, 124, 179, 831) | 1,542 lines / 75.5 KB | Lazy-loads `DriverLicenseView`, handles tab routing (`activeTab === 'driver-license'`), defines SEO title `'Simulador de Examen de Conducir VMT El Salvador \| KUSKAT'`. |
| `src/components/HeaderNavbar.tsx` (Lines 44, 377) | 924 lines / 41.5 KB | Main navigation bar entry under "Simuladores & Pruebas" with Car icon and VMT/Tránsito badge. |
| `public/sitemap.xml` (Line 124) | XML | Crawlable sitemap entry: `https://kuskates.com/?tab=driver-license`. |
| `src/data/` | 16 files, 2 subdirs | **Missing dedicated module**. No `driverLicenseData.ts` or `driverLicense/` directory exists. |
| `tests/layoutAndNavigation.test.ts` (Line 87) | 6.4 KB | Verifies `'driver-license'` is in the canonical list of active tabs. No content testing. |

### 2.2 Existing In-Line Schemas (`DriverLicenseView.tsx`)

#### A. Question Schema
```typescript
export interface DriverQuestion {
  id: string;
  category: 'teorico' | 'psicologico';
  topic: string;
  statement: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
}
```
*Current inventory*: Exactly 9 questions:
- `dt-01`: Prioridades de Paso en Rotondas (Teórico)
- `dt-02`: Límites de Velocidad en Zonas Escolares (Teórico)
- `dt-03`: Clasificación de Señales Viales (Teórico)
- `dt-04`: Alcoholemia y Conducción Peligrosa Art. 147-E CP (Teórico)
- `dt-05`: Distancia de Seguridad Vehicular - Regla 3 segundos (Teórico)
- `dp-01`: Control Emocional e Ira al Volante / Road Rage (Psicológico)
- `dp-02`: Fatiga y Percepción de Riesgo / Microsueños (Psicológico)
- `dp-03`: Distracciones Cognitivas al Volante / Celular (Psicológico)
- `dp-04`: Presión Social y Conducción Temeraria (Psicológico)

#### B. Road Sign Schema
```typescript
export interface RoadSign {
  id: string;
  type: 'preventiva' | 'reglamentaria' | 'informativa';
  name: string;
  code: string;
  meaning: string;
  rule: string;
  svgIcon: React.ReactNode;
}
```
*Current inventory*: Exactly 9 signs:
- Reglamentarias: `R-1` (Alto), `R-2` (Ceda el Paso), `R-30` (Velocidad Máxima), `R-8` (Prohibido Estacionar)
- Preventivas: `P-1` (Curva Peligrosa Derecha), `P-15` (Zona Escolar), `P-22` (Reductor de Velocidad / Túmulo)
- Informativas: `I-4` (Servicio Hospitalario), `I-6` (Estación de Servicio)

---

## 3. Curriculum Blueprint for Requirements R1 & R4

To comply with R1 and R4, the curriculum must be structured into **8 comprehensive thematic units** reflecting the official VMT / SERTRACEN syllabus and Salvadoran traffic jurisprudence.

### 3.1 Thematic Unit Matrix

| Unit ID | Title | Regulatory & Technical Scope | R4 Target Word Count | Solved Cases Target |
|---|---|---|---|---|
| `unit-1-marco-legal-licencias` | **1. Marco Legal, Autoridades de Tránsito y Tipología de Licencias** | Ley de Transporte Terrestre (DL 477), Reglamento General (DE 86), competencias VMT/PNC/SERTRACEN, tipos de licencias (Juvenil, Particular, Liviana, Pesada, Pesada T, Motocicleta), régimen de faltas e infracciones (Leves $11.43, Graves $34.29, Muy Graves $57.14) y suspensión/cancelación. | >= 550 words | 5 cases |
| `unit-2-senalizacion-vial-integral` | **2. Sistema Integral de Señalización Vial en El Salvador** | Manual Centroamericano de Dispositivos Uniformes (SIECA/VMT): Señales Verticales (Reglamentarias, Preventivas, Informativas, Transitorias), Señalización Horizontal (líneas continuas, discontinuas, doble amarilla, líneas de detención, pasos de cebra) y Señalización Luminosa/Agente PNC. | >= 550 words | 5 cases |
| `unit-3-normas-circulacion-prioridades` | **3. Normas de Circulación, Ejes Viales y Preferencia de Paso** | Reglas de carril derecho/izquierdo, prioridad absoluta en redondeles (anillo vs. incorporación), intersecciones sin semáforo (regla mano derecha y jerarquía de vías), ejes preferenciales en San Salvador, y prioridad obligatoria a vehículos de emergencia en servicio (ambulancias, bomberos, patrullas). | >= 550 words | 5 cases |
| `unit-4-velocidades-distancias-maniobras` | **4. Velocidades Reglamentarias, Distancias de Seguridad y Maniobras Viales** | Límites legales (Art. 145 RGT: escolar 20 km/h, urbana 50 km/h, rural 70-80 km/h, autopista 90 km/h), regla de los 3 segundos (distancia reacción + frenado = detención total), maniobra de adelantamiento seguro (rebase), prohibiciones de rebase y cambios de carril/virajes. | >= 550 words | 5 cases |
| `unit-5-condiciones-adversas-manejo-defensivo` | **5. Conducción en Condiciones Adversas y Manejo Defensivo Psicométrico** | Lluvia torrencial y aquaplaning, conducción nocturna y deslumbramiento, descenso en pendientes pronunciadas (compresión con motor / fading de frenos en Los Chorros), manejo de la ira vial (*road rage*), prevención de microsueños y fatiga biológica, y distracciones cognitivas por telefonía móvil. | >= 550 words | 5 cases |
| `unit-6-seguridad-vehicular-mantenimiento` | **6. Seguridad Activa y Pasiva del Vehículo e Inspección Preventiva** | Seguridad activa (ABS, EBD, neumáticos, dirección, luces) vs. pasiva (cinturón de 3 puntos, airbags, reposacabezas, sistemas de retención infantil), revisión preventiva periódica (niveles de fluidos, batería, llantas), y equipamiento obligatorio de emergencia (Art. 13 RGT: extintor ABC, triángulos, gata, repuesto, botiquín). | >= 550 words | 5 cases |
| `unit-7-alcohol-drogas-conduccion-peligrosa` | **7. Alcoholemia, Estupefacientes y Delito de Conducción Peligrosa (Art. 147-E CP)** | Efectos neurofisiológicos, escalas legales (0.0 mg/dl transporte público/carga; 50-99 mg/dl falta muy grave; 100+ mg/dl delito penal), procedimiento en flagrancia PNC, detención en bartolinas de hasta 72h, decomiso de licencia/vehículo, juicio penal, penas de prisión de 3 a 6 años e inhabilitación. | >= 550 words | 5 cases |
| `unit-8-accidentologia-fonat-primeros-auxilios` | **8. Accidentología Vial, Ley FONAT, Responsabilidad Legal y Primeros Auxilios** | Tipos de siniestros, protocolo obligatorio ante choque (no fuga, preservación de escena, croquis pericial PNC), Fondo para la Atención a las Víctimas de Accidentes de Tránsito (FONAT), responsabilidad civil y penal (homicidio y lesiones culposas Arts. 132 y 146 CP), y conducta PAS (Proteger, Avisar, Socorrer) sin agravar trauma raquimedular. | >= 550 words | 5 cases |
| **TOTALES** | **8 Unidades Temáticas** | **Currículo Completo VMT / SERTRACEN** | **>= 4,400 palabras sustantivas** | **40 Casos Prácticos Resueltos** |

### 3.2 Detailed Inventory of 40 Solved Practical Cases (5 per Unit)

Every case must be anchored in real Salvadoran road environments, citing specific legal articles, analyzing liability, determining infraction severity, and specifying corrective defensive driving actions:

1. **Unidad 1 (Marco Legal & Licencias)**:
   - *Caso 1.1*: Menor de 17 años conduciendo con licencia Juvenil Particular fuera del horario autorizado o sin fianza vigente.
   - *Caso 1.2*: Conductor con licencia Liviana operando un camión de volteo de 10 toneladas (incompatibilidad de clase y retención).
   - *Caso 1.3*: Extranjero residente transitando con licencia vencida de su país de origen tras 90 días de permanencia.
   - *Caso 1.4*: Conductor sancionado por acumulación de 3 infracciones muy graves y proceso de suspensión administrativa ante la Dirección General de Tránsito.
   - *Caso 1.5*: Negativa a exhibir la tarjeta de circulación y licencia al agente de la División de Tránsito Terrestre en retén de control.

2. **Unidad 2 (Señalización Vial Integral)**:
   - *Caso 2.1*: Rebase vehicular invadiendo carril sobre doble línea continua amarilla en la Carretera Panamericana tramo San Martín.
   - *Caso 2.2*: Desobediencia de la señal reglamentaria R-1 (ALTO) en una intersección de la Colonia Escalón causando colisión lateral.
   - *Caso 2.3*: Viraje en 'U' en tramo regulado con señal R-4 (Prohibido el Retorno) en el Bulevar de Los Héroes.
   - *Caso 2.4*: Bloqueo del cruce de cebra peatonal por detención indebida sobre la línea de parada en semáforo en rojo.
   - *Caso 2.5*: Conflicto entre la indicación lumínica de semáforo en verde y la orden manual de alto emitida por un agente de la PNC en la Alameda Manuel Enrique Araujo.

3. **Unidad 3 (Normas de Circulación & Prioridades)**:
   - *Caso 3.1*: Colisión de incorporación en el Redondel Masferrer entre vehículo que ingresa por carril exterior y vehículo circulando en la corona.
   - *Caso 3.2*: Intersección perpendicular sin señalización ni semáforo en el Centro Histórico de Santa Ana: determinación de la regla de la mano derecha.
   - *Caso 3.3*: No ceder el paso a una ambulancia del SEM con sirena y baliza luminosa activa en el Bulevar Monseñor Romero.
   - *Caso 3.4*: Circulación persistente y obstrucción del flujo rápido en el carril izquierdo de la Autopista a Comalapa.
   - *Caso 3.5*: Maniobra de giro a la izquierda sin ceder preferencia al flujo que transita en sentido recto contrario en la 49 Avenida Sur.

4. **Unidad 4 (Velocidades, Distancias & Maniobras)**:
   - *Caso 4.1*: Conducción a 45 km/h frente al Centro Escolar España en hora de salida de estudiantes (infracción muy grave a zona escolar máx. 20 km/h).
   - *Caso 4.2*: Colisión por alcance en cadena en el Bulevar del Ejército debido a circular a 1 segundo de distancia en lugar de la regla de los 3 segundos.
   - *Caso 4.3*: Adelantamiento indebido en curva ciega en la Carretera a Los Planes de Renderos con raspado lateral.
   - *Caso 4.4*: Maniobra de retroceso de más de 20 metros en vía pública transitada para retornar a un cruce perdido.
   - *Caso 4.5*: Cambio intempestivo de carril sin accionar luz direccional a 30 metros de antelación cortando el paso a un motociclista.

5. **Unidad 5 (Condiciones Adversas & Factores Psicométricos)**:
   - *Caso 5.1*: Pérdida de control por hidroplaneo (*aquaplaning*) durante lluvia torrencial en la Carretera de Oro por frenada de pánico y giro brusco de volante.
   - *Caso 5.2*: Deslumbramiento nocturno por luces altas indebidas de vehículo en sentido contrario en la Carretera del Litoral CA-2.
   - *Caso 5.3*: Calentamiento extremo y cristalización de pastillas de freno (*brake fading*) en el descenso de Los Chorros por no utilizar freno de motor en marcha baja.
   - *Caso 5.4*: Episodio de furia al volante (*road rage*) con persecución y maniobras de arrinconamiento tras un cruce indebido.
   - *Caso 5.5*: Siniestro vial tipo despiste en horas de la madrugada derivado de un microsueño de 3 segundos por fatiga acumulada.

6. **Unidad 6 (Seguridad Activa, Pasiva & Mantenimiento)**:
   - *Caso 6.1*: Conductor y copiloto sin cinturón de seguridad que sufren impacto frontal a 50 km/h con expulsión y fractura craneal contra parabrisas.
   - *Caso 6.2*: Traslado de un menor de 3 años en el asiento del copiloto sin Sistema de Retención Infantil (SRI) y activación del airbag frontal.
   - *Caso 6.3*: Estallido de neumático con labrado inferior a 1.6 mm y resequedad estructural circulando a 80 km/h en carretera seca.
   - *Caso 6.4*: Pérdida de presión en el pedal de freno por ebullición del líquido de frenos contaminado con humedad y falta de mantenimiento preventivo.
   - *Caso 6.5*: Conducción nocturna con una sola luz delantera en funcionamiento y luces traseras fundidas en tramo interurbano sin iluminación pública.

7. **Unidad 7 (Alcohol, Estupefacientes & Conducción Peligrosa)**:
   - *Caso 7.1*: Control antidoping del VMT en el Paseo General Escalón: conductor con 78 mg/dl en aire espirado (sanción administrativa muy grave, multa y retiro de placas).
   - *Caso 7.2*: Conductor con 145 mg/dl en alcotest interceptado zigzagueando en el Bulevar Constitución (flagrancia del delito Art. 147-E CP y detención preventiva 72h).
   - *Caso 7.3*: Motorista de transporte colectivo de pasajeros de la Ruta 205 con 18 mg/dl (tolerancia cero absoluta para transporte público, decomiso y proceso penal agravado).
   - *Caso 7.4*: Choque con daños materiales causado por conductor en estado de ebriedad que intenta conciliar privadamente para evitar el alcotest oficial de la PNC.
   - *Caso 7.5*: Negativa rotunda del conductor a someterse a la prueba del alcoholímetro y prueba toxicológica forzosa por orden fiscal ante el Instituto de Medicina Legal (IML).

8. **Unidad 8 (Accidentología, FONAT, Responsabilidad & Primeros Auxilios)**:
   - *Caso 8.1*: Conductor involucrado en atropello con lesiones que se da a la fuga por temor a ser linchado (configuración de agravante penal y nulidad de beneficios).
   - *Caso 8.2*: Colisión simple en el Bulevar Merliot sin lesionados: aplicación del procedimiento de retiro ágil de vehículos para no obstaculizar el tráfico masivo.
   - *Caso 8.3*: Reclamo de indemnización económica ante el FONAT por parte de un peatón lesionado por un automotor no identificado (fondo solidario).
   - *Caso 8.4*: Aplicación de la conducta PAS en un siniestro con múltiples víctimas en la Autopista Norte: aseguramiento perimétrico y reporte al 911 / 132 SEM.
   - *Caso 8.5*: Error crítico en primeros auxilios: intento de extracción forzada y retiro de casco a un motociclista inconsciente provocando sección medular irreversible.

---

## 4. Proposed Modular Architecture & Interface Contracts

To achieve clean separation of concerns and full modularity, all data and domain logic will reside in a dedicated package under `src/data/driverLicense/`.

### 4.1 Proposed Directory Tree

```
src/data/driverLicense/
├── types.ts          # TypeScript domain interfaces (Units, Cases, Questions, Signs, Categories)
├── curriculum.ts     # The 8 official Thematic Units with >= 500 words and 5 solved cases each
├── questions.ts      # Expanded interactive question bank (50+ high-yield items with distractor rationales)
├── signs.ts          # Expanded official road signs catalog (24+ signs with SVG icons & SIECA codes)
└── index.ts          # Single unified entry point exporting all data, constants, and lookup helpers
```

### 4.2 Proposed Interface Contracts (`types.ts`)

```typescript
export type DriverQuestionCategory = 'teorico' | 'psicologico';

export type InfractionSeverity =
  | 'Leve'
  | 'Grave'
  | 'Muy Grave'
  | 'Delito Penal'
  | 'Sin Infracción (Preventiva)';

export type RoadSignType = 'reglamentaria' | 'preventiva' | 'informativa';

export interface SolvedTrafficCase {
  id: string;
  title: string;
  unitId: string;
  caseScenario: string;
  applicableNorms: string[];
  infractionType: InfractionSeverity;
  legalAndTechnicalAnalysis: string;
  correctiveDefensiveAction: string;
  legalConsequences: string;
}

export interface DriverLicenseThematicUnit {
  id: string;
  unitNumber: number;
  title: string;
  legalScope: string;
  description: string;
  iconName: string;
  regulatoryFramework: {
    law: string;
    articles: string[];
    governingBody: string;
  }[];
  substantiveTheory: string; // Must strictly contain >= 500 substantive words
  keyTakeaways: string[];
  solvedCases: SolvedTrafficCase[]; // Must strictly contain >= 5 distinct cases
}

export interface DriverQuestion {
  id: string;
  category: DriverQuestionCategory;
  topic: string;
  statement: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
  legalBasis?: string;
  distractorRationale?: Record<string, string>;
}

export interface RoadSign {
  id: string;
  type: RoadSignType;
  name: string;
  code: string;
  meaning: string;
  rule: string;
  svgIcon: React.ReactNode;
}
```

### 4.3 Backwards-Compatibility Guarantee

`DriverLicenseView.tsx` currently exports:
- `export interface DriverQuestion`
- `export const DRIVER_QUESTIONS: DriverQuestion[]`
- `export interface RoadSign`
- `export const OFFICIAL_ROAD_SIGNS: RoadSign[]`

The new `src/data/driverLicense/` module will export these same interfaces and constants (or `DriverLicenseView.tsx` can re-export them directly from `./data/driverLicense`), ensuring that any test, import, or bundle referencing them experiences zero regressions or breaking changes.

---

## 5. UI Integration Strategy (`DriverLicenseView.tsx`)

The UI should be upgraded from a static, sparse view into an interactive learning hub that matches other flagship views on APP-KUSKAT (`ResidentadoMedicoView`, `SigetSolarView`, `OralLitigationSimulatorView`):

### Sub-Tab Navigation
1. **Pestaña 1: Manual de Estudio & Unidades Normativas (`study`)**:
   - Thematic unit selector bar (horizontal pill strip or responsive grid) allowing the user to select among the 8 units.
   - Comprehensive unit reader displaying:
     - Header with title, unit number, legal badge, and governing entities (VMT, PNC, SERTRACEN, FONAT).
     - Substantive theory rendered with clean editorial typography and legal callouts.
     - Key regulatory articles and practical takeaways.
     - Embedded section for the unit's **5 Solved Practical Cases**, with collapsible/expandable cards showing scenario, legal basis, analysis, and defensive advice.
2. **Pestaña 2: Casos Prácticos Resueltos (`cases`)**:
   - Filterable practical case browser allowing students to inspect all 40 solved cases across units.
   - Filter by Unit and by Infraction Severity (Leve, Grave, Muy Grave, Delito Penal).
3. **Pestaña 3: Catálogo Oficial de Señalización Vial (`signs`)**:
   - Filter buttons: Todas (24+), Reglamentarias (Rojo), Preventivas (Amarillo), Informativas (Azul).
   - High-fidelity vector SVG icons, official SIECA codes, regulatory meanings, and enforcement rules.
4. **Pestaña 4: Simulador de Evaluación Oficial (`quiz`)**:
   - Mode selector: Práctica Continua vs. Examen Oficial Cronometrado (30 minutos, 30 preguntas aleatorias).
   - Category filtering (Todas, Teórico, Psicológico).
   - Score calculation using official VMT/SERTRACEN pass criteria (minimum score 8.0 / 10.0 or 80%).
   - Solucionario with official legal basis for every question.

---

## 6. Google AdSense Policy Compliance (Requirement R5)

1. **Current Placement Status**: `DriverLicenseView.tsx` currently contains **no `<AdBanner>` components**.
2. **Policy Guard**: Under Google AdSense policy, ads must never appear on screens lacking substantive content, during loading skeletons, or on pure navigation screens.
3. **Guard Implementation**:
   - When integrating AdSense placements, wrap every `<AdBanner>` inside content verification guards:
     ```tsx
     {activeUnit && activeUnit.substantiveTheory.length > 500 && (
       <AdBanner variant="light" positionLabel="Licencia VMT • Intermedio Unidad" slotId="4241045160_vmt_1" />
     )}
     ```
   - No ads should mount during exam mode while the timer is running (to preserve academic focus) or inside the loading suspense fallback in `App.tsx`.

---

## 7. Automated Verification & Testing Strategy

A dedicated test suite should be created at `tests/driverLicenseR1R4Compliance.test.ts` mirroring `tests/curriculumR4Compliance.test.ts` and `tests/platformReinforcementCompliance.test.ts`.

### Test Assertions Checklist
- [ ] **Unit Count**: Asserts `DRIVER_THEMATIC_UNITS.length === 8`.
- [ ] **R4 Word Count Standard**: Asserts `countSubstantiveWords(unit.substantiveTheory) >= 500` for each of the 8 units.
- [ ] **Content Authenticity**: Asserts `unit.substantiveTheory` does not match forbidden placeholder patterns (`/lorem ipsum/i`, `/\[placeholder\]/i`, `/\b(TODO|TBD|FIXME)\b/`, `/plantilla genérica/i`).
- [ ] **Solved Cases Count**: Asserts `unit.solvedCases.length >= 5` for each unit (total >= 40 cases across all units).
- [ ] **Distinct Cases**: Asserts that all case IDs and case scenarios within each unit are unique and non-repetitive.
- [ ] **Question Bank Depth**: Asserts `DRIVER_QUESTIONS.length >= 50`, every question has non-empty statement, 4 distinct options (A, B, C, D), valid `correctKey`, and informative explanation.
- [ ] **Road Signs Catalog**: Asserts `OFFICIAL_ROAD_SIGNS.length >= 24`, spanning all 3 types (reglamentaria, preventiva, informativa), each with valid code, name, and meaning.
- [ ] **Platform Integrity**: `npm run typecheck` passes with 0 errors and `npm run build` succeeds without bundle or chunk errors.

---

## 8. Conclusion & Implementation Readiness

The Licencia de Conducir VMT module represents one of the most critical high-utility public education tools within APP-KUSKAT. By expanding it from its current 9-question inline prototype into an 8-unit modular curriculum containing over 4,500 substantive words of authentic Salvadoran traffic regulations, 40 solved practical cases, 50+ exam questions, and 24+ road signs, APP-KUSKAT will satisfy Requirements R1 and R4 with the highest academic and legal rigor.

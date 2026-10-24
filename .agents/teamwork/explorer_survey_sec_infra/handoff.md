# Informe de Investigación Técnica: Módulos de Seguridad Pública (ANSP), Cumplimiento Financiero (AML/SSF) e Infraestructura de Verificación R2

**Autor:** Subagente Explorer (`explorer_survey_sec_infra`)  
**Fecha:** 2026-10-23T15:05:00Z  
**Directorio de Trabajo:** `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_sec_infra`  
**Referencia:** Requerimiento autoritativo en `ORIGINAL_REQUEST.md` (R1.5, R1.6, R2)

---

## 1. Observation (Observaciones Directas y Evidencia Empírica)

### 1.1. Módulo Ascenso Policial ANSP
- **Ubicación de Datos:** `src/data/anspAscensoData.ts` (219 líneas).
- **Componente de Vista:** `src/components/AnspAscensoView.tsx` (481 líneas), montado perezosamente en `src/App.tsx:86, 852` bajo la pestaña `activeTab === 'ansp-ascenso'`.
- **Estructura de Datos (`PolicePromotionQuestion`):**
  ```typescript
  export interface PolicePromotionQuestion {
    id: string;
    rank: 'cabo' | 'sargento' | 'oficial';
    topic: string;
    statement: string;
    options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[]; // Arreglo de 4 opciones
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
    legalBasis: string;
    distractorRationale: Record<'A' | 'B' | 'C' | 'D', string>; // Refutación por cada letra
  }
  ```
- **Conteo Actual:** Exactamente **7 reactivos**:
  - Cabo (3 reactivos): `pnc-cabo-001` (Flagrancia material Arts. 323-324 PrPn), `pnc-cabo-002` (ITOP / Preservación de escena Arts. 191-192 PrPn), `pnc-cabo-003` (Tránsito / Conducción peligrosa Art. 147-E CP).
  - Sargento (2 reactivos): `pnc-sargento-001` (Régimen disciplinario / Falta muy grave por abandono y ebriedad), `pnc-sargento-002` (Dirección funcional FGR / Allanamiento con orden judicial Art. 20 Cn.).
  - Oficiales (2 reactivos): `pnc-oficial-001` (Naturaleza civil de la PNC Art. 159 Cn. y apoyo excepcional FAES Art. 168 Ord. 12° Cn.), `pnc-oficial-002` (Principios Básicos ONU sobre el empleo de la fuerza y armas de fuego).
- **Metadatos de Escalafón (`POLICE_RANKS`):**
  - `'all'`: "Todos los Escalafones", tiempo oficial 45 min.
  - `'cabo'`: "Ascenso a Cabo (Nivel Básico)", tiempo oficial 30 min.
  - `'sargento'`: "Ascenso a Sargento (Nivel Intermedio)", tiempo oficial 35 min.
  - `'oficial'`: "Ascenso a Oficiales (Subinspector/Inspector)", tiempo oficial 40 min.
- **Comportamiento en la Vista (`AnspAscensoView.tsx`):**
  - Líneas 52-55: Filtrado dinámico por escalafón (`filteredQuestions = selectedRankId === 'all' ? POLICE_PROMOTION_QUESTIONS : POLICE_PROMOTION_QUESTIONS.filter(...)`).
  - Líneas 106-119: Calificación dinámica sobre `total = filteredQuestions.length`. Nota aprobatoria: `>= 8.0 / 10.0`.
  - Líneas 73-95: Registro automático de errores en el Cuaderno Inteligente FSRS (`logQuestionError`).
  - Líneas 135-150: Emisión de diploma con hash SHA-256 (`issueCertificate`) con `moduleKey: ANSP_${selectedRankId.toUpperCase()}`.
  - No existen límites rígidos codificados en la vista que impidan tener 6 preguntas por escalafón (18 en total).

---

### 1.2. Módulo Cumplimiento AML & Seguros SSF
- **Ubicación de Datos:** `src/data/complianceAmlData.ts` (229 líneas).
- **Componente de Vista:** `src/components/ComplianceFinancialView.tsx` (440 líneas), montado perezosamente en `src/App.tsx:95, 1012` bajo la pestaña `activeTab === 'compliance-financial'`.
- **Estructura de Datos (`ComplianceQuestion`):**
  ```typescript
  export interface ComplianceQuestion {
    id: string;
    category: 'aml' | 'seguros';
    categoryLabel: string;
    area: string;
    statement: string;
    options: {
      A: string;
      B: string;
      C: string;
      D: string;
    }; // Diccionario de claves A, B, C, D (difiere del array de ANSP)
    correctAnswer: 'A' | 'B' | 'C' | 'D';
    explanation: string;
    legalBasis: string;
    distractorRationale: {
      A?: string;
      B?: string;
      C?: string;
      D?: string;
    };
  }
  ```
- **Conteo Actual:** Exactamente **8 reactivos**:
  - Sección AML (4 reactivos): `aml-01` (Beneficiario Final UBO >= 10%), `aml-02` (Prohibición de Tipping-off Art. 13 LCLDA), `aml-03` (PEPs y Debida Diligencia Reforzada NRP-08 SSF), `aml-04` (Reporte de Operaciones en Efectivo ROE >= $10,000 USD Art. 9-B LCLDA).
  - Sección Seguros (4 reactivos): `seg-01` (Principio de indemnización en seguro de daños Art. 1380 C.Com.), `seg-02` (Subrogación legal Art. 1393 C.Com.), `seg-03` (Fianza de mantenimiento de oferta en compras públicas), `seg-04` (Prescripción de 2 años en seguros Art. 1362 C.Com.).
- **Sectores Definidos (`COMPLIANCE_SECTORS`):**
  - `'all'`: Todos los Sectores.
  - `'aml'`: Prevención de Lavado (AML / UIF / FGR).
  - `'seguros'`: Seguros y Fianzas Mercantiles (SSF).
- **Comportamiento en la Vista (`ComplianceFinancialView.tsx`):**
  - Líneas 52-55: Filtrado dinámico por sector (`filteredQuestions = selectedSector === 'all' ? COMPLIANCE_QUESTIONS_DATA : COMPLIANCE_QUESTIONS_DATA.filter(...)`).
  - Líneas 102-119: Calificación dinámica sobre `total = filteredQuestions.length`. Nota aprobatoria: `>= 8.0 / 10.0`.
  - Líneas 73-91: Registro automático de fallos en `logQuestionError`.
  - Líneas 131-146: Emisión de diploma oficial ante la SSF y UIF (`moduleKey: COMPLIANCE_${selectedSector.toUpperCase()}`).
  - La vista escala automáticamente a 16 preguntas (8 de AML y 8 de Seguros).

---

### 1.3. Infraestructura de Verificación R2
- **Scripts en `package.json`:**
  - `"typecheck": "tsc --noEmit"`
  - `"test": "vitest run"`
  - `"validate:bank": "node scripts/validate-bank.mjs"`
  - `"validate:i18n": "node scripts/validate-i18n.mjs"`
  - `"build": "vite build"`

- **Validación del Banco de Preguntas (`validate:bank`):**
  - Comando ejecutado: `npm run validate:bank`
  - Resultado: Exitoso (exit code 0), 0 errores, 0 advertencias.
  - Alcance: Valida exclusivamente los archivos JSON del banco base en `public/data/` y verifica `manifest.json`.
  - Desglose oficial de las 17,640 preguntas base:
    * `UES`: 7,500 preguntas (25 archivos × 300) en `public/data/questions/`
    * `ESCALAFON`: 3,300 preguntas (11 especialidades × 300) en `public/data/escalafon/questions/`
    * `AVANZO`: 3,000 preguntas (5 asignaturas × 600) en `public/data/avanzo/questions/`
    * `ASD`: 2,190 preguntas (6 subtemas en 3 grados × 365) en `public/data/asd/questions/`
    * `ENA`: 1,400 preguntas (4 asignaturas × 350) en `public/data/ena/questions/`
    * `ANSP`: 250 preguntas (10 materias × 25) en `public/data/ansp/questions/` (Admisiones nivel básico)
    * **Total:** 7,500 + 3,300 + 3,000 + 2,190 + 1,400 + 250 = **17,640 preguntas**.
  - **Relación con Módulos Especializados:** Los módulos técnicos (`anspAscensoData.ts`, `complianceAmlData.ts`, `csspHealthData.ts`, `notaryExamData.ts`, `constitucionalJurisprudenciaData.ts`, `residentadoBranchingCases.ts`) son estructuras en código fuente TypeScript dentro de `src/data/`, **completamente independientes** de la base JSON de 17,640 preguntas de `public/data/`. `validate-bank.mjs` no lee `src/data/`.

- **Validación Multilingüe (`validate:i18n`):**
  - Comando ejecutado: `npm run validate:i18n`
  - Resultado: Exitoso (exit code 0), 0 errores, 0 advertencias.
  - Alcance: Valida 117 claves de interfaz (UI shell) definidas en `src/i18n/locales/es.json` contra los otros 6 idiomas (`nahuat`, `lenca`, `kakawira`, `en`, `ar`, `zh`). Cobertura de UI: 100% en los 7 idiomas.
  - **Uso en Módulos Especializados:** Los módulos de ANSP Ascenso y Cumplimiento AML/SSF **no utilizan el sistema de internacionalización `i18n`** (`useTranslation` ni `t(...)`). Presentan terminología jurídica salvadoreña especializada directamente en español. Su expansión en `src/data/` no afecta ni requiere nuevas claves en `src/i18n/locales/*.json`.

- **Suite de Pruebas Automatizadas (`vitest run`):**
  - Comando ejecutado: `npm test`
  - Resultado: **13 archivos de prueba pasados, 151 pruebas unitarias aprobadas**, tiempo de ejecución ~22.5s.
  - Archivos de pruebas existentes en `tests/`:
    1. `adBanner.test.ts` (6 pruebas)
    2. `scrollToTop.test.ts` (4 pruebas)
    3. `scoring.test.ts` (5 pruebas)
    4. `errorBoundary.test.ts` (6 pruebas)
    5. `motionSites.test.ts` (5 pruebas)
    6. `authAndStats.test.ts` (13 pruebas)
    7. `categoryTheory.test.ts` (14 pruebas)
    8. `bancoService.test.ts` (11 pruebas)
    9. `i18n.test.ts` (6 pruebas)
    10. `tutorial.test.ts` (8 pruebas)
    11. `bankValidation.test.ts` (7 pruebas)
    12. `trueFalse.test.ts` (8 pruebas)
    13. `languages.test.ts` (58 pruebas)
  - **Hallazgo clave:** Actualmente **NO existen pruebas unitarias dedicadas** para `anspAscensoData.ts` ni `complianceAmlData.ts` en `tests/`.

- **Compilación de Producción (`build` y `typecheck`):**
  - `npm run typecheck` (`tsc --noEmit`): Exit code 0, cero errores de tipado.
  - `npm run build` (`vite build`): Exit code 0, compilación en 18.61s. Se generan los bundles correspondientes:
    * `dist/assets/AnspAscensoView-7v4Ikwnb.js` (27.85 kB)
    * `dist/assets/ComplianceFinancialView-CzigdSSJ.js` (23.82 kB)

- **Búsqueda de Teléfonos Privados e Invariante de Contacto:**
  - Búsqueda exacta `git grep "7943 9901"` y variantes sin espacio: **Exactamente 0 coincidencias en todo el repositorio**.
  - Búsqueda del canal oficial `+503 7657 4463`: **18 coincidencias legítimas preservadas** en `src/data.ts`, `src/App.tsx`, `src/components/DeveloperModal.tsx`, `src/components/Header.tsx`, `src/components/HeaderNavbar.tsx`, `src/components/ErrorBoundary.tsx`, `src/components/OnboardingTutorial.tsx`, `src/components/OnePageCheatSheetsView.tsx`, `src/components/motionsites/MotionSitesPortal.tsx`, `src/data/onePageSheetsData.ts`.
  - Rama Git: Verificada en `pruebas-piloto` mediante `git status` (`On branch pruebas-piloto`).

---

## 2. Logic Chain (Cadena Lógica de Deducción Técnica)

1. **Premisa 1 (Contratos de Datos y Tipos):**  
   `PolicePromotionQuestion` y `ComplianceQuestion` poseen contratos de TypeScript rigurosos con atributos requeridos (`id`, `statement`, `options`, `correctAnswer`, `explanation`, `legalBasis`, `distractorRationale`).  
   *Diferencia estructural clave:*  
   - En `anspAscensoData.ts`, `options` es un arreglo de objetos `{ key: 'A'|'B'|'C'|'D', text: string }[]`.  
   - En `complianceAmlData.ts`, `options` es un mapa de propiedades `{ A: string, B: string, C: string, D: string }`.  
   Cualquier expansión debe respetar con absoluta fidelidad este esquema tipado para no quebrar `npm run typecheck`.

2. **Premisa 2 (Escalabilidad de Vistas):**  
   Tanto `AnspAscensoView.tsx` como `ComplianceFinancialView.tsx` calculan sus estadísticas de examen (`examStats.total`, `examStats.score`, `isPassed = score >= 8.0`) de forma dinámica leyendo la longitud del arreglo filtrado. Ninguna de las vistas tiene valores fijos de conteo en su lógica de calificación ni en su renderizado. Por tanto, la expansión a 18 reactivos en ANSP y a 16 en AML/SSF se refleja de forma natural e inmediata en la interfaz.

3. **Premisa 3 (Aislamiento Arquitectónico del Banco Base):**  
   El banco base de 17,640 preguntas está almacenado en JSON bajo `public/data/` y gobernado por `manifest.json` y `scripts/validate-bank.mjs`. La densificación académica de `anspAscensoData.ts` y `complianceAmlData.ts` se ubica enteramente en `src/data/`. Por ende, expandir estos módulos especializados preserva al 100% la invariante de 17,640 preguntas en `validate:bank`.

4. **Premisa 4 (Garantía de Cobertura i18n):**  
   `scripts/validate-i18n.mjs` inspecciona exclusivamente las claves en `src/i18n/locales/*.json`. Dado que las vistas y bancos especializados usan cadenas en español directamente y no consumen claves de `locales/`, enriquecer las preguntas no genera degradación ni alertas en `npm run validate:i18n`.

5. **Premisa 5 (Oportunidad de Fortalecimiento en Vitest):**  
   Actualmente hay 151 pruebas pasando en 13 suites, ninguna de las cuales evalúa las preguntas de `anspAscensoData.ts` o `complianceAmlData.ts`. La incorporación de pruebas unitarias para estos dos módulos garantizará que las 18 preguntas de ANSP (6 por escalafón) y las 16 preguntas de Cumplimiento (8 por categoría) cuenten con validación de:
   - Total exacto de reactivos.
   - Presencia de los 4 distractores A, B, C, D con texto substantivo no vacío.
   - Correspondencia obligatoria de la clave `correctAnswer` entre las opciones.
   - Justificación legal (`legalBasis`) y pedagógica (`explanation`) completa.
   - Razón de exclusión (`distractorRationale`) para cada opción incorrecta.

---

## 3. Plan Detallado de Expansión por Módulo

### 3.1. Plan de Expansión ANSP Ascenso (7 → 18 Reactivos)
Distribuir exactamente 6 reactivos por cada escalafón:

#### A. Escalafón Cabo (6 reactivos en total: 3 existentes + 3 nuevos)
1. `pnc-cabo-001` (Existente): Flagrancia material por persecución ininterrumpida (Arts. 323 y 324 PrPn).
2. `pnc-cabo-002` (Existente): Criminalística e ITOP / Acordonamiento y preservación del lugar de homicidio (Arts. 191, 192 y 250 PrPn).
3. `pnc-cabo-003` (Existente): Tránsito Terrestre / Alcoholemia superior a 100 mg/dl y delito de conducción peligrosa (Art. 147-E Código Penal).
4. `pnc-cabo-004` (Nuevo - Requerido): **ITOP y Cadena de Custodia de Armas de Fuego y Balística.**
   - *Escenario:* Localización de pistola en escena abierta tras tiroteo; técnicas de manipulación pericial con guantes, no introducir objetos en el ánima del cañón, fijación fotográfica previa, embalaje en caja de cartón o bolsa de papel kraft asegurada con cinchos y llenado de la Hoja de Cadena de Custodia (Arts. 250 y 251 PrPn).
5. `pnc-cabo-005` (Nuevo - Requerido): **Procedimientos en Flagrancia con Menores de Edad / Ley de Responsabilidad Penal Juvenil.**
   - *Escenario:* Detención de adolescente de 16 años cometiendo delito de extorsión; obligación perentoria de notificación inmediata al Fiscal y al Defensor Público de la Procuraduría General de la República (PGR), prohibición de celdas con adultos, prohibición de esposas vejatorias y respeto al Art. 48 y 49 de la LRPJ.
6. `pnc-cabo-006` (Nuevo - Requerido): **Atención Inmediata de Violencia Intrafamiliar bajo la LEIV.**
   - *Escenario:* Llamada de auxilio al 911 por agresión física inminente contra una mujer dentro de una vivienda; facultad de ingreso en auxilio urgente (Art. 20 Cn.), auxilio inmediato a la víctima, detención del agresor y prohibición absoluta de conciliación o mediación (Arts. 55-57 LEIV y Ley contra la Violencia Intrafamiliar).

#### B. Escalafón Sargento (6 reactivos en total: 2 existentes + 4 nuevos)
1. `pnc-sargento-001` (Existente): Régimen Disciplinario / Abandono del servicio y ebriedad uniformado como Falta Muy Grave (Ley de la Carrera Policial).
2. `pnc-sargento-002` (Existente): Dirección Funcional con FGR / Allanamiento de morada habitada y reserva judicial (Art. 20 Cn. y Arts. 195-198 PrPn).
3. `pnc-sargento-003` (Nuevo - Requerido): **Régimen Disciplinario y Procedimiento ante el Tribunal Disciplinario.**
   - *Escenario:* Procedimiento sumario ante falta grave por insubordinación o abuso de autoridad; rol del Sargento en la remisión del informe inicial a la Inspectoría General de Seguridad Pública y garantías del debido proceso y derecho de defensa (Ley de la Carrera Policial).
4. `pnc-sargento-004` (Nuevo - Requerido): **Control Táctico de Armería y Cadena de Pertrechos en Subdelegación.**
   - *Escenario:* Detección de faltante de munición o arma de equipo en el libro de armería durante el relevo de guardia; responsabilidad de mando y custodia del Sargento de guardia, inicio de investigación administrativa y aseguramiento del registro de inventario.
5. `pnc-sargento-005` (Nuevo - Requerido): **Dirección Funcional con FGR / Actos Urgentes de Comprobación.**
   - *Escenario:* Actuaciones iniciales que la policía puede y debe realizar por iniciativa propia antes del arribo del fiscal (Art. 271 PrPn: identificación de testigos, protección de rastros, recolección urgente de evidencias en peligro de desaparición) delimitando los actos que requieren autorización expresa fiscal o judicial.
6. `pnc-sargento-006` (Nuevo - Requerido): **Supervisión de Medios de Coerción y Custodia de Privados de Libertad.**
   - *Escenario:* Traslado de detenidos de alta peligrosidad hacia bartolinas judiciales; directrices sobre uso reglamentario de grilletes y esposas, prohibición de tratos degradantes o castigos corporales, y supervisión directa de la bitácora de novedades (Art. 27 Cn. y estándares internacionales).

#### C. Escalafón Oficiales (Subinspector/Inspector) (6 reactivos en total: 2 existentes + 4 nuevos)
1. `pnc-oficial-001` (Existente): Derecho Constitucional Policial / Misión estrictamente civil de la PNC (Art. 159 Cn.) y apoyo militar temporal (Art. 168 Ord. 12° Cn.).
2. `pnc-oficial-002` (Existente): Derechos Humanos y Estándares ONU sobre el Empleo de la Fuerza y Armas de Fuego (Principios 4, 5 y 9).
3. `pnc-oficial-003` (Nuevo - Requerido): **Régimen de Excepción Constitucional y Garantías Inderogables.**
   - *Escenario:* Operativos bajo decreto de régimen de excepción (Arts. 29, 30 y 31 Cn.); derechos taxativamente suspendidos (libertad de asociación Art. 7, inviolabilidad de correspondencia/telecomunicaciones Art. 24, plazo de detención administrativa Art. 13 inc. 2°) frente a derechos inderogables (derecho a la vida, integridad personal, prohibición de tortura).
4. `pnc-oficial-004` (Nuevo - Requerido): **Doctrina Interamericana sobre Planificación de Operativos Policiales Complejos.**
   - *Escenario:* Diseño táctico y evaluación de riesgos en operativos antidisturbios o desarticulación de bandas criminales en zonas urbanas densas; exigencia de minimización del uso letal y responsabilidad del mando en la planificación y control de la operación (Corte IDH y principios ONU).
5. `pnc-oficial-005` (Nuevo - Requerido): **Intervención de las Telecomunicaciones y Coordinación Estratégica con FGR.**
   - *Escenario:* Protocolo conforme a la Ley Especial para la Intervención de las Telecomunicaciones (LEIT); potestad exclusiva de solicitud por parte del Fiscal General de la República, autorización mediante resolución motivada del Juzgado de Instrucción de San Salvador e ilicitud probatoria de cualquier escucha extrajudicial.
6. `pnc-oficial-006` (Nuevo - Requerido): **Marco Normativo del Tribunal de Ingresos y Ascensos (TIA) y Carrera Policial.**
   - *Escenario:* Proceso de selección y concurso de ascenso a Oficiales conforme a la Ley de la Carrera Policial y su Reglamento; baremo de méritos, antigüedad, régimen de incompatibilidades y causales de inhabilitación por sanciones disciplinarias firmes.

---

### 3.2. Plan de Expansión Cumplimiento AML & Seguros SSF (8 → 16 Preguntas)
Distribuir exactamente 8 reactivos de Prevención de Lavado (AML) y 8 de Seguros Mercantiles (SSF):

#### A. Sección Prevención de Lavado de Dinero (AML / UIF / FGR / SSF) (8 preguntas: 4 existentes + 4 nuevas)
1. `aml-01` (Existente): Beneficiario Final (UBO >= 10% del capital accionario o control efectivo final - Instructivo UIF-FGR y Rec. 24 GAFI).
2. `aml-02` (Existente): Prohibición de revelación ("Tipping-off") en ROS ante la UIF bajo sanción penal (Art. 13 LCLDA).
3. `aml-03` (Existente): Personas Expuestas Políticamente (PEP) y Debida Diligencia Reforzada (EDD / NRP-08 SSF).
4. `aml-04` (Existente): Reporte de Operaciones en Efectivo (ROE) sistemático con umbral >= $10,000 USD (Art. 9-B LCLDA).
5. `aml-05` (Nuevo - Requerido): **Tipología UIF/FGR: Pitufeo o Estructuración Transaccional ("Smurfing").**
   - *Escenario:* Detección de depósitos fraccionados consecutivos de $9,500 y $9,800 USD en múltiples agencias bancarias realizados por distintos remitentes para concentrar el dinero en una sola cuenta; deber de consolidación analítica y reporte inmediato de Operación Sospechosa (ROS) sin alertar al cliente (Arts. 9, 10 y 13 LCLDA).
6. `aml-06` (Nuevo - Requerido): **Debida Diligencia Intensificada (DDI) en Sociedades Complejas y Vehículos Fiduciarios.**
   - *Escenario:* Apertura de cuenta por parte de una persona jurídica con accionistas en jurisdicciones no cooperantes del GAFI o estructuras offshore; exigencia de identificar la cadena completa de propiedad y control hasta la persona natural y verificación de origen lícito de patrimonio bajo las Normas Técnicas NRP-08 de la SSF.
7. `aml-07` (Nuevo - Requerido): **Sujetos Obligados No Financieros (APNFD / DNFBPs) bajo el Art. 9-A de la LCLDA.**
   - *Escenario:* Obligaciones de registro y acreditación de Oficial de Cumplimiento ante la UIF para inmobiliarias, comercializadoras de vehículos, casas de empeño, abogados y notarios cuando gestionan compraventas de bienes inmuebles o constitución de sociedades mercantiles.
8. `aml-08` (Nuevo - Requerido): **Autonomía del Delito de Lavado de Activos y Extinción de Dominio (LEDAB).**
   - *Escenario:* Tipo penal del Art. 4 LCLDA como figura penal autónoma que no requiere condena previa por el delito generador; aplicación concurrente de la acción patrimonial de Extinción de Dominio sobre bienes de origen ilícito (Ley Especial de Extinción de Dominio).

#### B. Sección Seguros y Fianzas Mercantiles (Superintendencia Financiera SSF) (8 preguntas: 4 existentes + 4 nuevas)
1. `seg-01` (Existente): Principio de mera indemnización en seguros de daños (Art. 1380 C.Com.; prohibición de enriquecimiento).
2. `seg-02` (Existente): Subrogación legal de la aseguradora (Art. 1393 C.Com. contra terceros culpables).
3. `seg-03` (Existente): Fianza de Mantenimiento de Oferta en licitaciones públicas (Ley de Compras Públicas).
4. `seg-04` (Existente): Plazo general de prescripción de acciones en seguro de daños y vida: 2 años (Art. 1362 C.Com.).
5. `seg-05` (Nuevo - Requerido): **Infraseguro y Aplicación de la Regla Proporcional.**
   - *Escenario:* Un edificio comercial valorado en $200,000 USD se asegura únicamente por $100,000 USD (infraseguro al 50%). Al ocurrir un siniestro que causa daños parciales por $40,000 USD, ¿cuál es la liquidación indemnizatoria obligatoria conforme al Art. 1383 del Código de Comercio? Cálculo riguroso: Indemnización = Daño ($40,000) × Suma Asegurada ($100,000) / Valor Real ($200,000) = $20,000 USD.
6. `seg-06` (Nuevo - Requerido): **Sobreseguro Doloso versus Buena Fe.**
   - *Escenario:* Aseguramiento de un inventario por una suma notoriamente superior a su valor comercial real; consecuencias de la mala fe (nulidad absoluta del contrato de seguro conforme al Art. 1381 C.Com.) versus reducción obligatoria de suma y prima si no medió dolo.
7. `seg-07` (Nuevo - Requerido): **Seguro de Vida: Cláusula de Suicidio e Incontestabilidad.**
   - *Escenario:* Fallecimiento del asegurado por suicidio ocurrido a los 14 meses de contratada la póliza de vida versus fallecimiento posterior a los 2 años; aplicación del plazo legal de exoneración de 2 años conforme al Art. 1481 del Código de Comercio y principio de incontestabilidad.
8. `seg-08` (Nuevo - Requerido): **Fianzas de Cumplimiento de Contrato y de Buena Obra en Contratación Pública.**
   - *Escenario:* Diferencia jurídica y operativa entre la Fianza de Cumplimiento de Contrato (garantía del 10% al 20% para asegurar la ejecución del objeto contractual) y la Fianza de Buena Obra o Conservación (garantía post-recepción definitiva para cubrir vicios ocultos durante el plazo legal de 1 a 2 años bajo la Ley de Compras Públicas y Código de Comercio Arts. 1539-1550).

---

## 4. Caveats (Límites y Supuestos)

1. **Modo Solo Lectura:** En estricto apego al rol de Explorer, no se han modificado archivos de código fuente en `src/data/` ni en `src/components/`. La implementación de las preguntas planificadas queda lista y especificada para la fase ejecutora.
2. **Independencia del Banco Base de 17,640 preguntas:** Los archivos JSON dentro de `public/data/` **no deben tocarse** durante la densificación de los módulos técnicos de `src/data/`. `npm run validate:bank` verifica únicamente `public/data/`.
3. **Internacionalización:** No se requieren modificaciones en `src/i18n/locales/*.json` para los módulos de ANSP Ascenso ni Cumplimiento AML/SSF. Cualquier adición de claves en `es.json` obligaría a replicar las claves en los otros 6 idiomas para no quebrar `validate:i18n`. Mantener los módulos especializados con literales directos en español es el estándar actual del proyecto.
4. **Alerta de Undici en Vitest:** Se observó una advertencia menor en `stderr` durante `languages.test.ts` (`TypeError: Failed to parse URL from /data/ingles/curriculum.json` en entorno Node sin host completo), la cual no causa falla en las pruebas (las 58 pruebas de idiomas pasan con éxito).

---

## 5. Conclusion (Conclusión y Recomendaciones de Implementación)

1. **Factibilidad Total de Expansión:** Tanto `src/data/anspAscensoData.ts` como `src/data/complianceAmlData.ts` están listos para recibir su expansión completa (18 y 16 reactivos respectivamente) sin requerir alteraciones estructurales en `AnspAscensoView.tsx` ni en `ComplianceFinancialView.tsx`.
2. **Preservación Incondicional de Invariantes R2:**
   - Cero errores en TypeScript (`npm run typecheck` = 0).
   - 100% de pruebas unitarias aprobadas en Vitest (`npm test` = 151+ pruebas pasando).
   - Banco de 17,640 preguntas base 100% intacto (`npm run validate:bank` = 0 errores).
   - 100% de cobertura multilingüe en UI (`npm run validate:i18n` = 0 errores).
   - Compilación limpia de producción (`npm run build` = 0).
   - Teléfono oficial WhatsApp `+503 7657 4463` preservado y 0 ocurrencias de teléfonos privados (`git grep "7943 9901"` = 0).
3. **Recomendación para Implementación:**
   - Crear una nueva suite de pruebas unitarias en `tests/specializedModules.test.ts` (o `anspAndCompliance.test.ts`) que verifique:
     * `POLICE_PROMOTION_QUESTIONS.length === 18` (6 Cabo, 6 Sargento, 6 Oficiales).
     * `COMPLIANCE_QUESTIONS_DATA.length === 16` (8 AML, 8 Seguros).
     * Integridad de los 4 distractores, clave correcta válida, fundamento legal y razones de distractor.
   - Esto elevará el total de pruebas en Vitest por encima de 155+, robusteciendo la cobertura del proyecto.

---

## 6. Verification Method (Método de Verificación Independiente)

Para verificar y revalidar de manera independiente las conclusiones de este informe:

1. **Verificar el Banco Base de 17,640 preguntas:**
   ```powershell
   npm run validate:bank
   ```
   *Salida esperada:* `Preguntas válidas: UES=7500 ANSP=250 ASD=2190 AVANZO=3000 ENA=1400 ESCALAFON=3300 total=17640` con `Errores: 0`.

2. **Verificar la Cobertura Multilingüe de UI (117 claves):**
   ```powershell
   npm run validate:i18n
   ```
   *Salida esperada:* `UI: 100% (117/117)` en los 7 idiomas, `status: PASSED`.

3. **Verificar la Integridad de Tipado en TypeScript:**
   ```powershell
   npm run typecheck
   ```
   *Salida esperada:* Exit code 0, sin errores de compilación estática.

4. **Verificar la Suite Completa de Pruebas Unitarias:**
   ```powershell
   npm test
   ```
   *Salida esperada:* 13 suites pasadas, 151+ pruebas aprobadas con exit code 0.

5. **Verificar la Compilación de Producción de Vite:**
   ```powershell
   npm run build
   ```
   *Salida esperada:* Bundles generados en `dist/` en ~18s con exit code 0.

6. **Verificar la Ausencia Total del Teléfono Privado:**
   ```powershell
   git grep "7943 9901"
   ```
   *Salida esperada:* Exactamente 0 ocurrencias (salida vacía).

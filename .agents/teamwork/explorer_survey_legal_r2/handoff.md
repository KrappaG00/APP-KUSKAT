# REPORTE TÉCNICO DE AUDITORÍA Y ESPECIFICACIÓN DE EXPANSIÓN
## Módulos Legales, Judiciales y Constitucionales · APP-KUSKAT

**Fecha**: 2026-10-31  
**Investigador**: Explorer 1 (`teamwork_explorer`)  
**Directorio de Trabajo**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_legal_r2`  
**Referencia de Misión**: Auditoría técnica read-only, cuantificación de contenido, detección de brechas pedagógicas y formulación de especificaciones de expansión sustantiva (>= 500 palabras por unidad, >= 5 ejemplos resueltos paso a paso, preguntas contextualizadas y estricta preservación de invariantes).

---

## 1. Observation (Observaciones Directas de Código y Estado Actual)

A través de inspección directa de código fuente, análisis estático y ejecución de pruebas de verificación automatizada, se auditaron todos los módulos jurídicos y procesales del repositorio:

### 1.1 Módulo 1: Simulador de Litigación Oral Penal
* **Archivos y Rutas**:
  - Vista: `src/components/OralLitigationSimulatorView.tsx` (513 líneas).
  - Datos: `src/data/oralLitigationData.ts` (260 líneas).
* **Modelos e Interfaces**:
  - `ObjectionType`: `'SUGESTIVA' | 'CAPCIOSA' | 'IMPERTINENTE' | 'COMPUESTA' | 'CONCLUSIVA' | 'REPETITIVA' | 'ESPECULATIVA' | 'VALIDA'`.
  - `ObjectionDefinition`: `{ type, label, legalBasis, description, whenAllowed }`.
  - `CourtroomDrillItem`: `{ id, caseTitle, tribunal, phase, interrogator, witnessRole, contextNarrative, questionUttered, correctObjection, judgeRuling, judicialRationale, salvadoranJurisprudence }`.
* **Cuantificación Actual**:
  - Catálogo de Objeciones (`OBJECTION_DEFINITIONS`): 8 definiciones.
    * Conteo total de palabras en definiciones: **272 palabras** (promedio de 34 palabras por tipo).
    * `description` promedio: 18 palabras; `whenAllowed` promedio: 15 palabras.
  - Ejercicios de Reacción Rápida (`COURTROOM_DRILLS`): Exactamente **10 reactivos** (`drill-001` a `drill-010`).
    * Conteo total de palabras en los 10 drills: **~710 palabras** (promedio de 71 palabras por caso entre contexto, fundamentación y jurisprudencia).
  - Unidades Temáticas / Guías Teóricas: **0 unidades**. No existe desarrollo conceptual de Teoría del Caso, Alegatos de Apertura, Interrogatorio Directo, Contrainterrogatorio, ni Alegatos de Clausura.
  - Ejemplos Resueltos Paso a Paso: **0 casos estructurados**. Los 10 drills operan como preguntas con temporizador de 5 segundos, pero no contienen transcripciones completas de exámenes o incidentes procesales resueltos.
  - Preguntas Interactivas: 10 ejercicios con temporizador y registro en el Cuaderno de Errores (`logQuestionError`).

### 1.2 Módulo 2: Casoteca Constitucional CSJ & Corpus de Ramas del Derecho
* **Archivos y Rutas**:
  - Vista: `src/components/ConstitutionLawView.tsx` (951 líneas).
  - Datos: `src/data/constitucionalJurisprudenciaData.ts` (299 líneas).
* **Modelos e Interfaces**:
  - `ConstitutionalRulingCase`: `{ id, refNumber, year, rulingType, title, constitutionalArticles, factsSummary, ratioDecidendi, practicalImpact, legalQuiz }`.
  - `AmparoStepGuide`: `{ stepNumber, title, legalRequirement, practicalGuidance, commonMistakes, modelSnippet }`.
  - `LawArticleEntry`: `{ articleRef, literalText, simplifiedText, analyticalCommentary }`.
  - `LawBranch`: `{ id, name, type, icon, badgeColor, summary, doctrinalBasis, entries }`.
* **Cuantificación Actual**:
  - **Casoteca de Sentencias Paradigmáticas (`CONSTITUTIONAL_CASES`)**: Exactamente **10 sentencias** (`sc-inc-044-2013`, `sc-hc-179-2011`, `sc-inc-004-2012`, `sc-amp-408-2015`, `sc-inc-021-2020`, `sc-hc-119-2014`, `sc-amp-713-2015`, `sc-inc-028-2015`, `sc-inc-006-2016`, `sc-amp-068-2011`).
    * Palabras promedio por sentencia: **~215 palabras** (factsSummary ~50 palabras, ratioDecidendi ~80 palabras, practicalImpact ~35 palabras, legalQuiz ~50 palabras).
    * Total palabras Casoteca: **~2,150 palabras**.
  - **Taller de Demanda de Amparo (`AMPARO_STEP_GUIDE`)**: Exactamente **5 pasos procesales**.
    * Palabras por paso: Paso 1 (89 palabras), Paso 2 (69 palabras), Paso 3 (81 palabras), Paso 4 (78 palabras), Paso 5 (86 palabras).
    * Total palabras Taller de Amparo: **403 palabras** (las 5 fases combinadas no alcanzan 500 palabras).
  - **Corpus Constitucional y Ramas del Derecho (`CONSTITUTION_LAW_BRANCHES`)**: **10 ramas jurídicas**.
    * Cobertura por rama:
      1. Constitucional: 3 artículos (Art. 1, Art. 86, Art. 246) — 342 palabras.
      2. Penal: 2 artículos (Art. 12, Art. 15) — 238 palabras.
      3. Procesal: 1 artículo (Art. 11) — 128 palabras.
      4. Administrativo: 1 artículo (Art. 245) — 124 palabras.
      5. Tributario: 1 artículo (Art. 231 & 131) — 118 palabras.
      6. Internacional Público: 1 artículo (Art. 144) — 116 palabras.
      7. Civil: 1 artículo (Art. 2 & 103) — 122 palabras.
      8. Mercantil: 1 artículo (Art. 102 & 110) — 114 palabras.
      9. Laboral: 1 artículo (Art. 37 & 38) — 126 palabras.
      10. Familia: 1 artículo (Art. 32 & 36) — 121 palabras.
    * Promedio por rama: **~155 palabras** (muy por debajo de las 500 palabras requeridas).
    * Ejemplos resueltos por rama: **0 casos prácticos**.
    * Preguntas de evaluación en ramas: **0 preguntas**.
  - Preguntas Interactivas Totales: 10 preguntas (1 por sentencia en Casoteca, 0 en Corpus).

### 1.3 Módulo 3: Examen de Suficiencia Notarial CSJ
* **Archivos y Rutas**:
  - Vista: `src/components/NotaryExamView.tsx` (1,483 líneas).
  - Datos: `src/data/notaryExamData.ts` (6,170 líneas).
* **Modelos e Interfaces**:
  - `NotaryQuestion`: `{ id, topic, legalBasis, statement, options, correctKey, explanation, csjPrecedent, category }`.
  - `NotaryThematicUnit`: `{ id, number, title, legalFocus, wordCount, content, examples }`.
  - `NotaryVademecumDeadline`: `{ id, area, title, deadline, legalBasis, consequence, practicalAdvice }`.
  - `NotaryJurisprudenceRecord`: `{ id, refNumber, court, year, subject, legalIssue, ratioDecidendi, keyRule }`.
  - `NotarySpecialProtocol`: `{ id, title, circumstance, requiredProcedure, legalBasis, mandatoryClauses, commonErrors }`.
* **Cuantificación Actual**:
  - Banco Base (`NOTARY_EXAM_QUESTIONS`): **Exactamente 200 reactivos** (`not-01` a `not-200`).
    * Distribución: 40 Notarial Puro, 40 LENJVOD, 40 Sucesiones, 40 Contratos, 40 Mercantil.
    * Invariante certificado: Las 200 preguntas base están 100% completas, con base legal, explicación y precedente CSJ, sumando ~30,000 palabras.
  - Unidades Temáticas (`NOTARY_THEMATIC_UNITS`): **5 unidades rectoras**.
    * `unit-not-01` (Estructura y Solemnidades Matriz): **685 palabras**, 5 ejemplos resueltos.
    * `unit-not-02` (Diligencias LENJVOD): **710 palabras**, 5 ejemplos resueltos.
    * `unit-not-03` (Derecho Sucesorio y Testamento): **730 palabras**, 5 ejemplos resueltos.
    * `unit-not-04` (Contratación Civil y CNR): **715 palabras**, 5 ejemplos resueltos.
    * `unit-not-05` (Práctica Societaria C.Com.): **720 palabras**, 5 ejemplos resueltos.
    * Las 5 unidades cumplen el estándar (todas > 680 palabras y 5 ejemplos diferenciados).
  - Vademécum de Plazos Fatales (`NOTARY_VADEMECUM_DEADLINES`): **8 plazos críticos**.
  - Precedentes Vinculantes CSJ (`NOTARY_JURISPRUDENCE_RECORDS`): **4 precedentes de Corte Plena / Sala de lo Civil**.
  - Protocolos Especiales (`NOTARY_SPECIAL_PROTOCOLS`): **4 protocolos** (sin DUI, intérprete, ruego, ciegos).
* **Brechas Detectadas**:
  - Faltan temas notariales críticos evaluados frecuentemente por la CSJ:
    * Actas Notariales y Protocolizaciones (Arts. 50-58 LN: protocolización de resoluciones, actas de presencia, notificación y protesto).
    * Matrimonio en Sede Notarial y Capitulaciones Matrimoniales (Arts. 21-36 y 40-70 Código de Familia).
    * Régimen Disciplinario, Informativos de la Sección de Notariado y Clausura de Protocolo (Arts. 21-26, 64-70 LN).
    * Derecho Notarial Digital y Firma Electrónica (concordancia entre testimonio en papel y documento electrónico).
  - Faltan minutas notariales completas anotadas paso a paso con advertencias y razones de saca.

### 1.4 Módulo 4: Otros Módulos Jurídicos y Procedimentales
1. **Derecho Administrativo y Firma Electrónica**:
   - Vista: `src/components/DerechoAdministrativoView.tsx` (742 líneas).
   - Datos: `src/data/derechoAdministrativoData.ts` (4,534 líneas).
   - Reactivos (`ADMIN_LAW_QUESTIONS`): Exactamente **200 preguntas** (150 LPA, 50 Firma Electrónica).
   - Flujograma (`LPA_PROCEDURE_FLOW`): **4 etapas** (Iniciación, Instrucción, Terminación, Recursos) con **~350 palabras totales**.
   - Brecha: Carece de unidades temáticas profundas (>=500 palabras) y carece de casos prácticos resueltos paso a paso.
2. **Cumplimiento AML, UIF/FGR y Seguros SSF**:
   - Vista: `src/components/ComplianceFinancialView.tsx` (485 líneas).
   - Datos: `src/data/complianceAmlData.ts` (4,463 líneas).
   - Reactivos (`COMPLIANCE_QUESTIONS`): Exactamente **200 preguntas** (100 AML, 100 Seguros).
   - Brecha: **0 unidades temáticas teóricas** y **0 casos prácticos resueltos**. Únicamente existe el banco de reactivos.
3. **Ascenso Policial ANSP (Derecho Penal y Procesal Penal Policial)**:
   - Vista: `src/components/AnspAscensoView.tsx` (526 líneas).
   - Datos: `src/data/anspAscensoData.ts` (6,872 líneas).
   - Reactivos (`ANSP_ASCENSO_QUESTIONS`): Exactamente **200 preguntas** (66 Cabo, 67 Sargento, 67 Oficial).
   - Brecha: **0 unidades temáticas teóricas** y **0 casos prácticos táctico-jurídicos resueltos**.
4. **Ficha de 1 Página Jurídica (`src/data/onePageSheetsData.ts`)**:
   - Ficha `constitucional-procesal` (3 secciones: Plazos de Detención Art. 13 Cn., Taller de Amparo, Objeciones PrPn). Total: **~380 palabras**.

### 1.5 Verificación de Invariantes y Ejecución de Pruebas Automatizadas
Se ejecutaron los siguientes comandos de verificación técnica:
- `npx vitest run tests/notaryExamEnhancements.test.ts tests/legalModules.test.ts`:
  * Resultado: **24 tests passed (100%)**.
- `npx vitest run tests/challengerLegalSecurity.test.ts tests/specializedModules200.test.ts`:
  * Resultado: **33 tests passed (100%)**.
- Verificación de Colisiones con Banco Base:
  * 0 colisiones de ID entre los 1,400 reactivos especializados y las 17,640 preguntas en `public/data/`.
- Verificación de Contacto Privado:
  * 0 ocurrencias del número telefónico privado "7943 9901" en `src/` y `public/`.
  * Presencia verificada del WhatsApp corporativo oficial `+503 7657 4463`.
- Invariante de Notariado:
  * Exactamente 200 reactivos con IDs correlativos `not-01` a `not-200` intactos.

---

## 2. Logic Chain (Cadena Lógica de Deducciones e Inmediación Técnica)

1. **Premisa 1 (Estándar Curricular y Pedagógico)**: El mandato de optimización de APP-KUSKAT exige que toda área de formación sustantiva cuente con explicaciones conceptuales de al menos 500 palabras por tema/unidad, respaldadas por al menos 5 ejemplos prácticos resueltos paso a paso y preguntas de evaluación contextualizadas con retroalimentación inmediata, eliminando textos esquemáticos o breves.
2. **Deducción de Litigación Oral (Módulo 1)**:
   - *Observación*: `oralLitigationData.ts` solo contiene 8 definiciones breves (272 palabras) y 10 reactivos (710 palabras).
   - *Conclusión Lógica*: El simulador tiene una excelente base mecánica interactiva (cuenta regresiva, veredictos judiciales y cuaderno de errores), pero adolece de un vacío curricular total: no explica cómo preparar la Teoría del Caso (fáctica, jurídica y probatoria), cómo estructurar un examen directo cronológico, cómo ejecutar el contrainterrogatorio con preguntas de un solo hecho ni cómo alegar en clausura. Requiere la incorporación de unidades temáticas estructuradas (>=500 palabras) y casos modelo de juicios completos resueltos paso a paso.
3. **Deducción de Casoteca y Corpus Constitucional (Módulo 2)**:
   - *Observación*: Las 10 ramas de `ConstitutionLawView.tsx` tienen un promedio de ~155 palabras por rama (solo 1 o 2 artículos comentados), y el Taller de Amparo suma apenas 403 palabras en sus 5 pasos combinados.
   - *Conclusión Lógica*: El módulo es esquemático en su vertiente de Corpus Constitucional. Aunque la Casoteca posee 10 sentencias excelentes, carece de guías de litigio constitucional paso a paso para Hábeas Corpus e Inconstitucionalidades, y no posee problemas resueltos paso a paso donde el estudiante aplique el test de proporcionalidad o redacte demandas completas.
4. **Deducción de Examen de Notariado (Módulo 3)**:
   - *Observación*: El banco de 200 preguntas está blindado por pruebas (`notaryExamEnhancements.test.ts`, `legalModules.test.ts`, `challengerLegalSecurity.test.ts`) que exigen que `NOTARY_EXAM_QUESTIONS` tenga exactamente 200 reactivos con IDs `not-01` a `not-200`. Las 5 unidades temáticas existentes ya cumplen con >=500 palabras y 5 ejemplos.
   - *Conclusión Lógica*: Para profundizar el módulo SIN violar los invariantes existentes, la expansión no debe alterar ni agregar reactivos con esos prefijos a `NOTARY_EXAM_QUESTIONS`, sino expandir las unidades temáticas pedagógicas incorporando nuevas unidades complementarias (Units 6 a 9: Actas Notariales, Matrimonio Notarial, Régimen Disciplinario CSJ y Notariado Digital) y agregando minutas notariales completas comentadas.
5. **Deducción de Módulos Procedimentales Afines (Módulo 4: Administrativo, Compliance, ANSP)**:
   - *Observación*: Los 3 módulos cuentan con 200 reactivos rigurosamente certificados cada uno (invariante de 1,400 reactivos en `specializedModules200.test.ts`), pero carecen por completo de unidades de estudio sustantivas desarrolladas (enfoque de sólo evaluación).
   - *Conclusión Lógica*: Deben formularse especificaciones curriculares con unidades teóricas (>=500 palabras) y 5 casos resueltos por unidad para enriquecer la experiencia de aprendizaje antes de someterse al simulador.

---

## 3. Caveats (Límites, Supuestos y Condiciones de Borde)

1. **Modo Read-Only Estricto**: Esta auditoría no aplicó modificaciones directas al código fuente de producción (`src/`), limitándose a documentar observaciones fácticas y formular especificaciones técnicas para su posterior implementación en la fase de codificación.
2. **Invarianza Absoluta de Bancos de Reactivos Evaluativos**:
   - `NOTARY_EXAM_QUESTIONS`: Debe permanecer inmutable en exactamente 200 reactivos (`not-01` a `not-200`).
   - `ADMIN_LAW_QUESTIONS`: Debe permanecer inmutable en 200 reactivos (150 LPA, 50 Firma Electrónica).
   - `COMPLIANCE_QUESTIONS`: Debe permanecer inmutable en 200 reactivos (100 AML, 100 Seguros).
   - `ANSP_ASCENSO_QUESTIONS`: Debe permanecer inmutable en 200 reactivos (66 Cabo, 67 Sargento, 67 Oficial).
   - Cualquier expansión de casos prácticos o guías teóricas debe estructurarse en interfaces y colecciones dedicadas (ej. `THEMATIC_UNITS`, `PRACTICE_CASES`, `ANNOTATED_DEEDS`), sin desvirtuar los arrays validados en la suite de vitest.
3. **Límite de Preguntas Base JSON**: Ningún identificador propuesto puede colisionar con los 17,640 reactivos en `public/data/`.

---

## 4. Conclusion (Especificaciones de Expansión Concretas y Accionables)

A continuación se define la especificación técnica pormenorizada para la expansión curricular de cada módulo:

### ESPECIFICACIÓN A: Simulador de Litigación Oral Penal (`src/data/oralLitigationData.ts`)

Se especifica la creación de la colección `ORAL_LITIGATION_THEMATIC_UNITS: OralLitigationThematicUnit[]` estructurada con **5 unidades procesales completas**, cada una con **>= 500 palabras sustantivas** y **al menos 5 ejemplos resueltos paso a paso**:

#### Unidad 1: Teoría del Caso y Alegatos de Apertura en Vista Pública
* **Marco Normativo**: Arts. 380, 381, 394 y 399 Código Procesal Penal (PrPn).
* **Contenido Explicativo (>= 500 palabras)**:
  - Definición y tripartición de la Teoría del Caso: Proposiciones Fácticas (hechos jurídicamente relevantes), Fundamentación Jurídica (adecuación típica, antijuridicidad y culpabilidad) y Sustento Probatorio (testigos, peritajes, documentos y evidencia material).
  - Reglas de oro de la Teoría del Caso: Única, autosuficiente, creíble y jurídicamente viable.
  - Técnica de Estructuración del Alegato de Apertura: Lema o frase de impacto, presentación sucinta de los personajes (humanización), relato cronológico dinámico de los hechos, promesa probatoria clara ("Ustedes escucharán del perito...") y petición de fallo formal. Prohibición de argumentar conclusiones valorativas en la apertura (Art. 380 PrPn).
* **5 Ejemplos Resueltos Paso a Paso**:
  1. *Caso Homicidio Agravado Tentado (Legítima Defensa)*: Formulación de apertura de la defensa técnica con lema: "Defendiendo la propia vida en la oscuridad del hogar", desagregación de las 3 proposiciones fácticas y promesa probatoria del peritaje forense de trayectoria balística.
  2. *Caso Robo Agravado en Transporte Colectivo*: Apertura de Fiscalía con identificación en flagrancia y recuperación de evidencia; desglose del elemento intimidatorio y coautoría funcional.
  3. *Caso Extorsión Continuada con Entregas Vigiladas*: Estructura del lema y promesa de corroboración mediante bitácoras telefónicas y actas de seriado de dinero.
  4. *Caso Fraude Procesal e Incumplimiento de Deberes*: Apertura dirigida a tribunal colegiado con análisis documental de actas notariales y peritaje caligráfico.
  5. *Caso Violencia Intrafamiliar Psicológica*: Apertura con enfoque de género y valoración del peritaje psicológico del Instituto de Medicina Legal (IML).

#### Unidad 2: Interrogatorio Directo a Testigos Presenciales y Peritos
* **Marco Normativo**: Arts. 209, 210, 226 y 236 PrPn.
* **Contenido Explicativo (>= 500 palabras)**:
  - Objetivos del Directo: Acreditar la fuente, introducir las proposiciones fácticas de forma creíble y autenticar la prueba documental o material.
  - Tipología de preguntas permitidas: Abiertas (qué, quién, cómo, cuándo, dónde, por qué) y de transición.
  - Principio estricto de no sugestividad en el directo (Art. 210 inc. 2 PrPn): la información debe brotar de la memoria del testigo, no de la boca del litigante.
  - Acreditación previa de peritos forenses: Validación de idoneidad, títulos académicos, experiencia clínica y metodología aplicada antes de ratificar el dictamen.
  - Técnica de refrescamiento de memoria (Art. 212 PrPn) mediante declaraciones previas.
* **5 Ejemplos Resueltos Paso a Paso**:
  1. *Interrogatorio Directo de Víctima Protegida en Robo*: Guión completo de 10 preguntas abiertas desde la acreditación personal hasta la individualización del atacante.
  2. *Interrogatorio Directo de Perito Balístico IML*: Formulación técnica para autenticar el cotejo de proyectiles con microscopio de comparación y determinación de arma disparadora.
  3. *Interrogatorio Directo a Agente Captor PNC*: Reconstrucción cronológica de la persecución material en flagrancia y aseguramiento de la cadena de custodia.
  4. *Refrescamiento de Memoria con Entrevista Previa*: Procedimiento formal de 5 pasos: generar la laguna mental, sentar las bases, exhibir el documento a la contraparte, lectura silenciosa por el testigo y formulación de la pregunta abierta de nuevo.
  5. *Interrogatorio Directo de Médico Forense en Lesiones Graves*: Explicación didáctica del período de incapacidad laboral y secuelas orgánicas permanentes.

#### Unidad 3: Contrainterrogatorio e Impugnación de Credibilidad
* **Marco Normativo**: Arts. 210 inc. 2 y 211 PrPn; Jurisprudencia Sala de lo Penal CSJ.
* **Contenido Explicativo (>= 500 palabras)**:
  - Fines del Contraexamen: Limitar el daño del testimonio adverso, desacreditar la credibilidad personal del testigo (interés, parcialidad, antecedentes de falsedad) o desacreditar el testimonio (falta de visibilidad, distancia, estado emocional, contradicciones).
  - Regla de oro del Contrainterrogatorio: Preguntas sugestivas de un solo punto fáctico. El abogado es quien relata los hechos y el testigo únicamente asiente ("¿Es correcto?", "¿Cierto?").
  - Prohibición de formular "la pregunta de más" (no pedir explicaciones ni formular "¿por qué?").
  - Técnica de evidenciación de contradicciones con declaraciones previas (Técnica C.A.C.A.: Comprometer, Acreditar, Confrontar y Acabar).
* **5 Ejemplos Resueltos Paso a Paso**:
  1. *Contraexamen por Falta de Percepción Sensorial*: Demostración paso a paso de que el testigo no pudo ver el rostro del imputado por oscuridad nocturna (poste de luz apagado) y distancia mayor a 40 metros.
  2. *Evidenciación de Contradicción en Declaración Previa*: Confrontación de testigo que en juicio afirmó "llevaba camisa roja" cuando en su denuncia fiscal asentó "camisa blanca a rayas".
  3. *Desacreditación por Motivo Espurio o Interés*: Contraexamen a testigo que tiene rencillas familiares o litigios patrimoniales previos con el imputado.
  4. *Contraexamen a Perito Forense por Falta de Rigor Metodológico*: Evidenciación de que el perito químico no realizó prueba confirmatoria de espectrometría de masas sino solo prueba presuntiva de campo.
  5. *Control de Testigo Hostil o Evasivo*: Técnicas para obligar al testigo evasivo a responder con monosílabos ("sí" o "no") requiriendo la intervención del juez presidente.

#### Unidad 4: Objeciones en Tiempo Real y Régimen Disciplinario en Audiencia
* **Marco Normativo**: Arts. 209, 210, 211 y 212 PrPn; Ley Orgánica Judicial.
* **Contenido Explicativo (>= 500 palabras)**:
  - Naturaleza jurídica de las objeciones: Mecanismo de saneamiento probatorio preventivo para impedir el ingreso de información espuria, engañosa o extemporánea al juicio oral.
  - Requisitos de validez procesal de la objeción: Instantaneidad (antes de que el testigo responda), fundamentación concisa con mención del tipo legal sin alegatos impertinentes ("Objeción: Sugestiva, Art. 210 PrPn"), y respeto a la dirección del debate por el juez presidente.
  - Efectos procesales: Ha Lugar (la pregunta no se contesta y se reformula o expulsa) vs. No Ha Lugar (el declarante debe responder).
  - Régimen de protesta formal para reserva de Casación (Art. 469 PrPn) ante objeciones desestimadas que causen agravio irreparable.
* **5 Ejemplos Resueltos Paso a Paso**:
  1. *Objeción por Pregunta Capciosa en Vista Pública*: Interposición inmediata, debate y resolución judicial ante una pregunta que presupone un hecho falso no admitido por la víctima.
  2. *Objeción por Pregunta Compuesta*: Argumentación procesal demostrando que la pregunta contiene 3 hechos independientes, obligando al litigante a desglosarla.
  3. *Objeción por Pregunta Conclusiva a Testigo Lego*: Expulsión de interrogante que pide a un transeúnte determinar la velocidad matemática de un vehículo en colisión.
  4. *Objeción Desestimada ("No Ha Lugar") a Pregunta Sugestiva en Contraexamen*: Intervención judicial confirmando la legalidad de la sugestividad en contrainterrogatorio conforme al Art. 210 inc. 2 PrPn.
  5. *Incidente de Objeción con Reserva de Casación*: Procedimiento formal del abogado defensor tras la desestimación de una objeción trascendental para dejar constancia de protesta para el recurso de casación penal.

#### Unidad 5: Alegato de Clausura y Valoración Conforme a la Sana Crítica
* **Marco Normativo**: Arts. 179, 391 y 395 PrPn; Jurisprudencia vinculante Sala de lo Penal CSJ.
* **Contenido Explicativo (>= 500 palabras)**:
  - Definición y propósito: Síntesis argumentativa final donde se ensamblan las pruebas desfiladas en la audiencia con las proposiciones fácticas iniciales, demostrando que la promesa de apertura fue cumplida.
  - Sistema de Valoración de la Sana Crítica (Art. 179 PrPn): Reglas de la Lógica (principio de identidad, no contradicción, tercero excluido y razón suficiente), Principios de la Ciencia (física, balística, medicina) y Máximas de la Experiencia común.
  - Estructura del Alegato Final: Retorno al lema, análisis probatorio por bloques fácticos, refutación de la hipótesis de la contraparte, y petición concreta de condena o absolución conforme a derecho.
* **5 Ejemplos Resueltos Paso a Paso**:
  1. *Alegato de Clausura de Fiscalía en Extorsión*: Argumentación de la coautoría funcional integrando la prueba testimonial del agente negociador con las entregas vigiladas y el análisis de vaciado telefónico.
  2. *Alegato de Clausura de la Defensa por Duda Razonable (In Dubio Pro Reo)*: Análisis metódico de las contradicciones insalvables entre los testigos de cargo y la violación del principio de razón suficiente.
  3. *Alegato de Clausura en Homicidio Culposo por Accidente Vial*: Demostración de la culpa exclusiva de la víctima por invasión imprudente de carril a la luz de las leyes de la física del peritaje de accidentología.
  4. *Refutación Argumentativa del Testigo de Coartada*: Desmontaje lógico en clausura de la coartada presentada por la defensa demostrando imposibilidad temporal y espacial.
  5. *Petición de Cambio de Calificación Jurídica en Clausura*: Argumentación subsidiaria de la defensa solicitando la degradación típica de Homicidio Tentado a Lesiones Graves por desistimiento voluntario.

---

### ESPECIFICACIÓN B: Casoteca Constitucional CSJ & Corpus Jurídico (`src/data/constitucionalJurisprudenciaData.ts`)

Se especifica:

#### 1. Expansión de las 10 Sentencias de la Casoteca
Incorporar en cada una de las 10 sentencias existentes:
- **Voto Disidente o Razonamiento Crítico**: Síntesis de los votos concurrentes o disidentes emitidos por los Magistrados de la Sala de lo Constitucional.
- **Caso Práctico de Aplicación Paso a Paso**: Caso hipotético contemporáneo resuelto donde el estudiante aplica la ratio decidendi para emitir un dictamen judicial fundamentado.

#### 2. Expansión del Corpus de Ramas del Derecho (10 Ramas en `ConstitutionLawView.tsx`)
Elevar cada una de las 10 ramas de ~155 palabras a **>= 500 palabras sustantivas**, incorporando:
- Mínimo **3 artículos cardinales desarrollados exhaustivamente**.
- Marco doctrinal completo (principios jurídicos, antecedentes históricos salvadoreños y control de constitucionalidad).
- **5 casos resueltos paso a paso por cada rama** (50 casos en total):
  * Ej. en Derecho Laboral: Casos de fuero de maternidad, cálculo de indemnización por despido injustificado (Art. 58 C.Tr.), horas extraordinarias nocturnas, prescripción de acciones laborales (Art. 610 C.Tr.) y acoso laboral (mobbing).
  * Ej. en Derecho Administrativo: Casos de caducidad del procedimiento sancionador (Art. 147 LPA), revocación de actos favorables (Art. 119 LPA), certificación de silencio positivo, responsabilidad patrimonial directa del funcionario y medida cautelar contencioso-administrativa.
  * Ej. en Derecho Procesal: Casos de excepción de litispendencia, nulidad procesal por falta de emplazamiento, prueba ilícita excluida por violación de intimidad, medidas cautelares innominadas y ejecución forzosa dineraria.

#### 3. Taller Procesal Constitucional Completo (Amparo, Hábeas Corpus e Inconstitucionalidad)
- Complementar la guía de Amparo (actualmente de 403 palabras) con un **Caso Práctico Completo Resuelto de Inicio a Fin** (Demanda -> Auto de Admisión y Medida Cautelar -> Informe de Autoridad Demandada -> Traslado a Fiscalía -> Sentencia Definitiva).
- Crear el **Taller de Hábeas Corpus en 4 Pasos** (Modalidades: Reparador, Preventivo, Correctivo y Contra Particulares) con plantilla forense y caso resuelto.
- Crear el **Taller de Demanda de Inconstitucionalidad en 4 Pasos** (Objeto de Control, Parámetro de Constitucionalidad, Confrontación Normativa y Efectos Erga Omnes).

---

### ESPECIFICACIÓN C: Examen de Suficiencia Notarial CSJ (`src/data/notaryExamData.ts`)

Para preservar el invariante de los 200 reactivos base intactos y enriquecer pedagógicamente el módulo:

1. **Incorporar 4 Unidades Temáticas Complementarias (Units 6 a 9)**, todas con **>= 500 palabras sustantivas** y **5 ejemplos resueltos paso a paso**:
   - **Unit 6: Actas Notariales, Fe de Hechos y Protocolización de Documentos Privados**:
     * Marco: Arts. 50 a 58 Ley de Notariado.
     * Contenido: Actas de presencia, notificación, requerimiento, protesto de títulos valores, sobrevivencia, entrega de cosas y protocolización de documentos privados.
     * 5 ejemplos resueltos: Acta de notificación de revocación de poder; acta notarial de sobrevivencia de pensionado en el extranjero; acta de protesto de pagaré bancario; protocolización de documento privado de reconocimiento de deuda; acta de constatación de daños materiales en arrendamiento.
   - **Unit 7: Matrimonio en Sede Notarial y Capitulaciones Matrimoniales**:
     * Marco: Arts. 21 a 36 y 40 a 70 del Código de Familia; Ley de Notariado.
     * Contenido: Solemnidades del acta prenupcial, examen de capacidad legal, régimen patrimonial (Comunidad Diferida, Separación de Bienes, Participación en las Ganancias), otorgamiento de la escritura matriz matrimonial y expedición de certificaciones al Registro del Estado Familiar.
     * 5 ejemplos resueltos: Matrimonio civil de salvadoreño con extranjera con pasaporte y soltería apostillada; adopción de régimen de separación de bienes en capitulación prenupcial; matrimonio in extremis o en peligro inminente de muerte; comparecencia matrimonial mediante apoderado especial; subsanación de omisión de remisión de certificación notarial de matrimonio a la alcaldía.
   - **Unit 8: Régimen Disciplinario Notarial, Decomiso y Procedimientos de la Sección de Notariado**:
     * Marco: Arts. 21 a 26 y 64 a 70 Ley de Notariado; Jurisprudencia de Corte Plena CSJ.
     * Contenido: Causales de inhabilitación profesional (Arts. 4 y 67 LN), proceso de informativo disciplinario, decomiso forzoso de libro de protocolo, cierre forzoso por fallecimiento o salida del país, y multas administrativas.
     * 5 ejemplos resueltos: Informativo por autorización de escritura a favor de pariente (Art. 9 LN); sanción por entrega extemporánea del protocolo vencido más allá de 30 días; decomiso judicial de protocolo por retención ilícita; rehabilitación notarial tras cumplimiento de suspensión temporal; depósito voluntario de protocolo por viaje superior a un año.
   - **Unit 9: Derecho Notarial Electrónico y Firma Electrónica Certificada**:
     * Marco: Ley de Firma Electrónica (D.L. 1008); Arts. 30 y 32 Ley de Notariado.
     * Contenido: Validez de documentos electrónicos notariales, testimonios en soporte electrónico con FEC, verificación de sellos de tiempo (Time-Stamping) y certificación notarial de concordancia sobre documentos digitales.
     * 5 ejemplos resueltos: Cotejo notarial de documento con firma electrónica certificada emitido por entidad bancaria; expedición de testimonio notarial electrónico para trámite ante el CNR; comparecencia de otorgante con apoderado que acredita personería mediante documento digital validado en línea; rechazo notarial de documento con firma electrónica simple no certificada para actos solemnes; acta de verificación notarial de correspondencia entre mensaje de datos y reproducción impresa.

2. **Compendio de Minutas Notariales Protocolarias Anotadas**:
   - Crear una colección de **5 escrituras matrices completas de alta complejidad**, completamente redactadas con cláusulas de estilo, advertencias registrales/tributarias, notas marginales y razones de saca explicadas paso a paso:
     1. Compraventa Inmobiliaria con Constitución de Hipoteca y Fianza Solidaria.
     2. Constitución de Sociedad Anónima de Capital Variable (S.A. de C.V.) con Aportación Mixta.
     3. Testamento Solemne Abierto de Persona con Discapacidad con Doble Lectura y Firma a Ruego.
     4. Protocolización de Diligencias Notariales de Aceptación de Herencia Definitiva.
     5. Donación Irrevocable de Inmueble con Reserva Expresa de Usufructo Vitalicio y Sucesivo.

---

### ESPECIFICACIÓN D: Módulos Procedimentales Especializados (Administrativo, AML, ANSP)

Para los módulos especializados de 200 preguntas que actualmente carecen de unidades formativas:

1. **Derecho Administrativo (`src/data/derechoAdministrativoData.ts`)**:
   - Incorporar **5 Unidades Temáticas** (>= 500 palabras y 5 casos resueltos por unidad):
     * Unit 1: Principios Fundamentales del Procedimiento Administrativo Común (LPA).
     * Unit 2: Instrucción, Medios de Prueba y Trámite Preceptivo de Audiencia Previa.
     * Unit 3: El Silencio Administrativo: Negativo vs Positivo y Certificación de Acto Presunto.
     * Unit 4: Potestad Sancionadora de la Administración Pública, Caducidad y Garantías Punitivas.
     * Unit 5: Recursos Administrativos Ordinarios (Reconsideración y Apelación) y Control Judicial LJCA.

2. **Cumplimiento Regulatorio y Prevención de Lavado (`src/data/complianceAmlData.ts`)**:
   - Incorporar **4 Unidades Temáticas** (>= 500 palabras y 5 casos resueltos por unidad):
     * Unit 1: Marco Legal Antilavado (LCLDA), Debida Diligencia (CDD/KYC) y Beneficiario Final (UBO).
     * Unit 2: Reporte de Operaciones Sospechosas (ROS), Señales de Alerta y Deber Estricto de Reserva.
     * Unit 3: Extinción de Dominio (LEDAB), Gestión de Riesgo Punitivo y Listas Restrictivas (OFAC/ONU).
     * Unit 4: Contrato de Seguro Mercantil, Pólizas de Fianza y la Regla Proporcional de Infraseguro (Art. 1383 C.Com.).

3. **Ascenso Policial ANSP (`src/data/anspAscensoData.ts`)**:
   - Incorporar **3 Unidades Temáticas** (>= 500 palabras y 5 casos resueltos por unidad):
     * Unit 1: Flagrancia Delictiva, Persecución Material Ininterrumpida y Cadena de Custodia (PrPn).
     * Unit 2: Actas Policiales, Inspección Técnica Ocular y Procedimientos con la FGR.
     * Unit 3: Ley de la Carrera Policial, Régimen Disciplinario y Uso Proporcional de la Fuerza en DDHH.

---

## 5. Verification Method (Método de Verificación Independiente)

Cualquier agente revisor o implementador puede verificar de manera autónoma las conclusiones y el cumplimiento estricto de los invariantes del sistema mediante los siguientes pasos:

### 5.1 Comandos de Ejecución de Pruebas Automatizadas
Ejecutar desde el directorio raíz del proyecto (`c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT`):

1. **Verificación de Módulos Legales y Notariado**:
   ```bash
   npx vitest run tests/legalModules.test.ts tests/notaryExamEnhancements.test.ts
   ```
   *Criterio de Aprobación*: 24 de 24 pruebas pasando al 100%.

2. **Verificación de Seguridad, Invariantes y Módulos Especializados**:
   ```bash
   npx vitest run tests/challengerLegalSecurity.test.ts tests/specializedModules200.test.ts
   ```
   *Criterio de Aprobación*: 33 de 33 pruebas pasando al 100%, certificando 0 colisiones de ID con el banco base de 17,640 preguntas, opciones estructuradas A/B/C/D y 200 reactivos exactos por módulo.

3. **Verificación de Tipos TypeScript**:
   ```bash
   npm run typecheck
   ```
   *Criterio de Aprobación*: 0 errores de tipado en toda la base de código.

### 5.2 Inspección de Archivos y Rutas Clave
Verificar visualmente o programáticamente las siguientes invariantes:
- `src/data/notaryExamData.ts`:
  * Inspeccionar líneas 25 a 5840: `NOTARY_EXAM_QUESTIONS.length === 200`.
  * Inspeccionar líneas 5882 a 6169: `NOTARY_THEMATIC_UNITS.length === 5`.
- Ausencia de Teléfono Privado:
  * Ejecutar búsqueda en el repositorio: no debe existir ninguna coincidencia para la cadena `7943 9901`.
- Presencia de WhatsApp Corporativo:
  * Verificar en `src/App.tsx`, `src/components/Header.tsx`, `src/data/onePageSheetsData.ts` la presencia del WhatsApp oficial `+503 7657 4463`.

### 5.3 Condiciones de Invalidación
Este informe técnico quedará invalidado si:
1. Se modifica o corrompe cualquiera de las 200 preguntas base de Notariado (`not-01` a `not-200`).
2. Se introduce cualquier colisión de identificadores con las 17,640 preguntas en `public/data/`.
3. Cualquier unidad temática generada en la fase de implementación no alcanza el umbral estricto de 500 palabras pedagógicas sustantivas o incluye texto de relleno genérico duplicado.
4. Cualquiera de las pruebas de la suite oficial de vitest falla.

# Handoff Report: Auditoría Técnica y Especificación de Expansión para Módulos Médicos, de Salud, Energía Solar y Técnicos (Round 2)

**Autor**: Explorer 2 (`teamwork_explorer`)  
**Directorio de Trabajo**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_health_tech_r2`  
**Destinatario**: Parent / Orchestrator (`99491d00-2080-42d6-9e30-ba4aeeaac310`)  
**Fecha y Hora**: 2026-10-31T16:40:00Z  
**Estado**: Hard Handoff (Auditoría Técnica y Especificación Completa)

---

## 1. Observation (Observaciones Directas y Evidencia Empírica)

A través de inspección estática del árbol de código, búsquedas con expresiones regulares, análisis sintáctico de AST y ejecución de la suite de pruebas del proyecto, se auditó exhaustivamente el estado actual de todos los módulos de Medicina, Salud, Energía Solar, Carreras Técnicas Vocacionales, Ciencias de Ingeniería y Certificaciones Profesionales en `APP-KUSKAT`.

### 1.1 Módulos Médicos y Salud: Residentado Médico (ENAR El Salvador)
- **Archivos fuente**:
  - `src/data/residentadoMedicoData.ts` (30,717 bytes, 282 líneas)
  - `src/data/residentadoBranchingCases.ts` (45,348 bytes, 497 líneas)
  - `src/components/ResidentadoMedicoView.tsx` (44,911 bytes, 913 líneas)
  - Ruta en aplicación: Pestaña `residentado-medico`, alias URL `medicina`.
- **Interfaces y Modelos**:
  - `ResidentadoQuestion`: `id`, `specialty` ('medicina_interna' | 'cirugia_general' | 'pediatria' | 'ginecologia_obstetricia' | 'salud_publica'), `topic`, `clinicalVignette`, `options`, `correctKey`, `explanation`, `keyTakeaway`, `distractorRationale`, `officialReference`.
  - `BranchingCaseScenario`: `id`, `title`, `specialty`, `patientDescription`, `initialVitals`, `stages: BranchingStage[]`, `debriefSummary`.
- **Cuantificación Real de Contenido**:
  - **Preguntas en viñetas clínicas estándar**: Únicamente **11 preguntas** en todo el banco (`RESIDENTADO_QUESTIONS`):
    - Medicina Interna: 3 preguntas (`enar-mi-001`, `enar-mi-002`, `enar-mi-003`).
    - Cirugía General: 2 preguntas (`enar-cg-001`, `enar-cg-002`).
    - Pediatría: 2 preguntas (`enar-ped-001`, `enar-ped-002`).
    - Ginecología y Obstetricia: 2 preguntas (`enar-go-001`, `enar-go-002`).
    - Salud Pública & Normas MINSAL: 2 preguntas (`enar-sp-001`, `enar-sp-002`).
  - **Casos Secuenciales Ramificados (Branching Scenarios)**: Únicamente **4 casos** (3 etapas cada uno):
    - Caso 1: `branching-case-iam-vd` (Medicina Interna - IAM cara inferior y VD).
    - Caso 2: `branching-case-sepsis-pediatrica` (Pediatría - Choque séptico PALS Hospital Bloom).
    - Caso 3: `branching-case-preeclampsia-hellp` (Gineco-Obstetricia - Código Naranja y Zuspan).
    - Caso 4: `branching-case-trauma-choque-iv` (Cirugía General - Choque grado IV y Control de Daños ATLS).
  - **Especialidades omitidas**: **Medicina Familiar y Comunitaria** no existe en la interfaz (`RESIDENTADO_SPECIALTIES`), a pesar de ser una de las especialidades troncales prioritarias del Sistema Nacional Integrado de Salud de El Salvador.
  - **Secciones teóricas explicativas**: **0 palabras de contenido teórico estructurado**. No existen lecciones, compendios ni guías temáticas en el módulo; la vista pasa directamente a las preguntas o a los casos.
  - **Ejemplos clínicos resueltos paso a paso**: 0 guías de resolución clínica paso a paso independientes de la interacción del examen.

### 1.2 Módulo de Energía Solar Fotovoltaica & Normativa Eléctrica SIGET
- **Archivos fuente**:
  - `src/data/sigetSolarData.ts` (33,128 bytes, 524 líneas)
  - `src/components/SigetSolarView.tsx` (38,988 bytes, 771 líneas)
  - Ruta en aplicación: Pestaña `siget-solar`.
- **Interfaces y Modelos**:
  - `SigetSolarQuestion`: `id`, `category` ('normativa-gd' | 'nec-690' | 'electricistas-siget' | 'seguridad-operativa'), `categoryLabel`, `area`, `statement`, `options`, `correctAnswer`, `explanation`, `technicalBasis`, `distractorRationale`.
  - `InterconnectionStep`: `id`, `stage`, `title`, `entity`, `description`, `requirements`, `normativeRef`.
- **Cuantificación Real de Contenido**:
  - **Banco de Preguntas**: Únicamente **15 preguntas** (`siget-01` a `siget-15`):
    - `normativa-gd`: 4 reactivos.
    - `nec-690`: 4 reactivos.
    - `electricistas-siget`: 4 reactivos.
    - `seguridad-operativa`: 3 reactivos.
  - **Checklist de Interconexión**: 5 etapas breves (`SOLAR_INTERCONNECTION_CHECKLIST`, ~400 palabras en total).
  - **Categorías de Electricistas SIGET**: 4 tarjetas resumen (Cuarta a Primera categoría, ~350 palabras).
  - **Síntesis del Código NEC Art. 690**: 3 cajas breves (~80 palabras en total).
  - **Total de palabras explicativas en todo el módulo**: **~830 palabras**.
  - **Cálculos y Ejemplos Prácticos Resueltos Paso a Paso**: **CERO (0)**. No existe ningún ejemplo de cálculo de dimensionamiento de generador FV, cálculo de Horas Solares Pico (HSP), dimensionamiento de ventana MPPT, cálculo de corriente continua según NEC 690.8 ($1.56 \times I_{sc}$), cálculo de calibre de conductores por caída de tensión ($\le 2\%$ DC, $\le 1\%$ AC), ni dimensionamiento de banco de baterías o inversores aislados.

### 1.3 Módulo de Cursos Técnicos Vocacionales Especializados INCAF (400 Horas)
- **Archivos fuente**:
  - `src/data/technicalCoursesData.ts` (362,944 bytes, 4,793 líneas)
  - `src/components/TechnicalCoursesView.tsx` (67,076 bytes, 1,386 líneas)
  - Ruta en aplicación: Pestaña `technical-courses`, alias URL `cursos-tecnicos`.
- **Interfaces y Modelos**:
  - `TechnicalCourse`, `TechnicalCourseModule`, `WorkshopFormula`, `LegalCitation`, `SafetyProcedure`, `CourseQuizQuestion`.
- **Cuantificación Real de Contenido**:
  - Catálogo de 10 Especialidades: `electricidad`, `electronica`, `cocina-saludable`, `soldadura`, `microsoldadura`, `reparacion-dispositivos`, `agricultura-pequena`, `logistica-metrologia`, `mecanica-motos`, `fontaneria-hidraulica`.
  - Cada curso consta de 4 módulos (40 módulos en total).
  - **Banco de Autoevaluación**: Cada módulo contiene exactamente 3 preguntas (`quiz`), totalizando **12 preguntas por curso y 120 preguntas en todo el catálogo**.
  - **Fórmulas de Taller**: 1 fórmula por módulo (4 fórmulas por curso, 40 fórmulas en total), con un ejemplo aritmético de una sola línea.
  - **Desglose de Temas (`topics`)**: Cada módulo define un arreglo de 3 temas en formato `{ title: string, hours: number }` (verbigracia `topics: [{ title: '...', hours: 3 }]`).
  - **Contenido Teórico Sustantivo en Temas**: **0 palabras**. Los temas carecen por completo de texto explicativo o lecciones desarrolladas; la vista `TechnicalCoursesView.tsx` (líneas 928-947) solo itera sobre el título y las horas asignadas, sin desplegar desarrollo conceptual pedagógico.

### 1.4 Otros Módulos de Salud, Ciencias e Ingeniería en APP-KUSKAT
1. **Atención Primaria en Salud MINSAL & Farmacovigilancia DNM/SRS (`salud-primaria`)**:
   - `src/data/saludPrimariaData.ts` (405,661 bytes, 4,573 líneas) / `src/components/SaludPrimariaView.tsx`.
   - Contiene **201 preguntas** de opción múltiple bien estructuradas y el algoritmo de Dengue (Grupos A, B, C).
   - Vacío detectado: Carece de casos clínicos secuenciales de resolución paso a paso (0 casos desarrollados) y no cuenta con módulos explicativos profundos para el manejo de HTA/DM2 (ALAD), IRAS o Farmacovigilancia.
2. **Juntas de Vigilancia del CSSP (`cssp-health`)**:
   - `src/data/csspHealthData.ts` (421,011 bytes, 4,283 líneas) / `src/components/CsspHealthView.tsx`.
   - Contiene exactamente **200 preguntas** (40 reactivos por junta: Médica, Odontológica, Enfermería, Farmacéutica, Psicología).
   - Vacío detectado: No contiene guías explicativas de procesos disciplinarios ni análisis de casos deontológicos paso a paso.
3. **Métodos Cuantitativos y Ciencias de Ingeniería (`ingenieria-ciencias`)**:
   - `src/data/ingenieriaCienciasData.ts` (338,452 bytes, 5,494 líneas) / `src/components/IngenieriaCienciasView.tsx`.
   - Contiene exactamente **200 problemas analíticos** con derivaciones KaTeX paso a paso (`formalSolution` y `stepByStepDerivation`) y 6 fichas de fórmulas.
   - Vacío detectado: Funciona como banco de reactivos pero carece de capítulos teóricos de lección conceptual (>= 500 palabras por tema).
4. **Simulador de Examen de Conducir VMT (`driver-license`)**:
   - `src/components/DriverLicenseView.tsx` (44,326 bytes, 842 líneas).
   - Contiene únicamente **9 preguntas** (5 teóricas `dt-01` a `dt-05` y 4 psicológicas `dp-01` a `dp-04`) y 9 tarjetas de señales viales.
   - Vacío detectado: Volumen de preguntas críticamente insuficiente para la preparación del examen oficial VMT/SERTRACEN.

### 1.5 Verificación de Invariantes y Estado del Entorno
- `npm run validate:bank`: PASÓ exitosamente certificando **17,640 preguntas base intactas** (UES=7500, ANSP=250, ASD=2190, AVANZO=3000, ENA=1400, ESCALAFON=3300).
- `notaryExamData.ts`: Exactamente **201 reactivos** de Notariado conservados.
- Búsqueda de teléfono privado `7943 9901`: **0 ocurrencias** en `src/` y `public/`.
- Teléfono oficial WhatsApp `+503 7657 4463`: Preservado en 16 archivos del repositorio.
- `npm run typecheck`: **0 errores** TypeScript.
- `npm test`: **37 archivos de prueba pasados al 100% (618 tests en total)**.
- `npm run validate:i18n`: 7 idiomas válidos con 100% de cobertura en UI y banco de traducciones intacto.
- `npm run build`: Compilación limpia en 22.42 segundos sin errores bloqueantes.

---

## 2. Logic Chain (Cadena de Razonamiento Lógico)

1. **Premisa 1 (Requisito de Usuario y Criterio de Aceptación)**:  
   La solicitud oficial del usuario exige:
   > "Identificar y reforzar integralmente todas las áreas o materias de la plataforma educativa APP-KUSKAT donde se detecte información insuficiente... asegurando que cuando las lecciones estén organizadas por unidades o temas cumplan con la regla de al menos 500 palabras de contenido sustantivo específico sin recurrir a texto de relleno ni plantillas genéricas duplicadas, y al menos 5 ejemplos prácticos resueltos paso a paso y distintos entre sí, con preguntas de práctica y evaluación interactiva contextualizadas".

2. **Premisa 2 (Hallazgo en Módulos Médicos y Residentado)**:  
   - `src/data/residentadoMedicoData.ts` posee únicamente 11 preguntas (promedio de 2.2 preguntas por especialidad) y 0 palabras de teoría.
   - `src/data/residentadoBranchingCases.ts` solo posee 4 casos (Medicina Interna, Pediatría, Gineco-Obstetricia y Cirugía), omitiendo por completo a **Medicina Familiar y Comunitaria**.
   - Por ende, un aspirante al ENAR no dispone de marco teórico explicativo (0 palabras vs meta de >= 500 palabras por tema) ni de los 5 casos resueltos por especialidad para contrastar su criterio diagnóstico.

3. **Premisa 3 (Hallazgo en Técnico Solar & Normativa SIGET)**:  
   - `src/data/sigetSolarData.ts` posee únicamente 15 preguntas y ~830 palabras en toda la vista.
   - No existe un solo cálculo de ingeniería resuelto paso a paso (0 vs meta de >= 5 ejemplos resueltos por tema).
   - Los temas cardinales exigidos para un electricista/instalador solar certificado (HSP en El Salvador, dimensionamiento de strings y MPPT, corriente continua $1.56 \times I_{sc}$, caída de tensión $\Delta V$, protecciones anti-isla IEEE 1547 y dimensionamiento de baterías BESS) carecen de desarrollo teórico y de simulador de cálculo.

4. **Premisa 4 (Hallazgo en Cursos Técnicos Vocacionales INCAF)**:  
   - En `src/data/technicalCoursesData.ts`, los 40 módulos de los 10 cursos tienen la propiedad `topics` vacía en cuanto a contenido (solo títulos como `{ title: '...', hours: 3 }`).
   - Los estudiantes que ingresan a la vista observan un título y un número de horas, pero no tienen texto formativo que estudiar (0 palabras de desarrollo vs >= 500 palabras).
   - Cada módulo tiene solo 1 fórmula con un ejemplo de 1 línea y 3 preguntas de autoevaluación.

5. **Deducción y Conclusión Lógica**:  
   Para dar cumplimiento estricto y total al Follow-up del usuario sin alterar los invariantes del sistema, es necesario diseñar una arquitectura de datos y especificación técnica que inyecte:
   - En Residentado Médico: Guías clínicas teóricas sustantivas (>= 500 palabras por tema), adición de la especialidad Medicina Familiar y Comunitaria, expansión a >= 5 casos clínicos secuenciales resueltos paso a paso por especialidad (mínimo 25 casos en total), y ampliación del banco de viñetas a >= 50 reactivos con fundamentación de distractores.
   - En Técnico Solar SIGET: Creación de 8 unidades temáticas de ingeniería solar fotovoltaica (cada una con >= 500 palabras sustantivas basadas en normativas SIGET/CNE/NEC), >= 5 ejercicios de cálculo de ingeniería resueltos paso a paso por unidad (40 ejemplos resueltos en total), y ampliación del banco a >= 50 preguntas técnicas contextualizadas.
   - En Cursos Técnicos INCAF: Desarrollo de lecciones sustantivas (>= 500 palabras por módulo/tema), dotación de 5 ejemplos resueltos de procedimientos/cálculos de taller por módulo, y ampliación de preguntas interactivas.

---

## 3. Caveats (Límites de la Investigación y Supuestos)

1. **Modo Solo Lectura**: Como Explorer 2, no se modificó ningún archivo de código fuente del proyecto (`src/` o `tests/`). Únicamente se escribieron archivos de bitácora, memoria de trabajo y reportes en `.agents/teamwork/explorer_survey_health_tech_r2/`.
2. **División del Trabajo con Pares**:  
   - Este reporte se enfoca estrictamente en **Medicina, Salud, Energía Solar, Cursos Técnicos Vocacionales e Ingeniería**.
   - Los módulos de **Humanidades, Derecho (Notariado, LPA, Constitucional, Litigación Oral, Cumplimiento Financiero) y Refuerzo MINED ESMATE** son objeto de la auditoría de Explorer 1.
   - Los módulos de **Escuela de Idiomas (Náhuat, Lenca, Kakawira, Inglés, Árabe, Mandarín, Alemán) y Admisión Preuniversitaria (UES, Avanzo, ENA, Escalafón, ANSP)** son auditados por Explorer 3.
3. **Invarianza del Banco Base**: Ninguna de las expansiones propuestas para los módulos especializados debe tocar las 17,640 preguntas base de `public/data/` ni las 200 preguntas de Notariado (`not-01` a `not-200`). Toda nueva estructura se alojará en `src/data/` debidamente tipada en TypeScript.

---

## 4. Conclusion (Especificación Concreta de Expansión por Módulo)

A continuación se detalla la especificación exacta de contenido, estructuras de datos y requisitos pedagógicos para la fase de implementación:

### 4.1 Especificación de Expansión: Residentado Médico ENAR (`src/data/residentadoMedicoData.ts` y `residentadoBranchingCases.ts`)

#### A. Inclusión de Medicina Familiar y Estructuración de Unidades Teóricas
Actualizar `RESIDENTADO_SPECIALTIES` para incluir formalmente a Medicina Familiar y dotar a cada especialidad de guías clínicas de al menos 500 palabras sustantivas por tema troncal:
```typescript
export const RESIDENTADO_SPECIALTIES = [
  { id: 'all', name: 'Todas las Especialidades', icon: 'Stethoscope' },
  { id: 'medicina_interna', name: 'Medicina Interna', icon: 'Activity' },
  { id: 'cirugia_general', name: 'Cirugía General', icon: 'Scissors' },
  { id: 'pediatria', name: 'Pediatría', icon: 'Baby' },
  { id: 'ginecologia_obstetricia', name: 'Ginecología y Obstetricia', icon: 'Heart' },
  { id: 'medicina_familiar', name: 'Medicina Familiar y Atención Primaria', icon: 'Users' },
  { id: 'salud_publica', name: 'Salud Pública & Normas MINSAL', icon: 'ShieldCheck' },
];
```

#### B. Mapeo Curricular de Unidades Teóricas (>= 500 palabras sustantivas cada una)
1. **Medicina Interna**:
   - *Tema 1: Síndromes Coronarios Agudos e IAM de Cara Inferior/VD* (Fisiopatología, ECG 12 derivaciones + derechas, reperfusión, contraindicación absoluta de nitratos/diuréticos, protocolo Código Infarto MINSAL).
   - *Tema 2: Crisis Hiperglucémicas (CAD vs EHH)* (Osmolaridad efectiva, brecha aniónica, reposición escalonada de potasio antes de insulina, protocolo de fluidoterapia según ADA y MINSAL).
   - *Tema 3: Dengue en Fase Crítica y Choque Hipovolémico* (Fisiopatología de la fuga plasmática, criterios de Grupo B2 vs C, monitoreo de hematocrito y presión de pulso convergente).
2. **Cirugía General**:
   - *Tema 1: Abdomen Agudo y Apendicitis Aguda* (Cronología de Murphy, Escala de Alvarado, correlación histopatológica, profilaxis antibiótica peroperatoria y abordajes quirúrgicos).
   - *Tema 2: Politraumatizado y Control de Daños (ATLS 10ª Edición)* (Tríada de la Muerte, reanimación hemostática 1:1:1, hipotensión permisiva, laparotomía abreviada con empaquetamiento perihepático y desempaquetamiento Second-Look).
   - *Tema 3: Obstrucción Intestinal Mecánica y Hernias Estranguladas* (Niveles hidroaéreos en escalera, signo de grano de café en vólvulo sigmoideo, manejo hidroelectrolítico y descompresión con sonda Levin).
3. **Pediatría**:
   - *Tema 1: Enfermedad Diarreica Aguda y Planes de Rehidratación MINSAL/AIEPI* (Diferenciación clínica entre Plan A, B y C; osmolaridad reducida de SRO, proscripción absoluta de loperamida en niños).
   - *Tema 2: Choque Séptico Pediátrico (Protocolo PALS / Hospital Bloom)* (Reconocimiento del choque frío vs caliente, bolos de cristaloides a 20 mL/kg, uso temprano de epinefrina en choque frío, cobertura antibiótica en la hora de oro).
   - *Tema 3: Dificultad Respiratoria en el Lactante (Bronquiolitis y Neumonía)* (Escala de Wood-Downes modificada por Ferres, rol del VSR, medidas de soporte no farmacológico y criterios de oxigenoterapia).
4. **Ginecología y Obstetricia**:
   - *Tema 1: Trastornos Hipertensivos del Embarazo y Código Naranja* (Preeclampsia severa, esquema de Zuspan con sulfato de magnesio al 20%, monitoreo de toxicidad con diuresis/reflejos/FR, uso de gluconato de calcio, y metas tensionales con labetalol/hidralazina).
   - *Tema 2: Hemorragia Posparto y Código Rojo Obstétrico* (Regla de las 4T: Tono, Trauma, Tejido, Trombina; masaje uterino bimanual, oxitocina, metilergonovina, misoprostol y balón de taponamiento intrauterino Bakri).
   - *Tema 3: Síndrome HELLP y Ruptura Hepática* (Microangiopatía trombótica, plaquetopenia < 100,000, elevación de transaminasas > 2x, esquistocitos, y necesidad de interrupción inmediata del embarazo).
5. **Medicina Familiar y Atención Primaria**:
   - *Tema 1: Abordaje del Paciente Crónico Complejo con Multimorbilidad (HTA + DM2 + ERC)* (Metas integrales según ALAD/KDIGO, ajuste de dosis de antidiabéticos orales según TFG, uso de iSGLT2 y agonistas GLP-1 para nefroprotección y cardioprotección).
   - *Tema 2: Tamizaje Preventivo y Detección Precoz Oncológica* (Papanicolaou y prueba de VPH según Guía MINSAL, mamografía bilateral a partir de los 40 años, sangre oculta en heces / colonoscopia, y tamizaje prostático individualizado).
   - *Tema 3: Salud Mental Comunitaria y Detección de Violencia Familiar* (Criterios diagnósticos DSM-5 de depresión mayor y ansiedad generalizada en el primer nivel, escala de Hamilton, uso de ISRS, ruta de atención de violencia de género según Ley LEIV).
6. **Salud Pública & Normativas MINSAL**:
   - *Tema 1: Esquema Oficial de Inmunizaciones de El Salvador (PNI)* (Vacunas del recién nacido BCG/HB, esquema a los 2, 4 y 6 meses con Pentavalente/IPV/Rotavirus/Neumococo, refuerzos y vacunas de la embarazada).
   - *Tema 2: Nefropatía Mesoamericana / ERCnT en Comunidades Costeras* (Histopatología tubulointersticial crónica, diferencias con nefropatía diabética, biomarcadores tempranos y medidas preventivas de estrés térmico laboral).

#### C. Banco de Casos Secuenciales Ramificados (Branching Scenarios)
Expandir `BRANCHING_CLINICAL_CASES` a un mínimo de **1 caso por cada especialidad** (5 etapas cada uno) y dotar a cada especialidad de al menos **5 casos clínicos resueltos paso a paso en formato de estudio guiado**:
1. *Caso Ramificado 1*: IAM de cara inferior con choque y extensión a VD (Medicina Interna).
2. *Caso Ramificado 2*: Choque séptico pediátrico refractario a fluidos (Pediatría).
3. *Caso Ramificado 3*: Código Naranja, Preeclampsia Severa y Síndrome HELLP (Ginecología y Obstetricia).
4. *Caso Ramificado 4*: Politraumatizado, hemoperitoneo masivo y control de daños (Cirugía General).
5. *Caso Ramificado 5 (NUEVO)*: Paciente diabético hipertenso con pie diabético infectado Grado 3 Wagner, descompensación osmolar y enfermedad renal en UCSF (Medicina Familiar).

---

### 4.2 Especificación de Expansión: Técnico Solar & Normativa SIGET (`src/data/sigetSolarData.ts`)

#### A. Marco Temático de Unidades de Ingeniería Solar (>= 500 palabras cada una)
1. **Unidad 1: Recurso Solar, Radiación y Horas Solares Pico (HSP) en El Salvador**:
   - Mapeo de irradiancia del Atlas Solar Nacional (CNE/MARN).
   - Valores medios en El Salvador: 5.0 a 5.8 kWh/m²/día según departamento (San Miguel, Santa Ana, La Libertad).
   - Geometría solar a latitud 13.7° N: Inclinación óptima de módulos ($15^\circ - 20^\circ$ orientados estrictamente al Sur geográfico con azimut $0^\circ$).
   - Pérdidas por suciedad (soiling), temperatura ambiente salvadoreña ($30^\circ - 38^\circ\text{C}$) y coeficientes de temperatura Pmax ($-0.35\%/^\circ\text{C}$).
2. **Unidad 2: Dimensionamiento de Generadores Fotovoltaicos en DC y Relación DC/AC**:
   - Metodología de cálculo de potencia pico requerida:
     $$P_{\text{dc}} = \frac{E_{\text{consumo\_diario\_kWh}}}{\text{HSP} \times \text{PR}}$$
     donde $\text{PR} = 0.75 - 0.80$ es el Performance Ratio.
   - Relación de dimensionamiento inversor/generador (Inverter Loading Ratio - ILR): valores recomendados entre 1.15 y 1.30 para optimizar el factor de planta sin incurrir en recorte excesivo (clipping).
3. **Unidad 3: Configuración de Cadenas (Strings) y Ventana MPPT**:
   - Cálculo de tensión máxima del sistema en circuito abierto corregida por temperatura mínima histórica ($10^\circ\text{C}$ en valles, $4^\circ\text{C}$ en zonas altas) según NEC 690.7:
     $$V_{oc\_max} = V_{oc\_STC} \times [1 + \beta_{Voc} \times (T_{\min} - 25)]$$
   - Verificación de no exceder los 600 V en sistemas residenciales o 1000/1500 V en comerciales/industriales.
   - Verificación de tensión mínima MPPT a temperatura máxima de operación de celda ($T_{cell} \approx 65^\circ\text{C}$):
     $$V_{mp\_min} = V_{mp\_STC} \times [1 + \beta_{Vmp} \times (T_{\max\_cell} - 25)] \ge V_{mppt\_min\_inversor}$$
4. **Unidad 4: Dimensionamiento de Conductores y Protecciones DC según NEC 690.8**:
   - Corriente máxima de circuito:
     $$I_{\max} = 1.25 \times I_{sc}$$
   - Capacidad de corriente continua del conductor y fusible de protección:
     $$I_n \ge 1.25 \times I_{\max} = 1.25 \times 1.25 \times I_{sc} = 1.56 \times I_{sc}$$
   - Selección de fusibles especiales fotovoltaicos gPV con tensión nominal de 1000 Vdc.
   - Factores de corrección de ampacidad por temperatura ambiente (Tabla 310.15(B)(1) o 310.16) y por agrupamiento en canalizaciones expuestas a radiación solar sobre techo.
5. **Unidad 5: Cálculo de Caída de Tensión en DC y AC**:
   - Criterio de diseño: caída máxima del 2% en el circuito de corriente continua (desde paneles a inversor) y 1% en el circuito de corriente alterna (desde inversor a tablero principal de distribución):
     $$\Delta V_{\text{DC}} = \frac{2 \cdot L \cdot I \cdot \rho}{S} \quad \text{o} \quad \% \Delta V = \frac{2 \cdot L \cdot I \cdot R_{\text{conductor}}}{V_{\text{nom}}} \times 100$$
   - Uso de la Tabla 8 del Capítulo 9 del NEC para resistencia óhmica en ohmios por kilómetro para conductores de cobre estañado PV Wire de calibre 12, 10, 8 y 6 AWG.
6. **Unidad 6: Dimensionamiento de Baterías y Almacenamiento (BESS / Off-Grid)**:
   - Cálculo de capacidad requerida en Amperios-hora (Ah):
     $$C_{\text{Ah}} = \frac{E_{\text{consumo\_diario\_Wh}} \times N_{\text{días\_autonomía}}}{V_{\text{banco}} \times \text{DoD} \times \eta_{\text{inversor}}}$$
   - Comparación técnica entre químicas: Litio Ferro-Fosfato (LiFePO4) con profundidad de descarga (DoD) de 80-90% y más de 6,000 ciclos vs Plomo-Ácido AGM/Gel con DoD limitado al 50% y 1,200 ciclos.
   - Balance de carga, corrientes de carga/descarga seguras (C-rate 0.5C para litio vs 0.1C-0.2C para plomo).
7. **Unidad 7: Seguridad Operativa, Rapid Shutdown (NEC 690.12), AFCI y Puesta a Tierra (NEC 250 & 690.47)**:
   - Desconexión rápida de emergencia en techos: reducción de tensión a $\le 30\text{ V}$ dentro de los 30 segundos posteriores a la activación fuera del límite de 1 pie (30 cm) del arreglo fotovoltaico.
   - Interruptores de falla de arco DC (AFCI según estándar UL 1699B) para extinguir arcos serie y paralelo generados por conectores MC4 mal crimpados.
   - Sistema de Puesta a Tierra (SPT): electrodo de cobre Copperweld de $5/8'' \times 2.4\text{ m}$, equipotencialidad de rieles de aluminio con grapas WEEB y conductor de puesta a tierra de equipos (EGC) de cobre desnudo; resistencia a tierra inferior a $10\,\Omega$ recomendada.
8. **Unidad 8: Normativa NTCOGD (Acuerdo SIGET 343-E-2016), Medición Neta y Trámites con AES y DELSUR**:
   - Requisitos técnicos de interconexión para Usuarios Generadores Distribuidos (UGD) en baja tensión.
   - Parámetros obligatorios de protección anti-isla bajo IEEE 1547 / UL 1741: desconexión activa en tiempo inferior o igual a 2.0 segundos ante la pérdida de tensión de la red distribuidora; retardo mínimo de reconexión de 5 minutos (300 segundos).
   - Medidor bidireccional digital de 4 cuadrantes, esquema de facturación con compensación neta mensual e inspección en sitio por cuadrillas de AES CAESS / DELSUR.

#### B. Especificación de 5 Ejemplos Prácticos de Cálculo de Ingeniería Resueltos Paso a Paso
1. *Ejemplo 1 (Dimensionamiento Completo)*: Vivienda en San Salvador con consumo de 450 kWh/mes. Cálculo de potencia DC requerida en kWp usando HSP = 5.2 h y PR = 0.78, determinando el número exacto de paneles de 550 Wp.
2. *Ejemplo 2 (Cálculo de String y MPPT)*: Inversor de 5 kW con ventana MPPT de 120 V a 500 V y $V_{\max} = 550\text{ V}$. Paneles con $V_{oc} = 49.8\text{ V}$ ($\beta_{Voc} = -0.28\%/^\circ\text{C}$) y $V_{mp} = 41.5\text{ V}$. Verificación rigurosa del número mínimo y máximo de paneles en serie a temperaturas extremas de $10^\circ\text{C}$ y $65^\circ\text{C}$.
3. *Ejemplo 3 (Ampacidad y Fusibles NEC 690.8)*: Dos strings en paralelo con $I_{sc} = 13.8\text{ A}$. Cálculo de corriente máxima $I_{\max} = 1.25 \times 13.8 = 17.25\text{ A}$, dimensionamiento de fusible gPV $I_n \ge 1.56 \times 13.8 = 21.53\text{ A}$ (selección de fusible comercial de 25 A a 1000 Vdc) y calibre de conductor AWG.
4. *Ejemplo 4 (Caída de Tensión en DC y AC)*: Circuito DC de 35 metros de longitud que conduce 18 A a 380 Vdc. Comparación de caída porcentual $\Delta V\%$ utilizando cable solar de 10 AWG vs 8 AWG frente al límite normativo del 2%.
5. *Ejemplo 5 (Banco de Baterías LiFePO4 Off-Grid)*: Carga crítica aislada en zona rural de Chalatenango que consume 3,600 Wh/día a 48 Vdc, con 2 días de autonomía y DoD del 80% en baterías de litio LiFePO4. Cálculo de capacidad requerida en Ah y número de módulos en paralelo de 48V / 100Ah.

#### C. Expansión del Banco de Reactivos
Ampliar `SIGET_SOLAR_QUESTIONS` de 15 a **al menos 50 preguntas contextualizadas** con justificaciones pedagógicas detalladas en todas las opciones (A, B, C, D) y fundamentación en artículos exactos de la NTCOGD y el Código NEC 690.

---

### 4.3 Especificación de Expansión: Cursos Técnicos Vocacionales INCAF 400 Horas (`src/data/technicalCoursesData.ts`)

Para cada uno de los 10 cursos técnicos vocacionales, en sus 4 módulos (40 módulos en total):
1. **Desarrollo Teórico Sustantivo (>= 500 palabras por módulo)**:
   - Incorporar en cada módulo un campo de desarrollo conceptual y pedagógico profundo (`moduleTheory` o expansión en `topics` con narrativa explicativa real).
   - Cobertura de principios físicos y mecánicos, diagramas esquemáticos, diagnóstico de fallas, procedimientos estandarizados de taller y normativas MTPS (D.L. 254 / D.E. 86) e INCAF (D.L. 896).
2. **Dotación de 5 Ejemplos Prácticos Resueltos Paso a Paso por Módulo**:
   - Actualmente cada módulo cuenta únicamente con 1 fórmula y un ejemplo de 1 renglón.
   - Se debe dotar a cada módulo de **5 ejemplos resueltos paso a paso** con enunciado del problema, datos iniciales, fórmulas aplicadas, desarrollo algebraico/procedimental paso a paso y aplicación práctica en taller. (Total: 5 ejemplos x 4 módulos x 10 cursos = 200 ejemplos técnicos resueltos).
3. **Expansión de la Autoevaluación**:
   - Ampliar el número de reactivos en cada módulo de 3 a un mínimo de 5-10 preguntas interactivas con explicaciones completas en distractores.

---

### 4.4 Resumen Cuantitativo de Metas de Expansión

| Módulo / Especialidad | Preguntas Actuales | Preguntas Objetivo | Ejemplos Resueltos Actuales | Ejemplos Resueltos Objetivo | Palabras Teóricas Actuales | Palabras Teóricas Objetivo |
|---|---|---|---|---|---|---|
| **Residentado Médico (ENAR)** | 11 | >= 50 | 4 casos ramificados | >= 25 casos (5 por especialidad) + 5 ramificados | 0 | >= 3,000 (>= 500 por especialidad) |
| **Técnico Solar & SIGET** | 15 | >= 50 | 0 | >= 40 (5 por unidad temática) | ~830 | >= 4,000 (>= 500 en 8 unidades) |
| **Cursos Técnicos INCAF (10 Cursos)** | 120 (12/curso) | >= 200 (20/curso) | 40 (1 renglón c/u) | 200 (5 paso a paso por módulo) | ~0 en temario | >= 20,000 (>= 500 por módulo en 40 mód.) |
| **Atención Primaria MINSAL** | 201 | 201 (conservar) | 0 | >= 10 casos clínicos guiados | Algoritmo breve | >= 2,500 en guías clínicas |
| **Licencia de Conducir VMT** | 9 | >= 50 | 0 | >= 10 análisis de situaciones viales | Breve | >= 1,500 en reglas de tránsito |

---

## 5. Verification Method (Método de Verificación Independiente)

El equipo de implementación y el agente de pruebas podrán verificar de forma unívoca y programática el cumplimiento de esta especificación ejecutando los siguientes comandos y verificaciones:

1. **Verificación de Tipos TypeScript**:
   ```bash
   npm run typecheck
   ```
   *Criterio de éxito*: 0 errores de compilación (`tsc --noEmit`).

2. **Verificación de Banco Base e Invariantes**:
   ```bash
   npm run validate:bank
   ```
   *Criterio de éxito*: Salida esperada exacta:  
   `Preguntas válidas: UES=7500  ANSP=250  ASD=2190  AVANZO=3000  ENA=1400  ESCALAFON=3300  total=17640`. Errores = 0.

3. **Verificación de Ausencia de Teléfono Privado y Presencia de WhatsApp Oficial**:
   ```bash
   node -e "
   const fs = require('fs');
   const { execSync } = require('child_process');
   const grepPhone = execSync('git grep \"7943 9901\" src/ public/ || true').toString();
   if (grepPhone.trim().length > 0) throw new Error('VIOLACIÓN: Teléfono privado detectado!');
   console.log('✔ Invariante de teléfono privado cumplido: 0 ocurrencias.');
   "
   ```

4. **Suite Completa de Pruebas Automatizadas**:
   ```bash
   npm test
   ```
   *Criterio de éxito*: 100% de los archivos de prueba pasando sin errores (mínimo 37 archivos de prueba, >618 tests).

5. **Prueba de Verificación de Contenido Específico (Nueva Suite / Script)**:
   Se incorporará en `tests/medicalModules.test.ts` y se creará `tests/solarTechnicalModules.test.ts` para validar programáticamente:
   - Que `RESIDENTADO_QUESTIONS` cuente con al menos 50 preguntas y cubra Medicina Familiar.
   - Que cada caso secuencial y caso guiado cumpla con la estructura clínica y referencias normativas del MINSAL.
   - Que `SIGET_SOLAR_QUESTIONS` cuente con al menos 50 reactivos y cada una de las 8 unidades de ingeniería solar posea $\ge 500$ palabras sustantivas y $\ge 5$ ejercicios de cálculo resueltos.
   - Que los 40 módulos de `technicalCoursesData.ts` contengan lecciones de $\ge 500$ palabras y 5 ejemplos de taller.

6. **Compilación de Producción**:
   ```bash
   npm run build
   ```
   *Criterio de éxito*: Vite genera los assets en `dist/` en $< 35$ segundos con código de salida 0.

7. **Validación de Cobertura Multilingüe**:
   ```bash
   npm run validate:i18n
   ```
   *Criterio de éxito*: 100% de cobertura en UI para las 7 lenguas.

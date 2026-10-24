# Original User Request

## 2026-10-23T14:50:40Z

Profundización exhaustiva y densificación académica de todos los módulos de alta especialización técnica en KUSKAT para erradicar muestras superficiales o reducidas, elevando los bancos y simuladores al más alto rigor normativo, jurisprudencial, médico y científico de El Salvador.

Working directory: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT
Integrity mode: development

## Requirements

### R1. Densificación y Enriquecimiento de Módulos Especializados
Llevar los módulos de estudio técnico a su capacidad formativa completa:
1. **Juntas de Vigilancia del CSSP (`csspHealthData.ts`):**
   - Expandir de 5 a 25 reactivos de alta complejidad (exactamente 5 por cada Junta: JVPM Medicina, JVPO Odontología, JVPE Enfermería, JVPQF Química y Farmacia, JVPPS Psicología).
   - Incluir casos de bioética, consentimiento informado, farmacovigilancia, Buenas Prácticas de Dispensación y deber legal de denuncia (Ley Crecer Juntos Art. 16).
2. **Examen de Suficiencia Notarial CSJ (`NotaryExamView.tsx` / `notaryExamData.ts`):**
   - Expandir de 7 a 20 reactivos exhaustivos.
   - Incluir solemnidades de testamentos abiertos y cerrados (Arts. 1009-1015 C.C.), protocolización de resoluciones judiciales, otorgamiento sin DUI por testigos de conocimiento (Art. 32 LN), diligencias de jurisdicción voluntaria (LENJVOD: aceptación de herencia, remedición), poderes con cláusula especial (Art. 69 CPCM), constitución de sociedades mercantiles y precedentes de la Sala de lo Civil y Corte Plena sobre nulidades absolutas.
3. **Casoteca Constitucional CSJ (`constitucionalJurisprudenciaData.ts`):**
   - Expandir de 4 a 10 sentencias paradigmáticas de la Sala de lo Constitucional.
   - Incorporar precedentes sobre reserva de ley tributaria y punitiva (Art. 86 Cn.), Hábeas Corpus contra detención arbitraria y condiciones penitenciarias, amparo contra desabastecimiento de medicamentos (Art. 65 Cn.), derecho de acceso a la información pública (LAIP), e inconstitucionalidad de decretos ejecutivos sin habilitación legislativa.
4. **Casos Clínicos Ramificados de Residentado ENAR (`residentadoBranchingCases.ts`):**
   - Completar las cuatro grandes ramas de la medicina incorporando los 2 casos faltantes:
     * *Caso 3 (Gineco-Obstetricia):* Código Naranja — Preeclampsia Severa y Eclampsia Inminente (Esquema de Zuspan intravenoso con sulfato de magnesio al 20%, 4g carga en 15-20 min, infusión 1-2 g/h; vigilancia de reflejos rotulianos, FR >= 12 rpm y diuresis > 30 mL/h; antídoto gluconato de calcio al 10%; metas tensionales con labetalol o hidralazina IV; interrupción del embarazo).
     * *Caso 4 (Cirugía General y Trauma):* Politraumatizado con Choque Hemorrágico Grado IV (ATLS 10ª ed., protocolo de transfusión masiva 1:1:1 de glóbulos rojos, plasma fresco congelado y plaquetas, ácido tranexámico 1g IV en las primeras 3 horas, y laparotomía de control de daños con empaquetamiento abdominal vs hemostasia definitiva).
5. **Ascenso Policial ANSP (`anspAscensoData.ts`):**
   - Expandir de 7 a 18 reactivos completos (6 por cada escalafón: Cabo, Sargento, Oficiales).
   - Incluir procedimientos ITOP, flagrancia material, cadena de custodia, dirección funcional con FGR, régimen disciplinario de la Ley de la Carrera Policial y estándares ONU de uso de la fuerza.
6. **Cumplimiento AML & Seguros SSF (`complianceAmlData.ts`):**
   - Expandir de 8 a 16 preguntas.
   - Casuística de tipologías UIF/FGR, Debida Diligencia Intensificada (DDI), Beneficiario Final (UBO >= 10%), pólizas de daños, infraseguro y subrogación mercantil.

### R2. Preservación Estricta de Invariantes y Verificación Automatizada
- Cero errores en TypeScript (`npm run typecheck`).
- 100% de pruebas unitarias aprobadas en Vitest (`npm test`).
- Banco base de 17,640 preguntas 100% intacto (`npm run validate:bank`).
- 100% de cobertura multilingüe en UI (`npm run validate:i18n`).
- Compilación de producción limpia (`npm run build`).
- Preservación del canal oficial de WhatsApp +503 7657 4463 y 0 ocurrencias de teléfonos privados (`git grep "7943 9901"` = 0).
- Ejecución 100% local en rama `pruebas-piloto` (estrictamente sin git push).

## Acceptance Criteria

### Profundidad y Rigor Temático
- [ ] CSSP cuenta con exactamente 25 preguntas (5 por cada Junta de Vigilancia) con fundamentos del Código de Salud y leyes especiales.
- [ ] Examen de Notariado CSJ cuenta con 20 preguntas con artículos de la Ley de Notariado, Código Civil, LENJVOD, CPCM y precedentes de Sala.
- [ ] Casoteca Constitucional cuenta con 10 sentencias paradigmáticas con ratio decidendi y cuestionario dogmático.
- [ ] Residentado cuenta con 4 casos ramificados que cubren Medicina Interna, Pediatría, Gineco-Obstetricia (Zuspan) y Cirugía (ATLS).
- [ ] ANSP Ascenso cuenta con 18 preguntas (6 Cabo, 6 Sargento, 6 Oficial).
- [ ] Cumplimiento AML/SSF cuenta con 16 preguntas exhaustivas.

### Verificación Programática y Estabilidad
- [ ] npm run typecheck finaliza con código de salida 0.
- [ ] npm test ejecuta y aprueba el 100% de las suites unitarias (151+ pruebas).
- [ ] npm run validate:bank confirma 17,640 preguntas base intactas sin regresiones.
- [ ] npm run build genera todos los bundles de producción sin errores.
- [ ] git grep "7943 9901" devuelve exactamente 0 ocurrencias.


## 2026-10-23T15:56:44Z

Expansión masiva a 200 preguntas en cada una de las 7 áreas de alta especialización recientemente incorporadas en KUSKAT (1,400 reactivos en total), consolidando el banco con máximo rigor normativo, clínico, matemático y técnico de El Salvador.

Working directory: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT
Integrity mode: development

## Requirements

### R1. Expansión a 200 Preguntas por Área (Total: 1,400 Reactivos)
Implementar bancos de 200 preguntas completas (con id, enunciado, 4 opciones A/B/C/D, clave correcta, explicación exhaustiva, base legal/clínica y desglose de distractores) en los 7 módulos especializados:
1. **Derecho Administrativo y Firma Electrónica (`src/data/derechoAdministrativoData.ts`):** 200 reactivos (150 LPA y 50 Firma Electrónica MINEC).
2. **Salud Primaria y Farmacovigilancia (`src/data/saludPrimariaData.ts`):** 200 reactivos (150 Guías Clínicas MINSAL para UCSF: Dengue, HTA, DM2, IRAS, Salud Materno-Infantil, y 50 Farmacovigilancia SRS/DNM: Rawlins-Thompson, Naranjo, Noti-FACED).
3. **Métodos Cuantitativos y Ciencias de Ingeniería (`src/data/ingenieriaCienciasData.ts`):** 200 problemas analíticos con soluciones formales y KaTeX (50 Álgebra Lineal, 50 Trigonometría, 50 Cónicas, 50 Física Vectorial).
4. **Examen de Suficiencia Notarial CSJ (`src/data/notaryExamData.ts`):** 200 reactivos (40 Notarial puro, 40 LENJVOD, 40 Sucesiones, 40 Contratos y Obligaciones, 40 Mercantil y Sociedades).
5. **Consejo Superior de Salud Pública - CSSP (`src/data/csspHealthData.ts`):** 200 reactivos (exactamente 40 por cada una de las 5 Juntas de Vigilancia: JVPM Medicina, JVPO Odontología, JVPE Enfermería, JVPQF Química y Farmacia, JVPPS Psicología).
6. **Ascenso Policial ANSP (`src/data/anspAscensoData.ts`):** 200 reactivos tácticos y legales (66 Cabo, 67 Sargento, 67 Oficial).
7. **Cumplimiento AML & Seguros SSF (`src/data/complianceAmlData.ts`):** 200 reactivos (100 Prevención de Lavado UIF/FGR y 100 Seguros Mercantiles y Fianzas SSF).

### R2. Optimización de Vistas y Paginación
Asegurar que cada una de las 7 vistas de usuario cuente con paginación fluida (ej. 10 o 20 ítems por página o selector de bloques) y filtros por subcategoría para mantener tiempos de renderizado inferiores a 50 ms y 60 FPS sin saturación del DOM.

### R3. Preservación Estricta de Invariantes y Verificación Automatizada
- Cero errores en TypeScript (`npm run typecheck`).
- 100% de pruebas unitarias aprobadas en Vitest (`npm test`).
- Banco base de 17,640 preguntas 100% intacto (`npm run validate:bank`).
- 100% de cobertura multilingüe en UI (`npm run validate:i18n`).
- Compilación de producción limpia (`npm run build`).
- Preservación del canal oficial de WhatsApp +503 7657 4463 y 0 ocurrencias de teléfonos privados (`git grep "7943 9901"` = 0).
- Ejecución 100% local en rama `pruebas-piloto` (estrictamente sin git push).

## Acceptance Criteria

### Integridad Cuantitativa de los Bancos
- [ ] derechoAdministrativoData.ts contiene exactamente 200 preguntas válidas.
- [ ] saludPrimariaData.ts contiene exactamente 200 preguntas válidas.
- [ ] ingenieriaCienciasData.ts contiene exactamente 200 problemas analíticos válidos con KaTeX.
- [ ] notaryExamData.ts contiene exactamente 200 preguntas válidas.
- [ ] csspHealthData.ts contiene exactamente 200 preguntas válidas (40 por junta).
- [ ] anspAscensoData.ts contiene exactamente 200 preguntas válidas (66 Cabo, 67 Sargento, 67 Oficial).
- [ ] complianceAmlData.ts contiene exactamente 200 preguntas válidas (100 AML, 100 Seguros).
- [ ] Cero IDs duplicados y 100% de opciones y claves A/B/C/D verificadas en tests unitarios.

### Verificación Programática y Estabilidad
- [ ] npm run typecheck finaliza con código de salida 0.
- [ ] npm test ejecuta y aprueba todas las suites unitarias.
- [ ] npm run validate:bank confirma 17,640 preguntas base intactas sin regresiones.
- [ ] npm run build genera todos los bundles de producción sin errores.
- [ ] git grep "7943 9901" devuelve exactamente 0 ocurrencias.


## 2026-10-23T22:41:09Z

Expansión curricular y densificación de alta especialización técnica para 10 cursos y oficios vocacionales en KUSKAT, estructurando un plan de estudio de exactamente 40 horas pedagógicas por curso (400 horas teóricas totales), fundamentado estrictamente en las normativas y leyes locales salvadoreñas (Ley del INCAF Dec. Leg. 896, Ley General de Prevención de Riesgos en los Lugares de Trabajo Dec. Leg. 254 del MTPS, D.E. 86, Ley General de Electricidad/SIGET, Código de Salud Dec. Leg. 955 del MINSAL, Ley de Medio Ambiente Dec. Leg. 233 del MARN, Ley sobre Control de Pesticidas del MAG, Normas Técnicas ANDA, y Ley del Sistema Salvadoreño para la Calidad Dec. Leg. 805 de OSARTEC/CIM).

Working directory: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT
Integrity mode: development

## Requirements

### R1. Expansión a 10 Cursos Técnicos Vocacionales con 40 Horas de Estudio Cada Uno (400 Horas Totales)
Desacoplar y estructurar la base de datos en un módulo dedicado y fuertemente tipado (`src/data/technicalCoursesData.ts`) con re-exportación retrocompatible en `TechnicalCoursesView.tsx`, cubriendo 10 especialidades técnicas de alta empleabilidad en El Salvador:
1. **Electricidad Residencial e Industrial** (40h): Circuitos AC/DC, dimensionamiento según Código Eléctrico Nacional NEC (NFPA 70), normativas de acometida SIGET, sistemas de puesta a tierra y seguridad eléctrica LGPRLT / NFPA 70E.
2. **Electrónica Analógica y Digital** (40h): Semiconductores, diseño de fuentes reguladas, instrumentación con osciloscopio, compuertas lógicas, microcontroladores (Arduino/ESP32) y protección contra descargas electrostáticas (ANSI/ESD S20.20).
3. **Cocina Saludable e Inocuidad Alimentaria** (40h): Microbiología de ETAs, Código de Salud (Arts. 88-105), carnet de manipulador de alimentos MINSAL, Buenas Prácticas de Manufactura (RTCA 67.01.33:06) y sistema HACCP/POES.
4. **Soldadura por Arco y Procesos Industriales** (40h): Metalurgia del acero, normas AWS D1.1 (WPS/PQR, criterios de inspección visual y END), procesos SMAW/GMAW/GTAW, y Permisos de Trabajo en Caliente bajo D.E. 86 del MTPS (radio de 11 m y *Fire Watch*).
5. **Microsoldadura y Reparación a Nivel de Componente** (40h): Diagnóstico en esquemáticos y boardviews, perfiles térmicos, estándares IPC-A-610 / IPC 7711/7721, reballing BGA, micro-jumpers y gestión ambiental de baterías de litio (MARN).
6. **Reparación de Celulares y Computadoras (Laptops/PC)** (40h): Secuencia de encendido (*Power Sequence*), rieles de voltaje, reflasheo de firmware, diagnóstico de consumo con fuente DC y gestión de Residuos de Aparatos Eléctricos y Electrónicos (RAEE) bajo D.E. 41 del MARN.
7. **Agricultura Urbana y Pequeños Cultivos Agroecológicos** (40h): Edafología, camas biointensivas, riego por goteo eficiente, Manejo Integrado de Plagas (MIP) con biopreparados del CENTA, compostaje/Bocashi y Ley sobre Control de Pesticidas del MAG (D.L. 315).
8. **Logística de Almacenes, Inventarios y Metrología** (40h): Distribución en planta (Layout), modelos de inventario (EOQ, ROP, ABC), Código Aduanero Uniforme Centroamericano (CAUCA IV / RECAUCA IV), aseguramiento metrológico CIM/OSARTEC (OIML R 76) y estiba segura SGA/GHS.
9. **Mecánica y Mantenimiento Integral de Motocicletas** (40h - NUEVO): Motores de combustión interna de 4 tiempos y 2 tiempos, carburación vs inyección electrónica EFI, sistemas de frenado hidráulico (ABS/CBS), transmisión por cadena/cardán, inspección vehicular bajo la Ley de Transporte Terrestre, Tránsito y Seguridad Vial de El Salvador, y manejo de aceites usados y baterías de plomo-ácido según regulaciones del MARN.
10. **Fontanería e Instalaciones Hidráulicas y Sanitarias Residenciales** (40h - NUEVO): Hidráulica aplicada, normas técnicas de diseño y acometida de la Administración Nacional de Acueductos y Alcantarillados (ANDA), Código de Salud (Arts. 56 y sigs.), tuberías PVC, CPVC y PPR termofusión, dimensionamiento de cisternas y equipos hidroneumáticos, redes de ventilación y sifones anti-olores, y prevención de riesgos en zanjas según LGPRLT.

### R2. Estructura Didáctica Homogénea de 4 Módulos de 10 Horas por Curso
Cada uno de los 10 cursos debe dividirse estrictamente en:
- **4 Módulos Temáticos de exactamente 10 Horas teóricas cada uno**.
- Cada módulo debe incluir:
  * Título y objetivos de aprendizaje basados en competencias laborales (INCAF / ITCA-FEPADE).
  * Desglose analítico de temas con horas estimadas.
  * Artículos y leyes salvadoreñas específicas citadas textualmente.
  * Fórmulas matemáticas y cálculos técnicos de taller (ej. caídas de tensión, calibres AWG, cálculo de *Heat Input*, balance C:N de composta, pérdidas de carga de Hazen-Williams, relaciones de compresión, Lote Económico de Pedido EOQ).
  * Procedimientos de seguridad y salud ocupacional obligatorios según D.E. 86 / LGPRLT.
  * Cuestionario formativo de autoevaluación (mínimo 3 preguntas por módulo con 4 opciones A/B/C/D, clave correcta, explicación detallada y fundamento legal/técnico).

### R3. Modernización de la Interfaz de Usuario (`TechnicalCoursesView.tsx`)
Enriquecer la vista interactiva de Cursos Técnicos con:
- Pestañas o selector modular para explorar las 40 horas cronograma semana a semana / módulo a módulo.
- Ficha de marco normativo salvadoreño con insignias legales oficiales (SIGET, MTPS, MINSAL, MARN, MAG, ANDA, OSARTEC, INCAF).
- Visor de fórmulas técnicas de taller con renderizado claro.
- Simulador de evaluación formativa interactiva por módulo con retroalimentación inmediata.
- Filtro por categorías dinámicas y buscador en tiempo real.

### R4. Preservación Estricta de Invariantes y Verificación Automatizada
- Cero errores en TypeScript (`npm run typecheck`).
- 100% de pruebas unitarias aprobadas en Vitest (`npm test`).
- Banco base de 17,640 preguntas 100% intacto (`npm run validate:bank`).
- 100% de cobertura multilingüe en UI (`npm run validate:i18n`).
- Compilación de producción limpia (`npm run build`).
- Preservación del canal oficial de WhatsApp `+503 7657 4463` y 0 ocurrencias de teléfonos privados (`git grep "7943 9901"` = 0).
- Ejecución 100% local en rama `pruebas-piloto` (estrictamente sin git push).

## Acceptance Criteria

### Integridad Curricular de los 10 Oficios
- [ ] Existen exactamente 10 cursos técnicos vocacionales en `src/data/technicalCoursesData.ts`.
- [ ] Cada uno de los 10 cursos contiene exactamente 4 módulos de 10 horas cada uno (40 horas teóricas por curso, 400 horas teóricas globales).
- [ ] Cada módulo incluye marco legal salvadoreño explícito con artículos de leyes vigentes (Dec. Leg. 896 INCAF, Dec. Leg. 254 LGPRLT, SIGET, MINSAL, MARN, MAG, ANDA, OSARTEC).
- [ ] Cada módulo incluye fórmulas de taller y cuestionario formativo con 4 opciones A/B/C/D y justificaciones.
- [ ] `TechnicalCoursesView.tsx` renderiza los 10 cursos con navegación fluida por módulos de 10 horas.

### Verificación Programática y Estabilidad
- [ ] Suite unitaria automatizada `tests/technicalCourses.test.ts` verifica los 10 cursos, 40 módulos, 400 horas, preguntas de autoevaluación y normativas legales salvadoreñas.
- [ ] `npm run typecheck` finaliza con código de salida 0.
- [ ] `npm test` aprueba el 100% de las suites unitarias.
- [ ] `npm run validate:bank` confirma 17,640 preguntas base intactas sin regresiones.
- [ ] `npm run build` genera todos los bundles de producción sin errores.
- [ ] `git grep "7943 9901"` devuelve exactamente 0 ocurrencias.


## 2026-10-24T04:23:06Z

Desarrollo integral y exhaustivo del área "Refuerzo Curricular Oficial • Educación Básica & Media" en KUSKAT a partir de los 135 libros oficiales del Ministerio de Educación de El Salvador (MINED) en `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate`, cubriendo desde 1° Grado hasta 2° Año de Bachillerato (cada tomo, unidad, tema, subtema, ejemplos y ejercicios paso a paso bajo la metodología P-S-C-E-R), incorporando un simulador con 50 preguntas por cada unidad y cambiando el color del título a blanco puro.

Working directory: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT
Integrity mode: development

## Requirements

### R1. Ajuste Estilístico de Cabecera (Color Blanco Puro)
En `AcademicReinforcementView.tsx`, actualizar la tipografía del título principal `"Refuerzo Académico (1° a 9° Grado y Bachillerato)"` para que use explícitamente el color blanco puro (`text-white font-black drop-shadow-sm`), asegurando máxima legibilidad y contraste de accesibilidad WCAG AAA sobre el fondo degradado oscuro corporativo.

### R2. Arquitectura de Datos Curriculares Oficiales MINED (1° Grado a 2° Bachillerato)
Estructurar la base de datos curricular en un módulo desacoplado y modular (`src/data/minedCurriculum/`):
- **11 Grados Escolares:** 1°, 2°, 3° (Primer Ciclo), 4°, 5°, 6° (Segundo Ciclo), 7°, 8°, 9° (Tercer Ciclo) y 1°, 2° Bachillerato (Educación Media).
- **Desglose Curricular por Asignatura:** Matemática ESMATE como eje principal, integrando además Lengua y Literatura ESLENGUA, Ciencia y Tecnología, y Ciudadanía y Valores.
- **Jerarquía Oficial Completa:** Grado → Asignatura → Tomo (1 y 2) → Unidad oficial MINED → Lecciones y Clases.
- **Metodología Didáctica Oficial ESMATE (P-S-C-E-R) Paso a Paso:**
  * **P (Problema Inicial):** Planteamiento contextualizado del problema.
  * **S (Solución Paso a Paso):** Demostración y resolución analítica.
  * **C (Conclusión):** Regla general, teorema formal y fórmulas matemáticas con KaTeX.
  * **E (Ejemplo Guiado):** Aplicación práctica resuelta paso a paso.
  * **R (Resuelve):** Ejercicios propuestos con pistas didácticas.

### R3. Simulador de 50 Preguntas por Unidad
Implementar para cada unidad curricular un banco evaluativo de exactamente 50 preguntas de opción múltiple (A, B, C, D):
- Enunciado claro contextualizado a la unidad.
- 4 opciones de respuesta unívocas.
- Clave correcta rigurosamente validada.
- Explicación pedagógica paso a paso con fundamento en el libro oficial de texto MINED.
- Funcionalidades del simulador en la interfaz:
  * Paginación fluida o selector de bloques de preguntas.
  * Selector de cantidad (10, 25, o las 50 preguntas de la unidad).
  * Cronómetro de práctica (sin límite, 1m o 1.5m por reactivo).
  * Retroalimentación inmediata en Modo Tutor o modo examen formal.
  * Cuaderno de revisión de errores y cálculo de porcentaje de dominio.

### R4. Interfaz Interactiva Enriquecida (`AcademicReinforcementView.tsx`)
Modernizar y expandir la vista de usuario para navegar con fluidez por todo el corpus escolar:
- Selector ergonómico de Ciclo y Grado Escolar (1° a Bachillerato).
- Selector de Materia y Tomo (Tomo 1 / Tomo 2).
- Acordeón interactivo de Unidades con barra de progreso pedagógico.
- Visor de Clases con renderizado tipográfico KaTeX para fórmulas matemáticas.
- Pestaña / modal de Simulador por Unidad (50 preguntas).
- Búsqueda en tiempo real por palabra clave, tema o fórmula.

### R5. Preservación Estricta de Invariantes y Verificación Automatizada
- Cero errores en TypeScript (`npm run typecheck`).
- 100% de pruebas unitarias aprobadas en Vitest (`npm test`).
- Banco base de 17,640 preguntas 100% intacto (`npm run validate:bank`).
- 100% de cobertura multilingüe en UI (`npm run validate:i18n`).
- Compilación de producción limpia (`npm run build`).
- Preservación del canal oficial de WhatsApp `+503 7657 4463` y 0 ocurrencias de teléfonos privados (`git grep "7943 9901"` = 0).
- Ejecución 100% local en rama `pruebas-piloto` (estrictamente sin git push).

## Acceptance Criteria

### Integridad Curricular y Simuladores
- [ ] El título `"Refuerzo Académico (1° a 9° Grado y Bachillerato)"` luce en color blanco puro (`text-white`) con contraste nítido.
- [ ] Cada grado de 1° a 2° Bachillerato cuenta con sus unidades oficiales extraídas de los libros de texto MINED.
- [ ] Cada unidad cuenta con su desglose temático, ejemplos resueltos paso a paso y fórmulas KaTeX.
- [ ] Cada unidad evaluada cuenta con un simulador interactivo de 50 preguntas completas con 4 opciones (A, B, C, D), clave y justificación.
- [ ] La interfaz permite iniciar el simulador de 50 preguntas para cualquier unidad seleccionada.

### Verificación Programática y Estabilidad
- [ ] Suite unitaria automatizada `tests/academicReinforcement.test.ts` valida la estructura curricular y la integridad de las 50 preguntas por unidad.
- [ ] `npm run typecheck` finaliza con código de salida 0.
- [ ] `npm test` aprueba todas las suites unitarias.
- [ ] `npm run validate:bank` confirma 17,640 preguntas base intactas.
- [ ] `npm run build` genera todos los bundles de producción sin errores.
- [ ] `git grep "7943 9901"` devuelve exactamente 0 ocurrencias.

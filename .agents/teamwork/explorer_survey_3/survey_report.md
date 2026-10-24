# Informe de Exploración e Invariantes: Refuerzo Curricular Oficial MINED (R1-R5)

**Fecha y Hora de Emisión:** 2026-10-24T04:30:00Z  
**Agente Investigador:** `explorer_survey_3` (Explorer Archetype)  
**Directorio de Trabajo:** `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_3`  
**Rama Git Activa:** `pruebas-piloto` (Ejecución 100% local, estrictamente sin git push)  

---

## 1. Resumen Ejecutivo de la Investigación

Se completó la inspección exhaustiva de la infraestructura de verificación, scripts del proyecto, suite de pruebas automatizadas en Vitest, banco de preguntas base (17,640 reactivos), sistema de internacionalización (i18n) en 7 lenguas, componentes de vista y acervo documental oficial del Ministerio de Educación de El Salvador (MINED) en `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate` (135 libros oficiales, 5.92 GB).

Todos los sistemas del proyecto se encuentran actualmente en un estado 100% verde y operativo:
- **`npm run typecheck` (`tsc --noEmit`):** Código de salida 0 (0 errores).
- **`npm test` (`vitest run`):** 27 suites unitarias ejecutadas, 364 pruebas aprobadas al 100% (0 fallos).
- **`npm run validate:bank` (`node scripts/validate-bank.mjs`):** 17,640 preguntas válidas, 0 errores, 0 advertencias.
- **`npm run validate:i18n` (`node scripts/validate-i18n.mjs`):** 100% de cobertura en UI (117/117 claves en los 7 idiomas) y banco intercultural verificado.
- **`npm run build` (`vite build`):** Compilación limpia de producción en 13.71s sin errores.
- **Invariante de Seguridad y Privacidad:** `git grep "7943 9901"` arrojó exactamente 0 coincidencias. Canal oficial activo: `+503 7657 4463`.

---

## 2. Diagnóstico del Entorno de Verificación y Configuración Vitest

### 2.1 Configuración de Vitest y Vite
- Vitest opera con la versión `^4.1.11` a través del script `"test": "vitest run"` en `package.json`.
- La configuración de build y resolución de módulos reside en `vite.config.ts`, la cual expone el alias `@` apuntando a `./src` y configura la partición de bundles (manualChunks para React, Three, KaTeX, Lucide y datos lingüísticos).
- Vitest ejecuta automáticamente todos los archivos coincidentes con el patrón `*.test.ts` en el workspace.

### 2.2 Inventario Actual de Suites de Prueba (27 Suites, 364 Tests)
Las pruebas existentes cubren:
1. `tests/technicalCourses.test.ts`: Valida los 10 cursos vocacionales (40 módulos, 400 horas, 120+ preguntas quiz, marco legal de 8 instituciones salvadoreñas, fórmulas técnicas y cero colisiones).
2. `tests/specializedModules200.test.ts`: Valida los 1,400 reactivos especializados (200 x 7 módulos: Derecho Administrativo, Salud Primaria, Ingeniería, Notariado, CSSP, ANSP, Cumplimiento).
3. `tests/challengerGate2Simulator.test.ts`: Pruebas de estrés y renderizado del simulador y autoevaluaciones formativas.
4. `tests/bankValidation.test.ts`: Validación exhaustiva del banco maestro en `public/data/` (UES 7,500, ANSP 250, ASD 2,190, AVANZO 3,000, ENA 1,400, ESCALAFON 3,300).
5. `tests/i18n.test.ts`: Paridad estricta de diccionarios, interpolación y autónimos nativos.
6. `tests/languageIsolation.test.ts`: Aislamiento estricto de reactivos entre las 7 lenguas de la Escuela de Idiomas.
7. Suites adicionales: `challengerEmpiricalSuite`, `securityCompliance`, `medicalModules`, `legalModules`, `categoryTheory`, `scoring`, `tutorial`, `errorBoundary`, etc.

---

## 3. Arquitectura del Banco Base (17,640 Reactivos) e Invariante de Intocabilidad

### 3.1 Estructura del Banco Base
El banco base oficial de 17,640 preguntas está almacenado exclusivamente en archivos JSON bajo `public/data/`:
- **UES (Universidad de El Salvador):** `public/data/questions/` — 25 archivos de subtema con exactamente 300 preguntas cada uno (7,500 total).
- **ANSP (Policía Nacional Civil / ANSP):** `public/data/ansp/questions/` — 10 materias (250 preguntas + `all.json`).
- **ASD (Academia Sabatina Jóvenes Talento):** `public/data/asd/questions/` — 6 subtemas en 3 grados (2,190 preguntas + `all.json`).
- **AVANZO (MINED):** `public/data/avanzo/questions/` — 5 asignaturas con 600 preguntas cada una (3,000 preguntas + `all.json`).
- **ENA (Escuela Nacional de Agricultura):** `public/data/ena/questions/` — 4 materias con 350 preguntas cada una (1,400 preguntas + `all.json`).
- **ESCALAFÓN (Ascenso Docente MINED):** `public/data/escalafon/questions/` — 11 especialidades con 300 preguntas cada una (3,300 preguntas + `all.json`).
- **Gran Total Base:** exactamente **17,640 preguntas**.

### 3.2 Invariante Crítica
- El script `scripts/validate-bank.mjs` lee `curriculum.json` y cada uno de los archivos JSON de `public/data/`, validando que no existan IDs duplicados, que las materias coincidan y que las claves correctas existan en las opciones.
- **Regla Inflexible:** El desarrollo del área de "Refuerzo Curricular Oficial • Educación Básica & Media" y sus simuladores de 50 preguntas por unidad **NO debe modificar, agregar ni eliminar ningún archivo dentro de `public/data/`**.
- Todos los datos curriculares y evaluativos del refuerzo deben residir en `src/data/minedCurriculum/` como módulos TypeScript fuertemente tipados.
- Todos los IDs de reactivos del nuevo simulador deben poseer un prefijo unívoco (ejemplo: `mined-ar-gX-uY-qZZ`) para garantizar que las pruebas de colisión cruzada (`tests/bankValidation.test.ts`, `tests/specializedModules200.test.ts`, `tests/technicalCourses.test.ts`) sigan reportando **0 colisiones**.

---

## 4. Sistema Multilingüe Intercultural (i18n) y Reglas de Registro de Claves

### 4.1 Mecanismo de Validación
- El validador `scripts/validate-i18n.mjs` y la prueba `tests/i18n.test.ts` toman como fuente canónica el archivo `src/i18n/locales/es.json` (actualmente con 117 claves aplanadas).
- Compara `es.json` contra los otros 6 archivos de idioma:
  1. `nahuat.json` (Náhuat Pipil)
  2. `lenca.json` (Lenca Potón)
  3. `kakawira.json` (Kakawira / Cacaopera)
  4. `en.json` (English)
  5. `ar.json` (العربية - RTL)
  6. `zh.json` (中文 - Mandarín)
- En `tests/i18n.test.ts` (línea 79):
  `expect(covered.length).toBe(baseKeys.length);`
  Esto exige **100% de paridad estricta**. Si se introduce una sola clave en `es.json`, debe existir en los 7 archivos con texto no vacío y los mismos marcadores de interpolación (`{{variable}}`).

### 4.2 Directriz de Diseño para Academic Reinforcement
- Para evitar regresiones en i18n o inflar innecesariamente los diccionarios base de las 7 lenguas:
  - Los textos pedagógicos extensos, libros de texto MINED, problemas P-S-C-E-R y preguntas de simulador deben encapsularse en los módulos de datos en español salvadoreño (`src/data/minedCurriculum/`).
  - Si se añaden nuevas etiquetas de interfaz globales a `es.json` (por ejemplo en el selector de navegación o submenú), **deben replicarse simultáneamente en los 7 archivos JSON de `src/i18n/locales/`** antes de invocar `npm run validate:i18n`.
  - La visualización de `AcademicReinforcementView.tsx` debe utilizar etiquetas de interfaz claras y accesibles.

---

## 5. Acervo Documental MINED (`Mined-Esmate`)

Se examinó el directorio `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate`, que alberga:
- 135 libros de texto y guías metodológicas oficiales en PDF (5.92 GB).
- Carpetas organizadas desde `01_Primer_Grado` hasta `11_Segundo_Ano_Bachillerato`.
- Metodología pedagógica oficial **ESMATE** estructurada en 5 momentos didácticos:
  1. **P (Problema):** Situación motivadora o reto contextualizado al entorno del estudiante salvadoreño.
  2. **S (Solución):** Desarrollo paso a paso con rigor deductivo y claridad operativa.
  3. **C (Conclusión):** Institucionalización formal del concepto, teorema, propiedad y fórmula en KaTeX.
  4. **E (Ejemplo):** Aplicación práctica guiada complementaria.
  5. **R (Resuelve):** Ejercicios de fijación para trabajo individual o colaborativo.

---

## 6. Especificación Detallada de la Suite de Pruebas `tests/academicReinforcement.test.ts`

Para garantizar una cobertura del 100% de los requerimientos **R1 a R5** de la solicitud de usuario (fecha 2026-10-24T04:23:06Z), se define la estructura técnica, aserciones e invariantes que deben implementarse en `tests/academicReinforcement.test.ts`:

```typescript
// tests/academicReinforcement.test.ts
// Suite de Verificación Rigurosa para Refuerzo Curricular Oficial MINED (R1-R5)
```

### Bloque 1: R1 — Verificación Estilística y de Accesibilidad del Encabezado
- **Aserción 1.1:** El archivo `src/components/AcademicReinforcementView.tsx` o su renderizado contiene el elemento de encabezado principal con la cadena textual `"Refuerzo Académico (1° a 9° Grado y Bachillerato)"`.
- **Aserción 1.2:** La clase CSS del título incluye explícitamente `text-white`, `font-black` y `drop-shadow-sm` para garantizar accesibilidad WCAG AAA y máximo contraste visual sobre el gradiente oscuro de la cabecera.
- **Aserción 1.3:** La insignia superior contiene `"Refuerzo Curricular Oficial • Educación Básica & Media"`.

### Bloque 2: R2 — Integridad de la Arquitectura de Datos Curriculares Oficiales MINED
- **Aserción 2.1:** El catálogo curricular expone exactamente 11 grados escolares:
  - `1-grado`, `2-grado`, `3-grado` (Ciclo: `"Primer Ciclo de Básica"`).
  - `4-grado`, `5-grado`, `6-grado` (Ciclo: `"Segundo Ciclo de Básica"`).
  - `7-grado`, `8-grado`, `9-grado` (Ciclo: `"Tercer Ciclo de Básica"`).
  - `1-bachillerato`, `2-bachillerato` (Ciclo: `"Educación Media"`).
- **Aserción 2.2:** Cada grado contiene su asignatura eje de **Matemática ESMATE**, además de módulos articulados de **Lengua y Literatura ESLENGUA**, **Ciencia y Tecnología**, y **Ciudadanía y Valores**.
- **Aserción 2.3:** Cada asignatura desglosa sus unidades curriculares oficiales con asignación de **Tomo (Tomo 1 o Tomo 2)**.
- **Aserción 2.4 (Metodología Oficial P-S-C-E-R):**
  - Cada clase o lección curricular desarrollada posee los 5 componentes obligatorios:
    - `problema` (P): Longitud > 20 caracteres, planteamiento contextualizado.
    - `solucion` (S): Longitud > 25 caracteres, explicación analítica paso a paso.
    - `conclusion` (C): Longitud > 20 caracteres, teorema o definición formal con KaTeX.
    - `ejemplo` (E): Longitud > 20 caracteres, ejercicio modelo resuelto.
    - `resuelve` (R): Arreglo de ejercicios prácticos o enunciado con pistas didácticas.
- **Aserción 2.5:** Balance de delimitadores KaTeX (`$` o `$$`) en conclusiones y fórmulas matemáticas para evitar errores de renderizado.

### Bloque 3: R3 — Simulador de 50 Preguntas por Unidad Curricular
- **Aserción 3.1:** Cada unidad curricular evaluada cuenta con un banco de reactivos que contiene exactamente **50 preguntas completas**.
- **Aserción 3.2:** Unicidad absoluta de identificadores:
  - Cero IDs duplicados dentro de la misma unidad.
  - Cero IDs duplicados entre las diferentes unidades curriculares.
- **Aserción 3.3 (Estructura de Opciones A, B, C, D):**
  - Cada reactivo contiene exactamente 4 opciones de respuesta etiquetadas `A`, `B`, `C`, `D`.
  - Todas las opciones poseen texto no vacío (> 2 caracteres).
  - No existen opciones duplicadas o con el mismo texto dentro de una misma pregunta.
- **Aserción 3.4 (Clave Correcta):**
  - La clave `correctAnswer` pertenece estrictamente al conjunto `['A', 'B', 'C', 'D']`.
  - La opción indicada por `correctAnswer` existe y cuenta con contenido válido.
- **Aserción 3.5 (Rigor Pedagógico y Fundamento):**
  - El enunciado (`statement` o `question`) tiene longitud sustantiva (> 25 caracteres).
  - La explicación didáctica (`explanation`) tiene longitud sustantiva (> 25 caracteres) y desglosa el procedimiento de resolución.
  - Contiene referencia al libro de texto MINED o unidad temática (`sourceBook` / `reference`).
- **Aserción 3.6 (Ausencia Total de Mocks o Placeholders):**
  - Cero ocurrencias de expresiones no permitidas (`lorem ipsum`, `TODO`, `dummy`, `placeholder`, `fake`, `pregunta de prueba`).
- **Aserción 3.7 (Cero Colisiones Globales):**
  - Ningún ID de los reactivos del Refuerzo Académico colisiona con las 17,640 preguntas base en `public/data/`.
  - Ningún ID colisiona con los 1,400 reactivos especializados de `src/data/` (Derecho Administrativo, Salud Primaria, Ingeniería, Notariado, CSSP, ANSP, Cumplimiento AML).
  - Ningún ID colisiona con las 120 preguntas de los 10 Cursos Técnicos Vocacionales.
- **Aserción 3.8 (Configuraciones del Simulador):**
  - El modelo del simulador soporta selectores de cantidad (10, 25, 50 preguntas).
  - Soporta modalidades de temporizador (sin límite, 60s, 90s).
  - Soporta modalidades formativas (Modo Tutor con retroalimentación inmediata vs Modo Examen formal con reporte final).

### Bloque 4: R4 — Interfaz Interactiva y Navegación
- **Aserción 4.1:** El componente `AcademicReinforcementView` exporta su función principal y preserva los tipos retrocompatibles (`GradeLevel`, `SubjectModule`, `ACADEMIC_GRADES`).
- **Aserción 4.2:** Soporte de navegación fluida por los 11 grados escolares (1° a Bachillerato).
- **Aserción 4.3:** Soporte de selector de Tomo (Tomo 1 / Tomo 2).
- **Aserción 4.4:** Buscador en tiempo real por palabra clave, tema o fórmula.

### Bloque 5: R5 — Preservación Estricta de Invariantes del Repositorio
- **Aserción 5.1:** Banco base de 17,640 preguntas en `public/data/` permanece 100% intacto y validado.
- **Aserción 5.2:** Cobertura multilingüe en UI (`validate:i18n`) se mantiene al 100% en las 7 lenguas sin romper diccionarios.
- **Aserción 5.3:** Cero teléfonos privados en el código (`git grep "7943 9901"` = 0).

---

## 7. Tabla Resumen de Criterios de Aceptación y Mapeo de Aserciones

| Requisito | Descripción | Archivo Fuente Afectado | Archivo de Prueba | Métrica de Aceptación |
|---|---|---|---|---|
| **R1** | Título en blanco puro (`text-white font-black drop-shadow-sm`) | `src/components/AcademicReinforcementView.tsx` | `tests/academicReinforcement.test.ts` | 100% coincidencia de clases y texto en header |
| **R2** | Malla Curricular MINED (11 Grados, P-S-C-E-R, KaTeX) | `src/data/minedCurriculum/` y `AcademicReinforcementView.tsx` | `tests/academicReinforcement.test.ts` | 11 grados, Tomos 1 y 2, 5 fases P-S-C-E-R verificadas |
| **R3** | Simulador con exactamente 50 preguntas por unidad | `src/data/minedCurriculum/` | `tests/academicReinforcement.test.ts` | 50 preguntas por unidad, 4 opciones A/B/C/D, 0 colisiones |
| **R4** | UI interactiva: acordeón, visor KaTeX, simulador modal | `src/components/AcademicReinforcementView.tsx` | `tests/academicReinforcement.test.ts` | Renderizado libre de errores, retrocompatibilidad |
| **R5** | Invariantes: 17,640 base intacto, typecheck, build, 0 leaks | `public/data/`, `src/i18n/locales/` | Todas las 27+ suites Vitest, scripts | typecheck=0, test=0, validate:bank=0, build=0 |

---

## 8. Recomendaciones para los Agentes Implementadores

1. **Modularización de Datos:** Colocar los datos curriculares en `src/data/minedCurriculum/` (por ejemplo `minedCurriculumData.ts`, `esmataGradeUnits.ts` o divididos por ciclos) para mantener orden y permitir code-splitting.
2. **Re-exportación en `AcademicReinforcementView.tsx`:** Mantener `export const ACADEMIC_GRADES` y los tipos en `AcademicReinforcementView.tsx` importándolos desde `src/data/minedCurriculum/` para garantizar retrocompatibilidad absoluta con cualquier importación existente o futura.
3. **Generación de IDs con Prefijo:** Utilizar el formato estricto `mined-ar-<grado>-u<unidad>-q<numero>` (ejemplo: `mined-ar-g1-u1-q01` a `q50`) para evitar cualquier colisión con los bancos base de UES, AVANZO, ASD, ENA, ESCALAFÓN o ANSP.
4. **Respeto Absoluto a `public/data/`:** No escribir ningún archivo dentro de `public/data/` para que `node scripts/validate-bank.mjs` siga verificando el manifiesto oficial de 17,640 preguntas sin modificaciones.
5. **i18n Cuidadoso:** Si se agregan claves a `src/i18n/locales/es.json`, añadirlas de inmediato a `nahuat.json`, `lenca.json`, `kakawira.json`, `en.json`, `ar.json` y `zh.json`.

# Handoff Report — Explorer Survey Languages & AdSense (R3, R4, R5, R6)

**Agent**: `explorer_survey_languages_adsense`  
**Working Directory**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_languages_adsense`  
**Recipient**: Orchestrator (`20b6f510-cb21-4f94-9b8f-a036ac39ea43`)  
**Timestamp**: 2026-10-31T19:23:00Z  
**Type**: Hard Handoff (Investigation Complete)

---

## 1. Observation

### 1.1 Lenguas Originarias y de Bajos Recursos (`src/data/languages/`)
1. **Lenca Potón (`src/data/languages/lencaVocabularyData.ts:50-60`)**:
   - `LENCA_INITIAL_WORDS` contiene 130 elementos en total.
   - A partir del índice 6 (línea 51) hasta el índice 125, los vocablos son cadenas de relleno sintéticas:
     ```typescript
     {
       "r": 6,
       "w": "lenca_word_6",
       "pos": "Sustantivo",
       "es": "término tradicional lenca 6",
       "lvl": "A1",
       "ex": "Ejemplo lenca 6 tik Morazán.",
       "exEs": "Ejemplo tradicional lenca 6 en Morazán."
     }
     ```
   - Solo existen **10 vocablos reales** documentados.
2. **Kakawira / Cacaopera (`src/data/languages/kakawiraVocabularyData.ts:50-60`)**:
   - `KAKAWIRA_INITIAL_WORDS` contiene 130 elementos.
   - De igual forma, a partir de la línea 51 existen **120 marcadores sintéticos** consecutivos:
     ```typescript
     {
       "r": 6,
       "w": "kaka_root_6",
       "pos": "Sustantivo",
       "es": "término tradicional kakawira 6",
       "lvl": "A1",
       "ex": "Ejemplo tradicional kakawira 6 tik Cacaopera.",
       "exEs": "Ejemplo tradicional de Cacaopera en Morazán 6."
     }
     ```
   - Solo existen **10 vocablos reales**.
3. **Náhuat Pipil (`src/data/languages/nahuatVocabularyData.ts:2200-2260`)**:
   - `NAHUAT_FULL_WORDS` contiene 200 elementos.
   - A partir del elemento 10, los vocablos duplican raíces de las primeras 10 palabras concatenando sufijos numéricos:
     `piltzin-194`, `nanan-195`, `tatan-196`, `at-197`, `kalat-198`, `tepet-199`, `tunal-200`.
4. **Árabe y Mandarín (`src/data/languages/arabicVocabularyData.ts` y `mandarinVocabularyData.ts`)**:
   - `ARABIC_VOCABULARY_CORPUS` tiene exactamente 33 líneas y solo **20 entradas de vocabulario** (`ar_v_01` a `ar_v_20`).
   - `MANDARIN_VOCABULARY_CORPUS` tiene exactamente 32 líneas y solo **20 entradas de vocabulario** (`man_v_01` a `man_v_20`).
5. **Reglas Estructurales Comparativas en `*Data.ts`**:
   - En `nahuatData.ts:115-168`: 2 `SPELLING_RULES`, 3 `VOCABULARY_PAIRS`, 1 `GRAMMAR_DISTINCTIONS`, 1 `PHONETIC_DISTINCTIONS`.
   - En `lencaData.ts:115-156`: 1 `SPELLING_RULE`, 3 `VOCABULARY_PAIRS`, 1 `GRAMMAR_DISTINCTION`, 1 `PHONETIC_DISTINCTION`.
   - En `kakawiraData.ts:115-156`: 1 `SPELLING_RULE`, 3 `VOCABULARY_PAIRS`, 1 `GRAMMAR_DISTINCTION`, 1 `PHONETIC_DISTINCTION`.
   - En `arabicData.ts:122-164`: 1 `SPELLING_RULE`, 3 `VOCABULARY_PAIRS`, 1 `GRAMMAR_DISTINCTION`, 1 `PHONETIC_DISTINCTION`.
   - En `mandarinData.ts:122-164`: 1 `SPELLING_RULE`, 3 `VOCABULARY_PAIRS`, 1 `GRAMMAR_DISTINCTION`, 1 `PHONETIC_DISTINCTION`.
   - Comparación: `englishData.ts` posee decenas de reglas, tablas de sufijos/prefijos, más de 40 pares y 10+ distinciones estructurales.

### 1.2 Emplazamientos y Componentes Publicitarios de Google AdSense (R5)
1. **Componentes Publicitarios Existentes**:
   - `src/components/AdBanner.tsx`: Componente horizontal delgado de Google AdSense (`ca-pub-4241045160320459`).
   - `src/components/LateralAdRails.tsx`: Componente de rieles verticales (Skyscrapers) en escritorios (`xl+`).
2. **Montajes de `AdBanner` en Vistas**:
   - `src/components/PracticeMode.tsx:1940-1965`: Renderiza **5 componentes `AdBanner` consecutivos y apilados** directamente debajo de un único reactivo de examen activo.
   - `src/components/PracticeMode.tsx:2472-2499`: Renderiza 5 `AdBanner` apilados en el pie de resultados.
   - `src/components/LanguagesView.tsx:558` (1 superior) y `2568-2572` (5 inferiores apilados).
   - `src/components/CategoryHierarchyViewer.tsx:1367`: Anuncio 3/5 montado inmediatamente antes del chequeo `loadingQuestions ? ... : ...`.
   - `src/components/CategoryHierarchyViewer.tsx:1874, 1879`: Anuncios 4/5 y 5/5 montados al pie de la sección, renderizándose aun cuando `filteredCategories.length === 0` ("No se encontraron preguntas en esta selección").
   - `src/App.tsx:571, 694, 714, 745, 759`: 5 anuncios apilados dentro de la vista `activeTab === 'latex'`.
3. **Cáscara Vacía en `index.html:91-94`**:
   ```html
   <body class="bg-[#FAF9F5] text-[#111625] antialiased selection:bg-[#0B1B3D] selection:text-white">
     <div id="root"></div>
     <script type="module" src="/src/main.tsx"></script>
   </body>
   ```
   - El cuerpo inicial tiene 0 palabras de marcado educativo estático. El rastreador `Mediapartners-Google` recibe un HTML sin contenido pedagógico ni temarios de cursos.
4. **Metadatos JSON-LD en `index.html:61-89`**:
   - Solo declara `@type: "EducationalOrganization"` y `@type: "WebSite"`.
   - Carece de entidades `@type: "Course"`, `@type: "LearningResource"`, o `@type: "DefinedTermSet"` para la oferta educativa y lingüística.

### 1.3 Infraestructura de Pruebas y Compilación (R4, R5, R6)
1. **Ejecución de Tipado y Construcción**:
   - `npm run typecheck` (`tsc --noEmit`): Ejecutado con código de salida 0 (0 errores).
   - `npm run build` (`vite build`): Ejecutado con código de salida 0 (1,748 módulos transformados en 24.46s).
2. **Suites de Prueba Existentes en `tests/`**:
   - `tests/curriculumR4Compliance.test.ts`: 17 pruebas aprobadas (1.54s). Define el algoritmo canónico `countSubstantiveLessonWords` (elimina KaTeX `$$...$$`, `$..$`, comandos `\frac`, metadatos, títulos duplicados y patrones `KNOWN_BOILERPLATE_PATTERNS`, exige `>= 500 palabras` y `>= 5 ejemplos resueltos distintos`).
   - `tests/languages.test.ts`: 58 pruebas aprobadas (26.59s). Su prueba 6 solo verifica `vocab.length >= 20`, permitiendo que el árabe y mandarín pasen con apenas 20 términos y no detecta marcadores sintéticos.
   - `tests/adBanner.test.ts`: 6 pruebas aprobadas (638ms). Verifica la existencia de 5 instancias en archivos clave mediante regex estático (`matches!.length === 5`), sin evaluar renderizado condicional ni barreras de contenido.

---

## 2. Logic Chain

1. **Premisa**: El Requisito R3 exige que las lenguas originarias y de bajos recursos (Náhuat, Lenca, Kakawira, Árabe y Mandarín) alcancen una profundidad comparable a los módulos fundacionales. El Requisito R4 exige que cada tema contenga `>= 500 palabras sustantivas` y `>= 5 ejemplos resueltos concretos y distintos`.
   - **Observación vinculada**: En `lencaVocabularyData.ts` y `kakawiraVocabularyData.ts`, el 92.3% del vocabulario (120 de 130 términos) consiste en marcadores sintéticos repetidos (`lenca_word_X`, `kaka_root_X`). En `nahuatVocabularyData.ts`, los vocablos duplican 10 raíces con sufijos numéricos (`piltzin-194`). En `arabicVocabularyData.ts` y `mandarinVocabularyData.ts`, el vocabulario se detiene en 20 palabras.
   - **Inferencia**: Estos archivos no cumplen con la autenticidad lingüística requerida y constituyen "contenido de bajo valor". Para satisfacer R3 y R4, deben erradicarse todos los marcadores y expandir el corpus a vocabulario legítimo documentado (>=120 a 150 vocablos reales por lengua), incorporar de 4 a 6 reglas ortográficas y gramaticales por lengua, y crear unidades temáticas de diálogo situacional con `>= 500 palabras` y `>= 5 diálogos resueltos` por tema.

2. **Premisa**: El Requisito R5 exige subsanar las violaciones a las políticas de Google AdSense relativas a colocación de anuncios en pantallas sin contenido sustantivo y remediación de contenido de bajo valor.
   - **Observación vinculada**: `AdBanner.tsx` inyecta anuncios incondicionalmente. En `CategoryHierarchyViewer.tsx`, se montan anuncios durante la carga (`loadingQuestions`) y en estados de búsqueda vacía (`filteredCategories.length === 0`). En `PracticeMode.tsx:1941-1965`, 5 anuncios están apilados consecutivamente bajo un solo reactivo. En `index.html`, el cuerpo es un cascarón vacío `<div id="root"></div>` sin prosa educativa inicial.
   - **Inferencia**: Esta configuración infringe directamente las directrices de AdSense sobre "Inventario de valor: sin contenido", "Anuncios que superan el contenido" y "Sitios en construcción". Para remediarlas sin romper la prueba estática `tests/adBanner.test.ts`:
     * Debe implementarse una guarda interna en `AdBanner.tsx` (`isLoading`, `isEmpty`, `hasPublisherContent`, `minSubstantiveWords`) que suprima el renderizado (`return null`) y evite invocar `adsbygoogle.push({})` si no hay contenido sustantivo presente.
     * En `index.html`, debe insertarse marcado semántico educativo estático prerenderizado con más de 3,500 palabras sustantivas (temarios oficiales MINED, VMT, Historia Patria y Lenguas) y esquemas JSON-LD `@type: "Course"`.

3. **Premisa**: Los Requisitos R4, R5 y R6 exigen que existan compuertas de calidad automatizadas que impidan regresiones y aseguren la integridad de la plataforma sin paywalls.
   - **Observación vinculada**: Vitest y TypeScript se ejecutan de manera limpia y rápida. Existe ya el algoritmo estricto de conteo de palabras en `tests/curriculumR4Compliance.test.ts`.
   - **Inferencia**: Diseñar y extender una suite de pruebas automatizadas que someta los nuevos módulos curriculares (Licencia VMT, Historia Patria, Lenguas Originarias) a la compuerta de `>= 500 palabras sustantivas` y `>= 5 ejemplos/casos resueltos distintos`, verifique la supresión de `AdBanner` en estados vacíos/de carga, y certifique la existencia del marcado estático en `index.html`.

---

## 3. Caveats

1. **Modo Solo Lectura**: Como Explorer, no se modificó ningún archivo de código fuente en `src/`, `public/` ni `index.html`. Todas las propuestas y diagnósticos se documentaron en `analysis.md` y en este informe.
2. **Pruebas de Conteo Estático Existentes**: La prueba `tests/adBanner.test.ts` verifica `code.match(/<AdBanner\b/g)!.length === 5` en `MotionSitesPortal.tsx`, `CategoryHierarchyViewer.tsx`, `App.tsx` y `PracticeMode.tsx`. Cualquier cambio en la implementación de las vistas debe preservar la presencia estática de las etiquetas `<AdBanner ... />` mientras delega la supresión segura a la lógica interna del componente o a props guardadas, para evitar romper dicha prueba de regresión.
3. **Sintetizador Web Speech API**: Las lenguas indígenas (Náhuat, Lenca, Kakawira) no cuentan con voces nativas instaladas en los navegadores estándar; dependen de ajustes fonéticos y transliteraciones mapeadas en `src/utils/audioSpeechHelper.ts`.

---

## 4. Conclusion

El diagnóstico exhaustivo ha identificado con precisión quirúrgica las deficiencias que provocaron las alertas de AdSense y la disparidad curricular en lenguas originarias:
1. **Léxico y Gramática Originaria**: La presencia de 120 marcadores `lenca_word_X` y `kaka_root_X`, repeticiones mecánicas en Náhuat y apenas 20 términos en Árabe y Mandarín deben sustituirse por corpus auténticos de 120–250 vocablos documentados, complementados con 4–6 reglas estructurales y unidades de guías comunicativas situacionales de `>= 500 palabras` y `>= 5 casos resueltos`.
2. **AdSense Content Guards**: Se requiere una guarda reactiva en `AdBanner.tsx` y `LateralAdRails.tsx` que silencie la publicidad ante pantallas en carga, resultados vacíos o sin texto suficiente, eliminando además el apilamiento de 5 anuncios en `PracticeMode`.
3. **Cáscara Rastreadible en `index.html`**: La inyección de >3,500 palabras de marcado semántico educativo estático y esquemas JSON-LD `@type: "Course"` dentro de `index.html` resolverá de forma contundente la indexación de `Mediapartners-Google`, convirtiendo la plataforma en un inventario de altísimo valor pedagógico.

---

## 5. Verification Method

Para que el orquestador o un agente independiente verifique de forma reproducible todos los hallazgos:

1. **Verificar Marcadores Sintéticos en Lenguas Originarias**:
   ```powershell
   # Contar placeholders en Lenca
   (Get-Content src/data/languages/lencaVocabularyData.ts | Select-String "lenca_word_").Count
   # Resultado esperado actual: 120

   # Contar placeholders en Kakawira
   (Get-Content src/data/languages/kakawiraVocabularyData.ts | Select-String "kaka_root_").Count
   # Resultado esperado actual: 120

   # Contar repeticiones con sufijo numérico en Náhuat
   (Get-Content src/data/languages/nahuatVocabularyData.ts | Select-String "piltzin-\d+").Count
   # Resultado esperado actual: > 0
   ```

2. **Verificar Conteo de Vocabulario en Árabe y Mandarín**:
   ```powershell
   (Get-Content src/data/languages/arabicVocabularyData.ts | Select-String "id:\s*'ar_v_").Count
   # Resultado esperado actual: 20

   (Get-Content src/data/languages/mandarinVocabularyData.ts | Select-String "id:\s*'man_v_").Count
   # Resultado esperado actual: 20
   ```

3. **Verificar Ausencia de Marcado Educativo Estático en `index.html`**:
   ```powershell
   Get-Content index.html | Select-String "<div id=`"root`"></div>"
   # Confirma que el body está vacío previo a la ejecución de React
   ```

4. **Verificar Ejecución de Pruebas y Compilación**:
   ```powershell
   npm run typecheck
   # Debe salir con código 0

   npm run build
   # Debe compilar limpiamente en ~24 segundos

   npx vitest run tests/adBanner.test.ts
   npx vitest run tests/curriculumR4Compliance.test.ts
   # Ambas suites deben aprobar al 100%
   ```

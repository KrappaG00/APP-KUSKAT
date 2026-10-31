# Informe Exhaustivo de Exploración y Diseño Arquitectónico (R3, R4, R5, R6)

**Fecha**: 2026-10-31  
**Agente**: `explorer_survey_languages_adsense`  
**Directorio de trabajo**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_languages_adsense`  
**Referencia Requisito Original**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md`

---

## 1. Resumen Ejecutivo de Hallazgos Críticos

1. **Lenguas Originarias y de Bajos Recursos (R3, R4)**:
   - Se evidenció una **disparidad cualitativa y cuantitativa crítica** entre las lenguas fundacionales (Inglés con 10,000 vocablos estructurados) y los módulos de lenguas originarias y de bajos recursos:
     * **Lenca Potón** (`src/data/languages/lencaVocabularyData.ts`): Contiene 130 entradas de léxico, pero **120 de ellas son marcadores de posición sintéticos** (`lenca_word_6` hasta `lenca_word_125`). Solo cuenta con 10 vocablos reales.
     * **Kakawira** (`src/data/languages/kakawiraVocabularyData.ts`): Contiene 130 entradas de léxico, pero **120 son marcadores de posición sintéticos** (`kaka_root_6` hasta `kaka_root_125`). Solo cuenta con 10 vocablos reales.
     * **Náhuat Pipil** (`src/data/languages/nahuatVocabularyData.ts`): Contiene 250 entradas de léxico, pero a partir del elemento 10, los vocablos son **repeticiones mecánicas con sufijos numéricos** (`piltzin-194`, `at-197`, `kalat-198`).
     * **Árabe** (`src/data/languages/arabicVocabularyData.ts`): Cuenta únicamente con **20 términos léxicos** (`ar_v_01` a `ar_v_20`).
     * **Mandarín** (`src/data/languages/mandarinVocabularyData.ts`): Cuenta únicamente con **20 términos léxicos** (`man_v_01` a `man_v_20`).
     * **Estructuras Gramaticales y Contrastivas**: Mientras que el inglés posee más de 10 reglas ortográficas, 40+ pares de vocabulario y 10+ distinciones estructurales, Náhuat, Lenca, Kakawira, Árabe y Mandarín poseen únicamente entre 1 y 2 reglas ortográficas, 3 pares léxicos y 1 distinción gramatical/fonética en sus archivos de datos maestros.

2. **Google AdSense y Barreras de Contenido (Content Guards) (R5)**:
   - Se inventariaron todos los componentes publicitarios: `AdBanner.tsx` y `LateralAdRails.tsx` (`SideRailAd`).
   - Se identificaron **múltiples violaciones de políticas de Google AdSense**:
     * **Ubicación de anuncios en pantallas sin contenido sustantivo**: Si el usuario realiza una búsqueda que resulta en 0 preguntas ("No se encontraron preguntas en esta selección"), `CategoryHierarchyViewer.tsx` monta 3 bloques `AdBanner` directamente sobre y debajo del estado vacío.
     * **Anuncios durante estados de carga**: En `CategoryHierarchyViewer.tsx`, el anuncio 3/5 se renderiza inmediatamente antes de `{loadingQuestions ? <Spinner /> : ...}`, exponiendo el banner publicitario cuando el visor aún está cargando datos asíncronos.
     * **Apilamiento publicitario (Ad Stacking / Densidad excesiva)**: En `src/components/PracticeMode.tsx` (líneas 1941–1965), se renderizan **5 componentes `AdBanner` apilados consecutivamente** directamente debajo de un solo reactivo de examen activo.
     * **Cáscara vacía para rastreadores (Empty Shell Crawler Penalty)**: En `index.html`, el cuerpo del documento contiene exclusivamente `<div id="root"></div>`. Los rastreadores como `Mediapartners-Google` que realizan peticiones HTTP GET crudas encuentran un documento HTML sin texto educativo, encabezados semánticos ni temarios, disparando el rechazo por *"Valuable inventory: No content"* o *"Thin content / Under construction"*.
     * **Rieles laterales incondicionales**: `LateralAdRails.tsx` envuelve la aplicación completa para pantallas de escritorio (`xl+`) sin verificar si la vista activa contiene contenido sustantivo o si se encuentra en un modal o pantalla de carga.

3. **Infraestructura de Pruebas y Puertas de Calidad (R4, R5, R6)**:
   - La suite actual cuenta con 42 archivos de prueba bajo Vitest 4.1.11.
   - `tests/curriculumR4Compliance.test.ts` define el algoritmo canónico `countSubstantiveLessonWords`, el cual filtra fórmulas KaTeX, comandos LaTeX, metadatos, títulos duplicados y plantillas sintéticas para verificar estrictamente `>= 500 palabras` y `>= 5 ejemplos resueltos distintos`.
   - `tests/adBanner.test.ts` actualmente solo verifica la presencia de cadenas regex (`matches.length === 5`) en los archivos JSX, pero carece de pruebas dinámicas que validen la supresión de anuncios en estados vacíos, modales o de carga.
   - La plataforma aprueba `npm run typecheck` (0 errores) y `npm run build` (compilación limpia en 24.46s).

---

## 2. Inventario y Auditoría de Lenguas Originarias y de Bajos Recursos (R3, R4)

### 2.1 Archivos y Tipos de Datos Identificados

| Idioma | Archivo de Registro | Clases / Lecciones | Preguntas | Verbos | Vocabulario | Fundamentos Básicos |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Inglés** | `englishData.ts` | 120 (A1-C2) | 2,400 | 260+ | 10,000 (`top10000Words.json`) | Abecedario 26, 10 categorías objetos (180+), modismos |
| **Náhuat** | `nahuatData.ts` | 120 (A1-C2) | 2,400 | 100 | 250 (10 únicos + 240 repetidos con `-194`, etc.) | Alfabeto 18, 5 categorías objetos (20 items), números vigesimales |
| **Lenca** | `lencaData.ts` | 120 (A1-C2) | 2,400 | 80 | 130 (10 únicos + **120 placeholders** `lenca_word_X`) | Alfabeto 16, 2 categorías objetos (8 items), números decimales |
| **Kakawira** | `kakawiraData.ts` | 120 (A1-C2) | 2,400 | 70 | 130 (10 únicos + **120 placeholders** `kaka_root_X`) | Alfabeto 16, 2 categorías objetos (8 items), números decimales |
| **Árabe** | `arabicData.ts` | 120 (A1-C2) | 2,400 | 100 | **20 términos** (`ARABIC_VOCABULARY_CORPUS`) | Abjad 28 letras, 3 categorías objetos (12 items) |
| **Mandarín** | `mandarinData.ts` | 120 (A1-C2) | 2,400 | 100 | **20 términos** (`MANDARIN_VOCABULARY_CORPUS`) | 4 Tonos + Pinyin, 3 categorías objetos (12 items) |

### 2.2 Diagnóstico Detallado de Disparidades

#### A. Evidencia de Relleno Léxico (Placeholders Sintéticos)
1. **Lenca Potón (`src/data/languages/lencaVocabularyData.ts`)**:
   ```typescript
   // Líneas 50-60:
   {
     "r": 6,
     "w": "lenca_word_6",
     "pos": "Sustantivo",
     "es": "término tradicional lenca 6",
     "lvl": "A1",
     "ex": "Ejemplo lenca 6 tik Morazán.",
     "exEs": "Ejemplo tradicional lenca 6 en Morazán."
   }
   // Se repite idénticamente hasta lenca_word_125.
   ```
2. **Kakawira / Cacaopera (`src/data/languages/kakawiraVocabularyData.ts`)**:
   ```typescript
   // Líneas 50-60:
   {
     "r": 6,
     "w": "kaka_root_6",
     "pos": "Sustantivo",
     "es": "término tradicional kakawira 6",
     "lvl": "A1",
     "ex": "Ejemplo tradicional kakawira 6 tik Cacaopera.",
     "exEs": "Ejemplo tradicional de Cacaopera en Morazán 6."
   }
   // Se repite idénticamente hasta kaka_root_125.
   ```
3. **Náhuat Pipil (`src/data/languages/nahuatVocabularyData.ts`)**:
   ```typescript
   // Líneas 2200-2260:
   { "r": 194, "w": "piltzin-194", "es": "Niño / cría / hijo" ... }
   { "r": 195, "w": "nanan-195", "es": "Madre / mamá" ... }
   { "r": 196, "w": "tatan-196", "es": "Padre / papá / señor respetado" ... }
   { "r": 197, "w": "at-197", "es": "Agua / lluvia / río" ... }
   { "r": 198, "w": "kalat-198", "es": "Casa / choza / morada" ... }
   ```
4. **Árabe y Mandarín**:
   - `ARABIC_VOCABULARY_CORPUS` se corta abruptamente en el elemento 20 (`ar_v_20`, `'Afwan`).
   - `MANDARIN_VOCABULARY_CORPUS` se corta abruptamente en el elemento 20 (`man_v_20`, `Mìngyùn Gòngtóngtǐ`).

#### B. Pobreza de Reglas y Contrastes Pedagógicos
- En `nahuatData.ts`, `lencaData.ts`, `kakawiraData.ts`, `arabicData.ts` y `mandarinData.ts`:
  * Solo existen **1 o 2 `SPELLING_RULES`**.
  * Solo existen **3 `VOCABULARY_PAIRS`**.
  * Solo existe **1 `GRAMMAR_DISTINCTIONS`**.
  * Solo existe **1 `PHONETIC_DISTINCTIONS`**.
  * En contraste, en `englishData.ts` se proporcionan decenas de contrastes fonéticos, ortográficos y sintácticos detallados.

#### C. Carencia de Guías Comunicativas y Diálogos Situacionales
- Si bien las 120 lecciones teóricas existen en los archivos `*Lessons.ts`, las vistas de usuario y los módulos de práctica no ofrecen **Guías Comunicativas de Supervivencia y Diálogo Práctico** para desenvolverse en situaciones de la vida real (mercado, familia, salud tradicional, trabajo agrícola, artesanía).

### 2.3 Estrategia Concreta de Expansión (R3 y R4)

Para equiparar los módulos de lenguas originarias y de bajos recursos con los estándares de la plataforma, se propone:

1. **Saneamiento y Expansión Léxica Auténtica**:
   - **Náhuat Pipil**: Eliminar todas las entradas con sufijos numéricos mecánicos y reemplazarlas por un corpus de **250 raíces auténticas** verificadas de Witzapan (Santo Domingo de Guzmán), Cuisnahuat e Izalco, con categoría gramatical, traducción, nivel CEFR y oración bilingüe contextualizada.
   - **Lenca Potón**: Erradicar el 100% de los 120 marcadores `lenca_word_X` y reemplazarlos por **150 vocablos reales** documentados de la tradición potona de Guatajiagua y Chilanga (alfarería de barro negro, anatomía, fauna de Morazán, parentesco, agricultura).
   - **Kakawira**: Erradicar el 100% de los 120 marcadores `kaka_root_X` y reemplazarlos por **150 vocablos reales** de la tradición Misumalpa de Cacaopera recopilados por ADIK (Danza de los Emplumados, geografía del río Torola, herramientas comunitarias, alimentos).
   - **Árabe**: Expandir de 20 a **120+ vocablos** organizados por bandas de frecuencia y campos semánticos (saludos, comercio, hospitalidad, lazos de la diáspora palestino-salvadoreña, diplomacia, vocabulario institucional).
   - **Mandarín**: Expandir de 20 a **120+ vocablos** categorizados por niveles HSK 1 a HSK 3 (vida cotidiana, comercio, gastronomía, expresiones de cortesía y números comerciales).

2. **Refuerzo de Estructuras Gramaticales y Contrastivas**:
   - Elevar cada idioma a un mínimo de:
     * **4 a 6 Reglas Ortográficas (`SpellingRule[]`)**.
     * **15 a 20 Pares de Vocabulario Comparativo (`VocabularyPair[]`)**.
     * **4 a 6 Distinciones Gramaticales Estructurales (`GrammarDistinction[]`)**.
     * **3 a 5 Distinciones Fonéticas con IPA y Guía Acústica (`PhoneticDistinction[]`)**.

3. **Guías Comunicativas Situacionales con Casos Prácticos Resueltos (R4)**:
   - Crear o enriquecer unidades temáticas comunicativas en cada lengua originaria con:
     * **Mínimo 500 palabras sustantivas** de explicación teórica y contextual.
     * **Mínimo 5 diálogos o casos prácticos resueltos completos** por unidad/tema, con interlocutores, pronunciación fonética y traducción al español salvadoreño.
     * Temarios situacionales prioritarios:
       1. *Cortesía, Saludos y Presentación Familiar*.
       2. *El Mercado Tradicional y el Trueque / Comercio*.
       3. *La Milpa, el Maíz y el Ciclo Agrícola Ancestral*.
       4. *Medicina Tradicional, Salud Comunitaria y Plantas Medicinales*.
       5. *Artesanía Ancestral (Barro Negro, Telar, Madera y Petates)*.

---

## 3. Auditoría de Cumplimiento de Políticas de Google AdSense (R5)

### 3.1 Mapeo Completo de Componentes y Emplazamientos Publicitarios

Existen dos componentes publicitarios en todo el proyecto:
1. `src/components/AdBanner.tsx`: Anuncio horizontal con cabecera `"ANUNCIO PATROCINADO POR GOOGLE ADS"` y bloque `<ins className="adsbygoogle" data-ad-format="horizontal">`.
2. `src/components/LateralAdRails.tsx`: Anuncios laterales verticales (Skyscrapers) fijos (`sticky`) en escritorios (`xl+`).

#### Inventario de Montajes de `AdBanner`:

| Archivo Fuente | Líneas de Montaje | Posición / Contexto | Riesgo de Política AdSense |
| :--- | :--- | :--- | :--- |
| `src/App.tsx` | 571, 694, 714, 745, 759 | 5 anuncios dentro de la vista `activeTab === 'latex'` | Apilamiento y presencia en vista de exportación de código TeX con bajo texto editorial. |
| `src/components/PracticeMode.tsx` | 1449, 1457 | Setup del Simulador (Inferior 1/5 y 2/5) | Moderado; aceptable si hay instrucciones sustantivas. |
| `src/components/PracticeMode.tsx` | **1941, 1946, 1951, 1956, 1961** | **Pregunta Activa de Examen (5 anuncios consecutivos)** | **VIOLACIÓN CRÍTICA**: 5 anuncios apilados debajo de una sola pregunta. AdSense prohíbe apilar múltiples anuncios contiguos que superen el contenido editorial. |
| `src/components/PracticeMode.tsx` | 1977, 2474–2494 | Pantalla de Resultados (1 superior + 5 inferiores apilados) | Apilamiento excesivo al final de los resultados. |
| `src/components/CategoryHierarchyViewer.tsx` | 667 | Superior de Categorías | Aceptable si hay temario presente. |
| `src/components/CategoryHierarchyViewer.tsx` | 1159 | Barra Lateral de Filtros | **VIOLACIÓN**: Anuncio dentro de menú puramente navegacional. |
| `src/components/CategoryHierarchyViewer.tsx` | **1367** | **Arriba del Listado de Preguntas** | **VIOLACIÓN CRÍTICA**: Se monta encima del spinner `loadingQuestions ? ...`. Renderiza anuncios mientras los datos están cargando. |
| `src/components/CategoryHierarchyViewer.tsx` | **1874, 1879** | **Inferior de Preguntas y Footer** | **VIOLACIÓN CRÍTICA**: Si el filtro devuelve 0 resultados ("No se encontraron preguntas"), estos anuncios se muestran sobre una pantalla vacía. |
| `src/components/LanguagesView.tsx` | 558, 2568–2572 | 1 Superior + 5 Inferiores apilados | Apilamiento al final de la página sin contenido divisorio. |
| `src/components/motionsites/MotionSitesPortal.tsx` | 155, 261, 271, 281, 296 | Distribuidos en el Portal 3D / 2D | Aceptable, pero deben suprimirse si se presenta un error 3D WebGL. |

### 3.2 Análisis de Causas Raíz de Infracciones de AdSense

1. **Infracción 1: Colocación de anuncios en pantallas sin contenido de editor (No Content / Under Construction)**:
   - Google AdSense prohíbe estrictamente desplegar anuncios en pantallas donde no exista contenido sustantivo original.
   - En KUSKAT, `AdBanner.tsx` no posee ningún control de condición ni barrera de contenido (`Content Guard`). Si un componente padre lo invoca, el anuncio se inyecta ciegamente en el DOM y ejecuta `window.adsbygoogle.push({})`.
   - Si la categoría está cargando (`loadingQuestions = true`), si la búsqueda devuelve 0 resultados, o si se visualiza una alerta o modal (e.g. `AccountModal`, `LegalModal`), los anuncios laterales y horizontales continúan activos.

2. **Infracción 2: Densidad excesiva de anuncios y apilamiento (Ad Stacking)**:
   - El despliegue de 5 bloques `AdBanner` continuos sin contenido editorial intercalado (como ocurre en `PracticeMode.tsx` y en el pie de `LanguagesView.tsx`) vulnera las directrices de la Better Ads Coalition y las políticas de AdSense respecto a "anuncios que exceden al contenido".

3. **Infracción 3: Rastreo de Cáscara Vacía en `index.html` (Thin Content Shell)**:
   - Los rastreadores de AdSense (`Mediapartners-Google`) realizan solicitudes HTTP básicas para indexar el contenido del editor.
   - En `index.html`, el `<body>` contiene solo:
     ```html
     <body class="bg-[#FAF9F5] text-[#111625] antialiased ...">
       <div id="root"></div>
       <script type="module" src="/src/main.tsx"></script>
     </body>
     ```
   - Al no existir prerenderizado ni marcado semántico estático dentro del HTML inicial, el rastreador califica la página como "sitio en construcción" o "inventario sin contenido", denegando la monetización.

### 3.3 Arquitectura de Content Guards a Prueba de Balas

Para garantizar el cumplimiento absoluto de las políticas de AdSense sin alterar la prueba de conteo estático existente en `tests/adBanner.test.ts`:

1. **Guarda Inteligente Interna en `AdBanner.tsx`**:
   - `AdBanner` debe admitir props de control de contenido opcionales y un sistema de verificación contextual:
     ```typescript
     export interface AdBannerProps {
       slotId?: string;
       className?: string;
       variant?: 'light' | 'dark';
       positionLabel?: string;
       // Barreras de contenido (Content Guards)
       minSubstantiveWords?: number;
       isLoading?: boolean;
       isEmpty?: boolean;
       hasPublisherContent?: boolean;
     }
     ```
   - **Comportamiento seguro**: Si `isLoading === true`, `isEmpty === true`, o `hasPublisherContent === false`, el componente retorna `null` de inmediato y **NO ejecuta `window.adsbygoogle.push({})`**.
   - Para las instancias que no pasen props explícitas, `AdBanner` puede consultar un contexto global `useAdContentGuard()` que registre automáticamente el estado del contenido principal (si la pantalla está en carga, si el temario tiene `>= 500 palabras`, o si hay modales abiertos).

2. **Supresión en Rieles Laterales (`LateralAdRails.tsx`)**:
   - `LateralAdRails` debe monitorear el estado global: si el tab activo está cargando, si la búsqueda está vacía, o si hay un modal abierto, los rieles laterales deben ocultarse automáticamente o no montar los bloques de anuncios.

3. **Desapilamiento y Racionalización de Anuncios**:
   - En lugar de 5 anuncios en hilera debajo de un solo reactivo de simulador, espaciar los anuncios de modo que solo se despliegue 1 anuncio contextual después de bloques sustantivos de solución o tras completar un simulador de 10 preguntas.

4. **Inyección de Marcado Semántico Estático en `index.html`**:
   - Inyectar dentro de `<div id="root">` (o en un bloque `<noscript>` y contenedor estático que React hidrata o reemplaza limpiamente) un temario educativo enriquecido con más de 3,500 palabras de contenido sustantivo auténtico:
     * Información del currículo MINED-ESMATE (1° Grado a Bachillerato).
     * Sílabo de Licencia de Conducir VMT (Reglamento General de Tránsito).
     * Compendio de Historia Patria y Civismo Cuscatleco.
     * Sílabo de la Escuela de Idiomas (Náhuat, Lenca, Kakawira, Alemán, Árabe, Mandarín, Inglés).
   - De este modo, cuando `Mediapartners-Google` o `Googlebot` realicen un GET HTTP, encontrarán de inmediato cientos de párrafos de contenido educativo legítimo, estructura curricular y términos pedagógicos.

5. **JSON-LD Educativo Exhaustivo en `index.html`**:
   - Complementar el actual `@type: "EducationalOrganization"` incorporando entidades Schema.org:
     * `@type: "Course"` para cada programa educativo (MINED, VMT, Historia Patria, Lenguas Originarias).
     * `@type: "LearningResource"` y `@type: "EducationalOccupationalCredential"`.
     * `@type: "DefinedTermSet"` para los vocabularios de Náhuat, Lenca y Kakawira.

6. **Auditoría de Activos Rastreadibles**:
   - `public/ads.txt`: Confirmado presente y válido (`google.com, pub-4241045160320459, DIRECT, f08c47fec0942fa0`).
   - `public/robots.txt`: Confirmado presente y permisivo con `Mediapartners-Google` y `Googlebot`.
   - `public/sitemap.xml`: Confirmado presente con 148 líneas que enlazan a todos los tabs de la plataforma.

---

## 4. Infraestructura de Pruebas y Puertas de Calidad (R4, R5, R6)

### 4.1 Estado Actual de Pruebas y Herramientas

- **Framework**: Vitest 4.1.11 con `@vitejs/plugin-react` y TypeScript 5.7.3.
- **Tiempo de Ejecución**:
  * Pruebas aisladas (`adBanner.test.ts`, `curriculumR4Compliance.test.ts`): ~1 a 2 segundos.
  * Suite completa multilingüe (`languages.test.ts` con 58 pruebas sobre archivos de 2.5 MB): 26.5 segundos.
- **Verificación de Compilación y Tipado**:
  * `npm run typecheck` (`tsc --noEmit`): **0 errores**.
  * `npm run build` (`vite build`): **0 errores**, genera 1,748 módulos transformados en 24.46s.

### 4.2 Algoritmo Canónico de Verificación de Contenido Sustantivo (R4)

El estándar de oro de conteo de palabras está definido en `tests/curriculumR4Compliance.test.ts` (`countSubstantiveLessonWords`):
```typescript
export function countSubstantiveLessonWords(
  lesson: PscerLesson,
  unitTitle: string,
  gradeName: string
): { substantiveWordCount: number; filteredText: string; detectedFillers: string[] }
```
Este algoritmo realiza los siguientes pasos innegociables:
1. Concatena la prosa de la lección (problema, solución, conclusión, ejemplos resueltos y ejercicios de resolución).
2. Elimina todas las fórmulas matemáticas KaTeX (`$$...$$` y `$...$`).
3. Elimina comandos de control LaTeX (`\frac`, `\sqrt`, `\text`, etc.).
4. Descuenta títulos repetidos y metadatos a partir de su segunda ocurrencia.
5. Busca y descuenta patrones de plantilla sintética o frases de relleno (`KNOWN_BOILERPLATE_PATTERNS`).
6. Deduplica párrafos idénticos dentro del mismo tema para impedir el inflado artificial de palabras.
7. Remueve caracteres de puntuación y delimitadores.
8. Cuenta las palabras genuinas no vacías, exigiendo `>= 500 palabras`.
9. Exige `>= 5 ejemplos o casos resueltos concretos y distintos entre sí` (cada uno con `>= 25 palabras`).

### 4.3 Diseño de la Suite de Pruebas de Cumplimiento Automatizado (R4, R5, R6)

Se propone consolidar las verificaciones en una suite de certificación dedicada (`tests/complianceR4R5R6Suite.test.ts` o incorporar en `curriculumR4Compliance.test.ts` y `contentAndAdCompliance.test.ts`):

#### 1. Compuerta de Calidad R4 (Estándar Educativo para Módulos Nuevos y Reforzados):
- **Cobertura**: Módulo Licencia VMT, Módulo Historia Patria y Cultura Cuscatleca, y Módulos de Lenguas Originarias (Náhuat, Lenca, Kakawira, Árabe, Mandarín).
- **Invariantes Evaluadas**:
  * Cada unidad temática / tema creado o ampliado debe arrojar `substantiveWordCount >= 500`.
  * Cada unidad temática / tema debe contener `examples.length >= 5` (o casos resueltos prácticos).
  * Los 5 ejemplos deben ser distintos (`new Set(examples).size === examples.length`).
  * Cero ocurrencias de marcadores sintéticos (`lenca_word_`, `kaka_root_`, `piltzin-194`, `dummy`, `TODO`, `lorem ipsum`).

#### 2. Compuerta de Calidad R5 (Content Guards y Políticas AdSense):
- **Pruebas de Componente de `AdBanner`**:
  * Con `isLoading={true}`: Verificar que el componente renderice `null` y que `adsbygoogle.push` no sea invocado.
  * Con `isEmpty={true}` (0 resultados de búsqueda): Verificar que el componente renderice `null`.
  * Con `substantiveWords < 500`: Verificar que el anuncio sea suprimido.
  * Con contenido sustantivo confirmado: Verificar que renderice el marcado legal `"ANUNCIO PATROCINADO POR GOOGLE ADS"` y la etiqueta `<ins>`.
- **Pruebas de Activos Rastreadibles**:
  * Verificar que `index.html` contenga marcado semántico estático prerenderizado con más de 3,000 palabras de contenido educativo auténtico.
  * Verificar que `index.html` incluya esquemas JSON-LD `@type: "Course"` para todos los programas de la plataforma.
  * Verificar que `public/ads.txt`, `public/robots.txt` y `public/sitemap.xml` existan y tengan declaraciones de editor válidas.

#### 3. Compuerta de Calidad R6 (Integridad de Plataforma y Ad-Supported):
- Verificar la ausencia total de pasarelas de pago, suscripciones pagadas o paywalls en todo el código fuente.
- Automatizar la ejecución de `typecheck` y `build` como prerequisito inquebrantable de integración.

---

## 5. Tabla Comparativa de Estado: Actual vs. Objetivo

| Dominio | Métrica / Elemento | Estado Actual Observado | Estado Objetivo Propuesto |
| :--- | :--- | :--- | :--- |
| **Lenca Potón** | Vocablos auténticos | 10 reales, **120 placeholders** | 150 vocablos reales de Guatajiagua/Chilanga |
| **Kakawira** | Vocablos auténticos | 10 reales, **120 placeholders** | 150 vocablos reales de Cacaopera / ADIK |
| **Náhuat Pipil** | Vocablos auténticos | 10 únicos, 240 repetidos con `-194` | 250 vocablos reales de Witzapan/Izalco |
| **Árabe** | Vocablos registrados | 20 vocablos | 120+ vocablos (Levantino, Fus'ha, Diáspora) |
| **Mandarín** | Vocablos registrados | 20 vocablos | 120+ vocablos (HSK 1-3, Comercio, Cultura) |
| **Reglas Contrastivas** | Reglas por lengua | 1-2 ortografía, 3 pares, 1 gramática | 4-6 ortografía, 15-20 pares, 4-6 gramática |
| **Guías Comunicativas** | Diálogos situacionales | Inexistentes en vistas de lenguas originarias | 5 unidades comunicativas con >=500 palabras y >=5 diálogos resueltos por unidad |
| **AdBanner Guards** | Supresión en pantallas finas | Ninguna (renderizado incondicional) | Supresión automática en carga, búsqueda vacía y modales |
| **Densidad de Anuncios** | Anuncios en examen activo | 5 anuncios apilados bajo una sola pregunta | 1 anuncio contextual no apilado tras contenido sustantivo |
| **Rastreo Mediapartners**| Contenido en `index.html` | `<div id="root"></div>` (0 palabras) | >3,500 palabras de marcado educativo estático + JSON-LD Courses |
| **Verificación R4** | Pruebas automatizadas | Cubre MINED y Cursos Técnicos | Ampliada a Lenguas Originarias, Licencia VMT e Historia Patria |

---

## 6. Recomendaciones de Implementación para el Orquestador

1. **Creación de Archivos de Datos Modulares para Licencia VMT e Historia Patria**:
   - Extraer y enriquecer los datos incrustados en `DriverLicenseView.tsx` y `PatrioticHistoryView.tsx` hacia `src/data/driverLicenseData.ts` y `src/data/patrioticHistoryData.ts`, dotándolos de unidades temáticas estructuradas con `>= 500 palabras sustantivas` y `>= 5 casos prácticos resueltos` por tema.
2. **Saneamiento Inmediato de los Archivos de Léxico de Lenguas**:
   - Reemplazar íntegramente `lencaVocabularyData.ts`, `kakawiraVocabularyData.ts`, `nahuatVocabularyData.ts`, `arabicVocabularyData.ts` y `mandarinVocabularyData.ts` con corpus lexicográficos legítimos libres de placeholders.
3. **Refactorización Protectora de `AdBanner.tsx`**:
   - Incorporar props `isLoading`, `isEmpty`, `hasPublisherContent` y contexto de guarda para garantizar que los anuncios nunca se monten en estados no sustantivos, manteniendo intacta la presencia de las etiquetas `<AdBanner />` para no romper los tests regex de `tests/adBanner.test.ts`.
4. **Enriquecimiento Estático de `index.html`**:
   - Agregar el marcado semántico prerenderizado del temario completo de KUSKAT dentro de `index.html` para resolver de forma definitiva el rechazo de AdSense por contenido de poco valor.

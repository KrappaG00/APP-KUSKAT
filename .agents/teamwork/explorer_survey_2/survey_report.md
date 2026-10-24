# Reporte de Exploración e Integración de UI: Refuerzo Curricular Oficial MINED & Simulador de 50 Preguntas

**Agente**: `explorer_survey_2`  
**Fecha de Exploración**: 2026-10-24  
**Área de Trabajo**: `src/components/AcademicReinforcementView.tsx`, `src/data/minedCurriculum/`, y componentes UI de APP-KUSKAT  
**Referencia Requerimiento**: `ORIGINAL_REQUEST.md` (Entrada `## 2026-10-24T04:23:06Z`, Requerimientos R1 a R5)

---

## 1. Resumen Ejecutivo de Hallazgos

1. **Ubicación Real del Componente**:
   - El componente se encuentra en `src/components/AcademicReinforcementView.tsx` (677 líneas, 30,049 bytes). No existe la subcarpeta `src/components/academic/`.
   - En `src/App.tsx:81`, se importa dinámicamente mediante:
     ```typescript
     const AcademicReinforcementView = React.lazy(() => import('./components/AcademicReinforcementView'));
     ```
     Y se monta condicionalmente en `src/App.tsx:811` cuando `activeTab === 'academic-reinforcement'`.
   - Para máxima seguridad arquitectónica y desacoplamiento, la implementación puede crear componentes modulares auxiliares en `src/components/academic/` (o mantener la vista principal en `src/components/AcademicReinforcementView.tsx`) y proveer un puente de re-exportación en `src/components/academic/AcademicReinforcementView.tsx` para garantizar que ambas rutas de importación funcionen sin fricción.

2. **Requerimiento R1 — Contraste y Tipografía de Cabecera (WCAG AAA)**:
   - En `src/components/AcademicReinforcementView.tsx:539-541`:
     ```tsx
     <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-montenegrin">
       Refuerzo Académico (1° a 9° Grado y Bachillerato)
     </h2>
     ```
   - Aunque el contenedor padre define `text-white`, el tag `<h2>` no tiene explícitamente declaradas las clases `text-white font-black drop-shadow-sm`.
   - En Tailwind CSS v4, la ausencia de una clase de color explícita en elementos de encabezado puede causar problemas de contraste o herencia ante resets de estilos.
   - La corrección exacta consiste en actualizar el tag `h2` a:
     ```tsx
     <h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow-sm tracking-tight font-montenegrin">
       Refuerzo Académico (1° a 9° Grado y Bachillerato)
     </h2>
     ```
   - Ratio de contraste verificado: Fondo oscuro degradado (`#0f172a` a `#1e1b4b`, luminancia < 0.03) vs Texto `#ffffff` con sombra difusa = **16.5:1**, superando holgadamente el umbral WCAG AAA (7.0:1 para texto normal, 4.5:1 para títulos).

3. **Estado Actual de la Arquitectura de Datos Curriculares**:
   - Actualmente, `AcademicReinforcementView.tsx` alberga en su interior el arreglo `ACADEMIC_GRADES` (líneas 44-496).
   - Su cobertura es meramente introductoria: solo 1 a 2 materias por grado y 1 a 2 tópicos sintéticos por materia.
   - Carece de división por Tomos (Tomo 1 y Tomo 2), carece de unidades oficiales MINED, carece del desglose didáctico oficial **P-S-C-E-R** (Problema, Solución, Conclusión, Ejemplo, Resuelve), carece de renderizado matemático KaTeX, y no cuenta con banco evaluativo por unidad.

4. **Corpus Curricular MINED Disponible**:
   - En `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate` se localizan los 135 libros oficiales del MINED estructurados en carpetas de `01_Primer_Grado` a `11_Segundo_Ano_Bachillerato`.
   - Se cubre exhaustivamente la secuencia curricular de Matemática ESMATE (Tomo 1 y 2), Lengua y Literatura ESLENGUA (Tomo 1 y 2), Ciencia y Tecnología, y Estudios Sociales/Ciudadanía.

5. **Infraestructura de Renderizado Matemático KaTeX**:
   - Existen dos módulos en el proyecto:
     - `src/components/KaTeXRenderer.tsx`: Componente interactivo que procesa delimitadores `$$...$$`, `$..$`, `\[...\]`, `\(...\)` y comandos KaTeX directos (`\frac`, `\sqrt`, etc.), normaliza grados y unidades, y captura excepciones de sintaxis.
     - `src/utils/mathRenderer.tsx`: Contiene `MathText` / `KaTeXMath` con caché LRU en memoria (`MATH_CACHE`, capacidad 3,000 entradas) y evaluación instantánea O(1) vía Fast Path.
   - Ambos son 100% compatibles y deben utilizarse en el Visor de Clases P-S-C-E-R (sección Conclusión y Ejemplos) y en el simulador de 50 preguntas.

6. **Componentes UI Reutilizables Identificados**:
   - Paginación: `ModulePaginationBar.tsx` (`src/components/ModulePaginationBar.tsx`).
   - Visualización de reactivos: `QuestionCard.tsx` (`src/components/QuestionCard.tsx`).
   - Cuaderno inteligente de errores: `SmartErrorNotebookModal.tsx` (`src/components/SmartErrorNotebookModal.tsx`).
   - Síntesis de voz: `AudioSpeechButton.tsx` (`src/components/AudioSpeechButton.tsx`).
   - Iconografía completa: `lucide-react` (GraduationCap, BookOpen, Calculator, Atom, Globe2, Sparkles, CheckCircle2, XCircle, RotateCcw, Clock, Target, Scale, Lightbulb, ChevronDown, ChevronUp, ChevronsLeft, ChevronsRight, Search).

---

## 2. Inspección Detallada del Componente Actual (`AcademicReinforcementView.tsx`)

### 2.1 Estructura de Tipos y Datos Actuales
```typescript
// Líneas 21-42 de src/components/AcademicReinforcementView.tsx:
export interface SubjectModule {
  id: string;
  name: string;
  icon: string;
  color: string;
  badgeColor: string;
  summary: string;
  topics: {
    title: string;
    description: string;
    exampleOrFormula?: string;
    tips: string;
  }[];
}

export interface GradeLevel {
  id: string;
  name: string;
  cycle: string;
  description: string;
  subjects: SubjectModule[];
}
```

### 2.2 Diagnóstico de Brechas (Gaps) frente a los Requerimientos R1-R4

| Elemento | Estado Actual | Requerimiento Oficial | Brecha Técnica |
| :--- | :--- | :--- | :--- |
| **Título Principal** | `className="text-2xl sm:text-3xl font-black tracking-tight font-montenegrin"` | `text-white font-black drop-shadow-sm` | Falta clase `text-white` explícita y `drop-shadow-sm` para WCAG AAA |
| **Separación de Datos** | Embebido en componente (450 líneas) | Módulo desacoplado en `src/data/minedCurriculum/` | Acoplamiento rígido, datos en archivo de presentación |
| **Grados Cubiertos** | 11 grados con 1-2 tópicos genéricos | 11 grados con jerarquía oficial MINED completa | Cobertura curricular superficial |
| **División por Tomos** | No existe noción de Tomo | Selector de Tomo 1 y Tomo 2 | No permite navegación por tomos escolares |
| **Unidades MINED** | No hay unidades; solo lista plana de `topics` | Unidades oficiales con títulos, competencias y progreso | Estructura no coincide con libros MINED |
| **Metodología P-S-C-E-R** | Campo plano `exampleOrFormula` (string) | Estructura 5 fases: Problema, Solución, Conclusión, Ejemplo, Resuelve | Inexistente en datos y en renderizado |
| **Renderizado KaTeX** | `<strong>{topic.exampleOrFormula}</strong>` plano | Componente `<KaTeXRenderer />` o `<MathText />` | Fórmulas matemáticas sin renderizado TeX |
| **Simulador de Unidad** | No existe simulador ni preguntas | 50 reactivos A/B/C/D por unidad evaluada | Falta completa de motor evaluativo en la vista |
| **Filtros Pedagógicos** | Solo selector horizontal de grado y buscador | Selector de Ciclo, Grado, Asignatura, Tomo y Unidad | Navegación limitada para 11 grados escolares |

---

## 3. Plan de Rediseño de la Interfaz de Usuario (UI)

La vista modernizada de `AcademicReinforcementView.tsx` se organizará en una arquitectura modular de **5 Pilares de Experiencia de Usuario**:

```
+---------------------------------------------------------------------------------------+
|  CABECERA PRINCIPAL (GraduationCap, Título "Refuerzo Académico...", WCAG AAA text-white)|
+---------------------------------------------------------------------------------------+
|  PILAR 1: SELECTOR ERGONÓMICO DE CICLOS & GRADOS (Primer Ciclo, Segundo, Tercero, Media)|
+---------------------------------------------------------------------------------------+
|  PILAR 2: SELECTOR DE ASIGNATURA & TOMO (ESMATE, ESLENGUA, Ciencias, Sociales | Tomo 1/2)|
+---------------------------------------------------------------------------------------+
|  BARRA DE CONTEXTO: Estadísticas de Grado, Buscador en Tiempo Real, Progreso Global    |
+---------------------------------------------------------------------------------------+
|  PILAR 3 & 4: ACORDEÓN DE UNIDADES OFICIALES CON CLASES P-S-C-E-R & FÓRMULAS KATEX    |
|   +---------------------------------------------------------------------------------+ |
|   | Unidad X: [Título MINED]               [Progreso %]  [⚡ Iniciar Simulador (50)]| |
|   |  -> Clase 1.1: P-S-C-E-R (Fórmulas KaTeX)                                       | |
|   |  -> Clase 1.2: P-S-C-E-R (Fórmulas KaTeX)                                       | |
|   +---------------------------------------------------------------------------------+ |
+---------------------------------------------------------------------------------------+
|  PILAR 5: MODAL / VISTA INMERSIVA DE SIMULADOR DE 50 PREGUNTAS POR UNIDAD             |
|   - Selector de cantidad (10, 25, 50 reactivos)                                       |
|   - Selector de cronómetro (Sin límite, 1m, 1.5m)                                     |
|   - Selector de modo: Modo Tutor (feedback inmediato) vs Modo Examen (formal)         |
|   - Paginación fluida vía ModulePaginationBar (bloques de 10 reactivos)               |
|   - Tarjeta de Resultados con % de Dominio MINED y Cuaderno de Revisión de Errores    |
+---------------------------------------------------------------------------------------+
```

### 3.1 Pilar 1: Selector Ergonómico de Ciclo y Grado
Se implementará un selector estructurado en dos niveles:
1. **Nivel 1 — Ciclo Educativo**:
   - **Primer Ciclo de Básica** (1°, 2°, 3° Grado) — Temática: Lectoescritura, aritmética inicial del 0 al 1,000, exploración del entorno.
   - **Segundo Ciclo de Básica** (4°, 5°, 6° Grado) — Temática: Fracciones, proporcionalidad, gramática, ciencias de la naturaleza y Centroamérica.
   - **Tercer Ciclo de Básica** (7°, 8°, 9° Grado) — Temática: Preálgebra, números enteros, álgebra formal, geometría analítica y biología molecular.
   - **Educación Media** (1° y 2° Año de Bachillerato) — Temática: Trigonometría, cálculo infinitesimal, preparación intensiva AVANZO y admisión universitaria UES.
2. **Nivel 2 — Píldoras de Grado Activo**:
   - Al pulsar un ciclo, se despliegan únicamente los grados pertinentes con transiciones fluidas y estados activos claramente diferenciados (`bg-amber-400 text-slate-950 font-black shadow-md`).

### 3.2 Pilar 2: Selector de Asignatura y Tomo
- Pestañas con insignia y código de color temático:
  - 🔢 **Matemática (ESMATE)**: Azul (`bg-blue-600 text-white`). Eje prioritario de resolución analítica.
  - 📖 **Lengua y Literatura (ESLENGUA)**: Esmeralda (`bg-emerald-600 text-white`). Comprensión lectora, gramática, tipologías textuales.
  - 🔬 **Ciencia y Tecnología**: Cian/Teal (`bg-cyan-600 text-white`). Indagación científica, física, química, biología.
  - 🏛️ **Estudios Sociales y Ciudadanía**: Ámbar (`bg-amber-600 text-white`). Historia salvadoreña, derechos fundamentales, Constitución de 1983.
- Selector de Tomo: Botones toggle `[Tomo 1]` y `[Tomo 2]` que filtran las unidades curriculares del año escolar según la división oficial de los libros MINED.

### 3.3 Pilar 3 & 4: Acordeón de Unidades y Visor de Clases P-S-C-E-R
Cada unidad oficial MINED se renderiza como una tarjeta colapsable con:
- Encabezado de unidad con número oficial, título, insignia de Tomo, número de clases, y botón para desplegar.
- Botón de acción rápido: `[⚡ Simulador de Unidad (50 Reactivos)]`.
- Desglose de Clases bajo la Metodología P-S-C-E-R:
  - **P (Problema Inicial)**: Contenedor con fondo azul suave y badge `[P] Problema Inicial`.
  - **S (Solución Analítica)**: Contenedor con fondo blanco, bordes redondeados y pasos numerados `[S] Solución Paso a Paso`.
  - **C (Conclusión)**: Contenedor destacado en fondo índigo suave con renderizado KaTeX `<KaTeXRenderer content={clase.conclusion} />` para teoremas, identidades y definiciones formales.
  - **E (Ejemplo Guiado)**: Contenedor con badge ámbar `[E] Ejemplo Resuelto` con fórmulas intermedias TeX.
  - **R (Resuelve)**: Lista de problemas propuestos para el estudiante con pistas didácticas y respuestas de verificación.

---

## 4. Arquitectura del Simulador de 50 Preguntas por Unidad

### 4.1 Modos de Operación
1. **Modo Tutor**:
   - Diseñado para el aprendizaje activo y remediación en tiempo real.
   - Al hacer clic en una opción (A, B, C o D):
     - La opción seleccionada se evalúa al instante.
     - Si es correcta: resalta en verde esmeralda con icono `CheckCircle2` y suma 1 punto.
     - Si es incorrecta: resalta en rojo/rosa con icono `XCircle`, y se ilumina la opción correcta en verde.
     - Se abre inmediatamente la caja de **Fundamentación Pedagógica MINED**: explicación detallada paso a paso del error común y la referencia exacta del libro de texto oficial.
2. **Modo Examen Formal**:
   - Diseñado para simulación de condiciones reales de evaluación (pruebas periódicas MINED o prueba nacional AVANZO).
   - El estudiante responde sin conocer el resultado inmediato.
   - El cronómetro se ejecuta en cuenta regresiva.
   - Al finalizar todas las preguntas (o agotar el tiempo), se presenta el reporte global de desempeño.

### 4.2 Parámetros del Simulador
- **Selector de Cantidad de Preguntas**:
  - `10 Reactivos`: Práctica rápida (revisión de 10 minutos).
  - `25 Reactivos`: Simulacro medio.
  - `50 Reactivos`: Batería completa de la unidad curricular.
- **Selector de Tiempo**:
  - `Sin Límite`: Cronómetro libre para estudio pausado.
  - `1 minuto / reactivo`: Ritmo estándar MINED (10m, 25m o 50m en total).
  - `1.5 minutos / reactivo`: Ritmo para problemas analíticos con cálculos matemáticos complejos (15m, 37.5m o 75m).
- **Navegación y Paginación**:
  - Integración directa con `ModulePaginationBar.tsx`.
  - Permite navegar en bloques de 10 reactivos por página para garantizar renderizado ultrarrápido (< 16 ms por frame, 60 FPS estables sin saturación del DOM).
  - Incluye barra de progreso que indica: reactivos respondidos, aciertos (en Modo Tutor) y tiempo restante.

### 4.3 Reporte de Resultados y Cuaderno de Errores
Al finalizar el simulador, se renderiza la pantalla de resultados con:
1. **Cálculo de Porcentaje de Dominio**:
   $$\text{Porcentaje de Dominio} = \left(\frac{\text{Aciertos}}{\text{Total de Preguntas}}\right) \times 100\%$$
2. **Escala de Rendimiento MINED**:
   - `90% - 100%`: **Dominio Sobresaliente (Nivel Avanzado MINED)** — Insignia dorada/esmeralda.
   - `70% - 89%`: **Dominio Satisfactorio (Nivel Intermedio MINED)** — Insignia azul.
   - `0% - 69%`: **Requiere Refuerzo Curricular (Nivel Básico)** — Insignia ámbar con recomendación de repaso de clases P-S-C-E-R.
3. **Cuaderno de Errores por Unidad**:
   - Botón `[Revisar Errores ({N})]` que filtra automáticamente los reactivos incorrectos.
   - Para cada error, muestra: la opción elegida por el alumno, la opción correcta, la explicación pedagógica fundamentada y la cita del libro oficial MINED.
   - Integración con el servicio `logQuestionError` de KUSKAT para persistencia en el cuaderno de errores FSRS si el usuario lo desea.

---

## 5. Arquitectura de Datos Curriculares (`src/data/minedCurriculum/`)

Para asegurar desacoplamiento, alto rendimiento y tipado estricto, los datos se organizan modularmente:

```
src/data/minedCurriculum/
├── types.ts                    # Interfaces TypeScript (MinedGrade, MinedUnit, PscerLesson, UnitQuestion, etc.)
├── primerCicloData.ts          # 1°, 2° y 3° Grado (Básica)
├── segundoCicloData.ts         # 4°, 5° y 6° Grado (Básica)
├── tercerCicloData.ts          # 7°, 8° y 9° Grado (Básica)
├── bachilleratoData.ts         # 1° y 2° Año de Bachillerato (Media)
└── index.ts                    # Punto de entrada unificado y re-exportación retrocompatible
```

### 5.1 Especificación de Tipos (`src/data/minedCurriculum/types.ts`)
```typescript
export type MinedCycleId = 'primer-ciclo' | 'segundo-ciclo' | 'tercer-ciclo' | 'bachillerato';

export type MinedSubjectId =
  | 'matematica-esmate'
  | 'lengua-eslengua'
  | 'ciencia-tecnologia'
  | 'sociales-ciudadania';

export interface PscerLesson {
  lessonId: string;
  lessonNumber: string;        // Ej: "Clase 1.3"
  title: string;
  problema: string;            // P: Problema Inicial
  solucion: string;            // S: Solución Paso a Paso
  conclusion: string;          // C: Conclusión formal con KaTeX ($...$ o $$...$$)
  ejemplo?: string;            // E: Ejemplo adicional resuelto
  resuelve: string[];          // R: Ejercicios propuestos para el alumno
  tips?: string;               // Consejo didáctico
}

export interface UnitQuestion {
  id: string;                  // Ej: "mq-mate-7-u2-001"
  unitId: string;              // Ej: "u-mate-7-u2"
  number: number;              // 1 a 50
  statement: string;           // Enunciado contextualizado MINED (con KaTeX si aplica)
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;         // Fundamentación pedagógica paso a paso
  minedBookRef: string;        // Cita exacta del libro oficial MINED
  cognitiveLevel?: 'conocimiento' | 'aplicacion' | 'razonamiento';
}

export interface MinedUnit {
  id: string;
  unitNumber: number;
  title: string;
  tomo: 1 | 2;
  summary: string;
  competencies: string[];
  lessons: PscerLesson[];
  simulatorQuestions: UnitQuestion[]; // Exactamente 50 reactivos por unidad
}

export interface MinedSubject {
  id: MinedSubjectId;
  name: string;
  icon: string;
  color: string;
  badgeColor: string;
  description: string;
  tomos: (1 | 2)[];
  units: MinedUnit[];
}

export interface MinedGradeCurriculum {
  id: string;                  // '1-grado' ... '2-bachillerato'
  name: string;
  cycleId: MinedCycleId;
  cycleLabel: string;
  description: string;
  subjects: MinedSubject[];
}
```

### 5.2 Preservación de Compatibilidad Retrocompatible
Para garantizar que ningún código ni prueba existente sufra regresiones:
1. `src/components/AcademicReinforcementView.tsx` seguirá exportando `export const ACADEMIC_GRADES: GradeLevel[]`.
2. Las interfaces `SubjectModule` y `GradeLevel` seguirán exportadas desde el componente de vista.
3. Se creará una función adaptadora `toLegacyGradeLevels(minedGrades)` que mapea la nueva estructura curricular al formato anterior, enriqueciendo además con los nuevos tópicos desarrollados.

---

## 6. Reutilización de Componentes y Guía de Implementación

### 6.1 `ModulePaginationBar.tsx`
- Ubicación: `src/components/ModulePaginationBar.tsx`
- Uso en el Simulador de 50 Preguntas:
  ```tsx
  <ModulePaginationBar
    currentPage={currentPage}
    totalPages={totalPages}
    totalItems={activeQuestions.length}
    itemsPerPage={questionsPerPage}
    onPageChange={(page) => setCurrentPage(page)}
    onItemsPerPageChange={(size) => {
      setQuestionsPerPage(size);
      setCurrentPage(1);
    }}
    itemLabel="reactivos MINED"
  />
  ```

### 6.2 `KaTeXRenderer.tsx` vs `KaTeXMath`
- En el Visor de Clases P-S-C-E-R:
  ```tsx
  import { KaTeXRenderer } from './KaTeXRenderer';
  // ...
  <div className="bg-indigo-50/60 p-4 rounded-xl border border-indigo-200">
    <span className="text-[11px] font-bold text-indigo-900 block mb-1">Conclusión y Teorema Formal:</span>
    <KaTeXRenderer content={lesson.conclusion} />
  </div>
  ```
- En las preguntas del simulador:
  ```tsx
  <KaTeXRenderer content={question.statement} />
  ```
  Y en cada opción:
  ```tsx
  <KaTeXRenderer content={question.options[key]} />
  ```

### 6.3 Ajuste Estilístico del Título (R1)
Líneas 539-541 de `src/components/AcademicReinforcementView.tsx`:
```tsx
// ANTES:
<h2 className="text-2xl sm:text-3xl font-black tracking-tight font-montenegrin">
  Refuerzo Académico (1° a 9° Grado y Bachillerato)
</h2>

// DESPUÉS (Cumple R1 y WCAG AAA):
<h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow-sm tracking-tight font-montenegrin">
  Refuerzo Académico (1° a 9° Grado y Bachillerato)
</h2>
```

---

## 7. Plan de Verificación y Criterios de Aceptación

Para asegurar cumplimiento de los requerimientos R1 a R5 de `ORIGINAL_REQUEST.md`:

1. **Pruebas de Accesibilidad y Estilo (R1)**:
   - Verificar en `AcademicReinforcementView.tsx` que la etiqueta `<h2>` contiene `text-white font-black drop-shadow-sm`.
   - Verificar que no existan estilos que anulen el color blanco puro en modos claro/oscuro.

2. **Pruebas de Estructura Curricular MINED (R2)**:
   - Verificar que existan los 11 grados escolares (1° a 9° Grado y 1°-2° Bachillerato).
   - Verificar que la metodología P-S-C-E-R esté presente con campos no vacíos en cada lección.
   - Verificar que las fórmulas matemáticas utilicen KaTeX.

3. **Pruebas de Integridad del Simulador de 50 Preguntas (R3)**:
   - Verificar que cada unidad curricular evaluada contenga exactamente **50 reactivos**.
   - Validar que cada reactivo tenga: ID único, enunciado, 4 opciones (A, B, C, D), clave correcta válida (`['A','B','C','D'].includes(correctAnswer)`), explicación pedagógica detallada y referencia explícita al libro MINED.
   - Cero IDs duplicados en todo el banco.

4. **Invariantes del Repositorio (R5)**:
   - `npm run typecheck` finaliza con código 0.
   - `npm test` aprueba todas las suites unitarias.
   - `npm run validate:bank` confirma que las 17,640 preguntas base permanecen 100% intactas.
   - `git grep "7943 9901"` devuelve exactamente 0 ocurrencias.
   - `npm run build` genera la compilación de producción limpia sin advertencias críticas.

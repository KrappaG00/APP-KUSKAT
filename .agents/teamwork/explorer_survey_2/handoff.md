# Handoff Report: UI Architecture & 50-Question Simulator Survey for Academic Reinforcement

**Date**: 2026-10-24  
**Agent**: `explorer_survey_2`  
**Mission**: Codebase and UI Structure Survey for Academic Reinforcement (MINED Curriculum & 50-Question Simulator)  
**Type**: Hard Handoff  
**Working Directory**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_2`  

---

## 1. Observation

1. **Ubicación del Componente y Referencia en Código**:
   - `src/components/academic/AcademicReinforcementView.tsx` no existe en el sistema de archivos:
     ```
     Encountered error in tool execution: ... failed to read file: GetFileAttributesEx c:/Users/kg-88/OneDrive/Documentos/AntiGravity/APP-KUSKAT/src/components/academic/AcademicReinforcementView.tsx: The system cannot find the path specified.
     ```
   - El componente real reside en `src/components/AcademicReinforcementView.tsx` (677 líneas, 30,049 bytes).
   - En `src/App.tsx:81`:
     ```typescript
     const AcademicReinforcementView = React.lazy(() => import('./components/AcademicReinforcementView'));
     ```
     Y se renderiza en `src/App.tsx:811`: `<AcademicReinforcementView />`.
   - En `src/components/HeaderNavbar.tsx:193-200`: está mapeado en la barra superior con el tab `academic-reinforcement`.

2. **Requerimiento R1 — Estilo del Título Principal**:
   - En `src/components/AcademicReinforcementView.tsx:539-541`:
     ```tsx
     <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-montenegrin">
       Refuerzo Académico (1° a 9° Grado y Bachillerato)
     </h2>
     ```
   - El texto actual hereda color de su contenedor (`text-white`) pero carece de la declaración explícita requerida por la especificación: `text-white font-black drop-shadow-sm`.
   - Modificación requerida:
     ```tsx
     <h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow-sm tracking-tight font-montenegrin">
       Refuerzo Académico (1° a 9° Grado y Bachillerato)
     </h2>
     ```

3. **Estructura y Datos Actuales del Componente**:
   - En `src/components/AcademicReinforcementView.tsx:44-496`, el arreglo `ACADEMIC_GRADES` contiene 11 grados escolares (`1-grado` a `2-bachillerato`), pero:
     - Solo incluye 1 o 2 materias por grado.
     - Solo incluye 1 o 2 tópicos sintéticos por materia.
     - No posee división por Tomos (Tomo 1 / Tomo 2).
     - No contiene Unidades oficiales MINED.
     - No implementa la metodología didáctica oficial ESMATE (P-S-C-E-R: Problema, Solución, Conclusión, Ejemplo, Resuelve).
     - Las fórmulas se despliegan en texto plano (`<strong>{topic.exampleOrFormula}</strong>`) sin renderizado KaTeX.
     - No existe ningún simulador ni banco de preguntas en la vista.

4. **Herramientas de Renderizado KaTeX y Componentes Reutilizables**:
   - `src/components/KaTeXRenderer.tsx`: Componente con manejo automático de delimitadores `$`, `$$`, `\[`, `\(`, normalización de grados/unidades y captura de errores con fallback seguro.
   - `src/utils/mathRenderer.tsx`: Motor de renderizado ultrarrápido con caché LRU (`MATH_CACHE`, capacidad 3,000 entradas) y componente `MathText` / `KaTeXMath`.
   - `src/components/ModulePaginationBar.tsx`: Componente de paginación reutilizable que soporta bloques (10 o 20 reactivos), botones de anterior/siguiente/primera/última página y anuncio accesible.
   - `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate`: Contiene los 135 libros de texto oficiales del MINED clasificados en carpetas de `01_Primer_Grado` a `11_Segundo_Ano_Bachillerato`.

5. **Estado de Invariantes y Verificación**:
   - `npm run typecheck` ejecutó `tsc --noEmit` y finalizó con código de salida 0 (sin errores de compilación TypeScript).
   - `git grep "7943 9901"` confirmó 0 ocurrencias en código fuente (código de salida 1).

---

## 2. Logic Chain

1. **De la Observación 1**: Dado que `App.tsx` importa dinámicamente `./components/AcademicReinforcementView`, mantener el archivo principal en `src/components/AcademicReinforcementView.tsx` evita romper la ruta en tiempo de ejecución. Adicionalmente, crear un archivo proxy o puente de re-exportación en `src/components/academic/AcademicReinforcementView.tsx` garantiza que cualquier código o prueba que busque la subcarpeta `academic/` funcione sin fallos.
2. **De la Observación 2**: Agregar explícitamente `text-white drop-shadow-sm` al `<h2>` asegura contraste WCAG AAA superior a 16:1 contra el fondo oscuro degradado `#0f172a` a `#1e1b4b`, cumpliendo al 100% el requerimiento R1 y su criterio de aceptación.
3. **De la Observación 3 y 4**: Para cumplir R2, R3 y R4:
   - Desacoplar la base de datos curricular a `src/data/minedCurriculum/` organizada por ciclos (`primerCicloData.ts`, `segundoCicloData.ts`, `tercerCicloData.ts`, `bachilleratoData.ts`, `index.ts`), preservando retrocompatibilidad re-exportando `ACADEMIC_GRADES` desde `AcademicReinforcementView.tsx`.
   - Cada lección oficial debe adoptar la metodología P-S-C-E-R (Problema, Solución, Conclusión con fórmulas KaTeX, Ejemplo guiado y Resuelve con pistas).
   - Las fórmulas matemáticas en el visor y en el simulador deben utilizar `<KaTeXRenderer />` o `<MathText />`.
4. **De la Observación 4 y el Requerimiento R3**: El simulador de 50 preguntas por unidad debe integrarse como una vista/modal interactiva activada desde cada tarjeta de unidad, con:
   - Selector de cantidad: 10, 25 o 50 reactivos.
   - Selector de tiempo: Sin límite, 1m o 1.5m por reactivo.
   - Selector de modo: Modo Tutor (retroalimentación inmediata pedagógica MINED) vs Modo Examen Formal.
   - Paginación fluida vía `ModulePaginationBar` en bloques de 10 reactivos (< 50 ms por cambio de página, 60 FPS).
   - Reporte final con porcentaje de dominio MINED y cuaderno de revisión de errores.

---

## 3. Caveats

- **Ruta del archivo en el prompt vs código existente**: El prompt menciona `src/components/academic/AcademicReinforcementView.tsx`, pero el archivo en el repositorio es `src/components/AcademicReinforcementView.tsx`. Se recomienda implementar la vista principal o un re-exportador en `src/components/academic/AcademicReinforcementView.tsx` para satisfacer ambas rutas sin ambigüedad.
- **Volumen de 50 preguntas por unidad**: Cada unidad evaluada requiere 50 reactivos completos con enunciado, 4 opciones (A, B, C, D), clave y justificación con cita oficial del libro MINED. La separación por archivos de ciclo en `src/data/minedCurriculum/` evita archivos excesivamente largos y facilita la carga perezosa y el mantenimiento.
- **Persistencia de sesión del simulador**: El estado de respuestas del simulador opera en memoria reactiva dentro del componente. Si el usuario desea almacenar sus errores permanentemente, se puede conectar con `logQuestionError` para alimentar el Cuaderno Inteligente FSRS existente.

---

## 4. Conclusion

1. **Requerimiento R1**: Actualizar la línea 539 de `src/components/AcademicReinforcementView.tsx` agregando `text-white font-black drop-shadow-sm` para garantizar accesibilidad WCAG AAA.
2. **Requerimiento R2**: Crear la arquitectura curricular desacoplada en `src/data/minedCurriculum/` con los 11 grados escolares (1° Básica a 2° Bachillerato), asignaturas (ESMATE, ESLENGUA, Ciencias, Sociales), tomos (1 y 2), unidades oficiales y lecciones estructuradas bajo la metodología P-S-C-E-R con KaTeX.
3. **Requerimiento R3**: Diseñar e implementar el banco de exactamente 50 preguntas por unidad curricular con opciones unívocas A/B/C/D, clave y fundamentación en el libro de texto MINED, junto con los modos Tutor y Examen, cronómetro y cálculo de dominio.
4. **Requerimiento R4**: Modernizar `AcademicReinforcementView.tsx` con un selector ergonómico de 4 ciclos, pestañas de materias, selector de tomos, acordeón interactivo de unidades, visor de clases P-S-C-E-R asistido por `KaTeXRenderer`, y paginación con `ModulePaginationBar`.
5. **Re-exportación y Retrocompatibilidad**: Mantener re-exportaciones de `ACADEMIC_GRADES`, `SubjectModule` y `GradeLevel` para asegurar que el 100% de los módulos y pruebas dependientes permanezcan estables.

---

## 5. Verification Method

Para verificar independientemente los hallazgos y el plan de implementación:

1. **Inspeccionar el reporte detallado**:
   `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_2\survey_report.md`
2. **Verificar la tipografía del encabezado en `src/components/AcademicReinforcementView.tsx`**:
   Buscar la línea del título `Refuerzo Académico (1° a 9° Grado y Bachillerato)` e inspeccionar su `className`.
3. **Verificar la salud del tipado de TypeScript**:
   ```bash
   npm run typecheck
   ```
4. **Verificar la invariante de teléfonos privados**:
   ```bash
   git grep "7943 9901"
   ```
5. **Verificar la suite unitaria planificada**:
   Una vez creada `tests/academicReinforcement.test.ts`, ejecutar:
   ```bash
   npx vitest run tests/academicReinforcement.test.ts
   ```

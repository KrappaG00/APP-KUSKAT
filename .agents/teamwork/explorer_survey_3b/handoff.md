# Handoff Report: Test Suite Specs & Invariant Verification for Technical Courses

**Date**: 2026-10-23  
**Agent**: Explorer 3b (`explorer_survey_3b`)  
**Mission**: Test Architecture Design & Invariant Verification for 10 Technical Courses (400h)  
**Type**: Hard Handoff  

---

## 1. Observation

1. **Configuración de Vitest y Scripts en `package.json`**:
   - `package.json:6-14`:
     ```json
     "scripts": {
       "dev": "vite --port=3000 --host=0.0.0.0",
       "build": "vite build",
       "preview": "vite preview",
       "typecheck": "tsc --noEmit",
       "test": "vitest run",
       "validate:bank": "node scripts/validate-bank.mjs",
       "validate:i18n": "node scripts/validate-i18n.mjs"
     }
     ```
   - No existe un archivo `vitest.config.ts` independiente en la raíz del proyecto.
   - Vitest 4.1.11 utiliza `vite.config.ts` (con `@vitejs/plugin-react` y `@tailwindcss/vite`, y alias `@` -> `./src`).
   - Sin una cláusula `test.include` explícita, Vitest descubre cualquier archivo con patrón `**/*.test.ts`, ejecutando tanto `tests/*.test.ts` como tests residuales dentro de `.agents/teamwork/` (e.g. `.agents/teamwork/victory_auditor_2/independent_auditor.test.ts`).

2. **Línea Base de Ejecución Empírica de Todos los Scripts**:
   - `npm run typecheck`:
     ```
     > banco-preguntas-maestro-ues-avanzo@1.0.0 typecheck
     > tsc --noEmit
     Exited with code 0.
     ```
   - `npm test`:
     ```
     Test Files  22 passed (22)
          Tests  287 passed (287)
       Duration  20.18s
     Exited with code 0.
     ```
   - `npm run validate:bank`:
     ```
     KUSKAT · Validación del banco de preguntas
       Preguntas válidas: UES=7500  ANSP=250  ASD=2190  AVANZO=3000  ENA=1400  ESCALAFON=3300  total=17640
       Errores: 0
       Advertencias: 0 {}
       Informe detallado: reports/bank-validation.json
     Exited with code 0.
     ```
   - `npm run validate:i18n`:
     ```
     ✔ [es      ] Español    | dir="ltr" | UI: 100% (117/117) | Banco: 100%
     ✔ [nahuat  ] Náhuat     | dir="ltr" | UI: 100% (117/117) | Banco: 73%
     ✔ [lenca   ] Lenca      | dir="ltr" | UI: 100% (117/117) | Banco: 73%
     ✔ [kakawira] Kakawira   | dir="ltr" | UI: 100% (117/117) | Banco: 73%
     ✔ [en      ] English    | dir="ltr" | UI: 100% (117/117) | Banco: 95.29%
     ✔ [ar      ] العربية    | dir="rtl" | UI: 100% (117/117) | Banco: 84.57%
     ✔ [zh      ] 中文         | dir="ltr" | UI: 100% (117/117) | Banco: 84.57%
     Exited with code 0.
     ```
   - `npm run build`:
     ```
     ✓ built in 19.36s
     Exited with code 0.
     ```
   - `git grep "7943 9901"`: Exited with code 1 (cero ocurrencias en archivos bajo control de versiones).

3. **Estructura Actual de Cursos Técnicos en `src/components/TechnicalCoursesView.tsx`**:
   - `src/components/TechnicalCoursesView.tsx:23-40` define `TechnicalCourse` con campos: `id`, `title`, `category`, `icon`, `accentColor`, `badgeBg`, `badgeText`, `summary`, `targetAudience`, `modules: { number, title, description, practicalSkills }[]`, `jobOpportunities: string[]`.
   - Contiene únicamente 8 cursos (`electricidad`, `electronica`, `cocina-saludable`, `soldadura`, `microsoldadura`, `reparacion-dispositivos`, `agricultura-pequena`, `logistica-metrologia`).
   - Cada curso cuenta con exactamente 3 módulos y carece de especificación de horas (40h), fórmulas matemáticas, citas legales de las 8 instituciones e ítems de autoevaluación interactiva.
   - Faltan los cursos #9 (`mecanica-motos`) y #10 (`fontaneria-hidraulica`).

---

## 2. Logic Chain

1. **De la Observación 1**: Como Vitest corre con `vitest run` y toma `vite.config.ts`, la nueva suite `tests/technicalCourses.test.ts` será descubierta y ejecutada automáticamente por Vitest sin necesidad de modificar flags de CLI en `package.json`.
2. **De la Observación 2**: Toda la infraestructura de calidad actual (`typecheck`, 287 pruebas unitarias, validador de banco de 17,640 preguntas, validador multilingüe y compilación de producción) se encuentra en estado 100% verde y operativo. La incorporación de `tests/technicalCourses.test.ts` y de `src/data/technicalCoursesData.ts` no interfiere con `public/data/` ni altera el banco base de 17,640 reactivos.
3. **De la Observación 3 y ORIGINAL_REQUEST.md**:
   - Para elevar los cursos técnicos a 400 horas pedagógicas completas se requieren 10 cursos, cada uno con exactamente 4 módulos de 10 horas (`10 * 4 = 40` módulos, `40 * 10 = 400` horas).
   - Para garantizar rigor normativo salvadoreño, las 8 instituciones (SIGET, MTPS, MINSAL, MARN, MAG, ANDA, OSARTEC, INCAF) deben tener cobertura explícita en los cursos y módulos.
   - Para asegurar transferencia técnica de taller, cada módulo debe incorporar fórmulas de cálculo analítico y protocolos de seguridad ocupacional (LGPRLT / D.E. 86).
   - Cada módulo debe incluir un mínimo de 3 reactivos de autoevaluación formativa con 4 opciones A/B/C/D, explicaciones sustantivas y bases legales (totalizando al menos 120 reactivos), con identificadores únicos y libres de colisiones con los bancos base y especializados.
   - La re-exportación de `TECHNICAL_COURSES` y `TechnicalCourse` en `src/components/TechnicalCoursesView.tsx` asegura que ningún importador sufra regresiones.

---

## 3. Caveats

- **Convención de nomenclatura de opciones y horas**: Diferentes implementadores pueden usar `hours` vs `durationHours`, o `quiz` vs `questions`, o `options` como objeto `{ A, B, C, D }` vs array de 4 elementos. La suite diseñada en `analysis.md` utiliza selectores coalescentes defensivos (`mod.hours ?? mod.durationHours`, `mod.quiz ?? mod.questions`, helper de normalización de opciones) para mantener rigor matemático sin fallar por discrepancias cosméticas.
- **Tiempos de ejecución en Windows**: Al ejecutar todas las suites con `npm test`, la carga acumulada dura ~20s. Para iteración rápida en desarrollo, se recomienda ejecutar `npx vitest run tests/technicalCourses.test.ts` (<1s).

---

## 4. Conclusion

1. **Diseño de la Suite `tests/technicalCourses.test.ts`**:
   Se estructuró una suite de 7 bloques invariantes con más de 18 pruebas unitarias:
   - **Bloque 1**: Exactamente 10 cursos, IDs oficiales esperados, retrocompatibilidad de campos (`summary`, `targetAudience`, `jobOpportunities`), y re-exportación referencial idéntica desde `TechnicalCoursesView.tsx`.
   - **Bloque 2**: Exactamente 4 módulos por curso (40 módulos totales), 10 horas por módulo, 40 horas por curso, y 400 horas teóricas globales.
   - **Bloque 3**: Fórmulas matemáticas y cálculos de taller en el 100% de los 40 módulos (>=40 fórmulas), verificando expresiones para electricidad, soldadura, microelectrónica, logística, mecánica de motos y fontanería.
   - **Bloque 4**: Fundamentación legal salvadoreña y presencia de las 8 instituciones mandatorias (SIGET, MTPS, MINSAL, MARN, MAG, ANDA, OSARTEC, INCAF) y sus respectivos decretos.
   - **Bloque 5**: Protocolos obligatorios de prevención y seguridad ocupacional (LGPRLT / D.E. 86) en los 40 módulos (>=2 protocolos por módulo).
   - **Bloque 6**: Cuestionario de autoevaluación formativa con >=3 preguntas por módulo (>=120 preguntas totales), 4 opciones A/B/C/D no vacías y sin duplicados, claves válidas, explicaciones sustantivas (>25 chars) y cero términos comodín o dummy.
   - **Bloque 7**: Cero colisiones de IDs con las 17,640 preguntas del banco base JSON en `public/data/` ni con los 1,400 reactivos especializados de TypeScript.

2. **Detalle Completo en Artifact**:
   El código fuente completo y el desglose metodológico se encuentran especificados en:
   `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_3b\analysis.md`.

---

## 5. Verification Method

Para verificar independientemente las conclusiones y el diseño propuesto:

1. **Comprobar la estabilidad del sistema antes de los cambios**:
   ```bash
   npm run typecheck
   npm test
   npm run validate:bank
   npm run validate:i18n
   npm run build
   git grep "7943 9901"
   ```
2. **Revisar el código de diseño de la suite**:
   Inspeccionar `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_3b\analysis.md` (Sección 3).
3. **Condiciones de Invalidación**:
   La suite se considerará inválida si:
   - Falla al detectar menos de 10 cursos o menos de 40 módulos.
   - Permite cursos con diferente duración a 40 horas o módulos con diferente duración a 10 horas.
   - No detecta la omisión de alguna de las 8 instituciones reguladoras salvadoreñas.
   - No verifica la presencia de fórmulas de taller en los 40 módulos.
   - Permite IDs colisionados o textos duplicados en las opciones de autoevaluación.

# Análisis de Infraestructura de Pruebas e Invariantes de Verificación (Explorer 3)

**Fecha:** 2026-10-23T22:52:00Z  
**Autor:** Explorer 3 (Test Infra & Verification Invariants)  
**Entorno:** Windows, Node.js, Vite 6.1.0, Vitest 4.1.11, TypeScript 5.7.3  
**Directorio de trabajo:** `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_3`

---

## 1. Diagnóstico de la Infraestructura de Pruebas y Configuración

### 1.1 Configuración de Vitest y Vite
- **`package.json`**:
  * `"test": "vitest run"` ejecuta Vitest en modo monodisparo (sin watch).
  * `"typecheck": "tsc --noEmit"` verifica estricta seguridad de tipos en TypeScript.
  * `"validate:bank": "node scripts/validate-bank.mjs"` valida los 17,640 reactivos base.
  * `"validate:i18n": "node scripts/validate-i18n.mjs"` audita la cobertura de los 7 idiomas.
  * `"build": "vite build"` genera los bundles minificados para producción.
- **`vitest.config.ts`**:
  * Actualmente **no existe** un archivo `vitest.config.ts` independiente en la raíz.
  * Vitest recurre a la configuración compartida de `vite.config.ts`.
  * **Hallazgo Clave 1 (Aislamiento de tests):** Al no haber un filtro explícito `include` en la configuración de Vitest, la herramienta descubre de forma predeterminada cualquier archivo con patrón `**/*.test.ts`, lo que ocasionó que incluyera y ejecutara `.agents/teamwork/victory_auditor_2/independent_auditor.test.ts`. Para estricta conformidad con `PROJECT.md` y evitar ejecuciones accidentales de archivos de agentes, se recomienda formalizar `vitest.config.ts` o restringir el include a `tests/**/*.test.ts`.
  * **Hallazgo Clave 2 (Timeout en Windows):** El timeout por defecto de Vitest es 5,000 ms (5s). Durante la ejecución concurrente pesada de los 22 archivos de prueba (con transformaciones de módulos React y Lucide en memoria), un test en `tests/challengerEmpiricalSuite.test.ts` llegó a 5,024 ms antes de pasar limpiamente en la segunda corrida (3,763 ms). Se recomienda configurar `testTimeout: 15000` en la suite o en `vitest.config.ts`.

---

## 2. Estado de la Línea Base de Scripts de Verificación

Todas las pruebas y verificaciones fueron ejecutadas directamente en el entorno local sobre la rama `pruebas-piloto`:

| Script / Comando | Código de Salida | Métricas / Resultado Observado | Estado |
|---|---|---|---|
| `npm run typecheck` | `0` | Cero errores de compilación TypeScript (`tsc --noEmit`). | **PASS** |
| `npm test` | `0` | **22 test files aprobados, 287 de 287 pruebas unitarias aprobadas (100%)** en 34.26s. | **PASS** |
| `npm run validate:bank` | `0` | 17,640 preguntas válidas (UES=7,500, ANSP=250, ASD=2,190, AVANZO=3,000, ENA=1,400, ESCALAFON=3,300). 0 errores, 0 advertencias. | **PASS** |
| `npm run validate:i18n` | `0` | 100% UI coverage (117/117 claves) en los 7 idiomas (`es`, `nahuat`, `lenca`, `kakawira`, `en`, `ar`, `zh`). | **PASS** |
| `npm run build` | `0` | 1,731 módulos transformados; bundle de producción compilado limpiamente en 29.75s. | **PASS** |
| `git grep "7943 9901"` | `1` | **0 coincidencias** en archivos rastreados por git. Cero teléfonos privados en el código fuente. Canal oficial WhatsApp +503 7657 4463 intacto. | **PASS** |

---

## 3. Estado Actual de Cursos Técnicos en el Código Fuente

- Archivo existente: `src/components/TechnicalCoursesView.tsx` (514 líneas).
- Archivo de datos dedicado `src/data/technicalCoursesData.ts`: **No existe aún**.
- Cursos actuales en la vista: **8 cursos** (`electricidad`, `electronica`, `cocina-saludable`, `soldadura`, `microsoldadura`, `reparacion-dispositivos`, `agricultura-pequena`, `logistica-metrologia`).
- Módulos actuales por curso: **Solo 3 módulos superficiales**, sin conteo de horas (40h ausente), sin fórmulas, sin citas de leyes salvadoreñas y sin reactivos de autoevaluación.
- Cursos faltantes:
  * Curso 9: **Mecánica y Mantenimiento Integral de Motocicletas** (40h).
  * Curso 10: **Fontanería e Instalaciones Hidráulicas y Sanitarias Residenciales** (40h).

---

## 4. Requerimientos y Especificación de Invariantes para `tests/technicalCourses.test.ts`

La nueva suite de pruebas unitarias `tests/technicalCourses.test.ts` debe diseñarse e implementarse para blindar matemáticamente y normativamente los siguientes invariantes:

### Invariante 1: Exactamente 10 Cursos Técnicos y Unicidad de Identificadores
- `TECHNICAL_COURSES` debe ser un arreglo de longitud exactamente 10.
- Cero IDs duplicados.
- IDs esperados:
  1. `electricidad`
  2. `electronica`
  3. `cocina-saludable`
  4. `soldadura`
  5. `microsoldadura`
  6. `reparacion-dispositivos`
  7. `agricultura-pequena`
  8. `logistica-inventarios` (o `logistica-metrologia`)
  9. `mecanica-motos`
  10. `fontaneria`
- Cada curso debe contener `id`, `title`, `category`, `icon`, `summary` (>25 caracteres), `targetAudience` (>25 caracteres) y `jobOpportunities` (mínimo 3 elementos no vacíos).

### Invariante 2: 4 Módulos de 10 Horas por Curso (40h/curso, 400h Gran Total)
- Cada curso debe contener un arreglo `modules` con longitud exactamente igual a 4.
- Total de módulos en el sistema: 10 cursos x 4 módulos = **40 módulos temáticos**.
- Cada módulo debe especificar exactamente 10 horas teóricas (`hours: 10` o `durationHours: 10`).
- La suma de horas de los 4 módulos de cada curso debe ser estrictamente 40 horas.
- La suma global de los 10 cursos debe ser exactamente 400 horas pedagógicas.
- Numeración correlativa estricta: módulo 1, 2, 3 y 4.
- Cada módulo debe contener `title` (>10 chars), `description` (>30 chars), `learningObjectives` (mínimo 2 objetivos por módulo) y `practicalSkills` (mínimo 2 destrezas por módulo).

### Invariante 3: Fundamentación Legal Salvadoreña en los 40 Módulos
- El 100% de los 40 módulos debe incluir referencias legales explícitas de El Salvador (`legalFramework` o `legalBasis`).
- Se debe verificar la presencia de la normativa correspondiente a cada oficio:
  * **INCAF** (Decreto Legislativo 896 - Ley del Instituto Nacional de Capacitación y Formación).
  * **MTPS** (Decreto Legislativo 254 - Ley General de Prevención de Riesgos en los Lugares de Trabajo LGPRLT, y Decreto Ejecutivo 86 Reglamento General).
  * **SIGET** (Ley General de Electricidad y Normas de Acometidas e Instalaciones).
  * **MINSAL** (Decreto Legislativo 955 - Código de Salud, Arts. 56+ fontanería, Arts. 88-105 manipulación de alimentos).
  * **RTCA** (Reglamento Técnico Centroamericano 67.01.33:06 - Buenas Prácticas de Manufactura).
  * **MARN** (Decreto Legislativo 233 - Ley del Medio Ambiente, D.E. 41 RAEE, manejo de aceites usados y baterías).
  * **MAG / CENTA** (Decreto Legislativo 315 - Ley sobre Control de Pesticidas, Fertilizantes y Productos Agropecuarios).
  * **OSARTEC / CIM** (Decreto Legislativo 805 - Ley del Sistema Salvadoreño para la Calidad, OIML R 76).
  * **CAUCA IV / RECAUCA IV** (Código Aduanero Uniforme Centroamericano).
  * **ANDA** (Normas Técnicas para el Abastecimiento de Agua Potable y Alcantarillado).
  * **VMT / PNC** (Ley de Transporte Terrestre, Tránsito y Seguridad Vial).
- Cada referencia legal debe incluir el cuerpo legal, el artículo específico y una explicación contextual (>15 caracteres).

### Invariante 4: Fórmulas Matemáticas y Cálculos Técnicos de Taller en los 40 Módulos
- Cada uno de los 40 módulos debe incluir al menos una fórmula técnica de taller (`formulas` con longitud >= 1).
- Cada fórmula debe declarar:
  * `name`: Nombre del cálculo o principio técnico (>5 caracteres).
  * `formula`: Notación matemática clara o expresión formal (ej. $V = I \cdot R$, $\Delta V = \frac{2 \cdot \rho \cdot L \cdot I}{S}$, $HI = \frac{60 \cdot V \cdot I}{1000 \cdot v}$, $EOQ = \sqrt{\frac{2DS}{H}}$, $h_f = 10.67 \cdot \frac{L \cdot Q^{1.852}}{C^{1.852} \cdot D^{4.87}}$, etc.).
  * `description`: Explicación clara de variables y parámetros (>15 caracteres).
  * `practicalApplication`: Aplicación directa en el taller u obra (>15 caracteres).

### Invariante 5: Procedimientos Obligatorios de Seguridad Ocupacional (LGPRLT / D.E. 86)
- Cada módulo debe incluir un arreglo de procedimientos preventivos y EPP obligatorio (`safetyProcedures` con longitud >= 2 protocolos concretos).

### Invariante 6: Cuestionario Formativo de Autoevaluación (>=3 Reactivos por Módulo, >=120 Totales)
- Cada módulo debe incorporar un banco formativo de autoevaluación (`quiz` o `questions`) con al menos 3 preguntas de opción múltiple.
- Gran total en el catálogo técnico: mínimo **120 reactivos formativos**.
- Contrato estricto del reactivo:
  * `id`: Identificador único no vacío (ej. `tech-elec-m1-q1`).
  * `statement`: Enunciado técnico contextualizado (>25 caracteres).
  * `options`: Exactamente 4 opciones A, B, C, D con longitud de texto > 3 caracteres cada una.
  * Cero opciones con texto duplicado dentro de la misma pregunta.
  * `correctAnswer`: Estrictamente una de las 4 opciones (`A`, `B`, `C` o `D`).
  * `explanation`: Explicación detallada de por qué la clave es correcta y fundamento del error de distractores (>25 caracteres).
  * `legalBasis` o `technicalBasis`: Cita técnica o legal de respaldo (>5 caracteres).
  * Ausencia absoluta de términos comodín, mock o placeholder (`lorem ipsum`, `TBD`, `placeholder`, `reactivo dummy`, `pregunta de prueba`).

### Invariante 7: Cero Colisión de Identificadores con el Banco Base y Módulos Especializados
- Ningún ID de los reactivos de cursos técnicos debe colisionar con:
  * Las 17,640 preguntas oficiales del banco base en `public/data/`.
  * Los 1,400 reactivos de las 7 áreas especializadas existentes (`ADMIN_LAW_QUESTIONS`, `SALUD_PRIMARIA_QUESTIONS`, `INGENIERIA_QUESTIONS`, `NOTARY_EXAM_QUESTIONS`, `CSSP_QUESTIONS_DATA`, `ANSP_ASCENSO_QUESTIONS`, `COMPLIANCE_QUESTIONS`).

### Invariante 8: Desacoplamiento, Re-exportación y Retrocompatibilidad
- Los datos completos deben residir en `src/data/technicalCoursesData.ts`.
- `TechnicalCoursesView.tsx` debe importar y re-exportar `TECHNICAL_COURSES` y `TechnicalCourse` garantizando 100% de retrocompatibilidad.
- La vista debe consumir los 10 cursos y permitir la navegación interactiva por los 4 módulos de 10 horas sin saturación del DOM.

---

## 5. Recomendación de Arquitectura de Configuración (`vitest.config.ts`)

Para asegurar aislamiento y robustez en Windows:
```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'node',
    testTimeout: 15000,
    include: ['tests/**/*.test.ts'],
    exclude: ['**/node_modules/**', '**/.agents/**', '**/dist/**'],
  },
});
```
Esta configuración previene ejecuciones de archivos residuales en `.agents/` y elimina falsos positivos por timeouts de renderizado en CPUs ocupadas.

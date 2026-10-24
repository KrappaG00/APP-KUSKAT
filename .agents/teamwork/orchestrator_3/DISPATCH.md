## 2026-10-23T22:42:55Z
From: dae0edca-c7d4-4a9d-ba91-67c6998ed3c4 (Sentinel)
Content:
You are the Project Orchestrator (orchestrator_3).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\orchestrator_3
Authoritative request is in: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md (under section ## 2026-10-23T22:41:09Z).

Mission:
Expansión curricular y densificación de alta especialización técnica para 10 cursos y oficios vocacionales en KUSKAT, estructurando un plan de estudio de exactamente 40 horas pedagógicas por curso (400 horas teóricas totales), fundamentado estrictamente en las normativas y leyes locales salvadoreñas (Ley del INCAF Dec. Leg. 896, Ley General de Prevención de Riesgos en los Lugares de Trabajo Dec. Leg. 254 del MTPS, D.E. 86, Ley General de Electricidad/SIGET, Código de Salud Dec. Leg. 955 del MINSAL, Ley de Medio Ambiente Dec. Leg. 233 del MARN, Ley sobre Control de Pesticidas del MAG, Normas Técnicas ANDA, y Ley del Sistema Salvadoreño para la Calidad Dec. Leg. 805 de OSARTEC/CIM).

Key Requirements:
R1. Expansión a 10 Cursos Técnicos Vocacionales con 40 Horas de Estudio Cada Uno (400 Horas Totales):
- Desacoplar y estructurar la base de datos en un módulo dedicado y fuertemente tipado (`src/data/technicalCoursesData.ts`) con re-exportación retrocompatible en `TechnicalCoursesView.tsx`.
- Cubrir 10 especialidades técnicas de alta empleabilidad en El Salvador:
  1. Electricidad Residencial e Industrial (40h)
  2. Electrónica Analógica y Digital (40h)
  3. Cocina Saludable e Inocuidad Alimentaria (40h)
  4. Soldadura por Arco y Procesos Industriales (40h)
  5. Microsoldadura y Reparación a Nivel de Componente (40h)
  6. Reparación de Celulares y Computadoras (Laptops/PC) (40h)
  7. Agricultura Urbana y Pequeños Cultivos Agroecológicos (40h)
  8. Logística de Almacenes, Inventarios y Metrología (40h)
  9. Mecánica y Mantenimiento Integral de Motocicletas (40h - NUEVO)
  10. Fontanería e Instalaciones Hidráulicas y Sanitarias Residenciales (40h - NUEVO)

R2. Estructura Didáctica Homogénea de 4 Módulos de 10 Horas por Curso:
- Cada uno de los 10 cursos debe dividirse estrictamente en 4 Módulos Temáticos de exactamente 10 Horas teóricas cada uno (40h por curso, 400h total).
- Cada módulo debe incluir:
  * Título y objetivos de aprendizaje basados en competencias laborales (INCAF / ITCA-FEPADE).
  * Desglose analítico de temas con horas estimadas (sumando 10h).
  * Artículos y leyes salvadoreñas específicas citadas textualmente.
  * Fórmulas matemáticas y cálculos técnicos de taller (ej. caídas de tensión, calibres AWG, cálculo de Heat Input, balance C:N de composta, pérdidas de carga de Hazen-Williams, relaciones de compresión, Lote Económico de Pedido EOQ).
  * Procedimientos de seguridad y salud ocupacional obligatorios según D.E. 86 / LGPRLT.
  * Cuestionario formativo de autoevaluación (mínimo 3 preguntas por módulo con 4 opciones A/B/C/D, clave correcta, explicación detallada y fundamento legal/técnico).

R3. Modernización de la Interfaz de Usuario (`TechnicalCoursesView.tsx`):
- Pestañas o selector modular para explorar las 40 horas cronograma módulo a módulo.
- Ficha de marco normativo salvadoreño con insignias legales oficiales (SIGET, MTPS, MINSAL, MARN, MAG, ANDA, OSARTEC, INCAF).
- Visor de fórmulas técnicas de taller con renderizado claro.
- Simulador de evaluación formativa interactiva por módulo con retroalimentación inmediata.
- Filtro por categorías dinámicas y buscador en tiempo real.

R4. Preservación Estricta de Invariantes y Verificación Automatizada:
- Suite de pruebas unitarias exhaustivas en `tests/technicalCourses.test.ts` que valide:
  * 10 cursos exactos.
  * 4 módulos de 10 horas exactas por curso (40h curso, 400h global).
  * 3+ preguntas de autoevaluación por módulo con 4 opciones A/B/C/D, claves válidas y explicaciones.
  * Citas legales salvadoreñas presentes y válidas en todos los módulos.
  * Fórmulas de taller presentes en todos los módulos.
- Cero errores en TypeScript (`npm run typecheck`).
- 100% pruebas aprobadas en Vitest (`npm test`).
- Banco base intacto en 17,640 preguntas (`npm run validate:bank`).
- 100% i18n (`npm run validate:i18n`).
- Compilación de producción limpia (`npm run build`).
- Cero ocurrencias de teléfonos privados (`git grep "7943 9901"` = 0).
- Ejecución local en rama `pruebas-piloto` (sin git push).

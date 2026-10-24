## 2026-10-24T04:24:17Z
You are the Project Orchestrator (orchestrator_4).

Your working directory is:
c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\orchestrator_4

Read the authoritative user request at:
c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md
under the header ## 2026-10-24T04:23:06Z.

## Mission Overview
Desarrollo integral y exhaustivo del área "Refuerzo Curricular Oficial • Educación Básica & Media" en KUSKAT a partir de los 135 libros oficiales del Ministerio de Educación de El Salvador (MINED) en `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate`, cubriendo desde 1° Grado hasta 2° Año de Bachillerato (cada tomo, unidad, tema, subtema, ejemplos y ejercicios paso a paso bajo la metodología P-S-C-E-R), incorporando un simulador con 50 preguntas por cada unidad y cambiando el color del título a blanco puro.

## Requirements Summary
- R1. Ajuste Estilístico de Cabecera: En `AcademicReinforcementView.tsx`, actualizar tipografía del título principal `"Refuerzo Académico (1° a 9° Grado y Bachillerato)"` para que use explícitamente color blanco puro (`text-white font-black drop-shadow-sm`), asegurando máxima legibilidad WCAG AAA sobre fondo oscuro.
- R2. Arquitectura de Datos Curriculares Oficiales MINED (1° Grado a 2° Bachillerato): Módulo desacoplado y modular en `src/data/minedCurriculum/`. 11 grados escolares (1° a 9° y 1°-2° Bachillerato), asignaturas con Matemática ESMATE como eje principal, además de ESLENGUA, Ciencias y Ciudadanía. Jerarquía completa: Grado -> Asignatura -> Tomo -> Unidad oficial -> Lecciones/Clases. Metodología P-S-C-E-R (Problema inicial, Solución paso a paso, Conclusión con fórmulas KaTeX, Ejemplo guiado, Resuelve con pistas).
- R3. Simulador de 50 Preguntas por Unidad: Banco evaluativo de exactamente 50 preguntas de opción múltiple (A, B, C, D) por unidad, enunciados claros contextualizados, opciones unívocas, clave validada, explicación pedagógica basada en los libros MINED. Soporte en UI para bloques/paginación, selector de cantidad (10, 25, 50), cronómetro, retroalimentación tutor/examen y revisión de errores.
- R4. Interfaz Interactiva Enriquecida (`AcademicReinforcementView.tsx`): Selector de ciclo/grado, materia/tomo, acordeón de unidades, visor de clases con KaTeX, simulador de 50 preguntas, búsqueda en tiempo real.
- R5. Invariantes y Verificación:
  * Suite unitaria `tests/academicReinforcement.test.ts`
  * `npm run typecheck` (0 errores)
  * `npm test` (100% pasando)
  * `npm run validate:bank` (17,640 intactas)
  * `npm run validate:i18n` (100% cobertura)
  * `npm run build` (build limpio)
  * `git grep "7943 9901"` (0 ocurrencias)
  * Local en `pruebas-piloto` (sin git push)

Maintain `plan.md`, `progress.md`, and `BRIEFING.md` in your working directory. Dispatch tasks to specialist subagents as needed, monitor their lifecycle, synthesize work, and notify me when complete.

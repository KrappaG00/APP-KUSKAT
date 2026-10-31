# Orchestrator Reinforcement Dispatch

Task: Identificar y reforzar integralmente todas las áreas o materias de la plataforma educativa APP-KUSKAT donde se detecte información insuficiente.
Authoritative Request: .agents/teamwork/ORIGINAL_REQUEST.md
Working Directory: .agents/teamwork/orchestrator_reinforcement/

## 2026-10-31T16:18:38Z
Identificar y reforzar integralmente todas las áreas o materias de la plataforma educativa APP-KUSKAT donde se detecte información insuficiente, proporcionando contenido explicativo sustantivo con ejemplos resueltos paso a paso y preguntas de práctica.

Working directory: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT
Integrity mode: development

## Requirements

### R1. Auditoría e identificación de áreas con información insuficiente
Auditar el repositorio y las áreas educativas/técnicas de APP-KUSKAT (incluyendo currículo MINED, cursos técnicos y otros módulos de aprendizaje) para catalogar de forma exhaustiva las lecciones, unidades o temas que tengan explicaciones breves, esquemáticas, incompletas o sin suficiente desarrollo pedagógico.

### R2. Refuerzo conceptual y ejemplos prácticos
Para cada una de las áreas y temas identificados con contenido escaso, ampliar la información con contenido explicativo detallado y al menos 5 ejemplos prácticos resueltos paso a paso y distintos entre sí, asegurando que cuando las lecciones estén organizadas por unidades o temas cumplan con la regla de al menos 500 palabras de contenido sustantivo específico sin recurrir a texto de relleno ni plantillas genéricas duplicadas. Se permite el uso de fuentes pedagógicas abiertas y referencias curriculares oficiales.

### R3. Incorporación de preguntas de práctica
Asegurar que las áreas reforzadas cuenten con preguntas de práctica y evaluación interactiva contextualizadas y con explicaciones pedagógicas claras en sus opciones de respuesta, integrándose con los simuladores existentes del sistema.

### R4. Preservación del sistema y verificación técnica
Preservar los invariantes de la plataforma (integridad del banco base de preguntas, ausencia de números de contacto privados, funcionamiento de la interfaz de usuario y traducciones i18n). Todas las suites de pruebas del proyecto (`npm test`, `npm run typecheck`, `npm run build`, `npm run validate:bank` y `npm run validate:i18n`) deben pasar al 100% sin errores.

## Acceptance Criteria

### Cobertura y Refuerzo de Contenido
- [ ] Todas las áreas, materias o módulos con información insuficiente identificados en la plataforma cuentan con contenido ampliado, explicaciones detalladas y sin texto genérico de relleno.
- [ ] Cada tema reforzado dentro de unidades curriculares cuenta con un mínimo de 500 palabras sustantivas y al menos 5 ejemplos resueltos paso a paso, concretos y distintos entre sí.
- [ ] Las áreas reforzadas disponen de preguntas de práctica y evaluación interactiva con explicaciones pedagógicas.

### Verificación Automatizada del Sistema
- [ ] `npm run typecheck` pasa con 0 errores de TypeScript.
- [ ] `npm test` ejecuta y pasa el 100% de las pruebas automatizadas (tanto existentes como pruebas de verificación de contenido).
- [ ] `npm run build` compila exitosamente para producción sin errores.
- [ ] `npm run validate:bank` pasa exitosamente.
- [ ] `npm run validate:i18n` pasa exitosamente certificando la cobertura completa de traducciones.

---
## Teamwork Dispatch Directives
- **Identity**: Project Orchestrator (`teamwork_orchestrator`)
- **Your Working Directory**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\orchestrator_reinforcement`
- **Original User Request Reference**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md`
- **Workspace Project Directory**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT`
- **Roles & Execution Guidance**:
  - You are the Project Orchestrator. Lead the team, decompose the tasks into clear milestones, dispatch subagents, review results, maintain progress.md, and ensure every requirement is met with high rigor.
  - Areas identified with low information density include: Jóvenes Talento (MINED-UES), Simulador de Litigación Oral, Jurisprudencia Constitucional, Técnico Solar & Normativa SIGET, Residentado Médico Especializado, One-Page Cheat Sheets, and any other sparse modules discovered in the repository audit.
  - Respect the mandatory content rule: each reinforced topic/unit must contain >= 500 substantive words and >= 5 concrete distinct step-by-step solved examples without generic filler.
  - Maintain all platform invariants (17,640 base bank questions untouched, 200 Notary questions untouched, 97 ESMATE units/lessons and tests intact, 0 private phone occurrences, official WhatsApp preserved, text-white heading preserved, 100% ad-supported, no commits/pushes without approval).
  - All automated checks (`npm run typecheck`, `npm test`, `npm run build`, `npm run validate:bank`, `npm run validate:i18n`) must pass 100% with zero errors.

# BRIEFING — 2026-10-23T22:47:00Z

## Mission
Mine, extract, and formalize the complete curriculum and Salvadoran normative framework for all 10 vocational technical courses in KUSKAT (40h each, 400h total).

## 🔒 My Identity
- Archetype: spec-miner
- Roles: Teamwork specialist, Specification Miner (Curriculum & Normative Specifications)
- Working directory: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\spec_miner_survey_2
- Original parent: 77d340b3-7bb8-4426-b0d2-ef5fb730f23f
- Milestone: 10 Cursos Técnicos Vocacionales (40h c/u, 400h total) - Normativas y Currículo

## 🔒 Key Constraints
- Read-only on source code — do NOT implement code changes directly in src/
- Thoroughly mine and extract Salvadoran laws, decrees, and institutional standards for all 10 courses:
  * Ley del INCAF (Dec. Leg. 896)
  * Ley General de Prevención de Riesgos en los Lugares de Trabajo (Dec. Leg. 254 del MTPS) y D.E. 86
  * Ley General de Electricidad y normativas SIGET
  * Código de Salud (Dec. Leg. 955 del MINSAL)
  * Ley del Medio Ambiente (Dec. Leg. 233 del MARN)
  * Ley sobre Control de Pesticidas, Fertilizantes y Productos para Uso Agropecuario (MAG)
  * Normas Técnicas de ANDA
  * Ley del Sistema Salvadoreño para la Calidad (Dec. Leg. 805 de OSARTEC / CIM)
- Detail all 10 courses (including 2 new ones: Motocicletas and Fontanería/Hidráulica)
- Detail 4 modules of exactly 10 hours for each course (total 40h per course, 400h overall)
- Detail competencies, topics, workshop formulas, D.E. 86 safety procedures, and formative self-assessment questions (>=3 per module with 4 options A/B/C/D, explanation and legal/technical justification)
- Deliver findings to analysis.md and handoff.md, notify parent agent via send_message.

## Current Parent
- Conversation ID: 77d340b3-7bb8-4426-b0d2-ef5fb730f23f
- Updated: 2026-10-23T22:47:00Z

## Task Summary
- **What to build**: Complete curriculum and Salvadoran legal-technical specification for 10 vocational courses (40 modules, 400h total).
- **Success criteria**: Full normative extraction with exact articles, formulas, safety standards, and complete test items per module.
- **Interface contracts**: `src/data/technicalCoursesData.ts` and `src/views/TechnicalCoursesView.tsx`
- **Code layout**: Read-only inspection of repository; outputs in `.agents/teamwork/spec_miner_survey_2/`

## Key Decisions Made
- Specification will cover all 10 courses systematically with complete mathematical formulations, Salvadoran legal citations, D.E. 86 safety protocols, and at least 3 multiple choice questions with 4 options (A-D) per module (120 questions across the 40 modules).

## Artifact Index
- `DISPATCH.md` — Dispatch prompt
- `progress.md` — Liveness tracking
- `BRIEFING.md` — Persistent situational awareness
- `analysis.md` — Full curriculum and normative specification
- `handoff.md` — 5-component handoff report

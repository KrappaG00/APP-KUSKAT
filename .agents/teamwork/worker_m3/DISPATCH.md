## 2026-10-23T16:29:50Z
You are Worker M3 (Health & Scientific Modules Expansion).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m3
Your parent conversation ID is: 3f4421ca-8da7-495a-a734-3ce450e9530d

MANDATORY FIRST STEP: Read the user request at c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md (especially section ## 2026-10-23T15:56:44Z).
Also read Explorer 1's report at c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_data\handoff.md and PROJECT.md.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Exclusive file ownership:
- `src/data/saludPrimariaData.ts`
- `src/data/csspHealthData.ts`

Specific Tasks:
1. `src/data/saludPrimariaData.ts`:
   - Expand to exactly 200 complete questions.
   - Distribution: 150 Guías Clínicas MINSAL para UCSF:
     * Dengue (~30 items): Grupos A, B, C, fluidoterapia, defervescencia, signos de alarma, hematocrito.
     * HTA (~30 items): Estadios, metas tensionales, IECAs/ARA-II, crisis hipertensiva emergencia vs urgencia, MAPA.
     * DM2 (~30 items): Criterios diagnósticos HbA1c, metformina, insulina, hipoglucemia, pie diabético, nefropatía.
     * IRAS (~30 items): Neumonía adquirida en la comunidad, crup laríngeo, bronquiolitis, broncoespasmo, signos de peligro en lactantes, antibioterapia ambulatoria.
     * Salud Materno-Infantil (~30 items): Control prenatal MINSAL, tamizaje neonatal, vacunación PAI, lactancia materna exclusiva, Código Rojo, Ley Crecer Juntos.
     * Farmacovigilancia SRS/DNM: 50 items (clasificación Rawlins-Thompson Tipos A-F, Algoritmo de Naranjo [10 preguntas ponderadas], Noti-FACED / Tarjeta Amarilla, plazos 48-72h para RAM grave, RTCA 11.04.47:17).
   - Update `SaludPrimariaQuestion` category union and `SALUD_SECTORS` if necessary so categories are `'dengue' | 'hta-dm2' | 'iras' | 'materno-infantil' | 'farmacovigilancia'`.
   - Interface: `{ id, category, categoryLabel, clinicalArea, vignette?, statement, options: { A, B, C, D }, correctAnswer: 'A'|'B'|'C'|'D', clinicalExplanation, officialGuidelineRef, distractorRationale: { A, B, C, D } }`.
2. `src/data/csspHealthData.ts`:
   - Expand to exactly 200 complete questions (strictly 40 per junta):
     * 40 JVPM (Medicina): Código de Salud Arts. 32-45, consentimiento informado, responsabilidad profesional Art. 146 CP, prescripción médica, deber de socorro.
     * 40 JVPO (Odontología): Código de Salud Arts. 46-52, bioseguridad, radioprotección dental, emergencias anestésicas odontológicas (lidocaína/epinefrina), farmacología estomatológica.
     * 40 JVPE (Enfermería): Código de Salud Arts. 53-59, PAE, 10 correctos, dilución farmacológica, cadena de frío biológica y vacunas.
     * 40 JVPQF (Química y Farmacia): Ley de Medicamentos, RTS 13.01.01:14 (BPD), RTCA BPM/BPA, control de estupefacientes y psicotrópicos, farmacovigilancia CNFV.
     * 40 JVPPS (Psicología): Ley del Ejercicio de la Profesión en Psicología, secreto profesional y excepciones ante peligro inminente, consentimiento y asentimiento informado en niñez (Ley Crecer Juntos Arts. 61-64), deber legal de denuncia (Art. 16 Ley Crecer Juntos), relaciones duales y bioética forense.
   - Interface `CsspQuestion`: `{ id: 'cssp-jvpm-01..40', 'cssp-jvpo-01..40', 'cssp-jvpe-01..40', 'cssp-jvpqf-01..40', 'cssp-jvpps-01..40', juntaId: 'jvpm'|'jvpo'|'jvpe'|'jvpqf'|'jvpps', juntaName, area, legalBasis, statement, options: Record<string, string>, correctAnswer: 'A'|'B'|'C'|'D', explanation, distractorRationale: Record<string, string> }`.
3. Verification:
   - Run `npm run typecheck` (must pass with 0 errors).
   - Check array lengths: `saludPrimariaData.ts` has exactly 200 items, `csspHealthData.ts` has exactly 200 items (40 per junta). Zero duplicate IDs.
4. Document all changes in `handoff.md` in your working directory and notify parent orchestrator via `send_message`.

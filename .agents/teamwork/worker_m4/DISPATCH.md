## 2026-10-23T16:29:50Z
You are Worker M4 (Engineering, Police & AML Modules Expansion).
Your working directory is: c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\worker_m4
Your parent conversation ID is: 3f4421ca-8da7-495a-a734-3ce450e9530d

MANDATORY FIRST STEP: Read the user request at c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\ORIGINAL_REQUEST.md (especially section ## 2026-10-23T15:56:44Z).
Also read Explorer 1's report at c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_data\handoff.md and PROJECT.md.

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_preview_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Exclusive file ownership:
- `src/data/ingenieriaCienciasData.ts`
- `src/data/anspAscensoData.ts`
- `src/data/complianceAmlData.ts`

Specific Tasks:
1. `src/data/ingenieriaCienciasData.ts`:
   - Expand to exactly 200 analytical problems with formal derivations and KaTeX:
     * 50 Álgebra Lineal (`algebra-lineal`): Matrices, determinantes (Laplace, Sarrus), Gauss-Jordan, rango, Rouché-Frobenius, valores/vectores propios, sistemas lineales, regla de Cramer.
     * 50 Trigonometría Analítica (`trigonometria-analitica`): Identidades pitagóricas, ángulo doble/mitad, fórmulas de suma y diferencia, transformaciones producto-suma, ecuaciones trigonométricas, ley de senos y cosenos (caso ambiguo LLA).
     * 50 Cónicas y Geometría Analítica (`geometria-conicas`): Circunferencia, parábola (foco, directriz, lado recto), elipse (ejes mayor/menor, focos, excentricidad), hipérbola (asíntotas, ramas), discriminante $B^2 - 4AC$, rotación y traslación de ejes.
     * 50 Física Vectorial y Mecánica (`fisica-mecanica`): Estática 2D/3D (primera y segunda condición de equilibrio, torques, método de nodos/secciones), leyes de Newton, fricción estática y cinética de Coulomb, trabajo y energía, choques elásticos e inelásticos.
   - Follow `EngineeringMathQuestion` interface strictly: `{ id: 'ing-01'..'ing-200', category, categoryLabel, topic, problemStatement, options: { A, B, C, D }, correctAnswer: 'A'|'B'|'C'|'D', formalSolution, stepByStepDerivation: string[], distractorRationale: { A, B, C, D } }`. Verify that LaTeX math delimiters (`$`, `$$`) are properly balanced.
2. `src/data/anspAscensoData.ts`:
   - Expand to exactly 200 questions:
     * 66 Cabo (`rank: 'cabo', escalafon: 'Cabo'`): Procedimientos operativos, ITOP, flagrancia material (Arts. 323-324 PrPn), cadena de custodia, auxilio a víctimas bajo LEIV, primeros auxilios tácticos.
     * 67 Sargento (`rank: 'sargento', escalafon: 'Sargento'`): Supervisión operativa, dirección funcional con FGR, libros de control y bitácoras de armamento, régimen disciplinario por faltas graves de la Ley de la Carrera Policial, control de aprehensiones y régimen de excepción (garantías inderogables).
     * 67 Oficial (`rank: 'oficial', escalafon: 'Oficial'`): Planeación estratégica de operativos complejos bajo estándares ONU y Corte IDH sobre uso diferenciado y proporcional de la fuerza, Ley Especial para la Intervención de las Telecomunicaciones (LEIT), Tribunal de Ingresos y Ascensos (TIA), régimen de faltas muy graves, control disciplinario y amparo constitucional.
   - Follow `PolicePromotionQuestion` interface strictly: `{ id: 'pnc-cabo-001..066', 'pnc-sargento-001..067', 'pnc-oficial-001..067', rank: 'cabo'|'sargento'|'oficial', escalafon: 'Cabo'|'Sargento'|'Oficial', topic, statement, options: { key: 'A'|'B'|'C'|'D', text: string }[], correctAnswer: 'A'|'B'|'C'|'D', explanation, legalBasis, distractorRationale: Record<'A'|'B'|'C'|'D', string> }`.
3. `src/data/complianceAmlData.ts`:
   - Expand to exactly 200 questions:
     * 100 AML UIF/FGR (`category: 'AML'`): Tipologías UIF (pitufeo, estructuración, empresas fachada), DDC y DDI (PEPs, fideicomisos, paraísos fiscales), Beneficiario Final (UBO >= 10% o control efectivo final según instructivo UIF), Reporte de Operaciones Sospechosas (ROS) y deber de reserva estricta (anti-tipping-off, Art. 13 LCLDA), APNFD (Art. 9-A LCLDA), autonomía procesal y extinción de dominio (LEDAB).
     * 100 Seguros Mercantiles y Fianzas SSF (`category: 'Seguros'`): Principios del seguro (indemnizatorio, interés asegurable, buena fe), infraseguro y regla proporcional (Art. 1383 C.Com.), sobreseguro (Art. 1381 C.Com.), subrogación (Arts. 1391 y 1393 C.Com.), seguros de personas/vida (suicidio 2 años, incontestabilidad Art. 1481 C.Com.), fianzas en compras públicas (oferta, anticipo 100%, cumplimiento 10-20%, buena obra 10%).
   - Follow `ComplianceQuestion` interface strictly: `{ id: 'aml-01'..'aml-100', 'seg-01'..'seg-100', category: 'AML'|'Seguros', categoryLabel, area, statement, options: { A, B, C, D }, correctAnswer: 'A'|'B'|'C'|'D', explanation, legalBasis, distractorRationale: { A, B, C, D } }`.
4. Verification:
   - Run `npm run typecheck` (must pass with 0 errors).
   - Check array lengths: `ingenieriaCienciasData.ts` has exactly 200 items, `anspAscensoData.ts` has exactly 200 items (66, 67, 67), `complianceAmlData.ts` has exactly 200 items (100, 100). Zero duplicate IDs.
5. Document all changes in `handoff.md` in your working directory and notify parent orchestrator via `send_message`.

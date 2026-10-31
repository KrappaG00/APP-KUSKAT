# Handoff Report: Exact Remediation Strategy for KaTeX Delimiters, Syntax Errors & Adversarial Test Assertions

**Author**: `teamwork_explorer` (`explorer_remediation`)  
**Date**: 2026-10-31T14:52:00Z  
**Recipient**: `c86d0692-61de-42a4-859c-60fdfb31cccd` (Orchestrator Parent)  
**Target File**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_remediation\handoff.md`  
**Status**: COMPLETE (Hard Handoff)

---

## 1. Observation

### 1.1 Verbatim Failure Points Directly Observed

Running `npx vitest run tests/adversarialCurriculumStressM8.test.ts` reproduced the 3 test failures with exit code `1`:

1. **Failure 1 — 14 KaTeX Delimiter Balance Errors**:
   - `FAIL tests/adversarialCurriculumStressM8.test.ts > CHALLENGER M8: Empirical Stress Testing Across All 97 Units > 4. KaTeX Delimiters & Mathematical Syntax > verifies balanced KaTeX delimiters ($ and $$) in all lesson fields`
   - `AssertionError: Found 14 KaTeX delimiter balance errors: expected [ ... ] to have a length of +0 but got 14`
   - *Verbatim Locations*:
     - `src/data/minedCurriculum/grades/grade05QuintoGrado.ts:366` (`mined-mat-5g-u07-l01`, `resuelve_1_answer`): `"$115 de saldo para ahorro"`
     - `src/data/minedCurriculum/grades/grade06SextoGrado.ts:237` (`mined-mat-6g-u02-l01`, `resuelve_1_exercise`): `"Escribe la expresión algebraica para el costo total de x cuadernos a $1.25 cada uno."`
     - `src/data/minedCurriculum/grades/grade06SextoGrado.ts:287` (`mined-mat-6g-u04-l01`, `example_1`): contains 5 dollar signs (`$80`, `$10.40`, `$90.40`, `$10.40`, `$90.40`)
     - `src/data/minedCurriculum/grades/grade06SextoGrado.ts:288` (`mined-mat-6g-u04-l01`, `example_2`): contains 5 dollar signs (`$24`, `$6`, `$18`, `$6`, `$18`)
     - `src/data/minedCurriculum/grades/grade06SextoGrado.ts:283` (`mined-mat-6g-u04-l01`, `resuelve_1_exercise`): `"...precio base de $150."`
     - `src/data/minedCurriculum/grades/grade06SextoGrado.ts:283` (`mined-mat-6g-u04-l01`, `resuelve_1_answer`): `"$19.50 de impuesto IVA"`
     - `src/data/minedCurriculum/grades/grade06SextoGrado.ts:284` (`mined-mat-6g-u04-l01`, `resuelve_2_exercise`): `"...precio de lista de $50..."`
     - `src/data/minedCurriculum/grades/grade06SextoGrado.ts:284` (`mined-mat-6g-u04-l01`, `resuelve_2_hint`): `"Calcula el 20% de 50 ($10)..."`
     - `src/data/minedCurriculum/grades/grade06SextoGrado.ts:284` (`mined-mat-6g-u04-l01`, `resuelve_2_answer`): `"$40 en total"`
     - `src/data/minedCurriculum/grades/grade06SextoGrado.ts:306` (`mined-mat-6g-u05-l01`, `resuelve_1_exercise`): `"...cuestan $15 en el mercado..."`
     - `src/data/minedCurriculum/grades/grade06SextoGrado.ts:306` (`mined-mat-6g-u05-l01`, `resuelve_1_answer`): `"$24 en total"`
     - `src/data/minedCurriculum/grades/grade07SeptimoGrado.ts:172` (`mined-mat-7g-u01-l01`, `example_3`): `"Solución: -$160 (saldo deudor de 160 dólares)."`
     - `src/data/minedCurriculum/grades/grade07SeptimoGrado.ts:166` (`mined-mat-7g-u01-l01`, `resuelve_1_answer`): `"-$350 (o bien -350 dólares)"`
     - `src/data/minedCurriculum/grades/grade11SegundoBach.ts:571` (`mined-mat-2b-u06-l01`, `problema`): `"semana 15 dólares$ para la modalidad"` (unmatched trailing `$`)

2. **Failure 2 — 7 KaTeX Render Syntax Errors in Lessons**:
   - `FAIL tests/adversarialCurriculumStressM8.test.ts > CHALLENGER M8: Empirical Stress Testing Across All 97 Units > 4. KaTeX Delimiters & Mathematical Syntax > verifies that all KaTeX expressions render without syntax errors via katex.renderToString`
   - `AssertionError: Found 7 KaTeX render syntax errors: expected [ ... ] to have a length of +0 but got 7`
   - *Verbatim Locations*:
     - `src/data/minedCurriculum/grades/grade06SextoGrado.ts:359` (`mined-mat-6g-u07-l01`, `example_4`):
       `math: "2,500}, comparar media y mediana. Paso 1: Media: (365 + 365 + 400 + 420 + 2,500) / 5 = 4,050 / 5 ="`
       `error: "ParseError: KaTeX parse error: Expected 'EOF', got '}' at position 6: 2,500}̲, comparar medi…"`
     - `src/data/minedCurriculum/grades/grade11SegundoBach.ts:379` (`mined-mat-2b-u01-l01`, `example_3`):
       `math: "u = \frac{1}{2}"`
       `error: "KaTeX parse error: Unexpected character: '\f' at position 5: u = \f̲rac{1}{2}"`
     - `src/data/minedCurriculum/grades/grade11SegundoBach.ts:379` (`mined-mat-2b-u01-l01`, `example_3`):
       `math: "x = pm sqrt{\frac{1}{2}} = pm \frac{sqrt{2}}{2}"`
       `error: "KaTeX parse error: Unexpected character: '\f' at position 13: x = pm sqrt{\f̲rac{1}{2}} = pm…"`
     - `src/data/minedCurriculum/grades/grade11SegundoBach.ts:379` (`mined-mat-2b-u01-l01`, `example_3`):
       `math: "S = { pm \frac{sqrt{2}}{2}, pm sqrt{3} }"`
       `error: "KaTeX parse error: Unexpected character: '\f' at position 10: S = { pm \f̲rac{sqrt{2}}{2}…"`
     - `src/data/minedCurriculum/grades/grade11SegundoBach.ts:572` (`mined-mat-2b-u06-l01`, `solucion`):
       `math: "a_{15} = 10 + (15 - 1)(4) = 10 + 14(4) = 10 + 56 = \\66 dólares"`
       `error: "KaTeX parse error: Undefined control sequence: \\6 at position 52: …4) = 10 + 56 = \\̲6̲6 dólares"`
     - `src/data/minedCurriculum/grades/grade11SegundoBach.ts:572` (`mined-mat-2b-u06-l01`, `solucion`):
       `math: "S_{15} = \\frac{15(a_1 + a_{15})}{2} = \\frac{15(10 + 66)}{2} = \\frac{15(76)}{2} = 15 \\cdot 38 = \\570 dólares"`
       `error: "KaTeX parse error: Undefined control sequence: \\5 at position 96: … 15 \\cdot 38 = \\̲5̲70 dólares"`
     - `src/data/minedCurriculum/grades/grade11SegundoBach.ts:572` (`mined-mat-2b-u06-l01`, `solucion`):
       `math: "S_\\infty = \\frac{a_1}{1 - r} = \\frac{100}{1 - 1/2} = \\200 dólares"`
       `error: "KaTeX parse error: Undefined control sequence: \\2 at position 54: …00}{1 - 1/2} = \\̲2̲00 dólares"`

3. **Failure 3 — 25 KaTeX Syntax Errors in Question Generator (`MINED-MAT-7G-U01-Q026..Q030`)**:
   - `FAIL tests/adversarialCurriculumStressM8.test.ts > CHALLENGER M8: Empirical Stress Testing Across All 97 Units > 5. 50-Question Simulator Integrity Across All 97 Units > verifies that all KaTeX expressions in the 4,850 questions render cleanly without syntax errors`
   - `AssertionError: expected [ { ... } ] to have a length of +0 but got 25`
   - *Verbatim Location*:
     - `src/data/minedCurriculum/grades/grade07SeptimoGrado.ts:90-93`:
       ```ts
       options: [`$+\\$${ganancia}$`, `$-\\$${ganancia}$`, `$\\$0$`, `$\\$${ganancia * 2}$`],
       explanation: `Las ganancias se expresan con signo positivo ($+$) y las pérdidas se expresan con signo negativo ($-$), es decir, $-\\$${ganancia}$.`,
       ```
     - In JavaScript template literals, `+\\$${ganancia}$` produces strings like `$+\$475$`. The KaTeX inline matcher `\$([^$\n]+?)\$` grabs `+\\`, which throws:
       `KaTeX parse error: Unexpected character: '\\' at position 2: +\\`
       `KaTeX parse error: Unexpected character: '\\' at position 2: -\\`
       `KaTeX parse error: Unexpected character: '\\' at position 1: \\`
     - Across the 5 generated variants ($v=1..5$) and 5 formulas per variant ($Q026$ through $Q030$), this generates exactly 25 render errors.

4. **Status of Adversarial Test Assertions (`tests/adversarialCurriculumStressM8.test.ts`)**:
   - Direct inspection of `tests/adversarialCurriculumStressM8.test.ts`:
     - Line 374: `expect(globalQuestionIds.size).toBe(4850);` is already present (no comma typo `4,850`).
     - Line 526: `const viewPath = path.resolve(process.cwd(), 'src/components/AcademicReinforcementView.tsx');` is already present (`src/components/`, not `src/views/`).
   - Consequently, both assertion checks passed with 0 errors in the Vitest run.

---

## 2. Logic Chain

1. **Root Cause Analysis of Delimiter Balance Errors**:
   - In Latin American textbooks, dollar currency amounts are commonly written as `$115` or `$80`.
   - In `AcademicReinforcementView` and in `adversarialCurriculumStressM8.test.ts`, single dollar signs `$...$` are designated as KaTeX inline math delimiters.
   - When currency dollar signs are left unescaped without closing `$` (e.g. `answer: '$115 de saldo para ahorro'`), the delimiter balance validator counts an odd number of `$` characters in the field, causing Failure 1.
   - Furthermore, when multiple currency amounts appear within curly braces (e.g. `{$365, $365, $400, $420, $2,500}`), KaTeX matches the text between pairs of `$` as math expressions, causing KaTeX to attempt parsing raw Spanish prose and punctuation, causing Failure 2.1 (`Expected 'EOF', got '}'`).

2. **Root Cause Analysis of String Escape Sequences in JavaScript**:
   - In JavaScript string literals declared with single quotes (`'...'`), the sequence `\f` represents the Form Feed control character (`\u000c`).
   - When writing `\frac{1}{2}` inside `'...'`, JavaScript parses `\f` as ASCII 12, not `\` followed by `f`. When passed to KaTeX, KaTeX encounters the unexpected character `\u000c` and throws `KaTeX parse error: Unexpected character: '\f'`.
   - Similarly, `\p`, `\s`, `\{`, `\}` drop their backslashes in JavaScript string literals, transforming `\pm` into `pm`, `\sqrt` into `sqrt`, and `\{` into `{`.
   - In `grade11SegundoBach.ts:572`, the author attempted to escape the currency sign with `\\$66$`. In JavaScript, `\\$` evaluates to `\$`. Inside KaTeX math mode `$...$`, `\$66` is evaluated as `\66`, which KaTeX rejects because `\6` is an undefined control sequence.

3. **Root Cause Analysis of `normalizeLooseCurrencyDollar` Fragility**:
   - `src/data/minedCurriculum/grades/gradeHelpers.ts:26-32` previously contained:
     ```ts
     function normalizeLooseCurrencyDollar(text: string): string {
       const dollarMatches = text.match(/\$/g) || [];
       if (dollarMatches.length % 2 !== 0) {
         return text.replace(/\$(\d+)/g, '$1 dólares');
       }
       return text;
     }
     ```
   - *Flaw A*: If a field contains an even number of currency symbols (e.g. `$500` and `$385`), `dollarMatches.length % 2 === 0`, so the normalizer does nothing.
   - *Flaw B*: If a field has an odd number of dollars and contains `$15$` (a legitimate math number), `replace(/\$(\d+)/g, '$1 dólares')` replaces the opening `$15` with `15 dólares`, leaving a dangling closing `$`: `15 dólares$`. This is precisely what corrupted `grade11SegundoBach.ts:571` (`problema`).
   - *Flaw C*: The normalizer was only applied to `problema`, `solucion`, and `ejemplo`, but omitted from `conclusion`, `examples`, and `resuelve`.

4. **Deduction of the Remediation Strategy**:
   - **Step 1**: In the 4 curriculum files (`grade05QuintoGrado.ts`, `grade06SextoGrado.ts`, `grade07SeptimoGrado.ts`, `grade11SegundoBach.ts`), replace all loose currency dollar amounts with explicit word forms (`dólares`) in prose, and format mathematical formulas with standard KaTeX commands.
   - **Step 2**: Double-escape all LaTeX commands (`\\frac`, `\\pm`, `\\sqrt`, `\\implies`, `\\in`, `\\{`, `\\}`) in `grade11SegundoBach.ts` string literals.
   - **Step 3**: Fix question generator options in `grade07SeptimoGrado.ts:90-93` by placing integer math inside `$+$${ganancia}$ dólares` or pure strings.
   - **Step 4**: Strengthen `normalizeLooseCurrencyDollar` in `gradeHelpers.ts` to use a non-destructive regex and apply it across all fields (`problema`, `solucion`, `conclusion`, `ejemplo`, `examples`, and `resuelve`).

---

## 3. Caveats

- **No other grades affected**: Grades 1, 2, 3, 4, 8, 9, and 10 were verified to have 0 KaTeX delimiter balance errors and 0 KaTeX render syntax errors.
- **Content authenticity preserved**: None of the proposed edits alter the substantive pedagogical explanations, word count, or example structures. The average word count remains $>680$ words per lesson and 5 unique step-by-step examples remain intact.
- **Invariant preservation**: Base question bank (17,640 questions), 200 Notariado questions, contact numbers, and UI styles are completely untouched.

---

## 4. Conclusion & Exact Drop-In Code Replacements

The Worker Remediation agent must apply the following exact modifications across 5 files:

### Target File 1: `src/data/minedCurriculum/grades/grade05QuintoGrado.ts`

**Location**: Lines 364 to 368 (`mined-mat-5g-u07-l01`)

```ts
<<<< BEFORE (lines 364-368):
    'Con ingresos de $600 y egresos de $500, el saldo para ahorro es de $100 mensuales; 1 USD equivale a unos 7.80 GTQ.',
    [
      { exercise: 'Si una persona gana $500 y sus gastos fijos suman $385, ¿cuánto dinero le queda para ahorrar?', hint: 'Resta 500 - 385.', answer: '$115 de saldo para ahorro' },
      { exercise: 'Convierte 40 dólares a quetzales si la tasa es de 7.70 quetzales por cada dólar.', hint: 'Multiplica 40 x 7.70.', answer: '308 quetzales' }
    ],
==== AFTER:
    'Con ingresos de 600 dólares y egresos de 500 dólares, el saldo para ahorro es de 100 dólares mensuales; 1 USD equivale a unos 7.80 GTQ.',
    [
      { exercise: 'Si una persona gana 500 dólares y sus gastos fijos suman 385 dólares, ¿cuánto dinero le queda para ahorrar?', hint: 'Resta 500 - 385.', answer: '115 dólares de saldo para ahorro' },
      { exercise: 'Convierte 40 dólares a quetzales si la tasa es de 7.70 quetzales por cada dólar.', hint: 'Multiplica 40 x 7.70.', answer: '308 quetzales' }
    ],
>>>>
```

---

### Target File 2: `src/data/minedCurriculum/grades/grade06SextoGrado.ts`

**Edit 2.1 — Lesson `mined-mat-6g-u02-l01` (Lines 232, 235, 237, 241)**:

```ts
<<<< BEFORE (lines 232-241):
    'En una ruta del transporte colectivo en San Salvador, la tarifa autorizada de pasaje es de veinticinco centavos de dólar ($0.25) por usuario. El conductor desea una expresión matemática que le permita calcular de forma rápida la cantidad total de dinero recolectado para cualquier número x de pasajeros que aborden la unidad. Al mismo tiempo, en un monumento histórico de la capital se observa una placa conmemorativa con el año grabado en números romanos: MDCCCXXI. ¿Cómo se utilizan las letras y símbolos para representar cantidades variables en expresiones matemáticas y cuáles son las reglas oficiales del sistema de numeración romana?',
    'Para resolver la primera situación analizamos el patrón multiplicativo: si viaja 1 pasajero se recaudan 0.25 por 1; si viajan 2 se recaudan 0.25 por 2; si viajan 3 se recaudan 0.25 por 3. Cuando la cantidad de pasajeros cambia continuamente, utilizamos una letra minúscula como variable x para representarla. Así, la recaudación total en dólares se expresa algebraicamente como 0.25 por x (o 0.25x). Esta expresión permite calcular el valor numérico sustituyendo x por cualquier número natural. Para la numeración romana analizamos los símbolos fundamentales: M vale 1,000; D vale 500; C vale 100; L vale 50; X vale 10; V vale 5; e I vale 1. En MDCCCXXI aplicamos la regla de la suma: M (1,000) más D (500) más tres C (300) más dos X (20) más I (1), lo que suma exactamente 1821, año de la Independencia patria salvadoreña.',
    'Una **variable** es un símbolo o letra (como $x, y, n$) que representa una cantidad cuyo valor puede cambiar o ser desconocido. Una **expresión algebraica** combina variables, números y signos: $$\\text{Costo total} = c \\cdot x$$ El **sistema de numeración romana** utiliza 7 letras: $\\text{I} = 1, \\text{V} = 5, \\text{X} = 10, \\text{L} = 50, \\text{C} = 100, \\text{D} = 500, \\text{M} = 1000$. Reglas: letras menores a la derecha se suman; I, X, C a la izquierda de su orden superior inmediato se restan; y no se repiten letras más de 3 veces seguidas (V, L, D nunca se repiten).',
    'Para x pasajeros a $0.25 el total es 0.25x; el año 1821 se escribe MDCCCXXI y 1994 se escribe MCMXCIV.',
    [
      { exercise: 'Escribe la expresión algebraica para el costo total de x cuadernos a $1.25 cada uno.', hint: 'Multiplica el precio unitario por la variable x.', answer: '1.25x' },
      { exercise: 'Convierte el número romano MCMXCIV al sistema decimal.', hint: 'M=1000, CM=900, XC=90, IV=4.', answer: '1994' }
    ],
    [
      'Ejemplo 1 (Traducción de lenguaje cotidiano a expresión variable): Expresar algebraicamente el costo de comprar n pupusas si cada una cuesta $0.80. Paso 1: Identificamos el precio unitario constante ($0.80) y la cantidad variable de pupusas (n). Paso 2: Multiplicamos el valor unitario por la cantidad. Solución: La expresión algebraica es 0.80n (u 0.80 x n).',
==== AFTER:
    'En una ruta del transporte colectivo en San Salvador, la tarifa autorizada de pasaje es de veinticinco centavos de dólar (0.25 dólares) por usuario. El conductor desea una expresión matemática que le permita calcular de forma rápida la cantidad total de dinero recolectado para cualquier número x de pasajeros que aborden la unidad. Al mismo tiempo, en un monumento histórico de la capital se observa una placa conmemorativa con el año grabado en números romanos: MDCCCXXI. ¿Cómo se utilizan las letras y símbolos para representar cantidades variables en expresiones matemáticas y cuáles son las reglas oficiales del sistema de numeración romana?',
    'Para resolver la primera situación analizamos el patrón multiplicativo: si viaja 1 pasajero se recaudan 0.25 por 1; si viajan 2 se recaudan 0.25 por 2; si viajan 3 se recaudan 0.25 por 3. Cuando la cantidad de pasajeros cambia continuamente, utilizamos una letra minúscula como variable x para representarla. Así, la recaudación total en dólares se expresa algebraicamente como 0.25 por x (o 0.25x). Esta expresión permite calcular el valor numérico sustituyendo x por cualquier número natural. Para la numeración romana analizamos los símbolos fundamentales: M vale 1,000; D vale 500; C vale 100; L vale 50; X vale 10; V vale 5; e I vale 1. En MDCCCXXI aplicamos la regla de la suma: M (1,000) más D (500) más tres C (300) más dos X (20) más I (1), lo que suma exactamente 1821, año de la Independencia patria salvadoreña.',
    'Una **variable** es un símbolo o letra (como $x, y, n$) que representa una cantidad cuyo valor puede cambiar o ser desconocido. Una **expresión algebraica** combina variables, números y signos: $$\\text{Costo total} = c \\cdot x$$ El **sistema de numeración romana** utiliza 7 letras: $\\text{I} = 1, \\text{V} = 5, \\text{X} = 10, \\text{L} = 50, \\text{C} = 100, \\text{D} = 500, \\text{M} = 1000$. Reglas: letras menores a la derecha se suman; I, X, C a la izquierda de su orden superior inmediato se restan; y no se repiten letras más de 3 veces seguidas (V, L, D nunca se repiten).',
    'Para x pasajeros a 0.25 dólares el total es 0.25x; el año 1821 se escribe MDCCCXXI y 1994 se escribe MCMXCIV.',
    [
      { exercise: 'Escribe la expresión algebraica para el costo total de x cuadernos a 1.25 dólares cada uno.', hint: 'Multiplica el precio unitario por la variable x.', answer: '1.25x' },
      { exercise: 'Convierte el número romano MCMXCIV al sistema decimal.', hint: 'M=1000, CM=900, XC=90, IV=4.', answer: '1994' }
    ],
    [
      'Ejemplo 1 (Traducción de lenguaje cotidiano a expresión variable): Expresar algebraicamente el costo de comprar n pupusas si cada una cuesta 0.80 dólares. Paso 1: Identificamos el precio unitario constante (0.80 dólares) y la cantidad variable de pupusas (n). Paso 2: Multiplicamos el valor unitario por la cantidad. Solución: La expresión algebraica es 0.80n (u 0.80 x n).',
>>>>
```

**Edit 2.2 — Lesson `mined-mat-6g-u04-l01` (Lines 278, 281-291)**:

```ts
<<<< BEFORE (lines 278, 281-291):
    'En un almacén comercial en San Salvador se exhibe un televisor inteligente con un precio base de doscientos dólares ($200) sin impuestos. La legislación salvadoreña establece que toda venta de bienes y servicios está gravada con el Impuesto a la Transferencia de Bienes Muebles y a la Prestación de Servicios, conocido comúnmente como IVA, cuya tasa fija es del 13%. Además, por temporada de promociones el almacén ofrece un descuento especial del 15% sobre el precio base antes de gravar el impuesto. ¿Cuál es el valor de la razón porcentual, cuánto dinero se descuenta, cuánto se paga de IVA y cuál es el precio final a cancelar en caja?',
...
    'El 13% de IVA de $200 es $26; el 25% de $80 es $20; con un descuento de 15% sobre $200 se paga $170.',
    [
      { exercise: 'Calcula el 13% de IVA correspondiente a una factura comercial con precio base de $150.', hint: 'Multiplica el precio base 150 por la tasa decimal 0.13.', answer: '$19.50 de impuesto IVA' },
      { exercise: 'Un par de zapatos tiene un precio de lista de $50 y cuenta con un 20% de descuento en almacén. ¿Cuánto dinero se cancela en caja?', hint: 'Calcula el 20% de 50 ($10) y resta esa rebaja del precio original.', answer: '$40 en total' }
    ],
    [
      'Ejemplo 1 (Cálculo directo del 13% de IVA oficial en compra escolar): Un lote de materiales pedagógicos tiene un precio base neto de $80 sin impuestos. ¿Cuánto dinero se cancela por concepto de IVA y cuál es el monto total facturado? Paso 1: Calculamos el valor del impuesto multiplicando el precio base por la tasa oficial del trece por ciento: 80 x 0.13 = $10.40 de IVA. Paso 2: Sumamos el impuesto al precio base original: 80 + 10.40 = $90.40. Solución: El valor del IVA es de $10.40 y el precio final cancelado asciende exactamente a $90.40.',
      'Ejemplo 2 (Cálculo de descuento comercial y valor final en tienda): Una camisa de vestir tiene un precio rotulado de $24 y se ofrece con una rebaja de liquidación del 25%. ¿Cuánto dinero se descuenta y cuánto debe pagar el comprador? Paso 1: Calculamos el monto de la rebaja multiplicando por la razón decimal 0.25: 24 x 0.25 = $6 de descuento directo. Paso 2: Restamos la rebaja del precio inicial: 24 - 6 = $18. Solución: El ahorro obtenido es de $6 y el precio final pagado es de $18.',
      'Ejemplo 3 (Cálculo del porcentaje correspondiente a un subconjunto de datos): En un grado escolar de 40 estudiantes, exactamente 14 alcanzaron la máxima calificación sobresaliente. ¿Qué porcentaje del aula representa este subgrupo? Paso 1: Planteamos el valor de la razón dividiendo los casos favorables entre el total: 14 / 40 = 0.35. Paso 2: Convertimos la razón a porcentaje multiplicando por el cien por ciento: 0.35 x 100 = 35%. Solución: Los alumnos destacados representan exactamente el 35% de la matrícula total.',
      'Ejemplo 4 (Desglose del precio base a partir de un valor final con IVA): Una factura comercial emitida en una librería indica un total cancelado de $113 con el trece por ciento de IVA ya incluido. ¿Cuál era el precio base antes de impuestos? Paso 1: Comprendemos que el precio facturado representa el 113% del precio neto original. Paso 2: Dividimos el total entre el factor 1.13: 113 / 1.13 = $100. Solución: El precio base sin impuestos era de $100 y el impuesto correspondiente fue de $13.',
      'Ejemplo 5 (Aumento salarial porcentual y cálculo del nuevo ingreso): Un trabajador del sector comercio percibe un salario básico de $365 al mes y recibe un incremento por antigüedad del 10%. ¿A cuánto ascenderá su nuevo ingreso mensual? Paso 1: Calculamos el incremento salarial multiplicando por 0.10: 365 x 0.10 = $36.50 de aumento. Paso 2: Sumamos el incremento al salario previo: 365 + 36.50 = $401.50. Solución: El nuevo salario asignado es de $401.50 mensuales.'
    ]
==== AFTER:
    'En un almacén comercial en San Salvador se exhibe un televisor inteligente con un precio base de doscientos dólares (200 dólares) sin impuestos. La legislación salvadoreña establece que toda venta de bienes y servicios está gravada con el Impuesto a la Transferencia de Bienes Muebles y a la Prestación de Servicios, conocido comúnmente como IVA, cuya tasa fija es del 13%. Además, por temporada de promociones el almacén ofrece un descuento especial del 15% sobre el precio base antes de gravar el impuesto. ¿Cuál es el valor de la razón porcentual, cuánto dinero se descuenta, cuánto se paga de IVA y cuál es el precio final a cancelar en caja?',
...
    'El 13% de IVA de 200 dólares es 26 dólares; el 25% de 80 dólares es 20 dólares; con un descuento de 15% sobre 200 dólares se paga 170 dólares.',
    [
      { exercise: 'Calcula el 13% de IVA correspondiente a una factura comercial con precio base de 150 dólares.', hint: 'Multiplica el precio base 150 por la tasa decimal 0.13.', answer: '19.50 dólares de impuesto IVA' },
      { exercise: 'Un par de zapatos tiene un precio de lista de 50 dólares y cuenta con un 20% de descuento en almacén. ¿Cuánto dinero se cancela en caja?', hint: 'Calcula el 20% de 50 (10 dólares) y resta esa rebaja del precio original.', answer: '40 dólares en total' }
    ],
    [
      'Ejemplo 1 (Cálculo directo del 13% de IVA oficial en compra escolar): Un lote de materiales pedagógicos tiene un precio base neto de 80 dólares sin impuestos. ¿Cuánto dinero se cancela por concepto de IVA y cuál es el monto total facturado? Paso 1: Calculamos el valor del impuesto multiplicando el precio base por la tasa oficial del trece por ciento: 80 x 0.13 = 10.40 dólares de IVA. Paso 2: Sumamos el impuesto al precio base original: 80 + 10.40 = 90.40 dólares. Solución: El valor del IVA es de 10.40 dólares y el precio final cancelado asciende exactamente a 90.40 dólares.',
      'Ejemplo 2 (Cálculo de descuento comercial y valor final en tienda): Una camisa de vestir tiene un precio rotulado de 24 dólares y se ofrece con una rebaja de liquidación del 25%. ¿Cuánto dinero se descuenta y cuánto debe pagar el comprador? Paso 1: Calculamos el monto de la rebaja multiplicando por la razón decimal 0.25: 24 x 0.25 = 6 dólares de descuento directo. Paso 2: Restamos la rebaja del precio inicial: 24 - 6 = 18 dólares. Solución: El ahorro obtenido es de 6 dólares y el precio final pagado es de 18 dólares.',
      'Ejemplo 3 (Cálculo del porcentaje correspondiente a un subconjunto de datos): En un grado escolar de 40 estudiantes, exactamente 14 alcanzaron la máxima calificación sobresaliente. ¿Qué porcentaje del aula representa este subgrupo? Paso 1: Planteamos el valor de la razón dividiendo los casos favorables entre el total: 14 / 40 = 0.35. Paso 2: Convertimos la razón a porcentaje multiplicando por el cien por ciento: 0.35 x 100 = 35%. Solución: Los alumnos destacados representan exactamente el 35% de la matrícula total.',
      'Ejemplo 4 (Desglose del precio base a partir de un valor final con IVA): Una factura comercial emitida en una librería indica un total cancelado de 113 dólares con el trece por ciento de IVA ya incluido. ¿Cuál era el precio base antes de impuestos? Paso 1: Comprendemos que el precio facturado representa el 113% del precio neto original. Paso 2: Dividimos el total entre el factor 1.13: 113 / 1.13 = 100 dólares. Solución: El precio base sin impuestos era de 100 dólares y el impuesto correspondiente fue de 13 dólares.',
      'Ejemplo 5 (Aumento salarial porcentual y cálculo del nuevo ingreso): Un trabajador del sector comercio percibe un salario básico de 365 dólares al mes y recibe un incremento por antigüedad del 10%. ¿A cuánto ascenderá su nuevo ingreso mensual? Paso 1: Calculamos el incremento salarial multiplicando por 0.10: 365 x 0.10 = 36.50 dólares de aumento. Paso 2: Sumamos el incremento al salario previo: 365 + 36.50 = 401.50 dólares. Solución: El nuevo salario asignado es de 401.50 dólares mensuales.'
    ]
>>>>
```

**Edit 2.3 — Lesson `mined-mat-6g-u05-l01` (Lines 306, 311)**:

```ts
<<<< BEFORE (lines 306, 311):
    [
      { exercise: 'Si 5 libras de queso especial cuestan $15 en el mercado, ¿cuánto costarán 8 libras al mismo precio unitario?', hint: 'Calcula primero el costo unitario por libra (15 / 5 = 3) y multiplica por 8.', answer: '$24 en total' },
      { exercise: 'Tres bombas de agua idénticas llenan una cisterna comunitaria en 6 horas. ¿En cuántas horas la llenarán 9 bombas con el mismo caudal?', hint: 'El producto es constante: 3 x 6 = 18. Divide ese producto entre las 9 bombas.', answer: '2 horas completas' }
    ],
    [
      'Ejemplo 1 (Verificación de proporcionalidad directa en tabla de valores): Determinar si los pares ordenados (2, 8), (3, 12) y (5, 20) corresponden a una relación de proporcionalidad directa. Paso 1: Calculamos los cocientes individuales y/x en cada fila: 8 / 2 = 4; 12 / 3 = 4; 20 / 5 = 4. Paso 2: Como el cociente es idéntico y constante (k = 4), se confirma que existe proporcionalidad directa. Solución: Las variables son directamente proporcionales y su modelo algebraico es y = 4x.',
      'Ejemplo 2 (Cálculo de cantidad desconocida mediante la constante directa): Si 4 cuadernos universitarios cuestan $6, ¿cuánto costarán 10 cuadernos al mismo precio unitario? Paso 1: Calculamos la constante de proporcionalidad o precio por unidad: k = 6 / 4 = $1.50 por cada cuaderno. Paso 2: Multiplicamos la constante por la cantidad requerida: y = 1.50 x 10 = $15. Solución: El costo de los 10 cuadernos es de exactamente $15.',
==== AFTER:
    [
      { exercise: 'Si 5 libras de queso especial cuestan 15 dólares en el mercado, ¿cuánto costarán 8 libras al mismo precio unitario?', hint: 'Calcula primero el costo unitario por libra (15 / 5 = 3) y multiplica por 8.', answer: '24 dólares en total' },
      { exercise: 'Tres bombas de agua idénticas llenan una cisterna comunitaria en 6 horas. ¿En cuántas horas la llenarán 9 bombas con el mismo caudal?', hint: 'El producto es constante: 3 x 6 = 18. Divide ese producto entre las 9 bombas.', answer: '2 horas completas' }
    ],
    [
      'Ejemplo 1 (Verificación de proporcionalidad directa en tabla de valores): Determinar si los pares ordenados (2, 8), (3, 12) y (5, 20) corresponden a una relación de proporcionalidad directa. Paso 1: Calculamos los cocientes individuales y/x en cada fila: 8 / 2 = 4; 12 / 3 = 4; 20 / 5 = 4. Paso 2: Como el cociente es idéntico y constante (k = 4), se confirma que existe proporcionalidad directa. Solución: Las variables son directamente proporcionales y su modelo algebraico es y = 4x.',
      'Ejemplo 2 (Cálculo de cantidad desconocida mediante la constante directa): Si 4 cuadernos universitarios cuestan 6 dólares, ¿cuánto costarán 10 cuadernos al mismo precio unitario? Paso 1: Calculamos la constante de proporcionalidad o precio por unidad: k = 6 / 4 = 1.50 dólares por cada cuaderno. Paso 2: Multiplicamos la constante por la cantidad requerida: y = 1.50 x 10 = 15 dólares. Solución: El costo de los 10 cuadernos es de exactamente 15 dólares.',
>>>>
```

**Edit 2.4 — Lesson `mined-mat-6g-u07-l01` (Line 359)**:

```ts
<<<< BEFORE (line 359):
      'Ejemplo 4 (Efecto de un valor atípico en la media): En los salarios de cinco empleados {$365, $365, $400, $420, $2,500}, comparar media y mediana. Paso 1: Media: (365 + 365 + 400 + 420 + 2,500) / 5 = 4,050 / 5 = $810. Paso 2: Mediana: el valor central ordenado es $400. Solución: La mediana ($400) representa mejor a la mayoría porque la media ($810) está distorsionada por el salario extremo de $2,500.',
==== AFTER:
      'Ejemplo 4 (Efecto de un valor atípico en la media): En los salarios de cinco empleados {365, 365, 400, 420, 2500} dólares, comparar media y mediana. Paso 1: Media: (365 + 365 + 400 + 420 + 2500) / 5 = 4050 / 5 = 810 dólares. Paso 2: Mediana: el valor central ordenado es 400 dólares. Solución: La mediana (400 dólares) representa mejor a la mayoría porque la media (810 dólares) está distorsionada por el salario extremo de 2500 dólares.',
>>>>
```

---

### Target File 3: `src/data/minedCurriculum/grades/grade07SeptimoGrado.ts`

**Edit 3.1 — Question Generator Archetype 7 (`MINED-MAT-7G-U01-Q026..Q030`, lines 86-94)**:

```ts
<<<< BEFORE (lines 86-94):
    generate: (v) => {
      const ganancia = 450 + v * 25;
      return {
        statement: `Si una cooperativa agrícola registra una pérdida económica de $${ganancia}$ dólares, ¿cómo se anota en el balance financiero con signo relativo?`,
        options: [`$+\\$${ganancia}$`, `$-\\$${ganancia}$`, `$\\$0$`, `$\\$${ganancia * 2}$`],
        correctAnswer: 'B',
        explanation: `Las ganancias se expresan con signo positivo ($+$) y las pérdidas se expresan con signo negativo ($-$), es decir, $-\\$${ganancia}$.`,
      };
    },
==== AFTER:
    generate: (v) => {
      const ganancia = 450 + v * 25;
      return {
        statement: `Si una cooperativa agrícola registra una pérdida económica de ${ganancia} dólares, ¿cómo se anota en el balance financiero con signo relativo?`,
        options: [`+$${ganancia}$ dólares`, `-$${ganancia}$ dólares`, `$0$ dólares`, `-$${ganancia * 2}$ dólares`],
        correctAnswer: 'B',
        explanation: `Las ganancias se expresan con signo positivo ($+$) y las pérdidas se expresan con signo negativo ($-$), es decir, -$${ganancia}$ dólares.`,
      };
    },
>>>>
```

**Edit 3.2 — Lesson `mined-mat-7g-u01-l01` (Lines 166 & 172)**:

```ts
<<<< BEFORE (lines 166, 172):
    [
      { exercise: 'Si una cooperativa cafetalera de El Salvador registra una pérdida de 350 dólares en el mes de marzo, ¿cómo se anota contablemente con número relativo?', hint: 'Las pérdidas y egresos se registran con signo negativo.', answer: '-$350 (o bien -350 dólares)' },
      { exercise: 'Un vehículo se desplaza 45 kilómetros hacia el Oeste en la carretera Panamericana, tomando San Salvador como punto cero y el Este como sentido positivo. Expresa su posición.', hint: 'El Oeste es el sentido opuesto al Este.', answer: '-45 km' }
    ],
    [
...
      'Ejemplo 3 (Balance financiero y estados de cuenta bancarios): Un comerciante del mercado central inicia la semana con un saldo favorable de 520 dólares, pero realiza pagos a distribuidores por 680 dólares, generando un déficit. Paso 1: Definimos el saldo nulo (cero dólares) como referencia de balance equilibrado. Paso 2: El ingreso inicial representa una cantidad a favor: $+520$ dólares. Paso 3: La diferencia resultante tras los pagos deja una deuda de 160 dólares, expresada con signo relativo negativo. Solución: -$160 (saldo deudor de 160 dólares).',
==== AFTER:
    [
      { exercise: 'Si una cooperativa cafetalera de El Salvador registra una pérdida de 350 dólares en el mes de marzo, ¿cómo se anota contablemente con número relativo?', hint: 'Las pérdidas y egresos se registran con signo negativo.', answer: '-350 dólares' },
      { exercise: 'Un vehículo se desplaza 45 kilómetros hacia el Oeste en la carretera Panamericana, tomando San Salvador como punto cero y el Este como sentido positivo. Expresa su posición.', hint: 'El Oeste es el sentido opuesto al Este.', answer: '-45 km' }
    ],
    [
...
      'Ejemplo 3 (Balance financiero y estados de cuenta bancarios): Un comerciante del mercado central inicia la semana con un saldo favorable de 520 dólares, pero realiza pagos a distribuidores por 680 dólares, generando un déficit. Paso 1: Definimos el saldo nulo (cero dólares) como referencia de balance equilibrado. Paso 2: El ingreso inicial representa una cantidad a favor: $+520$ dólares. Paso 3: La diferencia resultante tras los pagos deja una deuda de 160 dólares, expresada con signo relativo negativo. Solución: -160 dólares (saldo deudor de 160 dólares).',
>>>>
```

---

### Target File 4: `src/data/minedCurriculum/grades/grade11SegundoBach.ts`

**Edit 4.1 — Double-Escape LaTeX Backslashes in `mined-mat-2b-u01-l01` (Lines 370, 377, 378, 379, 380, 381)**:

```ts
<<<< BEFORE (lines 370, 377-381):
    'En $x^4 - 5x^2 + 4 = 0$, con $u = x^2$ se tiene $u^2 - 5u + 4 = (u-1)(u-4)=0 \implies x \in \{\pm 1, \pm 2\}$.',
...
      'Ejemplo 1 (Bicuadrática con cuatro raíces enteras): Resolver la ecuación bicuadrática $x^4 - 5x^2 + 4 = 0$. Paso 1: Hacemos el cambio de variable $u = x^2$, transformando la ecuación en $u^2 - 5u + 4 = 0$. Paso 2: Factorizamos el trinomio: $(u - 1)(u - 4) = 0$, lo que genera las soluciones $u = 1$ y $u = 4$. Paso 3: Retornamos a la variable $x$: $x^2 = 1 \implies x = \pm 1$; y $x^2 = 4 \implies x = \pm 2$. Solución: El conjunto solución es $S = \{-2, -1, 1, 2\}$.',
      'Ejemplo 2 (Bicuadrática mónina factorizable): Resolver la ecuación bicuadrática $x^4 - 10x^2 + 9 = 0$. Paso 1: Sustituimos la variable auxiliar $u = x^2$ para transformar el polinomio en la cuadrática estándar $u^2 - 10u + 9 = 0$. Paso 2: Factorizamos buscando dos números cuyo producto sea nueve positivo y cuya suma algebraica sea diez negativo: $(u - 9)(u - 1) = 0$, resultando las soluciones auxiliares $u = 9$ y $u = 1$. Paso 3: Despejamos la incógnita original extrayendo la raíz cuadrada en ambos miembros: $x^2 = 9 \implies x = \pm 3$; y de manera semejante $x^2 = 1 \implies x = \pm 1$. Solución: Las cuatro soluciones reales son $x \in \{-3, -1, 1, 3\}$.',
      'Ejemplo 3 (Bicuadrática con raíces irracionales): Resolver la ecuación bicuadrática $2x^4 - 7x^2 + 3 = 0$. Paso 1: Sea el cambio de variable $u = x^2$, transformando la expresión en la cuadrática no mónina $2u^2 - 7u + 3 = 0$. Paso 2: Factorizamos mediante el método de tijeras o aspas: $(2u - 1)(u - 3) = 0$, por lo que obtenemos las soluciones secundarias $u = \frac{1}{2}$ y $u = 3$. Paso 3: Despejamos la incógnita $x$ racionalizando el radical cuando sea necesario: $x = \pm \sqrt{\frac{1}{2}} = \pm \frac{\sqrt{2}}{2}$; y para la segunda raíz $x = \pm \sqrt{3}$. Solución: El conjunto solución completo contiene cuatro raíces irracionales: $S = \{ \pm \frac{\sqrt{2}}{2}, \pm \sqrt{3} \}.',
      'Ejemplo 4 (Bicuadrática con dos raíces reales y dos complejas): Resolver en los números reales la ecuación bicuadrática $x^4 - 3x^2 - 4 = 0$. Paso 1: Con $u = x^2$, escribimos $u^2 - 3u - 4 = 0$. Paso 2: Factorizamos: $(u - 4)(u + 1) = 0$, dando $u = 4$ y $u = -1$. Paso 3: Evaluamos las raíces: $x^2 = 4 \implies x = \pm 2$. Para $x^2 = -1$, no existen raíces reales ($\pm i$). Solución: Las únicas soluciones reales son $x = -2$ y $x = 2$.',
      'Ejemplo 5 (Bicuadrática con coeficientes de cuadrados perfectos): Resolver la ecuación bicuadrática $x^4 - 25x^2 + 144 = 0$. Paso 1: Cambiamos variable $u = x^2$, obteniendo $u^2 - 25u + 144 = 0$. Paso 2: Factorizamos: $(u - 16)(u - 9) = 0$, lo que produce $u = 16$ y $u = 9$. Paso 3: Despejamos la incógnita original: $x = \pm \sqrt{16} = \pm 4$; y $x = \pm \sqrt{9} = \pm 3$. Solución: Las soluciones reales son $x \in \{-4, -3, 3, 4\}$.'
==== AFTER:
    'En $x^4 - 5x^2 + 4 = 0$, con $u = x^2$ se tiene $u^2 - 5u + 4 = (u-1)(u-4)=0 \\implies x \\in \\{\\pm 1, \\pm 2\\}$.',
...
      'Ejemplo 1 (Bicuadrática con cuatro raíces enteras): Resolver la ecuación bicuadrática $x^4 - 5x^2 + 4 = 0$. Paso 1: Hacemos el cambio de variable $u = x^2$, transformando la ecuación en $u^2 - 5u + 4 = 0$. Paso 2: Factorizamos el trinomio: $(u - 1)(u - 4) = 0$, lo que genera las soluciones $u = 1$ y $u = 4$. Paso 3: Retornamos a la variable $x$: $x^2 = 1 \\implies x = \\pm 1$; y $x^2 = 4 \\implies x = \\pm 2$. Solución: El conjunto solución es $S = \\{-2, -1, 1, 2\\}$.',
      'Ejemplo 2 (Bicuadrática mónina factorizable): Resolver la ecuación bicuadrática $x^4 - 10x^2 + 9 = 0$. Paso 1: Sustituimos la variable auxiliar $u = x^2$ para transformar el polinomio en la cuadrática estándar $u^2 - 10u + 9 = 0$. Paso 2: Factorizamos buscando dos números cuyo producto sea nueve positivo y cuya suma algebraica sea diez negativo: $(u - 9)(u - 1) = 0$, resultando las soluciones auxiliares $u = 9$ y $u = 1$. Paso 3: Despejamos la incógnita original extrayendo la raíz cuadrada en ambos miembros: $x^2 = 9 \\implies x = \\pm 3$; y de manera semejante $x^2 = 1 \\implies x = \\pm 1$. Solución: Las cuatro soluciones reales son $x \\in \\{-3, -1, 1, 3\\}$.',
      'Ejemplo 3 (Bicuadrática con raíces irracionales): Resolver la ecuación bicuadrática $2x^4 - 7x^2 + 3 = 0$. Paso 1: Sea el cambio de variable $u = x^2$, transformando la expresión en la cuadrática no mónina $2u^2 - 7u + 3 = 0$. Paso 2: Factorizamos mediante el método de tijeras o aspas: $(2u - 1)(u - 3) = 0$, por lo que obtenemos las soluciones secundarias $u = \\frac{1}{2}$ y $u = 3$. Paso 3: Despejamos la incógnita $x$ racionalizando el radical cuando sea necesario: $x = \\pm \\sqrt{\\frac{1}{2}} = \\pm \\frac{\\sqrt{2}}{2}$; y para la segunda raíz $x = \\pm \\sqrt{3}$. Solución: El conjunto solución completo contiene cuatro raíces irracionales: $S = \\{ \\pm \\frac{\\sqrt{2}}{2}, \\pm \\sqrt{3} \\}$.',
      'Ejemplo 4 (Bicuadrática con dos raíces reales y dos complejas): Resolver en los números reales la ecuación bicuadrática $x^4 - 3x^2 - 4 = 0$. Paso 1: Con $u = x^2$, escribimos $u^2 - 3u - 4 = 0$. Paso 2: Factorizamos: $(u - 4)(u + 1) = 0$, dando $u = 4$ y $u = -1$. Paso 3: Evaluamos las raíces: $x^2 = 4 \\implies x = \\pm 2$. Para $x^2 = -1$, no existen raíces reales ($\\pm i$). Solución: Las únicas soluciones reales son $x = -2$ y $x = 2$.',
      'Ejemplo 5 (Bicuadrática con coeficientes de cuadrados perfectos): Resolver la ecuación bicuadrática $x^4 - 25x^2 + 144 = 0$. Paso 1: Cambiamos variable $u = x^2$, obteniendo $u^2 - 25u + 144 = 0$. Paso 2: Factorizamos: $(u - 16)(u - 9) = 0$, lo que produce $u = 16$ y $u = 9$. Paso 3: Despejamos la incógnita original: $x = \\pm \\sqrt{16} = \\pm 4$; y $x = \\pm \\sqrt{9} = \\pm 3$. Solución: Las soluciones reales son $x \\in \\{-4, -3, 3, 4\\}$.'
>>>>
```

**Edit 4.2 — Lesson `mined-mat-2b-u06-l01` (Lines 571 & 572)**:

```ts
<<<< BEFORE (lines 571, 572):
    'Un programa de ahorro juvenil cooperativo en un instituto nacional propone a un estudiante el siguiente plan financiero de dos modalidades: en la primera modalidad (ahorro lineal o aritmético), aporta $\$10$ durante la primera semana y en cada semana sucesiva incrementa su cuota en $\$4$ respecto a la semana previa. En la segunda modalidad (fondo de inversión geométrica), una cooperativa escolar reinvierte un capital inicial de $\$100$ a una tasa de ganancia semanal que multiplica el saldo por una razón de $r = \\frac{1}{2}$ para constituir un fondo de reserva perpetuo. Se requiere deducir el término general y calcular el saldo acumulado en la semana $15$ para la modalidad aritmética, formular el término general de una sucesión geométrica, y calcular la suma infinita convergente de la serie geométrica decreciente para determinar el límite teórico máximo del fondo perpetuo.',
    'Para la primera modalidad, los aportes forman una **sucesión aritmética** con primer término $a_1 = 10$ y diferencia común constante $d = 4$. El término general de una progresión aritmética viene dado por $a_n = a_1 + (n - 1)d$. Para la semana $n = 15$, el aporte correspondiente es: $a_{15} = 10 + (15 - 1)(4) = 10 + 14(4) = 10 + 56 = \\$66$. Para calcular el ahorro total acumulado tras las quince semanas, aplicamos la fórmula de la suma de los primeros $n$ términos de una sucesión aritmética: $S_n = \\frac{n(a_1 + a_n)}{2}$. Sustituyendo: $S_{15} = \\frac{15(a_1 + a_{15})}{2} = \\frac{15(10 + 66)}{2} = \\frac{15(76)}{2} = 15 \\cdot 38 = \\$570$. Para la segunda modalidad, consideramos una **sucesión geométrica** donde cada término se obtiene multiplicando el anterior por una razón fija $r$. Su término general es $a_n = a_1 \\cdot r^{n-1}$. La suma finita de sus primeros $n$ términos viene dada por $S_n = \\frac{a_1(1 - r^n)}{1 - r}$ (para $r \\neq 1$). Cuando $|r| < 1$, el término $r^n \\to 0$ conforme $n \\to \\infty$, convergiendo la serie a $S_\\infty = \\frac{a_1}{1 - r} = \\frac{100}{1 - 1/2} = \\$200$. El fondo perpetuo converge a doscientos dólares.',
==== AFTER:
    'Un programa de ahorro juvenil cooperativo en un instituto nacional propone a un estudiante el siguiente plan financiero de dos modalidades: en la primera modalidad (ahorro lineal o aritmético), aporta 10 dólares durante la primera semana y en cada semana sucesiva incrementa su cuota en 4 dólares respecto a la semana previa. En la segunda modalidad (fondo de inversión geométrica), una cooperativa escolar reinvierte un capital inicial de 100 dólares a una tasa de ganancia semanal que multiplica el saldo por una razón de $r = \\frac{1}{2}$ para constituir un fondo de reserva perpetuo. Se requiere deducir el término general y calcular el saldo acumulado en la semana 15 para la modalidad aritmética, formular el término general de una sucesión geométrica, y calcular la suma infinita convergente de la serie geométrica decreciente para determinar el límite teórico máximo del fondo perpetuo.',
    'Para la primera modalidad, los aportes forman una **sucesión aritmética** con primer término $a_1 = 10$ y diferencia común constante $d = 4$. El término general de una progresión aritmética viene dado por $a_n = a_1 + (n - 1)d$. Para la semana $n = 15$, el aporte correspondiente es: $a_{15} = 10 + (15 - 1)(4) = 10 + 14(4) = 10 + 56 = 66$ dólares. Para calcular el ahorro total acumulado tras las quince semanas, aplicamos la fórmula de la suma de los primeros $n$ términos de una sucesión aritmética: $S_n = \\frac{n(a_1 + a_n)}{2}$. Sustituyendo: $S_{15} = \\frac{15(a_1 + a_{15})}{2} = \\frac{15(10 + 66)}{2} = \\frac{15(76)}{2} = 15 \\cdot 38 = 570$ dólares. Para la segunda modalidad, consideramos una **sucesión geométrica** donde cada término se obtiene multiplicando el anterior por una razón fija $r$. Su término general es $a_n = a_1 \\cdot r^{n-1}$. La suma finita de sus primeros $n$ términos viene dada por $S_n = \\frac{a_1(1 - r^n)}{1 - r}$ (para $r \\neq 1$). Cuando $|r| < 1$, el término $r^n \\to 0$ conforme $n \\to \\infty$, convergiendo la serie a $S_\\infty = \\frac{a_1}{1 - r} = \\frac{100}{1 - 1/2} = 200$ dólares. El fondo perpetuo converge a doscientos dólares.',
>>>>
```

---

### Target File 5: `src/data/minedCurriculum/grades/gradeHelpers.ts`

**Location**: Lines 23 to 66 (`normalizeLooseCurrencyDollar` and `createPscerLesson`)

```ts
<<<< BEFORE (lines 23-66):
/**
 * Normaliza signos de dólar de moneda sueltos (ej. "$132") a "132 dólares" cuando no son pares KaTeX
 */
function normalizeLooseCurrencyDollar(text: string): string {
  const dollarMatches = text.match(/\$/g) || [];
  if (dollarMatches.length % 2 !== 0) {
    return text.replace(/\$(\d+)/g, '$1 dólares');
  }
  return text;
}

/**
 * Crea una lección estructurada bajo la metodología oficial ESMATE (P-S-C-E-R),
 * garantizando el cumplimiento estricto de >= 500 palabras sustantivas por tema/lección
 * y al menos 5 ejemplos concretos y distintos desarrollados paso a paso.
 */
export function createPscerLesson(
  id: string,
  lessonNumber: string,
  title: string,
  problema: string,
  solucion: string,
  conclusion: string,
  ejemplo: string,
  resuelve: PscerResuelveItem[],
  customExamples?: string[]
): PscerLesson {
  const safeProblemaBase = normalizeLooseCurrencyDollar(problema);
  const safeSolucionBase = normalizeLooseCurrencyDollar(solucion);
  const safeEjemploBase = normalizeLooseCurrencyDollar(ejemplo);
  const examples = customExamples && customExamples.length > 0 ? customExamples : [];

  return {
    id,
    lessonNumber,
    title,
    problema: safeProblemaBase,
    solucion: safeSolucionBase,
    conclusion,
    ejemplo: safeEjemploBase || (examples.length > 0 ? examples[0] : ''),
    examples,
    resuelve: resuelve || [],
  };
}
==== AFTER:
/**
 * Normaliza signos de dólar de moneda sueltos (ej. "$132" o "-$350") a "132 dólares"
 * cuando no forman pares matemáticos KaTeX, protegiendo fórmulas como $15$ o $$...$$.
 */
function normalizeLooseCurrencyDollar(text: string): string {
  if (!text || typeof text !== 'string') return text;
  if (!text.includes('$')) return text;

  const doubleStripped = text.replace(/\$\$[\s\S]*?\$\$/g, '');
  const singleMatches = doubleStripped.match(/\$/g) || [];
  if (singleMatches.length % 2 !== 0) {
    return text.replace(/(?:-\s*)?\$([0-9]+(?:,[0-9]{3})*(?:\.[0-9]+)?)(?!\$)/g, (match, num) => {
      const prefix = match.startsWith('-') ? '-' : '';
      return `${prefix}${num} dólares`;
    });
  }
  return text;
}

/**
 * Crea una lección estructurada bajo la metodología oficial ESMATE (P-S-C-E-R),
 * garantizando el cumplimiento estricto de >= 500 palabras sustantivas por tema/lección
 * y al menos 5 ejemplos concretos y distintos desarrollados paso a paso.
 */
export function createPscerLesson(
  id: string,
  lessonNumber: string,
  title: string,
  problema: string,
  solucion: string,
  conclusion: string,
  ejemplo: string,
  resuelve: PscerResuelveItem[],
  customExamples?: string[]
): PscerLesson {
  const safeProblemaBase = normalizeLooseCurrencyDollar(problema);
  const safeSolucionBase = normalizeLooseCurrencyDollar(solucion);
  const safeConclusionBase = normalizeLooseCurrencyDollar(conclusion);
  const safeEjemploBase = normalizeLooseCurrencyDollar(ejemplo);
  const rawExamples = customExamples && customExamples.length > 0 ? customExamples : [];
  const safeExamples = rawExamples.map(normalizeLooseCurrencyDollar);
  const safeResuelve = (resuelve || []).map((r) => ({
    exercise: normalizeLooseCurrencyDollar(r.exercise),
    hint: r.hint ? normalizeLooseCurrencyDollar(r.hint) : r.hint,
    answer: r.answer ? normalizeLooseCurrencyDollar(r.answer) : r.answer,
  }));

  return {
    id,
    lessonNumber,
    title,
    problema: safeProblemaBase,
    solucion: safeSolucionBase,
    conclusion: safeConclusionBase,
    ejemplo: safeEjemploBase || (safeExamples.length > 0 ? safeExamples[0] : ''),
    examples: safeExamples,
    resuelve: safeResuelve,
  };
}
>>>>
```

---

## 5. Verification Method

Once Worker Remediation has applied these replacements, independently verify the repairs using the following commands:

1. **Verify Adversarial KaTeX Delimiters & Render Harness**:
   ```powershell
   npx vitest run tests/adversarialCurriculumStressM8.test.ts
   ```
   *Expected outcome*: All 33 tests pass with 0 errors.

2. **Verify Full Automated Test Suite**:
   ```powershell
   npm test
   ```
   *Expected outcome*: 37 test files passed (37), 617+ tests passed, exit code 0.

3. **Verify System Invariants & Compilations**:
   ```powershell
   npm run typecheck
   npm run validate:bank
   npm run validate:i18n
   npm run build
   ```
   *Expected outcome*: All 4 commands exit with code 0.

4. **Verify Git Repository Untouched**:
   ```powershell
   git status
   ```
   *Expected outcome*: Working tree clean of unauthorized commits/pushes.

# Handoff Report: Empirical Adversarial Stress Testing (Milestone M8)

**Author**: `teamwork_challenger` (empirical_challenger)  
**Roles**: critic, specialist  
**Working Directory**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\challenger_m8\`  
**Target Milestone**: M8 — Global Stress Testing & Forensic Validation  
**Date**: 2026-10-31  
**Verdict**: **REQUEST_CHANGES**

---

## 1. Observation

### 1.1 Test Suite & Verification Commands Executed

1. **`npm run typecheck`**:
   - Exit code: `0`
   - Output: `tsc --noEmit` exited with 0 errors.

2. **`npm test`**:
   - Exit code: `0`
   - Results: 36 test files passed, 585 tests passed.

3. **`npm run validate:bank`**:
   - Exit code: `0`
   - Output: `UES=7500  ANSP=250  ASD=2190  AVANZO=3000  ENA=1400  ESCALAFON=3300  total=17640. Errores: 0`.

4. **`npm run validate:i18n`**:
   - Exit code: `0`
   - Output: `es (100%), nahuat (100%), lenca (100%), kakawira (100%), en (100%), ar (100%), zh (100%)`.

5. **`npm run build`**:
   - Exit code: `0`
   - Output: `vite v6.4.4 building for production... 1748 modules transformed. built in 22.46s`.

6. **Adversarial Stress Harness (`tests/adversarialCurriculumStressM8.test.ts`)**:
   - Command: `npx vitest run tests/adversarialCurriculumStressM8.test.ts`
   - Result: 30 tests passed, 3 failed.
   - Total units tested: 97
   - Total lessons tested: 112
   - Total custom examples tested: 560
   - Total unit simulator questions tested: 4,850
   - Total KaTeX math formulas parsed with `katex.renderToString({ throwOnError: true })`: 11,747

---

### 1.2 Verbatim Errors & Empirical Defects Observed

#### Defect 1: Unbalanced KaTeX Delimiters via Raw Currency Dollar Signs (14 Errors)
Raw currency dollar amounts (e.g. `$115`, `$1.25`, `$80`, `$10.40`, `$24`, `$150`, `$50`, `$15`, `$24`, `-$160`, `-$350`, `$10 dólares$`) were written into lesson fields without escaping or closing `$`, corrupting inline math delimiters:

1. `src/data/minedCurriculum/grades/grade05QuintoGrado.ts:366` (`mined-mat-5g-u07-l01`, `resuelve[0].answer`):
   ```ts
   answer: '$115 de saldo para ahorro'
   ```
   *Error*: `Unbalanced $ delimiter (count=1)`

2. `src/data/minedCurriculum/grades/grade06SextoGrado.ts:237` (`mined-mat-6g-u02-l01`, `resuelve[0].exercise`):
   ```ts
   exercise: 'Escribe la expresión algebraica para el costo total de x cuadernos a $1.25 cada uno.'
   ```
   *Error*: `Unbalanced $ delimiter (count=1)`

3. `src/data/minedCurriculum/grades/grade06SextoGrado.ts:287` (`mined-mat-6g-u04-l01`, `examples[0]`):
   ```ts
   'Ejemplo 1 (Cálculo directo del 13% de IVA oficial en compra escolar): Un lote de materiales pedagógicos tiene un precio base neto de $80 sin impuestos. ¿Cuánto dinero se cancela por concepto de IVA y cuál es el monto total facturado? Paso 1: Calculamos el valor del impuesto multiplicando el precio base por la tasa oficial del trece por ciento: 80 x 0.13 = $10.40 de IVA. Paso 2: Sumamos el impuesto al precio base original: 80 + 10.40 = $90.40. Solución: El valor del IVA es de $10.40 y el precio final cancelado asciende exactamente a $90.40.'
   ```
   *Error*: `Unbalanced $ delimiter (count=5)`

4. `src/data/minedCurriculum/grades/grade06SextoGrado.ts:288` (`mined-mat-6g-u04-l01`, `examples[1]`):
   ```ts
   'Ejemplo 2 (Cálculo de descuento comercial y valor final en tienda): Una camisa de vestir tiene un precio rotulado de $24 y se ofrece con una rebaja de liquidación del 25%. ¿Cuánto dinero se descuenta y cuánto debe pagar el comprador? Paso 1: Calculamos el monto de la rebaja multiplicando por la razón decimal 0.25: 24 x 0.25 = $6 de descuento directo. Paso 2: Restamos la rebaja del precio inicial: 24 - 6 = $18. Solución: El ahorro obtenido es de $6 y el precio final pagado es de $18.'
   ```
   *Error*: `Unbalanced $ delimiter (count=5)`

5. `src/data/minedCurriculum/grades/grade06SextoGrado.ts:283` (`mined-mat-6g-u04-l01`, `resuelve[0].exercise`):
   ```ts
   'Calcula el 13% de IVA correspondiente a una factura comercial con precio base de $150.'
   ```
   *Error*: `Unbalanced $ delimiter (count=1)`

6. `src/data/minedCurriculum/grades/grade06SextoGrado.ts:283` (`mined-mat-6g-u04-l01`, `resuelve[0].answer`):
   ```ts
   answer: '$19.50 de impuesto IVA'
   ```
   *Error*: `Unbalanced $ delimiter (count=1)`

7. `src/data/minedCurriculum/grades/grade06SextoGrado.ts:284` (`mined-mat-6g-u04-l01`, `resuelve[1].exercise`):
   ```ts
   'Un par de zapatos tiene un precio de lista de $50 y cuenta con un 20% de descuento en almacén. ¿Cuánto dinero se cancela en caja?'
   ```
   *Error*: `Unbalanced $ delimiter (count=1)`

8. `src/data/minedCurriculum/grades/grade06SextoGrado.ts:284` (`mined-mat-6g-u04-l01`, `resuelve[1].hint`):
   ```ts
   hint: 'Calcula el 20% de 50 ($10) y resta esa rebaja del precio original.'
   ```
   *Error*: `Unbalanced $ delimiter (count=1)`

9. `src/data/minedCurriculum/grades/grade06SextoGrado.ts:284` (`mined-mat-6g-u04-l01`, `resuelve[1].answer`):
   ```ts
   answer: '$40 en total'
   ```
   *Error*: `Unbalanced $ delimiter (count=1)`

10. `src/data/minedCurriculum/grades/grade06SextoGrado.ts:306` (`mined-mat-6g-u05-l01`, `resuelve[0].exercise`):
    ```ts
    'Si 5 libras de queso especial cuestan $15 en el mercado...'
    ```
    *Error*: `Unbalanced $ delimiter (count=1)`

11. `src/data/minedCurriculum/grades/grade06SextoGrado.ts:306` (`mined-mat-6g-u05-l01`, `resuelve[0].answer`):
    ```ts
    answer: '$24 en total'
    ```
    *Error*: `Unbalanced $ delimiter (count=1)`

12. `src/data/minedCurriculum/grades/grade07SeptimoGrado.ts:303` (`mined-mat-7g-u01-l01`, `examples[2]`):
    ```ts
    '... Solución: -$160 (saldo deudor de 160 dólares).'
    ```
    *Error*: `Unbalanced $ delimiter (count=3)`

13. `src/data/minedCurriculum/grades/grade07SeptimoGrado.ts:307` (`mined-mat-7g-u01-l01`, `resuelve[0].answer`):
    ```ts
    answer: '-$350 (o bien -350 dólares)'
    ```
    *Error*: `Unbalanced $ delimiter (count=1)`

14. `src/data/minedCurriculum/grades/grade11SegundoBach.ts:571` (`mined-mat-2b-u06-l01`, `problema`):
    ```ts
    'Un programa de ahorro juvenil cooperativo en un instituto nacional propone a un estudiante el siguiente plan financiero de dos modalidades: en la primera modalidad (ahorro lineal o aritmético), aporta $10 dólares$ durante la primera semana y en cada semana sucesiva incrementa su cuota en $4 dólares$ respecto a la semana previa. En la segunda modalidad (fondo de inversión geométrica), una cooperativa escolar reinvierte un capital inicial de $100 dólares$ a una tasa de ganancia semanal que multiplica el saldo por una razón de $r = \\frac{1}{2}$ para constituir un fondo de reserva perpetuo. Se requiere deducir el término general y calcular el saldo acumulado en la semana 15 dólares$ para la modalidad aritmética, formular el término general de una sucesión geométrica, y calcular la suma infinita convergente de la serie geométrica decreciente para determinar el límite teórico máximo del fondo perpetuo.'
    ```
    *Error*: `Unbalanced $ delimiter (count=9)`

---

#### Defect 2: KaTeX Parse / Syntax Errors in Lesson Contents (7 Errors)

1. `src/data/minedCurriculum/grades/grade06SextoGrado.ts:359` (`mined-mat-6g-u07-l01`, `examples[3]`):
   ```ts
   'Ejemplo 4 (Efecto de un valor atípico en la media): En los salarios de cinco empleados {$365, $365, $400, $420, $2,500}, comparar media y mediana. Paso 1: Media: (365 + 365 + 400 + 420 + 2,500) / 5 = 4,050 / 5 = $810. Paso 2: Mediana: el valor central ordenado es $400. Solución: La mediana ($400) representa mejor a la mayoría porque la media ($810) está distorsionada por el salario extremo de $2,500.'
   ```
   *Verbatim KaTeX Exception*:
   `ParseError: KaTeX parse error: Expected 'EOF', got '}' at position 6: 2,500}̲, comparar medi…`

2. `src/data/minedCurriculum/grades/grade11SegundoBach.ts:379` (`mined-mat-2b-u01-l01`, `examples[2]`):
   ```ts
   'Ejemplo 3 (Bicuadrática con raíces irracionales): Resolver la ecuación bicuadrática $2x^4 - 7x^2 + 3 = 0$. Paso 1: Sea el cambio de variable $u = x^2$, transformando la expresión en la cuadrática no mónina $2u^2 - 7u + 3 = 0$. Paso 2: Factorizamos mediante el método de tijeras o aspas: $(2u - 1)(u - 3) = 0$, por lo que obtenemos las soluciones secundarias $u = \frac{1}{2}$ y $u = 3$. Paso 3: Despejamos la incógnita $x$ racionalizando el radical cuando sea necesario: $x = \pm \sqrt{\frac{1}{2}} = \pm \frac{\sqrt{2}}{2}$; y para la segunda raíz $x = \pm \sqrt{3}$. Solución: El conjunto solución completo contiene cuatro raíces irracionales: $S = \{ \pm \frac{\sqrt{2}}{2}, \pm \sqrt{3} \}.'
   ```
   *Verbatim KaTeX Exceptions*:
   - `KaTeX parse error: Unexpected character: '\f' at position 5: u = \f̲rac{1}{2}`
   - `KaTeX parse error: Unexpected character: '\f' at position 13: x = pm sqrt{\f̲rac{1}{2}} = pm…`
   - `KaTeX parse error: Unexpected character: '\f' at position 10: S = { pm \f̲rac{sqrt{2}}{2}…`

3. `src/data/minedCurriculum/grades/grade11SegundoBach.ts:572` (`mined-mat-2b-u06-l01`, `solucion`):
   ```ts
   '$a_{15} = 10 + (15 - 1)(4) = 10 + 14(4) = 10 + 56 = \\$66$'
   '$S_{15} = \\frac{15(a_1 + a_{15})}{2} = \\frac{15(10 + 66)}{2} = \\frac{15(76)}{2} = 15 \\cdot 38 = \\$570$'
   '$S_\\infty = \\frac{a_1}{1 - r} = \\frac{100}{1 - 1/2} = \\$200$'
   ```
   *Verbatim KaTeX Exceptions*:
   - `KaTeX parse error: Undefined control sequence: \\6 at position 52: …4) = 10 + 56 = \\̲6̲6 dólares`
   - `KaTeX parse error: Undefined control sequence: \\5 at position 96: … 15 \\cdot 38 = \\̲5̲70 dólares`
   - `KaTeX parse error: Undefined control sequence: \\2 at position 54: …00}{1 - 1/2} = \\̲2̲00 dólares`

---

#### Defect 3: KaTeX Syntax Errors in Question Generator (25 Errors)

`src/data/minedCurriculum/grades/grade07SeptimoGrado.ts:90-93`:
```ts
options: [`$+\\$${ganancia}$`, `$-\\$${ganancia}$`, `$\\$0$`, `$\\$${ganancia * 2}$`],
explanation: `Las ganancias se expresan con signo positivo ($+$) y las pérdidas se expresan con signo negativo ($-$), es decir, $-\\$${ganancia}$.`,
```
Because of `\\$` inside template literals, the first and second `$` pair up around `+\\` or `-\\`, producing malformed expressions:
*Verbatim KaTeX Exceptions*:
`KaTeX parse error: Unexpected character: '\\' at position 2: +\\`
`KaTeX parse error: Unexpected character: '\\' at position 2: -\\`
This breaks across questions `MINED-MAT-7G-U01-Q026`, `Q027`, `Q028`, `Q029`, and `Q030` (5 questions x 5 formulas = 25 errors).

---

#### Defect 4: Fragile Currency Normalizer in `gradeHelpers.ts`

`src/data/minedCurriculum/grades/gradeHelpers.ts:26-32`:
```ts
function normalizeLooseCurrencyDollar(text: string): string {
  const dollarMatches = text.match(/\$/g) || [];
  if (dollarMatches.length % 2 !== 0) {
    return text.replace(/\$(\d+)/g, '$1 dólares');
  }
  return text;
}
```
*Vulnerabilities*:
1. If the text has an even number of currency symbols (e.g. `$80` and `$10.40`), `dollarMatches.length % 2 === 0`, so it does not run and leaves the text open to being swallowed as KaTeX math.
2. If count is odd, it replaces `$` followed by digits with `dólares`. If the currency amount was already delimited (`$10$`), it replaces the opening `$`, leaving `10 dólares$` which creates an unclosed trailing `$`.
3. `normalizeLooseCurrencyDollar` is never invoked on `examples` or `resuelve` items.

---

## 2. Logic Chain

1. **Empirical Verification of Requirement R1 & R4**:
   - `getAllUnits()` confirmed 97 units across 11 grades.
   - All 112 lessons exceed 500 substantive words (min: 506 words in `mined-mat-5g-u07-l01`, max: 898 words, mean: 684 words).
   - All 112 lessons contain >= 5 unique step-by-step examples with procedural depth (560 total examples).
   - Zero synthetic boilerplate patterns from `KNOWN_BOILERPLATE_PATTERNS`.
   - *Inference*: Pedagogical content volume, lesson structure, and curricular depth meet the substantive requirements.

2. **Empirical Stress-Testing of UI & KaTeX Math Rendering**:
   - When text containing unbalanced delimiters or unescaped currency amounts is rendered in `AcademicReinforcementView`, the KaTeX parser attempts to compile plain Spanish text as math mode, or fails silently.
   - When formulas containing `\f` (form-feed in `grade11SegundoBach.ts:379`) or `\\66` (`grade11SegundoBach.ts:572`) or `+\\` (`grade07SeptimoGrado.ts:90`) are passed to KaTeX, `katex.renderToString` throws unhandled parse errors (`ParseError: KaTeX parse error`).
   - In production, when `throwOnError: false` is used, the UI shows raw red error boxes like `KaTeX parse error: Unexpected character: '\f'` to students. When `throwOnError: true` is used, the component crashes.
   - *Direct inference*: The curriculum contains 46 mathematical syntax and delimiter defects that directly degrade the student user experience.

3. **Empirical Verification of Requirement R3 (Invariants)**:
   - 17,640 base bank questions verified via `npm run validate:bank` (0 errors).
   - 200 Notary questions (`not-01` to `not-200`) verified.
   - Zero occurrences of "7943 9901" in `src/` and `public/`.
   - Official WhatsApp +503 7657 4463 present.
   - CSS `text-white` on the header present.
   - *Inference*: All architectural invariants and question banks are preserved.

4. **Review-Only Constraint Enforcement**:
   - As an empirical challenger with role `critic` and constraint `Review-only — do NOT modify implementation code`, I am strictly forbidden from editing the source code in `src/data/minedCurriculum/` directly.
   - *Direct inference*: I must report these 46 empirical defects with exact file and line references, provide concrete remediation steps, and issue a verdict of **REQUEST_CHANGES**.

---

## 3. Caveats

- **Scope of Failures**: The defects are localized to 4 grade files (`grade05QuintoGrado.ts`, `grade06SextoGrado.ts`, `grade07SeptimoGrado.ts`, `grade11SegundoBach.ts`) and the helper `gradeHelpers.ts`. Grades 1, 2, 3, 4, 8, 9, and 10 have zero KaTeX errors.
- **Simulators Operational**: All 97 unit simulators successfully generate 50 questions with 4 distinct options and balanced keys; only 25 questions in `MINED-MAT-7G-U01` exhibit KaTeX syntax warnings in their options.
- No other caveats.

---

## 4. Conclusion

**Verdict**: **REQUEST_CHANGES**

While the curricular expansion achieves outstanding conceptual depth (112 lessons, 560+ step-by-step examples, all lessons > 500 substantive words, 0 boilerplate), the implementation contains **46 mathematical syntax and delimiter defects** that break KaTeX rendering:
1. **14 unbalanced `$` delimiter errors** caused by unescaped raw currency dollar amounts.
2. **7 fatal KaTeX parse errors in lesson texts** caused by single-backslash escapes (`\frac` evaluating to formfeed `\x0c`), raw currency inside curly braces, and invalid math control sequences (`\\66`).
3. **25 KaTeX parse errors in unit question options** in `grade07SeptimoGrado.ts:90-93` (`MINED-MAT-7G-U01-Q026..Q030`).
4. **Fragile `normalizeLooseCurrencyDollar`** in `gradeHelpers.ts:26-32`.

### Actionable Remediation Plan for the Worker:
1. In `src/data/minedCurriculum/grades/grade05QuintoGrado.ts:366`:
   - Replace `$115` with `115 dólares`.
2. In `src/data/minedCurriculum/grades/grade06SextoGrado.ts`:
   - Line 237: Replace `$1.25` with `1.25 dólares`.
   - Line 283: Replace `$150` with `150 dólares`; replace `$19.50` with `19.50 dólares`.
   - Line 284: Replace `$50`, `($10)`, `$40` with `50 dólares`, `(10 dólares)`, `40 dólares`.
   - Line 287-288: Replace all raw `$80`, `$10.40`, `$90.40`, `$24`, `$6`, `$18` with `dólares` in prose.
   - Line 306: Replace `$15` and `$24` with `dólares`.
   - Line 359: Replace `{$365, $365, $400, $420, $2,500}` with `{365, 365, 400, 420, 2500} dólares`; replace remaining raw `$` with `dólares`.
3. In `src/data/minedCurriculum/grades/grade07SeptimoGrado.ts`:
   - Lines 90-93: Change `options: [`$+\\$${ganancia}$`, ...]` to `options: [`$+$${ganancia} dólares`, `$-$${ganancia} dólares`, `0 dólares`, `${ganancia * 2} dólares`]` or `options: [`+$${ganancia}`, `-$${ganancia}`, `$0`, `$${ganancia * 2}`]` without double-backslash escapes inside math.
   - Lines 303 & 307: Replace `-$160` with `-160 dólares` (or `-$160$` with closing `$`); replace `-$350` with `-350 dólares`.
4. In `src/data/minedCurriculum/grades/grade11SegundoBach.ts`:
   - Line 379: Change `\frac` to `\\frac`, `\pm` to `\\pm`, `\sqrt` to `\\sqrt`.
   - Line 571: Replace raw `$10 dólares$`, `$4 dólares$`, `$100 dólares$`, `15 dólares$` with `10 dólares`, `4 dólares`, `100 dólares`, `semana 15`.
   - Line 572: Replace `\\$66$` with `66 dólares` (or `\\text{USD } 66`); replace `\\$570$` with `570 dólares`; replace `\\$200$` with `200 dólares`.
5. In `src/data/minedCurriculum/grades/gradeHelpers.ts:26-32`:
   - Refactor `normalizeLooseCurrencyDollar` to safely handle currency expressions and apply it across `examples` and `resuelve` items.

---

## 5. Verification Method

To independently verify these findings:

1. **Run the Challenger Empirical Stress Harness**:
   ```powershell
   npx vitest run tests/adversarialCurriculumStressM8.test.ts
   ```
   *Expected outcome before fix*: 3 tests fail with the 46 exact KaTeX delimiter and syntax errors documented in Section 1.2.
   *Expected outcome after worker remediation*: All 33 tests in `tests/adversarialCurriculumStressM8.test.ts` pass with 0 errors.

2. **Run Standard Suite**:
   ```powershell
   npm run typecheck
   npm test
   npm run validate:bank
   npm run validate:i18n
   npm run build
   ```
   *Expected outcome*: 100% pass across all commands.

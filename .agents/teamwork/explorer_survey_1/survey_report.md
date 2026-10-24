# INFORME TÉCNICO Y CATÁLOGO EXHAUSTIVO: SURVEY CURRICULAR MINED-ESMATE
## Refuerzo Curricular Oficial • Educación Básica & Media (1° Grado a 2° Bachillerato)
**KUSKAT • AntiGravity Platform**  
**Fecha:** 2026-10-24  
**Agente Investigador:** `explorer_survey_1`  
**Directorio de Trabajo:** `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\explorer_survey_1`

---

## 1. Resumen Ejecutivo

Este informe consolida la prospección técnica y el relevamiento exhaustivo del repositorio de materiales educativos del Ministerio de Educación, Ciencia y Tecnología de El Salvador (MINED) ubicado en `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate`, así como el análisis del estado actual del código en `APP-KUSKAT` (`src/data/` y `src/components/AcademicReinforcementView.tsx`).

Se determinaron con precisión:
1. **El inventario físico:** 135 libros y programas de estudio oficiales en formato PDF (5.92 GB), organizados en 16 carpetas por nivel escolar y programas por ciclo.
2. **La estructura pedagógica ESMATE:** La metodología oficial **P-S-C-E-R** (Problema inicial, Solución analítica, Conclusión con fórmulas formales y teoremas, Ejemplo guiado, y Resuelve para ejercitación).
3. **El corpus de los 11 grados:** Desde 1° de Educación Básica hasta 2° Año de Bachillerato (Primer Ciclo, Segundo Ciclo, Tercer Ciclo y Educación Media), con el desglose exacto de Tomos (1 y 2), Unidades oficiales, Lecciones y Clases según los programas curriculares vigentes.
4. **La propuesta de arquitectura de datos modular:** Un diseño desacoplado en `src/data/minedCurriculum/` con tipos fuertemente declarados, catálogo liviano para renderizado instantáneo, división por grado para code-splitting, soporte nativo de KaTeX vía `KaTeXMath` de `mathRenderer.tsx`, y simuladores evaluativos de 50 preguntas por unidad sin degradación de memoria ni sobrecarga del bundle de producción.

---

## 2. Inventario Físico de Recursos MINED (`Mined-Esmate`)

El directorio `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\Mined-Esmate` contiene el acervo documental oficial descargado del portal del MINED, respaldado por `INVENTARIO_LIBROS.md` y `resumen_descargas.json`.

### Distribución por Niveles y Asignaturas:

| Carpeta / Nivel | Materias Principales | Archivos Clave | Peso Total Aprox. |
| :--- | :--- | :--- | :--- |
| `00_Educacion_Inicial` | Desarrollo y Aprendizaje, Lectoescritura | Guías iniciales 1, 2, 3 | ~166 MB |
| `00_Educacion_Inicial_y_Parvularia` | Lenguaje y Lectoescritura, Marco Curricular | Marco curricular, Ciencia de la lectura | ~204 MB |
| `00_Educacion_Parvularia` | Desarrollo y Aprendizaje | Parvularia 4, 5 y 6 | ~20 MB |
| `00_General` | Matemática ESMATE | Guía metodológica 3° grado | ~14 MB |
| `01_Primer_Grado` | Matemática Números y Formas (T1 y T2), Comunicación | Libros de texto Tomos 1 y 2, Comunicación | ~642 MB |
| `02_Segundo_Grado` | Matemática ESMATE (T1 y T2), ESLENGUA (T1 y T2), Ciencia y Tec (T1 y T2), Artes, Edu Física | Libros de texto y Guías metodológicas | ~580 MB |
| `03_Tercer_Grado` | Matemática ESMATE, ESLENGUA, Ciencia y Tec, Ciudadanía y Valores, Edu Física | Libros de texto, Cuadernos de ejercicios | ~380 MB |
| `04_Cuarto_Grado` | Matemática ESMATE, ESLENGUA, Ciencia y Tec, Artes, Edu Física | Libros de texto, Cuadernos de ejercicios | ~443 MB |
| `05_Quinto_Grado` | Matemática ESMATE, ESLENGUA, Ciencia y Tec, Ciudadanía y Valores, Artes, Edu Física | Libros de texto, Guías metodológicas | ~413 MB |
| `06_Sexto_Grado` | Matemática ESMATE, ESLENGUA, Ciencia y Tec, Ciudadanía y Valores, Artes, Edu Física | Libros de texto, Programas 2°-6° | ~431 MB |
| `07_Septimo_Grado` | Matemática ESMATE, ESLENGUA, Ciencia y Tec, Ciudadanía y Valores | Libros de texto, Cuadernos de ejercicios | ~474 MB |
| `08_Octavo_Grado` | Matemática ESMATE, ESLENGUA, Ciencia y Tec, Ciudadanía y Valores | Libros de texto, Guías metodológicas | ~437 MB |
| `09_Noveno_Grado` | Matemática ESMATE, ESLENGUA, Ciencia y Tec, Ciudadanía y Valores | Libros de texto, Guías metodológicas | ~588 MB |
| `10_Primer_Ano_Bachillerato` | Matemática ESMATE, ESLENGUA, Ciencia y Tec, Ciudadanía y Valores | Libros de texto, Sugerencias metodológicas | ~323 MB |
| `11_Segundo_Ano_Bachillerato` | Matemática ESMATE, ESLENGUA | Libros de texto, Sugerencias metodológicas | ~135 MB |
| `Programas_Generales_por_Ciclo` | Ciclo I (1°-3°), Ciclo II (4°-6°), Ciclo III (7°-9°), Bachillerato General | Programas de estudio oficiales por ciclo | ~45 MB |

**Total:** 135 archivos descargados íntegros (firmas `%PDF-` validadas programáticamente).

---

## 3. Catálogo Oficial de Unidades Curriculares por Grado (MINED ESMATE)

A partir de la inspección programática de los **Programas de Estudio Oficiales** y de los **Libros de Texto**, se documenta a continuación la jerarquía temática oficial de Matemática ESMATE para cada uno de los 11 grados:

### 1° Grado: Educación Básica (Primer Ciclo)
- **Tomo 1:**
  - **Unidad 1: Conozcamos los conceptos básicos y los números del 0 al 10** (Orientación espacial, conteo, números cardinales del 0 al 10, números ordinales hasta el 10°, composición de números del 4 al 10).
  - **Unidad 2: Sumemos y restemos de forma horizontal con números del 0 al 10** (Sentido de la adición, sumas con totales hasta 10, cálculo de sumas con cero, sentido de la sustracción, restas con cero, sumas y restas combinadas).
  - **Unidad 3: Conozcamos los números del 11 al 20 y valor posicional** (Conteo del 11 al 20, decenas y unidades, orden en la recta numérica, comparación con mayor y menor).
  - **Unidad 4: Sumemos y restemos de forma horizontal con números hasta el 20** (Sumas sin llevar y restas sin prestar con minuendos hasta 19, sumas con tres sumandos).
- **Tomo 2:**
  - **Unidad 5: Conozcamos los números hasta 100** (Agrupaciones de 10 en 10, decenas completas, números hasta 99, la centena como 100 unidades, recta numérica hasta 100).
  - **Unidad 6: Aprendamos a medir longitudes y comparar** (Comparación directa e indirecta de objetos, longitud no estandarizada).
  - **Unidad 7: Identifiquemos figuras y líneas** (Líneas rectas y curvas, superficies planas y curvas, formas circulares, triangulares y rectangulares, patrones geométricos).
  - **Unidad 8: Conozcamos el tiempo y la moneda** (El reloj analógico y digital, horas en punto, monedas de 1, 5, 10 y 25 centavos de dólar y billete de 1 dólar).

---

### 2° Grado: Educación Básica (Primer Ciclo)
- **Tomo 1:**
  - **Unidad 1: Conozcamos los números hasta 1,000** (Números hasta 200, números de tres cifras, valor posicional: unidades, decenas, centenas, unidad de millar 1,000, recta numérica y números ordinales hasta el 20°).
  - **Unidad 2: Aprendamos más sobre la suma** (Suma de números hasta de dos cifras llevando a las decenas, suma conmutativa y asociativa, sumas de números de tres cifras sin llevar y llevando).
  - **Unidad 3: Conozcamos figuras y cuerpos geométricos** (Superficies de objetos, rectángulos, cuadrados, triángulos, vértices, lados, prismas rectangulares y cubos).
  - **Unidad 4: Aprendamos más sobre la resta** (Resta de números hasta de dos cifras prestando de las decenas, resta de números hasta de tres cifras prestando).
- **Tomo 2:**
  - **Unidad 5: Comencemos a multiplicar** (Sentido de la multiplicación como suma repetida, tablas de multiplicar del 2, 3, 4 y 5, tablas del 1 y del 0).
  - **Unidad 6: Conozcamos medidas de longitud** (El centímetro y milímetro, uso de la regla graduada, trazo de segmentos, suma y resta de longitudes).
  - **Unidad 7: Sigamos multiplicando** (Tablas de multiplicar del 6, 7, 8, 9 y 10, propiedad conmutativa de la multiplicación).
  - **Unidad 8: Conozcamos medidas de peso y capacidad** (La libra y media libra, el litro y medio litro, recipientes y balanzas).
  - **Unidad 9: Apliquemos la Matemática** (El reloj de agujas: horas y minutos, calendario: días, semanas y meses, uso del dinero: monedas y billetes, tablas de conteo y gráficas de barras).

---

### 3° Grado: Educación Básica (Primer Ciclo)
- **Unidad 1: Números hasta 10,000** (Lectura y escritura hasta 10,000, valor posicional: UM, C, D, U, comparación en la recta numérica, redondeo).
- **Unidad 2: Suma y resta de números hasta de cuatro cifras** (Suma vertical llevando hasta tres veces, resta vertical prestando hasta tres veces, estimación).
- **Unidad 3: Ángulos, líneas, círculos y esferas** (Elementos del ángulo, ángulo recto, agudo y obtuso, rectas paralelas y perpendiculares, circunferencia, radio y diámetro, la esfera).
- **Unidad 4: Multiplicación** (Multiplicación por decenas y centenas completas, multiplicación de dos y tres cifras por una cifra llevando en forma vertical).
- **Unidad 5: Figuras planas y cuerpos geométricos** (Triángulos equiláteros, isósceles y escalenos, cuadriláteros, cálculo del perímetro, conos y cilindros).
- **Unidad 6: División y comparación** (Sentido de la división como reparto equitativo y agrupamiento, división exacta e inexacta con residuo, relación entre dividendo, divisor, cociente y residuo: $D = d \cdot q + r$).
- **Unidad 7: Aplicaciones Matemáticas** (El metro y kilómetro, el gramo y kilogramo, balanzas, capacidad en mililitros).
- **Unidad 8: Fracciones** (Concepto de fracción unitaria y propia, numerador y denominador, representación gráfica y en la recta numérica, fracciones homogéneas).
- **Unidad 9: Monedas y gráfica de barras** (Operaciones con dólares y centavos, tablas de doble entrada, gráficas de barras verticales y horizontales con escala).
- **Unidad 10: Operaciones Combinadas** (Jerarquía de operaciones: paréntesis, multiplicación/división antes que suma/resta, resolución de problemas con dos operaciones).

---

### 4° Grado: Educación Básica (Segundo Ciclo)
- **Unidad 1: Números y operaciones de suma y resta** (Números hasta 1,000,000, sistema de numeración decimal posicional, sumas y restas con números de 5 y 6 cifras).
- **Unidad 2: Figuras y cuerpos geométricos** (Clasificación de triángulos por lados y ángulos, cuadriláteros: trapecios y paralelogramos, patrones de cuerpos geométricos).
- **Unidad 3: Multiplicación** (Multiplicación de números de 3 y 4 cifras por números de 2 y 3 cifras de forma analítica y vertical).
- **Unidad 4: Números decimales** (Décimas, centésimas y milésimas, valor posicional decimal, comparación y ubicación en la recta numérica).
- **Unidad 5: División** (División de números de 3 y 4 cifras entre números de 2 cifras, algoritmo de la división larga, estimación de cocientes).
- **Unidad 6: Área de cuadrados y rectángulos** (Concepto de centímetro cuadrado $\text{cm}^2$ y metro cuadrado $\text{m}^2$, fórmulas: $A_{\square} = l^2$, $A_{\text{rect}} = b \cdot h$).
- **Unidad 7: Operaciones con números decimales** (Suma y resta vertical de números decimales alineando el punto decimal).
- **Unidad 8: Fracciones** (Fracciones propias, impropias y mixtas, conversión entre mixtas e impropias, fracciones equivalentes por amplificación y simplificación, suma y resta de fracciones homogéneas).
- **Unidad 9: Medida y representación de datos** (Medidas del tiempo: segundos, horas, días; pictogramas y gráficas de barras con escalas grandes).

---

### 5° Grado: Educación Básica (Segundo Ciclo)
- **Unidad 1: Multiplicación y división de números decimales por números naturales** (Algoritmo y corrimiento del punto decimal).
- **Unidad 2: Ángulos y polígonos** (Medición con transportador, suma de ángulos internos de un triángulo: $180^\circ$, suma de ángulos de cuadriláteros: $360^\circ$, polígonos regulares).
- **Unidad 3: Multiplicación y división de números decimales por números decimales** (Regla del conteo de cifras decimales, división con residuo decimal).
- **Unidad 4: Gráficas de líneas** (Representación de cambios en el tiempo, lectura e interpretación de pendientes y tendencias).
- **Unidad 5: Multiplicación y división de números naturales y decimales** (Multiplicación y división abreviada por 10, 100, 1000).
- **Unidad 6: Cantidad por unidad** (Densidad poblacional, rapidez: $v = \frac{d}{t}$, rendimiento y comparaciones unitarias).
- **Unidad 7: Equivalencia de monedas y elaboración de presupuestos** (Conversión monetaria, ingresos, egresos, ahorro planificado).
- **Unidad 8: Áreas de triángulos y cuadriláteros** (Área del paralelogramo: $A = b \cdot h$, triángulo: $A = \frac{b \cdot h}{2}$, rombo: $A = \frac{D \cdot d}{2}$, trapecio: $A = \frac{(B + b) \cdot h}{2}$).
- **Unidad 9: Unidades de medida en el sistema inglés** (Pulgadas, pies, yardas, varas, libras, quintales y arrobas).
- **Unidad 10: Fracciones** (Mínimo Común Múltiplo MCM, fracciones heterogéneas, suma y resta con distinto denominador, multiplicación y división de fracciones por enteros).

---

### 6° Grado: Educación Básica (Segundo Ciclo)
- **Unidad 1: Operaciones con fracciones** (Multiplicación de fracción por fracción: $\frac{a}{b} \cdot \frac{c}{d} = \frac{ac}{bd}$, simplificación antes de operar, recíproco de un número).
- **Unidad 2: Cantidades variables y números romanos** (Uso de letras y símbolos $x, y$ para representar variables, reglas de numeración romana: I, V, X, L, C, D, M).
- **Unidad 3: División de fracciones y operaciones combinadas** (División como multiplicación por el recíproco: $\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c}$, operaciones combinadas con fracciones y decimales).
- **Unidad 4: Razones y porcentajes** (Concepto de razón $a : b$, valor de razón, porcentaje $\%$, tanto por ciento, cálculo del IVA $13\%$, descuentos y aumentos).
- **Unidad 5: Proporcionalidad** (Proporción $a : b = c : d$, propiedad fundamental: producto de extremos igual al de medios, proporcionalidad directa: $y = k \cdot x$, proporcionalidad inversa: $y = \frac{k}{x}$).
- **Unidad 6: Longitud de una circunferencia y área del círculo** (El número $\pi \approx 3.1416$, longitud: $C = 2\pi r$, área: $A = \pi r^2$).
- **Unidad 7: Análisis de datos** (Media aritmética: $\bar{x} = \frac{\sum x_i}{n}$, moda y mediana para datos no agrupados).
- **Unidad 8: Volumen de cubos y prismas rectangulares** (Centímetro cúbico $\text{cm}^3$, metro cúbico $\text{m}^3$, fórmula: $V = \text{Área de la base} \cdot \text{altura}$).
- **Unidad 9: Conversión de otros sistemas al sistema internacional** (Conversión entre sistema métrico, inglés y tradicional salvadoreño: varas cuadradas, manzanas).
- **Unidad 10: Traslaciones, simetrías y rotaciones** (Eje de simetría, simetría axial, simetría puntual de $180^\circ$, rotación y traslación en el plano).
- **Unidad 11: Formas de contar y ordenar objetos** (Diagramas de árbol, permutaciones elementales, combinaciones básicas y probabilidad clásica).

---

### 7° Grado: Educación Básica (Tercer Ciclo)
- **Unidad 1: Números positivos, negativos y el cero** (Concepto de números relativos, recta numérica, valor absoluto, opuesto de un número, relación de orden).
- **Unidad 2: Suma y resta de números positivos, negativos y el cero** (Suma de números con igual y diferente signo, supresión de paréntesis, resta como suma del opuesto).
- **Unidad 3: Multiplicación y división de números positivos, negativos y el cero** (Ley de signos: $(+) \cdot (+) = (+)$, $(-) \cdot (-) = (+)$, $(+) \cdot (-) = (-)$, potencias con base negativa, operaciones combinadas con jerarquía).
- **Unidad 4: Comunicación con símbolos** (Expresiones algebraicas, variables, coeficientes, términos algebraicos, valor numérico, reducción de términos semejantes).
- **Unidad 5: Ecuaciones de primer grado** (Propiedades de la igualdad: reflexiva, simétrica, transitiva, aditiva y multiplicativa, transposición de términos, resolución de ecuaciones $ax + b = c$, aplicaciones en problemas de la vida real).
- **Unidad 6: Proporcionalidad directa e inversa** (Definición formal en el plano cartesiano, gráfica de proporcionalidad directa: recta por el origen $y = ax$, gráfica de proporcionalidad inversa: hipérbola $xy = a$).
- **Unidad 7: Gráfica de faja y circular** (Distribución porcentual, cálculo de ángulos para gráficas circulares: $\text{grados} = \% \cdot 3.6^\circ$).
- **Unidad 8: Figuras planas y construcción de cuerpos geométricos** (Movimientos en el plano, ángulos entre rectas paralelas cortadas por una secante, construcción con compás y regla: mediatriz, bisectriz, sólidos platónicos y de revolución).

---

### 8° Grado: Educación Básica (Tercer Ciclo)
- **Unidad 1: Operaciones algebraicas** (Monomios y polinomios, grado de un polinomio, suma y resta de polinomios, multiplicación de monomio por polinomio y binomio por binomio, valor numérico de expresiones algebraicas complejas).
- **Unidad 2: Sistemas de ecuaciones de primer grado con dos incógnitas** (Definición de sistema $2 \times 2$, método de reducción por adición o sustracción, método de sustitución, método de igualación, resolución de problemas de mezclas, distancias y precios).
- **Unidad 3: Función lineal** (Razón de cambio, pendiente $m = \frac{y_2 - y_1}{x_2 - x_1}$, intercepto con el eje $y$ ($b$), forma pendiente-intercepto $y = mx + b$, trazado de la gráfica, ecuación a partir de dos puntos, paralelismo y perpendicularidad de rectas).
- **Unidad 4: Paralelismo y ángulos de un polígono** (Suma de ángulos internos de un polígono de $n$ lados: $S_i = 180^\circ(n - 2)$, suma de ángulos externos: $360^\circ$, ángulos alternos internos y correspondientes).
- **Unidad 5: Criterios de congruencia de triángulos** (Definición de figuras congruentes, criterios LLL (Lado-Lado-Lado), LAL (Lado-Ángulo-Lado), ALA (Ángulo-Lado-Ángulo), demostración formal paso a paso).
- **Unidad 6: Características de los triángulos y cuadriláteros** (Propiedades del triángulo isósceles y equilátero, paralelogramos: diagonales se cortan en su punto medio, rombos, rectángulos y cuadrados).
- **Unidad 7: Área y volumen de sólidos geométricos** (Prismas, pirámides, cilindros, conos y esferas; áreas laterales y totales; volúmenes: $V_{\text{cono}} = \frac{1}{3}\pi r^2 h$, $V_{\text{esfera}} = \frac{4}{3}\pi r^3$).
- **Unidad 8: Organización y análisis de datos estadísticos** (Tablas de frecuencia para datos agrupados, clases, intervalos, marcas de clase, histogramas, polígonos de frecuencia, media ponderada, mediana y moda en tablas agrupadas).

---

### 9° Grado: Educación Básica (Tercer Ciclo)
- **Unidad 1: Multiplicación de polinomios y productos notables** (Multiplicación de binomios: $(x + a)(x + b) = x^2 + (a + b)x + ab$, cuadrado de un binomio: $(a \pm b)^2 = a^2 \pm 2ab + b^2$, suma por la diferencia: $(a + b)(a - b) = a^2 - b^2$, factorización por factor común, trinomio cuadrado perfecto y diferencia de cuadrados).
- **Unidad 2: Raíz cuadrada y números reales** (Definición de raíz cuadrada aritmética, raíces cuadradas no exactas e irracionales, números reales $\mathbb{R}$, simplificación de radicales: $\sqrt{a^2 b} = a\sqrt{b}$, operaciones con raíces cuadradas, racionalización del denominador: $\frac{a}{\sqrt{b}} = \frac{a\sqrt{b}}{b}$).
- **Unidad 3: Ecuación cuadrática** (Forma general $ax^2 + bx + c = 0$, solución por factorización, solución por completación de cuadrados, Deducción de la fórmula general: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$, análisis del discriminante $\Delta = b^2 - 4ac$).
- **Unidad 4: Función cuadrática de la forma $y = ax^2 + c$** (Gráfica de la parábola, vértice $(0, c)$, eje de simetría $x = 0$, dilatación y contracción por el parámetro $a$, concavidad hacia arriba ($a > 0$) o hacia abajo ($a < 0$)).
- **Unidad 5: Figuras semejantes** (Razón de semejanza, criterios de semejanza de triángulos: AA, LLL, LAL; Teorema Fundamental de la Proporcionalidad / Teorema de Tales; relación de áreas ($k^2$) y volúmenes ($k^3$)).
- **Unidad 6: Teorema de Pitágoras** (Demostración geométrica y algebraica: $a^2 + b^2 = c^2$, cálculo de catetos e hipotenusa, recíproco del teorema de Pitágoras, aplicaciones en distancias y alturas en 2D y 3D).
- **Unidad 7: Ángulo inscrito y central en circunferencias** (Teorema del ángulo central: la medida del ángulo central es el doble del ángulo inscrito que subtiende el mismo arco $\theta = 2\alpha$, ángulo semiinscrito, cuadriláteros cíclicos).
- **Unidad 8: Medidas de dispersión** (Rango o amplitud, desviación respecto a la media, desviación media, varianza muestral y poblacional $\sigma^2 = \frac{\sum (x_i - \bar{x})^2}{n}$, desviación típica o estándar $\sigma = \sqrt{\sigma^2}$, coeficiente de variación).

---

### 1° Año de Bachillerato: Educación Media
- **Unidad 1: Números reales** (Operaciones con raíces n-ésimas $\sqrt[n]{a}$, propiedades de los exponentes racionales, racionalización con binomios conjugados, números irracionales notables $\pi, e, \phi$, intervalos en la recta numérica).
- **Unidad 2: Operaciones con polinomios y números complejos** (División sintética y regla de Ruffini, Teorema del Residuo y del Factor, factorización de polinomios de grado 3, definición de la unidad imaginaria $i = \sqrt{-1}$, conjunto de los números complejos $\mathbb{C} = \{a + bi\}$, conjugado, módulo y operaciones en forma binómica).
- **Unidad 3: Desigualdades** (Desigualdades lineales de una variable, desigualdades dobles, desigualdades cuadráticas $ax^2 + bx + c \geq 0$ mediante cuadro de variación de signos, aplicaciones económicas y de optimización).
- **Unidad 4: Funciones reales** (Definición de función, dominio y rango, gráfica de funciones por traslaciones horizontales y verticales: $f(x) = a(x - h)^2 + k$, vértice de la parábola $(h, k)$, valor máximo y mínimo en intervalos cerrados, función inyectiva y sobreyectiva).
- **Unidad 5: Resolución de triángulos oblicuángulos** (Razones trigonométricas en triángulos rectángulos: $\sin, \cos, \tan$, círculo trigonométrico unitario, Ley de Senos: $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$, Ley de Cosenos: $c^2 = a^2 + b^2 - 2ab\cos C$, cálculo de áreas con fórmula trigonométrica $A = \frac{1}{2}ab\sin C$).
- **Unidad 6: Identidades y ecuaciones trigonométricas** (Identidades pitagóricas: $\sin^2\theta + \cos^2\theta = 1, 1 + \tan^2\theta = \sec^2\theta$, fórmulas de suma y diferencia de ángulos, fórmulas de ángulo doble: $\sin(2\theta) = 2\sin\theta\cos\theta, \cos(2\theta) = \cos^2\theta - \sin^2\theta$, ecuaciones trigonométricas en el intervalo $[0, 2\pi)$).
- **Unidad 7: Vectores y números complejos** (Vectores en el plano cartesiano $\mathbb{R}^2$, magnitud $\|\vec{v}\|$ y dirección, producto escalar o producto punto $\vec{u} \cdot \vec{v} = u_x v_x + u_y v_y$, ortogonalidad, forma trigonométrica o polar de los números complejos $z = r(\cos\theta + i\sin\theta)$, Fórmula de De Moivre).
- **Unidad 8: Estadística descriptiva** (Población y muestra, tipos de muestreo: aleatorio simple, estratificado, sistemático; medidas de posición: cuartiles $Q_1, Q_2, Q_3$, deciles y percentiles; diagrama de caja y bigotes (box plot); coeficiente de variación y asimetría).

---

### 2° Año de Bachillerato: Educación Media (Prueba AVANZO / Admisión Universitaria UES)
- **Unidad 1: Ecuaciones** (Ecuaciones bicuadráticas de la forma $ax^4 + bx^2 + c = 0$ con sustitución $u = x^2$, ecuaciones con radicales de primer y segundo orden, ecuaciones racionales que se reducen a cuadráticas, sistemas de ecuaciones no lineales (recta y parábola, recta y circunferencia)).
- **Unidad 2: Línea recta** (Distancia entre dos puntos $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$, punto medio de un segmento, división de un segmento en una razón dada, ecuación punto-pendiente $y - y_1 = m(x - x_1)$, ecuación general $Ax + By + C = 0$, rectas paralelas ($m_1 = m_2$) y perpendiculares ($m_1 \cdot m_2 = -1$), distancia de un punto a una recta $d = \frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}$, ángulo entre dos rectas).
- **Unidad 3: Secciones cónicas** (Definición de lugar geométrico; La parábola: foco, directriz, vértice y ecuación canónica $y^2 = 4px$ y $x^2 = 4py$; La circunferencia: $(x - h)^2 + (y - k)^2 = r^2$; La elipse: focos, vértices, eje mayor, eje menor, excentricidad $e = \frac{c}{a} < 1$, ecuación canónica $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$; La hipérbola: asíntotas $y = \pm \frac{b}{a}x$, focos, ecuación $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$).
- **Unidad 4: Funciones trascendentales I** (Potencias enteras y racionales, leyes de exponentes, función exponencial $f(x) = a^x$ con $a > 0, a \neq 1$, asíntota horizontal $y = 0$, crecimiento y decaimiento exponencial, ecuaciones exponenciales con bases iguales y distintas).
- **Unidad 5: Funciones trascendentales II** (Función biyectiva y existencia de inversa, definición de la función logarítmica como inversa de la exponencial: $y = \log_a(x) \iff a^y = x$, propiedades de los logaritmos: producto, cociente, potencia, cambio de base $\log_a(x) = \frac{\ln x}{\ln a}$, ecuaciones logarítmicas, logaritmo natural $\ln(x)$ y base $e$).
- **Unidad 6: Sucesiones aritméticas y geométricas** (Definición de sucesión, término general de una progresión aritmética $a_n = a_1 + (n - 1)d$, suma de los primeros $n$ términos $S_n = \frac{n(a_1 + a_n)}{2}$; término general de una progresión geométrica $a_n = a_1 \cdot r^{n-1}$, suma de $n$ términos $S_n = \frac{a_1(1 - r^n)}{1 - r}$, series geométricas infinitas con $|r| < 1$: $S_\infty = \frac{a_1}{1 - r}$).
- **Unidad 7: Métodos de conteo** (Operaciones con conjuntos: unión, intersección, complemento; Principio de la Suma y Principio de la Multiplicación; Permutaciones sin repetición $P(n, r) = \frac{n!}{(n - r)!}$, permutaciones con repetición y circulares; Combinaciones $C(n, r) = \binom{n}{r} = \frac{n!}{r!(n - r)!}$; Teorema del Binomio de Newton y Triángulo de Pascal).
- **Unidad 8: Probabilidad** (Espacio muestral y eventos, definición axiomática de Kolmogorov, regla de Laplace para eventos equiprobables $P(A) = \frac{\text{casos favorables}}{\text{casos posibles}}$, probabilidad del complemento $P(A^c) = 1 - P(A)$, regla de la adición para eventos mutuamente excluyentes y no excluyentes $P(A \cup B) = P(A) + P(B) - P(A \cap B)$, probabilidad condicional $P(A|B) = \frac{P(A \cap B)}{P(B)}$, eventos independientes $P(A \cap B) = P(A) \cdot P(B)$, Teorema de Bayes).

---

## 4. Metodología Didáctica Oficial ESMATE: Estructura P-S-C-E-R

El programa nacional ESMATE (desarrollado por el MINED con la asistencia técnica de la Agencia de Cooperación Internacional del Japón - JICA) establece una secuencia didáctica fija de 5 pasos para cada lección:

```
┌────────────────────────────────────────────────────────┐
│  P (Problema Inicial)                                  │
│  Planteamiento contextualizado, gráfico o numérico     │
├────────────────────────────────────────────────────────┤
│  S (Solución Paso a Paso)                              │
│  Resolución intuitiva, analítica y guiada por pasos    │
├────────────────────────────────────────────────────────┤
│  C (Conclusión Teórica y Fórmulas KaTeX)               │
│  Teorema formal, axioma, regla general y rigor formal  │
├────────────────────────────────────────────────────────┤
│  E (Ejemplo Guiado de Aplicación)                      │
│  Demostración complementaria resuelta paso a paso      │
├────────────────────────────────────────────────────────┤
│  R (Resuelve / Práctica Formativa)                     │
│  Ejercicios de fijación individual con pistas y ayuda  │
└────────────────────────────────────────────────────────┘
```

### Características en el Código KUSKAT:
1. **Problema (P):** Texto descriptivo con datos precisos del problema escolar o de la vida cotidiana.
2. **Solución (S):** Procedimiento paso a paso desglosando la transformación matemática o conceptual.
3. **Conclusión (C):** Formalización con expresiones KaTeX perfectamente delimitadas (ej. `$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$`).
4. **Ejemplo (E):** Aplicación práctica con desarrollo completo para afianzar el contenido.
5. **Resuelve (R):** Batería de 2 a 4 problemas propuestos con orientaciones ("Consejo pedagógico" o "Pistas") y solución verificable.

---

## 5. Análisis del Estado Actual en `APP-KUSKAT`

### A. Vista Actual (`src/components/AcademicReinforcementView.tsx`)
1. **Tipografía del Encabezado (Requerimiento R1):**
   - Actualmente (líneas 539-541):
     ```tsx
     <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-montenegrin">
       Refuerzo Académico (1° a 9° Grado y Bachillerato)
     </h2>
     ```
   - No tiene la clase explícita `text-white drop-shadow-sm` exigida en el requerimiento.
   - Requiere actualización inmediata a:
     ```tsx
     <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-montenegrin text-white drop-shadow-sm">
     ```
2. **Estructura de Datos Incrustada:**
   - La vista contiene un arreglo estático `ACADEMIC_GRADES` definido directamente en el archivo del componente (líneas 44-496).
   - Solo cuenta con 1-2 temas descriptivos breves por grado, sin desglose oficial de Tomo 1 y Tomo 2, sin unidades oficiales completas, sin metodología P-S-C-E-R y sin simuladores interactivos.
3. **Módulos de Datos Existentes en `src/data/`:**
   - La carpeta `src/data/` contiene módulos especializados:
     * `csspHealthData.ts` (200 reactivos CSSP)
     * `anspAscensoData.ts` (200 reactivos ANSP)
     * `complianceAmlData.ts` (200 reactivos AML/SSF)
     * `notaryExamData.ts` (200 reactivos CSJ)
     * `saludPrimariaData.ts` (200 reactivos MINSAL)
     * `derechoAdministrativoData.ts` (200 reactivos LPA/Firma)
     * `ingenieriaCienciasData.ts` (200 reactivos KaTeX)
     * `technicalCoursesData.ts` (10 cursos vocacionales, 400 horas)
   - Actualmente **no existe la carpeta `src/data/minedCurriculum/`**.
4. **Motor Matemático KaTeX:**
   - `src/utils/mathRenderer.tsx` provee el componente de alto rendimiento memoizado:
     `import { KaTeXMath } from '../utils/mathRenderer';`
   - Renderiza expresiones en línea `$...$` o bloque `$$...$$` con caché LRU de alto rendimiento.

---

## 6. Propuesta de Arquitectura Modular de Datos (`src/data/minedCurriculum/`)

Para respaldar el corpus oficial de los 11 grados escolares con sus Tomos, Unidades, Lecciones P-S-C-E-R y los simuladores de **50 preguntas por unidad** sin comprometer la memoria del navegador ni el bundle de producción (preservando el límite de Rollup y las suites de pruebas automatizadas), se propone la siguiente arquitectura desacoplada:

### Estructura de Directorios Propuesta:

```
src/data/minedCurriculum/
├── index.ts                     # Punto de entrada unificado y re-exportaciones retrocompatibles
├── types.ts                     # Tipos e interfaces fuertemente tipados
├── catalog.ts                   # Metadatos livianos de grados, asignaturas, tomos y unidades (~20 KB)
├── curriculumService.ts         # Métodos de consulta, búsqueda y cargador de quizes/simuladores
└── grades/                      # Módulos desacoplados por grado escolar
    ├── grade01PrimerGrado.ts    # Unidades oficiales T1-T2, Lecciones P-S-C-E-R, simuladores 50 reactivos
    ├── grade02SegundoGrado.ts   # Unidades oficiales T1-T2, Lecciones P-S-C-E-R, simuladores 50 reactivos
    ├── grade03TercerGrado.ts    # Unidades oficiales, Lecciones P-S-C-E-R, simuladores 50 reactivos
    ├── grade04CuartoGrado.ts    # Unidades oficiales, Lecciones P-S-C-E-R, simuladores 50 reactivos
    ├── grade05QuintoGrado.ts    # Unidades oficiales, Lecciones P-S-C-E-R, simuladores 50 reactivos
    ├── grade06SextoGrado.ts     # Unidades oficiales, Lecciones P-S-C-E-R, simuladores 50 reactivos
    ├── grade07SeptimoGrado.ts   # Unidades oficiales, Lecciones P-S-C-E-R, simuladores 50 reactivos
    ├── grade08OctavoGrado.ts    # Unidades oficiales, Lecciones P-S-C-E-R, simuladores 50 reactivos
    ├── grade09NovenoGrado.ts    # Unidades oficiales, Lecciones P-S-C-E-R, simuladores 50 reactivos
    ├── grade10PrimerBach.ts     # Unidades oficiales, Lecciones P-S-C-E-R, simuladores 50 reactivos
    └── grade11SegundoBach.ts    # Unidades oficiales, Lecciones P-S-C-E-R, simuladores 50 reactivos
```

### Modelos e Interfaces TypeScript (`types.ts`):

```typescript
export type GradeLevelId =
  | '1-grado'
  | '2-grado'
  | '3-grado'
  | '4-grado'
  | '5-grado'
  | '6-grado'
  | '7-grado'
  | '8-grado'
  | '9-grado'
  | '1-bachillerato'
  | '2-bachillerato';

export type SubjectId =
  | 'matematica-esmate'
  | 'lenguaje-eslengua'
  | 'ciencia-tecnologia'
  | 'ciudadania-valores';

export type TomoNumber = 1 | 2;

export interface PscerLesson {
  id: string; // ej: "esmate-2b-u3-l1"
  lessonNumber: string; // ej: "1.1", "2.3"
  title: string; // ej: "La parábola y su foco"
  // Metodología oficial P-S-C-E-R:
  problema: string; // P: Problema inicial
  solucion: string; // S: Solución analítica paso a paso
  conclusion: string; // C: Teorema y fórmulas con KaTeX
  ejemplo?: string; // E: Ejemplo guiado resuelto
  resuelve: {
    // R: Práctica formativa
    exercise: string;
    hint?: string;
    answer?: string;
  }[];
}

export interface UnitQuestion {
  id: string; // ej: "MINED-MAT-2B-U03-Q001"
  unitId: string;
  gradeId: GradeLevelId;
  subjectId: SubjectId;
  statement: string; // Enunciado con KaTeX
  options: [string, string, string, string]; // [A, B, C, D]
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string; // Fundamento pedagógico paso a paso
  officialBookRef: string; // ej: "MINED ESMATE 2° Bachillerato, Unidad 3"
  distractorRationales?: Record<'A' | 'B' | 'C' | 'D', string>;
}

export interface CurriculumUnit {
  id: string; // ej: "mined-mat-2b-u03"
  unitNumber: number; // 3
  title: string; // "Secciones cónicas"
  subjectId: SubjectId;
  gradeId: GradeLevelId;
  tomo: TomoNumber; // 1 o 2
  summary: string;
  competencies: string[];
  lessons: PscerLesson[];
  questions: UnitQuestion[]; // Exactamente 50 preguntas validadas por unidad evaluada
}

export interface SubjectCurriculum {
  id: SubjectId;
  name: string;
  icon: string;
  color: string;
  badgeColor: string;
  summary: string;
  units: CurriculumUnit[];
}

export interface GradeCurriculumData {
  id: GradeLevelId;
  name: string;
  cycle: string;
  description: string;
  subjects: SubjectCurriculum[];
}
```

### Ventajas del Catálogo Liviano (`catalog.ts`):
- `catalog.ts` exporta únicamente los identificadores, nombres de unidades, recuentos de lecciones y preguntas, sin cargar el texto completo de lecciones ni los bancos de reactivos.
- La interfaz de usuario `AcademicReinforcementView.tsx` puede renderizar el árbol completo de 11 grados inmediatamente con consumo de memoria inferior a 2 MB.
- Al seleccionar una unidad para estudiar o evaluar, el cargador solicita el módulo específico o accede a la unidad seleccionada sin afectar a las demás.

---

## 7. Plan de Integración en la Interfaz (`AcademicReinforcementView.tsx`)

1. **Ajuste Estilístico R1:** Modificar la cabecera en `AcademicReinforcementView.tsx` aplicando `text-white font-black drop-shadow-sm` para legibilidad contrastada AAA.
2. **Selector Ergonómico Multinivel:**
   - Selector de Grado (1° a Bachillerato) mediante pestañas interactivas.
   - Selector de Asignatura (Matemática ESMATE, ESLENGUA, Ciencia y Tecnología, Ciudadanía).
   - Selector de Tomo (Tomo 1 / Tomo 2) condicional para los grados organizados en dos tomos.
3. **Visor de Lecciones P-S-C-E-R:**
   - Acordeón interactivo de Unidades oficiales.
   - Selector de Lección con pestañas visuales claras para las cinco fases:
     * 🟦 **P - Problema Inicial:** Con contexto gráfico o numérico.
     * 🟩 **S - Solución Paso a Paso:** Procedimiento matemático y razonamiento.
     * 🟨 **C - Conclusión y Fórmulas:** Renderizado con `KaTeXMath`.
     * 🟪 **E - Ejemplo Guiado:** Ejercicio de refuerzo modelado.
     * 🟧 **R - Resuelve:** Actividades con pistas didácticas desplegables.
4. **Simulador Evaluativo de 50 Preguntas por Unidad:**
   - Botón `"Iniciar Simulador de Unidad (50 Preguntas)"`.
   - Modos disponibles: **Modo Tutor** (retroalimentación instantánea tras cada reactivo) y **Modo Examen Formal** (temporizado con hoja de resultados final).
   - Opciones de cantidad de prueba: 10, 25 o las 50 preguntas completas.
   - Temporizador de práctica opcional (sin límite, 1m o 1.5m por reactivo).
   - Panel de revisión de errores y cálculo de porcentaje de dominio curricular.

---

## 8. Estrategia de Verificación y Preservación de Invariantes

La arquitectura propuesta garantiza el cumplimiento riguroso de todos los criterios de aceptación:
1. **Banco Base Intacto:** Los reactivos del currículo escolar residen en `src/data/minedCurriculum/` con prefijos `MINED-MAT-*`, `MINED-LEN-*`, etc., garantizando **cero colisiones** con los 17,640 reactivos base de `public/data/` (`npm run validate:bank` al 100%).
2. **Cero Errores de Tipos (`npm run typecheck`):** Interfaces TypeScript estrictas con opciones tipadas A, B, C, D y clave unívoca.
3. **Pruebas Unitarias Automatizadas:** Creación de `tests/academicReinforcement.test.ts` verificando:
   - Los 11 grados escolares (1° a 9° y 1°-2° Bachillerato).
   - Unidades oficiales con títulos idénticos a los libros MINED.
   - Cumplimiento de las 5 secciones P-S-C-E-R en las lecciones.
   - Cero IDs duplicados y 50 preguntas con opciones A/B/C/D válidas por unidad evaluada.
   - Integridad de las fórmulas KaTeX.
4. **Privacidad y Seguridad:** Cero ocurrencias de teléfonos privados (`git grep "7943 9901"` = 0) y preservación del canal oficial `+503 7657 4463`.
5. **Compilación Limpia:** Soporte en `vite.config.ts` mediante `manualChunks` para que el chunk curricular no exceda el umbral de advertencia.

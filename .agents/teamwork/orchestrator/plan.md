# Plan de Implementación: Expansión Curricular Oficial MINED-ESMATE (1° Grado a 2° Bachillerato, 97 Unidades)

## 1. Resumen Ejecutivo y Objetivos del Proyecto

El presente Plan de Implementación responde de manera estricta a los requerimientos especificados para el repositorio **APP-KUSKAT**:
- **Requisito R1 (Expansión curricular en 97 unidades)**: Dotar a cada unidad temática oficial del currículo ESMATE (1° a 9° Grado y 1° y 2° Año de Bachillerato) en `src/data/minedCurriculum/` de explicaciones conceptuales sustantivas de al menos 500 palabras y al menos 5 ejemplos resueltos paso a paso por tema, eliminando de forma definitiva el texto de relleno y las plantillas parametrizadas genéricas de `gradeHelpers.ts`.
- **Requisito R2 (Investigación web y aprobación explícita)**: Mapear exhaustivamente las 97 unidades contra las fuentes oficiales del MINED y someter el presente plan a aprobación explícita antes de modificar el código fuente de las lecciones.
- **Requisito R3 (Preservación de simuladores e invariantes del sistema)**: Mantener al 100% el funcionamiento de los simuladores interactivos de 50 preguntas por unidad (`generate50UnitQuestions`), preservar íntegramente las 17,640 preguntas base en `public/data/`, exactamente 200 preguntas de Notariado (`not-01` a `not-200`), cero ocurrencias del teléfono privado "7943 9901", presencia de WhatsApp oficial +503 7657 4463, clase `text-white` en el encabezado de Refuerzo Académico, modelo 100% financiado por publicidad y cero commits/pushes sin autorización.
- **Requisito R4 (Verificación automatizada de contenido)**: Incorporar en la suite de pruebas (`npm test`) un validador programático riguroso que verifique el conteo de $\ge 500$ palabras sustantivas y $\ge 5$ ejemplos únicos resueltos paso a paso por lección, asegurando que todos los comandos del proyecto (`typecheck`, `test`, `build`, `validate:bank`, `validate:i18n`) pasen al 100%.

---

## 2. Fuentes Oficiales Autoritativas Investigadas

La investigación documental y web realizada por el equipo técnico confirmó las fuentes institucionales primarias de ESMATE (El Salvador / JICA):
1. **Ministerio de Educación, Ciencia y Tecnología (MINEDUCYT)**:
   - Portal Institucional ESMATE: `https://www.mined.gob.sv/esmate/`
   - Portal General del Ministerio: `https://www.mined.gob.sv/`
2. **Agencia de Cooperación Internacional del Japón (JICA)**:
   - Repositorio técnico y sistematización del Proyecto de Mejoramiento de los Aprendizajes de Matemática en Educación Básica y Educación Media (ESMATE).
3. **Libros Oficiales del Estudiante y Guías Metodológicas**:
   - Ediciones oficiales 2018–2020 de Tomo 1 y Tomo 2 para Primer Ciclo (1°, 2°, 3°), Segundo Ciclo (4°, 5°, 6°), Tercer Ciclo (7°, 8°, 9°) y Educación Media (1° y 2° Año de Bachillerato).

---

## 3. Mapeo Curricular Oficial de las 97 Unidades Temáticas

A continuación se detalla la correspondencia temática oficial de las 97 unidades distribuidas a lo largo de los 11 grados escolares:

### Primer Ciclo de Educación Básica (27 Unidades)

#### 1° Grado (8 Unidades) — `grade01PrimerGrado.ts`
1. **Unidad 1 (Tomo 1)**: *Conozcamos los conceptos básicos y los números del 0 al 10*. Enfoque: nociones de posición espacial, clasificación de colecciones, números cardinales del 0 al 10, descomposición del 10 y números ordinales del 1.° al 10.°.
2. **Unidad 2 (Tomo 1)**: *Sumemos y restemos de forma horizontal con números del 0 al 10*. Enfoque: sentido de la suma (agrupar y agregar), suma con 0, sentido de la resta (quitar y comparar), resta con 0 y sumas/restas de tres términos.
3. **Unidad 3 (Tomo 1)**: *Conozcamos los números del 11 al 20 y valor posicional*. Enfoque: concepto de decena ($10$), números del 11 al 20 como $10$ más unidades, tabla posicional y comparación de cardinales.
4. **Unidad 4 (Tomo 1)**: *Sumemos y restemos de forma horizontal con números hasta el 20*. Enfoque: estrategias de cálculo mental, suma completando a 10 ($DU + U$ y $U + U$), resta quitando a 10 ($10 - d$ y $1d - u$) y cálculo vertical preliminar.
5. **Unidad 5 (Tomo 2)**: *Conozcamos los números hasta 100*. Enfoque: decenas completas ($10, 20, \dots, 90$), números del 21 al 99, conteo de 2 en 2, 5 en 5 y 10 en 10, la centena ($100$) y recta numérica.
6. **Unidad 6 (Tomo 2)**: *Aprendamos a medir longitudes y comparar*. Enfoque: comparación directa de objetos, unidades no estandarizadas (cuarta, pasos, clips) y trazo de trayectorias.
7. **Unidad 7 (Tomo 2)**: *Identifiquemos figuras y líneas*. Enfoque: líneas rectas y curvas, líneas abiertas y cerradas, identificación visual de triángulos, cuadrados, rectángulos y círculos.
8. **Unidad 8 (Tomo 2)**: *Conozcamos el tiempo y la moneda*. Enfoque: partes del día (mañana, tarde, noche), días de la semana, meses del año, lectura de la hora en punto y equivalencias en monedas de dólar ($\$0.01, \$0.05, \$0.10, \$0.25, \$1.00$).

#### 2° Grado (9 Unidades) — `grade02SegundoGrado.ts`
1. **Unidad 1 (Tomo 1)**: *Conozcamos los números hasta 1,000*. Enfoque: centenas completas, números de 3 cifras (CDU), valor posicional, forma desarrollada, comparación con signos $<, >, =$ y aproximaciones.
2. **Unidad 2 (Tomo 1)**: *Aprendamos más sobre la suma*. Enfoque: suma vertical de números de 2 y 3 cifras llevando a las decenas, llevando a las centenas y llevando dos veces.
3. **Unidad 3 (Tomo 1)**: *Conozcamos figuras y cuerpos geométricos*. Enfoque: elementos geométricos (lados, vértices, esquinas rectas), cuadriláteros, rectángulos, cuadrados, prismas rectangulares y cubos.
4. **Unidad 4 (Tomo 1)**: *Aprendamos más sobre la resta*. Enfoque: resta vertical CDU prestando de las decenas, prestando de las centenas, restas con ceros en el minuendo y comprobación aditiva.
5. **Unidad 5 (Tomo 2)**: *Comencemos a multiplicar*. Enfoque: noción de multiplicación como suma repetida de grupos iguales, tablas del 2, del 3, del 4 y del 5.
6. **Unidad 6 (Tomo 2)**: *Conozcamos medidas de longitud*. Enfoque: el centímetro ($\text{cm}$) y el metro ($\text{m}$), medición con regla, conversión y suma/resta de longitudes.
7. **Unidad 7 (Tomo 2)**: *Sigamos multiplicando*. Enfoque: tablas del 6, del 7, del 8, del 9, del 1 y del 10, propiedad conmutativa de la multiplicación y tabla pitagórica.
8. **Unidad 8 (Tomo 2)**: *Conozcamos medidas de peso y capacidad*. Enfoque: la libra ($\text{lb}$), balanza, estimación de peso, el litro ($\text{l}$) y comparación de capacidades líquidas.
9. **Unidad 9 (Tomo 2)**: *Apliquemos la Matemática*. Enfoque: lectura del reloj de agujas en horas y minutos (múltiplos de 5), intervalos temporales, uso del calendario y resolución de problemas cotidianos combinados.

#### 3° Grado (10 Unidades) — `grade03TercerGrado.ts`
1. **Unidad 1 (Tomo 1)**: *Números hasta 10,000*. Enfoque: unidades de millar ($1,000$), lectura, escritura, valor posicional UM-C-D-U, comparación y redondeo a la decena o centena más cercana.
2. **Unidad 2 (Tomo 1)**: *Suma y resta de números hasta de cuatro cifras*. Enfoque: algoritmos verticales de suma y resta con múltiples llevadas y préstamos, ceros intermedios y estimación de resultados.
3. **Unidad 3 (Tomo 1)**: *Ángulos, líneas, círculos y esferas*. Enfoque: ángulo recto, agudo y obtuso; rectas perpendiculares y paralelas; trazo de circunferencia y círculo con compás; radio, diámetro ($d = 2r$) y la esfera.
4. **Unidad 4 (Tomo 1)**: *Multiplicación*. Enfoque: algoritmo formal de multiplicación vertical $DU \times U$, $CDU \times U$ y $UMCDU \times U$ con llevadas, y multiplicación por decenas y centenas completas.
5. **Unidad 5 (Tomo 1)**: *Figuras planas y cuerpos geométricos*. Enfoque: clasificación de triángulos por sus lados (equilátero, isósceles, escaleno), cálculo de perímetro de figuras poligonales, prismas y pirámides.
6. **Unidad 6 (Tomo 2)**: *División y comparación*. Enfoque: concepto de división equitativa y de agrupación, división exacta e inexacta, relación fundamental $D = d \times q + r$ con $r < d$, y algoritmo vertical $DU \div U$.
7. **Unidad 7 (Tomo 2)**: *Aplicaciones matemáticas*. Enfoque: el kilómetro ($1\text{ km} = 1,000\text{ m}$), conversiones de distancia, cálculo de duraciones temporales (horas, minutos y segundos).
8. **Unidad 8 (Tomo 2)**: *Fracciones*. Enfoque: concepto de fracción unitaria, numerador y denominador, lectura, escritura, fracciones menores que 1, ubicación en la recta numérica y comparación de fracciones con igual denominador.
9. **Unidad 9 (Tomo 2)**: *Monedas y gráfica de barras*. Enfoque: cálculo de presupuestos, operaciones con dólares y centavos, recolección y organización de datos, y construcción e interpretación de gráficas de barras con escala.
10. **Unidad 10 (Tomo 2)**: *Operaciones combinadas*. Enfoque: jerarquía operativa en expresiones sin paréntesis y con paréntesis, prioridad de la multiplicación y división sobre la suma y la resta.

---

### Segundo Ciclo de Educación Básica (30 Unidades)

#### 4° Grado (9 Unidades) — `grade04CuartoGrado.ts`
1. **Unidad 1 (Tomo 1)**: *Números y operaciones de suma y resta*. Enfoque: números naturales hasta $1,000,000$, descomposición posicional de 6 cifras, comparación, aproximaciones y adición/sustracción de números grandes.
2. **Unidad 2 (Tomo 1)**: *Figuras y cuerpos geométricos*. Enfoque: uso del transportador para medir y trazar ángulos en grados sexagesimales ($^{\circ}$), clasificación de cuadriláteros (trapecios y paralelogramos) y diagonales.
3. **Unidad 3 (Tomo 1)**: *Multiplicación de números naturales*. Enfoque: algoritmo vertical con factores de dos y tres cifras ($CDU \times DU$, $CDU \times CDU$), propiedad asociativa y distributiva.
4. **Unidad 4 (Tomo 1)**: *Números decimales*. Enfoque: décimas ($0.1$), centésimas ($0.01$), milésimas ($0.001$), tabla de valor posicional decimal, comparación y ubicación en la recta numérica.
5. **Unidad 5 (Tomo 1)**: *División*. Enfoque: algoritmo de división larga entre números de dos cifras ($DU \div DU$, $CDU \div DU$), estimación de cociente y divisiones con residuo.
6. **Unidad 6 (Tomo 2)**: *Área de cuadrados y rectángulos*. Enfoque: unidades estándar de superficie ($\text{cm}^2, \text{m}^2$), deducción de fórmulas $A = l \times l$ y $A = b \times h$, y cálculo de áreas compuestas.
7. **Unidad 7 (Tomo 2)**: *Operaciones con números decimales*. Enfoque: suma y resta vertical alineando el punto decimal, multiplicación y división de números decimales por $10, 100$ y $1,000$.
8. **Unidad 8 (Tomo 2)**: *Fracciones*. Enfoque: clasificación de fracciones (propias, impropias y unitarias), números mixtos, fracciones equivalentes por simplificación y amplificación, suma y resta de fracciones homogéneas.
9. **Unidad 9 (Tomo 2)**: *Medida y representación de datos*. Enfoque: el milímetro ($\text{mm}$), conversiones de longitud métrica, tablas de doble entrada y pictogramas con escala.

#### 5° Grado (10 Unidades) — `grade05QuintoGrado.ts`
1. **Unidad 1 (Tomo 1)**: *Divisibilidad, múltiplos y divisores*. Enfoque: números pares e impares, criterios de divisibilidad por 2, 3, 5 y 10, números primos y compuestos, descomposición en factores primos, cálculo formal del Mínimo Común Múltiplo (MCM) y Máximo Común Divisor (MCD).
2. **Unidad 2 (Tomo 1)**: *Ángulos y polígonos*. Enfoque: polígonos regulares e irregulares, suma de ángulos internos de un triángulo ($180^{\circ}$) y de un cuadrilátero ($360^{\circ}$), y fórmula general $S_i = 180^{\circ}(n - 2)$.
3. **Unidad 3 (Tomo 1)**: *Multiplicación y división de números decimales por números naturales*. Enfoque: algoritmos de multiplicación y división con dividendo decimal y divisor entero, redondeo del cociente.
4. **Unidad 4 (Tomo 1)**: *Gráfica de líneas*. Enfoque: representación gráfica de datos continuos en el tiempo, lectura de tendencias y construcción de gráficas con cortes de escala.
5. **Unidad 5 (Tomo 1)**: *Multiplicación y división de números decimales por números decimales*. Enfoque: multiplicación de dos factores decimales, división transformando el divisor en número natural por amplificación de potencias de 10.
6. **Unidad 6 (Tomo 2)**: *Cantidad por unidad*. Enfoque: concepto de tasa unitaria y razón, comparación de densidades poblacionales, rapidez ($v = \frac{d}{t}$) y rendimiento.
7. **Unidad 7 (Tomo 2)**: *Equivalencia de monedas y presupuestos*. Enfoque: tipo de cambio entre monedas centroamericanas y el dólar estadounidense, diseño y balance de presupuestos de ingresos y egresos.
8. **Unidad 8 (Tomo 2)**: *Área de triángulos y cuadriláteros*. Enfoque: deducción de fórmulas de área de paralelogramo ($A = b \cdot h$), triángulo ($A = \frac{b \cdot h}{2}$), trapecio ($A = \frac{(B+b)h}{2}$) y rombo ($A = \frac{D \cdot d}{2}$).
9. **Unidad 9 (Tomo 2)**: *Unidades de medida en el sistema inglés*. Enfoque: longitud (pulgada, pie, yarda), masa (onza, libra, arroba, quintal) y sus factores de conversión al Sistema Internacional.
10. **Unidad 10 (Tomo 2)**: *Fracciones*. Enfoque: fracciones heterogéneas, homogenización mediante el MCM de denominadores, suma y resta de fracciones heterogéneas y números mixtos.

#### 6° Grado (11 Unidades) — `grade06SextoGrado.ts`
1. **Unidad 1 (Tomo 1)**: *Operaciones con fracciones*. Enfoque: multiplicación de fracciones por naturales y por fracciones, simplificación cruzada previa y cálculo con números mixtos.
2. **Unidad 2 (Tomo 1)**: *Cantidades variables y números romanos*. Enfoque: uso de letras para representar cantidades variables en expresiones matemáticas, reglas de adición, sustracción y repetición del sistema romano de numeración.
3. **Unidad 3 (Tomo 1)**: *División de fracciones y operaciones combinadas*. Enfoque: división multiplicando por la fracción recíproca ($\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c}$), operaciones combinadas con fracciones y decimales respetando la jerarquía.
4. **Unidad 4 (Tomo 1)**: *Razones y porcentajes*. Enfoque: razón $a:b$, valor de la razón, tanto por ciento, cálculo de incrementos, descuentos y aplicación práctica del IVA ($13\%$) en El Salvador.
5. **Unidad 5 (Tomo 1)**: *Proporcionalidad*. Enfoque: proporcionalidad directa ($y = kx$) e inversa ($y = \frac{k}{x}$), constante de proporcionalidad, propiedades y representación gráfica cartesiana.
6. **Unidad 6 (Tomo 2)**: *Longitud de una circunferencia y área del círculo*. Enfoque: el número $\pi$, fórmula de la longitud $C = 2\pi r = \pi d$ y deducción del área circular $A = \pi r^2$.
7. **Unidad 7 (Tomo 2)**: *Análisis de datos*. Enfoque: media aritmética, mediana y moda para datos no agrupados, análisis de dispersión básica y selección de la medida más representativa.
8. **Unidad 8 (Tomo 2)**: *Volumen de cubos y prismas rectangulares*. Enfoque: el centímetro cúbico ($\text{cm}^3$) y metro cúbico ($\text{m}^3$), fórmulas $V = l^3$ y $V = A_b \times h$, equivalencia entre volumen y capacidad ($1\text{ litro} = 1,000\text{ cm}^3$).
9. **Unidad 9 (Tomo 2)**: *Conversión de otros sistemas al sistema internacional*. Enfoque: unidades vernáculas agrarias salvadoreñas (vara, vara cuadrada, manzana $= 10,000\text{ v}^2 \approx 6,988.96\text{ m}^2$) y conversiones al SI.
10. **Unidad 10 (Tomo 2)**: *Traslaciones, simetrías y rotaciones*. Enfoque: figuras con simetría axial (ejes de simetría), simetría puntual (centro de rotación a $180^{\circ}$), traslaciones vectoriales y rotaciones en el plano.
11. **Unidad 11 (Tomo 2)**: *Formas de contar y ordenar objetos*. Enfoque: principio de la suma y principio de la multiplicación, diagramas de árbol, conteo de combinaciones simples y cálculo de probabilidad frecuencial y clásica de Laplace.

---

### Tercer Ciclo de Educación Básica (24 Unidades)

#### 7° Grado (8 Unidades) — `grade07SeptimoGrado.ts`
1. **Unidad 1 (Tomo 1)**: *Números positivos, negativos y el cero*. Enfoque: números enteros $\mathbb{Z}$ y racionales $\mathbb{Q}$, recta numérica, valor absoluto, relación de orden y números opuestos.
2. **Unidad 2 (Tomo 1)**: *Suma y resta de números positivos, negativos y cero*. Enfoque: suma con igual y diferente signo, resta convertida en suma del opuesto, supresión de paréntesis y sumas algebraicas.
3. **Unidad 3 (Tomo 1)**: *Multiplicación y división de números positivos, negativos y cero*. Enfoque: regla de los signos para producto y cociente, potencias con base entera negativa ($(-a)^n$ vs $-a^n$), recíproco y operaciones combinadas.
4. **Unidad 4 (Tomo 1)**: *Comunicación con símbolos*. Enfoque: traducción al lenguaje algebraico, monomios, polinomios, términos semejantes, reducción y valor numérico de expresiones.
5. **Unidad 5 (Tomo 2)**: *Ecuaciones de primer grado*. Enfoque: propiedades de la igualdad matemática, transposición de términos, resolución de $ax + b = c$ con coeficientes enteros y fraccionarios, y modelado de problemas verbales.
6. **Unidad 6 (Tomo 2)**: *Proporcionalidad directa e inversa*. Enfoque: plano cartesiano de cuatro cuadrantes, gráficas de $y = ax$ y de $y = \frac{a}{x}$, cálculo de constante de proporcionalidad y aplicaciones prácticas.
7. **Unidad 7 (Tomo 2)**: *Gráfica de faja y circular*. Enfoque: tablas de frecuencia relativa y porcentajes, cálculo de ángulos sectoriales ($\alpha = 360^{\circ} \times \frac{\%}{100}$), construcción de gráficos circulares e interpretación crítica.
8. **Unidad 8 (Tomo 2)**: *Figuras planas y construcción de cuerpos geométricos*. Enfoque: mediatriz de un segmento, bisectriz de un ángulo, rectas tangentes a la circunferencia con compás y regla, y desarrollo plano de prismas, cilindros, pirámides y conos.

#### 8° Grado (8 Unidades) — `grade08OctavoGrado.ts`
1. **Unidad 1 (Tomo 1)**: *Operaciones algebraicas*. Enfoque: términos, grado de polinomios, suma y resta de polinomios, multiplicación y división de polinomios por monomios, y despeje de variables en fórmulas físicas y geométricas.
2. **Unidad 2 (Tomo 1)**: *Sistemas de ecuaciones de primer grado con dos incógnitas*. Enfoque: método de reducción (suma y resta), método de sustitución, método de igualación para sistemas lineales $2 \times 2$, y resolución de problemas aplicados.
3. **Unidad 3 (Tomo 1)**: *Función lineal*. Enfoque: relación $y = ax + b$, pendiente $m = \frac{\Delta y}{\Delta x}$, intercepto con el eje $y$, ecuación de la recta dado punto-pendiente o dos puntos, y condiciones de paralelismo.
4. **Unidad 4 (Tomo 1)**: *Paralelismo y ángulos de un polígono*. Enfoque: ángulos entre dos rectas paralelas cortadas por una secante (alternos internos, alternos externos, correspondientes), suma de ángulos internos y externos de polígonos.
5. **Unidad 5 (Tomo 2)**: *Criterios de congruencia de triángulos*. Enfoque: criterios LLL, LAL y ALA, demostraciones deductivas formales de congruencia y propiedades de triángulos isósceles y rectángulos.
6. **Unidad 6 (Tomo 2)**: *Características de los triángulos y cuadriláteros*. Enfoque: puntos notables del triángulo (ortocentro, baricentro, incentro, circuncentro), propiedades y demostraciones de paralelogramos, rectángulos, rombos y trapecios.
7. **Unidad 7 (Tomo 2)**: *Área y volumen de sólidos geométricos*. Enfoque: área superficial y volumen de sólidos de revolución (cilindro, cono, esfera: $V = \frac{4}{3}\pi r^3$) y poliedros regulares.
8. **Unidad 8 (Tomo 2)**: *Organización y análisis de datos estadísticos*. Enfoque: distribución de frecuencias para datos agrupados en clases, cálculo de marcas de clase, histogramas, polígonos de frecuencia, media ponderada, mediana y moda en intervalos.

#### 9° Grado (8 Unidades) — `grade09NovenoGrado.ts`
1. **Unidad 1 (Tomo 1)**: *Multiplicación de polinomios y productos notables*. Enfoque: $(x+a)(x+b)$, binomios al cuadrado $(a \pm b)^2$, suma por diferencia $(a+b)(a-b)$, factorización por factor común, trinomio cuadrado perfecto, diferencia de cuadrados y método de tijeras.
2. **Unidad 2 (Tomo 1)**: *Raíz cuadrada y números reales*. Enfoque: definición de raíz cuadrada, conjunto de números irracionales e introducción formal a $\mathbb{R}$, simplificación de radicales, operaciones con radicales y racionalización de denominadores.
3. **Unidad 3 (Tomo 1)**: *Ecuación cuadrática*. Enfoque: resolución por factorización, por extracción de raíces, por completación de cuadrados y por fórmula general cuadrática $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$, análisis del discriminante $\Delta$.
4. **Unidad 4 (Tomo 1)**: *Función cuadrática de la forma $y = ax^2 + c$*. Enfoque: gráfica de parábola con vértice $(0, c)$, eje de simetría $x=0$, efecto del parámetro $a$ (apertura y orientación), dominio y rango.
5. **Unidad 5 (Tomo 2)**: *Figuras semejantes*. Enfoque: criterios de semejanza de triángulos (AA, LLL, LAL), Teorema Fundamental de la Proporcionalidad (Tales), razón de semejanza $k$, relación entre áreas ($k^2$) y volúmenes ($k^3$).
6. **Unidad 6 (Tomo 2)**: *Teorema de Pitágoras*. Enfoque: demostración geométrica, cálculo de hipotenusa y catetos ($a^2 + b^2 = c^2$), recíproco del teorema, cálculo de alturas, diagonales espaciales y aplicaciones en el plano cartesiano.
7. **Unidad 7 (Tomo 2)**: *Ángulo inscrito y central*. Enfoque: teoremas del ángulo central y del ángulo inscrito ($\theta = \frac{1}{2}\alpha$), cuadriláteros cíclicos, recta tangente y ángulo semi-inscrito.
8. **Unidad 8 (Tomo 2)**: *Medidas de dispersión*. Enfoque: concepto de variabilidad, rango o recorrido, desviación media, varianza muestral y poblacional ($\sigma^2$), y desviación típica o estándar ($\sigma$).

---

### Educación Media (16 Unidades)

#### 1° Año de Bachillerato (8 Unidades) — `grade10PrimerBach.ts`
1. **Unidad 1 (Tomo 1)**: *Números reales*. Enfoque: axiomas de cuerpo ordenado de $\mathbb{R}$, notación de intervalos en la recta real, operaciones con intervalos (unión, intersección, diferencia), valor absoluto y desigualdad triangular.
2. **Unidad 2 (Tomo 1)**: *Operaciones con polinomios y números complejos*. Enfoque: división sintética o regla de Ruffini, Teorema del Residuo, Teorema del Factor, introducción al cuerpo $\mathbb{C}$, operaciones aritméticas con números complejos en forma binomial y conjugados.
3. **Unidad 3 (Tomo 1)**: *Desigualdades*. Enfoque: propiedades de las desigualdades en $\mathbb{R}$, inecuaciones lineales en una variable, inecuaciones con valor absoluto ($|x| < a$, $|x| > a$), e inecuaciones cuadráticas y racionales mediante el método del cuadro de signos.
4. **Unidad 4 (Tomo 1)**: *Funciones reales*. Enfoque: definición de función, dominio y rango, inyectividad, sobreyectividad, biyectividad, función inversa, y forma canónica de la función cuadrática $f(x) = a(x - h)^2 + k$ con traslaciones horizontales y verticales.
5. **Unidad 5 (Tomo 2)**: *Resolución de triángulos oblicuángulos*. Enfoque: razones trigonométricas en el triángulo rectángulo, círculo unitario, Ley de los Senos ($\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$), caso ambiguo (SSA), Ley de los Cosenos ($c^2 = a^2 + b^2 - 2ab\cos C$) y cálculo de áreas triangulares.
6. **Unidad 6 (Tomo 2)**: *Identidades y ecuaciones trigonométricas*. Enfoque: identidades pitagóricas, identidades de cociente, fórmulas de adición y sustracción, ángulo doble y mitad, y resolución analítica de ecuaciones trigonométricas en el intervalo $[0, 2\pi)$.
7. **Unidad 7 (Tomo 2)**: *Vectores y números complejos*. Enfoque: vectores bidimensionales en $\mathbb{R}^2$, magnitud y dirección, producto escalar, perpendicularidad, forma polar o trigonométrica de números complejos y Teorema de De Moivre.
8. **Unidad 8 (Tomo 2)**: *Estadística descriptiva*. Enfoque: medidas de posición no central (cuartiles $Q_1, Q_2, Q_3$, deciles y percentiles), rango intercuartílico ($IQR$), diagramas de caja y bigotes (box-plots) e identificación de valores atípicos (outliers).

#### 2° Año de Bachillerato (8 Unidades) — `grade11SegundoBach.ts`
1. **Unidad 1 (Tomo 1)**: *Ecuaciones*. Enfoque: ecuaciones bicuadráticas mediante cambio de variable $u = x^2$, ecuaciones con radicales (comprobación obligatoria para descartar raíces extrañas), ecuaciones fraccionarias o racionales, y sistemas de ecuaciones no lineales (lineal-cuadrática).
2. **Unidad 2 (Tomo 1)**: *Línea recta*. Enfoque: distancia euclidiana entre dos puntos, coordenadas del punto medio, ángulo de inclinación, ecuaciones de la recta (punto-pendiente, pendiente-intercepto, general $Ax + By + C = 0$), distancia de un punto a una recta ($d = \frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}$) y ángulo entre dos rectas.
3. **Unidad 3 (Tomo 1)**: *Secciones cónicas*. Enfoque: deducción analítica de la parábola (foco y directriz), circunferencia ($x^2 + y^2 = r^2$), elipse ($\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ con $a^2 = b^2 + c^2$), hipérbola ($\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ con $c^2 = a^2 + b^2$), excentricidad ($e = c/a$) y asíntotas.
4. **Unidad 4 (Tomo 1)**: *Funciones trascendentales I*. Enfoque: propiedades de exponentes racionales y reales, definición y gráfica de la función exponencial $f(x) = a^x$ ($a > 0, a \neq 1$), asíntota horizontal $y = 0$, transformaciones y resolución de ecuaciones exponenciales igualando bases.
5. **Unidad 5 (Tomo 2)**: *Funciones trascendentales II*. Enfoque: definición de logaritmo como función inversa de la exponencial ($\log_a x = y \iff a^y = x$), propiedades fundamentales de logaritmos, gráfica con asíntota vertical $x = 0$, ecuaciones logarítmicas y funciones trigonométricas periódicas (seno, coseno y tangente con amplitud y periodo).
6. **Unidad 6 (Tomo 2)**: *Sucesiones aritméticas y geométricas*. Enfoque: sucesiones aritméticas (término general $a_n = a_1 + (n-1)d$, suma $S_n$), sucesiones geométricas ($a_n = a_1 r^{n-1}$, suma finita $S_n$), suma de series geométricas infinitas convergentes ($S_\infty = \frac{a_1}{1 - r}$ para $|r| < 1$) y notación sigma ($\sum$).
7. **Unidad 7 (Tomo 2)**: *Métodos de conteo*. Enfoque: teoría básica de conjuntos (unión, intersección, complemento), principio de adición y multiplicación, permutaciones lineales ($P(n,r) = \frac{n!}{(n-r)!}$), permutaciones con repetición, combinaciones ($C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$), Triángulo de Pascal y Teorema del Binomio de Newton.
8. **Unidad 8 (Tomo 2)**: *Probabilidad*. Enfoque: espacio muestral, axiomas de Kolmogorov, probabilidad del complemento, regla de la suma para eventos mutuamente excluyentes y no excluyentes, probabilidad condicional ($P(A \mid B) = \frac{P(A \cap B)}{P(B)}$), eventos independientes, Teorema de la Probabilidad Total y Teorema de Bayes.

---

## 4. Metodología de Expansión de Contenido y Eliminación de Boilerplate

Para cumplir estrictamente con los Requisitos R1 y R4:

### 4.1 Estructura Pedagógica de Cada Lección
Cada lección dentro de cada grado mantendrá la estructura tipada `PscerLesson`:
- **`problema`**: Planteamiento concreto y contextualizado de una situación inicial que desafía al estudiante (mínimo 60–90 palabras).
- **`solucion`**: Desarrollo analítico exhaustivo paso a paso, mostrando el razonamiento deductivo o aritmético que resuelve la situación inicial (mínimo 100–150 palabras).
- **`conclusion`**: Formalización teórica e institucionalización del concepto o teorema matemático con lenguaje formal y fórmulas renderizadas con KaTeX balanceado (mínimo 80–120 palabras).
- **`examples`**: **Mínimo 5 ejemplos específicos, distintos entre sí y resueltos paso a paso por lección** (cada uno con al menos 40–80 palabras de desarrollo procedimental).
- **`resuelve`**: Al menos 3 ejercicios de práctica formativa con enunciados reales, pistas didácticas útiles (`hint`) y soluciones finales comprobables (`answer`).

### 4.2 Métricas de Contenido Sustantivo (Regla de $\ge 500$ palabras)
El contenido de cada lección sumará **al menos 500 palabras de contenido sustantivo real**, calculadas bajo el algoritmo estricto diseñado por el equipo técnico:
- **Exclusiones del conteo**: Bloques de código o fórmulas KaTeX (`$$...$$`, `$...$`), comandos LaTeX (`\frac`, `\sqrt`, `\text`), metadatos técnicos, números de lección, títulos repetidos del encabezado, párrafos duplicados y frases de plantilla.
- **Inclusión**: Prosa analítica real, explicaciones conceptuales, justificaciones matemáticas y pasos resolutivos en español formal pedagógico.

### 4.3 Eliminación del Relleno en `gradeHelpers.ts`
Se modificará `src/data/minedCurriculum/grades/gradeHelpers.ts`:
1. Eliminar la inyección de los párrafos genéricos prefabricados en `createPscerLesson` (los textos de "Contexto pedagógico y análisis heurístico...", "Desarrollo metodológico detallado...", "Síntesis formal y orientaciones didácticas...").
2. Eliminar la generación de ejemplos ficticios basados en nombres de departamentos en `buildFiveDistinctExamples`.
3. Hacer mandatorio que cada lección provea sus propios ejemplos resueltos paso a paso de forma nativa en los archivos de grado (`grade01PrimerGrado.ts` a `grade11SegundoBach.ts`).

---

## 5. Preservación Rigurosa de Simuladores e Invariantes del Sistema (R3)

Se mantendrán intactos todos los invariantes del sistema:
1. **Simuladores de 50 preguntas por unidad**:
   - `generate50UnitQuestions` en `gradeHelpers.ts` genera las 50 preguntas a partir de `QuestionArchetype[]`, balanceando opciones y garantizando 4 distractores unívocos. La investigación demostró que está completamente desacoplado de las lecciones, garantizando 0 impacto en los simuladores interactivos de las 97 unidades.
2. **17,640 Preguntas Base**:
   - Se preserva el 100% de los archivos de preguntas en `public/data/` (UES 7,500, ANSP 250, ASD 2,190, AVANZO 3,000, ENA 1,400, ESCALAFON 3,300), validado por `npm run validate:bank`.
3. **200 Preguntas de Notariado**:
   - Se mantienen intactas y correlativas las preguntas `not-01` a `not-200` en `src/data/notaryExamData.ts`.
4. **Teléfono Privado y WhatsApp Oficial**:
   - Cero ocurrencias del teléfono privado "7943 9901" en `src/` y `public/`.
   - Presencia de WhatsApp oficial +503 7657 4463 en los puntos de contacto.
5. **Estilo del Encabezado**:
   - La clase CSS `text-white` en el encabezado `AcademicReinforcementView.tsx:822` se preserva sin alteración.
6. **Modelo 100% Publicidad**:
   - Cero muros de pago, suscripciones, pasarelas de pago ni bloqueos por registro.
7. **Control de Versiones**:
   - No se realizarán commits ni pushes en git sin autorización explícita.

---

## 6. Diseño del Validador Automatizado de Contenido (R4)

Se integrará una suite de pruebas automatizada en Vitest bajo `tests/curriculumR4Compliance.test.ts` que se ejecutará en cada corrida de `npm test`:
1. **Verificación de 97 Unidades**: Inspecciona `curriculumService.getAllUnits()` y valida `expect(allUnits.length).toBe(97)`.
2. **Algoritmo de Conteo Sustantivo $\ge 500$ palabras**:
   - Extrae el texto plano de `problema`, `solucion`, `conclusion`, `examples` y `resuelve`.
   - Limpia delimitadores KaTeX y comandos LaTeX.
   - Filtra títulos repetidos y metadatos.
   - Detecta y rechaza párrafos idénticos duplicados entre lecciones.
   - Cuenta palabras léxicas con longitud $\ge 2$ caracteres.
   - Falla la prueba si cualquier lección tiene $< 500$ palabras sustantivas.
3. **Verificación de $\ge 5$ Ejemplos Resueltos Paso a Paso**:
   - Valida `lesson.examples.length >= 5`.
   - Comprueba la no duplicidad interna en cada lección.
   - Valida que cada ejemplo posea profundidad procedimental ($\ge 25$ palabras sustantivas con indicadores de pasos o desarrollo deductivo).
   - Verifica la ausencia total de las plantillas genéricas parametrizadas de departamentos.

---

## 7. Estrategia de Rollout y Milestones de Ejecución

El trabajo se ejecutará mediante subagentes especializados siguiendo el patrón de orquestación por hitos:

```
[M0: Survey & Spec Mining] (Completado)
        │
        ▼
[M1: Presentación y Aprobación del Plan] (En Curso - Este Documento)
        │
        ├── (Tras aprobación explícita del usuario)
        │
        ▼
[M2: Expansión Ciclo 1] ─── 1° a 3° Grado (27 unidades)
        │
        ▼
[M3: Expansión Ciclo 2] ─── 4° a 6° Grado (30 unidades)
        │
        ▼
[M4: Expansión Ciclo 3] ─── 7° a 9° Grado (24 unidades)
        │
        ▼
[M5: Expansión Media]   ─── 1° y 2° Bachillerato (16 unidades)
        │
        ▼
[M6: Remediación de Helpers] ─ Limpieza de gradeHelpers.ts
        │
        ▼
[M7: Suite Automatizada R4] ── Integración de tests/curriculumR4Compliance.test.ts
        │
        ▼
[M8: Verificación Global y Auditoría Forense] ─ typecheck, test, build, validate:bank, validate:i18n, CLEAN audit
```

Cada hito de contenido (M2 a M5) aplicará el ciclo de verificación:
- **Worker**: redacta el contenido sustantivo real de las unidades del ciclo sin relleno.
- **Reviewer**: revisa rigor matemático, KaTeX balanceado y apego curricular.
- **Challenger**: ejecuta pruebas de estrés sobre las lecciones modificadas.
- **Auditor**: verifica la autenticidad e integridad del código.

---

## 8. Solicitud Formal de Aprobación

Conforme al **Requisito R2** y los Criterios de Aceptación:
> *"Redactar y presentar un plan de implementación detallado que mapee los temas y fuentes oficiales para su aprobación explícita antes de modificar el código fuente de las lecciones."*

Se somete este documento a consideración del usuario/padre para su **aprobación explícita** para dar inicio a la Fase de Implementación (Milestones M2 en adelante).

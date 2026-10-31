# Reporte de Especificación y Mapeo Curricular Oficial MINED-ESMATE (1° Grado a 2° Bachillerato)

**Autor**: `teamwork_spec_miner` (Specification Miner)  
**Fecha de emisión**: 2026-10-31  
**Directorio de trabajo**: `c:\Users\kg-88\OneDrive\Documentos\AntiGravity\APP-KUSKAT\.agents\teamwork\spec_miner_esmate\`  
**Archivos de referencia mandatorios**: `ORIGINAL_REQUEST.md`, `DISPATCH.md`  

---

## 1. Fuentes Oficiales Autoritativas del Currículo MINED-ESMATE

El programa **ESMATE** (Proyecto de Mejoramiento de los Aprendizajes de Matemática en Educación Básica y Educación Media) fue desarrollado por el **Ministerio de Educación, Ciencia y Tecnología (MINEDUCYT)** de la República de El Salvador en estrecha cooperación técnica y financiera con la **Agencia de Cooperación Internacional del Japón (JICA)**.

### Repositorios y Fuentes Digitales Oficiales Verificadas:
1. **Portal Oficial ESMATE - MINEDUCYT**:
   - URL Institucional: `https://www.mined.gob.sv/esmate/` y `https://www.mined.gob.sv/`
   - Recursos: Libros de texto (Tomos 1 y 2), Cuadernos de ejercicios (3° a 9°), Guías y Sugerencias Metodológicas para docentes (1° Grado a 2° Bachillerato), pruebas de unidad y trimestrales.
2. **Repositorio JICA (Japan International Cooperation Agency)**:
   - Portal del Proyecto ESMATE / ESMATE 2: `https://www.jica.go.jp/`
   - Fichas técnicas de cooperación educativa, sistematización del modelo constructivista y guías didácticas oficiales de matemática de El Salvador.
3. **Marco Temporal de Ediciones Oficiales MINED**:
   - *Tercer Ciclo (7.°, 8.°, 9.° Grado)* y *Educación Media (1.° y 2.° Año de Bachillerato)*: Primera edición oficial 2018; Segunda edición revisada y ampliada 2019/2020.
   - *Primer Ciclo (1.°, 2.°, 3.° Grado)* y *Segundo Ciclo (4.°, 5.°, 6.° Grado)*: Primera edición oficial 2018/2019; Segunda edición 2020/2021.
4. **Desglose Estructural Curricular**:
   - 11 grados escolares oficiales distribuidos en 4 ciclos:
     - Primer Ciclo de Básica: 1° Grado (8 unidades), 2° Grado (9 unidades), 3° Grado (10 unidades).
     - Segundo Ciclo de Básica: 4° Grado (9 unidades), 5° Grado (10 unidades), 6° Grado (11 unidades).
     - Tercer Ciclo de Básica: 7° Grado (8 unidades), 8° Grado (8 unidades), 9° Grado (8 unidades).
     - Educación Media: 1° Bachillerato (8 unidades), 2° Bachillerato (8 unidades).
   - **Total de Unidades Oficiales ESMATE**: Exactamente **97 unidades** ($8 + 9 + 10 + 9 + 10 + 11 + 8 + 8 + 8 + 8 + 8 = 97$).

---

## 2. Metodología Didáctica Oficial ESMATE: Secuencia P-S-C-E-R

La pedagogía oficial ESMATE implementada en las aulas salvadoreñas se fundamenta en el aprendizaje activo y la construcción autónoma del pensamiento lógico-matemático. Cada clase o lección se desarrolla bajo una secuencia invariable estructurada en 5 momentos clave:

1. **P: Problema Inicial (Sección *Analiza* en el texto del alumno)**:
   - Enunciado verbal, gráfico o tabular de una situación problemática real, lúdica o matemática que activa conocimientos previos y desafía al alumno antes de conocer el algoritmo o fórmula general.
2. **S: Solución (Sección *Soluciona*)**:
   - Desarrollo heurístico y analítico paso a paso. Muestra la vía intuitiva o diagramática inicial que desemboca en el procedimiento algebraico o aritmético formal.
3. **C: Conclusión (Sección *Comprende*)**:
   - Formalización axiomática, institucionalización del concepto, definición rigurosa, teorema o regla operativa. Se expresa con lenguaje matemático preciso y fórmulas renderizadas con KaTeX (`$...$` para expresiones en línea o `$$...$$` para bloques centrados).
4. **E: Ejemplos Guiados (Sección *Ejemplo*)**:
   - Modelado práctico donde se aplica la regla formal a nuevos casos. Según los requerimientos oficiales del proyecto (R1), cada tema debe incorporar **al menos 5 ejemplos concretos, distintos entre sí y resueltos paso a paso** (ej. aplicación directa, resolución guiada de reactivo tipo prueba, modelado contextualizado nacional, análisis de errores frecuentes y comprobación por operación inversa, y caso integrador evaluativo), eliminando cualquier plantilla o texto de relleno genérico.
5. **R: Resuelve (Sección *Resuelve*)**:
   - Práctica formativa individual o en parejas para consolidación inmediata, con pistas didácticas y respuestas de verificación.

---

## Features Discovered

| # | Category | Feature | Description | Inputs | Outputs | Error Behavior | Discovered Via |
|---|----------|---------|-------------|--------|---------|----------------|----------------|
| 1 | Currículo 1G | 1° Grado - Unidad 1 | Conozcamos los conceptos básicos y los números del 0 al 10 (Tomo 1) | Conceptos espaciales, colecciones, cardinales 0-10, ordinales 1.°-10.° | Cardinalidad, escritura en palabras, descomposición aditiva | Error si se confunde cardinal con ordinal o se omite el 0 | MINED ESMATE 1G T1, `catalog.ts` |
| 2 | Currículo 1G | 1° Grado - Unidad 2 | Sumemos y restemos de forma horizontal con números del 0 al 10 (Tomo 1) | Operaciones aditivas horizontales, cálculo con 0 | Ecuaciones $a + b = c$ y $a - b = c$ en una línea | Rechazo de algoritmos verticales en etapa horizontal temprana | MINED ESMATE 1G T1, `catalog.ts` |
| 3 | Currículo 1G | 1° Grado - Unidad 3 | Conozcamos los números del 11 al 20 y valor posicional (Tomo 1) | Formación de decena ($10$), números 11 al 20 | Descomposición en $1$ decena y $u$ unidades | Error si no se agrupa en base 10 | MINED ESMATE 1G T1, `catalog.ts` |
| 4 | Currículo 1G | 1° Grado - Unidad 4 | Sumemos y restemos de forma horizontal con números hasta el 20 (Tomo 1) | Sumas y restas hasta 20 con y sin llevar/prestar | Procedimiento de descomposición con base 10 | Error al no reagrupar decena faltante | MINED ESMATE 1G T1, `catalog.ts` |
| 5 | Currículo 1G | 1° Grado - Unidad 5 | Conozcamos los números hasta 100 (Tomo 2) | Conteo de 10 en 10, números hasta 99, la centena (100) | Lectura, escritura y orden en tabla posicional | Inconsistencia en orden relativo en la recta numérica | MINED ESMATE 1G T2, `catalog.ts` |
| 6 | Currículo 1G | 1° Grado - Unidad 6 | Aprendamos a medir longitudes y comparar (Tomo 2) | Comparación directa y unidades no estandarizadas | Juicios "más largo que", "más corto que", conteo de unidades | Error por referencia de alineación desigual | MINED ESMATE 1G T2, `catalog.ts` |
| 7 | Currículo 1G | 1° Grado - Unidad 7 | Identifiquemos figuras y líneas (Tomo 2) | Líneas rectas, curvas, abiertas, cerradas, figuras 2D | Identificación de triángulo, cuadrado, rectángulo, círculo | Confusión entre cuerpos redondos y figuras planas | MINED ESMATE 1G T2, `catalog.ts` |
| 8 | Currículo 1G | 1° Grado - Unidad 8 | Conozcamos el tiempo y la moneda (Tomo 2) | Tiempo diario, días, meses, hora en punto, monedas de $\$$ | Lectura horaria exacta y equivalencia de monedas | Confusión de manecillas horaria y minutera | MINED ESMATE 1G T2, `catalog.ts` |
| 9 | Currículo 2G | 2° Grado - Unidad 1 | Conozcamos los números hasta 1,000 (Tomo 1) | La centena ($100$), números de 3 cifras, forma desarrollada | Valor posicional CDU, comparación $<, >, =$ | Error en orden de dígitos posicionales | MINED ESMATE 2G T1, `catalog.ts` |
| 10 | Currículo 2G | 2° Grado - Unidad 2 | Aprendamos más sobre la suma (Tomo 1) | Suma vertical CDU llevando a decenas y centenas | Algoritmo vertical con llevadas ordenadas | Omisión de sumar la unidad llevada | MINED ESMATE 2G T1, `catalog.ts` |
| 11 | Currículo 2G | 2° Grado - Unidad 3 | Conozcamos figuras y cuerpos geométricos (Tomo 1) | Lados, vértices, ángulos rectos, prismas y cubos | Clasificación de figuras 2D y sólidos 3D | Confusión entre arista y cara | MINED ESMATE 2G T1, `catalog.ts` |
| 12 | Currículo 2G | 2° Grado - Unidad 4 | Aprendamos más sobre la resta (Tomo 1) | Resta vertical CDU prestando de decenas y centenas | Algoritmo con transformaciones y ceros en minuendo | Resta invertida de dígitos ($4 - 7$ como $7 - 4$) | MINED ESMATE 2G T1, `catalog.ts` |
| 13 | Currículo 2G | 2° Grado - Unidad 5 | Comencemos a multiplicar (Tomo 2) | Sumas iteradas, tablas del 2, 3, 4 y 5 | Concepto de producto $a \times b$ | Confusión entre sumando y número de grupos | MINED ESMATE 2G T2, `catalog.ts` |
| 14 | Currículo 2G | 2° Grado - Unidad 6 | Conozcamos medidas de longitud (Tomo 2) | Centímetro ($\text{cm}$), metro ($\text{m}$), regla graduada | Medición y trazo de segmentos | Error al medir desde el extremo de la regla y no del cero | MINED ESMATE 2G T2, `catalog.ts` |
| 15 | Currículo 2G | 2° Grado - Unidad 7 | Sigamos multiplicando (Tomo 2) | Tablas del 6, 7, 8, 9, 1 y 10, propiedad conmutativa | Tablas completas y aplicaciones prácticas | Memorización sin comprensión de patrones | MINED ESMATE 2G T2, `catalog.ts` |
| 16 | Currículo 2G | 2° Grado - Unidad 8 | Conozcamos medidas de peso y capacidad (Tomo 2) | Libra ($\text{lb}$), balanza, litro ($\text{l}$), recipientes | Comparación de pesos y capacidades del entorno | Inconsistencia de unidades de masa vs volumen | MINED ESMATE 2G T2, `catalog.ts` |
| 17 | Currículo 2G | 2° Grado - Unidad 9 | Apliquemos la Matemática (Tomo 2) | Reloj de agujas (minutos en múltiplos de 5), calendario | Resolución de problemas aditivos y multiplicativos | Error en lectura de cuartos y medias horas | MINED ESMATE 2G T2, `catalog.ts` |
| 18 | Currículo 3G | 3° Grado - Unidad 1 | Números hasta 10,000 (Tomo 1) | Unidad de millar ($1,000$), lectura/escritura de 4 cifras | Valor posicional UM-C-D-U, forma desarrollada | Error al leer ceros intercalados ($3,045$) | MINED ESMATE 3G T1, `catalog.ts` |
| 19 | Currículo 3G | 3° Grado - Unidad 2 | Suma y resta de números hasta de cuatro cifras (Tomo 1) | Operaciones aditivas verticales con llevadas/préstamos | Algoritmo formal de hasta 4 cifras | Errores en restas con ceros consecutivos ($4,000 - x$) | MINED ESMATE 3G T1, `catalog.ts` |
| 20 | Currículo 3G | 3° Grado - Unidad 3 | Ángulos, líneas, círculos y esferas (Tomo 1) | Rectas paralelas/perpendiculares, compás, radio/diámetro | Trazo con escuadra, radio $r$, diámetro $d = 2r$ | Confusión entre círculo (superficie) y circunferencia | MINED ESMATE 3G T1, `catalog.ts` |
| 21 | Currículo 3G | 3° Grado - Unidad 4 | Multiplicación (Tomo 1) | Multiplicación $DU \times U$ y $CDU \times U$ vertical | Algoritmo vertical con llevadas | Sumar la llevada antes de multiplicar | MINED ESMATE 3G T1, `catalog.ts` |
| 22 | Currículo 3G | 3° Grado - Unidad 5 | Figuras planas y cuerpos geométricos (Tomo 1) | Clasificación de triángulos (lados), perímetro | Fórmulas de perímetro, identificación de pirámides | Confusión entre triángulos isósceles y escalenos | MINED ESMATE 3G T1, `catalog.ts` |
| 23 | Currículo 3G | 3° Grado - Unidad 6 | División y comparación (Tomo 2) | Reparto equitativo, división exacta e inexacta | Relación $D = d \cdot q + r$ con $r < d$ | Residuo mayor o igual que el divisor ($r \ge d$) | MINED ESMATE 3G T2, `catalog.ts` |
| 24 | Currículo 3G | 3° Grado - Unidad 7 | Aplicaciones matemáticas (Tomo 2) | Kilómetro ($1\text{ km} = 1,000\text{ m}$), tiempo h, min, s | Conversión de longitud y cálculo de duraciones | Inconsistencia en base sexagesimal de tiempo | MINED ESMATE 3G T2, `catalog.ts` |
| 25 | Currículo 3G | 3° Grado - Unidad 8 | Fracciones (Tomo 2) | Fracción unitaria, numerador y denominador | Representación gráfica y ubicación en recta | Invertir numerador y denominador | MINED ESMATE 3G T2, `catalog.ts` |
| 26 | Currículo 3G | 3° Grado - Unidad 9 | Monedas y gráfica de barras (Tomo 2) | Dólares, centavos, vueltos, recolección de datos | Construcción y lectura de gráficas de barras | Escala desproporcionada en el eje vertical | MINED ESMATE 3G T2, `catalog.ts` |
| 27 | Currículo 3G | 3° Grado - Unidad 10 | Operaciones combinadas (Tomo 2) | Operaciones con y sin paréntesis | Prioridad de $\times, \div$ sobre $+,-$, paréntesis | Resolver de izquierda a derecha ignorando jerarquía | MINED ESMATE 3G T2, `catalog.ts` |
| 28 | Currículo 4G | 4° Grado - Unidad 1 | Números y operaciones de suma y resta (Tomo 1) | Números naturales hasta 1,000,000, redondeo | Operaciones verticales con 5 y 6 cifras | Desalineación de columnas posicionales | MINED ESMATE 4G T1, `catalog.ts` |
| 29 | Currículo 4G | 4° Grado - Unidad 2 | Figuras y cuerpos geométricos (Tomo 1) | Transportador, ángulos agudos, rectos, obtusos | Medición en grados sexagesimales ($^{\circ}$), diagonales | Lectura invertida en la escala doble del transportador | MINED ESMATE 4G T1, `catalog.ts` |
| 30 | Currículo 4G | 4° Grado - Unidad 3 | Multiplicación de números naturales (Tomo 1) | Factores de 2 y 3 cifras, propiedades asociativa/distributiva | Algoritmo vertical de multiplicación larga | Desplazamiento incorrecto en productos parciales | MINED ESMATE 4G T1, `catalog.ts` |
| 31 | Currículo 4G | 4° Grado - Unidad 4 | Números decimales (Tomo 1) | Décimas ($0.1$), centésimas ($0.01$), milésimas ($0.001$) | Comparación y valor posicional decimal | Creer que $0.8 < 0.15$ por longitud de dígitos | MINED ESMATE 4G T1, `catalog.ts` |
| 32 | Currículo 4G | 4° Grado - Unidad 5 | División (Tomo 1) | División entre dos cifras ($DU, CDU \div DU$) | Algoritmo de división larga con estimación | Error en cociente con cero intermedio | MINED ESMATE 4G T1, `catalog.ts` |
| 33 | Currículo 4G | 4° Grado - Unidad 6 | Área de cuadrados y rectángulos (Tomo 2) | Unidades $\text{cm}^2, \text{m}^2$, fórmulas $A = l^2, A = b \cdot h$ | Cálculo de superficies y figuras compuestas | Confusión entre perímetro ($\text{cm}$) y área ($\text{cm}^2$) | MINED ESMATE 4G T2, `catalog.ts` |
| 34 | Currículo 4G | 4° Grado - Unidad 7 | Operaciones con números decimales (Tomo 2) | Suma y resta de decimales, productos por potencias de 10 | Algoritmo vertical con punto alineado | No alinear el punto decimal en la suma/resta | MINED ESMATE 4G T2, `catalog.ts` |
| 35 | Currículo 4G | 4° Grado - Unidad 8 | Fracciones (Tomo 2) | Propias, impropias, números mixtos, suma homogénea | Conversión entre mixtos e impropias, suma/resta | Sumar denominadores en fracciones homogéneas | MINED ESMATE 4G T2, `catalog.ts` |
| 36 | Currículo 4G | 4° Grado - Unidad 9 | Medida y representación de datos (Tomo 2) | Medidas de longitud métricas, tablas de doble entrada | Pictogramas con escala, análisis estadístico | Mala interpretación de la clave del pictograma | MINED ESMATE 4G T2, `catalog.ts` |
| 37 | Currículo 5G | 5° Grado - Unidad 1 | Divisibilidad, múltiplos y divisores (Tomo 1) | Primos, compuestos, criterios 2, 3, 5, 10, MCM y MCD | Descomposición prima, cálculo de MCM y MCD | Confundir MCM (múltiplo) con MCD (divisor) | MINED ESMATE 5G T1, `catalog.ts` |
| 38 | Currículo 5G | 5° Grado - Unidad 2 | Ángulos y polígonos (Tomo 1) | Polígonos regulares, suma interna de triángulo ($180^{\circ}$) | Suma $S_i = 180^{\circ}(n - 2)$, ángulos desconocidos | Aplicar fórmula de polígono regular a irregular | MINED ESMATE 5G T1, `catalog.ts` |
| 39 | Currículo 5G | 5° Grado - Unidad 3 | Multiplicación y división de decimales por naturales (Tomo 1) | Operaciones con decimal y entero, redondeo | Algoritmo con punto decimal exacto | Posición incorrecta del punto en el cociente | MINED ESMATE 5G T1, `catalog.ts` |
| 40 | Currículo 5G | 5° Grado - Unidad 4 | Gráfica de líneas (Tomo 1) | Datos continuos temporales | Gráficas de líneas e identificación de tendencias | Uso de gráfica de líneas para datos cualitativos | MINED ESMATE 5G T1, `catalog.ts` |
| 41 | Currículo 5G | 5° Grado - Unidad 5 | Multiplicación y división de decimales por decimales (Tomo 1) | Multiplicación y división entre decimales | Amplificación del divisor, conteo de cifras decimales | Olvidar amplificar el dividendo al amplificar divisor | MINED ESMATE 5G T1, `catalog.ts` |
| 42 | Currículo 5G | 5° Grado - Unidad 6 | Cantidad por unidad (Tomo 2) | Razones unitarias, densidad de población, rapidez $v = d/t$ | Tasa unitaria para toma de decisiones | Invertir dividendo y divisor en la tasa unitaria | MINED ESMATE 5G T2, `catalog.ts` |
| 43 | Currículo 5G | 5° Grado - Unidad 7 | Equivalencia de monedas y presupuestos (Tomo 2) | Monedas centroamericanas vs dólar, presupuestos | Conversión monetaria, balance ingresos/egresos | No verificar balance equilibrado en presupuesto | MINED ESMATE 5G T2, `catalog.ts` |
| 44 | Currículo 5G | 5° Grado - Unidad 8 | Área de triángulos y cuadriláteros (Tomo 2) | Paralelogramos, triángulos, trapecios, rombos | Fórmulas $A = \frac{b \cdot h}{2}, A = \frac{(B+b)h}{2}$ | Olvidar dividir entre 2 en triángulos y trapecios | MINED ESMATE 5G T2, `catalog.ts` |
| 45 | Currículo 5G | 5° Grado - Unidad 9 | Unidades de medida en el sistema inglés (Tomo 2) | Pulgadas, pies, yardas, libras, quintales | Factores de conversión al Sistema Internacional | Confusión entre múltiplos (arroba vs quintal) | MINED ESMATE 5G T2, `catalog.ts` |
| 46 | Currículo 5G | 5° Grado - Unidad 10 | Fracciones (Tomo 2) | Fracciones heterogéneas, suma y resta con MCM | Homogenización y simplificación irreducible | Sumar numeradores y denominadores directamente | MINED ESMATE 5G T2, `catalog.ts` |
| 47 | Currículo 6G | 6° Grado - Unidad 1 | Operaciones con fracciones (Tomo 1) | Multiplicación de fracciones y números mixtos | Algoritmo $\frac{a}{b} \cdot \frac{c}{d}$, recíprocos | Olvidar simplificar factores cruzados antes de operar | MINED ESMATE 6G T1, `catalog.ts` |
| 48 | Currículo 6G | 6° Grado - Unidad 2 | Cantidades variables y números romanos (Tomo 1) | Letras como variables, numeración romana I a M | Expresiones algebraicas básicas y reglas romanas | Restar números romanos no permitidos (ej. IL) | MINED ESMATE 6G T1, `catalog.ts` |
| 49 | Currículo 6G | 6° Grado - Unidad 3 | División de fracciones y operaciones combinadas (Tomo 1) | División de fracciones por recíproco, operaciones mixtas | $\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \cdot \frac{d}{c}$, jerarquía | Invertir el dividendo en lugar del divisor | MINED ESMATE 6G T1, `catalog.ts` |
| 50 | Currículo 6G | 6° Grado - Unidad 4 | Razones y porcentajes (Tomo 1) | Razón $a:b$, porcentaje, cálculo del IVA ($13\%$) | Aumentos, descuentos y precio con/sin IVA | Confundir valor de razón con porcentaje ($0.13 \neq 13$) | MINED ESMATE 6G T1, `catalog.ts` |
| 51 | Currículo 6G | 6° Grado - Unidad 5 | Proporcionalidad (Tomo 1) | Directa ($y = kx$) e inversa ($y = k/x$) | Constante de proporcionalidad y gráficas cartesianas | Confundir comportamiento directo con inverso | MINED ESMATE 6G T1, `catalog.ts` |
| 52 | Currículo 6G | 6° Grado - Unidad 6 | Longitud de una circunferencia y área del círculo (Tomo 2) | Número $\pi$, fórmulas $C = 2\pi r$, $A = \pi r^2$ | Medición de circunferencias y áreas circulares | Confundir radio $r$ con diámetro $d$ al elevar al cuadrado | MINED ESMATE 6G T2, `catalog.ts` |
| 53 | Currículo 6G | 6° Grado - Unidad 7 | Análisis de datos (Tomo 2) | Datos no agrupados, media, mediana y moda | Medidas de tendencia central y comparación | No ordenar datos antes de calcular la mediana | MINED ESMATE 6G T2, `catalog.ts` |
| 54 | Currículo 6G | 6° Grado - Unidad 8 | Volumen de cubos y prismas rectangulares (Tomo 2) | Fórmulas $V = l^3$, $V = A_b \cdot h$, equivalencia de litros | Cálculo de volumen en $\text{cm}^3$ y capacidad | Inconsistencia entre unidades lineales y cúbicas | MINED ESMATE 6G T2, `catalog.ts` |
| 55 | Currículo 6G | 6° Grado - Unidad 9 | Conversión de otros sistemas al sistema internacional (Tomo 2) | Varas, varas cuadradas, manzanas ($10,000\text{ v}^2$) | Conversión vernácula agraria a $\text{m}^2$ y hectáreas | Confundir vara lineal con vara cuadrada | MINED ESMATE 6G T2, `catalog.ts` |
| 56 | Currículo 6G | 6° Grado - Unidad 10 | Traslaciones, simetrías y rotaciones (Tomo 2) | Simetría axial, simetría puntual, traslaciones y rotaciones | Construcción de figuras simétricas en el plano | Identificar erróneamente eje de simetría oblicuo | MINED ESMATE 6G T2, `catalog.ts` |
| 57 | Currículo 6G | 6° Grado - Unidad 11 | Formas de contar y ordenar objetos (Tomo 2) | Principio suma/multiplicación, árbol, probabilidad Laplace | Regla $P(A) = \frac{\text{favorables}}{\text{posibles}}$ | Probabilidad mayor a 1 o menor a 0 | MINED ESMATE 6G T2, `catalog.ts` |
| 58 | Currículo 7G | 7° Grado - Unidad 1 | Números positivos, negativos y el cero (Tomo 1) | Recta numérica, valor absoluto, orden en $\mathbb{Z}$ | Comparación $a < b$, distancia al origen | Creer que $-8 > -2$ por magnitud absoluta | MINED ESMATE 7G T1, `catalog.ts` |
| 59 | Currículo 7G | 7° Grado - Unidad 2 | Suma y resta de números positivos, negativos y cero (Tomo 1) | Signos iguales y distintos, resta como suma del opuesto | Suma algebraica con signos | Confundir regla de suma con ley de multiplicación | MINED ESMATE 7G T1, `catalog.ts` |
| 60 | Currículo 7G | 7° Grado - Unidad 3 | Multiplicación y división de positivos, negativos y cero (Tomo 1) | Ley de signos, potencias con base negativa | Operaciones combinadas, $(-a)^n$ vs $-a^n$ | Confundir $(-2)^4 = 16$ con $-2^4 = -16$ | MINED ESMATE 7G T1, `catalog.ts` |
| 61 | Currículo 7G | 7° Grado - Unidad 4 | Comunicación con símbolos (Tomo 1) | Lenguaje algebraico, términos semejantes, monomios | Reducción de términos, valor numérico | Sumar exponentes en la suma de términos semejantes | MINED ESMATE 7G T1, `catalog.ts` |
| 62 | Currículo 7G | 7° Grado - Unidad 5 | Ecuaciones de primer grado (Tomo 2) | Propiedades de igualdad, transposición $ax + b = c$ | Solución única $x$, modelado de situaciones | Error de cambio de signo al transponer términos | MINED ESMATE 7G T2, `catalog.ts` |
| 63 | Currículo 7G | 7° Grado - Unidad 6 | Proporcionalidad directa e inversa (Tomo 2) | Plano cartesiano, gráficas $y = ax$ e $y = a/x$ | Constante de proporcionalidad en los 4 cuadrantes | No trazar ambas ramas de la hipérbola en proporcionalidad inversa | MINED ESMATE 7G T2, `catalog.ts` |
| 64 | Currículo 7G | 7° Grado - Unidad 7 | Gráfica de faja y circular (Tomo 2) | Frecuencias relativas, cálculo angular $\alpha = 360^{\circ} \cdot \%$ | Gráficos estadísticos porcentuales | La suma de sectores no iguala $360^{\circ}$ | MINED ESMATE 7G T2, `catalog.ts` |
| 65 | Currículo 7G | 7° Grado - Unidad 8 | Figuras planas y construcción de cuerpos (Tomo 2) | Mediatriz, bisectriz, círculos, desarrollos de prismas/conos | Trazos con regla y compás, áreas circulares | Confundir mediatriz (recta) con bisectriz (rayo) | MINED ESMATE 7G T2, `catalog.ts` |
| 66 | Currículo 8G | 8° Grado - Unidad 1 | Operaciones algebraicas (Tomo 1) | Polinomios, suma, resta, producto por monomio, despejes | Expresiones simplificadas, fórmulas despejadas | Error al distribuir signo negativo sobre paréntesis | MINED ESMATE 8G T1, `catalog.ts` |
| 67 | Currículo 8G | 8° Grado - Unidad 2 | Sistemas de ecuaciones de 1° grado con 2 incógnitas (Tomo 1) | Sistemas $2 \times 2$, métodos reducción, sustitución, igualación | Par ordenado solución $(x, y)$, problemas de aplicación | Solución de una sola variable sin hallar la segunda | MINED ESMATE 8G T1, `catalog.ts` |
| 68 | Currículo 8G | 8° Grado - Unidad 3 | Función lineal (Tomo 1) | Ecuación $y = mx + b$, pendiente $m = \Delta y / \Delta x$ | Gráficas, paralelismo y perpendicularidad | Invertir la pendiente ($\Delta x / \Delta y$) | MINED ESMATE 8G T1, `catalog.ts` |
| 69 | Currículo 8G | 8° Grado - Unidad 4 | Paralelismo y ángulos de un polígono (Tomo 1) | Ángulos entre paralelas y secante, suma interna $180^{\circ}(n-2)$ | Demostración geométrica y cálculo de ángulos | Confundir alternos internos con correspondientes | MINED ESMATE 8G T1, `catalog.ts` |
| 70 | Currículo 8G | 8° Grado - Unidad 5 | Criterios de congruencia de triángulos (Tomo 2) | Criterios LLL, LAL, ALA, triángulos rectángulos | Demostraciones deductivas de congruencia | Asumir criterio no válido Lado-Lado-Ángulo (LLA) | MINED ESMATE 8G T2, `catalog.ts` |
| 71 | Currículo 8G | 8° Grado - Unidad 6 | Características de triángulos y cuadriláteros (Tomo 2) | Isósceles, puntos notables, propiedades del paralelogramo | Demostraciones de propiedades geométricas | Asumir que las diagonales de todo paralelogramo son perpendiculares | MINED ESMATE 8G T2, `catalog.ts` |
| 72 | Currículo 8G | 8° Grado - Unidad 7 | Área y volumen de sólidos geométricos (Tomo 2) | Cuerpos de revolución, volumen de prismas, cilindros, pirámides, esferas | Fórmulas $V = A_b \cdot h, V = \frac{1}{3}A_b h, V = \frac{4}{3}\pi r^3$ | Olvidar factor $1/3$ en pirámides y conos | MINED ESMATE 8G T2, `catalog.ts` |
| 73 | Currículo 8G | 8° Grado - Unidad 8 | Organización y análisis de datos estadísticos (Tomo 2) | Datos agrupados en clases, histogramas, polígonos | Media ponderada, mediana y moda para datos en intervalos | Error al calcular marcas de clase como resta | MINED ESMATE 8G T2, `catalog.ts` |
| 74 | Currículo 9G | 9° Grado - Unidad 1 | Multiplicación de polinomios y productos notables (Tomo 1) | $(x+a)(x+b)$, binomio al cuadrado, suma por diferencia, tijeras | Factorización completa de trinomios y binomios | Olvidar el doble producto en $(a+b)^2$ | MINED ESMATE 9G T1, `catalog.ts` |
| 75 | Currículo 9G | 9° Grado - Unidad 2 | Raíz cuadrada y números reales (Tomo 1) | Números irracionales, $\mathbb{R}$, simplificación y racionalización | Operaciones con radicales, denominadores racionales | Racionalizar sin multiplicar numerador y denominador por el mismo radical | MINED ESMATE 9G T1, `catalog.ts` |
| 76 | Currículo 9G | 9° Grado - Unidad 3 | Ecuación cuadrática (Tomo 1) | Factorización, completación de cuadrados, fórmula general | Raíces $x_{1,2}$, análisis de discriminante $\Delta$ | Olvidar el doble signo $\pm$ en la raíz de la fórmula | MINED ESMATE 9G T1, `catalog.ts` |
| 77 | Currículo 9G | 9° Grado - Unidad 4 | Función cuadrática de la forma $y = ax^2 + c$ (Tomo 1) | Parábola con vértice $(0, c)$, desplazamientos verticales | Dominio $\mathbb{R}$, rango, máximos y mínimos | Confundir sentido de apertura según el signo de $a$ | MINED ESMATE 9G T1, `catalog.ts` |
| 78 | Currículo 9G | 9° Grado - Unidad 5 | Figuras semejantes (Tomo 2) | Criterios LLL, LAL, AA, Teorema de Tales, áreas y volúmenes | Razón $k$, áreas $k^2$, volúmenes $k^3$ | Usar razón $k$ lineal para comparar áreas en lugar de $k^2$ | MINED ESMATE 9G T2, `catalog.ts` |
| 79 | Currículo 9G | 9° Grado - Unidad 6 | Teorema de Pitágoras (Tomo 2) | Fórmulas $a^2 + b^2 = c^2$, recíproco, aplicaciones 2D y 3D | Longitudes de hipotenusas, diagonales espaciales | Confundir cateto con hipotenusa en la suma | MINED ESMATE 9G T2, `catalog.ts` |
| 80 | Currículo 9G | 9° Grado - Unidad 7 | Ángulo inscrito y central en circunferencias (Tomo 2) | Teorema ángulo inscrito $\theta = \frac{1}{2}\alpha$, tangentes | Relaciones angulares y arcos subendidos | Igualar directamente ángulo inscrito y central sin el factor $1/2$ | MINED ESMATE 9G T2, `catalog.ts` |
| 81 | Currículo 9G | 9° Grado - Unidad 8 | Medidas de dispersión (Tomo 2) | Rango, desviación media, varianza $\sigma^2$ y desviación típica $\sigma$ | Grado de dispersión respecto a la media | No elevar al cuadrado las desviaciones en la varianza | MINED ESMATE 9G T2, `catalog.ts` |
| 82 | Currículo 1B | 1° Bachillerato - Unidad 1 | Números reales (Tomo 1) | Axiomas de $\mathbb{R}$, intervalos, valor absoluto, desigualdad triangular | Operaciones con intervalos y propiedades de $|x|$ | Invertir desigualdad sin cambiar signo al multiplicar por negativo | MINED ESMATE 1B T1, `catalog.ts` |
| 83 | Currículo 1B | 1° Bachillerato - Unidad 2 | Operaciones con polinomios y números complejos (Tomo 1) | División sintética, Teorema Residuo/Factor, cuerpo $\mathbb{C}$ | Raíces complejas, conjugados $\bar{z}$, forma binomial | Olvidar que $i^2 = -1$ en el producto complejo | MINED ESMATE 1B T1, `catalog.ts` |
| 84 | Currículo 1B | 1° Bachillerato - Unidad 3 | Desigualdades (Tomo 1) | Inecuaciones lineales, inecuaciones con valor absoluto, cuadro signos | Intervalo solución con métodos de cruces | Omitir raíces en denominadores al definir cuadro de signos | MINED ESMATE 1B T1, `catalog.ts` |
| 85 | Currículo 1B | 1° Bachillerato - Unidad 4 | Funciones reales (Tomo 1) | Inyectiva, sobreyectiva, biyectiva, cuadrática $a(x-h)^2+k$ | Vértice $(h, k)$, transformaciones en el plano | Confundir dirección de traslación horizontal $(x-h)$ con signo positivo | MINED ESMATE 1B T1, `catalog.ts` |
| 86 | Currículo 1B | 1° Bachillerato - Unidad 5 | Resolución de triángulos oblicuángulos (Tomo 2) | Ley de Senos, Ley de Cosenos, razones trigonométricas | Resolución analítica y área de triángulos | Aplicar Ley de Senos en caso ambiguo sin evaluar segunda solución | MINED ESMATE 1B T2, `catalog.ts` |
| 87 | Currículo 1B | 1° Bachillerato - Unidad 6 | Identidades y ecuaciones trigonométricas (Tomo 2) | Identidades pitagóricas, suma/resta, ángulo doble y mitad | Ecuaciones en $[0, 2\pi)$ | Descartar soluciones periódicas válidas en el dominio | MINED ESMATE 1B T2, `catalog.ts` |
| 88 | Currículo 1B | 1° Bachillerato - Unidad 7 | Vectores y números complejos (Tomo 2) | Vectores en $\mathbb{R}^2$, producto escalar, forma polar y De Moivre | Magnitud, dirección, potencia polar $z^n$ | Confundir producto escalar (escalar) con producto vectorial | MINED ESMATE 1B T2, `catalog.ts` |
| 89 | Currículo 1B | 1° Bachillerato - Unidad 8 | Estadística descriptiva (Tomo 2) | Cuartiles, diagramas de caja y bigotes (box-plot), outliers | Resumen de cinco números y coeficiente de variación | Calcular rango intercuartílico sin ordenar previamente los datos | MINED ESMATE 1B T2, `catalog.ts` |
| 90 | Currículo 2B | 2° Bachillerato - Unidad 1 | Ecuaciones (Tomo 1) | Bicuadráticas $u = x^2$, radicales, racionales, sistemas cuadráticos | Conjunto solución real y descarte de raíces extrañas | No verificar soluciones en ecuaciones con radicales | MINED ESMATE 2B T1, `catalog.ts` |
| 91 | Currículo 2B | 2° Bachillerato - Unidad 2 | Línea recta (Tomo 1) | Distancia euclidiana, punto medio, ecuaciones de recta, distancia a punto | Ecuaciones analíticas, paralelismo y perpendicularidad | Olvidar valor absoluto en fórmula de distancia de punto a recta | MINED ESMATE 2B T1, `catalog.ts` |
| 92 | Currículo 2B | 2° Bachillerato - Unidad 3 | Secciones cónicas (Tomo 1) | Parábola, circunferencia, elipse, hipérbola, excentricidad | Ecuaciones canónicas, focos, directrices y asíntotas | Confundir relaciones fundamentales $a^2 = b^2 + c^2$ con $c^2 = a^2 + b^2$ | MINED ESMATE 2B T1, `catalog.ts` |
| 93 | Currículo 2B | 2° Bachillerato - Unidad 4 | Funciones trascendentales I (Tomo 1) | Potenciación racional, función exponencial $f(x) = a^x$ | Gráfica exponencial, asíntota $y=0$, ecuaciones exponenciales | Asumir base negativa en función exponencial real | MINED ESMATE 2B T1, `catalog.ts` |
| 94 | Currículo 2B | 2° Bachillerato - Unidad 5 | Funciones trascendentales II (Tomo 2) | Función inversa, función logarítmica, propiedades, trigonométricas | Gráficas logarítmicas, asíntota $x=0$, ecuaciones logarítmicas | Evaluar logaritmos con argumento cero o negativo | MINED ESMATE 2B T2, `catalog.ts` |
| 95 | Currículo 2B | 2° Bachillerato - Unidad 6 | Sucesiones aritméticas y geométricas (Tomo 2) | Términos $a_n$, sumas $S_n$, series infinitas convergentes | Fórmulas cerradas, notación sigma $\sum$ | Usar fórmula de serie infinita cuando $|r| \ge 1$ | MINED ESMATE 2B T2, `catalog.ts` |
| 96 | Currículo 2B | 2° Bachillerato - Unidad 7 | Métodos de conteo (Tomo 2) | Conjuntos, principios conteo, permutaciones, combinaciones, Binomio | Fórmulas $P(n,r)$, $C(n,r)$, Triángulo de Pascal | Confundir situaciones donde importa el orden con donde no importa | MINED ESMATE 2B T2, `catalog.ts` |
| 97 | Currículo 2B | 2° Bachillerato - Unidad 8 | Probabilidad (Tomo 2) | Axiomas Kolmogórov, condicional, probabilidad total y Teorema de Bayes | Modelado probabilístico y árbol estocástico | Asignar probabilidades negativas o superiores a la unidad | MINED ESMATE 2B T2, `catalog.ts` |
| 98 | Plataforma | Simulador 50 Preguntas | Generador de 50 reactivos diversificados por unidad evaluada | `generate50UnitQuestions(unitId, ...)` | Array de 50 `UnitQuestion` únicos con 4 opciones | Error si no existen 4 opciones o clave fuera de A,B,C,D | `gradeHelpers.ts`, `tests/academicReinforcement.test.ts` |
| 99 | Renderizado | KaTeX Math Rendering | Delimitadores balanceados `$..$` y `$$..$$` en conclusiones y reactivos | Expresión matemática en LaTeX | HTML seguro renderizado con KaTeX | Error de parseo si los delimitadores están desbalanceados | `tests/challengerCurriculumStress.test.ts` |
| 100 | Verificación | Conteo de Palabras Sustantivas | Verificación programática de $\ge 500$ palabras reales por tema | Texto de lección (P + S + C + E) | Conteo sustantivo limpio sin markdown ni títulos | Fallo de test si hay relleno o texto menor a 500 palabras | R1, R4 en `ORIGINAL_REQUEST.md` |

---

## Edge Cases

| # | Feature | Input | Observed Behavior |
|---|---------|-------|-------------------|
| 1 | Ecuaciones con radicales (2B-U01) | Ecuación $\sqrt{2x + 7} = x + 2$ al elevar al cuadrado | Produce candidatos $x = -3$ y $x = 1$. La comprobación formal en la ecuación original detecta que para $x = -3$: $\sqrt{1} = 1 \neq -1$, descartando la raíz extraña y validando únicamente $x = 1$. |
| 2 | Ecuaciones bicuadráticas (2B-U01) | Ecuación $x^4 - 25x^2 + 144 = 0$ con sustitución $u = x^2$ | Factoriza en $(u - 9)(u - 16) = 0$, generando $u = 9 \implies x = \pm 3$ y $u = 16 \implies x = \pm 4$. Si un valor de $u$ fuera negativo, las soluciones serían complejas puras, restringiendo las raíces reales. |
| 3 | Excentricidad de secciones cónicas (2B-U03) | Relación de semiejes en cónica con $c/a$ | Si $e = 0$, circunferencia; si $0 < e < 1$, elipse; si $e = 1$, parábola; si $e > 1$, hipérbola. El sistema valida rigurosamente las cotas de $e$. |
| 4 | Restricciones de dominio en logaritmos (2B-U05) | Ecuación $\log_2(x - 3) + \log_2(x - 1) = 3$ | Al multiplicar argumentos $(x - 3)(x - 1) = 8 \implies x^2 - 4x - 5 = 0 \implies (x - 5)(x + 1) = 0$. El valor $x = -1$ se descarta porque produciría argumentos negativos ($\log_2(-4)$ no definido en $\mathbb{R}$). Solución única $x = 5$. |
| 5 | Suma de serie geométrica infinita (2B-U06) | Progresión con razón $r = 1.5 \ge 1$ | La fórmula $S_\infty = \frac{a_1}{1 - r}$ solo es aplicable si $|r| < 1$. Para $|r| \ge 1$ la serie diverge y no posee suma finita. |
| 6 | Probabilidad condicional e independencia (2B-U08) | Eventos $A$ y $B$ con $P(B) = 0$ | La probabilidad condicional $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$ presenta indeterminación por división entre cero; el axioma exige $P(B) > 0$. |
| 7 | Cero en números cardinales (1G-U01) | Colección con ausencia total de elementos | Se representa formalmente con el símbolo $0$. En la división, $0 \div a = 0$ para $a \neq 0$, pero $a \div 0$ no está definido. |
| 8 | Delimitadores KaTeX en moneda de curso legal | Textos que contienen signos de dólar de moneda (ej. "$132") | La función `normalizeLooseCurrencyDollar` convierte signos impares sueltos a "132 dólares" para evitar romper el renderizador KaTeX con delimitadores desbalanceados. |
| 9 | Discriminante cuadrático (9G-U03) | Ecuación con $\Delta = b^2 - 4ac < 0$ | En 9° Grado se concluye que no posee soluciones reales (soluciones complejas en 1° Bachillerato). En 1° Bachillerato se formalizan como raíces conjugadas en $\mathbb{C}$. |
| 10 | Casos ambiguos en Ley de Senos (1B-U05) | Triángulo con datos Lado-Lado-Ángulo donde $\sin B < 1$ y $b < a$ | Se pueden generar dos posibles triángulos (un ángulo agudo $B$ y otro obtuso $180^{\circ} - B$). El sistema evalúa si ambos ángulos son físicamente compatibles con el ángulo conocido. |

---

## 3. Reporte de Handoff (5 Componentes)

### 3.1 Observation
- **Inspección de Archivos y Líneas en `src/data/minedCurriculum/`**:
  - `src/data/minedCurriculum/catalog.ts` (líneas 85 a 337): Define la constante `MINED_CATALOG` conteniendo los 11 grados escolares oficiales (`1-grado` a `11-segundo-bachillerato`), con un total exacto de **97 unidades** temáticas oficiales para la asignatura de Matemática ESMATE.
  - `src/data/minedCurriculum/types.ts` (líneas 54 a 65 y 85 a 98): Define `PscerLesson` (con campos `id`, `lessonNumber`, `title`, `problema`, `solucion`, `conclusion`, `ejemplo`, `examples`, `resuelve`) y `CurriculumUnit` (con campos `id`, `unitNumber`, `title`, `subjectId`, `gradeId`, `tomo`, `summary`, `competencies`, `isEvaluated`, `questionCount`, `lessons`, `questions`).
  - `src/data/minedCurriculum/grades/gradeHelpers.ts` (líneas 38 a 89 y 125 a 135): La función `buildFiveDistinctExamples` y `createPscerLesson` utilizaban texto parametrizado automático con listas de departamentos salvadoreños (`San Salvador`, `Santa Ana`, etc.) y oraciones prefabricadas de relleno ("En un proyecto académico desarrollado en...").
  - `tests/challengerCurriculumStress.test.ts` (líneas 74 a 86 y 134 a 156): El test `verifies that getAllUnits() returns exactly 97 official units` y `verifies that unit counts per grade match the official MINED breakdown totaling 97` certifica la correspondencia estricta de las 97 unidades.
- **Resultados de Comandos Ejecutados**:
  - `npx vitest run tests/academicReinforcement.test.ts tests/challengerCurriculumStress.test.ts`: **51 tests pasados** exitosamente al 100% (cero fallos).
  - `npx vitest run tests/challengerGate1Formulas.test.ts`: **18 tests pasados** exitosamente al 100%.
  - `npm run validate:bank`: Valida las 17,640 preguntas base en `public/data/` (UES=7500, ANSP=250, ASD=2190, AVANZO=3000, ENA=1400, ESCALAFON=3300) con **0 errores y 0 advertencias**.

### 3.2 Logic Chain
1. A partir de las directrices de `ORIGINAL_REQUEST.md` (R1, R2, R4) y `DISPATCH.md`, se identificó que el sistema requiere una expansión exhaustiva de lecciones para las 97 unidades de ESMATE en `src/data/minedCurriculum/`.
2. Las búsquedas en la web verificaron que el currículo nacional oficial del Ministerio de Educación de El Salvador (MINEDUCYT) y JICA se articula exactamente en 97 unidades distribuidas a lo largo de 11 grados escolares (1° a 9° de Básica y 1° y 2° de Bachillerato).
3. Cada unidad responde a la secuencia didáctica oficial P-S-C-E-R (Problema, Solución, Conclusión, Ejemplo, Resuelve).
4. El requerimiento R1 exige eliminar de forma definitiva las plantillas parametrizadas con variables genéricas en `gradeHelpers.ts` y sustituirlas por contenido conceptual real, pertinente y con densidad pedagógica de al menos 500 palabras sustantivas por tema y 5 ejemplos específicos y distintos resueltos paso a paso.
5. Se dedujo que la preservación de los simuladores (`generate50UnitQuestions`), la ausencia del teléfono privado "7943 9901", el WhatsApp oficial +503 7657 4463 y las 17,640 preguntas del banco base son invariantes obligatorias del sistema (R3) que deben conservarse intactas en cualquier desarrollo subsecuente.

### 3.3 Caveats
- *Variantes de edición*: Entre la 1.ª edición (2018) y la 2.ª edición (2020) de ESMATE, algunos temas menores de 6° y 8° grado tuvieron reacomodos de lección (por ejemplo, Teorema de Pitágoras ubicado entre 8° y 9° grado, y conversión de sistemas de medida en 6° grado). El catálogo de 97 unidades del proyecto refleja fielmente la versión consolidada del MINED utilizada en las pruebas nacionales AVANZO y admisión universitaria UES.
- *Fase de planificación previa a la edición de código*: Este informe cumple el rol de investigación y especificación autoritativa (R2). No se ha modificado ningún archivo de código de lecciones en `src/data/minedCurriculum/`, cumpliendo con la regla de aprobación explícita del plan de implementación antes de la ejecución.

### 3.4 Conclusion
El mapeo de las 97 unidades curriculares del MINED-ESMATE y sus correspondientes 11 grados se encuentra completamente verificado contra fuentes oficiales del MINEDUCYT y JICA, así como contra la arquitectura del repositorio APP-KUSKAT. Se dispone de la especificación técnica completa y los criterios de aceptación para que el equipo proceda a redactar el Plan de Implementación formal requerido por R2, previo a la expansión sustantiva del contenido y la creación del script de validación automatizada de 500 palabras y 5 ejemplos por tema (R1 y R4).

### 3.5 Verification Method
Para verificar de manera independiente las afirmaciones y la invariancia de este reporte, ejecutar los siguientes comandos en la raíz del proyecto (`APP-KUSKAT`):
1. **Verificación de jerarquía curricular y 97 unidades**:
   `npx vitest run tests/challengerCurriculumStress.test.ts`
2. **Verificación de secuencia didáctica y simulador de 50 preguntas**:
   `npx vitest run tests/academicReinforcement.test.ts`
3. **Certificación de las 17,640 preguntas del banco base**:
   `npm run validate:bank`
4. **Verificación de fórmulas y sintaxis KaTeX**:
   `npx vitest run tests/challengerGate1Formulas.test.ts`

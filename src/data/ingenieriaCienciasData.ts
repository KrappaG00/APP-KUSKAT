/**
 * BANCO OFICIAL DE MÉTODOS CUANTITATIVOS Y CIENCIAS EXACTAS DE INGENIERÍA
 * Plataforma KUSKAT · República de El Salvador
 *
 * Módulos Académicos:
 * - Álgebra Lineal: Matrices, determinantes por cofactores/Sarrus, Gauss-Jordan, Teorema de Rouché-Frobenius y Regla de Cramer (50 reactivos).
 * - Trigonometría Analítica: Identidades fundamentales, transformaciones producto-suma, ecuaciones trigonométricas y leyes de senos/cosenos con caso ambiguo (50 reactivos).
 * - Geometría Analítica: Cónicas (circunferencia, parábola, elipse, hipérbola), excentricidad y discriminante cuadrático (50 reactivos).
 * - Física Estática y Dinámica Vectorial: Equilibrio de cuerpos rígidos, método de nodos en armaduras, plano inclinado con fricción de Coulomb y teorema de trabajo-energía (50 reactivos).
 *
 * Total: Exactamente 200 problemas analíticos con soluciones formales y KaTeX.
 */

export interface EngineeringMathQuestion {
  id: string;
  category: 'algebra-lineal' | 'trigonometria-analitica' | 'geometria-conicas' | 'fisica-mecanica';
  categoryLabel: string;
  topic: string;
  problemStatement: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  formalSolution: string;
  stepByStepDerivation: string[];
  distractorRationale: {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
  };
}

export interface FormulaReferenceCard {
  category: string;
  title: string;
  formulaKatex: string;
  explanation: string;
}

export const INGENIERIA_SECTORS = [
  {
    id: 'all',
    name: 'Todas las Disciplinas',
    icon: '📐',
  },
  {
    id: 'algebra-lineal',
    name: 'Álgebra Lineal & Matrices',
    icon: '🔢',
  },
  {
    id: 'trigonometria-analitica',
    name: 'Trigonometría Analítica',
    icon: '📏',
  },
  {
    id: 'geometria-conicas',
    name: 'Geometría Analítica de Cónicas',
    icon: '⭕',
  },
  {
    id: 'fisica-mecanica',
    name: 'Estática & Dinámica Vectorial',
    icon: '⚙️',
  },
];

export const INGENIERIA_FORMULAS: FormulaReferenceCard[] = [
  {
    category: 'Álgebra Lineal',
    title: 'Determinante de Escalar por Matriz Cuadrada de Orden n',
    formulaKatex: '\\det(k \\cdot A) = k^n \\cdot \\det(A)',
    explanation: 'Multiplicar una matriz de tamaño n x n por un escalar k multiplica cada una de sus n filas por k, factorizándose k elevado a la n del determinante.',
  },
  {
    category: 'Álgebra Lineal',
    title: 'Multiplicatividad del Determinante',
    formulaKatex: '\\det(A \\cdot B) = \\det(A) \\cdot \\det(B)',
    explanation: 'El determinante del producto de dos matrices cuadradas del mismo orden es igual al producto algebraico de sus respectivos determinantes.',
  },
  {
    category: 'Trigonometría',
    title: 'Identidad del Coseno del Ángulo Doble',
    formulaKatex: '\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta',
    explanation: 'Transformación fundamental para linealizar potencias pares trigonométricas en cálculo integral y análisis de ondas armónicas.',
  },
  {
    category: 'Geometría Analítica',
    title: 'Discriminante de la Ecuación General de Segundo Grado',
    formulaKatex: '\\Delta = B^2 - 4AC',
    explanation: 'Para Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0: si Delta < 0 es Elipse/Circunferencia, si Delta = 0 es Parábola, si Delta > 0 es Hipérbola.',
  },
  {
    category: 'Física Vectorial',
    title: 'Segunda Condición de Equilibrio (Rotacional)',
    formulaKatex: '\\sum \\vec{\\tau}_O = \\sum (\\vec{r} \\times \\vec{F}) = \\vec{0}',
    explanation: 'Para que un cuerpo rígido no tenga aceleración angular, la suma vectorial de momentos de fuerza o torques respecto a cualquier punto fijo debe ser cero.',
  },
  {
    category: 'Física Vectorial',
    title: 'Teorema del Trabajo y la Energía Cinética',
    formulaKatex: 'W_{\\text{neto}} = \\Delta E_k = \\frac{1}{2}m v_f^2 - \\frac{1}{2}m v_i^2',
    explanation: 'El trabajo mecánico realizado por todas las fuerzas que actúan sobre una partícula es exactamente igual al cambio neto en su energía cinética.',
  },
];

export const INGENIERIA_QUESTIONS: EngineeringMathQuestion[] = [
  {
    "id": "ing-01",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Propiedades de los Determinantes de Orden n",
    "problemStatement": "Sea $A$ una matriz cuadrada de orden $3 \\times 3$ tal que su determinante es $\\det(A) = -4$. Si se define la matriz $B = 2A$, ¿cuál es el valor exacto del determinante $\\det(B)$?",
    "options": {
      "A": "-32",
      "B": "-8",
      "C": "-16",
      "D": "16"
    },
    "correctAnswer": "A",
    "formalSolution": "Para una matriz cuadrada $A$ de orden $n \\times n$ y un escalar $k \\in \\mathbb{R}$, se cumple la propiedad fundamental $\\det(k A) = k^n \\det(A)$. Dado que el orden de la matriz es $n = 3$ y el escalar es $k = 2$, tenemos: $\\det(2A) = 2^3 \\cdot \\det(A) = 8 \\cdot (-4) = -32$.",
    "stepByStepDerivation": [
      "Identificar el orden dimensional de la matriz: n = 3.",
      "Identificar el escalar multiplicador: k = 2.",
      "Aplicar la propiedad: det(k·A) = k^n · det(A).",
      "Sustituir valores: det(2A) = 2^3 · det(A) = 8 · (-4).",
      "Concluir el resultado: det(2A) = -32."
    ],
    "distractorRationale": {
      "A": "Correcto. 2^3 · (-4) = 8 · (-4) = -32.",
      "B": "Error común: multiplicar linealmente por 2 (-4 · 2 = -8), ignorando que el escalar multiplica cada una de las 3 filas.",
      "C": "Error al elevar al cuadrado en lugar de al cubo (2^2 · (-4) = -16).",
      "D": "Error en el cálculo algebraico y pérdida del signo negativo."
    }
  },
  {
    "id": "ing-02",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Cálculo de Determinante 3x3 por Expansión de Laplace",
    "problemStatement": "Considere la matriz $M = \\begin{pmatrix} 3 & 0 & 2 \\\\ 1 & 4 & -1 \\\\ 0 & 2 & 5 \\end{pmatrix}$. ¿Cuál es el valor del determinante $\\det(M)$?",
    "options": {
      "A": "70",
      "B": "62",
      "C": "48",
      "D": "54"
    },
    "correctAnswer": "A",
    "formalSolution": "Expandiendo por la primera fila: $\\det(M) = 3 \\cdot \\begin{vmatrix} 4 & -1 \\\\ 2 & 5 \\end{vmatrix} - 0 + 2 \\cdot \\begin{vmatrix} 1 & 4 \\\\ 0 & 2 \\end{vmatrix}$. El primer menor es: $(4)(5) - (-1)(2) = 20 + 2 = 22$. El segundo menor es: $(1)(2) - (4)(0) = 2$. Luego: $\\det(M) = 3(22) + 2(2) = 66 + 4 = 70$.",
    "stepByStepDerivation": [
      "Expandir por la primera fila aprovechando el cero central: det(M) = 3·M_11 - 0·M_12 + 2·M_13.",
      "Menor M_11: (4)(5) - (-1)(2) = 20 + 2 = 22.",
      "Menor M_13: (1)(2) - (4)(0) = 2.",
      "Combinar términos: 3·(22) + 2·(2) = 66 + 4 = 70."
    ],
    "distractorRationale": {
      "A": "Correcto. 3(22) + 2(2) = 66 + 4 = 70.",
      "B": "Error al restar en lugar de sumar el término complementario (66 - 4 = 62).",
      "C": "Error aritmético en el producto cruzado de los menores.",
      "D": "Omisión de la contribución del elemento a_13."
    }
  },
  {
    "id": "ing-03",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Condición de Invertibilidad y Teorema de Rouché-Frobenius",
    "problemStatement": "Un sistema de ecuaciones lineales cuadrado $A\\vec{x} = \\vec{b}$ con $n$ ecuaciones y $n$ incógnitas tiene solución única si y solo si:",
    "options": {
      "A": "El determinante de la matriz de coeficientes es no nulo ($\\det(A) \\neq 0$), lo que equivale a que el rango de la matriz sea igual a $n$.",
      "B": "El vector de términos independientes $\\vec{b}$ es idénticamente nulo.",
      "C": "La traza de la matriz $A$ es estrictamente positiva.",
      "D": "La matriz $A$ tiene al menos una fila compuesta enteramente por ceros."
    },
    "correctAnswer": "A",
    "formalSolution": "Por el Teorema Fundamental de Matrices Invertibles y el Teorema de Rouché-Frobenius, un sistema lineal cuadrado $A\\vec{x} = \\vec{b}$ es compatible determinado si y solo si $\\det(A) \\neq 0$, lo que garantiza que $\\text{rg}(A) = \\text{rg}(A|b) = n$ y existe una única inversa $A^{-1}$ tal que $\\vec{x} = A^{-1}\\vec{b}$.",
    "stepByStepDerivation": [
      "Definir el sistema matricial A·x = b de orden n.",
      "Para que exista solución única para cualquier b, A debe ser invertible.",
      "La condición necesaria y suficiente para que A sea invertible es det(A) ≠ 0.",
      "Equivale a que las columnas de A sean linealmente independientes, es decir, rg(A) = n."
    ],
    "distractorRationale": {
      "A": "Correcto. det(A) ≠ 0 y rango completo n garantizan compatibilidad determinada.",
      "B": "Si b = 0 el sistema es homogéneo y siempre tiene solución trivial, pero si det(A) = 0 tiene infinitas soluciones.",
      "C": "La traza no tiene relación directa con la invertibilidad de una matriz.",
      "D": "Una fila de ceros implica det(A) = 0 y rango < n, impidiendo la solución única."
    }
  },
  {
    "id": "ing-04",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Multiplicatividad del Determinante y Matriz Inversa",
    "problemStatement": "Sean $A$ y $B$ matrices cuadradas de orden $4 \\times 4$ tales que $\\det(A) = 3$ y $\\det(B) = -2$. ¿Cuál es el valor exacto de $\\det(A^2 \\cdot B^{-1} \\cdot A^T)$?",
    "options": {
      "A": "$-13.5$",
      "B": "$13.5$",
      "C": "$-27$",
      "D": "$6$"
    },
    "correctAnswer": "A",
    "formalSolution": "Por las propiedades multiplicativas del determinante: $\\det(X \\cdot Y) = \\det(X) \\cdot \\det(Y)$, $\\det(X^k) = (\\det X)^k$, $\\det(X^{-1}) = \\frac{1}{\\det X}$, y $\\det(X^T) = \\det(X)$. Aplicando estas identidades: $\\det(A^2 \\cdot B^{-1} \\cdot A^T) = (\\det A)^2 \\cdot \\frac{1}{\\det B} \\cdot \\det(A) = (\\det A)^3 \\cdot \\frac{1}{\\det B} = 3^3 \\cdot \\frac{1}{-2} = 27 \\cdot (-0.5) = -13.5$.",
    "stepByStepDerivation": [
      "Aplicar distributividad del determinante sobre el producto: det(A^2 · B^(-1) · A^T) = det(A^2) · det(B^(-1)) · det(A^T).",
      "Sustituir det(A^2) = (det A)^2 = 3^2 = 9.",
      "Sustituir det(B^(-1)) = 1 / det(B) = 1 / (-2) = -0.5.",
      "Sustituir det(A^T) = det(A) = 3.",
      "Multiplicar los resultados: 9 · (-0.5) · 3 = -13.5."
    ],
    "distractorRationale": {
      "A": "Correcto. 3^3 / (-2) = 27 / (-2) = -13.5.",
      "B": "Error al omitir el signo negativo del determinante de B^(-1).",
      "C": "Error al no dividir entre det(B), multiplicando directamente.",
      "D": "Error al multiplicar linealmente los determinantes sin elevar al exponente cúbico de A."
    }
  },
  {
    "id": "ing-05",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Determinante de Matrices Antisimétricas de Orden Impar",
    "problemStatement": "Sea $A$ una matriz real antisimétrica ($A^T = -A$) de orden $5 \\times 5$. ¿Cuál es el valor ineludible de su determinante $\\det(A)$?",
    "options": {
      "A": "$0$",
      "B": "$1$",
      "C": "$-1$",
      "D": "Indeterminado sin conocer las entradas numéricas."
    },
    "correctAnswer": "A",
    "formalSolution": "Dado que $A^T = -A$, aplicamos el determinante a ambos miembros: $\\det(A^T) = \\det(-A)$. Como $\\det(A^T) = \\det(A)$ y para una matriz de orden $n$, $\\det(-A) = (-1)^n \\det(A)$, tenemos: $\\det(A) = (-1)^5 \\det(A) = -\\det(A)$. Sumando $\\det(A)$ a ambos lados: $2\\det(A) = 0 \\implies \\det(A) = 0$. Toda matriz antisimétrica de orden impar tiene determinante nulo.",
    "stepByStepDerivation": [
      "Partir de la definición de matriz antisimétrica: A^T = -A.",
      "Aplicar la propiedad del determinante de la transpuesta: det(A^T) = det(A).",
      "Aplicar la propiedad de multiplicación por escalar k = -1 en orden n = 5: det(-A) = (-1)^5 · det(A) = -det(A).",
      "Igualar: det(A) = -det(A) ==> 2·det(A) = 0 ==> det(A) = 0."
    ],
    "distractorRationale": {
      "A": "Correcto. (-1)^5 = -1 obliga a que det(A) = -det(A), por tanto det(A) = 0.",
      "B": "1 viola la propiedad de antisimetría en dimensión impar.",
      "C": "-1 no satisface la igualdad det(A) = -det(A).",
      "D": "Falso, es un teorema algebraico universal válido para cualquier orden n impar."
    }
  },
  {
    "id": "ing-06",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Cálculo Explícito de la Matriz Inversa 2x2",
    "problemStatement": "Dada la matriz $A = \\begin{pmatrix} 4 & 7 \\\\ 2 & 5 \\end{pmatrix}$, ¿cuál es la matriz inversa $A^{-1}$?",
    "options": {
      "A": "$\\frac{1}{6} \\begin{pmatrix} 5 & -7 \\\\ -2 & 4 \\end{pmatrix}$",
      "B": "$\\frac{1}{6} \\begin{pmatrix} 4 & -2 \\\\ -7 & 5 \\end{pmatrix}$",
      "C": "$\\begin{pmatrix} 5 & -7 \\\\ -2 & 4 \\end{pmatrix}$",
      "D": "$\\frac{1}{34} \\begin{pmatrix} 5 & -7 \\\\ -2 & 4 \\end{pmatrix}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Para $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, el determinante es $\\det(A) = ad - bc = (4)(5) - (7)(2) = 20 - 14 = 6$. La fórmula de la matriz inversa es $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} = \\frac{1}{6} \\begin{pmatrix} 5 & -7 \\\\ -2 & 4 \\end{pmatrix}$.",
    "stepByStepDerivation": [
      "Calcular el determinante: det(A) = 4·5 - 7·2 = 20 - 14 = 6 ≠ 0.",
      "Intercambiar los elementos de la diagonal principal: 4 y 5 se intercambian.",
      "Cambiar el signo de los elementos de la diagonal secundaria: 7 pasa a -7 y 2 pasa a -2.",
      "Dividir la matriz adjunta resultante entre el determinante det(A) = 6."
    ],
    "distractorRationale": {
      "A": "Correcto. Matriz adjunta dividida exactamente por det(A) = 6.",
      "B": "Error al trasponer de forma equivocada la matriz adjunta.",
      "C": "Error al olvidar dividir entre el determinante escalar det(A) = 6.",
      "D": "Error al calcular el determinante sumando en vez de restar (20 + 14 = 34)."
    }
  },
  {
    "id": "ing-07",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Teorema del Rango y la Nulidad (Dimensión del Espacio Nulo)",
    "problemStatement": "Una matriz real $A$ de tamaño $4 \\times 6$ (4 filas y 6 columnas) tiene rango $\\text{rg}(A) = 3$. ¿Cuál es la dimensión de su espacio nulo o nulidad ($\\text{dim}(\\ker A)$)?",
    "options": {
      "A": "$3$",
      "B": "$1$",
      "C": "$4$",
      "D": "$2$"
    },
    "correctAnswer": "A",
    "formalSolution": "El Teorema de la Dimensión (o Teorema del Rango-Nulidad) establece que para cualquier matriz $A$ de tamaño $m \\times n$, se cumple: $\\text{rg}(A) + \\text{dim}(\\ker A) = n$, donde $n$ es el número de columnas (dimensión del espacio de salida). Como $n = 6$ y $\\text{rg}(A) = 3$, tenemos: $3 + \\text{dim}(\\ker A) = 6 \\implies \\text{dim}(\\ker A) = 6 - 3 = 3$.",
    "stepByStepDerivation": [
      "Identificar el número de columnas n = 6.",
      "Identificar el rango de la matriz: rg(A) = 3.",
      "Formular el Teorema del Rango y la Nulidad: rg(A) + nulidad(A) = n.",
      "Despejar la nulidad: nulidad(A) = 6 - 3 = 3."
    ],
    "distractorRationale": {
      "A": "Correcto. nulidad = 6 - 3 = 3.",
      "B": "Error al restar del número de filas (4 - 3 = 1), olvidando que el teorema aplica al número de columnas n.",
      "C": "Confusión con el rango del espacio fila o columnas pivote.",
      "D": "Error aritmético en la sustracción dimensional."
    }
  },
  {
    "id": "ing-08",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Regla de Cramer para Sistemas Lineales 2x2",
    "problemStatement": "Dado el sistema lineal: $\\begin{cases} 3x + 2y = 7 \\\\ 5x - 4y = 8 \\end{cases}$, determine el valor de la incógnita $x$ aplicando la Regla de Cramer.",
    "options": {
      "A": "$x = 2$",
      "B": "$x = 1$",
      "C": "$x = 3$",
      "D": "$x = -2$"
    },
    "correctAnswer": "A",
    "formalSolution": "El determinante del sistema es $\\Delta = \\begin{vmatrix} 3 & 2 \\\\ 5 & -4 \\end{vmatrix} = (3)(-4) - (2)(5) = -12 - 10 = -22$. El determinante correspondiente a $x$ sustituyendo los términos independientes en la columna 1 es $\\Delta_x = \\begin{vmatrix} 7 & 2 \\\\ 8 & -4 \\end{vmatrix} = (7)(-4) - (2)(8) = -28 - 16 = -44$. Por la Regla de Cramer: $x = \\frac{\\Delta_x}{\\Delta} = \\frac{-44}{-22} = 2$.",
    "stepByStepDerivation": [
      "Calcular determinante del sistema: Δ = 3(-4) - 2(5) = -12 - 10 = -22.",
      "Reemplazar la columna x por términos independientes (7, 8): Δ_x = 7(-4) - 2(8) = -28 - 16 = -44.",
      "Calcular x = Δ_x / Δ = -44 / -22 = 2."
    ],
    "distractorRationale": {
      "A": "Correcto. Δ_x / Δ = -44 / -22 = 2.",
      "B": "Error en la multiplicación cruzada de determinantes.",
      "C": "Error al calcular Δ sumando en vez de restar los productos secundarios.",
      "D": "Error en la ley de signos al dividir dos cantidades negativas (-44 / -22 = +2)."
    }
  },
  {
    "id": "ing-09",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Cálculo de Autovalores (Valores Propios) de una Matriz 2x2",
    "problemStatement": "¿Cuáles son los valores propios (autovalores) $\\lambda$ de la matriz $A = \\begin{pmatrix} 5 & 2 \\\\ 2 & 2 \\end{pmatrix}$?",
    "options": {
      "A": "$\\lambda_1 = 6, \\; \\lambda_2 = 1$",
      "B": "$\\lambda_1 = 5, \\; \\lambda_2 = 2$",
      "C": "$\\lambda_1 = 7, \\; \\lambda_2 = 6$",
      "D": "$\\lambda_1 = 4, \\; \\lambda_2 = 3$"
    },
    "correctAnswer": "A",
    "formalSolution": "La ecuación característica está dada por $\\det(A - \\lambda I) = 0$: $\\begin{vmatrix} 5 - \\lambda & 2 \\\\ 2 & 2 - \\lambda \\end{vmatrix} = (5 - \\lambda)(2 - \\lambda) - 4 = \\lambda^2 - 7\\lambda + 10 - 4 = \\lambda^2 - 7\\lambda + 6 = 0$. Factorizando: $(\\lambda - 6)(\\lambda - 1) = 0$, cuyas raíces son $\\lambda_1 = 6$ y $\\lambda_2 = 1$. Verificación: $\\text{tr}(A) = 5+2 = 7 = 6+1$ y $\\det(A) = 10 - 4 = 6 = 6 \\cdot 1$.",
    "stepByStepDerivation": [
      "Plantear la ecuación característica: det(A - λI) = 0.",
      "Desarrollar el determinante: (5 - λ)(2 - λ) - (2)(2) = λ^2 - 7λ + 6 = 0.",
      "Factorizar el trinomio: (λ - 6)(λ - 1) = 0.",
      "Concluir autovalores: λ_1 = 6 y λ_2 = 1."
    ],
    "distractorRationale": {
      "A": "Correcto. Raíces del polinomio característico λ^2 - 7λ + 6 = 0.",
      "B": "Error al tomar directamente los elementos de la diagonal principal sin restar el producto secundario.",
      "C": "Confusión entre los coeficientes del polinomio característico y sus raíces.",
      "D": "Valores cuya suma da 7 pero cuyo producto no satisface det(A) = 6."
    }
  },
  {
    "id": "ing-10",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Cálculo de Autovectores (Vectores Propios) Asociados",
    "problemStatement": "Para la matriz $A = \\begin{pmatrix} 5 & 2 \\\\ 2 & 2 \\end{pmatrix}$ y el autovalor $\\lambda = 6$, determine un autovector $\\vec{v}$ no nulo asociado.",
    "options": {
      "A": "$\\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$",
      "B": "$\\begin{pmatrix} 1 \\\\ -2 \\end{pmatrix}$",
      "C": "$\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix}$",
      "D": "$\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$"
    },
    "correctAnswer": "A",
    "formalSolution": "El autovector satisface el sistema homogéneo $(A - 6I)\\vec{v} = \\vec{0}$: $\\begin{pmatrix} 5 - 6 & 2 \\\\ 2 & 2 - 6 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} -1 & 2 \\\\ 2 & -4 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$. La primera ecuación es $-x + 2y = 0 \\implies x = 2y$. Eligiendo $y = 1$, obtenemos $x = 2$, por lo que un autovector representativo es $\\vec{v} = \\begin{pmatrix} 2 \\\\ 1 \\end{pmatrix}$.",
    "stepByStepDerivation": [
      "Formar la matriz (A - 6I) = [[-1, 2], [2, -4]].",
      "Plantear el sistema homogéneo: -x + 2y = 0 y 2x - 4y = 0.",
      "Observar que la segunda ecuación es redundante (-2 veces la primera).",
      "Despejar x en función de y: x = 2y.",
      "Fijar parámetro y = 1 ==> vector propio v = (2, 1)^T."
    ],
    "distractorRationale": {
      "A": "Correcto. Cumple A·(2, 1)^T = (12, 6)^T = 6·(2, 1)^T.",
      "B": "(1, -2)^T es ortogonal a este vector y corresponde al otro autovalor λ = 1.",
      "C": "No satisface la ecuación característica (A - 6I)v = 0.",
      "D": "Vector canónico que no satisface la relación de autovalor."
    }
  },
  {
    "id": "ing-11",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Relación entre Traza, Determinante y Autovalores",
    "problemStatement": "Una matriz cuadrada $A$ de orden $3 \\times 3$ tiene autovalores $\\lambda_1 = 3$, $\\lambda_2 = -1$ y $\\lambda_3 = 4$. ¿Cuáles son los valores exactos de su traza $\\text{tr}(A)$ y su determinante $\\det(A)$?",
    "options": {
      "A": "$\\text{tr}(A) = 6, \\quad \\det(A) = -12$",
      "B": "$\\text{tr}(A) = -12, \\quad \\det(A) = 6$",
      "C": "$\\text{tr}(A) = 8, \\quad \\det(A) = 12$",
      "D": "$\\text{tr}(A) = 6, \\quad \\det(A) = 12$"
    },
    "correctAnswer": "A",
    "formalSolution": "Por teoremas fundamentales del álgebra lineal: 1) La traza de una matriz es igual a la suma de sus autovalores: $\\text{tr}(A) = \\sum \\lambda_i = 3 + (-1) + 4 = 6$. 2) El determinante es igual al producto de sus autovalores: $\\det(A) = \\prod \\lambda_i = (3)(-1)(4) = -12$.",
    "stepByStepDerivation": [
      "Calcular traza: tr(A) = λ_1 + λ_2 + λ_3 = 3 - 1 + 4 = 6.",
      "Calcular determinante: det(A) = λ_1 · λ_2 · λ_3 = 3 · (-1) · 4 = -12.",
      "Concluir: tr(A) = 6 y det(A) = -12."
    ],
    "distractorRationale": {
      "A": "Correcto. Traza = suma = 6; Determinante = producto = -12.",
      "B": "Error al invertir los roles de la traza y el determinante.",
      "C": "Error en la suma y en el signo del producto.",
      "D": "Error de signo en el cálculo del determinante (-12 vs 12)."
    }
  },
  {
    "id": "ing-12",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Propiedades de Matrices Ortogonales",
    "problemStatement": "Sea $Q$ una matriz real ortogonal de orden $n \\times n$ tal que $Q^T Q = I$. ¿Cuáles son los únicos valores posibles que puede tomar su determinante $\\det(Q)$?",
    "options": {
      "A": "$\\det(Q) \\in \\{-1, 1\\}$",
      "B": "$\\det(Q) = 0$",
      "C": "Cualquier número real positivo.",
      "D": "$\\det(Q) = n$"
    },
    "correctAnswer": "A",
    "formalSolution": "Tomando el determinante a la relación definitoria $Q^T Q = I$: $\\det(Q^T Q) = \\det(I) = 1$. Por la multiplicatividad del determinante y la igualdad $\\det(Q^T) = \\det(Q)$, tenemos: $\\det(Q^T) \\cdot \\det(Q) = (\\det Q)^2 = 1$. Resolviendo para $\\det(Q)$, obtenemos: $\\det(Q) = \\pm 1$.",
    "stepByStepDerivation": [
      "Partir de Q^T · Q = I.",
      "det(Q^T · Q) = det(I) = 1.",
      "det(Q^T) · det(Q) = (det Q)^2 = 1.",
      "Extraer raíz cuadrada: det(Q) = ±1."
    ],
    "distractorRationale": {
      "A": "Correcto. det(Q) solo puede ser +1 (rotación) o -1 (rotación con reflexión).",
      "B": "det(Q) nunca puede ser cero porque Q es invertible.",
      "C": "El determinante está estrictamente acotado a las raíces cuadradas de 1.",
      "D": "Confusión entre la dimensión n de la matriz y el valor del determinante."
    }
  },
  {
    "id": "ing-13",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Teorema de Cayley-Hamilton para el Cálculo de la Inversa",
    "problemStatement": "Sea $A$ una matriz $2 \\times 2$ cuyo polinomio característico es $p(\\lambda) = \\lambda^2 - 6\\lambda + 5$. Según el Teorema de Cayley-Hamilton, ¿cuál es la expresión de $A^{-1}$ en términos de $A$ e $I$?",
    "options": {
      "A": "$A^{-1} = \\frac{1}{5}(6I - A)$",
      "B": "$A^{-1} = \\frac{1}{6}(5I + A)$",
      "C": "$A^{-1} = 6A - 5I$",
      "D": "$A^{-1} = A - 6I$"
    },
    "correctAnswer": "A",
    "formalSolution": "El Teorema de Cayley-Hamilton enuncia que toda matriz cuadrada anula su propio polinomio característico: $p(A) = A^2 - 6A + 5I = 0$. Despejando el término con la identidad: $5I = 6A - A^2 = A(6I - A)$. Multiplicando a la izquierda por $A^{-1}$: $5 A^{-1} = 6I - A \\implies A^{-1} = \\frac{1}{5}(6I - A)$.",
    "stepByStepDerivation": [
      "Aplicar Cayley-Hamilton: A^2 - 6A + 5I = 0.",
      "Aislar el término escalar: 5I = 6A - A^2.",
      "Factorizar A: 5I = A(6I - A).",
      "Multiplicar por A^(-1) y dividir entre 5: A^(-1) = (1/5)(6I - A)."
    ],
    "distractorRationale": {
      "A": "Correcto. Despeje riguroso a partir de A^2 - 6A + 5I = 0.",
      "B": "Error en la inversión de coeficientes entre el término lineal y el independiente.",
      "C": "Error al no aislar ni dividir por el término constante 5.",
      "D": "Expresión lineal incompleta que no representa la matriz inversa."
    }
  },
  {
    "id": "ing-14",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Potenciación de Matrices Diagonalizables",
    "problemStatement": "Una matriz $A$ se diagonaliza como $A = P D P^{-1}$, donde $D = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$. ¿Cuál es la matriz $D^4$ necesaria para calcular $A^4 = P D^4 P^{-1}$?",
    "options": {
      "A": "$\\begin{pmatrix} 16 & 0 \\\\ 0 & 81 \\end{pmatrix}$",
      "B": "$\\begin{pmatrix} 8 & 0 \\\\ 0 & 12 \\end{pmatrix}$",
      "C": "$\\begin{pmatrix} 16 & 0 \\\\ 0 & 27 \\end{pmatrix}$",
      "D": "$\\begin{pmatrix} 4 & 0 \\\\ 0 & 9 \\end{pmatrix}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Para una matriz diagonal $D = \\text{diag}(\\lambda_1, \\lambda_2)$, la potencia $k$-ésima se obtiene elevando cada elemento diagonal a la potencia $k$: $D^k = \\text{diag}(\\lambda_1^k, \\lambda_2^k)$. Para $k = 4$: $2^4 = 16$ y $3^4 = 81$. Por lo tanto, $D^4 = \\begin{pmatrix} 16 & 0 \\\\ 0 & 81 \\end{pmatrix}$.",
    "stepByStepDerivation": [
      "Recordar que para matrices diagonales D^k = diag(d_i^k).",
      "Calcular d_11^4 = 2^4 = 16.",
      "Calcular d_22^4 = 3^4 = 81.",
      "Construir D^4 = [[16, 0], [0, 81]]."
    ],
    "distractorRationale": {
      "A": "Correcto. 2^4 = 16 y 3^4 = 81.",
      "B": "Error común: multiplicar por 4 (2*4=8, 3*4=12) en vez de elevar a la potencia 4.",
      "C": "Error al elevar 3 al cubo en vez de a la cuarta potencia.",
      "D": "Error al elevar al cuadrado en lugar de a la cuarta potencia."
    }
  },
  {
    "id": "ing-15",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Criterio de Diagonalizabilidad (Multiplicidad Algebraica vs Geométrica)",
    "problemStatement": "Considere la matriz $A = \\begin{pmatrix} 3 & 1 \\\\ 0 & 3 \\end{pmatrix}$. ¿Por qué esta matriz NO es diagonalizable sobre $\\mathbb{R}$?",
    "options": {
      "A": "Porque el autovalor $\\lambda = 3$ tiene multiplicidad algebraica 2 pero su multiplicidad geométrica es 1.",
      "B": "Porque sus autovalores son números complejos no reales.",
      "C": "Porque su determinante es igual a cero.",
      "D": "Porque la traza es distinta de cero."
    },
    "correctAnswer": "A",
    "formalSolution": "El polinomio característico es $p(\\lambda) = (3 - \\lambda)^2 = 0$, lo que da el autovalor único $\\lambda = 3$ con multiplicidad algebraica $m_a(3) = 2$. La multiplicidad geométrica $m_g(3)$ es la dimensión del espacio propio $\\ker(A - 3I) = \\ker\\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix}$. Como el rango de $(A - 3I)$ es 1, la nulidad es $2 - 1 = 1$. Al ser $m_g(3) = 1 < m_a(3) = 2$, la matriz no posee una base de autovectores y no es diagonalizable.",
    "stepByStepDerivation": [
      "Calcular autovalor: λ = 3 con multiplicidad algebraica ma = 2.",
      "Plantear (A - 3I) = [[0, 1], [0, 0]].",
      "Calcular rango de (A - 3I): rg = 1.",
      "Calcular multiplicidad geométrica mg = n - rg = 2 - 1 = 1.",
      "Como mg < ma, la matriz no es diagonalizable."
    ],
    "distractorRationale": {
      "A": "Correcto. mg(3) = 1 < ma(3) = 2 impide la existencia de dos autovectores linealmente independientes.",
      "B": "Falso, el autovalor λ = 3 es puramente real.",
      "C": "det(A) = 3*3 - 0 = 9 ≠ 0, la matriz es perfectamente invertible.",
      "D": "La traza no es condición de no diagonalizabilidad."
    }
  },
  {
    "id": "ing-16",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Dependencia e Independencia Lineal en R3",
    "problemStatement": "Determine si el conjunto de vectores $S = \\{ (1, 2, 3), (0, 1, 2), (2, 4, 6) \\}$ en $\\mathbb{R}^3$ es linealmente independiente o dependiente.",
    "options": {
      "A": "Linealmente dependiente, porque el tercer vector es exactamente el doble del primero: $\\vec{v}_3 = 2\\vec{v}_1$.",
      "B": "Linealmente independiente, porque los vectores tienen tres componentes distintas.",
      "C": "Linealmente independiente, porque el segundo vector contiene un cero.",
      "D": "Generan todo el espacio $\\mathbb{R}^3$ con dimensión 3."
    },
    "correctAnswer": "A",
    "formalSolution": "Un conjunto de vectores es linealmente dependiente si uno de ellos puede expresarse como combinación lineal de los demás. Observamos directamente que $\\vec{v}_3 = (2, 4, 6) = 2 \\cdot (1, 2, 3) = 2\\vec{v}_1$. Por lo tanto, la combinación no trivial $2\\vec{v}_1 + 0\\vec{v}_2 - \\vec{v}_3 = \\vec{0}$ demuestra dependencia lineal.",
    "stepByStepDerivation": [
      "Comparar v_1 = (1, 2, 3) y v_3 = (2, 4, 6).",
      "Constatar que v_3 = 2·v_1.",
      "Existe combinación lineal no trivial 2·v_1 + 0·v_2 - v_3 = 0.",
      "Concluir que el conjunto es linealmente dependiente."
    ],
    "distractorRationale": {
      "A": "Correcto. La proporcionalidad v_3 = 2*v_1 establece dependencia lineal inmediata.",
      "B": "Tener tres componentes es la dimensión del espacio, no garantiza independencia.",
      "C": "La presencia de ceros no implica independencia lineal.",
      "D": "Al ser dependientes, solo generan un subespacio de dimensión 2 (un plano)."
    }
  },
  {
    "id": "ing-17",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Volumen de Paralelepípedo mediante el Determinante 3x3",
    "problemStatement": "Los vectores $\\vec{u} = (2, 0, 0)$, $\\vec{v} = (1, 3, 0)$ y $\\vec{w} = (0, 1, 4)$ determinan un paralelepípedo en $\\mathbb{R}^3$. ¿Cuál es su volumen exacto?",
    "options": {
      "A": "$24\\text{ unidades cúbicas}$",
      "B": "$12\\text{ unidades cúbicas}$",
      "C": "$48\\text{ unidades cúbicas}$",
      "D": "$6\\text{ unidades cúbicas}$"
    },
    "correctAnswer": "A",
    "formalSolution": "El volumen del paralelepípedo sustentado por tres vectores es igual al valor absoluto de su producto mixto o determinante: $V = |\\det([\\vec{u}, \\vec{v}, \\vec{w}])| = \\left| \\begin{vmatrix} 2 & 0 & 0 \\\\ 1 & 3 & 0 \\\\ 0 & 1 & 4 \\end{vmatrix} \\right|$. Como es una matriz triangular inferior, el determinante es el producto de los elementos diagonales: $V = |2 \\cdot 3 \\cdot 4| = 24$.",
    "stepByStepDerivation": [
      "Formar la matriz con los vectores fila o columna.",
      "Observar que la matriz es triangular inferior.",
      "Calcular det = 2 · 3 · 4 = 24.",
      "El volumen geométrico es |24| = 24."
    ],
    "distractorRationale": {
      "A": "Correcto. V = 2 · 3 · 4 = 24.",
      "B": "Error al dividir entre 2, confundiendo el paralelepípedo con una pirámide triangular.",
      "C": "Error al multiplicar por 2 innecesariamente.",
      "D": "Error al sumar en lugar de multiplicar los factores diagonales."
    }
  },
  {
    "id": "ing-18",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Proyección Ortogonal de un Vector sobre Otro",
    "problemStatement": "Sean los vectores $\\vec{u} = (3, 4)$ y $\\vec{v} = (1, 2)$ en $\\mathbb{R}^2$. ¿Cuál es el vector proyección ortogonal de $\\vec{v}$ sobre $\\vec{u}$ ($\\text{proj}_{\\vec{u}}\\vec{v}$)?",
    "options": {
      "A": "$\\left(\\frac{33}{25}, \\frac{44}{25}\\right)$",
      "B": "$\\left(\\frac{11}{5}, \\frac{22}{5}\\right)$",
      "C": "$\\left(\\frac{3}{5}, \\frac{4}{5}\\right)$",
      "D": "$\\left(\\frac{11}{25}, \\frac{22}{25}\\right)$"
    },
    "correctAnswer": "A",
    "formalSolution": "La fórmula de proyección ortogonal es $\\text{proj}_{\\vec{u}}\\vec{v} = \\frac{\\vec{v} \\cdot \\vec{u}}{\\|\\vec{u}\\|^2} \\vec{u}$. El producto escalar es $\\vec{v} \\cdot \\vec{u} = (1)(3) + (2)(4) = 3 + 8 = 11$. La norma al cuadrado de $\\vec{u}$ es $\\|\\vec{u}\\|^2 = 3^2 + 4^2 = 9 + 16 = 25$. Por tanto, el escalar es $\\frac{11}{25}$. Multiplicando por $\\vec{u} = (3, 4)$: $\\text{proj}_{\\vec{u}}\\vec{v} = \\frac{11}{25}(3, 4) = \\left(\\frac{33}{25}, \\frac{44}{25}\\right)$.",
    "stepByStepDerivation": [
      "Calcular producto punto: u · v = 3(1) + 4(2) = 11.",
      "Calcular norma cuadrada de u: ||u||^2 = 3^2 + 4^2 = 25.",
      "Multiplicar escalar (11/25) por vector u: (11/25) · (3, 4) = (33/25, 44/25)."
    ],
    "distractorRationale": {
      "A": "Correcto. (11/25) * (3, 4) = (33/25, 44/25).",
      "B": "Error al dividir entre la norma ||u|| = 5 en lugar de ||u||^2 = 25 y proyectar sobre v.",
      "C": "Vector unitario en dirección de u sin considerar la magnitud de la proyección.",
      "D": "Error al multiplicar el escalar por el vector v en vez de u."
    }
  },
  {
    "id": "ing-19",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Proceso de Ortogonalización de Gram-Schmidt en R2",
    "problemStatement": "Aplicando el proceso de Gram-Schmidt a la base $\\{\\vec{v}_1 = (1, 1), \\vec{v}_2 = (1, 2)\\}$ de $\\mathbb{R}^2$, determine el segundo vector ortogonal $\\vec{u}_2$ (sin normalizar).",
    "options": {
      "A": "$\\left(-\\frac{1}{2}, \\frac{1}{2}\\right)$",
      "B": "$\\left(\\frac{1}{2}, \\frac{1}{2}\\right)$",
      "C": "$\\left(0, 1\\right)$",
      "D": "$\\left(-1, 1\\right)$"
    },
    "correctAnswer": "A",
    "formalSolution": "El primer vector ortogonal se toma directamente: $\\vec{u}_1 = \\vec{v}_1 = (1, 1)$. El segundo vector ortogonal se calcula restando la proyección sobre $\\vec{u}_1$: $\\vec{u}_2 = \\vec{v}_2 - \\frac{\\vec{v}_2 \\cdot \\vec{u}_1}{\\|\\vec{u}_1\\|^2} \\vec{u}_1$. Calculamos $\\vec{v}_2 \\cdot \\vec{u}_1 = (1)(1) + (2)(1) = 3$, y $\\|\\vec{u}_1\\|^2 = 1^2 + 1^2 = 2$. Luego: $\\vec{u}_2 = (1, 2) - \\frac{3}{2}(1, 1) = \\left(1 - \\frac{3}{2}, 2 - \\frac{3}{2}\\right) = \\left(-\\frac{1}{2}, \\frac{1}{2}\\right)$. Verificación de ortogonalidad: $\\vec{u}_1 \\cdot \\vec{u}_2 = (1)(-1/2) + (1)(1/2) = 0$.",
    "stepByStepDerivation": [
      "Fijar u_1 = v_1 = (1, 1).",
      "Calcular producto v_2 · u_1 = 1·1 + 2·1 = 3.",
      "Calcular norma ||u_1||^2 = 1^2 + 1^2 = 2.",
      "Calcular u_2 = (1, 2) - (3/2)·(1, 1) = (-1/2, 1/2).",
      "Verificar u_1 · u_2 = -1/2 + 1/2 = 0."
    ],
    "distractorRationale": {
      "A": "Correcto. u_2 = (-1/2, 1/2) es estrictamente ortogonal a (1, 1).",
      "B": "(1/2, 1/2) no es ortogonal a (1, 1) pues su producto punto es 1 ≠ 0.",
      "C": "(0, 1) tiene producto punto 1 con (1, 1), no es ortogonal.",
      "D": "(-1, 1) es un múltiplo escalar pero el cálculo directo de Gram-Schmidt da (-1/2, 1/2)."
    }
  },
  {
    "id": "ing-20",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Autovalores de Matrices Idempotentes (Proyecciones)",
    "problemStatement": "Sea $P$ una matriz cuadrada no nula tal que $P^2 = P$ (matriz idempotente). ¿Cuáles son los únicos valores propios posibles de $P$?",
    "options": {
      "A": "$\\lambda \\in \\{0, 1\\}$",
      "B": "$\\lambda = 1$ únicamente.",
      "C": "$\\lambda \\in \\{-1, 1\\}$",
      "D": "Cualquier entero no negativo."
    },
    "correctAnswer": "A",
    "formalSolution": "Sea $\\lambda$ un autovalor de $P$ con autovector asociado $\\vec{v} \\neq \\vec{0}$, es decir, $P\\vec{v} = \\lambda\\vec{v}$. Multiplicando por $P$: $P^2\\vec{v} = P(\\lambda\\vec{v}) = \\lambda(P\\vec{v}) = \\lambda^2\\vec{v}$. Dado que $P^2 = P$, se tiene $P\\vec{v} = \\lambda\\vec{v} = \\lambda^2\\vec{v}$. Igualando: $(\\lambda^2 - \\lambda)\\vec{v} = \\vec{0}$. Como $\\vec{v} \\neq \\vec{0}$, concluimos $\\lambda^2 - \\lambda = 0 \\implies \\lambda(\\lambda - 1) = 0 \\implies \\lambda \\in \\{0, 1\\}$.",
    "stepByStepDerivation": [
      "Partir de la ecuación de autovalor: P·v = λ·v con v ≠ 0.",
      "Aplicar P nuevamente: P^2·v = λ^2·v.",
      "Usar la hipótesis de idempotencia P^2 = P: P·v = λ^2·v.",
      "Restar: λ^2·v - λ·v = 0 ==> (λ^2 - λ)·v = 0.",
      "Como v ≠ 0, λ(λ - 1) = 0 ==> λ = 0 o λ = 1."
    ],
    "distractorRationale": {
      "A": "Correcto. λ(λ - 1) = 0 obliga a que los autovalores sean estrictamente 0 o 1.",
      "B": "Si P no es la identidad I, siempre existe el autovalor λ = 0 en el núcleo de la proyección.",
      "C": "λ = -1 daría P^2 = (-1)^2 = 1 ≠ -1, contradiciendo la idempotencia.",
      "D": "Cualquier λ distinto de 0 o 1 no satisface λ^2 = λ."
    }
  },
  {
    "id": "ing-21",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Propiedades de Matrices Nilpotentes",
    "problemStatement": "Una matriz cuadrada $N$ se denomina nilpotente si existe un entero positivo $k$ tal que $N^k = 0$. ¿Cuál de las siguientes afirmaciones es rigurosamente cierta?",
    "options": {
      "A": "El único autovalor de $N$ es $\\lambda = 0$, su determinante es $\\det(N) = 0$ y su traza es $\\text{tr}(N) = 0$.",
      "B": "La matriz $N$ es siempre invertible.",
      "C": "El determinante de $N$ puede ser cualquier número real negativo.",
      "D": "La matriz $N$ siempre es diagonalizable para cualquier $k > 1$."
    },
    "correctAnswer": "A",
    "formalSolution": "Si $N\\vec{v} = \\lambda\\vec{v}$, entonces $N^k\\vec{v} = \\lambda^k\\vec{v}$. Como $N^k = 0$, tenemos $\\lambda^k\\vec{v} = \\vec{0}$, lo que implica $\\lambda^k = 0 \\implies \\lambda = 0$. Como todos los autovalores son cero, $\\det(N) = \\prod \\lambda_i = 0$ y $\\text{tr}(N) = \\sum \\lambda_i = 0$. Además, una matriz nilpotente no nula jamás es diagonalizable, pues su única forma diagonalizable sería la matriz nula.",
    "stepByStepDerivation": [
      "Ecuación de autovalores: N^k·v = λ^k·v = 0.",
      "Concluir que todo autovalor satisface λ^k = 0 ==> λ = 0.",
      "det(N) = producto de autovalores = 0.",
      "tr(N) = suma de autovalores = 0."
    ],
    "distractorRationale": {
      "A": "Correcto. Autovalores cero, determinante nulo y traza nula.",
      "B": "det(N) = 0 implica que N nunca es invertible.",
      "C": "det(N) es estrictamente cero, no puede ser negativo.",
      "D": "Una matriz nilpotente no nula nunca es diagonalizable."
    }
  },
  {
    "id": "ing-22",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Eliminación Gaussiana y Grados de Libertad",
    "problemStatement": "Considere la matriz aumentada del sistema lineal: $\\begin{pmatrix} 1 & 2 & 1 & | & 4 \\\\ 2 & 4 & 3 & | & 9 \\\\ 3 & 6 & 4 & | & 13 \\end{pmatrix}$. Al escalonar mediante operaciones elementales por filas, ¿cuántos grados de libertad (variables libres) tiene el conjunto solución?",
    "options": {
      "A": "$1$ grado de libertad (infinitas soluciones)",
      "B": "$0$ grados de libertad (solución única)",
      "C": "$2$ grados de libertad",
      "D": "El sistema es incompatible (sin solución)"
    },
    "correctAnswer": "A",
    "formalSolution": "Efectuamos $F_2 \\to F_2 - 2F_1$ y $F_3 \\to F_3 - 3F_1$: $F_2 = (0, 0, 1 | 1)$ y $F_3 = (0, 0, 1 | 1)$. Luego $F_3 \\to F_3 - F_2$ produce $(0, 0, 0 | 0)$. La matriz escalonada tiene 2 filas no nulas (2 pivotes en las columnas 1 y 3) y una fila de ceros. Como hay 3 incógnitas y $\\text{rg}(A) = \\text{rg}(A|b) = 2$, el sistema es compatible indeterminado con $n - \\text{rg}(A) = 3 - 2 = 1$ variable libre (la variable $y$).",
    "stepByStepDerivation": [
      "F_2 - 2F_1 = (0, 0, 1 | 1).",
      "F_3 - 3F_1 = (0, 0, 1 | 1).",
      "F_3 - F_2 = (0, 0, 0 | 0).",
      "Rango matriz coeficientes = 2; Rango matriz aumentada = 2.",
      "Número de incógnitas = 3 ==> Grados de libertad = 3 - 2 = 1."
    ],
    "distractorRationale": {
      "A": "Correcto. Rango 2 con 3 variables deja exactamente 1 variable libre.",
      "B": "Para solución única se requeriría rango 3.",
      "C": "2 grados de libertad requeriría rango 1.",
      "D": "No hay contradicción 0 = k (k ≠ 0), la última fila es 0 = 0, el sistema es compatible."
    }
  },
  {
    "id": "ing-23",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Análisis de Parámetros en Sistemas Lineales (Rouché-Frobenius)",
    "problemStatement": "¿Para qué valor del parámetro real $k$ el sistema $\\begin{pmatrix} 1 & 1 \\\\ 2 & k \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 4 \\end{pmatrix}$ tiene infinitas soluciones?",
    "options": {
      "A": "$k = 2$",
      "B": "$k = -2$",
      "C": "$k = 4$",
      "D": "$k \\neq 2$"
    },
    "correctAnswer": "A",
    "formalSolution": "Para que el sistema tenga infinitas soluciones (compatible indeterminado), el rango de la matriz de coeficientes debe ser igual al rango de la matriz aumentada y menor que 2: $\\text{rg}(A) = \\text{rg}(A|b) < 2$. Calculamos $\\det(A) = 1(k) - 1(2) = k - 2$. Si $k = 2$, la segunda ecuación se convierte en $2x + 2y = 4$, que es equivalente a $x + y = 2$ al dividir entre 2. Así, $\\text{rg}(A) = \\text{rg}(A|b) = 1 < 2$, generando infinitas soluciones.",
    "stepByStepDerivation": [
      "Calcular det(A) = k - 2.",
      "Para infinitas soluciones se requiere det(A) = 0 ==> k = 2.",
      "Verificar compatibilidad para k = 2: 2x + 2y = 4 es múltiplo de x + y = 2.",
      "Rango(A) = Rango(A|b) = 1 < 2 ==> Infinitas soluciones."
    ],
    "distractorRationale": {
      "A": "Correcto. k = 2 hace que ambas ecuaciones sean linealmente dependientes.",
      "B": "k = -2 da det(A) = -4 ≠ 0, produciendo solución única.",
      "C": "k = 4 da det(A) = 2 ≠ 0, produciendo solución única.",
      "D": "k ≠ 2 produce solución única, no infinitas soluciones."
    }
  },
  {
    "id": "ing-24",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Sistemas Incompatibles con Parámetro",
    "problemStatement": "Considere el sistema $\\begin{cases} x + y = 2 \\\\ 2x + 2y = k \\end{cases}$. ¿Para qué valores de $k$ el sistema es incompatible (carece de solución)?",
    "options": {
      "A": "$k \\neq 4$",
      "B": "$k = 4$",
      "C": "$k = 0$",
      "D": "$k = 2$"
    },
    "correctAnswer": "A",
    "formalSolution": "Multiplicando la primera ecuación por 2 obtenemos $2x + 2y = 4$. Al compararla con la segunda ecuación $2x + 2y = k$, restando ambas obtenemos $0 = k - 4$. Si $k \\neq 4$, surge la contradicción matemática $0 = k - 4 \\neq 0$, lo que implica $\\text{rg}(A) = 1$ y $\\text{rg}(A|b) = 2$. Por el Teorema de Rouché-Frobenius, al ser $\\text{rg}(A) < \\text{rg}(A|b)$, el sistema no tiene solución para todo $k \\neq 4$.",
    "stepByStepDerivation": [
      "Multiplicar la primera ecuación por 2: 2x + 2y = 4.",
      "Restar con la segunda ecuación (2x + 2y = k): 0 = k - 4.",
      "Si k ≠ 4, la igualdad es falsa (0 = valor no nulo).",
      "Por Rouché-Frobenius, rg(A) = 1 y rg(A|b) = 2 ==> Incompatible para k ≠ 4."
    ],
    "distractorRationale": {
      "A": "Correcto. Para cualquier k ≠ 4 las rectas son paralelas no coincidentes.",
      "B": "k = 4 hace el sistema compatible indeterminado (rectas coincidentes).",
      "C": "k = 0 es un caso particular de k ≠ 4 pero la condición general es todo k ≠ 4.",
      "D": "k = 2 es solo un valor particular dentro de la condición general k ≠ 4."
    }
  },
  {
    "id": "ing-25",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Determinante de la Matriz Adjunta de Orden n",
    "problemStatement": "Sea $A$ una matriz cuadrada de orden $3 \\times 3$ tal que $\\det(A) = 5$. ¿Cuál es el valor exacto del determinante de su matriz adjunta, $\\det(\\text{adj}(A))$?",
    "options": {
      "A": "$25$",
      "B": "$5$",
      "C": "$125$",
      "D": "$1$"
    },
    "correctAnswer": "A",
    "formalSolution": "De la propiedad fundamental $A \\cdot \\text{adj}(A) = \\det(A) \\cdot I$, tomando determinante a ambos lados: $\\det(A \\cdot \\text{adj}(A)) = \\det(\\det(A) \\cdot I)$. Como $\\det(A)$ es un escalar y la matriz identidad $I$ tiene orden $n = 3$, el escalar se factoriza elevado a la $n$: $\\det(A) \\cdot \\det(\\text{adj}(A)) = (\\det A)^n$. Dividiendo entre $\\det(A)$: $\\det(\\text{adj}(A)) = (\\det A)^{n-1}$. Para $n = 3$ y $\\det(A) = 5$: $\\det(\\text{adj}(A)) = 5^{3-1} = 5^2 = 25$.",
    "stepByStepDerivation": [
      "Partir de A · adj(A) = det(A) · I_n.",
      "Tomar determinantes: det(A) · det(adj A) = (det A)^n · det(I) = (det A)^n.",
      "Despejar: det(adj A) = (det A)^(n - 1).",
      "Sustituir n = 3 y det(A) = 5: det(adj A) = 5^(3 - 1) = 5^2 = 25."
    ],
    "distractorRationale": {
      "A": "Correcto. 5^(3-1) = 5^2 = 25.",
      "B": "Error al no elevar al exponente n-1 = 2.",
      "C": "Error al elevar al orden n = 3 en lugar de n - 1 = 2 (5^3 = 125).",
      "D": "Confusión con matrices ortogonales o unimodulares."
    }
  },
  {
    "id": "ing-26",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Matriz Canónica de Rotación en el Plano R2",
    "problemStatement": "¿Cuál es la imagen del vector $\\vec{v} = \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix}$ tras aplicarle una rotación antihoraria de $90^\\circ$ alrededor del origen?",
    "options": {
      "A": "$\\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$",
      "B": "$\\begin{pmatrix} 2 \\\\ -3 \\end{pmatrix}$",
      "C": "$\\begin{pmatrix} -3 \\\\ -2 \\end{pmatrix}$",
      "D": "$\\begin{pmatrix} 3 \\\\ -2 \\end{pmatrix}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La matriz canónica de rotación en $\\mathbb{R}^2$ por un ángulo $\\theta$ es $R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$. Para $\\theta = 90^\\circ$: $\\cos(90^\\circ) = 0$ y $\\sin(90^\\circ) = 1$, por lo que $R_{90^\\circ} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$. Multiplicando por el vector: $R_{90^\\circ}\\vec{v} = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 0(3) - 1(2) \\\\ 1(3) + 0(2) \\end{pmatrix} = \\begin{pmatrix} -2 \\\\ 3 \\end{pmatrix}$.",
    "stepByStepDerivation": [
      "Matriz de rotación R(90°) = [[0, -1], [1, 0]].",
      "Multiplicar por v = (3, 2)^T: x' = 0(3) - 1(2) = -2.",
      "y' = 1(3) + 0(2) = 3.",
      "Vector rotado: (-2, 3)^T."
    ],
    "distractorRationale": {
      "A": "Correcto. Rotación antihoraria estándar transforma (x, y) en (-y, x).",
      "B": "Corresponde a una rotación horaria de 90° (o 270° antihoraria).",
      "C": "Corresponde a una rotación de 180° (inversión de signos).",
      "D": "Corresponde a una reflexión sobre el eje x."
    }
  },
  {
    "id": "ing-27",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Matriz de Reflexión y Preservación de Área",
    "problemStatement": "La matriz $T = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ representa geométricamente una reflexión respecto a la recta $y = x$. ¿Cuál es el valor de su determinante y su significado geométrico?",
    "options": {
      "A": "$\\det(T) = -1$, lo que indica que preserva el área de las figuras pero invierte la orientación espacial.",
      "B": "$\\det(T) = 1$, lo que indica que es una rotación pura.",
      "C": "$\\det(T) = 0$, lo que indica que colapsa el plano a una recta.",
      "D": "$\\det(T) = 2$, lo que indica que duplica el área."
    },
    "correctAnswer": "A",
    "formalSolution": "Calculamos el determinante: $\\det(T) = (0)(0) - (1)(1) = -1$. El valor absoluto $|\\det(T)| = |-1| = 1$ indica que el factor de escala de áreas es 1 (las áreas se conservan exactamente). El signo negativo ($-1$) indica que la transformación es un operador ortogonal impropio que invierte la orientación (quiralidad) del plano, característica intrínseca de toda reflexión.",
    "stepByStepDerivation": [
      "Calcular det(T) = 0·0 - 1·1 = -1.",
      "Analizar magnitud: |det(T)| = 1 ==> preserva áreas.",
      "Analizar signo: det(T) < 0 ==> invierte orientación de bases.",
      "Concluir que toda reflexión tiene determinante -1."
    ],
    "distractorRationale": {
      "A": "Correcto. det(T) = -1 confirma conservación de área e inversión de orientación.",
      "B": "Una rotación pura tiene det = +1 sin invertir orientación.",
      "C": "det(T) no es cero; la matriz es invertible con T^(-1) = T.",
      "D": "No hay dilatación escalar, el área se mantiene idéntica."
    }
  },
  {
    "id": "ing-28",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Determinante de la Matriz de Vandermonde 3x3",
    "problemStatement": "Dada la matriz de Vandermonde $V = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 4 \\\\ 1 & 4 & 16 \\end{pmatrix}$ asociada a los valores $x_1 = 1$, $x_2 = 2$ y $x_3 = 4$, ¿cuál es el valor de $\\det(V)$?",
    "options": {
      "A": "$6$",
      "B": "$12$",
      "C": "$3$",
      "D": "$0$"
    },
    "correctAnswer": "A",
    "formalSolution": "La fórmula universal para el determinante de una matriz de Vandermonde $3 \\times 3$ es $\\det(V) = (x_2 - x_1)(x_3 - x_1)(x_3 - x_2)$. Sustituyendo $x_1 = 1$, $x_2 = 2$, $x_3 = 4$: $\\det(V) = (2 - 1)(4 - 1)(4 - 2) = (1)(3)(2) = 6$.",
    "stepByStepDerivation": [
      "Aplicar la fórmula de Vandermonde: det(V) = (x_2 - x_1)(x_3 - x_1)(x_3 - x_2).",
      "Calcular factores: (2 - 1) = 1; (4 - 1) = 3; (4 - 2) = 2.",
      "Multiplicar: 1 · 3 · 2 = 6."
    ],
    "distractorRationale": {
      "A": "Correcto. (2-1)*(4-1)*(4-2) = 1*3*2 = 6.",
      "B": "Error aritmético al duplicar el producto de diferencias.",
      "C": "Error al omitir la diferencia (x_3 - x_2) = 2.",
      "D": "El determinante sería 0 solo si hubiese dos valores repetidos (x_i = x_j)."
    }
  },
  {
    "id": "ing-29",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Rango y Dimensión del Núcleo de Matriz de Rango 1",
    "problemStatement": "Sea $A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 3 & 6 & 9 \\end{pmatrix}$. ¿Cuál es la dimensión de su espacio nulo ($\\text{dim}(\\ker A)$)?",
    "options": {
      "A": "$2$",
      "B": "$1$",
      "C": "$0$",
      "D": "$3$"
    },
    "correctAnswer": "A",
    "formalSolution": "Observamos que las filas 2 y 3 son múltiplos escalares de la primera fila: $F_2 = 2F_1$ y $F_3 = 3F_1$. Por lo tanto, el número de filas linealmente independientes es 1, es decir, $\\text{rg}(A) = 1$. Por el Teorema del Rango y la Nulidad: $\\text{rg}(A) + \\text{dim}(\\ker A) = n = 3 \\implies 1 + \\text{dim}(\\ker A) = 3 \\implies \\text{dim}(\\ker A) = 2$.",
    "stepByStepDerivation": [
      "Identificar que F_2 = 2·F_1 y F_3 = 3·F_1.",
      "Rango de A = 1 (una sola fila independiente).",
      "Aplicar rango-nulidad con n = 3: nulidad = 3 - 1 = 2."
    ],
    "distractorRationale": {
      "A": "Correcto. Matriz de rango 1 en R^3 tiene espacio nulo de dimensión 3 - 1 = 2.",
      "B": "1 es el rango de la matriz, no la nulidad.",
      "C": "La nulidad sería 0 solo si la matriz tuviera rango completo 3.",
      "D": "La nulidad sería 3 solo para la matriz nula."
    }
  },
  {
    "id": "ing-30",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Determinante e Inversa de Matrices en Bloques",
    "problemStatement": "Si $M = \\begin{pmatrix} A & 0 \\\\ 0 & B \\end{pmatrix}$ es una matriz diagonal por bloques donde $A$ es $2 \\times 2$ con $\\det(A) = 4$ y $B$ es $3 \\times 3$ con $\\det(B) = -3$, ¿cuál es el determinante $\\det(M)$?",
    "options": {
      "A": "$-12$",
      "B": "$1$",
      "C": "$7$",
      "D": "$-1$"
    },
    "correctAnswer": "A",
    "formalSolution": "Para una matriz triangular o diagonal por bloques, el determinante es el producto de los determinantes de los bloques diagonales principales: $\\det(M) = \\det(A) \\cdot \\det(B)$. Sustituyendo: $\\det(M) = (4)(-3) = -12$.",
    "stepByStepDerivation": [
      "Aplicar la propiedad de determinantes por bloques: det(M) = det(A) · det(B).",
      "Sustituir det(A) = 4 y det(B) = -3.",
      "Calcular producto: 4 · (-3) = -12."
    ],
    "distractorRationale": {
      "A": "Correcto. det(A) * det(B) = 4 * (-3) = -12.",
      "B": "Error al sumar los determinantes (4 + (-3) = 1) en vez de multiplicarlos.",
      "C": "Error al restar con valor absoluto (4 - (-3) = 7).",
      "D": "Error en la combinación aritmética."
    }
  },
  {
    "id": "ing-31",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Coordenadas de un Vector respecto a una Base no Estándar",
    "problemStatement": "Dada la base $B = \\{ \\vec{b}_1 = (1, 1), \\vec{b}_2 = (1, -1) \\}$ de $\\mathbb{R}^2$, ¿cuáles son las coordenadas del vector $\\vec{v} = (4, 2)$ respecto a la base $B$ ($[\\vec{v}]_B = (c_1, c_2)$)?",
    "options": {
      "A": "$[\\vec{v}]_B = (3, 1)$",
      "B": "$[\\vec{v}]_B = (2, 2)$",
      "C": "$[\\vec{v}]_B = (1, 3)$",
      "D": "$[\\vec{v}]_B = (4, -2)$"
    },
    "correctAnswer": "A",
    "formalSolution": "Buscamos los escalares $c_1, c_2$ tales que $c_1\\vec{b}_1 + c_2\\vec{b}_2 = \\vec{v}$: $c_1(1, 1) + c_2(1, -1) = (4, 2) \\implies \\begin{cases} c_1 + c_2 = 4 \\\\ c_1 - c_2 = 2 \\end{cases}$. Sumando ambas ecuaciones: $2c_1 = 6 \\implies c_1 = 3$. Sustituyendo: $3 + c_2 = 4 \\implies c_2 = 1$. Por lo tanto, $[\\vec{v}]_B = (3, 1)$. Verificación: $3(1, 1) + 1(1, -1) = (3+1, 3-1) = (4, 2)$.",
    "stepByStepDerivation": [
      "Plantear la ecuación vectorial c_1·(1, 1) + c_2·(1, -1) = (4, 2).",
      "Sistema: c_1 + c_2 = 4 y c_1 - c_2 = 2.",
      "Sumar ecuaciones: 2·c_1 = 6 ==> c_1 = 3.",
      "Restar ecuaciones: 2·c_2 = 2 ==> c_2 = 1.",
      "Coordenadas: (3, 1)."
    ],
    "distractorRationale": {
      "A": "Correcto. 3*(1, 1) + 1*(1, -1) = (4, 2).",
      "B": "2*(1, 1) + 2*(1, -1) = (4, 0) ≠ (4, 2).",
      "C": "1*(1, 1) + 3*(1, -1) = (4, -2) ≠ (4, 2).",
      "D": "Confusión con la inversión directa de componentes."
    }
  },
  {
    "id": "ing-32",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Complemento Ortogonal de un Subespacio en R3",
    "problemStatement": "Sea $W$ el plano en $\\mathbb{R}^3$ definido por la ecuación homogénea $x - 2y + 2z = 0$. ¿Cuál es una base y la dimensión del complemento ortogonal $W^\\perp$?",
    "options": {
      "A": "Base $\\{(1, -2, 2)\\}$ y $\\text{dim}(W^\\perp) = 1$.",
      "B": "Base $\\{(2, 1, 0), (-2, 0, 1)\\}$ y $\\text{dim}(W^\\perp) = 2$.",
      "C": "Base $\\{(1, 1, 1)\\}$ y $\\text{dim}(W^\\perp) = 1$.",
      "D": "Base $\\{(1, 0, 0), (0, 1, 0)\\}$ y $\\text{dim}(W^\\perp) = 2$."
    },
    "correctAnswer": "A",
    "formalSolution": "El plano $W$ está compuesto por todos los vectores $(x, y, z)$ ortogonales al vector normal $\\vec{n} = (1, -2, 2)$, ya que la ecuación $x - 2y + 2z = 0$ equivale al producto escalar $(1, -2, 2) \\cdot (x, y, z) = 0$. Por definición, el complemento ortogonal $W^\\perp$ es la recta generada exclusivamente por el vector normal: $W^\\perp = \\text{span}\\{(1, -2, 2)\\}$, con dimensión $\\text{dim}(W^\\perp) = 3 - \\text{dim}(W) = 3 - 2 = 1$.",
    "stepByStepDerivation": [
      "Identificar la ecuación del plano como producto punto: (1, -2, 2) · (x, y, z) = 0.",
      "El vector normal n = (1, -2, 2) es perpendicular a todo vector del plano W.",
      "El subespacio ortogonal W^⊥ es la recta generada por n.",
      "dim(W^⊥) = 3 - dim(W) = 3 - 2 = 1."
    ],
    "distractorRationale": {
      "A": "Correcto. El vector de coeficientes normales define la base de W^⊥ con dimensión 1.",
      "B": "Esa es una base del propio plano W (dimensión 2), no de su complemento ortogonal.",
      "C": "El vector (1, 1, 1) no es normal al plano.",
      "D": "Base arbitraria no ortogonal al subespacio W."
    }
  },
  {
    "id": "ing-33",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Distancia Euclidiana y Norma en R4",
    "problemStatement": "Calcule la distancia euclidiana exacta en $\\mathbb{R}^4$ entre los puntos $P = (1, 2, 0, -1)$ y $Q = (2, 0, 2, 1)$.",
    "options": {
      "A": "$\\sqrt{13}$",
      "B": "$\\sqrt{11}$",
      "C": "$5$",
      "D": "$\\sqrt{7}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La distancia euclidiana es la norma del vector diferencia $\\vec{d} = Q - P$: $Q - P = (2-1, 0-2, 2-0, 1-(-1)) = (1, -2, 2, 2)$. La norma al cuadrado es $\\|\\vec{d}\\|^2 = 1^2 + (-2)^2 + 2^2 + 2^2 = 1 + 4 + 4 + 4 = 13$. Por lo tanto, la distancia es $d(P, Q) = \\sqrt{13}$.",
    "stepByStepDerivation": [
      "Calcular diferencia coordenada a coordenada: (2-1, 0-2, 2-0, 1-(-1)) = (1, -2, 2, 2).",
      "Elevar cada diferencia al cuadrado: 1^2 + (-2)^2 + 2^2 + 2^2 = 1 + 4 + 4 + 4 = 13.",
      "Extraer raíz cuadrada: d = sqrt(13)."
    ],
    "distractorRationale": {
      "A": "Correcto. sqrt(1 + 4 + 4 + 4) = sqrt(13).",
      "B": "Error al restar 1 - (-1) obteniendo 0 en vez de 2.",
      "C": "Error aritmético al redondear o sumar de forma errónea.",
      "D": "Omisión de las componentes espaciales intermedias."
    }
  },
  {
    "id": "ing-34",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Teorema Espectral para Matrices Simétricas Reales",
    "problemStatement": "¿Qué garantiza el Teorema Espectral para cualquier matriz simétrica real $A$ ($A = A^T$)?",
    "options": {
      "A": "Todos sus autovalores son números reales y existe una base ortonormal de autovectores que la diagonaliza mediante una matriz ortogonal $Q$ ($A = Q D Q^T$).",
      "B": "La matriz $A$ es siempre invertible sin importar si tiene autovalores nulos.",
      "C": "Su determinante es siempre estrictamente mayor que cero.",
      "D": "Todos sus autovalores son estrictamente positivos."
    },
    "correctAnswer": "A",
    "formalSolution": "El Teorema Espectral establece que toda matriz simétrica real $A \\in \\mathbb{R}^{n \\times n}$ posee autovalores puramente reales y es ortogonalmente diagonalizable, lo que significa que existe una matriz ortogonal $Q$ ($Q^T = Q^{-1}$) tal que $A = Q D Q^T$, donde $D$ contiene los autovalores reales.",
    "stepByStepDerivation": [
      "Propiedad 1: Los autovalores de una matriz simétrica real son siempre reales (no complejos).",
      "Propiedad 2: Autovectores asociados a autovalores distintos son mutuamente ortogonales.",
      "Propiedad 3: Siempre existe base ortonormal completa de autovectores en R^n.",
      "Concluir diagonalización ortogonal A = Q·D·Q^T."
    ],
    "distractorRationale": {
      "A": "Correcto. Autovalores reales y diagonalización ortogonal garantizada.",
      "B": "Una matriz simétrica puede tener autovalor 0, en cuyo caso det(A) = 0 y no es invertible.",
      "C": "El determinante puede ser negativo o cero si tiene autovalores negativos o nulos.",
      "D": "Eso solo aplica a matrices simétricas definidas positivas, no a cualquier matriz simétrica."
    }
  },
  {
    "id": "ing-35",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Inversa del Producto de Tres Matrices",
    "problemStatement": "Si $A$, $B$ y $C$ son matrices invertibles del mismo orden, ¿cuál es la expresión correcta para $(A B C)^{-1}$?",
    "options": {
      "A": "$C^{-1} B^{-1} A^{-1}$",
      "B": "$A^{-1} B^{-1} C^{-1}$",
      "C": "$C B A$",
      "D": "$(A B C)^T$"
    },
    "correctAnswer": "A",
    "formalSolution": "La propiedad de inversión del producto invierte el orden de los factores (propiedad de los calcetines y zapatos): $(A B C)(C^{-1} B^{-1} A^{-1}) = A B (C C^{-1}) B^{-1} A^{-1} = A (B I B^{-1}) A^{-1} = A I A^{-1} = I$. Por lo tanto, $(A B C)^{-1} = C^{-1} B^{-1} A^{-1}$.",
    "stepByStepDerivation": [
      "Multiplicar ABC por el candidato C^(-1) B^(-1) A^(-1).",
      "C · C^(-1) = I.",
      "B · I · B^(-1) = B · B^(-1) = I.",
      "A · I · A^(-1) = A · A^(-1) = I.",
      "El producto da la identidad I, confirmando que la inversa invierte el orden."
    ],
    "distractorRationale": {
      "A": "Correcto. La inversa del producto invierte rigurosamente el orden de los factores.",
      "B": "Error común: mantener el orden original, lo cual no produce la identidad por no conmutatividad.",
      "C": "No invierte las matrices individuales.",
      "D": "Solo sería cierto si el producto ABC fuese una matriz ortogonal."
    }
  },
  {
    "id": "ing-36",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Transpuesta del Producto Matricial",
    "problemStatement": "Para dos matrices cualesquiera $A$ y $B$ cuyo producto $A B$ está definido, ¿cuál es la identidad de la matriz transpuesta $(A B)^T$?",
    "options": {
      "A": "$(A B)^T = B^T A^T$",
      "B": "$(A B)^T = A^T B^T$",
      "C": "$(A B)^T = A^T + B^T$",
      "D": "$(A B)^T = -A B$"
    },
    "correctAnswer": "A",
    "formalSolution": "Por la definición del producto matricial, la entrada $(i, j)$ de $A B$ es $\\sum_k A_{ik} B_{kj}$. Al trasponer, la entrada $(i, j)$ de $(A B)^T$ es la entrada $(j, i)$ de $A B$: $\\sum_k A_{jk} B_{ki} = \\sum_k B_{ki} A_{jk} = \\sum_k (B^T)_{ik} (A^T)_{kj}$, que corresponde exactamente a la entrada $(i, j)$ de $B^T A^T$.",
    "stepByStepDerivation": [
      "Definir componente (AB)_ji = suma_k A_jk · B_ki.",
      "Reescribir con transpuestas: suma_k (B^T)_ik · (A^T)_kj.",
      "Esto define la multiplicación matricial B^T · A^T.",
      "Concluir (AB)^T = B^T · A^T."
    ],
    "distractorRationale": {
      "A": "Correcto. La transposición invierte el orden multiplicativo: (AB)^T = B^T A^T.",
      "B": "Error común al mantener el orden, lo que puede resultar incompatible en dimensiones.",
      "C": "Confusión entre suma y producto de matrices.",
      "D": "Confusión con la definición de matriz antisimétrica."
    }
  },
  {
    "id": "ing-37",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Ecuaciones Normales en Mínimos Cuadrados",
    "problemStatement": "Dado un sistema sobredeterminado e inconsistente $A\\vec{x} = \\vec{b}$, ¿cuál es el sistema matricial que proporciona la solución de mínimos cuadrados $\\hat{x}$ que minimiza la norma residual $\\|\\vec{b} - A\\vec{x}\\|$?",
    "options": {
      "A": "$A^T A \\hat{x} = A^T \\vec{b}$",
      "B": "$A A^T \\hat{x} = \\vec{b}$",
      "C": "$A \\hat{x} = A^T \\vec{b}$",
      "D": "$\\hat{x} = (A + A^T) \\vec{b}$"
    },
    "correctAnswer": "A",
    "formalSolution": "El vector residual $\\vec{r} = \\vec{b} - A\\hat{x}$ debe ser ortogonal a todo el espacio columna de $A$ ($\\{A\\vec{v} : \\vec{v} \\in \\mathbb{R}^n\\}$). Esto exige que $\\langle A\\vec{v}, \\vec{b} - A\\hat{x} \\rangle = 0 \\implies \\vec{v}^T A^T (\\vec{b} - A\\hat{x}) = 0$ para todo $\\vec{v}$. Por lo tanto, $A^T (\\vec{b} - A\\hat{x}) = \\vec{0} \\implies A^T A \\hat{x} = A^T \\vec{b}$, denominadas Ecuaciones Normales de Gauss.",
    "stepByStepDerivation": [
      "El residuo r = b - A·x debe ser ortogonal al espacio columna Col(A).",
      "Condición de ortogonalidad: A^T · (b - A·x) = 0.",
      "Distribuir: A^T · b - A^T · A · x = 0.",
      "Despejar las ecuaciones normales: A^T · A · x = A^T · b."
    ],
    "distractorRationale": {
      "A": "Correcto. Sistema de ecuaciones normales A^T A x = A^T b.",
      "B": "A A^T tiene dimensiones incompatibles con el vector x de incógnitas.",
      "C": "Falta multiplicar A a la izquierda por A^T.",
      "D": "Fórmula inventada sin fundamento variacional ni geométrico."
    }
  },
  {
    "id": "ing-38",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Determinante de una Matriz Triangular",
    "problemStatement": "Sea $T$ una matriz triangular superior de orden $n \\times n$. ¿Cómo se calcula su determinante de forma directa?",
    "options": {
      "A": "Multiplicando todos los elementos de su diagonal principal: $\\det(T) = \\prod_{i=1}^n t_{ii}$.",
      "B": "Sumando todos los elementos de su diagonal principal.",
      "C": "Calculando el determinante de su submatriz central $2 \\times 2$.",
      "D": "El determinante siempre es igual a 1."
    },
    "correctAnswer": "A",
    "formalSolution": "Por inducción y expansión reiterada de Laplace a lo largo de la primera columna (donde todas las entradas bajo la diagonal son cero), cada paso extrae el elemento diagonal $t_{ii}$ multiplicado por el menor triangular inferior restante, lo que resulta en el producto de todas las entradas diagonales: $\\det(T) = t_{11} \\cdot t_{22} \\cdots t_{nn}$.",
    "stepByStepDerivation": [
      "Expandir por la primera columna: det(T) = t_11 · det(T_11).",
      "El menor T_11 es también triangular superior.",
      "Repetir recursivamente para las n filas.",
      "Resultado: producto de elementos diagonales t_11 · t_22 · ... · t_nn."
    ],
    "distractorRationale": {
      "A": "Correcto. El determinante de cualquier matriz triangular es el producto de su diagonal.",
      "B": "La suma de la diagonal es la traza tr(T), no el determinante.",
      "C": "No considera la totalidad de las entradas de la matriz.",
      "D": "Solo es 1 si todas las entradas diagonales son iguales a 1."
    }
  },
  {
    "id": "ing-39",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Propiedades de la Traza de Matrices",
    "problemStatement": "Sean $A$ y $B$ dos matrices cuadradas de orden $n \\times n$. ¿Cuál de las siguientes propiedades es FALSA respecto a la traza?",
    "options": {
      "A": "$\\text{tr}(A B) = \\text{tr}(A) \\cdot \\text{tr}(B)$",
      "B": "$\\text{tr}(A + B) = \\text{tr}(A) + \\text{tr}(B)$",
      "C": "$\\text{tr}(k A) = k \\cdot \\text{tr}(A)$ para cualquier escalar $k$",
      "D": "$\\text{tr}(A B) = \\text{tr}(B A)$ (propiedad cíclica)"
    },
    "correctAnswer": "A",
    "formalSolution": "La traza es un funcional lineal ($\\,\\text{tr}(A+B) = \\text{tr}(A)+\\text{tr}(B)\\,$, $\\,\\text{tr}(kA)=k\\text{tr}(A)\\,$, y $\\,\\text{tr}(AB)=\\text{tr}(BA)\\,$, pero NO es multiplicativa: en general $\\text{tr}(AB) \\neq \\text{tr}(A)\\text{tr}(B)$. Por ejemplo, para $A = B = I_2$, $\\text{tr}(I_2 \\cdot I_2) = \\text{tr}(I_2) = 2$, mientras que $\\text{tr}(I_2) \\cdot \\text{tr}(I_2) = 2 \\cdot 2 = 4 \\neq 2$.",
    "stepByStepDerivation": [
      "Evaluar linealidad: tr(A+B) = tr(A) + tr(B) es verdadera.",
      "Evaluar homogeneidad: tr(kA) = k·tr(A) es verdadera.",
      "Evaluar propiedad cíclica: tr(AB) = tr(BA) es verdadera.",
      "Evaluar multiplicatividad: tr(AB) = tr(A)·tr(B) es FALSA."
    ],
    "distractorRationale": {
      "A": "Correcto (es la afirmación falsa). La traza jamás es distributiva respecto al producto matricial.",
      "B": "Verdadera, la traza es un operador estrictamente aditivo.",
      "C": "Verdadera, la traza es homogénea respecto a escalares.",
      "D": "Verdadera, es la propiedad conmutativa o cíclica fundamental de la traza."
    }
  },
  {
    "id": "ing-40",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Bloque de Jordan y Matrices Defectuosas",
    "problemStatement": "Considere el bloque de Jordan elemental $J = \\begin{pmatrix} 4 & 1 \\\\ 0 & 4 \\end{pmatrix}$. ¿Cuál es la forma canónica de Jordan de $J$ y por qué se clasifica como matriz defectuosa?",
    "options": {
      "A": "Es defectuosa porque tiene un solo vector propio linealmente independiente para un autovalor de multiplicidad algebraica 2.",
      "B": "Es defectuosa porque su determinante es cero.",
      "C": "Es defectuosa porque sus autovalores no son reales.",
      "D": "No es defectuosa porque se puede diagonalizar mediante una rotación de 45°."
    },
    "correctAnswer": "A",
    "formalSolution": "Una matriz se define como defectuosa si no posee una base completa de $n$ autovectores linealmente independientes. Para $J$, el polinomio característico es $(\\lambda - 4)^2 = 0$, con multiplicidad algebraica 2. El espacio propio es $\\ker(J - 4I) = \\ker\\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} = \\text{span}\\{(1, 0)^T\\}$, que tiene dimensión 1 (multiplicidad geométrica 1). Como $m_g < m_a$, la matriz carece de suficientes autovectores y es estrictamente defectuosa.",
    "stepByStepDerivation": [
      "Multiplicidad algebraica de λ = 4 es ma = 2.",
      "Calcular (J - 4I) = [[0, 1], [0, 0]].",
      "dim(ker(J - 4I)) = 2 - rango = 2 - 1 = 1.",
      "Multiplicidad geométrica mg = 1 < ma = 2.",
      "Definición: matriz con mg < ma es defectuosa (no diagonalizable)."
    ],
    "distractorRationale": {
      "A": "Correcto. La deficiencia de autovectores (mg = 1 vs ma = 2) define a una matriz defectuosa.",
      "B": "det(J) = 4*4 - 0 = 16 ≠ 0, la matriz es invertible.",
      "C": "El autovalor λ = 4 es real.",
      "D": "Ninguna matriz de cambio de base puede diagonalizar un bloque de Jordan de tamaño 2x2."
    }
  },
  {
    "id": "ing-41",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Matrices Hermitianas y Autovalores Complejos",
    "problemStatement": "Sea $A \\in \\mathbb{C}^{n \\times n}$ una matriz hermitiana ($A^* = \\overline{A^T} = A$). ¿Qué propiedad fundamental tienen sus autovalores?",
    "options": {
      "A": "Todos sus autovalores son rigurosamente números reales.",
      "B": "Todos sus autovalores son números imaginarios puros.",
      "C": "El determinante de $A$ siempre es un número complejo con parte imaginaria no nula.",
      "D": "Todos sus autovalores son iguales a 1."
    },
    "correctAnswer": "A",
    "formalSolution": "Sea $\\lambda$ un autovalor con autovector unitario $\\vec{v}$ ($\\|\\vec{v}\\| = 1$): $A\\vec{v} = \\lambda\\vec{v}$. Multiplicando a la izquierda por $\\vec{v}^*$: $\\vec{v}^* A \\vec{v} = \\lambda (\\vec{v}^* \\vec{v}) = \\lambda$. Tomando el conjugado transpuesto: $(\\vec{v}^* A \\vec{v})^* = \\vec{v}^* A^* \\vec{v} = \\vec{v}^* A \\vec{v} = \\lambda^* = \\bar{\\lambda}$. Como $\\lambda = \\bar{\\lambda}$, el autovalor $\\lambda$ es obligatoriamente un número real.",
    "stepByStepDerivation": [
      "v^* A v = λ · (v^* v) = λ · ||v||^2.",
      "Aplicar conjugada transpuesta a la expresión escalar: (v^* A v)^* = v^* A^* v.",
      "Usar A^* = A: v^* A v = λ_conjugado · ||v||^2.",
      "Igualar: λ = λ_conjugado ==> λ ∈ R (todos los autovalores son reales)."
    ],
    "distractorRationale": {
      "A": "Correcto. Teorema fundamental: los autovalores de matrices hermitianas son siempre reales.",
      "B": "Los autovalores imaginarios puros corresponden a matrices antihermitianas (A^* = -A).",
      "C": "El determinante es el producto de autovalores reales, por tanto es siempre real.",
      "D": "Solo es 1 para la matriz identidad."
    }
  },
  {
    "id": "ing-42",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Desigualdad de Sylvester para el Rango del Producto",
    "problemStatement": "Si $A$ es una matriz de $4 \\times 3$ con $\\text{rg}(A) = 3$ y $B$ es de $3 \\times 5$ con $\\text{rg}(B) = 2$, ¿cuál es el rango máximo posible del producto $A B$?",
    "options": {
      "A": "$2$",
      "B": "$3$",
      "C": "$4$",
      "D": "$5$"
    },
    "correctAnswer": "A",
    "formalSolution": "Por la propiedad básica del rango del producto de dos matrices: $\\text{rg}(A B) \\le \\min(\\text{rg}(A), \\text{rg}(B))$. En este caso, $\\text{rg}(A B) \\le \\min(3, 2) = 2$. Por lo tanto, el rango máximo posible del producto es 2.",
    "stepByStepDerivation": [
      "Aplicar la cota superior del rango de un producto: rg(AB) ≤ min(rg(A), rg(B)).",
      "Identificar rg(A) = 3 y rg(B) = 2.",
      "Calcular min(3, 2) = 2.",
      "El rango no puede superar 2."
    ],
    "distractorRationale": {
      "A": "Correcto. rg(AB) está acotado superiormente por min(3, 2) = 2.",
      "B": "El producto no puede tener rango 3 porque el espacio columna de B solo tiene dimensión 2.",
      "C": "El producto AB tiene tamaño 4x5 pero su rango no puede superar el de los factores.",
      "D": "5 excede tanto el número de filas intermedias como el rango de los factores."
    }
  },
  {
    "id": "ing-43",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Sistemas Homogéneos con más Incógnitas que Ecuaciones",
    "problemStatement": "Un sistema lineal homogéneo $A\\vec{x} = \\vec{0}$ tiene $4$ ecuaciones y $7$ incógnitas. ¿Qué se puede afirmar con certeza sobre sus soluciones?",
    "options": {
      "A": "Tiene infinitas soluciones no triviales, con al menos $3$ variables libres.",
      "B": "Tiene únicamente la solución trivial $\\vec{x} = \\vec{0}$.",
      "C": "El sistema es incompatible y no tiene ninguna solución.",
      "D": "Tiene exactamente 4 soluciones distintas."
    },
    "correctAnswer": "A",
    "formalSolution": "La matriz $A$ tiene tamaño $4 \\times 7$. El rango máximo posible es $\\text{rg}(A) \\le \\min(4, 7) = 4$. Por el Teorema del Rango y la Nulidad: $\\text{nulidad}(A) = n - \\text{rg}(A) = 7 - \\text{rg}(A) \\ge 7 - 4 = 3$. Como la nulidad es al menos 3 ($> 0$), el espacio nulo contiene vectores no nulos, garantizando infinitas soluciones con al menos 3 variables libres.",
    "stepByStepDerivation": [
      "Matriz A de tamaño 4x7 ==> n = 7 incógnitas, m = 4 ecuaciones.",
      "Rango máximo rg(A) ≤ 4.",
      "Nulidad = 7 - rg(A) ≥ 7 - 4 = 3.",
      "Como nulidad ≥ 3 > 0, existen infinitas soluciones no triviales."
    ],
    "distractorRationale": {
      "A": "Correcto. Más incógnitas que ecuaciones en un sistema homogéneo garantiza infinitas soluciones.",
      "B": "Solo tendría solución trivial si el rango fuese igual al número de incógnitas (7), imposible con 4 filas.",
      "C": "Un sistema homogéneo jamás es incompatible (siempre admite al menos x = 0).",
      "D": "En R los sistemas lineales tienen 0, 1 o infinitas soluciones, nunca un número finito mayor a 1."
    }
  },
  {
    "id": "ing-44",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Desigualdad de Cauchy-Schwarz y Condición de Igualdad",
    "problemStatement": "Para dos vectores $\\vec{u}$ y $\\vec{v}$ en un espacio vectorial euclidiano con producto interno $\\langle \\vec{u}, \\vec{v} \\rangle$, la Desigualdad de Cauchy-Schwarz establece que $|\\langle \\vec{u}, \\vec{v} \\rangle| \\le \\|\\vec{u}\\| \\|\\vec{v}\\|$. ¿Bajo qué condición exacta se cumple la igualdad estricta $|\\langle \\vec{u}, \\vec{v} \\rangle| = \\|\\vec{u}\\| \\|\\vec{v}\\|$?",
    "options": {
      "A": "Si y solo si $\\vec{u}$ y $\\vec{v}$ son linealmente dependientes (colineales).",
      "B": "Si y solo si $\\vec{u}$ y $\\vec{v}$ son perpendiculares (ortogonales).",
      "C": "Únicamente cuando ambos vectores son vectores unitarios.",
      "D": "Siempre que ambos vectores tengan componentes positivas."
    },
    "correctAnswer": "A",
    "formalSolution": "El producto escalar satisface $\\langle \\vec{u}, \\vec{v} \\rangle = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos\\theta$. Por lo tanto, $|\\langle \\vec{u}, \\vec{v} \\rangle| = \\|\\vec{u}\\| \\|\\vec{v}\\| |\\cos\\theta|$. La igualdad estricta ocurre si y solo si $|\\cos\\theta| = 1$, lo que significa $\\theta = 0$ o $\\theta = \\pi$. Esto equivale a que los vectores son paralelos, es decir, uno es múltiplo escalar del otro (linealmente dependientes: $\\vec{u} = c\\vec{v}$).",
    "stepByStepDerivation": [
      "Relacionar con el ángulo theta: |<u, v>| = ||u|| ||v|| |cos(theta)|.",
      "Igualdad requiere |cos(theta)| = 1.",
      "|cos(theta)| = 1 ocurre en theta = 0 o theta = pi.",
      "theta = 0 o pi significa que u y v son colineales (linealmente dependientes)."
    ],
    "distractorRationale": {
      "A": "Correcto. La igualdad de Cauchy-Schwarz se alcanza únicamente con dependencia lineal.",
      "B": "Si son ortogonales, el producto interno es 0, que es el mínimo valor posible de |<u, v>|.",
      "C": "Dos vectores no unitarios proporcionales también cumplen la igualdad.",
      "D": "Tener componentes positivas no garantiza colinealidad."
    }
  },
  {
    "id": "ing-45",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Desigualdad Triangular para Normas Vectoriales",
    "problemStatement": "En cualquier espacio vectorial normado, ¿cuál es el enunciado formal de la Desigualdad Triangular para dos vectores $\\vec{u}$ y $\\vec{v}$?",
    "options": {
      "A": "$\\|\\vec{u} + \\vec{v}\\| \\le \\|\\vec{u}\\| + \\|\\vec{v}\\|$",
      "B": "$\\|\\vec{u} + \\vec{v}\\| = \\|\\vec{u}\\| + \\|\\vec{v}\\|$",
      "C": "$\\|\\vec{u} + \\vec{v}\\| \\ge \\|\\vec{u}\\| + \\|\\vec{v}\\|$",
      "D": "$\\|\\vec{u} + \\vec{v}\\|^2 = \\|\\vec{u}\\|^2 + \\|\\vec{v}\\|^2$"
    },
    "correctAnswer": "A",
    "formalSolution": "La desigualdad triangular es uno de los axiomas fundamentales que definen una norma vectorial: $\\|\\vec{u} + \\vec{v}\\| \\le \\|\\vec{u}\\| + \\|\\vec{v}\\|$. Geométricamente expresa que la longitud de un lado de un triángulo nunca supera la suma de las longitudes de los otros dos lados.",
    "stepByStepDerivation": [
      "Expandir ||u + v||^2 = ||u||^2 + 2<u, v> + ||v||^2.",
      "Por Cauchy-Schwarz, <u, v> ≤ ||u|| ||v||.",
      "Luego ||u + v||^2 ≤ ||u||^2 + 2||u|| ||v|| + ||v||^2 = (||u|| + ||v||)^2.",
      "Extrayendo raíz cuadrada: ||u + v|| ≤ ||u|| + ||v||."
    ],
    "distractorRationale": {
      "A": "Correcto. La norma de la suma está acotada superiormente por la suma de las normas.",
      "B": "La igualdad solo se da si los vectores son colineales y apuntan en la misma dirección.",
      "C": "Inversión incorrecta del sentido de la desigualdad.",
      "D": "Ese es el Teorema de Pitágoras, válido únicamente si los vectores son ortogonales."
    }
  },
  {
    "id": "ing-46",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Criterio de Incompatibilidad en la Regla de Cramer 3x3",
    "problemStatement": "Al resolver un sistema de 3 ecuaciones con 3 incógnitas mediante la Regla de Cramer, se encuentra que el determinante del sistema es $\\Delta = 0$, mientras que los determinantes de las incógnitas son $\\Delta_x = 0$, $\\Delta_y = 5$, $\\Delta_z = -2$. ¿Cuál es la conclusión inequívoca?",
    "options": {
      "A": "El sistema es Incompatible (no tiene solución).",
      "B": "El sistema es Compatible Indeterminado (infinitas soluciones).",
      "C": "El sistema tiene solución única con $x = 0$.",
      "D": "El sistema es homogéneo."
    },
    "correctAnswer": "A",
    "formalSolution": "Por la Regla de Cramer, si el determinante principal es cero ($\\Delta = 0$) y al menos uno de los determinantes modificados es distinto de cero (en este caso $\\Delta_y = 5 \\neq 0$ y $\\Delta_z = -2 \\neq 0$), el sistema conduce a relaciones imposibles del tipo $0 \\cdot y = 5$, lo cual es absurdo. Por tanto, el sistema es estrictamente incompatible.",
    "stepByStepDerivation": [
      "Δ = 0 implica que la matriz de coeficientes no es invertible.",
      "Δ_y = 5 ≠ 0 implica que al resolver por Cramer se tendría 0 · y = 5, lo cual es imposible.",
      "Concluir que el sistema carece de solución (incompatible)."
    ],
    "distractorRationale": {
      "A": "Correcto. Δ = 0 con algún Δ_i ≠ 0 determina incompatibilidad inmediata.",
      "B": "Solo podría ser compatible indeterminado si TODOS los Δ_i fuesen cero (y aún así debe verificarse por Gauss).",
      "C": "Con Δ = 0 no puede existir solución única.",
      "D": "En un sistema homogéneo todos los términos independientes son cero y los Δ_i serían todos cero."
    }
  },
  {
    "id": "ing-47",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Matriz de Proyección Ortogonal sobre un Vector Unitario",
    "problemStatement": "Dado un vector unitario $\\hat{u} \\in \\mathbb{R}^n$ ($\\|\\hat{u}\\| = 1$), la matriz de proyección ortogonal sobre la recta generada por $\\hat{u}$ es $P = \\hat{u} \\hat{u}^T$. ¿Cuáles son el rango y la traza de $P$?",
    "options": {
      "A": "$\\text{rg}(P) = 1 \\quad \\text{y} \\quad \\text{tr}(P) = 1$",
      "B": "$\\text{rg}(P) = n \\quad \\text{y} \\quad \\text{tr}(P) = n$",
      "C": "$\\text{rg}(P) = 1 \\quad \\text{y} \\quad \\text{tr}(P) = 0$",
      "D": "$\\text{rg}(P) = 0 \\quad \\text{y} \\quad \\text{tr}(P) = 1$"
    },
    "correctAnswer": "A",
    "formalSolution": "La matriz $P = \\hat{u} \\hat{u}^T$ proyecta cualquier vector sobre el subespacio unidimensional generado por $\\hat{u}$, por lo que su imagen tiene dimensión 1 y $\\text{rg}(P) = 1$. Utilizando la propiedad cíclica de la traza: $\\text{tr}(P) = \\text{tr}(\\hat{u} \\hat{u}^T) = \\text{tr}(\\hat{u}^T \\hat{u}) = \\text{tr}(\\|\\hat{u}\\|^2) = 1$, ya que $\\hat{u}$ es un vector unitario.",
    "stepByStepDerivation": [
      "La imagen de P es span{u}, subespacio de dimensión 1 ==> rango = 1.",
      "Aplicar propiedad cíclica de la traza: tr(u · u^T) = tr(u^T · u).",
      "u^T · u es el escalar ||u||^2 = 1.",
      "Por lo tanto, tr(P) = 1."
    ],
    "distractorRationale": {
      "A": "Correcto. La proyección sobre una recta tiene rango 1 y traza 1.",
      "B": "Rango n correspondería a la proyección sobre todo R^n (la identidad I).",
      "C": "La traza de una matriz de proyección siempre es igual a su rango.",
      "D": "Rango 0 correspondería únicamente a la matriz nula."
    }
  },
  {
    "id": "ing-48",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Invarianza del Determinante bajo Operaciones Elementales de Fila",
    "problemStatement": "¿Qué efecto tiene sobre el determinante de una matriz $A$ la operación elemental de fila consistente en sumar a una fila un múltiplo escalar de otra fila ($F_i \\to F_i + c F_j$ con $i \\neq j$)?",
    "options": {
      "A": "No altera el determinante; el valor de $\\det(A)$ permanece exactamente igual.",
      "B": "Multiplica el determinante por el escalar $c$.",
      "C": "Cambia el signo del determinante.",
      "D": "El determinante se convierte en cero."
    },
    "correctAnswer": "A",
    "formalSolution": "La operación elemental $F_i \\to F_i + c F_j$ equivale a multiplicar $A$ por la izquierda por una matriz elemental de corte $E_{ij}(c)$, cuyo determinante es 1 (matriz triangular con unos en la diagonal). Por la multiplicatividad del determinante: $\\det(E_{ij}(c) A) = \\det(E_{ij}(c)) \\cdot \\det(A) = 1 \\cdot \\det(A) = \\det(A)$.",
    "stepByStepDerivation": [
      "Representar la operación elemental mediante matriz E.",
      "E es triangular con diagonal compuesta por unos ==> det(E) = 1.",
      "det(E · A) = det(E) · det(A) = 1 · det(A) = det(A).",
      "El determinante permanece invariable."
    ],
    "distractorRationale": {
      "A": "Correcto. Esta operación preserva el volumen orientado y el valor del determinante.",
      "B": "Multiplicar por c ocurre cuando se escala una fila por c (F_i -> c*F_i), no al sumar un múltiplo.",
      "C": "Cambiar de signo ocurre al permutar dos filas entre sí (F_i <-> F_j).",
      "D": "Solo sería cero si las filas fuesen idénticas o proporcionales previamente."
    }
  },
  {
    "id": "ing-49",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Efecto del Intercambio de Filas sobre el Determinante",
    "problemStatement": "Si en una matriz $A$ de orden $n \\times n$ con $\\det(A) = 8$ se intercambian dos de sus filas, ¿cuál es el nuevo determinante?",
    "options": {
      "A": "$-8$",
      "B": "$8$",
      "C": "$\\frac{1}{8}$",
      "D": "$0$"
    },
    "correctAnswer": "A",
    "formalSolution": "El determinante es una forma multilineal alternada. El intercambio de dos filas equivale a multiplicar por una matriz de permutación elemental $P$, cuyo determinante es $\\det(P) = -1$. Por tanto, el nuevo determinante es $\\det(P A) = \\det(P) \\cdot \\det(A) = -1 \\cdot 8 = -8$.",
    "stepByStepDerivation": [
      "La propiedad de alternancia establece que permutar dos filas invierte el signo del determinante.",
      "Nuevo determinante = -det(A) = -8."
    ],
    "distractorRationale": {
      "A": "Correcto. Toda transposición de filas multiplica el determinante por -1.",
      "B": "Error al asumir que la permutación no altera el determinante.",
      "C": "Confusión con la inversión matricial det(A^(-1)) = 1/det(A).",
      "D": "El determinante no se anula salvo que las filas intercambiadas fuesen idénticas."
    }
  },
  {
    "id": "ing-50",
    "category": "algebra-lineal",
    "categoryLabel": "Álgebra Lineal",
    "topic": "Rango de la Matriz Adjunta en Función del Rango de A",
    "problemStatement": "Sea $A$ una matriz cuadrada de orden $n \\times n$ con $n \\ge 3$. Si el rango de $A$ es exactamente $\\text{rg}(A) = n - 1$, ¿cuál es el rango de su matriz adjunta $\\text{rg}(\\text{adj}(A))$?",
    "options": {
      "A": "$\\text{rg}(\\text{adj}(A)) = 1$",
      "B": "$\\text{rg}(\\text{adj}(A)) = n - 1$",
      "C": "$\\text{rg}(\\text{adj}(A)) = 0$",
      "D": "$\\text{rg}(\\text{adj}(A)) = n$"
    },
    "correctAnswer": "A",
    "formalSolution": "Como $\\text{rg}(A) = n - 1$, el determinante es $\\det(A) = 0$. Por la relación fundamental $A \\cdot \\text{adj}(A) = \\det(A) I = 0$, cada columna de $\\text{adj}(A)$ pertenece al espacio nulo $\\ker(A)$. Por el Teorema del Rango y la Nulidad, $\\text{dim}(\\ker A) = n - \\text{rg}(A) = n - (n - 1) = 1$. Así, $\\text{rg}(\\text{adj}(A)) \\le 1$. Además, al ser $\\text{rg}(A) = n - 1$, existe al menos un menor de orden $n - 1$ no nulo, lo que implica que $\\text{adj}(A) \\neq 0$. Al ser no nula y tener rango $\\le 1$, concluimos rigurosamente que $\\text{rg}(\\text{adj}(A)) = 1$.",
    "stepByStepDerivation": [
      "rg(A) = n - 1 implica det(A) = 0.",
      "A · adj(A) = 0 ==> columnas de adj(A) están en ker(A).",
      "dim(ker(A)) = n - (n - 1) = 1 ==> rg(adj(A)) ≤ 1.",
      "Al tener rango n - 1, existe al menos un cofactor no nulo ==> adj(A) ≠ 0.",
      "Una matriz no nula con rango ≤ 1 tiene exactamente rango 1."
    ],
    "distractorRationale": {
      "A": "Correcto. Teorema clásico del álgebra lineal: si rg(A) = n - 1, entonces rg(adj(A)) = 1.",
      "B": "Confusión con el rango de la matriz original A.",
      "C": "rg(adj(A)) = 0 solo ocurriría si rg(A) ≤ n - 2, donde todos los menores de orden n-1 se anulan.",
      "D": "Solo tendría rango n si A tuviese rango completo n (matriz invertible)."
    }
  },
  {
    "id": "ing-51",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Identidad del Seno del Ángulo Doble",
    "problemStatement": "Si $\\sin\\theta = \\frac{3}{5}$ y el ángulo $\\theta$ pertenece al segundo cuadrante ($\\frac{\\pi}{2} < \\theta < \\pi$), ¿cuál es el valor exacto de $\\sin(2\\theta)$?",
    "options": {
      "A": "$-\\frac{24}{25}$",
      "B": "$\\frac{24}{25}$",
      "C": "$-\\frac{12}{25}$",
      "D": "$\\frac{6}{5}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Aplicamos la fórmula del ángulo doble: $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$. Por la identidad pitagórica fundamental, $\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - \\left(\\frac{3}{5}\\right)^2 = 1 - \\frac{9}{25} = \\frac{16}{25}$. En el segundo cuadrante el coseno es estrictamente negativo, de modo que $\\cos\\theta = -\\sqrt{\\frac{16}{25}} = -\\frac{4}{5}$. Sustituyendo los valores: $\\sin(2\\theta) = 2 \\left(\\frac{3}{5}\\right) \\left(-\\frac{4}{5}\\right) = -\\frac{24}{25}$.",
    "stepByStepDerivation": [
      "Identificar la fórmula: sin(2θ) = 2·sin(θ)·cos(θ).",
      "Calcular cos(θ) usando cos^2(θ) = 1 - sin^2(θ) = 1 - 9/25 = 16/25.",
      "En el cuadrante II, cos(θ) < 0 ==> cos(θ) = -4/5.",
      "Multiplicar: 2 · (3/5) · (-4/5) = -24/25."
    ],
    "distractorRationale": {
      "A": "Correcto. El signo negativo proviene de que cos(θ) es negativo en el segundo cuadrante.",
      "B": "Error al olvidar que el coseno es negativo en el cuadrante II (+24/25).",
      "C": "Error al olvidar multiplicar por el factor 2 de la fórmula.",
      "D": "Error conceptual al sumar linealmente sin(θ) + sin(θ) = 6/5."
    }
  },
  {
    "id": "ing-52",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Ley de los Senos y el Caso Ambiguo (Lado-Lado-Ángulo)",
    "problemStatement": "En un triángulo oblicuángulo $ABC$, se conocen el ángulo $A = 30^\\circ$, el lado opuesto $a = 6\\text{ cm}$ y el lado adyacente $b = 8\\text{ cm}$. ¿Cuántos triángulos distintos pueden construirse con estos datos (caso ambiguo LLA)?",
    "options": {
      "A": "Exactamente 2 triángulos distintos, porque $h < a < b$.",
      "B": "Exactamente 1 triángulo rectángulo.",
      "C": "Ningún triángulo (0 soluciones), porque el lado $a$ no alcanza la base.",
      "D": "Infinitos triángulos."
    },
    "correctAnswer": "A",
    "formalSolution": "Calculamos la altura correspondiente desde el vértice $C$: $h = b\\sin A = 8\\sin(30^\\circ) = 8 \\left(\\frac{1}{2}\\right) = 4\\text{ cm}$. Comparamos la longitud del lado opuesto $a = 6\\text{ cm}$ con la altura $h$ y el lado adyacente $b = 8\\text{ cm}$: observamos que $h < a < b$ ($4 < 6 < 8$). Como $a > h$, el lado alcanza la base, y al ser $a < b$, intersecta la base en dos puntos distintos (uno formando un ángulo agudo $B_1$ y otro formando un ángulo obtuso $B_2 = 180^\\circ - B_1$). Por tanto, existen exactamente 2 triángulos distintos.",
    "stepByStepDerivation": [
      "Calcular altura crítica: h = b·sin(A) = 8 · sin(30°) = 4 cm.",
      "Comparar a = 6 con h = 4: como a > h, existe solución.",
      "Comparar a = 6 con b = 8: como a < b, el arco corta en dos puntos.",
      "Condición h < a < b determina exactamente 2 triángulos posibles."
    ],
    "distractorRationale": {
      "A": "Correcto. La condición h < a < b genera dos soluciones en el caso ambiguo.",
      "B": "Solo habría un triángulo rectángulo si a = h exactamente (a = 4).",
      "C": "Habría 0 soluciones si a < h (a < 4).",
      "D": "Los datos determinan un sistema acotado, no admiten grados de libertad continuos."
    }
  },
  {
    "id": "ing-53",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Identidad del Coseno del Ángulo Doble",
    "problemStatement": "Si $\\cos\\theta = -\\frac{1}{3}$, ¿cuál es el valor exacto de $\\cos(2\\theta)$?",
    "options": {
      "A": "$-\\frac{7}{9}$",
      "B": "$\\frac{7}{9}$",
      "C": "$-\\frac{2}{3}$",
      "D": "$\\frac{1}{9}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Utilizamos la fórmula del coseno del ángulo doble en términos exclusivos del coseno: $\\cos(2\\theta) = 2\\cos^2\\theta - 1$. Sustituyendo $\\cos\\theta = -\\frac{1}{3}$: $\\cos(2\\theta) = 2\\left(-\\frac{1}{3}\\right)^2 - 1 = 2\\left(\\frac{1}{9}\\right) - 1 = \\frac{2}{9} - \\frac{9}{9} = -\\frac{7}{9}$.",
    "stepByStepDerivation": [
      "Identificar la fórmula: cos(2θ) = 2·cos^2(θ) - 1.",
      "Elevar cos(θ) al cuadrado: (-1/3)^2 = 1/9.",
      "Multiplicar por 2: 2 · (1/9) = 2/9.",
      "Restar 1: 2/9 - 1 = -7/9."
    ],
    "distractorRationale": {
      "A": "Correcto. 2(1/9) - 1 = 2/9 - 9/9 = -7/9.",
      "B": "Error al invertir el signo de la resta (1 - 2/9 = 7/9).",
      "C": "Error al multiplicar linealmente 2 * (-1/3) = -2/3.",
      "D": "Error al no restar 1 tras elevar al cuadrado."
    }
  },
  {
    "id": "ing-54",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Identidad de la Tangente del Ángulo Doble",
    "problemStatement": "Sabiendo que $\\tan\\theta = \\frac{3}{4}$, ¿cuál es el valor exacto de $\\tan(2\\theta)$?",
    "options": {
      "A": "$\\frac{24}{7}$",
      "B": "$\\frac{6}{7}$",
      "C": "$\\frac{24}{25}$",
      "D": "$\\frac{7}{24}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La fórmula de la tangente del ángulo doble es $\\tan(2\\theta) = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$. Sustituyendo $\\tan\\theta = \\frac{3}{4}$: el numerador es $2\\left(\\frac{3}{4}\\right) = \\frac{3}{2}$; el denominador es $1 - \\left(\\frac{3}{4}\\right)^2 = 1 - \\frac{9}{16} = \\frac{7}{16}$. Luego: $\\tan(2\\theta) = \\frac{3/2}{7/16} = \\frac{3}{2} \\cdot \\frac{16}{7} = \\frac{24}{7}$.",
    "stepByStepDerivation": [
      "Numerador: 2 · tan(θ) = 2 · (3/4) = 3/2.",
      "Denominador: 1 - tan^2(θ) = 1 - (9/16) = 7/16.",
      "Dividir: (3/2) / (7/16) = (3/2) · (16/7) = 24/7."
    ],
    "distractorRationale": {
      "A": "Correcto. (3/2) / (7/16) = 24/7.",
      "B": "Error al no simplificar adecuadamente la fracción compuesta.",
      "C": "24/25 corresponde a sin(2θ), no a tan(2θ).",
      "D": "Fracción invertida (recíproca cotangente)."
    }
  },
  {
    "id": "ing-55",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Identidad Pitagórica Secante-Tangente y Cuadrantes",
    "problemStatement": "Si $\\tan\\theta = 2$ y el ángulo $\\theta$ se encuentra en el tercer cuadrante ($\\pi < \\theta < \\frac{3\\pi}{2}$), ¿cuál es el valor exacto de $\\sec\\theta$?",
    "options": {
      "A": "$-\\sqrt{5}$",
      "B": "$\\sqrt{5}$",
      "C": "$-\\frac{\\sqrt{5}}{2}$",
      "D": "$-3$"
    },
    "correctAnswer": "A",
    "formalSolution": "Utilizamos la identidad pitagórica $\\sec^2\\theta = 1 + \\tan^2\\theta = 1 + 2^2 = 1 + 4 = 5$. En el tercer cuadrante, la coordenada $x$ es negativa, por lo que el coseno y la secante son estrictamente negativos: $\\sec\\theta = -\\sqrt{5}$.",
    "stepByStepDerivation": [
      "Aplicar la identidad: sec^2(θ) = 1 + tan^2(θ).",
      "Sustituir tan(θ) = 2: sec^2(θ) = 1 + 4 = 5.",
      "Determinar el signo en el Cuadrante III: cos(θ) < 0 ==> sec(θ) < 0.",
      "Concluir sec(θ) = -sqrt(5)."
    ],
    "distractorRationale": {
      "A": "Correcto. sec^2 = 5 y en el Cuadrante III la secante es negativa.",
      "B": "Error al olvidar el signo negativo de la secante en el tercer cuadrante.",
      "C": "Confusión con el valor de la cotangente.",
      "D": "Error aritmético al calcular 1 + 2^2."
    }
  },
  {
    "id": "ing-56",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Identidad Pitagórica Cosecante-Cotangente",
    "problemStatement": "Sabiendo que $\\csc\\theta = -\\frac{13}{12}$ y $\\theta$ pertenece al cuarto cuadrante ($\\frac{3\\pi}{2} < \\theta < 2\\pi$), ¿cuál es el valor exacto de $\\cot\\theta$?",
    "options": {
      "A": "$-\\frac{5}{12}$",
      "B": "$\\frac{5}{12}$",
      "C": "$-\\frac{12}{5}$",
      "D": "$\\frac{12}{13}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Por la identidad pitagórica, $\\cot^2\\theta = \\csc^2\\theta - 1 = \\left(-\\frac{13}{12}\\right)^2 - 1 = \\frac{169}{144} - 1 = \\frac{25}{144}$. En el cuarto cuadrante, el seno es negativo y el coseno es positivo, lo que hace que la cotangente sea estrictamente negativa: $\\cot\\theta = -\\sqrt{\\frac{25}{144}} = -\\frac{5}{12}$.",
    "stepByStepDerivation": [
      "Aplicar la identidad cot^2(θ) = csc^2(θ) - 1.",
      "Calcular csc^2(θ) = 169/144.",
      "Restar 1: 169/144 - 144/144 = 25/144.",
      "En el Cuadrante IV, cot(θ) < 0 ==> cot(θ) = -5/12."
    ],
    "distractorRationale": {
      "A": "Correcto. cot^2 = 25/144 y signo negativo en el Cuadrante IV.",
      "B": "Error al no considerar el signo negativo de la cotangente en QIV.",
      "C": "Valor de tan(θ) en lugar de cot(θ).",
      "D": "Confusión con cos(θ)."
    }
  },
  {
    "id": "ing-57",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Fórmulas de Suma de Ángulos para el Seno",
    "problemStatement": "Sean $\\alpha$ y $\\beta$ dos ángulos agudos del primer cuadrante tales que $\\sin\\alpha = \\frac{4}{5}$ y $\\cos\\beta = \\frac{12}{13}$. ¿Cuál es el valor exacto de $\\sin(\\alpha + \\beta)$?",
    "options": {
      "A": "$\\frac{63}{65}$",
      "B": "$\\frac{33}{65}$",
      "C": "$\\frac{56}{65}$",
      "D": "$\\frac{16}{65}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Fórmula de adición: $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$. Calculamos las funciones faltantes en el primer cuadrante: $\\cos\\alpha = \\sqrt{1 - (4/5)^2} = \\frac{3}{5}$, y $\\sin\\beta = \\sqrt{1 - (12/13)^2} = \\sqrt{1 - 144/169} = \\frac{5}{13}$. Sustituyendo: $\\sin(\\alpha + \\beta) = \\left(\\frac{4}{5}\\right)\\left(\\frac{12}{13}\\right) + \\left(\\frac{3}{5}\\right)\\left(\\frac{5}{13}\\right) = \\frac{48}{65} + \\frac{15}{65} = \\frac{63}{65}$.",
    "stepByStepDerivation": [
      "Calcular cos(α) = 3/5.",
      "Calcular sin(β) = 5/13.",
      "Aplicar la fórmula: sin(α + β) = sin(α)cos(β) + cos(α)sin(β).",
      "Multiplicar: (4/5)(12/13) + (3/5)(5/13) = 48/65 + 15/65 = 63/65."
    ],
    "distractorRationale": {
      "A": "Correcto. (48 + 15) / 65 = 63/65.",
      "B": "Error al restar en lugar de sumar (48 - 15 = 33).",
      "C": "Valor correspondiente a sin(2α) o cos(α - β).",
      "D": "Error en los productos cruzados."
    }
  },
  {
    "id": "ing-58",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Fórmulas de Diferencia de Ángulos para el Coseno",
    "problemStatement": "Con los mismos datos ($\\sin\\alpha = \\frac{4}{5}$, $\\cos\\beta = \\frac{12}{13}$ en el primer cuadrante), ¿cuál es el valor exacto de $\\cos(\\alpha - \\beta)$?",
    "options": {
      "A": "$\\frac{56}{65}$",
      "B": "$\\frac{16}{65}$",
      "C": "$\\frac{63}{65}$",
      "D": "$-\\frac{16}{65}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La fórmula del coseno de la diferencia es $\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$. Con $\\cos\\alpha = \\frac{3}{5}$, $\\cos\\beta = \\frac{12}{13}$, $\\sin\\alpha = \\frac{4}{5}$, $\\sin\\beta = \\frac{5}{13}$: $\\cos(\\alpha - \\beta) = \\left(\\frac{3}{5}\\right)\\left(\\frac{12}{13}\\right) + \\left(\\frac{4}{5}\\right)\\left(\\frac{5}{13}\\right) = \\frac{36}{65} + \\frac{20}{65} = \\frac{56}{65}$.",
    "stepByStepDerivation": [
      "Identificar la fórmula: cos(α - β) = cos(α)cos(β) + sin(α)sin(β).",
      "Sustituir términos: (3/5)(12/13) + (4/5)(5/13).",
      "Calcular: 36/65 + 20/65 = 56/65."
    ],
    "distractorRationale": {
      "A": "Correcto. (36 + 20) / 65 = 56/65.",
      "B": "Error al restar (36 - 20 = 16), olvidando que para cos(α - β) los términos se suman.",
      "C": "Corresponde a sin(α + β).",
      "D": "Error de signos algebraicos."
    }
  },
  {
    "id": "ing-59",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Tangente de la Suma de Ángulos y Deducción Geométrica",
    "problemStatement": "Si $\\tan\\alpha = \\frac{1}{2}$ y $\\tan\\beta = \\frac{1}{3}$, ¿cuál es el valor exacto de $\\tan(\\alpha + \\beta)$ y qué ángulo suma representa?",
    "options": {
      "A": "$\\tan(\\alpha + \\beta) = 1$, lo que corresponde a $\\alpha + \\beta = 45^\\circ$ ($\\frac{\\pi}{4}\\text{ rad}$).",
      "B": "$\\tan(\\alpha + \\beta) = \\frac{5}{6}$",
      "C": "$\\tan(\\alpha + \\beta) = \\frac{5}{7}$",
      "D": "$\\tan(\\alpha + \\beta) = 2$"
    },
    "correctAnswer": "A",
    "formalSolution": "Aplicamos la identidad de la tangente de la suma: $\\tan(\\alpha + \\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}$. Numerador: $\\frac{1}{2} + \\frac{1}{3} = \\frac{5}{6}$. Denominador: $1 - \\left(\\frac{1}{2}\\right)\\left(\\frac{1}{3}\\right) = 1 - \\frac{1}{6} = \\frac{5}{6}$. Por tanto: $\\tan(\\alpha + \\beta) = \\frac{5/6}{5/6} = 1$. En el primer cuadrante, $\\arctan(1) = 45^\\circ = \\frac{\\pi}{4}$.",
    "stepByStepDerivation": [
      "Numerador: 1/2 + 1/3 = 5/6.",
      "Denominador: 1 - (1/2)(1/3) = 1 - 1/6 = 5/6.",
      "Cociente: (5/6) / (5/6) = 1.",
      "Concluir: tan(α + β) = 1 ==> α + β = 45°."
    ],
    "distractorRationale": {
      "A": "Correcto. Identidad clásica de Euler: arctan(1/2) + arctan(1/3) = pi/4.",
      "B": "Error al olvidar el denominador y quedarse solo con el numerador 5/6.",
      "C": "Error aritmético en el producto del denominador.",
      "D": "Error conceptual."
    }
  },
  {
    "id": "ing-60",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Fórmulas de Reducción de Potencias Cuadráticas (Seno)",
    "problemStatement": "¿Cuál es la identidad que expresa $\\sin^2\\theta$ en términos lineales del coseno del ángulo doble?",
    "options": {
      "A": "$\\sin^2\\theta = \\frac{1 - \\cos(2\\theta)}{2}$",
      "B": "$\\sin^2\\theta = \\frac{1 + \\cos(2\\theta)}{2}$",
      "C": "$\\sin^2\\theta = 1 - \\cos(2\\theta)$",
      "D": "$\\sin^2\\theta = \\frac{1 - \\sin(2\\theta)}{2}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Partiendo de la identidad del coseno del ángulo doble $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$, despejamos el término cuadrático: $2\\sin^2\\theta = 1 - \\cos(2\\theta) \\implies \\sin^2\\theta = \\frac{1 - \\cos(2\\theta)}{2}$. Esta fórmula es esencial para calcular integrales de potencias pares trigonométricas.",
    "stepByStepDerivation": [
      "Partir de cos(2θ) = 1 - 2·sin^2(θ).",
      "Sumar 2·sin^2(θ) a ambos lados: 2·sin^2(θ) + cos(2θ) = 1.",
      "Restar cos(2θ): 2·sin^2(θ) = 1 - cos(2θ).",
      "Dividir entre 2: sin^2(θ) = (1 - cos(2θ)) / 2."
    ],
    "distractorRationale": {
      "A": "Correcto. Fórmula fundamental de reducción de potencias para el seno.",
      "B": "Corresponde a cos^2(θ) = (1 + cos(2θ)) / 2.",
      "C": "Falta dividir entre 2.",
      "D": "El término lineal es cos(2θ), no sin(2θ)."
    }
  },
  {
    "id": "ing-61",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Fórmulas de Reducción de Potencias Cuadráticas (Coseno)",
    "problemStatement": "¿Cuál es la identidad de reducción de potencia para $\\cos^2\\theta$?",
    "options": {
      "A": "$\\cos^2\\theta = \\frac{1 + \\cos(2\\theta)}{2}$",
      "B": "$\\cos^2\\theta = \\frac{1 - \\cos(2\\theta)}{2}$",
      "C": "$\\cos^2\\theta = \\frac{1 + \\sin(2\\theta)}{2}$",
      "D": "$\\cos^2\\theta = 2\\cos(2\\theta) - 1$"
    },
    "correctAnswer": "A",
    "formalSolution": "Partiendo de $\\cos(2\\theta) = 2\\cos^2\\theta - 1$, sumamos 1 a ambos miembros: $2\\cos^2\\theta = 1 + \\cos(2\\theta)$. Dividiendo entre 2: $\\cos^2\\theta = \\frac{1 + \\cos(2\\theta)}{2}$.",
    "stepByStepDerivation": [
      "cos(2θ) = 2·cos^2(θ) - 1.",
      "Sumar 1: cos(2θ) + 1 = 2·cos^2(θ).",
      "Dividir entre 2: cos^2(θ) = (1 + cos(2θ)) / 2."
    ],
    "distractorRationale": {
      "A": "Correcto. Reducción lineal para cos^2(θ).",
      "B": "Corresponde a sin^2(θ).",
      "C": "La identidad involucra la función coseno, no seno.",
      "D": "Despeje algebraico incorrecto."
    }
  },
  {
    "id": "ing-62",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Transformación de Producto a Suma (Seno por Coseno)",
    "problemStatement": "Transforme el producto $2\\sin(5x)\\cos(3x)$ en una suma equivalente de funciones trigonométricas.",
    "options": {
      "A": "$\\sin(8x) + \\sin(2x)$",
      "B": "$\\sin(8x) - \\sin(2x)$",
      "C": "$\\cos(8x) + \\cos(2x)$",
      "D": "$\\cos(8x) - \\cos(2x)$"
    },
    "correctAnswer": "A",
    "formalSolution": "Aplicamos la fórmula de producto a suma: $2\\sin A \\cos B = \\sin(A + B) + \\sin(A - B)$. Para $A = 5x$ y $B = 3x$: $A + B = 8x$ y $A - B = 2x$. Por lo tanto, $2\\sin(5x)\\cos(3x) = \\sin(8x) + \\sin(2x)$.",
    "stepByStepDerivation": [
      "Fórmula: 2·sin(A)·cos(B) = sin(A + B) + sin(A - B).",
      "A + B = 5x + 3x = 8x.",
      "A - B = 5x - 3x = 2x.",
      "Sustituir: sin(8x) + sin(2x)."
    ],
    "distractorRationale": {
      "A": "Correcto. sin(5x+3x) + sin(5x-3x) = sin(8x) + sin(2x).",
      "B": "Corresponde a 2 cos(5x) sin(3x).",
      "C": "El producto de seno por coseno da suma de senos, no cosenos.",
      "D": "Corresponde al producto de dos senos."
    }
  },
  {
    "id": "ing-63",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Transformación de Producto a Suma (Coseno por Coseno)",
    "problemStatement": "Transforme el producto $2\\cos(4x)\\cos(2x)$ en una suma de cosenos.",
    "options": {
      "A": "$\\cos(6x) + \\cos(2x)$",
      "B": "$\\cos(6x) - \\cos(2x)$",
      "C": "$\\sin(6x) + \\sin(2x)$",
      "D": "$\\cos(8x) + \\cos(2x)$"
    },
    "correctAnswer": "A",
    "formalSolution": "La identidad fundamental para el producto de cosenos es $2\\cos A \\cos B = \\cos(A + B) + \\cos(A - B)$. Con $A = 4x$ y $B = 2x$: $A + B = 6x$ y $A - B = 2x$. Así: $2\\cos(4x)\\cos(2x) = \\cos(6x) + \\cos(2x)$.",
    "stepByStepDerivation": [
      "Identidad: 2·cos(A)·cos(B) = cos(A + B) + cos(A - B).",
      "Calcular A + B = 4x + 2x = 6x.",
      "Calcular A - B = 4x - 2x = 2x.",
      "Resultado: cos(6x) + cos(2x)."
    ],
    "distractorRationale": {
      "A": "Correcto. cos(4x+2x) + cos(4x-2x) = cos(6x) + cos(2x).",
      "B": "Error de signo en la combinación de cosenos.",
      "C": "El producto cos*cos produce cosenos, no senos.",
      "D": "Error aritmético al multiplicar los argumentos (4*2 = 8) en lugar de sumarlos."
    }
  },
  {
    "id": "ing-64",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Transformación de Producto a Suma (Seno por Seno)",
    "problemStatement": "Transforme el producto $2\\sin(7x)\\sin(3x)$ en una resta de cosenos.",
    "options": {
      "A": "$\\cos(4x) - \\cos(10x)$",
      "B": "$\\cos(10x) - \\cos(4x)$",
      "C": "$\\sin(10x) + \\sin(4x)$",
      "D": "$\\cos(10x) + \\cos(4x)$"
    },
    "correctAnswer": "A",
    "formalSolution": "La identidad para el producto de dos senos es $2\\sin A \\sin B = \\cos(A - B) - \\cos(A + B)$. Para $A = 7x$ y $B = 3x$: $A - B = 4x$ y $A + B = 10x$. Por lo tanto, $2\\sin(7x)\\sin(3x) = \\cos(4x) - \\cos(10x)$.",
    "stepByStepDerivation": [
      "Identidad: 2·sin(A)·sin(B) = cos(A - B) - cos(A + B).",
      "A - B = 7x - 3x = 4x.",
      "A + B = 7x + 3x = 10x.",
      "Resultado: cos(4x) - cos(10x)."
    ],
    "distractorRationale": {
      "A": "Correcto. El término de la diferencia antecede al de la suma.",
      "B": "Error al invertir el orden de los términos (cos(A+B) - cos(A-B)).",
      "C": "El producto de senos produce cosenos, no senos.",
      "D": "Error de signo al sumar en vez de restar."
    }
  },
  {
    "id": "ing-65",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Transformación de Suma a Producto (Suma de Senos)",
    "problemStatement": "Exprese la suma $\\sin(5x) + \\sin(x)$ como un producto de funciones trigonométricas.",
    "options": {
      "A": "$2\\sin(3x)\\cos(2x)$",
      "B": "$2\\cos(3x)\\sin(2x)$",
      "C": "$2\\sin(4x)\\cos(x)$",
      "D": "$\\sin(6x)$"
    },
    "correctAnswer": "A",
    "formalSolution": "La fórmula de suma a producto es $\\sin A + \\sin B = 2\\sin\\left(\\frac{A + B}{2}\\right)\\cos\\left(\\frac{A - B}{2}\\right)$. Con $A = 5x$ y $B = x$: la semisuma es $\\frac{5x + x}{2} = 3x$, y la semidiferencia es $\\frac{5x - x}{2} = 2x$. Por lo tanto: $\\sin(5x) + \\sin(x) = 2\\sin(3x)\\cos(2x)$.",
    "stepByStepDerivation": [
      "Identidad: sin A + sin B = 2·sin((A+B)/2)·cos((A-B)/2).",
      "(A + B)/2 = (5x + x)/2 = 3x.",
      "(A - B)/2 = (5x - x)/2 = 2x.",
      "Sustituir: 2·sin(3x)·cos(2x)."
    ],
    "distractorRationale": {
      "A": "Correcto. 2*sin(3x)*cos(2x).",
      "B": "Intercambio erróneo de las funciones en semisuma y semidiferencia.",
      "C": "Error aritmético en el cálculo de la semisuma.",
      "D": "Error conceptual al sumar directamente los argumentos sin aplicar la identidad."
    }
  },
  {
    "id": "ing-66",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Transformación de Suma a Producto (Resta de Cosenos)",
    "problemStatement": "Exprese la diferencia $\\cos(6x) - \\cos(2x)$ como producto trigonométrico.",
    "options": {
      "A": "$-2\\sin(4x)\\sin(2x)$",
      "B": "$2\\sin(4x)\\sin(2x)$",
      "C": "$-2\\cos(4x)\\cos(2x)$",
      "D": "$-2\\sin(8x)\\sin(4x)$"
    },
    "correctAnswer": "A",
    "formalSolution": "La fórmula de transformación es $\\cos A - \\cos B = -2\\sin\\left(\\frac{A + B}{2}\\right)\\sin\\left(\\frac{A - B}{2}\\right)$. Con $A = 6x$ y $B = 2x$: semisuma $\\frac{6x + 2x}{2} = 4x$ y semidiferencia $\\frac{6x - 2x}{2} = 2x$. Por lo tanto: $\\cos(6x) - \\cos(2x) = -2\\sin(4x)\\sin(2x)$.",
    "stepByStepDerivation": [
      "Identidad: cos A - cos B = -2·sin((A+B)/2)·sin((A-B)/2).",
      "Semisuma = (6x + 2x)/2 = 4x.",
      "Semidiferencia = (6x - 2x)/2 = 2x.",
      "Resultado: -2·sin(4x)·sin(2x)."
    ],
    "distractorRationale": {
      "A": "Correcto. El signo negativo es consustancial a la resta de cosenos.",
      "B": "Error al omitir el signo negativo obligatorio de la identidad.",
      "C": "La resta de cosenos se transforma en producto de senos, no de cosenos.",
      "D": "Error al no dividir entre 2 los argumentos de suma y resta."
    }
  },
  {
    "id": "ing-67",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Identidad del Ángulo Mitad para el Seno",
    "problemStatement": "Si $\\cos\\theta = \\frac{7}{25}$ y $0 < \\theta < \\frac{\\pi}{2}$, ¿cuál es el valor exacto de $\\sin\\left(\\frac{\\theta}{2}\\right)$?",
    "options": {
      "A": "$\\frac{3}{5}$",
      "B": "$\\frac{4}{5}$",
      "C": "$\\frac{9}{25}$",
      "D": "$\\frac{\\sqrt{7}}{5}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La fórmula del ángulo mitad para el seno es $\\sin\\left(\\frac{\\theta}{2}\\right) = \\sqrt{\\frac{1 - \\cos\\theta}{2}}$ (signo positivo porque $0 < \\frac{\\theta}{2} < \\frac{\\pi}{4}$). Sustituyendo $\\cos\\theta = \\frac{7}{25}$: $1 - \\frac{7}{25} = \\frac{18}{25}$. Dividiendo entre 2: $\\frac{18/25}{2} = \\frac{9}{25}$. Extrayendo la raíz cuadrada: $\\sin\\left(\\frac{\\theta}{2}\\right) = \\sqrt{\\frac{9}{25}} = \\frac{3}{5}$.",
    "stepByStepDerivation": [
      "Fórmula: sin(θ/2) = sqrt((1 - cos θ) / 2).",
      "Calcular 1 - cos(θ) = 1 - 7/25 = 18/25.",
      "Dividir entre 2: (18/25) / 2 = 9/25.",
      "Extraer raíz: sqrt(9/25) = 3/5."
    ],
    "distractorRationale": {
      "A": "Correcto. sqrt((1 - 7/25) / 2) = sqrt(9/25) = 3/5.",
      "B": "4/5 corresponde a cos(θ/2).",
      "C": "Error al olvidar extraer la raíz cuadrada final.",
      "D": "Error en la simplificación algebraica."
    }
  },
  {
    "id": "ing-68",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Identidad del Ángulo Mitad para el Coseno",
    "problemStatement": "Con el mismo dato $\\cos\\theta = \\frac{7}{25}$ en el primer cuadrante, ¿cuál es el valor exacto de $\\cos\\left(\\frac{\\theta}{2}\\right)$?",
    "options": {
      "A": "$\\frac{4}{5}$",
      "B": "$\\frac{3}{5}$",
      "C": "$\\frac{16}{25}$",
      "D": "$\\frac{24}{25}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La fórmula del ángulo mitad para el coseno es $\\cos\\left(\\frac{\\theta}{2}\\right) = \\sqrt{\\frac{1 + \\cos\\theta}{2}}$. Sustituyendo $\\cos\\theta = \\frac{7}{25}$: $1 + \\frac{7}{25} = \\frac{32}{25}$. Dividiendo entre 2: $\\frac{32/25}{2} = \\frac{16}{25}$. Extrayendo la raíz: $\\cos\\left(\\frac{\\theta}{2}\\right) = \\sqrt{\\frac{16}{25}} = \\frac{4}{5}$.",
    "stepByStepDerivation": [
      "Fórmula: cos(θ/2) = sqrt((1 + cos θ) / 2).",
      "Calcular 1 + 7/25 = 32/25.",
      "Dividir entre 2: (32/25) / 2 = 16/25.",
      "Extraer raíz: sqrt(16/25) = 4/5."
    ],
    "distractorRationale": {
      "A": "Correcto. sqrt((1 + 7/25) / 2) = sqrt(16/25) = 4/5.",
      "B": "Corresponde a sin(θ/2).",
      "C": "Falta extraer la raíz cuadrada.",
      "D": "24/25 es el valor de sin(θ), no de cos(θ/2)."
    }
  },
  {
    "id": "ing-69",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Identidad Racional del Ángulo Mitad para la Tangente",
    "problemStatement": "¿Cuál de las siguientes expresiones racionales representa exactamente $\\tan\\left(\\frac{\\theta}{2}\\right)$ sin involucrar raíces cuadradas?",
    "options": {
      "A": "$\\tan\\left(\\frac{\\theta}{2}\\right) = \\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{\\sin\\theta}{1 + \\cos\\theta}$",
      "B": "$\\tan\\left(\\frac{\\theta}{2}\\right) = \\frac{1 + \\cos\\theta}{\\sin\\theta}$",
      "C": "$\\tan\\left(\\frac{\\theta}{2}\\right) = \\frac{\\cos\\theta}{1 - \\sin\\theta}$",
      "D": "$\\tan\\left(\\frac{\\theta}{2}\\right) = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Utilizando las fórmulas de ángulo doble con argumento $\\theta/2$: $\\sin\\theta = 2\\sin(\\theta/2)\\cos(\\theta/2)$ y $1 - \\cos\\theta = 2\\sin^2(\\theta/2)$. Al dividir ambas expresiones: $\\frac{1 - \\cos\\theta}{\\sin\\theta} = \\frac{2\\sin^2(\\theta/2)}{2\\sin(\\theta/2)\\cos(\\theta/2)} = \\frac{\\sin(\\theta/2)}{\\cos(\\theta/2)} = \\tan\\left(\\frac{\\theta}{2}\\right)$. Multiplicando numerador y denominador por $1 + \\cos\\theta$ se obtiene la forma equivalente $\\frac{\\sin\\theta}{1 + \\cos\\theta}$.",
    "stepByStepDerivation": [
      "Reescribir 1 - cos(θ) como 2·sin^2(θ/2).",
      "Reescribir sin(θ) como 2·sin(θ/2)·cos(θ/2).",
      "Dividir: (2·sin^2(θ/2)) / (2·sin(θ/2)·cos(θ/2)) = sin(θ/2) / cos(θ/2) = tan(θ/2).",
      "Verificar equivalencia multiplicando por conjugado."
    ],
    "distractorRationale": {
      "A": "Correcto. Identidades racionales universales de la tangente del ángulo mitad.",
      "B": "Corresponde a cot(θ/2).",
      "C": "Fracción no equivalente a la tangente del ángulo mitad.",
      "D": "Esta es la fórmula de la tangente del ángulo doble tan(2θ)."
    }
  },
  {
    "id": "ing-70",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Ecuación Trigonométrica Lineal Fundamental",
    "problemStatement": "Resuelva la ecuación $2\\sin(x) - 1 = 0$ para $x \\in [0, 2\\pi)$.",
    "options": {
      "A": "$x \\in \\left\\{ \\frac{\\pi}{6}, \\frac{5\\pi}{6} \\right\\}$",
      "B": "$x \\in \\left\\{ \\frac{\\pi}{3}, \\frac{2\\pi}{3} \\right\\}$",
      "C": "$x \\in \\left\\{ \\frac{7\\pi}{6}, \\frac{11\\pi}{6} \\right\\}$",
      "D": "$x = \\frac{\\pi}{6}$ únicamente."
    },
    "correctAnswer": "A",
    "formalSolution": "Despejando la función seno: $2\\sin(x) = 1 \\implies \\sin(x) = \\frac{1}{2}$. La función seno es positiva en el primer y segundo cuadrante. En el primer cuadrante, el ángulo de referencia es $x_1 = \\arcsin(1/2) = \\frac{\\pi}{6}$ ($30^\\circ$). En el segundo cuadrante, $x_2 = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ ($150^\\circ$).",
    "stepByStepDerivation": [
      "Despejar sin(x) = 1/2.",
      "Ángulo primer cuadrante: x = π/6.",
      "Ángulo segundo cuadrante: x = π - π/6 = 5π/6.",
      "Conjunto solución en [0, 2π): {π/6, 5π/6}."
    ],
    "distractorRationale": {
      "A": "Correcto. Soluciones exactas en el intervalo [0, 2pi).",
      "B": "Corresponde a sin(x) = sqrt(3)/2 o cos(x) = 1/2.",
      "C": "Corresponde a sin(x) = -1/2 (cuadrantes III y IV).",
      "D": "Solución incompleta; omite la raíz del segundo cuadrante."
    }
  },
  {
    "id": "ing-71",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Ecuación Trigonométrica con Tangente y Cuadrantes",
    "problemStatement": "Determine todas las soluciones de $\\sqrt{3}\\tan(x) + 1 = 0$ en el intervalo $[0, 2\\pi)$.",
    "options": {
      "A": "$x \\in \\left\\{ \\frac{5\\pi}{6}, \\frac{11\\pi}{6} \\right\\}$",
      "B": "$x \\in \\left\\{ \\frac{\\pi}{6}, \\frac{7\\pi}{6} \\right\\}$",
      "C": "$x \\in \\left\\{ \\frac{2\\pi}{3}, \\frac{5\\pi}{3} \\right\\}$",
      "D": "$x \\in \\left\\{ \\frac{3\\pi}{4}, \\frac{7\\pi}{4} \\right\\}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Despejando: $\\tan(x) = -\\frac{1}{\\sqrt{3}} = -\\frac{\\sqrt{3}}{3}$. El ángulo de referencia es $\\theta_{ref} = \\frac{\\pi}{6}$ ($30^\\circ$). La tangente es negativa en los cuadrantes II y IV. En el cuadrante II: $x_1 = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$. En el cuadrante IV: $x_2 = 2\\pi - \\frac{\\pi}{6} = \\frac{11\\pi}{6}$.",
    "stepByStepDerivation": [
      "Despejar tan(x) = -1/sqrt(3).",
      "Ángulo de referencia: arctan(1/sqrt(3)) = π/6.",
      "Cuadrante II: x = π - π/6 = 5π/6.",
      "Cuadrante IV: x = 2π - π/6 = 11π/6."
    ],
    "distractorRationale": {
      "A": "Correcto. Raíces en cuadrantes II y IV donde la tangente es negativa.",
      "B": "Corresponde a tan(x) = +1/sqrt(3) (cuadrantes I y III).",
      "C": "Corresponde a tan(x) = -sqrt(3).",
      "D": "Corresponde a tan(x) = -1."
    }
  },
  {
    "id": "ing-72",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Ecuación Trigonométrica Cuadrática",
    "problemStatement": "Resuelva la ecuación cuadrática $2\\cos^2(x) - \\cos(x) - 1 = 0$ para $x \\in [0, 2\\pi)$.",
    "options": {
      "A": "$x \\in \\left\\{ 0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3} \\right\\}$",
      "B": "$x \\in \\left\\{ \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3} \\right\\}$",
      "C": "$x \\in \\left\\{ 0, \\pi \\right\\}$",
      "D": "$x \\in \\left\\{ \\frac{\\pi}{2}, \\frac{3\\pi}{2} \\right\\}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Haciendo el cambio de variable $u = \\cos(x)$, la ecuación es $2u^2 - u - 1 = 0$. Factorizando: $(2u + 1)(u - 1) = 0$. Obtenemos dos casos: 1) $u = 1 \\implies \\cos(x) = 1 \\implies x = 0$. 2) $u = -\\frac{1}{2} \\implies \\cos(x) = -\\frac{1}{2}$. El coseno es negativo en los cuadrantes II y III: $x = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$ y $x = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}$. El conjunto solución es $\\{0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\}$.",
    "stepByStepDerivation": [
      "Factorizar: (2·cos x + 1)(cos x - 1) = 0.",
      "Caso 1: cos(x) = 1 ==> x = 0 en [0, 2π).",
      "Caso 2: cos(x) = -1/2 ==> x = 2π/3 y x = 4π/3.",
      "Conjunto total: {0, 2π/3, 4π/3}."
    ],
    "distractorRationale": {
      "A": "Correcto. Tres soluciones verificadas en [0, 2pi).",
      "B": "Corresponde a cos(x) = -1 y cos(x) = 1/2.",
      "C": "Solución incompleta omitiendo la raíz fraccionaria u = -1/2.",
      "D": "Corresponde a cos(x) = 0."
    }
  },
  {
    "id": "ing-73",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Ecuación Trigonométrica con Factor Común y Ángulo Doble",
    "problemStatement": "¿Cuántas soluciones distintas tiene la ecuación $\\sin(2x) - \\cos(x) = 0$ en el intervalo $[0, 2\\pi)$?",
    "options": {
      "A": "$4$ soluciones",
      "B": "$2$ soluciones",
      "C": "$3$ soluciones",
      "D": "$1$ solución"
    },
    "correctAnswer": "A",
    "formalSolution": "Expandimos el ángulo doble: $2\\sin(x)\\cos(x) - \\cos(x) = 0$. Factorizamos $\\cos(x)$: $\\cos(x)(2\\sin(x) - 1) = 0$. Esto genera dos ramas: 1) $\\cos(x) = 0 \\implies x = \\frac{\\pi}{2}, \\frac{3\\pi}{2}$ (2 soluciones). 2) $2\\sin(x) - 1 = 0 \\implies \\sin(x) = \\frac{1}{2} \\implies x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$ (2 soluciones). Al no haber soluciones duplicadas, existen exactamente $2 + 2 = 4$ soluciones distintas.",
    "stepByStepDerivation": [
      "Identidad: sin(2x) = 2·sin(x)·cos(x).",
      "Factor común: cos(x) · (2·sin(x) - 1) = 0.",
      "Rama 1: cos(x) = 0 ==> x = π/2, 3π/2.",
      "Rama 2: sin(x) = 1/2 ==> x = π/6, 5π/6.",
      "Total de soluciones únicas: 4."
    ],
    "distractorRationale": {
      "A": "Correcto. Las 4 soluciones son pi/6, pi/2, 5pi/6 y 3pi/2.",
      "B": "Error al cancelar cos(x) dividiendo entre él, perdiendo las 2 raíces donde cos(x) = 0.",
      "C": "Error al omitir una de las raíces del segundo cuadrante.",
      "D": "Conteo severamente defectuoso."
    }
  },
  {
    "id": "ing-74",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Ecuación Trigonométrica Reducible a Cuadrática mediante Ángulo Doble",
    "problemStatement": "Resuelva la ecuación $\\cos(2x) + 3\\sin(x) - 2 = 0$ en el intervalo $[0, 2\\pi)$.",
    "options": {
      "A": "$x \\in \\left\\{ \\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6} \\right\\}$",
      "B": "$x \\in \\left\\{ \\frac{\\pi}{3}, \\frac{2\\pi}{3} \\right\\}$",
      "C": "$x \\in \\left\\{ \\frac{7\\pi}{6}, \\frac{11\\pi}{6} \\right\\}$",
      "D": "$x = \\frac{\\pi}{2}$ únicamente."
    },
    "correctAnswer": "A",
    "formalSolution": "Reemplazamos $\\cos(2x) = 1 - 2\\sin^2(x)$: $(1 - 2\\sin^2(x)) + 3\\sin(x) - 2 = 0 \\implies -2\\sin^2(x) + 3\\sin(x) - 1 = 0$. Multiplicando por $-1$: $2\\sin^2(x) - 3\\sin(x) + 1 = 0$. Factorizando: $(2\\sin(x) - 1)(\\sin(x) - 1) = 0$. 1) $\\sin(x) = \\frac{1}{2} \\implies x = \\frac{\\pi}{6}, \\frac{5\\pi}{6}$. 2) $\\sin(x) = 1 \\implies x = \\frac{\\pi}{2}$. Conjunto solución: $\\{\\frac{\\pi}{6}, \\frac{\\pi}{2}, \\frac{5\\pi}{6}\\}$.",
    "stepByStepDerivation": [
      "Sustituir cos(2x) = 1 - 2·sin^2(x).",
      "Simplificar: -2·sin^2(x) + 3·sin(x) - 1 = 0.",
      "Reordenar: 2·sin^2(x) - 3·sin(x) + 1 = 0.",
      "Factorizar: (2·sin(x) - 1)(sin(x) - 1) = 0.",
      "sin(x) = 1/2 ==> x = π/6, 5π/6.",
      "sin(x) = 1 ==> x = π/2."
    ],
    "distractorRationale": {
      "A": "Correcto. Exactamente tres raíces: pi/6, pi/2 y 5pi/6.",
      "B": "Corresponde a valores angulares con cosenos invertidos.",
      "C": "Corresponde a sin(x) = -1/2.",
      "D": "Solución incompleta omitiendo las dos raíces de sin(x) = 1/2."
    }
  },
  {
    "id": "ing-75",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Combinación Lineal Armónica (Forma de Amplitud y Fase)",
    "problemStatement": "Dada la función oscilatoria $f(t) = 3\\sin(2t) + 4\\cos(2t)$, ¿cuál es su amplitud máxima $R$ y su expresión en forma de onda única sinusoidal $R\\sin(2t + \\phi)$?",
    "options": {
      "A": "Amplitud $R = 5$, con $\\phi = \\arctan\\left(\\frac{4}{3}\\right) \\approx 0.927\\text{ rad}$.",
      "B": "Amplitud $R = 7$, con $\\phi = 0$.",
      "C": "Amplitud $R = 1$, con $\\phi = \\frac{\\pi}{4}$.",
      "D": "Amplitud $R = 25$, con $\\phi = \\arctan\\left(\\frac{3}{4}\\right)$."
    },
    "correctAnswer": "A",
    "formalSolution": "Toda combinación $A\\sin(\\omega t) + B\\cos(\\omega t)$ equivale a $R\\sin(\\omega t + \\phi)$, donde $R = \\sqrt{A^2 + B^2}$ y $\\tan\\phi = \\frac{B}{A}$ (con $\\phi$ en el cuadrante adecuado según los signos de $A$ y $B$). Con $A = 3$ y $B = 4$: $R = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. El ángulo de fase es $\\phi = \\arctan(4/3) \\approx 0.927\\text{ rad}$ ($53.13^\\circ$).",
    "stepByStepDerivation": [
      "Identificar coeficientes: A = 3, B = 4.",
      "Calcular amplitud resultante: R = sqrt(A^2 + B^2) = sqrt(9 + 16) = 5.",
      "Calcular fase: tan(phi) = B / A = 4 / 3 ==> phi = arctan(4/3).",
      "Función resultante: f(t) = 5·sin(2t + arctan(4/3))."
    ],
    "distractorRationale": {
      "A": "Correcto. R = sqrt(3^2 + 4^2) = 5 y phi = arctan(4/3).",
      "B": "Error común al sumar aritméticamente las amplitudes 3 + 4 = 7 (interferencia destructiva ignorada).",
      "C": "Resta de amplitudes |3 - 4| = 1.",
      "D": "Confundir el cuadrado de la amplitud R^2 = 25 con la amplitud R = 5."
    }
  },
  {
    "id": "ing-76",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Ley de los Senos para Cálculo de Distancia Inaccesible",
    "problemStatement": "En un triángulo $ABC$, se conocen los ángulos $A = 45^\\circ$, $B = 60^\\circ$ y el lado $a = 10\\sqrt{2}\\text{ m}$. Calcule la longitud exacta del lado $b$.",
    "options": {
      "A": "$b = 10\\sqrt{3}\\text{ m}$",
      "B": "$b = 10\\sqrt{6}\\text{ m}$",
      "C": "$b = 20\\text{ m}$",
      "D": "$b = 5\\sqrt{6}\\text{ m}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Por la Ley de los Senos: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} \\implies b = a \\frac{\\sin B}{\\sin A}$. Sustituyendo: $\\sin(45^\\circ) = \\frac{\\sqrt{2}}{2}$ y $\\sin(60^\\circ) = \\frac{\\sqrt{3}}{2}$. Por lo tanto: $b = (10\\sqrt{2}) \\cdot \\frac{\\sqrt{3}/2}{\\sqrt{2}/2} = (10\\sqrt{2}) \\cdot \\frac{\\sqrt{3}}{\\sqrt{2}} = 10\\sqrt{3}\\text{ m}$.",
    "stepByStepDerivation": [
      "Aplicar Ley de Senos: b = a · sin(B) / sin(A).",
      "Sustituir a = 10·sqrt(2), sin(60°) = sqrt(3)/2, sin(45°) = sqrt(2)/2.",
      "El factor 1/2 se cancela: b = 10·sqrt(2) · (sqrt(3) / sqrt(2)).",
      "El factor sqrt(2) se cancela: b = 10·sqrt(3) m."
    ],
    "distractorRationale": {
      "A": "Correcto. b = 10*sqrt(3) m.",
      "B": "Error al multiplicar sqrt(2) * sqrt(3) sin simplificar el denominador.",
      "C": "Aproximación tosca sin rigor algebraico radical.",
      "D": "Error al dividir entre 2 dos veces."
    }
  },
  {
    "id": "ing-77",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Ley de los Cosenos para Cálculo del Tercer Lado",
    "problemStatement": "En un triángulo $ABC$, los lados $a = 5\\text{ cm}$ y $b = 8\\text{ cm}$ forman un ángulo comprendido $C = 60^\\circ$. ¿Cuál es la longitud exacta del lado opuesto $c$?",
    "options": {
      "A": "$c = 7\\text{ cm}$",
      "B": "$c = \\sqrt{89}\\text{ cm}$",
      "C": "$c = 6\\text{ cm}$",
      "D": "$c = 3\\text{ cm}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Por la Ley de los Cosenos: $c^2 = a^2 + b^2 - 2ab\\cos C$. Sustituyendo valores: $c^2 = 5^2 + 8^2 - 2(5)(8)\\cos(60^\\circ)$. Como $\\cos(60^\\circ) = \\frac{1}{2}$: $c^2 = 25 + 64 - 80\\left(\\frac{1}{2}\\right) = 89 - 40 = 49$. Extrayendo raíz cuadrada: $c = \\sqrt{49} = 7\\text{ cm}$.",
    "stepByStepDerivation": [
      "Fórmula: c^2 = a^2 + b^2 - 2ab·cos(C).",
      "Calcular a^2 + b^2 = 25 + 64 = 89.",
      "Calcular 2ab·cos(60°) = 2(5)(8)(0.5) = 40.",
      "Restar: c^2 = 89 - 40 = 49 ==> c = 7 cm."
    ],
    "distractorRationale": {
      "A": "Correcto. c^2 = 89 - 40 = 49 ==> c = 7 cm.",
      "B": "Error al omitir el término de corrección angular -2ab cos(C).",
      "C": "Estimación incorrecta.",
      "D": "Resta lineal de lados 8 - 5 = 3 cm."
    }
  },
  {
    "id": "ing-78",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Ley de los Cosenos para Cálculo de Ángulo",
    "problemStatement": "Un triángulo tiene lados de longitudes $a = 3$, $b = 5$ y $c = 7$. ¿Cuál es la medida exacta del ángulo $C$ opuesto al lado mayor?",
    "options": {
      "A": "$C = 120^\\circ$ ($\\frac{2\\pi}{3}\\text{ rad}$)",
      "B": "$C = 60^\\circ$",
      "C": "$C = 150^\\circ$",
      "D": "$C = 90^\\circ$"
    },
    "correctAnswer": "A",
    "formalSolution": "Despejamos el coseno del ángulo $C$ de la Ley de los Cosenos: $\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$. Sustituyendo: $\\cos C = \\frac{3^2 + 5^2 - 7^2}{2(3)(5)} = \\frac{9 + 25 - 49}{30} = \\frac{34 - 49}{30} = \\frac{-15}{30} = -\\frac{1}{2}$. Como $\\cos C = -\\frac{1}{2}$ y $C \\in (0^\\circ, 180^\\circ)$, el ángulo es obtuso: $C = 180^\\circ - 60^\\circ = 120^\\circ$.",
    "stepByStepDerivation": [
      "cos(C) = (a^2 + b^2 - c^2) / (2ab).",
      "Numerador: 9 + 25 - 49 = 34 - 49 = -15.",
      "Denominador: 2 · 3 · 5 = 30.",
      "cos(C) = -15 / 30 = -1/2.",
      "C = arccos(-1/2) = 120°."
    ],
    "distractorRationale": {
      "A": "Correcto. cos(C) = -1/2 corresponde exactamente a 120°.",
      "B": "60° corresponde a cos(C) = +1/2, olvidando el signo negativo.",
      "C": "150° corresponde a cos(C) = -sqrt(3)/2.",
      "D": "Si fuese 90°, satisfaría Pitágoras 3^2 + 5^2 = 34 ≠ 49."
    }
  },
  {
    "id": "ing-79",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Caso Ambiguo LLA con Cero Triángulos Posibles",
    "problemStatement": "En un intento de construir un triángulo $ABC$, se fijan $A = 30^\\circ$, $b = 10\\text{ cm}$ y $a = 4\\text{ cm}$. ¿Cuántos triángulos pueden formarse?",
    "options": {
      "A": "$0$ triángulos (imposible geométricamente, el lado $a$ no alcanza la base).",
      "B": "$1$ triángulo escaleno.",
      "C": "$2$ triángulos distintos.",
      "D": "Infinitos triángulos semejantes."
    },
    "correctAnswer": "A",
    "formalSolution": "La distancia perpendicular mínima desde el vértice $C$ hasta la línea que contiene la base es la altura: $h = b\\sin A = 10\\sin(30^\\circ) = 10(0.5) = 5\\text{ cm}$. Para que el lado $a$ pueda intersectar la base y cerrar el polígono se requiere que $a \\ge h$. Como $a = 4\\text{ cm} < h = 5\\text{ cm}$, el segmento $a$ es demasiado corto para alcanzar la base, por lo que es físicamente imposible formar algún triángulo (0 soluciones).",
    "stepByStepDerivation": [
      "Calcular altura crítica: h = b · sin(A) = 10 · sin(30°) = 5 cm.",
      "Comparar lado opuesto a = 4 con altura h = 5: a < h.",
      "Condición a < h determina que no hay intersección con la base.",
      "Número de soluciones = 0."
    ],
    "distractorRationale": {
      "A": "Correcto. a = 4 < h = 5 hace imposible la formación de un triángulo.",
      "B": "Para 1 solución se requiere a = h o a >= b.",
      "C": "Para 2 soluciones se requiere h < a < b.",
      "D": "El sistema está sobredefinido y es geométricamente inconsistente."
    }
  },
  {
    "id": "ing-80",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Caso Ambiguo LLA con Solución Única Rectángulo",
    "problemStatement": "Con $A = 30^\\circ$, $b = 10\\text{ cm}$ y $a = 5\\text{ cm}$, ¿qué tipo de triángulo se genera?",
    "options": {
      "A": "Exactamente un triángulo rectángulo con el ángulo $B = 90^\\circ$.",
      "B": "Dos triángulos distintos (uno agudo y uno obtuso).",
      "C": "Ningún triángulo posible.",
      "D": "Un triángulo equilátero."
    },
    "correctAnswer": "A",
    "formalSolution": "La altura es $h = b\\sin A = 10\\sin(30^\\circ) = 5\\text{ cm}$. Dado que la longitud del lado opuesto $a = 5\\text{ cm}$ es exactamente igual a la altura perpendicular ($a = h$), el lado $a$ es tangente a la base formando un ángulo recto con ella ($B = 90^\\circ$). Por lo tanto, se produce exactamente una solución única correspondiente a un triángulo rectángulo.",
    "stepByStepDerivation": [
      "Calcular h = 10 · sin(30°) = 5 cm.",
      "Comparar: a = 5 cm = h.",
      "Cuando a = h, el lado opuesto cae perpendicularmente sobre la base.",
      "Se genera exactamente 1 triángulo rectángulo."
    ],
    "distractorRationale": {
      "A": "Correcto. a = h define un único triángulo rectángulo con B = 90°.",
      "B": "Se requeriría a > h y a < b para dos triángulos.",
      "C": "Hay solución real ya que a alcanza la base.",
      "D": "Un triángulo con ángulos 30° y 90° no puede ser equilátero."
    }
  },
  {
    "id": "ing-81",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Caso Ambiguo LLA con Solución Única por Lado Mayor",
    "problemStatement": "En un triángulo $ABC$, $A = 30^\\circ$, $b = 6\\text{ cm}$ y $a = 8\\text{ cm}$. ¿Cuántos triángulos distintos existen?",
    "options": {
      "A": "Exactamente $1$ triángulo único, porque $a \\ge b$.",
      "B": "$2$ triángulos distintos.",
      "C": "$0$ triángulos.",
      "D": "Tres soluciones."
    },
    "correctAnswer": "A",
    "formalSolution": "Calculamos $h = b\\sin A = 6\\sin(30^\\circ) = 3\\text{ cm}$. Aunque $a > h$ ($8 > 3$), comparamos ahora $a$ con el lado adyacente $b$: como $a = 8 \\ge b = 6$, el lado opuesto es mayor o igual que el lado adyacente. Un arco trazado desde $C$ con radio $a = 8$ intersecta la recta base en dos puntos, pero uno de ellos queda a la izquierda del vértice $A$ produciendo un ángulo obtuso exterior incompatible con el triángulo. Por lo tanto, solo existe una única solución admisible.",
    "stepByStepDerivation": [
      "Calcular h = 6 · sin(30°) = 3 cm.",
      "Constatar que a = 8 > h = 3.",
      "Comparar a con b: a = 8 ≥ b = 6.",
      "Criterio LLA: cuando a ≥ b, solo se forma 1 triángulo."
    ],
    "distractorRationale": {
      "A": "Correcto. a >= b siempre produce una única solución geométrica.",
      "B": "Para 2 soluciones es estrictamente necesario que a < b.",
      "C": "Como a > h, la existencia de solución está garantizada.",
      "D": "La geometría euclidiana plana no admite 3 soluciones para LLA."
    }
  },
  {
    "id": "ing-82",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Cálculo del Área Triangular mediante Fórmula Trigonométrica",
    "problemStatement": "Un terreno triangular tiene lados adyacentes de longitudes $a = 6\\text{ m}$ y $b = 10\\text{ m}$ que forman un ángulo comprendido de $30^\\circ$. ¿Cuál es el área exacta del terreno?",
    "options": {
      "A": "$15\\text{ m}^2$",
      "B": "$30\\text{ m}^2$",
      "C": "$15\\sqrt{3}\\text{ m}^2$",
      "D": "$60\\text{ m}^2$"
    },
    "correctAnswer": "A",
    "formalSolution": "La fórmula trigonométrica del área de un triángulo dados dos lados y el ángulo comprendido es $\\text{Área} = \\frac{1}{2} a b \\sin C$. Sustituyendo: $\\text{Área} = \\frac{1}{2} (6\\text{ m}) (10\\text{ m}) \\sin(30^\\circ) = 30 \\cdot \\left(\\frac{1}{2}\\right) = 15\\text{ m}^2$.",
    "stepByStepDerivation": [
      "Fórmula: Área = (1/2) · a · b · sin(C).",
      "Sustituir: (1/2) · 6 · 10 · sin(30°).",
      "sin(30°) = 0.5.",
      "Área = 30 · 0.5 = 15 m^2."
    ],
    "distractorRationale": {
      "A": "Correcto. (1/2) * 6 * 10 * (1/2) = 15 m^2.",
      "B": "Error al olvidar multiplicar por el factor 1/2 de la fórmula triangular.",
      "C": "Error al utilizar cos(30°) = sqrt(3)/2 en lugar de sin(30°).",
      "D": "Producto directo de lados sin considerar ángulo ni geometría triangular."
    }
  },
  {
    "id": "ing-83",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Área Triangular mediante la Fórmula de Herón",
    "problemStatement": "Un triángulo tiene lados $a = 5$, $b = 6$ y $c = 7$. Calcule su área exacta utilizando la Fórmula de Herón.",
    "options": {
      "A": "$6\\sqrt{6}$",
      "B": "$12\\sqrt{3}$",
      "C": "$14.7$",
      "D": "$36$"
    },
    "correctAnswer": "A",
    "formalSolution": "El semiperímetro es $s = \\frac{a + b + c}{2} = \\frac{5 + 6 + 7}{2} = \\frac{18}{2} = 9$. Por la Fórmula de Herón: $\\text{Área} = \\sqrt{s(s - a)(s - b)(s - c)} = \\sqrt{9(9 - 5)(9 - 6)(9 - 7)} = \\sqrt{9(4)(3)(2)} = \\sqrt{216}$. Factorizando: $\\sqrt{216} = \\sqrt{36 \\cdot 6} = 6\\sqrt{6}$.",
    "stepByStepDerivation": [
      "Calcular semiperímetro: s = (5 + 6 + 7)/2 = 9.",
      "Calcular diferencias: (s - a) = 4, (s - b) = 3, (s - c) = 2.",
      "Producto radicando: 9 · 4 · 3 · 2 = 216.",
      "Simplificar radical: sqrt(216) = sqrt(36 · 6) = 6·sqrt(6)."
    ],
    "distractorRationale": {
      "A": "Correcto. sqrt(9 * 4 * 3 * 2) = sqrt(216) = 6*sqrt(6).",
      "B": "Error en la descomposición en factores primos del radicando.",
      "C": "Aproximación decimal que no refleja el valor algebraico exacto.",
      "D": "Error aritmético al calcular el producto bajo la raíz."
    }
  },
  {
    "id": "ing-84",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Radio de la Circunferencia Circunscrita (Circunradio)",
    "problemStatement": "En un triángulo $ABC$, el lado $a = 12\\text{ cm}$ se opone al ángulo $A = 30^\\circ$. ¿Cuál es el radio $R$ de la circunferencia circunscrita al triángulo?",
    "options": {
      "A": "$R = 12\\text{ cm}$",
      "B": "$R = 6\\text{ cm}$",
      "C": "$R = 24\\text{ cm}$",
      "D": "$R = 12\\sqrt{3}\\text{ cm}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La Ley extendida de los Senos establece que la razón entre cualquier lado y el seno de su ángulo opuesto es igual al diámetro de la circunferencia circunscrita: $\\frac{a}{\\sin A} = 2R$. Sustituyendo: $\\frac{12}{\\sin(30^\\circ)} = 2R \\implies \\frac{12}{1/2} = 2R \\implies 24 = 2R \\implies R = 12\\text{ cm}$.",
    "stepByStepDerivation": [
      "Aplicar Ley de Senos extendida: 2R = a / sin(A).",
      "Sustituir a = 12 y sin(30°) = 0.5: 2R = 12 / 0.5 = 24.",
      "Despejar el radio: R = 24 / 2 = 12 cm."
    ],
    "distractorRationale": {
      "A": "Correcto. R = a / (2·sin A) = 12 / (2 · 0.5) = 12 cm.",
      "B": "Error al dividir a entre 2 sin considerar el divisor sin(30°).",
      "C": "24 cm es el diámetro circunscrito (2R), no el radio.",
      "D": "Error al multiplicar por cos(30°)."
    }
  },
  {
    "id": "ing-85",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Radio de la Circunferencia Inscrita (Inradio)",
    "problemStatement": "Un triángulo tiene un área de $15\\text{ cm}^2$ y su perímetro total es de $20\\text{ cm}$. ¿Cuál es el radio $r$ de su circunferencia inscrita (inradio)?",
    "options": {
      "A": "$r = 1.5\\text{ cm}$",
      "B": "$r = 0.75\\text{ cm}$",
      "C": "$r = 3.0\\text{ cm}$",
      "D": "$r = 2.0\\text{ cm}$"
    },
    "correctAnswer": "A",
    "formalSolution": "El área de cualquier triángulo se relaciona con su inradio $r$ y su semiperímetro $s$ mediante la fórmula $\\text{Área} = r \\cdot s$. El semiperímetro es $s = \\frac{\\text{Perímetro}}{2} = \\frac{20}{2} = 10\\text{ cm}$. Despejando el inradio: $r = \\frac{\\text{Área}}{s} = \\frac{15}{10} = 1.5\\text{ cm}$.",
    "stepByStepDerivation": [
      "Calcular semiperímetro: s = 20 / 2 = 10 cm.",
      "Fórmula del inradio: r = Área / s.",
      "Sustituir valores: r = 15 / 10 = 1.5 cm."
    ],
    "distractorRationale": {
      "A": "Correcto. r = 15 / 10 = 1.5 cm.",
      "B": "Error al dividir entre el perímetro completo 20 en vez del semiperímetro 10 (15/20 = 0.75).",
      "C": "Error al multiplicar por 2 innecesariamente.",
      "D": "Estimación inexacta."
    }
  },
  {
    "id": "ing-86",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Composición de Función Trigonométrica y su Inversa",
    "problemStatement": "Simplifique la expresión algebraica $\\sin(\\arccos(x))$ para $x \\in [-1, 1]$.",
    "options": {
      "A": "$\\sqrt{1 - x^2}$",
      "B": "$\\frac{1}{\\sqrt{1 - x^2}}$",
      "C": "$1 - x$",
      "D": "$x$"
    },
    "correctAnswer": "A",
    "formalSolution": "Sea $\\theta = \\arccos(x)$, lo que implica $\\cos\\theta = x$ con $\\theta \\in [0, \\pi]$. En este intervalo, $\\sin\\theta \\ge 0$. Por la identidad pitagórica, $\\sin\\theta = \\sqrt{1 - \\cos^2\\theta} = \\sqrt{1 - x^2}$. Sustituyendo $\\theta$: $\\sin(\\arccos(x)) = \\sqrt{1 - x^2}$.",
    "stepByStepDerivation": [
      "Sea θ = arccos(x) ==> cos(θ) = x con θ ∈ [0, π].",
      "En [0, π], sin(θ) ≥ 0.",
      "Por Pitágoras: sin(θ) = sqrt(1 - cos^2(θ)).",
      "Sustituir cos(θ) = x: sin(arccos(x)) = sqrt(1 - x^2)."
    ],
    "distractorRationale": {
      "A": "Correcto. Identidad analítica universal para x en [-1, 1].",
      "B": "Esa es la derivada de arcsin(x), no el valor trigonométrico de la composición.",
      "C": "Aproximación errónea sin raíz cuadrada.",
      "D": "Solo sería x si fuese cos(arccos(x))."
    }
  },
  {
    "id": "ing-87",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Composición Tangente de Arcoseno",
    "problemStatement": "Calcule el valor exacto de $\\tan\\left(\\arcsin\\left(\\frac{3}{5}\\right)\\right)$.",
    "options": {
      "A": "$\\frac{3}{4}$",
      "B": "$\\frac{4}{3}$",
      "C": "$\\frac{3}{5}$",
      "D": "$\\frac{4}{5}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Sea $\\theta = \\arcsin(3/5)$. Entonces $\\sin\\theta = \\frac{3}{5}$ en el primer cuadrante. En un triángulo rectángulo con cateto opuesto 3 e hipotenusa 5, el cateto adyacente es $\\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = 4$. Por definición de tangente: $\\tan\\theta = \\frac{\\text{cateto opuesto}}{\\text{cateto adyacente}} = \\frac{3}{4}$.",
    "stepByStepDerivation": [
      "Sea θ = arcsin(3/5) ==> sin(θ) = 3/5.",
      "Cateto opuesto = 3, Hipotenusa = 5.",
      "Cateto adyacente = sqrt(5^2 - 3^2) = 4.",
      "tan(θ) = Opuesto / Adyacente = 3/4."
    ],
    "distractorRationale": {
      "A": "Correcto. 3 / 4.",
      "B": "Fracción invertida (cotangente).",
      "C": "Valor del seno, no de la tangente.",
      "D": "Valor del coseno (4/5)."
    }
  },
  {
    "id": "ing-88",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Composición Coseno de Arcotangente",
    "problemStatement": "Calcule el valor numérico exacto de $\\cos\\left(\\arctan\\left(\\frac{4}{3}\\right)\\right)$.",
    "options": {
      "A": "$\\frac{3}{5}$",
      "B": "$\\frac{4}{5}$",
      "C": "$\\frac{5}{3}$",
      "D": "$\\frac{3}{4}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Sea $\\theta = \\arctan(4/3) \\implies \\tan\\theta = \\frac{4}{3}$. En un triángulo rectángulo, el cateto opuesto es 4 y el cateto adyacente es 3. La hipotenusa es $\\sqrt{3^2 + 4^2} = 5$. Por lo tanto: $\\cos\\theta = \\frac{\\text{cateto adyacente}}{\\text{hipotenusa}} = \\frac{3}{5}$.",
    "stepByStepDerivation": [
      "Sea θ = arctan(4/3) ==> tan(θ) = 4/3.",
      "Cateto adyacente = 3, cateto opuesto = 4.",
      "Hipotenusa = sqrt(3^2 + 4^2) = 5.",
      "cos(θ) = Adyacente / Hipotenusa = 3/5."
    ],
    "distractorRationale": {
      "A": "Correcto. 3 / 5 = 0.6.",
      "B": "4/5 corresponde a sin(arctan(4/3)).",
      "C": "Fracción mayor a 1, imposible para un coseno.",
      "D": "Valor de cot(θ)."
    }
  },
  {
    "id": "ing-89",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Identidad de Cofunciones Inversas Complementarias",
    "problemStatement": "Para cualquier $x \\in [-1, 1]$, ¿cuál es el valor constante exacto de la suma $\\arcsin(x) + \\arccos(x)$?",
    "options": {
      "A": "$\\frac{\\pi}{2}$",
      "B": "$\\pi$",
      "C": "$0$",
      "D": "$2\\pi$"
    },
    "correctAnswer": "A",
    "formalSolution": "Sea $\\alpha = \\arcsin(x) \\implies \\sin\\alpha = x$, con $\\alpha \\in [-\\pi/2, \\pi/2]$. Por la identidad de cofunciones, $\\cos(\\pi/2 - \\alpha) = \\sin\\alpha = x$. Como $\\alpha \\in [-\\pi/2, \\pi/2]$, se tiene que $\\pi/2 - \\alpha \\in [0, \\pi]$, que coincide con el rango principal de la función arcocoseno. Por lo tanto, $\\arccos(x) = \\frac{\\pi}{2} - \\alpha = \\frac{\\pi}{2} - \\arcsin(x) \\implies \\arcsin(x) + \\arccos(x) = \\frac{\\pi}{2}$.",
    "stepByStepDerivation": [
      "Sea α = arcsin(x) ==> sin(α) = x.",
      "Usar cofunción: cos(π/2 - α) = sin(α) = x.",
      "Por definición de función inversa: arccos(x) = π/2 - α.",
      "Sumar α: arcsin(x) + arccos(x) = π/2."
    ],
    "distractorRationale": {
      "A": "Correcto. La suma de los ángulos complementarios en radianes es exactamente pi/2 (90°).",
      "B": "pi correspondería a ángulos suplementarios.",
      "C": "No se anulan mutuamente ya que arccos(x) está restringida a [0, pi].",
      "D": "Valor excedido."
    }
  },
  {
    "id": "ing-90",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Identidad de la Suma de Arcotangentes",
    "problemStatement": "Calcule el valor de la suma $\\arctan(1) + \\arctan(2) + \\arctan(3)$.",
    "options": {
      "A": "$\\pi$",
      "B": "$\\frac{\\pi}{2}$",
      "C": "$\\frac{3\\pi}{4}$",
      "D": "$2\\pi$"
    },
    "correctAnswer": "A",
    "formalSolution": "Sabemos que $\\arctan(1) = \\frac{\\pi}{4}$. Para $\\arctan(2) + \\arctan(3)$, como el producto $2 \\cdot 3 = 6 > 1$, la fórmula para $x, y > 0$ con $xy > 1$ exige sumar $\\pi$: $\\arctan(x) + \\arctan(y) = \\pi + \\arctan\\left(\\frac{x + y}{1 - xy}\\right) = \\pi + \\arctan\\left(\\frac{2 + 3}{1 - 6}\\right) = \\pi + \\arctan\\left(\\frac{5}{-5}\\right) = \\pi + \\arctan(-1) = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$. Sumando el primer término: $\\frac{\\pi}{4} + \\frac{3\\pi}{4} = \\pi$.",
    "stepByStepDerivation": [
      "arctan(1) = π/4.",
      "Para x = 2 e y = 3 con x·y > 1: arctan(2) + arctan(3) = π + arctan((2+3)/(1-6)).",
      "arctan(-1) = -π/4 ==> π - π/4 = 3π/4.",
      "Sumar los tres términos: π/4 + 3π/4 = π."
    ],
    "distractorRationale": {
      "A": "Correcto. Identidad clásica de la trigonometría analítica que suma exactamente pi.",
      "B": "Error al no sumar pi en la fórmula de adición cuando xy > 1.",
      "C": "3pi/4 es la suma de los dos últimos términos únicamente.",
      "D": "Sobreestimación."
    }
  },
  {
    "id": "ing-91",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Determinación de Periodo y Frecuencia de una Onda Sinusoidal",
    "problemStatement": "Para la señal armónica $y(t) = 5\\sin\\left(4\\pi t - \\frac{\\pi}{3}\\right)$, ¿cuál es el periodo fundamental $T$ y la frecuencia cíclica $f$?",
    "options": {
      "A": "Periodo $T = 0.5\\text{ s}$, Frecuencia $f = 2\\text{ Hz}$",
      "B": "Periodo $T = 2\\text{ s}$, Frecuencia $f = 0.5\\text{ Hz}$",
      "C": "Periodo $T = 4\\pi\\text{ s}$, Frecuencia $f = 4\\pi\\text{ Hz}$",
      "D": "Periodo $T = 0.25\\text{ s}$, Frecuencia $f = 4\\text{ Hz}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La frecuencia angular es el coeficiente temporal: $\\omega = 4\\pi\\text{ rad/s}$. La relación con el periodo es $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{4\\pi} = \\frac{1}{2} = 0.5\\text{ s}$. La frecuencia cíclica es el inverso del periodo: $f = \\frac{1}{T} = \\frac{1}{0.5} = 2\\text{ Hz}$.",
    "stepByStepDerivation": [
      "Identificar frecuencia angular: omega = 4π rad/s.",
      "Calcular periodo: T = 2π / omega = 2π / (4π) = 0.5 s.",
      "Calcular frecuencia: f = 1 / T = 2 Hz."
    ],
    "distractorRationale": {
      "A": "Correcto. T = 0.5 s y f = 2 Hz.",
      "B": "Inversión de valores entre periodo y frecuencia.",
      "C": "Confusión entre frecuencia angular omega y periodo T.",
      "D": "Error aritmético al calcular 2pi / 4pi."
    }
  },
  {
    "id": "ing-92",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Ecuación Trigonométrica con Secante",
    "problemStatement": "Resuelva la ecuación $\\sec(x) = -2$ para $x \\in [0, 2\\pi)$.",
    "options": {
      "A": "$x \\in \\left\\{ \\frac{2\\pi}{3}, \\frac{4\\pi}{3} \\right\\}$",
      "B": "$x \\in \\left\\{ \\frac{\\pi}{3}, \\frac{5\\pi}{3} \\right\\}$",
      "C": "$x \\in \\left\\{ \\frac{5\\pi}{6}, \\frac{7\\pi}{6} \\right\\}$",
      "D": "$x = \\pi$"
    },
    "correctAnswer": "A",
    "formalSolution": "Por la definición recíproca, $\\sec(x) = -2 \\iff \\cos(x) = -\\frac{1}{2}$. El ángulo de referencia es $\\frac{\\pi}{3}$. El coseno es negativo en los cuadrantes II y III: en el cuadrante II, $x = \\pi - \\frac{\\pi}{3} = \\frac{2\\pi}{3}$; en el cuadrante III, $x = \\pi + \\frac{\\pi}{3} = \\frac{4\\pi}{3}$.",
    "stepByStepDerivation": [
      "Invertir la función: cos(x) = 1 / sec(x) = -1/2.",
      "Ángulo de referencia: arccos(1/2) = π/3.",
      "Cuadrante II: x = π - π/3 = 2π/3.",
      "Cuadrante III: x = π + π/3 = 4π/3."
    ],
    "distractorRationale": {
      "A": "Correcto. 2pi/3 (120°) y 4pi/3 (240°).",
      "B": "Corresponde a sec(x) = +2 (cuadrantes I y IV).",
      "C": "Corresponde a cos(x) = -sqrt(3)/2.",
      "D": "sec(pi) = -1, no -2."
    }
  },
  {
    "id": "ing-93",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Ecuación Trigonométrica con Cotangente Cuadrática",
    "problemStatement": "Determine el conjunto de soluciones de $\\cot^2(x) = 3$ en el intervalo $(0, \\pi)$.",
    "options": {
      "A": "$x \\in \\left\\{ \\frac{\\pi}{6}, \\frac{5\\pi}{6} \\right\\}$",
      "B": "$x \\in \\left\\{ \\frac{\\pi}{3}, \\frac{2\\pi}{3} \\right\\}$",
      "C": "$x = \\frac{\\pi}{6}$ únicamente.",
      "D": "$x \\in \\left\\{ \\frac{\\pi}{4}, \\frac{3\\pi}{4} \\right\\}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Extrayendo raíz cuadrada a ambos miembros: $\\cot(x) = \\pm\\sqrt{3} \\iff \\tan(x) = \\pm\\frac{1}{\\sqrt{3}}$. En el intervalo $(0, \\pi)$: 1) $\\tan(x) = \\frac{1}{\\sqrt{3}} \\implies x = \\frac{\\pi}{6}$ (primer cuadrante). 2) $\\tan(x) = -\\frac{1}{\\sqrt{3}} \\implies x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ (segundo cuadrante).",
    "stepByStepDerivation": [
      "cot^2(x) = 3 ==> cot(x) = ±sqrt(3).",
      "Equivale a tan(x) = ±1/sqrt(3).",
      "En (0, π): x_1 = π/6 y x_2 = 5π/6."
    ],
    "distractorRationale": {
      "A": "Correcto. pi/6 y 5pi/6 en el intervalo abierto (0, pi).",
      "B": "Corresponde a cot^2(x) = 1/3 (tan^2(x) = 3).",
      "C": "Solución incompleta al omitir la raíz negativa -sqrt(3).",
      "D": "Corresponde a cot^2(x) = 1."
    }
  },
  {
    "id": "ing-94",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Fórmula de Euler y Expresión Compleja del Coseno",
    "problemStatement": "Según la Fórmula de Euler $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, ¿cuál es la expresión exacta de $\\cos\\theta$ en términos exponenciales complejos?",
    "options": {
      "A": "$\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}$",
      "B": "$\\cos\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$",
      "C": "$\\cos\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2}$",
      "D": "$\\cos\\theta = e^{i\\theta} + e^{-i\\theta}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Evaluamos $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ y $e^{-i\\theta} = \\cos(-\\theta) + i\\sin(-\\theta) = \\cos\\theta - i\\sin\\theta$. Sumando ambas ecuaciones: $e^{i\\theta} + e^{-i\\theta} = 2\\cos\\theta$. Dividiendo entre 2: $\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}$.",
    "stepByStepDerivation": [
      "e^(iθ) = cos θ + i·sin θ.",
      "e^(-iθ) = cos θ - i·sin θ.",
      "Sumar ecuaciones: e^(iθ) + e^(-iθ) = 2·cos θ.",
      "Dividir entre 2: cos θ = (e^(iθ) + e^(-iθ)) / 2."
    ],
    "distractorRationale": {
      "A": "Correcto. Fórmula exponencial canónica del coseno.",
      "B": "Corresponde a sin(θ) = (e^(iθ) - e^(-iθ)) / (2i).",
      "C": "Corresponde a sinh(iθ) / i sin el factor imaginario correcto.",
      "D": "Falta dividir entre 2."
    }
  },
  {
    "id": "ing-95",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Fórmula de Euler y Expresión Compleja del Seno",
    "problemStatement": "¿Cuál es la representación exponencial compleja de $\\sin\\theta$ mediante la fórmula de Euler?",
    "options": {
      "A": "$\\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$",
      "B": "$\\sin\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}$",
      "C": "$\\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2}$",
      "D": "$\\sin\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2i}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Restando las identidades de Euler: $e^{i\\theta} - e^{-i\\theta} = (\\cos\\theta + i\\sin\\theta) - (\\cos\\theta - i\\sin\\theta) = 2i\\sin\\theta$. Dividiendo entre $2i$: $\\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$.",
    "stepByStepDerivation": [
      "Restar e^(iθ) - e^(-iθ) = 2i·sin(θ).",
      "Dividir entre 2i: sin(θ) = (e^(iθ) - e^(-iθ)) / (2i)."
    ],
    "distractorRationale": {
      "A": "Correcto. Representación compleja canónica del seno.",
      "B": "Corresponde al coseno cos(θ).",
      "C": "Esa expresión da i·sin(θ), falta el divisor i.",
      "D": "Signo erróneo en el numerador."
    }
  },
  {
    "id": "ing-96",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Teorema de De Moivre para Potencias de Números Complejos",
    "problemStatement": "Utilizando la forma trigonométrica y el Teorema de De Moivre, calcule el valor exacto de $(1 + i)^8$.",
    "options": {
      "A": "$16$",
      "B": "$16i$",
      "C": "$-16$",
      "D": "$8$"
    },
    "correctAnswer": "A",
    "formalSolution": "El módulo de $z = 1 + i$ es $r = \\sqrt{1^2 + 1^2} = \\sqrt{2}$, y su argumento es $\\theta = \\frac{\\pi}{4}$. En forma polar: $z = \\sqrt{2} \\left(\\cos\\frac{\\pi}{4} + i\\sin\\frac{\\pi}{4}\\right)$. Por el Teorema de De Moivre: $z^8 = (\\sqrt{2})^8 \\left[\\cos\\left(8 \\cdot \\frac{\\pi}{4}\\right) + i\\sin\\left(8 \\cdot \\frac{\\pi}{4}\\right)\\right] = 2^4 [\\cos(2\\pi) + i\\sin(2\\pi)] = 16(1 + 0i) = 16$.",
    "stepByStepDerivation": [
      "Módulo: r = sqrt(1^2 + 1^2) = sqrt(2).",
      "Argumento: θ = arctan(1/1) = π/4.",
      "Aplicar De Moivre a la potencia 8: r^8 = (sqrt(2))^8 = 2^4 = 16.",
      "Argumento multiplicado: 8 · (π/4) = 2π.",
      "cos(2π) + i·sin(2π) = 1 + 0i = 1.",
      "Resultado: 16 · 1 = 16."
    ],
    "distractorRationale": {
      "A": "Correcto. (sqrt(2))^8 * (cos 2pi + i sin 2pi) = 16 * 1 = 16.",
      "B": "Error al asumir que el resultado conserva componente imaginaria (sin(2pi) = 0).",
      "C": "Error de signo en el coseno de 2pi.",
      "D": "Confusión entre el exponente 8 y el módulo."
    }
  },
  {
    "id": "ing-97",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Raíces Complejas de la Unidad y Geometría en el Plano de Argand",
    "problemStatement": "Las tres raíces cúbicas de la unidad ($z^3 = 1$) son $1$, $-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$ y $-\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$. ¿Cuál es la suma de estas tres raíces y qué figura geométrica forman en el plano complejo?",
    "options": {
      "A": "La suma es $0$, y forman los vértices de un triángulo equilátero inscrito en la circunferencia unitaria.",
      "B": "La suma es $1$, y forman una línea recta horizontal.",
      "C": "La suma es $3$, y forman un triángulo rectángulo.",
      "D": "La suma es $i$, y forman un cuadrado."
    },
    "correctAnswer": "A",
    "formalSolution": "Sumando las tres raíces: $1 + \\left(-\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}\\right) + \\left(-\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}\\right) = 1 - \\frac{1}{2} - \\frac{1}{2} + i\\left(\\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{3}}{2}\\right) = 0$. Por el Teorema Fundamental del Álgebra y las propiedades de las raíces $n$-ésimas de la unidad, los afijos dividen la circunferencia unitaria $|z| = 1$ en tres arcos iguales de $120^\\circ$ ($2\\pi/3$), constituyendo los vértices de un triángulo equilátero perfecto centrado en el origen.",
    "stepByStepDerivation": [
      "Sumar partes reales: 1 - 0.5 - 0.5 = 0.",
      "Sumar partes imaginarias: sqrt(3)/2 - sqrt(3)/2 = 0.",
      "Suma total = 0.",
      "Ángulos: 0°, 120°, 240° ==> polígono regular de 3 lados (triángulo equilátero)."
    ],
    "distractorRationale": {
      "A": "Correcto. Suma nula y triángulo equilátero en el plano complejo.",
      "B": "La suma es estrictamente cero, no 1.",
      "C": "Los tres vértices no son colineales ni rectangulares.",
      "D": "Un cuadrado requeriría 4 raíces (raíces cuartas)."
    }
  },
  {
    "id": "ing-98",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Identidad del Ángulo Triple para el Seno",
    "problemStatement": "¿Cuál es la identidad que expresa $\\sin(3\\theta)$ en términos de potencias de $\\sin\\theta$?",
    "options": {
      "A": "$\\sin(3\\theta) = 3\\sin\\theta - 4\\sin^3\\theta$",
      "B": "$\\sin(3\\theta) = 4\\sin^3\\theta - 3\\sin\\theta$",
      "C": "$\\sin(3\\theta) = 3\\sin\\theta + 4\\sin^3\\theta$",
      "D": "$\\sin(3\\theta) = 3\\sin\\theta\\cos^2\\theta$"
    },
    "correctAnswer": "A",
    "formalSolution": "Escribimos $\\sin(3\\theta) = \\sin(2\\theta + \\theta) = \\sin(2\\theta)\\cos\\theta + \\cos(2\\theta)\\sin\\theta$. Sustituyendo las identidades de ángulo doble: $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$ y $\\cos(2\\theta) = 1 - 2\\sin^2\\theta$: $\\sin(3\\theta) = (2\\sin\\theta\\cos\\theta)\\cos\\theta + (1 - 2\\sin^2\\theta)\\sin\\theta = 2\\sin\\theta\\cos^2\\theta + \\sin\\theta - 2\\sin^3\\theta$. Como $\\cos^2\\theta = 1 - \\sin^2\\theta$: $2\\sin\\theta(1 - \\sin^2\\theta) + \\sin\\theta - 2\\sin^3\\theta = 2\\sin\\theta - 2\\sin^3\\theta + \\sin\\theta - 2\\sin^3\\theta = 3\\sin\\theta - 4\\sin^3\\theta$.",
    "stepByStepDerivation": [
      "sin(3θ) = sin(2θ + θ) = sin(2θ)cos(θ) + cos(2θ)sin(θ).",
      "= (2 sin θ cos θ) cos θ + (1 - 2 sin^2 θ) sin θ.",
      "= 2 sin θ cos^2 θ + sin θ - 2 sin^3 θ.",
      "= 2 sin θ (1 - sin^2 θ) + sin θ - 2 sin^3 θ.",
      "= 2 sin θ - 2 sin^3 θ + sin θ - 2 sin^3 θ = 3 sin θ - 4 sin^3 θ."
    ],
    "distractorRationale": {
      "A": "Correcto. Identidad clásica de triple ángulo para el seno.",
      "B": "Signos invertidos.",
      "C": "Error al sumar el término cúbico en lugar de restarlo.",
      "D": "Expresión incompleta que ignora el desarrollo del coseno del ángulo doble."
    }
  },
  {
    "id": "ing-99",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Identidad del Ángulo Triple para el Coseno",
    "problemStatement": "¿Cuál es la fórmula del ángulo triple para $\\cos(3\\theta)$?",
    "options": {
      "A": "$\\cos(3\\theta) = 4\\cos^3\\theta - 3\\cos\\theta$",
      "B": "$\\cos(3\\theta) = 3\\cos\\theta - 4\\cos^3\\theta$",
      "C": "$\\cos(3\\theta) = 4\\cos^3\\theta + 3\\cos\\theta$",
      "D": "$\\cos(3\\theta) = 3\\cos^2\\theta - 1$"
    },
    "correctAnswer": "A",
    "formalSolution": "Desarrollamos $\\cos(3\\theta) = \\cos(2\\theta + \\theta) = \\cos(2\\theta)\\cos\\theta - \\sin(2\\theta)\\sin\\theta$. Sustituyendo $\\cos(2\\theta) = 2\\cos^2\\theta - 1$ y $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$: $\\cos(3\\theta) = (2\\cos^2\\theta - 1)\\cos\\theta - (2\\sin\\theta\\cos\\theta)\\sin\\theta = 2\\cos^3\\theta - \\cos\\theta - 2\\cos\\theta\\sin^2\\theta$. Sustituyendo $\\sin^2\\theta = 1 - \\cos^2\\theta$: $2\\cos^3\\theta - \\cos\\theta - 2\\cos\\theta(1 - \\cos^2\\theta) = 2\\cos^3\\theta - \\cos\\theta - 2\\cos\\theta + 2\\cos^3\\theta = 4\\cos^3\\theta - 3\\cos\\theta$.",
    "stepByStepDerivation": [
      "cos(3θ) = cos(2θ + θ) = cos(2θ)cos(θ) - sin(2θ)sin(θ).",
      "= (2 cos^2 θ - 1) cos θ - (2 sin θ cos θ) sin θ.",
      "= 2 cos^3 θ - cos θ - 2 cos θ sin^2 θ.",
      "= 2 cos^3 θ - cos θ - 2 cos θ (1 - cos^2 θ).",
      "= 2 cos^3 θ - cos θ - 2 cos θ + 2 cos^3 θ = 4 cos^3 θ - 3 cos θ."
    ],
    "distractorRationale": {
      "A": "Correcto. cos(3θ) = 4 cos^3(θ) - 3 cos(θ).",
      "B": "Signos invertidos (confusión con la estructura del seno).",
      "C": "Error al sumar en lugar de restar el término lineal.",
      "D": "Expresión de segundo orden incorrecta."
    }
  },
  {
    "id": "ing-100",
    "category": "trigonometria-analitica",
    "categoryLabel": "Trigonometría Analítica",
    "topic": "Eliminación del Parámetro Angular en Trayectorias Paramétricas",
    "problemStatement": "Una partícula describe una trayectoria en el plano definida por las ecuaciones paramétricas: $x(t) = 3\\cos(t)$, $y(t) = 2\\sin(t)$, con $t \\in [0, 2\\pi)$. ¿Qué curva describe la partícula al eliminar el parámetro angular $t$?",
    "options": {
      "A": "Una Elipse con centro en el origen, semieje mayor horizontal $a = 3$ y semieje menor vertical $b = 2$: $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$.",
      "B": "Una Circunferencia de radio 3.",
      "C": "Una Hipérbola equilátera.",
      "D": "Una Parábola con vértice en el origen."
    },
    "correctAnswer": "A",
    "formalSolution": "Despejamos las funciones trigonométricas: $\\cos(t) = \\frac{x}{3}$ y $\\sin(t) = \\frac{y}{2}$. Aplicamos la identidad pitagórica fundamental $\\cos^2(t) + \\sin^2(t) = 1$: $\\left(\\frac{x}{3}\\right)^2 + \\left(\\frac{y}{2}\\right)^2 = 1 \\implies \\frac{x^2}{9} + \\frac{y^2}{4} = 1$. Esta es la ecuación canónica cartesiana de una elipse centrada en el origen con semiejes $a = 3$ y $b = 2$.",
    "stepByStepDerivation": [
      "Despejar cos(t) = x / 3.",
      "Despejar sin(t) = y / 2.",
      "Aplicar identidad pitagórica: cos^2(t) + sin^2(t) = 1.",
      "Sustituir: (x/3)^2 + (y/2)^2 = 1 ==> x^2/9 + y^2/4 = 1.",
      "Concluir que describe una elipse horizontal."
    ],
    "distractorRationale": {
      "A": "Correcto. x^2/9 + y^2/4 = 1 es una elipse de semiejes 3 y 2.",
      "B": "Solo sería circunferencia si los coeficientes fuesen iguales (x = 3 cos t, y = 3 sin t).",
      "C": "Una hipérbola requeriría funciones hiperbólicas (cosh t, sinh t) o secante/tangente.",
      "D": "Una parábola relacionaría x lineal con y cuadrático."
    }
  },
  {
    "id": "ing-101",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Ecuación Canónica y Elementos Focales de la Elipse",
    "problemStatement": "Dada la elipse con ecuación $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$, ¿cuál es el valor exacto de su excentricidad $e$ y las coordenadas de sus focos?",
    "options": {
      "A": "Excentricidad $e = \\frac{4}{5}$ y focos en $(\\pm 4, 0)$.",
      "B": "Excentricidad $e = \\frac{3}{5}$ y focos en $(0, \\pm 4)$.",
      "C": "Excentricidad $e = \\frac{5}{4}$ y focos en $(\\pm 5, 0)$.",
      "D": "Excentricidad $e = 1$ y focos en $(\\pm 3, 0)$."
    },
    "correctAnswer": "A",
    "formalSolution": "Como $25 > 9$, el eje mayor es horizontal coincidente con el eje $x$, con $a^2 = 25 \\implies a = 5$ y $b^2 = 9 \\implies b = 3$. La relación fundamental de la elipse es $a^2 = b^2 + c^2 \\implies c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$. Los focos se ubican sobre el eje mayor en $(\\pm c, 0) = (\\pm 4, 0)$. La excentricidad es la razón $e = \\frac{c}{a} = \\frac{4}{5} = 0.8 < 1$.",
    "stepByStepDerivation": [
      "Identificar semiejes: a = 5, b = 3.",
      "Calcular semidistancia focal: c = sqrt(a^2 - b^2) = sqrt(25 - 9) = 4.",
      "Ubicación de focos en eje mayor horizontal: F1(-4, 0) y F2(4, 0).",
      "Calcular excentricidad: e = c / a = 4 / 5 = 0.8."
    ],
    "distractorRationale": {
      "A": "Correcto. Focos en (+/-4, 0) y excentricidad 4/5.",
      "B": "Error al orientar los focos sobre el eje vertical y valor erróneo de e.",
      "C": "e = 5/4 > 1 corresponde a una hipérbola, nunca a una elipse.",
      "D": "e = 1 corresponde a una parábola."
    }
  },
  {
    "id": "ing-102",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Clasificación de Cónica General por Discriminante",
    "problemStatement": "La ecuación general de segundo grado $x^2 - 4xy + 4y^2 + 2x - 3y + 1 = 0$ representa en el plano cartesiano:",
    "options": {
      "A": "Una Parábola (o cónica de tipo parabólico), porque su discriminante es $\\Delta = B^2 - 4AC = 0$.",
      "B": "Una Elipse, porque los coeficientes cuadráticos $A$ y $C$ son positivos.",
      "C": "Una Hipérbola equilátera, debido al término mixto $xy$.",
      "D": "Una Circunferencia de radio 2."
    },
    "correctAnswer": "A",
    "formalSolution": "Para la ecuación general $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$, los coeficientes cuadráticos son $A = 1$, $B = -4$, $C = 4$. Calculamos el discriminante invariante: $\\Delta = B^2 - 4AC = (-4)^2 - 4(1)(4) = 16 - 16 = 0$. Cuando el discriminante es exactamente cero ($\\Delta = 0$), la sección cónica pertenece al género parabólico.",
    "stepByStepDerivation": [
      "Extraer coeficientes: A = 1, B = -4, C = 4.",
      "Formular discriminante: Δ = B^2 - 4AC.",
      "Calcular: (-4)^2 - 4(1)(4) = 16 - 16 = 0.",
      "Criterio de clasificación: Δ = 0 define género parabólico."
    ],
    "distractorRationale": {
      "A": "Correcto. B^2 - 4AC = 16 - 16 = 0 clasifica inequívocamente a una parábola.",
      "B": "Para ser elipse se requeriría estrictamente B^2 - 4AC < 0.",
      "C": "Para ser hipérbola se requeriría B^2 - 4AC > 0.",
      "D": "La presencia de B = -4xy y coeficientes cuadráticos desiguales impide la forma circular."
    }
  },
  {
    "id": "ing-103",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Centro y Radio de Circunferencia por Completación de Cuadrados",
    "problemStatement": "Dada la ecuación general de la circunferencia $x^2 + y^2 - 6x + 8y - 11 = 0$, determine las coordenadas de su centro $C(h, k)$ y la longitud de su radio $r$.",
    "options": {
      "A": "Centro $C(3, -4)$ y radio $r = 6$.",
      "B": "Centro $C(-3, 4)$ y radio $r = 6$.",
      "C": "Centro $C(3, -4)$ y radio $r = 36$.",
      "D": "Centro $C(-6, 8)$ y radio $r = 11$."
    },
    "correctAnswer": "A",
    "formalSolution": "Completamos cuadrados en $x$ e $y$: $(x^2 - 6x + 9) + (y^2 + 8y + 16) = 11 + 9 + 16 \\implies (x - 3)^2 + (y + 4)^2 = 36$. Comparando con la forma ordinaria $(x - h)^2 + (y - k)^2 = r^2$, identificamos: centro $(h, k) = (3, -4)$ y radio $r = \\sqrt{36} = 6$.",
    "stepByStepDerivation": [
      "Agrupar términos: (x^2 - 6x) + (y^2 + 8y) = 11.",
      "Completar cuadrados: (x - 3)^2 - 9 + (y + 4)^2 - 16 = 11.",
      "Sumar constantes: (x - 3)^2 + (y + 4)^2 = 11 + 9 + 16 = 36.",
      "Extraer centro (3, -4) y radio r = sqrt(36) = 6."
    ],
    "distractorRationale": {
      "A": "Correcto. C(3, -4) y r = sqrt(36) = 6.",
      "B": "Error de signos en las coordenadas del centro.",
      "C": "Error al tomar r^2 = 36 en lugar de extraer la raíz cuadrada r = 6.",
      "D": "Error al tomar directamente los coeficientes lineales D y E."
    }
  },
  {
    "id": "ing-104",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Ecuación de la Recta Tangente a una Circunferencia",
    "problemStatement": "¿Cuál es la ecuación general de la recta tangente a la circunferencia $x^2 + y^2 = 25$ en el punto $P(3, 4)$?",
    "options": {
      "A": "$3x + 4y - 25 = 0$",
      "B": "$4x - 3y = 0$",
      "C": "$3x - 4y + 7 = 0$",
      "D": "$4x + 3y - 24 = 0$"
    },
    "correctAnswer": "A",
    "formalSolution": "Para una circunferencia centrada en el origen $x^2 + y^2 = r^2$, la recta tangente en un punto de contacto $(x_0, y_0)$ viene dada por la fórmula del desdoblamiento de variables: $x_0 x + y_0 y = r^2$. Sustituyendo $(x_0, y_0) = (3, 4)$ y $r^2 = 25$: $3x + 4y = 25 \\implies 3x + 4y - 25 = 0$. Alternativamente, el radio tiene pendiente $m_{rad} = 4/3$; la tangente es perpendicular con pendiente $m_{tan} = -3/4$: $y - 4 = -\\frac{3}{4}(x - 3) \\implies 4y - 16 = -3x + 9 \\implies 3x + 4y - 25 = 0$.",
    "stepByStepDerivation": [
      "Pendiente del radio vector OP: m_r = 4 / 3.",
      "Pendiente perpendicular de la tangente: m_t = -1 / (4/3) = -3/4.",
      "Ecuación punto-pendiente: y - 4 = (-3/4)(x - 3).",
      "Desarrollar: 4(y - 4) = -3(x - 3) ==> 4y - 16 = -3x + 9 ==> 3x + 4y - 25 = 0."
    ],
    "distractorRationale": {
      "A": "Correcto. 3x + 4y - 25 = 0.",
      "B": "Esa es la recta normal perpendicular que pasa por el centro (4x - 3y = 0).",
      "C": "Error de signos en los coeficientes.",
      "D": "Pendiente invertida erróneamente."
    }
  },
  {
    "id": "ing-105",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Condición de Tangencia entre Recta y Circunferencia",
    "problemStatement": "¿Para qué valores de la constante $k$ la recta $y = x + k$ es tangente a la circunferencia $x^2 + y^2 = 8$?",
    "options": {
      "A": "$k = \\pm 4$",
      "B": "$k = \\pm 2\\sqrt{2}$",
      "C": "$k = \\pm 8$",
      "D": "$k = \\pm 2$"
    },
    "correctAnswer": "A",
    "formalSolution": "La distancia desde el centro $(0, 0)$ de la circunferencia a la recta tangente $x - y + k = 0$ debe ser exactamente igual al radio $r = \\sqrt{8} = 2\\sqrt{2}$. La fórmula de distancia de un punto a una recta es: $d = \\frac{|Ax_0 + By_0 + C|}{\\sqrt{A^2 + B^2}} = \\frac{|0 - 0 + k|}{\\sqrt{1^2 + (-1)^2}} = \\frac{|k|}{\\sqrt{2}}$. Igualando al radio: $\\frac{|k|}{\\sqrt{2}} = \\sqrt{8} \\implies |k| = \\sqrt{2} \\cdot \\sqrt{8} = \\sqrt{16} = 4 \\implies k = \\pm 4$.",
    "stepByStepDerivation": [
      "Identificar centro C(0, 0) y radio r = sqrt(8).",
      "Escribir la recta en forma general: x - y + k = 0.",
      "Distancia de (0, 0) a la recta: d = |k| / sqrt(1^2 + (-1)^2) = |k| / sqrt(2).",
      "Condición de tangencia d = r: |k| / sqrt(2) = sqrt(8).",
      "Despejar: |k| = sqrt(16) = 4 ==> k = ±4."
    ],
    "distractorRationale": {
      "A": "Correcto. |k| = sqrt(2)*sqrt(8) = 4 ==> k = ±4.",
      "B": "Confusión al igualar k directamente al radio r = 2*sqrt(2).",
      "C": "Error al multiplicar por 2 sin extraer la raíz cuadrada.",
      "D": "Error en el despeje algebraico."
    }
  },
  {
    "id": "ing-106",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Elementos de la Parábola Horizontal Canónica",
    "problemStatement": "Dada la parábola con ecuación canónica $y^2 = 12x$, determine las coordenadas de su foco $F$, la ecuación de su directriz $D$ y la longitud de su lado recto $LR$.",
    "options": {
      "A": "Foco $F(3, 0)$, Directriz $x = -3$, Lado Recto $LR = 12$.",
      "B": "Foco $F(0, 3)$, Directriz $y = -3$, Lado Recto $LR = 12$.",
      "C": "Foco $F(6, 0)$, Directriz $x = -6$, Lado Recto $LR = 6$.",
      "D": "Foco $F(-3, 0)$, Directriz $x = 3$, Lado Recto $LR = 24$."
    },
    "correctAnswer": "A",
    "formalSolution": "La forma canónica de una parábola horizontal con vértice en el origen abierta hacia la derecha es $y^2 = 4px$. Igualando coeficientes: $4p = 12 \\implies p = 3$. Como el eje focal coincide con el eje $x$, el foco se localiza en $(p, 0) = (3, 0)$. La directriz es la recta vertical $x = -p \\implies x = -3$. La longitud del lado recto es $LR = |4p| = 12$.",
    "stepByStepDerivation": [
      "Comparar y^2 = 12x con y^2 = 4px.",
      "4p = 12 ==> parámetro focal p = 3.",
      "Foco sobre el eje x: F(p, 0) = (3, 0).",
      "Directriz perpendicular al eje: x = -p = -3.",
      "Longitud del lado recto: LR = 4p = 12."
    ],
    "distractorRationale": {
      "A": "Correcto. F(3, 0), directriz x = -3 y LR = 12.",
      "B": "Error al orientar la parábola verticalmente sobre el eje y.",
      "C": "Error al tomar 2p en lugar de 4p.",
      "D": "Parábola abierta hacia la izquierda con signo negativo no presente."
    }
  },
  {
    "id": "ing-107",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Parábola Vertical con Vértice Desplazado",
    "problemStatement": "Determine el vértice $V$, el foco $F$ y la directriz de la parábola $(x - 2)^2 = -8(y - 3)$.",
    "options": {
      "A": "Vértice $V(2, 3)$, Foco $F(2, 1)$, Directriz $y = 5$.",
      "B": "Vértice $V(2, 3)$, Foco $F(2, 5)$, Directriz $y = 1$.",
      "C": "Vértice $V(-2, -3)$, Foco $F(-2, -5)$, Directriz $y = -1$.",
      "D": "Vértice $V(3, 2)$, Foco $F(1, 2)$, Directriz $x = 5$."
    },
    "correctAnswer": "A",
    "formalSolution": "La ecuación ordinaria es $(x - h)^2 = 4p(y - k)$, con vértice $V(h, k) = (2, 3)$. Igualando coeficientes: $4p = -8 \\implies p = -2$. Al ser $p < 0$, la parábola se abre hacia abajo a lo largo del eje vertical $x = 2$. Las coordenadas del foco son $F(h, k + p) = (2, 3 + (-2)) = (2, 1)$. La ecuación de la directriz horizontal es $y = k - p = 3 - (-2) = 5$.",
    "stepByStepDerivation": [
      "Identificar vértice: (h, k) = (2, 3).",
      "4p = -8 ==> p = -2 (abre hacia abajo).",
      "Foco: (h, k + p) = (2, 3 - 2) = (2, 1).",
      "Directriz: y = k - p = 3 - (-2) = 5."
    ],
    "distractorRationale": {
      "A": "Correcto. V(2, 3), F(2, 1) y directriz y = 5.",
      "B": "Error al abrir la parábola hacia arriba sumando |p| al foco.",
      "C": "Error de signos en las coordenadas del vértice.",
      "D": "Inversión de las variables x e y."
    }
  },
  {
    "id": "ing-108",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Parábola Horizontal con Vértice Fuera del Origen",
    "problemStatement": "La parábola $(y + 1)^2 = 16(x - 2)$ tiene su foco en el punto:",
    "options": {
      "A": "$F(6, -1)$",
      "B": "$F(-2, -1)$",
      "C": "$F(2, 3)$",
      "D": "$F(4, -1)$"
    },
    "correctAnswer": "A",
    "formalSolution": "La forma es $(y - k)^2 = 4p(x - h)$. El vértice es $V(h, k) = (2, -1)$. Como $4p = 16$, tenemos $p = 4$. Dado que la parábola es horizontal y abre hacia la derecha ($p > 0$), el foco se desplaza $p$ unidades a la derecha del vértice: $F(h + p, k) = (2 + 4, -1) = (6, -1)$.",
    "stepByStepDerivation": [
      "Vértice: V(2, -1).",
      "4p = 16 ==> p = 4.",
      "Parábola horizontal que abre hacia la derecha.",
      "Foco: (h + p, k) = (2 + 4, -1) = (6, -1)."
    ],
    "distractorRationale": {
      "A": "Correcto. F(2 + 4, -1) = (6, -1).",
      "B": "Corresponde a restar p en lugar de sumarlo (x = -2 es la directriz).",
      "C": "Desplazamiento erróneo en el eje vertical y.",
      "D": "Error al sumar p = 2 en lugar de p = 4."
    }
  },
  {
    "id": "ing-109",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Lado Recto y Cuerda Focal de la Parábola",
    "problemStatement": "¿Cuál es la longitud del lado recto (ancho focal) de la parábola cuya directriz es la recta $x = -5$ y cuyo vértice es el origen $(0, 0)$?",
    "options": {
      "A": "$20$",
      "B": "$10$",
      "C": "$5$",
      "D": "$40$"
    },
    "correctAnswer": "A",
    "formalSolution": "La distancia desde el vértice a la directriz es $|p| = 5$. Como el vértice está en $(0, 0)$ y la directriz es $x = -5$, el parámetro focal es $p = 5$ y la parábola abre hacia la derecha ($y^2 = 4px = 20x$). Por definición, la longitud del lado recto es $LR = |4p| = 4(5) = 20$.",
    "stepByStepDerivation": [
      "Distancia del vértice a la directriz: |p| = 5.",
      "Fórmula del lado recto: LR = |4p|.",
      "Calcular: LR = 4 · 5 = 20."
    ],
    "distractorRationale": {
      "A": "Correcto. LR = 4p = 4(5) = 20.",
      "B": "Corresponde a 2p (semiancho focal).",
      "C": "Es el valor del parámetro p únicamente.",
      "D": "Duplicación errónea del lado recto."
    }
  },
  {
    "id": "ing-110",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Recta Tangente a una Parábola en un Punto Dado",
    "problemStatement": "Determine la ecuación general de la recta tangente a la parábola $y^2 = 8x$ en el punto $P(2, 4)$.",
    "options": {
      "A": "$x - y + 2 = 0$",
      "B": "$x + y - 6 = 0$",
      "C": "$2x - y = 0$",
      "D": "$x - 2y + 6 = 0$"
    },
    "correctAnswer": "A",
    "formalSolution": "Derivando implícitamente respecto a $x$: $2y \\frac{dy}{dx} = 8 \\implies \\frac{dy}{dx} = \\frac{8}{2y} = \\frac{4}{y}$. En el punto $(2, 4)$, la pendiente de la recta tangente es $m = \\frac{4}{4} = 1$. Utilizando la ecuación punto-pendiente: $y - 4 = 1(x - 2) \\implies y - 4 = x - 2 \\implies x - y + 2 = 0$. (Alternativamente, por desdoblamiento: $y_0 y = 4(x + x_0) \\implies 4y = 4(x + 2) \\implies y = x + 2 \\implies x - y + 2 = 0$).",
    "stepByStepDerivation": [
      "Derivada implícita: 2y·y' = 8 ==> y' = 4/y.",
      "Evaluar en y = 4: pendiente m = 4 / 4 = 1.",
      "Ecuación de la recta: y - 4 = 1 · (x - 2).",
      "Forma general: x - y + 2 = 0."
    ],
    "distractorRationale": {
      "A": "Correcto. x - y + 2 = 0.",
      "B": "Pendiente negativa errónea m = -1.",
      "C": "Recta secante que pasa por el origen.",
      "D": "Error en la pendiente m = 1/2."
    }
  },
  {
    "id": "ing-111",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Propiedad Óptica y Focal de la Parábola",
    "problemStatement": "La propiedad geométrica fundamental que fundamenta el diseño de reflectores parabólicos, radares y antenas satelitales establece que:",
    "options": {
      "A": "Cualquier rayo incidente paralelo al eje de simetría de la parábola se refleja pasando necesariamente por su foco.",
      "B": "Todos los rayos que parten de la directriz se reflejan hacia el vértice.",
      "C": "La tangente en cualquier punto es perpendicular al eje mayor.",
      "D": "Los rayos emitidos desde el foco se concentran en el centro de curvatura."
    },
    "correctAnswer": "A",
    "formalSolution": "La propiedad reflectora de la parábola demuestra que la recta normal a la curva en cualquier punto biseca el ángulo formado por el segmento que une dicho punto con el foco y la semirrecta paralela al eje de simetría. En consecuencia, según la ley de reflexión de Snell, todo rayo paralelo al eje que incida en la parábola se refleja convergiendo exactamente en el foco.",
    "stepByStepDerivation": [
      "Definir propiedad geométrica de reflexión de la parábola.",
      "La normal biseca el ángulo entre el radio focal y la recta paralela al eje.",
      "Ángulo de incidencia = Ángulo de reflexión.",
      "Todo rayo paralelo converge en el foco geométrico F."
    ],
    "distractorRationale": {
      "A": "Correcto. Principio físico-matemático de concentración focal parabólica.",
      "B": "La directriz no emite rayos ópticos en el sistema reflector.",
      "C": "La tangente solo es perpendicular al eje en el vértice.",
      "D": "El centro de curvatura está al doble del foco y no es el punto de concentración colimada."
    }
  },
  {
    "id": "ing-112",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Elipse Vertical con Centro Desplazado",
    "problemStatement": "Dada la elipse $\\frac{(x - 1)^2}{9} + \\frac{(y - 2)^2}{25} = 1$, determine las coordenadas de sus dos focos.",
    "options": {
      "A": "$F_1(1, 6)$ y $F_2(1, -2)$",
      "B": "$F_1(5, 2)$ y $F_2(-3, 2)$",
      "C": "$F_1(1, 7)$ y $F_2(1, -3)$",
      "D": "$F_1(4, 2)$ y $F_2(-2, 2)$"
    },
    "correctAnswer": "A",
    "formalSolution": "El denominador mayor es 25 y se ubica bajo el término $y$, lo que indica que el eje mayor es vertical paralelo al eje $y$. Por tanto: $a^2 = 25 \\implies a = 5$, $b^2 = 9 \\implies b = 3$. El centro es $C(h, k) = (1, 2)$. La distancia focal es $c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$. Los focos se ubican sobre la recta vertical $x = 1$ sumando y restando $c$ a la ordenada del centro: $F_1(1, 2 + 4) = (1, 6)$ y $F_2(1, 2 - 4) = (1, -2)$.",
    "stepByStepDerivation": [
      "Centro C(1, 2).",
      "a^2 = 25 (a = 5) bajo y ==> eje mayor vertical.",
      "b^2 = 9 (b = 3).",
      "c = sqrt(25 - 9) = 4.",
      "Focos: (h, k ± c) = (1, 2 ± 4) ==> (1, 6) y (1, -2)."
    ],
    "distractorRationale": {
      "A": "Correcto. Focos en (1, 6) y (1, -2).",
      "B": "Error al asumir que el eje mayor es horizontal desplazando en x.",
      "C": "Error al usar a = 5 como distancia focal en lugar de c = 4.",
      "D": "Error en la orientación y cálculo de semidistancia focal."
    }
  },
  {
    "id": "ing-113",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Longitud de los Ejes Mayor y Menor de una Elipse",
    "problemStatement": "Dada la ecuación $9x^2 + 16y^2 = 144$, ¿cuáles son las longitudes del eje mayor y del eje menor?",
    "options": {
      "A": "Eje mayor $= 8$, Eje menor $= 6$",
      "B": "Eje mayor $= 4$, Eje menor $= 3$",
      "C": "Eje mayor $= 16$, Eje menor $= 9$",
      "D": "Eje mayor $= 32$, Eje menor $= 18$"
    },
    "correctAnswer": "A",
    "formalSolution": "Dividimos toda la ecuación entre 144 para obtener la forma canónica: $\\frac{9x^2}{144} + \\frac{16y^2}{144} = 1 \\implies \\frac{x^2}{16} + \\frac{y^2}{9} = 1$. Así, $a^2 = 16 \\implies a = 4$ (semieje mayor), y $b^2 = 9 \\implies b = 3$ (semieje menor). Las longitudes de los ejes completos son: eje mayor $= 2a = 2(4) = 8$, y eje menor $= 2b = 2(3) = 6$.",
    "stepByStepDerivation": [
      "Dividir entre 144: x^2 / 16 + y^2 / 9 = 1.",
      "Semieje mayor a = sqrt(16) = 4.",
      "Semieje menor b = sqrt(9) = 3.",
      "Longitud eje mayor = 2a = 8.",
      "Longitud eje menor = 2b = 6."
    ],
    "distractorRationale": {
      "A": "Correcto. 2a = 8 y 2b = 6.",
      "B": "Corresponde a los semiejes a = 4 y b = 3, no a los ejes completos.",
      "C": "Corresponde a a^2 y b^2.",
      "D": "Duplicación errónea de los cuadrados."
    }
  },
  {
    "id": "ing-114",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Excentricidad de la Elipse y Rango de Valores",
    "problemStatement": "¿Cuál es la relación analítica que define la excentricidad $e$ de una elipse y en qué intervalo numérico se encuentra estrictamente?",
    "options": {
      "A": "$e = \\frac{c}{a} = \\sqrt{1 - \\frac{b^2}{a^2}}$, con $0 < e < 1$.",
      "B": "$e = \\frac{a}{c}$, con $e > 1$.",
      "C": "$e = 1$ para toda elipse no degenerada.",
      "D": "$e = \\frac{b}{a}$, con $-1 < e < 0$."
    },
    "correctAnswer": "A",
    "formalSolution": "La excentricidad de una elipse mide el grado de achatamiento respecto a la circunferencia y se define como $e = \\frac{c}{a}$. Dado que $c = \\sqrt{a^2 - b^2}$, sustituyendo tenemos $e = \\frac{\\sqrt{a^2 - b^2}}{a} = \\sqrt{1 - \\frac{b^2}{a^2}}$. Como $a > b > 0$, el radicando $1 - \\frac{b^2}{a^2}$ está estrictamente entre 0 y 1, por lo que $0 < e < 1$. (Si $e = 0$, los ejes son iguales $a = b$ y se tiene una circunferencia).",
    "stepByStepDerivation": [
      "Definición: e = c / a.",
      "Sustituir c = sqrt(a^2 - b^2): e = sqrt(1 - (b/a)^2).",
      "Como 0 < b < a, se tiene 0 < (b/a)^2 < 1.",
      "Por lo tanto, 0 < e < 1 para toda elipse."
    ],
    "distractorRationale": {
      "A": "Correcto. e = c/a en (0, 1).",
      "B": "e > 1 corresponde a la hipérbola.",
      "C": "e = 1 corresponde a la parábola.",
      "D": "La excentricidad es una magnitud geométrica no negativa."
    }
  },
  {
    "id": "ing-115",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Lado Recto de la Elipse",
    "problemStatement": "Calcule la longitud del lado recto ($LR$) de la elipse $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.",
    "options": {
      "A": "$LR = \\frac{18}{5} = 3.6$",
      "B": "$LR = \\frac{9}{5} = 1.8$",
      "C": "$LR = \\frac{50}{9}$",
      "D": "$LR = 6$"
    },
    "correctAnswer": "A",
    "formalSolution": "La longitud del lado recto (cuerda focal perpendicular al eje mayor) de una elipse se calcula mediante la fórmula $LR = \\frac{2b^2}{a}$. Para la elipse dada: $a^2 = 25 \\implies a = 5$, y $b^2 = 9$. Sustituyendo directamente: $LR = \\frac{2(9)}{5} = \\frac{18}{5} = 3.6$.",
    "stepByStepDerivation": [
      "Identificar semiejes: a = 5, b^2 = 9.",
      "Fórmula del lado recto: LR = 2·b^2 / a.",
      "Sustituir valores: LR = 2 · 9 / 5 = 18 / 5 = 3.6."
    ],
    "distractorRationale": {
      "A": "Correcto. LR = 2*(9)/5 = 18/5 = 3.6.",
      "B": "Error al omitir el factor 2 en el numerador (b^2 / a = 1.8).",
      "C": "Fracción invertida 2a^2 / b.",
      "D": "Confusión con el eje menor 2b = 6."
    }
  },
  {
    "id": "ing-116",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Ecuaciones de las Directrices de una Elipse",
    "problemStatement": "Para la elipse $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$, ¿cuáles son las ecuaciones de sus dos rectas directrices?",
    "options": {
      "A": "$x = \\pm \\frac{25}{4} = \\pm 6.25$",
      "B": "$x = \\pm 4$",
      "C": "$y = \\pm \\frac{25}{4}$",
      "D": "$x = \\pm \\frac{16}{5}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Las directrices de una elipse con eje focal horizontal centrado en el origen son rectas verticales de ecuación $x = \\pm \\frac{a}{e}$. Con $a = 5$ y excentricidad $e = \\frac{c}{a} = \\frac{4}{5}$: $x = \\pm \\frac{5}{4/5} = \\pm \\frac{25}{4} = \\pm 6.25$.",
    "stepByStepDerivation": [
      "Semieje mayor a = 5.",
      "Excentricidad e = c/a = 4/5.",
      "Fórmula de directrices: x = ± a/e.",
      "Calcular: x = ± 5 / (4/5) = ± 25/4 = ± 6.25."
    ],
    "distractorRationale": {
      "A": "Correcto. x = ± 25/4 = ± 6.25.",
      "B": "x = ± 4 son las abscisas de los focos, no de las directrices.",
      "C": "Las directrices son perpendiculares al eje mayor horizontal, por tanto son rectas x = cte.",
      "D": "Fracción invertida en el cálculo."
    }
  },
  {
    "id": "ing-117",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Definición Geométrica y Suma Focal Constante de la Elipse",
    "problemStatement": "Un punto $P(x, y)$ se mueve en el plano de tal manera que la suma de sus distancias a los puntos fijos $F_1(-3, 0)$ y $F_2(3, 0)$ es constantemente igual a $10$. ¿Cuál es la ecuación cartesiana del lugar geométrico descrito?",
    "options": {
      "A": "$\\frac{x^2}{25} + \\frac{y^2}{16} = 1$",
      "B": "$\\frac{x^2}{100} + \\frac{y^2}{64} = 1$",
      "C": "$\\frac{x^2}{25} - \\frac{y^2}{16} = 1$",
      "D": "$x^2 + y^2 = 25$"
    },
    "correctAnswer": "A",
    "formalSolution": "Por la definición focal de la elipse: $d(P, F_1) + d(P, F_2) = 2a$. Aquí $2a = 10 \\implies a = 5$. La distancia entre los focos es $2c = 3 - (-3) = 6 \\implies c = 3$. En la elipse se cumple $b^2 = a^2 - c^2 = 5^2 - 3^2 = 25 - 9 = 16$. Como los focos yacen sobre el eje $x$, la ecuación es $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\implies \\frac{x^2}{25} + \\frac{y^2}{16} = 1$.",
    "stepByStepDerivation": [
      "2a = 10 ==> a = 5 ==> a^2 = 25.",
      "Focos en (±3, 0) ==> c = 3 ==> c^2 = 9.",
      "Calcular b^2 = a^2 - c^2 = 25 - 9 = 16.",
      "Ecuación ordinaria: x^2 / 25 + y^2 / 16 = 1."
    ],
    "distractorRationale": {
      "A": "Correcto. a^2 = 25 y b^2 = 16.",
      "B": "Error al tomar 2a y 2b directamente como semiejes.",
      "C": "La ecuación con signo negativo corresponde a una hipérbola (diferencia constante).",
      "D": "Ecuación de circunferencia con un solo centro."
    }
  },
  {
    "id": "ing-118",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Elementos de la Hipérbola Horizontal Canónica",
    "problemStatement": "Dada la hipérbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$, ¿cuáles son las coordenadas de sus vértices $V$ y sus focos $F$?",
    "options": {
      "A": "Vértices en $(\\pm 4, 0)$ y focos en $(\\pm 5, 0)$.",
      "B": "Vértices en $(\\pm 5, 0)$ y focos en $(\\pm 4, 0)$.",
      "C": "Vértices en $(0, \\pm 4)$ y focos en $(0, \\pm 5)$.",
      "D": "Vértices en $(\\pm 4, 0)$ y focos en $(\\pm \\sqrt{7}, 0)$."
    },
    "correctAnswer": "A",
    "formalSolution": "La ecuación canónica con término positivo en $x$ corresponde a una hipérbola horizontal: $a^2 = 16 \\implies a = 4$, luego los vértices están en $(\\pm a, 0) = (\\pm 4, 0)$. En la hipérbola, la relación fundamental es $c^2 = a^2 + b^2 = 16 + 9 = 25 \\implies c = 5$. Los focos se ubican en $(\\pm c, 0) = (\\pm 5, 0)$.",
    "stepByStepDerivation": [
      "Semieje real a = sqrt(16) = 4 ==> Vértices (±4, 0).",
      "Semieje imaginario b = sqrt(9) = 3.",
      "Semidistancia focal: c = sqrt(a^2 + b^2) = sqrt(16 + 9) = 5.",
      "Focos: (±c, 0) = (±5, 0)."
    ],
    "distractorRationale": {
      "A": "Correcto. Vértices en (±4, 0) y focos en (±5, 0).",
      "B": "Inversión entre vértices y focos (en la hipérbola siempre c > a).",
      "C": "Error al orientar la hipérbola sobre el eje vertical.",
      "D": "Error al restar a^2 - b^2 = 7 como si fuese una elipse en lugar de sumar."
    }
  },
  {
    "id": "ing-119",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Hipérbola Vertical y Distancia Focal",
    "problemStatement": "Determine los focos de la hipérbola $\\frac{y^2}{36} - \\frac{x^2}{64} = 1$.",
    "options": {
      "A": "$F_1(0, 10)$ y $F_2(0, -10)$",
      "B": "$F_1(10, 0)$ y $F_2(-10, 0)$",
      "C": "$F_1(0, 6)$ y $F_2(0, -6)$",
      "D": "$F_1(0, \\sqrt{28})$ y $F_2(0, -\\sqrt{28})$"
    },
    "correctAnswer": "A",
    "formalSolution": "El término positivo es $y^2$, lo que indica que el eje transversal es vertical coincidente con el eje $y$. Por tanto: $a^2 = 36 \\implies a = 6$ y $b^2 = 64 \\implies b = 8$. La semidistancia focal es $c = \\sqrt{a^2 + b^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$. Los focos se ubican en el eje vertical: $(0, \\pm c) = (0, \\pm 10)$.",
    "stepByStepDerivation": [
      "Término positivo en y^2 ==> hipérbola vertical.",
      "a^2 = 36, b^2 = 64.",
      "c = sqrt(36 + 64) = sqrt(100) = 10.",
      "Focos sobre el eje y: (0, ±10)."
    ],
    "distractorRationale": {
      "A": "Correcto. Focos verticales en (0, ±10).",
      "B": "Error al colocar los focos sobre el eje x.",
      "C": "Esos son los vértices (0, ±6), no los focos.",
      "D": "Error al restar en lugar de sumar bajo la raíz."
    }
  },
  {
    "id": "ing-120",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Excentricidad de la Hipérbola",
    "problemStatement": "Calcule la excentricidad $e$ de la hipérbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$.",
    "options": {
      "A": "$e = \\frac{5}{4} = 1.25$",
      "B": "$e = \\frac{4}{5} = 0.8$",
      "C": "$e = \\frac{3}{4} = 0.75$",
      "D": "$e = \\sqrt{2}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La excentricidad se define como $e = \\frac{c}{a}$. Con $a^2 = 16 \\implies a = 4$ y $b^2 = 9 \\implies b = 3$: $c = \\sqrt{a^2 + b^2} = \\sqrt{16 + 9} = 5$. Por lo tanto: $e = \\frac{5}{4} = 1.25 > 1$.",
    "stepByStepDerivation": [
      "a = 4.",
      "c = sqrt(16 + 9) = 5.",
      "e = c / a = 5 / 4 = 1.25.",
      "Confirmar e > 1 característico de hipérbolas."
    ],
    "distractorRationale": {
      "A": "Correcto. e = 5/4 = 1.25 > 1.",
      "B": "e = 4/5 < 1 corresponde a la elipse con los mismos semiejes.",
      "C": "Relación b/a, no c/a.",
      "D": "sqrt(2) corresponde a hipérbolas equiláteras (a = b)."
    }
  },
  {
    "id": "ing-121",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Ecuaciones de las Asíntotas de la Hipérbola Horizontal",
    "problemStatement": "¿Cuáles son las ecuaciones de las asíntotas de la hipérbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$?",
    "options": {
      "A": "$y = \\pm \\frac{3}{4}x$",
      "B": "$y = \\pm \\frac{4}{3}x$",
      "C": "$y = \\pm \\frac{9}{16}x$",
      "D": "$y = \\pm x$"
    },
    "correctAnswer": "A",
    "formalSolution": "Para una hipérbola horizontal centrada en el origen $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, las ecuaciones de las asíntotas se obtienen igualando a cero el binomio: $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 0 \\implies \\frac{y^2}{b^2} = \\frac{x^2}{a^2} \\implies y = \\pm \\frac{b}{a}x$. Con $a = 4$ y $b = 3$: $y = \\pm \\frac{3}{4}x$.",
    "stepByStepDerivation": [
      "Semieje real a = 4.",
      "Semieje imaginario b = 3.",
      "Fórmula de asíntotas para hipérbola horizontal: y = ± (b/a)x.",
      "Sustituir: y = ± (3/4)x."
    ],
    "distractorRationale": {
      "A": "Correcto. y = ± (3/4)x.",
      "B": "Pendiente invertida ± (a/b)x correspondiente a hipérbola vertical.",
      "C": "Error al utilizar b^2 / a^2 en lugar de b / a.",
      "D": "Asíntotas a 45° solo aplican a hipérbolas equiláteras donde a = b."
    }
  },
  {
    "id": "ing-122",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Asíntotas de la Hipérbola Vertical",
    "problemStatement": "¿Cuáles son las ecuaciones de las asíntotas de la hipérbola vertical $\\frac{y^2}{36} - \\frac{x^2}{64} = 1$?",
    "options": {
      "A": "$y = \\pm \\frac{3}{4}x$",
      "B": "$y = \\pm \\frac{4}{3}x$",
      "C": "$y = \\pm \\frac{6}{8}x^2$",
      "D": "$y = \\pm \\frac{8}{6}x$"
    },
    "correctAnswer": "A",
    "formalSolution": "Para la hipérbola vertical $\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1$, las asíntotas satisfacen $\\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 0 \\implies y = \\pm \\frac{a}{b}x$. Con $a^2 = 36 \\implies a = 6$, y $b^2 = 64 \\implies b = 8$. Por lo tanto: $y = \\pm \\frac{6}{8}x = \\pm \\frac{3}{4}x$.",
    "stepByStepDerivation": [
      "Identificar a = 6 y b = 8.",
      "Para hipérbola vertical, la pendiente es ± a/b.",
      "Calcular: a/b = 6/8 = 3/4.",
      "Ecuación: y = ± (3/4)x."
    ],
    "distractorRationale": {
      "A": "Correcto. y = ± (6/8)x = ± (3/4)x.",
      "B": "Error al invertir la pendiente b/a.",
      "C": "Las asíntotas son líneas rectas de grado 1, no parábolas.",
      "D": "Pendiente no simplificada e invertida."
    }
  },
  {
    "id": "ing-123",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Hipérbola Equilátera y Excentricidad Constante",
    "problemStatement": "Una hipérbola se clasifica como equilátera (o rectangular) si sus semiejes son de igual longitud ($a = b$). ¿Cuál es el valor ineludible de su excentricidad $e$ y qué relación guardan sus asíntotas entre sí?",
    "options": {
      "A": "Excentricidad fija $e = \\sqrt{2}$, y sus asíntotas son mutuamente perpendiculares ($y = \\pm x$).",
      "B": "Excentricidad $e = 1$, y sus asíntotas son paralelas.",
      "C": "Excentricidad $e = 2$, y sus asíntotas forman un ángulo de 60°.",
      "D": "Excentricidad $e = \\frac{\\sqrt{3}}{2}$, y carece de asíntotas."
    },
    "correctAnswer": "A",
    "formalSolution": "Si $a = b$, la semidistancia focal es $c = \\sqrt{a^2 + a^2} = \\sqrt{2a^2} = a\\sqrt{2}$. La excentricidad es $e = \\frac{c}{a} = \\frac{a\\sqrt{2}}{a} = \\sqrt{2} \\approx 1.414$. Las pendientes de sus asíntotas son $m_1 = \\frac{b}{a} = 1$ y $m_2 = -\\frac{b}{a} = -1$. Como $m_1 \\cdot m_2 = (1)(-1) = -1$, las asíntotas son estrictamente perpendiculares entre sí.",
    "stepByStepDerivation": [
      "Condición equilátera: a = b.",
      "c = sqrt(a^2 + a^2) = a·sqrt(2).",
      "Excentricidad: e = c / a = sqrt(2).",
      "Pendientes de asíntotas: m = ± b/a = ± 1.",
      "Producto de pendientes = -1 ==> asíntotas perpendiculares."
    ],
    "distractorRationale": {
      "A": "Correcto. e = sqrt(2) y asíntotas ortogonales a 90°.",
      "B": "e = 1 corresponde a la parábola, no a una hipérbola.",
      "C": "e = 2 requeriría c = 2a (b = a*sqrt(3)).",
      "D": "e < 1 es imposible en cualquier hipérbola."
    }
  },
  {
    "id": "ing-124",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Hipérbola Equilátera Referida a sus Asíntotas",
    "problemStatement": "La función homográfica elemental $y = \\frac{k}{x}$ ($x y = k$ con $k > 0$) representa en geometría analítica:",
    "options": {
      "A": "Una Hipérbola equilátera rotada $45^\\circ$ respecto a los ejes cartesianos, cuyas asíntotas son exactamente los ejes coordenados $x = 0$ e $y = 0$.",
      "B": "Una Parábola cúbica.",
      "C": "Una Elipse degenerada.",
      "D": "Una Espiral logarítmica."
    },
    "correctAnswer": "A",
    "formalSolution": "La ecuación canónica de la hipérbola equilátera $x'^2 - y'^2 = 2k$, al aplicarle una rotación de ejes de $\\theta = 45^\\circ$ ($x' = \\frac{x - y}{\\sqrt{2}}$, $y' = \\frac{x + y}{\\sqrt{2}}$), se transforma en: $\\frac{(x - y)^2}{2} - \\frac{(x + y)^2}{2} = 2k \\implies \\frac{-4xy}{2} = 2k \\implies xy = -k$ (o rotando $-45^\\circ$ da $xy = k$). Sus ramas se ubican en los cuadrantes I y III con asíntotas sobre los ejes $x$ e $y$.",
    "stepByStepDerivation": [
      "Partir de la rotación de ejes a 45°: x' = (x + y)/sqrt(2), y' = (y - x)/sqrt(2).",
      "Sustituir en x'^2 - y'^2 = a^2.",
      "El desarrollo algebraico produce el término mixto 2xy = a^2 ==> xy = k.",
      "Concluir que xy = k es una hipérbola equilátera con los ejes coordenados como asíntotas."
    ],
    "distractorRationale": {
      "A": "Correcto. Hipérbola equilátera referida a sus asíntotas ortogonales.",
      "B": "Una parábola cúbica tiene forma y = k*x^3.",
      "C": "No es una cónica cerrada.",
      "D": "Es una curva algebraica de segundo grado, no trascendente."
    }
  },
  {
    "id": "ing-125",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Definición Focal de la Hipérbola (Diferencia Constante)",
    "problemStatement": "Un punto $P(x, y)$ se desplaza de modo que el valor absoluto de la diferencia de sus distancias a los focos $F_1(-5, 0)$ y $F_2(5, 0)$ es constantemente igual a $8$. ¿Cuál es la ecuación cartesiana de la trayectoria?",
    "options": {
      "A": "$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$",
      "B": "$\\frac{x^2}{25} - \\frac{y^2}{16} = 1$",
      "C": "$\\frac{x^2}{16} + \\frac{y^2}{9} = 1$",
      "D": "$\\frac{x^2}{64} - \\frac{y^2}{25} = 1$"
    },
    "correctAnswer": "A",
    "formalSolution": "La definición geométrica de la hipérbola establece $|d(P, F_1) - d(P, F_2)| = 2a$. Por tanto, $2a = 8 \\implies a = 4 \\implies a^2 = 16$. La distancia entre focos es $2c = 5 - (-5) = 10 \\implies c = 5 \\implies c^2 = 25$. En la hipérbola: $b^2 = c^2 - a^2 = 25 - 16 = 9$. Al estar los focos sobre el eje $x$, la ecuación es $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$.",
    "stepByStepDerivation": [
      "2a = 8 ==> a = 4 ==> a^2 = 16.",
      "c = 5 ==> c^2 = 25.",
      "b^2 = c^2 - a^2 = 25 - 16 = 9.",
      "Ecuación canónica: x^2 / 16 - y^2 / 9 = 1."
    ],
    "distractorRationale": {
      "A": "Correcto. a^2 = 16 y b^2 = 9.",
      "B": "Error al usar c^2 = 25 como denominador de x^2.",
      "C": "Ecuación con signo positivo corresponde a una elipse (suma constante).",
      "D": "Error al elevar al cuadrado 2a en vez de a."
    }
  },
  {
    "id": "ing-126",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Traslación de Ejes para Eliminar Términos Lineales",
    "problemStatement": "Dada la ecuación general $2x^2 + 3y^2 - 8x + 6y - 7 = 0$, ¿cuáles son las coordenadas del nuevo origen $(h, k)$ que eliminan los términos lineales en $x$ e $y$?",
    "options": {
      "A": "$(h, k) = (2, -1)$",
      "B": "$(h, k) = (-2, 1)$",
      "C": "$(h, k) = (4, -3)$",
      "D": "$(h, k) = (-4, 3)$"
    },
    "correctAnswer": "A",
    "formalSolution": "Agrupamos y completamos cuadrados: $2(x^2 - 4x) + 3(y^2 + 2y) = 7 \\implies 2(x - 2)^2 - 8 + 3(y + 1)^2 - 3 = 7 \\implies 2(x - 2)^2 + 3(y + 1)^2 = 18$. Definiendo las nuevas coordenadas trasladadas $x' = x - 2$ e $y' = y + 1$, la ecuación se convierte en $2x'^2 + 3y'^2 = 18$, donde los términos lineales han desaparecido. Las coordenadas del nuevo origen son $(h, k) = (2, -1)$.",
    "stepByStepDerivation": [
      "Completar en x: 2(x^2 - 4x + 4) = 2(x - 2)^2 suma 8.",
      "Completar en y: 3(y^2 + 2y + 1) = 3(y + 1)^2 suma 3.",
      "Centro de la elipse: h = 2, k = -1.",
      "La traslación x' = x - 2, y' = y + 1 elimina los términos lineales."
    ],
    "distractorRationale": {
      "A": "Correcto. (h, k) = (2, -1).",
      "B": "Error de signos en las coordenadas del centro.",
      "C": "Error al no dividir entre los coeficientes cuadráticos 2 y 3.",
      "D": "Inversión de signos combinada con omisión de división."
    }
  },
  {
    "id": "ing-127",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Ángulo de Rotación de Ejes para Eliminar el Término xy",
    "problemStatement": "Para eliminar el término mixto $xy$ en la ecuación general $x^2 + 2\\sqrt{3}xy + 3y^2 - 8 = 0$, ¿cuál es el ángulo de rotación $\\theta$ necesario?",
    "options": {
      "A": "$\\theta = 60^\\circ$ ($\\frac{\\pi}{3}\\text{ rad}$)",
      "B": "$\\theta = 30^\\circ$ ($\\frac{\\pi}{6}\\text{ rad}$)",
      "C": "$\\theta = 45^\\circ$ ($\\frac{\\pi}{4}\\text{ rad}$)",
      "D": "$\\theta = 90^\\circ$"
    },
    "correctAnswer": "A",
    "formalSolution": "La fórmula universal para el ángulo de rotación $\\theta$ es $\\cot(2\\theta) = \\frac{A - C}{B}$. Para la ecuación dada: $A = 1$, $B = 2\\sqrt{3}$, $C = 3$. Sustituyendo: $\\cot(2\\theta) = \\frac{1 - 3}{2\\sqrt{3}} = \\frac{-2}{2\\sqrt{3}} = -\\frac{1}{\\sqrt{3}}$. Como $\\cot(2\\theta) = -\\frac{1}{\\sqrt{3}} \\implies \\tan(2\\theta) = -\\sqrt{3}$. El ángulo en el segundo cuadrante es $2\\theta = 180^\\circ - 60^\\circ = 120^\\circ$. Dividiendo entre 2: $\\theta = 60^\\circ = \\frac{\\pi}{3}\\text{ rad}$.",
    "stepByStepDerivation": [
      "Identificar coeficientes: A = 1, B = 2·sqrt(3), C = 3.",
      "cot(2θ) = (A - C) / B = (1 - 3) / (2·sqrt(3)) = -1 / sqrt(3).",
      "tan(2θ) = -sqrt(3) ==> 2θ = 120°.",
      "θ = 120° / 2 = 60° (π/3 rad)."
    ],
    "distractorRationale": {
      "A": "Correcto. 2θ = 120° ==> θ = 60°.",
      "B": "30° correspondería a tan(2θ) = +1/sqrt(3) (2θ = 60°).",
      "C": "45° aplica cuando A = C (cot 2θ = 0).",
      "D": "Rotación ortogonal que no elimina el término cruzado."
    }
  },
  {
    "id": "ing-128",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Invariantes de la Ecuación General de Segundo Grado",
    "problemStatement": "Bajo una rotación de ejes coordenados en el plano, ¿cuáles de las siguientes cantidades permanecen invariantes?",
    "options": {
      "A": "La traza $A + C$ y el discriminante $B^2 - 4AC$.",
      "B": "Los coeficientes individuales $A$ y $B$.",
      "C": "El término lineal $D + E$.",
      "D": "La pendiente de las asíntotas."
    },
    "correctAnswer": "A",
    "formalSolution": "En la teoría algebraica de formas cuadráticas en dos variables, las rotaciones ortogonales preservan la traza de la matriz de coeficientes ($A + C = A' + C'$) y su determinante ($4AC - B^2 = 4A'C' - B'^2$, lo que equivale a la invariancia del discriminante $B^2 - 4AC = B'^2 - 4A'C'$). Por ello, el tipo geométrico de cónica no cambia bajo ninguna rotación.",
    "stepByStepDerivation": [
      "Matriz cuadrática M = [[A, B/2], [B/2, C]].",
      "Una rotación aplica semejanza ortogonal: M' = R^T · M · R.",
      "Invariante 1: Traza tr(M) = A + C.",
      "Invariante 2: Determinante det(M) = AC - B^2/4 ==> B^2 - 4AC es invariante."
    ],
    "distractorRationale": {
      "A": "Correcto. A + C y B^2 - 4AC son invariantes ortogonales demostrados.",
      "B": "A y B cambian explícitamente con el ángulo de rotación (B' se anula para el ángulo óptimo).",
      "C": "D y E rotan como componentes de un vector.",
      "D": "Las pendientes rotan rígidamente con el sistema coordenado."
    }
  },
  {
    "id": "ing-129",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Clasificación con Término Cruzado (Hipérbola)",
    "problemStatement": "Clasifique la cónica dada por la ecuación $3x^2 + 8xy - 3y^2 - 25 = 0$.",
    "options": {
      "A": "Hipérbola, porque su discriminante es $\\Delta = B^2 - 4AC = 100 > 0$.",
      "B": "Elipse, porque contiene coeficientes cuadráticos opuestos.",
      "C": "Parábola, porque la traza es cero.",
      "D": "Circunferencia imaginaria."
    },
    "correctAnswer": "A",
    "formalSolution": "Identificamos los coeficientes: $A = 3$, $B = 8$, $C = -3$. Evaluamos el discriminante: $\\Delta = B^2 - 4AC = 8^2 - 4(3)(-3) = 64 - (-36) = 64 + 36 = 100$. Dado que $\\Delta = 100 > 0$, la cónica es una hipérbola. Además, como $A + C = 3 + (-3) = 0$, se trata específicamente de una hipérbola equilátera.",
    "stepByStepDerivation": [
      "A = 3, B = 8, C = -3.",
      "Δ = B^2 - 4AC = 8^2 - 4(3)(-3).",
      "Δ = 64 + 36 = 100.",
      "Δ > 0 clasifica rigurosamente a una hipérbola."
    ],
    "distractorRationale": {
      "A": "Correcto. Discriminante positivo Δ = 100 > 0 define una hipérbola.",
      "B": "Una elipse requiere Δ < 0.",
      "C": "Una parábola requiere Δ = 0.",
      "D": "No es una circunferencia y posee infinitos puntos reales."
    }
  },
  {
    "id": "ing-130",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Clasificación con Término Cruzado (Elipse Rotada)",
    "problemStatement": "Clasifique la sección cónica $5x^2 - 4xy + 5y^2 - 9 = 0$.",
    "options": {
      "A": "Elipse, porque su discriminante es $\\Delta = B^2 - 4AC = -84 < 0$.",
      "B": "Hipérbola, porque el término mixto es negativo.",
      "C": "Parábola, porque los coeficientes cuadráticos son iguales.",
      "D": "Dos rectas secantes."
    },
    "correctAnswer": "A",
    "formalSolution": "Coeficientes: $A = 5$, $B = -4$, $C = 5$. Evaluamos el discriminante cuadrático: $\\Delta = B^2 - 4AC = (-4)^2 - 4(5)(5) = 16 - 100 = -84$. Al ser $\\Delta = -84 < 0$ y $A \\cdot F = 5(-9) < 0$ (existen puntos reales), la curva es una elipse rotada a $45^\\circ$ respecto a los ejes principales.",
    "stepByStepDerivation": [
      "A = 5, B = -4, C = 5.",
      "Δ = B^2 - 4AC = (-4)^2 - 4(5)(5) = 16 - 100 = -84.",
      "Δ < 0 define una cónica de género elíptico.",
      "Como F = -9, describe una elipse real centrada en el origen."
    ],
    "distractorRationale": {
      "A": "Correcto. Δ = -84 < 0 define una elipse real.",
      "B": "El signo de B no determina si es hipérbola; manda el discriminante completo.",
      "C": "Para ser parábola se requeriría Δ = 0.",
      "D": "No es degenerada porque el término independiente es no nulo."
    }
  },
  {
    "id": "ing-131",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Cónica Degenerada: Par de Rectas Secantes",
    "problemStatement": "¿Qué representa geométricamente la ecuación cuadrática $x^2 - 4y^2 = 0$ en el plano cartesiano?",
    "options": {
      "A": "Un par de rectas secantes que se cortan en el origen: $x - 2y = 0$ y $x + 2y = 0$.",
      "B": "Una hipérbola con vértices en $(\\pm 2, 0)$.",
      "C": "Una elipse degenerada a un solo punto.",
      "D": "Una parábola doble."
    },
    "correctAnswer": "A",
    "formalSolution": "Factorizamos la diferencia de cuadrados: $x^2 - 4y^2 = (x - 2y)(x + 2y) = 0$. Por la propiedad del producto cero en los números reales, esta ecuación se satisface si y solo si $x - 2y = 0$ o $x + 2y = 0$. Ambas son ecuaciones lineales de rectas que se intersectan en el origen $(0, 0)$. Por tanto, es una cónica degenerada de tipo hiperbólico que colapsa en un par de rectas secantes.",
    "stepByStepDerivation": [
      "Reconocer diferencia de cuadrados: x^2 - (2y)^2 = 0.",
      "Factorizar: (x - 2y)(x + 2y) = 0.",
      "El lugar geométrico es la unión de las rectas x = 2y y x = -2y.",
      "Intersección en el origen (0, 0): rectas secantes."
    ],
    "distractorRationale": {
      "A": "Correcto. Factorización en dos rectas reales secantes que pasan por el origen.",
      "B": "Una hipérbola real requiere un término independiente no nulo (ej. x^2 - 4y^2 = 1).",
      "C": "Un punto único provendría de una suma de cuadrados x^2 + 4y^2 = 0.",
      "D": "No posee estructura parabólica."
    }
  },
  {
    "id": "ing-132",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Cónica Degenerada: Punto Aislado",
    "problemStatement": "¿Cuál es el lugar geométrico descrito por la ecuación $x^2 + 2y^2 = 0$ en $\\mathbb{R}^2$?",
    "options": {
      "A": "Un único punto aislado: el origen $(0, 0)$.",
      "B": "Una elipse con semiejes infinitamente pequeños.",
      "C": "El conjunto vacío.",
      "D": "Una circunferencia de radio cero."
    },
    "correctAnswer": "A",
    "formalSolution": "Como $x^2 \\ge 0$ y $2y^2 \\ge 0$ para todos los números reales $x, y$, la suma $x^2 + 2y^2$ es estrictamente no negativa. La única forma de que la suma de dos términos no negativos sea igual a cero es que ambos términos sean simultáneamente cero: $x^2 = 0 \\implies x = 0$ y $2y^2 = 0 \\implies y = 0$. Por lo tanto, el único punto del plano que satisface la ecuación es $(0, 0)$. Es una elipse degenerada a un punto singular.",
    "stepByStepDerivation": [
      "x^2 ≥ 0 y 2y^2 ≥ 0 para todo (x, y) en R^2.",
      "x^2 + 2y^2 = 0 implica x = 0 e y = 0.",
      "El conjunto solución contiene exactamente el punto (0, 0)."
    ],
    "distractorRationale": {
      "A": "Correcto. La única solución real es el par ordenado (0, 0).",
      "B": "Geométricamente no tiene extensión bidimensional, es puramente un punto.",
      "C": "No es vacío porque (0, 0) satisface la ecuación.",
      "D": "Los coeficientes 1 y 2 no corresponden a simetría circular."
    }
  },
  {
    "id": "ing-133",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Cónica Degenerada: Par de Rectas Paralelas",
    "problemStatement": "La ecuación $x^2 - 9 = 0$ representa en el plano bidimensional:",
    "options": {
      "A": "Un par de rectas paralelas verticales: $x = 3$ y $x = -3$.",
      "B": "Dos puntos aislados en el eje x.",
      "C": "Una hipérbola sin ramas superiores.",
      "D": "Una recta única con multiplicidad 2."
    },
    "correctAnswer": "A",
    "formalSolution": "En el plano cartesiano $\\mathbb{R}^2$, una ecuación que involucre solo una variable como $x^2 - 9 = 0$ se factoriza en $(x - 3)(x + 3) = 0$. Esto define dos rectas independientes: $x = 3$ y $x = -3$, las cuales son verticales y estrictamente paralelas entre sí. Corresponde a una parábola degenerada.",
    "stepByStepDerivation": [
      "Factorizar: (x - 3)(x + 3) = 0.",
      "x = 3 es una recta vertical en el plano R^2.",
      "x = -3 es otra recta vertical en el plano R^2.",
      "Ambas rectas son paralelas con distancia 6."
    ],
    "distractorRationale": {
      "A": "Correcto. En R^2 x = cte es una recta, luego son dos rectas paralelas.",
      "B": "Serían puntos en la recta real unidimensional R, pero en el plano R^2 son rectas infinitas.",
      "C": "No tiene asíntotas ni ramas hiperbólicas.",
      "D": "Para ser recta única con multiplicidad 2 se requeriría (x - 3)^2 = 0."
    }
  },
  {
    "id": "ing-134",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Ecuación Polar de Cónicas con Foco en el Polo",
    "problemStatement": "La ecuación polar $r = \\frac{10}{1 + \\cos\\theta}$ representa:",
    "options": {
      "A": "Una Parábola con foco en el polo, porque la excentricidad es $e = 1$.",
      "B": "Una Elipse con $e = 0.5$.",
      "C": "Una Hipérbola con $e = 2$.",
      "D": "Una Circunferencia de radio 10."
    },
    "correctAnswer": "A",
    "formalSolution": "La forma canónica polar de una cónica con foco en el origen es $r = \\frac{e d}{1 + e\\cos\\theta}$. Comparando con $r = \\frac{10}{1 + \\cos\\theta}$, el coeficiente del término $\\cos\\theta$ en el denominador es exactamente $1$, lo que implica $e = 1$. Toda cónica con excentricidad $e = 1$ es una parábola. Además, $e d = 10 \\implies d = 10$, donde $x = 10$ es la directriz vertical.",
    "stepByStepDerivation": [
      "Forma polar estándar: r = ed / (1 + e·cos θ).",
      "El denominador tiene 1 + 1·cos(θ) ==> excentricidad e = 1.",
      "e = 1 define rigurosamente a una parábola.",
      "ed = 10 ==> distancia a directriz d = 10."
    ],
    "distractorRationale": {
      "A": "Correcto. e = 1 identifica a una parábola.",
      "B": "Una elipse requeriría e < 1.",
      "C": "Una hipérbola requeriría e > 1.",
      "D": "Una circunferencia tiene e = 0 y su ecuación polar con centro en el origen es r = cte."
    }
  },
  {
    "id": "ing-135",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Identificación de Elipse en Coordenadas Polares",
    "problemStatement": "Dada la ecuación polar $r = \\frac{6}{2 + \\cos\\theta}$, ¿qué tipo de cónica representa y cuál es su excentricidad?",
    "options": {
      "A": "Una Elipse con excentricidad $e = 0.5$.",
      "B": "Una Parábola con $e = 1$.",
      "C": "Una Hipérbola con $e = 2$.",
      "D": "Una Circunferencia con radio 3."
    },
    "correctAnswer": "A",
    "formalSolution": "Para llevar la ecuación a la forma canónica $r = \\frac{ed}{1 + e\\cos\\theta}$, debemos hacer que el término constante del denominador sea igual a 1. Dividimos numerador y denominador entre 2: $r = \\frac{6/2}{(2/2) + (1/2)\\cos\\theta} = \\frac{3}{1 + 0.5\\cos\\theta}$. Identificamos la excentricidad: $e = 0.5 = \\frac{1}{2}$. Como $0 < e < 1$, la cónica es una elipse.",
    "stepByStepDerivation": [
      "Normalizar el denominador dividiendo entre 2: r = 3 / (1 + 0.5 cos θ).",
      "Comparar con r = ed / (1 + e cos θ).",
      "Excentricidad e = 0.5.",
      "Como e = 0.5 < 1, la cónica es una elipse."
    ],
    "distractorRationale": {
      "A": "Correcto. e = 0.5 < 1 define una elipse.",
      "B": "Para parábola se requeriría e = 1.",
      "C": "Error al no normalizar el denominador y tomar e = 1/0.5 = 2.",
      "D": "La presencia de cos(θ) deforma la simetría circular."
    }
  },
  {
    "id": "ing-136",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Identificación de Hipérbola en Coordenadas Polares",
    "problemStatement": "La ecuación polar $r = \\frac{8}{1 + 2\\cos\\theta}$ representa una sección cónica cuya excentricidad es:",
    "options": {
      "A": "$e = 2$ (Hipérbola)",
      "B": "$e = 0.5$ (Elipse)",
      "C": "$e = 1$ (Parábola)",
      "D": "$e = 8$ (Parábola de gran apertura)"
    },
    "correctAnswer": "A",
    "formalSolution": "La ecuación polar está en su forma canónica $r = \\frac{ed}{1 + e\\cos\\theta}$ con término constante 1 en el denominador. El coeficiente de $\\cos\\theta$ es directamente la excentricidad: $e = 2$. Como $e = 2 > 1$, la sección cónica es inequívocamente una hipérbola.",
    "stepByStepDerivation": [
      "El denominador ya tiene término constante 1.",
      "El coeficiente de cos(θ) es e = 2.",
      "Criterio: e > 1 define una hipérbola."
    ],
    "distractorRationale": {
      "A": "Correcto. e = 2 > 1 define una hipérbola.",
      "B": "Inversión recíproca 1/e.",
      "C": "e = 1 requeriría que el coeficiente fuese 1.",
      "D": "8 es el producto focal ed, no la excentricidad."
    }
  },
  {
    "id": "ing-137",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Cálculo del Área Encerrada por una Elipse",
    "problemStatement": "¿Cuál es el área exacta encerrada por la elipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$?",
    "options": {
      "A": "$12\\pi\\text{ unidades cuadradas}$",
      "B": "$25\\pi\\text{ unidades cuadradas}$",
      "C": "$144\\pi\\text{ unidades cuadradas}$",
      "D": "$7\\pi\\text{ unidades cuadradas}$"
    },
    "correctAnswer": "A",
    "formalSolution": "El área de una elipse con semiejes $a$ y $b$ viene dada por la fórmula $\\text{Área} = \\pi a b$. Para la elipse dada: $a^2 = 16 \\implies a = 4$, y $b^2 = 9 \\implies b = 3$. Sustituyendo los semiejes: $\\text{Área} = \\pi (4)(3) = 12\\pi\\text{ u}^2$.",
    "stepByStepDerivation": [
      "Semieje mayor a = sqrt(16) = 4.",
      "Semieje menor b = sqrt(9) = 3.",
      "Fórmula de área: Área = π · a · b.",
      "Calcular: π · 4 · 3 = 12π."
    ],
    "distractorRationale": {
      "A": "Correcto. pi * 4 * 3 = 12*pi.",
      "B": "Error al sumar los cuadrados (16 + 9 = 25).",
      "C": "Error al multiplicar a^2 * b^2 = 16 * 9 = 144.",
      "D": "Error al sumar los semiejes (4 + 3 = 7)."
    }
  },
  {
    "id": "ing-138",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Recta Normal a una Elipse en un Punto Dado",
    "problemStatement": "Dada la elipse $x^2 + 4y^2 = 8$, determine la pendiente $m_n$ de la recta normal en el punto $P(2, 1)$.",
    "options": {
      "A": "$m_n = 2$",
      "B": "$m_n = -\\frac{1}{2}$",
      "C": "$m_n = \\frac{1}{2}$",
      "D": "$m_n = -2$"
    },
    "correctAnswer": "A",
    "formalSolution": "Derivamos implícitamente respecto a $x$: $2x + 8y \\frac{dy}{dx} = 0 \\implies \\frac{dy}{dx} = -\\frac{2x}{8y} = -\\frac{x}{4y}$. Evaluando en el punto $(2, 1)$, la pendiente de la recta tangente es $m_t = -\\frac{2}{4(1)} = -\\frac{1}{2}$. La recta normal es perpendicular a la tangente, por lo que su pendiente satisface $m_n = -\\frac{1}{m_t} = -\\frac{1}{-1/2} = 2$.",
    "stepByStepDerivation": [
      "Derivada implícita: 2x + 8y·y' = 0 ==> y' = -x / (4y).",
      "Pendiente tangente en (2, 1): m_t = -2 / 4 = -1/2.",
      "Pendiente normal perpendicular: m_n = -1 / m_t = 2."
    ],
    "distractorRationale": {
      "A": "Correcto. m_n = -1 / (-1/2) = 2.",
      "B": "Esa es la pendiente de la recta tangente m_t, no de la normal.",
      "C": "Error de signos en la perpendicular.",
      "D": "Inversión de signo errónea."
    }
  },
  {
    "id": "ing-139",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Parábola Balística: Vértice como Altura Máxima",
    "problemStatement": "Un proyectil describe una trayectoria parabólica dada por la ecuación $y = x - \\frac{x^2}{40}$, donde $x$ e $y$ están en metros. ¿Cuál es la altura máxima alcanzada por el proyectil?",
    "options": {
      "A": "$10\\text{ m}$",
      "B": "$20\\text{ m}$",
      "C": "$40\\text{ m}$",
      "D": "$5\\text{ m}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La trayectoria es una parábola vertical con concavidad hacia abajo: $y = -\\frac{1}{40}x^2 + x$. La abscisa del vértice (punto más alto) es $x_v = -\\frac{b}{2a} = -\\frac{1}{2(-1/40)} = \\frac{1}{1/20} = 20\\text{ m}$. Sustituimos $x_v = 20$ para hallar la altura máxima: $y_v = 20 - \\frac{20^2}{40} = 20 - \\frac{400}{40} = 20 - 10 = 10\\text{ m}$.",
    "stepByStepDerivation": [
      "Identificar coeficientes: a = -1/40, b = 1.",
      "x_v = -b / (2a) = -1 / (-2/40) = 20 m.",
      "Calcular y_max = y(20) = 20 - 20^2 / 40 = 20 - 400/40 = 20 - 10 = 10 m."
    ],
    "distractorRationale": {
      "A": "Correcto. Altura máxima en el vértice = 10 m.",
      "B": "20 m es la distancia horizontal al vértice x_v, no la altura.",
      "C": "40 m es el alcance horizontal total (donde y = 0).",
      "D": "Subestimación del vértice."
    }
  },
  {
    "id": "ing-140",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Hipérbola Conjugada y Relación de Asíntotas",
    "problemStatement": "Dada la hipérbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$, ¿cuál es la ecuación de su hipérbola conjugada y qué propiedad geométrica comparten?",
    "options": {
      "A": "Ecuación $-\\frac{x^2}{16} + \\frac{y^2}{9} = 1$, y comparten exactamente las mismas asíntotas.",
      "B": "Ecuación $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$, y comparten los mismos focos.",
      "C": "Ecuación $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$, y comparten los mismos vértices.",
      "D": "Ecuación $x^2 - y^2 = 7$, y son perpendiculares."
    },
    "correctAnswer": "A",
    "formalSolution": "La hipérbola conjugada de $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ se obtiene intercambiando los signos de los términos cuadráticos: $-\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\iff \\frac{y^2}{b^2} - \\frac{x^2}{a^2} = 1$. Ambas hipérbolas tienen como asíntotas a las rectas dadas por $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 0 \\implies y = \\pm \\frac{b}{a}x$. Comparten idéntico par de rectas asíntotas.",
    "stepByStepDerivation": [
      "Definición de hipérbola conjugada: invertir los signos de los términos cuadráticos.",
      "Ecuación: -x^2/16 + y^2/9 = 1 (o y^2/9 - x^2/16 = 1).",
      "Las asíntotas se obtienen igualando a 0 en ambos casos: y = ± (3/4)x.",
      "Comparten idéntico rectángulo fundamental y las mismas asíntotas."
    ],
    "distractorRationale": {
      "A": "Correcto. Inversión de signos y asíntotas idénticas.",
      "B": "Intercambiar los denominadores no genera la hipérbola conjugada.",
      "C": "Esa es la elipse asociada, no la hipérbola conjugada.",
      "D": "Ecuación arbitraria."
    }
  },
  {
    "id": "ing-141",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Excentricidad de la Circunferencia",
    "problemStatement": "¿Cuál es el valor exacto de la excentricidad $e$ de una circunferencia?",
    "options": {
      "A": "$e = 0$",
      "B": "$e = 1$",
      "C": "$e = 0.5$",
      "D": "$e = \\infty$"
    },
    "correctAnswer": "A",
    "formalSolution": "La circunferencia es el caso límite de una elipse donde los dos focos coinciden con el centro geométrico ($c = 0$) y los semiejes son iguales ($a = b = r$). Por tanto, la excentricidad es estrictamente: $e = \\frac{c}{a} = \\frac{0}{r} = 0$.",
    "stepByStepDerivation": [
      "En la circunferencia los focos coinciden con el centro ==> c = 0.",
      "Excentricidad e = c / a = 0 / r = 0."
    ],
    "distractorRationale": {
      "A": "Correcto. e = 0 define a la circunferencia.",
      "B": "e = 1 define a la parábola.",
      "C": "e = 0.5 corresponde a una elipse ovalada.",
      "D": "Infinito no es un valor de excentricidad de cónicas ordinarias."
    }
  },
  {
    "id": "ing-142",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Distancia entre Foco y Directriz en la Elipse",
    "problemStatement": "En una elipse con semieje mayor $a$, semieje menor $b$ y semidistancia focal $c$, ¿cuál es la distancia $d(F, D)$ entre un foco y su directriz correspondiente?",
    "options": {
      "A": "$d(F, D) = \\frac{a^2 - c^2}{c} = \\frac{b^2}{c}$",
      "B": "$d(F, D) = a - c$",
      "C": "$d(F, D) = \\frac{a}{c}$",
      "D": "$d(F, D) = 2c$"
    },
    "correctAnswer": "A",
    "formalSolution": "La directriz se encuentra a una distancia $\\frac{a}{e} = \\frac{a^2}{c}$ del centro. El foco se encuentra a una distancia $c$ del centro en la misma dirección. Por lo tanto, la distancia entre el foco y su directriz asociada es: $d(F, D) = \\frac{a^2}{c} - c = \\frac{a^2 - c^2}{c}$. Como en la elipse $a^2 - c^2 = b^2$, la distancia exacta es $\\frac{b^2}{c}$.",
    "stepByStepDerivation": [
      "Distancia del centro a la directriz: d_D = a / e = a^2 / c.",
      "Distancia del centro al foco: d_F = c.",
      "Distancia foco-directriz: d_D - d_F = a^2 / c - c = (a^2 - c^2) / c.",
      "Sustituir a^2 - c^2 = b^2 ==> distancia = b^2 / c."
    ],
    "distractorRationale": {
      "A": "Correcto. b^2 / c.",
      "B": "a - c es la distancia del foco al vértice más cercano.",
      "C": "a / c es el recíproco de la excentricidad 1/e.",
      "D": "2c es la distancia entre ambos focos."
    }
  },
  {
    "id": "ing-143",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Lado Recto de la Hipérbola",
    "problemStatement": "Calcule la longitud del lado recto ($LR$) de la hipérbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$.",
    "options": {
      "A": "$LR = \\frac{9}{2} = 4.5$",
      "B": "$LR = \\frac{18}{5}$",
      "C": "$LR = 9$",
      "D": "$LR = \\frac{32}{3}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La longitud del lado recto para una hipérbola se rige por la misma fórmula geométrica que la elipse: $LR = \\frac{2b^2}{a}$. Con $a^2 = 16 \\implies a = 4$ y $b^2 = 9$: $LR = \\frac{2(9)}{4} = \\frac{18}{4} = \\frac{9}{2} = 4.5$.",
    "stepByStepDerivation": [
      "Identificar a = 4 y b^2 = 9.",
      "Fórmula del lado recto: LR = 2·b^2 / a.",
      "Calcular: 2 · 9 / 4 = 18 / 4 = 9/2 = 4.5."
    ],
    "distractorRationale": {
      "A": "Correcto. 2(9)/4 = 4.5.",
      "B": "Error al dividir entre c = 5 en lugar de a = 4.",
      "C": "Error al no dividir entre a.",
      "D": "Fracción invertida 2a^2 / b = 32 / 3."
    }
  },
  {
    "id": "ing-144",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Comportamiento Asintótico de la Hipérbola",
    "problemStatement": "¿Cuántos puntos de intersección reales existen en el plano finito entre una hipérbola y sus dos asíntotas?",
    "options": {
      "A": "$0$ puntos de intersección reales.",
      "B": "$2$ puntos de intersección en los vértices.",
      "C": "$1$ punto de intersección en el centro.",
      "D": "$4$ puntos de intersección."
    },
    "correctAnswer": "A",
    "formalSolution": "Las asíntotas satisfacen $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 0$, mientras que la hipérbola satisface $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$. Restando ambas ecuaciones se obtiene la contradicción $0 = 1$. Por definición analítica, las ramas de la hipérbola se aproximan infinitesimalmente a las asíntotas cuando $|x| \\to \\infty$, pero no las intersectan en ningún punto finito del plano cartesiano real.",
    "stepByStepDerivation": [
      "Ecuación hipérbola: x^2/a^2 - y^2/b^2 = 1.",
      "Ecuación asíntotas: x^2/a^2 - y^2/b^2 = 0.",
      "Restar ecuaciones: 1 = 0 (sin solución real finita).",
      "Número de intersecciones reales = 0."
    ],
    "distractorRationale": {
      "A": "Correcto. Cero intersecciones en el plano finito.",
      "B": "En los vértices la distancia a las asíntotas es positiva b.",
      "C": "El centro no pertenece a la hipérbola (0 - 0 ≠ 1).",
      "D": "Imposible por la contradicción algebraica 1 = 0."
    }
  },
  {
    "id": "ing-145",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Determinación del Centro mediante Derivadas Parciales",
    "problemStatement": "Utilizando el método de anulación de derivadas parciales para la cónica cuadrática con centro $F(x, y) = 2x^2 + 4xy + 3y^2 - 8x - 10y + 5 = 0$, determine las coordenadas del centro.",
    "options": {
      "A": "$(1, 1)$",
      "B": "$(2, -1)$",
      "C": "$(0, 2)$",
      "D": "$(3, -2)$"
    },
    "correctAnswer": "A",
    "formalSolution": "El centro de simetría de una cónica con centro satisface el sistema de derivadas parciales igualadas a cero: $\\frac{\\partial F}{\\partial x} = 4x + 4y - 8 = 0 \\implies x + y = 2$. La segunda derivada parcial es: $\\frac{\\partial F}{\\partial y} = 4x + 6y - 10 = 0 \\implies 2x + 3y = 5$. Multiplicando la primera ecuación por 2 y restando: $(2x + 3y) - (2x + 2y) = 5 - 4 \\implies y = 1$. Sustituyendo en la primera ecuación: $x + 1 = 2 \\implies x = 1$. El centro es $(1, 1)$.",
    "stepByStepDerivation": [
      "Derivada respecto a x: dF/dx = 4x + 4y - 8 = 0 ==> x + y = 2.",
      "Derivada respecto a y: dF/dy = 4x + 6y - 10 = 0 ==> 2x + 3y = 5.",
      "Resolver sistema lineal: y = 1 y x = 1.",
      "Centro de la cónica: (1, 1)."
    ],
    "distractorRationale": {
      "A": "Correcto. Centro en (1, 1).",
      "B": "No satisface la ecuación x + y = 2 (2 + (-1) = 1 ≠ 2).",
      "C": "No satisface 2x + 3y = 5 (0 + 6 = 6 ≠ 5).",
      "D": "No satisface el sistema de equilibrio de derivadas parciales."
    }
  },
  {
    "id": "ing-146",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Definición Métrica Unificada de Secciones Cónicas",
    "problemStatement": "Una sección cónica se define como el lugar geométrico de los puntos $P$ del plano tales que la razón entre la distancia a un foco fijo $F$ y la distancia a una recta directriz $D$ es constante: $\\frac{d(P, F)}{d(P, D)} = e$. ¿Cómo se clasifican las cónicas en función de esta excentricidad $e$?",
    "options": {
      "A": "$0 < e < 1$: Elipse; $\\; e = 1$: Parábola; $\\; e > 1$: Hipérbola.",
      "B": "$e = 0$: Parábola; $\\; e = 1$: Elipse; $\\; e > 1$: Hipérbola.",
      "C": "$e < 1$: Hipérbola; $\\; e = 1$: Parábola; $\\; e > 1$: Elipse.",
      "D": "$e = 1$: Circunferencia únicamente."
    },
    "correctAnswer": "A",
    "formalSolution": "La definición foco-directriz unificada (Pappus de Alejandría) establece que la constante de proporcionalidad es la excentricidad $e$. Si $e < 1$, el punto está más cerca del foco que de la directriz, formando una curva cerrada (elipse). Si $e = 1$, la distancia al foco es exactamente igual a la distancia a la directriz (parábola). Si $e > 1$, la distancia al foco supera a la de la directriz, abriéndose en dos ramas infinitas (hipérbola).",
    "stepByStepDerivation": [
      "Razón focal d(P, F) / d(P, D) = e.",
      "Criterio 1: e < 1 ==> Elipse.",
      "Criterio 2: e = 1 ==> Parábola.",
      "Criterio 3: e > 1 ==> Hipérbola."
    ],
    "distractorRationale": {
      "A": "Correcto. Clasificación analítica universal según Pappus.",
      "B": "e = 0 es la circunferencia límite, no la parábola.",
      "C": "Inversión completa entre elipse e hipérbola.",
      "D": "e = 1 define estrictamente a la parábola."
    }
  },
  {
    "id": "ing-147",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Cuerda Focal de una Parábola",
    "problemStatement": "Para la parábola $y^2 = 4px$, si los extremos de una cuerda focal tienen ordenadas $y_1$ e $y_2$, ¿cuál es el producto de dichas ordenadas?",
    "options": {
      "A": "$y_1 y_2 = -4p^2$",
      "B": "$y_1 y_2 = 4p^2$",
      "C": "$y_1 y_2 = -p^2$",
      "D": "$y_1 y_2 = 0$"
    },
    "correctAnswer": "A",
    "formalSolution": "La recta que pasa por el foco $(p, 0)$ con pendiente $m$ tiene ecuación $x - p = \\frac{y}{m} \\implies x = p + \\frac{y}{m}$. Sustituyendo en la parábola $y^2 = 4px$: $y^2 = 4p\\left(p + \\frac{y}{m}\\right) = 4p^2 + \\frac{4p}{m}y \\implies y^2 - \\frac{4p}{m}y - 4p^2 = 0$. Por el Teorema de Cardano-Vieta, el producto de las raíces de esta ecuación cuadrática en $y$ es el término independiente: $y_1 y_2 = -4p^2$. Esta propiedad es universal e independiente de la inclinación de la cuerda.",
    "stepByStepDerivation": [
      "Ecuación de recta por el foco (p, 0): x = p + y/m.",
      "Sustituir en y^2 = 4px: y^2 - (4p/m)y - 4p^2 = 0.",
      "Por Cardano-Vieta, el producto de raíces es el término independiente c/a.",
      "y_1 · y_2 = -4p^2."
    ],
    "distractorRationale": {
      "A": "Correcto. y_1 * y_2 = -4p^2.",
      "B": "Error de signo en el término constante de la ecuación cuadrática.",
      "C": "Falta el factor 4 en la relación focal.",
      "D": "Solo sería 0 si la cuerda pasase por el vértice."
    }
  },
  {
    "id": "ing-148",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Intersección de Recta y Elipse (Condición de Secante)",
    "problemStatement": "¿Cuántos puntos de intersección tiene la recta $x + y = 5$ con la elipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$?",
    "options": {
      "A": "$0$ puntos de corte (recta exterior)",
      "B": "$2$ puntos de corte (recta secante)",
      "C": "Exactamente $1$ punto de contacto (recta tangente en $P(3.2, 1.8)$)",
      "D": "Infinitos puntos de corte"
    },
    "correctAnswer": "C",
    "formalSolution": "Despejamos $y = 5 - x$ y sustituimos en la elipse multiplicada por 144: $9x^2 + 16(5 - x)^2 = 144 \\implies 9x^2 + 16(25 - 10x + x^2) = 144 \\implies 25x^2 - 160x + 400 - 144 = 0 \\implies 25x^2 - 160x + 256 = 0$. Evaluamos el discriminante cuadrático: $\\Delta = (-160)^2 - 4(25)(256) = 25600 - 25600 = 0...$ wait! $4 \\cdot 25 = 100$, y $100 \\cdot 256 = 25600$. $\\Delta = 25600 - 25600 = 0$! Si $\\Delta = 0$, la recta es TANGENTE! Verifiquemos: $25x^2 - 160x + 256 = (5x - 16)^2 = 0 \\implies x = 16/5 = 3.2$. Luego $y = 5 - 3.2 = 1.8$. ¿Pertenece a la elipse? $3.2^2 / 16 + 1.8^2 / 9 = 10.24 / 16 + 3.24 / 9 = 0.64 + 0.36 = 1.00$. ¡Es exactamente 1 punto de tangencia! Modifiquemos la recta a $x + y = 6$ para que sea exterior o formulemos la pregunta sobre la tangencia de $x + y = 5$... Excelente: para $x + y = 5$, ¡la recta es exactamente tangente con 1 punto de contacto!",
    "stepByStepDerivation": [
      "Despejar y = 5 - x y sustituir en 9x^2 + 16y^2 = 144.",
      "Desarrollar: 9x^2 + 16(25 - 10x + x^2) = 144.",
      "Simplificar: 25x^2 - 160x + 256 = 0.",
      "Discriminante: Δ = 160^2 - 4(25)(256) = 25600 - 25600 = 0.",
      "Como Δ = 0, existe exactamente 1 punto de contacto (recta tangente)."
    ],
    "distractorRationale": {
      "A": "Sería exterior si el discriminante fuese estrictamente negativo.",
      "B": "Sería secante si el discriminante fuese positivo.",
      "C": "Correcto. Discriminante nulo Δ = 0 determina tangencia exacta en (16/5, 9/5).",
      "D": "Una recta y una cónica se cortan a lo sumo en 2 puntos."
    }
  },
  {
    "id": "ing-149",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Determinante Matricial 3x3 para Cónicas Degeneradas",
    "problemStatement": "Para la ecuación cuadrática matricial $\\begin{pmatrix} x & y & 1 \\end{pmatrix} \\begin{pmatrix} A & B/2 & D/2 \\\\ B/2 & C & E/2 \\\\ D/2 & E/2 & F \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\\\ 1 \\end{pmatrix} = 0$, ¿qué condición necesaria y suficiente determina que la cónica sea degenerada?",
    "options": {
      "A": "El determinante de la matriz ampliada $3 \\times 3$ es igual a cero ($\\det M = 0$).",
      "B": "La traza $A + C = 0$.",
      "C": "El determinante $B^2 - 4AC > 0$.",
      "D": "El coeficiente independiente $F = 0$."
    },
    "correctAnswer": "A",
    "formalSolution": "El invariante cúbico de una sección cónica es el determinante de su matriz simétrica asociada de orden $3 \\times 3$: $\\Delta_3 = \\begin{vmatrix} A & B/2 & D/2 \\\\ B/2 & C & E/2 \\\\ D/2 & E/2 & F \\end{vmatrix}$. La cónica es degenerada (se descompone en un par de rectas o en un punto aislado) si y solo si $\\Delta_3 = 0$. Si $\\Delta_3 \\neq 0$, la cónica es regular o no degenerada.",
    "stepByStepDerivation": [
      "Construir la matriz simétrica asociada 3x3.",
      "Calcular su determinante Δ_3.",
      "Teorema: La cónica es degenerada <=> det(M_3x3) = 0."
    ],
    "distractorRationale": {
      "A": "Correcto. det M = 0 es la condición analítica universal de degeneración.",
      "B": "A + C = 0 indica únicamente que las asíntotas son perpendiculares si fuese hipérbola.",
      "C": "B^2 - 4AC > 0 indica género hiperbólico, pero puede ser regular o degenerada.",
      "D": "F = 0 solo indica que la cónica pasa por el origen."
    }
  },
  {
    "id": "ing-150",
    "category": "geometria-conicas",
    "categoryLabel": "Geometría Analítica",
    "topic": "Parametrización Racional de la Circunferencia Unitaria",
    "problemStatement": "Utilizando el parámetro $t = \\tan(\\theta/2)$, ¿cuál es la parametrización racional universal de la circunferencia $x^2 + y^2 = 1$?",
    "options": {
      "A": "$x(t) = \\frac{1 - t^2}{1 + t^2}, \\quad y(t) = \\frac{2t}{1 + t^2}$",
      "B": "$x(t) = \\frac{1 + t^2}{1 - t^2}, \\quad y(t) = \\frac{2t}{1 - t^2}$",
      "C": "$x(t) = 1 - t^2, \\quad y(t) = 2t$",
      "D": "$x(t) = \\frac{t}{1 + t^2}, \\quad y(t) = \\frac{1}{1 + t^2}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Por las fórmulas de sustitución de Weierstrass (o fórmulas de la tangente del ángulo mitad): $\\cos\\theta = \\frac{1 - \\tan^2(\\theta/2)}{1 + \\tan^2(\\theta/2)} = \\frac{1 - t^2}{1 + t^2}$ e $\\sin\\theta = \\frac{2\\tan(\\theta/2)}{1 + \\tan^2(\\theta/2)} = \\frac{2t}{1 + t^2}$. Comprobando en la circunferencia: $x^2 + y^2 = \\frac{(1 - t^2)^2 + (2t)^2}{(1 + t^2)^2} = \\frac{1 - 2t^2 + t^4 + 4t^2}{(1 + t^2)^2} = \\frac{1 + 2t^2 + t^4}{(1 + t^2)^2} = \\frac{(1 + t^2)^2}{(1 + t^2)^2} = 1$.",
    "stepByStepDerivation": [
      "Fórmula de Weierstrass: cos(θ) = (1 - t^2) / (1 + t^2).",
      "Fórmula de Weierstrass: sin(θ) = 2t / (1 + t^2).",
      "Verificar suma de cuadrados: ((1-t^2)^2 + 4t^2) / (1+t^2)^2 = (1+t^2)^2 / (1+t^2)^2 = 1.",
      "Concluir parametrización racional exacta."
    ],
    "distractorRationale": {
      "A": "Correcto. Parametrización racional de Weierstrass para la circunferencia.",
      "B": "Corresponde a la hipérbola x^2 - y^2 = 1.",
      "C": "No satisface x^2 + y^2 = 1 sin el denominador de normalización.",
      "D": "No suma 1 al elevar al cuadrado."
    }
  },
  {
    "id": "ing-151",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Equilibrio Rotacional y Reacciones en Vigas Isostáticas",
    "problemStatement": "Una viga homogénea de $6\\text{ m}$ de longitud y peso despreciable se apoya horizontalmente sobre dos soportes en sus extremos $A$ y $B$. Se coloca una carga puntual concentrada de $1200\\text{ N}$ a una distancia de $2\\text{ m}$ del apoyo $A$. ¿Cuál es el valor exacto de la reacción vertical en el apoyo $B$ ($R_B$)?",
    "options": {
      "A": "$400\\text{ N}$",
      "B": "$600\\text{ N}$",
      "C": "$800\\text{ N}$",
      "D": "$1200\\text{ N}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Aplicamos la segunda condición de equilibrio estático estableciendo la suma de momentos respecto al apoyo $A$ igual a cero ($\\sum \\tau_A = 0$, sentido antihorario positivo): $\\sum \\tau_A = -(1200\\text{ N}) \\cdot (2\\text{ m}) + R_B \\cdot (6\\text{ m}) = 0$. Despejando: $6 R_B = 2400 \\implies R_B = \\frac{2400}{6} = 400\\text{ N}$. (Por equilibrio de fuerzas verticales $\\sum F_y = 0$, la reacción en $A$ es $R_A = 1200 - 400 = 800\\text{ N}$).",
    "stepByStepDerivation": [
      "Pivote en apoyo A: anular el torque de la fuerza reactiva R_A.",
      "Torque horario de la carga: tau_P = -1200 N · 2 m = -2400 N·m.",
      "Torque antihorario del apoyo B: tau_B = +R_B · 6 m.",
      "Equilibrio: -2400 + 6·R_B = 0 ==> R_B = 2400 / 6 = 400 N."
    ],
    "distractorRationale": {
      "A": "Correcto. R_B = 400 N (y R_A = 800 N).",
      "B": "600 N sería la reacción si la carga estuviese exactamente en el centro (a 3 m de cada apoyo).",
      "C": "800 N es la reacción en el apoyo A más cercano a la carga.",
      "D": "1200 N ignora la distribución de cargas entre ambos apoyos."
    }
  },
  {
    "id": "ing-152",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Teorema de Trabajo-Energía en Plano Inclinado con Fricción",
    "problemStatement": "Un bloque de masa $m = 5\\text{ kg}$ se desliza hacia abajo partiendo del reposo por un plano inclinado de $30^\\circ$ sobre la horizontal con una longitud de $10\\text{ m}$. Si el coeficiente de fricción cinética entre el bloque y la superficie es $\\mu_k = 0.2$ y considerando $g = 9.8\\text{ m/s}^2$, ¿cuál es la rapidez final del bloque al llegar a la base del plano?",
    "options": {
      "A": "$8.0\\text{ m/s}$ (aproximadamente)",
      "B": "$9.9\\text{ m/s}$",
      "C": "$5.5\\text{ m/s}$",
      "D": "$14.0\\text{ m/s}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La altura vertical descendida es $h = d\\sin(30^\\circ) = 10(0.5) = 5\\text{ m}$. La energía potencial gravitatoria inicial es $E_{p,i} = mgh = (5)(9.8)(5) = 245\\text{ J}$. La fuerza normal perpendicular al plano es $N = mg\\cos(30^\\circ) = (5)(9.8)(\\frac{\\sqrt{3}}{2}) \\approx 42.44\\text{ N}$. La fuerza de fricción cinética es $f_k = \\mu_k N = 0.2(42.44) \\approx 8.49\\text{ N}$. El trabajo mecánico disipado por la fricción es $W_{fric} = -f_k \\cdot d = -8.49(10) = -84.9\\text{ J}$. Por el principio de conservación de energía: $E_{k,f} = E_{p,i} + W_{fric} = 245 - 84.9 = 160.1\\text{ J}$. Despejando la velocidad final: $E_{k,f} = \\frac{1}{2}m v_f^2 \\implies v_f = \\sqrt{\\frac{2(160.1)}{5}} = \\sqrt{64.04} \\approx 8.00\\text{ m/s}$.",
    "stepByStepDerivation": [
      "Altura h = 10 · sin(30°) = 5 m.",
      "Energía potencial inicial: Ep = 5 · 9.8 · 5 = 245 J.",
      "Fuerza normal: N = 5 · 9.8 · cos(30°) ≈ 42.44 N.",
      "Fuerza de fricción fk = 0.2 · 42.44 = 8.49 N.",
      "Trabajo disipado por fricción: W = -8.49 · 10 = -84.9 J.",
      "Energía cinética final: Ek = 245 - 84.9 = 160.1 J.",
      "Velocidad final: v_f = sqrt(2 · 160.1 / 5) = sqrt(64.04) ≈ 8.0 m/s."
    ],
    "distractorRationale": {
      "A": "Correcto. Calculado rigurosamente mediante balance de trabajo-energía: v_f ≈ 8.0 m/s.",
      "B": "9.9 m/s sería la velocidad sin fricción (sqrt(2*9.8*5) = sqrt(98) ≈ 9.9 m/s).",
      "C": "Subestimación del trabajo motor del peso.",
      "D": "Sobreestimación que viola la conservación de energía."
    }
  },
  {
    "id": "ing-153",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Cosenos Directores de un Vector en R3",
    "problemStatement": "Un vector de fuerza en el espacio $\\mathbb{R}^3$ forma ángulos directores $\\alpha = 60^\\circ$ con el eje $x$ positivo y $\\beta = 45^\\circ$ con el eje $y$ positivo. Si el ángulo director $\\gamma$ con el eje $z$ positivo es agudo, ¿cuál es su valor exacto?",
    "options": {
      "A": "$\\gamma = 60^\\circ$ ($\\frac{\\pi}{3}\\text{ rad}$)",
      "B": "$\\gamma = 45^\\circ$ ($\\frac{\\pi}{4}\\text{ rad}$)",
      "C": "$\\gamma = 30^\\circ$ ($\\frac{\\pi}{6}\\text{ rad}$)",
      "D": "$\\gamma = 90^\\circ$ ($\\frac{\\pi}{2}\\text{ rad}$)"
    },
    "correctAnswer": "A",
    "formalSolution": "La identidad fundamental de los cosenos directores de cualquier vector no nulo en tres dimensiones establece: $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$. Sustituyendo los valores conocidos: $\\cos(60^\\circ) = \\frac{1}{2} \\implies \\cos^2(60^\\circ) = \\frac{1}{4}$; $\\cos(45^\\circ) = \\frac{\\sqrt{2}}{2} \\implies \\cos^2(45^\\circ) = \\frac{1}{2} = \\frac{2}{4}$. Sumando: $\\frac{1}{4} + \\frac{2}{4} + \\cos^2\\gamma = 1 \\implies \\frac{3}{4} + \\cos^2\\gamma = 1 \\implies \\cos^2\\gamma = \\frac{1}{4}$. Al ser $\\gamma$ un ángulo agudo, $\\cos\\gamma = +\\frac{1}{2} \\implies \\gamma = 60^\\circ$.",
    "stepByStepDerivation": [
      "Identidad: cos^2(α) + cos^2(β) + cos^2(γ) = 1.",
      "cos(60°) = 1/2 ==> cos^2(60°) = 1/4.",
      "cos(45°) = 1/sqrt(2) ==> cos^2(45°) = 1/2 = 2/4.",
      "1/4 + 2/4 + cos^2(γ) = 1 ==> cos^2(γ) = 1/4.",
      "Como γ es agudo: cos(γ) = 1/2 ==> γ = 60°."
    ],
    "distractorRationale": {
      "A": "Correcto. cos^2(γ) = 1 - 3/4 = 1/4 ==> γ = 60°.",
      "B": "Error al asumir que dos ángulos son iguales a 45° (daría suma 1/4 + 1/2 + 1/2 = 5/4 > 1).",
      "C": "cos^2(30°) = 3/4 daría una suma total de 6/4 > 1.",
      "D": "cos(90°) = 0 daría suma 3/4 ≠ 1."
    }
  },
  {
    "id": "ing-154",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Producto Escalar y Ángulo entre dos Fuerzas Espaciales",
    "problemStatement": "Dadas dos fuerzas vectoriales concurrentes $\\vec{F}_1 = (2\\hat{i} - \\hat{j} + 2\\hat{k})\\text{ N}$ y $\\vec{F}_2 = (\\hat{i} + 2\\hat{j} + 2\\hat{k})\\text{ N}$, ¿cuál es el coseno del ángulo $\\theta$ que forman entre sí?",
    "options": {
      "A": "$\\cos\\theta = \\frac{4}{9}$",
      "B": "$\\cos\\theta = \\frac{2}{3}$",
      "C": "$\\cos\\theta = \\frac{5}{9}$",
      "D": "$\\cos\\theta = 0$"
    },
    "correctAnswer": "A",
    "formalSolution": "El producto escalar de dos vectores se relaciona con sus normas mediante $\\vec{F}_1 \\cdot \\vec{F}_2 = \\|\\vec{F}_1\\| \\|\\vec{F}_2\\| \\cos\\theta$. Calculamos el producto escalar: $\\vec{F}_1 \\cdot \\vec{F}_2 = (2)(1) + (-1)(2) + (2)(2) = 2 - 2 + 4 = 4\\text{ N}^2$. Las normas de los vectores son: $\\|\\vec{F}_1\\| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3\\text{ N}$, y $\\|\\vec{F}_2\\| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{1 + 4 + 4} = 3\\text{ N}$. Por lo tanto: $\\cos\\theta = \\frac{4}{3 \\cdot 3} = \\frac{4}{9}$.",
    "stepByStepDerivation": [
      "Producto escalar: 2(1) + (-1)(2) + 2(2) = 2 - 2 + 4 = 4.",
      "Norma ||F_1|| = sqrt(4 + 1 + 4) = 3.",
      "Norma ||F_2|| = sqrt(1 + 4 + 4) = 3.",
      "cos(θ) = (F_1 · F_2) / (||F_1|| · ||F_2||) = 4 / (3 · 3) = 4/9."
    ],
    "distractorRationale": {
      "A": "Correcto. cos(θ) = 4 / 9 ≈ 0.444 (θ ≈ 63.6°).",
      "B": "Error al no elevar al cuadrado la norma en el producto de denominadores.",
      "C": "Error en la suma de los productos escalares componentes.",
      "D": "Solo sería 0 si fuesen ortogonales (producto punto nulo)."
    }
  },
  {
    "id": "ing-155",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Producto Vectorial (Cruz) en el Espacio Tridimensional",
    "problemStatement": "Calcule el producto vectorial $\\vec{A} \\times \\vec{B}$ para los vectores $\\vec{A} = \\hat{i} + 2\\hat{k}$ y $\\vec{B} = 3\\hat{j} + \\hat{k}$.",
    "options": {
      "A": "$-6\\hat{i} - \\hat{j} + 3\\hat{k}$",
      "B": "$6\\hat{i} + \\hat{j} - 3\\hat{k}$",
      "C": "$-6\\hat{i} + \\hat{j} + 3\\hat{k}$",
      "D": "$3\\hat{i} + 2\\hat{j} + 6\\hat{k}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Escribimos los vectores en forma de componentes: $\\vec{A} = (1, 0, 2)$ y $\\vec{B} = (0, 3, 1)$. El producto vectorial se calcula mediante el determinante formal: $\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 1 & 0 & 2 \\\\ 0 & 3 & 1 \\end{vmatrix} = \\hat{i}(0(1) - 2(3)) - \\hat{j}(1(1) - 2(0)) + \\hat{k}(1(3) - 0(0)) = \\hat{i}(-6) - \\hat{j}(1) + \\hat{k}(3) = -6\\hat{i} - \\hat{j} + 3\\hat{k}$.",
    "stepByStepDerivation": [
      "Componente i: (0)(1) - (2)(3) = -6.",
      "Componente j: -((1)(1) - (2)(0)) = -1.",
      "Componente k: (1)(3) - (0)(0) = 3.",
      "Vector resultante: (-6, -1, 3)."
    ],
    "distractorRationale": {
      "A": "Correcto. (-6, -1, 3).",
      "B": "Corresponde a B x A (inversión de sentido por anticonmutatividad).",
      "C": "Error de signos en la componente j.",
      "D": "Error en la expansión de menores."
    }
  },
  {
    "id": "ing-156",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Área de Paralelogramo mediante la Magnitud del Producto Cruz",
    "problemStatement": "Dos vectores en el plano $xy$ dados por $\\vec{A} = (4, 1, 0)$ y $\\vec{B} = (1, 3, 0)$ forman dos lados adyacentes de un paralelogramo. ¿Cuál es el área exacta de dicho paralelogramo?",
    "options": {
      "A": "$11\\text{ unidades cuadradas}$",
      "B": "$13\\text{ unidades cuadradas}$",
      "C": "$5.5\\text{ unidades cuadradas}$",
      "D": "$7\\text{ unidades cuadradas}$"
    },
    "correctAnswer": "A",
    "formalSolution": "El área de un paralelogramo sustentado por dos vectores es igual a la magnitud de su producto vectorial: $\\text{Área} = \\|\\vec{A} \\times \\vec{B}\\|$. Evaluamos el producto cruz: $\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 4 & 1 & 0 \\\\ 1 & 3 & 0 \\end{vmatrix} = \\hat{k}(4(3) - 1(1)) = 11\\hat{k}$. La magnitud es $\\|11\\hat{k}\\| = 11\\text{ u}^2$.",
    "stepByStepDerivation": [
      "Componentes z de ambos vectores son cero ==> el producto cruz solo tiene componente k.",
      "k = (4)(3) - (1)(1) = 12 - 1 = 11.",
      "Área = ||(0, 0, 11)|| = 11 u^2."
    ],
    "distractorRationale": {
      "A": "Correcto. Área = 12 - 1 = 11 unidades cuadradas.",
      "B": "Error al sumar en vez de restar los productos cruzados (12 + 1 = 13).",
      "C": "5.5 u^2 es el área del triángulo formado por los vectores (la mitad).",
      "D": "Error aritmético."
    }
  },
  {
    "id": "ing-157",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Triple Producto Escalar y Coplanaridad",
    "problemStatement": "Tres vectores de fuerza son $\\vec{F}_1 = (1, 2, 3)$, $\\vec{F}_2 = (3, -1, 2)$ y $\\vec{F}_3 = (4, 1, 5)$. ¿Cuál es el valor de su triple producto escalar $\\vec{F}_1 \\cdot (\\vec{F}_2 \\times \\vec{F}_3)$ y qué conclusión física se deriva?",
    "options": {
      "A": "El triple producto escalar es $0$, lo que demuestra que las tres fuerzas son estrictamente coplanares.",
      "B": "El triple producto escalar es $14$, formando un volumen tridimensional no nulo.",
      "C": "El triple producto escalar es $-5$, lo que indica equilibrio dinámico.",
      "D": "Las fuerzas no se pueden operar vectorialmente."
    },
    "correctAnswer": "A",
    "formalSolution": "El triple producto escalar equivale al determinante de la matriz formada por los tres vectores: $\\Delta = \\begin{vmatrix} 1 & 2 & 3 \\\\ 3 & -1 & 2 \\\\ 4 & 1 & 5 \\end{vmatrix}$. Notamos que la tercera fila es la suma exacta de las dos primeras: $F_3 = F_1 + F_2$ ($(1+3, 2-1, 3+2) = (4, 1, 5)$). Como una fila es combinación lineal de las otras dos, el determinante es idénticamente cero ($\\Delta = 0$). Físicamente, un volumen nulo en el paralelepípedo sustentado significa que los tres vectores yacen en un mismo plano (son coplanares).",
    "stepByStepDerivation": [
      "Observar que F_3 = F_1 + F_2: (1+3, 2-1, 3+2) = (4, 1, 5).",
      "Filas linealmente dependientes implican determinante nulo.",
      "Triple producto escalar = det = 0.",
      "Físicamente, volumen = 0 define coplanaridad estricta."
    ],
    "distractorRationale": {
      "A": "Correcto. F_1 · (F_2 x F_3) = 0 y vectores coplanares.",
      "B": "Error de cálculo ignorando la dependencia lineal evidente.",
      "C": "El determinante da exactamente cero.",
      "D": "Las tres fuerzas pertenecen a R^3 y admiten producto mixto bien definido."
    }
  },
  {
    "id": "ing-158",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Primera Condición de Equilibrio (Partícula Suspendida)",
    "problemStatement": "Una lámpara de masa $m = 10\\text{ kg}$ cuelga en reposo sostenida por dos cables idénticos que forman cada uno un ángulo de $45^\\circ$ con el techo horizontal. Tomando $g = 9.8\\text{ m/s}^2$, ¿cuál es la tensión $T$ en cada cable?",
    "options": {
      "A": "$T = 49\\sqrt{2}\\text{ N} \\approx 69.3\\text{ N}$",
      "B": "$T = 98\\text{ N}$",
      "C": "$T = 49\\text{ N}$",
      "D": "$T = 98\\sqrt{2}\\text{ N} \\approx 138.6\\text{ N}$"
    },
    "correctAnswer": "A",
    "formalSolution": "El peso de la lámpara es $W = mg = (10)(9.8) = 98\\text{ N}$. Por simetría, la tensión en ambos cables es igual ($T_1 = T_2 = T$). Aplicamos la primera condición de equilibrio en el eje vertical: $\\sum F_y = 0 \\implies T\\sin(45^\\circ) + T\\sin(45^\\circ) - W = 0 \\implies 2T\\sin(45^\\circ) = 98$. Como $\\sin(45^\\circ) = \\frac{\\sqrt{2}}{2}$: $2T \\left(\\frac{\\sqrt{2}}{2}\\right) = 98 \\implies T\\sqrt{2} = 98 \\implies T = \\frac{98}{\\sqrt{2}} = 49\\sqrt{2} \\approx 69.3\\text{ N}$.",
    "stepByStepDerivation": [
      "Peso W = 10 · 9.8 = 98 N.",
      "Equilibrio vertical: 2·T·sin(45°) = W.",
      "2·T·(sqrt(2)/2) = 98 ==> T·sqrt(2) = 98.",
      "T = 98 / sqrt(2) = 49·sqrt(2) ≈ 69.3 N."
    ],
    "distractorRationale": {
      "A": "Correcto. T = 49*sqrt(2) N ≈ 69.3 N.",
      "B": "98 N sería la tensión si un solo cable vertical soportase todo el peso.",
      "C": "49 N sería la tensión si los cables fuesen paralelos verticales (98/2 = 49 N).",
      "D": "Error al multiplicar por sqrt(2) en vez de dividir."
    }
  },
  {
    "id": "ing-159",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Teorema de Lami para Fuerzas Concurrentes Coplanarias",
    "problemStatement": "Tres fuerzas coplanares $\\vec{F}_1$, $\\vec{F}_2$ y $\\vec{F}_3$ mantienen una partícula en equilibrio. Si los ángulos opuestos a cada fuerza son $\\alpha$, $\\beta$ y $\\gamma$ respectivamente, ¿cuál es la relación analítica del Teorema de Lami?",
    "options": {
      "A": "$\\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma}$",
      "B": "$\\frac{F_1}{\\cos\\alpha} = \\frac{F_2}{\\cos\\beta} = \\frac{F_3}{\\cos\\gamma}$",
      "C": "$F_1\\sin\\alpha + F_2\\sin\\beta + F_3\\sin\\gamma = 0$",
      "D": "$F_1^2 + F_2^2 = F_3^2$"
    },
    "correctAnswer": "A",
    "formalSolution": "El Teorema de Lami es la aplicación directa de la Ley de los Senos al polígono cerrado de tres fuerzas coplanares en equilibrio estático ($\\vec{F}_1 + \\vec{F}_2 + \\vec{F}_3 = \\vec{0}$). Establece que el módulo de cada fuerza es directamente proporcional al seno del ángulo comprendido entre las otras dos fuerzas concurrentes: $\\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma}$.",
    "stepByStepDerivation": [
      "Las tres fuerzas en equilibrio forman un triángulo cerrado de vectores.",
      "Aplicar la Ley de Senos en el triángulo de fuerzas.",
      "Como sin(180° - θ) = sin(θ), la proporción se mantiene para los ángulos entre vectores.",
      "F_1 / sin(α) = F_2 / sin(β) = F_3 / sin(γ)."
    ],
    "distractorRationale": {
      "A": "Correcto. Enunciado canónico del Teorema de Lami.",
      "B": "La relación utiliza la función seno, no coseno.",
      "C": "No es una ecuación de adición lineal.",
      "D": "Solo aplicaría si dos de las fuerzas fuesen ortogonales y la tercera la equilibrante."
    }
  },
  {
    "id": "ing-160",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Torque de una Fuerza Bidimensional",
    "problemStatement": "Una fuerza constante de magnitud $F = 50\\text{ N}$ se aplica perpendicularmente al extremo de una llave inglesa de longitud $L = 0.4\\text{ m}$. ¿Cuál es el momento o torque generado respecto al centro del perno?",
    "options": {
      "A": "$20\\text{ N}\\cdot\\text{m}$",
      "B": "$125\\text{ N}\\cdot\\text{m}$",
      "C": "$200\\text{ N}\\cdot\\text{m}$",
      "D": "$12.5\\text{ N}\\cdot\\text{m}$"
    },
    "correctAnswer": "A",
    "formalSolution": "El torque escalar cuando la fuerza es perpendicular al brazo de palanca ($\\theta = 90^\\circ$) es $\\tau = F \\cdot d \\cdot \\sin(90^\\circ) = F \\cdot L$. Sustituyendo valores: $\\tau = (50\\text{ N}) \\cdot (0.4\\text{ m}) = 20\\text{ N}\\cdot\\text{m}$.",
    "stepByStepDerivation": [
      "Brazo de palanca: d = 0.4 m.",
      "Fuerza perpendicular: F = 50 N.",
      "Torque: tau = F · d = 50 · 0.4 = 20 N·m."
    ],
    "distractorRationale": {
      "A": "Correcto. tau = 50 * 0.4 = 20 N*m.",
      "B": "Error al dividir en lugar de multiplicar (50 / 0.4 = 125).",
      "C": "Error al multiplicar por 4 en vez de 0.4.",
      "D": "Error en la posición del punto decimal."
    }
  },
  {
    "id": "ing-161",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Torque Vectorial en Tres Dimensiones",
    "problemStatement": "Una fuerza $\\vec{F} = (0\\hat{i} + 0\\hat{j} + 100\\hat{k})\\text{ N}$ actúa en el punto con vector de posición $\\vec{r} = (0.2\\hat{i} + 0.5\\hat{j} + 0\\hat{k})\\text{ m}$. Calcule el vector momento de fuerza $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$ respecto al origen.",
    "options": {
      "A": "$\\vec{\\tau} = (50\\hat{i} - 20\\hat{j} + 0\\hat{k})\\text{ N}\\cdot\\text{m}$",
      "B": "$\\vec{\\tau} = (-50\\hat{i} + 20\\hat{j} + 0\\hat{k})\\text{ N}\\cdot\\text{m}$",
      "C": "$\\vec{\\tau} = (20\\hat{i} + 50\\hat{j} + 0\\hat{k})\\text{ N}\\cdot\\text{m}$",
      "D": "$\\vec{\\tau} = (0\\hat{i} + 0\\hat{j} + 70\\hat{k})\\text{ N}\\cdot\\text{m}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Calculamos el producto vectorial: $\\vec{\\tau} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 0.2 & 0.5 & 0 \\\\ 0 & 0 & 100 \\end{vmatrix}$. Desarrollando por la primera fila: $\\hat{i}(0.5(100) - 0(0)) - \\hat{j}(0.2(100) - 0(0)) + \\hat{k}(0.2(0) - 0.5(0)) = 50\\hat{i} - 20\\hat{j} + 0\\hat{k}\\text{ N}\\cdot\\text{m}$.",
    "stepByStepDerivation": [
      "Componente i: 0.5 · 100 - 0 · 0 = +50.",
      "Componente j: -(0.2 · 100 - 0 · 0) = -20.",
      "Componente k: 0.2 · 0 - 0.5 · 0 = 0.",
      "Vector torque: (50, -20, 0) N·m."
    ],
    "distractorRationale": {
      "A": "Correcto. (50, -20, 0) N·m.",
      "B": "Signos invertidos por anticonmutatividad (F x r en vez de r x F).",
      "C": "Componentes intercambiadas.",
      "D": "El torque es perpendicular a la fuerza y al brazo, no puede estar alineado con F (eje z)."
    }
  },
  {
    "id": "ing-162",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Momento de una Cupla o Par de Fuerzas",
    "problemStatement": "Dos fuerzas paralelas de igual magnitud $F = 60\\text{ N}$ pero sentidos opuestos están separadas por una distancia perpendicular $d = 0.25\\text{ m}$. ¿Cuál es el momento del par (cupla) y cuál es su propiedad fundamental?",
    "options": {
      "A": "$\\tau = 15\\text{ N}\\cdot\\text{m}$, y su valor es exactamente el mismo respecto a cualquier punto de referencia del espacio.",
      "B": "$\\tau = 0\\text{ N}\\cdot\\text{m}$, porque las fuerzas se cancelan vectorialmente.",
      "C": "$\\tau = 30\\text{ N}\\cdot\\text{m}$, pero depende de la distancia al origen de coordenadas.",
      "D": "$\\tau = 240\\text{ N}\\cdot\\text{m}$."
    },
    "correctAnswer": "A",
    "formalSolution": "Un par de fuerzas tiene resultante nula $\\sum \\vec{F} = \\vec{0}$, por lo que no produce aceleración lineal. El momento de la cupla respecto a cualquier punto $O$ es $\\vec{\\tau}_O = \\vec{r}_A \\times \\vec{F} + \\vec{r}_B \\times (-\\vec{F}) = (\\vec{r}_A - \\vec{r}_B) \\times \\vec{F} = \\vec{r}_{BA} \\times \\vec{F}$. La magnitud es independiente de la elección del punto $O$ y vale $\\tau = F \\cdot d = (60\\text{ N}) \\cdot (0.25\\text{ m}) = 15\\text{ N}\\cdot\\text{m}$. Es un vector libre.",
    "stepByStepDerivation": [
      "Magnitud del par: tau = F · d.",
      "tau = 60 N · 0.25 m = 15 N·m.",
      "Demostrar independencia de origen: tau_O = (r_A - r_B) x F = r_BA x F.",
      "Concluir que el torque de un par es un vector libre constante."
    ],
    "distractorRationale": {
      "A": "Correcto. 15 N*m y vector libre independiente de la posición del centro de momentos.",
      "B": "La suma de fuerzas es cero, pero el momento resultante es no nulo (rotación pura).",
      "C": "Error aritmético y falsa dependencia del origen.",
      "D": "Error al dividir en lugar de multiplicar (60 / 0.25 = 240)."
    }
  },
  {
    "id": "ing-163",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Viga con Carga Uniformemente Distribuida",
    "problemStatement": "Una viga de $L = 6\\text{ m}$ de longitud simplemente apoyada en sus extremos $A$ y $B$ soporta una carga continua uniforme $w = 200\\text{ N/m}$. ¿Cuáles son las reacciones verticales en los apoyos?",
    "options": {
      "A": "$R_A = 600\\text{ N}$ y $R_B = 600\\text{ N}$",
      "B": "$R_A = 1200\\text{ N}$ y $R_B = 1200\\text{ N}$",
      "C": "$R_A = 400\\text{ N}$ y $R_B = 800\\text{ N}$",
      "D": "$R_A = 300\\text{ N}$ y $R_B = 300\\text{ N}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La carga total concentrada equivalente es el área del diagrama rectangular de carga: $W = w \\cdot L = (200\\text{ N/m})(6\\text{ m}) = 1200\\text{ N}$. Esta resultante actúa en el centroide del rectángulo, a $3\\text{ m}$ de cada apoyo. Por simetría estática y equilibrio vertical: $\\sum F_y = 0 \\implies R_A + R_B = 1200\\text{ N} \\implies R_A = R_B = \\frac{1200}{2} = 600\\text{ N}$.",
    "stepByStepDerivation": [
      "Carga total: W = w · L = 200 · 6 = 1200 N.",
      "Ubicación del centroide: x_c = L/2 = 3 m.",
      "Equilibrio simétrico: R_A = R_B = W / 2 = 1200 / 2 = 600 N."
    ],
    "distractorRationale": {
      "A": "Correcto. Carga distribuida simétrica reparte 600 N a cada apoyo.",
      "B": "1200 N en cada apoyo duplicaría la carga total requerida por equilibrio.",
      "C": "Distribución asimétrica no justificada para una carga homogénea uniforme.",
      "D": "Subestimación a la mitad de la carga."
    }
  },
  {
    "id": "ing-164",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Viga con Carga Triangular Distribuida",
    "problemStatement": "Una viga de longitud $L = 6\\text{ m}$ se apoya en $A$ y $B$. Soporta una carga triangular que varía linealmente desde $0\\text{ N/m}$ en el apoyo $A$ hasta un máximo de $w_0 = 600\\text{ N/m}$ en el apoyo $B$. ¿Cuál es el valor de la reacción vertical en el apoyo $B$ ($R_B$)?",
    "options": {
      "A": "$R_B = 1200\\text{ N}$",
      "B": "$R_B = 600\\text{ N}$",
      "C": "$R_B = 900\\text{ N}$",
      "D": "$R_B = 1800\\text{ N}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La carga total equivalente es el área del triángulo de carga: $W = \\frac{1}{2} w_0 L = \\frac{1}{2}(600\\text{ N/m})(6\\text{ m}) = 1800\\text{ N}$. El centroide de un triángulo se ubica a $\\frac{2}{3}L$ del vértice $A$: $d_A = \\frac{2}{3}(6) = 4\\text{ m}$. Tomamos momentos en el apoyo $A$ ($\\sum \\tau_A = 0$): $-W \\cdot d_A + R_B \\cdot L = 0 \\implies -(1800\\text{ N})(4\\text{ m}) + R_B (6\\text{ m}) = 0 \\implies 6 R_B = 7200 \\implies R_B = 1200\\text{ N}$. (Por tanto, $R_A = 1800 - 1200 = 600\\text{ N}$).",
    "stepByStepDerivation": [
      "Carga total: W = (1/2) · 600 · 6 = 1800 N.",
      "Posición centroide desde A: x = (2/3) · 6 = 4 m.",
      "Torque en A: -1800 · 4 + R_B · 6 = 0.",
      "Despejar: R_B = 7200 / 6 = 1200 N."
    ],
    "distractorRationale": {
      "A": "Correcto. R_B = 1200 N y R_A = 600 N.",
      "B": "600 N es la reacción en el apoyo A más alejado del vértice de carga máxima.",
      "C": "900 N asumiría erróneamente un centroide en la mitad L/2.",
      "D": "1800 N es la carga total no distribuida."
    }
  },
  {
    "id": "ing-165",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Viga en Voladizo (Empotramiento y Momento Reactivo)",
    "problemStatement": "Una viga en voladizo (empotrada en el extremo $A$ y libre en $B$) tiene una longitud $L = 4\\text{ m}$. En el extremo libre $B$ se aplica una carga vertical descendente $P = 500\\text{ N}$. ¿Cuáles son las reacciones en el empotramiento $A$?",
    "options": {
      "A": "Fuerza cortante vertical $R_A = 500\\text{ N}$ hacia arriba y Momento de empotramiento $M_A = 2000\\text{ N}\\cdot\\text{m}$ en sentido antihorario.",
      "B": "$R_A = 500\\text{ N}$ y $M_A = 0\\text{ N}\\cdot\\text{m}$.",
      "C": "$R_A = 2000\\text{ N}$ y $M_A = 500\\text{ N}\\cdot\\text{m}$.",
      "D": "$R_A = 250\\text{ N}$ y $M_A = 1000\\text{ N}\\cdot\\text{m}$."
    },
    "correctAnswer": "A",
    "formalSolution": "En un soporte de empotramiento rígido bidimensional se generan tres reacciones: fuerza horizontal $R_{Ax} = 0$, fuerza vertical $R_{Ay}$, y momento reactivo $M_A$. Por equilibrio vertical: $\\sum F_y = 0 \\implies R_{Ay} - P = 0 \\implies R_{Ay} = 500\\text{ N}$. Por equilibrio de momentos respecto al punto $A$: $\\sum \\tau_A = 0 \\implies M_A - P \\cdot L = 0 \\implies M_A = P \\cdot L = (500\\text{ N})(4\\text{ m}) = 2000\\text{ N}\\cdot\\text{m}$.",
    "stepByStepDerivation": [
      "Equilibrio de fuerzas verticales: R_Ay = P = 500 N.",
      "Brazo de momento: L = 4 m.",
      "Momento reactivo de empotramiento: M_A = P · L = 500 · 4 = 2000 N·m."
    ],
    "distractorRationale": {
      "A": "Correcto. Cortante 500 N y momento flexionante 2000 N*m.",
      "B": "Un empotramiento sin momento no resistiría flexión y colapsaría como apoyo simple.",
      "C": "Inversión de magnitudes entre fuerza y momento.",
      "D": "Valores arbitrariamente reducidos."
    }
  },
  {
    "id": "ing-166",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Identificación de Miembros de Fuerza Cero en Armaduras",
    "problemStatement": "En el análisis estructural de armaduras por el Método de los Nodos, ¿cuál de las siguientes condiciones garantiza inequívocamente que dos elementos que convergen en un nodo sean miembros de fuerza cero?",
    "options": {
      "A": "Dos elementos no colineales se unen en un nodo que no soporta ninguna carga externa ni reacción de apoyo.",
      "B": "Tres elementos forman un triángulo equilátero bajo una carga central.",
      "C": "Dos elementos colineales se unen en un apoyo de rodillo.",
      "D": "Todos los elementos conectados a un soporte articulado."
    },
    "correctAnswer": "A",
    "formalSolution": "Principio de elementos de fuerza cero: Si solo dos miembros no colineales se unen en un nodo libre (sin carga externa ni reacciones de apoyo), planteando un sistema de ejes coordenados alineado con uno de los miembros, la sumatoria de fuerzas perpendicular a dicho miembro involucra únicamente la componente del segundo miembro, obligándola a ser cero ($F_2\\sin\\theta = 0 \\implies F_2 = 0$). Consecuentemente, por equilibrio en el otro eje, la fuerza en el primer miembro también es cero ($F_1 = 0$). Ambos son miembros de fuerza cero.",
    "stepByStepDerivation": [
      "Nodo con dos barras no colineales y sin carga externa: sum F_x = 0, sum F_y = 0.",
      "Elegir eje y perpendicular a la barra 1.",
      "sum F_y = F_2 · sin(θ) = 0 ==> como θ ≠ 0, F_2 = 0.",
      "sum F_x = F_1 + F_2 · cos(θ) = 0 ==> F_1 = 0.",
      "Ambos miembros tienen fuerza axial nula."
    ],
    "distractorRationale": {
      "A": "Correcto. Criterio canónico de miembros de fuerza cero para dos elementos no colineales sin carga.",
      "B": "Un triángulo cargado transmite esfuerzos axiales significativos.",
      "C": "Dos barras colineales transmiten fuerza mutua de igual magnitud.",
      "D": "Los miembros en apoyos absorben las reacciones del suelo."
    }
  },
  {
    "id": "ing-167",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Método de las Secciones en Armaduras Isostáticas",
    "problemStatement": "¿Cuál es la principal ventaja técnica del Método de las Secciones frente al Método de los Nodos para el cálculo de esfuerzos en armaduras?",
    "options": {
      "A": "Permite determinar la fuerza interna en un miembro específico directamente cortando a través de la armadura (máximo 3 miembros desconocidos) sin necesidad de resolver progresivamente todos los nodos previos.",
      "B": "Elimina la necesidad de calcular previamente las reacciones en los apoyos.",
      "C": "Solo funciona para miembros sometidos a torsión pura.",
      "D": "Convierte el análisis en un problema puramente escalar unidimensional."
    },
    "correctAnswer": "A",
    "formalSolution": "El Método de las Secciones se basa en el principio de que si una estructura completa está en equilibrio, cualquier sección o parte cortada de ella también debe estar en equilibrio estático bajo la acción de las cargas externas y las fuerzas axiales internas que actúan en la sección de corte. Al cortar a través de no más de 3 barras no concurrentes, se obtienen 3 ecuaciones independientes de equilibrio ($\\,\\sum F_x = 0\\,$, $\\,\\sum F_y = 0\\,$, $\\,\\sum M_O = 0\\,$), permitiendo despejar directamente el esfuerzo del miembro de interés sin calcular los nodos anteriores.",
    "stepByStepDerivation": [
      "Cortar la armadura en dos partes a través del miembro deseado.",
      "El corte expone las fuerzas internas como externas en el diagrama de cuerpo libre.",
      "Aplicar sumatoria de momentos respecto a la intersección de dos barras desconocidas.",
      "Despejar directamente la fuerza en la tercera barra sin recorrer nodos previos."
    ],
    "distractorRationale": {
      "A": "Correcto. Determinación directa sin propagación secuencial por nodos.",
      "B": "Falso, generalmente se requiere calcular primero las reacciones globales de la armadura.",
      "C": "Las armaduras ideales solo transmiten cargas axiales (tensión/compresión), no torsión.",
      "D": "El método aplica las tres ecuaciones completas de equilibrio del cuerpo rígido 2D."
    }
  },
  {
    "id": "ing-168",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Centroide de una Región Semicircular",
    "problemStatement": "¿A qué distancia vertical $\\bar{y}$ de la base plana se encuentra el centroide de una región semicircular homogénea de radio $R$?",
    "options": {
      "A": "$\\bar{y} = \\frac{4R}{3\\pi}$",
      "B": "$\\bar{y} = \\frac{R}{2}$",
      "C": "$\\bar{y} = \\frac{3R}{8}$",
      "D": "$\\bar{y} = \\frac{2R}{\\pi}$"
    },
    "formalSolution": "Utilizando integración en coordenadas polares ($y = r\\sin\\theta$, diferencial de área $dA = r\\,dr\\,d\\theta$ con $r \\in [0, R]$ y $\\theta \\in [0, \\pi]$): el momento de primer orden es $Q_x = \\int_0^\\pi \\int_0^R (r\\sin\\theta) r\\,dr\\,d\\theta = \\left(\\int_0^R r^2\\,dr\\right) \\left(\\int_0^\\pi \\sin\\theta\\,d\\theta\\right) = \\left(\\frac{R^3}{3}\\right) [-\\cos\\theta]_0^\\pi = \\frac{R^3}{3}(2) = \\frac{2R^3}{3}$. El área del semicírculo es $A = \\frac{\\pi R^2}{2}$. Por definición: $\\bar{y} = \\frac{Q_x}{A} = \\frac{2R^3/3}{\\pi R^2/2} = \\frac{4R}{3\\pi}$.",
    "correctAnswer": "A",
    "stepByStepDerivation": [
      "Momento estático Q_x = integral de y dA = (2/3)·R^3.",
      "Área del semicírculo = (1/2)·π·R^2.",
      "y_barra = Q_x / Área = ((2/3)·R^3) / ((1/2)·π·R^2).",
      "Simplificar: (2/3) · (2/π) · R = 4R / (3π)."
    ],
    "distractorRationale": {
      "A": "Correcto. y_barra = 4R / (3pi) ≈ 0.4244 R.",
      "B": "R/2 es una aproximación tosca que ignora la reducción de masa hacia la cúspide.",
      "C": "3R/8 corresponde al centro de masa de un hemisferio sólido tridimensional.",
      "D": "2R/pi corresponde al centroide de un arco de alambre semicircular (línea, no área)."
    }
  },
  {
    "id": "ing-169",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Centro de Masa de un Sistema Discreto de Partículas",
    "problemStatement": "Dos partículas en el plano $xy$ tienen masas $m_1 = 2\\text{ kg}$ ubicada en $(1, 2)\\text{ m}$ y $m_2 = 3\\text{ kg}$ ubicada en $(4, 7)\\text{ m}$. ¿Cuáles son las coordenadas del centro de masa $(x_{cm}, y_{cm})$?",
    "options": {
      "A": "$(x_{cm}, y_{cm}) = (2.8, 5.0)\\text{ m}$",
      "B": "$(x_{cm}, y_{cm}) = (2.5, 4.5)\\text{ m}$",
      "C": "$(x_{cm}, y_{cm}) = (3.0, 5.5)\\text{ m}$",
      "D": "$(x_{cm}, y_{cm}) = (1.4, 2.5)\\text{ m}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La masa total es $M = m_1 + m_2 = 2 + 3 = 5\\text{ kg}$. Las coordenadas del centro de masa son el promedio ponderado: $x_{cm} = \\frac{m_1 x_1 + m_2 x_2}{M} = \\frac{2(1) + 3(4)}{5} = \\frac{2 + 12}{5} = \\frac{14}{5} = 2.8\\text{ m}$. La coordenada $y_{cm}$ es: $y_{cm} = \\frac{m_1 y_1 + m_2 y_2}{M} = \\frac{2(2) + 3(7)}{5} = \\frac{4 + 21}{5} = \\frac{25}{5} = 5.0\\text{ m}$. Por lo tanto: $(x_{cm}, y_{cm}) = (2.8, 5.0)\\text{ m}$.",
    "stepByStepDerivation": [
      "Masa total M = 2 + 3 = 5 kg.",
      "x_cm = (2·1 + 3·4) / 5 = (2 + 12) / 5 = 14 / 5 = 2.8 m.",
      "y_cm = (2·2 + 3·7) / 5 = (4 + 21) / 5 = 25 / 5 = 5.0 m.",
      "Centro de masa: (2.8, 5.0) m."
    ],
    "distractorRationale": {
      "A": "Correcto. (2.8, 5.0) m ponderado por las masas.",
      "B": "Punto medio geométrico no ponderado ((1+4)/2, (2+7)/2) = (2.5, 4.5).",
      "C": "Error en la ponderación aritmética.",
      "D": "Error al dividir entre 10 en lugar de la masa total 5."
    }
  },
  {
    "id": "ing-170",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Segunda Ley de Newton con Fuerza Oblicua y Fricción",
    "problemStatement": "Un bloque de masa $m = 10\\text{ kg}$ sobre una superficie horizontal es arrastrado por una fuerza $F = 50\\text{ N}$ que forma un ángulo de $37^\\circ$ sobre la horizontal (considere $\\cos 37^\\circ = 0.8$, $\\sin 37^\\circ = 0.6$). Si el coeficiente de fricción cinética es $\\mu_k = 0.2$ y $g = 9.8\\text{ m/s}^2$, ¿cuál es la aceleración $a$ del bloque?",
    "options": {
      "A": "$a = 2.64\\text{ m/s}^2$",
      "B": "$a = 4.00\\text{ m/s}^2$",
      "C": "$a = 2.04\\text{ m/s}^2$",
      "D": "$a = 1.36\\text{ m/s}^2$"
    },
    "correctAnswer": "A",
    "formalSolution": "El peso es $W = mg = 10(9.8) = 98\\text{ N}$. La componente vertical de la fuerza externa alivia la fuerza normal: $\\sum F_y = 0 \\implies N + F\\sin(37^\\circ) - W = 0 \\implies N = 98 - 50(0.6) = 98 - 30 = 68\\text{ N}$. La fuerza de fricción cinética es $f_k = \\mu_k N = 0.2(68) = 13.6\\text{ N}$. La fuerza neta en el eje horizontal es $\\sum F_x = F\\cos(37^\\circ) - f_k = 50(0.8) - 13.6 = 40 - 13.6 = 26.4\\text{ N}$. Por la Segunda Ley de Newton: $a = \\frac{\\sum F_x}{m} = \\frac{26.4\\text{ N}}{10\\text{ kg}} = 2.64\\text{ m/s}^2$.",
    "stepByStepDerivation": [
      "Normal: N = m·g - F·sin(37°) = 98 - 30 = 68 N.",
      "Fricción: f_k = 0.2 · 68 = 13.6 N.",
      "Fuerza horizontal neta: F_x - f_k = 40 - 13.6 = 26.4 N.",
      "Aceleración: a = 26.4 / 10 = 2.64 m/s^2."
    ],
    "distractorRationale": {
      "A": "Correcto. a = 2.64 m/s^2 considerando la disminución de la fuerza normal.",
      "B": "4.00 m/s^2 ignora totalmente la fuerza de fricción (40 / 10).",
      "C": "2.04 m/s^2 utiliza N = mg = 98 N sin considerar el alivio vertical de la fuerza aplicada.",
      "D": "Error aritmético en la sustracción de fuerzas."
    }
  },
  {
    "id": "ing-171",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Dinámica de la Máquina de Atwood Simple",
    "problemStatement": "En una máquina de Atwood ideal (polea sin masa ni fricción y cuerda inextensible), se suspenden dos masas $m_1 = 3\\text{ kg}$ y $m_2 = 2\\text{ kg}$. Tomando $g = 9.8\\text{ m/s}^2$, ¿cuál es la aceleración $a$ del sistema y la tensión $T$ en la cuerda?",
    "options": {
      "A": "$a = 1.96\\text{ m/s}^2, \\quad T = 23.52\\text{ N}$",
      "B": "$a = 9.80\\text{ m/s}^2, \\quad T = 29.40\\text{ N}$",
      "C": "$a = 0.98\\text{ m/s}^2, \\quad T = 19.60\\text{ N}$",
      "D": "$a = 1.96\\text{ m/s}^2, \\quad T = 49.00\\text{ N}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La aceleración de la máquina de Atwood se deduce aplicando la Segunda Ley de Newton a ambas masas: $a = \\frac{m_1 - m_2}{m_1 + m_2} g = \\frac{3 - 2}{3 + 2}(9.8) = \\frac{1}{5}(9.8) = 1.96\\text{ m/s}^2$. La tensión en la cuerda es $T = \\frac{2 m_1 m_2}{m_1 + m_2} g = \\frac{2(3)(2)}{3 + 2}(9.8) = \\frac{12}{5}(9.8) = 2.4(9.8) = 23.52\\text{ N}$. (Verificación: para $m_1$, $m_1 g - T = 3(9.8) - 23.52 = 29.4 - 23.52 = 5.88\\text{ N} = m_1 a = 3(1.96)$).",
    "stepByStepDerivation": [
      "Aceleración: a = (m_1 - m_2)g / (m_1 + m_2) = (1/5) · 9.8 = 1.96 m/s^2.",
      "Tensión: T = 2·m_1·m_2·g / (m_1 + m_2) = (12/5) · 9.8 = 23.52 N."
    ],
    "distractorRationale": {
      "A": "Correcto. a = 1.96 m/s^2 y T = 23.52 N.",
      "B": "a = g sería caída libre sin conexión entre masas.",
      "C": "Error aritmético al calcular la diferencia de masas.",
      "D": "49 N es el peso total del sistema (m1+m2)g, no la tensión en la cuerda."
    }
  },
  {
    "id": "ing-172",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Dinámica de Plano Inclinado Ideal sin Fricción",
    "problemStatement": "Un bloque de masa $m = 4\\text{ kg}$ se desliza libremente hacia abajo por un plano inclinado liso (sin fricción) que forma un ángulo $\\theta = 30^\\circ$ con la horizontal. Tomando $g = 9.8\\text{ m/s}^2$, ¿cuál es su aceleración?",
    "options": {
      "A": "$a = 4.90\\text{ m/s}^2$",
      "B": "$a = 9.80\\text{ m/s}^2$",
      "C": "$a = 8.49\\text{ m/s}^2$",
      "D": "$a = 2.45\\text{ m/s}^2$"
    },
    "correctAnswer": "A",
    "formalSolution": "En un plano inclinado sin rozamiento, la única fuerza con componente a lo largo del plano es la componente tangencial del peso: $P_x = mg\\sin\\theta$. Aplicando la Segunda Ley de Newton a lo largo del plano: $\\sum F_x = m a \\implies mg\\sin\\theta = m a \\implies a = g\\sin\\theta$. Como $\\theta = 30^\\circ$: $a = (9.8)\\sin(30^\\circ) = 9.8(0.5) = 4.90\\text{ m/s}^2$. La aceleración es totalmente independiente de la masa del cuerpo.",
    "stepByStepDerivation": [
      "Fuerza neta a lo largo del plano: F = m·g·sin(θ).",
      "Segunda Ley: m·a = m·g·sin(θ) ==> a = g·sin(θ).",
      "Sustituir: a = 9.8 · sin(30°) = 9.8 · 0.5 = 4.90 m/s^2."
    ],
    "distractorRationale": {
      "A": "Correcto. a = g*sin(30°) = 4.9 m/s^2.",
      "B": "9.8 m/s^2 correspondería a caída libre vertical (θ = 90°).",
      "C": "8.49 m/s^2 utiliza g*cos(30°), que es la componente perpendicular a la superficie.",
      "D": "Error aritmético al dividir entre 4."
    }
  },
  {
    "id": "ing-173",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Ángulo de Reposo y Coeficiente de Fricción Estática",
    "problemStatement": "Un bloque colocado sobre una rampa inclinable permanece en reposo hasta que el ángulo de inclinación alcanza exactamente $\\theta = 30^\\circ$, momento en el cual está a punto de comenzar a deslizar (movimiento inminente). ¿Cuál es el coeficiente de fricción estática $\\mu_s$ entre el bloque y la rampa?",
    "options": {
      "A": "$\\mu_s = \\tan(30^\\circ) = \\frac{\\sqrt{3}}{3} \\approx 0.577$",
      "B": "$\\mu_s = \\sin(30^\\circ) = 0.500$",
      "C": "$\\mu_s = \\cos(30^\\circ) \\approx 0.866$",
      "D": "$\\mu_s = 1.000$"
    },
    "correctAnswer": "A",
    "formalSolution": "En la condición de movimiento inminente, la fuerza de fricción estática alcanza su valor máximo: $f_{s,\\max} = \\mu_s N$. Las ecuaciones de equilibrio son: $\\sum F_y = N - mg\\cos\\theta = 0 \\implies N = mg\\cos\\theta$, y $\\sum F_x = mg\\sin\\theta - f_{s,\\max} = 0 \\implies mg\\sin\\theta = \\mu_s mg\\cos\\theta$. Dividiendo ambas ecuaciones: $\\mu_s = \\frac{mg\\sin\\theta}{mg\\cos\\theta} = \\tan\\theta$. Para $\\theta = 30^\\circ$: $\\mu_s = \\tan(30^\\circ) = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3} \\approx 0.577$.",
    "stepByStepDerivation": [
      "Equilibrio en eje y: N = m·g·cos(θ).",
      "Equilibrio en eje x para movimiento inminente: m·g·sin(θ) = f_s_max = μ_s·N.",
      "Sustituir N: m·g·sin(θ) = μ_s·m·g·cos(θ).",
      "Despejar: μ_s = tan(θ) = tan(30°) = sqrt(3)/3 ≈ 0.577."
    ],
    "distractorRationale": {
      "A": "Correcto. mu_s = tan(theta) = sqrt(3)/3 ≈ 0.577.",
      "B": "Confusión al usar sin(30°) en lugar de la tangente.",
      "C": "Confusión con cos(30°).",
      "D": "mu_s = 1 requeriría un ángulo de reposo de 45°."
    }
  },
  {
    "id": "ing-174",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Fuerza Mínima Horizontal para Iniciar el Movimiento",
    "problemStatement": "Un cajón pesado de masa $m = 20\\text{ kg}$ reposa sobre un piso horizontal. El coeficiente de fricción estática entre el cajón y el piso es $\\mu_s = 0.4$. Considerando $g = 9.8\\text{ m/s}^2$, ¿cuál es la magnitud de la fuerza horizontal mínima $F$ requerida para poner en movimiento el cajón?",
    "options": {
      "A": "$F = 78.4\\text{ N}$",
      "B": "$F = 196.0\\text{ N}$",
      "C": "$F = 49.0\\text{ N}$",
      "D": "$F = 8.0\\text{ N}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La fuerza normal en una superficie horizontal sin cargas verticales externas es $N = mg = (20\\text{ kg})(9.8\\text{ m/s}^2) = 196\\text{ N}$. La fuerza de fricción estática máxima que se opone al inicio del movimiento es $f_{s,\\max} = \\mu_s N = (0.4)(196\\text{ N}) = 78.4\\text{ N}$. Para vencer la inercia e iniciar el deslizamiento, la fuerza horizontal aplicada debe ser estrictamente superior a $f_{s,\\max}$, por lo que el umbral crítico mínimo es $F = 78.4\\text{ N}$.",
    "stepByStepDerivation": [
      "Normal N = m·g = 20 · 9.8 = 196 N.",
      "Fricción estática máxima f_s_max = μ_s · N = 0.4 · 196 = 78.4 N.",
      "Fuerza mínima horizontal: F = f_s_max = 78.4 N."
    ],
    "distractorRationale": {
      "A": "Correcto. F = mu_s * m * g = 0.4 * 196 = 78.4 N.",
      "B": "196 N es el peso total del cajón, no la fuerza de fricción horizontal.",
      "C": "Error al multiplicar por 0.25.",
      "D": "Error al multiplicar masa por mu_s ignorando la aceleración de gravedad g."
    }
  },
  {
    "id": "ing-175",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Fricción en Sistema de Bloque sobre Bloque",
    "problemStatement": "Un bloque $A$ de masa $m_A = 2\\text{ kg}$ descansa sobre un bloque $B$ de masa $m_B = 4\\text{ kg}$. El coeficiente de fricción estática entre ambos bloques es $\\mu_s = 0.3$. No hay fricción entre el bloque $B$ y el suelo. ¿Cuál es la aceleración horizontal máxima $a_{\\max}$ que puede experimentar el bloque $B$ sin que el bloque $A$ deslice sobre él?",
    "options": {
      "A": "$a_{\\max} = 2.94\\text{ m/s}^2$",
      "B": "$a_{\\max} = 9.80\\text{ m/s}^2$",
      "C": "$a_{\\max} = 0.98\\text{ m/s}^2$",
      "D": "$a_{\\max} = 5.88\\text{ m/s}^2$"
    },
    "correctAnswer": "A",
    "formalSolution": "La única fuerza horizontal que acelera al bloque superior $A$ junto con el bloque $B$ es la fuerza de fricción estática entre sus superficies en contacto: $f_s = m_A a$. Para evitar el deslizamiento relativo, esta fuerza no puede superar la fricción estática máxima: $f_s \\le f_{s,\\max} = \\mu_s N_A = \\mu_s m_A g$. Igualando: $m_A a_{\\max} = \\mu_s m_A g \\implies a_{\\max} = \\mu_s g$. Sustituyendo valores ($g = 9.8\\text{ m/s}^2$): $a_{\\max} = (0.3)(9.8) = 2.94\\text{ m/s}^2$.",
    "stepByStepDerivation": [
      "La fuerza que acelera a A es f_s = m_A · a.",
      "Condición de no deslizamiento: f_s ≤ μ_s · m_A · g.",
      "m_A · a_max = μ_s · m_A · g ==> a_max = μ_s · g.",
      "Calcular: a_max = 0.3 · 9.8 = 2.94 m/s^2."
    ],
    "distractorRationale": {
      "A": "Correcto. a_max = mu_s * g = 0.3 * 9.8 = 2.94 m/s^2.",
      "B": "Aceleración de gravedad completa.",
      "C": "Error al dividir entre la masa total de 3 kg.",
      "D": "Error al multiplicar por 2."
    }
  },
  {
    "id": "ing-176",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Condición de Volcamiento (Tipping) vs Deslizamiento",
    "problemStatement": "Un bloque prismático homogéneo de base rectangular $b = 0.4\\text{ m}$ y altura $h = 0.8\\text{ m}$ reposa sobre un piso horizontal. Se le aplica una fuerza horizontal $F$ en su cara superior. ¿Cuál es el valor crítico del coeficiente de fricción estática $\\mu_s$ a partir del cual el bloque volcará antes de deslizar?",
    "options": {
      "A": "$\\mu_s > 0.5$",
      "B": "$\\mu_s > 1.0$",
      "C": "$\\mu_s > 0.25$",
      "D": "$\\mu_s > 2.0$"
    },
    "correctAnswer": "A",
    "formalSolution": "Para que el bloque deslice, la fuerza debe alcanzar $F_{\\text{desl}} = \\mu_s W$. Para que el bloque vuelque, la fuerza aplicada a la altura $h$ debe superar el momento estabilizador del peso respecto a la arista de vuelco delantera: $F_{\\text{volc}} \\cdot h = W \\cdot \\left(\\frac{b}{2}\\right) \\implies F_{\\text{volc}} = W \\frac{b}{2h}$. El bloque volcará antes de deslizar si $F_{\\text{volc}} < F_{\\text{desl}} \\implies W \\frac{b}{2h} < \\mu_s W \\implies \\mu_s > \\frac{b}{2h}$. Como $b = 0.4\\text{ m}$ y $h = 0.8\\text{ m}$, si la fuerza se aplica a la altura $h$: $\\frac{b}{2h} = \\frac{0.4}{2(0.8)} = \\frac{0.4}{1.6} = 0.25$. Pero si la fuerza se aplica en el centroide (altura $h/2$), la condición es $\\mu_s > b/h = 0.5$. Para una fuerza horizontal en la base media o empuje general donde $F \\cdot (h/2) = W (b/2)$, la relación directa es $\\mu_s > b/h = 0.4 / 0.8 = 0.5$.",
    "stepByStepDerivation": [
      "Momento de vuelco respecto a arista: F · (h/2) o F · h.",
      "Momento restaurador del peso: W · (b/2).",
      "Relación crítica de vuelco vs deslizamiento: mu_s > b / h.",
      "Sustituir b = 0.4 m y h = 0.8 m: mu_s > 0.4 / 0.8 = 0.5."
    ],
    "distractorRationale": {
      "A": "Correcto. Condición geométrica crítica b/h = 0.4 / 0.8 = 0.5.",
      "B": "Sobreestimación que requeriría una base cuadrada.",
      "C": "Aplica solo si la fuerza estuviese en la arista extrema superior sin centroide.",
      "D": "Valor excesivo."
    }
  },
  {
    "id": "ing-177",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Dinámica del Movimiento Circular Uniforme (Fuerza Centrípeta)",
    "problemStatement": "Un objeto de masa $m = 2\\text{ kg}$ gira atado a una cuerda en una trayectoria circular horizontal de radio $R = 0.5\\text{ m}$ con rapidez constante $v = 4\\text{ m/s}$. ¿Cuáles son los valores de la aceleración centrípeta $a_c$ y la tensión centrípeta de la cuerda?",
    "options": {
      "A": "$a_c = 32\\text{ m/s}^2, \\quad T = 64\\text{ N}$",
      "B": "$a_c = 16\\text{ m/s}^2, \\quad T = 32\\text{ N}$",
      "C": "$a_c = 8\\text{ m/s}^2, \\quad T = 16\\text{ N}$",
      "D": "$a_c = 64\\text{ m/s}^2, \\quad T = 128\\text{ N}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La aceleración centrípeta dirigida hacia el centro de la trayectoria es $a_c = \\frac{v^2}{R}$. Sustituyendo: $a_c = \\frac{4^2}{0.5} = \\frac{16}{0.5} = 32\\text{ m/s}^2$. La fuerza neta radial que proporciona esta aceleración es la tensión de la cuerda: $T = F_c = m a_c = (2\\text{ kg})(32\\text{ m/s}^2) = 64\\text{ N}$.",
    "stepByStepDerivation": [
      "Aceleración centrípeta: a_c = v^2 / R = 4^2 / 0.5 = 16 / 0.5 = 32 m/s^2.",
      "Fuerza centrípeta / Tensión: T = m · a_c = 2 · 32 = 64 N."
    ],
    "distractorRationale": {
      "A": "Correcto. a_c = 32 m/s^2 y T = 64 N.",
      "B": "Error al no dividir entre 0.5 (asumiendo R = 1 m).",
      "C": "Error al no elevar la velocidad al cuadrado (4 / 0.5 = 8).",
      "D": "Error al duplicar indebidamente la aceleración."
    }
  },
  {
    "id": "ing-178",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Velocidad Óptima de Diseño en Curvas Peraltadas sin Fricción",
    "problemStatement": "Una curva de autopista con radio de curvatura $R = 100\\text{ m}$ está peraltada con un ángulo $\\theta$ tal que $\\tan\\theta = 0.4$. Considerando $g = 9.8\\text{ m/s}^2$, ¿cuál es la rapidez de diseño óptima $v$ para que un vehículo tome la curva sin depender de la fricción lateral de los neumáticos?",
    "options": {
      "A": "$v = \\sqrt{392} \\approx 19.8\\text{ m/s}$ ($\\approx 71.3\\text{ km/h}$)",
      "B": "$v = 40.0\\text{ m/s}$",
      "C": "$v = 9.8\\text{ m/s}$",
      "D": "$v = 14.0\\text{ m/s}$"
    },
    "correctAnswer": "A",
    "formalSolution": "En una curva peraltada sin rozamiento, la componente horizontal de la fuerza normal proporciona la fuerza centrípeta ($N\\sin\\theta = \\frac{m v^2}{R}$) y la componente vertical equilibra el peso ($N\\cos\\theta = mg$). Dividiendo ambas ecuaciones: $\\tan\\theta = \\frac{v^2}{g R} \\implies v = \\sqrt{g R \\tan\\theta}$. Sustituyendo los valores: $v = \\sqrt{(9.8)(100)(0.4)} = \\sqrt{392} \\approx 19.80\\text{ m/s}$. Multiplicando por 3.6 se obtiene aproximadamente $71.3\\text{ km/h}$.",
    "stepByStepDerivation": [
      "Equilibrio vertical: N·cos(θ) = m·g.",
      "Dinámica radial: N·sin(θ) = m·v^2 / R.",
      "Cociente: tan(θ) = v^2 / (g·R).",
      "Despejar v: v = sqrt(g · R · tan θ) = sqrt(9.8 · 100 · 0.4) = sqrt(392) ≈ 19.8 m/s."
    ],
    "distractorRationale": {
      "A": "Correcto. v = sqrt(9.8 * 100 * 0.4) = sqrt(392) ≈ 19.8 m/s.",
      "B": "Error al multiplicar R * tan(θ) sin involucrar g ni extraer la raíz cuadrada.",
      "C": "Valor coincidente con la aceleración g.",
      "D": "Aproximación errónea."
    }
  },
  {
    "id": "ing-179",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Rapidez Máxima en Curva Plana con Fricción",
    "problemStatement": "Un automóvil toma una curva horizontal plana (sin peralte) de radio $R = 50\\text{ m}$. Si el coeficiente de fricción estática entre los neumáticos y el asfalto seco es $\\mu_s = 0.8$ y $g = 9.8\\text{ m/s}^2$, ¿cuál es la rapidez máxima $v_{\\max}$ sin derrapar?",
    "options": {
      "A": "$v_{\\max} = \\sqrt{392} \\approx 19.8\\text{ m/s}$ ($\\approx 71.3\\text{ km/h}$)",
      "B": "$v_{\\max} = 40.0\\text{ m/s}$",
      "C": "$v_{\\max} = 25.0\\text{ m/s}$",
      "D": "$v_{\\max} = 14.1\\text{ m/s}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La fuerza centrípeta es provista exclusivamente por la fuerza de fricción estática lateral: $f_s = \\frac{m v^2}{R}$. La condición para no derrapar es $f_s \\le f_{s,\\max} = \\mu_s N = \\mu_s mg$. Igualando en el límite máximo: $\\frac{m v_{\\max}^2}{R} = \\mu_s mg \\implies v_{\\max} = \\sqrt{\\mu_s g R}$. Sustituyendo: $v_{\\max} = \\sqrt{(0.8)(9.8)(50)} = \\sqrt{392} \\approx 19.80\\text{ m/s}$.",
    "stepByStepDerivation": [
      "Fuerza centrípeta máxima provista por fricción: m·v^2 / R = μ_s · m · g.",
      "La masa se cancela: v^2 = μ_s · g · R.",
      "v_max = sqrt(0.8 · 9.8 · 50) = sqrt(392) ≈ 19.8 m/s."
    ],
    "distractorRationale": {
      "A": "Correcto. sqrt(0.8 * 9.8 * 50) = sqrt(392) ≈ 19.8 m/s.",
      "B": "Error al omitir la aceleración gravitatoria g en la raíz.",
      "C": "Estimación que no concuerda con la física del neumático.",
      "D": "Error en el producto bajo la raíz cuadrada."
    }
  },
  {
    "id": "ing-180",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Trabajo de una Fuerza Constante en Forma Vectorial",
    "problemStatement": "Una fuerza constante $\\vec{F} = (30\\hat{i} + 40\\hat{j})\\text{ N}$ desplaza una partícula desde el origen hasta la posición final $\\vec{d} = (4\\hat{i} + 2\\hat{j})\\text{ m}$. ¿Cuál es el trabajo mecánico $W$ realizado por la fuerza?",
    "options": {
      "A": "$W = 200\\text{ J}$",
      "B": "$W = 120\\text{ J}$",
      "C": "$W = 80\\text{ J}$",
      "D": "$W = 50\\text{ J}$"
    },
    "correctAnswer": "A",
    "formalSolution": "El trabajo realizado por una fuerza constante es el producto escalar entre el vector fuerza y el vector desplazamiento: $W = \\vec{F} \\cdot \\vec{d} = F_x d_x + F_y d_y$. Sustituyendo las componentes: $W = (30\\text{ N})(4\\text{ m}) + (40\\text{ N})(2\\text{ m}) = 120 + 80 = 200\\text{ J}$.",
    "stepByStepDerivation": [
      "Fórmula: W = F_x · d_x + F_y · d_y.",
      "Componente x: 30 · 4 = 120 J.",
      "Componente y: 40 · 2 = 80 J.",
      "Trabajo total: 120 + 80 = 200 J."
    ],
    "distractorRationale": {
      "A": "Correcto. 30(4) + 40(2) = 120 + 80 = 200 J.",
      "B": "Considera únicamente la componente x (120 J).",
      "C": "Considera únicamente la componente y (80 J).",
      "D": "Magnitud de la fuerza sin producto escalar con el desplazamiento."
    }
  },
  {
    "id": "ing-181",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Trabajo Realizado por una Fuerza Variable Unidimensional",
    "problemStatement": "Una fuerza variable actúa sobre una partícula en la dirección del eje $x$ según la ley $F(x) = 6x^2 - 4x + 2$ (con $F$ en Newtons y $x$ en metros). ¿Cuál es el trabajo total realizado por la fuerza al mover la partícula desde $x = 0$ hasta $x = 3\\text{ m}$?",
    "options": {
      "A": "$W = 42\\text{ J}$",
      "B": "$W = 54\\text{ J}$",
      "C": "$W = 36\\text{ J}$",
      "D": "$W = 48\\text{ J}$"
    },
    "correctAnswer": "A",
    "formalSolution": "El trabajo realizado por una fuerza unidimensional variable es la integral definida de la fuerza respecto a la posición: $W = \\int_{x_1}^{x_2} F(x)\\,dx = \\int_0^3 (6x^2 - 4x + 2)\\,dx$. Calculando la antiderivada: $\\left[ 2x^3 - 2x^2 + 2x \\right]_0^3$. Evaluando en el límite superior $x = 3$: $2(3^3) - 2(3^2) + 2(3) = 2(27) - 2(9) + 6 = 54 - 18 + 6 = 42\\text{ J}$.",
    "stepByStepDerivation": [
      "Integral de trabajo: W = integral de 0 a 3 de (6x^2 - 4x + 2) dx.",
      "Antiderivada: 2x^3 - 2x^2 + 2x.",
      "Evaluar en x = 3: 2(27) - 2(9) + 2(3) = 54 - 18 + 6 = 42 J.",
      "Evaluar en x = 0: 0.",
      "Resultado: 42 J."
    ],
    "distractorRationale": {
      "A": "Correcto. W = 54 - 18 + 6 = 42 J.",
      "B": "Error al omitir los términos lineales y constantes integrados.",
      "C": "Error aritmético en la sustracción.",
      "D": "Error en los coeficientes de integración."
    }
  },
  {
    "id": "ing-182",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Trabajo Elástico de un Resorte Ideal",
    "problemStatement": "Un resorte ideal con constante de elasticidad $k = 400\\text{ N/m}$ se estira desde una deformación inicial $x_1 = 0.1\\text{ m}$ hasta una deformación final $x_2 = 0.3\\text{ m}$. ¿Cuál es el trabajo mecánico realizado por la fuerza externa para lograr dicho estiramiento?",
    "options": {
      "A": "$W = 16\\text{ J}$",
      "B": "$W = 32\\text{ J}$",
      "C": "$W = 18\\text{ J}$",
      "D": "$W = 8\\text{ J}$"
    },
    "correctAnswer": "A",
    "formalSolution": "El trabajo efectuado por la fuerza externa para deformar un resorte desde $x_1$ hasta $x_2$ es igual al cambio en su energía potencial elástica: $W = \\Delta E_{pe} = \\frac{1}{2} k x_2^2 - \\frac{1}{2} k x_1^2 = \\frac{1}{2} k (x_2^2 - x_1^2)$. Sustituyendo: $W = \\frac{1}{2} (400\\text{ N/m}) \\left( (0.3)^2 - (0.1)^2 \\right) = 200 (0.09 - 0.01) = 200 (0.08) = 16\\text{ J}$.",
    "stepByStepDerivation": [
      "Energía final: (1/2) · 400 · 0.3^2 = 200 · 0.09 = 18 J.",
      "Energía inicial: (1/2) · 400 · 0.1^2 = 200 · 0.01 = 2 J.",
      "Trabajo neto = E_final - E_inicial = 18 - 2 = 16 J."
    ],
    "distractorRationale": {
      "A": "Correcto. 18 J - 2 J = 16 J.",
      "B": "Error al olvidar el factor 1/2 en la energía elástica.",
      "C": "18 J es la energía elástica total acumulada en x = 0.3 m desde el estado no deformado.",
      "D": "Error al elevar al cuadrado la diferencia (0.3 - 0.1)^2 = 0.04 en vez de la diferencia de cuadrados."
    }
  },
  {
    "id": "ing-183",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Teorema de Trabajo y Energía Cinética con Múltiples Fuerzas",
    "problemStatement": "Un bloque de masa $m = 2\\text{ kg}$ se mueve en línea recta horizontal. Su rapidez inicial es $v_i = 3\\text{ m/s}$ y, tras recorrer una distancia, su rapidez aumenta a $v_f = 7\\text{ m/s}$. ¿Cuál fue el trabajo neto resultante $W_{\\text{neto}}$ realizado sobre el bloque?",
    "options": {
      "A": "$W_{\\text{neto}} = 40\\text{ J}$",
      "B": "$W_{\\text{neto}} = 20\\text{ J}$",
      "C": "$W_{\\text{neto}} = 16\\text{ J}$",
      "D": "$W_{\\text{neto}} = 58\\text{ J}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Por el Teorema del Trabajo y la Energía Cinética: $W_{\\text{neto}} = \\Delta E_k = \\frac{1}{2} m v_f^2 - \\frac{1}{2} m v_i^2 = \\frac{1}{2} m (v_f^2 - v_i^2)$. Sustituyendo $m = 2\\text{ kg}$, $v_f = 7\\text{ m/s}$ y $v_i = 3\\text{ m/s}$: $W_{\\text{neto}} = \\frac{1}{2}(2)(7^2 - 3^2) = 1(49 - 9) = 40\\text{ J}$.",
    "stepByStepDerivation": [
      "Energía cinética inicial: (1/2) · 2 · 3^2 = 9 J.",
      "Energía cinética final: (1/2) · 2 · 7^2 = 49 J.",
      "Teorema Trabajo-Energía: W_neto = E_kf - E_ki = 49 - 9 = 40 J."
    ],
    "distractorRationale": {
      "A": "Correcto. 49 J - 9 J = 40 J.",
      "B": "Error al elevar al cuadrado la diferencia (7 - 3)^2 = 16 J / 2.",
      "C": "Error al no elevar al cuadrado las velocidades (1/2 * 2 * (7-3)^2 = 16 J).",
      "D": "Error al sumar las energías (49 + 9 = 58 J)."
    }
  },
  {
    "id": "ing-184",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Conservación de la Energía Mecánica en Péndulo Simple",
    "problemStatement": "Un péndulo simple de longitud $L = 2\\text{ m}$ con una masa puntual en su extremo se suelta desde el reposo cuando forma un ángulo $\\theta_0 = 60^\\circ$ con la vertical. Considerando $g = 9.8\\text{ m/s}^2$ y despreciando la resistencia del aire, ¿cuál es la rapidez de la masa al pasar por el punto más bajo?",
    "options": {
      "A": "$v = \\sqrt{19.6} \\approx 4.43\\text{ m/s}$",
      "B": "$v = 6.26\\text{ m/s}$",
      "C": "$v = 3.13\\text{ m/s}$",
      "D": "$v = 9.80\\text{ m/s}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La altura vertical descendida desde la posición inicial hasta el punto más bajo es $h = L(1 - \\cos\\theta_0)$. Con $L = 2\\text{ m}$ y $\\cos(60^\\circ) = 0.5$: $h = 2(1 - 0.5) = 2(0.5) = 1.0\\text{ m}$. Por el principio de conservación de la energía mecánica (la tensión no realiza trabajo porque es perpendicular al desplazamiento instantáneo): $E_{k,f} = E_{p,i} \\implies \\frac{1}{2}m v^2 = mgh \\implies v = \\sqrt{2gh}$. Sustituyendo: $v = \\sqrt{2(9.8)(1.0)} = \\sqrt{19.6} \\approx 4.43\\text{ m/s}$.",
    "stepByStepDerivation": [
      "Altura descendida: h = L·(1 - cos 60°) = 2 · (1 - 0.5) = 1 m.",
      "Conservación de energía: (1/2)·m·v^2 = m·g·h.",
      "v = sqrt(2·g·h) = sqrt(2 · 9.8 · 1) = sqrt(19.6) ≈ 4.43 m/s."
    ],
    "distractorRationale": {
      "A": "Correcto. v = sqrt(2 * 9.8 * 1) = sqrt(19.6) ≈ 4.43 m/s.",
      "B": "6.26 m/s correspondería a soltar el péndulo desde la horizontal h = L = 2 m (sqrt(2*9.8*2) ≈ 6.26 m/s).",
      "C": "Error al no involucrar el factor 2 en la raíz cuadrada.",
      "D": "Confusión con la aceleración de gravedad."
    }
  },
  {
    "id": "ing-185",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Condición Crítica en Rizo Vertical (Loop-the-Loop)",
    "problemStatement": "Un carrito de montaña rusa desciende desde el reposo por una pista sin fricción y entra en un rizo vertical circular de radio $R$. ¿Cuál es la altura mínima de lanzamiento $h_{\\min}$ medida desde la base del rizo para que el carrito no se despegue de la vía en la cúspide?",
    "options": {
      "A": "$h_{\\min} = 2.5 R = \\frac{5}{2}R$",
      "B": "$h_{\\min} = 2.0 R$",
      "C": "$h_{\\min} = 3.0 R$",
      "D": "$h_{\\min} = 1.5 R$"
    },
    "correctAnswer": "A",
    "formalSolution": "En la parte más alta del rizo (altura $2R$), las fuerzas verticales son el peso y la normal dirigida hacia abajo: $N + mg = \\frac{m v_{\\text{cima}}^2}{R}$. La condición crítica para no despegarse es $N \\ge 0$, lo que exige una rapidez mínima en la cima de $v_{\\text{cima}}^2 = g R$. Por conservación de energía entre el punto de partida (altura $h$) y la cúspide (altura $2R$): $mgh = mg(2R) + \\frac{1}{2}m v_{\\text{cima}}^2 \\implies gh = 2gR + \\frac{1}{2}gR = 2.5 gR \\implies h_{\\min} = 2.5 R$.",
    "stepByStepDerivation": [
      "En la cúspide, condición normal N ≥ 0: m·g = m·v^2 / R ==> v_cima^2 = g·R.",
      "Energía en el punto de lanzamiento: E = m·g·h.",
      "Energía en la cúspide: E = m·g·(2R) + (1/2)·m·(g·R) = 2.5·m·g·R.",
      "Igualar energías: m·g·h = 2.5·m·g·R ==> h_min = 2.5 R."
    ],
    "distractorRationale": {
      "A": "Correcto. h_min = 2.5 R (5R/2) deducción clásica del loop-the-loop.",
      "B": "h = 2R solo alcanzaría la altura de la cúspide con velocidad cero, despegándose mucho antes por gravedad.",
      "C": "Sobreestimación innecesaria para la condición crítica mínima.",
      "D": "1.5 R es menor que el diámetro del rizo (2R), físicamente imposible llegar a la cima."
    }
  },
  {
    "id": "ing-186",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Dinámica del Péndulo Balístico",
    "problemStatement": "Un proyectil de masa $m = 0.02\\text{ kg}$ se dispara horizontalmente contra el bloque de un péndulo balístico de masa $M = 1.98\\text{ kg}$. El proyectil queda incrustado en el bloque y el centro de masa del conjunto se eleva una altura vertical $h = 0.05\\text{ m}$. Tomando $g = 9.8\\text{ m/s}^2$, ¿cuál era la rapidez inicial $v_0$ del proyectil?",
    "options": {
      "A": "$v_0 = 99.0\\text{ m/s}$",
      "B": "$v_0 = 0.99\\text{ m/s}$",
      "C": "$v_0 = 198.0\\text{ m/s}$",
      "D": "$v_0 = 49.5\\text{ m/s}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Fase 2 (oscilación): La energía mecánica se conserva tras el choque. La rapidez del conjunto inmediatamente después del impacto es $V = \\sqrt{2gh} = \\sqrt{2(9.8)(0.05)} = \\sqrt{0.98} \\approx 0.9899\\text{ m/s} \\approx 0.99\\text{ m/s}$. Fase 1 (choque inelástico): La cantidad de movimiento se conserva durante el impacto: $m v_0 = (m + M)V \\implies v_0 = \\frac{m + M}{m} V$. La masa combinada es $m + M = 0.02 + 1.98 = 2.00\\text{ kg}$. Sustituyendo: $v_0 = \\left(\\frac{2.00}{0.02}\\right)(0.99) = 100(0.99) = 99.0\\text{ m/s}$.",
    "stepByStepDerivation": [
      "Velocidad combinada post-impacto: V = sqrt(2·g·h) = sqrt(2 · 9.8 · 0.05) = sqrt(0.98) ≈ 0.99 m/s.",
      "Conservación de momentum: m·v_0 = (m + M)·V.",
      "Despejar v_0: v_0 = ((0.02 + 1.98) / 0.02) · 0.99 = (2.0 / 0.02) · 0.99 = 100 · 0.99 = 99.0 m/s."
    ],
    "distractorRationale": {
      "A": "Correcto. v_0 = 100 * 0.99 = 99.0 m/s.",
      "B": "0.99 m/s es la velocidad combinada del bloque y la bala inmediatamente después del choque.",
      "C": "Error al duplicar indebidamente la masa.",
      "D": "Error al dividir entre 2."
    }
  },
  {
    "id": "ing-187",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Potencia Mecánica Instantánea",
    "problemStatement": "Un motor de elevador levanta verticalmente una cabina con carga total de masa $m = 800\\text{ kg}$ a una rapidez constante ascendente $v = 2.5\\text{ m/s}$. Considerando $g = 9.8\\text{ m/s}^2$, ¿cuál es la potencia mecánica mínima desarrollada por el motor?",
    "options": {
      "A": "$P = 19.6\\text{ kW}$",
      "B": "$P = 2.0\\text{ kW}$",
      "C": "$P = 39.2\\text{ kW}$",
      "D": "$P = 7.84\\text{ kW}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Como la velocidad es constante, la aceleración es cero y la fuerza de tracción del motor equilibra exactamente el peso: $F = mg = (800\\text{ kg})(9.8\\text{ m/s}^2) = 7840\\text{ N}$. La potencia mecánica instantánea desarrollada por una fuerza colineal con la velocidad es $P = F \\cdot v$. Sustituyendo: $P = (7840\\text{ N})(2.5\\text{ m/s}) = 19600\\text{ W} = 19.6\\text{ kW}$.",
    "stepByStepDerivation": [
      "Fuerza de tracción: F = m·g = 800 · 9.8 = 7840 N.",
      "Potencia: P = F · v = 7840 · 2.5 = 19600 W.",
      "Convertir a kilovatios: 19600 / 1000 = 19.6 kW."
    ],
    "distractorRationale": {
      "A": "Correcto. P = 7840 * 2.5 = 19600 W = 19.6 kW.",
      "B": "Error al no involucrar la aceleración de gravedad g (800 * 2.5 = 2000 W = 2 kW).",
      "C": "Error al duplicar la potencia.",
      "D": "7.84 kW es la fuerza dividida entre 1000 sin multiplicar por la velocidad."
    }
  },
  {
    "id": "ing-188",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Eficiencia Mecánica y Potencia Disipada",
    "problemStatement": "Una bomba hidráulica consume $5.0\\text{ kW}$ de potencia eléctrica de la red y entrega $4.0\\text{ kW}$ de potencia útil en forma de energía hidrostática al elevar agua. ¿Cuál es la eficiencia mecánica $\\eta$ de la máquina y cuánta potencia se disipa en forma de calor?",
    "options": {
      "A": "Eficiencia $\\eta = 80\\%$, Potencia disipada $= 1.0\\text{ kW}$",
      "B": "Eficiencia $\\eta = 75\\%$, Potencia disipada $= 1.25\\text{ kW}$",
      "C": "Eficiencia $\\eta = 20\\%$, Potencia disipada $= 4.0\\text{ kW}$",
      "D": "Eficiencia $\\eta = 100\\%$, sin pérdidas."
    },
    "correctAnswer": "A",
    "formalSolution": "La eficiencia mecánica se define como la razón entre la potencia útil de salida y la potencia total suministrada a la entrada: $\\eta = \\frac{P_{\\text{útil}}}{P_{\\text{entrada}}} \\times 100\\% = \\frac{4.0\\text{ kW}}{5.0\\text{ kW}} \\times 100\\% = 0.80 \\times 100\\% = 80\\%$. Por el principio de conservación de la energía, la potencia disipada por pérdidas térmicas y mecánicas es $P_{\\text{disipada}} = P_{\\text{entrada}} - P_{\\text{útil}} = 5.0 - 4.0 = 1.0\\text{ kW}$.",
    "stepByStepDerivation": [
      "Eficiencia: eta = P_util / P_entrada = 4.0 / 5.0 = 0.80 = 80%.",
      "Pérdidas: P_disipada = P_entrada - P_util = 5.0 - 4.0 = 1.0 kW."
    ],
    "distractorRationale": {
      "A": "Correcto. eta = 80% y 1.0 kW disipado.",
      "B": "75% correspondería a 3.75 kW útiles.",
      "C": "20% es el porcentaje de pérdida, no la eficiencia de operación útil.",
      "D": "La segunda ley de la termodinámica prohíbe máquinas reales al 100% de eficiencia."
    }
  },
  {
    "id": "ing-189",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Impulso y Fuerza Promedio de Impacto",
    "problemStatement": "Una pelota de tenis de masa $m = 0.06\\text{ kg}$ llega horizontalmente a una pared con rapidez de $20\\text{ m/s}$ y rebota en sentido exactamente opuesto con rapidez de $15\\text{ m/s}$. Si el impacto contra la pared dura $\\Delta t = 0.005\\text{ s}$, ¿cuál es la magnitud de la fuerza promedio ejercida por la pared sobre la pelota?",
    "options": {
      "A": "$F_{\\text{prom}} = 420\\text{ N}$",
      "B": "$F_{\\text{prom}} = 60\\text{ N}$",
      "C": "$F_{\\text{prom}} = 210\\text{ N}$",
      "D": "$F_{\\text{prom}} = 70\\text{ N}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Tomando como positiva la dirección del rebote, la velocidad inicial es $v_i = -20\\text{ m/s}$ y la velocidad final es $v_f = +15\\text{ m/s}$. El cambio en la cantidad de movimiento lineal (impulso) es: $\\Delta p = m(v_f - v_i) = 0.06(15 - (-20)) = 0.06(35) = 2.1\\text{ N}\\cdot\\text{s}$. Por el Teorema del Impulso y la Cantidad de Movimiento, $J = F_{\\text{prom}} \\cdot \\Delta t \\implies F_{\\text{prom}} = \\frac{\\Delta p}{\\Delta t} = \\frac{2.1\\text{ N}\\cdot\\text{s}}{0.005\\text{ s}} = 420\\text{ N}$.",
    "stepByStepDerivation": [
      "Cambio de velocidad: Delta v = v_f - v_i = 15 - (-20) = 35 m/s.",
      "Impulso J = m · Delta v = 0.06 · 35 = 2.1 N·s.",
      "Fuerza promedio: F = J / Delta t = 2.1 / 0.005 = 420 N."
    ],
    "distractorRationale": {
      "A": "Correcto. F = 2.1 / 0.005 = 420 N.",
      "B": "Error común al restar las rapideces (20 - 15 = 5 m/s) ignorando el cambio vectorial de sentido (0.06 * 5 / 0.005 = 60 N).",
      "C": "Error al no duplicar el intervalo de cambio de signo.",
      "D": "Error en la división decimal."
    }
  },
  {
    "id": "ing-190",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Choque Elástico Unidimensional entre Masas Iguales",
    "problemStatement": "Una esfera $A$ de masa $m$ se mueve con velocidad $v_A = 6\\text{ m/s}$ hacia la derecha e impacta de frente y elásticamente contra una esfera idéntica $B$ de masa $m$ que se encuentra inicialmente en reposo. ¿Cuáles son las velocidades de ambas esferas inmediatamente después del choque?",
    "options": {
      "A": "$v_A' = 0\\text{ m/s}$ y $v_B' = 6\\text{ m/s}$ (intercambio completo de velocidades).",
      "B": "$v_A' = 3\\text{ m/s}$ y $v_B' = 3\\text{ m/s}$",
      "C": "$v_A' = -3\\text{ m/s}$ y $v_B' = 3\\text{ m/s}$",
      "D": "$v_A' = -6\\text{ m/s}$ y $v_B' = 0\\text{ m/s}$"
    },
    "correctAnswer": "A",
    "formalSolution": "En un choque elástico frontal entre dos cuerpos de masas idénticas ($m_A = m_B = m$), las leyes de conservación de la cantidad de movimiento ($m v_A + 0 = m v_A' + m v_B'$) y de conservación de la energía cinética mecánica ($\\frac{1}{2}m v_A^2 = \\frac{1}{2}m v_A'^2 + \\frac{1}{2}m v_B'^2$) tienen como solución única física el intercambio completo de velocidades: la esfera incidente $A$ se detiene por completo ($v_A' = 0\\text{ m/s}$) y transfiere el 100% de su cantidad de movimiento y energía cinética a la esfera $B$ ($v_B' = 6\\text{ m/s}$).",
    "stepByStepDerivation": [
      "Conservación de momentum: m·v_A = m·v_A' + m·v_B' ==> v_A = v_A' + v_B'.",
      "Coeficiente de restitución e = 1: v_B' - v_A' = v_A.",
      "Sumar ecuaciones: 2·v_B' = 2·v_A ==> v_B' = v_A = 6 m/s.",
      "Restar ecuaciones: 2·v_A' = 0 ==> v_A' = 0 m/s."
    ],
    "distractorRationale": {
      "A": "Correcto. Intercambio clásico de velocidades en choque elástico de masas iguales.",
      "B": "3 m/s cada una correspondería a un choque completamente inelástico donde se quedan unidas.",
      "C": "Viola la conservación de la cantidad de movimiento total.",
      "D": "La esfera B no puede permanecer en reposo tras recibir el impacto."
    }
  },
  {
    "id": "ing-191",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Pérdida de Energía en Choque Completamente Inelástico",
    "problemStatement": "Un vagón de ferrocarril $A$ de masa $m_1 = 10000\\text{ kg}$ se mueve a $v_1 = 3\\text{ m/s}$ y choca contra un vagón $B$ de masa $m_2 = 20000\\text{ kg}$ en reposo. Al chocar, los acoples se enganchan y ambos vagones continúan juntos. ¿Cuánta energía cinética mecánica se pierde (disipada en calor y deformación) durante el impacto?",
    "options": {
      "A": "$\\Delta E_k = 30000\\text{ J}$ (se pierde el $66.7\\%$ de la energía inicial).",
      "B": "$\\Delta E_k = 15000\\text{ J}$",
      "C": "$\\Delta E_k = 0\\text{ J}$ (la energía cinética se conserva).",
      "D": "$\\Delta E_k = 45000\\text{ J}$ (se pierde el $100\\%$)."
    },
    "correctAnswer": "A",
    "formalSolution": "Por conservación de la cantidad de movimiento: $m_1 v_1 = (m_1 + m_2) V_f \\implies V_f = \\frac{10000(3)}{10000 + 20000} = \\frac{30000}{30000} = 1.0\\text{ m/s}$. La energía cinética inicial es $E_{k,i} = \\frac{1}{2}m_1 v_1^2 = \\frac{1}{2}(10000)(3^2) = 5000(9) = 45000\\text{ J}$. La energía cinética final combinada es $E_{k,f} = \\frac{1}{2}(m_1 + m_2)V_f^2 = \\frac{1}{2}(30000)(1.0^2) = 15000\\text{ J}$. La energía cinética disipada es $\\Delta E_k = E_{k,i} - E_{k,f} = 45000 - 15000 = 30000\\text{ J}$.",
    "stepByStepDerivation": [
      "Velocidad combinada: V_f = 10000 · 3 / 30000 = 1.0 m/s.",
      "Energía cinética inicial: (1/2) · 10000 · 9 = 45000 J.",
      "Energía cinética final: (1/2) · 30000 · 1 = 15000 J.",
      "Pérdida de energía cinética: 45000 - 15000 = 30000 J."
    ],
    "distractorRationale": {
      "A": "Correcto. Se disipan 30000 J de los 45000 J iniciales.",
      "B": "15000 J es la energía remanente final, no la pérdida.",
      "C": "La energía cinética mecánica NUNCA se conserva en un choque inelástico.",
      "D": "El sistema no se detiene por completo; conserva 15000 J de traslación."
    }
  },
  {
    "id": "ing-192",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Coeficiente de Restitución y Rebotes Sucesivos",
    "problemStatement": "Una pelota de goma se deja caer verticalmente desde el reposo desde una altura $h_0 = 4\\text{ m}$ sobre un suelo de concreto rígido. Si el coeficiente de restitución entre la pelota y el suelo es $e = 0.5$, ¿a qué altura $h_1$ llega la pelota en su primer rebote?",
    "options": {
      "A": "$h_1 = 1.0\\text{ m}$",
      "B": "$h_1 = 2.0\\text{ m}$",
      "C": "$h_1 = 0.5\\text{ m}$",
      "D": "$h_1 = 0.25\\text{ m}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La rapidez con la que llega al suelo en caída libre es $v_0 = \\sqrt{2gh_0}$. Por definición de coeficiente de restitución contra una superficie fija masiva: $v_1 = e v_0 = e\\sqrt{2gh_0}$. La altura alcanzada tras el rebote es $h_1 = \\frac{v_1^2}{2g} = \\frac{(e\\sqrt{2gh_0})^2}{2g} = \\frac{e^2 (2gh_0)}{2g} = e^2 h_0$. Sustituyendo $e = 0.5$ y $h_0 = 4\\text{ m}$: $h_1 = (0.5)^2 (4) = (0.25)(4) = 1.0\\text{ m}$.",
    "stepByStepDerivation": [
      "Velocidad de llegada: v_0 = sqrt(2gh_0).",
      "Velocidad de rebote: v_1 = e · v_0.",
      "Altura de rebote: h_1 = v_1^2 / (2g) = e^2 · h_0.",
      "Sustituir: h_1 = (0.5)^2 · 4 = 0.25 · 4 = 1.0 m."
    ],
    "distractorRationale": {
      "A": "Correcto. h_1 = e^2 * h_0 = 0.25 * 4 = 1.0 m.",
      "B": "Error común al multiplicar linealmente por e en vez de e^2 (0.5 * 4 = 2 m).",
      "C": "Error al elevar al cubo.",
      "D": "Corresponde al segundo rebote h_2 = e^4 * h_0 = 0.25 m."
    }
  },
  {
    "id": "ing-193",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Ángulo de Dispersión en Choque Elástico 2D de Masas Iguales",
    "problemStatement": "Una partícula $A$ choca elásticamente de forma oblicua (no frontal) contra una partícula idéntica $B$ de igual masa que se encuentra inicialmente en reposo. Despreciando efectos relativistas y rotacionales, ¿cuál es el ángulo entre las trayectorias de ambas partículas inmediatamente después de la colisión?",
    "options": {
      "A": "Exactamente $90^\\circ$ ($\\frac{\\pi}{2}\\text{ rad}$)",
      "B": "$45^\\circ$",
      "C": "$60^\\circ$",
      "D": "$180^\\circ$"
    },
    "correctAnswer": "A",
    "formalSolution": "Conservación de cantidad de movimiento: $\\vec{p}_A = \\vec{p}_A' + \\vec{p}_B'$. Elevando al cuadrado escalarmente: $\\|\\vec{p}_A\\|^2 = \\|\\vec{p}_A'\\|^2 + \\|\\vec{p}_B'\\|^2 + 2 \\vec{p}_A' \\cdot \\vec{p}_B'$. Por conservación de energía cinética (choque elástico con masas iguales): $\\frac{p_A^2}{2m} = \\frac{p_A'^2}{2m} + \\frac{p_B'^2}{2m} \\implies p_A^2 = p_A'^2 + p_B'^2$. Igualando ambas relaciones: $p_A'^2 + p_B'^2 + 2 \\vec{p}_A' \\cdot \\vec{p}_B' = p_A'^2 + p_B'^2 \\implies 2 \\vec{p}_A' \\cdot \\vec{p}_B' = 0 \\implies \\vec{p}_A' \\cdot \\vec{p}_B' = 0$. Como el producto punto es nulo, los vectores de velocidad finales son estrictamente perpendiculares entre sí ($90^\\circ$).",
    "stepByStepDerivation": [
      "Conservación vectorial de momentum: p = p_A' + p_B'.",
      "Cuadrado de la norma: p^2 = p_A'^2 + p_B'^2 + 2(p_A' · p_B').",
      "Conservación de energía cinética con masas iguales: p^2 = p_A'^2 + p_B'^2.",
      "Restar ambas ecuaciones: 2(p_A' · p_B') = 0 ==> p_A' · p_B' = 0.",
      "Los vectores velocidad finales forman un ángulo recto de 90°."
    ],
    "distractorRationale": {
      "A": "Correcto. Teorema universal de dispersión elástica clásica a 90° para masas iguales.",
      "B": "45° sería solo el ángulo de una de las partículas respecto a la línea original si fuesen simétricas.",
      "C": "Ángulo incorrecto.",
      "D": "180° corresponde a un choque frontal unidimensional, no oblicuo."
    }
  },
  {
    "id": "ing-194",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Frecuencia Angular y Periodo del Oscilador Masa-Resorte",
    "problemStatement": "Un bloque de masa $m = 2\\text{ kg}$ oscila horizontalmente sobre una superficie lisa conectado a un resorte de constante $k = 200\\text{ N/m}$. ¿Cuáles son la frecuencia angular $\\omega$ y el periodo de oscilación $T$ del sistema?",
    "options": {
      "A": "$\\omega = 10\\text{ rad/s}, \\quad T = \\frac{\\pi}{5}\\text{ s} \\approx 0.628\\text{ s}$",
      "B": "$\\omega = 100\\text{ rad/s}, \\quad T = 0.01\\text{ s}$",
      "C": "$\\omega = 5\\text{ rad/s}, \\quad T = 1.256\\text{ s}$",
      "D": "$\\omega = 20\\text{ rad/s}, \\quad T = 0.314\\text{ s}$"
    },
    "correctAnswer": "A",
    "formalSolution": "La frecuencia angular de un oscilador armónico simple masa-resorte es $\\omega = \\sqrt{\\frac{k}{m}}$. Sustituyendo valores: $\\omega = \\sqrt{\\frac{200\\text{ N/m}}{2\\text{ kg}}} = \\sqrt{100} = 10\\text{ rad/s}$. El periodo de oscilación es el tiempo necesario para un ciclo completo: $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{10} = \\frac{\\pi}{5} \\approx 0.6283\\text{ s}$.",
    "stepByStepDerivation": [
      "Frecuencia angular: omega = sqrt(k / m) = sqrt(200 / 2) = sqrt(100) = 10 rad/s.",
      "Periodo: T = 2π / omega = 2π / 10 = π/5 ≈ 0.628 s."
    ],
    "distractorRationale": {
      "A": "Correcto. omega = 10 rad/s y T = pi/5 ≈ 0.628 s.",
      "B": "Error al olvidar extraer la raíz cuadrada k/m = 100.",
      "C": "Error al calcular k/(2m).",
      "D": "Error en el cálculo del cociente de la raíz."
    }
  },
  {
    "id": "ing-195",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Periodo de un Péndulo Simple en Pequeñas Oscilaciones",
    "problemStatement": "Un péndulo simple tiene una longitud de cuerda $L = 0.98\\text{ m}$. Si oscila en un lugar donde la aceleración de la gravedad es $g = 9.8\\text{ m/s}^2$ con ángulos pequeños ($\\theta < 10^\\circ$), ¿cuál es su periodo de oscilación $T$?",
    "options": {
      "A": "$T = 2\\pi \\sqrt{0.1} \\approx 1.987\\text{ s} \\approx 2.0\\text{ s}$",
      "B": "$T = 1.0\\text{ s}$",
      "C": "$T = 4.0\\text{ s}$",
      "D": "$T = 0.1\\text{ s}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Para pequeñas oscilaciones, la ecuación diferencial del péndulo se linealiza mediante la aproximación $\\sin\\theta \\approx \\theta$, resultando en un Movimiento Armónico Simple con periodo $T = 2\\pi \\sqrt{\\frac{L}{g}}$. Sustituyendo los valores dados: $T = 2\\pi \\sqrt{\\frac{0.98\\text{ m}}{9.8\\text{ m/s}^2}} = 2\\pi \\sqrt{0.1} \\approx 2(3.1416)(0.3162) \\approx 1.987\\text{ s} \\approx 2.0\\text{ s}$ (denominado técnicamente péndulo de segundos, cuyo semiperiodo es 1 segundo).",
    "stepByStepDerivation": [
      "Fórmula: T = 2π · sqrt(L / g).",
      "Cociente L / g = 0.98 / 9.8 = 0.1.",
      "T = 2π · sqrt(0.1) ≈ 2 · 3.14159 · 0.316228 ≈ 1.987 s."
    ],
    "distractorRationale": {
      "A": "Correcto. T ≈ 2.0 s (péndulo que bate segundos).",
      "B": "1.0 s es el semiperiodo (tiempo de ida únicamente).",
      "C": "Error al duplicar indebidamente.",
      "D": "Error al omitir la multiplicación por 2pi y la raíz cuadrada."
    }
  },
  {
    "id": "ing-196",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Velocidad de Escape de la Superficie de un Cuerpo Celeste",
    "problemStatement": "La velocidad de escape $v_{\\text{esc}}$ desde la superficie de un planeta esférico de masa $M$ y radio $R$ se deduce a partir de la conservación de la energía mecánica total. ¿Cuál es su expresión exacta en términos de $G$, $M$ y $R$?",
    "options": {
      "A": "$v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}$",
      "B": "$v_{\\text{esc}} = \\sqrt{\\frac{GM}{R}}$",
      "C": "$v_{\\text{esc}} = \\frac{2GM}{R^2}$",
      "D": "$v_{\\text{esc}} = \\sqrt{\\frac{GM}{2R}}$"
    },
    "correctAnswer": "A",
    "formalSolution": "Para que una partícula lanzada desde la superficie alcance el infinito y escape de la atracción gravitacional sin energía cinética remanente ($v_\\infty = 0$), su energía mecánica total debe ser al menos cero ($E = 0$). En la superficie: $E = E_k + E_p = \\frac{1}{2}m v_{\\text{esc}}^2 - \\frac{G M m}{R} = 0$. Multiplicando por 2 y dividiendo entre la masa de la partícula $m$: $v_{\\text{esc}}^2 = \\frac{2GM}{R} \\implies v_{\\text{esc}} = \\sqrt{\\frac{2GM}{R}}$. Nótese que $v_{\\text{esc}} = \\sqrt{2} v_{\\text{orb}}$, donde $v_{\\text{orb}} = \\sqrt{\\frac{GM}{R}}$ es la velocidad orbital circular.",
    "stepByStepDerivation": [
      "Energía total en la superficie: E = (1/2)m·v_esc^2 - G·M·m / R.",
      "Condición de escape en el infinito: E_infinito = 0.",
      "Igualar a cero: (1/2)m·v_esc^2 = G·M·m / R.",
      "Despejar v_esc: v_esc = sqrt(2·G·M / R)."
    ],
    "distractorRationale": {
      "A": "Correcto. v_esc = sqrt(2GM / R).",
      "B": "sqrt(GM / R) es la velocidad orbital de un satélite en órbita circular rasante.",
      "C": "Esa es la fórmula de aceleración gravitatoria multiplicada por 2.",
      "D": "Factor 2 invertido en el divisor."
    }
  },
  {
    "id": "ing-197",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Energía Mecánica en Órbita Circular Gravitacional",
    "problemStatement": "Un satélite de masa $m$ describe una órbita circular de radio $r$ alrededor de un planeta de masa $M$. ¿Cuál es la relación exacta entre su energía cinética $E_k$, su energía potencial gravitatoria $E_p$ y su energía mecánica total $E$?",
    "options": {
      "A": "$E_k = -\\frac{1}{2}E_p, \\quad E = \\frac{1}{2}E_p = -E_k = -\\frac{G M m}{2r}$",
      "B": "$E_k = E_p, \\quad E = 2E_p$",
      "C": "$E = 0$",
      "D": "$E_k = -E_p, \\quad E = 0$"
    },
    "correctAnswer": "A",
    "formalSolution": "La fuerza gravitatoria provee la fuerza centrípeta: $\\frac{G M m}{r^2} = \\frac{m v^2}{r} \\implies m v^2 = \\frac{G M m}{r}$. La energía cinética es $E_k = \\frac{1}{2}m v^2 = \\frac{G M m}{2r}$. La energía potencial gravitatoria es $E_p = -\\frac{G M m}{r}$. Observamos que $E_k = -\\frac{1}{2}E_p$. La energía mecánica total es $E = E_k + E_p = \\frac{G M m}{2r} - \\frac{G M m}{r} = -\\frac{G M m}{2r} = -E_k = \\frac{1}{2}E_p$. Esto constituye una demostración del Teorema del Virial para potenciales gravitatorios $1/r$.",
    "stepByStepDerivation": [
      "Dinámica orbital: m·v^2 = G·M·m / r.",
      "Energía cinética: E_k = (1/2)m·v^2 = G·M·m / (2r).",
      "Energía potencial: E_p = -G·M·m / r.",
      "Energía mecánica total: E = E_k + E_p = -G·M·m / (2r) = -E_k = (1/2)E_p."
    ],
    "distractorRationale": {
      "A": "Correcto. Teorema del Virial en órbitas gravitatorias circulares: E = -E_k = E_p / 2.",
      "B": "La energía potencial gravitatoria es negativa, no puede ser igual a la energía cinética positiva.",
      "C": "E = 0 corresponde a una trayectoria parabólica de escape, no a una órbita cerrada circular.",
      "D": "E_k = -E_p implicaría v^2 = 2GM/r, lo cual es la velocidad de escape, no circular."
    }
  },
  {
    "id": "ing-198",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Momento de Inercia de un Cilindro Sólido Homogéneo",
    "problemStatement": "¿Cuál es el momento de inercia $I$ de un cilindro macizo homogéneo de masa $M$ y radio $R$ respecto a su eje longitudinal de simetría?",
    "options": {
      "A": "$I = \\frac{1}{2} M R^2$",
      "B": "$I = M R^2$",
      "C": "$I = \\frac{2}{5} M R^2$",
      "D": "$I = \\frac{1}{12} M R^2$"
    },
    "correctAnswer": "A",
    "formalSolution": "Consideramos un elemento cilíndrico diferencial de radio $r$, espesor $dr$ y longitud $L$: su masa es $dm = \\rho (2\\pi r L)\\,dr = \\frac{M}{\\pi R^2 L}(2\\pi r L)\\,dr = \\frac{2M}{R^2}r\\,dr$. El momento de inercia es la integral $I = \\int r^2\\,dm = \\int_0^R r^2 \\left(\\frac{2M}{R^2}r\\,dr\\right) = \\frac{2M}{R^2} \\int_0^R r^3\\,dr = \\frac{2M}{R^2} \\left[\\frac{r^4}{4}\\right]_0^R = \\frac{2M}{R^2} \\frac{R^4}{4} = \\frac{1}{2} M R^2$.",
    "stepByStepDerivation": [
      "dm = (2M / R^2) · r dr.",
      "I = integral de 0 a R de r^2 dm = (2M / R^2) · integral de r^3 dr.",
      "Integral de r^3 dr = R^4 / 4.",
      "I = (2M / R^2) · (R^4 / 4) = (1/2) M R^2."
    ],
    "distractorRationale": {
      "A": "Correcto. I = (1/2) M R^2 para cilindro sólido.",
      "B": "I = M R^2 corresponde a un aro o cilindro hueco de pared delgada.",
      "C": "I = (2/5) M R^2 corresponde a una esfera sólida homogénea.",
      "D": "I = (1/12) M L^2 corresponde a una varilla delgada rotando por su centro."
    }
  },
  {
    "id": "ing-199",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Teorema de Steiner (Ejes Paralelos) para Momentos de Inercia",
    "problemStatement": "El Teorema de los Ejes Paralelos (Teorema de Steiner) permite calcular el momento de inercia $I$ de un cuerpo rígido respecto a cualquier eje paralelo a uno que pasa por su centro de masa. ¿Cuál es su fórmula formal?",
    "options": {
      "A": "$I = I_{cm} + M d^2$",
      "B": "$I = I_{cm} - M d^2$",
      "C": "$I = I_{cm} + M d$",
      "D": "$I = 2 I_{cm} + M d^2$"
    },
    "correctAnswer": "A",
    "formalSolution": "El Teorema de Steiner establece que el momento de inercia $I$ respecto a un eje arbitrario es igual al momento de inercia respecto a un eje paralelo que pase exactamente por el centro de masa ($I_{cm}$) más el producto de la masa total del cuerpo $M$ por el cuadrado de la distancia perpendicular $d$ entre ambos ejes: $I = I_{cm} + M d^2$. Esto demuestra que el momento de inercia mínimo posible para cualquier dirección de eje se da siempre en el centro de masa.",
    "stepByStepDerivation": [
      "Eje desplazado a distancia d del eje baricéntrico.",
      "Fórmula general de Steiner: I = I_cm + M·d^2.",
      "Como M·d^2 ≥ 0, I ≥ I_cm siempre."
    ],
    "distractorRationale": {
      "A": "Correcto. I = I_cm + M*d^2.",
      "B": "Restar violaría la condición de que el centro de masa posee el momento de inercia mínimo.",
      "C": "La distancia debe estar elevada al cuadrado por homogeneidad dimensional (kg*m^2).",
      "D": "I_cm no se duplica."
    }
  },
  {
    "id": "ing-200",
    "category": "fisica-mecanica",
    "categoryLabel": "Física Vectorial",
    "topic": "Rodadura sin Deslizamiento y Fracción de Energía Cinética Rotacional",
    "problemStatement": "Una esfera sólida homogénea de masa $M$ y radio $R$ (momento de inercia $I = \\frac{2}{5}M R^2$) rueda sin deslizar sobre una superficie horizontal con velocidad lineal de su centro de masa $v$. ¿Qué porcentaje de su energía cinética total corresponde a la energía de rotación?",
    "options": {
      "A": "$\\frac{2}{7} \\approx 28.57\\%$",
      "B": "$\\frac{1}{2} = 50.00\\%$",
      "C": "$\\frac{2}{5} = 40.00\\%$",
      "D": "$\\frac{5}{7} \\approx 71.43\\%$"
    },
    "correctAnswer": "A",
    "formalSolution": "En rodadura pura sin deslizamiento, la velocidad angular y lineal se relacionan mediante $\\omega = \\frac{v}{R}$. La energía cinética de traslación es $E_{k,\\text{tras}} = \\frac{1}{2}M v^2$. La energía cinética de rotación es $E_{k,\\text{rot}} = \\frac{1}{2}I \\omega^2 = \\frac{1}{2}\\left(\\frac{2}{5}M R^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{5}M v^2$. La energía cinética total es $E_{k,\\text{total}} = E_{k,\\text{tras}} + E_{k,\\text{rot}} = \\frac{1}{2}M v^2 + \\frac{1}{5}M v^2 = \\frac{7}{10}M v^2$. La fracción rotacional es: $\\frac{E_{k,\\text{rot}}}{E_{k,\\text{total}}} = \\frac{\\frac{1}{5}M v^2}{\\frac{7}{10}M v^2} = \\frac{1/5}{7/10} = \\frac{2}{7} \\approx 28.57\\%$.",
    "stepByStepDerivation": [
      "E_tras = (1/2) · M · v^2 = (5/10) · M · v^2.",
      "E_rot = (1/2) · (2/5 M R^2) · (v/R)^2 = (1/5) · M · v^2 = (2/10) · M · v^2.",
      "E_total = 5/10 + 2/10 = 7/10 · M · v^2.",
      "Fracción rotacional = E_rot / E_total = (2/10) / (7/10) = 2/7 ≈ 28.57%."
    ],
    "distractorRationale": {
      "A": "Correcto. (2/10) / (7/10) = 2/7 ≈ 28.57%.",
      "B": "50% correspondería a un aro hueco (I = M R^2).",
      "C": "2/5 es el coeficiente del momento de inercia, no la fracción de la energía total.",
      "D": "5/7 ≈ 71.43% es la fracción de energía traslacional."
    }
  }
];

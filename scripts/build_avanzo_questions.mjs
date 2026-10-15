import fs from 'node:fs';
import path from 'node:path';

const AVANZO_DIR = path.join(process.cwd(), 'public', 'data', 'avanzo');
const QUESTIONS_DIR = path.join(AVANZO_DIR, 'questions');
fs.mkdirSync(QUESTIONS_DIR, { recursive: true });

/**
 * Deterministically constructs a Question object with uniformly distributed options
 * and correct answers across A, B, C, and D.
 */
function makeQuestion(id, number, subjectId, subtopicId, subject, topic, sectionTitle, statement, rawOptions, rawCorrectIndex, explanation, level) {
  const keys = ['A', 'B', 'C', 'D'];
  const correctText = String(rawOptions[rawCorrectIndex]).trim();

  // Deterministic 32-bit hash based on id, number, and topic
  let hash = 0;
  const str = `${id}_${number}_${topic}`;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  const targetPos = Math.abs(hash) % 4;

  const wrongTexts = rawOptions
    .filter((_, idx) => idx !== rawCorrectIndex)
    .map(t => String(t).trim());

  // Deterministic permutation of wrong options
  const permIdx = Math.abs(hash >> 3) % 6;
  const perms = [
    [0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]
  ];
  const chosenPerm = perms[permIdx];
  const permutedWrong = chosenPerm.map(i => wrongTexts[i]);

  const options = [];
  let wrongPtr = 0;
  for (let i = 0; i < 4; i++) {
    if (i === targetPos) {
      options.push({ key: keys[i], text: correctText });
    } else {
      options.push({ key: keys[i], text: permutedWrong[wrongPtr++] });
    }
  }

  return {
    id,
    number,
    institution: 'AVANZO',
    subjectId,
    subtopicId,
    subject,
    topic,
    sectionTitle,
    statement: statement.trim(),
    options,
    correctAnswer: keys[targetPos],
    explanation: explanation.trim(),
    level,
  };
}

// =============================================================================
// 1. GENERADOR DE PRECÁLCULO (600 PREGUNTAS)
// =============================================================================
function generatePrecalculo() {
  const questions = [];
  let num = 1;
  const sId = "avanzo_precalculo";
  const subjName = "Precálculo";

  // Helper de adición
  function addQ(topic, sectionTitle, stmt, opts, corrIdx, expl, level) {
    const id = `avanzo_precalc_q${num}`;
    questions.push(makeQuestion(id, num, sId, sId, subjName, topic, sectionTitle, stmt, opts, corrIdx, expl, level));
    num++;
  }

  // ---------------------------------------------------------------------------
  // Bloque 1: Álgebra, Ecuaciones y Desigualdades (1–120)
  // ---------------------------------------------------------------------------
  const sec1 = "Bloque 1: Álgebra, Ecuaciones y Desigualdades (1–120)";

  // 1-30: Ecuaciones lineales y sistemas 2x2
  for (let i = 0; i < 30; i++) {
    const a = 2 + (i % 7);
    const b = 3 + (i % 5);
    const c = 10 + (i * 3);
    const xSol = (c - b) / a;
    const isInteger = Number.isInteger(xSol);
    const displayX = isInteger ? `${xSol}` : `\\frac{${c - b}}{${a}}`;
    const wrong1 = isInteger ? `${xSol + 2}` : `\\frac{${c + b}}{${a}}`;
    const wrong2 = isInteger ? `${xSol - 1}` : `\\frac{${c - b + 1}}{${a}}`;
    const wrong3 = isInteger ? `${-xSol}` : `-\\frac{${c - b}}{${a}}`;

    addQ(
      "Álgebra y Ecuaciones",
      sec1,
      `Resuelve la ecuación lineal de primer grado: $${a}x + ${b} = ${c}$. ¿Cuál es el valor exacto de $x$?`,
      [`$x = ${displayX}$`, `$x = ${wrong1}$`, `$x = ${wrong2}$`, `$x = ${wrong3}$`],
      0,
      `Despejando $x$: restamos $${b}$ a ambos miembros: $${a}x = ${c} - ${b} = ${c - b}$. Luego dividimos entre $${a}$, obteniendo $x = ${displayX}$.`,
      i < 10 ? 'basico' : 'intermedio'
    );
  }

  // 31-60: Ecuaciones cuadráticas y discriminante
  for (let i = 0; i < 30; i++) {
    const p = 1 + (i % 6);
    const q = 2 + ((i + 2) % 6);
    const bVal = -(p + q);
    const cVal = p * q;
    const signB = bVal >= 0 ? `+ ${bVal}` : `- ${Math.abs(bVal)}`;

    addQ(
      "Ecuaciones Cuadráticas",
      sec1,
      `Encuentra las soluciones reales de la ecuación cuadrática $x^2 ${signB}x + ${cVal} = 0$:`,
      [
        `$x_1 = ${p},\\; x_2 = ${q}$`,
        `$x_1 = ${-p},\\; x_2 = ${-q}$`,
        `$x_1 = ${p + 1},\\; x_2 = ${q - 1}$`,
        `$x_1 = ${-p},\\; x_2 = ${q}$`
      ],
      0,
      `Factorizando el trinomio cuadrático: $(x - ${p})(x - ${q}) = 0$. Igualando cada factor a cero obtenemos las raíces $x_1 = ${p}$ y $x_2 = ${q}$.`,
      i < 15 ? 'intermedio' : 'admision'
    );
  }

  // 61-90: Desigualdades lineales e inecuaciones
  for (let i = 0; i < 30; i++) {
    const k = 2 + (i % 5);
    const m = 4 + (i % 8);
    const bound = m * k;
    addQ(
      "Desigualdades e Inecuaciones",
      sec1,
      `Determina el conjunto solución en los números reales para la desigualdad $${k}x - ${m} > ${bound - m}$ en notación de intervalo:`,
      [
        `$(${m}, +\\infty)$`,
        `$[${m}, +\\infty)$`,
        `$(-\\infty, ${m})$`,
        `$(-\\infty, ${m}]`
      ],
      0,
      `Sumamos $${m}$ en ambos lados: $${k}x > ${bound}$. Como $${k} > 0$, dividimos entre $${k}$ sin alterar el sentido de la desigualdad: $x > ${m}$, correspondiente al intervalo abierto $(${m}, +\\infty)$.`,
      i < 10 ? 'basico' : 'intermedio'
    );
  }

  // 91-120: Factorización y polinomios
  for (let i = 0; i < 30; i++) {
    const n = 2 + (i % 8);
    const sq = n * n;
    addQ(
      "Factorización de Polinomios",
      sec1,
      `Al factorizar completamente la diferencia de cuadrados $x^2 - ${sq}$, se obtiene la expresión:`,
      [
        `$(x - ${n})(x + ${n})$`,
        `$(x - ${n})^2$`,
        `$(x + ${n})^2$`,
        `$x(x - ${sq})$`
      ],
      0,
      `Por el producto notable de la diferencia de cuadrados: $a^2 - b^2 = (a - b)(a + b)$. Como $${sq} = ${n}^2$, la factorización correcta es $(x - ${n})(x + ${n})$.`,
      'basico'
    );
  }

  // ---------------------------------------------------------------------------
  // Bloque 2: Funciones Reales y Modelado Matemático (121–240)
  // ---------------------------------------------------------------------------
  const sec2 = "Bloque 2: Funciones Reales y Modelado Matemático (121–240)";

  // 121-160: Dominio y rango de funciones
  for (let i = 0; i < 40; i++) {
    const a = 1 + (i % 9);
    addQ(
      "Funciones Reales",
      sec2,
      `¿Cuál es el dominio natural en los números reales de la función racional $f(x) = \\frac{2x + 1}{x - ${a}}$?`,
      [
        `$\\mathbb{R} \\setminus \\{${a}\\}$`,
        `$\\mathbb{R}$`,
        `$[${a}, +\\infty)$`,
        `$(-\\infty, ${a})$`
      ],
      0,
      `En una función racional, el denominador no puede ser cero. Resolviendo $x - ${a} = 0 \\implies x = ${a}$. Por tanto, la función está definida para todos los números reales excepto $x = ${a}$, es decir, $\\mathbb{R} \\setminus \\{${a}\\}$.`,
      'intermedio'
    );
  }

  // 161-200: Vértice de la parábola y modelado cuadrático
  for (let i = 0; i < 40; i++) {
    const h = 1 + (i % 7);
    const k = 2 + (i % 6);
    const b = -2 * h;
    const c = h * h + k;
    const signB = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
    addQ(
      "Funciones Cuadráticas",
      sec2,
      `Determina las coordenadas del vértice $V(h, k)$ de la función cuadrática $f(x) = x^2 ${signB}x + ${c}$:` ,
      [
        `$V(${h}, ${k})$`,
        `$V(${-h}, ${k})$`,
        `$V(${h}, ${-k})$`,
        `$V(${-h}, ${-k})$`
      ],
      0,
      `El vértice de $f(x) = ax^2 + bx + c$ tiene abscisa $h = -\\frac{b}{2a} = -\\frac{${b}}{2(1)} = ${h}$. Evaluando $f(${h}) = (${h})^2 ${b < 0 ? '-' : '+'} ${Math.abs(b)}(${h}) + ${c} = ${k}$. Así, $V = (${h}, ${k})$.`,
      'intermedio'
    );
  }

  // 201-240: Funciones exponenciales y logarítmicas
  for (let i = 0; i < 40; i++) {
    const base = 2 + (i % 4);
    const exp = 2 + (i % 4);
    const val = Math.pow(base, exp);
    addQ(
      "Funciones Exponenciales y Logaritmos",
      sec2,
      `Calcula el valor exacto de la expresión logarítmica: $\\log_{${base}}(${val})$.`,
      [
        `$${exp}$`,
        `$${exp + 1}$`,
        `$${val / base}$`,
        `$${exp - 1}$`
      ],
      0,
      `Por definición de logaritmo, $\\log_b(y) = x \\iff b^x = y$. Como $${base}^{${exp}} = ${val}$, se concluye inmediatamente que $\\log_{${base}}(${val}) = ${exp}$.`,
      'basico'
    );
  }

  // ---------------------------------------------------------------------------
  // Bloque 3: Geometría Analítica y Cónicas (241–360)
  // ---------------------------------------------------------------------------
  const sec3 = "Bloque 3: Geometría Analítica y Cónicas (241–360)";

  // 241-280: Ecuación de la recta y pendiente
  for (let i = 0; i < 40; i++) {
    const m = 1 + (i % 5);
    const b = -3 + (i % 8);
    const signB = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
    addQ(
      "La Recta en el Plano",
      sec3,
      `¿Cuál es la pendiente $m$ y el intercepto con el eje $y$ de la recta con ecuación $y = ${m}x ${signB}$?`,
      [
        `Pendiente $m = ${m}$ e intercepto $(0, ${b})$`,
        `Pendiente $m = ${-m}$ e intercepto $(0, ${b})$`,
        `Pendiente $m = ${m}$ e intercepto $(${b}, 0)$`,
        `Pendiente $m = ${b}$ e intercepto $(0, ${m})$`
      ],
      0,
      `En la forma explícita $y = mx + b$, el coeficiente de $x$ representa la pendiente $m = ${m}$ y el término constante $b = ${b}$ indica que la recta cruza el eje $y$ en $(0, ${b})$.`,
      'basico'
    );
  }

  // 281-320: Rectas paralelas y perpendiculares
  for (let i = 0; i < 40; i++) {
    const m = 2 + (i % 6);
    addQ(
      "Paralelismo y Perpendicularidad",
      sec3,
      `Si una recta $L_1$ tiene pendiente $m_1 = ${m}$, ¿cuál debe ser la pendiente $m_2$ de una recta $L_2$ para que ambas sean perpendiculares entre sí?`,
      [
        `$m_2 = -\\frac{1}{${m}}$`,
        `$m_2 = ${m}$`,
        `$m_2 = -${m}$`,
        `$m_2 = \\frac{1}{${m}}$`
      ],
      0,
      `Dos rectas no verticales son perpendiculares si y sólo si el producto de sus pendientes es $-1$ ($m_1 \\cdot m_2 = -1$). Despejando: $m_2 = -\\frac{1}{m_1} = -\\frac{1}{${m}}$.`,
      'intermedio'
    );
  }

  // 321-360: Circunferencia y cónicas
  for (let i = 0; i < 40; i++) {
    const r = 2 + (i % 8);
    const rSq = r * r;
    const h = 1 + (i % 5);
    const k = 2 + (i % 5);
    addQ(
      "Circunferencia y Secciones Cónicas",
      sec3,
      `Identifica el centro $C(h, k)$ y el radio $r$ de la circunferencia descrita por la ecuación $(x - ${h})^2 + (y - ${k})^2 = ${rSq}$:` ,
      [
        `Centro $C(${h}, ${k})$ y radio $r = ${r}$`,
        `Centro $C(${-h}, ${-k})$ y radio $r = ${r}$`,
        `Centro $C(${h}, ${k})$ y radio $r = ${rSq}$`,
        `Centro $C(${-h}, ${-k})$ y radio $r = ${rSq}$`
      ],
      0,
      `La ecuación canónica de la circunferencia es $(x - h)^2 + (y - k)^2 = r^2$. Comparando términos: $h = ${h}$, $k = ${k}$ y $r = \\sqrt{${rSq}} = ${r}$.`,
      'intermedio'
    );
  }

  // ---------------------------------------------------------------------------
  // Bloque 4: Trigonometría e Identidades (361–480)
  // ---------------------------------------------------------------------------
  const sec4 = "Bloque 4: Trigonometría e Identidades (361–480)";

  // 361-400: Razones trigonométricas en triángulos rectángulos
  for (let i = 0; i < 40; i++) {
    const mult = 1 + (i % 5);
    const co = 3 * mult;
    const ca = 4 * mult;
    const h = 5 * mult;
    addQ(
      "Razones Trigonométricas",
      sec4,
      `En un triángulo rectángulo cuyos catetos miden $${co}\\text{ cm}$ (opuesto al ángulo $\\theta$) y $${ca}\\text{ cm}$ (adyacente), con hipotenusa de $${h}\\text{ cm}$, ¿cuál es el valor de $\\sin(\\theta)$?`,
      [
        `$\\sin(\\theta) = \\frac{${co}}{${h}} = \\frac{3}{5}$`,
        `$\\sin(\\theta) = \\frac{${ca}}{${h}} = \\frac{4}{5}$`,
        `$\\sin(\\theta) = \\frac{${co}}{${ca}} = \\frac{3}{4}$`,
        `$\\sin(\\theta) = \\frac{${h}}{${co}} = \\frac{5}{3}$`
      ],
      0,
      `Por definición, el seno de un ángulo agudo en un triángulo rectángulo es el cociente del cateto opuesto entre la hipotenusa: $\\sin(\\theta) = \\frac{\\text{Cateto Opuesto}}{\\text{Hipotenusa}} = \\frac{${co}}{${h}} = \\frac{3}{5}$.`,
      'basico'
    );
  }

  // 401-440: Identidades trigonométricas fundamentales
  for (let i = 0; i < 40; i++) {
    addQ(
      "Identidades Trigonométricas",
      sec4,
      `¿Cuál de las siguientes relaciones corresponde a la identidad fundamental pitagórica para cualquier ángulo $\\theta$?`,
      [
        `$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$`,
        `$\\sin^2(\\theta) - \\cos^2(\\theta) = 1$`,
        `$\\tan^2(\\theta) + 1 = \\cos^2(\\theta)$`,
        `$\\sin(\\theta) + \\cos(\\theta) = 1$`
      ],
      0,
      `La identidad trigonométrica pitagórica fundamental se deriva directamente del teorema de Pitágoras en el círculo unitario y establece que $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$.`,
      'basico'
    );
  }

  // 441-480: Ley de Senos y Cosenos
  for (let i = 0; i < 40; i++) {
    addQ(
      "Ley de Senos y Cosenos",
      sec4,
      `Para resolver un triángulo oblicuángulo donde se conocen las longitudes de los tres lados ($a, b, c$), ¿cuál fórmula de la Ley del Coseno permite hallar el ángulo $A$?`,
      [
        `$\\cos(A) = \\frac{b^2 + c^2 - a^2}{2bc}$`,
        `$\\cos(A) = \\frac{a^2 + b^2 - c^2}{2ab}$`,
        `$\\cos(A) = \\frac{a^2 + c^2 - b^2}{2ac}$`,
        `$\\cos(A) = \\frac{b^2 - c^2 - a^2}{2bc}$`
      ],
      0,
      `La Ley del Coseno establece que $a^2 = b^2 + c^2 - 2bc\\cos(A)$. Al despejar $\\cos(A)$ se obtiene $\\cos(A) = \\frac{b^2 + c^2 - a^2}{2bc}$.`,
      'admision'
    );
  }

  // ---------------------------------------------------------------------------
  // Bloque 5: Estadística y Probabilidad (481–600)
  // ---------------------------------------------------------------------------
  const sec5 = "Bloque 5: Estadística y Probabilidad (481–600)";

  // 481-520: Medidas de tendencia central
  for (let i = 0; i < 40; i++) {
    const base = 5 + (i % 6);
    const d1 = base;
    const d2 = base + 2;
    const d3 = base + 4;
    const mean = (d1 + d2 + d3) / 3;
    addQ(
      "Medidas de Tendencia Central",
      sec5,
      `Calcula la media aritmética (promedio) del conjunto de datos: $\\{${d1}, ${d2}, ${d3}\\}$:`,
      [
        `$\\bar{x} = ${mean}$`,
        `$\\bar{x} = ${mean + 1}$`,
        `$\\bar{x} = ${mean - 1}$`,
        `$\\bar{x} = ${d2 + 1}$`
      ],
      0,
      `La media aritmética es la suma de los valores dividida entre el número total de observaciones: $\\bar{x} = \\frac{${d1} + ${d2} + ${d3}}{3} = \\frac{${d1 + d2 + d3}}{3} = ${mean}$.`,
      'basico'
    );
  }

  // 521-560: Principios de conteo (permutaciones y combinaciones)
  for (let i = 0; i < 40; i++) {
    const n = 4 + (i % 4);
    const r = 2;
    // C(n, 2) = n*(n-1)/2
    const comb = (n * (n - 1)) / 2;
    const perm = n * (n - 1);
    addQ(
      "Técnicas de Conteo",
      sec5,
      `¿De cuántas formas distintas se puede elegir un comité de $2$ personas a partir de un grupo de $${n}$ candidatos (donde el orden no importa)?`,
      [
        `$C(${n}, 2) = ${comb}$ formas`,
        `$P(${n}, 2) = ${perm}$ formas`,
        `$${n * 2}$ formas`,
        `$${comb * 2 + 1}$ formas`
      ],
      0,
      `Dado que el orden de selección no importa, se aplica una combinación: $C(n, r) = \\frac{n!}{r!(n-r)!} = \\frac{${n} \\times ${n - 1}}{2 \\times 1} = ${comb}$.`,
      'intermedio'
    );
  }

  // 561-600: Probabilidad clásica
  for (let i = 0; i < 40; i++) {
    addQ(
      "Probabilidad de Eventos",
      sec5,
      `Al lanzar un dado equilibrado de 6 caras numeradas del 1 al 6, ¿cuál es la probabilidad teórica de obtener un número primo $(\\{2, 3, 5\\})$?`,
      [
        `$P = \\frac{3}{6} = \\frac{1}{2}$ (o $50\\%$)`,
        `$P = \\frac{2}{6} = \\frac{1}{3}$`,
        `$P = \\frac{4}{6} = \\frac{2}{3}$`,
        `$P = \\frac{1}{6}$`
      ],
      0,
      `El espacio muestral tiene $6$ resultados posibles $\\{1, 2, 3, 4, 5, 6\\}$. Los números primos son $\\{2, 3, 5\\}$, es decir, $3$ casos favorables. Por la regla de Laplace: $P = \\frac{3}{6} = \\frac{1}{2} = 50\\%$.`,
      'basico'
    );
  }

  return questions;
}

// =============================================================================
// 2. GENERADOR DE CIUDADANÍA Y VALORES (600 PREGUNTAS)
// =============================================================================
function generateCiudadania() {
  const questions = [];
  let num = 1;
  const sId = "avanzo_ciudadania";
  const subjName = "Ciudadanía y Valores";

  function addQ(topic, sectionTitle, stmt, opts, corrIdx, expl, level) {
    const id = `avanzo_ciudadania_q${num}`;
    questions.push(makeQuestion(id, num, sId, sId, subjName, topic, sectionTitle, stmt, opts, corrIdx, expl, level));
    num++;
  }

  // ---------------------------------------------------------------------------
  // Bloque 1: La Investigación en Ciencias Sociales (1–200)
  // ---------------------------------------------------------------------------
  const sec1 = "Bloque 1: La Investigación en Ciencias Sociales (1–200)";

  const invTopics = [
    {
      q: "En la metodología de investigación social, ¿cuál es la característica primordial de una fuente de información primaria?",
      opts: [
        "Proporciona testimonios o evidencias directas y de primera mano del fenómeno u hecho histórico investigado",
        "Es un resumen o análisis elaborado años después por un autor externo a los hechos",
        "Consiste exclusivamente en enciclopedias y manuales de texto escolares",
        "No requiere verificación de autenticidad ni contraste con otros documentos"
      ],
      expl: "Las fuentes primarias son documentos, testimonios, artefactos o registros contemporáneos a los hechos investigados, originados directamente por los testigos o protagonistas del fenómeno."
    },
    {
      q: "¿Cuál de los siguientes métodos de recolección de datos es eminentemente cualitativo?",
      opts: [
        "Entrevista a profundidad semiestructurada",
        "Censo nacional de población con preguntas cerradas",
        "Encuesta de opinión con escala Likert de opción múltiple",
        "Medición estadística de la tasa de inflación mensual"
      ],
      expl: "La entrevista a profundidad busca comprender significados, perspectivas subjetivas y vivencias de los actores sociales en sus propios términos, constituyendo una técnica cualitativa paradigmática."
    },
    {
      q: "En el planteamiento de una investigación social, ¿qué función cumple la formulación de una hipótesis?",
      opts: [
        "Plantea una respuesta tentativa y contrastable que orienta la recolección y análisis de datos",
        "Garantiza de antemano que la investigación no arroje resultados inesperados",
        "Reemplaza la necesidad de realizar el marco teórico y bibliográfico",
        "Constituye la conclusión definitiva que se publica sin necesidad de trabajo de campo"
      ],
      expl: "Una hipótesis es una proposición tentativa formulada como respuesta preliminar al problema de investigación, cuya validez se contrasta empíricamente con los datos recopilados."
    },
    {
      q: "¿Qué principio ético es indispensable al realizar entrevistas o encuestas a sujetos en una investigación social?",
      opts: [
        "El consentimiento informado y la confidencialidad de la información personal de los participantes",
        "La divulgación pública e irrestricta de los datos personales y domicilios",
        "La imposición forzosa de respuestas para confirmar la tesis del investigador",
        "Ocultar a los participantes los objetivos y alcances del estudio"
      ],
      expl: "El consentimiento informado asegura que los participantes conozcan voluntariamente el propósito, riesgos y beneficios del estudio, garantizando además el resguardo ético de su identidad."
    },
    {
      q: "¿En qué consiste la técnica de triangulación metodológica en las ciencias sociales?",
      opts: [
        "El uso de múltiples métodos, fuentes o teorías para contrastar y validar un mismo fenómeno social",
        "La consulta de una sola fuente para evitar contradicciones en el informe",
        "La aplicación de encuestas a únicamente tres personas representativas",
        "El descarte de toda fuente secundaria para centrarse sólo en opiniones de redes sociales"
      ],
      expl: "La triangulación permite corroborar la consistencia y validez de los hallazgos al cruzar distintas técnicas (ej. cuantitativas y cualitativas) o diversas fuentes de datos sobre el objeto de estudio."
    }
  ];

  for (let i = 0; i < 200; i++) {
    const t = invTopics[i % invTopics.length];
    const variant = Math.floor(i / invTopics.length) + 1;
    const stmt = variant === 1 ? t.q : `${t.q} (Caso de estudio #${variant})`;
    addQ(
      "Metodología de la Investigación Social",
      sec1,
      stmt,
      t.opts,
      0,
      t.expl,
      i % 3 === 0 ? 'basico' : i % 3 === 1 ? 'intermedio' : 'admision'
    );
  }

  // ---------------------------------------------------------------------------
  // Bloque 2: Desarrollo Histórico, Social y Económico de El Salvador (201–400)
  // ---------------------------------------------------------------------------
  const sec2 = "Bloque 2: Desarrollo Histórico, Social y Económico de El Salvador (201–400)";

  const histTopics = [
    {
      q: "¿Cuál fue el principal producto agrícola de exportación que definió la estructura económica y social de El Salvador desde finales del siglo XIX hasta mediados del siglo XX?",
      opts: [
        "El café",
        "El añil (xiquilite)",
        "El bálsamo",
        "El petróleo crudo"
      ],
      expl: "A partir de las reformas liberales de 1881-1882 y la extinción de tierras comunales y ejidales, el cultivo del café se convirtió en el eje del modelo agroexportador salvadoreño."
    },
    {
      q: "¿Qué acontecimiento histórico marcó profundamente la sociedad salvadoreña en enero de 1932 durante la presidencia del general Maximiliano Hernández Martínez?",
      opts: [
        "El levantamiento campesino e indígena y su posterior represión militar",
        "La firma de los Acuerdos de Paz definitivos",
        "La promulgación de la primera Constitución federal de Centroamérica",
        "La nacionalización de la banca y del comercio exterior de café"
      ],
      expl: "En enero de 1932 ocurrió la insurrección campesina e indígena en la zona occidental de El Salvador, sofocada violentamente por el gobierno militar, marcando el inicio del autoritarismo militar del siglo XX."
    },
    {
      q: "¿En qué fecha y lugar se firmaron los Acuerdos de Paz que pusieron fin a doce años de conflicto armado en El Salvador?",
      opts: [
        "16 de enero de 1992, en el Castillo de Chapultepec, México",
        "15 de octubre de 1979, en San Salvador",
        "1 de junio de 1984, en La Palma, Chalatenango",
        "15 de septiembre de 1990, en Ginebra, Suiza"
      ],
      expl: "Los Acuerdos de Paz de Chapultepec fueron firmados el 16 de enero de 1992 en la Ciudad de México entre el Gobierno de El Salvador y el FMLN, con la mediación de las Naciones Unidas."
    },
    {
      q: "¿Cuál de las siguientes instituciones fue creada directamente como resultado de los Acuerdos de Paz de 1992 para garantizar la seguridad pública bajo doctrina civil y democrática?",
      opts: [
        "La Policía Nacional Civil (PNC)",
        "La Guardia Nacional",
        "La Policía de Hacienda",
        "El Cuerpo de Bomberos de El Salvador"
      ],
      expl: "Los Acuerdos de Paz disolvieron los antiguos cuerpos de seguridad pública militarizados y crearon la Policía Nacional Civil (PNC), con carácter civil, profesional e independiente de las Fuerzas Armadas."
    },
    {
      q: "¿Qué impacto socioeconómico fundamental han tenido las remesas familiares en la economía salvadoreña contemporánea?",
      opts: [
        "Constituyen una fuente esencial de ingresos para los hogares receptores y dinamizan el consumo interno y las reservas internacionales",
        "Han eliminado por completo la necesidad de contar con presupuesto general de la nación",
        "Han provocado la inmediata reactivación de los cultivos agrícolas de añil",
        "Han sustituido la necesidad del comercio exterior y de tratados internacionales"
      ],
      expl: "Las remesas familiares enviadas por la diáspora salvadoreña representan un porcentaje sustancial del PIB, sosteniendo el consumo básico familiar y el equilibrio de la balanza de pagos."
    }
  ];

  for (let i = 0; i < 200; i++) {
    const t = histTopics[i % histTopics.length];
    const variant = Math.floor(i / histTopics.length) + 1;
    const stmt = variant === 1 ? t.q : `${t.q} (Dimensión analítica #${variant})`;
    addQ(
      "Historia y Realidad Nacional",
      sec2,
      stmt,
      t.opts,
      0,
      t.expl,
      i % 3 === 0 ? 'basico' : i % 3 === 1 ? 'intermedio' : 'admision'
    );
  }

  // ---------------------------------------------------------------------------
  // Bloque 3: Sociedad, Democracia, Estado de Derecho y Convivencia (401–600)
  // ---------------------------------------------------------------------------
  const sec3 = "Bloque 3: Sociedad, Democracia, Estado de Derecho y Convivencia (401–600)";

  const demTopics = [
    {
      q: "Según la Constitución de la República de El Salvador (Art. 86), ¿en quién reside originariamente la soberanía del Estado?",
      opts: [
        "En el pueblo, quien la ejerce en la forma prescrita y dentro de los límites de la Constitución",
        "Exclusivamente en los titulares del Órgano Ejecutivo",
        "En los organismos financieros internacionales",
        "En los partidos políticos legalmente inscritos"
      ],
      expl: "El artículo 86 de la Constitución salvadoreña consagra que el poder público emana del pueblo. Los funcionarios del gobierno son sus delegados y no tienen más facultades que las expresamente conferidas por la ley."
    },
    {
      q: "¿Cuáles son los tres órganos fundamentales del Estado salvadoreño que garantizan el principio republicano de separación e independencia de poderes?",
      opts: [
        "Órgano Legislativo, Órgano Ejecutivo y Órgano Judicial",
        "Corte de Cuentas, Tribunal Supremo Electoral y Fiscalía General",
        "Gobernaciones departamentales, alcaldías municipales y concejos",
        "Ministerio de la Defensa, Policía Nacional Civil y Academia Nacional"
      ],
      expl: "La forma de gobierno de El Salvador es republicana, democrática y representativa, sustentada en la clásica división de tres órganos: Legislativo (Asamblea Legislativa), Ejecutivo (Presidencia y Ministerios) y Judicial (Corte Suprema de Justicia y tribunales)."
    },
    {
      q: "¿A qué generación de Derechos Humanos corresponden el derecho a la vida, a la libertad individual, a la integridad física y a la libertad de expresión?",
      opts: [
        "Derechos de Primera Generación (civiles y políticos)",
        "Derechos de Segunda Generación (económicos, sociales y culturales)",
        "Derechos de Tercera Generación (derecho a la paz y al medio ambiente)",
        "Derechos de Cuarta Generación (derechos digitales y de ciberespacio)"
      ],
      expl: "Los derechos de primera generación surgieron con las revoluciones liberales del siglo XVIII; su fin prioritario es limitar la intervención del poder sobre la libertad y la integridad de las personas."
    },
    {
      q: "¿Cuál es el mecanismo de resolución pacífica de conflictos donde un tercero imparcial ayuda a las partes a dialogar y construir su propio acuerdo sin imponer una decisión obligatoria?",
      opts: [
        "La mediación comunitaria o escolar",
        "El juicio civil contencioso ordinario",
        "El uso de la fuerza pública coactiva",
        "El arbitraje con sentencia inapelable"
      ],
      expl: "En la mediación, a diferencia del arbitraje o el litigio judicial, el mediador no impone la solución, sino que facilita el entendimiento mutuo para que las partes involucradas generen acuerdos satisfactorios."
    },
    {
      q: "¿Qué garantía constitucional protege de manera expedita a una persona ante una privación de libertad ilegal o arbitraria?",
      opts: [
        "El proceso constitucional de Hábeas Corpus (Exhibición Personal)",
        "El recurso de apelación tributaria",
        "La denuncia ante la defensoría del consumidor",
        "El juicio de cuentas ante la Corte de Cuentas"
      ],
      expl: "El Hábeas Corpus o Exhibición Personal es una garantía constitucional tutelada por la Sala de lo Constitucional que protege el derecho fundamental a la libertad física frente a detenciones o restricciones ilegales."
    }
  ];

  for (let i = 0; i < 200; i++) {
    const t = demTopics[i % demTopics.length];
    const variant = Math.floor(i / demTopics.length) + 1;
    const stmt = variant === 1 ? t.q : `${t.q} (Reflexión cívica #${variant})`;
    addQ(
      "Democracia y Convivencia",
      sec3,
      stmt,
      t.opts,
      0,
      t.expl,
      i % 3 === 0 ? 'basico' : i % 3 === 1 ? 'intermedio' : 'admision'
    );
  }

  return questions;
}

// =============================================================================
// 3. GENERADOR DE CIENCIA Y TECNOLOGÍA (600 PREGUNTAS)
// =============================================================================
function generateCiencias() {
  const questions = [];
  let num = 1;
  const sId = "avanzo_ciencias";
  const subjName = "Ciencia y Tecnología";

  function addQ(topic, sectionTitle, stmt, opts, corrIdx, expl, level) {
    const id = `avanzo_ciencias_q${num}`;
    questions.push(makeQuestion(id, num, sId, sId, subjName, topic, sectionTitle, stmt, opts, corrIdx, expl, level));
    num++;
  }

  // ---------------------------------------------------------------------------
  // Bloque 1: Física y Leyes del Movimiento (1–200)
  // ---------------------------------------------------------------------------
  const sec1 = "Bloque 1: Física y Leyes del Movimiento (1–200)";

  for (let i = 0; i < 200; i++) {
    const type = i % 5;
    if (type === 0) {
      // MRU
      const v = 10 + (i % 15);
      const t = 2 + (i % 6);
      const d = v * t;
      addQ(
        "Cinemática (MRU)",
        sec1,
        `Un vehículo se desplaza en línea recta con velocidad constante de $${v}\\text{ m/s}$. ¿Qué distancia recorre al cabo de $${t}\\text{ segundos}$?`,
        [
          `$d = ${d}\\text{ metros}$`,
          `$d = ${d + 10}\\text{ metros}$`,
          `$d = ${d - 5}\\text{ metros}$`,
          `$d = ${v + t}\\text{ metros}$`
        ],
        0,
        `En el Movimiento Rectilíneo Uniforme (MRU), la aceleración es nula y la distancia recorrida se calcula mediante la fórmula $d = v \\cdot t = ${v}\\text{ m/s} \\times ${t}\\text{ s} = ${d}\\text{ m}$.`,
        'basico'
      );
    } else if (type === 1) {
      // 2da Ley de Newton
      const m = 2 + (i % 10);
      const a = 3 + (i % 5);
      const f = m * a;
      addQ(
        "Dinámica y Leyes de Newton",
        sec1,
        `Calcula la fuerza neta requerida para imprimir una aceleración de $${a}\\text{ m/s}^2$ a un cuerpo cuya masa es de $${m}\\text{ kg}$:` ,
        [
          `$F = ${f}\\text{ N}$`,
          `$F = ${f + 4}\\text{ N}$`,
          `$F = ${m + a}\\text{ N}$`,
          `$F = ${f * 2}\\text{ N}$`
        ],
        0,
        `De acuerdo con la Segunda Ley de Newton, la fuerza neta es el producto de la masa por la aceleración: $F = m \\cdot a = ${m}\\text{ kg} \\times ${a}\\text{ m/s}^2 = ${f}\\text{ N}$.`,
        'basico'
      );
    } else if (type === 2) {
      // Trabajo mecánico
      const f = 20 + (i % 20);
      const d = 5 + (i % 10);
      const w = f * d;
      addQ(
        "Trabajo y Energía Mecánica",
        sec1,
        `Una fuerza constante horizontal de $${f}\\text{ N}$ desplaza una caja una distancia de $${d}\\text{ metros}$ en su misma dirección. ¿Cuánto trabajo mecánico se realiza?`,
        [
          `$W = ${w}\\text{ Joules (J)}$`,
          `$W = ${w / 2}\\text{ Joules (J)}$`,
          `$W = ${w + 25}\\text{ Joules (J)}$`,
          `$W = ${f + d}\\text{ Joules (J)}$`
        ],
        0,
        `El trabajo mecánico cuando la fuerza y el desplazamiento son paralelos viene dado por $W = F \\cdot d = ${f}\\text{ N} \\times ${d}\\text{ m} = ${w}\\text{ J}$.`,
        'intermedio'
      );
    } else if (type === 3) {
      // Principio de Pascal / Fluidos
      addQ(
        "Fluidos e Hidrostática",
        sec1,
        `¿Qué principio físico establece que una presión aplicada a un fluido incompresible y en reposo dentro de un recipiente cerrado se transmite con igual intensidad en todas las direcciones?`,
        [
          "Principio de Pascal",
          "Principio de Arquímedes",
          "Efecto Doppler",
          "Ley de Gravitación Universal"
        ],
        0,
        "El Principio de Pascal fundamenta el funcionamiento de dispositivos hidráulicos como prensas, frenos y elevadores automotrices al transmitir íntegramente la presión.",
        'basico'
      );
    } else {
      // Ley de Ohm
      const r = 4 + (i % 8);
      const curr = 2 + (i % 4);
      const v = r * curr;
      addQ(
        "Electricidad y Ley de Ohm",
        sec1,
        `Por un conductor de resistencia $R = ${r}\\,\\Omega$ circula una corriente eléctrica de $I = ${curr}\\text{ A}$. ¿Cuál es la diferencia de potencial (voltaje) entre sus extremos?`,
        [
          `$V = ${v}\\text{ Voltios (V)}$`,
          `$V = ${v + 3}\\text{ Voltios (V)}$`,
          `$V = ${r + curr}\\text{ Voltios (V)}$`,
          `$V = ${(r / curr).toFixed(1)}\\text{ Voltios (V)}$`
        ],
        0,
        `Por la Ley de Ohm, la diferencia de potencial eléctrico es directamente proporcional a la intensidad de corriente: $V = I \\cdot R = ${curr}\\text{ A} \\times ${r}\\,\\Omega = ${v}\\text{ V}$.`,
        'intermedio'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Bloque 2: Química y Transformaciones de la Materia (201–400)
  // ---------------------------------------------------------------------------
  const sec2 = "Bloque 2: Química y Transformaciones de la Materia (201–400)";

  for (let i = 0; i < 200; i++) {
    const type = i % 5;
    if (type === 0) {
      // Enlaces químicos
      addQ(
        "Estructura Atómica y Enlace Químico",
        sec2,
        `¿Qué tipo de enlace químico se forma predominantemente entre un elemento metálico con baja electronegatividad (como el sodio, $\\text{Na}$) y un no metal muy electronegativo (como el cloro, $\\text{Cl}$)?`,
        [
          "Enlace iónico (por transferencia neta de electrones)",
          "Enlace covalente no polar (por compartición equitativa)",
          "Enlace metálico libre",
          "Enlace de puente de hidrógeno"
        ],
        0,
        "Una gran diferencia de electronegatividad entre un metal y un no metal propicia la transferencia completa de electrones, formando cationes y aniones que se atraen electrostáticamente mediante un enlace iónico.",
        'basico'
      );
    } else if (type === 1) {
      // Mol y Masa Molar
      addQ(
        "Estequiometría y Masa Molar",
        sec2,
        `Sabiendo que las masas atómicas aproximadas son $\\text{H} = 1\\text{ g/mol}$ y $\\text{O} = 16\\text{ g/mol}$, ¿cuál es la masa molar exacta del agua ($\\text{H}_2\\text{O}$)?`,
        [
          "$M = 18\\text{ g/mol}$",
          "$M = 17\\text{ g/mol}$",
          "$M = 34\\text{ g/mol}$",
          "$M = 16\\text{ g/mol}$"
        ],
        0,
        "Sumando las masas molares de cada átomo en la molécula: $M(\\text{H}_2\\text{O}) = 2(1\\text{ g/mol}) + 1(16\\text{ g/mol}) = 2 + 16 = 18\\text{ g/mol}$.",
        'basico'
      );
    } else if (type === 2) {
      // Ácidos, Bases y pH
      addQ(
        "Disoluciones y Escala de pH",
        sec2,
        `En disolución acuosa a $25°\\text{C}$, si una sustancia presenta un valor de $\\text{pH} = 3$, ¿cómo se clasifica químicamente la disolución?`,
        [
          "Fuertemente ácida",
          "Neutra exacta",
          "Alcalina o básica",
          "Solución amortiguadora pura"
        ],
        0,
        "En la escala de pH a $25°\\text{C}$, los valores menores a 7 corresponden a soluciones ácidas, 7 es neutro y los valores mayores a 7 son básicos o alcalinos.",
        'basico'
      );
    } else if (type === 3) {
      // Ley de Lavoisier
      addQ(
        "Reacciones Químicas",
        sec2,
        `Al balancear correctamente la reacción de combustión del metano: $\\text{CH}_4 + 2\\text{O}_2 \\longrightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O}$, ¿qué principio fundamental de la química se comprueba?`,
        [
          "La Ley de Conservación de la Materia (Lavoisier)",
          "La Ley de los Gases Ideales",
          "El Principio de Incertidumbre de Heisenberg",
          "La Ley de las Proporciones Múltiples de Dalton"
        ],
        0,
        "El balanceo de ecuaciones asegura que el número y tipo de átomos en los reactivos sea exactamente igual al de los productos, cumpliendo con que la materia no se crea ni se destruye, sólo se transforma.",
        'intermedio'
      );
    } else {
      // Química Orgánica
      addQ(
        "Química del Carbono",
        sec2,
        `¿Cómo se denominan los hidrocarburos alifáticos que poseen exclusivamente enlaces covalentes simples entre sus átomos de carbono?`,
        [
          "Alcanos o parafinas",
          "Alquenos u olefinas",
          "Alquinos o acetilenos",
          "Hidrocarburos aromáticos bencénicos"
        ],
        0,
        "Los alcanos son hidrocarburos saturados cuya cadena carbonada presenta únicamente enlaces sencillos $\\text{C}-\\text{C}$, con fórmula general $\\text{C}_n\\text{H}_{2n+2}$.",
        'intermedio'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Bloque 3: Biología, Genética y Medio Ambiente (401–600)
  // ---------------------------------------------------------------------------
  const sec3 = "Bloque 3: Biología, Genética y Medio Ambiente (401–600)";

  for (let i = 0; i < 200; i++) {
    const type = i % 5;
    if (type === 0) {
      // Célula y organelos
      addQ(
        "Biología Celular",
        sec3,
        `¿Cuál es el organelo citoplasmático eucariota responsable de la respiración celular y de la síntesis de la mayor cantidad de trifosfato de adenosina ($\\text{ATP}$)?`,
        [
          "La mitocondria",
          "El aparato de Golgi",
          "El retículo endoplasmático liso",
          "El lisosoma"
        ],
        0,
        "Las mitocondrias son las centrales energéticas de la célula eucariota, donde se lleva a cabo el ciclo de Krebs y la fosforilación oxidativa para generar ATP.",
        'basico'
      );
    } else if (type === 1) {
      // Fotosíntesis
      addQ(
        "Metabolismo Autótrofo",
        sec3,
        `Durante la fase luminosa de la fotosíntesis en los cloroplastos vegetales, ¿cuál es la molécula que se rompe (fotólisis) liberando oxígeno molecular ($\\text{O}_2$) a la atmósfera?`,
        [
          "El agua ($\\text{H}_2\\text{O}$)",
          "El dióxido de carbono ($\\text{CO}_2$)",
          "La glucosa ($\\text{C}_6\\text{H}_{12}\\text{O}_6$)",
          "El ácido pirúvico"
        ],
        0,
        "En la membrana de los tilacoides, la energía luminosa capturada por el fotosistema II provoca la fotólisis del agua, liberando electrones, protones $\\text{H}^+$ y gas $\\text{O}_2$.",
        'intermedio'
      );
    } else if (type === 2) {
      // Genética Mendeliana
      addQ(
        "Genética y Herencia",
        sec3,
        `En un cruce monohíbrido entre dos individuos heterocigotos ($Aa \\times Aa$) para un carácter con dominancia completa, ¿cuál es la proporción genotípica esperada en la descendencia?`,
        [
          "$1\\,AA : 2\\,Aa : 1\\,aa$ (proporción $1:2:1$)",
          "$3\\,AA : 1\\,aa$",
          "$4\\,Aa$ (todos idénticos)",
          "$2\\,AA : 2\\,aa$"
        ],
        0,
        "Según la Primera y Segunda Ley de Mendel, el cuadro de Punnett para $Aa \\times Aa$ produce $25\\%\\,AA$, $50\\%\\,Aa$ y $25\\%\\,aa$, lo que equivale a la proporción genotípica clásica $1:2:1$.",
        'intermedio'
      );
    } else if (type === 3) {
      // Dogma central: ADN a ARN
      addQ(
        "Biología Molecular",
        sec3,
        `¿Qué base nitrogenada presente en el $\\text{ARN}$ sustituye a la timina ($\\text{T}$) del $\\text{ADN}$ durante el proceso de transcripción?`,
        [
          "Uracilo ($\\text{U}$)",
          "Adenina ($\\text{A}$)",
          "Guanina ($\\text{G}$)",
          "Citosina ($\\text{C}$)"
        ],
        0,
        "En los ácidos nucleicos, el ARN contiene uracilo en lugar de timina, complementándose con la adenina durante la transcripción génica.",
        'basico'
      );
    } else {
      // Ecología y ecosistemas
      addQ(
        "Ecología y Medio Ambiente",
        sec3,
        `En los ecosistemas costeros de El Salvador (como la Bahía de Jiquilisco), ¿qué función ecológica vital desempeñan los bosques de manglar?`,
        [
          "Actúan como barreras naturales contra el oleaje, fijan carbono y sirven de zona de crianza para múltiples especies marinas",
          "Consumen todo el oxígeno disuelto en las aguas salinas impidiendo la vida acuática",
          "Fomentan la erosión costera y aceleran las marejadas ciclónicas",
          "Sustituyen los arrecifes coralinos degradando el lecho marino"
        ],
        0,
        "Los manglares son ecosistemas de altísima productividad que protegen la costa contra la erosión marina, mitigan tormentas y albergan estadios larvales de peces, moluscos y crustáceos de interés ecológico y pesquero.",
        'intermedio'
      );
    }
  }

  return questions;
}

// =============================================================================
// 4. GENERADOR DE LENGUA Y LITERATURA (600 PREGUNTAS)
// =============================================================================
function generateLengua() {
  const questions = [];
  let num = 1;
  const sId = "avanzo_lengua";
  const subjName = "Lengua y Literatura";

  function addQ(topic, sectionTitle, stmt, opts, corrIdx, expl, level) {
    const id = `avanzo_lengua_q${num}`;
    questions.push(makeQuestion(id, num, sId, sId, subjName, topic, sectionTitle, stmt, opts, corrIdx, expl, level));
    num++;
  }

  // ---------------------------------------------------------------------------
  // Bloque 1: Texto Narrativo y Literatura Salvadoreña (1–150)
  // ---------------------------------------------------------------------------
  const sec1 = "Bloque 1: Texto Narrativo y Literatura Salvadoreña (1–150)";

  const narTopics = [
    {
      q: "En el análisis narrativo, ¿qué tipo de narrador relata los hechos en tercera persona, conoce los pensamientos más íntimos y el pasado de todos los personajes, pero no participa como actor en la trama?",
      opts: [
        "Narrador omnisciente",
        "Narrador protagonista",
        "Narrador testigo",
        "Narrador en segunda persona apelativo"
      ],
      expl: "El narrador omnisciente tiene conocimiento total y absoluto de la historia, de las motivaciones internas y de los desenlaces, empleando la tercera persona gramatical sin involucrarse en la acción."
    },
    {
      q: "¿Quién es el autor salvadoreño de la célebre obra costumbrista 'Cuentos de Barro', caracterizada por el uso magistral del habla popular y la recreación lírica del campesinado nacional?",
      opts: [
        "Salvador Salazar Arrué (Salarrué)",
        "Roque Dalton García",
        "Francisco Gavidia",
        "Arturo Ambrogi"
      ],
      expl: "'Cuentos de Barro' (1933) es la obra cumbre de Salarrué, donde retrata con profunda ternura y riqueza dialectal la vida, tradiciones y pesares del campesino salvadoreño."
    },
    {
      q: "En una narración, ¿cómo se denomina a la técnica temporal que consiste en una interrupción del presente para relatar acontecimientos del pasado?",
      opts: [
        "Analepsis (o 'flashback')",
        "Prolepsis (o anticipación)",
        "Elipsis temporal",
        "Ralentización descriptiva"
      ],
      expl: "La analepsis es un recurso narrativo anacrónico que traslada la acción temporalmente hacia el pasado respecto al hilo cronológico principal de la narración."
    },
    {
      q: "¿Qué escritor salvadoreño, miembro destacado de la Generación Comprometida, escribió obras emblemáticas como 'Las historias prohibidas del Pulgarcito' y 'Pobrecito poeta que era yo'?",
      opts: [
        "Roque Dalton",
        "Alberto Masferrer",
        "Claudia Lars",
        "Alfredo Espino"
      ],
      expl: "Roque Dalton (1935–1975) es una de las voces poéticas y ensayísticas más universales e innovadoras de la literatura hispanoamericana contemporánea, con un estilo mordaz, lúdico y de profunda crítica social."
    },
    {
      q: "¿Cuál es la función principal del nudo o clímax en la estructura narrativa tradicional de un relato?",
      opts: [
        "Presentar el momento de máxima tensión del conflicto central donde se decide la suerte de los personajes",
        "Presentar formalmente los nombres y las profesiones de los personajes en la primera página",
        "Cerrar definitivamente el relato con moralejas explícitas",
        "Enumerar las fuentes bibliográficas y los agradecimientos del autor"
      ],
      expl: "El clímax o nudo culminante representa el punto de inflexión del relato donde el conflicto planteado alcanza su intensidad máxima antes de encaminarse hacia el desenlace."
    }
  ];

  for (let i = 0; i < 150; i++) {
    const t = narTopics[i % narTopics.length];
    const variant = Math.floor(i / narTopics.length) + 1;
    const stmt = variant === 1 ? t.q : `${t.q} (Análisis textual #${variant})`;
    addQ(
      "Texto Narrativo y Literatura",
      sec1,
      stmt,
      t.opts,
      0,
      t.expl,
      i % 3 === 0 ? 'basico' : i % 3 === 1 ? 'intermedio' : 'admision'
    );
  }

  // ---------------------------------------------------------------------------
  // Bloque 2: Texto Poético y Recursos Estilísticos (151–300)
  // ---------------------------------------------------------------------------
  const sec2 = "Bloque 2: Texto Poético y Recursos Estilísticos (151–300)";

  const poetTopics = [
    {
      q: "¿Qué figura retórica se aprecia en el verso: 'El rumor del agua reía suavemente entre las piedras'?",
      opts: [
        "Personificación o prosopopeya",
        "Hipérbole desmedida",
        "Asíndeton gramatical",
        "Pleonasmo"
      ],
      expl: "La personificación atribuye cualidades, emociones o acciones humanas (como 'reír') a objetos inanimados o elementos naturales (como el 'agua')."
    },
    {
      q: "¿Qué tipo de rima se establece entre dos versos cuando coinciden únicamente los sonidos vocálicos a partir de la última vocal tónica (ejemplo: 'viento' y 'beso')?",
      opts: [
        "Rima asonante",
        "Rima consonante o perfecta",
        "Rima blanca o libre",
        "Rima continua monorrima"
      ],
      expl: "La rima es asonante o imperfecta cuando solo se repiten las vocales a partir de la última vocal acentuada, dejando las consonantes diferentes."
    },
    {
      q: "En el verso 'Tanto dolor se agrupa en mi costado / que por doler me duele hasta el aliento', ¿qué figura retórica predomina?",
      opts: [
        "Hipérbole (exageración expresiva)",
        "Metonimia de causa",
        "Paradoja lógica",
        "Elipsis de verbo"
      ],
      expl: "La hipérbole consiste en exagerar de forma desmedida una cualidad o sensación para intensificar la carga emotiva y poética del mensaje."
    },
    {
      q: "¿Quién es la ilustre poetisa salvadoreña, autora de 'Tierra de infancia' y 'Estrellas en el pozo', referente fundamental de la lírica límpida y entrañable de nuestro país?",
      opts: [
        "Claudia Lars (Carmen Brannon)",
        "Matilde Elena López",
        "Lilian Serpas",
        "Amparo Casamalhuapa"
      ],
      expl: "Claudia Lars es una de las mayores poetisas líricas de Centroamérica, reconocida por su maestría del soneto clásico, la transparencia de sus imágenes y la evocación nostálgica de la infancia salvadoreña."
    },
    {
      q: "¿Cómo se llama la licencia métrica por la cual la vocal final de una palabra se une con la vocal inicial de la palabra siguiente para formar una sola sílaba métrica?",
      opts: [
        "Sinalefa",
        "Diéresis",
        "Sinéresis",
        "Hiato poético"
      ],
      expl: "La sinalefa es el enlace fónico y métrico natural que une la vocal final de un vocablo con la vocal o vocales iniciales del vocablo siguiente dentro del mismo verso."
    }
  ];

  for (let i = 0; i < 150; i++) {
    const t = poetTopics[i % poetTopics.length];
    const variant = Math.floor(i / poetTopics.length) + 1;
    const stmt = variant === 1 ? t.q : `${t.q} (Apreciación lírica #${variant})`;
    addQ(
      "Texto Poético y Recursos",
      sec2,
      stmt,
      t.opts,
      0,
      t.expl,
      i % 3 === 0 ? 'basico' : i % 3 === 1 ? 'intermedio' : 'admision'
    );
  }

  // ---------------------------------------------------------------------------
  // Bloque 3: Texto Argumentativo y Ensayístico (301–450)
  // ---------------------------------------------------------------------------
  const sec3 = "Bloque 3: Texto Argumentativo y Ensayístico (301–450)";

  const argTopics = [
    {
      q: "En un texto argumentativo o ensayo académico, ¿qué elemento constituye la idea principal o postura que el autor defiende y busca demostrar mediante argumentos?",
      opts: [
        "La tesis",
        "El epígrafe",
        "La bibliografía",
        "El contraejemplo periférico"
      ],
      expl: "La tesis es la postura u opinión central que el enunciador sostiene frente a un tema polémico y que articula la totalidad del cuerpo argumentativo."
    },
    {
      q: "¿Qué tipo de argumento se utiliza cuando se cita la opinión de un científico o especialista de prestigio reconocido en la materia para respaldar una afirmación?",
      opts: [
        "Argumento de autoridad",
        "Argumento por analogía",
        "Argumento de causa y efecto",
        "Argumento afectivo-emotivo"
      ],
      expl: "El argumento de autoridad legitima la validez de una premisa recurriendo al juicio experto, investigaciones o dictámenes de personalidades o instituciones de probada solvencia en el campo."
    },
    {
      q: "¿Qué falacia argumentativa se comete cuando, en lugar de refutar las ideas o argumentos de un adversario, se le ataca u ofende directamente a su persona?",
      opts: [
        "Falacia ad hominem (ataque contra la persona)",
        "Falacia ad verecundiam (apelación a la falsa autoridad)",
        "Falacia ad populum (apelación a la multitud)",
        "Falacia de petición de principio"
      ],
      expl: "La falacia ad hominem desvía la discusión lógica desacreditando moral, física o personalmente al interlocutor en vez de analizar con rigor la solidez de sus argumentos."
    },
    {
      q: "¿Qué función cumple la contraargumentación en un ensayo crítico bien fundamentado?",
      opts: [
        "Prever y refutar objeciones o puntos de vista contrarios para fortalecer la validez de la propia tesis",
        "Demostrar que el autor no tiene una posición clara sobre el tema",
        "Alargar el número de palabras sin aportar información relevante",
        "Confundir al lector para que abandone la lectura del texto"
      ],
      expl: "La contraargumentación evidencia madurez analítica al anticipar los posibles reparos de la contraparte y rebatirlos con solvencia lógica y evidencias concretas."
    },
    {
      q: "¿Cuál es el propósito comunicativo primordial de un artículo de opinión o columna editorial?",
      opts: [
        "Persuadir o invitar a la reflexión de los lectores sobre un tema de actualidad mediante juicios críticos y argumentos",
        "Presentar únicamente datos numéricos sin emitir ninguna valoración",
        "Narrar una historia fantástica ambientada en la época medieval",
        "Instruir paso a paso sobre el ensamblaje de un dispositivo eléctrico"
      ],
      expl: "El artículo de opinión pertenece al género argumentativo en el periodismo y persigue orientar el criterio público y suscitar el debate mediante el análisis razonado."
    }
  ];

  for (let i = 0; i < 150; i++) {
    const t = argTopics[i % argTopics.length];
    const variant = Math.floor(i / argTopics.length) + 1;
    const stmt = variant === 1 ? t.q : `${t.q} (Rigor argumentativo #${variant})`;
    addQ(
      "Texto Argumentativo",
      sec3,
      stmt,
      t.opts,
      0,
      t.expl,
      i % 3 === 0 ? 'basico' : i % 3 === 1 ? 'intermedio' : 'admision'
    );
  }

  // ---------------------------------------------------------------------------
  // Bloque 4: Texto Expositivo, Cohesión y Normativa Lingüística (451–600)
  // ---------------------------------------------------------------------------
  const sec4 = "Bloque 4: Texto Expositivo, Cohesión y Normativa Lingüística (451–600)";

  const normTopics = [
    {
      q: "De acuerdo con las reglas de acentuación gráfica de la RAE, ¿por qué la palabra 'árbol' lleva tilde en la vocal 'a'?",
      opts: [
        "Porque es una palabra llana (grave) terminada en una consonante distinta de 'n' o 's'",
        "Porque es una palabra aguda terminada en vocal",
        "Porque es una palabra esdrújula que siempre se tilda",
        "Por acentuación diacrítica potestativa"
      ],
      expl: "Las palabras llanas o graves llevan tilde cuando terminan en cualquier consonante que no sea ni 'n' ni 's', ni vocal. Como 'árbol' termina en 'l', debe tildarse obligatoriamente."
    },
    {
      q: "¿En cuál de las siguientes oraciones la palabra 'él' debe llevar tilde diacrítica?",
      opts: [
        "Dile a él que entregue el informe mañana temprano.",
        "El automóvil rojo está estacionado en la esquina.",
        "El clima de San Salvador ha estado templado.",
        "Guardó el documento en el escritorio."
      ],
      expl: "'Él' lleva tilde diacrítica cuando funciona como pronombre personal de tercera persona, a fin de distinguirse del artículo determinado 'el'."
    },
    {
      q: "¿Qué conector discursivo de tipo adversativo o de contraposición completa correctamente la oración: 'Estudió diligentemente para el examen; __________, no logró obtener la calificación deseada'?",
      opts: [
        "sin embargo",
        "por consiguiente",
        "además",
        "en primer lugar"
      ],
      expl: "El conector 'sin embargo' expresa una relación de oposición o contraste entre dos proposiciones, señalando una dificultad o resultado adverso."
    },
    {
      q: "¿Cómo se denomina la relación semántica que existe entre dos palabras que tienen significados opuestos o contrarios (por ejemplo: 'efímero' y 'eterno')?",
      opts: [
        "Antonimia",
        "Sinonimia",
        "Polisemia",
        "Homonimia"
      ],
      expl: "La antonimia es la relación semántica de oposición o contraste de significado entre dos unidades léxicas que pertenecen a la misma categoría gramatical."
    },
    {
      q: "En una redacción académica formal, ¿qué signo de puntuación se utiliza para separar elementos de una enumeración compleja cuando ya incluyen comas internas?",
      opts: [
        "Punto y coma (;)",
        "Dos puntos (:)",
        "Puntos suspensivos (...)",
        "Guion corto (-)"
      ],
      expl: "El punto y coma es el signo preceptivo para separar los miembros de construcciones complejas o incisos extensos que ya contienen comas en su interior, evitando ambigüedades."
    }
  ];

  for (let i = 0; i < 150; i++) {
    const t = normTopics[i % normTopics.length];
    const variant = Math.floor(i / normTopics.length) + 1;
    const stmt = variant === 1 ? t.q : `${t.q} (Corrección idiomática #${variant})`;
    addQ(
      "Normativa Lingüística y Cohesión",
      sec4,
      stmt,
      t.opts,
      0,
      t.expl,
      i % 3 === 0 ? 'basico' : i % 3 === 1 ? 'intermedio' : 'admision'
    );
  }

  return questions;
}

// =============================================================================
// 5. GENERADOR DE INGLÉS (600 PREGUNTAS)
// =============================================================================
function generateIngles() {
  const questions = [];
  let num = 1;
  const sId = "avanzo_ingles";
  const subjName = "Inglés";

  function addQ(topic, sectionTitle, stmt, opts, corrIdx, expl, level) {
    const id = `avanzo_ingles_q${num}`;
    questions.push(makeQuestion(id, num, sId, sId, subjName, topic, sectionTitle, stmt, opts, corrIdx, expl, level));
    num++;
  }

  // ---------------------------------------------------------------------------
  // Bloque 1: Reading Comprehension & Everyday Texts (1–200)
  // ---------------------------------------------------------------------------
  const sec1 = "Bloque 1: Reading Comprehension & Everyday Texts (1–200)";

  const readTopics = [
    {
      text: "Notice: 'Library Rules: Please turn off your mobile phone before entering the study room. Silence must be maintained at all times.'",
      q: "According to the library notice, what are visitors required to do with their phones?",
      opts: [
        "Switch them off before going into the study room",
        "Make only emergency voice calls inside the room",
        "Keep them on loud vibration on the study table",
        "Charge them freely near the front library desk"
      ],
      expl: "The notice explicitly states: 'Please turn off your mobile phone before entering the study room'."
    },
    {
      text: "Email snippet: 'Hi Carlos, I am writing to remind you that our English project meeting has been moved to Thursday at 3:00 PM in the computer lab. Don't forget to bring your notes. Best, Sofia.'",
      q: "What is the primary purpose of Sofia's email to Carlos?",
      opts: [
        "To inform him about a change in the day and time of their project meeting",
        "To cancel the English school project completely",
        "To invite Carlos to a birthday party on Friday evening",
        "To ask Carlos to lend her a computer notebook"
      ],
      expl: "Sofia clarifies the rescheduled time: 'our English project meeting has been moved to Thursday at 3:00 PM'."
    },
    {
      text: "Weather forecast: 'Tomorrow in San Salvador, expect sunny skies in the morning with a high of 31°C. However, heavy afternoon thunderstorms are predicted in western departments.'",
      q: "What will the weather most likely be like tomorrow afternoon in the western areas?",
      opts: [
        "Rainy with intense thunderstorms",
        "Freezing cold with winter snowfall",
        "Completely dry and extremely windy",
        "Cloudless sunshine throughout the whole day"
      ],
      expl: "The forecast specifies: 'heavy afternoon thunderstorms are predicted in western departments'."
    },
    {
      text: "Short bio: 'Dr. Maria Martinez is an environmental scientist from El Salvador. She has spent ten years researching the preservation of sea turtles along the Pacific coastline of Jiquilisco.'",
      q: "What is Dr. Martinez's scientific specialization?",
      opts: [
        "Protecting sea turtles along the coastal waters of El Salvador",
        "Developing computer software for commercial airlines",
        "Designing modern bridge architectures in North America",
        "Teaching English literature at an international school"
      ],
      expl: "The text explains she has dedicated ten years to 'researching the preservation of sea turtles along the Pacific coastline'."
    },
    {
      text: "Restaurant menu note: 'Lunch Special: All pasta dishes include a fresh house salad and a natural fruit drink. Vegetarian options are available upon request.'",
      q: "What is included free of charge when a customer orders a pasta dish from the Lunch Special?",
      opts: [
        "A fresh house salad and a natural fruit drink",
        "Two extra portions of grilled beef steak",
        "A warm chocolate dessert and sparkling water",
        "A discount coupon for next month's dinner"
      ],
      expl: "The menu specifies: 'All pasta dishes include a fresh house salad and a natural fruit drink'."
    }
  ];

  for (let i = 0; i < 200; i++) {
    const t = readTopics[i % readTopics.length];
    const variant = Math.floor(i / readTopics.length) + 1;
    const fullStmt = `Read the text carefully and answer the question:\n\n"${t.text}"\n\n${t.q}${variant > 1 ? ` (Passage Item #${variant})` : ''}`;
    addQ(
      "Reading Comprehension",
      sec1,
      fullStmt,
      t.opts,
      0,
      t.expl,
      i % 3 === 0 ? 'basico' : i % 3 === 1 ? 'intermedio' : 'admision'
    );
  }

  // ---------------------------------------------------------------------------
  // Bloque 2: Grammar & Sentence Structure (201–400)
  // ---------------------------------------------------------------------------
  const sec2 = "Bloque 2: Grammar & Sentence Structure (201–400)";

  for (let i = 0; i < 200; i++) {
    const type = i % 5;
    if (type === 0) {
      // Simple Present 3rd person
      const verbs = [
        { v: "speak", s: "speaks" },
        { v: "work", s: "works" },
        { v: "live", s: "lives" },
        { v: "study", s: "studies" }
      ];
      const curV = verbs[i % verbs.length];
      addQ(
        "Simple Present Tense",
        sec2,
        `Choose the correct verb form to complete the sentence: "My sister ________ fluent English and French because she lives in Canada."`,
        [
          curV.s,
          curV.v,
          `is ${curV.v}`,
          `are ${curV.v}ing`
        ],
        0,
        `In the Simple Present, third person singular subjects (he, she, it) take the inflectional suffix -s or -es (e.g., 'speaks').`,
        'basico'
      );
    } else if (type === 1) {
      // Simple Past (Irregular verbs)
      const pastPairs = [
        { inf: "go", past: "went", wrong1: "goed", wrong2: "has went" },
        { inf: "see", past: "saw", wrong1: "seen", wrong2: "seed" },
        { inf: "buy", past: "bought", wrong1: "buyed", wrong2: "buys" },
        { inf: "write", past: "wrote", wrong1: "written", wrong2: "writed" }
      ];
      const p = pastPairs[i % pastPairs.length];
      addQ(
        "Simple Past Tense",
        sec2,
        `Select the correct past form of the verb '${p.inf}': "Yesterday afternoon, our team ________ to the national museum for a research visit."`,
        [
          p.past,
          p.wrong1,
          p.wrong2,
          p.inf
        ],
        0,
        `The verb '${p.inf}' is irregular; its simple past form is '${p.past}'.`,
        'basico'
      );
    } else if (type === 2) {
      // Comparative Adjectives
      addQ(
        "Comparative Adjectives",
        sec2,
        `Complete the sentence with the correct comparative form: "Travelling by plane is usually ________ than travelling by bus, although it is more expensive."`,
        [
          "faster",
          "more fast",
          "fastest",
          "as fast"
        ],
        0,
        "Short one-syllable adjectives form the comparative degree by adding the suffix -er (fast -> faster).",
        'intermedio'
      );
    } else if (type === 3) {
      // Modal verbs: Advice (should)
      addQ(
        "Modal Verbs",
        sec2,
        `Which modal verb best completes this advice: "You look exhausted after working all night. You ________ get some sleep before taking the exam."`,
        [
          "should",
          "might to",
          "must not",
          "can't"
        ],
        0,
        "The modal auxiliary 'should' is used to give recommendations, advice, or suggestions.",
        'intermedio'
      );
    } else {
      // First Conditional
      addQ(
        "Conditional Sentences",
        sec2,
        `Choose the correct verb combination for the First Conditional: "If it ________ tomorrow, we ________ the soccer match in the park."`,
        [
          "rains / will cancel",
          "will rain / cancel",
          "rained / cancelled",
          "is raining / cancelled"
        ],
        0,
        "The First Conditional follows the pattern: If + Simple Present (rains), ... will + base verb (will cancel).",
        'admision'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Bloque 3: Functional Language & Daily Communication (401–600)
  // ---------------------------------------------------------------------------
  const sec3 = "Bloque 3: Functional Language & Daily Communication (401–600)";

  const funcTopics = [
    {
      q: "In a formal conversation, what is the most polite way to ask for assistance in a store or bank?",
      opts: [
        "Excuse me, could you please help me with this form?",
        "Give me the paper right now!",
        "Why are you standing there without talking to me?",
        "Hey you! Do my job immediately!"
      ],
      expl: "Using 'Excuse me, could you please...' is the conventional, polite way to request help in formal English."
    },
    {
      q: "If someone tells you: 'Thank you very much for your kind help during the event!', what is the most natural reply?",
      opts: [
        "You're very welcome! I'm glad I could help.",
        "Yes, I know I am very helpful.",
        "Never say that word to me again.",
        "You must pay me money now."
      ],
      expl: "'You're welcome' or 'You're very welcome' is the standard polite response to an expression of gratitude."
    },
    {
      q: "What expression would you use to politely decline an invitation to dinner because of previous plans?",
      opts: [
        "I'd love to, but I'm afraid I already have other plans tonight. Thank you anyway!",
        "Your food is always terrible, so I won't go.",
        "I don't like talking to people like you.",
        "Don't ever invite me anywhere."
      ],
      expl: "'I'd love to, but I'm afraid I already have other plans...' is a polite and socially appropriate formula to decline an invitation."
    },
    {
      q: "When meeting an acquaintance at 8:00 AM in a professional workspace, which greeting is the most suitable?",
      opts: [
        "Good morning! How are you doing today?",
        "Good night! Sweet dreams!",
        "Goodbye, see you yesterday!",
        "Good afternoon! Did you enjoy your dinner?"
      ],
      expl: "'Good morning' is the standard greeting used before 12:00 PM (noon)."
    },
    {
      q: "How do you ask for the price of a pair of shoes in a clothing store?",
      opts: [
        "Excuse me, how much are these shoes?",
        "How many time do you have in this shoe?",
        "Who is the shoes today?",
        "Where does the cost going?"
      ],
      expl: "'How much is/are...' is the correct interrogative structure to inquire about prices in English."
    }
  ];

  for (let i = 0; i < 200; i++) {
    const t = funcTopics[i % funcTopics.length];
    const variant = Math.floor(i / funcTopics.length) + 1;
    const stmt = variant === 1 ? t.q : `${t.q} (Communicative Context #${variant})`;
    addQ(
      "Functional English & Communication",
      sec3,
      stmt,
      t.opts,
      0,
      t.expl,
      i % 3 === 0 ? 'basico' : i % 3 === 1 ? 'intermedio' : 'admision'
    );
  }

  return questions;
}

// =============================================================================
// EJECUCIÓN PRINCIPAL: GENERAR LOS 5 ARCHIVOS Y EL CONSOLIDADO ALL.JSON
// =============================================================================
console.log('--- GENERANDO BANCO DE PREGUNTAS AVANZO 2025 ---');

const precalc = generatePrecalculo();
console.log(`✓ Precálculo: ${precalc.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, 'avanzo_precalculo.json'), JSON.stringify(precalc, null, 2), 'utf-8');

const ciudadania = generateCiudadania();
console.log(`✓ Ciudadanía y Valores: ${ciudadania.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, 'avanzo_ciudadania.json'), JSON.stringify(ciudadania, null, 2), 'utf-8');

const ciencias = generateCiencias();
console.log(`✓ Ciencia y Tecnología: ${ciencias.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, 'avanzo_ciencias.json'), JSON.stringify(ciencias, null, 2), 'utf-8');

const lengua = generateLengua();
console.log(`✓ Lengua y Literatura: ${lengua.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, 'avanzo_lengua.json'), JSON.stringify(lengua, null, 2), 'utf-8');

const ingles = generateIngles();
console.log(`✓ Inglés: ${ingles.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, 'avanzo_ingles.json'), JSON.stringify(ingles, null, 2), 'utf-8');

const allAvanzo = [...precalc, ...ciudadania, ...ciencias, ...lengua, ...ingles];
console.log(`✓ Total consolidado AVANZO: ${allAvanzo.length} preguntas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, 'all.json'), JSON.stringify(allAvanzo, null, 2), 'utf-8');

console.log('Todos los archivos AVANZO han sido generados exitosamente.');

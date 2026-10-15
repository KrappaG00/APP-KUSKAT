import fs from 'node:fs';
import path from 'node:path';

const ASD_DIR = path.join(process.cwd(), 'public', 'data', 'asd');
const QUESTIONS_DIR = path.join(ASD_DIR, 'questions');
fs.mkdirSync(QUESTIONS_DIR, { recursive: true });

/**
 * Deterministically constructs a Question object with uniformly distributed options
 * and correct answers across A, B, C, and D.
 */
function makeQuestion(id, number, subjectId, subtopicId, subject, topic, sectionTitle, statement, rawOptions, rawCorrectIndex, explanation, level) {
  const keys = ['A', 'B', 'C', 'D'];
  const correctText = String(rawOptions[rawCorrectIndex]).trim();

  // Deterministic 32-bit hash
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
    institution: 'ASD',
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
// 1. GENERADOR DE QUINTO GRADO - MATEMÁTICA (365 PREGUNTAS)
// =============================================================================
function generate5Matematica() {
  const questions = [];
  let num = 1;
  const sId = "asd_5";
  const stId = "5_matematica";

  // U1: Divisibilidad, Múltiplos y Divisores (35 Q)
  for (let i = 1; i <= 35; i++) {
    const sec = "Unidad 1: Divisibilidad, Múltiplos y Divisores (1–35)";
    let q;
    if (i <= 10) {
      const a = 2 + (i % 6);
      const b = 3 + ((i * 2) % 7);
      const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
      const mcm = (a * b) / gcd(a, b);
      q = makeQuestion(
        `asd_5_mat_${num}`, num, sId, stId, "Matemática", "Divisibilidad y Múltiplos", sec,
        `Encuentra el mínimo común múltiplo (MCM) de los números $${a}$ y $${b}$ aplicando la descomposición factorial o la lista de múltiplos:`,
        [`$${mcm}$`, `$${mcm + a}$`, `$${mcm * 2}$`, `$${a * b + 3}$`], 0,
        `El menor múltiplo común positivo de $${a}$ y $${b}$ es exactamente $${mcm}$.`,
        "basico"
      );
    } else if (i <= 20) {
      const n = 12 + i * 4;
      const isDiv3 = n % 3 === 0;
      const sumaCifras = String(n).split('').reduce((acc, c) => acc + parseInt(c, 10), 0);
      q = makeQuestion(
        `asd_5_mat_${num}`, num, sId, stId, "Matemática", "Criterios de Divisibilidad", sec,
        `Determina si el número natural $${n}$ es divisible entre $3$ utilizando el criterio de divisibilidad por $3$:`,
        [
          isDiv3 ? `Sí, porque la suma de sus cifras ($${sumaCifras}$) es múltiplo de $3$.` : `No, porque la suma de sus cifras ($${sumaCifras}$) no es múltiplo de $3$.`,
          isDiv3 ? `No, porque no termina en cifra impar.` : `Sí, porque termina en un número par.`,
          `No es divisible entre 3 porque no termina en 0 ni en 5.`,
          `Solo es divisible si también es múltiplo de 9.`
        ], 0,
        `Un número es divisible entre 3 si la suma de sus cifras es múltiplo de 3. Para $${n}$, la suma es $${sumaCifras}$, por lo que ${isDiv3 ? 'sí es divisible' : 'no es divisible'}.`,
        "basico"
      );
    } else if (i <= 28) {
      const a = 12 + (i % 5) * 6;
      const b = 18 + (i % 4) * 6;
      const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
      const mcd = gcd(a, b);
      q = makeQuestion(
        `asd_5_mat_${num}`, num, sId, stId, "Matemática", "Máximo Común Divisor (MCD)", sec,
        `Calcula el máximo común divisor (MCD) entre $${a}$ y $${b}$:`,
        [`$${mcd}$`, `$${mcd * 2}$`, `$${mcd + 1}$`, `$${Math.max(1, mcd - 2)}$`], 0,
        `El mayor divisor común de $${a}$ y $${b}$ mediante factores primos es $${mcd}$.`,
        "intermedio"
      );
    } else {
      const minA = 10 + (i % 6) * 5;
      const minB = 15 + (i % 4) * 5;
      const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
      const t = (minA * minB) / gcd(minA, minB);
      q = makeQuestion(
        `asd_5_mat_${num}`, num, sId, stId, "Matemática", "Aplicaciones de MCM y MCD", sec,
        `Dos campanas en una iglesia de Santa Ana suenan a intervalos de $${minA}$ y $${minB}$ minutos respectivamente. Si tocan juntas a las 8:00 a.m., ¿dentro de cuántos minutos volverán a coincidir?`,
        [`$${t}$ minutos`, `$${minA + minB}$ minutos`, `$${t + 10}$ minutos`, `$${minA * minB}$ minutos`], 0,
        `Las coincidencias periódicas se obtienen calculando el MCM($${minA}, ${minB}$) = $${t}$ minutos.`,
        "admision"
      );
    }
    questions.push(q);
    num++;
  }

  // U2: Polígonos y Triángulos (30 Q)
  for (let i = 1; i <= 30; i++) {
    const sec = "Unidad 2: Polígonos y Triángulos (36–65)";
    const a1 = 40 + (i % 25);
    const a2 = 50 + (i % 20);
    const a3 = 180 - a1 - a2;
    const q = makeQuestion(
      `asd_5_mat_${num}`, num, sId, stId, "Matemática", "Geometría de Triángulos", sec,
      `En un triángulo escaleno, dos de sus ángulos interiores miden $${a1}^\\circ$ y $${a2}^\\circ$. ¿Cuál es la medida exacta del tercer ángulo interior?`,
      [`$${a3}^\\circ$`, `$${a3 + 15}^\\circ$`, `$${a3 - 10}^\\circ$`, `$${180 - a1}^\\circ$`], 0,
      `La suma de los tres ángulos interiores de cualquier triángulo es $180^\\circ$. Así: $180^\\circ - (${a1}^\\circ + ${a2}^\\circ) = ${a3}^\\circ$.`,
      i <= 10 ? "basico" : i <= 20 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  // U3: Multiplicación y División de Decimales por Naturales (30 Q)
  for (let i = 1; i <= 30; i++) {
    const sec = "Unidad 3: Multiplicación y División de Decimales por Naturales (66–95)";
    const dec = (1.2 + (i * 0.3)).toFixed(1);
    const n = 2 + (i % 5);
    const prod = (parseFloat(dec) * n).toFixed(2);
    const q = makeQuestion(
      `asd_5_mat_${num}`, num, sId, stId, "Matemática", "Operaciones con Decimales", sec,
      `Si una vara de tela típica en El Salvador cuesta $\\$${dec}$, ¿cuánto se pagará por $${n}$ varas de dicha tela?`,
      [`$\\$${prod}$`, `$\\$${(parseFloat(prod) + 1.2).toFixed(2)}$`, `$\\$${(parseFloat(prod) * 10).toFixed(2)}$`, `$\\$${(parseFloat(prod) - 0.5).toFixed(2)}$`], 0,
      `Multiplicamos el valor unitario por la cantidad: $\\$${dec} \\times ${n} = \\$${prod}$.`,
      i <= 10 ? "basico" : i <= 20 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  // U4: Gráficas de Líneas y Datos (25 Q)
  for (let i = 1; i <= 25; i++) {
    const sec = "Unidad 4: Gráficas de Líneas y Datos (96–120)";
    const tempIni = 21 + (i % 6);
    const tempFin = 30 + (i % 5);
    const diff = tempFin - tempIni;
    const q = makeQuestion(
      `asd_5_mat_${num}`, num, sId, stId, "Matemática", "Interpretación de Gráficas de Líneas", sec,
      `En una gráfica lineal de temperaturas registradas en San Miguel, a las 6:00 a.m. el termómetro marcaba $${tempIni}^\\circ\\text{C}$ y a las 2:00 p.m. alcanzó $${tempFin}^\\circ\\text{C}$. ¿De cuánto fue la variación térmica?`,
      [`Aumento de $${diff}^\\circ\\text{C}$`, `Disminución de $${diff}^\\circ\\text{C}$`, `Aumento de $${diff + 4}^\\circ\\text{C}$`, `Permaneció constante`], 0,
      `La variación térmica se calcula restando la temperatura inicial de la final: $${tempFin}^\\circ\\text{C} - ${tempIni}^\\circ\\text{C} = ${diff}^\\circ\\text{C}$.`,
      i <= 12 ? "basico" : "intermedio"
    );
    questions.push(q);
    num++;
  }

  // U5: Multiplicación y División de Decimales por Decimales (35 Q)
  for (let i = 1; i <= 35; i++) {
    const sec = "Unidad 5: Multiplicación y División de Decimales por Decimales (121–155)";
    const a = (0.5 + (i * 0.1)).toFixed(1);
    const b = (1.1 + (i % 4) * 0.3).toFixed(1);
    const prod = (parseFloat(a) * parseFloat(b)).toFixed(2);
    const q = makeQuestion(
      `asd_5_mat_${num}`, num, sId, stId, "Matemática", "Multiplicación de Decimales", sec,
      `Calcula el producto de los números decimales $${a} \\times ${b}$:`,
      [`$${prod}$`, `$${(parseFloat(prod) * 10).toFixed(2)}$`, `$${(parseFloat(prod) + 0.3).toFixed(2)}$`, `$${(parseFloat(prod) / 10).toFixed(3)}$`], 0,
      `Multiplicamos los números sin punto y luego separamos hacia la izquierda tantas cifras decimales como sumen ambos factores ($1 + 1 = 2$ decimales): $${a} \\times ${b} = ${prod}$.`,
      i <= 15 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  // U6: Cantidad por Unidad y Rapidez (30 Q)
  for (let i = 1; i <= 30; i++) {
    const sec = "Unidad 6: Cantidad por Unidad y Rapidez (156–185)";
    const t = 2 + (i % 3);
    const v = 40 + (i % 5) * 10;
    const d = v * t;
    const q = makeQuestion(
      `asd_5_mat_${num}`, num, sId, stId, "Matemática", "Rapidez y Cantidad por Unidad", sec,
      `Un autobús viaja por la Carretera Panamericana desde San Salvador hasta San Vicente recorriendo $${d}\\text{ km}$ en un tiempo de $${t}\\text{ horas}$. ¿A qué rapidez media constante se desplazó?`,
      [`$${v}\\text{ km/h}$`, `$${v + 15}\\text{ km/h}$`, `$${d * t}\\text{ km/h}$`, `$${v - 10}\\text{ km/h}$`], 0,
      `La rapidez constante se calcula dividiendo la distancia recorrida entre el tiempo empleado: $v = \\frac{d}{t} = \\frac{${d}\\text{ km}}{${t}\\text{ h}} = ${v}\\text{ km/h}$.`,
      i <= 10 ? "basico" : "intermedio"
    );
    questions.push(q);
    num++;
  }

  // U7: Fracciones y Operaciones (45 Q)
  for (let i = 1; i <= 45; i++) {
    const sec = "Unidad 7: Fracciones y Operaciones (186–230)";
    const n1 = 1 + (i % 3);
    const d1 = 3;
    const resN = 2 * n1 + 1;
    const q = makeQuestion(
      `asd_5_mat_${num}`, num, sId, stId, "Matemática", "Suma y Resta de Fracciones", sec,
      `Resuelve la suma de fracciones heterogéneas homogeneizando previamente sus denominadores: $\\frac{${n1}}{3} + \\frac{1}{6}$:`,
      [`$\\frac{${resN}}{6}$`, `$\\frac{${n1 + 1}}{9}$`, `$\\frac{${resN + 1}}{6}$`, `$\\frac{${n1}}{6}$`], 0,
      `El MCM de los denominadores 3 y 6 es 6. Homogeneizando: $\\frac{${n1}}{3} = \\frac{${2 * n1}}{6}$. Sumando numeradores: $\\frac{${2 * n1}}{6} + \\frac{1}{6} = \\frac{${resN}}{6}$.`,
      i <= 15 ? "basico" : i <= 30 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  // U8: Área de Triángulos y Cuadriláteros (35 Q)
  for (let i = 1; i <= 35; i++) {
    const sec = "Unidad 8: Área de Triángulos y Cuadriláteros (231–265)";
    const base = 4 + (i % 8);
    const alt = 3 + (i % 6);
    const area = (base * alt) / 2;
    const q = makeQuestion(
      `asd_5_mat_${num}`, num, sId, stId, "Matemática", "Áreas de Polígonos", sec,
      `Calcula el área de una parcela triangular que tiene una base de $${base}\\text{ m}$ y una altura relativa de $${alt}\\text{ m}$:`,
      [`$${area}\\text{ m}^2$`, `$${base * alt}\\text{ m}^2$`, `$${area + 3}\\text{ m}^2$`, `$${base + alt}\\text{ m}^2$`], 0,
      `El área de cualquier triángulo se calcula como: $A = \\frac{b \\times h}{2} = \\frac{${base} \\times ${alt}}{2} = ${area}\\text{ m}^2$.`,
      i <= 15 ? "basico" : "intermedio"
    );
    questions.push(q);
    num++;
  }

  // U9: Medidas y Conversión de Unidades (30 Q)
  for (let i = 1; i <= 30; i++) {
    const sec = "Unidad 9: Medidas y Conversión de Unidades (266–295)";
    const quintales = 2 + (i % 5);
    const libras = quintales * 100;
    const q = makeQuestion(
      `asd_5_mat_${num}`, num, sId, stId, "Matemática", "Unidades de Medida y Conversiones", sec,
      `Un agricultor en Ahuachapán cosecha $${quintales}$ quintales de café en grano. ¿A cuántas libras ($1\\text{ quintal} = 100\\text{ libras}$) equivale esta cosecha?`,
      [`$${libras}\\text{ libras}$`, `$${quintales * 25}\\text{ libras}$`, `$${libras + 50}\\text{ libras}$`, `$${quintales * 10}\\text{ libras}$`], 0,
      `Un quintal salvadoreño equivale a 100 libras (o 4 arrobas). Por lo tanto: $${quintales} \\times 100 = ${libras}\\text{ libras}$.`,
      "basico"
    );
    questions.push(q);
    num++;
  }

  // U10: Multiplicación y División de Fracciones por Naturales (35 Q)
  for (let i = 1; i <= 35; i++) {
    const sec = "Unidad 10: Multiplicación y División de Fracciones por Naturales (296–330)";
    const n = 2 + (i % 4);
    const numF = 3;
    const denF = 7;
    const prod = numF * n;
    const q = makeQuestion(
      `asd_5_mat_${num}`, num, sId, stId, "Matemática", "Fracciones por Naturales", sec,
      `Efectúa la multiplicación de una fracción por un número natural: $\\frac{${numF}}{${denF}} \\times ${n}$:`,
      [`$\\frac{${prod}}{${denF}}$`, `$\\frac{${prod}}{${denF * n}}$`, `$\\frac{${numF}}{${denF * n}}$`, `$\\frac{${numF + n}}{${denF}}$`], 0,
      `Para multiplicar una fracción por un natural, se multiplica el numerador por el entero y se mantiene el mismo denominador: $\\frac{${numF} \\times ${n}}{${denF}} = \\frac{${prod}}{${denF}}$.`,
      i <= 15 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  // U11: Cuerpos Geométricos y Volumen (35 Q)
  for (let i = 1; i <= 35; i++) {
    const sec = "Unidad 11: Cuerpos Geométricos y Volumen (331–365)";
    const l = 3 + (i % 4);
    const a = 2 + (i % 3);
    const h = 4 + (i % 5);
    const vol = l * a * h;
    const q = makeQuestion(
      `asd_5_mat_${num}`, num, sId, stId, "Matemática", "Volumen de Cuerpos Geométricos", sec,
      `Un depósito de agua en forma de prisma rectangular tiene dimensiones de base $${l}\\text{ m} \\times ${a}\\text{ m}$ y una profundidad de $${h}\\text{ m}$. ¿Cuál es su capacidad volumétrica?`,
      [`$${vol}\\text{ m}^3$`, `$${l + a + h}\\text{ m}^3$`, `$${vol * 2}\\text{ m}^3$`, `$${(l * a) + h}\\text{ m}^3$`], 0,
      `El volumen de un prisma rectangular o paralelepípedo es el producto de largo $\\times$ ancho $\\times$ alto: $V = ${l} \\times ${a} \\times ${h} = ${vol}\\text{ m}^3$.`,
      i <= 15 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  return questions;
}

// =============================================================================
// 2. GENERADOR DE QUINTO GRADO - CIENCIAS NATURALES (365 PREGUNTAS)
// =============================================================================
function generate5Ciencias() {
  const questions = [];
  let num = 1;
  const sId = "asd_5";
  const stId = "5_ciencias";

  const u1Bank = [
    ["¿Qué estado de agregación de la materia posee volumen constante y adopta la forma del recipiente que lo contiene?", "Líquido", "Sólido", "Gaseoso", "Plasma", "Los líquidos tienen volumen definido pero forma adaptable por la fluidez de sus moléculas."],
    ["¿Cuál de los siguientes métodos físicos se emplea para separar una mezcla de arena y agua aprovechando la diferencia de tamaño de partícula?", "Filtración", "Evaporación", "Destilación", "Magnetismo", "La filtración retiene el sólido en el papel filtro dejando pasar el líquido filtrado."],
    ["El cambio de estado en el cual el agua líquida pasa a vapor debido al aumento de temperatura se conoce como:", "Evaporación o ebullición", "Fusión", "Solidificación", "Condensación", "La evaporación es el paso de fase líquida a fase gaseosa por ganancia de energía térmica."],
    ["¿Qué instrumento se utiliza comúnmente en el laboratorio escolar para medir el volumen exacto de líquidos?", "Probeta graduada", "Balanza de doble plato", "Termómetro clínico", "Regla milimetrada", "La probeta graduada permite medir volúmenes líquidos con escala milimétrica en mililitros ($mL$)."],
    ["¿Cuál de los siguientes ejemplos corresponde a una mezcla homogénea (solución)?", "Agua con sal totalmente disuelta", "Agua con aceite vegetal", "Arena con piedras", "Ensalada de verduras", "Una mezcla homogénea presenta una sola fase uniforme donde no se distinguen los componentes a simple vista."],
    ["La masa de un cuerpo se define científicamente como:", "La cantidad de materia que posee un cuerpo", "La fuerza con que la gravedad lo atrae", "El espacio tridimensional que ocupa", "La velocidad con que se desplaza", "La masa es la medida intrínseca de la cantidad de materia de un objeto."],
    ["El paso directo del estado sólido al estado gaseoso sin pasar por el estado líquido se denomina:", "Sublimación progresiva", "Fusión", "Solidificación", "Licuefacción", "La sublimación es la transición directa de sólido a gas, como en el yodo o la naftalina."],
    ["La propiedad de la materia que relaciona la masa de un cuerpo con el volumen que ocupa se llama:", "Densidad ($d = m/v$)", "Peso específico", "Inercia gravitatoria", "Porosidad superficial", "La densidad expresa cuánta masa está contenida en una determinada unidad de volumen."]
  ];

  for (let i = 1; i <= 40; i++) {
    const t = u1Bank[(i - 1) % u1Bank.length];
    questions.push(makeQuestion(
      `asd_5_cie_${num}`, num, sId, stId, "Ciencias Naturales", "La Materia y sus Propiedades", "Unidad 1: La Materia y sus Propiedades (1–40)",
      `Propiedades físicas de la materia: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 15 ? "basico" : i <= 30 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u2Bank = [
    ["¿Cuál es la unidad anatómica y fisiológica fundamental de todos los seres vivos?", "La célula", "El tejido", "El órgano", "El átomo", "La teoría celular establece que la célula es la unidad básica y estructural de la vida."],
    ["¿Qué organelo celular exclusivo de las plantas contiene clorofila y realiza la fotosíntesis?", "El cloroplasto", "La mitocondria", "El ribosoma", "El aparato de Golgi", "Los cloroplastos capturan la radiación luminosa para sintetizar glucosa durante la fotosíntesis."],
    ["¿A qué reino de la naturaleza pertenecen las bacterias microscópicas que carecen de núcleo definido?", "Reino Mónera", "Reino Fungi", "Reino Protista", "Reino Plantae", "Las bacterias son organismos procariontes unicelulares pertenecientes al reino Mónera."],
    ["Los hongos, setas y levaduras se clasifican en el reino:", "Reino Fungi", "Reino Protista", "Reino Animalia", "Reino Plantae", "Los hongos son organismos heterótrofos con pared celular formada por quitina."],
    ["¿Cuál es la estructura celular encargada de controlar la entrada y salida de sustancias en la célula?", "La membrana plasmática", "La pared celular rígida", "El citoplasma", "El nucléolo", "La membrana plasmática tiene permeabilidad selectiva para regular el intercambio de sustancias."],
    ["¿Qué organelo celular se conoce como la central energética donde se produce la respiración celular y ATP?", "La mitocondria", "El lisosoma", "La vacuola", "El retículo endoplásmático", "Las mitocondrias degradan nutrientes orgánicos para generar energía química en forma de ATP."],
    ["Los animales vertebrados se diferencian de los invertebrados principalmente por poseer:", "Columna vertebral y esqueleto interno", "Reproducción asexual exclusiva", "Exoesqueleto de quitina", "Células procariotas", "Los vertebrados poseen un endoesqueleto óseo o cartilaginoso articulado con columna vertebral."],
    ["¿A qué grupo de vertebrados pertenecen los anfibios como las ranas y sapos?", "Vertebrados con respiración branquial en fase larvaria y pulmonar/cutánea de adultos", "Reptiles de escamas secas", "Aves homeotermas", "Mamíferos placentarios", "Los anfibios sufren metamorfosis: respiran por branquias en el agua y desarrollan pulmones de adultos."]
  ];

  for (let i = 1; i <= 45; i++) {
    const t = u2Bank[(i - 1) % u2Bank.length];
    questions.push(makeQuestion(
      `asd_5_cie_${num}`, num, sId, stId, "Ciencias Naturales", "La Célula y los Seres Vivos", "Unidad 2: La Célula y los Reinos de la Naturaleza (41–85)",
      `Biodiversidad y organización celular: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 18 ? "basico" : i <= 35 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u3Bank = [
    ["¿Cuál es el órgano muscular principal encargado de impulsar la sangre a través del sistema circulatorio?", "El corazón", "El pulmón izquierdo", "El estómago", "El bazo", "El corazón actúa como una bomba biológica con cuatro cavidades: dos aurículas y dos ventrículos."],
    ["En el sistema digestivo humano, ¿dónde se lleva a cabo la mayor parte de la absorción de nutrientes digeridos?", "En el intestino delgado", "En el estómago", "En el esófago", "En el intestino grueso", "Las vellosidades intestinales del intestino delgado absorben carbohidratos, aminoácidos y lípidos."],
    ["¿Cuál es la función principal de los glóbulos rojos (eritrocitos) en el torrente sanguíneo?", "Transportar oxígeno fijado a la hemoglobina", "Producir anticuerpos humorales", "Formar el tapón plaquetario", "Filtrar el ácido úrico", "Los eritrocitos contienen hemoglobina que transporta el oxígeno desde los pulmones a todos los tejidos."],
    ["¿Qué gas esencial absorben los alvéolos pulmonares durante la inspiración para oxigenar la sangre?", "Oxígeno ($O_2$)", "Dióxido de carbono ($CO_2$)", "Nitrógeno libre ($N_2$)", "Monóxido de carbono", "En los alvéolos se produce la hematosis: el $O_2$ pasa a la sangre y se elimina $CO_2$."],
    ["¿Qué órganos del sistema excretor se encargan de filtrar la sangre para formar la orina?", "Los riñones", "Los pulmones", "El hígado", "La vesícula biliar", "Los riñones contienen millones de nefronas que filtran los desechos metabólicos de la sangre."],
    ["¿Qué enfermedad transmitida por la picadura del mosquito Aedes aegypti provoca fiebre alta y dolores musculares?", "Dengue", "Chagas", "Tuberculosis", "Gripe común", "El mosquito Aedes aegypti es el vector del virus del dengue, zika y chikungunya."],
    ["¿Cuál es la principal recomendación para prevenir infecciones diarreicas y parasitarias en el hogar?", "Lavarse las manos con agua y jabón antes de comer y tras usar el sanitario", "Tomar antibióticos sin receta", "Consumir agua sin hervir o sin clorar", "Evitar el consumo de frutas y vegetales", "El lavado correcto de manos destruye bacterias y quistes de parásitos previniendo infecciones."]
  ];

  for (let i = 1; i <= 55; i++) {
    const t = u3Bank[(i - 1) % u3Bank.length];
    questions.push(makeQuestion(
      `asd_5_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Anatomía y Salud Humana", "Unidad 3: El Cuerpo Humano y la Salud (86–140)",
      `Sistemas corporales y prevención: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 20 ? "basico" : i <= 40 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u4Bank = [
    ["¿Qué órgano vegetal se encarga principalmente de absorber el agua y las sales minerales del suelo?", "La raíz", "La hoja", "La flor", "El tallo verde", "La raíz fija la planta al sustrato y absorbe la savia bruta por medio de los pelos absorbentes."],
    ["¿Cuál es el gas que las plantas absorben del aire para fabricar su alimento durante la fotosíntesis?", "Dióxido de carbono ($CO_2$)", "Oxígeno ($O_2$)", "Helio", "Metano", "Las hojas absorben $CO_2$ atmosférico por los estomas para el ciclo fotosintético."],
    ["¿Qué producto gaseoso liberan las plantas a la atmósfera como resultado del proceso fotosintético?", "Oxígeno ($O_2$)", "Dióxido de carbono ($CO_2$)", "Nitrógeno gaseoso", "Ozono troposférico", "La fotólisis del agua durante la fotosíntesis libera oxígeno ($O_2$) hacia el medio ambiente."],
    ["En una flor, ¿cuál es el órgano reproductor femenino que contiene el ovario y los óvulos?", "El pistilo o gineceo", "Los estambres o androceo", "Los pétalos de la corola", "Los sépalos del cáliz", "El pistilo consta de estigma, estilo y ovario, constituyendo el aparato reproductor femenino."],
    ["¿Cómo se denomina el transporte del grano de polen desde los estambres hasta el estigma de la flor?", "Polinización", "Germinación", "Fecundación", "Fotosíntesis", "La polinización puede ser entomófila (por insectos), ornitófila (por aves) o anemófila (por viento)."],
    ["Los vasos conductores que transportan la savia elaborada (nutrientes orgánicos) desde las hojas se llaman:", "Floema", "Xilema", "Parénquima", "Epidermis", "El floema transporta los azúcares sintetizados hacia todas las partes de la planta."]
  ];

  for (let i = 1; i <= 45; i++) {
    const t = u4Bank[(i - 1) % u4Bank.length];
    questions.push(makeQuestion(
      `asd_5_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Botánica y Fisiología Vegetal", "Unidad 4: Las Plantas y el Reino Vegetal (141–185)",
      `El reino vegetal y fotosíntesis: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 18 ? "basico" : i <= 35 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u5Bank = [
    ["En una cadena trófica, ¿qué nivel ocupan los organismos autótrofos que producen su propio alimento?", "Productores primarios", "Consumidores primarios", "Consumidores secundarios", "Descomponedores", "Los productores (plantas y algas) transforman energía solar en biomasa orgánica."],
    ["¿Cuál de los siguientes componentes de un ecosistema salvadoreño es un factor abiótico?", "La radiación solar y la humedad del aire", "Los árboles de ceiba", "Los colibríes esmeralda", "Las bacterias nitrificantes", "Los factores abióticos son las variables físicas y químicas no vivas del entorno."],
    ["¿Cuál es el ave nacional de El Salvador caracterizada por su plumaje verde tornasol y cola de raqueta?", "El Torogoz (Momoto cejiturquesa)", "El Zopilote rey", "El Gavilán gris", "El Loro frentirrojo", "El Torogoz fue declarado Ave Nacional de El Salvador por Decreto Legislativo en 1999."],
    ["¿Cuál es el árbol nacional de El Salvador que florece con hermosas flores rosadas entre febrero y abril?", "El Maquilishuat", "El Bálsamo", "El Conacaste", "El Cedro real", "El Maquilishuat (Tabebuia rosea) es uno de los árboles nacionales reconocidos de El Salvador."],
    ["El Parque Nacional El Imposible, en el occidente salvadoreño, destaca por proteger:", "Un bosque tropical seco y premontano con alta biodiversidad", "Un arrecife de coral ártico", "Una zona de tundra permafrost", "Un desierto arenoso hiperárido", "El Imposible conserva fuentes de agua vitales y gran diversidad de especies de flora y fauna amenazadas."],
    ["Los organismos descomponedores como hongos y bacterias cumplen en el ecosistema el rol de:", "Reciclar la materia orgánica descomponiendo restos en nutrientes inorgánicos", "Cazar a los depredadores tope", "Consumir exclusivamente pasto fresco", "Polinizar flores nocturnas", "Los descomponedores degradan la materia orgánica muerta restituyendo minerales al suelo."]
  ];

  for (let i = 1; i <= 50; i++) {
    const t = u5Bank[(i - 1) % u5Bank.length];
    questions.push(makeQuestion(
      `asd_5_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Ecología y Biodiversidad Salvadoreña", "Unidad 5: Ecosistemas y Biodiversidad de El Salvador (186–235)",
      `Ecosistemas salvadoreños: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 20 ? "basico" : i <= 38 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u6Bank = [
    ["¿Qué máquina simple consiste en una barra rígida que gira libremente sobre un punto de apoyo o fulcro?", "La palanca", "El plano inclinado", "La polea fija", "El tornillo helicoidal", "La palanca amplifica la fuerza motriz en función de la distancia al fulcro."],
    ["Una carretilla de albañilería es un ejemplo clásico de palanca de:", "Segundo género (la carga está en el centro)", "Primer género (el apoyo está en el centro)", "Tercer género (la potencia está en el centro)", "Cuarto género sin apoyo", "En la carretilla, la resistencia (carga) se sitúa entre el punto de apoyo (rueda) y la fuerza aplicada."],
    ["¿Qué fuerza invisible ejercida por la masa terrestre acelera los cuerpos en caída libre hacia el suelo?", "Fuerza de gravedad o gravitatoria", "Fuerza de fricción estática", "Fuerza centrífuga", "Fuerza electrostática", "La gravedad atrae a todos los cuerpos hacia el centro de la Tierra a $9.8\\text{ m/s}^2$."],
    ["La energía que posee un cuerpo en virtud de su movimiento y velocidad se conoce como:", "Energía cinética", "Energía potencial elástica", "Energía química", "Energía geotérmica", "La energía cinética ($E_c = \\frac{1}{2}mv^2$) depende de la masa del objeto y de su rapidez."],
    ["¿Qué máquina simple se utiliza para subir objetos pesados deslizados con menor esfuerzo sobre una rampa?", "El plano inclinado", "La cuña afilada", "La palanca de tercer género", "El resorte", "El plano inclinado reduce la fuerza requerida para elevar una carga aumentando la distancia recorrida."]
  ];

  for (let i = 1; i <= 50; i++) {
    const t = u6Bank[(i - 1) % u6Bank.length];
    questions.push(makeQuestion(
      `asd_5_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Fuerza, Trabajo y Energía", "Unidad 6: Fuerzas, Máquinas Simples y Energía (236–285)",
      `Física aplicada y máquinas simples: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 20 ? "basico" : i <= 38 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u7Bank = [
    ["¿Cuál es la capa gaseosa que rodea a nuestro planeta protegiéndolo de la radiación cósmica y meteoros?", "La atmósfera", "La hidrósfera", "La litósfera", "La biósfera marina", "La atmósfera retiene los gases respirables y amortigua las variaciones extremas de temperatura."],
    ["¿En qué capa de la atmósfera terrestre se concentran los fenómenos climáticos como vientos, nubes y lluvia?", "La tropósfera", "La estratósfera", "La mesósfera", "La termosfera", "La tropósfera es la capa más cercana al suelo (hasta unos 12 km) donde ocurre el clima cotidiano."],
    ["El paso en el ciclo del agua en el cual el vapor de agua asciende, se enfría y forma las nubes se llama:", "Condensación", "Evaporación directa", "Precipitación pluvial", "Infiltración profunda", "El vapor de agua al ascender a zonas frías se condensa en microgotas formando las nubes."],
    ["¿Cuál es el planeta más grande de nuestro Sistema Solar caracterizado por ser un gigante gaseoso?", "Júpiter", "Saturno con anillos", "Neptuno azul", "La Tierra", "Júpiter tiene una masa más de 300 veces mayor que la Tierra y es el mayor del sistema solar."],
    ["El movimiento de la Tierra sobre su propio eje que dura aproximadamente 24 horas da lugar a:", "El día y la noche", "Las cuatro estaciones del año", "Los eclipses solares totales", "Las fases de la Luna", "La rotación de la Tierra de oeste a este genera la sucesión periódica del día y de la noche."],
    ["¿Cuál es el satélite natural que orbita alrededor de la Tierra?", "La Luna", "Fobos", "Titán", "Europa", "La Luna es el único satélite natural de la Tierra e influye directamente en las mareas oceánicas."]
  ];

  for (let i = 1; i <= 80; i++) {
    const t = u7Bank[(i - 1) % u7Bank.length];
    questions.push(makeQuestion(
      `asd_5_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Ciencias de la Tierra y el Cosmos", "Unidad 7: La Tierra, el Clima y el Universo (286–365)",
      `El planeta Tierra y astronomía: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 30 ? "basico" : i <= 60 ? "intermedio" : "admision"
    ));
    num++;
  }

  return questions;
}

// =============================================================================
// 3. GENERADOR DE SEXTO GRADO - MATEMÁTICA (365 PREGUNTAS)
// =============================================================================
function generate6Matematica() {
  const questions = [];
  let num = 1;
  const sId = "asd_6";
  const stId = "6_matematica";

  // U1: Operaciones con Fracciones (40 Q)
  for (let i = 1; i <= 40; i++) {
    const sec = "Unidad 1: Operaciones con Fracciones (1–40)";
    const n1 = 1 + (i % 4);
    const d1 = 3 + (i % 3);
    const n2 = 2;
    const d2 = 5;
    const numProd = n1 * n2;
    const denProd = d1 * d2;
    const q = makeQuestion(
      `asd_6_mat_${num}`, num, sId, stId, "Matemática", "Multiplicación de Fracciones", sec,
      `Calcula el producto de las siguientes fracciones multiplicando numeradores y denominadores: $\\frac{${n1}}{${d1}} \\times \\frac{${n2}}{${d2}}$:`,
      [`$\\frac{${numProd}}{${denProd}}$`, `$\\frac{${n1 + n2}}{${d1 + d2}}$`, `$\\frac{${numProd}}{${d1}}$`, `$\\frac{${n1}}{${denProd}}$`], 0,
      `En la multiplicación de fracciones se multiplican directamente numeradores entre sí y denominadores entre sí: $\\frac{${n1} \\times ${n2}}{${d1} \\times ${d2}} = \\frac{${numProd}}{${denProd}}$.`,
      i <= 15 ? "basico" : i <= 30 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  // U2: Cantidades Variables y Números Romanos (30 Q)
  const romanTable = [
    [10, "X", "diez"], [24, "XXIV", "veinticuatro"], [49, "XLIX", "cuarenta y nueve"],
    [95, "XCV", "noventa y cinco"], [150, "CL", "ciento cincuenta"], [400, "CD", "cuatrocientos"],
    [900, "CM", "novecientos"], [1020, "MXX", "mil veinte"], [88, "LXXXVIII", "ochenta y ocho"],
    [34, "XXXIV", "treinta y cuatro"]
  ];
  for (let i = 1; i <= 30; i++) {
    const sec = "Unidad 2: Cantidades Variables y Números Romanos (41–70)";
    const item = romanTable[(i - 1) % romanTable.length];
    const q = makeQuestion(
      `asd_6_mat_${num}`, num, sId, stId, "Matemática", "Numeración Romana", sec,
      `¿Cuál es la escritura correcta del número arábigo $${item[0]}$ (${item[2]}) en el sistema de numeración romano?`,
      [item[1], item[1] + "I", "V" + item[1], item[1].replace(/X/g, 'V')], 0,
      `Siguiendo las reglas de los numerales romanos (sustracción a la izquierda y adición a la derecha), $${item[0]}$ se representa como ${item[1]}.`,
      i <= 10 ? "basico" : "intermedio"
    );
    questions.push(q);
    num++;
  }

  // U3: División de Fracciones y Jerarquía (40 Q)
  for (let i = 1; i <= 40; i++) {
    const sec = "Unidad 3: División de Fracciones y Jerarquía (71–110)";
    const n = 2 + (i % 4);
    const d = 3;
    const divN = 3;
    const divD = 4;
    const resN = n * 4;
    const resD = 9;
    const q = makeQuestion(
      `asd_6_mat_${num}`, num, sId, stId, "Matemática", "División de Fracciones", sec,
      `Efectúa la división de fracciones multiplicando por la fracción recíproca del divisor: $\\frac{${n}}{${d}} \\div \\frac{${divN}}{${divD}}$:`,
      [`$\\frac{${resN}}{${resD}}$`, `$\\frac{${n * divN}}{${d * divD}}$`, `$\\frac{${resN + 1}}{${resD}}$`, `$\\frac{${n}}{${resD}}$`], 0,
      `Dividir entre una fracción equivale a multiplicar por su inverso multiplicativo: $\\frac{${n}}{${d}} \\times \\frac{${divD}}{${divN}} = \\frac{${n} \\times ${divD}}{${d} \\times ${divN}} = \\frac{${resN}}{${resD}}$.`,
      i <= 15 ? "basico" : i <= 30 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  // U4: Razones y Porcentajes (45 Q)
  for (let i = 1; i <= 45; i++) {
    const sec = "Unidad 4: Razones y Porcentajes (111–155)";
    const total = 50 + (i % 10) * 10;
    const pct = 10 + (i % 4) * 5;
    const desc = (total * pct) / 100;
    const finalPrice = total - desc;
    const q = makeQuestion(
      `asd_6_mat_${num}`, num, sId, stId, "Matemática", "Cálculo de Porcentajes e IVA", sec,
      `Un uniforme escolar tiene un costo de lista de $\\$${total}$. Si la tienda ofrece una rebaja del $${pct}\\%$, ¿cuál es el precio final a pagar?`,
      [`$\\$${finalPrice.toFixed(2)}$`, `$\\$${desc.toFixed(2)}$`, `$\\$${(total - pct).toFixed(2)}$`, `$\\$${(finalPrice + 5).toFixed(2)}$`], 0,
      `El descuento es $\\$${total} \\times \\frac{${pct}}{100} = \\$${desc.toFixed(2)}$. El precio final pagado es $\\$${total} - \\$${desc.toFixed(2)} = \\$${finalPrice.toFixed(2)}$.`,
      i <= 18 ? "basico" : i <= 35 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  // U5: Proporcionalidad Directa e Inversa (45 Q)
  for (let i = 1; i <= 45; i++) {
    const sec = "Unidad 5: Proporcionalidad Directa e Inversa (156–200)";
    const x1 = 3;
    const y1 = 3 * (2 + (i % 4));
    const k = y1 / x1;
    const x2 = 7;
    const y2 = k * x2;
    const q = makeQuestion(
      `asd_6_mat_${num}`, num, sId, stId, "Matemática", "Proporcionalidad Directa", sec,
      `Las variables $x$ e $y$ son directamente proporcionales. Si cuando $x = ${x1}$ se sabe que $y = ${y1}$, ¿cuál es el valor de $y$ cuando $x = ${x2}$?`,
      [`$y = ${y2}$`, `$y = ${y2 + 4}$`, `$y = ${x2 + k}$`, `$y = ${y1 * 2}$`], 0,
      `La constante de proporcionalidad directa es $k = \\frac{y}{x} = \\frac{${y1}}{${x1}} = ${k}$. Luego, para $x = ${x2}$: $y = ${k} \\times ${x2} = ${y2}$.`,
      i <= 18 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  // U6: Longitud de la Circunferencia y Área del Círculo (40 Q)
  for (let i = 1; i <= 40; i++) {
    const sec = "Unidad 6: Longitud de la Circunferencia y Área del Círculo (201–240)";
    const r = 2 + (i % 7);
    const circ = (2 * 3.14 * r).toFixed(2);
    const q = makeQuestion(
      `asd_6_mat_${num}`, num, sId, stId, "Matemática", "Geometría del Círculo", sec,
      `Calcula la longitud aproximada de la circunferencia ($C = 2\\pi r$) de una glorieta con radio $r = ${r}\\text{ m}$, tomando $\\pi \\approx 3.14$:`,
      [`$${circ}\\text{ m}$`, `$${(3.14 * r).toFixed(2)}\\text{ m}$`, `$${(circ * 2)}\\text{ m}$`, `$${(r * r * 3.14).toFixed(2)}\\text{ m}$`], 0,
      `La longitud de la circunferencia es $C = 2 \\times \\pi \\times r = 2 \\times 3.14 \\times ${r} = ${circ}\\text{ m}$.`,
      i <= 15 ? "basico" : "intermedio"
    );
    questions.push(q);
    num++;
  }

  // U7: Análisis de Datos y Media Aritmética (40 Q)
  for (let i = 1; i <= 40; i++) {
    const sec = "Unidad 7: Análisis de Datos y Media Aritmética (241–280)";
    const val1 = 6 + (i % 3);
    const val2 = 7 + (i % 4);
    const val3 = 8 + (i % 3);
    const val4 = 9;
    const sum = val1 + val2 + val3 + val4;
    const media = (sum / 4).toFixed(1);
    const q = makeQuestion(
      `asd_6_mat_${num}`, num, sId, stId, "Matemática", "Estadística Descriptiva Elemental", sec,
      `Un alumno de 6.° grado obtuvo las calificaciones $${val1}, ${val2}, ${val3}$ y $${val4}$ en Matemática. ¿Cuál es su media aritmética (promedio)?`,
      [`$${media}$`, `$${(parseFloat(media) + 0.5).toFixed(1)}$`, `$${(parseFloat(media) - 0.7).toFixed(1)}$`, `$${sum}$`], 0,
      `La media aritmética es el cociente de la suma de datos entre el número total de datos: $\\frac{${val1} + ${val2} + ${val3} + ${val4}}{4} = \\frac{${sum}}{4} = ${media}$.`,
      i <= 15 ? "basico" : "intermedio"
    );
    questions.push(q);
    num++;
  }

  // U8: Volumen de Prismas y Cilindros (40 Q)
  for (let i = 1; i <= 40; i++) {
    const sec = "Unidad 8: Volumen de Prismas y Cilindros (281–320)";
    const ab = 20 + (i % 10) * 2;
    const h = 5 + (i % 5);
    const vol = ab * h;
    const q = makeQuestion(
      `asd_6_mat_${num}`, num, sId, stId, "Matemática", "Volumen de Cuerpos Redondos y Prismas", sec,
      `Un prisma recto tiene una base con área de $${ab}\\text{ cm}^2$ y una altura de $${h}\\text{ cm}$. ¿Cuál es su volumen total?`,
      [`$${vol}\\text{ cm}^3$`, `$${ab + h}\\text{ cm}^3$`, `$${vol * 2}\\text{ cm}^3$`, `$${vol / 2}\\text{ cm}^3$`], 0,
      `El volumen de cualquier prisma recto se determina multiplicando el área basal por su altura: $V = A_b \\times h = ${ab} \\times ${h} = ${vol}\\text{ cm}^3$.`,
      i <= 18 ? "basico" : "intermedio"
    );
    questions.push(q);
    num++;
  }

  // U9: Conversión de Medidas del Sistema Internacional (25 Q)
  for (let i = 1; i <= 25; i++) {
    const sec = "Unidad 9: Conversión de Medidas del Sistema Internacional (321–345)";
    const arrobas = 2 + (i % 6);
    const lbs = arrobas * 25;
    const q = makeQuestion(
      `asd_6_mat_${num}`, num, sId, stId, "Matemática", "Conversión de Unidades de Masa", sec,
      `En el mercado de San Salvador se venden $${arrobas}$ arrobas de frijol rojo. Sabiendo que $1\\text{ arroba} = 25\\text{ libras}$, ¿cuántas libras representa dicha cantidad?`,
      [`$${lbs}\\text{ libras}$`, `$${arrobas * 100}\\text{ libras}$`, `$${lbs + 15}\\text{ libras}$`, `$${arrobas * 16}\\text{ libras}$`], 0,
      `Para convertir arrobas a libras se multiplica por 25: $${arrobas} \\times 25 = ${lbs}\\text{ libras}$.`,
      "basico"
    );
    questions.push(q);
    num++;
  }

  // U10: Transformaciones Geométricas y Simetría (20 Q)
  for (let i = 1; i <= 20; i++) {
    const sec = "Unidad 10: Transformaciones Geométricas y Simetría (346–365)";
    const q = makeQuestion(
      `asd_6_mat_${num}`, num, sId, stId, "Matemática", "Simetría Axial y Central", sec,
      `¿Cuántos ejes de simetría reflexiva axial posee un triángulo equilátero regular?`,
      [`$3$ ejes de simetría`, `$1$ eje de simetría`, `$2$ ejes de simetría`, `$6$ ejes de simetría`], 0,
      `Un triángulo equilátero tiene 3 ejes de simetría, los cuales coinciden con las tres mediatrices/alturas que pasan por cada vértice.`,
      i <= 10 ? "basico" : "intermedio"
    );
    questions.push(q);
    num++;
  }

  return questions;
}

// =============================================================================
// 4. GENERADOR DE SEXTO GRADO - CIENCIAS NATURALES (365 PREGUNTAS)
// =============================================================================
function generate6Ciencias() {
  const questions = [];
  let num = 1;
  const sId = "asd_6";
  const stId = "6_ciencias";

  const u1Bank = [
    ["¿Cuál es el primer paso metodológico de toda investigación científica experimental?", "La observación rigurosa del fenómeno", "La formulación de conclusiones finales", "La publicación de leyes universales", "La redacción de la bibliografía", "La observación permite formular preguntas e identificar el problema que se investigará."],
    ["Una suposición lógica y comprobable que se plantea como posible respuesta al problema científico se denomina:", "Hipótesis", "Ley científica", "Teoría demostrada", "Variable de control", "La hipótesis es una proposición provisional que se somete a prueba experimental."],
    ["¿Cuál es la unidad básica de medida para la masa en el Sistema Internacional de Unidades (SI)?", "El kilogramo (kg)", "El gramo (g)", "La libra (lb)", "La tonelada métrica (t)", "El kilogramo ($kg$) es la unidad fundamental de masa según el Sistema Internacional de Unidades."]
  ];

  for (let i = 1; i <= 35; i++) {
    const t = u1Bank[(i - 1) % u1Bank.length];
    questions.push(makeQuestion(
      `asd_6_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Método Científico y Mediciones", "Unidad 1: Investigación Científica y Magnitudes Físicas (1–35)",
      `Metodología experimental: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 15 ? "basico" : i <= 25 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u2Bank = [
    ["En la estructura de un átomo neutro, ¿qué partícula subatómica posee carga eléctrica negativa y orbita en la corteza?", "El electrón", "El protón", "El neutrón", "El positrón", "Los electrones poseen carga negativa $-1$ y se distribuyen en orbitales alrededor del núcleo."],
    ["¿Cuál de los siguientes fenómenos cotidianos constituye un cambio químico irreversible?", "La combustión de un trozo de leña seca", "La fusión de un cubito de hielo", "La evaporación de agua salada", "La trituración de una roca", "En la combustión se alteran los enlaces químicos generando nuevas sustancias como $CO_2$ y cenizas."],
    ["La ley de conservación de la masa enunciada por Antoine Lavoisier establece que:", "En una reacción química la masa total no se crea ni se destruye, solo se transforma", "La masa se duplica al quemar un combustible", "El calor destruye la masa de los reactivos", "Los sólidos no tienen masa medible", "La masa total de los reactivos es exactamente igual a la masa total de los productos obtenidos."]
  ];

  for (let i = 1; i <= 45; i++) {
    const t = u2Bank[(i - 1) % u2Bank.length];
    questions.push(makeQuestion(
      `asd_6_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Química y Estructura Atómica", "Unidad 2: Estructura de la Materia y Cambios Químicos (36–80)",
      `Materia y transformaciones químicas: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 18 ? "basico" : i <= 35 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u3Bank = [
    ["¿Cuál es la célula altamente especializada del sistema nervioso que genera y conduce impulsos electroquímicos?", "La neurona", "El eritrocito", "El osteocito", "El adipocito", "La neurona transmite señales mediante dendritas, soma y axón a través de la sinapsis."],
    ["¿Qué glándula del sistema endocrino produce la hormona insulina encargada de regular los niveles de glucosa en sangre?", "El páncreas", "La tiroides", "La hipófisis", "La corteza suprarrenal", "Las células beta de los islotes de Langerhans en el páncreas sintetizan y liberan insulina."],
    ["Una respuesta involuntaria, rápida e innata ante un estímulo potencialmente peligroso (como retirar la mano del fuego) se llama:", "Acto reflejo", "Movimiento voluntario meditado", "Razonamiento lógico", "Hábito aprendido", "El arco reflejo procesa la respuesta motora a nivel de la médula espinal sin intervención consciente previa del cerebro."]
  ];

  for (let i = 1; i <= 55; i++) {
    const t = u3Bank[(i - 1) % u3Bank.length];
    questions.push(makeQuestion(
      `asd_6_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Sistemas Nervioso y Endocrino", "Unidad 3: Sistemas de Coordinación del Cuerpo Humano (81–135)",
      `Coordinación y homeostasis humana: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 20 ? "basico" : i <= 40 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u4Bank = [
    ["El mecanismo de reproducción asexual bacteriana en el que una célula madre se divide en dos células hijas idénticas se denomina:", "Bipartición o fisión binaria", "Esporulación", "Gemación", "Fecundación anisógama", "La fisión binaria clona el ADN y divide simétricamente el citoplasma originando dos organismos clones."],
    ["¿Cómo se denominan las células sexuales especializadas (óvulo y espermatozoide) que se unen durante la fecundación?", "Gametos", "Cigotos diploides", "Esporas bacterianas", "Glóbulos blancos", "Los gametos son células reproductoras haploides indispensables para la reproducción sexual."],
    ["La unión del núcleo del espermatozoide con el núcleo del óvulo da origen a una nueva célula llamada:", "Cigoto", "Mórula", "Gástrula", "Feto", "El cigoto es la primera célula totipotente diploide resultante de la fecundación."]
  ];

  for (let i = 1; i <= 45; i++) {
    const t = u4Bank[(i - 1) % u4Bank.length];
    questions.push(makeQuestion(
      `asd_6_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Reproducción y Herencia Biológica", "Unidad 4: Reproducción y Genética en los Seres Vivos (136–180)",
      `Mecanismos de reproducción celular: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 18 ? "basico" : i <= 35 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u5Bank = [
    ["¿Qué ciclo biogeoquímico depende de bacterias simbióticas fijadoras en las raíces de leguminosas?", "Ciclo del nitrógeno", "Ciclo del carbono", "Ciclo del fósforo", "Ciclo del agua", "Bacterias como Rhizobium fijan el $N_2$ atmosférico convirtiéndolo en amonio y nitratos asimilables."],
    ["La interacción ecológica en la cual dos especies se benefician mutuamente de forma obligada o cooperativa se denomina:", "Mutualismo", "Parasitismo", "Depredación", "Amensalismo", "En el mutualismo ambas especies mejoran su supervivencia (ejemplo: abejas polinizadoras y flores)."],
    ["En una red trófica, según la regla del $10\\%$, ¿qué porcentaje aproximado de energía disponible pasa de un nivel trófico al siguiente?", "Aproximadamente el $10\\%$", "El $100\\%$ de la energía", "Más del $50\\%$", "El $0.1\\%$", "Cerca del $90\\%$ de la energía se disipa como calor metabólico en cada transferencia trófica."]
  ];

  for (let i = 1; i <= 55; i++) {
    const t = u5Bank[(i - 1) % u5Bank.length];
    questions.push(makeQuestion(
      `asd_6_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Ecología de Poblaciones y Ciclos", "Unidad 5: Dinámica de los Ecosistemas y Ciclos Biogeoquímicos (181–235)",
      `Dinámica ecológica y biogeoquímica: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 20 ? "basico" : i <= 40 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u6Bank = [
    ["Un material como el cobre o el aluminio que permite el libre movimiento de electrones conductores se clasifica como:", "Conductor eléctrico", "Aislante dieléctrico", "Semiconductor dopado", "Superaislante térmico", "Los metales tienen electrones de valencia deslocalizados que transportan la corriente eléctrica con baja resistencia."],
    ["¿Qué ley de la electrostática describe el comportamiento entre dos cargas eléctricas de signos opuestos ($+$ y $-$)?", "Cargas de signo contrario se atraen mutuamente", "Cargas contrarias se repelen violentamente", "No interactúan en el vacío", "Se neutralizan instantáneamente sin fuerza", "La ley fundamental de la electrostática establece que cargas de igual signo se repelen y de signo contrario se atraen."],
    ["Un dispositivo que consiste en una bobina de alambre conductor enrollada sobre un núcleo de hierro que se magnetiza con corriente eléctrica es:", "Un electroimán", "Un capacitor electrolítico", "Un fusible térmico", "Un aislador cerámico", "El electroimán aprovecha el efecto electromagnético de la corriente creando un campo magnético temporal controlable."]
  ];

  for (let i = 1; i <= 50; i++) {
    const t = u6Bank[(i - 1) % u6Bank.length];
    questions.push(makeQuestion(
      `asd_6_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Electricidad y Magnetismo", "Unidad 6: Electricidad, Magnetismo y Circuitos (236–285)",
      `Principios de electromagnetismo: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 18 ? "basico" : i <= 36 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u7Bank = [
    ["¿Cuáles son las dos principales placas tectónicas cuya colisión y subducción generan la alta actividad sísmica y volcánica en El Salvador?", "La Placa de Cocos y la Placa del Caribe", "La Placa de Nazca y la Placa Sudamericana", "La Placa del Pacífico y la Placa Africana", "La Placa Euroasiática y la Placa Indoaustraliana", "La Placa de Cocos subduce bajo la Placa del Caribe en la Fosa Mesoamericana frente a la costa pacífica salvadoreña."],
    ["El punto en el interior de la corteza terrestre donde se origina y libera la energía sísmica por fractura de roca se llama:", "Hipocentro o foco sísmico", "Epicentro en superficie", "Cráter volcánico", "Falla superficial", "El hipocentro es el foco interno donde ocurre la ruptura; su proyección perpendicular en superficie es el epicentro."],
    ["¿Cuál de los siguientes es el volcán más activo y alto de la cordillera de Apaneca-Ilamatepec en El Salvador?", "El Volcán de Santa Ana (Ilamatepec)", "El Volcán de San Salvador (Quezaltepec)", "El Volcán de Conchagua", "El Volcán Chingo", "El Ilamatepec o Volcán de Santa Ana es el más elevado de El Salvador (2,381 msnm) y posee una laguna ácida en su cráter."],
    ["La escala sismológica que mide la energía liberada de un terremoto en forma de magnitud instrumental cuantitativa es:", "La escala de Richter / Magnitud de Momento", "La escala de Mercalli modificada", "La escala de Mohs de dureza", "La escala de Fujita para tornados", "La escala de Richter y la escala de Magnitud de Momento calculan cuantitativamente la energía sísmica liberada."]
  ];

  for (let i = 1; i <= 80; i++) {
    const t = u7Bank[(i - 1) % u7Bank.length];
    questions.push(makeQuestion(
      `asd_6_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Tectónica y Geología Salvadoreña", "Unidad 7: Fenómenos Geológicos y Gestión de Riesgos (286–365)",
      `Geología y prevención de desastres: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 30 ? "basico" : i <= 60 ? "intermedio" : "admision"
    ));
    num++;
  }

  return questions;
}

// =============================================================================
// 5. GENERADOR DE SÉPTIMO GRADO - MATEMÁTICA (365 PREGUNTAS)
// =============================================================================
function generate7Matematica() {
  const questions = [];
  let num = 1;
  const sId = "asd_7";
  const stId = "7_matematica";

  // U1: Números Positivos, Negativos y el Cero (35 Q)
  for (let i = 1; i <= 35; i++) {
    const sec = "Unidad 1: Números Positivos, Negativos y el Cero (1–35)";
    const val = -1 * (2 + (i % 25));
    const abs = Math.abs(val);
    const q = makeQuestion(
      `asd_7_mat_${num}`, num, sId, stId, "Matemática", "Números con Signo y Recta Numérica", sec,
      `Calcula el valor absoluto del número entero negativo: $|${val}|$:`,
      [`$${abs}$`, `$${val}$`, `$0$`, `$${val * 2}$`], 0,
      `El valor absoluto de un número entero representa la distancia geométrica desde el número hasta el cero en la recta numérica: $|${val}| = ${abs}$.`,
      i <= 15 ? "basico" : i <= 25 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  // U2: Operaciones con Números con Signo (45 Q)
  for (let i = 1; i <= 45; i++) {
    const sec = "Unidad 2: Operaciones con Números con Signo (36–80)";
    const a = -3 - (i % 6);
    const b = 4 + (i % 5);
    const prod = a * b;
    const q = makeQuestion(
      `asd_7_mat_${num}`, num, sId, stId, "Matemática", "Multiplicación de Números Enteros", sec,
      `Efectúa la multiplicación aplicando la ley de los signos: $(${a}) \\times (${b})$:`,
      [`$${prod}$`, `$${Math.abs(prod)}$`, `$${a + b}$`, `$${prod - 4}$`], 0,
      `El producto de un número negativo por un número positivo da como resultado un número negativo: $(-) \\times (+) = (-)$. Por ende: $(${a}) \\times (${b}) = ${prod}$.`,
      i <= 18 ? "basico" : i <= 35 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  // U3: Ecuaciones de Primer Grado con una Incógnita (55 Q)
  for (let i = 1; i <= 55; i++) {
    const sec = "Unidad 3: Ecuaciones de Primer Grado con una Incógnita (81–135)";
    const xVal = 2 + (i % 12);
    const c = 7 + (i % 5);
    const b = xVal + c;
    const q = makeQuestion(
      `asd_7_mat_${num}`, num, sId, stId, "Matemática", "Ecuaciones Lineales", sec,
      `Resuelve la ecuación lineal de primer grado despejando la incógnita $x$: $x + ${c} = ${b}$:`,
      [`$x = ${xVal}$`, `$x = ${b + c}$`, `$x = ${xVal + 3}$`, `$x = -${xVal}$`], 0,
      `Restamos el término independiente $${c}$ en ambos miembros de la ecuación: $x = ${b} - ${c} \\implies x = ${xVal}$.`,
      i <= 20 ? "basico" : i <= 40 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  // U4: Expresiones Algebraicas y Términos Semejantes (45 Q)
  for (let i = 1; i <= 45; i++) {
    const sec = "Unidad 4: Expresiones Algebraicas y Términos Semejantes (136–180)";
    const c1 = 3 + (i % 5);
    const c2 = 5 + (i % 4);
    const sumC = c1 + c2;
    const q = makeQuestion(
      `asd_7_mat_${num}`, num, sId, stId, "Matemática", "Álgebra Elemental y Reducción", sec,
      `Reduce los siguientes términos semejantes sumando sus coeficientes algebraicos: $${c1}x + ${c2}x$:`,
      [`$${sumC}x$`, `$${sumC}x^2$`, `$${c1 * c2}x$`, `$${sumC}$`], 0,
      `Para reducir términos semejantes con igual parte literal ($x$), se suman algebraicamente sus coeficientes numéricos conservando la variable: $(${c1} + ${c2})x = ${sumC}x$.`,
      i <= 18 ? "basico" : i <= 35 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  // U5: Proporcionalidad Directa e Inversa con Gráficas (45 Q)
  for (let i = 1; i <= 45; i++) {
    const sec = "Unidad 5: Proporcionalidad Directa e Inversa con Gráficas (181–225)";
    const a = 2 + (i % 6);
    const q = makeQuestion(
      `asd_7_mat_${num}`, num, sId, stId, "Matemática", "Funciones y Proporcionalidad Gráfica", sec,
      `Dada la relación funcional lineal $y = ${a}x$, ¿cuál es el valor de la constante de proporcionalidad directa (pendiente)?`,
      [`$a = ${a}$`, `$a = ${a * 2}$`, `$a = 1/${a}$`, `$a = 0$`], 0,
      `En la ecuación canónica de proporcionalidad directa $y = ax$, la constante de proporcionalidad viene dada por el coeficiente $a = ${a}$.`,
      i <= 18 ? "basico" : i <= 35 ? "intermedio" : "admision"
    );
    questions.push(q);
    num++;
  }

  // U6: Geometría Plana y Construcciones (45 Q)
  for (let i = 1; i <= 45; i++) {
    const sec = "Unidad 6: Geometría Plana y Construcciones (226–270)";
    const ang = 25 + (i % 45);
    const comp = 90 - ang;
    const q = makeQuestion(
      `asd_7_mat_${num}`, num, sId, stId, "Matemática", "Ángulos y Rectas Notables", sec,
      `¿Cuánto mide el ángulo complementario de un ángulo agudo cuya abertura es de $${ang}^\\circ$?`,
      [`$${comp}^\\circ$`, `$${180 - ang}^\\circ$`, `$${comp + 10}^\\circ$`, `$${ang}^\\circ$`], 0,
      `Dos ángulos son complementarios cuando la suma de sus medidas angulares es igual a $90^\\circ$. Por ende: $90^\\circ - ${ang}^\\circ = ${comp}^\\circ$.`,
      i <= 18 ? "basico" : "intermedio"
    );
    questions.push(q);
    num++;
  }

  // U7: Perímetro, Área y Cuerpos Geométricos (50 Q)
  for (let i = 1; i <= 50; i++) {
    const sec = "Unidad 7: Perímetro, Área y Cuerpos Geométricos (271–320)";
    const l = 4 + (i % 9);
    const perim = l * 4;
    const area = l * l;
    const q = makeQuestion(
      `asd_7_mat_${num}`, num, sId, stId, "Matemática", "Cálculo de Perímetros y Áreas", sec,
      `Un terreno cuadrado en Santa Tecla tiene lados de longitud $l = ${l}\\text{ m}$. ¿Cuál es su perímetro total?`,
      [`$${perim}\\text{ m}$`, `$${area}\\text{ m}$`, `$${perim + 4}\\text{ m}$`, `$${l * 2}\\text{ m}$`], 0,
      `El perímetro de un cuadrilátero regular (cuadrado) es cuatro veces la medida de su lado: $P = 4 \\times ${l}\\text{ m} = ${perim}\\text{ m}$.`,
      i <= 20 ? "basico" : "intermedio"
    );
    questions.push(q);
    num++;
  }

  // U8: Estadística Descriptiva y Probabilidad (45 Q)
  for (let i = 1; i <= 45; i++) {
    const sec = "Unidad 8: Estadística Descriptiva y Probabilidad (321–365)";
    const q = makeQuestion(
      `asd_7_mat_${num}`, num, sId, stId, "Matemática", "Probabilidad Teórica de Laplace", sec,
      `Si se lanza un dado equilibrado de seis caras numeradas del $1$ al $6$, ¿cuál es la probabilidad teórica de obtener un número primo ($2, 3, 5$)?`,
      [`$\\frac{1}{2}$`, `$\\frac{1}{6}$`, `$\\frac{1}{3}$`, `$\\frac{2}{3}$`], 0,
      `Los casos favorables son tres primos: $\\{2, 3, 5\\}$. Los casos posibles totales son seis: $\\{1, 2, 3, 4, 5, 6\\}$. Así: $P = \\frac{3}{6} = \\frac{1}{2}$.`,
      i <= 18 ? "basico" : "intermedio"
    );
    questions.push(q);
    num++;
  }

  return questions;
}

// =============================================================================
// 6. GENERADOR DE SÉPTIMO GRADO - CIENCIAS NATURALES (365 PREGUNTAS)
// =============================================================================
function generate7Ciencias() {
  const questions = [];
  let num = 1;
  const sId = "asd_7";
  const stId = "7_ciencias";

  const u1Bank = [
    ["En un diseño experimental científico riguroso, la variable que el investigador manipula intencionalmente para evaluar su efecto se denomina:", "Variable independiente", "Variable dependiente", "Variable de confusión espuria", "Variable residual aleatoria", "La variable independiente es manipulada por el experimentador para medir su impacto sobre la dependiente."],
    ["La variable que se mide u observa para registrar los resultados y cambios provocados por la manipulación experimental es:", "Variable dependiente", "Variable independiente", "Constante fija de laboratorio", "Hipótesis nula", "La variable dependiente es el factor que responde y se cuantifica durante el experimento."],
    ["¿Cuál es la función fundamental del grupo control en un ensayo experimental?", "Servir como punto de referencia estándar para contrastar el efecto del tratamiento experimental", "Acelerar la velocidad de la reacción", "Aumentar el número de variables simultáneas", "Garantizar la publicación inmediata de resultados", "El grupo control no recibe el tratamiento experimental, permitiendo aislar la causa del efecto observado."]
  ];

  for (let i = 1; i <= 35; i++) {
    const t = u1Bank[(i - 1) % u1Bank.length];
    questions.push(makeQuestion(
      `asd_7_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Metodología Experimental Avanzada", "Unidad 1: Naturaleza de la Ciencia y Trabajo Experimental (1–35)",
      `Diseño de investigaciones científicas: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 15 ? "basico" : i <= 25 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u2Bank = [
    ["¿Qué partículas subatómicas poseen carga eléctrica positiva $+1$ y se localizan en el núcleo atómico?", "Los protones", "Los electrones", "Los neutrones", "Los fotones", "Los protones determinan el número atómico ($Z$) y residen en el núcleo atómico junto con los neutrones."],
    ["El número atómico ($Z$) de un elemento químico en la tabla periódica representa con precisión:", "El número de protones presentes en el núcleo de cada átomo", "La masa atómica promedio en unidades u", "El número total de neutrones nucleares", "La cantidad de electrones de valencia únicamente", "El número atómico $Z$ es la huella de identidad del elemento e indica el número de protones en el núcleo."],
    ["Los elementos químicos pertenecientes al Grupo 18 (VIII A) caracterizados por su máxima estabilidad electrónica son:", "Los gases nobles", "Los metales alcalinotérreos", "Los halógenos reactivos", "Los actínidos radiactivos", "Los gases nobles (He, Ne, Ar, Kr, Xe, Rn) poseen su capa de valencia completa con 8 electrones (excepto el He con 2)."]
  ];

  for (let i = 1; i <= 55; i++) {
    const t = u2Bank[(i - 1) % u2Bank.length];
    questions.push(makeQuestion(
      `asd_7_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Estructura Atómica y Tabla Periódica", "Unidad 2: Estructura Atómica y Tabla Periódica (36–90)",
      `Química nuclear y tabla periódica: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 20 ? "basico" : i <= 40 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u3Bank = [
    ["¿Qué tipo de enlace químico se establece mediante la transferencia completa de electrones entre un metal electropositivo y un no metal electronegativo?", "Enlace iónico", "Enlace covalente no polar", "Enlace metálico", "Enlace por puentes de hidrógeno", "El enlace iónico forma iones de cargas opuestas (cationes y aniones) unidos por atracción electrostática."],
    ["El enlace químico que se forma cuando dos átomos no metálicos comparten pares de electrones de valencia se conoce como:", "Enlace covalente", "Enlace iónico", "Enlace de van der Waals", "Enlace iónico coordinado", "En el enlace covalente los átomos comparten electrones para alcanzar la configuración estable del octeto."],
    ["Una reacción química en la cual se libera energía térmica hacia el entorno incrementando la temperatura se clasifica como:", "Reacción exotérmica", "Reacción endotérmica", "Reacción isotérmica neutra", "Reacción adiabática nula", "Las reacciones exotérmicas desprenden calor porque la entalpía de los productos es menor que la de los reactivos."]
  ];

  for (let i = 1; i <= 45; i++) {
    const t = u3Bank[(i - 1) % u3Bank.length];
    questions.push(makeQuestion(
      `asd_7_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Enlaces y Reacciones Químicas", "Unidad 3: Enlaces Químicos y Reacciones (91–135)",
      `Termoquímica y tipos de enlaces: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 18 ? "basico" : i <= 35 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u4Bank = [
    ["¿Cuál es la biomolécula portadora de las instrucciones genéticas hereditarias estructurada en una doble hélice de nucleótidos?", "El ADN (Ácido Desoxirribonucleico)", "El ARN de transferencia", "La hemoglobina globular", "El glucógeno hepático", "El ADN almacena el código genético universal de los seres vivos mediante las bases nitrogenadas A, T, C, G."],
    ["El proceso de división celular reduccional que genera gametos haploides con la mitad de cromosomas se llama:", "Meiosis", "Mitosis somática", "Fisión asexual", "Endomitosis", "La meiosis consta de dos divisiones sucesivas reduciendo el número cromosómico de $2n$ a $n$."],
    ["En la genética mendeliana, un organismo que posee dos alelos idénticos para un gen determinado ($AA$ o $aa$) se clasifica como:", "Homocigoto", "Heterocigoto", "Híbrido polialélico", "Hemizigoto", "El término homocigoto designa la presencia de alelos iguales para un locus dado en cromosomas homólogos."]
  ];

  for (let i = 1; i <= 55; i++) {
    const t = u4Bank[(i - 1) % u4Bank.length];
    questions.push(makeQuestion(
      `asd_7_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Genética y Biología Molecular", "Unidad 4: Biología Celular y Genética Mendeliana (136–190)",
      `Bases moleculares de la herencia: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 20 ? "basico" : i <= 40 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u5Bank = [
    ["¿Qué células del sistema inmunitario producen anticuerpos específicos (inmunoglobulinas) contra antígenos invasores?", "Linfocitos B", "Eritrocitos maduros", "Plaquetas sanguíneas", "Osteoblastos", "Los linfocitos B se diferencian en células plasmáticas que secretan anticuerpos humorales contra antígenos."],
    ["La inmunidad adquirida activa se produce de manera artificial y segura mediante la administración de:", "Vacunas con antígenos atenuados o inactivados", "Antibióticos de amplio espectro", "Sueros hiperinmunes heterólogos", "Antiinflamatorios no esteroideos", "Las vacunas estimulan la memoria inmunitaria sin provocar la patología clínica grave."],
    ["¿Cuál es la primera barrera defensiva física y mecánica del cuerpo humano contra la entrada de microorganismos patógenos?", "La piel intacta y las mucosas epiteliales", "La fagocitosis por neutrófilos", "La fiebre sistémica", "La cascada del complemento", "La piel íntegra y las secreciones mucosas actúan como barrera biológica primaria frente al exterior."]
  ];

  for (let i = 1; i <= 45; i++) {
    const t = u5Bank[(i - 1) % u5Bank.length];
    questions.push(makeQuestion(
      `asd_7_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Inmunología y Fisiología", "Unidad 5: Fisiología Humana e Inmunología (191–235)",
      `Defensas inmunitarias y vacunas: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 18 ? "basico" : i <= 35 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u6Bank = [
    ["La Primera Ley de Newton o Principio de Inercia enuncia que todo cuerpo físico:", "Permanece en reposo o en movimiento rectilíneo uniforme a menos que actúe sobre él una fuerza neta externa", "Aumenta espontáneamente su velocidad de traslación", "Disminuye su masa al acelerar", "Reacciona con una fuerza perpendicular a la acción", "La inercia es la propiedad física de los cuerpos de mantener su estado de reposo o movimiento rectilíneo."],
    ["La Segunda Ley de Newton cuantifica la relación dinámica entre fuerza, masa y aceleración mediante la fórmula fundamental:", "$F = m \\cdot a$", "$E = m \\cdot c^2$", "$v = d \\cdot t$", "$P = m / a$", "La fuerza neta aplicada a un objeto es directamente proporcional a su masa y a la aceleración producida ($F = ma$)."],
    ["La Tercera Ley de Newton (Principio de Acción y Reacción) postula que a toda fuerza ejercida sobre un cuerpo corresponde otra fuerza:", "De igual magnitud, en la misma dirección pero en sentido opuesto", "De menor magnitud pero en el mismo sentido", "De diferente naturaleza gravitatoria", "Que se anula dentro del mismo cuerpo emisor", "Las fuerzas de acción y reacción actúan simultáneamente sobre cuerpos diferentes con sentidos opuestos."]
  ];

  for (let i = 1; i <= 50; i++) {
    const t = u6Bank[(i - 1) % u6Bank.length];
    questions.push(makeQuestion(
      `asd_7_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Mecánica Clásica y Leyes de Newton", "Unidad 6: Cinemática y Leyes del Movimiento de Newton (236–285)",
      `Dinámica clásica y cinemática: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 20 ? "basico" : i <= 38 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u7Bank = [
    ["¿Cuál es la cuenca hidrográfica más extensa e importante de El Salvador, vital para la generación de energía hidroeléctrica?", "La cuenca del Río Lempa", "La cuenca del Río Goascorán", "La cuenca del Río Paz", "La cuenca del Río Jiboa", "El Río Lempa es el principal afluente nacional que alimenta presas como Cerrón Grande, 5 de Noviembre y 15 de Septiembre."],
    ["El fenómeno atmosférico provocado por la acumulación excesiva de gases como el $CO_2$ y el metano que retiene radiación infrarroja se llama:", "Efecto invernadero antropogénico", "Lluvia ácida sulfúrica", "Inversión térmica superficial", "Disminución de la marea negra", "El incremento de gases de efecto invernadero intensifica el calentamiento global de la atmósfera."],
    ["¿Qué porcentaje aproximado de agua dulce superficial o subterránea accesible existe en el planeta con respecto al total de agua?", "Menos del $3\\%$ del agua total", "Más del $50\\%$", "Alrededor del $25\\%$", "El $97\\%$", "El $97\\%$ del agua de la hidrósfera es salada oceánica; menos del $3\\%$ es dulce y la mayoría está congelada en glaciares."]
  ];

  for (let i = 1; i <= 45; i++) {
    const t = u7Bank[(i - 1) % u7Bank.length];
    questions.push(makeQuestion(
      `asd_7_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Hidrología y Cambio Climático", "Unidad 7: Ecología, Recursos Hídricos y Cambio Climático (286–330)",
      `Recursos hídricos y climatología: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 18 ? "basico" : i <= 35 ? "intermedio" : "admision"
    ));
    num++;
  }

  const u8Bank = [
    ["¿Cuál es el modelo científico predominante que explica el origen y expansión acelerada del universo hace unos 13,800 millones de años?", "La teoría del Big Bang", "El modelo del estado estacionario eterno", "La teoría heliocéntrica clásica de Copérnico", "La hipótesis del éter luminífero", "La cosmología contemporánea sustenta la expansión cósmica a partir de una singularidad térmica inicial (Big Bang)."],
    ["Nuestra galaxia de tipo espiral barrada en la cual se encuentra el Sistema Solar se denomina:", "La Vía Láctea", "La Galaxia de Andrómeda", "La Gran Nube de Magallanes", "La Galaxia del Sombrero", "El Sistema Solar orbita en el Brazo de Orión de nuestra galaxia espiral, la Vía Láctea."],
    ["¿Cuál es la capa interna más profunda de la Tierra compuesta principalmente por una aleación metálica densa de hierro y níquel?", "El núcleo terrestre (interno y externo)", "El manto superior astenosférico", "La corteza continental granítica", "La litósfera rígida", "El núcleo terrestre está constituido por una aleación de Fe-Ni; el núcleo externo es líquido y el interno es sólido."]
  ];

  for (let i = 1; i <= 35; i++) {
    const t = u8Bank[(i - 1) % u8Bank.length];
    questions.push(makeQuestion(
      `asd_7_cie_${num}`, num, sId, stId, "Ciencias Naturales", "Cosmología y Geología Profunda", "Unidad 8: Astronomía y Geología Terrestre (331–365)",
      `Astronomía y geósfera terrestre: ${t[0]}`, [t[1], t[2], t[3], t[4]], 0, t[5],
      i <= 15 ? "basico" : i <= 25 ? "intermedio" : "admision"
    ));
    num++;
  }

  return questions;
}

// =============================================================================
// EJECUCIÓN Y GENERACIÓN DE ARCHIVOS
// =============================================================================
console.log('--- GENERANDO BANCO COMPLETO ASD (2,190 PREGUNTAS) ---');

const q5Mat = generate5Matematica();
console.log(`✓ 5.° Grado Matemática: ${q5Mat.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, '5_matematica.json'), JSON.stringify(q5Mat, null, 2), 'utf-8');

const q5Cie = generate5Ciencias();
console.log(`✓ 5.° Grado Ciencias Naturales: ${q5Cie.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, '5_ciencias.json'), JSON.stringify(q5Cie, null, 2), 'utf-8');

const q6Mat = generate6Matematica();
console.log(`✓ 6.° Grado Matemática: ${q6Mat.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, '6_matematica.json'), JSON.stringify(q6Mat, null, 2), 'utf-8');

const q6Cie = generate6Ciencias();
console.log(`✓ 6.° Grado Ciencias Naturales: ${q6Cie.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, '6_ciencias.json'), JSON.stringify(q6Cie, null, 2), 'utf-8');

const q7Mat = generate7Matematica();
console.log(`✓ 7.° Grado Matemática: ${q7Mat.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, '7_matematica.json'), JSON.stringify(q7Mat, null, 2), 'utf-8');

const q7Cie = generate7Ciencias();
console.log(`✓ 7.° Grado Ciencias Naturales: ${q7Cie.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, '7_ciencias.json'), JSON.stringify(q7Cie, null, 2), 'utf-8');

const allQuestions = [...q5Mat, ...q5Cie, ...q6Mat, ...q6Cie, ...q7Mat, ...q7Cie];
console.log(`✓ Total preguntas ASD generadas: ${allQuestions.length} preguntas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, 'all.json'), JSON.stringify(allQuestions, null, 2), 'utf-8');

console.log('Todos los archivos de ASD se han generado exitosamente en public/data/asd/questions/');

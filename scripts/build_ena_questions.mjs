import fs from 'node:fs';
import path from 'node:path';

const ENA_DIR = path.join(process.cwd(), 'public', 'data', 'ena');
const QUESTIONS_DIR = path.join(ENA_DIR, 'questions');
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
    institution: 'ENA',
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
// 1. GENERADOR DE MATEMÁTICAS ENA (350 PREGUNTAS)
// =============================================================================
function generateEnaMatematicas() {
  const questions = [];
  let num = 1;
  const sId = "ena_matematicas";
  const subjName = "Matemáticas";

  function addQ(topic, sectionTitle, stmt, opts, corrIdx, expl, level) {
    const id = `ena_mat_q${num}`;
    questions.push(makeQuestion(id, num, sId, sId, subjName, topic, sectionTitle, stmt, opts, corrIdx, expl, level));
    num++;
  }

  // ---------------------------------------------------------------------------
  // Sección 1: Unidades de Medida Agrícolas y Conversiones (1–70)
  // ---------------------------------------------------------------------------
  const sec1 = "Unidades de Medida Agrícolas y Conversiones (1–70)";

  for (let i = 0; i < 70; i++) {
    const type = i % 5;
    if (type === 0) {
      // Manzanas a metros cuadrados
      const mz = 2 + (i % 8);
      const m2 = mz * 7000;
      addQ(
        "Medidas de Superficie Agraria",
        sec1,
        `En El Salvador, una manzana ($1\\text{ mz}$) de terreno equivale a $10,000\\text{ varas cuadradas}$ (aproximadamente $7,000\\text{ m}^2$). ¿A cuántos metros cuadrados equivale una parcela agrícola de $${mz}\\text{ mz}$?`,
        [
          `$${m2.toLocaleString()}\\text{ m}^2$`,
          `$${(m2 + 5000).toLocaleString()}\\text{ m}^2$`,
          `$${(m2 - 3500).toLocaleString()}\\text{ m}^2$`,
          `$${(mz * 1000).toLocaleString()}\\text{ m}^2$`
        ],
        0,
        `Multiplicando la cantidad de manzanas por la equivalencia agraria habitual ($7,000\\text{ m}^2/\\text{mz}$): $${mz} \\times 7,000\\text{ m}^2 = ${m2.toLocaleString()}\\text{ m}^2$.`,
        'basico'
      );
    } else if (type === 1) {
      // Quintales y arrobas
      const qq = 3 + (i % 7);
      const arrobas = qq * 4;
      const libras = qq * 100;
      addQ(
        "Unidades de Peso Agrícola",
        sec1,
        `Un productor de granos básicos cosecha $${qq}\\text{ quintales (qq)}$ de maíz blanco. ¿A cuántas arrobas (@) y a cuántas libras (lb) equivale esta cosecha?`,
        [
          `$${arrobas}\\text{ arrobas (@) y } ${libras}\\text{ libras (lb)}$`,
          `$${arrobas + 2}\\text{ arrobas (@) y } ${libras + 50}\\text{ libras (lb)}$`,
          `$${qq * 2}\\text{ arrobas (@) y } ${libras / 2}\\text{ libras (lb)}$`,
          `$${arrobas}\\text{ arrobas (@) y } ${qq * 25}\\text{ libras (lb)}$`
        ],
        0,
        `En el sistema de medidas agrícolas: $1\\text{ quintal (qq)} = 4\\text{ arrobas (@)} = 100\\text{ libras (lb)}$. Por tanto, $${qq}\\text{ qq} \\times 4 = ${arrobas}\\text{ @}$ y $${qq} \\times 100 = ${libras}\\text{ lb}$.`,
        'basico'
      );
    } else if (type === 2) {
      // Capacidad de tanques y litros a galones
      const gal = 20 + (i % 15) * 5;
      const litros = (gal * 3.785).toFixed(1);
      addQ(
        "Unidades de Capacidad y Riego",
        sec1,
        `Para preparar una mezcla foliar se requiere un volumen de $${gal}\\text{ galones}$ de agua. Considerando que $1\\text{ galón estadounidense} \\approx 3.785\\text{ litros}$, ¿cuántos litros de agua se deben medir exactamente?`,
        [
          `$${litros}\\text{ litros}$`,
          `$${(gal * 2.5).toFixed(1)}\\text{ litros}$`,
          `$${(gal * 4.5).toFixed(1)}\\text{ litros}$`,
          `$${(gal * 1.5).toFixed(1)}\\text{ litros}$`
        ],
        0,
        `Aplicando el factor de conversión volumétrico: $${gal}\\text{ gal} \\times 3.785\\text{ L/gal} = ${litros}\\text{ L}$.`,
        'intermedio'
      );
    } else if (type === 3) {
      // Hectáreas a metros cuadrados
      const ha = 1.5 + (i % 6) * 0.5;
      const m2 = ha * 10000;
      addQ(
        "Medidas de Superficie Internacional",
        sec1,
        `Una finca agroforestal registrada ante el Ministerio de Agricultura posee $${ha}\\text{ hectáreas (ha)}$. Sabiendo que $1\\text{ ha} = 10,000\\text{ m}^2$, ¿cuál es su extensión en metros cuadrados?`,
        [
          `$${m2.toLocaleString()}\\text{ m}^2$`,
          `$${(m2 / 10).toLocaleString()}\\text{ m}^2$`,
          `$${(m2 * 2).toLocaleString()}\\text{ m}^2$`,
          `$${(m2 - 5000).toLocaleString()}\\text{ m}^2$`
        ],
        0,
        `La hectárea es una unidad de superficie equivalente a un cuadrado de $100\\text{ m} \\times 100\\text{ m} = 10,000\\text{ m}^2$. Por ende, $${ha} \\times 10,000\\text{ m}^2 = ${m2.toLocaleString()}\\text{ m}^2$.`,
        'basico'
      );
    } else {
      // Dosis por manzana
      const kgPorMz = 50 + (i % 5) * 10;
      const areaMz = 4;
      const totalKg = kgPorMz * areaMz;
      addQ(
        "Problemas de Conversión y Dosificación",
        sec1,
        `Se recomienda aplicar fertilizante a razón de $${kgPorMz}\\text{ kg}$ por cada manzana de cultivo de hortalizas. ¿Cuántos kilogramos totales de fertilizante se necesitan para un lote de $${areaMz}\\text{ manzanas}$?`,
        [
          `$${totalKg}\\text{ kg}$`,
          `$${totalKg + 50}\\text{ kg}$`,
          `$${totalKg - 30}\\text{ kg}$`,
          `$${kgPorMz + areaMz}\\text{ kg}$`
        ],
        0,
        `Multiplicando la dosis unitaria por la superficie del lote: $${kgPorMz}\\text{ kg/mz} \\times ${areaMz}\\text{ mz} = ${totalKg}\\text{ kg}$.`,
        'basico'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 2: Aritmética Aplicada, Regla de Tres y Porcentajes (71–140)
  // ---------------------------------------------------------------------------
  const sec2 = "Aritmética Aplicada, Regla de Tres y Porcentajes (71–140)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      // Regla de tres simple directa
      const obreros1 = 4;
      const quintales1 = 20 + (i % 10) * 2;
      const obreros2 = 8;
      const quintales2 = quintales1 * 2;
      addQ(
        "Regla de Tres Simple Directa",
        sec2,
        `Si $${obreros1}\\text{ jornaleros}$ recolectan $${quintales1}\\text{ quintales}$ de café en un día de faena, ¿cuántos quintales recolectarán $${obreros2}\\text{ jornaleros}$ bajo las mismas condiciones laborales?`,
        [
          `$${quintales2}\\text{ quintales}$`,
          `$${quintales2 - 5}\\text{ quintales}$`,
          `$${quintales1 + 8}\\text{ quintales}$`,
          `$${quintales2 + 10}\\text{ quintales}$`
        ],
        0,
        `Existe una relación directamente proporcional: a mayor número de trabajadores, mayor recolección. Despejando: $x = \\frac{${obreros2} \\times ${quintales1}}{${obreros1}} = ${quintales2}\\text{ quintales}$.`,
        'basico'
      );
    } else if (type === 1) {
      // Regla de tres simple inversa
      const tractores1 = 2;
      const dias1 = 12;
      const tractores2 = 4;
      const dias2 = (tractores1 * dias1) / tractores2;
      addQ(
        "Regla de Tres Simple Inversa",
        sec2,
        `Si $${tractores1}\\text{ tractores}$ preparan el suelo de un tablón de cultivo en $${dias1}\\text{ días}$, ¿cuántos días tardarán $${tractores2}\\text{ tractores}$ idénticos en realizar el mismo trabajo?`,
        [
          `$${dias2}\\text{ días}$`,
          `$${dias2 * 2}\\text{ días}$`,
          `$${dias1 + 2}\\text{ días}$`,
          `$${dias2 + 3}\\text{ días}$`
        ],
        0,
        `La relación es inversamente proporcional: al duplicar la maquinaria de labranza, el tiempo requerido se reduce a la mitad: $x = \\frac{${tractores1} \\times ${dias1}}{${tractores2}} = \\frac{${tractores1 * dias1}}{${tractores2}} = ${dias2}\\text{ días}$.`,
        'intermedio'
      );
    } else if (type === 2) {
      // Porcentaje de germinación
      const sembradas = 200;
      const nacidas = 170 + (i % 15);
      const porcentaje = ((nacidas / sembradas) * 100).toFixed(1);
      addQ(
        "Porcentajes en Semillas y Germinación",
        sec2,
        `En una prueba de viabilidad de semillas de tomate se colocan $${sembradas}\\text{ semillas}$ en una bandeja de germinación. Si germinan exitosamente $${nacidas}\\text{ semillas}$, ¿cuál es el porcentaje de germinación del lote?`,
        [
          `$${porcentaje}\\%$`,
          `$${(parseFloat(porcentaje) - 5).toFixed(1)}\\%$`,
          `$${(parseFloat(porcentaje) + 4).toFixed(1)}\\%$`,
          `$${(nacidas / 2).toFixed(1)}\\%$`
        ],
        0,
        `El porcentaje de germinación se calcula mediante: $\\%\\,\\text{Germinación} = \\frac{\\text{Semillas germinadas}}{\\text{Semillas sembradas}} \\times 100 = \\frac{${nacidas}}{${sembradas}} \\times 100 = ${porcentaje}\\%$.`,
        'basico'
      );
    } else {
      // Interés simple agrícola
      const c = 2000 + (i % 10) * 500;
      const r = 6; // 6% anual
      const t = 2; // 2 años
      const interes = (c * r * t) / 100;
      addQ(
        "Cálculo de Interés en Créditos Agrícolas",
        sec2,
        `Un agricultor solicita un crédito bancario de avío por valor de $\\$${c.toLocaleString()}$ a una tasa de interés simple anual del $${r}\\%$ durante $${t}\\text{ años}$. ¿Cuánto pagará en concepto de intereses?`,
        [
          `$\\$${interes.toLocaleString()}$`,
          `$\\$${(interes + 100).toLocaleString()}$`,
          `$\\$${(interes / 2).toLocaleString()}$`,
          `$\\$${(c * 0.1).toLocaleString()}$`
        ],
        0,
        `Por la fórmula del interés simple: $I = C \\cdot r \\cdot t = ${c} \\times 0.0${r} \\times ${t} = \\$${interes.toLocaleString()}$.`,
        'intermedio'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 3: Área y Volumen de Figuras Geométricas en el Campo (141–210)
  // ---------------------------------------------------------------------------
  const sec3 = "Área y Volumen de Figuras Geométricas en el Campo (141–210)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      // Área de reservorio rectangular
      const largo = 20 + (i % 10);
      const ancho = 10 + (i % 6);
      const area = largo * ancho;
      addQ(
        "Geometría Plana en Parcelas",
        sec3,
        `Un estanque piscícola para cría de tilapias tiene forma rectangular de $${largo}\\text{ m}$ de longitud por $${ancho}\\text{ m}$ de ancho. ¿Cuál es su área superficial?`,
        [
          `$${area}\\text{ m}^2$`,
          `$${(largo + ancho) * 2}\\text{ m}^2$`,
          `$${area + 30}\\text{ m}^2$`,
          `$${area / 2}\\text{ m}^2$`
        ],
        0,
        `El área de un rectángulo es el producto de su base por su altura: $A = \\text{largo} \\times \\text{ancho} = ${largo}\\text{ m} \\times ${ancho}\\text{ m} = ${area}\\text{ m}^2$.`,
        'basico'
      );
    } else if (type === 1) {
      // Volumen de silo cilíndrico
      const r = 2 + (i % 4);
      const h = 5 + (i % 5);
      const vol = (Math.PI * r * r * h).toFixed(1);
      addQ(
        "Volumen de Silos para Ensilaje",
        sec3,
        `Un silo cilíndrico para almacenamiento de forraje verde tiene un radio interior de $r = ${r}\\text{ m}$ y una altura de $h = ${h}\\text{ m}$. Calcula su capacidad volumétrica (usando $\\pi \\approx 3.1416$):`,
        [
          `$V \\approx ${vol}\\text{ m}^3$`,
          `$V \\approx ${(Math.PI * r * h).toFixed(1)}\\text{ m}^3$`,
          `$V \\approx ${(vol * 1.5).toFixed(1)}\\text{ m}^3$`,
          `$V \\approx ${(r * h * 4).toFixed(1)}\\text{ m}^3$`
        ],
        0,
        `El volumen de un cilindro recto viene dado por $V = \\pi r^2 h = 3.1416 \\times (${r})^2 \\times ${h} = 3.1416 \\times ${r * r} \\times ${h} \\approx ${vol}\\text{ m}^3$.`,
        'intermedio'
      );
    } else if (type === 2) {
      // Área de parcela trapezoidal
      const B = 40 + (i % 10);
      const b = 20 + (i % 8);
      const h = 15;
      const areaTrap = ((B + b) * h) / 2;
      addQ(
        "Cálculo de Área de Terrenos Irregulares",
        sec3,
        `Una terraza de cultivo tiene forma de trapecio con base mayor $B = ${B}\\text{ m}$, base menor $b = ${b}\\text{ m}$ y altura $h = ${h}\\text{ m}$. ¿Cuál es su área total?`,
        [
          `$${areaTrap}\\text{ m}^2$`,
          `$${(B + b) * h}\\text{ m}^2$`,
          `$${areaTrap + 50}\\text{ m}^2$`,
          `$${B * h}\\text{ m}^2$`
        ],
        0,
        `El área del trapecio se determina mediante la fórmula $A = \\frac{(B + b) \\times h}{2} = \\frac{(${B} + ${b}) \\times ${h}}{2} = \\frac{${B + b} \\times ${h}}{2} = ${areaTrap}\\text{ m}^2$.`,
        'intermedio'
      );
    } else {
      // Volumen de reservorio prismático de agua
      const l = 10;
      const w = 6;
      const prof = 2 + (i % 3);
      const cap = l * w * prof;
      addQ(
        "Volumen de Reservorios de Riego",
        sec3,
        `Una fosa o reservorio para agua de riego tiene forma de prisma rectangular con dimensiones de $${l}\\text{ m}$ de largo, $${w}\\text{ m}$ de ancho y $${prof}\\text{ m}$ de profundidad. ¿Cuál es su capacidad en metros cúbicos ($1\\text{ m}^3 = 1,000\\text{ L}$)?`,
        [
          `$${cap}\\text{ m}^3$ (equivalente a $${(cap * 1000).toLocaleString()}\\text{ litros}$)`,
          `$${cap * 2}\\text{ m}^3$`,
          `$${l + w + prof}\\text{ m}^3$`,
          `$${cap / 2}\\text{ m}^3$`
        ],
        0,
        `El volumen de un prisma rectangular es $V = \\text{largo} \\times \\text{ancho} \\times \\text{profundidad} = ${l} \\times ${w} \\times ${prof} = ${cap}\\text{ m}^3$.`,
        'basico'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 4: Álgebra, Factorización y Ecuaciones (211–280)
  // ---------------------------------------------------------------------------
  const sec4 = "Álgebra, Factorización y Ecuaciones (211–280)";

  for (let i = 0; i < 70; i++) {
    const type = i % 3;
    if (type === 0) {
      // Ecuación lineal de costos
      const costoFijo = 50 + (i % 10) * 10;
      const costoVar = 3 + (i % 4);
      const total = costoFijo + costoVar * 20;
      addQ(
        "Ecuaciones Lineales en Producción",
        sec4,
        `El costo total de producción $C$ de una hortaliza se expresa mediante la ecuación lineal $C = ${costoVar}x + ${costoFijo}$, donde $x$ es el número de cajas cosechadas. Si el costo total facturado fue de $\\$${total}$, ¿cuántas cajas $x$ se produjeron?`,
        [
          `$x = 20\\text{ cajas}$`,
          `$x = 15\\text{ cajas}$`,
          `$x = 25\\text{ cajas}$`,
          `$x = 30\\text{ cajas}$`
        ],
        0,
        `Planteando la ecuación: $${costoVar}x + ${costoFijo} = ${total} \\implies ${costoVar}x = ${total} - ${costoFijo} = ${total - costoFijo} \\implies x = \\frac{${total - costoFijo}}{${costoVar}} = 20\\text{ cajas}$.`,
        'intermedio'
      );
    } else if (type === 1) {
      // Factorización trinomio
      const a = 2 + (i % 5);
      const b = 3 + (i % 6);
      const bSum = a + b;
      const cProd = a * b;
      addQ(
        "Factorización de Expresiones Algebraicas",
        sec4,
        `Al factorizar completamente el trinomio cuadrático $x^2 + ${bSum}x + ${cProd}$, se obtiene:`,
        [
          `$(x + ${a})(x + ${b})$`,
          `$(x - ${a})(x - ${b})$`,
          `$(x + ${a + 1})(x + ${b - 1})$`,
          `$(x + ${cProd})(x + 1)$`
        ],
        0,
        `Buscamos dos números que sumados den $${bSum}$ y multiplicados den $${cProd}$. Dichos números son $${a}$ y $${b}$, por lo que la factorización es $(x + ${a})(x + ${b})$.`,
        'basico'
      );
    } else {
      // Ecuación cuadrática
      const r = 4 + (i % 6);
      const rSq = r * r;
      addQ(
        "Ecuaciones Cuadráticas",
        sec4,
        `¿Cuáles son las soluciones reales de la ecuación cuadrática pura $x^2 - ${rSq} = 0$?`,
        [
          `$x_1 = ${r},\\; x_2 = -${r}$`,
          `$x = ${r}$ (única raíz)`,
          `$x_1 = ${rSq},\\; x_2 = -${rSq}$`,
          `$x_1 = 0,\\; x_2 = ${r}$`
        ],
        0,
        `Despejando: $x^2 = ${rSq} \\implies x = \\pm \\sqrt{${rSq}} = \\pm ${r}$, teniendo dos soluciones simétricas $x_1 = ${r}$ y $x_2 = -${r}$.`,
        'basico'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 5: Trigonometría, Recta, Conjuntos y Funciones (281–350)
  // ---------------------------------------------------------------------------
  const sec5 = "Trigonometría, Recta, Conjuntos y Funciones (281–350)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      // Pendiente de terreno
      const dy = 15 + (i % 10);
      const dx = 100;
      const pct = dy;
      addQ(
        "Pendiente y Topografía Agrícola",
        sec5,
        `En un levantamiento topográfico de una ladera, el terreno se eleva $${dy}\\text{ metros}$ en una distancia horizontal de $${dx}\\text{ metros}$. ¿Cuál es la pendiente porcentual del terreno?`,
        [
          `$${pct}\\%$`,
          `$${pct / 2}\\%$`,
          `$${pct * 2}\\%$`,
          `$${pct + 10}\\%$`
        ],
        0,
        `La pendiente en porcentaje se calcula como $m\\% = \\left(\\frac{\\text{Desnivel vertical}}{\\text{Distancia horizontal}}\\right) \\times 100 = \\left(\\frac{${dy}}{${dx}}\\right) \\times 100 = ${pct}\\%$.`,
        'intermedio'
      );
    } else if (type === 1) {
      // Identidad trigonométrica
      addQ(
        "Identidades Trigonométricas",
        sec5,
        `¿Cuál es la relación trigonométrica que define la tangente de un ángulo agudo $\\theta$ en función del seno y del coseno?`,
        [
          `$\\tan(\\theta) = \\frac{\\sin(\\theta)}{\\cos(\\theta)}$`,
          `$\\tan(\\theta) = \\frac{\\cos(\\theta)}{\\sin(\\theta)}$`,
          `$\\tan(\\theta) = \\sin(\\theta) \\cdot \\cos(\\theta)$`,
          `$\\tan(\\theta) = \\sin^2(\\theta) + \\cos^2(\\theta)$`
        ],
        0,
        `Por definición de razón por cociente: $\\tan(\\theta) = \\frac{\\text{Cateto Opuesto}}{\\text{Cateto Adyacente}} = \\frac{\\sin(\\theta)}{\\cos(\\theta)}$.`,
        'basico'
      );
    } else if (type === 2) {
      // Teoría de conjuntos en agricultura
      addQ(
        "Teoría de Conjuntos",
        sec5,
        `Si el conjunto $A$ representa los cultivos de hortalizas y el conjunto $B$ los cultivos bajo riego por goteo, ¿qué operación de conjuntos representa a los cultivos que son simultáneamente hortalizas y poseen riego por goteo?`,
        [
          `La intersección: $A \\cap B$`,
          `La unión: $A \\cup B$`,
          `La diferencia: $A \\setminus B$`,
          `El complemento: $A'$`
        ],
        0,
        `La intersección de dos conjuntos ($A \\cap B$) comprende exclusivamente a los elementos que pertenecen al mismo tiempo a ambos conjuntos.`,
        'basico'
      );
    } else {
      // Logaritmos y pH
      addQ(
        "Funciones y Logaritmos",
        sec5,
        `La acidez del suelo se mide mediante la escala de $\\text{pH}$, definida logarítmicamente como $\\text{pH} = -\\log_{10}[\\text{H}^+]$. Si la concentración de iones hidrógeno es $[\\text{H}^+] = 10^{-6}\\text{ M}$, ¿cuál es el $\\text{pH}$ del suelo?`,
        [
          `$\\text{pH} = 6$`,
          `$\\text{pH} = -6$`,
          `$\\text{pH} = 10$`,
          `$\\text{pH} = 8$`
        ],
        0,
        `Aplicando propiedades de logaritmos: $\\text{pH} = -\\log_{10}(10^{-6}) = -(-6) = 6$. Un suelo con $\\text{pH} = 6$ es ligeramente ácido.`,
        'intermedio'
      );
    }
  }

  return questions;
}

// =============================================================================
// 2. GENERADOR DE QUÍMICA ENA (350 PREGUNTAS)
// =============================================================================
function generateEnaQuimica() {
  const questions = [];
  let num = 1;
  const sId = "ena_quimica";
  const subjName = "Química";

  function addQ(topic, sectionTitle, stmt, opts, corrIdx, expl, level) {
    const id = `ena_qui_q${num}`;
    questions.push(makeQuestion(id, num, sId, sId, subjName, topic, sectionTitle, stmt, opts, corrIdx, expl, level));
    num++;
  }

  // ---------------------------------------------------------------------------
  // Sección 1: Definición, Ramas y Estados de la Materia (1–70)
  // ---------------------------------------------------------------------------
  const sec1 = "Definición, Ramas y Estados de la Materia (1–70)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "Definición y Ramas de la Química",
        sec1,
        `¿Qué rama de la química se dedica específicamente al estudio de la composición química del suelo, los fertilizantes, pesticidas y la nutrición mineral de las plantas cultivadas?`,
        [
          "La agroquímica (o química agrícola)",
          "La química nuclear",
          "La astroquímica",
          "La química forense"
        ],
        0,
        "La agroquímica es la disciplina que aplica los principios de la química al mejoramiento de los procesos agrícolas, la fertilidad del suelo y el control fitosanitario.",
        'basico'
      );
    } else if (type === 1) {
      addQ(
        "Propiedades Físicas y Químicas",
        sec1,
        `¿Cuál de las siguientes propiedades de un plaguicida corresponde a una propiedad física y no química?`,
        [
          "Punto de ebullición y solubilidad en agua",
          "Capacidad de oxidarse al contacto con el aire",
          "Reactividad frente a bases fuertes",
          "Poder de corrosión sobre metales"
        ],
        0,
        "El punto de ebullición y la solubilidad son propiedades físicas que pueden determinarse sin alterar la identidad ni la composición química de la sustancia.",
        'basico'
      );
    } else if (type === 2) {
      addQ(
        "Estados de la Materia y Cambios de Fase",
        sec1,
        `El proceso por el cual el agua líquida en la superficie de las hojas de un cultivo pasa directamente al estado de vapor por efecto del calor solar se denomina:`,
        [
          "Evaporación",
          "Solidificación",
          "Condensación",
          "Sublimación inversa"
        ],
        0,
        "La evaporación es la transición de fase líquida a fase gaseosa que ocurre a cualquier temperatura por debajo del punto de ebullición.",
        'basico'
      );
    } else {
      addQ(
        "Clasificación de la Materia",
        sec1,
        `Una solución de fertilizante foliar completamente disuelta en agua limpia sin partículas visibles en suspensión se clasifica como:`,
        [
          "Una mezcla homogénea (disolución)",
          "Una mezcla heterogénea grosera",
          "Un compuesto químico puro",
          "Un elemento químico simple"
        ],
        0,
        "Una mezcla homogénea presenta una sola fase uniforme en toda su extensión, sin distinción de sus componentes a simple vista ni al microscopio óptico.",
        'basico'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 2: El Átomo y su Estructura Nuclear (71–140)
  // ---------------------------------------------------------------------------
  const sec2 = "El Átomo y su Estructura Nuclear (71–140)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "Estructura Nuclear del Átomo",
        sec2,
        `¿Qué partículas subatómicas residen en el núcleo del átomo y concentran casi la totalidad de su masa?`,
        [
          "Los protones y los neutrones (nucleones)",
          "Los electrones y los fotones",
          "Únicamente los electrones de valencia",
          "Los positrones y los rayos gamma"
        ],
        0,
        "El núcleo atómico está compuesto por protones (con carga positiva) y neutrones (sin carga eléctrica), que aportan más del 99.9% de la masa del átomo.",
        'basico'
      );
    } else if (type === 1) {
      const z = 6 + (i % 10);
      const n = z;
      const a = z + n;
      addQ(
        "Número Atómico y Número de Masa",
        sec2,
        `Un átomo neutro posee un número atómico $Z = ${z}$ y tiene $${n}\\text{ neutrones}$ en su núcleo. ¿Cuál es su número másico ($A$) y cuántos electrones posee?`,
        [
          `$A = ${a}$ y posee $${z}\\text{ electrones}$`,
          `$A = ${z}$ y posee $${n}\\text{ electrones}$`,
          `$A = ${a + 2}$ y posee $${z + 1}\\text{ electrones}$`,
          `$A = ${n}$ y posee $${a}\\text{ electrones}$`
        ],
        0,
        `El número másico es la suma de protones y neutrones: $A = Z + n = ${z} + ${n} = ${a}$. Por ser un átomo neutro, el número de electrones es igual al número atómico $Z = ${z}$.`,
        'intermedio'
      );
    } else if (type === 2) {
      addQ(
        "Iones de Importancia en Fertirriego",
        sec2,
        `Cuando un átomo de calcio ($\\text{Ca}$) pierde 2 electrones para ser absorbido por las raíces de una planta, se transforma en un:`,
        [
          "Catión divalente ($\\text{Ca}^{2+}$)",
          "Anión divalente ($\\text{Ca}^{2-}$)",
          "Isótopo radiactivo",
          "Átomo neutro excitado"
        ],
        0,
        "La pérdida de electrones cargados negativamente genera un exceso de cargas positivas en el núcleo, formando un catión $\\text{Ca}^{2+}$.",
        'basico'
      );
    } else {
      addQ(
        "Isótopos",
        sec2,
        `Los átomos de un mismo elemento químico que poseen el mismo número de protones ($Z$) pero diferente número de neutrones en su núcleo se denominan:`,
        [
          "Isótopos",
          "Isóbaros",
          "Isómeros",
          "Alótropos"
        ],
        0,
        "Los isótopos son formas atómicas del mismo elemento químico con idéntico número atómico pero distinta masa atómica debido a la variación de neutrones.",
        'basico'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 3: La Tabla Periódica y Familias de Elementos (141–210)
  // ---------------------------------------------------------------------------
  const sec3 = "La Tabla Periódica y Familias de Elementos (141–210)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "Macronutrientes Primarios en la Tabla Periódica",
        sec3,
        `En fertilización agrícola, la fórmula comercial 'NPK' hace referencia a tres elementos químicos indispensables para las plantas. ¿Cuáles son?`,
        [
          "Nitrógeno ($\\text{N}$), Fósforo ($\\text{P}$) y Potasio ($\\text{K}$)",
          "Níquel ($\\text{Ni}$), Plomo ($\\text{Pb}$) y Kriptón ($\\text{Kr}$)",
          "Sodio ($\\text{Na}$), Platino ($\\text{Pt}$) y Potasio ($\\text{K}$)",
          "Nitrógeno ($\\text{N}$), Flúor ($\\text{F}$) y Calcio ($\\text{Ca}$)"
        ],
        0,
        "Los tres macronutrientes primarios esenciales son el Nitrógeno ($\\text{N}$, grupo 15), el Fósforo ($\\text{P}$, grupo 15) y el Potasio ($\\text{K}$, metal alcalino del grupo 1).",
        'basico'
      );
    } else if (type === 1) {
      addQ(
        "Organización de la Tabla Periódica",
        sec3,
        `En la tabla periódica moderna, los elementos químicos están ordenados de izquierda a derecha y de arriba hacia abajo en función creciente de:`,
        [
          "Su número atómico ($Z$, cantidad de protones)",
          "Su masa atómica relativa redondeada",
          "Su radio atómico en picómetros",
          "Su densidad en estado sólido"
        ],
        0,
        "Según la Ley Periódica de Moseley, las propiedades químicas y físicas de los elementos son funciones periódicas de sus números atómicos crecientes.",
        'basico'
      );
    } else if (type === 2) {
      addQ(
        "Familias y Metales Alcalinotérreos",
        sec3,
        `¿A qué grupo o familia de la tabla periódica pertenecen el magnesio ($\\text{Mg}$) y el calcio ($\\text{Ca}$), fundamentales en la estructura de la clorofila y en las paredes celulares vegetales?`,
        [
          "Metales alcalinotérreos (Grupo 2)",
          "Metales alcalinos (Grupo 1)",
          "Halógenos (Grupo 17)",
          "Metales de transición del bloque d"
        ],
        0,
        "El Magnesio y el Calcio son elementos metálicos del Grupo 2 (alcalinotérreos) que poseen dos electrones de valencia y forman cationes $+2$.",
        'intermedio'
      );
    } else {
      addQ(
        "Electronegatividad Periódica",
        sec3,
        `En la tabla periódica, ¿cuál es la tendencia general de la electronegatividad a lo largo de un periodo (de izquierda a derecha)?`,
        [
          "Aumenta de izquierda a derecha hacia los no metales",
          "Disminuye progresivamente de izquierda a derecha",
          "Permanece constante en todos los periodos",
          "Cae a cero en el centro de la tabla"
        ],
        0,
        "Al avanzar de izquierda a derecha en un periodo, la carga nuclear efectiva aumenta, atrayendo con mayor fuerza los electrones de enlace hacia el átomo.",
        'intermedio'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 4: Enlaces Químicos y Estructura Molecular (211–280)
  // ---------------------------------------------------------------------------
  const sec4 = "Enlaces Químicos y Estructura Molecular (211–280)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "Enlace Iónico en Fertilizantes",
        sec4,
        `El cloruro de potasio ($\\text{KCl}$) es una de las principales fuentes de potasio en agricultura. ¿Qué tipo de enlace químico mantiene unidos al potasio (metal) y al cloro (no metal)?`,
        [
          "Enlace iónico (electrovalente)",
          "Enlace covalente no polar",
          "Enlace metálico puro",
          "Enlace peptídico"
        ],
        0,
        "La transferencia de un electrón desde el potasio ($\text{K}$) hacia el cloro ($\text{Cl}$) genera iones $\\text{K}^+$ y $\\text{Cl}^-$ unidos por fuerzas electrostáticas intensas (enlace iónico).",
        'basico'
      );
    } else if (type === 1) {
      addQ(
        "Enlace Covalente en Moléculas Orgánicas",
        sec4,
        `En los tejidos vegetales, las moléculas de glucosa y celulosa están unidas principalmente por enlaces formados por la compartición de pares de electrones entre no metales. Este enlace se denomina:`,
        [
          "Enlace covalente",
          "Enlace iónico",
          "Enlace metálico",
          "Fuerzas de London exclusivas"
        ],
        0,
        "El enlace covalente se forma cuando dos átomos no metálicos comparten uno o más pares de electrones para alcanzar estabilidad electrónica.",
        'basico'
      );
    } else if (type === 2) {
      addQ(
        "Regla del Octeto",
        sec4,
        `¿Qué postula la regla del octeto propuesta por Gilbert Lewis respecto a la estabilidad de la mayoría de los átomos representativos al formar enlaces?`,
        [
          "Tienden a completar 8 electrones en su capa de valencia más externa",
          "Deben poseer exactamente 8 protones en su núcleo",
          "Deben compartir 8 pares de electrones con un solo vecino",
          "Solo pueden enlazarse con 8 átomos a la vez"
        ],
        0,
        "La regla del octeto establece que los átomos ganan, pierden o comparten electrones para alcanzar una configuración electrónica estable similar a la de un gas noble (8 electrones de valencia).",
        'basico'
      );
    } else {
      addQ(
        "Puentes de Hidrógeno y el Agua",
        sec4,
        `¿Qué tipo de interacción intermolecular es responsable de la elevada cohesión, capilaridad y alto calor específico del agua en las plantas?`,
        [
          "Enlaces o puentes de hidrógeno",
          "Fuerzas de dispersión débiles",
          "Atracción electrostática iónica",
          "Enlaces covalentes triples"
        ],
        0,
        "Los puentes de hidrógeno son interacciones dipolo-dipolo intensas entre el átomo de hidrógeno de una molécula de agua y el oxígeno electronegativo de otra molécula adyacente.",
        'intermedio'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 5: Reacciones Químicas y Agroquímica (281–350)
  // ---------------------------------------------------------------------------
  const sec5 = "Reacciones Químicas y Agroquímica (281–350)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "Neutralización y Encalado de Suelos",
        sec5,
        `Para corregir la acidez de un suelo agrícola se aplica cal viva ($\\text{CaO}$) o cal apagada ($\\text{Ca(OH)}_2$). Al reaccionar una base con los ácidos del suelo se produce una reacción de:`,
        [
          "Neutralización (ácido + base $\\to$ sal + agua)",
          "Combustión exotérmica completa",
          "Descomposición térmica forzada",
          "Polimerización por adición"
        ],
        0,
        "Una reacción de neutralización ocurre entre un ácido y una base para formar una sal neutra y agua, elevando el pH del suelo hacia niveles óptimos para el cultivo.",
        'basico'
      );
    } else if (type === 1) {
      addQ(
        "Tipos de Reacciones Químicas",
        sec5,
        `La síntesis industrial de amoníaco anhidro mediante el proceso Haber-Bosch: $\\text{N}_2(g) + 3\\text{H}_2(g) \\longrightarrow 2\\text{NH}_3(g)$, se clasifica como una reacción de:`,
        [
          "Síntesis o combinación",
          "Descomposición o análisis",
          "Desplazamiento simple",
          "Precipitación de sales"
        ],
        0,
        "En una reacción de síntesis, dos o más reactivos simples se combinan químicamente para formar un único producto más complejo.",
        'basico'
      );
    } else if (type === 2) {
      addQ(
        "Balanceo de Ecuaciones y Conservación",
        sec5,
        `Al balancear por tanteo la reacción de formación del óxido de calcio: $2\\text{Ca} + \\text{O}_2 \\longrightarrow 2\\text{CaO}$, ¿qué ley fundamental de la química se garantiza?`,
        [
          "La Ley de Conservación de la Masa (Lavoisier)",
          "La Ley de las Presiones Parciales de Dalton",
          "La Ley de Difusión de Graham",
          "El Principio de Exclusión de Pauli"
        ],
        0,
        "El balanceo químico comprueba que la masa total de los reactivos es exactamente igual a la masa total de los productos en un sistema cerrado.",
        'basico'
      );
    } else {
      addQ(
        "pH y Fertilidad del Suelo",
        sec5,
        `La mayoría de cultivos agrícolas en El Salvador (como maíz, frijol y café) presentan su mejor absorción de nutrientes en suelos cuyo $\\text{pH}$ se encuentra en el rango de:`,
        [
          "$6.0$ a $7.0$ (ligeramente ácido a neutro)",
          "$1.0$ a $3.0$ (extremadamente ácido)",
          "$11.0$ a $13.0$ (fuertemente alcalino)",
          "Exclusivamente en $\\text{pH} = 14$"
        ],
        0,
        "En un rango de pH entre 6.0 y 7.0 los macronutrientes (N, P, K, Ca, Mg) y micronutrientes se encuentran en formas químicas asimilables por las raíces vegetales.",
        'intermedio'
      );
    }
  }

  return questions;
}

// =============================================================================
// 3. GENERADOR DE BIOLOGÍA ENA (350 PREGUNTAS)
// =============================================================================
function generateEnaBiologia() {
  const questions = [];
  let num = 1;
  const sId = "ena_biologia";
  const subjName = "Biología";

  function addQ(topic, sectionTitle, stmt, opts, corrIdx, expl, level) {
    const id = `ena_bio_q${num}`;
    questions.push(makeQuestion(id, num, sId, sId, subjName, topic, sectionTitle, stmt, opts, corrIdx, expl, level));
    num++;
  }

  // ---------------------------------------------------------------------------
  // Sección 1: Materia Viva y Niveles de Organización (1–70)
  // ---------------------------------------------------------------------------
  const sec1 = "Materia Viva y Niveles de Organización (1–70)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "Características de los Seres Vivos",
        sec1,
        `¿Cómo se denomina la capacidad biológica que poseen los organismos vivos para mantener estable su medio interno (temperatura, balance hídrico y osmótico) frente a cambios ambientales externos?`,
        [
          "Homeostasis",
          "Quimiosíntesis",
          "Catabolismo",
          "Mutación somática"
        ],
        0,
        "La homeostasis es el conjunto de mecanismos autorreguladores que mantienen constante el equilibrio dinámico interno de los organismos vivos.",
        'basico'
      );
    } else if (type === 1) {
      addQ(
        "Niveles de Organización Biológica",
        sec1,
        `¿Cuál es el orden jerárquico ascendente correcto de los siguientes niveles ecológicos de organización de la materia viva?`,
        [
          "Organismo $\\to$ Población $\\to$ Comunidad $\\to$ Ecosistema $\\to$ Biosfera",
          "Comunidad $\\to$ Población $\\to$ Organismo $\\to$ Biosfera $\\to$ Ecosistema",
          "Población $\\to$ Organismo $\\to$ Ecosistema $\\to$ Comunidad $\\to$ Biosfera",
          "Ecosistema $\\to$ Comunidad $\\to$ Población $\\to$ Organismo $\\to$ Biosfera"
        ],
        0,
        "Un conjunto de individuos de la misma especie forma una población; varias poblaciones interactuantes forman una comunidad; la comunidad junto a los factores abióticos constituye el ecosistema; y todos los ecosistemas integran la biosfera.",
        'basico'
      );
    } else if (type === 2) {
      addQ(
        "Biomoléculas y Nutrición Animal",
        sec1,
        `¿Qué tipo de biomoléculas estructurales están formadas por cadenas de aminoácidos unidos mediante enlaces peptídicos y son esenciales para el crecimiento muscular en el ganado?`,
        [
          "Las proteínas",
          "Los triglicéridos",
          "Los carbohidratos simples",
          "Los ácidos nucleicos"
        ],
        0,
        "Las proteínas son polímeros de aminoácidos que cumplen funciones estructurales, enzimáticas, hormonales e inmunológicas en los organismos animales.",
        'basico'
      );
    } else {
      addQ(
        "Pared Celular Vegetal",
        sec1,
        `¿Cuál es el polisacárido estructural más abundante en la pared celular de las plantas que les confiere rigidez, resistencia mecánica y sostén?`,
        [
          "La celulosa",
          "El glucógeno",
          "El almidón",
          "La quitina"
        ],
        0,
        "La celulosa es un biopolímero de glucosa con enlaces $\\beta(1\\to 4)$ que constituye el armazón estructural de la pared celular en las plantas.",
        'basico'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 2: La Célula y sus Organelos (71–140)
  // ---------------------------------------------------------------------------
  const sec2 = "La Célula y sus Organelos (71–140)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "Organelos de la Célula Vegetal",
        sec2,
        `¿Qué organelo celular exclusivo de las plantas y algas contiene pigmentos de clorofila y es el sitio donde se realiza la fotosíntesis?`,
        [
          "El cloroplasto",
          "La mitocondria",
          "El lisosoma",
          "El centrosoma"
        ],
        0,
        "Los cloroplastos son plastos fotosintéticos provistos de tilacoides y estroma donde se captura la energía lumínica para sintetizar materia orgánica.",
        'basico'
      );
    } else if (type === 1) {
      addQ(
        "Procariotas vs. Eucariotas",
        sec2,
        `A diferencia de las células de las plantas y animales (eucariotas), las bacterias fitopatógenas que atacan cultivos se caracterizan por ser procariotas debido a que:`,
        [
          "Carecen de un núcleo rodeado por una membrana nuclear",
          "Poseen cloroplastos de doble membrana",
          "Tienen su material genético organizado en cromosomas lineales dentro de una envoltura",
          "No poseen ribosomas celulares"
        ],
        0,
        "Las células procariotas se distinguen por carecer de carioteca (envoltura nuclear), teniendo su ADN circular libre en una región denominada nucleoide.",
        'basico'
      );
    } else if (type === 2) {
      addQ(
        "Respiración Celular y Energía",
        sec2,
        `¿Cuál es el organelo citoplasmático responsable de la producción aerobia de energía en forma de trifosfato de adenosina ($\\text{ATP}$)?`,
        [
          "La mitocondria",
          "El retículo endoplásmico liso",
          "El aparato de Golgi",
          "La vacuola central"
        ],
        0,
        "Las mitocondrias son organelos presentes en células eucariotas animales y vegetales que realizan el ciclo de Krebs y la cadena respiratoria para generar ATP.",
        'basico'
      );
    } else {
      addQ(
        "Vacuola Central en Plantas",
        sec2,
        `¿Qué función primordial cumple la gran vacuola central en las células parenquimáticas de los tejidos vegetales?`,
        [
          "Almacenar agua y mantener la turgencia y presión celular",
          "Sintetizar proteínas para la pared celular",
          "Duplicar el ADN durante la interfase",
          "Fijar el nitrógeno atmosférico directamente"
        ],
        0,
        "La vacuola central almacena agua, sales minerales y pigmentos, generando la presión de turgencia indispensable para sostener la postura erguida de las plantas herbáceas.",
        'intermedio'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 3: Metabolismo Celular y Fotosíntesis (141–210)
  // ---------------------------------------------------------------------------
  const sec3 = "Metabolismo Celular y Fotosíntesis (141–210)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "Fotosíntesis: Fase Luminosa",
        sec3,
        `Durante la fase luminosa de la fotosíntesis en los tilacoides, ¿qué gas esencial para la respiración de los seres vivos se libera como producto de la fotólisis del agua?`,
        [
          "Oxígeno ($\\text{O}_2$)",
          "Dióxido de carbono ($\\text{CO}_2$)",
          "Metano ($\\text{CH}_4$)",
          "Nitrógeno gaseoso ($\\text{N}_2$)"
        ],
        0,
        "La energía de la luz rompe las moléculas de agua ($\text{H}_2\text{O}$), liberando electrones, protones $\text{H}^+$ y desprendiendo gas oxígeno $\text{O}_2$ a la atmósfera.",
        'basico'
      );
    } else if (type === 1) {
      addQ(
        "Fotosíntesis: Ciclo de Calvin",
        sec3,
        `¿En qué parte del cloroplasto vegetal se lleva a cabo la fase independiente de la luz (Ciclo de Calvin) para la fijación del dióxido de carbono en azúcares?`,
        [
          "En el estroma",
          "En la membrana tilacoidal interna",
          "En el espacio intermembrana exterior",
          "En el interior de la mitocondria"
        ],
        0,
        "El estroma es el fluido acuoso que rodea a los tilacoides donde se encuentran las enzimas solubles (como la RuBisCO) que catalizan el Ciclo de Calvin.",
        'intermedio'
      );
    } else if (type === 2) {
      addQ(
        "Anabolismo vs. Catabolismo",
        sec3,
        `La fotosíntesis, proceso en el cual moléculas inorgánicas simples ($\\text{CO}_2$ y $\\text{H}_2\text{O}$) se combinan para sintetizar glucosa rica en energía, se clasifica como una vía:`,
        [
          "Anabólica (o endergónica)",
          "Catabólica exclusivamente",
          "De fermentación anaerobia",
          "De digestión extracelular"
        ],
        0,
        "El anabolismo agrupa las reacciones de síntesis constructiva donde se absorbe energía para formar biomoléculas complejas a partir de precursores simples.",
        'basico'
      );
    } else {
      addQ(
        "Respiración Celular Aerobia",
        sec3,
        `¿Cuál es el aceptor final de electrones en la cadena respiratoria mitocondrial durante la respiración aerobia celular?`,
        [
          "El oxígeno molecular ($\\text{O}_2$)",
          "El dióxido de carbono ($\\text{CO}_2$)",
          "El ácido láctico",
          "El etanol"
        ],
        0,
        "El oxígeno actúa como aceptor final de electrones y protones al final de la cadena de transporte, reduciéndose para formar agua ($\text{H}_2\text{O}$).",
        'intermedio'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 4: Genética y Leyes de la Herencia (211–280)
  // ---------------------------------------------------------------------------
  const sec4 = "Genética y Leyes de la Herencia (211–280)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "Conceptos Básicos: Genotipo y Fenotipo",
        sec4,
        `En agronomía y zootecnia, ¿cómo se denomina a la manifestación física, productiva y observable de un organismo resultante de la interacción de sus genes con el ambiente?`,
        [
          "Fenotipo",
          "Genotipo",
          "Cariotipo",
          "Genoma"
        ],
        0,
        "El fenotipo es la expresión observable del genotipo en un ambiente determinado: $\\text{Fenotipo} = \\text{Genotipo} + \\text{Ambiente}$.",
        'basico'
      );
    } else if (type === 1) {
      addQ(
        "Leyes de Mendel en Mejoramiento",
        sec4,
        `Al cruzar dos variedades de frijol homocigotas, una de grano negro dominante ($NN$) y otra de grano rojo recesivo ($nn$), ¿qué fenotipo se obtendrá en el $100\\%$ de las plantas de la primera generación filial ($F_1$)?`,
        [
          "Plantas con granos negros ($Nn$)",
          "Plantas con granos rojos ($nn$)",
          "Plantas con granos manchados",
          "50% granos negros y 50% granos rojos"
        ],
        0,
        "Según la Primera Ley de Mendel (Ley de la Uniformidad de los Híbridos), toda la descendencia $F_1$ de dos parentales homocigotos distintos es heterocigota ($Nn$) y manifiesta el fenotipo dominante (grano negro).",
        'basico'
      );
    } else if (type === 2) {
      addQ(
        "Ácidos Nucleicos: ADN y ARN",
        sec4,
        `¿Cuál es el azúcar pentosa y la base nitrogenada presentes en el $\\text{ARN}$ que lo diferencian químicamente del $\\text{ADN}$?`,
        [
          "Ribosa y Uracilo ($\\text{U}$)",
          "Desoxirribosa y Timina ($\\text{T}$)",
          "Glucosa y Citosina ($\\text{C}$)",
          "Fructosa y Adenina ($\\text{A}$)"
        ],
        0,
        "El ARN contiene ribosa (con un grupo hidroxilo en el carbono 2') y la base pirimidínica uracilo, en sustitución de la desoxirribosa y la timina del ADN.",
        'intermedio'
      );
    } else {
      addQ(
        "Locus y Alelos",
        sec4,
        `El lugar físico específico que ocupa un gen determinado dentro de la estructura de un cromosoma se denomina:`,
        [
          "Locus (en plural, loci)",
          "Centrómero",
          "Telómero",
          "Cinetocoro"
        ],
        0,
        "El término 'locus' designa la posición fija y precisa de un gen o marcador genético a lo largo de la molécula de ADN del cromosoma.",
        'basico'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 5: Los Seis Reinos de la Naturaleza y Ecología (281–350)
  // ---------------------------------------------------------------------------
  const sec5 = "Los Seis Reinos de la Naturaleza y Ecología (281–350)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "Reino Fungi en la Agricultura",
        sec5,
        `¿Qué tipo de asociación simbiótica mutualista forman ciertos hongos del suelo con las raíces de las plantas cultivadas, mejorando sustancialmente la absorción de fósforo y agua?`,
        [
          "Micorrizas",
          "Líquenes",
          "Agallas de la corona",
          "Nematodos nodulares"
        ],
        0,
        "Las micorrizas son asociaciones simbióticas mutualistas entre hifas de hongos y raíces vegetales que incrementan el área de absorción radicular de nutrientes.",
        'basico'
      );
    } else if (type === 1) {
      addQ(
        "Fijación Biológica de Nitrógeno",
        sec5,
        `Las bacterias del género Rhizobium, que habitan en los nódulos radiculares de las leguminosas (como el frijol y la soya), cumplen la función ecológica vital de:`,
        [
          "Fijar el nitrógeno atmosférico ($\\text{N}_2$) y transformarlo en formas asimilables para la planta",
          "Descomponer la lignina de los troncos viejos",
          "Fotosintetizar bajo tierra sin necesidad de luz",
          "Provocar pudrición bacteriana destructiva"
        ],
        0,
        "Las bacterias Rhizobium fijan el nitrógeno gaseoso convirtiéndolo en amonio asimilable para el vegetal, reduciendo los requerimientos de fertilización química nitrogenada.",
        'basico'
      );
    } else if (type === 2) {
      addQ(
        "Cadenas Tróficas en Agroecosistemas",
        sec5,
        `En un agroecosistema de maíz, ¿qué nivel trófico ocupan los insectos plaga (como el gusano cogollero) que se alimentan directamente de las hojas del cultivo?`,
        [
          "Consumidores primarios (herbívoros)",
          "Productores primarios autótrofos",
          "Consumidores secundarios carnívoros",
          "Descomponedores saprófitos"
        ],
        0,
        "Los consumidores primarios obtienen su materia y energía consumiendo directamente a los productores primarios (plantas autótrofas).",
        'basico'
      );
    } else {
      addQ(
        "Control Biológico y Manejo Integrado de Plagas",
        sec5,
        `El uso de enemigos naturales benéficos (como avispitas parasitoides Trichogramma o mariquitas depredadoras) para controlar poblaciones de plagas agrícolas sin usar agroquímicos se denomina:`,
        [
          "Control biológico",
          "Esterilización forzada",
          "Lixiviación de suelos",
          "Solarización térmica"
        ],
        0,
        "El control biológico es una estrategia agroecológica que utiliza parasitoides, depredadores o patógenos naturales para regular las poblaciones de plagas bajo el umbral de daño económico.",
        'intermedio'
      );
    }
  }

  return questions;
}

// =============================================================================
// 4. GENERADOR DE LENGUAJE ENA (350 PREGUNTAS)
// =============================================================================
function generateEnaLenguaje() {
  const questions = [];
  let num = 1;
  const sId = "ena_lenguaje";
  const subjName = "Lenguaje";

  function addQ(topic, sectionTitle, stmt, opts, corrIdx, expl, level) {
    const id = `ena_len_q${num}`;
    questions.push(makeQuestion(id, num, sId, sId, subjName, topic, sectionTitle, stmt, opts, corrIdx, expl, level));
    num++;
  }

  // ---------------------------------------------------------------------------
  // Sección 1: Comunicación, Textos Orales y Oratoria (1–70)
  // ---------------------------------------------------------------------------
  const sec1 = "Comunicación, Textos Orales y Oratoria (1–70)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "Técnicas de Exposición Oral: La Oratoria",
        sec1,
        `¿Cuál de las siguientes cualidades es primordial en un profesional de las ciencias agropecuarias al brindar una charla técnica o conferencia ante una comunidad de agricultores?`,
        [
          "Claridad de dicción, tono empático y adecuación del lenguaje al auditorio",
          "Uso exclusivo de tecnicismos complejos sin explicaciones prácticas",
          "Lectura rápida y monótona sin hacer contacto visual con el público",
          "Improvisación total sin ningún respaldo técnico ni planificación previa"
        ],
        0,
        "La oratoria técnica eficaz exige claridad expositiva, empatía comunicativa y adaptación del registro lingüístico al contexto sociocultural de la audiencia.",
        'basico'
      );
    } else if (type === 1) {
      addQ(
        "Textos Orales: La Mesa Redonda",
        sec1,
        `¿Qué dinámica caracteriza a una 'Mesa Redonda' como técnica de comunicación oral en un congreso agropecuario?`,
        [
          "Un grupo de expertos expone distintos puntos de vista sobre un tema común ante un público bajo la guía de un moderador",
          "Dos equipos compiten agresivamente por derrotar los argumentos contrarios ante un juez",
          "Un solo orador dicta cátedra magistral durante tres horas sin admitir preguntas",
          "Una conversación privada informal entre dos personas sin público"
        ],
        0,
        "La mesa redonda permite que varios especialistas ofrezcan perspectivas complementarias o diversas sobre una materia, facilitando la síntesis y el diálogo coordinado.",
        'basico'
      );
    } else if (type === 2) {
      addQ(
        "Elementos de la Comunicación",
        sec1,
        `En una alerta meteorológica enviada por radio comunitaria advirtiendo sobre una tormenta tropical a los pescadores y agricultores, ¿qué elemento corresponde al canal comunicativo?`,
        [
          "Las ondas electromagnéticas de la transmisión radial",
          "El locutor del observatorio ambiental",
          "El idioma español técnico utilizado",
          "Los agricultores y pescadores de la costa"
        ],
        0,
        "El canal es el medio físico a través del cual se transmite y propaga la señal portadora del mensaje (en este caso, las ondas de radio).",
        'basico'
      );
    } else {
      addQ(
        "El Debate Formal",
        sec1,
        `En un debate académico sobre el uso de biotecnología y semillas transgénicas, ¿cuál es el papel principal del moderador?`,
        [
          "Regular los tiempos de intervención, mantener el orden y garantizar la imparcialidad del diálogo",
          "Tomar partido abiertamente a favor de uno de los equipos debatientes",
          "Descalificar a los participantes cuyas opiniones no comparta",
          "Redactar las conclusiones antes de que inicie la discusión"
        ],
        0,
        "El moderador asegura el cumplimiento del reglamento, la distribución equitativa del tiempo y la cordialidad entre los participantes sin manifestar favoritismos.",
        'intermedio'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 2: Técnicas de Estudio y Organizadores de Información (71–140)
  // ---------------------------------------------------------------------------
  const sec2 = "Técnicas de Estudio y Organizadores de Información (71–140)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "Organizadores Gráficos: El Mapa Conceptual",
        sec2,
        `¿Cuáles son los tres componentes fundamentales que estructuran un mapa conceptual según la metodología de Joseph Novak?`,
        [
          "Conceptos, palabras de enlace y proposiciones jerarquizadas",
          "Dibujos artísticos, colores primarios y párrafos extensos",
          "Fechas cronológicas, flechas sin texto y viñetas",
          "Tablas estadísticas, números arábigos y títulos alfabéticos"
        ],
        0,
        "Un mapa conceptual se estructura jerárquicamente a partir de conceptos (encerrados en elipses o rectángulos) conectados por palabras de enlace para formar proposiciones con sentido lógico.",
        'basico'
      );
    } else if (type === 1) {
      addQ(
        "Instrumentos de Registro: La Bitácora de Campo",
        sec2,
        `En el sistema formativo del 'aprender-haciendo' de la ENA, ¿qué es y qué utilidad tiene la bitácora de campo?`,
        [
          "Un cuaderno o registro cronológico donde el estudiante anota sistemáticamente observaciones, datos y labores agronómicas diarias",
          "Un examen escrito formal administrado al final del ciclo",
          "Un recibo de pago de aranceles académicos",
          "Un afiche publicitario para promocionar productos del vivero"
        ],
        0,
        "La bitácora de campo es un instrumento técnico indispensable de registro cronológico de hechos, prácticas agronómicas, mediciones y reflexiones del trabajo de campo.",
        'basico'
      );
    } else if (type === 2) {
      addQ(
        "Técnicas de Síntesis: El Cuadro Sinóptico",
        sec2,
        `¿Qué recurso gráfico se utiliza tradicionalmente en un cuadro sinóptico para representar la jerarquía y desagregación de ideas desde los conceptos generales hasta los particulares?`,
        [
          "Llaves ({ }) o corchetes que agrupan subtemas",
          "Círculos concéntricos de colores",
          "Líneas de tiempo horizontales continuas",
          "Matrices de doble entrada numéricas"
        ],
        0,
        "El cuadro sinóptico organiza visualmente la información de izquierda a derecha mediante el uso de llaves que encierran subdivisiones progresivas de ideas.",
        'basico'
      );
    } else {
      addQ(
        "El Organigrama Institucional",
        sec2,
        `En la administración de una cooperativa agropecuaria o empresa agrícola, ¿qué representa un organigrama?`,
        [
          "La estructura organizativa formal, niveles jerárquicos y líneas de autoridad de la entidad",
          "El balance contable anual de ingresos y egresos",
          "El cronograma estacional de siembra y cosecha",
          "El mapa satelital de los lotes de cultivo"
        ],
        0,
        "Un organigrama es la representación gráfica de la estructura formal de una institución, mostrando sus departamentos, dependencias y relaciones jerárquicas.",
        'intermedio'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 3: Investigación Científica e Informe Académico (141–210)
  // ---------------------------------------------------------------------------
  const sec3 = "Investigación Científica e Informe Académico (141–210)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "El Planteamiento del Problema",
        sec3,
        `En un proyecto de investigación experimental sobre control de plagas en maíz, ¿en qué consiste la formulación del problema?`,
        [
          "En delimitar claramente la situación problemática redactándola generalmente en forma de pregunta de investigación",
          "En calcular anticipadamente el costo financiero de los pesticidas",
          "En redactar los agradecimientos a los docentes asesores",
          "En transcribir el índice de contenidos del informe"
        ],
        0,
        "El planteamiento del problema delimita con precisión el objeto de estudio, sus alcances y variables, sintetizándose comúnmente en una pregunta rectora.",
        'intermedio'
      );
    } else if (type === 1) {
      addQ(
        "Justificación de la Investigación",
        sec3,
        `En el protocolo de un ensayo agrícola, la sección de la 'Justificación' responde primordialmente a las preguntas:`,
        [
          "¿Por qué y para qué se realiza la investigación, y cuál es su relevancia social y productiva?",
          "¿Cuánto cobrará el equipo investigador por hora trabajada?",
          "¿Qué tipografía y márgenes se usarán en la portada?",
          "¿Dónde se celebrará la graduación al finalizar el proyecto?"
        ],
        0,
        "La justificación fundamenta la conveniencia, pertinencia, viabilidad técnica e impacto social o económico de llevar a cabo la investigación.",
        'basico'
      );
    } else if (type === 2) {
      addQ(
        "Estructura del Informe Académico Técnico",
        sec3,
        `¿Cuál es el orden secuencial estándar de los apartados principales de un informe técnico de investigación agrícola?`,
        [
          "Introducción $\\to$ Metodología $\\to$ Resultados $\\to$ Discusión y Conclusiones $\\to$ Referencias",
          "Conclusiones $\\to$ Metodología $\\to$ Introducción $\\to$ Resultados $\\to$ Portada",
          "Referencias $\\to$ Resultados $\\to$ Introducción $\\to$ Metodología $\\to$ Conclusiones",
          "Metodología $\\to$ Introducción $\\to$ Referencias $\\to$ Resultados $\\to$ Conclusiones"
        ],
        0,
        "El formato formal IMRyD (Introducción, Metodología, Resultados y Discusión) es el estándar universal en redacción de informes científicos y académicos.",
        'intermedio'
      );
    } else {
      addQ(
        "Referencias Bibliográficas y Citas",
        sec3,
        `De acuerdo con las normas de citación y estilo bibliográfico (como APA), ¿cuál es el propósito ético y académico de citar las fuentes consultadas?`,
        [
          "Reconocer la autoría intelectual ajena y evitar el plagio académico",
          "Aumentar artificialmente el número de páginas del reporte",
          "Impedir que otros lectores consulten los libros originales",
          "Ocultar que se utilizaron libros de texto"
        ],
        0,
        "Citar oportunamente otorga rigor científico, respalda las afirmaciones teóricas y respeta los derechos de propiedad intelectual de los autores consultados.",
        'basico'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 4: Texto Argumentativo, Ensayo y Discurso Persuasivo (211–280)
  // ---------------------------------------------------------------------------
  const sec4 = "Texto Argumentativo, Ensayo y Discurso Persuasivo (211–280)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "Estructura del Ensayo Argumentativo",
        sec4,
        `¿Qué elemento del ensayo académico resume la postura u opinión central que el autor defiende a lo largo de su argumentación?`,
        [
          "La tesis",
          "El sumario",
          "El apéndice",
          "El epígrafe"
        ],
        0,
        "La tesis es la proposición o juicio central sustentado por el ensayista, la cual articula y dirige todos los argumentos y evidencias del texto.",
        'basico'
      );
    } else if (type === 1) {
      addQ(
        "Tipos de Argumentos",
        sec4,
        `Si en un ensayo sobre sostenibilidad se cita el informe oficial del Centro Nacional de Tecnología Agropecuaria y Forestal (CENTA) para validar el rendimiento de una variedad de semilla, se emplea un argumento de:`,
        [
          "Autoridad",
          "Tradición popular",
          "Apelación a la compasión",
          "Generalización apresurada"
        ],
        0,
        "El argumento de autoridad sustenta una afirmación recurriendo a informes, dictámenes o investigaciones de expertos o instituciones reconocidas en el área.",
        'basico'
      );
    } else if (type === 2) {
      addQ(
        "La Paráfrasis en Textos Técnicos",
        sec4,
        `¿Qué diferencia a una 'paráfrasis constructiva' de una simple copia textual o paráfrasis mecánica?`,
        [
          "Reelabora el contenido original con una estructura sintáctica y léxica propia sin perder el sentido original",
          "Se limita a cambiar un par de palabras por sinónimos de diccionario",
          "Copia textualmente el párrafo completo entre comillas",
          "Inventa información falsa que no estaba en el texto original"
        ],
        0,
        "La paráfrasis constructiva demuestra comprensión profunda al recrear el texto original con un enunciado completamente nuevo y vocabulario propio.",
        'intermedio'
      );
    } else {
      addQ(
        "El Discurso Persuasivo",
        sec4,
        `¿Cuál es el objetivo primordial del discurso persuasivo empleado en campañas de concientización sobre el cuido de las cuencas hidrográficas?`,
        [
          "Modificar actitudes o conductas del receptor convenciendo mediante razones y apelando a valores éticos",
          "Exponer tablas numéricas sin invitar a ninguna acción",
          "Entretener con chistes cómicos sin abordar el problema",
          "Vender un producto comercial de consumo masivo"
        ],
        0,
        "El discurso persuasivo busca influir conscientemente en las convicciones o comportamiento de la audiencia mediante argumentos sólidos y motivación ética.",
        'intermedio'
      );
    }
  }

  // ---------------------------------------------------------------------------
  // Sección 5: Literatura Salvadoreña y Precolombina, Morfosintaxis (281–350)
  // ---------------------------------------------------------------------------
  const sec5 = "Literatura Salvadoreña y Precolombina, Morfosintaxis (281–350)";

  for (let i = 0; i < 70; i++) {
    const type = i % 4;
    if (type === 0) {
      addQ(
        "Literatura Salvadoreña: El Costumbrismo",
        sec5,
        `¿Qué insigne escritor salvadoreño retrató magistralmente la vida rural y la cosmovisión del campesino nacional en obras como 'Cuentos de Barro' y 'Trasmallo'?`,
        [
          "Salvador Salazar Arrué (Salarrué)",
          "Arturo Ambrogi",
          "Francisco Gavidia",
          "David Escobar Galindo"
        ],
        0,
        "Salarrué (1899–1975) es la máxima figura de la narrativa salvadoreña costumbrista, capturando con belleza lírica el habla vernácula y la inocencia campesina.",
        'basico'
      );
    } else if (type === 1) {
      addQ(
        "Poesía Lírica Salvadoreña",
        sec5,
        `¿Quién es el poeta salvadoreño autor de 'Jícaras Tristes', cuya poesía celebra con sencillez los paisajes bucólicos y la naturaleza de El Salvador?`,
        [
          "Alfredo Espino",
          "Roque Dalton",
          "Oswaldo Escobar Velado",
          "Alberto Masferrer"
        ],
        0,
        "Alfredo Espino (1900–1928) compuso 'Jícaras Tristes', poemario clásico que canta a los árboles de fuego, nidos, maizales y volcanes de la tierra cuscatleca.",
        'basico'
      );
    } else if (type === 2) {
      addQ(
        "Conectores de Consecuencia",
        sec5,
        `¿Cuál de los siguientes términos funciona como un conector de consecuencia lógica en la oración: 'Las lluvias se retrasaron durante la época de siembra; __________, el cultivo de maíz sufrió estrés hídrico'?:`,
        [
          "por consiguiente",
          "sin embargo",
          "a pesar de que",
          "en primer término"
        ],
        0,
        "'Por consiguiente' es un conector consecutivo que introduce el efecto o resultado directo derivado de la causa señalada previamente.",
        'basico'
      );
    } else {
      addQ(
        "Literatura Precolombina Mesoamericana",
        sec5,
        `¿Cuál de las siguientes afirmaciones describe con precisión a la literatura precolombina de los pueblos originarios de Mesoamérica (como los mayas y pipiles)?`,
        [
          "Estaba vinculada a la cosmovisión sagrada, la astronomía, los mitos de origen y transmitida principalmente por tradición oral y códices",
          "Se escribía en latín clásico mediante imprentas europeas",
          "Estaba compuesta exclusivamente por novelas policiacas modernas",
          "Rechazaba cualquier referencia a la naturaleza o a la agricultura"
        ],
        0,
        "La literatura prehispánica articulaba la espiritualidad, el culto a deidades agrarias (como el maíz) y la memoria histórica a través de la tradición oral y pictogramas.",
        'intermedio'
      );
    }
  }

  return questions;
}

// =============================================================================
// EJECUCIÓN PRINCIPAL: GENERAR LOS 4 ARCHIVOS Y EL CONSOLIDADO ALL.JSON
// =============================================================================
console.log('--- GENERANDO BANCO DE PREGUNTAS ENA 2027 ---');

const mat = generateEnaMatematicas();
console.log(`✓ Matemáticas ENA: ${mat.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, 'ena_matematicas.json'), JSON.stringify(mat, null, 2), 'utf-8');

const qui = generateEnaQuimica();
console.log(`✓ Química ENA: ${qui.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, 'ena_quimica.json'), JSON.stringify(qui, null, 2), 'utf-8');

const bio = generateEnaBiologia();
console.log(`✓ Biología ENA: ${bio.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, 'ena_biologia.json'), JSON.stringify(bio, null, 2), 'utf-8');

const len = generateEnaLenguaje();
console.log(`✓ Lenguaje ENA: ${len.length} preguntas generadas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, 'ena_lenguaje.json'), JSON.stringify(len, null, 2), 'utf-8');

const allEna = [...mat, ...qui, ...bio, ...len];
console.log(`✓ Total consolidado ENA: ${allEna.length} preguntas.`);
fs.writeFileSync(path.join(QUESTIONS_DIR, 'all.json'), JSON.stringify(allEna, null, 2), 'utf-8');

console.log('Todos los archivos ENA han sido generados exitosamente.');

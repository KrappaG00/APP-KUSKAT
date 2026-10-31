/**
 * RECURSOS PEDAGÓGICOS INSTITUCIONALES DE 1 PÁGINA (CHEAT SHEETS EN LaTeX)
 * Plataforma Académica KUSKAT · República de El Salvador
 *
 * Fichas mnemotécnicas y formularios ejecutivos condensados en exactamente 1 hoja carta,
 * diseñados bajo estándares tipográficos densos y legibles (multicol, tcolorbox, TikZ)
 * para descarga ultraliviana (<120 KB) e impresión económica en centros escolares.
 */

export interface SheetSolvedExample {
  number: number;
  title: string;
  scenario: string;
  stepByStepSolution: string;
  result: string;
}

export interface SheetRetentionDrill {
  id: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface OnePageSectionBox {
  title: string;
  badge: string;
  content: string;
  formulasOrRules: { label: string; formula: string; explanation: string }[];
  commonPitfall: string;
}

export interface OnePageSheet {
  id: string;
  title: string;
  subtitle: string;
  authority: string;
  category: 'academico' | 'salud' | 'comercio' | 'juridico' | 'tecnico' | 'financiero' | 'linguistico';
  icon: string;
  badgeColor: string;
  summary: string;
  sections: OnePageSectionBox[];
  latexCode: string;
  solvedPracticeExamples: SheetSolvedExample[];
  retentionDrills: SheetRetentionDrill[];
}

export const ONE_PAGE_SHEETS: OnePageSheet[] = [
  // =========================================================================
  // 1. FICHA OFICIAL AVANZO: MATEMÁTICAS & CIENCIAS DE LA NATURALEZA
  // =========================================================================
  {
    id: 'avanzo-stem',
    title: 'Formulario Maestro AVANZO: Matemáticas y Ciencias',
    subtitle: 'Síntesis ejecutiva de Precálculo, Mecánica Newtoniana, Termoquímica y Cinética',
    authority: 'Ministerio de Educación, Ciencia y Tecnología (MINED) · El Salvador',
    category: 'academico',
    icon: '📐',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
    summary: 'Condensa todas las identidades trigonométricas fundamentales, ecuaciones de cinemática/dinámica, cálculo de pH y estequiometría evaluadas en la prueba nacional AVANZO en 1 sola página.',
    sections: [
      {
        title: '1. Precálculo & Geometría Analítica',
        badge: 'Matemática',
        content: 'Relaciones algebraicas y trigonométricas cardinales.',
        formulasOrRules: [
          {
            label: 'Ecuación Cuadrática & Discriminante',
            formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}; \\quad \\Delta = b^2 - 4ac',
            explanation: 'Si \\Delta > 0: 2 raíces reales distintas; \\Delta = 0: 1 raíz doble; \\Delta < 0: 2 raíces complejas conjugadas.',
          },
          {
            label: 'Identidad Pitagórica & Ángulo Doble',
            formula: '\\sin^2(\\theta) + \\cos^2(\\theta) = 1; \\quad \\sin(2\\theta) = 2\\sin(\\theta)\\cos(\\theta)',
            explanation: '\\cos(2\\theta) = \\cos^2(\\theta) - \\sin^2(\\theta) = 2\\cos^2(\\theta) - 1 = 1 - 2\\sin^2(\\theta).',
          },
          {
            label: 'Vértice de la Parábola',
            formula: 'V(h, k) = \\left(-\\frac{b}{2a}, c - \\frac{b^2}{4a}\\right)',
            explanation: 'Representa el punto máximo si a < 0 (tiro parabólico) o mínimo si a > 0.',
          },
        ],
        commonPitfall: 'Confundir el signo del término -b/2a al evaluar el eje de simetría cuando b ya es negativo.',
      },
      {
        title: '2. Cinemática & Leyes de Newton',
        badge: 'Física',
        content: 'Movimiento rectilíneo uniformemente acelerado y dinámica clásica.',
        formulasOrRules: [
          {
            label: 'Ecuaciones del MRUA',
            formula: 'v_f = v_0 + at; \\quad x = v_0 t + \\frac{1}{2}at^2; \\quad v_f^2 = v_0^2 + 2a\\Delta x',
            explanation: 'En caída libre cerca de la superficie terrestre: a = -g \\approx -9.8\\,\\text{m/s}^2.',
          },
          {
            label: '2.ª Ley de Newton & Fricción Dinámica',
            formula: '\\sum \\vec{F} = m\\vec{a}; \\quad f_k = \\mu_k N',
            explanation: 'La normal N depende del ángulo de inclinación: N = mg\\cos(\\theta) en plano inclinado.',
          },
          {
            label: 'Conservación de Energía Mecánica',
            formula: 'E_m = E_k + E_p = \\frac{1}{2}mv^2 + mgh = \\text{constante}',
            explanation: 'Válido únicamente si el trabajo de fuerzas no conservativas (como fricción o resistencia del aire) es cero.',
          },
        ],
        commonPitfall: 'Olvidar descomponer el peso en mg*sen(θ) y mg*cos(θ) respecto a los ejes tangencial y normal.',
      },
      {
        title: '3. Química: Estequiometría, pH & Gases',
        badge: 'Química',
        content: 'Relaciones molares y equilibrio químico acuoso.',
        formulasOrRules: [
          {
            label: 'Ley del Gas Ideal',
            formula: 'PV = nRT = \\frac{m}{M}RT',
            explanation: 'R = 0.08206\\,\\text{atm}\\cdot\\text{L}/(\\text{mol}\\cdot\\text{K}); T siempre en Kelvin (K = °C + 273.15).',
          },
          {
            label: 'Escala de pH y pOH',
            formula: '\\text{pH} = -\\log_{10}[\\text{H}^+]; \\quad \\text{pH} + \\text{pOH} = 14 \\quad (25^\\circ\\text{C})',
            explanation: 'Solución ácida: pH < 7 ([H+] > 10^-7 M); básica: pH > 7.',
          },
          {
            label: 'Molaridad & Dilución',
            formula: 'M = \\frac{n_{\\text{soluto}}}{V_{\\text{litros}}}; \\quad C_1 V_1 = C_2 V_2',
            explanation: 'La cantidad de moles se conserva durante una dilución con disolvente puro.',
          },
        ],
        commonPitfall: 'Introducir la temperatura en grados Celsius en la ecuación de gases ideales sin convertir a Kelvin.',
      },
    ],
    solvedPracticeExamples: [
      {
        number: 1,
        title: 'Resolución de ecuación cuadrática con discriminante',
        scenario: 'Encuentre las raíces exactas de la ecuación $2x^2 - 7x + 3 = 0$ evaluando previamente su discriminante.',
        stepByStepSolution: 'Identificamos coeficientes: $a = 2, b = -7, c = 3$.\nCalculamos discriminante: $\\Delta = b^2 - 4ac = (-7)^2 - 4(2)(3) = 49 - 24 = 25 > 0$ (2 raíces reales distintas).\nAplicamos la fórmula general: $x = \\frac{-(-7) \\pm \\sqrt{25}}{2(2)} = \\frac{7 \\pm 5}{4}$.\n$x_1 = \\frac{7 + 5}{4} = \\frac{12}{4} = 3$; $x_2 = \\frac{7 - 5}{4} = \\frac{2}{4} = 0.5$.',
        result: 'Raíces reales: $x_1 = 3$ y $x_2 = 1/2$.',
      },
      {
        number: 2,
        title: 'Altura máxima y tiempo de vuelo en tiro vertical',
        scenario: 'Un proyectil se lanza verticalmente hacia arriba desde el suelo con rapidez inicial $v_0 = 29.4\\,\\text{m/s}$ ($g = 9.8\\,\\text{m/s}^2$). Calcule el tiempo hasta la altura máxima y dicha altura.',
        stepByStepSolution: 'En el punto más alto, la velocidad vertical instantánea es nula: $v_f = 0$.\nUsamos $v_f = v_0 - gt \\implies 0 = 29.4 - 9.8t \\implies t = \\frac{29.4}{9.8} = 3.0\\,\\text{s}$.\nCalculamos la altura máxima con $y_{max} = v_0 t - \\frac{1}{2}gt^2 = (29.4)(3) - 0.5(9.8)(3)^2 = 88.2 - 44.1 = 44.1\\,\\text{m}$.',
        result: 'Tiempo de subida: $3.0\\,\\text{s}$; Altura máxima alcanzada: $44.1\\,\\text{m}$.',
      },
      {
        number: 3,
        title: 'Aceleración en plano inclinado con fricción cinética',
        scenario: 'Un bloque de masa $m = 5\\,\\text{kg}$ desciende por un plano inclinado a $\\theta = 30^\\circ$ con coeficiente de fricción cinética $\\mu_k = 0.20$ ($g = 9.8\\,\\text{m/s}^2$). Calcule la aceleración lineal.',
        stepByStepSolution: 'Fuerza normal perpendicular al plano: $N = mg\\cos(30^\\circ) = 5(9.8)(0.866) \\approx 42.44\\,\\text{N}$.\nFuerza de fricción cinética: $f_k = \\mu_k N = (0.20)(42.44) = 8.49\\,\\text{N}$.\nFuerza motriz paralela al plano: $F_x = mg\\sin(30^\\circ) = 5(9.8)(0.50) = 24.50\\,\\text{N}$.\nSegunda Ley de Newton: $F_x - f_k = ma \\implies 24.50 - 8.49 = 5a \\implies 16.01 = 5a \\implies a = 3.20\\,\\text{m/s}^2$.',
        result: 'Aceleración de descenso: $a \\approx 3.20\\,\\text{m/s}^2$.',
      },
      {
        number: 4,
        title: 'Cálculo de presión con la Ley de Gases Ideales',
        scenario: 'Un tanque rígido de $10.0\\,\\text{L}$ contiene $0.50\\,\\text{moles}$ de gas nitrógeno a una temperatura de $27^\\circ\\text{C}$. Calcule la presión del gas en atmósferas ($R = 0.08206\\,\\text{atm}\\cdot\\text{L}/(\\text{mol}\\cdot\\text{K})$).',
        stepByStepSolution: 'Conversión obligatoria de temperatura a Kelvin: $T = 27 + 273.15 = 300.15\\,\\text{K}$.\nEcuación de estado de gas ideal: $PV = nRT \\implies P = \\frac{nRT}{V}$.\nSustituimos valores: $P = \\frac{(0.50)(0.08206)(300.15)}{10.0} = \\frac{12.315}{10.0} = 1.23\\,\\text{atm}$.',
        result: 'Presión en el tanque: $P \\approx 1.23\\,\\text{atm}$ ($124.6\\,\\text{kPa}$).',
      },
      {
        number: 5,
        title: 'Dilución de ácido fuerte y cálculo de pH resultante',
        scenario: 'Se toman $10\\,\\text{mL}$ de una disolución acuosa de $\\text{HCl}\\,0.10\\,\\text{M}$ y se aforan con agua destilada hasta un volumen final de $1,000\\,\\text{mL}$. Calcule el pH de la disolución resultante.',
        stepByStepSolution: 'Aplicamos la ley de conservación de moles en dilución: $C_1 V_1 = C_2 V_2$.\n$C_2 = \\frac{C_1 V_1}{V_2} = \\frac{(0.10\\,\\text{M})(10\\,\\text{mL})}{1,000\\,\\text{mL}} = 0.0010\\,\\text{M} = 1.0 \\times 10^{-3}\\,\\text{M}$.\nDado que el $\\text{HCl}$ es un ácido monoprótico fuerte, se disocia al $100\\%$: $[\\text{H}^+] = 1.0 \\times 10^{-3}\\,\\text{M}$.\nCalculamos pH: $\\text{pH} = -\\log_{10}[\\text{H}^+] = -\\log_{10}(10^{-3}) = 3.0$.',
        result: 'pH de la disolución diluida: $3.0$ (disolución ácida).',
      },
    ],
    retentionDrills: [
      {
        id: 'avanzo-drill-1',
        question: 'Si en una parábola $f(x) = ax^2 + bx + c$, el coeficiente $a > 0$, ¿qué representa el vértice?',
        options: {
          A: 'El punto mínimo global de la función.',
          B: 'El punto máximo global de la función.',
          C: 'Una raíz real obligatoria.',
          D: 'El punto de corte con el eje vertical.',
        },
        correctAnswer: 'A',
        explanation: 'Cuando el coeficiente cuadrático es positivo ($a > 0$), las ramas de la parábola abren hacia arriba, por lo que el vértice corresponde al valor mínimo absoluto.',
      },
      {
        id: 'avanzo-drill-2',
        question: '¿Por qué la fuerza de fricción estática no realiza trabajo mecánico disipativo en una rueda que rueda sin deslizar?',
        options: {
          A: 'Porque el punto instantáneo de contacto tiene velocidad relativa cero respecto al suelo.',
          B: 'Porque el coeficiente de fricción estática siempre es nulo.',
          C: 'Porque la aceleración angular es constante.',
          D: 'Porque la energía cinética es puramente de traslación.',
        },
        correctAnswer: 'A',
        explanation: 'En rodadura pura, el punto de contacto no desliza infinitesimalmente; su velocidad instantánea es $\\vec{v} = \\vec{0}$, por lo que el trabajo $W = \\int \\vec{F} \\cdot d\\vec{r} = 0$.',
      },
    ],
    latexCode: `% =========================================================================
% HOJA MNEMOTÉCNICA INSTITUCIONAL KUSKAT — AVANZO STEM (1 PÁGINA CARTA)
% =========================================================================
\\documentclass[10pt,letterpaper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish]{babel}
\\usepackage[margin=0.8cm]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{multicol}
\\usepackage{tcolorbox}
\\usepackage{microtype}
\\pagestyle{empty}

\\definecolor{azulKuskat}{HTML}{0B1B3D}
\\definecolor{doradoKuskat}{HTML}{C59B27}
\\definecolor{fondoKuskat}{HTML}{FAF9F5}

\\tcbset{
  colback=fondoKuskat,
  colframe=azulKuskat,
  coltitle=doradoKuskat,
  fonttitle=\\bfseries\\sffamily\\footnotesize,
  boxrule=0.8pt,
  arc=2mm,
  top=2mm,bottom=2mm,left=2.5mm,right=2.5mm
}

\\begin{document}

% Encabezado Soberano
\\begin{center}
  {\\color{azulKuskat}\\sffamily\\Large\\textbf{KUSKAT $\\cdot$ FORMULARIO MAESTRO AVANZO 2026}}\\\\
  {\\footnotesize\\sffamily Precálculo $\\cdot$ Mecánica Newtoniana $\\cdot$ Termoquímica $\\cdot$ Síntesis de 1 Página $\\cdot$ El Salvador}
\\end{center}
\\vspace{-2mm}
\\hrule
\\vspace{2mm}

\\begin{multicols*}{3}

\\begin{tcolorbox}[title=1. Precálculo y Álgebra]
\\textbf{Fórmula General Cuadrática:}\\\\
$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$\\\\
Discriminante: $\\Delta = b^2 - 4ac$
\\begin{itemize}\\setlength{\\itemsep}{0pt}
  \\item $\\Delta > 0$: 2 raíces reales distintas.
  \\item $\\Delta = 0$: 1 raíz doble ($x = -b/2a$).
  \\item $\\Delta < 0$: 2 raíces complejas.
\\end{itemize}

\\textbf{Vértice de Parábola:}\\\\
$h = -\\frac{b}{2a}, \\quad k = f(h)$

\\textbf{Identidades Trigonométricas:}\\\\
$\\sin^2\\theta + \\cos^2\\theta = 1$\\\\
$\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$\\\\
$\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$\\\\
$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$

\\textbf{¡Trampa Típica!}\\\\
El signo negativo de $-b/2a$ se aplica DESPUÉS de sustituir el valor algebraico de $b$.
\\end{tcolorbox}

\\begin{tcolorbox}[title=2. Física y Mecánica]
\\textbf{Ecuaciones del MRUA:}\\\\
$v_f = v_0 + at$\\\\
$x = v_0 t + \\frac{1}{2}at^2$\\\\
$v_f^2 = v_0^2 + 2a\\Delta x$

\\textbf{Leyes de Newton:}\\\\
$\\sum \\vec{F} = m\\vec{a}$ (2.ª Ley)\\\\
Fricción cinética: $f_k = \\mu_k N$\\\\
Plano inclinado: $N = mg\\cos\\theta$\\\\
Fuerza motriz: $F_x = mg\\sin\\theta$

\\textbf{Trabajo y Energía:}\\\\
$W = F d \\cos\\alpha$\\\\
$E_c = \\frac{1}{2}mv^2, \\quad E_p = mgh$\\\\
Conservación: $E_{m1} = E_{m2}$ (si $W_{nc} = 0$)

\\textbf{¡Trampa Típica!}\\\\
En tiro vertical en el punto más alto la velocidad es cero ($v=0$), pero la aceleración gravitatoria NO es cero ($a = -9.8\\text{ m/s}^2$).
\\end{tcolorbox}

\\begin{tcolorbox}[title=3. Química y pH]
\\textbf{Gases Ideales:}\\\\
$P V = n R T = \\frac{m}{M} R T$\\\\
$R = 0.08206\\text{ atm}\\cdot\\text{L}/(\\text{mol}\\cdot\\text{K})$\\\\
$T(\\text{K}) = T(^\\circ\\text{C}) + 273.15$

\\textbf{Estequiometría y Molaridad:}\\\\
$n = \\frac{\\text{masa (g)}}{\\text{Masa Molar (g/mol)}}$\\\\
$M = \\frac{n_{\\text{soluto}}}{V_{\\text{disolución (L)}}}$

\\textbf{Dilución de Soluciones:}\\\\
$C_1 V_1 = C_2 V_2$

\\textbf{Escala de pH ($25^\\circ\\text{C}$):}\\\\
$\\text{pH} = -\\log_{10}[\\text{H}^+]$\\\\
$\\text{pOH} = -\\log_{10}[\\text{OH}^-]$\\\\
$\\text{pH} + \\text{pOH} = 14$

\\textbf{¡Trampa Típica!}\\\\
Un descenso de 1 unidad de pH (ej. de 5 a 4) significa que la acidez se multiplica por 10 (escala logarítmica).
\\end{tcolorbox}

\\end{multicols*}

\\vfill
\\begin{center}
  \\footnotesize\\sffamily Plataforma KUSKAT $\\cdot$ WhatsApp Oficial: +503 7657 4463 $\\cdot$ Material Académico Libre
\\end{center}

\\end{document}`,
  },

  // =========================================================================
  // 2. FICHA ADUANERA CENTROAMERICANA: CAUCA IV, RECAUCA & DUCA
  // =========================================================================
  {
    id: 'cauca-aduanas',
    title: 'Guía Rápida de Operaciones Aduaneras Centroamericanas',
    subtitle: 'CAUCA IV, RECAUCA, Declaración DUCA, SAC y Valoración OMC',
    authority: 'Dirección General de Aduanas (DGA) · SIECA · El Salvador',
    category: 'comercio',
    icon: '🚢',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    summary: 'Resumen ejecutivo de los regímenes aduaneros, modalidades de DUCA (F, D, T), las 6 Reglas Generales de Clasificación Arancelaria y métodos de valoración aduanera en 1 página.',
    sections: [
      {
        title: '1. Regímenes Aduaneros (CAUCA IV)',
        badge: 'Regímenes',
        content: 'Clasificación de destinos aduaneros de las mercancías.',
        formulasOrRules: [
          {
            label: 'Definitivos',
            formula: '\\text{Importación / Exportación Definitiva}',
            explanation: 'Ingreso o salida de mercancías para uso o consumo definitivo en el territorio aduanero nacional previo pago de tributos (DAI e IVA).',
          },
          {
            label: 'Temporales / Suspensivos',
            formula: '\\text{Tránsito (DUCA-T), Admisión Temporal, Maquila}',
            explanation: 'Mercancías ingresan con suspensión de tributos para reexportación o transformación bajo la Ley de Zonas Francas.',
          },
          {
            label: 'Liberatorios',
            formula: '\\text{Zonas Francas, Tiendas Libres (Duty Free)}',
            explanation: 'Exención de tributos bajo condiciones especiales de fomento a la exportación o consumo por viajeros.',
          },
        ],
        commonPitfall: 'Declarar como definitiva una importación de insumos para maquila, perdiendo el beneficio de suspensión arancelaria.',
      },
      {
        title: '2. Modalidades de la Declaración Única (DUCA)',
        badge: 'DUCA',
        content: 'Documento aduanero único para el comercio en el SICA.',
        formulasOrRules: [
          {
            label: 'DUCA-F (Originarias)',
            formula: '\\text{Comercio Intrarregional de Bienes Originarios}',
            explanation: 'Amparada en el Tratado General de Integración Económica Centroamericana (libre comercio sin DAI entre países miembros).',
          },
          {
            label: 'DUCA-D (Terceros Países)',
            formula: '\\text{Importaciones / Exportaciones Extrarregionales}',
            explanation: 'Se utiliza para el intercambio comercial con países fuera de Centroamérica (ej. EE. UU., China, Unión Europea).',
          },
          {
            label: 'DUCA-T (Tránsito Internacional)',
            formula: '\\text{Tránsito Terrestre Internacional entre Aduanas}',
            explanation: 'Garantiza el traslado de carga bajo control aduanero desde la aduana de partida hasta la aduana de destino con precinto satelital.',
          },
        ],
        commonPitfall: 'Intentar amparar bajo DUCA-F bienes importados de Asia sin valor agregado centroamericano suficiente.',
      },
      {
        title: '3. Nomenclatura Arancelaria & Valoración OMC',
        badge: 'Clasificación',
        content: 'Criterios de clasificación arancelaria y determinación de la base imponible.',
        formulasOrRules: [
          {
            label: 'Regla General Interpretativa 1 (RGI 1)',
            formula: '\\text{Textos de Partida y Notas de Sección/Capítulo}',
            explanation: 'La clasificación arancelaria se determina legalmente por los textos de las partidas y las notas legales; los títulos de sección solo tienen valor indicativo.',
          },
          {
            label: 'Base Imponible / Valor en Aduana',
            formula: '\\text{Valor CIF} = \\text{FOB (Precio)} + \\text{Flete Internacional} + \\text{Seguro}',
            explanation: 'El DAI (Derecho Arancelario a la Importación) y el IVA (13%) se calculan sobre el valor CIF determinado conforme al Acuerdo del GATT/OMC.',
          },
        ],
        commonPitfall: 'Omitir el flete marítimo o aéreo al liquidar impuestos, lo que genera ajuste de valor y sanción por LEPSIA.',
      },
    ],
    solvedPracticeExamples: [
      {
        number: 1,
        title: 'Liquidación de tributos a la importación sobre valor CIF',
        scenario: 'Un importador introduce a El Salvador un cargamento de repuestos automotrices con valor FOB $20,000, flete marítimo $3,500 y prima de seguro $500. El arancel SAC asignado (DAI) es del 15% y la tasa del IVA es del 13%. Calcule el valor en aduana (CIF) y el monto total de tributos a liquidar.',
        stepByStepSolution: 'Paso 1: Determinamos el valor CIF: $\\text{CIF} = \\text{FOB} + \\text{Flete} + \\text{Seguro} = \\$20,000 + \\$3,500 + \\$500 = \\$24,000$.\nPaso 2: Calculamos el DAI: $\\text{DAI} = \\$24,000 \\times 15\\% = \\$3,600$.\nPaso 3: Calculamos la base imponible del IVA: $\\text{Base IVA} = \\text{CIF} + \\text{DAI} = \\$24,000 + \\$3,600 = \\$27,600$.\nPaso 4: Calculamos el IVA: $\\text{IVA} = \\$27,600 \\times 13\\% = \\$3,588$.\nPaso 5: Total de tributos aduaneros: $\\text{Total} = \\text{DAI} + \\text{IVA} = \\$3,600 + \\$3,588 = \\$7,188$.',
        result: 'Valor CIF: $24,000 USD; Total tributos a pagar: $7,188 USD.',
      },
      {
        number: 2,
        title: 'Selección de régimen aduanero para insumos industriales',
        scenario: 'Una empresa textil ubicada en el Parque Industrial El Pedregal (Zona Franca) importa hilaza de poliéster para confeccionar prendas deportivas que serán exportadas al 100% hacia los Estados Unidos bajo CAFTA-DR. ¿Qué régimen debe declarar en aduanas?',
        stepByStepSolution: 'La Ley de Zonas Francas Industriales y de Comercialización de El Salvador y el CAUCA IV establecen que las materias primas para perfeccionamiento activo y exportación gozan de régimen suspensivo/liberatorio de derechos arancelarios.\nDebe declararse bajo el régimen de Admisión Temporal para Perfeccionamiento Activo (Zonas Francas), sin liquidar DAI ni IVA al momento del ingreso, siempre que se garantice su transformación y salida del territorio aduanero.',
        result: 'Régimen: Admisión Temporal para Perfeccionamiento Activo (Zona Franca).',
      },
      {
        number: 3,
        title: 'Determinación de modalidad de DUCA aplicable',
        scenario: 'Una cooperativa agrícola de San Vicente envía un cargamento de café procesado y empacado con origen 100% salvadoreño hacia un distribuidor en San José, Costa Rica, por vía terrestre. ¿Qué documento aduanero ampara la transacción?',
        stepByStepSolution: 'Al tratarse de mercancías originarias de un Estado Parte del Sistema de la Integración Centroamericana (SICA) comercializadas intrarregionalmente bajo el Tratado General de Integración Económica Centroamericana, el documento aplicable es la Declaración Única Centroamericana en su modalidad F (DUCA-F), la cual acredita el libre comercio (0% DAI).',
        result: 'Documento: DUCA-F (Formato de Mercancías Originarias Centroamericanas).',
      },
      {
        number: 4,
        title: 'Clasificación arancelaria por Regla General Interpretativa 3b',
        scenario: 'Se importa un juego de aseo personal compuesto por un estuche de vinilo, un frasco de champú, un jabón en barra y un peine de plástico, presentado en un empaque único acondicionado para la venta al por menor. ¿Cómo se determina su clasificación?',
        stepByStepSolution: 'La RGI 1 no permite clasificar el conjunto en una sola partida específica. Se aplica la RGI 3b (mercancías constituidas por la unión de artículos diferentes presentados en juegos acondicionados para la venta al por menor).\nEl carácter esencial del juego lo confieren los productos de limpieza corporal (champú/jabón), no el estuche ni el peine. El kit se clasifica en la partida correspondiente a las preparaciones para el lavado corporal.',
        result: 'Clasificación asignada al producto que otorga el carácter esencial (RGI 3b).',
      },
      {
        number: 5,
        title: 'Cálculo de ajuste de valor por omisión de seguro según GATT/OMC',
        scenario: 'Un importador factura mercancía con valor FOB de $50,000 y flete de $4,000, pero declara no haber contratado seguro. Según la legislación aduanera salvadoreña (RECAUCA), ¿cómo calcula la aduana el valor asegurable teórico?',
        stepByStepSolution: 'Cuando el importador no presenta póliza de seguro efectiva, el RECAUCA establece la aplicación de una tarifa presuntiva del seguro equivalente al 1.50% sobre el valor FOB de la mercancía.\nSeguro teórico: $\\text{Seguro} = \\$50,000 \\times 1.50\\% = \\$750$.\nValor CIF ajustado: $\\text{CIF} = \\$50,000 + \\$4,000 + \\$750 = \\$54,750$, sobre el cual se recalcula la base imponible.',
        result: 'Seguro presuntivo del 1.5%: $750 USD; Base imponible final: $54,750 USD.',
      },
    ],
    retentionDrills: [
      {
        id: 'aduanas-drill-1',
        question: '¿Qué arancel de importación (DAI) abonan las mercancías originarias amparadas con DUCA-F en Centroamérica?',
        options: {
          A: '0% de DAI (libre comercio intrarregional).',
          B: '15% fijo según el SAC.',
          C: 'La mitad del arancel general de terceros países.',
          D: '5% por canon de infraestructura vial.',
        },
        correctAnswer: 'A',
        explanation: 'Bajo el Tratado General de Integración Económica Centroamericana, los bienes que cumplen las normas de origen regional circulan con arancel preferencial cero (0% DAI).',
      },
      {
        id: 'aduanas-drill-2',
        question: '¿Cuál es el primer y principal método de valoración aduanera según el Acuerdo del GATT/OMC?',
        options: {
          A: 'Método del Valor de Transacción de las mercancías importadas.',
          B: 'Método de Mercancías Idénticas.',
          C: 'Método Reconstruido a partir de costos de fabricación.',
          D: 'Método de Valor de Referencia Oficial de Precios.',
        },
        correctAnswer: 'A',
        explanation: 'El Artículo 1 del Acuerdo sobre Valoración de la OMC establece como método primordial el Valor de Transacción (precio realmente pagado o por pagar).',
      },
    ],
    latexCode: `% =========================================================================
% HOJA MNEMOTÉCNICA INSTITUCIONAL KUSKAT — ADUANAS Y CAUCA (1 PÁGINA)
% =========================================================================
\\documentclass[10pt,letterpaper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish]{babel}
\\usepackage[margin=0.8cm]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{multicol}
\\usepackage{tcolorbox}
\\usepackage{microtype}
\\pagestyle{empty}

\\definecolor{azulKuskat}{HTML}{0B1B3D}
\\definecolor{doradoKuskat}{HTML}{C59B27}
\\definecolor{fondoKuskat}{HTML}{FAF9F5}

\\tcbset{
  colback=fondoKuskat,
  colframe=azulKuskat,
  coltitle=doradoKuskat,
  fonttitle=\\bfseries\\sffamily\\footnotesize,
  boxrule=0.8pt,
  arc=2mm,
  top=2mm,bottom=2mm,left=2.5mm,right=2.5mm
}

\\begin{document}

\\begin{center}
  {\\color{azulKuskat}\\sffamily\\Large\\textbf{KUSKAT $\\cdot$ GUÍA RÁPIDA DE OPERACIONES ADUANERAS}}\\\\
  {\\footnotesize\\sffamily CAUCA IV $\\cdot$ RECAUCA $\\cdot$ Declaración DUCA $\\cdot$ Valoración OMC $\\cdot$ El Salvador}
\\end{center}
\\vspace{-2mm}
\\hrule
\\vspace{2mm}

\\begin{multicols*}{3}

\\begin{tcolorbox}[title=1. Regímenes Aduaneros (CAUCA IV)]
\\textbf{A. Regímenes Definitivos:}\\\\
$\\bullet$ \\textbf{Importación Definitiva:} Ingreso de mercancías del exterior para consumo local con pago de DAI e IVA.\\\\
$\\bullet$ \\textbf{Exportación Definitiva:} Salida del país de mercancías nacionales o nacionalizadas.

\\textbf{B. Regímenes Suspensivos:}\\\\
$\\bullet$ \\textbf{Tránsito Aduanero (DUCA-T):} Traslado de mercancías de una aduana a otra bajo control oficial y precinto.\\\\
$\\bullet$ \\textbf{Admisión Temporal (Maquila):} Ingreso temporal con suspensión de tributos para perfeccionamiento activo.\\\\
$\\bullet$ \\textbf{Depósito de Aduana (Fiscal):} Almacenaje por plazo legal hasta su destinación.

\\textbf{C. Regímenes Liberatorios:}\\\\
Zonas Francas Industriales y Tiendas Libres.
\\end{tcolorbox}

\\begin{tcolorbox}[title=2. Declaración Única (DUCA)]
\\textbf{DUCA-F (Intrarregional):}\\\\
Ampara mercancías originarias de los países del SICA bajo el Tratado General de Integración Económica. \\textbf{Arancel: 0\\% DAI} si cumple la regla de origen.

\\textbf{DUCA-D (Terceros Países):}\\\\
Para importaciones y exportaciones con socios extrarregionales (EE.UU., China, UE). Liquidación de aranceles según SAC.

\\textbf{DUCA-T (Tránsito Terrestre):}\\\\
Ampara operaciones de transporte internacional terrestre entre aduanas de Centroamérica.

\\textbf{¡Trampa Típica!}\\\\
No confundir la DUCA-F con la DUCA-D: si la mercancía proviene de fuera de Centroamérica pero hace escala en Guatemala, debe liquidarse con DUCA-D.
\\end{tcolorbox}

\\begin{tcolorbox}[title=3. SAC y Valoración OMC]
\\textbf{6 Reglas Generales de Clasificación:}\\\\
1. Textos de partida y notas legales (Legal).\\\\
2. Artículos incompletos o mezclas.\\\\
3. Partida más específica $>$ Carácter esencial $>$ Última en orden numérico.\\\\
4. Mayor analogía.\\\\
5. Estuches y envases.\\\\
6. Clasificación a nivel de subpartida.

\\textbf{Base Imponible en Aduana (CIF):}\\\\
$\\text{Valor CIF} = \\text{FOB} + \\text{Flete} + \\text{Seguro}$\\\\
$\\text{DAI} = \\text{Valor CIF} \\times \\%\\text{ Arancel SAC}$\\\\
$\\text{IVA} = (\\text{Valor CIF} + \\text{DAI}) \\times 13\\%$

\\textbf{Métodos de Valoración GATT/OMC:}\\\\
1. Valor de Transacción (Principal).\\\\
2. Mercancías Idénticas.\\\\
3. Mercancías Similares.\\\\
4. Deductivo $\\cdot$ 5. Reconstruido $\\cdot$ 6. Último Recurso.
\\end{tcolorbox}

\\end{multicols*}

\\vfill
\\begin{center}
  \\footnotesize\\sffamily Plataforma KUSKAT $\\cdot$ WhatsApp Oficial: +503 7657 4463 $\\cdot$ Material Aduanero Libre
\\end{center}

\\end{document}`,
  },

  // =========================================================================
  // 3. FICHA DE EMERGENCIAS MÉDICAS & SHOCK ROOM (MINSAL / AHA)
  // =========================================================================
  {
    id: 'emergencias-medicas',
    title: 'Ficha de Emergencias Médicas, Shock Room y Código Rojo',
    subtitle: 'Escala de Glasgow, Reanimación en Paro, Manejo de Choque y Protocolo Obstétrico',
    authority: 'Ministerio de Salud (MINSAL) · Guías Clínicas Oficiales · El Salvador',
    category: 'salud',
    icon: '🩺',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-200',
    summary: 'Guía clínica de 1 página con los algoritmos críticos de soporte vital avanzado (ACLS), reanimación hídrica en choque séptico, sulfato de magnesio en preeclampsia y escala neurológica de Glasgow.',
    sections: [
      {
        title: '1. Escala de Coma de Glasgow (GCS)',
        badge: 'Neurología',
        content: 'Evaluación rápida del estado de conciencia (Puntaje: 3 a 15).',
        formulasOrRules: [
          {
            label: 'Apertura Ocular (O: 1-4)',
            formula: '4 = \\text{Espontánea}; 3 = \\text{A la voz}; 2 = \\text{Al dolor}; 1 = \\text{Nula}',
            explanation: 'Evalúa la integridad de la formación reticular activadora ascendente.',
          },
          {
            label: 'Respuesta Verbal (V: 1-5)',
            formula: '5 = \\text{Orientado}; 4 = \\text{Confuso}; 3 = \\text{Inapropiada}; 2 = \\text{Incomprensible}; 1 = \\text{Nula}',
            explanation: 'Evalúa función hemisférica cortical y lenguaje.',
          },
          {
            label: 'Respuesta Motora (M: 1-6)',
            formula: '6 = \\text{Obedece}; 5 = \\text{Localiza}; 4 = \\text{Retira}; 3 = \\text{Decorticación}; 2 = \\text{Descerebración}; 1 = \\text{Nula}',
            explanation: '3 (flexión anormal/decorticación: corteza); 2 (extensión anormal/descerebración: tallo).',
          },
        ],
        commonPitfall: 'Glasgow ≤ 8 puntos es indicación mandataria de intubación orotraqueal y protección de vía aérea.',
      },
      {
        title: '2. Manejo de Choque & Reanimación Hídrica',
        badge: 'UCI / Urgencias',
        content: 'Restauración de la perfusión tisular y presión arterial media.',
        formulasOrRules: [
          {
            label: 'Presión Arterial Media (PAM)',
            formula: '\\text{PAM} = \\frac{\\text{PAS} + 2(\\text{PAD})}{3} \\ge 65\\,\\text{mmHg}',
            explanation: 'Meta mínima de perfusión para órganos vitales (cerebro, corazón, riñón).',
          },
          {
            label: 'Bolo de Cristaloides en Choque Séptico',
            formula: '30\\,\\text{mL/kg de Ringer Lactato en las primeras 3 horas}',
            explanation: 'En pediatría: bolos de 20 mL/kg en 10-20 min con evaluación continua de sobrecarga pulmonar.',
          },
          {
            label: 'Vasopresor de 1.ª Línea',
            formula: '\\text{Norepinefrina: } 0.05 - 0.3\\,\\mu\\text{g/kg/min}',
            explanation: 'Si la PAM < 65 mmHg tras infusión adecuada de volumen.',
          },
        ],
        commonPitfall: 'Administrar dopamina como vasopresor de primera línea en choque séptico (aumenta riesgo de arritmias letales).',
      },
      {
        title: '3. Código Rojo: Preeclampsia Severa',
        badge: 'Ginecología',
        content: 'Neuroprotección y control de crisis hipertensiva obstétrica (MINSAL).',
        formulasOrRules: [
          {
            label: 'Sulfato de Magnesio (Esquema Zuspan)',
            formula: '\\text{Carga: } 4\\,\\text{g IV en 20 min} \\rightarrow \\text{Mantenimiento: } 1\\,\\text{g/hora en infusión continua}',
            explanation: 'Monitorear reflejo patelar presente, diuresis > 30 mL/h y FR > 16 rpm. Antídoto: Gluconato de Calcio 1 g IV.',
          },
          {
            label: 'Antihipertensivo de Urgencia (Crisis: PAS ≥ 160 o PAD ≥ 110)',
            formula: '\\text{Hidralazina: } 5\\,\\text{mg IV c/20 min (máx 20 mg)} \\quad\\text{o}\\quad \\text{Labetalol: } 20\\,\\text{mg IV}',
            explanation: 'Meta terapéutica: PAD entre 90 y 100 mmHg para preservar flujo sanguíneo uteroplacentario.',
          },
        ],
        commonPitfall: 'Bajar bruscamente la presión arterial materna por debajo de 130/80 mmHg, provocando sufrimiento fetal agudo.',
      },
    ],
    solvedPracticeExamples: [
      {
        number: 1,
        title: 'Cálculo de puntaje en Escala de Glasgow (GCS)',
        scenario: 'Un paciente de 25 años ingresa al Shock Room tras sufrir un accidente en motocicleta sin casco. Al estímulo doloroso abre los ojos brevemente (O=2), emite quejidos incomprensibles (V=2) y localiza el dolor con la extremidad superior (M=5). Calcule su puntaje GCS e indique la conducta inmediata.',
        stepByStepSolution: 'Ocular: 2 puntos (al dolor).\nVerbal: 2 puntos (sonidos incomprensibles).\nMotor: 5 puntos (localiza el estímulo doloroso).\nPuntaje total: $GCS = 2 + 2 + 5 = 9\\,\\text{puntos}$.\nClasificación: Traumatismo craneoencefálico moderado (9-12 puntos). Monitoreo continuo de deterioro; si desciende a $\\le 8$, intubación orotraqueal mandatoria.',
        result: 'GCS: 9 puntos (TCE Moderado).',
      },
      {
        number: 2,
        title: 'Cálculo de PAM y reanimación hídrica en choque séptico',
        scenario: 'Un paciente con foco infeccioso pulmonar pesa $70\\,\\text{kg}$ y presenta una presión arterial de $80/50\\,\\text{mmHg}$. Calcule su PAM y el volumen total de cristaloides que debe recibir en las primeras 3 horas según Surviving Sepsis.',
        stepByStepSolution: 'Cálculo de Presión Arterial Media: $\\text{PAM} = \\frac{\\text{PAS} + 2(\\text{PAD})}{3} = \\frac{80 + 2(50)}{3} = \\frac{180}{3} = 60\\,\\text{mmHg}$.\nComo $\\text{PAM} = 60 < 65\\,\\text{mmHg}$, existe hipoperfusión orgánica.\nCálculo de reanimación hídrica: $30\\,\\text{mL/kg} \\times 70\\,\\text{kg} = 2,100\\,\\text{mL}$ de Ringer Lactato en las primeras 3 horas ($700\\,\\text{mL/hora}$).',
        result: 'PAM: 60 mmHg; Volumen Ringer Lactato: 2,100 mL en 3 horas.',
      },
      {
        number: 3,
        title: 'Preparación de sulfato de magnesio en Esquema Zuspan',
        scenario: 'Una paciente gestante de 34 semanas ingresa con PA 170/115 mmHg y cefalea intensa (Preeclampsia severa). Se cuenta con ampollas de Sulfato de Magnesio al 20% (10 mL = 2 gramos). Indique la preparación del bolo de impregnación y mantenimiento.',
        stepByStepSolution: 'Dosis de carga (Zuspan): $4\\,\\text{g IV}$ en 20 minutos.\nComo cada ampolla al 20% tiene $2\\,\\text{g}$ en $10\\,\\text{mL}$, se toman 2 ampollas ($20\\,\\text{mL} = 4\\,\\text{g}$) diluidas en $80\\,\\text{mL}$ de Solución Salina o Dextrosa al 5% para pasar en 20 minutos con bomba de infusión.\nDosis de mantenimiento: $1\\,\\text{g/hora IV}$ continua (10 g en 500 mL de solución a 50 mL/h). Antídoto disponible en cabecera: Gluconato de Calcio al 10% (1 g IV).',
        result: 'Carga: 4 g IV en 20 min; Mantenimiento: 1 g/h continuo.',
      },
      {
        number: 4,
        title: 'Dosificación de epinefrina en choque anafiláctico',
        scenario: 'Un paciente adulto de $60\\,\\text{kg}$ presenta estridor laríngeo, urticaria generalizada e hipotensión (PA 75/40 mmHg) minutos después de la aplicación de penicilina. Indique la dosis, concentración y vía de administración del fármaco de primera línea.',
        stepByStepSolution: 'El fármaco de elección indiscutible es la Epinefrina (Adrenalina) por vía INTRAMUSCULAR en la cara anterolateral del tercio medio del muslo (músculo vasto lateral).\nDosis en adulto: $0.3 - 0.5\\,\\text{mg}$ de ampolla 1:1,000 ($1\\,\\text{mg/mL}$ sin diluir). Para $60\\,\\text{kg}$, se aplican $0.5\\,\\text{mL}$ ($0.5\\,\\text{mg}$) IM.\nPuede repetirse cada 5 a 15 minutos según respuesta hemodinámica. Nunca esperar a la vía intravenosa para aplicar el primer bolo.',
        result: 'Epinefrina: 0.5 mg (0.5 mL de 1:1,000) IM en cara anterolateral del muslo.',
      },
      {
        number: 5,
        title: 'Protocolo de desfibrilación en Fibrilación Ventricular (ACLS)',
        scenario: 'En monitor cardiaco de paciente en paro cardiorrespiratorio se detecta Fibrilación Ventricular (FV) sin pulso. Indique la secuencia terapéutica inmediata según algoritmo ACLS.',
        stepByStepSolution: '1. Desfibrilación inmediata: 1 descarga asincrónica bifásica a $200\\,\\text{J}$ (o dosis máxima del desfibrilador).\n2. Reanudar inmediatamente RCP de alta calidad durante 2 minutos continuos (30 compresiones : 2 ventilaciones, o compresiones continuas con vía aérea avanzada).\n3. Evaluar ritmo tras 2 min; si persiste FV, aplicar 2.ª descarga a 200 J y administrar Epinefrina $1\\,\\text{mg IV}$ en bolo c/3-5 min.\n4. Si persiste refractaria tras 3.ª descarga, administrar Amiodarona $300\\,\\text{mg IV}$ en bolo.',
        result: 'Descarga inmediata a 200 J bifásico + 2 min RCP antes de reevaluar ritmo.',
      },
    ],
    retentionDrills: [
      {
        id: 'emergencias-drill-1',
        question: '¿Cuál es el umbral de puntaje de Glasgow por debajo del cual está indicada la intubación orotraqueal mandatoria?',
        options: {
          A: 'Puntaje de Glasgow ≤ 8.',
          B: 'Puntaje de Glasgow ≤ 12.',
          C: 'Puntaje de Glasgow ≤ 5.',
          D: 'Puntaje de Glasgow ≤ 10.',
        },
        correctAnswer: 'A',
        explanation: 'La regla neurológica universal "Glasgow 8 o menos, intubación al momento" protege la vía aérea del paciente con compromiso severo de conciencia.',
      },
      {
        id: 'emergencias-drill-2',
        question: '¿Cuál es el antídoto específico ante intoxicación por sulfato de magnesio (pérdida de reflejo patelar y paro respiratorio)?',
        options: {
          A: 'Gluconato de Calcio al 10% (1 g IV lento).',
          B: 'Naloxona 0.4 mg IV.',
          C: 'Flumazenil 0.5 mg IV.',
          D: 'Sulfato de Protamina 50 mg IV.',
        },
        correctAnswer: 'A',
        explanation: 'El gluconato de calcio antagoniza directamente los efectos del magnesio en la placa neuromuscular.',
      },
    ],
    latexCode: `% =========================================================================
% HOJA MNEMOTÉCNICA INSTITUCIONAL KUSKAT — EMERGENCIAS MÉDICAS (1 PÁGINA)
% =========================================================================
\\documentclass[10pt,letterpaper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish]{babel}
\\usepackage[margin=0.8cm]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{multicol}
\\usepackage{tcolorbox}
\\usepackage{microtype}
\\pagestyle{empty}

\\definecolor{azulKuskat}{HTML}{0B1B3D}
\\definecolor{doradoKuskat}{HTML}{C59B27}
\\definecolor{fondoKuskat}{HTML}{FAF9F5}

\\tcbset{
  colback=fondoKuskat,
  colframe=azulKuskat,
  coltitle=doradoKuskat,
  fonttitle=\\bfseries\\sffamily\\footnotesize,
  boxrule=0.8pt,
  arc=2mm,
  top=2mm,bottom=2mm,left=2.5mm,right=2.5mm
}

\\begin{document}

\\begin{center}
  {\\color{azulKuskat}\\sffamily\\Large\\textbf{KUSKAT $\\cdot$ FICHA CRÍTICA DE EMERGENCIAS MÉDICAS}}\\\\
  {\\footnotesize\\sffamily Glasgow $\\cdot$ Choque $\\cdot$ ACLS $\\cdot$ Preeclampsia Código Rojo $\\cdot$ Guías MINSAL El Salvador}
\\end{center}
\\vspace{-2mm}
\\hrule
\\vspace{2mm}

\\begin{multicols*}{3}

\\begin{tcolorbox}[title=1. Escala de Coma de Glasgow]
\\textbf{Apertura Ocular (O: 1-4):}\\\\
4 = Espontánea $\\cdot$ 3 = A la voz\\\\
2 = Al dolor $\\cdot$ 1 = Nula

\\textbf{Respuesta Verbal (V: 1-5):}\\\\
5 = Orientado $\\cdot$ 4 = Confuso\\\\
3 = Inapropiada $\\cdot$ 2 = Incomprensible\\\\
1 = Nula

\\textbf{Respuesta Motora (M: 1-6):}\\\\
6 = Obedece $\\cdot$ 5 = Localiza dolor\\\\
4 = Retira al dolor\\\\
3 = Flexión anormal (Decorticación)\\\\
2 = Extensión anormal (Descerebración)\\\\
1 = Nula

\\textbf{Puntaje Total: 3 a 15}\\\\
$\\bullet$ Leve: 13--15\\\\
$\\bullet$ Moderado: 9--12\\\\
$\\bullet$ \\textbf{Severo: $\\le 8$ (¡Intubación Mandatoria!)}
\\end{tcolorbox}

\\begin{tcolorbox}[title=2. Choque y Reanimación Hídrica]
\\textbf{Presión Arterial Media (PAM):}\\\\
$\\text{PAM} = \\frac{\\text{PAS} + 2(\\text{PAD})}{3}$\\\\
\\textbf{Meta clínica:} $\\text{PAM} \\ge 65\\text{ mmHg}$

\\textbf{Choque Séptico:}\\\\
1. Lactato sérico y hemocultivos x 2.\\\\
2. \\textbf{Cristaloides:} $30\\text{ mL/kg}$ Ringer Lactato en primeras 3 horas.\\\\
3. \\textbf{Vasopresor de 1.ª línea:} Norepinefrina ($0.05-0.3\\,\\mu\\text{g/kg/min}$) si persiste PAM $<65$.\\\\
4. \\textbf{Antibióticos IV} de amplio espectro en la \\textbf{Hora de Oro}.

\\textbf{Choque Anafiláctico:}\\\\
Epinefrina IM $0.3-0.5\\text{ mg}$ (1:1,000) en cara anterolateral del muslo c/5-15 min.
\\end{tcolorbox}

\\begin{tcolorbox}[title=3. Código Rojo Obstétrico]
\\textbf{Preeclampsia con Criterios de Severidad:}\\\\
$\\text{PAS} \\ge 160\\text{ o } \\text{PAD} \\ge 110\\text{ mmHg} +$ cefalea, escotomas, epigastralgia o trombocitopenia.

\\textbf{Neuroprotección (Sulfato de Magnesio):}\\\\
$\\bullet$ \\textbf{Carga:} $4\\text{ g IV}$ al 20\\% en 20 minutos.\\\\
$\\bullet$ \\textbf{Mantenimiento:} $1\\text{ g/hora IV}$ continua.\\\\
$\\bullet$ \\textbf{Signos de toxicidad:} Pérdida reflejo patelar ($>9\\text{ mg/dL}$), depresión respiratoria ($>12\\text{ mg/dL}$).\\\\
$\\bullet$ \\textbf{Antídoto:} Gluconato de Calcio $1\\text{ g IV}$ lento.

\\textbf{Crisis Hipertensiva:}\\\\
Hidralazina $5\\text{ mg IV}$ c/20 min o Labetalol $20\\text{ mg IV}$. Meta: PAD $90-100\\text{ mmHg}$.
\\end{tcolorbox}

\\end{multicols*}

\\vfill
\\begin{center}
  \\footnotesize\\sffamily Plataforma KUSKAT $\\cdot$ WhatsApp Oficial: +503 7657 4463 $\\cdot$ Protocolos MINSAL
\\end{center}

\\end{document}`,
  },

  // =========================================================================
  // 4. FICHA PROCESAL Y CONSTITUCIONAL: PLAZOS & GARANTÍAS DE TUTELA
  // =========================================================================
  {
    id: 'constitucional-procesal',
    title: 'Compendio Rápido de Plazos y Garantías Constitucionales',
    subtitle: 'Garantías del Detenido (Art. 13 Cn.), Amparo, Hábeas Corpus y Objeciones en Audiencia',
    authority: 'Corte Suprema de Justicia (CSJ) · República de El Salvador',
    category: 'juridico',
    icon: '⚖️',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    summary: 'Síntesis procesal de los plazos constitucionales de detención, requisitos de admisibilidad de la demanda de amparo y causales taxativas de objeción probatoria en sala de audiencia (Arts. 209-212 PrPn).',
    sections: [
      {
        title: '1. Plazos Constitucionales de Detención (Art. 13 Cn.)',
        badge: 'Garantías Penales',
        content: 'Límites temporales estrictos del poder punitivo estatal.',
        formulasOrRules: [
          {
            label: 'Detención por Inquisición Administrativa',
            formula: '\\text{Máximo 72 horas (3 días)}',
            explanation: 'La Policía Nacional Civil o Fiscalía debe remitir al detenido ante el Juez de Paz con el requerimiento fiscal respectivo.',
          },
          {
            label: 'Término de Inquirir Judicial',
            formula: '\\text{Máximo 72 horas adicionales}',
            explanation: 'Plazo improrrogable del Juez de Paz para celebrar audiencia inicial y decretar instrucción formal o sobreseimiento.',
          },
          {
            label: 'Plazo Máximo de Detención Provisional (Art. 6 PrPn)',
            formula: '12\\,\\text{meses (delitos menos graves)} \\quad / \\quad 24\\,\\text{meses (delitos graves)}',
            explanation: 'Superado este plazo sin sentencia, procede inmediatamente la libertad por Hábeas Corpus (H.C. 179-2011).',
          },
        ],
        commonPitfall: 'Contar los plazos de detención en días hábiles; los plazos de privación de libertad corren de momento a momento en horas corridas.',
      },
      {
        title: '2. Taller de Amparo: 5 Requisitos de Admisibilidad',
        badge: 'LPrCn',
        content: 'Requisitos formales taxativos ante la Sala de lo Constitucional.',
        formulasOrRules: [
          {
            label: 'Agotamiento de Vía Ordinaria',
            formula: '\\text{Principio de Definitividad (Art. 12 inc. 3 LPrCn)}',
            explanation: 'Deben haberse agotado todas las apelaciones y recursos ordinarios salvo amenaza de daño irreparable.',
          },
          {
            label: 'Agravio Personal, Directo y Actual',
            formula: '\\text{Legitimación Activa Directa}',
            explanation: 'El amparo salvadoreño no es acción popular; exige lesión concreta en la esfera jurídica del accionante.',
          },
          {
            label: 'Medida Cautelar de Suspensión',
            formula: 'Fumus Boni Iuris + Periculum In Mora',
            explanation: 'Solicitud fundada para frenar los efectos del acto u orden de autoridad impugnada mientras se resuelve el fondo.',
          },
        ],
        commonPitfall: 'Plantear discrepancias de mera legalidad ordinaria (interpretación de un contrato común) como violaciones constitucionales.',
      },
      {
        title: '3. Catálogo de Objeciones en Audiencia Oral (PrPn)',
        badge: 'Litigación Oral',
        content: 'Control de admisibilidad probatoria en interrogatorio.',
        formulasOrRules: [
          {
            label: 'Pregunta Sugestiva (Art. 210 inc. 2)',
            formula: '\\text{Prohibida en directo, permitida en contrainterrogatorio}',
            explanation: 'La pregunta incorpora o sugiere la respuesta que el interrogador desea obtener.',
          },
          {
            label: 'Pregunta Capciosa o Engañosa (Art. 209)',
            formula: '\\text{Prohibida en todo momento}',
            explanation: 'Tiende a inducir a error o trampa al deponente bajo supuestos fácticos falsos.',
          },
          {
            label: 'Pregunta Conclusiva o de Opinión (Art. 209)',
            formula: '\\text{Inadmisible a testigos comunes}',
            explanation: 'Los juicios de valor técnicos corresponden exclusivamente a los peritos juramentados.',
          },
        ],
        commonPitfall: 'Objetar una pregunta sugestiva formulada en contrainterrogatorio; en esa fase es una técnica procesal plenamente legítima.',
      },
    ],
    solvedPracticeExamples: [
      {
        number: 1,
        title: 'Cómputo exacto del plazo de detención administrativa (Art. 13 Cn.)',
        scenario: 'Un ciudadano es detenido en flagrancia por la PNC un viernes a las 18:00 horas bajo acusación de delito común en régimen ordinario. ¿Hasta qué día y hora exacta tiene la Fiscalía General de la República para presentar el requerimiento fiscal ante el Juzgado de Paz?',
        stepByStepSolution: 'El Art. 13 inciso 3 de la Constitución establece que la detención administrativa no puede exceder de 72 horas corridas de momento a momento, sin distinción de fines de semana o días no laborables.\nHora de inicio: Viernes 18:00 horas.\n24 horas: Sábado 18:00 horas.\n48 horas: Domingo 18:00 horas.\n72 horas: Lunes 18:00 horas.\nLa FGR debe radicar el requerimiento con el detenido antes del lunes a las 18:00 horas.',
        result: 'Vencimiento fatal del plazo: Lunes a las 18:00 horas exactas.',
      },
      {
        number: 2,
        title: 'Redacción de pretensión de amparo contra acto de autoridad',
        scenario: 'Un empleado público es destituido de su cargo por acuerdo ministerial sin procedimiento previo de audiencia ni defensa (violación al Art. 11 Cn.). Formule la fundamentación del agravio para la demanda de amparo.',
        stepByStepSolution: '1. Acto reclamado: Acuerdo ministerial N.° 45 de fecha X que ordena la destitución inmediata.\n2. Autoridad demandada: Titular del Ministerio correspondiente.\n3. Derecho conculcado: Derecho de Audiencia, Derecho de Defensa y Estabilidad Laboral (Arts. 11, 12 y 219 Cn.).\n4. Agravio directo: Cesación arbitraria de ingresos salariales y privación del cargo sin proceso sancionador previo.\n5. Definitividad: No existe recurso jerárquico adicional en la vía administrativa que suspenda el acto.',
        result: 'Pretensión admisible: Restitución en el cargo y medida cautelar de suspensión de efectos.',
      },
      {
        number: 3,
        title: 'Interposición de objeción por pregunta sugestiva en interrogatorio directo',
        scenario: 'Durante el interrogatorio directo de la Fiscalía a su testigo protegido, el fiscal pregunta: "¿Verdad que vio al imputado salir corriendo con un arma de fuego calibre 9 milímetros en la mano derecha?". El defensor se pone de pie. Formule la objeción técnica adecuada.',
        stepByStepSolution: 'Fundamento legal: Art. 210 inc. 2 PrPn prohíbe de forma taxativa las preguntas sugestivas en el interrogatorio directo.\nFormulación técnica del defensor: "¡Objeción, su Señoría! Pregunta sugestiva. El fiscal está incorporando la respuesta fáctica que desea obtener e induciendo el testimonio en interrogatorio directo".\nResolución judicial: "Ha lugar la objeción. La Fiscalía reformule su interrogante de manera abierta".',
        result: 'Objeción: Sugestiva (Art. 210 inc. 2 PrPn). Declarada con lugar.',
      },
      {
        number: 4,
        title: 'Procedencia de Hábeas Corpus por exceso de detención provisional',
        scenario: 'Un imputado procesado por delito grave cumple 26 meses en prisión preventiva en el Centro Penal de San Vicente sin haber recibido sentencia definitiva de primera instancia (Art. 6 PrPn). ¿Procede el Hábeas Corpus ante la Sala de lo Constitucional?',
        stepByStepSolution: 'El Artículo 6 del Código Procesal Penal fija un límite máximo improrrogable de 24 meses de detención provisional para delitos graves.\nJurisprudencia constitucional consolidada (HC 179-2011, HC 41-2015): superados los 24 meses sin sentencia, la privación de libertad se vuelve inconstitucional y arbitraria por vencimiento del plazo razonable.\nLa Sala debe ordenar el cese inmediato de la detención provisional y la imposición de medidas cautelares alternas no privativas de libertad.',
        result: 'Hábeas Corpus procedente por vulneración al derecho fundamental de libertad física.',
      },
      {
        number: 5,
        title: 'Técnica de confrontación con declaración previa (Art. 212 PrPn)',
        scenario: 'En vista pública, el testigo declara que el asaltante vestía camisa blanca, pero en su entrevista fiscal previa declaró que vestía chumpa negra. Describa los 4 pasos procesales para impugnar su credibilidad.',
        stepByStepSolution: 'Paso 1 (Compromiso): Hacer que el testigo ratifique su testimonio actual en sala ("Usted acaba de afirmar que vestía camisa blanca, ¿correcto?").\nPaso 2 (Acreditación): Acreditar la declaración previa ("¿Recuerda haber rendido entrevista ante la Fiscalía el 10 de marzo con su firma?").\nPaso 3 (Confrontación): Mostrar el documento al testigo y solicitarle que lea en silencio el fragmento respectivo.\nPaso 4 (Contradicción): Preguntarle: "¿Leyó donde usted declaró que vestía chumpa negra?". No discutir con el testigo; dejar en evidencia la discrepancia.',
        result: 'Impugnación procesal completa de credibilidad por contradicción sustancial.',
      },
    ],
    retentionDrills: [
      {
        id: 'procesal-drill-1',
        question: '¿En qué fase procesal del juicio penal salvadoreño es legítimo y permitido formular preguntas sugestivas?',
        options: {
          A: 'En el contrainterrogatorio al testigo de la contraparte.',
          B: 'En el interrogatorio directo al testigo propio.',
          C: 'En el alegato de apertura únicamente.',
          D: 'Está prohibido en todas las fases del juicio oral.',
        },
        correctAnswer: 'A',
        explanation: 'El Art. 210 inc. 2 PrPn autoriza expresamente las preguntas sugestivas durante el contrainterrogatorio para confrontar y controlar al testigo adverso.',
      },
      {
        id: 'procesal-drill-2',
        question: '¿Cuál es el plazo máximo absoluto de detención provisional para delitos graves en El Salvador según el Art. 6 PrPn?',
        options: {
          A: '24 meses.',
          B: '12 meses.',
          C: '36 meses.',
          D: '6 meses.',
        },
        correctAnswer: 'A',
        explanation: 'El Art. 6 PrPn limita la detención preventiva a 12 meses para delitos menos graves y a 24 meses para delitos graves.',
      },
    ],
    latexCode: `% =========================================================================
% HOJA MNEMOTÉCNICA INSTITUCIONAL KUSKAT — CONSTITUCIONAL Y PROCESAL (1 PÁGINA)
% =========================================================================
\\documentclass[10pt,letterpaper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish]{babel}
\\usepackage[margin=0.8cm]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{multicol}
\\usepackage{tcolorbox}
\\usepackage{microtype}
\\pagestyle{empty}

\\definecolor{azulKuskat}{HTML}{0B1B3D}
\\definecolor{doradoKuskat}{HTML}{C59B27}
\\definecolor{fondoKuskat}{HTML}{FAF9F5}

\\tcbset{
  colback=fondoKuskat,
  colframe=azulKuskat,
  coltitle=doradoKuskat,
  fonttitle=\\bfseries\\sffamily\\footnotesize,
  boxrule=0.8pt,
  arc=2mm,
  top=2mm,bottom=2mm,left=2.5mm,right=2.5mm
}

\\begin{document}

\\begin{center}
  {\\color{azulKuskat}\\sffamily\\Large\\textbf{KUSKAT $\\cdot$ SÍNTESIS CONSTITUCIONAL Y PROCESAL}}\\\\
  {\\footnotesize\\sffamily Plazos de Detención $\\cdot$ Requisitos de Amparo $\\cdot$ Objeciones en Audiencia $\\cdot$ El Salvador}
\\end{center}
\\vspace{-2mm}
\\hrule
\\vspace{2mm}

\\begin{multicols*}{3}

\\begin{tcolorbox}[title=1. Plazos de Detención (Art. 13 Cn.)]
\\textbf{A. Detención Administrativa:}\\\\
$\\bullet$ Máximo \\textbf{72 horas} (PNC / Fiscalía).\\\\
$\\bullet$ Obligación de remitir al detenido ante el Juez de Paz con el requerimiento.

\\textbf{B. Término de Inquirir Judicial:}\\\\
$\\bullet$ Máximo \\textbf{72 horas adicionales} para celebrar Audiencia Inicial y resolver situación jurídica.

\\textbf{C. Detención Provisional (Art. 6 PrPn):}\\\\
$\\bullet$ \\textbf{12 meses:} Delitos menos graves ($<3$ años de pena).\\\\
$\\bullet$ \\textbf{24 meses:} Delitos graves ($>3$ años).\\\\
$\\bullet$ Superado el plazo sin sentencia firme, procede la libertad inmediata vía \\textbf{Hábeas Corpus}.

\\textbf{¡Trampa Típica!}\\\\
Los plazos de privación de libertad física corren de momento a momento y \\textbf{no se suspenden en días inhábiles}.
\\end{tcolorbox}

\\begin{tcolorbox}[title=2. Admisibilidad del Amparo]
\\textbf{A. Principio de Definitividad:}\\\\
Haber agotado todos los recursos ordinarios de apelación previstos en la ley secundaria.

\\textbf{B. Agravio Directo y Personal:}\\\\
El amparo salvadoreño \\textbf{no es acción popular}; requiere demostración de lesión directa en la esfera jurídica del quejoso.

\\textbf{C. Dimensión Constitucional:}\\\\
Diferenciar agravio constitucional de \\textbf{asuntos de mera legalidad} (interpretación judicial de pruebas o contratos ordinarios).

\\textbf{D. Medida Cautelar (Suspensión):}\\\\
Exige acreditar:
\\begin{enumerate}\\setlength{\\itemsep}{0pt}
  \\item \\textit{Fumus boni iuris} (apariencia de buen derecho).
  \\item \\textit{Periculum in mora} (peligro en la demora y daño irreparable).
\\end{enumerate}
\\end{tcolorbox}

\\begin{tcolorbox}[title=3. Objeciones en Audiencia Oral]
\\textbf{Catálogo Taxativo (Arts. 209-212 PrPn):}\\\\
$\\bullet$ \\textbf{Sugestiva (Art. 210 inc. 2):} Incorpora la respuesta en la pregunta. \\textit{Prohibida en directo, válida en contrainterrogatorio}.\\\\
$\\bullet$ \\textbf{Capciosa (Art. 209):} Tramposa o engañosa. \\textit{Prohibida siempre}.\\\\
$\\bullet$ \\textbf{Impertinente / Irrelevante:} Sin relación con la teoría del caso o los hechos acusados.\\\\
$\\bullet$ \\textbf{Compuesta:} Dos o más hechos en una misma pregunta.\\\\
$\\bullet$ \\textbf{Opinión / Conclusiva:} Juicios de valor reservados a los peritos.\\\\
$\\bullet$ \\textbf{Repetitiva / Hostigamiento:} Hecho ya contestado.

\\textbf{¡Trampa Típica!}\\\\
No objetar la pregunta sugestiva en el contra-examen: allí es la herramienta legítima para confrontar al testigo adverso.
\\end{tcolorbox}

\\end{multicols*}

\\vfill
\\begin{center}
  \\footnotesize\\sffamily Plataforma KUSKAT $\\cdot$ WhatsApp Oficial: +503 7657 4463 $\\cdot$ Derecho Procesal Salvadoreño
\\end{center}

\\end{document}`,
  },

  // =========================================================================
  // 5. FICHA JÓVENES TALENTO & OLIMPIADAS CIENTÍFICAS (STEM AVANZADO)
  // =========================================================================
  {
    id: 'jovenes-talento-stem',
    title: 'Ficha Maestra: Jóvenes Talento & Olimpiadas Científicas',
    subtitle: 'Formulario de Alto Rendimiento: Desigualdades, Cinemática Rotacional, van \'t Hoff y Genética',
    authority: 'Programa Jóvenes Talento (MINED - UES) · Facultad de Ciencias Naturales y Matemática',
    category: 'academico',
    icon: '🏆',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    summary: 'Compendio de fórmulas avanzadas para la Olimpiada Nacional de Matemática (ONM), Física (ONF), Química (ONQ), Biología (ONB) e Informática (OSI) en 1 sola hoja carta.',
    sections: [
      {
        title: '1. Desigualdades & Teoría de Números',
        badge: 'ONM (Matemática)',
        content: 'Relaciones algebraicas y aritméticas fundamentales de olimpiada.',
        formulasOrRules: [
          {
            label: 'Desigualdad AM-GM (Media Aritmética - Geométrica)',
            formula: '\\frac{x_1 + x_2 + \\dots + x_n}{n} \\ge \\sqrt[n]{x_1 x_2 \\dots x_n}',
            explanation: 'Válida para todo $x_i \\ge 0$. La igualdad se alcanza si y solo si $x_1 = x_2 = \\dots = x_n$.',
          },
          {
            label: 'Desigualdad de Cauchy-Schwarz',
            formula: '\\left(\\sum_{i=1}^n a_i b_i\\right)^2 \\le \\left(\\sum_{i=1}^n a_i^2\\right) \\left(\\sum_{i=1}^n b_i^2\\right)',
            explanation: 'La igualdad se cumple si y solo si los vectores son proporcionales: $a_i / b_i = \\text{constante}$.',
          },
          {
            label: 'Aritmética Modular (Fermat / Euler)',
            formula: 'a^{p-1} \\equiv 1 \\pmod p; \\quad a^{\\phi(m)} \\equiv 1 \\pmod m',
            explanation: 'Para $\\gcd(a, p)=1$ con $p$ primo, y $\\gcd(a, m)=1$ con $\\phi(m)$ la función totatriz.',
          },
        ],
        commonPitfall: 'Aplicar la desigualdad AM-GM a variables reales negativas; solo es válida para reales no negativos.',
      },
      {
        title: '2. Mecánica Rotacional & Rodadura',
        badge: 'ONF (Física)',
        content: 'Dinámica de cuerpos rígidos y conservación de momento angular.',
        formulasOrRules: [
          {
            label: 'Teorema de Steiner (Ejes Paralelos)',
            formula: 'I = I_{cm} + M d^2',
            explanation: 'Permite calcular la inercia respecto a cualquier eje paralelo situado a distancia $d$ del centro de masa.',
          },
          {
            label: 'Aceleración en Rodadura Pura (Plano Inclinado)',
            formula: 'a_{cm} = \\frac{g\\sin\\theta}{1 + \\beta}; \\quad \\beta = \\frac{I_{cm}}{MR^2}',
            explanation: 'Para esfera sólida $\\beta = 2/5 = 0.4$; cilindro $\\beta = 1/2 = 0.5$; aro $\\beta = 1.0$.',
          },
          {
            label: 'Conservación del Momento Angular',
            formula: '\\vec{L} = I\\vec{\\omega} = \\text{constante} \\quad (\\text{si } \\vec{\\tau}_{ext} = \\vec{0})',
            explanation: 'Si el momento de inercia disminuye, la velocidad angular aumenta proporcionalmente.',
          },
        ],
        commonPitfall: 'Creer que la esfera más pesada rueda más rápido; la aceleración depende de la geometría $\\beta$, no de la masa.',
      },
      {
        title: '3. Termodinámica Química & Genética',
        badge: 'ONQ / ONB / OSI',
        content: 'Energía libre de Gibbs, van \'t Hoff y equilibrio genético.',
        formulasOrRules: [
          {
            label: 'Ecuación Integrada de van \'t Hoff',
            formula: '\\ln\\left(\\frac{K_2}{K_1}\\right) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)',
            explanation: 'Si $\\Delta H^\\circ > 0$ (endotérmica), elevar $T$ incrementa $K_{eq}$ desplazando el equilibrio a productos.',
          },
          {
            label: 'Equilibrio de Hardy-Weinberg',
            formula: 'p + q = 1; \\quad p^2 + 2pq + q^2 = 1',
            explanation: 'Frecuencia de heterocigotos sanos portadores $= 2pq$. Fenotipo recesivo $= q^2$.',
          },
          {
            label: 'Complejidad Algorítmica Dijkstra (OSI)',
            formula: '\\mathcal{O}((|V| + |E|)\\log |V|)',
            explanation: 'Complejidad temporal óptima para caminos mínimos con montículo binario de mínimos.',
          },
        ],
        commonPitfall: 'Dividir $\\Delta H$ en kJ entre $R$ en Joules sin convertir a unidades homogéneas.',
      },
    ],
    solvedPracticeExamples: [
      {
        number: 1,
        title: 'Optimización algebraica mediante desigualdad AM-GM',
        scenario: 'Determine el valor mínimo estricto que puede tomar la función $f(x) = x + \\frac{9}{x}$ para todos los números reales estrictamente positivos $x > 0$.',
        stepByStepSolution: 'Paso 1: Verificamos que los términos son positivos: para $x > 0$, tanto $x$ como $9/x$ son positivos.\nPaso 2: Aplicamos la desigualdad AM-GM para $n = 2$ elementos ($a = x, b = 9/x$):\n$\\frac{x + 9/x}{2} \\ge \\sqrt{x \\cdot \\frac{9}{x}} = \\sqrt{9} = 3$.\nPaso 3: Multiplicamos por 2 a ambos lados:\n$x + \\frac{9}{x} \\ge 6$.\nPaso 4: Verificamos la condición de igualdad: la igualdad se cumple si y solo si $a = b \\implies x = 9/x \\implies x^2 = 9 \\implies x = 3$ (positivo).',
        result: 'Valor mínimo: 6 (se alcanza exactamente en $x = 3$).',
      },
      {
        number: 2,
        title: 'Momento de inercia con Teorema de Steiner',
        scenario: 'Una barra delgada y homogénea de masa $M = 2.0\\,\\text{kg}$ y longitud $L = 1.2\\,\\text{m}$ gira alrededor de un eje perpendicular que pasa por un punto situado a $d = 0.3\\,\\text{m}$ de su centro de masa. Calcule su momento de inercia.',
        stepByStepSolution: 'Inercia respecto al centro de masa de una varilla: $I_{cm} = \\frac{1}{12} M L^2 = \\frac{1}{12} (2.0) (1.2)^2 = \\frac{1}{12} (2.0)(1.44) = 0.24\\,\\text{kg}\\cdot\\text{m}^2$.\nAplicamos el Teorema de Steiner: $I = I_{cm} + M d^2$.\n$I = 0.24 + (2.0)(0.3)^2 = 0.24 + (2.0)(0.09) = 0.24 + 0.18 = 0.42\\,\\text{kg}\\cdot\\text{m}^2$.',
        result: 'Momento de inercia: $I = 0.42\\,\\text{kg}\\cdot\\text{m}^2$.',
      },
      {
        number: 3,
        title: 'Reducción de potencias con Pequeño Teorema de Fermat',
        scenario: 'Calcule el residuo de dividir $2^{100}$ entre 13 utilizando congruencias modulares.',
        stepByStepSolution: 'Como 13 es un número primo y $\\gcd(2, 13) = 1$, por el Pequeño Teorema de Fermat: $2^{12} \\equiv 1 \\pmod{13}$.\nDescomponemos el exponente: $100 = 12 \\times 8 + 4$.\n$2^{100} = (2^{12})^8 \\cdot 2^4 \\equiv (1)^8 \\cdot 2^4 \\equiv 2^4 \\pmod{13}$.\nCalculamos $2^4 = 16$. Reduciendo módulo 13: $16 = 13(1) + 3 \\implies 16 \\equiv 3 \\pmod{13}$.',
        result: 'Residuo exacto: 3.',
      },
      {
        number: 4,
        title: 'Cálculo de pH en solución buffer con Henderson-Hasselbalch',
        scenario: 'Se prepara una disolución amortiguadora con $0.15\\,\\text{M}$ de ácido acético ($pK_a = 4.76$) y $0.30\\,\\text{M}$ de acetato de sodio. Calcule el pH resultante.',
        stepByStepSolution: 'Ecuación de Henderson-Hasselbalch: $\\text{pH} = pK_a + \\log_{10}\\left(\\frac{[\\text{Base Conjugada}]}{[\\text{Ácido}]}\\right)$.\nSustituimos las concentraciones molares:\n$\\text{pH} = 4.76 + \\log_{10}\\left(\\frac{0.30}{0.15}\\right) = 4.76 + \\log_{10}(2.0)$.\nComo $\\log_{10}(2.0) \\approx 0.301$, se obtiene:\n$\\text{pH} = 4.76 + 0.301 = 5.061 \\approx 5.06$.',
        result: 'pH de la solución tampón: $5.06$.',
      },
      {
        number: 5,
        title: 'Frecuencia de heterocigotos en equilibrio de Hardy-Weinberg',
        scenario: 'En una población silvestre de mariposas, el color alar oscuro es determinado por un alelo recesivo $b$. Si el $16\\%$ de las mariposas exhibe alas oscuras ($q^2 = 0.16$), calcule la frecuencia esperada de individuos heterocigotos portadores ($2pq$).',
        stepByStepSolution: 'Frecuencia del fenotipo recesivo: $q^2 = 0.16 \\implies q = \\sqrt{0.16} = 0.40$.\nFrecuencia del alelo dominante: $p = 1 - q = 1 - 0.40 = 0.60$.\nFrecuencia esperada de heterocigotos: $2pq = 2(0.60)(0.40) = 0.48$.\nRepresenta exactamente el $48\\%$ de la población.',
        result: 'Frecuencia de portadores heterocigotos: $48\\%$ ($0.48$).',
      },
    ],
    retentionDrills: [
      {
        id: 'stem-drill-1',
        question: '¿Bajo qué condición matemática exacta se cumple la igualdad en la desigualdad AM-GM?',
        options: {
          A: 'Cuando todos los términos son idénticos entre sí ($x_1 = x_2 = \\dots = x_n$).',
          B: 'Cuando su suma total es igual a 1.',
          C: 'Cuando el número de variables es par.',
          D: 'Cuando todas las variables son números primos.',
        },
        correctAnswer: 'A',
        explanation: 'La igualdad en la desigualdad de medias aritmético-geométrica solo se verifica si todos los términos componentes son numéricamente iguales.',
      },
      {
        id: 'stem-drill-2',
        question: 'Si una esfera sólida ($\\beta=0.4$) y un cilindro sólido ($\\beta=0.5$) ruedan sin deslizar en una pendiente idéntica, ¿por qué la esfera acelera más?',
        options: {
          A: 'Porque destina una menor fracción de su energía a la rotación, dejando más energía para la traslación.',
          B: 'Porque tiene mayor masa superficial.',
          C: 'Porque la fricción sobre la esfera es cero.',
          D: 'Porque su centro de masa oscila periódicamente.',
        },
        correctAnswer: 'A',
        explanation: 'A menor coeficiente de inercia $\\beta$, menor proporción de energía potencial se consume en el modo cinético rotacional, maximizando la velocidad lineal de traslación ($a = g\\sin\\theta/(1+\\beta)$).',
      },
    ],
    latexCode: `% =========================================================================
% HOJA MNEMOTÉCNICA INSTITUCIONAL KUSKAT — JÓVENES TALENTO (1 PÁGINA)
% =========================================================================
\\documentclass[10pt,letterpaper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish]{babel}
\\usepackage[margin=0.8cm]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{multicol}
\\usepackage{tcolorbox}
\\usepackage{microtype}
\\pagestyle{empty}

\\definecolor{azulKuskat}{HTML}{0B1B3D}
\\definecolor{doradoKuskat}{HTML}{C59B27}
\\definecolor{fondoKuskat}{HTML}{FAF9F5}

\\tcbset{
  colback=fondoKuskat,
  colframe=azulKuskat,
  coltitle=doradoKuskat,
  fonttitle=\\bfseries\\sffamily\\footnotesize,
  boxrule=0.8pt,
  arc=2mm,
  top=2mm,bottom=2mm,left=2.5mm,right=2.5mm
}

\\begin{document}

\\begin{center}
  {\\color{azulKuskat}\\sffamily\\Large\\textbf{KUSKAT $\\cdot$ FORMULARIO OLÍMPICO JÓVENES TALENTO}}\\\\
  {\\footnotesize\\sffamily AM-GM $\\cdot$ Steiner $\\cdot$ Rodadura $\\cdot$ van 't Hoff $\\cdot$ Hardy-Weinberg $\\cdot$ UES \& MINED}
\\end{center}
\\vspace{-2mm}
\\hrule
\\vspace{2mm}

\\begin{multicols*}{3}

\\begin{tcolorbox}[title=1. Matemática Olímpica (ONM)]
\\textbf{Desigualdad AM-GM:}\\\\
$\\frac{x_1 + \\dots + x_n}{n} \\ge \\sqrt[n]{x_1 \\dots x_n}$\\\\
Igualdad si y solo si $x_1 = \\dots = x_n$.

\\textbf{Cauchy-Schwarz:}\\\\
$(\\sum a_i b_i)^2 \\le (\\sum a_i^2)(\\sum b_i^2)$

\\textbf{Aritmética Modular:}\\\\
$\\bullet$ Fermat: $a^{p-1} \\equiv 1 \\pmod p$ (si $\\gcd(a,p)=1$).\\\\
$\\bullet$ Euler: $a^{\\phi(m)} \\equiv 1 \\pmod m$.\\\\
$\\bullet$ Wilson: $(p-1)! \\equiv -1 \\pmod p$.

\\textbf{Principio del Palomar Fuerte:}\\\\
Al colocar $n$ palomas en $k$ casillas, al menos una tiene $\\ge \\lceil n/k \\rceil$.
\\end{tcolorbox}

\\begin{tcolorbox}[title=2. Física de Rotación (ONF)]
\\textbf{Teorema de Steiner:}\\\\
$I = I_{cm} + M d^2$

\\textbf{Rodadura Pura en Plano Inclinado:}\\\\
$a_{cm} = \\frac{g\\sin\\theta}{1 + \\beta}, \\quad \\beta = \\frac{I_{cm}}{MR^2}$\\\\
$\\bullet$ Esfera sólida: $\\beta = 0.4$ ($a = \\frac{5}{7}g\\sin\\theta$).\\\\
$\\bullet$ Cilindro sólido: $\\beta = 0.5$ ($a = \\frac{2}{3}g\\sin\\theta$).\\\\
$\\bullet$ Aro hueco: $\\beta = 1.0$ ($a = \\frac{1}{2}g\\sin\\theta$).

\\textbf{Momento Angular:}\\\\
$\\vec{\\tau}_{ext} = \\frac{d\\vec{L}}{dt} = \\vec{0} \\implies \\vec{L} = I\\vec{\\omega} = \\text{cte}$.\\\\
Precesión giroscópica: $\\Omega_p = \\frac{M g r_{cm}}{I_s \\omega_s}$.
\\end{tcolorbox}

\\begin{tcolorbox}[title=3. Química \& Bioinformática]
\\textbf{Termodinámica (Gibbs):}\\\\
$\\Delta G^\\circ = -RT \\ln K_{eq}$\\\\
Ecuación de van 't Hoff:\\\\
$\\ln(K_2/K_1) = -\\frac{\\Delta H^\\circ}{R}\\left(\\frac{1}{T_2}-\\frac{1}{T_1}\\right)$

\\textbf{Genética de Poblaciones (ONB):}\\\\
$p + q = 1 \\implies p^2 + 2pq + q^2 = 1$\\\\
Portadores heterocigotos: $2pq$.

\\textbf{Algoritmos de Grafos (OSI):}\\\\
$\\bullet$ Dijkstra con Min-Heap: $\\mathcal{O}((V+E)\\log V)$.\\\\
$\\bullet$ Kruskal con DSU: $\\mathcal{O}(E \\log E + E\\alpha(V))$.
\\end{tcolorbox}

\\end{multicols*}

\\vfill
\\begin{center}
  \\footnotesize\\sffamily Plataforma KUSKAT $\\cdot$ WhatsApp Oficial: +503 7657 4463 $\\cdot$ Academia Sabatina UES
\\end{center}

\\end{document}`,
  },

  // =========================================================================
  // 6. FICHA NORMATIVA ELÉCTRICA SIGET & FOTOVOLTAICA (NTCOGD / NEC 690)
  // =========================================================================
  {
    id: 'siget-solar',
    title: 'Normativa Eléctrica SIGET & Sistemas Solares Fotovoltaicos',
    subtitle: 'NTCOGD, Código Eléctrico NEC Artículo 690, Caída de Tensión y Protecciones DC/AC',
    authority: 'Superintendencia General de Electricidad y Telecomunicaciones (SIGET) · El Salvador',
    category: 'tecnico',
    icon: '☀️',
    badgeColor: 'bg-yellow-100 text-yellow-900 border-yellow-300',
    summary: 'Guía técnica de dimensionamiento para electricistas e ingenieros solares en El Salvador: factores 1.56 Isc, cálculo de Voc corregido por temperatura mínima, caída de tensión <2% y requisitos anti-isla.',
    sections: [
      {
        title: '1. Norma Técnica de Conexión (NTCOGD)',
        badge: 'SIGET / Distribuidoras',
        content: 'Regulaciones para generadores distribuidos y medición neta.',
        formulasOrRules: [
          {
            label: 'Límite de Inyección sin Estudio de Impacto',
            formula: 'P_{inv} \\le 100\\,\\text{kW (Trámite expedito simplificado)}',
            explanation: 'Generación distribuida para autoconsumo con excedentes inyectados a la red de CAESS, DELSUR, CLESA o EEO.',
          },
          {
            label: 'Protección Anti-Isla (IEEE 1547 / UL 1741)',
            formula: 't_{desconexion} < 2.0\\,\\text{segundos tras pérdida de red}',
            explanation: 'Desconexión automática mandatoria ante corte de suministro para evitar electrificación involuntaria de cuadrillas.',
          },
          {
            label: 'Distorsión Armónica Total (THD)',
            formula: '\\text{THD}_{corriente} < 5.0\\% \\quad \\text{en el punto de conexión}',
            explanation: 'Garantiza calidad de onda senoidal inyectada a la red de distribución eléctrica.',
          },
        ],
        commonPitfall: 'Operar inversores sin certificación UL 1741 o IEEE 1547, lo que invalida el dictamen de interconexión con la distribuidora.',
      },
      {
        title: '2. Dimensionamiento DC (NEC Artículo 690)',
        badge: 'Protección DC',
        content: 'Factores de seguridad térmica y ampacidad de conductores.',
        formulasOrRules: [
          {
            label: 'Voltaje de Circuito Abierto Corregido (Tmin)',
            formula: 'V_{oc, max} = N \\times V_{oc, stc} \\times [1 + \\beta_{voc}(T_{min} - 25^\\circ\\text{C})]',
            explanation: 'En El Salvador $T_{min} \\approx 10^\\circ\\text{C}$. El voltaje sube a baja temperatura y nunca debe superar los 600V (residencial) o 1000V/1500V.',
          },
          {
            label: 'Corriente de Diseño DC (Factor 1.56)',
            formula: 'I_{diseño} = I_{sc} \\times 1.25 \\times 1.25 = 1.56 \\times I_{sc}',
            explanation: '1.25 por sobre-irradiancia solar y 1.25 por factor de carga continua (NEC 690.8).',
          },
          {
            label: 'Fusibles de Protección de String',
            formula: 'I_{fusible} \\le \\text{Max Series Fuse Rating del módulo}',
            explanation: 'Obligatorios cuando 3 o más cadenas (strings) se conectan en paralelo al mismo inversor.',
          },
        ],
        commonPitfall: 'Dimensionar fusibles o cables DC usando solo el valor Isc nominal sin aplicar el factor de seguridad 1.56.',
      },
      {
        title: '3. Caída de Tensión & Protecciones AC',
        badge: 'Circuito AC',
        content: 'Cálculo de calibre de conductores y breakers termomagnéticos.',
        formulasOrRules: [
          {
            label: 'Caída de Tensión Máxima Permisible',
            formula: '\\Delta V\\% = \\frac{2 \\cdot L \\cdot I \\cdot R}{V_n} \\times 100 \\le 2.0\\%',
            explanation: 'Una caída excesiva eleva el voltaje en bornes del inversor provocando disparos indeseados por sobretensión AC.',
          },
          {
            label: 'Interruptor Termomagnético AC (Breaker)',
            formula: 'I_{breaker} \\ge I_{ac, max} \\times 1.25',
            explanation: 'El inversor fotovoltaico se clasifica como fuente de carga continua (operación $>3$ horas continuas).',
          },
          {
            label: 'Relación DC/AC (Inverter Loading Ratio - ILR)',
            formula: '\\text{ILR} = \\frac{P_{dc, panel}}{P_{ac, inversor}} \\approx 1.20 - 1.30',
            explanation: 'Sobredimensionamiento económico óptimo para aprovechar la curva de producción matutina y vespertina.',
          },
        ],
        commonPitfall: 'Diseñar ramales AC con cable demasiado delgado que cause caída > 2%, desconectando el inversor a mediodía por sobretensión.',
      },
    ],
    solvedPracticeExamples: [
      {
        number: 1,
        title: 'Corrección de Voc por temperatura mínima histórica',
        scenario: 'Se proyecta una cadena de 12 paneles fotovoltaicos en serie de $550\\,\\text{W}$. Cada módulo tiene $V_{oc} = 49.8\\,\\text{V}$ en STC ($25^\\circ\\text{C}$) y un coeficiente de temperatura $\\beta_{voc} = -0.27\\%/^\\circ\\text{C}$. Calcule el voltaje máximo de la cadena a la temperatura mínima de diseño en El Salvador ($10^\\circ\\text{C}$) y verifique si es apto para un inversor con límite de entrada de $600\\,\\text{V}$.',
        stepByStepSolution: 'Diferencia de temperatura: $\\Delta T = T_{min} - 25^\\circ\\text{C} = 10 - 25 = -15^\\circ\\text{C}$.\nFactor de corrección porcentual: $\\Delta V\\% = (-0.27\\%/^\\circ\\text{C}) \\times (-15^\\circ\\text{C}) = +4.05\\% = +0.0405$.\nVoltaje corregido por módulo: $V_{oc}(10^\\circ\\text{C}) = 49.8 \\times (1 + 0.0405) = 49.8 \\times 1.0405 \\approx 51.82\\,\\text{V}$.\nVoltaje total del string de 12 paneles: $V_{string} = 12 \\times 51.82 = 621.84\\,\\text{V}$.\nComparación con el límite de 600V: $621.84\\,\\text{V} > 600\\,\\text{V}$. ¡Supera la capacidad destructiva del inversor!\nCorrección de ingeniería: Debe reducirse la serie a un máximo de 11 paneles ($11 \\times 51.82 = 570.0\\,\\text{V} < 600\\,\\text{V}$).',
        result: 'Voc corregido para 12 módulos: 621.8 V (NO apto; reducir a 11 paneles = 570.0 V).',
      },
      {
        number: 2,
        title: 'Cálculo de corriente de diseño y fusible DC (Factor 1.56)',
        scenario: 'Un arreglo fotovoltaico combina 3 cadenas en paralelo. Cada cadena tiene una corriente de cortocircuito en STC $I_{sc} = 13.5\\,\\text{A}$. Calcule la corriente mínima de diseño para el calibre del conductor común y el valor comercial del fusible para cada cadena individual.',
        stepByStepSolution: 'Para el conductor del troncal común (3 strings en paralelo):\nCorriente total de cortocircuito: $I_{sc, total} = 3 \\times 13.5\\,\\text{A} = 40.5\\,\\text{A}$.\nAplicamos el factor de seguridad obligatorio NEC 690.8 ($1.25 \\times 1.25 = 1.56$):\n$I_{diseño} = 40.5 \\times 1.5625 \\approx 63.28\\,\\text{A}$. El conductor debe soportar al menos $65\\,\\text{A}$ (Cable de cobre AWG #6 THHN a $75^\\circ\\text{C}$).\nPara el fusible de cada cadena individual:\n$I_{fusible} = I_{sc} \\times 1.5625 = 13.5 \\times 1.5625 = 21.09\\,\\text{A}$.\nValor comercial estandarizado de fusible solar gPV: 20 A o 25 A (según ficha del fabricante).',
        result: 'Corriente troncal: 63.3 A (Cable AWG #6); Fusible de protección por string: 25 A gPV.',
      },
      {
        number: 3,
        title: 'Cálculo de caída de tensión en tramo AC de 40 metros',
        scenario: 'Un inversor monofásico de $7.6\\,\\text{kW}$ a $240\\,\\text{V}$ opera a su corriente nominal máxima $I_{ac} = 31.67\\,\\text{A}$. La distancia desde el inversor hasta el panel de distribución principal es de $L = 40\\,\\text{m}$. Se utiliza cable de cobre calibre AWG #8 con resistencia $R = 2.56\\,\\Omega/\\text{km}$. Calcule el porcentaje de caída de tensión y verifique si cumple el límite de la SIGET (< 2.0%).',
        stepByStepSolution: 'Resistencia total del tramo de ida y vuelta (2 conductores):\n$R_{total} = 2 \\times \\left(\\frac{40\\,\\text{m}}{1,000\\,\\text{m}}\\right) \\times 2.56\\,\\Omega/\\text{km} = 2 \\times 0.040 \\times 2.56 = 0.2048\\,\\Omega$.\nCaída de voltaje: $\\Delta V = I_{ac} \\times R_{total} = 31.67\\,\\text{A} \\times 0.2048\\,\\Omega = 6.486\\,\\text{V}$.\nPorcentaje de caída de tensión respecto a 240V nominales:\n$\\Delta V\\% = \\frac{6.486\\,\\text{V}}{240\\,\\text{V}} \\times 100 = 2.70\\%$.\nEvaluación: $2.70\\% > 2.0\\%$. No cumple el estándar de calidad.\nSolución de ingeniería: Aumentar el calibre a AWG #6 ($R = 1.61\\,\\Omega/\\text{km}$):\n$\\Delta V\\% = 2.70\\% \\times \\frac{1.61}{2.56} \\approx 1.70\\% < 2.0\\%$ (Aprobado).',
        result: 'Caída con AWG #8: 2.70% (REPROBADO). Calibre corregido: AWG #6 con 1.70% (APROBADO).',
      },
      {
        number: 4,
        title: 'Selección de interruptor termomagnético (Breaker AC)',
        scenario: 'Se instala un inversor trifásico comercial de $15.0\\,\\text{kW}$ a $208\\,\\text{V}$ entre fases. Su corriente nominal máxima de salida es $I_{ac} = 41.6\\,\\text{A}$. Determine el amperaje nominal del interruptor termomagnético tripolar de protección.',
        stepByStepSolution: 'De acuerdo con el Código NEC y la normativa SIGET, los sistemas de generación continua deben protegerse con un factor de sobredimensionamiento de al menos el 125%:\n$I_{breaker} \\ge I_{ac} \\times 1.25 = 41.6\\,\\text{A} \\times 1.25 = 52.0\\,\\text{A}$.\nValores comerciales estándar de interruptores termomagnéticos en caja moldeada: 50A, 60A, 70A.\nDado que $52.0\\,\\text{A} > 50\\,\\text{A}$, el tamaño comercial mínimo obligatorio es de 60 A tripolar.',
        result: 'Breaker requerido: 60 Amperios, 3 polos, 240/208V.',
      },
      {
        number: 5,
        title: 'Verificación de relación de dimensionamiento DC/AC (ILR)',
        scenario: 'Un diseñador propone conectar 36 paneles solares de $550\\,\\text{W}$ ($19.8\\,\\text{kWp}$ DC total) a un inversor solar de $15.0\\,\\text{kW}$ AC. Calcule la relación de sobredimensionamiento DC/AC (ILR) e interprete si se encuentra en el rango técnico y económico óptimo.',
        stepByStepSolution: 'Potencia pico DC total instalada: $P_{dc} = 36 \\times 550\\,\\text{W} = 19,800\\,\\text{W} = 19.8\\,\\text{kWp}$.\nPotencia nominal de salida del inversor: $P_{ac} = 15.0\\,\\text{kW}$.\nCálculo de la relación DC/AC: $\\text{ILR} = \\frac{19.8\\,\\text{kW}}{15.0\\,\\text{kW}} = 1.32$.\nInterpretación: Un ILR de 1.32 (32% de sobredimensionamiento) se encuentra dentro de la franja moderna de máxima rentabilidad (1.20 - 1.35). El leve recorte de picos a mediodía (clipping) queda ampliamente compensado por la mayor producción en horas de baja irradiancia matutina y vespertina.',
        result: 'ILR = 1.32 (32% sobredimensionado; diseño técnica y económicamente viable).',
      },
    ],
    retentionDrills: [
      {
        id: 'siget-drill-1',
        question: '¿Por qué la corriente de cortocircuito Isc de un panel fotovoltaico se multiplica por 1.56 según el Código NEC 690?',
        options: {
          A: 'Por el producto de 1.25 (posible sobre-irradiancia atmosférica) y 1.25 (factor de carga continua).',
          B: 'Por el factor de potencia del inversor.',
          C: 'Para compensar la pérdida por temperatura en climas cálidos.',
          D: 'Para calcular la corriente trifásica dividida entre raíz de 3.',
        },
        correctAnswer: 'A',
        explanation: 'El factor 1.56 proviene de $1.25 \\times 1.25$: el primer 1.25 protege ante reflejos de nubes con irradiancia superior a 1000 W/m², y el segundo 1.25 rige para cargas eléctricas operando por más de 3 horas continuas.',
      },
      {
        id: 'siget-drill-2',
        question: '¿Cuál es el tiempo máximo de desconexión anti-isla admisible según la norma IEEE 1547 ante una falla en la red de distribución eléctrica?',
        options: {
          A: 'Menos de 2.0 segundos.',
          B: '10 segundos.',
          C: '1 minuto.',
          D: '30 segundos.',
        },
        correctAnswer: 'A',
        explanation: 'La norma IEEE 1547 y la NTCOGD exigen que el inversor se desconecte en menos de 2.0 segundos para evitar accidentes por energización involuntaria de líneas en mantenimiento.',
      },
    ],
    latexCode: `% =========================================================================
% HOJA MNEMOTÉCNICA INSTITUCIONAL KUSKAT — NORMATIVA SIGET & SOLAR (1 PÁGINA)
% =========================================================================
\\documentclass[10pt,letterpaper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish]{babel}
\\usepackage[margin=0.8cm]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{multicol}
\\usepackage{tcolorbox}
\\usepackage{microtype}
\\pagestyle{empty}

\\definecolor{azulKuskat}{HTML}{0B1B3D}
\\definecolor{doradoKuskat}{HTML}{C59B27}
\\definecolor{fondoKuskat}{HTML}{FAF9F5}

\\tcbset{
  colback=fondoKuskat,
  colframe=azulKuskat,
  coltitle=doradoKuskat,
  fonttitle=\\bfseries\\sffamily\\footnotesize,
  boxrule=0.8pt,
  arc=2mm,
  top=2mm,bottom=2mm,left=2.5mm,right=2.5mm
}

\\begin{document}

\\begin{center}
  {\\color{azulKuskat}\\sffamily\\Large\\textbf{KUSKAT $\\cdot$ NORMATIVA ELÉCTRICA SIGET \& SOLAR PV}}\\\\
  {\\footnotesize\\sffamily NTCOGD $\\cdot$ Código NEC 690 $\\cdot$ Factor 1.56 Isc $\\cdot$ Caída de Tensión $<$2\\% $\\cdot$ El Salvador}
\\end{center}
\\vspace{-2mm}
\\hrule
\\vspace{2mm}

\\begin{multicols*}{3}

\\begin{tcolorbox}[title=1. NTCOGD \& Medición Neta]
\\textbf{Interconexión Distribuida:}\\\\
$\\bullet$ Trámite simplificado: $P \\le 100\\text{ kW}$.\\\\
$\\bullet$ Inversores: Certificación \\textbf{UL 1741} e \\textbf{IEEE 1547}.

\\textbf{Protección Anti-Isla:}\\\\
Desconexión automática en $t < 2.0\\text{ s}$ ante pérdida de tensión de red.

\\textbf{Calidad de Onda:}\\\\
$\\text{THD} < 5\\%$, factor de potencia $> 0.95$.
\\end{tcolorbox}

\\begin{tcolorbox}[title=2. Dimensionamiento DC (NEC 690)]
\\textbf{Voltaje Voc Máximo Corregido:}\\\\
$V_{oc}(T_{min}) = N V_{oc,stc}[1 + \\beta_{voc}(T_{min}-25)]$\\\\
$\\bullet$ $T_{min}$ de diseño en El Salvador: $10^\\circ\\text{C}$.\\\\
$\\bullet$ Límite residencial: $600\\text{ V}$.

\\textbf{Corriente de Diseño DC:}\\\\
$I_{diseño} = 1.25 \\times 1.25 \\times I_{sc} = 1.56 \\times I_{sc}$\\\\
(Sobreradiación + Carga continua).

\\textbf{Fusibles DC de String:}\\\\
Obligatorios cuando $\\ge 3$ cadenas se unen en paralelo.
\\end{tcolorbox}

\\begin{tcolorbox}[title=3. Caída de Tensión \& AC]
\\textbf{Caída de Tensión Máxima:}\\\\
$\\Delta V\\% = \\frac{2 L I R}{V_n} \\times 100 \\le 2.0\\%$\\\\
Evita desconexión del inversor por sobretensión en bornes de mediodía.

\\textbf{Protección AC (Breaker):}\\\\
$I_{breaker} \\ge 1.25 \\times I_{ac,max}$

\\textbf{Relación DC/AC (ILR):}\\\\
$\\text{ILR} = \\frac{P_{dc}}{P_{ac}} \\approx 1.20 - 1.30$.
\\end{tcolorbox}

\\end{multicols*}

\\vfill
\\begin{center}
  \\footnotesize\\sffamily Plataforma KUSKAT $\\cdot$ WhatsApp Oficial: +503 7657 4463 $\\cdot$ Normas SIGET \& NEC El Salvador
\\end{center}

\\end{document}`,
  },

  // =========================================================================
  // 7. FICHA FARMACOLOGÍA CLÍNICA & DOSIFICACIÓN (MINSAL)
  // =========================================================================
  {
    id: 'minsal-farmacologia',
    title: 'Guía Rápida de Farmacología Clínica & Dosificación',
    subtitle: 'Dosificación Pediátrica mg/kg/día, Infusiones Cardiovasculares, Cockcroft-Gault y Analgesia OMS',
    authority: 'Ministerio de Salud (MINSAL) · Guías Farmacoterapéuticas Oficiales · El Salvador',
    category: 'salud',
    icon: '💊',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    summary: 'Ficha clínica de cálculo rápido de medicamentos para médicos, enfermeros y residentes: dosificación pediátrica por peso corporal, bombas de infusión en mcg/kg/min, aclaramiento de creatinina y analgésicos.',
    sections: [
      {
        title: '1. Dosificación Pediátrica por Peso',
        badge: 'Pediatría',
        content: 'Fórmulas de seguridad para suspensiones y jarabes orales.',
        formulasOrRules: [
          {
            label: 'Cálculo de Dosis Total Diaria',
            formula: '\\text{Dosis Diaria (mg)} = \\text{Peso (kg)} \\times \\text{Dosis (mg/kg/día)}',
            explanation: 'Dividir entre el número de tomas al día (cada 8h = 3 tomas; cada 12h = 2 tomas).',
          },
          {
            label: 'Volumen en mL de Suspensión',
            formula: '\\text{Volumen (mL)} = \\frac{\\text{Dosis por toma (mg)} \\times \\text{Volumen frasco (5 mL)}}{\\text{Concentración rotulada (mg)}}',
            explanation: 'Ejemplo con Amoxicilina 250 mg/5 mL o 500 mg/5 mL.',
          },
          {
            label: 'Regla de Superficie Corporal (SC)',
            formula: '\\text{SC (m}^2\\text{)} = \\frac{\\text{Peso (kg)} \\times 4 + 7}{\\text{Peso (kg)} + 90} \\quad (\\text{para } > 10\\,\\text{kg})',
            explanation: 'Para quimioterápicos y líquidos de mantenimiento en nefropediatría.',
          },
        ],
        commonPitfall: 'Confundir la dosis diaria total con la dosis por toma individual, provocando sobredosis triples accidentales.',
      },
      {
        title: '2. Infusiones Cardiovasculares & Gotas',
        badge: 'UCI / Cuidados Críticos',
        content: 'Cálculo de goteo, microgotas y vasoactivos por bomba.',
        formulasOrRules: [
          {
            label: 'Velocidad de Infusión en mL/h',
            formula: '\\text{mL/h} = \\frac{\\text{Dosis (mcg/kg/min)} \\times \\text{Peso (kg)} \\times 60}{\\text{Concentración de la mezcla (mcg/mL)}}',
            explanation: 'Utilizado para dopamina, dobutamina, norepinefrina y nitroglicerina.',
          },
          {
            label: 'Conversión de Macrogotas y Microgotas',
            formula: '1\\,\\text{mL} = 20\\,\\text{gotas normogotero} = 60\\,\\text{microgotas}',
            explanation: 'En equipo microgotero: la velocidad en mL/h es numéricamente igual a microgotas/minuto.',
          },
          {
            label: 'Regla del 6 en Pediatría (Vasoactivos)',
            formula: '6 \\times \\text{Peso (kg) en mg diluidos en 100 mL}',
            explanation: 'A esta dilución, $1\\,\\text{mL/h}$ equivale exactamente a $1\\,\\mu\\text{g/kg/min}$.',
          },
        ],
        commonPitfall: 'Olvidar multiplicar por 60 para convertir los minutos a horas en la programación de la bomba de infusión.',
      },
      {
        title: '3. Función Renal & Analgesia OMS',
        badge: 'Medicina Interna',
        content: 'Ajuste de dosis en enfermedad renal crónica y dolor.',
        formulasOrRules: [
          {
            label: 'Aclaramiento de Creatinina (Cockcroft-Gault)',
            formula: '\\text{ClCr} = \\frac{(140 - \\text{Edad}) \\times \\text{Peso (kg)}}{72 \\times \\text{CrSérica (mg/dL)}} \\times [0.85 \\text{ si mujer}]',
            explanation: 'Umbral crítico: ClCr < 50 mL/min exige ajuste de antibióticos nefrotóxicos (vancomicina, aminoglucósidos).',
          },
          {
            label: 'Escalera Analgésica de la OMS',
            formula: '\\text{Paso 1: No opioides} \\rightarrow \\text{Paso 2: Opioides débiles} \\rightarrow \\text{Paso 3: Opioides potentes}',
            explanation: 'Paso 1: Paracetamol/AINE; Paso 2: Tramadol/Codeína; Paso 3: Morfina/Fentanilo.',
          },
          {
            label: 'Dosis de Rescate de Morfina',
            formula: '\\text{Rescate} = \\frac{1}{6} \\times \\text{Dosis diaria total de morfina}',
            explanation: 'Indicada para crisis de dolor irruptivo en pacientes oncológicos.',
          },
        ],
        commonPitfall: 'No aplicar el factor 0.85 en mujeres en Cockcroft-Gault, sobrestimando la función renal y provocando toxicidad.',
      },
    ],
    solvedPracticeExamples: [
      {
        number: 1,
        title: 'Dosificación pediátrica de suspensión de amoxicilina',
        scenario: 'Un lactante de 2 años con otitis media aguda pesa $12.0\\,\\text{kg}$. El pediatra prescribe amoxicilina a dosis de $80\\,\\text{mg/kg/día}$ dividida en 3 tomas al día (cada 8 horas). Se dispone de frasco de amoxicilina en suspensión de $250\\,\\text{mg}/5\\,\\text{mL}$. Calcule los mililitros que debe recibir en cada toma.',
        stepByStepSolution: 'Paso 1: Calculamos la dosis diaria total: $\\text{Dosis Diaria} = 12.0\\,\\text{kg} \\times 80\\,\\text{mg/kg/día} = 960\\,\\text{mg/día}$.\nPaso 2: Dividimos entre las 3 tomas diarias: $\\text{Dosis por toma} = \\frac{960\\,\\text{mg}}{3} = 320\\,\\text{mg/toma}$.\nPaso 3: Convertimos los mg a mL con la regla de tres de la suspensión ($250\\,\\text{mg} \\to 5\\,\\text{mL}$):\n$\\text{Volumen por toma} = \\frac{320\\,\\text{mg} \\times 5\\,\\text{mL}}{250\\,\\text{mg}} = \\frac{1,600}{250} = 6.4\\,\\text{mL}$.',
        result: 'Administrar: 6.4 mL por vía oral cada 8 horas durante 10 días.',
      },
      {
        number: 2,
        title: 'Programación de infusión de dopamina en shock cardiogénico',
        scenario: 'Un paciente adulto de $70\\,\\text{kg}$ en shock requiere soporte inotrópico con Dopamina a dosis de $5.0\\,\\mu\\text{g/kg/min}$. Se prepara una infusión con una ampolla de $200\\,\\text{mg}$ de dopamina diluida en $250\\,\\text{mL}$ de Dextrosa al 5%. Calcule la velocidad de la bomba en mL/hora.',
        stepByStepSolution: 'Paso 1: Calculamos la concentración de la mezcla:\n$200\\,\\text{mg} = 200,000\\,\\mu\\text{g}$.\n$\\text{Concentración} = \\frac{200,000\\,\\mu\\text{g}}{250\\,\\text{mL}} = 800\\,\\mu\\text{g/mL}$.\nPaso 2: Calculamos la dosis requerida en microgramos por minuto:\n$\\text{Dosis} = 5.0\\,\\mu\\text{g/kg/min} \\times 70\\,\\text{kg} = 350\\,\\mu\\text{g/min}$.\nPaso 3: Convertimos a microgramos por hora:\n$350\\,\\mu\\text{g/min} \\times 60\\,\\text{min/h} = 21,000\\,\\mu\\text{g/h}$.\nPaso 4: Calculamos los mL/h dividiendo entre la concentración:\n$\\text{mL/h} = \\frac{21,000\\,\\mu\\text{g/h}}{800\\,\\mu\\text{g/mL}} = 26.25\\,\\text{mL/h}$.',
        result: 'Velocidad de bomba de infusión: 26.3 mL/hora.',
      },
      {
        number: 3,
        title: 'Ajuste de dosis de vancomicina según Cockcroft-Gault',
        scenario: 'Un paciente varón de 68 años con neumonía nosocomial pesa $65\\,\\text{kg}$ y presenta una creatinina sérica de $2.1\\,\\text{mg/dL}$. Estime su aclaramiento de creatinina mediante la fórmula de Cockcroft-Gault e indique si amerita espaciar el intervalo de vancomicina.',
        stepByStepSolution: 'Fórmula de Cockcroft-Gault para hombres:\n$\\text{ClCr} = \\frac{(140 - \\text{Edad}) \\times \\text{Peso}}{72 \\times \\text{CrSérica}} = \\frac{(140 - 68) \\times 65}{72 \\times 2.1}$.\nNumerador: $72 \\times 65 = 4,680$.\nDenominador: $72 \\times 2.1 = 151.2$.\n$\\text{ClCr} = \\frac{4,680}{151.2} \\approx 30.95\\,\\text{mL/min}$.\nInterpretación clínica: Como el $\\text{ClCr} \\approx 31\\,\\text{mL/min}$ está en el rango de insuficiencia renal moderada ($30-50\\,\\text{mL/min}$), la vancomicina no puede administrarse cada 12 horas; debe ajustarse a dosis de $1\\,\\text{g}$ cada 24 horas con monitoreo de niveles valle.',
        result: 'ClCr: 31.0 mL/min. Ajuste mandatorio: espaciar a cada 24 horas.',
      },
      {
        number: 4,
        title: 'Rehidratación oral Plan B en deshidratación infantil moderada',
        scenario: 'Un lactante de 10 kg presenta diarrea aguda y signos de deshidratación moderada (ojos hundidos, llanto sin lágrimas, signo del pliegue positivo que desaparece lentamente). Calcule el volumen total de Suero de Rehidratación Oral (SRO) de baja osmolaridad a suministrar en 4 horas según norma MINSAL / AIEPI.',
        stepByStepSolution: 'La norma técnica del MINSAL y AIEPI para el Plan B de rehidratación oral establece la administración de $50$ a $100\\,\\text{mL/kg}$ de SRO durante un período de 4 horas continuas.\nPara $10\\,\\text{kg}$, el rango de volumen es:\nVolumen mínimo: $10\\,\\text{kg} \\times 50\\,\\text{mL/kg} = 500\\,\\text{mL}$.\nVolumen máximo: $10\\,\\text{kg} \\times 100\\,\\text{mL/kg} = 1,000\\,\\text{mL}$.\nVolumen medio estándar de inicio: $75\\,\\text{mL/kg} \\times 10\\,\\text{kg} = 750\\,\\text{mL}$ en 4 horas.\nAdministración fraccionada con cuchara o jeringa: aproximadamente $185\\,\\text{mL}$ cada hora.',
        result: 'SRO Plan B: 750 mL administrados en 4 horas con cuchara o taza.',
      },
      {
        number: 5,
        title: 'Cálculo de dosis de rescate de morfina en dolor irruptivo',
        scenario: 'Un paciente oncológico recibe una infusión continua de morfina subcutánea con una dosis diaria total de $60\\,\\text{mg/24 horas}$. Durante el pase de visita refiere crisis de dolor agudo irruptivo de intensidad 8/10. Calcule la dosis adecuada del rescate analgésico según la OMS.',
        stepByStepSolution: 'La Organización Mundial de la Salud (OMS) y la Sociedad Española de Cuidados Paliativos (SECPAL) recomiendan que cada dosis de rescate de morfina equivalga a un sexto ($1/6$) o un décimo ($1/10$) de la dosis basal total diaria:\n$\\text{Dosis de rescate} = \\frac{\\text{Dosis basal diaria}}{6} = \\frac{60\\,\\text{mg}}{6} = 10\\,\\text{mg}$.\nSe administra un bolo de rescate de $10\\,\\text{mg}$ de morfina por vía subcutánea o intravenosa.\nPuede repetirse tras 30 a 60 minutos si el dolor persiste, evaluando efectos sedativos.',
        result: 'Dosis de rescate: 10 mg de morfina (1/6 de la dosis diaria).',
      },
    ],
    retentionDrills: [
      {
        id: 'farma-drill-1',
        question: '¿Por qué debe multiplicarse por 0.85 la fórmula de Cockcroft-Gault al calcular el aclaramiento en mujeres?',
        options: {
          A: 'Porque las mujeres tienen en promedio una menor proporción de masa muscular que genera creatinina.',
          B: 'Porque la tasa de filtración glomerular es mayor en mujeres.',
          C: 'Por la diferencia de presión arterial media.',
          D: 'Para compensar la excreción biliar de fármacos.',
        },
        correctAnswer: 'A',
        explanation: 'Las mujeres presentan fisiológicamente menor masa magra muscular en comparación con los varones de igual peso, generando menor producción endógena basal de creatinina.',
      },
      {
        id: 'farma-drill-2',
        question: 'En un equipo de infusión tipo microgotero estándar, ¿a cuántas microgotas por minuto equivale una velocidad de 45 mL/hora?',
        options: {
          A: 'Exactamente a 45 microgotas/minuto.',
          B: 'A 15 microgotas/minuto.',
          C: 'A 135 microgotas/minuto.',
          D: 'A 90 microgotas/minuto.',
        },
        correctAnswer: 'A',
        explanation: 'Como 1 mL = 60 microgotas y 1 hora = 60 minutos, el factor de conversión 60/60 se simplifica a 1. La cifra en mL/h es idéntica a microgotas/min.',
      },
    ],
    latexCode: `% =========================================================================
% HOJA MNEMOTÉCNICA INSTITUCIONAL KUSKAT — FARMACOLOGÍA CLÍNICA (1 PÁGINA)
% =========================================================================
\\documentclass[10pt,letterpaper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish]{babel}
\\usepackage[margin=0.8cm]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{multicol}
\\usepackage{tcolorbox}
\\usepackage{microtype}
\\pagestyle{empty}

\\definecolor{azulKuskat}{HTML}{0B1B3D}
\\definecolor{doradoKuskat}{HTML}{C59B27}
\\definecolor{fondoKuskat}{HTML}{FAF9F5}

\\tcbset{
  colback=fondoKuskat,
  colframe=azulKuskat,
  coltitle=doradoKuskat,
  fonttitle=\\bfseries\\sffamily\\footnotesize,
  boxrule=0.8pt,
  arc=2mm,
  top=2mm,bottom=2mm,left=2.5mm,right=2.5mm
}

\\begin{document}

\\begin{center}
  {\\color{azulKuskat}\\sffamily\\Large\\textbf{KUSKAT $\\cdot$ FARMACOLOGÍA CLÍNICA \& DOSIFICACIÓN}}\\\\
  {\\footnotesize\\sffamily Dosis Pediátrica mg/kg $\\cdot$ Infusiones UCI $\\cdot$ Cockcroft-Gault $\\cdot$ Escala OMS $\\cdot$ MINSAL}
\\end{center}
\\vspace{-2mm}
\\hrule
\\vspace{2mm}

\\begin{multicols*}{3}

\\begin{tcolorbox}[title=1. Dosificación Pediátrica]
\\textbf{Dosis Diaria Total:}\\\\
$\\text{Dosis (mg)} = \\text{Peso (kg)} \\times \\text{Dosis (mg/kg/día)}$\\\\
Dividir entre número de tomas/día.

\\textbf{Volumen en mL de Suspensión:}\\\\
$\\text{mL} = \\frac{\\text{Dosis/toma (mg)} \\times 5\\text{ mL}}{\\text{Concentración rotulada (mg)}}$

\\textbf{Superficie Corporal ($>10\\text{ kg}$):}\\\\
$\\text{SC} = \\frac{\\text{Peso} \\times 4 + 7}{\\text{Peso} + 90}\\text{ m}^2$

\\textbf{¡Alerta de Seguridad!}\\\\
Verificar si la dosis del libro es por día o por toma individual antes de formular.
\\end{tcolorbox}

\\begin{tcolorbox}[title=2. Infusiones Críticas]
\\textbf{Velocidad de Bomba (mL/h):}\\\\
$\\text{mL/h} = \\frac{\\text{Dosis (}\\mu\\text{g/kg/min)} \\times \\text{Peso (kg)} \\times 60}{\\text{Concentración mezcla (}\\mu\\text{g/mL)}}$

\\textbf{Conversiones de Goteo:}\\\\
$1\\text{ mL} = 20\\text{ macrogotas} = 60\\text{ microgotas}$\\\\
En microgotero: $\\text{mL/h} \\equiv \\text{microgotas/min}$.

\\textbf{Regla del 6 (Pediatría):}\\\\
$6 \\times \\text{Peso en mg en } 100\\text{ mL} \\implies$\\\\
$1\\text{ mL/h} = 1\\,\\mu\\text{g/kg/min}$.
\\end{tcolorbox}

\\begin{tcolorbox}[title=3. Función Renal \& Dolor]
\\textbf{Aclaramiento de Creatinina:}\\\\
$\\text{ClCr} = \\frac{(140 - \\text{Edad}) \\times \\text{Peso}}{72 \\times \\text{CrSérica}} \\times [0.85\\text{ mujer}]$\\\\
$\\bullet$ $\\text{ClCr} < 50\\text{ mL/min}$: Ajustar dosis de Vancomicina y Aminoglucósidos.

\\textbf{Analgesia OMS:}\\\\
$\\bullet$ Paso 1: Paracetamol / AINE.\\\\
$\\bullet$ Paso 2: Tramadol / Codeína.\\\\
$\\bullet$ Paso 3: Morfina / Fentanilo.

\\textbf{Rescate de Morfina:}\\\\
Dosis $= \\frac{1}{6}$ de la dosis diaria basal.
\\end{tcolorbox}

\\end{multicols*}

\\vfill
\\begin{center}
  \\footnotesize\\sffamily Plataforma KUSKAT $\\cdot$ WhatsApp Oficial: +503 7657 4463 $\\cdot$ Guías Clínicas MINSAL El Salvador
\\end{center}

\\end{document}`,
  },

  // =========================================================================
  // 8. FICHA CUMPLIMIENTO FINANCIERO AML & SUPERVISIÓN SSF
  // =========================================================================
  {
    id: 'ssf-aml-compliance',
    title: 'Compendio de Cumplimiento Financiero AML & Ratios SSF',
    subtitle: 'Solvencia Bancaria, Coeficiente de Adecuación Patrimonial, Encaje Legal, Debida Diligencia y ROS',
    authority: 'Superintendencia del Sistema Financiero (SSF) · Unidad de Investigación Financiera (UIF-FGR)',
    category: 'financiero',
    icon: '🏦',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-300',
    summary: 'Síntesis regulatoria para oficiales de cumplimiento, auditores y banqueros en El Salvador: ratio de solvencia ≥12%, reservas de liquidez, encaje legal obligatorio, señales de alerta antilavado y reporte ROS.',
    sections: [
      {
        title: '1. Solvencia & Ratios Prudenciales',
        badge: 'Ley de Bancos SSF',
        content: 'Requerimientos de capital regulatorio frente a activos de riesgo.',
        formulasOrRules: [
          {
            label: 'Coeficiente de Adecuación Patrimonial (CAP)',
            formula: '\\text{CAP} = \\frac{\\text{Fondo Patrimonial Neto}}{\\text{Activos Ponderados por Riesgo (APR)}} \\ge 12.0\\%',
            explanation: 'Exigencia legal del Art. 41 de la Ley de Bancos de El Salvador para salvaguardar la solvencia del sistema.',
          },
          {
            label: 'Ratio de Cobertura de Cartera Vencida',
            formula: '\\text{Cobertura} = \\frac{\\text{Provisiones para Incobrabilidad}}{\\text{Créditos Vencidos}} \\ge 100.0\\%',
            explanation: 'Garantiza que la morosidad crediticia se encuentre totalmente respaldada con reservas contables preventivas.',
          },
          {
            label: 'Límite Individual de Crédito (Crédito Conexo)',
            formula: '\\text{Exposición Máxima} \\le 15.0\\% \\text{ del Fondo Patrimonial}',
            explanation: 'Evita la concentración excesiva de riesgo de crédito en un solo deudor o grupo económico vinculado.',
          },
        ],
        commonPitfall: 'Calcular el CAP sobre los activos contables totales sin aplicar la ponderación regulatoria por riesgo (0%, 20%, 50%, 100%).',
      },
      {
        title: '2. Liquidez & Régimen de Encaje Legal',
        badge: 'Banco Central (BCR) / SSF',
        content: 'Mantenimiento de disponibilidad inmediata ante retiros de fondos.',
        formulasOrRules: [
          {
            label: 'Reserva de Encaje Legal Bancario',
            formula: '\\text{Encaje Exigible} = \\text{Depósitos Sujetos a Encaje} \\times \\%\\text{Tasa BCR}',
            explanation: 'Tasa promedio de encaje legal en dólares estadounidenses depositada en cuentas de reserva en el Banco Central.',
          },
          {
            label: 'Ratio de Liquidez Neta a Corto Plazo',
            formula: '\\text{Índice Liquidez} = \\frac{\\text{Activos Líquidos Netos}}{\\text{Pasivos Exigibles a 30 días}} \\ge 10.0\\%',
            explanation: 'Asegura que el banco cubra salidas masivas de depósitos en escenarios de estrés financiero.',
          },
          {
            label: 'Fondo de Liquidez de Emergencia',
            formula: '\\text{Reserva Extraordinaria en Activos del Exterior Grado de Inversión}',
            explanation: 'Inversión en títulos de deuda soberana de alta calidad crediticia (Bonos del Tesoro de EE.UU.).',
          },
        ],
        commonPitfall: 'Computar activos ilíquidos (inmuebles o cartera crediticia a largo plazo) dentro del numerador de liquidez neta.',
      },
      {
        title: '3. Prevención de Lavado (AML/CFT) & ROS',
        badge: 'UIF - FGR / Ley LDA',
        content: 'Debida diligencia del cliente y detección de operaciones inusuales.',
        formulasOrRules: [
          {
            label: 'Reporte de Operación en Efectivo (ROE)',
            formula: '\\text{Transacciones en efectivo } \\ge \\$10,000.00 \\text{ (individuales o acumuladas)}',
            explanation: 'Obligación legal de reporte automático ante la Unidad de Investigación Financiera (UIF).',
          },
          {
            label: 'Reporte de Operación Sospechosa (ROS)',
            formula: '\\text{Sin umbral mínimo; se fundamenta en la falta de justificación económica/lícita}',
            explanation: 'Plazo legal estricto de envío a la UIF-FGR tras confirmarse la sospecha por el Comité de Cumplimiento.',
          },
          {
            label: 'Debida Diligencia Reforzada (DDR) para PEPs',
            formula: '\\text{Monitoreo continuo de Personas Expuestas Políticamente y familiares}',
            explanation: 'Identificación del Beneficiario Final (UBO) y origen demostrado de fondos durante el cargo y hasta 2 años posteriores.',
          },
        ],
        commonPitfall: 'Alertar o avisar al cliente sobre la remisión de un Reporte de Operación Sospechosa (infracción penal de "tipping-off").',
      },
    ],
    solvedPracticeExamples: [
      {
        number: 1,
        title: 'Cálculo del Coeficiente de Adecuación Patrimonial (Solvencia)',
        scenario: 'Un banco comercial en El Salvador reporta un Fondo Patrimonial Neto de $\$180$ millones de dólares. Su balance presenta los siguientes activos ponderados por riesgo: $\$200$ millones ponderados al 0% (efectivo y bonos BCR), $\$300$ millones ponderados al 20% (bancos internacionales grado inversión) y $\$1,100$ millones de créditos comerciales ponderados al 100%. Calcule el CAP y dictamine si cumple el requerimiento de la Ley de Bancos.',
        stepByStepSolution: 'Paso 1: Calculamos los Activos Ponderados por Riesgo (APR) totales:\n- Activos al 0%: $\$200 \\times 0 = \\$0$.\n- Activos al 20%: $\$300 \\times 0.20 = \\$60\\,\\text{millones}$.\n- Activos al 100%: $\$1,100 \\times 1.00 = \\$1,100\\,\\text{millones}$.\nTotal APR: $\\$0 + \\$60 + \\$1,100 = \\$1,160\\,\\text{millones}$.\nPaso 2: Evaluamos el Coeficiente de Adecuación Patrimonial:\n$\\text{CAP} = \\frac{\\text{Fondo Patrimonial}}{\\text{APR}} = \\frac{\\$180\\,\\text{millones}}{\\$1,160\\,\\text{millones}} = 0.15517 = 15.52\\%$.\nPaso 3: Verificación legal: El Art. 41 de la Ley de Bancos exige un CAP mínimo del $12.0\\%$. Como $15.52\\% > 12.0\\%$, el banco cumple holgadamente con la solvencia regulatoria con un margen superavitario de $3.52$ puntos porcentuales.',
        result: 'CAP: 15.52% (CUMPLE holgadamente el mínimo legal del 12%).',
      },
      {
        number: 2,
        title: 'Cálculo de la reserva obligatoria de encaje legal bancario',
        scenario: 'Una entidad bancaria mantiene $\$600$ millones en depósitos a la vista en cuentas corrientes y de ahorro de personas naturales y jurídicas. El Banco Central de Reserva (BCR) establece un encaje legal obligatorio del 15% sobre estos pasivos exigibles. Calcule el monto exacto de reservas que deben permanecer inmovilizadas en el Banco Central.',
        stepByStepSolution: 'Paso 1: Identificamos la base sujeta a encaje: $\$600,000,000$.\nPaso 2: Aplicamos la tasa regulatoria del 15%:\n$\\text{Encaje Requerido} = \\$600,000,000 \\times 0.15 = \\$90,000,000$.\nPaso 3: El banco debe mantener un promedio de saldo diario en su cuenta de encaje en el Banco Central de al menos $\$90$ millones de dólares. Si presenta déficit de encaje al cierre de quincena, incurre en sanción pecuniaria con tasa de interés punitiva fijada por la SSF.',
        result: 'Encaje legal inmovilizado obligatorio: $90 millones de dólares.',
      },
      {
        number: 3,
        title: 'Verificación de ratio de liquidez neta a 30 días',
        scenario: 'Una institución financiera registra activos líquidos netos de inmediata realización por valor de $\$45$ millones de dólares. Sus pasivos exigibles contractuales con vencimiento a menos de 30 días ascienden a $\$300$ millones. Calcule el ratio de liquidez neta y determine si satisface el estándar mínimo de supervisión SSF (10%).',
        stepByStepSolution: 'Fórmula regulatoria de Liquidez Neta:\n$\\text{Índice de Liquidez} = \\frac{\\text{Activos Líquidos Netos}}{\\text{Pasivos Exigibles a 30 días}} = \\frac{\\$45\\,\\text{millones}}{\\$300\\,\\text{millones}} = 0.150 = 15.0\\%$.\nComparación regulatoria: El umbral prudencial mínimo establecido por la normativa de riesgo de liquidez de la SSF es del $10.0\\%$.\nComo $15.0\\% > 10.0\\%$, la entidad presenta una posición de liquidez robusta para atender vencimientos inmediatos.',
        result: 'Ratio de Liquidez: 15.0% (CUMPLE con holgura frente al 10% mínimo).',
      },
      {
        number: 4,
        title: 'Detección de tipología de pitufeo (Structuring) y reporte a UIF',
        scenario: 'Un cliente sin actividad comercial declarada realiza en una misma semana 5 depósitos en efectivo en ventanilla de agencias distintas por montos de $\$9,500$, $\$9,800$, $\$9,200$, $\$9,600$ y $\$9,400$ (total acumulado: $\$47,500$). Indique el análisis de cumplimiento y la acción legal obligatoria.',
        stepByStepSolution: 'Paso 1: Identificación de la tipología: Fraccionamiento intencional o estructuración ("pitufeo" / structuring), caracterizado por realizar múltiples transacciones consecutivas justo por debajo del umbral de $\$10,000$ para evadir la generación automática del Reporte de Operación en Efectivo (ROE).\nPaso 2: Diligencia reforzada: La unidad de cumplimiento solicita al cliente justificación documental del origen de los fondos; el cliente rehúsa presentar contratos o comprobantes fiscales.\nPaso 3: Dictamen: El Comité de Cumplimiento concluye que la operativa carece de lógica económica y comercial evidente.\nPaso 4: Obligación legal: Formulación y remisión inmediata del Reporte de Operación Sospechosa (ROS) ante la Unidad de Investigación Financiera de la Fiscalía General de la República (UIF-FGR). Prohibido alertar al titular.',
        result: 'Emisión inmediata de Reporte de Operación Sospechosa (ROS) a la UIF-FGR.',
      },
      {
        number: 5,
        title: 'Matriz de riesgo y debida diligencia para Persona Expuesta Políticamente (PEP)',
        scenario: 'Un exministro de Estado que cesó en sus funciones hace 14 meses solicita la apertura de una cuenta de inversión corporativa por $\$500,000$ dólares a nombre de una sociedad panameña donde figura como beneficiario final del 100% de las acciones. Describa el protocolo de Debida Diligencia Reforzada (DDR).',
        stepByStepSolution: 'Paso 1: Calificación de PEP: Según la normativa de la SSF y recomendaciones del GAFI, la condición de PEP persiste por al menos 2 años posteriores a la cesación del cargo público de alto nivel. Por lo tanto, el solicitante mantiene la calidad de PEP activo.\nPaso 2: Aprobación superior: La vinculación comercial no puede ser aprobada por el oficial de negocios; requiere autorización expresa del Comité de Cumplimiento o de la Junta Directiva.\nPaso 3: Verificación de fondos: Acreditación estricta de la fuente de riqueza y del origen específico de los fondos mediante declaraciones patrimoniales ante la Sección de Probidad de la CSJ y estados financieros auditados.\nPaso 4: Monitoreo transaccional reforzado continuo durante toda la vigencia de la relación bancaria.',
        result: 'Calificación como cliente de Alto Riesgo PEP; aprobación de Alta Dirección requerida.',
      },
    ],
    retentionDrills: [
      {
        id: 'aml-drill-1',
        question: '¿Cuál es el Coeficiente de Adecuación Patrimonial (CAP) mínimo que exige el Art. 41 de la Ley de Bancos en El Salvador?',
        options: {
          A: '12% sobre los Activos Ponderados por Riesgo.',
          B: '8% según Basilea I básico.',
          C: '20% del total de depósitos.',
          D: '5% del patrimonio neto.',
        },
        correctAnswer: 'A',
        explanation: 'La Ley de Bancos de El Salvador fija un estándar prudencial más exigente que el acuerdo original de Basilea (8%), demandando un CAP mínimo no menor al 12%.',
      },
      {
        id: 'aml-drill-2',
        question: '¿Qué delito comete un empleado bancario si le informa al cliente que su cuenta está siendo reportada como sospechosa (ROS) ante la UIF?',
        options: {
          A: 'Infracción grave de revelación indebida o "tipping-off" con responsabilidad penal.',
          B: 'Falta administrativa menor subsanable.',
          C: 'Ninguno, es un deber de transparencia con el cliente.',
          D: 'Incumplimiento de horario de atención.',
        },
        correctAnswer: 'A',
        explanation: 'La Ley Contra el Lavado de Dinero y Activos prohíbe tajantemente el aviso al titular ("tipping-off"), tipificándolo como delito para preservar el sigilo de las investigaciones fiscales.',
      },
    ],
    latexCode: `% =========================================================================
% HOJA MNEMOTÉCNICA INSTITUCIONAL KUSKAT — CUMPLIMIENTO AML \& SSF (1 PÁGINA)
% =========================================================================
\\documentclass[10pt,letterpaper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish]{babel}
\\usepackage[margin=0.8cm]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{multicol}
\\usepackage{tcolorbox}
\\usepackage{microtype}
\\pagestyle{empty}

\\definecolor{azulKuskat}{HTML}{0B1B3D}
\\definecolor{doradoKuskat}{HTML}{C59B27}
\\definecolor{fondoKuskat}{HTML}{FAF9F5}

\\tcbset{
  colback=fondoKuskat,
  colframe=azulKuskat,
  coltitle=doradoKuskat,
  fonttitle=\\bfseries\\sffamily\\footnotesize,
  boxrule=0.8pt,
  arc=2mm,
  top=2mm,bottom=2mm,left=2.5mm,right=2.5mm
}

\\begin{document}

\\begin{center}
  {\\color{azulKuskat}\\sffamily\\Large\\textbf{KUSKAT $\\cdot$ CUMPLIMIENTO FINANCIERO AML \& SSF}}\\\\
  {\\footnotesize\\sffamily Solvencia CAP $\\ge$12\\% $\\cdot$ Encaje Legal $\\cdot$ Debida Diligencia PEP $\\cdot$ UIF-FGR $\\cdot$ El Salvador}
\\end{center}
\\vspace{-2mm}
\\hrule
\\vspace{2mm}

\\begin{multicols*}{3}

\\begin{tcolorbox}[title=1. Solvencia (Ley de Bancos)]
\\textbf{Adecuación Patrimonial (CAP):}\\\\
$\\text{CAP} = \\frac{\\text{Fondo Patrimonial}}{\\text{Activos Ponderados por Riesgo}} \\ge \\mathbf{12.0\\%}$\\\\
(Art. 41 Ley de Bancos).

\\textbf{Cobertura de Cartera Vencida:}\\\\
$\\text{Cobertura} = \\frac{\\text{Provisiones}}{\\text{Créditos Vencidos}} \\ge 100\\%$

\\textbf{Límite de Concentración:}\\\\
Crédito individual $\\le 15\\%$ del Fondo Patrimonial.
\\end{tcolorbox}

\\begin{tcolorbox}[title=2. Liquidez \& Encaje Legal]
\\textbf{Encaje Legal Bancario (BCR):}\\\\
Reserva obligatoria líquida inmovilizada en el Banco Central sobre depósitos a la vista.

\\textbf{Ratio de Liquidez Neta:}\\\\
$\\text{Índice} = \\frac{\\text{Activos Líquidos Netos}}{\\text{Pasivos Exigibles a 30 días}} \\ge \\mathbf{10.0\\%}$

\\textbf{¡Alerta de Auditoría!}\\\\
El incumplimiento del encaje legal genera multas y tasas punitivas directas impuestas por la SSF.
\\end{tcolorbox}

\\begin{tcolorbox}[title=3. Prevención AML \& ROS]
\\textbf{Reporte Efectivo (ROE):}\\\\
Operaciones en efectivo $\\ge \\$10,000$.

\\textbf{Reporte Sospechoso (ROS):}\\\\
Sin umbral monetario mínimo. Basado en falta de fundamento económico lícito. Remisión confidencial a la UIF-FGR.

\\textbf{Régimen PEPs (Alto Riesgo):}\\\\
Aprobación por Alta Dirección + Origen demostrado de fondos. Vigente hasta 2 años post-cese.

\\textbf{¡Prohibición Estricta!}\\\\
Cero revelación al cliente (prohibición penal de \\textit{tipping-off}).
\\end{tcolorbox}

\\end{multicols*}

\\vfill
\\begin{center}
  \\footnotesize\\sffamily Plataforma KUSKAT $\\cdot$ WhatsApp Oficial: +503 7657 4463 $\\cdot$ Normas SSF \& Ley LDA El Salvador
\\end{center}

\\end{document}`,
  },

  // =========================================================================
  // 9. FICHA GRAMÁTICA & SINTAXIS ANCESTRAL NÁHUAT PIPIL DE EL SALVADOR
  // =========================================================================
  {
    id: 'nahuat-pipil-sintaxis',
    title: 'Compendio de Gramática & Morfosintaxis Náhuat Pipil',
    subtitle: 'Prefijos de Sujeto y Objeto, Posesión Nominal, Sufijos Absolutivos y Conteo Vigesimal Pipil',
    authority: 'Iniciativa de Recuperación Lingüística Ancestral · MINED & Universidad de El Salvador (UES)',
    category: 'linguistico',
    icon: '🗣️',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    summary: 'Guía mnemotécnica de rescate lingüístico de la lengua materna de Cuscatlán: conjugación verbal transitiva e intransitiva, prefijos pronominales, declinación posesiva y numeración vigesimal ancestral.',
    sections: [
      {
        title: '1. Prefijos de Sujeto & Objeto Verbal',
        badge: 'Morfología Verbal',
        content: 'Conjugación de verbos en tiempo presente indicativo.',
        formulasOrRules: [
          {
            label: 'Prefijos Sujeto (Intransitivos)',
            formula: 'ni- (yo), \\; ti- (tú), \\; \\emptyset- (él/ella), \\; ti-...-t (nosotros), \\; an-...-t (ustedes), \\; \\emptyset-...-t (ellos)',
            explanation: 'El sufijo pluralizador -t acompaña a las tres personas del plural verbal.',
          },
          {
            label: 'Prefijos Objeto (Verbos Transitivos)',
            formula: 'nech- (a mí), \\; mitz- (a ti), \\; ki- / k- (a él/ella/eso), \\; tech- (a nosotros), \\; amech- (a ustedes), \\; kin- (a ellos)',
            explanation: 'Estructura aglutinante: [Sujeto] + [Objeto] + [Raíz Verbal] + [Plural]. Ejemplo: Ni-k-ita (Yo lo veo).',
          },
          {
            label: 'Elisión Vocálica del Prefijo ki-',
            formula: 'ki- + \\text{consonante}; \\quad k- + \\text{vocal}',
            explanation: 'Ejemplo: Ni-ki-kua (Yo lo como) frente a Ni-k-elnamiki (Yo lo recuerdo).',
          },
        ],
        commonPitfall: 'Omitir el prefijo objeto obligatorio en verbos transitivos: decir "Ni-kua ne tamal" es agramatical; debe ser "Ni-k-kua ne tamal".',
      },
      {
        title: '2. Posesión Nominal & Sufijos Absolutivos',
        badge: 'Sustantivos Pipiles',
        content: 'Declinación de posesión y formas libres del sustantivo.',
        formulasOrRules: [
          {
            label: 'Prefijos Posesivos Nominales',
            formula: 'nu- (mi), \\; mu- (tu), \\; i- (su de él), \\; tu- (nuestro), \\; amu- (su de ustedes), \\; in- / inin- (su de ellos)',
            explanation: 'Al agregar un prefijo posesivo, el sustantivo PIERDE obligatoriamente su sufijo absolutivo libre.',
          },
          {
            label: 'Sufijos Absolutivos Libres (-t, -ti, -tuk)',
            formula: '\\text{kal-ti (casa)} \\rightarrow nu-kal; \\quad \\text{kuhshat (cuscatlán)}',
            explanation: 'El sufijo absolutivo identifica al sustantivo cuando no está poseído ni compuesto.',
          },
          {
            label: 'Sufijos de Plural Nominal (-met, -ket)',
            formula: 'kaltimet (casas); \\quad takamet (hombres); \\quad siwatket (mujeres)',
            explanation: 'Formación regular de plurales en sustantivos animados e inanimados.',
          },
        ],
        commonPitfall: 'Conservar el sufijo absolutivo al poseer: decir "nu-kalti" es incorrecto; la forma legítima es "nu-kal".',
      },
      {
        title: '3. Sistema Numérico Vigesimal & Sintaxis',
        badge: 'Vigesimal & Sintaxis',
        content: 'Conteo en base 20 y orden de constituyentes oracionales.',
        formulasOrRules: [
          {
            label: 'Números Cardinales del 1 al 5',
            formula: 'se (1), \\; ume (2), \\; yey (3), \\; nawi (4), \\; makwil (5)',
            explanation: 'Makwil representa "una mano completa" (5 dedos).',
          },
          {
            label: 'Formación del 6 al 10',
            formula: 'chikwasen (6), \\; chikume (7), \\; chikwey (8), \\; chiknawi (9), \\; mahtakti (10)',
            explanation: 'El prefijo chik- indica "cinco más": chik-ume = 5 + 2 = 7.',
          },
          {
            label: 'La Veintena (Puwal = 20)',
            formula: 'se puwal (20 = 1 cuenta de 20 dedos de pies y manos)',
            explanation: 'Sistema vigesimal ancestral: 40 = ume puwal (2x20); 60 = yey puwal (3x20).',
          },
        ],
        commonPitfall: 'Usar numeración decimal española para números menores de 20 cuando existe el sistema autóctono pipil.',
      },
    ],
    solvedPracticeExamples: [
      {
        number: 1,
        title: 'Conjugación de verbo transitivo con prefijos de sujeto y objeto',
        scenario: 'Conjugue en presente indicativo la expresión "Yo te quiero a ti" y "Nosotros lo comemos" utilizando la raíz verbal transitiva *neki* (querer) y *kua* (comer).',
        stepByStepSolution: 'Paso 1: Para "Yo te quiero":\n- Prefijo de sujeto 1.ª persona singular: *ni-*\n- Prefijo de objeto 2.ª persona singular ("a ti"): *mitz-*\n- Raíz verbal: *neki*\n- Ensamble aglutinante: *Ni + mitz + neki* = *Nimitzneki* ("Yo te quiero").\nPaso 2: Para "Nosotros lo comemos":\n- Prefijo de sujeto 1.ª persona plural: *ti-*\n- Prefijo de objeto 3.ª persona singular inanimado ("lo"): *k-*\n- Raíz verbal: *kua*\n- Sufijo pluralizador de sujeto: *-t*\n- Ensamble: *Ti + k + kua + t* = *Tikkuat* ("Nosotros lo comemos").',
        result: '*Nimitzneki* ("Te quiero") y *Tikkuat* ("Lo comemos").',
      },
      {
        number: 2,
        title: 'Declinación posesiva completa del sustantivo casa (Kal)',
        scenario: 'A partir de la forma absolutiva *kalti* (casa), decline el sustantivo con las 6 personas gramaticales de posesión.',
        stepByStepSolution: 'Regla morfológica: Al poseer, se elimina el sufijo absolutivo *-ti*, quedando la raíz nominal *kal*:\n1. 1.ª singular (mi casa): *nu-kal*\n2. 2.ª singular (tu casa): *mu-kal*\n3. 3.ª singular (su casa de él/ella): *i-kal*\n4. 1.ª plural (nuestra casa): *tu-kal*\n5. 2.ª plural (su casa de ustedes): *amu-kal*\n6. 3.ª plural (su casa de ellos): *in-kal* (o *ininkal*).',
        result: '*nukal*, *mukal*, *ikal*, *tukal*, *amukal*, *inkal*.',
      },
      {
        number: 3,
        title: 'Formación del pretérito perfecto en verbo intransitivo',
        scenario: 'Formule en pretérito perfecto la oración "Ayer yo caminé en el camino", utilizando el adverbio *yalwa* (ayer), el verbo intransitivo *nehmi* (caminar) y el sustantivo locativo *uhti* (camino).',
        stepByStepSolution: 'Paso 1: Adverbio de tiempo pasado: *Yalwa* (ayer).\nPaso 2: Formación del tiempo pretérito en verbos de la primera clase terminados en vocal: el sufijo de pretérito es *-ki* o pérdida vocálica.\nPara *nehmi*: *ni-nehmi-ki* ("yo caminé").\nPaso 3: Expresión locativa: *ka ne uhti* ("en el camino").\nPaso 4: Oración completa: *Yalwa ninehmiki ka ne uhti*.',
        result: '*Yalwa ninehmiki ka ne uhti* ("Ayer caminé en el camino").',
      },
      {
        number: 4,
        title: 'Estructura de oración copulativa atributiva',
        scenario: 'Construya en náhuat pipil la proposición: "Esta tierra cuscatleca es muy hermosa", empleando el demostrativo *ini*, el sustantivo *tal* (tierra) y el adjetivo compuesto *yehyektzin* (hermosa/preciosa).',
        stepByStepSolution: 'Paso 1: En la gramática pipil no existe un verbo "ser/estar" obligatorio en presente atributivo; la relación copulativa se expresa por yuxtaposición nominal directa.\nPaso 2: Demostrativo y sustantivo: *Ini tal* ("Esta tierra").\nPaso 3: Atributo intensificado: *yehyektzin* ("muy hermosa", derivado reduplicativo de *yek* = bueno/bonito + sufijo reverencial *-tzin*).\nPaso 4: Ensamble oracional: *Ini tal yehyektzin* (o *Ne tutal yehyektzin*: "Nuestra tierra es hermosa").',
        result: '*Ini tal yehyektzin* ("Esta tierra es hermosa").',
      },
      {
        number: 5,
        title: 'Expresión de cantidad en sistema numérico vigesimal ancestral',
        scenario: 'Descomponga y traduzca al náhuat pipil auténtico de Santo Domingo de Guzmán el número cardinal 47 según el sistema vigesimal tradicional.',
        stepByStepSolution: 'Paso 1: Descomposición en veintenas (puwal = 20) y unidades residuales:\n$47 = 2 \\times 20 + 7$.\nPaso 2: Expresión de dos veintenas ($2 \\times 20 = 40$):\n2 = *ume*; 20 = *puwal* $\\implies$ *ume puwal* (40).\nPaso 3: Expresión del número 7:\n$7 = 5 + 2 = \\text{chik} + \\text{ume} = \\text{chikume}$.\nPaso 4: Conjunción de adición: *wan* ("y" / "con").\nPaso 5: Ensamble numérico completo:\n*Ume puwal wan chikume* (literalmente: "Dos veintenas y siete" = 47).',
        result: '*Ume puwal wan chikume* (47 en sistema vigesimal pipil).',
      },
    ],
    retentionDrills: [
      {
        id: 'nahuat-drill-1',
        question: '¿Qué le sucede al sustantivo libre "kalti" (casa) cuando se le agrega el prefijo posesivo "nu-" (mi)?',
        options: {
          A: 'Pierde obligatoriamente el sufijo absolutivo "-ti", quedando "nukal".',
          B: 'Conserva el sufijo absolutivo como "nukalti".',
          C: 'Se duplica la primera sílaba.',
          D: 'Cambia a género femenino.',
        },
        correctAnswer: 'A',
        explanation: 'En la gramática pipil, los sufijos absolutivos (-t, -ti, -tuk) solo existen cuando el sustantivo está en estado libre no poseído. Al poseerse, el sufijo se elide sistemáticamente.',
      },
      {
        id: 'nahuat-drill-2',
        question: '¿Cómo se expresa el número 8 en la numeración autóctona pipil?',
        options: {
          A: 'Chikwey (5 + 3).',
          B: 'Mahtakti (10).',
          C: 'Makwil (5).',
          D: 'Ume puwal (40).',
        },
        correctAnswer: 'A',
        explanation: 'El sistema náhuat pipil forma los números del 6 al 9 agregando el prefijo "chik-" (cinco) a las unidades: chik-wey = 5 + 3 = 8.',
      },
    ],
    latexCode: `% =========================================================================
% HOJA MNEMOTÉCNICA INSTITUCIONAL KUSKAT — NÁHUAT PIPIL (1 PÁGINA)
% =========================================================================
\\documentclass[10pt,letterpaper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish]{babel}
\\usepackage[margin=0.8cm]{geometry}
\\usepackage{amsmath,amssymb}
\\usepackage{multicol}
\\usepackage{tcolorbox}
\\usepackage{microtype}
\\pagestyle{empty}

\\definecolor{azulKuskat}{HTML}{0B1B3D}
\\definecolor{doradoKuskat}{HTML}{C59B27}
\\definecolor{fondoKuskat}{HTML}{FAF9F5}

\\tcbset{
  colback=fondoKuskat,
  colframe=azulKuskat,
  coltitle=doradoKuskat,
  fonttitle=\\bfseries\\sffamily\\footnotesize,
  boxrule=0.8pt,
  arc=2mm,
  top=2mm,bottom=2mm,left=2.5mm,right=2.5mm
}

\\begin{document}

\\begin{center}
  {\\color{azulKuskat}\\sffamily\\Large\\textbf{KUSKAT $\\cdot$ GRAMÁTICA ANCESTRAL NÁHUAT PIPIL}}\\\\
  {\\footnotesize\\sffamily Prefijos Sujeto/Objeto $\\cdot$ Posesión Nominal $\\cdot$ Conteo Vigesimal $\\cdot$ El Salvador}
\\end{center}
\\vspace{-2mm}
\\hrule
\\vspace{2mm}

\\begin{multicols*}{3}

\\begin{tcolorbox}[title=1. Prefijos de Sujeto \& Objeto]
\\textbf{Prefijos Sujeto (Verbo Intransitivo):}\\\\
$\\bullet$ $ni-$ (yo) $\\cdot$ $ti-$ (tú) $\\cdot$ $\\emptyset-$ (él/ella)\\\\
$\\bullet$ Plural (-t): $ti-...-t$ (nosotros), $an-...-t$ (ustedes), $\\emptyset-...-t$ (ellos).

\\textbf{Prefijos Objeto (Verbo Transitivo):}\\\\
$\\bullet$ $nech-$ (a mí) $\\cdot$ $mitz-$ (a ti)\\\\
$\\bullet$ $ki-$ / $k-$ (a él/ella/eso)\\\\
$\\bullet$ $tech-$ (a nosotros) $\\cdot$ $amech-$ (a ustedes)\\\\
$\\bullet$ $kin-$ (a ellos)

\\textbf{Estructura Aglutinante:}\\\\
$\\text{[Sujeto]} + \\text{[Objeto]} + \\text{[Raíz]} + \\text{[Plural]}$
\\end{tcolorbox}

\\begin{tcolorbox}[title=2. Posesión \& Absolutivos]
\\textbf{Prefijos Posesivos:}\\\\
$\\bullet$ $nu-$ (mi) $\\cdot$ $mu-$ (tu) $\\cdot$ $i-$ (su)\\\\
$\\bullet$ $tu-$ (nuestro) $\\cdot$ $amu-$ (de ustedes) $\\cdot$ $in-$ (de ellos).

\\textbf{Regla de Elisión:}\\\\
Al poseer, el sustantivo \\textbf{pierde} el sufijo absolutivo:
$\\text{kal-ti} \\implies nu\\text{-kal}$ (mi casa).

\\textbf{Plural de Sustantivos:}\\\\
Sufijos $-met$ y $-ket$: $takamet$ (hombres).
\\end{tcolorbox}

\\begin{tcolorbox}[title=3. Conteo Vigesimal (Base 20)]
\\textbf{Del 1 al 5:}\\\\
1 = $se$ $\\cdot$ 2 = $ume$ $\\cdot$ 3 = $yey$\\\\
4 = $nawi$ $\\cdot$ 5 = $makwil$

\\textbf{Del 6 al 10 (chik- = +5):}\\\\
6 = $chikwasen$ $\\cdot$ 7 = $chikume$\\\\
8 = $chikwey$ $\\cdot$ 9 = $chiknawi$\\\\
10 = $mahtakti$

\\textbf{Veintenas (Puwal = 20):}\\\\
$\\bullet$ 20 = $se\\text{ puwal}$\\\\
$\\bullet$ 40 = $ume\\text{ puwal}$\\\\
$\\bullet$ 100 = $makwil\\text{ puwal}$.
\\end{tcolorbox}

\\end{multicols*}

\\vfill
\\begin{center}
  \\footnotesize\\sffamily Plataforma KUSKAT $\\cdot$ WhatsApp Oficial: +503 7657 4463 $\\cdot$ Rescate Lingüístico Pipil
\\end{center}

\\end{document}`,
  },
];

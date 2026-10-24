/**
 * RECURSOS PEDAGÓGICOS INSTITUCIONALES DE 1 PÁGINA (CHEAT SHEETS EN LaTeX)
 * Plataforma Académica KUSKAT · República de El Salvador
 *
 * Fichas mnemotécnicas y formularios ejecutivos condensados en exactamente 1 hoja carta,
 * diseñados bajo estándares tipográficos densos y legibles (multicol, tcolorbox, TikZ)
 * para descarga ultraliviana (<120 KB) e impresión económica en centros escolares.
 */

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
  category: 'academico' | 'salud' | 'comercio' | 'juridico';
  icon: string;
  badgeColor: string;
  summary: string;
  sections: OnePageSectionBox[];
  latexCode: string;
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
];

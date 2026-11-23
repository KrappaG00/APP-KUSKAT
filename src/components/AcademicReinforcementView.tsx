import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  GraduationCap,
  BookOpen,
  Calculator,
  Atom,
  Globe2,
  HeartHandshake,
  Palette,
  Activity,
  Landmark,
  Library,
  Search,
  Filter,
  Sparkles,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Layers,
  Award,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Clock,
  RotateCcw,
  AlertTriangle,
  Play,
  Zap,
  Check,
  HelpCircle,
  X,
  FileText,
  BarChart3,
  BookmarkCheck,
  Image as ImageIcon,
  ListOrdered,
} from 'lucide-react';
import { KaTeXRenderer } from './KaTeXRenderer';
import { ModulePaginationBar } from './ModulePaginationBar';
import {
  getMinedTextIndex,
  loadMinedTextDocument,
  searchInMinedTextDocument,
  type MinedTextDocument,
  type MinedTextIndexEntry,
} from '../services/minedTextService';
import {
  getGrades,
  getGradeDetail,
  getSubject,
  getGradeOfficialResources,
  getUnit,
  getUnitLessons,
  getUnitQuestions,
  searchCurriculum,
} from '../data/minedCurriculum/curriculumService';
import {
  getAllMinedResources,
  getPrimeraInfanciaArticulationResources,
} from '../data/minedCurriculum/minedResourcesManifest';
import { MINED_CATALOG, MINED_SUBJECT_METADATA } from '../data/minedCurriculum/catalog';
import type {
  GradeLevelId,
  SubjectId,
  TomoNumber,
  AnswerOptionKey,
  CurriculumUnit,
  PscerLesson,
  UnitQuestion,
  CycleId,
  CurriculumSearchResult,
  MinedOfficialResource,
  MinedResourceDocType,
} from '../data/minedCurriculum/types';


export interface SubjectModule {
  id: string;
  name: string;
  icon: string;
  color: string;
  badgeColor: string;
  summary: string;
  topics: {
    title: string;
    description: string;
    exampleOrFormula?: string;
    tips: string;
  }[];
}

export interface GradeLevel {
  id: string;
  name: string;
  cycle: string;
  description: string;
  subjects: SubjectModule[];
}

export const ACADEMIC_GRADES: GradeLevel[] = [
  // 1° a 3° Grado (Primer Ciclo)
  {
    id: '1-grado',
    name: '1° Grado',
    cycle: 'Primer Ciclo de Básica',
    description: 'Fundamentos de lectoescritura, noción numérica del 0 al 100, suma, resta y descubrimiento del entorno.',
    subjects: [
      {
        id: 'mat-1',
        name: 'Matemáticas',
        icon: '🔢',
        color: 'border-blue-200 bg-blue-50/50',
        badgeColor: 'bg-blue-100 text-blue-800',
        summary: 'Construcción del concepto de número, conteo, adición y sustracción básica sin llevar.',
        topics: [
          {
            title: 'Los Números del 0 al 100 y Valor Posicional',
            description: 'Identificación de unidades (1 al 9) y decenas (grupos de 10). Comparación de cantidades con mayor que (>), menor que (<) e igual (=).',
            exampleOrFormula: '1 Decena = 10 Unidades. En el número 34: hay 3 decenas y 4 unidades.',
            tips: 'Usa objetos manipulables (frijolitos, tapitas) para formar decenas visuales.',
          },
          {
            title: 'Adición y Sustracción sin Llevar',
            description: 'Juntar o separar colecciones de objetos. Comprensión de los signos más (+) y menos (-).',
            exampleOrFormula: '12 + 5 = 17 ; 18 - 6 = 12',
            tips: 'Empieza siempre sumando o restando las unidades a la derecha antes de las decenas.',
          },
        ],
      },
      {
        id: 'len-1',
        name: 'Lenguaje y Lectoescritura',
        icon: '📖',
        color: 'border-emerald-200 bg-emerald-50/50',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        summary: 'Conciencia fonológica, vocales, consonantes iniciales (m, p, s, l, t) y comprensión de oraciones sencillas.',
        topics: [
          {
            title: 'Las Vocales y las Primeras Consonantes',
            description: 'Asociación del sonido (fonema) con el trazo de la letra (grafema). Formación de sílabas directas: ma-me-mi-mo-mu.',
            exampleOrFormula: 'M + A = MA -> Mamá me ama.',
            tips: 'Pronuncia el sonido de la letra (mmmm) en vez de su nombre solo para facilitar la lectura fluida.',
          },
        ],
      },
    ],
  },
  {
    id: '2-grado',
    name: '2° Grado',
    cycle: 'Primer Ciclo de Básica',
    description: 'Adición y sustracción con llevada, números hasta el 1,000, tablas de multiplicar iniciales y narración.',
    subjects: [
      {
        id: 'mat-2',
        name: 'Matemáticas',
        icon: '📐',
        color: 'border-blue-200 bg-blue-50/50',
        badgeColor: 'bg-blue-100 text-blue-800',
        summary: 'Suma llevando, resta prestando y noción de la multiplicación como suma repetida.',
        topics: [
          {
            title: 'Suma Llevando y Resta Prestando (Desagrupación)',
            description: 'Cuando las unidades suman 10 o más, se forma una decena que pasa a la columna contigua.',
            exampleOrFormula: '47 + 25: 7+5=12 (escribo 2 y llevo 1); 1+4+2=7 -> Total: 72.',
            tips: 'Escribe el número que llevas en la parte superior en pequeño para no olvidarlo.',
          },
          {
            title: 'Introducción a la Multiplicación (Tablas del 2, 3, 4 y 5)',
            description: 'Comprender que multiplicar es sumar grupos iguales de manera más rápida.',
            exampleOrFormula: '3 x 4 = 4 + 4 + 4 = 12',
            tips: 'Visualiza la multiplicación como una cuadrícula o filas de galletas.',
          },
        ],
      },
      {
        id: 'cie-2',
        name: 'Ciencias y Entorno',
        icon: '🌱',
        color: 'border-emerald-200 bg-emerald-50/50',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        summary: 'Los seres vivos, plantas, animales, hábitats y hábitos saludables de higiene y nutrición.',
        topics: [
          {
            title: 'Partes de la Planta y sus Funciones',
            description: 'Raíz (absorbe agua), Tallo (sostiene y transporta), Hojas (fabrican alimento con luz solar), Flores y Frutos.',
            exampleOrFormula: 'Agua + Luz Solar + Tierra fértil = Fotosíntesis y crecimiento.',
            tips: 'Siembra una semilla de frijol en algodón húmedo para observar la germinación.',
          },
        ],
      },
    ],
  },
  {
    id: '3-grado',
    name: '3° Grado',
    cycle: 'Primer Ciclo de Básica',
    description: 'Dominio de tablas del 1 al 10, división exacta, sustantivos, adjetivos y el municipio.',
    subjects: [
      {
        id: 'mat-3',
        name: 'Matemáticas',
        icon: '🔢',
        color: 'border-blue-200 bg-blue-50/50',
        badgeColor: 'bg-blue-100 text-blue-800',
        summary: 'Tablas completas del 1 al 10, noción de reparto equitativo (división) y fracciones sencillas (1/2, 1/4).',
        topics: [
          {
            title: 'La División como Reparto Equitativo',
            description: 'Repartir una cantidad total en partes exactamente iguales entre varios receptores.',
            exampleOrFormula: '18 ÷ 3 = 6 (Porque 6 x 3 = 18). Términos: Dividendo, Divisor, Cociente y Residuo.',
            tips: 'La división es la operación inversa de la multiplicación.',
          },
        ],
      },
      {
        id: 'soc-3',
        name: 'Estudios Sociales',
        icon: '🗺️',
        color: 'border-amber-200 bg-amber-50/50',
        badgeColor: 'bg-amber-100 text-amber-800',
        summary: 'El municipio salvadoreño, autoridades locales, costumbres comunitarias y puntos cardinales.',
        topics: [
          {
            title: 'El Municipio, la Alcaldía y la Convivencia',
            description: 'El gobierno municipal encabezado por el Concejo y el Alcalde; servicios públicos locales como alumbrado, agua y aseo.',
            tips: 'Aprende los 4 puntos cardinales fijándote en por dónde sale el sol (Este/Oriente).',
          },
        ],
      },
    ],
  },

  // 4° a 6° Grado (Segundo Ciclo)
  {
    id: '4-grado',
    name: '4° Grado',
    cycle: 'Segundo Ciclo de Básica',
    description: 'Fracciones homogéneas, números decimales, verbos y tiempos verbales, geografía de El Salvador.',
    subjects: [
      {
        id: 'mat-4',
        name: 'Matemáticas',
        icon: '➗',
        color: 'border-blue-200 bg-blue-50/50',
        badgeColor: 'bg-blue-100 text-blue-800',
        summary: 'Fracciones propias, impropias y mixtas; suma y resta con igual denominador; números decimales.',
        topics: [
          {
            title: 'Fracciones Homogéneas (Mismo Denominador)',
            description: 'Para sumar o restar fracciones con igual denominador, se operan los numeradores y se mantiene el mismo denominador.',
            exampleOrFormula: '2/7 + 3/7 = (2+3)/7 = 5/7',
            tips: 'Nunca sumes los denominadores cuando son iguales.',
          },
        ],
      },
      {
        id: 'cie-4',
        name: 'Ciencias Naturales',
        icon: '🔬',
        color: 'border-cyan-200 bg-cyan-50/50',
        badgeColor: 'bg-cyan-100 text-cyan-800',
        summary: 'Cadenas tróficas, el ciclo del agua, estados de la materia y el sistema digestivo.',
        topics: [
          {
            title: 'El Ciclo del Agua y sus Estados',
            description: 'Evaporación (líquido a gas), Condensación (nubes), Precipitación (lluvia) y Filtración.',
            exampleOrFormula: 'Calor solar -> Vapor -> Nubes -> Lluvia -> Ríos y Mares.',
            tips: 'Recuerda que el agua de nuestro planeta es la misma desde hace millones de años; se recicla continuamente.',
          },
        ],
      },
    ],
  },
  {
    id: '5-grado',
    name: '5° Grado',
    cycle: 'Segundo Ciclo de Básica',
    description: 'Fracciones heterogéneas (MCM), áreas y perímetros, ecosistemas y la época colonial salvadoreña.',
    subjects: [
      {
        id: 'mat-5',
        name: 'Matemáticas',
        icon: '📐',
        color: 'border-blue-200 bg-blue-50/50',
        badgeColor: 'bg-blue-100 text-blue-800',
        summary: 'Mínimo Común Múltiplo (MCM), Máximo Común Divisor (MCD), suma heterogénea y área de polígonos.',
        topics: [
          {
            title: 'Suma de Fracciones con Distinto Denominador',
            description: 'Se encuentra el MCM de los denominadores para convertirlas a fracciones equivalentes homogéneas.',
            exampleOrFormula: '1/3 + 1/4 -> MCM(3,4)=12 -> 4/12 + 3/12 = 7/12',
            tips: 'Calcula primero los múltiplos de cada denominador hasta hallar el menor común.',
          },
        ],
      },
      {
        id: 'soc-5',
        name: 'Estudios Sociales',
        icon: '🏛️',
        color: 'border-amber-200 bg-amber-50/50',
        badgeColor: 'bg-amber-100 text-amber-800',
        summary: 'Pueblos originarios de El Salvador (Pipiles, Lencas, Kakawiras), Conquista española (1524) y Colonia.',
        topics: [
          {
            title: 'El Señorío de Cuzcatlán y la Conquista de 1524',
            description: 'La resistencia liderada por el guerrero Atonal en Acaxual (Acajutla) hiriendo a Pedro de Alvarado en la pierna.',
            tips: 'Reconoce el legado toponímico náhuat en nombres de volcanes, pueblos y ríos salvadoreños.',
          },
        ],
      },
    ],
  },
  {
    id: '6-grado',
    name: '6° Grado',
    cycle: 'Segundo Ciclo de Básica',
    description: 'Proporcionalidad directa e inversa, porcentajes, gramática oracional y la Independencia de 1821.',
    subjects: [
      {
        id: 'mat-6',
        name: 'Matemáticas',
        icon: '📊',
        color: 'border-blue-200 bg-blue-50/50',
        badgeColor: 'bg-blue-100 text-blue-800',
        summary: 'Razones y proporciones, regla de tres simple, cálculo de porcentajes y volumen de prismas.',
        topics: [
          {
            title: 'La Regla de Tres Simple Directa y Porcentajes',
            description: 'Cuando dos magnitudes aumentan proporcionalmente, el producto cruzado es igual.',
            exampleOrFormula: 'Si 4 cuadernos cuestan $6.00, ¿cuánto cuestan 10? -> x = (10 x 6) / 4 = $15.00',
            tips: 'Organiza siempre los datos en dos columnas alineando las unidades iguales.',
          },
        ],
      },
      {
        id: 'len-6',
        name: 'Lenguaje y Literatura',
        icon: '📚',
        color: 'border-emerald-200 bg-emerald-50/50',
        badgeColor: 'bg-emerald-100 text-emerald-800',
        summary: 'Oración gramatical, sujeto y predicado, núcleo del sujeto y complementos del verbo.',
        topics: [
          {
            title: 'Estructura Sintáctica de la Oración Simple',
            description: 'Sujeto (de quién se habla) y Predicado (lo que se dice del sujeto con su verbo conjugado como núcleo).',
            exampleOrFormula: '[Los estudiantes salvadoreños] (Sujeto) [ganaron la olimpiada de matemáticas] (Predicado).',
            tips: 'Para encontrar el sujeto, pregúntale al verbo: ¿Quién o quiénes realizan la acción?',
          },
        ],
      },
    ],
  },

  // 7° a 9° Grado (Tercer Ciclo)
  {
    id: '7-grado',
    name: '7° Grado',
    cycle: 'Tercer Ciclo de Básica',
    description: 'Números enteros (positivos y negativos), ley de signos, álgebra introductoria y la célula.',
    subjects: [
      {
        id: 'mat-7',
        name: 'Matemáticas',
        icon: '➕',
        color: 'border-blue-200 bg-blue-50/50',
        badgeColor: 'bg-blue-100 text-blue-800',
        summary: 'Conjunto de los números enteros (Z), recta numérica, operaciones con signos y reducción de términos semejantes.',
        topics: [
          {
            title: 'Ley de Signos en Multiplicación y División',
            description: 'Signos iguales dan positivo (+); signos diferentes dan negativo (-).',
            exampleOrFormula: '(+) x (+) = (+) ; (-) x (-) = (+) ; (+) x (-) = (-) ; (-) x (+) = (-)',
            tips: 'Cuidado: la ley de signos es para multiplicación/división. En suma: signos iguales se suman, signos diferentes se restan y queda el signo del mayor.',
          },
        ],
      },
      {
        id: 'cie-7',
        name: 'Ciencias Naturales',
        icon: '🧬',
        color: 'border-cyan-200 bg-cyan-50/50',
        badgeColor: 'bg-cyan-100 text-cyan-800',
        summary: 'Estructura celular (animal y vegetal), organelos, membrana celular, mitosis y meiosis.',
        topics: [
          {
            title: 'Célula Eucariota vs. Procariota',
            description: 'Las eucariotas poseen núcleo definido con membrana nuclear y organelos; las procariotas (bacterias) tienen ADN libre en el citoplasma.',
            tips: 'La célula vegetal se diferencia de la animal por tener pared celular de celulosa, cloroplastos y gran vacuola central.',
          },
        ],
      },
    ],
  },
  {
    id: '8-grado',
    name: '8° Grado',
    cycle: 'Tercer Ciclo de Básica',
    description: 'Polinomios, productos notables, factorización, sistemas de ecuaciones lineales y física elemental.',
    subjects: [
      {
        id: 'mat-8',
        name: 'Matemáticas',
        icon: '✖️',
        color: 'border-blue-200 bg-blue-50/50',
        badgeColor: 'bg-blue-100 text-blue-800',
        summary: 'Productos notables (binomio al cuadrado), métodos de factorización y sistemas 2x2.',
        topics: [
          {
            title: 'Productos Notables: Binomio al Cuadrado',
            description: 'El cuadrado del primer término, más o menos el doble producto del primero por el segundo, más el cuadrado del segundo término.',
            exampleOrFormula: '(a + b)² = a² + 2ab + b² ; (a - b)² = a² - 2ab + b²',
            tips: 'Nunca digas (a+b)² = a² + b²; es el error algebraico más común en el mundo.',
          },
        ],
      },
    ],
  },
  {
    id: '9-grado',
    name: '9° Grado',
    cycle: 'Tercer Ciclo de Básica',
    description: 'Ecuación cuadrática, Teorema de Pitágoras, tabla periódica, enlaces químicos y Guerra Fría.',
    subjects: [
      {
        id: 'mat-9',
        name: 'Matemáticas',
        icon: '📐',
        color: 'border-blue-200 bg-blue-50/50',
        badgeColor: 'bg-blue-100 text-blue-800',
        summary: 'Fórmula general cuadrática, discriminante, Teorema de Pitágoras y razones trigonométricas básicas.',
        topics: [
          {
            title: 'Fórmula General para Ecuaciones Cuadráticas',
            description: 'Resuelve cualquier ecuación de la forma ax² + bx + c = 0.',
            exampleOrFormula: 'x = [-b ± √(b² - 4ac)] / (2a). Si el discriminante (b²-4ac) > 0 hay dos soluciones reales.',
            tips: 'Identifica con cuidado los signos de a, b y c antes de sustituir en la fórmula.',
          },
          {
            title: 'Teorema de Pitágoras en Triángulos Rectángulos',
            description: 'En todo triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos.',
            exampleOrFormula: 'c² = a² + b² -> c = √(a² + b²)',
            tips: 'La hipotenusa siempre es el lado opuesto al ángulo recto de 90° y es el de mayor longitud.',
          },
        ],
      },
      {
        id: 'cie-9',
        name: 'Ciencias Naturales',
        icon: '⚛️',
        color: 'border-cyan-200 bg-cyan-50/50',
        badgeColor: 'bg-cyan-100 text-cyan-800',
        summary: 'Estructura atómica, electrones de valencia, regla del octeto y enlaces iónicos/covalentes.',
        topics: [
          {
            title: 'Enlaces Químicos: Iónico vs. Covalente',
            description: 'Iónico (transferencia de electrones entre metal y no metal); Covalente (compartición de pares de electrones entre no metales).',
            exampleOrFormula: 'NaCl (Sal de mesa: Iónico); H₂O (Agua: Covalente polar).',
            tips: 'Los átomos buscan completar 8 electrones en su último nivel para ganar estabilidad como los gases nobles.',
          },
        ],
      },
    ],
  },

  // Bachillerato (1° y 2° Año General y Técnico)
  {
    id: '1-bachillerato',
    name: '1° Bachillerato',
    cycle: 'Educación Media',
    description: 'Trigonometría analítica, funciones polinómicas, cinemática, leyes de Newton, química estequiométrica.',
    subjects: [
      {
        id: 'mat-b1',
        name: 'Matemáticas (Precálculo)',
        icon: '📈',
        color: 'border-blue-200 bg-blue-50/50',
        badgeColor: 'bg-blue-100 text-blue-800',
        summary: 'Trigonometría analítica, círculo unitario, Ley de Senos y Cosenos, funciones exponencial y logarítmica.',
        topics: [
          {
            title: 'Ley de Senos y Ley de Cosenos en Triángulos Oblicuángulos',
            description: 'Para resolver triángulos no rectángulos: Ley de Senos relaciona lados con el seno de ángulos opuestos; Ley de Cosenos generaliza Pitágoras.',
            exampleOrFormula: 'Senos: a/sen(A) = b/sen(B) = c/sen(C) ; Cosenos: c² = a² + b² - 2ab·cos(C)',
            tips: 'Usa Cosenos cuando conozcas dos lados y el ángulo comprendido entre ellos (LAL) o los tres lados (LLL).',
          },
        ],
      },
      {
        id: 'cie-b1',
        name: 'Física y Mecánica Clásica',
        icon: '🚀',
        color: 'border-cyan-200 bg-cyan-50/50',
        badgeColor: 'bg-cyan-100 text-cyan-800',
        summary: 'Cinemática MRU/MRUA, vectores, Leyes de Newton y conservación de la energía mecánica.',
        topics: [
          {
            title: 'Las Tres Leyes del Movimiento de Isaac Newton',
            description: '1ª Ley (Inercia), 2ª Ley Fundamental (F = m·a), 3ª Ley (Acción y Reacción de igual magnitud y sentido contrario).',
            exampleOrFormula: 'Fuerza neta (N) = masa (kg) x aceleración (m/s²)',
            tips: 'El peso no es lo mismo que la masa: Peso = masa x gravedad (w = m·g). En la Tierra g ≈ 9.8 m/s².',
          },
        ],
      },
    ],
  },
  {
    id: '2-bachillerato',
    name: '2° Bachillerato (Prueba AVANZO / Admisión UES)',
    cycle: 'Educación Media (Graduación)',
    description: 'Cálculo diferencial elemental, límites, genética molecular, historia contemporánea de El Salvador y literatura universal.',
    subjects: [
      {
        id: 'mat-b2',
        name: 'Matemáticas Avanzadas & Precálculo',
        icon: '∫',
        color: 'border-blue-200 bg-blue-50/50',
        badgeColor: 'bg-blue-100 text-blue-800',
        summary: 'Límites, derivada como razón de cambio instantáneo, geometría analítica (cónicas: parábola, elipse, hipérbola).',
        topics: [
          {
            title: 'Concepto de Límite y Continuidad de una Función',
            description: 'Comportamiento de f(x) a medida que x se aproxima infinitamente a un valor c.',
            exampleOrFormula: 'lim (x->2) (x² - 4)/(x - 2) = lim (x->2) [(x-2)(x+2)]/(x-2) = 2 + 2 = 4',
            tips: 'Si obtienes la indeterminación 0/0, factoriza o racionaliza antes de evaluar.',
          },
          {
            title: 'La Ecuación de la Circunferencia y Cónicas',
            description: 'Lugares geométricos en el plano cartesiano.',
            exampleOrFormula: 'Circunferencia con centro (h,k) y radio r: (x - h)² + (y - k)² = r²',
            tips: 'Identifica si el centro está en el origen (0,0) para usar la forma canónica simplificada x² + y² = r².',
          },
        ],
      },
      {
        id: 'soc-b2',
        name: 'Estudios Sociales y Ciudadanía (AVANZO)',
        icon: '⚖️',
        color: 'border-amber-200 bg-amber-50/50',
        badgeColor: 'bg-amber-100 text-amber-800',
        summary: 'Conflicto armado salvadoreño (1980-1992), Acuerdos de Paz, Constitución de 1983 y globalización.',
        topics: [
          {
            title: 'Los Acuerdos de Paz de Chapultepec (16 de enero de 1992)',
            description: 'Transformaciones institucionales: desmovilización armada, creación de la PNC civil, PDDH, reforma electoral y doctrina militar constitucional.',
            tips: 'Pregunta recurrente en AVANZO y UES: los acuerdos buscaron democratizar el país y subordinar las FF.AA. al poder civil.',
          },
        ],
      },
    ],
  },
];

interface CycleConfig {
  id: CycleId;
  name: string;
  badge: string;
  grades: { id: GradeLevelId; label: string }[];
  color: string;
}

const CYCLES_CONFIG: CycleConfig[] = [
  {
    id: 'primer-ciclo',
    name: 'Primer Ciclo de Básica',
    badge: '1° a 3° Grado',
    color: 'from-blue-600 to-cyan-700',
    grades: [
      { id: '1-grado', label: '1° Grado' },
      { id: '2-grado', label: '2° Grado' },
      { id: '3-grado', label: '3° Grado' },
    ],
  },
  {
    id: 'segundo-ciclo',
    name: 'Segundo Ciclo de Básica',
    badge: '4° a 6° Grado',
    color: 'from-emerald-600 to-teal-700',
    grades: [
      { id: '4-grado', label: '4° Grado' },
      { id: '5-grado', label: '5° Grado' },
      { id: '6-grado', label: '6° Grado' },
    ],
  },
  {
    id: 'tercer-ciclo',
    name: 'Tercer Ciclo de Básica',
    badge: '7° a 9° Grado',
    color: 'from-indigo-600 to-purple-700',
    grades: [
      { id: '7-grado', label: '7° Grado' },
      { id: '8-grado', label: '8° Grado' },
      { id: '9-grado', label: '9° Grado' },
    ],
  },
  {
    id: 'educacion-media',
    name: 'Educación Media (Bachillerato)',
    badge: '1° y 2° Bachillerato',
    color: 'from-amber-600 to-orange-700',
    grades: [
      { id: '1-bachillerato', label: '1° Bachillerato' },
      { id: '2-bachillerato', label: '2° Bachillerato' },
    ],
  },
];

const SUBJECT_CONFIG: { id: SubjectId; name: string; icon: React.FC<{ className?: string }>; emoji: string }[] = [
  { id: 'matematica-esmate', name: 'Matemática (ESMATE)', icon: Calculator, emoji: '🔢' },
  { id: 'lenguaje-eslengua', name: 'Lengua y Literatura (ESLENGUA)', icon: BookOpen, emoji: '📖' },
  { id: 'ciencia-tecnologia', name: 'Ciencia y Tecnología', icon: Atom, emoji: '🔬' },
  { id: 'ciudadania-valores', name: 'Ciudadanía y Valores', icon: HeartHandshake, emoji: '🤝' },
  { id: 'educacion-artistica', name: 'Educación Artística (Artes)', icon: Palette, emoji: '🎨' },
  { id: 'educacion-fisica', name: 'Educación Física', icon: Activity, emoji: '🏃' },
  { id: 'educacion-financiera', name: 'Finanzas y Economía', icon: Landmark, emoji: '🏦' },
];

const DOC_TYPE_FILTERS: { id: MinedResourceDocType | 'ALL'; label: string }[] = [
  { id: 'ALL', label: 'Todos los Documentos' },
  { id: 'Libro de Texto', label: 'Libro de Texto' },
  { id: 'Cuaderno de Ejercicios', label: 'Cuaderno de Ejercicios' },
  { id: 'Guía Metodológica', label: 'Guía Metodológica' },
  { id: 'Programa de Estudio', label: 'Programa de Estudio' },
  { id: 'Cuadernillo', label: 'Cuadernillo' },
  { id: 'Infografía', label: 'Infografía' },
];

function formatFileSize(bytes: number | null): string {
  if (!bytes || bytes <= 0) return 'N/D';
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }
  return `${Math.round(bytes / 1024)} KB`;
}

export interface AcademicReinforcementViewProps {
  initialMode?: 'study' | 'test';
}

export const AcademicReinforcementView: React.FC<AcademicReinforcementViewProps> = ({
  initialMode = 'study',
}) => {
  // Navegación Curricular
  const [selectedCycleId, setSelectedCycleId] = useState<CycleId>('educacion-media');
  const [selectedGradeId, setSelectedGradeId] = useState<GradeLevelId>('2-bachillerato');
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId>('matematica-esmate');
  const [selectedTomo, setSelectedTomo] = useState<0 | 1 | 2>(0); // 0 = todos
  const [expandedUnitId, setExpandedUnitId] = useState<string | null>('mined-mat-2b-u03');
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [revealedAnswers, setRevealedAnswers] = useState<Record<string, boolean>>({});

  // Biblioteca Textual Oficial MINED (Integrada)
  const [selectedDocType, setSelectedDocType] = useState<MinedResourceDocType | 'ALL'>('ALL');
  const [showAllGradeResources, setShowAllGradeResources] = useState<boolean>(false);
  const [showPrimeraInfanciaOnly, setShowPrimeraInfanciaOnly] = useState<boolean>(false);
  const [minedTextIndexMap, setMinedTextIndexMap] = useState<Record<string, MinedTextIndexEntry>>({});
  const [activeReaderResource, setActiveReaderResource] = useState<MinedOfficialResource | null>(null);
  const [readerDoc, setReaderDoc] = useState<MinedTextDocument | null>(null);
  const [readerLoading, setReaderLoading] = useState<boolean>(false);
  const [readerError, setReaderError] = useState<string | null>(null);
  const [readerPage, setReaderPage] = useState<number>(1);
  const [readerPageInput, setReaderPageInput] = useState<string>('1');
  const [readerSearchQuery, setReaderSearchQuery] = useState<string>('');
  const [readerFontSize, setReaderFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const readerPanelRef = useRef<HTMLDivElement | null>(null);
  const readerRequestIdRef = useRef<number>(0);

  useEffect(() => {
    let cancelled = false;
    getMinedTextIndex()
      .then((idx) => {
        if (cancelled) return;
        const map: Record<string, MinedTextIndexEntry> = {};
        for (const item of idx.resources) {
          map[item.id] = item;
        }
        setMinedTextIndexMap(map);
      })
      .catch(() => {
        // En entorno SSR o si aún no se carga el índice, el lector carga bajo demanda al abrir
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleOpenMinedReader = async (resource: MinedOfficialResource) => {
    const requestId = ++readerRequestIdRef.current;
    setActiveReaderResource(resource);
    setReaderLoading(true);
    setReaderError(null);
    setReaderPage(1);
    setReaderPageInput('1');
    setReaderSearchQuery('');

    setTimeout(() => {
      readerPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 60);

    try {
      const doc = await loadMinedTextDocument(resource.id);
      if (readerRequestIdRef.current !== requestId) return;
      setReaderDoc(doc);
    } catch (err) {
      if (readerRequestIdRef.current !== requestId) return;
      setReaderDoc(null);
      setReaderError(
        err instanceof Error
          ? err.message
          : 'No se pudo cargar el contenido textual oficial del MINED.'
      );
    } finally {
      if (readerRequestIdRef.current === requestId) {
        setReaderLoading(false);
      }
    }
  };

  const handleCloseMinedReader = () => {
    readerRequestIdRef.current += 1;
    setActiveReaderResource(null);
    setReaderDoc(null);
    setReaderLoading(false);
    setReaderError(null);
    setReaderSearchQuery('');
  };

  const goToReaderPage = (targetPage: number) => {
    if (!readerDoc || readerDoc.pages.length === 0) return;
    const clamped = Math.max(1, Math.min(targetPage, readerDoc.pages.length));
    setReaderPage(clamped);
    setReaderPageInput(String(clamped));
  };

  const readerSearchMatches = useMemo(() => {
    if (!readerDoc || readerSearchQuery.trim().length < 2) return [];
    return searchInMinedTextDocument(readerDoc, readerSearchQuery);
  }, [readerDoc, readerSearchQuery]);

  const currentReaderPageObj = useMemo(() => {
    if (!readerDoc || readerDoc.pages.length === 0) return null;
    return readerDoc.pages[Math.max(0, Math.min(readerPage - 1, readerDoc.pages.length - 1))] || null;
  }, [readerDoc, readerPage]);

  const currentReaderSectionId = useMemo(() => {
    if (!readerDoc || readerDoc.sections.length === 0) return '';
    const found = readerDoc.sections.find(
      (sec) => readerPage >= sec.startPage && readerPage <= sec.endPage
    );
    return found ? found.id : readerDoc.sections[0].id;
  }, [readerDoc, readerPage]);

  const decreaseReaderFont = () => {
    setReaderFontSize((prev) =>
      prev === 'xl' ? 'lg' : prev === 'lg' ? 'base' : prev === 'base' ? 'sm' : 'sm'
    );
  };

  const increaseReaderFont = () => {
    setReaderFontSize((prev) =>
      prev === 'sm' ? 'base' : prev === 'base' ? 'lg' : prev === 'lg' ? 'xl' : 'xl'
    );
  };

  // Búsqueda en tiempo real
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<CurriculumSearchResult[]>([]);

  // Simulador de 50 Preguntas por Unidad
  const initialSimUnit = useMemo(() => {
    if (initialMode !== 'test') return null;
    const detail = getGradeDetail('2-bachillerato');
    const subj = detail?.subjects.find((s) => s.id === 'matematica-esmate') || detail?.subjects[0];
    return subj?.units[0] || null;
  }, []);

  const [simulatorOpen, setSimulatorOpen] = useState<boolean>(() => initialMode === 'test' && initialSimUnit !== null);
  const [activeSimUnit, setActiveSimUnit] = useState<CurriculumUnit | null>(() => initialSimUnit);
  const [activeSimQuestions, setActiveSimQuestions] = useState<UnitQuestion[]>(() =>
    initialMode === 'test' && initialSimUnit ? getUnitQuestions('2-bachillerato', initialSimUnit.id) : []
  );
  const [simQuestionCount, setSimQuestionCount] = useState<10 | 25 | 50>(50);
  const [simTimerConfig, setSimTimerConfig] = useState<number | null>(null); // null = sin límite, 60s, 90s
  const [simMode, setSimMode] = useState<'tutor' | 'exam'>('tutor');
  const [simAnswers, setSimAnswers] = useState<Record<string, AnswerOptionKey>>({});
  const [simSubmitted, setSimSubmitted] = useState<boolean>(false);
  const [simPage, setSimPage] = useState<number>(1);
  const [simItemsPerPage, setSimItemsPerPage] = useState<number>(10);
  const [simTimeRemaining, setSimTimeRemaining] = useState<number | null>(null);
  const [simFilterErrors, setSimFilterErrors] = useState<'all' | 'errors' | 'correct'>('all');

  // Obtener detalle del grado seleccionado
  const currentGradeDetail = useMemo(() => {
    return getGradeDetail(selectedGradeId) || getGradeDetail('2-bachillerato')!;
  }, [selectedGradeId]);

  // Asignatura actual
  const currentSubject = useMemo(() => {
    return (
      currentGradeDetail.subjects.find((s) => s.id === selectedSubjectId) ||
      currentGradeDetail.subjects[0]
    );
  }, [currentGradeDetail, selectedSubjectId]);

  // Unidades de la materia filtradas por tomo
  const filteredUnits = useMemo(() => {
    if (!currentSubject) return [];
    if (selectedTomo === 0) return currentSubject.units;
    return currentSubject.units.filter((u) => u.tomo === selectedTomo);
  }, [currentSubject, selectedTomo]);

  // Recursos oficiales descargables MINED para el grado y asignatura activos
  const officialResourcesForView = useMemo(() => {
    if (selectedGradeId === '1-grado' && showPrimeraInfanciaOnly) {
      return getGradeOfficialResources('1-grado', 'ALL', selectedDocType).filter(
        (r) => r.isArticulationPrimeraInfancia
      );
    }

    const subjectHasResources =
      getGradeOfficialResources(selectedGradeId, selectedSubjectId, 'ALL').length > 0;
    const effectiveSubject: SubjectId | 'ALL' =
      showAllGradeResources || !subjectHasResources ? 'ALL' : selectedSubjectId;

    return getGradeOfficialResources(selectedGradeId, effectiveSubject, selectedDocType);
  }, [selectedGradeId, selectedSubjectId, selectedDocType, showAllGradeResources, showPrimeraInfanciaOnly]);


  const totalGradeResourcesCount = useMemo(() => {
    return getGradeOfficialResources(selectedGradeId, 'ALL', 'ALL').length;
  }, [selectedGradeId]);

  // Verificar si la materia cuenta con ambos tomos
  const hasMultipleTomos = useMemo(() => {
    if (!currentSubject) return false;
    const hasT1 = currentSubject.units.some((u) => u.tomo === 1);
    const hasT2 = currentSubject.units.some((u) => u.tomo === 2);
    return hasT1 && hasT2;
  }, [currentSubject]);


  // Manejo de búsqueda en tiempo real
  useEffect(() => {
    const q = searchQuery.trim();
    if (q.length >= 2) {
      const results = searchCurriculum(q);
      setSearchResults(results.slice(0, 12));
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Manejo de cambio de grado
  const handleSelectGrade = (gradeId: GradeLevelId) => {
    setSelectedGradeId(gradeId);
    setSelectedTomo(0);
    setActiveLessonId(null);
    setShowPrimeraInfanciaOnly(false);
    setSimulatorOpen(false);
    setSimPage(1);
    setSimTimeRemaining(null);
    const cycle = CYCLES_CONFIG.find((c) => c.grades.some((g) => g.id === gradeId));
    if (cycle) {
      setSelectedCycleId(cycle.id);
    }
    const detail = getGradeDetail(gradeId);
    if (detail && detail.subjects.length > 0) {
      const mathSubj = detail.subjects.find((s) => s.id === 'matematica-esmate') || detail.subjects[0];
      setSelectedSubjectId(mathSubj.id);
      if (mathSubj.units.length > 0) {
        setExpandedUnitId(mathSubj.units[0].id);
      }
    }
  };

  // Manejo de cambio de ciclo
  const handleSelectCycle = (cycleId: CycleId) => {
    setSelectedCycleId(cycleId);
    const cycle = CYCLES_CONFIG.find((c) => c.id === cycleId);
    if (cycle && cycle.grades.length > 0) {
      handleSelectGrade(cycle.grades[0].id);
    }
  };

  // Iniciar simulador para una unidad específica
  const handleOpenSimulator = (unit: CurriculumUnit) => {
    const questions = getUnitQuestions(selectedGradeId, unit.id);
    setActiveSimUnit(unit);
    setActiveSimQuestions(questions);
    setSimAnswers({});
    setSimSubmitted(false);
    setSimPage(1);
    setSimFilterErrors('all');

    if (simTimerConfig !== null) {
      setSimTimeRemaining(simTimerConfig * Math.min(simQuestionCount, questions.length));
    } else {
      setSimTimeRemaining(null);
    }
    setSimulatorOpen(true);
  };

  useEffect(() => {
    if (initialMode === 'test') {
      const targetUnit = filteredUnits[0] || currentSubject?.units[0];
      if (targetUnit && (!simulatorOpen || activeSimUnit?.id !== targetUnit.id)) {
        handleOpenSimulator(targetUnit);
      }
    } else if (initialMode === 'study') {
      setSimulatorOpen(false);
    }
  }, [initialMode]);

  // Temporizador regresivo en simulador
  useEffect(() => {
    if (!simulatorOpen || simSubmitted || simTimeRemaining === null) return;

    if (simTimeRemaining <= 0) {
      setSimSubmitted(true);
      return;
    }

    const timer = setInterval(() => {
      setSimTimeRemaining((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(timer);
          setSimSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [simulatorOpen, simSubmitted, simTimeRemaining]);

  // Reactivos activos en el simulador según cantidad seleccionada (10, 25 o 50)
  const questionsInSimulator = useMemo(() => {
    return activeSimQuestions.slice(0, simQuestionCount);
  }, [activeSimQuestions, simQuestionCount]);

  // Preguntas mostradas según filtro de errores
  const displayedSimQuestions = useMemo(() => {
    if (!simSubmitted || simFilterErrors === 'all') {
      return questionsInSimulator;
    }
    if (simFilterErrors === 'errors') {
      return questionsInSimulator.filter((q) => simAnswers[q.id] !== q.correctAnswer);
    }
    return questionsInSimulator.filter((q) => simAnswers[q.id] === q.correctAnswer);
  }, [questionsInSimulator, simSubmitted, simFilterErrors, simAnswers]);

  // Paginación de reactivos del simulador (bloques de 10)
  const totalSimPages = Math.max(1, Math.ceil(displayedSimQuestions.length / simItemsPerPage));
  const paginatedSimQuestions = useMemo(() => {
    const start = (simPage - 1) * simItemsPerPage;
    return displayedSimQuestions.slice(start, start + simItemsPerPage);
  }, [displayedSimQuestions, simPage, simItemsPerPage]);

  // Estadísticas y Porcentaje de Dominio
  const simStats = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    questionsInSimulator.forEach((q) => {
      const ans = simAnswers[q.id];
      if (!ans) {
        unanswered++;
      } else if (ans === q.correctAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const total = questionsInSimulator.length;
    const mastery = total > 0 ? Math.round((correct / total) * 100) : 0;

    return { correct, incorrect, unanswered, total, mastery };
  }, [questionsInSimulator, simAnswers]);

  // Seleccionar opción en el simulador
  const handleSelectOption = (questionId: string, optionKey: AnswerOptionKey) => {
    if (simSubmitted) return;
    setSimAnswers((prev) => ({
      ...prev,
      [questionId]: optionKey,
    }));
  };

  // Reintentar solo errores (preservando simQuestionCount para sesiones posteriores)
  const handleRetryErrorsOnly = () => {
    const errorQuestions = questionsInSimulator.filter((q) => simAnswers[q.id] !== q.correctAnswer);
    if (errorQuestions.length === 0) return;
    setActiveSimQuestions(errorQuestions);
    setSimAnswers({});
    setSimSubmitted(false);
    setSimPage(1);
    setSimFilterErrors('all');
    if (simTimerConfig !== null) {
      setSimTimeRemaining(simTimerConfig * errorQuestions.length);
    }
  };

  // Formato mm:ss para el cronómetro
  const formatTimer = (seconds: number | null) => {
    if (seconds === null) return '--:--';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="space-y-6">
      {/* =========================================================================
          ENCABEZADO PRINCIPAL (Requerimiento R1: WCAG AAA text-white font-black drop-shadow-sm)
         ========================================================================= */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
            <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
            <span>Refuerzo Curricular Oficial • Educación Básica & Media</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white drop-shadow-sm tracking-tight font-montenegrin">
            Refuerzo Académico (1° a 9° Grado y Bachillerato)
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Plataforma interactiva alineada rigurosamente a los 135 libros de texto del Ministerio de Educación de El Salvador (MINED).
            Explora cada unidad didáctica bajo la metodología oficial <strong className="text-amber-300 font-bold">P-S-C-E-R</strong> (Problema, Solución, Conclusión con fórmulas KaTeX, Ejemplo y Resuelve) y pon a prueba tu dominio con simuladores de 50 preguntas oficiales por unidad.
          </p>

          {/* Estadísticas Rápidas del Corpus Curricular */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 text-center">
              <span className="block text-base sm:text-lg font-black text-amber-400">11 Grados</span>
              <span className="text-[11px] text-slate-300 font-medium">1° Básica a 2° Bach.</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 text-center">
              <span className="block text-base sm:text-lg font-black text-emerald-400">4 Ciclos</span>
              <span className="text-[11px] text-slate-300 font-medium">I, II, III Ciclo y Media</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 text-center">
              <span className="block text-base sm:text-lg font-black text-cyan-400">P-S-C-E-R</span>
              <span className="text-[11px] text-slate-300 font-medium">Metodología ESMATE</span>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/10 text-center">
              <span className="block text-base sm:text-lg font-black text-rose-400">50 Reactivos</span>
              <span className="text-[11px] text-slate-300 font-medium">Por Unidad Evaluada</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PILAR 1: SELECTOR DE CICLO EDUCATIVO Y PÍLDORAS DE GRADO ESCOLAR
         ========================================================================= */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
        <div>
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              1. Selecciona el Ciclo Educativo Oficial de El Salvador:
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {CYCLES_CONFIG.map((cycle) => {
              const isSelected = selectedCycleId === cycle.id;
              return (
                <button
                  key={cycle.id}
                  type="button"
                  onClick={() => handleSelectCycle(cycle.id)}
                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-blue-900 border-blue-950 text-white shadow-md ring-2 ring-blue-500/30'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <span className="block text-xs font-extrabold truncate">{cycle.name}</span>
                  <span className={`text-[11px] font-semibold ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                    {cycle.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Píldoras de Grado del Ciclo Activo */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-slate-600 mr-1">Grado Escolar:</span>
          {CYCLES_CONFIG.find((c) => c.id === selectedCycleId)?.grades.map((grade) => {
            const isSelected = selectedGradeId === grade.id;
            return (
              <button
                key={grade.id}
                type="button"
                onClick={() => handleSelectGrade(grade.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-black shadow-md scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                🎓 {grade.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          PILAR 2: BARRA DE ASIGNATURA, TOMOS Y BUSCADOR EN TIEMPO REAL
         ========================================================================= */}
      <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Pestañas de Asignatura */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {SUBJECT_CONFIG.map((subj) => {
              const isSelected = selectedSubjectId === subj.id;
              const IconComp = subj.icon;
              return (
                <button
                  key={subj.id}
                  type="button"
                  onClick={() => {
                    setSelectedSubjectId(subj.id);
                    setSelectedTomo(0);
                    setActiveLessonId(null);
                    setShowPrimeraInfanciaOnly(false);
                    setSimulatorOpen(false);
                    setSimPage(1);
                    setSimTimeRemaining(null);
                    const detail = getGradeDetail(selectedGradeId);
                    const s = detail?.subjects.find((sub) => sub.id === subj.id);
                    if (s && s.units.length > 0) {
                      setExpandedUnitId(s.units[0].id);
                    }
                  }}
                  className={`px-3.5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-slate-500'}`} />
                  <span>{subj.name}</span>
                </button>
              );
            })}
          </div>

          {/* Buscador Rápido de Temas, Clases y Fórmulas */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar tema, teorema o fórmula (ej. Pitágoras, KaTeX)..."
              className="w-full pl-10 pr-9 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-blue-500 font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Selector de Tomo 1 y Tomo 2 (si aplica) */}
        {hasMultipleTomos && (
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-600">Tomo Oficial MINED:</span>
            <div className="flex items-center gap-1.5">
              {[
                { val: 0, label: 'Todos los Tomos' },
                { val: 1, label: 'Tomo 1' },
                { val: 2, label: 'Tomo 2' },
              ].map((t) => (
                <button
                  key={t.val}
                  type="button"
                  onClick={() => setSelectedTomo(t.val as 0 | 1 | 2)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedTomo === t.val
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Resultados de Búsqueda Rápida */}
        {searchResults.length > 0 && (
          <div className="mt-3 p-4 bg-blue-50/80 rounded-2xl border border-blue-200/90 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-blue-900">
              <span>Resultados Curriculares ({searchResults.length}):</span>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Cerrar resultados
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-1">
              {searchResults.map((res, rIdx) => (
                <button
                  key={rIdx}
                  type="button"
                  onClick={() => {
                    handleSelectGrade(res.gradeId);
                    setSelectedSubjectId(res.subjectId);
                    setExpandedUnitId(res.unitId);
                    if (res.lessonId) setActiveLessonId(res.lessonId);
                    setSearchQuery('');
                  }}
                  className="p-2.5 bg-white rounded-xl border border-blue-100 text-left hover:border-blue-400 hover:shadow-xs transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-1 text-[11px] text-blue-800 font-semibold mb-1">
                    <span>{res.gradeName} • {res.subjectName}</span>
                    <span className="px-1.5 py-0.5 rounded bg-blue-100 text-[10px] uppercase font-mono font-bold">
                      {res.matchType}
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-900 line-clamp-1">{res.title}</h5>
                  <p className="text-[11px] text-slate-600 line-clamp-2 mt-0.5">{res.snippet}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* =========================================================================
          PILAR 2.5: BIBLIOTECA TEXTUAL OFICIAL MINED (INTEGRADA EN LA PÁGINA)
         ========================================================================= */}
      <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-4 min-w-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <Library className="w-4 h-4 text-blue-600 shrink-0" />
              <h3 className="text-sm sm:text-base font-black text-slate-900">
                Biblioteca Textual Oficial MINED (Integrada) — {currentGradeDetail.name}
              </h3>
              <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                {officialResourcesForView.length} de {totalGradeResourcesCount} Materiales Oficiales
              </span>
            </div>
            <p className="text-xs text-slate-600">
              Libros de Texto, Cuadernos de Ejercicios, Guías Metodológicas, Programas de Estudio e Infografías oficiales integrados directamente como texto estructurado para leer dentro de esta página (sin descargar PDFs).{' '}
              <span className="font-semibold text-slate-700">Fuente oficial: MINED (mined.gob.sv).</span>
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {selectedGradeId === '1-grado' && (
              <button
                type="button"
                onClick={() => setShowPrimeraInfanciaOnly((prev) => !prev)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  showPrimeraInfanciaOnly
                    ? 'bg-purple-600 text-white border-purple-700 shadow-2xs'
                    : 'bg-purple-50 text-purple-800 border-purple-200 hover:bg-purple-100'
                }`}
              >
                🌱 Articulación Primera Infancia / Parvularia (19)
              </button>
            )}
            <button
              type="button"
              onClick={() => setShowAllGradeResources((prev) => !prev)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                showAllGradeResources
                  ? 'bg-slate-900 text-white border-slate-950'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              {showAllGradeResources
                ? `Ver solo ${currentSubject.shortName || currentSubject.name}`
                : `Ver todas las asignaturas de ${currentGradeDetail.name} (${totalGradeResourcesCount})`}
            </button>
          </div>
        </div>

        {/* Filtros por Tipo de Documento Oficial */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1 border-t border-slate-100">
          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 mr-1" />
          {DOC_TYPE_FILTERS.map((df) => {
            const active = selectedDocType === df.id;
            return (
              <button
                key={df.id}
                type="button"
                onClick={() => setSelectedDocType(df.id)}
                className={`px-3 py-1 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                  active
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {df.label}
              </button>
            );
          })}
        </div>

        {/* Cuadrícula de Documentos Oficiales MINED */}
        {officialResourcesForView.length === 0 ? (
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between flex-wrap gap-2">
            <span>
              No hay documentos del tipo <strong>{selectedDocType}</strong> exclusivamente para esta vista filtrada.
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedDocType('ALL');
                setShowAllGradeResources(true);
                setShowPrimeraInfanciaOnly(false);
              }}
              className="px-3 py-1 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 cursor-pointer"
            >
              Mostrar todos los documentos de {currentGradeDetail.name}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto pr-1">
            {officialResourcesForView.map((doc) => {
              const isInfografia = doc.docType === 'Infografía';
              const isActiveInReader = activeReaderResource?.id === doc.id;
              const indexMeta = minedTextIndexMap[doc.id];

              return (
                <div
                  key={doc.id}
                  className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between gap-2.5 ${
                    isActiveInReader
                      ? 'border-blue-500 bg-blue-50/50 shadow-xs'
                      : 'border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-300 hover:shadow-xs'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-1.5 flex-wrap">
                      <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-900 font-bold text-[10px]">
                        {doc.docType}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-700 font-mono text-[10px]">
                        {doc.materiaOriginal}
                      </span>
                    </div>
                    <h4 className="text-xs font-extrabold text-slate-900 leading-snug line-clamp-2">
                      {doc.title}
                    </h4>
                    <div className="flex items-center gap-2 flex-wrap text-[10px] text-slate-500 font-mono">
                      <span>🎓 {doc.gradoOriginal}</span>
                      {(indexMeta?.totalPages || doc.pageCount) ? (
                        <span>• {indexMeta?.totalPages || doc.pageCount} págs.</span>
                      ) : null}
                      {indexMeta?.textCoverage === 'partial' && (
                        <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-sans font-semibold">
                          Texto parcial
                        </span>
                      )}
                      {indexMeta?.textCoverage === 'unavailable' && (
                        <span className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-sans font-semibold">
                          No disponible (404)
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between gap-2">
                    <span className="text-[10px] font-medium text-slate-500 truncate">
                      Fuente oficial: MINED
                    </span>
                    <button
                      type="button"
                      onClick={() => handleOpenMinedReader(doc)}
                      className={`px-2.5 py-1.5 rounded-lg font-bold text-[11px] inline-flex items-center gap-1 shrink-0 transition-colors cursor-pointer ${
                        isActiveInReader
                          ? 'bg-slate-900 text-white'
                          : isInfografia
                          ? 'bg-purple-600 hover:bg-purple-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      {isInfografia ? (
                        <>
                          <ImageIcon className="w-3 h-3" />
                          <span>Ver Infografía</span>
                        </>
                      ) : (
                        <>
                          <BookOpen className="w-3 h-3" />
                          <span>Leer Contenido Oficial</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* =====================================================================
            LECTOR TEXTUAL ESTRUCTURADO INLINE (DENTRO DE LA PÁGINA)
           ===================================================================== */}
        {activeReaderResource && (
          <div
            ref={readerPanelRef}
            className="mt-4 rounded-2xl border-2 border-blue-200 bg-slate-50/70 p-3 sm:p-5 space-y-4 min-w-0"
          >
            {/* Cabecera del Lector */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-200">
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wide">
                    {activeReaderResource.docType}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-700 text-[10px] font-mono">
                    {activeReaderResource.materiaOriginal} • {activeReaderResource.gradoOriginal}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    Fuente oficial: MINED
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-black text-slate-900 leading-snug break-words">
                  {activeReaderResource.title}
                </h4>
              </div>

              <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
                {readerDoc && readerDoc.textCoverage !== 'image' && readerDoc.textCoverage !== 'unavailable' && (
                  <div className="inline-flex items-center rounded-lg border border-slate-300 bg-white overflow-hidden">
                    <button
                      type="button"
                      onClick={decreaseReaderFont}
                      aria-label="Reducir tamaño de letra"
                      className="px-2 py-1 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer border-r border-slate-200"
                    >
                      A-
                    </button>
                    <button
                      type="button"
                      onClick={increaseReaderFont}
                      aria-label="Aumentar tamaño de letra"
                      className="px-2 py-1 text-xs font-bold text-slate-700 hover:bg-slate-100 cursor-pointer"
                    >
                      A+
                    </button>
                  </div>
                )}
                <button
                  type="button"
                  onClick={handleCloseMinedReader}
                  className="px-2.5 py-1 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold inline-flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Cerrar</span>
                </button>
              </div>
            </div>

            {/* Estado de Carga */}
            {readerLoading && (
              <div className="py-10 text-center space-y-2">
                <div className="inline-block w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                <p className="text-xs font-semibold text-slate-600">
                  Cargando contenido textual oficial del MINED…
                </p>
              </div>
            )}

            {/* Estado de Error */}
            {!readerLoading && readerError && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                <div>
                  <p className="font-bold">No se pudo abrir el contenido en el lector.</p>
                  <p className="mt-0.5">{readerError}</p>
                </div>
              </div>
            )}

            {/* Contenido Cargado */}
            {!readerLoading && !readerError && readerDoc && (
              <div className="space-y-4 min-w-0">
                {/* Aviso Institucional para cobertura parcial o no disponible */}
                {readerDoc.notice && (
                  <div
                    className={`p-3 rounded-xl border text-xs flex items-start gap-2 ${
                      readerDoc.textCoverage === 'unavailable'
                        ? 'bg-amber-50 border-amber-200 text-amber-900'
                        : readerDoc.textCoverage === 'partial'
                        ? 'bg-blue-50 border-blue-200 text-blue-900'
                        : 'bg-purple-50 border-purple-200 text-purple-900'
                    }`}
                  >
                    <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{readerDoc.notice}</span>
                  </div>
                )}

                {/* Caso Infografía JPEG */}
                {readerDoc.textCoverage === 'image' && readerDoc.mediaUrl && (
                  <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 text-center space-y-2">
                    <img
                      src={readerDoc.mediaUrl}
                      alt={readerDoc.title}
                      className="w-full max-w-3xl mx-auto rounded-xl border border-slate-200 shadow-xs object-contain"
                    />
                    <p className="text-[11px] text-slate-500">
                      Infografía institucional oficial • Fuente oficial: MINED
                    </p>
                  </div>
                )}

                {/* Caso Documento Textual (full o partial) */}
                {(readerDoc.textCoverage === 'full' || readerDoc.textCoverage === 'partial') &&
                  readerDoc.pages.length > 0 && (
                    <div className="space-y-3 min-w-0">
                      {/* Controles de Navegación: Capítulos + Buscador Interno */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 bg-white p-3 rounded-xl border border-slate-200">
                        {/* Selector de capítulos / secciones */}
                        <div className="flex items-center gap-2 min-w-0">
                          <ListOrdered className="w-4 h-4 text-blue-600 shrink-0" />
                          <label htmlFor="mined-reader-section" className="sr-only">
                            Seleccionar capítulo o sección
                          </label>
                          <select
                            id="mined-reader-section"
                            value={currentReaderSectionId}
                            onChange={(e) => {
                              const sec = readerDoc.sections.find((s) => s.id === e.target.value);
                              if (sec) goToReaderPage(sec.startPage);
                            }}
                            className="w-full min-w-0 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            {readerDoc.sections.map((sec) => (
                              <option key={sec.id} value={sec.id}>
                                {sec.title} (Pág. {sec.startPage}–{sec.endPage})
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Buscador interno del documento */}
                        <div className="relative flex items-center min-w-0">
                          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 pointer-events-none" />
                          <input
                            type="text"
                            value={readerSearchQuery}
                            onChange={(e) => setReaderSearchQuery(e.target.value)}
                            placeholder="Buscar dentro de este documento…"
                            className="w-full min-w-0 pl-8 pr-8 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          {readerSearchQuery && (
                            <button
                              type="button"
                              onClick={() => setReaderSearchQuery('')}
                              aria-label="Limpiar búsqueda en documento"
                              className="absolute right-2 text-slate-400 hover:text-slate-600 cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Resultados de búsqueda interna */}
                      {readerSearchQuery.trim().length >= 2 && (
                        <div className="bg-white rounded-xl border border-blue-200 p-3 space-y-2">
                          <div className="text-[11px] font-bold text-blue-900">
                            {readerSearchMatches.length === 0
                              ? `Sin coincidencias para "${readerSearchQuery.trim()}"`
                              : `${readerSearchMatches.length} página(s) con coincidencias:`}
                          </div>
                          {readerSearchMatches.length > 0 && (
                            <div className="max-h-40 overflow-y-auto space-y-1.5 pr-1">
                              {readerSearchMatches.slice(0, 25).map((m) => (
                                <button
                                  key={m.pageNumber}
                                  type="button"
                                  onClick={() => goToReaderPage(m.pageNumber)}
                                  className={`w-full text-left p-2 rounded-lg border text-xs transition-colors cursor-pointer ${
                                    readerPage === m.pageNumber
                                      ? 'bg-blue-50 border-blue-400'
                                      : 'bg-slate-50 border-slate-200 hover:bg-blue-50/50'
                                  }`}
                                >
                                  <div className="flex items-center justify-between gap-2 font-bold text-blue-800 text-[11px]">
                                    <span>Página {m.pageNumber}</span>
                                    <span>{m.matchCount} coincidencia(s)</span>
                                  </div>
                                  <p className="text-[11px] text-slate-600 line-clamp-2 mt-0.5">
                                    {m.snippet}
                                  </p>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Barra de Paginación Superior */}
                      <div className="flex flex-wrap items-center justify-between gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            disabled={readerPage <= 1}
                            onClick={() => goToReaderPage(readerPage - 1)}
                            className="px-2.5 py-1 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 disabled:opacity-40 text-xs font-bold inline-flex items-center gap-1 cursor-pointer disabled:cursor-not-allowed"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                            <span>Anterior</span>
                          </button>
                          <button
                            type="button"
                            disabled={readerPage >= readerDoc.pages.length}
                            onClick={() => goToReaderPage(readerPage + 1)}
                            className="px-2.5 py-1 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 disabled:opacity-40 text-xs font-bold inline-flex items-center gap-1 cursor-pointer disabled:cursor-not-allowed"
                          >
                            <span>Siguiente</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            const parsed = parseInt(readerPageInput, 10);
                            if (!Number.isNaN(parsed)) {
                              goToReaderPage(parsed);
                            }
                          }}
                          className="flex items-center gap-1.5 text-xs text-slate-600"
                        >
                          <span>Página</span>
                          <input
                            type="number"
                            min={1}
                            max={readerDoc.pages.length}
                            value={readerPageInput}
                            onChange={(e) => setReaderPageInput(e.target.value)}
                            aria-label="Número de página"
                            className="w-14 px-1.5 py-0.5 text-center font-mono font-bold border border-slate-300 rounded-md bg-slate-50"
                          />
                          <span className="font-mono">de {readerDoc.pages.length}</span>
                          <button
                            type="submit"
                            className="px-2 py-0.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] cursor-pointer"
                          >
                            Ir
                          </button>
                        </form>
                      </div>

                      {/* Cuerpo de Texto de la Página Actual */}
                      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-2xs min-h-[220px]">
                        {currentReaderPageObj && currentReaderPageObj.text.trim().length >= 20 ? (
                          <div
                            className={`space-y-3 text-slate-800 leading-relaxed break-words ${
                              readerFontSize === 'sm'
                                ? 'text-xs sm:text-sm'
                                : readerFontSize === 'lg'
                                ? 'text-base sm:text-lg'
                                : readerFontSize === 'xl'
                                ? 'text-lg sm:text-xl'
                                : 'text-sm sm:text-base'
                            }`}
                          >
                            {currentReaderPageObj.text.split(/\n{2,}/).map((para, pIdx) => (
                              <p key={pIdx}>{para}</p>
                            ))}
                          </div>
                        ) : (
                          <div className="py-8 text-center space-y-2 text-xs text-slate-500">
                            <FileText className="w-6 h-6 mx-auto text-slate-400" />
                            <p className="font-semibold text-slate-700">
                              Página {readerPage} sin texto digital seleccionable
                            </p>
                            <p>
                              Esta página corresponde a una portada, lámina visual o ilustración gráfica dentro del material oficial del MINED.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* =========================================================================
          PILAR 3 & 4: ACORDEÓN DE UNIDADES Y VISOR DE LECCIONES P-S-C-E-R
         ========================================================================= */}
      <div className="space-y-4">

        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="text-xl">📚</span>
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              Unidades Oficiales: {currentGradeDetail.name} • {currentSubject.name}
            </h3>
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
              {filteredUnits.length} Unidades
            </span>
          </div>
        </div>

        {filteredUnits.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center text-slate-500">
            No se encontraron unidades para los filtros seleccionados.
          </div>
        ) : (
          filteredUnits.map((unit) => {
            const isExpanded = expandedUnitId === unit.id;
            const hasLessons = unit.lessons && unit.lessons.length > 0;

            return (
              <div
                key={unit.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden transition-all"
              >
                {/* Cabecera de la Unidad */}
                <div className="p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100">
                  <div className="flex items-start gap-3.5">
                    <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-800 text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                      {unit.unitNumber}
                    </span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                          Unidad {unit.unitNumber}
                        </span>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                          Tomo {unit.tomo}
                        </span>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 flex items-center gap-1">
                          <Zap className="w-3 h-3 text-emerald-600" />
                          50 Reactivos Oficiales
                        </span>
                      </div>
                      <h4 className="font-extrabold text-base sm:text-lg text-slate-900 leading-snug">
                        {unit.title}
                      </h4>
                      <p className="text-xs text-slate-600 max-w-3xl leading-relaxed">
                        {unit.summary}
                      </p>
                    </div>
                  </div>

                  {/* Acciones de la Unidad */}
                  <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                    <button
                      type="button"
                      onClick={() => handleOpenSimulator(unit)}
                      className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-xs shadow-md hover:shadow-lg flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-300" />
                      <span>Iniciar Simulador (50 Preguntas)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setExpandedUnitId(isExpanded ? null : unit.id)}
                      className="p-2.5 rounded-2xl border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                      title={isExpanded ? 'Colapsar unidad' : 'Desplegar unidad'}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Contenido Expandido: Competencias y Visor de Clases P-S-C-E-R */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 bg-slate-50/50 space-y-5">
                    {/* Indicadores y Competencias Oficiales */}
                    {unit.competencies && unit.competencies.length > 0 && (
                      <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-2">
                        <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-blue-600" />
                          Competencias Oficiales del Programa MINED:
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                          {unit.competencies.map((comp, cIdx) => (
                            <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{comp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Lecciones con Metodología ESMATE P-S-C-E-R */}
                    {hasLessons ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                            Lecciones y Clases Oficiales (Metodología P-S-C-E-R):
                          </h5>
                          <span className="text-[11px] text-slate-500 font-medium">
                            {unit.lessons.length} Clases Desarrolladas
                          </span>
                        </div>

                        <div className="space-y-3">
                          {unit.lessons.map((lesson) => {
                            const isLessonActive =
                              activeLessonId === lesson.id ||
                              (unit.lessons.length === 1 && activeLessonId !== `collapsed:${lesson.id}`);

                            return (
                              <div
                                key={lesson.id}
                                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs"
                              >
                                <button
                                  type="button"
                                  onClick={() =>
                                    setActiveLessonId(isLessonActive ? `collapsed:${lesson.id}` : lesson.id)
                                  }
                                  className="w-full p-4 flex items-center justify-between gap-3 text-left hover:bg-slate-50 transition-colors cursor-pointer"
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-800 font-mono font-bold text-xs">
                                      Clase {lesson.lessonNumber}
                                    </span>
                                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                                      {lesson.title}
                                    </span>
                                  </div>
                                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                                    {isLessonActive ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                                  </div>
                                </button>

                                {isLessonActive && (
                                  <div className="p-4 sm:p-6 border-t border-slate-100 space-y-4 text-xs">
                                    {/* P: Problema Inicial */}
                                    <div className="bg-indigo-50/70 border border-indigo-200 rounded-2xl p-4 space-y-1.5">
                                      <div className="flex items-center gap-2 text-indigo-900 font-bold">
                                        <HelpCircle className="w-4 h-4 text-indigo-600" />
                                        <span className="uppercase tracking-wider text-[11px]">P • Problema Inicial</span>
                                      </div>
                                      <p className="text-slate-800 leading-relaxed font-medium">
                                        {lesson.problema}
                                      </p>
                                    </div>

                                    {/* S: Solución Analítica */}
                                    <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 space-y-1.5">
                                      <div className="flex items-center gap-2 text-emerald-900 font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        <span className="uppercase tracking-wider text-[11px]">S • Solución Paso a Paso</span>
                                      </div>
                                      <p className="text-slate-800 leading-relaxed font-medium whitespace-pre-line">
                                        {lesson.solucion}
                                      </p>
                                    </div>

                                    {/* C: Conclusión Teórica y KaTeX */}
                                    <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-4 space-y-2">
                                      <div className="flex items-center gap-2 text-blue-900 font-bold">
                                        <Award className="w-4 h-4 text-blue-600" />
                                        <span className="uppercase tracking-wider text-[11px]">C • Conclusión & Fórmulas Teóricas</span>
                                      </div>
                                      <div className="text-slate-900 font-medium leading-relaxed bg-white p-3 rounded-xl border border-blue-100">
                                        <KaTeXRenderer content={lesson.conclusion} />
                                      </div>
                                    </div>

                                    {/* E: Ejemplos Guiados Concretos y Distintos (Mínimo 5 por Lección) */}
                                    {(lesson.examples && lesson.examples.length > 0) ? (
                                      <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 space-y-3">
                                        <div className="flex items-center justify-between flex-wrap gap-2">
                                          <div className="flex items-center gap-2 text-amber-900 font-bold">
                                            <Lightbulb className="w-4 h-4 text-amber-600" />
                                            <span className="uppercase tracking-wider text-[11px]">
                                              E • {lesson.examples.length} Ejemplos Concretos y Distintos Desarrollados Paso a Paso
                                            </span>
                                          </div>
                                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                                            Aplicación Práctica MINED
                                          </span>
                                        </div>
                                        <div className="grid grid-cols-1 gap-2.5">
                                          {lesson.examples.map((exItem, exIdx) => (
                                            <div
                                              key={exIdx}
                                              className="text-slate-900 font-medium leading-relaxed bg-white p-3.5 rounded-xl border border-amber-100 shadow-2xs"
                                            >
                                              <KaTeXRenderer content={exItem} />
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    ) : lesson.ejemplo ? (
                                      <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 space-y-2">
                                        <div className="flex items-center gap-2 text-amber-900 font-bold">
                                          <Lightbulb className="w-4 h-4 text-amber-600" />
                                          <span className="uppercase tracking-wider text-[11px]">E • Ejemplo Guiado de Aplicación</span>
                                        </div>
                                        <div className="text-slate-900 font-medium leading-relaxed bg-white p-3 rounded-xl border border-amber-100">
                                          <KaTeXRenderer content={lesson.ejemplo} />
                                        </div>
                                      </div>
                                    ) : null}

                                    {/* R: Resuelve (Práctica Formativa) */}
                                    {lesson.resuelve && lesson.resuelve.length > 0 && (
                                      <div className="bg-slate-100/80 border border-slate-200 rounded-2xl p-4 space-y-3">
                                        <div className="flex items-center gap-2 text-slate-800 font-bold">
                                          <Sparkles className="w-4 h-4 text-purple-600" />
                                          <span className="uppercase tracking-wider text-[11px]">R • Resuelve (Práctica con Pistas Didácticas)</span>
                                        </div>
                                        <div className="space-y-2.5">
                                          {lesson.resuelve.map((item, rIdx) => {
                                            const itemKey = `${lesson.id}-r${rIdx}`;
                                            const showHint = revealedHints[itemKey];
                                            const showAns = revealedAnswers[itemKey];

                                            return (
                                              <div key={rIdx} className="bg-white p-3 rounded-xl border border-slate-200 space-y-2">
                                                <div className="text-slate-900 font-medium leading-relaxed">
                                                  <KaTeXRenderer content={item.exercise} />
                                                </div>

                                                <div className="flex items-center gap-2 pt-1 flex-wrap">
                                                  {item.hint && (
                                                    <button
                                                      type="button"
                                                      onClick={() => setRevealedHints((prev) => ({ ...prev, [itemKey]: !showHint }))}
                                                      className="text-[11px] font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-2.5 py-1 rounded-lg border border-amber-200 cursor-pointer"
                                                    >
                                                      💡 {showHint ? 'Ocultar Pista' : 'Ver Pista Didáctica'}
                                                    </button>
                                                  )}

                                                  {item.answer && (
                                                    <button
                                                      type="button"
                                                      onClick={() => setRevealedAnswers((prev) => ({ ...prev, [itemKey]: !showAns }))}
                                                      className="text-[11px] font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-lg border border-emerald-200 cursor-pointer"
                                                    >
                                                      ✓ {showAns ? 'Ocultar Solución' : 'Ver Solución'}
                                                    </button>
                                                  )}
                                                </div>

                                                {showHint && item.hint && (
                                                  <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-[11px]">
                                                    <strong className="block mb-0.5">Pista Didáctica:</strong>
                                                    <span>{item.hint}</span>
                                                  </div>
                                                )}

                                                {showAns && item.answer && (
                                                  <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-950 text-[11px]">
                                                    <strong className="block mb-0.5">Solución:</strong>
                                                    <KaTeXRenderer content={item.answer} />
                                                  </div>
                                                )}
                                              </div>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center space-y-2">
                        <p className="text-xs text-slate-600">
                          Esta unidad curricular sintetiza los contenidos teóricos del programa de estudio oficial del MINED.
                        </p>
                        <button
                          type="button"
                          onClick={() => handleOpenSimulator(unit)}
                          className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors cursor-pointer inline-flex items-center gap-1.5"
                        >
                          <Zap className="w-3.5 h-3.5 text-amber-300" />
                          <span>Practicar con los 50 Reactivos Oficiales de la Unidad</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* =========================================================================
          PILAR 5: MODAL INMERSIVO DEL SIMULADOR DE 50 PREGUNTAS POR UNIDAD
         ========================================================================= */}
      {simulatorOpen && activeSimUnit && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150">
            {/* Cabecera del Simulador */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-5 sm:p-6 text-white flex items-start justify-between gap-4 shrink-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-bold border border-blue-500/30">
                    Simulador Oficial MINED
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300 text-[10px] font-mono">
                    {currentGradeDetail.name} • {currentSubject.name} • Tomo {activeSimUnit.tomo}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  Unidad {activeSimUnit.unitNumber}: {activeSimUnit.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSimulatorOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                title="Cerrar simulador"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Barra de Configuración del Simulador */}
            <div className="bg-slate-50 border-b border-slate-200 p-4 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              {/* Selector de Modo: Tutor vs Examen */}
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-600">Modo:</span>
                <button
                  type="button"
                  disabled={simSubmitted}
                  onClick={() => setSimMode('tutor')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                    simMode === 'tutor'
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  💡 Modo Tutor (Feedback Inmediato)
                </button>
                <button
                  type="button"
                  disabled={simSubmitted}
                  onClick={() => setSimMode('exam')}
                  className={`px-3 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                    simMode === 'exam'
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  📝 Modo Examen Formal
                </button>
              </div>

              {/* Selector de Cantidad de Preguntas (10, 25, 50) */}
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-slate-600">Cantidad:</span>
                {[10, 25, 50].map((count) => (
                  <button
                    key={count}
                    type="button"
                    disabled={simSubmitted}
                    onClick={() => {
                      setSimQuestionCount(count as 10 | 25 | 50);
                      setSimPage(1);
                    }}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      simQuestionCount === count
                        ? 'bg-amber-400 text-slate-950 shadow-2xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>

              {/* Temporizador */}
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span className="font-bold text-slate-600">Tiempo:</span>
                {[
                  { label: 'Sin límite', sec: null },
                  { label: '60s', sec: 60 },
                  { label: '90s', sec: 90 },
                ].map((t) => (
                  <button
                    key={t.label}
                    type="button"
                    disabled={simSubmitted}
                    onClick={() => {
                      setSimTimerConfig(t.sec);
                      setSimTimeRemaining(t.sec !== null ? t.sec * simQuestionCount : null);
                    }}
                    className={`px-2 py-1 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer ${
                      simTimerConfig === t.sec
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}

                {simTimeRemaining !== null && !simSubmitted && (
                  <span className="ml-1 px-2.5 py-1 rounded-lg bg-rose-100 text-rose-800 font-mono font-black animate-pulse">
                    ⏱️ {formatTimer(simTimeRemaining)}
                  </span>
                )}
              </div>
            </div>

            {/* Cuerpo del Simulador con Desplazamiento */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
              {/* Tarjeta de Calificación y Reporte Final si ya fue enviado */}
              {simSubmitted && (
                <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-6 text-white space-y-4 shadow-lg border border-slate-700">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 font-black text-xl flex items-center justify-center shrink-0 shadow-md">
                        {simStats.mastery}%
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-white">
                          Porcentaje de Dominio MINED: {simStats.mastery}%
                        </h4>
                        <p className="text-xs text-slate-300">
                          {simStats.mastery >= 85
                            ? '¡Dominio Sobresaliente! Has alcanzado plenamente los indicadores de logro de la unidad.'
                            : simStats.mastery >= 70
                            ? 'Dominio Aceptable. Revisa el cuaderno de errores para afianzar los conceptos clave.'
                            : 'Refuerzo Curricular Requerido. Se recomienda repasar las clases teóricas de la unidad.'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      <div className="text-center px-3 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                        <span className="block text-emerald-400 font-black text-sm">{simStats.correct}</span>
                        <span className="text-[10px] text-slate-300">Correctas</span>
                      </div>
                      <div className="text-center px-3 py-1.5 rounded-xl bg-rose-500/20 border border-rose-500/30">
                        <span className="block text-rose-400 font-black text-sm">{simStats.incorrect}</span>
                        <span className="text-[10px] text-slate-300">Incorrectas</span>
                      </div>
                      <div className="text-center px-3 py-1.5 rounded-xl bg-slate-500/20 border border-slate-500/30">
                        <span className="block text-slate-300 font-black text-sm">{simStats.unanswered}</span>
                        <span className="text-[10px] text-slate-300">Sin Responder</span>
                      </div>
                    </div>
                  </div>

                  {/* Acciones de Revisión de Errores */}
                  <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-300 font-bold">Cuaderno de Revisión:</span>
                      <button
                        type="button"
                        onClick={() => {
                          setSimFilterErrors('all');
                          setSimPage(1);
                        }}
                        className={`px-3 py-1 rounded-lg font-bold cursor-pointer ${
                          simFilterErrors === 'all' ? 'bg-white text-slate-950 font-black' : 'bg-white/10 text-slate-300 hover:bg-white/20'
                        }`}
                      >
                        Todas ({questionsInSimulator.length})
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSimFilterErrors('errors');
                          setSimPage(1);
                        }}
                        className={`px-3 py-1 rounded-lg font-bold cursor-pointer ${
                          simFilterErrors === 'errors' ? 'bg-rose-500 text-white font-black' : 'bg-white/10 text-rose-300 hover:bg-white/20'
                        }`}
                      >
                        Solo Errores ({simStats.incorrect})
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setSimFilterErrors('correct');
                          setSimPage(1);
                        }}
                        className={`px-3 py-1 rounded-lg font-bold cursor-pointer ${
                          simFilterErrors === 'correct' ? 'bg-emerald-500 text-white font-black' : 'bg-white/10 text-emerald-300 hover:bg-white/20'
                        }`}
                      >
                        Correctas ({simStats.correct})
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      {simStats.incorrect > 0 && (
                        <button
                          type="button"
                          onClick={handleRetryErrorsOnly}
                          className="px-3 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Reintentar Solo Errores</span>
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => handleOpenSimulator(activeSimUnit)}
                        className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-colors cursor-pointer"
                      >
                        Reiniciar Completo
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Lista Paginada de Reactivos */}
              <div className="space-y-4">
                {paginatedSimQuestions.map((q, pIdx) => {
                  const globalIdx = (simPage - 1) * simItemsPerPage + pIdx + 1;
                  const selectedKey = simAnswers[q.id];
                  const isAnswered = selectedKey !== undefined;
                  const isCorrect = selectedKey === q.correctAnswer;
                  const showExplanation = simMode === 'tutor' ? isAnswered : simSubmitted;

                  return (
                    <div
                      key={q.id}
                      className="bg-white rounded-2xl border border-slate-200 p-5 space-y-4 shadow-2xs"
                    >
                      {/* Enunciado */}
                      <div className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-xl bg-blue-100 text-blue-900 font-bold font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {globalIdx}
                        </span>
                        <div className="space-y-1 flex-1">
                          <div className="text-xs text-slate-500 font-mono flex items-center justify-between">
                            <span>Reactivo {q.id}</span>
                            {simSubmitted && (
                              <span
                                className={`font-bold px-2 py-0.5 rounded ${
                                  isCorrect
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : 'bg-rose-100 text-rose-800'
                                }`}
                              >
                                {isCorrect ? '✓ Correcto' : '✗ Incorrecto'}
                              </span>
                            )}
                          </div>
                          <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                            <KaTeXRenderer content={q.statement} />
                          </div>
                        </div>
                      </div>

                      {/* 4 Opciones A, B, C, D */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                        {(['A', 'B', 'C', 'D'] as AnswerOptionKey[]).map((key, oIdx) => {
                          const optionText = q.options[oIdx];
                          const isOptionSelected = selectedKey === key;
                          const isOptionCorrect = q.correctAnswer === key;

                          let btnStyle = 'border-slate-200 bg-slate-50/70 hover:bg-slate-100 text-slate-800';

                          if (simMode === 'tutor' && isAnswered) {
                            if (isOptionCorrect) {
                              btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-500';
                            } else if (isOptionSelected && !isOptionCorrect) {
                              btnStyle = 'border-rose-500 bg-rose-50 text-rose-950 font-bold ring-1 ring-rose-500';
                            } else {
                              btnStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                            }
                          } else if (simSubmitted) {
                            if (isOptionCorrect) {
                              btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-1 ring-emerald-500';
                            } else if (isOptionSelected && !isOptionCorrect) {
                              btnStyle = 'border-rose-500 bg-rose-50 text-rose-950 font-bold ring-1 ring-rose-500';
                            } else {
                              btnStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                            }
                          } else if (isOptionSelected) {
                            btnStyle = 'border-blue-600 bg-blue-50 text-blue-950 font-bold ring-2 ring-blue-500/20';
                          }

                          return (
                            <button
                              key={key}
                              type="button"
                              disabled={simSubmitted}
                              onClick={() => handleSelectOption(q.id, key)}
                              className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all cursor-pointer ${btnStyle}`}
                            >
                              <span className="w-5 h-5 rounded-md bg-white border border-slate-300 font-mono font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5 text-slate-700 shadow-2xs">
                                {key}
                              </span>
                              <div className="text-xs leading-snug flex-1 font-medium">
                                <KaTeXRenderer content={optionText} />
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Feedback y Justificación Pedagógica con Referencia al Libro MINED */}
                      {showExplanation && (
                        <div className="p-3.5 bg-blue-50/80 rounded-xl border border-blue-200/90 space-y-2 text-xs">
                          <div className="flex items-center gap-2">
                            {isCorrect ? (
                              <span className="font-bold text-emerald-800 flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                ¡Respuesta Correcta! (Clave {q.correctAnswer})
                              </span>
                            ) : (
                              <span className="font-bold text-rose-800 flex items-center gap-1">
                                <XCircle className="w-4 h-4 text-rose-600" />
                                Respuesta Incorrecta. La opción correcta es ({q.correctAnswer})
                              </span>
                            )}
                          </div>

                          <div className="text-slate-800 leading-relaxed font-medium bg-white p-2.5 rounded-lg border border-blue-100">
                            <strong className="block text-[11px] text-blue-900 uppercase tracking-wider mb-1">
                              Explicación Pedagógica Oficial:
                            </strong>
                            <KaTeXRenderer content={q.explanation} />
                          </div>

                          {q.distractorRationales && (
                            <div className="bg-white/90 p-2.5 rounded-lg border border-slate-200 space-y-1">
                              <strong className="block text-[10px] text-slate-600 uppercase tracking-wider">
                                Análisis de Opciones y Distractores:
                              </strong>
                              <div className="grid grid-cols-1 gap-1 text-[11px]">
                                {(['A', 'B', 'C', 'D'] as AnswerOptionKey[]).map((rKey) => {
                                  const rText = q.distractorRationales?.[rKey];
                                  if (!rText) return null;
                                  const isRight = rKey === q.correctAnswer;
                                  return (
                                    <div
                                      key={rKey}
                                      className={`px-2 py-1 rounded ${
                                        isRight
                                          ? 'bg-emerald-50 text-emerald-900 font-semibold'
                                          : 'bg-slate-50 text-slate-700'
                                      }`}
                                    >
                                      <span className="font-mono font-bold mr-1">[{rKey}]</span>
                                      <KaTeXRenderer content={rText} />
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}

                          <div className="text-[11px] text-slate-600 font-mono flex items-center gap-1">
                            <BookOpen className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                            <span><strong>Fundamento:</strong> {q.officialBookRef}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

              </div>
            </div>

            {/* Pie del Simulador: Paginación y Botón de Enviar */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
              <ModulePaginationBar
                currentPage={simPage}
                totalPages={totalSimPages}
                totalItems={displayedSimQuestions.length}
                itemsPerPage={simItemsPerPage}
                onPageChange={(p) => setSimPage(p)}
                onItemsPerPageChange={(s) => {
                  setSimItemsPerPage(s);
                  setSimPage(1);
                }}
                itemLabel="preguntas"
                className="w-full sm:w-auto shadow-none border-0 p-0 bg-transparent"
              />

              {!simSubmitted ? (
                <button
                  type="button"
                  onClick={() => setSimSubmitted(true)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs shadow-md transition-all cursor-pointer flex items-center gap-2 shrink-0"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-300" />
                  <span>Calificar y Ver Resultados ({Object.keys(simAnswers).length}/{questionsInSimulator.length})</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setSimulatorOpen(false)}
                  className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs transition-all cursor-pointer shrink-0"
                >
                  Volver al Temario
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AcademicReinforcementView;


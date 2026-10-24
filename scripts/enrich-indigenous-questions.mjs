import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Banco Comunicativo para Náhuat Pipil (A1)
const NAHUAT_A1_COMMUNICATIVE = [
  {
    topic: "Saludos y Fórmulas de Cortesía",
    statement: "¿Cómo se dice 'Buenos días' en Náhuat Pipil de El Salvador?",
    options: [
      { key: "A", text: "Yejyek tunal (o Yek tunal)" },
      { key: "B", text: "Yejyek tiutak" },
      { key: "C", text: "Yejyek taywa" },
      { key: "D", text: "Ken tinemi" }
    ],
    correctAnswer: "A",
    explanation: "'Yejyek tunal' (o 'Yek tunal') es la fórmula tradicional náhuat para desear un buen día o saludar por la mañana (literalmente 'buen sol' o 'buen día').",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Saludos y Fórmulas de Cortesía",
    statement: "¿Cómo se dice 'Buenas tardes' en Náhuat Pipil de El Salvador?",
    options: [
      { key: "A", text: "Yejyek tunal" },
      { key: "B", text: "Yejyek tiutak (o Yek tiutak)" },
      { key: "C", text: "Yejyek taywa" },
      { key: "D", text: "Timonamikitze" }
    ],
    correctAnswer: "B",
    explanation: "'Yejyek tiutak' combina 'yejyek' (bueno/hermoso) con 'tiutak' (la tarde), siendo el saludo de rigor tras el mediodía.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Saludos y Fórmulas de Cortesía",
    statement: "¿Cómo se dice 'Buenas noches' en Náhuat Pipil de El Salvador?",
    options: [
      { key: "A", text: "Yejyek tunal" },
      { key: "B", text: "Yejyek tiutak" },
      { key: "C", text: "Yejyek taywa (o Yek taywa)" },
      { key: "D", text: "Nikan nian" }
    ],
    correctAnswer: "C",
    explanation: "'Yejyek taywa' es el saludo utilizado al caer la noche y durante la oscuridad ('taywa').",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Saludos y Fórmulas de Cortesía",
    statement: "¿Cómo se formula la pregunta '¿Cómo estás?' o '¿Cómo te va?' en Náhuat Pipil?",
    options: [
      { key: "A", text: "¿Ken mutukay?" },
      { key: "B", text: "¿Ken tinemi?" },
      { key: "C", text: "¿Kan tiyawi?" },
      { key: "D", text: "¿Tay tikchiwa?" }
    ],
    correctAnswer: "B",
    explanation: "'¿Ken tinemi?' proviene del interrogativo 'ken' (cómo) y el verbo flexionado 'ti-nemi' (tú estás / tú vives).",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Saludos y Fórmulas de Cortesía",
    statement: "¿Cómo se responde 'Estoy bien' a un saludo en Náhuat Pipil?",
    options: [
      { key: "A", text: "Ninemi yek" },
      { key: "B", text: "Inte yek" },
      { key: "C", text: "Naja ni-yawi" },
      { key: "D", text: "Tejemet tinemit" }
    ],
    correctAnswer: "A",
    explanation: "'Ninemi yek' se compone del prefijo de sujeto de primera persona 'ni-', la raíz verbal 'nemi' (vivir/estar) y el adverbio 'yek' (bien).",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Saludos y Fórmulas de Cortesía",
    statement: "Si un hablante de Náhuat te dice 'Tlaxtlawi' o 'Tlazohkamati', ¿qué te está expresando?",
    options: [
      { key: "A", text: "Muchas gracias" },
      { key: "B", text: "Adiós para siempre" },
      { key: "C", text: "Perdóneme usted" },
      { key: "D", text: "Buen provecho" }
    ],
    correctAnswer: "A",
    explanation: "'Tlaxtlawi' y 'Tlazohkamati' son expresiones tradicionales de agradecimiento y cortesía en el Náhuat Pipil.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Saludos y Fórmulas de Cortesía",
    statement: "¿Cómo se pregunta '¿Cómo te llamas?' a otra persona en Náhuat Pipil?",
    options: [
      { key: "A", text: "¿Ken nutukay?" },
      { key: "B", text: "¿Ken itukay?" },
      { key: "C", text: "¿Ken mutukay?" },
      { key: "D", text: "¿Kan mutukay?" }
    ],
    correctAnswer: "C",
    explanation: "'¿Ken mutukay?' combina el interrogativo 'ken' (cómo) con el sustantivo poseído de segunda persona 'mu-tukay' (tu nombre).",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Saludos y Fórmulas de Cortesía",
    statement: "Para responder a una presentación diciendo 'Mi nombre es María', ¿cuál es la estructura correcta?",
    options: [
      { key: "A", text: "Nutukay María" },
      { key: "B", text: "Mutukay María" },
      { key: "C", text: "Itukay María" },
      { key: "D", text: "Tutukay María" }
    ],
    correctAnswer: "A",
    explanation: "'Nu-tukay' lleva el prefijo posesivo de primera persona singular 'nu-' (mi), dando 'Mi nombre es...'.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Saludos y Fórmulas de Cortesía",
    statement: "¿Cómo se dice 'Hasta luego / Nos veremos' al despedirse en Náhuat Pipil?",
    options: [
      { key: "A", text: "Timonamikitze (o Timu-itasket musta)" },
      { key: "B", text: "Yejyek tunal" },
      { key: "C", text: "Yejyek taywa" },
      { key: "D", text: "Ken tinemi" }
    ],
    correctAnswer: "A",
    explanation: "'Timonamikitze' es la despedida comunitaria tradicional que augura un nuevo encuentro ('nos volveremos a encontrar').",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Comunidades y Territorio Náhuat",
    statement: "¿En qué municipios del occidente de El Salvador se concentra la comunidad histórica de hablantes de Náhuat Pipil?",
    options: [
      { key: "A", text: "Santo Domingo de Guzmán (Witzapan), Cuisnahuat, Nahuizalco e Izalco" },
      { key: "B", text: "Guatajiagua, Chilanga y Perquín" },
      { key: "C", text: "La Unión, Conchagua e Intipucá" },
      { key: "D", text: "San Francisco Gotera y Jocoro" }
    ],
    correctAnswer: "A",
    explanation: "El departamento de Sonsonate (particularmente Witzapan, Cuisnahuat, Nahuizalco e Izalco) y Ahuachapán resguardan la herencia viva de los nawataketzani.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Pronombres Personales Absolutos en Náhuat",
    statement: "¿Cuál es el pronombre personal para 'Yo' en Náhuat Pipil?",
    options: [
      { key: "A", text: "Naja (o Naha)" },
      { key: "B", text: "Taja" },
      { key: "C", text: "Yaja" },
      { key: "D", text: "Tejemet" }
    ],
    correctAnswer: "A",
    explanation: "'Naja' (o 'Naha') es el pronombre independiente de primera persona singular en Náhuat.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Pronombres Personales Absolutos en Náhuat",
    statement: "¿Cuál es el pronombre personal para 'Tú / Vos' en Náhuat Pipil?",
    options: [
      { key: "A", text: "Naja" },
      { key: "B", text: "Taja" },
      { key: "C", text: "Yaja" },
      { key: "D", text: "Anmejemet" }
    ],
    correctAnswer: "B",
    explanation: "'Taja' es el pronombre de segunda persona singular ('tú' o 'vos' en el habla salvadoreña).",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Pronombres Personales Absolutos en Náhuat",
    statement: "¿Cuál es el pronombre de tercera persona singular ('Él / Ella') en Náhuat Pipil?",
    options: [
      { key: "A", text: "Naja" },
      { key: "B", text: "Taja" },
      { key: "C", text: "Yaja" },
      { key: "D", text: "Yejemet" }
    ],
    correctAnswer: "C",
    explanation: "'Yaja' se utiliza indistintamente para 'él' o 'ella', dado que el náhuat no posee distinción de género gramatical.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Pronombres Personales Absolutos en Náhuat",
    statement: "¿Cuál es el pronombre personal para 'Nosotros / Nosotras' en Náhuat Pipil?",
    options: [
      { key: "A", text: "Tejemet" },
      { key: "B", text: "Anmejemet" },
      { key: "C", text: "Yejemet" },
      { key: "D", text: "Naja" }
    ],
    correctAnswer: "A",
    explanation: "'Tejemet' es el pronombre plural inclusivo/exclusivo para la primera persona del plural ('nosotros').",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Pronombres Personales Absolutos en Náhuat",
    statement: "¿Cuál es el pronombre personal para 'Ustedes' en Náhuat Pipil?",
    options: [
      { key: "A", text: "Tejemet" },
      { key: "B", text: "Anmejemet" },
      { key: "C", text: "Yejemet" },
      { key: "D", text: "Taja" }
    ],
    correctAnswer: "B",
    explanation: "'Anmejemet' representa la segunda persona del plural ('ustedes').",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Pronombres Personales Absolutos en Náhuat",
    statement: "¿Cuál es el pronombre personal para 'Ellos / Ellas' en Náhuat Pipil?",
    options: [
      { key: "A", text: "Tejemet" },
      { key: "B", text: "Anmejemet" },
      { key: "C", text: "Yejemet" },
      { key: "D", text: "Yaja" }
    ],
    correctAnswer: "C",
    explanation: "'Yejemet' corresponde a la tercera persona del plural ('ellos' o 'ellas').",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Prefijos de Sujeto en el Presente Verbal",
    statement: "¿Cuál es el prefijo verbal obligatorio de primera persona singular ('yo') en tiempo presente?",
    options: [
      { key: "A", text: "ni- (ejemplo: ni-taketza = yo hablo; ni-yawi = yo voy)" },
      { key: "B", text: "ti- (tú / nosotros)" },
      { key: "C", text: "shi- (imperativo)" },
      { key: "D", text: "ki- (objeto transitivo)" }
    ],
    correctAnswer: "A",
    explanation: "En náhuat, el prefijo 'ni-' se antepone a la raíz verbal para indicar que el sujeto es 'yo' (primera persona singular).",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Prefijos de Sujeto en el Presente Verbal",
    statement: "¿Cuál es el prefijo verbal de segunda persona singular ('tú / vos') en tiempo presente?",
    options: [
      { key: "A", text: "ni-" },
      { key: "B", text: "ti- (ejemplo: ti-taketza = tú hablas; ti-kwa = tú comes)" },
      { key: "C", text: "shi-" },
      { key: "D", text: "an-" }
    ],
    correctAnswer: "B",
    explanation: "'ti-' marca la segunda persona singular (tú/vos) en los verbos del náhuat.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Prefijos de Sujeto en el Presente Verbal",
    statement: "¿Qué prefijo verbal se utiliza para dar una orden o mandato (imperativo) en Náhuat?",
    options: [
      { key: "A", text: "ni-" },
      { key: "B", text: "ti-" },
      { key: "C", text: "shi- (ejemplo: shi-takwa = ¡come!; shi-kaki = ¡escucha!)" },
      { key: "D", text: "mu-" }
    ],
    correctAnswer: "C",
    explanation: "'shi-' es el prefijo imperativo y exhortativo en Náhuat Pipil para ordenar o pedir una acción.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Prefijos de Sujeto en el Presente Verbal",
    statement: "En la frase en náhuat 'Naja ni-yawi ka kal', ¿cuál es su significado en español salvadoreño?",
    options: [
      { key: "A", text: "Yo voy a la casa" },
      { key: "B", text: "Tú vienes de la casa" },
      { key: "C", text: "Ella duerme en la casa" },
      { key: "D", text: "Nosotros salimos del río" }
    ],
    correctAnswer: "A",
    explanation: "'Naja' (yo) + 'ni-yawi' (yo voy) + 'ka kal' (a la casa) se traduce exactamente como 'Yo voy a la casa'.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "La Posesión Nominal: Prefijos Posesivos",
    statement: "¿Cuál es el prefijo posesivo de primera persona singular ('mi') en Náhuat Pipil?",
    options: [
      { key: "A", text: "nu- (ejemplo: nu-kal = mi casa; nu-chucho = mi perro)" },
      { key: "B", text: "mu- (tu)" },
      { key: "C", text: "i- (su)" },
      { key: "D", text: "tu- (nuestro)" }
    ],
    correctAnswer: "A",
    explanation: "'nu-' se antepone a la raíz nominal para expresar pertenencia de primera persona ('mi').",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "La Posesión Nominal: Prefijos Posesivos",
    statement: "¿Qué ocurre con el sufijo absolutivo (-t, -ti) de palabras como 'kalat' (casa) al poseerse (ejemplo: 'nu-kal')?",
    options: [
      { key: "A", text: "Se duplica al final para dar énfasis" },
      { key: "B", text: "Se suprime por completo al añadirse el prefijo posesivo (kalat -> nu-kal)" },
      { key: "C", text: "Permanece sin cambios obligatorios" },
      { key: "D", text: "Se convierte en terminación plural" }
    ],
    correctAnswer: "B",
    explanation: "Una regla clave de la morfología náhuat es que el sufijo absolutivo cae al incorporarse un prefijo de posesión.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Números y Cuantificadores Ancestrales",
    statement: "¿Cómo se dice el número uno (1) en Náhuat Pipil?",
    options: [
      { key: "A", text: "Se" },
      { key: "B", text: "Ume" },
      { key: "C", text: "Yey" },
      { key: "D", text: "Nawi" }
    ],
    correctAnswer: "A",
    explanation: "'Se' representa el número uno (1) en el sistema vigesimal tradicional del Náhuat.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Números y Cuantificadores Ancestrales",
    statement: "¿Cómo se dice el número dos (2) en Náhuat Pipil?",
    options: [
      { key: "A", text: "Se" },
      { key: "B", text: "Ume" },
      { key: "C", text: "Yey" },
      { key: "D", text: "Makwil" }
    ],
    correctAnswer: "B",
    explanation: "'Ume' representa el número dos (2) en Náhuat.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Números y Cuantificadores Ancestrales",
    statement: "¿Cómo se dice el número tres (3) en Náhuat Pipil?",
    options: [
      { key: "A", text: "Se" },
      { key: "B", text: "Ume" },
      { key: "C", text: "Yey" },
      { key: "D", text: "Nawi" }
    ],
    correctAnswer: "C",
    explanation: "'Yey' representa el número tres (3) en Náhuat.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Números y Cuantificadores Ancestrales",
    statement: "¿Cómo se dice el número cuatro (4) en Náhuat Pipil?",
    options: [
      { key: "A", text: "Nawi" },
      { key: "B", text: "Makwil" },
      { key: "C", text: "Chikwasen" },
      { key: "D", text: "Ume" }
    ],
    correctAnswer: "A",
    explanation: "'Nawi' representa el número cuatro (4), vinculado a los cuatro rumbos cósmicos ancestrales.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Números y Cuantificadores Ancestrales",
    statement: "¿Cómo se dice el número cinco (5) en Náhuat Pipil?",
    options: [
      { key: "A", text: "Nawi" },
      { key: "B", text: "Makwil" },
      { key: "C", text: "Majtakti" },
      { key: "D", text: "Chikume" }
    ],
    correctAnswer: "B",
    explanation: "'Makwil' representa el número cinco (5), asociado morfológicamente a los cinco dedos de la mano.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Vocabulario de la Naturaleza y la Vida Cotidiana",
    statement: "¿Qué significa la palabra 'At' en Náhuat Pipil (presente en topónimos como Ateos o Atiquizaya)?",
    options: [
      { key: "A", text: "Agua" },
      { key: "B", text: "Fuego" },
      { key: "C", text: "Tierra" },
      { key: "D", text: "Viento" }
    ],
    correctAnswer: "A",
    explanation: "'At' significa agua, un elemento sagrado de la cosmovisión y raíz de innumerables topónimos cuscatlecos.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Vocabulario de la Naturaleza y la Vida Cotidiana",
    statement: "¿Qué significa la palabra 'Tunal' en Náhuat Pipil?",
    options: [
      { key: "A", text: "Sol / Día / Destino y calor de vida" },
      { key: "B", text: "Río crecido" },
      { key: "C", text: "Flor silvestre" },
      { key: "D", text: "Pájaro de monte" }
    ],
    correctAnswer: "A",
    explanation: "'Tunal' significa el sol y el día, y simboliza en la cosmovisión pipil la energía y destino que alumbra la existencia.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  },
  {
    topic: "Vocabulario de la Naturaleza y la Vida Cotidiana",
    statement: "¿Qué significa la palabra 'Petat' en Náhuat Pipil (de donde proviene el salvadoreñismo 'petate')?",
    options: [
      { key: "A", text: "Estera tradicional tejida de tule o palma" },
      { key: "B", text: "Comal de barro cocido" },
      { key: "C", text: "Huacal de morro" },
      { key: "D", text: "Cántaro para agua" }
    ],
    correctAnswer: "A",
    explanation: "'Petat' es la estera tejida para descansar, incorporada al español de El Salvador como 'petate'.",
    referenceSite: "IRIN / MINED Cuna Náhuat de Witzapan"
  }
];

// 2. Banco Comunicativo para Lenca Potón (A1)
const LENCA_A1_COMMUNICATIVE = [
  {
    topic: "Saludos y Cortesía en Lenca Potón",
    statement: "¿Cuál es la fórmula tradicional de saludo de 'Buenos días' en Lenca Potón de El Salvador?",
    options: [
      { key: "A", text: "Kualkat tun" },
      { key: "B", text: "Kualkat ti" },
      { key: "C", text: "Kualkat tekit" },
      { key: "D", text: "Timu-itasket musta" }
    ],
    correctAnswer: "A",
    explanation: "'Kualkat tun' es el saludo matutino tradicional en la variante Lenca Potón de Guatajiagua y Chilanga.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Saludos y Cortesía en Lenca Potón",
    statement: "¿Cuál es la fórmula tradicional para decir 'Buenas tardes / noches' en Lenca Potón?",
    options: [
      { key: "A", text: "Kualkat tun" },
      { key: "B", text: "Kualkat ti" },
      { key: "C", text: "Kualkat apas" },
      { key: "D", text: "Ne takat" }
    ],
    correctAnswer: "B",
    explanation: "'Kualkat ti' es la fórmula empleada al declinar el sol y durante la noche en las comunidades lencas de Morazán.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Saludos y Cortesía en Lenca Potón",
    statement: "¿Qué expresión se utiliza en Lenca Potón para felicitar una labor o desear '¡Buen trabajo!'?",
    options: [
      { key: "A", text: "Kualkat tekit!" },
      { key: "B", text: "Kualkat tun" },
      { key: "C", text: "Kualkat ti" },
      { key: "D", text: "U li am" }
    ],
    correctAnswer: "A",
    explanation: "'Kualkat tekit!' reconoce el esfuerzo comunitario en la milpa, el barro o el hogar.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Saludos y Cortesía en Lenca Potón",
    statement: "¿Cómo se dice 'Hasta luego / Nos vemos mañana' en Lenca Potón?",
    options: [
      { key: "A", text: "Timu-itasket musta" },
      { key: "B", text: "Kualkat tun" },
      { key: "C", text: "Kualkat ti" },
      { key: "D", text: "Eta pe" }
    ],
    correctAnswer: "A",
    explanation: "'Timu-itasket musta' es la despedida tradicional comunitaria en Guatajiagua.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Territorio y Comunidad Lenca",
    statement: "¿En qué departamento de El Salvador se asientan las históricas comunidades Lencas de Guatajiagua, Chilanga y Sensembra?",
    options: [
      { key: "A", text: "Morazán" },
      { key: "B", text: "Sonsonate" },
      { key: "C", text: "Ahuachapán" },
      { key: "D", text: "Santa Ana" }
    ],
    correctAnswer: "A",
    explanation: "El departamento de Morazán constituye el corazón territorial y cultural de la herencia Lenca Potón salvadoreña.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Patrimonio Cultural Lenca Potón",
    statement: "¿Qué célebre arte ancestral distingue internacionalmente a la comunidad Lenca de Guatajiagua en Morazán?",
    options: [
      { key: "A", text: "La alfarería de barro negro teñida con tinte natural de semilla de zacate" },
      { key: "B", text: "El tallado de mármol blanco" },
      { key: "C", text: "La orfebrería de plata fundida" },
      { key: "D", text: "El soplado de vidrio veneciano" }
    ],
    correctAnswer: "A",
    explanation: "La alfarería negra de Guatajiagua, moldeada a mano y cocida con zacate de carbón, es un patrimonio cultural único de El Salvador.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Sintaxis y Estructura Oracional Lenca",
    statement: "¿Cuál es el orden sintáctico canónico fundamental de una oración transitiva en Lenca Potón?",
    options: [
      { key: "A", text: "Sujeto - Objeto - Verbo (SOV, el verbo va al final de la oración)" },
      { key: "B", text: "Verbo - Sujeto - Objeto (VSO)" },
      { key: "C", text: "Verbo - Objeto - Sujeto (VOS)" },
      { key: "D", text: "Objeto - Verbo - Sujeto (OVS)" }
    ],
    correctAnswer: "A",
    explanation: "El Lenca Potón es una lengua de orden canónico SOV: el predicado verbal se sitúa sistemáticamente al final.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Sintaxis y Estructura Oracional Lenca",
    statement: "En la oración lenca 'U li am', siguiendo el orden canónico SOV, ¿cuál es su traducción al español?",
    options: [
      { key: "A", text: "Yo bebo agua (literalmente: Yo agua bebo)" },
      { key: "B", text: "Tú compras leña en el mercado" },
      { key: "C", text: "El río corre veloz por la colina" },
      { key: "D", text: "Nosotros sembramos maíz" }
    ],
    correctAnswer: "A",
    explanation: "'U' (yo) + 'li' (agua) + 'am' (beber/comer) ejemplifica la sintaxis Sujeto + Objeto + Verbo del Lenca.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Posposiciones Espaciales en Lenca",
    statement: "¿Cómo se expresan las relaciones espaciales y de lugar en Lenca Potón?",
    options: [
      { key: "A", text: "Mediante posposiciones que se colocan DESPUÉS del sustantivo (ejemplo: masun-pan = sobre la casa)" },
      { key: "B", text: "Únicamente con preposiciones del español" },
      { key: "C", text: "Con artículos indefinidos invariables" },
      { key: "D", text: "No se pueden expresar relaciones de lugar" }
    ],
    correctAnswer: "A",
    explanation: "El Lenca Potón utiliza posposiciones sufijadas al nombre en lugar de preposiciones antepuestas.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Números Ancestrales en Lenca Potón",
    statement: "¿Cómo se dice el número uno (1) en Lenca Potón?",
    options: [
      { key: "A", text: "Eta" },
      { key: "B", text: "Pe" },
      { key: "C", text: "Lagwa" },
      { key: "D", text: "Eria" }
    ],
    correctAnswer: "A",
    explanation: "'Eta' es el número uno (1) en el sistema de conteo Lenca Potón.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Números Ancestrales en Lenca Potón",
    statement: "¿Cómo se dice el número dos (2) en Lenca Potón?",
    options: [
      { key: "A", text: "Eta" },
      { key: "B", text: "Pe" },
      { key: "C", text: "Lagwa" },
      { key: "D", text: "Saye" }
    ],
    correctAnswer: "B",
    explanation: "'Pe' es el número dos (2) en Lenca Potón.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Números Ancestrales en Lenca Potón",
    statement: "¿Cómo se dice el número tres (3) en Lenca Potón?",
    options: [
      { key: "A", text: "Eta" },
      { key: "B", text: "Pe" },
      { key: "C", text: "Lagwa" },
      { key: "D", text: "Eria" }
    ],
    correctAnswer: "C",
    explanation: "'Lagwa' es el número tres (3) en Lenca Potón.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Números Ancestrales en Lenca Potón",
    statement: "¿Cómo se dice el número cuatro (4) en Lenca Potón?",
    options: [
      { key: "A", text: "Eria" },
      { key: "B", text: "Saye" },
      { key: "C", text: "Eta" },
      { key: "D", text: "Pe" }
    ],
    correctAnswer: "A",
    explanation: "'Eria' es el número cuatro (4) en Lenca Potón.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Números Ancestrales en Lenca Potón",
    statement: "¿Cómo se dice el número cinco (5) en Lenca Potón?",
    options: [
      { key: "A", text: "Saye" },
      { key: "B", text: "Eria" },
      { key: "C", text: "Lagwa" },
      { key: "D", text: "Eta" }
    ],
    correctAnswer: "A",
    explanation: "'Saye' es el número cinco (5) en Lenca Potón.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Léxico Cotidiano en Lenca Potón",
    statement: "¿Qué significa la palabra 'Masun' en Lenca Potón?",
    options: [
      { key: "A", text: "Casa / Hogar / Choza" },
      { key: "B", text: "Río grande" },
      { key: "C", text: "Árbol frutal" },
      { key: "D", text: "Camino real" }
    ],
    correctAnswer: "A",
    explanation: "'Masun' es la vivienda o casa en el léxico Lenca Potón.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Léxico Cotidiano en Lenca Potón",
    statement: "¿Qué significa la palabra 'Li' en Lenca Potón?",
    options: [
      { key: "A", text: "Agua / Río" },
      { key: "B", text: "Fuego" },
      { key: "C", text: "Tierra" },
      { key: "D", text: "Piedra" }
    ],
    correctAnswer: "A",
    explanation: "'Li' designa al agua y a los ríos en la lengua Lenca Potón.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Léxico Cotidiano en Lenca Potón",
    statement: "¿Qué significa la palabra 'Tisin' en Lenca Potón?",
    options: [
      { key: "A", text: "Fuego / Fogón de alfarería" },
      { key: "B", text: "Viento del norte" },
      { key: "C", text: "Semilla de frijol" },
      { key: "D", text: "Cántaro vacío" }
    ],
    correctAnswer: "A",
    explanation: "'Tisin' es el fuego o fogón, esencial para la quema y cocción de la alfarería en Guatajiagua.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Léxico Cotidiano en Lenca Potón",
    statement: "¿Qué significa la palabra 'Seran' en Lenca Potón?",
    options: [
      { key: "A", text: "Negro (como el color del barro cocido tradicional)" },
      { key: "B", text: "Blanco como la cal" },
      { key: "C", text: "Rojo encendido" },
      { key: "D", text: "Verde de montaña" }
    ],
    correctAnswer: "A",
    explanation: "'Seran' alude al color negro característico de las piezas de barro de Guatajiagua.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Léxico Cotidiano en Lenca Potón",
    statement: "¿Qué significa la palabra 'Apas' en Lenca Potón?",
    options: [
      { key: "A", text: "Vasija, olla o tinaja de barro" },
      { key: "B", text: "Petate de tule" },
      { key: "C", text: "Cuchillo de piedra" },
      { key: "D", text: "Mazorca de maíz" }
    ],
    correctAnswer: "A",
    explanation: "'Apas' es la vasija o cántaro de barro tradicional moldeado por las artesanas lencas.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  },
  {
    topic: "Posesión en Lenca Potón",
    statement: "¿Cuáles son los prefijos posesivos directos en la lengua Lenca Potón?",
    options: [
      { key: "A", text: "u- (mi), man- (tu), ina- (su)" },
      { key: "B", text: "nu-, mu-, i-" },
      { key: "C", text: "my-, your-, his-" },
      { key: "D", text: "yo-, tú-, él-" }
    ],
    correctAnswer: "A",
    explanation: "Los prefijos posesivos 'u-', 'man-' e 'ina-' se adhieren directamente al sustantivo poseído sin artículos adicionales.",
    referenceSite: "Comunidad Indígena de Guatajiagua / UES / Consuelo Roque"
  }
];

// 3. Banco Comunicativo para Kakawira (A1)
const KAKAWIRA_A1_COMMUNICATIVE = [
  {
    topic: "Saludos y Cortesía en Kakawira",
    statement: "¿Cuál es el saludo tradicional de 'Buen día' en el idioma Kakawira de Cacaopera, Morazán?",
    options: [
      { key: "A", text: "Wali tunal" },
      { key: "B", text: "Wali taywa" },
      { key: "C", text: "Wali tekit" },
      { key: "D", text: "Yam li am" }
    ],
    correctAnswer: "A",
    explanation: "'Wali tunal' es el saludo tradicional matutino en la lengua Kakawira de Cacaopera.",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  },
  {
    topic: "Saludos y Cortesía en Kakawira",
    statement: "¿Cuál es el saludo tradicional de 'Buena noche' en el idioma Kakawira?",
    options: [
      { key: "A", text: "Wali tunal" },
      { key: "B", text: "Wali taywa" },
      { key: "C", text: "Wali asun" },
      { key: "D", text: "Timu-itasket" }
    ],
    correctAnswer: "B",
    explanation: "'Wali taywa' se pronuncia al caer la noche en Cacaopera.",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  },
  {
    topic: "Saludos y Cortesía en Kakawira",
    statement: "¿Qué saludo de reverencia se utiliza para dirigirse con respeto a un mayor o padre de familia ('Buenos días señor/padre')?",
    options: [
      { key: "A", text: "Wali tunal nu-yau" },
      { key: "B", text: "Wali tekit" },
      { key: "C", text: "Ai pe lagwa" },
      { key: "D", text: "Yam asun" }
    ],
    correctAnswer: "A",
    explanation: "'Wali tunal nu-yau' denota profundo respeto filial y comunitario hacia los ancianos de Cacaopera.",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  },
  {
    topic: "Filiación Lingüística del Kakawira",
    statement: "¿A qué familia lingüística pertenece el idioma Kakawira (Cacaopera de Morazán, El Salvador)?",
    options: [
      { key: "A", text: "A la familia Misumalpa (emparentada con el Matagalpa y Sumo de Centroamérica)" },
      { key: "B", text: "A la familia Maya-Quiché de Guatemala" },
      { key: "C", text: "A la familia Uto-Azteca de México" },
      { key: "D", text: "A la familia Indoeuropea" }
    ],
    correctAnswer: "A",
    explanation: "El Kakawira de Cacaopera es el único representante en El Salvador del tronco lingüístico Misumalpa.",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  },
  {
    topic: "Territorio y Comunidad Kakawira",
    statement: "¿En qué municipio y departamento de El Salvador tiene su asiento histórico el pueblo originario Kakawira?",
    options: [
      { key: "A", text: "Cacaopera, departamento de Morazán" },
      { key: "B", text: "Izalco, departamento de Sonsonate" },
      { key: "C", text: "Panchimalco, departamento de San Salvador" },
      { key: "D", text: "Tacuba, departamento de Ahuachapán" }
    ],
    correctAnswer: "A",
    explanation: "Cacaopera, bañado por el río Torola en Morazán, es la cuna y bastión cultural del pueblo Kakawira.",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  },
  {
    topic: "Danzas Ceremoniales Kakawiras",
    statement: "¿Cuál es la danza ceremonial más emblemática del pueblo Kakawira de Cacaopera?",
    options: [
      { key: "A", text: "La Danza de los Emplumados" },
      { key: "B", text: "El Torito Pinto de San Miguel" },
      { key: "C", text: "Los Historiantes de San Antonio Abad" },
      { key: "D", text: "Los Moros y Cristianos de Panchimalco" }
    ],
    correctAnswer: "A",
    explanation: "La Danza de los Emplumados de Cacaopera es un rito ancestral preservado de generación en generación con profunda solemnidad.",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  },
  {
    topic: "Indumentaria Sagrada de Cacaopera",
    statement: "¿Qué elemento distintivo corona el tocado de los danzantes emplumados de Cacaopera?",
    options: [
      { key: "A", text: "Plumas de guacamaya (wirika), espejos relucientes y cintas multicolores" },
      { key: "B", text: "Sombreros de palma tejidos" },
      { key: "C", text: "Cascos de metal labrado" },
      { key: "D", text: "Coronas de flores de izote" }
    ],
    correctAnswer: "A",
    explanation: "El tocado ceremonial con plumas de guacamaya y espejuelos refleja la cosmovisión y el tributo a las aves sagradas.",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  },
  {
    topic: "Sintaxis en Idioma Kakawira",
    statement: "¿Cuál es el orden sintáctico canónico en el idioma Kakawira?",
    options: [
      { key: "A", text: "Sujeto - Objeto - Verbo (SOV)" },
      { key: "B", text: "Verbo - Sujeto - Objeto (VSO)" },
      { key: "C", text: "Verbo - Objeto - Sujeto (VOS)" },
      { key: "D", text: "Objeto - Verbo - Sujeto (OVS)" }
    ],
    correctAnswer: "A",
    explanation: "Al igual que el Lenca, el Kakawira sitúa el verbo al final de la oración (Sujeto - Objeto - Verbo).",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  },
  {
    topic: "Posesión en Idioma Kakawira",
    statement: "¿Cuáles son los prefijos posesivos personales en el idioma Kakawira?",
    options: [
      { key: "A", text: "yam- (mi), man- (tu), an- (su)" },
      { key: "B", text: "nu-, mu-, i-" },
      { key: "C", text: "u-, man-, ina-" },
      { key: "D", text: "naja, taja, yaja" }
    ],
    correctAnswer: "A",
    explanation: "En Kakawira, 'yam-' indica primera persona singular poseedora (ej. yam-asun = mi casa).",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  },
  {
    topic: "Léxico Cotidiano en Kakawira",
    statement: "¿Qué significa la palabra 'Asun' en idioma Kakawira?",
    options: [
      { key: "A", text: "Casa / Hogar" },
      { key: "B", text: "Río Torola" },
      { key: "C", text: "Fuego" },
      { key: "D", text: "Montaña" }
    ],
    correctAnswer: "A",
    explanation: "'Asun' designa la casa o el hogar familiar en Kakawira.",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  },
  {
    topic: "Léxico Cotidiano en Kakawira",
    statement: "¿Qué significa el término sagrado 'Wirika' en Cacaopera?",
    options: [
      { key: "A", text: "Guacamaya / Plumas ceremoniales" },
      { key: "B", text: "Piedra de moler" },
      { key: "C", text: "Semilla de frijol" },
      { key: "D", text: "Tambor de cuero" }
    ],
    correctAnswer: "A",
    explanation: "'Wirika' evoca la guacamaya, cuyas plumas ornamentan los tocados sagrados de la danza.",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  },
  {
    topic: "Léxico Cotidiano en Kakawira",
    statement: "¿Qué significa la palabra 'Wapa' en idioma Kakawira?",
    options: [
      { key: "A", text: "Fuego / Llama" },
      { key: "B", text: "Agua de manantial" },
      { key: "C", text: "Cielo estrellado" },
      { key: "D", text: "Sombra fresca" }
    ],
    correctAnswer: "A",
    explanation: "'Wapa' representa el fuego y el calor vivo en el léxico Kakawira.",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  },
  {
    topic: "Números Ancestrales en Kakawira",
    statement: "¿Cómo se dice el número uno (1) en Kakawira?",
    options: [
      { key: "A", text: "Ai" },
      { key: "B", text: "Pe" },
      { key: "C", text: "Lagwa" },
      { key: "D", text: "Tatka" }
    ],
    correctAnswer: "A",
    explanation: "'Ai' es el numeral uno (1) en Kakawira.",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  },
  {
    topic: "Números Ancestrales en Kakawira",
    statement: "¿Cómo se dice el número dos (2) en Kakawira?",
    options: [
      { key: "A", text: "Pe" },
      { key: "B", text: "Ai" },
      { key: "C", text: "Lagwa" },
      { key: "D", text: "Saye" }
    ],
    correctAnswer: "A",
    explanation: "'Pe' es el numeral dos (2) en Kakawira.",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  },
  {
    topic: "Museo y Memoria en Cacaopera",
    statement: "¿Cómo se llama el célebre museo comunitario de Cacaopera que preserva la memoria y vestigios Kakawiras?",
    options: [
      { key: "A", text: "Museo Comunitario Winakirika" },
      { key: "B", text: "Museo David J. Guzmán" },
      { key: "C", text: "Museo de la Palabra y la Imagen" },
      { key: "D", text: "Museo Forma" }
    ],
    correctAnswer: "A",
    explanation: "'Winakirika' ('nuestra gente' o 'nuestros ancestros') es el museo comunitario de Cacaopera que custodia los tocados y memoria de la etnia.",
    referenceSite: "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
  }
];

function updateBankFile(filePath, varName, prefix, communicativeList) {
  console.log(`Procesando ${filePath}...`);
  let content = fs.readFileSync(filePath, 'utf-8');

  // Buscamos las preguntas del banco
  // Cada pregunta tiene formato JSON dentro del archivo TS
  communicativeList.forEach((comm, idx) => {
    const qNum = idx + 1;
    const qId = `${prefix}_q_a1_${String(qNum).padStart(3, '0')}`;

    // Buscamos el objeto por su id
    const idRegex = new RegExp(`{\\s*"id":\\s*"${qId}"[\\s\\S]*?"referenceSite":\\s*"[^"]*"\\s*}`, 'm');
    const match = content.match(idRegex);

    if (match) {
      const updatedObj = {
        id: qId,
        number: qNum,
        level: "A1",
        variant: "ALL",
        topic: comm.topic,
        statement: comm.statement,
        options: comm.options,
        correctAnswer: comm.correctAnswer,
        explanation: comm.explanation,
        referenceSite: comm.referenceSite
      };

      const replacementJson = JSON.stringify(updatedObj, null, 2)
        .split('\n')
        .map((line, lIdx) => (lIdx === 0 ? '  ' + line : '  ' + line))
        .join('\n');

      content = content.replace(match[0], replacementJson);
      console.log(`  ✓ Actualizado ${qId}: ${comm.statement.substring(0, 50)}...`);
    } else {
      console.warn(`  ⚠️ No se encontró coincidencia para ${qId}`);
    }
  });

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✓ Guardado ${filePath}`);
}

// Ejecutar actualizaciones
updateBankFile(
  path.join(rootDir, 'src/data/languages/nahuatQuestions.ts'),
  'RAW_NAHUAT_BANK',
  'nahuat',
  NAHUAT_A1_COMMUNICATIVE
);

updateBankFile(
  path.join(rootDir, 'src/data/languages/lencaQuestions.ts'),
  'RAW_LENCA_BANK',
  'lenca',
  LENCA_A1_COMMUNICATIVE
);

updateBankFile(
  path.join(rootDir, 'src/data/languages/kakawiraQuestions.ts'),
  'RAW_KAKAWIRA_BANK',
  'kakawira',
  KAKAWIRA_A1_COMMUNICATIVE
);

console.log('¡Enriquecimiento completado exitosamente!');

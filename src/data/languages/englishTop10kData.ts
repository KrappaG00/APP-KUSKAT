/**
 * APP-KUSKAT • MÓDULO DE LAS 10,000 PALABRAS MÁS USADAS EN EL IDIOMA INGLÉS
 *
 * Catálogo completo de frecuencia lingüística estructurado por bandas de frecuencia:
 * - Top 100: Palabras funcionales y de mayor densidad comunicativa (A1)
 * - Top 500: Vocabulario esencial de supervivencia y cotidianeidad (A1)
 * - Top 1,000: Vocabulario básico consolidado (A1-A2)
 * - Top 2,500: Umbral de comunicación autónoma y fluidez general (B1)
 * - Top 5,000: Nivel intermedio alto y vocabulario profesional (B2)
 * - Top 10,000: Léxico avanzado, académico y literario (C1-C2)
 */

export interface TopWord {
  r: number;        // Ranking de frecuencia (1 a 10000)
  w: string;        // Palabra en inglés
  pos: string;      // Categoría gramatical (Sustantivo, Verbo, etc.)
  es: string;       // Traducción al español
  lvl: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  ex: string;       // Oración de ejemplo en inglés
  exEs: string;     // Traducción de la oración de ejemplo
}

export type FrequencyBand = 'all' | '100' | '500' | '1000' | '2500' | '5000' | '10000';

export interface FrequencyBandInfo {
  id: FrequencyBand;
  label: string;
  description: string;
  maxRank: number;
  badgeColor: string;
}

export const FREQUENCY_BANDS: FrequencyBandInfo[] = [
  { id: 'all', label: 'Todas (1 - 10,000)', description: 'Catálogo exhaustivo de las 10,000 palabras más frecuentes', maxRank: 10000, badgeColor: 'bg-slate-100 text-slate-800 border-slate-300' },
  { id: '100', label: 'Top 100', description: 'Palabras funcionales de máxima densidad comunicativa (A1)', maxRank: 100, badgeColor: 'bg-blue-100 text-blue-800 border-blue-300' },
  { id: '500', label: 'Top 500', description: 'Vocabulario esencial cotidiano de nivel elemental (A1)', maxRank: 500, badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  { id: '1000', label: 'Top 1,000', description: 'Vocabulario básico indispensable para comunicación general (A1-A2)', maxRank: 1000, badgeColor: 'bg-teal-100 text-teal-800 border-teal-300' },
  { id: '2500', label: 'Top 2,500', description: 'Umbral de fluidez autónoma y compresión oral (B1)', maxRank: 2500, badgeColor: 'bg-amber-100 text-amber-800 border-amber-300' },
  { id: '5000', label: 'Top 5,000', description: 'Vocabulario intermedio alto y profesional (B2 - Oxford 5000)', maxRank: 5000, badgeColor: 'bg-purple-100 text-purple-800 border-purple-300' },
  { id: '10000', label: 'Top 10,000', description: 'Léxico avanzado, académico y literario (C1-C2 Mastery)', maxRank: 10000, badgeColor: 'bg-rose-100 text-rose-800 border-rose-300' },
];

// Caché sincrónico inmediato con las primeras 200 palabras (0 ms de espera al abrir)
export const INITIAL_TOP_WORDS: TopWord[] = [
  {
    "r": 1,
    "w": "the",
    "pos": "Artículo / Determinante",
    "es": "el, la, los, las",
    "lvl": "A1",
    "ex": "The sun rises in the east every morning.",
    "exEs": "El sol sale por el este cada mañana."
  },
  {
    "r": 2,
    "w": "of",
    "pos": "Preposición",
    "es": "de, del",
    "lvl": "A1",
    "ex": "This is the capital city of our country.",
    "exEs": "Esta es la ciudad capital de nuestro país."
  },
  {
    "r": 3,
    "w": "and",
    "pos": "Conjunción",
    "es": "y, e",
    "lvl": "A1",
    "ex": "She speaks English and Spanish fluently.",
    "exEs": "Ella habla inglés y español con fluidez."
  },
  {
    "r": 4,
    "w": "to",
    "pos": "Preposición",
    "es": "a, hacia, para",
    "lvl": "A1",
    "ex": "We decided to walk to the central park.",
    "exEs": "Decidimos caminar hacia el parque central."
  },
  {
    "r": 5,
    "w": "a",
    "pos": "Artículo",
    "es": "un, una",
    "lvl": "A1",
    "ex": "I bought a new book yesterday.",
    "exEs": "Compré un libro nuevo ayer."
  },
  {
    "r": 6,
    "w": "in",
    "pos": "Preposición",
    "es": "en, dentro de",
    "lvl": "A1",
    "ex": "The keys are inside the front drawer in the desk.",
    "exEs": "Las llaves están dentro del cajón delantero en el escritorio."
  },
  {
    "r": 7,
    "w": "for",
    "pos": "Preposición",
    "es": "para, por",
    "lvl": "A1",
    "ex": "This special present is for your graduation.",
    "exEs": "Este regalo especial es para tu graduación."
  },
  {
    "r": 8,
    "w": "is",
    "pos": "Verbo",
    "es": "es, está, hay in existencial sentences, when the subject is indefinite, verb-noun inversion also necessary",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'is' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'is' (es, está, hay in existencial sentences, when the subject is indefinite, verb-noun inversion also necessary) de forma efectiva en la redacción académica."
  },
  {
    "r": 9,
    "w": "on",
    "pos": "Preposición",
    "es": "en, sobre, encima de",
    "lvl": "A1",
    "ex": "The laptop is on the wooden table.",
    "exEs": "La computadora portátil está sobre la mesa de madera."
  },
  {
    "r": 10,
    "w": "that",
    "pos": "Pronombre / Conjunción",
    "es": "ese, esa, que, aquel",
    "lvl": "A1",
    "ex": "That building is the highest in the district.",
    "exEs": "Ese edificio es el más alto del distrito."
  },
  {
    "r": 11,
    "w": "by",
    "pos": "Preposición",
    "es": "por, junto a, para (fecha límite)",
    "lvl": "A1",
    "ex": "The novel was written by a Nobel laureate.",
    "exEs": "La novela fue escrita por un ganador del Premio Nobel."
  },
  {
    "r": 12,
    "w": "this",
    "pos": "Pronombre / Determinante",
    "es": "este, esta, esto",
    "lvl": "A1",
    "ex": "This experiment demonstrates the physical principle.",
    "exEs": "Este experimento demuestra el principio físico."
  },
  {
    "r": 13,
    "w": "with",
    "pos": "Preposición",
    "es": "con",
    "lvl": "A1",
    "ex": "She traveled to London with her family.",
    "exEs": "Ella viajó a Londres con su familia."
  },
  {
    "r": 14,
    "w": "i",
    "pos": "Pronombre",
    "es": "yo",
    "lvl": "A1",
    "ex": "I am studying computer science at university.",
    "exEs": "Yo estoy estudiando ciencias de la computación en la universidad."
  },
  {
    "r": 15,
    "w": "you",
    "pos": "Pronombre",
    "es": "tú, usted, ustedes, vosotros",
    "lvl": "A1",
    "ex": "You are welcome to join our study group.",
    "exEs": "Eres bienvenido a unirte a nuestro grupo de estudio."
  },
  {
    "r": 16,
    "w": "it",
    "pos": "Pronombre",
    "es": "ello, eso (pronombre neutro)",
    "lvl": "A1",
    "ex": "It is raining outside, so take an umbrella.",
    "exEs": "Está lloviendo afuera, así que lleva un paraguas."
  },
  {
    "r": 17,
    "w": "not",
    "pos": "Adverbio",
    "es": "no",
    "lvl": "A1",
    "ex": "He is not ready to present his thesis yet.",
    "exEs": "Él no está listo para presentar su tesis todavía."
  },
  {
    "r": 18,
    "w": "or",
    "pos": "Conjunción",
    "es": "o, u",
    "lvl": "A1",
    "ex": "Would you prefer tea or black coffee?",
    "exEs": "¿Preferirías té o café negro?"
  },
  {
    "r": 19,
    "w": "be",
    "pos": "Verbo",
    "es": "ser, estar",
    "lvl": "A1",
    "ex": "To be honest, learning English is very rewarding.",
    "exEs": "Para ser sincero, aprender inglés es muy gratificante."
  },
  {
    "r": 20,
    "w": "are",
    "pos": "Verbo",
    "es": "Are",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'are' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'are' (Are) de forma efectiva en la redacción académica."
  },
  {
    "r": 21,
    "w": "from",
    "pos": "Preposición",
    "es": "de, desde",
    "lvl": "A1",
    "ex": "She received a heartfelt letter from her mentor.",
    "exEs": "Ella recibió una sentida carta de su mentor."
  },
  {
    "r": 22,
    "w": "at",
    "pos": "Preposición",
    "es": "en, a las (lugar o tiempo)",
    "lvl": "A1",
    "ex": "The lecture starts at nine o'clock sharp.",
    "exEs": "La conferencia comienza a las nueve en punto."
  },
  {
    "r": 23,
    "w": "as",
    "pos": "Conjunción / Preposición",
    "es": "como, mientras, tan",
    "lvl": "A1",
    "ex": "She arrived as the meeting was starting.",
    "exEs": "Ella llegó mientras la reunión estaba comenzando."
  },
  {
    "r": 24,
    "w": "your",
    "pos": "Posesivo",
    "es": "tu, su (de usted), vuestro",
    "lvl": "A1",
    "ex": "Make sure your contact information is up to date.",
    "exEs": "Asegúrate de que tu información de contacto esté actualizada."
  },
  {
    "r": 25,
    "w": "all",
    "pos": "Determinante / Pronombre",
    "es": "todo, todos, todas",
    "lvl": "A1",
    "ex": "All citizens deserve access to clean drinking water.",
    "exEs": "Todos los ciudadanos merecen acceso a agua potable limpia."
  },
  {
    "r": 26,
    "w": "have",
    "pos": "Verbo",
    "es": "tener, haber",
    "lvl": "A1",
    "ex": "They have three children and two dogs.",
    "exEs": "Ellos tienen tres hijos y dos perros."
  },
  {
    "r": 27,
    "w": "new",
    "pos": "Adjetivo",
    "es": "nuevo, nueva",
    "lvl": "A1",
    "ex": "The research institution inaugurated a new genomic facility.",
    "exEs": "La institución de investigación inauguró una nueva instalación genómica."
  },
  {
    "r": 28,
    "w": "more",
    "pos": "Verbo",
    "es": "más",
    "lvl": "A1",
    "ex": "She was far more intelligent than her sister.",
    "exEs": "Ejemplo contextualizado de la palabra 'more' (más)."
  },
  {
    "r": 29,
    "w": "an",
    "pos": "Artículo",
    "es": "un, una (ante sonido vocálico)",
    "lvl": "A1",
    "ex": "She ate an organic apple for breakfast.",
    "exEs": "Ella comió una manzana orgánica en el desayuno."
  },
  {
    "r": 30,
    "w": "was",
    "pos": "Sustantivo",
    "es": "Was",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'was' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'was' (Was) de forma efectiva en la redacción académica."
  },
  {
    "r": 31,
    "w": "we",
    "pos": "Pronombre",
    "es": "nosotros, nosotras",
    "lvl": "A1",
    "ex": "We must prepare for the final academic exams.",
    "exEs": "Nosotros debemos prepararnos para los exámenes académicos finales."
  },
  {
    "r": 32,
    "w": "will",
    "pos": "Verbo Modal / Sustantivo",
    "es": "auxiliar de futuro / voluntad",
    "lvl": "A1",
    "ex": "Technological advancements will transform education.",
    "exEs": "Los avances tecnológicos transformarán la educación."
  },
  {
    "r": 33,
    "w": "home",
    "pos": "Adjetivo",
    "es": "a casa",
    "lvl": "A2",
    "ex": "home life (= with your family)",
    "exEs": "Ejemplo contextualizado de la palabra 'home' (a casa)."
  },
  {
    "r": 34,
    "w": "can",
    "pos": "Verbo Modal",
    "es": "poder (habilidad o permiso)",
    "lvl": "A1",
    "ex": "She can speak four foreign languages with remarkable fluency.",
    "exEs": "Ella puede hablar cuatro idiomas extranjeros con notable fluidez."
  },
  {
    "r": 35,
    "w": "us",
    "pos": "Pronombre",
    "es": "nos, a nosotros",
    "lvl": "A1",
    "ex": "Language connects us across cultural frontiers.",
    "exEs": "El idioma nos conecta a través de fronteras culturales."
  },
  {
    "r": 36,
    "w": "about",
    "pos": "Preposición",
    "es": "acerca de, sobre, alrededor de",
    "lvl": "A1",
    "ex": "The documentary is about biodiversity conservation.",
    "exEs": "El documental trata sobre la conservación de la biodiversidad."
  },
  {
    "r": 37,
    "w": "if",
    "pos": "Conjunción",
    "es": "si (condicional)",
    "lvl": "A1",
    "ex": "If you practice consistently, you will become fluent.",
    "exEs": "Si practicas con constancia, hablarás con fluidez."
  },
  {
    "r": 38,
    "w": "page",
    "pos": "Sustantivo",
    "es": "Page",
    "lvl": "A1",
    "ex": "Turn to page 64.",
    "exEs": "Ejemplo contextualizado de la palabra 'page' (Page)."
  },
  {
    "r": 39,
    "w": "my",
    "pos": "Posesivo",
    "es": "mi, mis",
    "lvl": "A1",
    "ex": "My brother is preparing for the university admission test.",
    "exEs": "Mi hermano se está preparando para la prueba de admisión universitaria."
  },
  {
    "r": 40,
    "w": "has",
    "pos": "Interjección",
    "es": "ja (pl.)",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'has' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'has' (ja (pl.)) de forma efectiva en la redacción académica."
  },
  {
    "r": 41,
    "w": "search",
    "pos": "Sustantivo",
    "es": "búsqueda",
    "lvl": "A2",
    "ex": "search for somebody/something, a long search for the murder weapon",
    "exEs": "Ejemplo contextualizado de la palabra 'search' (búsqueda)."
  },
  {
    "r": 42,
    "w": "free",
    "pos": "Adjetivo",
    "es": "libre",
    "lvl": "A1",
    "ex": "Are you free on Saturday? We're having a barbecue.",
    "exEs": "Ejemplo contextualizado de la palabra 'free' (libre)."
  },
  {
    "r": 43,
    "w": "but",
    "pos": "Conjunción",
    "es": "pero, sino",
    "lvl": "A1",
    "ex": "I wanted to call you, but my phone battery died.",
    "exEs": "Quería llamarte, pero la batería de mi teléfono se agotó."
  },
  {
    "r": 44,
    "w": "our",
    "pos": "Posesivo",
    "es": "nuestro, nuestra, nuestros",
    "lvl": "A1",
    "ex": "Our mission is providing equitable access to education.",
    "exEs": "Nuestra misión es brindar acceso equitativo a la educación."
  },
  {
    "r": 45,
    "w": "one",
    "pos": "Número / Pronombre",
    "es": "uno, una",
    "lvl": "A1",
    "ex": "One of the most important factors is daily discipline.",
    "exEs": "Uno de los factores más importantes es la disciplina diaria."
  },
  {
    "r": 46,
    "w": "other",
    "pos": "Adjetivo / Pronombre",
    "es": "otro, otra, otros, otras",
    "lvl": "A1",
    "ex": "We must consider other alternative hypotheses.",
    "exEs": "Debemos considerar otras hipótesis alternativas."
  },
  {
    "r": 47,
    "w": "do",
    "pos": "Verbo / Auxiliar",
    "es": "hacer",
    "lvl": "A1",
    "ex": "What do you usually do in the evenings?",
    "exEs": "¿Qué haces usualmente por las tardes?"
  },
  {
    "r": 48,
    "w": "no",
    "pos": "Determinante / Adverbio",
    "es": "no, ningún, ninguna",
    "lvl": "A1",
    "ex": "There is no doubt that daily revision yields superior mastery.",
    "exEs": "No hay duda de que el repaso diario genera un dominio superior."
  },
  {
    "r": 49,
    "w": "information",
    "pos": "Sustantivo",
    "es": "información",
    "lvl": "A1",
    "ex": "a piece of information",
    "exEs": "Ejemplo contextualizado de la palabra 'information' (información)."
  },
  {
    "r": 50,
    "w": "time",
    "pos": "Sustantivo",
    "es": "tiempo, hora, vez",
    "lvl": "A1",
    "ex": "Take your time to read each question thoroughly.",
    "exEs": "Tómate tu tiempo para leer cada pregunta detenidamente."
  },
  {
    "r": 51,
    "w": "they",
    "pos": "Pronombre",
    "es": "ellos, ellas",
    "lvl": "A1",
    "ex": "They arrived at the airport early in the morning.",
    "exEs": "Ellos llegaron al aeropuerto temprano en la mañana."
  },
  {
    "r": 52,
    "w": "site",
    "pos": "Sustantivo",
    "es": "sitio",
    "lvl": "A2",
    "ex": "the site of a sixteenth-century abbey",
    "exEs": "Ejemplo contextualizado de la palabra 'site' (sitio)."
  },
  {
    "r": 53,
    "w": "he",
    "pos": "Pronombre",
    "es": "él",
    "lvl": "A1",
    "ex": "He works as a senior civil engineer.",
    "exEs": "Él trabaja como ingeniero civil senior."
  },
  {
    "r": 54,
    "w": "up",
    "pos": "Adverbio / Preposición",
    "es": "arriba, hacia arriba",
    "lvl": "A1",
    "ex": "Look up at the constellations tonight.",
    "exEs": "Mira hacia arriba a las constelaciones esta noche."
  },
  {
    "r": 55,
    "w": "may",
    "pos": "Sustantivo",
    "es": "espino , marzoleto",
    "lvl": "A1",
    "ex": "She was born in May.",
    "exEs": "Ejemplo contextualizado de la palabra 'may' (espino , marzoleto)."
  },
  {
    "r": 56,
    "w": "what",
    "pos": "Pronombre interrogativo",
    "es": "qué, lo que, cuál",
    "lvl": "A1",
    "ex": "What is the primary objective of this project?",
    "exEs": "¿Cuál es el objetivo principal de este proyecto?"
  },
  {
    "r": 57,
    "w": "which",
    "pos": "Pronombre",
    "es": "cuál, el cual, la cual, que",
    "lvl": "A1",
    "ex": "Which of these two options aligns best with your goals?",
    "exEs": "¿Cuál de estas dos opciones se alinea mejor con tus metas?"
  },
  {
    "r": 58,
    "w": "their",
    "pos": "Posesivo",
    "es": "su, sus (de ellos)",
    "lvl": "A1",
    "ex": "Their dedication to renewable energy earned them a grant.",
    "exEs": "Su dedicación a la energía renovable les valió una subvención."
  },
  {
    "r": 59,
    "w": "news",
    "pos": "Sustantivo",
    "es": "noticias",
    "lvl": "A1",
    "ex": "What's the latest news?",
    "exEs": "Ejemplo contextualizado de la palabra 'news' (noticias)."
  },
  {
    "r": 60,
    "w": "out",
    "pos": "Adverbio / Preposición",
    "es": "fuera, hacia afuera",
    "lvl": "A1",
    "ex": "He stepped out of the office to answer the call.",
    "exEs": "Él salió de la oficina para responder la llamada."
  },
  {
    "r": 61,
    "w": "use",
    "pos": "Verbo / Sustantivo",
    "es": "usar, utilizar / uso",
    "lvl": "A1",
    "ex": "Scholars use rigorous empirical methodologies.",
    "exEs": "Los académicos usan rigurosas metodologías empíricas."
  },
  {
    "r": 62,
    "w": "any",
    "pos": "Determinante / Pronombre",
    "es": "cualquier, algún, ninguno",
    "lvl": "A1",
    "ex": "Do you have any questions regarding the modal verbs lesson?",
    "exEs": "¿Tienes alguna pregunta respecto a la lección de verbos modales?"
  },
  {
    "r": 63,
    "w": "there",
    "pos": "Adverbio",
    "es": "allí, allá, ahí",
    "lvl": "A1",
    "ex": "There are twenty students in the chemistry laboratory.",
    "exEs": "Hay veinte estudiantes en el laboratorio de química."
  },
  {
    "r": 64,
    "w": "see",
    "pos": "Verbo",
    "es": "ver, entender",
    "lvl": "A1",
    "ex": "I see what you mean regarding the syntactic rule.",
    "exEs": "Entiendo lo que quieres decir respecto a la regla sintáctica."
  },
  {
    "r": 65,
    "w": "only",
    "pos": "Adverbio / Adjetivo",
    "es": "solo, solamente, único",
    "lvl": "A1",
    "ex": "Discipline is the only reliable path to linguistic mastery.",
    "exEs": "La disciplina es el único camino confiable hacia la maestría lingüística."
  },
  {
    "r": 66,
    "w": "so",
    "pos": "Adverbio / Conjunción",
    "es": "tan, así que, por lo tanto",
    "lvl": "A1",
    "ex": "It was raining heavily, so we stayed inside.",
    "exEs": "Estaba lloviendo intensamente, así que nos quedamos adentro."
  },
  {
    "r": 67,
    "w": "his",
    "pos": "Posesivo",
    "es": "su, de él",
    "lvl": "A1",
    "ex": "His car is parked right in front of the house.",
    "exEs": "Su carro está estacionado justo enfrente de la casa."
  },
  {
    "r": 68,
    "w": "when",
    "pos": "Adverbio / Conjunción",
    "es": "cuándo, cuando",
    "lvl": "A1",
    "ex": "When the bell rang, the students submitted their tests.",
    "exEs": "Cuando sonó la campana, los estudiantes entregaron sus pruebas."
  },
  {
    "r": 69,
    "w": "contact",
    "pos": "Sustantivo",
    "es": "contacto",
    "lvl": "B1",
    "ex": "contact with somebody, I don't have much contact with my uncle.",
    "exEs": "Ejemplo contextualizado de la palabra 'contact' (contacto)."
  },
  {
    "r": 70,
    "w": "here",
    "pos": "Verbo",
    "es": "aquí, acá",
    "lvl": "A1",
    "ex": "I live here.",
    "exEs": "Ejemplo contextualizado de la palabra 'here' (aquí, acá)."
  },
  {
    "r": 71,
    "w": "business",
    "pos": "Sustantivo",
    "es": "empresa",
    "lvl": "A1",
    "ex": "It's been a pleasure to do business with you.",
    "exEs": "Ejemplo contextualizado de la palabra 'business' (empresa)."
  },
  {
    "r": 72,
    "w": "who",
    "pos": "Pronombre relativo",
    "es": "quién, quiénes, que (persona)",
    "lvl": "A1",
    "ex": "The professor who taught quantum mechanics retired today.",
    "exEs": "El profesor que enseñaba mecánica cuántica se jubiló hoy."
  },
  {
    "r": 73,
    "w": "web",
    "pos": "Sustantivo",
    "es": "Web",
    "lvl": "A2",
    "ex": "to surf/browse/search the web",
    "exEs": "Ejemplo contextualizado de la palabra 'web' (Web)."
  },
  {
    "r": 74,
    "w": "also",
    "pos": "Adverbio",
    "es": "también, además",
    "lvl": "A1",
    "ex": "He teaches precálculo and also conducts research in physics.",
    "exEs": "Él enseña precálculo y también realiza investigaciones en física."
  },
  {
    "r": 75,
    "w": "now",
    "pos": "Adverbio",
    "es": "ahora",
    "lvl": "A1",
    "ex": "You are now ready to commence the advanced practice module.",
    "exEs": "Ahora estás listo para comenzar el módulo de práctica avanzada."
  },
  {
    "r": 76,
    "w": "help",
    "pos": "Sustantivo",
    "es": "ayuda , socorro , auxilio",
    "lvl": "A1",
    "ex": "Thank you for all your help.",
    "exEs": "Ejemplo contextualizado de la palabra 'help' (ayuda , socorro , auxilio)."
  },
  {
    "r": 77,
    "w": "get",
    "pos": "Verbo",
    "es": "obtener, conseguir, llegar, ponerse",
    "lvl": "A1",
    "ex": "You need to get enough sleep before the examination.",
    "exEs": "Necesitas dormir suficiente antes del examen."
  },
  {
    "r": 78,
    "w": "pm",
    "pos": "Sustantivo",
    "es": "PM",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'pm' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'pm' (PM) de forma efectiva en la redacción académica."
  },
  {
    "r": 79,
    "w": "view",
    "pos": "Sustantivo",
    "es": "visión",
    "lvl": "A2",
    "ex": "view of something, There were magnificent views of the surrounding countryside.",
    "exEs": "Ejemplo contextualizado de la palabra 'view' (visión)."
  },
  {
    "r": 80,
    "w": "online",
    "pos": "Adjetivo",
    "es": "en línea",
    "lvl": "A1",
    "ex": "Online shopping is both cheap and convenient.",
    "exEs": "Ejemplo contextualizado de la palabra 'online' (en línea)."
  },
  {
    "r": 81,
    "w": "first",
    "pos": "Ordinal / Adverbio",
    "es": "primero, primera",
    "lvl": "A1",
    "ex": "The first step toward learning is acknowledging what we do not know.",
    "exEs": "El primer paso hacia el aprendizaje es reconocer lo que no sabemos."
  },
  {
    "r": 82,
    "w": "am",
    "pos": "Verbo",
    "es": "estoy, soy",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'am' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'am' (estoy, soy) de forma efectiva en la redacción académica."
  },
  {
    "r": 83,
    "w": "been",
    "pos": "Sustantivo",
    "es": "Been",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'been' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'been' (Been) de forma efectiva en la redacción académica."
  },
  {
    "r": 84,
    "w": "would",
    "pos": "Verbo Modal",
    "es": "terminación condicional (-ía)",
    "lvl": "A2",
    "ex": "I would travel around the world if I had the funds.",
    "exEs": "Viajaría alrededor del mundo si tuviera los fondos."
  },
  {
    "r": 85,
    "w": "how",
    "pos": "Adverbio interrogativo",
    "es": "cómo, cuán, qué tan",
    "lvl": "A1",
    "ex": "How do you form the third conditional in formal English?",
    "exEs": "¿Cómo se forma el tercer condicional en inglés formal?"
  },
  {
    "r": 86,
    "w": "were",
    "pos": "Sustantivo",
    "es": "Were",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'were' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'were' (Were) de forma efectiva en la redacción académica."
  },
  {
    "r": 87,
    "w": "me",
    "pos": "Pronombre",
    "es": "me, a mí",
    "lvl": "A1",
    "ex": "Please send me the updated curriculum schedule.",
    "exEs": "Por favor envíame el cronograma curricular actualizado."
  },
  {
    "r": 88,
    "w": "services",
    "pos": "Sustantivo",
    "es": "saque (pl.)",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'services' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'services' (saque (pl.)) de forma efectiva en la redacción académica."
  },
  {
    "r": 89,
    "w": "some",
    "pos": "Determinante",
    "es": "algunos, algunas, algo de",
    "lvl": "A1",
    "ex": "Would you like some help with your mathematics homework?",
    "exEs": "¿Te gustaría algo de ayuda con tu tarea de matemáticas?"
  },
  {
    "r": 90,
    "w": "these",
    "pos": "Demostrativo",
    "es": "estos, estas",
    "lvl": "A1",
    "ex": "These ten thousand words constitute the foundation of English literacy.",
    "exEs": "Estas diez mil palabras constituyen la base del dominio del inglés."
  },
  {
    "r": 91,
    "w": "click",
    "pos": "Sustantivo",
    "es": "clic , pulsado , aprieto",
    "lvl": "B1",
    "ex": "a mouse click",
    "exEs": "Ejemplo contextualizado de la palabra 'click' (clic , pulsado , aprieto)."
  },
  {
    "r": 92,
    "w": "its",
    "pos": "Posesivo",
    "es": "su, sus (de cosa o animal)",
    "lvl": "A1",
    "ex": "The university celebrated its bicentennial anniversary.",
    "exEs": "La universidad celebró su bicentenario aniversario."
  },
  {
    "r": 93,
    "w": "like",
    "pos": "Verbo / Preposición",
    "es": "gustar / como, similar a",
    "lvl": "A1",
    "ex": "I like studying linguistics because language shapes culture.",
    "exEs": "Me gusta estudiar lingüística porque el idioma moldea la cultura."
  },
  {
    "r": 94,
    "w": "service",
    "pos": "Sustantivo",
    "es": "saque",
    "lvl": "A2",
    "ex": "the ambulance/bus/postal service",
    "exEs": "Ejemplo contextualizado de la palabra 'service' (saque)."
  },
  {
    "r": 95,
    "w": "than",
    "pos": "Conjunción / Preposición",
    "es": "que (en comparaciones)",
    "lvl": "A2",
    "ex": "Action is always more persuasive than mere words.",
    "exEs": "La acción es siempre más persuasiva que las meras palabras."
  },
  {
    "r": 96,
    "w": "find",
    "pos": "Verbo",
    "es": "hallazgo",
    "lvl": "A1",
    "ex": "find somebody/something, Look what I've found!",
    "exEs": "Ejemplo contextualizado de la palabra 'find' (hallazgo)."
  },
  {
    "r": 97,
    "w": "price",
    "pos": "Sustantivo",
    "es": "precio",
    "lvl": "A1",
    "ex": "Boat for sale, price £8 000",
    "exEs": "Ejemplo contextualizado de la palabra 'price' (precio)."
  },
  {
    "r": 98,
    "w": "date",
    "pos": "Sustantivo",
    "es": "compañero , compañera",
    "lvl": "A1",
    "ex": "‘What's the date today?’ ‘The 10th.’",
    "exEs": "Ejemplo contextualizado de la palabra 'date' (compañero , compañera)."
  },
  {
    "r": 99,
    "w": "back",
    "pos": "Sustantivo / Adverbio",
    "es": "espalda, atrás, de vuelta",
    "lvl": "A1",
    "ex": "Please return the reference volume back to the shelf.",
    "exEs": "Por favor devuelve el volumen de referencia al estante."
  },
  {
    "r": 100,
    "w": "top",
    "pos": "Adjetivo",
    "es": "máximo",
    "lvl": "A2",
    "ex": "He lives on the top floor.",
    "exEs": "Ejemplo contextualizado de la palabra 'top' (máximo)."
  },
  {
    "r": 101,
    "w": "people",
    "pos": "Sustantivo",
    "es": "personas, gente, pueblo",
    "lvl": "A1",
    "ex": "Millions of people worldwide communicate in English.",
    "exEs": "Millones de personas en todo el mundo se comunican en inglés."
  },
  {
    "r": 102,
    "w": "had",
    "pos": "Sustantivo",
    "es": "Had",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'had' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'had' (Had) de forma efectiva en la redacción académica."
  },
  {
    "r": 103,
    "w": "list",
    "pos": "Sustantivo",
    "es": "lista",
    "lvl": "A1",
    "ex": "The guest list includes numerous celebrities.",
    "exEs": "Ejemplo contextualizado de la palabra 'list' (lista)."
  },
  {
    "r": 104,
    "w": "name",
    "pos": "Sustantivo",
    "es": "nombre",
    "lvl": "A1",
    "ex": "What's your name?",
    "exEs": "Ejemplo contextualizado de la palabra 'name' (nombre)."
  },
  {
    "r": 105,
    "w": "just",
    "pos": "Adverbio",
    "es": "solo, justamente, acabar de",
    "lvl": "A1",
    "ex": "I just finished reviewing the twentieth grammar lesson.",
    "exEs": "Acabo de terminar de repasar la vigésima lección de gramática."
  },
  {
    "r": 106,
    "w": "over",
    "pos": "Preposición / Adverbio",
    "es": "sobre, encima de, más de",
    "lvl": "A1",
    "ex": "There are over ten thousand verified terms in this vocabulary bank.",
    "exEs": "Hay más de diez mil términos verificados en este banco de vocabulario."
  },
  {
    "r": 107,
    "w": "state",
    "pos": "Adjetivo",
    "es": "estado",
    "lvl": "B1",
    "ex": "state officials/agencies",
    "exEs": "Ejemplo contextualizado de la palabra 'state' (estado)."
  },
  {
    "r": 108,
    "w": "year",
    "pos": "Sustantivo",
    "es": "año",
    "lvl": "A1",
    "ex": "She completed her master's degree this academic year.",
    "exEs": "Ella completó su maestría este año académico."
  },
  {
    "r": 109,
    "w": "day",
    "pos": "Sustantivo",
    "es": "día",
    "lvl": "A1",
    "ex": "Dedicate thirty minutes each day to language acquisition.",
    "exEs": "Dedica treinta minutos cada día a la adquisición del idioma."
  },
  {
    "r": 110,
    "w": "into",
    "pos": "Preposición",
    "es": "en, dentro de, hacia el interior",
    "lvl": "A1",
    "ex": "He stepped into the lecture hall right on schedule.",
    "exEs": "Él ingresó al auditorio de conferencias justo a tiempo."
  },
  {
    "r": 111,
    "w": "email",
    "pos": "Sustantivo",
    "es": "Email",
    "lvl": "A1",
    "ex": "I will be on vacation for a week in November, with no access to email.",
    "exEs": "Ejemplo contextualizado de la palabra 'email' (Email)."
  },
  {
    "r": 112,
    "w": "two",
    "pos": "Número",
    "es": "dos",
    "lvl": "A1",
    "ex": "The syllabus is divided into two comprehensive semesters.",
    "exEs": "El plan de estudios está dividido en dos semestres integrales."
  },
  {
    "r": 113,
    "w": "health",
    "pos": "Sustantivo",
    "es": "salud , sanidad",
    "lvl": "A1",
    "ex": "to be good/bad for your health",
    "exEs": "Ejemplo contextualizado de la palabra 'health' (salud , sanidad)."
  },
  {
    "r": 114,
    "w": "world",
    "pos": "Sustantivo",
    "es": "mundo",
    "lvl": "A1",
    "ex": "a map of the world",
    "exEs": "Ejemplo contextualizado de la palabra 'world' (mundo)."
  },
  {
    "r": 115,
    "w": "re",
    "pos": "Sustantivo",
    "es": "Re",
    "lvl": "A1",
    "ex": "The student learned how to use the word 're' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 're' (Re) de forma efectiva en la redacción académica."
  },
  {
    "r": 116,
    "w": "next",
    "pos": "Adjetivo",
    "es": "próximo",
    "lvl": "A1",
    "ex": "The next train to Baltimore is at ten.",
    "exEs": "Ejemplo contextualizado de la palabra 'next' (próximo)."
  },
  {
    "r": 117,
    "w": "used",
    "pos": "Adjetivo",
    "es": "nos, nosotros, nosotras (pasado)",
    "lvl": "B1",
    "ex": "used to doing something, I'm not used to eating so much at lunchtime.",
    "exEs": "Ejemplo contextualizado de la palabra 'used' (nos, nosotros, nosotras (pasado))."
  },
  {
    "r": 118,
    "w": "go",
    "pos": "Verbo",
    "es": "ir",
    "lvl": "A1",
    "ex": "We go to the municipal library every Saturday morning.",
    "exEs": "Vamos a la biblioteca municipal cada sábado por la mañana."
  },
  {
    "r": 119,
    "w": "work",
    "pos": "Sustantivo / Verbo",
    "es": "trabajo / trabajar",
    "lvl": "A1",
    "ex": "Diligent work consistently generates profound results.",
    "exEs": "El trabajo diligente genera consistentemente resultados profundos."
  },
  {
    "r": 120,
    "w": "last",
    "pos": "Verbo",
    "es": "último",
    "lvl": "A2",
    "ex": "He came last in the race.",
    "exEs": "Ejemplo contextualizado de la palabra 'last' (último)."
  },
  {
    "r": 121,
    "w": "most",
    "pos": "Superlativo / Determinante",
    "es": "la mayoría, el más, la más",
    "lvl": "A2",
    "ex": "This is the most comprehensive educational portal available.",
    "exEs": "Este es el portal educativo más completo disponible."
  },
  {
    "r": 122,
    "w": "products",
    "pos": "Sustantivo",
    "es": "producto (pl.)",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'products' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'products' (producto (pl.)) de forma efectiva en la redacción académica."
  },
  {
    "r": 123,
    "w": "music",
    "pos": "Sustantivo",
    "es": "música",
    "lvl": "A1",
    "ex": "I like any kind of pop or dance music.",
    "exEs": "Ejemplo contextualizado de la palabra 'music' (música)."
  },
  {
    "r": 124,
    "w": "buy",
    "pos": "Verbo",
    "es": "Buy",
    "lvl": "A1",
    "ex": "buy (something), Where did you buy that dress?",
    "exEs": "Ejemplo contextualizado de la palabra 'buy' (Buy)."
  },
  {
    "r": 125,
    "w": "data",
    "pos": "Sustantivo",
    "es": "datos",
    "lvl": "A2",
    "ex": "We collected publicly available data over a 10-day period.",
    "exEs": "Ejemplo contextualizado de la palabra 'data' (datos)."
  },
  {
    "r": 126,
    "w": "make",
    "pos": "Verbo",
    "es": "hacer, fabricar, crear",
    "lvl": "A1",
    "ex": "Engineers make innovative tools to solve complex problems.",
    "exEs": "Los ingenieros crean herramientas innovadoras para resolver problemas complejos."
  },
  {
    "r": 127,
    "w": "them",
    "pos": "Pronombre",
    "es": "los, las, les, a ellos",
    "lvl": "A1",
    "ex": "The teacher congratulated them for their outstanding performance.",
    "exEs": "El profesor los felicitó por su sobresaliente desempeño."
  },
  {
    "r": 128,
    "w": "should",
    "pos": "Verbo",
    "es": "si",
    "lvl": "A1",
    "ex": "You shouldn't drink and drive.",
    "exEs": "Ejemplo contextualizado de la palabra 'should' (si)."
  },
  {
    "r": 129,
    "w": "product",
    "pos": "Sustantivo",
    "es": "producto",
    "lvl": "A1",
    "ex": "food/agricultural/software products",
    "exEs": "Ejemplo contextualizado de la palabra 'product' (producto)."
  },
  {
    "r": 130,
    "w": "system",
    "pos": "Sustantivo",
    "es": "sistema",
    "lvl": "A2",
    "ex": "reform of the country's education system",
    "exEs": "Ejemplo contextualizado de la palabra 'system' (sistema)."
  },
  {
    "r": 131,
    "w": "post",
    "pos": "Sustantivo",
    "es": "poste , estaca",
    "lvl": "A1",
    "ex": "by post, I'll send the original to you by post.",
    "exEs": "Ejemplo contextualizado de la palabra 'post' (poste , estaca)."
  },
  {
    "r": 132,
    "w": "her",
    "pos": "Pronombre / Posesivo",
    "es": "su (de ella), la, a ella",
    "lvl": "A1",
    "ex": "Her dedication to public health is inspiring.",
    "exEs": "Su dedicación a la salud pública es inspiradora."
  },
  {
    "r": 133,
    "w": "city",
    "pos": "Sustantivo",
    "es": "City",
    "lvl": "A1",
    "ex": "Parking is difficult in the city centre.",
    "exEs": "Ejemplo contextualizado de la palabra 'city' (City)."
  },
  {
    "r": 134,
    "w": "add",
    "pos": "Verbo",
    "es": "añadir",
    "lvl": "A1",
    "ex": "add something, Next add the flour.",
    "exEs": "Ejemplo contextualizado de la palabra 'add' (añadir)."
  },
  {
    "r": 135,
    "w": "policy",
    "pos": "Sustantivo",
    "es": "Policy",
    "lvl": "B1",
    "ex": "policy on something, the present government’s policy on education",
    "exEs": "Ejemplo contextualizado de la palabra 'policy' (Policy)."
  },
  {
    "r": 136,
    "w": "number",
    "pos": "Sustantivo",
    "es": "número",
    "lvl": "A1",
    "ex": "Think of a number and multiply it by two.",
    "exEs": "Ejemplo contextualizado de la palabra 'number' (número)."
  },
  {
    "r": 137,
    "w": "such",
    "pos": "Adjetivo",
    "es": "tal",
    "lvl": "A2",
    "ex": "This issue was of such importance that we could not afford to ignore it.",
    "exEs": "Ejemplo contextualizado de la palabra 'such' (tal)."
  },
  {
    "r": 138,
    "w": "please",
    "pos": "Adverbio",
    "es": "por favor, favor de, porfa",
    "lvl": "A1",
    "ex": "Please sit down.",
    "exEs": "Ejemplo contextualizado de la palabra 'please' (por favor, favor de, porfa)."
  },
  {
    "r": 139,
    "w": "available",
    "pos": "Adjetivo",
    "es": "disponible",
    "lvl": "A2",
    "ex": "available resources/data",
    "exEs": "Ejemplo contextualizado de la palabra 'available' (disponible)."
  },
  {
    "r": 140,
    "w": "copyright",
    "pos": "Sustantivo",
    "es": "derechos de autor",
    "lvl": "C1",
    "ex": "Copyright expires seventy years after the death of the author.",
    "exEs": "Ejemplo contextualizado de la palabra 'copyright' (derechos de autor)."
  },
  {
    "r": 141,
    "w": "support",
    "pos": "Sustantivo",
    "es": "apoyo , respaldo",
    "lvl": "A2",
    "ex": "support for something, There is strong public support for the policy.",
    "exEs": "Ejemplo contextualizado de la palabra 'support' (apoyo , respaldo)."
  },
  {
    "r": 142,
    "w": "message",
    "pos": "Sustantivo",
    "es": "mensaje , recado",
    "lvl": "A1",
    "ex": "There were no messages for me at the hotel.",
    "exEs": "Ejemplo contextualizado de la palabra 'message' (mensaje , recado)."
  },
  {
    "r": 143,
    "w": "after",
    "pos": "Preposición / Conjunción",
    "es": "después de, tras",
    "lvl": "A1",
    "ex": "Review the vocabulary list after concluding each lesson.",
    "exEs": "Revisa la lista de vocabulario después de concluir cada clase."
  },
  {
    "r": 144,
    "w": "best",
    "pos": "Adjetivo",
    "es": "el mejor",
    "lvl": "A1",
    "ex": "That's the best movie I've ever seen!",
    "exEs": "Ejemplo contextualizado de la palabra 'best' (el mejor)."
  },
  {
    "r": 145,
    "w": "software",
    "pos": "Sustantivo",
    "es": "software , programa",
    "lvl": "B1",
    "ex": "management/editing software",
    "exEs": "Ejemplo contextualizado de la palabra 'software' (software , programa)."
  },
  {
    "r": 146,
    "w": "then",
    "pos": "Adverbio",
    "es": "entonces, luego, después",
    "lvl": "A1",
    "ex": "Review the theoretical rules and then attempt the exam.",
    "exEs": "Repasa las reglas teóricas y luego intenta el examen."
  },
  {
    "r": 147,
    "w": "jan",
    "pos": "Sustantivo",
    "es": "Jan",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'jan' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'jan' (Jan) de forma efectiva en la redacción académica."
  },
  {
    "r": 148,
    "w": "good",
    "pos": "Adjetivo",
    "es": "bueno, buena",
    "lvl": "A1",
    "ex": "Developing good study habits is essential for university success.",
    "exEs": "Desarrollar buenos hábitos de estudio es esencial para el éxito universitario."
  },
  {
    "r": 149,
    "w": "video",
    "pos": "Sustantivo",
    "es": "vídeo",
    "lvl": "A1",
    "ex": "A wedding is the perfect subject for video.",
    "exEs": "Ejemplo contextualizado de la palabra 'video' (vídeo)."
  },
  {
    "r": 150,
    "w": "well",
    "pos": "Adverbio / Sustantivo",
    "es": "bien / pozo / bueno",
    "lvl": "A1",
    "ex": "She speaks English remarkably well.",
    "exEs": "Ella habla inglés notablemente bien."
  },
  {
    "r": 151,
    "w": "where",
    "pos": "Verbo",
    "es": "dónde; adónde; de dónde",
    "lvl": "A1",
    "ex": "Where do you live?",
    "exEs": "Ejemplo contextualizado de la palabra 'where' (dónde; adónde; de dónde)."
  },
  {
    "r": 152,
    "w": "info",
    "pos": "Sustantivo",
    "es": "Info",
    "lvl": "B2",
    "ex": "For more info, click here.",
    "exEs": "Ejemplo contextualizado de la palabra 'info' (Info)."
  },
  {
    "r": 153,
    "w": "rights",
    "pos": "Adjetivo",
    "es": "derecho, recto, justo (pl.)",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'rights' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'rights' (derecho, recto, justo (pl.)) de forma efectiva en la redacción académica."
  },
  {
    "r": 154,
    "w": "public",
    "pos": "Adjetivo",
    "es": "público",
    "lvl": "A2",
    "ex": "The campaign is designed to increase public awareness of the issues.",
    "exEs": "Ejemplo contextualizado de la palabra 'public' (público)."
  },
  {
    "r": 155,
    "w": "books",
    "pos": "Sustantivo",
    "es": "libro (pl.)",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'books' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'books' (libro (pl.)) de forma efectiva en la redacción académica."
  },
  {
    "r": 156,
    "w": "high",
    "pos": "Adjetivo",
    "es": "alto, elevado",
    "lvl": "A1",
    "ex": "What's the highest mountain in the US?",
    "exEs": "Ejemplo contextualizado de la palabra 'high' (alto, elevado)."
  },
  {
    "r": 157,
    "w": "school",
    "pos": "Sustantivo",
    "es": "facultad",
    "lvl": "A1",
    "ex": "My brother and I went to the same school.",
    "exEs": "Ejemplo contextualizado de la palabra 'school' (facultad)."
  },
  {
    "r": 158,
    "w": "through",
    "pos": "Verbo",
    "es": "mediante",
    "lvl": "A1",
    "ex": "Put the coffee in the filter and let the water run through.",
    "exEs": "Ejemplo contextualizado de la palabra 'through' (mediante)."
  },
  {
    "r": 159,
    "w": "each",
    "pos": "Verbo",
    "es": "cada",
    "lvl": "A1",
    "ex": "Each answer is worth 20 points.",
    "exEs": "Ejemplo contextualizado de la palabra 'each' (cada)."
  },
  {
    "r": 160,
    "w": "links",
    "pos": "Sustantivo",
    "es": "enlace , hipervínculo (pl.)",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'links' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'links' (enlace , hipervínculo (pl.)) de forma efectiva en la redacción académica."
  },
  {
    "r": 161,
    "w": "she",
    "pos": "Pronombre",
    "es": "ella",
    "lvl": "A1",
    "ex": "She completed her medical residency with honors.",
    "exEs": "Ella completó su residencia médica con honores."
  },
  {
    "r": 162,
    "w": "review",
    "pos": "Sustantivo",
    "es": "crítica",
    "lvl": "A2",
    "ex": "a book review",
    "exEs": "Ejemplo contextualizado de la palabra 'review' (crítica)."
  },
  {
    "r": 163,
    "w": "years",
    "pos": "Sustantivo",
    "es": "año (pl.)",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'years' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'years' (año (pl.)) de forma efectiva en la redacción académica."
  },
  {
    "r": 164,
    "w": "order",
    "pos": "Sustantivo",
    "es": "orden , mandato",
    "lvl": "A1",
    "ex": "in… order, The names are listed in alphabetical order.",
    "exEs": "Ejemplo contextualizado de la palabra 'order' (orden , mandato)."
  },
  {
    "r": 165,
    "w": "very",
    "pos": "Adjetivo",
    "es": "muy",
    "lvl": "B2",
    "ex": "He might be phoning her at this very moment.",
    "exEs": "Ejemplo contextualizado de la palabra 'very' (muy)."
  },
  {
    "r": 166,
    "w": "privacy",
    "pos": "Sustantivo",
    "es": "intimidad",
    "lvl": "B2",
    "ex": "She was longing for some peace and privacy.",
    "exEs": "Ejemplo contextualizado de la palabra 'privacy' (intimidad)."
  },
  {
    "r": 167,
    "w": "book",
    "pos": "Sustantivo",
    "es": "libro",
    "lvl": "A1",
    "ex": "His desk was covered with piles of books.",
    "exEs": "Ejemplo contextualizado de la palabra 'book' (libro)."
  },
  {
    "r": 168,
    "w": "items",
    "pos": "Sustantivo",
    "es": "ítem (pl.)",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'items' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'items' (ítem (pl.)) de forma efectiva en la redacción académica."
  },
  {
    "r": 169,
    "w": "company",
    "pos": "Sustantivo",
    "es": "compañía",
    "lvl": "A1",
    "ex": "insurance/oil/tech/technology/pharmaceutical companies",
    "exEs": "Ejemplo contextualizado de la palabra 'company' (compañía)."
  },
  {
    "r": 170,
    "w": "read",
    "pos": "Verbo",
    "es": "leer",
    "lvl": "A1",
    "ex": "She's still learning to read.",
    "exEs": "Ejemplo contextualizado de la palabra 'read' (leer)."
  },
  {
    "r": 171,
    "w": "group",
    "pos": "Sustantivo",
    "es": "grupo",
    "lvl": "A1",
    "ex": "group of somebody/something, a group of people/students/friends",
    "exEs": "Ejemplo contextualizado de la palabra 'group' (grupo)."
  },
  {
    "r": 172,
    "w": "sex",
    "pos": "Sustantivo",
    "es": "sexo , género",
    "lvl": "B1",
    "ex": "How can you tell what sex a fish is?",
    "exEs": "Ejemplo contextualizado de la palabra 'sex' (sexo , género)."
  },
  {
    "r": 173,
    "w": "need",
    "pos": "Sustantivo",
    "es": "necesidad , necesidades",
    "lvl": "A2",
    "ex": "to satisfy/meet/fulfil a need",
    "exEs": "Ejemplo contextualizado de la palabra 'need' (necesidad , necesidades)."
  },
  {
    "r": 174,
    "w": "many",
    "pos": "Sustantivo",
    "es": "muchos , muchas",
    "lvl": "A1",
    "ex": "We don't have very many copies left.",
    "exEs": "Ejemplo contextualizado de la palabra 'many' (muchos , muchas)."
  },
  {
    "r": 175,
    "w": "user",
    "pos": "Sustantivo",
    "es": "usuario",
    "lvl": "A2",
    "ex": "The student learned how to use the word 'user' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'user' (usuario) de forma efectiva en la redacción académica."
  },
  {
    "r": 176,
    "w": "said",
    "pos": "Sustantivo",
    "es": "Said",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'said' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'said' (Said) de forma efectiva en la redacción académica."
  },
  {
    "r": 177,
    "w": "de",
    "pos": "Sustantivo",
    "es": "De",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'de' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'de' (De) de forma efectiva en la redacción académica."
  },
  {
    "r": 178,
    "w": "does",
    "pos": "Sustantivo",
    "es": "cierva , cabra (pl.)",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'does' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'does' (cierva , cabra (pl.)) de forma efectiva en la redacción académica."
  },
  {
    "r": 179,
    "w": "set",
    "pos": "Sustantivo",
    "es": "listo",
    "lvl": "B1",
    "ex": "a set of six chairs",
    "exEs": "Ejemplo contextualizado de la palabra 'set' (listo)."
  },
  {
    "r": 180,
    "w": "under",
    "pos": "Verbo",
    "es": "bajo",
    "lvl": "A1",
    "ex": "He pulled up the covers and crawled under.",
    "exEs": "Ejemplo contextualizado de la palabra 'under' (bajo)."
  },
  {
    "r": 181,
    "w": "general",
    "pos": "Adjetivo",
    "es": "general",
    "lvl": "A2",
    "ex": "books of general interest (= of interest to most people)",
    "exEs": "Ejemplo contextualizado de la palabra 'general' (general)."
  },
  {
    "r": 182,
    "w": "research",
    "pos": "Sustantivo",
    "es": "investigación",
    "lvl": "A2",
    "ex": "scientific/medical/academic research",
    "exEs": "Ejemplo contextualizado de la palabra 'research' (investigación)."
  },
  {
    "r": 183,
    "w": "university",
    "pos": "Sustantivo",
    "es": "universidad",
    "lvl": "A1",
    "ex": "Is there a university in this town?",
    "exEs": "Ejemplo contextualizado de la palabra 'university' (universidad)."
  },
  {
    "r": 184,
    "w": "january",
    "pos": "Sustantivo",
    "es": "enero",
    "lvl": "A1",
    "ex": "She was born in January.",
    "exEs": "Ejemplo contextualizado de la palabra 'january' (enero)."
  },
  {
    "r": 185,
    "w": "mail",
    "pos": "Sustantivo",
    "es": "correo electrónico , mail",
    "lvl": "A2",
    "ex": "a mail service/train/van",
    "exEs": "Ejemplo contextualizado de la palabra 'mail' (correo electrónico , mail)."
  },
  {
    "r": 186,
    "w": "full",
    "pos": "Adjetivo",
    "es": "completo",
    "lvl": "A1",
    "ex": "a full bottle of wine",
    "exEs": "Ejemplo contextualizado de la palabra 'full' (completo)."
  },
  {
    "r": 187,
    "w": "map",
    "pos": "Sustantivo",
    "es": "plano",
    "lvl": "A1",
    "ex": "a map of France",
    "exEs": "Ejemplo contextualizado de la palabra 'map' (plano)."
  },
  {
    "r": 188,
    "w": "reviews",
    "pos": "Sustantivo",
    "es": "crítica (pl.)",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'reviews' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'reviews' (crítica (pl.)) de forma efectiva en la redacción académica."
  },
  {
    "r": 189,
    "w": "program",
    "pos": "Sustantivo",
    "es": "programa",
    "lvl": "A2",
    "ex": "You'll need to download and install the program on your computer.",
    "exEs": "Ejemplo contextualizado de la palabra 'program' (programa)."
  },
  {
    "r": 190,
    "w": "life",
    "pos": "Sustantivo",
    "es": "vida",
    "lvl": "A1",
    "ex": "This could mean the difference between life and death.",
    "exEs": "Ejemplo contextualizado de la palabra 'life' (vida)."
  },
  {
    "r": 191,
    "w": "know",
    "pos": "Verbo",
    "es": "saber, conocer",
    "lvl": "A1",
    "ex": "Do you know how to derive this trigonometric formula?",
    "exEs": "¿Sabes cómo derivar esta fórmula trigonométrica?"
  },
  {
    "r": 192,
    "w": "games",
    "pos": "Sustantivo",
    "es": "juego (pl.)",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'games' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'games' (juego (pl.)) de forma efectiva en la redacción académica."
  },
  {
    "r": 193,
    "w": "way",
    "pos": "Sustantivo",
    "es": "camino, manera, forma",
    "lvl": "A1",
    "ex": "Consistent daily practice is the best way to expand vocabulary.",
    "exEs": "La práctica diaria constante es la mejor manera de expandir el vocabulario."
  },
  {
    "r": 194,
    "w": "days",
    "pos": "Sustantivo",
    "es": "días",
    "lvl": "A1",
    "ex": "The student learned how to use the word 'days' effectively in academic writing.",
    "exEs": "El estudiante aprendió a utilizar la palabra 'days' (días) de forma efectiva en la redacción académica."
  },
  {
    "r": 195,
    "w": "management",
    "pos": "Sustantivo",
    "es": "administración , gestión",
    "lvl": "B1",
    "ex": "a career in management",
    "exEs": "Ejemplo contextualizado de la palabra 'management' (administración , gestión)."
  },
  {
    "r": 196,
    "w": "part",
    "pos": "Sustantivo",
    "es": "categoría , parte",
    "lvl": "A1",
    "ex": "We spent part of the time in the museum.",
    "exEs": "Ejemplo contextualizado de la palabra 'part' (categoría , parte)."
  },
  {
    "r": 197,
    "w": "could",
    "pos": "Verbo Modal",
    "es": "podría, pudo",
    "lvl": "A2",
    "ex": "Could you please explain that phonetic distinction once more?",
    "exEs": "¿Podrías por favor explicar esa distinción fonética una vez más?"
  },
  {
    "r": 198,
    "w": "great",
    "pos": "Adjetivo",
    "es": "gran, grande",
    "lvl": "A1",
    "ex": "He's a great bloke.",
    "exEs": "Ejemplo contextualizado de la palabra 'great' (gran, grande)."
  },
  {
    "r": 199,
    "w": "united",
    "pos": "Adjetivo",
    "es": "unión",
    "lvl": "A2",
    "ex": "the United States of America",
    "exEs": "Ejemplo contextualizado de la palabra 'united' (unión)."
  },
  {
    "r": 200,
    "w": "hotel",
    "pos": "Sustantivo",
    "es": "hotel , albergue",
    "lvl": "A1",
    "ex": "a two-star/five-star, etc. hotel",
    "exEs": "Ejemplo contextualizado de la palabra 'hotel' (hotel , albergue)."
  }
];

// Memoria caché del catálogo completo
let cachedFull10kWords: TopWord[] | null = null;

/**
 * Carga de forma asincrónica y en segundo plano el catálogo completo de 10,000 palabras desde /data/ingles/top10000Words.json.
 */
export async function fetchTop10000Words(): Promise<TopWord[]> {
  if (cachedFull10kWords && cachedFull10kWords.length === 10000) {
    return cachedFull10kWords;
  }

  try {
    const response = await fetch('/data/ingles/top10000Words.json');
    if (!response.ok) {
      throw new Error(`HTTP error loading 10k words: ${response.status}`);
    }
    const data: TopWord[] = await response.json();
    if (Array.isArray(data) && data.length > 0) {
      cachedFull10kWords = data;
      return data;
    }
  } catch (err) {
    console.warn('[Top10kWords] Error fetching full JSON, using initial sync cache:', err);
  }

  return INITIAL_TOP_WORDS;
}

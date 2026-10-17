# scripts/generate_lessons_data.py
# -*- coding: utf-8 -*-
"""
Construye src/data/languages/englishLessons.ts con las 120 lecciones estructuradas (20 clases completas por nivel A1 a C2).
"""

import os
import json

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TARGET_FILE = os.path.join(ROOT_DIR, "src", "data", "languages", "englishLessons.ts")

def get_a1_lessons():
    return [
        {
            "id": "a1_lesson_01",
            "title": "Clase 01: El Verbo To Be (Presente: am, is, are)",
            "level": "A1",
            "category": "Verbos Copulativos & Auxiliares",
            "summary": "El verbo to be expresa identidad, nacionalidad, profesión, edad, emociones y ubicación física en presente.",
            "formula": "Afirmativo: S + am/is/are. Negativo: S + am/is/are + not. Pregunta: Am/Is/Are + S?",
            "rules": [
                "I se conjuga con AM (contracción: I'm).",
                "He, She, It se conjugan con IS (contracciones: He's, She's, It's).",
                "We, You, They se conjugan con ARE (contracciones: We're, You're, They're).",
                "La edad en inglés se expresa con TO BE, nunca con have: 'I am 21 years old' (Tengo 21 años).",
                "En respuestas cortas afirmativas nunca se contrae: 'Yes, I am' (correcto), no 'Yes, I'm'."
            ],
            "examplesUS": ["I am a student from California and my brother is an engineer in New York."],
            "examplesUK": ["I am a university student from London and my sister is a doctor in Manchester."],
            "commonMistakes": [
                "Decir 'I have 20 years' en vez de 'I am 20 years old'.",
                "Omitir el sujeto impersonal: decir 'Is cold today' en vez de 'It is cold today'."
            ],
            "referenceLink": "https://agendaweb.org/verbs/to-be-exercises.html"
        },
        {
            "id": "a1_lesson_02",
            "title": "Clase 02: Pronombres Personales de Sujeto y Objeto",
            "level": "A1",
            "category": "Pronombres & Sintaxis",
            "summary": "Los pronombres de sujeto realizan la acción; los pronombres de objeto la reciben tras verbos o preposiciones.",
            "formula": "Sujeto + Verbo + Objeto: I see him / They speak with us.",
            "rules": [
                "Pronombres de sujeto: I, you, he, she, it, we, they.",
                "Pronombres de objeto: me, you, him, her, it, us, them.",
                "Tras preposiciones siempre se usa pronombre de objeto: 'Listen to me', 'Look at them'.",
                "En lenguaje coloquial se responde: '¿Who is it? - It's me' (informal) o 'It is I' (formal clásico)."
            ],
            "examplesUS": ["My professor called me yesterday and gave him the research assignment."],
            "examplesUK": ["My tutor rang me yesterday and gave him the coursework brief."],
            "commonMistakes": [
                "Usar pronombre de sujeto tras preposición: decir 'between you and I' (debe ser 'between you and me').",
                "Confundir 'they' (sujeto) con 'them' (objeto): decir 'The teacher helped they'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/pronouns.htm"
        },
        {
            "id": "a1_lesson_03",
            "title": "Clase 03: Artículos A, AN, THE y Fonética de H y U",
            "level": "A1",
            "category": "Determinantes & Fonética",
            "summary": "La selección de A o AN depende exclusivamente del sonido inicial de la palabra siguiente, no de la grafía.",
            "formula": "A + sonido consonante / AN + sonido vocal / THE + específico singular o plural.",
            "rules": [
                "Usa 'a' ante sonido consonante: a book, a pencil, a desk.",
                "Usa 'an' ante sonido vocal: an apple, an umbrella, an egg.",
                "H muda exige AN: an hour, an honest man, an honor.",
                "H sonora aspirada exige A: a house, a hospital, a hotel.",
                "U semiconsonántica /juː/ exige A: a university, a European city.",
                "THE no se emplea con sustantivos plurales para generalizaciones: 'Dogs are loyal', no 'The dogs are loyal'."
            ],
            "examplesUS": ["He rented an apartment near a historic university campus in Boston."],
            "examplesUK": ["He rented a flat near a historic university in Oxford."],
            "commonMistakes": [
                "Escribir 'a hour' creyendo que toda H es consonante.",
                "Escribir 'an university' ignorando el sonido inicial /j/."
            ],
            "referenceLink": "https://agendaweb.org/grammar/articles-exercises.html"
        },
        {
            "id": "a1_lesson_04",
            "title": "Clase 04: Demostrativos: This, That, These, Those",
            "level": "A1",
            "category": "Determinantes & Deixis",
            "summary": "Indican cercanía o lejanía física y temporal respecto al hablante en singular y plural.",
            "formula": "Cerca: This / These. Lejos: That / Those.",
            "rules": [
                "This (singular cercano) y That (singular lejano).",
                "These (plural cercano, fonética /ðiːz/) y Those (plural lejano).",
                "En llamadas telefónicas se dice 'This is Mark' (nunca 'I am Mark')."
            ],
            "examplesUS": ["This laptop right here is new, but that monitor over there is old."],
            "examplesUK": ["This laptop here is new, but that screen over there is old."],
            "commonMistakes": [
                "Confundir 'this' (/ðɪs/) con 'these' (/ðiːz/).",
                "Usar 'these' con sustantivos en singular."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/dem_pron.htm"
        },
        {
            "id": "a1_lesson_05",
            "title": "Clase 05: Adjetivos Posesivos vs. Pronombres Posesivos",
            "level": "A1",
            "category": "Posesión & Pronombres",
            "summary": "Los adjetivos posesivos acompañan sustantivos; los pronombres posesivos los sustituyen por completo.",
            "formula": "Adjetivo + Sustantivo: my book / Pronombre Autónomo: The book is mine.",
            "rules": [
                "Adjetivos: my, your, his, her, its, our, their (+ sustantivo obligatorio).",
                "Pronombres: mine, yours, his, hers, ours, theirs (sin sustantivo posterior).",
                "Its (posesivo sin apóstrofe) vs. It's (contracción de it is)."
            ],
            "examplesUS": ["This is our classroom, and that office down the hallway is theirs."],
            "examplesUK": ["This is our lecture room, and that office down the corridor is theirs."],
            "commonMistakes": [
                "Escribir 'it's' para posesión ('The dog wagged it's tail').",
                "Colocar sustantivo tras pronombre posesivo ('mine book')."
            ],
            "referenceLink": "https://agendaweb.org/grammar/possessive-pronouns-exercises.html"
        },
        {
            "id": "a1_lesson_06",
            "title": "Clase 06: El Genitivo Sajón ('s y s')",
            "level": "A1",
            "category": "Morfología & Posesión",
            "summary": "Mecanismo conciso para indicar posesión, autoría o parentesco con personas o animales.",
            "formula": "Poseedor + 's + Objeto: John's car / The girls' school.",
            "rules": [
                "Singular: añade 's (David's apartment).",
                "Plural regular en -s: añade solo el apóstrofe al final (my parents' house).",
                "Plural irregular sin -s: añade 's (the children's room, women's rights)."
            ],
            "examplesUS": ["Sarah's car is parked outside her parents' garage."],
            "examplesUK": ["Sarah's car is parked outside her parents' garden."],
            "commonMistakes": [
                "Traducir literalmente con of ('the car of Sarah').",
                "Poner apóstrofe antes de s en plurales regulares ('student's books' para varios)."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/genitive.htm"
        },
        {
            "id": "a1_lesson_07",
            "title": "Clase 07: Present Simple: Reglas de la 3ª Persona (-s, -es, -ies)",
            "level": "A1",
            "category": "Tiempos Verbales Presentes",
            "summary": "El Present Simple describe hábitos, rutinas, verdades universales y hechos permanentes.",
            "formula": "He / She / It + Verbo con desinencia -s / -es / -ies.",
            "rules": [
                "Regla general: añade -s (work -> works, eat -> eats).",
                "Terminaciones en -ch, -sh, -ss, -x, -z, -o: añaden -es (watches, washes, goes, fixes).",
                "Consonante + y: cambia a -ies (study -> studies, fly -> flies).",
                "Vocal + y: añade solo -s sin mutación (play -> plays, enjoy -> enjoys)."
            ],
            "examplesUS": ["My brother studies medicine and watches movies on weekends."],
            "examplesUK": ["My brother studies medicine and watches films at weekends."],
            "commonMistakes": [
                "Olvidar la -s en tercera persona ('He work here').",
                "Escribir 'plaies' en lugar de 'plays'."
            ],
            "referenceLink": "https://agendaweb.org/verbs/present_simple-exercises.html"
        },
        {
            "id": "a1_lesson_08",
            "title": "Clase 08: Present Simple: Auxiliares DO y DOES (Negación y Preguntas)",
            "level": "A1",
            "category": "Auxiliares & Sintaxis",
            "summary": "Para negar y preguntar en Present Simple es obligatorio emplear los auxiliares DO y DOES.",
            "formula": "Negación: S + don't / doesn't + V(base). Pregunta: Do / Does + S + V(base)?",
            "rules": [
                "DO / DON'T para I, you, we, they.",
                "DOES / DOESN'T para he, she, it.",
                "REGLA CRUCIAL: al usar DOES o DOESN'T, el verbo principal VA EN FORMA BASE (pierde la -s)."
            ],
            "examplesUS": ["Does your sister live in New York? No, she doesn't. She lives in Chicago."],
            "examplesUK": ["Does your sister live in London? No, she doesn't. She lives in Bristol."],
            "commonMistakes": [
                "Mantener la -s con el auxiliar: 'He doesn't works' (debe ser 'He doesn't work').",
                "Preguntar sin auxiliar: 'Lives he here?'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/sim_pres.htm"
        },
        {
            "id": "a1_lesson_09",
            "title": "Clase 09: Adverbios de Frecuencia y su Posición Exacta",
            "level": "A1",
            "category": "Adverbios & Sintaxis",
            "summary": "Indican con qué frecuencia se ejecuta una acción (always, usually, often, sometimes, rarely, never).",
            "formula": "Antes de verbos regulares / Después del verbo TO BE / Entre auxiliar y verbo.",
            "rules": [
                "Posición habitual: antes del verbo principal: 'I always eat breakfast at 7'.",
                "Con TO BE: inmediatamente después: 'She is always punctual'.",
                "Never y rarely son negativos por sí mismos; nunca llevan don't: 'I never smoke'."
            ],
            "examplesUS": ["We usually take the subway to work and we are never late."],
            "examplesUK": ["We usually take the underground to work and we are never late."],
            "commonMistakes": [
                "Poner el adverbio antes de to be: 'He always is happy' (debe ser 'He is always happy').",
                "Doble negación con never: 'I don't never go'."
            ],
            "referenceLink": "https://agendaweb.org/grammar/adverbs-of-frequency-exercises.html"
        },
        {
            "id": "a1_lesson_10",
            "title": "Clase 10: Preposiciones de Tiempo: AT, ON, IN (US vs. UK)",
            "level": "A1",
            "category": "Preposiciones Temporales",
            "summary": "La pirámide del tiempo organiza los periodos de lo específico a lo genérico.",
            "formula": "AT (horas e instantes precisos) / ON (días y fechas) / IN (meses, años, estaciones).",
            "rules": [
                "AT: horas (at 5 PM), at noon, at midnight, at night.",
                "ON: días de la semana (on Monday), fechas (on May 4th).",
                "IN: meses (in August), años (in 2026), estaciones (in winter), partes del día (in the morning).",
                "Diferencia US vs UK: 'on the weekend' (US) vs. 'at the weekend' (UK)."
            ],
            "examplesUS": ["Our exam starts at 8:00 AM on Monday and we relax on the weekend."],
            "examplesUK": ["Our exam starts at 8:00 AM on Monday and we relax at the weekend."],
            "commonMistakes": [
                "Decir 'in Monday' o 'at July'.",
                "Confundir 'at night' (rutina general) con 'in the night'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/preposition_time.htm"
        },
        {
            "id": "a1_lesson_11",
            "title": "Clase 11: Preposiciones de Lugar: IN, ON, AT, UNDER, NEXT TO",
            "level": "A1",
            "category": "Preposiciones Espaciales",
            "summary": "Expresan ubicación física estática en una, dos o tres dimensiones.",
            "formula": "Sujeto + be + Preposición + Lugar.",
            "rules": [
                "IN: dentro de un espacio o volumen: in the box, in the room, in Madrid.",
                "ON: sobre una superficie de apoyo: on the desk, on the wall, on the 3rd floor.",
                "AT: punto de encuentro o evento: at the door, at the airport, at a concert.",
                "UNDER: debajo de. NEXT TO / BESIDE: al lado de."
            ],
            "examplesUS": ["The keys are on the kitchen table and the car is parked at the curb."],
            "examplesUK": ["The keys are on the kitchen table and the car is parked at the pavement."],
            "commonMistakes": [
                "Decir 'on the room' en vez de 'in the room'.",
                "Confundir 'at the bus stop' con 'in the bus'."
            ],
            "referenceLink": "https://agendaweb.org/grammar/prepositions-exercises.html"
        },
        {
            "id": "a1_lesson_12",
            "title": "Clase 12: Construcciones Existenciales: There is / There are",
            "level": "A1",
            "category": "Existenciales & Sintaxis",
            "summary": "Expresan la existencia de personas o cosas en un lugar (equivalente al 'hay' español).",
            "formula": "There is + singular o incontable / There are + plural.",
            "rules": [
                "There is (There's) con sustantivos singulares contables y con incontables.",
                "There are con sustantivos plurales: 'There are two banks on this street'.",
                "Negación: There isn't / There aren't. Pregunta: Is there...? / Are there...?"
            ],
            "examplesUS": ["There is a modern coffee shop downtown and there are many parks in the city."],
            "examplesUK": ["There is a traditional tea room in the city centre and there are many parks nearby."],
            "commonMistakes": [
                "Usar have para existencia: 'Have three books on the table' (debe ser 'There are three books').",
                "Usar 'there is' con plurales."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/there_is_are.htm"
        },
        {
            "id": "a1_lesson_13",
            "title": "Clase 13: Plurales Regulares e Irregulares",
            "level": "A1",
            "category": "Morfología Nominal",
            "summary": "Reglas de adición de sufijos y catálogo de plurales que transforman su raíz interna.",
            "formula": "Regular: +s / +es / +ies / +ves. Irregular: cambio de raíz vocálica.",
            "rules": [
                "General: añade -s (book -> books).",
                "Tras -ch, -sh, -s, -x, -z: añade -es (box -> boxes, church -> churches).",
                "Consonante + y: cambia a -ies (city -> cities).",
                "Terminación en -f / -fe: cambia a -ves (knife -> knives, wife -> wives).",
                "Irregulares: man/men, woman/women, child/children, foot/feet, tooth/teeth, mouse/mice, person/people."
            ],
            "examplesUS": ["The women and children visited several historic cities in the United States."],
            "examplesUK": ["The women and children visited several historic cities in the United Kingdom."],
            "commonMistakes": [
                "Añadir -s a un plural irregular: decir 'peoples' o 'childrens'.",
                "Escribir 'knifis' en vez de 'knives'."
            ],
            "referenceLink": "https://agendaweb.org/grammar/plural-exercises.html"
        },
        {
            "id": "a1_lesson_14",
            "title": "Clase 14: Verbo Modal CAN: Habilidad y Peticiones",
            "level": "A1",
            "category": "Verbos Modales",
            "summary": "Expresa capacidad física o mental y sirve para formular peticiones informales.",
            "formula": "Afirmativo: S + can + V(base). Negativo: S + cannot (can't) + V(base). Pregunta: Can + S + V(base)?",
            "rules": [
                "CAN no añade nunca -s con he, she, it: 'She can swim' (nunca 'She cans').",
                "Va seguido de infinitivo SIN TO: 'I can play guitar' (no 'I can to play').",
                "La negación completa se escribe junta: CANNOT (contracción: can't)."
            ],
            "examplesUS": ["He can speak three languages fluently and can drive a commercial truck."],
            "examplesUK": ["He can speak three languages fluently and can drive a lorry."],
            "commonMistakes": [
                "Poner 'to' tras can: 'He can to run' (debe ser 'He can run').",
                "Añadir -s en tercera persona: 'He cans'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/can.htm"
        },
        {
            "id": "a1_lesson_15",
            "title": "Clase 15: Present Continuous I: Formación del Gerundio (-ING)",
            "level": "A1",
            "category": "Tiempos Verbales Continuos",
            "summary": "Reglas ortográficas para transformar el infinitivo en participio de presente o gerundio.",
            "formula": "Sujeto + am/is/are + Verbo-ing.",
            "rules": [
                "General: añade -ing sin alterar la base (read -> reading).",
                "Terminados en -e muda: eliminan la -e (write -> writing, drive -> driving).",
                "Monosílabos con C-V-C: duplican consonante final (run -> running, sit -> sitting).",
                "Terminados en -ie: cambian a -ying (lie -> lying, die -> dying)."
            ],
            "examplesUS": ["She is writing a detailed email to her department manager right now."],
            "examplesUK": ["She is writing a detailed letter to her department director at present."],
            "commonMistakes": [
                "Mantener la -e muda: escribir 'writeing' o 'comeing'.",
                "No duplicar consonante en monosílabos: escribir 'runing'."
            ],
            "referenceLink": "https://agendaweb.org/verbs/present-continuous-exercises.html"
        },
        {
            "id": "a1_lesson_16",
            "title": "Clase 16: Present Continuous II: En el Momento vs. Verbos de Estado",
            "level": "A1",
            "category": "Semántica & Tiempos Verbales",
            "summary": "El presente continuo describe acciones en progreso, pero los verbos de estado (Stative Verbs) rechazan el gerundio.",
            "formula": "Acción dinámica: am/is/are + -ing. Verbo de estado: Present Simple.",
            "rules": [
                "Acciones en progreso visible: 'Look! They are playing soccer'.",
                "STATIVE VERBS (estado mental, emoción, posesión): know, believe, understand, love, hate, want, need, belong.",
                "Nunca se dice 'I am knowing the answer', sino 'I know the answer'."
            ],
            "examplesUS": ["They are studying in the library right now because they want good grades."],
            "examplesUK": ["They are studying in the library at the moment because they want top marks."],
            "commonMistakes": [
                "Usar -ing con verbos de estado: 'I am wanting a coffee' (debe ser 'I want a coffee').",
                "Omitir el verbo to be: 'She working'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/pres_pro.htm"
        },
        {
            "id": "a1_lesson_17",
            "title": "Clase 17: Pronombres Interrogativos WH- (Question Words)",
            "level": "A1",
            "category": "Sintaxis & Preguntas",
            "summary": "Palabras para solicitar información precisa sobre personas, objetos, lugares, tiempo o razones.",
            "formula": "WH- Word + Auxiliar (do/does/is/are) + Sujeto + Verbo Principal?",
            "rules": [
                "WHO (persona), WHAT (cosa/acción), WHERE (lugar), WHEN (tiempo).",
                "WHY (razón -> respuesta con Because), WHOSE (posesión), HOW (modo/grado).",
                "Siempre se requiere auxiliar tras la partícula interrogativa."
            ],
            "examplesUS": ["Where do you work and what time does your shift end?"],
            "examplesUK": ["Where do you work and what time does your shift finish?"],
            "commonMistakes": [
                "Omitir el auxiliar: decir 'Where you live?' en vez de 'Where do you live?'.",
                "Confundir WHOSE con WHO'S."
            ],
            "referenceLink": "https://agendaweb.org/grammar/wh-questions-exercises.html"
        },
        {
            "id": "a1_lesson_18",
            "title": "Clase 18: Verbos de Preferencia: Like, Love, Hate + Gerundio",
            "level": "A1",
            "category": "Patrones Verbales",
            "summary": "Estructuras para manifestar aficiones, gustos y desagrados complementados por formas verbales.",
            "formula": "Sujeto + like / love / enjoy / hate + Verbo-ing: I like playing tennis.",
            "rules": [
                "Enjoy y mind exigen OBLIGATORIAMENTE gerundio: 'I enjoy swimming'.",
                "Like, love, hate, prefer admiten gerundio o infinitivo con ligera diferencia de matiz.",
                "WOULD LIKE exige infinitivo con to: 'I would like to order dinner' (nunca ordering)."
            ],
            "examplesUS": ["I enjoy listening to jazz music and I love reading historical fiction."],
            "examplesUK": ["I enjoy listening to classical music and I love reading historical novels."],
            "commonMistakes": [
                "Usar infinitivo tras enjoy: decir 'I enjoy to swim' (debe ser 'I enjoy swimming').",
                "Usar gerundio con would like: 'I'd like having'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/gerund_infinitive.htm"
        },
        {
            "id": "a1_lesson_19",
            "title": "Clase 19: El Modo Imperativo para Órdenes e Instrucciones",
            "level": "A1",
            "category": "Modo & Instrucciones",
            "summary": "El imperativo da órdenes, instrucciones, directivas y señales. Carece de sujeto explícito.",
            "formula": "Afirmativo: Verbo Base. Negativo: DON'T + Verbo Base.",
            "rules": [
                "Forma afirmativa: usa el infinitivo sin to: 'Open the window', 'Sit down'.",
                "Forma negativa: siempre inicia con DON'T: 'Don't shout', 'Don't forget your keys'.",
                "Para añadir cortesía se incluye PLEASE al principio o al final de la frase.",
                "Para sugerencias inclusivas se usa LET'S: 'Let's begin the exam'."
            ],
            "examplesUS": ["Please turn off your cell phone and follow the flight attendant's directions."],
            "examplesUK": ["Please switch off your mobile phone and follow the cabin crew's instructions."],
            "commonMistakes": [
                "Poner sujeto explícito: decir 'You open the door!' en directivas generales.",
                "Usar NOT en lugar de DON'T: 'Not touch that'."
            ],
            "referenceLink": "https://agendaweb.org/verbs/imperative-exercises.html"
        },
        {
            "id": "a1_lesson_20",
            "title": "Clase 20: Sintaxis de la Oración (S-V-O) y Respuestas Cortas",
            "level": "A1",
            "category": "Sintaxis Estructural",
            "summary": "El inglés exige siempre sujeto explícito y sigue un orden estricto Sujeto-Verbo-Objeto (SVO).",
            "formula": "Sujeto Obligatorio + Verbo + Objeto + Lugar + Tiempo.",
            "rules": [
                "El inglés carece de sujeto tácito o nulo: 'It is raining' (nunca 'Is raining').",
                "Orden estándar: Sujeto + Verbo + Objeto + Modo + Lugar + Tiempo.",
                "Respuestas cortas afirmativas: usan auxiliar sin contraer ('Yes, I do', 'Yes, he is').",
                "Respuestas cortas negativas: usan contracción ('No, I don't', 'No, he isn't')."
            ],
            "examplesUS": ["We completed the scientific project in the library yesterday afternoon."],
            "examplesUK": ["We completed the scientific assignment in the library yesterday afternoon."],
            "commonMistakes": [
                "Omitir el sujeto impersonal: decir 'Is important to know' (debe ser 'It is important').",
                "Contraer respuestas cortas afirmativas: 'Yes, I'm'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/word_order.htm"
        }
    ]

print("get_a1_lessons configured.")

def get_a2_lessons():
    return [
        {
            "id": "a2_lesson_01",
            "title": "Clase 01: Past Simple: Verbos Regulares y Ortografía de -ED",
            "level": "A2",
            "category": "Tiempos Verbales Pasados",
            "summary": "Expresa acciones terminadas en un momento específico del pasado (yesterday, last night, two weeks ago, in 2020).",
            "formula": "Sujeto + Verbo regular con terminación -ed.",
            "rules": [
                "Regla general: añade -ed a la forma base (walk -> walked, clean -> cleaned).",
                "Terminados en -e muda: añaden solo -d (live -> lived, smile -> smiled).",
                "Consonante + y: cambia a -ied (study -> studied, cry -> cried).",
                "Monosílabos y acento en última sílaba con C-V-C: duplican consonante final (stop -> stopped, plan -> planned)."
            ],
            "examplesUS": ["Yesterday I traveled to Chicago and visited my former college roommate."],
            "examplesUK": ["Yesterday I travelled to London and visited my former university flatmate."],
            "commonMistakes": [
                "Duplicar el pasado con el auxiliar: decir 'I didn't went' (debe ser 'I didn't go').",
                "Escribir 'plaied' o 'stoped' con errores ortográficos."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/sim_past.htm"
        },
        {
            "id": "a2_lesson_02",
            "title": "Clase 02: Past Simple: Las 3 Reglas Fonéticas de -ED (/t/, /d/, /ɪd/)",
            "level": "A2",
            "category": "Fonética & Morfología",
            "summary": "La pronunciación de la terminación -ed está regida por la sonoridad del fonema final de la base verbal.",
            "formula": "/ɪd/ tras /t, d/ | /t/ tras consonantes sordas | /d/ tras consonantes sonoras y vocales.",
            "rules": [
                "Sonido /ɪd/ (sílaba extra): ÚNICAMENTE tras sonidos /t/ o /d/ (wanted, decided, started, needed).",
                "Sonido /t/ (sordo, sin sílaba extra): tras /p, k, f, s, ʃ, tʃ/ (helped, looked, laughed, washed, watched).",
                "Sonido /d/ (sonoro, sin sílaba extra): tras vocales y sonidos sonoros /b, g, v, z, m, n, l, r/ (played, cleaned, lived)."
            ],
            "examplesUS": ["He wanted to leave early, so he checked his watch and walked to the bus."],
            "examplesUK": ["He wanted to leave early, so he checked his watch and walked to the bus."],
            "commonMistakes": [
                "Pronunciar -ed como sílaba extra siempre (decir 'work-ed' con dos sílabas en vez de /wɜːkt/).",
                "Confundir la pronunciación de 'decided' (/dɪˈsaɪdɪd/) con formas monosilábicas."
            ],
            "referenceLink": "https://agendaweb.org/verbs/past_simple-exercises.html"
        },
        {
            "id": "a2_lesson_03",
            "title": "Clase 03: Past Simple: Verbos Irregulares y Auxiliar DID / DIDN'T",
            "level": "A2",
            "category": "Verbos Irregulares & Auxiliares",
            "summary": "Los verbos irregulares no siguen la regla de -ed; para preguntas y negaciones se emplea DID / DIDN'T con forma base.",
            "formula": "Negativo: S + didn't + V(base). Pregunta: Did + S + V(base)?",
            "rules": [
                "Verbos clave: go -> went, see -> saw, buy -> bought, have -> had, come -> came, take -> took, make -> made.",
                "REGLA DE ORO: DID y DIDN'T absorben el pasado; el verbo principal vuelve obligatoriamente a su forma infinitiva base.",
                "Respuestas cortas: 'Yes, I did' / 'No, I didn't'."
            ],
            "examplesUS": ["Did you buy that new cell phone yesterday? No, I didn't. I bought a tablet."],
            "examplesUK": ["Did you buy that new mobile phone yesterday? No, I didn't. I bought a tablet."],
            "commonMistakes": [
                "Decir 'Did you went?' o 'I didn't saw him' (debe ser 'Did you go?' y 'I didn't see him').",
                "Confundir el pasado de buy (bought) con el de bring (brought)."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/irregular_verbs.htm"
        },
        {
            "id": "a2_lesson_04",
            "title": "Clase 04: Past Simple del Verbo To Be: WAS y WERE",
            "level": "A2",
            "category": "Verbos Copulativos Pasados",
            "summary": "WAS y WERE son las formas pasadas del verbo to be; no requieren auxiliar did para negar o preguntar.",
            "formula": "I/He/She/It + WAS (wasn't) | We/You/They + WERE (weren't).",
            "rules": [
                "I, he, she, it se conjugan con WAS (negativo: wasn't).",
                "We, you, they se conjugan con WERE (negativo: weren't).",
                "Preguntas con inversión directa: 'Were you at home?' (nunca 'Did you be at home?').",
                "There was (existencia singular pasada) vs. There were (existencia plural pasada)."
            ],
            "examplesUS": ["He was absent from class yesterday because he was at the hospital."],
            "examplesUK": ["He was absent from lecture yesterday because he was at the hospital."],
            "commonMistakes": [
                "Usar el auxiliar did con to be: 'Did you be tired?' (debe ser 'Were you tired?').",
                "Usar was con pronombres plurales: 'We was late' (debe ser 'We were late')."
            ],
            "referenceLink": "https://agendaweb.org/verbs/to-be-past-exercises.html"
        },
        {
            "id": "a2_lesson_05",
            "title": "Clase 05: Past Continuous: Acciones en Progreso en el Pasado",
            "level": "A2",
            "category": "Tiempos Verbales Continuos",
            "summary": "Describe acciones continuas que estaban ocurriendo en un punto temporal preciso del pasado.",
            "formula": "Sujeto + was / were + Verbo-ing.",
            "rules": [
                "Se usa para contextualizar un momento exacto: 'At 8:00 PM last night, I was studying'.",
                "Dos acciones simultáneas en progreso en el pasado: 'While I was cooking, my brother was reading'.",
                "Negativo: was not (wasn't) / were not (weren't) + -ing."
            ],
            "examplesUS": ["At noon yesterday, we were driving along the highway toward Los Angeles."],
            "examplesUK": ["At midday yesterday, we were driving along the motorway towards London."],
            "commonMistakes": [
                "Usar Past Simple para una acción en desarrollo: 'At 3 PM I read a book' (debe ser 'I was reading').",
                "Omitir was/were: 'I studying when you called'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/past_pro.htm"
        },
        {
            "id": "a2_lesson_06",
            "title": "Clase 06: Past Simple vs. Past Continuous con WHEN y WHILE",
            "level": "A2",
            "category": "Sintaxis & Tiempos Combinados",
            "summary": "Combina una acción larga de fondo (Past Continuous) interrumpida por una acción puntual (Past Simple).",
            "formula": "Past Continuous + WHEN + Past Simple / WHILE + Past Continuous, Past Simple.",
            "rules": [
                "Usa WHEN inmediatamente antes de la acción corta puntual en Past Simple: 'I was sleeping when the phone rang'.",
                "Usa WHILE inmediatamente antes de la acción larga continua en Past Continuous: 'While I was cooking, I burned my hand'.",
                "La acción que interrumpe siempre va en Past Simple."
            ],
            "examplesUS": ["While she was crossing the street, she dropped her cell phone."],
            "examplesUK": ["While she was crossing the street, she dropped her mobile phone."],
            "commonMistakes": [
                "Poner Past Simple tras while: 'While I cooked, the phone rang' (debe ser 'While I was cooking').",
                "Usar when con dos continuos sin sentido interruptivo."
            ],
            "referenceLink": "https://agendaweb.org/verbs/past_continuous-exercises.html"
        },
        {
            "id": "a2_lesson_07",
            "title": "Clase 07: Comparativos de Superioridad: Cortos vs. Largos",
            "level": "A2",
            "category": "Adjetivos & Gradación",
            "summary": "Reglas para comparar dos elementos según el número de sílabas del adjetivo.",
            "formula": "Adjetivo corto + -er than / MORE + Adjetivo largo + than.",
            "rules": [
                "1 sílaba: añade -er (fast -> faster, tall -> taller, big -> bigger con duplicación C-V-C).",
                "2 sílabas terminadas en -y: cambian a -ier (happy -> happier, easy -> easier).",
                "2 o más sílabas generales: usan MORE + adjetivo intacto (more expensive, more intelligent).",
                "Irregulares: good -> better, bad -> worse, far -> farther / further."
            ],
            "examplesUS": ["This new apartment is bigger and more expensive than my old one."],
            "examplesUK": ["This new flat is bigger and more expensive than my old one."],
            "commonMistakes": [
                "Doble comparativo: decir 'more bigger' o 'more easier' (error grave).",
                "Olvidar la partícula THAN al comparar dos elementos."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/adjectives_comparative.htm"
        },
        {
            "id": "a2_lesson_08",
            "title": "Clase 08: Comparativos de Igualdad e Inferioridad: AS... AS / LESS THAN",
            "level": "A2",
            "category": "Adjetivos & Comparaciones",
            "summary": "Estructuras para señalar equivalencia cualitativa (as... as) o menor intensidad (less... than / not as... as).",
            "formula": "Igualdad: as + adjetivo base + as. Inferioridad: not as + adjetivo + as / less + adjetivo + than.",
            "rules": [
                "En igualdad el adjetivo VA SIEMPRE EN FORMA POSITIVA BASE (sin -er ni more): 'as tall as', 'as fast as'.",
                "Negativo: 'not as tall as' (tan común y natural como 'shorter than').",
                "Less than se usa preferentemente con adjetivos largos: 'less expensive than'."
            ],
            "examplesUS": ["My laptop is not as fast as yours, but it is just as reliable."],
            "examplesUK": ["My computer is not as fast as yours, but it is just as reliable."],
            "commonMistakes": [
                "Poner comparativo dentro de as...as: decir 'as taller as' (debe ser 'as tall as').",
                "Olvidar el segundo as: 'He is as smart than me'."
            ],
            "referenceLink": "https://agendaweb.org/grammar/comparison-exercises.html"
        },
        {
            "id": "a2_lesson_09",
            "title": "Clase 09: Superlativos: THE -EST, THE MOST e Irregulares",
            "level": "A2",
            "category": "Adjetivos & Superlativos",
            "summary": "Destaca un elemento como portador del grado máximo o mínimo de una cualidad dentro de un grupo.",
            "formula": "THE + Adj corto + -est / THE MOST + Adj largo.",
            "rules": [
                "1 sílaba: the + -est (the tallest, the fastest, the biggest).",
                "2 sílabas en -y: the + -iest (the happiest, the easiest).",
                "2 o más sílabas: the most (the most beautiful, the most expensive).",
                "Irregulares: good -> THE BEST, bad -> THE WORST, far -> THE FARTHEST / FURTHEST.",
                "Preposiciones de ámbito: usa IN para lugares y grupos ('the tallest in the class', 'in the world')."
            ],
            "examplesUS": ["This is the oldest university in the country and has the best medical library."],
            "examplesUK": ["This is the oldest university in the country and has the best medical library."],
            "commonMistakes": [
                "Omitir el artículo THE: decir 'He is fastest runner' (debe ser 'the fastest').",
                "Usar of para lugares: decir 'the tallest of the world' (debe ser 'in the world')."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/adjectives_superlative.htm"
        },
        {
            "id": "a2_lesson_10",
            "title": "Clase 10: Futuro con BE GOING TO: Planes y Evidencia Presente",
            "level": "A2",
            "category": "Tiempos Verbales Futuros",
            "summary": "Expresa planes premeditados, intenciones claras o predicciones basadas en signos visuales evidentes.",
            "formula": "Sujeto + am / is / are + GOING TO + V(base).",
            "rules": [
                "Planes e intenciones decididas antes del momento de hablar: 'I am going to study medicine next year'.",
                "Evidencia visual inminente: 'Look at those dark clouds! It is going to rain'.",
                "Negativo: am not / isn't / aren't going to + base."
            ],
            "examplesUS": ["We are going to buy a new car this weekend because our old one broke down."],
            "examplesUK": ["We are going to buy a new car this weekend because our old one broke down."],
            "commonMistakes": [
                "Omitir el verbo to be: decir 'I going to study' (debe ser 'I am going to study').",
                "Poner gerundio tras going to: 'She is going to studying' (debe ser 'to study')."
            ],
            "referenceLink": "https://agendaweb.org/verbs/future-going-to-exercises.html"
        },
        {
            "id": "a2_lesson_11",
            "title": "Clase 11: Futuro con WILL: Decisiones Espontáneas, Predicciones y Promesas",
            "level": "A2",
            "category": "Verbos Modales & Futuro",
            "summary": "Expresa decisiones tomadas en el mismo instante de hablar, predicciones basadas en opinión y promesas.",
            "formula": "Afirmativo: S + will + V(base). Negativo: S + won't + V(base).",
            "rules": [
                "Decisiones espontáneas inmediatas: 'The phone is ringing. I will answer it!'.",
                "Opiniones y predicciones con I think / I hope: 'I think it will be sunny tomorrow'.",
                "Promesas y ofertas de ayuda: 'I will help you with your homework. I won't tell anyone'."
            ],
            "examplesUS": ["Don't worry about the grocery bags; I will carry them inside for you."],
            "examplesUK": ["Don't worry about the shopping bags; I will carry them inside for you."],
            "commonMistakes": [
                "Usar will para planes organizados de agenda: decir 'Tomorrow I will meet the doctor at 4' (lo natural es 'I am meeting').",
                "Poner 'to' tras will: 'I will to help you'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/future_will.htm"
        },
        {
            "id": "a2_lesson_12",
            "title": "Clase 12: Sustantivos Contables e Incontables (Countable vs. Uncountable)",
            "level": "A2",
            "category": "Morfología Nominal",
            "summary": "Distingue elementos separables en unidades numéricas de masas continuas, conceptos abstractos y líquidos.",
            "formula": "Contables: tienen plural (a book / three books). Incontables: solo singular (water, advice, information).",
            "rules": [
                "Sustantivos contables: admiten números y plurales con -s.",
                "Sustantivos incontables: NO tienen plural y NUNCA llevan artículo A o AN.",
                "Incontables clásicos en inglés: water, milk, bread, butter, cheese, money, advice, information, furniture, baggage/luggage, news.",
                "Para medir incontables se usan partitivos: 'a glass of water', 'a piece of advice', 'a slice of bread'."
            ],
            "examplesUS": ["Can you give me some advice and information about the university application?"],
            "examplesUK": ["Can you give me some advice and information about the university application?"],
            "commonMistakes": [
                "Pluralizar incontables: decir 'informations', 'advices' o 'furnitures' (error grave).",
                "Poner 'an' con incontables: decir 'an advice' (debe ser 'some advice' o 'a piece of advice')."
            ],
            "referenceLink": "https://agendaweb.org/grammar/countable_uncountable-exercises.html"
        },
        {
            "id": "a2_lesson_13",
            "title": "Clase 13: Cuantificadores: SOME y ANY en Contextos Diversos",
            "level": "A2",
            "category": "Determinantes & Cuantificadores",
            "summary": "Indican cantidad indeterminada tanto con sustantivos contables en plural como con incontables.",
            "formula": "SOME en afirmativas y peticiones / ANY en negativas y preguntas generales.",
            "rules": [
                "SOME: en oraciones afirmativas: 'I have some friends', 'There is some coffee'.",
                "SOME: en preguntas de ofrecimiento o petición donde se espera un sí: 'Would you like some tea?', 'Can I have some water?'.",
                "ANY: en oraciones negativas con not: 'I don't have any money', 'There aren't any questions'.",
                "ANY: en preguntas generales de existencia: 'Do you have any brothers?'."
            ],
            "examplesUS": ["We bought some fresh vegetables, but we didn't find any fresh strawberries."],
            "examplesUK": ["We bought some fresh vegetables, but we didn't find any fresh strawberries."],
            "commonMistakes": [
                "Usar some en oraciones negativas: decir 'I don't have some money' (debe ser 'any money').",
                "Usar any en afirmaciones simples: 'I have any friends' (debe ser 'some friends')."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/some_any.htm"
        },
        {
            "id": "a2_lesson_14",
            "title": "Clase 14: Cuantificadores: MUCH, MANY, A LOT OF, FEW, LITTLE",
            "level": "A2",
            "category": "Cuantificadores de Cantidad",
            "summary": "Selección rigurosa de cuantificadores según la naturaleza contable o incontable del sustantivo.",
            "formula": "MANY / FEW + Contables plural. MUCH / LITTLE + Incontables. A LOT OF + Ambos.",
            "rules": [
                "MANY: con contables en plural: 'many books', 'many students' (preferente en preguntas y negativas).",
                "MUCH: con incontables: 'much time', 'much money' (preferente en preguntas y negativas).",
                "A LOT OF / LOTS OF: se usa habitualmente en oraciones afirmativas para ambos tipos.",
                "FEW (pocos - casi ninguno) vs. A FEW (unos cuantos - suficiente positivo) con contables.",
                "LITTLE (poco - insuficiente) vs. A LITTLE (un poco - suficiente) con incontables."
            ],
            "examplesUS": ["She doesn't have much time, but she has a lot of energy and many good ideas."],
            "examplesUK": ["She doesn't have much time, but she has a lot of energy and many good ideas."],
            "commonMistakes": [
                "Decir 'much people' (people es contable plural; debe ser 'many people').",
                "Decir 'many information' (information es incontable; debe ser 'much information' o 'a lot of information')."
            ],
            "referenceLink": "https://agendaweb.org/grammar/quantifiers-exercises.html"
        },
        {
            "id": "a2_lesson_15",
            "title": "Clase 15: Verbos Modales de Obligación: MUST vs. HAVE TO",
            "level": "A2",
            "category": "Verbos Modales de Deber",
            "summary": "Expresan deber y necesidad, diferenciando el origen interno o externo de la regla.",
            "formula": "Afirmativo: must / have to + V(base). Negativo: MUSTN'T (prohibición) vs. DON'T HAVE TO (falta de necesidad).",
            "rules": [
                "MUST: obligación sentida internamente por el hablante o regla formal escrita.",
                "HAVE TO: obligación externa impuesta por leyes, horarios o reglamentos institucionales.",
                "MUSTN'T: expresa PROHIBICIÓN ABSOLUTA ('You mustn't smoke here').",
                "DON'T HAVE TO: expresa AUSENCIA DE OBLIGACIÓN ('You don't have to come if you're busy' - eres libre de no venir)."
            ],
            "examplesUS": ["Students must wear their safety goggles in the lab, but they don't have to wear uniforms."],
            "examplesUK": ["Students must wear their safety goggles in the lab, but they don't have to wear uniforms."],
            "commonMistakes": [
                "Confundir mustn't con don't have to: decir 'You don't have to touch that' para una orden de peligro (debe ser mustn't).",
                "Poner 'to' tras must: 'I must to go'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/must_have_to.htm"
        },
        {
            "id": "a2_lesson_16",
            "title": "Clase 16: Verbos Modales de Sugerencia: SHOULD y OUGHT TO",
            "level": "A2",
            "category": "Verbos Modales de Consejo",
            "summary": "Se emplean para dar recomendaciones, consejos, sugerencias o expresar conveniencia ética.",
            "formula": "Sujeto + should / shouldn't + V(base) | ought to + V(base).",
            "rules": [
                "SHOULD va seguido de infinitivo sin to: 'You should see a doctor'.",
                "SHOULDN'T expresa desaconsejo: 'You shouldn't drink so much coffee'.",
                "OUGHT TO es sinónimo formal de should: 'You ought to apologize'.",
                "En preguntas se formula con inversión: 'Should I call him now?'."
            ],
            "examplesUS": ["You look exhausted; you should take a couple of days off work."],
            "examplesUK": ["You look shattered; you should take a couple of days off work."],
            "commonMistakes": [
                "Poner 'to' después de should: 'You should to sleep' (debe ser 'You should sleep').",
                "Omitir 'to' con ought: 'You ought apologize' (debe ser 'You ought to apologize')."
            ],
            "referenceLink": "https://agendaweb.org/verbs/modals-should-exercises.html"
        },
        {
            "id": "a2_lesson_17",
            "title": "Clase 17: Infinitivo de Propósito (TO + BASE) vs. FOR + Sustantivo",
            "level": "A2",
            "category": "Sintaxis & Propósito",
            "summary": "Mecanismos sintácticos para responder a la pregunta '¿para qué?' en acciones de personas y usos de objetos.",
            "formula": "Propósito de persona: TO + Verbo base. Función de objeto: FOR + Gerundio / FOR + Sustantivo.",
            "rules": [
                "Para expresar la intención o propósito de una persona se usa TO + infinitivo: 'I went to the store to buy milk'.",
                "NUNCA se usa 'for to + verbo' ni 'for + gerundio' para el propósito de una persona: incorrecto 'I went for buy milk'.",
                "FOR + gerundio se reserva para la función intrínseca de una herramienta o instrumento: 'A microwave is used for heating food'."
            ],
            "examplesUS": ["She studied all weekend to pass her nursing certification exam."],
            "examplesUK": ["She revised all weekend to pass her nursing certification exam."],
            "commonMistakes": [
                "Decir 'I went to the store for buying milk' (debe ser 'to buy milk').",
                "Decir 'for to see' (arcaísmo incorrecto en inglés moderno)."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/infinitive_purpose.htm"
        },
        {
            "id": "a2_lesson_18",
            "title": "Clase 18: Adverbios de Modo: Formación en -LY e Irregulares",
            "level": "A2",
            "category": "Adverbios Modales",
            "summary": "Modifican a verbos indicando cómo se ejecuta la acción. Se diferencian tajantemente de los adjetivos.",
            "formula": "Adjetivo + -ly (quick -> quickly). Irregulares: good -> well, fast -> fast, hard -> hard.",
            "rules": [
                "Regla general: añade -ly al adjetivo (slow -> slowly, careful -> carefully, fluent -> fluently).",
                "Terminados en -y: cambian a -ily (easy -> easily, happy -> happily).",
                "Irregulares vitales: good cambia al adverbio WELL ('He plays well').",
                "Formas idénticas (adjetivo y adverbio): FAST (fast runner / runs fast), HARD (hard worker / works hard)."
            ],
            "examplesUS": ["She speaks English fluently and drove carefully through the heavy rainstorm."],
            "examplesUK": ["She speaks English fluently and drove carefully through the heavy rainstorm."],
            "commonMistakes": [
                "Usar el adjetivo good como adverbio: 'He plays very good' (debe ser 'He plays very well').",
                "Decir 'fastly' (palabra inexistente; se usa fast tanto para adjetivo como para adverbio)."
            ],
            "referenceLink": "https://agendaweb.org/grammar/adverbs-exercises.html"
        },
        {
            "id": "a2_lesson_19",
            "title": "Clase 19: Pronombres Indefinidos: SOME-, ANY-, EVERY-, NO-",
            "level": "A2",
            "category": "Pronombres Indefinidos",
            "summary": "Hacen referencia a personas, cosas o lugares sin especificar exactamente quién, qué o dónde.",
            "formula": "Prefijo (some/any/every/no) + Sufijo (-one/-body/-thing/-where).",
            "rules": [
                "Personas: someone / somebody, anyone / anybody, everyone / everybody, no one / nobody.",
                "Objetos: something, anything, everything, nothing.",
                "Lugares: somewhere, anywhere, everywhere, nowhere.",
                "CONCORDANCIA SINGULAR: todos los pronombres indefinidos concuerdan con verbo en 3ª persona singular: 'Everyone IS here' (nunca 'are')."
            ],
            "examplesUS": ["Someone left their briefcase on the table, but nobody saw who it was."],
            "examplesUK": ["Someone left their briefcase on the table, but nobody saw who it was."],
            "commonMistakes": [
                "Usar verbo plural con everyone/everybody: decir 'Everyone are happy' (debe ser 'Everyone is happy').",
                "Doble negación con nothing/nobody: 'I didn't see nobody' (debe ser 'I didn't see anybody')."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/indefinite_pronouns.htm"
        },
        {
            "id": "a2_lesson_20",
            "title": "Clase 20: Preposiciones de Movimiento: INTO, OUT OF, THROUGH, ACROSS",
            "level": "A2",
            "category": "Preposiciones Direccionales",
            "summary": "Expresan la trayectoria física y dirección de un desplazamiento en el espacio.",
            "formula": "Verbo de movimiento (walk, run, drive) + Preposición de movimiento + Destino.",
            "rules": [
                "INTO: movimiento hacia el interior de un espacio: 'He walked into the building'.",
                "OUT OF: movimiento desde el interior hacia afuera: 'She came out of the office'.",
                "THROUGH: movimiento a través de un espacio tridimensional o túnel: 'drive through the tunnel'.",
                "ACROSS: movimiento de un lado a otro de una superficie plana o calle: 'walk across the street'.",
                "ALONG: a lo largo de: 'walk along the beach'. TOWARDS: en dirección hacia."
            ],
            "examplesUS": ["They ran across the street and went into the modern subway station."],
            "examplesUK": ["They ran across the road and went into the modern tube station."],
            "commonMistakes": [
                "Usar in en vez de into para movimiento dinámico: decir 'He jumped in the pool' (lo formal dinámico es 'into the pool').",
                "Confundir across (cruzar) con through (atravesar)."
            ],
            "referenceLink": "https://agendaweb.org/grammar/prepositions-movement-exercises.html"
        }
    ]

print("get_a2_lessons configured.")

def get_b1_lessons():
    return [
        {
            "id": "b1_lesson_01",
            "title": "Clase 01: Present Perfect Simple: Formación y Experiencias de Vida",
            "level": "B1",
            "category": "Tiempos Verbales Perfectos",
            "summary": "Conecta el pasado con el presente para comunicar experiencias acumuladas sin fecha específica.",
            "formula": "Sujeto + have / has + Participio Pasado (V3).",
            "rules": [
                "I, you, we, they usan HAVE ('ve). He, she, it usan HAS ('s).",
                "Se usa cuando el tiempo no está cerrado o no se menciona cuándo ocurrió: 'I have visited Rome'.",
                "Negativo: haven't / hasn't + V3. Pregunta: Have / Has + S + V3?"
            ],
            "examplesUS": ["She has worked at three major technology companies during her career."],
            "examplesUK": ["She has worked at three major technology companies during her career."],
            "commonMistakes": [
                "Usar Present Perfect con fechas exactas concluidas: decir 'I have seen him yesterday' (debe ser Past Simple: 'I saw him yesterday').",
                "Confundir 's como contracción de is con 's como contracción de has."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/pres_perf.htm"
        },
        {
            "id": "b1_lesson_02",
            "title": "Clase 02: Marcadores del Present Perfect: EVER, NEVER, ALREADY, YET, JUST",
            "level": "B1",
            "category": "Adverbios Temporales Perfectos",
            "summary": "Adverbios clave que especifican el matiz temporal exacto de la experiencia o acción conectada al presente.",
            "formula": "S + have/has + (just/already/never) + V3 / YET al final de oraciones negativas y preguntas.",
            "rules": [
                "EVER: en preguntas de experiencia vital: 'Have you ever eaten sushi?'.",
                "NEVER: en oraciones afirmativas con valor de nunca: 'I have never been to Japan'.",
                "JUST: indica que la acción ocurrió hace un instante: 'I have just finished my lunch'.",
                "ALREADY: indica que la acción ocurrió antes de lo esperado: 'I have already sent the email'.",
                "YET: va AL FINAL de oraciones negativas ('I haven't called yet') y preguntas ('Have you finished yet?')."
            ],
            "examplesUS": ["I have just spoken to the manager and she has already approved the project."],
            "examplesUK": ["I have just spoken to the manager and she has already approved the project."],
            "commonMistakes": [
                "Poner yet en medio de la oración: 'I have yet not finished' (debe ser 'I haven't finished yet').",
                "Usar ever en afirmaciones simples: 'I have ever seen that movie' (debe ser already o antes never)."
            ],
            "referenceLink": "https://agendaweb.org/verbs/present-perfect-exercises.html"
        },
        {
            "id": "b1_lesson_03",
            "title": "Clase 03: Expresiones de Duración: FOR vs. SINCE y HOW LONG",
            "level": "B1",
            "category": "Preposiciones Temporales de Duración",
            "summary": "Expresan el periodo de tiempo durante el cual una acción ha continuado desde el pasado hasta el presente.",
            "formula": "FOR + periodo de tiempo | SINCE + punto exacto de partida en el pasado.",
            "rules": [
                "FOR: con duración o cantidad de tiempo: for two hours, for ten years, for a long time, for three days.",
                "SINCE: con momento o fecha inicial concreta: since 2018, since Monday, since 9:00 AM, since I was a child.",
                "HOW LONG inicia preguntas de duración: 'How long have you lived here?'."
            ],
            "examplesUS": ["They have lived in San Diego for eight years, ever since they graduated from college."],
            "examplesUK": ["They have lived in Bristol for eight years, ever since they graduated from university."],
            "commonMistakes": [
                "Decir 'since ten years' (debe ser 'for ten years').",
                "Usar el Present Simple para acciones que continúan: decir 'I live here since 2015' (debe ser 'I have lived here')."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/for_since.htm"
        },
        {
            "id": "b1_lesson_04",
            "title": "Clase 04: Present Perfect vs. Past Simple (US vs. UK)",
            "level": "B1",
            "category": "Contraste Temporal & Variación Diatópica",
            "summary": "Diferencia de perspectiva entre tiempo concluido (Past Simple) y relevancia presente (Present Perfect).",
            "formula": "Past Simple: momento pasado concluido. Present Perfect: tiempo no terminado o efecto actual.",
            "rules": [
                "Si la oración incluye marcadores de tiempo cerrado (yesterday, in 2010, ago, when I was young) es OBLIGATORIO el Past Simple.",
                "Si no hay tiempo específico y el resultado afecta el ahora, se prefiere Present Perfect.",
                "VARIACIÓN US vs UK: con already, just y yet, el inglés americano acepta Past Simple ('I already ate', 'Did you eat yet?'), mientras que el inglés británico exige estrictamente Present Perfect ('I have already eaten', 'Have you eaten yet?')."
            ],
            "examplesUS": ["I already saw that movie yesterday, but my brother hasn't seen it yet."],
            "examplesUK": ["I have already seen that film, but my brother hasn't seen it yet."],
            "commonMistakes": [
                "Usar Present Perfect con 'ago': 'I have seen him two days ago' (debe ser 'I saw him two days ago').",
                "Usar Past Simple en UK con 'yet' en contextos formales."
            ],
            "referenceLink": "https://agendaweb.org/verbs/past-simple-present-perfect.html"
        },
        {
            "id": "b1_lesson_05",
            "title": "Clase 05: HAVE BEEN TO vs. HAVE GONE TO",
            "level": "B1",
            "category": "Semántica & Participios",
            "summary": "Distinción crucial de desplazamiento geográfico entre un viaje de ida y vuelta y un viaje en curso.",
            "formula": "Have been to: fue y ya regresó. Have gone to: fue y todavía se encuentra en el destino.",
            "rules": [
                "HAVE BEEN TO: experiencia de viaje concluida; la persona ya está de regreso en el lugar de origen.",
                "HAVE GONE TO: la persona partió hacia el destino y todavía no ha regresado (está allá o en camino).",
                "Ejemplo claro: 'Mary has gone to Paris' (ella está en París en este momento); 'Mary has been to Paris' (conoce París pero está aquí ahora)."
            ],
            "examplesUS": ["David has gone to Chicago on a business trip, but his wife has been to Chicago twice before."],
            "examplesUK": ["David has gone to Manchester on a business trip, but his wife has been to Manchester twice before."],
            "commonMistakes": [
                "Decir 'I have gone to Paris three times' cuando estás hablando en tu ciudad natal (debe ser 'I have been to Paris').",
                "Preguntar 'Have you ever gone to Italy?' en lugar de 'Have you ever been to Italy?'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/been_gone.htm"
        },
        {
            "id": "b1_lesson_06",
            "title": "Clase 06: Present Perfect Continuous: Duración y Resultados Visibles",
            "level": "B1",
            "category": "Tiempos Verbales Perfectos Continuos",
            "summary": "Enfoca la duración ininterrumpida de una actividad que comenzó en el pasado y cuyos efectos son perceptibles ahora.",
            "formula": "Sujeto + have / has + BEEN + Verbo-ing.",
            "rules": [
                "Enfatiza el proceso y la duración, no solo el resultado final: 'I have been studying for four hours'.",
                "Acciones recién terminadas con evidencia física palpable en el presente: 'Her eyes are red because she has been crying'.",
                "Preguntas de duración: 'How long have you been waiting?'."
            ],
            "examplesUS": ["The streets are wet because it has been raining all morning in downtown Seattle."],
            "examplesUK": ["The pavement is wet because it has been raining all morning in central London."],
            "commonMistakes": [
                "Usar Present Continuous para duración acumulada: 'I am waiting for two hours' (debe ser 'I have been waiting').",
                "Usar verbos de estado en continuo: 'I have been knowing him for years' (debe ser 'I have known him')."
            ],
            "referenceLink": "https://agendaweb.org/verbs/present-perfect-continuous.html"
        },
        {
            "id": "b1_lesson_07",
            "title": "Clase 07: Condicional Cero (Zero Conditional): Leyes Naturales y Hechos",
            "level": "B1",
            "category": "Oraciones Condicionales",
            "summary": "Expresa verdades científicas, leyes de la física, reglas matemáticas y consecuencias automáticas invariables.",
            "formula": "IF / WHEN + Present Simple, Present Simple.",
            "rules": [
                "Ambas cláusulas (condición y resultado) van estrictamente en PRESENT SIMPLE.",
                "IF puede sustituirse por WHEN sin alterar el sentido fáctico: 'If you heat water to 100°C, it boils'.",
                "Si la cláusula con IF va primero, se coloca coma; si va después, no se requiere coma."
            ],
            "examplesUS": ["If you freeze water, it turns into ice, and when metal gets hot, it expands."],
            "examplesUK": ["If you freeze water, it turns into ice, and when metal gets hot, it expands."],
            "commonMistakes": [
                "Poner will en la cláusula de resultado del condicional cero: 'If you heat ice, it will melt' (es verdad general; debe ser melts).",
                "Usar condicional en hechos universales comprobables."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/conditional_0.htm"
        },
        {
            "id": "b1_lesson_08",
            "title": "Clase 08: Primer Condicional (First Conditional): Situaciones Reales Futuras",
            "level": "B1",
            "category": "Oraciones Condicionales",
            "summary": "Plantea una condición probable en el presente con un resultado probable o seguro en el futuro.",
            "formula": "IF + Present Simple, WILL / WON'T + V(base).",
            "rules": [
                "REGLA CRUCIAL: tras IF NUNCA se usa WILL: 'If it rains, we will stay home' (nunca 'If it will rain').",
                "UNLESS equivale a 'IF NOT' (a menos que): 'Unless you study, you will fail' (= If you don't study).",
                "En el resultado pueden usarse otros modales: can, may, might, should."
            ],
            "examplesUS": ["If the company offers me the promotion, I will relocate to San Francisco."],
            "examplesUK": ["If the company offers me the promotion, I will relocate to London."],
            "commonMistakes": [
                "Poner will en la cláusula del IF: 'If I will have time, I will call you' (debe ser 'If I have time').",
                "Poner negación doble con unless: 'Unless you don't study' (debe ser 'Unless you study')."
            ],
            "referenceLink": "https://agendaweb.org/verbs/conditional-first-exercises.html"
        },
        {
            "id": "b1_lesson_09",
            "title": "Clase 09: Segundo Condicional (Second Conditional): Hipótesis Irreales y WERE",
            "level": "B1",
            "category": "Oraciones Condicionales Hipotéticas",
            "summary": "Plantea situaciones hipotéticas, imaginarias o contrarias a los hechos en el presente o futuro.",
            "formula": "IF + Past Simple, WOULD / COULD / MIGHT + V(base).",
            "rules": [
                "La cláusula condicional va en Past Simple (pasado hipotético, no tiempo cronológico pasado).",
                "El resultado va con WOULD + infinitivo base.",
                "REGLA FORMAL DE WERE: en el estándar formal se usa WERE para todas las personas gramaticales: 'If I were you, I would accept the offer' / 'If he were here'.",
                "NUNCA se coloca would dentro de la cláusula de IF: incorrecto 'If I would have money'."
            ],
            "examplesUS": ["If I won the state lottery, I would travel around the world and donate to medical research."],
            "examplesUK": ["If I won the national lottery, I would travel around the world and donate to medical research."],
            "commonMistakes": [
                "Poner would en la cláusula con if: 'If I would be rich' (debe ser 'If I were rich').",
                "Usar was en la expresión consagrada de consejo: decir 'If I was you' (lo estándar formal es 'If I were you')."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/conditional_2.htm"
        },
        {
            "id": "b1_lesson_10",
            "title": "Clase 10: Modales de Deducción en Presente: MUST, CAN'T, MIGHT, COULD",
            "level": "B1",
            "category": "Verbos Modales Epistémicos",
            "summary": "Gradúan la certeza lógica de una afirmación en presente según la evidencia disponible (de 100% a 30%).",
            "formula": "Sujeto + must / can't / might / could + V(base).",
            "rules": [
                "MUST: certeza lógica casi absoluta afirmativa (95-100%): 'He has a mansion; he must be rich'.",
                "CAN'T: certeza lógica casi absoluta negativa (imposibilidad 0%): 'She just ate lunch; she can't be hungry'.",
                "MIGHT / COULD / MAY: posibilidad media o duda (30-50%): 'Take an umbrella; it might rain later'.",
                "NUNCA se usa mustn't para deducción negativa; la deducción de imposibilidad es ESTRICTAMENTE CAN'T."
            ],
            "examplesUS": ["The lights in their apartment are off; they must be sleeping or they might be traveling."],
            "examplesUK": ["The lights in their flat are off; they must be sleeping or they might be travelling."],
            "commonMistakes": [
                "Usar mustn't para deducción de imposibilidad: decir 'He mustn't be at home' (debe ser 'He can't be at home').",
                "Poner 'to' tras el modal de deducción: 'He must to know'."
            ],
            "referenceLink": "https://agendaweb.org/verbs/modals-deduction-exercises.html"
        },
        {
            "id": "b1_lesson_11",
            "title": "Clase 11: Hábitos Pasados: USED TO vs. WOULD vs. Past Simple",
            "level": "B1",
            "category": "Aspecto Verbal Pasado",
            "summary": "Expresan costumbres y estados que ocurrían regularmente en el pasado pero que ya no suceden en el presente.",
            "formula": "USED TO + V(base) | WOULD + V(base) solo para acciones repetidas.",
            "rules": [
                "USED TO: sirve tanto para ACCIONES habituales como para ESTADOS pasados: 'I used to live in Boston' / 'I used to play soccer'.",
                "WOULD: se reserva exclusivamente para ACCIONES REPETIDAS pasadas, NUNCA para estados: 'Every summer my grandfather would tell us stories'.",
                "Incorrecto: 'I would live in Boston' (living es estado; debe usarse used to).",
                "Negación y pregunta de used to: 'didn't use to' / 'Did you use to...?' (sin la -d)."
            ],
            "examplesUS": ["When I was young, I used to live in Chicago and my dad would take me to baseball games."],
            "examplesUK": ["When I was young, I used to live in Manchester and my dad would take me to football matches."],
            "commonMistakes": [
                "Usar would con verbos de estado: 'I would have a dog' (debe ser 'I used to have a dog').",
                "Escribir 'didn't used to' con d (debe ser 'didn't use to')."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/used_to.htm"
        },
        {
            "id": "b1_lesson_12",
            "title": "Clase 12: Voz Pasiva en Presente y Pasado Simple",
            "level": "B1",
            "category": "Voz Pasiva & Foco Sintáctico",
            "summary": "Cambia el foco de atención hacia el objeto que recibe la acción cuando el agente es desconocido, obvio o irrelevante.",
            "formula": "Objeto + am/is/are (Presente) o was/were (Pasado) + Participio Pasado (V3) (+ by + agente).",
            "rules": [
                "Presente Simple Pasivo: 'English is spoken all over the world'.",
                "Pasado Simple Pasivo: 'The telephone was invented by Alexander Graham Bell'.",
                "El agente solo se incluye con BY si aporta información nueva, relevante y fundamental.",
                "Si el agente es 'people', 'someone' o genérico, se omite por completo."
            ],
            "examplesUS": ["Millions of packages are delivered every day and the company was founded in Seattle."],
            "examplesUK": ["Millions of parcels are delivered every day and the company was founded in London."],
            "commonMistakes": [
                "Olvidar conjugar el verbo to be: decir 'The bridge built in 1920' (debe ser 'was built').",
                "Usar la preposición for en vez de by para el agente: 'invented for Bell' (debe ser 'by Bell')."
            ],
            "referenceLink": "https://agendaweb.org/verbs/passive-voice.html"
        },
        {
            "id": "b1_lesson_13",
            "title": "Clase 13: Oraciones de Relativo Definitorias (Defining Relative Clauses)",
            "level": "B1",
            "category": "Cláusulas Relativas",
            "summary": "Aportan información esencial e indispensable para identificar al sustantivo del que se habla. No llevan comas.",
            "formula": "Sustantivo + WHO / WHICH / THAT / WHOSE / WHERE + Cláusula.",
            "rules": [
                "WHO / THAT: para personas: 'The teacher who helped me is very kind'.",
                "WHICH / THAT: para animales y objetos: 'The car that I bought is fast'.",
                "WHOSE: para posesión de personas o entidades: 'A woman whose son is a doctor'.",
                "OMISIÓN DEL PRONOMBRE: si el pronombre de relativo es objeto del verbo de la cláusula, puede omitirse legítimamente: 'The book (that) I read was fascinating'."
            ],
            "examplesUS": ["The engineer who designed this bridge received a prestigious national award."],
            "examplesUK": ["The engineer who designed this bridge received a prestigious national award."],
            "commonMistakes": [
                "Poner comas en cláusulas definitorias esenciales.",
                "Confundir whose (cuyo) con who's (quien es)."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/relative_clauses.htm"
        },
        {
            "id": "b1_lesson_14",
            "title": "Clase 14: Oraciones de Relativo No Definitorias (Non-defining Clauses)",
            "level": "B1",
            "category": "Cláusulas Relativas Explicativas",
            "summary": "Añaden información extra o incidental sobre un sustantivo ya identificado. VAN OBLIGATORIAMENTE ENTRE COMAS.",
            "formula": ", WHO / WHICH / WHOSE / WHERE , (Entre comas obligatorias).",
            "rules": [
                "La información es complementaria; si se elimina, la oración principal sigue teniendo sentido completo.",
                "NUNCA se puede usar THAT en cláusulas no definitorias (solo who para personas y which para cosas).",
                "NUNCA se puede omitir el pronombre de relativo en una cláusula no definitoria.",
                "Las comas son estrictamente obligatorias al principio y al final de la cláusula intermedia."
            ],
            "examplesUS": ["My older brother, who lives in Los Angeles, is coming to visit us next week."],
            "examplesUK": ["My elder brother, who lives in Edinburgh, is coming to visit us next week."],
            "commonMistakes": [
                "Usar THAT en oraciones entre comas: 'My car, that is red, is fast' (error fatal; debe ser which).",
                "Omitir las comas obligatorias."
            ],
            "referenceLink": "https://agendaweb.org/grammar/relative-pronouns-exercises.html"
        },
        {
            "id": "b1_lesson_15",
            "title": "Clase 15: Preguntas Coletilla (Question Tags) y Entonación",
            "level": "B1",
            "category": "Interrogación & Entonación",
            "summary": "Breves preguntas añadidas al final de una frase para buscar confirmación o acuerdo del interlocutor.",
            "formula": "Enunciado Afirmativo + Tag Negativo? / Enunciado Negativo + Tag Afirmativo?",
            "rules": [
                "Oración afirmativa pide tag negativo: 'You are a doctor, aren't you?'.",
                "Oración negativa pide tag afirmativo: 'She doesn't smoke, does she?'.",
                "El tag usa el mismo auxiliar que el enunciado principal o do/does/did si es Present o Past Simple.",
                "Excepciones consagradas: 'I am right, AREN'T I?' / 'Let's go, SHALL WE?' / 'Close the door, WILL YOU?'."
            ],
            "examplesUS": ["You lived in California for several years, didn't you?"],
            "examplesUK": ["You lived in London for several years, didn't you?"],
            "commonMistakes": [
                "Decir 'am not I?' (la forma consagrada es 'aren't I?').",
                "Usar do en el tag cuando el verbo principal es to be: 'You are happy, don't you?' (debe ser aren't you?)."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/question_tags.htm"
        },
        {
            "id": "b1_lesson_16",
            "title": "Clase 16: Expresiones de Acuerdo: SO DO I / NEITHER DO I / NOR DO I",
            "level": "B1",
            "category": "Concordancia Discursiva",
            "summary": "Fórmulas elípticas concisas para manifestar coincidencia con declaraciones afirmativas o negativas ajenas.",
            "formula": "Acuerdo afirmativo: SO + Auxiliar + Sujeto. Acuerdo negativo: NEITHER / NOR + Auxiliar + Sujeto.",
            "rules": [
                "Para coincidir con afirmaciones: 'I love Italian food' -> 'So do I' (Yo también).",
                "Para coincidir con oraciones con to be: 'I am tired' -> 'So am I'.",
                "Para coincidir con negaciones: 'I don't like horror movies' -> 'Neither do I' o 'Nor do I' (Yo tampoco).",
                "NUNCA se usa negación tras neither o nor, pues ambas palabras son intrínsecamente negativas."
            ],
            "examplesUS": ["I haven't visited the Grand Canyon yet. - Neither have I."],
            "examplesUK": ["I haven't visited Stonehenge yet. - Neither have I."],
            "commonMistakes": [
                "Decir 'So I do' en vez de 'So do I'.",
                "Usar auxiliar negativo tras neither: 'Neither don't I' (debe ser 'Neither do I')."
            ],
            "referenceLink": "https://agendaweb.org/grammar/so-neither-exercises.html"
        },
        {
            "id": "b1_lesson_17",
            "title": "Clase 17: Estructuras Causativas: HAVE / GET SOMETHING DONE",
            "level": "B1",
            "category": "Causativas & Servicios",
            "summary": "Expresan que encargamos o contratamos a un profesional o a un tercero para que realice un servicio para nosotros.",
            "formula": "Sujeto + have / get (en cualquier tiempo) + Objeto + Participio Pasado (V3).",
            "rules": [
                "Indica que el sujeto no hace el trabajo con sus manos, sino que alguien más lo hace: 'I had my car repaired' (un mecánico lo arregló).",
                "HAVE es ligeramente más formal que GET.",
                "También puede expresar una experiencia negativa involuntaria: 'He had his wallet stolen' (le robaron la billetera)."
            ],
            "examplesUS": ["I am going to have my laptop fixed by a technician at the computer store tomorrow."],
            "examplesUK": ["I am going to have my computer repaired by a technician at the computer shop tomorrow."],
            "commonMistakes": [
                "Decir 'I repaired my car' cuando fuiste al taller (eso significa que tú mismo lo hiciste con herramientas).",
                "Poner infinitivo con to en vez de participio: 'I had my hair to cut' (debe ser 'I had my hair cut')."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/causative.htm"
        },
        {
            "id": "b1_lesson_18",
            "title": "Clase 18: Phrasal Verbs Separables e Inseparables Fundamentales",
            "level": "B1",
            "category": "Verbos Frasales",
            "summary": "Verbos combinados con partículas adverbiales o preposicionales cuyo significado conjunto es idiomático.",
            "formula": "Separables: Verbo + Objeto + Partícula / Verbo + Partícula + Objeto. Inseparables: Partícula y verbo siempre unidos.",
            "rules": [
                "PHRASAL VERBS SEPARABLES (turn off, pick up, put on, take off): admiten el objeto en medio o al final.",
                "REGLA DEL PRONOMBRE: si el objeto es un pronombre (it, them, him, her), ES OBLIGATORIO colocarlo en medio: 'Turn it off' (nunca 'Turn off it').",
                "PHRASAL VERBS INSEPARABLES (look for, run into, get on, look after): el objeto siempre va después de la partícula: 'I am looking for my keys'."
            ],
            "examplesUS": ["Please turn off the lights before you leave and don't forget to lock the door."],
            "examplesUK": ["Please switch off the lights before you leave and don't forget to lock the door."],
            "commonMistakes": [
                "Poner el pronombre al final en verbos separables: 'Turn off it' (debe ser 'Turn it off').",
                "Separar un verbo inseparable: 'I am looking my keys for'."
            ],
            "referenceLink": "https://agendaweb.org/verbs/phrasal-verbs-exercises.html"
        },
        {
            "id": "b1_lesson_19",
            "title": "Clase 19: Conectores de Causa y Contraste: ALTHOUGH, DESPITE, BECAUSE OF",
            "level": "B1",
            "category": "Conectores Lógicos",
            "summary": "Articulan ideas contrapuestas o relaciones causales gobernando cláusulas con sujeto y verbo o frases nominales.",
            "formula": "ALTHOUGH / EVEN THOUGH + Sujeto + Verbo | DESPITE / IN SPITE OF + Sustantivo o Gerundio (-ing).",
            "rules": [
                "ALTHOUGH / EVEN THOUGH: van seguidos de una oración completa con sujeto y verbo: 'Although it was raining, we went out'.",
                "DESPITE / IN SPITE OF: van seguidos de sustantivo, pronombre o gerundio (-ing): 'Despite the rain, we went out'.",
                "NUNCA se pone OF después de despite: incorrecto 'despite of'.",
                "BECAUSE (oración con verbo) vs. BECAUSE OF (sustantivo o pronombre)."
            ],
            "examplesUS": ["Although she was feeling tired, she finished the report on time."],
            "examplesUK": ["Although she was feeling tired, she completed the coursework on time."],
            "commonMistakes": [
                "Escribir 'despite of' (la forma correcta es 'despite' o 'in spite of').",
                "Poner verbo conjugado directamente tras despite: 'Despite it was cold' (debe ser 'Although it was cold')."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/connectives.htm"
        },
        {
            "id": "b1_lesson_20",
            "title": "Clase 20: Expresiones de Familiaridad: BE USED TO vs. GET USED TO + Gerundio",
            "level": "B1",
            "category": "Patrones de Hábito y Adaptación",
            "summary": "Diferencian el estado de estar acostumbrado a algo del proceso dinámico de adaptarse a una nueva situación.",
            "formula": "BE used to + Sustantivo / Gerundio (-ing) | GET used to + Sustantivo / Gerundio (-ing).",
            "rules": [
                "BE USED TO: describe un estado de familiaridad consolidada: 'I am used to getting up early' (estoy acostumbrado a madrugar).",
                "GET USED TO: describe el proceso de transición o adaptación: 'I am getting used to the British weather' (me estoy acostumbrando).",
                "REGLA CRUCIAL: en ambas estructuras, el 'to' es una PREPOSICIÓN; por tanto, el verbo siguiente VA EN GERUNDIO (-ing), nunca en infinitivo base.",
                "Contraste con USED TO (hábito pasado): 'I used to get up early' (antes madrugaba; infinitivo base)."
            ],
            "examplesUS": ["When she moved to New York, she quickly got used to taking the subway every day."],
            "examplesUK": ["When she moved to London, she quickly got used to taking the tube every day."],
            "commonMistakes": [
                "Usar infinitivo base con be/get used to: 'I am used to wake up early' (debe ser 'I am used to waking up early').",
                "Confundir 'used to + base' (hábito pasado extinto) con 'be used to + -ing' (costumbre presente activa)."
            ],
            "referenceLink": "https://agendaweb.org/verbs/used-to-be-used-to.html"
        }
    ]

print("get_b1_lessons configured.")

def get_b2_lessons():
    return [
        {
            "id": "b2_lesson_01",
            "title": "Clase 01: Past Perfect Simple: Acciones Anteriores en el Pasado",
            "level": "B2",
            "category": "Tiempos Verbales Perfectos Pasados",
            "summary": "Expresa una acción ocurrida y concluida con anterioridad a otro punto de referencia en el pasado.",
            "formula": "Sujeto + had ('d) + Participio Pasado (V3).",
            "rules": [
                "Establece una secuencia cronológica clara entre dos sucesos pasados: el más antiguo va en Past Perfect, el más reciente en Past Simple.",
                "Marcadores habituales: by the time, before, after, already, when.",
                "Ejemplo clave: 'When we arrived at the cinema, the movie had already started'."
            ],
            "examplesUS": ["By the time the board of directors convened, the CEO had already signed the agreement."],
            "examplesUK": ["By the time the board of directors convened, the managing director had already signed the contract."],
            "commonMistakes": [
                "Usar Past Perfect para dos acciones simultáneas o cronológicamente lineales consecutivas.",
                "Olvidar que 'by the time' en pasado rige Past Simple en su cláusula y Past Perfect en la principal."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/past_perf.htm"
        },
        {
            "id": "b2_lesson_02",
            "title": "Clase 02: Past Perfect Continuous: Duración y Causa Previa Pasada",
            "level": "B2",
            "category": "Tiempos Verbales Perfectos Continuos",
            "summary": "Resalta la duración y el proceso continuo de una actividad que se prolongó hasta un momento específico del pasado.",
            "formula": "Sujeto + had + BEEN + Verbo-ing.",
            "rules": [
                "Enfoca el esfuerzo o duración continuada que explica una situación pasada: 'He was tired because he had been running'.",
                "Preguntas de duración pasada: 'How long had you been working there when the company merged?'.",
                "Los verbos de estado mental o posesión rechazan el continuo y usan Past Perfect Simple."
            ],
            "examplesUS": ["They had been negotiating for six months before they finally reached a compromise."],
            "examplesUK": ["They had been negotiating for six months before they finally reached a compromise."],
            "commonMistakes": [
                "Usar Past Continuous en vez de Past Perfect Continuous cuando se menciona un periodo acumulado con for o since en el pasado.",
                "Usar -ing con verbos de estado: 'had been knowing' (debe ser 'had known')."
            ],
            "referenceLink": "https://agendaweb.org/verbs/past-perfect-continuous.html"
        },
        {
            "id": "b2_lesson_03",
            "title": "Clase 03: Futuro Continuo (Will be doing) para Eventos en Progreso",
            "level": "B2",
            "category": "Tiempos Verbales Futuros",
            "summary": "Describe una acción que estará en pleno desarrollo en un instante temporal específico del futuro.",
            "formula": "Sujeto + will be + Verbo-ing.",
            "rules": [
                "Acción en progreso en un momento futuro: 'This time tomorrow, I will be flying over the Atlantic'.",
                "Eventos que ocurrirán como parte natural del curso de las cosas o de la rutina habitual.",
                "Peticiones y preguntas extremadamente amables sobre los planes de otra persona: 'Will you be using your car tonight?'."
            ],
            "examplesUS": ["This time next week, we will be attending the national medical conference in Chicago."],
            "examplesUK": ["This time next week, we will be attending the national medical conference in Edinburgh."],
            "commonMistakes": [
                "Confundir 'will do' (decisión o predicción puntual) con 'will be doing' (proceso en curso en ese momento).",
                "Omitir el verbo 'be': 'I will doing' (debe ser 'I will be doing')."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/future_pro.htm"
        },
        {
            "id": "b2_lesson_04",
            "title": "Clase 04: Futuro Perfecto (Will have done) y Fechas Límite con BY",
            "level": "B2",
            "category": "Tiempos Verbales Futuros Perfectos",
            "summary": "Expresa que una acción estará completamente terminada antes de un plazo o fecha límite en el futuro.",
            "formula": "Sujeto + will have + Participio Pasado (V3) + BY / BY THE TIME.",
            "rules": [
                "Se usa típicamente con la preposición BY (para cuando llegue / antes de): by 2030, by next Friday, by the end of the year.",
                "Con BY THE TIME, la cláusula temporal VA OBLIGATORIAMENTE EN PRESENT SIMPLE: 'By the time you arrive, I will have finished'.",
                "Negativo: won't have + V3."
            ],
            "examplesUS": ["By the end of this year, the research team will have published four major papers."],
            "examplesUK": ["By the end of this year, the research team will have published four major papers."],
            "commonMistakes": [
                "Poner will tras 'by the time': 'By the time you will arrive' (debe ser 'By the time you arrive').",
                "Confundir el Futuro Continuo con el Futuro Perfecto."
            ],
            "referenceLink": "https://agendaweb.org/verbs/future-perfect-exercises.html"
        },
        {
            "id": "b2_lesson_05",
            "title": "Clase 05: Tercer Condicional (Third Conditional): Hipótesis y Lamentos Pasados",
            "level": "B2",
            "category": "Oraciones Condicionales Hipotéticas",
            "summary": "Plantea una hipótesis sobre un hecho pasado que no ocurrió y su consecuencia imposible en el pasado.",
            "formula": "IF + Past Perfect (had + V3), WOULD HAVE + Participio Pasado (V3).",
            "rules": [
                "Expresa arrepentimiento, reproche o alivio sobre hechos pasados inalterables.",
                "En el resultado pueden utilizarse COULD HAVE (habilidad/posibilidad) o MIGHT HAVE (posibilidad incierta).",
                "NUNCA se pone would have dentro de la cláusula de IF: incorrecto 'If I would have known'."
            ],
            "examplesUS": ["If we had known the flight was canceled, we would have booked a hotel room earlier."],
            "examplesUK": ["If we had known the flight was cancelled, we would have booked a hotel room earlier."],
            "commonMistakes": [
                "Colocar would have tras if: 'If I would have studied, I would have passed' (debe ser 'If I had studied').",
                "Olvidar el participio pasado en el resultado: 'would have pass'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/conditional_3.htm"
        },
        {
            "id": "b2_lesson_06",
            "title": "Clase 06: Condicionales Mixtos (Mixed Conditionals)",
            "level": "B2",
            "category": "Condicionales Complejos",
            "summary": "Combinan tiempos de diferente naturaleza cronológica: una causa pasada con una repercusión en el presente.",
            "formula": "IF + Past Perfect (causa pasada), WOULD + V(base) (efecto presente actual).",
            "rules": [
                "Tipo más común: Causa en el pasado que altera la situación del ahora: 'If I had accepted that job in New York, I would live in Manhattan today'.",
                "Tipo inverso: Condición permanente o cualidad presente con resultado en el pasado: 'If I were more ambitious, I would have applied for the promotion last month'.",
                "Requiere análisis semántico estricto de las referencias temporales (today, now, yesterday)."
            ],
            "examplesUS": ["If she had studied computer science in college, she would have a lucrative career today."],
            "examplesUK": ["If she had studied computer science at university, she would have a lucrative career today."],
            "commonMistakes": [
                "Confundir un condicional mixto con un tercer condicional puro al ignorar marcadores de presente como 'today' o 'now'.",
                "Poner would en la cláusula con if."
            ],
            "referenceLink": "https://agendaweb.org/verbs/conditional-mixed.html"
        },
        {
            "id": "b2_lesson_07",
            "title": "Clase 07: Estilo Indirecto (Reported Speech): Corrimiento de Tiempos (Backshift)",
            "level": "B2",
            "category": "Estilo Indirecto & Discurso",
            "summary": "Mecanismo sintáctico para transmitir lo expresado por otra persona retrocediendo un paso en la escala de tiempos verbales.",
            "formula": "Sujeto + said / told + (that) + Oración con Backshift.",
            "rules": [
                "Present Simple -> Past Simple: 'I live here' -> He said he lived there.",
                "Present Continuous -> Past Continuous: 'I am working' -> She said she was working.",
                "Past Simple / Present Perfect -> PAST PERFECT: 'I bought it' -> He said he had bought it.",
                "Will -> WOULD, Can -> COULD, May -> MIGHT, Must -> HAD TO.",
                "Cambios deícticos: now -> then, today -> that day, yesterday -> the day before, tomorrow -> the next day, here -> there."
            ],
            "examplesUS": ["The attorney said that his client had already answered all the investigator's questions."],
            "examplesUK": ["The barrister said that his client had already answered all the investigator's questions."],
            "commonMistakes": [
                "Olvidar retroceder el tiempo verbal: decir 'She said she is tired' (debe ser 'was tired' en relato cerrado).",
                "Confundir SAY (no exige objeto directo de persona) con TELL (exige obligatoriamente persona: 'He told ME', nunca 'He said me')."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/reported_speech.htm"
        },
        {
            "id": "b2_lesson_08",
            "title": "Clase 08: Reported Speech: Preguntas Indirectas y Comandos",
            "level": "B2",
            "category": "Estilo Indirecto & Interrogación",
            "summary": "Transformación de preguntas y directivas en estilo indirecto, eliminando la inversión interrogativa y los auxiliares do/did.",
            "formula": "Pregunta WH-: asked + WH- word + Sujeto + Verbo. Pregunta Sí/No: asked + IF / WHETHER + Sujeto + Verbo.",
            "rules": [
                "REGLA DE ORO DE PREGUNTAS: la pregunta indirecta PIERDE la inversión y se convierte en orden afirmativo: 'Where do you live?' -> She asked me where I lived.",
                "Los auxiliares do, does y did desaparecen por completo en la pregunta indirecta.",
                "Preguntas de Sí o No se introducen con IF o WHETHER: 'Do you speak Spanish?' -> He asked if I spoke Spanish.",
                "Comandos e imperativos usan infinitivo con TO: 'Open the door' -> He told me TO open the door / 'Don't speak' -> told me NOT TO speak."
            ],
            "examplesUS": ["The police officer asked whether anyone had seen the vehicle license plate."],
            "examplesUK": ["The police officer asked whether anyone had seen the car registration plate."],
            "commonMistakes": [
                "Conservar la inversión o el auxiliar: 'She asked where did I live' (error fatal; debe ser 'where I lived').",
                "Escribir 'not to' al revés: 'to not speak' (lo formal estándar es 'not to speak')."
            ],
            "referenceLink": "https://agendaweb.org/verbs/reported_speech-exercises.html"
        },
        {
            "id": "b2_lesson_09",
            "title": "Clase 09: Verbos de Notificación Complejos (Reporting Verbs)",
            "level": "B2",
            "category": "Verbos de Notificación Avanzados",
            "summary": "Sustituyen a los genéricos say y tell aportando la intención pragmática exacta del hablante.",
            "formula": "Verbo + gerundio / Verbo + infinitivo / Verbo + preposición + gerundio.",
            "rules": [
                "Verbo + Gerundio (-ing): DENY, ADMIT, SUGGEST, RECOMMEND: 'He denied stealing the money', 'She suggested taking a taxi'.",
                "NUNCA se usa infinitivo tras suggest o recommend: incorrecto 'He suggested to go' (debe ser 'He suggested going' o 'suggested that we go').",
                "Verbo + Preposición + Gerundio: INSIST ON + -ing, APOLOGIZE FOR + -ing, ACCUSE OF + -ing: 'He apologized for being late'.",
                "Verbo + Persona + TO + base: WARN, ADVISE, ENCOURAGE, INVITE, REMIND: 'She warned me not to touch the wire'."
            ],
            "examplesUS": ["The dean suggested revising the syllabus and recommended investing in laboratory equipment."],
            "examplesUK": ["The dean suggested revising the syllabus and recommended investing in laboratory equipment."],
            "commonMistakes": [
                "Poner infinitivo tras suggest: 'He suggested to buy a car' (error muy extendido; debe ser 'suggested buying').",
                "Olvidar la preposición 'for' con apologize: 'He apologized being late'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/reporting_verbs.htm"
        },
        {
            "id": "b2_lesson_10",
            "title": "Clase 10: Verbo + Gerundio vs. Infinitivo con Cambio Radical de Sentido",
            "level": "B2",
            "category": "Complementación Verbal",
            "summary": "Verbos cuyos complementos en -ing o infinitivo con to alteran por completo el significado lógico de la oración.",
            "formula": "Verbo + -ing (acción previa o disfrute) vs. Verbo + to base (deber o acción futura).",
            "rules": [
                "REMEMBER: + to do (acordarse de hacer algo que es un deber futuro); + doing (recordar una experiencia vivida en el pasado).",
                "FORGET: + to do (olvidar hacer un deber); + doing (olvidar una vivencia pasada, casi siempre con won't forget).",
                "STOP: + to do (interrumpir una actividad para iniciar otra); + doing (dejar un hábito permanentemente: 'I stopped smoking').",
                "REGRET: + to inform (lamentar tener que dar una mala noticia ahora); + doing (arrepentirse de una acción cometida en el pasado).",
                "TRY: + to do (hacer un esfuerzo físico o mental arduo); + doing (probar un método o experimento para ver si funciona)."
            ],
            "examplesUS": ["He stopped working at 5:00 PM to take a walk, and he remembers locking the office door."],
            "examplesUK": ["He stopped working at 5:00 PM to take a walk, and he remembers locking the office door."],
            "commonMistakes": [
                "Decir 'I stopped to smoke' cuando querías decir que dejaste el vicio (eso significa 'me detuve para fumar un cigarrillo').",
                "Usar infinitivo con regret para arrepentimiento pasado: 'I regret to say that yesterday' (debe ser 'regret saying')."
            ],
            "referenceLink": "https://agendaweb.org/verbs/gerund-infinitive-meaning-change.html"
        },
        {
            "id": "b2_lesson_11",
            "title": "Clase 11: Voz Pasiva Avanzada: Verbos Ditransitivos e Impersonales",
            "level": "B2",
            "category": "Voz Pasiva de Alta Complejidad",
            "summary": "Construcciones pasivas con verbos que poseen dos objetos (dar, ofrecer, enviar) y estructuras periodísticas impersonales.",
            "formula": "Pasiva de persona: Persona + be + V3 + Objeto directo | Pasiva impersonal: It is said / believed / reported that...",
            "rules": [
                "VERBOS DITRANSITIVOS (give, offer, send, award, pay): en inglés es MUCHO MÁS NATURAL iniciar la pasiva con la PERSONA que con la cosa: 'She was given a prestigious award' (más natural que 'A prestigious award was given to her').",
                "PASIVA IMPERSONAL (para distanciamiento y rumor periodístico): 'It is reported that the minister has resigned'.",
                "PASIVA CON SUJETO PERSONAL ELEVADO: 'The minister is reported to have resigned' (Sujeto + be + reported + to have + V3)."
            ],
            "examplesUS": ["The young researcher was awarded a federal fellowship and is believed to have discovered a breakthrough."],
            "examplesUK": ["The young researcher was awarded a national fellowship and is believed to have discovered a breakthrough."],
            "commonMistakes": [
                "Traducir literalmente del español comenzando siempre por la cosa ('A bonus was paid to me' en vez del natural 'I was paid a bonus').",
                "Olvidar el infinitivo perfecto en pasivas personales de acciones pasadas: 'is said to fled' (debe ser 'is said to have fled')."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/passive_advanced.htm"
        },
        {
            "id": "b2_lesson_12",
            "title": "Clase 12: Modales de Deducción en Pasado: MUST HAVE, CAN'T HAVE, COULD HAVE",
            "level": "B2",
            "category": "Modales Epistémicos Pasados",
            "summary": "Deducciones lógicas retrospectivas basadas en evidencias presentes sobre hechos ocurridos en el pasado.",
            "formula": "Sujeto + must / can't / couldn't / might / could + HAVE + Participio Pasado (V3).",
            "rules": [
                "MUST HAVE + V3: certeza lógica retrospectiva afirmativa (conclusión evidente): 'The streets are wet; it must have rained last night'.",
                "CAN'T HAVE / COULDN'T HAVE + V3: certeza lógica retrospectiva negativa (imposibilidad demostrada): 'He was in Tokyo yesterday; he can't have committed the crime in London'.",
                "MIGHT HAVE / COULD HAVE + V3: posibilidad teórica no confirmada: 'She hasn't arrived; she might have missed her train'.",
                "COULD HAVE + V3 también expresa una oportunidad que se tuvo pero que no se llevó a cabo: 'I could have helped you, but you didn't ask'."
            ],
            "examplesUS": ["He can't have forgotten the appointment; he must have been delayed by the severe blizzard."],
            "examplesUK": ["He can't have forgotten the appointment; he must have been delayed by the severe snowstorm."],
            "commonMistakes": [
                "Usar mustn't have para imposibilidad: decir 'He mustn't have stolen the file' (debe ser 'He can't have stolen').",
                "Escribir 'must of' en lugar de 'must have' (error fonético común por la pronunciación /mʌstəv/)."
            ],
            "referenceLink": "https://agendaweb.org/verbs/modals-past-deduction.html"
        },
        {
            "id": "b2_lesson_13",
            "title": "Clase 13: Modales de Crítica y Lamento: SHOULD HAVE / OUGHT TO HAVE",
            "level": "B2",
            "category": "Modales Deónticos Pasados",
            "summary": "Expresan que una acción era el deber o la decisión correcta en el pasado, pero no se ejecutó, o viceversa.",
            "formula": "Sujeto + should have / shouldn't have + Participio Pasado (V3).",
            "rules": [
                "SHOULD HAVE + V3: crítica de omisión (debió haberse hecho pero no se hizo): 'You should have locked the door'.",
                "SHOULDN'T HAVE + V3: crítica de comisión (se hizo pero fue un error reprochable): 'You shouldn't have yelled at your boss'.",
                "OUGHT TO HAVE + V3: variante formal idéntica: 'They ought to have informed the council'.",
                "NEEDN'T HAVE + V3: se ejecutó la acción pero resultó ser innecesaria en retrospectiva: 'You needn't have bought bread; we had plenty'."
            ],
            "examplesUS": ["You should have told the supervisor about the safety hazard before the inspection."],
            "examplesUK": ["You should have informed the manager about the safety hazard before the audit."],
            "commonMistakes": [
                "Confundir 'needn't have done' (se hizo pero no era necesario) con 'didn't need to do' (no era necesario y no se hizo).",
                "Escribir 'should of' en vez de 'should have'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/modals_past.htm"
        },
        {
            "id": "b2_lesson_14",
            "title": "Clase 14: Estructuras con WISH e IF ONLY: Deseos y Lamentos",
            "level": "B2",
            "category": "Subjuntivo & Expresión Desiderativa",
            "summary": "Expresan el anhelo de que una situación presente o pasada fuera diferente de la realidad objetiva.",
            "formula": "Deseo presente: wish + Past Simple / Lamento pasado: wish + Past Perfect / Queja: wish + WOULD.",
            "rules": [
                "DESEO EN PRESENTE: rige Past Simple: 'I wish I had more free time' (Ojalá tuviera más tiempo libre; no lo tengo).",
                "WERE para todas las personas: 'I wish I were taller' (preferente al coloquial was).",
                "LAMENTO SOBRE EL PASADO: rige Past Perfect: 'I wish I had accepted that scholarship' (Ojalá hubiera aceptado).",
                "QUEJA SOBRE CONDUCTA AJENA: rige WOULD: 'I wish you would stop interrupting me' (NUNCA se usa would con 'I' o 'we').",
                "IF ONLY tiene el mismo valor sintáctico que wish pero con mayor carga dramática y enfática."
            ],
            "examplesUS": ["I wish I had saved more money for college, and I wish the landlord would fix the heating."],
            "examplesUK": ["I wish I had saved more money for university, and I wish the landlord would repair the heating."],
            "commonMistakes": [
                "Usar Present Simple tras wish para un deseo presente: decir 'I wish I have money' (debe ser 'I wish I had money').",
                "Decir 'I wish I would have more time' (con el propio sujeto no se usa would; debe ser 'I wish I had')."
            ],
            "referenceLink": "https://agendaweb.org/verbs/wish-if-only-exercises.html"
        },
        {
            "id": "b2_lesson_15",
            "title": "Clase 15: Preferencias: WOULD RATHER vs. WOULD PREFER con Sujeto Distinto",
            "level": "B2",
            "category": "Estructuras de Preferencia",
            "summary": "Régimen sintáctico para manifestar preferencias personales o deseos sobre la conducta de otra persona.",
            "formula": "Mismo sujeto: would rather + infinitivo desnudo. Sujeto diferente: would rather + Sujeto + Past Simple.",
            "rules": [
                "MISMO SUJETO: 'I would rather stay home tonight' (infinitivo sin to, nunca gerundio).",
                "SUJETO DIFERENTE (deseo sobre otra persona): EXIGE OBLIGATORIAMENTE PAST SIMPLE (pasado subjuntivo): 'I would rather you didn't smoke in here' (Preferiría que no fumaras aquí).",
                "WOULD PREFER rige infinitivo con to cuando el sujeto es el mismo: 'I would prefer to stay home' / 'I'd prefer you to leave'."
            ],
            "examplesUS": ["I would rather stay in the city, but my spouse would rather we moved to the suburbs."],
            "examplesUK": ["I would rather stay in the city, but my spouse would rather we moved to the countryside."],
            "commonMistakes": [
                "Poner 'to' tras would rather: 'I would rather to stay' (debe ser 'would rather stay').",
                "Usar presente tras would rather con sujeto distinto: 'I would rather you don't go' (debe ser 'didn't go')."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/would_rather.htm"
        },
        {
            "id": "b2_lesson_16",
            "title": "Clase 16: Conectores Concesivos Avanzados: WHEREAS, NEVERTHELESS, FURTHERMORE",
            "level": "B2",
            "category": "Marcadores Discursivos Avanzados",
            "summary": "Articulan argumentos complejos de contraste, adición y concesión en ensayos académicos y debates formales.",
            "formula": "Cláusula A ; nevertheless / however , Cláusula B | Whereas Cláusula A , Cláusula B.",
            "rules": [
                "WHEREAS / WHILE: comparan dos hechos directos o realidades contrastantes: 'Some prefer online classes, whereas others favor in-person seminars'.",
                "NEVERTHELESS / NONETHELESS: sinónimos formales de 'however' que introducen una conclusión inesperada tras una premisa previa.",
                "FURTHERMORE / MOREOVER: conectores de adición acumulativa que introducen un argumento adicional de peso.",
                "PUNTUACIÓN: nevertheless y furthermore suelen ir precedidos de punto o punto y coma y seguidos de coma obligatoria."
            ],
            "examplesUS": ["The budget was significantly reduced; nevertheless, the engineering team completed the satellite project."],
            "examplesUK": ["The budget was significantly reduced; nevertheless, the engineering team completed the satellite project."],
            "commonMistakes": [
                "Usar whereas como si fuera although para una concesión de sorpresa.",
                "Omitir la puntuación formal con conectores oracionales adverbiales."
            ],
            "referenceLink": "https://agendaweb.org/grammar/transition-words-exercises.html"
        },
        {
            "id": "b2_lesson_17",
            "title": "Clase 17: Phrasal Verbs de Tres Partículas (Three-Part Phrasal Verbs)",
            "level": "B2",
            "category": "Verbos Frasales Complejos",
            "summary": "Construcciones compuestas por un verbo seguido de un adverbio y una preposición fija. SON ESTRICTAMENTE INSEPARABLES.",
            "formula": "Verbo + Partícula 1 + Partícula 2 + Objeto.",
            "rules": [
                "Son 100% inseparables; el objeto jamás puede intercalarse entre sus partículas.",
                "LOOK FORWARD TO (+ gerundio o sustantivo): esperar con ilusión: 'I look forward to hearing from you' (to es preposición; exige -ing).",
                "PUT UP WITH: tolerar o soportar una situación incómoda: 'I cannot put up with this noise'.",
                "RUN OUT OF: quedarse sin provisiones: 'We have run out of printer paper'.",
                "CATCH UP WITH: alcanzar a alguien en nivel o distancia. CUT DOWN ON: reducir el consumo de algo."
            ],
            "examplesUS": ["We have run out of toner, and I am really looking forward to finishing this quarterly report."],
            "examplesUK": ["We have run out of ink, and I am really looking forward to completing this term's report."],
            "commonMistakes": [
                "Poner infinitivo base tras look forward to: 'look forward to meet you' (error fatal; debe ser 'to meeting you').",
                "Intentar separar el objeto en un verbo de tres partículas: 'put this noise up with'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/phrasal_verbs_three.htm"
        },
        {
            "id": "b2_lesson_18",
            "title": "Clase 18: Cláusulas de Participio (-ING / -ED) para Economizar Oraciones",
            "level": "B2",
            "category": "Sintaxis & Reducción de Cláusulas",
            "summary": "Sustituyen a oraciones completas de tiempo, causa o relativo mediante participios activos (-ing) o pasivos (-ed).",
            "formula": "Participio de presente (-ing) para voz activa / Participio pasado (-ed) para voz pasiva.",
            "rules": [
                "Cláusula de tiempo activa reducida: 'Hearing the alarm, the students evacuated' (= When they heard the alarm).",
                "Cláusula de relativo reducida activa: 'The people living next door are noisy' (= who live next door).",
                "Cláusula de relativo reducida pasiva: 'The data collected during the study was conclusive' (= which was collected).",
                "REGLA DEL SUJETO COMPARTIDO: el sujeto de la cláusula de participio DEBE SER EL MISMO que el de la oración principal para evitar participios flotantes (dangling participles)."
            ],
            "examplesUS": ["Having passed all qualifying exams, the doctoral candidate began drafting her dissertation."],
            "examplesUK": ["Having passed all qualifying exams, the doctoral candidate began drafting her thesis."],
            "commonMistakes": [
                "Crear un dangling participle: 'Walking down the street, the building caught fire' (parece que el edificio iba caminando).",
                "Usar participio pasado cuando el sentido es activo."
            ],
            "referenceLink": "https://agendaweb.org/grammar/participle-clauses.html"
        },
        {
            "id": "b2_lesson_19",
            "title": "Clase 19: Oraciones Hendidas Básicas (Cleft Sentences: IT WAS... THAT)",
            "level": "B2",
            "category": "Estructuras de Énfasis",
            "summary": "Dividen una oración en dos partes para focalizar y resaltar un elemento informativo concreto mediante 'It is/was... that'.",
            "formula": "IT IS / WAS + Elemento enfocado + THAT / WHO + Resto de la oración.",
            "rules": [
                "Frase neutral: 'Alexander Fleming discovered penicillin in 1928'.",
                "Énfasis en el sujeto: 'IT WAS Fleming WHO/THAT discovered penicillin in 1928'.",
                "Énfasis en el objeto: 'IT WAS penicillin THAT Fleming discovered in 1928'.",
                "Énfasis en el tiempo: 'IT WAS in 1928 THAT Fleming discovered penicillin'.",
                "Pseudo-cleft con WHAT: 'WHAT I need IS a good night's sleep'."
            ],
            "examplesUS": ["It was the lack of maintenance that caused the electrical malfunction in the server room."],
            "examplesUK": ["It was the lack of maintenance that caused the electrical failure in the server room."],
            "commonMistakes": [
                "Usar 'what' en lugar de 'that' en la hendida con it: 'It was the money what he wanted' (debe ser 'that he wanted').",
                "Olvidar concordar el tiempo del verbo to be con la oración original."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/cleft_sentences.htm"
        },
        {
            "id": "b2_lesson_20",
            "title": "Clase 20: Inversión Condicional Formal (SHOULD, WERE, HAD)",
            "level": "B2",
            "category": "Condicionales de Registro Elevado",
            "summary": "Elimina el nexo condicional IF e invierte el auxiliar en cabeza de oración para conferir un tono sumamente formal y protocolario.",
            "formula": "Primer Condicional: SHOULD you require... | Segundo: WERE he to visit... | Tercero: HAD we known...",
            "rules": [
                "Inversión de Primer Condicional (con should): 'If you need assistance' -> 'SHOULD you need assistance, please contact us'.",
                "Inversión de Segundo Condicional (con were): 'If I knew the truth' -> 'WERE I to know the truth...' / 'If he were present' -> 'WERE he present...'.",
                "Inversión de Tercer Condicional (con had): 'If we had known the schedule' -> 'HAD we known the schedule, we would have attended'.",
                "En la inversión, IF desaparece por completo."
            ],
            "examplesUS": ["Should you require any supplementary documentation, do not hesitate to contact our admissions office."],
            "examplesUK": ["Should you require any further documentation, do not hesitate to contact our admissions office."],
            "commonMistakes": [
                "Mantener la palabra 'if' y realizar la inversión simultáneamente: 'If had we known' (error grave; debe ser 'Had we known').",
                "Usar did en vez de were en la inversión de segundo condicional: 'Did I know' (incorrecto; debe ser 'Were I to know')."
            ],
            "referenceLink": "https://agendaweb.org/verbs/conditional-inversion.html"
        }
    ]

print("get_b2_lessons configured.")

def get_c1_lessons():
    return [
        {
            "id": "c1_lesson_01",
            "title": "Clase 01: Inversión Negativa Enfática: NEVER, RARELY, SELDOM, LITTLE",
            "level": "C1",
            "category": "Inversión Sintáctica & Retórica",
            "summary": "Anteponer un adverbio restrictivo o negativo al frente de la oración para generar máxima solemnidad o dramatismo.",
            "formula": "Adverbio Negativo + Auxiliar + Sujeto + Verbo Principal.",
            "rules": [
                "Aplica con: NEVER, RARELY, SELDOM, LITTLE, BARELY, SCARCELY.",
                "Estructura idéntica a una pregunta interrogativa, pero la oración sigue siendo afirmativa en su valor declarativo.",
                "LITTLE con verbos de conocimiento o percepción: 'Little did he know that the audit had already started' (= He did not know at all).",
                "Si la oración no tiene auxiliar natural (Present o Past Simple), se introduce obligatoriamente DO, DOES o DID."
            ],
            "examplesUS": ["Rarely has the medical community witnessed such rapid consensus regarding a therapeutic protocol."],
            "examplesUK": ["Rarely has the medical community witnessed such rapid consensus regarding a therapeutic protocol."],
            "commonMistakes": [
                "Olvidar invertir el auxiliar tras el adverbio: 'Rarely the community has witnessed' (debe ser 'Rarely has the community witnessed').",
                "Usar doble negación tras el adverbio restrictivo inicial."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/inversion_neg.htm"
        },
        {
            "id": "c1_lesson_02",
            "title": "Clase 02: Inversión Temporal Compleja: NO SOONER... THAN / HARDLY... WHEN",
            "level": "C1",
            "category": "Inversión & Correlativos Temporales",
            "summary": "Expresan que una acción ocurrió inmediatamente después de otra sin intervalo de demora perceptible.",
            "formula": "NO SOONER + had + S + V3 + THAN + Past Simple | HARDLY / SCARCELY + had + S + V3 + WHEN + Past Simple.",
            "rules": [
                "NO SOONER exige estrictamente la partícula THAN (nunca when ni that).",
                "HARDLY y SCARCELY exigen estrictamente la partícula WHEN (nunca than).",
                "La primera cláusula va invariablemente en Past Perfect invertido: 'No sooner had she hung up the phone than it rang again'."
            ],
            "examplesUS": ["No sooner had the keynote speaker stepped onto the stage than the entire auditorium erupted in applause."],
            "examplesUK": ["No sooner had the keynote speaker stepped onto the stage than the entire auditorium erupted in applause."],
            "commonMistakes": [
                "Combinar 'No sooner' con 'when' (error muy penalizado en exámenes internacionales; debe ser 'than').",
                "Combinar 'Hardly' con 'than' (debe ser 'when')."
            ],
            "referenceLink": "https://agendaweb.org/grammar/inversion-no-sooner.html"
        },
        {
            "id": "c1_lesson_03",
            "title": "Clase 03: Inversión con NOT ONLY... BUT ALSO y Locuciones Negativas",
            "level": "C1",
            "category": "Inversión & Conectores Correlativos",
            "summary": "Estructuras enfáticas bilaterales para coordinar dos argumentos de gran peso o prohibiciones categóricas absolutas.",
            "formula": "NOT ONLY + Auxiliar + S + V + BUT (S) ALSO + V | UNDER NO CIRCUMSTANCES + Auxiliar + S + V.",
            "rules": [
                "NOT ONLY en posición inicial exige inversión en la primera cláusula: 'Not only did they meet the deadline, but they also exceeded expectations'.",
                "La segunda cláusula ('but also') NO lleva inversión.",
                "Locuciones de prohibición absoluta que exigen inversión: UNDER NO CIRCUMSTANCES, ON NO ACCOUNT, AT NO TIME: 'Under no circumstances should you enter the cleanroom without protective attire'."
            ],
            "examplesUS": ["Under no circumstances will confidential patient records be disclosed without explicit judicial authorization."],
            "examplesUK": ["Under no circumstances will confidential patient records be disclosed without explicit judicial authorization."],
            "commonMistakes": [
                "Invertir la segunda cláusula tras 'but also' (la segunda cláusula conserva el orden normal de sujeto y verbo).",
                "Omitir el auxiliar en 'Under no circumstances you should enter'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/inversion_not_only.htm"
        },
        {
            "id": "c1_lesson_04",
            "title": "Clase 04: Oraciones Hendidas Avanzadas (Pseudo-clefts con ALL, WHAT, REASON)",
            "level": "C1",
            "category": "Focalización Sintáctica",
            "summary": "Mecanismos para desplazar el foco informativo hacia el final de la oración mediante cláusulas nominales relativas.",
            "formula": "WHAT + Cláusula + BE + Elemento enfocado | ALL (THAT) + Cláusula + BE + Elemento enfocado.",
            "rules": [
                "Pseudo-cleft con WHAT: 'What surprised the researchers was the resilience of the bacteria'.",
                "Pseudo-cleft con ALL (solo / la única cosa): 'All that the candidate wanted was an impartial interview'.",
                "Con frases nominales preparatorias: 'The reason why he resigned was...', 'The person who authorized the transfer was...'.",
                "Concordancia: si el elemento enfocado es plural, el verbo to be puede concordar en singular o plural según el estilo estilístico."
            ],
            "examplesUS": ["What the executive board failed to comprehend was the geopolitical volatility of the energy sector."],
            "examplesUK": ["What the executive board failed to comprehend was the geopolitical volatility of the energy sector."],
            "commonMistakes": [
                "Poner 'which' en vez de 'what' en pseudo-clefts: 'Which I want is peace' (debe ser 'What I want is peace').",
                "Olvidar el verbo to be como puente copulativo del foco."
            ],
            "referenceLink": "https://agendaweb.org/grammar/cleft-sentences-advanced.html"
        },
        {
            "id": "c1_lesson_05",
            "title": "Clase 05: El Subjuntivo Mandativo en Inglés Formal (Mandative Subjunctive)",
            "level": "C1",
            "category": "Modo Subjuntivo Formal",
            "summary": "Uso de la forma base del verbo (infinitivo sin to) para todas las personas gramaticales en cláusulas dependientes de orden, recomendación o urgencia.",
            "formula": "Sujeto + Verbo de mandato (demand, insist, recommend) + THAT + Sujeto + VERBO BASE.",
            "rules": [
                "Verbos inductores: DEMAND, INSIST, REQUIRE, RECOMMEND, SUGGEST, PROPOSE, REQUEST, ORDER.",
                "Adjetivos inductores: IT IS ESSENTIAL / VITAL / CRUCIAL / IMPERATIVE THAT...",
                "EL VERBO NO CAMBIA EN TERCERA PERSONA: 'I insist that he BE present' (nunca is), 'She recommended that he SUBMIT the paper' (nunca submits).",
                "Negación del subjuntivo mandativo: se antepone NOT directamente antes de la base verbal: 'The committee insisted that the data NOT BE released'."
            ],
            "examplesUS": ["The ethical commission insisted that every clinical trial participant be fully informed of potential side effects."],
            "examplesUK": ["The ethical commission insisted that every clinical trial participant should be fully informed of potential side effects."],
            "commonMistakes": [
                "Añadir -s a la tercera persona en el subjuntivo mandativo: 'insisted that he comes' (en estándar formal es 'that he come').",
                "Usar don't o doesn't para negar el subjuntivo: 'insisted that he doesn't leave' (debe ser 'that he not leave')."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/subjunctive.htm"
        },
        {
            "id": "c1_lesson_06",
            "title": "Clase 06: Pasado Irreal (Unreal Past): IT'S HIGH TIME / IT'S ABOUT TIME",
            "level": "C1",
            "category": "Modo Subjuntivo & Tiempos Irreales",
            "summary": "Construcciones temporales que denotan urgencia o reproche indicando que una acción debió haberse realizado antes del presente.",
            "formula": "IT IS (HIGH / ABOUT) TIME + Sujeto + PAST SIMPLE.",
            "rules": [
                "Rige estrictamente PAST SIMPLE para expresar presente o futuro imperioso: 'It's high time you took a vacation' (Ya es hora de que te tomes unas vacaciones; debiste hacerlo antes).",
                "NUNCA se emplea presente ni futuro tras 'It's high time + sujeto': incorrecto 'It's high time you take a vacation'.",
                "Si no hay sujeto personal explícito, se utiliza infinitivo con to: 'It's time to start'."
            ],
            "examplesUS": ["It is high time the municipal government upgraded the public transit infrastructure."],
            "examplesUK": ["It is high time the municipal council upgraded the public transport infrastructure."],
            "commonMistakes": [
                "Usar Present Simple tras 'It's high time + sujeto': 'It's high time we leave' (debe ser 'It's high time we left').",
                "Usar should tras high time: 'It's high time we should go' (debe ser 'It's high time we went')."
            ],
            "referenceLink": "https://agendaweb.org/grammar/unreal-past-exercises.html"
        },
        {
            "id": "c1_lesson_07",
            "title": "Clase 07: Pasiva Impersonal Avanzada y Estructuras de Distanciamiento",
            "level": "C1",
            "category": "Voz Pasiva Periodística & Retórica",
            "summary": "Permite al emisor deslindar responsabilidad o citar alegaciones judiciales mediante pasivas con infinitivos perfectos o progresivos.",
            "formula": "Sujeto + is/are alleged / rumored / understood + TO HAVE + V3 / TO BE + -ing.",
            "rules": [
                "Para acciones anteriores al tiempo de la alegación se usa INFINITIVO PERFECTO: 'The suspect is alleged TO HAVE FLED across the border'.",
                "Para acciones en desarrollo simultáneo se usa INFINITIVO CONTINUO: 'The company is rumored TO BE NEGOTIATING a merger'.",
                "Verbos rectores de distanciamiento: allege, rumor, understand, believe, consider, presume, report."
            ],
            "examplesUS": ["The former corporate treasurer is alleged to have diverted millions of dollars into offshore accounts."],
            "examplesUK": ["The former corporate treasurer is alleged to have diverted millions of pounds into offshore accounts."],
            "commonMistakes": [
                "Usar infinitivo simple para un hecho pasado: 'is alleged to flee' (debe ser 'is alleged to have fled').",
                "Olvidar la preposición to antes del infinitivo."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/passive_distancing.htm"
        },
        {
            "id": "c1_lesson_08",
            "title": "Clase 08: Cláusulas Concesivas Complejas: AS THOUGH, AS IF, MUCH AS",
            "level": "C1",
            "category": "Concesión de Alto Registro",
            "summary": "Estructuras sofisticadas para manifestar contraste o apariencia hipotética contraria a los hechos observables.",
            "formula": "MUCH AS + Sujeto + Verbo , Cláusula principal | AS THOUGH / AS IF + Past Subjunctive.",
            "rules": [
                "MUCH AS equivale a 'Although... very much': 'Much as I respect his scholarship, I disagree with his conclusion' (Por mucho que respete su erudición...).",
                "AS IF / AS THOUGH con tiempo irreal rigen Past Simple o Past Perfect si la premisa es manifiestamente falsa: 'He talks as if he were the CEO' (habla como si fuera el presidente, pero no lo es).",
                "Si la apariencia es verosímil y probable, se emplean tiempos normales del indicativo: 'It looks as if it is going to rain'."
            ],
            "examplesUS": ["Much as we appreciate your input, the executive committee has already ratified the strategic budget."],
            "examplesUK": ["Much as we appreciate your input, the management board has already ratified the strategic budget."],
            "commonMistakes": [
                "Confundir 'much as' con 'as much as' en posición concesiva oracional inicial.",
                "Usar indicativo con 'as if' cuando la aserción es manifiestamente ficticia."
            ],
            "referenceLink": "https://agendaweb.org/grammar/clauses-contrast-exercises.html"
        },
        {
            "id": "c1_lesson_09",
            "title": "Clase 09: Uso Enfático de DO, DOES y DID en Oraciones Afirmativas",
            "level": "C1",
            "category": "Énfasis Verbal & Retórica",
            "summary": "Inserción deliberada del auxiliar en frases declarativas afirmativas para contrastar, desmentir o reafirmar con vehemencia.",
            "formula": "Sujeto + DO / DOES / DID + Verbo en Forma Base.",
            "rules": [
                "En inglés afirmativo normal no se usan auxiliares, pero su inclusión intencional aporta un fuerte énfasis retórico: 'I DID send the email yesterday' (Sí envié el correo, desmintiendo que no lo hice).",
                "En imperativos de hospitalidad exquisita: 'DO sit down, please', 'DO come in' (le confiere calidez y entusiasmo).",
                "El verbo léxico tras el auxiliar enfático VA SIEMPRE EN FORMA BASE: 'He DOES care about his students' (nunca cares)."
            ],
            "examplesUS": ["Although the experimental drug failed the primary efficacy benchmark, it did demonstrate significant cardiovascular benefits."],
            "examplesUK": ["Although the experimental drug failed the primary efficacy benchmark, it did demonstrate significant cardiovascular benefits."],
            "commonMistakes": [
                "Mantener la -s o el pasado en el verbo principal: 'He does works hard' (debe ser 'He does work hard').",
                "Abusar del do enfático en prosa neutra cuando no existe contraste previo."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/emphatic_do.htm"
        },
        {
            "id": "c1_lesson_10",
            "title": "Clase 10: Colocaciones Avanzadas e Idiomáticas Formales",
            "level": "C1",
            "category": "Léxico Académico & Colocaciones",
            "summary": "Asociaciones naturales y fijas de palabras que los hablantes nativos cultivados emplean de manera recurrente.",
            "formula": "Adverbio + Adjetivo / Verbo + Sustantivo / Adjetivo + Sustantivo fijos.",
            "rules": [
                "Colocaciones adjetivo-adverbio consagradas: BITTERLY DISAPPOINTED (nunca strongly disappointed), DEEPLY OFFENDED, HIGHLY PROBABLE, BLATANTLY OBVIOUS.",
                "Colocaciones verbo-sustantivo formales: CAST DOUBT ON (sembrar dudas sobre), DRAW A CONCLUSION (llegar a una conclusión), POSE A THREAT (constituir una amenaza), MITIGATE A RISK (mitigar un riesgo).",
                "Violaciones de colocación generan un inglés gramaticalmente comprensible pero estilísticamente antinatural."
            ],
            "examplesUS": ["The recent economic downturn poses a grave threat to emerging technology startups."],
            "examplesUK": ["The recent economic downturn poses a grave threat to emerging technology startups."],
            "commonMistakes": [
                "Traducir colocaciones literales del español: decir 'make a question' (debe ser 'ask a question').",
                "Decir 'heavily disappointed' en lugar del natural 'bitterly disappointed'."
            ],
            "referenceLink": "https://agendaweb.org/vocabulary/collocations-exercises.html"
        },
        {
            "id": "c1_lesson_11",
            "title": "Clase 11: Metáforas Gramaticales y Nominalización en Prosa Académica",
            "level": "C1",
            "category": "Estilística Académica & Registro",
            "summary": "Transformación de verbos y adjetivos en sustantivos abstractos para condensar información y elevar el registro científico.",
            "formula": "Verbo / Cláusula -> Sustantivo abstracto denso como sujeto oracional.",
            "rules": [
                "Registro coloquial narrativo (congruente): 'Because the climate got warmer, sea levels rose rapidly'.",
                "Registro académico nominalizado: 'GLOBAL WARMING ACCELERATED THE ELEVATION OF SEA LEVELS'.",
                "Permite empaquetar ideas complejas como hechos incontrovertibles y colocarlas en posición de tema oracional.",
                "Sufijos de nominalización: -tion, -sion, -ment, -ity, -ance, -ence, -ing."
            ],
            "examplesUS": ["The rapid deterioration of international trade negotiations prompted market volatility across Wall Street."],
            "examplesUK": ["The rapid deterioration of international trade negotiations prompted market volatility across the City of London."],
            "commonMistakes": [
                "Crear cadenas nominales excesivamente densas e impenetrables que oscurezcan el sentido lógico del texto.",
                "Olvidar coordinar adecuadamente el verbo principal tras sujetos nominales abstractos complejos."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/nominalisation.htm"
        },
        {
            "id": "c1_lesson_12",
            "title": "Clase 12: Inversión Locativa y Preposicional (DOWN CAME THE RAIN)",
            "level": "C1",
            "category": "Inversión Literaria & Espacial",
            "summary": "Inversión completa donde el verbo principal precede al sujeto tras una frase preposicional de lugar o dirección.",
            "formula": "Frase preposicional / Adverbio de dirección + Verbo intransitivo + Sujeto sustantivo.",
            "rules": [
                "Aplica con verbos de posición y movimiento: stand, sit, lie, come, go, walk, fly.",
                "Ejemplo: 'On the hill stood an ancient fortress' (en lugar de 'An ancient fortress stood on the hill').",
                "RESTRICCIÓN PRONOMINAL CRUCIAL: si el sujeto es un pronombre (he, she, it, they), LA INVERSIÓN NO SE APLICA: 'Down it came' (nunca 'Down came it')."
            ],
            "examplesUS": ["At the entrance to the amphitheater stood two decorated security guards."],
            "examplesUK": ["At the entrance to the auditorium stood two decorated security guards."],
            "commonMistakes": [
                "Aplicar inversión con pronombre personal: escribir 'In the room walked he' (debe ser 'In the room he walked').",
                "Insertar el auxiliar did en la inversión locativa: 'On the hill did stand a castle' (incorrecto; el verbo se invierte directamente)."
            ],
            "referenceLink": "https://agendaweb.org/grammar/locative-inversion.html"
        },
        {
            "id": "c1_lesson_13",
            "title": "Clase 13: Cláusulas de Participio con Sujeto Propio y Prevención de Dangling Participles",
            "level": "C1",
            "category": "Sintaxis de Cláusulas Reducidas",
            "summary": "Reglas para redactar construcciones participiales con sujeto independiente y evitar participios desconectados del sujeto principal.",
            "formula": "Sujeto A + Participio , Sujeto B + Verbo Principal (Cláusula Absoluta).",
            "rules": [
                "CLÁUSULA ABSOLUTA: posee su propio sujeto nominal explícito que no coincide con el de la cláusula matriz: 'Weather permitting, the spacecraft will launch at dawn' (Weather es sujeto del participio permitting; the spacecraft es sujeto del verbo will launch).",
                "ERROR DE DANGLING PARTICIPLE: ocurre cuando el sujeto implícito del participio no coincide lógicamente con el sujeto de la oración principal: incorrecto 'Walking into the hospital, the ambulance was seen by the doctor'.",
                "Corrección: 'Walking into the hospital, the doctor saw the ambulance'."
            ],
            "examplesUS": ["Her hands trembling with exhaustion, the surgeon carefully completed the delicate arterial anastomosis."],
            "examplesUK": ["Her hands trembling with exhaustion, the surgeon carefully completed the delicate arterial anastomosis."],
            "commonMistakes": [
                "Dejar el participio 'colgando' sin sujeto lógico coherente en la oración principal.",
                "Confundir una cláusula absoluta con una oración con error de concordancia."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/participle_absolute.htm"
        },
        {
            "id": "c1_lesson_14",
            "title": "Clase 14: Marcadores de Discurso Escrito Formal: INASMUCH AS, NOTWITHSTANDING",
            "level": "C1",
            "category": "Conectores de Registro Culto",
            "summary": "Conectores y locuciones subordinantes de máxima formalidad empleados en tratados diplomáticos, ensayos y jurisprudencia.",
            "formula": "NOTWITHSTANDING + Sustantivo | INASMUCH AS + Oración | WHEREBY + Oración.",
            "rules": [
                "NOTWITHSTANDING: sinónimo prestigioso de 'despite' o 'in spite of'; puede ir antes o después del sustantivo: 'Notwithstanding the adverse weather' o 'The adverse weather notwithstanding'.",
                "INASMUCH AS / INSOFAR AS: conector causal y de grado equivalente a 'en la medida en que' o 'puesto que'.",
                "WHEREBY: conector de medio o método equivalente a 'por el cual / según el cual': 'a treaty whereby both nations agreed to disarm'."
            ],
            "examplesUS": ["Notwithstanding rigorous clinical trials, the vaccine exhibited minor immunological variations across different demographic cohorts."],
            "examplesUK": ["Notwithstanding rigorous clinical trials, the vaccine exhibited minor immunological variations across different demographic cohorts."],
            "commonMistakes": [
                "Usar notwithstanding con la preposición 'of' (es directamente preposición en sí misma).",
                "Confundir whereby (por medio del cual) con wherein (en el cual)."
            ],
            "referenceLink": "https://agendaweb.org/grammar/advanced-discourse-markers.html"
        },
        {
            "id": "c1_lesson_15",
            "title": "Clase 15: Condicionales Invertidos de 3er Grado con Negación: HAD IT NOT BEEN FOR...",
            "level": "C1",
            "category": "Condicionales Avanzados",
            "summary": "Fórmula elegante para expresar 'de no haber sido por' una circunstancia o persona providencial en el pasado.",
            "formula": "HAD IT NOT BEEN FOR + Sustantivo , WOULD HAVE + V3.",
            "rules": [
                "Equivale exactamente a: 'If it had not been for...' o 'But for...'.",
                "LA CONTRACCIÓN HADN'T NO SE UTILIZA EN LA INVERSIÓN: se escribe siempre 'Had it NOT been for...' (nunca 'Hadn't it been for').",
                "Versión en presente de segundo grado: 'WERE IT NOT FOR your assistance, I would fail'."
            ],
            "examplesUS": ["Had it not been for the prompt intervention of the paramedic team, the patient would not have survived the cardiac arrest."],
            "examplesUK": ["Had it not been for the prompt intervention of the paramedic team, the patient would not have survived the cardiac arrest."],
            "commonMistakes": [
                "Contraer la negación al inicio: 'Hadn't it been for' (error de registro y sintaxis; debe ser 'Had it not been for').",
                "Olvidar que 'but for' exige sustantivo y no oración con verbo conjugado."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/conditional_inversion_neg.htm"
        },
        {
            "id": "c1_lesson_16",
            "title": "Clase 16: Modales Perifrásticos y Matices: NEEDN'T HAVE vs. DIDN'T NEED TO",
            "level": "C1",
            "category": "Matices Modales Avanzados",
            "summary": "Distinción semántica vital entre realizar una acción innecesaria y no realizarla porque no había necesidad.",
            "formula": "Needn't have + V3 (se hizo, pero fue en vano) vs. Didn't need to + base (no se hizo).",
            "rules": [
                "NEEDN'T HAVE + V3: la persona ejecutó el esfuerzo o la tarea en el pasado, pero luego descubrió que era completamente superflua: 'You needn't have cooked; I brought takeout'.",
                "DIDN'T NEED TO + base: la persona sabía de antemano que la acción no era obligatoria, por lo que NO la llevó a cabo: 'I didn't need to set my alarm because it was Sunday'.",
                "DARE y NEED como semimodales: pueden comportarse como modales sin do/did en oraciones negativas: 'He dare not speak', 'You need not worry'."
            ],
            "examplesUS": ["We needn't have rushed to the airport terminal; our flight had been delayed by two hours."],
            "examplesUK": ["We needn't have rushed to the airport terminal; our flight had been delayed by two hours."],
            "commonMistakes": [
                "Usar 'didn't need to' cuando el contexto evidencia que la acción sí fue ejecutada inútilmente.",
                "Poner 'to' tras needn't have: 'needn't have to go'."
            ],
            "referenceLink": "https://agendaweb.org/verbs/need-modal-exercises.html"
        },
        {
            "id": "c1_lesson_17",
            "title": "Clase 17: Verbos de Percepción con Infinitivo Desnudo vs. Participio Presente",
            "level": "C1",
            "category": "Percepción & Aspecto Verbal",
            "summary": "Verbos sensoriales (see, hear, watch, notice, feel) alternan su complemento según se presencie el acto íntegro o una fracción en curso.",
            "formula": "Verbo de percepción + Objeto + INFINITIVO DESNUDO (acto completo) | + GERUNDIO (acto en progreso parcial).",
            "rules": [
                "INFINITIVO DESNUDO (sin to): denota que el observador presenció la acción COMPLETA de principio a fin: 'I saw him CROSS the street' (lo vio iniciar, cruzar y llegar a la acera opuesta).",
                "GERUNDIO (-ing): denota que el observador presenció solo un fragmento o MOMENTO EN CURSO de la acción: 'I saw him CROSSING the street' (lo vio a mitad de la calle mientras cruzaba).",
                "En voz pasiva, el infinitivo desnudo recupera obligatoriamente la partícula TO: 'He was seen TO CROSS the street'."
            ],
            "examplesUS": ["The security guard saw the suspect enter the vault and heard the alarm sounding continuously."],
            "examplesUK": ["The security guard saw the suspect enter the vault and heard the alarm sounding continuously."],
            "commonMistakes": [
                "Usar infinitivo con to en voz activa con verbos de percepción: 'I heard him to speak' (debe ser 'I heard him speak' o 'speaking').",
                "Olvidar añadir 'to' cuando la estructura pasa a voz pasiva: 'He was seen enter' (debe ser 'was seen to enter')."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/verbs_perception.htm"
        },
        {
            "id": "c1_lesson_18",
            "title": "Clase 18: Mecanismos de Elipsis y Sustitución Sintáctica (DO SO, ONE/ONES)",
            "level": "C1",
            "category": "Cohesión Sintáctica & Economía",
            "summary": "Estrategias para evitar repeticiones innecesarias de predicados verbales o sintagmas nominales en la prosa formal.",
            "formula": "DO SO / DO THAT / DO IT para predicados verbales | ONE / ONES para sustantivos contables.",
            "rules": [
                "DO SO: sustituye a un predicado verbal dinámico completo en contextos formales: 'He was asked to resign, and he DID SO without protest'.",
                "NUNCA se usa 'do so' con verbos de estado: incorrecto 'He likes jazz and she does so' (debe ser 'she does too').",
                "IF SO (si es así) vs. IF NOT (si no es así): elipsis de oraciones condicionales completas: 'Are you available? If so, join the call'.",
                "SUBSTITUCIÓN NOMINAL con ONE / ONES: 'I don't like the red car, but I like the green ONE'."
            ],
            "examplesUS": ["The committee instructed the director to submit a revised report, and he did so promptly."],
            "examplesUK": ["The committee instructed the director to submit a revised report, and he did so promptly."],
            "commonMistakes": [
                "Usar 'do so' con verbos de estado mental o posesión.",
                "Usar 'one' para sustituir sustantivos incontables: 'I prefer cold water to warm one' (debe ser 'to warm water')."
            ],
            "referenceLink": "https://agendaweb.org/grammar/ellipsis-substitution.html"
        },
        {
            "id": "c1_lesson_19",
            "title": "Clase 19: Estructuras Preposicionales Complejas: WITH A VIEW TO, ON GROUNDS OF",
            "level": "C1",
            "category": "Frases Preposicionales Académicas",
            "summary": "Locuciones de registro elevado que rigen sustantivos o gerundios para fundamentar intenciones, causas y justificaciones.",
            "formula": "WITH A VIEW TO + Gerundio (-ing) | ON THE GROUNDS OF + Sustantivo | IN LIGHT OF + Sustantivo.",
            "rules": [
                "WITH A VIEW TO: significa 'con miras a / con el propósito de'. Al ser 'to' una preposición fija, RIGE ESTRICTAMENTE GERUNDIO: 'with a view to purchasing' (nunca 'to purchase').",
                "ON THE GROUNDS OF: significa 'con base en / bajo los argumentos de': 'dismissed on the grounds of gross misconduct'.",
                "IN THE LIGHT OF / IN LIGHT OF: significa 'a la luz de / considerando los nuevos hechos'.",
                "BY DINT OF: a fuerza de / mediante esfuerzo prolongado."
            ],
            "examplesUS": ["The university renovated the science complex with a view to expanding its biomedical engineering faculty."],
            "examplesUK": ["The university renovated the science complex with a view to expanding its biomedical engineering department."],
            "commonMistakes": [
                "Usar infinitivo base tras 'with a view to': 'with a view to expand' (error muy penalizado; debe ser 'to expanding').",
                "Confundir 'on the grounds of' con 'on the basis for'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/prepositional_phrases_c1.htm"
        },
        {
            "id": "c1_lesson_20",
            "title": "Clase 20: Variación Diatópica Avanzada: Sintaxis Jurídica y Administrativa US vs. UK",
            "level": "C1",
            "category": "Sintaxis Comparada & Dialectología",
            "summary": "Diferencias morfosintácticas complejas entre el inglés estándar estadounidense y el británico en contextos oficiales.",
            "formula": "Concordancia de colectivos / Preposiciones oficiales / Régimen de verbos en US y UK.",
            "rules": [
                "SUSTANTIVOS COLECTIVOS (government, team, committee, staff): en US son invariablemente tratados en SINGULAR ('The committee HAS decided'); en UK se tratan habitualmente en PLURAL enfocado en los miembros ('The committee HAVE decided').",
                "PREPOSICIONES DE DÍAS Y CALENDARIO: en US se omite frecuentemente la preposición: 'The court convenes Monday'; en UK es obligatoria la preposición: 'The court convenes ON Monday'.",
                "REGÍMENES PREPOSICIONALES: 'different from / than' (US) vs. 'different from / to' (UK).",
                "USO DE SHALL EN TEXTOS LEGALES: en UK se preserva el uso preceptivo de SHALL para obligaciones contractuales solemnes."
            ],
            "examplesUS": ["The government has announced that new environmental regulations will take effect next quarter."],
            "examplesUK": ["The government have announced that new environmental regulations will take effect next quarter."],
            "commonMistakes": [
                "Juzgar como error gramatical la concordancia plural británica con sustantivos colectivos.",
                "Usar 'different to' en prosa formal estadounidense."
            ],
            "referenceLink": "https://agendaweb.org/grammar/american-british-grammar.html"
        }
    ]

print("get_c1_lessons configured.")

def get_c2_lessons():
    return [
        {
            "id": "c2_lesson_01",
            "title": "Clase 01: Inversión Estilística Literaria y la Restricción Pronominal",
            "level": "C2",
            "category": "Inversión Literaria & Restricciones Sintácticas",
            "summary": "Estudio de las reglas de inversión locativa y de movimiento en la alta literatura, gobernadas por el principio de restricción pronominal.",
            "formula": "Frase locativa + Verbo intransitivo + Sujeto sustantivo léxico (Inversión) vs. Frase locativa + Pronombre personal + Verbo (No inversión).",
            "rules": [
                "Cuando el sujeto es un sustantivo léxico completo, el verbo se coloca antes del sujeto: 'Into the ballroom stepped the prime minister'.",
                "RESTRICCIÓN PRONOMINAL ABSOLUTA: si el sujeto es un pronombre personal (he, she, it, they), la inversión está TERMINANTEMENTE PROHIBIDA por la gramática inglesa: 'Into the garden he ran' (NUNCA 'ran he').",
                "Aplica con verbos de movimiento (stride, march, step, burst, rush) y posición (lie, sit, stand)."
            ],
            "examplesUS": ["Down the marble staircase strode the senator, but into the waiting limousine he quickly slipped."],
            "examplesUK": ["Down the marble staircase strode the minister, but into the waiting motorcar he quickly slipped."],
            "commonMistakes": [
                "Invertir el pronombre personal: escribir 'Out rushed they' (debe ser 'Out they rushed').",
                "Añadir el auxiliar did en la inversión literaria pura: 'Down the stairs did walk the king' (incorrecto; el verbo se invierte directamente)."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/inversion_literary.htm"
        },
        {
            "id": "c2_lesson_02",
            "title": "Clase 02: Cláusulas Absolutas Latinizadas y Autonomía de Sujeto",
            "level": "C2",
            "category": "Sintaxis Clásica & Cláusulas Absolutas",
            "summary": "Estructuras no oracionales derivadas del ablativo absoluto latino que poseen total independencia gramatical del sujeto principal.",
            "formula": "Sustantivo autónomo + Participio de presente / pasado / frase preposicional , Cláusula Principal.",
            "rules": [
                "La cláusula absoluta no contiene verbo en forma personal ni conjunción subordinante, y posee su propio sujeto nominal explícito.",
                "Fórmulas solemnes consagradas: 'All things considered...', 'The ceremony having concluded...', 'God willing...', 'His hands covered in soot...'.",
                "No constituye un dangling participle porque el sujeto del participio está explícitamente formulado dentro del sintagma absoluto."
            ],
            "examplesUS": ["The final treaty ratified, both delegations departed Geneva amidst widespread international acclaim."],
            "examplesUK": ["The final treaty ratified, both delegations departed Geneva amidst widespread international acclaim."],
            "commonMistakes": [
                "Insertar un pronombre personal en caso acusativo de forma descuidada: 'Him having arrived' (en estilo elevado se preserva el nominativo 'He having arrived').",
                "Puntuar la cláusula absoluta como si fuera una oración independiente completa."
            ],
            "referenceLink": "https://agendaweb.org/grammar/absolute-constructions.html"
        },
        {
            "id": "c2_lesson_03",
            "title": "Clase 03: Binomios Irreversibles (Irreversible Binomials)",
            "level": "C2",
            "category": "Léxico Consagrado & Binomios",
            "summary": "Pares de palabras coordinadas por 'and' u 'or' cuyo orden secuencial es inmutable y consagrado por la tradición fónica y retórica.",
            "formula": "Palabra A + and + Palabra B (Orden fosilizado e inalterable).",
            "rules": [
                "PART AND PARCEL: elemento consustancial, consustancial e inseparable de una experiencia (nunca 'parcel and part').",
                "NULL AND VOID: carente de todo valor o efecto vinculante jurídico (nunca 'void and null').",
                "SPICK AND SPAN: impecablemente limpio y ordenado (nunca 'span and spick').",
                "THICK AND THIN: a través de todas las vicisitudes y adversidades (nunca 'thin and thick').",
                "BY AND LARGE: en términos generales / considerando el conjunto."
            ],
            "examplesUS": ["Constant media scrutiny is part and parcel of public office, and any illicit contract was declared null and void."],
            "examplesUK": ["Constant media scrutiny is part and parcel of public office, and any illicit contract was declared null and void."],
            "commonMistakes": [
                "Invertir el orden de los elementos del binomio: decir 'void and null' en vez del consagrado 'null and void'.",
                "Modificar las palabras con sinónimos aproximados: decir 'part and portion' en lugar de 'part and parcel'."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/binomials.htm"
        },
        {
            "id": "c2_lesson_04",
            "title": "Clase 04: Estructura Perifrástica 'TO BE TO' para Planes Frustrados",
            "level": "C2",
            "category": "Perífrasis Protocolarias",
            "summary": "Uso de 'was / were to have + past participle' para expresar citas de estado, decretos o planes ceremoniales solemnes que resultaron frustrados.",
            "formula": "Sujeto + was / were TO HAVE + Participio Pasado (V3).",
            "rules": [
                "Expresa que un acontecimiento estaba solemnemente programado por protocolo o decreto, pero una circunstancia sobrevenida impidió su realización.",
                "Diferencia: 'The king was to meet the ambassador' (estaba programado, pero la frase es neutra sobre si se cumplió o no); 'The king WAS TO HAVE MET the ambassador' (estaba formalmente previsto, pero NO llegó a ocurrir).",
                "Frecuente en prosa histórica, diplomática y crónicas de estado."
            ],
            "examplesUS": ["The summit was to have concluded on Friday, but unexpected trade disputes forced an emergency weekend session."],
            "examplesUK": ["The summit was to have concluded on Friday, but unexpected trade disputes forced an emergency weekend session."],
            "commonMistakes": [
                "Usar condicional en vez de la perífrasis protocolaria: decir 'The summit would have concluded' (pierde el valor institucional de cita oficial programada).",
                "Omitir el infinitivo perfecto cuando el hecho no se consumó."
            ],
            "referenceLink": "https://agendaweb.org/verbs/be-to-exercises.html"
        },
        {
            "id": "c2_lesson_05",
            "title": "Clase 05: Fórmulas de Subjuntivo Fosilizado y Modismos Arcaizantes",
            "level": "C2",
            "category": "Subjuntivo Fórmula & Arcaísmos",
            "summary": "Expresiones fosilizadas procedentes del inglés temprano y medio que conservan el modo subjuntivo arcaico en la prosa formal.",
            "formula": "Fórmulas fijas inmutables sin conjugación moderna.",
            "rules": [
                "BE THAT AS IT MAY: equivalente a 'sea como fuere' o 'no obstante'.",
                "COME WHAT MAY: equivalente a 'pase lo que pase' / 'contra viento y marea'.",
                "SUFFICE IT TO SAY: equivalente a 'baste decir que...'.",
                "SO BE IT: equivalente a 'así sea' / 'que se acepte el desenlace'.",
                "FAR BE IT FROM ME TO...: fórmula de cortesía retórica para disculparse antes de formular una crítica u objeción."
            ],
            "examplesUS": ["Be that as it may, the administration must ensure that constitutional liberties are not compromised."],
            "examplesUK": ["Be that as it may, the government must ensure that parliamentary prerogatives are not compromised."],
            "commonMistakes": [
                "Modernizar gramaticalmente la fórmula fosilizada: decir 'Is that as it may' (error destructivo de la locución).",
                "Decir 'Suffices it to say' añadiendo la -s de tercera persona (el subjuntivo fórmula exige la base desnuda suffice)."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/formulaic_subjunctive.htm"
        },
        {
            "id": "c2_lesson_06",
            "title": "Clase 06: Construcciones Doblemente Negativas y Litotes Retóricos",
            "level": "C2",
            "category": "Retórica & Atenuación Estilística",
            "summary": "El litotes consiste en afirmar una idea negando su contraria para conseguir una atenuación irónica, mesura diplomática o distinción intelectual.",
            "formula": "NOT + Adjetivo / Adverbio con prefijo negativo (un-, in-, dis-).",
            "rules": [
                "No debe confundirse con la doble negación vulgar o agramatical ('I don't know nothing').",
                "El litotes culto es una afirmación positiva deliberadamente atenuada: 'not uncommon' (= bastante común), 'not uninteresting' (= digno de atención), 'not without reason' (= con sobrada justificación).",
                "Aporta moderación académica y prudencia epistémica ante auditorios especializados."
            ],
            "examplesUS": ["His innovative thesis regarding cellular senescence was not unconvincing to the peer-review panel."],
            "examplesUK": ["His innovative thesis regarding cellular senescence was not unconvincing to the peer-review panel."],
            "commonMistakes": [
                "Confundir el litotes culto con la doble negación vulgar dialéctica.",
                "Abusar del recurso hasta convertir el párrafo en un galimatías enrevesado."
            ],
            "referenceLink": "https://agendaweb.org/grammar/litotes-rhetoric.html"
        },
        {
            "id": "c2_lesson_07",
            "title": "Clase 07: Cohesión Léxica Sofisticada: Paralelismo y Quiasmo",
            "level": "C2",
            "category": "Retórica Oratoria & Estilística",
            "summary": "Estructuración simétrica de sintagmas y oraciones para amplificar el impacto estético, mnemotécnico y persuasivo del discurso.",
            "formula": "Paralelismo: Estructura A + Estructura A. Quiasmo: Estructura A-B cruzada con Estructura B-A.",
            "rules": [
                "PARALELISMO SINTÁCTICO: exige que los elementos coordinados compartan idéntica categoría morfosintáctica (sustantivo con sustantivo, infinitivo con infinitivo, gerundio con gerundio).",
                "QUIASMO RETÓRICO: inversión cruzada del orden de palabras o ideas en dos cláusulas consecutivas: 'Ask not what your country can do for you; ask what you can do for your country'.",
                "Garantiza el ritmo prosódico y la elegancia cadenciosa de la prosa magistral."
            ],
            "examplesUS": ["The chancellor vowed to defend democratic institutions in times of peace and to preserve civil liberties in times of crisis."],
            "examplesUK": ["The prime minister vowed to defend democratic institutions in times of peace and to preserve civil liberties in times of crisis."],
            "commonMistakes": [
                "Romper el paralelismo sintáctico: 'She likes swimming, to hike and that she reads' (debe ser 'swimming, hiking, and reading').",
                "Construir paralelismos forzados que distorsionen el significado semántico natural."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/parallelism.htm"
        },
        {
            "id": "c2_lesson_08",
            "title": "Clase 08: Inversión con Adverbios de Grado: TO SUCH LENGTHS DID HE GO",
            "level": "C2",
            "category": "Inversión Avanzada de Grado",
            "summary": "Inversión consecutiva y enfática encabezada por sintagmas adverbiales de magnitud desmedida como 'So intense was...', 'To such an extent did...'.",
            "formula": "SO + Adjetivo + BE + Sujeto + THAT... | TO SUCH LENGTHS + Auxiliar + Sujeto + Verbo + THAT...",
            "rules": [
                "Estructura con SO: 'So dense was the fog that all international flights were diverted' (en vez de 'The fog was so dense that...').",
                "Estructura con SUCH: 'Such was the magnitude of the earthquake that entire districts were flattened'.",
                "Estructura con TO SUCH AN EXTENT / TO SUCH LENGTHS: rige inversión del auxiliar antes del sujeto."
            ],
            "examplesUS": ["To such extraordinary lengths did the researchers go that they replicated the historical experiment in microgravity."],
            "examplesUK": ["To such extraordinary lengths did the researchers go that they replicated the historical experiment in microgravity."],
            "commonMistakes": [
                "Olvidar la inversión tras 'So + adjetivo' en cabeza de oración: escribir 'So intense the fire was' (debe ser 'So intense was the fire').",
                "Omitir la conjunción THAT que introduce la cláusula consecutiva subordinada."
            ],
            "referenceLink": "https://agendaweb.org/grammar/inversion-so-such.html"
        },
        {
            "id": "c2_lesson_09",
            "title": "Clase 09: Deixis Discursiva y Posicionamiento Epistémico en Textos Especializados",
            "level": "C2",
            "category": "Pragmática & Discurso Académico",
            "summary": "Herramientas de matización lingüística (hedging) para calibrar la certeza, modestia intelectual y distanciamiento del autor.",
            "formula": "Verbos de posicionamiento epistémico (purport, posit, contend) + Modificadores atenuantes (arguably, ostensibly).",
            "rules": [
                "HEDGING (atenuación epistémica): evita aseveraciones categóricas indemostrables: 'The evidence would appear to suggest...' en vez de 'The evidence proves...'.",
                "VERBOS DE POSTURA: POSIT (postular como hipótesis de trabajo), CONTEND (sostener en debate), PURPORT (afirmar falsamente o pretender ser).",
                "ADVERBIOS DE POSICIONAMIENTO: OSTENSIBLY (aparentemente / en apariencia pública), ARGUABLY (demostrablemente / con sólidos argumentos a favor)."
            ],
            "examplesUS": ["The findings ostensibly corroborate the initial hypothesis, yet several confounding variables remain unaccounted for."],
            "examplesUK": ["The findings ostensibly corroborate the initial hypothesis, yet several confounding variables remain unaccounted for."],
            "commonMistakes": [
                "Confundir 'purport' (pretender con matiz de falsedad o duda) con 'propose' (proponer neutralmente).",
                "Utilizar certezas absolutas no moduladas en la discusión de resultados científicos complejos."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/hedging_academic.htm"
        },
        {
            "id": "c2_lesson_10",
            "title": "Clase 10: Colocaciones de Máxima Complejidad y Neologismos Institucionales",
            "level": "C2",
            "category": "Léxico de Registro Especializado",
            "summary": "Combinaciones consagradas de alta sofisticación características del periodismo de élite, la alta judicatura y la diplomacia multilateral.",
            "formula": "Combinaciones léxicas cristalizadas de registro C2.",
            "rules": [
                "EJEMPLOS CONSAGRADOS: EXTENUATING CIRCUMSTANCES (circunstancias atenuantes), INEXTRICABLY LINKED (inseparablemente unidos), ABJECT POVERTY (miseria extrema), TACIT APPROVAL (aprobación tácita), UNABATED ENTHUSIASM (entusiasmo incólume).",
                "VERBOS DE ALTA GAMA: DISPENSE WITH (prescindir de), CONSTRUE AS (interpretar como), ESCHEW (renunciar conscientemente a / rehuir), EVINCE (poner de manifiesto / evidenciar).",
                "El dominio de estas combinaciones distingue la verdadera proficiencia nativa o bilingüe culta."
            ],
            "examplesUS": ["The judicial panel concluded that socioeconomic disparities were inextricably linked to unequal access to healthcare."],
            "examplesUK": ["The judicial committee concluded that socioeconomic disparities were inextricably linked to unequal access to healthcare."],
            "commonMistakes": [
                "Combinar adjetivos de registro dispar: decir 'totally linked' en vez del académico 'inextricably linked'.",
                "Usar 'dispense' sin la preposición 'with' cuando se pretende significar prescindir."
            ],
            "referenceLink": "https://agendaweb.org/vocabulary/advanced-c2-collocations.html"
        },
        {
            "id": "c2_lesson_11",
            "title": "Clase 11: Ambigüedad Sintáctica y Técnicas de Desambiguación Estructural",
            "level": "C2",
            "category": "Sintaxis Teórica & Desambiguación",
            "summary": "Análisis de oraciones de doble interpretación estructural (estructuras anfibológicas) y mecanismos de reestructuración analítica.",
            "formula": "Análisis de constituyentes inmediatos y reorganización de adjuntos preposicionales.",
            "rules": [
                "AMBIGÜEDAD POR ADJUNTOS FLOTANTES: 'I saw the man with the telescope' (¿Quién tenía el telescopio: el observador o el hombre?).",
                "DESAMBIGUACIÓN MEDIANTE TRANSFORMACIÓN: 'Using the telescope, I saw the man' (herramienta del sujeto) vs. 'I saw the man who was carrying a telescope'.",
                "GARDEN-PATH SENTENCES: oraciones que confunden al lector por ambigüedad transitoria: 'The horse raced past the barn fell' (raced es participio pasivo reducido: 'The horse that was raced...')."
            ],
            "examplesUS": ["To eliminate syntactic ambiguity in the statute, the legislative drafters repositioned the restrictive relative clause."],
            "examplesUK": ["To eliminate syntactic ambiguity in the statute, the parliamentary counsel repositioned the restrictive relative clause."],
            "commonMistakes": [
                "Redactar oraciones donde los modificadores preposicionales puedan adjuntarse indistintamente a dos sustantivos precedentes.",
                "Colocar adverbios restrictivos en posiciones donde no esté claro qué constituyente modifican."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/structural_ambiguity.htm"
        },
        {
            "id": "c2_lesson_12",
            "title": "Clase 12: Verbos con Regímenes Preposicionales Arcaicos o Especializados",
            "level": "C2",
            "category": "Régimen Preposicional Avanzado",
            "summary": "Verbos de alta tradición jurídica y diplomática que exigen preposiciones fijas e intransferibles.",
            "formula": "Verbo + Preposición Fija obligatoria.",
            "rules": [
                "ABIDE BY (+ sustantivo / decisión): acatar fielmente un fallo, reglamento o ley: 'abide by the court's ruling'.",
                "ACCEDE TO (+ petición / tratado): acceder solemnemente a una solicitud oficial: 'accede to the terms of surrender'.",
                "DISPENSE WITH (+ objeto): prescindir por completo de formalidades o servicios: 'dispense with formalities'.",
                "COLLUDE IN / WITH: conspirar clandestinamente con alguien para fines ilícitos.",
                "DEVOLVE ON / UPON: recaer una responsabilidad o título sobre un sucesor."
            ],
            "examplesUS": ["Both sovereign nations pledged to abide by the arbitral ruling and accede to international trade covenants."],
            "examplesUK": ["Both sovereign nations pledged to abide by the arbitral ruling and accede to international trade covenants."],
            "commonMistakes": [
                "Usar preposición errónea con abide: decir 'abide with the rules' (debe ser 'abide BY the rules').",
                "Usar accede sin preposición 'to'."
            ],
            "referenceLink": "https://agendaweb.org/verbs/prepositional-verbs-advanced.html"
        },
        {
            "id": "c2_lesson_13",
            "title": "Clase 13: Coordinación Asindética y Polisindética en Discurso Oratorio",
            "level": "C2",
            "category": "Figuras Retóricas & Sintaxis",
            "summary": "Modulación intencional de conjunciones en la prosa formal para acelerar la cadencia rítmica o magnificar la solemnidad acumulativa.",
            "formula": "Asíndeton: omisión total de conjunciones. Polisíndeton: repetición exhaustiva de conjunciones (and... and... and...).",
            "rules": [
                "ASÍNDETON (omisión de nexos copulativos): confiere velocidad dramática, energía perentoria y contundencia: 'We came, we saw, we conquered' / 'He planned, calculated, executed, triumphed'.",
                "POLISÍNDETON (multiplicación de conjunciones): confiere pesadez solemne, majestuosidad bíblica y exhaustividad ritual: 'We fought through storm and snow and betrayal and defeat'.",
                "Ambos recursos deben emplearse con comedimiento magistral en pasajes de clímax retórico."
            ],
            "examplesUS": ["The general addressed the nation with resolute eloquence, recounting trials faced, sacrifices borne, victories attained."],
            "examplesUK": ["The field marshal addressed the nation with resolute eloquence, recounting trials faced, sacrifices borne, victories attained."],
            "commonMistakes": [
                "Confundir el asíndeton retórico con un error descuidado de coma splice o falta de coordinación gramatical.",
                "Emplear polisíndeton en informes técnicos ordinarios donde se exige concisión analítica."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/asyndeton_polysyndeton.htm"
        },
        {
            "id": "c2_lesson_14",
            "title": "Clase 14: Modismos Culturales Profundos e Idiomaticidad Avanzada US vs. UK",
            "level": "C2",
            "category": "Idiomática Cultural & Pragmática",
            "summary": "Expresiones idiomáticas complejas cuyas metáforas derivan de la historia naval, constitucional, deportiva o folclórica de cada nación.",
            "formula": "Expresión figurada de alta frecuencia en el registro nativo culto.",
            "rules": [
                "MODISMOS BRITÁNICOS HISTÓRICOS: 'A sticky wicket' (situación sumamente delicada o comprometida, del cricket); 'Throw a spanner in the works' (sabotear o arruinar un plan); 'Bite the bullet' (afrontar con estoicismo una prueba dolorosa).",
                "MODISMOS ESTADOUNIDENSES CONSAGRADOS: 'Touch base' (ponerse en contacto brevemente); 'Ballpark figure' (estimación numérica aproximada); 'Monday morning quarterback' (quien critica una decisión a toro pasado cuando ya se conoce el resultado).",
                "Su uso debe demostrar pertinencia contextual sin caer en la afectación artificiosa."
            ],
            "examplesUS": ["Let us touch base before the committee hearing to ensure our testimonies are perfectly synchronized."],
            "examplesUK": ["The sudden currency devaluation threw a spanner in the works of the treasury's fiscal projections."],
            "commonMistakes": [
                "Traducir literalmente expresiones idiomáticas al español.",
                "Mezclar modismos de registro antagónico dentro del mismo párrafo protocolario."
            ],
            "referenceLink": "https://agendaweb.org/vocabulary/advanced-idioms-exercises.html"
        },
        {
            "id": "c2_lesson_15",
            "title": "Clase 15: Pragmática del Registro: De la Ironía Sutil a la Cortesía Superlativa",
            "level": "C2",
            "category": "Pragmática & Cortesía Negativa",
            "summary": "Dominio de la cortesía negativa anglosajona, la atenuación epistémica (understatement) y la ironía sutil en la alta negociación.",
            "formula": "Fórmulas de distanciamiento cortés superlativo e insinuación respetuosa.",
            "rules": [
                "UNDERSTATEMENT (Atenuación británica clásica): manifestar un hecho trascendental con deliberada modestia: 'We had a slight difference of opinion' (= tuvimos una ruptura diplomática violenta).",
                "CORTESÍA NEGATIVA SUPERLATIVA: evitar invadir la autonomía del interlocutor mediante múltiples capas modales: 'I wonder if I might conceivably prevail upon your kindness to review this memorandum?'.",
                "En el discurso anglosajón culto, la agresividad argumental directa se considera signo de debilidad dialéctica."
            ],
            "examplesUS": ["I would be most appreciative if you could furnish our audit team with those supplementary disclosures."],
            "examplesUK": ["With the greatest respect, the minister's characterization of the negotiations appears somewhat optimistic."],
            "commonMistakes": [
                "Interpretar 'with the greatest respect' como elogio genuino (en el debate parlamentario británico suele preludiar una crítica demoledora).",
                "Traducir la ironía inglesa como una aseveración literal."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/pragmatics_politeness.htm"
        },
        {
            "id": "c2_lesson_16",
            "title": "Clase 16: Sintaxis Clásica en Documentos de Estado, Tratados y Jurisprudencia",
            "level": "C2",
            "category": "Inglés Jurídico & Diplomático",
            "summary": "Estructuras oracionales del inglés procesal, legislativo y constitucional, caracterizadas por oraciones periódicas y léxico prescriptivo.",
            "formula": "Preámbulos en gerundio / SHALL de mandato imperativo / Adverbios compuestos (herein, thereof).",
            "rules": [
                "SHALL PRESCRIPTIVO: en textos normativos, SHALL denota mandato imperativo legal insoslayable: 'The contractor SHALL maintain insurance coverage at all times'.",
                "ADVERBIOS ARCAICOS COMPUESTOS: HEREIN (en este documento), THEREOF (de aquello), WHEREBY (por el cual), HEREUNDER (en virtud del presente).",
                "ORACIÓN PERIÓDICA CLÁSICA: oraciones extensas donde el verbo principal y la conclusión lógica quedan suspendidos hasta el final del periodo sintáctico."
            ],
            "examplesUS": ["All covenants contained herein shall remain in full force and effect until formally abrogated by mutual consent."],
            "examplesUK": ["All covenants contained herein shall remain in full force and effect until formally abrogated by mutual consent."],
            "commonMistakes": [
                "Interpretar SHALL en textos jurídicos como simple marcador de tiempo futuro (en jurisprudencia equivale a MUST formal).",
                "Usar incorrectamente 'hereof' y 'thereof' en contratos mercantiles."
            ],
            "referenceLink": "https://agendaweb.org/grammar/legal-english-exercises.html"
        },
        {
            "id": "c2_lesson_17",
            "title": "Clase 17: Cláusulas Apositivas Complejas y Puntuación Retórica",
            "level": "C2",
            "category": "Puntuación Avanzada & Aposición",
            "summary": "Uso maestro del punto y coma, guiones mayores (em-dashes) y aposiciones dobles para orquestar la arquitectura del párrafo culto.",
            "formula": "Sujeto — Cláusula apositiva parentética densa — Verbo principal ; Oración coordinada complementaria.",
            "rules": [
                "PUNTO Y COMA (;): coordina dos oraciones independientes completas que guardan una íntima afinidad lógica sin necesidad de conjunción.",
                "GUION MAYOR (—): inserta un inciso parentético dramático o enfático de forma mucho más contundente que los paréntesis o las comas.",
                "DOS PUNTOS (:): introducen una amplificación, clarificación o demostración categórica de la proposición que los precede."
            ],
            "examplesUS": ["The diplomat's memoirs — published posthumously under contentious circumstances — shed unprecedented light on the summit."],
            "examplesUK": ["The diplomat's memoirs — published posthumously under contentious circumstances — shed unprecedented light on the summit."],
            "commonMistakes": [
                "Cometer 'comma splice' (unir dos oraciones independientes con simple coma sin nexo copulativo; debe usarse punto y coma).",
                "Confundir el guion corto de unión de palabras (hyphen) con el guion largo de inciso (em-dash)."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/punctuation_advanced.htm"
        },
        {
            "id": "c2_lesson_18",
            "title": "Clase 18: Subjuntivos Condicionales sin Nexo IF: BE HE FRIEND OR FOE",
            "level": "C2",
            "category": "Subjuntivo Condicional Arcaizante",
            "summary": "Fórmulas condicionales y concesivas construidas directamente con el verbo subjuntivo en cabeza de cláusula prescindiendo totalmente de 'whether' o 'if'.",
            "formula": "BE HE / BE IT + sustantivo / adjetivo , Cláusula principal.",
            "rules": [
                "BE IT X OR Y: equivale a 'Whether it be X or Y' (ya sea X o Y): 'Every citizen, be he rich or poor, is subject to the rule of law'.",
                "COME WHAT MAY: 'Whatever may come'.",
                "WERE IT TO TRANSPIRE THAT...: equivalente literario a 'If it should happen that...'.",
                "Aporta una resonancia estilística shakesperiana y constitucional inconfundible."
            ],
            "examplesUS": ["Every individual standing trial, be he dignitary or common citizen, is entitled to due process of law."],
            "examplesUK": ["Every individual standing trial, be he peer or commoner, is entitled to due process of law."],
            "commonMistakes": [
                "Concurrir con indicativo: decir 'is he rich or poor' (en esta fórmula arcaica la forma invariable es 'be he').",
                "Poner 'whether' antes de la fórmula invertida ('whether be he')."
            ],
            "referenceLink": "https://agendaweb.org/grammar/subjunctive-conditional-exercises.html"
        },
        {
            "id": "c2_lesson_19",
            "title": "Clase 19: Ironía Sintáctica y Discurso Indirecto Libre en Literatura",
            "level": "C2",
            "category": "Narratología & Estilística Avanzada",
            "summary": "Técnica narrativa magistral donde la voz del narrador adopta los pensamientos íntimos del personaje sin comillas ni verbos de notificación.",
            "formula": "Fusión del discurso directo con el pasado y deícticos del discurso indirecto (Free Indirect Discourse).",
            "rules": [
                "El discurso indirecto libre elimina verbos inductores como 'she thought' o 'he asked himself'.",
                "Conserva los tiempos pasados propios del relato en tercera persona pero retiene exclamaciones, preguntas retóricas y vocabulario subjetivo del personaje.",
                "Consagrado en la obra de Jane Austen, Virginia Woolf, James Joyce y Henry James.",
                "Crea una cercanía psicológica profunda e ironía dramática incomparable."
            ],
            "examplesUS": ["The young heiress contemplated her fate: was this to be her life, confined to provincial balls and mundane conversations?"],
            "examplesUK": ["The young heiress contemplated her fate: was this to be her life, confined to provincial balls and mundane conversations?"],
            "commonMistakes": [
                "Insertar etiquetas narrativas redundantes ('she thought to herself') que arruinen la fluidez del discurso indirecto libre.",
                "Confundir los tiempos verbales pasando bruscamente al presente sin justificación deíctica."
            ],
            "referenceLink": "https://www.englisch-hilfen.de/en/grammar/free_indirect_speech.htm"
        },
        {
            "id": "c2_lesson_20",
            "title": "Clase 20: Maestría y Perfeccionamiento Integral: Diferenciación Absoluta US vs. UK en Alta Diplomacia",
            "level": "C2",
            "category": "Dialectología Comparada & Diplomacia",
            "summary": "Síntesis suprema de las sutilezas fonológicas, sintácticas, léxicas y pragmáticas que diferencian los dos grandes estándares mundiales del idioma inglés.",
            "formula": "Consistencia diatípica y diatópica absoluta sin hibridaciones inadvertidas.",
            "rules": [
                "CONSISTENCIA ORTOGRÁFICA ABSOLUTA: si se redacta en British English, es mandatorio emplear rigurosamente -our (honour), -ise (organise), -re (theatre), doble consonante (travelling) y distinción sustantivo/verbo (licence/license, practice/practise).",
                "Si se redacta en American English, es obligatorio el estándar de Webster: -or (honor), -ize (organize), -er (theater), consonante simple (traveling) y homogenización (license, defense).",
                "CONSISTENCIA SINTÁCTICA: colectivos en singular o plural, régimen de past simple vs present perfect con already/yet.",
                "En la diplomacia internacional y la alta edición académica, mezclar ambas variantes en el mismo documento se considera falta de pulcritud profesional."
            ],
            "examplesUS": ["The ambassador emphasized that the program favored multilateral cooperation, analyzing every fiscal nuance rigorously."],
            "examplesUK": ["The ambassador emphasised that the programme favoured multilateral cooperation, analysing every fiscal nuance rigorously."],
            "commonMistakes": [
                "Hibridar involuntariamente grafías británicas y estadounidenses dentro del mismo párrafo o ensayo.",
                "Desconocer que términos homógrafos pueden poseer significados incompatibles en ambas variantes (table a motion, public school, first floor)."
            ],
            "referenceLink": "https://agendaweb.org/grammar/american-british-english.html"
        }
    ]

def build_file():
    lessons_matrix = {
        "A1": get_a1_lessons(),
        "A2": get_a2_lessons(),
        "B1": get_b1_lessons(),
        "B2": get_b2_lessons(),
        "C1": get_c1_lessons(),
        "C2": get_c2_lessons()
    }

    # Verify counts
    for lvl, list_l in lessons_matrix.items():
        print(f"Level {lvl}: {len(list_l)} lessons")
        assert len(list_l) >= 20, f"Level {lvl} has less than 20 lessons!"

    ts_content = """/**
 * APP-KUSKAT • BANCO MAESTRO DE LECCIONES DE INGLÉS (MCER / CEFR)
 *
 * Catálogo completo de 120 clases organizadas en exactamente 20 lecciones estructuradas
 * por cada uno de los 6 niveles del Marco Común Europeo de Referencia (A1 a C2).
 *
 * Cada clase incluye:
 * - Título y categorización temática
 * - Resumen conceptual y fórmula de estructura
 * - Reglas pedagógicas paso a paso
 * - Ejemplos contrastados en American English (US) y British English (UK)
 * - Errores comunes frecuentes y su corrección
 * - Citas metodológicas basadas en los estándares de referencia
 */

import { CEFRLevel, GrammarTopicLesson } from './englishData';

export const ENGLISH_LESSONS_BY_LEVEL: Record<CEFRLevel, GrammarTopicLesson[]> = """
    ts_content += json.dumps(lessons_matrix, indent=2, ensure_ascii=False)
    ts_content += ";\n"

    with open(TARGET_FILE, "w", encoding="utf-8") as f:
        f.write(ts_content)

    print(f"Successfully generated {TARGET_FILE} with 120 lessons!")

if __name__ == "__main__":
    build_file()

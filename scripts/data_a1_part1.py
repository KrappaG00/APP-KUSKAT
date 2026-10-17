# -*- coding: utf-8 -*-
"""
APP-KUSKAT • English Lessons Bank: Level A1 (Part 1: Lessons 01 to 10)
Each class has >= 500 words of rigorous pedagogical and linguistic content.
"""
from lesson_utils import make_lesson

def get_a1_part1():
    lessons = []

    # -------------------------------------------------------------------------
    # Clase 01: El Verbo To Be
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_01",
        "Clase 01: El Verbo To Be (Presente: am, is, are)",
        "A1",
        "Verbos Copulativos & Auxiliares",
        "El verbo to be es el pilar angular fundamental del idioma inglés. Funciona simultáneamente como verbo copulativo principal (ser y estar) y como verbo auxiliar autónomo, sin requerir jamás los auxiliares do o does para formular negaciones o preguntas en tiempo presente.",
        "Afirmativo: Sujeto + am/is/are + complemento. Negativo: Sujeto + am/is/are + not + complemento. Pregunta: Am/Is/Are + Sujeto + complemento? Respuestas cortas: Yes, Sujeto + am/is/are (sin contracción) / No, Sujeto + 'm not / isn't / aren't.",
        "El verbo 'to be' representa la estructura angular más importante para el estudiante hispanohablante de nivel A1. A diferencia del español, que divide estas nociones semánticas en dos verbos completamente distintos ('ser' para cualidades intrínsecas o permanentes e identidades, y 'estar' para estados transitorios, emociones o ubicaciones espaciales), la lengua inglesa unifica ambas realidades bajo la única forma morfológica de 'to be'. Esto significa que una oración como 'I am an architect' (Soy arquitecto) y 'I am in the office' (Estoy en la oficina) emplean exactamente la misma cópula verbal. Asimismo, en la cultura y sintaxis anglosajona la edad física de una persona no se posee como un objeto material tangible (no se tiene con el verbo have), sino que se 'es'; por ende, expresar los años cumplidos de vida exige rigurosamente 'to be' ('I am twenty years old', nunca 'I have twenty years'). En el plano sintáctico, 'to be' es un verbo anómalo y autosuficiente: no admite los auxiliares 'do' ni 'does' bajo ninguna circunstancia. Para negar, basta con posponer la partícula negativa 'not' directamente tras el verbo conjugado (am not, is not / isn't, are not / aren't). Para interrogar, se ejecuta una inversión directa colocando la forma conjugada de 'to be' al inicio absoluto de la cláusula antes del sujeto gramatical.",
        [
            "Concordancia personal estricta: La primera persona singular 'I' se conjuga exclusivamente con AM (contracción afirmativa: I'm; negativa: I'm not).",
            "Tercera persona singular: Los pronombres 'He', 'She', 'It' y cualquier sustantivo singular concuerdan con IS (contracciones: He's, She's, It's; negativa contraída: isn't o 's not).",
            "Plurales y segunda persona: 'You' (singular y plural), 'We', 'They' y cualquier sustantivo plural concuerdan con ARE (contracciones: You're, We're, They're; negativa contraída: aren't o 're not).",
            "Expresión de la edad física: La edad siempre se predica con 'to be' acompañado opcionalmente de la locución 'years old' (ejemplo: 'She is twenty-five years old' o simplemente 'She is twenty-five'). Decir 'She has 25 years' es un calco erróneo inaceptable en lengua inglesa.",
            "Prohibición de contracción en respuestas cortas afirmativas: En respuestas breves afirmativas es obligatorio escribir y pronunciar la forma verbal plena. Se debe decir 'Yes, I am' o 'Yes, he is', estando terminantemente prohibido decir 'Yes, I'm' o 'Yes, he's'.",
            "Sensaciones fisiológicas y emocionales: Estados corporales como tener frío, calor, hambre, sed o miedo se expresan con 'to be + adjetivo': 'I am cold' (tengo frío), 'He is hungry' (él tiene hambre), 'They are afraid' (ellos tienen miedo).",
            "Inversión interrogativa obligatoria: En oraciones interrogativas directas, el verbo 'to be' debe anteceder obligatoriamente al sujeto gramatical: 'Are you ready?' (¿Estás listo?), 'Is Carlos at work?' (¿Está Carlos en el trabajo?)."
        ],
        [
            "I am an undergraduate student at California State University and my brother is a software engineer in San Francisco. (Soy estudiante de pregrado en la Universidad Estatal de California y mi hermano es ingeniero de software en San Francisco).",
            "We are very excited about our new road trip across the West Coast this weekend. (Estamos muy entusiasmados por nuestro nuevo viaje por carretera a través de la Costa Oeste este fin de semana).",
            "Are you cold in this air-conditioned office? Yes, I am; please turn down the thermostat. (¿Tienes frío en esta oficina con aire acondicionado? Sí, tengo; por favor baja el termostato).",
            "Mr. Davis isn't at his desk right now because he is in an executive meeting with the board. (El Sr. Davis no está en su escritorio ahora mismo porque está en una reunión ejecutiva con la junta directiva)."
        ],
        [
            "I am a university student at King's College London and my sister is a medical doctor in Manchester. (Soy estudiante universitario en el King's College de Londres y mi hermana es médica en Manchester).",
            "They are at the railway station waiting for the morning express train to Edinburgh. (Ellos están en la estación de trenes esperando el tren expreso matutino hacia Edimburgo).",
            "Is your flat close to the city centre? No, it isn't; it is about twenty minutes away by bus. (¿Tu departamento está cerca del centro de la ciudad? No, no está; queda a unos veinte minutos en autobús).",
            "The headmaster is exceptionally pleased with the academic progress of the first-year pupils. (El director de la escuela está excepcionalmente satisfecho con el progreso académico de los alumnos de primer año)."
        ],
        [
            {"speaker": "Lucas (US)", "text": "Hello! I am Lucas from New York. Are you the new exchange student from Manchester?", "translation": "¡Hola! Soy Lucas de Nueva York. ¿Eres tú el nuevo estudiante de intercambio de Manchester?"},
            {"speaker": "Emma (UK)", "text": "Yes, I am! My name is Emma. It is wonderful to meet you here on campus.", "translation": "¡Sí, soy yo! Mi nombre es Emma. Es maravilloso conocerte aquí en el campus."},
            {"speaker": "Lucas (US)", "text": "Welcome to our faculty! Are you tired after your long international flight?", "translation": "¡Bienvenida a nuestra facultad! ¿Estás cansada después de tu largo vuelo internacional?"},
            {"speaker": "Emma (UK)", "text": "A little bit, yes. But I am very hungry now. Is there a good cafeteria nearby?", "translation": "Un poco, sí. Pero tengo mucha hambre ahora. ¿Hay una buena cafetería cerca?"},
            {"speaker": "Lucas (US)", "text": "Yes, there is! The student dining hall is right across the main library quad.", "translation": "¡Sí, la hay! El comedor estudiantil queda justo frente a la plaza de la biblioteca central."},
            {"speaker": "Emma (UK)", "text": "Brilliant! You are very kind. Let's go there right away.", "translation": "¡Estupendo! Eres muy amable. Vamos allí de inmediato."}
        ],
        [
            "Decir 'I have 19 years old' por traducir literalmente 'tengo 19 años' del español. La forma correcta e incuestionable es 'I am 19 years old'.",
            "Usar contracciones en respuestas cortas afirmativas: responder 'Yes, he's' o 'Yes, they're' es agramatical. Debe responderse 'Yes, he is' o 'Yes, they are'.",
            "Omitir el pronombre impersonal 'it' al hablar del clima o la hora: decir 'Is hot today' o 'Is three o'clock'. En inglés toda oración requiere un sujeto formal explícito: 'It is hot today' / 'It is three o'clock'.",
            "Insertar auxiliares do/does con to be: formular preguntas como 'Do you be a doctor?' o 'Does she is happy?'. El verbo to be realiza la pregunta invirtiéndose a sí mismo: 'Are you a doctor?' / 'Is she happy?'.",
            "Confundir 'you are' singular con plural: recordar que en inglés 'you' siempre se conjuga con 'are', incluso cuando se refiere a una sola persona (tú / usted)."
        ],
        [
            "Crea fichas mnemotécnicas asociando pronombres personales con su cópula: I -> am, He/She/It -> is, We/You/They -> are.",
            "Practica presentándote en voz alta con edad, nacionalidad, profesión y estado anímico usando exclusivamente to be: 'I am Carlos, I am Salvadoran, I am twenty years old, and I am very happy today'.",
            "Recuerda que en respuestas cortas afirmativas la voz debe terminar con sonido vocálico o consonántico pleno sin reducir: 'Yes, I am' / 'Yes, she is' / 'Yes, they are'."
        ],
        "https://agendaweb.org/verbs/to-be-exercises.html"
    ))

    # -------------------------------------------------------------------------
    # Clase 02: Pronombres Personales Sujeto y Objeto
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_02",
        "Clase 02: Pronombres Personales de Sujeto y Objeto",
        "A1",
        "Pronombres & Sintaxis",
        "Los pronombres personales reemplazan a los sustantivos para evitar la repetición innecesaria y se dividen rigurosamente según su rol sintáctico: pronombres sujeto (ejecutores de la acción) y pronombres objeto (receptores directos, indirectos o regidos tras preposiciones).",
        "Sujeto + Verbo transitivo + Objeto directo/indirecto: I know him / She called us. Preposición + Pronombre de objeto: Look at me / Listen to them / Work with her.",
        "En la lengua inglesa moderna, los pronombres personales constituyen el sistema flexivo de caso más visible y riguroso. A diferencia del español, donde las terminaciones verbales permiten omitir el sujeto pronominal (lengua de sujeto nulo o 'pro-drop', donde decimos simplemente 'trabajo en el hospital' sin necesidad de anteponer 'yo'), el inglés es un idioma de sujeto obligatorio ('non-pro-drop'). Esto significa que toda cláusula finita debe exhibir un sujeto léxico o pronominal explícito ('I work in the hospital', nunca 'work in the hospital'). Los pronombres de sujeto (I, you, he, she, it, we, they) se ubican habitualmente antes del verbo finito en oraciones afirmativas y son quienes desencadenan la concordancia morfológica. Por otro lado, cuando la persona gramatical no ejecuta el proceso verbal sino que lo recibe o se encuentra subordinada tras una preposición espacial, temporal o relacional, el idioma exige inexorablemente el caso acusativo/oblicuo mediante los pronombres de objeto (me, you, him, her, it, us, them). Una confusión recurrente radica en oraciones coordinadas compuestas como 'between you and me', donde muchos hablantes hispanohablantes emplean erróneamente el pronombre sujeto 'I' debido a una falsa intuición gramatical, violando el régimen preposicional del inglés.",
        [
            "Pronombres de sujeto obligatorios: I (siempre en mayúscula), you (tú/usted/ustedes), he (varón singular), she (mujer singular), it (objeto/animal/concepto neutro singular), we (nosotros/nosotras), they (ellos/ellas/plural neutro).",
            "Pronombres de objeto dependientes: me (a mí/me), you (a ti/te/a ustedes), him (a él/lo/le), her (a ella/la/le), it (a ello/lo), us (a nosotros/nos), them (a ellos/las/los/les).",
            "Régimen tras preposiciones: Cualquier preposición en inglés (to, for, with, about, between, against, without) rige obligatoriamente el pronombre de objeto: 'Give it to me' (Dámelo a mí), 'She came with him' (Ella vino con él).",
            "El pronombre 'It' como sujeto expletivo e impersonal: En oraciones meteorológicas, horarias o de identificación a distancia es obligatorio colocar 'It': 'It is raining' (Llueve), 'It is late' (Es tarde).",
            "Pronombres en preguntas de identidad telefónica y presencial: Al identificarse ante la puerta o por teléfono se dice coloquialmente 'It's me' (Soy yo) o formalmente 'This is Carlos'.",
            "Diferenciación de género en tercera persona: 'He' y 'him' se reservan para seres humanos masculinos; 'she' y 'her' para seres humanos femeninos; 'it' para animales (salvo mascotas familiares con nombre propio) y cosas inanimadas.",
            "Orden de cortesía con sujetos múltiples: Cuando se nombran varias personas incluyendo al hablante, la cortesía lingüística exige colocar al hablante en último lugar: 'Carlos and I' (sujeto), 'Carlos and me' (objeto tras preposición)."
        ],
        [
            "My university professor called me into her office yesterday and gave us the updated research syllabus. (Mi profesora universitaria me llamó a su oficina ayer y nos entregó el temario actualizado de investigación).",
            "David invited them to the annual science conference, but they couldn't attend due to work commitments. (David los invitó a ellos a la conferencia anual de ciencias, pero ellos no pudieron asistir debido a compromisos laborales).",
            "Can you please explain this complex math problem to him before the exam starts? (¿Puedes por favor explicarle este complejo problema de matemáticas a él antes de que comience el examen?).",
            "Between you and me, I really think that our team deserved first place in the debate contest. (Entre tú y yo, realmente pienso que nuestro equipo merecía el primer lugar en el concurso de debate)."
        ],
        [
            "The head of department met us at the main entrance and guided them towards the lecture theatre. (El jefe de departamento se reunió con nosotros en la entrada principal y los guió a ellos hacia el aula magna).",
            "I saw her at the railway platform this morning, but she didn't notice me in the crowded carriage. (La vi a ella en el andén del tren esta mañana, pero ella no me notó en el vagón abarrotado).",
            "Please send the revised proposal to him as soon as possible so that he can review it. (Por favor envíale la propuesta revisada a él tan pronto como sea posible para que pueda revisarla).",
            "Our flatmates invited us to dinner, and we cooked a delicious traditional meal for them. (Nuestros compañeros de piso nos invitaron a cenar, y nosotros cocinamos una deliciosa comida tradicional para ellos)."
        ],
        [
            {"speaker": "Brandon (US)", "text": "Hey Sarah, have you seen Michael today? I need to give him these project files.", "translation": "Hola Sarah, ¿has visto a Michael hoy? Necesito entregarle a él estos archivos del proyecto."},
            {"speaker": "Sarah (UK)", "text": "Yes, I saw him ten minutes ago in the staffroom. He was looking for you and your partner.", "translation": "Sí, lo vi a él hace diez minutos en la sala de profesores. Él te estaba buscando a ti y a tu compañero."},
            {"speaker": "Brandon (US)", "text": "Great! Did he say anything about the presentation deadline for us?", "translation": "¡Genial! ¿Dijo él algo sobre la fecha límite de presentación para nosotros?"},
            {"speaker": "Sarah (UK)", "text": "He said the committee will evaluate us on Friday morning, so we must be fully prepared.", "translation": "Dijo que el comité nos evaluará a nosotros el viernes por la mañana, así que debemos estar totalmente preparados."},
            {"speaker": "Brandon (US)", "text": "Thank you so much for telling me. I will call him immediately.", "translation": "Muchas gracias por decírmelo. Lo llamaré a él inmediatamente."},
            {"speaker": "Sarah (UK)", "text": "You are welcome. Tell him that I will join both of you at lunchtime.", "translation": "De nada. Dile a él que me uniré a ustedes dos a la hora del almuerzo."}
        ],
        [
            "Decir 'Give to I the book' o 'between you and I'. La regla preposicional exige pronombre objeto: 'Give the book to me' y 'between you and me'.",
            "Omitir el pronombre sujeto: decir 'Is important to study' en vez de 'It is important to study'. El inglés no admite sujetos tácitos.",
            "Usar pronombres de objeto como sujeto: decir 'Him and me went to the library' en lugar del correcto 'He and I went to the library'.",
            "Escribir el pronombre 'I' en letra minúscula ('i'). En la ortografía inglesa, 'I' siempre se escribe con mayúscula independientemente de su posición.",
            "Confundir 'it's' (contracción de it is / it has) con el adjetivo posesivo 'its' (sin apóstrofo)."
        ],
        [
            "Comprueba la posición del verbo: todo lo que precede al verbo conjugado como actor es pronombre sujeto; lo que sigue al verbo o a una preposición es pronombre objeto.",
            "Para saber si usar 'Carlos and I' o 'Carlos and me', elimina mentalmente a 'Carlos': dirías 'I went to school' (por ende: Carlos and I went to school) y dirías 'She called me' (por ende: She called Carlos and me).",
            "Practica emparejando tarjetas: I -> me, You -> you, He -> him, She -> her, It -> it, We -> us, They -> them."
        ],
        "https://www.englisch-hilfen.de/en/grammar/pronouns.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 03: Artículos A, AN, THE y Fonética
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_03",
        "Clase 03: Artículos A, AN, THE y Fonética de H y U",
        "A1",
        "Determinantes & Fonética",
        "Los artículos determinan la especificidad del sustantivo. La elección crucial entre los artículos indefinidos 'a' y 'an' depende exclusivamente del sonido fonético inicial de la palabra siguiente (consonante vs. vocal), y no de su ortografía gráfica.",
        "A + sonido consonántico (/b/, /k/, /d/, /f/, /h/, /j/, /w/). AN + sonido vocálico (/æ/, /e/, /ɪ/, /ɒ/, /ʌ/, etc.). THE + sustantivo específico o definido (singular o plural). Cero artículo (Ø) + sustantivos plurales o incontables en sentido general.",
        "El sistema de artículos en inglés es una de las áreas de mayor dificultad para los aprendices, ya que las reglas de articulación no se corresponden de forma idéntica con el español. El artículo indefinido adopta dos formas alomorfas: 'a' y 'an'. La distinción entre ambas no obedece a las letras del alfabeto escrito sino a la fonología acústica inmediata. Cuando la palabra subsiguiente comienza con un fonema consonántico, se emplea 'a' (ej. 'a cat', 'a doctor', 'a wonderful trip'). Si la palabra comienza con un fonema vocálico, se inserta la consonante de enlace 'n' para evitar el hiato glotal incómodo, dando origen a 'an' (ej. 'an apple', 'an umbrella', 'an interesting talk'). El caso de la letra 'H' es un clásico campo de batalla: cuando la 'H' es muda (como en 'hour', 'honest', 'honor', 'heir'), el sonido inicial es puramente vocálico y exige imperativamente 'an' ('an hour', 'an honest opinion'). Por el contrario, cuando la 'H' es aspirada y sonora (/h/), como en 'house', 'hotel', 'hospital', la regla fonética impone 'a' ('a house', 'a hotel'). Igualmente, la letra 'U' y el diptongo 'EU' frecuentemente representan la semiconsonante /juː/ (sonido consonántico similar a la 'y' en español), lo que demanda el artículo 'a' ('a university', 'a European country', 'a uniform', 'a unique opportunity'). Finalmente, el artículo definido 'the' (/ðə/ ante consonante y /ði/ ante vocal) solo debe emplearse cuando el referente es específico y conocido por los interlocutores, debiendo omitirse por completo cuando se habla de categorías o conceptos generales en plural ('Water is vital', 'Cats are agile', nunca 'The water is vital' ni 'The cats are agile').",
        [
            "Sonido consonántico inicial rige A: 'a book', 'a pencil', 'a table', 'a computer', 'a car'.",
            "Sonido vocálico inicial rige AN: 'an apple', 'an orange', 'an engineer', 'an office', 'an island'.",
            "Regla de la H muda (Silent H): Las palabras 'hour', 'honest', 'honor' y 'heir' no pronuncian la H; comienzan con vocal fonética y exigen rigurosamente AN: 'an hour', 'an honest person', 'an honor'.",
            "Regla de la H aspirada sonora (/h/): Palabras como 'hotel', 'hospital', 'house', 'history', 'hero' pronuncian un soplo glotal y requieren obligatoriamente A: 'a house', 'a hospital', 'a history book'.",
            "Regla de la U semiconsonántica (/juː/): Si la 'u' o 'eu' suena como /juː/, es un sonido consonántico y lleva A: 'a university', 'a European citizen', 'a uniform', 'a useful tool'.",
            "Regla de la U vocálica breve (/ʌ/ o /ʊ/): Si la 'u' suena como vocal abierta, lleva AN: 'an umbrella', 'an uncle', 'an unusual event', 'an ugly building'.",
            "Omisión obligatoria de THE en generalizaciones: En inglés no se usa 'the' al hablar de cosas o seres en general: 'Music makes me happy' (correcto), 'The music makes me happy' (incorrecto si se refiere a la música en general).",
            "Pronunciación dual de THE: Se pronuncia débil /ðə/ antes de consonante ('the book') y tensa /ði/ con enlace antes de sonido vocal ('the apple', 'the end')."
        ],
        [
            "He applied for a scholarship at a university in Chicago and waited an hour for his interview. (Él solicitó una beca en una universidad de Chicago y esperó una hora para su entrevista).",
            "It is an honor to work with such an honest and hardworking team in this engineering firm. (Es un honor trabajar con un equipo tan honesto y trabajador en esta firma de ingeniería).",
            "We bought a new European car that has a unique sound system and great fuel efficiency. (Compramos un auto europeo nuevo que tiene un sistema de sonido único y gran eficiencia de combustible).",
            "Lions are powerful predators that live in savannahs across eastern and southern Africa. (Los leones son poderosos depredadores que viven en sabanas a lo largo de África oriental y meridional)."
        ],
        [
            "She rented a flat near a historic university hospital in the city centre of Edinburgh. (Ella alquiló un departamento cerca de un histórico hospital universitario en el centro de la ciudad de Edimburgo).",
            "The solicitor gave an honest assessment of the case after an exhausting three-hour hearing. (El abogado dio una evaluación honesta del caso después de una agotadora audiencia de tres horas).",
            "He wears a uniform when on duty, but wears casual clothes when he visits his family. (Él viste un uniforme cuando está de servicio, pero usa ropa informal cuando visita a su familia).",
            "Education is essential for social mobility and the economic prosperity of modern nations. (La educación es esencial para la movilidad social y la prosperidad económica de las naciones modernas)."
        ],
        [
            {"speaker": "Tyler (US)", "text": "Excuse me, is there a university library where I can study quietly for an hour?", "translation": "Disculpe, ¿hay una biblioteca universitaria donde pueda estudiar tranquilamente durante una hora?"},
            {"speaker": "Charlotte (UK)", "text": "Yes, there is a very good one just across the square, next to a historic church.", "translation": "Sí, hay una muy buena justo cruzando la plaza, junto a una iglesia histórica."},
            {"speaker": "Tyler (US)", "text": "Do I need a student identity card or a special pass to enter the building?", "translation": "¿Necesito una tarjeta de identidad estudiantil o un pase especial para ingresar al edificio?"},
            {"speaker": "Charlotte (UK)", "text": "You will need an official pass. The receptionist is an honest man and will assist you.", "translation": "Necesitarás un pase oficial. El recepcionista es un hombre honesto y te ayudará."},
            {"speaker": "Tyler (US)", "text": "That is a huge relief! Thank you for giving me such a useful recommendation.", "translation": "¡Eso es un gran alivio! Gracias por darme una recomendación tan útil."},
            {"speaker": "Charlotte (UK)", "text": "It is an absolute pleasure. Enjoy your study session in the library!", "translation": "Es un absoluto placer. ¡Disfruta tu sesión de estudio en la biblioteca!"}
        ],
        [
            "Escribir 'a hour' asumiendo que la letra 'h' es consonante. La 'h' en 'hour' es muda; por tanto debe escribirse 'an hour'.",
            "Escribir 'an university' porque la palabra empieza con la vocal escrita 'u'. La pronunciación real es /juː/ (consonántica); la forma correcta es 'a university'.",
            "Decir 'The life is beautiful' traduciendo literalmente del español 'La vida es bella'. Al hablar de conceptos abstractos universales, debe omitirse el artículo: 'Life is beautiful'.",
            "Usar 'a/an' con sustantivos plurales o incontables: decir 'a books' o 'an information'. Solo se usa con sustantivos contables singulares: 'a book' / 'some information'.",
            "Confundir la pronunciación de 'the': decir /ðə/ antes de vocal en vez de la forma sonora alargada /ði/ ('the apple')."
        ],
        [
            "Regla de oro auditiva: Cierra los ojos y pronuncia la palabra. Si tus cuerdas vocales producen un sonido de vocal abierta inmediato, coloca AN. Si hay fricción, semivocal /j/ o sonido oclusivo, coloca A.",
            "Memoriza el cuarteto de H muda: 'an hour', 'an honest person', 'an honor', 'an heir'. Para todas las demás palabras comunes con H en inglés (house, horse, hotel, head), usa siempre 'A'.",
            "Crea la asociación fonética: 'A university, a European, a unicorn, a union' (todas suenan con /juː/). En contraste: 'An umbrella, an uncle, an upgrade' (todas suenan con vocal /ʌ/)."
        ],
        "https://agendaweb.org/grammar/articles-exercises.html"
    ))

    # -------------------------------------------------------------------------
    # Clase 04: Demostrativos: This, That, These, Those
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_04",
        "Clase 04: Demostrativos: This, That, These, Those",
        "A1",
        "Determinantes & Deixis",
        "Los demostrativos ubican personas, objetos o acontecimientos en el espacio físico, temporal o psicológico en relación con la posición del hablante, distinguiendo con precisión entre singular y plural, así como entre cercanía y lejanía.",
        "Cercanía Singular: THIS (/ðɪs/). Lejanía Singular: THAT (/ðæt/). Cercanía Plural: THESE (/ðiːz/). Lejanía Plural: THOSE (/ðoʊz/ en US, /ðəʊz/ en UK). Estructura: Demostrativo + Sustantivo (Adjetivo demostrativo) o Demostrativo + Verbo (Pronombre demostrativo).",
        "Los determinantes y pronombres demostrativos en inglés articulan el sistema de deixis espacial y temporal básica. La deixis es la función lingüística mediante la cual señalamos elementos en nuestro entorno. A diferencia del español, que posee un sistema deíctico ternario graduado en tres distancias ('este' aquí, 'ese' ahí, 'aquel' allá), el inglés moderno opera exclusivamente con un sistema binario simplificado de dos polos: proximidad (near) y distancia (far). Para elementos singulares en contacto directo o proximidad física inmediata con el emisor se emplea 'this' (/ðɪs/, con vocal breve relajada y sorda final /s/). Para elementos singulares alejados físicamente o situados en un plano temporal anterior o posterior se emplea 'that' (/ðæt/). En el plano plural, la cercanía se manifiesta a través de 'these' (/ðiːz/, caracterizado fonéticamente por una vocal tensa larga /iː/ y una consonante fricativa sonora sibilante /z/), mientras que la lejanía plural se expresa con 'those'. Además del espacio geométrico palpable, los demostrativos cumplen funciones pragmáticas y discursivas fundamentales: 'this' introduce temas presentes o nuevos en una conversación ('Listen to this story'), mientras que 'that' clausura o hace referencia a una declaración ya emitida ('That was a great suggestion'). Asimismo, en interacciones telefónicas o presentaciones presenciales de cortesía, 'this' es la fórmula obligatoria para identificarse ('Hello, this is Robert', nunca 'I am Robert'), mientras que 'that' se usa para inquirir sobre el interlocutor distante al otro lado de la línea ('Who is that speaking?').",
        [
            "This: Singular + cercanía física, temporal o emocional ('this book', 'this morning', 'this idea').",
            "That: Singular + lejanía en el espacio, en el tiempo pasado/futuro o distanciamiento ('that car over there', 'that day').",
            "These: Plural + cercanía fonética y espacial. Requiere verbo plural: 'These keys are mine' (/ðiːz/).",
            "Those: Plural + lejanía espacial o temporal. Requiere verbo plural: 'Those buildings are very old' (/ðoʊz/).",
            "Contraste fonético crucial entre This y These: 'This' tiene vocal corta /ɪ/ y termina en /s/ sorda; 'These' tiene vocal larga tensa /iː/ y termina en /z/ sonora vibrante.",
            "Uso canónico en llamadas telefónicas: Para presentarse se dice 'Hello, this is Mark'; para preguntar quién llama se dice 'Who is that calling?' o 'Is that Sarah?'.",
            "Referencia anafórica en discurso: 'That' se usa para referirse a lo que alguien acaba de decir: 'That is true' (Eso es verdad), 'That sounds wonderful' (Eso suena estupendo).",
            "Uso con sustantivos contables e incontables: 'This' y 'that' pueden acompañar a sustantivos incontables ('this information', 'that furniture'), mientras que 'these' y 'those' jamás admiten incontables."
        ],
        [
            "This laptop on my desk is working perfectly, but that computer in the corner needs a software upgrade. (Esta computadora portátil en mi escritorio está funcionando perfectamente, pero aquella computadora en la esquina necesita una actualización de software).",
            "These documents right here contain our quarterly financial report, while those files belong to human resources. (Estos documentos justo aquí contienen nuestro informe financiero trimestral, mientras que aquellos archivos pertenecen a recursos humanos).",
            "Hello? This is Dr. Miller calling from the medical clinic; is that Mr. Anderson on the phone? (¿Hola? Habla el Dr. Miller desde la clínica médica; ¿es el Sr. Anderson al teléfono?).",
            "I really love this new coffee shop downtown, but that restaurant we visited last Saturday was terrible. (Realmente amo esta nueva cafetería en el centro, pero aquel restaurante que visitamos el sábado pasado fue terrible)."
        ],
        [
            "This flat here in central London is rather small, but that cottage in the countryside is very spacious. (Este departamento aquí en el centro de Londres es bastante pequeño, pero aquella casa de campo es muy espaciosa).",
            "These biscuits on the plate are freshly baked, whereas those pastries in the tin were bought yesterday. (Estas galletas en el plato están recién horneadas, mientras que aquellos pasteles en la lata se compraron ayer).",
            "Good afternoon, this is Oliver Smith from the university admissions office; is that Miss Davies? (Buenas tardes, habla Oliver Smith de la oficina de admisiones universitarias; ¿es la señorita Davies?).",
            "Those students waiting at the bus stop are heading towards the main campus for their afternoon lectures. (Aquellos estudiantes esperando en la parada de autobús se dirigen hacia el campus principal para sus conferencias de la tarde)."
        ],
        [
            {"speaker": "Kevin (US)", "text": "Excuse me, how much are these running shoes on this display rack?", "translation": "Disculpe, ¿cuánto cuestan estos zapatos para correr en este estante de exhibición?"},
            {"speaker": "Fiona (UK)", "text": "These shoes are sixty pounds, but those pairs on that top shelf are currently on sale for forty.", "translation": "Estos zapatos cuestan sesenta libras, pero aquellos pares en aquel estante superior están actualmente en oferta por cuarenta."},
            {"speaker": "Kevin (US)", "text": "That sounds like a great deal! Can you please show me that blue pair up there?", "translation": "¡Eso suena como una gran oferta! ¿Puede por favor mostrarme aquel par azul allá arriba?"},
            {"speaker": "Fiona (UK)", "text": "Certainly. This model is exceptionally comfortable for long-distance marathon training.", "translation": "Ciertamente. Este modelo es excepcionalmente cómodo para entrenamiento de maratón de larga distancia."},
            {"speaker": "Kevin (US)", "text": "Awesome! I will take this pair right here. Thank you for your assistance.", "translation": "¡Genial! Me llevaré este par justo aquí. Gracias por su ayuda."},
            {"speaker": "Fiona (UK)", "text": "You are very welcome. Take these receipt vouchers to the cashier desk over there.", "translation": "De nada. Lleve estos comprobantes de recibo al mostrador de caja allá."}
        ],
        [
            "Confundir la pronunciación de 'this' y 'these': pronunciar ambos con el mismo sonido. 'This' es breve y sordo (/ðɪs/), mientras que 'these' es alargado y vibrante (/ðiːz/).",
            "Usar 'these' o 'those' con sustantivos en singular: decir 'these book' o 'those car'. Siempre debe haber estricta concordancia de número: 'these books', 'those cars'.",
            "Presentarse por teléfono diciendo 'I am Carlos'. La norma lingüística anglófona impone el demostrativo: 'This is Carlos'.",
            "Emplear demostrativos plurales con sustantivos incontables: decir 'these money' o 'those informations'. Debe decirse 'this money' / 'that information'.",
            "Olvidar la concordancia verbal: escribir 'These is my friends' en vez de 'These are my friends'."
        ],
        [
            "Practica tocando objetos físicos inmediatos y diciendo en voz alta: 'This is my pen, these are my keys'. Luego señala a lo lejos y di: 'That is the door, those are the windows'.",
            "Mnemotecnia auditiva para el par confuso: 'This' rima con 'kiss' (sonido corto y seco). 'These' rima con 'cheese' (sonido largo y sonoro que te hace sonreír).",
            "Para llamadas en inglés, pega una nota adhesiva en tu teléfono: 'This is [Tu Nombre]' para responder con fluidez y naturalidad profesional."
        ],
        "https://www.englisch-hilfen.de/en/grammar/dem_pron.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 05: Adjetivos Posesivos vs. Pronombres Posesivos
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_05",
        "Clase 05: Adjetivos Posesivos vs. Pronombres Posesivos",
        "A1",
        "Posesión & Pronombres",
        "Los posesivos determinan la pertenencia de un objeto o relación. Los adjetivos posesivos anteceden obligatoriamente a un sustantivo, mientras que los pronombres posesivos reemplazan por completo al sustantivo para evitar redundancias.",
        "Adjetivos posesivos (+ Sustantivo): my, your, his, her, its, our, their. Pronombres posesivos (Sustituyen al Sustantivo): mine, yours, his, hers, ours, theirs. Estructura pronominal: This car is mine / That decision was theirs.",
        "En la gramática inglesa, la posesión se expresa mediante dos categorías morfosintácticas distintas que los estudiantes suelen mezclar debido a interferencias con el español. En nuestro idioma materno, la palabra 'mi' es adjetivo ('mi casa') y 'mío' es pronombre ('la casa es mía'), pero en tercera persona usamos 'su' tanto para él, ella, usted como para ellos, generando ambigüedad. En inglés no existe dicha ambigüedad porque cada género y número posee un término específico e inalterable. Los adjetivos posesivos (determiners) jamás pueden aparecer aislados al final de una oración sin un sustantivo al que acompañen: 'my book', 'your father', 'his laptop', 'her keys', 'its battery', 'our project', 'their house'. En contraposición directa, los pronombres posesivos (possessive pronouns) absorben y reemplazan totalmente al sintagma nominal previamente mencionado, evitando la repetición viciosa: 'This book is not my book; it is your book' se transforma elegantemente en 'This book is not mine; it is yours'. Salvo 'mine' y 'his', la mayoría de los pronombres posesivos se forman añadiendo una 's' al adjetivo posesivo correspondiente (your -> yours, her -> hers, our -> ours, their -> theirs). Jamás llevan apóstrofo: escribir 'your's' o 'their's' es una falta ortográfica grave. Especial atención merece la distinción homófona entre 'its' (adjetivo posesivo neutro sin apóstrofo: 'The dog wagged its tail') e 'it's' (contracción de 'it is' o 'it has': 'It's raining outside').",
        [
            "Tabla de adjetivos posesivos dependientes: my (mi/mis), your (tu/tus/su de usted), his (su de él), her (su de ella), its (su de cosa o animal), our (nuestro/nuestra), their (su de ellos/ellas).",
            "Tabla de pronombres posesivos independientes: mine (mío/mía/míos/mías), yours (tuyo/suyo), his (de él/suyo), hers (de ella/suya), ours (nuestro/de nosotros), theirs (de ellos/de ellas).",
            "El pronombre posesivo 'its' no existe de forma autónoma en el uso estándar moderno; se reformula para evitar estructuras agramaticales.",
            "Prohibición total de apóstrofos en pronombres posesivos: Es rotundamente incorrecto escribir 'mine's', 'your's', 'her's', 'our's' o 'their's'.",
            "Distinción crítica entre ITS e IT'S: 'Its' denota posesión pura ('The cat drank its milk'). 'It's' es la forma contraída de 'it is' o 'it has' ('It's a great opportunity').",
            "Construcción de doble posesión con OF ('a friend of mine'): Para decir 'un amigo mío' o 'un colega de ellos', la fórmula idiomática es: Sustantivo + OF + Pronombre posesivo ('a colleague of ours', 'a student of hers').",
            "Invariabilidad de número del adjetivo posesivo: Los adjetivos posesivos no se pluralizan en inglés; 'my' sirve para uno o cien elementos ('my friend', 'my friends', nunca 'mys friends').",
            "Concordancia con el poseedor, no con el objeto poseído: 'His car' (el auto de Juan), 'Her car' (el auto de María). El género del posesivo refleja a la persona que posee, no al sustantivo que le sigue."
        ],
        [
            "Is this black backpack yours or is it his? Mine is currently in my university locker. (¿Es esta mochila negra tuya o es de él? La mía está actualmente en mi casillero universitario).",
            "Our research team finished its analysis yesterday, but their department has not submitted theirs yet. (Nuestro equipo de investigación terminó su análisis ayer, pero su departamento aún no ha enviado el suyo).",
            "She introduced me to an old high school friend of hers at the downtown cultural festival. (Ella me presentó a un viejo amigo de la secundaria suyo en el festival cultural del centro).",
            "My sister borrowed my keys because she accidentally left hers inside her modern apartment. (Mi hermana tomó prestadas mis llaves porque accidentalmente dejó las suyas dentro de su moderno departamento)."
        ],
        [
            "That silver bicycle parked near the entrance isn't mine; I believe it is actually hers. (Aquella bicicleta plateada estacionada cerca de la entrada no es mía; creo que es en realidad de ella).",
            "Our flat has two large bedrooms, while theirs only has one small study and a kitchen. (Nuestro piso tiene dos dormitorios grandes, mientras que el de ellos solo tiene un pequeño estudio y una cocina).",
            "He spoke with a colleague of his regarding the funding grant for their scientific laboratory. (Él habló con un colega suyo respecto a la subvención de fondos para su laboratorio científico).",
            "The company updated its corporate policies, but the employees expressed their concerns about theirs. (La empresa actualizó sus políticas corporativas, pero los empleados expresaron sus preocupaciones sobre las suyas)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Hey Jessica, I found this blue umbrella on the conference table. Is it your umbrella?", "translation": "Hola Jessica, encontré este paraguas azul en la mesa de conferencias. ¿Es tu paraguas?"},
            {"speaker": "Jessica (UK)", "text": "No, it isn't mine. My umbrella has a wooden handle. I think it might be his.", "translation": "No, no es mío. Mi paraguas tiene un mango de madera. Creo que podría ser de él."},
            {"speaker": "Austin (US)", "text": "Do you mean Thomas? Let's ask him if his umbrella is missing.", "translation": "¿Te refieres a Thomas? Preguntémosle a él si su paraguas se ha extraviado."},
            {"speaker": "Jessica (UK)", "text": "Yes, let's ask him. In fact, Emma and David are looking for their umbrellas as well.", "translation": "Sí, preguntémosle. De hecho, Emma y David están buscando sus paraguas también."},
            {"speaker": "Austin (US)", "text": "Well, those black jackets on the coat rack are definitely theirs, but this umbrella is unique.", "translation": "Bueno, aquellas chaquetas negras en el perchero son definitivamente de ellos, pero este paraguas es único."},
            {"speaker": "Jessica (UK)", "text": "Brilliant. Let's leave a quick message on our team noticeboard so the owner can claim it.", "translation": "Estupendo. Dejemos un mensaje rápido en el tablero de anuncios de nuestro equipo para que el dueño pueda reclamarlo."}
        ],
        [
            "Escribir pronombres posesivos con apóstrofo: 'your's', 'her's', 'their's'. Los posesivos jamás llevan apóstrofo en inglés.",
            "Confundir 'its' con 'it's': escribir 'The dog hurt it's leg' en lugar del posesivo 'The dog hurt its leg'.",
            "Pluralizar el adjetivo posesivo: decir 'mys parents' o 'theirs books'. Los adjetivos posesivos son invariables ('my parents', 'their books').",
            "Usar el artículo antes del posesivo como en español: decir 'the my car' o 'the mine'. En inglés se dice simplemente 'my car' o 'mine'.",
            "Equivocar el género del poseedor: decir 'Maria lost his purse' creyendo que 'his' concuerda con 'purse'. Dado que María es mujer, debe ser 'her purse'."
        ],
        [
            "Regla del ancla: Si después de la palabra hay un sustantivo, necesitas el adjetivo (MY car, YOUR friend, THEIR house). Si no hay sustantivo después, necesitas el pronombre con S (YOURS, HERS, THEIRS) o MINE.",
            "Prueba de sustitución para ITS vs IT'S: Lee la frase diciendo en voz alta 'it is'. Si la oración tiene sentido lógico ('It is raining'), escribe 'it's'. Si no tiene sentido ('The dog wagged it is tail'), escribe 'its'.",
            "Crea pares de contraste en tarjetas: my car -> mine, your idea -> yours, her job -> hers, our school -> ours, their team -> theirs."
        ],
        "https://agendaweb.org/grammar/possessive-pronouns-exercises.html"
    ))

    # -------------------------------------------------------------------------
    # Clase 06: El Genitivo Sajón ('s y s')
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_06",
        "Clase 06: El Genitivo Sajón ('s y s')",
        "A1",
        "Morfología & Posesión",
        "El genitivo sajón ('s) es la estructura morfológica germánica primordial del inglés para indicar relaciones de pertenencia, parentesco, autoría o características entre personas, animales u organizaciones y sus posesiones.",
        "Poseedor singular + 's + elemento poseído: Carlos's car / Mary's laptop. Poseedores plurales regulares terminados en s + ' : The students' books / The teachers' lounge. Poseedores plurales irregulares sin s + 's: The children's toys / The women's rights.",
        "El genitivo sajón o posesivo anglosajón es una herencia directa de la flexión de caso genitivo del inglés antiguo. Mientras que las lenguas romances como el español dependen de la perífrasis preposicional 'de' para expresar la posesión ('el libro de María', 'la casa de mis padres', 'el coche del profesor'), el inglés prefiere compactar la relación sintáctica anteponiendo el poseedor al elemento poseído mediante el sufijo apóstrofo más 's' ('Mary's book', 'my parents' house', 'the teacher's car'). Esta estructura es sumamente natural y preferida cuando el poseedor es un ser animado (humano o animal), un colectivo de personas, una institución o una expresión temporal ('today's newspaper', 'two weeks' vacation'). No obstante, cuando el poseedor es un objeto inanimado o un concepto abstracto, la norma lingüística suele preferir la construcción con 'of' ('the door of the car', 'the capital of Spain', 'the roof of the house'), aunque en inglés moderno periodístico se observa cada vez más el uso del genitivo con naciones e instituciones ('the company's profit', 'El Salvador's economy'). Las reglas de puntuación del genitivo son estrictas: si el poseedor es singular, siempre se añade apóstrofo y 's' (incluso si termina en 's', como en 'James's office', aunque en nombres clásicos se admite 'James' office'). Si el poseedor es un plural regular que ya finaliza con el sufijo 's', únicamente se añade el apóstrofo al final ('the boys' jackets'). Si el plural es irregular y no termina en 's', se vuelve a aplicar la regla general de apóstrofo más 's' ('the children's bedroom', 'the men's club').",
        [
            "Sustantivo singular: Añade 's -> 'The student's essay' (el ensayo del estudiante).",
            "Sustantivo plural regular (terminado en s): Añade únicamente el apóstrofo (') tras la s -> 'The students' essays' (los ensayos de los estudiantes).",
            "Sustantivo plural irregular (sin s final): Añade 's -> 'The children's toys', 'The women's meeting', 'The people's voice'.",
            "Posesión conjunta (dos personas comparten un mismo objeto): Añade 's únicamente al último poseedor -> 'Peter and Mary's house' (una sola casa que pertenece a ambos).",
            "Posesión individual separada (cada persona posee su propio objeto): Añade 's a cada poseedor -> 'Peter's and Mary's houses' (dos casas distintas, una de Peter y otra de Mary).",
            "Nombres propios terminados en S: La norma moderna de estilo (Chicago, Oxford) prescribe añadir 's: 'Charles's book', 'James's car'.",
            "Uso temporal idiomático: Expresiones de tiempo admiten genitivo sajón: 'Yesterday's meeting', 'A month's salary', 'Tomorrow's weather'.",
            "Omisión del sustantivo poseído (lugares y comercios): Es común omitir la palabra tienda, casa o consultorio: 'At the doctor's [office]', 'At the baker's [shop]', 'At John's [house]'."
        ],
        [
            "My sister's husband is a senior financial consultant at a prestigious international bank in Boston. (El esposo de mi hermana es un consultor financiero sénior en un prestigioso banco internacional en Boston).",
            "The teachers' union announced an urgent press conference regarding next year's academic calendar. (El sindicato de profesores anunció una conferencia de prensa urgente respecto al calendario académico del próximo año).",
            "We spent our summer vacation at my grandparents' wonderful beach house in Florida. (Pasamos nuestras vacaciones de verano en la maravillosa casa de playa de mis abuelos en Florida).",
            "The children's playground was completely renovated thanks to the city mayor's generous investment. (El área de juegos de los niños fue completamente renovada gracias a la generosa inversión del alcalde de la ciudad)."
        ],
        [
            "The headmaster's decision was warmly welcomed by all the parents' representatives at the assembly. (La decisión del director fue calurosamente recibida por todos los representantes de los padres en la asamblea).",
            "She bought a lovely pair of handmade leather boots at the shoemaker's shop in the high street. (Ella compró un encantador par de botas de cuero hechas a mano en la zapatería de la calle principal).",
            "The women's national rowing team secured two gold medals at yesterday's championship in Oxford. (El equipo nacional femenino de remo aseguró dos medallas de oro en el campeonato de ayer en Oxford).",
            "James's new flat is situated just a stone's throw away from the historic cathedral. (El nuevo departamento de James está situado a tiro de piedra de la histórica catedral)."
        ],
        [
            {"speaker": "Daniel (US)", "text": "Hey Liam, is this jacket David's or does it belong to one of our classmates?", "translation": "Hola Liam, ¿esta chaqueta es de David o pertenece a uno de nuestros compañeros de clase?"},
            {"speaker": "Liam (UK)", "text": "It is David's jacket. He left it here after our morning physics lecture.", "translation": "Es la chaqueta de David. La dejó aquí después de nuestra conferencia matutina de física."},
            {"speaker": "Daniel (US)", "text": "And what about these textbooks? Are they the professor's or the students' copies?", "translation": "¿Y qué hay de estos libros de texto? ¿Son copias del profesor o de los estudiantes?"},
            {"speaker": "Liam (UK)", "text": "Those are the students' copies. The children's literature study group was using them earlier.", "translation": "Aquellas son las copias de los estudiantes. El grupo de estudio de literatura infantil las estaba usando antes."},
            {"speaker": "Daniel (US)", "text": "Great! Let's take David's jacket to his dorm and return the books to the library's front desk.", "translation": "¡Genial! Llevemos la chaqueta de David a su dormitorio y devolvamos los libros al mostrador principal de la biblioteca."},
            {"speaker": "Liam (UK)", "text": "Brilliant idea. Today's schedule has been exceptionally busy for both of us.", "translation": "Brillante idea. El horario de hoy ha sido excepcionalmente ocupado para ambos."}
        ],
        [
            "Traducir literalmente la estructura con 'of': decir 'The car of Carlos' en vez del idiomático 'Carlos's car'.",
            "Colocar el apóstrofo en el lugar equivocado en plurales regulares: escribir 'the student's books' (del estudiante singular) cuando se refiere a muchos estudiantes ('the students' books').",
            "Aplicar solo apóstrofo a plurales irregulares: escribir 'the childrens' toys' o 'the womens' rights'. Al no terminar en s, debe llevar 's: 'the children's toys' / 'the women's rights'.",
            "Usar genitivo sajón con objetos inanimados de forma forzada: decir 'the table's leg' en lugar de 'the leg of the table'.",
            "Confundir la contracción de 'is' ('Carlos's a teacher' = Carlos is a teacher) con el genitivo posesivo ('Carlos's book')."
        ],
        [
            "Ecuación del Genitivo: [Dueño] + 's + [Objeto]. Piensa siempre primero en quién es el dueño antes de nombrar lo que posee.",
            "Visualiza el apóstrofo como un gancho de pertenencia que sujeta la 's' al poseedor.",
            "Para los plurales regulares, recuerda la 'Regla del Escudo': como la palabra ya termina en 's', esa 's' actúa como escudo y solo deja entrar al apóstrofo flotante al final (parents')."
        ],
        "https://www.englisch-hilfen.de/en/grammar/genitive.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 07: Present Simple: Reglas de la 3ª Persona (-s, -es, -ies)
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_07",
        "Clase 07: Present Simple: Reglas de la 3ª Persona (-s, -es, -ies)",
        "A1",
        "Tiempos Verbales Presentes",
        "El presente simple expresa rutinas cotidianas, hábitos universales, verdades científicas y hechos permanentes. En oraciones afirmativas, la tercera persona singular (he, she, it) exige obligatoriamente la adición de una desinencia flexiva (-s, -es o -ies).",
        "Sujeto (I, You, We, They) + Verbo base + Complemento: I work in a bank. Sujeto (He, She, It) + Verbo conjugado (-s/-es/-ies) + Complemento: She works in a hospital.",
        "El Present Simple es el tiempo fundamental para comunicar la realidad habitual y fáctica en inglés. A diferencia del español, donde cada una de las seis personas gramaticales posee una desinencia verbal diferenciada (yo hablo, tú hablas, él habla, nosotros hablamos, vosotros habláis, ellos hablan), el inglés simplificó radicalmente su flexión morfológica conservando únicamente una sola marca de concordancia: la 's' de tercera persona singular en presente afirmativo. Esto significa que los pronombres I, You, We y They emplean la forma base desnuda del verbo (bare infinitive) sin alteración alguna ('they speak English'). Sin embargo, cuando el sujeto es 'He', 'She', 'It' o un sustantivo singular individual ('the scientist', 'my sister', 'water'), el verbo debe incorporar inexorablemente su terminación flexiva. Las reglas ortográficas para añadir esta desinencia se dividen en tres categorías precisas: la regla general consiste en agregar una simple '-s' ('works', 'eats', 'lives'). Si el verbo finaliza fonéticamente en un sonido sibilante estridente (-ch, -sh, -ss, -x, -z) o en la vocal '-o', se añade '-es' para facilitar la articulación acústica ('watches', 'washes', 'passes', 'fixes', 'goes', 'does'). Si el verbo termina en consonante seguida de la letra 'y', la semivocal muta a 'i' y se agrega '-es', resultando en '-ies' ('studies', 'flies', 'cries'). En marcado contraste, si la 'y' está precedida de una vocal, se preserva y solo se añade '-s' ('plays', 'enjoys', 'stays'). Por último, el verbo 'have' es anómalo y se transforma irregularmente en 'has'. Omitir esta marca flexiva es el error más recurrente del aprendiz hispanohablante debido a que nuestra mente suele percibir erróneamente la 's' como marca exclusiva de sustantivos plurales.",
        [
            "Regla general de adición de -S: La inmensa mayoría de los verbos en inglés simplemente agregan -s con He, She, It: work -> works, speak -> speaks, read -> reads, walk -> walks, listen -> listens.",
            "Regla de terminación en sibilantes y -O (-ES): Los verbos que terminan en -ch, -sh, -ss, -x, -zz o en -o añaden -es: watch -> watches, wash -> washes, miss -> misses, fix -> fixes, buzz -> buzzes, go -> goes, do -> does.",
            "Regla de consonante + Y (-IES): Si el infinitivo termina en consonante seguida de 'y', la 'y' se sustituye por 'ies': study -> studies, carry -> carries, fly -> flies, marry -> marries, cry -> cries.",
            "Regla de vocal + Y (-S): Si a la 'y' le antecede una vocal directa (a, e, o, u), no sufre mutación alguna; solo añade -s: play -> plays, enjoy -> enjoys, buy -> buys, pay -> pays, stay -> stays.",
            "Verbo irregular fundamental: El verbo 'have' no añade -s ('haves' no existe); se convierte morfológicamente en 'has': 'She has an appointment'.",
            "Fonética de la terminación -S/-ES: Se pronuncia /s/ sorda tras consonantes sordas (/p/, /t/, /k/, /f/): walks, hits. Se pronuncia /z/ sonora tras vocales y consonantes sonoras: lives, plays, reads. Se pronuncia /ɪz/ como sílaba extra tras sibilantes: watches, washes, fixes.",
            "Aplicación estricta solo a oraciones afirmativas: La adición de -s/-es/-ies se suspende por completo en oraciones negativas e interrogativas, ya que el auxiliar 'does' absorbe la carga morfológica del tiempo.",
            "Concordancia con sujetos compuestos: Si el sujeto une a dos personas con 'and' ('Carlos and Maria'), el sujeto es plural (They) y no lleva -s ('Carlos and Maria live here'). Si el sujeto es singular coordinado con 'or' o individual, sí lleva -s."
        ],
        [
            "My mother teaches mathematics at a private high school and she always wakes up at six in the morning. (Mi madre enseña matemáticas en una secundaria privada y siempre se despierta a las seis de la mañana).",
            "He studies civil engineering every evening and works as an assistant at an architectural firm during the day. (Él estudia ingeniería civil cada tarde y trabaja como asistente en una firma de arquitectura durante el día).",
            "The international flight to Los Angeles departs at half past ten and arrives late in the afternoon. (El vuelo internacional hacia Los Ángeles sale a las diez y media y llega a última hora de la tarde).",
            "She enjoys reading historical novels and regularly goes jogging in the community park with her dog. (Ella disfruta leer novelas históricas y va a trotar regularmente en el parque comunitario con su perro)."
        ],
        [
            "Dr. Robinson lectures at Cambridge University and conducts research on climate sustainability. (El Dr. Robinson da conferencias en la Universidad de Cambridge y lleva a cabo investigaciones sobre sostenibilidad climática).",
            "My flatmate watches the news bulletin every evening and finishes his university assignments before midnight. (Mi compañero de piso mira el boletín de noticias todas las tardes y termina sus tareas universitarias antes de la medianoche).",
            "The train to Manchester stops at three different towns along the countryside route. (El tren hacia Manchester se detiene en tres pueblos distintos a lo largo de la ruta campestre).",
            "She carries an umbrella in her briefcase because it rains quite frequently during autumn in England. (Ella lleva un paraguas en su maletín porque llueve con bastante frecuencia durante el otoño en Inglaterra)."
        ],
        [
            {"speaker": "Anthony (US)", "text": "What does your sister do for a living, Emily? Does she work in healthcare?", "translation": "¿A qué se dedica tu hermana, Emily? ¿Trabaja ella en el sector de la salud?"},
            {"speaker": "Emily (UK)", "text": "Yes, she does. She works as a pediatrician at a busy children's hospital in Leeds.", "translation": "Sí, así es. Ella trabaja como pediatra en un concurrido hospital infantil en Leeds."},
            {"speaker": "Anthony (US)", "text": "That is an admirable career! How does she manage her demanding daily schedule?", "translation": "¡Esa es una carrera admirable! ¿Cómo gestiona ella su exigente horario diario?"},
            {"speaker": "Emily (UK)", "text": "She wakes up early, exercises for half an hour, and catches the seven o'clock bus every morning.", "translation": "Se despierta temprano, hace ejercicio durante media hora y toma el autobús de las siete todas las mañanas."},
            {"speaker": "Anthony (US)", "text": "She truly deserves immense respect. My brother also maintains a very disciplined lifestyle.", "translation": "Ella verdaderamente merece un inmenso respeto. Mi hermano también mantiene un estilo de vida muy disciplinado."},
            {"speaker": "Emily (UK)", "text": "Indeed! Hard work always produces rewarding outcomes in professional life.", "translation": "¡En efecto! El trabajo duro siempre produce resultados gratificantes en la vida profesional."}
        ],
        [
            "Omitir la 's' de tercera persona: decir 'He work hard' o 'She live in London'. Es el error más frecuente y penalizado de nivel A1 ('He works', 'She lives').",
            "Escribir 'haves' en vez de 'has'. La forma correcta de tercera persona es 'He has a new car'.",
            "Mutar la 'y' tras una vocal: escribir 'plaies' en lugar de 'plays', o 'enjoies' en lugar de 'enjoys'. Solo muta si hay consonante previa (study -> studies).",
            "Mantener la 's' en oraciones negativas o preguntas con does: decir 'Does she works?' o 'He doesn't likes it'. En presencia de does/doesn't, el verbo principal regresa a su forma base ('Does she work?', 'He doesn't like it').",
            "Agregar -es a verbos comunes sin necesidad: escribir 'workes' o 'speakes'. Solo se añade -es a terminaciones sibilantes (-ch, -sh, -ss, -x) y a la letra -o."
        ],
        [
            "La 'Regla de la S de Oro': Cada vez que hables de 'He', 'She' o 'It' en presente afirmativo, visualiza una moneda dorada con una 'S' grabada que debes depositar al final del verbo.",
            "Sonido extra /ɪz/: Nota que palabras como 'watches', 'kisses' y 'fixes' añaden una sílaba completa al pronunciarse porque es imposible pronunciar dos 's' seguidas sin una vocal intermedia.",
            "Crea oraciones sobre tu mejor amigo o un familiar describiendo su rutina matutina para automatizar la desinencia: 'He wakes up, drinks coffee, brushes his teeth, and drives to work'."
        ],
        "https://agendaweb.org/verbs/present-simple-third-person.html"
    ))

    # -------------------------------------------------------------------------
    # Clase 08: Present Simple: Auxiliares DO y DOES
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_08",
        "Clase 08: Present Simple: Auxiliares DO y DOES (Negación y Preguntas)",
        "A1",
        "Auxiliares & Sintaxis",
        "Los auxiliares do y does carecen de traducción semántica directa en preguntas y negaciones en presente; su función primordial es estrictamente gramatical: portar la carga temporal y la polaridad negativa de la cláusula.",
        "Negativo: Sujeto + do not (don't) / does not (doesn't) + Verbo en forma base + Complemento. Interrogativo: Do / Does + Sujeto + Verbo en forma base + Complemento? Respuestas cortas: Yes, Sujeto + do/does / No, Sujeto + don't/doesn't.",
        "En la sintaxis del idioma inglés, la inmensa mayoría de los verbos léxicos comunes (work, play, study, live, buy) son morfológicamente débiles para formular negaciones o preguntas por sí mismos. No pueden adherir la partícula 'not' de forma directa (decir 'I work not' es arcaico o agramatical), ni pueden invertirse al inicio de la cláusula (decir 'Work you here?' es incorrecto). Por esta razón, el inglés recurre a una operación sintáctica conocida como 'Do-Support' (soporte de auxiliar Do). El auxiliar adopta dos formas en tiempo presente: 'do' (para I, you, we, they) y 'does' (para he, she, it). En oraciones negativas, el auxiliar se fusiona con 'not' originando las contracciones cotidianas 'don't' (/doʊnt/) y 'doesn't' (/ˈdʌz.ənt/). En oraciones interrogativas directas, el auxiliar se adelanta obligatoriamente al sujeto respetando el esquema rígido ASI (Auxiliar + Sujeto + Infinitivo). La regla de oro fundamental del Do-Support es la absorción morfológica: cuando 'does' o 'doesn't' intervienen en la cláusula, absorben la marca de tercera persona singular (-s/-es), provocando que el verbo principal retorne imperativamente a su forma base infinitiva pura ('Does she speak French?', jamás 'Does she speaks French?'). En las respuestas breves estandarizadas, el inglés no se limita a responder con un seco 'Yes' o 'No' (lo cual suena rudo o cortante para un angloparlante nativo), sino que repite la cortesía pronominal junto al auxiliar correspondiente: 'Yes, I do' / 'No, she doesn't'.",
        [
            "Distribución del auxiliar DO: Se utiliza con los pronombres I, You, We, They y con sustantivos plurales. Negación: do not o don't.",
            "Distribución del auxiliar DOES: Se utiliza con He, She, It y con sustantivos singulares o nombres propios. Negación: does not o doesn't.",
            "Regla del Verbo Base Desnudo: Tras los auxiliares do, does, don't y doesn't, el verbo principal SIEMPRE va en infinitivo sin 'to' ni desinencias: 'He doesn't work', 'Does she like coffee?'.",
            "Estructura sintáctica de preguntas cerradas (Yes/No questions): [DO/DOES] + [SUJETO] + [VERBO BASE] + [COMPLEMENTO]? -> 'Do you live in San Salvador?'.",
            "Estructura con pronombres interrogativos (Wh- questions): [WH- WORD] + [DO/DOES] + [SUJETO] + [VERBO BASE] + [COMPLEMENTO]? -> 'Where do you work?', 'What time does the class start?'.",
            "Fórmulas de respuestas cortas de cortesía: Afirmativas: 'Yes, I/you/we/they DO' / 'Yes, he/she/it DOES'. Negativas: 'No, I/you/we/they DON'T' / 'No, he/she/it DOESN'T'.",
            "Incompatibilidad absoluta con el verbo To Be: El verbo 'to be' no acepta auxiliares do ni does en presente: 'Are you tired?' (correcto), 'Do you be tired?' (inadmisible).",
            "Doble función del verbo Do: 'Do' puede funcionar simultáneamente como auxiliar gramatical y como verbo léxico ordinario de acción: 'What do you do?' (¿A qué te dedicas?), 'She doesn't do her homework' (Ella no hace su tarea)."
        ],
        [
            "Do you work at the metropolitan hospital in downtown Miami? No, I don't; I work in a research laboratory. (¿Trabajas en el hospital metropolitano en el centro de Miami? No; trabajo en un laboratorio de investigación).",
            "She doesn't like driving in heavy traffic during rush hour because it makes her extremely anxious. (A ella no le gusta conducir en tráfico pesado durante la hora pico porque la vuelve extremadamente ansiosa).",
            "Where does your father buy those fresh organic vegetables every Sunday morning? (¿Dónde compra tu padre aquellos vegetales orgánicos frescos cada domingo por la mañana?).",
            "They don't understand the complex instructions because the manual is written entirely in German. (Ellos no entienden las instrucciones complejas porque el manual está escrito completamente en alemán)."
        ],
        [
            "Does the express train to London depart from platform four or platform seven this morning? (¿El tren expreso hacia Londres sale del andén cuatro o del andén siete esta mañana?).",
            "He doesn't eat meat or poultry because he has been a committed vegetarian for over five years. (Él no come carne roja ni aves de corral porque ha sido un vegetariano comprometido durante más de cinco años).",
            "Do you usually do your weekly grocery shopping at the high street market or online? (¿Sueles hacer tus compras semanales de comestibles en el mercado de la calle principal o en línea?).",
            "We don't live in the city centre anymore; we moved to a quiet suburban village last month. (Ya no vivimos en el centro de la ciudad; nos mudamos a un tranquilo pueblo suburbano el mes pasado)."
        ],
        [
            {"speaker": "Christopher (US)", "text": "Do you speak any foreign languages, Sophie? I am trying to learn conversational Spanish.", "translation": "¿Hablas algún idioma extranjero, Sophie? Estoy intentando aprender español conversacional."},
            {"speaker": "Sophie (UK)", "text": "Yes, I do! I speak French fluently and I study German on weekends. Do you practice every day?", "translation": "¡Sí! Hablo francés con fluidez y estudio alemán los fines de semana. ¿Practicas todos los días?"},
            {"speaker": "Christopher (US)", "text": "I try to, but my roommate doesn't speak Spanish, so I don't get many opportunities to talk.", "translation": "Intento hacerlo, pero mi compañero de cuarto no habla español, así que no tengo muchas oportunidades para conversar."},
            {"speaker": "Sophie (UK)", "text": "Does your university offer an exchange language club? That usually helps immensely.", "translation": "¿Tu universidad ofrece un club de intercambio de idiomas? Eso suele ayudar enormemente."},
            {"speaker": "Christopher (US)", "text": "Yes, it does! The language department hosts meetings every Thursday evening.", "translation": "¡Sí, lo ofrece! El departamento de idiomas organiza reuniones todos los jueves por la tarde."},
            {"speaker": "Sophie (UK)", "text": "Brilliant. You definitely should attend. It really makes language acquisition enjoyable.", "translation": "Estupendo. Definitivamente deberías asistir. Realmente hace que la adquisición de idiomas sea agradable."}
        ],
        [
            "Negar sin auxiliar usando solo 'not': decir 'I not have money' o 'She not speak English'. La forma correcta exige don't o doesn't: 'I don't have money' / 'She doesn't speak English'.",
            "Mantener la -s en el verbo principal tras does/doesn't: decir 'Does he lives here?' o 'She doesn't works'. El verbo debe permanecer en forma base: 'Does he live here?' / 'She doesn't work'.",
            "Usar do con tercera persona singular: decir 'Do your mother cook?' en vez de 'Does your mother cook?'.",
            "Insertar do/does con el verbo to be: formular 'Do you are happy?' en lugar de 'Are you happy?'.",
            "Omitir el verbo léxico 'do' cuando actúa como acción: decir 'She doesn't her homework'. La frase requiere auxiliar más verbo principal: 'She doesn't do her homework'."
        ],
        [
            "Recuerda la fórmula mnemotécnica ASI para preguntas en presente: A (Auxiliar: Do/Does) + S (Sujeto) + I (Infinitivo del verbo base). Si hay palabra Wh-, la fórmula es QUASI: QU (Question word) + A + S + I.",
            "Visualiza a 'DOES' como un ladrón morfológico: llega a la oración y le roba la 'S' al verbo principal para quedársela él.",
            "Para respuestas cortas de cortesía, responde siempre con el mismo auxiliar que abrió la pregunta: 'Do you...? - Yes, I do.' / 'Does he...? - Yes, he does.'"
        ],
        "https://www.englisch-hilfen.de/en/grammar/do_does.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 09: Adverbios de Frecuencia y su Posición
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_09",
        "Clase 09: Adverbios de Frecuencia y su Posición Exacta",
        "A1",
        "Adverbios & Sintaxis",
        "Los adverbios de frecuencia cuantifican la regularidad o periodicidad con la que se lleva a cabo un evento habitual. Su colocación sintáctica dentro de la cláusula sigue reglas estrictas según el tipo de verbo principal involucrado.",
        "Regla con verbos ordinarios: Sujeto + Adverbio de Frecuencia + Verbo Principal + Complemento. Regla con el verbo To Be: Sujeto + am/is/are + Adverbio de Frecuencia + Complemento. Regla con auxiliares/modales: Sujeto + Auxiliar + Adverbio + Verbo Principal.",
        "Los adverbios de frecuencia establecen una escala porcentual probabilística y cronológica sobre la realización de los hábitos. En la lengua inglesa, su escala estándar se ordena de mayor a menor frecuencia: Always (100% del tiempo, siempre), Usually / Normally (80-90%, habitualmente o normalmente), Often / Frequently (60-70%, a menudo o con frecuencia), Sometimes (50%, a veces o en ocasiones), Occasionally (30-40%, de vez en cuando), Seldom / Rarely (10-20%, rara vez o casi nunca), y Never (0%, nunca jamás). En español, el orden de los adverbios de frecuencia es sumamente libre y flexible; podemos decir indistintamente 'Siempre llego temprano', 'Llego siempre temprano' o 'Llego temprano siempre'. Sin embargo, la sintaxis inglesa es extraordinariamente rígida y no tolera la libre dispersión de estos modificadores. Existe una regla posicional inquebrantable de dos vertientes: Primera vertiente: con todos los verbos léxicos comunes de acción o estado (eat, read, go, work), el adverbio debe colocarse obligatoriamente ANTES del verbo principal y DESPUÉS del sujeto ('I always drink tea in the morning'). Segunda vertiente: cuando el verbo de la oración es una forma del verbo 'to be' (am, is, are, was, were), el adverbio debe colocarse obligatoriamente DESPUÉS del verbo copulativo ('She is always punctual', nunca 'She always is punctual'). Cuando intervienen verbos modales o auxiliares compuestos (can, will, have, must), el adverbio se sitúa en la posición medial entre el auxiliar y el infinitivo ('You must never touch that wire'). Además, adverbios negativos inherentes como 'never', 'seldom' y 'rarely' contienen polaridad negativa implícita y prohíben categóricamente la doble negación gramatical en inglés estándar ('I never eat meat', jamás 'I don't never eat meat').",
        [
            "Escala de frecuencia canónica: Always (100%), Usually (90%), Often (70%), Sometimes (50%), Seldom/Rarely (15%), Never (0%).",
            "Posición antes de verbos comunes: Sujeto + Adverbio + Verbo: 'We often travel by train', 'Carlos rarely watches television'.",
            "Posición después del verbo To Be: Sujeto + To Be + Adverbio: 'They are always happy', 'He is never late for work'.",
            "Posición en presencia de auxiliares o modales: Sujeto + Auxiliar + Adverbio + Verbo base: 'I can never remember his name', 'We don't usually eat fast food'.",
            "Prohibición estricta de doble negación con Never/Rarely: 'Never' ya es negativo por sí mismo; conjugarlo con don't/doesn't es agramatical en inglés culto: 'She never drinks alcohol' (correcto).",
            "Movilidad periférica de Sometimes y Usually: Por motivos de énfasis o estilo, 'sometimes' y 'usually' pueden iniciar o cerrar la cláusula: 'Sometimes I walk to work' / 'I walk to work sometimes'.",
            "Preguntas sobre frecuencia con HOW OFTEN: La locución estándar para preguntar por periodicidad es 'How often...?' -> 'How often do you exercise?'.",
            "Expresiones temporales definidas van al final: Frases como 'every day', 'once a week', 'twice a month', 'on Mondays' se ubican habitualmente al final de la cláusula: 'I visit my grandparents twice a month'."
        ],
        [
            "He usually drinks a cup of black coffee before he starts his workday at the office in Dallas. (Él habitualmente bebe una taza de café negro antes de comenzar su jornada laboral en la oficina en Dallas).",
            "Our university professors are always available during their scheduled office hours to assist students. (Nuestros profesores universitarios siempre están disponibles durante sus horarios de oficina programados para asistir a los estudiantes).",
            "I seldom watch broadcast television because I prefer streaming documentary series on my tablet. (Rara vez veo televisión abierta porque prefiero transmitir series documentales en mi tableta).",
            "Do you often travel to the West Coast on business trips during the summer season? (¿Viajas a menudo a la Costa Oeste en viajes de negocios durante la temporada de verano?)."
        ],
        [
            "She is never late for her morning hospital shift, even when the London Underground experiences severe delays. (Ella nunca llega tarde a su turno matutino en el hospital, incluso cuando el metro de Londres experimenta retrasos severos).",
            "We frequently visit the local farmer's market on Saturday mornings to purchase organic produce. (Con frecuencia visitamos el mercado de agricultores locales los sábados por la mañana para comprar productos orgánicos).",
            "How often do you go to the cinema in Leicester Square with your university classmates? (¿Con qué frecuencia vas al cine en Leicester Square con tus compañeros de clase universitaria?).",
            "He rarely takes sugar in his Earl Grey tea because he prefers the authentic botanical flavour. (Él rara vez toma azúcar en su té Earl Grey porque prefiere el auténtico sabor botánico)."
        ],
        [
            {"speaker": "Zachary (US)", "text": "How often do you exercise, Chloe? You always look so healthy and energetic.", "translation": "¿Con qué frecuencia haces ejercicio, Chloe? Siempre te ves tan saludable y enérgica."},
            {"speaker": "Chloe (UK)", "text": "Thank you! I usually go for a run in the park four times a week before breakfast.", "translation": "¡Gracias! Habitualmente salgo a correr en el parque cuatro veces por semana antes del desayuno."},
            {"speaker": "Zachary (US)", "text": "That is impressive! I am rarely motivated to exercise that early in the morning.", "translation": "¡Eso es impresionante! Rara vez estoy motivado para hacer ejercicio tan temprano en la mañana."},
            {"speaker": "Chloe (UK)", "text": "Are you sometimes able to work out in the evening after your university classes?", "translation": "¿Eres a veces capaz de entrenar por la tarde después de tus clases universitarias?"},
            {"speaker": "Zachary (US)", "text": "Yes, I often lift weights at the campus gym on Monday and Wednesday nights.", "translation": "¡Sí, a menudo levanto pesas en el gimnasio del campus los lunes y miércoles por la noche."},
            {"speaker": "Chloe (UK)", "text": "Splendid! Consistency is always the key factor in maintaining physical well-being.", "translation": "¡Espléndido! La constancia es siempre el factor clave para mantener el bienestar físico."}
        ],
        [
            "Colocar el adverbio antes de to be: decir 'She always is happy' en vez de 'She is always happy'.",
            "Colocar el adverbio al final de la frase con verbos comunes: decir 'I drink coffee usually' en vez de 'I usually drink coffee'.",
            "Incurrir en doble negación con never: decir 'I don't never eat fish'. La forma correcta es 'I never eat fish' o 'I don't ever eat fish'.",
            "Separar el verbo de su objeto directo con un adverbio: decir 'I read always the newspaper'. El adverbio debe ir antes del verbo: 'I always read the newspaper'.",
            "Confundir 'seldom/rarely' con 'often': no percatarse de que seldom implica un porcentaje muy bajo (casi nunca)."
        ],
        [
            "Regla del Sándwich: Con verbos comunes, el adverbio es el relleno del sándwich que queda atrapado entre el Sujeto y el Verbo: [Sujeto] + [Adverbio] + [Verbo].",
            "Regla del Guardaespaldas de To Be: El verbo 'to be' es tan fuerte y seguro de sí mismo que siempre empuja al adverbio detrás de él: [To Be] + [Adverbio].",
            "Asocia porcentajes a los adverbios en tu libreta: 100% = Always, 50% = Sometimes, 0% = Never. Te ayudará a visualizar su peso semántico al hablar."
        ],
        "https://www.englisch-hilfen.de/en/grammar/adverbien_haeufigkeit.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 10: Preposiciones de Tiempo: AT, ON, IN (US vs. UK)
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_10",
        "Clase 10: Preposiciones de Tiempo: AT, ON, IN (US vs. UK)",
        "A1",
        "Preposiciones Temporales",
        "Las preposiciones temporales at, on e in estructuran cronológicamente la ubicación de los eventos en el tiempo, organizándose conceptualmente como una pirámide invertida que va desde la máxima precisión horaria hasta períodos históricos extensos.",
        "AT + Horas exactas y momentos puntuales del día: at 5:00 PM, at noon, at midnight, at night. ON + Días de la semana específicos y fechas completas: on Monday, on July 4th, on my birthday. IN + Meses, años, décadas, siglos, estaciones y partes generales del día: in May, in 2026, in summer, in the morning.",
        "El uso de las preposiciones temporales 'at', 'on' e 'in' suele representar un auténtico dilema para los estudiantes hispanohablantes, debido a que en español empleamos predominantemente la preposición comodín 'en' para casi todas estas expresiones ('en mayo', 'en 2026', 'en lunes', 'en la noche'). En la lengua inglesa, sin embargo, el tiempo se concibe mediante una jerarquía geométrica tridimensional parecida a una pirámide invertida o embudo conceptual. En la cúspide más amplia y general se sitúa 'IN': abarca períodos prolongados e inespecíficos como siglos ('in the 21st century'), décadas ('in the nineties'), años ('in 2026'), estaciones del año ('in winter', 'in summer'), meses ('in October') y las tres divisiones del día civil ('in the morning', 'in the afternoon', 'in the evening'). En el nivel intermedio de la pirámide se ubica 'ON': reduce el marco temporal a unidades de 24 horas exactas, como días del calendario ('on Tuesday', 'on weekdays'), fechas completas con número ('on March 15th') y días festivos específicos ('on Christmas Day', 'on New Year's Eve'). En la punta más aguda y estrecha de la pirámide se encuentra 'AT': designa momentos cronométricos exactos ('at 8:30 AM', 'at noon', 'at midnight', 'at sunset') y momentos fijos como 'at night'. En este ámbito temporal surge además una de las diferencias dialectales más célebres entre el inglés americano y el británico: mientras que los estadounidenses dicen de forma natural 'ON the weekend' ('What are you doing on the weekend?'), los británicos emplean casi invariablemente 'AT the weekend' ('What are you doing at the weekend?'). Asimismo, para hablar de períodos festivos generales como la Navidad sin referirse al día 25 en concreto, el inglés británico prefiere 'at Christmas', mientras que el estadounidense tiende a decir 'during the holidays' o 'over Christmas'.",
        [
            "Regla de AT (Precisión puntual): Horas de reloj ('at 7:00 AM', 'at half past two'), momentos astronómicos ('at dawn', 'at noon', 'at midnight'), y la expresión 'at night'.",
            "Regla de ON (Días y fechas de 24 horas): Días de la semana ('on Wednesday', 'on Fridays'), fechas completas ('on October 12th'), días especiales ('on my birthday', 'on Halloween').",
            "Regla de IN (Períodos extensos): Meses ('in September'), años ('in 1999'), estaciones ('in spring', 'in autumn/fall'), décadas ('in the eighties'), partes del día ('in the morning', 'in the afternoon', 'in the evening').",
            "Variación dialectal US vs. UK con el fin de semana: En American English se dice 'ON the weekend' o 'ON weekends'; en British English se dice 'AT the weekend' o 'AT weekends'.",
            "Días festivos completos vs. temporadas festivas: Si se menciona la palabra 'Day', rige ON: 'on Christmas Day', 'on Thanksgiving Day'. Si es la temporada general, en UK rige AT: 'at Christmas', 'at Easter'.",
            "Excepciones de omisión obligatoria: Las preposiciones at, on e in se OMITEN categóricamente cuando el sustantivo temporal va precedido por 'this', 'last', 'next' o 'every': 'I see him next Monday' (nunca 'on next Monday').",
            "Partes del día combinadas con días específicos: Si una parte del día se combina con el nombre del día, la regla del día específico (ON) domina la frase: 'on Friday morning', 'on Sunday evening'.",
            "Expresión temporal con 'IN + tiempo futuro': 'In' también indica el tiempo que transcurrirá antes de que ocurra una acción futura: 'I will graduate in two years' (Me graduaré en dos años)."
        ],
        [
            "Our university orientation session begins at 9:00 AM on Monday, August 24th, in the main auditorium. (Nuestra sesión de orientación universitaria comienza a las 9:00 AM el lunes 24 de agosto en el auditorio principal).",
            "What kind of outdoor activities do you usually enjoy doing on the weekend with your family in California? (¿Qué tipo de actividades al aire libre sueles disfrutar haciendo el fin de semana con tu familia en California?).",
            "The declaration of independence was signed in Philadelphia in the summer of 1776. (La declaración de independencia fue firmada en Filadelfia en el verano de 1776).",
            "I study best in the evening, but my roommate prefers reviewing her research notes at night before bed. (Yo estudio mejor por la tarde-noche, pero mi compañera de cuarto prefiere repasar sus notas de investigación por la noche antes de dormir)."
        ],
        [
            "The graduation ceremony will take place at 11:00 AM on Friday, the third of July, in the university chapel. (La ceremonia de graduación tendrá lugar a las 11:00 AM el viernes 3 de julio en la capilla universitaria).",
            "Are you planning to travel up to Scotland at the weekend to visit your relatives in Edinburgh? (¿Estás planeando viajar a Escocia el fin de semana para visitar a tus familiares en Edimburgo?).",
            "Many historic families across Great Britain gather together at Christmas to share a traditional roast dinner. (Muchas familias históricas en toda Gran Bretaña se reúnen en Navidad para compartir una cena asada tradicional).",
            "The library opens early in the morning and closes promptly at half past nine in the evening. (La biblioteca abre temprano por la mañana y cierra puntualmente a las nueve y media de la noche)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Hey Liam, do you have any fun plans on the weekend? A few of us are going camping.", "translation": "Hola Liam, ¿tienes planes divertidos el fin de semana? Algunos de nosotros iremos a acampar."},
            {"speaker": "Liam (UK)", "text": "Unfortunately, I am rather busy at the weekend. My sister is arriving from Bristol on Saturday morning.", "translation": "Desafortunadamente, estoy bastante ocupado el fin de semana. Mi hermana llega de Bristol el sábado por la mañana."},
            {"speaker": "Austin (US)", "text": "That sounds nice! What time does her flight arrive at the airport?", "translation": "¡Eso suena bien! ¿A qué hora llega su vuelo al aeropuerto?"},
            {"speaker": "Liam (UK)", "text": "Her plane lands at half past ten in the morning, so I must be at the terminal by ten.", "translation": "Su avión aterriza a las diez y media de la mañana, así que debo estar en la terminal para las diez."},
            {"speaker": "Austin (US)", "text": "Great! We can catch up on Monday evening after our chemistry seminar.", "translation": "¡Genial! Podemos ponernos al día el lunes por la tarde-noche después de nuestro seminario de química."},
            {"speaker": "Liam (UK)", "text": "That suits me perfectly. Let's meet at the library cafeteria at five o'clock on Monday.", "translation": "Eso me viene perfecto. Encontrémonos en la cafetería de la biblioteca a las cinco en punto el lunes."}
        ],
        [
            "Traducir literalmente 'en lunes' o 'en la noche': decir 'in Monday' o 'in night'. Debe ser 'on Monday' y 'at night'.",
            "Usar preposición con 'next', 'last' o 'every': decir 'I saw him on last week' o 'See you on next Friday'. Es un error grave; debe omitirse la preposición: 'last week', 'next Friday'.",
            "Confundir 'in the night' con 'at night': 'at night' es la expresión habitual genérica. 'In the night' es literario y alude a un momento en medio de la oscuridad.",
            "Olvidar que las fechas completas llevan ON: decir 'My birthday is in June 14th'. Dado que incluye el día exacto, debe ser 'on June 14th'.",
            "Desconocer la variación de fin de semana: calificar erróneamente de incorrecto 'at the weekend' (UK) o 'on the weekend' (US); ambas son perfectamente válidas en su respectiva variedad estándar."
        ],
        [
            "La Pirámide Invertida del Tiempo: IN (la base ancha arriba: siglos, años, meses), ON (la franja media: días y fechas de 24 horas), AT (la punta afilada abajo: horas y minutos exactos).",
            "La Regla del Calendario: Si puedes señalarlo en la cuadrícula de un calendario de pared como un solo casillero con nombre de día (Monday, July 4th), la preposición siempre es ON.",
            "Mnemotecnia para las excepciones: NUNCA uses at, on ni in delante de las palabras mágicas 'LAST, NEXT, THIS, EVERY'. Ellas ya cargan su propio pegamento temporal."
        ],
        "https://www.englisch-hilfen.de/en/grammar/preposition_time.htm"
    ))

    return lessons

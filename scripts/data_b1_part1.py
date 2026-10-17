# -*- coding: utf-8 -*-
"""
APP-KUSKAT • English Lessons Bank: Level B1 (Part 1: Lessons 01 to 10)
Each class has >= 500 words of rigorous pedagogical and linguistic content.
"""
from lesson_utils import make_lesson

def get_b1_part1():
    lessons = []

    # -------------------------------------------------------------------------
    # Clase 01: Present Perfect Simple: Formación y Experiencias de Vida
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_01",
        "Clase 01: Present Perfect Simple: Formación y Experiencias de Vida",
        "B1",
        "Tiempos Verbales Perfectos",
        "El presente perfecto conecta acontecimientos ocurridos en un pasado indefinido con el momento presente, expresando experiencias biográficas acumuladas, noticias recientes y estados vigentes sin especificar una fecha cerrada.",
        "Afirmativo: Sujeto + have / has + Participio Pasado (Past Participle - Columna 3) + Complemento: I have visited London / She has written three books. Negativo: haven't / hasn't + Participio Pasado. Pregunta: Have/Has + Sujeto + Participio Pasado? Respuestas cortas: Yes, I have / No, she hasn't.",
        "El Present Perfect Simple constituye el umbral divisorio fundamental entre el usuario básico y el usuario independiente del nivel B1. En la lingüística inglesa contemporánea, este tiempo no se clasifica primariamente como un pasado, sino como una forma de aspecto perfecto en tiempo presente: su misión primordial no es relatar la cronología histórica de cuándo sucedió algo (función que pertenece exclusivamente al Past Simple), sino enfatizar la relevancia, las consecuencias psicológicas o la vigencia presente del evento. Cuando un hablante dice 'I have visited Japan', no le interesa precisar si viajó en 2015 o en 2022; lo que proclama con orgullo es que Japón forma parte de su bagaje vital actual, que posee los recuerdos, la experiencia cultural y el conocimiento acumulado en este instante. La arquitectura morfosintáctica es compuesta: exige obligatoriamente el verbo auxiliar 'HAVE' o 'HAS' (según la persona gramatical: has para he, she, it) emparejado con el participio pasado del verbo principal (past participle, correspondiente a la tercera columna en las tablas de verbos). Para los verbos regulares, el participio adopta la misma terminación en '-ed' que el pasado simple ('worked', 'lived', 'studied'); pero para los verbos irregulares, exhibe formas específicas que deben asimilarse meticulosamente (go -> gone / been; see -> seen; write -> written; fly -> flown; break -> broken). La regla de oro prohibitiva del Present Perfect es su incompatibilidad absoluta con marcadores de tiempo pasado cerrado o extinto: está terminantemente prohibido usar el Present Perfect con palabras como 'yesterday', 'last night', 'in 2020' o 'two days ago'. Decir 'I have seen him yesterday' es un calco erróneo inaceptable; debe decirse 'I saw him yesterday' (Past Simple) o 'I have seen him recently' (Present Perfect).",
        [
            "Estructura compuesta obligatoria: Sujeto + HAVE / HAS + Participio Pasado: 'We have completed the project', 'Dr. Smith has published a new paper'.",
            "Concordancia de 3ª persona: He, She, It concuerdan con HAS (contracción: 's): 'He's traveled to Europe' (cuidado: no confundir he's = he has con he's = he is).",
            "Uso para Experiencias de Vida (Life experiences): Expresa vivencias acumuladas a lo largo de la existencia hasta el día de hoy: 'I have tried sushi', 'She has lived in four countries'.",
            "Incompatibilidad con tiempo pasado cerrado: JAMÁS se usa con yesterday, last week, in 1999, two hours ago: 'I saw a movie yesterday' (correcto), 'I have seen a movie yesterday' (inadmisible).",
            "Uso con marcadores de período no cerrado: Se utiliza con expresiones de tiempo que aún no han terminado: today, this week, this month, this year, in my life: 'I have drunk two coffees this morning' (si la mañana aún continúa).",
            "Negación canónica: Sujeto + haven't / hasn't + Participio Pasado: 'They haven't finished their examinations yet'.",
            "Interrogación por inversión de HAVE/HAS: Have/Has + Sujeto + Participio Pasado?: 'Have you ever eaten caviar? - Yes, I have.' / 'No, I haven't.'",
            "Pregunta sobre experiencias con EVER: La fórmula estándar para preguntar si alguien ha vivido una experiencia alguna vez en su vida es: 'Have you EVER + participio?'."
        ],
        [
            "The international research team has developed a highly efficient solar cell that has broken world records in laboratory tests. (El equipo de investigación internacional ha desarrollado una célula solar altamente eficiente que ha roto récords mundiales en pruebas de laboratorio).",
            "She has published three influential academic books on renewable energy and has lectured at several prestigious American universities. (Ella ha publicado tres libros académicos influyentes sobre energía renovable y ha dado conferencias en varias prestigiosas universidades estadounidenses).",
            "Have you ever experienced severe turbulence while flying across the Rocky Mountains on a commercial passenger airliner? (¿Has experimentado alguna vez turbulencia severa mientras volabas a través de las Montañas Rocosas en un avión de pasajeros comercial?).",
            "We haven't received the official confirmation regarding our university research funding from the state committee yet. (Aún no hemos recibido la confirmación oficial respecto a nuestro financiamiento de investigación universitaria por parte del comité estatal)."
        ],
        [
            "The British physician has worked in specialized humanitarian trauma units across three different continents throughout his medical career. (El médico británico ha trabajado en unidades especializadas de trauma humanitario en tres continentes diferentes a lo largo de su carrera médica).",
            "Have you seen the contemporary art exhibition that has just opened at the Tate Modern in central London this week? (¿Has visto la exposición de arte contemporáneo que acaba de inaugurarse en la Tate Modern en el centro de Londres esta semana?).",
            "He has lived in Edinburgh for over a decade, but he hasn't lost his distinctive northern English accent. (Él ha vivido en Edimburgo durante más de una década, pero no ha perdido su distintivo acento del norte de Inglaterra).",
            "The Prime Minister has addressed the nation regarding the economic measures that the government has implemented this morning. (El Primer Ministro se ha dirigido a la nación respecto a las medidas económicas que el gobierno ha implementado esta mañana)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Have you ever traveled to Latin America, Charlotte? Our university is organizing an exchange trip to El Salvador.", "translation": "¿Has viajado alguna vez a América Latina, Charlotte? Nuestra universidad está organizando un viaje de intercambio a El Salvador."},
            {"speaker": "Charlotte (UK)", "text": "No, I haven't! I have visited several countries in southern Europe and northern Africa, but I have never been to the Americas.", "translation": "No, ¡no he viajado! He visitado varios países en el sur de Europa y el norte de África, pero nunca he estado en las Américas."},
            {"speaker": "Austin (US)", "text": "You should definitely apply! I have heard wonderful things about the volcanic national parks and historic archaeological sites.", "translation": "¡Definitivamente deberías postularte! He oído cosas maravillosas sobre los parques nacionales volcánicos y los sitios arqueológicos históricos."},
            {"speaker": "Charlotte (UK)", "text": "That sounds captivating. Has the university published the formal application requirements on the portal yet?", "translation": "Eso suena cautivador. ¿Ha publicado la universidad los requisitos formales de solicitud en el portal ya?"},
            {"speaker": "Austin (US)", "text": "Yes, they have! I have already submitted my personal essay and my academic references this morning.", "translation": "¡Sí, lo han hecho! Yo ya he presentado mi ensayo personal y mis referencias académicas esta mañana."},
            {"speaker": "Charlotte (UK)", "text": "Brilliant. I will prepare my application documents straight away so that I don't miss the deadline.", "translation": "Estupendo. Prepararé mis documentos de solicitud de inmediato para no perder la fecha límite."}
        ],
        [
            "Usar Present Perfect con fechas o tiempos específicos pasados: decir 'I have seen him yesterday' o 'She has graduated in 2020'. Debe usarse Past Simple: 'I saw him yesterday' / 'She graduated in 2020'.",
            "Confundir el pasado simple con el participio en verbos irregulares: decir 'I have went' o 'She has wrote'. Debe usarse la tercera columna: 'I have gone', 'She has written'.",
            "Olvidar usar 'has' con tercera persona singular: decir 'He have finished'. Con he, she, it se usa 'has': 'He has finished'.",
            "Confundir la contracción ''s': interpretar erróneamente 'He's eaten' como 'He is eaten'. En presencia de un participio, ''s' es la contracción de HAS.",
            "Responder a 'Have you...?' con 'Yes, I did'. En respuestas breves se responde con el mismo auxiliar: 'Yes, I have' / 'No, I haven't'."
        ],
        [
            "La Prueba del Puente Hacia el Presente: Pregúntate: ¿importa cuándo ocurrió o importa que el resultado está vivo en este momento? Si es una experiencia vital que llevas en la mochila del presente -> usa PRESENT PERFECT.",
            "La Alarma de los Tiempos Muertos: Cada vez que veas palabras como 'yesterday, last week, ago, in 1990', suena una alarma estridente: ¡El Present Perfect queda fulminantemente prohibido! Usa Past Simple.",
            "Técnica de la Tercera Columna: Al repasar verbos irregulares, visualiza siempre el trío completo con ritmo poético: see-saw-SEEN, go-went-GONE, write-wrote-WRITTEN."
        ],
        "https://www.englisch-hilfen.de/en/grammar/pres_perf.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 02: Marcadores del Present Perfect: EVER, NEVER, ALREADY, YET, JUST
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_02",
        "Clase 02: Marcadores del Present Perfect: EVER, NEVER, ALREADY, YET, JUST",
        "B1",
        "Adverbios Temporales Perfectos",
        "Los adverbios especializados ever, never, already, yet y just modulan con extrema precisión la cronología psicológica, la expectativa y el grado de consumación de las acciones formuladas en presente perfecto.",
        "EVER (Alguna vez en la vida): Have you EVER + Participio? NEVER (Jamás en la vida): Sujeto + have/has + NEVER + Participio (oración afirmativa con sentido negativo). JUST (Acaba de ocurrir hace unos instantes): Sujeto + have/has + JUST + Participio. ALREADY (Ya ocurrió antes de lo esperado): Sujeto + have/has + ALREADY + Participio (posición medial o final). YET (Aún no / Ya en preguntas): Al final de oraciones negativas y preguntas: Haven't + Participio + YET? / Have you finished YET?",
        "Los adverbios temporales aspectuales constituyen el engranaje de mayor precisión dentro del Present Perfect, permitiendo al hablante modular matices sobre cuándo ocurrió la acción y qué grado de sorpresa o expectativa despierta el acontecimiento. La sintaxis de cada uno de estos cinco marcadores ('ever', 'never', 'already', 'yet', 'just') está rígidamente codificada en la gramática inglesa: 'EVER' (/ˈev.ər/) significa 'en algún momento de toda la vida hasta el presente' y se ubica primordialmente en posición medial dentro de preguntas entre el sujeto y el participio pasado ('Have you ever eaten octopus?'); también opera en cláusulas de superlativo absoluto ('This is the best movie I have ever seen'). 'NEVER' (/ˈnev.ər/) significa 'en ningún momento de la existencia'; porta polaridad negativa intrínseca y prohíbe la doble negación, situándose entre have/has y el participio pasado en oraciones de verbo afirmativo ('I have never visited Asia', jamás 'I haven't never'). 'JUST' (/dʒʌst/) equivale a la perífrasis romance 'acabar de + infinitivo', señalando que la acción se consumó de forma exitosa hace apenas unos escasos minutos o segundos ('The train has just arrived', 'I have just finished my tea'). 'ALREADY' (/ɔːlˈred.i/) transmite la noción de 'ya', destacando con un matiz de satisfacción que el evento ocurrió antes de lo anticipado; se coloca típicamente en posición medial entre el auxiliar y el participio ('I have already done my homework') o al final para dar énfasis ('I have done it already!'). Por último, 'YET' (/jet/) posee un doble comportamiento según la polaridad de la cláusula y se ubica sistemáticamente al FINAL absoluto de la oración: en cláusulas negativas significa 'todavía no / aún no', denotando que la acción no ha ocurrido pero se espera firmemente que suceda muy pronto ('I haven't called him yet'); en oraciones interrogativas significa '¿ya?', consultando si la acción esperada finalmente se ha consumado ('Have you submitted the report yet?').",
        [
            "Posición de EVER: Medial entre sujeto y participio en preguntas: 'Have you EVER seen a shooting star?'. También con superlativos: 'the best coffee I have ever tasted'.",
            "Posición de NEVER: Medial entre have/has y participio en oraciones afirmativas: 'She has NEVER broken a bone in her body'. Prohibido usar con negaciones auxiliares.",
            "Posición de JUST: Medial entre have/has y participio: 'The postman has JUST delivered the mail' (equivale a: acaba de entregar el correo).",
            "Posición de ALREADY: Habitualmente medial: 'We have ALREADY paid the electricity bill'. También admite posición final enfática: 'I know that already!'.",
            "Posición final obligatoria de YET: Se ubica siempre al final de la oración: 'The bus hasn't arrived YET' (aún no), 'Have you had breakfast YET?' (¿ya?).",
            "Distinción crucial de polaridad con YET: En negativas expresa que algo falta por hacer; en interrogativas averigua si la tarea pendiente se concluyó.",
            "Diferencia diatópica US vs. UK con JUST y ALREADY: En British English estándar es obligatorio usar Present Perfect con just y already ('I have just eaten', 'I have already seen it'); en American English cotidiano es muy frecuente y aceptado usar Past Simple ('I just ate', 'I already saw it').",
            "Contraste semántico de respuesta: 'Are you hungry? - No, I have JUST had lunch' (hace 5 minutos) vs. 'No, I have ALREADY eaten' (hace 1 hora, no tengo hambre)."
        ],
        [
            "I have already submitted my research proposal to the university academic review board, but I haven't received their feedback yet. (Ya he presentado mi propuesta de investigación ante la junta de revisión académica de la universidad, pero aún no he recibido sus comentarios).",
            "Look! The express train has just pulled into the central station platform, so let's gather our carry-on luggage immediately. (¡Mira! El tren expreso acaba de entrar en el andén de la estación central, así que recojamos nuestro equipaje de mano de inmediato).",
            "Have you ever presented a scientific research paper at an international technological conference in the United States? (¿Has presentado alguna vez un artículo de investigación científica en una conferencia tecnológica internacional en los Estados Unidos?).",
            "My roommate has never traveled outside North America, but he is currently planning an extensive educational trip across Europe. (Mi compañero de cuarto nunca ha viajado fuera de América del Norte, pero actualmente está planificando un extenso viaje educativo a través de Europa)."
        ],
        [
            "The headmaster has just announced that the annual school prize-giving ceremony will take place in the historic cathedral next Friday. (El director acaba de anunciar que la ceremonia anual de entrega de premios escolares tendrá lugar en la histórica catedral el próximo viernes).",
            "Have you finished reviewing the legal contracts for the commercial property acquisition yet? No, I haven't finished them yet. (¿Has terminado de revisar los contratos legales para la adquisición de la propiedad comercial ya? No, no los he terminado todavía).",
            "She has already completed two rigorous postgraduate degree programmes at Oxford University before reaching the age of twenty-eight. (Ella ya ha completado dos rigurosos programas de posgrado en la Universidad de Oxford antes de cumplir los veintiocho años).",
            "He has never tasted traditional Yorkshire pudding, so we have invited him to join our family for Sunday roast dinner. (Él nunca ha probado el pudín tradicional de Yorkshire, así que lo hemos invitado a unirse a nuestra familia para la cena asada del domingo)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Hey Jessica, have you finished packing your suitcase for our international flight to London yet?", "translation": "Hola Jessica, ¿has terminado de empacar tu maleta para nuestro vuelo internacional a Londres ya?"},
            {"speaker": "Jessica (UK)", "text": "Yes, I have already packed my clothes and travel documents! But I haven't printed our boarding passes yet.", "translation": "¡Sí, ya he empacado mi ropa y documentos de viaje! Pero todavía no he impreso nuestras tarjetas de embarque."},
            {"speaker": "Austin (US)", "text": "Don't worry about printing them; the airline has just sent digital mobile passes directly to our smartphones.", "translation": "No te preocupes por imprimirlas; la aerolínea acaba de enviar pases móviles digitales directamente a nuestros teléfonos inteligentes."},
            {"speaker": "Jessica (UK)", "text": "Brilliant! That saves us a lot of trouble. Have you ever flown on a long-haul overnight flight before?", "translation": "¡Estupendo! Eso nos ahorra muchos problemas. ¿Has volado alguna vez en un vuelo nocturno de larga distancia?"},
            {"speaker": "Austin (US)", "text": "No, I have never flown across the Atlantic Ocean. This is going to be my very first international journey.", "translation": "No, nunca he volado a través del Océano Atlántico. Este va a ser mi primerísimo viaje internacional."},
            {"speaker": "Jessica (UK)", "text": "You will love it! Overnight transatlantic flights are generally very smooth and comfortable.", "translation": "¡Te encantará! Los vuelos transatlánticos nocturnos son generalmente muy suaves y cómodos."}
        ],
        [
            "Colocar 'yet' al principio o en medio de la oración: decir 'I yet haven't finished' o 'I haven't yet finished'. La posición estándar es al final: 'I haven't finished yet'.",
            "Incurrir en doble negación con never: decir 'I haven't never seen that'. Con never el verbo va afirmativo: 'I have never seen that'.",
            "Usar 'already' en negaciones ordinarias en lugar de yet: decir 'I haven't already seen the film'. En negativas se usa yet: 'I haven't seen the film yet'.",
            "Colocar 'just' al final de la oración: decir 'The train arrived just'. Just va en posición medial: 'The train has just arrived'.",
            "Confundir 'ever' con 'always': decir 'I ever love you'. 'Ever' significa alguna vez en la vida; siempre se dice 'always'."
        ],
        [
            "El Sándwich Medial (JUST, ALREADY, NEVER, EVER): Estos cuatro van atrapados en medio del sándwich: [HAVE/HAS] + [Adverbio] + [Participio Pasado].",
            "La Ley del Guardián del Final (YET): Visualiza a YET como el portero que siempre se queda al final de la fila custodiando la puerta de salida de las oraciones negativas y preguntas.",
            "Traducción Mental Rápida: JUST = 'Acabo de'; ALREADY = 'Ya lo hice antes de tiempo'; YET (negativo) = 'Todavía no'; YET (pregunta) = '¿Ya terminaste?'; EVER = '¿Alguna vez en la vida?'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/present_perfect_already_yet.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 03: Preposiciones Temporales de Duración: FOR vs. SINCE y HOW LONG
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_03",
        "Clase 03: Expresiones de Duración: FOR vs. SINCE y HOW LONG",
        "B1",
        "Preposiciones Temporales de Duración",
        "Las partículas preposicionales for y since cuantifican la continuidad temporal de estados o acciones iniciados en el pasado que perduran vigentes en el presente, respondiendo a la pregunta fundamental how long.",
        "FOR + Período o duración cuantitativa acumulada (cálculo de tiempo transcurrido): for ten years, for two hours, for three days, for a long time. SINCE + Punto cronológico de inicio exacto en el calendario o reloj: since 2015, since Monday, since 8:00 AM, since I was a child. Pregunta rectora de duración: HOW LONG + have/has + Sujeto + Participio Pasado?: How long have you lived here?",
        "La articulación de la duración temporal en la lengua inglesa constituye uno de los contrastes sintácticos más reveladores con el español. En nuestro idioma materno solemos recurrir a perífrasis de presente como 'hace diez años que vivo aquí' o 'llevo tres horas esperando'. En inglés, cuando una acción comenzó en el pasado pero continúa activa, vigente y en pleno desarrollo en el presente, la norma gramatical exige el Present Perfect en combinación con dos preposiciones cronológicas complementarias: 'FOR' y 'SINCE'. La preposición 'FOR' (/fɔːr/ o /fər/) se asocia con la noción matemática de período, duración o cantidad de tiempo acumulada (a period / duration of time). Se utiliza cuando el hablante calcula cuántas horas, días, semanas, meses, siglos o años ha durado la acción en su totalidad: 'for three hours', 'for five days', 'for two weeks', 'for ten years', 'for a long time', 'for ages'. En contrapartida radical, la preposición 'SINCE' (/sɪns/) se asocia con la noción de punto de origen o hito temporal de inicio (a starting point in time). Se utiliza cuando el hablante no contabiliza la suma de horas transcurridas, sino que señala el momento exacto en el calendario o reloj en que se encendió el cronómetro de la acción: 'since 2018', 'since Monday', 'since last Christmas', 'since nine o'clock', 'since yesterday'. Asimismo, 'since' puede introducir una cláusula subordinada completa en Past Simple que marca el momento de inicio de la acción ('I have lived in this city since I graduated from university'). Para interrogar sobre la extensión temporal de estas situaciones no terminadas, el inglés emplea la locución fija 'HOW LONG' (/haʊ lɒŋ/), la cual desencadena indefectiblemente el Present Perfect: 'How long have you known Carlos?' ('¿Cuánto tiempo hace que conoces a Carlos?' o '¿Desde hace cuánto conoces a Carlos?').",
        [
            "Regla de FOR (Duración / Cantidad de tiempo): for twenty minutes, for two hours, for five days, for three months, for ten years, for centuries, for a long time, for ages.",
            "Regla de SINCE (Punto de inicio en el calendario/reloj): since 8:30 AM, since Monday, since May, since 2012, since last week, since yesterday, since childhood.",
            "SINCE con cláusula subordinada en Past Simple: 'I have known her since WE WERE at primary school together' (la cláusula tras since va en pasado simple).",
            "Preguntas de duración con HOW LONG: [HOW LONG + HAVE/HAS + SUJETO + PARTICIPIO]?: 'How long have you worked at this engineering firm?'.",
            "Incompatibilidad de SINCE con Present Simple ordinario: Decir 'I live here since 2010' es un error grave de calco del español. Debe usarse Present Perfect: 'I HAVE LIVED here since 2010'.",
            "Uso de FOR con Past Simple para períodos concluidos: Si la acción ya terminó por completo y ya no continúa en el presente, se usa FOR con Past Simple: 'He lived in London for two years' (vivió allí dos años, pero ya se mudó).",
            "Locución FOR AGES: Expresión idiomática coloquial muy común que denota 'durante una eternidad / muchísimo tiempo': 'I haven't seen you for ages!'.",
            "Distinción clave: FOR responde a '¿Cuánto tiempo duró la suma?' (How many hours/years?). SINCE responde a '¿Cuándo exactamente comenzó la acción?' (When did it start?)."
        ],
        [
            "The international research team has been investigating sustainable battery technologies for over five years at the university laboratory. (El equipo de investigación internacional ha estado investigando tecnologías de baterías sostenibles durante más de cinco años en el laboratorio universitario).",
            "Dr. Harrison has served as the chief medical director of the metropolitan hospital since January 2018. (El Dr. Harrison se ha desempeñado como director médico jefe del hospital metropolitano desde enero de 2018).",
            "How long have you studied advanced computer science and software architecture at California State University? (¿Cuánto tiempo has estudiado ciencias de la computación avanzadas y arquitectura de software en la Universidad Estatal de California?).",
            "We have lived in this suburban residential neighborhood since our younger daughter graduated from high school. (Hemos vivido en este vecindario residencial suburbano desde que nuestra hija menor se graduó de la secundaria)."
        ],
        [
            "The ancient cathedral in Canterbury has stood as a monumental symbol of British architectural heritage for centuries. (La antigua catedral en Canterbury se ha mantenido como un símbolo monumental del patrimonio arquitectónico británico durante siglos).",
            "She has worked as a senior legal consultant in central London since she completed her postgraduate law degree in Oxford. (Ella ha trabajado como consultora jurídica sénior en el centro de Londres desde que completó su título de posgrado en derecho en Oxford).",
            "I haven't seen my university flatmates for ages, so we have arranged a reunion dinner in Manchester this Saturday. (No he visto a mis compañeros de piso universitario en una eternidad, así que hemos organizado una cena de reencuentro en Manchester este sábado).",
            "The railway workers have been on strike since early Tuesday morning, causing substantial disruption across the regional network. (Los trabajadores ferroviarios han estado en huelga desde temprano el martes por la mañana, causando una interrupción sustancial en toda la red regional)."
        ],
        [
            {"speaker": "Austin (US)", "text": "How long have you lived in this historic apartment building in central London, Sophie?", "translation": "¿Cuánto tiempo has vivido en este histórico edificio de departamentos en el centro de Londres, Sophie?"},
            {"speaker": "Sophie (UK)", "text": "I have lived here for nearly four years. I moved into this flat in September 2022, right before starting university.", "translation": "He vivido aquí durante casi cuatro años. Me mudé a este piso en septiembre de 2022, justo antes de comenzar la universidad."},
            {"speaker": "Austin (US)", "text": "That is wonderful! Have you known your flatmates for a long time as well?", "translation": "¡Eso es maravilloso! ¿Conoces a tus compañeros de piso durante mucho tiempo también?"},
            {"speaker": "Sophie (UK)", "text": "Yes, Emma and I have been close friends since our first week of undergraduate lectures.", "translation": "Sí, Emma y yo hemos sido amigas cercanas desde nuestra primera semana de conferencias de pregrado."},
            {"speaker": "Austin (US)", "text": "I have only been in Britain for two weeks, but I already love exploring the historic streets and museums.", "translation": "Yo solo he estado en Gran Bretaña durante dos semanas, pero ya me encanta explorar las calles históricas y los museos."},
            {"speaker": "Sophie (UK)", "text": "Brilliant. London has so much to offer. We should organize a walking tour around Westminster this weekend.", "translation": "Estupendo. Londres tiene mucho que ofrecer. Deberíamos organizar un recorrido a pie por Westminster este fin de semana."}
        ],
        [
            "Usar Present Simple con since o for: decir 'I live here since five years' o 'I know him for two years'. Para acciones que continúan vigentes debe usarse Present Perfect: 'I have lived here for five years', 'I have known him for two years'.",
            "Confundir for y since: decir 'since two hours' o 'for 2015'. La regla impone: for dos horas (período cuantitativo) y since 2015 (punto de inicio en el calendario).",
            "Traducir literalmente 'hace dos años que': decir 'make two years I study'. La estructura correcta es 'I have studied for two years'.",
            "Usar 'since' para un período de tiempo: decir 'since a long time'. Debe ser 'for a long time'.",
            "Preguntar con 'How much time' en lugar de 'How long': formular 'How much time do you work here?'. La fórmula canónica de duración es 'How long have you worked here?'."
        ],
        [
            "La Prueba del Cronómetro vs. Calendario: Si mides la duración sumando unidades en un cronómetro (2 horas, 5 días, 10 años) -> usa FOR. Si señalas una fecha o una hora en la pared (2018, Monday, 8:00 AM) -> usa SINCE.",
            "La Ecuación de la Duración: [HOW LONG] + [HAVE / HAS] + [SUJETO] + [PARTICIPIO] + [FOR / SINCE]. Si memorizas este patrón, responderás con soltura y precisión en cualquier entrevista en inglés.",
            "Cuidado con el 'HACE': En español decimos 'vivo aquí hace 3 años'. En inglés NO se usa 'ago' en esta frase; se dice estrictamente 'I have lived here FOR 3 years'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/since_for.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 04: Present Perfect vs. Past Simple (US vs. UK)
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_04",
        "Clase 04: Present Perfect vs. Past Simple (US vs. UK)",
        "B1",
        "Contraste Temporal & Variación Diatópica",
        "El contraste entre el presente perfecto y el pasado simple delimita la frontera entre el tiempo cerrado pretérito y la relevancia presente, albergando una de las divergencias diatópicas más profundas entre el inglés americano y el británico.",
        "Past Simple (Tiempo cerrado y desvinculado): Sujeto + Verbo en pasado + Marcador cerrado (yesterday, in 2010, two days ago, then, when). Present Perfect (Tiempo indefinido o conectado con el ahora): Sujeto + have/has + Participio + Marcadores abiertos (recently, already, yet, just, so far, in my life). Variación US vs. UK con marcadores de inmediatez: UK exige estrictamente Present Perfect con just, already y yet (I have just eaten / Have you seen it yet?). US admite alternancia común con Past Simple (I just ate / Did you see it yet?).",
        "La delimitación entre el Past Simple y el Present Perfect Simple es considerada por los lingüistas como la piedra de toque que define la competencia gramatical en el nivel intermedio B1. La confusión en los aprendices surge porque ambos tiempos traducen eventos que ocurrieron físicamente antes del momento actual, pero la cosmovisión lingüística del inglés los categoriza en dos dimensiones psicológicas completamente distintas. La regla de decisión se articula a través de tres preguntas diagnósticas cardinales: 1) ¿El período temporal en el que ocurrió la acción está completamente terminado y cerrado? Si la respuesta es SÍ (ayer, el año pasado, en el siglo XIX, cuando era niño), el idioma exige obligatoriamente PAST SIMPLE ('Shakespeare wrote Hamlet', pues Shakespeare ya falleció y su tiempo vital está cerrado; decir 'Shakespeare has written Hamlet' es agramatical). Si el período sigue abierto (hoy, esta semana, este año, en toda mi vida), se utiliza PRESENT PERFECT ('Stephen King has written many horror novels', pues sigue vivo y puede escribir más). 2) ¿Se menciona una fecha, hora o momento puntual específico? Si la respuesta es SÍ, rige PAST SIMPLE ('I arrived at 9:00 AM'); si la respuesta es NO y la experiencia es indefinida, rige PRESENT PERFECT ('I have arrived safely'). 3) ¿El resultado o consecuencia del evento afecta visiblemente el instante presente? Si la respuesta es SÍ, rige PRESENT PERFECT ('I have lost my keys, so I can't open the door now'). En este terreno emerge además la divergencia transatlántica más representativa: el inglés británico (UK) mantiene una disciplina gramatical sumamente rigurosa con los adverbios 'just', 'already' y 'yet', considerando inaceptable el uso del pasado simple con ellos ('I have just finished my tea', 'Have you heard the news yet?'). En marcado contraste, el inglés americano (US) ha simplificado su uso cotidiano hacia el Past Simple, siendo enteramente estándar y predominante decir 'I just finished my coffee', 'I already did my homework' y 'Did you call him yet?'.",
        [
            "Criterio de Tiempo Cerrado (Past Simple): Ayer, anoche, la semana pasada, en 2021, hace tres días: 'I saw Carlos yesterday' (nunca 'have seen').",
            "Criterio de Tiempo Abierto (Present Perfect): Hoy, esta semana, este mes, en mi vida: 'I have seen Carlos this morning' (si la mañana continúa).",
            "Criterio de Biografía: Para autores o figuras históricas fallecidas se usa Past Simple ('Cervantes wrote Don Quixote'); para creadores vivos se usa Present Perfect ('She has written five novels').",
            "Criterio de Relevancia Presente: 'I have lost my wallet' (significa: la perdí y sigo sin tenerla ahora mismo en mi bolsillo). 'I lost my wallet yesterday, but I found it this morning' (acción pretérita concluida).",
            "Divergencia US vs. UK con JUST: UK exige Present Perfect: 'I have just had lunch'. US admite y prefiere Past Simple: 'I just had lunch'.",
            "Divergencia US vs. UK con ALREADY: UK exige Present Perfect: 'We have already seen that film'. US admite Past Simple: 'We already saw that movie'.",
            "Divergencia US vs. UK con YET: UK exige Present Perfect: 'Have you finished yet?'. US admite Past Simple: 'Did you finish yet?'.",
            "Preguntas con WHEN rigen Past Simple: Como 'WHEN' pregunta por el momento cronológico exacto en el tiempo cerrado, SIEMPRE exige Past Simple: 'When DID you buy that car?' (nunca 'When have you bought that car?')."
        ],
        [
            "The engineering company developed an innovative hybrid engine in 2022, and it has sold over fifty thousand units worldwide since its commercial release. (La empresa de ingeniería desarrolló un motor híbrido innovador en 2022, y ha vendido más de cincuenta mil unidades en todo el mundo desde su lanzamiento comercial).",
            "I already spoke to the department supervisor about our funding request, and he approved our laboratory research budget this morning. (Ya hablé con el supervisor del departamento sobre nuestra solicitud de financiamiento, y aprobó nuestro presupuesto de investigación de laboratorio esta mañana).",
            "Did you hear the breaking news on the radio just now? A severe weather warning was issued for the entire southern California coast. (¿Escuchaste las noticias de última hora en la radio justo ahora? Se emitió una advertencia de clima severo para toda la costa del sur de California).",
            "She graduated from Stanford University three years ago and has worked as a senior software consultant in Silicon Valley ever since. (Ella se graduó de la Universidad de Stanford hace tres años y ha trabajado como consultora de software sénior en Silicon Valley desde entonces)."
        ],
        [
            "The ancient cathedral suffered extensive architectural damage during the Second World War, but craftsmen have meticulously restored its stone facades. (La antigua catedral sufrió extensos daños arquitectónicos durante la Segunda Guerra Mundial, pero los artesanos han restaurado meticulosamente sus fachadas de piedra).",
            "I have already reviewed the confidential legal documents that the solicitor delivered to our London office yesterday evening. (Ya he revisado los documentos legales confidenciales que el abogado entregó a nuestra oficina de Londres ayer por la tarde).",
            "Have you spoken to the headmaster yet regarding the educational field trip scheduled for next term? (¿Has hablado con el director ya respecto a la excursión educativa programada para el próximo trimestre?).",
            "Charles Dickens wrote numerous Victorian masterpieces in London, and his historical literary works have influenced generations of global writers. (Charles Dickens escribió numerosas obras maestras victorianas en Londres, y sus obras literarias históricas han influido en generaciones de escritores globales)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Did you eat lunch yet, Jessica? I just grabbed a sandwich from the campus deli.", "translation": "¿Almorzaste ya, Jessica? Acabo de comprar un sándwich de la tienda de delicatessen del campus."},
            {"speaker": "Jessica (UK)", "text": "Yes, I have already had a warm vegetable soup at the student refectory, thank you! Have you seen David today?", "translation": "Sí, ya he tomado una sopa de verduras caliente en el comedor estudiantil, ¡gracias! ¿Has visto a David hoy?"},
            {"speaker": "Austin (US)", "text": "I saw him about an hour ago in the computer lab. He was printing his final coursework essay.", "translation": "Lo vi hace como una hora en el laboratorio de computación. Estaba imprimiendo su ensayo final de curso."},
            {"speaker": "Jessica (UK)", "text": "Brilliant. He has worked exceptionally hard on that project all week. When did he submit it?", "translation": "Estupendo. Él ha trabajado excepcionalmente duro en ese proyecto toda la semana. ¿Cuándo lo entregó?"},
            {"speaker": "Austin (US)", "text": "He submitted it online at ten o'clock sharp. He was so relieved that he immediately went home to rest.", "translation": "Lo entregó en línea a las diez en punto. Estaba tan aliviado que se fue inmediatamente a casa a descansar."},
            {"speaker": "Jessica (UK)", "text": "That is wonderful news. Hard work always deserves a well-earned rest.", "translation": "Esa es una noticia maravillosa. El trabajo duro siempre merece un descanso bien ganado."}
        ],
        [
            "Usar Present Perfect con la palabra 'when': formular 'When have you arrived?'. Las preguntas con When indagan por un momento puntual pretérito y exigen Past Simple: 'When did you arrive?'.",
            "Usar Present Perfect para personas que ya fallecieron: decir 'Shakespeare has written Hamlet'. Debe usarse Past Simple: 'Shakespeare wrote Hamlet'.",
            "Usar Past Simple cuando el resultado afecta el presente sin especificar fecha: decir 'I broke my leg yesterday, so today I can't walk' (correcto) vs. 'I broke my leg, so I can't walk' (es más idiomático 'I have broken my leg').",
            "Calificar erróneamente de incorrecto el uso americano de 'I already did it': reconocer que es una variación diatópica estándar legítima en American English.",
            "Mezclar tiempos en cláusulas coordinadas: decir 'He has arrived yesterday and bought a car'. Si hay una fecha cerrada, ambos verbos van en Past Simple: 'He arrived yesterday and bought a car'."
        ],
        [
            "La Prueba de la Tumba: ¿La persona sobre la que hablas está viva o fallecida? Si está viva y puede seguir haciendo esa acción -> PRESENT PERFECT ('She has written 5 books'). Si está fallecida -> PAST SIMPLE ('He wrote 5 books').",
            "La Regla de la Ventana Cerrada: Si el tiempo verbal tiene candado (yesterday, last week, ago, in 1999) -> PAST SIMPLE. Si la ventana sigue abierta hacia el presente -> PRESENT PERFECT.",
            "Pasaporte Lingüístico: En el Reino Unido di con elegancia: 'I have just had lunch'. En Estados Unidos di con soltura: 'I just had lunch'. Ambas son impecables en su territorio."
        ],
        "https://www.englisch-hilfen.de/en/grammar/sim_past_pres_perf.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 05: Semántica & Participios: HAVE BEEN TO vs. HAVE GONE TO
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_05",
        "Clase 05: HAVE BEEN TO vs. HAVE GONE TO",
        "B1",
        "Semántica & Participios",
        "El presente perfecto del verbo de desplazamiento go bifurca su significado según el participio seleccionado: have been to denota un viaje de ida y vuelta ya concluido con retorno al origen, mientras que have gone to expresa un viaje en curso donde el sujeto permanece en el destino.",
        "Viaje de Ida y Vuelta Concluido (Experiencia acumulada con retorno): Sujeto + have/has BEEN TO + Lugar: She has been to Paris (fue a París, conoció la ciudad y ya está de regreso aquí entre nosotros). Viaje en Curso / Sujeto en el Destino: Sujeto + have/has GONE TO + Lugar: She has gone to Paris (salió hacia París y actualmente está allá o en trayecto; no está aquí presente).",
        "La distinción semántica y aspectual entre 'HAVE BEEN TO' y 'HAVE GONE TO' es una de las sutilezas más elegantes y evaluadas en los exámenes internacionales de nivel B1. En la gramática de la lengua española, solemos utilizar el verbo 'ir' de manera genérica para ambas realidades ('María ha ido a París'), dejando que el contexto pragmático aclare si María ya regresó a casa o si todavía se encuentra disfrutando de sus vacaciones en Francia. En el idioma inglés, sin embargo, esta ambigüedad es inadmisible y se resuelve mediante la alternancia morfológica entre dos participios pasados distintos: 'BEEN' y 'GONE'. Cuando empleamos 'HAVE / HAS BEEN TO', el participio del verbo to be actúa con un valor dinámico perfectivo de 'viaje completo de ida y retorno' (a round trip). Implica que la persona viajó al destino, vivió la experiencia en el lugar y posteriormente emprendió el viaje de vuelta, encontrándose físicamente de regreso en el punto de partida en el instante mismo de la enunciación ('I have been to Italy three times in my life' = he visitado Italia tres veces y aquí estoy contándotelo). Por el contrario, cuando empleamos 'HAVE / HAS GONE TO', el participio de go denota una trayectoria unidireccional no completada en su retorno (an ongoing journey). Significa que el sujeto partió hacia el destino y todavía se encuentra en el lugar de llegada o en camino hacia allá, no estando disponible ni presente con nosotros en la conversación actual ('Where is Michael? - He has gone to the supermarket; he will be back in twenty minutes'). Por esta razón física evidente, es un absurdo lógico y una imposibilidad pragmática decir en primera persona en presente 'I have gone to Paris' si le estás hablando cara a cara a alguien en Londres o San Salvador; dado que estás presente frente a tu interlocutor, la única opción admisible es 'I have been to Paris'.",
        [
            "HAVE BEEN TO (Ida y Vuelta): Viaje consumado con retorno físico al punto de partida: 'She has been to Japan twice' (conoce Japón y ahora está de vuelta en su casa).",
            "HAVE GONE TO (Ida sin retorno aún): Sujeto ausente; permanece en el destino o en tránsito: 'Carlos has gone to the bank' (está en el banco ahora mismo; no está en la oficina).",
            "Prohibición de primera persona presente con GONE: Decirle a alguien en persona 'I have gone to Spain' es agramatical y absurdo (no puedes estar en España si estás hablando cara a cara aquí). Debe decirse 'I have been to Spain'.",
            "Preposición obligatoria TO tras BEEN y GONE: Tanto been como gone exigen la preposición direccional 'TO' ante sustantivos de lugar: 'She has been TO France', 'He has gone TO the hospital'.",
            "Excepción de la palabra HOME: La palabra 'home' no admite preposición: 'He has gone HOME', 'She has been HOME all afternoon'.",
            "Pregunta estándar sobre experiencia con EVER: Siempre se formula con BEEN TO: 'Have you ever been to New York?' (¿Has estado alguna vez en Nueva York?).",
            "Uso en tercera persona de ausencia: 'Can I speak to Mrs. Davis? - I am afraid not; she has gone to lunch'.",
            "Contraste con HAVE BEEN IN: 'Have been TO' implica visita o viaje ('I have been to London'). 'Have been IN' denota residencia o permanencia continuada ('I have been IN London for ten years')."
        ],
        [
            "Where is Dr. Martinez this morning? He has gone to an international biomedical conference in Boston and will return on Friday. (¿Dónde está el Dr. Martínez esta mañana? Ha ido a una conferencia biomédica internacional en Boston y regresará el viernes).",
            "Our university software engineering professor has been to Silicon Valley several times to collaborate with leading artificial intelligence startups. (Nuestra profesora de ingeniería de software universitaria ha estado en Silicon Valley varias veces para colaborar con empresas emergentes líderes de inteligencia artificial).",
            "My sister has gone to the grocery supermarket to buy fresh vegetables for dinner, so she will be back in half an hour. (Mi hermana ha ido al supermercado de comestibles a comprar vegetales frescos para la cena, así que regresará en media hora).",
            "Have you ever been to the Grand Canyon in Arizona? Yes, I have been there twice and the geological landscape is absolutely breathtaking. (¿Has estado alguna vez en el Gran Cañón en Arizona? Sí, he estado allí dos veces y el paisaje geológico es absolutamente impresionante)."
        ],
        [
            "The headmaster is not in his administrative office at present; he has gone to London to attend a ministerial educational meeting. (El director no está en su oficina administrativa actualmente; ha ido a Londres para asistir a una reunión educativa ministerial).",
            "We have been to the Scottish Highlands three times during our autumn holidays, and we always stay in a charming traditional cottage. (Hemos estado en las Tierras Altas de Escocia tres veces durante nuestras vacaciones de otoño, y siempre nos alojamos en una encantadora casa de campo tradicional).",
            "I rang David's mobile phone, but his flatmate informed me that he has gone to the library to study for his law examinations. (Llamé al teléfono móvil de David, pero su compañero de piso me informó que ha ido a la biblioteca a estudiar para sus exámenes de derecho).",
            "Have you ever been to the ancient Roman baths in Somerset? It is one of the most remarkable historical monuments in Great Britain. (¿Has estado alguna vez en las antiguas termas romanas en Somerset? Es uno de los monumentos históricos más notables de Gran Bretaña)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Hello Sarah! Is Michael in the university study hall today? I need to return his laboratory notebook.", "translation": "¡Hola Sarah! ¿Está Michael en la sala de estudio universitaria hoy? Necesito devolverle su cuaderno de laboratorio."},
            {"speaker": "Sarah (UK)", "text": "No, he isn't here. He has gone to the railway station to meet his brother, who is visiting from Manchester for the weekend.", "translation": "No, no está aquí. Ha ido a la estación de trenes a recibir a su hermano, quien viene de visita desde Manchester por el fin de semana."},
            {"speaker": "Austin (US)", "text": "That makes sense. I thought he was still on campus. Have you ever been to Manchester yourself?", "translation": "Eso tiene sentido. Pensé que todavía estaba en el campus. ¿Has estado tú misma alguna vez en Manchester?"},
            {"speaker": "Sarah (UK)", "text": "Yes, I have been to Manchester several times. It has a fantastic cultural scene and brilliant science museums.", "translation": "Sí, he estado en Manchester varias veces. Tiene una escena cultural fantástica y brillantes museos de ciencias."},
            {"speaker": "Austin (US)", "text": "I would love to visit one day. I have only been to London and Cambridge so far during my study abroad semester.", "translation": "Me encantaría visitarla algún día. Solo he estado en Londres y Cambridge hasta ahora durante mi semestre de estudios en el extranjero."},
            {"speaker": "Sarah (UK)", "text": "You definitely should visit. Michael will be back on campus tomorrow morning, so you can catch him then.", "translation": "Definitivamente deberías visitarla. Michael estará de regreso en el campus mañana por la mañana, así que podrás verlo entonces."}
        ],
        [
            "Decir 'I have gone to Paris' cuando estás hablando en persona frente a tu interlocutor. La presencia física impone el viaje de vuelta: 'I have been to Paris'.",
            "Decir 'Where is John? - He has been to the store' cuando John sigue en la tienda y no ha vuelto. Si sigue allá, debe ser 'He has gone to the store'.",
            "Omitir la preposición 'to': decir 'I have been Paris'. La frase exige 'to': 'I have been to Paris'.",
            "Poner preposición con 'home': decir 'He has gone to home'. Con home se omite la preposición: 'He has gone home'.",
            "Confundir 'have been in' con 'have been to': 'have been to' es un viaje de visita; 'have been in' es residencia continuada durante un período."
        ],
        [
            "La Prueba de la Presencia Física: ¿La persona está aquí delante de ti? Si la respuesta es SÍ -> usa BEEN TO (fue y volvió). ¿La persona está ausente y sigue allá en el lugar? Si la respuesta es SÍ -> usa GONE TO (se fue y no ha vuelto).",
            "El Billete de Avión: BEEN TO = Billete de Ida y Vuelta (Round trip). GONE TO = Billete de Solo Ida (One-way ticket).",
            "Pregunta Invariable: El 100% de las veces que preguntes '¿Has ido alguna vez a...?', la pregunta en inglés se formula con BEEN TO: 'Have you ever BEEN to...?'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/been_gone.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 06: Present Perfect Continuous: Duración y Resultados Visibles
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_06",
        "Clase 06: Present Perfect Continuous: Duración y Resultados Visibles",
        "B1",
        "Tiempos Verbales Perfectos Continuos",
        "El presente perfecto continuo fusiona la conexión temporal del aspecto perfecto con el dinamismo durativo del aspecto continuo, focalizando la duración ininterrumpida de una actividad o las evidencias físicas presentes resultantes de un esfuerzo reciente.",
        "Afirmativo: Sujeto + have/has + BEEN + Verbo con sufijo -ING + Complemento: I have been studying for three hours / She has been working all day. Negativo: haven't/hasn't been + Verbo-ING. Pregunta: Have/Has + Sujeto + been + Verbo-ING? Respuestas cortas: Yes, I have / No, she hasn't.",
        "El Present Perfect Continuous (o Present Perfect Progressive) es una de las construcciones más sofisticadas y expresivas de la gramática inglesa de nivel B1. Surge de la amalgama sintáctica de dos aspectos verbales: el aspecto perfecto (have/has been), que ancla el origen del proceso en el pasado con ramificaciones hacia el presente, y el aspecto continuo (verbo principal con sufijo '-ing'), que resalta la naturaleza activa, dinámica, fluida y temporalmente extendida de la acción. Esta estructura desempeña dos funciones pragmáticas capitales: primera función: poner el foco de atención deliberado en la DURACIÓN CONTINUADA de una actividad que comenzó en el pasado y que todavía se está ejecutando activamente en este preciso instante ('I have been waiting for the bus for forty minutes', lo que enfatiza el cansancio o la molestia por la larga espera). Segunda función: explicar la EVIDENCIA FÍSICA O VISIBLE en el presente provocada por una actividad que acaba de detenerse hace escasos instantes ('Look at the wet ground! It has been raining'; 'Why are your hands covered in grease? - I have been repairing my bicycle'). En este punto radica la distinción crucial con el Present Perfect Simple: el Present Perfect Simple enfatiza el RESULTADO CONCLUIDO y la cantidad consumada ('I have painted the living room' = la sala ya está terminada de pintar; 'I have written three letters' = hay tres cartas listas sobre la mesa). En marcado contraste, el Present Perfect Continuous enfatiza el PROCESO MISMO Y SU DURACIÓN, sin pronunciarse sobre si la obra está concluida ('I have been painting the living room' = la sala puede estar a medias, pero mi ropa está manchada de pintura y he estado ocupado en la tarea). Al igual que en todos los tiempos continuos, los verbos de estado (know, believe, understand, want) prohíben categóricamente el Present Perfect Continuous, debiendo usarse en su lugar el Present Perfect Simple ('I have known him for years', nunca 'I have been knowing').",
        [
            "Estructura compuesta de tres elementos: Sujeto + HAVE/HAS + BEEN + Verbo-ING: 'She has been working in the laboratory all morning'.",
            "Foco primordial en la DURACIÓN: Destaca la extensión temporal con FOR, SINCE o ALL DAY: 'We have been studying for four hours', 'He has been playing the violin since morning'.",
            "Explicación de EVIDENCIA PRESENTE VISIBLE: Explica por qué alguien está jadeando, sudando, sucio o cansado: 'I am breathless because I have been running', 'Her eyes are red because she has been crying'.",
            "Contraste con Present Perfect Simple (Resultado vs. Proceso): Present Perfect Simple = ¿Cuánto / Cuántos se han terminado? ('I have written three essays'). Present Perfect Continuous = ¿Cuánto tiempo ha durado el proceso? ('I have been writing essays all afternoon').",
            "Negación canónica: Sujeto + haven't / hasn't been + Verbo-ING: 'I haven't been sleeping well lately due to academic stress'.",
            "Interrogación por inversión de HAVE/HAS: Have/Has + Sujeto + been + Verbo-ING?: 'How long have you been learning English? - For three years.'",
            "Prohibición estricta de Verbos Estáticos: Los verbos de cognición, emoción o posesión jamás usan esta forma: 'I have liked classical music for years' (correcto), 'I have been liking' (inadmisible).",
            "Uso con LATELY y RECENTLY: Expresa hábitos temporales recurrentes en las últimas semanas: 'He has been working out at the gym lately'."
        ],
        [
            "The environmental scientists have been analyzing ocean water samples for three consecutive days to measure plastic contamination levels. (Los científicos ambientales han estado analizando muestras de agua oceánica durante tres días consecutivos para medir los niveles de contaminación por plástico).",
            "Why are your clothes covered in engine oil? Because I have been repairing the electrical generator in the engineering workshop. (¿Por qué tu ropa está cubierta de aceite de motor? Porque he estado reparando el generador eléctrico en el taller de ingeniería).",
            "She has been preparing her doctoral research defense all month, and she feels exceptionally confident about tomorrow's presentation. (Ella ha estado preparando su defensa de investigación doctoral todo el mes, y se siente excepcionalmente segura respecto a la presentación de mañana).",
            "How long has the municipal transport authority been developing the new underground railway extension in central Los Angeles? (¿Cuánto tiempo ha estado la autoridad municipal de transporte desarrollando la nueva extensión ferroviaria subterránea en el centro de Los Ángeles?)."
        ],
        [
            "The ground is thoroughly soaked and the gutters are overflowing because it has been raining relentlessly across London all night. (El suelo está completamente empapado y los canalones están desbordados porque ha estado lloviendo sin cesar en todo Londres toda la noche).",
            "He has been lecturing in constitutional law at Cambridge University since he completed his judicial fellowship fifteen years ago. (Él ha estado dando conferencias de derecho constitucional en la Universidad de Cambridge desde que completó su beca judicial hace quince años).",
            "We have been negotiating the terms of the international trade agreement with European delegates for more than forty-eight hours. (Hemos estado negociando los términos del acuerdo comercial internacional con delegados europeos durante más de cuarenta y ocho horas).",
            "She is feeling rather fatigued this evening because she has been marking first-year examination scripts since early morning. (Ella se siente bastante fatigada esta tarde porque ha estado calificando exámenes de primer año desde temprano en la mañana)."
        ],
        [
            {"speaker": "Austin (US)", "text": "You look completely exhausted, Jessica! What have you been doing all afternoon?", "translation": "¡Te ves completamente agotada, Jessica! ¿Qué has estado haciendo toda la tarde?"},
            {"speaker": "Jessica (UK)", "text": "I have been cleaning and reorganizing the chemistry laboratory with my research group. We have been scrubbing glassware for hours!", "translation": "He estado limpiando y reorganizando el laboratorio de química con mi grupo de investigación. ¡Hemos estado fregando material de vidrio durante horas!"},
            {"speaker": "Austin (US)", "text": "That sounds like grueling physical work! Have you been working on your research thesis as well?", "translation": "¡Eso suena como un trabajo físico agotador! ¿Has estado trabajando en tu tesis de investigación también?"},
            {"speaker": "Jessica (UK)", "text": "I have been writing my methodology chapter lately, but today I simply couldn't find a single moment of quiet.", "translation": "He estado escribiendo mi capítulo de metodología últimamente, pero hoy simplemente no pude encontrar un solo momento de tranquilidad."},
            {"speaker": "Austin (US)", "text": "Come on, let's take a break. I have been studying in the library for three hours, so a walk in the park will do us good.", "translation": "Vamos, tomemos un descanso. Yo he estado estudiando en la biblioteca durante tres horas, así que una caminata en el parque nos hará bien."},
            {"speaker": "Jessica (UK)", "text": "Brilliant idea, Austin. A breath of fresh air is precisely what I need right now.", "translation": "Brillante idea, Austin. Una bocanada de aire fresco es precisamente lo que necesito ahora mismo."}
        ],
        [
            "Usar verbos estáticos en continuo: decir 'I have been knowing him for ten years'. Debe usarse Present Perfect Simple: 'I have known him for ten years'.",
            "Omitir 'been': decir 'I have working all day'. La estructura exige tres piezas: 'I have been working all day'.",
            "Usar Present Perfect Continuous para decir cuántas unidades terminaste: decir 'I have been writing three letters'. Con cantidades concluidas se usa Simple: 'I have written three letters'.",
            "Confundir la evidencia presente: no percatarse de que si el suelo está mojado, la acción de llover acaba de cesar o continúa, por lo que rige continuo ('It has been raining').",
            "Olvidar usar 'has' con tercera persona: decir 'She have been studying'. Debe ser 'She has been studying'."
        ],
        [
            "La Fórmula del Tren de Tres Vagones: Vagón 1 = [HAVE / HAS] + Vagón 2 = [BEEN] + Vagón 3 = [VERBO-ING]. ¡Si falta uno de los tres vagones, la oración queda incompleta!",
            "Regla del Detective (Evidencia Presente): Si ves sudor en la frente, manos sucias de grasa o suelo empapado de agua, pregúntate como un detective: ¿Qué actividad prolongada provocó esto? -> PRESENT PERFECT CONTINUOUS ('He has been running').",
            "Simple para Contar Objetos vs. Continuo para Contar Horas: ¿Cuántos libros leíste? -> I have read 3 books (Simple). ¿Cuántas horas pasaste leyendo? -> I have been reading for 5 hours (Continuo)."
        ],
        "https://www.englisch-hilfen.de/en/grammar/pres_perf_pro.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 07: Condicional Cero (Zero Conditional): Leyes Naturales y Hechos
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_07",
        "Clase 07: Condicional Cero (Zero Conditional): Leyes Naturales y Hechos",
        "B1",
        "Oraciones Condicionales",
        "El condicional cero articula relaciones de causa y efecto universales, leyes científicas, verdades empíricas irrefutables e instrucciones imperativas, estructurándose con el presente simple en ambas cláusulas.",
        "Cláusula de Condición (If-clause): IF / WHEN + Present Simple. Cláusula de Resultado (Main clause): Present Simple / Imperativo. Estructura canónica: If you heat water to 100 degrees Celsius, it boils / When ice melts, it becomes water. Orden inverso: Water boils if you heat it to 100 degrees Celsius (sin coma).",
        "El sistema de oraciones condicionales en el idioma inglés es una de las construcciones lógicas más elegantes y rigurosas de la sintaxis. El Condicional Cero (Zero Conditional) se sitúa en la base fáctica de esta arquitectura, operando en el plano de la certeza objetiva absoluta al 100%. A diferencia de los condicionales hipotéticos o imaginarios, el condicional cero no especula sobre posibilidades futuras ni fantasea con mundos irreales; su propósito exclusivo es formular verdades científicas irrefutables, leyes de la física y la química, axiomas universales, hechos fácticos permanentes y reglas de causa-efecto que se cumplen invariablemente cada vez que se satisface la condición previa. La arquitectura sintáctica es extraordinariamente simétrica y equilibrada: ambas cláusulas (tanto la cláusula condicional introducida por 'if', como la cláusula principal de resultado) se conjugan rigurosamente en PRESENT SIMPLE ('If you freeze water, it turns into ice'; 'If people do not eat, they die'). Debido a esta certeza científica invariable, la conjunción condicional 'IF' puede sustituirse de forma intercambiable por 'WHEN' sin alterar en absoluto el significado ni la validez de la proposición ('When you heat water, it boils'). En el plano de las instrucciones técnicas o pautas de seguridad industrial, el condicional cero suele adoptar una variante directiva donde la cláusula de resultado se formula en modo imperativo ('If the fire alarm sounds, evacuate the building immediately'). Las reglas de puntuación dictan que si la cláusula con 'If' abre la oración, se debe colocar una coma obligatoria para separar las cláusulas; en cambio, si la cláusula principal precede a la condición, la coma se suprime por completo ('Plants die if they don't get sunlight').",
        [
            "Estructura simétrica de tiempos: [IF + Present Simple], [Present Simple]: 'If you heat ice, it melts'.",
            "Certeza científica al 100%: Solo se aplica a leyes de la naturaleza, hechos biológicos o verdades lógicas universales: 'If iron gets wet, it rusts'.",
            "Intercambiabilidad de IF y WHEN: En el condicional cero, 'if' y 'when' son sinónimos perfectos: 'When you press this button, the machine starts'.",
            "Variante con modo Imperativo en la cláusula principal: Muy común para directrices, advertencias y manuales de instrucciones: 'If you feel dizzy, consult a doctor immediately'.",
            "Regla de la coma sintáctica: Si 'If' abre la cláusula -> lleva coma medial: 'If it rains, the grass gets wet'. Si 'If' va en medio -> sin coma: 'The grass gets wet if it rains'.",
            "Concordancia estricta de 3ª persona singular: Recuerda aplicar la 's/-es' en el verbo de ambas cláusulas si el sujeto es he, she o it: 'If a baby is hungry, it cries'.",
            "Prohibición absoluta de WILL en la condición: En inglés estándar, la cláusula condicional introducida por 'if' prohíbe el uso de will: 'If you heat water' (correcto), 'If you will heat water' (agramatical).",
            "Uso para hábitos personales fijos: Describe reacciones automáticas del individuo: 'If I drink coffee late at night, I cannot sleep'."
        ],
        [
            "If atmospheric temperature drops below zero degrees Celsius, water on the roads freezes and creates hazardous driving conditions. (Si la temperatura atmosférica cae por debajo de los cero grados Celsius, el agua en las carreteras se congela y crea condiciones de conducción peligrosas).",
            "When green plants receive adequate sunlight and carbon dioxide, they produce glucose and oxygen through natural photosynthesis. (Cuando las plantas verdes reciben luz solar adecuada y dióxido de carbono, producen glucosa y oxígeno a través de la fotosíntesis natural).",
            "If an emergency occurs inside the chemical engineering laboratory, press the red safety button to activate the ventilation system. (Si ocurre una emergencia dentro del laboratorio de ingeniería química, presione el botón rojo de seguridad para activar el sistema de ventilación).",
            "Electronic components overheat and malfunction if internal cooling fans do not dissipate thermal energy effectively. (Los componentes electrónicos se sobrecalientan y fallan si los ventiladores internos de enfriamiento no disipan la energía térmica de manera efectiva)."
        ],
        [
            "If you boil pure water at sea level atmospheric pressure, it reaches its boiling point and turns into steam at one hundred degrees Celsius. (Si hierves agua pura a la presión atmosférica del nivel del mar, alcanza su punto de ebullición y se transforma en vapor a cien grados Celsius).",
            "When the national railway network experiences severe winter weather, commuter trains inevitably face scheduled delays across northern England. (Cuando la red ferroviaria nacional experimenta clima invernal severo, los trenes de cercanías inevitablemente enfrentan retrasos programados en todo el norte de Inglaterra).",
            "If pupils do not achieve the minimum required academic attendance, they are not permitted to sit for the final examinations. (Si los alumnos no alcanzan la asistencia académica mínima requerida, no se les permite presentarse a los exámenes finales).",
            "Metal expands when you heat it to high temperatures, and it contracts naturally when it cools down in the air. (El metal se expande cuando se calienta a altas temperaturas, y se contrae naturalmente cuando se enfría en el aire)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Can you explain the basic principle of this physics experiment to me, Jessica? How does the thermal sensor work?", "translation": "¿Puedes explicarme el principio básico de este experimento de física, Jessica? ¿Cómo funciona el sensor térmico?"},
            {"speaker": "Jessica (UK)", "text": "It is quite simple. When the liquid expands due to rising temperature, it completes an electrical circuit.", "translation": "Es bastante simple. Cuando el líquido se expande debido al aumento de temperatura, completa un circuito eléctrico."},
            {"speaker": "Austin (US)", "text": "And what happens if the circuit closes completely?", "translation": "¿Y qué sucede si el circuito se cierra por completo?"},
            {"speaker": "Jessica (UK)", "text": "If the circuit closes, an automated cooling fan switches on immediately to regulate the chamber.", "translation": "Si el circuito se cierra, un ventilador de enfriamiento automatizado se enciende inmediatamente para regular la cámara."},
            {"speaker": "Austin (US)", "text": "That makes complete sense! So if the temperature drops back down, the fan turns off automatically?", "translation": "¡Eso tiene total sentido! Entonces, ¿si la temperatura vuelve a bajar, el ventilador se apaga automáticamente?"},
            {"speaker": "Jessica (UK)", "text": "Precisely. The entire feedback loop operates on zero conditional cause and effect.", "translation": "Precisamente. Todo el bucle de retroalimentación opera sobre causa y efecto de condicional cero."}
        ],
        [
            "Poner 'will' en la cláusula con if: decir 'If it will rain, the ground gets wet'. La cláusula de condición va en presente simple: 'If it rains, the ground gets wet'.",
            "Olvidar la 's' de tercera persona en alguna de las cláusulas: decir 'If water freeze, it expand'. Debe ser 'If water freezes, it expands'.",
            "Confundir el condicional cero (hecho universal) con el primer condicional (situación futura específica): decir 'If you heat water, it will boil' (el primer condicional predice un evento futuro; para una ley física universal se prefiere 'it boils').",
            "Omitir la coma cuando la oración comienza con 'if': escribir 'If you heat ice it melts' sin la coma separadora obligatoria.",
            "Usar pasado en la condición para un hecho científico permanente: decir 'If you heated water, it boils'. Ambas cláusulas deben coordinarse en presente simple."
        ],
        [
            "La Ecuación de la Física: [IF + Presente Simple] = [Presente Simple]. Es una fórmula científica matemática: si A ocurre, B ocurre siempre al 100%.",
            "La Prueba de la Palabra WHEN: Si puedes cambiar 'IF' por 'WHEN' y la oración sigue sonando absolutamente natural y cierta ('When you freeze water, it becomes ice'), ¡estás ante un Condicional Cero!",
            "Regla del Semáforo de WILL: La palabra 'IF' es una señal de stop para 'WILL': jamás permitas que WILL se suba al mismo auto que IF."
        ],
        "https://www.englisch-hilfen.de/en/grammar/conditional_0.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 08: Primer Condicional (First Conditional): Situaciones Reales
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_08",
        "Clase 08: Primer Condicional (First Conditional): Situaciones Reales Futuras",
        "B1",
        "Oraciones Condicionales",
        "El primer condicional proyecta situaciones reales, verosímiles y altamente probables en el futuro supeditadas al cumplimiento de una condición presente, articulando promesas, advertencias, negociaciones y planes.",
        "Cláusula de Condición: IF + Sujeto + Present Simple (nunca will). Cláusula de Resultado Futuro: Sujeto + WILL ('ll) / WON'T / Modales (can, may) + Verbo en forma base desnuda. Estructura: If it rains tomorrow, we will stay at home / She will pass the exam if she studies hard. Conjunción condicional negativa UNLESS (a menos que = if not): Unless you study, you won't pass.",
        "El Primer Condicional (First Conditional o Real Conditional) traslada el razonamiento condicional desde las leyes universales atemporales hacia el terreno del futuro contingente, plausible y altamente probable. A diferencia del condicional cero, que enuncia verdades permanentes, el primer condicional evalúa una situación específica y concreta en el porvenir que tiene una posibilidad real y tangible de concretarse, siempre y cuando se satisfaga la condición previa ('If I have time this evening, I will call you'). La arquitectura sintáctica del primer condicional presenta una asimetría temporal de enorme importancia que suele desconcertar a los hispanohablantes: en español, la condición futura se formula mediante el modo subjuntivo presente ('Si llueve mañana...', 'Si tengo dinero...'), pero el inglés carece de subjuntivo morfológico en estas cláusulas. La regla de oro sagrada del inglés impone que la cláusula introducida por 'IF' debe construirse en PRESENT SIMPLE, mientras que la cláusula principal de resultado proyecta la futuridad mediante el auxiliar modal 'WILL' seguido del infinitivo desnudo: [IF + Present Simple], [WILL + Verbo base]. Colocar 'will' dentro de la cláusula con 'if' (decir 'If it will rain tomorrow, I will stay home') es una de las faltas más penalizadas en la gramática anglófona. En la cláusula principal, 'will' puede alternar con otros modales según el grado de certeza deseado: 'can' (habilidad o permiso futuro: 'If you finish early, you can leave'), 'may / might' (posibilidad probabilística reducida: 'If it rains, we might cancel the match') o un imperativo directo ('If you see Carlos, tell him to call me'). Asimismo, en este nivel se introduce la conjunción condicional negativa 'UNLESS' (a menos que / a no ser que), la cual equivale semánticamente a 'if... not' y rige siempre un verbo en modo afirmativo ('Unless you study hard, you won't pass the exam' = If you do not study hard, you won't pass).",
        [
            "Estructura canónica del First Conditional: [IF + Present Simple], [WILL + Verbo Base]: 'If you work hard, you will succeed'.",
            "Prohibición estricta de WILL en la cláusula con IF: 'If it rains tomorrow' (correcto), 'If it will rain tomorrow' (inadmisible).",
            "Alternancia de modales en el resultado: Se pueden usar can, may, might o should en vez de will: 'If we hurry, we CAN catch the bus', 'If you feel tired, you SHOULD rest'.",
            "Alternancia con modo Imperativo: Para instrucciones dependientes: 'If you arrive before me, wait at the entrance'.",
            "Conjunción UNLESS (= IF NOT): Significa 'a menos que' y va seguida de verbo afirmativo: 'Unless you leave now, you will miss the train' (= If you don't leave now...).",
            "Regla de la coma sintáctica: Cláusula con IF al inicio lleva coma; si la cláusula con IF va al final, se omite la coma: 'I will call you if I hear any news'.",
            "Uso pragmático para advertencias y amenazas: 'If you touch that wire, you will get an electric shock'.",
            "Uso pragmático para promesas y negociaciones: 'If you help me with my math homework, I will help you with English'."
        ],
        [
            "If the government approves the research funding next month, our university will build a cutting-edge artificial intelligence facility. (Si el gobierno aprueba los fondos de investigación el próximo mes, nuestra universidad construirá una instalación de inteligencia artificial de vanguardia).",
            "She will secure an excellent engineering position in Silicon Valley if she maintains her outstanding academic grade point average. (Ella asegurará un puesto excelente de ingeniería en Silicon Valley si mantiene su promedio sobresaliente de calificaciones académicas).",
            "Unless we reduce global carbon emissions drastically over the next decade, international climate models predict severe ecological crises. (A menos que reduzcamos drásticamente las emisiones globales de carbono durante la próxima década, los modelos climáticos internacionales predicen crisis ecológicas severas).",
            "If you don't submit your undergraduate scholarship application before midnight, the online portal will automatically reject your submission. (Si no presentas tu solicitud de beca de pregrado antes de la medianoche, el portal en línea rechazará automáticamente tu envío)."
        ],
        [
            "If the weather forecast is favorable this weekend, our hiking society will organize an excursion to the Scottish Highlands. (Si el pronóstico del tiempo es favorable este fin de semana, nuestra sociedad de senderismo organizará una excursión a las Tierras Altas de Escocia).",
            "We will miss the morning express train to London Euston unless we leave for the railway station immediately. (Perderemos el tren expreso matutino hacia Londres Euston a menos que salgamos hacia la estación de trenes inmediatamente).",
            "The headmaster will award special academic merits at the assembly if the upper-sixth form pupils achieve top examination marks. (El director otorgará méritos académicos especiales en la asamblea si los alumnos del último año de secundaria logran calificaciones máximas en los exámenes).",
            "If you visit the British Museum during your stay in London, you will discover some of the most extraordinary ancient antiquities in the world. (Si visitas el Museo Británico durante tu estancia en Londres, descubrirás algunas de las antigüedades más extraordinarias del mundo)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Are you going to attend the career fair on Friday, Jessica? If you go, I will join you.", "translation": "¿Vas a asistir a la feria de carreras el viernes, Jessica? Si vas, me uniré a ti."},
            {"speaker": "Jessica (UK)", "text": "Yes, I am definitely going! If we arrive early in the morning, we will avoid the longest queues at the company booths.", "translation": "¡Sí, definitivamente voy a ir! Si llegamos temprano en la mañana, evitaremos las filas más largas en los puestos de las empresas."},
            {"speaker": "Austin (US)", "text": "That is a great idea. What will you do if they offer you an interview on the spot?", "translation": "Esa es una gran idea. ¿Qué harás si te ofrecen una entrevista en el acto?"},
            {"speaker": "Jessica (UK)", "text": "If they invite me for an interview, I will present my updated portfolio and explain my research experience.", "translation": "Si me invitan a una entrevista, presentaré mi portafolio actualizado y explicaré mi experiencia de investigación."},
            {"speaker": "Austin (US)", "text": "Awesome. Unless I review my resume tonight, I won't have it printed in time for Friday.", "translation": "Genial. A menos que revise mi currículum esta noche, no lo tendré impreso a tiempo para el viernes."},
            {"speaker": "Jessica (UK)", "text": "Make sure you do it then! Diligent preparation will guarantee you make a memorable impression.", "translation": "¡Asegúrate de hacerlo entonces! La preparación diligente garantizará que dejes una impresión memorable."}
        ],
        [
            "Poner 'will' en la cláusula con if: decir 'If it will rain, I will stay home'. Es el error más frecuente y penalizado; la condición debe usar presente simple: 'If it rains, I will stay home'.",
            "Usar un verbo negativo tras UNLESS: decir 'Unless you don't study, you won't pass'. Como UNLESS ya es negativo (a menos que), el verbo debe ir afirmativo: 'Unless you study, you won't pass'.",
            "Olvidar la 's' de tercera persona en la condición: decir 'If she study hard, she will pass'. Debe ser 'If she studies hard, she will pass'.",
            "Omitir el sujeto en la cláusula de resultado: decir 'If you work hard, will be successful'. En inglés se requiere el sujeto explícito: 'you will be successful'.",
            "Confundir el condicional cero con el primer condicional: usar el primer condicional para una ley científica universal en vez de para una situación futura contingente."
        ],
        [
            "La Regla del Reparto de Papeles: En la obra de teatro del First Conditional, el presente se viste con 'IF' en el primer acto, y el futuro se viste con 'WILL' en el segundo acto: [IF + Presente] -> [WILL + Futuro].",
            "La Fórmula de UNLESS: Grábate esta equivalencia matemática: UNLESS = IF NOT. Decir 'Unless you leave' es exactamente igual a decir 'If you don't leave'.",
            "La Señal de Prohibido el Paso: Cada vez que tu mano intente escribir 'IF WILL', visualiza una barrera de peaje cerrada que te prohíbe el paso. ¡Nunca 'IF WILL'!"
        ],
        "https://www.englisch-hilfen.de/en/grammar/conditional_1.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 09: Segundo Condicional (Second Conditional): Hipótesis y WERE
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_09",
        "Clase 09: Segundo Condicional (Second Conditional): Hipótesis Irreales y WERE",
        "B1",
        "Oraciones Condicionales Hipotéticas",
        "El segundo condicional explora hipótesis imaginarias, situaciones contrafácticas irreales en el presente o futuro y consejos empáticos, utilizando el pasado simple en la condición y would en el resultado.",
        "Cláusula de Condición Hipotética: IF + Sujeto + Past Simple (con el uso formal prestigioso de WERE para todas las personas). Cláusula de Resultado Hipotético: Sujeto + WOULD ('d) / WOULDN'T / COULD / MIGHT + Verbo en forma base desnuda. Fórmula de consejo: If I were you, I would... Estructura canónica: If I had a million dollars, I would travel the world / If she were here, she would help us.",
        "El Segundo Condicional (Second Conditional o Unreal Conditional) eleva el pensamiento abstracto del estudiante hacia el universo de la especulación hipotética, los sueños, las fantasías lúdicas y los escenarios contrafácticos que no existen en la realidad presente o cuya probabilidad de ocurrencia futura es remota o nula. A diferencia del primer condicional (que evalúa posibilidades reales como 'Si llueve mañana'), el segundo condicional formula hipótesis contrarias a los hechos actuales: 'If I were rich, I would buy an island' (la realidad fáctica presente es que no soy rico; por tanto, comprar la isla es una mera fantasía imaginaria). La arquitectura sintáctica de este condicional opera mediante un distanciamiento temporal metafórico (backshift o pasado modal): para señalar que la situación no es real, la cláusula condicional introducida por 'IF' adopta el tiempo PAST SIMPLE, mientras que la cláusula principal de resultado emplea el auxiliar modal condicional 'WOULD' seguido del verbo base en infinitivo desnudo: [IF + Past Simple], [WOULD + Verbo base]. En este territorio surge además una de las peculiaridades gramaticales más célebres y prestigiosas de la lengua inglesa: el 'Subjuntivo en Pasado' (Past Subjunctive). En el inglés formal, académico y literario, cuando el verbo de la condición 'if' es el verbo 'to be', se emplea la forma 'WERE' para TODAS las personas gramaticales sin excepción, incluyendo la primera persona 'I' y la tercera singular 'He', 'She', 'It' ('If I WERE you', 'If he WERE here', 'If the world WERE flat'). Aunque en el habla coloquial informal se escucha frecuentemente 'If I was...', en exámenes estandarizados oficiales (TOEFL, IELTS, Cambridge) y en correspondencia formal se prescribe rigurosamente el uso de 'WERE'. En particular, la fórmula fosilizada 'IF I WERE YOU, I WOULD...' es el mecanismo por excelencia de la cortesía anglófona para dar consejos y ponerse empáticamente en el lugar del interlocutor ('If I were you, I would accept that job offer').",
        [
            "Estructura canónica del Second Conditional: [IF + Past Simple], [WOULD + Verbo Base]: 'If I won the lottery, I would buy a house'.",
            "Regla del Subjuntivo con WERE: En inglés formal se usa WERE con todos los pronombres (I, he, she, it): 'If I were you', 'If she were the president', 'If it were possible'.",
            "Fórmula de Consejo de Oro: 'IF I WERE YOU, I WOULD + Verbo Base': Es la fórmula más respetuosa para aconsejar: 'If I were you, I wouldn't worry about it'.",
            "Prohibición estricta de WOULD en la cláusula con IF: 'If I had time' (correcto), 'If I would have time' (error severo de interferencia).",
            "Alternancia de modales hipotéticos en el resultado: Se pueden usar COULD (posibilidad o capacidad hipotética) o MIGHT (probabilidad remota): 'If we lived near the sea, we COULD swim every day'.",
            "Contracción de WOULD en habla fluida ('D): I'd, you'd, he'd, she'd, we'd, they'd: 'If I knew his address, I'd visit him'.",
            "Regla de la coma sintáctica: Lleva coma si la cláusula con IF abre la oración: 'If I had a car, I would drive to work'. Si va al revés, no lleva coma.",
            "Contraste con First Conditional: First Conditional = Situación real y probable ('If I have money tomorrow, I will buy it'). Second Conditional = Situación imaginaria o irreal hoy ('If I had a million dollars today, I would buy it')."
        ],
        [
            "If our university engineering faculty had unlimited financial resources, we would construct a state-of-the-art aerospace testing laboratory. (Si nuestra facultad de ingeniería universitaria tuviera recursos financieros ilimitados, construiríamos un laboratorio de pruebas aeroespaciales de última generación).",
            "If I were you, I would consult with the academic scholarship advisor before making a final decision regarding the research exchange program. (Si yo fuera tú, consultaría con el asesor de becas académicas antes de tomar una decisión final respecto al programa de intercambio de investigación).",
            "What would you do if you discovered a critical security vulnerability in an international banking software system? (¿Qué harías si descubrieras una vulnerabilidad crítica de seguridad en un sistema de software bancario internacional?).",
            "She would travel across all seven continents to photograph endangered wildlife species if she didn't have professional work commitments in Boston. (Ella viajaría a través de los siete continentes para fotografiar especies de vida silvestre en peligro de extinción si no tuviera compromisos laborales profesionales en Boston)."
        ],
        [
            "If the historic cathedral in Canterbury were located in a modern capital city, it would attract millions of international tourists every year. (Si la histórica catedral en Canterbury estuviera ubicada en una ciudad capital moderna, atraería a millones de turistas internacionales todos los años).",
            "If I had more leisure time during the academic term, I would learn how to play the classical cello and study ancient European history. (Si tuviera más tiempo libre durante el trimestre académico, aprendería a tocar el violonchelo clásico y estudiaría historia europea antigua).",
            "The headmaster would undoubtedly approve our research proposal if we presented a more detailed financial budget for the laboratory equipment. (El director indudablemente aprobaría nuestra propuesta de investigación si presentáramos un presupuesto financiero más detallado para el equipo de laboratorio).",
            "If they lived closer to central London, they wouldn't have to spend two hours commuting by train every morning. (Si ellos vivieran más cerca del centro de Londres, no tendrían que pasar dos horas viajando en tren todas las mañanas)."
        ],
        [
            {"speaker": "Austin (US)", "text": "What would you do if you won a million dollars in the national lottery tomorrow, Jessica?", "translation": "¿Qué harías si ganaras un millón de dólares en la lotería nacional mañana, Jessica?"},
            {"speaker": "Jessica (UK)", "text": "If I won that amount of money, I would pay off my university tuition fees and establish a scholarship foundation for disadvantaged students.", "translation": "Si ganara esa cantidad de dinero, pagaría mis tasas de matrícula universitaria y establecería una fundación de becas para estudiantes desfavorecidos."},
            {"speaker": "Austin (US)", "text": "That is an admirable and generous answer! Wouldn't you buy a sports car or travel around the world?", "translation": "¡Esa es una respuesta admirable y generosa! ¿No comprarías un auto deportivo ni viajarías alrededor del mundo?"},
            {"speaker": "Jessica (UK)", "text": "Well, if I had leftover funds, I would certainly buy a charming cottage in the countryside. What about you?", "translation": "Bueno, si tuviera fondos sobrantes, ciertamente compraría una encantadora casa de campo. ¿Y qué hay de ti?"},
            {"speaker": "Austin (US)", "text": "If I had that kind of wealth, I would invest in a renewable energy startup and build an automated greenhouse.", "translation": "Si tuviera ese tipo de riqueza, invertiría en una startup de energía renovable y construiría un invernadero automatizado."},
            {"speaker": "Jessica (UK)", "text": "Splendid! Both of our hypothetical plans would create positive social impact.", "translation": "¡Espléndido! Ambos planes hipotéticos crearían un impacto social positivo."}
        ],
        [
            "Poner 'would' en la cláusula con if: decir 'If I would have money, I would buy a car'. Es un error gravísimo; la condición exige pasado simple: 'If I had money, I would buy a car'.",
            "Usar 'If I was you' en contextos formales o exámenes: aunque es común en lenguaje coloquial informal, la norma culta y académica exige rigurosamente 'If I WERE you'.",
            "Usar presente en la cláusula con if: decir 'If I have a million dollars today, I would travel'. Si usas would en el resultado, la condición debe ir en pasado: 'If I had...'.",
            "Confundir el condicional 1 con el 2: decir 'If I win the lottery, I would buy a house'. Debe ser 'If I win... I will' (real) o 'If I won... I would' (hipotético).",
            "Omitir el verbo base tras would: escribir 'I would a car'. Would es un modal auxiliar y requiere un verbo léxico: 'I would buy a car'."
        ],
        [
            "El Puente de la Fantasía: Recuerda la fórmula matemática del mundo imaginario: [IF + Pasado Simple] -> [WOULD + Verbo Base]. Es el puente que cruza de la realidad hacia los sueños.",
            "La Corona Real de WERE: En el mundo de la fantasía formal con IF, todo el mundo viste con 'WERE' (If I were, if he were, if she were). El singular 'was' se queda afuera en la puerta.",
            "La Frase de Bolsillo para Consejos: Memoriza de memoria: 'If I were you, I would...' para dar cualquier consejo en inglés con máxima elegancia diplomática."
        ],
        "https://www.englisch-hilfen.de/en/grammar/conditional_2.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 10: Modales de Deducción en Presente: MUST, CAN'T, MIGHT, COULD
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_10",
        "Clase 10: Modales de Deducción en Presente: MUST, CAN'T, MIGHT, COULD",
        "B1",
        "Verbos Modales Epistémicos",
        "Los modales de deducción o certeza epistémica expresan el grado de seguridad, convicción lógica o especulación que tiene el hablante sobre la veracidad de una situación presente, basándose en indicios y evidencias observables.",
        "Certeza Afirmativa Casi Total (95-99% seguro de que es verdad): Sujeto + MUST + Verbo en forma base: He has a Ferrari; he must be rich / Lights are on; they must be home. Imposibilidad / Certeza Negativa (99% seguro de que es falso): Sujeto + CAN'T + Verbo en forma base: She just left five minutes ago; she can't be in London yet. Posibilidad Teórica / Incertidumbre (40-50% posible): Sujeto + MIGHT / MAY / COULD + Verbo en forma base: It might rain later / He could be in the library.",
        "La modalidad epistémica en la lengua inglesa representa una de las aplicaciones más refinadas y sutiles de los verbos modales. Hasta el nivel A2, los estudiantes suelen aprender los modales en su función deóntica (permiso, habilidad, obligación: 'puedo nadar', 'debo estudiar'). En el nivel intermedio B1, sin embargo, los mismos verbos auxiliares adquieren una dimensión completamente nueva: evaluar el grado de CERTEZA LÓGICA y PROBABILIDAD que el emisor atribuye a una proposición en función de las evidencias perceptibles en su entorno presente. La escala de convicción epistémica se estructura en tres niveles rigurosos: Primer nivel: CERTEZA AFIRMATIVA ABSOLUTA con 'MUST'. Cuando todas las pistas lógicas conducen de manera inevitable a una única conclusión irrefutable, el inglés emplea 'MUST' con el valor semántico de 'seguramente es / indudablemente tiene que ser' ('He works seventy hours a week and drives a luxury vehicle; he MUST be wealthy'; 'Look at the snow falling outside; it MUST be freezing'). Segundo nivel: IMPOSIBILIDAD LÓGICA Y CERTEZA NEGATIVA con 'CAN'T'. Cuando las evidencias demuestran de forma categórica que una situación es completamente imposible o incompatible con los hechos conocidos, el idioma recurre invariablemente a 'CAN'T' con el valor de 'es imposible que sea / no puede ser verdad' ('Carlos can't be at home right now; I just saw him working in the laboratory five minutes ago'). Es un error conceptual gravísimo intentar negar 'must' con 'mustn't' para deducciones: 'mustn't' significa prohibición ('no debes'), mientras que la deducción negativa de imposibilidad exige estrictamente 'CAN'T'. Tercer nivel: POSIBILIDAD Y CONJETURA con 'MIGHT', 'MAY' o 'COULD'. Cuando los indicios son insuficientes para aseverar con certeza y la situación es simplemente una hipótesis plausible entre varias ('es posible que / podría ser que'), se emplean 'might', 'may' o 'could' indistintamente ('Where is Emma? - She MIGHT be in the library, or she COULD be having coffee at the union').",
        [
            "MUST (Deducción afirmativa de certeza casi total, ~95%): Basado en evidencias contundentes: 'You have been walking for five hours; you MUST be exhausted!'.",
            "CAN'T (Imposibilidad lógica / deducción negativa, ~99%): Basado en hechos que contradicen la afirmación: 'That CAN'T be Peter; he is currently on holiday in Australia!'.",
            "Prohibición de MUSTN'T para deducción: 'Mustn't' indica prohibición moral ('no debes'); la deducción de imposibilidad en inglés se expresa EXCLUSIVAMENTE con CAN'T.",
            "MIGHT / MAY / COULD (Posibilidad moderada o conjetura, ~40-50%): Indican que algo es posible pero incierto: 'Take an umbrella; it MIGHT rain later', 'He COULD be the new manager'.",
            "Régimen de Infinitivo Desnudo: Todos estos modales rigen la forma base pura del verbo sin 'to': 'must be', 'can't know', 'might have', 'could live'.",
            "Deducción con el verbo TO BE: La cópula 'be' es el verbo más frecuente en deducciones epistémicas: 'She must BE tired', 'It can't BE true', 'He might BE asleep'.",
            "Deducción de acción en progreso continuo: Modal + BE + Verbo-ING: 'The lights are on in his study; he MUST BE WORKING on his thesis right now'.",
            "Invariabilidad absoluta: No se añade '-s' en tercera persona singular: 'He must be', 'She can't be', 'It might rain'."
        ],
        [
            "Look at all those prestigious academic awards and international patents in her office; she must be an exceptionally brilliant scientist. (Mira todos aquellos prestigiosos premios académicos y patentes internacionales en su oficina; indudablemente debe ser una científica excepcionalmente brillante).",
            "That man waiting at the bus stop can't be our university professor because our professor is currently delivering a guest lecture in Chicago. (Aquel hombre esperando en la parada de autobús no puede ser nuestro profesor universitario porque nuestro profesor está actualmente dando una conferencia magistral en Chicago).",
            "The laboratory computer servers might be experiencing technical connectivity issues due to the severe thunderstorm affecting the metropolitan area. (Los servidores de computadoras del laboratorio podrían estar experimentando problemas de conectividad técnica debido a la severa tormenta eléctrica que afecta el área metropolitana).",
            "You have been studying advanced mathematics in the library since eight o'clock this morning without any lunch break; you must be starving! (Has estado estudiando matemáticas avanzadas en la biblioteca desde las ocho de esta mañana sin ninguna pausa para el almuerzo; ¡debes estar muriéndote de hambre!)."
        ],
        [
            "The lights are still switched on in the chemistry laboratory on the third floor; the researchers must be conducting an overnight clinical trial. (Las luces todavía están encendidas en el laboratorio de química en el tercer piso; los investigadores deben estar realizando un ensayo clínico durante la noche).",
            "It can't be four o'clock already! The antique cathedral clock chimed three only a short moment ago. (¡No pueden ser las cuatro en punto ya! El antiguo reloj de la catedral repicó las tres hace solo un breve momento).",
            "The headmaster could be in a private conference with the school governors, or he might be reviewing the annual examination statistics. (El director podría estar en una conferencia privada con los gobernadores escolares, o podría estar revisando las estadísticas anuales de exámenes).",
            "She has lived in Great Britain for more than twenty-five years, so she must understand English idiomatic expressions fluently. (Ella ha vivido en Gran Bretaña durante más de veinticinco años, por lo que indudablemente debe comprender las expresiones idiomáticas inglesas con fluidez)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Listen to that loud knocking at the apartment door, Jessica! Who could that be at this hour?", "translation": "¡Escucha esos golpes fuertes en la puerta del departamento, Jessica! ¿Quién podría ser a esta hora?"},
            {"speaker": "Jessica (UK)", "text": "It can't be the mail carrier; postal deliveries never arrive this late in the evening.", "translation": "No puede ser el cartero; las entregas postales nunca llegan tan tarde en la noche."},
            {"speaker": "Austin (US)", "text": "Could it be our classmate Kevin? He mentioned that he might drop by to borrow my physics textbook.", "translation": "¿Podría ser nuestro compañero de clase Kevin? Mencionó que podría pasar a pedir prestado mi libro de texto de física."},
            {"speaker": "Jessica (UK)", "text": "No, it can't be Kevin. I just saw on social media that he is attending an orchestra concert across town.", "translation": "No, no puede ser Kevin. Acabo de ver en las redes sociales que está asistiendo a un concierto de orquesta al otro lado de la ciudad."},
            {"speaker": "Austin (US)", "text": "Wait, look through the peephole! It is our landlord. He must be here to inspect the water radiator.", "translation": "Espera, ¡mira a través de la mirilla! Es nuestro arrendador. Debe estar aquí para inspeccionar el radiador de agua."},
            {"speaker": "Jessica (UK)", "text": "Ah, of course! He emailed us yesterday about the heating maintenance. Let's open the door.", "translation": "¡Ah, por supuesto! Nos envió un correo ayer sobre el mantenimiento de la calefacción. Abramos la puerta."}
        ],
        [
            "Usar 'mustn't' para deducción negativa: decir 'It mustn't be true' cuando quieres decir 'no puede ser verdad'. La imposibilidad deductiva se dice estrictamente con CAN'T: 'It can't be true'.",
            "Usar 'can' para deducción afirmativa: decir 'He can be rich' cuando estás seguro. Para deducción afirmativa se usa MUST: 'He must be rich'.",
            "Añadir 'to' tras el modal: decir 'He must to be tired' o 'She can't to know'. Los modales van seguidos de infinitivo desnudo: 'He must be tired', 'She can't know'.",
            "Añadir 's' en tercera persona singular: decir 'He musts be happy'. Los modales son invariables: 'He must be happy'.",
            "Confundir 'can't be' (imposibilidad lógica) con 'couldn't be' (pasado o hipotético)."
        ],
        [
            "El Termómetro de la Certeza Mental: 100% Seguro de que SÍ -> MUST ('He has 5 mansions; he must be rich'). 100% Seguro de que NO -> CAN'T ('He is in Tokyo; he can't be in London'). 50% Duda / Quizás sí o no -> MIGHT / COULD ('It might rain').",
            "La Alerta Roja de MUSTN'T: Grábate esta regla de hierro en la mente: 'MUSTN'T' es un policía que dice '¡Prohibido fumar!'. Nunca lo uses para decir 'no puede ser verdad'; para eso usa siempre 'CAN'T'.",
            "La Fórmula del Detective Holmes: Cada vez que veas una pista física evidente (luces encendidas, sonrisa enorme, coche carísimo) -> saca la lupa de Sherlock Holmes y di 'He MUST be...'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/modals_deduction.htm"
    ))

    return lessons

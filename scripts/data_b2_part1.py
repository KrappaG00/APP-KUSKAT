# -*- coding: utf-8 -*-
"""
APP-KUSKAT • English Lessons Bank: Level B2 (Part 1: Lessons 01 to 10)
Each class has >= 500 words of rigorous pedagogical and linguistic content.
"""
from lesson_utils import make_lesson

def get_b2_part1():
    lessons = []

    # -------------------------------------------------------------------------
    # Clase 01: Past Perfect Simple: Acciones Anteriores en el Pasado
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b2_lesson_01",
        "Clase 01: Past Perfect Simple: Acciones Anteriores en el Pasado",
        "B2",
        "Tiempos Verbales Perfectos Pasados",
        "El pasado perfecto simple establece una relación de anterioridad cronológica relativa entre dos sucesos pretéritos, identificando la acción que se consumó con antelación a otro evento del pasado.",
        "Afirmativo: Sujeto + HAD ('d) + Participio Pasado (Columna 3) + Complemento: When I arrived at the station, the train had already left / She had finished her thesis before the deadline. Negativo: Sujeto + hadn't (had not) + Participio Pasado. Pregunta: Had + Sujeto + Participio Pasado? Marcadores temporales: before, after, already, by the time, as soon as.",
        "El Past Perfect Simple (denominado tradicionalmente en la gramática romance como pretérito pluscuamperfecto) es el tiempo del 'pasado del pasado' (the past of the past). Su función semántica y discursiva cardinal en el nivel B2 consiste en ordenar cronológicamente dos eventos pretéritos cuando la narración no sigue un orden estrictamente lineal. En el flujo comunicativo habitual, si relatamos eventos siguiendo el orden cronológico natural de los acontecimientos, el inglés emplea simplemente una secuencia sucesiva en Past Simple coordinada con conectores temporales ('I woke up, brushed my teeth, and left the house'). Sin embargo, cuando el narrador se sitúa retrospectivamente en un momento pasado determinado y necesita mirar hacia atrás para recuperar una causa, un antecedente o un estado previo que ya se había consumado con anterioridad a ese punto de referencia, el idioma recurre imperativamente al Past Perfect ('When I arrived at the station at 9:00 AM, the train HAD ALREADY LEFT at 8:45 AM'). La construcción morfosintáctica es homogénea y regular: requiere el auxiliar 'HAD' (idéntico para todas las personas gramaticales: I had, you had, he had, we had, they had; con su contracción fonética informal ''d') combinado con el participio pasado del verbo principal. Su uso es crucial en combinación con la locución temporal subordinante 'BY THE TIME' ('By the time the police arrived, the burglar had escaped') y con conjunciones correlativas como 'before' y 'after'. Es de vital importancia recalcar que el Past Perfect no se utiliza de forma aislada sin un marco de referencia pretérito: abrir una narración de la nada diciendo simplemente 'I had eaten an apple' sin vincularla a otro suceso pasado carece de justificación pragmática en inglés estándar.",
        [
            "Función de Anterioridad Relativa: Señala cuál de dos acciones pasadas ocurrió primero: Acción 1 (más antigua) = Past Perfect; Acción 2 (más reciente) = Past Simple.",
            "Estructura compuesta invariable: Sujeto + HAD + Participio Pasado: 'She had already graduated when she received the job offer'.",
            "Uso con BY THE TIME: La cláusula con 'by the time' se conjuga en Past Simple y la cláusula principal en Past Perfect: 'By the time we reached the cinema, the film had already started'.",
            "Uso con BEFORE y AFTER: 'After he had examined the patient, the doctor wrote the prescription' / 'He had saved enough money before he bought the car'.",
            "Uso para justificar causas y explicaciones pasadas: 'I was extremely tired because I had worked for fourteen hours without a break'.",
            "Contracción en habla fluida ('D): I'd, you'd, he'd, she'd, we'd, they'd: 'She told me that she'd lost her passport'. Cuidado: no confundir 'd = had (seguido de participio) con 'd = would (seguido de verbo base).",
            "Prohibición de uso aislado sin contexto pretérito: No se debe emplear Past Perfect como un simple sustituto del Past Simple; requiere siempre un anclaje con otro evento del pasado.",
            "Uso con adverbios aspectuales (already, just, never): 'When the phone rang, I had JUST stepped into the shower'."
        ],
        [
            "By the time the senior aerospace engineers arrived at the launch control center, the automated telemetry systems had already initiated the countdown sequence. (Para cuando los ingenieros aeroespaciales sénior llegaron al centro de control de lanzamiento, los sistemas de telemetría automatizados ya habían iniciado la secuencia de cuenta regresiva).",
            "She had published two influential scientific articles on molecular biology before she completed her doctoral dissertation at Harvard University. (Ella había publicado dos artículos científicos influyentes sobre biología molecular antes de completar su tesis doctoral en la Universidad de Harvard).",
            "The international flight had already taken off from San Francisco International Airport when the passenger realized that he had left his laptop at the security checkpoint. (El vuelo internacional ya había despegado del Aeropuerto Internacional de San Francisco cuando el pasajero se dio cuenta de que había dejado su computadora portátil en el control de seguridad).",
            "They were not able to enter the private exhibition because the gallery curator had locked the historic archives twenty minutes earlier. (No pudieron entrar a la exposición privada porque el curador de la galería había cerrado con llave los archivos históricos veinte minutos antes)."
        ],
        [
            "The headmaster had already reviewed the confidential academic examination scripts before the governing board assembled in the council chamber. (El director ya había revisado los exámenes académicos confidenciales antes de que la junta de gobierno se reuniera en la sala del consejo).",
            "By the time our commuter train pulled into London King's Cross, the heavy rainfall had caused widespread flooding across the underground network. (Para cuando nuestro tren de cercanías entró en Londres King's Cross, las fuertes lluvias habían causado inundaciones generalizadas en toda la red de metro).",
            "He had worked as a commercial barrister in central London for over fifteen years before he was appointed to the judicial bench. (Él había trabajado como abogado litigante comercial en el centro de Londres durante más de quince años antes de ser nombrado juez).",
            "We had barely finished our afternoon tea in the garden lounge when an unexpected thunderstorm forced everyone to retreat indoors. (Apenas habíamos terminado nuestro té de la tarde en el salón del jardín cuando una tormenta eléctrica inesperada obligó a todos a retirarse al interior)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Did you manage to catch your flight to Chicago yesterday morning, Jessica, or was the traffic too heavy?", "translation": "¿Lograste tomar tu vuelo a Chicago ayer por la mañana, Jessica, o el tráfico estuvo demasiado pesado?"},
            {"speaker": "Jessica (UK)", "text": "Unfortunately, by the time I reached the airport departure terminal, the boarding gate had already closed.", "translation": "Desafortunadamente, para cuando llegué a la terminal de salidas del aeropuerto, la puerta de embarque ya se había cerrado."},
            {"speaker": "Austin (US)", "text": "Oh no! Had you checked in online before leaving your apartment?", "translation": "¡Oh no! ¿Habías hecho el check-in en línea antes de salir de tu departamento?"},
            {"speaker": "Jessica (UK)", "text": "Yes, I had checked in and I had printed my boarding pass, but a severe road collision had blocked the main highway.", "translation": "Sí, había hecho el check-in y había impreso mi tarjeta de embarque, pero una colisión vial grave había bloqueado la autopista principal."},
            {"speaker": "Austin (US)", "text": "That is so frustrating. What did the airline customer service desk do to resolve the situation?", "translation": "Eso es muy frustrante. ¿Qué hizo el mostrador de servicio al cliente de la aerolínea para resolver la situación?"},
            {"speaker": "Jessica (UK)", "text": "Fortunately, a sympathetic agent booked me onto the afternoon flight because I had purchased flexible travel insurance.", "translation": "Afortunadamente, un agente comprensivo me reservó en el vuelo de la tarde porque yo había comprado un seguro de viaje flexible."}
        ],
        [
            "Usar Past Perfect sin un punto de referencia en el pasado: decir 'Yesterday I had gone to the cinema' (sin vincularlo a nada). Si solo relatas el hecho de ayer, debe ser Past Simple: 'Yesterday I went to the cinema'.",
            "Poner en Past Perfect la acción más reciente: decir 'When the train had arrived, I bought a ticket'. La acción más antigua (el tren) va en Past Perfect, pero si compraste el boleto primero: 'I had bought a ticket before the train arrived'.",
            "Confundir la contracción ''d': interpretar 'I'd go' como had; si el verbo que sigue es infinitivo base, es WOULD; si es participio ('I'd gone'), es HAD.",
            "Usar Present Perfect en una narración de pasado: decir 'When I arrived, the train has left'. La coherencia pretérita exige Past Perfect: 'the train had left'.",
            "Olvidar usar el participio pasado del verbo léxico: escribir 'She had wrote' en vez de 'She had written'."
        ],
        [
            "La Línea del Tiempo de los Dos Pasados: Dibuja una línea hacia la izquierda: [PRESENTE AHORA] <- [PASADO SIMPLE (Punto de llegada)] <- [PAST PERFECT (El evento más antiguo que ocurrió antes)].",
            "La Fórmula Mnemotécnica de BY THE TIME: [By the time + Past Simple], [Past Perfect]: 'By the time I arrived, he HAD LEFT'.",
            "El Inspector de la Doble 'D': Recuerda que 'I'd finished' = I had finished (con participio). 'I'd finish' = I would finish (con infinitivo)."
        ],
        "https://www.englisch-hilfen.de/en/grammar/past_perfect.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 02: Past Perfect Continuous: Duración y Causa Previa Pasada
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b2_lesson_02",
        "Clase 02: Past Perfect Continuous: Duración y Causa Previa Pasada",
        "B2",
        "Tiempos Verbales Perfectos Continuos",
        "El pasado perfecto continuo enfatiza la duración ininterrumpida y acumulada de un proceso que se encontraba en desarrollo activo con anterioridad a otro hito del pasado, explicando las causas visibles de estados pretéritos.",
        "Afirmativo: Sujeto + HAD ('d) + BEEN + Verbo con sufijo -ING + Complemento: They had been driving for six hours when they ran out of fuel / She was exhausted because she had been studying all night. Negativo: hadn't been + Verbo-ING. Pregunta: Had + Sujeto + been + Verbo-ING? Marcadores: for, since, before, all day, when.",
        "El Past Perfect Continuous (o Past Perfect Progressive) combina la anterioridad relativa del aspecto perfecto pasado con la duración ininterrumpida del aspecto continuo. Mientras que el Past Perfect Simple focaliza la culminación de un hecho o el número de unidades concluidas antes de otro momento pretérito ('He had written three reports before the meeting began'), el Past Perfect Continuous enfoca deliberadamente la CÁMARA LENTA sobre la duración temporal, el esfuerzo continuo y el proceso no necesariamente cerrado de la acción antes de que fuera interrumpida o alcanzara un hito pasado ('He was exhausted because he HAD BEEN WRITING reports for five hours'). Esta estructura desempeña dos funciones discursivas capitales en la prosa avanzada de nivel B2: primera función: explicitar la CAUSA DIRECTA de un estado físico, emocional o ambiental en el pasado ('The ground was muddy because it had been raining heavily'; 'Her eyes were red because she had been crying'; 'The athlete collapsed because he had been running under the scorching sun'). Segunda función: enfatizar la DURACIÓN PROLONGADA de una actividad que se extendía en el tiempo hasta ser alcanzada por otro evento puntual ('We had been waiting for over forty minutes when the train finally pulled into the station'). Su arquitectura sintáctica es uniforme e invariable: [SUJETO] + [HAD] + [BEEN] + [VERBO CON SUFIJO -ING]. Al igual que en todos los tiempos continuos, los verbos estáticos de estado mental o posesión (know, believe, understand, own) rechazan terminantemente el Past Perfect Continuous y deben expresarse en Past Perfect Simple ('I had known him for years before we became partners', nunca 'I had been knowing').",
        [
            "Estructura compuesta invariable de cuatro piezas: Sujeto + HAD + BEEN + Verbo-ING: 'She had been researching genetic mutations for months before making the discovery'.",
            "Foco en la DURACIÓN CONTINUA hasta un punto pasado: Se enfatiza la longitud del proceso temporal con FOR o SINCE: 'They had been flying for eight hours when the turbulence began'.",
            "Explicación de CAUSA o ESTADO FÍSICO PASADO: Explica por qué alguien estaba cansado, sudando o enfermo en el pasado: 'He was breathless because he had been running up the stairs'.",
            "Contraste con Past Perfect Simple (Resultado vs. Proceso): Past Perfect Simple = ¿Cuántas cosas se terminaron? ('He had painted two rooms'). Past Perfect Continuous = ¿Cuánto tiempo duró el esfuerzo? ('He had been painting the walls all afternoon').",
            "Contraste con Past Continuous (Interrupción puntual vs. Duración acumulada): Past Continuous describe lo que ocurría en un instante ('I was sleeping when the phone rang'); Past Perfect Continuous describe cuánto tiempo llevaba acumulándose la acción ('I had been sleeping for two hours when the phone rang').",
            "Prohibición estricta con Verbos de Estado: Verbos como know, like, want, understand usan Past Perfect Simple: 'She had wanted a new car for months' (correcto), 'She had been wanting' (inadmisible).",
            "Forma negativa e interrogativa: Negativo: 'I hadn't been sleeping well'. Interrogativo: 'Had you been waiting long before the bus arrived?'.",
            "Uso con ALL DAY / ALL MORNING: Expresa intensidad de esfuerzo continuado: 'We had been working in the laboratory all day'."
        ],
        [
            "The environmental scientists had been monitoring atmospheric carbon levels for several weeks before they detected an anomalous chemical spike in the data. (Los científicos ambientales habían estado monitoreando los niveles de carbono atmosférico durante varias semanas antes de que detectaran un pico químico anómalo en los datos).",
            "He was thoroughly exhausted when he arrived at the international conference in Chicago because he had been travelling continuously for twenty-four hours. (Él estaba completamente agotado cuando llegó a la conferencia internacional en Chicago porque había estado viajando continuamente durante veinticuatro horas).",
            "The computer network had been experiencing intermittent connectivity malfunctions all morning before the central database crashed completely. (La red de computadoras había estado experimentando fallas intermitentes de conectividad toda la mañana antes de que la base de datos central colapsara por completo).",
            "How long had the undergraduate engineering students been developing their automated solar vehicle before they entered the national competition? (¿Cuánto tiempo habían estado los estudiantes de pregrado en ingeniería desarrollando su vehículo solar automatizado antes de que ingresaran a la competencia nacional?)."
        ],
        [
            "The pavements across central London were completely soaked and slippery because it had been raining relentlessly throughout the early morning hours. (Las aceras en el centro de Londres estaban completamente empapadas y resbaladizas porque había estado lloviendo sin cesar durante las primeras horas de la mañana).",
            "The senior barrister had been reviewing complex financial litigation records for nearly three days before he identified the crucial judicial precedent. (El abogado litigante sénior había estado revisando complejos registros de litigios financieros durante casi tres días antes de identificar el precedente judicial crucial).",
            "She had been lecturing in medieval British history at Oxford University for over twenty years when she was appointed to the royal advisory commission. (Ella había estado dando conferencias de historia británica medieval en la Universidad de Oxford durante más de veinte años cuando fue nombrada para la comisión asesora real).",
            "We had been queueing outside the historic cathedral gates for more than an hour when the security staff finally opened the ceremonial doors. (Habíamos estado haciendo fila afuera de las puertas de la histórica catedral durante más de una hora cuando el personal de seguridad finalmente abrió las puertas ceremoniales)."
        ],
        [
            {"speaker": "Austin (US)", "text": "You looked terribly fatigued yesterday afternoon during our physics seminar, Jessica. Were you feeling ill?", "translation": "Te veías terriblemente fatigada ayer por la tarde durante nuestro seminario de física, Jessica. ¿Te sentías enferma?"},
            {"speaker": "Jessica (UK)", "text": "No, I wasn't ill, but I had been working on my biotechnology dissertation all night without a single wink of sleep.", "translation": "No, no estaba enferma, pero había estado trabajando en mi tesis de biotecnología toda la noche sin pegar un solo ojo."},
            {"speaker": "Austin (US)", "text": "That sounds brutal! How long had you been analyzing those laboratory cell cultures before you finally stopped?", "translation": "¡Eso suena brutal! ¿Cuánto tiempo habías estado analizando aquellos cultivos celulares de laboratorio antes de que finalmente te detuvieras?"},
            {"speaker": "Jessica (UK)", "text": "I had been running statistical simulations for twelve hours straight when my laptop battery finally died at dawn.", "translation": "Había estado ejecutando simulaciones estadísticas durante doce horas seguidas cuando la batería de mi computadora portátil finalmente murió al amanecer."},
            {"speaker": "Austin (US)", "text": "You must take better care of your physical well-being. Academic achievement shouldn't compromise your health.", "translation": "Debes cuidar mejor tu bienestar físico. El logro académico no debería comprometer tu salud."},
            {"speaker": "Jessica (UK)", "text": "You are entirely right, Austin. Tonight I am going to bed early to compensate for that exhausting sleepless night.", "translation": "Tienes toda la razón, Austin. Esta noche me voy a la cama temprano para compensar esa agotadora noche de desvelo."}
        ],
        [
            "Usar verbos estáticos en Past Perfect Continuous: decir 'I had been knowing him for years before we parted'. Debe ser Past Perfect Simple: 'I had known him for years'.",
            "Omitir 'been' en la estructura: decir 'She had working for hours'. La fórmula exige 'been': 'She had been working for hours'.",
            "Confundir con Past Continuous: decir 'I was waiting for two hours when the bus arrived'. Para cuantificar la duración acumulada con for/since se exige Past Perfect Continuous: 'I had been waiting for two hours'.",
            "Usar Past Perfect Continuous para expresar cuántas veces se repitió una acción: decir 'I had been writing three letters before noon'. Para cantidades terminadas se usa Simple: 'I had written three letters'.",
            "Confundir la causa con el efecto: usar presente en la justificación de un estado pasado: 'He was tired because he has been running' (debe ser: 'because he HAD been running')."
        ],
        [
            "La Fórmula del Tren de Cuatro Vagones del Pasado: [SUJETO] + [HAD] + [BEEN] + [VERBO-ING]. Los cuatro vagones deben estar enganchados en perfecta sincronía.",
            "La Ecuación de la Causa del Pasado: Estado pasado en Past Simple ('He was tired') + BECAUSE + Actividad prolongada previa en Past Perfect Continuous ('he had been studying for 10 hours').",
            "La Regla del Cronómetro en el Pasado: Si la frase contiene 'for [X] hours' o 'since morning' y desemboca en una acción en pasado simple ('when she arrived'), ¡tu elección obligatoria es PAST PERFECT CONTINUOUS!"
        ],
        "https://www.englisch-hilfen.de/en/grammar/past_perfect_progressive.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 03: Futuro Continuo (Will be doing) para Eventos en Progreso
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b2_lesson_03",
        "Clase 03: Futuro Continuo (Will be doing) para Eventos en Progreso",
        "B2",
        "Tiempos Verbales Futuros",
        "El futuro continuo proyecta acciones dinámicas que se encontrarán en pleno desarrollo y desenvolvimiento en un punto cronológico específico del porvenir, o que tendrán lugar como parte del curso rutinario natural de los acontecimientos.",
        "Afirmativo: Sujeto + WILL BE + Verbo con sufijo -ING + Complemento: This time tomorrow, I will be flying to London / At 8:00 PM tonight, she will be studying in the library. Negativo: Sujeto + WON'T BE + Verbo-ING. Pregunta: Will + Sujeto + be + Verbo-ING? Pregunta cortés sobre planes ajenos: Will you be using the car tonight?",
        "El Future Continuous (o Future Progressive) introduce una perspectiva cinematográfica y aspectual sobre el porvenir en el nivel B2. Mientras que el futuro simple con 'will' focaliza el hecho de que una acción ocurrirá de manera puntual o decidida ('I will arrive at the airport at noon'), el futuro continuo traslada imaginariamente al espectador hacia el interior del momento futuro para contemplar la acción desarrollándose en pleno progreso temporal ('At noon tomorrow, I will be flying over the Atlantic Ocean'). La arquitectura morfosintáctica es invariable y elegante: se compone del modal auxiliar 'WILL', la forma infinitiva desnuda del verbo copulativo 'BE' y el participio presente del verbo léxico terminado en '-ING': [SUJETO] + [WILL BE] + [VERBO-ING]. Esta estructura desempeña tres funciones comunicativas capitales de gran refinamiento: Primera función: situar una actividad en curso en una hora exacta o período delimitado del futuro, frecuentemente acompañada de expresiones temporales como 'this time tomorrow', 'at ten o'clock next Friday' o 'in two years' time' ('This time next week, we will be relaxing on the beach'). Segunda función: referirse a acontecimientos que ocurrirán como parte del curso habitual, rutinario y predecible de los eventos cotidianos, sin que medie una intención o esfuerzo extraordinario ('I will be seeing Carlos at the office tomorrow anyway, so I can give him the document'). Tercera función de máxima cortesía pragmática: formular preguntas indirectas y sumamente educadas sobre los planes de otra persona para solicitarle un favor sin presionarla ni parecer indiscreto ('Will you be going past the post office on your way home? Could you post this letter for me?').",
        [
            "Estructura canónica del Future Continuous: Sujeto + WILL BE + Verbo-ING: 'She will be working in the laboratory all afternoon tomorrow'.",
            "Acción en progreso en un momento futuro exacto: Se acompaña de marcadores de precisión horaria: 'At 10:00 AM tomorrow', 'This time next month', 'In five years' time'.",
            "Eventos en el curso normal y rutinario de las cosas: Acciones que sucederán de forma natural y predecible: 'Don't worry, I will be seeing the director tomorrow morning during the faculty meeting'.",
            "Preguntas de cortesía exquisita (Polite enquiries about plans): Para averiguar los planes de alguien antes de pedirle un favor sin comprometerlo: 'Will you be using your laptop this evening? - No, why? - Could I borrow it for an hour?'.",
            "Forma negativa: Sujeto + WON'T BE + Verbo-ING: 'I won't be attending the departmental seminar tomorrow because I have a doctor's appointment'.",
            "Forma interrogativa: Will + Sujeto + be + Verbo-ING?: 'Will they be staying at a hotel or with relatives during their visit to Chicago?'.",
            "Prohibición de verbos de estado: Como en todos los tiempos continuos, los verbos estáticos rechazan esta estructura: 'I will know the results tomorrow' (correcto), 'I will be knowing' (inadmisible).",
            "Contraste con Future Simple: Future Simple = Decisión o hecho puntual ('I will call you at eight'). Future Continuous = Acción en pleno desarrollo en ese minuto ('At eight I will be watching the football match, so call at nine')."
        ],
        [
            "This time tomorrow, our international research delegation will be flying across the Atlantic Ocean on our way to the scientific symposium in London. (A esta hora mañana, nuestra delegación internacional de investigación estará volando a través del Océano Atlántico camino al simposio científico en Londres).",
            "At eight o'clock this evening, the software engineering team will be conducting comprehensive stress tests on the new digital banking platform. (A las ocho de esta noche, el equipo de ingeniería de software estará realizando pruebas exhaustivas de esfuerzo en la nueva plataforma de banca digital).",
            "Will you be driving past the university administrative center this afternoon? Could you please drop off these enrollment forms for me? (¿Estarás pasando en auto frente al centro administrativo universitario esta tarde? ¿Podrías por favor dejar estos formularios de matrícula por mí?).",
            "We won't be using the central chemistry laboratory on Friday morning because maintenance technicians will be servicing the ventilation hoods. (No estaremos usando el laboratorio central de química el viernes por la mañana porque los técnicos de mantenimiento estarán revisando las campanas de ventilación)."
        ],
        [
            "This time next week, hundreds of university scholars and international diplomats will be gathering in the historic cathedral for the peace colloquium. (A esta hora la próxima semana, cientos de académicos universitarios y diplomáticos internacionales se estarán reuniendo en la histórica catedral para el coloquio de paz).",
            "The headmaster will be lecturing on classical British constitutional law throughout the entire morning in the central auditorium. (El director estará dando conferencias sobre derecho constitucional británico clásico durante toda la mañana en el auditorio central).",
            "Will you be attending the annual faculty dinner at the university hall on Saturday, or will you be travelling to Manchester? (¿Estarás asistiendo a la cena anual de la facultad en el salón universitario el sábado, o estarás viajando a Manchester?).",
            "She won't be participating in the national moot court competition this semester because she will be completing her final judicial internship. (Ella no estará participando en la competencia nacional de simulacro judicial este semestre porque estará completando su pasantía judicial final)."
        ],
        [
            {"speaker": "Austin (US)", "text": "What will you be doing around three o'clock tomorrow afternoon, Jessica? I was wondering if we could review our research data.", "translation": "¿Qué estarás haciendo alrededor de las tres de la tarde mañana, Jessica? Me preguntaba si podríamos revisar nuestros datos de investigación."},
            {"speaker": "Jessica (UK)", "text": "At three o'clock I will be conducting a microbiology experiment in the laboratory, but I will be finishing around half past four.", "translation": "A las tres en punto estaré realizando un experimento de microbiología en el laboratorio, pero estaré terminando alrededor de las cuatro y media."},
            {"speaker": "Austin (US)", "text": "That is completely fine. Will you be heading towards the student union cafe after you complete your lab work?", "translation": "Eso está completamente bien. ¿Estarás dirigiéndote hacia la cafetería del sindicato estudiantil después de que completes tu trabajo de laboratorio?"},
            {"speaker": "Jessica (UK)", "text": "Yes, I will be walking past the cafe around five. We can grab a table in the corner and analyze our findings.", "translation": "Sí, estaré pasando frente a la cafetería alrededor de las cinco. Podemos tomar una mesa en la esquina y analizar nuestros hallazgos."},
            {"speaker": "Austin (US)", "text": "Awesome. This time next month we will be celebrating our final graduation from university!", "translation": "Genial. ¡A esta hora el próximo mes estaremos celebrando nuestra graduación final de la universidad!"},
            {"speaker": "Jessica (UK)", "text": "Indeed! It is thrilling to imagine where we will be working a year from now.", "translation": "¡En efecto! Es emocionante imaginar dónde estaremos trabajando dentro de un año a partir de ahora."}
        ],
        [
            "Omitir 'be' en la estructura: decir 'This time tomorrow I will flying'. La fórmula exige 'will be': 'I will be flying'.",
            "Usar verbos estáticos en futuro continuo: decir 'Next year I will be owning a house'. Con verbos de posesión debe ser simple: 'I will own a house'.",
            "Confundir la cortesía de 'Will you be doing...?' con una orden imperativa: 'Will you be using the car?' es una pregunta cortés sobre planes, no una exigencia.",
            "Olvidar el sufijo -ing en el verbo léxico: escribir 'I will be sleep at ten'. Debe ser 'I will be sleeping at ten'.",
            "Usar el presente continuo en lugar del futuro continuo cuando se señala una hora futura exacta de desarrollo simultáneo: 'At noon I am flying' es admisible en habla rápida, pero la precisión aspectual exige 'I will be flying'."
        ],
        [
            "La Foto del Futuro: Imagina que envías un dron con cámara hacia el futuro a las 3:00 PM de mañana: lo que el dron graba en video en vivo en ese instante es el FUTURE CONTINUOUS ('She will be studying').",
            "El Saludo de la Cortesía Británica: Para pedir un favor a un amigo o colega sin presionarlo, pregúntale por sus planes naturales: 'Will you be going to the library today? Could you return this book for me?'.",
            "La Fórmula Mnemotécnica de THIS TIME TOMORROW: Grábate esta frase en la mente: 'This time tomorrow I will be + [VERBO-ING]'. Es la llave maestra para visualizar este tiempo verbal."
        ],
        "https://www.englisch-hilfen.de/en/grammar/future_progressive.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 04: Futuro Perfecto (Will have done) y Fechas Límite con BY
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b2_lesson_04",
        "Clase 04: Futuro Perfecto (Will have done) y Fechas Límite con BY",
        "B2",
        "Tiempos Verbales Futuros Perfectos",
        "El futuro perfecto proyecta la consumación retroactiva de un proceso antes de una fecha límite o hito cronológico determinado en el porvenir, anticipando logros concluidos con la preposición temporal by.",
        "Afirmativo: Sujeto + WILL HAVE ('ll have) + Participio Pasado (Columna 3) + Complemento: By 2030, scientists will have discovered a cure / I will have finished my degree by next summer. Negativo: won't have + Participio Pasado. Pregunta: Will + Sujeto + have + Participio Pasado? Marcador esencial de fecha límite: BY (para / a más tardar): by Friday, by next year, by the time S + Present Simple.",
        "El Future Perfect Simple representa la cúspide de la perspectiva temporal proyectiva en el nivel B2. Mientras que el futuro simple predice que un evento ocurrirá en un momento del porvenir ('I will finish my thesis next year'), el futuro perfecto se posiciona mentalmente en una fecha límite futura (a future deadline) y contempla el evento como una realidad pretérita retrospectiva ya culminada, consumada y archivada con anterioridad a dicho límite ('By next year, I WILL HAVE FINISHED my thesis'). El operador sintáctico angular e inseparable del futuro perfecto es la preposición temporal 'BY' (/baɪ/), la cual se traduce en este contexto como 'para', 'a más tardar en' o 'no más tarde de' ('by Friday', 'by the end of the month', 'by 2030'). Cuando 'by' introduce una cláusula completa con sujeto y verbo mediante la locución 'BY THE TIME', el verbo de dicha cláusula subordinada debe conjugarse obligatoriamente en PRESENT SIMPLE, mientras que la cláusula principal se proyecta en Future Perfect: [BY THE TIME + Present Simple], [WILL HAVE + Participio Pasado] ('By the time you wake up tomorrow morning, I will have already landed in London'). La arquitectura morfosintáctica es totalmente invariable para todas las personas gramaticales: [SUJETO] + [WILL HAVE] + [PARTICIPIO PASADO DEL VERBO PRINCIPAL]. Esta estructura es fundamental en el ámbito académico y profesional para enunciar objetivos de desarrollo, plazos de entrega de proyectos, hitos de carrera y metas de jubilación ('By the time he retires at sixty-five, he will have worked in healthcare for forty years'). Para formular la variante durativa ininterrumpida se utiliza el Future Perfect Continuous: 'By December, I will have been studying here for three years'.",
        [
            "Estructura compuesta invariable: Sujeto + WILL HAVE + Participio Pasado: 'By tomorrow morning, we will have completed the data migration'.",
            "La Preposición Regente BY (Para / A más tardar): Siempre señala la fecha límite futura: by next week, by five o'clock, by next summer, by the end of the year.",
            "Fórmula canónica con BY THE TIME: [By the time + Present Simple], [WILL HAVE + Participio]: 'By the time the professor arrives, we will have prepared the laboratory equipment'.",
            "Prohibición de 'will' tras By the time: La cláusula temporal tras by the time jamás admite will: 'By the time you ARRIVE' (correcto), 'By the time you will arrive' (inadmisible).",
            "Uso para metas, plazos de entrega y logros vitales: 'She will have saved ten thousand dollars by December', 'They will have built the new hospital by 2028'.",
            "Forma negativa: Sujeto + WON'T HAVE + Participio: 'I won't have finished the research report by Friday because I need more data'.",
            "Forma interrogativa: Will + Sujeto + have + Participio?: 'Will you have completed your coursework by the end of the term?'.",
            "Future Perfect Continuous (Duración acumulada en el futuro): WILL HAVE BEEN + Verbo-ING: 'By next month, I will have been living in London for exactly five years'."
        ],
        [
            "By the year 2035, international renewable energy consortiums will have constructed extensive offshore wind farms across the Pacific coastline. (Para el año 2035, los consorcios internacionales de energía renovable habrán construido extensos parques eólicos marinos a lo largo de la costa del Pacífico).",
            "She will have completed her postdoctoral research fellowship in biomedical engineering by the time she turns thirty years old. (Ella habrá completado su beca de investigación posdoctoral en ingeniería biomédica para cuando cumpla treinta años de edad).",
            "By the time the international technology summit commences in San Francisco, our software startup will have launched its mobile security application. (Para cuando comience la cumbre internacional de tecnología en San Francisco, nuestra empresa emergente de software habrá lanzado su aplicación móvil de seguridad).",
            "Will the construction contractors have finished renovating the university central library before the autumn academic term begins? (¿Habrán terminado los contratistas de construcción de renovar la biblioteca central universitaria antes de que comience el trimestre académico de otoño?)."
        ],
        [
            "By the end of this decade, the municipal transport authorities in London will have replaced all traditional diesel buses with fully electric vehicles. (Para finales de esta década, las autoridades municipales de transporte en Londres habrán reemplazado todos los autobuses diésel tradicionales por vehículos totalmente eléctricos).",
            "The senior legal team will have finalized all the commercial contracts and judicial briefings by Friday afternoon. (El equipo legal sénior habrá finalizado todos los contratos comerciales y los informes judiciales para el viernes por la tarde).",
            "By the time our commuter train reaches Edinburgh, we will have travelled more than four hundred miles across the British countryside. (Para cuando nuestro tren de cercanías llegue a Edimburgo, habremos viajado más de cuatrocientas millas a través de la campiña británica).",
            "He won't have saved enough financial capital to purchase a flat in central London by the time he completes his medical residency. (Él no habrá ahorrado suficiente capital financiero para comprar un departamento en el centro de Londres para cuando complete su residencia médica)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Are you worried about our final engineering project deadline next week, Jessica?", "translation": "¿Estás preocupada por la fecha límite de nuestro proyecto final de ingeniería la próxima semana, Jessica?"},
            {"speaker": "Jessica (UK)", "text": "A little bit, but by Friday afternoon we will have completed all the computer simulations and testing procedures.", "translation": "Un poco, pero para el viernes por la tarde habremos completado todas las simulaciones por computadora y los procedimientos de prueba."},
            {"speaker": "Austin (US)", "text": "That is reassuring! By the time we submit the final binder on Monday morning, we will have worked on this design for three full months.", "translation": "¡Eso es tranquilizador! Para cuando entreguemos la carpeta final el lunes por la mañana, habremos trabajado en este diseño durante tres meses completos."},
            {"speaker": "Jessica (UK)", "text": "Indeed! And by the end of next term, we will have graduated with our engineering degrees and received our official diplomas.", "translation": "¡En efecto! Y para finales del próximo trimestre, nos habremos graduado con nuestros títulos de ingeniería y habremos recibido nuestros diplomas oficiales."},
            {"speaker": "Austin (US)", "text": "It is exciting to look ahead! Will you have found a postgraduate job by the time our graduation ceremony takes place?", "translation": "¡Es emocionante mirar hacia adelante! ¿Habrás encontrado un trabajo de posgrado para cuando se celebre nuestra ceremonia de graduación?"},
            {"speaker": "Jessica (UK)", "text": "I hope so! I have already attended two interviews, so by next month I will have received their formal decision.", "translation": "¡Eso espero! Ya he asistido a dos entrevistas, así que para el próximo mes habré recibido su decisión formal."}
        ],
        [
            "Usar 'will' en la cláusula con by the time: decir 'By the time you will arrive, I will have finished'. La cláusula temporal va en presente simple: 'By the time you arrive, I will have finished'.",
            "Confundir Future Simple con Future Perfect: decir 'By next year I finish my degree' o 'I will finish my degree by next year' (la culminación antes de la fecha límite exige 'I will have finished').",
            "Omitir el participio pasado: escribir 'I will have finish'. Debe usarse la tercera columna: 'I will have finished'.",
            "Usar 'in' en lugar de 'by' para fechas límite: 'in Friday' no significa para el viernes; la fecha límite exige 'by Friday'.",
            "Olvidar que 'by' significa 'no más tarde de': no comprender que la acción puede concluir hoy, mañana o el jueves, siempre y cuando no pase del viernes."
        ],
        [
            "La Pareja de Baile BY y WILL HAVE: Siempre que veas la palabra 'BY' marcando una fecha límite futura ('by 2030', 'by next Friday', 'by the time...'), busca inmediatamente a su pareja inseparable: WILL HAVE + PARTICIPIO.",
            "La Máquina del Tiempo de las Metas: Imagínate parado en el 31 de diciembre mirando hacia atrás en el calendario y diciendo con orgullo: 'Para este día, habré terminado mi carrera' -> 'By this day, I will have finished my degree'.",
            "La Regla del Subjuntivo Oculto: Recuerda que 'By the time you ARRIVE' se escribe en presente simple en inglés, aunque en español digamos 'para cuando llegues'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/future_perfect.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 05: Tercer Condicional (Third Conditional): Hipótesis y Lamentos
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b2_lesson_05",
        "Clase 05: Tercer Condicional (Third Conditional): Hipótesis y Lamentos Pasados",
        "B2",
        "Oraciones Condicionales Hipotéticas",
        "El tercer condicional formula hipótesis contrafácticas sobre acontecimientos del pasado que nunca tuvieron lugar, evaluando consecuencias retrospectivas imposibles y articulando lamentos, arrepentimientos, alivio o críticas históricas.",
        "Cláusula de Condición Pasada Irreal: IF + Sujeto + Past Perfect (HAD / HADN'T + Participio). Cláusula de Resultado Pasado Irreal: Sujeto + WOULD HAVE ('d have) / COULD HAVE / MIGHT HAVE + Participio Pasado (Columna 3). Estructura canónica: If I had studied harder, I would have passed the exam (pero no estudié duro y reprobé) / If she had taken the train, she wouldn't have been late. Contracción oral informal: would've (/ˈwʊd.əv/).",
        "El Tercer Condicional (Third Conditional o Past Unreal Conditional) transporta la lógica condicional hacia la dimensión de lo irreversible y lo históricamente consumado. A diferencia del primer condicional (que contempla posibilidades futuras reales) y del segundo condicional (que fantasea con hipótesis imaginarias en el presente), el tercer condicional se sitúa en un pasado ya concluido y cerrado en el tiempo donde los hechos ocurrieron de una manera fija e inalterable. Su propósito lingüístico es formular una hipótesis contrafáctica retrospectiva: ¿qué habría sucedido si las circunstancias del pasado hubieran sido distintas a como realmente fueron? Por esta razón, el tercer condicional es el vehículo universal de los lamentos amargos, los arrepentimientos personales, el alivio ante una tragedia evitada por poco y el análisis de la causalidad histórica alternativa ('If Napoleon had not invaded Russia, European history would have been completely different'). Su arquitectura sintáctica opera mediante un doble distanciamiento temporal hacia el pasado más remoto: la cláusula condicional introducida por 'IF' adopta obligatoriamente el PAST PERFECT (had + participio pasado), mientras que la cláusula principal de resultado emplea el condicional perfecto compuesto mediante 'WOULD HAVE' seguido del participio pasado del verbo principal: [IF + Had + Participio], [WOULD HAVE + Participio]. En la cláusula de resultado, 'would have' puede alternar con 'COULD HAVE' para expresar capacidad o posibilidad física que no se materializó ('If I had had money, I could have bought the car'), o con 'MIGHT HAVE' para indicar probabilidad remota especulativa ('If we had left earlier, we might have caught the bus'). La prohibición capital de esta estructura radica en que jamás se debe colocar 'would have' dentro de la cláusula con 'if' (decir 'If I would have known' es un error grave en inglés estándar).",
        [
            "Estructura matemática invariable del Third Conditional: [IF + Past Perfect], [WOULD HAVE + Participio Pasado].",
            "Naturaleza 100% Contrafáctica e Imposible: Expresa lo opuesto a la realidad histórica: 'If I had studied, I would have passed' (Realidad: No estudié y reprobé).",
            "Expresión de Lamentos y Arrepentimientos (Regrets): 'If I hadn't spent all my money, I wouldn't have had financial problems'.",
            "Expresión de Alivio (Relief): 'If we hadn't worn our seatbelts, we would have been severely injured in the car crash'.",
            "Alternancia con COULD HAVE y MIGHT HAVE en el resultado: COULD HAVE = habría podido; MIGHT HAVE = tal vez habría ocurrido.",
            "Prohibición estricta de WOULD HAVE en la cláusula con IF: 'If I had known' (correcto), 'If I would have known' (error severo de interferencia).",
            "Contracciones orales y fonética: In speech: had -> 'd ('If I'd known'); would have -> would've (/ˈwʊd.əv/). En escritura informal a veces se comete el error ortográfico vulgar de escribir 'would of', lo cual está terminantemente prohibido.",
            "Inversión Condicional Formal (Had I known...): En registro culto formal y literario se puede omitir 'if' e invertir 'had': 'Had I known the truth, I would have acted differently'."
        ],
        [
            "If the aerospace research team had identified the thermal shield malfunction during pre-flight laboratory simulations, the satellite mission would not have suffered an orbital failure. (Si el equipo de investigación aeroespacial hubiera identificado la falla del escudo térmico durante las simulaciones de laboratorio previas al vuelo, la misión del satélite no habría sufrido una falla orbital).",
            "She would have secured the prestigious engineering scholarship at Stanford University if she had submitted her portfolio before the formal deadline. (Ella habría asegurado la prestigiosa beca de ingeniería en la Universidad de Stanford si hubiera presentado su portafolio antes de la fecha límite formal).",
            "If the emergency medical services had arrived five minutes later at the accident scene, the injured driver could have experienced severe hemorrhaging. (Si los servicios médicos de emergencia hubieran llegado cinco minutos más tarde al lugar del accidente, el conductor lesionado podría haber experimentado una hemorragia severa).",
            "We would have visited the Grand Canyon in Arizona during our road trip across the western United States if our vehicle hadn't broken down in Nevada. (Habríamos visitado el Gran Cañón en Arizona durante nuestro viaje por carretera a través del oeste de los Estados Unidos si nuestro vehículo no se hubiera averiado en Nevada)."
        ],
        [
            "If the railway signal operators had not reacted promptly to the track obstruction, the high-speed express train would have derailed outside London King's Cross. (Si los operadores de señales ferroviarias no hubieran reaccionado con prontitud a la obstrucción de la vía, el tren expreso de alta velocidad habría descarrilado en las afueras de Londres King's Cross).",
            "The headmaster would have approved the funding proposal for the new science laboratories if the faculty had presented a more balanced financial forecast. (El director habría aprobado la propuesta de financiamiento para los nuevos laboratorios de ciencias si la facultad hubiera presentado un pronóstico financiero más equilibrado).",
            "If they had checked the weather forecast before setting off into the Scottish Highlands, they would not have been trapped by the sudden blizzard. (Si hubieran consultado el pronóstico del tiempo antes de partir hacia las Tierras Altas de Escocia, no habrían quedado atrapados por la repentina tormenta de nieve).",
            "Had the commercial barrister known about the missing judicial documents earlier, he might have requested an adjournment of the trial. (Si el abogado litigante comercial hubiera sabido antes sobre los documentos judiciales faltantes, tal vez habría solicitado un aplazamiento del juicio)."
        ],
        [
            {"speaker": "Austin (US)", "text": "I heard that you had a terrible journey back from the international conference, Jessica. What happened with your flight?", "translation": "Escuché que tuviste un viaje terrible de regreso de la conferencia internacional, Jessica. ¿Qué sucedió con tu vuelo?"},
            {"speaker": "Jessica (UK)", "text": "If I had caught the early morning airport coach, I would have made my scheduled flight to London with plenty of time to spare.", "translation": "Si hubiera tomado el autobús temprano al aeropuerto, habría alcanzado mi vuelo programado a Londres con mucho tiempo de sobra."},
            {"speaker": "Austin (US)", "text": "Did you miss the coach? What caused the delay in your departure?", "translation": "¿Perdiste el autobús? ¿Qué causó el retraso en tu salida?"},
            {"speaker": "Jessica (UK)", "text": "My hotel alarm didn't ring! If my smartphone battery hadn't run out overnight, I wouldn't have overslept by nearly two hours.", "translation": "¡La alarma de mi hotel no sonó! Si la batería de mi teléfono no se hubiera agotado durante la noche, no me habría quedado dormida por casi dos horas."},
            {"speaker": "Austin (US)", "text": "That is awful! But at least you didn't have to pay a massive rebooking fee to catch the next flight.", "translation": "¡Eso es terrible! Pero al menos no tuviste que pagar una tarifa enorme de cambio de reserva para tomar el siguiente vuelo."},
            {"speaker": "Jessica (UK)", "text": "Yes, exactly. If the airline representative had been less accommodating, I could have lost the entire ticket value.", "translation": "Sí, exactamente. Si el representante de la aerolínea hubiera sido menos comprensivo, yo podría haber perdido todo el valor del billete."}
        ],
        [
            "Poner 'would have' en la cláusula con if: decir 'If I would have studied, I would have passed'. Es el error más severo; la condición exige Past Perfect: 'If I had studied, I would have passed'.",
            "Escribir el error fonético vulgar 'would of': escribir 'I would of passed'. La palabra 'of' es agramatical; la contracción es 'would've' (proveniente de WOULD HAVE).",
            "Confundir el condicional 2 con el 3: decir 'If I studied, I would have passed' (mezcla temporal incorrecta) en lugar de 'If I had studied, I would have passed'.",
            "Olvidar usar el participio pasado en alguna de las dos cláusulas: decir 'If I had study, I would have pass'. Ambas cláusulas exigen participio: 'If I had studied, I would have passed'.",
            "Omitir 'have' en la cláusula de resultado: decir 'I would passed the exam'. Debe ser 'I would have passed the exam'."
        ],
        [
            "La Máquina del Tiempo de los Lamentos: Imagina que viajas al pasado para cambiar la historia: en la condición cambias el pasado con [HAD + Participio], y en el resultado imaginas lo que habría sido con [WOULD HAVE + Participio].",
            "La Prohibición de 'WOULD OF': Grábate esto con letras de fuego: 'would of', 'could of' y 'should of' NO EXISTEN en la lengua inglesa. Es siempre WOULD HAVE, COULD HAVE, SHOULD HAVE.",
            "La Ecuación de los Dos Participios: Nota la simetría perfecta: ambas mitades de la oración terminan obligatoriamente con un verbo en participio pasado (Columna 3): had + [PARTICIPIO] / would have + [PARTICIPIO]."
        ],
        "https://www.englisch-hilfen.de/en/grammar/conditional_3.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 06: Condicionales Mixtos (Mixed Conditionals)
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b2_lesson_06",
        "Clase 06: Condicionales Mixtos (Mixed Conditionals)",
        "B2",
        "Condicionales Complejos",
        "Los condicionales mixtos combinan la temporalidad de la condición y la del resultado entre diferentes marcos cronológicos, vinculando predominantemente una causa pasada contrafáctica con un resultado presente vigente, o viceversa.",
        "Tipo Mixto 1 (Causa Pasada -> Consecuencia Presente): IF + Past Perfect (had + participio), WOULD + Verbo en forma base desnuda (ahora): If I had taken that job last year, I would be living in London today (pero no acepté el empleo y hoy no vivo en Londres). Tipo Mixto 2 (Condición Presente Permanente -> Consecuencia Pasada): IF + Past Simple (condición permanente actual), WOULD HAVE + Participio Pasado: If I were more organized, I wouldn't have forgotten the appointment yesterday.",
        "Los Condicionales Mixtos (Mixed Conditionals) representan el pináculo de la flexibilidad lógica y sintáctica en el dominio de las oraciones condicionales del nivel B2. En los condicionales canónicos estándar que se estudian tradicionalmente, ambas cláusulas pertenecen al mismo universo temporal: el segundo condicional vincula una hipótesis presente con un resultado presente ('If I were rich now, I would buy a car now'), mientras que el tercer condicional vincula una hipótesis pasada con un resultado pasado ('If I had studied yesterday, I would have passed yesterday'). Sin embargo, en el mundo real de la cognición y las vivencias humanas, la causa y el efecto frecuentemente trascienden las fronteras del tiempo: una decisión tomada hace diez años puede tener repercusiones directas sobre nuestra situación laboral en el día de hoy, o una cualidad psicológica intrínseca permanente que poseemos hoy puede haber determinado un error que cometimos la semana pasada. Para verbalizar estas realidades asimétricas, el inglés articula los condicionales mixtos mediante dos patrones canónicos fundamentales: Patrón Mixto Primario (Past -> Present): Una condición irreal en el pasado (Past Perfect) desencadena una consecuencia contrafáctica en el presente actual (Would + Verbo base). Ejemplo: 'If I HAD GONE to medical school five years ago, I WOULD BE a licensed doctor TODAY' (la realidad es que no fui a la escuela de medicina en el pasado y por tanto hoy no soy médico). Patrón Mixto Secundario (Present Permanent State -> Past Consequence): Una característica o estado permanente del sujeto en el presente (Past Simple con were) explica por qué ocurrió o no ocurrió un evento en el pasado (Would have + Participio). Ejemplo: 'If I SPOKE fluent German (pero no lo hablo de forma general), I WOULD HAVE APPLIED for that Berlin scholarship last month'.",
        [
            "Patrón Mixto 1 (Pasado irreal produce Resultado Presente irreal): [IF + Past Perfect], [WOULD + Verbo Base]: 'If I hadn't missed the flight yesterday, I WOULD BE in New York right now'.",
            "Patrón Mixto 2 (Estado Presente permanente produjo Resultado Pasado): [IF + Past Simple], [WOULD HAVE + Participio Pasado]: 'If she were more confident, she would have accepted the promotion last week'.",
            "Palabras clave de contraste temporal (NOW / TODAY vs. YESTERDAY): En el Tipo Mixto 1, la cláusula principal suele incorporar marcadores explícitos de presente como 'now', 'today' o 'currently'.",
            "Contraste con Third Conditional puro: Third Conditional = Pasado -> Pasado ('If I had studied, I would have passed the test yesterday'). Mixed 1 = Pasado -> Presente ('If I had passed the test yesterday, I would be celebrating today').",
            "Alternancia con modales hipotéticos en el resultado: Se pueden usar COULD o MIGHT en lugar de would para reflejar capacidad o posibilidad: 'If I had saved money, I COULD buy that house today'.",
            "Uso formal de WERE en la condición permanente: En el Patrón Mixto 2, se mantiene la regla del subjuntivo culto con were: 'If he WERE not so stubborn, he would have listened to our advice yesterday'.",
            "Regla de la coma sintáctica: Si la cláusula con IF abre la oración, se coloca una coma obligatoria entre ambas cláusulas.",
            "Uso en diagnósticos corporales y de salud: 'If I hadn't eaten those raw oysters last night, I wouldn't feel so nauseous right now'."
        ],
        [
            "If the software development team had resolved the database security vulnerabilities during testing last month, our clients would not be experiencing server outages today. (Si el equipo de desarrollo de software hubiera resuelto las vulnerabilidades de seguridad de la base de datos durante las pruebas el mes pasado, nuestros clientes no estarían experimentando cortes de servidor hoy).",
            "She would be working as a senior biomedical researcher at the metropolitan institute right now if she had accepted the university fellowship in Boston. (Ella estaría trabajando como investigadora biomédica sénior en el instituto metropolitano ahora mismo si hubiera aceptado la beca universitaria en Boston).",
            "If our chief electrical engineer were more familiar with modern artificial intelligence algorithms, he would have automated the laboratory sensors last year. (Si nuestro ingeniero eléctrico jefe estuviera más familiarizado con los algoritmos modernos de inteligencia artificial, habría automatizado los sensores de laboratorio el año pasado).",
            "We would not be lost in the middle of this dense national forest if you had downloaded the offline satellite navigation maps before setting out. (No estaríamos perdidos en medio de este denso bosque nacional si hubieras descargado los mapas de navegación satelital sin conexión antes de partir)."
        ],
        [
            "If I had completed my commercial law degree at Cambridge University five years ago, I would be practicing as a senior barrister in central London today. (Si hubiera completado mi carrera de derecho comercial en la Universidad de Cambridge hace cinco años, hoy estaría ejerciendo como abogado litigante sénior en el centro de Londres).",
            "The ancient cathedral in Canterbury would have collapsed during the severe gale force storms last winter if conservation masons had not reinforced the stone pillars. (La antigua catedral en Canterbury se habría derrumbado durante las severas tormentas con fuerza de vendaval el invierno pasado si los canteros de conservación no hubieran reforzado los pilares de piedra).",
            "If he were not so terrified of public speaking, he would have delivered the keynote address at the international academic symposium yesterday. (Si no le aterrorizara tanto hablar en público, habría pronunciado el discurso magistral en el simposio académico internacional ayer).",
            "Our commuter train would not be stranded on the tracks right now if the railway maintenance authorities had inspected the electrical signals earlier. (Nuestro tren de cercanías no estaría varado en las vías ahora mismo si las autoridades de mantenimiento ferroviario hubieran inspeccionado las señales eléctricas antes)."
        ],
        [
            {"speaker": "Austin (US)", "text": "You look like you are in terrible physical pain this morning, Jessica! Did you injure yourself?", "translation": "¡Parece que tienes un dolor físico terrible esta mañana, Jessica! ¿Te lesionaste?"},
            {"speaker": "Jessica (UK)", "text": "I twisted my ankle playing tennis yesterday. If I had worn my supportive athletic shoes, I wouldn't be limping around campus today.", "translation": "Me torcí el tobillo jugando al tenis ayer. Si me hubiera puesto mis zapatos deportivos con soporte, hoy no estaría cojeando por el campus."},
            {"speaker": "Austin (US)", "text": "That is an unfortunate accident! Did you go to the student health center to have an X-ray taken?", "translation": "¡Ese es un accidente desafortunado! ¿Fuiste al centro de salud estudiantil a hacerte tomar una radiografía?"},
            {"speaker": "Jessica (UK)", "text": "Yes, I had it examined last night. If the doctor hadn't bandaged it securely, I wouldn't even be able to walk to lectures this morning.", "translation": "Sí, me lo hicieron examinar anoche. Si el médico no me lo hubiera vendado firmemente, ni siquiera sería capaz de caminar a las clases esta mañana."},
            {"speaker": "Austin (US)", "text": "If you weren't so stubborn, you would have stayed in bed resting instead of walking all the way across the quad!", "translation": "¡Si no fueras tan obstinada, te habrías quedado en cama descansando en lugar de caminar por todo el cuadrilátero!"},
            {"speaker": "Jessica (UK)", "text": "You are probably right, Austin! But missing our advanced chemistry seminar was simply not an option for me.", "translation": "¡Probablemente tengas razón, Austin! Pero perderme nuestro seminario avanzado de química simplemente no era una opción para mí."}
        ],
        [
            "Usar 'would have + participio' en el resultado cuando la consecuencia es presente: decir 'If I had studied, I would have been a doctor now'. Al llevar 'now' la consecuencia es presente y exige 'would be': 'I would be a doctor now'.",
            "Usar 'would have' en la cláusula con if: decir 'If I would have taken that job, I would be rich'. En la condición debe ser Past Perfect: 'If I had taken that job, I would be rich'.",
            "No prestar atención a los marcadores temporales: ignorar palabras como 'now', 'today' o 'yesterday' que señalan qué mitad de la oración pertenece al pasado y cuál al presente.",
            "Mezclar tiempos al azar sin lógica de causa y efecto: construir oraciones sin coherencia temporal entre la condición y la consecuencia.",
            "Olvidar que las características permanentes usan Past Simple en la condición: 'If I were taller (característica física actual), I would have joined the team last year'."
        ],
        [
            "La Prueba del Reloj de Dos Tiempos: Pregúntate siempre: ¿Cuándo ocurrió la condición? (¿Ayer? -> HAD + Participio). ¿Cuándo se siente la consecuencia? (¿Hoy? -> WOULD + Verbo Base).",
            "La Pista de NOW en el Resultado: Si ves la palabra 'NOW', 'TODAY' o 'RIGHT NOW' en la segunda parte de la oración condicional, ¡enciende la alarma de Condicional Mixto!: usa 'WOULD + Verbo Base'.",
            "Fórmula de Rescate: [Decisión en el Pasado con HAD] -> [Situación Actual con WOULD]: 'If I had bought Bitcoin in 2010, I would be a millionaire today'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/mixed_conditionals.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 07: Estilo Indirecto (Reported Speech): Corrimiento de Tiempos
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b2_lesson_07",
        "Clase 07: Estilo Indirecto (Reported Speech): Corrimiento de Tiempos (Backshift)",
        "B2",
        "Estilo Indirecto & Discurso",
        "El estilo indirecto reproduce el contenido semántico de declaraciones previas emitidas por otros hablantes adaptando la deixis temporal mediante el corrimiento obligatorio de tiempos verbales (backshift), la reconfiguración de pronombres y el ajuste de adverbios deícticos.",
        "Regla General de Corrimiento Verbal (Backshift) cuando el verbo introductorio está en pasado (said / told): Present Simple -> Past Simple (work -> worked). Present Continuous -> Past Continuous (is working -> was working). Past Simple / Present Perfect -> Past Perfect (worked / has worked -> HAD WORKED). Will -> WOULD. Can -> COULD. May -> MIGHT. Must / Have to -> HAD TO. Ajustes deícticos: now -> then, today -> that day, yesterday -> the day before, tomorrow -> the following day, here -> there, this -> that.",
        "El estilo indirecto (Reported Speech o Indirect Speech) es una de las competencias lingüísticas más complejas y trascendentales de nivel B2, exigiendo una reestructuración mental completa de la perspectiva enunciativa. Mientras que el estilo directo (Direct Speech) cita textualmente entre comillas las palabras exactas pronunciadas por el emisor original ('He said: \"I am working on a new project today\"'), el estilo indirecto disuelve las comillas para relatar el mensaje desde la perspectiva temporal y espacial del hablante actual ('He said THAT he WAS WORKING on a new project THAT DAY'). Cuando el verbo introductorio de notificación se encuentra en tiempo pasado (said, told, explained, stated), el idioma inglés aplica de manera sistemática la ley del 'corrimiento temporal hacia atrás' o 'Backshift': cada tiempo verbal de la oración original debe dar un paso retrospectivo hacia el pasado. Por consiguiente: el Present Simple retrocede hacia el Past Simple ('I like tea' -> He said he liked tea); el Present Continuous retrocede hacia el Past Continuous ('I am reading' -> He said he was reading); el Past Simple y el Present Perfect retroceden ambos inevitablemente hacia el Past Perfect ('I saw Carlos' / 'I have seen Carlos' -> He said he had seen Carlos); y los modales auxiliares adoptan sus formas de pasado histórico (will -> would, can -> could, may -> might, must/have to -> had to). No obstante, el backshift no opera de forma aislada: exige simultáneamente una reconfiguración deíctica coherente de los pronombres personales (I -> he/she; we -> they; my -> his/her) y de los marcadores espaciales y temporales que anclaban la frase al momento original: 'now' se convierte en 'then' o 'at that time'; 'today' se transforma en 'that day'; 'yesterday' muta a 'the day before' o 'the previous day'; 'tomorrow' se convierte en 'the following day' o 'the next day'; 'here' se transforma en 'there'; y 'this' muta a 'that'. Existe una excepción pragmática moderna: si la afirmación sigue siendo una verdad científica universal o un hecho plenamente vigente en el presente en que se reporta, el backshift es opcional ('The teacher said that the Earth revolves around the Sun').",
        [
            "Ley del Backshift Obligatorio (con verbos introductorios en pasado): Todo tiempo verbal retrocede un peldaño hacia el pasado.",
            "Tabla de correspondencia temporal: Present Simple -> Past Simple; Present Continuous -> Past Continuous; Past Simple -> Past Perfect; Present Perfect -> Past Perfect; Past Continuous -> Past Perfect Continuous.",
            "Tabla de correspondencia de modales: Will -> WOULD; Can -> COULD; May -> MIGHT; Must/Have to -> HAD TO. Modales que no cambian: would, could, should, might, ought to se mantienen idénticos.",
            "Diferenciación crucial SAY vs. TELL: 'SAY' no lleva objeto de persona indirecto sin preposición ('He said that...'); 'TELL' exige obligatoriamente la persona a quien se habla sin preposición ('He told ME that...', 'She told CARLOS that...').",
            "Ajustes deícticos temporales obligatorios: now -> then; today -> that day; tonight -> that night; yesterday -> the day before / the previous day; tomorrow -> the next day / the following day; last week -> the week before; ago -> before.",
            "Ajustes deícticos espaciales y demostrativos: here -> there; this -> that; these -> those.",
            "Uso opcional de la conjunción THAT: En estilo indirecto, 'that' puede omitirse en registro informal: 'He said (that) he was tired'.",
            "Excepción de Verdad Permanente: Si el hecho reportado sigue siendo una ley natural o una realidad invariable, el tiempo verbal puede conservarse en presente: 'She explained that water freezes at zero degrees'."
        ],
        [
            "The chief biomedical researcher stated that her laboratory team had successfully identified the genetic sequence responsible for cellular regeneration. (La investigadora biomédica jefa declaró que su equipo de laboratorio había identificado con éxito la secuencia genética responsable de la regeneración celular).",
            "The university president announced yesterday that all undergraduate tuition fees would remain frozen throughout the following academic year. (El presidente de la universidad anunció ayer que todas las tasas de matrícula de pregrado permanecerían congeladas a lo largo del siguiente año académico).",
            "My software engineering colleague told me that he was developing an innovative machine learning algorithm for autonomous navigation systems. (Mi colega de ingeniería de software me dijo que estaba desarrollando un algoritmo innovador de aprendizaje automático para sistemas de navegación autónomos).",
            "The meteorologist explained that a severe winter storm was moving rapidly towards the metropolitan area and warned citizens to remain indoors. (El meteorólogo explicó que una severa tormenta invernal se estaba moviendo rápidamente hacia el área metropolitana y advirtió a los ciudadanos que permanecieran en el interior)."
        ],
        [
            "The headmaster informed the assembled pupils that the school governors had approved substantial funding for the renovation of the science laboratories. (El director informó a los alumnos congregados que los gobernadores escolares habían aprobado una financiación sustancial para la renovación de los laboratorios de ciencias).",
            "She mentioned that she had lived in central London for over a decade before relocating to a charming countryside cottage near Cambridge. (Ella mencionó que había vivido en el centro de Londres durante más de una década antes de trasladarse a una encantadora casa de campo cerca de Cambridge).",
            "The commercial solicitor explained that the judicial contracts had already been signed by all international corporate representatives the previous afternoon. (El abogado litigante comercial explicó que los contratos judiciales ya habían sido firmados por todos los representantes corporativos internacionales la tarde anterior).",
            "He confessed to his personal tutor that he had been struggling with advanced mathematics coursework and requested additional revision sessions. (Él confesó a su tutor personal que había estado batallando con los cursos de matemáticas avanzadas y solicitó sesiones de repaso adicionales)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Did you speak with Dr. Miller about our physics laboratory research project yesterday, Jessica?", "translation": "¿Hablaste con el Dr. Miller sobre nuestro proyecto de investigación de laboratorio de física ayer, Jessica?"},
            {"speaker": "Jessica (UK)", "text": "Yes, I did. He told me that our experimental methodology was exceptionally solid, but he noted that we needed more data.", "translation": "Sí, hablé con él. Me dijo que nuestra metodología experimental era excepcionalmente sólida, pero señaló que necesitábamos más datos."},
            {"speaker": "Austin (US)", "text": "Did he say anything about when we had to submit the revised calculations?", "translation": "¿Dijo algo sobre cuándo teníamos que entregar los cálculos revisados?"},
            {"speaker": "Jessica (UK)", "text": "He explained that we had to upload the complete portfolio by the following Monday at midnight.", "translation": "Explicó que teníamos que subir el portafolio completo para el siguiente lunes a la medianoche."},
            {"speaker": "Austin (US)", "text": "Did he mention whether he would be available during office hours to review our computer code?", "translation": "¿Mencionó si él estaría disponible durante las horas de oficina para revisar nuestro código computacional?"},
            {"speaker": "Jessica (UK)", "text": "Yes, he confirmed that he would be in his office all afternoon on Thursday to assist any students.", "translation": "Sí, confirmó que estaría en su oficina toda la tarde el jueves para asistir a cualquier estudiante."}
        ],
        [
            "Confundir SAY y TELL: decir 'He said me that...' o 'He told that...'. Con 'tell' la persona es obligatoria sin to ('He told me'); con 'say' no se pone persona ('He said that...').",
            "Olvidar aplicar el backshift: decir 'He told me that he is tired yesterday'. Debe aplicarse el corrimiento al pasado: 'He told me that he WAS tired'.",
            "Olvidar cambiar los adverbios de tiempo: dejar 'yesterday' o 'tomorrow' intactos al reportar un hecho antiguo; deben cambiarse a 'the day before' y 'the following day'.",
            "Olvidar cambiar los pronombres personales: reportar 'He said: I like coffee' como 'He said that I like coffee' (parece que hablas de ti mismo; debe ser 'He said that HE liked coffee').",
            "Intentar hacer backshift a modales que no cambian: intentar cambiar 'would', 'could' o 'should' a formas inexistentes; estos modales se conservan exactamente iguales."
        ],
        [
            "La Escalera Mecánica Hacia el Pasado: Cada vez que veas un verbo de reporte en pasado (SAID / TOLD), imagina una escalera mecánica que hace retroceder un escalón a todos los verbos: Presente -> Pasado; Pasado -> Pasado Perfecto; Will -> Would; Can -> Could.",
            "La Regla de ORO de SAY vs. TELL: 'TELL' siempre necesita un compañero pegado a su lado (Tell ME, tell HIM, tell CARLOS). 'SAY' camina solo o va directo al puente THAT (Say THAT...).",
            "El Detector de Palabras Trampa: Haz una lista mental de 3 transformaciones deícticas obligatorias: today -> that day; tomorrow -> the next day; yesterday -> the day before."
        ],
        "https://www.englisch-hilfen.de/en/grammar/reported_speech.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 08: Reported Speech: Preguntas Indirectas y Comandos
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b2_lesson_08",
        "Clase 08: Reported Speech: Preguntas Indirectas y Comandos",
        "B2",
        "Estilo Indirecto & Interrogación",
        "El estilo indirecto transforma las preguntas en oraciones declarativas afirmativas suprimiendo los auxiliares de inversión (do/does/did) e incorporando if o whether para interrogaciones cerradas, adaptando mandatos mediante infinitivos con to.",
        "Reporte de Preguntas Cerradas (Yes/No questions): Sujeto + ASKED (+ persona) + IF / WHETHER + Sujeto + Verbo con backshift: She asked me IF I lived in London (orden declarativo sujeto-verbo, sin do/did ni signos de interrogación). Reporte de Preguntas Abiertas (Wh- questions): Sujeto + ASKED + WH- WORD + Sujeto + Verbo con backshift: He asked WHERE I had worked. Reporte de Órdenes e Instrucciones (Imperativos): Sujeto + TOLD / ORDERED / ASKED + Persona + TO + Verbo base: The doctor told me TO drink more water / Mandato negativo: NOT TO + Verbo base: He told us NOT TO touch the equipment.",
        "La transposición de preguntas y mandatos directos hacia el estilo indirecto (Reported Questions and Commands) representa uno de los saltos cualitativos más exigentes en la sintaxis de nivel B2. La dificultad psicológica radica en que cuando una pregunta directa se transforma en estilo indirecto, PIERDE POR COMPLETO SU CONDICIÓN DE PREGUNTA: deja de ser una interrogación formal para convertirse sintácticamente en una cláusula declarativa subordinada afirmativa. Por esta razón ontológica, rigen tres leyes estructurales ineludibles: Primera ley: SE SUPRIME LA INVERSIÓN SUJETO-VERBO Y SE ELIMINAN LOS AUXILIARES DO, DOES Y DID. El orden de las palabras retorna rigurosamente al esquema canónico afirmativo [SUJETO antes del VERBO]. Decir 'She asked me where did I live' es una falta gravísima; la forma correcta es 'She asked me WHERE I LIVED'. Tampoco se colocan jamás signos de interrogación al final de la oración indirecta. Segunda ley: si la pregunta original era cerrada (Yes/No question) y carecía de partícula interrogativa Wh-, el estilo indirecto debe insertar obligatoriamente la conjunción subordinante 'IF' o la más formal 'WHETHER' (/ˈweð.ər/): 'Are you ready?' se convierte en 'She asked IF I was ready'. Tercera ley: para el reporte de órdenes, instrucciones, peticiones y prohibiciones (imperativos directos), el inglés no utiliza cláusulas verbales con backshift tradicional, sino una estructura infinitiva extraordinariamente limpia: el verbo introductorio de mandato (told, ordered, instructed, advised, warned) rige a la persona receptora seguida de un INFINITIVO CON 'TO': 'Sit down!' se transforma en 'He told me TO sit down'. Si la orden original era negativa ('Don't touch that!'), la partícula de negación 'NOT' se antepone directamente a la partícula 'to': 'He told me NOT TO touch that'.",
        [
            "Eliminación total del orden interrogativo: La pregunta reportada adopta el orden declarativo: Sujeto + Verbo. Jamás se usan do, does ni did en preguntas indirectas.",
            "Preguntas abiertas (Wh-): Se mantiene la palabra interrogativa como conector: 'Where do you work?' -> 'She asked me WHERE I worked'.",
            "Preguntas cerradas (Yes/No): Exigen obligatoriamente IF o WHETHER como nexo: 'Do you speak English?' -> 'He asked IF I spoke English'.",
            "Supresión absoluta del signo de interrogación (?): La oración termina con un punto ordinario (.) porque es una aseveración declarativa, no una pregunta directa.",
            "Reporte de Mandatos Afirmativos (Imperativo): Sujeto + TOLD / ASKED + Persona + TO + Verbo base: 'Close the door' -> 'She told me TO close the door'.",
            "Reporte de Mandatos Negativos (Don't...): Sujeto + TOLD + Persona + NOT TO + Verbo base: 'Don't be late' -> 'He told us NOT TO be late'.",
            "Verbos introductorios de mandato y cortesía: TOLD (orden neutral), ORDERED (orden jerárquica militar), ASKED (petición de favor cortés), WARNED (advertencia de peligro: warned me not to go), ADVISED (consejo profesional).",
            "Uso de WHETHER con alternativas (OR NOT): 'Whether' es más formal que if y es obligatorio si va seguido de 'or not': 'She asked WHETHER OR NOT I was attending'."
        ],
        [
            "The university admissions officer asked me whether I had completed all the formal prerequisite courses in advanced mathematics. (El oficial de admisiones universitarias me preguntó si yo había completado todos los cursos formales de prerrequisito en matemáticas avanzadas).",
            "The senior laboratory technician instructed the undergraduate researchers to calibrate the optical sensors carefully before recording the results. (El técnico sénior de laboratorio instruyó a los investigadores de pregrado a calibrar los sensores ópticos cuidadosamente antes de registrar los resultados).",
            "She asked the conference coordinator where the international keynote speakers were staying during the annual aerospace symposium. (Ella le preguntó al coordinador de la conferencia dónde se estaban alojando los oradores principales internacionales durante el simposio aeroespacial anual).",
            "The police detective warned the building occupants not to touch any physical evidence inside the office until forensic investigators arrived. (El detective de policía advirtió a los ocupantes del edificio que no tocaran ninguna evidencia física dentro de la oficina hasta que llegaran los investigadores forenses)."
        ],
        [
            "The commercial solicitor asked his corporate client whether he had reviewed the confidential financial disclosures thoroughly. (El abogado litigante comercial le preguntó a su cliente corporativo si había revisado minuciosamente las revelaciones financieras confidenciales).",
            "The headmaster ordered all pupils to assemble in the historic cathedral auditorium immediately following the morning break. (El director ordenó a todos los alumnos congregarse en el auditorio de la histórica catedral inmediatamente después de la pausa de la mañana).",
            "She enquired how long the train journey from London Euston to Manchester Piccadilly would take during peak commuter hours. (Ella indagó cuánto tiempo tomaría el viaje en tren de Londres Euston a Manchester Piccadilly durante las horas pico de pasajeros).",
            "The doctor advised the patient not to engage in strenuous athletic exercise until his knee ligaments had healed completely. (El médico aconsejó al paciente no realizar ejercicio atlético extenuante hasta que los ligamentos de su rodilla hubieran sanado por completo)."
        ],
        [
            {"speaker": "Austin (US)", "text": "What did the university career advisor ask you during your professional consultation this morning, Jessica?", "translation": "¿Qué te preguntó el asesor de carreras universitarias durante tu consulta profesional esta mañana, Jessica?"},
            {"speaker": "Jessica (UK)", "text": "She asked me what kind of biotechnology companies I was interested in, and she asked if I had prepared an updated CV.", "translation": "Me preguntó en qué tipo de empresas de biotecnología estaba interesada, y me preguntó si había preparado un currículum actualizado."},
            {"speaker": "Austin (US)", "text": "Did she tell you to apply for the international laboratory internship in Boston that opened yesterday?", "translation": "¿Te dijo que postularas a la pasantía de laboratorio internacional en Boston que abrió ayer?"},
            {"speaker": "Jessica (UK)", "text": "Yes, she told me to submit my application as soon as possible, and she warned me not to leave any section incomplete.", "translation": "Sí, me dijo que enviara mi solicitud tan pronto como fuera posible, y me advirtió que no dejara ninguna sección incompleta."},
            {"speaker": "Austin (US)", "text": "Did she ask how many academic references you had gathered from your chemistry professors?", "translation": "¿Preguntó cuántas referencias académicas habías recopilado de tus profesores de química?"},
            {"speaker": "Jessica (UK)", "text": "Yes, she asked who my referees were, and she instructed me to contact them today to request recommendation letters.", "translation": "Sí, me preguntó quiénes eran mis referencias, y me instruyó a contactarlos hoy para solicitar cartas de recomendación."}
        ],
        [
            "Mantener el orden de pregunta en el estilo indirecto: decir 'She asked me where did I live' o 'He asked me what was my name'. Debe adoptarse el orden afirmativo: 'She asked me where I lived', 'He asked me what my name was'.",
            "Poner signo de interrogación en una pregunta reportada: escribir 'He asked if I was ready?'. Es una oración declarativa; termina en punto: 'He asked if I was ready.'.",
            "Omitir 'if' o 'whether' en preguntas cerradas: decir 'She asked me I wanted coffee'. La subordinada cerrada exige if/whether: 'She asked me IF I wanted coffee'.",
            "Reportar imperativos con 'that': decir 'He told me that sit down'. Los mandatos se reportan con infinitivo: 'He told me TO sit down'.",
            "Colocar mal el 'not' en mandatos negativos: decir 'He told me to not be late'. La norma canónica estricta coloca not antes de to: 'He told me NOT TO be late'."
        ],
        [
            "La Desactivación de la Bomba de Inversión: Cuando una pregunta entra al estilo indirecto, se desarma por completo: corta el cable del signo de interrogación (?) y tira a la basura a los auxiliares DO, DOES y DID. La frase se vuelve una oración pacífica [Sujeto + Verbo].",
            "La Pareja IF / WHETHER: Si la pregunta original de la persona no tenía Wh- y se contestaba con Yes o No ('Do you speak English?'), ¡coloca siempre IF o WHETHER como puente salvavidas!",
            "La Fórmula del Mandato Infinitivo: Para órdenes e instrucciones, no sufras con backshift: simplemente di 'Told [alguien] TO [hacer algo]' o 'Told [alguien] NOT TO [hacer algo]'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/reported_questions.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 09: Verbos de Notificación Complejos (Reporting Verbs)
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b2_lesson_09",
        "Clase 09: Verbos de Notificación Complejos (Reporting Verbs)",
        "B2",
        "Verbos de Notificación Avanzados",
        "Los verbos de notificación avanzados enriquecen la precisión comunicativa y el registro académico al reemplazar a los elementales say y tell mediante patrones sintácticos de complementación infinitiva, gerundial y preposicional.",
        "Patrón 1 (Verbo + TO + Infinitivo): offer, promise, refuse, agree, threaten: He OFFERED TO help us / She REFUSED TO sign. Patrón 2 (Verbo + Persona + TO + Infinitivo): advise, encourage, remind, invite, warn, persuade: She ADVISED ME TO study / He REMINDED US TO submit the report. Patrón 3 (Verbo + Gerundio -ING): admit, deny, recommend, suggest: He DENIED STEALING the money / She SUGGESTED MEETING at noon. Patrón 4 (Verbo + Preposición + -ING): apologize for, insist on, accuse someone of: He APOLOGIZED FOR BEING late / She ACCUSED HIM OF LYING. Patrón 5 (Verbo + THAT + Cláusula): explain, claim, confirm, admit, insist: He EXPLAINED THAT the train was delayed.",
        "En el nivel intermedio alto B2 y en la redacción académica y periodística profesional, la dependencia excesiva de los verbos rudimentarios 'say' y 'tell' resulta monótona, simplista e infantil. Un redactor maduro necesita capturar con exactitud no solo qué palabras se pronunciaron, sino la INTENCIÓN ILOCUTIVA, la emoción, la actitud psicológica y el propósito retórico del emisor original. Si alguien dice 'I didn't break the window', reportarlo como 'He said he didn't break the window' es pobre; reportarlo como 'He DENIED BREAKING the window' es elegante, sintético y preciso. Estos verbos especializados se denominan 'Reporting Verbs' y se organizan en cinco patrones sintácticos de complementación verbal que deben dominarse con absoluta destreza: Patrón 1: Verbo seguido directamente de infinitivo con 'TO' (offer to help, promise to call, refuse to cooperate, threaten to sue, agree to participate). Patrón 2: Verbo que exige la persona receptora antes del infinitivo con 'TO' (advise someone to wait, encourage someone to apply, remind someone to lock, invite someone to come, warn someone not to touch, persuade someone to agree). Patrón 3: Verbo seguido de GERUNDIO en '-ING' sin preposición (admit doing, deny committing, suggest going, recommend reading). Especial atención merece el verbo 'SUGGEST': jamás se dice 'He suggested me to go'; se dice obligatoriamente 'He suggested GOING' o 'He suggested THAT I should go'. Patrón 4: Verbo con régimen preposicional específico seguido de gerundio (apologize FOR arriving late, insist ON paying, congratulate someone ON winning, accuse someone OF cheating). Patrón 5: Verbo seguido de cláusula con 'THAT' (explain that, claim that, confirm that, emphasize that, argue that).",
        [
            "Patrón 1 (Verbo + TO + Infinitivo): offer, promise, refuse, agree, decide, threaten: 'He refused to disclose the confidential source'.",
            "Patrón 2 (Verbo + Objeto de Persona + TO + Infinitivo): advise, remind, warn, encourage, invite, persuade, convince: 'She encouraged me to apply for the fellowship'.",
            "Patrón 3 (Verbo + Gerundio directo -ING): admit, deny, recommend, suggest: 'He denied stealing the laptop', 'She recommended reading this textbook'.",
            "Regla de oro prohibitiva con SUGGEST y RECOMMEND: NUNCA admiten 'persona + to + infinitivo': decir 'He suggested me to buy a car' es un error gravísimo. Debe ser 'He suggested buying a car' o 'He suggested that I buy a car'.",
            "Patrón 4 (Verbo + Preposición + -ING): apologize FOR (disculparse por), insist ON (insistir en), accuse someone OF (acusar a alguien de), congratulate someone ON (felicitar por): 'She apologized for being late', 'They accused him of plagiarizing'.",
            "Patrón 5 (Verbo + THAT + Cláusula): claim that (afirmar sin pruebas), explain that, admit that, argue that, point out that: 'The scientist claimed that the experiment was conclusive'.",
            "Uso académico formal: En ensayos universitarios los reporting verbs son indispensables: 'Dr. Smith argues that...', 'Researchers suggest that...'.",
            "Negación en patrones de gerundio e infinitivo: Se coloca NOT antes del infinitivo o gerundio: 'He promised NOT TO tell anyone', 'She admitted NOT DOING the homework'."
        ],
        [
            "The senior aerospace engineer offered to assist the undergraduate research team with the complex telemetry software simulations. (El ingeniero aeroespacial sénior se ofreció a ayudar al equipo de investigación de pregrado con las complejas simulaciones de software de telemetría).",
            "The corporate defense attorney firmly advised his client not to make any public statements to journalists before the judicial trial commenced. (El abogado defensor corporativo aconsejó firmemente a su cliente no hacer declaraciones públicas a los periodistas antes de que comenzara el juicio judicial).",
            "The technological firm vehemently denied violating international digital copyright regulations in the development of their mobile application. (La firma tecnológica negó vehementemente violar las regulaciones internacionales de derechos de autor digitales en el desarrollo de su aplicación móvil).",
            "The university professor congratulated the biomedical research students on winning first prize in the national innovation competition. (La profesora universitaria felicitó a los estudiantes de investigación biomédica por ganar el primer premio en el concurso nacional de innovación)."
        ],
        [
            "The commercial solicitor apologized profusely for being delayed by severe traffic congestion along the central London motorway network. (El abogado litigante comercial se disculpó profusamente por retrasarse debido a la severa congestión del tráfico a lo largo de la red de autopistas del centro de Londres).",
            "The headmaster suggested establishing an evening study seminar to help upper-sixth form pupils prepare for their university entrance examinations. (El director sugirió establecer un seminario de estudio vespertino para ayudar a los alumnos del último año de secundaria a prepararse para sus exámenes de admisión universitaria).",
            "Conservation experts warned the municipal authorities that the ancient stone cathedral faced structural risks from underground vibration. (Los expertos en conservación advirtieron a las autoridades municipales que la antigua catedral de piedra enfrentaba riesgos estructurales debido a la vibración subterránea).",
            "She reminded her university flatmates to lock the front entrance door securely whenever they left the residential building unattended. (Ella les recordó a sus compañeros de piso universitario que cerraran la puerta de entrada principal con llave de forma segura cada vez que dejaran el edificio residencial desatendido)."
        ],
        [
            {"speaker": "Austin (US)", "text": "What did the research committee decide regarding our laboratory funding proposal, Jessica?", "translation": "¿Qué decidió el comité de investigación respecto a nuestra propuesta de financiamiento de laboratorio, Jessica?"},
            {"speaker": "Jessica (UK)", "text": "The department head explained that our initial budget was too high, but he encouraged us to submit a revised application.", "translation": "El jefe de departamento explicó que nuestro presupuesto inicial era demasiado alto, pero nos animó a presentar una solicitud revisada."},
            {"speaker": "Austin (US)", "text": "Did he suggest reducing the expenditure on the new optical sensors?", "translation": "¿Sugirió él reducir el gasto en los nuevos sensores ópticos?"},
            {"speaker": "Jessica (UK)", "text": "Yes, he suggested buying reconditioned laboratory equipment instead, and he offered to review our updated figures tomorrow.", "translation": "Sí, sugirió comprar equipo de laboratorio reacondicionado en su lugar, y se ofreció a revisar nuestras cifras actualizadas mañana."},
            {"speaker": "Austin (US)", "text": "That is very supportive of him! Did he warn us about any upcoming budget deadlines?", "translation": "¡Eso es muy solidario de su parte! ¿Nos advirtió sobre alguna fecha límite de presupuesto próxima?"},
            {"speaker": "Jessica (UK)", "text": "He reminded us not to delay our resubmission because the university financial window closes on Friday afternoon.", "translation": "Nos recordó que no demoráramos nuestro reenvío porque la ventana financiera de la universidad se cierra el viernes por la tarde."}
        ],
        [
            "Usar 'suggest' con persona e infinitivo: decir 'He suggested me to go'. Es uno de los errores más penalizados en inglés; debe ser 'He suggested going' o 'He suggested that I go'.",
            "Usar 'recommend' con persona e infinitivo: decir 'She recommended me to read this book'. Debe ser 'She recommended reading this book' o 'She recommended that I read it'.",
            "Omitir la preposición tras apologize o congratulate: decir 'He apologized being late' (falta for) o 'She congratulated me winning' (falta on).",
            "Poner la preposición incorrecta con accuse: decir 'He accused me for lying'. El régimen obligatorio es ACCUSE OF: 'He accused me of lying'.",
            "Omitir la persona con remind o advise: decir 'She reminded to close the door'. Estos verbos exigen el objeto de persona: 'She reminded ME to close the door'."
        ],
        [
            "La Alarma de SUGGEST y RECOMMEND: Pon un letrero de neón intermitente en tu mente: 'SUGGEST y RECOMMEND NUNCA llevan persona + to + infinitivo'. Siempre van con -ING directo ('He suggested going') o con THAT ('He suggested that we go').",
            "Agrupa los Verbos por su Pegamento Sintáctico: 1) Los que llevan TO directo (offer, promise, refuse); 2) Los que llevan Persona + TO (advise me to, remind me to); 3) Los que llevan -ING (admit, deny, suggest).",
            "El Salto de Nivel en Ensayos: Cada vez que sientas la tentación de escribir 'He said that...', tápalo y sustitúyelo por: argued that, pointed out that, claimed that, o insisted that."
        ],
        "https://www.englisch-hilfen.de/en/grammar/reporting_verbs.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 10: Verbo + Gerundio vs. Infinitivo con Cambio de Sentido
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b2_lesson_10",
        "Clase 10: Verbo + Gerundio vs. Infinitivo con Cambio Radical de Sentido",
        "B2",
        "Complementación Verbal",
        "Ciertos verbos de complementación verbal admiten indistintamente tanto el infinitivo con to como el gerundio en -ing, pero alterando radicalmente su significado semántico entre acciones futuras retrospectivas y procesos en desarrollo.",
        "STOP: Stop + TO + Base = Detenerse para hacer otra cosa (He stopped to smoke). Stop + -ING = Cesar o abandonar definitivamente una actividad (He stopped smoking). REMEMBER: Remember + TO + Base = Recordar hacer una tarea pendiente (Remember to lock the door). Remember + -ING = Recordar una memoria o vivencia del pasado (I remember visiting London). FORGET: Forget + TO + Base = Olvidar hacer una obligación (I forgot to buy milk). Forget + -ING = Olvidar una experiencia pasada imborrable (I will never forget meeting the president). REGRET: Regret + TO + Base = Lamentar tener que comunicar una mala noticia (We regret to inform you). Regret + -ING = Arrepentirse de una acción cometida en el pasado (I regret saying those words). TRY: Try + TO + Base = Esforzarse con dificultad (I tried to lift the box). Try + -ING = Experimentar con un método para ver si funciona (Try taking an aspirin).",
        "El fenómeno de la complementación verbal con cambio de significado (Verbs followed by Gerund or Infinitive with a change in meaning) representa uno de los temas más fascinantes, profundos y evaluados de la gramática de nivel B2. Mientras que la mayoría de los verbos en inglés eligen rígidamente solo infinitivo (decide to, afford to, hope to) o solo gerundio (enjoy doing, avoid doing, admit doing), o admiten ambos sin cambio sustancial de significado (start, begin, continue), un selecto grupo de verbos cardinales (STOP, REMEMBER, FORGET, REGRET, TRY, MEAN) muta radicalmente su sentido según se construyan con infinitivo con 'TO' o con gerundio en '-ING'. El principio cognitivo rector que subyace a la mayoría de estos contrastes radica en la orientación temporal y la naturaleza de la acción: el INFINITIVO CON 'TO' mira hacia adelante en el tiempo (hacia el propósito, la obligación futura o la interrupción para realizar una nueva acción), mientras que el GERUNDIO EN '-ING' mira hacia atrás en el tiempo (hacia la memoria retrospectiva, la vivencia previa, el hábito que cesa o el experimento que se ensaya). Analicemos los cinco pares nucleares: 1) STOP TO DO (hacer una pausa en lo que estás haciendo con el fin de iniciar otra actividad) vs. STOP DOING (abandonar, terminar o cesar una actividad para siempre o en ese momento); 2) REMEMBER TO DO (acordarse de realizar una tarea u obligación pendiente antes de que se pase el tiempo) vs. REMEMBER DOING (evocar en la mente el recuerdo vívido de una experiencia que ya ocurrió en el pasado); 3) FORGET TO DO (olvidarse de cumplir con un deber) vs. FORGET DOING (olvidar una memoria inolvidable, usado típicamente en frases negativas como 'I will never forget seeing the Eiffel Tower'); 4) REGRET TO DO (fórmula protocolaria de cortesía para dar malas noticias: 'Lamentamos informarles que...') vs. REGRET DOING (arrepentirse de algo erróneo que se hizo en el pasado: 'I regret buying that expensive car'); 5) TRY TO DO (hacer un gran esfuerzo físico o intelectual para superar un obstáculo difícil) vs. TRY DOING (probar un método o técnica como experimento para resolver un problema: 'If your head aches, try drinking some water').",
        [
            "STOP TO DO (Pausa para iniciar otra acción): 'He was working, but he stopped TO DRINK some water' (hizo una pausa para beber).",
            "STOP DOING (Cesar o abandonar una actividad): 'He stopped SMOKING five years ago' (dejó el vicio del tabaco definitivamente).",
            "REMEMBER TO DO (Recordar una obligación futura): 'Please remember TO LOCK the front door before you leave' (no olvides cerrarla con llave).",
            "REMEMBER DOING (Evocar un recuerdo pasado): 'I remember LOCKING the door; I clearly remember having the key in my hand' (tengo la memoria grabada en la mente).",
            "FORGET TO DO (Olvidar hacer una tarea): 'I forgot TO POST the letter' (la carta sigue en mi bolsillo, no la envié).",
            "FORGET DOING (Olvidar una experiencia pasada, casi siempre con never): 'I will never forget MEETING the Queen' (jamás olvidaré esa vivencia).",
            "REGRET TO INFORM (Lamento tener que decirte): Uso formal para malas noticias: 'We regret TO INFORM you that your application was unsuccessful'.",
            "REGRET DOING (Arrepentirse de lo hecho en el pasado): 'I regret TELLING him my confidential secrets' (me arrepiento de habérselos dicho).",
            "TRY TO DO (Esforzarse con dificultad): 'I tried TO PUSH the heavy car, but it was impossible'.",
            "TRY DOING (Probar un método como experimento): 'The room is too hot; try OPENING the window to see if that helps'."
        ],
        [
            "The international software engineers stopped writing computer code to discuss the newly discovered system architecture vulnerabilities. (Los ingenieros internacionales de software dejaron de escribir código computacional para discutir las vulnerabilidades de arquitectura del sistema recién descubiertas).",
            "She stopped smoking and drinking processed sugary beverages when she began training for the Boston marathon three years ago. (Ella dejó de fumar y de beber bebidas azucaradas procesadas cuando comenzó a entrenar para el maratón de Boston hace tres años).",
            "Please remember to upload your finalized laboratory research reports to the university digital portal before the midnight deadline. (Por favor recuerden subir sus informes finalizados de investigación de laboratorio al portal digital universitario antes de la fecha límite de medianoche).",
            "I will never forget visiting the Grand Canyon in Arizona during sunset; the extraordinary geological colors were absolutely unforgettable. (Nunca olvidaré haber visitado el Gran Cañón en Arizona durante el atardecer; los extraordinarios colores geológicos fueron absolutamente inolvidables)."
        ],
        [
            "We deeply regret to inform all conference delegates that the keynote lecture on renewable energy has been cancelled due to flight delays. (Lamentamos profundamente informar a todos los delegados de la conferencia que la conferencia magistral sobre energía renovable ha sido cancelada debido a retrasos en los vuelos).",
            "He now severely regrets investing his family savings in speculative venture capital startups without conducting proper financial due diligence. (Él ahora se arrepiente severamente de haber invertido los ahorros de su familia en empresas emergentes de capital de riesgo especulativo sin realizar la debida diligencia financiera).",
            "If your laptop computer is running slowly and overheating, try restarting the operating system and clearing the temporary cache files. (Si tu computadora portátil está funcionando con lentitud y sobrecalentándose, prueba reiniciar el sistema operativo y borrar los archivos temporales de caché).",
            "The commercial solicitor tried to persuade the judicial tribunal to grant an adjournment, but the presiding judge firmly refused. (El abogado litigante comercial intentó persuadir al tribunal judicial para que concediera un aplazamiento, pero el juez presidente se negó firmemente)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Did you remember to email our updated chemistry presentation slides to Dr. Miller, Jessica?", "translation": "¿Te acordaste de enviar por correo nuestras diapositivas actualizadas de la presentación de química al Dr. Miller, Jessica?"},
            {"speaker": "Jessica (UK)", "text": "Yes, I remembered to send them early this morning before leaving my flat. I remember seeing his automated reply as well.", "translation": "Sí, me acordé de enviarlas temprano esta mañana antes de salir de mi piso. Recuerdo haber visto su respuesta automática también."},
            {"speaker": "Austin (US)", "text": "That is great. I tried to run the laboratory simulation software on my old computer, but the processor kept crashing.", "translation": "Eso es genial. Intenté ejecutar el software de simulación de laboratorio en mi computadora vieja, pero el procesador se bloqueaba constantemente."},
            {"speaker": "Jessica (UK)", "text": "Have you tried restarting the computer in safe mode? Or try utilizing the high-performance workstations in the university lab.", "translation": "¿Has probado reiniciar la computadora en modo seguro? O prueba utilizar las estaciones de trabajo de alto rendimiento en el laboratorio universitario."},
            {"speaker": "Austin (US)", "text": "I will try doing that this afternoon. Let's stop to have a quick coffee at the student refectory on our way.", "translation": "Probaré hacer eso esta tarde. Hagamos una pausa para tomar un café rápido en el comedor estudiantil en nuestro camino."},
            {"speaker": "Jessica (UK)", "text": "Splendid idea! I stopped drinking coffee after midday recently, but a hot cup of herbal tea will suit me perfectly.", "translation": "¡Espléndida idea! Dejé de beber café después del mediodía recientemente, pero una taza caliente de té de hierbas me vendrá perfecta."}
        ],
        [
            "Confundir 'stop to smoke' con 'stop smoking': decir 'I want to stop to smoke' cuando quieres abandonar el vicio. 'Stop to smoke' significa que te detuviste para encender un cigarrillo; para dejar el vicio debes decir 'stop smoking'.",
            "Usar gerundio con 'remember' para una tarea pendiente: decir 'Remember locking the door' cuando sales de casa. Debe usarse infinitivo para el recordatorio de la obligación: 'Remember TO LOCK the door'.",
            "Decir 'I regret to tell you' para un arrepentimiento pasado: debe ser 'I regret TELLING you' (me arrepiento de habértelo dicho). 'Regret to tell you' se usa solo para dar una mala noticia en el acto.",
            "Confundir 'try to do' con 'try doing': decir 'I tried opening the window but it was stuck' (si estaba atascada y requería fuerza física, es 'I tried TO OPEN it').",
            "Olvidar que 'forget doing' casi siempre se usa en negativo: 'I will never forget meeting him'."
        ],
        [
            "La Brújula Temporal del Infinitivo vs. Gerundio: El INFINITIVO (TO) mira hacia el FUTURO (tienes que acordarte de hacer la tarea, te detienes para hacer otra cosa). El GERUNDIO (-ING) mira hacia el PASADO (es un recuerdo que ya viviste, o un hábito que dejas atrás).",
            "El Semáforo de STOP: Stop TO smoke = Te paras en la acera PARA sacar el cigarro y fumar. Stop SMOKING = Tiras la cajetilla a la basura y NUNCA MÁS vuelves a fumar en tu vida.",
            "La Prueba del Experimento con TRY: Si requiere sudor, esfuerzo y fuerza física -> TRY TO (try to push the car). Si es un truco o receta casera para ver si funciona -> TRY -ING (try drinking warm tea)."
        ],
        "https://www.englisch-hilfen.de/en/grammar/gerund_infinitive_meaning.htm"
    ))

    return lessons

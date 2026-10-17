# -*- coding: utf-8 -*-
"""
APP-KUSKAT • English Lessons Bank: Level B1 (Part 2: Lessons 11 to 20)
Each class has >= 500 words of rigorous pedagogical and linguistic content.
"""
from lesson_utils import make_lesson

def get_b1_part2():
    lessons = []

    # -------------------------------------------------------------------------
    # Clase 11: Hábitos Pasados: USED TO vs. WOULD vs. Past Simple
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_11",
        "Clase 11: Hábitos Pasados: USED TO vs. WOULD vs. Past Simple",
        "B1",
        "Aspecto Verbal Pasado",
        "La evocación de hábitos, costumbres arraigadas y estados duraderos en épocas pretéritas que ya no existen en la actualidad se articula mediante la alternancia aspectual entre used to, would y el pasado simple.",
        "USED TO (Hábitos de acción repetida y ESTADOS pasados ya extintos): Sujeto + USED TO + Verbo en forma base: I used to live in London / She used to have long hair. Negativo: didn't use to + Verbo base. Pregunta: Did you use to...? WOULD (Solo ACCIONES REPETIDAS habituales, jamás estados): Sujeto + WOULD + Verbo base: Every summer we would swim in the lake. Past Simple (Eventos puntuales o duración definida): I lived in Boston for two years.",
        "La reconstrucción nostálgica o descriptiva del pasado en la lengua inglesa dispone de herramientas aspectuales altamente especializadas para expresar lo que en español suele verterse mediante el pretérito imperfecto ('solía vivir', 'jugaba todos los días', 'tenía el pelo largo'). El operador central por excelencia es la perífrasis semi-modal 'USED TO' (/ˈjuːst.tuː/). Esta estructura tiene un valor de contraste bipolar obligatorio: afirma categóricamente que una situación era habitual o un estado era permanente en el pasado, pero que en el presente YA NO OCURRE O HA DEJADO DE EXISTIR por completo ('I used to smoke, but I quit five years ago'). 'Used to' posee una enorme amplitud semántica porque admite tanto verbos dinámicos de acción ('I used to play tennis'), como verbos estáticos de estado, posesión o residencia ('I used to live in Paris', 'She used to have a dog', 'He used to be very shy'). En contraposición directa, el auxiliar modal 'WOULD' (/wʊd/) puede emplearse también para evocar hábitos pasados repetidos ('When I was young, my grandmother would bake cookies every Sunday'), pero con una restricción gramatical estricta e inviolable: 'WOULD' SOLO ADMITE VERBOS DINÁMICOS DE ACCIÓN FÍSICA Y REPETICIÓN; PROHÍBE CATEGÓRICAMENTE LOS VERBOS ESTÁTICOS DE ESTADO. Decir 'I would live in London' o 'She would have long hair' para expresar hábitos pasados es agramatical y erróneo (sonaría a condicional irreal). Por su parte, el 'PAST SIMPLE' ordinario es el comodín neutral: se utiliza cuando se menciona la duración exacta del período ('I lived in London for five years') o cuando el evento ocurrió una sola vez de forma puntual ('Yesterday I visited my grandmother'), contextos donde 'used to' y 'would' están totalmente prohibidos.",
        [
            "USED TO para ACCIONES Y ESTADOS: Admite verbos de acción y verbos de estado: 'I used to play soccer' (acción), 'I used to be shy' (estado), 'She used to own a bicycle' (posesión).",
            "WOULD solo para ACCIONES REPETIDAS: Prohíbe terminantemente verbos de estado: 'We would go camping every summer' (correcto), 'We would live near the beach' (incorrecto; debe ser 'used to live').",
            "Contraste presente implícito obligatorio: 'Used to' siempre implica que la situación ya cambió: 'He used to work hard' (implicación: ahora ya no trabaja tan duro o se jubiló).",
            "Negación canónica: Sujeto + DIDN'T USE TO + Verbo base (ortografía estricta sin 'd' final en use): 'I didn't use to like vegetables when I was a child'.",
            "Interrogación canónica: DID + Sujeto + USE TO + Verbo base?: 'Did you use to play an instrument at school?'.",
            "Prohibición con eventos que ocurrieron una sola vez: Si la acción ocurrió una vez puntual en una fecha concreta, se usa OBLIGATORIAMENTE Past Simple: 'In 2020 I visited Rome' (nunca 'In 2020 I used to visit Rome').",
            "Uso con períodos de duración definida: Si se dice 'for five years', rige Past Simple: 'He lived there for five years' (no 'he used to live there for five years').",
            "Diferenciación crucial con BE USED TO / GET USED TO: 'Used to + infinitivo' es un hábito pasado extinto; 'Be used to + gerundio' es estar acostumbrado en presente; 'Get used to + gerundio' es el proceso de adaptarse."
        ],
        [
            "When I was an undergraduate student at California State University, I used to study in the central library until midnight every weekday. (Cuando era estudiante de pregrado en la Universidad Estatal de California, solía estudiar en la biblioteca central hasta la medianoche todos los días de semana).",
            "During summer vacations in our childhood, my grandfather would take us fishing at the lake and we would spend hours on the wooden boat. (Durante las vacaciones de verano en nuestra infancia, mi abuelo solía llevarnos a pescar al lago y pasábamos horas en el bote de madera).",
            "She used to have very long curly brown hair and she used to wear vintage glasses before she underwent laser eye surgery. (Ella solía tener el cabello castaño rizado muy largo y solía usar gafas clásicas antes de someterse a una cirugía ocular con láser).",
            "Did you use to participate in international speech and debate tournaments when you were attending high school in Chicago? (¿Solías participar en torneos internacionales de oratoria y debate cuando asistías a la secundaria en Chicago?)."
        ],
        [
            "The historic stone manor used to belong to an aristocratic family before it was converted into a boutique countryside hotel. (La histórica mansión de piedra solía pertenecer a una familia aristocrática antes de ser convertida en un hotel campestre con encanto).",
            "Every Saturday morning, my father would wake up early, brew a pot of English tea, and walk down to the village newsagent. (Cada sábado por la mañana, mi padre solía levantarse temprano, preparar una tetera de té inglés y caminar hacia el quiosco de periódicos del pueblo).",
            "He didn't use to enjoy classical orchestral music, but he developed a profound appreciation for opera during his residency in London. (A él no le solía gustar la música orquestal clásica, pero desarrolló un profundo aprecio por la ópera durante su residencia en Londres).",
            "Our family lived in northern Yorkshire for twelve years before we relocated to a modern suburban house near Birmingham. (Nuestra familia vivió en el norte de Yorkshire durante doce años antes de que nos trasladáramos a una moderna casa suburbana cerca de Birmingham)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Did you use to play any sports when you were younger, Jessica? You look very athletic.", "translation": "¿Solías practicar algún deporte cuando eras más joven, Jessica? Te ves muy atlética."},
            {"speaker": "Jessica (UK)", "text": "Yes, I used to be a competitive swimmer. I used to train in the Olympic pool four mornings a week before school.", "translation": "Sí, solía ser nadadora de competición. Solía entrenar en la piscina olímpica cuatro mañanas por semana antes de la escuela."},
            {"speaker": "Austin (US)", "text": "That is incredible dedication! Would your parents drive you to the swimming center that early?", "translation": "¡Esa es una dedicación increíble! ¿Solían tus padres llevarte al centro de natación tan temprano?"},
            {"speaker": "Jessica (UK)", "text": "Yes, my mother would wake up at five o'clock and we would listen to radio podcasts along the drive.", "translation": "Sí, mi madre solía despertarse a las cinco en punto y escuchábamos podcasts de radio a lo largo del trayecto."},
            {"speaker": "Austin (US)", "text": "I used to play basketball in high school, but I stopped when I enrolled in engineering at university.", "translation": "Yo solía jugar baloncesto en la secundaria, pero lo dejé cuando me matriculé en ingeniería en la universidad."},
            {"speaker": "Jessica (UK)", "text": "Indeed. Academic commitments often require us to rebalance our personal sporting pursuits.", "translation": "En efecto. Los compromisos académicos a menudo nos obligan a reequilibrar nuestras actividades deportivas personales."}
        ],
        [
            "Usar 'would' con verbos de estado para hábitos pasados: decir 'I would live in Madrid' o 'She would have a cat'. Con verbos de estado solo se admite 'used to': 'I used to live', 'She used to have'.",
            "Usar 'used to' para una acción que ocurrió una sola vez: decir 'Last night I used to watch a movie'. Debe usarse Past Simple: 'Last night I watched a movie'.",
            "Escribir 'didn't used to' con 'd': en oraciones negativas con did, el auxiliar absorbe el tiempo; la ortografía correcta es 'didn't use to'.",
            "Confundir 'used to' con 'usually': decir 'I use to go to the gym on Mondays' para hablar de un hábito presente. En presente se usa usually: 'I usually go to the gym'.",
            "Usar 'used to' cuando se menciona la duración exacta: decir 'I used to live there for ten years'. Con duración definida debe ser Past Simple: 'I lived there for ten years'."
        ],
        [
            "La Prueba del Estado Fijo (Would vs. Used To): ¿El verbo implica movimiento y acción física repetible (swim, walk, visit)? -> Puedes usar USED TO o WOULD. ¿El verbo es un estado quieto (be, live, have, know, like)? -> ¡SOLO PUEDES USAR USED TO!",
            "La Pérdida de la D en Preguntas y Negaciones: Al igual que en todos los verbos regulares con DID, 'DID' le roba la 'D' a used: 'Did you use to...?' / 'I didn't use to...'.",
            "Regla del Contraste Presente: Siempre que digas 'I used to...', visualiza en tu mente la continuación automática: '...but now I don't'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/used_to.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 12: Voz Pasiva en Presente y Pasado Simple
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_12",
        "Clase 12: Voz Pasiva en Presente y Pasado Simple",
        "B1",
        "Voz Pasiva & Foco Sintáctico",
        "La voz pasiva traslada el foco de prominencia informativa desde el agente que ejecuta la acción hacia el paciente receptor o resultado del proceso, articulándose mediante el auxiliar to be y el participio pasado.",
        "Present Simple Passive: Sujeto receptor + am/is/are + Participio Pasado (Columna 3) (+ by + Agente): English is spoken all over the world / These cars are manufactured in Japan. Past Simple Passive: Sujeto receptor + was/were + Participio Pasado (+ by + Agente): The telephone was invented by Alexander Graham Bell / The pyramids were built thousands of years ago. Agente con BY: Solo se incluye si aporta información nueva, relevante y específica.",
        "La voz pasiva (Passive Voice) es uno de los recursos estilísticos y sintácticos más trascendentales de la lengua inglesa, desempeñando un papel hegemónico en el discurso científico, los reportes periodísticos, los textos académicos y las comunicaciones formales oficiales. Mientras que la voz activa (Active Voice) organiza la oración siguiendo el orden natural de la agencia humana ('Alexander Graham Bell invented the telephone in 1876'), la voz pasiva ejecuta una reconfiguración estructural de la cláusula: el objeto directo paciente se promueve a la posición inicial de sujeto gramatical, el verbo se transmuta en una perífrasis pasiva, y el agente original se relega al final de la oración mediante la frase preposicional encabezada por 'BY' ('The telephone was invented by Alexander Graham Bell in 1876') o se suprime por completo. En la gramática inglesa, la pasiva no es un mero capricho estético, sino que responde a tres motivos pragmáticos esenciales: 1) El ejecutor de la acción es desconocido ('My bicycle was stolen last night'); 2) El agente es tan obvio que resulta redundante mencionarlo ('The thief was arrested', es evidente que la policía lo arrestó); 3) El foco de interés informativo prioritario es el objeto, el descubrimiento o la víctima, y no quien ejecutó el acto ('Penicillin was discovered in 1928'). La arquitectura sintáctica de la pasiva sigue una ecuación matemática universal e inmutable: [SUJETO PACIENTE] + [VERBO TO BE CONJUGADO EN EL TIEMPO ADECUADO] + [PARTICIPIO PASADO DEL VERBO PRINCIPAL]. En Present Simple Passive, 'to be' adopta las formas 'am', 'is' o 'are' ('Coffee is grown in El Salvador', 'Millions of emails are sent every minute'). En Past Simple Passive, 'to be' adopta las formas pretéritas 'was' o 'were' ('The novel was written in 1850', 'The monuments were restored last year').",
        [
            "Fórmula nuclear invariable de la pasiva: Sujeto paciente + [TO BE en el tiempo correspondiente] + [PARTICIPIO PASADO].",
            "Present Simple Passive: Sujeto + am/is/are + Participio: 'The laboratory is cleaned every evening', 'These laptops are made in California'.",
            "Past Simple Passive: Sujeto + was/were + Participio: 'The Mona Lisa was painted by Leonardo da Vinci', 'The windows were broken during the storm'.",
            "Uso del agente con BY: Se introduce el agente mediante 'by' ÚNICAMENTE si la identidad de la persona es históricamente relevante o necesaria: 'Hamlet was written by Shakespeare'.",
            "Omisión del agente: Si el agente es desconocido, genérico (people, someone, they) o irrelevante, DEBE omitirse: 'Spanish is spoken in El Salvador' (no 'by people').",
            "Transformación de objeto activo a sujeto pasivo: El objeto directo activo pasa a ser el sujeto de la pasiva: Active: 'They produce coffee' -> Passive: 'Coffee is produced'.",
            "Negación en voz pasiva: Se niega directamente el verbo auxiliar to be: 'The documents were NOT signed yesterday', 'The software is NOT updated automatically'.",
            "Interrogación en voz pasiva: Se invierte el verbo to be al inicio: 'Was the project approved by the committee?', 'Are credit cards accepted here?'."
        ],
        [
            "Millions of barrels of crude oil and refined petroleum products are transported across international shipping lanes every day. (Millones de barriles de petróleo crudo y productos derivados del petróleo se transportan a través de las rutas marítimas internacionales todos los días).",
            "The revolutionary electrical alternating current system was developed by Nikola Tesla during the late nineteenth century in the United States. (El revolucionario sistema eléctrico de corriente alterna fue desarrollado por Nikola Tesla a finales del siglo XIX en los Estados Unidos).",
            "All undergraduate laboratory experiments are closely supervised by experienced senior faculty members to guarantee chemical safety. (Todos los experimentos de laboratorio de pregrado son supervisados de cerca por miembros experimentados del cuerpo docente sénior para garantizar la seguridad química).",
            "The historic declaration was signed in Philadelphia in 1776 and was celebrated by thousands of citizens across the thirteen original colonies. (La histórica declaración fue firmada en Filadelfia en 1776 y fue celebrada por miles de ciudadanos en las trece colonias originales)."
        ],
        [
            "The ancient Roman amphitheatre in southern Britain was discovered by archaeologists during an excavation project last autumn. (El antiguo anfiteatro romano en el sur de Gran Bretaña fue descubierto por arqueólogos durante un proyecto de excavación el otoño pasado).",
            "Extensive clinical trials on the experimental pharmaceutical medication are conducted annually in three major teaching hospitals in London. (Ensayos clínicos extensos sobre el medicamento farmacéutico experimental se llevan a cabo anualmente en tres importantes hospitales universitarios en Londres).",
            "The magnificent cathedral bells were rung throughout the entire afternoon to commemorate the anniversary of the national victory. (Las magníficas campanas de la catedral se repicaron durante toda la tarde para conmemorar el aniversario de la victoria nacional).",
            "The confidential legal briefing was prepared by a team of senior barristers and was delivered directly to the judicial inquiry board. (El informe legal confidencial fue preparado por un equipo de abogados litigantes sénior y fue entregado directamente a la junta de investigación judicial)."
        ],
        [
            {"speaker": "Austin (US)", "text": "This historic library building is magnificent, Jessica! When was it constructed by the university?", "translation": "¡Este histórico edificio de biblioteca es magnífico, Jessica! ¿Cuándo fue construido por la universidad?"},
            {"speaker": "Jessica (UK)", "text": "It was designed by a prominent Victorian architect in 1885, and it was opened to students three years later.", "translation": "Fue diseñado por un destacado arquitecto victoriano en 1885, y fue abierto a los estudiantes tres años más tarde."},
            {"speaker": "Austin (US)", "text": "Are these ancient leather-bound manuscripts preserved in temperature-controlled display cases?", "translation": "¿Están estos antiguos manuscritos encuadernados en cuero preservados en vitrinas con temperatura controlada?"},
            {"speaker": "Jessica (UK)", "text": "Yes, they are. They are inspected meticulously by conservation experts every month to prevent humidity damage.", "translation": "Sí, lo están. Son inspeccionados meticulosamente por expertos en conservación cada mes para prevenir daños por humedad."},
            {"speaker": "Austin (US)", "text": "That is incredible care! Thousands of valuable volumes are protected under one roof.", "translation": "¡Ese es un cuidado increíble! Miles de volúmenes valiosos están protegidos bajo un mismo techo."},
            {"speaker": "Jessica (UK)", "text": "Indeed! Our cultural heritage is cherished and safeguarded for future generations of scholars.", "translation": "¡En efecto! Nuestro patrimonio cultural es apreciado y salvaguardado para futuras generaciones de académicos."}
        ],
        [
            "Omitir el verbo auxiliar to be: decir 'The book written in 1850'. La pasiva exige siempre to be: 'The book was written in 1850'.",
            "Usar la forma de pasado simple en lugar del participio: decir 'The letter was wrote'. La pasiva exige obligatoriamente la tercera columna (participio): 'The letter was written'.",
            "Usar 'by' con agentes genéricos innecesarios: decir 'English is spoken by people'. En inglés el agente obvio se suprime: 'English is spoken'.",
            "Confundir la concordancia singular y plural de to be: decir 'The cars was manufactured'. Con sujeto plural debe ser 'The cars were manufactured'.",
            "Intentar hacer pasivas con verbos intransitivos: verbos como die, arrive, happen o sleep no tienen objeto directo y jamás pueden ponerse en voz pasiva ('An accident was happened' es agramatical; debe ser 'An accident happened')."
        ],
        [
            "La Ecuación Inmutable de la Pasiva: [OBJETO PROMOVIDO A SUJETO] + [TO BE] (is/are o was/were) + [PARTICIPIO PASADO]. ¡Si no hay TO BE o no hay PARTICIPIO, no es voz pasiva!",
            "La Regla del Titular de Periódico: Piensa en los diarios: el foco es la noticia, no quién lo hizo ('Bank is robbed', 'New planet was discovered'). La pasiva pone el foco en lo más importante.",
            "El Filtro de BY: Solo invita a 'BY' a la fiesta de la oración si la persona aporta un nombre propio de renombre o una sorpresa mayúscula (by Leonardo da Vinci, by J.K. Rowling)."
        ],
        "https://www.englisch-hilfen.de/en/grammar/passive.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 13: Cláusulas Relativas Definitorias (Defining Relative Clauses)
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_13",
        "Clase 13: Oraciones de Relativo Definitorias (Defining Relative Clauses)",
        "B1",
        "Cláusulas Relativas",
        "Las oraciones de relativo definitorias o restrictivas proporcionan información esencial e indispensable para identificar al sustantivo antecedente, integrándose en la cláusula principal sin comas ortográficas.",
        "Para Personas: WHO / THAT: The woman WHO lives next door is a doctor. Para Cosas y Animales: WHICH / THAT: The laptop WHICH I bought yesterday is fast. Para Posesión: WHOSE (+ Sustantivo): The student WHOSE essay won first prize. Para Lugares y Tiempos: WHERE / WHEN: The town WHERE I was born / The day WHEN we met. Regla de Omisión del Pronombre Relativo: Si el pronombre relativo funciona como OBJETO directo de la cláusula subordinada (va seguido de otro sujeto), se puede OMITIR libremente: The book (that) I read was interesting.",
        "Las oraciones subordinadas de relativo (Relative Clauses) constituyen la herramienta sintáctica primordial para conectar dos proposiciones independientes, enriquecer sustantivos antecedentes y dotar de cohesión y fluidez al discurso en nivel B1. Las oraciones de relativo definitorias (también llamadas restrictivas o identificativas) cumplen una misión cognitiva indispensable: aportan información esencial y crítica sin la cual el sustantivo antecedente quedaría incompleto, ambiguo o genérico. Si decimos simplemente 'The man is a doctor', el interlocutor preguntará '¿cuál hombre?'; pero al incorporar la cláusula definitoria 'The man WHO LIVES NEXT DOOR is a doctor', la identidad de la persona queda perfectamente delimitada y definida. Por esta naturaleza esencial, las oraciones definitorias se escriben NUNCA separadas por comas. El inventario de pronombres relativos se distribuye según la naturaleza del antecedente: 'WHO' se reserva para seres humanos ('The student who spoke to me'); 'WHICH' se utiliza para objetos inanimados, conceptos y animales ('The car which broke down'); y en este tipo de cláusulas definitorias, el pronombre polivalente 'THAT' puede sustituir libremente tanto a 'who' como a 'which' en registros informales y estándar ('The woman that lives next door', 'The laptop that I bought'). Para relaciones de posesión y pertenencia se emplea el relativo 'WHOSE' seguido inmediatamente del sustantivo poseído sin artículo ('The professor whose book won an award'). Sin embargo, la gran maestría del nivel B1 radica en la 'Regla de la Omisión de Contacto' (Contact Clause): cuando el pronombre relativo actúa como el OBJETO de la cláusula subordinada (es decir, cuando va seguido inmediatamente de un nuevo sujeto pronominal o léxico), el pronombre relativo puede suprimirse por completo en inglés, siendo esta omisión la opción más natural, elegante y preferida por los hablantes nativos ('The movie [that] we watched yesterday was amazing').",
        [
            "Función definitoria esencial: Proporciona datos indispensables para identificar al sujeto; NUNCA se escribe entre comas.",
            "Distribución canónica: WHO para personas ('the doctor who helped me'); WHICH para cosas ('the car which crashed'); THAT para ambos en registro general definitorio.",
            "WHOSE para posesión (cuyo/cuya): Conecta al poseedor con lo poseído sin artículo: 'The woman whose car was stolen called the police'.",
            "WHERE para lugares espaciales: 'This is the university where I studied engineering'.",
            "WHEN para hitos temporales: 'I will never forget the day when we first arrived in London'.",
            "Regla de Oro de la Omisión del Pronombre Objeto: Si tras who/which/that hay un SUJETO diferente, el pronombre relativo se OMITE con total naturalidad: 'The book (which) I read was fantastic', 'The man (who) you saw is my uncle'.",
            "Prohibición de omisión cuando es Pronombre Sujeto: Si el pronombre relativo ejecuta directamente la acción del verbo subordinado, JAMÁS se puede omitir: 'The man WHO lives next door' (la omisión 'The man lives next door is a doctor' es un error grave).",
            "Posición de preposiciones en oraciones de relativo: En inglés informal la preposición se coloca al final de la cláusula: 'The hotel that we stayed AT'; en inglés formal culto se antepone: 'The hotel AT WHICH we stayed'."
        ],
        [
            "The international software engineer who developed the security algorithm graduated from California State University with top academic honors. (El ingeniero de software internacional que desarrolló el algoritmo de seguridad se graduó de la Universidad Estatal de California con los más altos honores académicos).",
            "The scientific research paper that our laboratory team published last month received substantial recognition across international journals. (El artículo de investigación científica que nuestro equipo de laboratorio publicó el mes pasado recibió un reconocimiento sustancial en revistas internacionales).",
            "The medical specialist whose pioneering clinical research was awarded the government grant delivered a keynote address in Boston. (La especialista médica cuya investigación clínica pionera fue galardonada con la subvención gubernamental pronunció un discurso magistral en Boston).",
            "This is the prestigious technological incubator where hundreds of successful digital startup companies were originally founded. (Esta es la prestigiosa incubadora tecnológica donde cientos de exitosas empresas emergentes digitales fueron fundadas originalmente)."
        ],
        [
            "The solicitor who handled our commercial property acquisition in central London provided exceptionally clear legal counsel. (El abogado que manejó la adquisición de nuestra propiedad comercial en el centro de Londres proporcionó un asesoramiento legal excepcionalmente claro).",
            "The antique grandfather clock that stands in the cathedral library was handcrafted by an English horologist in the eighteenth century. (El antiguo reloj de pie que se encuentra en la biblioteca de la catedral fue hecho a mano por un relojero inglés en el siglo dieciocho).",
            "The university professor whose lectures on constitutional law are famous throughout Great Britain retired from teaching yesterday. (El profesor universitario cuyas conferencias sobre derecho constitucional son famosas en toda Gran Bretaña se jubiló de la docencia ayer).",
            "That was the memorable summer when our university debate society won the national championship trophy in Oxford. (Ese fue el memorable verano cuando nuestra sociedad de debate universitario ganó el trofeo del campeonato nacional en Oxford)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Who was that young woman who greeted you outside the university library, Jessica?", "translation": "¿Quién era aquella joven que te saludó afuera de la biblioteca universitaria, Jessica?"},
            {"speaker": "Jessica (UK)", "text": "She is the researcher whose laboratory project won the national biomedical innovation award last term.", "translation": "Ella es la investigadora cuyo proyecto de laboratorio ganó el premio nacional de innovación biomédica el trimestre pasado."},
            {"speaker": "Austin (US)", "text": "That is impressive! Is she the one that gave the presentation on cellular microbiology last week?", "translation": "¡Eso es impresionante! ¿Es ella la que dio la presentación sobre microbiología celular la semana pasada?"},
            {"speaker": "Jessica (UK)", "text": "Yes, precisely. She is also developing a new software tool that analyzes genetic sequences automatically.", "translation": "Sí, precisamente. Ella también está desarrollando una nueva herramienta de software que analiza secuencias genéticas automáticamente."},
            {"speaker": "Austin (US)", "text": "The computer code she wrote must be remarkably sophisticated. I would love to read the research paper.", "translation": "El código computacional que escribió debe ser notablemente sofisticado. Me encantaría leer el artículo de investigación."},
            {"speaker": "Jessica (UK)", "text": "I can share the digital link she sent me yesterday. You will find the statistical methodology fascinating.", "translation": "Puedo compartir el enlace digital que me envió ayer. Encontrarás fascinante la metodología estadística."}
        ],
        [
            "Usar comas en oraciones de relativo definitorias: escribir 'The students, who studied hard, passed'. En oraciones restrictivas las comas están prohibidas porque la información es esencial: 'The students who studied hard passed'.",
            "Omitir el pronombre relativo cuando funciona como sujeto: decir 'The man lives next door is a doctor'. Debe incluirse el pronombre: 'The man who lives next door is a doctor'.",
            "Usar 'what' en lugar de that o which como relativo: decir 'The book what I bought'. Es un error vulgar; debe ser 'The book that I bought' o 'The book which I bought'.",
            "Poner artículo tras whose: decir 'The man whose the car was stolen'. Whose se une directamente al sustantivo sin the: 'The man whose car was stolen'.",
            "Repetir el pronombre objeto de forma redundante: decir 'The book that I bought it yesterday was good'. Como 'that' ya absorbe al libro, 'it' debe eliminarse: 'The book that I bought yesterday was good'."
        ],
        [
            "La Prueba de la Eliminación (¿Con o Sin Comas?): Lee la oración sin la frase de relativo. Si la frase principal pierde sentido o no sabes de quién hablas ('El hombre es médico' -> ¿cuál hombre?), la información es DEFINITORIA -> ¡Cero comas!",
            "La Prueba del Sujeto Siguiente (Omisión Mágica): Si después de who/which/that ves inmediatamente un pronombre (I, you, he, she, we) o un nombre ('that I read', 'which you saw'), ¡puedes borrar el relativo de un plumazo! ('The book I read').",
            "Prohibido el Relativo 'WHAT': Grábate esto: 'WHAT' jamás conecta un sustantivo previo ('the car what I like' es incorrecto; usa siempre 'the car that I like')."
        ],
        "https://www.englisch-hilfen.de/en/grammar/relative_clauses.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 14: Cláusulas Relativas Explicativas (Non-defining Clauses)
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_14",
        "Clase 14: Oraciones de Relativo No Definitorias (Non-defining Clauses)",
        "B1",
        "Cláusulas Relativas Explicativas",
        "Las oraciones de relativo no definitorias o explicativas añaden información adicional, incidental o complementaria sobre un antecedente plenamente identificado y único, escribiéndose obligatoriamente entre comas y prohibiendo el uso de that.",
        "Para Personas: WHO (entre comas): Dr. Smith, WHO IS OUR DEAN, will speak today. Para Cosas: WHICH (entre comas): London, WHICH IS THE CAPITAL, has many parks. Para Posesión: WHOSE: Mary, WHOSE BROTHER IS AN ARCHITECT, helped us. Dos Reglas de Oro Negativas: 1) Prohibición absoluta de THAT (nunca se usa that entre comas). 2) Prohibición absoluta de omitir el pronombre relativo (el pronombre relativo jamás puede suprimirse).",
        "El dominio de las oraciones de relativo no definitorias (Non-defining o Non-restrictive Relative Clauses) marca el paso hacia la madurez estilística y la prosa académica formal en nivel B1. A diferencia de las definitorias, donde la información es vital para saber de qué sujeto se está hablando, en las oraciones no definitorias el antecedente ya está plenamente identificado, singularizado y delimitado por su propio nombre propio, por un demostrativo o por ser un referente único en el mundo ('Barack Obama', 'my mother', 'London', 'the sun'). Por ende, la información que aporta la cláusula subordinada no define ni restringe al sujeto, sino que simplemente añade un comentario extra, una nota parentética incidental o una explicación descriptiva complementaria que podría suprimirse de la oración sin alterar en absoluto la comprensión de la proposición principal ('My mother, who is a doctor, lives in Boston' = 'My mother lives in Boston'). Por esta razón parentética, las oraciones no definitorias se escriben OBLIGATORIAMENTE ENTRE COMAS (o con una coma si cierran la oración), de forma idéntica a los incisos explicativos del español. De esta naturaleza estructural se desprenden dos prohibiciones categóricas e inviolables que todo estudiante debe memorizar: Primera prohibición: ESTÁ TOTALMENTE PROHIBIDO EL USO DEL PRONOMBRE 'THAT'. Entre comas solo pueden figurar los pronombres relativos cultos plenos: 'WHO' para personas y 'WHICH' para cosas y conceptos ('Dr. Davis, WHO works here...', 'London, WHICH is large...', estando terminantemente prohibido escribir 'London, that is large...'). Segunda prohibición: JAMÁS SE PUEDE OMITIR EL PRONOMBRE RELATIVO, ni siquiera cuando funciona como objeto directo de la subordinada ('My new laptop, which I bought last week, is very fast'). Asimismo, en este nivel se aprende que 'WHICH' entre comas puede modificar no solo a un sustantivo previo, sino a toda la cláusula anterior completa para emitir un juicio de valor ('He arrived two hours late, which annoyed the professor immensely').",
        [
            "Información adicional no esencial: El antecedente ya está plenamente identificado; la cláusula añade un dato complementario.",
            "Uso estricto y obligatorio de COMAS: La oración subordinada debe aislarse entre dos comas (o coma y punto final): 'Oxford, WHICH IS A HISTORIC CITY, attracts many scholars'.",
            "PROHIBICIÓN TOTAL DE 'THAT': Entre comas NUNCA se usa that; se usa exclusivamente WHO para personas y WHICH para cosas: 'My father, who is 60...' (nunca 'My father, that is 60...').",
            "PROHIBICIÓN TOTAL DE OMISIÓN: El pronombre relativo nunca puede suprimirse en cláusulas no definitorias: 'The report, WHICH I SENT YESTERDAY, was approved'.",
            "Uso canónico con Nombres Propios: Dado que los nombres propios ya están individualizados, sus cláusulas de relativo son casi invariablemente no definitorias: 'William Shakespeare, who died in 1616, was an English playwright'.",
            "Uso de WHOSE entre comas para posesión: 'Carlos, whose father is a diplomat, speaks three languages fluently'.",
            "WHICH refiriéndose a una oración completa: Expresa un comentario sobre toda la situación anterior: 'She passed all her exams with distinction, WHICH DELIGHTED HER PARENTS'.",
            "Entonación oral con pausas: Al leer en voz alta, las comas se manifiestan como pausas breves con modulación descendente en la voz."
        ],
        [
            "Dr. Elena Vance, who currently directs the advanced biotechnology institute in Boston, delivered an extraordinary keynote lecture on genetic medicine. (La Dra. Elena Vance, quien actualmente dirige el instituto de biotecnología avanzada en Boston, pronunció una conferencia magistral extraordinaria sobre medicina genética).",
            "Silicon Valley, which is located in the southern San Francisco Bay Area, serves as the premier global center for technological innovation and venture capital. (Silicon Valley, que está ubicado en el sur del Área de la Bahía de San Francisco, se desempeña como el principal centro global para la innovación tecnológica y el capital de riesgo).",
            "The international space station, which orbits the Earth approximately every ninety minutes, conducts scientific microgravity experiments continuously. (La estación espacial internacional, que orbita la Tierra aproximadamente cada noventa minutos, lleva a cabo experimentos científicos de microgravedad continuamente).",
            "Our chief laboratory engineer, whose family originally emigrated from El Salvador, designed the revolutionary solar energy storage battery. (Nuestro ingeniero jefe de laboratorio, cuya familia emigró originalmente de El Salvador, diseñó la revolucionaria batería de almacenamiento de energía solar)."
        ],
        [
            "Cambridge University, which was founded in the thirteenth century, has educated some of the most influential scientific thinkers in British history. (La Universidad de Cambridge, que fue fundada en el siglo trece, ha educado a algunos de los pensadores científicos más influyentes en la historia británica).",
            "The British Museum, which houses millions of historical antiquities from around the globe, offers free admission to all visitors and scholars. (El Museo Británico, que alberga millones de antigüedades históricas de todo el mundo, ofrece entrada gratuita a todos los visitantes y académicos).",
            "The Prime Minister, who met with European diplomatic delegates yesterday, announced a comprehensive package of bilateral trade agreements. (El Primer Ministro, quien se reunió con delegados diplomáticos europeos ayer, anunció un paquete integral de acuerdos comerciales bilaterales).",
            "He accidentally locked his keys inside his London apartment, which forced him to call an emergency locksmith late on Sunday evening. (Accidentalmente dejó encerradas sus llaves dentro de su departamento de Londres, lo que lo obligó a llamar a un cerrajero de emergencia tarde el domingo por la noche)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Have you met our new departmental guest lecturer, Dr. Anderson, Jessica?", "translation": "¿Has conocido a nuestro nuevo profesor invitado departamental, el Dr. Anderson, Jessica?"},
            {"speaker": "Jessica (UK)", "text": "Yes, I spoke with him yesterday. Dr. Anderson, who previously conducted research at Harvard, is an expert on environmental sustainability.", "translation": "Sí, hablé con él ayer. El Dr. Anderson, quien anteriormente realizó investigaciones en Harvard, es un experto en sostenibilidad ambiental."},
            {"speaker": "Austin (US)", "text": "His upcoming lecture on renewable energy, which is scheduled for Friday morning, should be packed with students.", "translation": "Su próxima conferencia sobre energía renovable, la cual está programada para el viernes por la mañana, debería estar repleta de estudiantes."},
            {"speaker": "Jessica (UK)", "text": "Undoubtedly. Our university chancellor, whose personal foundation sponsored the visit, will introduce him at the commencement.", "translation": "Indudablemente. El rector de nuestra universidad, cuya fundación personal patrocinó la visita, lo presentará al inicio."},
            {"speaker": "Austin (US)", "text": "We should reserve our seats early in the main auditorium, which usually fills up very quickly for guest speakers.", "translation": "Deberíamos reservar nuestros asientos temprano en el auditorio principal, el cual usualmente se llena muy rápido para oradores invitados."},
            {"speaker": "Jessica (UK)", "text": "Brilliant. Let's arrive fifteen minutes before the official start to ensure we get excellent front-row seats.", "translation": "Estupendo. Lleguemos quince minutos antes del inicio oficial para asegurarnos de conseguir excelentes asientos en primera fila."}
        ],
        [
            "Usar 'that' entre comas: escribir 'London, that is the capital, is old'. Entre comas 'that' está terminantemente prohibido; debe ser 'London, which is the capital, is old'.",
            "Omitir las comas en cláusulas explicativas con nombres propios: escribir 'William Shakespeare who wrote Hamlet died in 1616'. Al ser un nombre propio conocido, las comas son obligatorias: 'William Shakespeare, who wrote Hamlet, died in 1616'.",
            "Omitir el pronombre relativo en cláusulas no definitorias: decir 'My new car, I bought last week, is fast'. En oraciones no definitorias el pronombre NUNCA se omite: 'My new car, which I bought last week, is fast'.",
            "Usar 'what' en lugar de which para referirse a la oración anterior: decir 'He was late, what annoyed me'. Debe ser 'which annoyed me'.",
            "Poner una sola coma cuando la cláusula va en medio de la oración: olvidar la segunda coma que cierra el inciso parentético."
        ],
        [
            "La Ley de la Barrera de Comas: Las comas actúan como un campo de fuerza que repele a la palabra 'THAT': si ves comas ( , ... , ), ¡THAT tiene prohibida la entrada! Solo se permite el paso a 'WHO' y 'WHICH'.",
            "La Prueba de la Tijera: Si puedes tomar unas tijeras imaginarias, cortar la frase entre comas y tirarla a la basura sin que la oración principal pierda sentido ni claridad -> ¡Es NO DEFINITORIA y lleva comas obligatorias!",
            "El Superpoder de WHICH: Recuerda que 'which' después de una coma tiene el superpoder de resumir todo lo que acaba de suceder: 'He arrived late, which made us lose the train'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/relative_clauses_nc.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 15: Preguntas Coletilla (Question Tags) y Entonación
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_15",
        "Clase 15: Preguntas Coletilla (Question Tags) y Entonación",
        "B1",
        "Interrogación & Entonación",
        "Las coletillas interrogativas confirman información preconcebida o solicitan la complicidad del interlocutor al final de una aseveración, rigiéndose por el principio de polaridad invertida y la modulación melódica de la entonación.",
        "Regla de Polaridad Invertida: Enunciado AFIRMATIVO -> Question Tag NEGATIVA: You are a student, AREN'T YOU? / She works here, DOESN'T SHE? / They will come, WON'T THEY? Enunciado NEGATIVO -> Question Tag AFIRMATIVA: You aren't tired, ARE YOU? / He doesn't like fish, DOES HE? / We haven't seen it, HAVE WE? Regla de Entonación: Entonación descendente (Falling intonation) = Se busca solo confirmación o acuerdo obvio. Entonación ascendente (Rising intonation) = Pregunta genuina con duda real.",
        "Las preguntas coletilla (Question Tags) representan una de las estructuras conversacionales más idiomáticas, naturales y características del inglés hablado. En español solemos resolver la búsqueda de confirmación al final de una frase mediante muletillas breves invariables como '¿verdad?', '¿no?', '¿cierto?' o '¿no es así?' ('Vives en San Salvador, ¿verdad?'). En la lengua inglesa, sin embargo, no existe una sola palabra comodín invariable para esta función; en su lugar, el idioma exige una micro-interrogación sintáctica personalizada al final de cada cláusula, la cual debe concordar con precisión matemática con el tiempo verbal, el verbo auxiliar y el sujeto de la oración principal. El principio rector inquebrantable de las Question Tags es la 'Regla de Polaridad Invertida': si el enunciado principal es afirmativo (+), la coletilla DEBE ser obligatoriamente negativa (-) en su forma contraída ('You are British, AREN'T YOU?'; 'Carlos works in a hospital, DOESN'T HE?'; 'They arrived late, DIDN'T THEY?'). Si el enunciado principal es negativo (-), la coletilla DEBE ser afirmativa (+) ('You aren't hungry, ARE YOU?'; 'She didn't call, DID SHE?'). Además, el valor comunicativo de la coletilla depende enteramente de la prosodia y la entonación fonética: cuando la voz cae en tono descendente al final (falling intonation ↘), el emisor no está haciendo una pregunta real, sino simplemente invitando al oyente a ratificar una verdad obvia y compartida; en cambio, cuando la voz sube en tono agudo ascendente (rising intonation ↗), se formula una duda auténtica que solicita información real. Existen además cuatro casos especiales anómalos de gran dificultad que todo estudiante de B1 debe dominar: la coletilla de 'I am' no es 'amn't I' (que no existe), sino 'AREN'T I?' ('I am right, aren't I?'); la coletilla tras órdenes imperativas es 'WILL YOU?' ('Close the door, will you?'); la coletilla tras una propuesta con 'Let's' es 'SHALL WE?' ('Let's study, shall we?'); y con sujetos indefinidos colectivos como 'everyone' o 'nobody', el pronombre en la coletilla es siempre plural 'THEY' ('Everyone is here, aren't they?').",
        [
            "Regla de Polaridad Invertida: Afirmativo (+) exige Tag Negativa (-); Negativo (-) exige Tag Afirmativa (+).",
            "Morfología del verbo auxiliar exacto: Si la oración tiene to be -> usa to be ('She is happy, isn't she?'). Si tiene un modal -> usa el modal ('You can swim, can't you?'). Si tiene auxiliar perfecto -> usa have/has ('They have left, haven't they?').",
            "Do-Support en Presente y Pasado Simple: Si el verbo es ordinario sin auxiliar visible, se rescata DO, DOES o DID: 'You speak French, DON'T YOU?', 'He lives in Rome, DOESN'T HE?', 'They went home, DIDN'T THEY?'.",
            "Caso anómalo de I AM: La question tag negativa de 'I am' es invariablemente AREN'T I?: 'I am on time, AREN'T I?' (la forma 'amn't I' es inexistente en inglés estándar).",
            "Caso de propuestas con LET'S: La question tag es siempre SHALL WE?: 'Let's have a coffee, SHALL WE?'.",
            "Caso de mandatos e instrucciones (Imperativo): La question tag de cortesía es WILL YOU?: 'Help me with these bags, WILL YOU?'.",
            "Caso de pronombres indefinidos (Everyone, Somebody, Nobody): Exigen el pronombre THEY en la coletilla, adaptando el verbo al plural: 'Everyone knows the answer, DON'T THEY?', 'Nobody called, DID THEY?' (al ser nobody negativo, la tag es afirmativa).",
            "Entonación fonética (Intonation): Entonación descendente (↘) = Confirmación de acuerdo evidente. Entonación ascendente (↗) = Pregunta de duda real."
        ],
        [
            "You are completing your undergraduate degree in biomedical engineering at California State University this semester, aren't you? (Estás completando tu título de pregrado en ingeniería biomédica en la Universidad Estatal de California este semestre, ¿verdad?).",
            "The international research team hasn't published their finalized clinical findings on the vaccine trial yet, have they? (El equipo de investigación internacional no ha publicado sus hallazgos clínicos finalizados sobre el ensayo de la vacuna todavía, ¿verdad?).",
            "Our departmental supervisor spoke to the dean regarding the additional laboratory equipment grant yesterday, didn't he? (Nuestro supervisor departamental habló con el decano respecto a la subvención adicional para equipo de laboratorio ayer, ¿no es así?).",
            "I am responsible for coordinating the academic debate presentations for next week's symposium, aren't I? (Soy responsable de coordinar las presentaciones del debate académico para el simposio de la próxima semana, ¿verdad?)."
        ],
        [
            "The ancient cathedral in Canterbury was designated as a UNESCO World Heritage site several decades ago, wasn't it? (La antigua catedral en Canterbury fue designada como sitio del Patrimonio Mundial de la UNESCO hace varias décadas, ¿no es así?).",
            "We shouldn't leave our personal study documents and laptops unattended in the university library reading room, should we? (No deberíamos dejar nuestros documentos personales de estudio y computadoras portátiles desatendidos en la sala de lectura de la biblioteca universitaria, ¿verdad?).",
            "Let's book our train tickets to Edinburgh early in order to take advantage of off-peak passenger discounts, shall we? (Reservemos nuestros billetes de tren a Edimburgo temprano para aprovechar los descuentos de pasajeros fuera de horas pico, ¿te parece?).",
            "Nobody was injured during the unexpected chemical laboratory evacuation this morning, were they? (Nadie resultó herido durante la inesperada evacuación del laboratorio químico esta mañana, ¿verdad?)."
        ],
        [
            {"speaker": "Austin (US)", "text": "You are coming to the campus science fair on Friday afternoon, aren't you, Jessica?", "translation": "Vas a venir a la feria de ciencias del campus el viernes por la tarde, ¿verdad, Jessica?"},
            {"speaker": "Jessica (UK)", "text": "Yes, of course I am! You have already finished building your automated solar robot, haven't you?", "translation": "¡Sí, por supuesto que voy! Ya has terminado de construir tu robot solar automatizado, ¿no es así?"},
            {"speaker": "Austin (US)", "text": "I completed the wiring yesterday, but I still need to test the software sensors. That won't take long, will it?", "translation": "Completé el cableado ayer, pero todavía necesito probar los sensores de software. Eso no tomará mucho tiempo, ¿verdad?"},
            {"speaker": "Jessica (UK)", "text": "It shouldn't take more than an hour. Our professor was very enthusiastic about your project design, wasn't he?", "translation": "No debería tomar más de una hora. Nuestro profesor estuvo muy entusiasmado con el diseño de tu proyecto, ¿verdad?"},
            {"speaker": "Austin (US)", "text": "Yes, he gave me some brilliant suggestions! Let's meet at the engineering hall at one o'clock, shall we?", "translation": "¡Sí, me dio algunas sugerencias brillantes! Encontrémonos en el salón de ingeniería a la una en punto, ¿te parece?"},
            {"speaker": "Jessica (UK)", "text": "Splendid! I will see you on Friday. Don't be late, will you?", "translation": "¡Espléndido! Te veré el viernes. No llegues tarde, ¿de acuerdo?"}
        ],
        [
            "Usar 'isn't it?' como muletilla universal para todo: decir 'You work here, isn't it?'. Es un error gravísimo; la tag debe rescatar el auxiliar correspondiente: 'You work here, don't you?'.",
            "Mantener la misma polaridad en ambas partes: decir 'You are tired, are you?'. Si el enunciado es afirmativo, la tag debe ser negativa: 'aren't you?'.",
            "Decir 'amn't I?' con el pronombre I: la forma idiomática y gramaticalmente correcta es 'aren't I?'.",
            "Olvidar que 'nobody' o 'never' ya son negativos: decir 'Nobody called, didn't they?'. Como nobody ya es negativo, la tag debe ser afirmativa: 'did they?'.",
            "Usar sustantivos en lugar de pronombres en la coletilla: decir 'Carlos lives here, doesn't Carlos?'. La tag SIEMPRE exige un pronombre de sujeto: 'doesn't he?'."
        ],
        [
            "El Efecto Espejo Bipolar: Si el inicio de la frase es POSITIVO (+), el final debe ser NEGATIVO (-). Si el inicio es NEGATIVO (-), el final debe ser POSITIVO (+). ¡Nunca dos polos iguales juntos!",
            "El Rescate de DO, DOES y DID: Cuando no veas ningún auxiliar visible en la frase, llama inmediatamente al equipo de rescate: DO (presente), DOES (3ª persona presente) o DID (pasado).",
            "Las Cuatro Excepciones Memorables: 1) I am -> aren't I? 2) Let's -> shall we? 3) Imperativo -> will you? 4) Everyone / Nobody -> they."
        ],
        "https://www.englisch-hilfen.de/en/grammar/question_tags.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 16: Expresiones de Acuerdo: SO DO I / NEITHER DO I / NOR DO I
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_16",
        "Clase 16: Expresiones de Acuerdo: SO DO I / NEITHER DO I / NOR DO I",
        "B1",
        "Concordancia Discursiva",
        "Las fórmulas discursivas de coincidencia y concordancia expresan adhesión inmediata hacia declaraciones previas formuladas por otros interlocutores, aplicando estructuras invertidas según la polaridad afirmativa o negativa del enunciado.",
        "Acuerdo con Afirmaciones (Yo también): SO + Auxiliar correspondiente + Sujeto: I love coffee -> SO DO I / I am tired -> SO AM I / She can swim -> SO CAN I. En lenguaje informal oral: Me too. Acuerdo con Negaciones (Yo tampoco): NEITHER / NOR + Auxiliar afirmativo + Sujeto: I don't eat meat -> NEITHER DO I / I am not tired -> NEITHER AM I / She won't go -> NOR WILL I. En lenguaje informal oral: Me neither.",
        "En la dinámica de la conversación fluida e interactiva en lengua inglesa, expresar acuerdo, coincidencia o empatía respecto a lo que acaba de manifestar otro hablante es una destreza pragmática indispensable para sonar natural. En español resolvemos estas réplicas mediante fórmulas universales invariables e independientes del verbo utilizado: decimos simplemente 'yo también' cuando coincidimos con una afirmación ('A mí me gusta el café - A mí también'), y decimos 'yo tampoco' cuando coincidimos con una negación ('No tengo dinero - Yo tampoco'). En el idioma inglés, si bien existen equivalentes informales coloquiales válidos para el registro oral distendido ('Me too' para afirmaciones y 'Me neither' para negaciones), el estándar gramatical institucional de nivel B1 exige el dominio de las estructuras elípticas invertidas con 'SO', 'NEITHER' y 'NOR'. Cuando el primer hablante emite una aseveración AFIRMATIVA y deseamos adherirnos a ella diciendo 'yo también', la sintaxis impone el orden invertido: SO + [AUXILIAR EXACTO O RESCATADO] + [SUJETO] ('I have been to London - SO HAVE I'; 'Carlos passed the exam - SO DID MARIA'). Cuando el primer hablante emite una declaración NEGATIVA y deseamos coincidir diciendo 'yo tampoco', el inglés prohíbe terminantemente el uso de 'so' o de 'too', imponiendo en su lugar las partículas negativas 'NEITHER' (/ˈnaɪ.ðər/ en UK, /ˈniː.ðər/ en US) o 'NOR' (/nɔːr/) seguidas del auxiliar en modo estrictamente AFIRMATIVO y el sujeto: NEITHER / NOR + [AUXILIAR AFIRMATIVO] + [SUJETO] ('I don't like horror movies - NEITHER DO I'; 'I can't drive - NOR CAN I'). Como 'neither' y 'nor' ya portan polaridad negativa intrínseca, el auxiliar debe permanecer afirmativo para evitar la doble negación (decir 'Neither don't I' es un error gravísimo). Asimismo, si se desea expresar coincidencia negativa al final de una oración completa con el verbo negado, se utiliza 'EITHER' en posición final: 'I don't like it EITHER'.",
        [
            "Acuerdo afirmativo con SO (Yo también): SO + Auxiliar + Sujeto: 'I am ready -> So am I', 'She speaks French -> So does he', 'We saw the film -> So did they'.",
            "Acuerdo negativo con NEITHER / NOR (Yo tampoco): NEITHER / NOR + Auxiliar AFIRMATIVO + Sujeto: 'I haven't finished -> Neither have I', 'She doesn't eat pork -> Nor does Carlos'.",
            "Morfología del Auxiliar: El auxiliar debe ser un reflejo exacto del tiempo de la oración previa: to be usa to be, modales usan modales, y verbos comunes sin auxiliar rescatan DO, DOES o DID.",
            "Prohibición de auxiliares negativos tras Neither/Nor: Está terminantemente prohibido usar auxiliares negativos: 'Neither do I' (correcto), 'Neither don't I' (inadmisible).",
            "Uso de EITHER al final de frase negativa: Si se construye una oración negativa completa, se remata con EITHER al final: 'I don't like football, and my brother doesn't like it EITHER'.",
            "Alternativas coloquiales orales: 'Me too' (para afirmar) y 'Me neither' (para negar). Son válidas en charlas informales entre amigos, pero en exámenes y entrevistas se prefieren las formas con So y Neither.",
            "Desacuerdo con la afirmación o negación previa: Si no estás de acuerdo, simplemente respondes con el pronombre y el auxiliar opuesto: 'I love tea - Oh, I don't'; 'I don't like fish - Well, I do!'.",
            "Coincidencia con otros sujetos: El sujeto puede ser cualquier persona o entidad: 'Carlos works hard - So does Maria'; 'Cats don't like water - Neither do dogs'."
        ],
        [
            "I have been working on this environmental software research project all week. So have I; our laboratory team has gathered substantial data. (He estado trabajando en este proyecto de investigación de software ambiental toda la semana. Yo también; nuestro equipo de laboratorio ha recopilado datos sustanciales).",
            "She didn't receive the official university scholarship confirmation email yesterday. Neither did I; perhaps the administrative portal is delayed. (Ella no recibió el correo electrónico oficial de confirmación de la beca universitaria ayer. Yo tampoco; quizás el portal administrativo está retrasado).",
            "Our engineering department can easily accommodate fifty new international postgraduate scholars this semester. So can ours in Boston. (Nuestro departamento de ingeniería puede alojar fácilmente a cincuenta nuevos becarios internacionales de posgrado este semestre. El nuestro en Boston también).",
            "I don't usually enjoy traveling long distances on commercial flights during stormy winter weather. Nor do I; turbulence makes me extremely anxious. (Por lo general no disfruto viajar largas distancias en vuelos comerciales durante el clima tormentoso de invierno. Yo tampoco; la turbulencia me vuelve extremadamente ansioso)."
        ],
        [
            "We spent our summer vacation exploring the picturesque coastal villages of Cornwall. So did our flatmates from London; they rented a charming cottage there. (Pasamos nuestras vacaciones de verano explorando los pintorescos pueblos costeros de Cornualles. Nuestros compañeros de piso de Londres también; alquilaron una encantadora casa de campo allí).",
            "The headmaster won't tolerate disruptive pupil behavior during the annual speech day ceremony. Neither will the school governors. (El director no tolerará el comportamiento disruptivo de los alumnos durante la ceremonia anual del día del discurso. Los gobernadores escolares tampoco).",
            "I am exceptionally pleased with the academic examination results achieved by our first-year law students. So am I; their progress has been remarkable. (Estoy excepcionalmente complacido con los resultados de los exámenes académicos logrados por nuestros estudiantes de derecho de primer año. Yo también; su progreso ha sido notable).",
            "She hasn't had any opportunity to visit the historical cathedral archives in Canterbury. Nor have I, but I hope to schedule a visit soon. (Ella no ha tenido ninguna oportunidad de visitar los archivos históricos de la catedral en Canterbury. Yo tampoco, pero espero programar una visita pronto)."
        ],
        [
            {"speaker": "Austin (US)", "text": "I really need a hot cup of coffee right now, Jessica. I didn't sleep very well last night.", "translation": "Realmente necesito una taza de café caliente ahora mismo, Jessica. No dormí muy bien anoche."},
            {"speaker": "Jessica (UK)", "text": "Neither did I! I was reviewing our chemistry laboratory notes until two in the morning.", "translation": "¡Yo tampoco! Estuve repasando nuestras notas de laboratorio de química hasta las dos de la mañana."},
            {"speaker": "Austin (US)", "text": "I love the fresh sourdough pastries they bake at the student union cafe across the quad.", "translation": "Me encantan los pasteles frescos de masa madre que hornean en la cafetería del sindicato estudiantil frente al cuadrilátero."},
            {"speaker": "Jessica (UK)", "text": "So do I! Their cinnamon rolls are absolutely delicious. Let's walk over there together.", "translation": "¡A mí también! Sus rollos de canela son absolutamente deliciosos. Caminemos hacia allá juntos."},
            {"speaker": "Austin (US)", "text": "I won't be able to stay long because my engineering seminar begins at ten o'clock sharp.", "translation": "No podré quedarme mucho tiempo porque mi seminario de ingeniería comienza a las diez en punto."},
            {"speaker": "Jessica (UK)", "text": "Neither will I. I have a tutorial at ten with my director of studies. A quick coffee will be perfect.", "translation": "Yo tampoco. Tengo una tutoría a las diez con mi director de estudios. Un café rápido será perfecto."}
        ],
        [
            "Responder 'So do I' a una oración negativa: responder 'So do I' a 'I don't like fish' es un error gravísimo. Con oraciones negativas debe responderse 'Neither do I' o 'Nor do I'.",
            "Usar auxiliar negativo tras neither: decir 'Neither don't I' o 'Neither haven't I'. Como neither ya es negativo, el auxiliar debe ser afirmativo: 'Neither do I' / 'Neither have I'.",
            "Equivocar el tiempo verbal del auxiliar: responder 'So do I' a 'I was tired' (debe ser 'So was I') o a 'I will go' (debe ser 'So will I').",
            "Usar 'too' al final de una frase negativa: decir 'I don't like it too'. Para acordar con una negación al final de la oración debe usarse either: 'I don't like it either'.",
            "Decir 'Me also' en lugar de 'Me too': la expresión informal fija es 'Me too', nunca 'Me also'."
        ],
        [
            "La Ley de los Signos Matemáticos: Afirmación (+) se responde con SO (+) [So do I]. Negación (-) se responde con NEITHER o NOR (-) [Neither do I]. ¡Jamás mezcles signos opuestos!",
            "El Baile Invertido: Recuerda que el verbo auxiliar salta por delante del sujeto como en una pregunta: SO + [Auxiliar] + [Sujeto].",
            "El Rescate del Auxiliar Fantasma: Si la frase original no tiene 'to be' ni modales ('I like chocolate', 'She bought a book'), llama a los auxiliares comodín: DO / DOES (presente) o DID (pasado) -> 'So do I', 'So did I'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/so_neither.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 17: Estructuras Causativas: HAVE / GET SOMETHING DONE
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_17",
        "Clase 17: Estructuras Causativas: HAVE / GET SOMETHING DONE",
        "B1",
        "Causativas & Servicios",
        "Las construcciones causativas expresan situaciones donde el sujeto no realiza la acción físicamente con sus propias manos, sino que encarga, contrata, delega o sufre que un profesional o servicio especializado ejecute la tarea sobre un objeto o posesión.",
        "Fórmula canónica: Sujeto + HAVE / GET (conjugado en el tiempo correspondiente) + OBJETO (cosa afectada) + PARTICIPIO PASADO (Past Participle - Columna 3): I had my hair cut yesterday / She is having her car repaired / We must get the roof fixed. Variante informal oral: Se utiliza GET en lugar de HAVE (I got my hair cut). Variación de infortunio pasivo: He had his wallet stolen (sufrió el robo de su cartera).",
        "La estructura causativa pasiva 'HAVE / GET SOMETHING DONE' representa uno de los logros sintácticos más característicos y sofisticados del inglés intermedio B1. En la vida diaria de cualquier sociedad moderna, las personas no ejecutan por sí mismas todas las tareas complejas de mantenimiento, salud, peluquería o reparación técnica: no solemos cortarnos el pelo a nosotros mismos, ni reparamos el motor de nuestro automóvil, ni reemplazamos el tejado de nuestra vivienda con nuestras propias manos, sino que contratamos y pagamos a un especialista profesional (un peluquero, un mecánico, un techador) para que realice el servicio por nosotros. En español solemos utilizar expresiones ambiguas como 'ayer me corté el pelo' o 'voy a arreglar mi coche', las cuales, interpretadas de forma literal, significarían erróneamente que tomamos las tijeras o las llaves mecánicas nosotros mismos. En inglés, por el contrario, decir 'I cut my hair yesterday' significa exactamente eso: que tomaste una tijera y te cortaste el cabello tú mismo frente al espejo. Si el servicio fue realizado por un profesional de la peluquería, la norma lingüística impone inexorablemente la estructura causativa: [SUJETO] + [HAVE/GET CONJUGADO] + [OBJETO] + [PARTICIPIO PASADO] ('I had my hair cut yesterday'). El verbo 'HAVE' (o 'GET' en un registro conversacional más informal) se conjuga en el tiempo que demande la temporalidad de la frase (present simple: 'I have it cleaned'; present continuous: 'I am having it repaired'; past simple: 'I had it painted'; future with will: 'I will have it delivered'; modals: 'You should have it checked'). La cosa sobre la que recae el servicio se inserta en la posición medial entre el auxiliar causativo y el participio pasado invariable. Además de la contratación voluntaria de servicios, esta estructura se utiliza para expresar infortunios, percances o accidentes sufridos involuntariamente por el sujeto sobre sus posesiones: 'He had his wallet stolen on the subway' (le robaron la cartera en el metro).",
        [
            "Estructura matemática invariable: Sujeto + [HAVE o GET conjugado] + [OBJETO] + [PARTICIPIO PASADO].",
            "Significado de servicio contratado: Indica que un tercero o profesional realizó el trabajo por encargo: 'She had her teeth cleaned at the dentist's office'.",
            "Contraste radical con acción directa propia: 'I painted my house' (yo mismo con la brocha en la mano) vs. 'I had my house painted' (contraté a pintores profesionales).",
            "Alternancia informal con GET: En habla cotidiana 'get' sustituye con absoluta frecuencia a 'have': 'I need to get my car serviced' (= have my car serviced).",
            "Flexibilidad temporal absoluta: Have/Get se conjuga en cualquier tiempo verbal: Present Continuous ('She is having her eyes tested'); Past Simple ('We had the roof fixed'); Future ('I will have it cleaned').",
            "Preguntas con auxiliares DO/DOES/DID: Como have actúa como verbo léxico causativo, para interrogar se rescatan auxiliares: 'Did you have your hair cut yesterday?', 'How often do you have your car serviced?'.",
            "Uso para infortunios y pérdidas involuntarias (Adversity Causative): Describe desgracias sufridas sobre pertenencias: 'Carlos had his passport stolen at the railway station'.",
            "Prohibición de infinitivo o gerundio al final: La última palabra de la estructura DEBE ser un participio pasado: 'have it repaired' (correcto), 'have it repair' o 'have it repairing' (inadmisible)."
        ],
        [
            "The engineering department had all the precision laboratory sensors calibrated by international technical specialists last week. (El departamento de ingeniería hizo calibrar todos los sensores de laboratorio de precisión por especialistas técnicos internacionales la semana pasada).",
            "She is currently having her modern hybrid vehicle serviced at the official automobile dealership in downtown Los Angeles. (Ella actualmente está haciendo revisar su moderno vehículo híbrido en el concesionario oficial de automóviles en el centro de Los Ángeles).",
            "We must have the central air conditioning system inspected before the summer heatwave arrives in southern California. (Debemos hacer inspeccionar el sistema central de aire acondicionado antes de que llegue la ola de calor de verano en el sur de California).",
            "Unfortunately, the visiting research scholar had his laptop and research notebooks stolen from his hotel room yesterday evening. (Desafortunadamente, al académico de investigación visitante le robaron su computadora portátil y sus cuadernos de investigación de su habitación de hotel ayer por la tarde)."
        ],
        [
            "The headmaster decided to have the historic library reading room completely redecorated before the new academic term commences. (El director decidió hacer redecorar por completo la histórica sala de lectura de la biblioteca antes de que comience el nuevo trimestre académico).",
            "I need to get my eyes tested by an optometrist in the high street because I have been experiencing frequent headaches while reading. (Necesito hacerme examinar la vista por un optometrista en la calle principal porque he estado experimentando dolores de cabeza frecuentes mientras leo).",
            "They had their antique grandfather clock restored by a master horologist in London, and it now chimes with perfect acoustic clarity. (Ellos hicieron restaurar su antiguo reloj de pie por un maestro relojero en Londres, y ahora repica con perfecta claridad acústica).",
            "How often do you have your central heating boiler serviced by a certified gas engineer in your flat? (¿Con qué frecuencia haces revisar la caldera de calefacción central por un ingeniero de gas certificado en tu piso?)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Your hair looks fantastic today, Jessica! Did you have your hair cut over the weekend?", "translation": "¡Tu cabello se ve fantástico hoy, Jessica! ¿Te hiciste cortar el cabello durante el fin de semana?"},
            {"speaker": "Jessica (UK)", "text": "Yes, I did! I had it cut and styled at that charming salon near the railway station on Saturday afternoon.", "translation": "¡Sí, así fue! Me lo hice cortar y peinar en ese encantador salón cerca de la estación de trenes el sábado por la tarde."},
            {"speaker": "Austin (US)", "text": "They did an incredible job! I really need to have my car repaired this week. The brakes are making a squeaking noise.", "translation": "¡Hicieron un trabajo increíble! Yo realmente necesito hacer reparar mi auto esta semana. Los frenos están haciendo un ruido chirriante."},
            {"speaker": "Jessica (UK)", "text": "You shouldn't delay that. You ought to get them checked by a certified mechanic immediately.", "translation": "No deberías demorar eso. Deberías hacértelos revisar por un mecánico certificado inmediatamente."},
            {"speaker": "Austin (US)", "text": "I am having it towed to the auto repair shop tomorrow morning before my physics seminar.", "translation": "Voy a hacer que lo remolquen al taller de reparación de autos mañana por la mañana antes de mi seminario de física."},
            {"speaker": "Jessica (UK)", "text": "That is very wise. Safety on the roads should always be our top priority.", "translation": "Eso es muy prudente. La seguridad en las carreteras siempre debería ser nuestra máxima prioridad."}
        ],
        [
            "Decir 'I cut my hair yesterday' cuando fuiste a la peluquería: significa literalmente que tú mismo tomaste la tijera. Para el servicio profesional debe ser 'I had my hair cut'.",
            "Poner el verbo principal en infinitivo sin cambio: decir 'I had my car repair'. Debe usarse el participio pasado: 'I had my car repaired'.",
            "Colocar el objeto al final: decir 'I had repaired my car'. El objeto DEBE colocarse en medio: 'I had my car repaired'.",
            "Olvidar usar auxiliar en preguntas pasadas: formular 'Had you your hair cut?'. La pregunta exige did: 'Did you have your hair cut?'.",
            "Confundir la causativa con la voz pasiva simple: en la causativa el sujeto es quien encarga la acción ('I had my car fixed'), no la cosa ('My car was fixed')."
        ],
        [
            "La Fórmula del Sándwich del Servicio: Pan 1 = HAVE o GET (conjugado). Relleno = LA COSA (my hair, my car, the roof). Pan 2 = PARTICIPIO PASADO (cut, repaired, painted).",
            "La Prueba de la Tijera Propia: Si dices 'I cut my hair', imagínate a ti mismo con tijeras en la mano frente al espejo cortándote mechones. Si no fue así y le pagaste a un peluquero, di inmediatamente: 'I had my hair cut'.",
            "El Salva-Vidas Coloquial GET: En una charla cotidiana, puedes usar libremente 'GET' en lugar de 'have': 'I need to get my phone repaired'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/causative.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 18: Phrasal Verbs Separables e Inseparables Fundamentales
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_18",
        "Clase 18: Phrasal Verbs Separables e Inseparables Fundamentales",
        "B1",
        "Verbos Frasales",
        "Los verbos frasales combinan una raíz verbal léxica con una o más partículas preposicionales o adverbiales, mutando radicalmente su significado original y dividiéndose en estructuras separables e inseparables.",
        "Phrasal Verbs Separables: El objeto directo nominal puede colocarse después de la partícula o entre el verbo y la partícula (Turn on the light / Turn the light on). Regla de Oro del Pronombre: Si el objeto es un pronombre (it, them, him, her), DEBE colocarse OBLIGATORIAMENTE en medio: Turn IT on (nunca Turn on it). Phrasal Verbs Inseparables: La partícula y el verbo jamás pueden disociarse, debiendo situarse el objeto siempre al final: Look after the baby / Look after him. Verbos Intransitivos: Carecen de objeto: Wake up, get up, show up.",
        "Los verbos frasales (Phrasal Verbs) constituyen el corazón idiomático y la prueba de fuego de la naturalidad expresiva en la lengua inglesa de nivel B1. Un phrasal verb surge de la amalgama simbiótica entre un verbo común (turn, look, put, give, take, get) y una partícula adverbial o preposicional (on, off, up, down, out, away, after). El fenómeno lingüístico cardinal de estas construcciones radica en que su significado global rara vez puede deducirse de la suma literal de sus partes: 'give' significa dar, pero 'give up' significa rendirse o abandonar un hábito; 'look' significa mirar, pero 'look after' significa cuidar o proteger, y 'look forward to' significa esperar algo con ilusión. En el plano sintáctico, los phrasal verbs transitivos se dividen en dos familias estructurales que todo estudiante debe dominar: Primera familia: PHRASAL VERBS SEPARABLES (Separable Phrasal Verbs). En estos verbos, cuando el objeto directo es un sustantivo común o nombre propio, existe libertad de colocación: el sustantivo puede ubicarse después de la partícula o intercalarse en medio del verbo y la partícula ('Turn on the computer' o 'Turn the computer on'; 'Take off your coat' o 'Take your coat off'). Sin embargo, aquí interviene la REGLA DE ORO INVIOLABLE DEL PRONOMBRE: si el objeto directo es un pronombre personal (it, them, him, her, me, us), el pronombre DEBE colocarse OBLIGATORIAMENTE en la posición medial entre el verbo y la partícula: 'Turn IT on' (estando terminantemente prohibido decir 'Turn on it'); 'Take IT off' (prohibido 'Take off it'); 'Pick THEM up' (prohibido 'Pick up them'). Segunda familia: PHRASAL VERBS INSEPARABLES (Inseparable Phrasal Verbs). En estos verbos, el vínculo morfosintáctico entre el verbo y su preposición es indisoluble; el objeto (sea sustantivo o pronombre) debe situarse SIEMPRE después de la partícula ('Look after the children' / 'Look after them', siendo agramatical decir 'Look the children after'). Tercera familia: PHRASAL VERBS INTRANSITIVOS, los cuales carecen de objeto directo ('wake up', 'grow up', 'break down').",
        [
            "Naturaleza idiomática no literal: El significado de la frase no equivale a la suma de sus palabras individuales: give up = renunciar; put off = posponer.",
            "Phrasal Verbs Separables fundamentales: turn on/off (encender/apagar), turn up/down (subir/bajar volumen), pick up (recoger), put on (ponerse ropa), take off (quitarse ropa), give up (abandonar), fill in/out (llenar formulario), throw away (botar basura).",
            "La Regla de Oro del Pronombre en Separables: El pronombre (it, them) VA SIEMPRE EN MEDIO: 'Turn it off' (correcto), 'Turn off it' (error gravísimo en inglés culto).",
            "Libertad con sustantivos en Separables: El sustantivo puede ir al final o en medio: 'Turn on the lights' = 'Turn the lights on'.",
            "Phrasal Verbs Inseparables fundamentales: look after (cuidar a alguien), run into (encontrarse por casualidad), get on/off (subir/bajar de transporte masivo), look for (buscar), come across (toparse con algo).",
            "Posición obligatoria del objeto en Inseparables: Siempre después de la partícula, sea sustantivo o pronombre: 'I ran into Carlos' / 'I ran into him'.",
            "Phrasal Verbs Intransitivos (Sin objeto): break down (averiarse un auto/máquina), wake up (despertarse), get up (levantarse de la cama), show up (aparecer/presentarse).",
            "Diferenciación diatópica de formularios: En American English se dice 'fill out a form'; en British English se dice preferentemente 'fill in a form'."
        ],
        [
            "Please turn off all your electronic devices before the flight takes off from the runway in San Francisco. (Por favor apaguen todos sus dispositivos electrónicos antes de que el vuelo despegue de la pista en San Francisco).",
            "I ran into an old college roommate yesterday while I was looking for research books in the downtown public library. (Me encontré con un viejo compañero de habitación de la universidad ayer mientras estaba buscando libros de investigación en la biblioteca pública del centro).",
            "Don't throw those cardboard boxes away; we can easily recycle them or use them to pack laboratory equipment. (No tires aquellas cajas de cartón; podemos reciclarlas fácilmente o usarlas para empacar equipo de laboratorio).",
            "She decided to give up sugar and ultra-processed food in order to improve her physical endurance and cardiovascular health. (Ella decidió dejar el azúcar y los alimentos ultraprocesados para mejorar su resistencia física y salud cardiovascular)."
        ],
        [
            "Could you please look after my flat and water the houseplants while I am away attending an academic conference in London? (¿Podrías por favor cuidar mi piso y regar las plantas de interior mientras estoy fuera asistiendo a una conferencia académica en Londres?).",
            "He put on his heavy woollen trench coat and wrapped a warm scarf around his neck before stepping out into the chilly autumn fog. (Se puso su pesada gabardina de lana y se envolvió una bufanda abrigada alrededor del cuello antes de salir a la fría niebla otoñal).",
            "The international student had to fill in three separate visa declaration forms before passing through border control at Heathrow Airport. (El estudiante internacional tuvo que rellenar tres formularios de declaración de visado separados antes de pasar por el control de fronteras en el aeropuerto de Heathrow).",
            "Our commuter train broke down just outside Cambridge, which caused severe travel delays across the entire regional network. (Nuestro tren de cercanías se averió justo a las afueras de Cambridge, lo que causó graves retrasos en los viajes en toda la red regional)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Hey Jessica, did you turn off the computer monitors in the engineering lab before leaving?", "translation": "Hola Jessica, ¿apagaste los monitores de las computadoras en el laboratorio de ingeniería antes de salir?"},
            {"speaker": "Jessica (UK)", "text": "Yes, I switched them all off and locked the door behind me. I also handed in our project report to the supervisor.", "translation": "¡Sí, los apagué todos y cerré la puerta detrás de mí! También entregué nuestro informe de proyecto al supervisor."},
            {"speaker": "Austin (US)", "text": "That is a huge relief! I was worried that we had left them on overnight.", "translation": "¡Eso es un gran alivio! Me preocupaba que los hubiéramos dejado encendidos durante la noche."},
            {"speaker": "Jessica (UK)", "text": "Not at all. By the way, I ran into Dr. Miller earlier. He asked if we could look over the lab inventory tomorrow.", "translation": "Para nada. Por cierto, me encontré con el Dr. Miller antes. Preguntó si podríamos revisar el inventario del laboratorio mañana."},
            {"speaker": "Austin (US)", "text": "Sure, I can help out with that. I will pick you up at your flat around nine o'clock in the morning.", "translation": "Claro, puedo ayudar con eso. Te recogeré en tu piso alrededor de las nueve de la mañana."},
            {"speaker": "Jessica (UK)", "text": "Brilliant. Don't throw away that inventory checklist we printed yesterday; we will definitely need it.", "translation": "Estupendo. No tires esa lista de inventario que imprimimos ayer; definitivamente la necesitaremos."}
        ],
        [
            "Poner el pronombre al final en verbos separables: decir 'Turn on it' o 'Pick up them'. La regla de oro exige el pronombre en medio: 'Turn it on', 'Pick them up'.",
            "Separar un phrasal verb inseparable: decir 'Look the baby after' o 'Look him after'. Debe mantenerse unido: 'Look after the baby' / 'Look after him'.",
            "Inventar la preposición incorrecta: decir 'turn down' (bajar volumen) cuando se quiere decir 'turn off' (apagar).",
            "Tratar de usar un phrasal verb intransitivo con objeto directo: decir 'The bus broke down the engine'. Break down es intransitivo: 'The bus broke down'.",
            "Confundir 'fill in' (UK) y 'fill out' (US) creyendo que uno es incorrecto; ambos significan completar un formulario en sus respectivos dialectos estándar."
        ],
        [
            "La Ley del Sándwich del Pronombre (IT y THEM al Centro): A los pronombres 'it' y 'them' no les gusta quedarse solos al final; en los verbos separables siempre se meten al medio: 'Turn [IT] off', 'Take [THEM] off', 'Throw [IT] away'.",
            "La Prueba de Inseparabilidad: Con verbos de movimiento o cuidado como 'look after' o 'run into', la partícula está soldada con pegamento industrial: jamás metas nada en medio.",
            "Aprende en Pares de Opuestos: Memoriza los phrasal verbs en parejas gemelas: turn on / turn off; put on / take off; get on / get off; speed up / slow down."
        ],
        "https://www.englisch-hilfen.de/en/grammar/phrasal_verbs.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 19: Conectores Lógicos: ALTHOUGH, DESPITE, BECAUSE OF
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_19",
        "Clase 19: Conectores de Causa y Contraste: ALTHOUGH, DESPITE, BECAUSE OF",
        "B1",
        "Conectores Lógicos",
        "Los conectores lógicos de causa y concesión articulan relaciones discursivas complejas de contra-expectativa y causalidad, diferenciándose estrictamente según rijan una cláusula con verbo conjugado o un sintagma nominal.",
        "Conectores de Concesión con Cláusula Completa (Sujeto + Verbo): ALTHOUGH / EVEN THOUGH / THOUGH + Sujeto + Verbo conjugado: Although it was raining, we went for a walk. Conectores de Concesión con Sintagma Nominal o Gerundio: DESPITE / IN SPITE OF + Sustantivo / Pronombre / Verbo-ING: Despite the rain, we went for a walk / In spite of being tired, she worked late. Conector de Causa con Cláusula: BECAUSE + Sujeto + Verbo: Because it rained, we stayed home. Conector de Causa con Sustantivo: BECAUSE OF + Sustantivo / Pronombre: Because of the rain, we stayed home.",
        "La articulación de relaciones discursivas de contraste, concesión y causa constituye el andamiaje retórico fundamental para construir párrafos argumentativos coherentes y cohesionados en nivel B1. La confusión más arraigada entre los estudiantes hispanohablantes no radica en el significado conceptual de estas partículas (todas traducen ideas afines a 'a pesar de', 'aunque' o 'debido a'), sino en el régimen sintáctico inmediato que cada conector exige a su derecha. En la esfera de la concesión o contra-expectativa ('a pesar de que algo ocurrió, el resultado fue opuesto'), el idioma divide sus conectores en dos familias sintácticas inflexibles: Primera familia: CONECTORES CLAUSALES. 'ALTHOUGH' (/ɔːlˈðoʊ/), 'EVEN THOUGH' (más enfático e intenso) y 'THOUGH' (frecuente en habla cotidiana y al final de frase en UK) EXIGEN OBLIGATORIAMENTE UNA CLÁUSULA COMPLETA CON SUJETO Y VERBO CONJUGADO ('Although the weather was freezing, they enjoyed the hike'). Segunda familia: CONECTORES NOMINALES. 'DESPITE' (/dɪˈspaɪt/) e 'IN SPITE OF' (/ɪn spaɪt əv/, siendo rigurosamente sinónimos) PROHÍBEN UNA CLÁUSULA VERBAL DIRECTA Y EXIGEN EXCLUSIVAMENTE UN SUSTANTIVO, UN PRONOMBRE O UN VERBO EN GERUNDIO (-ING) ('Despite the freezing weather, they enjoyed the hike'; 'In spite of feeling ill, she attended the lecture'). Para poder utilizar despite con una cláusula completa se debe recurrir a la locución bisagra 'despite the fact that + Sujeto + Verbo' ('Despite the fact that it was raining...'). De manera perfectamente análoga opera la esfera de la causalidad: 'BECAUSE' exige una cláusula completa con sujeto y verbo ('We canceled the match because it was raining'), mientras que 'BECAUSE OF' funciona como preposición compuesta y exige exclusivamente un sustantivo o pronombre ('We canceled the match because of the rain').",
        [
            "ALTHOUGH / EVEN THOUGH + Cláusula Completa (Sujeto + Verbo): 'Although he studied hard, he failed the exam'. Even though es más enfático.",
            "DESPITE / IN SPITE OF + Sustantivo o Gerundio (-ING): 'Despite his hard work, he failed' / 'In spite of studying hard, he failed'.",
            "Regla de oro ortográfica: 'DESPITE' jamás lleva 'of' (decir 'despite of' es un error gravísimo). 'IN SPITE OF' exige obligatoriamente sus tres palabras completas.",
            "Fórmula salvavidas THE FACT THAT: Permite usar despite con sujeto y verbo: 'Despite THE FACT THAT it rained, we had fun'.",
            "BECAUSE + Sujeto + Verbo: Introduce la causa con una oración completa: 'He stayed at home because he was sick'.",
            "BECAUSE OF + Sustantivo / Pronombre: Introduce la causa como un sintagma nominal: 'He stayed at home because of his illness'.",
            "Posición de la coma con conectores: Si el conector abre la oración, se coloca una coma obligatoria entre las dos cláusulas: 'Although it was cold, we went outside'. Si va en medio, la coma se omite.",
            "THOUGH al final de la oración en registro conversacional (UK): En inglés británico oral es sumamente común colocar 'though' al final con valor de 'sin embargo': 'The food was expensive. It was delicious, though!'."
        ],
        [
            "Although the international researchers encountered numerous technical obstacles, they successfully completed the aerospace propulsion experiment. (Aunque los investigadores internacionales encontraron numerosos obstáculos técnicos, completaron con éxito el experimento de propulsión aeroespacial).",
            "Despite severe atmospheric turbulence over the Rocky Mountains, the commercial passenger flight landed smoothly at Denver International Airport. (A pesar de la severa turbulencia atmosférica sobre las Montañas Rocosas, el vuelo comercial de pasajeros aterrizó suavemente en el Aeropuerto Internacional de Denver).",
            "The outdoor commencement ceremony was moved into the university central auditorium because of torrential rainfall across the campus. (La ceremonia de graduación al aire libre se trasladó al auditorio central de la universidad debido a lluvias torrenciales en todo el campus).",
            "In spite of having very little previous laboratory experience, the undergraduate student mastered the complex bioengineering software rapidly. (A pesar de tener muy poca experiencia previa de laboratorio, el estudiante de pregrado dominó el complejo software de bioingeniería rápidamente)."
        ],
        [
            "The commuter train service between London and Cambridge was cancelled this morning because of an unexpected electrical signaling malfunction. (El servicio de trenes de cercanías entre Londres y Cambridge se canceló esta mañana debido a una falla inesperada de señalización eléctrica).",
            "Even though the historic stone cathedral suffered extensive damage during the storm, conservation experts restored the medieval stained glass. (A pesar de que la histórica catedral de piedra sufrió extensos daños durante la tormenta, los expertos en conservación restauraron los vitrales medievales).",
            "Despite the fact that tuition fees have increased across Great Britain, international university applications have reached record levels this term. (A pesar de que las tasas de matrícula han aumentado en toda Gran Bretaña, las solicitudes universitarias internacionales han alcanzado niveles récord este trimestre).",
            "The legal presentation was extremely demanding and exhausting; the university students delivered their arguments brilliantly, though. (La presentación legal fue sumamente exigente y agotadora; los estudiantes universitarios expusieron sus argumentos brillantemente, sin embargo)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Did you manage to submit your engineering coursework on time, Jessica, despite the computer lab power outage?", "translation": "¿Lograste entregar tu trabajo de ingeniería a tiempo, Jessica, a pesar del corte de energía en el laboratorio de computación?"},
            {"speaker": "Jessica (UK)", "text": "Yes, I did! Although the power cut lasted for nearly two hours, I finished my statistical analysis on my laptop battery.", "translation": "¡Sí, lo logré! Aunque el corte de energía duró casi dos horas, terminé mi análisis estadístico con la batería de mi computadora portátil."},
            {"speaker": "Austin (US)", "text": "That was very impressive resilience. I had to delay my presentation because of a missing hardware connector.", "translation": "Esa fue una resiliencia muy impresionante. Yo tuve que demorar mi presentación debido a un conector de hardware faltante."},
            {"speaker": "Jessica (UK)", "text": "In spite of that minor setback, our professor praised your technical design during the seminar, didn't he?", "translation": "A pesar de ese inconveniente menor, nuestro profesor elogió tu diseño técnico durante el seminario, ¿no es así?"},
            {"speaker": "Austin (US)", "text": "Yes, he gave our project an excellent evaluation. The preparation was grueling, but it was definitely worth it, though!", "translation": "¡Sí, le dio a nuestro proyecto una excelente evaluación! La preparación fue agotadora, ¡pero definitivamente valió la pena, sin embargo!"},
            {"speaker": "Jessica (UK)", "text": "Brilliant. Hard work under pressure always produces the most rewarding academic outcomes.", "translation": "Espléndido. El trabajo duro bajo presión siempre produce los resultados académicos más gratificantes."}
        ],
        [
            "Escribir 'despite of': la palabra 'despite' NUNCA lleva of. Debe ser 'despite the rain' o 'in spite of the rain'.",
            "Poner una cláusula completa tras despite sin 'the fact that': decir 'Despite it was raining'. Debe ser 'Although it was raining' o 'Despite the rain'.",
            "Confundir 'because' con 'because of': decir 'We stayed home because the rain' (debe ser 'because OF the rain') o 'because of it rained' (debe ser 'because it rained').",
            "Omitir la coma cuando el conector abre la oración: escribir 'Although he worked hard he failed' sin la coma separadora obligatoria.",
            "Usar 'although' con un sustantivo sin verbo: decir 'Although the rain, we went out'. Con sustantivo debe ser 'Despite the rain'."
        ],
        [
            "La Prueba del Verbo: Mira lo que viene inmediatamente después del conector: ¿Hay un [Sujeto + Verbo Conjugado]? -> Usa ALTHOUGH o BECAUSE. ¿Hay solo un [Sustantivo o Verbo-ING]? -> Usa DESPITE o BECAUSE OF.",
            "La Trampa del 'OF': Grábate esta regla de simetría: DESPITE va solo (1 palabra, sin 'of'). IN SPITE OF va en trío (3 palabras, con 'of').",
            "El Puente Mágico 'THE FACT THAT': Si estás obligado a usar despite pero tienes una frase con sujeto y verbo, inserta el puente mágico: 'Despite THE FACT THAT + [Sujeto + Verbo]'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/conjunctions_contrast.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 20: Expresiones de Familiaridad: BE USED TO vs. GET USED TO + Gerundio
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "b1_lesson_20",
        "Clase 20: Expresiones de Familiaridad: BE USED TO vs. GET USED TO + Gerundio",
        "B1",
        "Patrones de Hábito y Adaptación",
        "Las estructuras perifrásticas be used to y get used to expresan el estado de habituación o el proceso gradual de adaptación hacia situaciones novedosas o entornos culturales desafiantes, rigiendo obligatoriamente un gerundio o sustantivo.",
        "BE USED TO (Estar acostumbrado / Estado de familiaridad presente): Sujeto + TO BE (am/is/are/was/were) + USED TO + Sustantivo / Pronombre / Verbo en GERUNDIO (-ING): I am used to waking up early / She is used to cold weather. GET USED TO (Acostumbrarse / Proceso dinámico de transición y adaptación): Sujeto + GET (conjugable en cualquier tiempo) + USED TO + Sustantivo / Pronombre / Verbo en GERUNDIO (-ING): I am getting used to the British food / You will get used to driving on the left.",
        "Para coronar con absoluta maestría el nivel B1 y consolidar el perfil de un usuario independiente en la lengua inglesa, es indispensable desentrañar y dominar la sutil tríada de las estructuras con 'used to'. Muchos aprendices confunden irremediablemente tres construcciones que comparten la grafía 'used to', pero que pertenecen a universos sintácticos y semánticos totalmente dispares: 1) 'USED TO + INFINITIVO DESNUDO' (estudiado en la Clase 11), que expresa un hábito del pasado que ya no existe ('I used to live in Paris'); 2) 'BE USED TO + GERUNDIO / SUSTANTIVO', que denota un ESTADO DE FAMILIARIDAD CONSOLIDADA ('estar acostumbrado a algo'), indicando que la situación ya no resulta extraña, difícil, incómoda ni sorprendente para el sujeto ('I am used to spicy food; it doesn't bother me at all'); y 3) 'GET USED TO + GERUNDIO / SUSTANTIVO', que denota el PROCESO DINÁMICO DE TRANSICIÓN, APRENDIZAJE Y ADAPTACIÓN PROGRESIVA ('acostumbrarse o habituarse a algo nuevo'), describiendo el camino gradual desde la incomodidad inicial hacia la normalidad ('It was difficult at first, but I am slowly getting used to living alone'). La regla de oro gramatical más crítica y rigurosa de estas dos últimas estructuras radica en la naturaleza de la palabra 'TO': en 'be used to' y 'get used to', la partícula 'TO' NO es la marca del infinitivo verbal, sino una AUTÉNTICA PREPOSICIÓN DE RÉGIMEN. Por consiguiente, de acuerdo con las leyes fundamentales de la sintaxis inglesa, cualquier verbo que se coloque inmediatamente tras una preposición debe adoptar de forma obligatoria e inquebrantable la forma de GERUNDIO con el sufijo '-ING' ('I am used to DRIVING on the left', siendo un gravísimo error decir 'I am used to drive'). Asimismo, 'get used to' es extraordinariamente flexible porque el verbo 'get' puede conjugarse en presente continuo ('I am getting used to it'), pasado simple ('I got used to it'), futuro con will ('You will get used to it') o con modales ('It's hard to get used to the cold').",
        [
            "BE USED TO = ESTAR ACOSTUMBRADO (Estado de normalidad ya asimilado): 'She is used to working long hospital shifts' (ya no le cuesta trabajo; es normal para ella).",
            "GET USED TO = ACOSTUMBRARSE (Proceso dinámico de adaptación en marcha): 'He is getting used to the cold British winter' (está en proceso de habituarse).",
            "Régimen obligatorio de GERUNDIO (-ING) o SUSTANTIVO: Tras 'to' debe ir siempre -ING o un nombre: 'be used to LIVING in London', 'get used to THE NOISE'.",
            "Naturaleza preposicional de TO: 'To' es preposición, no infinitivo; por eso prohíbe el infinitivo desnudo: 'I am used to driving' (correcto), 'I am used to drive' (inadmisible).",
            "Conjugación temporal de BE USED TO: I am used to (presente), I was used to (pasado), I haven't been used to (present perfect).",
            "Conjugación temporal de GET USED TO: I got used to (pasado: me acostumbré), I am getting used to (continuo: me estoy acostumbrando), I will get used to (futuro: te acostumbrarás), I can't get used to (incapacidad).",
            "Contraste definitivo con USED TO: 'I used to drive' = En el pasado conducía, pero hoy ya no conduzco (hábito pretérito). 'I am used to driving' = Conduzco habitualmente y estoy totalmente acostumbrado a hacerlo (familiaridad presente).",
            "Estructura negativa: 'I am NOT used to this noise', 'He CANNOT get used to waking up early'."
        ],
        [
            "When international software engineers relocate to Silicon Valley, they usually get used to the fast-paced corporate work culture within a few months. (Cuando los ingenieros de software internacionales se trasladan a Silicon Valley, por lo general se acostumbran a la cultura laboral corporativa de ritmo acelerado en pocos meses).",
            "I was born and raised in southern California, so I am completely used to warm sunny weather and dry desert climates. (Nací y crecí en el sur de California, así que estoy completamente acostumbrado al clima cálido y soleado y a los climas desérticos secos).",
            "It was rather intimidating at first, but our undergraduate students are slowly getting used to presenting their research before large academic audiences. (Fue bastante intimidante al principio, pero nuestros estudiantes de pregrado se están acostumbrando lentamente a presentar sus investigaciones ante grandes audiencias académicas).",
            "She couldn't get used to driving on the left-hand side of the road during her first month living in Great Britain. (Ella no pudo acostumbrarse a conducir por el lado izquierdo de la carretera durante su primer mes viviendo en Gran Bretaña)."
        ],
        [
            "Having lived in central London for more than twenty years, he is thoroughly used to the constant hum of traffic and busy underground stations. (Habiendo vivido en el centro de Londres durante más de veinte años, está completamente acostumbrado al zumbido constante del tráfico y a las concurridas estaciones de metro).",
            "It took our family several months to get used to the chilly and damp autumn weather in northern Yorkshire after moving from Spain. (A nuestra familia le tomó varios meses acostumbrarse al clima otoñal frío y húmedo en el norte de Yorkshire después de mudarse de España).",
            "The primary school pupils are already used to utilizing digital tablet computers for interactive mathematics exercises during morning lessons. (Los alumnos de la escuela primaria ya están acostumbrados a utilizar computadoras tipo tableta digital para ejercicios interactivos de matemáticas durante las clases de la mañana).",
            "Don't worry about the demanding academic workload at Oxford; you will soon get used to writing detailed weekly essays for your tutors. (No te preocupes por la exigente carga de trabajo académico en Oxford; pronto te acostumbrarás a escribir ensayos semanales detallados para tus tutores)."
        ],
        [
            {"speaker": "Austin (US)", "text": "How are you finding life in Great Britain so far, Austin? Have you gotten used to living in London?", "translation": "¿Cómo encuentras la vida en Gran Bretaña hasta ahora, Austin? ¿Te has acostumbrado a vivir en Londres?"},
            {"speaker": "Jessica (UK)", "text": "It was quite an adjustment initially, but I am gradually getting used to the unpredictable rainy weather and taking the tube daily.", "translation": "Fue todo un ajuste al principio, pero gradualmente me estoy acostumbrando al clima lluvioso impredecible y a tomar el metro a diario."},
            {"speaker": "Austin (US)", "text": "What about the food and the traditional tea culture? Are you used to drinking tea with milk yet?", "translation": "¿Qué hay de la comida y la cultura tradicional del té? ¿Estás acostumbrado a beber té con leche ya?"},
            {"speaker": "Jessica (UK)", "text": "I am completely used to it now! In fact, I have a cup of Earl Grey every single morning with breakfast.", "translation": "¡Estoy completamente acostumbrado a eso ahora! De hecho, tomo una taza de Earl Grey todas las mañanas con el desayuno."},
            {"speaker": "Austin (US)", "text": "That is brilliant! The only thing I can't get used to is looking right before crossing the road instead of looking left.", "translation": "¡Eso es estupendo! La única cosa a la que no puedo acostumbrarme es a mirar a la derecha antes de cruzar la calle en lugar de mirar a la izquierda."},
            {"speaker": "Jessica (UK)", "text": "Be very careful with pedestrian crossings! You will get used to it with time, but safety requires constant vigilance.", "translation": "¡Ten mucho cuidado con los pasos de peatones! Te acostumbrarás con el tiempo, pero la seguridad requiere vigilancia constante."}
        ],
        [
            "Poner infinitivo base tras be used to: decir 'I am used to wake up early'. Tras la preposición to debe ir gerundio: 'I am used to waking up early'.",
            "Confundir 'used to' (hábito pasado) con 'be used to' (estar acostumbrado): decir 'I used to driving' para hablar de un hábito pasado; o decir 'I am used to drive' para hablar de familiaridad.",
            "Omitir el verbo to be en be used to: decir 'I used to the cold weather' (debe ser 'I am used to the cold weather').",
            "Olvidar que 'get' se conjuga: decir 'Yesterday I get used to it'. En pasado debe ser 'Yesterday I got used to it'.",
            "Pensar que 'get used to' solo se usa con verbos: olvidar que también se usa perfectamente con sustantivos directos ('I got used to the food')."
        ],
        [
            "La Prueba de los Tres Mundos de USED TO: 1) USED TO + Infinitivo = 'Antes lo hacía, hoy ya no' (Pasado muerto). 2) BE USED TO + -ING = 'Es normal para mí, ya estoy acostumbrado' (Estado actual). 3) GET USED TO + -ING = 'Me estoy adaptando poco a poco' (Proceso de cambio).",
            "La Trampa del Falso Infinitivo: En 'be used to' y 'get used to', ese 'TO' no es un infinitivo; es una preposición hambrienta que siempre se come un verbo en -ING o un sustantivo.",
            "Visualiza la Escalera de Adaptación: Primero es difícil -> luego 'I GET used to it' (subes los escalones) -> y finalmente 'I AM used to it' (llegas a la cima de la costumbre)."
        ],
        "https://www.englisch-hilfen.de/en/grammar/be_used_to.htm"
    ))

    return lessons

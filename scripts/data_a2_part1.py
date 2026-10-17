# -*- coding: utf-8 -*-
"""
APP-KUSKAT • English Lessons Bank: Level A2 (Part 1: Lessons 01 to 10)
Each class has >= 500 words of rigorous pedagogical and linguistic content.
"""
from lesson_utils import make_lesson

def get_a2_part1():
    lessons = []

    # -------------------------------------------------------------------------
    # Clase 01: Past Simple: Verbos Regulares y Ortografía de -ED
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_01",
        "Clase 01: Past Simple: Verbos Regulares y Ortografía de -ED",
        "A2",
        "Tiempos Verbales Pasados",
        "El pasado simple describe acciones finitas completamente concluidas en un momento temporal definido del pasado. En los verbos regulares, su morfología afirmativa se construye añadiendo el sufijo flexivo -ed bajo normas ortográficas sistemáticas.",
        "Afirmativo: Sujeto + Verbo regular con sufijo -ED + Complemento + Marcador temporal (yesterday, last week, in 2020, two days ago). Negativo: Sujeto + did not (didn't) + Verbo en forma base desnuda + Complemento. Pregunta: Did + Sujeto + Verbo en forma base + Complemento?",
        "El Past Simple es el tiempo verbal narrativo por excelencia de la lengua inglesa. Su propósito fundamental es situar acontecimientos, hábitos históricos o cadenas secuenciales de eventos dentro de un marco temporal cerrado, pretérito y desvinculado del presente inmediato. A diferencia del español, donde coexisten dos pasados narrativos distintos (el pretérito perfecto simple 'trabajé' para acciones puntuales concluidas, y el pretérito imperfecto 'trabajaba' para acciones habituales o descriptivas continuas), el inglés recurre al Past Simple para englobar ambas nociones en oraciones afirmativas regulares ('I worked in a hospital' puede traducirse según el contexto como 'trabajé en un hospital' o 'trabajaba en un hospital'). La regularidad verbal en inglés se manifiesta mediante la adición del sufijo germánico '-ed' a la raíz infinitiva. Sin embargo, este proceso de afijación está regulado por principios ortográficos estrictos: la regla general simplemente agrega '-ed' al verbo base ('work' -> 'worked', 'clean' -> 'cleaned'). Si el verbo ya finaliza con la vocal '-e', únicamente se agrega una '-d' ('live' -> 'lived', 'arrive' -> 'arrived', 'dance' -> 'danced'). Si el verbo concluye en una consonante seguida de la semivocal 'y', dicha letra muta a 'i' antes de recibir el sufijo, produciendo '-ied' ('study' -> 'studied', 'try' -> 'tried', 'carry' -> 'carried'); pero si a la 'y' le antecede una vocal directa, se mantiene intacta ('play' -> 'played', 'enjoy' -> 'enjoyed'). Finalmente, en verbos monosilábicos o bisilábicos con acento en la última sílaba que exhiben la secuencia consonante-vocal-consonante (C-V-C), la consonante final debe duplicarse para proteger la brevedad fonética de la vocal radical ('stop' -> 'stopped', 'plan' -> 'planned', 'prefer' -> 'preferred').",
        [
            "Regla ortográfica general (+ED): Añade -ed a la inmensa mayoría de verbos regulares: watch -> watched, look -> looked, help -> helped, listen -> listened, start -> started.",
            "Regla de verbos terminados en -E (+D): Si el verbo ya termina en -e o -ee, solo se añade -d: arrive -> arrived, phone -> phoned, close -> closed, decide -> decided, agree -> agreed.",
            "Regla de consonante + Y (-IED): La 'y' precedida de consonante muta obligatoriamente a 'i' antes de -ed: study -> studied, cry -> cried, marry -> married, reply -> replied, copy -> copied.",
            "Regla de vocal + Y (+ED): Si la 'y' está precedida de una vocal (a, e, o, u), no muta; solo se añade -ed: play -> played, stay -> stayed, destroy -> destroyed, enjoy -> enjoyed.",
            "Regla de duplicación C-V-C en monosílabos: Verbos de una sola sílaba que terminan en una vocal y una consonante duplican la consonante: stop -> stopped, clap -> clapped, rub -> rubbed, drop -> dropped.",
            "Regla de duplicación en bisílabos acentuados: Si el acento prosódico recae en la última sílaba con C-V-C, se duplica: preFER -> preferred, adMIT -> admitted, ocCUR -> occurred. Si el acento va al inicio, no se duplica: HAP-pen -> happened, EN-ter -> entered.",
            "Variación dialectal US vs. UK con -L final: En British English, la 'l' final siempre se duplica tras vocal (travel -> travelled, cancel -> cancelled, dial -> dialled); en American English no se duplica si el acento recae en la primera sílaba (travel -> traveled, cancel -> canceled).",
            "Marcadores temporales indispensables: yesterday, yesterday morning, last night, last week, last year, three days ago, two centuries ago, in 1995, in the 19th century."
        ],
        [
            "The engineering team completed the solar energy installation at the university research center last month. (El equipo de ingeniería completó la instalación de energía solar en el centro de investigación universitario el mes pasado).",
            "She studied biomedical sciences at the University of California and graduated with top academic honors in 2024. (Ella estudió ciencias biomédicas en la Universidad de California y se graduó con los más altos honores académicos en 2024).",
            "The company traveled across three states last year to promote their innovative water purification technology. (La empresa viajó a través de tres estados el año pasado para promover su innovadora tecnología de purificación de agua).",
            "The police officers stopped the speeding vehicle on the highway and checked the driver's identification documents. (Los oficiales de policía detuvieron el vehículo con exceso de velocidad en la autopista y revisaron los documentos de identificación del conductor)."
        ],
        [
            "The municipal council approved the funding proposal for the new hospital wing in central Birmingham yesterday. (El consejo municipal aprobó la propuesta de financiamiento para la nueva ala del hospital en el centro de Birmingham ayer).",
            "He travelled to Manchester by train last weekend to attend an international symposium on renewable energy. (Él viajó a Manchester en tren el fin de semana pasado para asistir a un simposio internacional sobre energía renovable).",
            "The students planned a wonderful surprise celebration for their headmaster's retirement after thirty years of service. (Los estudiantes planificaron una maravillosa celebración sorpresa para la jubilación de su director tras treinta años de servicio).",
            "She tidied her room, washed the kitchen dishes, and prepared a lovely afternoon tea for her guests. (Ella ordenó su habitación, lavó los platos de la cocina y preparó un encantador té de la tarde para sus invitados)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Hey Jessica, did you finish that history essay that was due yesterday evening?", "translation": "Hola Jessica, ¿terminaste aquel ensayo de historia que vencía ayer por la tarde?"},
            {"speaker": "Jessica (UK)", "text": "Yes, I did! I worked on it all night and uploaded the document to the university portal at midnight.", "translation": "¡Sí, lo terminé! Trabajé en él toda la noche y subí el documento al portal universitario a la medianoche."},
            {"speaker": "Austin (US)", "text": "That is impressive. I struggled with my research sources, but my professor helped me during office hours.", "translation": "Eso es impresionante. Yo batallé con mis fuentes de investigación, pero mi profesor me ayudó durante sus horas de oficina."},
            {"speaker": "Jessica (UK)", "text": "Did he recommend any specific books? I borrowed three historical volumes from the library last Friday.", "translation": "¿Recomendó él algún libro específico? Yo tomé prestados tres volúmenes históricos de la biblioteca el viernes pasado."},
            {"speaker": "Austin (US)", "text": "Yes, he suggested a detailed textbook on the Industrial Revolution. It clarified everything for me.", "translation": "Sí, me sugirió un libro de texto detallado sobre la Revolución Industrial. Me aclaró todo."},
            {"speaker": "Jessica (UK)", "text": "Brilliant. Let's celebrate our submissions with a nice walk in the university botanical gardens.", "translation": "Estupendo. Celebremos nuestras entregas con un agradable paseo en los jardines botánicos universitarios."}
        ],
        [
            "Agregar -ed a verbos irregulares: decir 'eated' en vez de 'ate', o 'goed' en vez de 'went'. Solo los verbos regulares admiten -ed.",
            "Mantener la 'y' tras consonante sin mutar a 'i': escribir 'studyed' en vez de 'studied'.",
            "No duplicar la consonante en verbos C-V-C: escribir 'stoped' o 'planed'. Debe duplicarse: 'stopped', 'planned'.",
            "Mantener la forma en -ed en preguntas y negaciones con did: decir 'Did you played?' o 'I didn't watched'. Con did/didn't el verbo va en forma base ('Did you play?', 'I didn't watch').",
            "Omitir la 'd' final en verbos terminados en 'e': escribir 'arriveed' en lugar de 'arrived'."
        ],
        [
            "Regla del Espejo Temporal: Siempre que uses una expresión de pasado cerrado ('yesterday', 'last year', 'in 2015', 'ago'), tu cerebro debe activar automáticamente el modo Past Simple.",
            "La Ley del Auxiliar DID: 'DID' es un imán temporal tan poderoso que extrae el pasado del verbo principal; por eso en preguntas y negaciones el verbo vuelve a su forma base pura.",
            "Mnemotecnia visual para -IED: Imagina que la letra 'Y' pierde una pierna al correr hacia el pasado y necesita convertirse en 'I' para sostener a su compañera 'ED' (carry -> carried)."
        ],
        "https://www.englisch-hilfen.de/en/grammar/sim_past_reg.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 02: Past Simple: Las 3 Reglas Fonéticas de -ED
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_02",
        "Clase 02: Past Simple: Las 3 Reglas Fonéticas de -ED (/t/, /d/, /ɪd/)",
        "A2",
        "Fonética & Morfología",
        "La pronunciación de la desinencia regular -ed en inglés no se articula como se escribe, sino que se subdivide en tres alomorfos fonéticos estrictos (/t/, /d/, /ɪd/) determinados por la sonoridad o sordería de la consonante final del infinitivo.",
        "Regla 1 (/ɪd/ - Sílaba extra): Verbos terminados en los sonidos /t/ o /d/: wanted (/ˈwɒn.tɪd/), needed (/ˈniː.dɪd/). Regla 2 (/t/ - Sorda sin vibración): Verbos terminados en consonantes sordas (/p/, /k/, /f/, /s/, /ʃ/, /tʃ/): stopped, looked, washed, watched. Regla 3 (/d/ - Sonora con vibración): Verbos terminados en vocales y consonantes sonoras (/b/, /g/, /v/, /z/, /m/, /n/, /l/, /r/): played, lived, cleaned.",
        "La pronunciación de la terminación ortográfica '-ed' es uno de los mayores desafíos fonéticos para los estudiantes hispanohablantes. En español, nuestro sistema fonológico es silábico y transparente: toda letra escrita tiende a pronunciarse con una vocal plena y clara. Por esta razón, el aprendiz hispano tiende instintivamente a pronunciar '-ed' como una sílaba adicional /ed/ en todos los verbos ('work-ed', 'play-ed', 'watch-ed'), lo cual resulta sumamente forzado y ajeno a la prosodia natural del inglés. En la fonología inglesa real, '-ed' SOLO añade una sílaba extra en un único caso específico: cuando el verbo en infinitivo ya termina en el sonido alveolar oclusivo /t/ o /d/ (ejemplos: 'want' termina en /t/, por ende 'wanted' se pronuncia con dos sílabas /ˈwɒn.tɪd/; 'need' termina en /d/, por ende 'needed' se pronuncia con dos sílabas /ˈniː.dɪd/). En todos los demás verbos del idioma inglés, la 'e' de '-ed' es completamente silenciosa y no crea ninguna sílaba adicional. La consonante final se fusiona directamente con la terminación mediante dos variantes: si el infinitivo termina en un sonido sordo (voiceless sound, donde las cuerdas vocales no vibran, como /p/, /k/, /s/, /f/, /ʃ/ 'sh', /tʃ/ 'ch'), la terminación se asimila y se pronuncia como un chasquido sordo /t/ ('looked' suena /lʊkt/, 'stopped' suena /stɒpt/, 'washed' suena /wɒʃt/, 'laughed' suena /lɑːft/). En cambio, si el verbo termina en un sonido sonoro (voiced sound, donde las cuerdas vocales vibran intensamente en la laringe, como vocales, semivocales y consonantes /b/, /g/, /v/, /m/, /n/, /l/, /r/, /z/), la desinencia se pronuncia como una suave consonante sonora /d/ ('played' suena /pleɪd/, 'cleaned' suena /kliːnd/, 'lived' suena /lɪvd/, 'called' suena /kɔːld/).",
        [
            "Regla del sonido /ɪd/ (Añade una sílaba completa): Se aplica EXCLUSIVAMENTE a verbos cuyo sonido final es /t/ o /d/: wait -> waited (/ˈweɪ.tɪd/), start -> started (/ˈstɑː.tɪd/), hate -> hated (/ˈheɪ.tɪd/), decide -> decided (/dɪˈsaɪ.dɪd/), invite -> invited (/ɪnˈvaɪ.tɪd/), end -> ended (/ˈen.dɪd/).",
            "Regla del sonido /t/ (Sin sílaba extra; sonido sordo seco): Se aplica tras sonidos sordos /p/, /k/, /f/, /s/, /ʃ/, /tʃ/: help -> helped (/helpt/), work -> worked (/wɜːkt/), laugh -> laughed (/lɑːft/), kiss -> kissed (/kɪst/), wash -> washed (/wɒʃt/), watch -> watched (/wɒtʃt/).",
            "Regla del sonido /d/ (Sin sílaba extra; sonido sonoro vibrante): Se aplica tras todas las vocales y consonantes sonoras /b/, /g/, /v/, /z/, /m/, /n/, /l/, /r/: play -> played (/pleɪd/), free -> freed (/friːd/), grab -> grabbed (/ɡræbd/), beg -> begged (/beɡd/), love -> loved (/lʌvd/), call -> called (/kɔːld/), clean -> cleaned (/kliːnd/).",
            "La Prueba de la Garganta: Coloca dos dedos firmemente sobre tu laringe (manzana de Adán) y pronuncia el sonido final del infinitivo: si sientes un zumbido eléctrico en tus dedos, es sonoro y termina en /d/; si solo sientes aire saliendo sin vibración interna, es sordo y termina en /t/.",
            "La trampa de las letras mudas: La regla fonética se rige por el sonido acústico final, no por la letra escrita: 'dance' termina en la letra 'e', pero su sonido final es la sorda /s/; por tanto, 'danced' se pronuncia con /t/ (/dɑːnst/ o /dænst/).",
            "Contraste de sílabas reales: 'Worked' tiene 1 sola sílaba (/wɜːkt/), 'Stopped' tiene 1 sola sílaba (/stɒpt/). Intentar pronunciar dos sílabas ('wor-ked') es un error fonético grave.",
            "Enlace fonético en cadena (Linking R): Cuando el verbo en pasado va seguido de una palabra que inicia con vocal, el sonido /t/ o /d/ se enlaza fluidamente: 'worked on' suena /wɜːk-tɒn/, 'played outside' suena /pleɪ-daʊtsaɪd/.",
            "Adjetivos especiales con terminación /ɪd/ arcaica: Existen pocos adjetivos que conservan pronunciación bisilábica arcaica como excepción léxica: 'naked' (/ˈneɪ.kɪd/), 'wicked' (/ˈwɪk.ɪd/), 'crooked' (/ˈkrʊk.ɪd/)."
        ],
        [
            "The international student waited (/ɪd/) patiently at the airport gate until his flight coordinator arrived (/d/). (El estudiante internacional esperó pacientemente en la puerta del aeropuerto hasta que llegó su coordinador de vuelo).",
            "She worked (/t/) exceptionally hard on her medical research paper and helped (/t/) several classmates with their lab reports. (Ella trabajó excepcionalmente duro en su artículo de investigación médica y ayudó a varios compañeros con sus informes de laboratorio).",
            "The engineer started (/ɪd/) the backup electrical generator when the main power grid failed (/d/) during the thunderstorm. (El ingeniero encendió el generador eléctrico de respaldo cuando falló la red eléctrica principal durante la tormenta eléctrica).",
            "They danced (/t/) joyfully at the cultural wedding reception and laughed (/t/) at the humorous speeches delivered by the bride's father. (Ellos bailaron alegremente en la recepción de la boda cultural y se rieron de los discursos humorísticos pronunciados por el padre de la novia)."
        ],
        [
            "The solicitor decided (/ɪd/) to review the legal contract carefully after the client called (/d/) with urgent revisions. (El abogado decidió revisar el contrato legal cuidadosamente después de que el cliente llamó con revisiones urgentes).",
            "He washed (/t/) his trench coat, ironed his cotton shirt, and watched (/t/) the evening news broadcast on the television. (Él lavó su gabardina, planchó su camisa de algodón y miró la transmisión de noticias de la tarde en la televisión).",
            "The hospital staff cleaned (/d/) and disinfected (/ɪd/) the operating theatres before the chief surgeon commenced the operations. (El personal del hospital limpió y desinfectó los quirófanos antes de que el cirujano jefe comenzara las operaciones).",
            "We enjoyed (/d/) a delightful walk along the riverbanks in Oxford and stopped (/t/) for a hot cup of tea at a historic cafe. (Disfrutamos de un paseo encantador a lo largo de las orillas del río en Oxford y nos detuvimos para tomar una taza de té caliente en una cafetería histórica)."
        ],
        [
            {"speaker": "Alexander (US)", "text": "What did you do over the weekend, Natalie? Did you finish painting your apartment?", "translation": "¿Qué hiciste durante el fin de semana, Natalie? ¿Terminaste de pintar tu departamento?"},
            {"speaker": "Natalie (UK)", "text": "Yes, I painted (/ɪd/) the living room walls and cleaned (/d/) all the windows until they sparkled.", "translation": "Sí, pinté las paredes de la sala de estar y limpié todas las ventanas hasta que quedaron relucientes."},
            {"speaker": "Alexander (US)", "text": "That sounds exhausting! I worked (/t/) at the animal shelter and walked (/t/) over twenty dogs in the park.", "translation": "¡Eso suena agotador! Yo trabajé en el refugio de animales y paseé a más de veinte perros en el parque."},
            {"speaker": "Natalie (UK)", "text": "How lovely! My sister visited (/ɪd/) me yesterday afternoon and helped (/t/) me assemble a new bookshelf.", "translation": "¡Qué encantador! Mi hermana me visitó ayer por la tarde y me ayudó a armar una nueva estantería."},
            {"speaker": "Alexander (US)", "text": "You both accomplished (/t/) a lot! Afterward, I just relaxed (/t/) and listened (/d/) to jazz music.", "translation": "¡Ambas lograron mucho! Después de eso, yo simplemente me relajé y escuché música jazz."},
            {"speaker": "Natalie (UK)", "text": "Splendid! We certainly earned (/d/) our Sunday evening rest.", "translation": "¡Espléndido! Ciertamente nos ganamos nuestro descanso del domingo por la tarde."}
        ],
        [
            "Pronunciar 'work-ed' o 'play-ed' como dos sílabas separadas. Solo se añade sílaba con verbos terminados en sonido /t/ o /d/ (ej. 'wanted', 'needed').",
            "Pronunciar 'looked' con sonido /d/ en lugar del chasquido sordo /t/ (/lʊkt/). Al terminar en /k/ sorda, debe sonar /t/.",
            "Pronunciar 'danced' como /dɑːns-ed/. Su pronunciación correcta es una sola sílaba: /dɑːnst/.",
            "Olvidar que 'ended' y 'started' sí añaden sílaba extra (/ˈen.dɪd/, /ˈstɑː.tɪd/) y pronunciarlos incorrectamente sin la vocal intermedia.",
            "Confundir la letra ortográfica con el sonido real: la palabra 'laughed' termina en 'gh', pero suena /f/; por ende termina en /t/ (/lɑːft/)."
        ],
        [
            "La Regla del Club Exclusivo T/D: Solo dos letras tienen el pase VIP para crear una sílaba extra con -ED: la 'T' y la 'D' (wan-ted, nee-ded). ¡Todas las demás letras tienen la puerta cerrada a una sílaba adicional!",
            "Técnica de los Dos Dedos: Pon tus dedos en tu garganta. Pronuncia 'kiss': ¿vibra? No -> 'kissed' termina en /t/. Pronuncia 'play': ¿vibra? Sí -> 'played' termina en /d/.",
            "Práctica de ritmo de una sola sílaba: Golpea la mesa con los nudillos una sola vez al decir verbos como: worked, helped, washed, stopped, watched, danced. ¡Un solo golpe rítmico!"
        ],
        "https://www.englisch-hilfen.de/en/grammar/ed_pronunciation.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 03: Past Simple: Verbos Irregulares y Auxiliar DID
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_03",
        "Clase 03: Past Simple: Verbos Irregulares y Auxiliar DID / DIDN'T",
        "A2",
        "Verbos Irregulares & Auxiliares",
        "Los verbos irregulares no añaden el sufijo -ed en pasado simple, sino que modifican su raíz vocálica o consonántica mediante patrones históricos, subordinándose al auxiliar did / didn't en preguntas y negaciones.",
        "Afirmativo: Sujeto + Verbo Irregular en forma pasada (Columna 2) + Complemento: She went to the hospital / They bought a car. Negativo: Sujeto + did not (didn't) + Verbo en forma base desnuda + Complemento: She didn't go / They didn't buy. Pregunta: Did + Sujeto + Verbo en forma base + Complemento? Respuestas cortas: Yes, Sujeto + did / No, Sujeto + didn't.",
        "Los verbos irregulares en la lengua inglesa constituyen el remanente viviente de los 'verbos fuertes' (strong verbs) del protogermánico y del inglés antiguo, los cuales señalaban los cambios de tiempo verbal no mediante sufijos externos, sino mediante la apofonía o gradación vocálica interna de la raíz (ablaut). Por esta razón histórica, los verbos más elementales, ancestrales y de mayor uso cotidiano en el idioma (go -> went, come -> came, see -> saw, give -> gave, take -> took, buy -> bought, eat -> ate, write -> wrote) son predominantemente irregulares. Aprenderlos requiere memorizar sus formas de pasado simple (la célebre segunda columna de las tablas de verbos). Sin embargo, en el plano sintáctico ocurre una simplificación monumental que alivia enormemente la carga del aprendiz: el operador auxiliar del pasado es universalmente 'DID' (la forma pasada del verbo do) para TODAS las personas gramaticales sin distinción alguna (I did, you did, he did, she did, it did, we did, they did). Cuando DID o su contracción negativa DIDN'T ingresan a la cláusula, asumen de inmediato la totalidad de la marca morfológica del tiempo pretérito. Como consecuencia ineludible, el verbo léxico principal experimenta una des-flexión obligatoria, regresando a su forma infinitiva base pura ('She went to London' se convierte en 'She didn't go to London' y 'Did she go to London?', estando terminantemente prohibido formular 'She didn't went' o 'Did she went?'). En las respuestas breves estandarizadas, el protocolo comunicativo dicta contestar con cortesía repitiendo el auxiliar: 'Did you see Carlos yesterday? - Yes, I did' / 'No, I didn't'.",
        [
            "Invariabilidad del auxiliar DID: Did y didn't se emplean con todas las personas: I, you, he, she, it, we, they.",
            "Regla del Retorno al Infinitivo: Tras didn't o did en preguntas, el verbo irregular DEBE regresar a su forma base (Columna 1): 'I saw him' -> 'I didn't see him' (nunca 'didn't saw').",
            "Estructura sintáctica interrogativa ASI: [DID] + [SUJETO] + [VERBO BASE] + [COMPLEMENTO]? -> 'Did you understand the instructions?', 'Did they buy the tickets?'.",
            "Preguntas abiertas con partículas Wh- (QUASI): [WH- WORD] + [DID] + [SUJETO] + [VERBO BASE]? -> 'Where did you go?', 'What did she say?', 'Why did he leave?'.",
            "Patrones de memorización de irregulares: Verbos con cambio simple de vocal (sit -> sat, come -> came, run -> ran); Verbos con terminación en -ought/-aught (buy -> bought, catch -> caught, think -> thought); Verbos con formas idénticas (cut -> cut, cost -> cost, put -> put, hit -> hit).",
            "Respuestas cortas institucionales: Afirmativa: 'Yes, I/you/he/she/it/we/they did' (sin contracción). Negativa: 'No, I/you/he/she/it/we/they didn't'.",
            "Doble función del verbo Do en pasado: 'Did' puede actuar simultáneamente como auxiliar gramatical y como acción principal: 'What did you do yesterday?' (¿Qué hiciste ayer?), 'She didn't do her homework' (Ella no hizo su tarea).",
            "Preguntas de Sujeto con WHO sin auxiliar: Si la palabra interrogativa 'Who' o 'What' funciona como el sujeto directo que ejecutó la acción, NO se utiliza did y el verbo permanece en forma pasada: 'Who wrote this book?' (correcto), 'Who did write this book?' (incorrecto a menos que sea enfático)."
        ],
        [
            "The international research team went to Geneva last month and presented their findings on renewable energy to the scientific committee. (El equipo de investigación internacional fue a Ginebra el mes pasado y presentó sus hallazgos sobre energía renovable al comité científico).",
            "She bought a modern hybrid car yesterday because she wanted to reduce her carbon footprint during daily commuting in Los Angeles. (Ella compró un auto híbrido moderno ayer porque quería reducir su huella de carbono durante los desplazamientos diarios en Los Ángeles).",
            "Did you see the extraordinary solar eclipse that occurred across northern North America on Monday afternoon? (¿Viste el extraordinario eclipse solar que ocurrió en el norte de América del Norte el lunes por la tarde?).",
            "He didn't understand the complex mathematical formulas, so he spoke with his university tutor after the seminar finished. (Él no entendió las fórmulas matemáticas complejas, así que habló con su tutor universitario después de que terminó el seminario)."
        ],
        [
            "The Prime Minister met with European diplomatic delegates in London yesterday to discuss international trade agreements. (El Primer Ministro se reunió con delegados diplomáticos europeos en Londres ayer para discutir acuerdos comerciales internacionales).",
            "We took the early morning express train from Edinburgh to King's Cross and arrived promptly at half past ten. (Tomamos el tren expreso matutino de Edimburgo a King's Cross y llegamos puntualmente a las diez y media).",
            "Where did you find that antique silver pocket watch that was manufactured during the Victorian era? (¿Dónde encontraste aquel reloj de bolsillo antiguo de plata que fue fabricado durante la época victoriana?).",
            "They didn't sell their family cottage in the countryside because they decided to preserve its historical heritage. (Ellos no vendieron su casa de campo familiar porque decidieron preservar su patrimonio histórico)."
        ],
        [
            {"speaker": "Dylan (US)", "text": "Hey Chloe, did you go to the career fair that the university hosted in the exhibition hall yesterday?", "translation": "Hola Chloe, ¿fuiste a la feria de carreras que la universidad organizó en el salón de exposiciones ayer?"},
            {"speaker": "Chloe (UK)", "text": "Yes, I did! I went there around midday and spoke with representatives from three engineering firms.", "translation": "¡Sí, fui! Fui allí alrededor del mediodía y hablé con representantes de tres firmas de ingeniería."},
            {"speaker": "Dylan (US)", "text": "Did they give you any information regarding summer internship opportunities for international students?", "translation": "¿Te dieron alguna información respecto a oportunidades de pasantías de verano para estudiantes internacionales?"},
            {"speaker": "Chloe (UK)", "text": "Yes, they gave me detailed application brochures, and I also met a senior biomedical researcher.", "translation": "Sí, me dieron folletos de solicitud detallados, y también conocí a un investigador biomédico sénior."},
            {"speaker": "Dylan (US)", "text": "That is fantastic! What did you do with your printed resumes? Did you submit them on the spot?", "translation": "¡Eso es fantástico! ¿Qué hiciste con tus currículums impresos? ¿Los entregaste en el acto?"},
            {"speaker": "Chloe (UK)", "text": "I submitted two copies in person, and they told me that their human resources team will contact me soon.", "translation": "Entregué dos copias en persona, y me dijeron que su equipo de recursos humanos me contactará pronto."}
        ],
        [
            "Usar la forma pasada en oraciones negativas con didn't: decir 'I didn't went' o 'She didn't saw'. Con didn't el verbo va en forma base: 'I didn't go', 'She didn't see'.",
            "Usar la forma pasada en preguntas con did: formular 'Did you bought the milk?' en vez de 'Did you buy the milk?'.",
            "Inventar formas regulares con -ed para verbos fuertemente irregulares: decir 'goed', 'buyed', 'eated', 'writed'. Las formas correctas son 'went', 'bought', 'ate', 'wrote'.",
            "Omitir el verbo léxico 'do' cuando la acción es hacer: decir 'I didn't my homework'. La oración exige auxiliar más acción: 'I didn't do my homework'.",
            "Insertar 'did' en preguntas de sujeto con Who: decir 'Who did break the window?' en lugar de 'Who broke the window?'."
        ],
        [
            "La Ley del Imán DID: Recuerda que 'DID' es un imán gigante que succiona todo el pasado de la oración. Si 'DID' o 'DIDN'T' ya están presentes, el verbo queda despojado de pasado y regresa a su forma base pura (go, see, buy).",
            "Agrupación por Familias de Rima: No memorices la lista alfabéticamente; agrúpala por familias sonoras: 1) Sang, rang, began, swam; 2) Bought, caught, thought, taught, brought; 3) Blew, flew, grew, knew, threw.",
            "Para respuestas cortas de cortesía: Responde con el mismo auxiliar 'did' que inició la pregunta: 'Did you finish? - Yes, I did.' / 'No, I didn't.'"
        ],
        "https://www.englisch-hilfen.de/en/grammar/irregular_verbs.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 04: Past Simple del Verbo To Be: WAS y WERE
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_04",
        "Clase 04: Past Simple del Verbo To Be: WAS y WERE",
        "A2",
        "Verbos Copulativos Pasados",
        "El pasado del verbo to be se bifurca morfológicamente en dos formas conjugadas según la persona gramatical: was para singulares y were para plurales y la segunda persona, operando como cópula autosuficiente sin requerir jamás al auxiliar did.",
        "Afirmativo Singular (I, He, She, It): Sujeto + WAS + Complemento. Afirmativo Plural / 2ª Persona (You, We, They): Sujeto + WERE + Complemento. Negativo: wasn't (was not) / weren't (were not). Pregunta: Was/Were + Sujeto + Complemento? Respuestas cortas: Yes, I was / No, they weren't.",
        "El verbo 'to be' en tiempo pasado continúa exhibiendo su carácter aristocrático, autónomo y anómalo dentro del sistema verbal del inglés. A diferencia de todos los demás verbos del idioma, que no diferencian personas en pasado simple, el verbo 'to be' preserva una distinción de número y persona: 'WAS' (/wɒz/ en UK, /wʌz/ o /wɑːz/ en US) rige para la primera persona singular 'I' y la tercera persona singular 'He', 'She', 'It', así como para cualquier sustantivo singular colectivo o individual ('the doctor was', 'the weather was'). Por su parte, 'WERE' (/wɜːr/) rige obligatoriamente para la segunda persona 'You' (tanto en su valor singular de 'tú / usted' como en el plural de 'ustedes'), y para los pronombres plurales 'We' y 'They', junto a cualquier sustantivo plural ('the students were', 'my parents were'). En el plano semántico, 'was' y 'were' traducen tanto el pretérito indefinido ('fui / estuve') como el pretérito imperfecto ('era / estaba') del español, dependiendo de la temporalidad circundante ('I was a student in 2020' = fui/era estudiante; 'I was at home yesterday' = estuve/estaba en casa). La regla de oro sintáctica primordial es la prohibición categórica de los auxiliares 'did' y 'didn't': 'to be' es autosuficiente y genera sus propias negaciones añadiendo directamente la partícula 'not' (was not / wasn't; were not / weren't), e invirtiéndose a sí mismo al inicio absoluto de la cláusula para formular interrogaciones ('Were you tired?', 'Was Carlos at the hospital?', jamás 'Did you be tired?'). Asimismo, se combina con el adverbio existencial 'there' para formular la existencia en pasado: 'There was a problem' (Había un problema singular) y 'There were many people' (Había muchas personas plural).",
        [
            "Concordancia con WAS: Se utiliza exclusivamente con I, He, She, It y sustantivos singulares o incontables: 'I was happy', 'He was tired', 'The water was cold'.",
            "Concordancia con WERE: Se utiliza con You (singular y plural), We, They y sustantivos plurales: 'You were right', 'We were late', 'They were excited'.",
            "Autosuficiencia sintáctica: Prohibición total de 'did': Para negar se usa wasn't / weren't; para preguntar se invierte Was / Were al inicio.",
            "Formas contraídas negativas: was not -> wasn't (/ˈwɒz.ənt/); were not -> weren't (/wɜːnt/). En textos formales académicos y legales se escribe la forma plena sin contracción.",
            "Existenciales en pasado (Había): There was + sustantivo singular/incontable ('There was a loud noise'). There were + sustantivo plural ('There were two accidents').",
            "Preguntas de inversión directa: Was/Were + Sujeto + Complemento?: 'Were you at home last night? - Yes, I was.' / 'Was she ill yesterday? - No, she wasn't.'",
            "Diferenciación de fecha y lugar de nacimiento: Expresar el nacimiento exige obligatoriamente la locución pasiva 'to be born' en tiempo pasado: 'I was born in 2002 in San Salvador' (nunca 'I am born' ni 'I borned').",
            "Fonética de la forma débil vs. fuerte: En el habla fluida conectada, 'was' y 'were' se pronuncian con vocal reducida neutra /wəz/ y /wə/, reservando la pronunciación plena tensa /wɒz/ y /wɜː/ para respuestas cortas y posiciones enfáticas al final de oración."
        ],
        [
            "The international climate conference was exceptionally successful and there were delegates from over forty countries in attendance. (La conferencia internacional sobre el clima fue excepcionalmente exitosa y hubo delegados de más de cuarenta países presentes).",
            "Where were you yesterday afternoon when the emergency sirens were sounding across downtown Chicago? (¿Dónde estabas ayer por la tarde cuando las sirenas de emergencia estaban sonando en el centro de Chicago?).",
            "My grandfather was a dedicated mechanical engineer who worked for the national railway company for over forty years. (Mi abuelo fue un ingeniero mecánico dedicado que trabajó para la compañía ferroviaria nacional durante más de cuarenta años).",
            "We were very tired after our sixteen-hour international flight, but we were extremely excited to visit California. (Estábamos muy cansados después de nuestro vuelo internacional de dieciséis horas, pero estábamos sumamente emocionados de visitar California)."
        ],
        [
            "The headmaster was rather pleased with the academic examination results achieved by the upper-sixth form pupils. (El director estaba bastante satisfecho con los resultados de los exámenes académicos logrados por los alumnos del último año de secundaria).",
            "Were you at the university library on Sunday evening when the fire alarm suddenly evacuated the building? (¿Estabas en la biblioteca universitaria el domingo por la tarde cuando la alarma de incendios evacuó repentinamente el edificio?).",
            "There were hundreds of people waiting patiently outside the cathedral gates to pay their respects to the monarch. (Había cientos de personas esperando pacientemente afuera de las puertas de la catedral para presentar sus respetos al monarca).",
            "She wasn't able to attend the historical lecture yesterday because she was unwell with a severe respiratory cold. (Ella no pudo asistir a la conferencia histórica ayer porque no se sentía bien con un resfriado respiratorio severo)."
        ],
        [
            {"speaker": "Lucas (US)", "text": "Were you at the university stadium yesterday evening, Emma? The soccer game was incredible!", "translation": "¿Estuviste en el estadio universitario ayer por la tarde, Emma? ¡El partido de fútbol estuvo increíble!"},
            {"speaker": "Emma (UK)", "text": "No, I wasn't. I was at the chemistry laboratory until eight o'clock preparing for tomorrow's exam.", "translation": "No, no estuve. Estuve en el laboratorio de química hasta las ocho en punto preparándome para el examen de mañana."},
            {"speaker": "Lucas (US)", "text": "That is too bad! There were thousands of cheering students and our team was victorious in the final minute.", "translation": "¡Qué lástima! Había miles de estudiantes animando y nuestro equipo fue victorioso en el último minuto."},
            {"speaker": "Emma (UK)", "text": "Who was the best player on the pitch? Was David playing as the central striker?", "translation": "¿Quién fue el mejor jugador en la cancha? ¿Estuvo David jugando como delantero central?"},
            {"speaker": "Lucas (US)", "text": "Yes, he was! He scored two spectacular goals and his performance was absolutely sensational.", "translation": "¡Sí, lo estuvo! Anotó dos goles espectaculares y su desempeño fue absolutamente sensacional."},
            {"speaker": "Emma (UK)", "text": "Brilliant. I am glad that our university supporters were so lively and enthusiastic.", "translation": "Estupendo. Me alegra que los aficionados de nuestra universidad hayan estado tan animados y entusiastas."}
        ],
        [
            "Usar did con to be en pasado: formular 'Did you be at the party?' o 'I didn't was there'. Debe ser 'Were you at the party?' y 'I wasn't there'.",
            "Confundir was y were: decir 'You was right' o 'We was happy'. Con 'you', 'we' y 'they' la forma correcta es 'were': 'You were right', 'We were happy'.",
            "Decir 'I am born in...' para hablar del nacimiento. Al ser un hecho pretérito histórico, debe usarse pasado: 'I was born in 2000'.",
            "Usar 'there was' con sustantivos en plural: decir 'There was many cars'. La concordancia plural exige 'There were many cars'.",
            "Contraer en respuestas cortas afirmativas: responder 'Yes, I was' (correcto), nunca intentar abreviaciones agramaticales."
        ],
        [
            "Regla del Espejo de Presente a Pasado: Am/Is se convierten en WAS (para una sola persona). ARE se convierte en WERE (para dos o más personas, y siempre para YOU).",
            "La Barrera Protectora de To Be: El verbo 'to be' jamás deja entrar a 'did' ni a 'didn't' en su territorio; él mismo se niega (wasn't/weren't) y él mismo se invierte para preguntar (Was he...? / Were you...?).",
            "Mnemotecnia para NACER: Nunca digas 'I born' ni 'I am born'. Memoriza la frase fija de tu biografía como un bloque sólido: 'I was born in [Año/Lugar]'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/was_were.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 05: Past Continuous: Acciones en Progreso en el Pasado
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_05",
        "Clase 05: Past Continuous: Acciones en Progreso en el Pasado",
        "A2",
        "Tiempos Verbales Continuos",
        "El pasado continuo describe actividades dinámicas que se encontraban en pleno desarrollo temporal en un punto específico del pasado, o que servían como marco descriptivo de fondo para otros acontecimientos.",
        "Afirmativo: Sujeto + was/were + Verbo con sufijo -ING + Complemento: I was studying at 8:00 PM / They were driving home. Negativo: Sujeto + wasn't/weren't + Verbo-ING. Pregunta: Was/Were + Sujeto + Verbo-ING? Respuestas cortas: Yes, I was / No, we weren't.",
        "El Past Continuous (o Past Progressive) traslada el aspecto verbal durativo y cursivo hacia el ámbito del pasado. Mientras que el Past Simple visualiza un evento como un bloque cerrado, completo y puntual ('I wrote a letter yesterday'), el Past Continuous abre una ventana temporal hacia el interior del proceso, mostrándonos la acción mientras estaba ocurriendo, sin pronunciarse sobre su culminación ('At eight o'clock yesterday evening, I was writing a letter'). La construcción sintáctica es simétrica a la del presente continuo, con la sustitución morfológica del auxiliar: requiere obligatoriamente una forma en pasado del verbo copulativo 'to be' (was para I, he, she, it; were para you, we, they) acompañada del verbo léxico con el sufijo de participio presente '-ing'. Sus funciones comunicativas principales son tres: primero, describir qué actividad concreta estaba teniendo lugar en una hora cronológica exacta del pasado ('What were you doing at three o'clock yesterday afternoon? - I was working in the library'); segundo, establecer la atmósfera, el trasfondo descriptivo y el escenario ambiental en relatos o anécdotas narrativas ('The sun was shining, birds were singing, and students were walking across the quad'); y tercero, expresar dos actividades simultáneas prolongadas que se desarrollaban paralelamente en el tiempo unidas por la conjunción 'while' ('While my brother was cooking dinner, I was doing my homework'). Al igual que en presente continuo, los verbos estáticos o de estado (know, want, understand, believe, own) prohíben su uso en pasado continuo y deben conjugarse invariablemente en Past Simple ('I wanted to help', nunca 'I was wanting to help').",
        [
            "Estructura afirmativa canónica: Sujeto + was/were + Verbo-ING: 'She was reading a novel', 'We were traveling to Boston'.",
            "Estructura negativa: Sujeto + wasn't/weren't + Verbo-ING: 'He wasn't paying attention', 'They weren't expecting us'.",
            "Estructura interrogativa: Was/Were + Sujeto + Verbo-ING?: 'Were you sleeping when I called? - Yes, I was.' / 'No, I wasn't.'",
            "Acciones simultáneas paralelas con WHILE: Cuando dos procesos durativos ocurrían al mismo tiempo en el pasado, ambos se construyen en Past Continuous: 'While she was studying in her room, her brother was playing video games in the lounge'.",
            "Puntos temporales exactos de corte: Indica qué proceso estaba en marcha en un minuto preciso: 'At 7:30 AM yesterday, I was having breakfast'.",
            "Creación de atmósfera narrativa en literatura y relatos: Se utiliza para pintar el decorado ambiental de una historia: 'It was raining heavily and the cold wind was blowing through the trees when we arrived'.",
            "Incompatibilidad estricta con verbos de estado: Verbos como want, need, know, understand, like, hate jamás se usan en pasado continuo: 'I knew the answer' (correcto), 'I was knowing the answer' (inadmisible).",
            "Preguntas abiertas con partículas interrogativas: [WH- WORD] + [WAS/WERE] + [SUJETO] + [VERBO-ING]? -> 'What were you doing at midnight?', 'Where were they living in 2022?'."
        ],
        [
            "At ten o'clock yesterday morning, the environmental scientists were analyzing soil samples inside the university laboratory. (A las diez de la mañana de ayer, los científicos ambientales estaban analizando muestras de suelo dentro del laboratorio universitario).",
            "She was driving along the coastal highway towards San Francisco while her colleagues were reviewing the conference schedule. (Ella estaba conduciendo por la carretera costera hacia San Francisco mientras sus colegas estaban revisando el cronograma de la conferencia).",
            "What were you doing yesterday afternoon when the power outage suddenly affected the entire financial district? (¿Qué estabas haciendo ayer por la tarde cuando el corte de energía afectó repentinamente a todo el distrito financiero?).",
            "They weren't working in the engineering workshop because the safety inspectors were testing the ventilation equipment. (Ellos no estaban trabajando en el taller de ingeniería porque los inspectores de seguridad estaban probando los equipos de ventilación)."
        ],
        [
            "The rain was pouring down relentlessly and a bitter northern wind was howling across the Scottish highlands last night. (La lluvia estaba cayendo sin cesar y un viento amargo del norte estaba aullando a través de las tierras altas de Escocia anoche).",
            "While the headmaster was delivering his opening address, several university professors were greeting the visiting delegates. (Mientras el director estaba pronunciando su discurso de apertura, varios profesores universitarios estaban saludando a los delegados visitantes).",
            "Were you living in central London when the Olympic Games were taking place in the summer of 2012? (¿Estabas viviendo en el centro de Londres cuando se estaban celebrando los Juegos Olímpicos en el verano de 2012?).",
            "He was reading a historic biography by the fireplace while his flatmate was preparing a traditional pot of English tea. (Él estaba leyendo una biografía histórica junto a la chimenea mientras su compañero de piso estaba preparando una tetera tradicional de té inglés)."
        ],
        [
            {"speaker": "Brandon (US)", "text": "I tried calling you yesterday around four in the afternoon, Kevin. What were you doing?", "translation": "Intenté llamarte ayer alrededor de las cuatro de la tarde, Kevin. ¿Qué estabas haciendo?"},
            {"speaker": "Kevin (UK)", "text": "I was attending an advanced mathematics seminar in the lecture hall, so my mobile phone was switched off.", "translation": "Estaba asistiendo a un seminario avanzado de matemáticas en el auditorio, así que mi teléfono móvil estaba apagado."},
            {"speaker": "Brandon (US)", "text": "That explains it! I was working on our physics project and I was looking for our laboratory data.", "translation": "¡Eso lo explica! Yo estaba trabajando en nuestro proyecto de física y estaba buscando nuestros datos de laboratorio."},
            {"speaker": "Kevin (UK)", "text": "While I was walking back to my flat after the seminar, I realized that I was still carrying the memory drive.", "translation": "Mientras estaba caminando de regreso a mi piso después del seminario, me di cuenta de que todavía llevaba la memoria USB."},
            {"speaker": "Brandon (US)", "text": "No problem at all. Were you able to upload the files to our shared university cloud folder later?", "translation": "No hay problema en absoluto. ¿Pudiste subir los archivos a nuestra carpeta compartida de la nube universitaria más tarde?"},
            {"speaker": "Kevin (UK)", "text": "Yes, I uploaded everything at eight o'clock while I was having dinner. Check your inbox now.", "translation": "Sí, subí todo a las ocho en punto mientras estaba cenando. Revisa tu bandeja de entrada ahora."}
        ],
        [
            "Omitir el verbo auxiliar was/were: decir 'I studying yesterday' en vez de 'I was studying yesterday'.",
            "Usar 'was' con sujetos en plural: decir 'We was watching television'. La concordancia plural impone 'We were watching television'.",
            "Usar verbos estáticos en pasado continuo: decir 'I was wanting to buy a car'. Debe usarse pasado simple: 'I wanted to buy a car'.",
            "Omitir el sufijo -ing en el verbo léxico: decir 'She was work at the hospital' en vez de 'She was working at the hospital'.",
            "Confundir la ortografía de -ing: olvidar duplicar consonantes en verbos C-V-C como 'running' o 'swimming'."
        ],
        [
            "La Película en Pausa: Imagina que tomas el control remoto y le das PAUSA a una película a las 8:00 PM del día de ayer. La imagen congelada de lo que la persona estaba haciendo en ese preciso fotograma es el PAST CONTINUOUS ('He was cooking').",
            "Dos Vagones en el Pasado: Al igual que en presente, necesitas dos vagones obligatorios: Vagón 1 = [WAS / WERE] + Vagón 2 = [VERBO-ING]. Si uno de los dos falta, la oración no funciona.",
            "Palabra Clave WHILE: Cada vez que veas 'WHILE' conectando dos actividades largas en el pasado, piensa inmediatamente en pasado continuo para ambas partes ('While I was reading, she was writing')."
        ],
        "https://www.englisch-hilfen.de/en/grammar/past_progressive.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 06: Past Simple vs. Past Continuous con WHEN y WHILE
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_06",
        "Clase 06: Past Simple vs. Past Continuous con WHEN y WHILE",
        "A2",
        "Sintaxis & Tiempos Combinados",
        "La interacción sintáctica entre el pasado simple y el pasado continuo articula narraciones complejas donde una acción continua de fondo prolongada es repentinamente interrumpida por un evento puntual súbito.",
        "Acción larga de fondo (Past Continuous) + WHEN + Acción corta interruptora (Past Simple): I was taking a shower when the telephone rang. WHILE + Acción larga de fondo (Past Continuous) + Acción corta (Past Simple): While I was walking in the park, I found a wallet. Dos acciones simultáneas: While S + was/were + ING, S + was/were + ING.",
        "La combinación de Past Simple y Past Continuous representa una de las destrezas narrativas más poderosas y expresivas del nivel A2. En la estructura del discurso humano, rara vez relatamos acontecimientos como listas inconexas de hechos aislados; por el contrario, solemos presentar escenas donde un proceso prolongado que ya estaba en marcha sirve de telón de fondo escénico cuando, de repente, irrumpe un evento súbito, puntual e inesperado que altera el curso de los acontecimientos. En la gramática inglesa, esta dualidad se distribuye de manera impecable entre ambos tiempos: la acción larga, continua y en desarrollo (the background action) se formula obligatoriamente en Past Continuous ('I was walking home', 'She was studying in her room'). Por su parte, la acción breve, puntual y sorpresiva que interrumpe el proceso previo (the interrupting action) se expresa en Past Simple ('it began to rain', 'the lights went out'). Los dos nexos lógicos subordinantes que articulan esta relación son 'WHEN' (cuando) y 'WHILE' (mientras). La regla canónica de distribución dicta que 'WHEN' suele introducir de manera inmediata la acción puntual en pasado simple: [Acción en Past Continuous] + WHEN + [Acción en Past Simple] ('I was sleeping when the alarm rang'). En contraste complementario, 'WHILE' o 'AS' introducen de forma natural la acción continua prolongada: WHILE + [Acción en Past Continuous] + [Acción en Past Simple] ('While I was driving to the university, my car broke down'). El orden de las cláusulas es completamente reversible mediante el uso de comas sintácticas cuando la cláusula dependiente abre la oración ('When the telephone rang, I was cooking dinner').",
        [
            "Regla de la Acción Interrumpida: La acción que ya estaba en progreso va en Past Continuous; la acción corta que interrumpe va en Past Simple.",
            "Regla del nexo WHEN: 'When' va seguido casi invariablemente de Past Simple: 'I was watching television WHEN the power failed'.",
            "Regla del nexo WHILE / AS: 'While' va seguido típicamente de Past Continuous: 'WHILE we were driving to the beach, it started to rain'.",
            "Comas en cláusulas invertidas: Si la oración comienza con 'When' o 'While', se coloca una coma obligatoria al final de la primera cláusula: 'While I was cooking, the smoke alarm sounded'. Si la cláusula temporal va al final, no se usa coma.",
            "Dos acciones largas simultáneas: Si dos acciones prolongadas se desarrollaban paralelamente sin interrumpirse mutuamente, ambas usan Past Continuous con WHILE: 'While my mother was reading, my father was gardening'.",
            "Dos acciones cortas consecutivas: Si dos acciones puntuales ocurrieron una inmediatamente después de la otra en una secuencia cronológica rápida, ambas se colocan en Past Simple con WHEN: 'When the teacher entered the classroom, the students stood up'.",
            "Preguntas combinadas: [WHAT WERE YOU DOING WHEN...]?: 'What were you doing when the earthquake occurred?' (¿Qué estabas haciendo cuando ocurrió el terremoto?).",
            "Significado de INTERRUPCIÓN: La interrupción no siempre detiene por completo la acción larga; a menudo solo desvía la atención temporalmente antes de continuar."
        ],
        [
            "I was walking across the university campus yesterday when I suddenly ran into an old high school friend from Texas. (Estaba caminando por el campus universitario ayer cuando de repente me encontré con un viejo amigo de la secundaria de Texas).",
            "While the engineers were conducting the safety inspection at the power plant, the emergency alarm started ringing loudly. (Mientras los ingenieros estaban realizando la inspección de seguridad en la planta de energía, la alarma de emergencia comenzó a sonar ruidosamente).",
            "What were you doing when the local police department issued the severe weather warning for our coastal county? (¿Qué estabas haciendo cuando el departamento de policía local emitió la advertencia de clima severo para nuestro condado costero?).",
            "She was preparing her final presentation slides on her laptop when the computer battery unexpectedly ran out of power. (Ella estaba preparando sus diapositivas de presentación final en su computadora portátil cuando la batería de la computadora se quedó inesperadamente sin energía)."
        ],
        [
            "The solicitor was reviewing the confidential legal contracts in his office when his mobile phone rang with an urgent call from London. (El abogado estaba revisando los contratos legales confidenciales en su oficina cuando su teléfono móvil sonó con una llamada urgente de Londres).",
            "While they were travelling through the picturesque countryside of Yorkshire, their vintage car suffered a flat tyre. (Mientras estaban viajando a través de la pintoresca campiña de Yorkshire, su auto clásico sufrió un pinchazo de neumático).",
            "When the headmaster opened the official envelope containing the examination results, all the teachers were waiting in complete silence. (Cuando el director abrió el sobre oficial que contenía los resultados de los exámenes, todos los profesores estaban esperando en completo silencio).",
            "He dropped his expensive ceramic mug on the kitchen floor while he was rushing to catch the morning express bus. (Él dejó caer su costosa taza de cerámica en el suelo de la cocina mientras se apresuraba para tomar el autobús expreso de la mañana)."
        ],
        [
            {"speaker": "Alexander (US)", "text": "Did you hear about the massive traffic jam on the highway this morning, Olivia?", "translation": "¿Te enteraste del enorme embotellamiento en la autopista esta mañana, Olivia?"},
            {"speaker": "Olivia (UK)", "text": "Yes, I was actually driving towards the university when the radio broadcast announced the multi-car accident.", "translation": "Sí, en realidad estaba conduciendo hacia la universidad cuando la transmisión de radio anunció el accidente de varios autos."},
            {"speaker": "Alexander (US)", "text": "What did you do? Were you stuck in traffic for hours?", "translation": "¿Qué hiciste? ¿Estuviste atrapada en el tráfico durante horas?"},
            {"speaker": "Olivia (UK)", "text": "Fortunately not. While other drivers were queueing in line, I turned off onto a secondary rural road.", "translation": "Afortunadamente no. Mientras otros conductores estaban haciendo fila, yo me desvié hacia una carretera rural secundaria."},
            {"speaker": "Alexander (US)", "text": "That was very smart thinking! When I arrived at campus, our professor was already beginning the lecture.", "translation": "¡Eso fue pensar de manera muy inteligente! Cuando llegué al campus, nuestro profesor ya estaba comenzando la clase."},
            {"speaker": "Olivia (UK)", "text": "Indeed! Quick decisions often save tremendous amounts of valuable time.", "translation": "¡En efecto! Las decisiones rápidas a menudo ahorran enormes cantidades de tiempo valioso."}
        ],
        [
            "Poner la acción interruptora en continuo: decir 'I was sleeping when the phone was ringing'. La acción puntual que interrumpe debe ir en pasado simple: 'when the phone rang'.",
            "Poner la acción de fondo prolongada en pasado simple: decir 'While I cooked, the lights went out'. Lo idiomático es 'While I was cooking, the lights went out'.",
            "Confundir las posiciones de when y while: poner while con la acción corta puntual ('While the phone rang, I was sleeping'). Debe ser 'When the phone rang...'.",
            "Omitir la coma cuando la cláusula subordinada abre la frase: escribir 'While I was studying my friend called' sin la coma separadora tras studying.",
            "Usar pasado continuo para secuencias rápidas consecutivas: decir 'When the movie ended, we were leaving'. Si una acción siguió de inmediato a la otra, ambas van en pasado simple: 'When the movie ended, we left'."
        ],
        [
            "La Analogía del Cine: El PAST CONTINUOUS es la música de fondo y la lluvia que cae en la escena; el PAST SIMPLE es el rayo o el disparo que interrumpe súbitamente la tranquilidad de la película.",
            "Regla Mnemotécnica de los Nexos: Asocia la 'W' y la 'I' de WHILE con 'In Progress' / '-ING' (WHILE = Past Continuous). Asocia la 'T' de WHEN con 'Time' / 'Puntual' (WHEN = Past Simple).",
            "Prueba de la Línea de Tiempo: Dibuja una línea continua ondulada ~~~~~~~ (Past Continuous) y crúzala con una X tajante (Past Simple) para visualizar instantáneamente cuál tiempo usar."
        ],
        "https://agendaweb.org/verbs/past-simple-past-continuous.html"
    ))

    # -------------------------------------------------------------------------
    # Clase 07: Comparativos de Superioridad: Cortos vs. Largos
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_07",
        "Clase 07: Comparativos de Superioridad: Cortos vs. Largos",
        "A2",
        "Adjetivos & Gradación",
        "Los comparativos de superioridad contrastan el grado cualitativo o cuantitativo entre dos entidades, gobernándose estrictamente por el número silábico del adjetivo y la conjunción obligatoria than.",
        "Adjetivos cortos (1 sílaba y 2 sílabas en -y): Adjetivo + -ER + THAN (taller than, bigger than, happier than). Adjetivos largos (2 o más sílabas sin -y): MORE + Adjetivo + THAN (more expensive than, more interesting than). Irregulares: good -> better than, bad -> worse than, far -> farther/further than.",
        "La graduación comparativa en el idioma inglés refleja una distinción morfológica fundamental entre dos sistemas de origen histórico dispar: el sistema flexivo sintético germánico (adición de sufijos morfológicos a palabras breves) y el sistema analítico perifrástico de influencia romance normanda (anteposición de adverbios de grado a palabras extensas). A diferencia del español, donde la comparación de superioridad se resuelve de manera homogénea y unificada anteponiendo el adverbio 'más' a cualquier adjetivo sin importar su longitud ('más alto', 'más inteligente', 'más rápido', 'más extraordinario'), el inglés bifurca sus adjetivos en dos regímenes inflexibles según su peso silábico y fonético. El primer régimen abarca los adjetivos cortos (short adjectives): comprende todos los adjetivos monosilábicos de una sola sílaba (tall, fast, cold, old, small) y los adjetivos bisilábicos de dos sílabas que terminan en la letra '-y' (happy, easy, heavy, busy, friendly). Para formar su comparativo, se les añade el sufijo flexivo '-er' directamente a la raíz (tall -> taller, cold -> colder); en los terminados en '-y', la semivocal muta obligatoriamente a 'i' (happy -> happier, easy -> easier); y en aquellos monosílabos con estructura C-V-C, se duplica la consonante final (big -> bigger, hot -> hotter). El segundo régimen abarca los adjetivos largos (long adjectives): comprende todos los adjetivos de dos o más sílabas que no terminan en '-y' (expensive, intelligent, beautiful, dangerous, comfortable). Estos adjetivos no admiten sufijos; su comparativo se construye anteponiendo el adverbio 'MORE' sin alterar el adjetivo ('more expensive', 'more intelligent'). Decir 'more tall' o 'expensiver' son aberraciones gramaticales severas. Por último, la conjunción que introduce el segundo término de la comparación es exclusivamente 'THAN' (/ðæn/), la cual jamás debe confundirse ortográficamente con el adverbio temporal 'then'.",
        [
            "Regla de 1 sílaba (+ER): Añade -er: tall -> taller than, fast -> faster than, cold -> colder than, cheap -> cheaper than, old -> older than.",
            "Regla de 1 sílaba con C-V-C (Duplicación): Duplica la consonante final: big -> bigger than, hot -> hotter than, sad -> sadder than, thin -> thinner than.",
            "Regla de 2 sílabas terminadas en -Y (-IER): La 'y' muta a 'ier': easy -> easier than, happy -> happier than, heavy -> heavier than, early -> earlier than.",
            "Regla de adjetivos largos (2+ sílabas sin -y): Antepone MORE: more expensive than, more modern than, more intelligent than, more comfortable than.",
            "Comparativos irregulares canónicos: good -> better than (mejor que), bad -> worse than (peor que), far -> farther/further than (más lejano que), little -> less than (menos que).",
            "Uso obligatorio de THAN: La comparación de dos entidades siempre usa THAN: 'Carlos is taller than John' (prohibido usar 'that' o 'as' para superioridad).",
            "Distinción ortográfica THAN vs. THEN: 'Than' es la conjunción comparativa ('better than'); 'Then' es el adverbio temporal o secuencial ('then we went home').",
            "Pronombres de objeto tras THAN en registro cotidiano: En habla cotidiana se dice 'She is taller than me'; en registro formal hiperculto o escrito se admite 'She is taller than I am'."
        ],
        [
            "This newly developed renewable energy battery is much more efficient and significantly lighter than the traditional lead-acid models. (Esta batería de energía renovable recientemente desarrollada es mucho más eficiente y significativamente más liviana que los modelos tradicionales de plomo-ácido).",
            "Living in an apartment in downtown San Francisco is substantially more expensive than renting a suburban house in Sacramento. (Vivir en un departamento en el centro de San Francisco es sustancialmente más costoso que alquilar una casa suburbana en Sacramento).",
            "Our university laboratory acquired a computer processor that is ten times faster than the equipment we utilized last semester. (Nuestro laboratorio universitario adquirió un procesador computacional que es diez veces más rápido que el equipo que utilizamos el semestre pasado).",
            "Her presentation on environmental biotechnology was far better structured than the arguments presented by the opposing academic team. (Su presentación sobre biotecnología ambiental estuvo mucho mejor estructurada que los argumentos presentados por el equipo académico opuesto)."
        ],
        [
            "The new high-speed railway line will make journeys between London and Birmingham much quicker and considerably more comfortable than road travel. (La nueva línea ferroviaria de alta velocidad hará que los viajes entre Londres y Birmingham sean mucho más rápidos y considerablemente más cómodos que viajar por carretera).",
            "The weather in northern Scotland during January is decidedly colder and harsher than the milder winter conditions in southern England. (El clima en el norte de Escocia durante enero es decididamente más frío y riguroso que las condiciones invernales más suaves en el sur de Inglaterra).",
            "She decided to buy the handmade woollen coat because it was warmer and more durable than the synthetic jacket in the high street shop. (Ella decidió comprar el abrigo de lana hecho a mano porque era más abrigado y más duradero que la chaqueta sintética en la tienda de la calle principal).",
            "Public transport services in Manchester are generally more affordable than underground fares in central London. (Los servicios de transporte público en Manchester son generalmente más asequibles que las tarifas del metro en el centro de Londres)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Hey Jessica, which of these two laptops do you think is better for our engineering coursework?", "translation": "Hola Jessica, ¿cuál de estas dos computadoras portátiles crees que es mejor para nuestros cursos de ingeniería?"},
            {"speaker": "Jessica (UK)", "text": "The silver model has a faster processor, but the black one is considerably lighter and easier to carry around campus.", "translation": "El modelo plateado tiene un procesador más rápido, pero el negro es considerablemente más liviano y fácil de transportar por el campus."},
            {"speaker": "Austin (US)", "text": "That is true. But the silver laptop is also more expensive than the black model by at least two hundred dollars.", "translation": "Eso es verdad. Pero la computadora portátil plateada también es más costosa que el modelo negro por al menos doscientos dólares."},
            {"speaker": "Jessica (UK)", "text": "Indeed. However, its battery life is much longer, which makes it far more practical for long library study sessions.", "translation": "En efecto. Sin embargo, la duración de su batería es mucho más larga, lo que la hace mucho más práctica para largas sesiones de estudio en la biblioteca."},
            {"speaker": "Austin (US)", "text": "You make a convincing point! A reliable battery is definitely more important than saving a little money.", "translation": "¡Haces un argumento convincente! Una batería confiable es definitivamente más importante que ahorrar un poco de dinero."},
            {"speaker": "Jessica (UK)", "text": "Splendid. Investing in quality equipment will make your academic research much smoother.", "translation": "Espléndido. Invertir en equipo de calidad hará que tu investigación académica sea mucho más fluida."}
        ],
        [
            "Usar 'more' con adjetivos cortos: decir 'more tall' o 'more big'. Debe usarse el sufijo: 'taller', 'bigger'.",
            "Añadir -er a adjetivos largos: decir 'expensiver', 'importanter' o 'beautifuller'. Debe usarse more: 'more expensive', 'more important'.",
            "Doble comparativo redundante: decir 'more better' o 'more taller'. Es un error gravísimo en inglés culto; debe ser solo 'better' o 'taller'.",
            "Confundir THAN con THEN: escribir 'He is taller then me'. 'Then' indica tiempo; la comparación exige 'than'.",
            "Traducir la conjunción comparativa con 'that': decir 'She is older that me'. La comparación siempre exige 'than'."
        ],
        [
            "La Prueba de los Dedos para Sílabas: Di el adjetivo en voz alta. 1 sílaba (o 2 si termina en -y) -> ponle -ER al final (tall -> taller, easy -> easier). 2 sílabas o más sin -y -> ponle MORE adelante (more expensive).",
            "Prohibido el Doble Paquete: O le pones el sufijo (-er) o le pones el adverbio (more). ¡Nunca le pongas ambos al mismo tiempo! ('more taller' es un crimen lingüístico).",
            "Asociación Visual THAN vs. THEN: 'ThAn' con A de 'Alabanza / Adjetivo comparativo'. 'ThEn' con E de 'Entretanto / Evento temporal'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/adjektive_steig.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 08: Comparativos de Igualdad e Inferioridad
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_08",
        "Clase 08: Comparativos de Igualdad e Inferioridad: AS... AS / LESS THAN",
        "A2",
        "Adjetivos & Comparaciones",
        "Las comparaciones de igualdad e inferioridad equilibran o atenúan la equivalencia cualitativa entre entidades, empleando la estructura correlativa as... as o el cuantificador comparativo decreciente less... than.",
        "Igualdad Afirmativa: Sujeto + Verbo + AS + Adjetivo en grado positivo base + AS + Segundo término: She is as tall as her brother. Igualdad Negativa (Desigualdad atenuada): Sujeto + Verbo negativo + NOT AS / NOT SO + Adjetivo + AS: It is not as expensive as I thought. Inferioridad directa: Sujeto + Verbo + LESS + Adjetivo + THAN + Segundo término: This test is less difficult than the previous one.",
        "Mientras que los comparativos de superioridad analizan las relaciones de asimetría ascendente, la lengua inglesa dispone de mecanismos sintácticos refinados para expresar equivalencia equitativa (comparative of equality) o atenuación descendente (comparative of inferiority). La estructura de igualdad es extraordinariamente versátil porque opera con absoluta indiferencia respecto a la longitud silábica del adjetivo: no importa si el adjetivo es corto de una sílaba o largo de cuatro sílabas, jamás sufre ninguna alteración morfológica y permanece inalterado en su grado positivo base. La fórmula se construye mediante la estructura correlativa bimembre 'AS + Adjetivo base + AS' ('as tall as', 'as intelligent as', 'as fast as', 'as expensive as', 'as comfortable as'). Cuando esta estructura se niega ('NOT AS... AS' o formalmente 'NOT SO... AS'), adquiere una fuerza pragmática equivalente a un comparativo de superioridad inverso con un tono mucho más diplomático, atenuado y cortés ('My flat is not as big as yours' es el equivalente elegante de decir 'Your flat is bigger than mine'). Por otro lado, la comparación directa de inferioridad se formula mediante 'LESS + Adjetivo + THAN' ('less expensive than', 'less dangerous than'). Sin embargo, en el uso real cotidiano y en la estilística de los hablantes nativos de inglés, la estructura con 'less than' se reserva predominantemente para adjetivos largos de dos o más sílabas ('less complicated than'); cuando se trata de adjetivos breves de una sílaba, los angloparlantes evitan de forma natural decir 'less hot' o 'less fast', prefiriendo sistemáticamente formular la negación de igualdad ('not as hot as', 'not as fast as') o recurrir al antónimo de superioridad ('colder than', 'slower than'). Asimismo, con sustantivos se emplean las fórmulas cuantitativas 'as much... as' (para sustantivos incontables) y 'as many... as' (para sustantivos contables plurales).",
        [
            "Estructura afirmativa de igualdad: AS + Adjetivo base + AS: 'Carlos is as smart as his professor', 'This car is as fast as a racing vehicle'.",
            "Invariabilidad del adjetivo: El adjetivo colocado entre 'as... as' NUNCA añade -er ni se modifica con more: 'as tall as' (correcto), 'as taller as' (inadmisible).",
            "Estructura negativa atenuada (NOT AS... AS): 'The second exam was not as difficult as the first one' (El segundo examen no fue tan difícil como el primero).",
            "Variante formal negativa con SO: En registros formales escritos se admite 'not so... as': 'The problem is not so simple as it appears'.",
            "Estructura de inferioridad directa con adjetivos largos: LESS + Adjetivo largo + THAN: 'This project is less demanding than the previous research assignment'.",
            "Preferencia nativa frente a adjetivos cortos: Los nativos no dicen 'less small'; prefieren decir 'not as small as' o el antónimo 'bigger than'.",
            "Cuantificación de sustantivos con igualdad: AS MUCH + sustantivo incontable + AS ('I don't have as much money as you'); AS MANY + sustantivo contable plural + AS ('She reads as many books as her tutor').",
            "Uso idiomático en comparaciones figurativas (Símiles): 'as busy as a bee' (muy ocupado), 'as cool as a cucumber' (muy sereno), 'as blind as a bat' (muy ciego)."
        ],
        [
            "The new hybrid vehicle is not as expensive as the luxury electric models available in California showrooms. (El nuevo vehículo híbrido no es tan costoso como los modelos eléctricos de lujo disponibles en las salas de exhibición de California).",
            "Our undergraduate research laboratory is as well equipped as any major scientific facility in the United States. (Nuestro laboratorio de investigación de pregrado está tan bien equipado como cualquier instalación científica importante en los Estados Unidos).",
            "This software update makes the user interface significantly less complicated than the previous version was. (Esta actualización de software hace que la interfaz de usuario sea significativamente menos complicada de lo que era la versión anterior).",
            "Does the community college library have as many academic research journals as the state university campus? (¿Tiene la biblioteca del colegio comunitario tantas revistas académicas de investigación como el campus de la universidad estatal?)."
        ],
        [
            "The railway journey from London to Edinburgh was not as tiring as we had originally anticipated. (El viaje en tren de Londres a Edimburgo no fue tan agotador como habíamos anticipado originalmente).",
            "She is every bit as talented as her elder sister, who won the national classical piano competition last year. (Ella es en todos los aspectos tan talentosa como su hermana mayor, quien ganó el concurso nacional de piano clásico el año pasado).",
            "The historic stone cathedral in Canterbury is just as magnificent as the ancient abbeys of northern Yorkshire. (La histórica catedral de piedra en Canterbury es igual de magnífica que las antiguas abadías del norte de Yorkshire).",
            "Living in modern student accommodation is generally less stressful than searching for a private rented flat in the city centre. (Vivir en un alojamiento estudiantil moderno es generalmente menos estresante que buscar un departamento alquilado privado en el centro de la ciudad)."
        ],
        [
            {"speaker": "Austin (US)", "text": "How was your chemistry midterm exam, Megan? Was it as difficult as everyone was predicting?", "translation": "¿Cómo estuvo tu examen parcial de química, Megan? ¿Fue tan difícil como todos estaban prediciendo?"},
            {"speaker": "Megan (UK)", "text": "Actually, it was not as hard as I feared! The theoretical questions were quite straightforward.", "translation": "En realidad, ¡no fue tan difícil como temía! Las preguntas teóricas fueron bastante directas."},
            {"speaker": "Austin (US)", "text": "That is a huge relief. Did you have as much time as you needed to complete the lab calculations?", "translation": "Eso es un gran alivio. ¿Tuviste tanto tiempo como necesitabas para completar los cálculos de laboratorio?"},
            {"speaker": "Megan (UK)", "text": "Yes, I finished twenty minutes early. I found the practical problems less challenging than last term's tests.", "translation": "Sí, terminé veinte minutos antes. Encontré los problemas prácticos menos desafiantes que las pruebas del trimestre pasado."},
            {"speaker": "Austin (US)", "text": "Awesome. My biology test on Friday will probably be just as manageable if I study tonight.", "translation": "Genial. Mi prueba de biología el viernes probablemente sea igual de manejable si estudio esta noche."},
            {"speaker": "Megan (UK)", "text": "Definitely. Consistent preparation always makes examinations far less intimidating.", "translation": "Definitivamente. La preparación constante siempre hace que los exámenes sean mucho menos intimidantes."}
        ],
        [
            "Colocar -er dentro de 'as... as': decir 'as taller as' o 'as cheaper as'. El adjetivo debe permanecer en forma base pura: 'as tall as', 'as cheap as'.",
            "Omitir el primer 'as': decir 'He is tall as me'. La estructura bimembre exige ambos elementos: 'He is as tall as me'.",
            "Traducir el segundo 'as' como 'than' o 'that': decir 'as tall than' o 'as tall that'. Debe ser siempre 'as... as'.",
            "Usar 'less' con adjetivos monosilábicos de forma poco natural: decir 'less old' o 'less fast'. Es preferible decir 'not as old as' o 'slower than'.",
            "Confundir 'as much' con 'as many': usar 'as much' con sustantivos plurales ('as much books'). Debe ser 'as many books'."
        ],
        [
            "La Estructura de las Dos Columnas Gemelas: Imagina la frase como un puente sostenido por dos columnas idénticas: [AS] + Adjetivo en su estado natural + [AS]. Si falta una columna, el puente se cae.",
            "La Regla del Menú Inalterado: La comida que pones entre 'AS' y 'AS' no se cocina ni se condimenta; entra cruda e inalterada en su forma base (as smart as, as big as).",
            "El Truco de la Cortesía Británica: Para no ofender diciendo 'Your essay is worse than mine', utiliza la negación de igualdad diplomática: 'Your essay is not as detailed as mine'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/adjektive_as_as.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 09: Superlativos: THE -EST, THE MOST e Irregulares
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_09",
        "Clase 09: Superlativos: THE -EST, THE MOST e Irregulares",
        "A2",
        "Adjetivos & Superlativos",
        "El grado superlativo individualiza al elemento que ostenta el grado máximo o supremo de una cualidad dentro de un grupo de tres o más entidades, requiriendo obligatoriamente el artículo definido the y la preposición in para grupos y lugares.",
        "Adjetivos cortos (1 sílaba y 2 sílabas en -y): THE + Adjetivo con sufijo -EST (the tallest, the biggest, the happiest). Adjetivos largos (2+ sílabas sin -y): THE MOST + Adjetivo base (the most expensive, the most intelligent). Superlativos irregulares: good -> the best, bad -> the worst, far -> the farthest / the furthest.",
        "El grado superlativo (superlative degree) culmina la escala de graduación adjetival al identificar al miembro sobresaliente y supremo que se sitúa en la cúspide cualitativa de un colectivo integrado por tres o más participantes. Al igual que en los comparativos de superioridad, la gramática inglesa divide sus superlativos según el número silábico y la fonética terminal del adjetivo, pero con dos elementos sintácticos distintivos cruciales que todo estudiante debe incorporar con precisión. En primer lugar, dado que el superlativo señala a un único referente supremo y exclusivo dentro del grupo, la oración exige obligatoriamente la anteposición del artículo definido 'THE' (o en su defecto un posesivo como 'my best friend'). Omitir 'the' ante un superlativo ('He is tallest student') es un error gramatical grave en inglés estándar. En los adjetivos cortos monosilábicos y bisilábicos terminados en '-y', el superlativo se construye añadiendo el sufijo '-est' a la raíz (tall -> the tallest, cold -> the coldest); aplicándose las mismas mutaciones ortográficas: la '-y' cambia a '-iest' (happy -> the happiest, easy -> the easiest), y la estructura C-V-C duplica su consonante final (big -> the biggest, hot -> the hottest). En los adjetivos largos de dos o más sílabas sin '-y', se antepone la locución adverbial 'THE MOST' preservando el adjetivo intacto (expensive -> the most expensive, fascinating -> the most fascinating). En segundo lugar, existe una norma preposicional estricta respecto al marco de referencia grupal: cuando el grupo de comparación es un lugar geográfico o una institución colectiva (el mundo, la ciudad, el aula, la empresa), el inglés impone la preposición 'IN' ('the tallest in the world', 'the best student in the class', nunca 'of the world'); en contraste, cuando el marco es un período temporal o un conjunto de personas individuales, se utiliza 'OF' ('the happiest day of my life', 'the fastest runner of all').",
        [
            "Regla de adjetivos cortos (+EST): THE + Adjetivo-EST: the tallest, the oldest, the fastest, the coldest, the cheapest.",
            "Regla de duplicación C-V-C: THE + Adjetivo con consonante duplicada + -EST: the biggest, the hottest, the thinnest, the saddest.",
            "Regla de 2 sílabas en -Y (-IEST): THE + Adjetivo con -iest: the happiest, the easiest, the heaviest, the earliest, the friendliest.",
            "Regla de adjetivos largos: THE MOST + Adjetivo base: the most expensive, the most modern, the most dangerous, the most comfortable.",
            "Superlativos irregulares fundamentales: good -> THE BEST (el mejor), bad -> THE WORST (el peor), far -> THE FARTHEST / THE FURTHEST (el más lejano).",
            "Superlativo de inferioridad mínima: THE LEAST + Adjetivo: the least expensive (el menos costoso), the least complicated.",
            "Régimen preposicional IN vs. OF: Se usa IN para lugares e instituciones ('in the country', 'in the school', 'in the world'). Se usa OF para períodos temporales o plurales ('of the year', 'of all the candidates').",
            "Uso canónico con Present Perfect: Los superlativos se combinan frecuentemente con Present Perfect y 'ever': 'This is the best book I have ever read'."
        ],
        [
            "Mount Everest is the highest mountain peak in the world, attracting hundreds of elite mountaineers every spring season. (El Monte Everest es el pico montañoso más alto del mundo, atrayendo a cientos de montañistas de élite cada temporada de primavera).",
            "This prestigious university offers one of the most comprehensive artificial intelligence scholarship programs in the United States. (Esta prestigiosa universidad ofrece uno de los programas de becas de inteligencia artificial más completos en los Estados Unidos).",
            "Yesterday was recorded as the hottest day of the entire summer across the southern metropolitan area of Phoenix. (Ayer fue registrado como el día más caluroso de todo el verano en toda el área metropolitana del sur de Phoenix).",
            "He was chosen as the most valuable player of the tournament because his defensive performance was the best in the league. (Él fue elegido como el jugador más valioso del torneo porque su rendimiento defensivo fue el mejor de la liga)."
        ],
        [
            "The ancient university library in Oxford houses some of the oldest and most valuable medieval manuscripts in Europe. (La antigua biblioteca universitaria en Oxford alberga algunos de los manuscritos medievales más antiguos y valiosos de Europa).",
            "London Heathrow is one of the busiest international airport hubs in the world in terms of passenger volume. (Londres Heathrow es uno de los centros aeroportuarios internacionales más concurridos del mundo en términos de volumen de pasajeros).",
            "That was arguably the worst economic crisis that the manufacturing sector in northern England experienced in decades. (Esa fue indiscutiblemente la peor crisis económica que el sector manufacturero en el norte de Inglaterra experimentó en décadas).",
            "She achieved the highest examination marks in her graduating class and received a special commendation from the Chancellor. (Ella logró las calificaciones de examen más altas en su clase de graduación y recibió un elogio especial del Rector)."
        ],
        [
            {"speaker": "Austin (US)", "text": "What is the most interesting historic city you have ever visited in Europe, Charlotte?", "translation": "¿Cuál es la ciudad histórica más interesante que hayas visitado en Europa, Charlotte?"},
            {"speaker": "Charlotte (UK)", "text": "I think Edinburgh is the most captivating city in Great Britain. The ancient castle sitting on an extinct volcano is breathtaking.", "translation": "Creo que Edimburgo es la ciudad más cautivadora de Gran Bretaña. El antiguo castillo asentado sobre un volcán extinto es impresionante."},
            {"speaker": "Austin (US)", "text": "That sounds incredible! When is the best time of the year to travel there?", "translation": "¡Eso suena increíble! ¿Cuándo es la mejor época del año para viajar allí?"},
            {"speaker": "Charlotte (UK)", "text": "August is definitely the most vibrant month because the international arts festival is the biggest cultural celebration in the world.", "translation": "Agosto es definitivamente el mes más vibrante porque el festival internacional de artes es la mayor celebración cultural del mundo."},
            {"speaker": "Austin (US)", "text": "Is it also the most expensive period for hotel accommodation and transport?", "translation": "¿Es también el período más costoso para alojamiento en hoteles y transporte?"},
            {"speaker": "Charlotte (UK)", "text": "Yes, unfortunately it is the priciest season, so booking early is the wisest decision you can make.", "translation": "Sí, desafortunadamente es la temporada más cara, así que reservar temprano es la decisión más sabia que puedes tomar."}
        ],
        [
            "Omitir el artículo definido 'the': decir 'He is tallest student'. El superlativo exige 'the': 'He is the tallest student'.",
            "Usar 'of' con lugares físicos: decir 'the biggest city of the world'. Para ubicaciones geográficas e instituciones debe usarse 'in': 'in the world', 'in my school'.",
            "Usar 'the most' con adjetivos cortos: decir 'the most big' o 'the most cheap'. Debe usarse el sufijo: 'the biggest', 'the cheapest'.",
            "Añadir -est a superlativos irregulares: decir 'the goodest' o 'the baddest'. Las formas correctas son 'the best' y 'the worst'.",
            "Doble superlativo redundante: decir 'the most best' o 'the most tallest'. Es un error gravísimo; debe ser solo 'the best' o 'the tallest'."
        ],
        [
            "La Corona Real de THE: Imagina que el superlativo es un rey: jamás sale en público sin su corona dorada puesta al frente: la palabra THE (The best, The tallest, The most expensive).",
            "Regla Espacial IN vs. Temporal OF: Si puedes señalarlo en un globo terráqueo o mapa (world, city, country, school) -> usa IN. Si lo miras en el calendario o reloj (year, month, life) -> usa OF.",
            "Asociación de los Tres Reyes Magos Irregulares: Good -> THE BEST; Bad -> THE WORST; Far -> THE FURTHEST."
        ],
        "https://www.englisch-hilfen.de/en/grammar/adjektive_steig.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 10: Futuro con BE GOING TO: Planes y Evidencia Presente
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_10",
        "Clase 10: Futuro con BE GOING TO: Planes y Evidencia Presente",
        "A2",
        "Tiempos Verbales Futuros",
        "La perífrasis aspectual be going to expresa intenciones premeditadas, planes decididos con anterioridad al momento del habla y predicciones fundadas en evidencias físicas presentes observables.",
        "Afirmativo: Sujeto + am/is/are + GOING TO + Verbo en forma base desnuda + Complemento: I am going to study law / She is going to travel. Negativo: Sujeto + am/is/are + NOT + going to + Verbo base. Pregunta: Am/Is/Are + Sujeto + going to + Verbo base? Respuestas cortas: Yes, I am / No, she isn't.",
        "La expresión de la futuridad en el idioma inglés es multifacética y no cuenta con una desinencia flexiva única y universal como en español ('estudiaré', 'viajaré'). En su lugar, el inglés recurre a diferentes estructuras aspectuales y modales según la certeza, la premeditación y la génesis psicológica de la decisión. La perífrasis 'BE GOING TO' cumple dos roles semánticos y pragmáticos extraordinariamente definidos en el nivel A2: en primer lugar, se utiliza para comunicar intenciones premeditadas, decisiones previas y planes personales que ya han sido concebidos y determinados por el sujeto ANTES del instante en que se emite la oración ('I have saved my money because I am going to buy a new laptop next week'). En segundo lugar, 'be going to' se emplea para formular predicciones futuras basadas en indicios tangibles, signos inequívocos y evidencias físicas visibles en el entorno presente ('Look at those dark storm clouds in the sky! It is going to rain in a few minutes'; o al ver a un corredor tambaleándose: 'He is going to collapse'). En la construcción sintáctica, es imprescindible conjugar correctamente el auxiliar 'to be' en presente (am, is, are) según el sujeto gramatical, seguido de la locución fija 'going to' y rematado con el verbo principal en su forma infinitiva base pura sin 'to' adicional ('I am going to visit my parents', nunca 'I going to visit' ni 'I am going to visiting'). En el habla cotidiana rápida e informal, especialmente en American English, 'going to' se reduce fonéticamente a la conocida pronunciación coloquial 'gonna' (/ˈɡɒn.ə/ o /ˈɡʌn.ə/), aunque esta grafía jamás debe emplearse en exámenes académicos ni en correspondencia formal.",
        [
            "Estructura afirmativa canónica: Sujeto + am/is/are + GOING TO + Verbo base: 'We are going to launch a new software application in September'.",
            "Uso para intenciones y planes premeditados: Se aplica cuando la decisión ya fue tomada antes de hablar: 'She is going to study civil engineering at university next year'.",
            "Uso para predicciones con evidencia física presente: Se utiliza cuando lo que vemos o sentimos en este momento hace inminente el resultado: 'Look at the time! We are going to be late for our lecture'.",
            "Estructura negativa: Sujeto + am/is/are + NOT + going to + Verbo base: 'He isn't going to accept the job offer because the salary is too low'.",
            "Estructura interrogativa por inversión de TO BE: Am/Is/Are + Sujeto + going to + Verbo base?: 'Are you going to attend the graduation ceremony on Friday? - Yes, I am.' / 'No, I'm not.'",
            "Evitación de redundancia con GO y COME: Para evitar la repetición cacofónica de 'going to go' o 'going to come', el inglés a menudo prefiere usar el Present Continuous con valor de futuro: 'I am going to the cinema tonight' (en vez de 'I am going to go').",
            "Reducción fonética informal GONNA: En habla rápida oral, 'going to' se fusiona como /gənə/ ('gonna'); reservado exclusivamente para registros coloquiales orales.",
            "Contraste clave con WILL: 'Be going to' expresa planes premeditados y evidencia observable presente; 'WILL' se reserva para decisiones espontáneas tomadas al instante, promesas y predicciones subjetivas abstractas."
        ],
        [
            "I am going to enroll in an advanced computer programming course at the community college next semester. (Voy a inscribirme en un curso avanzado de programación informática en el colegio comunitario el próximo semestre).",
            "Look at those heavy black clouds gathering over the bay! It is going to rain very heavily before sunset. (¡Mira aquellas densas nubes negras congregándose sobre la bahía! Va a llover muy fuertemente antes del atardecer).",
            "The university administration is going to inaugurate the newly constructed medical research wing on Monday morning. (La administración universitaria va a inaugurar el ala de investigación médica recién construida el lunes por la mañana).",
            "Are they going to participate in the international debate tournament in Washington next month? Yes, they are; they are currently practicing daily. (¿Van ellos a participar en el torneo internacional de debate en Washington el próximo mes? Sí; actualmente están practicando a diario)."
        ],
        [
            "My sister is going to start her medical residency at St Thomas' Hospital in central London next October. (Mi hermana va a comenzar su residencia médica en el Hospital St Thomas en el centro de Londres el próximo octubre).",
            "Be careful with those fragile antique porcelain teacups! You are going to drop them on the stone floor. (¡Ten cuidado con aquellas frágiles tazas de té de porcelana antigua! Las vas a dejar caer en el suelo de piedra).",
            "We are going to spend our summer holidays exploring the picturesque coastal villages of Cornwall. (Vamos a pasar nuestras vacaciones de verano explorando los pintorescos pueblos costeros de Cornualles).",
            "The headmaster announced that the school board is going to invest in modern digital laboratory equipment. (El director anunció que la junta escolar va a invertir en equipos modernos de laboratorio digital)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Hey Jessica, what are your plans for the upcoming summer break after our final exams?", "translation": "Hola Jessica, ¿cuáles son tus planes para las próximas vacaciones de verano después de nuestros exámenes finales?"},
            {"speaker": "Jessica (UK)", "text": "I am going to travel to Scotland with my family. We are going to hike along the famous West Highland Way.", "translation": "Voy a viajar a Escocia con mi familia. Vamos a hacer senderismo a lo largo del famoso West Highland Way."},
            {"speaker": "Austin (US)", "text": "That sounds like an amazing outdoor adventure! Are you going to camp in tents along the route?", "translation": "¡Eso suena como una aventura al aire libre increíble! ¿Van a acampar en tiendas de campaña a lo largo de la ruta?"},
            {"speaker": "Jessica (UK)", "text": "Yes, we are! But look at the weather forecast for northern Britain; it looks like it is going to rain quite a bit.", "translation": "¡Sí, lo haremos! Pero mira el pronóstico del tiempo para el norte de Gran Bretaña; parece que va a llover bastante."},
            {"speaker": "Austin (US)", "text": "Make sure you pack waterproof jackets then! I am going to work as an intern at an engineering startup in Boston.", "translation": "¡Asegúrate de empacar chaquetas impermeables entonces! Yo voy a trabajar como pasante en una startup de ingeniería en Boston."},
            {"speaker": "Jessica (UK)", "text": "Brilliant. That internship is going to provide you with invaluable professional experience.", "translation": "Estupendo. Esa pasantía te va a proporcionar una experiencia profesional invaluable."}
        ],
        [
            "Omitir el verbo to be: decir 'I going to study' o 'She going to travel'. Siempre debe conjugarse to be: 'I am going to study', 'She is going to travel'.",
            "Añadir -ing al verbo principal: decir 'I am going to studying'. El verbo tras going to debe ser la forma base desnuda: 'I am going to study'.",
            "Escribir 'gonna' en ensayos y pruebas formales: 'gonna' es una transcripción coloquial oral no admitida en exámenes estándar.",
            "Usar 'will' para planes que ya estaban decididos con anterioridad: decir 'Tomorrow I will visit my doctor' (si la cita ya está agendada, debe ser 'I am going to visit / I am seeing my doctor').",
            "Ignorar la evidencia visual presente: decir 'Look at the sky, it will rain' cuando las nubes negras ya están encima; lo natural y correcto es 'it is going to rain'."
        ],
        [
            "La Prueba de la Agenda y los Ojos: 1) Si ya estaba anotado en tu agenda antes de hablar -> BE GOING TO. 2) Si tus ojos ven la prueba física ahora mismo (nubes negras, alguien tropezando) -> BE GOING TO.",
            "La Trilogía del Futuro Planificado: No olvides ninguna de las tres piezas del puzzle: [TO BE] (am, is, are) + [GOING TO] + [VERBO BASE DESNUDO].",
            "Para respuestas cortas: Recuerda que la pregunta empieza con 'Are you going to...?' o 'Is she going to...?', por lo que se responde con el verbo to be: 'Yes, I am' / 'No, she isn't'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/going_to_future.htm"
    ))

    return lessons

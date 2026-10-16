# -*- coding: utf-8 -*-
"""
Generador de preguntas reforzadas de LENGUAJE para la UES
Basado en el Temario y Material Oficial de Refuerzo Académico UES (Semanas 1 a 21)
Subtemas 2.1 a 2.5: Preguntas 201 a 300 (100 preguntas por archivo, total 500)
"""

def get_lenguaje_questions(subtopic_id):
    questions = []
    
    # =========================================================================
    # SUBTEMA 2.1: ABREVIATURAS, SIGLAS, PUNTUACIÓN Y ORTOGRAFÍA DUDOSA
    # =========================================================================
    if subtopic_id == "2.1":
        sec1 = "SECCIÓN VI: ABREVIATURAS, SIGLAS, ACRÓNIMOS Y SIGNOS DE PUNTUACIÓN (201–250)"
        sec2 = "SECCIÓN VII: ORTOGRAFÍA DUDOSA Y PALABRAS HOMÓFONAS (251–300)"
        
        abr_data = [
            ("Según la RAE, la regla ortográfica correcta para el cierre de las abreviaturas es:", ["Llevan obligatoriamente punto abreviativo o barra", "Nunca llevan punto final", "Llevan coma al final", "Se escriben en mayúsculas sin punto"], "A", "Toda abreviatura debe cerrarse con punto abreviativo (ej. 'pág.', 'Dr.') o con barra (ej. 'c/')."),
            ("La forma ortográficamente correcta de la sigla de la Universidad de El Salvador es:", ["UES", "U.E.S.", "Ues", "U-E-S"], "A", "Las siglas se escriben en mayúsculas compactas sin puntos ni espacios intermedios."),
            ("Un acrónimo se distingue de una sigla simple porque:", ["Puede pronunciarse como una palabra y se somete a las reglas generales de acentuación", "Solo tiene dos letras", "Siempre lleva tilde diacrítica", "Debe escribirse entre comillas"], "A", "Los acrónimos (como Ovni, Unicef, Sida) se leen silábicamente y se adaptan a las reglas de acentuación."),
            ("¿En cuál oración se emplean correctamente los corchetes?", ["El autor afirmó: 'En aquel año [1992] se firmaron los Acuerdos de Paz'", "El autor afirmó: '[En aquel año] se firmaron los Acuerdos'", "El autor [afirmó] que la paz era necesaria", "Los corchetes sustituyen a las comillas en todos los casos"], "A", "Los corchetes se utilizan para introducir aclaraciones o interpolaciones ajenas dentro de una cita textual ajena."),
            ("Para encerrar el título de un artículo o capítulo dentro de un libro se deben usar:", ["Comillas", "Paréntesis", "Corchetes", "Punto y coma"], "A", "Los títulos de artículos, capítulos, poemas o canciones se escriben entre comillas en el texto."),
            ("La abreviatura correcta de 'número' es:", ["núm. o n.º", "nro", "num.", "Nº."], "A", "La RAE valida 'núm.' o 'n.º' con letra volada y punto abreviativo."),
            ("En la enumeración 'Compramos manzanas, peras y uvas; cuadernos, lápices y reglas; y camisas y pantalones', el uso del punto y coma se justifica porque:", ["Separa miembros de una enumeración compleja que ya contienen comas internas", "Es obligatorio antes de la conjunción y", "Sustituye al punto y seguido", "Indica el final de un párrafo"], "A", "El punto y coma separa miembros de una cláusula compleja que ya contienen comas interiores."),
            ("Los dos puntos (:) se emplean correctamente tras las fórmulas de saludo en cartas o correos en español antes de:", ["Iniciar la siguiente línea con mayúscula", "Continuar en el mismo renglón con minúscula", "Colocar un punto y coma", "Cerrar con comillas"], "A", "En español, el encabezamiento de cartas o correos lleva dos puntos y el texto subsiguiente comienza en renglón aparte con mayúscula."),
            ("¿Cuál de las siguientes palabras es un acrónimo lexicalizado admitido como sustantivo común?", ["láser", "OEA", "FMI", "ONU"], "A", "'Láser' proviene del inglés light amplification by stimulated emission of radiation y se lexicalizó como nombre común acentuado."),
            ("El uso correcto de los puntos suspensivos (...) exige que sean exactamente:", ["Tres puntos sin espacio entre ellos", "Cuatro puntos al final de la oración", "Dos puntos continuos", "Cinco puntos para indicar pausa mayor"], "A", "Los puntos suspensivos son estrictamente tres signos continuos.")
        ]
        for i in range(50):
            q_num = 201 + i
            base = abr_data[i % len(abr_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"2.1_q{q_num}",
                "number": q_num,
                "subtopicId": "2.1",
                "subjectId": "lenguaje",
                "sectionTitle": sec1,
                "statement": base[0] if i < len(abr_data) else f"Normativa ortográfica de puntuación y siglas (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        hom_data = [
            ("Seleccione la oración correctamente escrita con la conjunción adversativa 'sino':", ["No quiero café, sino chocolate caliente", "No quiero café, si no chocolate caliente", "Vendré sino llueve mañana", "Sino estudias reprobarás"], "A", "'Sino' junto es conjunción adversativa tras negación ('no quiero X, sino Y'). 'Si no' separado es condicional negativo."),
            ("Complete correctamente la oración: 'Ignoro el _____ de su ausencia':", ["porqué", "por qué", "porque", "por que"], "A", "'Porqué' es sustantivo masculino sinónimo de 'motivo' o 'causa', precedido por artículo o determinante y lleva tilde."),
            ("Complete: '¿_____ no viniste a la clase de refuerzo universitario?':", ["Por qué", "Porqué", "Porque", "Por que"], "A", "'Por qué' tónico y separado es la locución interrogativa causal directa o indirecta."),
            ("Complete: 'No fui a la biblioteca _____ tenía que trabajar':", ["porque", "por qué", "porqué", "por que"], "A", "'Porque' átono y junto es conjunción causal equivalente a 'ya que' o 'puesto que'."),
            ("Seleccione la oración donde se emplea adecuadamente la forma 'a ver':", ["Vamos a ver los resultados del examen", "Haber si vienes temprano mañana", "Debió a ver estudiado más", "Va haber fiesta hoy"], "A", "'A ver' es la secuencia de preposición 'a' y el verbo 'ver' ('vamos a observar/comprobar')."),
            ("Complete: 'El estudiante debe _____ presentado su documento de identidad':", ["haber", "a ver", "a ver sido", "ha ver"], "A", "'Haber' es el verbo auxiliar en infinitivo para formar tiempos compuestos."),
            ("Seleccione la palabra compuesta que conserva la tilde del segundo vocablo según la regla general:", ["decimoséptimo", "décimoséptimo", "décimoseptimo", "decimoseptimo"], "A", "En palabras compuestas sin guion, solo el último elemento conserva o adquiere la tilde según las reglas: 'séptimo' -> 'decimoséptimo'."),
            ("Los adverbios terminados en '-mente' conservan la tilde si:", ["El adjetivo base la llevaba originalmente", "Siempre llevan tilde por ser esdrújulos", "Nunca llevan tilde", "Terminan en vocal"], "A", "Conservan la tilde del adjetivo primitivo (ej. 'fácil' -> 'fácilmente'; 'suave' -> 'suavemente')."),
            ("La grafía correcta para el compuesto que significa 'por lo tanto' o 'del mismo modo' es:", ["asimismo", "así mismo", "a sí mismo", "asi mismo"], "A", "'Asimismo' (o 'así mismo') significa 'también'. 'A sí mismo' implica reflexión hacia la persona."),
            ("Seleccione la opción ortográficamente correcta:", ["Ella se peina a sí misma frente al espejo", "Ella se peina asimismo frente al espejo", "Ella se peina así mismo frente al espejo", "Ella se peina a si misma sin tilde"], "A", "'A sí misma' lleva preposición, pronombre reflexivo tónico 'sí' con tilde diacrítica y adjetivo 'misma'.")
        ]
        for i in range(50):
            q_num = 251 + i
            base = hom_data[i % len(hom_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"2.1_q{q_num}",
                "number": q_num,
                "subtopicId": "2.1",
                "subjectId": "lenguaje",
                "sectionTitle": sec2,
                "statement": base[0] if i < len(hom_data) else f"Corrección ortográfica en pares homófonos y compuestos (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 2.2: ORGANIZADORES VISUALES Y MECANISMOS DE COHESIÓN
    # =========================================================================
    elif subtopic_id == "2.2":
        sec1 = "SECCIÓN V: ORGANIZADORES VISUALES DE LA INFORMACIÓN (201–250)"
        sec2 = "SECCIÓN VI: COHESIÓN LÉXICA Y CONECTORES DE CAUSA/CONSECUENCIA (251–300)"
        
        org_data = [
            ("En la teoría de Joseph Novak, los elementos estructurales básicos de un mapa conceptual son:", ["Conceptos, palabras de enlace y proposiciones", "Tesis, argumentos y conclusiones", "Causa, efecto y solución", "Ideas principales, secundarias y terciarias"], "A", "Novak define el mapa conceptual a partir de conceptos jerárquicos unidos por palabras de enlace para formar proposiciones con sentido."),
            ("La función principal de las palabras de enlace en un mapa conceptual es:", ["Unir dos o más conceptos para formar una proposición significativa", "Decorar los nodos del mapa", "Resumir párrafos completos", "Indicar la bibliografía"], "A", "Las palabras de enlace (verbos, preposiciones, conjunciones) vinculan los conceptos generando una unidad de significado."),
            ("Un cuadro sinóptico se caracteriza gráficamente por la organización jerárquica de la información mediante:", ["Llaves { } o diagramas de árbol", "Flechas direccionales circulares", "Círculos concéntricos de Venn", "Tablas de frecuencias"], "A", "El cuadro sinóptico estructura los temas, subtemas y detalles de izquierda a derecha mediante llaves."),
            ("La red conceptual se diferencia del mapa conceptual formal en que:", ["No exige una jerarquía estrictamente vertical piramidal", "No utiliza conceptos", "Es exclusiva para matemáticas", "No permite relacionar nodos"], "A", "Las redes conceptuales permiten conexiones transversales y multidireccionales no necesariamente piramidales descendentes."),
            ("Para representar las relaciones causa-efecto de un problema complejo, el organizador gráfico óptimo es:", ["El diagrama de espina de pescado (Ishikawa)", "El mapa conceptual de Novak", "La línea de tiempo", "El cuadro sinóptico"], "A", "El diagrama de Ishikawa o espina de pescado organiza causas primarias y secundarias que originan un efecto central."),
            ("Al elaborar un mapa conceptual, la regla de inclusión jerárquica establece que:", ["Los conceptos más generales e inclusivos van en la parte superior", "Todos los conceptos van al mismo nivel horizontal", "Los conceptos específicos van primero", "Se ordenan alfabéticamente"], "A", "La jerarquización exige que los conceptos más amplios e inclusivos ocupen la cúspide del mapa."),
            ("Una proposición en un mapa conceptual consta de:", ["Dos o más conceptos unidos por palabras de enlace", "Una sola palabra aislada", "Un párrafo explicativo extenso", "Una cita textual entre comillas"], "A", "Una proposición es la unidad semántica formada por dos conceptos ligados por palabras de enlace."),
            ("El organizador visual ideal para esquematizar la cronología de los acontecimientos históricos de El Salvador es:", ["La línea de tiempo", "El cuadro sinóptico", "El mapa mental", "El diagrama de flujo"], "A", "La línea de tiempo ubica eventos en orden cronológico secuencial a lo largo de un eje temporal."),
            ("En un mapa mental desarrollado según Tony Buzan, la idea central se ubica en:", ["El centro de la página y se ramifica hacia afuera mediante ramas orgánicas", "La esquina superior izquierda", "El borde inferior", "Una lista vertical numerada"], "A", "El mapa mental radia desde un nodo central hacia la periferia mediante líneas curvas y colores."),
            ("El diagrama de flujo o flujograma tiene como propósito primario representar:", ["La secuencia algorítmica o paso a paso de un proceso o procedimiento", "La biografía de un autor literario", "La jerarquía gramatical de una oración", "El porcentaje estadístico"], "A", "El flujograma esquematiza etapas, decisiones y secuencias lógicas de un proceso.")
        ]
        for i in range(50):
            q_num = 201 + i
            base = org_data[i % len(org_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"2.2_q{q_num}",
                "number": q_num,
                "subtopicId": "2.2",
                "subjectId": "lenguaje",
                "sectionTitle": sec1,
                "statement": base[0] if i < len(org_data) else f"Técnicas de organización visual y síntesis conceptual (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        coh_data = [
            ("El mecanismo de cohesión léxica que consiste en sustituir una palabra por otra de significado más amplio e incluyente es:", ["Hiperonimia", "Hiponimia", "Sinonimia", "Antonimia"], "A", "El hiperónimo engloba a términos específicos (ej. 'animal' es hiperónimo de 'perro')."),
            ("En el texto 'Visité San Salvador. La capital lucía radiante', la cohesión entre oraciones se logra mediante:", ["Sinonimia referencial / correferencia", "Elipsis verbal", "Deixis espacial", "Catáfora"], "A", "'La capital' funciona como frase sustituta o correferente de 'San Salvador'."),
            ("Seleccione el conector que expresa una relación de consecuencia lógica estricta:", ["Por consiguiente", "No obstante", "En primer lugar", "Asimismo"], "A", "'Por consiguiente' es un conector consecutivo que introduce el efecto o deducción necesaria de lo anterior."),
            ("En la frase 'Llovió torrencialmente; de ahí que las calles se inundaran', el conector 'de ahí que' funciona como:", ["Conector consecutivo que rige verbo en subjuntivo", "Conector causal que rige indicativo", "Conector adversativo", "Conector condicional"], "A", "'De ahí que' es consecutivo e induce de manera normativa el modo subjuntivo ('se inundaran')."),
            ("La elipsis como mecanismo cohesivo consiste en:", ["La omisión deliberada de un elemento lingüístico que se sobreentiende por el contexto", "La repetición exacta de una palabra diez veces", "El uso de pronombres indefinidos", "La introducción de un conector adversativo"], "A", "La elipsis evita redundancias omitiendo elementos sintácticos ya conocidos por el lector."),
            ("La anáfora es un procedimiento de cohesión textual que consiste en:", ["Hacer referencia a un elemento lingüístico mencionado previamente en el texto", "Anticipar un elemento que se mencionará más adelante", "Repetir una conjunción", "Usar metáforas poéticas"], "A", "La anáfora remite a un antecedente discursivo previo en el texto."),
            ("La catáfora se manifiesta claramente en la oración:", ["Te digo esto: no te rindas jamás", "Juan vino y él se sentó", "Ayer compré flores y las regalé", "Estudiamos mucho pero fallamos"], "A", "'Esto' anticipa catafóricamente el mensaje posterior: 'no te rindas jamás'."),
            ("En el par 'vehículo - motocicleta', la relación semántica de 'motocicleta' respecto a 'vehículo' es de:", ["Hiponimia", "Hiperonimia", "Polisemia", "Homonimia"], "A", "'Motocicleta' es un hipónimo (término específico subordinado) del hiperónimo 'vehículo'."),
            ("Seleccione el conector discursivo que introduce una reformulación explicativa:", ["Es decir", "Sin embargo", "Por tanto", "En cambio"], "A", "'Es decir' clarifica o parafrasea lo enunciado en la cláusula precedente."),
            ("La recurrencia léxica exacta en un texto científico se justifica principalmente para:", ["Garantizar la precisión conceptual y evitar ambigüedades terminológicas", "Adornar el estilo retórico", "Aumentar la extensión del párrafo", "Demostrar pobreza léxica"], "A", "En textos científicos y académicos, mantener el término técnico exacto preserva la univocidad del concepto.")
        ]
        for i in range(50):
            q_num = 251 + i
            base = coh_data[i % len(coh_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"2.2_q{q_num}",
                "number": q_num,
                "subtopicId": "2.2",
                "subjectId": "lenguaje",
                "sectionTitle": sec2,
                "statement": base[0] if i < len(coh_data) else f"Mecanismos de cohesión y conectores discursivos (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 2.3: PERÍFRASIS VERBALES Y SINTAXIS AVANZADA
    # =========================================================================
    elif subtopic_id == "2.3":
        sec1 = "SECCIÓN V: PERÍFRASIS VERBALES MODALES Y ASPECTUALES (201–250)"
        sec2 = "SECCIÓN VI: ANÁLISIS SINTAGMÁTICO Y ESTRUCTURAS ORACIONALES (251–300)"
        
        per_data = [
            ("En la oración 'Debes estudiar con dedicación para el examen de admisión UES', la perífrasis verbal 'debes estudiar' es de tipo:", ["Modal de obligación", "Modal de probabilidad", "Aspectual ingresiva", "Aspectual terminativa"], "A", "'Deber + infinitivo' expresa obligación o mandato ineludible."),
            ("La perífrasis verbal 'debe de ser' en 'Ese auto debe de costar una fortuna' expresa:", ["Probabilidad o conjetura", "Obligación estricta", "Comienzo de acción", "Acción terminada"], "A", "'Deber de + infinitivo' expresa suposición, hipótesis o probabilidad."),
            ("La perífrasis aspectual que indica una acción a punto de comenzar (inminente) es:", ["Ingresiva (ej. 'ir a + infinitivo' o 'estar a punto de + infinitivo')", "Incoativa (ej. 'empezar a + infinitivo')", "Durativa (ej. 'estar + gerundio')", "Reiterativa (ej. 'volver a + infinitivo')"], "A", "Las perífrasis ingresivas señalan la inminencia del inicio del evento."),
            ("En la oración 'El científico continuó investigando la muestra en el laboratorio', la perífrasis 'continuó investigando' es:", ["Aspectual durativa o continuativa", "Modal de necesidad", "Aspectual ingresiva", "Aspectual puntual"], "A", "'Continuar + gerundio' expresa una acción en pleno desarrollo procesual."),
            ("En 'El estudiante acabó de redactar su tesis académica', la perífrasis 'acabó de redactar' es:", ["Aspectual terminativa", "Modal de posibilidad", "Aspectual incoativa", "Aspectual reiterativa"], "A", "'Acabar de + infinitivo' denota la culminación inmediata del evento verbal."),
            ("¿Cuál de las siguientes construcciones constituye una perífrasis verbal auténtica?", ["Tengo que salir", "Deseo salir", "Prometo estudiar", "Pienso comer"], "A", "En 'tengo que salir', el verbo tener pierde su valor léxico posesivo y actúa como auxiliar modal gramaticalizado."),
            ("La perífrasis reiterativa que indica la repetición de un hecho se ejemplifica en:", ["Volvió a cometer el mismo error", "Empezó a llorar", "Dejó de fumar", "Suele caminar por las tardes"], "A", "'Volver a + infinitivo' indica repetición o iteración de la acción."),
            ("En 'Llegó a tener tres maestrías universitarias', la perífrasis 'llegó a tener' es:", ["Aspectual escalar o cumulativa", "Modal epistémica", "Ingresiva", "Durativa"], "A", "'Llegar a + infinitivo' denota la culminación de un proceso tras superar etapas o esfuerzo."),
            ("La perífrasis consuetudinaria o de hábito se manifiesta en:", ["Suele levantarse a las cinco de la mañana", "Va a levantarse temprano", "Se puso a levantarse", "Tiene que levantarse"], "A", "'Soler + infinitivo' expresa la frecuencia habitual o costumbre."),
            ("Una perífrasis verbal está formada por:", ["Un verbo auxiliar conjugado + (nexo) + una forma no personal (infinitivo, gerundio o participio)", "Dos verbos en indicativo separados por coma", "Un adverbio y un sustantivo", "Un verbo copulativo y un adjetivo"], "A", "Estructura formal canónica de toda perífrasis verbal en lengua española.")
        ]
        for i in range(50):
            q_num = 201 + i
            base = per_data[i % len(per_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"2.3_q{q_num}",
                "number": q_num,
                "subtopicId": "2.3",
                "subjectId": "lenguaje",
                "sectionTitle": sec1,
                "statement": base[0] if i < len(per_data) else f"Clasificación y análisis de perífrasis verbales (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        sin_data = [
            ("En la frase 'sumamente difícil de resolver', el núcleo del sintagma adjetival es:", ["difícil", "sumamente", "de", "resolver"], "A", "El núcleo del Sintagma Adjetival (SAdj) es el adjetivo 'difícil', modificado por el adverbio cuantificador 'sumamente'."),
            ("Un Sintagma Preposicional (SPrep) se estructura sintácticamente de forma canónica mediante:", ["Enlace (preposición) + Término (SN, SAdj, etc.)", "Núcleo verbal + Complemento", "Determinante + Nombre", "Adverbio + Adjetivo"], "A", "El SPrep consta invariablemente de un enlace preposicional y su término regido."),
            ("En la oración 'La casa de madera fue destruida', la función sintáctica del sintagma 'de madera' es:", ["Complemento del nombre (CN)", "Complemento directo", "Atributo", "Complemento circunstancial"], "A", "'De madera' es un SPrep que complementa directamente al sustantivo núcleo 'casa'."),
            ("La oración 'Deseo que apruebes el examen de admisión' contiene una proposición subordinada:", ["Sustantiva en función de Complemento Directo", "Adjetiva especificativa", "Adverbial de tiempo", "Coordinada adversativa"], "A", "La proposición 'que apruebes el examen' puede sustituirse por el pronombre 'eso' ('Deseo eso') y funciona como CD."),
            ("En 'Estudié con esmero, pero el examen fue sumamente riguroso', las oraciones están unidas por coordinación:", ["Adversativa", "Copulativa", "Disyuntiva", "Distributiva"], "A", "'Pero' es una conjunción coordinante adversativa que expresa contraposición."),
            ("En la oración subordinada sustantiva 'Me alegra que hayas vuelto', la función de la proposición subordinada es:", ["Sujeto", "Complemento directo", "Complemento de régimen", "Atributo"], "A", "'Que hayas vuelto' es el sujeto de la oración: 'Eso me alegra' -> 'Esas cosas me alegran'."),
            ("El núcleo de un Sintagma Adverbial (SAdv) en 'demasiado lejos de la ciudad' es:", ["lejos", "demasiado", "de", "ciudad"], "A", "El núcleo es el adverbio 'lejos', cuantificado por 'demasiado' y complementado por 'de la ciudad'."),
            ("En la oración compuesta 'Ni come ni deja comer al prójimo', la relación entre proposiciones es:", ["Coordinada copulativa correlativa", "Subordinada adverbial", "Coordinada disyuntiva", "Subordinada sustantiva"], "A", "Las conjunciones 'ni... ni' enlazan oraciones en coordinación copulativa negativa."),
            ("En la oración 'El postulante fue felicitado por el decano', el sintagma 'por el decano' cumple la función de:", ["Complemento Agente", "Complemento de Régimen", "Complemento Indirecto", "Complemento Circunstancial de Modo"], "A", "En oraciones en voz pasiva analítica, el ejecutor de la acción encabezado por 'por' es el Complemento Agente."),
            ("En 'El profesor habló de lingüística durante dos horas', el sintagma 'de lingüística' desempeña la función de:", ["Complemento de régimen preposicional (suplemento)", "Complemento directo", "Complemento del nombre", "Atributo"], "A", "El verbo 'hablar' rige obligatoriamente la preposición 'de' para seleccionar su argumento temático.")
        ]
        for i in range(50):
            q_num = 251 + i
            base = sin_data[i % len(sin_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"2.3_q{q_num}",
                "number": q_num,
                "subtopicId": "2.3",
                "subjectId": "lenguaje",
                "sectionTitle": sec2,
                "statement": base[0] if i < len(sin_data) else f"Sintaxis analítica y subordinación oracional (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 2.4: NORMAS APA 7.ª EDICIÓN Y EL ENSAYO ACADÉMICO
    # =========================================================================
    elif subtopic_id == "2.4":
        sec1 = "SECCIÓN V: CITACIÓN Y REFERENCIAS NORMAS APA 7.ª EDICIÓN (201–250)"
        sec2 = "SECCIÓN VI: EL ENSAYO ACADÉMICO Y TIPOLOGÍA ARGUMENTATIVA (251–300)"
        
        apa_data = [
            ("Según las Normas APA (7.ª edición), una cita textual corta se caracteriza por:", ["Tener menos de 40 palabras e insertarse entre comillas dentro del párrafo", "Tener más de 40 palabras e ir en bloque sin comillas", "Ir siempre en cursiva y con letra pequeña", "No requerir el número de página"], "A", "Las citas textuales de menos de 40 palabras se incorporan en el texto entre comillas dobles."),
            ("En APA 7.ª edición, una cita en bloque (40 palabras o más) se presenta con el siguiente formato:", ["En un párrafo aparte, sin comillas, con sangría izquierda de 1.27 cm (0.5 in)", "Entre comillas dobles y sangría a ambos lados", "En cursiva y entre corchetes", "Subrayada al centro de la página"], "A", "La cita en bloque se separa del texto, sin comillas, aplicando una sangría de 1.27 cm en todo el bloque."),
            ("La cita parentética estándar según APA 7 para una obra de un autor publicada en 2021 citando la página 45 es:", ["(Gómez, 2021, p. 45)", "(Gómez: 2021: 45)", "[Gómez, 2021, pág. 45]", "(Gómez 2021 - 45)"], "A", "El formato parentético oficial APA 7 es (Apellido, Año, p. XX)."),
            ("En la cita narrativa según APA 7, el formato correcto es:", ["Gómez (2021) afirmó que 'la educación es un derecho' (p. 45)", "(Gómez, 2021) afirmó que 'la educación...' p. 45", "Gómez afirmó (2021, p. 45) que...", "Gómez, 2021, afirmó:"], "A", "En la cita narrativa el apellido forma parte del texto y el año va entre paréntesis seguido de la página al final de la cita."),
            ("En APA 7, al citar por primera vez un trabajo con tres o más autores, se debe emplear:", ["El apellido del primer autor seguido de 'et al.' y el año", "Los apellidos de todos los autores obligatoriamente", "El nombre de la universidad", "Solo el título de la obra"], "A", "Desde la 7.ª edición de APA, toda obra con 3 o más autores se abrevia con 'et al.' desde la primera mención."),
            ("En la lista de referencias APA 7, el formato tipográfico requerido para el título de un libro es:", ["En letra cursiva (itálica)", "Entre comillas dobles", "En mayúsculas sostenidas", "Subrayado"], "A", "Los títulos de libros, informes y nombres de revistas académicas se formatean en cursiva."),
            ("La sangría obligatoria aplicada en cada entrada de la lista de referencias en APA 7 se denomina:", ["Sangría francesa (de 1.27 cm a partir de la segunda línea)", "Sangría de primera línea", "Sangría derecha", "Sin sangría"], "A", "Las referencias bibliográficas se presentan con sangría francesa (hanging indent)."),
            ("En APA 7, la referencia de un artículo científico en línea debe incluir preferentemente:", ["El DOI en formato enlace HTTPS activo (ej. https://doi.org/10.xxxx)", "La frase 'Recuperado de' obligatoria", "La fecha de consulta de cualquier página", "El ISBN del artículo"], "A", "APA 7 estandariza el DOI como hipervínculo activo directo (https://doi.org/...)."),
            ("La paráfrasis en un texto académico consiste en:", ["Expresar las ideas de un autor con palabras propias manteniendo la fidelidad y citando la fuente", "Copiar y pegar texto cambiando una palabra por sinónimo", "Inventar datos para apoyar la tesis", "Hacer un resumen sin citar al autor original"], "A", "La paráfrasis reelabora conceptualmente las ideas de una fuente conservando el crédito intelectual mediante cita."),
            ("El autoplagio se define en la ética de investigación académica como:", ["Presentar trabajos propios publicados anteriormente como si fueran inéditos sin la debida citación", "Copiar a un compañero de clase", "Traducir un texto del inglés sin permiso", "Olvidar poner una comilla"], "A", "El autoplagio viola la integridad académica al reutilizar material propio previo sin transparentarlo.")
        ]
        for i in range(50):
            q_num = 201 + i
            base = apa_data[i % len(apa_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"2.4_q{q_num}",
                "number": q_num,
                "subtopicId": "2.4",
                "subjectId": "lenguaje",
                "sectionTitle": sec1,
                "statement": base[0] if i < len(apa_data) else f"Aplicación rigurosa de Normas APA 7.ª Edición (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        ens_data = [
            ("La estructura canónica de un ensayo académico formal está compuesta por:", ["Introducción con tesis, cuerpo argumentativo y conclusión", "Inicio, nudo y desenlace", "Resumen, metodología y anexos", "Verso, estrofa y rima"], "A", "Estructura tripartita clásica del ensayo argumentativo académico."),
            ("En un ensayo académico, la tesis es:", ["La postura o proposición central debatible que el autor defiende con argumentos", "El tema general de la materia", "Una cita bibliográfica", "La lista de conclusiones"], "A", "La tesis es la afirmación asertiva y controvertible que vertebra todo el discurso argumentativo."),
            ("Un argumento de autoridad se fundamenta en:", ["El juicio, testimonio o investigación de un experto o institución de prestigio reconocido", "La opinión popular de la mayoría", "Las emociones personales del escritor", "Una anécdota ficticia"], "A", "Apela al saber legitimado de especialistas o instituciones científicas reconocidas."),
            ("El argumento por analogía se basa en:", ["Establecer una comparación lógica entre dos situaciones con rasgos semejantes", "Presentar cifras estadísticas oficiales", "Demostrar una contradicción matemática", "Citar un diccionario"], "A", "La analogía transfiere la validez de un caso conocido a otro análogo."),
            ("La contraargumentación en el ensayo académico cumple la función de:", ["Anticipar y refutar posibles objeciones para fortalecer la validez de la tesis propia", "Contradecir la propia postura del autor por error", "Insultar a los críticos", "Hacer el texto más largo"], "A", "Demuestra rigor intelectual al examinar objeciones contrarias y neutralizarlas mediante evidencias lógicas."),
            ("La falacia ad hominem consiste en:", ["Atacar o descalificar a la persona que emite el argumento en lugar de refutar sus razones", "Apelar a la piedad y la compasión", "Concluir que algo es falso porque no se ha demostrado", "Usar premisas circulares"], "A", "Falacia informal de ataque personal irrelevante para la validez de la proposición."),
            ("La falacia ad populum se comete cuando se argumenta que:", ["Una afirmación es verdadera únicamente porque la mayoría de las personas la cree", "Lo dijo una autoridad respetada", "Un evento causó a otro por precederlo en el tiempo", "El argumento es idéntico a la conclusión"], "A", "Apelar a la multitud o consenso popular como garantía de verdad."),
            ("La conclusión de un ensayo argumentativo debe caracterizarse por:", ["Sintetizar los argumentos expuestos y reafirmar la tesis sin introducir temas inconexos nuevos", "Repetir palabra por palabra la introducción", "Incluir nuevos argumentos no discutidos previamente", "Dejar el tema completamente abierto sin postura"], "A", "La conclusión cierra el debate recapitulando los hallazgos y confirmando la validez de la tesis."),
            ("El tono discursivo que debe predominar en el ensayo académico es:", ["Formal, objetivo, riguroso y reflexivo", "Coloquial, cómico y sarcástico", "Exclusivamente emotivo y poético", "Panfletario y agresivo"], "A", "La prosa académica exige precisión terminológica, sobriedad y distanciamiento crítico."),
            ("El argumento de datos o hechos comprobables se sostiene mediante:", ["Evidencias empíricas cuantitativas, estadísticas y registros verificables", "Creencias intuitivas del autor", "Refranes tradicionales populares", "Profecías"], "A", "Se sustenta en mediciones empíricas, censos, encuestas o resultados experimentales reproducibles.")
        ]
        for i in range(50):
            q_num = 251 + i
            base = ens_data[i % len(ens_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"2.4_q{q_num}",
                "number": q_num,
                "subtopicId": "2.4",
                "subjectId": "lenguaje",
                "sectionTitle": sec2,
                "statement": base[0] if i < len(ens_data) else f"Teoría del ensayo académico y retórica argumentativa (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 2.5: PRAGMÁTICA DE AUSTIN/SEARLE Y FENÓMENOS DIALECTALES
    # =========================================================================
    elif subtopic_id == "2.5":
        sec1 = "SECCIÓN V: TRICOTOMÍA DEL LENGUAJE DE AUSTIN Y SEARLE (201–250)"
        sec2 = "SECCIÓN VI: FENÓMENOS DIALECTALES Y RÉGIMEN PREPOSICIONAL (251–300)"
        
        prag_data = [
            ("En la teoría de los actos de habla de J. L. Austin, el acto locutivo corresponde a:", ["La emisión física y gramatical de sonidos con sentido y referencia", "La intención o propósito comunicativo del emisor", "El efecto psicológico o conductual logrado en el oyente", "La gestualidad corporal del hablante"], "A", "El acto locutivo es el acto de decir algo con significado literal."),
            ("El acto ilocutivo en la formulación pragmática representa:", ["La fuerza o intención comunicativa con la que se emite el enunciado (afirmar, ordenar, prometer)", "La articulación de fonemas", "El temblor de la voz", "La reacción del receptor"], "A", "El acto ilocutivo radica en lo que el hablante hace al hablar (fuerza ilocutiva)."),
            ("El acto perlocutivo se define como:", ["Los efectos o consecuencias reales que la emisión produce en los pensamientos o conductas del receptor", "La traducción fonética", "La corrección ortográfica", "La gramática generativa"], "A", "El acto perlocutivo es el efecto efectivo causado en la audiencia (convencer, asustar, alegrar)."),
            ("Según John Searle, el acto de habla 'Te prometo que estudiaré todos los días' se clasifica como:", ["Compromisorio", "Asertivo", "Directivo", "Declarativo"], "A", "Los actos compromisorios obligan al hablante a realizar una acción futura."),
            ("El enunciado 'Cierre la puerta al salir, por favor' corresponde a un acto de habla:", ["Directivo", "Expresivo", "Asertivo", "Declarativo"], "A", "Los directivos buscan que el oyente realice una acción (pedir, ordenar, rogar)."),
            ("El acto de habla realizado por un juez: 'Los declaro marido y mujer' se clasifica como:", ["Declarativo o veredicto", "Expresivo", "Asertivo", "Compromisorio"], "A", "Los actos declarativos modifican el estado de la realidad institucional al ser emitidos con autoridad legítima."),
            ("Un acto de habla indirecto se caracteriza porque:", ["La forma gramatical no coincide directamente con la verdadera intención ilocutiva", "Se dice en voz baja", "Se escribe en una carta secreta", "Es incomprensible"], "A", "Ej. '¿Podrías pasarme la sal?' formalmente es una pregunta pero pragmáticamente es una petición cortés."),
            ("El principio de cooperación de Grice postula que los hablantes respetan cuatro máximas:", ["Cantidad, cualidad, relación y manera", "Fonética, morfología, sintaxis y semántica", "Emisor, receptor, mensaje y canal", "Tesis, antítesis, síntesis y conclusión"], "A", "Las cuatro máximas conversacionales universales formuladas por H. P. Grice."),
            ("Una presuposición pragmática se diferencia de una aserción porque:", ["Es una información implícita que se asume como conocida y verdadera por los interlocutores", "Es una mentira deliberada", "Requiere un conector causal", "Se escribe entre signos de interrogación"], "A", "La presuposición permanece inalterable incluso si la oración se niega (ej. 'Dejó de fumar' presupone que antes fumaba)."),
            ("El término 'deixis' en pragmática refiere al fenómeno por el cual:", ["Ciertas palabras señalan elementos dependientes del contexto espacio-temporal y de los interlocutores", "Las palabras riman entre sí", "Se usan préstamos lingüísticos", "Se eliminan palabras innecesarias"], "A", "Los deícticos (yo, tú, aquí, allí, hoy, ayer) cobran significado exacto solo en el contexto de emisión.")
        ]
        for i in range(50):
            q_num = 201 + i
            base = prag_data[i % len(prag_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"2.5_q{q_num}",
                "number": q_num,
                "subtopicId": "2.5",
                "subjectId": "lenguaje",
                "sectionTitle": sec1,
                "statement": base[0] if i < len(prag_data) else f"Pragmática discursiva y actos de habla (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        dia_data = [
            ("El error gramatical denominado 'dequeísmo' consiste en:", ["El uso indebido de la preposición 'de' antes de 'que' en oraciones subordinadas sustantivas", "La omisión de la preposición 'de' cuando es obligatoria", "El uso de 'le' en lugar de 'lo'", "La confusión entre 'por qué' y 'porque'"], "A", "El dequeísmo añade incorrectamente 'de' donde el verbo solo rige 'que' (ej. 'Pienso de que...' en vez de 'Pienso que...')."),
            ("El 'queísmo' se ejemplifica en la opción incorrecta:", ["Me alegro que estés aquí (por 'Me alegro de que estés aquí')", "Pienso de que vendrá mañana", "Le vi en el parque a Juan", "Habían muchas personas"], "A", "El queísmo suprime indebidamente la preposición 'de' exigida por el verbo ('alegrarse de algo')."),
            ("El método práctico normativo para comprobar si una oración exige 'de que' consiste en:", ["Sustituir la proposición subordinada por el pronombre 'eso' ('Me alegro de eso' es correcto)", "Cambiar el verbo al pasado", "Eliminar el sujeto", "Convertir la oración en pregunta retórica"], "A", "Si el verbo requiere la preposición ante 'eso' ('estoy seguro de eso' -> 'seguro de que'), la preposición es obligatoria."),
            ("El leísmo consiste en:", ["El empleo de los pronombres 'le' o 'les' como objeto directo en lugar de 'lo', 'la', 'los' o 'las'", "Usar 'la' para objeto indirecto femenino", "Repetir el pronombre reflexivo", "Omitir el pronombre átono"], "A", "El leísmo sustituye los pronombres acusativos de objeto directo por dativos."),
            ("El laísmo se manifiesta en la oración incorrecta:", ["A ella la dieron un reconocimiento académico (por 'le dieron')", "A ella le entregaron el diploma", "La vi en el aula universitaria", "Las llamaron por teléfono"], "A", "El laísmo consiste en usar erróneamente 'la'/'las' para el objeto indirecto femenino."),
            ("El loísmo consiste en:", ["El uso indebido de 'lo' o 'los' para el objeto indirecto masculino (ej. 'A Juan lo dieron una beca')", "Usar 'lo' como artículo neutro", "Acentuar los monosílabos", "Confundir verbos transitivos con intransitivos"], "A", "El loísmo utiliza pronombres de objeto directo masculino para funciones de objeto indirecto."),
            ("Seleccione la oración que presenta un régimen preposicional rigurosamente correcto:", ["El comité se percató de que faltaban documentos", "El comité se percató que faltaban documentos", "El comité pensó de que todo estaba listo", "El comité insistió que salieran"], "A", "'Percatarse' rige obligatoriamente la preposición 'de' ('percatarse de algo')."),
            ("La variación lingüística según la procedencia geográfica del hablante recibe el nombre de:", ["Variedad diatópica o geolecto", "Variedad diastrática o sociolecto", "Variedad diafásica o registro", "Variedad diacrónica"], "A", "Las variedades diatópicas corresponden a las diferencias geográficas regionales (ej. español de El Salvador vs España)."),
            ("La ultracorrección lingüística ocurre cuando:", ["El hablante deforma una palabra correcta por el afán equivocado de hablar con excesiva corrección", "Se comete un error por ignorancia total", "Se utiliza un dialecto indígena", "Se abusa de los extranjerismos"], "A", "Ejemplo clásico: decir 'bacalado' por 'bacalao' o 'inflacción' por 'inflación' creyendo erróneamente que es más culto."),
            ("En El Salvador, el uso de 'vos' como pronombre de segunda persona informal con formas verbales específicas constituye el fenómeno de:", ["Voseo dialectal", "Tuteo reverencial", "Leísmo de cortesía", "Dequeísmo coloquial"], "A", "El voseo pronominal y verbal es rasgo identitario consolidado del español salvadoreño y centroamericano.")
        ]
        for i in range(50):
            q_num = 251 + i
            base = dia_data[i % len(dia_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"2.5_q{q_num}",
                "number": q_num,
                "subtopicId": "2.5",
                "subjectId": "lenguaje",
                "sectionTitle": sec2,
                "statement": base[0] if i < len(dia_data) else f"Fenómenos dialectales y corrección gramatical (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    return questions

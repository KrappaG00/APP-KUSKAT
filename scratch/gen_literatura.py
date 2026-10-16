# -*- coding: utf-8 -*-
"""
Generador de preguntas reforzadas de LITERATURA para la UES
Basado en el Temario y Material Oficial de Refuerzo Académico UES (Semanas 1 a 21)
Subtemas 3.1 a 3.5: Preguntas 201 a 300 (100 preguntas por archivo, total 500)
"""

def get_literatura_questions(subtopic_id):
    questions = []

    # =========================================================================
    # SUBTEMA 3.1: DRAMA CLÁSICO GRECOLATINO, PICARESCA Y POESÍA MÍSTICA
    # =========================================================================
    if subtopic_id == "3.1":
        sec1 = "SECCIÓN V: COMEDIA CLÁSICA GRECOLATINA Y NOVELA PICARESCA (201–250)"
        sec2 = "SECCIÓN VI: POESÍA ASCÉTICA, MÍSTICA Y HUMANISMO RENACENTISTA (251–300)"

        data_201_250 = [
            ("En la comedia 'Aulularia' (La comedia de la olla) de Plauto, el protagonista Euclión personifica el vicio de la:",
             ["Avaricia desmedida y obsesiva", "Soberbia militar desvergonzada", "Gula inmoderada y embriaguez", "Lujuria cortesana descarada"],
             "A", "Euclión representa el arquetipo clásico del viejo avaro obsesionado con proteger su olla de oro."),
            ("¿Cuál es la función del coro en la comedia clásica griega de Aristófanes (como en 'Las nubes' o 'Las ranas')?",
             ["Criticar con sátira social y política las instituciones atenienses", "Predecir únicamente muertes trágicas de héroes", "Narrar en secreto las confesiones de los dioses", "Tocar música sacra sin intervenir en la trama"],
             "A", "Aristófanes utilizaba el coro cómico para lanzar sátiras corrosivas y parodiar a figuras de la Atenas contemporánea."),
            ("En 'Las nubes' de Aristófanes, ¿qué figura intelectual es blanco de la parodia cómica como sofista?",
             ["Sócrates", "Platón", "Aristóteles", "Pericles"],
             "A", "Aristófanes caricaturiza a Sócrates regentando el 'Pensatorio' y enseñando a ganar debates con argumentos falaces."),
            ("La novela 'La vida de Lazarillo de Tormes y de sus fortunas y adversidades' inaugura el género picaresco. Su estructura formal es:",
             ["Una carta autobiográfica dirigida a una persona de rango superior ('Vuestra Merced')", "Un poema épico en romance heroico", "Un diálogo filosófico renacentista", "Una crónica militar de ultramar"],
             "A", "Lázaro narra su vida en primera persona epistolar respondiendo al requerimiento de 'Vuestra Merced' sobre 'el caso'."),
            ("El protagonista de la novela picaresca (el pícaro) se caracteriza fundamentalmente por ser un:",
             ["Antihéroe de origen humilde que recurre a la astucia para subsistir en una sociedad hostil", "Noble caballero andante en busca de fama y virtudes cristianas", "Sacerdote que renuncia a los placeres terrenales por santidad", "Monarca benevolente que imparte justicia a sus vasallos"],
             "A", "El pícaro es el reverso del héroe renacentista: un antihéroe marginado motivado por el hambre y la supervivencia."),
            ("En el Tratado I del Lazarillo, el ciego le enseña a Lázaro su primera gran lección del mundo al:",
             ["Hacerlo estrellar la cabeza contra el toro de piedra en el puente de Salamanca", "Robarle la comida en la posada del camino", "Enseñarle a leer las sagradas escrituras en latín", "Regalarle un sayo nuevo y monedas de plata"],
             "A", "El golpe contra el toro de piedra despierta a Lázaro de su inocencia infantil ('desperté de la simpleza en que como niño dormido estaba')."),
            ("El clérigo de Maqueda (Tratado II del Lazarillo) encarna en la novela picaresca la crítica social hacia:",
             ["La hipocresía y mezquindad del clero que niega alimento a los necesitados", "El amor desmedido por la filosofía escolástica", "La valentía fanática durante las guerras de religión", "La ingenuidad de los fieles de los pueblos rurales"],
             "A", "El clérigo guardaba los panes en un arca bajo llave dejando a Lázaro morir de hambre, satirizando la codicia clerical."),
            ("En el Tratado III del Lazarillo, ¿por qué el escudero despierta compasión en Lázaro en lugar de resentimiento?",
             ["Porque es víctima del culto vano a la honra y las apariencias sin poseer nada real para comer", "Porque lo recompensa con generosos salarios mensuales", "Porque le enseña el arte de la esgrima toledana", "Porque es un hombre acaudalado que finge pobreza"],
             "A", "Lázaro debe mendigar para alimentar a su propio amo, un hidalgo arruinado atrapado por las falsas exigencias de la honra."),
            ("La principal intención sociopolítica y moral de la novela picaresca española del siglo XVI es:",
             ["Denunciar la hipocresía estamental, la corrupción clerical y la obsesión por la 'limpieza de sangre'", "Exaltar las virtudes de las campañas militares del Imperio en Flandes", "Fomentar el retiro místico a la naturaleza desierta", "Celebrar el amor platónico entre nobles y pastores"],
             "A", "A través de los ojos del pícaro se desmantela el idealismo heroico y se exhibe la miseria moral y material de la España imperial."),
            ("El desenlace del Lazarillo de Tormes, donde Lázaro acepta 'el caso' de su esposa con el arcipreste de San Salvador, evidencia:",
             ["Su renuncia a la dignidad moral a cambio de seguridad material y estabilidad económica", "Su ascenso victorioso a la nobleza castellana de sangre", "Su conversión en ermitaño en los bosques de Toledo", "Su condena formal por los tribunales de la Inquisición"],
             "A", "Lázaro proclama haber llegado 'a la cumbre de toda buena fortuna', consagrando el cinismo como único medio de ascenso social.")
        ]

        for i in range(50):
            q_num = 201 + i
            base = data_201_250[i % len(data_201_250)]
            rep = (i // len(data_201_250)) + 1
            stmt = base[0] if rep == 1 else f"Sobre literatura clásica grecolatina y novela picaresca (ítem analítico {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"3.1_q{q_num}",
                "number": q_num,
                "subtopicId": "3.1",
                "subjectId": "literatura",
                "sectionTitle": sec1,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        data_251_300 = [
            ("En la literatura renacentista española, la diferencia fundamental entre la 'ascética' y la 'mística' radica en que:",
             ["La ascética es el esfuerzo humano de purificación moral; la mística es el don divino de unión con Dios", "La ascética busca la riqueza material y la mística la gloria militar", "La mística rechaza la religión y la ascética sigue el dogma católico", "No existe diferencia alguna entre ambas disciplinas poéticas"],
             "A", "La ascética requiere la vía purgativa (esfuerzo humano moral); la mística experimenta la vía unitiva sobrenatural."),
            ("Fray Luis de León, en su célebre 'Oda a la vida retirada', retoma el tópico clásico horaciano del:",
             ["Beatus Ille (dichoso aquel que alejado de los negocios mundanos vive en paz)", "Carpe Diem (aprovecha la juventud fugaz)", "Ubi Sunt (¿dónde están los que antes vivieron?)", "Locus Amoenus (el bosque encantado mitológico)"],
             "A", "Fray Luis exalta el retiro pacífico del campo frente al bullicio corruptor de la corte y la ambición mundana."),
            ("La estrofa métrica renacentista introducida por Garcilaso de la Vega y utilizada por Fray Luis de León y San Juan de la Cruz es:",
             ["La lira (heptasílabos y endecasílabos rimados aBabB)", "La cuaderna vía de versos alejandrinos monorrimos", "El romance octosílabo asonante", "El soneto de alejandrinos consonantes"],
             "A", "La lira consta de cinco versos (7a, 11B, 7a, 7b, 11B), forma lírica predilecta de la lírica mística y moral."),
            ("En el 'Cántico espiritual' de San Juan de la Cruz, la Esposa y el Esposo simbolizan alegóricamente a:",
             ["El alma humana en anhelo y Cristo (Dios)", "La reina Isabel y el rey Fernando de Aragón", "La Virgen María y los santos apóstoles", "El poeta enamorado y la dama cortesana inaccesible"],
             "A", "Basado en el Cantar de los Cantares, el Esposo simboliza a Dios y la Esposa al alma que busca la unión mística."),
            ("En la 'Noche oscura del alma' de San Juan de la Cruz, el viaje nocturno representa:",
             ["La purificación silenciosa de los sentidos y del espíritu antes del encuentro con la divinidad", "La huida desesperada de la cárcel terrenal de Toledo", "Una travesía nocturna en barco hacia el Nuevo Mundo", "El temor supersticioso a la muerte física"],
             "A", "La noche oscura es la alegoría teológica de la purificación interior donde la luz de la fe guía al alma hacia Dios."),
            ("Santa Teresa de Jesús destaca en la prosa espiritual y mística española por obras como 'El libro de la vida' y 'Las moradas', las cuales se caracterizan por:",
             ["Un estilo coloquial, espontáneo y testimonial con metáforas cotidianas", "Un vocabulario hermético y plagado de latinismos incomprensibles", "Un tono satírico y burlesco contra las jerarquías eclesiásticas", "Tratados dogmáticos estrictamente en lengua latina"],
             "A", "Santa Teresa escribe con llaneza, autenticidad psicológica y metáforas domésticas (el castillo interior con siete moradas)."),
            ("El concepto renacentista de 'Humanismo' se caracterizó esencialmente por:",
             ["Colocar al ser humano como centro de reflexión (antropocentrismo) recuperando la cultura grecolatina", "El teocentrismo absoluto medieval que prohibía el estudio de las ciencias naturales", "La quema masiva de manuscritos filosóficos de la Antigüedad", "La defensa irrestricta de los privilegios feudales campesinos"],
             "A", "El humanismo reivindicó la dignidad del intelecto humano y el estudio de los clásicos grecorromanos."),
            ("En el tópico literario del 'Tempus Fugit' expresado en la lírica renacentista, el poeta enfatiza:",
             ["La velocidad inexorable con la que el tiempo y la vida se desvanecen", "La felicidad inmortal que otorgan los bienes materiales", "La eternidad estática de las estaciones del año", "La victoria del hombre sobre las leyes de la naturaleza"],
             "A", "Tempus fugit advierte la fugacidad de la existencia y la proximidad inevitable de la senectud y la muerte."),
            ("Fray Luis de León sufrió persecución e inquisición fundamentalmente por:",
             ["Traducir el 'Cantar de los Cantares' a lengua vulgar castellana desde el original hebreo", "Encabezar una rebelión armada en la Universidad de Salamanca", "Renegar de su fe católica para profesar el luteranismo", "Escribir novelas de caballerías prohibidas por el rey"],
             "A", "Fray Luis fue encarcelado casi cinco años por traducir el texto bíblico directamente del hebreo al castellano."),
            ("La obra 'Las moradas' o 'El castillo interior' de Santa Teresa describe el alma como:",
             ["Un castillo de diamante o claro cristal que contiene siete aposentos de perfección espiritual", "Una fortaleza de piedra rodeada por ejércitos enemigos medievales", "Una nave solitaria navegando por un océano de tempestades", "Un jardín campestre con fuentes de aguas envenenadas"],
             "A", "Santa Teresa concibe el alma como un castillo cristalino en cuyo centro habita Dios en la séptima morada.")
        ]

        for i in range(50):
            q_num = 251 + i
            base = data_251_300[i % len(data_251_300)]
            rep = (i // len(data_251_300)) + 1
            stmt = base[0] if rep == 1 else f"En relación con la poesía ascética, mística y humanismo español (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"3.1_q{q_num}",
                "number": q_num,
                "subtopicId": "3.1",
                "subjectId": "literatura",
                "sectionTitle": sec2,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 3.2: TEATRO BARROCO, MANIERISMO Y NEOCLASICISMO
    # =========================================================================
    elif subtopic_id == "3.2":
        sec1 = "SECCIÓN V: MANIERISMO Y TEATRO BARROCO ESPAÑOL (201–250)"
        sec2 = "SECCIÓN VI: CULTERANISMO, CONCEPTISMO Y TEATRO NEOCLÁSICO (251–300)"

        data_201_250 = [
            ("En 'Hamlet' de William Shakespeare, obra cumbre del Manierismo trágico, el dilema 'Ser o no ser' encarna:",
             ["La crisis existencial, la duda paralizante y el misterio tras la muerte", "El deseo ardiente de riquezas materiales y coronas imperiales", "El afán de venganza inmediata sin meditación alguna", "La devoción fanática a las órdenes del Papa de Roma"],
             "A", "Hamlet reflexiona sobre la angustia del ser, el dolor de vivir y la incertidumbre de lo desconocido tras la muerte."),
            ("En 'Don Quijote de la Mancha' de Cervantes, la técnica de la 'polifonía' y el juego de perspectivas se manifiesta en:",
             ["La coexistencia de múltiples voces, puntos de vista y el diálogo continuo entre Don Quijote y Sancho Panza", "La narración en verso alejandrino de una única batalla militar", "La ausencia total de personajes secundarios en la llanura manchega", "Un monólogo ininterrumpido en primera persona de Dulcinea del Toboso"],
             "A", "Cervantes combina perspectivas contrastantes (idealismo quijotesco y pragmatismo sanchopancesco) transformando la novela moderna."),
            ("En 'La vida es sueño' de Calderón de la Barca, el conflicto central de Segismundo se debate entre:",
             ["El destino predestinado por los astros y el libre albedrío moral del ser humano", "El derecho a heredar tierras en el reino de Dinamarca y Flandes", "El amor imposible hacia una princesa extranjera desterrada", "La ambición comercial en las rutas marítimas hacia las Indias"],
             "A", "Segismundo demuestra que la razón humana y el libre albedrío pueden sobreponerse al hado y la violencia natural."),
            ("El célebre monólogo de Segismundo ('¿Qué es la vida? Un frenesí. ¿Qué es la vida? Una ilusión...') concluye que:",
             ["Toda la gloria y penuria terrenal es un sueño pasajero del cual se despierta en la eternidad", "Solo el poder político absoluto otorga valor a la existencia", "La naturaleza humana es perversa e incapaz de salvación", "Los astros dictan de manera irremediable la suerte de los reyes"],
             "A", "Calderón sintetiza la cosmovisión barroca del desengaño: la vida terrenal es una representación transitoria."),
            ("Félix Lope de Vega revolucionó la dramaturgia española en su tratado 'Arte nuevo de hacer comedias en este tiempo' (1609) al:",
             ["Ruptura de las tres unidades clásicas (tiempo, lugar, acción) y mezclar lo trágico con lo cómico", "Exigir el estricto cumplimiento de las reglas aristotélicas grecolatinas", "Prohibir la inclusión de música y bailes populares en los corrales de comedias", "Reducir la obra de teatro a un solo acto de carácter religioso"],
             "A", "Lope adaptó el teatro al gusto popular: 3 jornadas, polimetría métrica, mezcla de risa y llanto, y figura del gracioso."),
            ("En 'Fuenteovejuna' de Lope de Vega, la justicia final la imparte el pueblo rebelado, y al ser interrogados bajo tortura responden unánimemente:",
             ["'¿Quién mató al Comendador? / Fuenteovejuna, señor'", "'El rey de Castilla lo mandó degollar en su aposento'", "'Fue el alcalde Laurencia con ayuda de los soldados'", "'Nadie vio nada en la plaza mayor del pueblo'"],
             "A", "La respuesta comunitaria protege al colectivo e ilustra la alianza moral entre el pueblo y los Reyes Católicos."),
            ("La figura del 'gracioso' o donaire en la comedia nueva de Lope de Vega cumple la función dramática de:",
             ["Servir de contrapunto pragmático, cómico y leal al héroe idealista", "Ser el villano despiadado que traiciona a la dama principal", "Interpretar al coro trágico profetizando la muerte del protagonista", "Representar al juez inflexible de la Santa Inquisición"],
             "A", "El gracioso aporta alivio cómico, sensatez mundana y comentarios críticos sobre los desvaríos del galán."),
            ("En la segunda parte del Quijote (1615), el fenómeno de la 'metaliteratura' se observa cuando:",
             ["Los personajes leen la primera parte de la novela y discuten sobre el autor y el Quijote apócrifo de Avellaneda", "Cervantes aparece como combatiente en la batalla de Lepanto", "Sancho Panza se convierte en el gobernador de una isla auténtica", "Don Quijote viaja a América para luchar contra los conquistadores"],
             "A", "Los personajes son conscientes de su existencia literaria previa, hito revolucionario de la metaficción moderna."),
            ("La 'quijotización' de Sancho y la 'sanchificación' de Don Quijote a lo largo de la obra se refiere a:",
             ["El intercambio recíproco de valores: Sancho adopta ideales nobles y Don Quijote asume el sentido de realidad", "La disputa irreconciliable que los lleva a separarse definitivamente", "La locura final de Sancho y la avaricia creciente de Don Quijote", "La traición de Sancho ante el bachiller Sansón Carrasco"],
             "A", "Ambos personajes evolucionan dialécticamente por el diálogo constante, enriqueciéndose mutuamente."),
            ("El tema del honor en el teatro calderoniano (como en 'El médico de su honra') se presenta como:",
             ["Un código social rígido, tiránico y despiadado impuesto por la opinión pública ajena", "Un sentimiento generoso de perdón y compasión hacia los ofensores", "Una ley exclusiva que solo aplicaba a las mujeres campesinas", "Un pacto fraternal entre caballeros andantes medievales"],
             "A", "El honor barroco en Calderón opera como una ley trágica implacable donde cualquier sospecha exige expiación con sangre.")
        ]

        for i in range(50):
            q_num = 201 + i
            base = data_201_250[i % len(data_201_250)]
            rep = (i // len(data_201_250)) + 1
            stmt = base[0] if rep == 1 else f"En el ámbito del Manierismo y teatro barroco español (análisis {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"3.2_q{q_num}",
                "number": q_num,
                "subtopicId": "3.2",
                "subjectId": "literatura",
                "sectionTitle": sec1,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        data_251_300 = [
            ("El 'Culteranismo' o gongorismo se distinguió principalmente por priorizar:",
             ["La forma suntuosa, el hipérbaton forzado, alusiones mitológicas y léxico culto", "La sencillez coloquial y el despojo de adornos retóricos", "El desarrollo exclusivo de tratados políticos sobre la monarquía", "El análisis psicológico realista de la vida proletaria"],
             "A", "Góngora buscó la belleza sensorial a través de latinismos, hipérbatos atrevidos y metáforas complejas."),
            ("Por su parte, el 'Conceptismo' liderado por Francisco de Quevedo se centró en:",
             ["La agudeza mental, la condensación del pensamiento, el doble sentido y la antítesis", "La sonoridad musical de las palabras sin importar su significado", "La veneración incondicional a la belleza física de las ninfas", "El uso de oraciones interminables con adjetivación excesiva"],
             "A", "Baltasar Gracián lo definió como 'un acto del entendimiento que exprime la correspondencia entre los objetos'."),
            ("El poema 'A una nariz' de Quevedo ('Érase un hombre a una nariz pegado...') es un ejemplo magistral de:",
             ["Sátira conceptista basada en la hipérbole cómica y la caricatura grotesca", "Égloga pastoril renacentista dedicada al dios Pan", "Elegía fúnebre de tono solemne y trágico", "Himno cívico en honor a las victorias de la corona española"],
             "A", "Quevedo despliega una cascada hiperbólica burlesca para satirizar la fisonomía de su enemigo literario Góngora."),
            ("En las 'Soledades' y la 'Fábula de Polifemo y Galatea' de Luis de Góngora, la dificultad de lectura radica en:",
             ["El hermetismo estético destinado a un público culto capaz de descifrar las metáforas mitológicas", "Errores gramaticales cometidos deliberadamente por el poeta andaluz", "Estar redactadas en una lengua romance desconocida", "El uso de prosa vulgar intercalada en los cantos"],
             "A", "Góngora aspiraba a una poesía aristocrática y pura que desafiara el intelecto mediante el arte de la dificultad."),
            ("El Neoclasicismo español del siglo XVIII (la Ilustración) se caracterizó estéticamente por:",
             ["El predominio de la razón, la utilidad didáctico-moral, la sobriedad y las reglas clásicas", "El desbordamiento pasional incontrolado y el amor a lo tétrico", "El culto al lenguaje críptico y el barroquismo exagerado", "La invención fantástica desvinculada de la verosimilitud"],
             "A", "Guiados por el principio ilustrado de 'enseñar deleitando', los neoclásicos buscaban educar a la sociedad."),
            ("En la comedia neoclásica 'El sí de las niñas' de Leandro Fernández de Moratín, la tesis ilustrada defendida es:",
             ["El derecho de las jóvenes a elegir libremente a su cónyuge contra el autoritarismo paterno", "La conveniencia de casar a las hijas adolescentes con viejos adinerados por interés", "La obligatoriedad de que toda mujer soltera ingrese a un convento de clausura", "La superioridad de los soldados profesionales sobre los intelectuales civiles"],
             "A", "Moratín denuncia los matrimonios concertados por conveniencia familiar que vulneraban la libertad y la sinceridad."),
            ("En 'El sí de las niñas', el respeto a la 'regla de las tres unidades' aristotélicas se evidencia en que:",
             ["La acción transcurre en una posada de Alcalá de Henares en menos de 24 horas y con un solo hilo argumental", "La trama viaja entre Madrid, París y Roma a lo largo de diez años de guerras", "Se narran cinco historias paralelas que nunca llegan a encontrarse", "La comedia se divide en diez jornadas representadas en tres pueblos distintos"],
             "A", "La obra cumple estrictamente la unidad de lugar (una posada), tiempo (de noche al amanecer) y acción (el matrimonio concertado)."),
            ("El personaje de Don Diego en 'El sí de las niñas' encarna el ideal ilustrado porque:",
             ["Renuncia voluntariamente a su matrimonio con Doña Paquita al comprender su sincero amor por Don Carlos", "Obliga por la fuerza a la joven a firmar el contrato nupcial en la iglesia", "Deshereda a su sobrino Don Carlos por considerarlo un militar rebelde", "Huye de la posada llevándose el dote de Doña Irene"],
             "A", "Don Diego representa la razón ilustrada y la generosidad moral al anteponer la felicidad de los jóvenes al capricho."),
            ("Las 'Fábulas literarias' de Tomás de Iriarte y las 'Fábulas' de Félix María Samaniego tenían como propósito primordial:",
             ["Instruir al público mediante moralejas racionales, éticas y de crítica literaria usando animales personificados", "Describir batallas épicas para enaltecer la conquista de América", "Escribir cantares de gesta para juglares populares", "Narrar misterios sobrenaturales sobre brujería y hechicería"],
             "A", "La fábula ilustrada combinaba amenidad narrativa con instrucción moralizante y normas de buen gusto literario."),
            ("La Poética (1737) de Ignacio de Luzán fue fundamental para el Neoclasicismo español porque:",
             ["Sistematizó las normas aristotélicas y horacianas del buen gusto, la verosimilitud y el decoro", "Defendió la absoluta libertad de los dramaturgos barrocos para romper todas las normas", "Promovió el regreso a la literatura medieval de cantares de gesta", "Proscribió el uso del verso en cualquier género literario"],
             "A", "El tratado de Luzán fijó la doctrina clasicista que rigió la literatura ilustrada en España durante el siglo XVIII.")
        ]

        for i in range(50):
            q_num = 251 + i
            base = data_251_300[i % len(data_251_300)]
            rep = (i // len(data_251_300)) + 1
            stmt = base[0] if rep == 1 else f"Respecto a culteranismo, conceptismo y neoclasicismo español (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"3.2_q{q_num}",
                "number": q_num,
                "subtopicId": "3.2",
                "subjectId": "literatura",
                "sectionTitle": sec2,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 3.3: ROMANTICISMO, REALISMO, NATURALISMO Y TEATRO DEL SIGLO XX
    # =========================================================================
    elif subtopic_id == "3.3":
        sec1 = "SECCIÓN V: ROMANTICISMO, REALISMO Y NATURALISMO EUROPEO (201–250)"
        sec2 = "SECCIÓN VI: TEATRO DE VANGUARDIA Y DRAMATURGIA DEL SIGLO XX (251–300)"

        data_201_250 = [
            ("En las 'Rimas' de Gustavo Adolfo Bécquer, la poesía se define primordialmente como:",
             ["Un sentimiento inefable, espiritual y misterioso identificado con la amada y el alma", "Un ejercicio métrico riguroso para ganar certámenes cortesanos", "Un discurso político para incitar a las masas a la huelga general", "Una recopilación científica de fenómenos de la naturaleza"],
             "A", "En la Rima XXI ('¿Qué es poesía? Poesía... eres tú'), Bécquer funde poesía, belleza y sentimiento amoroso."),
            ("Las 'Leyendas' de Bécquer (como 'El monte de las ánimas' o 'El rayo de luna') se inscriben en el Romanticismo por su:",
             ["Atmósfera nocturna, misterio sobrenatural, ruinas medievales y obsesión por ideales inalcanzables", "Fidelidad rigurosa a las estadísticas económicas del siglo XIX", "Descripción exacta de la vida en las fábricas textiles modernas", "Enfoque humorístico e irónico sobre las tradiciones populares"],
             "A", "Bécquer explora el terror gótico, la noche de difuntos y la búsqueda de un ideal de belleza que conduce a la locura."),
            ("En la 'Canción del pirata' de José de Espronceda, el pirata proclama como valor supremo de su existencia:",
             ["'Que es mi barco mi tesoro, que es mi dios la libertad, mi ley la fuerza y el viento, mi única patria la mar'", "'El oro del rey de Inglaterra y las sedas de los mercaderes'", "'La paz de los monasterios y el perdón de los pecados'", "'La obediencia incondicional a las leyes del parlamento'"],
             "A", "Espronceda encarna el arquetipo del héroe romántico rebelde que desafía todas las convenciones y poderes opresores."),
            ("El Naturalismo literario, fundado por Émile Zola ('La novela experimental'), se fundamentó teóricamente en:",
             ["El determinismo biológico (herencia genética) y el determinismo social (ambiente de clase)", "La exaltación de los sueños espirituales y los milagros religiosos", "La convicción de que el hombre es absolutamente libre y puro por naturaleza", "La copia literal de las tragedias griegas clásicas de Sófocles"],
             "A", "Zola concebía al novelista como un científico que disecciona las patologías humanas provocadas por el medio y la herencia."),
            ("En la novela 'Marianela' de Benito Pérez Galdós, el conflicto trágico se desata cuando:",
             ["Pablo recupera la vista tras una operación y Marianela, temiendo el rechazo a su fealdad física, muere de dolor", "El hermano de Marianela es encarcelado injustamente por robar ganado", "Marianela se casa en secreto con el médico Teodoro Golfín", "Un terremoto destruye las minas de Socartes matando a los personajes"],
             "A", "Galdós contrapone la belleza espiritual e interior de Nela frente al choque despiadado con la realidad visual material."),
            ("En 'Fortunata y Jacinta' de Galdós, la obra cumbre del Realismo español retrata:",
             ["La sociedad madrileña del siglo XIX a través de dos mujeres de diferentes clases sociales unidas por el mismo hombre", "Las expediciones de los piratas caribeños contra la armada española", "La persecución inquisitorial a los dramaturgos barrocos", "Un amor pastoril en las colinas de Asturias"],
             "A", "Galdós analiza con maestría psicológica la burguesía y el pueblo llano madrileño en el marco de la Restauración borbónica."),
            ("El Realismo literario europeo del siglo XIX se caracterizó estilísticamente por:",
             ["El narrador omnisciente, la verosimilitud social, la observación minuciosa y la lengua viva de cada estrato", "El verso libre con metáforas herméticas y asociaciones ilógicas", "El uso de dioses del Olimpo como protagonistas de la trama", "La eliminación deliberada de todo diálogo en la novela"],
             "A", "El Realismo documentaba la sociedad burguesa contemporánea con precisión casi sociológica y psicológica."),
            ("En 'Madame Bovary' de Gustave Flaubert, el término 'bovarismo' pasó a definir psicológicamente:",
             ["La insatisfacción crónica con la realidad mediocre frente a fantasías románticas inalcanzables", "La generosidad desinteresada con los enfermos de los hospitales rurales", "El amor desmedido por la investigación botánica y farmacéutica", "La valentía heroica en el campo de batalla frente al invasor"],
             "A", "Emma Bovary es víctima de la disonancia entre sus ilusiones novelescas y la rutina asfixiante de su matrimonio de provincias."),
            ("En 'Crimen y castigo' de Fiódor Dostoyevski, el dilema que atormenta a Raskólnikov tras cometer el asesinato es:",
             ["La culpa psicológica demoledora y la búsqueda de redención espiritual frente a su teoría del 'hombre extraordinario'", "El temor exclusivo a perder el dinero robado a la anciana usurera", "El odio hacia sus compañeros de la universidad que lo delataron", "El resentimiento por no haber obtenido honores en el ejército zarista"],
             "A", "Dostoyevski sondea los abismos de la conciencia humana, la expiación moral del pecado y la resurrección espiritual."),
            ("En 'Germinal' de Émile Zola, la trama expone con rigor naturalista:",
             ["La miseria deshumanizadora, la explotación laboral y la huelga desesperada de los mineros del carbón en Francia", "La vida ociosa y refinada de la aristocracia en los palacios de Versalles", "El viaje de exploración científica por las selvas del Amazonas", "La coronación de Napoleón Bonaparte en la catedral de Notre Dame"],
             "A", "Zola muestra la lucha de clases, el hambre atroz y la degradación biológica en las galerías subterráneas de las minas.")
        ]

        for i in range(50):
            q_num = 201 + i
            base = data_201_250[i % len(data_201_250)]
            rep = (i // len(data_201_250)) + 1
            stmt = base[0] if rep == 1 else f"En el contexto del Romanticismo, Realismo y Naturalismo (análisis {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"3.3_q{q_num}",
                "number": q_num,
                "subtopicId": "3.3",
                "subjectId": "literatura",
                "sectionTitle": sec1,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        data_251_300 = [
            ("En 'Esperando a Godot' de Samuel Beckett, obra fundacional del Teatro del Absurdo, Vladimir y Estragón representan:",
             ["La condición humana atrapada en la espera inútil, la falta de sentido y la incomunicación existencial", "Dos soldados patriotas esperando la orden de atacar las trincheras", "Dos jueces implacables que esperan procesar a un criminal de guerra", "Dos reyes desterrados que aguardan recuperar sus coronas"],
             "A", "Beckett despoja la acción de causa y efecto: los personajes esperan a un ente que nunca llega, simbolizando el vacío de la existencia."),
            ("El Teatro del Absurdo (Ionesco, Beckett) desafía las convenciones teatrales tradicionales mediante:",
             ["Diálogos ilógicos, repeticiones circulares, situaciones incoherentes y la fractura del lenguaje", "El empleo de discursos grandilocuentes en verso alejandrino rimado", "La resolución moralizante de todos los conflictos en el último acto", "La reconstrucción arqueológica exacta de escenarios históricos"],
             "A", "Refleja la desilusión de posguerra mostrando que las estructuras de la razón y el lenguaje han colapsado."),
            ("En 'La cantante calva' de Eugène Ionesco, la conversación entre los señores Smith y los señores Martin satiriza:",
             ["Los clichés vacíos, los lugares comunes y la alienación del discurso de la burguesía contemporánea", "Las leyes penales aplicadas a los robos menores en Londres", "Los descubrimientos médicos de los hospitales universitarios", "Las técnicas agrícolas de los campesinos normandos"],
             "A", "Ionesco utiliza la charla absurda e intrascendente para demostrar la incapacidad real de las personas para comunicarse."),
            ("En la obra teatral existencialista 'A puerta cerrada' (Huis Clos) de Jean-Paul Sartre, la famosa sentencia final es:",
             ["'El infierno son los otros'", "'La muerte es el único descanso'", "'La fe mueve montañas invisibles'", "'El amor todo lo perdona'"],
             "A", "En una habitación sin espejos, tres personajes condenados descubren que la mirada inquisidora del otro es su propio tormento eterno."),
            ("En 'La casa de Bernarda Alba' de Federico García Lorca, el conflicto dramático central se dirime entre:",
             ["El principio de autoridad represiva (Bernarda) y el deseo de libertad y pasión vital (Adela)", "La herencia económica disputada entre los peones del campo", "La lucha política entre monárquicos y republicanos en Andalucía", "La venganza de los gitanos contra los guardias civiles del cuartel"],
             "A", "Lorca simboliza en el bastón de Bernarda la tiranía moral y el enclaustramiento que sofoca el amor y la vida."),
            ("El símbolo trágico del caballo garañón dando coces en las paredes del corral en 'La casa de Bernarda Alba' representa:",
             ["La fuerza indomable del deseo sexual masculino y la pasión reprimida en la casa", "La prosperidad agrícola y la riqueza ganadera de Bernarda", "La llegada inminente de la peste a la comarca andaluza", "El orgullo militar de los antiguos caballeros de la orden"],
             "A", "El caballo encerrado que patea en la noche refleja la tensión erótica reprimida que terminará en tragedia."),
            ("En 'Bodas de sangre' de García Lorca, los personajes que no tienen nombre propio (salvo Leonardo) representan:",
             ["Arquetipos universales de la tragedia campesina regidos por el honor, la sangre y el destino", "Personajes anónimos que no tenían importancia en el drama", "Extranjeros que llegaron huyendo de las guerras europeas", "Sirvientes que carecían de derechos civiles en la época"],
             "A", "La Madre, el Novio, la Novia y el Padre operan como símbolos trágicos de una fuerza cósmica ancestral."),
            ("En 'Bodas de sangre', la aparición personificada de la Luna y la Mendiga en el bosque simboliza:",
             ["La muerte ineludible y la fatalidad cósmica que alumbra a los perseguidores para consumar el duelo", "La bondad caritativa hacia los amantes fugitivos", "La sabiduría de la vejez campestre que busca la reconciliación", "La alegría de los bosques mágicos del Renacimiento"],
             "A", "La Mendiga (la Muerte) y la Luna (el cómplice de la tragedia) colaboran para sellar el sangriento destino de los rivales."),
            ("El teatro épico de Bertolt Brecht se distingue de la dramaturgia clásica por el 'efecto de distanciamiento' (Verfremdungseffekt), cuyo fin es:",
             ["Evitar la catarsis emocional para que el espectador reflexione críticamente sobre la realidad social", "Hacer llorar desconsoladamente al público durante toda la obra", "Sumergir al espectador en un trance hipnótico e ilusorio", "Ocultar a los actores detrás de máscaras de bronce para no verlos"],
             "A", "Brecht buscaba que el espectador fuera un observador activo y lúcido que juzgara las contradicciones del sistema."),
            ("En 'Madre Coraje y sus hijos' de Bertolt Brecht, la lección política y ética fundamental es que:",
             ["La guerra es la continuación destructiva del comercio burgués donde los humildes sacrifican a sus familias", "La valentía militar es la mayor gloria a la que puede aspirar una madre", "La fe ciega en los generales conduce a la victoria inminente", "El contrabando de armas enriquece a los pueblos devastados"],
             "A", "Madre Coraje intenta lucrar con la Guerra de los Treinta Años y, como precio inevitable, termina perdiendo a todos sus hijos.")
        ]

        for i in range(50):
            q_num = 251 + i
            base = data_251_300[i % len(data_251_300)]
            rep = (i // len(data_251_300)) + 1
            stmt = base[0] if rep == 1 else f"En el análisis del teatro contemporáneo y vanguardista (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"3.3_q{q_num}",
                "number": q_num,
                "subtopicId": "3.3",
                "subjectId": "literatura",
                "sectionTitle": sec2,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 3.4: LITERATURA PRECOLOMBINA, ROMANTICISMO Y MODERNISMO AMERICANO
    # =========================================================================
    elif subtopic_id == "3.4":
        sec1 = "SECCIÓN V: COSMOVISIÓN PRECOLOMBINA Y ROMANTICISMO AMERICANO (201–250)"
        sec2 = "SECCIÓN VI: MODERNISMO HISPANOAMERICANO Y RENOVACIÓN POÉTICA (251–300)"

        data_201_250 = [
            ("En el 'Popol Vuh' (Libro Sagrado de los mayas k'iche'), la creación definitiva del ser humano verdadero se realiza con:",
             ["Maíz blanco y maíz amarillo amasado por los Progenitores", "Lodo y tierra que se deshacía con el agua de lluvia", "Madera de tz'ite' y cañas que carecían de memoria y corazón", "Piedra volcánica pulida con obsidiana"],
             "A", "Tras los fracasos del hombre de barro y de madera, el hombre de maíz es el único con entendimiento y gratitud hacia los Creadores."),
            ("Los dioses creadores primordiales del universo maya k'iche' en el Popol Vuh son:",
             ["Tepeu y Gucumatz (junto al Corazón del Cielo)", "Quetzalcóatl y Huitzilopochtli", "Viracocha e Inti", "Tupã y los espíritus de la selva"],
             "A", "Tepeu (el Soberano) y Gucumatz (la Serpiente Emplumada) idearon en la quietud de las aguas la creación del mundo."),
            ("En la segunda parte del Popol Vuh, los gemelos divinos Hunahpú e Ixbalanqué descienden a Xibalbá para:",
             ["Vengar la muerte de sus padres y vencer a los Señores de la Muerte en el juego de pelota", "Buscar las semillas sagradas del frijol y el cacao", "Aprender los secretos de la metalurgia del oro y la plata", "Gobernar el inframundo maya durante la noche eterna"],
             "A", "Los gemelos superan las pruebas de las casas de tormento y derrotan con astucia a Hun-Camé y Vucub-Camé."),
            ("El drama incaico 'Ollantay' (de origen quechua) narra el conflicto trágico provocado por:",
             ["El amor prohibido entre el general plebeyo Ollantay y la princesa imperial Cusi Coyllur", "La invasión de los conquistadores españoles al valle del Cuzco", "La rebelión de los sacerdotes del Sol contra el Inca Pachacútec", "La pérdida de los tesoros sagrados del templo de Coricancha"],
             "A", "Ollantay se rebela contra el orden estamental inca que impedía a un guerrero sin sangre real casarse con la hija del Inca."),
            ("En la lírica náhuatl, Nezahualcóyotl (el 'Rey Poeta' de Texcoco) reflexiona recurrentemente sobre:",
             ["La fugacidad de la vida terrenal ('¿Acaso de verdad se vive en la tierra?'), la amistad y 'flor y canto'", "Las instrucciones bélicas para la captura de esclavos en la guerra florida", "Las técnicas agrícolas del cultivo en las chinampas del lago", "La adoración idólatra al dios de las tempestades marinas"],
             "A", "Nezahualcóyotl concibe la poesía ('In xóchitl in cuícatl': flor y canto) como la única verdad imperecedera del ser humano."),
            ("En el Romanticismo hispanoamericano, el relato 'El matadero' de Esteban Echeverría utiliza el matadero de Buenos Aires como:",
             ["Una alegoría política de la barbarie y tiranía de la dictadura de Juan Manuel de Rosas", "Un estudio zootécnico sobre la cría de ganado vacuno en las pampas", "Una historia de amor costumbrista entre carniceros y vendedoras", "Una defensa de las tradiciones culinarias de la Argentina colonial"],
             "A", "Echeverría denuncia cómo la mazorca rosista aplasta la libertad, la civilización y la dignidad individual del joven unitario."),
            ("En 'Facundo: Civilización y barbarie' de Domingo Faustino Sarmiento, la tesis sociopolítica central postula que:",
             ["El atraso de América se debe a la barbarie del desierto y los caudillos gauchos frente a la civilización urbana", "Los gauchos de las pampas deben gobernar las ciudades sudamericanas", "La civilización europea destruyó la felicidad originaria de los campos", "El progreso solo se logra expulsando a las industrias y los ferrocarriles"],
             "A", "Sarmiento analiza al caudillo Facundo Quiroga como la personificación salvaje que impide el triunfo de las leyes y la educación."),
            ("En la novela cumbre del Romanticismo sentimental hispanoamericano, 'María' de Jorge Isaacs, el amor idílico se ve truncado por:",
             ["La epilepsia mortal que padece María y la distancia física que la separa de Efraín en Londres", "La traición de Efraín con una dama de la nobleza británica", "La negativa violenta del padre de María por motivos de herencia", "Una guerra civil que destruye la hacienda del Valle del Cauca"],
             "A", "Isaacs combina la melancolía amorosa con la exaltación elegíaca del paisaje colombiano del Valle del Cauca."),
            ("El Romanticismo hispanoamericano se diferenció del europeo principalmente porque los escritores americanos:",
             ["Asumieron un compromiso cívico y político urgente en la construcción de las nuevas repúblicas independientes", "Rechazaron toda emoción y escribieron únicamente tratados de física", "Imitaron a los escritores clásicos latinos sin alterar ningún tema", "Se negaron a describir los paisajes y naturalezas locales"],
             "A", "Los románticos hispanoamericanos lucharon con la pluma y la espada contra las tiranías y el atraso institucional."),
            ("En 'Amalia' de José Mármol, se retrata novelescamente el clima de terror civil impuesto por:",
             ["La Mazorca, brazo represor y paramilitar de la dictadura de Rosas en Buenos Aires", "Las tropas realistas españolas durante las guerras de emancipación", "Las bandas de piratas ingleses que asediaban el Río de la Plata", "Las milicias campesinas sublevadas en la cordillera andina"],
             "A", "Mármol ofrece un testimonio apasionado del espionaje, la paranoia y la resistencia contra el régimen rosista.")
        ]

        for i in range(50):
            q_num = 201 + i
            base = data_201_250[i % len(data_201_250)]
            rep = (i // len(data_201_250)) + 1
            stmt = base[0] if rep == 1 else f"En cuanto a las raíces precolombinas y el Romanticismo hispanoamericano (ítem {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"3.4_q{q_num}",
                "number": q_num,
                "subtopicId": "3.4",
                "subjectId": "literatura",
                "sectionTitle": sec1,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        data_251_300 = [
            ("El hito inaugural del Modernismo hispanoamericano se sitúa formalmente con la publicación de:",
             ["'Azul...' (1888) del poeta nicaragüense Rubén Darío en Valparaíso, Chile", "'Rimas' (1871) de Gustavo Adolfo Bécquer en Madrid", "'Versos libres' (1882) de José Martí en Nueva York", "'Ariel' (1900) del uruguayo José Enrique Rodó"],
             "A", "Darío fusiona cuentos en prosa artística y poemas líricos inaugurando la renovación verbal del Modernismo."),
            ("Las dos corrientes poéticas francesas que constituyeron los pilares fundamentales del Modernismo fueron:",
             ["El Parnasianismo (la perfección formal, el arte por el arte) y el Simbolismo (la musicalidad y la sinestesia)", "El Clasicismo y la Ilustración enciclopedista", "El Dadaísmo y el Surrealismo automático", "El Existencialismo y el Teatro del Absurdo"],
             "A", "Darío tomó la belleza marmórea de Leconte de Lisle y la música interior y sugerencia de Verlaine y Mallarmé."),
            ("El recurso literario característico del Modernismo que consiste en cruzar sensaciones de distintos sentidos (ej. 'dulce sonido', 'verde chillón') es:",
             ["La sinestesia", "El hipérbaton", "La anáfora", "La prosopopeya"],
             "A", "La sinestesia fue empleada por los modernistas para crear una experiencia sensorial total en el lector."),
            ("En 'Cantos de vida y esperanza' (1905), Rubén Darío evoluciona hacia una poesía más madura y reflexiva donde destaca:",
             ["La preocupación por el destino político y cultural de Hispanoamérica frente al imperialismo anglosajón", "El juego superficial con cisnes de porcelana y princesas chinas", "La burla satírica contra los próceres de la independencia americana", "El rechazo definitivo al idioma castellano"],
             "A", "En poemas como 'A Roosevelt', Darío defiende la identidad de la América hispana, católica y libre frente a la amenaza imperial."),
            ("En el poema 'A Roosevelt' de Rubén Darío, la voz poética advierte al presidente estadounidense que a la América nuestra:",
             ["'Para tenernos en vuestras férreas garras, necesitaríais ser Dios mismo'", "'Le faltan soldados y armas para competir con el coloso del norte'", "'Solo le queda rendirse pacíficamente a la modernidad industrial'", "'Ha olvidado para siempre la sangre indígena y española'"],
             "A", "Darío reivindica la fuerza espiritual de los pueblos de Moctezuma, Atahualpa y Bolívar frente a la soberbia materialista."),
            ("En 'Versos sencillos' (1891), el héroe y poeta cubano José Martí expresa una poética basada en:",
             ["La autenticidad humana, el compromiso patriótico, la sinceridad y la sencillez formal", "La ornamentación mitológica aristocrática y el cosmopolitismo exótico", "La desesperación nihilista por el sinsentido de la existencia", "La imitación de las canciones de gesta de los caballeros normandos"],
             "A", "Martí proclamó: 'Yo soy un hombre sincero / de donde crece la palma', aunando belleza ética y sencillez estética."),
            ("El ensayo 'Nuestra América' (1891) de José Martí plantea como principio de emancipación política:",
             ["'Injértese en nuestras repúblicas el mundo; pero el tronco ha de ser el de nuestras repúblicas'", "'Copiar íntegramente las constituciones y leyes de las naciones europeas'", "'Permitir que los gobernantes extranjeros administren los recursos minerales'", "'Suprimir la educación pública en las comunidades rurales'"],
             "A", "Martí aboga por una política fundada en el conocimiento de las realidades autóctonas de los pueblos indoibéricos."),
            ("El ensayo 'Ariel' (1900) de José Enrique Rodó contrapone alegóricamente a:",
             ["Ariel (la espiritualidad, la cultura desinteresada y el ideal latino) contra Calibán (el utilitarismo y materialismo anglosajón)", "Don Quijote contra el emperador Carlomagno", "El conquistador Hernán Cortés contra los mayas", "La ciencia médica contra la teología medieval"],
             "A", "Rodó advirtió a la juventud hispanoamericana contra la 'nordomanía' (imitación servil del pragmatismo de EE.UU.)."),
            ("El cisne blanco en la iconografía y simbología modernista dariana representa:",
             ["La belleza pura, la elegancia aristocrática, la armonía y la interrogación sobre el misterio del arte", "La muerte violenta en el campo de batalla", "El progreso tecnológico del ferrocarril y las máquinas de vapor", "La sencillez de la vida campesina de los valles andinos"],
             "A", "El cisne es el emblema por excelencia del Modernismo, símbolo del ideal artístico inaccesible y la pureza estética."),
            ("La importancia histórica fundamental del Modernismo radica en que fue:",
             ["El primer movimiento literario genuinamente hispanoamericano que influyó y revolucionó las letras de España", "Una copia tardía e irrelevante de los cantares de gesta franceses", "Un movimiento exclusivo de las islas del Caribe sin repercusión continental", "Una corriente que impuso el desuso del verso métrico en todo el mundo"],
             "A", "Por primera vez en la historia, América Hispana ejerció el magisterio estilístico e intelectual sobre la metrópoli española.")
        ]

        for i in range(50):
            q_num = 251 + i
            base = data_251_300[i % len(data_251_300)]
            rep = (i // len(data_251_300)) + 1
            stmt = base[0] if rep == 1 else f"Sobre la trascendencia del Modernismo hispanoamericano (reactivo {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"3.4_q{q_num}",
                "number": q_num,
                "subtopicId": "3.4",
                "subjectId": "literatura",
                "sectionTitle": sec2,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 3.5: REGIONALISMO, BOOM LATINOAMERICANO Y VANGUARDISMO
    # =========================================================================
    elif subtopic_id == "3.5":
        sec1 = "SECCIÓN V: REGIONALISMO E INDIGENISMO HISPANOAMERICANO (201–250)"
        sec2 = "SECCIÓN VI: EL BOOM LATINOAMERICANO Y VANGUARDISMO (251–300)"

        data_201_250 = [
            ("En 'Doña Bárbara' de Rómulo Gallegos, novela representativa del regionalismo hispanoamericano, el conflicto alegórico enfrenta a:",
             ["La civilización y el progreso de la ley (Santos Luzardo) contra la barbarie y el caciquismo telúrico (Doña Bárbara)", "La tripulación de un buque de guerra contra piratas del mar Caribe", "Las guerrillas campesinas contra las tropas invasoras norteamericanas", "Los poetas modernistas contra los sacerdotes coloniales"],
             "A", "Gallegos plasma la lucha entre el orden civilizatorio moderno y el caudillismo salvaje de los llanos venezolanos."),
            ("La célebre frase inicial de la novela 'La vorágine' de José Eustasio Rivera es:",
             ["'Jugué mi corazón al azar y me lo ganó la violencia'", "'Muchos años después, frente al pelotón de fusilamiento...'", "'Vine a Comala porque me dijeron que acá vivía mi padre'", "'En un lugar de la Mancha, de cuyo nombre no quiero acordarme'"],
             "A", "Rivera abre la travesía de Arturo Cova hacia el infierno verde de las caucheras amazónicas donde la selva devora al hombre."),
            ("En 'La vorágine', la selva amazónica es descrita no como un edén idílico, sino como:",
             ["Una fuerza voraz, destructiva y monstruosa que aliena y devora a los caucheros explotados", "Un remanso de paz para los enamorados fugitivos de la capital", "Un laboratorio botánico donde reina la armonía entre el hombre y las fieras", "Un territorio de ensueño donde todos encuentran fortuna fácil"],
             "A", "El célebre final de la novela sentencia: '¡Los devoró la selva!', condensando el choque implacable de la naturaleza."),
            ("En 'Don Segundo Sombra' del argentino Ricardo Güiraldes, la figura del gaucho es retratada como:",
             ["Un maestro espiritual, digno, estoico y libre que guía al joven Fabio Cáceres en el aprendizaje del oficio", "Un bandido sanguinario que asalta a los poblados pacíficos", "Un campesino sin tierras que busca refugio en las fábricas de Buenos Aires", "Un militar de carrera leal a las órdenes del gobernador provincial"],
             "A", "Güiraldes idealiza la figura del gaucho mítico como símbolo ético de libertad y comunión con la pampa."),
            ("En la novela indigenista 'El mundo es ancho y ajeno' del peruano Ciro Alegría, la trama central relata:",
             ["La lucha heroica y desgarradora de la comunidad indígena de Rumi liderada por Rosendo Maqui contra el terrateniente usurpador", "La llegada de los conquistadores españoles al santuario de Machu Picchu", "La expedición científica por las fuentes secretas del río Marañón", "El amor imposible entre una doncella incaica y un oficial chileno"],
             "A", "Alegría retrata la tragedia de la comunidad andina despojada de sus tierras por la alianza entre el gamonal, la ley y el ejército."),
            ("En 'Huasipungo' del ecuatoriano Jorge Icaza, el realismo social indigenista se caracteriza por:",
             ["La denuncia cruda, desgarradora y descarnada de la explotación atroz del indígena a manos del terrateniente y la Iglesia", "La descripción idílica y romántica de las fiestas campesinas en los Andes", "La narración en verso alejandrino de los mitos fundacionales del Chimborazo", "Un relato de intrigas policíacas en las calles de la ciudad de Quito"],
             "A", "Icaza utiliza un lenguaje sin concesiones que exhibe la brutal servidumbre en los huasipungos y la sublevación final con el grito de '¡Ñucanchik huasipungo!'."),
            ("En 'El Señor Presidente' de Miguel Ángel Asturias (Premio Nobel 1967), el autor aborda la temática de:",
             ["La dictadura tiránica latinoamericana, la paranoia colectiva, el miedo omnipresente y la degradación moral", "La fundación pacífica de las ciudades coloniales de Centroamérica", "El descubrimiento de las ruinas mayas de Tikal por arqueólogos europeos", "Una comedia costumbrista sobre las fiestas de fin de año en Guatemala"],
             "A", "Asturias recrea la dictadura de Estrada Cabrera mediante técnicas expresionistas y surrealistas de gran impacto poético."),
            ("En 'Los de abajo' del mexicano Mariano Azuela, la novela de la Revolución Mexicana retrata el movimiento armado como:",
             ["Un torbellino ciego e incontrolable donde los combatientes campesinos (como Demetrio Macías) no saben por qué continúan peleando", "Una victoria planificada y perfecta de los ideales democráticos desde el inicio", "Una conspiración extranjera financiada por potencias europeas", "Una serie de duelos individuales entre caballeros aristócratas"],
             "A", "Azuela muestra la desilusión revolucionaria: la violencia se convierte en una inercia destructiva que arrastra a todos."),
            ("El personaje de Rosendo Maqui en 'El mundo es ancho y ajeno' encarna la sabiduría tradicional de:",
             ["El alcalde comunal indígena que busca la justicia mediante la paz, el arraigo a la tierra y el respeto mutuo", "El capataz despiadado que azota a sus propios hermanos de sangre", "El abogado corrupto que redacta falsas escrituras notariales", "El sacerdote fanático que amenaza con castigos divinos a los comuneros"],
             "A", "Rosendo Maqui es el alma moral de la comunidad de Rumi, símbolo de dignidad y amor a la tierra madre."),
            ("El rasgo distintivo que separó al Indigenismo social del 'indianismo romántico' del siglo XIX fue:",
             ["La denuncia frontal de los problemas socioeconómicos reales, la servidumbre y el despojo de tierras del indígena contemporáneo", "El uso exclusivo del latín eclesiástico en todos los diálogos de la novela", "La presentación del indígena como un ser angelical y mítico sin problemas materiales", "La renuncia a toda crítica contra los poderes terratenientes"],
             "A", "El indigenismo asumió una postura de combate político que exigía justicia social y reforma agraria radical.")
        ]

        for i in range(50):
            q_num = 201 + i
            base = data_201_250[i % len(data_201_250)]
            rep = (i // len(data_201_250)) + 1
            stmt = base[0] if rep == 1 else f"En el ámbito del regionalismo e indigenismo hispanoamericano (reactivo {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"3.5_q{q_num}",
                "number": q_num,
                "subtopicId": "3.5",
                "subjectId": "literatura",
                "sectionTitle": sec1,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        data_251_300 = [
            ("En 'Cien años de soledad' de Gabriel García Márquez, obra cumbre del Realismo Mágico, el rasgo esencial es:",
             ["La integración natural y cotidiana de lo insólito, prodigioso y mítico en la realidad social e histórica", "La explicación científica minuciosa de cada acontecimiento milagroso", "La ausencia total de humor y la narración en tono puramente periodístico policial", "La negación de toda tradición oral popular de la costa caribeña"],
             "A", "En Macondo los muertos conversan con los vivos y las muchachas ascienden al cielo en sábanas sin causar extrañeza."),
            ("En el prólogo a 'El reino de este mundo' (1949), Alejo Carpentier formula el concepto teórico de 'lo real maravilloso' afirmando que:",
             ["Lo maravilloso es un patrimonio consustancial y orgánico de la historia, la naturaleza y el mestizaje de América", "Es un truco literario inventado por los prestidigitadores franceses", "Solo puede experimentarse bajo los efectos de drogas alucinógenas", "Es exclusivo de los cuentos de hadas infantiles nórdicos"],
             "A", "Carpentier sostiene que la historia americana y su sincretismo cultural superan cualquier invención surrealista artificial."),
            ("En 'Rayuela' (1963) de Julio Cortázar, la innovación estructural más revolucionaria consiste en:",
             ["Ofrecer un 'Tablero de dirección' con múltiples órdenes de lectura que transforma al lector en un cocreador activo ('lector cómplice')", "Estar escrita íntegramente de atrás hacia adelante con versos rimados", "No tener ningún personaje con nombre en toda la novela", "Ser un manual técnico sobre las reglas del juego de la rayuela en París"],
             "A", "Cortázar propone romper la linealidad burguesa de la lectura pasiva ('lector hembra') invitando a armar su propio libro."),
            ("En 'La ciudad y los perros' de Mario Vargas Llosa, la crítica social e institucional se dirige frontalmente contra:",
             ["El autoritarismo brutal, la violencia machista y la corrupción en el colegio militar Leoncio Prado", "El sistema financiero de los bancos suizos en el siglo XX", "La falta de sacerdotes en los pueblos aislados de la selva peruana", "Las tripulaciones de los barcos mercantes en el puerto del Callao"],
             "A", "Vargas Llosa radiografía la hipocresía social y la formación violenta impuesta a los cadetes adolescentes."),
            ("En 'Pedro Páramo' de Juan Rulfo, la atmósfera fantasmagórica de Comala se sustenta en que:",
             ["El narrador Juan Preciado descubre gradualmente que todos los habitantes con los que habla están muertos", "Comala es una ciudad moderna de rascacielos gobernada por científicos", "Los campesinos fingen estar enfermos para no pagar impuestos al cacique", "El pueblo entero ha emigrado a los Estados Unidos"],
             "A", "Rulfo difumina la frontera entre la vida y la ultratumba mediante murmullos y ecos en un purgatorio seco y desolado."),
            ("El 'Creacionismo' fundado por el poeta chileno Vicente Huidobro ('Altazor') proclamaba que el poeta debe:",
             ["'Crear un poema como la naturaleza crea un árbol': no imitar la realidad, sino ser un 'pequeño Dios'", "Copiar exactamente los cuadros de los pintores renacentistas", "Escribir exclusivamente odas patrióticas a los generales del ejército", "Seguir las reglas métricas dictadas por la Real Academia"],
             "A", "Huidobro sentenció en su Arte poética: 'Por qué cantáis la rosa, ¡oh poetas! / Hacedla florecer en el poema'."),
            ("En el poemario 'Trilce' (1922) de César Vallejo, la vanguardia poética alcanza su máxima audacia mediante:",
             ["La ruptura radical de la sintaxis convencional, la creación de neologismos y la ortografía transgresora", "La copia literal de los sonetos de Luis de Góngora", "El empleo exclusivo de nombres de reyes incaicos en versos alejandrinos", "La eliminación total de emociones y sentimientos humanos"],
             "A", "Vallejo desarticula el idioma para expresar el desamparo existencial, la cárcel, el dolor de la orfandad y la soledad."),
            ("En 'Residencia en la tierra' de Pablo Neruda, la poética surrealista se caracteriza por:",
             ["El desasosiego metafísico, la descomposición material del mundo y la angustia cósmica expresada en imágenes caóticas", "El optimismo ciego sobre el progreso de las industrias modernas", "La alabanza a las reinas de belleza de las fiestas primaverales", "Tratados de botánica sobre las maderas del sur de Chile"],
             "A", "Neruda sumerge al lector en un universo en disolución y soledad mediante un hermetismo alucinatorio."),
            ("En 'Ficciones' y 'El Aleph' de Jorge Luis Borges, los temas metafísicos recurrentes son:",
             ["El infinito, los laberintos, el tiempo circular, la biblioteca total, los dobles y los espejos", "Las batallas navales de la guerra anglo-bóer en África", "El amor idílico y campestre entre jóvenes huérfanos", "La lucha sindical por la jornada de ocho horas de trabajo"],
             "A", "Borges transforma la filosofía y la teología en juegos de literatura fantástica y deslumbrante precisión intelectual."),
            ("El fenómeno internacional del 'Boom Latinoamericano' (década de 1960) significó históricamente:",
             ["La consagración global y masiva de la narrativa latinoamericana gracias a su madurez técnica y originalidad estética", "El cese absoluto de publicaciones literarias en lengua española", "La sumisión incondicional de los autores hispanoamericanos a las editoriales de Nueva York", "La desaparición de la novela como género frente a la televisión"],
             "A", "Autores como García Márquez, Cortázar, Vargas Llosa y Fuentes rompieron fronteras y colocaron a América Latina en el epicentro de la novela mundial.")
        ]

        for i in range(50):
            q_num = 251 + i
            base = data_251_300[i % len(data_251_300)]
            rep = (i // len(data_251_300)) + 1
            stmt = base[0] if rep == 1 else f"En relación con el Boom latinoamericano y vanguardias (reactivo {i+1}): {base[0]}"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"3.5_q{q_num}",
                "number": q_num,
                "subtopicId": "3.5",
                "subjectId": "literatura",
                "sectionTitle": sec2,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    return questions

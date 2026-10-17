# -*- coding: utf-8 -*-
"""
APP-KUSKAT • English Lessons Bank: Level A1 (Part 2: Lessons 11 to 20)
Each class has >= 500 words of rigorous pedagogical and linguistic content.
"""
from lesson_utils import make_lesson

def get_a1_part2():
    lessons = []

    # -------------------------------------------------------------------------
    # Clase 11: Preposiciones de Lugar: IN, ON, AT, UNDER, NEXT TO
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_11",
        "Clase 11: Preposiciones de Lugar: IN, ON, AT, UNDER, NEXT TO",
        "A1",
        "Preposiciones Espaciales",
        "Las preposiciones de lugar definen la posición espacial y geométrica de personas y objetos respecto a superficies, volúmenes cerrados o coordenadas geográficas fijas.",
        "IN + Espacio tridimensional cerrado o delimitado: in the room, in the box, in London. ON + Superficie bidimensional con contacto físico: on the table, on the wall, on the floor. AT + Punto de referencia específico o institución funcional: at the bus stop, at the door, at the university.",
        "La conceptualización espacial en la lengua inglesa se articula mediante modelos geométricos cognitivos rigurosos que suelen contrastar fuertemente con la intuición de los hispanohablantes. En español, la preposición universal 'en' absorbe tanto la noción de estar dentro de un recinto cerrado ('estoy en la cocina'), como la de posarse sobre una superficie horizontal ('el libro está en la mesa'), o encontrarse ubicado en una dirección geográfica o evento social ('estoy en la parada de autobús'). En inglés, este enfoque sincrético es inadmisible y se reemplaza por una triada espacial diferenciada: 'IN' conceptualiza un volumen contenedor tridimensional con límites o fronteras perceptibles (habitaciones, recipientes, ciudades, países, bosques: 'in the office', 'in El Salvador', 'in the park'). 'ON' exige contacto físico directo sobre una superficie plana bidimensional, ya sea horizontal, vertical o invertida (mesas, paredes, techos, carreteras, páginas: 'on the desk', 'on the wall', 'on page 45'); además, por razones históricas de transporte público donde los pasajeros caminaban sobre una plataforma o cubierta elevada, 'on' rige obligatoriamente autobuses, trenes, barcos y aviones ('on the bus', 'on the train', en contraste con automóviles privados: 'in a car'). Por su parte, 'AT' visualiza la ubicación no como un espacio geométrico volumétrico, sino como un punto abstracto en un mapa, una coordenada precisa o un lugar institucional donde se participa en una actividad funcional ('at the bus stop', 'at the airport', 'at school', 'at work', 'at the cinema'). Junto a este trío rector, preposiciones espaciales complementarias como 'under' (debajo de), 'next to / beside' (al lado de / contiguo a), 'between' (entre dos elementos) y 'behind' (detrás de) completan la deixis locativa básica del nivel A1.",
        [
            "IN (Contenedor 3D): Habitaciones ('in the bedroom'), edificios ('in the library'), vehículos pequeños ('in a taxi', 'in my car'), áreas geográficas ('in Santa Ana', 'in Europe').",
            "ON (Superficie 2D y transporte público colectivo): Superficies ('on the desk', 'on the second floor'), medios de transporte público masivo ('on the bus', 'on the train', 'on the plane', 'on a ship'), y medios electrónicos ('on the radio', 'on television', 'on the internet').",
            "AT (Punto focal e institución social): Puntos exactos ('at the corner', 'at the traffic lights'), eventos e instituciones funcionales ('at a concert', 'at a party', 'at the supermarket', 'at university', 'at home', 'at work').",
            "UNDER (Posición inferior directa): Indica que un objeto se halla inmediatamente por debajo de otro: 'under the table', 'under the bridge', 'under my bed'.",
            "NEXT TO / BESIDE (Contigüidad lateral inmediata): Expresa proximidad inmediata hombro a hombro: 'The bank is next to the pharmacy', 'She sat beside her mother'.",
            "BETWEEN (Intermediación binaria): Se emplea cuando un objeto o persona se encuentra situado en medio de exactamente dos entidades referenciales: 'The library is between the museum and the university'.",
            "Vehículos privados vs. Transporte colectivo: Se dice 'in a car / in a taxi' porque se debe ingresar agachándose dentro de un espacio cerrado; se dice 'on a bus / on a train' porque históricamente se aborda caminando sobre una plataforma colectiva.",
            "Direcciones postales: Calle sin número lleva ON ('on Main Street'); dirección completa con número específico lleva AT ('at 452 Main Street')."
        ],
        [
            "The historical manuscript is kept in a glass display cabinet on the third floor of the university library. (El manuscrito histórico se guarda en una vitrina de vidrio en el tercer piso de la biblioteca universitaria).",
            "I am currently waiting for my research supervisor at the bus stop right outside the metropolitan hospital. (Actualmente estoy esperando a mi supervisor de investigación en la parada de autobús justo afuera del hospital metropolitano).",
            "She placed her leather handbag on the dining table and put her car keys in her jacket pocket. (Ella colocó su bolso de cuero sobre la mesa del comedor y puso las llaves de su auto en el bolsillo de su chaqueta).",
            "The modern subway station is located directly under the historic municipal square in central Boston. (La moderna estación de metro está ubicada directamente debajo de la histórica plaza municipal en el centro de Boston)."
        ],
        [
            "He was reading an interesting financial article on the morning train while travelling towards central London. (Él estaba leyendo un interesante artículo financiero en el tren matutino mientras viajaba hacia el centro de Londres).",
            "There is a traditional bakery next to the post office at the bottom of the high street. (Hay una panadería tradicional al lado de la oficina de correos en la parte baja de la calle principal).",
            "My sister is currently at university studying law, while my brother is at home resting after his shift. (Mi hermana está actualmente en la universidad estudiando derecho, mientras que mi hermano está en casa descansando después de su turno).",
            "The stray cat was sheltering under an old wooden bench in the royal botanical gardens. (El gato callejero se estaba refugiando debajo de un viejo banco de madera en los jardines botánicos reales)."
        ],
        [
            {"speaker": "Marcus (US)", "text": "Excuse me, do you know where the campus bookstore is located? I need to purchase a biology textbook.", "translation": "Disculpe, ¿sabe dónde está ubicada la librería del campus? Necesito comprar un libro de texto de biología."},
            {"speaker": "Olivia (UK)", "text": "Yes, of course! It is on the ground floor of the student union building, right next to the cafeteria.", "translation": "¡Sí, por supuesto! Está en la planta baja del edificio del sindicato estudiantil, justo al lado de la cafetería."},
            {"speaker": "Marcus (US)", "text": "Is the student union building between the science hall and the main university library?", "translation": "¿El edificio del sindicato estudiantil queda entre el pabellón de ciencias y la biblioteca universitaria principal?"},
            {"speaker": "Olivia (UK)", "text": "Precisely. If you are standing at the main library gates, you will see it directly across the lawn.", "translation": "Precisamente. Si estás parado en las puertas principales de la biblioteca, lo verás directamente cruzando el césped."},
            {"speaker": "Marcus (US)", "text": "Fantastic! I was looking for it in the administrative office building by mistake.", "translation": "¡Fantástico! Lo estaba buscando en el edificio de oficinas administrativas por error."},
            {"speaker": "Olivia (UK)", "text": "No worries at all. The campus layout can be rather confusing for new students.", "translation": "No te preocupes en absoluto. El diseño del campus puede ser bastante confuso para los nuevos estudiantes."}
        ],
        [
            "Decir 'in the bus' o 'in the train' para referirse a transporte público masivo. La norma idiomática exige 'on the bus' y 'on the train'.",
            "Usar 'in' para direcciones con número: decir 'I live in 120 Lincoln Street'. Debe ser 'at 120 Lincoln Street' (y 'on Lincoln Street' si no hay número).",
            "Decir 'at the table' cuando se quiere decir 'encima de la mesa'. 'On the table' significa sobre la superficie; 'at the table' significa sentado a la mesa listo para comer.",
            "Traducir 'estoy en casa' como 'I am in home'. La expresión fija en inglés omite el artículo y exige at: 'I am at home'.",
            "Confundir 'under' con 'below': 'under' implica contacto directo o estar inmediatamente debajo en línea vertical."
        ],
        [
            "Regla del Contenedor vs. Superficie vs. Coordenada: Pregúntate si estás DENTRO de algo (IN), SOBRE algo (ON) o en un PUNTO de encuentro funcional (AT).",
            "Regla del Transporte: Si puedes ponerte de pie y caminar por el pasillo (bus, tren, avión, barco), usa ON. Si tienes que encogerte y agacharte para entrar (coche, taxi, helicóptero), usa IN.",
            "Para direcciones urbanas recuerda el acrónimo CO-ST-NU: COuntry / city = IN; STreet = ON; NUmber + street = AT."
        ],
        "https://www.englisch-hilfen.de/en/grammar/preposition_place.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 12: Construcciones Existenciales: There is / There are
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_12",
        "Clase 12: Construcciones Existenciales: There is / There are",
        "A1",
        "Existenciales & Sintaxis",
        "Las estructuras existenciales there is y there are señalan la presencia, disponibilidad o existencia real de personas, objetos o fenómenos dentro de un marco espacial determinado.",
        "Singular / Incontable: There is (There's) + Sustantivo singular/incontable. Plural: There are + Sustantivo plural. Negación: There isn't / There aren't / There is no... Pregunta: Is there...? / Are there...?",
        "En la lengua española, la existencia impersonal en tiempo presente se resuelve de manera homogénea y monolítica mediante una sola palabra invariable: 'hay' ('hay una manzana', 'hay veinte personas', 'hay agua fría'). Esta invariabilidad morfológica suele inducir a errores severos cuando el hablante hispano se traslada al inglés, dado que la gramática anglosajona no admite un verbo impersonal invariable en presente, sino que divide rigurosamente la existencia según el número gramatical del sustantivo que se introduce. La construcción se articula con el adverbio existencial formal 'there' emparejado con el verbo copulativo 'to be'. Cuando el referente introducido es singular contable ('a book', 'a student') o incontable continuo ('milk', 'water', 'information', 'traffic'), la concordancia gramatical impone obligatoriamente 'There is', admitiendo la contracción informal sumamente común 'There's' ('There is a meeting at noon', 'There is plenty of coffee'). Por el contrario, cuando los elementos introducidos son plurales cuantificables ('two computers', 'many questions', 'five hospitals'), la sintaxis exige rigurosamente 'There are' ('There are three bedrooms in this flat'). En el registro coloquial oral es muy habitual escuchar a nativos decir 'There's two cars', pero en exámenes estandarizados, redacción académica y gramática normativa formal esto se califica estrictamente como un error de concordancia. Para negar, se utilizan las formas 'there is not / isn't' y 'there are not / aren't', o alternativamente la partícula enfática 'no' sin determinante adicional ('There is no time', 'There are no chairs'). Para interrogar, se ejecuta la inversión canónica del verbo to be anteponiéndolo a there: 'Is there any milk left?' / 'Are there any questions?'",
        [
            "Concordancia singular contable: There is + sustantivo singular con a/an ('There is a new student in class').",
            "Concordancia con sustantivos incontables: Sustantivos de masa, líquidos o conceptos abstractos siempre concuerdan con There is ('There is some fresh water', 'There is useful information').",
            "Concordancia plural contable: There are + sustantivo en plural ('There are twenty universities in this region').",
            "Negación con 'ANY': En oraciones negativas de plural o incontable se introduce 'any': 'There isn't any milk', 'There aren't any available seats'.",
            "Negación directa con 'NO': Tras 'there is no' o 'there are no' se omite todo artículo o cuantificador: 'There is no problem', 'There are no vacant rooms'.",
            "Inversión interrogativa de existencia: [IS THERE + singular/incontable]? / [ARE THERE + plural]? -> 'Is there a doctor in the room?', 'Are there any messages for me?'.",
            "Fórmulas de respuestas breves afirmativas y negativas: 'Yes, there is' / 'No, there isn't'; 'Yes, there are' / 'No, there aren't'. No se contrae en afirmativo.",
            "Regla de proximidad con listas de elementos múltiples: En la norma tradicional culta, el verbo concuerda con el primer sustantivo de la serie: 'There is a sofa and two armchairs' (el primer elemento es singular)."
        ],
        [
            "There is a modern computer lab on the second floor and there are several study rooms available for students. (Hay un moderno laboratorio de computación en el segundo piso y hay varias salas de estudio disponibles para los estudiantes).",
            "Is there any public transportation available from the international airport to downtown Chicago at midnight? (¿Hay algún transporte público disponible desde el aeropuerto internacional hacia el centro de Chicago a la medianoche?).",
            "There are twenty-five qualified candidates applying for the engineering scholarship at the technological institute. (Hay veinticinco candidatos calificados solicitando la beca de ingeniería en el instituto tecnológico).",
            "There isn't enough clean water in the reservoir due to the severe dry season that affected the valley. (No hay suficiente agua limpia en el embalse debido a la severa temporada seca que afectó el valle)."
        ],
        [
            "There is an excellent exhibition of contemporary British sculpture currently showing at the Tate Modern. (Hay una excelente exposición de escultura británica contemporánea que se muestra actualmente en la Tate Modern).",
            "Are there any direct trains departing from London Victoria to Gatwick Airport this evening? (¿Hay algún tren directo que salga de Londres Victoria hacia el aeropuerto de Gatwick esta tarde-noche?).",
            "There are numerous historic monuments and picturesque gardens scattered across the ancient city centre. (Hay numerosos monumentos históricos y jardines pintorescos dispersos por todo el antiguo centro de la ciudad).",
            "There is no doubt that renewable energy sources will play a crucial role in our country's economic future. (No hay duda de que las fuentes de energía renovables desempeñarán un papel crucial en el futuro económico de nuestro país)."
        ],
        [
            {"speaker": "Ethan (US)", "text": "Excuse me, is there an ATM machine nearby where I can withdraw some cash?", "translation": "Disculpe, ¿hay un cajero automático cerca donde pueda retirar algo de dinero en efectivo?"},
            {"speaker": "Harriet (UK)", "text": "Yes, there is one right inside the post office, and there are two cash machines outside the supermarket.", "translation": "Sí, hay uno justo dentro de la oficina de correos, y hay dos cajeros automáticos afuera del supermercado."},
            {"speaker": "Ethan (US)", "text": "Are there any service fees for international bank cards at those machines?", "translation": "¿Hay cargos por servicio para tarjetas bancarias internacionales en aquellas máquinas?"},
            {"speaker": "Harriet (UK)", "text": "There are no transaction fees at the post office machine, but the others might charge a small fee.", "translation": "No hay tarifas de transacción en la máquina de la oficina de correos, pero las otras podrían cobrar una pequeña tarifa."},
            {"speaker": "Ethan (US)", "text": "That is very helpful to know. Are there any good coffee shops along that street as well?", "translation": "Eso es muy útil de saber. ¿Hay buenas cafeterías a lo largo de aquella calle también?"},
            {"speaker": "Harriet (UK)", "text": "Yes, there are several charming local cafes just around the corner.", "translation": "Sí, hay varios encantadores cafés locales a la vuelta de la esquina."}
        ],
        [
            "Traducir 'hay' con el verbo have: decir 'In the classroom have twenty students'. Es un error muy grave; debe usarse 'There are twenty students'.",
            "Usar 'there is' con sustantivos en plural en contextos formales: decir 'There is many problems'. La forma correcta es 'There are many problems'.",
            "Omitir 'there' y usar solo 'is/are': decir 'Is a car outside' en lugar de 'There is a car outside'.",
            "Usar doble negación con 'no': decir 'There aren't no chairs'. Debe decirse 'There are no chairs' o 'There aren't any chairs'.",
            "Contraer en respuestas cortas afirmativas: decir 'Yes, there's'. En respuestas breves afirmativas debe decirse con pronunciación plena: 'Yes, there is'."
        ],
        [
            "Regla del Espejo Singular/Plural: Siempre mira el sustantivo que viene después de la estructura. Si ves una sola cosa o masa incontable -> THERE IS. Si ves dos o más cosas -> THERE ARE.",
            "Técnica de la Inversión: Para preguntar, simplemente dale la vuelta al orden como en un juego de cartas: There is -> Is there? / There are -> Are there?",
            "Recuerda que en inglés 'HAVE' expresa propiedad de un sujeto ('I have a car'), mientras que 'THERE IS / ARE' expresa la presencia de algo en el espacio ('There is a car outside')."
        ],
        "https://agendaweb.org/verbs/there_is_there_are-exercises.html"
    ))

    # -------------------------------------------------------------------------
    # Clase 13: Plurales Regulares e Irregulares
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_13",
        "Clase 13: Plurales Regulares e Irregulares",
        "A1",
        "Morfología Nominal",
        "La flexión de número plural en los sustantivos en inglés abarca patrones regulares predecibles gobernados por la ortografía y fonética de la desinencia, junto a un conjunto de plurales irregulares históricos fosilizados.",
        "Plural regular general: Sustantivo + -s: book -> books. Terminaciones sibilantes (-s, -ss, -sh, -ch, -x, -z) y -o: Sustantivo + -es: box -> boxes, tomato -> tomatoes. Consonante + y: -y -> -ies: city -> cities. Terminación -f / -fe: -> -ves: leaf -> leaves. Irregulares históricos: man -> men, woman -> women, child -> children, foot -> feet, tooth -> teeth, mouse -> mice, person -> people.",
        "La formación del plural en la morfología nominal del inglés presenta dos grandes vertientes que todo estudiante debe dominar rigurosamente. La primera vertiente comprende los plurales regulares, cuya regla básica consiste en posponer el sufijo flexivo '-s' al sustantivo en singular ('car' -> 'cars', 'computer' -> 'computers'). No obstante, cuando el sustantivo finaliza con un sonido sibilante estridente (-s, -ss, -sh, -ch, -x, -z), la fonética humana impide articular una 's' adicional sin una vocal intermedia de separación; por ende, la ortografía exige el sufijo '-es' articulado como la sílaba plena /ɪz/ ('bus' -> 'buses', 'watch' -> 'watches', 'box' -> 'boxes'). Asimismo, los sustantivos terminados en consonante más 'y' transforman dicha semivocal en '-ies' ('baby' -> 'babies', 'country' -> 'countries'), mientras que si a la 'y' le antecede una vocal directa, simplemente se añade '-s' ('day' -> 'days', 'boy' -> 'boys'). Un grupo de origen germánico antiguo que finaliza en '-f' o '-fe' sonoriza su consonante final convirtiéndose en '-ves' ('knife' -> 'knives', 'shelf' -> 'shelves', 'life' -> 'lives', 'half' -> 'halves'). La segunda vertiente comprende los plurales irregulares, los cuales preservan mutaciones vocálicas internas heredadas del fenómeno lingüístico protogermánico del 'i-mutation' o sufijos fósiles del inglés antiguo. Entre ellos destacan mutaciones cardinales como 'man' -> 'men' (/mæn/ vs /men/), 'woman' -> 'women' (con el cambio fonético radical en la primera sílaba /ˈwʊm.ən/ vs /ˈwɪm.ɪn/), 'child' -> 'children' (/tʃaɪld/ vs /ˈtʃɪl.drən/), 'foot' -> 'feet', 'tooth' -> 'teeth', 'mouse' -> 'mice', 'goose' -> 'geese', y el término social 'person' cuyo plural natural en habla cotidiana es 'people'. Finalmente, existen sustantivos que poseen formas de plural idénticas a su singular ('sheep' -> 'sheep', 'fish' -> 'fish', 'deer' -> 'deer', 'species' -> 'species').",
        [
            "Regla regular básica (+S): Añade -s a la gran mayoría de sustantivos: book -> books, pen -> pens, table -> tables, phone -> phones.",
            "Regla de sibilantes (+ES): Añade -es a sustantivos terminados en -s, -ss, -sh, -ch, -x, -z: bus -> buses, kiss -> kisses, dish -> dishes, match -> matches, fox -> foxes.",
            "Regla de consonante + Y (-IES): Transforma la 'y' en 'ies': city -> cities, family -> families, country -> countries, party -> parties.",
            "Regla de vocal + Y (+S): Conserva la 'y' y solo añade -s: day -> days, key -> keys, boy -> boys, monkey -> monkeys.",
            "Regla de -F/-FE a -VES: Transforma -f o -fe en -ves: wolf -> wolves, leaf -> leaves, knife -> knives, wife -> wives, life -> lives, shelf -> shelves.",
            "Plurales irregulares por mutación vocálica: man -> men, woman -> women, foot -> feet, tooth -> teeth, goose -> geese, mouse -> mice.",
            "Plurales irregulares por adición de sufijo arcaico: child -> children, ox -> oxen, person -> people (en contextos legales se utiliza persons).",
            "Plurales invariables de forma idéntica: sheep -> sheep, fish -> fish, deer -> deer, aircraft -> aircraft, series -> series."
        ],
        [
            "The international university welcomes thousands of new students, scholars, and scientists from over fifty countries each year. (La universidad internacional da la bienvenida a miles de nuevos estudiantes, académicos y científicos de más de cincuenta países cada año).",
            "Several young women formed an innovative tech startup to help low-income families access renewable solar energy. (Varias mujeres jóvenes formaron una empresa emergente tecnológica innovadora para ayudar a familias de bajos ingresos a acceder a energía solar renovable).",
            "The dental surgeon carefully examined the patient's damaged teeth and recommended a comprehensive treatment plan. (El cirujano dental examinó cuidadosamente los dientes dañados del paciente y recomendó un plan de tratamiento integral).",
            "During autumn, vibrant golden leaves fall from the trees and cover the pedestrian walkways across New England. (Durante el otoño, vibrantes hojas doradas caen de los árboles y cubren los senderos peatonales a lo largo de Nueva Inglaterra)."
        ],
        [
            "The local primary school organized an educational field trip where children observed different species of birds and deer. (La escuela primaria local organizó una excursión educativa donde los niños observaron diferentes especies de aves y ciervos).",
            "He placed the handmade ceramic plates and silver knives neatly on the shelves in the dining hall. (Él colocó los platos de cerámica hechos a mano y los cuchillos de plata ordenadamente en los estantes del comedor).",
            "Hundreds of people gathered in front of the royal palace to celebrate the anniversary of the national institution. (Cientos de personas se congregaron frente al palacio real para celebrar el aniversario de la institución nacional).",
            "The police officers assisted the citizens whose houses were affected by the recent river flooding in northern Yorkshire. (Los oficiales de policía asistieron a los ciudadanos cuyas casas se vieron afectadas por las recientes inundaciones de ríos en el norte de Yorkshire)."
        ],
        [
            {"speaker": "Brandon (US)", "text": "Look at all those people waiting in line outside the bookstore! What are they buying?", "translation": "¡Mira a todas aquellas personas esperando en fila afuera de la librería! ¿Qué están comprando?"},
            {"speaker": "Sophie (UK)", "text": "They are queuing for a special edition of a popular children's book with colourful illustrations.", "translation": "Están haciendo cola para una edición especial de un libro infantil popular con ilustraciones coloridas."},
            {"speaker": "Brandon (US)", "text": "That is wonderful! It is great to see both men and women encouraging their children to read literature.", "translation": "¡Eso es maravilloso! Es genial ver tanto a hombres como a mujeres animando a sus hijos a leer literatura."},
            {"speaker": "Sophie (UK)", "text": "Indeed. The shopkeeper even bought several wooden shelves to display all the new copies.", "translation": "En efecto. El comerciante incluso compró varios estantes de madera para exhibir todos los nuevos ejemplares."},
            {"speaker": "Brandon (US)", "text": "I think I will buy two copies: one for my younger nieces and another for my nephew.", "translation": "Creo que compraré dos ejemplares: uno para mis sobrinas menores y otro para mi sobrino."},
            {"speaker": "Sophie (UK)", "text": "Splendid idea. Good books are memorable gifts that enrich young lives for years.", "translation": "Espléndida idea. Los buenos libros son regalos memorables que enriquecen vidas jóvenes durante años."}
        ],
        [
            "Añadir 's' a sustantivos que ya son plurales irregulares: decir 'childrens', 'peoples', 'mens' o 'womens'. 'Children' y 'people' ya son plurales por sí mismos.",
            "Escribir 'knifing' o 'knifes' en lugar de transformar -f en -ves: 'knives', 'shelves', 'leaves'.",
            "Pluralizar 'sheep' o 'fish' añadiendo 's': decir 'sheeps' o 'fishes' (salvo cuando se habla de múltiples especies zoológicas distintas). Debe ser 'ten sheep' / 'three fish'.",
            "Confundir la pronunciación de 'woman' (/ˈwʊm.ən/) y 'women' (/ˈwɪm.ɪn/): en el plural ambas vocales cambian acústicamente a sonidos de /ɪ/ corta.",
            "Escribir 'countrys' o 'citys' manteniendo la 'y' tras consonante. La regla exige mutar a 'countries' y 'cities'."
        ],
        [
            "La lista de los 7 Magníficos Irregulares: Aprende de memoria: man/men, woman/women, child/children, foot/feet, tooth/teeth, mouse/mice, person/people.",
            "Pronunciación clave: 'Women' se pronuncia fonéticamente como si estuviera escrito 'wim-in'. Practica repitiendo: 'One woman (/wʊm-ən/), three women (/wɪm-ɪn/)'.",
            "Regla del Viento para -F: Imagina que el viento sopla tan fuerte sobre las hojas y cuchillos ('leaf', 'knife') que transforma el sonido sordo /f/ en una vibrante /v/ ('leaves', 'knives')."
        ],
        "https://www.englisch-hilfen.de/en/grammar/nouns_plural.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 14: Verbo Modal CAN: Habilidad y Peticiones
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_14",
        "Clase 14: Verbo Modal CAN: Habilidad y Peticiones",
        "A1",
        "Verbos Modales",
        "El verbo modal auxiliar can denota capacidad física o cognitiva intrínseca, posibilidad objetiva, permiso informal y formulación de peticiones amables en tiempo presente.",
        "Afirmativo: Sujeto + can + Verbo en forma base desnuda + Complemento. Negativo: Sujeto + cannot (can't) + Verbo en forma base + Complemento. Interrogativo: Can + Sujeto + Verbo en forma base + Complemento? Respuestas cortas: Yes, Sujeto + can / No, Sujeto + can't.",
        "Los verbos modales auxiliares forman una categoría sintáctica aristocrática y anómala en la lengua inglesa. A diferencia de los verbos ordinarios plenos, los modales poseen tres características intrínsecas inquebrantables que simplifican enormemente su uso una vez asimiladas: en primer lugar, son completamente invariables y carecen de cualquier flexión morfológica de persona (jamás añaden '-s' en tercera persona singular: se dice 'he can', terminantemente prohibido 'he cans'). En segundo lugar, van seguidos directamente del infinitivo desnudo sin la partícula 'to' (bare infinitive: 'I can swim', nunca 'I can to swim'). En tercer lugar, son operadores sintácticos autosuficientes que no toleran jamás el auxilio de 'do' ni 'does' para negar o interrogar ('Can you help me?', 'He can't come', nunca 'Do you can help me?'). El modal 'can' ostenta múltiples funciones pragmáticas cotidianas: expresa habilidad o talento adquirido ('She can speak three languages fluently', 'He can play the violin'), posibilidad circunstancial ('We can meet this afternoon if you are free'), solicitud cortés de favores o peticiones directas ('Can you open the window, please?'), y concesión o denegación de permiso en registros informales ('You can park your car here'). La forma negativa plena se escribe en una sola palabra continua ('cannot', nunca separada 'can not') y su contracción fonética habitual es 'can't'. En el plano fonético surge una distinción diatópica de gran relevancia: mientras que en American English 'can't' se pronuncia con la vocal anterior abierta tensa /kænt/, en British English estándar (Received Pronunciation) se vocaliza con una vocal posterior larga y profunda /kɑːnt/, permitiendo distinguir de inmediato la variedad del hablante.",
        [
            "Invariabilidad absoluta de persona: Can no sufre cambio alguno con He, She o It: 'She can code in Python' (la forma 'cans' es agramatical).",
            "Régimen de Infinitivo Desnudo (Bare Infinitive): Tras can el verbo principal se sitúa sin la partícula 'to': 'I can speak' (correcto), 'I can to speak' (incorrecto).",
            "Autosuficiencia en preguntas y negaciones: Can se invierte directamente para preguntar y añade 'not' sin auxiliares do/does: 'Can he swim?' / 'No, he cannot'.",
            "Ortografía singular de CANNOT: La negación plena se escribe como una sola palabra sin espacio intermedio: 'cannot'.",
            "Contracción oral CAN'T: La forma abreviada más común es 'can't' (/kænt/ en US, /kɑːnt/ en UK).",
            "Peticiones de cortesía: Se emplea can para solicitar favores cotidianos de forma amable: 'Can you please pass the salt?' o 'Can I borrow your pen?'.",
            "Expresión de percepción sensorial involuntaria: En inglés, los verbos de los sentidos (see, hear, smell, taste, feel) se conjugan idiomáticamente con can para indicar percepción presente: 'I can hear music' (oigo música), 'I can see the mountains' (veo las montañas).",
            "Respuestas breves de cortesía: Afirmativo: 'Yes, I can' / 'Yes, she can'. Negativo: 'No, I can't' / 'No, they can't'. No se añade el verbo principal en la respuesta corta."
        ],
        [
            "She can speak Spanish, English, and Portuguese fluently, and she can also understand technical documents in Italian. (Ella puede hablar español, inglés y portugués con fluidez, y también puede entender documentos técnicos en italiano).",
            "Can you please help me carry these heavy scientific equipment boxes up to the third-floor laboratory? (¿Puedes por favor ayudarme a llevar estas pesadas cajas de equipo científico hasta el laboratorio del tercer piso?).",
            "We cannot complete the final economic analysis today because our statistical software is temporarily offline. (No podemos completar el análisis económico final hoy porque nuestro software estadístico está temporalmente desconectado).",
            "I can see the iconic Golden Gate Bridge clearly from my apartment window on bright sunny mornings. (Puedo ver el emblemático puente Golden Gate claramente desde la ventana de mi departamento en mañanas brillantes y soleadas)."
        ],
        [
            "He can play the classical cello exceptionally well, but he cannot read complex orchestral music sheets easily. (Él puede tocar el violonchelo clásico excepcionalmente bien, pero no puede leer partituras orquestales complejas con facilidad).",
            "Can I have a glass of tap water and the dessert menu, please? Certainly, madam, I will bring them immediately. (¿Puedo pedir un vaso de agua del grifo y el menú de postres, por favor? Ciertamente, señora, los traeré de inmediato).",
            "You can't leave your bicycle parked in front of the emergency exit because it obstructs the hospital corridor. (No puedes dejar tu bicicleta estacionada frente a la salida de emergencia porque obstruye el pasillo del hospital).",
            "The university students can access the extensive online digital library at any time during the examination period. (Los estudiantes universitarios pueden acceder a la extensa biblioteca digital en línea en cualquier momento durante el período de exámenes)."
        ],
        [
            {"speaker": "Lucas (US)", "text": "Hey Maya, can you drive a manual transmission car? My friend needs someone to drive his truck.", "translation": "Hola Maya, ¿puedes conducir un auto de transmisión manual? Mi amigo necesita a alguien que conduzca su camioneta."},
            {"speaker": "Maya (UK)", "text": "Yes, I can! Most people in Britain learn to drive manual cars. What time does he need help?", "translation": "¡Sí, puedo! La mayoría de las personas en Gran Bretaña aprenden a conducir autos manuales. ¿A qué hora necesita ayuda?"},
            {"speaker": "Lucas (US)", "text": "Can you meet him at the warehouse around two o'clock this afternoon?", "translation": "¿Puedes encontrarte con él en el almacén alrededor de las dos de la tarde hoy?"},
            {"speaker": "Maya (UK)", "text": "I can't at two because I have a lecture, but I can easily be there by three o'clock.", "translation": "No puedo a las dos porque tengo una conferencia, pero puedo estar allí fácilmente para las tres en punto."},
            {"speaker": "Lucas (US)", "text": "That works out great! Can you give him a quick call to confirm the arrangement?", "translation": "¡Eso funciona de maravilla! ¿Puedes hacerle una llamada rápida para confirmar el arreglo?"},
            {"speaker": "Maya (UK)", "text": "Certainly, I will ring him straight away. Don't worry at all.", "translation": "Ciertamente, lo llamaré de inmediato. No te preocupes en absoluto."}
        ],
        [
            "Añadir la 's' de tercera persona: decir 'She cans swim'. Los modales son invariables; debe ser 'She can swim'.",
            "Colocar la partícula 'to' tras can: decir 'I can to drive'. Can rige infinitivo desnudo: 'I can drive'.",
            "Usar el auxiliar do/does para interrogar o negar: formular 'Do you can speak English?' o 'He doesn't can come'. Lo correcto es 'Can you speak English?' y 'He can't come'.",
            "Separar 'cannot' en dos palabras ('can not') en escritura formal. La ortografía canónica exige una sola palabra: 'cannot'.",
            "Traducir literalmente la percepción involuntaria: decir 'I hear a sound' en vez del idiomático 'I can hear a sound'."
        ],
        [
            "La Regla del Rey Solitario: Los modales como 'can' son reyes autosuficientes: nunca permiten que auxiliares plebeyos (do/does) los ayuden, nunca llevan 'to' detrás de ellos y nunca cambian de vestimenta (sin 's').",
            "Diferencia auditiva británica vs americana: En US 'can't' rima con 'pant' (/æ/ plana). En UK 'can't' rima con 'plant' (/ɑː/ profunda y alargada).",
            "Fórmula de rescate para favores: Memoriza la estructura automática: 'Can you please + [verbo base]?' para pedir cualquier favor en cualquier país anglófono con absoluta educación."
        ],
        "https://www.englisch-hilfen.de/en/grammar/can.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 15: Present Continuous I: Formación del Gerundio (-ING)
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_15",
        "Clase 15: Present Continuous I: Formación del Gerundio (-ING)",
        "A1",
        "Tiempos Verbales Continuos",
        "El presente continuo describe procesos dinámicos que se encuentran en pleno desarrollo temporal en el instante mismo de la enunciación, estructurándose mediante el verbo auxiliar to be y el participio presente con sufijo -ing.",
        "Afirmativo: Sujeto + am/is/are + Verbo con sufijo -ING + Complemento. Negativo: Sujeto + am/is/are + not + Verbo-ING. Pregunta: Am/Is/Are + Sujeto + Verbo-ING + Complemento? Marcadores temporales: now, right now, at the moment, currently.",
        "El Present Continuous (también denominado Present Progressive) introduce el aspecto verbal durativo o cursivo en la gramática inglesa. Mientras que el Present Simple visualiza las acciones de manera estática, habitual o permanente ('I work in an office'), el Present Continuous focaliza la acción como un evento dinámico, transitorio y no concluido que se desenvuelve activamente ante los ojos del hablante ('I am working on a new project right now'). La arquitectura sintáctica de este tiempo es compuesta y requiere indispensablemente dos componentes obligatorios: el verbo copulativo 'to be' funcionando como auxiliar flexivo concordado en tiempo presente (am, is, are) más el verbo léxico principal transformado en participio presente mediante el sufijo flexivo '-ing'. Omitir cualquiera de estos dos elementos genera de inmediato una cláusula rota o agramatical (decir 'I working' o 'I am work' son faltas graves). La adición del sufijo '-ing' se rige por normas ortográficas precisas: la regla general simplemente anexa '-ing' al infinitivo base ('read' -> 'reading', 'play' -> 'playing'). Si el verbo finaliza en una letra '-e' muda no pronunciada, dicha vocal se elide antes de colocar el sufijo ('write' -> 'writing', 'make' -> 'making', 'dance' -> 'dancing'); sin embargo, si la terminación es '-ee' doble, se preserva íntegramente ('see' -> 'seeing', 'agree' -> 'agreeing'). Si un verbo monosilábico o bisilábico acentuado en la última sílaba finaliza en el esquema de una sola consonante precedida de una sola vocal (regla C-V-C), la consonante final debe duplicarse para proteger la calidad de la vocal breve ('run' -> 'running', 'sit' -> 'sitting', 'swim' -> 'swimming', 'begin' -> 'beginning'). Por último, los verbos que terminan en el diptongo escrito '-ie' transforman dichas letras en la semivocal 'y' antes de recibir el sufijo ('die' -> 'dying', 'lie' -> 'lying', 'tie' -> 'tying').",
        [
            "Regla ortográfica general (+ING): Añade -ing al verbo base: study -> studying, walk -> walking, watch -> watching, listen -> listening.",
            "Regla de la E muda elidida: Elimina la 'e' final antes de añadir -ing: write -> writing, drive -> driving, take -> taking, come -> coming, live -> living.",
            "Regla de doble EE conservada: Mantén la doble 'e': see -> seeing, agree -> agreeing, flee -> fleeing.",
            "Regla de duplicación C-V-C: Duplica la consonante final en verbos de 1 sílaba con 1 vocal + 1 consonante: run -> running, sit -> sitting, stop -> stopping, swim -> swimming, get -> getting, plan -> planning.",
            "Excepción de C-V-C con W, X, Y: Las semivocales y consonantes w, x, y jamás se duplican: snow -> snowing, fix -> fixing, play -> playing.",
            "Regla de transformación de -IE a -Y: Verbos terminados en -ie cambian a -y: die -> dying, lie -> lying, tie -> tying.",
            "Diferencia ortográfica US vs. UK con la consonante L final: En British English, la 'l' final siempre se duplica tras una vocal (travel -> travelling, cancel -> cancelling); en American English no se duplica si el acento recae en la primera sílaba (travel -> traveling, cancel -> canceling).",
            "Marcadores temporales canónicos del presente continuo: at the moment, right now, currently, today, this week, listen!, look!."
        ],
        [
            "The senior software engineers are developing an innovative mobile security application at the tech incubator right now. (Los ingenieros de software sénior están desarrollando una aplicación móvil de seguridad innovadora en la incubadora tecnológica ahora mismo).",
            "Look! The high-speed express train is arriving at the platform, so please step behind the yellow safety line. (¡Mira! El tren expreso de alta velocidad está llegando al andén, así que por favor retrocede detrás de la línea amarilla de seguridad).",
            "She is traveling across California this month to conduct field research on sustainable agricultural practices. (Ella está viajando a través de California este mes para llevar a cabo investigaciones de campo sobre prácticas agrícolas sostenibles).",
            "Why are you sitting in the dark? I am preparing my visual presentation slides for tomorrow's business conference. (¿Por qué estás sentado a oscuras? Estoy preparando mis diapositivas de presentación visual para la conferencia de negocios de mañana)."
        ],
        [
            "The medical researchers are currently conducting clinical trials in three different university hospitals in London. (Los investigadores médicos están actualmente llevando a cabo ensayos clínicos en tres hospitales universitarios distintos en Londres).",
            "Listen! The choir is singing a traditional choral melody inside the historic cathedral in Canterbury. (¡Escucha! El coro está cantando una melodía coral tradicional dentro de la histórica catedral en Canterbury).",
            "He is travelling to Edinburgh by coach because the railway workers are currently staging a scheduled strike. (Él está viajando a Edimburgo en autobús de larga distancia porque los trabajadores ferroviarios están realizando actualmente una huelga programada).",
            "We are planning an academic symposium on environmental science to be held at Oxford University next term. (Estamos planificando un simposio académico sobre ciencia ambiental que se celebrará en la Universidad de Oxford el próximo trimestre)."
        ],
        [
            {"speaker": "Dylan (US)", "text": "Hey Jessica, what are you doing in the university computer lab so late this evening?", "translation": "Hola Jessica, ¿qué estás haciendo en el laboratorio de computación universitario tan tarde esta noche?"},
            {"speaker": "Jessica (UK)", "text": "I am writing my final dissertation chapter. The submission portal is closing at midnight!", "translation": "Estoy escribiendo mi capítulo final de tesis. ¡El portal de entregas se cierra a la medianoche!"},
            {"speaker": "Dylan (US)", "text": "Are your group partners helping you, or are they already celebrating at the student cafe?", "translation": "¿Te están ayudando tus compañeros de grupo, o ya están celebrando en la cafetería estudiantil?"},
            {"speaker": "Jessica (UK)", "text": "They are reviewing the statistical charts right now in the library reading room.", "translation": "Ellos están revisando los gráficos estadísticos ahora mismo en la sala de lectura de la biblioteca."},
            {"speaker": "Dylan (US)", "text": "That is great teamwork! I am working on my graphic design project right across the hall.", "translation": "¡Ese es un gran trabajo en equipo! Yo estoy trabajando en mi proyecto de diseño gráfico justo al otro lado del pasillo."},
            {"speaker": "Jessica (UK)", "text": "Splendid. Let's finish our work quickly so that we can grab a hot cup of tea together.", "translation": "Espléndido. Terminemos nuestro trabajo rápidamente para que podamos tomar una taza de té caliente juntos."}
        ],
        [
            "Omitir el verbo auxiliar to be: decir 'I reading a book' o 'She working today'. Siempre debe incluirse to be: 'I am reading', 'She is working'.",
            "Omitir el sufijo -ing: decir 'She is write an essay'. El verbo principal debe portar -ing: 'She is writing an essay'.",
            "No duplicar la consonante en verbos C-V-C: escribir 'runing', 'swiming' o 'stoping'. La forma correcta es 'running', 'swimming', 'stopping'.",
            "Duplicar incorrectamente la 'w' o la 'y': escribir 'playying' o 'snowwing'. Las semivocales nunca se duplican.",
            "Mantener la 'e' muda al añadir -ing: escribir 'writeing' o 'makeing'. La 'e' muda debe suprimirse: 'writing', 'making'."
        ],
        [
            "La Fórmula del Tren de Dos Vagones: El Presente Continuo es un tren que no avanza sin sus dos vagones obligatorios: Vagón 1 = [TO BE] (am, is, are) + Vagón 2 = [VERBO-ING]. Si falta uno, el tren descarrila.",
            "Regla del Semáforo C-V-C: Mira las últimas tres letras del verbo. Si ves [Consonante - Vocal - Consonante], duplica la última letra antes de cruzar hacia el sufijo -ING (ejemplo: s-t-o-p -> stopping).",
            "Señales de Alerta de Continuo: Palabras como 'Look!', 'Listen!', 'Right now' y 'At the moment' son reflectores que iluminan el presente continuo instantáneo."
        ],
        "https://www.englisch-hilfen.de/en/grammar/present_progressive_form.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 16: Present Continuous II: En el Momento vs. Verbos de Estado
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_16",
        "Clase 16: Present Continuous II: En el Momento vs. Verbos de Estado",
        "A1",
        "Semántica & Tiempos Verbales",
        "Los verbos de estado (stative verbs) expresan condiciones mentales, emocionales, sensoriales o posesivas permanentes y no admiten habitualmente formas continuas en -ing, contrastando con los verbos dinámicos de acción.",
        "Verbos dinámicos (Acción física observable -> admiten Present Continuous): run -> is running, cook -> is cooking. Verbos estáticos (Estados cognitivos, perceptivos o de propiedad -> exigen Present Simple): know, like, understand, believe, want, need, belong.",
        "Uno de los descubrimientos lingüísticos más reveladores para el estudiante de nivel A1 es la división semántica fundamental de los verbos en dos universos opuestos: los verbos dinámicos (action / dynamic verbs) y los verbos estáticos o de estado (stative verbs). Los verbos dinámicos implican una actividad deliberada, tangible o física que tiene un principio y un final visibles (eat, play, write, drive, study, run). Estos verbos funcionan con absoluta fluidez tanto en Present Simple para expresar hábitos ('I run every morning') como en Present Continuous para reflejar el proceso en curso ('I am running now'). En contraposición radical, los verbos de estado no describen acciones físicas activas, sino condiciones estáticas involuntarias, sentimientos interiores, percepciones sensoriales, posesión jurídica o procesos cognitivos de la mente humana. Por esta razón ontológica, el idioma inglés estándar rechaza el uso de formas progresivas con verbos estáticos, incluso cuando el estado está ocurriendo en el preciso instante en que se habla. Decir 'I am knowing the answer' o 'I am wanting a coffee right now' es categóricamente agramatical en inglés estándar; la norma lingüística impone imperativamente el uso del Present Simple: 'I know the answer' y 'I want a coffee right now'. Los verbos estáticos se agrupan en cuatro categorías semánticas primordiales: Pensamiento y opinión (know, believe, understand, remember, forget, mean, think), Emociones y deseos (like, love, hate, want, need, prefer, care), Posesión y relación (have, own, belong, possess, contain), y Percepción sensorial pasiva (hear, see, smell, taste, feel, seem). Mención especial merecen verbos polivalentes como 'have', 'think' y 'taste': cuando 'have' significa posesión estática ('I have a car') no admite -ing; pero cuando describe una acción dinámica experiencial ('I am having lunch', 'She is having a shower'), el presente continuo es plenamente legítimo y natural.",
        [
            "Categoría de Cognición y Mente: know, believe, understand, think (opinión), remember, forget, doubt. Regla: Nunca usan -ing para expresar el estado mental presente ('I understand', nunca 'I am understanding').",
            "Categoría de Emoción y Deseo: love, like, hate, dislike, want, need, prefer, wish. Regla: Siempre en presente simple ('She wants an apple', nunca 'She is wanting').",
            "Categoría de Posesión y Pertenencia: have (posesión), own, belong, possess, consist of. Regla: 'This book belongs to me' (nunca 'is belonging').",
            "Categoría de Percepción Sensorial: see, hear, sound, smell, taste, seem, appear. Regla: 'It sounds wonderful' (nunca 'is sounding').",
            "Doble sentido dinámico vs. estático de THINK: Como opinión estática: 'I think that this film is boring' (creo). Como proceso mental voluntario dinámico: 'I am thinking about my future' (estoy reflexionando).",
            "Doble sentido dinámico vs. estático de HAVE: Como posesión pura: 'I have two brothers'. Como acción de comer o vivir una experiencia: 'We are having breakfast' / 'They are having a great party'.",
            "Doble sentido dinámico vs. estático de SEE: Como percepción visual o comprensión: 'I see what you mean'. Como reunión o cita programada: 'I am seeing my doctor tomorrow morning'.",
            "Uso publicitario vs. norma estándar: Eslóganes comerciales célebres como 'I'm lovin' it' son licencias poéticas intencionadas del marketing para transmitir informalidad juvenil, pero se consideran faltas gramaticales en contextos académicos y evaluaciones oficiales."
        ],
        [
            "I understand the theoretical principles of this physics problem, but I am still working on the mathematical calculations. (Entiendo los principios teóricos de este problema de física, pero todavía estoy trabajando en los cálculos matemáticos).",
            "She wants to apply for a master's scholarship in Washington because she believes that international education expands career opportunities. (Ella quiere solicitar una beca de maestría en Washington porque cree que la educación internacional expande las oportunidades profesionales).",
            "We are having lunch at a downtown Italian restaurant while our colleagues are discussing the quarterly budget. (Estamos almorzando en un restaurante italiano en el centro mientras nuestros colegas están discutiendo el presupuesto trimestral).",
            "Do you know the young woman who is speaking with the university dean near the main auditorium? (¿Conoces a la joven que está hablando con el decano universitario cerca del auditorio principal?)."
        ],
        [
            "He owns a charming historic cottage in the Cotswolds, and he is currently renovating the stone exterior walls. (Él es dueño de una encantadora casa de campo histórica en los Cotswolds, y actualmente está renovando los muros exteriores de piedra).",
            "I think this antique teapot belongs to my grandmother because it has her family monogram engraved on the silver handle. (Creo que esta tetera antigua pertenece a mi abuela porque tiene el monograma de su familia grabado en el asa de plata).",
            "Listen to that traditional orchestra! The music sounds extraordinary in this grand Victorian concert hall. (¡Escucha aquella orquesta tradicional! La música suena extraordinaria en esta gran sala de conciertos victoriana).",
            "Are you seeing the department head this afternoon to discuss your research proposal on renewable energy? (¿Te vas a reunir con el jefe de departamento esta tarde para discutir tu propuesta de investigación sobre energía renovable?)."
        ],
        [
            {"speaker": "Brandon (US)", "text": "Are you ready to order lunch, Sarah? The waiter is coming over to our table right now.", "translation": "¿Estás lista para ordenar el almuerzo, Sarah? El camarero está viniendo hacia nuestra mesa ahora mismo."},
            {"speaker": "Sarah (UK)", "text": "I think so. I want the vegetable soup and a fresh garden salad. What are you having?", "translation": "Creo que sí. Quiero la sopa de verduras y una ensalada fresca de huerto. ¿Qué vas a comer tú?"},
            {"speaker": "Brandon (US)", "text": "I am having the grilled chicken sandwich. I really love the homemade bread they bake here.", "translation": "Voy a comer el sándwich de pollo a la parrilla. Realmente me encanta el pan casero que hornean aquí."},
            {"speaker": "Sarah (UK)", "text": "Do you remember the name of that delicious dessert we tasted here last month?", "translation": "¿Recuerdas el nombre de aquel delicioso postre que probamos aquí el mes pasado?"},
            {"speaker": "Brandon (US)", "text": "Yes, I remember it clearly! It was a warm apple tart with vanilla bean ice cream.", "translation": "¡Sí, lo recuerdo claramente! Era una tarta de manzana tibia con helado de vainilla."},
            {"speaker": "Sarah (UK)", "text": "Brilliant. Let's order two portions of that as well. It sounds absolutely delightful.", "translation": "Estupendo. Ordenemos dos porciones de eso también. Suena absolutamente delicioso."}
        ],
        [
            "Usar verbos estáticos en continuo: decir 'I am wanting a coffee' o 'She is knowing the answer'. La regla exige presente simple: 'I want a coffee', 'She knows the answer'.",
            "Decir 'I am having a car' para indicar propiedad. 'Have' de posesión no admite -ing; debe decirse 'I have a car'.",
            "Usar 'is belonging' en lugar de 'belongs': decir 'This pen is belonging to me'. La forma correcta es 'This pen belongs to me'.",
            "Confundir 'think' de opinión con 'think' de proceso: decir 'I am thinking that you are right' (error: debe ser 'I think you are right').",
            "Imitar eslóganes publicitarios informales en exámenes formales: escribir 'I am loving this subject' en lugar de 'I love this subject'."
        ],
        [
            "La Prueba de la Foto Fija: Si cierras los ojos e imaginas la escena, ¿puedes tomar una foto de alguien 'sabiendo' o 'entendiendo'? No, porque es un estado interno mental invisible -> usa PRESENT SIMPLE.",
            "Semáforo Rojo para Verbos del Corazón y la Mente: LIKE, LOVE, HATE, KNOW, WANT, NEED tienen luz roja permanente para el sufijo -ING en inglés culto.",
            "Recuerda la regla de HAVE: Si puedes sustituir 'have' por 'eat' o 'drink' ('having lunch', 'having coffee'), ¡adelante con el -ING! Si significa 'poseer en mi bolsillo o garaje', el -ING está prohibido."
        ],
        "https://agendaweb.org/verbs/state-action-verbs.html"
    ))

    # -------------------------------------------------------------------------
    # Clase 17: Pronombres Interrogativos WH- (Question Words)
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_17",
        "Clase 17: Pronombres Interrogativos WH- (Question Words)",
        "A1",
        "Sintaxis & Preguntas",
        "Las partículas interrogativas Wh- encabezan preguntas abiertas orientadas a recabar información específica sobre identidades, lugares, momentos temporales, motivos lógicos, modos operativos o selecciones discretas.",
        "Fórmula general estándar: Wh- Word + Auxiliar (do/does/is/are/can) + Sujeto + Verbo principal en forma base + Complemento? Inventario nuclear: Who (identidad de persona), Where (lugar espacial), When (momento temporal), Why (motivo causal), What (cosa o actividad), Which (selección limitada), How (modo o estado).",
        "Las preguntas abiertas en inglés son gobernadas por un conjunto de pronombres y adverbios interrogativos denominados tradicionalmente 'Wh- Question Words' debido a que, a excepción de 'How', todos ellos inician ortográficamente con las letras 'wh'. En la tipología sintáctica, se diferencian radicalmente de las preguntas polares cerradas (Yes/No questions) porque no solicitan una mera ratificación o desmentido con 'sí' o 'no', sino la aportación de datos sustantivos nuevos en la respuesta. Para estructurar estas oraciones con absoluta precisión se aplica la fórmula mnemotécnica universal 'QUASI': QU (Question word) + A (Auxiliary: do, does, am, is, are, can) + S (Subject) + I (Infinitive verb). Cada partícula Wh- tiene una especialización funcional rigurosa: 'WHO' indaga exclusivamente sobre seres humanos o identidades personales ('Who is your professor?'). 'WHERE' pregunta sobre coordenadas espaciales, direcciones y ubicaciones ('Where do you live?'). 'WHEN' consulta por hitos temporales ('When does the train arrive?'). 'WHY' explora causas y justificaciones, demandando sistemáticamente la conjunción causal 'Because' en la respuesta explicativa ('Why are you late? - Because I missed the bus'). 'WHAT' inscribe una indagación amplia y abierta sobre objetos, profesiones o conceptos entre un universo ilimitado de posibilidades ('What do you study?'). En contraste crucial, 'WHICH' se utiliza cuando existe un conjunto restringido, cerrado y delimitado de opciones concretas para elegir ('Which color do you prefer, the blue or the red one?'). Finalmente, 'HOW' interroga sobre procedimientos y estados de salud o bienestar ('How does this machine work?'), operando además como modificador de grado con adjetivos y cuantificadores: 'How old' (edad), 'How much' (precio o cantidad incontable), 'How many' (cantidad contable) y 'How often' (frecuencia).",
        [
            "WHO (/huː/): Pregunta por personas: 'Who is that woman over there? - She is our department director'.",
            "WHERE (/wɛər/): Pregunta por lugares geográficos y espaciales: 'Where do you work? - I work in San Salvador'.",
            "WHEN (/wɛn/): Pregunta por tiempo, fechas y momentos cronológicos: 'When does the lecture begin? - At nine o'clock'.",
            "WHY (/waɪ/): Pregunta por causas o motivos lógicos; se responde con BECAUSE: 'Why are you learning English? - Because it is essential for my career'.",
            "WHAT (/wɒt/ en UK, /wɑːt/ en US): Pregunta abierta por cosas, profesiones y acciones entre opciones ilimitadas: 'What is your favorite subject?'.",
            "WHICH (/wɪtʃ/): Pregunta por una selección entre un número limitado y conocido de alternativas: 'Which laptop is yours, the silver one or the black one?'.",
            "HOW (/haʊ/): Pregunta por modo, método o estado de salud: 'How do you commute to work? - By subway'.",
            "Combinaciones especiales de HOW: How old (edad), How many (cantidad plural), How much (precio/incontable), How often (frecuencia), How far (distancia física), How long (duración temporal)."
        ],
        [
            "Where do you usually study when you need complete silence to prepare for your final university examinations? (¿Dónde estudias habitualmente cuando necesitas silencio completo para prepararte para tus exámenes universitarios finales?).",
            "Why is the research team analyzing the environmental samples in the chemistry laboratory on a Saturday morning? (¿Por qué el equipo de investigación está analizando las muestras ambientales en el laboratorio de química un sábado por la mañana?).",
            "What kind of computer programming languages do you recommend for an undergraduate student who wants to develop software? (¿Qué tipo de lenguajes de programación computacional recomiendas para un estudiante de pregrado que quiere desarrollar software?).",
            "Which of these two academic scholarship programs provides full medical coverage and living accommodation in Boston? (¿Cuál de estos dos programas de becas académicas ofrece cobertura médica completa y alojamiento en Boston?)."
        ],
        [
            "When does the morning express train from Manchester arrive at London Euston railway station? (¿Cuándo llega el tren expreso matutino de Manchester a la estación de trenes de Londres Euston?).",
            "Who is responsible for organizing the annual scientific conference on sustainable architecture at Oxford University? (¿Quién es responsable de organizar la conferencia científica anual sobre arquitectura sostenible en la Universidad de Oxford?).",
            "How often do the municipal transport authorities inspect the safety equipment in the underground tunnels? (¿Con qué frecuencia inspeccionan las autoridades municipales de transporte los equipos de seguridad en los túneles del metro?).",
            "How much does a weekly travel pass for all central London underground zones cost for university students? (¿Cuánto cuesta un pase de viaje semanal para todas las zonas del metro del centro de Londres para estudiantes universitarios?)."
        ],
        [
            {"speaker": "Caleb (US)", "text": "Hello! Where are you going with that heavy stack of textbooks, Megan?", "translation": "¡Hola! ¿A dónde vas con esa pesada pila de libros de texto, Megan?"},
            {"speaker": "Megan (UK)", "text": "I am heading towards the main university library. I need to prepare for my history seminar.", "translation": "Me dirijo hacia la biblioteca universitaria principal. Necesito prepararme para mi seminario de historia."},
            {"speaker": "Caleb (US)", "text": "When is your presentation scheduled? I thought it was on Friday morning.", "translation": "¿Cuándo está programada tu presentación? Pensé que era el viernes por la mañana."},
            {"speaker": "Megan (UK)", "text": "No, it is tomorrow at ten o'clock! Why did you think it was on Friday?", "translation": "¡No, es mañana a las diez en punto! ¿Por qué pensaste que era el viernes?"},
            {"speaker": "Caleb (US)", "text": "Because the professor mentioned Friday earlier this week. Which topic did you choose?", "translation": "Porque el profesor mencionó el viernes a principios de esta semana. ¿Cuál tema elegiste?"},
            {"speaker": "Megan (UK)", "text": "I chose the Industrial Revolution and its economic impact on British cities.", "translation": "Elegí la Revolución Industrial y su impacto económico en las ciudades británicas."}
        ],
        [
            "Omitir el auxiliar en preguntas Wh-: decir 'Where you live?' o 'What you do?'. La fórmula obligatoria exige el auxiliar: 'Where do you live?' / 'What do you do?'.",
            "Confundir 'What' y 'Which': usar 'what' cuando las opciones están delimitadas a dos o tres elementos (ej. señalar dos camisas y decir 'What do you like?'; debe ser 'Which do you like?').",
            "Responder a 'Why' con 'Why': decir 'Why I was tired'. La pregunta es 'Why', pero la respuesta causal siempre es 'Because': 'Because I was tired'.",
            "Preguntar la edad con 'How many years': decir 'How many years do you have?'. La estructura auténtica en inglés es 'How old are you?'.",
            "Alterar el orden sujeto-auxiliar: decir 'Where she is going?' en vez de 'Where is she going?'."
        ],
        [
            "El Acrónimo Mágico QUASI: [QU]estion word + [A]uxiliar (do/does/is/are/can) + [S]ujeto + [I]nfinitivo base. Si sigues esta secuencia matemática, el 100% de tus preguntas en inglés serán perfectas.",
            "La Prueba de la Elección (What vs. Which): Si tienes el universo entero de posibilidades por delante -> usa WHAT. Si tienes 2, 3 o un menú limitado de opciones tangibles en la mano -> usa WHICH.",
            "Asociación Causal: Recuerda la pareja inseparable: La pregunta empieza con 'WHY' y la respuesta empieza con 'BECAUSE'."
        ],
        "https://www.englisch-hilfen.de/en/grammar/fragewoerter.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 18: Verbos de Preferencia: Like, Love, Hate + Gerundio
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_18",
        "Clase 18: Verbos de Preferencia: Like, Love, Hate + Gerundio",
        "A1",
        "Patrones Verbales",
        "Los verbos de preferencia afectiva expresan inclinaciones, afinidades, placeres o aversiones hacia actividades generales cotidianas, rigiendo habitualmente un complemento verbal en forma de gerundio (-ing).",
        "Fórmula de preferencia habitual general: Sujeto + like / love / enjoy / hate / don't mind + Verbo-ING: I like swimming / She loves reading / They hate waking up early. Fórmula condicional o preferencia puntual con WOULD: Sujeto + would like / would love + TO + Verbo base: I would like to visit London.",
        "En la sintaxis de la complementación verbal en inglés, los verbos que expresan emociones de atracción o rechazo respecto a actividades lúdicas o rutinarias (verbs of preference) poseen un comportamiento sintáctico fascinante que suele generar dudas sobre cuándo emplear una forma en '-ing' o un infinitivo con 'to'. La regla rectora general del inglés moderno establece que cuando nos referimos al disfrute intrínseco, a la experiencia afectiva o al desagrado que experimentamos al llevar a cabo una actividad en general, los verbos 'like' (gustar), 'love' (encantar / amar), 'enjoy' (disfrutar), 'dislike' (desagradar), 'hate' (detestar / odiar) y la locución cortés 'don't mind' (no importar / no tener inconveniente) se complementan de manera extraordinariamente natural con un gerundio en '-ing' ('I love dancing', 'She enjoys swimming in the sea', 'They hate waiting in long queues'). Este gerundio no funciona como tiempo presente continuo de acción instantánea, sino como un sustantivo verbal derivado equivalente a los infinitivos nominales del español ('me gusta bailar', 'disfruta nadar', 'odian esperar'). No obstante, existe un matiz de variación dialectal y aspectual de gran interés: en American English es muy frecuente y aceptado alternar entre el gerundio y el infinitivo con 'to' sin alteración sustancial del significado ('I like to read' e 'I like reading' se perciben como prácticamente equivalentes). En British English, por el contrario, existe una sutil distinción semántica: 'I like reading' significa que disfruto del placer de la lectura, mientras que 'I like to visit the dentist twice a year' significa que no necesariamente disfruto el acto en sí, pero lo considero una acción sensata, higiénica o conveniente. Por encima de todo, existe una regla prohibitiva categórica que ningún estudiante debe violar jamás: la presencia del auxiliar modal condicional 'WOULD' antes de estos verbos anula de inmediato el gerundio y exige inexorablemente un infinitivo con 'to': se debe decir 'I would like to drink a coffee' o 'I'd love to go with you', estando terminantemente prohibido decir 'I would like drinking' en inglés estándar.",
        [
            "Complementación canónica con Gerundio (-ING): Expresa gusto o aversión general por la actividad: 'I like reading historical novels', 'She hates washing the dishes'.",
            "Verbo ENJOY: A diferencia de like o love, el verbo 'enjoy' exige EXCLUSIVAMENTE el gerundio (-ing); jamás admite un infinitivo con to: 'We enjoyed watching the movie' (correcto), 'We enjoyed to watch' (inadmisible).",
            "Locución DON'T MIND: Significa no tener objeción ni molestia hacia una acción; rige rigurosamente -ing: 'I don't mind helping you with the homework'.",
            "Regla de oro con WOULD: Si el verbo de preferencia va precedido por 'would' ('would like', 'would love', 'would prefer', 'would hate'), el verbo siguiente DEBE ir obligatoriamente en infinitivo con TO: 'I would like to order lunch' (nunca 'I would like ordering').",
            "Matiz británico de convención sensata (LIKE TO): En UK, 'like to + infinitivo' denota hábitos que se consideran beneficiosos aunque no proporcionen deleite: 'I like to check my emails before I leave the office'.",
            "Negación en oraciones de preferencia: Sujeto + don't / doesn't + like/love/enjoy + Verbo-ING: 'He doesn't like waking up early on weekends'.",
            "Preguntas sobre preferencias: Do/Does + Sujeto + like/enjoy + Verbo-ING?: 'Do you like cooking dinner for your friends?'.",
            "Verbo PREFER: Puede construirse con gerundio comparando dos actividades con la preposición TO: 'I prefer walking to driving' (prefiero caminar que conducir)."
        ],
        [
            "She really loves hiking in the national parks of northern California and taking landscape photographs during sunrise. (A ella realmente le encanta hacer senderismo en los parques nacionales del norte de California y tomar fotografías de paisajes durante el amanecer).",
            "My roommate enjoys listening to classical music while he is working on his software engineering projects. (Mi compañero de cuarto disfruta escuchar música clásica mientras está trabajando en sus proyectos de ingeniería de software).",
            "I would like to make an appointment with the academic counselor to discuss my university course options for next semester. (Me gustaría programar una cita con el consejero académico para discutir mis opciones de cursos universitarios para el próximo semestre).",
            "They don't like driving in congested downtown traffic during morning rush hour, so they prefer taking the commuter train. (A ellos no les gusta conducir en el tráfico congestionado del centro durante la hora pico matutina, así que prefieren tomar el tren de cercanías)."
        ],
        [
            "He enjoys cycling along the scenic riverbanks in Cambridge, but he absolutely hates riding in heavy rain. (Él disfruta andar en bicicleta por las pintorescas orillas del río en Cambridge, pero detesta absolutamente montar bajo lluvia intensa).",
            "We would love to visit the British Museum this Saturday if you are free to join our study group. (Nos encantaría visitar el Museo Británico este sábado si estás libre para unirte a nuestro grupo de estudio).",
            "I don't mind staying late at the laboratory to help clean and sterilize the scientific glassware. (No me molesta quedarme hasta tarde en el laboratorio para ayudar a limpiar y esterilizar el material de vidrio científico).",
            "She prefers reading printed books to browsing digital editions because she finds paper more comfortable for her eyes. (Ella prefiere leer libros impresos a hojear ediciones digitales porque encuentra el papel más cómodo para sus ojos)."
        ],
        [
            {"speaker": "Lucas (US)", "text": "What do you like doing in your free time on the weekend, Charlotte? Do you enjoy outdoor sports?", "translation": "¿Qué te gusta hacer en tu tiempo libre el fin de semana, Charlotte? ¿Disfrutas los deportes al aire libre?"},
            {"speaker": "Charlotte (UK)", "text": "I love playing tennis with my sister, and I also enjoy baking sourdough bread at home.", "translation": "Me encanta jugar tenis con mi hermana, y también disfruto hornear pan de masa madre en casa."},
            {"speaker": "Lucas (US)", "text": "That is awesome! Would you like to play a tennis match at the university sports complex on Saturday?", "translation": "¡Eso es genial! ¿Te gustaría jugar un partido de tenis en el complejo deportivo universitario el sábado?"},
            {"speaker": "Charlotte (UK)", "text": "I would love to! I don't mind waking up early if you want to book the court for nine o'clock.", "translation": "¡Me encantaría! No me importa levantarme temprano si quieres reservar la cancha para las nueve en punto."},
            {"speaker": "Lucas (US)", "text": "Perfect. I hate playing in the midday heat, so nine in the morning works out great for me.", "translation": "Perfecto. Detesto jugar con el calor del mediodía, así que las nueve de la mañana me funciona de maravilla."},
            {"speaker": "Charlotte (UK)", "text": "Brilliant. Let's confirm the reservation online right now.", "translation": "Estupendo. Confirmemos la reserva en línea ahora mismo."}
        ],
        [
            "Usar infinitivo con enjoy: decir 'I enjoy to swim'. El verbo enjoy exige obligatoriamente gerundio: 'I enjoy swimming'.",
            "Usar gerundio con 'would like': decir 'I would like drinking a tea'. La presencia de 'would' impone infinitivo con to: 'I would like to drink a tea'.",
            "Traducir literalmente 'me gusta': decir 'Me likes reading'. En inglés la persona que experimenta el gusto es el sujeto formal gramatical: 'I like reading'.",
            "Omitir el gerundio en la segunda actividad con prefer: decir 'I prefer walk than drive'. La estructura idiomática comparativa es 'I prefer walking to driving'.",
            "Confundir 'I like reading' (hábito general) con 'I am reading' (acción que ocurre ahora mismo)."
        ],
        [
            "La Regla del Interruptor de WOULD: 'Like / Love / Hate' por sí solos adoran la fiesta de la diversión continua en -ING ('I like singing'). Pero en cuanto el caballero formal 'WOULD' entra por la puerta, todos se ponen corbata y exigen 'TO' ('I would like to sing').",
            "Mnemotecnia para ENJOY: Visualiza la palabra 'enJOY' como 'en-JOY-ing' (la terminación -ing está tatuada permanentemente en su ADN).",
            "Compara tus gustos en una tabla de dos columnas: En la izquierda escribe 'Things I love doing' (listening to music, playing video games) y en la derecha 'Things I would like to do this year' (to visit New York, to learn French)."
        ],
        "https://www.englisch-hilfen.de/en/grammar/gerund_infinitive.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 19: El Modo Imperativo para Órdenes e Instrucciones
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_19",
        "Clase 19: El Modo Imperativo para Órdenes e Instrucciones",
        "A1",
        "Modo & Instrucciones",
        "El modo imperativo expresa órdenes directas, mandatos, prohibiciones de seguridad, directrices técnicas, recetas y sugerencias inclusivas sin enunciar un pronombre sujeto explícito.",
        "Afirmativo: Verbo base en infinitivo desnudo (sin to) + Complemento: Open your book / Turn left at the corner / Please sit down. Negativo: Do not (Don't) + Verbo base + Complemento: Don't touch that button / Do not enter. Sugerencia inclusiva con la 1ª persona plural: Let's (Let us) + Verbo base: Let's study together / Let's not waste time.",
        "El modo imperativo (Imperative Mood) representa una de las estructuras más directas y concisas de la sintaxis inglesa. A diferencia de las oraciones declarativas habituales, donde la presencia de un sujeto léxico o pronominal explícito es obligatoria (recordemos que el inglés es un idioma 'non-pro-drop' que exige siempre pronombres como I, you, he, she), el imperativo constituye la excepción canónica por excelencia: el sujeto de segunda persona ('you', ya sea singular o plural) está implícito, presupuestado y omitido en la enunciación. Por consiguiente, la oración afirmativa se inicia directamente con la forma base desnuda del verbo infinitivo sin 'to' y sin ninguna desinencia morfológica ('Press the green button to start the engine', 'Take two tablets after meals', 'Listen carefully to the instructions'). Para formular mandatos negativos o prohibiciones categóricas, el inglés recurre invariablemente al auxiliar 'Do not' en lenguaje formal, señalética institucional o manuales técnicos, y a la contracción 'Don't' en el habla cotidiana coloquial ('Don't smoke in this area', 'Do not disclose your password'). Cuando el emisor desea formular una orden o sugerencia participativa que lo involucre a sí mismo junto a su interlocutor en primera persona plural (el equivalente al 'vayamos', 'estudiemos' o 'hagamos' del español), el inglés utiliza la contracción imperativa fosilizada 'Let's' (abreviatura de 'let us') seguida del infinitivo desnudo ('Let's begin the meeting', 'Let's order a pizza'). Para suavizar el tono perentorio del imperativo y transformarlo en una petición cortés o instrucción hospitalaria, se inserta estratégicamente la palabra de cortesía 'Please' al inicio o al final de la cláusula ('Please close the door' o 'Close the door, please').",
        [
            "Estructura del imperativo afirmativo: Comienza directamente con el verbo base en infinitivo sin 'to': 'Stand up', 'Listen to me', 'Read page 12'.",
            "Estructura del imperativo negativo: Siempre comienza con DON'T o DO NOT, independientemente de quién sea el receptor: 'Don't be afraid', 'Do not park here'.",
            "Prohibición de pronombres sujeto: Está prohibido colocar pronombres de sujeto como 'you' en el imperativo ordinario: decir 'You open the window' suena a recriminación o mandato agresivo.",
            "Imperativo inclusivo con LET'S: Se usa 'Let's + verbo base' para incluir al hablante y al oyente: 'Let's go', 'Let's take a break', 'Let's review the notes'.",
            "Negación de LET'S: Para negar una propuesta inclusiva se añade 'not' tras Let's: 'Let's not argue', 'Let's not arrive late'.",
            "Cortesía con PLEASE: Para mitigar la aspereza del mandato se añade 'please' al inicio (sin coma: 'Please sit down') o al final (con coma: 'Sit down, please').",
            "Uso canónico en instrucciones y direcciones viales: El imperativo es la estructura exclusiva para dar direcciones: 'Turn right at the traffic lights, go straight ahead for two blocks, and cross the avenue'.",
            "El imperativo con el verbo TO BE: El verbo to be utiliza su forma base infinita BE: 'Be quiet!', 'Be careful!', 'Don't be silly!'."
        ],
        [
            "Please turn off all electronic devices and stow your carry-on luggage securely beneath the seat in front of you. (Por favor apaguen todos los dispositivos electrónicos y guarden su equipaje de mano de forma segura debajo del asiento frente a ustedes).",
            "Do not enter the hazardous chemical storage area without wearing protective goggles and rubber gloves. (No ingrese al área de almacenamiento de químicos peligrosos sin usar gafas protectoras y guantes de goma).",
            "Take two tablets with a full glass of water every eight hours after meals until the antibiotic course is finished. (Tome dos tabletas con un vaso lleno de agua cada ocho horas después de las comidas hasta terminar el ciclo de antibióticos).",
            "Let's review the main findings of our scientific research paper before we submit it to the academic journal. (Revisemos los hallazgos principales de nuestro artículo de investigación científica antes de enviarlo a la revista académica)."
        ],
        [
            "Mind the gap between the train and the platform edge when alighting at underground stations across London. (Cuidado con el espacio entre el tren y el borde del andén al descender en las estaciones de metro en todo Londres).",
            "Turn left immediately after passing the ancient stone church and continue along the high street until you reach the post office. (Gire a la izquierda inmediatamente después de pasar la antigua iglesia de piedra y continúe a lo largo de la calle principal hasta llegar a la oficina de correos).",
            "Please do not leave your personal belongings unattended at any time while waiting in the railway terminal. (Por favor no deje sus pertenencias personales desatendidas en ningún momento mientras espera en la terminal ferroviaria).",
            "Let's not make a hasty decision regarding the funding proposal until we consult with the head of department. (No tomemos una decisión apresurada respecto a la propuesta de financiación hasta que consultemos con el jefe de departamento)."
        ],
        [
            {"speaker": "Lucas (US)", "text": "Excuse me, officer, how do I get to the metropolitan art museum from this intersection?", "translation": "Disculpe, oficial, ¿cómo llego al museo de arte metropolitano desde esta intersección?"},
            {"speaker": "Officer Smith (UK)", "text": "Go straight ahead for three blocks, turn right at the traffic lights, and cross the pedestrian bridge.", "translation": "Vaya todo recto durante tres cuadras, gire a la derecha en el semáforo y cruce el puente peatonal."},
            {"speaker": "Lucas (US)", "text": "Is it within walking distance, or should I take a taxi?", "translation": "¿Está a una distancia caminable, o debería tomar un taxi?"},
            {"speaker": "Officer Smith (UK)", "text": "It is only a five-minute walk. Don't take a taxi because downtown traffic is currently congested.", "translation": "Está a solo cinco minutos a pie. No tome un taxi porque el tráfico del centro está actualmente congestionado."},
            {"speaker": "Lucas (US)", "text": "Thank you so much! Please have a wonderful rest of your day.", "translation": "¡Muchas gracias! Por favor tenga un maravilloso resto de su día."},
            {"speaker": "Officer Smith (UK)", "text": "You are very welcome. Enjoy your visit to the museum and be mindful of your personal belongings.", "translation": "De nada. Disfrute su visita al museo y esté atento a sus pertenencias personales."}
        ],
        [
            "Insertar 'you' innecesariamente: decir 'You open the door' cuando se pretende formular una instrucción neutral ('Open the door, please').",
            "Negar sin el auxiliar do: decir 'Not touch that' o 'No smoke here'. En inglés el imperativo negativo siempre exige 'Don't' o 'Do not': 'Don't touch that' / 'Do not smoke here'.",
            "Usar 'to' en el imperativo afirmativo: decir 'To sit down, please'. El imperativo es infinitivo desnudo: 'Sit down, please'.",
            "Negar 'Let's' con don't: decir 'Don't let's go'. La fórmula correcta y elegante es 'Let's not go'.",
            "Olvidar que 'to be' usa su forma infinitiva base: decir 'Are quiet!' o 'Is careful!'. Debe ser 'Be quiet!' y 'Be careful!'."
        ],
        [
            "La Regla del Cartel de Seguridad: Imagina los carteles de emergencia en un avión o edificio: son cortos, potentes y empiezan con un verbo de acción directo: PUSH, PULL, EXIT, STOP.",
            "Receta de Cocina Mnemotécnica: Abre un libro de recetas en inglés; verás que cada paso es un imperativo puro: Chop the onions, add salt, boil the water, bake for twenty minutes.",
            "El Secreto de la Amabilidad: Para transformar una orden estricta en una sugerencia cordial, simplemente ponle un envoltorio de seda agregando 'Please' al inicio o 'Let's' para invitar."
        ],
        "https://www.englisch-hilfen.de/en/grammar/imperative.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 20: Sintaxis de la Oración (S-V-O) y Respuestas Cortas
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a1_lesson_20",
        "Clase 20: Sintaxis de la Oración (S-V-O) y Respuestas Cortas",
        "A1",
        "Sintaxis Estructural",
        "El orden sintáctico fundamental de la oración enunciativa afirmativa en inglés es estrictamente fijo: Sujeto + Verbo + Objeto (S-V-O), culminando con respuestas breves estandarizadas que condensan cortesía y precisión gramatical.",
        "Orden afirmativo obligatorio: [SUJETO] + [VERBO] + [OBJETO] + [LUGAR] + [TIEMPO]: I (S) study (V) English (O) at university (Lugar) every day (Tiempo). Respuestas breves: Yes, Sujeto + Auxiliar / No, Sujeto + Auxiliar negativo: Yes, I do / No, she isn't / Yes, they can.",
        "Para culminar con maestría el nivel A1, es imprescindible consolidar la comprensión de la arquitectura sintáctica nuclear del idioma inglés: el orden rígido Sujeto-Verbo-Objeto (S-V-O) y la dinámica de las respuestas cortas de cortesía institucional. A diferencia del español, donde la riqueza de las desinencias verbales permite una asombrosa elasticidad sintáctica (podemos alterar el orden a nuestro antojo diciendo 'Ayer compró María un libro nuevo', 'Un libro nuevo compró María ayer' o 'María compró un libro nuevo ayer'), el inglés es una lengua analítica posicional. Esto significa que el significado, la función gramatical y la inteligibilidad de las palabras dependen casi exclusivamente de la casilla posicional que ocupan dentro de la oración. Romper este orden lineal genera de inmediato perplejidad y agramaticalidad extrema en un angloparlante nativo. El sujeto debe anteceder siempre al verbo, el verbo debe unirse a su objeto directo sin que ningún adverbio o frase circunstancial los separe ('I drink black coffee every morning', jamás 'I drink every morning black coffee'), y las circunstancias adverbiales accesorias deben ordenarse típicamente siguiendo la regla espacial y temporal de [LUGAR antes de TIEMPO] ('We arrived at the airport at six o'clock'). Asimismo, en el plano de la interacción comunicativa, el inglés no concibe la respuesta monosilábica tajante: responder a una pregunta formulada con un seco 'Yes' o 'No' se percibe socialmente como una muestra de desinterés, frialdad o descortesía. El estándar de etiqueta anglófona exige la fórmula de respuesta corta (short answer), donde se recupera el sujeto en forma pronominal y se remata con el verbo auxiliar exacto con el que se formuló la pregunta: 'Do you study here? - Yes, I do' / 'Is she ready? - No, she isn't' / 'Can they assist us? - Yes, they can'.",
        [
            "Esquema lineal inquebrantable S-V-O: Sujeto + Verbo + Objeto es el esqueleto de toda cláusula declarativa: 'The scientist (S) published (V) an article (O)'.",
            "Inseparabilidad de Verbo y Objeto: Ningún adverbio de tiempo o lugar puede colocarse entre el verbo y su objeto: 'I like apples very much' (correcto), 'I like very much apples' (inadmisible).",
            "Regla de Lugar antes de Tiempo (Place before Time): Cuando concurren expresiones de lugar y tiempo al final de la oración, el lugar precede al tiempo: 'She arrived at the station (Lugar) at ten o'clock (Tiempo)'.",
            "Prohibición de oraciones sin sujeto (Non-pro-drop): Jamás omitas el sujeto gramatical en inglés: 'It is important to practice' (correcto), 'Is important to practice' (incorrecto).",
            "Estructura de respuesta corta afirmativa: 'Yes,' + [Pronombre Sujeto] + [Auxiliar en forma plena sin contracción]: 'Yes, I am', 'Yes, he does', 'Yes, they will'.",
            "Estructura de respuesta corta negativa: 'No,' + [Pronombre Sujeto] + [Auxiliar contraído]: 'No, I'm not', 'No, he doesn't', 'No, they aren't', 'No, she can't'.",
            "Correspondencia de auxiliar en respuestas cortas: El auxiliar de la respuesta debe ser un reflejo exacto del auxiliar que abrió la pregunta: 'Did you...? -> Yes, I did', 'Are you...? -> Yes, I am'.",
            "Posición de los adjetivos respecto al sustantivo: En el sintagma nominal, los adjetivos atributivos anteceden rigurosamente al sustantivo: 'a modern laboratory', 'an expensive car' (nunca 'a laboratory modern')."
        ],
        [
            "The international engineering students completed their collaborative research project at the laboratory yesterday evening. (Los estudiantes de ingeniería internacional completaron su proyecto de investigación colaborativa en el laboratorio ayer por la tarde).",
            "Do you speak fluent English with your business partners during international conferences? Yes, I do; we communicate very effectively. (¿Hablas inglés fluido con tus socios comerciales durante conferencias internacionales? Sí; nos comunicamos muy eficazmente).",
            "Is Dr. Martinez available in his academic office for student consultations this afternoon? No, he isn't; he is lecturing at another campus. (¿Está el Dr. Martínez disponible en su oficina académica para consultas de estudiantes esta tarde? No; está dando conferencias en otro campus).",
            "She bought a beautiful handmade leather briefcase in central Florence during her European summer holiday. (Ella compró un hermoso maletín de cuero hecho a mano en el centro de Florencia durante sus vacaciones de verano europeas)."
        ],
        [
            "The head of department presented the revised academic syllabus to all university professors at the faculty meeting this morning. (El jefe de departamento presentó el temario académico revisado a todos los profesores universitarios en la reunión de la facultad esta mañana).",
            "Are they traveling up to Edinburgh by train for the annual medical symposium on Friday? Yes, they are; their tickets are already booked. (¿Están ellos viajando a Edimburgo en tren para el simposio médico anual el viernes? Sí; sus billetes ya están reservados).",
            "Can you assist the new exchange pupils with their library registration forms before noon? Yes, I can; I will guide them immediately. (¿Puedes ayudar a los nuevos alumnos de intercambio con sus formularios de registro de biblioteca antes del mediodía? Sí; los guiaré de inmediato).",
            "We enjoyed a delightful traditional roast dinner with our flatmates in the dining room last Sunday. (Disfrutamos de una encantadora cena tradicional asada con nuestros compañeros de piso en el comedor el domingo pasado)."
        ],
        [
            {"speaker": "Alexander (US)", "text": "Hello Beatrice! Do you enjoy studying computer science at this university?", "translation": "¡Hola Beatrice! ¿Disfrutas estudiar ciencias de la computación en esta universidad?"},
            {"speaker": "Beatrice (UK)", "text": "Yes, I do! The professors explain complex concepts very clearly, and the modern laboratories are fantastic.", "translation": "¡Sí! Los profesores explican conceptos complejos muy claramente, y los laboratorios modernos son fantásticos."},
            {"speaker": "Alexander (US)", "text": "Are you working on that artificial intelligence assignment with your study group right now?", "translation": "¿Estás trabajando en esa tarea de inteligencia artificial con tu grupo de estudio ahora mismo?"},
            {"speaker": "Beatrice (UK)", "text": "No, I'm not. We finished our project yesterday afternoon in the central library.", "translation": "No. Terminamos nuestro proyecto ayer por la tarde en la biblioteca central."},
            {"speaker": "Alexander (US)", "text": "Can you review my code for five minutes if you have some spare time?", "translation": "¿Puedes revisar mi código durante cinco minutos si tienes algo de tiempo libre?"},
            {"speaker": "Beatrice (UK)", "text": "Yes, I can! Let's sit at that corner table and take a look at it together.", "translation": "¡Sí, puedo! Sentémonos en aquella mesa de la esquina y echémosle un vistazo juntos."}
        ],
        [
            "Separar el verbo y su objeto directo con expresiones adverbiales: decir 'I read every day the newspaper'. El orden canónico exige: 'I read the newspaper every day'.",
            "Alterar el orden de lugar y tiempo: decir 'I arrived at ten o'clock at the station'. La norma de prioridad situacional exige lugar antes de tiempo: 'I arrived at the station at ten o'clock'.",
            "Contraer respuestas cortas afirmativas: responder 'Yes, I'm' o 'Yes, he's'. Es terminantemente obligatorio usar la forma plena: 'Yes, I am' / 'Yes, he is'.",
            "Responder solo 'Yes' o 'No' a superiores o colegas: resulta seco y poco cortés en la cultura anglófona. Siempre se acompaña del sujeto y auxiliar: 'Yes, I do' / 'No, thank you'.",
            "Colocar el adjetivo detrás del sustantivo por calco del español: decir 'a car red' o 'a student intelligent'. El adjetivo calificador siempre precede al sustantivo en inglés: 'a red car', 'an intelligent student'."
        ],
        [
            "La Regla del Tren S-V-O: Visualiza tu oración en inglés como tres vagones rígidos: Locomotora = Sujeto, Vagón de Carga = Verbo, Último Vagón = Objeto. ¡Jamás pongas la carga delante de la locomotora!",
            "Regla Espacio-Temporal PT (Place before Time): Piensa en el orden alfabético de la física o geografía: Primero dónde estás en el mapa (PLACE), luego qué hora marca tu reloj (TIME).",
            "La Ley de la Cortesía Anglosajona: Acostúmbrate a que cada vez que digas 'Yes' o 'No', tu mente agregue automáticamente dos palabras protectoras de cortesía: [Pronombre] + [Auxiliar] ('Yes, I do', 'No, I don't')."
        ],
        "https://www.englisch-hilfen.de/en/grammar/word_order.htm"
    ))

    return lessons

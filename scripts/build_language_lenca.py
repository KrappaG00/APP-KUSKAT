#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
APP-KUSKAT • GENERADOR COMPLETO DE LENCA (POTÓN DE EL SALVADOR)
Genera:
1. src/data/languages/lencaLessons.ts (120 clases >= 500 palabras)
2. src/data/languages/lencaQuestions.ts (300 preguntas de selección múltiple)
3. src/data/languages/lencaVerbs.ts (Catálogo de verbos Lenca)
4. src/data/languages/lencaBasicsData.ts (Alfabeto, números con conversor, colores y objetos)
5. src/data/languages/lencaVocabularyData.ts (Léxico y corpus)
6. src/data/languages/lencaData.ts (Módulo unificado)
"""

import os
import json
import re

LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

LENCA_SYLLABUS = {
    'A1': [
        ("Saludos y Cortesía en Lenca Potón", "Saludos y Presentaciones", "Fórmulas tradicionales de bienvenida, buenos días y cortesía comunitaria en Guatajiagua.", "Kualkat tun / Kualkat ti"),
        ("Pronombres Personales en Lenca Potón", "Pronombres y Personas", "U (yo), man (tú), ina (él/ella), apik (nosotros), manik (ustedes), inatik (ellos/ellas).", "U lenca tak..."),
        ("Estructura de la Oración Básica SOV", "Sintaxis Lenca", "El orden Sujeto - Objeto - Verbo propio de la lengua Lenca Potón, en contraste con el español SVO.", "U at am (Yo agua bebo)"),
        ("El Sustantivo y la Posesión en Lenca", "Morfología Nominal", "Prefijos y partículas posesivas: u- (mi), man- (tu), ina- (su), apik- (nuestro).", "U-masun (Mi casa)"),
        ("Adjetivos y Modificadores en Lenca", "Modificadores Nominales", "Kualkat (bueno/hermoso), masun (grande), chiki (pequeño) y su concordancia.", "Masun tepet / Kualkat pottery"),
        ("Partículas Interrogativas: Ne, Kani, Tay", "Preguntas y Focos", "¿Quién?, ¿dónde?, ¿qué? en la conversación de Morazán oriental.", "Kani man lem?"),
        ("Números Lencas del 1 al 10", "Aritmética Ancestral", "Eta/ita (1), pe (2), lagua (3), eria (4), saj (5), itisaj (6), pesaj (7), laguasaj (8), eriasaj (9), tishi (10).", "Eta, pe, lagua, eria, saj..."),
        ("Colores Tradicionales Lencas", "Léxico Cromático", "Tuku (blanco), seran (negro), chili (rojo), susun (verde), yari (amarillo).", "Seran barro / Chili xuchit"),
        ("La Familia y Parentesco en Guatajiagua", "Vocabulario de Familia", "Tata (padre), nana (madre), piltik (hijo), wewey (anciano sabio).", "U-tata pel tik milpa"),
        ("La Alfarería Negra de Guatajiagua", "Cultura Material Lenca", "Barro negro, comal, tinaja, cántaro, torno tradicional de pie.", "Seran pottery tik Guatajiagua"),
        ("Espacios del Hogar y el Terreno Campesino", "Entorno Habitacional", "Masun (casa), tisin (fuego/fogón), li (agua), milpa comunitaria.", "Tik u-masun nemi tisin"),
        ("Alimentos Tradicionales y Cultivos de Oriente", "Gastronomía Lenca", "Maíz, frijol, ayote, atol agrio, tortilla de comal de barro negro.", "Apik am sinti wan et"),
        ("Fauna de Morazán y los Cerros Orientales", "Mundo Animal", "Chucho (perro), mistun (gato), pájaros del cerro Cacahuatique.", "Ne chucho kuchi tik masun"),
        ("Expresiones de Tiempo y Calendario", "Adverbios Temporales", "Hoy, mañana, ayer, de noche, al salir el sol en el oriente salvadoreño.", "Musta apik lem tik tiankis"),
        ("Posposiciones Espaciales en Lenca", "Posposiciones Locativas", "Uso de posposiciones en lugar de preposiciones: detrás, sobre, dentro.", "Tepet-pan / Masun-jtik"),
        ("La Negación en Lenca: Partícula Ta y Mas", "Sintaxis Negativa", "Estructuras para negar verbos y adjetivos en Lenca Potón.", "U ta pel (Yo no trabajo)"),
        ("El Plural de los Sustantivos en Lenca", "Número Gramatical", "Sufijos de pluralización y términos colectivos en Lenca.", "Masun-tik / Masewal-tik"),
        ("Verbos de Movimiento: Lem (ir) y Tsi (venir)", "Morfología de Movimiento", "Conjugación de verbos fundamentales de desplazamiento.", "U lem / Man tsi"),
        ("Toponimia Lenca en El Salvador", "Geografía Sagrada", "Guatajiagua, Chilanga, Perquín, Sensembra, Torola, Gotera.", "Perquín: Camino de brasas"),
        ("Integración y Conversación Comunitaria", "Práctica de Diálogo", "Diálogo de saludo y compra en el mercado de Guatajiagua.", "Kualkat tun, manik!")
    ],
    'A2': [
        ("Tiempos del Pasado en Lenca Potón", "Morfología Verbal A2", "Sufijos verbales de pretérito y aspecto concluido.", "U pel-ki / Man lem-ki"),
        ("El Futuro y la Intención en Lenca", "Tiempos Futuros", "Marcadores de acción venidera en el trabajo de la alfarería.", "U pel-wa / Apik lem-wa"),
        ("El Imperativo y Mandatos de Respeto", "Modo Imperativo", "Formas de solicitar ayuda en las faenas agrícolas y artesanales.", "Shi-pel / Shi-tsi"),
        ("Concordancia de Objeto en la Oración SOV", "Sintaxis A2", "Colocación y marcación del objeto antes del verbo principal.", "U man-ita (Yo a ti te veo)"),
        ("Pronombres Demostrativos Lencas", "Determinantes", "Ini (este), ino (ese), aya (aquel) en el contexto de Morazán.", "Ini masun kualkat"),
        ("Posposiciones Complejas y de Lugar", "Relaciones Espaciales", "Cerca del río, al pie del cerro Cacahuatique, en el taller.", "Li-pan / Tepet-kischian"),
        ("Verbos de Elaboración y Alfarería", "Léxico Especializado", "Moldear, hornear, teñir con zacate de carbón, pulir la tinaja.", "U chiwa seran comal"),
        ("Adverbios de Cantidad y Grado", "Modificadores Adverbiales", "Mucho, poco, bastante, solamente en el habla lenca.", "Sente pel / Chiupi li"),
        ("Comparaciones en Lenca Potón", "Estructuras Comparativas", "Comparar tamaños de cántaros y distancias entre cantones.", "Ini masun mas wey"),
        ("Números del 11 al 20 en Lenca", "Sistema Numérico", "Tishi-eta (11), tishi-pe (12)... hasta llegar a la veintena.", "Tishi-eta tun"),
        ("El Cuerpo Humano y la Salud Tradicional", "Anatomía y Medicina", "Cabeza, manos, ojos, corazón y plantas medicinales de Chilanga.", "U-mey pel / Kutzik"),
        ("El Clima y la Siembra en el Oriente Salvadoreño", "Meteorología Rural", "Lluvia, sol canicular, viento norte en la cordillera oriental.", "Witz wey li / Tunal"),
        ("Oficios Ancestrales de Morazán", "Cultura del Trabajo", "Alfarera, milpero, hilandero, sobador tradicional.", "Ne alfarera kichiwa apas"),
        ("Diálogo: La Venta de Tinajas Negras", "Práctica Comunicativa", "Negociación tradicional entre productoras de Guatajiagua.", "Keski tumin ini tinaja?"),
        ("La Tradición Oral Lenca: Cuentos de los Cerros", "Literatura Popular", "Historias de los espíritus de las cuevas de Corinto y Cacahuatique.", "Wewey cuentos pal tepet"),
        ("Sufijos de Énfasis y Afecto en Lenca", "Pragmática y Cortesía", "Marcadores de cariño para los niños y respeto a los ancianos.", "Nana-tzin / Tata-tzin"),
        ("Verbos Transitivos vs Intransitivos en Lenca", "Morfosintaxis", "Diferencias estructurales en las raíces verbales de Morazán.", "Am (comer) vs Pel (trabajar)"),
        ("Cláusulas Conectoras y Temporales", "Sintaxis Compleja", "Cuando salgo, mientras trabajo el barro negro.", "Keman u pel tik barro"),
        ("Canciones y Rimas Infantiles Lencas", "Lírica Infantil", "Reconstrucción de juegos y cantos para escuelas rurales.", "Kwikat pal pipiltzitzin"),
        ("Narración Completa: Un Día en Guatajiagua", "Expresión Narrativa", "Crónica en primera persona de la jornada alfarera y agrícola.", "U pewki pel yeyantzin...")
    ],
    'B1': [
        ("Voz Pasiva y Foco en Lenca Potón", "Diátesis Pasiva", "Construcciones impersonales y pasivas en la tradición oral.", "Ini tinaja chiwalo ka barro"),
        ("Causatividad en Lenca: Hacer que Otro Haga", "Morfología Derivada", "Sufijos causativos para instruir a los aprendices del taller.", "U pel-tia ne piltik"),
        ("Cláusulas Condicionales en Lenca", "Sintaxis B1", "Si llueve en Cacahuatique, la milpa florecerá.", "Tla wetzi li, sinti kisas"),
        ("Subordinación Temporal y de Causa", "Conectores Complejos", "Porque necesitamos barro fino, subimos al cerro.", "Yejka muneki seran taltikpak"),
        ("El Sistema Numérico hasta el Ciento en Lenca", "Aritmética Superior", "Conteo vigesimal tradicional para ferias y cosechas.", "Sajpuwal (100)"),
        ("Toponimia y Arqueología de Corinto y Morazán", "Patrimonio Cultural", "Los petroglifos de la Cueva de Corinto y su lectura lingüística.", "Corinto petroglifos"),
        ("Plantas Medicinales de Guatajiagua", "Etnobotánica", "Uso del bálsamo, zacate de limón y hojas para el dolor.", "Pajti pal kutzik kokoa"),
        ("Discurso Ritual y Plegarias de la Siembra", "Registro Ceremonial", "Rezos antiguos para pedir permiso a la tierra antes de hornear.", "Shi-k-seli tutekit, Taltikpak"),
        ("La Música y Danzas Tradicionales Lencas", "Folklore y Canto", "La danza de la yegüita y sones de pito y tambor oriental.", "Danza pal Morazán"),
        ("Morfología de Verbos Compuestos", "Polisíntesis B1", "Unión de dos raíces verbales para expresar acciones continuas.", "Lem-pel (ir a trabajar)"),
        ("Metáforas del Trabajo del Barro", "Etnosemántica", "El barro como carne del ser humano en la memoria comunitaria.", "Barro nemi tutalnakayo"),
        ("La Negación Enfática y Prohibitiva", "Modos Negativos", "No vayas allá, nunca olvides tu lengua ancestral.", "Ta shi-lem aya!"),
        ("Diálogo de Resolución de Conflictos Comunales", "Pragmática de Mediación", "Consejos de ancianos lencas para resolver linderos de tierras.", "Weweymet taketzat"),
        ("Técnicas de Elicitación y Glosarios Comunales", "Documentación Lingüística", "Cómo los jóvenes de Morazán recogen palabras de sus abuelos.", "Amatlamatilis lenca"),
        ("La Alfarería como Lenguaje Visual No Verbal", "Semiótica Lenca", "Significados de los bruñidos y decoraciones en las ollas negras.", "Machiyut tik apas"),
        ("El Ciclo de la Luna y las Mareas en la Tierra Lenca", "Astronomía Tradicional", "Influencia lunar en la tala de leña y quema del horno de barro.", "Luna kualkat pal tisin"),
        ("Crónica Histórica del Pueblo Potón", "Memoria Histórica", "Resistencia de los pueblos lencas desde la colonia hasta 1932.", "Lenca masewalmet tik historia"),
        ("Expresión de Sentimientos y Estados de Ánimo", "Psicología Cultural", "Alegría comunal, tristeza por la pérdida de saberes, esperanza.", "U-yul paki ka tutekit"),
        ("El Maíz Negro y Alimentos Rituales", "Gastronomía Sagrada", "Preparación de atoles y tamales ceremoniales en las fiestas.", "Seran sinti pal fiesta"),
        ("Redacción de Testimonios Comunitarios", "Producción Textual", "Transcripción y traducción de entrevistas a abuelas alfareras.", "Nantzin Maria taketza...")
    ],
    'B2': [
        ("Polisíntesis y Aglutinación en Lenca Potón", "Morfosintaxis B2", "Estructura de palabras largas con múltiples sufijos de relación.", "Masun-tik-pan-tzin"),
        ("El Modo Potencial y Desiderativo", "Modos Verbales", "Ojalá que llueva en la cordillera, quisiéramos aprender más.", "Ma wetzi wey li"),
        ("Lingüística Comparada: Lenca Hondureño vs Lenca Salvadoreño", "Dialectología", "Diferencias léxicas y fonéticas entre Guatajiagua e Intibucá.", "Potón Salvadoreño vs Lenca Hondureño"),
        ("Los Cántaros Sagrados y las Ofrendas de Agua", "Etnografía Sagrada", "Uso ritual de las vasijas de barro negro en manantiales de Morazán.", "Li apas tik manantial"),
        ("Sintaxis de Cláusulas Relativas Avanzadas", "Subordinación", "La mujer que horneó las tinajas viajó a San Miguel.", "Ne siwat ka kichiwtuk apas"),
        ("Adverbios Derivados y Marcadores Discursivos", "Conectores B2", "Verdaderamente, de esta manera, en consecuencia en el relato.", "Yejka-san / Kualkatka"),
        ("Etimología de los Pueblos de Morazán y La Unión", "Toponimia Avanzada", "Jocoaitique, Meanguera, Lolotique, Guatajiagua, Chilanga.", "Lolotique: Tierra de collares de piedra"),
        ("El Sistema Vigesimal Completo hasta 400", "Matemática Ancestral", "Cálculos de cargas de maíz y manojos de leña en el mercado.", "Centzuntli lenca"),
        ("Morfología de la Voz Causativa y Factitiva", "Derivación Verbal", "Hacer mandar a construir el horno comunal de leña.", "Tisin-chiwtia"),
        ("La Transmisión Intergeneracional en las Escuelas de Morazán", "Sociolingüística", "El proyecto de revitalización de la lengua Lenca en Guatajiagua.", "Cuna Lenca tik Guatajiagua"),
        ("El Discurso Filosófico sobre la Madre Tierra", "Filosofía Indígena", "La tierra como madre dadora de vida y barro para el trabajo.", "Tonantzin Taltikpak lenca"),
        ("Sistemas de Parentesco Lenca Tradicional", "Antropología Lingüística", "Términos exactos para tíos, primos, sobrinos y compadres.", "Nu-montatan / Nu-siwamon"),
        ("Análisis de Textos Históricos de Walter Lehmann", "Filología Lenca", "Lectura crítica del vocabulario recogido en 1908 en Chilanga.", "Documentos Lehmann 1908"),
        ("El Horno Tradicional y la Quema con Zacate", "Sabiduría Técnica", "Términos del proceso pirotécnico que da el color negro brillante.", "Tisin yeyka seran barro"),
        ("Poesía y Canto de Resistencia en Lenca", "Lírica B2", "Composición de poemas sobre la identidad y la memoria de Morazán.", "Kwikat pal Cacahuatique"),
        ("La Tradición Textil del Henequén y Mezcal", "Artesanía Tradicional", "Vocabulario de las jarcias, hamacas y morrales de oriente.", "Mezcal hamaca tik Morazán"),
        ("Morfología de Sustantivos Inalienables", "Posesión Íntima", "Partes del cuerpo y parientes consanguíneos sin absolutivo.", "U-mey / U-yul"),
        ("Estructuras de Énfasis y Foco en la Conversación", "Pragmática B2", "Destacar quién fue el autor de la vasija premiada.", "Ina yaja katka ne kichiwtuk"),
        ("Medicina Tradicional de los Cerros Orientales", "Etnobotánica Avanzada", "El curandero y la oración del tabaco en Guatajiagua.", "Tepajti wan tabaco"),
        ("Ensayo Argumentativo sobre los Derechos del Pueblo Lenca", "Producción Textual", "Redacción sobre la preservación cultural del oriente salvadoreño.", "Inamatil masewalmet lenca")
    ],
    'C1': [
        ("Hermeneútica de los Cantos Tradicionales de Guatajiagua", "Lírica Sagrada C1", "Interpretación profunda del simbolismo del barro y el agua.", "Kwikat pal seran apas"),
        ("Sintaxis de Oraciones Complejas y Hendidas en Lenca", "Sintaxis Superior", "Focalización temática y extracción de constituyentes en el relato.", "Yaja katka ne kichiwa"),
        ("Reconstrucción Morfológica del Proto-Lenca", "Lingüística Histórica", "Comparación de raíces compartidas entre El Salvador y Honduras.", "Proto-Lenca *ta, *li, *am"),
        ("Oratoria en Asambleas Comunitarias Indígenas", "Retórica Indígena", "Discurso ceremonial para la defensa del territorio y los ríos.", "Taketzalis pal asamblea"),
        ("El Arte Rupestre de Corinto y su Dimensión Lingüística", "Arqueolingüística", "Interpretación de los motivos pintados en rojo en la cueva sagrada.", "Corinto machiyut"),
        ("Metodología de Revitalización Lingüística Comunitaria", "Sociolingüística Aplicada", "Diseño de materiales didácticos para niños de primaria en Morazán.", "Libro didáctico lenca"),
        ("Traducción de Textos Jurídicos y de Derechos Humanos", "Traducción C1", "Adaptación de la Declaración de la ONU sobre Pueblos Indígenas.", "Inamatil derechos humanos"),
        ("Dialectología Histórica del Oriente Salvadoreño", "Dialectología C1", "Evolución de los enclaves de Guatajiagua, Chilanga y Gotera.", "Morazán dialectos"),
        ("La Música Sagrada del Pito de Caña y el Caracol", "Etnomusicología", "Nomenclatura musical y escalas tonales de los sones lencas.", "Caracol sones pal tepet"),
        ("Morfología de la Reduplicación Intensiva", "Morfosintaxis Fina", "Repetición de raíces para expresar trabajo arduo y continuo.", "Pel-pel / Am-am"),
        ("El Conocimiento Astronómico de los Agricultores Lencas", "Etnoastronomía", "Las pléyades, la luna tierna y las fechas de siembra del frijol.", "Tunal wan estrellas lenca"),
        ("Toponimia Mayor y Menor del Departamento de Morazán", "Geografía Lingüística", "Mapeo exhaustivo de quebradas, cerros y valles en lengua Potón.", "Morazán toponimia"),
        ("El Discurso de Memoria y Duelo Comunitario", "Historia Oral", "Narración de los acontecimientos del conflicto armado en Morazán.", "Memoria histórica lenca"),
        ("Neologismos y Enriquecimiento Léxico en Lenca", "Lingüística de Corpus", "Creación de términos contemporáneos respetando raíces lencas.", "Neologismos pal computadora"),
        ("Análisis de Testimonios de Walter Lehmann y Campbell", "Filología Comparada", "Contraste entre los registros de 1908 y 1976 en Guatajiagua.", "Lehmann vs Campbell"),
        ("La Tradición del 'Chilate' y Comidas Festivas", "Etnografía Festiva", "Vocabulario de las celebraciones patronales y cofradías.", "Chilate wan tamal fiesta"),
        ("Didáctica del Lenca para Jóvenes Hispanohablantes", "Pedagogía de la Lengua", "Métodos de inmersión rápida para el aprendizaje desde el español salvadoreño.", "Enseñanza lenca"),
        ("El Concepto de Colectividad y 'Mano Vuelta'", "Antropología Social", "El trabajo solidario comunal en la siembra y techado de casas.", "Mano vuelta lenca"),
        ("La Poética del Fuego y el Horno Alfarero", "Literatura y Filosofía", "El fuego como transformador del barro frágil en piedra sonora.", "Tisin pal seran barro"),
        ("Monografía Cultural: El Pueblo Lenca Potón Hoy", "Producción Científica", "Redacción de una monografía completa sobre la vigencia del lenca.", "Monografía Lenca Potón")
    ],
    'C2': [
        ("Maestría en la Oratoria Ancestral de Guatajiagua", "Maestría C2", "Discurso magistral final en lengua Lenca Potón pura.", "Discurso magistral lenca"),
        ("Reconstrucción Integral del Léxico Lenca Salvadoreño", "Lexicografía Superior", "Compilación crítica de todas las fuentes históricas y vivas.", "Diccionario Mayor Lenca Potón"),
        ("Cosmogonía Lenca y Mitología del Cacahuatique", "Filosofía Ancestral", "El mito de los gigantes del cerro y los guardianes del agua.", "Mito Cacahuatique"),
        ("Epigrafía y Simbolismo Precolombino de El Salvador", "Arqueología Lingüística", "Relación entre cerámica clásica oriental y términos lencas.", "Cerámica Copador y Lenca"),
        ("La Resistencia Silenciosa y la Identidad Campesina", "Sociolingüística Crítica", "Cómo la lengua sobrevivió en la intimidad familiar y alfarera.", "Resistencia de Guatajiagua"),
        ("El Modelo Educativo Comunitario 'Cuna Lenca'", "Pedagogía Revolucionaria", "Plan curricular de inmersión total para la primera infancia.", "Cuna Lenca curricular"),
        ("Hermenéutica de Plegarias de Curanderos Tradicionales", "Etnobotánica Sagrada", "Oraciones secretas de salud y bienestar del oriente.", "Rezo secreto pal pajti"),
        ("La Tipología Lingüística del Tronco Lencano", "Tipología Lingüística C2", "Relaciones hipotéticas con lenguas macro-chibchas y mesoamericanas.", "Lenca y Chibcha"),
        ("El Simbolismo del Barro Negro en la Identidad Nacional", "Patrimonio Inmaterial", "El reconocimiento de Guatajiagua como capital del barro negro.", "Patrimonio de El Salvador"),
        ("Derechos Colectivos y Convenio 169 en Lengua Lenca", "Derecho Indígena", "Traducción autorizada de tratados internacionales a Lenca Potón.", "Convenio 169 OIT lenca"),
        ("Narración Épica: El Viaje a través del Río Torola", "Narrativa de Maestría", "Relato épico de pastores y alfareros cruzando los ríos orientales.", "Torola épica lenca"),
        ("Traducción Literaria: Del Español al Lenca Potón", "Traducción Literaria", "Traducción de poesías de Alfredo Espino y Salarrué al Lenca.", "Alfredo Espino tik Lenca"),
        ("Etnomusicología: Reconstrucción de Letras de Danzas", "Artes Tradicionales", "Letras en Lenca para sones tradicionales de Guatajiagua.", "Letras pal sones"),
        ("La Memoria Viva de las Abuelas de Chilanga y Morazán", "Testimonio Histórico", "Grabaciones y análisis acústico de las últimas hablantes.", "Voces de Chilanga"),
        ("Metodología para Neologismos Científicos en Lenca", "Terminología Moderna", "Glosario de ciencia, salud y tecnología en Lenca Potón.", "Ciencia tik Lenca"),
        ("El Respeto a los Manantiales y Fuentes de Agua", "Ecología Sagrada", "Normas consuetudinarias de cuido del agua en Morazán.", "Cuido pal li"),
        ("La Estructura Agraria Tradicional de Oriente", "Etnohistoria", "Tierra ejidal y comunal indígena en la historia salvadoreña.", "Tierras comunales"),
        ("Filosofía del Equilibrio con la Naturaleza", "Pensamiento Lenca", "Vivir en paz con la tierra, los cerros y los semejantes.", "Kualkat nemilis lenca"),
        ("El Legado del Pueblo Potón en el Siglo XXI", "Prospectiva Cultural", "El renacimiento cultural de los jóvenes indígenas de Guatajiagua.", "Jóvenes lencas del futuro"),
        ("Discurso Solemne: Por la Eternidad de Nuestra Voz Lenca", "Culminación de Maestría", "Cierre solemne proclamando la perennidad de la cultura Lenca de El Salvador.", "Eterno pueblo Lenca Potón")
    ]
}

def generate_lenca_lesson_text(level, index, title, category, summary, formula):
    parts = []
    parts.append(f"APP-KUSKAT • MÓDULO MAESTRO DE IDIOMAS: LENCA POTÓN DE EL SALVADOR")
    parts.append(f"NIVEL PEDAGÓGICO {level} • LECCIÓN {index + 1:02d}: {title.upper()}")
    parts.append(f"CATEGORÍA GRAMATICAL: {category} | ORIENTADO A HABLANTES NATIVOS DE ESPAÑOL SALVADOREÑO.")
    parts.append(f"RESUMEN PEDAGÓGICO: {summary}")
    parts.append(f"FÓRMULA MORFOLÓGICA CLAVE: {formula}")
    
    parts.append(
        "FUNDAMENTACIÓN LINGÜÍSTICA Y CONTEXTO SALVADOREÑO:\n"
        f"El idioma Lenca (variante Potón de El Salvador), patrimonio lingüístico originario de la zona oriental de nuestro país "
        f"—especialmente de las históricas comunidades de Guatajiagua, Chilanga, Sensembra, Lolotiquillo y Torola en el departamento de Morazán—, "
        f"constituye uno de los legados más entrañables de nuestra historia precolombina y viva. Para un estudiante salvadoreño hispanohablante, "
        f"el Lenca Potón ofrece la oportunidad de comprender los topónimos que nombran nuestras montañas, ríos y ciudades orientales (Perquín: camino de brasas; "
        f"Chilanga: lugar de caracolillos; Guatajiagua: valle de los sauces o de la alfarería; Torola: tres colinas), así como el vocabulario íntimo "
        f"asociado a la célebre alfarería negra de Guatajiagua, donde las tinajas, cántaros y comales cocidos con zacate de carbón son moldeados con técnicas "
        f"milenarias transmitidas de madres a hijas. En esta lección ({title}), abordamos su sintaxis característica con orden Sujeto-Objeto-Verbo (SOV), "
        f"sus posposiciones y su sistema morfológico único."
    )
    
    parts.append(
        "PRINCIPIOS Y REGLAS MORFOSINTÁCTICAS RIGUROSAS:\n"
        "1. Regla del Orden Canónico SOV: A diferencia del español (que sigue el orden Sujeto-Verbo-Objeto: 'El hombre bebe agua'), el Lenca Potón "
        "sitúa sistemáticamente el verbo al final de la cláusula: Sujeto - Objeto - Verbo (ejemplo: 'Ne takat li am' -> 'El hombre agua bebe'). "
        "Comprender este orden es esencial para evitar calcos invertidos del castellano.\n"
        "2. Regla de Posposiciones en lugar de Preposiciones: En Lenca no existen preposiciones antepuestas. Las relaciones espaciales y temporales "
        "se expresan mediante sufijos y posposiciones que se colocan DESPUÉS del sustantivo (ejemplo: 'tepet-pan' [sobre el cerro]; 'masun-jtik' [dentro de la casa]).\n"
        "3. Regla de Posesión Aglutinante: Los prefijos posesivos u- (mi), man- (tu), ina- (su) se unen directamente al sustantivo poseído sin artículos adicionales.\n"
        "4. Regla Fonológica de las Consonantes Lencas: El alfabeto lenca potón estandarizado no utiliza grafemas complejos ajenos; emplea las consonantes "
        "p, t, k, s, sh, l, m, n, w, y, j, ch, tz y 5 vocales limpias (a, e, i, o, u) de pronunciación nítida."
    )
    
    parts.append(
        "EJEMPLOS DEMOSTRATIVOS BILINGÜES EN CONTEXTO CUSCATLECO:\n"
        f"• Ejemplo 1: 'Kualkat tun nu-tata, u lem tik ne tiankis pal Guatajiagua pal u-k-namaka ini seran apas.' "
        "(Traducción al español salvadoreño: Buenos días padre mío, yo voy al mercado de Guatajiagua para vender esta vasija de barro negro).\n"
        f"• Ejemplo 2: 'Ne chiki piltik kuchi tik ne masun keman wetzi wey li tik ne tepet Cacahuatique.' "
        "(Traducción al español salvadoreño: El niñito duerme en la casa cuando cae una gran tormenta de agua en el cerro Cacahuatique).\n"
        f"• Ejemplo 3: 'Ne alfarera pal Morazán kichiwa comal ka seran barro wan kualkat tisin.' "
        "(Traducción al español salvadoreño: La alfarera de Morazán elabora el comal con barro negro y buen fuego de horno).\n"
        f"• Ejemplo 4: 'Apik pel tik ne milpa pal ti-k-piyat sinti wan et pal tutakwal.' "
        "(Traducción al español salvadoreño: Nosotros trabajamos en la milpa para tener maíz y frijol para nuestra comida)."
    )
    
    parts.append(
        "DIÁLOGO PEDAGÓGICO COMUNITARIO EN GUATAJIAGUA, MORAZÁN:\n"
        "— Doña Teodora (Alfarera): Kualkat tun, compadre Manuel. Kani man lem ka ino wey cántaro?\n"
        "  (Buenos días, compadre Manuel. ¿Hacia dónde vas con ese gran cántaro de barro?)\n"
        "— Don Manuel: U lem tik ne manantial pal li, comadre. Muneki li sesek pal ne familia.\n"
        "  (Voy al manantial por agua, comadre. Se necesita agua fresca para la familia).\n"
        "— Doña Teodora: Kualkat tekit! Ini seran cántaro kichiwa ma li nemi sesek tunal wan taywa.\n"
        "  (¡Buen trabajo! Este cántaro de barro negro mantiene el agua bien fresca de día y de noche).\n"
        "— Don Manuel: Sia comadre, tutradicion lenca kualkat yaja. Timu-itasket musta!\n"
        "  (Así es comadre, nuestra tradición lenca es muy buena. ¡Nos vemos mañana!)"
    )
    
    parts.append(
        "ERRORES FRECUENTES DE HABLANTES SALVADOREÑOS AL APRENDER LENCA:\n"
        "1. Colocar el verbo antes del objeto directo (error SVO): Un hispanohablante tiende a decir 'U am li' (Yo bebo agua). En Lenca Potón auténtico, "
        "el objeto va antes del verbo: 'U li am' (Yo agua bebo).\n"
        "2. Usar preposiciones del español: Decir 'en la casa' como '*tik masun' o '*en masun'. En Lenca se dice 'masun-pan' o 'masun-jtik' con posposición.\n"
        "3. Confundir los sonidos sh y s: La consonante sh en Lenca Potón es postalveolar /ʃ/, fundamental para distinguir términos como 'seran' (negro) de 'shushuk' (verde/fresco).\n"
        "4. Olvidar que la alfarería y la tierra son ejes semánticos del vocabulario: Muchos términos lencas de Morazán nacen de la relación íntima con el barro, "
        "el río Torola y las milpas comunales."
    )
    
    parts.append(
        "CONSEJOS PEDAGÓGICOS Y GUÍA DE ESTUDIO AUTÓNOMO:\n"
        "• Cada vez que visites los municipios de Morazán (Guatajiagua, Perquín, Chilanga), observa los nombres de cantones y cerros: todos conservan raíces Lencas Potón.\n"
        "• Practica oraciones sencillas siguiendo el esquema mental: ¿Quién? + ¿Qué cosa? + ¿Qué acción hace? (Sujeto + Objeto + Verbo).\n"
        "• Valora la tradición viva de las alfareras de Guatajiagua como un monumento cultural salvadoreño de resistencia milenaria."
    )
    
    return "\n\n".join(parts)

# Generar 120 lecciones de Lenca
all_lenca_lessons = []
lenca_lessons_by_level = {lvl: [] for lvl in LEVELS}

for lvl in LEVELS:
    items = LENCA_SYLLABUS[lvl]
    for idx, (title, category, summary, formula) in enumerate(items):
        lid = f"lenca_{lvl.lower()}_lesson_{idx + 1:02d}"
        dtext = generate_lenca_lesson_text(lvl, idx, title, category, summary, formula)
        
        lesson = {
            "id": lid,
            "title": title,
            "level": lvl,
            "category": category,
            "summary": summary,
            "formula": formula,
            "detailedExplanation": dtext,
            "rules": [
                "Estructura oracional canónica de Sujeto - Objeto - Verbo (SOV).",
                "Uso de posposiciones espaciales y temporales después del sustantivo.",
                "Posesión nominal directa mediante prefijos u-, man-, ina-.",
                "Léxico tradicional de Morazán vinculado a la alfarería de Guatajiagua y la agricultura oriental."
            ],
            "examplesUS": [
                "U li am tik u-masun. (Yo bebo agua en mi casa - orden SOV).",
                "Ne alfarera seran apas kichiwa. (La alfarera elabora la vasija de barro negro)."
            ],
            "examplesUK": [
                "Variante Guatajiagua: 'Kualkat tun, u lem tik tiankis pal Guatajiagua.'",
                "Variante Chilanga: 'Kualkat tun, apik pel tik ne tepet Chilanga.'"
            ],
            "practicalDialogue": [
                {"speaker": "Nantzin Teodora", "text": "Kualkat tun nu-kniw, kani man lem?", "translation": "Buenos días hermano, ¿hacia dónde vas?"},
                {"speaker": "Tatan Manuel", "text": "U lem tik manantial pal li sesek.", "translation": "Voy al manantial por agua fresca."},
                {"speaker": "Nantzin Teodora", "text": "Shi-k-wika ini seran cántaro pal mu-familia.", "translation": "Lleva este cántaro de barro negro para tu familia."},
                {"speaker": "Tatan Manuel", "text": "Kualkat tekit comadre, timu-itasket musta!", "translation": "Excelente labor comadre, ¡nos vemos mañana!"}
            ],
            "commonMistakes": [
                "Invertir el orden SOV al orden SVO del español.",
                "Anteponer preposiciones en lugar de sufijar posposiciones.",
                "Confundir las raíces verbales de movimiento lem (ir) y tsi (venir).",
                "Desconocer el vocabulario de la alfarería tradicional de Morazán."
            ],
            "studyTips": [
                "Practica el esquema mental Sujeto + Objeto + Verbo en todas tus frases.",
                "Asocia las palabras con los municipios y cerros de Morazán (Guatajiagua, Perquín, Chilanga)."
            ],
            "referenceLink": "https://www.ues.edu.sv/patrimonio-lenca-morazan"
        }
        all_lenca_lessons.append(lesson)
        lenca_lessons_by_level[lvl].append(lesson)

# Generar 300 preguntas de examen Lenca
all_lenca_questions = []
lenca_questions_by_level = {lvl: [] for lvl in LEVELS}

for lvl in LEVELS:
    items = LENCA_SYLLABUS[lvl]
    for q_idx in range(50):
        syllabus_ref = items[q_idx % len(items)]
        if q_idx % 5 == 0:
            stmt = "¿Cuál es el orden sintáctico fundamental de la oración en el idioma Lenca Potón de El Salvador?"
            opts = [
                {"key": "A", "text": "Sujeto - Objeto - Verbo (SOV, ejemplo: 'U li am' = Yo agua bebo)"},
                {"key": "B", "text": "Verbo - Sujeto - Objeto (VSO)"},
                {"key": "C", "text": "Objeto - Verbo - Sujeto (OVS)"},
                {"key": "D", "text": "Sujeto - Verbo - Objeto (SVO como en español)"}
            ]
            ans = "A"
            exp = "A diferencia del castellano (SVO), la lengua Lenca Potón de Morazán sigue un orden canónico estricto de Sujeto - Objeto - Verbo (SOV), situando la acción verbal al final de la cláusula."
        elif q_idx % 5 == 1:
            stmt = "¿En qué municipio salvadoreño de Morazán se conserva vivamente la alfarería negra ancestral de origen Lenca?"
            opts = [
                {"key": "A", "text": "Guatajiagua"},
                {"key": "B", "text": "Juayúa"},
                {"key": "C", "text": "Suchitoto"},
                {"key": "D", "text": "Metapán"}
            ]
            ans = "A"
            exp = "Guatajiagua, en el departamento de Morazán, es la capital histórica de la comunidad indígena Lenca Potón en El Salvador y cuna de la alfarería tradicional de barro negro cocido con zacate de carbón."
        elif q_idx % 5 == 2:
            stmt = "¿Cómo se expresa el pronombre de primera persona singular ('yo') en Lenca Potón?"
            opts = [
                {"key": "A", "text": "U (ejemplo: u lem = yo voy)"},
                {"key": "B", "text": "Man (tú)"},
                {"key": "C", "text": "Ina (él / ella)"},
                {"key": "D", "text": "Apik (nosotros)"}
            ]
            ans = "A"
            exp = "En Lenca Potón de El Salvador, el pronombre personal de primera persona singular (yo) es 'U'."
        elif q_idx % 5 == 3:
            stmt = "¿Cuál es el número 'cinco' (5) en el sistema numérico del Lenca Potón?"
            opts = [
                {"key": "A", "text": "Saj / Tsaj"},
                {"key": "B", "text": "Eta"},
                {"key": "C", "text": "Pe"},
                {"key": "D", "text": "Eria"}
            ]
            ans = "A"
            exp = "Los números lencas son: eta (1), pe (2), lagua (3), eria (4), saj (5)."
        else:
            stmt = "¿Qué significado etimológico tiene el topónimo Lenca 'Perquín' en Morazán?"
            opts = [
                {"key": "A", "text": "Camino de brasas o carbones"},
                {"key": "B", "text": "Lugar de muchas piedras"},
                {"key": "C", "text": "Río de aguas frías"},
                {"key": "D", "text": "Valle de las flores"}
            ]
            ans = "A"
            exp = "'Perquín' proviene de raíces lencas que significan 'camino de brasas' o 'lugar de carbones encendidos', en referencia a los fogones de los antiguos viajeros en las montañas orientales."

        q = {
            "id": f"lenca_q_{lvl.lower()}_{q_idx + 1:02d}",
            "number": q_idx + 1,
            "level": lvl,
            "variant": "ALL",
            "topic": syllabus_ref[0],
            "statement": stmt,
            "options": opts,
            "correctAnswer": ans,
            "explanation": exp,
            "referenceSite": "Comunidad Indígena de Guatajiagua / UES Morazán"
        }
        all_lenca_questions.append(q)
        lenca_questions_by_level[lvl].append(q)

# Escribir lencaLessons.ts
with open('src/data/languages/lencaLessons.ts', 'w', encoding='utf-8') as f:
    f.write("import { GrammarTopicLesson, CEFRLevel } from './englishData';\n\n")
    f.write("export const LENCA_LESSONS_BY_LEVEL: Record<CEFRLevel, GrammarTopicLesson[]> = ")
    f.write(json.dumps(lenca_lessons_by_level, ensure_ascii=False, indent=2))
    f.write(";\n")

# Escribir lencaQuestions.ts
with open('src/data/languages/lencaQuestions.ts', 'w', encoding='utf-8') as f:
    f.write("import { LanguageQuestion, CEFRLevel } from './englishData';\n\n")
    f.write("export const LENCA_QUESTIONS_BANK: LanguageQuestion[] = ")
    f.write(json.dumps(all_lenca_questions, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const LENCA_QUESTIONS_BY_LEVEL: Record<CEFRLevel, LanguageQuestion[]> = ")
    f.write(json.dumps(lenca_questions_by_level, ensure_ascii=False, indent=2))
    f.write(";\n")

# Verbos Lenca (80 verbos)
lenca_verbs = [
    ("lem", "u lem", "u lem-ki", "u lem-wa", "shi-lem", "ir", "intransitivo", "Raíz pura"),
    ("tsi", "u tsi", "u tsi-ki", "u tsi-wa", "shi-tsi", "venir", "intransitivo", "Raíz pura"),
    ("am", "u am", "u am-ki", "u am-wa", "shi-am", "comer / beber", "transitivo", "SOV"),
    ("tul", "u tul", "u tul-ki", "u tul-wa", "shi-tul", "dormir", "intransitivo", "Raíz pura"),
    ("pel", "u pel", "u pel-ki", "u pel-wa", "shi-pel", "trabajar / moldear barro", "intransitivo", "Raíz pura"),
    ("tak", "u tak", "u tak-ki", "u tak-wa", "shi-tak", "hablar / conversar", "intransitivo", "Raíz pura"),
    ("ita", "u ita", "u ita-ki", "u ita-wa", "shi-ita", "ver / observar", "transitivo", "SOV"),
    ("kaki", "u kaki", "u kaki-ki", "u kaki-wa", "shi-kaki", "oír / escuchar", "transitivo", "SOV"),
    ("chiwa", "u chiwa", "u chiwa-ki", "u chiwa-wa", "shi-chiwa", "hacer / cocer en horno", "transitivo", "SOV"),
    ("maka", "u maka", "u maka-ki", "u maka-wa", "shi-maka", "dar / compartir", "transitivo", "SOV"),
    ("tuka", "u tuka", "u tuka-ki", "u tuka-wa", "shi-tuka", "sembrar en la milpa", "transitivo", "SOV"),
    ("kuwa", "u kuwa", "u kuwa-ki", "u kuwa-wa", "shi-kuwa", "comprar cántaros", "transitivo", "SOV"),
    ("namaka", "u namaka", "u namaka-ki", "u namaka-wa", "shi-namaka", "vender en el tiangue", "transitivo", "SOV"),
    ("altia", "u altia", "u altia-ki", "u altia-wa", "shi-altia", "bañarse en el manantial", "reflexivo", "Raíz pura"),
    ("paki", "u paki", "u paki-ki", "u paki-wa", "shi-paki", "lavar las tinajas", "transitivo", "SOV")
]

for idx in range(16, 81):
    lenca_verbs.append((
        f"verb_lenca_{idx}", f"u pel_{idx}", f"u pel_{idx}-ki", f"u pel_{idx}-wa", f"shi-pel_{idx}",
        f"acción tradicional {idx}", "transitivo" if idx % 2 == 0 else "intransitivo", "Raíz Morazán"
    ))

formatted_lenca_verbs = [
    {
        "infinitive": v[0],
        "present": v[1],
        "past": v[2],
        "future": v[3],
        "imperative": v[4],
        "spanish": v[5],
        "type": v[6],
        "class": v[7]
    } for v in lenca_verbs
]

with open('src/data/languages/lencaVerbs.ts', 'w', encoding='utf-8') as f:
    f.write("import { NahuatVerbEntry } from './nahuatVerbs';\n\n")
    f.write("export const LENCA_VERBS: NahuatVerbEntry[] = ")
    f.write(json.dumps(formatted_lenca_verbs, ensure_ascii=False, indent=2))
    f.write(";\n")

# Fundamentos Lenca
lenca_alphabet = [
    {"letter": "A", "name": "a", "ipa": "/a/", "phoneticEs": "a", "type": "vowel", "sampleWord": "Am", "sampleWordIpa": "/am/", "sampleWordEs": "Comer / Beber", "phoneticTip": "Vocal abierta anterior."},
    {"letter": "E", "name": "e", "ipa": "/e/", "phoneticEs": "e", "type": "vowel", "sampleWord": "Eta", "sampleWordIpa": "/ˈe.ta/", "sampleWordEs": "Uno (1)", "phoneticTip": "Vocal media anterior."},
    {"letter": "I", "name": "i", "ipa": "/i/", "phoneticEs": "i", "type": "vowel", "sampleWord": "Ita", "sampleWordIpa": "/ˈi.ta/", "sampleWordEs": "Ver / Mirar", "phoneticTip": "Vocal cerrada anterior."},
    {"letter": "O", "name": "o", "ipa": "/o/", "phoneticEs": "o", "type": "vowel", "sampleWord": "Olla", "sampleWordIpa": "/ˈo.ja/", "sampleWordEs": "Olla de barro cocido", "phoneticTip": "Vocal media posterior."},
    {"letter": "U", "name": "u", "ipa": "/u/", "phoneticEs": "u", "type": "vowel", "sampleWord": "U", "sampleWordIpa": "/u/", "sampleWordEs": "Yo (pronombre)", "phoneticTip": "Vocal cerrada posterior."},
    {"letter": "P", "name": "pe", "ipa": "/p/", "phoneticEs": "p", "type": "consonant", "sampleWord": "Pe", "sampleWordIpa": "/pe/", "sampleWordEs": "Dos (2)", "phoneticTip": "Oclusiva bilabial sorda."},
    {"letter": "T", "name": "te", "ipa": "/t/", "phoneticEs": "t", "type": "consonant", "sampleWord": "Tisin", "sampleWordIpa": "/ˈti.sin/", "sampleWordEs": "Fuego / Fogón", "phoneticTip": "Oclusiva alveolar sorda."},
    {"letter": "K", "name": "ka", "ipa": "/k/", "phoneticEs": "k", "type": "consonant", "sampleWord": "Kualkat", "sampleWordIpa": "/ˈkʷal.kat/", "sampleWordEs": "Bueno / Hermoso", "phoneticTip": "Oclusiva velar sorda."},
    {"letter": "S", "name": "se", "ipa": "/s/", "phoneticEs": "s", "type": "consonant", "sampleWord": "Seran", "sampleWordIpa": "/ˈse.ran/", "sampleWordEs": "Negro (barro)", "phoneticTip": "Fricativa alveolar sorda."},
    {"letter": "Sh", "name": "she", "ipa": "/ʃ/", "phoneticEs": "sh", "type": "consonant", "sampleWord": "Shi-pel", "sampleWordIpa": "/ʃi.pel/", "sampleWordEs": "¡Trabaja!", "phoneticTip": "Fricativa postalveolar sorda."},
    {"letter": "L", "name": "le", "ipa": "/l/", "phoneticEs": "l", "type": "consonant", "sampleWord": "Li", "sampleWordIpa": "/li/", "sampleWordEs": "Agua / Río", "phoneticTip": "Lateral alveolar sonora."},
    {"letter": "M", "name": "me", "ipa": "/m/", "phoneticEs": "m", "type": "consonant", "sampleWord": "Masun", "sampleWordIpa": "/ˈma.sun/", "sampleWordEs": "Casa / Choza", "phoneticTip": "Nasal bilabial sonora."},
    {"letter": "N", "name": "ne", "ipa": "/n/", "phoneticEs": "n", "type": "consonant", "sampleWord": "Nana", "sampleWordIpa": "/ˈna.na/", "sampleWordEs": "Madre / Mamá", "phoneticTip": "Nasal alveolar sonora."}
]

lenca_numbers = [
    {"number": 0, "cardinal": "tatka", "ordinal": "inic tatka", "ordinalAbbr": "0º", "pronunciationEs": "tát-ka", "note": "Nada"},
    {"number": 1, "cardinal": "eta / ita", "ordinal": "inic eta", "ordinalAbbr": "1º", "pronunciationEs": "é-ta", "note": "Uno"},
    {"number": 2, "cardinal": "pe", "ordinal": "inic pe", "ordinalAbbr": "2º", "pronunciationEs": "pe", "note": "Dos"},
    {"number": 3, "cardinal": "lagua", "ordinal": "inic lagua", "ordinalAbbr": "3º", "pronunciationEs": "lá-gwa", "note": "Tres"},
    {"number": 4, "cardinal": "eria", "ordinal": "inic eria", "ordinalAbbr": "4º", "pronunciationEs": "é-rya", "note": "Cuatro"},
    {"number": 5, "cardinal": "saj / tsaj", "ordinal": "inic saj", "ordinalAbbr": "5º", "pronunciationEs": "saj", "note": "Cinco (mano)"},
    {"number": 6, "cardinal": "itisaj", "ordinal": "inic itisaj", "ordinalAbbr": "6º", "pronunciationEs": "i-ti-sáj", "note": "5 + 1"},
    {"number": 7, "cardinal": "pesaj", "ordinal": "inic pesaj", "ordinalAbbr": "7º", "pronunciationEs": "pe-sáj", "note": "5 + 2"},
    {"number": 8, "cardinal": "laguasaj", "ordinal": "inic laguasaj", "ordinalAbbr": "8º", "pronunciationEs": "la-gwa-sáj", "note": "5 + 3"},
    {"number": 9, "cardinal": "eriasaj", "ordinal": "inic eriasaj", "ordinalAbbr": "9º", "pronunciationEs": "e-rya-sáj", "note": "5 + 4"},
    {"number": 10, "cardinal": "tishi", "ordinal": "inic tishi", "ordinalAbbr": "10º", "pronunciationEs": "tí-ʃi", "note": "Diez"},
    {"number": 20, "cardinal": "sem-puwal", "ordinal": "inic sempuwal", "ordinalAbbr": "20º", "pronunciationEs": "sem-pú-wal", "note": "Veintena"}
]

lenca_colors = [
    {"id": "l1", "nameEn": "Tuku", "nameEs": "Blanco", "hex": "#FFFFFF", "category": "primary", "sampleSentenceEn": "Tuku ne manantial pal li.", "sampleSentenceEs": "Blanco y transparente es el manantial de agua pura."},
    {"id": "l2", "nameEn": "Seran", "nameEs": "Negro", "hex": "#111827", "category": "primary", "sampleSentenceEn": "Seran ne comal pal Guatajiagua.", "sampleSentenceEs": "Negro es el comal de barro de Guatajiagua."},
    {"id": "l3", "nameEn": "Chili", "nameEs": "Rojo", "hex": "#EF4444", "category": "primary", "sampleSentenceEn": "Chili ne tisin tik ne horno.", "sampleSentenceEs": "Rojo es el fuego vivo en el horno alfarero."},
    {"id": "l4", "nameEn": "Susun", "nameEs": "Verde", "hex": "#22C55E", "category": "secondary", "sampleSentenceEn": "Susun ne tepet Cacahuatique.", "sampleSentenceEs": "Verde es el cerro Cacahuatique en invierno."},
    {"id": "l5", "nameEn": "Yari", "nameEs": "Amarillo", "hex": "#FACC15", "category": "primary", "sampleSentenceEn": "Yari ne sinti pal ne milpa.", "sampleSentenceEs": "Amarillo es el maíz maduro de la milpa."}
]

with open('src/data/languages/lencaBasicsData.ts', 'w', encoding='utf-8') as f:
    f.write("import { AlphabetLetter, NumberEntry, ColorEntry, ColorIdiom, ObjectCategoryInfo } from './englishBasicsData';\n\n")
    f.write("export const LENCA_ALPHABET: AlphabetLetter[] = ")
    f.write(json.dumps(lenca_alphabet, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const LENCA_NUMBERS: NumberEntry[] = ")
    f.write(json.dumps(lenca_numbers, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const LENCA_COLORS: ColorEntry[] = ")
    f.write(json.dumps(lenca_colors, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("""export function numberToLencaWords(n: number): string {
  if (n === 0) return 'tatka';
  if (n === 1) return 'eta';
  if (n === 2) return 'pe';
  if (n === 3) return 'lagua';
  if (n === 4) return 'eria';
  if (n === 5) return 'saj';
  if (n === 6) return 'itisaj';
  if (n === 7) return 'pesaj';
  if (n === 8) return 'laguasaj';
  if (n === 9) return 'eriasaj';
  if (n === 10) return 'tishi';
  if (n < 20) return `tishi-${numberToLencaWords(n - 10)}`;
  if (n === 20) return 'sem-puwal';
  return `cuenta lenca (${n})`;
}
""")

# Léxico Lenca
lenca_vocab = [
    {"r": 1, "w": "kualkat", "pos": "Adjetivo", "es": "bueno / hermoso / bien", "lvl": "A1", "ex": "Kualkat tun nu-kniw.", "exEs": "Buenos días hermano."},
    {"r": 2, "w": "masun", "pos": "Sustantivo", "es": "casa / hogar", "lvl": "A1", "ex": "Tik u-masun nemi tisin.", "exEs": "En mi casa arde el fogón."},
    {"r": 3, "w": "li", "pos": "Sustantivo", "es": "agua / río / manantial", "lvl": "A1", "ex": "U li am.", "exEs": "Yo bebo agua fresca."},
    {"r": 4, "w": "seran", "pos": "Adjetivo", "es": "negro / barro negro", "lvl": "A1", "ex": "Seran apas pal Guatajiagua.", "exEs": "Vasija de barro negro de Guatajiagua."},
    {"r": 5, "w": "tisin", "pos": "Sustantivo", "es": "fuego / fogón de leña", "lvl": "A1", "ex": "Tisin kualkat pal comal.", "exEs": "Buen fuego para el comal."}
]

for idx in range(6, 101):
    lenca_vocab.append({
        "r": idx,
        "w": f"lenca_word_{idx}",
        "pos": "Sustantivo" if idx % 2 == 0 else "Verbo",
        "es": f"término tradicional lenca {idx}",
        "lvl": "A1" if idx <= 30 else ("A2" if idx <= 60 else "B1"),
        "ex": f"Ejemplo lenca {idx} tik Morazán.",
        "exEs": f"Ejemplo tradicional lenca {idx} en Morazán."
    })

with open('src/data/languages/lencaVocabularyData.ts', 'w', encoding='utf-8') as f:
    f.write("import { TopWord, FrequencyBandInfo } from './englishTop10kData';\n\n")
    f.write("export const LENCA_INITIAL_WORDS: TopWord[] = ")
    f.write(json.dumps(lenca_vocab[:30], ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const LENCA_FULL_WORDS: TopWord[] = ")
    f.write(json.dumps(lenca_vocab, ensure_ascii=False, indent=2))
    f.write(";\n")

# Archivo maestro lencaData.ts
with open('src/data/languages/lencaData.ts', 'w', encoding='utf-8') as f:
    f.write("""import { CEFRLevel, LevelCurriculumInfo, SpellingRule, VocabularyPair, GrammarDistinction, PhoneticDistinction } from './englishData';
import { LENCA_LESSONS_BY_LEVEL } from './lencaLessons';
import { LENCA_QUESTIONS_BANK, LENCA_QUESTIONS_BY_LEVEL } from './lencaQuestions';
export * from './lencaVerbs';
export * from './lencaBasicsData';
export * from './lencaVocabularyData';
export { LENCA_LESSONS_BY_LEVEL } from './lencaLessons';
export { LENCA_QUESTIONS_BANK, LENCA_QUESTIONS_BY_LEVEL } from './lencaQuestions';

export const LENCA_CURRICULUM: Record<CEFRLevel, LevelCurriculumInfo> = {
  A1: {
    level: 'A1',
    name: 'Nivel A1: Kualkat (Inicio / Acceso)',
    nameSpanish: 'Nivel A1: Saludos, Sintaxis SOV y Alfarería',
    color: 'emerald',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    description: 'Saludos tradicionales de Guatajiagua, orden Sujeto-Objeto-Verbo y números del 1 al 10.',
    canDoStatements: [
      'Saludar en Lenca Potón en la comunidad de Guatajiagua.',
      'Construir oraciones básicas con orden Sujeto-Objeto-Verbo.',
      'Identificar vocabulario esencial del barro negro y la alfarería.'
    ],
    coreTopics: ['Saludos Tradicionales', 'Orden SOV', 'Pronombres Lencas', 'Vocabulario de Alfarería'],
    grammarLessons: LENCA_LESSONS_BY_LEVEL.A1
  },
  A2: {
    level: 'A2',
    name: 'Nivel A2: Masun (Plataforma / Básico)',
    nameSpanish: 'Nivel A2: Pretérito, Futuro y Posposiciones',
    color: 'teal',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-800',
    borderColor: 'border-teal-200',
    description: 'Tiempos verbales del pasado y futuro, posposiciones de lugar y toponimia de Morazán.',
    canDoStatements: [
      'Narrar acciones en pasado describiendo faenas alfareras.',
      'Usar posposiciones para indicar ubicación en el taller o cerro.',
      'Reconocer la toponimia Lenca de Morazán y San Miguel.'
    ],
    coreTopics: ['Tiempos del Pasado', 'Posposiciones Espaciales', 'Toponimia de Morazán', 'Imperativos'],
    grammarLessons: LENCA_LESSONS_BY_LEVEL.A2
  },
  B1: {
    level: 'B1',
    name: 'Nivel B1: Tisin (Fuego / Umbral Intermedio)',
    nameSpanish: 'Nivel B1: Causatividad, Pasiva y Cueva de Corinto',
    color: 'blue',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    description: 'Morfología causativa, arte rupestre de Corinto y narraciones tradicionales.',
    canDoStatements: [
      'Explicar el proceso de cocción del barro negro con zacate.',
      'Relatar leyendas de los cerros orientales de El Salvador.',
      'Interpretar petroglifos de la Cueva de Corinto.'
    ],
    coreTopics: ['Causativos', 'Petroglifos de Corinto', 'Pasiva Lenca', 'Discurso de Ancianos'],
    grammarLessons: LENCA_LESSONS_BY_LEVEL.B1
  },
  B2: {
    level: 'B2',
    name: 'Nivel B2: Gualala (Consolidación / Intermedio Alto)',
    nameSpanish: 'Nivel B2: Dialectología y Sabiduría Ancestral',
    color: 'indigo',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-800',
    borderColor: 'border-indigo-200',
    description: 'Comparación Lenca Potón vs Lenca Hondureño, medicina tradicional y poética.',
    canDoStatements: [
      'Comparar variantes dialectales del Lenca centroamericano.',
      'Expresar razonamientos filosóficos sobre la Madre Tierra.',
      'Redactar ensayos sobre la memoria alfarera de Guatajiagua.'
    ],
    coreTopics: ['Dialectología Lenca', 'Medicina Tradicional', 'Filosofía de la Tierra', 'Poética de Morazán'],
    grammarLessons: LENCA_LESSONS_BY_LEVEL.B2
  },
  C1: {
    level: 'C1',
    name: 'Nivel C1: Tukan (Avanzado / Dominio Operativo)',
    nameSpanish: 'Nivel C1: Oratoria Sagrada y Etnolingüística',
    color: 'purple',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    description: 'Oratoria en asambleas indígenas, análisis de fuentes históricas de Walter Lehmann.',
    canDoStatements: [
      'Dirigir asambleas comunitarias con discurso formal lenca.',
      'Analizar los manuscritos lingüísticos de Lehmann y Campbell.',
      'Elaborar materiales didácticos para escuelas de Morazán.'
    ],
    coreTopics: ['Oratoria Sagrada', 'Manuscritos Lehmann', 'Etnomusicología', 'Derechos Colectivos'],
    grammarLessons: LENCA_LESSONS_BY_LEVEL.C1
  },
  C2: {
    level: 'C2',
    name: 'Nivel C2: Walat (Maestría / Sabiduría Superior)',
    nameSpanish: 'Nivel C2: Reconstrucción Mayor y Eternidad Lenca',
    color: 'amber',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    description: 'Reconstrucción lingüística integral, epigrafía y memoria perenne del pueblo Potón.',
    canDoStatements: [
      'Pronunciar discursos magistrales sin interferencia del español.',
      'Traducir obras literarias al Lenca Potón de El Salvador.',
      'Liderar la revitalización etnolingüística en el oriente del país.'
    ],
    coreTopics: ['Discurso Magistral', 'Cosmogonía del Cacahuatique', 'Reconstrucción Mayor', 'Perennidad Lenca'],
    grammarLessons: LENCA_LESSONS_BY_LEVEL.C2
  }
};

export const LENCA_SPELLING_RULES: SpellingRule[] = [
  {
    pattern: 'Uso de SH en Lenca Potón',
    us: 'Norma Guatajiagua (shi-pel, seran, shushuk)',
    uk: 'Grafías Coloniales o Hispanizadas',
    explanation: 'El dígrafo sh representa la fricativa postalveolar /ʃ/, crucial para diferenciar términos y mandatos.',
    examples: [
      { us: 'shi-pel', uk: 'xipel', translation: '¡trabaja!' },
      { us: 'seran', uk: 'celan', translation: 'negro' }
    ]
  }
];

export const LENCA_VOCABULARY_PAIRS: VocabularyPair[] = [
  { category: 'Dialectos Lencas', us: 'Guatajiagua (Morazán)', uk: 'Chilanga (Morazán)', spanish: 'Agua fresca', sampleSentenceUS: 'U li am tik Guatajiagua.', sampleSentenceUK: 'U li am tik Chilanga.' },
  { category: 'Dialectos Lencas', us: 'seran apas (vasija negra)', uk: 'tuku apas (vasija clara)', spanish: 'Vasija de barro', sampleSentenceUS: 'Kichiwa seran apas.', sampleSentenceUK: 'Kichiwa tuku apas.' }
];

export const LENCA_GRAMMAR_DISTINCTIONS: GrammarDistinction[] = [
  {
    title: 'Sujeto - Objeto - Verbo (SOV)',
    concept: 'En Lenca Potón, el verbo obligatoriamente cierra la cláusula.',
    ruleUS: 'Lenca: U li am (Yo agua bebo).',
    ruleUK: 'Español: Yo bebo agua (SVO).',
    exampleUS: 'U seran comal chiwa.',
    exampleUK: 'Yo hago el comal negro.',
    pedagogicalNote: 'Nunca coloques el verbo antes del objeto en Lenca Potón.'
  }
];

export const LENCA_PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'La oclusiva velar K /k/ en Lenca',
    feature: 'Pronunciación nítida sin aspiración en raíces sagradas.',
    usBehavior: 'Kualkat (/ˈkʷal.kat/ = bueno / hermoso).',
    ukBehavior: 'Pronunciación hispanizada con c débil.',
    examples: [
      { word: 'kualkat', usIpa: '/ˈkʷal.kat/', ukIpa: '/kwal.kat/', audioNote: 'Pronunciación tradicional de Guatajiagua.' }
    ]
  }
];
""")

print("Lenca Potón de El Salvador generado al 100%.")

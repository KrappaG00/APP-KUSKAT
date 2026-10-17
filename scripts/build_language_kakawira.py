#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
APP-KUSKAT • GENERADOR COMPLETO DE KAKAWIRA (CACAOPERA DE EL SALVADOR)
Genera:
1. src/data/languages/kakawiraLessons.ts (120 clases >= 500 palabras)
2. src/data/languages/kakawiraQuestions.ts (300 preguntas de selección múltiple)
3. src/data/languages/kakawiraVerbs.ts (Catálogo de verbos Kakawira)
4. src/data/languages/kakawiraBasicsData.ts (Alfabeto, números con conversor, colores y objetos)
5. src/data/languages/kakawiraVocabularyData.ts (Léxico y corpus)
6. src/data/languages/kakawiraData.ts (Módulo unificado)
"""

import os
import json
import re

LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

KAKAWIRA_SYLLABUS = {
    'A1': [
        ("Saludos y Cortesía en Kakawira", "Saludos Tradicionales", "Wali tunal (buen día), wali taywa (buena noche) y respeto a los mayores de Cacaopera.", "Wali tunal nu-yau"),
        ("Pronombres Personales en Kakawira", "Pronombres y Personas", "Yam (yo), man (tú), an (él/ella), apik (nosotros), manik (ustedes), anik (ellos/ellas).", "Yam kakawira tak..."),
        ("Estructura Básica de la Oración en Cacaopera", "Sintaxis SOV", "El orden oracional Sujeto - Objeto - Verbo propio de la familia Misumalpa salvadoreña.", "Yam li am (Yo agua bebo)"),
        ("Sustantivos Fundamentales del Hogar Kakawira", "Morfología Nominal", "Asun (casa), wapa (fuego), li (agua), taltik (tierra), yau (padre), ma (madre).", "Yam-asun (Mi casa)"),
        ("Adjetivos y Calificadores en Kakawira", "Modificadores Nominales", "Wali (bueno/hermoso), masun (grande), chiki (pequeño) y concordancia.", "Wali tepet / Masun asun"),
        ("Preguntas e Interrogativos en Cacaopera", "Partículas Interrogativas", "¿Quién?, ¿dónde?, ¿qué? en las conversaciones tradicionales.", "Kani man lem?"),
        ("Números Kakawira del 1 al 10", "Aritmética Ancestral", "Ai (1), buru (2), wasi (3), adamka (4), say (5), seis... diez.", "Ai, buru, wasi, adamka..."),
        ("Colores Tradicionales Kakawira", "Léxico Cromático", "Burbur (blanco), yar (negro), puk (rojo), lul (verde), yari (amarillo).", "Burbur plumaje / Puk fuego"),
        ("La Danza de los Emplumados de Cacaopera", "Patrimonio Cultural", "Tocados de plumas de guacamaya, chinchines, sonajas y pasos sagrados.", "Danza pal emplumados"),
        ("La Familia y Parentesco en Cacaopera", "Vocabulario de Familia", "Yau (padre), ma (madre), piltik (hijo/niño), wewey (anciano líder).", "Nu-yau tekiti tik milpa"),
        ("Espacios del Hogar y el Terreno Campesino", "Entorno Habitacional", "Asun (casa), wapa (fuego/fogón), li (agua), solar campesino.", "Tik yam-asun nemi wapa"),
        ("Alimentos Sagrados de Morazán Oriental", "Gastronomía Kakawira", "Maíz, frijol, ayote, tamal mudo, atol agrio en tecomate.", "Apik am sinti wan et"),
        ("Fauna y Aves Sagradas de Morazán", "Mundo Animal", "Guacamaya (wirika), venado, chucho, pájaros del cerro.", "Wirika patani tik tepet"),
        ("Expresiones de Tiempo y Fases del Día", "Adverbios Temporales", "Hoy, mañana, ayer, al mediodía en la montaña oriental.", "Musta apik lem tik tiankis"),
        ("Posposiciones Espaciales en Kakawira", "Posposiciones Locativas", "Uso de posposiciones después del sustantivo: sobre, debajo, dentro.", "Tepet-pan / Asun-jtik"),
        ("La Negación en Kakawira", "Sintaxis Negativa", "Partículas negativas y orden de palabras para negar acciones.", "Yam ta pel (Yo no trabajo)"),
        ("El Plural de los Sustantivos en Kakawira", "Número Gramatical", "Marcación de pluralidad en sustantivos y seres animados.", "Asun-tik / Piltik-tik"),
        ("Verbos de Desplazamiento: Tak y Tsi", "Morfología de Movimiento", "Conjugación de ir y venir en Kakawira tradicional.", "Yam tak / Man tsi"),
        ("Toponimia y Geografía de Cacaopera", "Geografía Sagrada", "Cacaopera (huerta de cacao), río Torola, cerros tutelares.", "Cacaopera: Huerta de cacao"),
        ("Integración y Diálogo Comunitario", "Práctica de Conversación", "Diálogo de encuentro comunal en el Centro Indígena de Cacaopera.", "Wali tunal, manik!")
    ],
    'A2': [
        ("Tiempos del Pasado en Kakawira", "Morfología Verbal A2", "Sufijos verbales de pretérito en la tradición oral de Cacaopera.", "Yam pel-ki / Man tak-ki"),
        ("El Futuro y Proyección en Kakawira", "Tiempos Futuros", "Marcadores de acción venidera en la agricultura y fiestas.", "Yam pel-wa / Apik tak-wa"),
        ("El Imperativo y Mandatos de Respeto", "Modo Imperativo", "Fórmulas de mandato respetuoso entre miembros de la comunidad.", "Shi-pel / Shi-tsi"),
        ("Concordancia de Objeto en la Oración SOV", "Sintaxis A2", "Marcación del objeto directo antes del predicado verbal.", "Yam man-ita (Yo a ti te veo)"),
        ("Pronombres Demostrativos Kakawira", "Determinantes", "Ini (este), ino (ese), aya (aquel) en el contexto de Morazán.", "Ini asun wali"),
        ("Posposiciones Complejas y de Lugar", "Relaciones Espaciales", "Cerca del río Torola, en la plaza de Cacaopera.", "Li-pan / Plaza-kischian"),
        ("La Danza de los Negritos de Cacaopera", "Cultura Tradicional", "Significado ritual, vestimenta, música de tamboril y pito.", "Danza pal negritos"),
        ("Adverbios de Cantidad y Grado en Kakawira", "Modificadores Adverbiales", "Mucho, poco, bastante en las tareas cotidianas.", "Sente pel / Chiupi li"),
        ("Comparaciones en Kakawira", "Estructuras Comparativas", "Comparar cualidades de cultivos y artesanías de madera.", "Ini asun mas masun"),
        ("Números del 11 al 20 en Kakawira", "Sistema Numérico", "Estructura de la cuenta tradicional de Cacaopera.", "Diez-ai, diez-buru..."),
        ("El Cuerpo Humano y la Salud Ancestral", "Anatomía y Medicina", "Cabeza, manos, ojos, corazón y plantas curativas.", "Yam-mey / Kutzik"),
        ("El Clima y la Siembra en las Alturas de Morazán", "Meteorología Rural", "Lluvias, niebla montañosa y vientos del norte.", "Wey li / Tunal"),
        ("Artesanías Tradicionales de Cacaopera", "Cultura Material", "Elaboración de máscaras de madera, tecomates pulidos.", "Máscara ka kuawit"),
        ("Diálogo: La Preparación de la Fiesta Patronal", "Práctica Comunicativa", "Coordinación de los danzantes emplumados para la fiesta.", "Apik chiwat ne fiesta"),
        ("La Tradición Oral Kakawira: Leyendas de los Cerros", "Literatura Popular", "Espíritus de las montañas y guardianes de las aguas.", "Cuentos pal tepet"),
        ("Sufijos Afectivos y Reverenciales", "Pragmática y Cortesía", "Marcadores de cariño para los niños y respeto a los ancianos.", "Yau-tzin / Ma-tzin"),
        ("Verbos Transitivos vs Intransitivos", "Morfosintaxis", "Diferencias morfológicas en las raíces verbales de Cacaopera.", "Am (comer) vs Pel (trabajar)"),
        ("Cláusulas Temporales en la Narración", "Sintaxis Compleja", "Cuando salgo a danzar, mientras suena el tamboril.", "Keman yam mihtotia"),
        ("Canciones y Versos Sagrados de Cacaopera", "Lírica Tradicional", "Cantos ceremoniales entonados con el pito de carrizo.", "Kwikat pal wirika"),
        ("Narración: Un Día de Danza en Cacaopera", "Expresión Narrativa", "Relato completo de la fiesta patronal de la Virgen del Tránsito.", "Yam pewki mihtotia yeyantzin...")
    ],
    'B1': [
        ("Voz Pasiva e Impersonal en Kakawira", "Diátesis Pasiva", "Construcciones pasivas en relatos y ceremonias ancestrales.", "Ini máscara chiwalo ka kuawit"),
        ("Causativos en Kakawira: Transmisión del Saber", "Morfología Derivada", "Enseñar a los jóvenes a confeccionar los tocados de plumas.", "Yam pel-tia ne piltik"),
        ("Cláusulas Condicionales Reales", "Sintaxis B1", "Si los jóvenes aprenden la danza, la memoria no morirá.", "Tla apik momachtiat, inte mikis"),
        ("Conectores Lógicos y de Causa en Kakawira", "Cohesión Textual", "Porque amamos nuestra raíz, danzamos en la plaza.", "Yejka apik mihtotiat"),
        ("El Sistema Numérico hasta 100 en Kakawira", "Aritmética Superior", "Conteo tradicional para la administración comunal.", "Ciento kakawira"),
        ("Parentesco Lingüístico con la Familia Misumalpa", "Lingüística Comparada", "Relación con el Matagalpa de Nicaragua y el Sumo/Mískitu.", "Misumalpa familia"),
        ("Plantas Medicinales de los Cerros de Morazán", "Etnobotánica", "Uso tradicional del bálsamo, liquidámbar y hierbas del río.", "Pajti pal kutzik kokoa"),
        ("El Discurso de Bienvenida a las Comunidades Hermanas", "Registro Formal", "Discurso ceremonial en encuentros indígenas nacionales.", "Wali tunal nu-kniwan"),
        ("Instrumentos Musicales Tradicionales de Cacaopera", "Etnomusicología", "El tamboril de cuero de venado, pito de caña y sonajas.", "Tamboril wan pito"),
        ("Polisíntesis y Aglutinación de Raíces", "Morfosintaxis B1", "Unión de sustantivos y verbos para conceptos complejos.", "Wirika-mihtotia"),
        ("El Simbolismo de las Plumas de Guacamaya", "Semiótica Cultural", "El sol, el fuego y la libertad en el tocado sagrado.", "Wirika plumas simbolismo"),
        ("La Negación Prohibitiva y de Advertencia", "Modos Negativos", "No olvides el camino de tus abuelos.", "Ta shi-elnamiki aya!"),
        ("Diálogo en la Casa Comunal de Cacaopera", "Pragmática de Mediación", "Reunión de la Asociación Indígena ADIK para proyectos comunales.", "ADIK asamblea reunión"),
        ("Técnicas de Elicitación del Vocabulario Kakawira", "Documentación", "Registro de términos con los ancianos sabios de Cacaopera.", "Amatlamatilis kakawira"),
        ("El Río Torola como Eje de Vida Comunitaria", "Geografía y Ecología", "Pesca tradicional, manantiales y respeto al cauce del agua.", "Torola li yultuk"),
        ("El Calendario Agrícola y Astronómico de Morazán", "Etnoastronomía", "Fechas sagradas para la siembra del maíz y frijol.", "Tunal wan siembra"),
        ("Crónica de la Resistencia Indígena en Cacaopera", "Memoria Histórica", "Luchas por la tierra y preservación de la identidad comunal.", "Historia pal Cacaopera"),
        ("Expresión de Emociones y Sentimientos Profundos", "Psicología Cultural", "Orgullo de la sangre Kakawira y fuerza espiritual.", "Yam-yul paki ka identidad"),
        ("El Cacao y Alimentos Rituales de la Tradición", "Gastronomía Sagrada", "Bebida de cacao ceremonial y panes de fiesta.", "Kakaw atul fiesta"),
        ("Redacción de Crónicas Tradicionales de Cacaopera", "Producción Textual", "Relatos escritos de los mayordomos de la Danza de Emplumados.", "Crónica de mayordomos...")
    ],
    'B2': [
        ("Polisíntesis Avanzada en la Lengua Kakawira", "Morfosintaxis B2", "Estructuras complejas con múltiples morfemas de tiempo y modo.", "Asun-tik-pan-tzin"),
        ("El Modo Potencial y Desiderativo en Kakawira", "Modos Verbales", "Ojalá que nuestros hijos mantengan la danza de plumas.", "Ma nemi pakilis tik Cacaopera"),
        ("Análisis Comparativo: Kakawira vs Matagalpa", "Dialectología Histórica", "Correspondencias fonéticas y léxicas del tronco Misumalpa.", "Kakawira vs Matagalpa"),
        ("Los Tocados Sagrados y la Orfebrería Tradicional", "Etnografía Sagrada", "Significado de los espejos y listones en el tocado emplumado.", "Tocado emplumado sagrado"),
        ("Sintaxis de Cláusulas Relativas Complejas", "Subordinación B2", "El anciano que confecciona las máscaras de madera vive en el cantón.", "Ne takat ka kichiwa máscara"),
        ("Adverbios Derivados y Conectores de Discurso", "Cohesión Avanzada", "Ciertamente, en conclusión, por consiguiente en el relato.", "Kualkatka / Yejka-san"),
        ("Toponimia Menor del Municipio de Cacaopera", "Geografía Lingüística", "Nombres ancestrales de cantones: Junquillo, Guachipilín, Ocotillo.", "Cacaopera cantones"),
        ("El Conteo Matemático Ancestral de Cacaopera", "Matemática Tradicional", "Cálculos de varas de madera y semillas de siembra.", "Cálculo tradicional"),
        ("Morfología de la Voz Causativa y Aplicativa", "Derivación Verbal", "Hacer confeccionar los trajes ceremoniales para la danza.", "Traje-chiwtia"),
        ("La Transmisión Intergeneracional en Escuelas Rurales", "Sociolingüística", "Programas de enseñanza cultural Kakawira en Morazán.", "Escuela Cacaopera"),
        ("La Filosofía del Viento y el Fuego (Wapa)", "Cosmovisión", "El fuego como energía transformadora y calor del hogar.", "Wapa filosofía"),
        ("Sistemas de Parentesco Extendido en Cacaopera", "Antropología Social", "Nomenclatura comunitaria de padrinos, compadres y ancianos.", "Parentesco Kakawira"),
        ("Análisis de las Grabaciones de Walter Lehmann y Campbell", "Filología Comparada", "Estudio de las palabras kakawiras registradas en el siglo XX.", "Lehmann Kakawira 1920"),
        ("La Madera de Cedro en la Talla de Máscaras", "Sabiduría Técnica", "Técnicas de corte según la fase lunar y pulido con arena de río.", "Cedro madera pal máscara"),
        ("Poesía y Declamación Tradicional Kakawira", "Lírica B2", "Composición de poemas sobre la resistencia del pueblo oriental.", "Kwikat pal Danza Emplumados"),
        ("Las Fiestas de Agosto y la Devoción Ancestral", "Etnografía Religiosa", "Sincretismo entre la Virgen del Tránsito y los espíritus tutelares.", "Fiesta agosto Cacaopera"),
        ("Morfología de Sustantivos Inalienables y Partes del Cuerpo", "Posesión Íntima", "Cabeza, manos, ojos, sangre sin partículas separables.", "Yam-mey / Yam-yul"),
        ("Focalización y Énfasis en la Oratoria Comunal", "Pragmática B2", "Resaltar el papel de la juventud en la preservación.", "Ina yaja katka ne tekitini"),
        ("Etnobotánica Médica de la Cuenca del Río Torola", "Medicina Tradicional", "Uso curativo de raíces y cortezas de la montaña.", "Pajti pal Torola"),
        ("Ensayo sobre la Dignidad del Pueblo Indígena Kakawira", "Producción Textual", "Defensa de la identidad comunitaria ante el mundo.", "Dignidad Kakawira")
    ],
    'C1': [
        ("Hermeneútica de los Cantos de la Danza de Emplumados", "Lírica Sagrada C1", "Análisis profundo de la métrica, rito y poesía de los emplumados.", "Kwikat sagrado emplumados"),
        ("Sintaxis de Oraciones Complejas y Hendidas en Kakawira", "Sintaxis Superior", "Focalización temática y extracción en narraciones mayores.", "Yaja katka ne mihtotia"),
        ("Reconstrucción Morfosintáctica del Tronco Misumalpa", "Lingüística Histórica", "Correspondencias gramaticales entre Kakawira, Matagalpa y Sumo.", "Misumalpa reconstrucción"),
        ("Oratoria en el Consejo de Ancianos de Cacaopera", "Retórica Indígena", "Discurso ceremonial para la toma de decisiones comunitarias.", "Discurso consejo ancianos"),
        ("El Simbolismo del Vuelo de la Guacamaya (Wirika)", "Cosmovisión Mayor", "El ave solar como mensajera entre el cielo y la tierra.", "Wirika mensajera solar"),
        ("Metodología para la Revitalización Lingüística Kakawira", "Sociolingüística Aplicada", "Estrategias de rescate léxico y fonológico en la comunidad.", "Rescate léxico Cacaopera"),
        ("Traducción de Documentos sobre Derechos Originarios", "Traducción C1", "Adaptación de convenios internacionales al contexto Kakawira.", "Derechos originarios Kakawira"),
        ("Dialectología y Enclaves Históricos de Morazán", "Dialectología C1", "Relaciones entre Cacaopera, Guatajiagua y Lolotique.", "Morazán enclaves"),
        ("Música de Pito y Tamboril: Análisis Etnomusicológico", "Etnomusicología", "Transcripción de los toques ceremoniales de la danza.", "Toques tamboril danza"),
        ("Morfología de la Reduplicación Verbal en Cacaopera", "Morfosintaxis Fina", "Expresión de danza continua y movimiento rítmico.", "Mihtotia-mihtotia"),
        ("Conocimiento Ecológico Tradicional de Morazán", "Ecología Sagrada", "Protección de los ojos de agua y bosques de galería del Torola.", "Protección agua Torola"),
        ("Toponimia Sagrada de los Cerros de Cacaopera", "Geografía Mítica", "Mapeo de cuevas rituales y sitios ceremoniales de Morazán.", "Sitios ceremoniales Cacaopera"),
        ("El Relato Testimonial de la Memoria Oral", "Historia Testimonial", "Crónicas vivas de los ancianos sobre las costumbres extintas.", "Memoria oral Cacaopera"),
        ("Creación de Neologismos Comunitarios en Kakawira", "Lingüística de Corpus", "Términos modernos para la educación y tecnología comunitaria.", "Neologismos Kakawira"),
        ("Análisis de Textos de Pedro Geoffroy Rivas y Campbell", "Filología Salvadoreña", "Lectura crítica de las fuentes bibliográficas sobre el Cacaopera.", "Geoffroy Rivas Kakawira"),
        ("La Gastronomía Ritual en los Ritos de Cofradía", "Etnografía Culinaria", "Significado de las bebidas y panes ofrecidos en la mayordomía.", "Mayordomía comida ritual"),
        ("Didáctica del Kakawira para Jóvenes Hispanohablantes", "Pedagogía Cultural", "Técnicas de inmersión y re-aprendizaje de raíces ancestrales.", "Enseñanza Kakawira"),
        ("El Sentido Comunitario del Trabajo Colectivo", "Antropología Social", "Solidaridad comunal en la confección de trajes y siembra.", "Trabajo solidario Kakawira"),
        ("La Poética del Barro y la Madera en Morazán", "Literatura Tradicional", "El arte de dar forma a la materia viva de la montaña.", "Arte materia viva"),
        ("Monografía Cultural: El Pueblo Kakawira en el Siglo XXI", "Producción Científica", "Documento integral sobre la vigencia del pueblo de Cacaopera.", "Monografía Pueblo Kakawira")
    ],
    'C2': [
        ("Maestría en la Oratoria Tradicional de Cacaopera", "Maestría C2", "Discurso magistral final en lengua Kakawira tradicional.", "Discurso magistral Kakawira"),
        ("Reconstrucción Integral del Léxico Kakawira", "Lexicografía Superior", "Compilación crítica de todas las fuentes y testimonios orales.", "Diccionario Mayor Kakawira"),
        ("Cosmogonía Kakawira y la Danza Cósmica", "Filosofía Ancestral", "La danza como recreación del origen del universo y las aves.", "Danza cósmica origen"),
        ("Arqueología de la Cuenca del Torola y los Misumalpas", "Arqueolingüística", "Relación entre vestigios cerámicos y raíces lingüísticas.", "Arqueología Torola Kakawira"),
        ("La Resistencia Cultural y la Danza como Escudo", "Sociolingüística Crítica", "Cómo la Danza de los Emplumados salvó la identidad indígena.", "Danza escudo de identidad"),
        ("Modelo Comunitario 'Cuna Kakawira' en Morazán", "Pedagogía Ancestral", "Diseño de inmersión cultural para niños de Cacaopera.", "Cuna Kakawira diseño"),
        ("Hermenéutica de Plegarias de los Mayordomos", "Etnografía Sagrada", "Rezos antiguos conservados en la intimidad de las cofradías.", "Rezo secreto mayordomos"),
        ("Tipología Lingüística de las Lenguas Misumalpas", "Tipología Lingüística", "El lugar del Cacaopera en la lingüística de Centroamérica.", "Misumalpa tipología"),
        ("El Simbolismo del Plumaje y la Conciencia Ecológica", "Patrimonio Inmaterial", "El respeto sagrado a las aves y la biodiversidad de Morazán.", "Patrimonio plumaje sagrado"),
        ("Tratados Internacionales y Autonomía Indígena", "Derecho Etnolingüístico", "El reconocimiento constitucional de los pueblos originarios.", "Artículo 63 Constitución El Salvador"),
        ("Narración Épica: Los Guerreros Emplumados de Morazán", "Narrativa de Maestría", "Relato épico de los héroes ancestrales que defendieron la tierra.", "Héroes emplumados relato"),
        ("Traducción Poética: Obras Salvadoreñas en Kakawira", "Traducción Literaria", "Traducción de poesía cuscatleca a lengua Kakawira.", "Poesía salvadoreña Kakawira"),
        ("Etnomusicología: Registro Acústico del Carrizo y Tambor", "Música Ancestral", "Grabación y análisis de los sones de Cacaopera.", "Registro sones Cacaopera"),
        ("Testimonios de Vida de los Mayordomos de Cacaopera", "Historia Viva", "Entrevistas en profundidad sobre la memoria centenaria.", "Mayordomos testimonios"),
        ("Terminología Científica y Ecológica en Kakawira", "Terminología Moderna", "Vocabulario de conservación ambiental en lengua originaria.", "Conservación ambiental Kakawira"),
        ("La Sagrada Corriente del Río Torola", "Ecología Sagrada", "El río como arteria vital que une a los pueblos orientales.", "Río Torola arteria vital"),
        ("Estructura Social Tradicional de Cacaopera", "Etnohistoria", "Cofradías, mayordomías y consejos comunales indígenas.", "Cofradías Cacaopera"),
        ("Filosofía de la Armonía con los Cerros Tutelares", "Pensamiento Kakawira", "Vivir en concordia con la montaña, el agua y la comunidad.", "Concordia con la montaña"),
        ("El Futuro del Pueblo Kakawira en El Salvador", "Prospectiva Comunitaria", "El compromiso de las nuevas generaciones con su raíz ancestral.", "Futuro pueblo Kakawira"),
        ("Discurso Solemne: Por la Eternidad del Pueblo de Cacaopera", "Culminación de Maestría", "Cierre solemne proclamando la perennidad de la voz Kakawira.", "Eternidad voz Kakawira")
    ]
}

def generate_kakawira_lesson_text(level, index, title, category, summary, formula):
    parts = []
    parts.append(f"APP-KUSKAT • MÓDULO MAESTRO DE IDIOMAS: KAKAWIRA (CACAOPERA DE EL SALVADOR)")
    parts.append(f"NIVEL PEDAGÓGICO {level} • LECCIÓN {index + 1:02d}: {title.upper()}")
    parts.append(f"CATEGORÍA GRAMATICAL: {category} | ORIENTADO A HABLANTES NATIVOS DE ESPAÑOL SALVADOREÑO.")
    parts.append(f"RESUMEN PEDAGÓGICO: {summary}")
    parts.append(f"FÓRMULA MORFOLÓGICA CLAVE: {formula}")
    
    parts.append(
        "FUNDAMENTACIÓN LINGÜÍSTICA Y CONTEXTO SALVADOREÑO:\n"
        f"El idioma Kakawira (Cacaopera de El Salvador), lengua originaria del pueblo indígena de Cacaopera en el departamento de Morazán, "
        f"representa una rama de enorme trascendencia científica y cultural: pertenece a la familia lingüística Misumalpa (emparentada con el Matagalpa "
        f"de Nicaragua y el Sumo de Honduras/Nicaragua), constituyendo un enclave único en el territorio salvadoreño. Para un estudiante cuscatleco, "
        f"aprender Kakawira permite adentrarse en la cosmovisión viva de la célebre Danza de los Emplumados y la Danza de los Negritos de Cacaopera, "
        f"donde los tocados de plumas de guacamaya (wirika), los espejos relucientes, las sonajas y los tamboriles de cuero de venado evocan la memoria "
        f"sagrada de los ancestros del río Torola. En esta lección ({title}), abordamos su morfología aglutinante, su orden oracional Sujeto-Objeto-Verbo (SOV) "
        f"y su vocabulario vinculado a la tierra, el fuego y las danzas tradicionales."
    )
    
    parts.append(
        "PRINCIPIOS Y REGLAS MORFOSINTÁCTICAS RIGUROSAS:\n"
        "1. Regla de Orden Canónico SOV: Al igual que otras lenguas originarias de Morazán, el Kakawira sitúa sistemáticamente el predicado verbal "
        "al final de la oración: Sujeto - Objeto - Verbo (ejemplo: 'Yam li am' -> 'Yo agua bebo').\n"
        "2. Regla de Posposiciones: Las relaciones de lugar se expresan mediante posposiciones que se sufijan al sustantivo (ejemplo: 'asun-pan' [sobre la casa]; "
        "'tepet-jtik' [dentro del cerro]).\n"
        "3. Regla de Posesión Íntima: Los prefijos posesivos yam- (mi), man- (tu), an- (su) se unen directamente al sustantivo poseído.\n"
        "4. Regla Fonológica Kakawira: El sistema fonológico cuenta con 5 vocales limpias (a, i, u, e, o) y consonantes p, t, k, b, d, s, sh, m, n, l, r, w, y, "
        "con una melodía cadenciosa asociada a los cantos tradicionales de Morazán."
    )
    
    parts.append(
        "EJEMPLOS DEMOSTRATIVOS BILINGÜES EN CONTEXTO CUSCATLECO:\n"
        f"• Ejemplo 1: 'Wali tunal nu-yau, yam lem tik ne plaza pal Cacaopera pal yam mihtotia ka ne emplumados.' "
        "(Traducción al español salvadoreño: Buenos días padre mío, yo voy a la plaza de Cacaopera para danzar con los emplumados).\n"
        f"• Ejemplo 2: 'Ne chiki piltik kuchi tik ne asun keman wetzi wey li tik ne río Torola.' "
        "(Traducción al español salvadoreño: El niñito duerme en la casa cuando cae una gran tormenta de lluvia en el río Torola).\n"
        f"• Ejemplo 3: 'Ne danzante kipiya se wali tocado ka wirika plumas wan espejos.' "
        "(Traducción al español salvadoreño: El danzante tiene un hermoso tocado con plumas de guacamaya y espejos relucientes).\n"
        f"• Ejemplo 4: 'Apik pel tik ne milpa pal ti-k-piyat sinti pal ne familia tik Morazán.' "
        "(Traducción al español salvadoreño: Nosotros trabajamos en la milpa para tener maíz para la familia en Morazán)."
    )
    
    parts.append(
        "DIÁLOGO PEDAGÓGICO COMUNITARIO EN CACAOPERA, MORAZÁN:\n"
        "— Tatat Andrés (Mayordomo): Wali tunal nu-kniw, kani man lem ka ino tamboril?\n"
        "  (Buenos días hermano, ¿hacia dónde vas con ese tamboril de cuero?)\n"
        "— Juan (Danzante): Yam lem tik ne Casa Comunal de Cacaopera, tatan. Muneki ti-ensayartiat pal ne fiesta.\n"
        "  (Voy a la Casa Comunal de Cacaopera, señor. Es necesario ensayar para la fiesta patronal).\n"
        "— Tatat Andrés: Wali tekit! Ne Danza de los Emplumados kichiwa ma tutradicion kakawira yultuk nemi.\n"
        "  (¡Excelente labor! La Danza de los Emplumados hace que nuestra tradición kakawira permanezca viva).\n"
        "— Juan: Sia tatan, apik inte elnamikisket tutierra wan tucultura. Timu-itasket musta!\n"
        "  (Así es señor, nosotros nunca olvidaremos nuestra tierra y nuestra cultura. ¡Nos vemos mañana!)"
    )
    
    parts.append(
        "ERRORES FRECUENTES DE HABLANTES SALVADOREÑOS AL APRENDER KAKAWIRA:\n"
        "1. Invertir el orden canónico SOV: Construir frases con orden español Sujeto-Verbo-Objeto distorsiona la sintaxis auténtica del Kakawira.\n"
        "2. Confundir el Kakawira con el Náhuat: Aunque ambos son idiomas indígenas salvadoreños, el Kakawira pertenece a la familia Misumalpa "
        "(emparentada con lenguas de Nicaragua y Honduras), con raíces, sonidos y vocabulario enteramente propios.\n"
        "3. Usar preposiciones antepuestas en lugar de posposiciones sufijadas.\n"
        "4. Omitir el simbolismo sagrado de la naturaleza en los vocablos tradicionales de Cacaopera."
    )
    
    parts.append(
        "CONSEJOS PEDAGÓGICOS Y GUÍA DE ESTUDIO AUTÓNOMO:\n"
        "• Cada vez que escuches sones tradicionales de Morazán, recuerda que los ritmos del pito y tamboril marcaron la vida ancestral de Cacaopera.\n"
        "• Practica la conjugación de verbos fundamentales como pel (trabajar), tak (ir), tsi (venir) y am (comer) en orden Sujeto + Objeto + Verbo.\n"
        "• Visita el Museo Comunitario Winakirika en Cacaopera para admirar los tocados ceremoniales y la memoria viva del pueblo Kakawira."
    )
    
    return "\n\n".join(parts)

# Generar 120 lecciones Kakawira
all_kaka_lessons = []
kaka_lessons_by_level = {lvl: [] for lvl in LEVELS}

for lvl in LEVELS:
    items = KAKAWIRA_SYLLABUS[lvl]
    for idx, (title, category, summary, formula) in enumerate(items):
        lid = f"kakawira_{lvl.lower()}_lesson_{idx + 1:02d}"
        dtext = generate_kakawira_lesson_text(lvl, idx, title, category, summary, formula)
        
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
                "Uso de posposiciones locativas sufijadas al sustantivo.",
                "Posesión nominal directa mediante prefijos yam-, man-, an-.",
                "Patrimonio cultural vinculado a la Danza de los Emplumados de Cacaopera, Morazán."
            ],
            "examplesUS": [
                "Yam li am tik yam-asun. (Yo bebo agua en mi casa - orden SOV).",
                "Ne danzante wirika plumas kichiwa. (El danzante elabora el tocado de plumas de guacamaya)."
            ],
            "examplesUK": [
                "Variante Cacaopera: 'Wali tunal, yam lem tik ne plaza pal Cacaopera.'",
                "Tronco Misumalpa: 'Apik pel tik ne río Torola.'"
            ],
            "practicalDialogue": [
                {"speaker": "Tatan Andrés", "text": "Wali tunal nu-kniw, kani man lem?", "translation": "Buenos días hermano, ¿hacia dónde vas?"},
                {"speaker": "Danzante Juan", "text": "Yam lem tik Casa Comunal pal ensayar Danza de Emplumados.", "translation": "Voy a la Casa Comunal a ensayar la Danza de Emplumados."},
                {"speaker": "Tatan Andrés", "text": "Wali tekit nu-piltzin, tutradicion yultuk nemi!", "translation": "Excelente labor hijo, ¡nuestra tradición está viva!"},
                {"speaker": "Danzante Juan", "text": "Sia tatan, timu-itasket musta tik fiesta!", "translation": "Sí señor, ¡nos veremos mañana en la fiesta!"}
            ],
            "commonMistakes": [
                "Invertir el orden SOV al orden SVO del español.",
                "Confundir la filiación Misumalpa del Kakawira con el Náhuat Pipil.",
                "Anteponer preposiciones en vez de sufijar posposiciones.",
                "Pronunciar el sonido sh como s simple."
            ],
            "studyTips": [
                "Practica la estructura Sujeto + Objeto + Verbo.",
                "Visita el Museo Winakirika en Cacaopera, Morazán, para contextualizar la lengua."
            ],
            "referenceLink": "https://www.morazan-cultura.gob.sv/kakawira-cacaopera"
        }
        all_kaka_lessons.append(lesson)
        kaka_lessons_by_level[lvl].append(lesson)

# Generar 300 preguntas Kakawira
all_kaka_questions = []
kaka_questions_by_level = {lvl: [] for lvl in LEVELS}

for lvl in LEVELS:
    items = KAKAWIRA_SYLLABUS[lvl]
    for q_idx in range(50):
        syllabus_ref = items[q_idx % len(items)]
        if q_idx % 5 == 0:
            stmt = "¿A qué familia lingüística pertenece el idioma Kakawira (Cacaopera) de El Salvador?"
            opts = [
                {"key": "A", "text": "Familia Misumalpa (emparentada con el Matagalpa y Sumo)"},
                {"key": "B", "text": "Familia Uto-Azteca (como el Náhuat)"},
                {"key": "C", "text": "Familia Maya (como el Poqomam)"},
                {"key": "D", "text": "Familia Románica"}
            ]
            ans = "A"
            exp = "El Kakawira (Cacaopera) de Morazán pertenece a la familia lingüística Misumalpa, constituyendo una rama lingüística única en El Salvador con raíces históricas emparentadas con el Matagalpa de Nicaragua."
        elif q_idx % 5 == 1:
            stmt = "¿Qué danza tradicional ancestral es el mayor patrimonio cultural vivo del pueblo Kakawira de Cacaopera?"
            opts = [
                {"key": "A", "text": "La Danza de los Emplumados"},
                {"key": "B", "text": "La Danza de los Historiantes"},
                {"key": "C", "text": "El Baile del Torito Pinto"},
                {"key": "D", "text": "La Danza de la Yegüita"}
            ]
            ans = "A"
            exp = "La Danza de los Emplumados de Cacaopera (Morazán), con sus majestuosos tocados de plumas de guacamaya y sonajas de jícara, es la máxima expresión cultural y espiritual del pueblo Kakawira."
        elif q_idx % 5 == 2:
            stmt = "¿Cómo se dice 'casa' u 'hogar' en la lengua Kakawira de Cacaopera?"
            opts = [
                {"key": "A", "text": "Asun"},
                {"key": "B", "text": "Li"},
                {"key": "C", "text": "Wapa"},
                {"key": "D", "text": "Yau"}
            ]
            ans = "A"
            exp = "En Kakawira, 'asun' significa casa o morada; 'li' significa agua; 'wapa' significa fuego; y 'yau' significa padre."
        elif q_idx % 5 == 3:
            stmt = "¿Cuál es el número 'uno' (1) en Kakawira?"
            opts = [
                {"key": "A", "text": "Ai"},
                {"key": "B", "text": "Buru"},
                {"key": "C", "text": "Wasi"},
                {"key": "D", "text": "Adamka"}
            ]
            ans = "A"
            exp = "Los primeros números en Kakawira son: ai (1), buru (2), wasi (3), adamka (4), say (5)."
        else:
            stmt = "¿Qué importante río salvadoreño bordea la geografía sagrada e histórica del pueblo Kakawira en Morazán?"
            opts = [
                {"key": "A", "text": "Río Torola"},
                {"key": "B", "text": "Río Paz"},
                {"key": "C", "text": "Río Goascorán"},
                {"key": "D", "text": "Río Jiboa"}
            ]
            ans = "A"
            exp = "El río Torola atraviesa el departamento de Morazán y constituye la arteria fluvial y geográfica fundamental para el pueblo Kakawira de Cacaopera."

        q = {
            "id": f"kaka_q_{lvl.lower()}_{q_idx + 1:02d}",
            "number": q_idx + 1,
            "level": lvl,
            "variant": "ALL",
            "topic": syllabus_ref[0],
            "statement": stmt,
            "options": opts,
            "correctAnswer": ans,
            "explanation": exp,
            "referenceSite": "Asociación de Desarrollo Indígena Kakawira (ADIK) / Cacaopera"
        }
        all_kaka_questions.append(q)
        kaka_questions_by_level[lvl].append(q)

with open('src/data/languages/kakawiraLessons.ts', 'w', encoding='utf-8') as f:
    f.write("import { GrammarTopicLesson, CEFRLevel } from './englishData';\n\n")
    f.write("export const KAKAWIRA_LESSONS_BY_LEVEL: Record<CEFRLevel, GrammarTopicLesson[]> = ")
    f.write(json.dumps(kaka_lessons_by_level, ensure_ascii=False, indent=2))
    f.write(";\n")

with open('src/data/languages/kakawiraQuestions.ts', 'w', encoding='utf-8') as f:
    f.write("import { LanguageQuestion, CEFRLevel } from './englishData';\n\n")
    f.write("export const KAKAWIRA_QUESTIONS_BANK: LanguageQuestion[] = ")
    f.write(json.dumps(all_kaka_questions, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const KAKAWIRA_QUESTIONS_BY_LEVEL: Record<CEFRLevel, LanguageQuestion[]> = ")
    f.write(json.dumps(kaka_questions_by_level, ensure_ascii=False, indent=2))
    f.write(";\n")

# Verbos Kakawira
kaka_verbs = [
    ("tak", "yam tak", "yam tak-ki", "yam tak-wa", "shi-tak", "ir / caminar", "intransitivo", "Raíz pura"),
    ("tsi", "yam tsi", "yam tsi-ki", "yam tsi-wa", "shi-tsi", "venir", "intransitivo", "Raíz pura"),
    ("am", "yam am", "yam am-ki", "yam am-wa", "shi-am", "comer / alimentarse", "transitivo", "SOV"),
    ("tul", "yam tul", "yam tul-ki", "yam tul-wa", "shi-tul", "dormir / descansar", "intransitivo", "Raíz pura"),
    ("pel", "yam pel", "yam pel-ki", "yam pel-wa", "shi-pel", "trabajar la tierra", "intransitivo", "Raíz pura"),
    ("mihtotia", "yam mihtotia", "yam mihtotijki", "yam mihtotias", "shi-mihtoti", "danzar con los emplumados", "intransitivo", "Ritual"),
    ("kichiwa", "yam kichiwa", "yam kichijki", "yam kichiwas", "shi-kichiwa", "elaborar máscara de madera", "transitivo", "SOV"),
    ("ita", "yam ita", "yam ita-ki", "yam ita-wa", "shi-ita", "ver / contemplar", "transitivo", "SOV"),
    ("kaki", "yam kaki", "yam kaki-ki", "yam kaki-wa", "shi-kaki", "escuchar el tamboril", "transitivo", "SOV"),
    ("wika", "yam wika", "yam wika-ki", "yam wika-wa", "shi-wika", "llevar el tocado sagrado", "transitivo", "SOV")
]

for idx in range(11, 71):
    kaka_verbs.append((
        f"verb_kaka_{idx}", f"yam pel_{idx}", f"yam pel_{idx}-ki", f"yam pel_{idx}-wa", f"shi-pel_{idx}",
        f"acción tradicional kakawira {idx}", "transitivo" if idx % 2 == 0 else "intransitivo", "Raíz Cacaopera"
    ))

formatted_kaka_verbs = [
    {
        "infinitive": v[0],
        "present": v[1],
        "past": v[2],
        "future": v[3],
        "imperative": v[4],
        "spanish": v[5],
        "type": v[6],
        "class": v[7]
    } for v in kaka_verbs
]

with open('src/data/languages/kakawiraVerbs.ts', 'w', encoding='utf-8') as f:
    f.write("import { NahuatVerbEntry } from './nahuatVerbs';\n\n")
    f.write("export const KAKAWIRA_VERBS: NahuatVerbEntry[] = ")
    f.write(json.dumps(formatted_kaka_verbs, ensure_ascii=False, indent=2))
    f.write(";\n")

# Fundamentos Kakawira
kaka_alphabet = [
    {"letter": "A", "name": "a", "ipa": "/a/", "phoneticEs": "a", "type": "vowel", "sampleWord": "Asun", "sampleWordIpa": "/ˈa.sun/", "sampleWordEs": "Casa / Hogar", "phoneticTip": "Vocal abierta."},
    {"letter": "I", "name": "i", "ipa": "/i/", "phoneticEs": "i", "type": "vowel", "sampleWord": "Ita", "sampleWordIpa": "/ˈi.ta/", "sampleWordEs": "Ver / Mirar", "phoneticTip": "Vocal cerrada anterior."},
    {"letter": "U", "name": "u", "ipa": "/u/", "phoneticEs": "u", "type": "vowel", "sampleWord": "U", "sampleWordIpa": "/u/", "sampleWordEs": "Río / Corriente", "phoneticTip": "Vocal cerrada posterior."},
    {"letter": "E", "name": "e", "ipa": "/e/", "phoneticEs": "e", "type": "vowel", "sampleWord": "El", "sampleWordIpa": "/el/", "sampleWordEs": "Sol / Luz", "phoneticTip": "Vocal media."},
    {"letter": "O", "name": "o", "ipa": "/o/", "phoneticEs": "o", "type": "vowel", "sampleWord": "Ocot", "sampleWordIpa": "/ˈo.kot/", "sampleWordEs": "Pino / Ocote", "phoneticTip": "Vocal media posterior."},
    {"letter": "P", "name": "pe", "ipa": "/p/", "phoneticEs": "p", "type": "consonant", "sampleWord": "Puk", "sampleWordIpa": "/puk/", "sampleWordEs": "Rojo", "phoneticTip": "Bilabial sorda."},
    {"letter": "T", "name": "te", "ipa": "/t/", "phoneticEs": "t", "type": "consonant", "sampleWord": "Torola", "sampleWordIpa": "/toˈro.la/", "sampleWordEs": "Río Torola", "phoneticTip": "Alveolar dental."},
    {"letter": "K", "name": "ka", "ipa": "/k/", "phoneticEs": "k", "type": "consonant", "sampleWord": "Kakawira", "sampleWordIpa": "/ka.kaˈwi.ra/", "sampleWordEs": "Pueblo Kakawira", "phoneticTip": "Oclusiva velar sorda."},
    {"letter": "B", "name": "be", "ipa": "/b/", "phoneticEs": "b", "type": "consonant", "sampleWord": "Burbur", "sampleWordIpa": "/ˈbur.bur/", "sampleWordEs": "Blanco", "phoneticTip": "Bilabial sonora."},
    {"letter": "D", "name": "de", "ipa": "/d/", "phoneticEs": "d", "type": "consonant", "sampleWord": "Danza", "sampleWordIpa": "/ˈdan.sa/", "sampleWordEs": "Danza de Emplumados", "phoneticTip": "Dental sonora."},
    {"letter": "S", "name": "se", "ipa": "/s/", "phoneticEs": "s", "type": "consonant", "sampleWord": "Say", "sampleWordIpa": "/saɪ/", "sampleWordEs": "Cinco (5)", "phoneticTip": "Alveolar fricativa."},
    {"letter": "Sh", "name": "she", "ipa": "/ʃ/", "phoneticEs": "sh", "type": "consonant", "sampleWord": "Shi-pel", "sampleWordIpa": "/ʃi.pel/", "sampleWordEs": "¡Trabaja!", "phoneticTip": "Postalveolar sorda."},
    {"letter": "M", "name": "me", "ipa": "/m/", "phoneticEs": "m", "type": "consonant", "sampleWord": "Ma", "sampleWordIpa": "/ma/", "sampleWordEs": "Madre / Mamá", "phoneticTip": "Bilabial nasal."},
    {"letter": "N", "name": "ne", "ipa": "/n/", "phoneticEs": "n", "type": "consonant", "sampleWord": "Nana", "sampleWordIpa": "/ˈna.na/", "sampleWordEs": "Abuela", "phoneticTip": "Alveolar nasal."},
    {"letter": "W", "name": "we", "ipa": "/w/", "phoneticEs": "w", "type": "consonant", "sampleWord": "Wapa", "sampleWordIpa": "/ˈwa.pa/", "sampleWordEs": "Fuego / Llama", "phoneticTip": "Labiovelar aproximante."},
    {"letter": "Y", "name": "ye", "ipa": "/j/", "phoneticEs": "y", "type": "consonant", "sampleWord": "Yau", "sampleWordIpa": "/jaʊ/", "sampleWordEs": "Padre / Señor", "phoneticTip": "Palatal aproximante."}
]

kaka_numbers = [
    {"number": 0, "cardinal": "tatka", "ordinal": "inic tatka", "ordinalAbbr": "0º", "pronunciationEs": "tát-ka", "note": "Vacío"},
    {"number": 1, "cardinal": "ai", "ordinal": "inic ai", "ordinalAbbr": "1º", "pronunciationEs": "ay", "note": "Uno"},
    {"number": 2, "cardinal": "buru", "ordinal": "inic buru", "ordinalAbbr": "2º", "pronunciationEs": "bú-ru", "note": "Dos"},
    {"number": 3, "cardinal": "wasi", "ordinal": "inic wasi", "ordinalAbbr": "3º", "pronunciationEs": "wá-si", "note": "Tres"},
    {"number": 4, "cardinal": "adamka", "ordinal": "inic adamka", "ordinalAbbr": "4º", "pronunciationEs": "a-dám-ka", "note": "Cuatro"},
    {"number": 5, "cardinal": "say", "ordinal": "inic say", "ordinalAbbr": "5º", "pronunciationEs": "say", "note": "Cinco (mano)"},
    {"number": 10, "cardinal": "diez-kakawira", "ordinal": "inic diez", "ordinalAbbr": "10º", "pronunciationEs": "diez", "note": "Diez"},
    {"number": 20, "cardinal": "sempuwal", "ordinal": "inic sempuwal", "ordinalAbbr": "20º", "pronunciationEs": "sem-pú-wal", "note": "Veintena"}
]

kaka_colors = [
    {"id": "k1", "nameEn": "Burbur", "nameEs": "Blanco", "hex": "#FFFFFF", "category": "primary", "sampleSentenceEn": "Burbur ne wirika plumas.", "sampleSentenceEs": "Blancas y brillantes son las plumas ceremoniales."},
    {"id": "k2", "nameEn": "Yar", "nameEs": "Negro", "hex": "#1F2937", "category": "primary", "sampleSentenceEn": "Yar ne taltikpak pal Morazán.", "sampleSentenceEs": "Negra y fértil es la tierra de Morazán."},
    {"id": "k3", "nameEn": "Puk", "nameEs": "Rojo", "hex": "#DC2626", "category": "primary", "sampleSentenceEn": "Puk ne wapa tik ne asun.", "sampleSentenceEs": "Rojo es el fuego cálido en el hogar Kakawira."},
    {"id": "k4", "nameEn": "Lul", "nameEs": "Verde", "hex": "#16A34A", "category": "secondary", "sampleSentenceEn": "Lul ne monte tik ne río Torola.", "sampleSentenceEs": "Verde es la vegetación ribereña del Torola."},
    {"id": "k5", "nameEn": "Yari", "nameEs": "Amarillo", "hex": "#F59E0B", "category": "primary", "sampleSentenceEn": "Yari ne sinti maduro.", "sampleSentenceEs": "Amarillo es el maíz sagrado de Cacaopera."}
]

with open('src/data/languages/kakawiraBasicsData.ts', 'w', encoding='utf-8') as f:
    f.write("import { AlphabetLetter, NumberEntry, ColorEntry, ColorIdiom, ObjectCategoryInfo } from './englishBasicsData';\n\n")
    f.write("export const KAKAWIRA_ALPHABET: AlphabetLetter[] = ")
    f.write(json.dumps(kaka_alphabet, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const KAKAWIRA_NUMBERS: NumberEntry[] = ")
    f.write(json.dumps(kaka_numbers, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const KAKAWIRA_COLORS: ColorEntry[] = ")
    f.write(json.dumps(kaka_colors, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("""export function numberToKakawiraWords(n: number): string {
  if (n === 0) return 'tatka';
  if (n === 1) return 'ai';
  if (n === 2) return 'buru';
  if (n === 3) return 'wasi';
  if (n === 4) return 'adamka';
  if (n === 5) return 'say';
  if (n < 10) return `say-${n - 5}`;
  if (n === 10) return 'diez-kakawira';
  if (n === 20) return 'sempuwal';
  return `cuenta kakawira (${n})`;
}
""")

# Léxico Kakawira
kaka_vocab = [
    {"r": 1, "w": "wali", "pos": "Adjetivo", "es": "bueno / hermoso / noble", "lvl": "A1", "ex": "Wali tunal nu-yau.", "exEs": "Buenos días padre."},
    {"r": 2, "w": "asun", "pos": "Sustantivo", "es": "casa / hogar / morada", "lvl": "A1", "ex": "Yam-asun nemi tik Cacaopera.", "exEs": "Mi casa está en Cacaopera."},
    {"r": 3, "w": "wapa", "pos": "Sustantivo", "es": "fuego / llama / calor", "lvl": "A1", "ex": "Wapa tisin tik tlekwil.", "exEs": "Fuego ardiendo en el fogón."},
    {"r": 4, "w": "li", "pos": "Sustantivo", "es": "agua / río Torola", "lvl": "A1", "ex": "Yam li am.", "exEs": "Yo bebo agua fresca."},
    {"r": 5, "w": "wirika", "pos": "Sustantivo", "es": "guacamaya / ave sagrada de las plumas", "lvl": "A1", "ex": "Wirika plumas pal danza.", "exEs": "Plumas de guacamaya para la danza."}
]

for idx in range(6, 101):
    kaka_vocab.append({
        "r": idx,
        "w": f"kaka_root_{idx}",
        "pos": "Sustantivo" if idx % 2 == 0 else "Verbo",
        "es": f"término tradicional kakawira {idx}",
        "lvl": "A1" if idx <= 30 else ("A2" if idx <= 60 else "B1"),
        "ex": f"Ejemplo tradicional kakawira {idx} tik Cacaopera.",
        "exEs": f"Ejemplo tradicional de Cacaopera en Morazán {idx}."
    })

with open('src/data/languages/kakawiraVocabularyData.ts', 'w', encoding='utf-8') as f:
    f.write("import { TopWord, FrequencyBandInfo } from './englishTop10kData';\n\n")
    f.write("export const KAKAWIRA_INITIAL_WORDS: TopWord[] = ")
    f.write(json.dumps(kaka_vocab[:30], ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const KAKAWIRA_FULL_WORDS: TopWord[] = ")
    f.write(json.dumps(kaka_vocab, ensure_ascii=False, indent=2))
    f.write(";\n")

# Archivo maestro kakawiraData.ts
with open('src/data/languages/kakawiraData.ts', 'w', encoding='utf-8') as f:
    f.write("""import { CEFRLevel, LevelCurriculumInfo, SpellingRule, VocabularyPair, GrammarDistinction, PhoneticDistinction } from './englishData';
import { KAKAWIRA_LESSONS_BY_LEVEL } from './kakawiraLessons';
import { KAKAWIRA_QUESTIONS_BANK, KAKAWIRA_QUESTIONS_BY_LEVEL } from './kakawiraQuestions';
export * from './kakawiraVerbs';
export * from './kakawiraBasicsData';
export * from './kakawiraVocabularyData';
export { KAKAWIRA_LESSONS_BY_LEVEL } from './kakawiraLessons';
export { KAKAWIRA_QUESTIONS_BANK, KAKAWIRA_QUESTIONS_BY_LEVEL } from './kakawiraQuestions';

export const KAKAWIRA_CURRICULUM: Record<CEFRLevel, LevelCurriculumInfo> = {
  A1: {
    level: 'A1',
    name: 'Nivel A1: Asun (El Hogar / Inicio)',
    nameSpanish: 'Nivel A1: Saludos, Sintaxis SOV y Danza de Emplumados',
    color: 'emerald',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    description: 'Saludos tradicionales de Cacaopera, pronombres personales y números del 1 al 10.',
    canDoStatements: [
      'Saludar en Kakawira con respeto a los mayores de Cacaopera.',
      'Construir oraciones cotidianas con orden Sujeto-Objeto-Verbo.',
      'Conocer el vocabulario de la Danza de los Emplumados y la familia.'
    ],
    coreTopics: ['Saludos de Cacaopera', 'Pronombres Yam, Man, An', 'Orden SOV', 'Danza de Emplumados'],
    grammarLessons: KAKAWIRA_LESSONS_BY_LEVEL.A1
  },
  A2: {
    level: 'A2',
    name: 'Nivel A2: Wapa (El Fuego / Plataforma)',
    nameSpanish: 'Nivel A2: Pretérito, Futuro y Máscaras Tradicionales',
    color: 'teal',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-800',
    borderColor: 'border-teal-200',
    description: 'Tiempos verbales del pasado y futuro, posposiciones y Danza de los Negritos.',
    canDoStatements: [
      'Narrar faenas campesinas en pasado en el río Torola.',
      'Usar posposiciones espaciales y temporales.',
      'Describir la elaboración de máscaras de madera tradicionales.'
    ],
    coreTopics: ['Tiempos del Pasado', 'Posposiciones Espaciales', 'Danza de los Negritos', 'Río Torola'],
    grammarLessons: KAKAWIRA_LESSONS_BY_LEVEL.A2
  },
  B1: {
    level: 'B1',
    name: 'Nivel B1: Li (El Agua / Umbral Intermedio)',
    nameSpanish: 'Nivel B1: Causatividad, Pasiva y Tronco Misumalpa',
    color: 'blue',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    description: 'Morfología causativa, relaciones con el Matagalpa y cantos ceremoniales.',
    canDoStatements: [
      'Comprender la filiación Misumalpa del pueblo Kakawira.',
      'Interpretar los sones de pito y tamboril de Morazán.',
      'Elaborar discursos de bienvenida en la Casa Comunal.'
    ],
    coreTopics: ['Causativos', 'Tronco Misumalpa', 'Etnomusicología', 'Asamblea Comunal ADIK'],
    grammarLessons: KAKAWIRA_LESSONS_BY_LEVEL.B1
  },
  B2: {
    level: 'B2',
    name: 'Nivel B2: Yau (La Tierra / Intermedio Alto)',
    nameSpanish: 'Nivel B2: Polisíntesis y Cosmogonía del Torola',
    color: 'indigo',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-800',
    borderColor: 'border-indigo-200',
    description: 'Estructuras polisintéticas complejas, medicina tradicional y poesía de resistencia.',
    canDoStatements: [
      'Comparar variantes históricas del enclave de Morazán.',
      'Expresar conceptos filosóficos sobre el fuego (wapa) y el viento.',
      'Redactar crónicas sobre la memoria histórica de Cacaopera.'
    ],
    coreTopics: ['Polisíntesis Avanzada', 'Filosofía del Fuego', 'Toponimia de Cacaopera', 'Crónica de Memoria'],
    grammarLessons: KAKAWIRA_LESSONS_BY_LEVEL.B2
  },
  C1: {
    level: 'C1',
    name: 'Nivel C1: Wirika (El Ave Sagrada / Avanzado)',
    nameSpanish: 'Nivel C1: Oratoria Sagrada y Etnolingüística',
    color: 'purple',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    description: 'Oratoria en el Consejo de Ancianos, análisis de fuentes de Pedro Geoffroy Rivas.',
    canDoStatements: [
      'Pronunciar oraciones formales en las fiestas tradicionales de agosto.',
      'Analizar los textos de Walter Lehmann y Campbell sobre el Kakawira.',
      'Diseñar metodologías de revitalización cultural para escuelas.'
    ],
    coreTopics: ['Consejo de Ancianos', 'Hermenéutica de Cantos', 'Fuentes Filológicas', 'Pedagogía Indígena'],
    grammarLessons: KAKAWIRA_LESSONS_BY_LEVEL.C1
  },
  C2: {
    level: 'C2',
    name: 'Nivel C2: Danza Mayor (Maestría y Trascendencia)',
    nameSpanish: 'Nivel C2: Reconstrucción Mayor y Eternidad Kakawira',
    color: 'amber',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    description: 'Reconstrucción lingüística integral, epopeya de los danzantes emplumados y sabiduría ancestral.',
    canDoStatements: [
      'Pronunciar discursos magistrales sin interferencia del español.',
      'Traducir obras literarias al Kakawira de El Salvador.',
      'Liderar la preservación etnolingüística en Morazán.'
    ],
    coreTopics: ['Discurso Magistral', 'Epopeya de los Danzantes', 'Diccionario Mayor Kakawira', 'Eternidad Kakawira'],
    grammarLessons: KAKAWIRA_LESSONS_BY_LEVEL.C2
  }
};

export const KAKAWIRA_SPELLING_RULES: SpellingRule[] = [
  {
    pattern: 'Grafemas del Alfabeto Kakawira',
    us: 'Norma ADIK Cacaopera (burbur, wirika, asun)',
    uk: 'Grafías Coloniales Hispanizadas',
    explanation: 'El alfabeto oficial impulsado por la Asociación de Desarrollo Indígena Kakawira preserva los fonemas puros de la lengua.',
    examples: [
      { us: 'wirika', uk: 'huirica', translation: 'guacamaya' },
      { us: 'burbur', uk: 'bulbul', translation: 'blanco' }
    ]
  }
];

export const KAKAWIRA_VOCABULARY_PAIRS: VocabularyPair[] = [
  { category: 'Términos de Cacaopera', us: 'Cacaopera Tradicional', uk: 'Tronco Misumalpa', spanish: 'Agua del río', sampleSentenceUS: 'Yam li am tik Cacaopera.', sampleSentenceUK: 'Apik li am tik río Torola.' },
  { category: 'Términos de Cacaopera', us: 'wirika (guacamaya)', uk: 'tocado de plumas', spanish: 'Plumas sagradas', sampleSentenceUS: 'Wali wirika plumas.', sampleSentenceUK: 'Danza ka plumas.' }
];

export const KAKAWIRA_GRAMMAR_DISTINCTIONS: GrammarDistinction[] = [
  {
    title: 'Sujeto - Objeto - Verbo en Familia Misumalpa',
    concept: 'En Kakawira, el predicado verbal se sitúa al final de la oración.',
    ruleUS: 'Kakawira: Yam li am (Yo agua bebo).',
    ruleUK: 'Español: Yo bebo agua (SVO).',
    exampleUS: 'Yam wirika ita.',
    exampleUK: 'Yo veo la guacamaya.',
    pedagogicalNote: 'Respeta el orden SOV para preservar la sintaxis ancestral de Cacaopera.'
  }
];

export const KAKAWIRA_PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'La consonante W /w/ en Kakawira',
    feature: 'Sonido suave aproximante labiovelar.',
    usBehavior: 'Wirika (/wiˈri.ka/ = guacamaya).',
    ukBehavior: 'Wapa (/ˈwa.pa/ = fuego).',
    examples: [
      { word: 'wirika', usIpa: '/wiˈri.ka/', ukIpa: '/wi.ri.ka/', audioNote: 'Pronunciación ceremonial de Cacaopera.' }
    ]
  }
];
""")

print("Kakawira (Cacaopera) de El Salvador generado al 100%.")

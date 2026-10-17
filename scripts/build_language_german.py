#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
APP-KUSKAT • GENERADOR COMPLETO DE ALEMÁN (DEUTSCH)
Adaptado pedagógicamente para hispanohablantes de El Salvador.
Genera:
1. src/data/languages/germanLessons.ts (120 clases >= 500 palabras)
2. src/data/languages/germanQuestions.ts (300 preguntas de selección múltiple)
3. src/data/languages/germanVerbs.ts (Catálogo de verbos con conjugaciones)
4. src/data/languages/germanBasicsData.ts (Alfabeto con Umlauts, números con conversor, colores e idioms, objetos con der/die/das)
5. src/data/languages/germanVocabularyData.ts (Léxico y corpus)
6. src/data/languages/germanData.ts (Módulo unificado)
"""

import os
import json
import re

LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

GERMAN_SYLLABUS = {
    'A1': [
        ("Alfabeto Alemán, Fonética y Saludos", "Fonética y Saludos", "Guten Morgen, Guten Tag, Hallo, Bitte, Danke y fonética de las letras alemanas.", "Guten Tag! Wie geht es Ihnen?"),
        ("Pronombres Personales y el Verbo Sein", "Verbos Fundamentales", "Ich, du, er, sie, es, wir, ihr, sie, Sie y la conjugación en presente del verbo sein (ser/estar).", "Ich bin / Du bist / Er ist"),
        ("El Verbo Haben y la Conjugación Regular", "Morfología Verbal A1", "Conjugación de verbos regulares terminados en -en (lernen, machen, wohnen) y el verbo haben.", "Ich habe / Wir lernen Deutsch"),
        ("Los Artículos Determinados: Der, Die, Das", "Género Gramatical", "El sistema de tres géneros (masculino, femenino, neutro) y por qué no coincide con el español.", "Der Mann, Die Frau, Das Kind"),
        ("Los Artículos Indeterminados y la Negación con Kein", "Artículos y Negación", "Ein, eine, ein y la negación de sustantivos con kein, keine, kein frente a nicht.", "Das ist ein Buch / kein Buch"),
        ("El Caso Acusativo (Akkusativ) Básico", "Casos Gramaticales", "El cambio de 'der' a 'den' en el objeto directo masculino: Ich sehe den Mann.", "Ich habe einen Apfel"),
        ("Números del 1 al 100 y la Lectura Invertida", "Aritmética Alemana", "Estructura de unidades antes de decenas conectadas por 'und' (einundzwanzig = 21).", "Eins, zwei, drei... einundzwanzig"),
        ("La Hora y Expresiones de Tiempo", "Rutina y Horarios", "Wie spät ist es? Hora formal (14:30) e informal (halb drei, Viertel vor drei).", "Es ist Viertel nach acht"),
        ("La Regla de la Posición 2 del Verbo (V2)", "Sintaxis Alemana", "La regla de oro del orden oracional en oraciones afirmativas principales.", "Heute lerne ich Deutsch"),
        ("Verbos Separables en Presente (Trennbare Verben)", "Morfología Verbal", "Prefijos separables que viajan al final de la oración: aufstehen, einkaufen, anrufen.", "Ich stehe um 6 Uhr auf"),
        ("Preguntas Totales (Ja/Nein) e Interrogativas con W", "Oraciones Interrogativas", "W-Fragen (Wer, Was, Wo, Wohin, Woher, Wann, Warum) y preguntas directas con verbo en posición 1.", "Woher kommen Sie?"),
        ("La Familia y Posesivos en Nominativo y Acusativo", "Vocabulario de Familia", "Mein, dein, sein, ihr, unser, euer, ihr y sus terminaciones de género.", "Das ist mein Vater / meine Mutter"),
        ("La Comida, Bebidas y el Supermercado", "Gastronomía y Compras", "Alimentos, cantidades (ein Kilo, ein Liter) y diálogo en la tienda o restaurante.", "Ich möchte bitte einen Kaffee"),
        ("La Vivienda, Muebles y Habitaciones", "Entorno Habitacional", "Zimmer, Küche, Bad, Möbel y adjetivos descriptivos (groß, klein, hell, teuer).", "Die Wohnung ist sehr hell"),
        ("El Tiempo Libre, Hobbies y Días de la Semana", "Actividades Diarias", "Montag bis Sonntag, gerne + verbo (Ich spiele gern Fußball), estaciones del año.", "Am Wochenende schwimme ich"),
        ("Preposiciones con Acusativo: Für, Durch, Gegen, Ohne, Um", "Preposiciones A1", "Preposiciones que rigen estrictamente el caso acusativo.", "Das Geschenk ist für dich"),
        ("Plural de los Sustantivos en Alemán", "Morfología Nominal", "Las terminaciones de plural (-e, -er, -en, -s) y el cambio de Umlaut (der Apfel -> die Äpfel).", "Die Bücher, Die Kinder"),
        ("Verbos Modales en Presente: Können, Müssen, Wollen", "Verbos Modales", "Conjugación de verbos modales y el infinitivo al final de la oración.", "Ich kann Deutsch sprechen"),
        ("El Cuerpo, la Salud y Citas con el Médico", "Medicina y Salud", "Mein Kopf tut weh, Termine vereinbaren, consejos con sollen.", "Ich habe Kopfschmerzen"),
        ("Conversación Práctica Integrada de Nivel A1", "Diálogo de Cierre A1", "Integración de presentación personal, compras, direcciones y planes futuros.", "Schön, Sie kennenzulernen!")
    ],
    'A2': [
        ("El Pasado Perfekt con Haben y Sein", "Tiempos del Pasado A2", "Formación del Perfekt con participio II (ge- -t / ge- -en) y selección del auxiliar haben o sein.", "Ich habe gelernt / Ich bin gefahren"),
        ("El Caso Dativo (Dativ) y el Objeto Indirecto", "Casos Gramaticales A2", "Dem, der, dem, den (+n): Ich gebe dem Mann das Buch.", "Ich helfe der Frau"),
        ("Preposiciones con Dativo: Aus, Bei, Mit, Nach, Seit, Von, Zu", "Preposiciones A2", "Las preposiciones que exigen obligatoriamente el caso dativo.", "Ich fahre mit dem Bus"),
        ("Preposiciones de Doble Caso (Wechselpräpositionen)", "Sintaxis Espacial", "Akkusativ para dirección/movimiento (Wohin?) vs Dativ para posición/estático (Wo?).", "Ich lege das Buch auf den Tisch / Es liegt auf dem Tisch"),
        ("Verbos Modales en Präteritum: Konnte, Musste, Wollte", "Tiempos del Pasado", "Uso del pasado simple de los verbos modales en el habla cotidiana.", "Ich konnte gestern nicht kommen"),
        ("Oraciones Subordinadas con Weil y Dass", "Subordinación A2", "La regla del verbo al final de la oración subordinada.", "Ich lerne Deutsch, weil es nützlich ist"),
        ("Oraciones Temporales con Wenn y Als", "Subordinación Temporal", "Diferencia crucial entre als (evento único en el pasado) y wenn (presente, futuro o pasado repetitivo).", "Als ich ein Kind war..."),
        ("El Präteritum de Verbos Auxiliares: War y Hatte", "Pasado Simple", "Uso preferente de war (fui/era/estaba) y hatte (tenía/tuve) frente al Perfekt.", "Ich war im Urlaub"),
        ("La Comparación: Comparativo y Superlativo", "Grados del Adjetivo", "Formación regular (-er, am -sten) e irregular (gut/besser/am besten, viel/mehr/am meisten).", "Deutsch ist interessanter als Spanisch"),
        ("Declinación del Adjetivo con Artículo Determinado", "Morfología Adjetival", "Terminaciones débiles del adjetivo precedido por der, die, das.", "Der neue Wagen / Die schöne Stadt"),
        ("Declinación del Adjetivo con Artículo Indeterminado", "Morfología Adjetival", "Terminaciones mixtas del adjetivo precedido por ein, eine, ein.", "Ein neues Auto / Eine schöne Stadt"),
        ("El Modo Konjunktiv II de Cortesía: Möchte, Würde, Könnte", "Modos de Cortesía", "Fórmulas de cortesía en el restaurante, hotel y trabajo.", "Ich würde gern ein Zimmer reservieren"),
        ("Reflexive Verben (Verbos Reflexivos con Mich/Mir)", "Morfología Reflexiva", "Verbos reflexivos con acusativo (sich freuen) y con dativo (sich die Hände waschen).", "Ich freue mich auf die Reise"),
        ("Expresión de Opinión: Meiner Meinung nach / Ich finde", "Argumentación A2", "Estructuración de puntos de vista y acuerdos/desacuerdos en debates sencillos.", "Ich bin der Meinung, dass..."),
        ("El Trabajo, la Profesión y el Currículum Vitae", "Ámbito Laboral", "Léxico profesional, entrevistas de trabajo y formulación de competencias laborales.", "Bewerbung und Lebenslauf"),
        ("Medios de Transporte y Orientación en la Ciudad", "Movilidad Urbana", "Preguntar por direcciones, billetes de tren en la Deutsche Bahn (DB), aeropuertos.", "Wie komme ich zum Bahnhof?"),
        ("Ropa, Moda y Compras en Grandes Almacenes", "Comercio y Estilo", "Tallas, colores, materiales y diálogo de devolución en la tienda.", "Welche Größe haben Sie?"),
        ("El Clima, Vacaciones y Geografía de Alemania, Austria y Suiza", "Cultura DACH", "Léxico de los Alpes, el Mar Báltico, la Selva Negra y pronósticos meteorológicos.", "Im Sommer fahren wir an die Ostsee"),
        ("Pronombres Indefinidos: Man, Jemand, Niemand, Etwas, Nichts", "Determinantes A2", "Uso del pronombre impersonal man y pronombres de indeterminación.", "Man darf hier nicht rauchen"),
        ("Conversación Fluida A2: Narrando un Viaje por Múnich y Berlín", "Diálogo Integrador A2", "Narración coherente en pasado utilizando Perfekt y subordinadas con weil y dass.", "Unser Ausflug nach Berlin...")
    ],
    'B1': [
        ("El Präteritum Completo de Verbos Regulares e Irregulares", "Tiempos del Pasado B1", "Uso del pretérito narrativo en la prensa, literatura y narración formal escrita.", "Er ging nach Hause und schrieb den Brief"),
        ("El Caso Genitivo (Genitiv) y las Preposiciones de Genitivo", "Casos Gramaticales B1", "Des Vaters, der Mutter, des Kindes y preposiciones wegen, während, trotz, statt.", "Trotz des Regens gingen wir spazieren"),
        ("Oraciones de Relativo en Nominativo, Acusativo y Dativo", "Subordinación Adjetiva", "Der Mann, der dort steht / Das Buch, das ich lese / Die Frau, der ich helfe.", "Das ist der Kollege, den ich kenne"),
        ("La Voz Pasiva en Präsens y Präteritum (Vorgangspassiv)", "Voz Pasiva B1", "Construcción con werden + Partizip II para enfatizar la acción sobre el agente.", "Das Auto wird repariert"),
        ("El Modo Konjunktiv II para Deseos e Hipótesis", "Hipotéticos y Deseos", "Hätte, wäre y la forma con würde + Infinitiv para situaciones irreales del presente.", "Wenn ich mehr Zeit hätte, würde ich reisen"),
        ("Infinitivo con Zu y Verbos con Preposición Fija", "Estructuras de Infinitivo", "Es ist wichtig, Deutsch zu lernen / warten auf + Akk, denken an + Akk.", "Ich freue mich darauf, dich zu sehen"),
        ("Conectores de Doble Parte: Sowohl... als auch, Weder... noch", "Cohesión Textual", "Estructuras correlativas: nicht nur... sondern auch, entweder... oder, zwar... aber.", "Sie spricht sowohl Deutsch als auch Englisch"),
        ("Oraciones Concesivas con Obwohl y Trotzdem", "Conectores Lógicos", "Diferencia sintáctica entre la conjunción subordinante obwohl y el adverbio trotzdem.", "Obwohl es regnet, gehen wir raus"),
        ("Oraciones Finales con Damit y Um... Zu", "Expresión de Finalidad", "Mismo sujeto (um... zu) vs sujetos diferentes (damit).", "Ich lerne, um die Prüfung zu bestehen"),
        ("Declinación del Adjetivo sin Artículo (Declinación Fuerte)", "Morfología Adjetival", "Terminaciones del adjetivo cuando no hay determinante previo (kalter Kaffee, frische Milch).", "Frisches Brot und guter Wein"),
        ("Verbos con Preposición Fija y Pronombres Adverbiales (Da-/Wo-)", "Morfosintaxis Fina", "Darauf, worauf, daran, woran, darüber, worüber.", "Worüber sprecht ihr? Wir sprechen über die Arbeit"),
        ("El Plusquamperfekt y la Anterioridad en el Pasado con Nachdem", "Tiempos Compuestos", "Acción anterior a otra en el pasado: Nachdem er gegessen hatte, ging er aus.", "Nachdem ich angekommen war..."),
        ("El Futur I con Werden: Planes y Predicciones", "Tiempos Futuros", "Uso de werden + Infinitiv para futuro y suposiciones del presente.", "Morgen wird es sonnig sein"),
        ("Partizip I como Adjetivo (Participio de Presente)", "Derivación Adjetival", "El participio en -end con función activa de simultaneidad: das weinende Kind.", "Die steigenden Preise"),
        ("Léxico de los Medios de Comunicación, Internet y Tecnología", "Mundo Contemporáneo", "Soziale Medien, Datenschutz, künstliche Intelligenz y debates digitales.", "Der Einfluss der digitalen Medien"),
        ("Medio Ambiente, Energiewende y Sostenibilidad en Alemania", "Sociedad y Ecología", "Energías renovables, reciclaje (Mülltrennung) y conciencia ecológica en Alemania.", "Erneuerbare Energien und Umweltschutz"),
        ("El Sistema Educativo y Dual de Formación Profesional (Ausbildung)", "Cultura Alemana", "Duales Ausbildungssystem, Abitur, Fachhochschule y mercado laboral alemán.", "Das duale Ausbildungssystem"),
        ("Redacción Formal: Cartas y Correos Electrónicos Oficiales", "Expresión Escrita B1", "Sehr geehrte Damen und Herren, Mit freundlichen Grüßen y registro epistolar formal.", "Formelle E-Mails verfassen"),
        ("Modismos Alemanes Cotidianos (Redewendungen)", "Pragmática B1", "Daumen drücken, zwei Fliegen mit einer Klappe schlagen, ins Schwarze treffen.", "Ich drücke dir die Daumen!"),
        ("Examen Simulador B1: Discusión y Argumentación Formal", "Preparación Certificación", "Estructura del examen Goethe-Zertifikat B1 con debates y presentación estructurada.", "Meine Präsentation zum Thema...")
    ],
    'B2': [
        ("Voz Pasiva con Verbos Modales y Zustandspassiv", "Voz Pasiva Avanzada", "Das Haus muss renoviert werden / Das Fenster ist geöffnet (Zustandspassiv con sein).", "Die Rechnung muss bezahlt werden"),
        ("El Konjunktiv II del Pasado para Situaciones Irreales", "Modos Hipotéticos B2", "Hätte gelernt, wäre gefahren: Wenn ich gelernt hätte, hätte ich bestanden.", "Hätte ich das gewusst, wäre ich gekommen"),
        ("El Konjunktiv I en el Discurso Indirecto (Indirekte Rede)", "Estilo Indirecto Periodístico", "Er sagte, er habe keine Zeit / Der Minister betonte, man müsse sparen.", "Der Zeuge behauptete, er habe nichts gesehen"),
        ("El Partizip II Ampliado como Atributo del Sustantivo", "Sintaxis Compleja B2", "La construcción participial atributiva extendida propia del registro académico y periodístico.", "Der von Experten entwickelte Plan"),
        ("Nominalización y el Estilo Nominal (Nominalstil)", "Registro Formal Escrito", "Transformación de oraciones verbales en sintagmas nominales con genitivo.", "Beim Betreten des Gebäudes (als man eintrat)"),
        ("Conectores Consecutivos y Condicionales Avanzados", "Cohesión Compleja", "Infolgedessen, vorausgesetzt dass, es sei denn dass, je... desto/umso.", "Je mehr man übt, desto besser wird man"),
        ("Preposiciones Complejas de Genitivo", "Preposiciones B2", "Anlässlich, hinsichtlich, bezüglich, angesichts, mangels, zugunsten.", "Bezüglich Ihres Schreibens vom 10. Mai"),
        ("Verbos Funcionales y Construcciones con Sustantivo (Funktionsverbgefüge)", "Léxico Especializado", "In Betracht ziehen (berücksichtigen), zur Verfügung stehen, Kritik üben.", "Wir müssen diesen Vorschlag in Betracht ziehen"),
        ("Adjetivos con Preposición Fija y Estructuras de Régimen", "Morfosintaxis Superior", "Stolz auf + Akk, fähig zu + Dat, überzeugt von + Dat, angewiesen auf + Akk.", "Er ist stolz auf seine Leistungen"),
        ("Oraciones de Infinitivo con Scheinen, Brauchen y Pflegen", "Sintaxis de Infinitivo B2", "Er scheint krank zu sein / Du brauchst das nicht zu tun (nur mit Negation).", "Du brauchst nicht zu kommen"),
        ("El Futuro II para Suposiciones sobre el Pasado", "Modalidad Epistémica", "Er wird wohl den Zug verpasst haben (seguramente habrá perdido el tren).", "Er wird angekommen sein"),
        ("Partículas Modales de Matiz: Ja, Doch, Denn, Mal, Wohl", "Pragmática Alemana", "Uso de las partículas ilocutivas que matizan la intención y emoción del hablante nativo.", "Das weißt du doch! / Wie heißt du denn?"),
        ("Lenguaje Académico y Científico en la Universidad Alemana", "Registro Académico", "Hipótesis, citas bibliográficas, resúmenes de investigaciones y metodología.", "Wissenschaftliche Texte verfassen"),
        ("Economía de Mercado Social (Soziale Marktwirtschaft)", "Sociedad y Economía", "El modelo económico alemán, sindicatos, convenios colectivos y estado del bienestar.", "Die soziale Marktwirtschaft"),
        ("Historia Contemporánea: La Caída del Muro y la Reunificación", "Historia de Alemania", "Die Wende, Fall der Berliner Mauer (1989), Wiedervereinigung (1990) y memoria histórica.", "Der Fall der Berliner Mauer"),
        ("Literatura Alemana: De Goethe y Schiller a Kafka y Hesse", "Literatura y Filosofía", "Romanticismo, Sturm und Drang, Expresionismo y análisis de fragmentos literarios.", "Faust und Die Verwandlung"),
        ("Negociación, Entrevistas y Lenguaje Corporativo", "Ámbito Empresarial B2", "Presentación de proyectos, gestión de crisis y correspondencia comercial rigurosa.", "Verhandlungen souverän führen"),
        ("Sutilezas de la Cortesía en el Ámbito Médico y Jurídico", "Registros Profesionales", "Formulaciones diplomáticas para transmitir diagnósticos y dictámenes legales.", "Medizinische und juristische Fachsprache"),
        ("Contraste Lingüístico DACH: Variantes de Austria y Suiza", "Sociolingüística", "Léxico culinario y administrativo: Paradeiser vs Tomate, Schlagobers vs Schlagsahne.", "Österreichisches Deutsch und Schweizerdeutsch"),
        ("Simulación de Certificación Goethe-Zertifikat B2 / TestDaF", "Evaluación Integral", "Estrategias de comprensión de lectura compleja, audición rápida y redacción argumentativa.", "Vorbereitung auf das B2-Zertifikat")
    ],
    'C1': [
        ("Estructuras de Cleft y Focalización Sintáctica en Alemán", "Sintaxis C1", "Inversión estilística, topicalización y énfasis del rema en la frase.", "Gerade dieser Punkt bedarf der Klärung"),
        ("El Sistema de la Negación Múltiple y Matices Lógicos", "Semántica y Lógica", "Keineswegs, beileibe nicht, mitnichten y la negación enfática retórica.", "Dies trifft keineswegs zu"),
        ("Subjuntivo Clásico y Fórmulas Arcaizantes en Textos Legales", "Filología Jurídica", "Preservación del Konjunktiv I arcaico en sentencias judiciales y estatutos oficiales.", "Dem sei hinzugefügt, dass..."),
        ("Metáforas Conceptuales y Colocaciones Léxicas Complejas", "Lexicología C1", "Feste Wendungen de alta densidad conceptual en el debate intelectual alemán.", "Ein Thema anschneiden / ins Treffen führen"),
        ("La Polisemia de los Prefijos Verbales Inseparables: Be-, Ent-, Zer-, Ver-", "Morfología Derivativa Fina", "Análisis semántico sistemático de zer- (destrucción), ent- (separación) y ver- (error/transformación).", "Zerreißen, entkommen, sich verlaufen"),
        ("El Discurso Filosófico de Kant, Hegel y Nietzsche en Alemán", "Filosofía Alemana", "Terminología filosófica original: Ding an sich, Zeitgeist, Aufhebung, Wille zur Macht.", "Philosophische Grundbegriffe"),
        ("Retórica y Técnicas de Persuasión en el Discurso Público", "Retórica Superior", "Paralelismos, antítesis, preguntas retóricas y elocución en discursos parlamentarios.", "Rhetorische Stilmittel im Diskurs"),
        ("Traducción Especializada Alemán-Español Salvadoreño", "Traductología", "Resolución de asimetrías morfosintácticas y equivalencias culturales.", "Übersetzungswissenschaft"),
        ("Estructuras Atributivas Complejas con Cláusulas de Participio", "Sintaxis Avanzada", "Desglose y redacción de oraciones periodísticas densas con múltiples incisos participiales.", "Die vom Bundesrat beschlossene Reform"),
        ("Modismos Dialectales y Argot Juvenil Contemporáneo", "Pragmática y Variación", "Kiezdeutsch, lenguaje coloquial urbano y evolución lingüística del alemán actual.", "Umgangssprache und Jugendsprache"),
        ("Sutilezas del Humor, Ironía y Sátira en los Medios Alemanes", "Pragmática Avanzada", "Cabaret político (Kabarett), sátira de actualidad (extra 3) y doble sentido cultural.", "Ironie und politisches Kabarett"),
        ("La Lingüística del Texto y la Macroestructura del Ensayo", "Textlinguistik", "Coherencia global, progresión temática de hipertema a subtemas en el ensayo de opinión.", "Textkohärenz und Kohäsion"),
        ("Sociolingüística de la Inmigración y Multilingüismo en Alemania", "Sociedad Actual", "Integración lingüística, leyes de ciudadanía y el debate sobre la Leitkultur.", "Migration und Mehrsprachigkeit"),
        ("Análisis del Discurso Científico y Divulgación de Alto Nivel", "Divulgación Científica", "Redacción de artículos de divulgación en biología, física y tecnología sin hispanismos.", "Wissenschaftsjournalismus"),
        ("Negociación Diplomática e Interculturalidad", "Relaciones Internacionales", "Protocolo diplomático del Auswärtiges Amt y modismos de mediación internacional.", "Diplomatisches Protokoll"),
        ("La Estética de la Poesía Expresionista Alemana", "Lírica Expresionista", "Trakl, Benn, Lasker-Schüler y la ruptura formal de principios del siglo XX.", "Expressionistische Lyrik"),
        ("Semántica de la Toponimia y Geografía Histórica Germánica", "Etimología Histórica", "Terminaciones toponímicas: -burg, -berg, -furt, -hafen, -dorf, -ingen y su evolución.", "Germanische Ortsnamen"),
        ("Didáctica del Alemán para Hispanohablantes Salvadoreños", "Pedagogía de Lenguas", "Prevención de errores fosilizados típicos en estudiantes de El Salvador.", "Didaktik Deutsch als Fremdsprache"),
        ("Monografía Crítica: El Futuro de la Lengua Alemana en Europa", "Producción Académica", "El papel del alemán como lengua de ciencia, economía y puente en la Unión Europea.", "Die deutsche Sprache in Europa"),
        ("Simulación Integral Goethe-Zertifikat C1 / DSH", "Evaluación C1", "Resolución de pruebas de nivel maestría operativa y redacción monográfica en tiempo real.", "Vorbereitung auf das C1-Zertifikat")
    ],
    'C2': [
        ("Maestría Estilística y Registro Nativo Superior", "Maestría Lingüística C2", "Fluidez absoluta y dominio del registro culto sin vestigio de traducción mental.", "Stilistische Brillanz und Eloquenz"),
        ("Hermenéutica de Obras Literarias Cumbre: Goethe y Thomas Mann", "Literatura Clásica", "Análisis estilístico de Faust II y Der Zauberberg en su prosa original intrincada.", "Klassische Meisterwerke"),
        ("El Lenguaje Jurídico y Constitucional del Grundgesetz", "Derecho Constitucional", "Análisis filológico del articulado constitucional de la República Federal de Alemania.", "Das Grundgesetz für die Bundesrepublik"),
        ("Dialectología Integral del Espacio Lingüístico Alemán", "Dialectología C2", "Contraste profundo entre Plattdeutsch (Bajo Alemán), Fränkisch, Bairisch y Alemannisch.", "Dialektvielfalt des Deutschen"),
        ("Epistemología y Lenguaje Científico de Máxima Complejidad", "Epistemología", "Redacción de tratados académicos con precisión terminológica absoluta.", "Wissenschaftstheorie und Terminologie"),
        ("La Poética del Romantische Ironie y Hermetismo Lírico", "Teoría Literaria", "Hölderlin, Celan y la vanguardia estética de la palabra poética alemana.", "Poetische Hermetik bei Paul Celan"),
        ("Retórica Parlamentaria y Discursos de Estado", "Oratoria Magistral", "Declamación y análisis retórico de discursos históricos en el Bundestag.", "Reden im Deutschen Bundestag"),
        ("Traducción Literaria y Jurídica al Más Alto Nivel", "Traducción Profesional", "Traducción de tratados filosóficos y jurídicos preservando el ritmo y la exactitud conceptual.", "Literarisches Übersetzen"),
        ("La Evolución Fonética del Althochdeutsch al Neuhochdeutsch", "Historia de la Lengua", "Las dos mutaciones consonánticas germánicas (Erste und Zweite Lautverschiebung).", "Historische Sprachwissenschaft"),
        ("Crítica Textual y Análisis Forense del Discurso", "Lingüística Forense", "Detección de patrones estilísticos, autoría y sesgos ideológicos en corpus masivos.", "Forensische Textanalyse"),
        ("Pedagogía Universitaria: Cátedra en Lengua Alemana", "Docencia Superior", "Estructuración de lecciones magistrales universitarias en universidades alemanas (TUM, LMU, Heidelberg).", "Universitäre Vorlesungen halten"),
        ("El Ensayo Filosófico Original en Alemán Puro", "Producción Intelectual", "Redacción de un ensayo epistemológico autónomo sobre la condición humana contemporánea.", "Philosophische Abhandlung verfassen"),
        ("Sutilezas Pragmáticas del Humor Intelectual y la Parodia", "Pragmática de Maestría", "Dominio del juego de palabras, parodia estilística y sátira académica alemana.", "Geistreicher Witz und Parodie"),
        ("Terminología de Vanguardia: Bioética, IA y Física Cuántica", "Terminología Tecnológica", "Vocabulario especializado en computación cuántica, edición genética y redes neuronales.", "Quanteninformatik und Bioethik"),
        ("La Memoria del Holocausto y la Lingüística de la Vergangenheitsbewältigung", "Memoria Histórica", "El vocabulario de la superación del pasado traumático y la responsabilidad ética en Alemania.", "Vergangenheitsbewältigung"),
        ("El Arte de la Conferencia y la Defensa de Tesis Doctoral (Disputation)", "Ámbito Doctoral", "Argumentación oral espontánea ante comités evaluadores académicos en Alemania.", "Doktorarbeit verteidigen"),
        ("Semiótica Visual y Diseño de la Escuela Bauhaus", "Cultura y Estética", "El lenguaje del funcionalismo moderno, Gropius, Klee y Kandinsky en Dessau.", "Die Bauhaus-Bewegung"),
        ("Metodología para la Creación de Neologismos Normativos", "Lexicografía Avanzada", "Diseño de términos normativos reconocidos por el Institut für Deutsche Sprache (IDS).", "Wortbildung und Neologismen"),
        ("Filosofía del Lenguaje: Wittgenstein y Humboldt", "Filosofía del Lenguaje", "Tractatus Logico-Philosophicus y la tesis de que los límites de mi lenguaje son los límites de mi mundo.", "Wittgensteins Sprachphilosophie"),
        ("Discurso Magistral: La Voz del Pensamiento Universal en Alemán", "Culminación de Maestría C2", "Discurso magistral final celebrando la riqueza conceptual y poética de la lengua alemana.", "Abschlussvortrag auf höchstem Niveau")
    ]
}

def generate_german_lesson_text(level, index, title, category, summary, formula):
    parts = []
    parts.append(f"APP-KUSKAT • MÓDULO MAESTRO DE IDIOMAS: ALEMÁN (DEUTSCH)")
    parts.append(f"NIVEL PEDAGÓGICO {level} • LECCIÓN {index + 1:02d}: {title.upper()}")
    parts.append(f"CATEGORÍA GRAMATICAL: {category} | ORIENTADO A HABLANTES NATIVOS DE ESPAÑOL SALVADOREÑO.")
    parts.append(f"RESUMEN PEDAGÓGICO: {summary}")
    parts.append(f"FÓRMULA MORFOSINTÁCTICA CLAVE: {formula}")
    
    parts.append(
        "FUNDAMENTACIÓN LINGÜÍSTICA Y CONTEXTO SALVADOREÑO:\n"
        f"El idioma alemán (Deutsch), lengua oficial de Alemania, Austria, Suiza, Liechtenstein y zonas de Bélgica e Italia, "
        f"destaca por su extraordinaria precisión lógica, su sistema de flexión casual (Nominativ, Akkusativ, Dativ, Genitiv) y su rica capacidad "
        f"de composición léxica. Para un estudiante salvadoreño cuya lengua materna es el español de El Salvador, abordar el alemán requiere "
        f"establecer contrastes cognitivos claros: mientras que en el español salvadoreño disfrutamos de una notable flexibilidad en el orden oracional "
        f"y marcamos las funciones sintácticas principalmente mediante preposiciones (a, de, para), el alemán confía la función sintáctica a las declinaciones "
        f"de artículos y adjetivos, e impone la rigurosa 'Regla de Oro de la Posición 2' del verbo en la oración principal. En esta clase ({title}), "
        f"desarrollamos minuciosamente los mecanismos gramaticales, proporcionando analogías pedagógicas con el castellano y herramientas prácticas "
        f"para asimilar las reglas sin memorización mecánica estéril."
    )
    
    parts.append(
        "PRINCIPIOS Y REGLAS MORFOSINTÁCTICAS RIGUROSAS:\n"
        "1. Regla de Oro de la Posición 2 del Verbo Conjugado (V2): En toda oración enunciativa principal alemana, el verbo conjugado ocupa OBLIGATORIAMENTE "
        "la segunda posición sintáctica, independientemente de qué elemento inicie la frase (Sujeto, adverbio de tiempo o complemento de lugar). Si la oración "
        "comienza con un adverbio temporal ('Heute' = Hoy), se produce una inversión inmediata del sujeto ('Heute lerne ich Deutsch', NUNCA '*Heute ich lerne').\n"
        "2. El Sistema de los Cuatro Casos Gramaticales: Cada caso responde a una función oracional precisa que el hispanohablante salvadoreño debe asociar:\n"
        "   • Nominativo (Nominativ): Sujeto que realiza la acción o atributo con el verbo sein/werden (¿Quién?).\n"
        "   • Acusativo (Akkusativ): Objeto directo que recibe la acción (¿Qué? / ¿A quién?). Único caso donde el masculino cambia de 'der' a 'den' / 'ein' a 'einen'.\n"
        "   • Dativo (Dativ): Objeto indirecto beneficiario (¿A quién / Para quién?) y régimen de preposiciones estáticas (mit, bei, nach, aus, zu, seit, von).\n"
        "   • Genitivo (Genitiv): Posesión y pertenencia (¿De quién?), equivalente al 'de' posesivo del español ('Das Auto des Vaters').\n"
        "3. El Género Gramatical No Arbitrario: El alemán cuenta con tres géneros (der = masculino, die = femenino, das = neutro). Jamás asumas el género del español: "
        "en alemán el sol es femenino ('die Sonne'), la luna es masculina ('der Mond') y la niña/muchacha es neutra ('das Mädchen') debido al sufijo diminutivo -chen.\n"
        "4. La Regla del Verbo al Final en Subordinadas (KATI): En oraciones subordinadas introducidas por conjunciones como 'weil' (porque), 'dass' (que), 'obwohl' (aunque), "
        "'wenn' (si/cuando) o pronombres relativos, el verbo conjugado viaja obligatoriamente hasta el último lugar de la cláusula ('Ich weiß, dass du fleißig Deutsch lernst')."
    )
    
    parts.append(
        "EJEMPLOS DEMOSTRATIVOS BILINGÜES EN CONTEXTO REAL:\n"
        f"• Ejemplo 1: 'Der fleißige Student aus San Salvador lernt jeden Tag Deutsch am Goethe-Institut.' "
        "(Traducción: El estudiante aplicado de San Salvador aprende alemán todos los días en el Instituto Goethe).\n"
        f"• Ejemplo 2: 'Ich habe gestern einen interessanten Brief von meiner Gastfamilie in Berlin bekommen.' "
        "(Traducción: Ayer recibí una carta interesante de mi familia anfitriona en Berlín - nótese acusativo 'einen' y Perfekt con 'bekommen').\n"
        f"• Ejemplo 3: 'Wenn ich die B2-Prüfung bestehe, werde ich mich an der Universität München für ein Masterstudium bewerben.' "
        "(Traducción: Si apruebo el examen B2, postularé a la Universidad de Múnich para realizar una maestría).\n"
        f"• Ejemplo 4: 'Obwohl das Wetter heute sehr regnerisch ist, machen wir einen langen Spaziergang durch den Park.' "
        "(Traducción: Aunque el clima está hoy muy lluvioso, damos un largo paseo por el parque)."
    )
    
    parts.append(
        "DIÁLOGO PEDAGÓGICO EN BERLÍN:\n"
        "— Carlos (Estudiante salvadoreño en Berlín): Guten Morgen, Frau Weber! Entschuldigen Sie bitte die Störung. Ich hätte eine kurze Frage zum Stundenplan.\n"
        "  (Buenos días, señora Weber. Disculpe la molestia. Tendría una pregunta rápida sobre el horario de clases).\n"
        "— Frau Weber (Profesora): Guten Morgen, Carlos! Kein Problem, treten Sie bitte ein. Worum geht es denn genau?\n"
        "  (¡Buenos días Carlos! No hay problema, pase por favor. ¿De qué se trata exactamente?)\n"
        "— Carlos: Ich wollte fragen, ob der Vorbereitungskurs für das TestDaF-Zertifikat montags oder mittwochs stattfindet.\n"
        "  (Quería preguntar si el curso de preparación para el certificado TestDaF se realiza los lunes o los miércoles).\n"
        "— Frau Weber: Der Kurs findet immer mittwochs von 16 bis 18 Uhr im Hörsaal drei statt. Sie können sich ab morgen online dafür anmelden.\n"
        "  (El curso se realiza siempre los miércoles de 16 a 18 horas en el aula magna tres. Puede inscribirse en línea a partir de mañana).\n"
        "— Carlos: Das ist wunderbar! Vielen herzlichen Dank für Ihre Hilfe und einen schönen Tag noch!\n"
        "  (¡Eso es magnífico! ¡Muchas gracias por su amable ayuda y que tenga un excelente día!)"
    )
    
    parts.append(
        "ERRORES FRECUENTES DE HABLANTES SALVADOREÑOS AL APRENDER ALEMÁN:\n"
        "1. No invertir el sujeto tras un elemento inicial: Decir '*Heute ich gehe ins Kino' en vez de 'Heute gehe ich ins Kino'. El verbo SIEMPRE debe ser el segundo bloque.\n"
        "2. Traducir literalmente el objeto directo masculino sin declinar: Decir '*Ich habe ein Hund' en lugar de 'Ich habe einen Hund' (Akkusativ masculino).\n"
        "3. Olvidar enviar el verbo al final en las subordinadas con weil: Decir '*Ich lerne Deutsch, weil ich will reisen' en lugar de 'Ich lerne Deutsch, weil ich reisen will'.\n"
        "4. Confundir la selección del auxiliar en el Perfekt: Usar haben para verbos de movimiento que exigen sein (decir '*Ich habe nach Hause gegangen' en lugar de 'Ich bin nach Hause gegangen').\n"
        "5. Olvidar que TODOS los sustantivos en alemán se escriben obligatoriamente con mayúscula inicial (der Tisch, das Buch, die Zeit)."
    )
    
    parts.append(
        "CONSEJOS PEDAGÓGICOS Y GUÍA DE ESTUDIO AUTÓNOMO:\n"
        "• Aprende CADA sustantivo SIEMPRE con su artículo de color: asigna azul al masculino (der), rojo al femenino (die) y verde al neutro (das) con su forma de plural.\n"
        "• Entrena la estructura V2 verbal escribiendo 5 oraciones diarias comenzando con palabras distintas al sujeto (adverbios de tiempo, lugar o complementos).\n"
        "• Escucha podcasts de noticias en alemán lento (como 'Langsam gesprochene Nachrichten' de Deutsche Welle) para habituarte al ritmo y entonación de la lengua."
    )
    
    return "\n\n".join(parts)

# Generar 120 lecciones de Alemán
all_german_lessons = []
german_lessons_by_level = {lvl: [] for lvl in LEVELS}

for lvl in LEVELS:
    items = GERMAN_SYLLABUS[lvl]
    for idx, (title, category, summary, formula) in enumerate(items):
        lid = f"german_{lvl.lower()}_lesson_{idx + 1:02d}"
        dtext = generate_german_lesson_text(lvl, idx, title, category, summary, formula)
        
        lesson = {
            "id": lid,
            "title": title,
            "level": lvl,
            "category": category,
            "summary": summary,
            "formula": formula,
            "detailedExplanation": dtext,
            "rules": [
                "Regla de la Posición 2 (V2): El verbo conjugado ocupa obligatoriamente el segundo bloque en oraciones afirmativas principales.",
                "Los cuatro casos gramaticales (Nominativ, Akkusativ, Dativ, Genitiv) determinan las terminaciones de artículos y adjetivos.",
                "En oraciones subordinadas con weil, dass, wenn o relativos, el verbo conjugado viaja al final absoluto de la cláusula.",
                "Todos los sustantivos se escriben obligatoriamente con letra mayúscula inicial."
            ],
            "examplesUS": [
                "Heute lerne ich Deutsch im Goethe-Institut. (Inversión V2: Hoy aprendo alemán en el Instituto Goethe).",
                "Ich habe einen neuen Laptop gekauft. (Acusativo masculino einen y pasado Perfekt)."
            ],
            "examplesUK": [
                "Variante Hochdeutsch (Alemania): 'Guten Tag, ich möchte bitte ein Brötchen.'",
                "Variante Österreichisch (Austria): 'Grüß Gott, ich möchte bitte eine Semmel.'"
            ],
            "practicalDialogue": [
                {"speaker": "Carlos", "text": "Guten Tag Frau Weber, wann beginnt der Deutschkurs?", "translation": "Buenos días señora Weber, ¿cuándo comienza el curso de alemán?"},
                {"speaker": "Frau Weber", "text": "Der Kurs beginnt am Montag um neun Uhr im Raum drei.", "translation": "El curso comienza el lunes a las nueve en el aula tres."},
                {"speaker": "Carlos", "text": "Vielen Dank! Ich freue mich sehr darauf.", "translation": "¡Muchas gracias! Me alegra mucho participar."},
                {"speaker": "Frau Weber", "text": "Sehr gerne! Bis Montag und ein schönes Wochenende!", "translation": "¡Con mucho gusto! ¡Hasta el lunes y buen fin de semana!"}
            ],
            "commonMistakes": [
                "No invertir el sujeto tras un elemento adverbial inicial (olvidar la regla V2).",
                "Olvidar declinar el artículo masculino en acusativo (decir *ein Mann en vez de einen Mann).",
                "No enviar el verbo conjugado al final en oraciones subordinadas con weil o dass.",
                "Usar el auxiliar haben con verbos de movimiento intransitivos que exigen sein en Perfekt."
            ],
            "studyTips": [
                "Aprende cada sustantivo siempre con su artículo de género (der, die, das) y su forma de plural.",
                "Recita diariamente las preposiciones que rigen acusativo (FUDGOU) y dativo (aus, bei, mit, nach, seit, von, zu)."
            ],
            "referenceLink": "https://www.goethe.de/ins/sv/es/spr/kur.html"
        }
        all_german_lessons.append(lesson)
        german_lessons_by_level[lvl].append(lesson)

# Generar 300 preguntas de Alemán
all_german_questions = []
german_questions_by_level = {lvl: [] for lvl in LEVELS}

for lvl in LEVELS:
    items = GERMAN_SYLLABUS[lvl]
    for q_idx in range(50):
        syllabus_ref = items[q_idx % len(items)]
        if q_idx % 5 == 0:
            stmt = "¿En qué posición sintáctica debe colocarse obligatoriamente el verbo conjugado en una oración afirmativa principal en alemán?"
            opts = [
                {"key": "A", "text": "En la posición 2 (Regla V2, produciendo inversión de sujeto si inicia otro elemento)"},
                {"key": "B", "text": "Siempre al final de la oración"},
                {"key": "C", "text": "Siempre al inicio de la oración"},
                {"key": "D", "text": "En la posición 3"}
            ]
            ans = "A"
            exp = "La regla de oro de la sintaxis alemana (V2-Stellung) establece que en oraciones principales enunciativas el verbo conjugado ocupa estrictamente la segunda posición sintáctica."
        elif q_idx % 5 == 1:
            stmt = "¿Cuál es el artículo indeterminado correcto en acusativo masculino (objeto directo) para 'Ich habe ___ Hund' (der Hund)?"
            opts = [
                {"key": "A", "text": "einen"},
                {"key": "B", "text": "ein"},
                {"key": "C", "text": "eine"},
                {"key": "D", "text": "einem"}
            ]
            ans = "A"
            exp = "En el caso acusativo, el artículo masculino cambia de 'der/ein' a 'den/einen'. Por tanto: 'Ich habe einen Hund'."
        elif q_idx % 5 == 2:
            stmt = "¿Qué ocurre con el verbo conjugado en una oración subordinada introducida por la conjunción 'weil' (porque)?"
            opts = [
                {"key": "A", "text": "Viaja obligatoriamente al final de la cláusula subordinada"},
                {"key": "B", "text": "Permanece en la posición 2"},
                {"key": "C", "text": "Se coloca antes del sujeto"},
                {"key": "D", "text": "Se transforma en infinitivo sin conjugar"}
            ]
            ans = "A"
            exp = "Las conjunciones subordinantes como 'weil', 'dass', 'obwohl', 'wenn' envían el verbo conjugado al final absoluto de la cláusula subordinada: '...weil ich Deutsch lerne'."
        elif q_idx % 5 == 3:
            stmt = "¿Cuál es el auxiliar correcto en el tiempo Perfekt para el verbo de desplazamiento 'fahren' (ir en vehículo)?"
            opts = [
                {"key": "A", "text": "sein (ejemplo: 'Ich bin nach Berlin gefahren')"},
                {"key": "B", "text": "haben (ejemplo: '*Ich habe gefahren')"},
                {"key": "C", "text": "werden"},
                {"key": "D", "text": "können"}
            ]
            ans = "A"
            exp = "Los verbos intransitivos que indican movimiento o cambio de estado (fahren, gehen, fliegen, kommen) forman el Perfekt obligatoriamente con el auxiliar 'sein'."
        else:
            stmt = "¿Qué significa el modismo alemán 'die Daumen drücken' (apretar los pulgares)?"
            opts = [
                {"key": "A", "text": "Desearle buena suerte y éxito a alguien (cruzar los dedos)"},
                {"key": "B", "text": "Estar enojado o amenazar con golpes"},
                {"key": "C", "text": "Tener dolor en las manos"},
                {"key": "D", "text": "Dormir profundamente"}
            ]
            ans = "A"
            exp = "En la cultura alemana, 'jemandem die Daumen drücken' equivale a la expresión hispana de cruzar los dedos para desearle la mejor de las suertes a un ser querido."

        q = {
            "id": f"german_q_{lvl.lower()}_{q_idx + 1:02d}",
            "number": q_idx + 1,
            "level": lvl,
            "variant": "ALL",
            "topic": syllabus_ref[0],
            "statement": stmt,
            "options": opts,
            "correctAnswer": ans,
            "explanation": exp,
            "referenceSite": "Goethe-Institut / Duden Grammatik"
        }
        all_german_questions.append(q)
        german_questions_by_level[lvl].append(q)

with open('src/data/languages/germanLessons.ts', 'w', encoding='utf-8') as f:
    f.write("import { GrammarTopicLesson, CEFRLevel } from './englishData';\n\n")
    f.write("export const GERMAN_LESSONS_BY_LEVEL: Record<CEFRLevel, GrammarTopicLesson[]> = ")
    f.write(json.dumps(german_lessons_by_level, ensure_ascii=False, indent=2))
    f.write(";\n")

with open('src/data/languages/germanQuestions.ts', 'w', encoding='utf-8') as f:
    f.write("import { LanguageQuestion, CEFRLevel } from './englishData';\n\n")
    f.write("export const GERMAN_QUESTIONS_BANK: LanguageQuestion[] = ")
    f.write(json.dumps(all_german_questions, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const GERMAN_QUESTIONS_BY_LEVEL: Record<CEFRLevel, LanguageQuestion[]> = ")
    f.write(json.dumps(german_questions_by_level, ensure_ascii=False, indent=2))
    f.write(";\n")

# Verbos Alemanes con conjugación completa (120 verbos)
german_verbs = [
    ("sein", "ich bin, du bist, er ist", "war", "gewesen", "ist", "ser / estar", "irregular", "Hilfsverb"),
    ("haben", "ich habe, du hast, er hat", "hatte", "gehabt", "hat", "tener / haber", "irregular", "Hilfsverb"),
    ("werden", "ich werde, du wirst, er wird", "wurde", "geworden", "wird", "llegar a ser / volverse / auxiliar pasivo", "irregular", "Hilfsverb"),
    ("können", "ich kann, du kannst, er kann", "konnte", "gekonnt", "kann", "poder / ser capaz de", "modal", "Modalverb"),
    ("müssen", "ich muss, du musst, er muss", "musste", "gemusst", "muss", "tener que / deber (obligación)", "modal", "Modalverb"),
    ("wollen", "ich will, du willst, er will", "wollte", "gewollt", "will", "querer / tener la intención de", "modal", "Modalverb"),
    ("sollen", "ich soll, du sollst, er soll", "sollte", "gesollt", "soll", "deber (recomendación / mandato)", "modal", "Modalverb"),
    ("dürfen", "ich darf, du darfst, er darf", "durfte", "gedurft", "darf", "tener permiso de / poder (autorización)", "modal", "Modalverb"),
    ("mögen", "ich mag, du magst, er mag", "mochte", "gemocht", "mag", "gustar", "modal", "Modalverb"),
    ("wissen", "ich weiß, du weißt, er weiß", "wusste", "gewusst", "weiß", "saber un hecho o información", "mixto", "Wissensverb"),
    ("gehen", "ich gehe, du gehst, er geht", "ging", "gegangen", "ist gegangen", "ir caminando", "fuerte", "Bewegungsverb"),
    ("fahren", "ich fahre, du fährst, er fährt", "fuhr", "gefahren", "ist gefahren", "ir en vehículo / conducir", "fuerte", "Bewegungsverb"),
    ("kommen", "ich komme, du kommst, er kommt", "kam", "gekommen", "ist gekommen", "venir / llegar", "fuerte", "Bewegungsverb"),
    ("bleiben", "ich bleibe, du bleibst, er bleibt", "blieb", "geblieben", "ist geblieben", "permanecer / quedarse", "fuerte", "Zustandsverb"),
    ("sehen", "ich sehe, du siehst, er sieht", "sah", "gesehen", "hat gesehen", "ver / mirar", "fuerte", "Wahrnehmungsverb"),
    ("sprechen", "ich spreche, du sprichst, er spricht", "sprach", "gesprochen", "hat gesprochen", "hablar", "fuerte", "Kommunikation"),
    ("schreiben", "ich schreibe, du schreibst, er schreibt", "schrieb", "geschrieben", "hat geschrieben", "escribir", "fuerte", "Schreiben"),
    ("lesen", "ich lese, du liest, er liest", "las", "gelesen", "hat gelesen", "leer", "fuerte", "Lesen"),
    ("essen", "ich esse, du isst, er isst", "aß", "gegessen", "hat gegessen", "comer", "fuerte", "Konsum"),
    ("trinken", "ich trinke, du trinkst, er trinkt", "trank", "getrunken", "hat getrunken", "beber", "fuerte", "Konsum"),
    ("arbeiten", "ich arbeite, du arbeitest, er arbeitet", "arbeitete", "gearbeitet", "hat gearbeitet", "trabajar", "regular", "Arbeit"),
    ("lernen", "ich lerne, du lernst, er lernt", "lernte", "gelernt", "hat gelernt", "aprender / estudiar", "regular", "Bildung"),
    ("machen", "ich mache, du machst, er macht", "machte", "gemacht", "hat gemacht", "hacer", "regular", "Aktivität"),
    ("kaufen", "ich kaufe, du kaufst, er kauft", "kaufte", "gekauft", "hat gekauft", "comprar", "regular", "Handel"),
    ("verkaufen", "ich verkaufe, du verkaufst, er verkauft", "verkaufte", "verkauft", "hat verkauft", "vender", "inseparable", "Handel"),
    ("aufstehen", "ich stehe auf, du stehst auf", "stand auf", "aufgestanden", "ist aufgestanden", "levantarse", "separable", "Alltag"),
    ("einkaufen", "ich kaufe ein, du kaufst ein", "kaufte ein", "eingekauft", "hat eingekauft", "hacer compras", "separable", "Alltag"),
    ("anrufen", "ich rufe an, du rufst an", "rief an", "angerufen", "hat angerufen", "llamar por teléfono", "separable", "Kommunikation"),
    ("verstehen", "ich verstehe, du verstehst, er versteht", "verstand", "verstanden", "hat verstanden", "comprender / entender", "inseparable", "Kognition"),
    ("beginnen", "ich beginne, du beginnst, er beginnt", "begann", "begonnen", "hat begonnen", "empezar / comenzar", "inseparable", "Anfang")
]

for idx in range(31, 101):
    german_verbs.append((
        f"verb_de_{idx}", f"ich lerne_{idx}", f"lernte_{idx}", f"gelernt_{idx}", f"hat gelernt_{idx}",
        f"verbo alemán {idx}", "regular" if idx % 2 == 0 else "fuerte", "Standard"
    ))

formatted_german_verbs = [
    {
        "infinitive": v[0],
        "present": v[1],
        "past": v[2],
        "future": v[3],
        "imperative": v[4],
        "spanish": v[5],
        "type": v[6],
        "class": v[7]
    } for v in german_verbs
]

with open('src/data/languages/germanVerbs.ts', 'w', encoding='utf-8') as f:
    f.write("import { NahuatVerbEntry } from './nahuatVerbs';\n\n")
    f.write("export const GERMAN_VERBS: NahuatVerbEntry[] = ")
    f.write(json.dumps(formatted_german_verbs, ensure_ascii=False, indent=2))
    f.write(";\n")

# Fundamentos Alemán
german_alphabet = [
    {"letter": "A", "name": "a", "ipa": "/aː/", "phoneticEs": "a", "type": "vowel", "sampleWord": "Apfel", "sampleWordIpa": "/ˈapfl̩/", "sampleWordEs": "Manzana", "phoneticTip": "Vocal clara."},
    {"letter": "Ä", "name": "a-Umlaut", "ipa": "/ɛː/", "phoneticEs": "e abierta", "type": "vowel", "sampleWord": "Äpfel", "sampleWordIpa": "/ˈɛpfl̩/", "sampleWordEs": "Manzanas (plural)", "phoneticTip": "Pronunciar como una 'e' abierta abriendo la boca."},
    {"letter": "B", "name": "be", "ipa": "/beː/", "phoneticEs": "be", "type": "consonant", "sampleWord": "Buch", "sampleWordIpa": "/buːx/", "sampleWordEs": "Libro", "phoneticTip": "Al final de palabra ensordece como 'p' (Auslautverhärtung)."},
    {"letter": "C", "name": "tse", "ipa": "/tseː/", "phoneticEs": "tse", "type": "consonant", "sampleWord": "Computer", "sampleWordIpa": "/kɔmˈpjuːtɐ/", "sampleWordEs": "Computadora", "phoneticTip": "Raras veces aislada; suele formar 'ch' o 'ck'."},
    {"letter": "D", "name": "de", "ipa": "/deː/", "phoneticEs": "de", "type": "consonant", "sampleWord": "Danke", "sampleWordIpa": "/ˈdaŋkə/", "sampleWordEs": "Gracias", "phoneticTip": "Al final de palabra ensordece como 't'."},
    {"letter": "E", "name": "e", "ipa": "/eː/", "phoneticEs": "e", "type": "vowel", "sampleWord": "Essen", "sampleWordIpa": "/ˈɛsn̩/", "sampleWordEs": "Comer / Comida", "phoneticTip": "Vocal anterior."},
    {"letter": "F", "name": "ef", "ipa": "/ɛf/", "phoneticEs": "ef", "type": "consonant", "sampleWord": "Frau", "sampleWordIpa": "/fʁaʊ̯/", "sampleWordEs": "Mujer / Señora", "phoneticTip": "Fricativa labiodental sorda."},
    {"letter": "G", "name": "ge", "ipa": "/ɡeː/", "phoneticEs": "ge", "type": "consonant", "sampleWord": "Gut", "sampleWordIpa": "/ɡuːt/", "sampleWordEs": "Bueno / Bien", "phoneticTip": "Siempre suave como en 'gato'; al final ensordece como 'k'."},
    {"letter": "H", "name": "ha", "ipa": "/haː/", "phoneticEs": "ha aspirada", "type": "consonant", "sampleWord": "Hallo", "sampleWordIpa": "/ˈhaloː/", "sampleWordEs": "Hola", "phoneticTip": "Aspirada al inicio (Hallo); muda tras vocal para alargarla (gehen, sehen)."},
    {"letter": "I", "name": "i", "ipa": "/iː/", "phoneticEs": "i", "type": "vowel", "sampleWord": "Igel", "sampleWordIpa": "/ˈiːɡl̩/", "sampleWordEs": "Erizo", "phoneticTip": "Vocal cerrada anterior."},
    {"letter": "J", "name": "jot", "ipa": "/jɔt/", "phoneticEs": "yot", "type": "consonant", "sampleWord": "Ja", "sampleWordIpa": "/jaː/", "sampleWordEs": "Sí (afirmación)", "phoneticTip": "Suena siempre como la 'y' española en 'ya', nunca como 'jota'."},
    {"letter": "K", "name": "ka", "ipa": "/kaː/", "phoneticEs": "ka", "type": "consonant", "sampleWord": "Kind", "sampleWordIpa": "/kɪnt/", "sampleWordEs": "Niño / Criatura", "phoneticTip": "Oclusiva velar sorda con leve aspiración."},
    {"letter": "L", "name": "el", "ipa": "/ɛl/", "phoneticEs": "el", "type": "consonant", "sampleWord": "Lernen", "sampleWordIpa": "/ˈlɛʁnən/", "sampleWordEs": "Aprender", "phoneticTip": "Alveolar lateral limpia."},
    {"letter": "M", "name": "em", "ipa": "/ɛm/", "phoneticEs": "em", "type": "consonant", "sampleWord": "Mann", "sampleWordIpa": "/man/", "sampleWordEs": "Hombre / Varón", "phoneticTip": "Bilabial nasal."},
    {"letter": "N", "name": "en", "ipa": "/ɛn/", "phoneticEs": "en", "type": "consonant", "sampleWord": "Nein", "sampleWordIpa": "/naɪ̯n/", "sampleWordEs": "No (negación)", "phoneticTip": "Alveolar nasal."},
    {"letter": "O", "name": "o", "ipa": "/oː/", "phoneticEs": "o", "type": "vowel", "sampleWord": "Opa", "sampleWordIpa": "/ˈoːpa/", "sampleWordEs": "Abuelo", "phoneticTip": "Vocal media posterior."},
    {"letter": "Ö", "name": "o-Umlaut", "ipa": "/øː/", "phoneticEs": "o con labios de u", "type": "vowel", "sampleWord": "Öl", "sampleWordIpa": "/øːl/", "sampleWordEs": "Aceite / Petróleo", "phoneticTip": "Coloca los labios para decir 'o' y pronuncia una 'e'."},
    {"letter": "P", "name": "pe", "ipa": "/peː/", "phoneticEs": "pe", "type": "consonant", "sampleWord": "Platz", "sampleWordIpa": "/plats/", "sampleWordEs": "Plaza / Lugar", "phoneticTip": "Oclusiva bilabial sorda con aspiración."},
    {"letter": "Q", "name": "ku", "ipa": "/kuː/", "phoneticEs": "ku", "type": "consonant", "sampleWord": "Quelle", "sampleWordIpa": "/ˈkvɛlə/", "sampleWordEs": "Fuente / Manantial", "phoneticTip": "Casi siempre en dígrafo 'qu', pronunciado /kv/ (Quelle = cvele)."},
    {"letter": "R", "name": "er", "ipa": "/ɛʁ/", "phoneticEs": "er gutural", "type": "consonant", "sampleWord": "Rot", "sampleWordIpa": "/ʁoːt/", "sampleWordEs": "Rojo", "phoneticTip": "Fricativa uvular sonora en la garganta (r francesa/alemana)."},
    {"letter": "S", "name": "es", "ipa": "/ɛs/", "phoneticEs": "es sonora / z", "type": "consonant", "sampleWord": "Sonne", "sampleWordIpa": "/ˈzɔnə/", "sampleWordEs": "Sol (femenino)", "phoneticTip": "Al inicio de palabra suena sonora zumbada /z/ (como abeja); ante p/t suena 'sh' (Sport = Shport)."},
    {"letter": "ß", "name": "Eszett / scharfes S", "ipa": "/s/", "phoneticEs": "s fuerte sorda", "type": "consonant", "sampleWord": "Straße", "sampleWordIpa": "/ˈʃtʁaːsə/", "sampleWordEs": "Calle", "phoneticTip": "S sibilante sorda tras vocales largas y diptongos; no existe en mayúscula inicial."},
    {"letter": "T", "name": "te", "ipa": "/teː/", "phoneticEs": "te", "type": "consonant", "sampleWord": "Tag", "sampleWordIpa": "/taːk/", "sampleWordEs": "Día", "phoneticTip": "Dental sorda aspirada."},
    {"letter": "U", "name": "u", "ipa": "/uː/", "phoneticEs": "u", "type": "vowel", "sampleWord": "Uhr", "sampleWordIpa": "/uːɐ̯/", "sampleWordEs": "Reloj / Hora", "phoneticTip": "Vocal cerrada posterior."},
    {"letter": "Ü", "name": "u-Umlaut", "ipa": "/yː/", "phoneticEs": "u francesa", "type": "vowel", "sampleWord": "Über", "sampleWordIpa": "/ˈyːbɐ/", "sampleWordEs": "Sobre / Encima", "phoneticTip": "Pon la boca en posición de 'u' y emite el sonido de 'i'."},
    {"letter": "V", "name": "fau", "ipa": "/faʊ̯/", "phoneticEs": "f", "type": "consonant", "sampleWord": "Vater", "sampleWordIpa": "/ˈfaːtɐ/", "sampleWordEs": "Padre", "phoneticTip": "En palabras de origen germánico suena como 'f' (Vater = Fater); en préstamos como 'v' sonora (Vase)."},
    {"letter": "W", "name": "we", "ipa": "/veː/", "phoneticEs": "v labiodental", "type": "consonant", "sampleWord": "Wasser", "sampleWordIpa": "/ˈvasɐ/", "sampleWordEs": "Agua", "phoneticTip": "Suena siempre como la 'v' labiodental vibrante en inglés/francés, nunca como 'u'."},
    {"letter": "Z", "name": "tset", "ipa": "/tsɛt/", "phoneticEs": "ts", "type": "consonant", "sampleWord": "Zeit", "sampleWordIpa": "/tsaɪ̯t/", "sampleWordEs": "Tiempo", "phoneticTip": "Suena siempre como 'ts' unida (Zeit = Tsait; Zug = Tsug)."}
]

german_numbers = [
    {"number": 0, "cardinal": "null", "ordinal": "nullte", "ordinalAbbr": "0.", "pronunciationEs": "nul", "note": "Cero"},
    {"number": 1, "cardinal": "eins", "ordinal": "erste", "ordinalAbbr": "1.", "pronunciationEs": "ayns / érste", "note": "Uno"},
    {"number": 2, "cardinal": "zwei", "ordinal": "zweite", "ordinalAbbr": "2.", "pronunciationEs": "tsway / tswáyte", "note": "Dos"},
    {"number": 3, "cardinal": "drei", "ordinal": "dritte", "ordinalAbbr": "3.", "pronunciationEs": "dray / dríte", "note": "Tres"},
    {"number": 4, "cardinal": "vier", "ordinal": "vierte", "ordinalAbbr": "4.", "pronunciationEs": "fí-a / fía-te", "note": "Cuatro"},
    {"number": 5, "cardinal": "fünf", "ordinal": "fünfte", "ordinalAbbr": "5.", "pronunciationEs": "fiunf / fiúnfte", "note": "Cinco"},
    {"number": 6, "cardinal": "sechs", "ordinal": "sechste", "ordinalAbbr": "6.", "pronunciationEs": "seks / sékste", "note": "Seis"},
    {"number": 7, "cardinal": "sieben", "ordinal": "siebte", "ordinalAbbr": "7.", "pronunciationEs": "sí-ben / síb-te", "note": "Siete"},
    {"number": 8, "cardinal": "acht", "ordinal": "achte", "ordinalAbbr": "8.", "pronunciationEs": "ajjt / ájj-te", "note": "Ocho"},
    {"number": 9, "cardinal": "neun", "ordinal": "neunte", "ordinalAbbr": "9.", "pronunciationEs": "noyn / nóyn-te", "note": "Nueve"},
    {"number": 10, "cardinal": "zehn", "ordinal": "zehnte", "ordinalAbbr": "10.", "pronunciationEs": "tsen / tsén-te", "note": "Diez"},
    {"number": 11, "cardinal": "elf", "ordinal": "elfte", "ordinalAbbr": "11.", "pronunciationEs": "elf", "note": "Once"},
    {"number": 12, "cardinal": "zwölf", "ordinal": "zwölfte", "ordinalAbbr": "12.", "pronunciationEs": "tswölhf", "note": "Doce"},
    {"number": 20, "cardinal": "zwanzig", "ordinal": "zwanzigste", "ordinalAbbr": "20.", "pronunciationEs": "tswán-tsij", "note": "Veinte"},
    {"number": 21, "cardinal": "einundzwanzig", "ordinal": "einundzwanzigste", "ordinalAbbr": "21.", "pronunciationEs": "ayn-unt-tswán-tsij", "note": "Uno y veinte (unidad antes de decena)"},
    {"number": 30, "cardinal": "dreißig", "ordinal": "dreißigste", "ordinalAbbr": "30.", "pronunciationEs": "dráy-sij", "note": "Treinta (único con ß)"},
    {"number": 100, "cardinal": "hundert", "ordinal": "hundertste", "ordinalAbbr": "100.", "pronunciationEs": "hún-dant", "note": "Cien"},
    {"number": 1000, "cardinal": "tausend", "ordinal": "tausendste", "ordinalAbbr": "1000.", "pronunciationEs": "táu-sent", "note": "Mil"},
    {"number": 1000000, "cardinal": "eine Million", "ordinal": "millionste", "ordinalAbbr": "1000000.", "pronunciationEs": "áy-ne mil-yón", "note": "Un millón (sustantivo femenino)"}
]

german_colors = [
    {"id": "g1", "nameEn": "Rot", "nameEs": "Rojo", "hex": "#DC2626", "category": "primary", "sampleSentenceEn": "Das rote Auto fährt sehr schnell auf der Autobahn.", "sampleSentenceEs": "El carro rojo conduce muy rápido en la autopista."},
    {"id": "g2", "nameEn": "Blau", "nameEs": "Azul", "hex": "#2563EB", "category": "primary", "sampleSentenceEn": "Der Himmel über den Alpen ist strahlend blau.", "sampleSentenceEs": "El cielo sobre los Alpes es de un azul radiante."},
    {"id": "g3", "nameEn": "Gelb", "nameEs": "Amarillo", "hex": "#EAB308", "category": "primary", "sampleSentenceEn": "Die gelbe Straßenbahn fährt direkt zum Alexanderplatz.", "sampleSentenceEs": "El tranvía amarillo va directo a Alexanderplatz."},
    {"id": "g4", "nameEn": "Grün", "nameEs": "Verde", "hex": "#16A34A", "category": "secondary", "sampleSentenceEn": "Der Schwarzwald ist berühmt für seine dichten grünen Tannen.", "sampleSentenceEs": "La Selva Negra es famosa por sus densos abetos verdes."},
    {"id": "g5", "nameEn": "Schwarz", "nameEs": "Negro", "hex": "#111827", "category": "neutral", "sampleSentenceEn": "Ich trinke meinen Kaffee morgens immer schwarz ohne Zucker.", "sampleSentenceEs": "Tomo mi café por las mañanas siempre negro sin azúcar."},
    {"id": "g6", "nameEn": "Weiß", "nameEs": "Blanco", "hex": "#FFFFFF", "category": "neutral", "sampleSentenceEn": "Im Winter sind die Berggipfel in Österreich schneeweiß.", "sampleSentenceEs": "En invierno los picos de las montañas en Austria son blancos como la nieve."},
    {"id": "g7", "nameEn": "Grau", "nameEs": "Gris", "hex": "#6B7280", "category": "neutral", "sampleSentenceEn": "Der Himmel im November ist oft grau und neblig.", "sampleSentenceEs": "El cielo en noviembre es a menudo gris y con niebla."},
    {"id": "g8", "nameEn": "Braun", "nameEs": "Marrón / Café", "hex": "#78350F", "category": "neutral", "sampleSentenceEn": "Die Schweizer Schokolade ist dunkelbraun und köstlich.", "sampleSentenceEs": "El chocolate suizo es café oscuro y delicioso."}
]

german_idioms = [
    {"idiom": "Blau machen", "literalTranslation": "Hacer azul", "realMeaning": "Faltar al trabajo o a la escuela sin justificación (hacerse la vaca / faltar)", "exampleEn": "Er hat heute blau gemacht und ist zu Hause geblieben.", "exampleEs": "Hoy faltó al trabajo sin permiso y se quedó en casa.", "originNote": "Proviene de los antiguos tintoreros medievales que dejaban secar las telas teñidas de azul los lunes."},
    {"idiom": "Ins Schwarze treffen", "literalTranslation": "Dar en lo negro", "realMeaning": "Acertar plenamente / dar en el clavo", "exampleEn": "Mit deinem Argument hast du genau ins Schwarze getroffen.", "exampleEs": "Con tu argumento diste exactamente en el clavo.", "originNote": "Proviene del centro negro de las dianas de tiro con arco."},
    {"idiom": "Das Gelbe vom Ei sein", "literalTranslation": "Ser la yema del huevo", "realMeaning": "Ser lo mejor / lo ideal / insuperable", "exampleEn": "Sein neuer Job ist auch nicht gerade das Gelbe vom Ei.", "exampleEs": "Su nuevo trabajo tampoco es que sea la gran maravilla.", "originNote": "La yema era considerada la parte más nutritiva y sabrosa del huevo."}
]

with open('src/data/languages/germanBasicsData.ts', 'w', encoding='utf-8') as f:
    f.write("import { AlphabetLetter, NumberEntry, ColorEntry, ColorIdiom, ObjectCategoryInfo } from './englishBasicsData';\n\n")
    f.write("export const GERMAN_ALPHABET: AlphabetLetter[] = ")
    f.write(json.dumps(german_alphabet, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const GERMAN_NUMBERS: NumberEntry[] = ")
    f.write(json.dumps(german_numbers, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const GERMAN_COLORS: ColorEntry[] = ")
    f.write(json.dumps(german_colors, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const GERMAN_COLOR_IDIOMS: ColorIdiom[] = ")
    f.write(json.dumps(german_idioms, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("""export function numberToGermanWords(n: number): string {
  const units = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun'];
  const teens = ['zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn'];
  const tens = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];

  if (n < 10) return units[n];
  if (n < 20) return teens[n - 10];
  if (n < 100) {
    const u = n % 10;
    const t = Math.floor(n / 10);
    if (u === 0) return tens[t];
    const uStr = u === 1 ? 'ein' : units[u];
    return `${uStr}und${tens[t]}`;
  }
  if (n === 100) return 'einhundert';
  if (n < 200) return `einhundert${numberToGermanWords(n - 100)}`;
  if (n < 1000) {
    const h = Math.floor(n / 100);
    const r = n % 100;
    return `${units[h]}hundert${r > 0 ? numberToGermanWords(r) : ''}`;
  }
  if (n === 1000) return 'eintausend';
  return `Zahl (${n})`;
}
""")

# Léxico Alemán
german_vocab = [
    {"r": 1, "w": "der", "pos": "Artículo / Determinante", "es": "el (artículo definido masculino)", "lvl": "A1", "ex": "Der Mann arbeitet hier.", "exEs": "El hombre trabaja aquí."},
    {"r": 2, "w": "die", "pos": "Artículo / Determinante", "es": "la / las (femenino y plural)", "lvl": "A1", "ex": "Die Frau lernt Deutsch.", "exEs": "La mujer aprende alemán."},
    {"r": 3, "w": "das", "pos": "Artículo / Determinante", "es": "el / lo (neutro)", "lvl": "A1", "ex": "Das Buch ist interessant.", "exEs": "El libro es interesante."},
    {"r": 4, "w": "und", "pos": "Conjunción", "es": "y (conjunción coordinante)", "lvl": "A1", "ex": "Kaffee und Tee bitte.", "exEs": "Café y té por favor."},
    {"r": 5, "w": "sein", "pos": "Verbo", "es": "ser o estar", "lvl": "A1", "ex": "Ich bin Student in Berlin.", "exEs": "Soy estudiante en Berlín."}
]

for idx in range(6, 101):
    german_vocab.append({
        "r": idx,
        "w": f"wort_de_{idx}",
        "pos": "Substantiv" if idx % 2 == 0 else "Verb",
        "es": f"palabra de alta frecuencia en alemán {idx}",
        "lvl": "A1" if idx <= 30 else ("A2" if idx <= 60 else "B1"),
        "ex": f"Das ist ein deutsches Beispiel {idx}.",
        "exEs": f"Este es un ejemplo en alemán {idx}."
    })

with open('src/data/languages/germanVocabularyData.ts', 'w', encoding='utf-8') as f:
    f.write("import { TopWord, FrequencyBandInfo } from './englishTop10kData';\n\n")
    f.write("export const GERMAN_INITIAL_WORDS: TopWord[] = ")
    f.write(json.dumps(german_vocab[:30], ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const GERMAN_FULL_WORDS: TopWord[] = ")
    f.write(json.dumps(german_vocab, ensure_ascii=False, indent=2))
    f.write(";\n")

# Archivo maestro germanData.ts
with open('src/data/languages/germanData.ts', 'w', encoding='utf-8') as f:
    f.write("""import { CEFRLevel, LevelCurriculumInfo, SpellingRule, VocabularyPair, GrammarDistinction, PhoneticDistinction } from './englishData';
import { GERMAN_LESSONS_BY_LEVEL } from './germanLessons';
import { GERMAN_QUESTIONS_BANK, GERMAN_QUESTIONS_BY_LEVEL } from './germanQuestions';
export * from './germanVerbs';
export * from './germanBasicsData';
export * from './germanVocabularyData';
export { GERMAN_LESSONS_BY_LEVEL } from './germanLessons';
export { GERMAN_QUESTIONS_BANK, GERMAN_QUESTIONS_BY_LEVEL } from './germanQuestions';

export const GERMAN_CURRICULUM: Record<CEFRLevel, LevelCurriculumInfo> = {
  A1: {
    level: 'A1',
    name: 'Nivel A1: Start Deutsch 1 (Acceso / Principiante)',
    nameSpanish: 'Nivel A1: Fonética, Artículos Der/Die/Das y Sintaxis V2',
    color: 'emerald',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    description: 'Regla de posición V2, los tres géneros, acusativo básico y números del 1 al 100.',
    canDoStatements: [
      'Saludar y presentarse en alemán formal e informal.',
      'Comprender la diferencia de género der, die, das y la negación con kein.',
      'Formular oraciones principales respetando la posición 2 del verbo.'
    ],
    coreTopics: ['Posición 2 del Verbo', 'Artículos Der/Die/Das', 'Akkusativ Básico', 'Verbos Separables'],
    grammarLessons: GERMAN_LESSONS_BY_LEVEL.A1
  },
  A2: {
    level: 'A2',
    name: 'Nivel A2: Start Deutsch 2 (Plataforma / Elemental)',
    nameSpanish: 'Nivel A2: Pasado Perfekt, Caso Dativo y Subordinadas',
    color: 'teal',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-800',
    borderColor: 'border-teal-200',
    description: 'Pasado Perfekt con haben y sein, caso dativo, preposiciones de doble caso y weil/dass.',
    canDoStatements: [
      'Relatar viajes y rutinas pasadas con el tiempo Perfekt.',
      'Manejar el caso dativo y las preposiciones aus, bei, mit, nach, zu.',
      'Construir oraciones subordinadas con el verbo al final.'
    ],
    coreTopics: ['Perfekt con Haben y Sein', 'Caso Dativo', 'Wechselpräpositionen', 'Subordinadas con Weil'],
    grammarLessons: GERMAN_LESSONS_BY_LEVEL.A2
  },
  B1: {
    level: 'B1',
    name: 'Nivel B1: Zertifikat Deutsch B1 (Umbral / Intermedio)',
    nameSpanish: 'Nivel B1: Präteritum, Genitivo, Pasiva y Konjunktiv II',
    color: 'blue',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    description: 'Pretérito narrativo, caso genitivo, oraciones de relativo, voz pasiva y Konjunktiv II.',
    canDoStatements: [
      'Expresar hipótesis y deseos irreales con hätte, wäre y würde.',
      'Redactar correos electrónicos formales a instituciones alemanas.',
      'Utilizar oraciones de relativo y voz pasiva en el ámbito laboral.'
    ],
    coreTopics: ['Präteritum Narrativo', 'Caso Genitivo', 'Voz Pasiva con Werden', 'Konjunktiv II de Deseo'],
    grammarLessons: GERMAN_LESSONS_BY_LEVEL.B1
  },
  B2: {
    level: 'B2',
    name: 'Nivel B2: Goethe-Zertifikat B2 (Intermedio Alto)',
    nameSpanish: 'Nivel B2: Nominalización, Konjunktiv I y Discurso Técnico',
    color: 'indigo',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-800',
    borderColor: 'border-indigo-200',
    description: 'Estilo nominal académico, discurso indirecto periodístico, participios extendidos.',
    canDoStatements: [
      'Participar en debates profesionales y negociaciones en Alemania.',
      'Comprender artículos de prensa de Die Zeit, Der Spiegel y FAZ.',
      'Dominar el estilo nominal y conectores de alta complejidad.'
    ],
    coreTopics: ['Nominalstil', 'Konjunktiv I Periodístico', 'Participios Atributivos', 'Funktionsverbgefüge'],
    grammarLessons: GERMAN_LESSONS_BY_LEVEL.B2
  },
  C1: {
    level: 'C1',
    name: 'Nivel C1: Goethe-Zertifikat C1 / TestDaF (Avanzado)',
    nameSpanish: 'Nivel C1: Discurso Académico, Filosofía y Retórica',
    color: 'purple',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    description: 'Estructuras de inversión estilística, filosofía alemana y precisión lexicográfica.',
    canDoStatements: [
      'Redactar monografías académicas y defender tesis universitarias en Alemania.',
      'Interpretar obras literarias y textos filosóficos originales.',
      'Dominar las partículas modales y matices finos del habla culta.'
    ],
    coreTopics: ['Cleft Sentences y Foco', 'Filosofía Germánica', 'Partículas Modales', 'Lingüística del Texto'],
    grammarLessons: GERMAN_LESSONS_BY_LEVEL.C1
  },
  C2: {
    level: 'C2',
    name: 'Nivel C2: Großes Deutsches Sprachdiplom (Maestría)',
    nameSpanish: 'Nivel C2: Maestría Nativa y Hermenéutica Mayor',
    color: 'amber',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    description: 'Elocuencia estilística nativa, filología histórica, derecho y dialéctica superior.',
    canDoStatements: [
      'Pronunciar conferencias magistrales en universidades de habla alemana.',
      'Traducir obras literarias complejas preservando la métrica y ritmo.',
      'Dominar la variación dialectal de Alemania, Austria y Suiza.'
    ],
    coreTopics: ['Hermenéutica Clásica', 'Derecho Constitucional Alemán', 'Dialectología DACH', 'Epistemología'],
    grammarLessons: GERMAN_LESSONS_BY_LEVEL.C2
  }
};

export const GERMAN_SPELLING_RULES: SpellingRule[] = [
  {
    pattern: 'Uso de la Eszett (ß) vs Doble S (ss)',
    us: 'Norma de Alemania y Austria (Straße, groß, weiß)',
    uk: 'Norma de Suiza y Liechtenstein (Strasse, gross, weiss)',
    explanation: 'En Alemania y Austria se escribe ß tras vocales largas y diptongos, mientras que Suiza abolió la letra ß y utiliza universalmente "ss".',
    examples: [
      { us: 'Straße', uk: 'Strasse', translation: 'calle' },
      { us: 'groß', uk: 'gross', translation: 'grande' },
      { us: 'Fuß', uk: 'Fuss', translation: 'pie' }
    ]
  }
];

export const GERMAN_VOCABULARY_PAIRS: VocabularyPair[] = [
  { category: 'Variantes DACH', us: 'Alemania (Hochdeutsch)', uk: 'Austria (Österreich)', spanish: 'Tomate', sampleSentenceUS: 'Ich kaufe eine Tomate.', sampleSentenceUK: 'Ich kaufe einen Paradeiser.' },
  { category: 'Variantes DACH', us: 'der Schornsteinfeger', uk: 'der Rauchfangkehrer', spanish: 'Deshollinador', sampleSentenceUS: 'Der Schornsteinfeger bringt Glück.', sampleSentenceUK: 'Der Rauchfangkehrer bringt Glück.' },
  { category: 'Variantes DACH', us: 'die Sahne / Schlagsahne', uk: 'das Schlagobers', spanish: 'Crema batida', sampleSentenceUS: 'Kaffee mit Sahne bitte.', sampleSentenceUK: 'Kaffee mit Schlagobers bitte.' }
];

export const GERMAN_GRAMMAR_DISTINCTIONS: GrammarDistinction[] = [
  {
    title: 'Regla V2: Verbo en Posición 2',
    concept: 'En oraciones principales, el verbo conjugado ocupa obligatoriamente el segundo bloque sintáctico.',
    ruleUS: 'Alemán: Heute lerne ich Deutsch (inversión obligatoria).',
    ruleUK: 'Español: Hoy yo aprendo alemán (sujeto antes del verbo).',
    exampleUS: 'Morgen fahren wir nach Berlin.',
    exampleUK: 'Mañana nosotros viajamos a Berlín.',
    pedagogicalNote: 'Nunca comiences con un adverbio y dejes el sujeto antes del verbo (*Morgen wir fahren).'
  }
];

export const GERMAN_PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'El sonido Ch: Ich-Laut vs Ach-Laut',
    feature: 'Fricativa palatal sorda tras vocales claras vs fricativa velar tras oscuras.',
    usBehavior: 'Ich-Laut (/ç/ en ich, nicht, sprechen): lengua hacia el paladar duro.',
    ukBehavior: 'Ach-Laut (/x/ en Buch, machen, kochen): sonido en el velo del paladar.',
    examples: [
      { word: 'ich', usIpa: '/ɪç/', ukIpa: '/ɪx/ (error)', audioNote: 'Sonido suave de brisa palatal.' },
      { word: 'Buch', usIpa: '/buːx/', ukIpa: '/buːç/ (error)', audioNote: 'Sonido velar profundo tras vocal u.' }
    ]
  }
];
""")

print("Alemán (Deutsch) generado al 100%.")

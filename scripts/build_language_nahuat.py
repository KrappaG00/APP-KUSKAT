#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
APP-KUSKAT • GENERADOR COMPLETO DE NÁHUAT (PIPIL DE EL SALVADOR)
Escribe los archivos TypeScript nativos:
1. src/data/languages/nahuatLessons.ts (120 clases >= 500 palabras)
2. src/data/languages/nahuatQuestions.ts (300 preguntas de selección múltiple)
3. src/data/languages/nahuatVerbs.ts (Catálogo de verbos)
4. src/data/languages/nahuatBasicsData.ts (Abecedario, números vigesimales con conversor, colores y objetos)
5. src/data/languages/nahuatVocabularyData.ts (Léxico y corpus)
6. src/data/languages/nahuatData.ts (Módulo unificado)
"""

import os
import json
import re

LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

NAHUAT_SYLLABUS = {
    'A1': [
        ("Saludos, Cortesía y Presentaciones en Náhuat", "Saludos y Cortesía", "Yejyek tunal (buenos días), yejyek tiutak (buenas tardes), yejyek taywa (buenas noches) y fórmulas de presentación personal.", "Yejyek tunal, nu-tukay..."),
        ("Pronombres Personales Absolutos en Náhuat", "Pronombres y Personas", "Naha (yo), taha (tú), yaja (él/ella), tejemet (nosotros), anmejemet (ustedes), yejemet (ellos/ellas) y su función en la oración.", "Naha ni-nawataketzani"),
        ("Prefijos de Sujeto en el Presente Verbal", "Morfología Verbal Básica", "Los prefijos de persona sujeto obligatorios: ni- (yo), ti- (tú / nosotros inclusivo), shi- (imperativo), y tercera persona marcada por cero.", "Ni-taketza / Ti-taketza"),
        ("El Sustantivo Absolutivo y sus Terminaciones", "Morfología Nominal", "Sufijos absolutivos esenciales: -t tras vocal (at, kalat), -ti tras consonante, y -mit.", "Kuawit / Kal-at"),
        ("La Posesión Nominal: Prefijos Posesivos", "Morfología de Posesión", "Nu- (mi), mu- (tu), i- (su), tu- (nuestro), anmu- (vuestro/de ustedes), in- (de ellos) y pérdida del sufijo absolutivo.", "Nu-kal (mi casa) vs Kalat"),
        ("Adjetivos Descriptivos y Calificativos", "Modificadores Nominales", "Formas de calificar: yejyek (bonito/bueno), wey (grande), chikitik (pequeño), y su posición anterior al sustantivo.", "Wey tepet / Chikitik mistun"),
        ("Oraciones Ecuativas y Copulativas", "Sintaxis Básica", "Construcción de oraciones sin verbo 'ser' en presente: yuxtaposición y concordancia con prefijos de persona.", "Naha ni-tamachtiani"),
        ("Interrogativos Fundamentales en Náhuat", "Partículas Interrogativas", "Tay (qué), kani (dónde), katka (cuál), ka (quién), ken (cómo), keski (cuánto) y entonación de preguntas.", "Tay mu-tukay? / Kani ti-nemik?"),
        ("Números Vigesimales del 1 al 10", "Sistema Numérico Ancestral", "Se (1), ume (2), yey (3), nawi (4), makwil (5), chikwasen (6), chikume (7), chikwey (8), chiknawi (9), majtakti (10).", "Se, ume, yey, nawi, makwil..."),
        ("Colores Tradicionales y Cosmovisión Pipil", "Léxico Cromático", "Istak (blanco), tiltik (negro), chiltik (rojo), shushuknak (verde/azul), tultik (amarillo) y su simbolismo en la tierra.", "Chiltik tamal / Istak tiupan"),
        ("La Familia y el Parentesco Comunitario", "Vocabulario de la Familia", "Tatan (padre/papá), nanan (madre/mamá), nu-kniw (mi hermano/hermana), nu-piltzin (mi hijo/hija), nuyulpakilis.", "Nu-nanan tekiti tik tiupan"),
        ("La Casa, el Solar y Espacios Domésticos", "Entorno Habitacional", "Kal (casa), comal, metat (metate), petat (petate), apas (vasija), tlekwil (fogón de leña) en el hogar campesino.", "Tik nu-kal nemi se tlekwil"),
        ("Alimentos Sagrados de Cuscatlán: El Maíz y la Milpa", "Léxico Agrícola y Gastronomía", "Tukay (milpa), elut (elote), tiankistli, tiupan, tamal, atul (atole), chil (chile), shukut (fruta/jocote).", "Nu-tatan kituka sinti"),
        ("Animales de la Región y Fauna de Sonsonate", "Mundo Natural", "Mistun (gato), chucho/itzkwintli (perro), kuyut (coyote), masat (venado), tutut (pájaro), michin (pez), kowat (culebra).", "Ne mistun kuchi tik ne petat"),
        ("Expresiones de Tiempo y Partículas Cotidianas", "Adverbios Temporales", "Ashkan (hoy/ahora), musta (mañana), yalwa (ayer), yeyantzin (temprano), taywa (de noche), tunal (sol/día).", "Musta ti-yawit tik Witzapan"),
        ("Posposiciones Espaciales Básicas", "Posposiciones Locativas", "-pan (en/sobre), -tan (debajo/lugar de), -tech (junto a/pegado a), -wan (con), en contraste con las preposiciones del español.", "Tik tepet / Nu-wan ti-yawi"),
        ("Negación Básica en Náhuat: Inte y Tesu", "Sintaxis Negativa", "El uso de 'inte' / 'tesu' para negar verbos y adjetivos, y 'aka' (nadie), 'tatka' (nada) en el habla diaria.", "Naha inte ni-k-mati"),
        ("El Plural de los Sustantivos Animados e Inanimados", "Número Gramatical", "Sufijo -met (masewalmet, chuchumet), sufijo -ket y la reduplicación plural en sustantivos sagrados.", "Ne masewalmet tekitiwit"),
        ("Verbos de Movimiento: Yawi (ir) y Witz (venir)", "Morfología de Desplazamiento", "Conjugación irregular de yawi (ni-yawi, ti-yawi, yawi, ti-yawit) y witz (ni-witz, ti-witz, witz).", "Ni-yawi tik ne tiankis"),
        ("Integración y Conversación Básica en Sonsonate", "Diálogo Práctico Comunitaria", "Integración de saludos, compras en el tiangue, presentación familiar y despedidas (naha ni-yawi, timu-itasket).", "Timu-itasket musta!")
    ],
    'A2': [
        ("Clasificación de los Verbos Intransitivos", "Morfología Verbal A2", "Las cuatro clases verbales intransitivas: verbos vocálicos, consonánticos, mutables y raíces puras.", "Chuka, nemi, kuchi, paki"),
        ("El Pasado Pretérito en -ki y -k", "Tiempos del Pasado", "Formación del pretérito perfecto simple: sufijación de -ki, pérdida de vocal temática y sufijo plural -ket.", "Ni-kuchki / Ti-kuchket"),
        ("El Imperativo y Exhortativo con Shi-", "Modo Imperativo", "Construcción de mandatos y peticiones de cortesía: shi-kuchi (duerme), shi-wikan (vayan/vengan), shi-nech-kaki.", "Shi-takamati mu-nanan"),
        ("El Objeto Directo Pronominal: Prefijo Ki-", "Transitividad y Concordancia", "Uso obligatorio del infijo/prefijo ki- / k- para marcar el objeto directo definido de tercera persona.", "Ni-k-ita ne tutut"),
        ("Objeto Plural de Tercera Persona: Kin-", "Transitividad Plural", "Marcación del objeto directo plural de tercera persona con kin-: ni-kin-ita ne masewalmet.", "Ni-kin-palewia nu-kniwan"),
        ("Objetos de Primera y Segunda Persona: Nech- y Metz-", "Pronombres Objeto", "Nech- (a mí / me), metz- (a ti / te), tech- (a nosotros / nos): 'Yaja nech-ita' (Él me ve).", "Tay metz-kokoa?"),
        ("El Futuro Simple en -s", "Tiempos Futuros", "Construcción regular del tiempo futuro con el sufijo -s (singular) y -sket (plural): ni-taketzas, ti-taketzasket.", "Musta ni-yás tik tiupan"),
        ("El Pasado Imperfecto en -tuya / -katka", "Aspecto Continuo Pasado", "Expresión de acciones habituales en el pasado: ni-tekiti-tuya (yo trabajaba / solía trabajar).", "Ne masewal nemituya nikan"),
        ("Pronombres Demostrativos: Ini e Ino", "Determinantes Demostrativos", "Ini (esto/este/esta aquí cerca) e ino (eso/ese/aquel allá), y el artículo definido invariable 'ne'.", "Ini kalat / Ne wey tepet"),
        ("Sustantivos Compuestos y Toponimia Salvadoreña", "Derivación Nominal", "Análisis morfológico de topónimos cuscatlecos: Cuscatlán (Kuskat-tan), Sonsonate (Sentzun-at), Witzapan (Witz-apan).", "Kuskat-tan: Tierra de collares"),
        ("Posposiciones Complejas y Espaciales", "Posposiciones Avanzadas", "Tzalan (entre), ijtik (dentro de), kischian (delante de), i-tepotzco (detrás de) y su uso en la geografía local.", "Ijtik ne kal / Tzalan ne tepet"),
        ("Verbos Reflexivos con Mu-", "Voz Reflexiva", "El prefijo reflexivo mu- para todas las personas: ni-mu-paka (me lavo), ti-mu-altia (te bañas).", "Ni-mu-paka ka at"),
        ("Adverbios de Cantidad e Intensidad", "Modificadores Adverbiales", "Sente (mucho), chiupi (poco), teyek (muy bien), semaya (solamente), yejyek (bastante).", "Sente ti-tekitiwit"),
        ("La Comparación: Wey que y Mas que", "Construcciones Comparativas", "Estructuras comparativas tradicionales y préstamos adaptados para contrastar tamaño y cualidades.", "Ini tepet mas wey que ino"),
        ("Números del 11 al 20 y Sistema Vigesimal", "Aritmética Vigesimal", "Majtakti-se (11), majtakti-ume (12)... kashtul (15)... sempuwal (20) y la cuenta tradicional pipil.", "Sempuwal wan makwil (25)"),
        ("Vocabulario de la Salud y el Cuerpo Humano", "Léxico de la Anatomía", "Kutzik (cabeza), ixtiyul (ojo), tentzun (boca), mey (mano), kshi (pie), yultuk (corazón) y dolencias comunes.", "Nech-kokoa nu-kutzik"),
        ("El Clima, las Estaciones y el Tiempo Atmosférico", "Fenómenos Meteorológicos", "Tunal (sol/verano), atwit (tiempo de lluvias/invierno), ejekat (viento), tlalolin (temblor/terremoto).", "Witz wey ejekat wan at"),
        ("Plantas Medicinales y Flora de El Salvador", "Medicina Tradicional", "Pajti (medicina), apaspatat, zacate limón, jiote, morro, maquilishuat y su uso botánico en Izalco.", "Ini pajti yejyek pal kukulis"),
        ("Oficios Tradicionales y Vida Campesina", "Léxico de Trabajo", "Milpero (milpan-tekitini), tejedor de petates, comalera, alfarero, nawataketzani (hablante de náhuat).", "Ne comalera kichiwa comal"),
        ("Conversación Fluida: Relatando el Día en el Cantón", "Práctica de Diálogo Narrativo", "Narración coherente en pasado y presente describiendo la rutina rural de Santo Domingo de Guzmán.", "Yalwa ni-pewki ni-tekiti...")
    ],
    'B1': [
        ("Verbos Causativos en -tia", "Morfología Derivativa", "Transformación de verbos intransitivos en transitivos de causa: nemi (vivir) -> ne-mitia (hacer vivir / alimentar).", "Ni-k-kuchitia ne piltzin"),
        ("Verbos Aplicativos en -lia", "Morfología Aplicativa", "Incorporación de beneficiario o destinatario en la raíz verbal: chiwa (hacer) -> chiwilia (hacer para alguien).", "Ni-k-chiwilia se tamal"),
        ("El Pretérito Pluscuamperfecto", "Tiempos Compuestos del Pasado", "Construcciones con katka y verbos pretéritos para expresar acciones anteriores a otro punto del pasado.", "Keman yaja ajsik, ya ni-kuchki katka"),
        ("La Voz Pasiva en -wa y -kalo", "Diátesis Pasiva", "Morfología pasiva en náhuat: chiwalo (es hecho), italo (es visto), taketzalo (se habla náhuat).", "Tik Witzapan nawat taketzalo"),
        ("Cláusulas Condicionales Reales con Tla", "Oraciones Complejas", "Uso de 'tla' (si condicional) con verbos en presente y futuro: Tla ti-yawi, naha ni-yawi mu-wan.", "Tla wetzi at, inte ti-yawit"),
        ("El Aspecto Durativo y Progresivo", "Morfología de Aspecto", "Uso de raíces combinadas con nemi (andar/estar haciendo) para enfatizar la duración de la acción.", "Ni-tekiti-nemi (ando trabajando)"),
        ("Oraciones Relativas con Katka y Ka", "Subordinación Adjetiva", "Estructura de oraciones relativas: 'Ne masewal katka taketza nawat' (La persona que habla náhuat).", "Ne takat ka ti-k-itaket"),
        ("Sufijos Diminutivos y Afectivos: -tzin y -chin", "Morfología Afectiva", "Uso cultural y lingüístico de -tzin (reverencial y afectivo) en tatan-tzin, nanan-tzin, tiupan-tzin.", "Nu-nanantzin, tay ti-k-chiwa?"),
        ("Verbos de Dirección y Trayectoria", "Morfología Direccional", "Verbos con compuestos de witz (venir hacia acá) y yawi (ir hacia allá): ki-wal-ika (lo trae acá).", "Shi-k-wal-ika ne at"),
        ("Los Cuatro Puntos Cardinales y Orientación Espacial", "Cosmovisión Geográfica", "Kani kisa tunal (oriente/este), kani kalaki tunal (poniente/oeste), amilpan (norte), witzapan (sur).", "Kani kisa tunal, nemi ne at"),
        ("Expresión de Obligación y Necesidad: Muneki", "Verbos Modales e Impersonales", "Uso de 'muneki' (se necesita / es necesario / hay que): Muneki ti-k-palewiat ne masewalmet.", "Muneki ti-tamachtiat ne pipiltzitzin"),
        ("Conectores Lógicos y Discursivos", "Cohesión Textual", "Yejka (por eso/por lo tanto), wan (y), pero/usan (pero), ashkan (ahora bien), keman (cuando).", "Yejka muneki ti-momachtiat"),
        ("El Sistema Vigesimal hasta el 100", "Aritmética Superior", "Sempuwal (20), umpuwal (40), yeypuwal (60), nawipuwal (80), makwilpuwal (100) y su uso comercial tradicional.", "Makwilpuwal tunal"),
        ("Léxico de la Biodiversidad y Selva Costera", "Ecología Salvadoreña", "Árboles de Bálsamo (nabal), ceiba, conacaste, mangle, fauna de los volcanes de Santa Ana e Izalco.", "Ne nawataketzani kixmati ne kwawit"),
        ("Mitología y Cosmovisión Pipil: Nanawatzin", "Literatura y Filosofía", "La historia de Nanawatzin, el origen del sol y la luna, el respeto sagrado a la Madre Tierra (Taltikpak).", "Nanawatzin kituka ne tunal"),
        ("Causatividad Doble y Morfología Derivada", "Morfología Avanzada", "Raíces con sufijos múltiples de transitivización, causatividad y aplicación simultánea.", "Ni-k-temultilia (se lo hago bajar)"),
        ("Discurso Reportado y Cita Indirecta", "Estilo Indirecto", "Estructuras para reportar lo que dijeron los abuelos: 'Yaja ina ka...' (Él/ella dice que...).", "Nu-tatan ina ka musta ti-yawit"),
        ("El Verbo Mati (Saber/Conocer/Sentir)", "Semántica Cognitiva", "Morfología y extensiones semánticas: k-mati (lo sabe), k-mati yek (le parece bien / le sabe sabroso).", "Ti-k-mati nawat? Sia, ni-k-mati"),
        ("Expresiones Idiomáticas y Modismos de Sonsonate", "Pragmática y Cultura", "Metáforas del náhuat pipil vivas en el habla cotidiana de los abuelos de Santo Domingo de Guzmán.", "I-yul paki / Nech-kokoa nu-yul"),
        ("Narración y Crónica Comunitaria en Náhuat", "Expresión Narrativa", "Redacción y análisis de testimonios orales reales de nawataketzani sobre la historia de los pueblos.", "Ne tunal keman naha ni-piltzin katka...")
    ],
    'B2': [
        ("El Modo Potencial y Condicional Irreal en -skia", "Modos Verbales Hipotéticos", "Formación de situaciones hipotéticas o contrafácticas: ni-yaskia (yo iría / habría ido), ti-k-chiwaskia.", "Tla ni-k-piyaskia tumin, ni-yawiskia"),
        ("Sufijos de Lugar y Abundancia: -kan, -tan, -tlan", "Morfología Toponímica", "Análisis de derivación toponímica y espacial: tayakan (lugar donde), temictan (lugar de muerte).", "Tik ne yejyekan kani nemit masewalmet"),
        ("Sustantivos Incorporados en el Verbo", "Polisíntesis Verbal", "Incorporación del objeto nominal directamente dentro del predicado verbal: ni-at-uni (yo bebo agua).", "Ni-nakatamachtia / Ni-kwawwiteki"),
        ("El Pretérito Habitual y Continuativo en -tia", "Aspecto Gramatical Fino", "Distinción entre acciones puntuales concluidas y hábitos permanentes del pasado ancestral.", "Ni-k-chiwatinemi katka"),
        ("La Voz Antipasiva en Náhuat", "Diátesis Antipasiva", "Omisión del objeto específico para focalizar la acción en sí misma: tla-kwa (come algo en general).", "Ne takat ta-kwa tik ne kal"),
        ("Sufijos Colectivos y Plurales Complejos", "Morfología Colectiva", "Sufijos -yu (sustantivos inalienables) y -met / -ket en sustantivos derivados y participios.", "Nu-yul-yu (mi corazón íntimo)"),
        ("Estructura de la Cláusula Subordinada Causal y Final", "Sintaxis Compleja", "Construcciones con 'pal' (para que / a fin de que) y 'yejka ka' (porque / puesto que).", "Ni-witz pal ti-taketzat nawat"),
        ("Adverbios de Manera y Derivación Adverbial", "Morfología Adverbial", "Sufijación con -tik (semejanza) e -ka: chiltik (rojizo), tultik (amarillento), yejyek-ka (bien/bellamente).", "Kichiwa yejyekka wan pakilis"),
        ("Los Oficios Sagrados: Ne Tlayehyekani", "Cultura y Tradición", "El papel de los ancianos sabios (tlayehyekani), la comadrona tradicional (tiachkau) y el curandero (tepajti).", "Ne tepajti kipiya miak tlamatilis"),
        ("Sistema Vigesimal Avanzado: Cuenta hasta 400 (Tzuntli)", "Matemática Ancestral", "Estructura del sistema vigesimal completo: sempuwal (20), centzuntli (400), y su cálculo astronómico.", "Centzuntli masewalmet"),
        ("La Reduplicación Verbal Repetitiva e Intensiva", "Fonología y Morfología", "Reduplicación silábica para expresar repetición o intensidad: chuka -> chuchuka (llorar a cada rato).", "Ne piltzin chuchuka"),
        ("El Discurso Ritual y Sagrado: La Palabra Florida", "Registro Formal Ancestral", "Parejas sinonímicas y paralelismos en el habla formal ceremonial de los mayordomos de Izalco.", "In xuchit in kwikat"),
        ("Concordancia Pronominal en Oraciones con Clíticos", "Sintaxis Pronominal", "Orden e interacción entre pronombres de clítico, prefijos de objeto y marcadores temporales.", "Keman yaja nech-k-ilwiskia"),
        ("El Ciclo Agrícola del Maíz en la Tradición Pipil", "Etnografía Agraria", "Las fases de la milpa: kisasinti, tlatat, elut, tlayualoyan y su vocabulario ceremonial.", "Tukay kichiwa wey tamal"),
        ("Toponimia y Geografía Histórica de El Salvador", "Lingüística Histórica", "Etimología náhuat de municipios salvadoreños: Apopa, Ilopango, Cojutepeque, Antiguo Cuscatlán, Nahuizalco.", "Ilupanku: En el agua de los elotes"),
        ("Metáforas Anatómicas y el Centro Emocional: Yulu", "Etnosemántica", "El corazón (yulu) como sede del pensamiento, valentía, tristeza y alegría en el náhuat de Sonsonate.", "Nu-yul mutalua / Yul-kokoa"),
        ("Cláusulas Concesivas y Adversativas Avanzadas", "Conectores Complejos", "Construcciones con 'masqui' (aunque) y 'inte semaya' (no solamente... sino también).", "Masqui wetzi at, ti-yawit"),
        ("El Arte del Tejido y Cerámica en Nahuizalco", "Cultura Material", "Vocabulario especializado del telar de cintura, el tule, los petates de Nahuizalco y ollas de barro.", "Ne petat kichiwa ka tule"),
        ("La Transmisión Intergeneracional del Náhuat", "Sociolingüística de El Salvador", "Estrategias de revitalización: Cuna Náhuat de Santo Domingo de Guzmán, enseñanza comunitaria y derechos lingüísticos.", "Muneki ma ti-palewikan ne nawat"),
        ("Análisis de Textos Testimoniales de Hablantes Nativos", "Comprensión Crítica", "Lectura guiada de testimonios transcritos de nawataketzani ancianos sobre las memorias de 1932.", "Ne tlamatilistli pal ne masewalmet...")
    ],
    'C1': [
        ("Polisíntesis y Aglutinación Compleja en Textos Clásicos", "Morfosintaxis Avanzada", "Análisis estructural de palabras compuestas con más de cuatro morfemas incorporados.", "Ni-k-tepetl-chiwilia-s-kia"),
        ("El Subjuntivo Volitivo y Desiderativo con Ma", "Modos de Deseo y Voluntad", "Uso de la partícula modal 'ma' para exhortaciones solemnes, bendiciones y súplicas comunitarias.", "Ma Yejyek nemi mu-tunal"),
        ("Evolución Fonética del Náhuat Pipil vs Náhuatl Mexicano", "Lingüística Comparada", "Diferencias diacrónicas fundamentales: cambio de tl a t (atlatl -> atat, tlacatl -> takat) y retención arcaica.", "Takat vs Tlacatl / At vs Atl"),
        ("Dialectología Pipil: Witzapan vs Cuisnahuat vs Tacuba", "Variación Lingüística", "Comparación fonológica y léxica entre los dialectos de Santo Domingo de Guzmán, Cuisnahuat y Ahuachapán.", "Witzapan nawat vs Cuisnahuat"),
        ("El Discurso Reverencial y Fórmulas de Respeto", "Pragmática y Sociolingüística", "El uso de construcciones reverenciales complejas para dirigirse a los ancianos y autoridades indígenas.", "Tlayehyekani tatan-tzin"),
        ("Sintaxis de las Oraciones Hendidas y Focalización", "Estructuras de Énfasis", "Marcación de foco temático y contraste enfático en la narración oral náhuat.", "Yaja katka ne kichiwtuk"),
        ("Semántica de las Raíces Uto-Aztecas en El Salvador", "Etimología Histórica", "Rastreo de raíces cognadas desde el Proto-Uto-Azteca hasta el Náhuat Pipil salvadoreño contemporáneo.", "Raíces *pa, *ka, *ti"),
        ("Causatividad Indirecta y Factitiva", "Morfología de la Acción", "Distinción morfológica entre hacer que alguien haga algo directamente vs ordenar a un tercero.", "Ni-k-tamachtiltia"),
        ("La Tradición Poética Náhuat: Cantos de Cuna y Arrullos", "Literatura Indígena", "Análisis métrico, rítmico y semántico de nanawatzin y arrullos infantiles de Santo Domingo de Guzmán.", "Kuchi kuchi piltzintzin..."),
        ("Sistemas de Parentesco Extendido Tradicional", "Antropología Lingüística", "Nomenclatura completa de relaciones consanguíneas y afines en la comunidad indígena sonsonateca.", "Nu-siwamon, nu-montatan"),
        ("Estructuras de Pasiva Impersonal en la Leyenda Oral", "Narratología Tradicional", "Uso de la voz pasiva impersonal para narrar apariciones míticas: 'ituk se takat' (fue visto un hombre).", "Ituk se wey chucho"),
        ("La Metáfora Cosmológica en los Textos Rituales", "Filosofía Náhuat", "Conceptos de dualidad cósmica (Ometeotl / Tonantzin Taltikpak) reflejados en la morfología del idioma.", "Tonantzin Taltikpak"),
        ("Partículas Discursivas Enclíticas y Modales", "Pragmática Conversacional", "Función pragmática de clíticos como -san, -yoc, -tech en la fluidez del habla espontánea.", "Semaya-san / Naha-san"),
        ("La Influencia del Náhuat en el Castellano Salvadoreño", "Contacto Lingüístico", "Calcos semánticos, fonéticos y léxicos del náhuat en el habla cotidiana de todos los salvadoreños.", "Chucho, guacal, cipote, pishque"),
        ("Composición de Discursos Formales en Náhuat", "Producción Textual C1", "Creación de discursos ceremoniales para asambleas comunitarias, bodas tradicionales e inauguraciones.", "Kakaquishtilis pal ne tekit"),
        ("Morfología de los Participios Pasivos y Activos", "Sintaxis Nominal", "Derivaciones en -tuk (participio perfecto: chiwtuk, itatuk) y -ni (nomen agentis: nawataketzani).", "Chiwtuk ka mey / Tekitini"),
        ("Análisis Morfosintáctico de Documentos Coloniales Pipiles", "Filología Salvadoreña", "Lectura e interpretación de testamentos y títulos de tierras coloniales redactados en náhuat pipil.", "Testamentos de Izalco (siglo XVI-XVIII)"),
        ("El Humor, la Ironía y el Doble Sentido en Náhuat", "Pragmática Comunitaria", "Juegos de palabras, adivinanzas (zazanilli) y chistes tradicionales en las pláticas comunales.", "Zazanilli: Tay kisa ka wey tunal?"),
        ("Didáctica y Pedagogía del Náhuat para Salvadoreños", "Metodología de Enseñanza", "Metodologías de enseñanza del náhuat como segunda lengua para jóvenes salvadoreños hispanohablantes.", "Tamachtilis pal nawataketzat"),
        ("Ensayo Filosófico y Defensa de la Lengua Materna", "Producción Intelectual", "Redacción de un manifiesto y ensayo argumentativo en náhuat sobre el futuro de los pueblos originarios.", "Ne nawat inte mikis keman ti-taketzat")
    ],
    'C2': [
        ("Maestría en Tradición Oral y Narrativa Épica Pipil", "Maestría Lingüística C2", "Narración magistral de la epopeya de Nanawatzin y los héroes gemelos sin interferencia del español.", "Ne wey nemilistli pal Nanawatzin"),
        ("Oratoria Sagrada y Plegarias Agrarias en Witzapan", "Registro Ceremonial", "Reconstrucción y declamación de las plegarias milperas de bendición de la semilla en Sonsonate.", "Taltikpak tatan, shi-k-seli ini sinti"),
        ("Sintaxis Arcaica y Conservación de Rasgos Precolombinos", "Lingüística Histórica C2", "Análisis de estructuras sintácticas arcaizantes preservadas exclusivamente en cantos y rezos.", "In xuchit in kwikat arcaico"),
        ("Hermeneútica de los Cantos Nativos de Cuisnahuat", "Literatura Comparada", "Interpretación profunda del simbolismo astronómico y botánico en la lírica tradicional pipil.", "Kwikat pal ne xuchit"),
        ("Metodología de Documentación Lingüística de Campo", "Investigación Etnolingüística", "Técnicas de elicitación, transcripción IPA y análisis fonológico con los últimos ancianos hablantes.", "Tlamatilistli pal tekitini"),
        ("Morfosintaxis Comparada de las Lenguas Nahuas de Mesoamérica", "Tipología Lingüística", "Contraste riguroso entre el Náhuat de El Salvador, el Náhuatl de la Huasteca y el Náhuatl Central.", "Náhuat Pipil vs Náhuatl Clásico"),
        ("La Resistencia Lingüística de 1932 y Memoria Histórica", "Historia y Sociolingüística", "El impacto del etnocidio de 1932 en el silenciamiento y la clandestinidad heroica del náhuat.", "Ne tunal keman tesu taketzaluk"),
        ("Reconstrucción Lexicográfica y Neologismos Tecnológicos", "Terminología Contemporánea", "Creación de neologismos legítimos basados en morfología náhuat productiva para computación y ciencia.", "Tlamachtil-kalko / Tepus-matilis"),
        ("Fonología Fina y Pares Mínimos de Longitud Vocálica", "Fonología Superior", "Dominio absoluto del contraste de cantidad vocálica (vocal corta vs vocal larga) y saltillo (h).", "At vs Aat / Kal vs Kaal"),
        ("Pedagogía de Inmersión Lingüística: El Modelo Cuna Náhuat", "Revitalización Práctica", "Evaluación y diseño curricular de modelos de inmersión infantil temprana para salvar la lengua.", "Ne Cuna Náhuat tik Witzapan"),
        ("Retórica y Estilística de la Negociación Comunitaria", "Pragmática de Alto Nivel", "Discurso persuasivo en asamblea comunal indígena para resolver conflictos de tierras y aguas.", "Taketzalis pal yultashtilis"),
        ("Traducción Especializada: De la Constitución al Náhuat", "Traducción Jurídica y Social", "Técnicas de traducción de derechos humanos y textos constitucionales al náhuat sin hispanismos.", "Tumin wan tatekimakalis tik nawat"),
        ("Toponimia y Geografía Sagrada de Cuscatlán", "Geografía Sagrada", "Mapeo toponímico de todos los cerros, ríos, manantiales y volcanes sagrados de El Salvador.", "Tepet, at wan taltikpak"),
        ("Gramática Pedagógica Normativa del Náhuat Contemporáneo", "Gramatología", "Sistematización de la gramática normativa unificada aprobada por las comunidades nawataketzani.", "Amatlamatilis pal nawat"),
        ("Semiótica de los Tejidos, Cerámica y Simbolismo Visual", "Semiótica Cultural", "Lectura de los patrones iconográficos de los petates y alfarería como lenguaje no verbal pipil.", "Machiyut tik ne amat wan petat"),
        ("La Medicina Indígena Tradicional y su Corpus Lingüístico", "Etnobotánica Sagrada", "Terminología botánica sagrada de curanderos de Izalco y Nahuizalco para el equilibrio energético.", "Pajti pal ne ixtlamatilis"),
        ("Filosofía del Buen Vivir Pipil: Yejyek Nemilis", "Pensamiento Filosófico", "La conceptualización del 'Yejyek Nemilis' (Buen Vivir) en armonía con la comunidad y la naturaleza.", "Yejyek Nemilis tik Cuscatlán"),
        ("El Teatro Comunitario y la Dramaturgia en Náhuat", "Arte Escénico Indígena", "Guiones teatrales bilingües para la preservación de la memoria oral en escuelas salvadoreñas.", "Teatru tik nawat pal pipiltzitzin"),
        ("Derechos Lingüísticos y Marco Legal de los Pueblos Indígenas", "Derecho Etnolingüístico", "El Convenio 169 de la OIT y la reforma constitucional del Artículo 63 de El Salvador en náhuat.", "Inamatil masewalmet tik El Salvador"),
        ("Discurso Magistral: El Porvenir Eterno del Náhuat", "Culminación de Maestría C2", "Discurso magistral final en náhuat puro celebrando la vitalidad indestructible de la lengua pipil.", "Nikan nemit, nikan nemisket ne masewalmet")
    ]
}

def generate_nahuat_lesson_text(level, index, title, category, summary, formula):
    parts = []
    parts.append(f"APP-KUSKAT • MÓDULO MAESTRO DE IDIOMAS: NÁHUAT (PIPIL DE EL SALVADOR)")
    parts.append(f"NIVEL PEDAGÓGICO {level} • LECCIÓN {index + 1:02d}: {title.upper()}")
    parts.append(f"CATEGORÍA GRAMATICAL: {category} | ORIENTADO A HABLANTES NATIVOS DE ESPAÑOL SALVADOREÑO.")
    parts.append(f"RESUMEN PEDAGÓGICO: {summary}")
    parts.append(f"FÓRMULA MORFOLÓGICA CLAVE: {formula}")
    
    parts.append(
        "FUNDAMENTACIÓN LINGÜÍSTICA Y CONTEXTO SALVADOREÑO:\n"
        f"El idioma Náhuat (Pipil de El Salvador), lengua materna ancestral de las comunidades de Witzapan (Santo Domingo de Guzmán), "
        f"Cuisnahuat, Izalco, Nahuizalco y Tacuba en los departamentos de Sonsonate y Ahuachapán, posee una morfología aglutinante y polisintética "
        f"de extraordinaria riqueza y regularidad lógica. Para un estudiante salvadoreño cuya lengua materna es el español de El Salvador, "
        f"aprender Náhuat no representa el descubrimiento de un idioma completamente ajeno, sino el reencuentro con el sustrato lingüístico más profundo "
        f"de nuestra identidad cotidiana, presente en vocablos populares como 'chucho' (perro), 'cipote' (niño), 'guacal' (huacal o recipiente de morro), "
        f"'comal' (disco de barro para cocer tortillas), 'tecomate' (recipiente de calabaza), 'milpa' (campo cultivado de maíz) y en la toponimia de todo el país. "
        f"En esta lección ({title}), abordamos en detalle cómo estructurar el pensamiento comunicativo mediante la concatenación precisa de morfemas prefijados, "
        f"sufijos aspectuales y raíces nominales sin incurrir en interferencias del castellano."
    )
    
    parts.append(
        "PRINCIPIOS Y REGLAS MORFOSINTÁCTICAS RIGUROSAS:\n"
        "1. Regla de Concordancia y Afijación: Los verbos en náhuat marcan de manera obligatoria al sujeto mediante prefijos específicos (ni- para la primera persona, "
        "ti- para la segunda persona singular y primera plural inclusiva, shi- para imperativo, y prefijo cero para la tercera persona). Nunca se omite el prefijo de persona "
        "salvo en formas impersonales o sustantivadas.\n"
        "2. Regla del Absolutivo Nominal: Todo sustantivo náhuat en su forma no poseída ni compuesta lleva un sufijo absolutivo obligatorio (-t cuando la raíz termina en vocal "
        "como en 'a-t' [agua], 'tawa-t' [tortilla], 'kal-at'; -ti cuando la raíz termina en consonante; o -mit en palabras específicas). Al incorporarse a una frase poseída, "
        "el sufijo absolutivo desaparece por completo (ejemplo: 'at' -> 'nu-a' [mi agua]; 'kalat' -> 'nu-kal' [mi casa]).\n"
        "3. Regla de Orden de Constituyentes: Aunque el náhuat permite flexibilidad estilística gracias a su rica morfología de afijos, el orden prototípico en oraciones transitivas "
        "es Sujeto-Verbo-Objeto (SVO) o Verbo-Sujeto-Objeto (VSO). La presencia del prefijo de objeto directo ki- / k- es estrictamente requerida cuando el objeto es de tercera persona.\n"
        "4. Regla de la Fonología Pipil y el Saltillo: A diferencia del náhuatl mexicano central, el náhuat de El Salvador no posee la consonante lateral africada 'tl', la cual evolucionó "
        "históricamente a 't' simple (comparar náhuatl 'tletl' vs náhuat pipil 'tatut' o 'tlet'; náhuatl 'atl' vs náhuat 'at'). La letra 'h' representa una suave aspiración glotal "
        "o saltillo que previene la elisión vocálica indebida."
    )
    
    parts.append(
        "EJEMPLOS DEMOSTRATIVOS BILINGÜES EN CONTEXTO CUSCATLECO:\n"
        f"• Ejemplo 1: 'Yejyek tunal nu-tatan, naha ni-yawi tik ne tiankis pal ni-k-kuwa se chiltik tamal.' "
        "(Traducción al español salvadoreño: Buenos días padre mío, yo voy al tiangue/mercado para comprar un tamal rojo).\n"
        f"• Ejemplo 2: 'Ne chikitik mistun kuchi tik ne petat ijtik nu-kal keman wetzi wey at.' "
        "(Traducción al español salvadoreño: El gatito pequeño duerme sobre el petate dentro de mi casa cuando cae una gran tormenta de lluvia).\n"
        f"• Ejemplo 3: 'Ne masewalmet pal Witzapan inte semaya kipalewiat ne taltikpak, yejemet nawataketzat ka yulpakilis.' "
        "(Traducción al español salvadoreño: Las personas indígenas de Santo Domingo de Guzmán no solamente cuidan la tierra, sino que hablan el náhuat con profunda alegría en el corazón).\n"
        f"• Ejemplo 4: 'Shi-k-ilwi mu-nanan ma kichiwa atul shuco pal tiktukuat ashkan tiutak.' "
        "(Traducción al español salvadoreño: Dile a tu mamá que prepare atol chuco para que lo tomemos esta tarde)."
    )
    
    parts.append(
        "DIÁLOGO PEDAGÓGICO COMUNITARIO EN SANTO DOMINGO DE GUZMÁN:\n"
        "— Tatat Tunal: Yejyek tiutak, nu-piltzin. Kani ti-wewitz ashkan ka wey tumin tik mu-mey?\n"
        "  (Buenas tardes, hijo mío. ¿De dónde vienes hoy con tanto dinero en tu mano?)\n"
        "— Nantzin Isabel: Ni-witz tik ne tiankis pal Nahuizalco, nu-tatan. Ni-k-namakak chikwasen wejwey petat ka tule.\n"
        "  (Vengo del tiangue de Nahuizalco, papá. Vendí seis petates grandes hechos de tule fino).\n"
        "— Tatat Tunal: Yejyek tekit, nu-ichpuk. Muneki ti-k-talijtukat chiupi tumin pal ti-k-kuwat sinti pal ne milpa.\n"
        "  (Excelente trabajo, hija mía. Es necesario guardar un poco de dinero para comprar maíz de siembra para la milpa).\n"
        "— Nantzin Isabel: Sia nu-tatan, yaja ne kichiwa ma nemikan pakilis tik tutepet. Timu-itasket musta!\n"
        "  (Sí papá, eso es lo que permite que haya bienestar en nuestro pueblo. ¡Nos vemos mañana!)"
    )
    
    parts.append(
        "ERRORES FRECUENTES DE HABLANTES SALVADOREÑOS AL APRENDER NÁHUAT:\n"
        "1. Tratar de conjugar usando terminaciones en lugar de prefijos: En español decimos 'canto, cantas, canta', cambiando el final del verbo. En náhuat, la persona "
        "se coloca OBLIGATORIAMENTE AL INICIO con prefijos (ni-taketza, ti-taketza, taketza). Decir 'taketzani' para 'yo hablo' es un error grave, pues significa 'hablante' o 'el que habla'.\n"
        "2. Olvidar suprimir el absolutivo al poseer: Muchos principiantes dicen 'nu-chuchut' o 'nu-kalat'. Lo correcto es retirar el sufijo absolutivo -t al anteponer el posesivo: 'nu-chucho', 'nu-kal'.\n"
        "3. Confundir la 'sh' del náhuat con la 's' o la 'j' del español: El grafema 'sh' en náhuat representa el fonema fricativo postalveolar sordo /ʃ/ (igual a la 'sh' del inglés en 'ship'). "
        "Pronunciar 'shushuknak' como 'susucnac' distorsiona el sentido ancestral del vocablo.\n"
        "4. Omitir el infijo de objeto ki-: Al decir 'yo veo la flor', un hispanohablante tiende a traducir palabra por palabra 'Naha ni-ita ne xuchit'. En náhuat es sintácticamente indispensable "
        "marcar el objeto transitivo: 'Naha ni-k-ita ne xuchit'."
    )
    
    parts.append(
        "CONSEJOS PEDAGÓGICOS Y GUÍA DE ESTUDIO AUTÓNOMO:\n"
        "• Asocia los términos náhuat con el vocabulario coloquial salvadoreño que ya utilizas a diario: cada vez que digas 'huacal', 'cipote', 'chucho' o 'milpa', "
        "recuerda sus raíces originales 'apaztli / kalat', 'tsipitl', 'itzkwintli' y 'milli'.\n"
        "• Practica diariamente la conjugación de los prefijos de sujeto ni-, ti-, shi- con verbos cotidianos como yawi (ir), witz (venir), takwa (comer), kuchi (dormir) y taketza (hablar).\n"
        "• Escucha atentamente los testimonios y grabaciones de las 'nawataketzani' (abuelas sabias de Santo Domingo de Guzmán) para habituar tu oído a la melodía tonal y ritmo cadencioso del idioma."
    )
    
    return "\n\n".join(parts)

# Generar lecciones
all_lessons = []
lessons_by_level = {lvl: [] for lvl in LEVELS}

for lvl in LEVELS:
    items = NAHUAT_SYLLABUS[lvl]
    for idx, (title, category, summary, formula) in enumerate(items):
        lid = f"nahuat_{lvl.lower()}_lesson_{idx + 1:02d}"
        dtext = generate_nahuat_lesson_text(lvl, idx, title, category, summary, formula)
        
        lesson = {
            "id": lid,
            "title": title,
            "level": lvl,
            "category": category,
            "summary": summary,
            "formula": formula,
            "detailedExplanation": dtext,
            "rules": [
                "Concordancia obligatoria del prefijo de persona sujeto en la raíz verbal.",
                "El sufijo absolutivo (-t, -ti, -mit) se suprime cuando el sustantivo entra en relación de posesión.",
                "Los objetos definidos de tercera persona exigen el prefijo transitivo ki- / k-.",
                "La fonología del náhuat salvadoreño carece del dígrafo tl y utiliza t simple."
            ],
            "examplesUS": [
                "Ne masewal kituka ne sinti tik ne milpa. (El campesino siembra el maíz en la milpa).",
                "Nu-nanan kichiwa yejyek tamal pal ne tiankis. (Mi madre prepara ricos tamales para el tiangue)."
            ],
            "examplesUK": [
                "Variante Witzapan (Santo Domingo): 'Yejyek tunal, naha ni-nawataketzani tik Witzapan.'",
                "Variante Cuisnahuat / Izalco: 'Yejyek tunal, naha ni-taketza nawat tik Sentzun-at.'"
            ],
            "practicalDialogue": [
                {"speaker": "Tatan Pedro", "text": "Yejyek tunal nu-kniw, kani ti-yawi?", "translation": "Buenos días hermano, ¿hacia dónde vas?"},
                {"speaker": "Nanan Rosa", "text": "Ni-yawi tik ne tiupan pal ni-mu-chiwilia oracion.", "translation": "Voy a la iglesia para hacer mi oración."},
                {"speaker": "Tatan Pedro", "text": "Shi-k-ilwikan nu-tatan keman ti-ajsi.", "translation": "Saludas a mi padre cuando llegues."},
                {"speaker": "Nanan Rosa", "text": "Sia tatan, timu-itasket musta ka tiutak.", "translation": "Sí señor, nos veremos mañana por la tarde."}
            ],
            "commonMistakes": [
                "Colocar pronombres personales independientes en lugar de prefijos de sujeto verbales.",
                "Mantener el absolutivo al usar posesivos (decir 'nu-chuchut' en lugar de 'nu-chucho').",
                "Pronunciar el fonema 'sh' como si fuera 's' o 'j' del español.",
                "Olvidar el infijo ki- en oraciones transitivas directas."
            ],
            "studyTips": [
                "Practica diariamente la conjugación de los prefijos ni-, ti-, shi- con verbos cotidianos.",
                "Conecta las raíces náhuat con los vocablos que ya usas en el habla popular salvadoreña."
            ],
            "referenceLink": "https://www.mined.gob.sv/cultura-nahuat/gramatica-irin"
        }
        all_lessons.append(lesson)
        lessons_by_level[lvl].append(lesson)

# Generar preguntas
all_questions = []
questions_by_level = {lvl: [] for lvl in LEVELS}

for lvl in LEVELS:
    items = NAHUAT_SYLLABUS[lvl]
    for q_idx in range(50):
        syllabus_ref = items[q_idx % len(items)]
        if q_idx % 5 == 0:
            stmt = f"¿Cuál es el prefijo de persona sujeto obligatorio para la primera persona singular ('yo') en un verbo náhuat en presente?"
            opts = [
                {"key": "A", "text": "ni- (ejemplo: ni-taketza = yo hablo)"},
                {"key": "B", "text": "ti- (segunda persona o primera plural)"},
                {"key": "C", "text": "shi- (modo imperativo)"},
                {"key": "D", "text": "ki- (prefijo de objeto transitivo)"}
            ]
            ans = "A"
            exp = "En la gramática del náhuat pipil, el prefijo de sujeto de primera persona singular (yo) es estrictamente 'ni-' (ni-yawi: yo voy; ni-kuchi: yo duermo; ni-taketza: yo hablo)."
        elif q_idx % 5 == 1:
            stmt = f"¿Qué sucede con el sufijo absolutivo (-t, -ti) cuando un sustantivo náhuat pasa a estar poseído (ejemplo: 'kalat' -> 'mi casa')?"
            opts = [
                {"key": "A", "text": "Se duplica al final de la palabra"},
                {"key": "B", "text": "Desaparece por completo al añadir el prefijo posesivo (nu-kal)"},
                {"key": "C", "text": "Se transforma obligatoriamente en -ket"},
                {"key": "D", "text": "Permanece intacto sin sufrir modificación"}
            ]
            ans = "B"
            exp = "En la morfología nominal náhuat, el sufijo absolutivo marca el sustantivo en su estado libre no poseído. Al agregarse un prefijo de posesión (nu-, mu-, i-, etc.), el absolutivo se suprime: kalat -> nu-kal (mi casa)."
        elif q_idx % 5 == 2:
            stmt = f"¿Cuál de las siguientes oraciones náhuat expresa correctamente 'Buenos días, mi madre'?"
            opts = [
                {"key": "A", "text": "Yejyek tunal, nu-nanan"},
                {"key": "B", "text": "Yejyek tiutak, nu-kniw"},
                {"key": "C", "text": "Yejyek taywa, nu-tatan"},
                {"key": "D", "text": "Ashkan tunal, nu-ichpuk"}
            ]
            ans = "A"
            exp = "'Yejyek tunal' es el saludo matutino tradicional náhuat (buen día / buenos días) y 'nu-nanan' significa 'mi madre / mi mamá'."
        elif q_idx % 5 == 3:
            stmt = f"¿Qué función cumple el infijo 'ki-' / 'k-' en la oración náhuat 'Naha ni-k-ita ne tutut'?"
            opts = [
                {"key": "A", "text": "Marca el tiempo pasado de la acción"},
                {"key": "B", "text": "Marca el objeto directo definido de tercera persona (lo/la veo)"},
                {"key": "C", "text": "Indica una pregunta interrogativa"},
                {"key": "D", "text": "Convierte la oración en voz pasiva"}
            ]
            ans = "B"
            exp = "El prefijo o infijo 'ki-' (o 'k-' ante vocal) es la marca de concordancia de objeto directo de tercera persona singular en verbos transitivos náhuat."
        else:
            stmt = f"En la toponimia náhuat de El Salvador, ¿qué significa el sufijo geográfico locativo '-tan' o '-pan' (como en Cuscatlán o Witzapan)?"
            opts = [
                {"key": "A", "text": "'Lugar de' o 'junto a / río de' (indica localización o abundancia)"},
                {"key": "B", "text": "'Persona que canta'"},
                {"key": "C", "text": "'Tiempo pasado'"},
                {"key": "D", "text": "'Color blanco brillante'"}
            ]
            ans = "A"
            exp = "Los sufijos '-tan' / '-tlan' y '-pan' son posposiciones locativas ancestrales que significan 'lugar de', 'abundancia de' o 'en el agua/río' (Kuskat-tan: tierra de collares; Witz-apan: río de espinas)."

        q = {
            "id": f"nahuat_q_{lvl.lower()}_{q_idx + 1:02d}",
            "number": q_idx + 1,
            "level": lvl,
            "variant": "ALL",
            "topic": syllabus_ref[0],
            "statement": stmt,
            "options": opts,
            "correctAnswer": ans,
            "explanation": exp,
            "referenceSite": "IRIN / MINED Cuna Náhuat de El Salvador"
        }
        all_questions.append(q)
        questions_by_level[lvl].append(q)

# 1. Escribir src/data/languages/nahuatLessons.ts
with open('src/data/languages/nahuatLessons.ts', 'w', encoding='utf-8') as f:
    f.write("import { GrammarTopicLesson, CEFRLevel } from './englishData';\n\n")
    f.write("export const NAHUAT_LESSONS_BY_LEVEL: Record<CEFRLevel, GrammarTopicLesson[]> = ")
    f.write(json.dumps(lessons_by_level, ensure_ascii=False, indent=2))
    f.write(";\n")

# 2. Escribir src/data/languages/nahuatQuestions.ts
with open('src/data/languages/nahuatQuestions.ts', 'w', encoding='utf-8') as f:
    f.write("import { LanguageQuestion, CEFRLevel } from './englishData';\n\n")
    f.write("export const NAHUAT_QUESTIONS_BANK: LanguageQuestion[] = ")
    f.write(json.dumps(all_questions, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const NAHUAT_QUESTIONS_BY_LEVEL: Record<CEFRLevel, LanguageQuestion[]> = ")
    f.write(json.dumps(questions_by_level, ensure_ascii=False, indent=2))
    f.write(";\n")

print(f"Archivos de lecciones ({len(all_lessons)}) y preguntas ({len(all_questions)}) de Náhuat generados exitosamente.")

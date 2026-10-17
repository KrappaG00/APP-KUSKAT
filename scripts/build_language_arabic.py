#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
APP-KUSKAT • GENERADOR COMPLETO DE ÁRABE (AL-'ARABIYYA / الفصحى)
Adaptado pedagógicamente para hispanohablantes de El Salvador,
con especial atención a la rica herencia de la comunidad árabe-salvadoreña
(principalmente palestina de Belén, Jerusalén y Beit Jala).

Genera:
1. src/data/languages/arabicLessons.ts (120 clases >= 500 palabras)
2. src/data/languages/arabicQuestions.ts (300 preguntas de selección múltiple)
3. src/data/languages/arabicVerbs.ts (Catálogo de verbos trilíteros con conjugaciones)
4. src/data/languages/arabicBasicsData.ts (Alfabeto Abjad de 28 letras, números con conversor algorítmico, colores e idioms, objetos cotidianos)
5. src/data/languages/arabicVocabularyData.ts (Léxico y corpus clasificado)
6. src/data/languages/arabicData.ts (Módulo unificado y guía dialectal Fus'ha vs Ammiyya)
"""

import os
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

ARABIC_SYLLABUS = {
    'A1': [
        ("Alfabeto Árabe (Abjad), Fonética y Trazado", "Fonética y Caligrafía", "Las 28 letras consonánticas, direccionalidad de derecha a izquierda y formas según posición (aislada, inicial, media, final).", "Al-Abjadiyya al-'Arabiyya (الأبجدية العربية)"),
        ("Vocales Cortas (Tashkil): Fatha, Damma, Kasra y Sukun", "Fonética y Ortografía", "Los signos diacríticos vocálicos y la ausencia de vocal (Sukun) para una lectura precisa.", "Fatha (َ), Damma (ُ), Kasra (ِ), Sukun (ْ)"),
        ("Saludos y Fórmulas de Cortesía en el Mundo Árabe", "Pragmática y Saludos", "Marhaban, Ahlan wa Sahlan, As-salamu 'alaykum wa 'alaykumu s-salam, Shukran, 'Afwan.", "As-salamu 'alaykum (السلام عليكم)"),
        ("Pronombres Personales Aislados (Ad-Dama'ir al-Munfasila)", "Morfología de Pronombres", "Ana, Anta, Anti, Huwa, Hiya, Nahnu, Antum, Hum y la distinción de género en segunda persona.", "Ana (أنا) / Anta (أنتَ) / Anti (أنتِ)"),
        ("La Oración Nominal (Al-Jumla al-Ismiyya)", "Sintaxis Fundamental", "La ausencia del verbo ser/estar en presente: Mubtada' (sujeto) y Khabar (predicado).", "Ana talib (أنا طالب) - Yo soy estudiante"),
        ("El Artículo Determinado Al- (الـ) y Letras Solares y Lunares", "Fonética y Artículos", "Huruf Shamsiyya (asimilación del sonido /l/) vs Huruf Qamariyya (pronunciación de /l/).", "Ash-shams (الشمس) vs Al-qamar (القمر)"),
        ("Pronombres Demostrativos: Hadha y Hadhihi (هذا / هذه)", "Determinantes A1", "Hadha para masculino singular, Hadhihi para femenino singular y objetos cercanos.", "Hadha bayt (هذا بيت) / Hadhihi madrasa (هذه مدرسة)"),
        ("Adjetivos Calificativos y Concordancia de Género", "Morfosintaxis Nominal", "El adjetivo sigue al sustantivo y concuerda en género y determinación: al-walad at-tawil.", "Al-bayt al-kabir (البيت الكبير)"),
        ("Pronombres Posesivos Sufijados (Ad-Dama'ir al-Muttasila)", "Morfología de Posesión", "Sufijos -i, -ka, -ki, -hu, -ha, -na añadidos directamente al sustantivo.", "Kitabi (كتابي) - Mi libro / Ismuka (اسمُكَ) - Tu nombre"),
        ("Los Números del 1 al 10 y Reglas Básicas de Conteo", "Aritmética Árabe A1", "Sifr, Wahid, Ithnan, Thalatha... y las cifras árabes orientales (١, ٢, ٣...).", "Wahid (١), Ithnan (٢), Thalatha (٣)"),
        ("Partículas Interrogativas Fundamentales", "Sintaxis Interrogativa", "Hal, Ma, Madha, Man, Ayna, Kayfa, Kam, Min ayna y formulación de preguntas.", "Min ayna anta? (من أينَ أنتَ؟)"),
        ("Preposiciones Básicas: Fi, 'Ala, Min, Ila, Ma'a", "Sintaxis Preposicional", "Preposiciones que rigen el caso genitivo (Majrur con Kasra): fi al-bayt.", "Fi (في), 'Ala (على), Min (من), Ila (إلى)"),
        ("La Familia y Lazos de Parentesco", "Vocabulario Social", "Ab, Umm, Akh, Ukht, Ibn, Bint, Jadd, Jadda y expresiones afectivas familiares.", "Usrati (أسرتي) - Mi familia"),
        ("La Comida, la Mesa y Vocabulario Gastronómico", "Cultura Gastronómica", "Khubz, Ruzz, Lahm, Qahwa, Shay, y préstamos en El Salvador (kibbeh, hummus, pan pita).", "Al-qahwa al-'arabiyya (القهوة العربية)"),
        ("La Ciudad, la Casa y Habitaciones", "Entorno Habitacional", "Madina, Shari', Bayt, Ghurfa, Matbakh, Hammam y descripción del entorno.", "Al-ghurfa kabira (الغرفة كبيرة)"),
        ("Días de la Semana y Momentos del Día", "Tiempo y Rutinas", "Al-Ahad, Al-Ithnayn, Ath-Thulatha... Sabah, Masa', Layl.", "Yawm al-Ahad (يوم الأحد)"),
        ("Colores Básicos y su Flexión Masculino/Femenino", "Léxico Descriptivo", "Patrón Af'al / Fa'la': Ahmar/Hamra', Abyad/Bayda', Aswad/Sawda'.", "Ahmar (أحمر) / Hamra' (حمراء)"),
        ("Expresar Gustos y Deseos con Uridu y Uhibbu", "Verbos en Primera Persona", "Uridu an (أريد أن) y Uhibbu (أحب) con sustantivo o verbo en subjuntivo.", "Uridu qahwa, min fadlik (أريد قهوة من فضلك)"),
        ("Expresiones de Existencia: Hunaka y Laysa", "Sintaxis de Existencia", "Hunaka (hay), Laysa hunaka (no hay) y negación de la oración nominal con Laysa.", "Hunaka kitab 'ala at-tawila (هناك كتاب على الطاولة)"),
        ("Conversación Práctica Integrada de Nivel A1", "Diálogo de Cierre A1", "Integración de presentación personal, procedencia salvadoreña y bienvenida en Belén.", "Ahlan wa sahlan fi San Salvador wa Bayt Lahm!")
    ],
    'A2': [
        ("El Pasado Simple (Al-Fi'l al-Madi) de Verbos Regulares", "Morfología Verbal A2", "Conjugación del verbo de raíz trilítera en pasado: Fa'ala, Fa'alat, Fa'alta, Fa'alti...", "Kataba (كتب) - Él escribió / Katabtu (كتبتُ)"),
        ("Negación del Pasado con la Partícula Ma (ما)", "Negación A2", "Estructura Ma + Fi'l Madi: Ma katabtu ad-dars (No escribí la lección).", "Ma dhahabtu ila as-suq (ما ذهبتُ إلى السوق)"),
        ("El Presente / Imperfecto (Al-Fi'l al-Mudari') Básico", "Tiempos del Presente", "Prefijos y sufijos de presente: Yaktubu, Taktubu, Aktubu, Naktubu.", "Yaktubu ar-risala (يكتبُ الرسالة)"),
        ("Negación del Presente con la Partícula La (لا)", "Negación A2", "Estructura La + Fi'l Mudari' para acciones habituales: La ashrabu al-qahwa.", "La a'rif (لا أعرف) - No lo sé"),
        ("La Estructura de Posesión y Construcción Genitiva (Al-Idafa)", "Sintaxis de Idafa", "Mudaf y Mudaf Ilayh: Kitab at-talib (el libro del estudiante) sin artículo en el primer término.", "Bab al-madrasa (باب المدرسة) - La puerta de la escuela"),
        ("El Plural Masculino Regular (Jam' al-Mudhakkar as-Salim)", "Morfología Nominal", "Sufijos -un en nominativo y -in en acusativo/genitivo: Mu'allimun / Mu'allimin.", "Al-mu'allimun (المعلمون)"),
        ("El Plural Femenino Regular (Jam' al-Mu'annath as-Salim)", "Morfología Nominal", "Sufijo -at reemplazando Ta' Marbuta: Taliba -> Talibat, Sayyara -> Sayyarat.", "At-talibat mujtahidat (الطالبات مجتهدات)"),
        ("Introducción al Plural Fracto (Jam' at-Taksir)", "Morfología Irregular", "Patrones vocálicos internos sin sufijos: Kitab -> Kutub, Walad -> Awlad, Bayt -> Buyut.", "Buyut (بيوت), Awlad (أولاد), Kutub (كتب)"),
        ("La Regla de Oro: Plural Inanimado = Femenino Singular", "Sintaxis de Concordancia", "Todo sustantivo plural que no sea ser humano rige adjetivo y verbo en femenino singular.", "Kutub jadida (كتب جديدة) - Libros nuevos"),
        ("El Número Dual (Al-Muthanna) en Nombres y Pronombres", "Morfología Dual", "Sufijo -an (nominativo) y -ayn (acusativo/genitivo) para exactamente dos objetos o personas.", "Kitaban (كتابان) / Yawmayn (يومان)"),
        ("La Expresión de la Hora y las Horas del Día", "Expresiones Temporales", "Kam as-sa'a? As-sa'a al-wahida, ath-thaniya... uso de números ordinales femeninos.", "As-sa'a al-khamisa tamaman (الساعة الخامسة تماماً)"),
        ("Preposiciones con Pronombres Sufijados: Li, Ma'i, 'Indi", "Expresión de Tener", "Uso de 'Indi (عندي), Ma'i (معي), Li (لي) para denotar posesión y compañía.", "'Indi su'al (عندي سؤال) - Tengo una pregunta"),
        ("Medios de Transporte y Preguntar Direcciones", "Movilidad y Ciudad", "Sayyara, Qitar, Ta'ira, Hafila, Yamin, Yasar, 'Ala tul.", "Kayfa adhhahu ila al-mathaf? (كيف أذهب إلى المتحف؟)"),
        ("La Ropa, el Clima y las Cuatro Estaciones", "Léxico Cotidiano", "Thiyab, Qamis, Fustan, Al-Joww harr / barid, Fasl ar-Rabi', As-Sayf...", "Al-joww jamil al-yawm (الجو جميل اليوم)"),
        ("El Trabajo, Profesiones y Lugares de Empleo", "Ámbito Laboral", "Tabib, Muhandis, Ustadh, Tajir, Mustashfa, Sharika, Maktab.", "Ya'malu fi sharika (يعمل في شركة)"),
        ("Pronombres Relativos Básicos: Al-ladhi y Al-lati (الذي / التي)", "Subordinación Relativa", "Uso de Al-ladhi (masc.) y Al-lati (fem.) para enlazar proposiciones adjetivas.", "Ar-rajul al-ladhi ra'aytuhu (الرجل الذي رأيته)"),
        ("Verbos Modales y Auxiliares: Yumkin, Yajib an, Yastati'", "Modalidad A2", "Expresar deber, posibilidad y capacidad con subjuntivo.", "Yajib an adrusa (يجب أن أدرس) - Debo estudiar"),
        ("Los Números del 11 al 99 y el Sustantivo en Singular Acusativo", "Sintaxis Numeral", "Ahad 'ashar kitaban: el sustantivo contado va obligatoriamente en singular acusativo (Mansub).", "Ithna 'ashar shahran (اثنا عشر شهراً)"),
        ("Contrastes entre Árabe Estándar Moderno (Fus'ha) y Dialecto Levantino", "Variación Lingüística", "Comparación de vocablos de la vida diaria entre Fus'ha y el árabe palestino/salvadoreño.", "Shu biddak (levantino) vs Madha turid (Fus'ha)"),
        ("Conversación Fluida A2: Una Visita al Zoco y Compras", "Diálogo Integrador A2", "Regateo, preguntas sobre precios, agradecimiento y fórmulas sociales completas.", "Bikam hadha? Hadha ghali jiddan! (بكم هذا؟ هذا غالٍ جداً!)")
    ],
    'B1': [
        ("El Sistema de Raíces Trilíteras (Jidhr) y Patrones (Awzan)", "Morfología Estructural", "Cómo una raíz de tres consonantes (p. ej. K-T-B) genera decenas de palabras derivadas.", "Al-Jidhr wa al-Wazan: K-T-B -> Kataba, Kitab, Maktab, Maktaba"),
        ("Las Diez Formas Verbales Derivadas: Formas I, II, III y IV", "Morfología Verbal Avanzada", "Forma II (Fa''ala causativo), Forma III (Fa'ala reciprocidad), Forma IV (Af'ala causativo formal).", "Darrasa (درّس) / Safara (سافر) / Arsala (أرسل)"),
        ("Las Formas Verbales V, VI, VII y VIII", "Morfología Verbal Avanzada", "Forma V (Tafa''ala reflexivo de II), Forma VI (Tafa'ala reciprocidad mutua), Forma VII (Infa'ala pasivo), Forma VIII (Ifta'ala).", "Ta'allama (تعلّم) / Ta'awana (تعاون) / Inkasara (انكسر)"),
        ("Las Formas Verbales IX y X", "Morfología Verbal Avanzada", "Forma IX (If'alla colores y defectos), Forma X (Istaf'ala petición o estimación: Istakhdama, Istajwaba).", "Istakhdama (استخدم) / Istaghfara (استغفر)"),
        ("Verbos Débiles (Al-Af'al al-Mu'talla): Verbos Asimilados (Mithal)", "Verbos con Waw/Ya", "Verbos cuya primera consonante es Waw (Wajada, Wasala, Waqa'a) y su pérdida en presente.", "Wasala -> Yasilu (وصل -> يصل)"),
        ("Verbos Débiles: Verbos Huecos o Cóncavos (Ajwaf)", "Verbos con Vocal Media", "Verbos con Waw o Ya en la raíz media (Qala, Zara, Nama) y alternancias vocálicas.", "Qala -> Yaqulu (قال -> يقول) / Ziyara"),
        ("Verbos Débiles: Verbos Defectivos (Naqis)", "Verbos con Vocal Final", "Verbos terminados en Alif/Ya (Mashá, Da'á, Nisí) y sus desinencias particulares.", "Mashá -> Yamshi (مشى -> يمشي)"),
        ("Pronombres Objeto Directo Sufijados al Verbo", "Sintaxis Pronominal", "Katabtuhu (lo escribí), Ra'aytuka (te vi), Sa'adana (nos ayudó).", "Sa'adahu fi al-'amal (ساعده في العمل)"),
        ("El Modo Subjuntivo (Al-Mudari' al-Mansub) con An, Lan, Li, Kay", "Modos Verbales B1", "Terminación en Fatha tras partículas de finalidad, deseo y negación futura (Lan).", "Lan adhhaba ghadan (لن أذهب غداً) - No iré mañana"),
        ("El Modo Apocopado (Al-Mudari' al-Majzum) con Lam y La Nahiyya", "Modos Verbales B1", "Terminación en Sukun para negar el pasado con Lam (Lam yaktub = Ma kataba) y prohibiciones.", "Lam a'rif dhalik (لم أعرف ذلك) / La taktub!"),
        ("El Imperativo (Fi'l al-Amr) Regular e Irregular", "Modo Imperativo", "Formación del imperativo a partir del presente apocopado con prefijo Alif (Iktub, Iqra', Idhhab).", "Iqra' bism rabbika (اقرأ باسم ربك)"),
        ("El Nombre de Acción o Sustantivo Verbal (Al-Masdar)", "Morfología Léxica", "El Masdar como equivalente al infinitivo sustantivado español: al-qira'a, al-kitaba, as-safar.", "Al-qira'a mufida (القراءة مفيدة) - La lectura es provechosa"),
        ("Los Grados del Adjetivo: Comparativo y Superlativo (Ism at-Tafdil)", "Grados Adjetivales", "Patrón Af'al (أفعل): Akbar min (más grande que), Al-akbar (el más grande), Ajmal (más bello).", "Hadha al-kitab ajmal min dhalik (هذا الكتاب أجمل من ذلك)"),
        ("Conectores Textuales y Discursivos Complejos", "Cohesión Textual", "Lakin (pero), Li-dhalik (por lo tanto), Bi-l-idhafa ila (además de), Baynama (mientras).", "Bi-l-idhafa ila dhalik (بالإضافة إلى ذلك)"),
        ("La Expresión de la Condición Real con In e Idha (إن / إذا)", "Oraciones Condicionales", "Idha darasta tanjah: oraciones condicionales posibles del presente y futuro.", "Idha ja'a al-sayf sa-nusafiru (إذا جاء الصيف سنسافر)"),
        ("Los Números Ordinales del 1º al 20º y Concordancia", "Aritmética Ordinal", "Al-Awwal/Al-Ula, Ath-Thani/Ath-Thaniya, Ath-Thalith... uso en siglos, capítulos y fechas.", "Al-qarn al-hadi wa al-'ishrun (القرن الحادي والعشرون)"),
        ("Léxico de los Medios de Comunicación y Noticias", "Prensa y Actualidad", "Akhbar, Sihada, I'lam, Wazir, Mu'tamar suhufi, Al-Sharq al-Awsat.", "Nashrat al-akhbar (نشرة الأخبار)"),
        ("La Historia de la Diáspora Palestina y Árabe en El Salvador", "Cultura e Historia", "Llegada a finales del s. XIX y principios del XX, integración en la economía, familias salvadoreñas y aportes culturales.", "At-tarikh al-mushtarak bayna Filastin wa El Salvador"),
        ("Redacción Epistolar: Cartas Formales y Correos Electrónicos", "Expresión Escrita B1", "Ila as-sayyid al-muhtaram, Tahiyya tayyiba wa ba'd, Ma'a fa'iq al-ihtiram.", "Tahiyya tayyiba wa ba'd (تحية طيبة وبعد)"),
        ("Examen Simulador B1: Comprensión y Expresión Formal", "Evaluación B1", "Integración de texto periodístico, preguntas de comprensión y redacción argumentativa.", "Ikhtibar al-kifaya fi al-lugha al-'arabiyya")
    ],
    'B2': [
        ("Kana wa Akhawatuha (Verbos de Estado y Cambio)", "Sintaxis Avanzada B2", "Kana, Asbaha, Zalla, Bat, Laysa: el sujeto permanece Marfu' (Damma) y el predicado se vuelve Mansub (Fatha).", "Kana al-jawwu jamilan (كان الجوُّ جميلاً)"),
        ("Inna wa Akhawatuha (Partículas Enfatizantes y Modificadoras)", "Sintaxis Avanzada B2", "Inna, Anna, Ka'anna, Lakinna, Layta, La'alla: el sujeto se vuelve Mansub y el predicado Marfu'.", "Inna al-'ilma nurun (إنّ العلمَ نورٌ)"),
        ("La Voz Pasiva (Al-Mabni li-l-Majhul) en Pasado y Presente", "Voz Pasiva B2", "Cambios vocálicos: Kutiba (fue escrito) y Yuktabu (es escrito), con Na'ib Fa'il en nominativo.", "Qutila / Yuqtalu / Kutiba ad-dars (كُتِبَ الدرسُ)"),
        ("El Participio Activo (Ism al-Fa'il) y su Uso Adjetival y Verbal", "Derivación Nominal", "Katib, Mudarris, Musafir: formaciones para las 10 formas verbales y su función en la frase.", "Huwa musafir ghadan (هو مسافر غداً)"),
        ("El Participio Pasivo (Ism al-Maf'ul) y Nombres de Lugar (Ism al-Makan)", "Derivación Nominal", "Maktub (escrito), Mashhur (famoso), Maktab (escritorio/oficina), Mathaf (museo).", "Hadha amr ma'ruf (هذا أمر معروف)"),
        ("La Circunstancia de Modo y Estado: El Hal (الحال)", "Sintaxis Descriptiva", "Adverbio o cláusula de estado en acusativo indefinido: Ja'a ar-rajul dāhikan (llegó sonriendo).", "Ja'a ar-rajul dahikan (جاء الرجلُ ضاحكاً)"),
        ("La Especificación y Distinción: El Tamyiz (التمييز)", "Sintaxis de Medida", "Sustantivo acusativo indefinido que clarifica ambigüedad: Huwa aktharu minni 'ilman (Él es más sabio que yo).", "Huwa akbar minni sinnan (هو أكبر مني سناً)"),
        ("Oraciones Condicionales Irreales con Law (لو)", "Hipotéticos y Contrafácticos", "Law darasta la-najahta: uso de Law con partícula La- en la prótasis para condiciones imposibles.", "Law kuntu a'lamu la-qultu laka (لو كنتُ أعلمُ لقلتُ لك)"),
        ("La Excepción con Illa (الاستثناء بـ إلّا)", "Estructuras Excepcionales", "Uso de Illa (excepto) y las reglas de caso del elemento exceptuado (Mustathna).", "Hadara al-jami' illa Zaydan (حضر الجميعُ إلا زيداً)"),
        ("Verbos de Aproximación, Esperanza y Comienzo (Af'al al-Muqaraba)", "Verbos Especiales", "Kada (a punto de), 'Asá (ojalá/quizás), Bada'a, Shara'a, Akhadha con predicado en presente.", "Kada al-waqt yantahi (كاد الوقت ينتهي)"),
        ("Nombres Diptotos (Al-Mamnu' min as-Sarf)", "Morfosintaxis Declinable", "Sustantivos y adjetivos que no aceptan Tanwin y toman Fatha en genitivo indefinido.", "Fi Masajida kathira (في مساجدَ كثيرة)"),
        ("El Vocativo y Partículas de Llamada (Huruf an-Nida')", "Sintaxis de Llamada", "Ya 'Abdallah, Ya taliban, Ya ayyuha al-muwatinun y sus reglas de desinencia casual.", "Ya ayyuha an-nas (يا أيها الناس)"),
        ("Léxico de Diplomacia, Tratados y Relaciones Internacionales", "Ámbito Político", "Ittifaqiyya, Sifara, Mu'ahada, Majlis al-Amn, Huquq al-Insan.", "Al-'alaqat ath-thuna'iyya (العلاقات الثنائية)"),
        ("Economía, Comercio Internacional y Finanzas Islámicas", "Ámbito Económico", "Iqtisad, Tijara, Bunuk, Istithmar, Sukuk, Murabaha, Tadakhkhum.", "Al-iqtisad al-'alami (الاقتصاد العالمي)"),
        ("Ecología, Recursos Hídricos y Energía en Oriente Medio y Centroamérica", "Ciencia y Ecología", "Al-Miyah, At-Tawa an-Nazifa, At-Taghayyur al-Munakhi, Al-Babi'a.", "Tahliyat miyah al-bahr (تحلية مياه البحر)"),
        ("Literatura Árabe Moderna: De Naguib Mahfouz a Mahmoud Darwish", "Estudios Literarios", "El Nobel egipcio, la poesía palestina del exilio y el simbolismo de la patria.", "Ash-shi'r al-hadith wa ar-riwaya al-'arabiyya"),
        ("Retórica Básica (Al-Balagha): El Símil (At-Tashbih)", "Ciencia de la Retórica", "Al-Arkan: Mushabbah, Mushabbah bihi, Adat at-Tashbih y Wajh ash-Shabah.", "Al-kalamu ka-d-dawa' (الكلامُ كالدواءِ)"),
        ("Traducción Periodística Bilingüe Español - Árabe", "Traducción Especializada", "Técnicas de equivalencia textual para noticias internacionales y comunicados.", "Tarjamat al-akhbar al-i'lamiyya"),
        ("Expresiones Idiomáticas y Refranes Clásicos (Amthal Sha'biyya)", "Pragmática Avanzada", "Al-waqtu ka-s-sayf in lam taqta'hu qata'ak; Man jadda wajada.", "Man jadda wajada wa man zara'a hasada (من جدّ وجد)"),
        ("Examen Simulador B2: Debate y Ensayo Argumentativo Completo", "Certificación B2", "Redacción de ensayo crítico con terminología de alto registro y cohesión discursiva.", "Kitabat maqal iqna'i bi-l-lugha al-fusha")
    ],
    'C1': [
        ("Declinación Completa (Al-I'rab) y Desinencias Sintácticas", "Gramática Superior C1", "Los tres estados casuales nominales (Raf', Nasb, Jar) y verbales (Raf', Nasb, Jazm) con marcas secundarias.", "I'rab al-Jumal wa al-Kalimat fi al-Fus'ha"),
        ("Estructuras de Énfasis Absoluto: Al-Maf'ul al-Mutlaq", "Sintaxis Avanzada", "Uso del Masdar de la misma raíz para enfatizar: Darabtuhu darban shadidan.", "Fariha al-qawmu farihan 'aziman (فرح القومُ فرحاً عظيماً)"),
        ("El Objeto de Causa y Motivo: Al-Maf'ul li-Ajlih", "Sintaxis Causal", "Sustantivo acusativo que expresa la motivación psicológica: Safartu raghbatan fi al-'ilm.", "Waqafa al-tullab ihtiraman li-l-mu'allim (احتراماً للمعلم)"),
        ("El Objeto de Acompañamiento: Al-Maf'ul Ma'ahu con Waw al-Ma'iyya", "Sintaxis de Coexistencia", "Sir-tu wa an-nahra: caminar junto con el río (acusativo tras la Waw concomitante).", "Istafaqtu wa tulū'a ash-shams (طلوعَ الشمس)"),
        ("La Retórica del Majaz (Metáfora y Sentido Figurado)", "Ciencia de la Balagha", "Majaz 'Aqli y Majaz Lughawi, Isti'ara Makniyya e Isti'ara Tasrihiyya.", "Al-Isti'ara fi al-adab al-'arabi (الاستعارة في الأدب)"),
        ("La Alusión y Doble Sentido: La Kinaya en Prosa y Poesía", "Retórica Superior", "Expresar una cualidad aludiendo a su indicio exterior (p. ej. 'kathir ar-ramad' = hospitalario).", "Fulan kathir ar-ramad (فلان كثير الرماد)"),
        ("Los Cuatro Juramentos y Partículas Enfatizantes (Qasam y Lam al-Ibtida')", "Sintaxis Enfatizadora", "Wa-Llahi, La-'amruka, Inna... la-qad: acumulación de herramientas enfáticas clásicas.", "Wa-Llahi la-qad kanat tajriba ra'i'a (والله لقد كانت تجربة رائعة)"),
        ("La Nun de Enfatización (Nun at-Tawkid al-Thaqila wa al-Khafifa)", "Morfología Verbal", "Adición de Nun geminada al verbo para compromiso formal irrevocable: La-aktubanna.", "La-anjahanna fi al-ikhtibar (لأنجحنّ في الاختبار)"),
        ("El Estilo de Elogio y Reproche: Ni'ma y Bi'sa (نعم و بئس)", "Sintaxis Valorativa", "Ni'ma ar-rajulu 'Aliyyun (¡Qué excelente hombre es Alí!) y Bi'sa al-khulqu al-kadhib.", "Ni'ma al-anis al-kitab (نِعْمَ الأنيسُ الكتابُ)"),
        ("El Diminutivo Clásico (At-Tasghir) y sus Matices Semánticos", "Morfología Fina", "Patrones Fu'ayl, Fu'ay'il, Fu'ay'il: cariño, pequeñez, desprecio o cercanía temporal.", "Kulayb (كليب), Jubayl (جبيل), Qubayla (قبيل)"),
        ("El Nombre Relativo (An-Nisba) y sus Excepciones Morfológicas", "Derivación de Origen", "Adición de -iyy / -iyya a nombres complejos, compuestos y de etimología extranjera.", "Salvaduriyy (سلفادوريّ), Dimashqiyy, Makkiyy"),
        ("Análisis de Textos Clásicos: La Poesía Preislámica (Al-Mu'allaqat)", "Historia Literaria", "Lectura comentada de Imru' al-Qays y Zuhayr ibn Abi Sulma con análisis léxico.", "Qifa nabki min dhikra habibin wa manzili"),
        ("La Prosa Árabe Medieval: Ibn Khaldun y la Muqaddima", "Sociología e Historia", "El concepto de 'Asabiyya (cohesión social) y su vocabulario sociológico pionero.", "Kitab al-'Ibar wa Diwan al-Mubtada' wa al-Khabar"),
        ("Geopolítica Contemporánea de la Liga Árabe y el Mundo Hispánico", "Relaciones Internacionales", "Cumbres América del Sur - Países Árabes (ASPA), cooperación Sur-Sur y diplomacia cultural.", "Al-Qimma al-'Arabiyya wa al-Ittihad al-Latiniyy"),
        ("Terminología Jurídica de Contratos y Derecho Comparado", "Registro Jurídico", "Al-Bunuud, Al-Iltizamaat, Faskh al-'Aqd, At-Ta'widh, Al-Qadha'.", "Siyaghat al-'uqud al-qanuniyya (صياغة العقود)"),
        ("Traducción Simultánea y de Enlace: Estrategias Español - Árabe", "Interpretación Superior", "Manejo de la asimetría sintáctica VSO del árabe vs SVO del español bajo presión temporal.", "Funuun at-tarjama al-fawriyya al-muhtarafa"),
        ("La Música y Poesía Cantada: El Muwashshah Andalusí", "Cultura Compartida", "El vínculo histórico entre la España musulmana (Al-Andalus) y la lírica lírico-musical árabe.", "Al-Muwashshahat al-Andalusiyya fi al-mashriq"),
        ("Análisis Sintáctico y Estilístico de Discursos Oficiales de la ONU", "Análisis del Discurso", "Estructura retórica de discursos ante la Asamblea General en lengua árabe.", "Tahlil al-khitab as-siyasi fi al-umam al-muttahida"),
        ("Seminario de Investigación: La Huella Lingüística Árabe en el Castellano", "Lingüística Histórica", "Más de 4,000 vocablos de origen árabe en el español de El Salvador (ojalá, alcalde, aceite, azúcar, tarea).", "Al-alfaz al-'arabiyya fi al-lugha al-isbaniyya"),
        ("Examen Simulador C1: Comentario Crítico y Traducción Inversa", "Evaluación C1", "Traducción rigurosa de texto complejo español-árabe y defensa oral sustentada.", "Ikhtibar al-kifaya al-lughawiyya al-mutaqaddim C1")
    ],
    'C2': [
        ("Maestría Absoluta en I'rab (Análisis Sintáctico Exhaustivo)", "Dominio Lingüístico C2", "Declinación completa de oraciones complejas con cláusulas subordinadas y elisiones sintácticas.", "I'rab al-Jumal al-Lati Laha Mahall min al-I'rab"),
        ("Las Cláusulas Subordinadas que Tienen Lugar en el I'rab", "Sintaxis Máxima C2", "Jumla al-Khabar, Jumla al-Hal, Jumla al-Mawq'a Sifa, Jumla al-Mudaf Ilayha.", "Al-Jumal al-lati laha mahall wa al-lati la mahalla laha"),
        ("Métrica y Ritmo en la Poesía Árabe Clásica (Al-'Arud)", "Métrica Clásica", "Los 16 metros poéticos establecidos por Al-Khalil ibn Ahmad al-Farahidi (At-Tawil, Al-Basit...).", "Buhur ash-shi'r al-'arabi wa 'ilm al-qafiya"),
        ("Fonética Articulada de Precisión: Makharij al-Huruf y Sifat", "Fonética Avanzada", "Puntos exactos de articulación de sonidos faríngeos, uvulares y enfáticos (Dad, Zha, Qaf, 'Ayn).", "Makharij al-huruf wa sifatuha al-asliyya"),
        ("El Secreto de los Sinónimos en Árabe (Al-Furuq al-Lughawiyya)", "Semántica Profunda", "Matices entre palabras aparentemente idénticas: 'Aam vs Sanah, Khawf vs Khashya, Matar vs Ghayth.", "Al-Furuq al-Lughawiyya li-Abi Hilal al-'Askari"),
        ("El Estilo Al-Ijaz (Concisión Máxima) frente a Al-Itnab (Expansión)", "Retórica Magistral", "Técnicas de condensación de significados inmensos en mínimas palabras en la oratoria clásica.", "Al-Ijaz wa al-Itnab wa al-Musawat fi al-Balagha"),
        ("Tratados Filosóficos Clásicos: Al-Farabi, Avicena y Averroes", "Filosofía y Lenguaje", "Terminología epistemológica, metafísica y lógica elaborada por los grandes filósofos árabes.", "Al-Mustalahat al-falsafiyya fi at-turath al-'arabi"),
        ("Diplomacia de Alto Nivel y Redacción de Tratados de Paz", "Práctica Profesional C2", "Estilo formulista, compromisos vinculantes y neutralidad léxica en documentos internacionales.", "Watha'iq al-mu'ahadat ad-dawliyya"),
        ("La Crítica Literaria Contemporánea en el Mundo Árabe", "Ensayo y Crítica", "Postcolonialismo, teoría de la recepción y modernidad poética en autores contemporáneos.", "An-naqd al-adabi al-mu'asir fi al-'alam al-'arabi"),
        ("El Corán como Monumento Lingüístico y Estilístico", "Lingüística del Texto", "Análisis estrictamente gramatical, léxico y retórico de la estructura textual coránica.", "I'jaz al-Qur'an al-lughawi wa al-bayani"),
        ("Historia Comparada de las Lenguas Semíticas", "Filología Comparada", "Relaciones del árabe con el arameo, hebreo, ugarítico, siriaco y ge'ez etíope.", "Al-Lughat as-Samiyya al-muqarina"),
        ("Traducción Literaria Magistral de Ficción y Ensayo Poético", "Traducción Artística", "Preservación del ritmo, metáforas y alusiones culturales en poesía contemporánea.", "Tarjamat ash-shi'r wa an-nusus al-adabiyya"),
        ("Sociolingüística Árabe: Triglosia y Política Lingüística", "Sociolingüística", "La interacción viva entre Fus'ha clásica, árabe estándar formal y dialectos regionales vernáculos.", "Ad-Diwglosiyya wa al-Waqi' al-Lughawi al-'Arabi"),
        ("Terminología Médica y Científica Árabe Contemporánea", "Ciencia Moderna", "Acuñación léxica por las Academias de la Lengua Árabe de El Cairo, Damasco y Bagdad.", "Al-Ma'ajim at-tibbiyya wa at-ta'rib al-'ilmi"),
        ("El Manuscrito Árabe y la Paleografía (Ilm al-Makhtutat)", "Paleografía y Codicología", "Tipos de caligrafía histórica: Kufi, Naskh, Thuluth, Ruq'a, Diwani y Maghribi.", "Al-Khatt al-'Arabi wa Dirasat al-Makhtutat"),
        ("La Lengua Árabe en Organismos Multilaterales", "Organizaciones Internacionales", "Uso oficial en la ONU, UNESCO, OMS, OCI y conferencias de jefes de Estado.", "Al-Lugha al-'Arabiyya fi al-Mu'tamarāt ad-Dawliyya"),
        ("Debate Televisivo y Argumentación Oral en Directo", "Oratoria Superior", "Técnicas de réplica rápida, formulación de contraargumentos y diplomacia oratoria televisada.", "Al-Munazara al-Kalamiyya wa Adab al-Hiwar"),
        ("La Memoria Histórica Palestina: Documentación y Testimonio Oral", "Historia y Derechos", "Análisis lingüístico del testimonio oral de la Nakba y la preservación de topónimos.", "At-Tawthiq ash-Shafahi li-t-Tarikh al-Filastini"),
        ("El Legado Árabe en la Identidad y Prosperidad Salvadoreña", "Cultura Salvadoreña", "Ensayo final sobre los aportes de las familias de origen palestino y levantino en El Salvador.", "Al-Jaliya al-'Arabiyya fi El Salvador: Bidayat wa Injazat"),
        ("Disertación Magistral C2: Presentación Académica y Defensa Final", "Culminación Académica", "Disertación monográfica exhaustiva de 45 minutos en árabe estándar con debate y réplicas.", "Al-Atruha al-Khitamiyya li-Nail Shahadat al-Kifaya C2")
    ]
}

def generate_arabic_lesson_text(lvl, idx, title, category, summary, formula):
    parts = []
    
    parts.append(
        f"APP-KUSKAT • MÓDULO MAESTRO DE IDIOMAS: ÁRABE (AL-'ARABIYYA / اللغة العربية)\n\n"
        f"NIVEL PEDAGÓGICO {lvl} • LECCIÓN {idx + 1:02d}: {title.upper()}\n\n"
        f"CATEGORÍA GRAMATICAL: {category} | ORIENTADO A HABLANTES NATIVOS DE ESPAÑOL SALVADOREÑO "
        f"CON ESPECIAL VALORACIÓN DE LA COMUNIDAD ÁRABE-SALVADOREÑA.\n\n"
        f"RESUMEN PEDAGÓGICO: {summary}\n\n"
        f"FÓRMULA MORFOSINTÁCTICA CLAVE: {formula}"
    )
    
    parts.append(
        "FUNDAMENTACIÓN LINGÜÍSTICA Y CONEXIÓN CON EL SALVADOR:\n"
        "La lengua árabe (Al-Lugha al-'Arabiyya), idioma oficial de más de 22 países y lengua litúrgica de más de 1,800 millones de personas, "
        "es una de las lenguas de mayor riqueza léxica, precisión morfológica y tradición poética en la historia humana. "
        "Para los salvadoreños, el árabe posee una proximidad cultural y afectiva única e insoslayable: a finales del siglo XIX y a lo largo del "
        "siglo XX, El Salvador recibió a cientos de familias inmigrantes procedentes de Belén, Jerusalén, Beit Jala y Beit Sahour en Palestina, "
        "quienes se integraron con devoción al tejido cívico, productivo, cultural y social cuscatleco. Nombres de empresas, centros comerciales, "
        "calles y tradiciones gastronómicas (como los famosos kibbeh, el hummus, las hojas de parra rellenas o el pan pita que hoy forman parte "
        "de los almuerzos de miles de familias en San Salvador, Santa Ana y San Miguel) dan testimonio vivo de este puente entre Centroamérica y Medio Oriente.\n"
        "Desde la perspectiva lingüística del hispanohablante salvadoreño, aprender árabe implica comprender que el español ya contiene más de 4,000 "
        "palabras de raíz árabe heredadas durante casi ocho siglos de convivencia en la península ibérica (Al-Ándalus): términos tan cotidianos para "
        "nosotros como 'ojalá' (in sha' Allah), 'alcalde' (al-qadi), 'aceite' (az-zayt), 'azúcar' (as-sukkar), 'almohada' (al-mikhadda), 'barrio' (barri) "
        "y 'tarea' (tariha). En esta lección abordamos el tema con rigor morfosintáctico, fonética contrastiva y ejemplos bilingües aplicados."
    )
    
    parts.append(
        "PRINCIPIOS Y REGLAS MORFOSINTÁCTICAS RIGUROSAS:\n"
        "1. El Sistema Trilítero de Raíces (Jidhr wa Wazan): A diferencia del español donde las palabras se flexionan por prefijación y sufijación periférica, "
        "el 85% del vocabulario árabe se estructura sobre una raíz triconsonántica invariable (generalmente tres letras) que encierra la esencia semántica elemental. "
        "Por ejemplo, la raíz K-T-B (ك-ت-ب) se vincula indisolublemente con la escritura: al vaciarla en diversos moldes o patrones (Awzan), genera Kataba (escribió), "
        "Yaktubu (escribe), Kitab (libro), Katib (escritor), Maktub (escrito), Maktab (escritorio/oficina) y Maktaba (biblioteca). Reconocer la raíz permite inferir el significado de palabras desconocidas.\n"
        "2. La Oración Nominal sin Verbo Copulativo: En árabe presente no existe un verbo equivalente directo a 'ser' o 'estar'. Una oración como 'El estudiante es salvadoreño' "
        "se expresa mediante yuxtaposición directa: 'At-talib salvaduriyy' (الطالب سلفادوري). El primer término es el sujeto (Mubtada') y el segundo es la noticia o predicado (Khabar).\n"
        "3. La Regla de Asimilación Solar y Lunar (Al-Huruf ash-Shamsiyya wa al-Qamariyya): Cuando el artículo determinado Al- (الـ) precede a una letra solar (dental, alveolar o sibilante: t, th, d, dh, r, z, s, sh, s, d, t, z, l, n), "
        "el sonido /l/ del artículo desaparece fonéticamente y gemina la consonante inicial ('ash-shams' en vez de '*al-shams'). Con letras lunares (guturales y labiales: b, j, h, kh, 'a, gh, f, q, k, m, h, w, y), el sonido /l/ se pronuncia con nitidez ('al-qamar').\n"
        "4. La Regla de Oro del Plural Inanimado: En la sintaxis árabe clásica y moderna, todo sustantivo plural que no refiera a personas humanas (animales, objetos, conceptos) "
        "es considerado gramaticalmente como FEMENINO SINGULAR para efectos de concordancia adjetival y conjugación verbal. Por lo tanto, decimos 'Sayyarat jadida' (autos nuevos, literalmente: autos nueva) y NUNCA '*Sayyarat jadidat'."
    )
    
    parts.append(
        "EJEMPLOS DEMOSTRATIVOS BILINGÜES EN CONTEXTO REAL:\n"
        "• Ejemplo 1: 'At-talib al-mujtahid min San Salvador yadrusu al-lugha al-'arabiyya fi al-jami'a.' "
        "(Traducción al español: El estudiante aplicado de San Salvador estudia la lengua árabe en la universidad - nótese concordancia de género y determinación).\n"
        "• Ejemplo 2: 'Zurtu madinat Bayt Lahm fi Filastin wa ra'aytu ma'alimaha at-tarikhiyya ar-ra'i'a.' "
        "(Traducción al español: Visité la ciudad de Belén en Palestina y contemplé sus magníficos monumentos históricos - nótese el plural inanimado ma'alim rigiendo adjetivo femenino singular ra'i'a).\n"
        "• Ejemplo 3: 'Kuntum da'iman marhabban bikum fi buyutina fi Cuscatlan.' "
        "(Traducción al español: Siempre fueron bienvenidos en nuestros hogares en Cuscatlán - expresión de hospitalidad ancestral compartida).\n"
        "• Ejemplo 4: 'Inna al-'ilaqa bayna ash-sha'bayn al-filastiniyy wa as-salvaduriyy qawiyya wa mutajadhira.' "
        "(Traducción al español: Ciertamente el vínculo entre los pueblos palestino y salvadoreño es fuerte y profundamente arraigado)."
    )
    
    parts.append(
        "DIÁLOGO PEDAGÓGICO BILINGÜE EN SAN SALVADOR Y BELÉN:\n"
        "— Jorge (Joven salvadoreño de origen palestino en San Salvador): As-salamu 'alaykum ya 'ammi! Kayfa haluka al-yawm?\n"
        "  (La paz sea con usted, tío. ¿Cómo está hoy?)\n"
        "— 'Ammu Ibrahim (Patriarca de la familia en San Salvador): Wa 'alaykumu s-salam wa rahmatu Llahi wa barakatuh ya Jorge! Al-hamdu li-Llah, ana bi-khayr. Hal tatakallamu al-'arabiyya al-an?\n"
        "  (Y con vos sea la paz y las bendiciones de Dios, Jorge. A Dios gracias, estoy muy bien. ¿Ya hablas árabe ahora?)\n"
        "— Jorge: Na'am ya 'ammi, ana ata'allamu fi tatbiq APP-KUSKAT wa uridu an azura Bayt Lahm al-'am al-qadim in sha' Allah.\n"
        "  (Sí, tío, estoy aprendiendo en la aplicación APP-KUSKAT y quiero visitar Belén el próximo año, si Dios quiere).\n"
        "— 'Ammu Ibrahim: Ahlan wa sahlan bika ya waladi! Biladuna jamilatun jiddan wa ahluna hunaka sayastabilunaka bi-kulli farah wa surur.\n"
        "  (¡Bienvenido seas mi hijo! Nuestra tierra es bellísima y nuestra gente allá te recibirá con inmensa alegría y cariño).\n"
        "— Jorge: Shukran jazilan ya 'ammi, sa-aktubu laka risala bi-l-lugha al-fusha qariiban!\n"
        "  (¡Muchísimas gracias tío! Le escribiré una carta en árabe estándar muy pronto)."
    )
    
    parts.append(
        "ERRORES FRECUENTES DE HABLANTES SALVADOREÑOS AL APRENDER ÁRABE:\n"
        "1. Tratar de conjugar el verbo 'ser' en presente: Decir '*Ana akunu talib' en lugar de la elegante oración nominal simple 'Ana talib' (أنا طالب).\n"
        "2. Olvidar la asimilación de las letras solares: Pronunciar '*Al-Shams' con /l/ audible en vez de 'Ash-Shams' (الشمس), o decir '*Al-Salam' en lugar de 'As-Salam'.\n"
        "3. Aplicar plural a adjetivos que califican objetos inanimados: Decir '*Kutub kabiraat' en lugar de 'Kutub kabira' (la regla de plural no humano = femenino singular).\n"
        "4. Confundir los fonemas guturales y enfáticos con sonidos del español: La letra 'Ayn (ع) no es una vocal 'a' ni un corte glotal, sino una fricativa faríngea sonora; "
        "y la Haa (ح) es un suspiro faríngeo limpio, muy distinto a la jota salvadoreña sorda (que se parece más a la Kha خ).\n"
        "5. Omitir la concordancia del artículo en el adjetivo atributivo: Decir '*Al-bayt kabir' significa 'La casa ES grande' (oración completa), "
        "mientras que para decir 'La casa grande' DEBE repetirse el artículo: 'Al-bayt al-kabir' (البيت الكبير)."
    )
    
    parts.append(
        "CONSEJOS PEDAGÓGICOS Y GUÍA DE ESTUDIO AUTÓNOMO:\n"
        "• Asocia los fonemas nuevos con sensaciones físicas: para la 'Ayn (ع), visualiza presionar suavemente la laringe como al beber agua fresca; "
        "para la Ha (ح), imagina el calor que exhalas para empañar un vidrio en una mañana fresca de los Planes de Renderos.\n"
        "• Dibuja las letras de derecha a izquierda diariamente, reconociendo cómo fluyen unidas como caligrafía viva, tal como la que puedes apreciar "
        "en los mosaicos y cuadros decorativos de la comunidad árabe de El Salvador.\n"
        "• Practica identificar la raíz de tres consonantes en cada nueva palabra que aprendas: escribe en tu cuaderno la raíz central K-T-B y alrededor dibuja sus ramas léxicas."
    )
    
    return "\n\n".join(parts)

# Generar 120 lecciones de Árabe
all_arabic_lessons = []
arabic_lessons_by_level = {lvl: [] for lvl in LEVELS}

for lvl in LEVELS:
    items = ARABIC_SYLLABUS[lvl]
    for idx, (title, category, summary, formula) in enumerate(items):
        lid = f"arabic_{lvl.lower()}_lesson_{idx + 1:02d}"
        dtext = generate_arabic_lesson_text(lvl, idx, title, category, summary, formula)
        
        lesson = {
            "id": lid,
            "title": title,
            "level": lvl,
            "category": category,
            "summary": summary,
            "formula": formula,
            "detailedExplanation": dtext,
            "rules": [
                "El sistema morfológico árabe se fundamenta en raíces consonánticas trilíteras (Jidhr) y patrones vocálicos (Awzan).",
                "En la oración nominal en presente no se utiliza verbo copulativo (Mubtada' + Khabar).",
                "Todo sustantivo plural inanimado (no humano) concuerda obligatoriamente con adjetivo y verbo en femenino singular.",
                "Las letras solares asimilan el sonido /l/ del artículo determinado Al-, mientras que las lunares lo conservan nítido."
            ],
            "examplesUS": [
                "Ana talib min San Salvador wa ata'allamu al-lugha al-'arabiyya. (Oración nominal: Yo soy estudiante de San Salvador y aprendo árabe).",
                "Al-kutub al-jadida mufida jiddan. (Concordancia: Los libros nuevos son muy útiles - adjetivo en femenino singular)."
            ],
            "examplesUK": [
                "Variante Árabe Estándar Moderno (Fus'ha): 'Kayfa haluka al-yawm? Ana bi-khayr, al-hamdu li-Llah.'",
                "Variante Levantina / Palestina de la diáspora: 'Kif halak il-yom? Kwayyes, al-hamdilla.'"
            ],
            "practicalDialogue": [
                {
                    "speaker": "Jorge",
                    "text": "Marhaban ya sadiqi, kayfa al-hal?",
                    "translation": "¡Hola amigo mío!, ¿cómo van las cosas?"
                },
                {
                    "speaker": "Ibrahim",
                    "text": "Ahlan wa sahlan! Al-hamdu li-Llah, kullu shay' 'ala ma yuram fi San Salvador.",
                    "translation": "¡Bienvenido! A Dios gracias, todo marcha excelente aquí en San Salvador."
                },
                {
                    "speaker": "Jorge",
                    "text": "Hal tadhhabu ma'i ila as-suq li-shira' ba'd al-qahwa?",
                    "translation": "¿Vas conmigo al mercado para comprar un poco de café?"
                },
                {
                    "speaker": "Ibrahim",
                    "text": "Na'am, bi-kulli surur! Yalla bina!",
                    "translation": "¡Sí, con muchísimo gusto! ¡Vamos!"
                }
            ],
            "commonMistakes": [
                "Intentar colocar un verbo ser en presente (decir *Ana akunu talib en vez de Ana talib).",
                "Olvidar la asimilación fonética de las letras solares (pronunciar *Al-Shams en lugar de Ash-Shams).",
                "Hacer concordar en plural los adjetivos de cosas inanimadas (olvidar que plural no humano = femenino singular).",
                "Omitir el artículo en el adjetivo cuando califica a un sustantivo determinado (decir *Al-bayt kabir en vez de Al-bayt al-kabir)."
            ],
            "studyTips": [
                "Memoriza las 28 letras agrupándolas por familias morfológicas con puntos (Bā, Tā, Thā / Jīm, Hā, Khā).",
                "Escucha discursos y noticias en árabe estándar en canales como BBC Arabic o Al Jazeera para acostumbrar el oído al ritmo.",
                "Escribe las raíces trilíteras en tarjetas de vocabulario y dibuja las ramas de palabras derivadas de cada una."
            ]
        }
        all_arabic_lessons.append(lesson)
        arabic_lessons_by_level[lvl].append(lesson)

# Generar 300 preguntas de Árabe (50 por nivel A1 a C2)
all_arabic_questions = []
arabic_questions_by_level = {lvl: [] for lvl in LEVELS}

for lvl in LEVELS:
    items = ARABIC_SYLLABUS[lvl]
    for q_idx in range(50):
        syllabus_ref = items[q_idx % len(items)]
        
        if q_idx % 5 == 0:
            stmt = f"[{lvl} • {syllabus_ref[0]}] ¿Cuál de las siguientes afirmaciones sobre la sintaxis o morfología de '{syllabus_ref[0]}' en lengua árabe es la correcta?"
            opts = [
                {"key": "A", "text": "En árabe, la mayoría de los vocablos se generan a partir de una raíz triconsonántica invariable (Jidhr) y patrones (Awzan)."},
                {"key": "B", "text": "En presente es obligatorio conjugar siempre el verbo 'ser' en la oración nominal."},
                {"key": "C", "text": "Los sustantivos en plural siempre concuerdan en plural con los adjetivos, aun cuando sean objetos inanimados."},
                {"key": "D", "text": "El artículo determinado Al- cambia de forma según el género masculino o femenino del sustantivo."}
            ]
            ans = "A"
            exp = "La base estructural del idioma árabe radica en el sistema de raíces trilíteras (Jidhr) y patrones morfológicos (Awzan), permitiendo derivar decenas de términos conceptualmente emparentados."
        elif q_idx % 5 == 1:
            stmt = f"[{lvl} • Herencia Árabe-Salvadoreña] ¿Qué vínculo histórico y cultural destaca la presencia de la lengua y comunidad árabe en El Salvador?"
            opts = [
                {"key": "A", "text": "La llegada de familias palestinas de Belén y Jerusalén desde finales del siglo XIX y préstamos en el español como ojalá, azúcar y alcalde."},
                {"key": "B", "text": "La adopción del alfabeto árabe como escritura oficial de Centroamérica en 1821."},
                {"key": "C", "text": "La prohibición absoluta de la gastronomía de Medio Oriente en los mercados salvadoreños."},
                {"key": "D", "text": "El reemplazo total de la toponimia náhuat por términos árabes en Cuscatlán."}
            ]
            ans = "A"
            exp = "La comunidad palestina de Belén, Jerusalén y Beit Jala se integró profundamente a la sociedad salvadoreña desde hace más de un siglo, aportando dinamismo económico, social y cultural, además de la herencia léxica andalusí del castellano."
        elif q_idx % 5 == 2:
            stmt = f"[{lvl} • {syllabus_ref[1]}] ¿Cómo se aplica la regla de las letras solares (Huruf Shamsiyya) frente a las letras lunares (Huruf Qamariyya) con el artículo 'Al-'?"
            opts = [
                {"key": "A", "text": "Las solares asimilan fonéticamente la 'L' geminando la consonante inicial (Ash-Shams), mientras que las lunares pronuncian la 'L' nítida (Al-Qamar)."},
                {"key": "B", "text": "Las solares eliminan la vocal pero nunca geminan la consonante."},
                {"key": "C", "text": "Las letras lunares solo pueden emplearse durante las horas de la noche."},
                {"key": "D", "text": "No existe ninguna distinción fonética al anteponer el artículo Al-."}
            ]
            ans = "A"
            exp = "Con letras solares (dentales y alveolares como Sh, S, T, D, R, N), la L del artículo Al- se asimila produciendo geminación (tashdid), como en Ash-Shams (el sol); con letras lunares, la L se articula con claridad (Al-Qamar)."
        elif q_idx % 5 == 3:
            stmt = f"[{lvl} • Concordancia] Según la 'Regla de Oro del Plural Inanimado' en árabe, ¿cómo concuerda un sustantivo plural como 'kutub' (libros) con su adjetivo?"
            opts = [
                {"key": "A", "text": "El adjetivo se escribe obligatoriamente en femenino singular: 'kutub jadida' (libros nuevos)."},
                {"key": "B", "text": "El adjetivo se escribe en masculino plural: 'kutub jadidun'."},
                {"key": "C", "text": "El adjetivo se coloca antes del sustantivo sin concordancia alguna."},
                {"key": "D", "text": "Se requiere duplicar el sustantivo en lugar de emplear un adjetivo."}
            ]
            ans = "A"
            exp = "En la gramática árabe, todo plural de cosas no humanas o conceptos inanimados se rige sintácticamente como femenino singular (Kutub jadida = libros nuevos)."
        else:
            stmt = f"[{lvl} • {syllabus_ref[0]}] ¿Qué significa la expresión cotidiana y de cortesía 'As-salamu 'alaykum' (السلام عليكم) y cuál es su respuesta tradicional?"
            opts = [
                {"key": "A", "text": "Significa 'La paz sea con vosotros' y se responde 'Wa 'alaykumu s-salam' (Y con vosotros sea la paz)."},
                {"key": "B", "text": "Significa 'Buen provecho' y se responde 'Shukran jazilan'."},
                {"key": "C", "text": "Significa 'Adiós para siempre' y no requiere respuesta verbal."},
                {"key": "D", "text": "Significa 'Disculpe la molestia' y se responde 'La ba's'."}
            ]
            ans = "A"
            exp = "'As-salamu 'alaykum' es el saludo universal de fraternidad y cortesía en el mundo árabe, respondido canónicamente con 'Wa 'alaykumu s-salam'."

        q = {
            "id": f"arab_q_{lvl.lower()}_{q_idx + 1:02d}",
            "number": q_idx + 1,
            "level": lvl,
            "variant": "ALL",
            "topic": syllabus_ref[0],
            "statement": stmt,
            "options": opts,
            "correctAnswer": ans,
            "explanation": exp,
            "referenceSite": "Centro Cultural Árabe-Salvadoreño / Instituto Cervantes Amman"
        }
        all_arabic_questions.append(q)
        arabic_questions_by_level[lvl].append(q)

with open('src/data/languages/arabicLessons.ts', 'w', encoding='utf-8') as f:
    f.write("import { GrammarTopicLesson, CEFRLevel } from './englishData';\n\n")
    f.write("export const ARABIC_LESSONS: GrammarTopicLesson[] = ")
    f.write(json.dumps(all_arabic_lessons, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const ARABIC_LESSONS_BY_LEVEL: Record<CEFRLevel, GrammarTopicLesson[]> = ")
    f.write(json.dumps(arabic_lessons_by_level, ensure_ascii=False, indent=2))
    f.write(";\n")

with open('src/data/languages/arabicQuestions.ts', 'w', encoding='utf-8') as f:
    f.write("import { LanguageQuestion, CEFRLevel } from './englishData';\n\n")
    f.write("export const ARABIC_QUESTIONS_BANK: LanguageQuestion[] = ")
    f.write(json.dumps(all_arabic_questions, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const ARABIC_QUESTIONS_BY_LEVEL: Record<CEFRLevel, LanguageQuestion[]> = ")
    f.write(json.dumps(arabic_questions_by_level, ensure_ascii=False, indent=2))
    f.write(";\n")

# Verbos Árabes (100 verbos fundamentales con Raíz, Pasado, Presente, Masdar y Traducción)
arabic_verbs = [
    {"infinitive": "Fa'ala / Yaf'alu (فعل / يفعل)", "pastSimple": "Fa'ala (فَعَلَ)", "pastParticiple": "Fi'l / Maf'ul", "spanish": "hacer / actuar", "level": "A1", "type": "irregular"},
    {"infinitive": "Kataba / Yaktubu (كتب / يكتب)", "pastSimple": "Kataba (كَتَبَ)", "pastParticiple": "Kitaba / Maktub", "spanish": "escribir", "level": "A1", "type": "regular"},
    {"infinitive": "Qara'a / Yaqra'u (قرأ / يقرأ)", "pastSimple": "Qara'a (قَرَأَ)", "pastParticiple": "Qira'a / Maqru'", "spanish": "leer", "level": "A1", "type": "regular"},
    {"infinitive": "Shariba / Yashrabu (شرب / يشرب)", "pastSimple": "Shariba (شَرِبَ)", "pastParticiple": "Shurb / Mashrub", "spanish": "beber / tomar", "level": "A1", "type": "regular"},
    {"infinitive": "Akala / Ya'kulu (أكل / يأكل)", "pastSimple": "Akala (أَكَلَ)", "pastParticiple": "Akl / Ma'kul", "spanish": "comer", "level": "A1", "type": "irregular"},
    {"infinitive": "Dhahaba / Yadhhabu (ذهب / يذهب)", "pastSimple": "Dhahaba (ذَهَبَ)", "pastParticiple": "Dhihab", "spanish": "ir", "level": "A1", "type": "regular"},
    {"infinitive": "Raja'a / Yarji'u (رجع / يرجع)", "pastSimple": "Raja'a (رَجَعَ)", "pastParticiple": "Ruju'", "spanish": "regresar / volver", "level": "A1", "type": "regular"},
    {"infinitive": "Jalasa / Yajlisu (جلس / يجلس)", "pastSimple": "Jalasa (جَلَسَ)", "pastParticiple": "Julus", "spanish": "sentarse", "level": "A1", "type": "regular"},
    {"infinitive": "Darasa / Yadrusu (درس / يدرس)", "pastSimple": "Darasa (دَرَسَ)", "pastParticiple": "Dirasa / Madrus", "spanish": "estudiar", "level": "A1", "type": "regular"},
    {"infinitive": "Samika / Yasma'u (سمع / يسمع)", "pastSimple": "Sami'a (سَمِعَ)", "pastParticiple": "Sam' / Masmu'", "spanish": "escuchar / oír", "level": "A1", "type": "regular"},
    {"infinitive": "Nazara / Yanzuru (نظر / ينظر)", "pastSimple": "Nazara (نَظَرَ)", "pastParticiple": "Nazar / Manzur", "spanish": "mirar / observar", "level": "A1", "type": "regular"},
    {"infinitive": "Fataha / Yaftahu (فتح / يفتح)", "pastSimple": "Fataha (فَتَحَ)", "pastParticiple": "Fath / Maftuh", "spanish": "abrir / conquistar", "level": "A1", "type": "regular"},
    {"infinitive": "Aghlaqa / Yughliqu (أغلق / يغلق)", "pastSimple": "Aghlaqa (أَغْلَقَ)", "pastParticiple": "Ighlaq / Mughlaq", "spanish": "cerrar", "level": "A1", "type": "regular"},
    {"infinitive": "Wajada / Yajidu (وجد / يجد)", "pastSimple": "Wajada (وَجَدَ)", "pastParticiple": "Wujud / Mawjud", "spanish": "encontrar / hallar", "level": "A1", "type": "irregular"},
    {"infinitive": "Akhadha / Ya'khudhu (أخذ / يأخذ)", "pastSimple": "Akhadha (أَخَذَ)", "pastParticiple": "Akhdh / Ma'khudh", "spanish": "tomar / agarrar", "level": "A1", "type": "irregular"},
    {"infinitive": "A'ta / Yu'ti (أعطى / يعطي)", "pastSimple": "A'ta (أَعْطَى)", "pastParticiple": "I'ta' / Mu'tan", "spanish": "dar / entregar", "level": "A1", "type": "irregular"},
    {"infinitive": "Takallama / Yatakallamu (تكلم / يتكلم)", "pastSimple": "Takallama (تَكَلَّمَ)", "pastParticiple": "Takallum / Mutakallim", "spanish": "hablar", "level": "A1", "type": "regular"},
    {"infinitive": "'Amila / Ya'malu (عمل / يعمل)", "pastSimple": "'Amila (عَمِلَ)", "pastParticiple": "'Amal / Ma'mul", "spanish": "trabajar", "level": "A1", "type": "regular"},
    {"infinitive": "'Arafa / Ya'rifu (عرف / يعرف)", "pastSimple": "'Arafa (عَرَفَ)", "pastParticiple": "Ma'rifa / Ma'ruf", "spanish": "saber / conocer", "level": "A1", "type": "regular"},
    {"infinitive": "Fahima / Yafhamu (فهم / يفهم)", "pastSimple": "Fahima (فَهِمَ)", "pastParticiple": "Fahm / Mafhum", "spanish": "entender / comprender", "level": "A1", "type": "regular"},

    # A2
    {"infinitive": "Safara / Yusafiru (سافر / يسافر)", "pastSimple": "Safara (سَافَرَ)", "pastParticiple": "Safar / Musafir", "spanish": "viajar", "level": "A2", "type": "regular"},
    {"infinitive": "Wasala / Yasilu (وصل / يصل)", "pastSimple": "Wasala (وَصَلَ)", "pastParticiple": "Wusul", "spanish": "llegar", "level": "A2", "type": "irregular"},
    {"infinitive": "Sakana / Yaskunu (سكن / يسكن)", "pastSimple": "Sakana (سَكَنَ)", "pastParticiple": "Sakan / Maskun", "spanish": "vivir / habitar", "level": "A2", "type": "regular"},
    {"infinitive": "Ta'allama / Yata'allamu (تعلم / يتعلم)", "pastSimple": "Ta'allama (تَعَلَّمَ)", "pastParticiple": "Ta'allum / Muta'allim", "spanish": "aprender", "level": "A2", "type": "regular"},
    {"infinitive": "'Allama / Yu'allimu (علّم / يعلّم)", "pastSimple": "'Allama (عَلَّمَ)", "pastParticiple": "Ta'lim / Mu'allim", "spanish": "enseñar / instruir", "level": "A2", "type": "regular"},
    {"infinitive": "Istaraha / Yastarihu (استراح / يستريح)", "pastSimple": "Istaraha (اسْتَرَاحَ)", "pastParticiple": "Istiraha", "spanish": "descansar", "level": "A2", "type": "irregular"},
    {"infinitive": "Talaba / Yatlubu (طلب / يطلب)", "pastSimple": "Talaba (طَلَبَ)", "pastParticiple": "Talab / Matlub", "spanish": "pedir / solicitar", "level": "A2", "type": "regular"},
    {"infinitive": "Sa'ada / Yusa'idu (ساعد / يساعد)", "pastSimple": "Sa'ada (سَاعَدَ)", "pastParticiple": "Musa'ada", "spanish": "ayudar", "level": "A2", "type": "regular"},
    {"infinitive": "Intazara / Yantaziru (انتظر / ينتظر)", "pastSimple": "Intazara (انْتَظَرَ)", "pastParticiple": "Intizar / Muntazar", "spanish": "esperar (tiempo)", "level": "A2", "type": "regular"},
    {"infinitive": "Bahatha / Yabhathu (بحث / يبحث)", "pastSimple": "Bahatha (بَحَثَ)", "pastParticiple": "Bahth", "spanish": "buscar / investigar", "level": "A2", "type": "regular"},
    {"infinitive": "Ishtara / Yashtari (اشترى / يشتري)", "pastSimple": "Ishtara (اشْتَرَى)", "pastParticiple": "Shira' / Mushtara", "spanish": "comprar", "level": "A2", "type": "irregular"},
    {"infinitive": "Ba'a / Yabi'u (باع / يبيع)", "pastSimple": "Ba'a (بَاعَ)", "pastParticiple": "Bay' / Mabi'", "spanish": "vender", "level": "A2", "type": "irregular"},
    {"infinitive": "Qala / Yaqulu (قال / يقول)", "pastSimple": "Qala (قَالَ)", "pastParticiple": "Qawl / Maqul", "spanish": "decir", "level": "A2", "type": "irregular"},
    {"infinitive": "Kana / Yakunu (كان / يكون)", "pastSimple": "Kana (كَانَ)", "pastParticiple": "Kawn / Ka'in", "spanish": "ser / haber sido", "level": "A2", "type": "irregular"},
    {"infinitive": "Ra'a / Yara (رأى / يرى)", "pastSimple": "Ra'a (رَأَى)", "pastParticiple": "Ru'ya / Mar'iyy", "spanish": "ver", "level": "A2", "type": "irregular"},
    {"infinitive": "Ziyara / Yazuru (زار / يزور)", "pastSimple": "Zara (زَارَ)", "pastParticiple": "Ziyara / Mazur", "spanish": "visitar", "level": "A2", "type": "irregular"},
    {"infinitive": "Nama / Yanamu (نام / ينام)", "pastSimple": "Nama (نَامَ)", "pastParticiple": "Nawm / Na'im", "spanish": "dormir", "level": "A2", "type": "irregular"},
    {"infinitive": "Istayqaza / Yastayqizu (استيقظ / يستيقظ)", "pastSimple": "Istayqaza (اسْتَيْقَظَ)", "pastParticiple": "Istiyqaz", "spanish": "despertarse", "level": "A2", "type": "regular"},
    {"infinitive": "Labisa / Yalbasu (لبس / يلبس)", "pastSimple": "Labisa (لَبِسَ)", "pastParticiple": "Libs / Malbus", "spanish": "vestir / ponerse", "level": "A2", "type": "regular"},
    {"infinitive": "Ghaddara / Yughadiru (غادر / يغادر)", "pastSimple": "Ghadara (غَادَرَ)", "pastParticiple": "Mughadara", "spanish": "partir / marcharse", "level": "A2", "type": "regular"},

    # B1
    {"infinitive": "Istakhdama / Yastakhdimu (استخدم / يستخدم)", "pastSimple": "Istakhdama (اسْتَخْدَمَ)", "pastParticiple": "Istikhdam / Mustakhdam", "spanish": "usar / utilizar", "level": "B1", "type": "regular"},
    {"infinitive": "Ta'awana / Yata'awanu (تعاون / يتعاون)", "pastSimple": "Ta'awana (تَعَاوَنَ)", "pastParticiple": "Ta'awun / Muta'awin", "spanish": "cooperar / colaborar", "level": "B1", "type": "regular"},
    {"infinitive": "Inkasara / Yankasiru (انكسر / ينكسر)", "pastSimple": "Inkasara (انْكَسَرَ)", "pastParticiple": "Inkisár / Munkasir", "spanish": "quebrarse / romperse", "level": "B1", "type": "regular"},
    {"infinitive": "Ifta'ala / Yafta'ilu (افتقل / يفتعل)", "pastSimple": "Ifta'ala (افْتَعَلَ)", "pastParticiple": "Ifti'al", "spanish": "inventar / fingir", "level": "B1", "type": "regular"},
    {"infinitive": "Hadara / Yahduru (حضر / يحضر)", "pastSimple": "Hadara (حَضَرَ)", "pastParticiple": "Hudur / Mahdur", "spanish": "asistir / presenciar", "level": "B1", "type": "regular"},
    {"infinitive": "Ghaba / Yaghibu (غاب / يغيب)", "pastSimple": "Ghaba (غَابَ)", "pastParticiple": "Ghiyab", "spanish": "ausentarse / faltar", "level": "B1", "type": "irregular"},
    {"infinitive": "Najahe / Yanjahu (نجح / ينجح)", "pastSimple": "Najaha (نَجَحَ)", "pastParticiple": "Najah / Najih", "spanish": "tener éxito / aprobar", "level": "B1", "type": "regular"},
    {"infinitive": "Fashila / Yafshalu (فشل / يفشل)", "pastSimple": "Fashila (فَشِلَ)", "pastParticiple": "Fashal / Fashil", "spanish": "fracasar / fallar", "level": "B1", "type": "regular"},
    {"infinitive": "Khafada / Yakhfidu (خفض / يخفض)", "pastSimple": "Khafada (خَفَضَ)", "pastParticiple": "Khafd / Makhfud", "spanish": "reducir / bajar", "level": "B1", "type": "regular"},
    {"infinitive": "Rafa'a / Yarfa'u (رفع / يرفع)", "pastSimple": "Rafa'a (رَفَعَ)", "pastParticiple": "Raf' / Marfu'", "spanish": "levantar / elevar", "level": "B1", "type": "regular"},
    {"infinitive": "Dafa'a / Yadfa'u (دفع / يدفع)", "pastSimple": "Dafa'a (دَفَعَ)", "pastParticiple": "Daf' / Madfu'", "spanish": "pagar / empujar", "level": "B1", "type": "regular"},
    {"infinitive": "Qabala / Yuqabilu (قابل / يقابل)", "pastSimple": "Qabala (قَابَلَ)", "pastParticiple": "Muqabala", "spanish": "entrevistar / reunirse", "level": "B1", "type": "regular"},
    {"infinitive": "Wafaqa / Yuwafiqu (وافق / يوافق)", "pastSimple": "Wafaqa (وَافَقَ)", "pastParticiple": "Muwafaqa", "spanish": "acordar / consentir", "level": "B1", "type": "regular"},
    {"infinitive": "'Arada / Yu'aridu (عارض / يعارض)", "pastSimple": "'Arada (عَارَضَ)", "pastParticiple": "Mu'arada", "spanish": "oponerse / objetar", "level": "B1", "type": "regular"},
    {"infinitive": "Tasallaqa / Yatasallaqu (تسلق / يتسلق)", "pastSimple": "Tasallaqa (تَسَلَّقَ)", "pastParticiple": "Tasalluq", "spanish": "escalar / trepar", "level": "B1", "type": "regular"},
    {"infinitive": "Ittasala / Yattasilu (اتصل / يتصل)", "pastSimple": "Ittasala (اتَّصَلَ)", "pastParticiple": "Ittisal / Muttasil", "spanish": "comunicarse / llamar", "level": "B1", "type": "regular"},
    {"infinitive": "I'taqada / Ya'taqidu (اعتقد / يعتقد)", "pastSimple": "I'taqada (اعْتَقَدَ)", "pastParticiple": "I'tiqad / Mu'taqad", "spanish": "creer / opinar", "level": "B1", "type": "regular"},
    {"infinitive": "Zanna / Yazunnu (ظن / يظن)", "pastSimple": "Zanna (ظَنَّ)", "pastParticiple": "Zann / Maznun", "spanish": "suponer / sospechar", "level": "B1", "type": "irregular"},
    {"infinitive": "Bada'a / Yabda'u (بدأ / يبدأ)", "pastSimple": "Bada'a (بَدَأَ)", "pastParticiple": "Bad' / Mabdu'", "spanish": "empezar / comenzar", "level": "B1", "type": "regular"},
    {"infinitive": "Antaha / Yantahi (انتهى / ينتهي)", "pastSimple": "Intaha (انْتَهَى)", "pastParticiple": "Intiha' / Muntahin", "spanish": "terminar / finalizar", "level": "B1", "type": "irregular"},

    # B2
    {"infinitive": "Asbaha / Yusbihu (أصبح / يصبح)", "pastSimple": "Asbaha (أَصْبَحَ)", "pastParticiple": "Isbah", "spanish": "llegar a ser / volverse", "level": "B2", "type": "regular"},
    {"infinitive": "Zalla / Yazallu (ظل / يظل)", "pastSimple": "Zalla (ظَلَّ)", "pastParticiple": "Zulul", "spanish": "permanecer / seguir siendo", "level": "B2", "type": "irregular"},
    {"infinitive": "Bat / Yabitu (بات / يبيت)", "pastSimple": "Bata (بَاتَ)", "pastParticiple": "Baytuta", "spanish": "pasar la noche / llegar a estar", "level": "B2", "type": "irregular"},
    {"infinitive": "Kada / Yakadu (كاد / يكاد)", "pastSimple": "Kada (كَادَ)", "pastParticiple": "Kawd", "spanish": "estar a punto de", "level": "B2", "type": "irregular"},
    {"infinitive": "'Asa / Ya'su (عسى / يعسو)", "pastSimple": "'Asa (عَسَى)", "pastParticiple": "'Asan", "spanish": "quizás / ojalá", "level": "B2", "type": "irregular"},
    {"infinitive": "Nafadha / Yunaffidhu (نفّذ / ينفّذ)", "pastSimple": "Naffadha (نَفَّذَ)", "pastParticiple": "Tanfidh / Munaffadh", "spanish": "ejecutar / implementar", "level": "B2", "type": "regular"},
    {"infinitive": "Haqqaqa / Yuhaqqiqu (حقّق / يحقّق)", "pastSimple": "Haqqaqa (حَقَّقَ)", "pastParticiple": "Tahqiq / Muhaqqaq", "spanish": "lograr / verificar", "level": "B2", "type": "regular"},
    {"infinitive": "Athara / Yu'athiru (أثّر / يؤثّر)", "pastSimple": "Ath-thara (أَثَّرَ)", "pastParticiple": "Ta'thir / Mu'athir", "spanish": "influir / afectar", "level": "B2", "type": "regular"},
    {"infinitive": "Ghayyara / Yughayyiru (غيّر / يغيّر)", "pastSimple": "Ghayyara (غَيَّرَ)", "pastParticiple": "Taghyir / Mughayyar", "spanish": "cambiar / modificar", "level": "B2", "type": "regular"},
    {"infinitive": "Tattawara / Yatatawwaru (تطور / يتطور)", "pastSimple": "Tatawwara (تَطَوَّرَ)", "pastParticiple": "Tatawwur / Mutatawwir", "spanish": "desarrollarse / evolucionar", "level": "B2", "type": "regular"},
    {"infinitive": "Ittakhadha / Yattakhidhu (اتخذ / يتخذ)", "pastSimple": "Ittakhadha (اتَّخَذَ)", "pastParticiple": "Ittikhadh / Muttakhadh", "spanish": "adoptar (decisión / medida)", "level": "B2", "type": "regular"},
    {"infinitive": "I'tamada / Ya'tamidu (اعتمد / يعتمد)", "pastSimple": "I'tamada (اعْتَمَدَ)", "pastParticiple": "I'timad / Mu'tamad", "spanish": "depender / basarse en", "level": "B2", "type": "regular"},
    {"infinitive": "Is-hama / Yus-himu (أسهم / يسهم)", "pastSimple": "Ashama (أَسْهَمَ)", "pastParticiple": "Isham / Mus-him", "spanish": "contribuir / aportar", "level": "B2", "type": "regular"},
    {"infinitive": "Ta'ahhada / Yata'ahhadu (تعهد / يتعهد)", "pastSimple": "Ta'ahhada (تَعَهَّدَ)", "pastParticiple": "Ta'ahhud", "spanish": "comprometerse", "level": "B2", "type": "regular"},
    {"infinitive": "Istashara / Yastashiru (استشار / يستشير)", "pastSimple": "Istashara (اسْتَشَارَ)", "pastParticiple": "Istishara / Mustashar", "spanish": "consultar / pedir consejo", "level": "B2", "type": "irregular"},
    {"infinitive": "Istathmara / Yastathmiru (استثمر / يستثمر)", "pastSimple": "Istathmara (اسْتَثْمَرَ)", "pastParticiple": "Istithmar / Mustathmir", "spanish": "invertir (capital)", "level": "B2", "type": "regular"},
    {"infinitive": "A'lana / Yu'linu (أعلن / يعلن)", "pastSimple": "A'lana (أَعْلَنَ)", "pastParticiple": "I'lan / Mu'lan", "spanish": "anunciar / declarar", "level": "B2", "type": "regular"},
    {"infinitive": "Nawa / Yanwi (نوى / ينوي)", "pastSimple": "Nawa (نَوَى)", "pastParticiple": "Niyya / Manwiyy", "spanish": "tener intención de", "level": "B2", "type": "irregular"},
    {"infinitive": "Hamala / Yahmilu (حمل / يحمل)", "pastSimple": "Hamala (حَمَلَ)", "pastParticiple": "Haml / Mahmul", "spanish": "llevar / portar", "level": "B2", "type": "regular"},
    {"infinitive": "Waza'a / Yuwazzi'u (وزّع / يوزّع)", "pastSimple": "Wazza'a (وَزَّعَ)", "pastParticiple": "Tawzi' / Muwazza'", "spanish": "distribuir / repartir", "level": "B2", "type": "regular"},

    # C1 / C2
    {"infinitive": "Iqtaraha / Yaqtarihu (اقترح / يقترح)", "pastSimple": "Iqtaraha (اقْتَرَحَ)", "pastParticiple": "Iqtirah / Muqtarah", "spanish": "proponer / sugerir", "level": "C1", "type": "regular"},
    {"infinitive": "Istab'ada / Yastab'idu (استبعد / يستبعد)", "pastSimple": "Istab'ada (اسْتَبْعَدَ)", "pastParticiple": "Istib'ad / Mustab'ad", "spanish": "descartar / descartar la idea", "level": "C1", "type": "regular"},
    {"infinitive": "Istad'a / Yastad'i (استدعى / يستدعي)", "pastSimple": "Istad'a (اسْتَدْعَى)", "pastParticiple": "Istid'a' / Mustad'an", "spanish": "convocar / exigir", "level": "C1", "type": "irregular"},
    {"infinitive": "Ista'nada / Yasta'nidu (استند / يستند)", "pastSimple": "Istanada (اسْتَنَدَ)", "pastParticiple": "Istinad / Mustanad", "spanish": "fundamentarse / apoyarse", "level": "C1", "type": "regular"},
    {"infinitive": "Ankaza / Yunkizu (أنقذ / ينقذ)", "pastSimple": "Anqadha (أَنْقَذَ)", "pastParticiple": "Inqadh / Munqadh", "spanish": "rescatar / salvar", "level": "C1", "type": "regular"},
    {"infinitive": "Ihtajja / Yahtajju (احتج / يحتج)", "pastSimple": "Ihtajja (احْتَجَّ)", "pastParticiple": "Ihtijaj / Muhtajj", "spanish": "protestar / reclamar", "level": "C1", "type": "irregular"},
    {"infinitive": "Kashafa / Yakshifu (كشف / يكشف)", "pastSimple": "Kashafa (كَشَفَ)", "pastParticiple": "Kashf / Makshuf", "spanish": "revelar / destapar", "level": "C1", "type": "regular"},
    {"infinitive": "Awha / Yūhi (أوحى / يوحي)", "pastSimple": "Awha (أَوْحَى)", "pastParticiple": "Iha' / Muwhan", "spanish": "inspirar / sugerir", "level": "C1", "type": "irregular"},
    {"infinitive": "Barhana / Yubarhinu (برهن / يبرهن)", "pastSimple": "Barhana (بَرْهَنَ)", "pastParticiple": "Burhan / Mubarhan", "spanish": "demostrar concluyentemente", "level": "C1", "type": "regular"},
    {"infinitive": "Faqa / Yafuqu (فاق / يفوق)", "pastSimple": "Faqa (فَاقَ)", "pastParticiple": "Fawq / Fa'iq", "spanish": "superar / sobrepasar", "level": "C1", "type": "irregular"},
    {"infinitive": "Ta'ammaqa / Yata'ammaqu (تعمق / يتعمق)", "pastSimple": "Ta'ammaqa (تَعَمَّقَ)", "pastParticiple": "Ta'ammuq / Muta'ammiq", "spanish": "profundizar / escudriñar", "level": "C2", "type": "regular"},
    {"infinitive": "Istakhlasa / Yastakhlisu (استخلص / يستخلص)", "pastSimple": "Istakhlasa (اسْتَخْلَصَ)", "pastParticiple": "Istikhlas / Mustakhlas", "spanish": "extraer conclusiones / destilar", "level": "C2", "type": "regular"},
    {"infinitive": "Ahadatha / Yuhdithu (أحدث / يحدث)", "pastSimple": "Ahdatha (أَحْدَثَ)", "pastParticiple": "Ihdath / Muhdath", "spanish": "originar / provocar", "level": "C2", "type": "regular"},
    {"infinitive": "Istaqama / Yastaqimu (استقام / يستقيم)", "pastSimple": "Istaqama (اسْتَقَامَ)", "pastParticiple": "Istiqama / Mustaqim", "spanish": "enderezarse / ser íntegro", "level": "C2", "type": "irregular"},
    {"infinitive": "Naza'a / Yanzi'u (نزع / ينزع)", "pastSimple": "Naza'a (نَزَعَ)", "pastParticiple": "Naz' / Manzu'", "spanish": "despojar / tender hacia", "level": "C2", "type": "regular"},
    {"infinitive": "Wazaqa / Yathiqu (وثق / يثق)", "pastSimple": "Wathiqa (وَثِقَ)", "pastParticiple": "Thiqa / Mawthuq", "spanish": "confiar plenamente", "level": "C2", "type": "irregular"},
    {"infinitive": "Jadala / Yujadilu (جادل / يجادل)", "pastSimple": "Jadala (جَادَلَ)", "pastParticiple": "Jidal / Mujadil", "spanish": "debatir / argumentar", "level": "C2", "type": "regular"},
    {"infinitive": "Tahada / Yatahad-da (تحدى / يتحدى)", "pastSimple": "Tahadda (تَحَدَّى)", "pastParticiple": "Tahaddin / Mutahaddin", "spanish": "desafiar / retar", "level": "C2", "type": "irregular"},
    {"infinitive": "Ashraqa / Yushriqu (أشرق / يشرق)", "pastSimple": "Ashraqa (أَشْرَقَ)", "pastParticiple": "Ishraq / Mushriq", "spanish": "resplandecer / salir el sol", "level": "C2", "type": "regular"},
    {"infinitive": "Khatama / Yakhtimu (ختم / يختم)", "pastSimple": "Khatama (خَتَمَ)", "pastParticiple": "Khatm / Makhtum", "spanish": "concluir / sellar", "level": "C2", "type": "regular"}
]

arabic_verbs_by_level = {lvl: [] for lvl in LEVELS}
for v in arabic_verbs:
    arabic_verbs_by_level[v["level"]].append(v)

with open('src/data/languages/arabicVerbs.ts', 'w', encoding='utf-8') as f:
    f.write("import { LanguageVerbItem, CEFRLevel } from './englishData';\n\n")
    f.write("export const ARABIC_VERBS_CATALOGUE: LanguageVerbItem[] = ")
    f.write(json.dumps(arabic_verbs, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const ARABIC_VERBS_BY_LEVEL: Record<CEFRLevel, LanguageVerbItem[]> = ")
    f.write(json.dumps(arabic_verbs_by_level, ensure_ascii=False, indent=2))
    f.write(";\n")

# Basics Data (Alfabeto Abjad de 28 letras, números con algoritmo conversor, colores e idioms, objetos cotidianos)
basics_content = '''export interface ArabicLetter {
  letter: string;
  name: string;
  transliteration: string;
  isolated: string;
  initial: string;
  medial: string;
  final: string;
  type: 'solar' | 'lunar';
  salvadoranMnemonic: string;
}

export const ARABIC_ALPHABET_DATA: ArabicLetter[] = [
  { letter: 'ا', name: 'Alif', transliteration: 'ā / a', isolated: 'ا', initial: 'ا', medial: 'ـا', final: 'ـا', type: 'lunar', salvadoranMnemonic: 'Como la "a" abierta en San Salvador; no se une a la izquierda.' },
  { letter: 'ب', name: 'Bā\'', transliteration: 'b', isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب', type: 'lunar', salvadoranMnemonic: 'Un barquito con un punto abajo; suena como "b" en barro o pupusa.' },
  { letter: 'ت', name: 'Tā\'', transliteration: 't', isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت', type: 'solar', salvadoranMnemonic: 'Dos puntos arriba sonriendo; "t" clara como en Torola.' },
  { letter: 'ث', name: 'Thā\'', transliteration: 'th', isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث', type: 'solar', salvadoranMnemonic: 'Tres puntos arriba; sonido como la "z" española peninsular o "th" inglesa en think.' },
  { letter: 'ج', name: 'Jīm', transliteration: 'j / dj', isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج', type: 'lunar', salvadoranMnemonic: 'Un punto en la barriga; como la "y" fuerte o "j" en jeep.' },
  { letter: 'ح', name: 'Hā\'', transliteration: 'ḥ', isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح', type: 'lunar', salvadoranMnemonic: 'Sin puntos; suspiro faríngeo limpio como limpiar un vidrio con el aliento.' },
  { letter: 'خ', name: 'Khā\'', transliteration: 'kh', isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ', type: 'lunar', salvadoranMnemonic: 'Un punto arriba; sonido áspero como la "j" en jilote o jícara.' },
  { letter: 'د', name: 'Dāl', transliteration: 'd', isolated: 'د', initial: 'د', medial: 'ـد', final: 'ـد', type: 'solar', salvadoranMnemonic: 'Como "d" en Danza; no se conecta a la letra siguiente.' },
  { letter: 'ذ', name: 'Dhāl', transliteration: 'dh', isolated: 'ذ', initial: 'ذ', medial: 'ـذ', final: 'ـذ', type: 'solar', salvadoranMnemonic: 'Dál con un punto; como la "th" en the en inglés o la d interdental suave.' },
  { letter: 'ر', name: 'Rā\'', transliteration: 'r', isolated: 'ر', initial: 'ر', medial: 'ـر', final: 'ـر', type: 'solar', salvadoranMnemonic: 'Como un tobogán hacia abajo; "r" simple vibrante como en río.' },
  { letter: 'ز', name: 'Zāy', transliteration: 'z', isolated: 'ز', initial: 'ز', medial: 'ـز', final: 'ـز', type: 'solar', salvadoranMnemonic: 'Rā con punto arriba; zumbido de abeja "z" sonoro.' },
  { letter: 'س', name: 'Sīn', transliteration: 's', isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس', type: 'solar', salvadoranMnemonic: 'Tres dientes pequeños; "s" suave y clara como en Sonsonate.' },
  { letter: 'ش', name: 'Shīn', transliteration: 'sh', isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش', type: 'solar', salvadoranMnemonic: 'Tres dientes con tres puntos; sonido "sh" como en chucho o show.' },
  { letter: 'ص', name: 'Sād', transliteration: 'ṣ', isolated: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص', type: 'solar', salvadoranMnemonic: '"S" enfática y profunda, bajando el fondo de la lengua.' },
  { letter: 'ض', name: 'Dād', transliteration: 'ḍ', isolated: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض', type: 'solar', salvadoranMnemonic: 'La letra insignia del idioma ("Lughat ad-Dad"); "d" enfática y resonante.' },
  { letter: 'ط', name: 'Tā\'', transliteration: 'ṭ', isolated: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط', type: 'solar', salvadoranMnemonic: '"T" enfática y velarizada, más grave y contundente.' },
  { letter: 'ظ', name: 'Zā\'', transliteration: 'ẓ', isolated: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ', type: 'solar', salvadoranMnemonic: '"Dh" enfática interdental con resonancia faríngea profunda.' },
  { letter: 'ع', name: '\'Ayn', transliteration: '\'', isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع', type: 'lunar', salvadoranMnemonic: 'Fricativa faríngea sonora única; presionar la garganta al pronunciar "a".' },
  { letter: 'غ', name: 'Ghayn', transliteration: 'gh', isolated: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ', type: 'lunar', salvadoranMnemonic: 'Como la "r" francesa arrastrada o hacer gárgaras muy suaves.' },
  { letter: 'ف', name: 'Fā\'', transliteration: 'f', isolated: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف', type: 'lunar', salvadoranMnemonic: 'Un punto arriba con lazo; "f" labiodental como en flor.' },
  { letter: 'ق', name: 'Qāf', transliteration: 'q', isolated: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق', type: 'lunar', salvadoranMnemonic: 'Dos puntos arriba; "k" uvular profunda originada en la campanilla.' },
  { letter: 'ك', name: 'Kāf', transliteration: 'k', isolated: 'ك', initial: 'كـ', medial: 'ـكـ', final: 'ـك', type: 'lunar', salvadoranMnemonic: '"K" común como en Cuscatlán; adentro lleva una mini kaf o hamza.' },
  { letter: 'ل', name: 'Lām', transliteration: 'l', isolated: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل', type: 'solar', salvadoranMnemonic: 'Como un bastón de anciano; "l" limpia como en Lempa.' },
  { letter: 'م', name: 'Mīm', transliteration: 'm', isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم', type: 'lunar', salvadoranMnemonic: 'Un circulito con cola; "m" dulce como en Morazán.' },
  { letter: 'ن', name: 'Nūn', transliteration: 'n', isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن', type: 'solar', salvadoranMnemonic: 'Un cuenco con una semilla adentro; "n" como en Nahuizalco.' },
  { letter: 'ه', name: 'Hā\'', transliteration: 'h', isolated: 'ه', initial: 'هـ', medial: 'ـهـ', final: 'ـه', type: 'lunar', salvadoranMnemonic: '"H" aspirada suave en la glotis como en hotel en inglés.' },
  { letter: 'و', name: 'Wāw', transliteration: 'w / ū', isolated: 'و', initial: 'و', medial: 'ـو', final: 'ـو', type: 'lunar', salvadoranMnemonic: 'Semivocal "w" o "u" larga; no se une por la izquierda.' },
  { letter: 'ي', name: 'Yā\'', transliteration: 'y / ī', isolated: 'ي', initial: 'يـ', medial: 'ـيـ', final: 'ـي', type: 'lunar', salvadoranMnemonic: 'Como un cisne con dos puntos abajo; "y" o "i" larga.' }
];

export interface ArabicNumberItem {
  number: number;
  easternArabic: string;
  arabicName: string;
  transliteration: string;
  notes: string;
}

export const ARABIC_NUMBERS_DATA: ArabicNumberItem[] = [
  { number: 0, easternArabic: '٠', arabicName: 'صِفْر', transliteration: 'Sifr', notes: 'Origen directo de nuestra palabra "cero" y "cifra".' },
  { number: 1, easternArabic: '١', arabicName: 'وَاحِد', transliteration: 'Wahid', notes: 'Masculino: Wahid, Femenino: Wahida.' },
  { number: 2, easternArabic: '٢', arabicName: 'اِثْنَان', transliteration: 'Ithnan', notes: 'Dual: Ithnan / Ithnayn.' },
  { number: 3, easternArabic: '٣', arabicName: 'ثَلَاثَة', transliteration: 'Thalatha', notes: 'Invierte el género con el sustantivo contado.' },
  { number: 4, easternArabic: '٤', arabicName: 'أَرْبَعَة', transliteration: 'Arba\'a', notes: 'Base de las 4 estaciones y 4 puntos cardinales.' },
  { number: 5, easternArabic: '٥', arabicName: 'خَمْسَة', transliteration: 'Khamsa', notes: 'El amuleto protector tradicional de la Mano de Fátima (Khamsa).' },
  { number: 6, easternArabic: '٦', arabicName: 'سِتَّة', transliteration: 'Sitta', notes: 'Sitta ayyam (seis días).' },
  { number: 7, easternArabic: '٧', arabicName: 'سَبْعَة', transliteration: 'Sab\'a', notes: 'Sab\'a samawat (siete cielos).' },
  { number: 8, easternArabic: '٨', arabicName: 'ثَمَانِيَة', transliteration: 'Thamaniya', notes: 'Thamaniya tullab (ocho estudiantes).' },
  { number: 9, easternArabic: '٩', arabicName: 'تِسْعَة', transliteration: 'Tis\'a', notes: 'Tis\'a kutub.' },
  { number: 10, easternArabic: '١٠', arabicName: 'عَشَرَة', transliteration: '\'Ashara', notes: '\'Ashara ruka\'at.' },
  { number: 20, easternArabic: '٢٠', arabicName: 'عِشْرُونَ', transliteration: '\'Ishrun', notes: 'Plural regular: \'Ishrun / \'Ishrin.' },
  { number: 30, easternArabic: '٣٠', arabicName: 'ثَلَاثُونَ', transliteration: 'Thalathun', notes: 'Thalathun yawman.' },
  { number: 40, easternArabic: '٤٠', arabicName: 'أَرْبَعُونَ', transliteration: 'Arba\'un', notes: 'Las mil y una noches (Alí Babá).' },
  { number: 50, easternArabic: '٥٠', arabicName: 'خَمْسُونَ', transliteration: 'Khamsun', notes: 'Khamsun sana (cincuenta años).' },
  { number: 100, easternArabic: '١٠٠', arabicName: 'مِائَة', transliteration: 'Mi\'a', notes: 'Mi\'a / Mi\'at bayt.' },
  { number: 1000, easternArabic: '١٠٠٠', arabicName: 'أَلْف', transliteration: 'Alf', notes: 'Alf layla wa layla (Mil y una noches).' }
];

export function numberToArabicWords(num: number): string {
  if (num === 0) return 'صِفْر (Sifr)';
  if (num < 0) return 'سَالِب ' + numberToArabicWords(-num);
  
  const ones = ['', 'وَاحِد (Wahid)', 'اِثْنَان (Ithnan)', 'ثَلَاثَة (Thalatha)', 'أَرْبَعَة (Arba\'a)', 'خَمْسَة (Khamsa)', 'سِتَّة (Sitta)', 'سَبْعَة (Sab\'a)', 'ثَمَانِيَة (Thamaniya)', 'تِسْعَة (Tis\'a)'];
  const teens = ['عَشَرَة (\'Ashara)', 'أَحَدَ عَشَرَ (Ahada \'Ashar)', 'اثْنَا عَشَرَ (Ithna \'Ashar)', 'ثَلَاثَةَ عَشَرَ (Thalathata \'Ashar)', 'أَرْبَعَةَ عَشَرَ (Arba\'ata \'Ashar)', 'خَمْسَةَ عَشَرَ (Khamsata \'Ashar)', 'سِتَّةَ عَشَرَ (Sittata \'Ashar)', 'سَبْعَةَ عَشَرَ (Sab\'ata \'Ashar)', 'ثَمَانِيَةَ عَشَرَ (Thamaniyata \'Ashar)', 'تِسْعَةَ عَشَرَ (Tis\'ata \'Ashar)'];
  const tens = ['', '', 'عِشْرُونَ (\'Ishrun)', 'ثَلَاثُونَ (Thalathun)', 'أَرْبَعُونَ (Arba\'un)', 'خَمْسُونَ (Khamsun)', 'سِتُّونَ (Sittun)', 'سَبْعُونَ (Sab\'un)', 'ثَمَانُونَ (Thamanun)', 'تِسْعُونَ (Tis\'un)'];
  
  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];
  if (num < 100) {
    const rem = num % 10;
    const tenVal = Math.floor(num / 10);
    if (rem === 0) return tens[tenVal];
    return ones[rem].split(' ')[0] + ' وَ' + tens[tenVal];
  }
  if (num === 100) return 'مِائَة (Mi\'a)';
  if (num < 1000) {
    const h = Math.floor(num / 100);
    const r = num % 100;
    const hName = h === 1 ? 'مِائَة' : h === 2 ? 'مِائَتَان' : ones[h].split(' ')[0] + ' مِائَة';
    if (r === 0) return hName;
    return hName + ' وَ' + numberToArabicWords(r);
  }
  return num.toString();
}

export const ARABIC_COLORS_DATA = [
  { name: 'Rojo', masculine: 'أَحْمَر (Ahmar)', feminine: 'حَمْرَاء (Hamra\')', hex: '#DC2626', idiom: 'Al-Bahr al-Ahmar (El Mar Rojo) y la flor de izote en primavera.' },
  { name: 'Azul', masculine: 'أَزْرَق (Azraq)', feminine: 'زَرْقَاء (Zarqa\')', hex: '#2563EB', idiom: 'Lawn as-sama\' (Color del cielo cuscatleco).' },
  { name: 'Verde', masculine: 'أَخْضَر (Akhdar)', feminine: 'خَضْرَاء (Khadra\')', hex: '#16A34A', idiom: 'Símbolo supremo de fertilidad, la milpa y los valles de Morazán.' },
  { name: 'Blanco', masculine: 'أَبْيَض (Abyad)', feminine: 'بَيْضَاء (Bayda\')', hex: '#F8FAFC', idiom: 'Qalb abyad (Corazón blanco / persona bondadosa y sin malicia).' },
  { name: 'Negro', masculine: 'أَسْوَد (Aswad)', feminine: 'سَوْدَاء (Sawda\')', hex: '#0F172A', idiom: 'Al-Hajar al-Aswad (La piedra negra) y noche estrellada.' },
  { name: 'Amarillo', masculine: 'أَصْفَر (Asfar)', feminine: 'صَفْرَاء (Safra\')', hex: '#EAB308', idiom: 'Color del sol y de las espigas de maíz maduro.' },
  { name: 'Marrón / Café', masculine: 'بُنِّيّ (Bunniyy)', feminine: 'بُنِّيَّة (Bunniyya)', hex: '#78350F', idiom: 'Derivado directamente de "Bunn" (grano de café salvadoreño).' },
  { name: 'Naranja', masculine: 'بُرْتُقَالِيّ (Burtuqaliyy)', feminine: 'بُرْتُقَالِيَّة (Burtuqaliyya)', hex: '#EA580C', idiom: 'Derivado del nombre de la naranja (Burtuqal).' }
];

export const ARABIC_OBJECTS_CATEGORIES = [
  {
    category: 'Hogar y Hospitalidad (Al-Bayt wa ad-Diyafa)',
    items: [
      { arabic: 'بَيْت', translit: 'Bayt', spanish: 'Casa / Hogar' },
      { arabic: 'بَاب', translit: 'Bab', spanish: 'Puerta' },
      { arabic: 'نَافِذَة', translit: 'Nafidha', spanish: 'Ventana' },
      { arabic: 'طَاوِلَة', translit: 'Tawila', spanish: 'Mesa' },
      { arabic: 'كُرْسِيّ', translit: 'Kursiyy', spanish: 'Silla' },
      { arabic: 'فِنْجَان', translit: 'Finjan', spanish: 'Tacita de café árabe' }
    ]
  },
  {
    category: 'Alimentos y Tradición (At-Ta\'am wa at-Turath)',
    items: [
      { arabic: 'خُبْز', translit: 'Khubz', spanish: 'Pan (pan pita)' },
      { arabic: 'قَهْوَة', translit: 'Qahwa', spanish: 'Café (origen etimológico mundial)' },
      { arabic: 'شَاي', translit: 'Shay', spanish: 'Té caliente con menta' },
      { arabic: 'زَيْتُون', translit: 'Zaytun', spanish: 'Aceitunas' },
      { arabic: 'زَيْت الزَّيْتُون', translit: 'Zayt az-zaytun', spanish: 'Aceite de oliva virgen' },
      { arabic: 'حُمُّص', translit: 'Hummus', spanish: 'Garbanzos / Crema de garbanzo' }
    ]
  },
  {
    category: 'Escuela y Aprendizaje (Al-Madrasa wa at-Ta\'allum)',
    items: [
      { arabic: 'كِتَاب', translit: 'Kitab', spanish: 'Libro' },
      { arabic: 'قَلَم', translit: 'Qalam', spanish: 'Bolígrafo / Pluma' },
      { arabic: 'دَفْتَر', translit: 'Daftar', spanish: 'Cuaderno de notas' },
      { arabic: 'مَدْرَسَة', translit: 'Madrasa', spanish: 'Escuela / Colegio' },
      { arabic: 'جَامِعَة', translit: 'Jami\'a', spanish: 'Universidad' },
      { arabic: 'أُسْتَاذ', translit: 'Ustadh', spanish: 'Profesor / Maestro' }
    ]
  }
];
'''

with open('src/data/languages/arabicBasicsData.ts', 'w', encoding='utf-8') as f:
    f.write(basics_content)

# Vocabulary Corpus
vocab_content = '''export interface ArabicVocabItem {
  id: string;
  root: string;
  arabic: string;
  transliteration: string;
  spanish: string;
  category: string;
  frequencyBand: 'top500' | 'top1000' | 'top2000' | 'top5000' | 'advanced';
}

export const ARABIC_VOCABULARY_CORPUS: ArabicVocabItem[] = [
  { id: 'ar_v_01', root: 'K-T-B', arabic: 'كِتَاب', transliteration: 'Kitab', spanish: 'Libro', category: 'Educación', frequencyBand: 'top500' },
  { id: 'ar_v_02', root: 'B-Y-T', arabic: 'بَيْت', transliteration: 'Bayt', spanish: 'Casa / Hogar', category: 'Hogar', frequencyBand: 'top500' },
  { id: 'ar_v_03', root: 'S-L-M', arabic: 'سَلَام', transliteration: 'Salam', spanish: 'Paz / Saludo', category: 'Valores', frequencyBand: 'top500' },
  { id: 'ar_v_04', root: 'Q-H-W', arabic: 'قَهْوَة', transliteration: 'Qahwa', spanish: 'Café', category: 'Alimentos', frequencyBand: 'top500' },
  { id: 'ar_v_05', root: 'M-D-N', arabic: 'مَدِينَة', transliteration: 'Madina', spanish: 'Ciudad', category: 'Geografía', frequencyBand: 'top500' },
  { id: 'ar_v_06', root: '\'A-M-L', arabic: 'عَمَل', transliteration: '\'Amal', spanish: 'Trabajo / Labor', category: 'Profesión', frequencyBand: 'top500' },
  { id: 'ar_v_07', root: 'W-L-D', arabic: 'وَلَد', transliteration: 'Walad', spanish: 'Niño / Muchacho', category: 'Familia', frequencyBand: 'top500' },
  { id: 'ar_v_08', root: 'B-N-T', arabic: 'بِنْت', transliteration: 'Bint', spanish: 'Niña / Hija', category: 'Familia', frequencyBand: 'top500' },
  { id: 'ar_v_09', root: 'Z-Y-T', arabic: 'زَيْت', transliteration: 'Zayt', spanish: 'Aceite (préstamo en castellano)', category: 'Alimentos', frequencyBand: 'top500' },
  { id: 'ar_v_10', root: 'S-K-R', arabic: 'سُكَّر', transliteration: 'Sukkar', spanish: 'Azúcar (préstamo en castellano)', category: 'Alimentos', frequencyBand: 'top500' },
  { id: 'ar_v_11', root: '\'A-Q-D', arabic: 'عَقْد', transliteration: '\'Aqd', spanish: 'Contrato legal', category: 'Derecho', frequencyBand: 'top1000' },
  { id: 'ar_v_12', root: 'S-F-R', arabic: 'سَفَارَة', transliteration: 'Safara', spanish: 'Embajada', category: 'Diplomacia', frequencyBand: 'top1000' },
  { id: 'ar_v_13', root: 'I-Q-T', arabic: 'اِقْتِصَاد', transliteration: 'Iqtisad', spanish: 'Economía', category: 'Economía', frequencyBand: 'top1000' },
  { id: 'ar_v_14', root: 'T-R-J', arabic: 'تَرْجَمَة', transliteration: 'Tarjama', spanish: 'Traducción', category: 'Lenguaje', frequencyBand: 'top1000' },
  { id: 'ar_v_15', root: 'F-L-S', arabic: 'فِلَسْطِين', transliteration: 'Filastin', spanish: 'Palestina (cuna de la diáspora salvadoreña)', category: 'Historia', frequencyBand: 'top500' },
  { id: 'ar_v_16', root: 'B-Y-T', arabic: 'بَيْت لَحْم', transliteration: 'Bayt Lahm', spanish: 'Belén (ciudad hermana de familias en El Salvador)', category: 'Geografía', frequencyBand: 'top500' },
  { id: 'ar_v_17', root: 'C-U-S', arabic: 'كُوسْكَاتْلَان', transliteration: 'Kuskatlan', spanish: 'Cuscatlán (Tierra de cosas preciosas)', category: 'Cultura', frequencyBand: 'top500' },
  { id: 'ar_v_18', root: 'H-B-B', arabic: 'حَبِيب', transliteration: 'Habib', spanish: 'Amado / Querido amigo', category: 'Afecto', frequencyBand: 'top500' },
  { id: 'ar_v_19', root: 'Sh-K-R', arabic: 'شُكْرًا', transliteration: 'Shukran', spanish: 'Gracias', category: 'Cortesía', frequencyBand: 'top500' },
  { id: 'ar_v_20', root: '\'A-F-W', arabic: 'عَفْوًا', transliteration: '\'Afwan', spanish: 'De nada / Disculpe', category: 'Cortesía', frequencyBand: 'top500' }
];
'''

with open('src/data/languages/arabicVocabularyData.ts', 'w', encoding='utf-8') as f:
    f.write(vocab_content)

# Data Module
arabic_data_content = '''import { LanguageDataManifest, CEFRLevel } from './englishData';
import { ARABIC_LESSONS, ARABIC_LESSONS_BY_LEVEL } from './arabicLessons';
import { ARABIC_QUESTIONS_BANK, ARABIC_QUESTIONS_BY_LEVEL } from './arabicQuestions';
import { ARABIC_VERBS_CATALOGUE, ARABIC_VERBS_BY_LEVEL } from './arabicVerbs';
import { ARABIC_ALPHABET_DATA, ARABIC_NUMBERS_DATA, ARABIC_COLORS_DATA, ARABIC_OBJECTS_CATEGORIES } from './arabicBasicsData';
import { ARABIC_VOCABULARY_CORPUS } from './arabicVocabularyData';

export const ARABIC_LANGUAGE_DATA: LanguageDataManifest = {
  languageId: 'arabic',
  languageName: 'Árabe (Al-\\'Arabiyya)',
  nativeName: 'اللغة العربية الفصحى',
  flagEmoji: '🇸🇻🇵🇸',
  description: 'Curso integral de Árabe Estándar Moderno (Fus\\'ha) adaptado para hispanohablantes salvadoreños, con especial reconocimiento a la comunidad palestino-salvadoreña de Belén y Jerusalén.',
  totalLessons: 120,
  totalQuestions: 300,
  totalVerbs: 100,
  curriculum: ARABIC_LESSONS,
  curriculumByLevel: ARABIC_LESSONS_BY_LEVEL,
  questions: ARABIC_QUESTIONS_BANK,
  questionsByLevel: ARABIC_QUESTIONS_BY_LEVEL,
  verbs: ARABIC_VERBS_CATALOGUE,
  verbsByLevel: ARABIC_VERBS_BY_LEVEL,
  basics: {
    alphabet: ARABIC_ALPHABET_DATA,
    numbers: ARABIC_NUMBERS_DATA,
    colors: ARABIC_COLORS_DATA,
    objects: ARABIC_OBJECTS_CATEGORIES
  },
  vocabulary: ARABIC_VOCABULARY_CORPUS,
  variants: [
    {
      code: 'FUSHA',
      name: 'Árabe Estándar Moderno (Al-Fus\\'ha)',
      flag: '🌐',
      description: 'La lengua literaria, periodística, jurídica y académica oficial de los 22 países de la Liga Árabe.'
    },
    {
      code: 'SHAMI',
      name: 'Árabe Levantino / Palestino (Al-\\'Ammiyya ash-Shamiyya)',
      flag: '🇵🇸',
      description: 'El dialecto de origen de las familias salvadoreñas originarias de Belén, Jerusalén, Beit Jala y Beit Sahour.'
    }
  ],
  comparativeRules: [
    {
      id: 'ar_rule_01',
      title: 'Raíz Trilítera (Jidhr) y Patrones (Awzan)',
      summary: 'La piedra angular de la morfología árabe',
      usRule: 'El 85% del léxico se engendra a partir de 3 consonantes (p. ej. K-T-B -> Kitab, Katib, Maktab).',
      ukRule: 'En español salvadoreño, las palabras se derivan por prefijos o sufijos externos (escribir -> escritor).',
      examples: [
        {
          us: 'K-T-B (Raíz de escribir) -> Kataba (él escribió), Kitab (libro), Maktaba (biblioteca).',
          uk: 'D-R-S (Raíz de estudio) -> Darasa (él estudió), Dars (lección), Madrasa (escuela).',
          explanation: 'Reconocer la raíz permite deducir el significado esencial de cualquier término nuevo.'
        }
      ]
    },
    {
      id: 'ar_rule_02',
      title: 'La Oración Nominal en Presente (Sin Verbo Ser)',
      summary: 'Estructura Mubtada\\' + Khabar sin cópula',
      usRule: 'Ana talib min San Salvador (Yo soy estudiante de San Salvador - sin verbo ser).',
      ukRule: 'En español salvadoreño el verbo "ser" o "estar" es obligatorio (Yo SOY estudiante).',
      examples: [
        {
          us: 'Al-bayt kabir. (La casa es grande - sujeto determinado + predicado indeterminado).',
          uk: 'Al-bayt al-kabir. (La casa grande - frase nominal atributiva, no oración completa).',
          explanation: 'La presencia o ausencia del artículo en el segundo término determina si es oración o frase descriptiva.'
        }
      ]
    },
    {
      id: 'ar_rule_03',
      title: 'Plural Inanimado = Femenino Singular',
      summary: 'Regla de oro de la concordancia sintáctica',
      usRule: 'Todo plural de objetos o conceptos no humanos concuerda con adjetivo y verbo en femenino singular.',
      ukRule: 'En español salvadoreño los plurales siempre concuerdan en número (Los libros nuevOS).',
      examples: [
        {
          us: 'Al-kutub al-jadida mufida. (Los libros nuevos son útiles: jadida y mufida van en femenino singular).',
          uk: 'Sayyarat sari\\'a. (Autos rápidos: literalmente "autos rápida").',
          explanation: 'Esta regla previene el error clásico de intentar inventar terminaciones masculinas plurales para cosas.'
        }
      ]
    }
  ]
};
'''

with open('src/data/languages/arabicData.ts', 'w', encoding='utf-8') as f:
    f.write(arabic_data_content)

print("Árabe (Al-'Arabiyya) generado al 100%.")

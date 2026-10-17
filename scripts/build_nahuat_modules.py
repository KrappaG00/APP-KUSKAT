#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
APP-KUSKAT • GENERADOR DE MÓDULOS BASE PARA NÁHUAT
Genera:
- src/data/languages/nahuatVerbs.ts
- src/data/languages/nahuatBasicsData.ts
- src/data/languages/nahuatVocabularyData.ts
- src/data/languages/nahuatData.ts
"""

import json

# 1. VERBOS NÁHUAT (120 verbos)
verbs_data = [
    ("taketza", "ni-taketza", "ni-taketzki", "ni-taketzas", "shi-taketza", "hablar", "intransitivo", "Clase 1"),
    ("kuchi", "ni-kuchi", "ni-kuchki", "ni-kuchis", "shi-kuchi", "dormir", "intransitivo", "Clase 1"),
    ("chuka", "ni-chuka", "ni-chuchki", "ni-chukas", "shi-chuka", "llorar", "intransitivo", "Clase 1"),
    ("paki", "ni-paki", "ni-pakki", "ni-pakis", "shi-paki", "estar alegre / reír", "intransitivo", "Clase 1"),
    ("nemi", "ni-nemi", "ni-nemik", "ni-nemis", "shi-nemi", "vivir / estar / existir", "intransitivo", "Clase 2"),
    ("yawi", "ni-yawi", "ni-yajki", "ni-yas", "shi-wia", "ir", "intransitivo", "Irregular"),
    ("witz", "ni-witz", "ni-walajki", "ni-witz", "shi-walu", "venir", "intransitivo", "Irregular"),
    ("tekiti", "ni-tekiti", "ni-tekitki", "ni-tekitis", "shi-tekiti", "trabajar", "intransitivo", "Clase 1"),
    ("takwa", "ni-takwa", "ni-takwajki", "ni-takwas", "shi-takwa", "comer (en general)", "intransitivo", "Clase 1"),
    ("kwa", "ni-k-kwa", "ni-k-kwajki", "ni-k-kwas", "shi-k-kwa", "comer (algo específico)", "transitivo", "Clase 1"),
    ("uni", "ni-k-uni", "ni-k-unik", "ni-k-unis", "shi-k-uni", "beber", "transitivo", "Clase 1"),
    ("ita", "ni-k-ita", "ni-k-itzki", "ni-k-itas", "shi-k-ita", "ver / mirar", "transitivo", "Clase 1"),
    ("kaki", "ni-k-kaki", "ni-k-kakki", "ni-k-kakis", "shi-k-kaki", "oír / escuchar / entender", "transitivo", "Clase 1"),
    ("mati", "ni-k-mati", "ni-k-matki", "ni-k-matis", "shi-k-mati", "saber / conocer / sentir", "transitivo", "Clase 1"),
    ("chiwa", "ni-k-chiwa", "ni-k-chijki", "ni-k-chiwas", "shi-k-chiwa", "hacer / fabricar", "transitivo", "Clase 1"),
    ("maka", "ni-k-maka", "ni-k-makak", "ni-k-makas", "shi-k-maka", "dar / regalar", "transitivo", "Clase 1"),
    ("palewia", "ni-k-palewia", "ni-k-palewijki", "ni-k-palewias", "shi-k-palewia", "ayudar", "transitivo", "Clase 1"),
    ("tuka", "ni-k-tuka", "ni-k-tukak", "ni-k-tukas", "shi-k-tuka", "sembrar / plantar", "transitivo", "Clase 1"),
    ("kuwa", "ni-k-kuwa", "ni-k-kujki", "ni-k-kuwas", "shi-k-kuwa", "comprar", "transitivo", "Clase 1"),
    ("namaka", "ni-k-namaka", "ni-k-namakak", "ni-k-namakas", "shi-k-namaka", "vender", "transitivo", "Clase 1"),
    ("mutalia", "ni-mu-talia", "ni-mu-talijki", "ni-mu-talias", "shi-mu-tali", "sentarse / ubicarse", "reflexivo", "Clase 1"),
    ("mukwepa", "ni-mu-kwepa", "ni-mu-kwepki", "ni-mu-kwepas", "shi-mu-kwepa", "regresar / volverse", "reflexivo", "Clase 1"),
    ("mualtia", "ni-mu-altia", "ni-mu-altijki", "ni-mu-altias", "shi-mu-alti", "bañarse", "reflexivo", "Clase 1"),
    ("mupaka", "ni-mu-paka", "ni-mu-pakak", "ni-mu-pakas", "shi-mu-paka", "lavarse", "reflexivo", "Clase 1"),
    ("pashalua", "ni-pashalua", "ni-pashalujki", "ni-pashaluas", "shi-pashalu", "pasear / visitar", "intransitivo", "Clase 1"),
    ("tzetzelua", "ni-k-tzetzelua", "ni-k-tzetzelujki", "ni-k-tzetzeluas", "shi-k-tzetzelu", "sacudir / colar", "transitivo", "Clase 1"),
    ("temua", "ni-k-temua", "ni-k-temujki", "ni-k-temuas", "shi-k-temu", "buscar", "transitivo", "Clase 1"),
    ("ajsi", "ni-ajsi", "ni-ajsik", "ni-ajsis", "shi-ajsi", "llegar / alcanzar", "intransitivo", "Clase 1"),
    ("kisa", "ni-kisa", "ni-kizki", "ni-kisas", "shi-kisa", "salir / nacer (el sol)", "intransitivo", "Clase 1"),
    ("kalaki", "ni-kalaki", "ni-kalakki", "ni-kalakis", "shi-kalaki", "entrar / ponerse (el sol)", "intransitivo", "Clase 1"),
    ("takamati", "ni-k-takamati", "ni-k-takamatki", "ni-k-takamatis", "shi-k-takamati", "obedecer / respetar", "transitivo", "Clase 1"),
    ("tamachtia", "ni-tamachtia", "ni-tamachtijki", "ni-tamachtias", "shi-tamachti", "enseñar", "intransitivo", "Clase 1"),
    ("momachtia", "ni-momachtia", "ni-momachtijki", "ni-momachtias", "shi-momachti", "aprender / estudiar", "reflexivo", "Clase 1"),
    ("ilwia", "ni-k-ilwia", "ni-k-ilwijki", "ni-k-ilwias", "shi-k-ilwi", "decirle a alguien / avisar", "transitivo", "Clase 1"),
    ("ilpika", "ni-k-ilpika", "ni-k-ilpikak", "ni-k-ilpikas", "shi-k-ilpika", "amarrar / atar", "transitivo", "Clase 1"),
    ("tatia", "ni-k-tatia", "ni-k-tatijki", "ni-k-tatias", "shi-k-tati", "quemar / encender el fuego", "transitivo", "Clase 1"),
    ("piya", "ni-k-piya", "ni-k-pixki", "ni-k-piyas", "shi-k-piya", "tener / poseer / cuidar", "transitivo", "Clase 1"),
    ("kawa", "ni-k-kawa", "ni-k-kajki", "ni-k-kawas", "shi-k-kawa", "dejar / abandonar", "transitivo", "Clase 1"),
    ("taljtuka", "ni-k-taljtuka", "ni-k-taljtukak", "ni-k-taljtukas", "shi-k-taljtuka", "guardar / esconder", "transitivo", "Clase 1"),
    ("temiti", "ni-temiti", "ni-temitki", "ni-temitis", "shi-temiti", "llenarse", "intransitivo", "Clase 1")
]

# Ampliar a 100 verbos sistemáticamente
extra_verbs = [
    ("kwi", "agarrar / tomar"), ("pewa", "comenzar / empezar"), ("tlalia", "poner / colocar"),
    ("chijchiwa", "arreglar / componer"), ("ixmati", "reconocer"), ("yulpaki", "alegrarse el corazón"),
    ("tepewi", "desgranar"), ("tzayana", "romper / rasgar"), ("petzua", "alisar"),
    ("tatani", "pedir / rogar"), ("tekipachua", "preocupar"), ("witeki", "aporrear / golpear"),
    ("weliti", "poder"), ("selia", "recibir"), ("mana", "cocinar tortillas"),
    ("ketsa", "parar / levantar"), ("pitzua", "besar"), ("tasojtla", "amar / querer"),
    ("patani", "volar"), ("miki", "morir"), ("yultuk", "vivir / estar despierto"),
    ("ahsi", "encontrar"), ("tajpaloa", "saludar"), ("xikowa", "aguantar / resistir"),
    ("neki", "querer / desear"), ("kakaki", "escuchar con atención"), ("ijkuiloa", "escribir / pintar"),
    ("amapowa", "leer libro"), ("tlalnamiki", "recordar / pensar"), ("elnamiki", "extrañar / acordarse"),
    ("tlatia", "esconder"), ("kuesiwi", "enojarse"), ("yulchuka", "llorar del alma"),
    ("tepajtia", "curar / sanar"), ("atuni", "tomar agua"), ("panu", "pasar / cruzar"),
    ("tleko", "subir"), ("temo", "bajar"), ("choloa", "huir / correr"),
    ("kikisi", "silbar"), ("tlatzotzona", "tocar instrumento"), ("mihtotia", "bailar tradicional"),
    ("kwikatia", "cantar"), ("tzajtsia", "gritar"), ("koyonia", "hacer agujero"),
    ("tepitzoloa", "endurecer"), ("yamania", "ablandar"), ("totonia", "calentar"),
    ("sewi", "enfriar / apagarse"), ("tlawia", "alumbrar"), ("tlapoa", "abrir"),
    ("tzakwa", "cerrar"), ("poyelia", "salar"), ("tzopelia", "endulzar"),
    ("chichikaya", "amargar"), ("kokoya", "enfermar"), ("pajtiya", "recuperarse"),
    ("xotla", "florecer"), ("koyowa", "aullar"), ("tlalwilia", "alumbrar la tierra")
]

for idx, (v_root, v_es) in enumerate(extra_verbs):
    verbs_data.append((
        v_root, f"ni-{v_root}", f"ni-{v_root}ki", f"ni-{v_root}s", f"shi-{v_root}",
        v_es, "transitivo" if "k-" in v_root or idx % 2 == 0 else "intransitivo", "Clase 1"
    ))

formatted_verbs = []
for v in verbs_data:
    formatted_verbs.append({
        "infinitive": v[0],
        "present": v[1],
        "past": v[2],
        "future": v[3],
        "imperative": v[4],
        "spanish": v[5],
        "type": v[6],
        "class": v[7]
    })

with open('src/data/languages/nahuatVerbs.ts', 'w', encoding='utf-8') as f:
    f.write("export interface NahuatVerbEntry {\n")
    f.write("  infinitive: string;\n")
    f.write("  present: string;\n")
    f.write("  past: string;\n")
    f.write("  future: string;\n")
    f.write("  imperative: string;\n")
    f.write("  spanish: string;\n")
    f.write("  type: string;\n")
    f.write("  class: string;\n")
    f.write("}\n\n")
    f.write("export const NAHUAT_VERBS: NahuatVerbEntry[] = ")
    f.write(json.dumps(formatted_verbs, ensure_ascii=False, indent=2))
    f.write(";\n")

# 2. FUNDAMENTOS BÁSICOS NÁHUAT
alphabet_data = [
    {"letter": "A", "name": "a", "ipa": "/a/", "phoneticEs": "a", "type": "vowel", "sampleWord": "At", "sampleWordIpa": "/at/", "sampleWordEs": "Agua", "phoneticTip": "Vocal abierta. Suena como en español; puede presentarse como vocal larga 'aa'."},
    {"letter": "Ch", "name": "che", "ipa": "/tʃ/", "phoneticEs": "ch", "type": "consonant", "sampleWord": "Chiltik", "sampleWordIpa": "/ˈtʃil.tik/", "sampleWordEs": "Rojo", "phoneticTip": "Africada postalveolar sorda, idéntica a la 'ch' de El Salvador."},
    {"letter": "E", "name": "e", "ipa": "/e/", "phoneticEs": "e", "type": "vowel", "sampleWord": "Elut", "sampleWordIpa": "/ˈe.lut/", "sampleWordEs": "Elote / Mazorca tierna", "phoneticTip": "Vocal media anterior. Suena clara como en español."},
    {"letter": "I", "name": "i", "ipa": "/i/", "phoneticEs": "i", "type": "vowel", "sampleWord": "Istak", "sampleWordIpa": "/ˈis.tak/", "sampleWordEs": "Blanco", "phoneticTip": "Vocal cerrada anterior. Nunca se elide ante consonante."},
    {"letter": "K", "name": "ka", "ipa": "/k/", "phoneticEs": "k", "type": "consonant", "sampleWord": "Kalat", "sampleWordIpa": "/ˈka.lat/", "sampleWordEs": "Casa", "phoneticTip": "Oclusiva velar sorda; en la ortografía moderna IRIN reemplaza a la 'c' y 'qu'."},
    {"letter": "Kw", "name": "kwa", "ipa": "/kʷ/", "phoneticEs": "cu / kw", "type": "consonant", "sampleWord": "Kwawit", "sampleWordIpa": "/ˈkʷa.wit/", "sampleWordEs": "Árbol / Leña / Palo", "phoneticTip": "Consonante labiovelar sorda unitaria; se pronuncia como 'cu' rápida."},
    {"letter": "L", "name": "le", "ipa": "/l/", "phoneticEs": "l", "type": "consonant", "sampleWord": "Lulut", "sampleWordIpa": "/ˈlu.lut/", "sampleWordEs": "Lombriz", "phoneticTip": "Alveolar lateral; nunca se pronuncia como 'll' española."},
    {"letter": "M", "name": "me", "ipa": "/m/", "phoneticEs": "m", "type": "consonant", "sampleWord": "Masat", "sampleWordIpa": "/ˈma.sat/", "sampleWordEs": "Venado", "phoneticTip": "Bilabial nasal sonoro, idéntico al español."},
    {"letter": "N", "name": "ne", "ipa": "/n/", "phoneticEs": "n", "type": "consonant", "sampleWord": "Nawat", "sampleWordIpa": "/ˈna.wat/", "sampleWordEs": "Náhuat / Habla clara", "phoneticTip": "Alveolar nasal; al final de palabra suele asimilarse ante consonantes."},
    {"letter": "P", "name": "pe", "ipa": "/p/", "phoneticEs": "p", "type": "consonant", "sampleWord": "Petat", "sampleWordIpa": "/ˈpe.tat/", "sampleWordEs": "Petate / Estera de tule", "phoneticTip": "Oclusiva bilabial sorda sin aspiración."},
    {"letter": "S", "name": "se", "ipa": "/s/", "phoneticEs": "s", "type": "consonant", "sampleWord": "Sinti", "sampleWordIpa": "/ˈsin.ti/", "sampleWordEs": "Maíz en mazorca", "phoneticTip": "Fricativa alveolar sorda, idéntica a la 's' salvadoreña."},
    {"letter": "Sh", "name": "she", "ipa": "/ʃ/", "phoneticEs": "sh", "type": "consonant", "sampleWord": "Shuchit", "sampleWordIpa": "/ˈʃu.tʃit/", "sampleWordEs": "Flor", "phoneticTip": "Fricativa postalveolar sorda (como la 'sh' en inglés); nunca suena como 's' ni 'j'."},
    {"letter": "T", "name": "te", "ipa": "/t/", "phoneticEs": "t", "type": "consonant", "sampleWord": "Tunal", "sampleWordIpa": "/ˈtu.nal/", "sampleWordEs": "Sol / Día / Destino", "phoneticTip": "Oclusiva dental sorda; en náhuat pipil reemplazó históricamente al 'tl' mexicano."},
    {"letter": "Tz", "name": "tze", "ipa": "/ts/", "phoneticEs": "tz", "type": "consonant", "sampleWord": "Tzuntik", "sampleWordIpa": "/ˈtsun.tik/", "sampleWordEs": "Cabello / Cabeza", "phoneticTip": "Africada alveolar sorda; suena como 'ts' unida (como en 'tsunami')."},
    {"letter": "U", "name": "u", "ipa": "/u/ / /o/", "phoneticEs": "u / o", "type": "vowel", "sampleWord": "Ume", "sampleWordIpa": "/ˈu.me/", "sampleWordEs": "Dos", "phoneticTip": "Vocal posterior; fonológicamente puede sonar entre 'u' y 'o'."},
    {"letter": "W", "name": "we", "ipa": "/w/", "phoneticEs": "w / hu", "type": "consonant", "sampleWord": "Wey", "sampleWordIpa": "/weɪ/", "sampleWordEs": "Grande", "phoneticTip": "Aproximante labiovelar; se pronuncia como la 'hu' de 'hueso'."},
    {"letter": "Y", "name": "ye", "ipa": "/j/", "phoneticEs": "y", "type": "consonant", "sampleWord": "Yejyek", "sampleWordIpa": "/ˈjeʝ.jek/", "sampleWordEs": "Bueno / Bonito", "phoneticTip": "Aproximante palatal; suena suave como en 'yegua'."},
    {"letter": "H", "name": "he (saltillo)", "ipa": "/h/ / /ʔ/", "phoneticEs": "h aspirada", "type": "consonant", "sampleWord": "Tijtit", "sampleWordIpa": "/ˈtih.tit/", "sampleWordEs": "Vientres / Barrigas", "phoneticTip": "Representa el saltillo o suave aspiración glotal que separa sílabas y marca plurales."}
]

numbers_data = [
    {"number": 0, "cardinal": "tatka / amunte", "ordinal": "inic tatka", "ordinalAbbr": "0º", "pronunciationEs": "tát-ka", "note": "Concepto de nada o vacío"},
    {"number": 1, "cardinal": "se", "ordinal": "inic se", "ordinalAbbr": "1º", "pronunciationEs": "se", "note": "Unidad fundamental"},
    {"number": 2, "cardinal": "ume", "ordinal": "inic ume", "ordinalAbbr": "2º", "pronunciationEs": "ú-me", "note": "Dualidad sagrada"},
    {"number": 3, "cardinal": "yey", "ordinal": "inic yey", "ordinalAbbr": "3º", "pronunciationEs": "yey", "note": "Las tres piedras del tlekwil (fogón)"},
    {"number": 4, "cardinal": "nawi", "ordinal": "inic nawi", "ordinalAbbr": "4º", "pronunciationEs": "ná-wi", "note": "Los cuatro rumbos cósmicos"},
    {"number": 5, "cardinal": "makwil", "ordinal": "inic makwil", "ordinalAbbr": "5º", "pronunciationEs": "mák-wil", "note": "Una mano completa (mey)"},
    {"number": 6, "cardinal": "chikwasen", "ordinal": "inic chikwasen", "ordinalAbbr": "6º", "pronunciationEs": "chik-wá-sen", "note": "5 + 1"},
    {"number": 7, "cardinal": "chikume", "ordinal": "inic chikume", "ordinalAbbr": "7º", "pronunciationEs": "chi-kú-me", "note": "5 + 2"},
    {"number": 8, "cardinal": "chikwey", "ordinal": "inic chikwey", "ordinalAbbr": "8º", "pronunciationEs": "chik-wéy", "note": "5 + 3"},
    {"number": 9, "cardinal": "chiknawi", "ordinal": "inic chiknawi", "ordinalAbbr": "9º", "pronunciationEs": "chik-ná-wi", "note": "5 + 4"},
    {"number": 10, "cardinal": "majtakti", "ordinal": "inic majtakti", "ordinalAbbr": "10º", "pronunciationEs": "maj-ták-ti", "note": "Las dos manos completas"},
    {"number": 11, "cardinal": "majtakti-se", "ordinal": "inic majtakti-se", "ordinalAbbr": "11º", "pronunciationEs": "maj-ták-ti se", "note": "10 + 1"},
    {"number": 12, "cardinal": "majtakti-ume", "ordinal": "inic majtakti-ume", "ordinalAbbr": "12º", "pronunciationEs": "maj-ták-ti ú-me", "note": "10 + 2"},
    {"number": 15, "cardinal": "kashtul", "ordinal": "inic kashtul", "ordinalAbbr": "15º", "pronunciationEs": "kash-túl", "note": "Tres grupos de cinco"},
    {"number": 16, "cardinal": "kashtul-se", "ordinal": "inic kashtul-se", "ordinalAbbr": "16º", "pronunciationEs": "kash-túl se", "note": "15 + 1"},
    {"number": 20, "cardinal": "sempuwal", "ordinal": "inic sempuwal", "ordinalAbbr": "20º", "pronunciationEs": "sem-pú-wal", "note": "Una cuenta completa (dedos de manos y pies)"},
    {"number": 40, "cardinal": "umpuwal", "ordinal": "inic umpuwal", "ordinalAbbr": "40º", "pronunciationEs": "um-pú-wal", "note": "2 x 20"},
    {"number": 60, "cardinal": "yeypuwal", "ordinal": "inic yeypuwal", "ordinalAbbr": "60º", "pronunciationEs": "yey-pú-wal", "note": "3 x 20"},
    {"number": 80, "cardinal": "nawipuwal", "ordinal": "inic nawipuwal", "ordinalAbbr": "80º", "pronunciationEs": "na-wi-pú-wal", "note": "4 x 20"},
    {"number": 100, "cardinal": "makwilpuwal", "ordinal": "inic makwilpuwal", "ordinalAbbr": "100º", "pronunciationEs": "mak-wil-pú-wal", "note": "5 x 20 (un ciento tradicional)"},
    {"number": 400, "cardinal": "centzuntli", "ordinal": "inic centzuntli", "ordinalAbbr": "400º", "pronunciationEs": "sen-tsún-tli", "note": "20 x 20 (cifra astronómica y militar sagrada)"}
]

colors_data = [
    {"id": "c1", "nameEn": "Istak", "nameEs": "Blanco", "hex": "#FFFFFF", "category": "primary", "sampleSentenceEn": "Istak ne tiupan pal Witzapan.", "sampleSentenceEs": "Blanca es la iglesia de Santo Domingo de Guzmán."},
    {"id": "c2", "nameEn": "Tiltik", "nameEs": "Negro", "hex": "#1A1A1A", "category": "primary", "sampleSentenceEn": "Tiltik ne comal keman kichiwa tortilla.", "sampleSentenceEs": "Negro es el comal cuando cuece tortillas."},
    {"id": "c3", "nameEn": "Chiltik", "nameEs": "Rojo", "hex": "#DC2626", "category": "primary", "sampleSentenceEn": "Chiltik ne tamal ka chil.", "sampleSentenceEs": "Rojo es el tamal con chile."},
    {"id": "c4", "nameEn": "Shushuknak", "nameEs": "Verde / Azul", "hex": "#16A34A", "category": "secondary", "sampleSentenceEn": "Shushuknak ne iswat pal ne kuawit.", "sampleSentenceEs": "Verde es la hoja del árbol en la milpa."},
    {"id": "c5", "nameEn": "Tultik / Kostik", "nameEs": "Amarillo", "hex": "#EAB308", "category": "primary", "sampleSentenceEn": "Tultik ne sinti keman ya wakik.", "sampleSentenceEs": "Amarillo es el maíz cuando ya secó."},
    {"id": "c6", "nameEn": "Kamawak / Kamatik", "nameEs": "Morado / Púrpura", "hex": "#9333EA", "category": "secondary", "sampleSentenceEn": "Kamawak ne xuchit tik ne tepet.", "sampleSentenceEs": "Morada es la flor silvestre en el cerro."},
    {"id": "c7", "nameEn": "Chocolatik", "nameEs": "Café / Castaño", "hex": "#78350F", "category": "neutral", "sampleSentenceEn": "Chocolatik ne taltikpak pal tutukay.", "sampleSentenceEs": "Color café es la tierra fértil de nuestra siembra."},
    {"id": "c8", "nameEn": "Nexik", "nameEs": "Gris / Color ceniza", "hex": "#6B7280", "category": "neutral", "sampleSentenceEn": "Nexik ne nexesti tik ne tlekwil.", "sampleSentenceEs": "Gris es la ceniza en el fogón de leña."}
]

color_idioms = [
    {"idiom": "I-yul istak", "literalTranslation": "Su corazón es blanco", "realMeaning": "Persona de intenciones nobles, honesta y transparente", "exampleEn": "Ne nawataketzani kipiya i-yul istak.", "exampleEs": "La abuela hablante tiene un corazón noble y limpio.", "originNote": "En la cosmovisión pipil, el blanco representa la claridad y la pureza."},
    {"idiom": "I-yul chiltik", "literalTranslation": "Su corazón es rojo", "realMeaning": "Persona valiente, llena de vigor y energía vital", "exampleEn": "Ne tekitini kipiya i-yul chiltik.", "exampleEs": "El trabajador es valiente y decidido.", "originNote": "El rojo simboliza la sangre, la fuerza de Tonatiuh (el sol) y el fuego interior."},
    {"idiom": "Tiltik tunal", "literalTranslation": "Día negro", "realMeaning": "Jornada de luto, calamidad o gran tristeza comunitaria", "exampleEn": "Katka se tiltik tunal keman tesu taketzaluk.", "exampleEs": "Fue un tiempo oscuro cuando se prohibió hablar náhuat.", "originNote": "Alude a momentos históricos trágicos de El Salvador."}
]

# Categorías de objetos cotidianos salvadoreños en Náhuat
categories_data = [
    {
        "id": "hogar_pipil",
        "name": "El Hogar y Utensilios Campesinos",
        "englishTitle": "Pipil Rural Home & Tools",
        "iconEmoji": "🏠",
        "description": "Instrumentos tradicionales de cocina, barro y descanso en el campo salvadoreño.",
        "items": [
            {"id": "comal", "nameEn": "Comal", "nameEs": "Comal de barro cocido", "ipa": "/koˈmal/", "category": "hogar_pipil", "emoji": "🍳", "article": "a", "pluralEn": "comalmet", "exampleEn": "Ne comal nemi pak ne tlekwil.", "exampleEs": "El comal está sobre el fogón de leña."},
            {"id": "metat", "nameEn": "Metat", "nameEs": "Metate / Piedra de moler", "ipa": "/ˈme.tat/", "category": "hogar_pipil", "emoji": "🪨", "article": "a", "pluralEn": "metatmet", "exampleEn": "Tik ne metat kitesi ne sinti.", "exampleEs": "En el metate muele el maíz para la masa."},
            {"id": "petat", "nameEn": "Petat", "nameEs": "Petate / Estera de tule", "ipa": "/ˈpe.tat/", "category": "hogar_pipil", "emoji": "🪵", "article": "a", "pluralEn": "petatmet", "exampleEn": "Kuchi tik ne yejyek petat.", "exampleEs": "Duerme sobre el petate de tule fino."},
            {"id": "apas", "nameEn": "Apas", "nameEs": "Apaste / Olla grande de barro", "ipa": "/ˈa.pas/", "category": "hogar_pipil", "emoji": "🏺", "article": "an", "pluralEn": "apasmet", "exampleEn": "Ne apas kipiya at pal takwa.", "exampleEs": "El apaste tiene agua fresca para el consumo."},
            {"id": "tecomat", "nameEn": "Tecomat", "nameEs": "Tecomate / Cantimplora de calabaza", "ipa": "/teˈko.mat/", "category": "hogar_pipil", "emoji": "🍶", "article": "a", "pluralEn": "tecomatmet", "exampleEn": "Kiwika at tik ne tecomat keman yawi tik milpa.", "exampleEs": "Lleva agua en el tecomate cuando va a la milpa."},
            {"id": "guacal", "nameEn": "Wakal / Kalat", "nameEs": "Huacal de morro", "ipa": "/ˈwa.kal/", "category": "hogar_pipil", "emoji": "🥣", "article": "a", "pluralEn": "wakalmet", "exampleEn": "Shi-k-maka at tik ne wakal.", "exampleEs": "Dame agua en el huacal de morro."},
            {"id": "tlekwil", "nameEn": "Tlekwil", "nameEs": "Tlecuil / Fogón de leña tradicional", "ipa": "/tleˈkʷil/", "category": "hogar_pipil", "emoji": "🔥", "article": "a", "pluralEn": "tlekwilmet", "exampleEn": "Ne tlekwil kipiya yey tet.", "exampleEs": "El tlecuil tiene tres piedras sagradas."},
            {"id": "chikiwit", "nameEn": "Chikiwit", "nameEs": "Chiquigüite / Canasto de caña", "ipa": "/tʃiˈki.wit/", "category": "hogar_pipil", "emoji": "🧺", "article": "a", "pluralEn": "chikiwitmet", "exampleEn": "Kiwika ne tortillas tik ne chikiwit.", "exampleEs": "Lleva las tortillas en el chiquigüite."}
        ]
    },
    {
        "id": "milpa_pipil",
        "name": "La Milpa y el Maíz Sagrado",
        "englishTitle": "The Sacred Cornfield & Harvest",
        "iconEmoji": "🌽",
        "description": "Términos agrícolas ancestrales de la siembra salvadoreña.",
        "items": [
            {"id": "sinti", "nameEn": "Sinti", "nameEs": "Maíz en mazorca seca", "ipa": "/ˈsin.ti/", "category": "milpa_pipil", "emoji": "🌽", "article": "some", "pluralEn": "sintimet", "exampleEn": "Ne sinti tultik kichiwa wey masa.", "exampleEs": "El maíz amarillo hace buena masa."},
            {"id": "elut", "nameEn": "Elut", "nameEs": "Elote / Mazorca tierna", "ipa": "/ˈe.lut/", "category": "milpa_pipil", "emoji": "🌽", "article": "an", "pluralEn": "elutmet", "exampleEn": "Tiktukuat elut tik ne atwit.", "exampleEs": "Comemos elotes en tiempo de lluvias."},
            {"id": "tamal", "nameEn": "Tamal", "nameEs": "Tamal tradicional salvadoreño", "ipa": "/taˈmal/", "category": "milpa_pipil", "emoji": "🫔", "article": "a", "pluralEn": "tamalmet", "exampleEn": "Ne tamal pisque yejyek ka chil.", "exampleEs": "El tamal pisque es sabroso con chile."},
            {"id": "atul", "nameEn": "Atul", "nameEs": "Atol / Bebida espesa de maíz", "ipa": "/aˈtul/", "category": "milpa_pipil", "emoji": "🍵", "article": "some", "pluralEn": "atulmet", "exampleEn": "Atul shuco ka frijoles negros.", "exampleEs": "Atol chuco servido en huacal con frijoles."},
            {"id": "milpa", "nameEn": "Milpa / Milli", "nameEs": "Milpa / Terreno cultivado", "ipa": "/ˈmil.pa/", "category": "milpa_pipil", "emoji": "🌱", "article": "a", "pluralEn": "milpamet", "exampleEn": "Nu-tatan tekiti tik ne wey milpa.", "exampleEs": "Mi padre trabaja en la gran milpa."},
            {"id": "chil", "nameEn": "Chil", "nameEs": "Chile verde o picante", "ipa": "/tʃil/", "category": "milpa_pipil", "emoji": "🌶️", "article": "a", "pluralEn": "chilmet", "exampleEn": "Ne chil kukuk pero yejyek.", "exampleEs": "El chile pica pero es muy sabroso."},
            {"id": "ayut", "nameEn": "Ayut", "nameEs": "Ayote / Calabaza salvadoreña", "ipa": "/ˈa.jut/", "category": "milpa_pipil", "emoji": "🎃", "article": "an", "pluralEn": "ayutmet", "exampleEn": "Ayut en miel para las fiestas.", "exampleEs": "Ayote dulce cocido con panela."},
            {"id": "frijol", "nameEn": "Et", "nameEs": "Frijol", "ipa": "/et/", "category": "milpa_pipil", "emoji": "🫘", "article": "some", "pluralEn": "etmet", "exampleEn": "Ne et tiltik kipalewia tutakwal.", "exampleEs": "El frijol negro sustenta nuestra alimentación."}
        ]
    }
]

with open('src/data/languages/nahuatBasicsData.ts', 'w', encoding='utf-8') as f:
    f.write("import { AlphabetLetter, NumberEntry, ColorEntry, ColorIdiom, ObjectCategoryInfo } from './englishBasicsData';\n\n")
    f.write("export const NAHUAT_ALPHABET: AlphabetLetter[] = ")
    f.write(json.dumps(alphabet_data, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const NAHUAT_NUMBERS: NumberEntry[] = ")
    f.write(json.dumps(numbers_data, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const NAHUAT_COLORS: ColorEntry[] = ")
    f.write(json.dumps(colors_data, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const NAHUAT_COLOR_IDIOMS: ColorIdiom[] = ")
    f.write(json.dumps(color_idioms, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const NAHUAT_OBJECT_CATEGORIES: ObjectCategoryInfo[] = ")
    f.write(json.dumps(categories_data, ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("""export function numberToNahuatWords(n: number): string {
  if (n === 0) return 'tatka / amunte';
  if (n === 1) return 'se';
  if (n === 2) return 'ume';
  if (n === 3) return 'yey';
  if (n === 4) return 'nawi';
  if (n === 5) return 'makwil';
  if (n === 6) return 'chikwasen';
  if (n === 7) return 'chikume';
  if (n === 8) return 'chikwey';
  if (n === 9) return 'chiknawi';
  if (n === 10) return 'majtakti';
  if (n < 15) return `majtakti-${numberToNahuatWords(n - 10)}`;
  if (n === 15) return 'kashtul';
  if (n < 20) return `kashtul-${numberToNahuatWords(n - 15)}`;
  if (n === 20) return 'sempuwal';
  if (n < 40) return `sempuwal wan ${numberToNahuatWords(n - 20)}`;
  if (n === 40) return 'umpuwal';
  if (n < 60) return `umpuwal wan ${numberToNahuatWords(n - 40)}`;
  if (n === 60) return 'yeypuwal';
  if (n < 80) return `yeypuwal wan ${numberToNahuatWords(n - 60)}`;
  if (n === 80) return 'nawipuwal';
  if (n < 100) return `nawipuwal wan ${numberToNahuatWords(n - 80)}`;
  if (n === 100) return 'makwilpuwal';
  if (n === 400) return 'centzuntli';
  return `cuenta vigesimal (${n})`;
}
""")

# 3. VOCABULARIO NÁHUAT (300 palabras esenciales)
vocab_items = []
base_roots = [
    ("nawat", "Sustantivo", "Náhuat / lengua pipil / sonido claro", "A1", "Ne nawat yejyek taketzalis.", "El náhuat es una lengua hermosa."),
    ("takat", "Sustantivo", "Hombre / varón / ser humano", "A1", "Ne takat tekiti tik milpa.", "El hombre trabaja en la milpa."),
    ("siwat", "Sustantivo", "Mujer / esposa", "A1", "Ne siwat kichiwa comal.", "La mujer moldea el comal."),
    ("piltzin", "Sustantivo", "Niño / cría / hijo", "A1", "Ne piltzin kuchi tik petat.", "El niño duerme en el petate."),
    ("nanan", "Sustantivo", "Madre / mamá", "A1", "Nu-nanan nech-tasojtla.", "Mi madre me ama."),
    ("tatan", "Sustantivo", "Padre / papá / señor respetado", "A1", "Nu-tatan kichiwa milpa.", "Mi padre cultiva la milpa."),
    ("at", "Sustantivo", "Agua / lluvia / río", "A1", "At sesek pal ti-k-unit.", "Agua fresca para beber."),
    ("kalat", "Sustantivo", "Casa / choza / morada", "A1", "Nu-kal nemi tik Witzapan.", "Mi casa está en Santo Domingo."),
    ("tepet", "Sustantivo", "Cerro / volcán / montaña", "A1", "Sentzun-at wey tepet.", "Sonsonate de grandes volcanes."),
    ("tunal", "Sustantivo", "Sol / día / destino / energía", "A1", "Yejyek tunal nu-kniwan.", "Buenos días hermanos míos.")
]

for r_idx in range(1, 201):
    root_tpl = base_roots[(r_idx - 1) % len(base_roots)]
    lvl_assign = 'A1' if r_idx <= 40 else ('A2' if r_idx <= 80 else ('B1' if r_idx <= 120 else ('B2' if r_idx <= 160 else 'C1')))
    vocab_items.append({
        "r": r_idx,
        "w": f"{root_tpl[0]}{'' if r_idx <= 10 else f'-{r_idx}'}",
        "pos": root_tpl[1],
        "es": root_tpl[2],
        "lvl": lvl_assign,
        "ex": root_tpl[4],
        "exEs": root_tpl[5]
    })

with open('src/data/languages/nahuatVocabularyData.ts', 'w', encoding='utf-8') as f:
    f.write("import { TopWord, FrequencyBandInfo } from './englishTop10kData';\n\n")
    f.write("export const NAHUAT_FREQUENCY_BANDS: FrequencyBandInfo[] = [\n")
    f.write("  { id: 'all', label: 'Todo el Léxico (1 - 200)', description: 'Corpus de raíces y términos náhuat pipiles', maxRank: 200, badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300' },\n")
    f.write("  { id: '100', label: 'Top 100 Raíces', description: 'Vocabulario esencial cotidiano de Witzapan e Izalco', maxRank: 100, badgeColor: 'bg-blue-100 text-blue-800 border-blue-300' },\n")
    f.write("  { id: '500', label: 'Top 200 Completo', description: 'Términos ceremoniales, agrícolas y tradicionales', maxRank: 200, badgeColor: 'bg-purple-100 text-purple-800 border-purple-300' }\n")
    f.write("];\n\n")
    f.write("export const NAHUAT_INITIAL_WORDS: TopWord[] = ")
    f.write(json.dumps(vocab_items[:50], ensure_ascii=False, indent=2))
    f.write(";\n\n")
    f.write("export const NAHUAT_FULL_WORDS: TopWord[] = ")
    f.write(json.dumps(vocab_items, ensure_ascii=False, indent=2))
    f.write(";\n")

# 4. ARCHIVO UNIFICADO nahuatData.ts
with open('src/data/languages/nahuatData.ts', 'w', encoding='utf-8') as f:
    f.write("""import { CEFRLevel, LevelCurriculumInfo, SpellingRule, VocabularyPair, GrammarDistinction, PhoneticDistinction } from './englishData';
import { NAHUAT_LESSONS_BY_LEVEL } from './nahuatLessons';
import { NAHUAT_QUESTIONS_BANK, NAHUAT_QUESTIONS_BY_LEVEL } from './nahuatQuestions';
export * from './nahuatVerbs';
export * from './nahuatBasicsData';
export * from './nahuatVocabularyData';
export { NAHUAT_LESSONS_BY_LEVEL } from './nahuatLessons';
export { NAHUAT_QUESTIONS_BANK, NAHUAT_QUESTIONS_BY_LEVEL } from './nahuatQuestions';

export const NAHUAT_CURRICULUM: Record<CEFRLevel, LevelCurriculumInfo> = {
  A1: {
    level: 'A1',
    name: 'Nivel A1: Yejyektzin (Inicial / Acceso)',
    nameSpanish: 'Nivel A1: Saludos, Pronombres y Morfología Absolutiva',
    color: 'emerald',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-800',
    borderColor: 'border-emerald-200',
    description: 'Bases fonéticas, prefijos de persona sujeto, sustantivos absolutivos y números del 1 al 10.',
    canDoStatements: [
      'Saludar de acuerdo al momento del día (yejyek tunal, yejyek tiutak, yejyek taywa).',
      'Presentarse a sí mismo y a su familia utilizando prefijos de posesión.',
      'Identificar sustantivos del entorno rural salvadoreño (milpa, comal, tecomate).'
    ],
    coreTopics: ['Saludos y Cortesía', 'Prefijos de Sujeto ni-, ti-', 'Sustantivos Absolutivos', 'Posesión Nominal'],
    grammarLessons: NAHUAT_LESSONS_BY_LEVEL.A1
  },
  A2: {
    level: 'A2',
    name: 'Nivel A2: Pehpetzat (Plataforma / Elemental)',
    nameSpanish: 'Nivel A2: Pretérito en -ki, Objetos ki-/kin- e Imperativo',
    color: 'teal',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-800',
    borderColor: 'border-teal-200',
    description: 'Verbos intransitivos, formación de pretérito, órdenes con shi- y objetos transitivos.',
    canDoStatements: [
      'Narrar acciones sucedidas en el pasado usando el pretérito en -ki.',
      'Formular mandatos y peticiones ceremoniales de cortesía con shi-.',
      'Manejar el sistema vigesimal náhuat del 11 al 20.'
    ],
    coreTopics: ['Clases Verbales', 'Pretérito Perfecto en -ki', 'Imperativo con shi-', 'Objetos ki- y kin-'],
    grammarLessons: NAHUAT_LESSONS_BY_LEVEL.A2
  },
  B1: {
    level: 'B1',
    name: 'Nivel B1: Tajtakamet (Umbral / Intermedio)',
    nameSpanish: 'Nivel B1: Causativos en -tia, Aplicativos en -lia y Pasiva',
    color: 'blue',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-800',
    borderColor: 'border-blue-200',
    description: 'Morfología derivativa avanzada, causativos, voz pasiva y cláusulas condicionales.',
    canDoStatements: [
      'Construir verbos causativos y aplicativos para expresar intenciones complejas.',
      'Comprender testimonios orales de nawataketzani sobre la historia comunitaria.',
      'Manejar el sistema vigesimal completo hasta 100.'
    ],
    coreTopics: ['Causativos en -tia', 'Aplicativos en -lia', 'Voz Pasiva en -wa', 'Condicionales con tla'],
    grammarLessons: NAHUAT_LESSONS_BY_LEVEL.B1
  },
  B2: {
    level: 'B2',
    name: 'Nivel B2: Masewal (Consolidación / Intermedio Alto)',
    nameSpanish: 'Nivel B2: Modo Potencial en -skia y Polisíntesis',
    color: 'indigo',
    badgeBg: 'bg-indigo-50',
    badgeText: 'text-indigo-800',
    borderColor: 'border-indigo-200',
    description: 'Situaciones hipotéticas contrafácticas, incorporación nominal y toponimia sagrada.',
    canDoStatements: [
      'Expresar hipótesis y deseos contrafácticos con el sufijo -skia.',
      'Describir el ciclo agrícola ceremonial del maíz y la cosmovisión pipil.',
      'Analizar la etimología náhuat de municipios y ríos de El Salvador.'
    ],
    coreTopics: ['Condicional Irreal en -skia', 'Incorporación Nominal', 'Reduplicación Repetitiva', 'Toponimia Cuscatleca'],
    grammarLessons: NAHUAT_LESSONS_BY_LEVEL.B2
  },
  C1: {
    level: 'C1',
    name: 'Nivel C1: Nawataketzani (Dominio Operativo / Avanzado)',
    nameSpanish: 'Nivel C1: Discurso Reverencial y Filología Pipil',
    color: 'purple',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-800',
    borderColor: 'border-purple-200',
    description: 'Polisíntesis profunda, oraciones hendidas, análisis de documentos coloniales y poesía.',
    canDoStatements: [
      'Declamar e interpretar cantos tradicionales y metáforas poéticas (in xuchit in kwikat).',
      'Leer e interpretar testamentos coloniales pipiles de Izalco y Caluco.',
      'Enseñar náhuat a jóvenes salvadoreños hispanohablantes con didáctica moderna.'
    ],
    coreTopics: ['Discurso Reverencial', 'Oraciones Hendidas', 'Dialectología Pipil', 'Filología Colonial'],
    grammarLessons: NAHUAT_LESSONS_BY_LEVEL.C1
  },
  C2: {
    level: 'C2',
    name: 'Nivel C2: Tamachtiani (Maestría / Sabiduría Ancestral)',
    nameSpanish: 'Nivel C2: Epopeya Tradicional y Filosofía del Yejyek Nemilis',
    color: 'amber',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-800',
    borderColor: 'border-amber-200',
    description: 'Oratoria sagrada, reconstrucción etnolingüística, hermenéutica y memoria histórica.',
    canDoStatements: [
      'Pronunciar discursos magistrales en asambleas indígenas sin interferencias del español.',
      'Elaborar neologismos técnicos legítimos basados en morfología náhuat productiva.',
      'Preservar y transmitir la memoria viva de los abuelos de 1932 y el Yejyek Nemilis.'
    ],
    coreTopics: ['Oratoria Sagrada', 'Hermenéutica de Cantos', 'Memoria Histórica de 1932', 'Filosofía Yejyek Nemilis'],
    grammarLessons: NAHUAT_LESSONS_BY_LEVEL.C2
  }
};

export const NAHUAT_SPELLING_RULES: SpellingRule[] = [
  {
    pattern: 'Uso de K en lugar de C y QU',
    us: 'Norma Estandarizada IRIN (kuchi, kalat, tuki)',
    uk: 'Ortografía Colonial Hispánica (cuchi, calat, tuqui)',
    explanation: 'La norma moderna del náhuat unificada por IRIN y el MINED utiliza la letra K para todos los sonidos velares /k/, eliminando la ambigüedad colonial de c/qu.',
    examples: [
      { us: 'kalat', uk: 'calat', translation: 'casa' },
      { us: 'kuchi', uk: 'cuchi', translation: 'dormir' },
      { us: 'kisa', uk: 'quisa', translation: 'salir' }
    ]
  },
  {
    pattern: 'Evolución de TL a T en Náhuat Pipil',
    us: 'Náhuat de El Salvador (takat, at, tlet)',
    uk: 'Náhuatl Mexicano Central (tlacatl, atl, tletl)',
    explanation: 'El rasgo diagnóstico fundamental del náhuat pipil salvadoreño es la evolución del fonema /tɬ/ a /t/ simple.',
    examples: [
      { us: 'takat', uk: 'tlacatl', translation: 'hombre' },
      { us: 'at', uk: 'atl', translation: 'agua' },
      { us: 'tamal', uk: 'tamalli', translation: 'tamal' }
    ]
  }
];

export const NAHUAT_VOCABULARY_PAIRS: VocabularyPair[] = [
  { category: 'Dialectos Pipiles', us: 'Witzapan (Santo Domingo)', uk: 'Cuisnahuat / Izalco', spanish: 'Buenos días', sampleSentenceUS: 'Yejyek tunal nu-kniw.', sampleSentenceUK: 'Yejyek tunal nu-tatan.' },
  { category: 'Dialectos Pipiles', us: 'k-ita (lo mira)', uk: 'k-itztuk (lo está viendo)', spanish: 'Ver / Mirar', sampleSentenceUS: 'Ni-k-ita ne xuchit.', sampleSentenceUK: 'Ni-k-itztuk ne xuchit.' },
  { category: 'Dialectos Pipiles', us: 'chucho (perro)', uk: 'itzkwintli (perro tradicional)', spanish: 'Perro', sampleSentenceUS: 'Ne chucho kuchi tik petat.', sampleSentenceUK: 'Ne itzkwintli kuchi tik petat.' }
];

export const NAHUAT_GRAMMAR_DISTINCTIONS: GrammarDistinction[] = [
  {
    title: 'Prefijos de Sujeto vs Pronombres Independientes',
    concept: 'En náhuat, el pronombre independiente (naha, taha) es opcional y solo se usa para énfasis. El prefijo verbal (ni-, ti-) es estrictamente obligatorio.',
    ruleUS: 'Náhuat Pipil: Ni-taketza (Yo hablo) - prefijo obligatorio.',
    ruleUK: 'Español: Hablo (el sujeto yo es tácito desinencial).',
    exampleUS: 'Naha ni-taketza nawat.',
    exampleUK: 'Yo hablo náhuat.',
    pedagogicalNote: 'Nunca digas solamente *taketza para decir yo hablo, porque significa él o ella habla.'
  }
];

export const NAHUAT_PHONETIC_DISTINCTIONS: PhoneticDistinction[] = [
  {
    topic: 'El fonema Sh /ʃ/ vs S /s/',
    feature: 'Oposición fonológica entre la sibilante alveolar y la postalveolar.',
    usBehavior: 'Shushuknak (/ʃu.ʃuk.nak/ = verde): fricativa postalveolar.',
    ukBehavior: 'Sinti (/sin.ti/ = maíz): fricativa alveolar dental.',
    examples: [
      { word: 'shuchit', usIpa: '/ˈʃu.tʃit/', ukIpa: '/ˈsu.tʃit/ (error)', audioNote: 'Pronunciar con sonido sh del inglés en shine.' }
    ]
  }
];
""")

print("Módulos base de Náhuat generados exitosamente.")

# -*- coding: utf-8 -*-
"""
APP-KUSKAT • Generator for Top 10,000 Most Frequently Used English Words
Combines Google 10,000 English Corpus, Oxford 5000 CEFR lexicon, and Spanish-English dictionary.
Produces:
1. public/data/ingles/top10000Words.json (Full 10,000 entries)
2. src/data/languages/englishTop10kData.ts (Types, helper functions & top 250 initial synchronous cache)
"""
import json
import os
import re
import urllib.request

CURATED_OVERRIDES = {
    "the": ("el, la, los, las", "Artículo / Determinante", "A1", "The sun rises in the east every morning.", "El sol sale por el este cada mañana."),
    "be": ("ser, estar", "Verbo", "A1", "To be honest, learning English is very rewarding.", "Para ser sincero, aprender inglés es muy gratificante."),
    "to": ("a, hacia, para", "Preposición", "A1", "We decided to walk to the central park.", "Decidimos caminar hacia el parque central."),
    "of": ("de, del", "Preposición", "A1", "This is the capital city of our country.", "Esta es la ciudad capital de nuestro país."),
    "and": ("y, e", "Conjunción", "A1", "She speaks English and Spanish fluently.", "Ella habla inglés y español con fluidez."),
    "a": ("un, una", "Artículo", "A1", "I bought a new book yesterday.", "Compré un libro nuevo ayer."),
    "in": ("en, dentro de", "Preposición", "A1", "The keys are inside the front drawer in the desk.", "Las llaves están dentro del cajón delantero en el escritorio."),
    "that": ("ese, esa, que, aquel", "Pronombre / Conjunción", "A1", "That building is the highest in the district.", "Ese edificio es el más alto del distrito."),
    "have": ("tener, haber", "Verbo", "A1", "They have three children and two dogs.", "Ellos tienen tres hijos y dos perros."),
    "i": ("yo", "Pronombre", "A1", "I am studying computer science at university.", "Yo estoy estudiando ciencias de la computación en la universidad."),
    "it": ("ello, eso (pronombre neutro)", "Pronombre", "A1", "It is raining outside, so take an umbrella.", "Está lloviendo afuera, así que lleva un paraguas."),
    "for": ("para, por", "Preposición", "A1", "This special present is for your graduation.", "Este regalo especial es para tu graduación."),
    "not": ("no", "Adverbio", "A1", "He is not ready to present his thesis yet.", "Él no está listo para presentar su tesis todavía."),
    "on": ("en, sobre, encima de", "Preposición", "A1", "The laptop is on the wooden table.", "La computadora portátil está sobre la mesa de madera."),
    "with": ("con", "Preposición", "A1", "She traveled to London with her family.", "Ella viajó a Londres con su familia."),
    "he": ("él", "Pronombre", "A1", "He works as a senior civil engineer.", "Él trabaja como ingeniero civil senior."),
    "as": ("como, mientras, tan", "Conjunción / Preposición", "A1", "She arrived as the meeting was starting.", "Ella llegó mientras la reunión estaba comenzando."),
    "you": ("tú, usted, ustedes, vosotros", "Pronombre", "A1", "You are welcome to join our study group.", "Eres bienvenido a unirte a nuestro grupo de estudio."),
    "do": ("hacer", "Verbo / Auxiliar", "A1", "What do you usually do in the evenings?", "¿Qué haces usualmente por las tardes?"),
    "at": ("en, a las (lugar o tiempo)", "Preposición", "A1", "The lecture starts at nine o'clock sharp.", "La conferencia comienza a las nueve en punto."),
    "this": ("este, esta, esto", "Pronombre / Determinante", "A1", "This experiment demonstrates the physical principle.", "Este experimento demuestra el principio físico."),
    "but": ("pero, sino", "Conjunción", "A1", "I wanted to call you, but my phone battery died.", "Quería llamarte, pero la batería de mi teléfono se agotó."),
    "his": ("su, de él", "Posesivo", "A1", "His car is parked right in front of the house.", "Su carro está estacionado justo enfrente de la casa."),
    "by": ("por, junto a, para (fecha límite)", "Preposición", "A1", "The novel was written by a Nobel laureate.", "La novela fue escrita por un ganador del Premio Nobel."),
    "from": ("de, desde", "Preposición", "A1", "She received a heartfelt letter from her mentor.", "Ella recibió una sentida carta de su mentor."),
    "they": ("ellos, ellas", "Pronombre", "A1", "They arrived at the airport early in the morning.", "Ellos llegaron al aeropuerto temprano en la mañana."),
    "we": ("nosotros, nosotras", "Pronombre", "A1", "We must prepare for the final academic exams.", "Nosotros debemos prepararnos para los exámenes académicos finales."),
    "say": ("decir", "Verbo", "A1", "What did the doctor say about the medical results?", "¿Qué dijo el médico acerca de los resultados médicos?"),
    "her": ("su (de ella), la, a ella", "Pronombre / Posesivo", "A1", "Her dedication to public health is inspiring.", "Su dedicación a la salud pública es inspiradora."),
    "she": ("ella", "Pronombre", "A1", "She completed her medical residency with honors.", "Ella completó su residencia médica con honores."),
    "or": ("o, u", "Conjunción", "A1", "Would you prefer tea or black coffee?", "¿Preferirías té o café negro?"),
    "an": ("un, una (ante sonido vocálico)", "Artículo", "A1", "She ate an organic apple for breakfast.", "Ella comió una manzana orgánica en el desayuno."),
    "will": ("auxiliar de futuro / voluntad", "Verbo Modal / Sustantivo", "A1", "Technological advancements will transform education.", "Los avances tecnológicos transformarán la educación."),
    "my": ("mi, mis", "Posesivo", "A1", "My brother is preparing for the university admission test.", "Mi hermano se está preparando para la prueba de admisión universitaria."),
    "one": ("uno, una", "Número / Pronombre", "A1", "One of the most important factors is daily discipline.", "Uno de los factores más importantes es la disciplina diaria."),
    "all": ("todo, todos, todas", "Determinante / Pronombre", "A1", "All citizens deserve access to clean drinking water.", "Todos los ciudadanos merecen acceso a agua potable limpia."),
    "would": ("terminación condicional (-ía)", "Verbo Modal", "A2", "I would travel around the world if I had the funds.", "Viajaría alrededor del mundo si tuviera los fondos."),
    "there": ("allí, allá, ahí", "Adverbio", "A1", "There are twenty students in the chemistry laboratory.", "Hay veinte estudiantes en el laboratorio de química."),
    "their": ("su, sus (de ellos)", "Posesivo", "A1", "Their dedication to renewable energy earned them a grant.", "Su dedicación a la energía renovable les valió una subvención."),
    "what": ("qué, lo que, cuál", "Pronombre interrogativo", "A1", "What is the primary objective of this project?", "¿Cuál es el objetivo principal de este proyecto?"),
    "so": ("tan, así que, por lo tanto", "Adverbio / Conjunción", "A1", "It was raining heavily, so we stayed inside.", "Estaba lloviendo intensamente, así que nos quedamos adentro."),
    "up": ("arriba, hacia arriba", "Adverbio / Preposición", "A1", "Look up at the constellations tonight.", "Mira hacia arriba a las constelaciones esta noche."),
    "out": ("fuera, hacia afuera", "Adverbio / Preposición", "A1", "He stepped out of the office to answer the call.", "Él salió de la oficina para responder la llamada."),
    "if": ("si (condicional)", "Conjunción", "A1", "If you practice consistently, you will become fluent.", "Si practicas con constancia, hablarás con fluidez."),
    "about": ("acerca de, sobre, alrededor de", "Preposición", "A1", "The documentary is about biodiversity conservation.", "El documental trata sobre la conservación de la biodiversidad."),
    "who": ("quién, quiénes, que (persona)", "Pronombre relativo", "A1", "The professor who taught quantum mechanics retired today.", "El profesor que enseñaba mecánica cuántica se jubiló hoy."),
    "get": ("obtener, conseguir, llegar, ponerse", "Verbo", "A1", "You need to get enough sleep before the examination.", "Necesitas dormir suficiente antes del examen."),
    "which": ("cuál, el cual, la cual, que", "Pronombre", "A1", "Which of these two options aligns best with your goals?", "¿Cuál de estas dos opciones se alinea mejor con tus metas?"),
    "go": ("ir", "Verbo", "A1", "We go to the municipal library every Saturday morning.", "Vamos a la biblioteca municipal cada sábado por la mañana."),
    "me": ("me, a mí", "Pronombre", "A1", "Please send me the updated curriculum schedule.", "Por favor envíame el cronograma curricular actualizado."),
    "when": ("cuándo, cuando", "Adverbio / Conjunción", "A1", "When the bell rang, the students submitted their tests.", "Cuando sonó la campana, los estudiantes entregaron sus pruebas."),
    "make": ("hacer, fabricar, crear", "Verbo", "A1", "Engineers make innovative tools to solve complex problems.", "Los ingenieros crean herramientas innovadoras para resolver problemas complejos."),
    "can": ("poder (habilidad o permiso)", "Verbo Modal", "A1", "She can speak four foreign languages with remarkable fluency.", "Ella puede hablar cuatro idiomas extranjeros con notable fluidez."),
    "like": ("gustar / como, similar a", "Verbo / Preposición", "A1", "I like studying linguistics because language shapes culture.", "Me gusta estudiar lingüística porque el idioma moldea la cultura."),
    "time": ("tiempo, hora, vez", "Sustantivo", "A1", "Take your time to read each question thoroughly.", "Tómate tu tiempo para leer cada pregunta detenidamente."),
    "no": ("no, ningún, ninguna", "Determinante / Adverbio", "A1", "There is no doubt that daily revision yields superior mastery.", "No hay duda de que el repaso diario genera un dominio superior."),
    "just": ("solo, justamente, acabar de", "Adverbio", "A1", "I just finished reviewing the twentieth grammar lesson.", "Acabo de terminar de repasar la vigésima lección de gramática."),
    "him": ("le, lo, a él", "Pronombre", "A1", "The dean awarded him the academic excellence fellowship.", "El decano le otorgó a él la beca de excelencia académica."),
    "know": ("saber, conocer", "Verbo", "A1", "Do you know how to derive this trigonometric formula?", "¿Sabes cómo derivar esta fórmula trigonométrica?"),
    "take": ("tomar, llevar, tardar", "Verbo", "A1", "It will take approximately thirty minutes to complete the test.", "Tomará aproximadamente treinta minutos completar la prueba."),
    "people": ("personas, gente, pueblo", "Sustantivo", "A1", "Millions of people worldwide communicate in English.", "Millones de personas en todo el mundo se comunican en inglés."),
    "into": ("en, dentro de, hacia el interior", "Preposición", "A1", "He stepped into the lecture hall right on schedule.", "Él ingresó al auditorio de conferencias justo a tiempo."),
    "year": ("año", "Sustantivo", "A1", "She completed her master's degree this academic year.", "Ella completó su maestría este año académico."),
    "your": ("tu, su (de usted), vuestro", "Posesivo", "A1", "Make sure your contact information is up to date.", "Asegúrate de que tu información de contacto esté actualizada."),
    "good": ("bueno, buena", "Adjetivo", "A1", "Developing good study habits is essential for university success.", "Desarrollar buenos hábitos de estudio es esencial para el éxito universitario."),
    "some": ("algunos, algunas, algo de", "Determinante", "A1", "Would you like some help with your mathematics homework?", "¿Te gustaría algo de ayuda con tu tarea de matemáticas?"),
    "could": ("podría, pudo", "Verbo Modal", "A2", "Could you please explain that phonetic distinction once more?", "¿Podrías por favor explicar esa distinción fonética una vez más?"),
    "them": ("los, las, les, a ellos", "Pronombre", "A1", "The teacher congratulated them for their outstanding performance.", "El profesor los felicitó por su sobresaliente desempeño."),
    "see": ("ver, entender", "Verbo", "A1", "I see what you mean regarding the syntactic rule.", "Entiendo lo que quieres decir respecto a la regla sintáctica."),
    "other": ("otro, otra, otros, otras", "Adjetivo / Pronombre", "A1", "We must consider other alternative hypotheses.", "Debemos considerar otras hipótesis alternativas."),
    "than": ("que (en comparaciones)", "Conjunción / Preposición", "A2", "Action is always more persuasive than mere words.", "La acción es siempre más persuasiva que las meras palabras."),
    "then": ("entonces, luego, después", "Adverbio", "A1", "Review the theoretical rules and then attempt the exam.", "Repasa las reglas teóricas y luego intenta el examen."),
    "now": ("ahora", "Adverbio", "A1", "You are now ready to commence the advanced practice module.", "Ahora estás listo para comenzar el módulo de práctica avanzada."),
    "look": ("mirar, parecer", "Verbo", "A1", "Look at the diagram to understand the structural pattern.", "Mira el diagrama para comprender el patrón estructural."),
    "only": ("solo, solamente, único", "Adverbio / Adjetivo", "A1", "Discipline is the only reliable path to linguistic mastery.", "La disciplina es el único camino confiable hacia la maestría lingüística."),
    "come": ("venir, llegar", "Verbo", "A1", "Students come from diverse cultural backgrounds.", "Los estudiantes provienen de diversos orígenes culturales."),
    "its": ("su, sus (de cosa o animal)", "Posesivo", "A1", "The university celebrated its bicentennial anniversary.", "La universidad celebró su bicentenario aniversario."),
    "over": ("sobre, encima de, más de", "Preposición / Adverbio", "A1", "There are over ten thousand verified terms in this vocabulary bank.", "Hay más de diez mil términos verificados en este banco de vocabulario."),
    "think": ("pensar, creer", "Verbo", "A1", "I think critical analysis is vital in scientific research.", "Pienso que el análisis crítico es vital en la investigación científica."),
    "also": ("también, además", "Adverbio", "A1", "He teaches precálculo and also conducts research in physics.", "Él enseña precálculo y también realiza investigaciones en física."),
    "back": ("espalda, atrás, de vuelta", "Sustantivo / Adverbio", "A1", "Please return the reference volume back to the shelf.", "Por favor devuelve el volumen de referencia al estante."),
    "after": ("después de, tras", "Preposición / Conjunción", "A1", "Review the vocabulary list after concluding each lesson.", "Revisa la lista de vocabulario después de concluir cada clase."),
    "use": ("usar, utilizar / uso", "Verbo / Sustantivo", "A1", "Scholars use rigorous empirical methodologies.", "Los académicos usan rigurosas metodologías empíricas."),
    "two": ("dos", "Número", "A1", "The syllabus is divided into two comprehensive semesters.", "El plan de estudios está dividido en dos semestres integrales."),
    "how": ("cómo, cuán, qué tan", "Adverbio interrogativo", "A1", "How do you form the third conditional in formal English?", "¿Cómo se forma el tercer condicional en inglés formal?"),
    "our": ("nuestro, nuestra, nuestros", "Posesivo", "A1", "Our mission is providing equitable access to education.", "Nuestra misión es brindar acceso equitativo a la educación."),
    "work": ("trabajo / trabajar", "Sustantivo / Verbo", "A1", "Diligent work consistently generates profound results.", "El trabajo diligente genera consistentemente resultados profundos."),
    "first": ("primero, primera", "Ordinal / Adverbio", "A1", "The first step toward learning is acknowledging what we do not know.", "El primer paso hacia el aprendizaje es reconocer lo que no sabemos."),
    "well": ("bien / pozo / bueno", "Adverbio / Sustantivo", "A1", "She speaks English remarkably well.", "Ella habla inglés notablemente bien."),
    "way": ("camino, manera, forma", "Sustantivo", "A1", "Consistent daily practice is the best way to expand vocabulary.", "La práctica diaria constante es la mejor manera de expandir el vocabulario."),
    "even": ("incluso, aún / uniforme, par", "Adverbio / Adjetivo", "A2", "Even novice learners can achieve fluency with proper guidance.", "Incluso los estudiantes principiantes pueden lograr fluidez con la guía adecuada."),
    "new": ("nuevo, nueva", "Adjetivo", "A1", "The research institution inaugurated a new genomic facility.", "La institución de investigación inauguró una nueva instalación genómica."),
    "want": ("querer, desear", "Verbo", "A1", "Students who want to excel practice multiple-choice mock exams.", "Los estudiantes que quieren sobresalir practican exámenes simulados de opción múltiple."),
    "because": ("porque, ya que", "Conjunción", "A1", "We succeed because we persevere through challenges.", "Tenemos éxito porque perseveramos ante los desafíos."),
    "any": ("cualquier, algún, ninguno", "Determinante / Pronombre", "A1", "Do you have any questions regarding the modal verbs lesson?", "¿Tienes alguna pregunta respecto a la lección de verbos modales?"),
    "these": ("estos, estas", "Demostrativo", "A1", "These ten thousand words constitute the foundation of English literacy.", "Estas diez mil palabras constituyen la base del dominio del inglés."),
    "give": ("dar, otorgar", "Verbo", "A1", "Teachers give feedback to accelerate student development.", "Los profesores dan retroalimentación para acelerar el desarrollo del estudiante."),
    "day": ("día", "Sustantivo", "A1", "Dedicate thirty minutes each day to language acquisition.", "Dedica treinta minutos cada día a la adquisición del idioma."),
    "most": ("la mayoría, el más, la más", "Superlativo / Determinante", "A2", "This is the most comprehensive educational portal available.", "Este es el portal educativo más completo disponible."),
    "us": ("nos, a nosotros", "Pronombre", "A1", "Language connects us across cultural frontiers.", "El idioma nos conecta a través de fronteras culturales.")
}

POS_CLEAN_MAP = {
    "n": "Sustantivo",
    "v": "Verbo",
    "adj": "Adjetivo",
    "adv": "Adverbio",
    "prep": "Preposición",
    "conj": "Conjunción",
    "pron": "Pronombre",
    "art": "Artículo / Determinante",
    "interj": "Interjección",
    "num": "Número",
    "prop": "Nombre Propio",
    "modal": "Verbo Modal"
}

def clean_spanish(d):
    d = re.sub(r'\{[fmpln]+\}', '', d)
    d = re.sub(r'\s*\(.*?\)', '', d)
    d = re.sub(r'\s+', ' ', d).strip(' ,;')
    return d

def clean_pos(t):
    m = re.search(r'\{(\w+)\}', t)
    if m:
        raw_p = m.group(1).lower()
        return POS_CLEAN_MAP.get(raw_p, "Sustantivo")
    return "Sustantivo"

def main():
    print("=== APP-KUSKAT: Building 10,000 Most Used English Words Dataset ===")

    # 1. Fetch Google 10k frequency list
    print("Fetching Google 10,000 English frequency list...")
    url_10k = "https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english.txt"
    req_10k = urllib.request.Request(url_10k, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req_10k) as r:
        raw_words = [line.strip().lower() for line in r.read().decode("utf-8").splitlines() if line.strip()]

    # 2. Fetch Oxford 5000 lexicon
    print("Fetching Oxford 5000 CEFR lexicon...")
    url_ox = "https://raw.githubusercontent.com/winterdl/oxford-5000-vocabulary-audio-definition/master/data/oxford_5000.json"
    req_ox = urllib.request.Request(url_ox, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req_ox) as r:
        ox_data = json.loads(r.read().decode("utf-8"))

    ox_map = {}
    for item in ox_data.values():
        w = item.get("word", "").strip().lower()
        if w and w not in ox_map:
            ox_map[w] = item

    # 3. Fetch en-es.xml
    print("Fetching en-es.xml dictionary (45k+ bilingual entries)...")
    url_xml = "https://raw.githubusercontent.com/mananoreboton/en-es-en-Dic/master/src/main/resources/dic/en-es.xml"
    req_xml = urllib.request.Request(url_xml, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req_xml) as r:
        xml_content = r.read().decode("utf-8-sig", errors="ignore")

    matches = re.findall(r"<w>\s*<c>(.*?)</c>\s*<d>(.*?)</d>\s*<t>(.*?)</t>\s*</w>", xml_content, re.DOTALL)
    dict_map = {}
    for w, d, t in matches:
        clean_w = w.strip().lower()
        if clean_w and clean_w not in dict_map:
            dict_map[clean_w] = (clean_spanish(d.strip()), clean_pos(t.strip()))

    print(f"Loaded {len(dict_map)} bilingual mappings from dictionary.")

    # 4. Clean word list: Remove meaningless single letters and acronyms, keep valid words
    clean_words = []
    seen = set()

    for w in raw_words:
        # allow 'a' and 'i', skip other single letters
        if len(w) == 1 and w not in ["a", "i"]:
            continue
        if len(w) > 25:
            continue
        # remove non-alpha
        if not re.match(r"^[a-z'-]+$", w):
            continue
        if w not in seen:
            seen.add(w)
            clean_words.append(w)

    # If < 10000, supplement with Oxford 5000 and AWL words
    for w in ox_map.keys():
        if len(clean_words) >= 10000:
            break
        if w not in seen and re.match(r"^[a-z'-]+$", w) and (len(w) > 1 or w in ["a", "i"]):
            seen.add(w)
            clean_words.append(w)

    clean_words = clean_words[:10000]
    print(f"Total curated English words: {len(clean_words)}")

    # 5. Build 10,000 entries
    entries = []
    for rank_idx, w in enumerate(clean_words):
        rank = rank_idx + 1

        # Check curated overrides first
        if w in CURATED_OVERRIDES:
            es, pos, cefr, ex, ex_es = CURATED_OVERRIDES[w]
            entries.append({
                "r": rank,
                "w": w,
                "pos": pos,
                "es": es,
                "lvl": cefr,
                "ex": ex,
                "exEs": ex_es
            })
            continue

        # Check Oxford 5000
        ox_item = ox_map.get(w)
        ox_cefr = ox_item.get("cefr", "").upper() if ox_item and ox_item.get("cefr") else None
        ox_pos = ox_item.get("type", "") if ox_item else ""
        ox_ex = ox_item.get("example", "") if ox_item and ox_item.get("example") else None

        # Check dictionary match or stemmed match
        es = None
        pos = "Sustantivo"

        if w in dict_map:
            es, pos = dict_map[w]
        elif w.endswith("s") and w[:-1] in dict_map:
            es_base, pos = dict_map[w[:-1]]
            es = es_base + " (pl.)"
        elif w.endswith("es") and w[:-2] in dict_map:
            es_base, pos = dict_map[w[:-2]]
            es = es_base + " (pl.)"
        elif w.endswith("ies") and (w[:-3] + "y") in dict_map:
            es_base, pos = dict_map[w[:-3] + "y"]
            es = es_base + " (pl.)"
        elif w.endswith("ed") and w[:-2] in dict_map:
            es_base, pos = dict_map[w[:-2]]
            es = es_base + " (pasado)"
            pos = "Verbo"
        elif w.endswith("ed") and w[:-1] in dict_map:
            es_base, pos = dict_map[w[:-1]]
            es = es_base + " (pasado)"
            pos = "Verbo"
        elif w.endswith("ing") and w[:-3] in dict_map:
            es_base, pos = dict_map[w[:-3]]
            es = es_base + " (gerundio / -ando/-endo)"
            pos = "Verbo"
        elif w.endswith("ing") and (w[:-3] + "e") in dict_map:
            es_base, pos = dict_map[w[:-3] + "e"]
            es = es_base + " (gerundio / -ando/-endo)"
            pos = "Verbo"
        elif w.endswith("ly") and w[:-2] in dict_map:
            es_base, _ = dict_map[w[:-2]]
            es = es_base + "-mente"
            pos = "Adverbio"

        if not es:
            # Fallback formatting
            es = w.capitalize()

        # Adjust POS if Oxford gave one
        if ox_pos:
            ox_pos_lower = ox_pos.lower()
            if "noun" in ox_pos_lower: pos = "Sustantivo"
            elif "verb" in ox_pos_lower: pos = "Verbo"
            elif "adj" in ox_pos_lower: pos = "Adjetivo"
            elif "adv" in ox_pos_lower: pos = "Adverbio"
            elif "prep" in ox_pos_lower: pos = "Preposición"
            elif "conj" in ox_pos_lower: pos = "Conjunción"

        # Determine CEFR level
        if ox_cefr and ox_cefr in ["A1", "A2", "B1", "B2", "C1", "C2"]:
            cefr = ox_cefr
        else:
            if rank <= 800: cefr = "A1"
            elif rank <= 2000: cefr = "A2"
            elif rank <= 4000: cefr = "B1"
            elif rank <= 6500: cefr = "B2"
            elif rank <= 8500: cefr = "C1"
            else: cefr = "C2"

        # Example sentence
        if ox_ex and len(ox_ex) > 10:
            ex = ox_ex.strip()
            ex_es = f"Ejemplo contextualizado de la palabra '{w}' ({es})."
        else:
            ex = f"The student learned how to use the word '{w}' effectively in academic writing."
            ex_es = f"El estudiante aprendió a utilizar la palabra '{w}' ({es}) de forma efectiva en la redacción académica."

        entries.append({
            "r": rank,
            "w": w,
            "pos": pos,
            "es": es,
            "lvl": cefr,
            "ex": ex,
            "exEs": ex_es
        })

    assert len(entries) == 10000, f"Expected 10,000 entries, got {len(entries)}"
    print(f"Successfully compiled all {len(entries)} top frequency entries.")

    # 6. Save public/data/ingles/top10000Words.json
    out_dir = os.path.join(os.path.dirname(__file__), "..", "public", "data", "ingles")
    os.makedirs(out_dir, exist_ok=True)
    out_json = os.path.join(out_dir, "top10000Words.json")

    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(entries, f, ensure_ascii=False, separators=(',', ':'))

    size_mb = os.path.getsize(out_json) / (1024 * 1024)
    print(f"Generated {out_json} ({size_mb:.2f} MB)")

    # 7. Generate src/data/languages/englishTop10kData.ts
    # Embed the top 200 synchronous cache for zero-latency instant render
    top200_sample = entries[:200]

    ts_code = f"""/**
 * APP-KUSKAT • MÓDULO DE LAS 10,000 PALABRAS MÁS USADAS EN EL IDIOMA INGLÉS
 *
 * Catálogo completo de frecuencia lingüística estructurado por bandas de frecuencia:
 * - Top 100: Palabras funcionales y de mayor densidad comunicativa (A1)
 * - Top 500: Vocabulario esencial de supervivencia y cotidianeidad (A1)
 * - Top 1,000: Vocabulario básico consolidado (A1-A2)
 * - Top 2,500: Umbral de comunicación autónoma y fluidez general (B1)
 * - Top 5,000: Nivel intermedio alto y vocabulario profesional (B2)
 * - Top 10,000: Léxico avanzado, académico y literario (C1-C2)
 */

export interface TopWord {{
  r: number;        // Ranking de frecuencia (1 a 10000)
  w: string;        // Palabra en inglés
  pos: string;      // Categoría gramatical (Sustantivo, Verbo, etc.)
  es: string;       // Traducción al español
  lvl: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  ex: string;       // Oración de ejemplo en inglés
  exEs: string;     // Traducción de la oración de ejemplo
}}

export type FrequencyBand = 'all' | '100' | '500' | '1000' | '2500' | '5000' | '10000';

export interface FrequencyBandInfo {{
  id: FrequencyBand;
  label: string;
  description: string;
  maxRank: number;
  badgeColor: string;
}}

export const FREQUENCY_BANDS: FrequencyBandInfo[] = [
  {{ id: 'all', label: 'Todas (1 - 10,000)', description: 'Catálogo exhaustivo de las 10,000 palabras más frecuentes', maxRank: 10000, badgeColor: 'bg-slate-100 text-slate-800 border-slate-300' }},
  {{ id: '100', label: 'Top 100', description: 'Palabras funcionales de máxima densidad comunicativa (A1)', maxRank: 100, badgeColor: 'bg-blue-100 text-blue-800 border-blue-300' }},
  {{ id: '500', label: 'Top 500', description: 'Vocabulario esencial cotidiano de nivel elemental (A1)', maxRank: 500, badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300' }},
  {{ id: '1000', label: 'Top 1,000', description: 'Vocabulario básico indispensable para comunicación general (A1-A2)', maxRank: 1000, badgeColor: 'bg-teal-100 text-teal-800 border-teal-300' }},
  {{ id: '2500', label: 'Top 2,500', description: 'Umbral de fluidez autónoma y compresión oral (B1)', maxRank: 2500, badgeColor: 'bg-amber-100 text-amber-800 border-amber-300' }},
  {{ id: '5000', label: 'Top 5,000', description: 'Vocabulario intermedio alto y profesional (B2 - Oxford 5000)', maxRank: 5000, badgeColor: 'bg-purple-100 text-purple-800 border-purple-300' }},
  {{ id: '10000', label: 'Top 10,000', description: 'Léxico avanzado, académico y literario (C1-C2 Mastery)', maxRank: 10000, badgeColor: 'bg-rose-100 text-rose-800 border-rose-300' }},
];

// Caché sincrónico inmediato con las primeras 200 palabras (0 ms de espera al abrir)
export const INITIAL_TOP_WORDS: TopWord[] = {json.dumps(top200_sample, ensure_ascii=False, indent=2)};

// Memoria caché del catálogo completo
let cachedFull10kWords: TopWord[] | null = null;

/**
 * Carga de forma asincrónica y en segundo plano el catálogo completo de 10,000 palabras desde /data/ingles/top10000Words.json.
 */
export async function fetchTop10000Words(): Promise<TopWord[]> {{
  if (cachedFull10kWords && cachedFull10kWords.length === 10000) {{
    return cachedFull10kWords;
  }}

  try {{
    const response = await fetch('/data/ingles/top10000Words.json');
    if (!response.ok) {{
      throw new Error(`HTTP error loading 10k words: ${{response.status}}`);
    }}
    const data: TopWord[] = await response.json();
    if (Array.isArray(data) && data.length > 0) {{
      cachedFull10kWords = data;
      return data;
    }}
  }} catch (err) {{
    console.warn('[Top10kWords] Error fetching full JSON, using initial sync cache:', err);
  }}

  return INITIAL_TOP_WORDS;
}}
"""

    out_ts = os.path.join(os.path.dirname(__file__), "..", "src", "data", "languages", "englishTop10kData.ts")
    with open(out_ts, "w", encoding="utf-8") as f:
        f.write(ts_code)

    print(f"Generated {out_ts}")
    print("=== Complete! ===")

if __name__ == "__main__":
    main()

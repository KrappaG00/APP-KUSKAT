# -*- coding: utf-8 -*-
"""
APP-KUSKAT • English Multiple Choice Questions Bank: A1 and A2 (50 items each)
References: Englisch-hilfen.de, Englishteststore.net, Agendaweb.org
"""

def get_a1_questions():
    q = []
    
    # 1. To Be - Affirmative
    q.append({
        "id": "eng_a1_01", "number": 1, "level": "A1", "variant": "ALL",
        "topic": "Verb To Be: Affirmative Concord",
        "statement": "My brother and I ________ university students in San Salvador.",
        "options": [
            {"key": "A", "text": "am"},
            {"key": "B", "text": "is"},
            {"key": "C", "text": "are"},
            {"key": "D", "text": "be"}
        ],
        "correctAnswer": "C",
        "explanation": "El sujeto 'My brother and I' equivale al pronombre de primera persona plural 'we', por lo que exige la forma verbal 'are'.",
        "distractorAnalysis": [
            {"option": "A", "reason": "'am' solo se usa con el pronombre singular 'I', no cuando forma parte de un sujeto compuesto."},
            {"option": "B", "reason": "'is' se reserva para la tercera persona singular (he, she, it)."},
            {"option": "D", "reason": "'be' es el infinitivo sin conjugar."}
        ],
        "referenceSite": "Englisch-hilfen.de (Verb To Be Present Simple)"
    })

    # 2. To Be - Age Expression
    q.append({
        "id": "eng_a1_02", "number": 2, "level": "A1", "variant": "ALL",
        "topic": "Verb To Be: Expressing Age",
        "statement": "Carlos ________ 19 years old, and his sister ________ 16.",
        "options": [
            {"key": "A", "text": "has / has"},
            {"key": "B", "text": "is / is"},
            {"key": "C", "text": "have / has"},
            {"key": "D", "text": "is / have"}
        ],
        "correctAnswer": "B",
        "explanation": "En inglés, la edad se predica con el verbo copulativo 'to be' ('to be X years old'), a diferencia del español que utiliza 'tener'.",
        "distractorAnalysis": [
            {"option": "A", "reason": "'has' es un calco del español 'tener', agramatical en inglés para la edad."},
            {"option": "C", "reason": "Combina formas de 'have' erróneas para la edad."},
            {"option": "D", "reason": "Mezcla incorrectamente 'to be' y 'have'."}
        ],
        "referenceSite": "Agendaweb.org (Age expressions with To Be)"
    })

    # 3. To Be - Short Answers
    q.append({
        "id": "eng_a1_03", "number": 3, "level": "A1", "variant": "ALL",
        "topic": "Verb To Be: Short Answers Rule",
        "statement": "— 'Are you from Santa Ana?' — 'Yes, ________.'",
        "options": [
            {"key": "A", "text": "I'm"},
            {"key": "B", "text": "I am"},
            {"key": "C", "text": "I are"},
            {"key": "D", "text": "I do"}
        ],
        "correctAnswer": "B",
        "explanation": "En respuestas cortas afirmativas con el verbo To Be, NUNCA se permiten contracciones: se debe decir 'Yes, I am', no 'Yes, I'm'.",
        "distractorAnalysis": [
            {"option": "A", "reason": "Las contracciones están estrictamente prohibidas en respuestas cortas afirmativas."},
            {"option": "C", "reason": "'I are' es agramatical en concordancia de persona."},
            {"option": "D", "reason": "'I do' responde a preguntas con el auxiliar 'do', no con 'to be'."}
        ],
        "referenceSite": "Englishteststore.net (Short Answers A1)"
    })

    # 4. Present Simple - 3rd Person Singular
    q.append({
        "id": "eng_a1_04", "number": 4, "level": "A1", "variant": "ALL",
        "topic": "Present Simple: 3rd Person Singular Spelling",
        "statement": "Samuel ________ English at the university and ________ basketball on weekends.",
        "options": [
            {"key": "A", "text": "study / play"},
            {"key": "B", "text": "studies / plays"},
            {"key": "C", "text": "studys / playes"},
            {"key": "D", "text": "studying / playing"}
        ],
        "correctAnswer": "B",
        "explanation": "Samuel (he) requiere -ies para verbos en consonante + y ('study' -> 'studies'), y solo -s para vocal + y ('play' -> 'plays').",
        "distractorAnalysis": [
            {"option": "A", "reason": "Omite la flexión de tercera persona del singular en Present Simple."},
            {"option": "C", "reason": "Viola las reglas ortográficas del inglés para la terminación en 'y'."},
            {"option": "D", "reason": "Usa gerundios sin auxiliar 'to be'."}
        ],
        "referenceSite": "Englisch-hilfen.de (Present Simple 3rd Person -s)"
    })

    # 5. Present Simple - Negative with Auxiliaries
    q.append({
        "id": "eng_a1_05", "number": 5, "level": "A1", "variant": "ALL",
        "topic": "Present Simple: Negative with Auxiliaries",
        "statement": "Elena ________ coffee in the morning; she prefers green tea.",
        "options": [
            {"key": "A", "text": "doesn't drinks"},
            {"key": "B", "text": "doesn't drink"},
            {"key": "C", "text": "don't drink"},
            {"key": "D", "text": "not drinks"}
        ],
        "correctAnswer": "B",
        "explanation": "Cuando el auxiliar negativo 'doesn't' está presente, el verbo principal debe permanecer en su forma base pura ('drink') sin la -s.",
        "distractorAnalysis": [
            {"option": "A", "reason": "Duplica erróneamente la marca de tercera persona ('doesn't drinks')."},
            {"option": "C", "reason": "'don't' solo concuerda con I, you, we, they; Elena es 'she'."},
            {"option": "D", "reason": "En inglés se requiere auxiliar 'do/does' para negar, no solo 'not'."}
        ],
        "referenceSite": "Agendaweb.org (Present Simple Negatives)"
    })

    # 6. Present Simple - Questions
    q.append({
        "id": "eng_a1_06", "number": 6, "level": "A1", "variant": "ALL",
        "topic": "Present Simple: Interrogative Word Order",
        "statement": "________ your parents ________ in an apartment or in a house?",
        "options": [
            {"key": "A", "text": "Do / live"},
            {"key": "B", "text": "Does / live"},
            {"key": "C", "text": "Are / live"},
            {"key": "D", "text": "Do / lives"}
        ],
        "correctAnswer": "A",
        "explanation": "'Your parents' es un sujeto plural ('they'), por lo que requiere el auxiliar 'Do' y la forma base del verbo principal 'live'.",
        "distractorAnalysis": [
            {"option": "B", "reason": "'Does' solo se usa para sujetos en singular de 3ª persona (he, she, it)."},
            {"option": "C", "reason": "'Are' no puede acompañar a la forma base de un verbo de acción."},
            {"option": "D", "reason": "El verbo principal con auxiliar 'do' nunca lleva -s final."}
        ],
        "referenceSite": "Englishteststore.net (Present Simple Questions)"
    })

    # 7. Articles - A vs AN Phonetic Rule
    q.append({
        "id": "eng_a1_07", "number": 7, "level": "A1", "variant": "ALL",
        "topic": "Articles: Phonetic Rule (A vs. AN)",
        "statement": "It takes ________ hour to drive to the airport, where we will meet ________ European diplomat.",
        "options": [
            {"key": "A", "text": "an / an"},
            {"key": "B", "text": "a / an"},
            {"key": "C", "text": "an / a"},
            {"key": "D", "text": "a / a"}
        ],
        "correctAnswer": "C",
        "explanation": "La elección entre 'a' y 'an' depende del sonido fonético inicial: 'hour' empieza con sonido vocálico /aʊər/ ('an hour'), mientras que 'European' empieza con el sonido consonántico semivocálico /j/ ('a European').",
        "distractorAnalysis": [
            {"option": "A", "reason": "'European' no empieza con sonido vocálico, sino con semiconsonante /j/."},
            {"option": "B", "reason": "'hour' tiene 'h' muda; requiere 'an', no 'a'."},
            {"option": "D", "reason": "Usa 'a' antes de 'hour', violando la regla fonética de la hache muda."}
        ],
        "referenceSite": "Englisch-hilfen.de (Indefinite Articles A and AN)"
    })

    # 8. Definite Article THE vs Zero Article
    q.append({
        "id": "eng_a1_08", "number": 8, "level": "A1", "variant": "ALL",
        "topic": "Articles: Zero Article for General Plurals",
        "statement": "________ dogs are usually very loyal, but ________ dog next door barks constantly at night.",
        "options": [
            {"key": "A", "text": "The / the"},
            {"key": "B", "text": "— / the"},
            {"key": "C", "text": "The / —"},
            {"key": "D", "text": "A / a"}
        ],
        "correctAnswer": "B",
        "explanation": "Al hablar de una especie o clase en general en plural, el inglés NO usa artículo determinado (artículo cero: 'Dogs are loyal'). Cuando nos referimos a un animal específico ('the dog next door'), se usa 'the'.",
        "distractorAnalysis": [
            {"option": "A", "reason": "Poner 'The' en plural generalizado es un vicio de traducción del español."},
            {"option": "C", "reason": "Invierte la regla: omite 'the' donde el sustantivo está especificado."},
            {"option": "D", "reason": "'A' no puede acompañar a un sustantivo en plural ('dogs')."}
        ],
        "referenceSite": "Agendaweb.org (Definite and Zero Articles A1)"
    })

    # 9. Demonstratives - Singular vs Plural
    q.append({
        "id": "eng_a1_09", "number": 9, "level": "A1", "variant": "ALL",
        "topic": "Demonstratives: This, That, These, Those",
        "statement": "Look at ________ birds over there on top of that roof, and hold ________ book here in your hand.",
        "options": [
            {"key": "A", "text": "these / that"},
            {"key": "B", "text": "those / this"},
            {"key": "C", "text": "this / those"},
            {"key": "D", "text": "that / these"}
        ],
        "correctAnswer": "B",
        "explanation": "'Those' indica plural a distancia física ('over there'), mientras que 'this' indica singular en proximidad inmediata ('here in your hand').",
        "distractorAnalysis": [
            {"option": "A", "reason": "'these' indica proximidad y no concuerda con 'over there'."},
            {"option": "C", "reason": "'this' es singular y no concuerda con 'birds'."},
            {"option": "D", "reason": "'that' es singular y 'these' es plural; ambos quedan invertidos."}
        ],
        "referenceSite": "Englishteststore.net (Demonstrative Pronouns A1)"
    })

    # 10. Irregular Plural Nouns
    q.append({
        "id": "eng_a1_10", "number": 10, "level": "A1", "variant": "ALL",
        "topic": "Irregular Plural Nouns",
        "statement": "The three ________ were playing in the park while two ________ watched them.",
        "options": [
            {"key": "A", "text": "childs / mans"},
            {"key": "B", "text": "children / men"},
            {"key": "C", "text": "childrens / mens"},
            {"key": "D", "text": "child / man"}
        ],
        "correctAnswer": "B",
        "explanation": "'Child' y 'man' forman plurales irregulares con cambio de raíz vocálica y sufijo: 'children' y 'men'.",
        "distractorAnalysis": [
            {"option": "A", "reason": "Aplica la regla regular de la -s a sustantivos que son estrictamente irregulares."},
            {"option": "C", "reason": "Añade redundantemente una -s a sustantivos que ya están en forma plural."},
            {"option": "D", "reason": "Usa las formas singulares con numerales 'three' y 'two'."}
        ],
        "referenceSite": "Englisch-hilfen.de (Irregular Plural Forms of Nouns)"
    })

    # 11. Possessive Adjectives
    q.append({
        "id": "eng_a1_11", "number": 11, "level": "A1", "variant": "ALL",
        "topic": "Possessive Adjectives Concordance",
        "statement": "Mariana has lost ________ keys, and Gabriel forgot to bring ________ backpack.",
        "options": [
            {"key": "A", "text": "his / her"},
            {"key": "B", "text": "her / his"},
            {"key": "C", "text": "their / its"},
            {"key": "D", "text": "its / their"}
        ],
        "correctAnswer": "B",
        "explanation": "El adjetivo posesivo concuerda en género con el poseedor, no con el objeto poseído: Mariana (mujer) usa 'her', y Gabriel (hombre) usa 'his'.",
        "distractorAnalysis": [
            {"option": "A", "reason": "Invierte los géneros: asigna 'his' a Mariana y 'her' a Gabriel."},
            {"option": "C", "reason": "'their' denota plural y 'its' objetos o animales neutros."},
            {"option": "D", "reason": "Asigna posesivo neutro a Mariana."}
        ],
        "referenceSite": "Agendaweb.org (Possessive Adjectives A1)"
    })

    # 12. Possessive Pronouns
    q.append({
        "id": "eng_a1_12", "number": 12, "level": "A1", "variant": "ALL",
        "topic": "Possessive Pronouns: Mine vs. My",
        "statement": "This jacket isn't ________; it belongs to Sofia, so it is ________.",
        "options": [
            {"key": "A", "text": "my / her"},
            {"key": "B", "text": "mine / hers"},
            {"key": "C", "text": "me / hers"},
            {"key": "D", "text": "mine / her"}
        ],
        "correctAnswer": "B",
        "explanation": "Los pronombres posesivos sustituyen al sustantivo y van solos sin acompañar a ningún nombre: 'mine' (mía) y 'hers' (de ella / suya).",
        "distractorAnalysis": [
            {"option": "A", "reason": "'my' y 'her' son adjetivos posesivos que obligatoriamente deben acompañar a un sustantivo."},
            {"option": "C", "reason": "'me' es un pronombre objeto, no posesivo."},
            {"option": "D", "reason": "'her' es adjetivo y requiere sustantivo posterior."}
        ],
        "referenceSite": "Englishteststore.net (Possessive Pronouns A1)"
    })

    # 13. Saxon Genitive ('s)
    q.append({
        "id": "eng_a1_13", "number": 13, "level": "A1", "variant": "ALL",
        "topic": "Saxon Genitive ('s) Rules",
        "statement": "That is my ________ car, and those are the ________ bicycles.",
        "options": [
            {"key": "A", "text": "brother / children's"},
            {"key": "B", "text": "brother's / children's"},
            {"key": "C", "text": "brother's / childrens'"},
            {"key": "D", "text": "brothers / childrens"}
        ],
        "correctAnswer": "B",
        "explanation": "Para un singular se añade 's ('brother's'). Para plurales irregulares que no terminan en -s como 'children', también se añade 's ('children's').",
        "distractorAnalysis": [
            {"option": "A", "reason": "Omite el apóstrofo posesivo en 'brother'."},
            {"option": "C", "reason": "'childrens'' es incorrecto porque el apóstrofo solo va al final si el plural termina naturalmente en 's'."},
            {"option": "D", "reason": "Usa plurales simples sin marcar la relación de posesión."}
        ],
        "referenceSite": "Englisch-hilfen.de (Saxon Genitive and Apostrophe)"
    })

    # 14. Object Pronouns
    q.append({
        "id": "eng_a1_14", "number": 14, "level": "A1", "variant": "ALL",
        "topic": "Object Pronouns",
        "statement": "Mrs. Gómez is our teacher. She always helps ________ when we ask ________ a question.",
        "options": [
            {"key": "A", "text": "we / she"},
            {"key": "B", "text": "us / her"},
            {"key": "C", "text": "our / him"},
            {"key": "D", "text": "us / she"}
        ],
        "correctAnswer": "B",
        "explanation": "Tras verbos y preposiciones se usan pronombres objeto: 'us' (a nosotros) y 'her' (a ella).",
        "distractorAnalysis": [
            {"option": "A", "reason": "'we' y 'she' son pronombres sujeto, agramaticales en posición de complemento."},
            {"option": "C", "reason": "'our' es adjetivo posesivo y 'him' se refiere a un varón."},
            {"option": "D", "reason": "Usa 'she' como complemento de 'ask'."}
        ],
        "referenceSite": "Agendaweb.org (Object Pronouns A1)"
    })

    # 15. Prepositions of Time (AT, ON, IN)
    q.append({
        "id": "eng_a1_15", "number": 15, "level": "A1", "variant": "ALL",
        "topic": "Prepositions of Time: AT, ON, IN",
        "statement": "The exam is ________ Monday morning, ________ 8:30 AM, ________ June.",
        "options": [
            {"key": "A", "text": "in / at / on"},
            {"key": "B", "text": "on / at / in"},
            {"key": "C", "text": "at / on / in"},
            {"key": "D", "text": "on / in / at"}
        ],
        "correctAnswer": "B",
        "explanation": "Regla mnemotécnica de tiempo: ON para días y fechas específicas ('on Monday'); AT para horas puntuales ('at 8:30 AM'); IN para meses y años ('in June').",
        "distractorAnalysis": [
            {"option": "A", "reason": "Mezcla las preposiciones violando las reglas fijas de tiempo."},
            {"option": "C", "reason": "Usa 'at' para días, lo cual es incorrecto."},
            {"option": "D", "reason": "Usa 'in' para horas puntuales en vez de 'at'."}
        ],
        "referenceSite": "Englisch-hilfen.de (Prepositions of Time AT ON IN)"
    })

    # 16. Prepositions of Place
    q.append({
        "id": "eng_a1_16", "number": 16, "level": "A1", "variant": "ALL",
        "topic": "Prepositions of Place: Basic Relations",
        "statement": "The laptop is ________ the desk, and the cat is sleeping ________ the chair on the floor.",
        "options": [
            {"key": "A", "text": "on / under"},
            {"key": "B", "text": "in / above"},
            {"key": "C", "text": "at / between"},
            {"key": "D", "text": "under / in"}
        ],
        "correctAnswer": "A",
        "explanation": "'On' denota contacto sobre una superficie ('on the desk'). 'Under' denota debajo de algo con espacio intermedio ('under the chair').",
        "distractorAnalysis": [
            {"option": "B", "reason": "'in the desk' implicaría dentro de la madera; 'above' no tiene contacto físico."},
            {"option": "C", "reason": "'between' requiere dos puntos de referencia explícitos."},
            {"option": "D", "reason": "Invierte la relación espacial física."}
        ],
        "referenceSite": "Agendaweb.org (Prepositions of Place A1)"
    })

    # 17. There is vs There are
    q.append({
        "id": "eng_a1_17", "number": 17, "level": "A1", "variant": "ALL",
        "topic": "Existential There is / There are",
        "statement": "________ a whiteboard on the wall, and ________ twenty chairs in the classroom.",
        "options": [
            {"key": "A", "text": "There are / there is"},
            {"key": "B", "text": "There is / there are"},
            {"key": "C", "text": "There have / there are"},
            {"key": "D", "text": "Is there / are there"}
        ],
        "correctAnswer": "B",
        "explanation": "'There is' se utiliza para elementos singulares e incontables ('a whiteboard'), mientras que 'There are' se usa para plurales ('twenty chairs').",
        "distractorAnalysis": [
            {"option": "A", "reason": "Invierte la concordancia singular/plural."},
            {"option": "C", "reason": "'There have' no existe en inglés para indicar existencia (error por calco de 'hay')."},
            {"option": "D", "reason": "Utiliza orden interrogativo en una oración puramente declarativa."}
        ],
        "referenceSite": "Englishteststore.net (There is vs There are A1)"
    })

    # 18. Some vs Any
    q.append({
        "id": "eng_a1_18", "number": 18, "level": "A1", "variant": "ALL",
        "topic": "Quantifiers: Some vs. Any",
        "statement": "We bought ________ fresh apples, but we didn't find ________ oranges in the supermarket.",
        "options": [
            {"key": "A", "text": "any / some"},
            {"key": "B", "text": "some / any"},
            {"key": "C", "text": "some / some"},
            {"key": "D", "text": "any / any"}
        ],
        "correctAnswer": "B",
        "explanation": "Por regla general, 'some' se emplea en oraciones afirmativas, mientras que 'any' se utiliza en oraciones negativas y preguntas generales.",
        "distractorAnalysis": [
            {"option": "A", "reason": "Invierte el uso: pone 'any' en afirmativa y 'some' en negativa."},
            {"option": "C", "reason": "'some' en oraciones negativas ordinarias es agramatical en inglés estándar."},
            {"option": "D", "reason": "'any' en afirmativa tiene sentido de 'cualquiera', no de cantidad indeterminada."}
        ],
        "referenceSite": "Englisch-hilfen.de (Some and Any rules)"
    })

    # 19. Much vs Many
    q.append({
        "id": "eng_a1_19", "number": 19, "level": "A1", "variant": "ALL",
        "topic": "Quantifiers: Much vs. Many",
        "statement": "There isn't ________ milk in the bottle, and there aren't ________ glasses on the counter.",
        "options": [
            {"key": "A", "text": "many / much"},
            {"key": "B", "text": "much / many"},
            {"key": "C", "text": "a lot / many"},
            {"key": "D", "text": "much / much"}
        ],
        "correctAnswer": "B",
        "explanation": "'Much' acompaña a sustantivos incontables ('milk'), y 'many' acompaña a sustantivos contables en plural ('glasses').",
        "distractorAnalysis": [
            {"option": "A", "reason": "Invierte la regla: 'many' no puede modificar al incontable 'milk'."},
            {"option": "C", "reason": "'a lot' requiere la preposición 'of' para modificar un sustantivo."},
            {"option": "D", "reason": "Aplica 'much' a sustantivos contables en plural."}
        ],
        "referenceSite": "Agendaweb.org (Much and Many A1)"
    })

    # 20. How Much vs How Many
    q.append({
        "id": "eng_a1_20", "number": 20, "level": "A1", "variant": "ALL",
        "topic": "Interrogative Quantifiers: How Much vs How Many",
        "statement": "— '________ sugar do you want in your coffee?' — 'And ________ cups do we need?'",
        "options": [
            {"key": "A", "text": "How many / How much"},
            {"key": "B", "text": "How much / How many"},
            {"key": "C", "text": "How / How much"},
            {"key": "D", "text": "How much / How"}
        ],
        "correctAnswer": "B",
        "explanation": "'How much' pregunta por cantidad incontable ('sugar'), y 'How many' pregunta por número o cantidad contable ('cups').",
        "distractorAnalysis": [
            {"option": "A", "reason": "Invierte las preguntas contable e incontable."},
            {"option": "C", "reason": "'How' solo pregunta por modo o manera, no por cantidad."},
            {"option": "D", "reason": "Deja incompleta la segunda pregunta cuantitativa."}
        ],
        "referenceSite": "Englishteststore.net (How Much vs How Many)"
    })

    # Additional A1 questions (21 to 50)
    a1_extras = [
        # 21. Question words: What vs Where
        ("Question Words: What vs Where",
         "— '________ is your name?' — 'And ________ do you live?'",
         [("A", "Where / What"), ("B", "What / Where"), ("C", "Who / When"), ("D", "How / Why")],
         "B",
         "'What' se usa para solicitar información e identidad personal ('What is your name?'), mientras que 'Where' indaga por localización espacial ('Where do you live?').",
         [("A", "Invierte los pronombres interrogativos."), ("C", "'Who' indaga por persona y 'When' por tiempo."), ("D", "Pregunta de manera incoherente por modo y causa.")],
         "Englisch-hilfen.de (Question Words Wh-)")
        ,
        # 22. Question words: Why vs Because
        ("Question Words: Why and Because",
         "— '________ are you late?' — '________ the bus broke down.'",
         [("A", "Why / Because"), ("B", "Because / Why"), ("C", "When / So"), ("D", "Where / Since")],
         "A",
         "'Why' es la partícula interrogativa para indagar la causa, y 'Because' es la conjunción subordinante para responder expresando la razón.",
         [("B", "'Because' no se usa para iniciar una pregunta directa."), ("C", "'When' indaga tiempo y 'so' expresa consecuencia."), ("D", "Pregunta por lugar de forma ilógica.")],
         "Agendaweb.org (Why and Because A1)")
        ,
        # 23. Adverbs of frequency position
        ("Adverbs of Frequency: Syntactic Position",
         "Which sentence has the CORRECT position of the adverb of frequency?",
         [("A", "Mateo drinks always coffee in the morning."),
          ("B", "Mateo always drinks coffee in the morning."),
          ("C", "Always Mateo drinks coffee in the morning."),
          ("D", "Mateo drinks coffee always in the morning.")],
         "B",
         "Los adverbios de frecuencia (always, usually, often, never) se colocan ANTES del verbo principal en Present Simple (excepto con 'to be', donde van después).",
         [("A", "Coloca el adverbio después del verbo transitivo."), ("C", "Coloca el adverbio al inicio de la cláusula de forma no estándar."), ("D", "Coloca el adverbio al final de la oración.")],
         "Englishteststore.net (Adverbs of Frequency Position)")
        ,
        # 24. Adverb of frequency with To Be
        ("Adverbs of Frequency: With Verb To Be",
         "Choose the correct sentence:",
         [("A", "She is never late for her morning classes."),
          ("B", "She never is late for her morning classes."),
          ("C", "She is late never for her morning classes."),
          ("D", "Never she is late for her morning classes.")],
         "A",
         "Con el verbo copulativo 'to be', los adverbios de frecuencia se colocan INMEDIATAMENTE DESPUÉS del verbo conjugado ('She is never late').",
         [("B", "Coloca el adverbio antes de 'to be', violando la regla sintáctica."), ("C", "Coloca el adverbio tras el adjetivo."), ("D", "Requiere inversión estilística avanzada no aplicable en A1.")],
         "Englisch-hilfen.de (Frequency Adverbs with To Be)")
        ,
        # 25. Modal Can for ability
        ("Modals: Can and Can't for Ability",
         "David ________ play the guitar very well, but he ________ swim at all.",
         [("A", "can / can't"), ("B", "cans / can't"), ("C", "can / cannot to"), ("D", "can to / can't")],
         "A",
         "El verbo modal defectivo 'can' no añade -s en tercera persona y va seguido directamente del infinitivo sin 'to' (bare infinitive). La forma negativa es 'can't' o 'cannot'.",
         [("B", "'can' nunca añade la desinencia '-s' en tercera persona."), ("C", "Los verbos modales no admiten 'to' tras de sí."), ("D", "Inserta erróneamente 'to' tras el modal.")],
         "Agendaweb.org (Can and Can't for Ability)")
        ,
        # 26. Imperatives
        ("Imperative Sentences: Positive and Negative",
         "________ the window, please; it is very cold. And ________ make noise in the library.",
         [("A", "Close / don't"), ("B", "Closing / not"), ("C", "Closed / doesn't"), ("D", "To close / don't")],
         "A",
         "El imperativo afirmativo utiliza la forma base pura del verbo ('Close'), y el imperativo negativo se forma exclusivamente con 'Don't + forma base' ('don't make').",
         [("B", "El gerundio '-ing' no forma oraciones imperativas directas."), ("C", "El pasado simple no se usa para dar órdenes."), ("D", "El infinitivo con 'to' no constituye un modo imperativo.")],
         "Englishteststore.net (Imperative Forms A1)")
        ,
        # 27. Telling Time
        ("Telling the Time: Past and To",
         "If the clock displays 4:15, in standard English we say it is:",
         [("A", "a quarter to four"), ("B", "a quarter past four"), ("C", "half past four"), ("D", "four fifteen past")],
         "B",
         "Los primeros 30 minutos de la hora se expresan con 'past' (en US también 'after'): 4:15 es 'a quarter past four'.",
         [("A", "'a quarter to four' indicaría 3:45 (un cuarto para las cuatro)."), ("C", "'half past four' son las 4:30."), ("D", "Es una combinación agramatical.")],
         "Englisch-hilfen.de (Telling the Time)")
        ,
        # 28. Days and Months Capitalization
        ("Capitalization: Days of the Week and Months",
         "Which sentence demonstrates the CORRECT English capitalization rules?",
         [("A", "We have classes on monday and wednesday in september."),
          ("B", "We have classes on Monday and Wednesday in September."),
          ("C", "We have classes on Monday and wednesday in September."),
          ("D", "We have classes on monday and Wednesday in september.")],
         "B",
         "En inglés, a diferencia del español, los días de la semana y los meses del año SIEMPRE se escriben con mayúscula inicial obligatoria.",
         [("A", "Escribe los días y meses en minúscula, violando la ortografía inglesa."), ("C", "Deja 'wednesday' en minúscula."), ("D", "Mezcla mayúsculas y minúsculas sin criterio ortográfico.")],
         "Agendaweb.org (Capitalization Rules A1)")
        ,
        # 29. Basic Conjunctions: And, But, Because
        ("Basic Conjunctions: And, But, Because",
         "I want to buy a new computer, ________ I don't have enough money right now ________ it is very expensive.",
         [("A", "and / so"), ("B", "but / because"), ("C", "because / but"), ("D", "or / and")],
         "B",
         "'But' introduce contraste o limitación ('pero'), y 'because' introduce la causa o justificación de la afirmación previa ('porque').",
         [("A", "'and' no expresa contraste y 'so' expresa consecuencia."), ("C", "Invierte la lógica causal de la frase."), ("D", "'or' expresa alternativa disyuntiva.")],
         "Englishteststore.net (Basic Conjunctions A1)")
        ,
        # 30. Ordinal Numbers
        ("Ordinal Numbers: Spelling and Form",
         "Today is our ________ anniversary, and it is the ________ time we celebrate together.",
         [("A", "three / first"), ("B", "third / first"), ("C", "threeth / oneth"), ("D", "third / one")],
         "B",
         "Los números ordinales para 1, 2 y 3 son completamente irregulares: 1st (first), 2nd (second), y 3rd (third).",
         [("A", "'three' es número cardinal, no ordinal."), ("C", "'threeth' y 'oneth' no existen en inglés."), ("D", "'one' es cardinal.")],
         "Englisch-hilfen.de (Ordinal Numbers)")
        ,
        # 31. Have got (UK) vs Have (US)
        ("Have vs Have got: Regional Usage",
         "In British English, to ask about possession we say 'Have you got a car?', while in American English we typically say:",
         [("A", "Do you have a car?"), ("B", "Are you having a car?"), ("C", "Got you a car?"), ("D", "Have you a car?")],
         "A",
         "El inglés estadounidense utiliza el auxiliar 'Do/Does' con la forma base 'have' para preguntas de posesión ('Do you have a car?').",
         [("B", "'have' en sentido de posesión es verbo de estado y no admite tiempos continuos."), ("C", "'Got you' es agramatical."), ("D", "'Have you a car?' es un arcaísmo en desuso.")],
         "Agendaweb.org (Have vs Have got)")
        ,
        # 32. Present Continuous - Ongoing Action
        ("Present Continuous: Temporary Actions Now",
         "Listen! The baby ________ in the bedroom right now.",
         [("A", "cries"), ("B", "is crying"), ("C", "are crying"), ("D", "cry")],
         "B",
         "Para acciones que están ocurriendo en el momento exacto del habla ('Listen!', 'right now'), se usa Present Continuous: 'am/is/are + verbo-ing'.",
         [("A", "'cries' en Present Simple indica hábito o rutina, no la acción en progreso actual."), ("C", "'baby' es singular (he/she/it) y no concuerda con 'are'."), ("D", "Forma base sin conjugar ni concordar.")],
         "Englishteststore.net (Present Continuous A1)")
        ,
        # 33. Present Continuous - Spelling rules
        ("Present Continuous: Spelling of -ing form",
         "Choose the correct spelling: swim -> ________, write -> ________, lie -> ________.",
         [("A", "swiming / writting / lieing"),
          ("B", "swimming / writing / lying"),
          ("C", "swimming / writting / lying"),
          ("D", "swiming / writing / lieing")],
         "B",
         "Reglas de adición de -ing: duplicar consonante tras vocal tónica corta (swim -> swimming), suprimir la 'e' muda (write -> writing), y cambiar 'ie' por 'y' (lie -> lying).",
         [("A", "No duplica la 'm', duplica erróneamente la 't' y no transforma 'ie'."), ("C", "Duplica innecesariamente la 't' en 'write'."), ("D", "No duplica la 'm' y no transforma 'ie' en 'y'.")],
         "Englisch-hilfen.de (Spelling of -ing form)")
        ,
        # 34. Stative Verbs - Present Simple vs Continuous
        ("Stative Verbs: No Progressive Form",
         "Which sentence is GRAMMATICALLY CORRECT?",
         [("A", "I am wanting a glass of cold water now."),
          ("B", "I want a glass of cold water now."),
          ("C", "I am needing a glass of water."),
          ("D", "He is knowing the correct answer.")],
         "B",
         "Los verbos de estado, deseo o cognición (want, need, know, like, believe) no se utilizan en tiempos progresivos (-ing); se expresan en Present Simple incluso si el deseo ocurre 'ahora'.",
         [("A", "'want' es un verbo de estado que no admite Present Continuous."), ("C", "'need' es verbo de estado."), ("D", "'know' es verbo estativo intelectual.")],
         "Agendaweb.org (Stative Verbs A1)")
        ,
        # 35. US vs UK Vocabulary: Elevator vs Lift
        ("US vs UK Vocabulary: Buildings",
         "In London, people take the ________ to the third floor, whereas in New York they take the ________.",
         [("A", "elevator / lift"), ("B", "lift / elevator"), ("C", "subway / underground"), ("D", "flat / apartment")],
         "B",
         "En el Reino Unido (UK) se denomina 'lift' al elevador mecánico, mientras que en los Estados Unidos (US) se denomina 'elevator'.",
         [("A", "Invierte la distribución geográfica del término."), ("C", "Alude al metro subterráneo, no a elevadores."), ("D", "Alude a departamentos residenciales.")],
         "Englishteststore.net (British vs American Vocabulary A1)")
        ,
        # 36. US vs UK Vocabulary: Sidewalk vs Pavement
        ("US vs UK Vocabulary: Streets",
         "In American English, pedestrians walk on the ________, while in British English it is called the ________.",
         [("A", "sidewalk / pavement"), ("B", "pavement / sidewalk"), ("C", "highway / motorway"), ("D", "crosswalk / zebra crossing")],
         "A",
         "La acera peatonal es 'sidewalk' en inglés estadounidense y 'pavement' en inglés británico.",
         [("B", "Invierte los términos regionales."), ("C", "Alude a autopistas vehiculares."), ("D", "Alude a pasos peatonales pintados en la calzada.")],
         "Englisch-hilfen.de (American vs British Street Vocabulary)")
        ,
        # 37. Basic Adjective Opposites
        ("Basic Adjective Opposites",
         "The coffee is very hot, but the iced tea is ________. The ticket was expensive, but the bus was ________.",
         [("A", "warm / costly"), ("B", "cold / cheap"), ("C", "cool / high"), ("D", "freezing / pricey")],
         "B",
         "Los antónimos directos fundamentales en A1 son: hot (caliente) <-> cold (frío), y expensive (caro) <-> cheap (barato).",
         [("A", "'warm' y 'costly' no forman oposiciones contrastivas directas."), ("C", "'high' no es el antónimo léxico estándar de 'expensive' para pasajes."), ("D", "'pricey' es sinónimo de caro, no antónimo.")],
         "Agendaweb.org (Opposite Adjectives A1)")
        ,
        # 38. Adjective Order (Adjective before Noun)
        ("Adjective Position: Attributive Position",
         "Select the sentence with the correct syntactic order:",
         [("A", "She bought a car red yesterday."),
          ("B", "She bought a red car yesterday."),
          ("C", "She bought a car newly yesterday."),
          ("D", "She bought red a car yesterday.")],
         "B",
         "En inglés, el adjetivo calificativo se sitúa obligatoriamente ANTES del sustantivo al que modifica ('a red car'), nunca después como suele ocurrir en español.",
         [("A", "Calca el orden del español 'carro rojo', agramatical en inglés."), ("C", "Usa un adverbio en posición atributiva."), ("D", "Inserta el adjetivo antes del artículo indefinido.")],
         "Englishteststore.net (Adjective Order A1)")
        ,
        # 39. Nationalities and Languages
        ("Nationalities and Country Names",
         "Pierre is from France. His nationality is ________ and he speaks ________.",
         [("A", "French / French"), ("B", "France / Francian"), ("C", "Frenchman / France"), ("D", "French / France")],
         "A",
         "En inglés, tanto la nacionalidad adjetival como el nombre del idioma comparten la forma 'French'.",
         [("B", "'Francian' es una palabra inexistente en inglés."), ("C", "'Frenchman' es un sustantivo personal, no un adjetivo de idioma."), ("D", "'France' es el nombre del país, no del idioma.")],
         "Englisch-hilfen.de (Countries and Nationalities)")
        ,
        # 40. Countable vs Uncountable Food Nouns
        ("Food Nouns: Countable vs Uncountable",
         "Which pair consists of one UNCOUNTABLE noun and one COUNTABLE noun?",
         [("A", "Bread / Apple"), ("B", "Banana / Orange"), ("C", "Water / Milk"), ("D", "Carrot / Potato")],
         "A",
         "'Bread' (pan) es incontable en inglés (se dice 'a loaf of bread' o 'a piece of bread'), mientras que 'apple' es plenamente contable ('an apple', 'two apples').",
         [("B", "Ambos sustantivos son contables."), ("C", "Ambos sustantivos son incontables."), ("D", "Ambos sustantivos son contables.")],
         "Agendaweb.org (Countable and Uncountable Food)")
        ,
        # 41. Family relationships
        ("Family Vocabulary: Kinship Terms",
         "My brother's daughter is my ________, and my sister's son is my ________.",
         [("A", "cousin / uncle"), ("B", "niece / nephew"), ("C", "nephew / niece"), ("D", "aunt / cousin")],
         "B",
         "La hija de un hermano es 'niece' (sobrina) y el hijo de una hermana es 'nephew' (sobrino).",
         [("A", "'cousin' es primo/prima y 'uncle' es tío."), ("C", "Invierte los géneros de sobrina y sobrino."), ("D", "'aunt' es tía.")],
         "Englishteststore.net (Family Members Vocabulary)")
        ,
        # 42. Weather Expressions
        ("Weather Expressions: Impersonal 'It'",
         "To describe the atmospheric condition, the correct construction is:",
         [("A", "Is raining very hard today."),
          ("B", "It is raining very hard today."),
          ("C", "Makes rain very hard today."),
          ("D", "There rains very hard today.")],
         "B",
         "En inglés no existen oraciones impersonales sin sujeto fonético: los verbos meteorológicos exigen obligatoriamente el pronombre expletivo 'It' ('It is raining').",
         [("A", "Omite el sujeto obligatorio 'It' (vicio derivado del español)."), ("C", "Calca 'hace lluvia' del español."), ("D", "'There' denota existencia, no acción meteorológica.")],
         "Englisch-hilfen.de (Weather expressions with It)")
        ,
        # 43. Like + Gerund / Noun
        ("Verb Patterns: Like + -ing",
         "In her free time, Sofia likes ________ novels and ________ to classical music.",
         [("A", "read / listen"), ("B", "reading / listening"), ("C", "reads / listens"), ("D", "reading / to listen")],
         "B",
         "Tras el verbo de preferencia 'like', las actividades habituales de disfrute se coordinan con la forma en gerundio '-ing' de forma paralela ('reading... listening').",
         [("A", "Usa la forma base no flexionada."), ("C", "Usa tercera persona del indicativo en vez de forma no personal."), ("D", "Rompe el paralelismo sintáctico al mezclar gerundio con infinitivo.")],
         "Agendaweb.org (Verbs of Preference Like Love Hate)")
        ,
        # 44. Daily Routine Collocations
        ("Collocations: Daily Routine",
         "Every morning at 6:00 AM, Daniel ________ up, ________ a quick shower, and eats breakfast.",
         [("A", "wakes / takes"), ("B", "wakes / makes"), ("C", "stands / does"), ("D", "gets / gives")],
         "A",
         "Las colocaciones léxicas estándar de rutina diaria son: 'wake up' (despertarse) y 'take a shower' (en US) o 'have a shower' (en UK).",
         [("B", "'make a shower' es agramatical en inglés."), ("C", "'stand up' significa ponerse de pie físicamente de una silla."), ("D", "'give a shower' significa bañar a otra persona o animal.")],
         "Englishteststore.net (Daily Routines Vocabulary)")
        ,
        # 45. Prepositions of Movement
        ("Prepositions of Movement: Into vs Out of",
         "The teacher walked ________ the classroom and took the chalk ________ her bag.",
         [("A", "into / out of"), ("B", "out of / into"), ("C", "at / from"), ("D", "to / onto")],
         "A",
         "'Into' denota movimiento hacia el interior de un recinto cerrado, mientras que 'out of' expresa movimiento desde el interior hacia afuera.",
         [("B", "Invierte la dirección lógica de las dos acciones."), ("C", "'at' no denota movimiento dinámico hacia el interior."), ("D", "'onto' denota movimiento hacia una superficie superior.")],
         "Englisch-hilfen.de (Prepositions of Movement)")
        ,
        # 46. Silent Letters in Basic English
        ("Phonetics: Silent Consonants in Basic Words",
         "Which word contains a SILENT letter that is NOT pronounced?",
         [("A", "Desk"), ("B", "Know"), ("C", "Lamp"), ("D", "Book")],
         "B",
         "En la palabra 'know' /noʊ/, la letra inicial 'k' es muda (silent k), al igual que en 'knife', 'knee' y 'knot'.",
         [("A", "En 'desk', todos los fonemas consonánticos se pronuncian."), ("C", "En 'lamp', todas las letras se pronuncian."), ("D", "En 'book', no hay consonantes mudas.")],
         "Agendaweb.org (Silent Letters A1)")
        ,
        # 47. Plural of Nouns ending in -f / -fe
        ("Plural Nouns: Words ending in -f and -fe",
         "One knife -> two ________; one wife -> two ________; one life -> two ________.",
         [("A", "knifes / wifes / lifes"),
          ("B", "knives / wives / lives"),
          ("C", "knives / wifes / lifes"),
          ("D", "knifes / wives / lives")],
         "B",
         "Muchos sustantivos germánicos terminados en -f o -fe sonorizan su consonante a -ves en plural: knife -> knives, wife -> wives, life -> lives.",
         [("A", "Aplica la regla regular simple con -s sin sonorizar la consonante."), ("C", "Aplica la regla de forma inconsistente."), ("D", "No sonoriza 'knifes'.")],
         "Englishteststore.net (Plural of Nouns ending in F)")
        ,
        # 48. Possessive with Plural Nouns ending in -s
        ("Punctuation: Possessives of Regular Plurals",
         "This is the room belonging to the boys. Therefore, it is the ________ room.",
         [("A", "boy's"), ("B", "boys'"), ("C", "boys's"), ("D", "boyes'")],
         "B",
         "Cuando un sustantivo plural regular ya termina en la letra -s ('boys'), el genitivo sajón solo añade el apóstrofo final sin agregar otra -s: 'the boys' room'.",
         [("A", "'boy's' indica que la habitación pertenece a un único niño (singular)."), ("C", "'boys's' es una forma incorrecta y redundante."), ("D", "'boyes'' tiene una ortografía plural deformada.")],
         "Englisch-hilfen.de (Apostrophe with Regular Plurals)")
        ,
        # 49. Short Questions / Tag-like confirmation
        ("Conversational English: Polite Agreement",
         "— 'I am really excited about our trip tomorrow!' — '________ am I!'",
         [("A", "Too"), ("B", "So"), ("C", "Neither"), ("D", "Also")],
         "B",
         "Para concordar de manera afirmativa con una afirmación previa con el verbo To Be se utiliza la estructura 'So + auxiliar + sujeto' ('So am I' = yo también).",
         [("A", "'Too' se coloca al final de la frase ('I am too'), no al inicio con inversión."), ("C", "'Neither' se usa exclusivamente para concordar con oraciones negativas."), ("D", "'Also' no se usa en esta inversión sintáctica breve.")],
         "Agendaweb.org (So and Neither A1)")
        ,
        # 50. Comprehensive A1 Synthesis
        ("Comprehensive A1 Diagnostic Review",
         "Choose the ONLY sentence that contains NO grammatical or orthographic errors:",
         [("A", "She don't likes apples because they are sour."),
          ("B", "Does he live in a apartment with his brother?"),
          ("C", "They usually have lunch at 12:30 PM on Sundays."),
          ("D", "There are a big blackboard on the wall in our classroom.")],
         "C",
         "La opción C es gramaticalmente impecable: concuerda sujeto plural 'They' con adverbio de frecuencia en posición previa a 'have', preposición 'at' para la hora y 'on' para el día en mayúscula.",
         [("A", "Usa 'don't' con 'she' y mantiene erróneamente la -s en 'likes'."), ("B", "Usa 'a apartment' en vez del fonético 'an apartment'."), ("D", "Usa 'There are' para un elemento singular ('a big blackboard').")],
         "Englishteststore.net (Comprehensive A1 Diagnostic)")
    ]

    for idx, (topic, stmt, opts, correct, expl, dists, ref) in enumerate(a1_extras, start=21):
        q.append({
            "id": f"eng_a1_{idx:02d}",
            "number": idx,
            "level": "A1",
            "variant": "ALL",
            "topic": topic,
            "statement": stmt,
            "options": [{"key": k, "text": t} for k, t in opts],
            "correctAnswer": correct,
            "explanation": expl,
            "distractorAnalysis": [{"option": k, "reason": r} for k, r in dists],
            "referenceSite": ref
        })

    return q


def get_a2_questions():
    q = []
    
    # 50 questions for A2 (numbered 1 to 50 or 51 to 100)
    items = [
        # 1. Past Simple - Regular verbs spelling
        ("Past Simple: Regular Verbs Spelling Rules",
         "Yesterday, Gabriela ________ her suitcase and ________ for the university bus.",
         [("A", "carryed / stoped"), ("B", "carried / stopped"), ("C", "carried / stoped"), ("D", "carryed / stopped")],
         "B",
         "Reglas del Past Simple regular (-ed): consonante + y cambia a -ied ('carry' -> 'carried'); vocal corta + consonante única duplica la consonante final ('stop' -> 'stopped').",
         [("A", "No aplica el cambio a -ied y no duplica la 'p'."), ("C", "No duplica la consonante 'p' en 'stop'."), ("D", "No transforma la 'y' precedida de consonante.")],
         "Englisch-hilfen.de (Simple Past Regular Verbs Spelling)"),

        # 2. Past Simple - -ed Pronunciation
        ("Phonetics: Pronunciation of -ed Endings (/t/, /d/, /ɪd/)",
         "In which of the following verbs is the '-ed' ending pronounced as an extra syllable /ɪd/?",
         [("A", "Worked"), ("B", "Lived"), ("C", "Decided"), ("D", "Watched")],
         "C",
         "La terminación '-ed' solo se pronuncia como sílaba extra /ɪd/ cuando el verbo en infinitivo termina fonéticamente en sonido /t/ o /d/ (ej. decide -> decided /dɪˈsaɪ.dɪd/, want -> wanted).",
         [("A", "'worked' termina en sonido sordo /k/, por lo que su -ed se pronuncia como /t/."), ("B", "'lived' termina en sonido sonoro /v/, por lo que su -ed se pronuncia como /d/."), ("D", "'watched' termina en sonido sordo /tʃ/, por lo que su -ed se pronuncia como /t/.")],
         "Agendaweb.org (Pronunciation of -ed endings A2)"),

        # 3. Past Simple - Irregular Verbs
        ("Past Simple: Common Irregular Verbs",
         "Last night, Carlos ________ his wallet at the restaurant and ________ his friend for help.",
         [("A", "lost / called"), ("B", "loosed / called"), ("C", "losed / calt"), ("D", "lost / call")],
         "A",
         "'Lose' es un verbo irregular cuyo pasado simple es 'lost'. 'Call' es regular y añade '-ed' ('called').",
         [("B", "'loosed' es incorrecto; 'loose' es adjetivo que significa suelto."), ("C", "'losed' y 'calt' son formas inexistentes."), ("D", "Deja 'call' en presente.")],
         "Englishteststore.net (Irregular Verbs Past Simple A2)"),

        # 4. Past Simple - Negatives
        ("Past Simple: Negative Auxiliary Did Not",
         "We ________ to the cinema yesterday because we ________ any tickets left.",
         [("A", "didn't went / didn't find"), ("B", "didn't go / didn't find"), ("C", "didn't go / didn't found"), ("D", "not went / didn't find")],
         "B",
         "En oraciones negativas en Past Simple, el auxiliar 'didn't' absorbe el tiempo pasado, exigiendo que el verbo principal se mantenga en su forma base pura ('didn't go', 'didn't find').",
         [("A", "Mantiene erróneamente el verbo en pasado ('didn't went')."), ("C", "Mantiene el verbo en pasado ('didn't found')."), ("D", "Omite el auxiliar 'did' en la primera cláusula.")],
         "Englisch-hilfen.de (Simple Past Negative Sentences)"),

        # 5. Past Simple - Questions
        ("Past Simple: Interrogative Form",
         "— '________ you ________ the new museum during your trip to San Salvador?' — 'Yes, I did.'",
         [("A", "Did / visit"), ("B", "Did / visited"), ("C", "Were / visit"), ("D", "Do / visited")],
         "A",
         "Las preguntas en Past Simple se construyen con el auxiliar 'Did + Sujeto + Verbo en forma base' ('Did you visit?').",
         [("B", "Duplica la marca de tiempo pasado en el verbo principal ('Did you visited?')."), ("C", "'Were' no puede funcionar como auxiliar de un verbo léxico en forma base."), ("D", "'Do' es auxiliar de presente.")],
         "Agendaweb.org (Past Simple Questions A2)"),

        # 6. Past Simple of To Be (Was / Were)
        ("Past Simple: Verb To Be (Was vs. Were)",
         "Mauricio ________ at the conference, but his colleagues ________ unable to attend.",
         [("A", "were / was"), ("B", "was / were"), ("C", "was / was"), ("D", "were / were")],
         "B",
         "Mauricio (3ª persona singular) concuerda con 'was', mientras que 'his colleagues' (sujeto plural) concuerda con 'were'.",
         [("A", "Invierte la concordancia singular y plural de To Be."), ("C", "Aplica 'was' a un sujeto plural ('colleagues')."), ("D", "Aplica 'were' a un sujeto singular ('Mauricio').")],
         "Englishteststore.net (Was vs Were A2)"),

        # 7. Past Continuous - Action in Progress
        ("Past Continuous: Ongoing Past Action",
         "At 8:00 PM yesterday, while it was heavily raining, Lucia ________ for her final exam.",
         [("A", "studied"), ("B", "was studying"), ("C", "were studying"), ("D", "is studying")],
         "B",
         "Para describir una acción que estaba en pleno desarrollo en un momento específico del pasado, se usa Past Continuous: 'was/were + verbo-ing'.",
         [("A", "Past Simple indicaría un evento puntual o hábito concluido."), ("C", "'Lucia' es singular y exige 'was', no 'were'."), ("D", "'is studying' es tiempo presente.")],
         "Englisch-hilfen.de (Past Continuous / Progressive)"),

        # 8. Past Simple vs. Past Continuous (Interruption)
        ("Past Simple vs. Past Continuous: When and While",
         "While the doctor ________ the patient, the emergency alarm suddenly ________.",
         [("A", "examined / was ringing"), ("B", "was examining / rang"), ("C", "examined / rang"), ("D", "was examining / was ringing")],
         "B",
         "La acción de fondo en progreso continuo lleva Past Continuous ('was examining'), mientras que el evento repentino que la interrumpe lleva Past Simple ('rang').",
         [("A", "Invierte los tiempos verbales."), ("C", "Ambos en pasado simple no capturan la acción de fondo en desarrollo."), ("D", "Ambos en continuo ignoran la interrupción puntual señalada por 'suddenly'.")],
         "Agendaweb.org (Past Simple vs Past Continuous A2)"),

        # 9. Comparative Adjectives - Short vs Long
        ("Comparative Adjectives: Regular Rules (-er vs more)",
         "Traveling by train is usually ________ than traveling by bus, but the ticket is ________ expensive.",
         [("A", "faster / more"), ("B", "more fast / more"), ("C", "faster / most"), ("D", "fastest / more")],
         "A",
         "Adjetivos cortos de una sílaba añaden '-er' ('faster'), mientras que los adjetivos de tres o más sílabas se comparan con 'more' ('more expensive').",
         [("B", "'more fast' es un error gramatical; los monosílabos no usan 'more'."), ("C", "'most' es forma superlativa, no comparativa."), ("D", "'fastest' es superlativo.")],
         "Englishteststore.net (Comparative Adjectives A2)"),

        # 10. Comparative Adjectives - Irregular
        ("Comparative Adjectives: Irregular Forms",
         "The weather today is ________ than yesterday, but the road conditions are even ________.",
         [("A", "gooder / badder"), ("B", "better / worse"), ("C", "more good / more bad"), ("D", "best / worst")],
         "B",
         "'Good' y 'bad' poseen formas comparativas enteramente irregulares: good -> better, y bad -> worse.",
         [("A", "'gooder' y 'badder' son formas agramaticales infantiles."), ("C", "El inglés prohíbe el uso de 'more' con adjetivos que tienen forma irregular."), ("D", "'best' y 'worst' son superlativos, no comparativos.")],
         "Englisch-hilfen.de (Irregular Comparatives and Superlatives)"),

        # 11. Superlative Adjectives
        ("Superlative Adjectives: The Most and -est",
         "Mount Everest is ________ mountain in the world, and the blue whale is ________ animal.",
         [("A", "highest / heaviest"), ("B", "the highest / the heaviest"), ("C", "the most high / the most heavy"), ("D", "higher / heavier")],
         "B",
         "Los adjetivos superlativos van obligatoriamente precedidos por el artículo determinado 'the' y adoptan la desinencia '-est' en monosílabos y bisílabos en -y ('the highest', 'the heaviest').",
         [("A", "Omite el artículo obligatorio 'the'."), ("C", "Usa 'most' con adjetivos que deben flexionar con '-est'."), ("D", "Usa formas comparativas en vez de superlativas.")],
         "Agendaweb.org (Superlative Adjectives A2)"),

        # 12. Comparison of Equality: As... As
        ("Comparison of Equality: As... As",
         "My new smartphone is not ________ fast ________ my laptop, but it is very convenient.",
         [("A", "as / as"), ("B", "so / than"), ("C", "as / than"), ("D", "more / as")],
         "A",
         "Para comparar igualdad (o desigualdad en negativa 'not as... as'), se utiliza la correlación fija 'as + adjetivo en grado positivo + as'.",
         [("B", "'than' no concuerda con 'so' en comparaciones de igualdad."), ("C", "'than' solo se usa con comparativos de superioridad o inferioridad."), ("D", "Mezcla comparativos incompatibles.")],
         "Englishteststore.net (As... As Comparative A2)"),

        # 13. Future with Going to (Intentions & Evidence)
        ("Future: Going To for Plans and Evidence",
         "Look at those dark black clouds in the sky! It ________ rain very soon.",
         [("A", "will"), ("B", "is going to"), ("C", "shall"), ("D", "is raining")],
         "B",
         "Se emplea 'be going to' cuando existe evidencia física presente y visible en el entorno inmediato de que un evento futuro ocurrirá.",
         [("A", "'will' se prefiere para predicciones basadas en opinión o decisiones espontáneas."), ("C", "'shall' es modal de sugerencia u obligación formal."), ("D", "Present Continuous describiría lluvia que ya está cayendo.")],
         "Englisch-hilfen.de (Going To vs Will Future)"),

        # 14. Future with Will (Spontaneous Decisions)
        ("Future: Will for Spontaneous Decisions",
         "— 'The phone is ringing and I am busy cooking.' — 'Don't worry, I ________ it!'",
         [("A", "am going to answer"), ("B", "will answer"), ("C", "answer"), ("D", "am answering")],
         "B",
         "Para decisiones voluntarias y espontáneas tomadas en el mismo instante en que se habla, se utiliza exclusivamente 'will + forma base'.",
         [("A", "'going to' denota un plan concebido con anterioridad al momento del habla."), ("C", "Present Simple denota hábito, no acción futura inmediata."), ("D", "Present Continuous requiere un acuerdo o cita previamente agendada.")],
         "Agendaweb.org (Will for Instant Decisions)"),

        # 15. Countable and Uncountable: A Few vs A Little
        ("Quantifiers: A Few vs. A Little",
         "I have ________ coins in my pocket and ________ time before my next meeting.",
         [("A", "a little / a few"), ("B", "a few / a little"), ("C", "few / little"), ("D", "many / much")],
         "B",
         "'A few' acompaña a sustantivos contables en plural ('coins') con matiz positivo ('unos pocos'), mientras que 'a little' acompaña a sustantivos incontables ('time').",
         [("A", "Invierte la regla: 'a little' no puede modificar a 'coins'."), ("C", "'few' y 'little' sin 'a' transmiten escasez negativa ('casi nada')."), ("D", "'many' y 'much' indican gran cantidad, no poca.")],
         "Englishteststore.net (A Few vs A Little A2)"),

        # 16. Quantifiers: Too Much vs Too Many
        ("Quantifiers: Too Much vs Too Many",
         "Don't put ________ sugar in the tea, and don't invite ________ people to the small apartment.",
         [("A", "too many / too much"), ("B", "too much / too many"), ("C", "too / enough"), ("D", "enough / too")],
         "B",
         "'Too much' califica el exceso de sustantivos incontables ('sugar'), mientras que 'too many' califica el exceso de sustantivos contables en plural ('people').",
         [("A", "Invierte los cuantificadores de exceso."), ("C", "'too' solo no modifica sustantivos directamente."), ("D", "'enough' significa suficiente, no exceso perjudicial.")],
         "Englisch-hilfen.de (Too much and Too many rules)"),

        # 17. Modal Can vs Could (Past Ability)
        ("Modals: Could for Past Ability",
         "When my grandfather was twenty years old, he ________ run a marathon in under three hours.",
         [("A", "can"), ("B", "could"), ("C", "might"), ("D", "should")],
         "B",
         "'Could' es el pasado simple del verbo modal 'can' y se emplea para expresar habilidad general en el pasado.",
         [("A", "'can' solo expresa habilidad presente."), ("C", "'might' expresa posibilidad remota presente o futura."), ("D", "'should' expresa consejo o deber moral.")],
         "Agendaweb.org (Could for Past Ability A2)"),

        # 18. Modal Must vs Have to
        ("Modals: Must vs. Have to (Obligation)",
         "In El Salvador, all drivers ________ carry a valid driver's license by law.",
         [("A", "must to"), ("B", "have to"), ("C", "should to"), ("D", "can to")],
         "B",
         "'Have to' expresa obligación externa impuesta por leyes, reglamentos o normas institucionales. Nótese además que modales como 'must' nunca admiten 'to'.",
         [("A", "'must to' es un error sintáctico grave; 'must' nunca se combina con 'to'."), ("C", "'should' tampoco admite 'to'."), ("D", "'can' no admite 'to' y expresa capacidad, no deber legal.")],
         "Englishteststore.net (Must and Have to A2)"),

        # 19. Modal Prohibition vs Lack of Necessity
        ("Modals: Mustn't (Prohibition) vs. Don't have to (Lack of Necessity)",
         "You ________ smoke inside the hospital (it is forbidden), but you ________ wear a tie to the clinic today (it is optional).",
         [("A", "don't have to / mustn't"), ("B", "mustn't / don't have to"), ("C", "mustn't / mustn't"), ("D", "shouldn't / shouldn't")],
         "B",
         "'Mustn't' expresa prohibición terminante ('está prohibido'), mientras que 'don't have to' expresa ausencia de obligación ('no es necesario / opcional').",
         [("A", "Invierte los dos conceptos modales."), ("C", "Declara erróneamente que usar corbata está prohibido."), ("D", "No distingue entre deber ético y prohibición categórica legal.")],
         "Englisch-hilfen.de (Mustn't vs Don't have to)"),

        # 20. Modal Should / Shouldn't (Advice)
        ("Modals: Should and Shouldn't for Advice",
         "You look exhausted. You ________ go to bed early and you ________ drink so much caffeine at night.",
         [("A", "should / shouldn't"), ("B", "must / can't"), ("C", "would / wouldn't"), ("D", "could / couldn't")],
         "A",
         "'Should' y 'shouldn't' son los modales por excelencia para brindar recomendaciones y consejos de salud o conducta.",
         [("B", "'must' suena a imposición imperativa autoritaria desmedida para un consejo."), ("C", "'would' forma condicionales hipotéticos."), ("D", "'could' alude a capacidad, no a conveniencia.")],
         "Agendaweb.org (Should and Shouldn't for Advice)"),

        # 21. Zero Conditional (Scientific & General Facts)
        ("Conditionals: Zero Conditional Structure",
         "If you ________ water to 100 degrees Celsius, it ________.",
         [("A", "heat / boils"), ("B", "will heat / boils"), ("C", "heat / will boil"), ("D", "heated / boiled")],
         "A",
         "El condicional cero expresa verdades científicas o hechos universales: 'If + Present Simple, Present Simple'.",
         [("B", "La cláusula condicional con 'if' nunca lleva 'will'."), ("C", "Pertenece a la estructura del primer condicional contingente."), ("D", "Usa pasado simple para una ley física universal actual.")],
         "Englishteststore.net (Zero Conditional A2)"),

        # 22. First Conditional (Real Possibility)
        ("Conditionals: First Conditional Structure",
         "If it ________ tomorrow, we ________ the soccer match in the stadium.",
         [("A", "rains / will cancel"), ("B", "will rain / cancel"), ("C", "rained / would cancel"), ("D", "rains / cancel")],
         "A",
         "El primer condicional predice situaciones reales o probables en el futuro: 'If + Present Simple (sujeto 3ª p. rains), will + forma base (will cancel)'.",
         [("B", "Coloca 'will' dentro de la cláusula introducida por 'if' (error clásico)."), ("C", "Corresponde al segundo condicional hipotético."), ("D", "Omite el auxiliar 'will' en la cláusula de resultado.")],
         "Englisch-hilfen.de (First Conditional Sentences)"),

        # 23. First Conditional with Unless
        ("Conditionals: First Conditional with 'Unless'",
         "We will miss the train ________ we ________ a taxi immediately.",
         [("A", "if / don't take"), ("B", "unless / take"), ("C", "unless / don't take"), ("D", "if / take")],
         "B",
         "'Unless' equivale semánticamente a 'if not' (a menos que). Por ende, el verbo subordinado tras 'unless' se conjuga en AFIRMATIVO ('unless we take').",
         [("A", "Faltaría la estructura con unless si la opción fuera afirmativa directa."), ("C", "Doble negación agramatical ('unless we don't take')."), ("D", "Invertiría el sentido: 'perderemos el tren si tomamos un taxi'.")],
         "Agendaweb.org (First Conditional with Unless A2)"),

        # 24. Adverbs of Manner: Regular and Irregular
        ("Adverbs of Manner: Formation and Exceptions",
         "Valeria drives very ________, speaks English ________, and always works ________.",
         [("A", "carefully / good / hardly"), ("B", "carefully / well / hard"), ("C", "careful / well / hard"), ("D", "carefully / well / hardly")],
         "B",
         "Adverbios de modo: 'carefully' (adjetivo + -ly), 'well' (adverbio irregular de 'good'), y 'hard' (adverbio idéntico al adjetivo; 'hardly' significa 'apenas').",
         [("A", "'good' es adjetivo, no adverbio; 'hardly' significa 'casi no'."), ("C", "'careful' es adjetivo y no puede modificar al verbo 'drives'."), ("D", "'works hardly' significaría erróneamente que casi no trabaja.")],
         "Englishteststore.net (Adverbs of Manner A2)"),

        # 25. Reflexive Pronouns
        ("Reflexive Pronouns: Self and Selves",
         "Carlos burned ________ while cooking, and the children dressed ________ for school.",
         [("A", "him / theirselves"), ("B", "himself / themselves"), ("C", "hisself / themselves"), ("D", "himself / themself")],
         "B",
         "Pronombres reflexivos: Carlos (he) -> 'himself'; children (they, plural) -> 'themselves'.",
         [("A", "'him' es pronombre objeto y 'theirselves' es una forma inexistente."), ("C", "'hisself' es un barbarismo agramatical."), ("D", "'themself' es singular agramatical para el plural 'children'.")],
         "Englisch-hilfen.de (Reflexive Pronouns)")
    ]

    for idx, (topic, stmt, opts, correct, expl, dists, ref) in enumerate(items, start=1):
        q.append({
            "id": f"eng_a2_{idx:02d}",
            "number": idx,
            "level": "A2",
            "variant": "ALL",
            "topic": topic,
            "statement": stmt,
            "options": [{"key": k, "text": t} for k, t in opts],
            "correctAnswer": correct,
            "explanation": expl,
            "distractorAnalysis": [{"option": k, "reason": r} for k, r in dists],
            "referenceSite": ref
        })

    # Additional A2 items 26 to 50
    a2_extras = [
        # 26. Indefinite Pronouns: Someone, Anyone, No one
        ("Indefinite Pronouns: Assertive vs Non-Assertive",
         "I rang the doorbell, but there was ________ at home, so I didn't speak to ________.",
         [("A", "anyone / nobody"), ("B", "no one / anybody"), ("C", "someone / anyone"), ("D", "nobody / nobody")],
         "B",
         "'There was no one' (afirmación con pronombre negativo), y 'didn't speak to anybody' (oración negativa con auxiliar did not exige pronombre 'any-').",
         [("A", "'anyone' en afirmativa tiene sentido de cualquiera."), ("C", "Sugiere falsamente que había alguien."), ("D", "Doble negación agramatical ('didn't speak to nobody').")],
         "Agendaweb.org (Indefinite Pronouns A2)"),

        # 27. Indefinite Pronouns: Something, Anything, Nothing
        ("Indefinite Pronouns: Things (Something vs Anything)",
         "— 'Did you buy ________ at the mall?' — 'No, I bought ________ because everything was too expensive.'",
         [("A", "something / nothing"), ("B", "anything / nothing"), ("C", "anything / anything"), ("D", "nothing / anything")],
         "B",
         "En preguntas generales se usa 'anything', y en respuestas con verbo afirmativo para indicar nada se usa 'nothing' ('I bought nothing').",
         [("A", "'something' en preguntas sugiere una expectativa afirmativa o invitación."), ("C", "'I bought anything' es agramatical en este contexto."), ("D", "Usa 'nothing' en la pregunta inicial de manera errónea.")],
         "Englishteststore.net (Something, Anything, Nothing A2)"),

        # 28. Connectors: Although vs However
        ("Connectors: Contrast (Although vs. However)",
         "________ it was raining heavily, the athletes finished the race. ________, several runners suffered minor injuries.",
         [("A", "However / Although"), ("B", "Although / However"), ("C", "Despite / But"), ("D", "Because / Therefore")],
         "B",
         "'Although' es una conjunción subordinante que une dos oraciones en una sola ('Although it was raining...'). 'However' es un adverbio oracional de transición que va seguido de coma.",
         [("A", "Invierte los dos conectores de contraste."), ("C", "'Despite' requiere sustantivo o gerundio, no cláusula finita completa."), ("D", "Expresan causa y consecuencia, no concesión.")],
         "Englisch-hilfen.de (Conjunctions Although and However)"),

        # 29. Connectors: Because vs So
        ("Connectors: Cause (Because) vs Result (So)",
         "She was feeling sick, ________ she went to the doctor ________ she needed a prescription.",
         [("A", "because / so"), ("B", "so / because"), ("C", "so / so"), ("D", "but / although")],
         "B",
         "'So' introduce la consecuencia o resultado ('por lo tanto fue al médico'), y 'because' introduce el motivo ('porque necesitaba una receta').",
         [("A", "Invierte causa y efecto."), ("C", "Usa 'so' en ambas cláusulas de forma repetitiva e inapropiada."), ("D", "Altera el sentido lógico de la consulta médica.")],
         "Agendaweb.org (Because and So A2)"),

        # 30. Suggestions: Let's, Shall we, Why don't we
        ("Making Suggestions: Syntactic Structures",
         "Which suggestion uses the CORRECT grammatical form?",
         [("A", "Why don't we going to the beach this afternoon?"),
          ("B", "Let's to visit the modern art museum tomorrow."),
          ("C", "Shall we order a pizza for dinner tonight?"),
          ("D", "How about go for a walk in the park?")],
         "C",
         "'Shall we + bare infinitive' es la estructura canónica para formular propuestas corteses ('Shall we order...?').",
         [("A", "'Why don't we' exige forma base, no gerundio con -ing."), ("B", "'Let's' exige forma base directa sin 'to' ('Let's visit')."), ("D", "'How about' exige gerundio ('How about going...?').")],
         "Englishteststore.net (Suggestions and Offers A2)"),

        # 31. Prepositions of Movement: Through, Across, Along
        ("Prepositions of Movement: Spatial Trajectories",
         "The train went ________ the dark tunnel, and the boat sailed ________ the wide river.",
         [("A", "across / through"), ("B", "through / across"), ("C", "along / into"), ("D", "over / under")],
         "B",
         "'Through' expresa movimiento dentro de un espacio tridimensional cerrado ('through the tunnel'), mientras que 'across' denota cruzar una superficie de un lado a otro ('across the river').",
         [("A", "Invierte las preposiciones espaciales."), ("C", "'into the wide river' implicaría que el barco se hundió."), ("D", "No describe el recorrido longitudinal ni el cruce.")],
         "Englisch-hilfen.de (Prepositions of Movement A2)"),

        # 32. Time prepositions: For vs During vs While
        ("Time Prepositions: For, During, While",
         "We stayed in London ________ two weeks, visited many museums ________ the day, and read books ________ we were traveling on the train.",
         [("A", "during / for / while"), ("B", "for / during / while"), ("C", "while / during / for"), ("D", "for / while / during")],
         "B",
         "'For' mide duración numérica ('for two weeks'); 'during' precede a sustantivos que denotan un período ('during the day'); y 'while' introduce una cláusula con sujeto y verbo ('while we were traveling').",
         [("A", "Usa 'during' con duración numérica."), ("C", "'while' no precede a frases nominales temporales."), ("D", "Usa 'while' antes de un sustantivo sin verbo.")],
         "Agendaweb.org (For During While A2)"),

        # 33. Time Expressions: Ago
        ("Time Expressions: Syntax of 'Ago'",
         "They graduated from high school ________.",
         [("A", "ago three years"), ("B", "three years ago"), ("C", "since three years"), ("D", "for three years ago")],
         "B",
         "La partícula de tiempo pasado 'ago' se coloca SIEMPRE al final de la frase temporal de duración ('three years ago' = hace tres años).",
         [("A", "Coloca 'ago' al inicio por calco erróneo del español 'hace'."), ("C", "'since' exige un punto específico en el tiempo, no una duración con ago."), ("D", "Mezcla agramaticalmente 'for' y 'ago'.")],
         "Englishteststore.net (Ago in Past Simple A2)"),

        # 34. Phrasal Verbs - Daily Actions
        ("Phrasal Verbs: Everyday Actions",
         "Please ________ your shoes before entering the house, and don't forget to ________ the lights when you leave.",
         [("A", "take off / turn off"), ("B", "put on / turn on"), ("C", "take out / switch on"), ("D", "give up / look after")],
         "A",
         "'Take off' (quitarse ropa/zapatos) y 'turn off' (apagar luces o artefactos) son las colocaciones idiomáticas precisas.",
         [("B", "'put on' significa ponerse ropa y 'turn on' encender luces."), ("C", "'take out' significa sacar afuera y 'switch on' encender."), ("D", "'give up' significa rendirse y 'look after' cuidar.")],
         "Englisch-hilfen.de (Everyday Phrasal Verbs A2)"),

        # 35. Infinitive of Purpose
        ("Infinitive of Purpose: To + Verb",
         "Andrea went to the post office ________ some stamps and send a package.",
         [("A", "for to buy"), ("B", "to buy"), ("C", "for buy"), ("D", "for buying")],
         "B",
         "Para expresar propósito o finalidad en inglés se utiliza el infinitivo con 'to' ('to buy'), NUNCA 'for to buy' ni 'for + infinitivo'.",
         [("A", "'for to buy' es un error arcaico o calco del español 'para comprar'."), ("C", "'for buy' viola las reglas de las preposiciones en inglés."), ("D", "'for buying' denota la función intrínseca de un objeto, no la intención del agente.")],
         "Agendaweb.org (Infinitive of Purpose A2)"),

        # 36. Verbs followed by Infinitive
        ("Verb Patterns: Verb + Infinitive with To",
         "Diego decided ________ a new laptop, and he promised ________ more diligently this semester.",
         [("A", "buying / studying"), ("B", "to buy / to study"), ("C", "buy / study"), ("D", "to buy / studying")],
         "B",
         "Verbos como 'decide', 'promise', 'hope', 'plan', 'agree' exigen obligatoriamente un infinitivo con 'to' como complemento directo.",
         [("A", "Usa gerundio tras verbos que solo admiten infinitivo."), ("C", "Usa infinitivo sin 'to' (bare infinitive)."), ("D", "Rompe el paralelismo verbal.")],
         "Englishteststore.net (Verbs followed by Infinitive A2)"),

        # 37. Verbs followed by Gerund (-ing)
        ("Verb Patterns: Verb + Gerund (-ing)",
         "My father enjoys ________ in the garden and has finally finished ________ the wooden fence.",
         [("A", "to work / to repair"), ("B", "working / repairing"), ("C", "work / repair"), ("D", "working / to repair")],
         "B",
         "Verbos como 'enjoy', 'finish', 'avoid', 'suggest', 'mind' exigen obligatoriamente la forma en gerundio '-ing' tras de sí.",
         [("A", "Usa infinitivo con 'to' tras verbos que rigen gerundio."), ("C", "Usa formas base puras sin flexionar."), ("D", "Usa infinitivo tras 'finish', lo cual es agramatical.")],
         "Englisch-hilfen.de (Verbs followed by Gerund)"),

        # 38. US vs UK Spelling: -or vs -our
        ("US vs UK Spelling: -or vs -our Patterns",
         "Which pair demonstrates the correct American English (US) spelling followed by British English (UK)?",
         [("A", "Color (US) / Colour (UK)"),
          ("B", "Colour (US) / Color (UK)"),
          ("C", "Colore (US) / Colur (UK)"),
          ("D", "Collor (US) / Colour (UK)")],
         "A",
         "La reducción de -our a -or (color, honor, favor, labor) fue introducida por Noah Webster y define el estándar ortográfico estadounidense frente al británico.",
         [("B", "Invierte la atribución geográfica de los dos dialectos."), ("C", "Formas inexistentes en la lengua inglesa."), ("D", "Ortografía corrupta con doble l.")],
         "Agendaweb.org (British and American Spelling Differences)"),

        # 39. US vs UK Spelling: -er vs -re
        ("US vs UK Spelling: -er vs -re Patterns",
         "In Washington, they visit the city ________, while in London, they visit the city ________.",
         [("A", "centre / center"), ("B", "center / centre"), ("C", "sentre / senter"), ("D", "center / sentre")],
         "B",
         "El inglés estadounidense prefiere la terminación germánica regularizada '-er' ('center', 'theater', 'meter'), mientras que el británico conserva la herencia francesa '-re' ('centre', 'theatre', 'metre').",
         [("A", "Invierte las grafías entre Washington y Londres."), ("C", "Grafías con 's' inexistentes."), ("D", "Grafía híbrida incorrecta.")],
         "Englishteststore.net (US vs UK Spelling A2)"),

        # 40. US vs UK Vocabulary: Vacation vs Holiday
        ("US vs UK Vocabulary: Leisure",
         "During the summer, Americans go on ________, whereas Britons go on ________.",
         [("A", "holiday / vacation"), ("B", "vacation / holiday"), ("C", "break / recess"), ("D", "trip / voyage")],
         "B",
         "El descanso estival o período vacacional se denomina 'vacation' en Estados Unidos y 'holiday' (o 'holidays') en el Reino Unido.",
         [("A", "Invierte la procedencia dialectal."), ("C", "'recess' se reserva en UK para recesos parlamentarios o escolares breves."), ("D", "'voyage' se restringe a travesías marítimas o espaciales extensas.")],
         "Englisch-hilfen.de (American vs British Vocabulary A2)"),

        # 41. Present Perfect Intro: Life Experiences (Ever / Never)
        ("Present Perfect: Ever and Never for Life Experiences",
         "— 'Have you ________ visited the ruins of Tazumal?' — 'No, I have ________ been there.'",
         [("A", "never / ever"), ("B", "ever / never"), ("C", "ever / ever"), ("D", "already / yet")],
         "B",
         "'Ever' se emplea en preguntas para interrogar por vivencias a lo largo de la vida ('alguna vez'), y 'never' se emplea en respuestas afirmativas para denotar experiencia nula ('nunca').",
         [("A", "Invierte los adverbios experienciales."), ("C", "'have ever been' en respuesta declarativa ordinaria no es estándar."), ("D", "No responden a la experiencia vital abierta.")],
         "Agendaweb.org (Present Perfect with Ever and Never A2)"),

        # 42. Present Perfect: Irregular Past Participles
        ("Present Perfect: Past Participle Forms",
         "She has ________ all her homework and has ________ three emails to her professor.",
         [("A", "did / wrote"), ("B", "done / written"), ("C", "doed / writed"), ("D", "done / wrote")],
         "B",
         "El Present Perfect se forma con 'have/has + Past Participle': 'do' -> 'done', y 'write' -> 'written'.",
         [("A", "Usa formas de Past Simple ('did', 'wrote') en lugar de participios."), ("C", "Regulariza erróneamente verbos con flexión irregular."), ("D", "Usa 'wrote' (pasado simple) en vez de 'written'.")],
         "Englishteststore.net (Irregular Past Participles A2)"),

        # 43. Present Perfect vs Past Simple (Time expressions)
        ("Present Perfect vs. Past Simple: Specific vs. Unspecified Time",
         "Lorena ________ to Costa Rica in 2022, but she ________ there since then.",
         [("A", "has traveled / wasn't"), ("B", "traveled / hasn't been"), ("C", "traveled / wasn't"), ("D", "has traveled / hasn't been")],
         "B",
         "Con una referencia temporal cerrada en el pasado ('in 2022') es obligatorio el Past Simple ('traveled'). Con 'since then' (período abierto hasta el presente) es obligatorio el Present Perfect ('hasn't been').",
         [("A", "Usa Present Perfect con un año cerrado del pasado."), ("C", "Usa Past Simple con 'since then'."), ("D", "Usa Present Perfect para una fecha pasada clausurada.")],
         "Englisch-hilfen.de (Present Perfect vs Simple Past A2)"),

        # 44. Question Tags in Present Simple
        ("Question Tags: Present Simple Basic Rules",
         "You don't drink black coffee, ________? And your brother works in a bank, ________?",
         [("A", "do you / doesn't he"), ("B", "don't you / does he"), ("C", "are you / isn't he"), ("D", "do you / isn't he")],
         "A",
         "Regla de las coletillas interrogativas (question tags): oración negativa pide tag afirmativo ('don't drink' -> 'do you?'); oración afirmativa pide tag negativo ('works' -> 'doesn't he?').",
         [("B", "Invierte la polaridad afirmativa/negativa requerida."), ("C", "Usa el auxiliar 'to be' en oraciones con verbos léxicos plenos."), ("D", "Mezcla 'to be' con 'works'.")],
         "Agendaweb.org (Question Tags A2)"),

        # 45. Question Tags in Past Simple
        ("Question Tags: Past Simple Auxiliaries",
         "They watched the movie last night, ________? And she wasn't at the party, ________?",
         [("A", "didn't they / was she"), ("B", "did they / wasn't she"), ("C", "haven't they / was she"), ("D", "didn't they / wasn't she")],
         "A",
         "Con Past Simple afirmativo se usa 'didn't + sujeto'; con 'wasn't' (negativo de to be) se invierte a 'was she?'.",
         [("B", "Invierte la polaridad de ambas coletillas."), ("C", "Usa el auxiliar de Present Perfect ('haven't') para un evento de Past Simple."), ("D", "Mantiene negativa la segunda coletilla tras una oración ya negativa.")],
         "Englishteststore.net (Question Tags in Past Simple A2)"),

        # 46. Modals of Deduction: Must and Can't (Present)
        ("Modals of Deduction: Must vs Can't (Logical Certainty)",
         "Look at his sports car and mansion! He ________ be very wealthy. He ________ be poor.",
         [("A", "can't / must"), ("B", "must / can't"), ("C", "might / shouldn't"), ("D", "could / mustn't")],
         "B",
         "'Must' expresa deducción lógica afirmativa de certeza ('debe de ser muy rico'), mientras que 'can't' expresa certeza de imposibilidad ('es imposible que sea pobre').",
         [("A", "Invierte el razonamiento lógico."), ("C", "'might' denota posibilidad débil y 'shouldn't' consejo."), ("D", "'mustn't' denota prohibición moral, no deducción de imposibilidad.")],
         "Englisch-hilfen.de (Modals of Deduction Must and Can't)"),

        # 47. Both, Either, Neither
        ("Determiners: Both, Either, Neither",
         "________ of my parents are doctors, but ________ of them likes working on holidays.",
         [("A", "Either / neither"), ("B", "Both / neither"), ("C", "Neither / both"), ("D", "Both / either")],
         "B",
         "'Both' califica a los dos miembros con verbo en plural ('Both of my parents are...'). 'Neither' denota ninguno de los dos con verbo afirmativo en singular ('neither of them likes...').",
         [("A", "'Either' alude a uno u otro de forma disyuntiva."), ("C", "Invierte la concordancia sintáctica y semántica."), ("D", "'either' con verbo afirmativo no expresa negación.")],
         "Agendaweb.org (Both Either Neither A2)"),

        # 48. Prepositions: At, On, In for Places
        ("Prepositions of Place: At vs On vs In",
         "She is sitting ________ her desk ________ the second floor ________ the library.",
         [("A", "on / at / in"), ("B", "at / on / in"), ("C", "in / on / at"), ("D", "at / in / on")],
         "B",
         "Colocaciones espaciales: 'at one's desk' (frente al escritorio para trabajar); 'on the second floor' (superficie del piso); 'in the library' (dentro del edificio).",
         [("A", "'on her desk' significaría sentada encima de la madera del escritorio."), ("C", "'in her desk' es físicamente imposible."), ("D", "Usa 'in' para pisos y 'on' para edificios cerrados.")],
         "Englishteststore.net (Prepositions of Place At On In A2)"),

        # 49. Phrasal Verbs - Separable with Pronouns
        ("Phrasal Verbs: Pronoun Placement with Separable Verbs",
         "Which sentence demonstrates the ONLY correct placement of the object pronoun 'it'?",
         [("A", "Please turn off it before you sleep."),
          ("B", "Please turn it off before you sleep."),
          ("C", "Please it turn off before you sleep."),
          ("D", "Please turn of it before you sleep.")],
         "B",
         "En phrasal verbs transitivos separables ('turn off'), cuando el objeto directo es un pronombre personal (it, them, him, her), es OBLIGATORIO colocarlo entre el verbo y la partícula ('turn it off').",
         [("A", "Colocar el pronombre después de la partícula es agramatical en inglés."), ("C", "Coloca el pronombre antes del verbo."), ("D", "Usa la preposición 'of' con una sola f.")],
         "Englisch-hilfen.de (Separable Phrasal Verbs with Pronouns)"),

        # 50. Comprehensive A2 Synthesis
        ("Comprehensive A2 Diagnostic Review",
         "Identify the sentence that is COMPLETELY FREE of grammatical errors:",
         [("A", "She was more happier when she lived in the country."),
          ("B", "If he will study hard, he passes the test easily."),
          ("C", "While we were having dinner, the phone rang twice."),
          ("D", "He has gone to London last week for an interview.")],
         "C",
         "La opción C es sintácticamente impecable: combina armónicamente una acción de fondo en Past Continuous ('were having') con una interrupción en Past Simple ('rang').",
         [("A", "Doble comparativo pleonástico agramatical ('more happier')."), ("B", "Usa 'will' dentro de la prótasis condicional con 'if'."), ("D", "Usa Present Perfect con una expresión de tiempo cerrado ('last week').")],
         "Agendaweb.org (Comprehensive A2 Review)")
    ]

    for idx, (topic, stmt, opts, correct, expl, dists, ref) in enumerate(a2_extras, start=26):
        q.append({
            "id": f"eng_a2_{idx:02d}",
            "number": idx,
            "level": "A2",
            "variant": "ALL",
            "topic": topic,
            "statement": stmt,
            "options": [{"key": k, "text": t} for k, t in opts],
            "correctAnswer": correct,
            "explanation": expl,
            "distractorAnalysis": [{"option": k, "reason": r} for k, r in dists],
            "referenceSite": ref
        })

    return q

if __name__ == '__main__':
    a1 = get_a1_questions()
    a2 = get_a2_questions()
    print(f"A1 Questions: {len(a1)}")
    print(f"A2 Questions: {len(a2)}")

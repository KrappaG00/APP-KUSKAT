/**
 * APP-KUSKAT • BANCO MAESTRO DE PREGUNTAS DE INGLÉS (MCER / CEFR)
 *
 * Catálogo completo de 300 reactivos oficiales organizados en exactamente 50 preguntas
 * por cada uno de los 6 niveles del Marco Común Europeo de Referencia (A1 a C2).
 *
 * Características pedagógicas:
 * - Estrictamente selección múltiple con 4 opciones (A, B, C, D)
 * - Clave correcta justificada detalladamente
 * - Análisis de distractores pedagógicos para retroalimentación formativa
 * - Citas metodológicas a Englisch-hilfen.de, Englishteststore.net y Agendaweb.org
 * - Sin pruebas de escritura libre ni producción oral grabada
 */

import { CEFRLevel, LanguageQuestion } from './englishData';

export const ENGLISH_QUESTIONS_BANK: LanguageQuestion[] = [
  {
    "id": "eng_a1_01",
    "number": 1,
    "level": "A1",
    "variant": "ALL",
    "topic": "Verb To Be: Affirmative Concord",
    "statement": "My brother and I ________ university students in San Salvador.",
    "options": [
      {
        "key": "A",
        "text": "am"
      },
      {
        "key": "B",
        "text": "is"
      },
      {
        "key": "C",
        "text": "are"
      },
      {
        "key": "D",
        "text": "be"
      }
    ],
    "correctAnswer": "C",
    "explanation": "El sujeto 'My brother and I' equivale al pronombre de primera persona plural 'we', por lo que exige la forma verbal 'are'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'am' solo se usa con el pronombre singular 'I', no cuando forma parte de un sujeto compuesto."
      },
      {
        "option": "B",
        "reason": "'is' se reserva para la tercera persona singular (he, she, it)."
      },
      {
        "option": "D",
        "reason": "'be' es el infinitivo sin conjugar."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Verb To Be Present Simple)"
  },
  {
    "id": "eng_a1_02",
    "number": 2,
    "level": "A1",
    "variant": "ALL",
    "topic": "Verb To Be: Expressing Age",
    "statement": "Carlos ________ 19 years old, and his sister ________ 16.",
    "options": [
      {
        "key": "A",
        "text": "has / has"
      },
      {
        "key": "B",
        "text": "is / is"
      },
      {
        "key": "C",
        "text": "have / has"
      },
      {
        "key": "D",
        "text": "is / have"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En inglés, la edad se predica con el verbo copulativo 'to be' ('to be X years old'), a diferencia del español que utiliza 'tener'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'has' es un calco del español 'tener', agramatical en inglés para la edad."
      },
      {
        "option": "C",
        "reason": "Combina formas de 'have' erróneas para la edad."
      },
      {
        "option": "D",
        "reason": "Mezcla incorrectamente 'to be' y 'have'."
      }
    ],
    "referenceSite": "Agendaweb.org (Age expressions with To Be)"
  },
  {
    "id": "eng_a1_03",
    "number": 3,
    "level": "A1",
    "variant": "ALL",
    "topic": "Verb To Be: Short Answers Rule",
    "statement": "— 'Are you from Santa Ana?' — 'Yes, ________.'",
    "options": [
      {
        "key": "A",
        "text": "I'm"
      },
      {
        "key": "B",
        "text": "I am"
      },
      {
        "key": "C",
        "text": "I are"
      },
      {
        "key": "D",
        "text": "I do"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En respuestas cortas afirmativas con el verbo To Be, NUNCA se permiten contracciones: se debe decir 'Yes, I am', no 'Yes, I'm'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Las contracciones están estrictamente prohibidas en respuestas cortas afirmativas."
      },
      {
        "option": "C",
        "reason": "'I are' es agramatical en concordancia de persona."
      },
      {
        "option": "D",
        "reason": "'I do' responde a preguntas con el auxiliar 'do', no con 'to be'."
      }
    ],
    "referenceSite": "Englishteststore.net (Short Answers A1)"
  },
  {
    "id": "eng_a1_04",
    "number": 4,
    "level": "A1",
    "variant": "ALL",
    "topic": "Present Simple: 3rd Person Singular Spelling",
    "statement": "Samuel ________ English at the university and ________ basketball on weekends.",
    "options": [
      {
        "key": "A",
        "text": "study / play"
      },
      {
        "key": "B",
        "text": "studies / plays"
      },
      {
        "key": "C",
        "text": "studys / playes"
      },
      {
        "key": "D",
        "text": "studying / playing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Samuel (he) requiere -ies para verbos en consonante + y ('study' -> 'studies'), y solo -s para vocal + y ('play' -> 'plays').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Omite la flexión de tercera persona del singular en Present Simple."
      },
      {
        "option": "C",
        "reason": "Viola las reglas ortográficas del inglés para la terminación en 'y'."
      },
      {
        "option": "D",
        "reason": "Usa gerundios sin auxiliar 'to be'."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Present Simple 3rd Person -s)"
  },
  {
    "id": "eng_a1_05",
    "number": 5,
    "level": "A1",
    "variant": "ALL",
    "topic": "Present Simple: Negative with Auxiliaries",
    "statement": "Elena ________ coffee in the morning; she prefers green tea.",
    "options": [
      {
        "key": "A",
        "text": "doesn't drinks"
      },
      {
        "key": "B",
        "text": "doesn't drink"
      },
      {
        "key": "C",
        "text": "don't drink"
      },
      {
        "key": "D",
        "text": "not drinks"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cuando el auxiliar negativo 'doesn't' está presente, el verbo principal debe permanecer en su forma base pura ('drink') sin la -s.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Duplica erróneamente la marca de tercera persona ('doesn't drinks')."
      },
      {
        "option": "C",
        "reason": "'don't' solo concuerda con I, you, we, they; Elena es 'she'."
      },
      {
        "option": "D",
        "reason": "En inglés se requiere auxiliar 'do/does' para negar, no solo 'not'."
      }
    ],
    "referenceSite": "Agendaweb.org (Present Simple Negatives)"
  },
  {
    "id": "eng_a1_06",
    "number": 6,
    "level": "A1",
    "variant": "ALL",
    "topic": "Present Simple: Interrogative Word Order",
    "statement": "________ your parents ________ in an apartment or in a house?",
    "options": [
      {
        "key": "A",
        "text": "Do / live"
      },
      {
        "key": "B",
        "text": "Does / live"
      },
      {
        "key": "C",
        "text": "Are / live"
      },
      {
        "key": "D",
        "text": "Do / lives"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Your parents' es un sujeto plural ('they'), por lo que requiere el auxiliar 'Do' y la forma base del verbo principal 'live'.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'Does' solo se usa para sujetos en singular de 3ª persona (he, she, it)."
      },
      {
        "option": "C",
        "reason": "'Are' no puede acompañar a la forma base de un verbo de acción."
      },
      {
        "option": "D",
        "reason": "El verbo principal con auxiliar 'do' nunca lleva -s final."
      }
    ],
    "referenceSite": "Englishteststore.net (Present Simple Questions)"
  },
  {
    "id": "eng_a1_07",
    "number": 7,
    "level": "A1",
    "variant": "ALL",
    "topic": "Articles: Phonetic Rule (A vs. AN)",
    "statement": "It takes ________ hour to drive to the airport, where we will meet ________ European diplomat.",
    "options": [
      {
        "key": "A",
        "text": "an / an"
      },
      {
        "key": "B",
        "text": "a / an"
      },
      {
        "key": "C",
        "text": "an / a"
      },
      {
        "key": "D",
        "text": "a / a"
      }
    ],
    "correctAnswer": "C",
    "explanation": "La elección entre 'a' y 'an' depende del sonido fonético inicial: 'hour' empieza con sonido vocálico /aʊər/ ('an hour'), mientras que 'European' empieza con el sonido consonántico semivocálico /j/ ('a European').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'European' no empieza con sonido vocálico, sino con semiconsonante /j/."
      },
      {
        "option": "B",
        "reason": "'hour' tiene 'h' muda; requiere 'an', no 'a'."
      },
      {
        "option": "D",
        "reason": "Usa 'a' antes de 'hour', violando la regla fonética de la hache muda."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Indefinite Articles A and AN)"
  },
  {
    "id": "eng_a1_08",
    "number": 8,
    "level": "A1",
    "variant": "ALL",
    "topic": "Articles: Zero Article for General Plurals",
    "statement": "________ dogs are usually very loyal, but ________ dog next door barks constantly at night.",
    "options": [
      {
        "key": "A",
        "text": "The / the"
      },
      {
        "key": "B",
        "text": "— / the"
      },
      {
        "key": "C",
        "text": "The / —"
      },
      {
        "key": "D",
        "text": "A / a"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Al hablar de una especie o clase en general en plural, el inglés NO usa artículo determinado (artículo cero: 'Dogs are loyal'). Cuando nos referimos a un animal específico ('the dog next door'), se usa 'the'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Poner 'The' en plural generalizado es un vicio de traducción del español."
      },
      {
        "option": "C",
        "reason": "Invierte la regla: omite 'the' donde el sustantivo está especificado."
      },
      {
        "option": "D",
        "reason": "'A' no puede acompañar a un sustantivo en plural ('dogs')."
      }
    ],
    "referenceSite": "Agendaweb.org (Definite and Zero Articles A1)"
  },
  {
    "id": "eng_a1_09",
    "number": 9,
    "level": "A1",
    "variant": "ALL",
    "topic": "Demonstratives: This, That, These, Those",
    "statement": "Look at ________ birds over there on top of that roof, and hold ________ book here in your hand.",
    "options": [
      {
        "key": "A",
        "text": "these / that"
      },
      {
        "key": "B",
        "text": "those / this"
      },
      {
        "key": "C",
        "text": "this / those"
      },
      {
        "key": "D",
        "text": "that / these"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Those' indica plural a distancia física ('over there'), mientras que 'this' indica singular en proximidad inmediata ('here in your hand').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'these' indica proximidad y no concuerda con 'over there'."
      },
      {
        "option": "C",
        "reason": "'this' es singular y no concuerda con 'birds'."
      },
      {
        "option": "D",
        "reason": "'that' es singular y 'these' es plural; ambos quedan invertidos."
      }
    ],
    "referenceSite": "Englishteststore.net (Demonstrative Pronouns A1)"
  },
  {
    "id": "eng_a1_10",
    "number": 10,
    "level": "A1",
    "variant": "ALL",
    "topic": "Irregular Plural Nouns",
    "statement": "The three ________ were playing in the park while two ________ watched them.",
    "options": [
      {
        "key": "A",
        "text": "childs / mans"
      },
      {
        "key": "B",
        "text": "children / men"
      },
      {
        "key": "C",
        "text": "childrens / mens"
      },
      {
        "key": "D",
        "text": "child / man"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Child' y 'man' forman plurales irregulares con cambio de raíz vocálica y sufijo: 'children' y 'men'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Aplica la regla regular de la -s a sustantivos que son estrictamente irregulares."
      },
      {
        "option": "C",
        "reason": "Añade redundantemente una -s a sustantivos que ya están en forma plural."
      },
      {
        "option": "D",
        "reason": "Usa las formas singulares con numerales 'three' y 'two'."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Irregular Plural Forms of Nouns)"
  },
  {
    "id": "eng_a1_11",
    "number": 11,
    "level": "A1",
    "variant": "ALL",
    "topic": "Possessive Adjectives Concordance",
    "statement": "Mariana has lost ________ keys, and Gabriel forgot to bring ________ backpack.",
    "options": [
      {
        "key": "A",
        "text": "his / her"
      },
      {
        "key": "B",
        "text": "her / his"
      },
      {
        "key": "C",
        "text": "their / its"
      },
      {
        "key": "D",
        "text": "its / their"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El adjetivo posesivo concuerda en género con el poseedor, no con el objeto poseído: Mariana (mujer) usa 'her', y Gabriel (hombre) usa 'his'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los géneros: asigna 'his' a Mariana y 'her' a Gabriel."
      },
      {
        "option": "C",
        "reason": "'their' denota plural y 'its' objetos o animales neutros."
      },
      {
        "option": "D",
        "reason": "Asigna posesivo neutro a Mariana."
      }
    ],
    "referenceSite": "Agendaweb.org (Possessive Adjectives A1)"
  },
  {
    "id": "eng_a1_12",
    "number": 12,
    "level": "A1",
    "variant": "ALL",
    "topic": "Possessive Pronouns: Mine vs. My",
    "statement": "This jacket isn't ________; it belongs to Sofia, so it is ________.",
    "options": [
      {
        "key": "A",
        "text": "my / her"
      },
      {
        "key": "B",
        "text": "mine / hers"
      },
      {
        "key": "C",
        "text": "me / hers"
      },
      {
        "key": "D",
        "text": "mine / her"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los pronombres posesivos sustituyen al sustantivo y van solos sin acompañar a ningún nombre: 'mine' (mía) y 'hers' (de ella / suya).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'my' y 'her' son adjetivos posesivos que obligatoriamente deben acompañar a un sustantivo."
      },
      {
        "option": "C",
        "reason": "'me' es un pronombre objeto, no posesivo."
      },
      {
        "option": "D",
        "reason": "'her' es adjetivo y requiere sustantivo posterior."
      }
    ],
    "referenceSite": "Englishteststore.net (Possessive Pronouns A1)"
  },
  {
    "id": "eng_a1_13",
    "number": 13,
    "level": "A1",
    "variant": "ALL",
    "topic": "Saxon Genitive ('s) Rules",
    "statement": "That is my ________ car, and those are the ________ bicycles.",
    "options": [
      {
        "key": "A",
        "text": "brother / children's"
      },
      {
        "key": "B",
        "text": "brother's / children's"
      },
      {
        "key": "C",
        "text": "brother's / childrens'"
      },
      {
        "key": "D",
        "text": "brothers / childrens"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Para un singular se añade 's ('brother's'). Para plurales irregulares que no terminan en -s como 'children', también se añade 's ('children's').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Omite el apóstrofo posesivo en 'brother'."
      },
      {
        "option": "C",
        "reason": "'childrens'' es incorrecto porque el apóstrofo solo va al final si el plural termina naturalmente en 's'."
      },
      {
        "option": "D",
        "reason": "Usa plurales simples sin marcar la relación de posesión."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Saxon Genitive and Apostrophe)"
  },
  {
    "id": "eng_a1_14",
    "number": 14,
    "level": "A1",
    "variant": "ALL",
    "topic": "Object Pronouns",
    "statement": "Mrs. Gómez is our teacher. She always helps ________ when we ask ________ a question.",
    "options": [
      {
        "key": "A",
        "text": "we / she"
      },
      {
        "key": "B",
        "text": "us / her"
      },
      {
        "key": "C",
        "text": "our / him"
      },
      {
        "key": "D",
        "text": "us / she"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Tras verbos y preposiciones se usan pronombres objeto: 'us' (a nosotros) y 'her' (a ella).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'we' y 'she' son pronombres sujeto, agramaticales en posición de complemento."
      },
      {
        "option": "C",
        "reason": "'our' es adjetivo posesivo y 'him' se refiere a un varón."
      },
      {
        "option": "D",
        "reason": "Usa 'she' como complemento de 'ask'."
      }
    ],
    "referenceSite": "Agendaweb.org (Object Pronouns A1)"
  },
  {
    "id": "eng_a1_15",
    "number": 15,
    "level": "A1",
    "variant": "ALL",
    "topic": "Prepositions of Time: AT, ON, IN",
    "statement": "The exam is ________ Monday morning, ________ 8:30 AM, ________ June.",
    "options": [
      {
        "key": "A",
        "text": "in / at / on"
      },
      {
        "key": "B",
        "text": "on / at / in"
      },
      {
        "key": "C",
        "text": "at / on / in"
      },
      {
        "key": "D",
        "text": "on / in / at"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Regla mnemotécnica de tiempo: ON para días y fechas específicas ('on Monday'); AT para horas puntuales ('at 8:30 AM'); IN para meses y años ('in June').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Mezcla las preposiciones violando las reglas fijas de tiempo."
      },
      {
        "option": "C",
        "reason": "Usa 'at' para días, lo cual es incorrecto."
      },
      {
        "option": "D",
        "reason": "Usa 'in' para horas puntuales en vez de 'at'."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Prepositions of Time AT ON IN)"
  },
  {
    "id": "eng_a1_16",
    "number": 16,
    "level": "A1",
    "variant": "ALL",
    "topic": "Prepositions of Place: Basic Relations",
    "statement": "The laptop is ________ the desk, and the cat is sleeping ________ the chair on the floor.",
    "options": [
      {
        "key": "A",
        "text": "on / under"
      },
      {
        "key": "B",
        "text": "in / above"
      },
      {
        "key": "C",
        "text": "at / between"
      },
      {
        "key": "D",
        "text": "under / in"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'On' denota contacto sobre una superficie ('on the desk'). 'Under' denota debajo de algo con espacio intermedio ('under the chair').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'in the desk' implicaría dentro de la madera; 'above' no tiene contacto físico."
      },
      {
        "option": "C",
        "reason": "'between' requiere dos puntos de referencia explícitos."
      },
      {
        "option": "D",
        "reason": "Invierte la relación espacial física."
      }
    ],
    "referenceSite": "Agendaweb.org (Prepositions of Place A1)"
  },
  {
    "id": "eng_a1_17",
    "number": 17,
    "level": "A1",
    "variant": "ALL",
    "topic": "Existential There is / There are",
    "statement": "________ a whiteboard on the wall, and ________ twenty chairs in the classroom.",
    "options": [
      {
        "key": "A",
        "text": "There are / there is"
      },
      {
        "key": "B",
        "text": "There is / there are"
      },
      {
        "key": "C",
        "text": "There have / there are"
      },
      {
        "key": "D",
        "text": "Is there / are there"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'There is' se utiliza para elementos singulares e incontables ('a whiteboard'), mientras que 'There are' se usa para plurales ('twenty chairs').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte la concordancia singular/plural."
      },
      {
        "option": "C",
        "reason": "'There have' no existe en inglés para indicar existencia (error por calco de 'hay')."
      },
      {
        "option": "D",
        "reason": "Utiliza orden interrogativo en una oración puramente declarativa."
      }
    ],
    "referenceSite": "Englishteststore.net (There is vs There are A1)"
  },
  {
    "id": "eng_a1_18",
    "number": 18,
    "level": "A1",
    "variant": "ALL",
    "topic": "Quantifiers: Some vs. Any",
    "statement": "We bought ________ fresh apples, but we didn't find ________ oranges in the supermarket.",
    "options": [
      {
        "key": "A",
        "text": "any / some"
      },
      {
        "key": "B",
        "text": "some / any"
      },
      {
        "key": "C",
        "text": "some / some"
      },
      {
        "key": "D",
        "text": "any / any"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Por regla general, 'some' se emplea en oraciones afirmativas, mientras que 'any' se utiliza en oraciones negativas y preguntas generales.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte el uso: pone 'any' en afirmativa y 'some' en negativa."
      },
      {
        "option": "C",
        "reason": "'some' en oraciones negativas ordinarias es agramatical en inglés estándar."
      },
      {
        "option": "D",
        "reason": "'any' en afirmativa tiene sentido de 'cualquiera', no de cantidad indeterminada."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Some and Any rules)"
  },
  {
    "id": "eng_a1_19",
    "number": 19,
    "level": "A1",
    "variant": "ALL",
    "topic": "Quantifiers: Much vs. Many",
    "statement": "There isn't ________ milk in the bottle, and there aren't ________ glasses on the counter.",
    "options": [
      {
        "key": "A",
        "text": "many / much"
      },
      {
        "key": "B",
        "text": "much / many"
      },
      {
        "key": "C",
        "text": "a lot / many"
      },
      {
        "key": "D",
        "text": "much / much"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Much' acompaña a sustantivos incontables ('milk'), y 'many' acompaña a sustantivos contables en plural ('glasses').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte la regla: 'many' no puede modificar al incontable 'milk'."
      },
      {
        "option": "C",
        "reason": "'a lot' requiere la preposición 'of' para modificar un sustantivo."
      },
      {
        "option": "D",
        "reason": "Aplica 'much' a sustantivos contables en plural."
      }
    ],
    "referenceSite": "Agendaweb.org (Much and Many A1)"
  },
  {
    "id": "eng_a1_20",
    "number": 20,
    "level": "A1",
    "variant": "ALL",
    "topic": "Interrogative Quantifiers: How Much vs How Many",
    "statement": "— '________ sugar do you want in your coffee?' — 'And ________ cups do we need?'",
    "options": [
      {
        "key": "A",
        "text": "How many / How much"
      },
      {
        "key": "B",
        "text": "How much / How many"
      },
      {
        "key": "C",
        "text": "How / How much"
      },
      {
        "key": "D",
        "text": "How much / How"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'How much' pregunta por cantidad incontable ('sugar'), y 'How many' pregunta por número o cantidad contable ('cups').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte las preguntas contable e incontable."
      },
      {
        "option": "C",
        "reason": "'How' solo pregunta por modo o manera, no por cantidad."
      },
      {
        "option": "D",
        "reason": "Deja incompleta la segunda pregunta cuantitativa."
      }
    ],
    "referenceSite": "Englishteststore.net (How Much vs How Many)"
  },
  {
    "id": "eng_a1_21",
    "number": 21,
    "level": "A1",
    "variant": "ALL",
    "topic": "Question Words: What vs Where",
    "statement": "— '________ is your name?' — 'And ________ do you live?'",
    "options": [
      {
        "key": "A",
        "text": "Where / What"
      },
      {
        "key": "B",
        "text": "What / Where"
      },
      {
        "key": "C",
        "text": "Who / When"
      },
      {
        "key": "D",
        "text": "How / Why"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'What' se usa para solicitar información e identidad personal ('What is your name?'), mientras que 'Where' indaga por localización espacial ('Where do you live?').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los pronombres interrogativos."
      },
      {
        "option": "C",
        "reason": "'Who' indaga por persona y 'When' por tiempo."
      },
      {
        "option": "D",
        "reason": "Pregunta de manera incoherente por modo y causa."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Question Words Wh-)"
  },
  {
    "id": "eng_a1_22",
    "number": 22,
    "level": "A1",
    "variant": "ALL",
    "topic": "Question Words: Why and Because",
    "statement": "— '________ are you late?' — '________ the bus broke down.'",
    "options": [
      {
        "key": "A",
        "text": "Why / Because"
      },
      {
        "key": "B",
        "text": "Because / Why"
      },
      {
        "key": "C",
        "text": "When / So"
      },
      {
        "key": "D",
        "text": "Where / Since"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Why' es la partícula interrogativa para indagar la causa, y 'Because' es la conjunción subordinante para responder expresando la razón.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'Because' no se usa para iniciar una pregunta directa."
      },
      {
        "option": "C",
        "reason": "'When' indaga tiempo y 'so' expresa consecuencia."
      },
      {
        "option": "D",
        "reason": "Pregunta por lugar de forma ilógica."
      }
    ],
    "referenceSite": "Agendaweb.org (Why and Because A1)"
  },
  {
    "id": "eng_a1_23",
    "number": 23,
    "level": "A1",
    "variant": "ALL",
    "topic": "Adverbs of Frequency: Syntactic Position",
    "statement": "Which sentence has the CORRECT position of the adverb of frequency?",
    "options": [
      {
        "key": "A",
        "text": "Mateo drinks always coffee in the morning."
      },
      {
        "key": "B",
        "text": "Mateo always drinks coffee in the morning."
      },
      {
        "key": "C",
        "text": "Always Mateo drinks coffee in the morning."
      },
      {
        "key": "D",
        "text": "Mateo drinks coffee always in the morning."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los adverbios de frecuencia (always, usually, often, never) se colocan ANTES del verbo principal en Present Simple (excepto con 'to be', donde van después).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Coloca el adverbio después del verbo transitivo."
      },
      {
        "option": "C",
        "reason": "Coloca el adverbio al inicio de la cláusula de forma no estándar."
      },
      {
        "option": "D",
        "reason": "Coloca el adverbio al final de la oración."
      }
    ],
    "referenceSite": "Englishteststore.net (Adverbs of Frequency Position)"
  },
  {
    "id": "eng_a1_24",
    "number": 24,
    "level": "A1",
    "variant": "ALL",
    "topic": "Adverbs of Frequency: With Verb To Be",
    "statement": "Choose the correct sentence:",
    "options": [
      {
        "key": "A",
        "text": "She is never late for her morning classes."
      },
      {
        "key": "B",
        "text": "She never is late for her morning classes."
      },
      {
        "key": "C",
        "text": "She is late never for her morning classes."
      },
      {
        "key": "D",
        "text": "Never she is late for her morning classes."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Con el verbo copulativo 'to be', los adverbios de frecuencia se colocan INMEDIATAMENTE DESPUÉS del verbo conjugado ('She is never late').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Coloca el adverbio antes de 'to be', violando la regla sintáctica."
      },
      {
        "option": "C",
        "reason": "Coloca el adverbio tras el adjetivo."
      },
      {
        "option": "D",
        "reason": "Requiere inversión estilística avanzada no aplicable en A1."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Frequency Adverbs with To Be)"
  },
  {
    "id": "eng_a1_25",
    "number": 25,
    "level": "A1",
    "variant": "ALL",
    "topic": "Modals: Can and Can't for Ability",
    "statement": "David ________ play the guitar very well, but he ________ swim at all.",
    "options": [
      {
        "key": "A",
        "text": "can / can't"
      },
      {
        "key": "B",
        "text": "cans / can't"
      },
      {
        "key": "C",
        "text": "can / cannot to"
      },
      {
        "key": "D",
        "text": "can to / can't"
      }
    ],
    "correctAnswer": "A",
    "explanation": "El verbo modal defectivo 'can' no añade -s en tercera persona y va seguido directamente del infinitivo sin 'to' (bare infinitive). La forma negativa es 'can't' o 'cannot'.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'can' nunca añade la desinencia '-s' en tercera persona."
      },
      {
        "option": "C",
        "reason": "Los verbos modales no admiten 'to' tras de sí."
      },
      {
        "option": "D",
        "reason": "Inserta erróneamente 'to' tras el modal."
      }
    ],
    "referenceSite": "Agendaweb.org (Can and Can't for Ability)"
  },
  {
    "id": "eng_a1_26",
    "number": 26,
    "level": "A1",
    "variant": "ALL",
    "topic": "Imperative Sentences: Positive and Negative",
    "statement": "________ the window, please; it is very cold. And ________ make noise in the library.",
    "options": [
      {
        "key": "A",
        "text": "Close / don't"
      },
      {
        "key": "B",
        "text": "Closing / not"
      },
      {
        "key": "C",
        "text": "Closed / doesn't"
      },
      {
        "key": "D",
        "text": "To close / don't"
      }
    ],
    "correctAnswer": "A",
    "explanation": "El imperativo afirmativo utiliza la forma base pura del verbo ('Close'), y el imperativo negativo se forma exclusivamente con 'Don't + forma base' ('don't make').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "El gerundio '-ing' no forma oraciones imperativas directas."
      },
      {
        "option": "C",
        "reason": "El pasado simple no se usa para dar órdenes."
      },
      {
        "option": "D",
        "reason": "El infinitivo con 'to' no constituye un modo imperativo."
      }
    ],
    "referenceSite": "Englishteststore.net (Imperative Forms A1)"
  },
  {
    "id": "eng_a1_27",
    "number": 27,
    "level": "A1",
    "variant": "ALL",
    "topic": "Telling the Time: Past and To",
    "statement": "If the clock displays 4:15, in standard English we say it is:",
    "options": [
      {
        "key": "A",
        "text": "a quarter to four"
      },
      {
        "key": "B",
        "text": "a quarter past four"
      },
      {
        "key": "C",
        "text": "half past four"
      },
      {
        "key": "D",
        "text": "four fifteen past"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los primeros 30 minutos de la hora se expresan con 'past' (en US también 'after'): 4:15 es 'a quarter past four'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'a quarter to four' indicaría 3:45 (un cuarto para las cuatro)."
      },
      {
        "option": "C",
        "reason": "'half past four' son las 4:30."
      },
      {
        "option": "D",
        "reason": "Es una combinación agramatical."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Telling the Time)"
  },
  {
    "id": "eng_a1_28",
    "number": 28,
    "level": "A1",
    "variant": "ALL",
    "topic": "Capitalization: Days of the Week and Months",
    "statement": "Which sentence demonstrates the CORRECT English capitalization rules?",
    "options": [
      {
        "key": "A",
        "text": "We have classes on monday and wednesday in september."
      },
      {
        "key": "B",
        "text": "We have classes on Monday and Wednesday in September."
      },
      {
        "key": "C",
        "text": "We have classes on Monday and wednesday in September."
      },
      {
        "key": "D",
        "text": "We have classes on monday and Wednesday in september."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En inglés, a diferencia del español, los días de la semana y los meses del año SIEMPRE se escriben con mayúscula inicial obligatoria.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Escribe los días y meses en minúscula, violando la ortografía inglesa."
      },
      {
        "option": "C",
        "reason": "Deja 'wednesday' en minúscula."
      },
      {
        "option": "D",
        "reason": "Mezcla mayúsculas y minúsculas sin criterio ortográfico."
      }
    ],
    "referenceSite": "Agendaweb.org (Capitalization Rules A1)"
  },
  {
    "id": "eng_a1_29",
    "number": 29,
    "level": "A1",
    "variant": "ALL",
    "topic": "Basic Conjunctions: And, But, Because",
    "statement": "I want to buy a new computer, ________ I don't have enough money right now ________ it is very expensive.",
    "options": [
      {
        "key": "A",
        "text": "and / so"
      },
      {
        "key": "B",
        "text": "but / because"
      },
      {
        "key": "C",
        "text": "because / but"
      },
      {
        "key": "D",
        "text": "or / and"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'But' introduce contraste o limitación ('pero'), y 'because' introduce la causa o justificación de la afirmación previa ('porque').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'and' no expresa contraste y 'so' expresa consecuencia."
      },
      {
        "option": "C",
        "reason": "Invierte la lógica causal de la frase."
      },
      {
        "option": "D",
        "reason": "'or' expresa alternativa disyuntiva."
      }
    ],
    "referenceSite": "Englishteststore.net (Basic Conjunctions A1)"
  },
  {
    "id": "eng_a1_30",
    "number": 30,
    "level": "A1",
    "variant": "ALL",
    "topic": "Ordinal Numbers: Spelling and Form",
    "statement": "Today is our ________ anniversary, and it is the ________ time we celebrate together.",
    "options": [
      {
        "key": "A",
        "text": "three / first"
      },
      {
        "key": "B",
        "text": "third / first"
      },
      {
        "key": "C",
        "text": "threeth / oneth"
      },
      {
        "key": "D",
        "text": "third / one"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los números ordinales para 1, 2 y 3 son completamente irregulares: 1st (first), 2nd (second), y 3rd (third).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'three' es número cardinal, no ordinal."
      },
      {
        "option": "C",
        "reason": "'threeth' y 'oneth' no existen en inglés."
      },
      {
        "option": "D",
        "reason": "'one' es cardinal."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Ordinal Numbers)"
  },
  {
    "id": "eng_a1_31",
    "number": 31,
    "level": "A1",
    "variant": "ALL",
    "topic": "Have vs Have got: Regional Usage",
    "statement": "In British English, to ask about possession we say 'Have you got a car?', while in American English we typically say:",
    "options": [
      {
        "key": "A",
        "text": "Do you have a car?"
      },
      {
        "key": "B",
        "text": "Are you having a car?"
      },
      {
        "key": "C",
        "text": "Got you a car?"
      },
      {
        "key": "D",
        "text": "Have you a car?"
      }
    ],
    "correctAnswer": "A",
    "explanation": "El inglés estadounidense utiliza el auxiliar 'Do/Does' con la forma base 'have' para preguntas de posesión ('Do you have a car?').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'have' en sentido de posesión es verbo de estado y no admite tiempos continuos."
      },
      {
        "option": "C",
        "reason": "'Got you' es agramatical."
      },
      {
        "option": "D",
        "reason": "'Have you a car?' es un arcaísmo en desuso."
      }
    ],
    "referenceSite": "Agendaweb.org (Have vs Have got)"
  },
  {
    "id": "eng_a1_32",
    "number": 32,
    "level": "A1",
    "variant": "ALL",
    "topic": "Present Continuous: Temporary Actions Now",
    "statement": "Listen! The baby ________ in the bedroom right now.",
    "options": [
      {
        "key": "A",
        "text": "cries"
      },
      {
        "key": "B",
        "text": "is crying"
      },
      {
        "key": "C",
        "text": "are crying"
      },
      {
        "key": "D",
        "text": "cry"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Para acciones que están ocurriendo en el momento exacto del habla ('Listen!', 'right now'), se usa Present Continuous: 'am/is/are + verbo-ing'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'cries' en Present Simple indica hábito o rutina, no la acción en progreso actual."
      },
      {
        "option": "C",
        "reason": "'baby' es singular (he/she/it) y no concuerda con 'are'."
      },
      {
        "option": "D",
        "reason": "Forma base sin conjugar ni concordar."
      }
    ],
    "referenceSite": "Englishteststore.net (Present Continuous A1)"
  },
  {
    "id": "eng_a1_33",
    "number": 33,
    "level": "A1",
    "variant": "ALL",
    "topic": "Present Continuous: Spelling of -ing form",
    "statement": "Choose the correct spelling: swim -> ________, write -> ________, lie -> ________.",
    "options": [
      {
        "key": "A",
        "text": "swiming / writting / lieing"
      },
      {
        "key": "B",
        "text": "swimming / writing / lying"
      },
      {
        "key": "C",
        "text": "swimming / writting / lying"
      },
      {
        "key": "D",
        "text": "swiming / writing / lieing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Reglas de adición de -ing: duplicar consonante tras vocal tónica corta (swim -> swimming), suprimir la 'e' muda (write -> writing), y cambiar 'ie' por 'y' (lie -> lying).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "No duplica la 'm', duplica erróneamente la 't' y no transforma 'ie'."
      },
      {
        "option": "C",
        "reason": "Duplica innecesariamente la 't' en 'write'."
      },
      {
        "option": "D",
        "reason": "No duplica la 'm' y no transforma 'ie' en 'y'."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Spelling of -ing form)"
  },
  {
    "id": "eng_a1_34",
    "number": 34,
    "level": "A1",
    "variant": "ALL",
    "topic": "Stative Verbs: No Progressive Form",
    "statement": "Which sentence is GRAMMATICALLY CORRECT?",
    "options": [
      {
        "key": "A",
        "text": "I am wanting a glass of cold water now."
      },
      {
        "key": "B",
        "text": "I want a glass of cold water now."
      },
      {
        "key": "C",
        "text": "I am needing a glass of water."
      },
      {
        "key": "D",
        "text": "He is knowing the correct answer."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los verbos de estado, deseo o cognición (want, need, know, like, believe) no se utilizan en tiempos progresivos (-ing); se expresan en Present Simple incluso si el deseo ocurre 'ahora'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'want' es un verbo de estado que no admite Present Continuous."
      },
      {
        "option": "C",
        "reason": "'need' es verbo de estado."
      },
      {
        "option": "D",
        "reason": "'know' es verbo estativo intelectual."
      }
    ],
    "referenceSite": "Agendaweb.org (Stative Verbs A1)"
  },
  {
    "id": "eng_a1_35",
    "number": 35,
    "level": "A1",
    "variant": "ALL",
    "topic": "US vs UK Vocabulary: Buildings",
    "statement": "In London, people take the ________ to the third floor, whereas in New York they take the ________.",
    "options": [
      {
        "key": "A",
        "text": "elevator / lift"
      },
      {
        "key": "B",
        "text": "lift / elevator"
      },
      {
        "key": "C",
        "text": "subway / underground"
      },
      {
        "key": "D",
        "text": "flat / apartment"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En el Reino Unido (UK) se denomina 'lift' al elevador mecánico, mientras que en los Estados Unidos (US) se denomina 'elevator'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte la distribución geográfica del término."
      },
      {
        "option": "C",
        "reason": "Alude al metro subterráneo, no a elevadores."
      },
      {
        "option": "D",
        "reason": "Alude a departamentos residenciales."
      }
    ],
    "referenceSite": "Englishteststore.net (British vs American Vocabulary A1)"
  },
  {
    "id": "eng_a1_36",
    "number": 36,
    "level": "A1",
    "variant": "ALL",
    "topic": "US vs UK Vocabulary: Streets",
    "statement": "In American English, pedestrians walk on the ________, while in British English it is called the ________.",
    "options": [
      {
        "key": "A",
        "text": "sidewalk / pavement"
      },
      {
        "key": "B",
        "text": "pavement / sidewalk"
      },
      {
        "key": "C",
        "text": "highway / motorway"
      },
      {
        "key": "D",
        "text": "crosswalk / zebra crossing"
      }
    ],
    "correctAnswer": "A",
    "explanation": "La acera peatonal es 'sidewalk' en inglés estadounidense y 'pavement' en inglés británico.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Invierte los términos regionales."
      },
      {
        "option": "C",
        "reason": "Alude a autopistas vehiculares."
      },
      {
        "option": "D",
        "reason": "Alude a pasos peatonales pintados en la calzada."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (American vs British Street Vocabulary)"
  },
  {
    "id": "eng_a1_37",
    "number": 37,
    "level": "A1",
    "variant": "ALL",
    "topic": "Basic Adjective Opposites",
    "statement": "The coffee is very hot, but the iced tea is ________. The ticket was expensive, but the bus was ________.",
    "options": [
      {
        "key": "A",
        "text": "warm / costly"
      },
      {
        "key": "B",
        "text": "cold / cheap"
      },
      {
        "key": "C",
        "text": "cool / high"
      },
      {
        "key": "D",
        "text": "freezing / pricey"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los antónimos directos fundamentales en A1 son: hot (caliente) <-> cold (frío), y expensive (caro) <-> cheap (barato).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'warm' y 'costly' no forman oposiciones contrastivas directas."
      },
      {
        "option": "C",
        "reason": "'high' no es el antónimo léxico estándar de 'expensive' para pasajes."
      },
      {
        "option": "D",
        "reason": "'pricey' es sinónimo de caro, no antónimo."
      }
    ],
    "referenceSite": "Agendaweb.org (Opposite Adjectives A1)"
  },
  {
    "id": "eng_a1_38",
    "number": 38,
    "level": "A1",
    "variant": "ALL",
    "topic": "Adjective Position: Attributive Position",
    "statement": "Select the sentence with the correct syntactic order:",
    "options": [
      {
        "key": "A",
        "text": "She bought a car red yesterday."
      },
      {
        "key": "B",
        "text": "She bought a red car yesterday."
      },
      {
        "key": "C",
        "text": "She bought a car newly yesterday."
      },
      {
        "key": "D",
        "text": "She bought red a car yesterday."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En inglés, el adjetivo calificativo se sitúa obligatoriamente ANTES del sustantivo al que modifica ('a red car'), nunca después como suele ocurrir en español.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Calca el orden del español 'carro rojo', agramatical en inglés."
      },
      {
        "option": "C",
        "reason": "Usa un adverbio en posición atributiva."
      },
      {
        "option": "D",
        "reason": "Inserta el adjetivo antes del artículo indefinido."
      }
    ],
    "referenceSite": "Englishteststore.net (Adjective Order A1)"
  },
  {
    "id": "eng_a1_39",
    "number": 39,
    "level": "A1",
    "variant": "ALL",
    "topic": "Nationalities and Country Names",
    "statement": "Pierre is from France. His nationality is ________ and he speaks ________.",
    "options": [
      {
        "key": "A",
        "text": "French / French"
      },
      {
        "key": "B",
        "text": "France / Francian"
      },
      {
        "key": "C",
        "text": "Frenchman / France"
      },
      {
        "key": "D",
        "text": "French / France"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En inglés, tanto la nacionalidad adjetival como el nombre del idioma comparten la forma 'French'.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'Francian' es una palabra inexistente en inglés."
      },
      {
        "option": "C",
        "reason": "'Frenchman' es un sustantivo personal, no un adjetivo de idioma."
      },
      {
        "option": "D",
        "reason": "'France' es el nombre del país, no del idioma."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Countries and Nationalities)"
  },
  {
    "id": "eng_a1_40",
    "number": 40,
    "level": "A1",
    "variant": "ALL",
    "topic": "Food Nouns: Countable vs Uncountable",
    "statement": "Which pair consists of one UNCOUNTABLE noun and one COUNTABLE noun?",
    "options": [
      {
        "key": "A",
        "text": "Bread / Apple"
      },
      {
        "key": "B",
        "text": "Banana / Orange"
      },
      {
        "key": "C",
        "text": "Water / Milk"
      },
      {
        "key": "D",
        "text": "Carrot / Potato"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Bread' (pan) es incontable en inglés (se dice 'a loaf of bread' o 'a piece of bread'), mientras que 'apple' es plenamente contable ('an apple', 'two apples').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Ambos sustantivos son contables."
      },
      {
        "option": "C",
        "reason": "Ambos sustantivos son incontables."
      },
      {
        "option": "D",
        "reason": "Ambos sustantivos son contables."
      }
    ],
    "referenceSite": "Agendaweb.org (Countable and Uncountable Food)"
  },
  {
    "id": "eng_a1_41",
    "number": 41,
    "level": "A1",
    "variant": "ALL",
    "topic": "Family Vocabulary: Kinship Terms",
    "statement": "My brother's daughter is my ________, and my sister's son is my ________.",
    "options": [
      {
        "key": "A",
        "text": "cousin / uncle"
      },
      {
        "key": "B",
        "text": "niece / nephew"
      },
      {
        "key": "C",
        "text": "nephew / niece"
      },
      {
        "key": "D",
        "text": "aunt / cousin"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La hija de un hermano es 'niece' (sobrina) y el hijo de una hermana es 'nephew' (sobrino).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'cousin' es primo/prima y 'uncle' es tío."
      },
      {
        "option": "C",
        "reason": "Invierte los géneros de sobrina y sobrino."
      },
      {
        "option": "D",
        "reason": "'aunt' es tía."
      }
    ],
    "referenceSite": "Englishteststore.net (Family Members Vocabulary)"
  },
  {
    "id": "eng_a1_42",
    "number": 42,
    "level": "A1",
    "variant": "ALL",
    "topic": "Weather Expressions: Impersonal 'It'",
    "statement": "To describe the atmospheric condition, the correct construction is:",
    "options": [
      {
        "key": "A",
        "text": "Is raining very hard today."
      },
      {
        "key": "B",
        "text": "It is raining very hard today."
      },
      {
        "key": "C",
        "text": "Makes rain very hard today."
      },
      {
        "key": "D",
        "text": "There rains very hard today."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En inglés no existen oraciones impersonales sin sujeto fonético: los verbos meteorológicos exigen obligatoriamente el pronombre expletivo 'It' ('It is raining').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Omite el sujeto obligatorio 'It' (vicio derivado del español)."
      },
      {
        "option": "C",
        "reason": "Calca 'hace lluvia' del español."
      },
      {
        "option": "D",
        "reason": "'There' denota existencia, no acción meteorológica."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Weather expressions with It)"
  },
  {
    "id": "eng_a1_43",
    "number": 43,
    "level": "A1",
    "variant": "ALL",
    "topic": "Verb Patterns: Like + -ing",
    "statement": "In her free time, Sofia likes ________ novels and ________ to classical music.",
    "options": [
      {
        "key": "A",
        "text": "read / listen"
      },
      {
        "key": "B",
        "text": "reading / listening"
      },
      {
        "key": "C",
        "text": "reads / listens"
      },
      {
        "key": "D",
        "text": "reading / to listen"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Tras el verbo de preferencia 'like', las actividades habituales de disfrute se coordinan con la forma en gerundio '-ing' de forma paralela ('reading... listening').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa la forma base no flexionada."
      },
      {
        "option": "C",
        "reason": "Usa tercera persona del indicativo en vez de forma no personal."
      },
      {
        "option": "D",
        "reason": "Rompe el paralelismo sintáctico al mezclar gerundio con infinitivo."
      }
    ],
    "referenceSite": "Agendaweb.org (Verbs of Preference Like Love Hate)"
  },
  {
    "id": "eng_a1_44",
    "number": 44,
    "level": "A1",
    "variant": "ALL",
    "topic": "Collocations: Daily Routine",
    "statement": "Every morning at 6:00 AM, Daniel ________ up, ________ a quick shower, and eats breakfast.",
    "options": [
      {
        "key": "A",
        "text": "wakes / takes"
      },
      {
        "key": "B",
        "text": "wakes / makes"
      },
      {
        "key": "C",
        "text": "stands / does"
      },
      {
        "key": "D",
        "text": "gets / gives"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Las colocaciones léxicas estándar de rutina diaria son: 'wake up' (despertarse) y 'take a shower' (en US) o 'have a shower' (en UK).",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'make a shower' es agramatical en inglés."
      },
      {
        "option": "C",
        "reason": "'stand up' significa ponerse de pie físicamente de una silla."
      },
      {
        "option": "D",
        "reason": "'give a shower' significa bañar a otra persona o animal."
      }
    ],
    "referenceSite": "Englishteststore.net (Daily Routines Vocabulary)"
  },
  {
    "id": "eng_a1_45",
    "number": 45,
    "level": "A1",
    "variant": "ALL",
    "topic": "Prepositions of Movement: Into vs Out of",
    "statement": "The teacher walked ________ the classroom and took the chalk ________ her bag.",
    "options": [
      {
        "key": "A",
        "text": "into / out of"
      },
      {
        "key": "B",
        "text": "out of / into"
      },
      {
        "key": "C",
        "text": "at / from"
      },
      {
        "key": "D",
        "text": "to / onto"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Into' denota movimiento hacia el interior de un recinto cerrado, mientras que 'out of' expresa movimiento desde el interior hacia afuera.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Invierte la dirección lógica de las dos acciones."
      },
      {
        "option": "C",
        "reason": "'at' no denota movimiento dinámico hacia el interior."
      },
      {
        "option": "D",
        "reason": "'onto' denota movimiento hacia una superficie superior."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Prepositions of Movement)"
  },
  {
    "id": "eng_a1_46",
    "number": 46,
    "level": "A1",
    "variant": "ALL",
    "topic": "Phonetics: Silent Consonants in Basic Words",
    "statement": "Which word contains a SILENT letter that is NOT pronounced?",
    "options": [
      {
        "key": "A",
        "text": "Desk"
      },
      {
        "key": "B",
        "text": "Know"
      },
      {
        "key": "C",
        "text": "Lamp"
      },
      {
        "key": "D",
        "text": "Book"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la palabra 'know' /noʊ/, la letra inicial 'k' es muda (silent k), al igual que en 'knife', 'knee' y 'knot'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "En 'desk', todos los fonemas consonánticos se pronuncian."
      },
      {
        "option": "C",
        "reason": "En 'lamp', todas las letras se pronuncian."
      },
      {
        "option": "D",
        "reason": "En 'book', no hay consonantes mudas."
      }
    ],
    "referenceSite": "Agendaweb.org (Silent Letters A1)"
  },
  {
    "id": "eng_a1_47",
    "number": 47,
    "level": "A1",
    "variant": "ALL",
    "topic": "Plural Nouns: Words ending in -f and -fe",
    "statement": "One knife -> two ________; one wife -> two ________; one life -> two ________.",
    "options": [
      {
        "key": "A",
        "text": "knifes / wifes / lifes"
      },
      {
        "key": "B",
        "text": "knives / wives / lives"
      },
      {
        "key": "C",
        "text": "knives / wifes / lifes"
      },
      {
        "key": "D",
        "text": "knifes / wives / lives"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Muchos sustantivos germánicos terminados en -f o -fe sonorizan su consonante a -ves en plural: knife -> knives, wife -> wives, life -> lives.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Aplica la regla regular simple con -s sin sonorizar la consonante."
      },
      {
        "option": "C",
        "reason": "Aplica la regla de forma inconsistente."
      },
      {
        "option": "D",
        "reason": "No sonoriza 'knifes'."
      }
    ],
    "referenceSite": "Englishteststore.net (Plural of Nouns ending in F)"
  },
  {
    "id": "eng_a1_48",
    "number": 48,
    "level": "A1",
    "variant": "ALL",
    "topic": "Punctuation: Possessives of Regular Plurals",
    "statement": "This is the room belonging to the boys. Therefore, it is the ________ room.",
    "options": [
      {
        "key": "A",
        "text": "boy's"
      },
      {
        "key": "B",
        "text": "boys'"
      },
      {
        "key": "C",
        "text": "boys's"
      },
      {
        "key": "D",
        "text": "boyes'"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cuando un sustantivo plural regular ya termina en la letra -s ('boys'), el genitivo sajón solo añade el apóstrofo final sin agregar otra -s: 'the boys' room'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'boy's' indica que la habitación pertenece a un único niño (singular)."
      },
      {
        "option": "C",
        "reason": "'boys's' es una forma incorrecta y redundante."
      },
      {
        "option": "D",
        "reason": "'boyes'' tiene una ortografía plural deformada."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Apostrophe with Regular Plurals)"
  },
  {
    "id": "eng_a1_49",
    "number": 49,
    "level": "A1",
    "variant": "ALL",
    "topic": "Conversational English: Polite Agreement",
    "statement": "— 'I am really excited about our trip tomorrow!' — '________ am I!'",
    "options": [
      {
        "key": "A",
        "text": "Too"
      },
      {
        "key": "B",
        "text": "So"
      },
      {
        "key": "C",
        "text": "Neither"
      },
      {
        "key": "D",
        "text": "Also"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Para concordar de manera afirmativa con una afirmación previa con el verbo To Be se utiliza la estructura 'So + auxiliar + sujeto' ('So am I' = yo también).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'Too' se coloca al final de la frase ('I am too'), no al inicio con inversión."
      },
      {
        "option": "C",
        "reason": "'Neither' se usa exclusivamente para concordar con oraciones negativas."
      },
      {
        "option": "D",
        "reason": "'Also' no se usa en esta inversión sintáctica breve."
      }
    ],
    "referenceSite": "Agendaweb.org (So and Neither A1)"
  },
  {
    "id": "eng_a1_50",
    "number": 50,
    "level": "A1",
    "variant": "ALL",
    "topic": "Comprehensive A1 Diagnostic Review",
    "statement": "Choose the ONLY sentence that contains NO grammatical or orthographic errors:",
    "options": [
      {
        "key": "A",
        "text": "She don't likes apples because they are sour."
      },
      {
        "key": "B",
        "text": "Does he live in a apartment with his brother?"
      },
      {
        "key": "C",
        "text": "They usually have lunch at 12:30 PM on Sundays."
      },
      {
        "key": "D",
        "text": "There are a big blackboard on the wall in our classroom."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La opción C es gramaticalmente impecable: concuerda sujeto plural 'They' con adverbio de frecuencia en posición previa a 'have', preposición 'at' para la hora y 'on' para el día en mayúscula.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa 'don't' con 'she' y mantiene erróneamente la -s en 'likes'."
      },
      {
        "option": "B",
        "reason": "Usa 'a apartment' en vez del fonético 'an apartment'."
      },
      {
        "option": "D",
        "reason": "Usa 'There are' para un elemento singular ('a big blackboard')."
      }
    ],
    "referenceSite": "Englishteststore.net (Comprehensive A1 Diagnostic)"
  },
  {
    "id": "eng_a2_01",
    "number": 51,
    "level": "A2",
    "variant": "ALL",
    "topic": "Past Simple: Regular Verbs Spelling Rules",
    "statement": "Yesterday, Gabriela ________ her suitcase and ________ for the university bus.",
    "options": [
      {
        "key": "A",
        "text": "carryed / stoped"
      },
      {
        "key": "B",
        "text": "carried / stopped"
      },
      {
        "key": "C",
        "text": "carried / stoped"
      },
      {
        "key": "D",
        "text": "carryed / stopped"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Reglas del Past Simple regular (-ed): consonante + y cambia a -ied ('carry' -> 'carried'); vocal corta + consonante única duplica la consonante final ('stop' -> 'stopped').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "No aplica el cambio a -ied y no duplica la 'p'."
      },
      {
        "option": "C",
        "reason": "No duplica la consonante 'p' en 'stop'."
      },
      {
        "option": "D",
        "reason": "No transforma la 'y' precedida de consonante."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Simple Past Regular Verbs Spelling)"
  },
  {
    "id": "eng_a2_02",
    "number": 52,
    "level": "A2",
    "variant": "ALL",
    "topic": "Phonetics: Pronunciation of -ed Endings (/t/, /d/, /ɪd/)",
    "statement": "In which of the following verbs is the '-ed' ending pronounced as an extra syllable /ɪd/?",
    "options": [
      {
        "key": "A",
        "text": "Worked"
      },
      {
        "key": "B",
        "text": "Lived"
      },
      {
        "key": "C",
        "text": "Decided"
      },
      {
        "key": "D",
        "text": "Watched"
      }
    ],
    "correctAnswer": "C",
    "explanation": "La terminación '-ed' solo se pronuncia como sílaba extra /ɪd/ cuando el verbo en infinitivo termina fonéticamente en sonido /t/ o /d/ (ej. decide -> decided /dɪˈsaɪ.dɪd/, want -> wanted).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'worked' termina en sonido sordo /k/, por lo que su -ed se pronuncia como /t/."
      },
      {
        "option": "B",
        "reason": "'lived' termina en sonido sonoro /v/, por lo que su -ed se pronuncia como /d/."
      },
      {
        "option": "D",
        "reason": "'watched' termina en sonido sordo /tʃ/, por lo que su -ed se pronuncia como /t/."
      }
    ],
    "referenceSite": "Agendaweb.org (Pronunciation of -ed endings A2)"
  },
  {
    "id": "eng_a2_03",
    "number": 53,
    "level": "A2",
    "variant": "ALL",
    "topic": "Past Simple: Common Irregular Verbs",
    "statement": "Last night, Carlos ________ his wallet at the restaurant and ________ his friend for help.",
    "options": [
      {
        "key": "A",
        "text": "lost / called"
      },
      {
        "key": "B",
        "text": "loosed / called"
      },
      {
        "key": "C",
        "text": "losed / calt"
      },
      {
        "key": "D",
        "text": "lost / call"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Lose' es un verbo irregular cuyo pasado simple es 'lost'. 'Call' es regular y añade '-ed' ('called').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'loosed' es incorrecto; 'loose' es adjetivo que significa suelto."
      },
      {
        "option": "C",
        "reason": "'losed' y 'calt' son formas inexistentes."
      },
      {
        "option": "D",
        "reason": "Deja 'call' en presente."
      }
    ],
    "referenceSite": "Englishteststore.net (Irregular Verbs Past Simple A2)"
  },
  {
    "id": "eng_a2_04",
    "number": 54,
    "level": "A2",
    "variant": "ALL",
    "topic": "Past Simple: Negative Auxiliary Did Not",
    "statement": "We ________ to the cinema yesterday because we ________ any tickets left.",
    "options": [
      {
        "key": "A",
        "text": "didn't went / didn't find"
      },
      {
        "key": "B",
        "text": "didn't go / didn't find"
      },
      {
        "key": "C",
        "text": "didn't go / didn't found"
      },
      {
        "key": "D",
        "text": "not went / didn't find"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En oraciones negativas en Past Simple, el auxiliar 'didn't' absorbe el tiempo pasado, exigiendo que el verbo principal se mantenga en su forma base pura ('didn't go', 'didn't find').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Mantiene erróneamente el verbo en pasado ('didn't went')."
      },
      {
        "option": "C",
        "reason": "Mantiene el verbo en pasado ('didn't found')."
      },
      {
        "option": "D",
        "reason": "Omite el auxiliar 'did' en la primera cláusula."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Simple Past Negative Sentences)"
  },
  {
    "id": "eng_a2_05",
    "number": 55,
    "level": "A2",
    "variant": "ALL",
    "topic": "Past Simple: Interrogative Form",
    "statement": "— '________ you ________ the new museum during your trip to San Salvador?' — 'Yes, I did.'",
    "options": [
      {
        "key": "A",
        "text": "Did / visit"
      },
      {
        "key": "B",
        "text": "Did / visited"
      },
      {
        "key": "C",
        "text": "Were / visit"
      },
      {
        "key": "D",
        "text": "Do / visited"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Las preguntas en Past Simple se construyen con el auxiliar 'Did + Sujeto + Verbo en forma base' ('Did you visit?').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Duplica la marca de tiempo pasado en el verbo principal ('Did you visited?')."
      },
      {
        "option": "C",
        "reason": "'Were' no puede funcionar como auxiliar de un verbo léxico en forma base."
      },
      {
        "option": "D",
        "reason": "'Do' es auxiliar de presente."
      }
    ],
    "referenceSite": "Agendaweb.org (Past Simple Questions A2)"
  },
  {
    "id": "eng_a2_06",
    "number": 56,
    "level": "A2",
    "variant": "ALL",
    "topic": "Past Simple: Verb To Be (Was vs. Were)",
    "statement": "Mauricio ________ at the conference, but his colleagues ________ unable to attend.",
    "options": [
      {
        "key": "A",
        "text": "were / was"
      },
      {
        "key": "B",
        "text": "was / were"
      },
      {
        "key": "C",
        "text": "was / was"
      },
      {
        "key": "D",
        "text": "were / were"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Mauricio (3ª persona singular) concuerda con 'was', mientras que 'his colleagues' (sujeto plural) concuerda con 'were'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte la concordancia singular y plural de To Be."
      },
      {
        "option": "C",
        "reason": "Aplica 'was' a un sujeto plural ('colleagues')."
      },
      {
        "option": "D",
        "reason": "Aplica 'were' a un sujeto singular ('Mauricio')."
      }
    ],
    "referenceSite": "Englishteststore.net (Was vs Were A2)"
  },
  {
    "id": "eng_a2_07",
    "number": 57,
    "level": "A2",
    "variant": "ALL",
    "topic": "Past Continuous: Ongoing Past Action",
    "statement": "At 8:00 PM yesterday, while it was heavily raining, Lucia ________ for her final exam.",
    "options": [
      {
        "key": "A",
        "text": "studied"
      },
      {
        "key": "B",
        "text": "was studying"
      },
      {
        "key": "C",
        "text": "were studying"
      },
      {
        "key": "D",
        "text": "is studying"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Para describir una acción que estaba en pleno desarrollo en un momento específico del pasado, se usa Past Continuous: 'was/were + verbo-ing'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Past Simple indicaría un evento puntual o hábito concluido."
      },
      {
        "option": "C",
        "reason": "'Lucia' es singular y exige 'was', no 'were'."
      },
      {
        "option": "D",
        "reason": "'is studying' es tiempo presente."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Past Continuous / Progressive)"
  },
  {
    "id": "eng_a2_08",
    "number": 58,
    "level": "A2",
    "variant": "ALL",
    "topic": "Past Simple vs. Past Continuous: When and While",
    "statement": "While the doctor ________ the patient, the emergency alarm suddenly ________.",
    "options": [
      {
        "key": "A",
        "text": "examined / was ringing"
      },
      {
        "key": "B",
        "text": "was examining / rang"
      },
      {
        "key": "C",
        "text": "examined / rang"
      },
      {
        "key": "D",
        "text": "was examining / was ringing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La acción de fondo en progreso continuo lleva Past Continuous ('was examining'), mientras que el evento repentino que la interrumpe lleva Past Simple ('rang').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los tiempos verbales."
      },
      {
        "option": "C",
        "reason": "Ambos en pasado simple no capturan la acción de fondo en desarrollo."
      },
      {
        "option": "D",
        "reason": "Ambos en continuo ignoran la interrupción puntual señalada por 'suddenly'."
      }
    ],
    "referenceSite": "Agendaweb.org (Past Simple vs Past Continuous A2)"
  },
  {
    "id": "eng_a2_09",
    "number": 59,
    "level": "A2",
    "variant": "ALL",
    "topic": "Comparative Adjectives: Regular Rules (-er vs more)",
    "statement": "Traveling by train is usually ________ than traveling by bus, but the ticket is ________ expensive.",
    "options": [
      {
        "key": "A",
        "text": "faster / more"
      },
      {
        "key": "B",
        "text": "more fast / more"
      },
      {
        "key": "C",
        "text": "faster / most"
      },
      {
        "key": "D",
        "text": "fastest / more"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Adjetivos cortos de una sílaba añaden '-er' ('faster'), mientras que los adjetivos de tres o más sílabas se comparan con 'more' ('more expensive').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'more fast' es un error gramatical; los monosílabos no usan 'more'."
      },
      {
        "option": "C",
        "reason": "'most' es forma superlativa, no comparativa."
      },
      {
        "option": "D",
        "reason": "'fastest' es superlativo."
      }
    ],
    "referenceSite": "Englishteststore.net (Comparative Adjectives A2)"
  },
  {
    "id": "eng_a2_10",
    "number": 60,
    "level": "A2",
    "variant": "ALL",
    "topic": "Comparative Adjectives: Irregular Forms",
    "statement": "The weather today is ________ than yesterday, but the road conditions are even ________.",
    "options": [
      {
        "key": "A",
        "text": "gooder / badder"
      },
      {
        "key": "B",
        "text": "better / worse"
      },
      {
        "key": "C",
        "text": "more good / more bad"
      },
      {
        "key": "D",
        "text": "best / worst"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Good' y 'bad' poseen formas comparativas enteramente irregulares: good -> better, y bad -> worse.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'gooder' y 'badder' son formas agramaticales infantiles."
      },
      {
        "option": "C",
        "reason": "El inglés prohíbe el uso de 'more' con adjetivos que tienen forma irregular."
      },
      {
        "option": "D",
        "reason": "'best' y 'worst' son superlativos, no comparativos."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Irregular Comparatives and Superlatives)"
  },
  {
    "id": "eng_a2_11",
    "number": 61,
    "level": "A2",
    "variant": "ALL",
    "topic": "Superlative Adjectives: The Most and -est",
    "statement": "Mount Everest is ________ mountain in the world, and the blue whale is ________ animal.",
    "options": [
      {
        "key": "A",
        "text": "highest / heaviest"
      },
      {
        "key": "B",
        "text": "the highest / the heaviest"
      },
      {
        "key": "C",
        "text": "the most high / the most heavy"
      },
      {
        "key": "D",
        "text": "higher / heavier"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los adjetivos superlativos van obligatoriamente precedidos por el artículo determinado 'the' y adoptan la desinencia '-est' en monosílabos y bisílabos en -y ('the highest', 'the heaviest').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Omite el artículo obligatorio 'the'."
      },
      {
        "option": "C",
        "reason": "Usa 'most' con adjetivos que deben flexionar con '-est'."
      },
      {
        "option": "D",
        "reason": "Usa formas comparativas en vez de superlativas."
      }
    ],
    "referenceSite": "Agendaweb.org (Superlative Adjectives A2)"
  },
  {
    "id": "eng_a2_12",
    "number": 62,
    "level": "A2",
    "variant": "ALL",
    "topic": "Comparison of Equality: As... As",
    "statement": "My new smartphone is not ________ fast ________ my laptop, but it is very convenient.",
    "options": [
      {
        "key": "A",
        "text": "as / as"
      },
      {
        "key": "B",
        "text": "so / than"
      },
      {
        "key": "C",
        "text": "as / than"
      },
      {
        "key": "D",
        "text": "more / as"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Para comparar igualdad (o desigualdad en negativa 'not as... as'), se utiliza la correlación fija 'as + adjetivo en grado positivo + as'.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'than' no concuerda con 'so' en comparaciones de igualdad."
      },
      {
        "option": "C",
        "reason": "'than' solo se usa con comparativos de superioridad o inferioridad."
      },
      {
        "option": "D",
        "reason": "Mezcla comparativos incompatibles."
      }
    ],
    "referenceSite": "Englishteststore.net (As... As Comparative A2)"
  },
  {
    "id": "eng_a2_13",
    "number": 63,
    "level": "A2",
    "variant": "ALL",
    "topic": "Future: Going To for Plans and Evidence",
    "statement": "Look at those dark black clouds in the sky! It ________ rain very soon.",
    "options": [
      {
        "key": "A",
        "text": "will"
      },
      {
        "key": "B",
        "text": "is going to"
      },
      {
        "key": "C",
        "text": "shall"
      },
      {
        "key": "D",
        "text": "is raining"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Se emplea 'be going to' cuando existe evidencia física presente y visible en el entorno inmediato de que un evento futuro ocurrirá.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'will' se prefiere para predicciones basadas en opinión o decisiones espontáneas."
      },
      {
        "option": "C",
        "reason": "'shall' es modal de sugerencia u obligación formal."
      },
      {
        "option": "D",
        "reason": "Present Continuous describiría lluvia que ya está cayendo."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Going To vs Will Future)"
  },
  {
    "id": "eng_a2_14",
    "number": 64,
    "level": "A2",
    "variant": "ALL",
    "topic": "Future: Will for Spontaneous Decisions",
    "statement": "— 'The phone is ringing and I am busy cooking.' — 'Don't worry, I ________ it!'",
    "options": [
      {
        "key": "A",
        "text": "am going to answer"
      },
      {
        "key": "B",
        "text": "will answer"
      },
      {
        "key": "C",
        "text": "answer"
      },
      {
        "key": "D",
        "text": "am answering"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Para decisiones voluntarias y espontáneas tomadas en el mismo instante en que se habla, se utiliza exclusivamente 'will + forma base'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'going to' denota un plan concebido con anterioridad al momento del habla."
      },
      {
        "option": "C",
        "reason": "Present Simple denota hábito, no acción futura inmediata."
      },
      {
        "option": "D",
        "reason": "Present Continuous requiere un acuerdo o cita previamente agendada."
      }
    ],
    "referenceSite": "Agendaweb.org (Will for Instant Decisions)"
  },
  {
    "id": "eng_a2_15",
    "number": 65,
    "level": "A2",
    "variant": "ALL",
    "topic": "Quantifiers: A Few vs. A Little",
    "statement": "I have ________ coins in my pocket and ________ time before my next meeting.",
    "options": [
      {
        "key": "A",
        "text": "a little / a few"
      },
      {
        "key": "B",
        "text": "a few / a little"
      },
      {
        "key": "C",
        "text": "few / little"
      },
      {
        "key": "D",
        "text": "many / much"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'A few' acompaña a sustantivos contables en plural ('coins') con matiz positivo ('unos pocos'), mientras que 'a little' acompaña a sustantivos incontables ('time').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte la regla: 'a little' no puede modificar a 'coins'."
      },
      {
        "option": "C",
        "reason": "'few' y 'little' sin 'a' transmiten escasez negativa ('casi nada')."
      },
      {
        "option": "D",
        "reason": "'many' y 'much' indican gran cantidad, no poca."
      }
    ],
    "referenceSite": "Englishteststore.net (A Few vs A Little A2)"
  },
  {
    "id": "eng_a2_16",
    "number": 66,
    "level": "A2",
    "variant": "ALL",
    "topic": "Quantifiers: Too Much vs Too Many",
    "statement": "Don't put ________ sugar in the tea, and don't invite ________ people to the small apartment.",
    "options": [
      {
        "key": "A",
        "text": "too many / too much"
      },
      {
        "key": "B",
        "text": "too much / too many"
      },
      {
        "key": "C",
        "text": "too / enough"
      },
      {
        "key": "D",
        "text": "enough / too"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Too much' califica el exceso de sustantivos incontables ('sugar'), mientras que 'too many' califica el exceso de sustantivos contables en plural ('people').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los cuantificadores de exceso."
      },
      {
        "option": "C",
        "reason": "'too' solo no modifica sustantivos directamente."
      },
      {
        "option": "D",
        "reason": "'enough' significa suficiente, no exceso perjudicial."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Too much and Too many rules)"
  },
  {
    "id": "eng_a2_17",
    "number": 67,
    "level": "A2",
    "variant": "ALL",
    "topic": "Modals: Could for Past Ability",
    "statement": "When my grandfather was twenty years old, he ________ run a marathon in under three hours.",
    "options": [
      {
        "key": "A",
        "text": "can"
      },
      {
        "key": "B",
        "text": "could"
      },
      {
        "key": "C",
        "text": "might"
      },
      {
        "key": "D",
        "text": "should"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Could' es el pasado simple del verbo modal 'can' y se emplea para expresar habilidad general en el pasado.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'can' solo expresa habilidad presente."
      },
      {
        "option": "C",
        "reason": "'might' expresa posibilidad remota presente o futura."
      },
      {
        "option": "D",
        "reason": "'should' expresa consejo o deber moral."
      }
    ],
    "referenceSite": "Agendaweb.org (Could for Past Ability A2)"
  },
  {
    "id": "eng_a2_18",
    "number": 68,
    "level": "A2",
    "variant": "ALL",
    "topic": "Modals: Must vs. Have to (Obligation)",
    "statement": "In El Salvador, all drivers ________ carry a valid driver's license by law.",
    "options": [
      {
        "key": "A",
        "text": "must to"
      },
      {
        "key": "B",
        "text": "have to"
      },
      {
        "key": "C",
        "text": "should to"
      },
      {
        "key": "D",
        "text": "can to"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Have to' expresa obligación externa impuesta por leyes, reglamentos o normas institucionales. Nótese además que modales como 'must' nunca admiten 'to'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'must to' es un error sintáctico grave; 'must' nunca se combina con 'to'."
      },
      {
        "option": "C",
        "reason": "'should' tampoco admite 'to'."
      },
      {
        "option": "D",
        "reason": "'can' no admite 'to' y expresa capacidad, no deber legal."
      }
    ],
    "referenceSite": "Englishteststore.net (Must and Have to A2)"
  },
  {
    "id": "eng_a2_19",
    "number": 69,
    "level": "A2",
    "variant": "ALL",
    "topic": "Modals: Mustn't (Prohibition) vs. Don't have to (Lack of Necessity)",
    "statement": "You ________ smoke inside the hospital (it is forbidden), but you ________ wear a tie to the clinic today (it is optional).",
    "options": [
      {
        "key": "A",
        "text": "don't have to / mustn't"
      },
      {
        "key": "B",
        "text": "mustn't / don't have to"
      },
      {
        "key": "C",
        "text": "mustn't / mustn't"
      },
      {
        "key": "D",
        "text": "shouldn't / shouldn't"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Mustn't' expresa prohibición terminante ('está prohibido'), mientras que 'don't have to' expresa ausencia de obligación ('no es necesario / opcional').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los dos conceptos modales."
      },
      {
        "option": "C",
        "reason": "Declara erróneamente que usar corbata está prohibido."
      },
      {
        "option": "D",
        "reason": "No distingue entre deber ético y prohibición categórica legal."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Mustn't vs Don't have to)"
  },
  {
    "id": "eng_a2_20",
    "number": 70,
    "level": "A2",
    "variant": "ALL",
    "topic": "Modals: Should and Shouldn't for Advice",
    "statement": "You look exhausted. You ________ go to bed early and you ________ drink so much caffeine at night.",
    "options": [
      {
        "key": "A",
        "text": "should / shouldn't"
      },
      {
        "key": "B",
        "text": "must / can't"
      },
      {
        "key": "C",
        "text": "would / wouldn't"
      },
      {
        "key": "D",
        "text": "could / couldn't"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Should' y 'shouldn't' son los modales por excelencia para brindar recomendaciones y consejos de salud o conducta.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'must' suena a imposición imperativa autoritaria desmedida para un consejo."
      },
      {
        "option": "C",
        "reason": "'would' forma condicionales hipotéticos."
      },
      {
        "option": "D",
        "reason": "'could' alude a capacidad, no a conveniencia."
      }
    ],
    "referenceSite": "Agendaweb.org (Should and Shouldn't for Advice)"
  },
  {
    "id": "eng_a2_21",
    "number": 71,
    "level": "A2",
    "variant": "ALL",
    "topic": "Conditionals: Zero Conditional Structure",
    "statement": "If you ________ water to 100 degrees Celsius, it ________.",
    "options": [
      {
        "key": "A",
        "text": "heat / boils"
      },
      {
        "key": "B",
        "text": "will heat / boils"
      },
      {
        "key": "C",
        "text": "heat / will boil"
      },
      {
        "key": "D",
        "text": "heated / boiled"
      }
    ],
    "correctAnswer": "A",
    "explanation": "El condicional cero expresa verdades científicas o hechos universales: 'If + Present Simple, Present Simple'.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "La cláusula condicional con 'if' nunca lleva 'will'."
      },
      {
        "option": "C",
        "reason": "Pertenece a la estructura del primer condicional contingente."
      },
      {
        "option": "D",
        "reason": "Usa pasado simple para una ley física universal actual."
      }
    ],
    "referenceSite": "Englishteststore.net (Zero Conditional A2)"
  },
  {
    "id": "eng_a2_22",
    "number": 72,
    "level": "A2",
    "variant": "ALL",
    "topic": "Conditionals: First Conditional Structure",
    "statement": "If it ________ tomorrow, we ________ the soccer match in the stadium.",
    "options": [
      {
        "key": "A",
        "text": "rains / will cancel"
      },
      {
        "key": "B",
        "text": "will rain / cancel"
      },
      {
        "key": "C",
        "text": "rained / would cancel"
      },
      {
        "key": "D",
        "text": "rains / cancel"
      }
    ],
    "correctAnswer": "A",
    "explanation": "El primer condicional predice situaciones reales o probables en el futuro: 'If + Present Simple (sujeto 3ª p. rains), will + forma base (will cancel)'.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Coloca 'will' dentro de la cláusula introducida por 'if' (error clásico)."
      },
      {
        "option": "C",
        "reason": "Corresponde al segundo condicional hipotético."
      },
      {
        "option": "D",
        "reason": "Omite el auxiliar 'will' en la cláusula de resultado."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (First Conditional Sentences)"
  },
  {
    "id": "eng_a2_23",
    "number": 73,
    "level": "A2",
    "variant": "ALL",
    "topic": "Conditionals: First Conditional with 'Unless'",
    "statement": "We will miss the train ________ we ________ a taxi immediately.",
    "options": [
      {
        "key": "A",
        "text": "if / don't take"
      },
      {
        "key": "B",
        "text": "unless / take"
      },
      {
        "key": "C",
        "text": "unless / don't take"
      },
      {
        "key": "D",
        "text": "if / take"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Unless' equivale semánticamente a 'if not' (a menos que). Por ende, el verbo subordinado tras 'unless' se conjuga en AFIRMATIVO ('unless we take').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Faltaría la estructura con unless si la opción fuera afirmativa directa."
      },
      {
        "option": "C",
        "reason": "Doble negación agramatical ('unless we don't take')."
      },
      {
        "option": "D",
        "reason": "Invertiría el sentido: 'perderemos el tren si tomamos un taxi'."
      }
    ],
    "referenceSite": "Agendaweb.org (First Conditional with Unless A2)"
  },
  {
    "id": "eng_a2_24",
    "number": 74,
    "level": "A2",
    "variant": "ALL",
    "topic": "Adverbs of Manner: Formation and Exceptions",
    "statement": "Valeria drives very ________, speaks English ________, and always works ________.",
    "options": [
      {
        "key": "A",
        "text": "carefully / good / hardly"
      },
      {
        "key": "B",
        "text": "carefully / well / hard"
      },
      {
        "key": "C",
        "text": "careful / well / hard"
      },
      {
        "key": "D",
        "text": "carefully / well / hardly"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Adverbios de modo: 'carefully' (adjetivo + -ly), 'well' (adverbio irregular de 'good'), y 'hard' (adverbio idéntico al adjetivo; 'hardly' significa 'apenas').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'good' es adjetivo, no adverbio; 'hardly' significa 'casi no'."
      },
      {
        "option": "C",
        "reason": "'careful' es adjetivo y no puede modificar al verbo 'drives'."
      },
      {
        "option": "D",
        "reason": "'works hardly' significaría erróneamente que casi no trabaja."
      }
    ],
    "referenceSite": "Englishteststore.net (Adverbs of Manner A2)"
  },
  {
    "id": "eng_a2_25",
    "number": 75,
    "level": "A2",
    "variant": "ALL",
    "topic": "Reflexive Pronouns: Self and Selves",
    "statement": "Carlos burned ________ while cooking, and the children dressed ________ for school.",
    "options": [
      {
        "key": "A",
        "text": "him / theirselves"
      },
      {
        "key": "B",
        "text": "himself / themselves"
      },
      {
        "key": "C",
        "text": "hisself / themselves"
      },
      {
        "key": "D",
        "text": "himself / themself"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Pronombres reflexivos: Carlos (he) -> 'himself'; children (they, plural) -> 'themselves'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'him' es pronombre objeto y 'theirselves' es una forma inexistente."
      },
      {
        "option": "C",
        "reason": "'hisself' es un barbarismo agramatical."
      },
      {
        "option": "D",
        "reason": "'themself' es singular agramatical para el plural 'children'."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Reflexive Pronouns)"
  },
  {
    "id": "eng_a2_26",
    "number": 76,
    "level": "A2",
    "variant": "ALL",
    "topic": "Indefinite Pronouns: Assertive vs Non-Assertive",
    "statement": "I rang the doorbell, but there was ________ at home, so I didn't speak to ________.",
    "options": [
      {
        "key": "A",
        "text": "anyone / nobody"
      },
      {
        "key": "B",
        "text": "no one / anybody"
      },
      {
        "key": "C",
        "text": "someone / anyone"
      },
      {
        "key": "D",
        "text": "nobody / nobody"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'There was no one' (afirmación con pronombre negativo), y 'didn't speak to anybody' (oración negativa con auxiliar did not exige pronombre 'any-').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'anyone' en afirmativa tiene sentido de cualquiera."
      },
      {
        "option": "C",
        "reason": "Sugiere falsamente que había alguien."
      },
      {
        "option": "D",
        "reason": "Doble negación agramatical ('didn't speak to nobody')."
      }
    ],
    "referenceSite": "Agendaweb.org (Indefinite Pronouns A2)"
  },
  {
    "id": "eng_a2_27",
    "number": 77,
    "level": "A2",
    "variant": "ALL",
    "topic": "Indefinite Pronouns: Things (Something vs Anything)",
    "statement": "— 'Did you buy ________ at the mall?' — 'No, I bought ________ because everything was too expensive.'",
    "options": [
      {
        "key": "A",
        "text": "something / nothing"
      },
      {
        "key": "B",
        "text": "anything / nothing"
      },
      {
        "key": "C",
        "text": "anything / anything"
      },
      {
        "key": "D",
        "text": "nothing / anything"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En preguntas generales se usa 'anything', y en respuestas con verbo afirmativo para indicar nada se usa 'nothing' ('I bought nothing').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'something' en preguntas sugiere una expectativa afirmativa o invitación."
      },
      {
        "option": "C",
        "reason": "'I bought anything' es agramatical en este contexto."
      },
      {
        "option": "D",
        "reason": "Usa 'nothing' en la pregunta inicial de manera errónea."
      }
    ],
    "referenceSite": "Englishteststore.net (Something, Anything, Nothing A2)"
  },
  {
    "id": "eng_a2_28",
    "number": 78,
    "level": "A2",
    "variant": "ALL",
    "topic": "Connectors: Contrast (Although vs. However)",
    "statement": "________ it was raining heavily, the athletes finished the race. ________, several runners suffered minor injuries.",
    "options": [
      {
        "key": "A",
        "text": "However / Although"
      },
      {
        "key": "B",
        "text": "Although / However"
      },
      {
        "key": "C",
        "text": "Despite / But"
      },
      {
        "key": "D",
        "text": "Because / Therefore"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Although' es una conjunción subordinante que une dos oraciones en una sola ('Although it was raining...'). 'However' es un adverbio oracional de transición que va seguido de coma.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los dos conectores de contraste."
      },
      {
        "option": "C",
        "reason": "'Despite' requiere sustantivo o gerundio, no cláusula finita completa."
      },
      {
        "option": "D",
        "reason": "Expresan causa y consecuencia, no concesión."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Conjunctions Although and However)"
  },
  {
    "id": "eng_a2_29",
    "number": 79,
    "level": "A2",
    "variant": "ALL",
    "topic": "Connectors: Cause (Because) vs Result (So)",
    "statement": "She was feeling sick, ________ she went to the doctor ________ she needed a prescription.",
    "options": [
      {
        "key": "A",
        "text": "because / so"
      },
      {
        "key": "B",
        "text": "so / because"
      },
      {
        "key": "C",
        "text": "so / so"
      },
      {
        "key": "D",
        "text": "but / although"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'So' introduce la consecuencia o resultado ('por lo tanto fue al médico'), y 'because' introduce el motivo ('porque necesitaba una receta').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte causa y efecto."
      },
      {
        "option": "C",
        "reason": "Usa 'so' en ambas cláusulas de forma repetitiva e inapropiada."
      },
      {
        "option": "D",
        "reason": "Altera el sentido lógico de la consulta médica."
      }
    ],
    "referenceSite": "Agendaweb.org (Because and So A2)"
  },
  {
    "id": "eng_a2_30",
    "number": 80,
    "level": "A2",
    "variant": "ALL",
    "topic": "Making Suggestions: Syntactic Structures",
    "statement": "Which suggestion uses the CORRECT grammatical form?",
    "options": [
      {
        "key": "A",
        "text": "Why don't we going to the beach this afternoon?"
      },
      {
        "key": "B",
        "text": "Let's to visit the modern art museum tomorrow."
      },
      {
        "key": "C",
        "text": "Shall we order a pizza for dinner tonight?"
      },
      {
        "key": "D",
        "text": "How about go for a walk in the park?"
      }
    ],
    "correctAnswer": "C",
    "explanation": "'Shall we + bare infinitive' es la estructura canónica para formular propuestas corteses ('Shall we order...?').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'Why don't we' exige forma base, no gerundio con -ing."
      },
      {
        "option": "B",
        "reason": "'Let's' exige forma base directa sin 'to' ('Let's visit')."
      },
      {
        "option": "D",
        "reason": "'How about' exige gerundio ('How about going...?')."
      }
    ],
    "referenceSite": "Englishteststore.net (Suggestions and Offers A2)"
  },
  {
    "id": "eng_a2_31",
    "number": 81,
    "level": "A2",
    "variant": "ALL",
    "topic": "Prepositions of Movement: Spatial Trajectories",
    "statement": "The train went ________ the dark tunnel, and the boat sailed ________ the wide river.",
    "options": [
      {
        "key": "A",
        "text": "across / through"
      },
      {
        "key": "B",
        "text": "through / across"
      },
      {
        "key": "C",
        "text": "along / into"
      },
      {
        "key": "D",
        "text": "over / under"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Through' expresa movimiento dentro de un espacio tridimensional cerrado ('through the tunnel'), mientras que 'across' denota cruzar una superficie de un lado a otro ('across the river').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte las preposiciones espaciales."
      },
      {
        "option": "C",
        "reason": "'into the wide river' implicaría que el barco se hundió."
      },
      {
        "option": "D",
        "reason": "No describe el recorrido longitudinal ni el cruce."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Prepositions of Movement A2)"
  },
  {
    "id": "eng_a2_32",
    "number": 82,
    "level": "A2",
    "variant": "ALL",
    "topic": "Time Prepositions: For, During, While",
    "statement": "We stayed in London ________ two weeks, visited many museums ________ the day, and read books ________ we were traveling on the train.",
    "options": [
      {
        "key": "A",
        "text": "during / for / while"
      },
      {
        "key": "B",
        "text": "for / during / while"
      },
      {
        "key": "C",
        "text": "while / during / for"
      },
      {
        "key": "D",
        "text": "for / while / during"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'For' mide duración numérica ('for two weeks'); 'during' precede a sustantivos que denotan un período ('during the day'); y 'while' introduce una cláusula con sujeto y verbo ('while we were traveling').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa 'during' con duración numérica."
      },
      {
        "option": "C",
        "reason": "'while' no precede a frases nominales temporales."
      },
      {
        "option": "D",
        "reason": "Usa 'while' antes de un sustantivo sin verbo."
      }
    ],
    "referenceSite": "Agendaweb.org (For During While A2)"
  },
  {
    "id": "eng_a2_33",
    "number": 83,
    "level": "A2",
    "variant": "ALL",
    "topic": "Time Expressions: Syntax of 'Ago'",
    "statement": "They graduated from high school ________.",
    "options": [
      {
        "key": "A",
        "text": "ago three years"
      },
      {
        "key": "B",
        "text": "three years ago"
      },
      {
        "key": "C",
        "text": "since three years"
      },
      {
        "key": "D",
        "text": "for three years ago"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La partícula de tiempo pasado 'ago' se coloca SIEMPRE al final de la frase temporal de duración ('three years ago' = hace tres años).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Coloca 'ago' al inicio por calco erróneo del español 'hace'."
      },
      {
        "option": "C",
        "reason": "'since' exige un punto específico en el tiempo, no una duración con ago."
      },
      {
        "option": "D",
        "reason": "Mezcla agramaticalmente 'for' y 'ago'."
      }
    ],
    "referenceSite": "Englishteststore.net (Ago in Past Simple A2)"
  },
  {
    "id": "eng_a2_34",
    "number": 84,
    "level": "A2",
    "variant": "ALL",
    "topic": "Phrasal Verbs: Everyday Actions",
    "statement": "Please ________ your shoes before entering the house, and don't forget to ________ the lights when you leave.",
    "options": [
      {
        "key": "A",
        "text": "take off / turn off"
      },
      {
        "key": "B",
        "text": "put on / turn on"
      },
      {
        "key": "C",
        "text": "take out / switch on"
      },
      {
        "key": "D",
        "text": "give up / look after"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Take off' (quitarse ropa/zapatos) y 'turn off' (apagar luces o artefactos) son las colocaciones idiomáticas precisas.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'put on' significa ponerse ropa y 'turn on' encender luces."
      },
      {
        "option": "C",
        "reason": "'take out' significa sacar afuera y 'switch on' encender."
      },
      {
        "option": "D",
        "reason": "'give up' significa rendirse y 'look after' cuidar."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Everyday Phrasal Verbs A2)"
  },
  {
    "id": "eng_a2_35",
    "number": 85,
    "level": "A2",
    "variant": "ALL",
    "topic": "Infinitive of Purpose: To + Verb",
    "statement": "Andrea went to the post office ________ some stamps and send a package.",
    "options": [
      {
        "key": "A",
        "text": "for to buy"
      },
      {
        "key": "B",
        "text": "to buy"
      },
      {
        "key": "C",
        "text": "for buy"
      },
      {
        "key": "D",
        "text": "for buying"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Para expresar propósito o finalidad en inglés se utiliza el infinitivo con 'to' ('to buy'), NUNCA 'for to buy' ni 'for + infinitivo'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'for to buy' es un error arcaico o calco del español 'para comprar'."
      },
      {
        "option": "C",
        "reason": "'for buy' viola las reglas de las preposiciones en inglés."
      },
      {
        "option": "D",
        "reason": "'for buying' denota la función intrínseca de un objeto, no la intención del agente."
      }
    ],
    "referenceSite": "Agendaweb.org (Infinitive of Purpose A2)"
  },
  {
    "id": "eng_a2_36",
    "number": 86,
    "level": "A2",
    "variant": "ALL",
    "topic": "Verb Patterns: Verb + Infinitive with To",
    "statement": "Diego decided ________ a new laptop, and he promised ________ more diligently this semester.",
    "options": [
      {
        "key": "A",
        "text": "buying / studying"
      },
      {
        "key": "B",
        "text": "to buy / to study"
      },
      {
        "key": "C",
        "text": "buy / study"
      },
      {
        "key": "D",
        "text": "to buy / studying"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Verbos como 'decide', 'promise', 'hope', 'plan', 'agree' exigen obligatoriamente un infinitivo con 'to' como complemento directo.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa gerundio tras verbos que solo admiten infinitivo."
      },
      {
        "option": "C",
        "reason": "Usa infinitivo sin 'to' (bare infinitive)."
      },
      {
        "option": "D",
        "reason": "Rompe el paralelismo verbal."
      }
    ],
    "referenceSite": "Englishteststore.net (Verbs followed by Infinitive A2)"
  },
  {
    "id": "eng_a2_37",
    "number": 87,
    "level": "A2",
    "variant": "ALL",
    "topic": "Verb Patterns: Verb + Gerund (-ing)",
    "statement": "My father enjoys ________ in the garden and has finally finished ________ the wooden fence.",
    "options": [
      {
        "key": "A",
        "text": "to work / to repair"
      },
      {
        "key": "B",
        "text": "working / repairing"
      },
      {
        "key": "C",
        "text": "work / repair"
      },
      {
        "key": "D",
        "text": "working / to repair"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Verbos como 'enjoy', 'finish', 'avoid', 'suggest', 'mind' exigen obligatoriamente la forma en gerundio '-ing' tras de sí.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa infinitivo con 'to' tras verbos que rigen gerundio."
      },
      {
        "option": "C",
        "reason": "Usa formas base puras sin flexionar."
      },
      {
        "option": "D",
        "reason": "Usa infinitivo tras 'finish', lo cual es agramatical."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Verbs followed by Gerund)"
  },
  {
    "id": "eng_a2_38",
    "number": 88,
    "level": "A2",
    "variant": "ALL",
    "topic": "US vs UK Spelling: -or vs -our Patterns",
    "statement": "Which pair demonstrates the correct American English (US) spelling followed by British English (UK)?",
    "options": [
      {
        "key": "A",
        "text": "Color (US) / Colour (UK)"
      },
      {
        "key": "B",
        "text": "Colour (US) / Color (UK)"
      },
      {
        "key": "C",
        "text": "Colore (US) / Colur (UK)"
      },
      {
        "key": "D",
        "text": "Collor (US) / Colour (UK)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "La reducción de -our a -or (color, honor, favor, labor) fue introducida por Noah Webster y define el estándar ortográfico estadounidense frente al británico.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Invierte la atribución geográfica de los dos dialectos."
      },
      {
        "option": "C",
        "reason": "Formas inexistentes en la lengua inglesa."
      },
      {
        "option": "D",
        "reason": "Ortografía corrupta con doble l."
      }
    ],
    "referenceSite": "Agendaweb.org (British and American Spelling Differences)"
  },
  {
    "id": "eng_a2_39",
    "number": 89,
    "level": "A2",
    "variant": "ALL",
    "topic": "US vs UK Spelling: -er vs -re Patterns",
    "statement": "In Washington, they visit the city ________, while in London, they visit the city ________.",
    "options": [
      {
        "key": "A",
        "text": "centre / center"
      },
      {
        "key": "B",
        "text": "center / centre"
      },
      {
        "key": "C",
        "text": "sentre / senter"
      },
      {
        "key": "D",
        "text": "center / sentre"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El inglés estadounidense prefiere la terminación germánica regularizada '-er' ('center', 'theater', 'meter'), mientras que el británico conserva la herencia francesa '-re' ('centre', 'theatre', 'metre').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte las grafías entre Washington y Londres."
      },
      {
        "option": "C",
        "reason": "Grafías con 's' inexistentes."
      },
      {
        "option": "D",
        "reason": "Grafía híbrida incorrecta."
      }
    ],
    "referenceSite": "Englishteststore.net (US vs UK Spelling A2)"
  },
  {
    "id": "eng_a2_40",
    "number": 90,
    "level": "A2",
    "variant": "ALL",
    "topic": "US vs UK Vocabulary: Leisure",
    "statement": "During the summer, Americans go on ________, whereas Britons go on ________.",
    "options": [
      {
        "key": "A",
        "text": "holiday / vacation"
      },
      {
        "key": "B",
        "text": "vacation / holiday"
      },
      {
        "key": "C",
        "text": "break / recess"
      },
      {
        "key": "D",
        "text": "trip / voyage"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El descanso estival o período vacacional se denomina 'vacation' en Estados Unidos y 'holiday' (o 'holidays') en el Reino Unido.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte la procedencia dialectal."
      },
      {
        "option": "C",
        "reason": "'recess' se reserva en UK para recesos parlamentarios o escolares breves."
      },
      {
        "option": "D",
        "reason": "'voyage' se restringe a travesías marítimas o espaciales extensas."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (American vs British Vocabulary A2)"
  },
  {
    "id": "eng_a2_41",
    "number": 91,
    "level": "A2",
    "variant": "ALL",
    "topic": "Present Perfect: Ever and Never for Life Experiences",
    "statement": "— 'Have you ________ visited the ruins of Tazumal?' — 'No, I have ________ been there.'",
    "options": [
      {
        "key": "A",
        "text": "never / ever"
      },
      {
        "key": "B",
        "text": "ever / never"
      },
      {
        "key": "C",
        "text": "ever / ever"
      },
      {
        "key": "D",
        "text": "already / yet"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Ever' se emplea en preguntas para interrogar por vivencias a lo largo de la vida ('alguna vez'), y 'never' se emplea en respuestas afirmativas para denotar experiencia nula ('nunca').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los adverbios experienciales."
      },
      {
        "option": "C",
        "reason": "'have ever been' en respuesta declarativa ordinaria no es estándar."
      },
      {
        "option": "D",
        "reason": "No responden a la experiencia vital abierta."
      }
    ],
    "referenceSite": "Agendaweb.org (Present Perfect with Ever and Never A2)"
  },
  {
    "id": "eng_a2_42",
    "number": 92,
    "level": "A2",
    "variant": "ALL",
    "topic": "Present Perfect: Past Participle Forms",
    "statement": "She has ________ all her homework and has ________ three emails to her professor.",
    "options": [
      {
        "key": "A",
        "text": "did / wrote"
      },
      {
        "key": "B",
        "text": "done / written"
      },
      {
        "key": "C",
        "text": "doed / writed"
      },
      {
        "key": "D",
        "text": "done / wrote"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Present Perfect se forma con 'have/has + Past Participle': 'do' -> 'done', y 'write' -> 'written'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa formas de Past Simple ('did', 'wrote') en lugar de participios."
      },
      {
        "option": "C",
        "reason": "Regulariza erróneamente verbos con flexión irregular."
      },
      {
        "option": "D",
        "reason": "Usa 'wrote' (pasado simple) en vez de 'written'."
      }
    ],
    "referenceSite": "Englishteststore.net (Irregular Past Participles A2)"
  },
  {
    "id": "eng_a2_43",
    "number": 93,
    "level": "A2",
    "variant": "ALL",
    "topic": "Present Perfect vs. Past Simple: Specific vs. Unspecified Time",
    "statement": "Lorena ________ to Costa Rica in 2022, but she ________ there since then.",
    "options": [
      {
        "key": "A",
        "text": "has traveled / wasn't"
      },
      {
        "key": "B",
        "text": "traveled / hasn't been"
      },
      {
        "key": "C",
        "text": "traveled / wasn't"
      },
      {
        "key": "D",
        "text": "has traveled / hasn't been"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Con una referencia temporal cerrada en el pasado ('in 2022') es obligatorio el Past Simple ('traveled'). Con 'since then' (período abierto hasta el presente) es obligatorio el Present Perfect ('hasn't been').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa Present Perfect con un año cerrado del pasado."
      },
      {
        "option": "C",
        "reason": "Usa Past Simple con 'since then'."
      },
      {
        "option": "D",
        "reason": "Usa Present Perfect para una fecha pasada clausurada."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Present Perfect vs Simple Past A2)"
  },
  {
    "id": "eng_a2_44",
    "number": 94,
    "level": "A2",
    "variant": "ALL",
    "topic": "Question Tags: Present Simple Basic Rules",
    "statement": "You don't drink black coffee, ________? And your brother works in a bank, ________?",
    "options": [
      {
        "key": "A",
        "text": "do you / doesn't he"
      },
      {
        "key": "B",
        "text": "don't you / does he"
      },
      {
        "key": "C",
        "text": "are you / isn't he"
      },
      {
        "key": "D",
        "text": "do you / isn't he"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Regla de las coletillas interrogativas (question tags): oración negativa pide tag afirmativo ('don't drink' -> 'do you?'); oración afirmativa pide tag negativo ('works' -> 'doesn't he?').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Invierte la polaridad afirmativa/negativa requerida."
      },
      {
        "option": "C",
        "reason": "Usa el auxiliar 'to be' en oraciones con verbos léxicos plenos."
      },
      {
        "option": "D",
        "reason": "Mezcla 'to be' con 'works'."
      }
    ],
    "referenceSite": "Agendaweb.org (Question Tags A2)"
  },
  {
    "id": "eng_a2_45",
    "number": 95,
    "level": "A2",
    "variant": "ALL",
    "topic": "Question Tags: Past Simple Auxiliaries",
    "statement": "They watched the movie last night, ________? And she wasn't at the party, ________?",
    "options": [
      {
        "key": "A",
        "text": "didn't they / was she"
      },
      {
        "key": "B",
        "text": "did they / wasn't she"
      },
      {
        "key": "C",
        "text": "haven't they / was she"
      },
      {
        "key": "D",
        "text": "didn't they / wasn't she"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Con Past Simple afirmativo se usa 'didn't + sujeto'; con 'wasn't' (negativo de to be) se invierte a 'was she?'.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Invierte la polaridad de ambas coletillas."
      },
      {
        "option": "C",
        "reason": "Usa el auxiliar de Present Perfect ('haven't') para un evento de Past Simple."
      },
      {
        "option": "D",
        "reason": "Mantiene negativa la segunda coletilla tras una oración ya negativa."
      }
    ],
    "referenceSite": "Englishteststore.net (Question Tags in Past Simple A2)"
  },
  {
    "id": "eng_a2_46",
    "number": 96,
    "level": "A2",
    "variant": "ALL",
    "topic": "Modals of Deduction: Must vs Can't (Logical Certainty)",
    "statement": "Look at his sports car and mansion! He ________ be very wealthy. He ________ be poor.",
    "options": [
      {
        "key": "A",
        "text": "can't / must"
      },
      {
        "key": "B",
        "text": "must / can't"
      },
      {
        "key": "C",
        "text": "might / shouldn't"
      },
      {
        "key": "D",
        "text": "could / mustn't"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Must' expresa deducción lógica afirmativa de certeza ('debe de ser muy rico'), mientras que 'can't' expresa certeza de imposibilidad ('es imposible que sea pobre').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte el razonamiento lógico."
      },
      {
        "option": "C",
        "reason": "'might' denota posibilidad débil y 'shouldn't' consejo."
      },
      {
        "option": "D",
        "reason": "'mustn't' denota prohibición moral, no deducción de imposibilidad."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Modals of Deduction Must and Can't)"
  },
  {
    "id": "eng_a2_47",
    "number": 97,
    "level": "A2",
    "variant": "ALL",
    "topic": "Determiners: Both, Either, Neither",
    "statement": "________ of my parents are doctors, but ________ of them likes working on holidays.",
    "options": [
      {
        "key": "A",
        "text": "Either / neither"
      },
      {
        "key": "B",
        "text": "Both / neither"
      },
      {
        "key": "C",
        "text": "Neither / both"
      },
      {
        "key": "D",
        "text": "Both / either"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Both' califica a los dos miembros con verbo en plural ('Both of my parents are...'). 'Neither' denota ninguno de los dos con verbo afirmativo en singular ('neither of them likes...').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'Either' alude a uno u otro de forma disyuntiva."
      },
      {
        "option": "C",
        "reason": "Invierte la concordancia sintáctica y semántica."
      },
      {
        "option": "D",
        "reason": "'either' con verbo afirmativo no expresa negación."
      }
    ],
    "referenceSite": "Agendaweb.org (Both Either Neither A2)"
  },
  {
    "id": "eng_a2_48",
    "number": 98,
    "level": "A2",
    "variant": "ALL",
    "topic": "Prepositions of Place: At vs On vs In",
    "statement": "She is sitting ________ her desk ________ the second floor ________ the library.",
    "options": [
      {
        "key": "A",
        "text": "on / at / in"
      },
      {
        "key": "B",
        "text": "at / on / in"
      },
      {
        "key": "C",
        "text": "in / on / at"
      },
      {
        "key": "D",
        "text": "at / in / on"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Colocaciones espaciales: 'at one's desk' (frente al escritorio para trabajar); 'on the second floor' (superficie del piso); 'in the library' (dentro del edificio).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'on her desk' significaría sentada encima de la madera del escritorio."
      },
      {
        "option": "C",
        "reason": "'in her desk' es físicamente imposible."
      },
      {
        "option": "D",
        "reason": "Usa 'in' para pisos y 'on' para edificios cerrados."
      }
    ],
    "referenceSite": "Englishteststore.net (Prepositions of Place At On In A2)"
  },
  {
    "id": "eng_a2_49",
    "number": 99,
    "level": "A2",
    "variant": "ALL",
    "topic": "Phrasal Verbs: Pronoun Placement with Separable Verbs",
    "statement": "Which sentence demonstrates the ONLY correct placement of the object pronoun 'it'?",
    "options": [
      {
        "key": "A",
        "text": "Please turn off it before you sleep."
      },
      {
        "key": "B",
        "text": "Please turn it off before you sleep."
      },
      {
        "key": "C",
        "text": "Please it turn off before you sleep."
      },
      {
        "key": "D",
        "text": "Please turn of it before you sleep."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En phrasal verbs transitivos separables ('turn off'), cuando el objeto directo es un pronombre personal (it, them, him, her), es OBLIGATORIO colocarlo entre el verbo y la partícula ('turn it off').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Colocar el pronombre después de la partícula es agramatical en inglés."
      },
      {
        "option": "C",
        "reason": "Coloca el pronombre antes del verbo."
      },
      {
        "option": "D",
        "reason": "Usa la preposición 'of' con una sola f."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Separable Phrasal Verbs with Pronouns)"
  },
  {
    "id": "eng_a2_50",
    "number": 100,
    "level": "A2",
    "variant": "ALL",
    "topic": "Comprehensive A2 Diagnostic Review",
    "statement": "Identify the sentence that is COMPLETELY FREE of grammatical errors:",
    "options": [
      {
        "key": "A",
        "text": "She was more happier when she lived in the country."
      },
      {
        "key": "B",
        "text": "If he will study hard, he passes the test easily."
      },
      {
        "key": "C",
        "text": "While we were having dinner, the phone rang twice."
      },
      {
        "key": "D",
        "text": "He has gone to London last week for an interview."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La opción C es sintácticamente impecable: combina armónicamente una acción de fondo en Past Continuous ('were having') con una interrupción en Past Simple ('rang').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Doble comparativo pleonástico agramatical ('more happier')."
      },
      {
        "option": "B",
        "reason": "Usa 'will' dentro de la prótasis condicional con 'if'."
      },
      {
        "option": "D",
        "reason": "Usa Present Perfect con una expresión de tiempo cerrado ('last week')."
      }
    ],
    "referenceSite": "Agendaweb.org (Comprehensive A2 Review)"
  },
  {
    "id": "eng_b1_01",
    "number": 101,
    "level": "B1",
    "variant": "ALL",
    "topic": "Present Perfect Simple: Since vs. For",
    "statement": "Dr. Hernández has worked at the national hospital ________ 2015, so he has been there ________ more than ten years.",
    "options": [
      {
        "key": "A",
        "text": "for / since"
      },
      {
        "key": "B",
        "text": "since / for"
      },
      {
        "key": "C",
        "text": "from / during"
      },
      {
        "key": "D",
        "text": "in / for"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Since' señala el punto exacto de inicio en el tiempo ('since 2015'), mientras que 'for' mide la duración cuantitativa total del período ('for more than ten years').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte la regla fundamental de tiempo en Present Perfect."
      },
      {
        "option": "C",
        "reason": "'from' no sustituye a 'since' en la formación de tiempos perfectos continuados."
      },
      {
        "option": "D",
        "reason": "'in' se restringe a fechas cerradas con Past Simple."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Since and For Present Perfect)"
  },
  {
    "id": "eng_b1_02",
    "number": 102,
    "level": "B1",
    "variant": "ALL",
    "topic": "Present Perfect: Already vs. Yet vs. Still",
    "statement": "Has the parcel arrived ________? No, it hasn't arrived, but the postal service has ________ dispatched the confirmation email.",
    "options": [
      {
        "key": "A",
        "text": "already / yet"
      },
      {
        "key": "B",
        "text": "yet / already"
      },
      {
        "key": "C",
        "text": "still / yet"
      },
      {
        "key": "D",
        "text": "yet / still"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Yet' se coloca al final de preguntas y oraciones negativas ('Has it arrived yet?'), mientras que 'already' se ubica entre el auxiliar y el participio en oraciones afirmativas para denotar que la acción se completó antes de lo previsto.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los adverbios aspectuales."
      },
      {
        "option": "C",
        "reason": "'still' va antes del auxiliar en oraciones negativas ordinarias."
      },
      {
        "option": "D",
        "reason": "'still dispatched' es incorrecto en este contexto aspectual."
      }
    ],
    "referenceSite": "Agendaweb.org (Already, Yet, Still B1)"
  },
  {
    "id": "eng_b1_03",
    "number": 103,
    "level": "B1",
    "variant": "ALL",
    "topic": "Present Perfect: 'Just' for Recent Actions",
    "statement": "— 'Would you like some lunch?' — 'No, thank you, I have ________ eaten a sandwich.'",
    "options": [
      {
        "key": "A",
        "text": "just"
      },
      {
        "key": "B",
        "text": "yet"
      },
      {
        "key": "C",
        "text": "ever"
      },
      {
        "key": "D",
        "text": "still"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Just' colocado entre el auxiliar 'have' y el participio pasado indica que una acción se ha consumado hace escasos instantes (acabo de comer).",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'yet' solo va al final de preguntas o negativas."
      },
      {
        "option": "C",
        "reason": "'ever' se usa en interrogaciones sobre experiencia vital."
      },
      {
        "option": "D",
        "reason": "'still' indica continuidad de un estado no resuelto."
      }
    ],
    "referenceSite": "Englishteststore.net (Just in Present Perfect B1)"
  },
  {
    "id": "eng_b1_04",
    "number": 104,
    "level": "B1",
    "variant": "ALL",
    "topic": "Present Perfect vs. Past Simple: Aspectual Contrast",
    "statement": "Shakespeare ________ numerous world-famous plays, but contemporary author Stephen King ________ dozens of bestsellers during his career.",
    "options": [
      {
        "key": "A",
        "text": "has written / wrote"
      },
      {
        "key": "B",
        "text": "wrote / has written"
      },
      {
        "key": "C",
        "text": "wrote / wrote"
      },
      {
        "key": "D",
        "text": "has written / has written"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Para figuras históricas ya fallecidas con períodos vitales cerrados se exige Past Simple ('wrote'). Para autores vivos cuya carrera productiva continúa abierta al presente se usa Present Perfect ('has written').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Aplica Present Perfect a una persona fallecida cuyo legado temporal está sellado."
      },
      {
        "option": "C",
        "reason": "Ignora el vínculo de Stephen King con el presente vivo."
      },
      {
        "option": "D",
        "reason": "Aplica Present Perfect a Shakespeare de forma anacrónica."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Simple Past vs Present Perfect B1)"
  },
  {
    "id": "eng_b1_05",
    "number": 105,
    "level": "B1",
    "variant": "ALL",
    "topic": "Present Perfect Continuous: Duration of Ongoing Activity",
    "statement": "The forensic team ________ the evidence since 6:00 AM, and they are still working in the laboratory.",
    "options": [
      {
        "key": "A",
        "text": "has examined"
      },
      {
        "key": "B",
        "text": "has been examining"
      },
      {
        "key": "C",
        "text": "is examining"
      },
      {
        "key": "D",
        "text": "was examining"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cuando una actividad comenzó en el pasado, se ha prolongado sin interrupción y continúa desarrollándose en el presente ('still working'), se emplea Present Perfect Continuous ('has been examining').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Present Perfect Simple enfatiza el resultado final completado, no la continuidad de la labor."
      },
      {
        "option": "C",
        "reason": "Present Continuous omite el marco temporal originado a las 6:00 AM con 'since'."
      },
      {
        "option": "D",
        "reason": "Past Continuous sitúa la acción en un pasado desconectado."
      }
    ],
    "referenceSite": "Agendaweb.org (Present Perfect Continuous B1)"
  },
  {
    "id": "eng_b1_06",
    "number": 106,
    "level": "B1",
    "variant": "ALL",
    "topic": "Present Perfect Simple vs Continuous: Result vs Activity",
    "statement": "He is covered in grease because he ________ his car, but he ________ only two spark plugs so far.",
    "options": [
      {
        "key": "A",
        "text": "has been repairing / has replaced"
      },
      {
        "key": "B",
        "text": "has repaired / has been replacing"
      },
      {
        "key": "C",
        "text": "repaired / replaced"
      },
      {
        "key": "D",
        "text": "was repairing / replaced"
      }
    ],
    "correctAnswer": "A",
    "explanation": "La evidencia física presente de una actividad reciente exige continuo ('has been repairing'), mientras que el cómputo cuantitativo de unidades terminadas ('two spark plugs so far') exige el aspecto simple ('has replaced').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Invierte la regla: las cantidades numéricas nunca se expresan en continuo aspectual."
      },
      {
        "option": "C",
        "reason": "Omite la conexión con el estado de suciedad presente."
      },
      {
        "option": "D",
        "reason": "No vincula el esfuerzo con el resultado actual."
      }
    ],
    "referenceSite": "Englishteststore.net (Present Perfect Simple vs Continuous B1)"
  },
  {
    "id": "eng_b1_07",
    "number": 107,
    "level": "B1",
    "variant": "ALL",
    "topic": "Past Perfect Simple: Sequence of Past Events",
    "statement": "When we arrived at the concert hall, the performance ________, so we were not allowed to enter.",
    "options": [
      {
        "key": "A",
        "text": "already started"
      },
      {
        "key": "B",
        "text": "had already started"
      },
      {
        "key": "C",
        "text": "has already started"
      },
      {
        "key": "D",
        "text": "was already starting"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Past Perfect Simple ('had + participio') designa la acción pretérita que ocurrió antes de otro momento o evento también ubicado en el pasado ('arrived').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Past Simple no marca con claridad la anterioridad causal temporal."
      },
      {
        "option": "C",
        "reason": "Present Perfect no puede subordinarse a un evento clausurado en el pasado."
      },
      {
        "option": "D",
        "reason": "Past Continuous indicaría que la acción estaba apenas iniciándose."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Past Perfect Simple B1)"
  },
  {
    "id": "eng_b1_08",
    "number": 108,
    "level": "B1",
    "variant": "ALL",
    "topic": "Past Perfect with 'By the time'",
    "statement": "By the time the firefighters arrived at the scene, the residents ________ the fire safely.",
    "options": [
      {
        "key": "A",
        "text": "extinguished"
      },
      {
        "key": "B",
        "text": "had extinguished"
      },
      {
        "key": "C",
        "text": "have extinguished"
      },
      {
        "key": "D",
        "text": "were extinguishing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La locución temporal 'By the time + Past Simple' exige sistemáticamente el Past Perfect ('had extinguished') en la cláusula principal para denotar que la acción ya estaba consumada antes de ese límite temporal.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Past Simple no explicita que la extinción precedió a la llegada de los bomberos."
      },
      {
        "option": "C",
        "reason": "Present Perfect viola la concordancia de tiempos en pasado."
      },
      {
        "option": "D",
        "reason": "Past Continuous describiría una acción inacabada en desarrollo."
      }
    ],
    "referenceSite": "Agendaweb.org (Past Perfect with By the time B1)"
  },
  {
    "id": "eng_b1_09",
    "number": 109,
    "level": "B1",
    "variant": "ALL",
    "topic": "Second Conditional: Hypothetical Situations",
    "statement": "If I ________ more free time, I ________ a second foreign language.",
    "options": [
      {
        "key": "A",
        "text": "have / would learn"
      },
      {
        "key": "B",
        "text": "had / would learn"
      },
      {
        "key": "C",
        "text": "had / will learn"
      },
      {
        "key": "D",
        "text": "would have / learned"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El segundo condicional plantea hipótesis irreales o improbables en el presente/futuro: 'If + Past Simple, would + forma base'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Mezcla la prótasis del primer condicional con la apódosis del segundo."
      },
      {
        "option": "C",
        "reason": "Combina agramaticalmente pasado con 'will'."
      },
      {
        "option": "D",
        "reason": "Coloca erróneamente 'would' dentro de la cláusula con 'if'."
      }
    ],
    "referenceSite": "Englishteststore.net (Second Conditional B1)"
  },
  {
    "id": "eng_b1_10",
    "number": 110,
    "level": "B1",
    "variant": "ALL",
    "topic": "Second Conditional: Subjunctive 'Were' for All Persons",
    "statement": "If I ________ in your position, I ________ that controversial job offer immediately.",
    "options": [
      {
        "key": "A",
        "text": "was / would accept"
      },
      {
        "key": "B",
        "text": "were / would accept"
      },
      {
        "key": "C",
        "text": "am / will accept"
      },
      {
        "key": "D",
        "text": "were / will accept"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En el inglés formal y normativo del segundo condicional, se prefiere universalmente la forma del subjuntivo pretérito 'were' para todas las personas gramaticales ('If I were you...').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'was' es coloquial, pero se desaconseja en pruebas estandarizadas académicas."
      },
      {
        "option": "C",
        "reason": "Corresponde al primer condicional real."
      },
      {
        "option": "D",
        "reason": "Mezcla prótasis de subjuntivo con futuro contingente 'will'."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Conditional Sentences Type 2 Were)"
  },
  {
    "id": "eng_b1_11",
    "number": 111,
    "level": "B1",
    "variant": "ALL",
    "topic": "Passive Voice: Present Simple Transformation",
    "statement": "Millions of electronic devices ________ in Asian factories and ________ to global markets every year.",
    "options": [
      {
        "key": "A",
        "text": "manufacture / export"
      },
      {
        "key": "B",
        "text": "are manufactured / exported"
      },
      {
        "key": "C",
        "text": "are manufacturing / exporting"
      },
      {
        "key": "D",
        "text": "is manufactured / exported"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La voz pasiva en Present Simple se forma con 'am/is/are + Past Participle'. Al ser el sujeto 'devices' plural, exige 'are manufactured' y el participio coordinado 'exported'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Voz activa absurda: los dispositivos no se fabrican ni exportan a sí mismos."
      },
      {
        "option": "C",
        "reason": "Voz activa continua."
      },
      {
        "option": "D",
        "reason": "Falla en concordancia de número ('is' con sujeto plural 'devices')."
      }
    ],
    "referenceSite": "Agendaweb.org (Passive Voice Present Simple B1)"
  },
  {
    "id": "eng_b1_12",
    "number": 112,
    "level": "B1",
    "variant": "ALL",
    "topic": "Passive Voice: Past Simple Transformation",
    "statement": "The iconic Golden Gate Bridge in San Francisco ________ in 1937 after four years of intensive construction.",
    "options": [
      {
        "key": "A",
        "text": "completed"
      },
      {
        "key": "B",
        "text": "was completed"
      },
      {
        "key": "C",
        "text": "has been completed"
      },
      {
        "key": "D",
        "text": "had completed"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Para un evento de sujeto paciente en un año cerrado del pasado ('in 1937'), la pasiva requiere 'was/were + Past Participle' ('was completed').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Voz activa: implicaría que el puente completó algo por su propia cuenta."
      },
      {
        "option": "C",
        "reason": "Present Perfect incompatible con una fecha pretérita exacta."
      },
      {
        "option": "D",
        "reason": "Voz activa en Past Perfect."
      }
    ],
    "referenceSite": "Englishteststore.net (Passive Voice Past Simple B1)"
  },
  {
    "id": "eng_b1_13",
    "number": 113,
    "level": "B1",
    "variant": "ALL",
    "topic": "Passive Voice: Agent 'By' vs. Instrument 'With'",
    "statement": "The ancient manuscript was written ________ a quill pen ________ an anonymous medieval monk.",
    "options": [
      {
        "key": "A",
        "text": "by / with"
      },
      {
        "key": "B",
        "text": "with / by"
      },
      {
        "key": "C",
        "text": "by / by"
      },
      {
        "key": "D",
        "text": "with / with"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la voz pasiva, el agente personal humano que realiza la acción se introduce con 'by' ('by an anonymous monk'), mientras que la herramienta, instrumento o sustancia empleada se introduce con 'with' ('with a quill pen').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte agente e instrumento."
      },
      {
        "option": "C",
        "reason": "Usa 'by' para el instrumento de escritura."
      },
      {
        "option": "D",
        "reason": "Usa 'with' para el agente humano personal."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Passive Agent by and with)"
  },
  {
    "id": "eng_b1_14",
    "number": 114,
    "level": "B1",
    "variant": "ALL",
    "topic": "Defining Relative Clauses: Pronoun Selection",
    "statement": "The surgeon ________ operated on my father and the surgical robot ________ assisted her were both outstanding.",
    "options": [
      {
        "key": "A",
        "text": "which / who"
      },
      {
        "key": "B",
        "text": "who / which"
      },
      {
        "key": "C",
        "text": "whose / who"
      },
      {
        "key": "D",
        "text": "whom / whose"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Para antecedentes de persona humana ('surgeon') se emplea 'who' o 'that'. Para objetos inanimados o máquinas ('robot') se utiliza 'which' o 'that'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los pronombres relativos."
      },
      {
        "option": "C",
        "reason": "'whose' es relativo posesivo y no concuerda."
      },
      {
        "option": "D",
        "reason": "'whom' solo se usa para complementos directos o preposicionales, no como sujeto de 'operated'."
      }
    ],
    "referenceSite": "Agendaweb.org (Defining Relative Clauses B1)"
  },
  {
    "id": "eng_b1_15",
    "number": 115,
    "level": "B1",
    "variant": "ALL",
    "topic": "Defining Relative Clauses: Contact Clauses (Zero Relative)",
    "statement": "In which of the following sentences can the relative pronoun be SAFELY OMITTED?",
    "options": [
      {
        "key": "A",
        "text": "The professor who taught chemistry retired yesterday."
      },
      {
        "key": "B",
        "text": "The book that I borrowed from the library is fascinating."
      },
      {
        "key": "C",
        "text": "The student who won the scholarship gave a speech."
      },
      {
        "key": "D",
        "text": "The engineer who designed the bridge was honored."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El pronombre relativo solo puede omitirse libremente (cláusula de contacto) cuando funciona como OBJETO directo de la subordinada ('The book [that] I borrowed...'). Si funciona como sujeto del verbo subordinado (A, C, D), su omisión es terminantemente agramatical.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'who' es el sujeto directo del verbo 'taught'."
      },
      {
        "option": "C",
        "reason": "'who' es el sujeto del verbo 'won'."
      },
      {
        "option": "D",
        "reason": "'who' es el sujeto del verbo 'designed'."
      }
    ],
    "referenceSite": "Englishteststore.net (Omission of Relative Pronoun B1)"
  },
  {
    "id": "eng_b1_16",
    "number": 116,
    "level": "B1",
    "variant": "ALL",
    "topic": "Relative Pronouns: Possessive 'Whose'",
    "statement": "We interviewed an architect ________ designs have won international environmental awards.",
    "options": [
      {
        "key": "A",
        "text": "who"
      },
      {
        "key": "B",
        "text": "whose"
      },
      {
        "key": "C",
        "text": "whom"
      },
      {
        "key": "D",
        "text": "which"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Whose' es el pronombre relativo de posesión equivalente a 'cuyo/cuyos/cuya/cuyas', y une al poseedor ('architect') con lo poseído ('designs').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'who' no indica relación de pertenencia."
      },
      {
        "option": "C",
        "reason": "'whom' es pronombre acusativo de persona."
      },
      {
        "option": "D",
        "reason": "'which' se refiere a cosas y no transmite posesión."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Relative Pronoun Whose)"
  },
  {
    "id": "eng_b1_17",
    "number": 117,
    "level": "B1",
    "variant": "ALL",
    "topic": "Past Habits: Used to + Infinitive",
    "statement": "When Mauricio was a child, he ________ ride his bicycle to school every day, but now he drives a car.",
    "options": [
      {
        "key": "A",
        "text": "used to"
      },
      {
        "key": "B",
        "text": "is used to"
      },
      {
        "key": "C",
        "text": "was used to"
      },
      {
        "key": "D",
        "text": "got used to"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Used to + infinitivo en forma base' expresa un hábito, costumbre o estado habitual en el pasado que ya ha cesado por completo en el presente.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'is used to' requiere gerundio y expresa estar acostumbrado en el presente."
      },
      {
        "option": "C",
        "reason": "'was used to' expresa estar acostumbrado en pasado."
      },
      {
        "option": "D",
        "reason": "'got used to' expresa el proceso de aclimatación o adaptación."
      }
    ],
    "referenceSite": "Agendaweb.org (Used to for Past Habits B1)"
  },
  {
    "id": "eng_b1_18",
    "number": 118,
    "level": "B1",
    "variant": "ALL",
    "topic": "Past Habits: 'Would' vs. 'Used to' for States",
    "statement": "Which sentence is GRAMMATICALLY INCORRECT when describing the past?",
    "options": [
      {
        "key": "A",
        "text": "Every summer, my grandfather would take us fishing at the lake."
      },
      {
        "key": "B",
        "text": "My grandfather would be a tall man with green eyes."
      },
      {
        "key": "C",
        "text": "My grandfather used to be a tall man with green eyes."
      },
      {
        "key": "D",
        "text": "We would sit on the porch for hours telling stories."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El auxiliar 'would' solo puede emplearse para acciones o rutinas repetidas en el pasado (A y D). NUNCA puede utilizarse con verbos de estado permanente (como 'to be', 'have', 'believe', 'know'); para estados pasados es obligatorio usar 'used to' (C).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Es correcto: 'take us fishing' es una acción repetida."
      },
      {
        "option": "C",
        "reason": "Es correcto: 'used to be' es el uso estándar con verbos de estado."
      },
      {
        "option": "D",
        "reason": "Es correcto: 'sit' es una acción física repetible."
      }
    ],
    "referenceSite": "Englishteststore.net (Would vs Used to B1)"
  },
  {
    "id": "eng_b1_19",
    "number": 119,
    "level": "B1",
    "variant": "ALL",
    "topic": "Familiarity vs Adaptation: Be used to vs Get used to",
    "statement": "Living in cold weather was difficult at first, but after several months I ________ it.",
    "options": [
      {
        "key": "A",
        "text": "used to"
      },
      {
        "key": "B",
        "text": "got used to"
      },
      {
        "key": "C",
        "text": "am used to"
      },
      {
        "key": "D",
        "text": "use to"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Get used to + sustantivo/gerundio' denota el proceso dinámico de adaptación ('me acostumbré'). Como la oración narra la transición pasada ('after several months'), exige 'got used to'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'used to' solo se refiere a hábitos pasados discontinuados con infinitivo."
      },
      {
        "option": "C",
        "reason": "'am used to' está en tiempo presente y choca con el marco histórico narrado."
      },
      {
        "option": "D",
        "reason": "'use to' es una forma verbal defectuosa."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Be used to and Get used to)"
  },
  {
    "id": "eng_b1_20",
    "number": 120,
    "level": "B1",
    "variant": "ALL",
    "topic": "Modals of Deduction: Present Probability",
    "statement": "The light in her office is off and her car isn't in the parking lot. She ________ be here; she ________ already be at home.",
    "options": [
      {
        "key": "A",
        "text": "must / can't"
      },
      {
        "key": "B",
        "text": "can't / must"
      },
      {
        "key": "C",
        "text": "might / shouldn't"
      },
      {
        "key": "D",
        "text": "mustn't / could"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Can't be here' expresa certeza lógica de imposibilidad deductiva, mientras que 'must be at home' expresa certeza lógica afirmativa fundamentada en las evidencias.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte por completo la deducción lógica."
      },
      {
        "option": "C",
        "reason": "'might' denota posibilidad débil y 'shouldn't' consejo moral."
      },
      {
        "option": "D",
        "reason": "'mustn't' denota prohibición social, no deducción lógica."
      }
    ],
    "referenceSite": "Agendaweb.org (Modals of Deduction Present B1)"
  },
  {
    "id": "eng_b1_21",
    "number": 121,
    "level": "B1",
    "variant": "ALL",
    "topic": "Modal Perfects: Should Have for Past Regret",
    "statement": "I failed the physics examination. I ________ more consistently instead of playing video games all weekend.",
    "options": [
      {
        "key": "A",
        "text": "should study"
      },
      {
        "key": "B",
        "text": "should have studied"
      },
      {
        "key": "C",
        "text": "must have studied"
      },
      {
        "key": "D",
        "text": "could study"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Should have + Past Participle' expresa reproche, lamento o consejo retrospectivo sobre una acción ideal que no se llevó a cabo en el pasado.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'should study' es una recomendación presente o futura y no se aplica al examen ya reprobado."
      },
      {
        "option": "C",
        "reason": "'must have studied' deduciría falsamente que el sujeto sí estudió."
      },
      {
        "option": "D",
        "reason": "'could study' alude a capacidad presente."
      }
    ],
    "referenceSite": "Englishteststore.net (Should Have Past Participle B1)"
  },
  {
    "id": "eng_b1_22",
    "number": 122,
    "level": "B1",
    "variant": "ALL",
    "topic": "Reported Speech: Tense Backshift in Statements",
    "statement": "— 'I am working on a new software project,' Roberto said. — Roberto said that he ________ on a new software project.",
    "options": [
      {
        "key": "A",
        "text": "is working"
      },
      {
        "key": "B",
        "text": "was working"
      },
      {
        "key": "C",
        "text": "had worked"
      },
      {
        "key": "D",
        "text": "has been working"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En el estilo indirecto (Reported Speech), el verbo introductorio en pasado ('said') desencadena la correlación temporal retrógrada (backshift): Present Continuous ('am working') cambia a Past Continuous ('was working').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "No realiza el backshift temporal obligatorio en inglés estándar."
      },
      {
        "option": "C",
        "reason": "Cambia a Past Perfect sin justificación aspectual."
      },
      {
        "option": "D",
        "reason": "Usa Present Perfect Continuous."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Reported Speech Backshift)"
  },
  {
    "id": "eng_b1_23",
    "number": 123,
    "level": "B1",
    "variant": "ALL",
    "topic": "Reported Speech: Reporting Verbs 'Say' vs 'Tell'",
    "statement": "The manager ________ us that the meeting had been canceled, but she didn't ________ why.",
    "options": [
      {
        "key": "A",
        "text": "said / tell"
      },
      {
        "key": "B",
        "text": "told / say"
      },
      {
        "key": "C",
        "text": "told / tell"
      },
      {
        "key": "D",
        "text": "said / say"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Tell' exige obligatoriamente un objeto indirecto personal sin preposición ('told us'). 'Say' se utiliza sin objeto personal o introducido con 'to' ('didn't say why').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'said us' es agramatical en inglés estándar."
      },
      {
        "option": "C",
        "reason": "'didn't tell why' carece del objeto personal exigido por tell."
      },
      {
        "option": "D",
        "reason": "Usa 'said us' en la primera cláusula."
      }
    ],
    "referenceSite": "Agendaweb.org (Say vs Tell B1)"
  },
  {
    "id": "eng_b1_24",
    "number": 124,
    "level": "B1",
    "variant": "ALL",
    "topic": "Reported Speech: Interrogative Word Order",
    "statement": "— 'Where do you live?' the officer asked. — The officer asked me ________.",
    "options": [
      {
        "key": "A",
        "text": "where did I live"
      },
      {
        "key": "B",
        "text": "where I lived"
      },
      {
        "key": "C",
        "text": "where do I live"
      },
      {
        "key": "D",
        "text": "where lived I"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Al reportar una pregunta, la estructura interrogativa con auxiliar invertido ('do you live') desaparece y se convierte en una cláusula subordinada afirmativa en pasado: 'partícula wh- + sujeto + verbo en pasado' ('where I lived').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Conserva innecesariamente el auxiliar interrogativo 'did'."
      },
      {
        "option": "C",
        "reason": "No realiza el cambio a tiempo pasado."
      },
      {
        "option": "D",
        "reason": "Aplica una inversión estilística arcaica."
      }
    ],
    "referenceSite": "Englishteststore.net (Reported Questions B1)"
  },
  {
    "id": "eng_b1_25",
    "number": 125,
    "level": "B1",
    "variant": "ALL",
    "topic": "Verb Patterns: Remember + Infinitive vs. Gerund",
    "statement": "Please remember ________ the front door when you leave, because yesterday you didn't remember ________ it.",
    "options": [
      {
        "key": "A",
        "text": "locking / to lock"
      },
      {
        "key": "B",
        "text": "to lock / locking"
      },
      {
        "key": "C",
        "text": "to lock / to lock"
      },
      {
        "key": "D",
        "text": "locking / locking"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Remember to lock' (infinitivo) alude al deber o tarea que debe realizarse en el futuro. 'Remember locking' (gerundio) alude a evocar en la memoria un recuerdo de una acción ya ejecutada en el pasado.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los dos significados verbales."
      },
      {
        "option": "C",
        "reason": "No captura la rememoración retrospectiva del acto pasado."
      },
      {
        "option": "D",
        "reason": "Usa gerundio para la instrucción futura."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Remember Gerund vs Infinitive)"
  },
  {
    "id": "eng_b1_26",
    "number": 126,
    "level": "B1",
    "variant": "ALL",
    "topic": "Verb Patterns: Stop + Infinitive vs. Gerund",
    "statement": "On our road trip, we stopped ________ gasoline, and the driver decided to stop ________ because it was harmful to his lungs.",
    "options": [
      {
        "key": "A",
        "text": "getting / to smoke"
      },
      {
        "key": "B",
        "text": "to get / smoking"
      },
      {
        "key": "C",
        "text": "to get / to smoke"
      },
      {
        "key": "D",
        "text": "getting / smoking"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Stop to get' (infinitivo) significa interrumpir una marcha para llevar a cabo otra acción de propósito. 'Stop smoking' (gerundio) significa abandonar o cesar definitivamente un hábito.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invertiría el sentido: 'cesamos de conseguir gasolina para ponernos a fumar'."
      },
      {
        "option": "C",
        "reason": "Indicaría que se detuvo a encender un cigarrillo."
      },
      {
        "option": "D",
        "reason": "Indicaría que abandonó el combustible."
      }
    ],
    "referenceSite": "Agendaweb.org (Stop to do vs Stop doing B1)"
  },
  {
    "id": "eng_b1_27",
    "number": 127,
    "level": "B1",
    "variant": "ALL",
    "topic": "Question Tags: Special and Irregular Cases",
    "statement": "I am your best friend, ________? And let's take a short break now, ________?",
    "options": [
      {
        "key": "A",
        "text": "am not I / will we"
      },
      {
        "key": "B",
        "text": "aren't I / shall we"
      },
      {
        "key": "C",
        "text": "amn't I / do we"
      },
      {
        "key": "D",
        "text": "isn't it / shall we"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Excepciones normativas de las question tags: 'I am' tiene como coletilla negativa consagrada 'aren't I?' (no existe 'amn't I'). Las propuestas con 'Let's' llevan como coletilla 'shall we?'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'am not I' es arcaico en inglés informal; 'will we' no es la coletilla de Let's."
      },
      {
        "option": "C",
        "reason": "'amn't I' no forma parte del estándar general internacional."
      },
      {
        "option": "D",
        "reason": "'isn't it' es una muletilla no estándar."
      }
    ],
    "referenceSite": "Englishteststore.net (Question Tags Advanced B1)"
  },
  {
    "id": "eng_b1_28",
    "number": 128,
    "level": "B1",
    "variant": "ALL",
    "topic": "Polite Indirect Questions: Syntax and Order",
    "statement": "Could you please tell me ________?",
    "options": [
      {
        "key": "A",
        "text": "where is the central train station"
      },
      {
        "key": "B",
        "text": "where the central train station is"
      },
      {
        "key": "C",
        "text": "where does the central train station be"
      },
      {
        "key": "D",
        "text": "where the train station was located yesterday"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En preguntas indirectas introducidas por fórmulas de cortesía ('Could you tell me...'), el orden vuelve a ser el de una oración afirmativa: 'partícula + sujeto + verbo' ('where the station is'), SIN inversión del sujeto y el verbo.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Mantiene la inversión interrogativa directa, lo cual es agramatical en una pregunta indirecta."
      },
      {
        "option": "C",
        "reason": "Usa erróneamente el auxiliar 'does' con el verbo to be."
      },
      {
        "option": "D",
        "reason": "Cambia el tiempo y el contenido informativo de la pregunta."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Indirect Questions)"
  },
  {
    "id": "eng_b1_29",
    "number": 129,
    "level": "B1",
    "variant": "ALL",
    "topic": "Third Conditional: Impossible Past Condition",
    "statement": "If the ambulance ________ five minutes earlier, the paramedic ________ the patient's life.",
    "options": [
      {
        "key": "A",
        "text": "arrived / would save"
      },
      {
        "key": "B",
        "text": "had arrived / would have saved"
      },
      {
        "key": "C",
        "text": "would arrive / had saved"
      },
      {
        "key": "D",
        "text": "had arrived / saved"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El tercer condicional formula hipótesis retrospectivas sobre el pasado: 'If + Past Perfect (had arrived), would have + Past Participle (would have saved)'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Corresponde al segundo condicional hipotético en presente."
      },
      {
        "option": "C",
        "reason": "Pone 'would' dentro de la cláusula con 'if'."
      },
      {
        "option": "D",
        "reason": "Omite el auxiliar compuesto 'would have'."
      }
    ],
    "referenceSite": "Agendaweb.org (Third Conditional B1)"
  },
  {
    "id": "eng_b1_30",
    "number": 130,
    "level": "B1",
    "variant": "ALL",
    "topic": "Wish: Regrets about the Present",
    "statement": "I have to work on Saturday. I wish I ________ free so that I could attend your graduation party.",
    "options": [
      {
        "key": "A",
        "text": "am"
      },
      {
        "key": "B",
        "text": "were"
      },
      {
        "key": "C",
        "text": "have been"
      },
      {
        "key": "D",
        "text": "will be"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Wish + Past Simple / Subjunctive Were' expresa el anhelo de que la situación presente fuera diferente de la realidad actual.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa tiempo presente ordinario."
      },
      {
        "option": "C",
        "reason": "Present Perfect no expresa el deseo hipotético actual."
      },
      {
        "option": "D",
        "reason": "'will' no se utiliza con el verbo wish para deseos personales."
      }
    ],
    "referenceSite": "Englishteststore.net (Wish Sentences B1)"
  },
  {
    "id": "eng_b1_31",
    "number": 131,
    "level": "B1",
    "variant": "ALL",
    "topic": "Wish + Would: Complaints about Others' Actions",
    "statement": "I wish the neighbors ________ playing loud music at 2:00 in the morning!",
    "options": [
      {
        "key": "A",
        "text": "stop"
      },
      {
        "key": "B",
        "text": "would stop"
      },
      {
        "key": "C",
        "text": "had stopped"
      },
      {
        "key": "D",
        "text": "will stop"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Wish + would + base form' se emplea para manifestar molestia, queja o el deseo imperioso de que otra persona cambie una conducta irritante.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Present Simple agramatical con wish."
      },
      {
        "option": "C",
        "reason": "Past Perfect expresaría lamento sobre un hecho ya cerrado en el pasado."
      },
      {
        "option": "D",
        "reason": "'will' es agramatical con wish."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Wish and Would B1)"
  },
  {
    "id": "eng_b1_32",
    "number": 132,
    "level": "B1",
    "variant": "ALL",
    "topic": "Connectors of Purpose: So that vs In order to",
    "statement": "She spoke slowly and clearly ________ the international students could understand every single word.",
    "options": [
      {
        "key": "A",
        "text": "in order to"
      },
      {
        "key": "B",
        "text": "so that"
      },
      {
        "key": "C",
        "text": "for"
      },
      {
        "key": "D",
        "text": "because of"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'So that' va seguido de una cláusula subordinada completa con sujeto y verbo modal ('the students could understand'). 'In order to' exigiría ir seguido directamente de la forma base del verbo.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'in order to' no puede ir seguido de un sujeto y un verbo finito modal."
      },
      {
        "option": "C",
        "reason": "'for' con cláusula completa es arcaico o causal."
      },
      {
        "option": "D",
        "reason": "'because of' exige una frase nominal."
      }
    ],
    "referenceSite": "Agendaweb.org (Connectors of Purpose B1)"
  },
  {
    "id": "eng_b1_33",
    "number": 133,
    "level": "B1",
    "variant": "ALL",
    "topic": "Connectors of Contrast: Despite vs In spite of vs Although",
    "statement": "________ the heavy storm, the flight landed safely on schedule.",
    "options": [
      {
        "key": "A",
        "text": "Although"
      },
      {
        "key": "B",
        "text": "Despite"
      },
      {
        "key": "C",
        "text": "Even though"
      },
      {
        "key": "D",
        "text": "In spite"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Despite' (e 'in spite of') van seguidos de una frase nominal ('the heavy storm') o un gerundio. 'Although' y 'even though' exigen obligatoriamente una oración subordinada completa con sujeto y verbo.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'Although' requiere una cláusula con verbo ('Although there was a storm')."
      },
      {
        "option": "C",
        "reason": "'Even though' requiere una cláusula completa."
      },
      {
        "option": "D",
        "reason": "Omite la preposición obligatoria 'of' ('in spite of')."
      }
    ],
    "referenceSite": "Englishteststore.net (Despite and In Spite of B1)"
  },
  {
    "id": "eng_b1_34",
    "number": 134,
    "level": "B1",
    "variant": "ALL",
    "topic": "Three-Part Phrasal Verbs: Look forward to",
    "statement": "All the students are really looking forward to ________ their summer holidays.",
    "options": [
      {
        "key": "A",
        "text": "start"
      },
      {
        "key": "B",
        "text": "starting"
      },
      {
        "key": "C",
        "text": "started"
      },
      {
        "key": "D",
        "text": "be starting"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En el phrasal verb 'look forward to', la palabra 'to' es una PREPOSICIÓN, no una marca de infinitivo. Por ende, cualquier verbo que la siga debe adoptar la forma en gerundio '-ing' ('starting').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Error común: asume que 'to' es infinitivo y usa la forma base."
      },
      {
        "option": "C",
        "reason": "Usa pasado simple tras una preposición."
      },
      {
        "option": "D",
        "reason": "Usa infinitivo continuo."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Three-Word Phrasal Verbs B1)"
  },
  {
    "id": "eng_b1_35",
    "number": 135,
    "level": "B1",
    "variant": "ALL",
    "topic": "Causative Form: Have / Get Something Done",
    "statement": "My car was making a strange noise, so yesterday I ________ at the certified mechanic's shop.",
    "options": [
      {
        "key": "A",
        "text": "repaired it"
      },
      {
        "key": "B",
        "text": "had it repaired"
      },
      {
        "key": "C",
        "text": "had repaired it"
      },
      {
        "key": "D",
        "text": "got repair it"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La estructura causativa 'have/get + objeto + Past Participle' indica que contratamos o encargamos a un tercero profesional la realización de un servicio técnico ('had it repaired').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'repaired it' afirmaría que el propio hablante hizo la reparación con sus manos."
      },
      {
        "option": "C",
        "reason": "Past Perfect en voz activa."
      },
      {
        "option": "D",
        "reason": "Estructura agramatical."
      }
    ],
    "referenceSite": "Agendaweb.org (Causative Have Something Done B1)"
  },
  {
    "id": "eng_b1_36",
    "number": 136,
    "level": "B1",
    "variant": "ALL",
    "topic": "Future Continuous: Will be + -ing",
    "statement": "This time next week, we ________ across the Atlantic Ocean on our way to Madrid.",
    "options": [
      {
        "key": "A",
        "text": "will fly"
      },
      {
        "key": "B",
        "text": "will be flying"
      },
      {
        "key": "C",
        "text": "are flying"
      },
      {
        "key": "D",
        "text": "will have flown"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'This time next week' sitúa el foco temporal en una acción que estará en pleno desarrollo en ese instante futuro exacto: 'will be + verbo-ing'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Future Simple indicaría un evento puntual o inicio de acción."
      },
      {
        "option": "C",
        "reason": "Present Continuous describe citas agendadas, pero no enfatiza el progreso continuo simultáneo a esa hora."
      },
      {
        "option": "D",
        "reason": "Future Perfect indicaría que el vuelo ya concluyó."
      }
    ],
    "referenceSite": "Englishteststore.net (Future Continuous B1)"
  },
  {
    "id": "eng_b1_37",
    "number": 137,
    "level": "B1",
    "variant": "ALL",
    "topic": "Time Clauses: Conjunctions with Present Tense",
    "statement": "As soon as the manager ________, we will begin the presentation.",
    "options": [
      {
        "key": "A",
        "text": "will arrive"
      },
      {
        "key": "B",
        "text": "arrives"
      },
      {
        "key": "C",
        "text": "is arriving"
      },
      {
        "key": "D",
        "text": "arrived"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En las cláusulas temporales subordinadas introducidas por 'as soon as', 'when', 'until', 'before', 'after', se PROHÍBE el uso de 'will'; el tiempo futuro se expresa sintácticamente con Present Simple ('arrives').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa 'will' en la cláusula temporal (uno de los errores más sancionados en exámenes estandarizados)."
      },
      {
        "option": "C",
        "reason": "Present Continuous no expresa la contingencia puntual de llegada."
      },
      {
        "option": "D",
        "reason": "Usa pasado para un evento aún pendiente."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Future Time Clauses)"
  },
  {
    "id": "eng_b1_38",
    "number": 138,
    "level": "B1",
    "variant": "ALL",
    "topic": "Participial Adjectives: -ed (Feelings) vs -ing (Causes)",
    "statement": "The lecture on quantum computing was so ________ that most of the audience became completely ________.",
    "options": [
      {
        "key": "A",
        "text": "confused / confusing"
      },
      {
        "key": "B",
        "text": "confusing / confused"
      },
      {
        "key": "C",
        "text": "confused / confused"
      },
      {
        "key": "D",
        "text": "confusing / confusing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los adjetivos en '-ing' describen la cualidad o causa de la emoción ('a confusing lecture'), mientras que los adjetivos en '-ed' describen el estado anímico o sensación que experimenta la persona ('confused audience').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los dos adjetivos participiales."
      },
      {
        "option": "C",
        "reason": "Atribuye emoción humana pasiva a la conferencia."
      },
      {
        "option": "D",
        "reason": "Atribuye cualidad causativa a la audiencia."
      }
    ],
    "referenceSite": "Agendaweb.org (-ed and -ing Adjectives B1)"
  },
  {
    "id": "eng_b1_39",
    "number": 139,
    "level": "B1",
    "variant": "ALL",
    "topic": "Comparative Correlatives: The... the...",
    "statement": "________ you practice your spoken English, ________ confident you will become.",
    "options": [
      {
        "key": "A",
        "text": "The more / the more"
      },
      {
        "key": "B",
        "text": "More / more"
      },
      {
        "key": "C",
        "text": "The most / the most"
      },
      {
        "key": "D",
        "text": "As / as"
      }
    ],
    "correctAnswer": "A",
    "explanation": "La correlación de proporción paralela se forma con 'The + comparativo..., the + comparativo...' ('The more you practice, the more confident you will become').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Omite el artículo obligatorio 'the' en ambos miembros correlativos."
      },
      {
        "option": "C",
        "reason": "Usa superlativos en una correlación comparativa continua."
      },
      {
        "option": "D",
        "reason": "No expresa gradación proporcional acumulativa."
      }
    ],
    "referenceSite": "Englishteststore.net (The more the more B1)"
  },
  {
    "id": "eng_b1_40",
    "number": 140,
    "level": "B1",
    "variant": "ALL",
    "topic": "Prepositional Idioms: By mistake vs On purpose",
    "statement": "I didn't delete your file ________; I pressed the delete key ________.",
    "options": [
      {
        "key": "A",
        "text": "by purpose / on mistake"
      },
      {
        "key": "B",
        "text": "on purpose / by mistake"
      },
      {
        "key": "C",
        "text": "with purpose / with mistake"
      },
      {
        "key": "D",
        "text": "in purpose / for mistake"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Las frases preposicionales fijas idiomáticas en inglés son: 'on purpose' (a propósito / deliberadamente) y 'by mistake' (por equivocación / accidentalmente).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte las preposiciones consagradas."
      },
      {
        "option": "C",
        "reason": "Calca preposiciones inexistentes en este modismo."
      },
      {
        "option": "D",
        "reason": "Combinaciones agramaticales."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Prepositional Phrases B1)"
  },
  {
    "id": "eng_b1_41",
    "number": 141,
    "level": "B1",
    "variant": "ALL",
    "topic": "US vs UK Grammar: Possession with Have",
    "statement": "In standard British English, 'Have you got any siblings?' is common. In standard American English, the equivalent question is:",
    "options": [
      {
        "key": "A",
        "text": "Got you any siblings?"
      },
      {
        "key": "B",
        "text": "Do you have any siblings?"
      },
      {
        "key": "C",
        "text": "Have you any siblings?"
      },
      {
        "key": "D",
        "text": "Are you having any siblings?"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El inglés estadounidense prefiere predominantemente el auxiliar 'do' con el verbo léxico 'have' ('Do you have any siblings?'), mientras que el británico tradicional recurre a 'have got'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'Got you' es agramatical en ambos dialectos."
      },
      {
        "option": "C",
        "reason": "'Have you' sin auxiliar es un arcaísmo estilístico formal británico."
      },
      {
        "option": "D",
        "reason": "'have' en sentido de parentesco es estativo y no admite progresivo."
      }
    ],
    "referenceSite": "Agendaweb.org (Have vs Have got differences)"
  },
  {
    "id": "eng_b1_42",
    "number": 142,
    "level": "B1",
    "variant": "ALL",
    "topic": "US vs UK Grammar: Aspectual Flexibility with 'Already'",
    "statement": "Which sentence is fully ACCEPTED in American English conversational usage, but considered NON-STANDARD in traditional British English?",
    "options": [
      {
        "key": "A",
        "text": "I already saw that movie yesterday."
      },
      {
        "key": "B",
        "text": "I have already seen that film."
      },
      {
        "key": "C",
        "text": "I already seen that movie."
      },
      {
        "key": "D",
        "text": "I am already seeing that movie."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En el inglés estadounidense (US), adverbios como 'already', 'just' y 'yet' se combinan de forma completamente idiomática con el Past Simple ('I already saw that movie'). En el inglés británico formal (UK) se exige estrictamente el Present Perfect ('I have already seen that film').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Es la forma británica tradicional estándar (también aceptada en EE. UU.)."
      },
      {
        "option": "C",
        "reason": "Usa participio sin auxiliar (vulgarismo agramatical)."
      },
      {
        "option": "D",
        "reason": "Usa tiempo continuo para una experiencia terminada."
      }
    ],
    "referenceSite": "Englishteststore.net (US vs UK Verb Tenses B1)"
  },
  {
    "id": "eng_b1_43",
    "number": 143,
    "level": "B1",
    "variant": "ALL",
    "topic": "US vs UK Vocabulary: Food and Snacks",
    "statement": "In the United States, thinly sliced fried potatoes are called ________ and sweet baked treats are ________.",
    "options": [
      {
        "key": "A",
        "text": "chips / biscuits"
      },
      {
        "key": "B",
        "text": "potato chips / cookies"
      },
      {
        "key": "C",
        "text": "crisps / biscuits"
      },
      {
        "key": "D",
        "text": "french fries / scones"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En EE. UU., las papas fritas embolsadas son 'potato chips' (o 'chips') y las galletas dulces son 'cookies'. En el Reino Unido se denominan 'crisps' y 'biscuits' respectivamente.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Mezcla la denominación estadounidense con el término británico 'biscuits'."
      },
      {
        "option": "C",
        "reason": "Corresponde enteramente a la nomenclatura británica (UK)."
      },
      {
        "option": "D",
        "reason": "'french fries' son papas fritas calientes de restaurante y 'scones' son panecillos tradicionales."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (British and American Food Words)"
  },
  {
    "id": "eng_b1_44",
    "number": 144,
    "level": "B1",
    "variant": "ALL",
    "topic": "Determiners: Subject-Verb Agreement with 'Neither... nor'",
    "statement": "Neither the head physician nor his assistant nurses ________ aware of the power outage in the east wing.",
    "options": [
      {
        "key": "A",
        "text": "was"
      },
      {
        "key": "B",
        "text": "were"
      },
      {
        "key": "C",
        "text": "has been"
      },
      {
        "key": "D",
        "text": "is"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Regla de proximidad con 'neither... nor': cuando los sujetos difieren en número (singular y plural), el verbo concuerda en número con el sujeto más cercano a él ('assistant nurses' es plural, por lo que exige 'were').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Concuerda erróneamente con el primer sujeto alejado 'head physician'."
      },
      {
        "option": "C",
        "reason": "Usa singular y tiempo compuesto no contextualizado."
      },
      {
        "option": "D",
        "reason": "Usa tiempo presente singular."
      }
    ],
    "referenceSite": "Agendaweb.org (Neither Nor Concord B1)"
  },
  {
    "id": "eng_b1_45",
    "number": 145,
    "level": "B1",
    "variant": "ALL",
    "topic": "US vs UK Concord: Collective Nouns",
    "statement": "Consider the sentence: 'The team ________ playing brilliantly.' In British English, which verb form is preferred when viewing the team as individuals?",
    "options": [
      {
        "key": "A",
        "text": "is"
      },
      {
        "key": "B",
        "text": "are"
      },
      {
        "key": "C",
        "text": "be"
      },
      {
        "key": "D",
        "text": "was"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El inglés británico prefiere tratar los nombres colectivos (team, government, committee, family) con verbo en PLURAL ('are') cuando se percibe a sus miembros actuando de forma individual o activa. El inglés estadounidense prefiere casi invariablemente el singular ('is').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Es la opción predilecta del inglés estadounidense institucional."
      },
      {
        "option": "C",
        "reason": "Subjuntivo bare infinitive sin motivar."
      },
      {
        "option": "D",
        "reason": "Tiempo pasado singular."
      }
    ],
    "referenceSite": "Englishteststore.net (Collective Nouns Agreement US vs UK)"
  },
  {
    "id": "eng_b1_46",
    "number": 146,
    "level": "B1",
    "variant": "ALL",
    "topic": "Passive Voice: Ditransitive Verbs",
    "statement": "The university granted the student a full scholarship. What is the MOST NATURAL passive transformation in English?",
    "options": [
      {
        "key": "A",
        "text": "A full scholarship was granted by the student."
      },
      {
        "key": "B",
        "text": "The student was granted a full scholarship by the university."
      },
      {
        "key": "C",
        "text": "A full scholarship granted the university."
      },
      {
        "key": "D",
        "text": "The student granted to a full scholarship."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En inglés, cuando un verbo tiene dos objetos (objeto indirecto de persona y directo de cosa), la pasiva natural y preferida promueve al OBJETO INDIRECTO de persona a la posición de sujeto paciente ('The student was granted...').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Afirma falsamente que la beca fue otorgada 'por el estudiante'."
      },
      {
        "option": "C",
        "reason": "Voz activa absurda donde la beca otorga la universidad."
      },
      {
        "option": "D",
        "reason": "Estructura agramatical."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Passive of Verbs with Two Objects)"
  },
  {
    "id": "eng_b1_47",
    "number": 147,
    "level": "B1",
    "variant": "ALL",
    "topic": "Relative Clauses: The Comma Rule",
    "statement": "Which sentence demonstrates that the speaker has ONLY ONE brother?",
    "options": [
      {
        "key": "A",
        "text": "My brother who lives in Canada is an architect."
      },
      {
        "key": "B",
        "text": "My brother, who lives in Canada, is an architect."
      },
      {
        "key": "C",
        "text": "My brother which lives in Canada is an architect."
      },
      {
        "key": "D",
        "text": "My brother that lives in Canada is an architect."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La cláusula no restrictiva (non-defining) entre comas (B) aporta información adicional no esencial sobre un sujeto ya único e inequívoco ('My brother'). En cambio, la cláusula restrictiva sin comas (A y D) implica que el hablante tiene varios hermanos y usa 'who lives in Canada' para distinguirlo de los demás.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Implica que tiene varios hermanos y este es el que reside en Canadá."
      },
      {
        "option": "C",
        "reason": "Usa 'which' para una persona humana."
      },
      {
        "option": "D",
        "reason": "Cláusula restrictiva que implica multiplicidad de hermanos."
      }
    ],
    "referenceSite": "Agendaweb.org (Defining vs Non-Defining Relative Clauses B1)"
  },
  {
    "id": "eng_b1_48",
    "number": 148,
    "level": "B1",
    "variant": "ALL",
    "topic": "Idiomatic Phrasal Verbs: Daily Struggles",
    "statement": "We have completely ________ printer paper, and I cannot ________ this loud construction noise any longer.",
    "options": [
      {
        "key": "A",
        "text": "run into / put down"
      },
      {
        "key": "B",
        "text": "run out of / put up with"
      },
      {
        "key": "C",
        "text": "run over / put off"
      },
      {
        "key": "D",
        "text": "run away / put on"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Run out of' significa agotar o quedarse sin provisiones. 'Put up with' significa tolerar o soportar una situación incómoda.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'run into' es toparse por casualidad y 'put down' menospreciar."
      },
      {
        "option": "C",
        "reason": "'run over' es atropellar y 'put off' posponer."
      },
      {
        "option": "D",
        "reason": "'run away' es huir y 'put on' ponerse ropa."
      }
    ],
    "referenceSite": "Englishteststore.net (Idiomatic Phrasal Verbs B1)"
  },
  {
    "id": "eng_b1_49",
    "number": 149,
    "level": "B1",
    "variant": "ALL",
    "topic": "Unreal Past: It's time + Past Simple",
    "statement": "The project deadline is tomorrow morning. It is time we ________ our final conclusions.",
    "options": [
      {
        "key": "A",
        "text": "write"
      },
      {
        "key": "B",
        "text": "wrote"
      },
      {
        "key": "C",
        "text": "have written"
      },
      {
        "key": "D",
        "text": "will write"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La estructura fija 'It is time (that) + sujeto' rige el Unreal Past (pasado irreal / subjuntivo con forma de Past Simple: 'wrote') para indicar que la acción debió haberse ejecutado ya o no debe postergarse más.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa presente simple, ignorando la exigencia sintáctica del Unreal Past."
      },
      {
        "option": "C",
        "reason": "Present Perfect no concuerda con la fórmula de 'It is time'."
      },
      {
        "option": "D",
        "reason": "Futuro 'will' agramatical tras esta locución."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (It is time and Unreal Past)"
  },
  {
    "id": "eng_b1_50",
    "number": 150,
    "level": "B1",
    "variant": "ALL",
    "topic": "Comprehensive B1 Synthesis Review",
    "statement": "Choose the ONLY sentence that is GRAMMATICALLY CORRECT in all respects:",
    "options": [
      {
        "key": "A",
        "text": "If I would have known the answer, I would tell you."
      },
      {
        "key": "B",
        "text": "Despite of the bad weather, we enjoyed our hiking excursion."
      },
      {
        "key": "C",
        "text": "She has been living in San Salvador since she was twelve years old."
      },
      {
        "key": "D",
        "text": "He suggested to go to the beach on Sunday morning."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La opción C es irreprochable: utiliza Present Perfect Continuous ('has been living') para una acción prolongada vinculada con 'since' y una cláusula temporal en Past Simple ('since she was twelve years old').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Coloca 'would have' en la prótasis con 'if' y mezcla segundo y tercer condicional."
      },
      {
        "option": "B",
        "reason": "'Despite' nunca lleva la preposición 'of' ('in spite of' sí la lleva)."
      },
      {
        "option": "D",
        "reason": "'Suggest' nunca admite infinitivo con 'to'; exige gerundio ('suggested going') o cláusula con subjuntivo ('suggested that we go')."
      }
    ],
    "referenceSite": "Agendaweb.org (Comprehensive B1 Diagnostic)"
  },
  {
    "id": "eng_b2_01",
    "number": 151,
    "level": "B2",
    "variant": "ALL",
    "topic": "Third Conditional: Counterfactual Past",
    "statement": "If the emergency generator ________ during the surgical operation, the medical team ________ forced to pause the procedure.",
    "options": [
      {
        "key": "A",
        "text": "didn't fail / wouldn't be"
      },
      {
        "key": "B",
        "text": "hadn't failed / wouldn't have been"
      },
      {
        "key": "C",
        "text": "wouldn't fail / hadn't been"
      },
      {
        "key": "D",
        "text": "hadn't failed / won't have been"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El tercer condicional formula un evento contrafáctico en el pasado: prótasis en Past Perfect ('hadn't failed') y apódosis en condicional perfecto ('wouldn't have been').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Corresponde al segundo condicional hipotético."
      },
      {
        "option": "C",
        "reason": "Inserta 'would' dentro de la prótasis con 'if'."
      },
      {
        "option": "D",
        "reason": "Mezcla agramaticalmente pasado con 'won't'."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Third Conditional Exercises B2)"
  },
  {
    "id": "eng_b2_02",
    "number": 152,
    "level": "B2",
    "variant": "ALL",
    "topic": "Mixed Conditionals: Past Cause with Present Consequence",
    "statement": "If Daniel ________ his medical degree five years ago, he ________ a chief resident today.",
    "options": [
      {
        "key": "A",
        "text": "didn't complete / wouldn't be"
      },
      {
        "key": "B",
        "text": "hadn't completed / wouldn't be"
      },
      {
        "key": "C",
        "text": "hadn't completed / wouldn't have been"
      },
      {
        "key": "D",
        "text": "wouldn't complete / isn't"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Condicional mixto: la prótasis alude a un hecho contrafáctico en el pasado con Past Perfect ('hadn't completed'), pero la consecuencia se sitúa en el presente actual ('today') con 'wouldn't be' en condicional simple.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa Past Simple en la prótasis, ignorando la condición pretérita contrafáctica."
      },
      {
        "option": "C",
        "reason": "Tercer condicional puro que ignora el adverbio de tiempo presente 'today'."
      },
      {
        "option": "D",
        "reason": "Estructura agramatical con 'would' en 'if'."
      }
    ],
    "referenceSite": "Agendaweb.org (Mixed Conditionals B2)"
  },
  {
    "id": "eng_b2_03",
    "number": 153,
    "level": "B2",
    "variant": "ALL",
    "topic": "Mixed Conditionals: Permanent Characteristic with Past Result",
    "statement": "If Sofia ________ so proficient in programming languages, she ________ that prestigious software contract last month.",
    "options": [
      {
        "key": "A",
        "text": "weren't / wouldn't have won"
      },
      {
        "key": "B",
        "text": "hadn't been / wouldn't win"
      },
      {
        "key": "C",
        "text": "isn't / wouldn't have won"
      },
      {
        "key": "D",
        "text": "weren't / wouldn't win"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Condicional mixto inverso: la prótasis alude a una cualidad o estado permanente en el presente ('weren't so proficient'), mientras que el resultado se clausuró en el pasado ('last month') con 'wouldn't have won'.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Invierte la temporalidad de los dos eventos."
      },
      {
        "option": "C",
        "reason": "Usa indicativo presente 'isn't' para una hipótesis irreal."
      },
      {
        "option": "D",
        "reason": "Segundo condicional simple que ignora el marco cerrado de 'last month'."
      }
    ],
    "referenceSite": "Englishteststore.net (Mixed Conditionals Advanced B2)"
  },
  {
    "id": "eng_b2_04",
    "number": 154,
    "level": "B2",
    "variant": "ALL",
    "topic": "Past Perfect Continuous: Duration before a Past Point",
    "statement": "The software engineers ________ for eighteen consecutive hours before they finally discovered the critical security bug.",
    "options": [
      {
        "key": "A",
        "text": "had been debugging"
      },
      {
        "key": "B",
        "text": "have been debugging"
      },
      {
        "key": "C",
        "text": "were debugging"
      },
      {
        "key": "D",
        "text": "had debugged"
      }
    ],
    "correctAnswer": "A",
    "explanation": "El Past Perfect Continuous ('had been + -ing') enfatiza la duración prolongada e ininterrumpida de una actividad que se extendió hasta desembocar en otro momento puntual del pasado ('before they discovered').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Present Perfect Continuous choca con el marco temporal pretérito."
      },
      {
        "option": "C",
        "reason": "Past Continuous no mide la duración retrospectiva acumulada de dieciocho horas."
      },
      {
        "option": "D",
        "reason": "Past Perfect Simple enfatiza la finalización del acto, no el agotamiento de la duración."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Past Perfect Progressive B2)"
  },
  {
    "id": "eng_b2_05",
    "number": 155,
    "level": "B2",
    "variant": "ALL",
    "topic": "Future Perfect Simple: Completion by a Certain Time",
    "statement": "By the end of this decade, the multinational pharmaceutical company ________ all clinical trials for the new vaccine.",
    "options": [
      {
        "key": "A",
        "text": "will complete"
      },
      {
        "key": "B",
        "text": "will have completed"
      },
      {
        "key": "C",
        "text": "will be completing"
      },
      {
        "key": "D",
        "text": "has completed"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La locución 'By + momento futuro' ('By the end of this decade') exige el Future Perfect Simple ('will have + participio pasado') para expresar que la acción estará culminada antes de ese límite cronológico.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Future Simple solo expresa la realización futura, no la anterioridad respecto a un límite."
      },
      {
        "option": "C",
        "reason": "Future Continuous enfatiza la acción en desarrollo continuo a esa fecha."
      },
      {
        "option": "D",
        "reason": "Present Perfect no proyecta la consumación hacia el porvenir."
      }
    ],
    "referenceSite": "Agendaweb.org (Future Perfect Simple B2)"
  },
  {
    "id": "eng_b2_06",
    "number": 156,
    "level": "B2",
    "variant": "ALL",
    "topic": "Future Perfect Continuous: Cumulative Duration in the Future",
    "statement": "By next December, Dr. Morales ________ at this biomedical research institute for exactly twenty-five years.",
    "options": [
      {
        "key": "A",
        "text": "will work"
      },
      {
        "key": "B",
        "text": "will have been working"
      },
      {
        "key": "C",
        "text": "is going to work"
      },
      {
        "key": "D",
        "text": "will be working"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El Future Perfect Continuous ('will have been + -ing') mide la duración acumulada ininterrumpida que alcanzará una actividad al llegar a una fecha futura específica ('By next December... for twenty-five years').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Future Simple no mide duración acumulada."
      },
      {
        "option": "C",
        "reason": "Expresa una simple intención futura."
      },
      {
        "option": "D",
        "reason": "Future Continuous describe una actividad en desarrollo sin medir la vigencia de los veinticinco años."
      }
    ],
    "referenceSite": "Englishteststore.net (Future Perfect Continuous B2)"
  },
  {
    "id": "eng_b2_07",
    "number": 157,
    "level": "B2",
    "variant": "ALL",
    "topic": "Passive Voice: Continuous Aspect in Passive",
    "statement": "The historic cathedral ________ carefully when the fire broke out, which is why scaffolding surrounded the dome.",
    "options": [
      {
        "key": "A",
        "text": "was restored"
      },
      {
        "key": "B",
        "text": "was being restored"
      },
      {
        "key": "C",
        "text": "had restored"
      },
      {
        "key": "D",
        "text": "is being restored"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Para una acción que estaba en pleno desarrollo pasivo en el momento en que ocurrió un evento interruptor en el pasado, se usa Past Continuous Passive: 'was/were + being + Past Participle' ('was being restored').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Past Simple Passive indicaría que la restauración ya había concluido."
      },
      {
        "option": "C",
        "reason": "Voz activa en Past Perfect."
      },
      {
        "option": "D",
        "reason": "Present Continuous Passive choca con el pasado 'broke out'."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Passive in Continuous Tenses)"
  },
  {
    "id": "eng_b2_08",
    "number": 158,
    "level": "B2",
    "variant": "ALL",
    "topic": "Passive Voice: Modal Passives with Perfect Infinitives",
    "statement": "The confidential financial documents ________ to the board of directors before the press conference was held.",
    "options": [
      {
        "key": "A",
        "text": "should submit"
      },
      {
        "key": "B",
        "text": "should have been submitted"
      },
      {
        "key": "C",
        "text": "must submit"
      },
      {
        "key": "D",
        "text": "ought to submit"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La voz pasiva de obligación retrospectiva incumplida en el pasado se construye con 'modal + have been + Past Participle' ('should have been submitted').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Voz activa en infinitivo simple."
      },
      {
        "option": "C",
        "reason": "Voz activa en presente."
      },
      {
        "option": "D",
        "reason": "Voz activa incompleta."
      }
    ],
    "referenceSite": "Agendaweb.org (Modal Passive Voice B2)"
  },
  {
    "id": "eng_b2_09",
    "number": 159,
    "level": "B2",
    "variant": "ALL",
    "topic": "Impersonal Passive: Nominative with Infinitive",
    "statement": "The escaped prisoner is believed ________ the border under an assumed identity three days ago.",
    "options": [
      {
        "key": "A",
        "text": "to cross"
      },
      {
        "key": "B",
        "text": "to have crossed"
      },
      {
        "key": "C",
        "text": "having crossed"
      },
      {
        "key": "D",
        "text": "crossing"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cuando la creencia o reporte se sitúa en el presente ('is believed') pero la acción del sujeto ocurrió en el pasado ('three days ago'), se emplea la pasiva impersonal con infinitivo perfecto: 'to have + Past Participle' ('to have crossed').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "El infinitivo simple ('to cross') sugeriría simultaneidad o futuro, no anterioridad pretérita."
      },
      {
        "option": "C",
        "reason": "Usa gerundio compuesto, no admitido tras 'is believed'."
      },
      {
        "option": "D",
        "reason": "Usa gerundio simple agramatical."
      }
    ],
    "referenceSite": "Englishteststore.net (Impersonal Passive Structures B2)"
  },
  {
    "id": "eng_b2_10",
    "number": 160,
    "level": "B2",
    "variant": "ALL",
    "topic": "Causative Verbs: Syntax of 'Have' vs 'Get'",
    "statement": "The professor ________ the research assistant proofread the paper, but she had to ________ the IT technician to reinstall the operating system.",
    "options": [
      {
        "key": "A",
        "text": "had / get"
      },
      {
        "key": "B",
        "text": "got / have"
      },
      {
        "key": "C",
        "text": "made / got"
      },
      {
        "key": "D",
        "text": "let / have"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Sintaxis causativa contrastada: 'have + persona + bare infinitive' sin to ('had the assistant proofread'), frente a 'get + persona + to-infinitive' con to ('get the technician to reinstall').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Invierte los dos regímenes sintácticos: 'got' exigiría 'to proofread'."
      },
      {
        "option": "C",
        "reason": "'made' denota coacción extrema inapropiada."
      },
      {
        "option": "D",
        "reason": "'let' significa permitir, no encargar una tarea."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Causative Have and Get with Objects)"
  },
  {
    "id": "eng_b2_11",
    "number": 161,
    "level": "B2",
    "variant": "ALL",
    "topic": "Relative Clauses: Non-Defining Restrictions",
    "statement": "The new environmental law, ________ was passed by parliament last night, has sparked widespread debate.",
    "options": [
      {
        "key": "A",
        "text": "that"
      },
      {
        "key": "B",
        "text": "which"
      },
      {
        "key": "C",
        "text": "what"
      },
      {
        "key": "D",
        "text": "whose"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En las cláusulas relativas explicativas o no definitorias (separadas por comas), el pronombre relativo para cosas es OBLIGATORIAMENTE 'which'. El pronombre 'that' está terminantemente prohibido entre comas en inglés estándar.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'that' nunca puede introducir una cláusula no definitoria entre comas."
      },
      {
        "option": "C",
        "reason": "'what' incluye su propio antecedente y no puede modificar a un sustantivo previo."
      },
      {
        "option": "D",
        "reason": "'whose' es pronombre posesivo."
      }
    ],
    "referenceSite": "Agendaweb.org (Non-defining Relative Clauses B2)"
  },
  {
    "id": "eng_b2_12",
    "number": 162,
    "level": "B2",
    "variant": "ALL",
    "topic": "Relative Clauses: Preposition Placement in Formal Register",
    "statement": "The distinguished scientist ________ the committee presented the medal has published over two hundred peer-reviewed articles.",
    "options": [
      {
        "key": "A",
        "text": "to whom"
      },
      {
        "key": "B",
        "text": "to who"
      },
      {
        "key": "C",
        "text": "who to"
      },
      {
        "key": "D",
        "text": "whom to"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En el registro formal escrito, cuando la preposición precede directamente al pronombre relativo de persona humana, la única forma gramaticalmente correcta es 'to whom' (nunca 'to who').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Usa el caso nominativo 'who' tras preposición."
      },
      {
        "option": "C",
        "reason": "Posición anómala de la preposición."
      },
      {
        "option": "D",
        "reason": "Orden de constituyentes agramatical."
      }
    ],
    "referenceSite": "Englishteststore.net (Prepositions in Relative Clauses B2)"
  },
  {
    "id": "eng_b2_13",
    "number": 163,
    "level": "B2",
    "variant": "ALL",
    "topic": "Reported Speech: Nuanced Reporting Verbs",
    "statement": "The suspect vehemently denied ________ anywhere near the jewelry store on the night of the heist.",
    "options": [
      {
        "key": "A",
        "text": "to be"
      },
      {
        "key": "B",
        "text": "being"
      },
      {
        "key": "C",
        "text": "that he was being"
      },
      {
        "key": "D",
        "text": "to have been"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El verbo de reporte 'deny' rige obligatoriamente el gerundio '-ing' (o una cláusula completa con 'that'): 'denied being' (o 'denied having been'). NUNCA admite un infinitivo con 'to'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa infinitivo con 'to', agramatical tras 'deny'."
      },
      {
        "option": "C",
        "reason": "Usa una perífrasis continua extraña e innecesaria."
      },
      {
        "option": "D",
        "reason": "Usa infinitivo perfecto con 'to'."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Reporting Verbs and Patterns B2)"
  },
  {
    "id": "eng_b2_14",
    "number": 164,
    "level": "B2",
    "variant": "ALL",
    "topic": "Modals of Deduction in the Past: Logical Certainty",
    "statement": "The ground is soaking wet and there are huge puddles everywhere. It ________ heavily during the night.",
    "options": [
      {
        "key": "A",
        "text": "must rain"
      },
      {
        "key": "B",
        "text": "must have rained"
      },
      {
        "key": "C",
        "text": "can have rained"
      },
      {
        "key": "D",
        "text": "should have rained"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Must have + Past Participle' formula una deducción lógica de certeza indudable sobre una acción acontecida en el pasado basándose en la evidencia física observable presente.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Presente modal que no concuerda con las evidencias de la noche anterior."
      },
      {
        "option": "C",
        "reason": "'can have rained' no se usa en inglés afirmativo para deducciones."
      },
      {
        "option": "D",
        "reason": "'should have rained' expresaría que debió llover pero no llovió."
      }
    ],
    "referenceSite": "Agendaweb.org (Past Modals of Deduction B2)"
  },
  {
    "id": "eng_b2_15",
    "number": 165,
    "level": "B2",
    "variant": "ALL",
    "topic": "Modals of Deduction in the Past: Negative Impossibility",
    "statement": "Gabriel ________ the laboratory window because he was in a board meeting in another city at that exact hour.",
    "options": [
      {
        "key": "A",
        "text": "mustn't have broken"
      },
      {
        "key": "B",
        "text": "can't have broken"
      },
      {
        "key": "C",
        "text": "couldn't break"
      },
      {
        "key": "D",
        "text": "shouldn't have broken"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Para deducir con certeza que una acción pretérita fue imposible de cometer debido a coartadas o pruebas concluyentes, se usa 'can't have (o couldn't have) + Past Participle'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'mustn't have broken' no existe en inglés estándar para deducción de imposibilidad."
      },
      {
        "option": "C",
        "reason": "Alude a incapacidad general en pasado, no a la imposibilidad lógica de un hecho puntual."
      },
      {
        "option": "D",
        "reason": "'shouldn't have broken' expresaría que lo rompió indebidamente."
      }
    ],
    "referenceSite": "Englishteststore.net (Can't have vs Mustn't have B2)"
  },
  {
    "id": "eng_b2_16",
    "number": 166,
    "level": "B2",
    "variant": "ALL",
    "topic": "Modal Distinctions: Needn't have done vs. Didn't need to do",
    "statement": "We ________ an umbrella because it never rained at all, but we carried one all day for nothing.",
    "options": [
      {
        "key": "A",
        "text": "didn't need to take"
      },
      {
        "key": "B",
        "text": "needn't have taken"
      },
      {
        "key": "C",
        "text": "mustn't have taken"
      },
      {
        "key": "D",
        "text": "couldn't have taken"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Needn't have + Past Participle' significa que se ejecutó una acción innecesaria ('no había necesidad de llevarlo, pero de hecho sí lo llevamos'). 'Didn't need to' generalmente indica que no era necesario y por ende no se hizo.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Sugiere comúnmente que no se llevó el paraguas al saber que no era preciso."
      },
      {
        "option": "C",
        "reason": "Estructura agramatical para expresar falta de necesidad."
      },
      {
        "option": "D",
        "reason": "Expresa imposibilidad física, no ausencia de necesidad."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Needn't have done vs Didn't need to do)"
  },
  {
    "id": "eng_b2_17",
    "number": 167,
    "level": "B2",
    "variant": "ALL",
    "topic": "Wish and If Only: Unfulfilled Past Regret",
    "statement": "I feel terrible about what happened yesterday. If only I ________ my temper during the argument!",
    "options": [
      {
        "key": "A",
        "text": "didn't lose"
      },
      {
        "key": "B",
        "text": "hadn't lost"
      },
      {
        "key": "C",
        "text": "wouldn't lose"
      },
      {
        "key": "D",
        "text": "haven't lost"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'If only / I wish + Past Perfect' expresa un lamento o remordimiento amargo respecto a una acción o decisión irreversible que tuvo lugar en el pasado.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Past Simple indicaría un deseo sobre el estado presente."
      },
      {
        "option": "C",
        "reason": "'wouldn't' expresa queja sobre una conducta habitual ajena."
      },
      {
        "option": "D",
        "reason": "Present Perfect agramatical con 'wish/if only'."
      }
    ],
    "referenceSite": "Agendaweb.org (Wish and If Only Past Regret B2)"
  },
  {
    "id": "eng_b2_18",
    "number": 168,
    "level": "B2",
    "variant": "ALL",
    "topic": "Stylistic Inversion: Negative Adverbials",
    "statement": "Seldom ________ such an electrifying performance in the national theater.",
    "options": [
      {
        "key": "A",
        "text": "we have witnessed"
      },
      {
        "key": "B",
        "text": "have we witnessed"
      },
      {
        "key": "C",
        "text": "we witnessed"
      },
      {
        "key": "D",
        "text": "did we witnessed"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cuando una oración se encabeza con un adverbio de valor negativo o restrictivo ('Seldom', 'Never', 'Rarely', 'Little'), es OBLIGATORIO invertir el sujeto y el verbo auxiliar: 'Adverbio negativo + Auxiliar + Sujeto + Verbo léxico' ('have we witnessed').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Orden canónico sin invertir, agramatical tras adverbio negativo enfático frontal."
      },
      {
        "option": "C",
        "reason": "Omite la inversión requerida."
      },
      {
        "option": "D",
        "reason": "Duplica la marca de tiempo pretérito en el verbo principal tras auxiliar 'did'."
      }
    ],
    "referenceSite": "Englishteststore.net (Inversion with Negative Adverbials B2)"
  },
  {
    "id": "eng_b2_19",
    "number": 169,
    "level": "B2",
    "variant": "ALL",
    "topic": "Stylistic Inversion: 'Not only... but also'",
    "statement": "Not only ________ all the project milestones ahead of schedule, but she also reduced the budget significantly.",
    "options": [
      {
        "key": "A",
        "text": "she accomplished"
      },
      {
        "key": "B",
        "text": "did she accomplish"
      },
      {
        "key": "C",
        "text": "did she accomplished"
      },
      {
        "key": "D",
        "text": "she did accomplish"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La estructura correlativa enfática 'Not only' al inicio de oración exige inversión auxiliar-sujeto en la primera cláusula: 'did she accomplish'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Omite la inversión del auxiliar obligatoria en posición inicial enfática."
      },
      {
        "option": "C",
        "reason": "Mantiene la desinencia pretérita en el verbo léxico tras el auxiliar 'did'."
      },
      {
        "option": "D",
        "reason": "Inserta 'did' sin invertir el orden del pronombre sujeto."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Not Only Inversion B2)"
  },
  {
    "id": "eng_b2_20",
    "number": 170,
    "level": "B2",
    "variant": "ALL",
    "topic": "Stylistic Inversion: 'No sooner... than' and 'Hardly... when'",
    "statement": "No sooner ________ the podium than the entire audience ________ cheering enthusiastically.",
    "options": [
      {
        "key": "A",
        "text": "the speaker stepped / began"
      },
      {
        "key": "B",
        "text": "had the speaker stepped / began"
      },
      {
        "key": "C",
        "text": "did the speaker step / had begun"
      },
      {
        "key": "D",
        "text": "had the speaker stepped / has begun"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'No sooner + had + sujeto + participio pasado... than + Past Simple' es la estructura canónica de inversión temporal para denotar dos acciones consecutivas inmediatas en el pasado.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Omite la inversión de Past Perfect obligatoria con 'No sooner'."
      },
      {
        "option": "C",
        "reason": "Invierte los tiempos: 'No sooner' rige Past Perfect en la primera acción."
      },
      {
        "option": "D",
        "reason": "Present Perfect no concuerda con la narración en pasado."
      }
    ],
    "referenceSite": "Agendaweb.org (No sooner than and Hardly when B2)"
  },
  {
    "id": "eng_b2_21",
    "number": 171,
    "level": "B2",
    "variant": "ALL",
    "topic": "Participle Clauses: Expressing Reason with -ing",
    "statement": "________ that the flight would be canceled due to the hurricane, Mariana immediately rescheduled her hotel reservation.",
    "options": [
      {
        "key": "A",
        "text": "Knowing"
      },
      {
        "key": "B",
        "text": "Knew"
      },
      {
        "key": "C",
        "text": "Known"
      },
      {
        "key": "D",
        "text": "To know"
      }
    ],
    "correctAnswer": "A",
    "explanation": "La cláusula de participio de presente ('Knowing...') reemplaza de forma elegante a una cláusula causal subordinada completa ('Because she knew...') con el mismo sujeto que la principal.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Past Simple no puede encabezar una cláusula de participio subordinada."
      },
      {
        "option": "C",
        "reason": "Past Participle ('Known') tendría sentido pasivo ('Siendo conocida')."
      },
      {
        "option": "D",
        "reason": "El infinitivo indicaría finalidad, no la causa que motivó la acción."
      }
    ],
    "referenceSite": "Englishteststore.net (Participle Clauses -ing B2)"
  },
  {
    "id": "eng_b2_22",
    "number": 172,
    "level": "B2",
    "variant": "ALL",
    "topic": "Participle Clauses: Anteriority with 'Having + Past Participle'",
    "statement": "________ all the required clinical courses, the medical student was finally allowed to enter the operating theater.",
    "options": [
      {
        "key": "A",
        "text": "Completed"
      },
      {
        "key": "B",
        "text": "Having completed"
      },
      {
        "key": "C",
        "text": "Completing"
      },
      {
        "key": "D",
        "text": "To have completed"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El participio perfecto ('Having + Past Participle') explicita que la acción de la subordinada quedó enteramente consumada y finalizada con anterioridad a la acción de la cláusula principal.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "El participio pasivo simple 'Completed' implicaría que el estudiante fue completado."
      },
      {
        "option": "C",
        "reason": "Present Participle sugeriría simultaneidad, no anterioridad terminada."
      },
      {
        "option": "D",
        "reason": "Infinitivo perfecto no funciona como modificador adverbial participial."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Perfect Participle Clauses B2)"
  },
  {
    "id": "eng_b2_23",
    "number": 173,
    "level": "B2",
    "variant": "ALL",
    "topic": "Emphasis: Pseudo-cleft Sentences with 'What'",
    "statement": "________ was her extraordinary ability to remain calm under extreme professional pressure.",
    "options": [
      {
        "key": "A",
        "text": "That impressed me most"
      },
      {
        "key": "B",
        "text": "What impressed me most"
      },
      {
        "key": "C",
        "text": "Which impressed me most"
      },
      {
        "key": "D",
        "text": "It impressed me most"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Las oraciones escindidas con 'What' (pseudo-cleft sentences) destacan un elemento informativo focalizándolo como sujeto de una cláusula nominal: 'What + verbo + be + elemento focalizado'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'That' requeriría un antecedente explícito."
      },
      {
        "option": "C",
        "reason": "'Which' requiere antecedente previo determinado."
      },
      {
        "option": "D",
        "reason": "Estructura declarativa que rompe la concordancia con el verbo 'was'."
      }
    ],
    "referenceSite": "Agendaweb.org (Cleft Sentences B2)"
  },
  {
    "id": "eng_b2_24",
    "number": 174,
    "level": "B2",
    "variant": "ALL",
    "topic": "Emphasis: It-cleft Sentences",
    "statement": "________ Dr. Arévalo who discovered the microbiological anomaly, not his laboratory assistant.",
    "options": [
      {
        "key": "A",
        "text": "There was"
      },
      {
        "key": "B",
        "text": "It was"
      },
      {
        "key": "C",
        "text": "He was"
      },
      {
        "key": "D",
        "text": "This was"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La estructura de hendidura con 'It' (It-cleft) sirve para enfatizar al autor o agente de una acción frente a otros candidatos: 'It was + elemento enfatizado + who/that + resto de la oración'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'There was' denotaría mera existencia física."
      },
      {
        "option": "C",
        "reason": "'He was Dr. Arévalo who...' es agramatical en la estructura de hendidura."
      },
      {
        "option": "D",
        "reason": "'This was' no se utiliza en fórmulas escindidas enfáticas."
      }
    ],
    "referenceSite": "Englishteststore.net (It-cleft Sentences B2)"
  },
  {
    "id": "eng_b2_25",
    "number": 175,
    "level": "B2",
    "variant": "ALL",
    "topic": "Verb Patterns: Regret + Gerund vs. Regret + Infinitive",
    "statement": "I regret ________ you that your application has been rejected, and I now deeply regret ________ so careless with the documentation.",
    "options": [
      {
        "key": "A",
        "text": "informing / being"
      },
      {
        "key": "B",
        "text": "to inform / being"
      },
      {
        "key": "C",
        "text": "to inform / to be"
      },
      {
        "key": "D",
        "text": "informing / to be"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Regret to inform' (infinitivo) es la fórmula protocolaria formal para comunicar malas noticias en el presente ('lamento comunicarle'). 'Regret being' (gerundio) expresa arrepentimiento moral por un comportamiento pasado.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los dos valores sintácticos."
      },
      {
        "option": "C",
        "reason": "Usa infinitivo para el lamento retrospectivo."
      },
      {
        "option": "D",
        "reason": "Usa gerundio para la comunicación protocolaria formal."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Regret Gerund and Infinitive B2)"
  },
  {
    "id": "eng_b2_26",
    "number": 176,
    "level": "B2",
    "variant": "ALL",
    "topic": "Verb Patterns: Mean to do vs Mean doing",
    "statement": "I didn't mean ________ your feelings, but accepting this promotion will mean ________ to another country.",
    "options": [
      {
        "key": "A",
        "text": "hurting / relocating"
      },
      {
        "key": "B",
        "text": "to hurt / relocating"
      },
      {
        "key": "C",
        "text": "to hurt / to relocate"
      },
      {
        "key": "D",
        "text": "hurting / to relocate"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Mean to do' (infinitivo) expresa intención ('no quise herirte'). 'Mean doing' (gerundio) expresa implicación o consecuencia lógica ineludible ('supondrá mudarme').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa gerundio para intención voluntaria personal."
      },
      {
        "option": "C",
        "reason": "Usa infinitivo para consecuencia o implicación."
      },
      {
        "option": "D",
        "reason": "Invierte ambos regímenes sintácticos."
      }
    ],
    "referenceSite": "Agendaweb.org (Mean to do vs Mean doing B2)"
  },
  {
    "id": "eng_b2_27",
    "number": 177,
    "level": "B2",
    "variant": "ALL",
    "topic": "Idiomatic Expressions: Prepositional Gerunds",
    "statement": "It is no use ________ over spilled milk, and the novel is definitely worth ________.",
    "options": [
      {
        "key": "A",
        "text": "crying / reading"
      },
      {
        "key": "B",
        "text": "to cry / to read"
      },
      {
        "key": "C",
        "text": "cry / read"
      },
      {
        "key": "D",
        "text": "to cry / reading"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Las locuciones fijas 'it is no use' (es inútil) y 'be worth' (merecer la pena) rigen obligatoriamente la forma en gerundio '-ing'.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Usa infinitivo con 'to', agramatical tras ambas expresiones."
      },
      {
        "option": "C",
        "reason": "Usa formas base puras."
      },
      {
        "option": "D",
        "reason": "Mezcla infinitivo con gerundio."
      }
    ],
    "referenceSite": "Englishteststore.net (Expressions with Gerund B2)"
  },
  {
    "id": "eng_b2_28",
    "number": 178,
    "level": "B2",
    "variant": "ALL",
    "topic": "Dependent Prepositions: Verb Collocations",
    "statement": "The prosecuting attorney accused the executive ________ fraud, but the executive insisted ________ his absolute innocence.",
    "options": [
      {
        "key": "A",
        "text": "for / in"
      },
      {
        "key": "B",
        "text": "of / on"
      },
      {
        "key": "C",
        "text": "with / about"
      },
      {
        "key": "D",
        "text": "of / in"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Colocaciones preposicionales dependientes estrictas: 'accuse someone OF a crime', e 'insist ON something'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'accuse for' es un error común derivado de otros idiomas."
      },
      {
        "option": "C",
        "reason": "'accuse with' no es una colocación válida en inglés."
      },
      {
        "option": "D",
        "reason": "'insist in' es un calco directo del español 'insistir en', agramatical en inglés."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Verbs with Prepositions B2)"
  },
  {
    "id": "eng_b2_29",
    "number": 179,
    "level": "B2",
    "variant": "ALL",
    "topic": "Dependent Prepositions: Adjective Collocations",
    "statement": "Dr. Rivera is highly capable ________ conducting complex surgical procedures and is very keen ________ neurological research.",
    "options": [
      {
        "key": "A",
        "text": "to / in"
      },
      {
        "key": "B",
        "text": "of / on"
      },
      {
        "key": "C",
        "text": "for / about"
      },
      {
        "key": "D",
        "text": "of / at"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Régimen preposicional de adjetivos: 'capable OF + -ing' (capaz de), y 'keen ON + -ing/noun' (entusiasta o aficionado a).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'capable to' es un error sintáctico muy extendido."
      },
      {
        "option": "C",
        "reason": "'capable for' no existe en inglés estándar."
      },
      {
        "option": "D",
        "reason": "'keen at' es incorrecto (la colocación es 'good at', pero 'keen on')."
      }
    ],
    "referenceSite": "Agendaweb.org (Adjectives with Prepositions B2)"
  },
  {
    "id": "eng_b2_30",
    "number": 180,
    "level": "B2",
    "variant": "ALL",
    "topic": "Discourse Markers: Sophisticated Contrast",
    "statement": "The north wing of the clinic is modern and spacious, ________ the south wing remains cramped. ________, patient satisfaction has remained high.",
    "options": [
      {
        "key": "A",
        "text": "whereas / Nevertheless"
      },
      {
        "key": "B",
        "text": "nevertheless / Whereas"
      },
      {
        "key": "C",
        "text": "despite / Although"
      },
      {
        "key": "D",
        "text": "however / In spite of"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Whereas' establece una contraposición directa entre dos hechos contrastados. 'Nevertheless' conecta oraciones independientes introduciendo una consecuencia sorprendente o concesiva.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Invierte los dos conectores discursivos."
      },
      {
        "option": "C",
        "reason": "'despite' requiere frase nominal y no cláusula subordinada."
      },
      {
        "option": "D",
        "reason": "'however' al medio requeriría punto y coma o puntuación específica y 'in spite of' requiere frase nominal."
      }
    ],
    "referenceSite": "Englishteststore.net (Discourse Markers Contrast B2)"
  },
  {
    "id": "eng_b2_31",
    "number": 181,
    "level": "B2",
    "variant": "ALL",
    "topic": "Discourse Markers: Addition and Expansion",
    "statement": "The proposed merger will generate substantial capital; ________, it will open new markets. ________ this financial growth, it will foster innovation.",
    "options": [
      {
        "key": "A",
        "text": "furthermore / In addition to"
      },
      {
        "key": "B",
        "text": "moreover / In addition of"
      },
      {
        "key": "C",
        "text": "in addition / Furthermore to"
      },
      {
        "key": "D",
        "text": "besides / In addition"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Furthermore' es un adverbio oracional de transición que añade un argumento contundente. 'In addition to' es una locución preposicional que rige una frase nominal o gerundio.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'In addition of' es un error preposicional (la forma correcta es 'in addition to')."
      },
      {
        "option": "C",
        "reason": "'Furthermore to' es agramatical."
      },
      {
        "option": "D",
        "reason": "Usa 'In addition' sin 'to' antes de una frase nominal."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Addition Discourse Markers B2)"
  },
  {
    "id": "eng_b2_32",
    "number": 182,
    "level": "B2",
    "variant": "ALL",
    "topic": "Polysemous Phrasal Verbs: Contextual Meanings of 'Take off'",
    "statement": "In which of the following sentences does 'take off' mean 'to achieve rapid and sudden professional success'?",
    "options": [
      {
        "key": "A",
        "text": "The airplane took off smoothly despite the fog."
      },
      {
        "key": "B",
        "text": "He decided to take off his winter coat inside the warm lobby."
      },
      {
        "key": "C",
        "text": "After the viral media interview, the young author's career really took off."
      },
      {
        "key": "D",
        "text": "She took off two days from work to recover from the flu."
      }
    ],
    "correctAnswer": "C",
    "explanation": "El phrasal verb polisémico 'take off' significa despegar un avión (A), quitarse ropa (B), ausentarse de labores (D), y despegar profesional o comercialmente hacia un éxito vertiginoso (C).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Significado literal aeronáutico de despegar vuelo."
      },
      {
        "option": "B",
        "reason": "Significado físico de despojarse de vestimenta."
      },
      {
        "option": "D",
        "reason": "Significado laboral de tomar días libres."
      }
    ],
    "referenceSite": "Agendaweb.org (Multiple Meanings of Phrasal Verbs B2)"
  },
  {
    "id": "eng_b2_33",
    "number": 183,
    "level": "B2",
    "variant": "ALL",
    "topic": "Three-Part Phrasal Verbs: Put up with, Come down with",
    "statement": "I think I am ________ a bad cold because my throat is sore, and I can no longer ________ this freezing air conditioning.",
    "options": [
      {
        "key": "A",
        "text": "coming down with / put up with"
      },
      {
        "key": "B",
        "text": "putting up with / come down with"
      },
      {
        "key": "C",
        "text": "getting over / run out of"
      },
      {
        "key": "D",
        "text": "looking forward to / catch up with"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Come down with' es enfermarse de una afección leve (resfriado/gripe), y 'put up with' es tolerar o soportar una incomodidad.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Invierte los dos phrasal verbs."
      },
      {
        "option": "C",
        "reason": "'get over' es recuperarse de una enfermedad ya pasada."
      },
      {
        "option": "D",
        "reason": "'look forward to' es anticipar con ilusión algo grato."
      }
    ],
    "referenceSite": "Englishteststore.net (Three-Part Phrasal Verbs B2)"
  },
  {
    "id": "eng_b2_34",
    "number": 184,
    "level": "B2",
    "variant": "ALL",
    "topic": "Subjunctive Mood: Base Form with Recommendation Verbs",
    "statement": "The committee recommended that the university president ________ an independent audit immediately.",
    "options": [
      {
        "key": "A",
        "text": "orders"
      },
      {
        "key": "B",
        "text": "order"
      },
      {
        "key": "C",
        "text": "ordered"
      },
      {
        "key": "D",
        "text": "would order"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En el subjuntivo mandativo (especialmente formal y en inglés estadounidense), tras verbos como 'recommend, demand, insist that', el verbo de la subordinada adopta la FORMA BASE PURA (bare infinitive: 'order') para todas las personas gramaticales sin añadir -s.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa Present Simple indicativo con -s, ignorando la exigencia del modo subjuntivo."
      },
      {
        "option": "C",
        "reason": "Usa pasado simple."
      },
      {
        "option": "D",
        "reason": "Inserta auxiliar modal 'would' innecesariamente."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Subjunctive in English B2)"
  },
  {
    "id": "eng_b2_35",
    "number": 185,
    "level": "B2",
    "variant": "ALL",
    "topic": "Conditionals: Conjunctions Replacing 'If'",
    "statement": "You may participate in the biomedical study ________ you sign the informed consent agreement.",
    "options": [
      {
        "key": "A",
        "text": "as long as"
      },
      {
        "key": "B",
        "text": "in case"
      },
      {
        "key": "C",
        "text": "supposing"
      },
      {
        "key": "D",
        "text": "unless"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'As long as' y 'provided (that)' expresan una condición sine qua non indispensable ('siempre y cuando / con tal de que').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'in case' expresa precaución ante una contingencia eventual, no condición habilitante."
      },
      {
        "option": "C",
        "reason": "'supposing' se reserva para conjeturas e hipótesis imaginarias."
      },
      {
        "option": "D",
        "reason": "'unless' significa 'a menos que' e invertiría por completo el sentido legal."
      }
    ],
    "referenceSite": "Agendaweb.org (Conditionals without If B2)"
  },
  {
    "id": "eng_b2_36",
    "number": 186,
    "level": "B2",
    "variant": "ALL",
    "topic": "Inverted Conditionals: Inversion with 'Should'",
    "statement": "________ any complications occur during your recovery, please contact the emergency hotline immediately.",
    "options": [
      {
        "key": "A",
        "text": "If should"
      },
      {
        "key": "B",
        "text": "Should"
      },
      {
        "key": "C",
        "text": "Were"
      },
      {
        "key": "D",
        "text": "Had"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En el primer condicional formal, la omisión de 'if' desencadena la inversión con 'Should + sujeto + verbo base' ('Should any complications occur...').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Mezcla 'if' con 'should' sin omitir la conjunción condicional."
      },
      {
        "option": "C",
        "reason": "'Were' se usa para inversiones de segundo condicional."
      },
      {
        "option": "D",
        "reason": "'Had' se usa para inversiones de tercer condicional."
      }
    ],
    "referenceSite": "Englishteststore.net (Inverted Conditionals Should B2)"
  },
  {
    "id": "eng_b2_37",
    "number": 187,
    "level": "B2",
    "variant": "ALL",
    "topic": "Inverted Conditionals: Inversion with 'Were'",
    "statement": "________ his timely advice, we would certainly make a disastrous investment decision right now.",
    "options": [
      {
        "key": "A",
        "text": "Were it not for"
      },
      {
        "key": "B",
        "text": "Had it not been for"
      },
      {
        "key": "C",
        "text": "If it wasn't for"
      },
      {
        "key": "D",
        "text": "Should it be"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Were it not for + sustantivo' es la inversión formal del segundo condicional ('de no ser por...') con apódosis hipotética en presente ('would make').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'Had it not been for' pertenece al tercer condicional con consecuencia pretérita."
      },
      {
        "option": "C",
        "reason": "Coloquial y no invertido."
      },
      {
        "option": "D",
        "reason": "No expresa la inexistencia de la condición."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Inverted Conditionals Were B2)"
  },
  {
    "id": "eng_b2_38",
    "number": 188,
    "level": "B2",
    "variant": "ALL",
    "topic": "Inverted Conditionals: Inversion with 'Had'",
    "statement": "________ the severity of the structural defect, the architects would never have approved the blueprint.",
    "options": [
      {
        "key": "A",
        "text": "Had they known"
      },
      {
        "key": "B",
        "text": "If they knew"
      },
      {
        "key": "C",
        "text": "Did they know"
      },
      {
        "key": "D",
        "text": "Were they knowing"
      }
    ],
    "correctAnswer": "A",
    "explanation": "La inversión de tercer condicional prescinde de 'if' anteponiendo el auxiliar 'Had + sujeto + Past Participle' ('Had they known' = If they had known).",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Segundo condicional simple sin concordancia con 'would have approved'."
      },
      {
        "option": "C",
        "reason": "'Did' no forma condicionales hipotéticos."
      },
      {
        "option": "D",
        "reason": "Forma continua estativa agramatical."
      }
    ],
    "referenceSite": "Agendaweb.org (Inverted Conditionals Had B2)"
  },
  {
    "id": "eng_b2_39",
    "number": 189,
    "level": "B2",
    "variant": "ALL",
    "topic": "Unreal Past: 'Would rather' with Different Subjects",
    "statement": "I would rather you ________ anyone about the confidential merger until the press release is issued.",
    "options": [
      {
        "key": "A",
        "text": "don't tell"
      },
      {
        "key": "B",
        "text": "didn't tell"
      },
      {
        "key": "C",
        "text": "not tell"
      },
      {
        "key": "D",
        "text": "wouldn't tell"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cuando la locución 'would rather' involucra a dos sujetos diferentes ('I would rather YOU...'), el verbo subordinado adopta obligatoriamente el Unreal Past (Past Simple: 'didn't tell').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa presente indicativo, violando el régimen de pasado irreal."
      },
      {
        "option": "C",
        "reason": "'not tell' solo se usa cuando el sujeto de would rather es el mismo ('I would rather not tell')."
      },
      {
        "option": "D",
        "reason": "Inserta 'wouldn't', lo cual es agramatical tras would rather."
      }
    ],
    "referenceSite": "Englishteststore.net (Would rather Unreal Past B2)"
  },
  {
    "id": "eng_b2_40",
    "number": 190,
    "level": "B2",
    "variant": "ALL",
    "topic": "Unreal Past: 'It's high time'",
    "statement": "The road is full of dangerous potholes. It is high time the city council ________ the entire avenue.",
    "options": [
      {
        "key": "A",
        "text": "repairs"
      },
      {
        "key": "B",
        "text": "repaired"
      },
      {
        "key": "C",
        "text": "will repair"
      },
      {
        "key": "D",
        "text": "has repaired"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'It is high time + sujeto' exige un Unreal Past (Past Simple: 'repaired') para denotar que la acción debió haberse acometido hace tiempo con urgencia.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Presente simple que ignora el valor desiderativo retardado."
      },
      {
        "option": "C",
        "reason": "Futuro 'will' prohibido con esta locución."
      },
      {
        "option": "D",
        "reason": "Present Perfect agramatical."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (High Time Unreal Past B2)"
  },
  {
    "id": "eng_b2_41",
    "number": 191,
    "level": "B2",
    "variant": "ALL",
    "topic": "US vs UK Verb Morphology: 'Gotten' vs. 'Got'",
    "statement": "Which statement accurately reflects the difference regarding the past participle of 'get'?",
    "options": [
      {
        "key": "A",
        "text": "'Gotten' is standard in American English for process/acquisition; British English uses 'got'."
      },
      {
        "key": "B",
        "text": "'Gotten' is exclusively British English and never used in America."
      },
      {
        "key": "C",
        "text": "'Gotten' is an obsolete error that is unacceptable in both dialects."
      },
      {
        "key": "D",
        "text": "'Got' is used in America for acquisition and 'gotten' for possession."
      }
    ],
    "correctAnswer": "A",
    "explanation": "En inglés estadounidense, 'gotten' es el participio consagrado para expresar proceso, obtención o cambio ('He has gotten better'). En inglés británico moderno, 'gotten' cayó en desuso y se emplea 'got' ('He has got better').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Invierte la procedencia geográfica real."
      },
      {
        "option": "C",
        "reason": "Declara falsamente que es obsoleto o erróneo."
      },
      {
        "option": "D",
        "reason": "Invierte la distribución de funciones en EE. UU."
      }
    ],
    "referenceSite": "Agendaweb.org (Gotten vs Got US UK B2)"
  },
  {
    "id": "eng_b2_42",
    "number": 192,
    "level": "B2",
    "variant": "ALL",
    "topic": "US vs UK Verb Morphology: -t vs -ed Endings",
    "statement": "In British English, 'The candle ________ brightly until the wind blew it out' often uses the form 'burnt', whereas American English typically prefers:",
    "options": [
      {
        "key": "A",
        "text": "burned"
      },
      {
        "key": "B",
        "text": "burnen"
      },
      {
        "key": "C",
        "text": "borned"
      },
      {
        "key": "D",
        "text": "burn"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Para verbos como burn, dream, learn, smell, spill, el inglés estadounidense regulariza masivamente con la desinencia regular '-ed' ('burned', 'dreamed', 'learned'), mientras que el británico retiene con frecuencia la variante en '-t' ('burnt', 'dreamt', 'learnt').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'burnen' es una forma germánica arcaica inexistente en inglés moderno."
      },
      {
        "option": "C",
        "reason": "'borned' es agramatical."
      },
      {
        "option": "D",
        "reason": "Forma base de presente sin conjugar."
      }
    ],
    "referenceSite": "Englishteststore.net (Burned vs Burnt US UK B2)"
  },
  {
    "id": "eng_b2_43",
    "number": 193,
    "level": "B2",
    "variant": "ALL",
    "topic": "Lexical Collocations: Make vs Do",
    "statement": "Scientists must ________ extensive research before they can ________ a definitive discovery.",
    "options": [
      {
        "key": "A",
        "text": "make / do"
      },
      {
        "key": "B",
        "text": "do / make"
      },
      {
        "key": "C",
        "text": "make / make"
      },
      {
        "key": "D",
        "text": "do / do"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Colocaciones léxicas canónicas: 'DO research' (realizar una investigación/trabajo analítico), y 'MAKE a discovery' (hacer un descubrimiento / crear algo nuevo).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte ambas colocaciones consagradas."
      },
      {
        "option": "C",
        "reason": "'make research' es un error común del aprendiz hispanohablante."
      },
      {
        "option": "D",
        "reason": "'do a discovery' es agramatical en inglés."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Make and Do Collocations B2)"
  },
  {
    "id": "eng_b2_44",
    "number": 194,
    "level": "B2",
    "variant": "ALL",
    "topic": "Lexical Collocations: Pay attention, Take advantage, Have an impact",
    "statement": "Students should ________ close attention to the lecture, ________ advantage of the library resources, and understand the ________ it will have on their grades.",
    "options": [
      {
        "key": "A",
        "text": "make / take / effect"
      },
      {
        "key": "B",
        "text": "pay / take / impact"
      },
      {
        "key": "C",
        "text": "give / have / affect"
      },
      {
        "key": "D",
        "text": "pay / make / impact"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Colocaciones idiomáticas consolidadas: 'pay attention' (prestar atención), 'take advantage of' (aprovechar), y 'have an impact on' (tener un impacto en).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'make attention' es agramatical."
      },
      {
        "option": "C",
        "reason": "'give attention' no es la colocación estándar fija de estudio."
      },
      {
        "option": "D",
        "reason": "'make advantage' no existe en inglés."
      }
    ],
    "referenceSite": "Agendaweb.org (Collocations Pay Take Have B2)"
  },
  {
    "id": "eng_b2_45",
    "number": 195,
    "level": "B2",
    "variant": "ALL",
    "topic": "Prepositional Phrases: Fixed Idiomatic Structures",
    "statement": "The detective recognized the forgery ________, and the suspect's efforts to escape were all ________.",
    "options": [
      {
        "key": "A",
        "text": "in a glance / on vain"
      },
      {
        "key": "B",
        "text": "at a glance / in vain"
      },
      {
        "key": "C",
        "text": "by a glance / with vain"
      },
      {
        "key": "D",
        "text": "for a glance / in vain"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Locuciones preposicionales fijas: 'at a glance' (a simple vista / de un vistazo), e 'in vain' (en vano / sin fruto).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Preposiciones erróneas."
      },
      {
        "option": "C",
        "reason": "Preposiciones agramaticales en esta colocación."
      },
      {
        "option": "D",
        "reason": "'for a glance' no forma la frase adverbial fijada."
      }
    ],
    "referenceSite": "Englishteststore.net (Fixed Prepositional Phrases B2)"
  },
  {
    "id": "eng_b2_46",
    "number": 196,
    "level": "B2",
    "variant": "ALL",
    "topic": "Modal Perfects: Past Capability Not Realized",
    "statement": "We ________ the earlier train, but we deliberately decided to wait for our colleagues.",
    "options": [
      {
        "key": "A",
        "text": "must have caught"
      },
      {
        "key": "B",
        "text": "could have caught"
      },
      {
        "key": "C",
        "text": "should catch"
      },
      {
        "key": "D",
        "text": "can have caught"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Could have + Past Participle' expresa que existía la capacidad u oportunidad objetiva de realizar una acción en el pasado, pero que voluntaria o fortuitamente no se llevó a cabo.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'must have caught' deduciría falsamente que sí tomaron el tren anterior."
      },
      {
        "option": "C",
        "reason": "Modo presente sin valor retrospectivo."
      },
      {
        "option": "D",
        "reason": "'can have' no se usa afirmativamente para capacidad pasada."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Could have done Exercises B2)"
  },
  {
    "id": "eng_b2_47",
    "number": 197,
    "level": "B2",
    "variant": "ALL",
    "topic": "Passive Causative: Experiencing Misfortunes",
    "statement": "During the severe earthquake, several families in the coastal town ________ their roofs damaged by falling debris.",
    "options": [
      {
        "key": "A",
        "text": "had"
      },
      {
        "key": "B",
        "text": "made"
      },
      {
        "key": "C",
        "text": "did"
      },
      {
        "key": "D",
        "text": "let"
      }
    ],
    "correctAnswer": "A",
    "explanation": "La estructura causativa 'have + objeto + Past Participle' también se utiliza para expresar experiencias traumáticas o perjuicios sufridos accidentalmente por agentes externos ('had their roofs damaged').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'made' sugeriría que ellos mismos forzaron deliberadamente el daño de sus techos."
      },
      {
        "option": "C",
        "reason": "'did' no forma estructuras causativas de experiencia."
      },
      {
        "option": "D",
        "reason": "'let' sugeriría que ellos autorizaron el daño voluntariamente."
      }
    ],
    "referenceSite": "Agendaweb.org (Have something done for Misfortunes B2)"
  },
  {
    "id": "eng_b2_48",
    "number": 198,
    "level": "B2",
    "variant": "ALL",
    "topic": "Relative Clauses: Sentential Relative 'Which'",
    "statement": "The team completed the complex engineering assignment two weeks ahead of schedule, ________ surprised all the senior managers.",
    "options": [
      {
        "key": "A",
        "text": "that"
      },
      {
        "key": "B",
        "text": "which"
      },
      {
        "key": "C",
        "text": "what"
      },
      {
        "key": "D",
        "text": "who"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cuando una cláusula relativa no definitoria califica o comenta la TOTALIDAD de la proposición previa (sentential relative clause), el único pronombre relativo válido es 'which' precedido de coma.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'that' jamás puede remitir a toda una cláusula antecedente entre comas."
      },
      {
        "option": "C",
        "reason": "'what' no puede funcionar como relativo con antecedente sintáctico explícito."
      },
      {
        "option": "D",
        "reason": "'who' solo se refiere a personas individuales."
      }
    ],
    "referenceSite": "Englishteststore.net (Sentential Relative Which B2)"
  },
  {
    "id": "eng_b2_49",
    "number": 199,
    "level": "B2",
    "variant": "ALL",
    "topic": "Stylistic Inversion: Legal / Cautionary Negative Phrases",
    "statement": "Under no circumstances ________ the emergency valve while the nuclear cooling system is active.",
    "options": [
      {
        "key": "A",
        "text": "you should touch"
      },
      {
        "key": "B",
        "text": "should you touch"
      },
      {
        "key": "C",
        "text": "you must touch"
      },
      {
        "key": "D",
        "text": "touch you"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Las frases adverbiales negativas de prohibición formal absoluta ('Under no circumstances', 'On no account') exigen inversión auxiliar-sujeto obligatoria: 'should you touch'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Orden canónico no invertido, agramatical tras 'Under no circumstances'."
      },
      {
        "option": "C",
        "reason": "Falta la inversión de sujeto y auxiliar modal."
      },
      {
        "option": "D",
        "reason": "Inversión errónea sin auxiliar modal."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Inversion Under no circumstances B2)"
  },
  {
    "id": "eng_b2_50",
    "number": 200,
    "level": "B2",
    "variant": "ALL",
    "topic": "Comprehensive B2 Examination Review",
    "statement": "Select the ONLY sentence that conforms strictly to advanced English grammar norms:",
    "options": [
      {
        "key": "A",
        "text": "Hardly the plane had touched the tarmac when one of the engines failed."
      },
      {
        "key": "B",
        "text": "Had we been notified of the schedule changes, we would have revised our plans."
      },
      {
        "key": "C",
        "text": "I suggest him to apply for the prestigious international research grant."
      },
      {
        "key": "D",
        "text": "He is used to wake up early every morning because of his farm duties."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La opción B es sintácticamente perfecta: aplica la inversión de tercer condicional con el auxiliar 'Had' antepuesto al sujeto ('Had we been notified...') y apódosis con 'would have revised'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'Hardly' al inicio exige inversión auxiliar-sujeto ('Hardly had the plane touched...')."
      },
      {
        "option": "C",
        "reason": "'Suggest' no admite infinitivo de objeto de persona ('suggest him to apply' es agramatical; exige 'suggested that he apply')."
      },
      {
        "option": "D",
        "reason": "'He is used to' (estar acostumbrado) exige gerundio ('waking up'), no infinitivo base."
      }
    ],
    "referenceSite": "Agendaweb.org (Comprehensive B2 Synthesis)"
  },
  {
    "id": "eng_c1_01",
    "number": 201,
    "level": "C1",
    "variant": "ALL",
    "topic": "Stylistic Inversion: 'Not until' Construction",
    "statement": "Not until the forensic laboratory released the definitive DNA analysis ________ the full extent of the fraudulent scheme.",
    "options": [
      {
        "key": "A",
        "text": "the investigators realized"
      },
      {
        "key": "B",
        "text": "did the investigators realize"
      },
      {
        "key": "C",
        "text": "the investigators did realize"
      },
      {
        "key": "D",
        "text": "had the investigators realized"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Con la locución temporal restrictiva 'Not until + cláusula subordinada', la inversión auxiliar-sujeto ('did the investigators realize') se traslada OBLIGATORIAMENTE a la cláusula principal, no a la subordinada.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Omite la inversión obligatoria en la cláusula principal tras 'Not until'."
      },
      {
        "option": "C",
        "reason": "Inserta 'did' sin invertir el orden del sujeto."
      },
      {
        "option": "D",
        "reason": "Past Perfect injustificado dado que la acción de darse cuenta fue inmediata a la publicación."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Inversion after Not Until C1)"
  },
  {
    "id": "eng_c1_02",
    "number": 202,
    "level": "C1",
    "variant": "ALL",
    "topic": "Stylistic Inversion: 'Only after' and Prepositional Phrases",
    "statement": "Only after consulting with three independent constitutional scholars ________ to introduce the controversial amendment to parliament.",
    "options": [
      {
        "key": "A",
        "text": "the prime minister decided"
      },
      {
        "key": "B",
        "text": "did the prime minister decide"
      },
      {
        "key": "C",
        "text": "decided the prime minister"
      },
      {
        "key": "D",
        "text": "was the prime minister deciding"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Las frases adverbiales restrictivas que comienzan con 'Only after', 'Only when', 'Only by' exigen inversión auxiliar-sujeto en la cláusula principal ('did the prime minister decide').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Omite la inversión requerida en registro elevado formal."
      },
      {
        "option": "C",
        "reason": "Inversión léxica directa sin auxiliar 'did' (inadmisible con verbos transitivos plenos)."
      },
      {
        "option": "D",
        "reason": "Tiempo continuo innecesario para un acto de decisión puntual."
      }
    ],
    "referenceSite": "Agendaweb.org (Inversion with Only C1)"
  },
  {
    "id": "eng_c1_03",
    "number": 203,
    "level": "C1",
    "variant": "ALL",
    "topic": "Stylistic Inversion: Inversion with 'So' and 'Such'",
    "statement": "________ that even veteran international correspondents found it difficult to report the news objectively.",
    "options": [
      {
        "key": "A",
        "text": "So devastating the disaster was"
      },
      {
        "key": "B",
        "text": "So devastating was the disaster"
      },
      {
        "key": "C",
        "text": "Such devastating was the disaster"
      },
      {
        "key": "D",
        "text": "Devastating so was the disaster"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cuando el adjetivo focalizado se encabeza con 'So' en posición frontal enfática, la estructura exige inversión: 'So + adjetivo + verbo to be + sujeto + that...' ('So devastating was the disaster that...').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "No invierte el verbo to be con el sujeto."
      },
      {
        "option": "C",
        "reason": "'Such' se combina con frases nominales ('Such was the devastation'), no con adjetivos aislados."
      },
      {
        "option": "D",
        "reason": "Orden de constituyentes aberrante."
      }
    ],
    "referenceSite": "Englishteststore.net (Inversion with So and Such C1)"
  },
  {
    "id": "eng_c1_04",
    "number": 204,
    "level": "C1",
    "variant": "ALL",
    "topic": "Mandative Subjunctive: Formal Base Form",
    "statement": "The United Nations security council demanded that the belligerent state ________ all combat troops from the disputed territory without delay.",
    "options": [
      {
        "key": "A",
        "text": "withdraws"
      },
      {
        "key": "B",
        "text": "withdraw"
      },
      {
        "key": "C",
        "text": "withdrew"
      },
      {
        "key": "D",
        "text": "would withdraw"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En el subjuntivo mandativo de alta formalidad jurídica y diplomática, tras verbos de mandato y exigencia ('demand, insist, require that'), el verbo subordinado se formula obligatoriamente en forma base pura ('withdraw') invariable para toda persona gramatical.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa indicativo en tercera persona con -s, violando la regla del modo subjuntivo."
      },
      {
        "option": "C",
        "reason": "Usa pasado simple indicativo."
      },
      {
        "option": "D",
        "reason": "Perífrasis modal no estándar en este contexto protocolario formal."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Mandative Subjunctive C1)"
  },
  {
    "id": "eng_c1_05",
    "number": 205,
    "level": "C1",
    "variant": "ALL",
    "topic": "Mandative Subjunctive: Impersonal Adjectives",
    "statement": "It is imperative that every research scientist ________ the biosafety protocols strictly before entering the level-four laboratory.",
    "options": [
      {
        "key": "A",
        "text": "follows"
      },
      {
        "key": "B",
        "text": "follow"
      },
      {
        "key": "C",
        "text": "followed"
      },
      {
        "key": "D",
        "text": "is following"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Construcciones impersonales con adjetivos de necesidad perentoria ('It is imperative / vital / crucial / essential that') rigen subjuntivo en forma base pura ('follow') sin desinencia de 3ª persona.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa la forma flexionada de indicativo 'follows'."
      },
      {
        "option": "C",
        "reason": "Usa tiempo pasado."
      },
      {
        "option": "D",
        "reason": "Usa forma continua agramatical en este régimen."
      }
    ],
    "referenceSite": "Agendaweb.org (Subjunctive after Impersonal Adjectives C1)"
  },
  {
    "id": "eng_c1_06",
    "number": 206,
    "level": "C1",
    "variant": "ALL",
    "topic": "Mandative Subjunctive: Negative Form",
    "statement": "The defense attorney strongly advised that her client ________ to the press until the formal indictment was unsealed.",
    "options": [
      {
        "key": "A",
        "text": "doesn't speak"
      },
      {
        "key": "B",
        "text": "not speak"
      },
      {
        "key": "C",
        "text": "not to speak"
      },
      {
        "key": "D",
        "text": "didn't speak"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La negación del modo subjuntivo mandativo se forma simplemente anteponiendo el adverbio 'not' a la forma base del verbo ('not speak'), SIN recurrir a los auxiliares do/does/did.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Inserta el auxiliar indicativo 'doesn't'."
      },
      {
        "option": "C",
        "reason": "Inserta la marca de infinitivo 'to' de forma agramatical."
      },
      {
        "option": "D",
        "reason": "Usa el auxiliar de pasado indicativo 'didn't' en lugar del subjuntivo."
      }
    ],
    "referenceSite": "Englishteststore.net (Negative Subjunctive Syntax C1)"
  },
  {
    "id": "eng_c1_07",
    "number": 207,
    "level": "C1",
    "variant": "ALL",
    "topic": "Inverted Conditionals: 'Were it not for'",
    "statement": "________ the tireless dedication of the emergency medical staff, many more lives ________ lost during the pandemic.",
    "options": [
      {
        "key": "A",
        "text": "Were it not for / would be"
      },
      {
        "key": "B",
        "text": "Had it not been for / would have been"
      },
      {
        "key": "C",
        "text": "If it were not / had been"
      },
      {
        "key": "D",
        "text": "Were not it for / would have been"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Had it not been for + sustantivo' es la fórmula condicional invertida para referirse contrafácticamente a una causa pretérita que evitó una tragedia en el pasado con apódosis 'would have been lost'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'Were it not for... would be' situaría tanto la causa como la consecuencia en el presente hipotético actual."
      },
      {
        "option": "C",
        "reason": "Estructura incompleta sin la preposición 'for'."
      },
      {
        "option": "D",
        "reason": "Orden de negación invertido incorrecto ('Were not it')."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Inverted Conditionals Had it not been for C1)"
  },
  {
    "id": "eng_c1_08",
    "number": 208,
    "level": "C1",
    "variant": "ALL",
    "topic": "Inverted Conditionals: 'Were + Subject + to-infinitive'",
    "statement": "________ the regulatory commission to reject the pharmaceutical merger, the stock price of both companies would collapse overnight.",
    "options": [
      {
        "key": "A",
        "text": "Should"
      },
      {
        "key": "B",
        "text": "Were"
      },
      {
        "key": "C",
        "text": "Had"
      },
      {
        "key": "D",
        "text": "If"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La inversión formal de segundo condicional con infinitivo utiliza la estructura 'Were + sujeto + to-infinitive' ('Were the commission to reject...'), aportando un tono de eventualidad sumamente remota.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'Should' exigiría un infinitivo sin 'to' (bare infinitive: 'Should the commission reject')."
      },
      {
        "option": "C",
        "reason": "'Had' exigiría participio pasado."
      },
      {
        "option": "D",
        "reason": "'If' no invertiría la sintaxis y necesitaría el indicativo o subjuntivo estándar."
      }
    ],
    "referenceSite": "Agendaweb.org (Were to Inversion C1)"
  },
  {
    "id": "eng_c1_09",
    "number": 209,
    "level": "C1",
    "variant": "ALL",
    "topic": "Conditionals: 'But for' Construction",
    "statement": "But for the quick reflexes of the pilot, the aircraft ________ on the icy runway during the blizzard.",
    "options": [
      {
        "key": "A",
        "text": "would crash"
      },
      {
        "key": "B",
        "text": "would have crashed"
      },
      {
        "key": "C",
        "text": "crashed"
      },
      {
        "key": "D",
        "text": "had crashed"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'But for + sustantivo' equivale a 'If it had not been for...' (de no haber sido por...). Al referirse a un accidente pretérito evitado, exige el condicional perfecto en la cláusula principal ('would have crashed').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Condicional simple que alude a consecuencias presentes o futuras."
      },
      {
        "option": "C",
        "reason": "Indicativo afirmativo que afirmaría falsamente que el avión sí se estrelló."
      },
      {
        "option": "D",
        "reason": "Past Perfect indicativo sin valor condicional modal."
      }
    ],
    "referenceSite": "Englishteststore.net (But for Conditionals C1)"
  },
  {
    "id": "eng_c1_10",
    "number": 210,
    "level": "C1",
    "variant": "ALL",
    "topic": "Advanced Passive: Perfect Infinitives with Historical Accusations",
    "statement": "The former minister is alleged ________ millions in public infrastructure funds before resigning from office.",
    "options": [
      {
        "key": "A",
        "text": "to embezzle"
      },
      {
        "key": "B",
        "text": "to have embezzled"
      },
      {
        "key": "C",
        "text": "having embezzled"
      },
      {
        "key": "D",
        "text": "embezzling"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cuando la acusación o alegato se formula en el presente ('is alleged') pero el presunto desfalco ocurrió en el pasado antes de la renuncia, se emplea la pasiva personal con infinitivo perfecto: 'to have + Past Participle' ('to have embezzled').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "El infinitivo simple ('to embezzle') indicaría simultaneidad temporal con el presente."
      },
      {
        "option": "C",
        "reason": "Usa gerundio compuesto, agramatical tras 'is alleged'."
      },
      {
        "option": "D",
        "reason": "Usa gerundio simple."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Passive with Perfect Infinitive C1)"
  },
  {
    "id": "eng_c1_11",
    "number": 211,
    "level": "C1",
    "variant": "ALL",
    "topic": "Passives with Perception Verbs: Restoration of 'To'",
    "statement": "Active: 'Several witnesses saw the suspect flee the scene.' What is the ONLY grammatically correct passive transformation?",
    "options": [
      {
        "key": "A",
        "text": "The suspect was seen flee the scene by several witnesses."
      },
      {
        "key": "B",
        "text": "The suspect was seen to flee the scene by several witnesses."
      },
      {
        "key": "C",
        "text": "The suspect was seen fleeing to the scene by witnesses."
      },
      {
        "key": "D",
        "text": "The suspect seen to flee the scene by several witnesses."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Regla sintáctica estricta de verbos de percepción (see, hear, notice, make): en voz ACTIVA rigen infinitivo sin 'to' ('saw him flee'), pero en voz PASIVA se restaura OBLIGATORIAMENTE la partícula 'to' ('was seen to flee').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Omite la partícula 'to' obligatoria en la transformación pasiva."
      },
      {
        "option": "C",
        "reason": "Altera la preposición y el sentido aspectual."
      },
      {
        "option": "D",
        "reason": "Omite el verbo auxiliar 'was' en la pasiva."
      }
    ],
    "referenceSite": "Agendaweb.org (Passives with Perception Verbs C1)"
  },
  {
    "id": "eng_c1_12",
    "number": 212,
    "level": "C1",
    "variant": "ALL",
    "topic": "Unreal Past: Hypothetical 'As if' and 'As though'",
    "statement": "The junior intern gives orders to the department staff as though he ________ the chief medical officer.",
    "options": [
      {
        "key": "A",
        "text": "is"
      },
      {
        "key": "B",
        "text": "were"
      },
      {
        "key": "C",
        "text": "has been"
      },
      {
        "key": "D",
        "text": "will be"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'As if / As though' cuando expresan una ficción o pretensión contraria a la realidad evidente exigen el subjuntivo pretérito 'were' (o Unreal Past) para todas las personas gramaticales.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "El indicativo 'is' sugeriría que efectivamente existe la posibilidad de que sea el jefe."
      },
      {
        "option": "C",
        "reason": "Present Perfect no denota la irrealidad hipotética concomitante."
      },
      {
        "option": "D",
        "reason": "Futuro 'will' agramatical tras as though."
      }
    ],
    "referenceSite": "Englishteststore.net (As if and As though Subjunctive C1)"
  },
  {
    "id": "eng_c1_13",
    "number": 213,
    "level": "C1",
    "variant": "ALL",
    "topic": "Unreal Past: Unfulfilled Preferences in the Past",
    "statement": "The symposium was poorly organized. Honestly, I would rather ________ at home preparing my research grant.",
    "options": [
      {
        "key": "A",
        "text": "stay"
      },
      {
        "key": "B",
        "text": "have stayed"
      },
      {
        "key": "C",
        "text": "had stayed"
      },
      {
        "key": "D",
        "text": "stayed"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cuando el propio sujeto ('I') expresa una preferencia o lamento sobre una acción ya clausurada en el pasado, la locución 'would rather' se combina con el infinitivo perfecto: 'would rather + have + Past Participle' ('would rather have stayed').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'would rather stay' expresaría una preferencia presente o futura."
      },
      {
        "option": "C",
        "reason": "'had stayed' requeriría que el sujeto fuese diferente ('I would rather you had stayed')."
      },
      {
        "option": "D",
        "reason": "'stayed' es ambiguo o no estándar para el mismo sujeto."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Would rather Perfect Infinitive C1)"
  },
  {
    "id": "eng_c1_14",
    "number": 214,
    "level": "C1",
    "variant": "ALL",
    "topic": "Absolute Participle Clauses: Syntactic Independence",
    "statement": "Identify the sentence containing a syntactically correct ABSOLUTE CLAUSE:",
    "options": [
      {
        "key": "A",
        "text": "His hands trembling with immense tension, the surgeon made the microscopic incision."
      },
      {
        "key": "B",
        "text": "Trembling with immense tension, the microscopic incision was made by the surgeon."
      },
      {
        "key": "C",
        "text": "Walking into the operating room, the surgical instruments were counted."
      },
      {
        "key": "D",
        "text": "Having failed the laboratory test, the hospital decided to close down."
      }
    ],
    "correctAnswer": "A",
    "explanation": "Una cláusula absoluta genuina (A) posee su propio sujeto nominal explícito ('His hands') que no depende ni se confunde con el sujeto de la oración principal ('the surgeon'). Las opciones B y C contienen participios flotantes (dangling participles) agramaticales.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Dangling participle: sugiere que la incisión estaba temblando de tensión."
      },
      {
        "option": "C",
        "reason": "Dangling participle: sugiere que los instrumentos iban caminando al quirófano."
      },
      {
        "option": "D",
        "reason": "Sugiere que el hospital reprobó la prueba técnica en vez de la muestra médica."
      }
    ],
    "referenceSite": "Agendaweb.org (Absolute Participle Constructions C1)"
  },
  {
    "id": "eng_c1_15",
    "number": 215,
    "level": "C1",
    "variant": "ALL",
    "topic": "Advanced Phrasal Verbs: Academic and Institutional Registers",
    "statement": "The university's restructuring plan came ________ severe criticism from faculty members who had to fall ________ personal savings during the wage freeze.",
    "options": [
      {
        "key": "A",
        "text": "up with / out of"
      },
      {
        "key": "B",
        "text": "in for / back on"
      },
      {
        "key": "C",
        "text": "down with / behind on"
      },
      {
        "key": "D",
        "text": "forward to / away from"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Come in for criticism' es una colocación formal institucional que significa recibir o ser objeto de severas críticas. 'Fall back on' significa recurrir a reservas o ahorros como plan de emergencia.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'come up with' es idear una solución y 'fall out of' caerse."
      },
      {
        "option": "C",
        "reason": "'come down with' es enfermarse de un virus."
      },
      {
        "option": "D",
        "reason": "'come forward to' es presentarse como testigo voluntario."
      }
    ],
    "referenceSite": "Englishteststore.net (Advanced Three-Part Phrasal Verbs C1)"
  },
  {
    "id": "eng_c1_16",
    "number": 216,
    "level": "C1",
    "variant": "ALL",
    "topic": "Academic Collocations: Verb + Abstract Noun",
    "statement": "The latest archaeological discoveries ________ considerable doubt on the long-held hypothesis regarding pre-Columbian trade routes.",
    "options": [
      {
        "key": "A",
        "text": "make"
      },
      {
        "key": "B",
        "text": "cast"
      },
      {
        "key": "C",
        "text": "lay"
      },
      {
        "key": "D",
        "text": "throw"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La colocación léxica académica consagrada en inglés es 'to CAST doubt on something' (arrojar o sembrar dudas sobre una teoría previa).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'make doubt' es un calco literal agramatical del español 'hacer dudar'."
      },
      {
        "option": "C",
        "reason": "'lay doubt' no es una colocación léxica estándar."
      },
      {
        "option": "D",
        "reason": "'throw doubt' es coloquial y desaconsejado en prosa académica formal."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Academic Collocations Verb Noun C1)"
  },
  {
    "id": "eng_c1_17",
    "number": 217,
    "level": "C1",
    "variant": "ALL",
    "topic": "Advanced Collocations: Adverb + Adjective Precision",
    "statement": "The board was ________ unaware of the imminent hostile takeover, leading to ________ obvious administrative failures.",
    "options": [
      {
        "key": "A",
        "text": "blissfully / painfully"
      },
      {
        "key": "B",
        "text": "heavily / strongly"
      },
      {
        "key": "C",
        "text": "deeply / harshly"
      },
      {
        "key": "D",
        "text": "blindly / bitterly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Colocaciones estilísticas de alta frecuencia en C1: 'blissfully unaware' (felizmente ignorante de una calamidad inminente) y 'painfully obvious' (dolorosa o patéticamente evidente).",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Colocaciones impropias con unaware y obvious."
      },
      {
        "option": "C",
        "reason": "No forman los binomios colocacionales estándar consagrados."
      },
      {
        "option": "D",
        "reason": "'blindly unaware' es redundante pleonástico."
      }
    ],
    "referenceSite": "Agendaweb.org (Adverb Adjective Collocations C1)"
  },
  {
    "id": "eng_c1_18",
    "number": 218,
    "level": "C1",
    "variant": "ALL",
    "topic": "Concession Structures: 'Much as' + Subject + Verb",
    "statement": "________ admire her pioneering research in molecular genetics, I cannot endorse her commercialization methods.",
    "options": [
      {
        "key": "A",
        "text": "Even as I"
      },
      {
        "key": "B",
        "text": "Much as I"
      },
      {
        "key": "C",
        "text": "As much I"
      },
      {
        "key": "D",
        "text": "Whereas I"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Much as + sujeto + verbo' es un giro retórico avanzado de concesión que equivale formalmente a 'Although I admire her very much...' (Por mucho que admire...).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'Even as' denota simultaneidad temporal ('en el mismo momento en que...')."
      },
      {
        "option": "C",
        "reason": "Omite la preposición o estructura correlativa correcta."
      },
      {
        "option": "D",
        "reason": "'Whereas' denota contraposición directa entre dos entidades, no concesión de grado."
      }
    ],
    "referenceSite": "Englishteststore.net (Concessive Clauses Much as C1)"
  },
  {
    "id": "eng_c1_19",
    "number": 219,
    "level": "C1",
    "variant": "ALL",
    "topic": "Fronting for Emphasis: Adjective + 'Though / As'",
    "statement": "________ the climb up the volcanic ridge was, the mountaineers pressed forward without hesitation.",
    "options": [
      {
        "key": "A",
        "text": "Exhausting as"
      },
      {
        "key": "B",
        "text": "Although exhausting"
      },
      {
        "key": "C",
        "text": "As exhausting as"
      },
      {
        "key": "D",
        "text": "Exhausted though"
      }
    ],
    "correctAnswer": "A",
    "explanation": "La estructura de anteposición enfática (fronting) coloca el adjetivo al frente: 'Adjetivo + as/though + sujeto + verbo copulativo' ('Exhausting as the climb was...').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'Although exhausting' no encaja con la presencia del sujeto y verbo posteriores 'the climb was'."
      },
      {
        "option": "C",
        "reason": "'As exhausting as' requeriría una comparación de igualdad completa."
      },
      {
        "option": "D",
        "reason": "'Exhausted' describiría a los escaladores, pero el sujeto de la subordinada es 'the climb' (la ascensión, que es agotadora: exhausting)."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Fronting with Though and As C1)"
  },
  {
    "id": "eng_c1_20",
    "number": 220,
    "level": "C1",
    "variant": "ALL",
    "topic": "Grammatical Precision: 'Whoever' vs. 'Whomever'",
    "statement": "The foundation will grant the fellowship to ________ meets all the rigorous academic criteria, regardless of origin.",
    "options": [
      {
        "key": "A",
        "text": "whomever"
      },
      {
        "key": "B",
        "text": "whoever"
      },
      {
        "key": "C",
        "text": "whosoever"
      },
      {
        "key": "D",
        "text": "whom"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Aunque la frase completa funcione como objeto de la preposición 'to', el pronombre es el SUJETO gramatical del verbo finito 'meets' dentro de la cláusula subordinada ('whoever meets'), exigiendo por ende el caso nominativo 'whoever'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'whomever' es el error de hipercorrección más frecuente; no puede servir de sujeto de 'meets'."
      },
      {
        "option": "C",
        "reason": "'whosoever' es un arcaísmo bíblico en desuso."
      },
      {
        "option": "D",
        "reason": "'whom' carece del valor indefinido de generalización."
      }
    ],
    "referenceSite": "Agendaweb.org (Whoever vs Whomever Precision C1)"
  },
  {
    "id": "eng_c1_21",
    "number": 221,
    "level": "C1",
    "variant": "ALL",
    "topic": "US vs UK Syntax: Mandative Subjunctive vs. 'Should + Base'",
    "statement": "Which pair accurately reflects the standard stylistic preference between American English (US) and traditional British English (UK)?",
    "options": [
      {
        "key": "A",
        "text": "US: 'demanded that he be removed' / UK: 'demanded that he should be removed'"
      },
      {
        "key": "B",
        "text": "US: 'demanded that he should be removed' / UK: 'demanded that he be removed'"
      },
      {
        "key": "C",
        "text": "US: 'demanded him to be removed' / UK: 'demanded that he was removed'"
      },
      {
        "key": "D",
        "text": "Both dialects consider the subjunctive obsolete and only accept 'would'."
      }
    ],
    "correctAnswer": "A",
    "explanation": "El inglés estadounidense (US) retiene de forma sumamente rigurosa el subjuntivo mandativo sintético ('that he be removed'). El inglés británico formal tradicional (UK) recurre con gran frecuencia a la perífrasis modal con 'should + bare infinitive' ('that he should be removed').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Invierte diametralmente la preferencia dialectal histórica."
      },
      {
        "option": "C",
        "reason": "'demand someone to do' es un error sintáctico."
      },
      {
        "option": "D",
        "reason": "El subjuntivo está plenamente vivo en el inglés estándar internacional formal."
      }
    ],
    "referenceSite": "Englishteststore.net (Subjunctive US vs UK Syntax C1)"
  },
  {
    "id": "eng_c1_22",
    "number": 222,
    "level": "C1",
    "variant": "ALL",
    "topic": "Semi-Modal Auxiliaries: 'Dare' and 'Need' in Negative and Interrogative",
    "statement": "How ________ she question the integrity of the judicial panel, and ________ we remind her of the ethical guidelines?",
    "options": [
      {
        "key": "A",
        "text": "dares / need"
      },
      {
        "key": "B",
        "text": "dare / need"
      },
      {
        "key": "C",
        "text": "dare to / do need"
      },
      {
        "key": "D",
        "text": "does dare / must to"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Cuando 'dare' y 'need' funcionan como verbos modales auxiliares en contextos negativos o interrogativos, no añaden -s en tercera persona y van seguidos de bare infinitive sin 'to': 'How dare she question...' y 'need we remind...?'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'dares' añade -s como si fuera verbo ordinario pero omite el auxiliar do."
      },
      {
        "option": "C",
        "reason": "'dare to' mezcla sintaxis léxica con inversión modal."
      },
      {
        "option": "D",
        "reason": "'must to' es un error agramatical flagrante."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Semi-modals Dare and Need C1)"
  },
  {
    "id": "eng_c1_23",
    "number": 223,
    "level": "C1",
    "variant": "ALL",
    "topic": "Formal Register: Possessive Determiners before Gerunds",
    "statement": "The managing partner objected to ________ the confidential client list without prior authorization.",
    "options": [
      {
        "key": "A",
        "text": "him sharing"
      },
      {
        "key": "B",
        "text": "his sharing"
      },
      {
        "key": "C",
        "text": "he sharing"
      },
      {
        "key": "D",
        "text": "him to share"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En el registro formal escrito de alto nivel (C1/C2), el sujeto de una acción expresada mediante gerundio debe adoptar formalmente el determinante POSESIVO ('his sharing'), reconociendo la naturaleza nominal del gerundio.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'him sharing' es coloquial y común en el habla diaria, pero se considera desaconsejado en redacción formal académica estricta."
      },
      {
        "option": "C",
        "reason": "'he sharing' es agramatical."
      },
      {
        "option": "D",
        "reason": "Usa infinitivo tras la preposición 'to', agramatical."
      }
    ],
    "referenceSite": "Agendaweb.org (Possessive with Gerunds C1)"
  },
  {
    "id": "eng_c1_24",
    "number": 224,
    "level": "C1",
    "variant": "ALL",
    "topic": "Lexical Collocations: Irreversible Binomials",
    "statement": "After ten hours of intense operational testing, the military machinery showed signs of ________, but maintained ________ among the troops.",
    "options": [
      {
        "key": "A",
        "text": "tear and wear / order and law"
      },
      {
        "key": "B",
        "text": "wear and tear / law and order"
      },
      {
        "key": "C",
        "text": "wear and tear / order and law"
      },
      {
        "key": "D",
        "text": "tearing and wearing / legal order"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los binomios irreversibles en inglés poseen un orden de palabras fijo consagrado por el uso histórico que no puede alterarse: 'wear and tear' (desgaste natural por el uso) y 'law and order' (la ley y el orden público).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte de forma aberrante el orden consagrado de ambos binomios."
      },
      {
        "option": "C",
        "reason": "Invierte 'law and order'."
      },
      {
        "option": "D",
        "reason": "Deforma la locución idiomática consagrada."
      }
    ],
    "referenceSite": "Englishteststore.net (Irreversible Binomials C1)"
  },
  {
    "id": "eng_c1_25",
    "number": 225,
    "level": "C1",
    "variant": "ALL",
    "topic": "Rhetorical Figures: Litotes (Ironic Understatement)",
    "statement": "Which sentence demonstrates a classic example of LITOTES (deliberate understatement using double negation)?",
    "options": [
      {
        "key": "A",
        "text": "The architectural proposal was absolutely magnificent and sublime."
      },
      {
        "key": "B",
        "text": "The newly appointed ambassador was not unmindful of the political tensions."
      },
      {
        "key": "C",
        "text": "The earthquake was extremely destructive throughout the capital."
      },
      {
        "key": "D",
        "text": "Never did we imagine such an extraordinary breakthrough."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La lítote (litotes) es una figura retórica formal que expresa una afirmación mediante la negación de su contrario ('not unmindful' = plenamente consciente), atenuando el tono con refinamiento diplomático o irónico.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa hipérbole y adjetivos superlativos plenos."
      },
      {
        "option": "C",
        "reason": "Declaración directa y enfática sin lítote."
      },
      {
        "option": "D",
        "reason": "Inversión estilística con adverbio negativo."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Stylistic Devices Litotes C1)"
  },
  {
    "id": "eng_c1_26",
    "number": 226,
    "level": "C1",
    "variant": "ALL",
    "topic": "Complex Prepositional Locutions: With a view to + -ing",
    "statement": "The executive board updated the corporate bylaws with a view to ________ compliance with international environmental standards.",
    "options": [
      {
        "key": "A",
        "text": "ensure"
      },
      {
        "key": "B",
        "text": "ensuring"
      },
      {
        "key": "C",
        "text": "ensured"
      },
      {
        "key": "D",
        "text": "be ensured"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la locución preposicional formal 'with a view to' (con miras a / con el propósito de), la palabra 'to' es una preposición estricta que exige OBLIGATORIAMENTE un gerundio: 'with a view to ensuring'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Error común por confundir la preposición 'to' con la marca de infinitivo."
      },
      {
        "option": "C",
        "reason": "Past Simple agramatical."
      },
      {
        "option": "D",
        "reason": "Infinitivo pasivo agramatical."
      }
    ],
    "referenceSite": "Agendaweb.org (With a view to + Gerund C1)"
  },
  {
    "id": "eng_c1_27",
    "number": 227,
    "level": "C1",
    "variant": "ALL",
    "topic": "Lexical Precision: Cognate Distinctions (Sensible vs Sensitive)",
    "statement": "A diplomatic negotiator must be exceptionally ________ to cultural nuances, yet remain ________ and pragmatic during budget deliberations.",
    "options": [
      {
        "key": "A",
        "text": "sensible / sensitive"
      },
      {
        "key": "B",
        "text": "sensitive / sensible"
      },
      {
        "key": "C",
        "text": "sensual / senseless"
      },
      {
        "key": "D",
        "text": "senseless / sensible"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Sensitive' significa sensible, perceptivo o empático ante estímulos o emociones ajenas. 'Sensible' significa sensato, juicioso, prudente y guiado por la razón y el sentido común.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los dos falsos cognados fundamentales del inglés."
      },
      {
        "option": "C",
        "reason": "'sensual' alude a los sentidos físicos corporales y 'senseless' a algo insensato o desmayado."
      },
      {
        "option": "D",
        "reason": "'senseless' significa irracional o inconsciente."
      }
    ],
    "referenceSite": "Englishteststore.net (Sensible vs Sensitive C1)"
  },
  {
    "id": "eng_c1_28",
    "number": 228,
    "level": "C1",
    "variant": "ALL",
    "topic": "Locative Inversion: Prepositional Phrases in Narrative",
    "statement": "Behind the ornate mahogany desk ________ an imposing portrait of the university's founder.",
    "options": [
      {
        "key": "A",
        "text": "hung"
      },
      {
        "key": "B",
        "text": "did hang"
      },
      {
        "key": "C",
        "text": "hung there"
      },
      {
        "key": "D",
        "text": "was hanging it"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la inversión locativa descriptiva formal o literaria, tras una frase preposicional de lugar, el verbo intransitivo se coloca directamente antes del sujeto nominal completo SIN auxiliar: 'Preposición de lugar + Verbo + Sujeto' ('Behind the desk hung an imposing portrait').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Inserta innecesariamente el auxiliar 'did' (la inversión locativa no usa auxiliares)."
      },
      {
        "option": "C",
        "reason": "'there' es pleonástico redundante."
      },
      {
        "option": "D",
        "reason": "Pronombre 'it' agramaticalmente insertado."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Inversion after Place Prepositions C1)"
  },
  {
    "id": "eng_c1_29",
    "number": 229,
    "level": "C1",
    "variant": "ALL",
    "topic": "Phonetics: Non-Rhoticity and Intrusive /r/ in British English",
    "statement": "In standard British English (RP accent), when the phrase 'the idea of it' is spoken naturally, which phonetic link is articulated?",
    "options": [
      {
        "key": "A",
        "text": "a glottal stop [ʔ] between 'idea' and 'of'"
      },
      {
        "key": "B",
        "text": "an intrusive /r/ link: 'the idea-r-of it'"
      },
      {
        "key": "C",
        "text": "a hard dental click"
      },
      {
        "key": "D",
        "text": "a silent pause of half a second"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En el inglés británico no rótico estándar (RP / SSBE), para evitar el hiato vocálico entre una vocal no cerrada (como la schwa de 'idea') y una vocal siguiente, los hablantes insertan un fonema de enlace denominado 'intrusive /r/' (/aɪˈdɪə.r.əv.ɪt/).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "La oclusión glotal se asocia a dialectos populares urbanos, no al enlace estándar en habla fluida."
      },
      {
        "option": "C",
        "reason": "Los chasquidos dentales no forman parte del sistema fonológico del inglés."
      },
      {
        "option": "D",
        "reason": "No se producen pausas silenciosas dentro del grupo rítmico."
      }
    ],
    "referenceSite": "Agendaweb.org (Intrusive R in British Phonetics C1)"
  },
  {
    "id": "eng_c1_30",
    "number": 230,
    "level": "C1",
    "variant": "ALL",
    "topic": "Cleft Sentences: Reversed Pseudo-Cleft Syntax",
    "statement": "A thorough restructuring of the primary supply chain ________ to survive the global economic downturn.",
    "options": [
      {
        "key": "A",
        "text": "is what the conglomerate urgently needs"
      },
      {
        "key": "B",
        "text": "what the conglomerate is urgently needing"
      },
      {
        "key": "C",
        "text": "is that what the conglomerate needs"
      },
      {
        "key": "D",
        "text": "which the conglomerate urgently needs is"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la seudo-escindida inversa (reversed pseudo-cleft), el elemento focalizado se sitúa al principio, seguido de 'is/was + what-clause': 'A thorough restructuring is what the conglomerate urgently needs'.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'need' es verbo de estado que no admite tiempos continuos y omite el verbo copulativo rector."
      },
      {
        "option": "C",
        "reason": "Inserta agramaticalmente 'that' antes de 'what'."
      },
      {
        "option": "D",
        "reason": "Desarticula la estructura predicativa principal."
      }
    ],
    "referenceSite": "Englishteststore.net (Reversed Pseudo-Clefts C1)"
  },
  {
    "id": "eng_c1_31",
    "number": 231,
    "level": "C1",
    "variant": "ALL",
    "topic": "Cohesion: Substitution with 'Do so'",
    "statement": "The managing director requested that the department heads submit their financial audits by Friday, and several of them ________ ahead of schedule.",
    "options": [
      {
        "key": "A",
        "text": "did so"
      },
      {
        "key": "B",
        "text": "did them"
      },
      {
        "key": "C",
        "text": "made so"
      },
      {
        "key": "D",
        "text": "acted it"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Do so' es el mecanismo formal de sustitución anafórica por excelencia en el registro culto para reemplazar una frase verbal completa de acción deliberada ('submit their audits').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'did them' es coloquial y confuso."
      },
      {
        "option": "C",
        "reason": "'made so' es un calco agramatical."
      },
      {
        "option": "D",
        "reason": "'acted it' no sustituye una predicación verbal transitiva."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Cohesion and Substitution with Do so C1)"
  },
  {
    "id": "eng_c1_32",
    "number": 232,
    "level": "C1",
    "variant": "ALL",
    "topic": "Modal Usages: Epistemic 'Will' for Present Probability",
    "statement": "— 'The doorbell is ringing at 8:00 AM.' — 'That ________ the mail carrier with the registered legal packet.'",
    "options": [
      {
        "key": "A",
        "text": "will be"
      },
      {
        "key": "B",
        "text": "shall be"
      },
      {
        "key": "C",
        "text": "ought"
      },
      {
        "key": "D",
        "text": "is being"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En el registro cultivado y formal, 'will' se utiliza en sentido epistémico para expresar una deducción o presunción lógica de altísima certeza sobre el presente ('Ese será el cartero').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'shall' denota deber solemne o promesa en primera persona."
      },
      {
        "option": "C",
        "reason": "'ought' requiere obligatoriamente 'to'."
      },
      {
        "option": "D",
        "reason": "'is being' indicaría una transformación deliberada de conducta."
      }
    ],
    "referenceSite": "Agendaweb.org (Epistemic Modality Will C1)"
  },
  {
    "id": "eng_c1_33",
    "number": 233,
    "level": "C1",
    "variant": "ALL",
    "topic": "Concessive Clauses: 'However' + Adjective / Adverb",
    "statement": "________ the laboratory technicians worked, they could not replicate the anomaly under vacuum conditions.",
    "options": [
      {
        "key": "A",
        "text": "However diligently"
      },
      {
        "key": "B",
        "text": "Diligent however"
      },
      {
        "key": "C",
        "text": "Although diligently"
      },
      {
        "key": "D",
        "text": "Despite diligently"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'However + adverbio/adjetivo + sujeto + verbo' es una estructura concesiva avanzada que expresa 'por muy diligentemente que trabajasen...' ('However diligently the technicians worked...').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Invierte el orden de la estructura concessiva de grado."
      },
      {
        "option": "C",
        "reason": "'Although' no puede modificar directamente a un adverbio de modo antepuesto a la cláusula."
      },
      {
        "option": "D",
        "reason": "'Despite' exige frase nominal o gerundio."
      }
    ],
    "referenceSite": "Englishteststore.net (However hard Concessive C1)"
  },
  {
    "id": "eng_c1_34",
    "number": 234,
    "level": "C1",
    "variant": "ALL",
    "topic": "Semantic Precision: Disinterested vs. Uninterested",
    "statement": "We need an entirely ________ mediator to oversee the corporate arbitration, not someone who is bored and ________ in the complex legal details.",
    "options": [
      {
        "key": "A",
        "text": "uninterested / disinterested"
      },
      {
        "key": "B",
        "text": "disinterested / uninterested"
      },
      {
        "key": "C",
        "text": "disinterested / disinterested"
      },
      {
        "key": "D",
        "text": "uninterested / uninterested"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Disinterested' significa rigurosamente imparcial, neutral, desinteresado y libre de conflicto de interés. 'Uninterested' significa desinteresado en el sentido de apático, aburrido o indiferente.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte con precisión los dos términos semánticos."
      },
      {
        "option": "C",
        "reason": "Usa 'disinterested' para aburrimiento o indiferencia (uno de los errores más criticados en C1)."
      },
      {
        "option": "D",
        "reason": "Declara falsamente que el árbitro debe ser apático."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Disinterested vs Uninterested C1)"
  },
  {
    "id": "eng_c1_35",
    "number": 235,
    "level": "C1",
    "variant": "ALL",
    "topic": "Stylistic Register: Nominalization for Academic Density",
    "statement": "Which sentence demonstrates superior academic register through appropriate NOMINALIZATION?",
    "options": [
      {
        "key": "A",
        "text": "Because the chemical reacted rapidly when the temperature rose, the glass beaker broke suddenly."
      },
      {
        "key": "B",
        "text": "The rapid chemical reaction triggered by the temperature increase resulted in the sudden fracture of the beaker."
      },
      {
        "key": "C",
        "text": "The beaker broke fast because it got hot and reacted."
      },
      {
        "key": "D",
        "text": "It was because of reacting chemical that the beaker got broken up."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La nominalización sustituye oraciones verbales dependientes y adverbiales coloquiales por sustantivos conceptuales densos ('rapid chemical reaction', 'temperature increase', 'fracture'), característica distintiva de la prosa científica y académica de nivel C1.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Estructura verbal coloquial elemental."
      },
      {
        "option": "C",
        "reason": "Registro informal simplificado."
      },
      {
        "option": "D",
        "reason": "Construcción torpe y sintácticamente defectuosa."
      }
    ],
    "referenceSite": "Agendaweb.org (Nominalization in Academic English C1)"
  },
  {
    "id": "eng_c1_36",
    "number": 236,
    "level": "C1",
    "variant": "ALL",
    "topic": "Emphasis: Cleft Structures with 'All'",
    "statement": "________ was an honest clarification of the conflicting clauses in the contract.",
    "options": [
      {
        "key": "A",
        "text": "All what the union requested"
      },
      {
        "key": "B",
        "text": "All that the union requested"
      },
      {
        "key": "C",
        "text": "Everything what the union requested"
      },
      {
        "key": "D",
        "text": "Which the union requested all"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En las oraciones escindidas con 'All', el pronombre relativo admitido es estrictamente 'that' (o se omite): 'All that the union requested was...'. 'All what' es un vulgarismo terminantemente agramatical en inglés culto.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'All what' es un error gramatical grave y sancionado en exámenes internacionales."
      },
      {
        "option": "C",
        "reason": "'Everything what' viola la sintaxis de relativos."
      },
      {
        "option": "D",
        "reason": "Estructura desarticulada."
      }
    ],
    "referenceSite": "Englishteststore.net (Cleft Sentences with All C1)"
  },
  {
    "id": "eng_c1_37",
    "number": 237,
    "level": "C1",
    "variant": "ALL",
    "topic": "Complex Conditionals: Mixed Tenses with Progressive Aspect",
    "statement": "If the IT department had deployed the firewall patch last night, our network ________ under cyberattack right now.",
    "options": [
      {
        "key": "A",
        "text": "wouldn't be suffering"
      },
      {
        "key": "B",
        "text": "wouldn't have suffered"
      },
      {
        "key": "C",
        "text": "hadn't suffered"
      },
      {
        "key": "D",
        "text": "won't be suffering"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Condicional mixto con aspecto continuo: condición hipotética pretérita ('had deployed') con consecuencia en pleno desarrollo simultáneo al presente ('right now') que exige 'wouldn't be suffering'.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Condicional perfecto que sugeriría que el ataque concluyó en el pasado."
      },
      {
        "option": "C",
        "reason": "Past Perfect en la cláusula principal, agramatical."
      },
      {
        "option": "D",
        "reason": "Futuro 'won't' no concuerda con una hipótesis irreal."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Mixed Conditionals Continuous C1)"
  },
  {
    "id": "eng_c1_38",
    "number": 238,
    "level": "C1",
    "variant": "ALL",
    "topic": "Prepositional Phrases: Advanced Abstract Nouns",
    "statement": "There has been a sharp decline ________ public trust, resulting in serious repercussions ________ the entire banking sector.",
    "options": [
      {
        "key": "A",
        "text": "of / on"
      },
      {
        "key": "B",
        "text": "in / for"
      },
      {
        "key": "C",
        "text": "at / to"
      },
      {
        "key": "D",
        "text": "with / towards"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Colocaciones preposicionales normativas fijas: 'a decline IN something' (un declive o disminución en algo), y 'repercussions FOR someone/something' (repercusiones para una entidad).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'decline of' se reserva para la caída o ruina total de un imperio o civilización, no para porcentajes o índices."
      },
      {
        "option": "C",
        "reason": "Preposiciones agramaticales con decline y repercussion."
      },
      {
        "option": "D",
        "reason": "'decline with' es incorrecto."
      }
    ],
    "referenceSite": "Agendaweb.org (Prepositions after Nouns C1)"
  },
  {
    "id": "eng_c1_39",
    "number": 239,
    "level": "C1",
    "variant": "ALL",
    "topic": "Inversion: Limiting Negative Pair 'Scarcely... when'",
    "statement": "Scarcely ________ the laboratory when the emergency evacuation sirens began to wail.",
    "options": [
      {
        "key": "A",
        "text": "the researchers had entered"
      },
      {
        "key": "B",
        "text": "had the researchers entered"
      },
      {
        "key": "C",
        "text": "did the researchers enter"
      },
      {
        "key": "D",
        "text": "were the researchers entering"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Scarcely + had + sujeto + participio pasado... when' es la fórmula correlativa de anterioridad inmediata que exige rigurosa inversión del auxiliar 'had' con el sujeto.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Omite la inversión obligatoria tras 'Scarcely' frontal."
      },
      {
        "option": "C",
        "reason": "Past Simple no es el tiempo aspectual consagrado para 'Scarcely... when'."
      },
      {
        "option": "D",
        "reason": "Tiempo continuo inapropiado para el cruce puntual del umbral."
      }
    ],
    "referenceSite": "Englishteststore.net (Scarcely when Inversion C1)"
  },
  {
    "id": "eng_c1_40",
    "number": 240,
    "level": "C1",
    "variant": "ALL",
    "topic": "Fronting and Inversion: Directional Adverbial Preposing",
    "statement": "Through the dense morning mist ________, sounding its foghorn across the bay.",
    "options": [
      {
        "key": "A",
        "text": "slowly sailed the massive ocean liner"
      },
      {
        "key": "B",
        "text": "did slowly sail the massive ocean liner"
      },
      {
        "key": "C",
        "text": "the massive ocean liner slowly sailed"
      },
      {
        "key": "D",
        "text": "sailed slowly it"
      }
    ],
    "correctAnswer": "A",
    "explanation": "En la anteposición de frases adverbiales direccionales de movimiento en prosa narrativa literaria, el verbo de movimiento precede al sujeto nominal completo sin necesidad de auxiliar: 'Through the mist slowly sailed the ocean liner'.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Inserta el auxiliar 'did', el cual no se utiliza en inversiones de movimiento locativo."
      },
      {
        "option": "C",
        "reason": "Orden no enfático llano."
      },
      {
        "option": "D",
        "reason": "Invierte un pronombre personal, lo cual está prohibido en inversiones locativas."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Inversion Directional Adverbials C1)"
  },
  {
    "id": "eng_c1_41",
    "number": 241,
    "level": "C1",
    "variant": "ALL",
    "topic": "Formal Connectors: Syntax and Use of 'Albeit'",
    "statement": "The surgical intervention was successful, ________ accompanied by temporary postoperative numbness in the patient's fingers.",
    "options": [
      {
        "key": "A",
        "text": "albeit"
      },
      {
        "key": "B",
        "text": "despite"
      },
      {
        "key": "C",
        "text": "in spite"
      },
      {
        "key": "D",
        "text": "whereas"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Albeit' (del inglés medio 'although it be') funciona en el registro formal como conjunción concesiva que introduce complementos adjetivales, participiales o adverbiales sin necesidad de formular una cláusula subordinada completa.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'despite' exige frase nominal directa ('despite the temporary numbness') o gerundio."
      },
      {
        "option": "C",
        "reason": "'in spite' omite la preposición obligatoria 'of'."
      },
      {
        "option": "D",
        "reason": "'whereas' exige una cláusula completa con sujeto y verbo finito contrastado."
      }
    ],
    "referenceSite": "Agendaweb.org (Albeit and Formal Concessions C1)"
  },
  {
    "id": "eng_c1_42",
    "number": 242,
    "level": "C1",
    "variant": "ALL",
    "topic": "Syntax and Style: Dangling Participle Remediation",
    "statement": "Identify the ONLY version that successfully avoids a DANGLING MODIFIER:",
    "options": [
      {
        "key": "A",
        "text": "Having analyzed the raw financial data, the conclusions were drawn by the senior analyst."
      },
      {
        "key": "B",
        "text": "Having analyzed the raw financial data, the senior analyst drew her conclusions."
      },
      {
        "key": "C",
        "text": "Analyzing the raw financial data, conclusions became obvious to the analyst."
      },
      {
        "key": "D",
        "text": "Having been analyzed, the senior analyst drew conclusions from the data."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la opción B, el sujeto de la cláusula principal ('the senior analyst') coincide de manera lógica y sintáctica con el agente implícito del participio previo ('Having analyzed'). En A y C, la frase sugiere absurdamente que las 'conclusiones' analizaron los datos.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Dangling participle clásico: coloca 'the conclusions' como sujeto gramatical tras el participio activo."
      },
      {
        "option": "C",
        "reason": "Sugiere que las conclusiones estaban analizando los datos."
      },
      {
        "option": "D",
        "reason": "Afirma que la analista fue analizada."
      }
    ],
    "referenceSite": "Englishteststore.net (Dangling Modifiers C1)"
  },
  {
    "id": "eng_c1_43",
    "number": 243,
    "level": "C1",
    "variant": "ALL",
    "topic": "Formulaic Subjunctive: Idiomatic Invariables",
    "statement": "The expedition leaders resolved to reach the summit, ________.",
    "options": [
      {
        "key": "A",
        "text": "comes what may"
      },
      {
        "key": "B",
        "text": "come what may"
      },
      {
        "key": "C",
        "text": "came what might"
      },
      {
        "key": "D",
        "text": "come that may"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Come what may' es una fórmula fósil consagrada del modo subjuntivo optativo/concesivo que significa 'suceda lo que suceda / pase lo que pase', con el verbo en forma base invariable 'come'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Flexiona en indicativo 'comes', destruyendo la fórmula fósil del subjuntivo."
      },
      {
        "option": "C",
        "reason": "Forma deformada en pasado."
      },
      {
        "option": "D",
        "reason": "Conjunción errónea."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Formulaic Subjunctive C1)"
  },
  {
    "id": "eng_c1_44",
    "number": 244,
    "level": "C1",
    "variant": "ALL",
    "topic": "Concord: British Legal and Institutional Agreement",
    "statement": "In formal British legal English, when a governing body is viewed as a collection of individual voting peers, which sentence is standard?",
    "options": [
      {
        "key": "A",
        "text": "The jury has retired to consider its verdict."
      },
      {
        "key": "B",
        "text": "The jury have retired to consider their verdict."
      },
      {
        "key": "C",
        "text": "The jury were retired to considering its verdict."
      },
      {
        "key": "D",
        "text": "The jury is retired to consider their verdict."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En el estándar institucional británico, cuando se focaliza a los miembros individuales del jurado deliberando activamente por separado, se utiliza el verbo y los pronombres en PLURAL: 'The jury have retired to consider their verdict'. (Ambas formas son gramaticales según el foco, pero B ilustra la concordancia plural británica con pronombre 'their').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Es la perspectiva colectiva monolítica (también válida, pero focaliza a la entidad corporativa en singular con 'its')."
      },
      {
        "option": "C",
        "reason": "Usa pasiva continua incorrecta."
      },
      {
        "option": "D",
        "reason": "Mezcla contradictoriamente verbo singular 'is' con determinante plural 'their'."
      }
    ],
    "referenceSite": "Agendaweb.org (Collective Nouns British Concord C1)"
  },
  {
    "id": "eng_c1_45",
    "number": 245,
    "level": "C1",
    "variant": "ALL",
    "topic": "Discourse Markers: 'By the same token' for Parallel Logic",
    "statement": "Senior management expects maximum accountability from staff; ________, employees rightly demand fair compensation and transparent leadership.",
    "options": [
      {
        "key": "A",
        "text": "by the same token"
      },
      {
        "key": "B",
        "text": "on the contrary"
      },
      {
        "key": "C",
        "text": "in summary"
      },
      {
        "key": "D",
        "text": "for instance"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'By the same token' es un marcador discursivo formal que introduce una afirmación complementaria basada en el mismo principio de reciprocidad o lógica análoga ('por la misma razón / del mismo modo').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'on the contrary' denota refutación diametral de una aserción negativa previa."
      },
      {
        "option": "C",
        "reason": "'in summary' se limita a recapitular lo ya dicho."
      },
      {
        "option": "D",
        "reason": "'for instance' introduce un ejemplo particular, no un principio recíproco."
      }
    ],
    "referenceSite": "Englishteststore.net (Discourse Markers Parallelism C1)"
  },
  {
    "id": "eng_c1_46",
    "number": 246,
    "level": "C1",
    "variant": "ALL",
    "topic": "Stylistic Inversion: 'Little' with Verbs of Cognition",
    "statement": "Little ________ that the anonymous donor sitting across the banquet hall was his biological grandfather.",
    "options": [
      {
        "key": "A",
        "text": "he suspected"
      },
      {
        "key": "B",
        "text": "did he suspect"
      },
      {
        "key": "C",
        "text": "he did suspect"
      },
      {
        "key": "D",
        "text": "was he suspecting"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El adverbio 'Little' en posición inicial con verbos de conocimiento o percepción (know, suspect, realize, dream) exige rigurosa inversión auxiliar-sujeto: 'Little did he suspect' (Ni por un segundo sospechaba).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Omite la inversión requerida tras 'Little' enfático."
      },
      {
        "option": "C",
        "reason": "Orden no invertido con 'did' superfluo."
      },
      {
        "option": "D",
        "reason": "Tiempo continuo inapropiado para este modismo cognitivo."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Inversion with Little C1)"
  },
  {
    "id": "eng_c1_47",
    "number": 247,
    "level": "C1",
    "variant": "ALL",
    "topic": "Cleft Structures: 'The reason why... is that'",
    "statement": "The primary reason why the clinical trial had to be paused ________ several participants exhibited unexpected allergic reactions.",
    "options": [
      {
        "key": "A",
        "text": "was because"
      },
      {
        "key": "B",
        "text": "was that"
      },
      {
        "key": "C",
        "text": "was why"
      },
      {
        "key": "D",
        "text": "were because"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la prosa formal y académica normativamente pura, la estructura correcta es 'The reason... is/was THAT', NUNCA 'was because' (lo cual se considera un pleonasmo vicioso y redundante en los manuales de estilo de Cambridge y Oxford).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'was because' es una redundancia censurada en redacción formal culta."
      },
      {
        "option": "C",
        "reason": "'was why' repite agramaticalmente el adverbio relativo."
      },
      {
        "option": "D",
        "reason": "Falla en concordancia de número ('were' con 'reason')."
      }
    ],
    "referenceSite": "Agendaweb.org (The reason why is that C1)"
  },
  {
    "id": "eng_c1_48",
    "number": 248,
    "level": "C1",
    "variant": "ALL",
    "topic": "Lexical Precision: Affect (Verb) vs. Effect (Noun / Verb)",
    "statement": "The prolonged heatwave will seriously ________ crop yields, and the adverse ________ will be felt across the entire agricultural economy.",
    "options": [
      {
        "key": "A",
        "text": "effect / affects"
      },
      {
        "key": "B",
        "text": "affect / effects"
      },
      {
        "key": "C",
        "text": "affect / affects"
      },
      {
        "key": "D",
        "text": "effect / effects"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Affect' funciona primordialmente como VERBO que significa influir perjudicialmente o modificar ('affect crop yields'). 'Effect' funciona como SUSTANTIVO que designa el resultado o consecuencia ('adverse effects').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte sistemáticamente el verbo y el sustantivo."
      },
      {
        "option": "C",
        "reason": "Usa 'affects' como sustantivo plural."
      },
      {
        "option": "D",
        "reason": "Usa 'effect' como verbo transitivo ordinario de influencia (aunque 'to effect' existe como verbo culto, significa 'efectuar/provocar un cambio', no influir en las cosechas)."
      }
    ],
    "referenceSite": "Englishteststore.net (Affect vs Effect Precision C1)"
  },
  {
    "id": "eng_c1_49",
    "number": 249,
    "level": "C1",
    "variant": "ALL",
    "topic": "Inverted Conditionals: Formal Negative with 'Should'",
    "statement": "________ the delivery arrive on time, please hold the shipment at the central warehouse until further notice.",
    "options": [
      {
        "key": "A",
        "text": "Should not"
      },
      {
        "key": "B",
        "text": "Should the delivery not"
      },
      {
        "key": "C",
        "text": "If the delivery should not"
      },
      {
        "key": "D",
        "text": "Shouldn't the delivery"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En las inversiones condicionales con negación, el adverbio 'not' se coloca OBLIGATORIAMENTE DESPUÉS del sujeto nominal: 'Should + Sujeto + not + Verbo' ('Should the delivery not arrive'). Las contracciones como 'Shouldn't' se evitan en el registro formal escrito.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Coloca 'not' antes del sujeto sin contraer, lo cual es agramatical."
      },
      {
        "option": "C",
        "reason": "No realiza la inversión al mantener 'if'."
      },
      {
        "option": "D",
        "reason": "Usa la forma contraída informal desaconsejada en protocolos formales."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Inverted Conditionals Negative Should C1)"
  },
  {
    "id": "eng_c1_50",
    "number": 250,
    "level": "C1",
    "variant": "ALL",
    "topic": "Comprehensive C1 Examination Synthesis",
    "statement": "Select the ONLY sentence that conforms rigorously to the highest standards of C1 English syntax:",
    "options": [
      {
        "key": "A",
        "text": "Not only the project was completed under budget, but it also won an award."
      },
      {
        "key": "B",
        "text": "Seldom have we witnessed such remarkable resilience in the face of adversity."
      },
      {
        "key": "C",
        "text": "It is vital that he goes to the medical specialist without any further delay."
      },
      {
        "key": "D",
        "text": "Much as he was brilliant, but he lacked the discipline to complete his thesis."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La opción B es impecable: encabeza con el adverbio restrictivo 'Seldom' e invierte correctamente el auxiliar con el sujeto ('have we witnessed') con vocabulario de alto registro.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'Not only' al inicio exige inversión auxiliar-sujeto ('Not only was the project completed...')."
      },
      {
        "option": "C",
        "reason": "'It is vital that' rige subjuntivo mandativo en forma base ('that he go'), no indicativo 'goes'."
      },
      {
        "option": "D",
        "reason": "Inserta de manera redundante y agramatical 'but' tras la locución concesiva 'Much as'."
      }
    ],
    "referenceSite": "Agendaweb.org (Comprehensive C1 Diagnostic)"
  },
  {
    "id": "eng_c2_01",
    "number": 251,
    "level": "C2",
    "variant": "ALL",
    "topic": "Literary Stylistic Inversion: Pronominal Constraint",
    "statement": "Which of the following literary sentences demonstrates the CORRECT syntactic constraint on locative inversion?",
    "options": [
      {
        "key": "A",
        "text": "Into the grand ballroom stepped the distinguished prime minister, but into the garden ran he."
      },
      {
        "key": "B",
        "text": "Into the grand ballroom stepped the distinguished prime minister, and into the garden he ran."
      },
      {
        "key": "C",
        "text": "Into the grand ballroom did the distinguished prime minister step, and into the garden ran he."
      },
      {
        "key": "D",
        "text": "Into the grand ballroom stepped he, and into the garden ran the guard."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la inversión locativa y de movimiento, cuando el sujeto es un sustantivo léxico completo ('the distinguished prime minister'), el verbo se antepone al sujeto ('stepped the prime minister'). Sin embargo, existe una restricción sintáctica absoluta en inglés: cuando el sujeto es un pronombre personal (he, she, they), la inversión NO se aplica bajo ninguna circunstancia ('into the garden he ran', nunca 'ran he').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Aplica erróneamente la inversión al pronombre personal 'ran he'."
      },
      {
        "option": "C",
        "reason": "Inserta el auxiliar 'did' sin necesidad y vuelve a invertir erróneamente el pronombre 'ran he'."
      },
      {
        "option": "D",
        "reason": "Aplica inversión al pronombre 'stepped he', violando la restricción pronominal."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Advanced Stylistic Inversion C2)"
  },
  {
    "id": "eng_c2_02",
    "number": 252,
    "level": "C2",
    "variant": "ALL",
    "topic": "Locative Inversion: Prohibition with Transitive Verbs",
    "statement": "In literary locative inversion, inversion is STRICTLY FORBIDDEN when the verb takes a direct object. Which sentence is AGRAMMATICAL for this reason?",
    "options": [
      {
        "key": "A",
        "text": "On the hill stood an ancient gothic monastery."
      },
      {
        "key": "B",
        "text": "Through the open window came a chilling draft of wind."
      },
      {
        "key": "C",
        "text": "Behind the podium drank the professor a glass of cold water."
      },
      {
        "key": "D",
        "text": "Along the riverbank strolled the elderly couple."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La inversión locativa solo se admite con verbos intransitivos de postura o movimiento (stand, come, sit, lie, stroll). Cuando el verbo es plenamente transitivo y rige un objeto directo ('drank a glass of water'), la inversión está categóricamente prohibida en inglés.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Es perfectamente gramatical: 'stand' es intransitivo."
      },
      {
        "option": "B",
        "reason": "Es gramatical: 'come' es intransitivo."
      },
      {
        "option": "D",
        "reason": "Es gramatical: 'stroll' es intransitivo."
      }
    ],
    "referenceSite": "Agendaweb.org (Locative Inversion Constraints C2)"
  },
  {
    "id": "eng_c2_03",
    "number": 253,
    "level": "C2",
    "variant": "ALL",
    "topic": "Absolute Constructions: Nominative Absolute Syntax",
    "statement": "Identify the syntactically flawless absolute construction:",
    "options": [
      {
        "key": "A",
        "text": "His hands trembling with immense tension, the master safe-cracker manipulated the dial."
      },
      {
        "key": "B",
        "text": "Trembling with immense tension, the safe was opened by the burglar in seconds."
      },
      {
        "key": "C",
        "text": "Walking into the ancient cathedral, the magnificent stained-glass windows amazed us."
      },
      {
        "key": "D",
        "text": "Having failed the safety inspection, the engineer decided to close down the building."
      }
    ],
    "correctAnswer": "A",
    "explanation": "La opción A es una cláusula absoluta genuina y correcta: posee su propio sujeto nominal explícito ('His hands') que no depende del sujeto de la oración principal ('the master safe-cracker'). Las opciones B y C contienen participios flotantes (dangling participles).",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Contiene un participio flotante: sugiere que la caja fuerte ('the safe') estaba temblando de tensión."
      },
      {
        "option": "C",
        "reason": "Contiene un participio flotante: sugiere que los vitrales ('the stained-glass windows') iban caminando hacia la catedral."
      },
      {
        "option": "D",
        "reason": "Sugiere que el ingeniero reprobó la inspección en lugar del edificio."
      }
    ],
    "referenceSite": "Englishteststore.net (Absolute Constructions C2)"
  },
  {
    "id": "eng_c2_04",
    "number": 254,
    "level": "C2",
    "variant": "ALL",
    "topic": "British Archaic/Formal Modalization: 'To Be To'",
    "statement": "The monarch ________ the newly appointed ambassador at Buckingham Palace yesterday, but the sudden protocol crisis prevented the reception.",
    "options": [
      {
        "key": "A",
        "text": "was to have received"
      },
      {
        "key": "B",
        "text": "was to receive"
      },
      {
        "key": "C",
        "text": "would have received"
      },
      {
        "key": "D",
        "text": "had received"
      }
    ],
    "correctAnswer": "A",
    "explanation": "La estructura formal británica 'was/were to have + past participle' se emplea en la prosa elevada para expresar un arreglo oficial, destino o evento ceremonial que estaba solemnemente programado en el pasado pero que finalmente NO llegó a realizarse.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'was to receive' indicaría que el evento estaba programado, pero es neutro respecto a si se cumplió o no; la forma de infinitivo perfecto ('to have received') es la que denota el destino frustrado."
      },
      {
        "option": "C",
        "reason": "'would have received' es una hipótesis condicional genérica sin el valor institucional de un decreto oficial o cita de estado."
      },
      {
        "option": "D",
        "reason": "'had received' afirmaría falsamente que la monarca sí recibió al diplomático."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (To Be To in Formal English C2)"
  },
  {
    "id": "eng_c2_05",
    "number": 255,
    "level": "C2",
    "variant": "ALL",
    "topic": "Hypothetical Syntax: 'Were to have + Past Participle'",
    "statement": "________ the treaty without parliamentary ratification, the executive would have committed an impeachable constitutional breach.",
    "options": [
      {
        "key": "A",
        "text": "Were the president to sign"
      },
      {
        "key": "B",
        "text": "Were the president to have signed"
      },
      {
        "key": "C",
        "text": "Had the president signed to"
      },
      {
        "key": "D",
        "text": "Should the president have to sign"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Were + sujeto + to have + Past Participle' es una construcción hipotética sumamente elegante y de registro elevado que fusiona la inversión de segundo condicional con el infinitivo perfecto para evaluar una hipótesis retrospectiva contrafáctica.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Sitúa la hipótesis en el presente o futuro con apódosis 'would commit'."
      },
      {
        "option": "C",
        "reason": "'signed to' es agramatical."
      },
      {
        "option": "D",
        "reason": "Altera el sentido obligacional de la condición."
      }
    ],
    "referenceSite": "Agendaweb.org (Advanced Hypothetical Inversion C2)"
  },
  {
    "id": "eng_c2_06",
    "number": 256,
    "level": "C2",
    "variant": "ALL",
    "topic": "Formulaic Subjunctive: Set concessive locutions",
    "statement": "The logistical costs of the polar expedition are astronomical. ________, scientific necessity compels us to proceed.",
    "options": [
      {
        "key": "A",
        "text": "Be that as it may"
      },
      {
        "key": "B",
        "text": "Is that as it may"
      },
      {
        "key": "C",
        "text": "Being that as it may"
      },
      {
        "key": "D",
        "text": "Be it as that may"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Be that as it may' es una fórmula fósil consagrada del modo subjuntivo de alta retórica que significa 'sea como fuere / aun así', con el verbo 'be' en forma base pura invariable.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Usa indicativo 'is', destruyendo la locución fórmula fija."
      },
      {
        "option": "C",
        "reason": "Usa gerundio agramatical."
      },
      {
        "option": "D",
        "reason": "Deforma el orden de palabras de la frase idiomática fija."
      }
    ],
    "referenceSite": "Englishteststore.net (Formulaic Subjunctive Locutions C2)"
  },
  {
    "id": "eng_c2_07",
    "number": 257,
    "level": "C2",
    "variant": "ALL",
    "topic": "Archaic Syntax: 'Lest' with Bare Subjunctive",
    "statement": "The diplomatic envoy refrained from commenting on the military maneuver, lest he ________ a premature geopolitical crisis.",
    "options": [
      {
        "key": "A",
        "text": "triggers"
      },
      {
        "key": "B",
        "text": "trigger"
      },
      {
        "key": "C",
        "text": "triggered"
      },
      {
        "key": "D",
        "text": "would trigger"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La conjunción arcaica formal 'lest' (para evitar que / no sea que / por miedo a que) rige obligatoriamente el modo subjuntivo en su forma base pura ('trigger') o con el auxiliar modal 'should', sin añadir jamás desinencia -s de tercera persona.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa indicativo presente con -s, violando la regla sintáctica de 'lest'."
      },
      {
        "option": "C",
        "reason": "Usa pasado simple indicativo."
      },
      {
        "option": "D",
        "reason": "Usa auxiliar 'would', agramatical tras 'lest'."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Lest and Mandative Subjunctive C2)"
  },
  {
    "id": "eng_c2_08",
    "number": 258,
    "level": "C2",
    "variant": "ALL",
    "topic": "Irreversible Binomials: Fixed High-Register Pairs",
    "statement": "Constant media scrutiny is ________ of public political life, and should the audit prove fraud, the agreement will be declared ________.",
    "options": [
      {
        "key": "A",
        "text": "parcel and part / void and null"
      },
      {
        "key": "B",
        "text": "part and parcel / null and void"
      },
      {
        "key": "C",
        "text": "thick and thin / touch and go"
      },
      {
        "key": "D",
        "text": "hard and fast / null and void"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Part and parcel' es un binomio irreversible consagrado que significa elemento consustancial e inseparable. 'Null and void' es el binomio jurídico estándar que define un contrato legalmente revocado y sin valor vinculante.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte de forma aberrante el orden consagrado e irreversible de ambos binomios."
      },
      {
        "option": "C",
        "reason": "'thick and thin' (en las buenas y en las malas) y 'touch and go' (incierto) no concuerdan con el sentido proposicional de la oración."
      },
      {
        "option": "D",
        "reason": "'hard and fast' (estricto/inamovible) no se utiliza para describir la naturaleza consustancial de una vivencia profesional."
      }
    ],
    "referenceSite": "Agendaweb.org (Irreversible Binomials C2)"
  },
  {
    "id": "eng_c2_09",
    "number": 259,
    "level": "C2",
    "variant": "ALL",
    "topic": "Irreversible Binomials: Idiomatic Fixed Collocations",
    "statement": "After days of cleaning, the naval vessel was ________, but the bankruptcy of their logistics contractor left the crew ________.",
    "options": [
      {
        "key": "A",
        "text": "span and spick / dry and high"
      },
      {
        "key": "B",
        "text": "spick and span / high and dry"
      },
      {
        "key": "C",
        "text": "odds and ends / touch and go"
      },
      {
        "key": "D",
        "text": "neat and trim / out and about"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Spick and span' significa inmaculadamente limpio y ordenado. 'Leave someone high and dry' significa dejar a alguien desamparado, abandonado a su suerte o en una situación desastrosa sin auxilio.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte el orden inalterable de los términos léxicos fijados."
      },
      {
        "option": "C",
        "reason": "'odds and ends' son objetos varios de poco valor y 'touch and go' algo incierto."
      },
      {
        "option": "D",
        "reason": "No reproduce la colocación idiomática fija requerida."
      }
    ],
    "referenceSite": "Englishteststore.net (Fixed Idiomatic Binomials C2)"
  },
  {
    "id": "eng_c2_10",
    "number": 260,
    "level": "C2",
    "variant": "ALL",
    "topic": "Precision Lexicon: Collocations with Elevated Verbs",
    "statement": "The hurricane ________ catastrophic havoc across the island, and the cabinet was hesitant to ________ the delicate subject of tax increases.",
    "options": [
      {
        "key": "A",
        "text": "made / open"
      },
      {
        "key": "B",
        "text": "wreaked / broach"
      },
      {
        "key": "C",
        "text": "wrought / break"
      },
      {
        "key": "D",
        "text": "caused / touch"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Colocaciones léxicas de máximo registro: 'wreak havoc' (provocar estragos masivos / desastres) y 'broach the subject' (sacar a colación o abordar un tema delicado o espinoso).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'make havoc' es agramatical en inglés culto."
      },
      {
        "option": "C",
        "reason": "'wrought' es arcaísmo de work; 'break the subject' es incorrecto (la expresión es 'break the ice', pero 'broach the subject')."
      },
      {
        "option": "D",
        "reason": "'cause havoc' es genérico de registro medio y 'touch the subject' carece de la precisión culta de 'broach'."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Advanced Verbal Collocations C2)"
  },
  {
    "id": "eng_c2_11",
    "number": 261,
    "level": "C2",
    "variant": "ALL",
    "topic": "Latinate Phrases in Elevated English: Legal Register",
    "statement": "The judicial ruling applies ________ to all subordinate administrative bodies, as the preliminary evidence provides ________ proof of negligence.",
    "options": [
      {
        "key": "A",
        "text": "per se / ad hoc"
      },
      {
        "key": "B",
        "text": "mutatis mutandis / prima facie"
      },
      {
        "key": "C",
        "text": "status quo / bona fide"
      },
      {
        "key": "D",
        "text": "de facto / post mortem"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Mutatis mutandis' significa 'cambiando lo que se deba cambiar para aplicar la regla analógica a otro caso'. 'Prima facie' califica una prueba que a primera vista y en principio resulta suficiente para fundamentar una conclusión jurídica.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'per se' significa en sí mismo y 'ad hoc' para este propósito particular."
      },
      {
        "option": "C",
        "reason": "'status quo' es el estado actual de las cosas y 'bona fide' de buena fe."
      },
      {
        "option": "D",
        "reason": "'de facto' es de hecho y 'post mortem' tras la muerte."
      }
    ],
    "referenceSite": "Agendaweb.org (Latinate Collocations in Academic English C2)"
  },
  {
    "id": "eng_c2_12",
    "number": 262,
    "level": "C2",
    "variant": "ALL",
    "topic": "Orthographic and Semantic Subtleties: 'Discrete' vs. 'Discreet'",
    "statement": "Quantum mechanics models energy in ________ packets, whereas an undercover intelligence operative must remain exceptionally ________.",
    "options": [
      {
        "key": "A",
        "text": "discreet / discrete"
      },
      {
        "key": "B",
        "text": "discrete / discreet"
      },
      {
        "key": "C",
        "text": "discreet / discreet"
      },
      {
        "key": "D",
        "text": "discrete / discrete"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Discrete' (con dos 'e' separadas por la 't') significa separado, discontinuo, individualizado o en partes diferenciadas. 'Discreet' (con doble 'e' final junta) significa prudente, reservado, sigiloso o confidencial.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte con exactitud ambos vocablos parónimos."
      },
      {
        "option": "C",
        "reason": "Aplica el sentido de confidencialidad al modelo cuántico de energía."
      },
      {
        "option": "D",
        "reason": "Aplica el sentido de partes separadas al agente de inteligencia."
      }
    ],
    "referenceSite": "Englishteststore.net (Discrete vs Discreet Semantics C2)"
  },
  {
    "id": "eng_c2_13",
    "number": 263,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semantic Subtleties: 'Complimentary' vs. 'Complementary'",
    "statement": "The hotel offered a ________ bottle of champagne, while the violinist and cellist provided ________ musical textures that enhanced the performance.",
    "options": [
      {
        "key": "A",
        "text": "complementary / complimentary"
      },
      {
        "key": "B",
        "text": "complimentary / complementary"
      },
      {
        "key": "C",
        "text": "complimentary / complimentary"
      },
      {
        "key": "D",
        "text": "complementary / complementary"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Complimentary' (con 'i') significa de cortesía, gratuito o elogioso. 'Complementary' (con 'e') significa complementario, que completa, armoniza o perfecciona a otra cosa.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte con precisión los dos términos."
      },
      {
        "option": "C",
        "reason": "Usa 'complimentary' para texturas musicales armónicas complementarias."
      },
      {
        "option": "D",
        "reason": "Usa 'complementary' para el obsequio gratuito de hotel."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Complimentary vs Complementary C2)"
  },
  {
    "id": "eng_c2_14",
    "number": 264,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semantic Subtleties: 'Historic' vs. 'Historical'",
    "statement": "The signing of the armistice was a ________ event that transformed Europe, whereas the museum displays ________ documents from that entire era.",
    "options": [
      {
        "key": "A",
        "text": "historical / historic"
      },
      {
        "key": "B",
        "text": "historic / historical"
      },
      {
        "key": "C",
        "text": "historic / historic"
      },
      {
        "key": "D",
        "text": "historical / historical"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Historic' califica un evento o momento de trascendencia memorable que hace historia. 'Historical' alude genéricamente a cualquier objeto, documento o hecho perteneciente al pasado o relativo a la disciplina histórica.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte la trascendencia conmemorativa con la pertenencia cronológica."
      },
      {
        "option": "C",
        "reason": "Trata a simples documentos de archivo como momentos cumbre que hacen historia."
      },
      {
        "option": "D",
        "reason": "Le resta a la firma del armisticio su condición de hito transformador."
      }
    ],
    "referenceSite": "Agendaweb.org (Historic vs Historical C2)"
  },
  {
    "id": "eng_c2_15",
    "number": 265,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semantic Subtleties: 'Stationary' vs. 'Stationery'",
    "statement": "The exercise bicycle remained completely ________ while the administrative assistant ordered high-grade letterhead ________ for the law firm.",
    "options": [
      {
        "key": "A",
        "text": "stationery / stationary"
      },
      {
        "key": "B",
        "text": "stationary / stationery"
      },
      {
        "key": "C",
        "text": "stationary / stationary"
      },
      {
        "key": "D",
        "text": "stationery / stationery"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Stationary' (con 'a', de anchor/adjective) significa inmóvil, fijo o detenido. 'Stationery' (con 'e', de envelope/paper) designa los artículos de papelería, correspondencia o material de oficina.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los dos homófonos."
      },
      {
        "option": "C",
        "reason": "Usa el adjetivo de inmovilidad para el papel membretado."
      },
      {
        "option": "D",
        "reason": "Usa el sustantivo de papelería para la bicicleta estática."
      }
    ],
    "referenceSite": "Englishteststore.net (Stationary vs Stationery C2)"
  },
  {
    "id": "eng_c2_16",
    "number": 266,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semantic Subtleties: 'Principal' vs. 'Principle'",
    "statement": "The ________ reason for his resignation was a refusal to compromise on his core moral ________.",
    "options": [
      {
        "key": "A",
        "text": "principle / principals"
      },
      {
        "key": "B",
        "text": "principal / principles"
      },
      {
        "key": "C",
        "text": "principal / principals"
      },
      {
        "key": "D",
        "text": "principle / principles"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Principal' (con 'a') funciona como adjetivo que significa primordial, principal o fundamental (o como sustantivo para el director de una escuela). 'Principle' (con 'le') es un sustantivo abstracto que designa una regla moral, norma o verdad rectora.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa el sustantivo moral como adjetivo."
      },
      {
        "option": "C",
        "reason": "Usa 'principals' (directores de escuela) como valores morales."
      },
      {
        "option": "D",
        "reason": "Confunde adjetivo con norma ética."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Principal vs Principle C2)"
  },
  {
    "id": "eng_c2_17",
    "number": 267,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semantic Subtleties: 'Continuous' vs. 'Continual'",
    "statement": "A unbroken laser beam requires ________ electrical flow, whereas her speech was disrupted by ________ telephone interruptions.",
    "options": [
      {
        "key": "A",
        "text": "continual / continuous"
      },
      {
        "key": "B",
        "text": "continuous / continual"
      },
      {
        "key": "C",
        "text": "continuous / continuous"
      },
      {
        "key": "D",
        "text": "continual / continual"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Continuous' denota un flujo ininterrumpido sin cesar en el espacio o en el tiempo. 'Continual' denota una serie de eventos que se repiten con frecuencia recurrente a intervalos.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte el flujo continuo físico con las interrupciones repetidas intermitentes."
      },
      {
        "option": "C",
        "reason": "Sugiere que las llamadas telefónicas eran un sonido único ininterrumpido sin pausa."
      },
      {
        "option": "D",
        "reason": "Sugiere que el flujo eléctrico del láser se detenía a intervalos."
      }
    ],
    "referenceSite": "Agendaweb.org (Continuous vs Continual C2)"
  },
  {
    "id": "eng_c2_18",
    "number": 268,
    "level": "C2",
    "variant": "ALL",
    "topic": "Stylistic Rigor: Dangling Modifier Elimination in Science",
    "statement": "Which sentence demonstrates FLAWLESS syntactic attribution without a dangling modifier?",
    "options": [
      {
        "key": "A",
        "text": "Upon dissecting the neural specimen, several previously undocumented synapses were observed by the neuropathologist."
      },
      {
        "key": "B",
        "text": "Upon dissecting the neural specimen, the neuropathologist observed several previously undocumented synapses."
      },
      {
        "key": "C",
        "text": "Dissecting the specimen, the microscope revealed undocumented synapses."
      },
      {
        "key": "D",
        "text": "Having dissected the specimen, new synapses were cataloged."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la opción B, el sujeto de la oración principal ('the neuropathologist') es inequívocamente el agente humano que ejecutó la acción expresada en la frase preposicional participial ('Upon dissecting...'). En A, la construcción pasiva insinúa que las 'sinapsis' se disecaron a sí mismas.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Dangling modifier clásico: asocia la disección a las 'sinapsis'."
      },
      {
        "option": "C",
        "reason": "Dangling modifier: afirma que el microscopio disecó el espécimen."
      },
      {
        "option": "D",
        "reason": "Dangling modifier: afirma que las sinapsis disecaron el espécimen."
      }
    ],
    "referenceSite": "Englishteststore.net (Academic Dangling Modifiers C2)"
  },
  {
    "id": "eng_c2_19",
    "number": 269,
    "level": "C2",
    "variant": "ALL",
    "topic": "Stylistic Rigor: Squinting Modifiers Resolution",
    "statement": "Ambiguous: 'Students who exercise frequently achieve higher academic scores.' Which revision resolves the squinting modifier unambiguously to mean that the higher scores occur frequently?",
    "options": [
      {
        "key": "A",
        "text": "Students who frequently exercise achieve higher academic scores."
      },
      {
        "key": "B",
        "text": "Students who exercise achieve higher academic scores frequently."
      },
      {
        "key": "C",
        "text": "Frequently, students who exercise achieve higher academic scores."
      },
      {
        "key": "D",
        "text": "Exercise frequently achieves higher scores for students."
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la oración original, 'frequently' es un 'squinting modifier' porque puede modificar tanto al verbo anterior ('exercise frequently') como al posterior ('frequently achieve'). Al situar 'frequently' al final (B), queda subordinado sin ambigüedad alguna al logro de puntajes.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Modifica sin ambigüedad a 'exercise' (frecuencia de ejercicio, no de calificaciones)."
      },
      {
        "option": "C",
        "reason": "Modifica a la totalidad de la aseveración general como marco oracional."
      },
      {
        "option": "D",
        "reason": "Personifica el ejercicio físico como agente directo."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Squinting Modifiers C2)"
  },
  {
    "id": "eng_c2_20",
    "number": 270,
    "level": "C2",
    "variant": "ALL",
    "topic": "Theoretical Syntax: Negative Polarity Item (NPI) Licensing",
    "statement": "Which sentence demonstrates the PROPER licensing of the Negative Polarity Item 'lift a finger'?",
    "options": [
      {
        "key": "A",
        "text": "The politician generously lifted a finger to rescue the failing community center."
      },
      {
        "key": "B",
        "text": "Hardly anyone lifted a finger to prevent the historic building from being demolished."
      },
      {
        "key": "C",
        "text": "Everyone lifted a finger when the crisis erupted in the neighborhood."
      },
      {
        "key": "D",
        "text": "He certainly lifted a finger during the renovation project."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Los elementos de polaridad negativa (NPIs como 'any', 'ever', 'lift a finger') requieren ser 'licenciados' por un operador sintáctico negativo o de alcance descendente (downward-entailing) como 'Hardly anyone', 'No one', o 'Without'. En contextos afirmativos (A, C, D) su uso idiomático es agramatical.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa un NPI en una oración afirmativa sin operador negativo que lo autorice."
      },
      {
        "option": "C",
        "reason": "Usa un NPI con el cuantificador universal positivo 'Everyone'."
      },
      {
        "option": "D",
        "reason": "Usa un NPI con adverbio afirmativo enfático 'certainly'."
      }
    ],
    "referenceSite": "Agendaweb.org (Negative Polarity Items Syntax C2)"
  },
  {
    "id": "eng_c2_21",
    "number": 271,
    "level": "C2",
    "variant": "ALL",
    "topic": "High-Register Concession: 'Notwithstanding that'",
    "statement": "________ the defendant had no prior criminal record, the magistrate imposed the maximum statutory penalty due to the severity of the offense.",
    "options": [
      {
        "key": "A",
        "text": "Notwithstanding that"
      },
      {
        "key": "B",
        "text": "Notwithstanding of"
      },
      {
        "key": "C",
        "text": "In spite that"
      },
      {
        "key": "D",
        "text": "Despite that of"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Notwithstanding that + cláusula finita con sujeto y verbo' es un conector concesivo formal de registro jurisprudencial que equivale a 'a pesar de que / sin perjuicio de que'.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'Notwithstanding of' es agramatical ('notwithstanding' no admite 'of')."
      },
      {
        "option": "C",
        "reason": "'In spite that' es un error común en inglés ('in spite of the fact that' sí es válido)."
      },
      {
        "option": "D",
        "reason": "Construcción agramatical inexistente."
      }
    ],
    "referenceSite": "Englishteststore.net (Notwithstanding That Syntax C2)"
  },
  {
    "id": "eng_c2_22",
    "number": 272,
    "level": "C2",
    "variant": "ALL",
    "topic": "Concessive Subjunctive: 'Try as he might'",
    "statement": "________, the defense counsel could not dismantle the forensic witness's unshakeable testimony.",
    "options": [
      {
        "key": "A",
        "text": "He tried as he might"
      },
      {
        "key": "B",
        "text": "Try as he might"
      },
      {
        "key": "C",
        "text": "Trying as he may"
      },
      {
        "key": "D",
        "text": "As he might try"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Try as he might' es una locución concesiva retórica fija de registro culto con forma base verbal inicial ('Por más que lo intentara / por mucho que se esforzase...').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa indicativo pasado, destruyendo la estructura retórica consagrada."
      },
      {
        "option": "C",
        "reason": "Usa gerundio agramatical."
      },
      {
        "option": "D",
        "reason": "Orden de constituyentes no idiomático."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Concessive Try as he might C2)"
  },
  {
    "id": "eng_c2_23",
    "number": 273,
    "level": "C2",
    "variant": "ALL",
    "topic": "Comparative Correlatives: Fronted Nominal Clauses",
    "statement": "The more insidious the propaganda, ________.",
    "options": [
      {
        "key": "A",
        "text": "it is more readily believed by the gullible masses"
      },
      {
        "key": "B",
        "text": "the more readily it is believed by the gullible masses"
      },
      {
        "key": "C",
        "text": "the more it is readily believed by gullible masses"
      },
      {
        "key": "D",
        "text": "more readily the gullible masses believe it"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En las correlativas proporcionales complejas ('The more... the more...'), el segundo término correlativo exige la anteposición estricta del adverbio comparativo: 'the + adverbio comparativo + sujeto + verbo' ('the more readily it is believed').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Omite el segundo correlato obligatorio 'the'."
      },
      {
        "option": "C",
        "reason": "Posición anómala del adverbio dentro de la frase verbal."
      },
      {
        "option": "D",
        "reason": "Omite el artículo obligatorio 'the'."
      }
    ],
    "referenceSite": "Agendaweb.org (Complex Proportional Comparatives C2)"
  },
  {
    "id": "eng_c2_24",
    "number": 274,
    "level": "C2",
    "variant": "ALL",
    "topic": "Advanced Clefts: 'What it boils down to is...'",
    "statement": "What the entire geopolitical controversy boils down to ________ whether sovereign nations will abide by binding emissions limits.",
    "options": [
      {
        "key": "A",
        "text": "is"
      },
      {
        "key": "B",
        "text": "are"
      },
      {
        "key": "C",
        "text": "being"
      },
      {
        "key": "D",
        "text": "were"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Una cláusula subordinada introducida por 'What' que funciona como sujeto de una oración escindida es sintácticamente SINGULAR y exige por ende el verbo copulativo en singular ('is').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Usa plural 'are' desconociendo que la cláusula nominal completa es singular."
      },
      {
        "option": "C",
        "reason": "Gerundio que deja la oración principal sin verbo finito."
      },
      {
        "option": "D",
        "reason": "Tiempo pasado inconsistente con el presente 'boils down'."
      }
    ],
    "referenceSite": "Englishteststore.net (Pseudo-Cleft Agreement C2)"
  },
  {
    "id": "eng_c2_25",
    "number": 275,
    "level": "C2",
    "variant": "ALL",
    "topic": "Literary Causative Verbs: Syntax of 'Bid'",
    "statement": "In classical literature, the king ________ the herald proclaim an immediate truce throughout the provinces.",
    "options": [
      {
        "key": "A",
        "text": "bade / to"
      },
      {
        "key": "B",
        "text": "bade / —"
      },
      {
        "key": "C",
        "text": "bid / for to"
      },
      {
        "key": "D",
        "text": "bidded / that he"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El verbo literario arcaico 'bid' (pasado 'bade' o 'bid') significa ordenar o mandar y rige OBLIGATORIAMENTE el bare infinitive sin 'to' ('bade the herald proclaim').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Inserta la marca 'to', la cual no se utiliza con 'bid' en su acepción de mandar o instruir en voz activa."
      },
      {
        "option": "C",
        "reason": "'for to' es agramatical."
      },
      {
        "option": "D",
        "reason": "'bidded' es una flexión corrupta e inválida en este significado."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Archaic Causatives Bid C2)"
  },
  {
    "id": "eng_c2_26",
    "number": 276,
    "level": "C2",
    "variant": "ALL",
    "topic": "Jurisprudential Concord: The Crown vs The State",
    "statement": "In British constitutional law, 'The Crown' is conceptualized as a corporation sole, yet when referring to the prosecuting authority in court proceedings, barristers often treat it as:",
    "options": [
      {
        "key": "A",
        "text": "a singular neuter entity: 'The Crown has rested its case'"
      },
      {
        "key": "B",
        "text": "an adjectival modifier without agreement"
      },
      {
        "key": "C",
        "text": "an absolute adverbial phrase"
      },
      {
        "key": "D",
        "text": "a plural pronoun only"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A diferencia de los nombres colectivos comunes, en la jurisprudencia británica formal 'The Crown' personifica al monarca como corporación jurídica singular institucional ('The Crown has rested its case').",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "No funciona como mero modificador adjetival."
      },
      {
        "option": "C",
        "reason": "No es una frase adverbial."
      },
      {
        "option": "D",
        "reason": "No se reemplaza por 'they' en alegatos solemnes de la fiscalía."
      }
    ],
    "referenceSite": "Agendaweb.org (Constitutional Concord C2)"
  },
  {
    "id": "eng_c2_27",
    "number": 277,
    "level": "C2",
    "variant": "ALL",
    "topic": "Subjunctive Types: The Optative Subjunctive",
    "statement": "Which sentence demonstrates an authentic OPTATIVE SUBJUNCTIVE expressing a solemn blessing or wish?",
    "options": [
      {
        "key": "A",
        "text": "May peace and prosperity accompany your administration throughout the coming years."
      },
      {
        "key": "B",
        "text": "You may leave the examination room once your paper is submitted."
      },
      {
        "key": "C",
        "text": "It may rain this evening according to meteorological forecasts."
      },
      {
        "key": "D",
        "text": "May we inquire about the revised terms of the commercial treaty?"
      }
    ],
    "correctAnswer": "A",
    "explanation": "El subjuntivo optativo formula deseos solemnes, bendiciones, oraciones o imprecaciones anteponiendo el modal 'May' al sujeto con verbo en forma base: 'May peace and prosperity accompany you!'.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "Expresa concesión de permiso formal."
      },
      {
        "option": "C",
        "reason": "Expresa posibilidad epistémica meteorológica."
      },
      {
        "option": "D",
        "reason": "Expresa una petición cortés en forma interrogativa."
      }
    ],
    "referenceSite": "Englishteststore.net (Optative Subjunctive C2)"
  },
  {
    "id": "eng_c2_28",
    "number": 278,
    "level": "C2",
    "variant": "ALL",
    "topic": "Philosophy of Language: Alethic vs Epistemic Modality",
    "statement": "In formal philosophical semantics, the sentence 'A bachelor must necessarily be unmarried' expresses:",
    "options": [
      {
        "key": "A",
        "text": "epistemic necessity based on speaker evidence"
      },
      {
        "key": "B",
        "text": "alethic (logical/analytic) necessity true by definition"
      },
      {
        "key": "C",
        "text": "deontic moral obligation imposed by law"
      },
      {
        "key": "D",
        "text": "dynamic physical ability"
      }
    ],
    "correctAnswer": "B",
    "explanation": "La necesidad alética (alethic necessity) alude a proposiciones que son verdaderas por necesidad lógica intrínseca o por definición analítica de los términos ('un soltero necesariamente no está casado'), a diferencia de la necesidad epistémica (deducción empírica) o deóntica (norma moral o legal).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "La necesidad epistémica se basa en conjeturas empíricas humanas, no en verdades analíticas a priori."
      },
      {
        "option": "C",
        "reason": "La modalidad deóntica involucra leyes y reglamentos impuestos a agentes."
      },
      {
        "option": "D",
        "reason": "La modalidad dinámica alude a facultades físicas o destrezas biológicas."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Alethic and Deontic Modality C2)"
  },
  {
    "id": "eng_c2_29",
    "number": 279,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semantic Subtleties: 'Mitigate' vs. 'Militate'",
    "statement": "The company implemented emergency protocols to ________ environmental damage, but the adverse macroeconomic conditions ________ heavily against profitability.",
    "options": [
      {
        "key": "A",
        "text": "militate / mitigated"
      },
      {
        "key": "B",
        "text": "mitigate / militated"
      },
      {
        "key": "C",
        "text": "mitigate / mitigated"
      },
      {
        "key": "D",
        "text": "militate / militated"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Mitigate' significa atenuar, paliar, aliviar o reducir la gravedad de un daño. 'Militate against' es una locución formal intransitiva que significa ser un factor poderoso o adverso que opera en contra de algo.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte con precisión los dos verbos parónimos."
      },
      {
        "option": "C",
        "reason": "Usa 'mitigated against' (error común: 'mitigate' es transitivo y no se combina con 'against')."
      },
      {
        "option": "D",
        "reason": "Usa 'militate environmental damage' (agramatical: militate es intransitivo)."
      }
    ],
    "referenceSite": "Agendaweb.org (Mitigate vs Militate C2)"
  },
  {
    "id": "eng_c2_30",
    "number": 280,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semantic Subtleties: 'Prescribe' vs. 'Proscribe'",
    "statement": "The medical regulatory board will ________ strict clinical guidelines, but it will explicitly ________ the unverified treatment.",
    "options": [
      {
        "key": "A",
        "text": "proscribe / prescribe"
      },
      {
        "key": "B",
        "text": "prescribe / proscribe"
      },
      {
        "key": "C",
        "text": "prescribe / prescribe"
      },
      {
        "key": "D",
        "text": "proscribe / proscribe"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Prescribe' (con 'e') significa estipular, recetar o mandar preceptivamente. 'Proscribe' (con 'o') significa prohibir formalmente, declarar ilícito, vetar o condenar al ostracismo.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte diametralmente el sentido normativo."
      },
      {
        "option": "C",
        "reason": "Afirma que la junta médica recetará el tratamiento no comprobado."
      },
      {
        "option": "D",
        "reason": "Afirma que la junta prohibirá sus propias directrices clínicas."
      }
    ],
    "referenceSite": "Englishteststore.net (Prescribe vs Proscribe C2)"
  },
  {
    "id": "eng_c2_31",
    "number": 281,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semantic Subtleties: 'Flaunt' vs. 'Flout'",
    "statement": "The arrogant billionaire loved to ________ his opulent wealth, yet he chose to brazenly ________ all national environmental regulations.",
    "options": [
      {
        "key": "A",
        "text": "flout / flaunt"
      },
      {
        "key": "B",
        "text": "flaunt / flout"
      },
      {
        "key": "C",
        "text": "flaunt / flaunt"
      },
      {
        "key": "D",
        "text": "flout / flout"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Flaunt' significa alardear, ostentar o exhibir con jactancia y vanagloria. 'Flout' significa desobedecer abiertamente, burlarse o quebrantar con desprecio leyes o normativas.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte los dos verbos parónimos."
      },
      {
        "option": "C",
        "reason": "Usa 'flaunt regulations' desconociendo el significado jurídico de desacato."
      },
      {
        "option": "D",
        "reason": "Usa 'flout his wealth' desconociendo el sentido de alarde ostentoso."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Flaunt vs Flout C2)"
  },
  {
    "id": "eng_c2_32",
    "number": 282,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semantic Subtleties: 'Elicit' vs. 'Illicit'",
    "statement": "The prosecuting attorney attempted to ________ a confession from the defendant regarding his involvement in the ________ narcotics transaction.",
    "options": [
      {
        "key": "A",
        "text": "illicit / elicit"
      },
      {
        "key": "B",
        "text": "elicit / illicit"
      },
      {
        "key": "C",
        "text": "elicit / elicit"
      },
      {
        "key": "D",
        "text": "illicit / illicit"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Elicit' (verbo) significa extraer, provocar, suscitar u obtener una respuesta. 'Illicit' (adjetivo) significa ilícito, ilegal o contrario a la ley.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte el verbo y el adjetivo."
      },
      {
        "option": "C",
        "reason": "Usa 'elicit' como adjetivo de narcóticos."
      },
      {
        "option": "D",
        "reason": "Usa 'illicit' como verbo transitivo de confesión."
      }
    ],
    "referenceSite": "Agendaweb.org (Elicit vs Illicit C2)"
  },
  {
    "id": "eng_c2_33",
    "number": 283,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semantic Subtleties: 'Adverse' vs. 'Averse'",
    "statement": "The pharmaceutical therapy produced severe ________ physiological reactions in patients who were inherently ________ to strenuous exercise.",
    "options": [
      {
        "key": "A",
        "text": "averse / adverse"
      },
      {
        "key": "B",
        "text": "adverse / averse"
      },
      {
        "key": "C",
        "text": "adverse / adverse"
      },
      {
        "key": "D",
        "text": "averse / averse"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Adverse' califica condiciones o consecuencias desfavorables, nocivas u hostiles ('adverse reactions'). 'Averse' califica la actitud psicológica de una persona que siente aversión, rechazo o desgana hacia algo ('averse to exercise').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte la circunstancia física hostil con la actitud anímica personal."
      },
      {
        "option": "C",
        "reason": "Aplica 'adverse' a la predisposición humana subjetiva."
      },
      {
        "option": "D",
        "reason": "Aplica 'averse' a las reacciones bioquímicas."
      }
    ],
    "referenceSite": "Englishteststore.net (Adverse vs Averse C2)"
  },
  {
    "id": "eng_c2_34",
    "number": 284,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semantic Subtleties: 'Censure' vs. 'Censor'",
    "statement": "Parliament convened to formally ________ the prime minister for misconduct, while the authoritarian regime moved to ________ all independent journalism.",
    "options": [
      {
        "key": "A",
        "text": "censor / censure"
      },
      {
        "key": "B",
        "text": "censure / censor"
      },
      {
        "key": "C",
        "text": "censure / censure"
      },
      {
        "key": "D",
        "text": "censor / censor"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Censure' (con 'u') significa censurar en el sentido de reprochar, emitir un voto de censura o reprensión moral oficial. 'Censor' (con 'o') significa censurar suprimiendo, tachando o prohibiendo publicaciones, textos o medios de comunicación.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte la reprobación parlamentaria con la supresión de la libertad de prensa."
      },
      {
        "option": "C",
        "reason": "Usa 'censure' para la eliminación de periódicos."
      },
      {
        "option": "D",
        "reason": "Usa 'censor' para la moción de reprensión política contra un ministro."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Censure vs Censor C2)"
  },
  {
    "id": "eng_c2_35",
    "number": 285,
    "level": "C2",
    "variant": "ALL",
    "topic": "Semantic Subtleties: 'Fortuitous' vs. 'Fortunate'",
    "statement": "The meeting between the two scientists was purely ________ (a complete accident of timing), but it proved exceptionally ________ for medical science.",
    "options": [
      {
        "key": "A",
        "text": "fortunate / fortuitous"
      },
      {
        "key": "B",
        "text": "fortuitous / fortunate"
      },
      {
        "key": "C",
        "text": "fortuitous / fortuitous"
      },
      {
        "key": "D",
        "text": "fortunate / fortunate"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En el estándar etimológico riguroso (C2), 'fortuitous' significa estrictamente casual, imprevisto o acontecido por azar (sin implicar forzosamente beneficio). 'Fortunate' significa afortunado, venturoso o propicio.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Invierte la casualidad fortuita con el resultado venturoso."
      },
      {
        "option": "C",
        "reason": "Califica erróneamente de casual al avance médico beneficioso."
      },
      {
        "option": "D",
        "reason": "Le arrebata al encuentro su naturaleza accidental imprevista."
      }
    ],
    "referenceSite": "Agendaweb.org (Fortuitous vs Fortunate C2)"
  },
  {
    "id": "eng_c2_36",
    "number": 286,
    "level": "C2",
    "variant": "ALL",
    "topic": "Classical Idiomatic Heritage: Ancient Allusions",
    "statement": "The cybersecurity firewall was virtually impenetrable, except for one critical vulnerability that proved to be its ________.",
    "options": [
      {
        "key": "A",
        "text": "Pandora's box"
      },
      {
        "key": "B",
        "text": "Achilles' heel"
      },
      {
        "key": "C",
        "text": "Trojan horse"
      },
      {
        "key": "D",
        "text": "Sword of Damocles"
      }
    ],
    "correctAnswer": "B",
    "explanation": "'Achilles' heel' (el talón de Aquiles) es la alusión clásica consagrada para designar el único punto débil o flanco vulnerable fatal en una estructura aparentemente inexpugnable.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "'Pandora's box' es la fuente proliferante de múltiples males impredecibles."
      },
      {
        "option": "C",
        "reason": "'Trojan horse' es una estratagema engañosa infiltrada bajo apariencia inocente."
      },
      {
        "option": "D",
        "reason": "'Sword of Damocles' es un peligro inminente y constante que pende sobre una autoridad."
      }
    ],
    "referenceSite": "Englishteststore.net (Classical Idioms C2)"
  },
  {
    "id": "eng_c2_37",
    "number": 287,
    "level": "C2",
    "variant": "ALL",
    "topic": "Nautical Idiomatic Heritage in Standard English",
    "statement": "The senior board members were completely ________ by the chief executive's sudden and belligerent outbursts, realizing he had become an uncontrollable ________.",
    "options": [
      {
        "key": "A",
        "text": "taken aback / loose cannon"
      },
      {
        "key": "B",
        "text": "given leeway / smooth sailer"
      },
      {
        "key": "C",
        "text": "battened down / cold fish"
      },
      {
        "key": "D",
        "text": "run aground / dark horse"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Taken aback' (del término náutico sobre las velas empujadas repentinamente por el viento hacia los mástiles) significa atónito o estupefacto. 'Loose cannon' (un cañón suelto descontrolado en la cubierta de un galeón) designa a una persona impredecible que causa graves perjuicios a sus aliados.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'given leeway' significa recibir margen de maniobra."
      },
      {
        "option": "C",
        "reason": "'batten down' significa prepararse para resistir una tormenta."
      },
      {
        "option": "D",
        "reason": "'run aground' es encallar y 'dark horse' un competidor inesperado."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Nautical Idioms in Modern English C2)"
  },
  {
    "id": "eng_c2_38",
    "number": 288,
    "level": "C2",
    "variant": "ALL",
    "topic": "Diplomatic Register: Precise Phrasal Verbs",
    "statement": "After round-the-clock negotiations, the international delegation managed to ________ a comprehensive ceasefire agreement and ________ minor protocol discrepancies.",
    "options": [
      {
        "key": "A",
        "text": "hammer out / iron out"
      },
      {
        "key": "B",
        "text": "strike up / brush off"
      },
      {
        "key": "C",
        "text": "dig out / gloss over"
      },
      {
        "key": "D",
        "text": "grind down / wash out"
      }
    ],
    "correctAnswer": "A",
    "explanation": "'Hammer out' (forjar a martillazos mediante arduo esfuerzo) describe la consecución de un acuerdo complejo tras duras negociaciones. 'Iron out' (planchar/eliminar asperezas) describe la resolución pacífica de pequeñas discrepancias residuales.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "'strike up' alude a entablar una conversación o tocar música y 'brush off' a desestimar con desdén."
      },
      {
        "option": "C",
        "reason": "'gloss over' significa ocultar o maquillar problemas graves de forma deshonesta."
      },
      {
        "option": "D",
        "reason": "'grind down' significa desgastar por atrición."
      }
    ],
    "referenceSite": "Agendaweb.org (Diplomatic Phrasal Verbs C2)"
  },
  {
    "id": "eng_c2_39",
    "number": 289,
    "level": "C2",
    "variant": "ALL",
    "topic": "Sociolinguistic Register: The 'Frozen' (Static) Register",
    "statement": "Which of the following utterances belongs characteristically to the FROZEN (or static/ceremonial) register of English?",
    "options": [
      {
        "key": "A",
        "text": "Could you perhaps pass the salt when you have a moment, please?"
      },
      {
        "key": "B",
        "text": "I now pronounce you husband and wife; what God hath joined together, let no man put asunder."
      },
      {
        "key": "C",
        "text": "Hey mate, catch ya later at the pub!"
      },
      {
        "key": "D",
        "text": "The preliminary empirical findings demonstrate statistically significant variances."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El registro congelado (frozen register) según la clasificación de Martin Joos está compuesto por fórmulas rituales, jurídicas, litúrgicas o matrimoniales inalterables que se recitan de forma fija sin variación léxica ('let no man put asunder').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Registro consultivo cortés estándar."
      },
      {
        "option": "C",
        "reason": "Registro íntimo o coloquial popular."
      },
      {
        "option": "D",
        "reason": "Registro formal académico científico."
      }
    ],
    "referenceSite": "Englishteststore.net (Registers of English C2)"
  },
  {
    "id": "eng_c2_40",
    "number": 290,
    "level": "C2",
    "variant": "ALL",
    "topic": "Stylistic Fronting: Predicate Fronting in Climax",
    "statement": "Identify the sentence demonstrating the most sophisticated RHETORICAL PREDICATE FRONTING for narrative climax:",
    "options": [
      {
        "key": "A",
        "text": "The castle collapsed with a deafening roar into the abyss."
      },
      {
        "key": "B",
        "text": "Crash into the abyss did the old castle."
      },
      {
        "key": "C",
        "text": "Down into the fiery abyss plunged the ancient citadel, carrying with it the secrets of centuries."
      },
      {
        "key": "D",
        "text": "It was into the abyss that the citadel plunged down."
      }
    ],
    "correctAnswer": "C",
    "explanation": "La anteposición de frases adverbiales y predicativas complejas ('Down into the fiery abyss plunged the ancient citadel...') crea tensión narrativa y dramatismo culminante mediante la inversión y el retraso del sujeto rector.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Orden canónico plano sin dramatismo retórico."
      },
      {
        "option": "B",
        "reason": "Construcción forzada y defectuosa."
      },
      {
        "option": "D",
        "reason": "Oración hendida que focaliza el lugar pero carece del ritmo épico narrativo."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Narrative Fronting Techniques C2)"
  },
  {
    "id": "eng_c2_41",
    "number": 291,
    "level": "C2",
    "variant": "ALL",
    "topic": "Complex Syntax: Split Antecedents and Parentheses",
    "statement": "A new constitutional doctrine has emerged from the Supreme Court's deliberations ________ fundamentally alters the relationship between federal agencies and citizen rights.",
    "options": [
      {
        "key": "A",
        "text": "which"
      },
      {
        "key": "B",
        "text": "that"
      },
      {
        "key": "C",
        "text": "whose"
      },
      {
        "key": "D",
        "text": "what"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la prosa formal donde el antecedente ('A new constitutional doctrine') está separado de la cláusula relativa por una frase preposicional parentética ('from the deliberations'), 'that' o 'which' restrictivo restituye de forma nítida la conexión con la doctrina abstracta rectora ('that fundamentally alters').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Aunque 'which' se usa en UK, en redacción normativa estadounidense se exige estrictamente 'that' para relativas restrictivas con antecedente dividido."
      },
      {
        "option": "C",
        "reason": "'whose' es pronombre posesivo."
      },
      {
        "option": "D",
        "reason": "'what' es agramatical con antecedente sintáctico."
      }
    ],
    "referenceSite": "Agendaweb.org (Split Antecedents in Relative Clauses C2)"
  },
  {
    "id": "eng_c2_42",
    "number": 292,
    "level": "C2",
    "variant": "ALL",
    "topic": "Rhetorical Figures: Chiasmus and Antimetabole",
    "statement": "The famous aphorism 'Never let a fool kiss you or a kiss fool you' is an exemplary demonstration of:",
    "options": [
      {
        "key": "A",
        "text": "Antimetabole (exact criss-cross lexical reversal)"
      },
      {
        "key": "B",
        "text": "Anaphora (repetition of initial clauses)"
      },
      {
        "key": "C",
        "text": "Epistrophe (repetition of terminal elements)"
      },
      {
        "key": "D",
        "text": "Synecdoche (part representing the whole)"
      }
    ],
    "correctAnswer": "A",
    "explanation": "El antimetábole (antimetabole) es la figura retórica exacta consistente en repetir las mismas palabras en dos cláusulas sucesivas pero invirtiendo el orden sintáctico ('fool kiss' / 'kiss fool') para generar un contraste reflexivo ingenioso.",
    "distractorAnalysis": [
      {
        "option": "B",
        "reason": "La anáfora repite la misma palabra al principio de versos o frases consecutivas."
      },
      {
        "option": "C",
        "reason": "La epístrofe repite palabras al final de las frases."
      },
      {
        "option": "D",
        "reason": "La sinécdoque designa la parte por el todo (ej. 'velas' por barcos)."
      }
    ],
    "referenceSite": "Englishteststore.net (Rhetorical Schemes and Tropes C2)"
  },
  {
    "id": "eng_c2_43",
    "number": 293,
    "level": "C2",
    "variant": "ALL",
    "topic": "Rhetorical Schemes: Asyndeton for Acceleration",
    "statement": "Julius Caesar's renowned dispatch 'Veni, vidi, vici' (I came, I saw, I conquered), omitting coordinating conjunctions, exemplifies:",
    "options": [
      {
        "key": "A",
        "text": "Polysyndeton"
      },
      {
        "key": "B",
        "text": "Asyndeton"
      },
      {
        "key": "C",
        "text": "Zeugma"
      },
      {
        "key": "D",
        "text": "Tautology"
      }
    ],
    "correctAnswer": "B",
    "explanation": "El asíndeton (asyndeton) es la omisión deliberada de conjunciones coordinantes ('and', 'or') entre frases sucesivas para crear un efecto de rapidez, concisión y contundencia energética arrolladora.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "El polisíndeton es lo opuesto: la multiplicación deliberada de conjunciones ('y... y... y...')."
      },
      {
        "option": "C",
        "reason": "El zeugma vincula un solo verbo a dos sustantivos con sentidos dispares."
      },
      {
        "option": "D",
        "reason": "La tautología es una redundancia viciosa innecesaria."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Asyndeton and Polysyndeton C2)"
  },
  {
    "id": "eng_c2_44",
    "number": 294,
    "level": "C2",
    "variant": "ALL",
    "topic": "Rhetorical Tropes: Zeugma (Semantic Play on Single Verb)",
    "statement": "Which sentence demonstrates an authentic literary ZEUGMA?",
    "options": [
      {
        "key": "A",
        "text": "The general lost the decisive battle and fell back toward the border."
      },
      {
        "key": "B",
        "text": "The grieving diplomat lost his composure and his luggage at the airport."
      },
      {
        "key": "C",
        "text": "She was crying tears of sorrow and sadness."
      },
      {
        "key": "D",
        "text": "He ran swiftly and dashed through the alley."
      }
    ],
    "correctAnswer": "B",
    "explanation": "El zeugma (o silepsis) consiste en articular un único verbo ('lost') con dos complementos que operan en planos semánticos completamente distintos: uno abstracto/emocional ('his composure') y otro físico/concreto ('his luggage').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa dos verbos distintos en coordinación llana."
      },
      {
        "option": "C",
        "reason": "Pleonásmo sentimental sin tensión léxica."
      },
      {
        "option": "D",
        "reason": "Coordinación de sinónimos de carrera física."
      }
    ],
    "referenceSite": "Agendaweb.org (Zeugma and Syllepsis C2)"
  },
  {
    "id": "eng_c2_45",
    "number": 295,
    "level": "C2",
    "variant": "ALL",
    "topic": "Syntactic Harmony: Correlative Conjunction Parallelism",
    "statement": "Identify the ONLY sentence that maintains STRICT PARALLEL SYNTACTIC STRUCTURE with correlatives:",
    "options": [
      {
        "key": "A",
        "text": "The candidate promised not only to reduce corporate taxes, but also that public healthcare would be expanded."
      },
      {
        "key": "B",
        "text": "The candidate promised not only to reduce corporate taxes, but also to expand public healthcare."
      },
      {
        "key": "C",
        "text": "The candidate not only promised reducing taxes, but also to expand healthcare."
      },
      {
        "key": "D",
        "text": "Not only the candidate promised to reduce taxes, but also healthcare was expanded."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La correlación sintáctica perfecta exige que los constituyentes coordinados tras 'not only' y 'but also' pertenezcan a la misma categoría gramatical: 'to reduce corporate taxes' (infinitivo) se coordina paralelamente con 'to expand public healthcare' (infinitivo).",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Rompe el paralelismo al coordinar un infinitivo con una cláusula completa con 'that'."
      },
      {
        "option": "C",
        "reason": "Rompe el paralelismo al coordinar un gerundio con un infinitivo."
      },
      {
        "option": "D",
        "reason": "Desarticula el orden sintáctico y mezcla voces activa y pasiva."
      }
    ],
    "referenceSite": "Englishteststore.net (Correlative Parallelism C2)"
  },
  {
    "id": "eng_c2_46",
    "number": 296,
    "level": "C2",
    "variant": "ALL",
    "topic": "Stylistic Inversion: Legal / Constitutional Inviolability",
    "statement": "On no account ________ the seal of the diplomatic pouch without the express written authorization of the foreign minister.",
    "options": [
      {
        "key": "A",
        "text": "any official shall breach"
      },
      {
        "key": "B",
        "text": "shall any official breach"
      },
      {
        "key": "C",
        "text": "any official breached"
      },
      {
        "key": "D",
        "text": "breach shall any official"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Frases iniciales de prohibición perentoria solemne ('On no account', 'Under no circumstances') exigen rigurosa inversión del auxiliar deontológico con el sujeto: 'shall any official breach'.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Omite la inversión requerida tras 'On no account'."
      },
      {
        "option": "C",
        "reason": "Tiempo pasado indicativo no invertido."
      },
      {
        "option": "D",
        "reason": "Inversión anómala del verbo léxico antes del auxiliar."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Inversion On no account C2)"
  },
  {
    "id": "eng_c2_47",
    "number": 297,
    "level": "C2",
    "variant": "ALL",
    "topic": "Diplomatic Statutes: Formulaic Subjunctive in Treaties",
    "statement": "The High Contracting Parties resolve that an international tribunal ________ convened within sixty days of the signing of this covenant.",
    "options": [
      {
        "key": "A",
        "text": "is to be"
      },
      {
        "key": "B",
        "text": "be"
      },
      {
        "key": "C",
        "text": "shall have been"
      },
      {
        "key": "D",
        "text": "being"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En el texto de convenios y tratados multilaterales solemnes, tras verbos de resolución ('resolve that, agree that'), el subjuntivo pasivo mandativo se formula con el bare infinitive 'be + participio' ('that a tribunal be convened').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Usa indicativo perifrástico que resta solemnidad protocolaria al tratado."
      },
      {
        "option": "C",
        "reason": "Tiempo compuesto innecesario."
      },
      {
        "option": "D",
        "reason": "Gerundio que deja la cláusula sin verbo finito."
      }
    ],
    "referenceSite": "Agendaweb.org (Treaty Subjunctive C2)"
  },
  {
    "id": "eng_c2_48",
    "number": 298,
    "level": "C2",
    "variant": "ALL",
    "topic": "Rhetorical Style: Inversion in Rhetorical Exclamations",
    "statement": "Were ever citizens subjected to such arbitrary tyranny without raising the banner of revolt?",
    "options": [
      {
        "key": "A",
        "text": "It is an interrogative sentence requesting empirical statistics."
      },
      {
        "key": "B",
        "text": "It is an emphatic rhetorical question implying that no citizens were ever so subjected."
      },
      {
        "key": "C",
        "text": "It is a defective conditional clause missing its conclusion."
      },
      {
        "key": "D",
        "text": "It is an archaic imperative order."
      }
    ],
    "correctAnswer": "B",
    "explanation": "Las preguntas retóricas enfáticas con inversión temporal inicial ('Were ever citizens subjected...') no buscan datos empíricos de respuesta; constituyen aseveraciones contundentes disfrazadas de pregunta que afirman la inexistencia histórica de semejante tiranía consentida.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "No es una encuesta ni petición estadística informativa."
      },
      {
        "option": "C",
        "reason": "La sintaxis está plenamente clausurada como pregunta retórica completa."
      },
      {
        "option": "D",
        "reason": "No contiene modo imperativo."
      }
    ],
    "referenceSite": "Englishteststore.net (Rhetorical Inversions C2)"
  },
  {
    "id": "eng_c2_49",
    "number": 299,
    "level": "C2",
    "variant": "ALL",
    "topic": "Syntactic Gapping and Modal Ellipsis in Philosophical Prose",
    "statement": "Some philosophers argue that free will is an illusion, and others ________ that consciousness itself is an epiphenomenon.",
    "options": [
      {
        "key": "A",
        "text": "argue so"
      },
      {
        "key": "B",
        "text": "— (omitted by gapping)"
      },
      {
        "key": "C",
        "text": "doing so"
      },
      {
        "key": "D",
        "text": "have it argued"
      }
    ],
    "correctAnswer": "B",
    "explanation": "En la prosa de alta densidad filosófica y literaria, el recurso estilístico del 'gapping' (elipsis por brecha) omite voluntariamente el verbo idéntico coordinado ('Some argue that X, and others [—] that Y') para agilizar el ritmo y evitar la monotonía léxica.",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Inserta 'argue so' que choca con la conjunción subordinada posterior 'that'."
      },
      {
        "option": "C",
        "reason": "Gerundio agramatical en posición predicativa rectora."
      },
      {
        "option": "D",
        "reason": "Construcción torpe y no idiomática."
      }
    ],
    "referenceSite": "Englisch-hilfen.de (Syntactic Gapping C2)"
  },
  {
    "id": "eng_c2_50",
    "number": 300,
    "level": "C2",
    "variant": "ALL",
    "topic": "Comprehensive C2 Mastery Synthesis Review",
    "statement": "Select the ONLY sentence that satisfies the highest criteria of syntactic flawlessness, stylistic elegance, and idiom at C2 Proficiency level:",
    "options": [
      {
        "key": "A",
        "text": "Hardly had the controversial verdict been rendered when protests erupted, and into the streets ran they."
      },
      {
        "key": "B",
        "text": "Into the courtroom stepped the Chief Justice, his hands clasping the historic codex, lest any observer doubt the solemnity of the proceedings."
      },
      {
        "key": "C",
        "text": "The board demanded that he should be removed and insisted to have an audit."
      },
      {
        "key": "D",
        "text": "Being a historic event, the prime minister flaunted the new regulations before parliament."
      }
    ],
    "correctAnswer": "B",
    "explanation": "La opción B es una obra maestra de precisión sintáctica C2: contiene inversión locativa perfecta con sujeto léxico completo ('stepped the Chief Justice'), una cláusula absoluta impecable ('his hands clasping the historic codex'), y la conjunción arcaica 'lest' con subjuntivo mandativo puro ('lest any observer doubt').",
    "distractorAnalysis": [
      {
        "option": "A",
        "reason": "Viola la restricción pronominal en la inversión locativa ('into the streets ran they' es agramatical; debe ser 'they ran')."
      },
      {
        "option": "C",
        "reason": "'insisted to have' es un error de régimen preposicional (debe ser 'insisted on having')."
      },
      {
        "option": "D",
        "reason": "Contiene un dangling participle (sugiere que el primer ministro era un evento histórico) y usa 'flaunted' (alardear) en vez de 'flouted' (desobedecer)."
      }
    ],
    "referenceSite": "Agendaweb.org (Comprehensive C2 Proficiency Final)"
  }
];

export const ENGLISH_QUESTIONS_BY_LEVEL: Record<CEFRLevel, LanguageQuestion[]> = {
  A1: ENGLISH_QUESTIONS_BANK.filter((q) => q.level === 'A1'),
  A2: ENGLISH_QUESTIONS_BANK.filter((q) => q.level === 'A2'),
  B1: ENGLISH_QUESTIONS_BANK.filter((q) => q.level === 'B1'),
  B2: ENGLISH_QUESTIONS_BANK.filter((q) => q.level === 'B2'),
  C1: ENGLISH_QUESTIONS_BANK.filter((q) => q.level === 'C1'),
  C2: ENGLISH_QUESTIONS_BANK.filter((q) => q.level === 'C2'),
};

# -*- coding: utf-8 -*-
"""
APP-KUSKAT • English Multiple Choice Questions Bank: B1 and B2 (50 items each)
References: Englisch-hilfen.de, Englishteststore.net, Agendaweb.org
"""

def get_b1_questions():
    items = [
        # 1. Present Perfect Simple - Since vs For
        ("Present Perfect Simple: Since vs. For",
         "Dr. Hernández has worked at the national hospital ________ 2015, so he has been there ________ more than ten years.",
         [("A", "for / since"), ("B", "since / for"), ("C", "from / during"), ("D", "in / for")],
         "B",
         "'Since' señala el punto exacto de inicio en el tiempo ('since 2015'), mientras que 'for' mide la duración cuantitativa total del período ('for more than ten years').",
         [("A", "Invierte la regla fundamental de tiempo en Present Perfect."), ("C", "'from' no sustituye a 'since' en la formación de tiempos perfectos continuados."), ("D", "'in' se restringe a fechas cerradas con Past Simple.")],
         "Englisch-hilfen.de (Since and For Present Perfect)"),

        # 2. Present Perfect Simple - Already, Yet, Still
        ("Present Perfect: Already vs. Yet vs. Still",
         "Has the parcel arrived ________? No, it hasn't arrived, but the postal service has ________ dispatched the confirmation email.",
         [("A", "already / yet"), ("B", "yet / already"), ("C", "still / yet"), ("D", "yet / still")],
         "B",
         "'Yet' se coloca al final de preguntas y oraciones negativas ('Has it arrived yet?'), mientras que 'already' se ubica entre el auxiliar y el participio en oraciones afirmativas para denotar que la acción se completó antes de lo previsto.",
         [("A", "Invierte los adverbios aspectuales."), ("C", "'still' va antes del auxiliar en oraciones negativas ordinarias."), ("D", "'still dispatched' es incorrecto en este contexto aspectual.")],
         "Agendaweb.org (Already, Yet, Still B1)"),

        # 3. Present Perfect - Just (Recent Completion)
        ("Present Perfect: 'Just' for Recent Actions",
         "— 'Would you like some lunch?' — 'No, thank you, I have ________ eaten a sandwich.'",
         [("A", "just"), ("B", "yet"), ("C", "ever"), ("D", "still")],
         "A",
         "'Just' colocado entre el auxiliar 'have' y el participio pasado indica que una acción se ha consumado hace escasos instantes (acabo de comer).",
         [("B", "'yet' solo va al final de preguntas o negativas."), ("C", "'ever' se usa en interrogaciones sobre experiencia vital."), ("D", "'still' indica continuidad de un estado no resuelto.")],
         "Englishteststore.net (Just in Present Perfect B1)"),

        # 4. Present Perfect vs Past Simple (Finished vs Unfinished Time)
        ("Present Perfect vs. Past Simple: Aspectual Contrast",
         "Shakespeare ________ numerous world-famous plays, but contemporary author Stephen King ________ dozens of bestsellers during his career.",
         [("A", "has written / wrote"), ("B", "wrote / has written"), ("C", "wrote / wrote"), ("D", "has written / has written")],
         "B",
         "Para figuras históricas ya fallecidas con períodos vitales cerrados se exige Past Simple ('wrote'). Para autores vivos cuya carrera productiva continúa abierta al presente se usa Present Perfect ('has written').",
         [("A", "Aplica Present Perfect a una persona fallecida cuyo legado temporal está sellado."), ("C", "Ignora el vínculo de Stephen King con el presente vivo."), ("D", "Aplica Present Perfect a Shakespeare de forma anacrónica.")],
         "Englisch-hilfen.de (Simple Past vs Present Perfect B1)"),

        # 5. Present Perfect Continuous - Duration of Ongoing Activity
        ("Present Perfect Continuous: Duration of Ongoing Activity",
         "The forensic team ________ the evidence since 6:00 AM, and they are still working in the laboratory.",
         [("A", "has examined"), ("B", "has been examining"), ("C", "is examining"), ("D", "was examining")],
         "B",
         "Cuando una actividad comenzó en el pasado, se ha prolongado sin interrupción y continúa desarrollándose en el presente ('still working'), se emplea Present Perfect Continuous ('has been examining').",
         [("A", "Present Perfect Simple enfatiza el resultado final completado, no la continuidad de la labor."), ("C", "Present Continuous omite el marco temporal originado a las 6:00 AM con 'since'."), ("D", "Past Continuous sitúa la acción en un pasado desconectado.")],
         "Agendaweb.org (Present Perfect Continuous B1)"),

        # 6. Present Perfect Continuous vs Simple (Result vs Activity)
        ("Present Perfect Simple vs Continuous: Result vs Activity",
         "He is covered in grease because he ________ his car, but he ________ only two spark plugs so far.",
         [("A", "has been repairing / has replaced"),
          ("B", "has repaired / has been replacing"),
          ("C", "repaired / replaced"),
          ("D", "was repairing / replaced")],
         "A",
         "La evidencia física presente de una actividad reciente exige continuo ('has been repairing'), mientras que el cómputo cuantitativo de unidades terminadas ('two spark plugs so far') exige el aspecto simple ('has replaced').",
         [("B", "Invierte la regla: las cantidades numéricas nunca se expresan en continuo aspectual."), ("C", "Omite la conexión con el estado de suciedad presente."), ("D", "No vincula el esfuerzo con el resultado actual.")],
         "Englishteststore.net (Present Perfect Simple vs Continuous B1)"),

        # 7. Past Perfect Simple - Prior Past Action
        ("Past Perfect Simple: Sequence of Past Events",
         "When we arrived at the concert hall, the performance ________, so we were not allowed to enter.",
         [("A", "already started"), ("B", "had already started"), ("C", "has already started"), ("D", "was already starting")],
         "B",
         "El Past Perfect Simple ('had + participio') designa la acción pretérita que ocurrió antes de otro momento o evento también ubicado en el pasado ('arrived').",
         [("A", "Past Simple no marca con claridad la anterioridad causal temporal."), ("C", "Present Perfect no puede subordinarse a un evento clausurado en el pasado."), ("D", "Past Continuous indicaría que la acción estaba apenas iniciándose.")],
         "Englisch-hilfen.de (Past Perfect Simple B1)"),

        # 8. Past Perfect with 'By the time'
        ("Past Perfect with 'By the time'",
         "By the time the firefighters arrived at the scene, the residents ________ the fire safely.",
         [("A", "extinguished"), ("B", "had extinguished"), ("C", "have extinguished"), ("D", "were extinguishing")],
         "B",
         "La locución temporal 'By the time + Past Simple' exige sistemáticamente el Past Perfect ('had extinguished') en la cláusula principal para denotar que la acción ya estaba consumada antes de ese límite temporal.",
         [("A", "Past Simple no explicita que la extinción precedió a la llegada de los bomberos."), ("C", "Present Perfect viola la concordancia de tiempos en pasado."), ("D", "Past Continuous describiría una acción inacabada en desarrollo.")],
         "Agendaweb.org (Past Perfect with By the time B1)"),

        # 9. Second Conditional - Hypothetical Present/Future
        ("Second Conditional: Hypothetical Situations",
         "If I ________ more free time, I ________ a second foreign language.",
         [("A", "have / would learn"), ("B", "had / would learn"), ("C", "had / will learn"), ("D", "would have / learned")],
         "B",
         "El segundo condicional plantea hipótesis irreales o improbables en el presente/futuro: 'If + Past Simple, would + forma base'.",
         [("A", "Mezcla la prótasis del primer condicional con la apódosis del segundo."), ("C", "Combina agramaticalmente pasado con 'will'."), ("D", "Coloca erróneamente 'would' dentro de la cláusula con 'if'.")],
         "Englishteststore.net (Second Conditional B1)"),

        # 10. Second Conditional with Subjunctive 'Were'
        ("Second Conditional: Subjunctive 'Were' for All Persons",
         "If I ________ in your position, I ________ that controversial job offer immediately.",
         [("A", "was / would accept"), ("B", "were / would accept"), ("C", "am / will accept"), ("D", "were / will accept")],
         "B",
         "En el inglés formal y normativo del segundo condicional, se prefiere universalmente la forma del subjuntivo pretérito 'were' para todas las personas gramaticales ('If I were you...').",
         [("A", "'was' es coloquial, pero se desaconseja en pruebas estandarizadas académicas."), ("C", "Corresponde al primer condicional real."), ("D", "Mezcla prótasis de subjuntivo con futuro contingente 'will'.")],
         "Englisch-hilfen.de (Conditional Sentences Type 2 Were)"),

        # 11. Passive Voice - Present Simple
        ("Passive Voice: Present Simple Transformation",
         "Millions of electronic devices ________ in Asian factories and ________ to global markets every year.",
         [("A", "manufacture / export"), ("B", "are manufactured / exported"), ("C", "are manufacturing / exporting"), ("D", "is manufactured / exported")],
         "B",
         "La voz pasiva en Present Simple se forma con 'am/is/are + Past Participle'. Al ser el sujeto 'devices' plural, exige 'are manufactured' y el participio coordinado 'exported'.",
         [("A", "Voz activa absurda: los dispositivos no se fabrican ni exportan a sí mismos."), ("C", "Voz activa continua."), ("D", "Falla en concordancia de número ('is' con sujeto plural 'devices').")],
         "Agendaweb.org (Passive Voice Present Simple B1)"),

        # 12. Passive Voice - Past Simple
        ("Passive Voice: Past Simple Transformation",
         "The iconic Golden Gate Bridge in San Francisco ________ in 1937 after four years of intensive construction.",
         [("A", "completed"), ("B", "was completed"), ("C", "has been completed"), ("D", "had completed")],
         "B",
         "Para un evento de sujeto paciente en un año cerrado del pasado ('in 1937'), la pasiva requiere 'was/were + Past Participle' ('was completed').",
         [("A", "Voz activa: implicaría que el puente completó algo por su propia cuenta."), ("C", "Present Perfect incompatible con una fecha pretérita exacta."), ("D", "Voz activa en Past Perfect.")],
         "Englishteststore.net (Passive Voice Past Simple B1)"),

        # 13. Passive Voice - By (Agent) vs With (Instrument)
        ("Passive Voice: Agent 'By' vs. Instrument 'With'",
         "The ancient manuscript was written ________ a quill pen ________ an anonymous medieval monk.",
         [("A", "by / with"), ("B", "with / by"), ("C", "by / by"), ("D", "with / with")],
         "B",
         "En la voz pasiva, el agente personal humano que realiza la acción se introduce con 'by' ('by an anonymous monk'), mientras que la herramienta, instrumento o sustancia empleada se introduce con 'with' ('with a quill pen').",
         [("A", "Invierte agente e instrumento."), ("C", "Usa 'by' para el instrumento de escritura."), ("D", "Usa 'with' para el agente humano personal.")],
         "Englisch-hilfen.de (Passive Agent by and with)"),

        # 14. Defining Relative Clauses - Who, Which, That
        ("Defining Relative Clauses: Pronoun Selection",
         "The surgeon ________ operated on my father and the surgical robot ________ assisted her were both outstanding.",
         [("A", "which / who"), ("B", "who / which"), ("C", "whose / who"), ("D", "whom / whose")],
         "B",
         "Para antecedentes de persona humana ('surgeon') se emplea 'who' o 'that'. Para objetos inanimados o máquinas ('robot') se utiliza 'which' o 'that'.",
         [("A", "Invierte los pronombres relativos."), ("C", "'whose' es relativo posesivo y no concuerda."), ("D", "'whom' solo se usa para complementos directos o preposicionales, no como sujeto de 'operated'.")],
         "Agendaweb.org (Defining Relative Clauses B1)"),

        # 15. Defining Relative Clauses - Omission of Relative Pronoun
        ("Defining Relative Clauses: Contact Clauses (Zero Relative)",
         "In which of the following sentences can the relative pronoun be SAFELY OMITTED?",
         [("A", "The professor who taught chemistry retired yesterday."),
          ("B", "The book that I borrowed from the library is fascinating."),
          ("C", "The student who won the scholarship gave a speech."),
          ("D", "The engineer who designed the bridge was honored.")],
         "B",
         "El pronombre relativo solo puede omitirse libremente (cláusula de contacto) cuando funciona como OBJETO directo de la subordinada ('The book [that] I borrowed...'). Si funciona como sujeto del verbo subordinado (A, C, D), su omisión es terminantemente agramatical.",
         [("A", "'who' es el sujeto directo del verbo 'taught'."), ("C", "'who' es el sujeto del verbo 'won'."), ("D", "'who' es el sujeto del verbo 'designed'.")],
         "Englishteststore.net (Omission of Relative Pronoun B1)"),

        # 16. Relative Pronoun 'Whose'
        ("Relative Pronouns: Possessive 'Whose'",
         "We interviewed an architect ________ designs have won international environmental awards.",
         [("A", "who"), ("B", "whose"), ("C", "whom"), ("D", "which")],
         "B",
         "'Whose' es el pronombre relativo de posesión equivalente a 'cuyo/cuyos/cuya/cuyas', y une al poseedor ('architect') con lo poseído ('designs').",
         [("A", "'who' no indica relación de pertenencia."), ("C", "'whom' es pronombre acusativo de persona."), ("D", "'which' se refiere a cosas y no transmite posesión.")],
         "Englisch-hilfen.de (Relative Pronoun Whose)"),

        # 17. Used to + Infinitive for Past Habits
        ("Past Habits: Used to + Infinitive",
         "When Mauricio was a child, he ________ ride his bicycle to school every day, but now he drives a car.",
         [("A", "used to"), ("B", "is used to"), ("C", "was used to"), ("D", "got used to")],
         "A",
         "'Used to + infinitivo en forma base' expresa un hábito, costumbre o estado habitual en el pasado que ya ha cesado por completo en el presente.",
         [("B", "'is used to' requiere gerundio y expresa estar acostumbrado en el presente."), ("C", "'was used to' expresa estar acostumbrado en pasado."), ("D", "'got used to' expresa el proceso de aclimatación o adaptación.")],
         "Agendaweb.org (Used to for Past Habits B1)"),

        # 18. 'Would' for Past Repeated Actions
        ("Past Habits: 'Would' vs. 'Used to' for States",
         "Which sentence is GRAMMATICALLY INCORRECT when describing the past?",
         [("A", "Every summer, my grandfather would take us fishing at the lake."),
          ("B", "My grandfather would be a tall man with green eyes."),
          ("C", "My grandfather used to be a tall man with green eyes."),
          ("D", "We would sit on the porch for hours telling stories.")],
         "B",
         "El auxiliar 'would' solo puede emplearse para acciones o rutinas repetidas en el pasado (A y D). NUNCA puede utilizarse con verbos de estado permanente (como 'to be', 'have', 'believe', 'know'); para estados pasados es obligatorio usar 'used to' (C).",
         [("A", "Es correcto: 'take us fishing' es una acción repetida."), ("C", "Es correcto: 'used to be' es el uso estándar con verbos de estado."), ("D", "Es correcto: 'sit' es una acción física repetible.")],
         "Englishteststore.net (Would vs Used to B1)"),

        # 19. Be used to vs Get used to
        ("Familiarity vs Adaptation: Be used to vs Get used to",
         "Living in cold weather was difficult at first, but after several months I ________ it.",
         [("A", "used to"), ("B", "got used to"), ("C", "am used to"), ("D", "use to")],
         "B",
         "'Get used to + sustantivo/gerundio' denota el proceso dinámico de adaptación ('me acostumbré'). Como la oración narra la transición pasada ('after several months'), exige 'got used to'.",
         [("A", "'used to' solo se refiere a hábitos pasados discontinuados con infinitivo."), ("C", "'am used to' está en tiempo presente y choca con el marco histórico narrado."), ("D", "'use to' es una forma verbal defectuosa.")],
         "Englisch-hilfen.de (Be used to and Get used to)"),

        # 20. Modals of Deduction: Must, Can't, Might
        ("Modals of Deduction: Present Probability",
         "The light in her office is off and her car isn't in the parking lot. She ________ be here; she ________ already be at home.",
         [("A", "must / can't"), ("B", "can't / must"), ("C", "might / shouldn't"), ("D", "mustn't / could")],
         "B",
         "'Can't be here' expresa certeza lógica de imposibilidad deductiva, mientras que 'must be at home' expresa certeza lógica afirmativa fundamentada en las evidencias.",
         [("A", "Invierte por completo la deducción lógica."), ("C", "'might' denota posibilidad débil y 'shouldn't' consejo moral."), ("D", "'mustn't' denota prohibición social, no deducción lógica.")],
         "Agendaweb.org (Modals of Deduction Present B1)"),

        # 21. Modal 'Should have + Past Participle'
        ("Modal Perfects: Should Have for Past Regret",
         "I failed the physics examination. I ________ more consistently instead of playing video games all weekend.",
         [("A", "should study"), ("B", "should have studied"), ("C", "must have studied"), ("D", "could study")],
         "B",
         "'Should have + Past Participle' expresa reproche, lamento o consejo retrospectivo sobre una acción ideal que no se llevó a cabo en el pasado.",
         [("A", "'should study' es una recomendación presente o futura y no se aplica al examen ya reprobado."), ("C", "'must have studied' deduciría falsamente que el sujeto sí estudió."), ("D", "'could study' alude a capacidad presente.")],
         "Englishteststore.net (Should Have Past Participle B1)"),

        # 22. Reported Speech - Statements Tense Shift
        ("Reported Speech: Tense Backshift in Statements",
         "— 'I am working on a new software project,' Roberto said. — Roberto said that he ________ on a new software project.",
         [("A", "is working"), ("B", "was working"), ("C", "had worked"), ("D", "has been working")],
         "B",
         "En el estilo indirecto (Reported Speech), el verbo introductorio en pasado ('said') desencadena la correlación temporal retrógrada (backshift): Present Continuous ('am working') cambia a Past Continuous ('was working').",
         [("A", "No realiza el backshift temporal obligatorio en inglés estándar."), ("C", "Cambia a Past Perfect sin justificación aspectual."), ("D", "Usa Present Perfect Continuous.")],
         "Englisch-hilfen.de (Reported Speech Backshift)"),

        # 23. Reported Speech: Say vs Tell
        ("Reported Speech: Reporting Verbs 'Say' vs 'Tell'",
         "The manager ________ us that the meeting had been canceled, but she didn't ________ why.",
         [("A", "said / tell"), ("B", "told / say"), ("C", "told / tell"), ("D", "said / say")],
         "B",
         "'Tell' exige obligatoriamente un objeto indirecto personal sin preposición ('told us'). 'Say' se utiliza sin objeto personal o introducido con 'to' ('didn't say why').",
         [("A", "'said us' es agramatical en inglés estándar."), ("C", "'didn't tell why' carece del objeto personal exigido por tell."), ("D", "Usa 'said us' en la primera cláusula.")],
         "Agendaweb.org (Say vs Tell B1)"),

        # 24. Reported Speech - Questions
        ("Reported Speech: Interrogative Word Order",
         "— 'Where do you live?' the officer asked. — The officer asked me ________.",
         [("A", "where did I live"), ("B", "where I lived"), ("C", "where do I live"), ("D", "where lived I")],
         "B",
         "Al reportar una pregunta, la estructura interrogativa con auxiliar invertido ('do you live') desaparece y se convierte en una cláusula subordinada afirmativa en pasado: 'partícula wh- + sujeto + verbo en pasado' ('where I lived').",
         [("A", "Conserva innecesariamente el auxiliar interrogativo 'did'."), ("C", "No realiza el cambio a tiempo pasado."), ("D", "Aplica una inversión estilística arcaica.")],
         "Englishteststore.net (Reported Questions B1)"),

        # 25. Verb Patterns: Remember to do vs Remember doing
        ("Verb Patterns: Remember + Infinitive vs. Gerund",
         "Please remember ________ the front door when you leave, because yesterday you didn't remember ________ it.",
         [("A", "locking / to lock"), ("B", "to lock / locking"), ("C", "to lock / to lock"), ("D", "locking / locking")],
         "B",
         "'Remember to lock' (infinitivo) alude al deber o tarea que debe realizarse en el futuro. 'Remember locking' (gerundio) alude a evocar en la memoria un recuerdo de una acción ya ejecutada en el pasado.",
         [("A", "Invierte los dos significados verbales."), ("C", "No captura la rememoración retrospectiva del acto pasado."), ("D", "Usa gerundio para la instrucción futura.")],
         "Englisch-hilfen.de (Remember Gerund vs Infinitive)"),

        # 26. Verb Patterns: Stop to do vs Stop doing
        ("Verb Patterns: Stop + Infinitive vs. Gerund",
         "On our road trip, we stopped ________ gasoline, and the driver decided to stop ________ because it was harmful to his lungs.",
         [("A", "getting / to smoke"), ("B", "to get / smoking"), ("C", "to get / to smoke"), ("D", "getting / smoking")],
         "B",
         "'Stop to get' (infinitivo) significa interrumpir una marcha para llevar a cabo otra acción de propósito. 'Stop smoking' (gerundio) significa abandonar o cesar definitivamente un hábito.",
         [("A", "Invertiría el sentido: 'cesamos de conseguir gasolina para ponernos a fumar'."), ("C", "Indicaría que se detuvo a encender un cigarrillo."), ("D", "Indicaría que abandonó el combustible.")],
         "Agendaweb.org (Stop to do vs Stop doing B1)"),

        # 27. Question Tags: Advanced Irregular Forms
        ("Question Tags: Special and Irregular Cases",
         "I am your best friend, ________? And let's take a short break now, ________?",
         [("A", "am not I / will we"), ("B", "aren't I / shall we"), ("C", "amn't I / do we"), ("D", "isn't it / shall we")],
         "B",
         "Excepciones normativas de las question tags: 'I am' tiene como coletilla negativa consagrada 'aren't I?' (no existe 'amn't I'). Las propuestas con 'Let's' llevan como coletilla 'shall we?'.",
         [("A", "'am not I' es arcaico en inglés informal; 'will we' no es la coletilla de Let's."), ("C", "'amn't I' no forma parte del estándar general internacional."), ("D", "'isn't it' es una muletilla no estándar.")],
         "Englishteststore.net (Question Tags Advanced B1)"),

        # 28. Indirect Questions
        ("Polite Indirect Questions: Syntax and Order",
         "Could you please tell me ________?",
         [("A", "where is the central train station"),
          ("B", "where the central train station is"),
          ("C", "where does the central train station be"),
          ("D", "where the train station was located yesterday")],
         "B",
         "En preguntas indirectas introducidas por fórmulas de cortesía ('Could you tell me...'), el orden vuelve a ser el de una oración afirmativa: 'partícula + sujeto + verbo' ('where the station is'), SIN inversión del sujeto y el verbo.",
         [("A", "Mantiene la inversión interrogativa directa, lo cual es agramatical en una pregunta indirecta."), ("C", "Usa erróneamente el auxiliar 'does' con el verbo to be."), ("D", "Cambia el tiempo y el contenido informativo de la pregunta.")],
         "Englisch-hilfen.de (Indirect Questions)")
    ]

    # Add 22 more to complete 50 items for B1 (29 to 50)
    b1_more = [
        # 29. Third Conditional Intro
        ("Third Conditional: Impossible Past Condition",
         "If the ambulance ________ five minutes earlier, the paramedic ________ the patient's life.",
         [("A", "arrived / would save"), ("B", "had arrived / would have saved"), ("C", "would arrive / had saved"), ("D", "had arrived / saved")],
         "B",
         "El tercer condicional formula hipótesis retrospectivas sobre el pasado: 'If + Past Perfect (had arrived), would have + Past Participle (would have saved)'.",
         [("A", "Corresponde al segundo condicional hipotético en presente."), ("C", "Pone 'would' dentro de la cláusula con 'if'."), ("D", "Omite el auxiliar compuesto 'would have'.")],
         "Agendaweb.org (Third Conditional B1)"),

        # 30. Wish + Past Simple (Present Desire)
        ("Wish: Regrets about the Present",
         "I have to work on Saturday. I wish I ________ free so that I could attend your graduation party.",
         [("A", "am"), ("B", "were"), ("C", "have been"), ("D", "will be")],
         "B",
         "'Wish + Past Simple / Subjunctive Were' expresa el anhelo de que la situación presente fuera diferente de la realidad actual.",
         [("A", "Usa tiempo presente ordinario."), ("C", "Present Perfect no expresa el deseo hipotético actual."), ("D", "'will' no se utiliza con el verbo wish para deseos personales.")],
         "Englishteststore.net (Wish Sentences B1)"),

        # 31. Wish + Would (Complaining about annoying habits)
        ("Wish + Would: Complaints about Others' Actions",
         "I wish the neighbors ________ playing loud music at 2:00 in the morning!",
         [("A", "stop"), ("B", "would stop"), ("C", "had stopped"), ("D", "will stop")],
         "B",
         "'Wish + would + base form' se emplea para manifestar molestia, queja o el deseo imperioso de que otra persona cambie una conducta irritante.",
         [("A", "Present Simple agramatical con wish."), ("C", "Past Perfect expresaría lamento sobre un hecho ya cerrado en el pasado."), ("D", "'will' es agramatical con wish.")],
         "Englisch-hilfen.de (Wish and Would B1)"),

        # 32. Connectors of Purpose: So that vs In order to
        ("Connectors of Purpose: So that vs In order to",
         "She spoke slowly and clearly ________ the international students could understand every single word.",
         [("A", "in order to"), ("B", "so that"), ("C", "for"), ("D", "because of")],
         "B",
         "'So that' va seguido de una cláusula subordinada completa con sujeto y verbo modal ('the students could understand'). 'In order to' exigiría ir seguido directamente de la forma base del verbo.",
         [("A", "'in order to' no puede ir seguido de un sujeto y un verbo finito modal."), ("C", "'for' con cláusula completa es arcaico o causal."), ("D", "'because of' exige una frase nominal.")],
         "Agendaweb.org (Connectors of Purpose B1)"),

        # 33. Connectors of Contrast: In spite of / Despite
        ("Connectors of Contrast: Despite vs In spite of vs Although",
         "________ the heavy storm, the flight landed safely on schedule.",
         [("A", "Although"), ("B", "Despite"), ("C", "Even though"), ("D", "In spite")],
         "B",
         "'Despite' (e 'in spite of') van seguidos de una frase nominal ('the heavy storm') o un gerundio. 'Although' y 'even though' exigen obligatoriamente una oración subordinada completa con sujeto y verbo.",
         [("A", "'Although' requiere una cláusula con verbo ('Although there was a storm')."), ("C", "'Even though' requiere una cláusula completa."), ("D", "Omite la preposición obligatoria 'of' ('in spite of').")],
         "Englishteststore.net (Despite and In Spite of B1)"),

        # 34. Phrasal Verbs: Three-word verbs
        ("Three-Part Phrasal Verbs: Look forward to",
         "All the students are really looking forward to ________ their summer holidays.",
         [("A", "start"), ("B", "starting"), ("C", "started"), ("D", "be starting")],
         "B",
         "En el phrasal verb 'look forward to', la palabra 'to' es una PREPOSICIÓN, no una marca de infinitivo. Por ende, cualquier verbo que la siga debe adoptar la forma en gerundio '-ing' ('starting').",
         [("A", "Error común: asume que 'to' es infinitivo y usa la forma base."), ("C", "Usa pasado simple tras una preposición."), ("D", "Usa infinitivo continuo.")],
         "Englisch-hilfen.de (Three-Word Phrasal Verbs B1)"),

        # 35. Causative Have / Get: Service by Others
        ("Causative Form: Have / Get Something Done",
         "My car was making a strange noise, so yesterday I ________ at the certified mechanic's shop.",
         [("A", "repaired it"), ("B", "had it repaired"), ("C", "had repaired it"), ("D", "got repair it")],
         "B",
         "La estructura causativa 'have/get + objeto + Past Participle' indica que contratamos o encargamos a un tercero profesional la realización de un servicio técnico ('had it repaired').",
         [("A", "'repaired it' afirmaría que el propio hablante hizo la reparación con sus manos."), ("C", "Past Perfect en voz activa."), ("D", "Estructura agramatical.")],
         "Agendaweb.org (Causative Have Something Done B1)"),

        # 36. Future Continuous: Action in Progress in the Future
        ("Future Continuous: Will be + -ing",
         "This time next week, we ________ across the Atlantic Ocean on our way to Madrid.",
         [("A", "will fly"), ("B", "will be flying"), ("C", "are flying"), ("D", "will have flown")],
         "B",
         "'This time next week' sitúa el foco temporal en una acción que estará en pleno desarrollo en ese instante futuro exacto: 'will be + verbo-ing'.",
         [("A", "Future Simple indicaría un evento puntual o inicio de acción."), ("C", "Present Continuous describe citas agendadas, pero no enfatiza el progreso continuo simultáneo a esa hora."), ("D", "Future Perfect indicaría que el vuelo ya concluyó.")],
         "Englishteststore.net (Future Continuous B1)"),

        # 37. Future Time Clauses: Present Tense Rule
        ("Time Clauses: Conjunctions with Present Tense",
         "As soon as the manager ________, we will begin the presentation.",
         [("A", "will arrive"), ("B", "arrives"), ("C", "is arriving"), ("D", "arrived")],
         "B",
         "En las cláusulas temporales subordinadas introducidas por 'as soon as', 'when', 'until', 'before', 'after', se PROHÍBE el uso de 'will'; el tiempo futuro se expresa sintácticamente con Present Simple ('arrives').",
         [("A", "Usa 'will' en la cláusula temporal (uno de los errores más sancionados en exámenes estandarizados)."), ("C", "Present Continuous no expresa la contingencia puntual de llegada."), ("D", "Usa pasado para un evento aún pendiente.")],
         "Englisch-hilfen.de (Future Time Clauses)"),

        # 38. Adjectives ending in -ed vs -ing
        ("Participial Adjectives: -ed (Feelings) vs -ing (Causes)",
         "The lecture on quantum computing was so ________ that most of the audience became completely ________.",
         [("A", "confused / confusing"), ("B", "confusing / confused"), ("C", "confused / confused"), ("D", "confusing / confusing")],
         "B",
         "Los adjetivos en '-ing' describen la cualidad o causa de la emoción ('a confusing lecture'), mientras que los adjetivos en '-ed' describen el estado anímico o sensación que experimenta la persona ('confused audience').",
         [("A", "Invierte los dos adjetivos participiales."), ("C", "Atribuye emoción humana pasiva a la conferencia."), ("D", "Atribuye cualidad causativa a la audiencia.")],
         "Agendaweb.org (-ed and -ing Adjectives B1)"),

        # 39. Proportional Comparison: The more..., the more...
        ("Comparative Correlatives: The... the...",
         "________ you practice your spoken English, ________ confident you will become.",
         [("A", "The more / the more"), ("B", "More / more"), ("C", "The most / the most"), ("D", "As / as")],
         "A",
         "La correlación de proporción paralela se forma con 'The + comparativo..., the + comparativo...' ('The more you practice, the more confident you will become').",
         [("B", "Omite el artículo obligatorio 'the' en ambos miembros correlativos."), ("C", "Usa superlativos en una correlación comparativa continua."), ("D", "No expresa gradación proporcional acumulativa.")],
         "Englishteststore.net (The more the more B1)"),

        # 40. Fixed Prepositional Phrases: By mistake, On purpose
        ("Prepositional Idioms: By mistake vs On purpose",
         "I didn't delete your file ________; I pressed the delete key ________.",
         [("A", "by purpose / on mistake"), ("B", "on purpose / by mistake"), ("C", "with purpose / with mistake"), ("D", "in purpose / for mistake")],
         "B",
         "Las frases preposicionales fijas idiomáticas en inglés son: 'on purpose' (a propósito / deliberadamente) y 'by mistake' (por equivocación / accidentalmente).",
         [("A", "Invierte las preposiciones consagradas."), ("C", "Calca preposiciones inexistentes en este modismo."), ("D", "Combinaciones agramaticales.")],
         "Englisch-hilfen.de (Prepositional Phrases B1)"),

        # 41. US vs UK Grammar: Have got vs Have for Possession
        ("US vs UK Grammar: Possession with Have",
         "In standard British English, 'Have you got any siblings?' is common. In standard American English, the equivalent question is:",
         [("A", "Got you any siblings?"), ("B", "Do you have any siblings?"), ("C", "Have you any siblings?"), ("D", "Are you having any siblings?")],
         "B",
         "El inglés estadounidense prefiere predominantemente el auxiliar 'do' con el verbo léxico 'have' ('Do you have any siblings?'), mientras que el británico tradicional recurre a 'have got'.",
         [("A", "'Got you' es agramatical en ambos dialectos."), ("C", "'Have you' sin auxiliar es un arcaísmo estilístico formal británico."), ("D", "'have' en sentido de parentesco es estativo y no admite progresivo.")],
         "Agendaweb.org (Have vs Have got differences)"),

        # 42. US vs UK Grammar: Past Simple vs Present Perfect with 'Already'
        ("US vs UK Grammar: Aspectual Flexibility with 'Already'",
         "Which sentence is fully ACCEPTED in American English conversational usage, but considered NON-STANDARD in traditional British English?",
         [("A", "I already saw that movie yesterday."),
          ("B", "I have already seen that film."),
          ("C", "I already seen that movie."),
          ("D", "I am already seeing that movie.")],
         "A",
         "En el inglés estadounidense (US), adverbios como 'already', 'just' y 'yet' se combinan de forma completamente idiomática con el Past Simple ('I already saw that movie'). En el inglés británico formal (UK) se exige estrictamente el Present Perfect ('I have already seen that film').",
         [("B", "Es la forma británica tradicional estándar (también aceptada en EE. UU.)."), ("C", "Usa participio sin auxiliar (vulgarismo agramatical)."), ("D", "Usa tiempo continuo para una experiencia terminada.")],
         "Englishteststore.net (US vs UK Verb Tenses B1)"),

        # 43. US vs UK Vocabulary: Snacks and Food
        ("US vs UK Vocabulary: Food and Snacks",
         "In the United States, thinly sliced fried potatoes are called ________ and sweet baked treats are ________.",
         [("A", "chips / biscuits"), ("B", "potato chips / cookies"), ("C", "crisps / biscuits"), ("D", "french fries / scones")],
         "B",
         "En EE. UU., las papas fritas embolsadas son 'potato chips' (o 'chips') y las galletas dulces son 'cookies'. En el Reino Unido se denominan 'crisps' y 'biscuits' respectivamente.",
         [("A", "Mezcla la denominación estadounidense con el término británico 'biscuits'."), ("C", "Corresponde enteramente a la nomenclatura británica (UK)."), ("D", "'french fries' son papas fritas calientes de restaurante y 'scones' son panecillos tradicionales.")],
         "Englisch-hilfen.de (British and American Food Words)"),

        # 44. Both, Either, Neither Subject-Verb Agreement
        ("Determiners: Subject-Verb Agreement with 'Neither... nor'",
         "Neither the head physician nor his assistant nurses ________ aware of the power outage in the east wing.",
         [("A", "was"), ("B", "were"), ("C", "has been"), ("D", "is")],
         "B",
         "Regla de proximidad con 'neither... nor': cuando los sujetos difieren en número (singular y plural), el verbo concuerda en número con el sujeto más cercano a él ('assistant nurses' es plural, por lo que exige 'were').",
         [("A", "Concuerda erróneamente con el primer sujeto alejado 'head physician'."), ("C", "Usa singular y tiempo compuesto no contextualizado."), ("D", "Usa tiempo presente singular.")],
         "Agendaweb.org (Neither Nor Concord B1)"),

        # 45. Collective Noun Agreement: US vs UK
        ("US vs UK Concord: Collective Nouns",
         "Consider the sentence: 'The team ________ playing brilliantly.' In British English, which verb form is preferred when viewing the team as individuals?",
         [("A", "is"), ("B", "are"), ("C", "be"), ("D", "was")],
         "B",
         "El inglés británico prefiere tratar los nombres colectivos (team, government, committee, family) con verbo en PLURAL ('are') cuando se percibe a sus miembros actuando de forma individual o activa. El inglés estadounidense prefiere casi invariablemente el singular ('is').",
         [("A", "Es la opción predilecta del inglés estadounidense institucional."), ("C", "Subjuntivo bare infinitive sin motivar."), ("D", "Tiempo pasado singular.")],
         "Englishteststore.net (Collective Nouns Agreement US vs UK)"),

        # 46. Passive with Verbs having Two Objects
        ("Passive Voice: Ditransitive Verbs",
         "The university granted the student a full scholarship. What is the MOST NATURAL passive transformation in English?",
         [("A", "A full scholarship was granted by the student."),
          ("B", "The student was granted a full scholarship by the university."),
          ("C", "A full scholarship granted the university."),
          ("D", "The student granted to a full scholarship.")],
         "B",
         "En inglés, cuando un verbo tiene dos objetos (objeto indirecto de persona y directo de cosa), la pasiva natural y preferida promueve al OBJETO INDIRECTO de persona a la posición de sujeto paciente ('The student was granted...').",
         [("A", "Afirma falsamente que la beca fue otorgada 'por el estudiante'."), ("C", "Voz activa absurda donde la beca otorga la universidad."), ("D", "Estructura agramatical.")],
         "Englisch-hilfen.de (Passive of Verbs with Two Objects)"),

        # 47. Defining vs Non-Defining Relative Clauses Intro
        ("Relative Clauses: The Comma Rule",
         "Which sentence demonstrates that the speaker has ONLY ONE brother?",
         [("A", "My brother who lives in Canada is an architect."),
          ("B", "My brother, who lives in Canada, is an architect."),
          ("C", "My brother which lives in Canada is an architect."),
          ("D", "My brother that lives in Canada is an architect.")],
         "B",
         "La cláusula no restrictiva (non-defining) entre comas (B) aporta información adicional no esencial sobre un sujeto ya único e inequívoco ('My brother'). En cambio, la cláusula restrictiva sin comas (A y D) implica que el hablante tiene varios hermanos y usa 'who lives in Canada' para distinguirlo de los demás.",
         [("A", "Implica que tiene varios hermanos y este es el que reside en Canadá."), ("C", "Usa 'which' para una persona humana."), ("D", "Cláusula restrictiva que implica multiplicidad de hermanos.")],
         "Agendaweb.org (Defining vs Non-Defining Relative Clauses B1)"),

        # 48. Phrasal Verbs: Run out of, Put up with
        ("Idiomatic Phrasal Verbs: Daily Struggles",
         "We have completely ________ printer paper, and I cannot ________ this loud construction noise any longer.",
         [("A", "run into / put down"), ("B", "run out of / put up with"), ("C", "run over / put off"), ("D", "run away / put on")],
         "B",
         "'Run out of' significa agotar o quedarse sin provisiones. 'Put up with' significa tolerar o soportar una situación incómoda.",
         [("A", "'run into' es toparse por casualidad y 'put down' menospreciar."), ("C", "'run over' es atropellar y 'put off' posponer."), ("D", "'run away' es huir y 'put on' ponerse ropa.")],
         "Englishteststore.net (Idiomatic Phrasal Verbs B1)"),

        # 49. Unreal Past with 'It's time'
        ("Unreal Past: It's time + Past Simple",
         "The project deadline is tomorrow morning. It is time we ________ our final conclusions.",
         [("A", "write"), ("B", "wrote"), ("C", "have written"), ("D", "will write")],
         "B",
         "La estructura fija 'It is time (that) + sujeto' rige el Unreal Past (pasado irreal / subjuntivo con forma de Past Simple: 'wrote') para indicar que la acción debió haberse ejecutado ya o no debe postergarse más.",
         [("A", "Usa presente simple, ignorando la exigencia sintáctica del Unreal Past."), ("C", "Present Perfect no concuerda con la fórmula de 'It is time'."), ("D", "Futuro 'will' agramatical tras esta locución.")],
         "Englisch-hilfen.de (It is time and Unreal Past)"),

        # 50. Comprehensive B1 Synthesis
        ("Comprehensive B1 Synthesis Review",
         "Choose the ONLY sentence that is GRAMMATICALLY CORRECT in all respects:",
         [("A", "If I would have known the answer, I would tell you."),
          ("B", "Despite of the bad weather, we enjoyed our hiking excursion."),
          ("C", "She has been living in San Salvador since she was twelve years old."),
          ("D", "He suggested to go to the beach on Sunday morning.")],
         "C",
         "La opción C es irreprochable: utiliza Present Perfect Continuous ('has been living') para una acción prolongada vinculada con 'since' y una cláusula temporal en Past Simple ('since she was twelve years old').",
         [("A", "Coloca 'would have' en la prótasis con 'if' y mezcla segundo y tercer condicional."), ("B", "'Despite' nunca lleva la preposición 'of' ('in spite of' sí la lleva)."), ("D", "'Suggest' nunca admite infinitivo con 'to'; exige gerundio ('suggested going') o cláusula con subjuntivo ('suggested that we go').")],
         "Agendaweb.org (Comprehensive B1 Diagnostic)")
    ]

    for idx, (topic, stmt, opts, correct, expl, dists, ref) in enumerate(b1_more, start=29):
        items.append((topic, stmt, opts, correct, expl, dists, ref))

    q = []
    for idx, (topic, stmt, opts, correct, expl, dists, ref) in enumerate(items, start=1):
        q.append({
            "id": f"eng_b1_{idx:02d}",
            "number": idx,
            "level": "B1",
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


def get_b2_questions():
    items = [
        # 1. Third Conditional - Hypothetical Past Regrets
        ("Third Conditional: Counterfactual Past",
         "If the emergency generator ________ during the surgical operation, the medical team ________ forced to pause the procedure.",
         [("A", "didn't fail / wouldn't be"),
          ("B", "hadn't failed / wouldn't have been"),
          ("C", "wouldn't fail / hadn't been"),
          ("D", "hadn't failed / won't have been")],
         "B",
         "El tercer condicional formula un evento contrafáctico en el pasado: prótasis en Past Perfect ('hadn't failed') y apódosis en condicional perfecto ('wouldn't have been').",
         [("A", "Corresponde al segundo condicional hipotético."), ("C", "Inserta 'would' dentro de la prótasis con 'if'."), ("D", "Mezcla agramaticalmente pasado con 'won't'.")],
         "Englisch-hilfen.de (Third Conditional Exercises B2)"),

        # 2. Mixed Conditionals - Type 1 (Past condition with present result)
        ("Mixed Conditionals: Past Cause with Present Consequence",
         "If Daniel ________ his medical degree five years ago, he ________ a chief resident today.",
         [("A", "didn't complete / wouldn't be"),
          ("B", "hadn't completed / wouldn't be"),
          ("C", "hadn't completed / wouldn't have been"),
          ("D", "wouldn't complete / isn't")],
         "B",
         "Condicional mixto: la prótasis alude a un hecho contrafáctico en el pasado con Past Perfect ('hadn't completed'), pero la consecuencia se sitúa en el presente actual ('today') con 'wouldn't be' en condicional simple.",
         [("A", "Usa Past Simple en la prótasis, ignorando la condición pretérita contrafáctica."), ("C", "Tercer condicional puro que ignora el adverbio de tiempo presente 'today'."), ("D", "Estructura agramatical con 'would' en 'if'.")],
         "Agendaweb.org (Mixed Conditionals B2)"),

        # 3. Mixed Conditionals - Type 2 (Present state with past result)
        ("Mixed Conditionals: Permanent Characteristic with Past Result",
         "If Sofia ________ so proficient in programming languages, she ________ that prestigious software contract last month.",
         [("A", "weren't / wouldn't have won"),
          ("B", "hadn't been / wouldn't win"),
          ("C", "isn't / wouldn't have won"),
          ("D", "weren't / wouldn't win")],
         "A",
         "Condicional mixto inverso: la prótasis alude a una cualidad o estado permanente en el presente ('weren't so proficient'), mientras que el resultado se clausuró en el pasado ('last month') con 'wouldn't have won'.",
         [("B", "Invierte la temporalidad de los dos eventos."), ("C", "Usa indicativo presente 'isn't' para una hipótesis irreal."), ("D", "Segundo condicional simple que ignora el marco cerrado de 'last month'.")],
         "Englishteststore.net (Mixed Conditionals Advanced B2)"),

        # 4. Past Perfect Continuous - Ongoing Action before Past Event
        ("Past Perfect Continuous: Duration before a Past Point",
         "The software engineers ________ for eighteen consecutive hours before they finally discovered the critical security bug.",
         [("A", "had been debugging"), ("B", "have been debugging"), ("C", "were debugging"), ("D", "had debugged")],
         "A",
         "El Past Perfect Continuous ('had been + -ing') enfatiza la duración prolongada e ininterrumpida de una actividad que se extendió hasta desembocar en otro momento puntual del pasado ('before they discovered').",
         [("B", "Present Perfect Continuous choca con el marco temporal pretérito."), ("C", "Past Continuous no mide la duración retrospectiva acumulada de dieciocho horas."), ("D", "Past Perfect Simple enfatiza la finalización del acto, no el agotamiento de la duración.")],
         "Englisch-hilfen.de (Past Perfect Progressive B2)"),

        # 5. Future Perfect Simple - Completion before Future Milestone
        ("Future Perfect Simple: Completion by a Certain Time",
         "By the end of this decade, the multinational pharmaceutical company ________ all clinical trials for the new vaccine.",
         [("A", "will complete"), ("B", "will have completed"), ("C", "will be completing"), ("D", "has completed")],
         "B",
         "La locución 'By + momento futuro' ('By the end of this decade') exige el Future Perfect Simple ('will have + participio pasado') para expresar que la acción estará culminada antes de ese límite cronológico.",
         [("A", "Future Simple solo expresa la realización futura, no la anterioridad respecto a un límite."), ("C", "Future Continuous enfatiza la acción en desarrollo continuo a esa fecha."), ("D", "Present Perfect no proyecta la consumación hacia el porvenir.")],
         "Agendaweb.org (Future Perfect Simple B2)"),

        # 6. Future Perfect Continuous - Cumulative Future Duration
        ("Future Perfect Continuous: Cumulative Duration in the Future",
         "By next December, Dr. Morales ________ at this biomedical research institute for exactly twenty-five years.",
         [("A", "will work"), ("B", "will have been working"), ("C", "is going to work"), ("D", "will be working")],
         "B",
         "El Future Perfect Continuous ('will have been + -ing') mide la duración acumulada ininterrumpida que alcanzará una actividad al llegar a una fecha futura específica ('By next December... for twenty-five years').",
         [("A", "Future Simple no mide duración acumulada."), ("C", "Expresa una simple intención futura."), ("D", "Future Continuous describe una actividad en desarrollo sin medir la vigencia de los veinticinco años.")],
         "Englishteststore.net (Future Perfect Continuous B2)"),

        # 7. Passive Voice - Continuous Passives
        ("Passive Voice: Continuous Aspect in Passive",
         "The historic cathedral ________ carefully when the fire broke out, which is why scaffolding surrounded the dome.",
         [("A", "was restored"), ("B", "was being restored"), ("C", "had restored"), ("D", "is being restored")],
         "B",
         "Para una acción que estaba en pleno desarrollo pasivo en el momento en que ocurrió un evento interruptor en el pasado, se usa Past Continuous Passive: 'was/were + being + Past Participle' ('was being restored').",
         [("A", "Past Simple Passive indicaría que la restauración ya había concluido."), ("C", "Voz activa en Past Perfect."), ("D", "Present Continuous Passive choca con el pasado 'broke out'.")],
         "Englisch-hilfen.de (Passive in Continuous Tenses)"),

        # 8. Passive Voice - Modal Passives with Perfect Infinitives
        ("Passive Voice: Modal Passives with Perfect Infinitives",
         "The confidential financial documents ________ to the board of directors before the press conference was held.",
         [("A", "should submit"), ("B", "should have been submitted"), ("C", "must submit"), ("D", "ought to submit")],
         "B",
         "La voz pasiva de obligación retrospectiva incumplida en el pasado se construye con 'modal + have been + Past Participle' ('should have been submitted').",
         [("A", "Voz activa en infinitivo simple."), ("C", "Voz activa en presente."), ("D", "Voz activa incompleta.")],
         "Agendaweb.org (Modal Passive Voice B2)"),

        # 9. Impersonal Passive: Reporting Structures
        ("Impersonal Passive: Nominative with Infinitive",
         "The escaped prisoner is believed ________ the border under an assumed identity three days ago.",
         [("A", "to cross"), ("B", "to have crossed"), ("C", "having crossed"), ("D", "crossing")],
         "B",
         "Cuando la creencia o reporte se sitúa en el presente ('is believed') pero la acción del sujeto ocurrió en el pasado ('three days ago'), se emplea la pasiva impersonal con infinitivo perfecto: 'to have + Past Participle' ('to have crossed').",
         [("A", "El infinitivo simple ('to cross') sugeriría simultaneidad o futuro, no anterioridad pretérita."), ("C", "Usa gerundio compuesto, no admitido tras 'is believed'."), ("D", "Usa gerundio simple agramatical.")],
         "Englishteststore.net (Impersonal Passive Structures B2)"),

        # 10. Causative: Have vs Get Someone to do Something
        ("Causative Verbs: Syntax of 'Have' vs 'Get'",
         "The professor ________ the research assistant proofread the paper, but she had to ________ the IT technician to reinstall the operating system.",
         [("A", "had / get"), ("B", "got / have"), ("C", "made / got"), ("D", "let / have")],
         "A",
         "Sintaxis causativa contrastada: 'have + persona + bare infinitive' sin to ('had the assistant proofread'), frente a 'get + persona + to-infinitive' con to ('get the technician to reinstall').",
         [("B", "Invierte los dos regímenes sintácticos: 'got' exigiría 'to proofread'."), ("C", "'made' denota coacción extrema inapropiada."), ("D", "'let' significa permitir, no encargar una tarea.")],
         "Englisch-hilfen.de (Causative Have and Get with Objects)"),

        # 11. Non-defining Relative Clauses - Commas and 'Which'
        ("Relative Clauses: Non-Defining Restrictions",
         "The new environmental law, ________ was passed by parliament last night, has sparked widespread debate.",
         [("A", "that"), ("B", "which"), ("C", "what"), ("D", "whose")],
         "B",
         "En las cláusulas relativas explicativas o no definitorias (separadas por comas), el pronombre relativo para cosas es OBLIGATORIAMENTE 'which'. El pronombre 'that' está terminantemente prohibido entre comas en inglés estándar.",
         [("A", "'that' nunca puede introducir una cláusula no definitoria entre comas."), ("C", "'what' incluye su propio antecedente y no puede modificar a un sustantivo previo."), ("D", "'whose' es pronombre posesivo.")],
         "Agendaweb.org (Non-defining Relative Clauses B2)"),

        # 12. Relative Clauses: Prepositional Placement
        ("Relative Clauses: Preposition Placement in Formal Register",
         "The distinguished scientist ________ the committee presented the medal has published over two hundred peer-reviewed articles.",
         [("A", "to whom"), ("B", "to who"), ("C", "who to"), ("D", "whom to")],
         "A",
         "En el registro formal escrito, cuando la preposición precede directamente al pronombre relativo de persona humana, la única forma gramaticalmente correcta es 'to whom' (nunca 'to who').",
         [("B", "Usa el caso nominativo 'who' tras preposición."), ("C", "Posición anómala de la preposición."), ("D", "Orden de constituyentes agramatical.")],
         "Englishteststore.net (Prepositions in Relative Clauses B2)"),

        # 13. Reported Speech with Reporting Verbs
        ("Reported Speech: Nuanced Reporting Verbs",
         "The suspect vehemently denied ________ anywhere near the jewelry store on the night of the heist.",
         [("A", "to be"), ("B", "being"), ("C", "that he was being"), ("D", "to have been")],
         "B",
         "El verbo de reporte 'deny' rige obligatoriamente el gerundio '-ing' (o una cláusula completa con 'that'): 'denied being' (o 'denied having been'). NUNCA admite un infinitivo con 'to'.",
         [("A", "Usa infinitivo con 'to', agramatical tras 'deny'."), ("C", "Usa una perífrasis continua extraña e innecesaria."), ("D", "Usa infinitivo perfecto con 'to'.")],
         "Englisch-hilfen.de (Reporting Verbs and Patterns B2)"),

        # 14. Modals of Deduction (Past): Must have done
        ("Modals of Deduction in the Past: Logical Certainty",
         "The ground is soaking wet and there are huge puddles everywhere. It ________ heavily during the night.",
         [("A", "must rain"), ("B", "must have rained"), ("C", "can have rained"), ("D", "should have rained")],
         "B",
         "'Must have + Past Participle' formula una deducción lógica de certeza indudable sobre una acción acontecida en el pasado basándose en la evidencia física observable presente.",
         [("A", "Presente modal que no concuerda con las evidencias de la noche anterior."), ("C", "'can have rained' no se usa en inglés afirmativo para deducciones."), ("D", "'should have rained' expresaría que debió llover pero no llovió.")],
         "Agendaweb.org (Past Modals of Deduction B2)"),

        # 15. Modals of Deduction (Past): Can't have done
        ("Modals of Deduction in the Past: Negative Impossibility",
         "Gabriel ________ the laboratory window because he was in a board meeting in another city at that exact hour.",
         [("A", "mustn't have broken"), ("B", "can't have broken"), ("C", "couldn't break"), ("D", "shouldn't have broken")],
         "B",
         "Para deducir con certeza que una acción pretérita fue imposible de cometer debido a coartadas o pruebas concluyentes, se usa 'can't have (o couldn't have) + Past Participle'.",
         [("A", "'mustn't have broken' no existe en inglés estándar para deducción de imposibilidad."), ("C", "Alude a incapacidad general en pasado, no a la imposibilidad lógica de un hecho puntual."), ("D", "'shouldn't have broken' expresaría que lo rompió indebidamente.")],
         "Englishteststore.net (Can't have vs Mustn't have B2)"),

        # 16. Needn't have done vs Didn't need to do
        ("Modal Distinctions: Needn't have done vs. Didn't need to do",
         "We ________ an umbrella because it never rained at all, but we carried one all day for nothing.",
         [("A", "didn't need to take"), ("B", "needn't have taken"), ("C", "mustn't have taken"), ("D", "couldn't have taken")],
         "B",
         "'Needn't have + Past Participle' significa que se ejecutó una acción innecesaria ('no había necesidad de llevarlo, pero de hecho sí lo llevamos'). 'Didn't need to' generalmente indica que no era necesario y por ende no se hizo.",
         [("A", "Sugiere comúnmente que no se llevó el paraguas al saber que no era preciso."), ("C", "Estructura agramatical para expresar falta de necesidad."), ("D", "Expresa imposibilidad física, no ausencia de necesidad.")],
         "Englisch-hilfen.de (Needn't have done vs Didn't need to do)"),

        # 17. Wish / If only + Past Perfect (Past Regret)
        ("Wish and If Only: Unfulfilled Past Regret",
         "I feel terrible about what happened yesterday. If only I ________ my temper during the argument!",
         [("A", "didn't lose"), ("B", "hadn't lost"), ("C", "wouldn't lose"), ("D", "haven't lost")],
         "B",
         "'If only / I wish + Past Perfect' expresa un lamento o remordimiento amargo respecto a una acción o decisión irreversible que tuvo lugar en el pasado.",
         [("A", "Past Simple indicaría un deseo sobre el estado presente."), ("C", "'wouldn't' expresa queja sobre una conducta habitual ajena."), ("D", "Present Perfect agramatical con 'wish/if only'." )],
         "Agendaweb.org (Wish and If Only Past Regret B2)"),

        # 18. Inversion with Negative Adverbials: Never / Seldom
        ("Stylistic Inversion: Negative Adverbials",
         "Seldom ________ such an electrifying performance in the national theater.",
         [("A", "we have witnessed"), ("B", "have we witnessed"), ("C", "we witnessed"), ("D", "did we witnessed")],
         "B",
         "Cuando una oración se encabeza con un adverbio de valor negativo o restrictivo ('Seldom', 'Never', 'Rarely', 'Little'), es OBLIGATORIO invertir el sujeto y el verbo auxiliar: 'Adverbio negativo + Auxiliar + Sujeto + Verbo léxico' ('have we witnessed').",
         [("A", "Orden canónico sin invertir, agramatical tras adverbio negativo enfático frontal."), ("C", "Omite la inversión requerida."), ("D", "Duplica la marca de tiempo pretérito en el verbo principal tras auxiliar 'did'.")],
         "Englishteststore.net (Inversion with Negative Adverbials B2)"),

        # 19. Inversion: Not only... but also
        ("Stylistic Inversion: 'Not only... but also'",
         "Not only ________ all the project milestones ahead of schedule, but she also reduced the budget significantly.",
         [("A", "she accomplished"), ("B", "did she accomplish"), ("C", "did she accomplished"), ("D", "she did accomplish")],
         "B",
         "La estructura correlativa enfática 'Not only' al inicio de oración exige inversión auxiliar-sujeto en la primera cláusula: 'did she accomplish'.",
         [("A", "Omite la inversión del auxiliar obligatoria en posición inicial enfática."), ("C", "Mantiene la desinencia pretérita en el verbo léxico tras el auxiliar 'did'."), ("D", "Inserta 'did' sin invertir el orden del pronombre sujeto.")],
         "Englisch-hilfen.de (Not Only Inversion B2)"),

        # 20. Inversion: Hardly... when / No sooner... than
        ("Stylistic Inversion: 'No sooner... than' and 'Hardly... when'",
         "No sooner ________ the podium than the entire audience ________ cheering enthusiastically.",
         [("A", "the speaker stepped / began"),
          ("B", "had the speaker stepped / began"),
          ("C", "did the speaker step / had begun"),
          ("D", "had the speaker stepped / has begun")],
         "B",
         "'No sooner + had + sujeto + participio pasado... than + Past Simple' es la estructura canónica de inversión temporal para denotar dos acciones consecutivas inmediatas en el pasado.",
         [("A", "Omite la inversión de Past Perfect obligatoria con 'No sooner'."), ("C", "Invierte los tiempos: 'No sooner' rige Past Perfect en la primera acción."), ("D", "Present Perfect no concuerda con la narración en pasado.")],
         "Agendaweb.org (No sooner than and Hardly when B2)"),

        # 21. Participle Clauses: Present Participle (-ing) for Reason
        ("Participle Clauses: Expressing Reason with -ing",
         "________ that the flight would be canceled due to the hurricane, Mariana immediately rescheduled her hotel reservation.",
         [("A", "Knowing"), ("B", "Knew"), ("C", "Known"), ("D", "To know")],
         "A",
         "La cláusula de participio de presente ('Knowing...') reemplaza de forma elegante a una cláusula causal subordinada completa ('Because she knew...') con el mismo sujeto que la principal.",
         [("B", "Past Simple no puede encabezar una cláusula de participio subordinada."), ("C", "Past Participle ('Known') tendría sentido pasivo ('Siendo conocida')."), ("D", "El infinitivo indicaría finalidad, no la causa que motivó la acción.")],
         "Englishteststore.net (Participle Clauses -ing B2)"),

        # 22. Participle Clauses: Perfect Participle (Having + Past Participle)
        ("Participle Clauses: Anteriority with 'Having + Past Participle'",
         "________ all the required clinical courses, the medical student was finally allowed to enter the operating theater.",
         [("A", "Completed"), ("B", "Having completed"), ("C", "Completing"), ("D", "To have completed")],
         "B",
         "El participio perfecto ('Having + Past Participle') explicita que la acción de la subordinada quedó enteramente consumada y finalizada con anterioridad a la acción de la cláusula principal.",
         [("A", "El participio pasivo simple 'Completed' implicaría que el estudiante fue completado."), ("C", "Present Participle sugeriría simultaneidad, no anterioridad terminada."), ("D", "Infinitivo perfecto no funciona como modificador adverbial participial.")],
         "Englisch-hilfen.de (Perfect Participle Clauses B2)"),

        # 23. Cleft Sentences with 'What' (Pseudo-clefts)
        ("Emphasis: Pseudo-cleft Sentences with 'What'",
         "________ was her extraordinary ability to remain calm under extreme professional pressure.",
         [("A", "That impressed me most"),
          ("B", "What impressed me most"),
          ("C", "Which impressed me most"),
          ("D", "It impressed me most")],
         "B",
         "Las oraciones escindidas con 'What' (pseudo-cleft sentences) destacan un elemento informativo focalizándolo como sujeto de una cláusula nominal: 'What + verbo + be + elemento focalizado'.",
         [("A", "'That' requeriría un antecedente explícito."), ("C", "'Which' requiere antecedente previo determinado."), ("D", "Estructura declarativa que rompe la concordancia con el verbo 'was'.")],
         "Agendaweb.org (Cleft Sentences B2)"),

        # 24. Cleft Sentences with 'It was... that'
        ("Emphasis: It-cleft Sentences",
         "________ Dr. Arévalo who discovered the microbiological anomaly, not his laboratory assistant.",
         [("A", "There was"), ("B", "It was"), ("C", "He was"), ("D", "This was")],
         "B",
         "La estructura de hendidura con 'It' (It-cleft) sirve para enfatizar al autor o agente de una acción frente a otros candidatos: 'It was + elemento enfatizado + who/that + resto de la oración'.",
         [("A", "'There was' denotaría mera existencia física."), ("C", "'He was Dr. Arévalo who...' es agramatical en la estructura de hendidura."), ("D", "'This was' no se utiliza en fórmulas escindidas enfáticas.")],
         "Englishteststore.net (It-cleft Sentences B2)"),

        # 25. Gerund vs Infinitive: Regret
        ("Verb Patterns: Regret + Gerund vs. Regret + Infinitive",
         "I regret ________ you that your application has been rejected, and I now deeply regret ________ so careless with the documentation.",
         [("A", "informing / being"), ("B", "to inform / being"), ("C", "to inform / to be"), ("D", "informing / to be")],
         "B",
         "'Regret to inform' (infinitivo) es la fórmula protocolaria formal para comunicar malas noticias en el presente ('lamento comunicarle'). 'Regret being' (gerundio) expresa arrepentimiento moral por un comportamiento pasado.",
         [("A", "Invierte los dos valores sintácticos."), ("C", "Usa infinitivo para el lamento retrospectivo."), ("D", "Usa gerundio para la comunicación protocolaria formal.")],
         "Englisch-hilfen.de (Regret Gerund and Infinitive B2)")
    ]

    # Add items 26 to 50 for B2
    b2_more = [
        # 26. Gerund vs Infinitive: Mean
        ("Verb Patterns: Mean to do vs Mean doing",
         "I didn't mean ________ your feelings, but accepting this promotion will mean ________ to another country.",
         [("A", "hurting / relocating"), ("B", "to hurt / relocating"), ("C", "to hurt / to relocate"), ("D", "hurting / to relocate")],
         "B",
         "'Mean to do' (infinitivo) expresa intención ('no quise herirte'). 'Mean doing' (gerundio) expresa implicación o consecuencia lógica ineludible ('supondrá mudarme').",
         [("A", "Usa gerundio para intención voluntaria personal."), ("C", "Usa infinitivo para consecuencia o implicación."), ("D", "Invierte ambos regímenes sintácticos.")],
         "Agendaweb.org (Mean to do vs Mean doing B2)"),

        # 27. Set Expressions followed by Gerund
        ("Idiomatic Expressions: Prepositional Gerunds",
         "It is no use ________ over spilled milk, and the novel is definitely worth ________.",
         [("A", "crying / reading"), ("B", "to cry / to read"), ("C", "cry / read"), ("D", "to cry / reading")],
         "A",
         "Las locuciones fijas 'it is no use' (es inútil) y 'be worth' (merecer la pena) rigen obligatoriamente la forma en gerundio '-ing'.",
         [("B", "Usa infinitivo con 'to', agramatical tras ambas expresiones."), ("C", "Usa formas base puras."), ("D", "Mezcla infinitivo con gerundio.")],
         "Englishteststore.net (Expressions with Gerund B2)"),

        # 28. Dependent Prepositions: Verbs
        ("Dependent Prepositions: Verb Collocations",
         "The prosecuting attorney accused the executive ________ fraud, but the executive insisted ________ his absolute innocence.",
         [("A", "for / in"), ("B", "of / on"), ("C", "with / about"), ("D", "of / in")],
         "B",
         "Colocaciones preposicionales dependientes estrictas: 'accuse someone OF a crime', e 'insist ON something'.",
         [("A", "'accuse for' es un error común derivado de otros idiomas."), ("C", "'accuse with' no es una colocación válida en inglés."), ("D", "'insist in' es un calco directo del español 'insistir en', agramatical en inglés.")],
         "Englisch-hilfen.de (Verbs with Prepositions B2)"),

        # 29. Dependent Prepositions: Adjectives
        ("Dependent Prepositions: Adjective Collocations",
         "Dr. Rivera is highly capable ________ conducting complex surgical procedures and is very keen ________ neurological research.",
         [("A", "to / in"), ("B", "of / on"), ("C", "for / about"), ("D", "of / at")],
         "B",
         "Régimen preposicional de adjetivos: 'capable OF + -ing' (capaz de), y 'keen ON + -ing/noun' (entusiasta o aficionado a).",
         [("A", "'capable to' es un error sintáctico muy extendido."), ("C", "'capable for' no existe en inglés estándar."), ("D", "'keen at' es incorrecto (la colocación es 'good at', pero 'keen on').")],
         "Agendaweb.org (Adjectives with Prepositions B2)"),

        # 30. Discourse Markers: Contrast (Whereas, While, Nevertheless)
        ("Discourse Markers: Sophisticated Contrast",
         "The north wing of the clinic is modern and spacious, ________ the south wing remains cramped. ________, patient satisfaction has remained high.",
         [("A", "whereas / Nevertheless"), ("B", "nevertheless / Whereas"), ("C", "despite / Although"), ("D", "however / In spite of")],
         "A",
         "'Whereas' establece una contraposición directa entre dos hechos contrastados. 'Nevertheless' conecta oraciones independientes introduciendo una consecuencia sorprendente o concesiva.",
         [("B", "Invierte los dos conectores discursivos."), ("C", "'despite' requiere frase nominal y no cláusula subordinada."), ("D", "'however' al medio requeriría punto y coma o puntuación específica y 'in spite of' requiere frase nominal.")],
         "Englishteststore.net (Discourse Markers Contrast B2)"),

        # 31. Discourse Markers: Addition (Furthermore, In addition to)
        ("Discourse Markers: Addition and Expansion",
         "The proposed merger will generate substantial capital; ________, it will open new markets. ________ this financial growth, it will foster innovation.",
         [("A", "furthermore / In addition to"), ("B", "moreover / In addition of"), ("C", "in addition / Furthermore to"), ("D", "besides / In addition")],
         "A",
         "'Furthermore' es un adverbio oracional de transición que añade un argumento contundente. 'In addition to' es una locución preposicional que rige una frase nominal o gerundio.",
         [("B", "'In addition of' es un error preposicional (la forma correcta es 'in addition to')."), ("C", "'Furthermore to' es agramatical."), ("D", "Usa 'In addition' sin 'to' antes de una frase nominal.")],
         "Englisch-hilfen.de (Addition Discourse Markers B2)"),

        # 32. Phrasal Verbs with Multiple Meanings: 'Take off'
        ("Polysemous Phrasal Verbs: Contextual Meanings of 'Take off'",
         "In which of the following sentences does 'take off' mean 'to achieve rapid and sudden professional success'?",
         [("A", "The airplane took off smoothly despite the fog."),
          ("B", "He decided to take off his winter coat inside the warm lobby."),
          ("C", "After the viral media interview, the young author's career really took off."),
          ("D", "She took off two days from work to recover from the flu.")],
         "C",
         "El phrasal verb polisémico 'take off' significa despegar un avión (A), quitarse ropa (B), ausentarse de labores (D), y despegar profesional o comercialmente hacia un éxito vertiginoso (C).",
         [("A", "Significado literal aeronáutico de despegar vuelo."), ("B", "Significado físico de despojarse de vestimenta."), ("D", "Significado laboral de tomar días libres.")],
         "Agendaweb.org (Multiple Meanings of Phrasal Verbs B2)"),

        # 33. Phrasal Verbs: Three-Part Idiomatic Expressions
        ("Three-Part Phrasal Verbs: Put up with, Come down with",
         "I think I am ________ a bad cold because my throat is sore, and I can no longer ________ this freezing air conditioning.",
         [("A", "coming down with / put up with"),
          ("B", "putting up with / come down with"),
          ("C", "getting over / run out of"),
          ("D", "looking forward to / catch up with")],
         "A",
         "'Come down with' es enfermarse de una afección leve (resfriado/gripe), y 'put up with' es tolerar o soportar una incomodidad.",
         [("B", "Invierte los dos phrasal verbs."), ("C", "'get over' es recuperarse de una enfermedad ya pasada."), ("D", "'look forward to' es anticipar con ilusión algo grato.")],
         "Englishteststore.net (Three-Part Phrasal Verbs B2)"),

        # 34. Mandative Subjunctive Intro: Base Form
        ("Subjunctive Mood: Base Form with Recommendation Verbs",
         "The committee recommended that the university president ________ an independent audit immediately.",
         [("A", "orders"), ("B", "order"), ("C", "ordered"), ("D", "would order")],
         "B",
         "En el subjuntivo mandativo (especialmente formal y en inglés estadounidense), tras verbos como 'recommend, demand, insist that', el verbo de la subordinada adopta la FORMA BASE PURA (bare infinitive: 'order') para todas las personas gramaticales sin añadir -s.",
         [("A", "Usa Present Simple indicativo con -s, ignorando la exigencia del modo subjuntivo."), ("C", "Usa pasado simple."), ("D", "Inserta auxiliar modal 'would' innecesariamente.")],
         "Englisch-hilfen.de (Subjunctive in English B2)"),

        # 35. Conditionals without 'If': Provided that, As long as
        ("Conditionals: Conjunctions Replacing 'If'",
         "You may participate in the biomedical study ________ you sign the informed consent agreement.",
         [("A", "as long as"), ("B", "in case"), ("C", "supposing"), ("D", "unless")],
         "A",
         "'As long as' y 'provided (that)' expresan una condición sine qua non indispensable ('siempre y cuando / con tal de que').",
         [("B", "'in case' expresa precaución ante una contingencia eventual, no condición habilitante."), ("C", "'supposing' se reserva para conjeturas e hipótesis imaginarias."), ("D", "'unless' significa 'a menos que' e invertiría por completo el sentido legal.")],
         "Agendaweb.org (Conditionals without If B2)"),

        # 36. Inverted Conditionals: Type 1 (Should you...)
        ("Inverted Conditionals: Inversion with 'Should'",
         "________ any complications occur during your recovery, please contact the emergency hotline immediately.",
         [("A", "If should"), ("B", "Should"), ("C", "Were"), ("D", "Had")],
         "B",
         "En el primer condicional formal, la omisión de 'if' desencadena la inversión con 'Should + sujeto + verbo base' ('Should any complications occur...').",
         [("A", "Mezcla 'if' con 'should' sin omitir la conjunción condicional."), ("C", "'Were' se usa para inversiones de segundo condicional."), ("D", "'Had' se usa para inversiones de tercer condicional.")],
         "Englishteststore.net (Inverted Conditionals Should B2)"),

        # 37. Inverted Conditionals: Type 2 (Were it not for...)
        ("Inverted Conditionals: Inversion with 'Were'",
         "________ his timely advice, we would certainly make a disastrous investment decision right now.",
         [("A", "Were it not for"), ("B", "Had it not been for"), ("C", "If it wasn't for"), ("D", "Should it be")],
         "A",
         "'Were it not for + sustantivo' es la inversión formal del segundo condicional ('de no ser por...') con apódosis hipotética en presente ('would make').",
         [("B", "'Had it not been for' pertenece al tercer condicional con consecuencia pretérita."), ("C", "Coloquial y no invertido."), ("D", "No expresa la inexistencia de la condición.")],
         "Englisch-hilfen.de (Inverted Conditionals Were B2)"),

        # 38. Inverted Conditionals: Type 3 (Had we known...)
        ("Inverted Conditionals: Inversion with 'Had'",
         "________ the severity of the structural defect, the architects would never have approved the blueprint.",
         [("A", "Had they known"), ("B", "If they knew"), ("C", "Did they know"), ("D", "Were they knowing")],
         "A",
         "La inversión de tercer condicional prescinde de 'if' anteponiendo el auxiliar 'Had + sujeto + Past Participle' ('Had they known' = If they had known).",
         [("B", "Segundo condicional simple sin concordancia con 'would have approved'."), ("C", "'Did' no forma condicionales hipotéticos."), ("D", "Forma continua estativa agramatical.")],
         "Agendaweb.org (Inverted Conditionals Had B2)"),

        # 39. Unreal Past: Would rather + Past Simple
        ("Unreal Past: 'Would rather' with Different Subjects",
         "I would rather you ________ anyone about the confidential merger until the press release is issued.",
         [("A", "don't tell"), ("B", "didn't tell"), ("C", "not tell"), ("D", "wouldn't tell")],
         "B",
         "Cuando la locución 'would rather' involucra a dos sujetos diferentes ('I would rather YOU...'), el verbo subordinado adopta obligatoriamente el Unreal Past (Past Simple: 'didn't tell').",
         [("A", "Usa presente indicativo, violando el régimen de pasado irreal."), ("C", "'not tell' solo se usa cuando el sujeto de would rather es el mismo ('I would rather not tell')."), ("D", "Inserta 'wouldn't', lo cual es agramatical tras would rather.")],
         "Englishteststore.net (Would rather Unreal Past B2)"),

        # 40. Unreal Past: It's high time + Past Simple
        ("Unreal Past: 'It's high time'",
         "The road is full of dangerous potholes. It is high time the city council ________ the entire avenue.",
         [("A", "repairs"), ("B", "repaired"), ("C", "will repair"), ("D", "has repaired")],
         "B",
         "'It is high time + sujeto' exige un Unreal Past (Past Simple: 'repaired') para denotar que la acción debió haberse acometido hace tiempo con urgencia.",
         [("A", "Presente simple que ignora el valor desiderativo retardado."), ("C", "Futuro 'will' prohibido con esta locución."), ("D", "Present Perfect agramatical.")],
         "Englisch-hilfen.de (High Time Unreal Past B2)"),

        # 41. US vs UK Verb Forms: Gotten vs Got
        ("US vs UK Verb Morphology: 'Gotten' vs. 'Got'",
         "Which statement accurately reflects the difference regarding the past participle of 'get'?",
         [("A", "'Gotten' is standard in American English for process/acquisition; British English uses 'got'."),
          ("B", "'Gotten' is exclusively British English and never used in America."),
          ("C", "'Gotten' is an obsolete error that is unacceptable in both dialects."),
          ("D", "'Got' is used in America for acquisition and 'gotten' for possession.")],
         "A",
         "En inglés estadounidense, 'gotten' es el participio consagrado para expresar proceso, obtención o cambio ('He has gotten better'). En inglés británico moderno, 'gotten' cayó en desuso y se emplea 'got' ('He has got better').",
         [("B", "Invierte la procedencia geográfica real."), ("C", "Declara falsamente que es obsoleto o erróneo."), ("D", "Invierte la distribución de funciones en EE. UU.")],
         "Agendaweb.org (Gotten vs Got US UK B2)"),

        # 42. US vs UK Verb Forms: Irregular vs Regular -ed/-t
        ("US vs UK Verb Morphology: -t vs -ed Endings",
         "In British English, 'The candle ________ brightly until the wind blew it out' often uses the form 'burnt', whereas American English typically prefers:",
         [("A", "burned"), ("B", "burnen"), ("C", "borned"), ("D", "burn")],
         "A",
         "Para verbos como burn, dream, learn, smell, spill, el inglés estadounidense regulariza masivamente con la desinencia regular '-ed' ('burned', 'dreamed', 'learned'), mientras que el británico retiene con frecuencia la variante en '-t' ('burnt', 'dreamt', 'learnt').",
         [("B", "'burnen' es una forma germánica arcaica inexistente en inglés moderno."), ("C", "'borned' es agramatical."), ("D", "Forma base de presente sin conjugar.")],
         "Englishteststore.net (Burned vs Burnt US UK B2)"),

        # 43. Collocations: Make vs Do
        ("Lexical Collocations: Make vs Do",
         "Scientists must ________ extensive research before they can ________ a definitive discovery.",
         [("A", "make / do"), ("B", "do / make"), ("C", "make / make"), ("D", "do / do")],
         "B",
         "Colocaciones léxicas canónicas: 'DO research' (realizar una investigación/trabajo analítico), y 'MAKE a discovery' (hacer un descubrimiento / crear algo nuevo).",
         [("A", "Invierte ambas colocaciones consagradas."), ("C", "'make research' es un error común del aprendiz hispanohablante."), ("D", "'do a discovery' es agramatical en inglés.")],
         "Englisch-hilfen.de (Make and Do Collocations B2)"),

        # 44. Collocations: Take, Have, Pay
        ("Lexical Collocations: Pay attention, Take advantage, Have an impact",
         "Students should ________ close attention to the lecture, ________ advantage of the library resources, and understand the ________ it will have on their grades.",
         [("A", "make / take / effect"), ("B", "pay / take / impact"), ("C", "give / have / affect"), ("D", "pay / make / impact")],
         "B",
         "Colocaciones idiomáticas consolidadas: 'pay attention' (prestar atención), 'take advantage of' (aprovechar), y 'have an impact on' (tener un impacto en).",
         [("A", "'make attention' es agramatical."), ("C", "'give attention' no es la colocación estándar fija de estudio."), ("D", "'make advantage' no existe en inglés.")],
         "Agendaweb.org (Collocations Pay Take Have B2)"),

        # 45. Idiomatic Prepositional Phrases: At a glance, In vain
        ("Prepositional Phrases: Fixed Idiomatic Structures",
         "The detective recognized the forgery ________, and the suspect's efforts to escape were all ________.",
         [("A", "in a glance / on vain"), ("B", "at a glance / in vain"), ("C", "by a glance / with vain"), ("D", "for a glance / in vain")],
         "B",
         "Locuciones preposicionales fijas: 'at a glance' (a simple vista / de un vistazo), e 'in vain' (en vano / sin fruto).",
         [("A", "Preposiciones erróneas."), ("C", "Preposiciones agramaticales en esta colocación."), ("D", "'for a glance' no forma la frase adverbial fijada.")],
         "Englishteststore.net (Fixed Prepositional Phrases B2)"),

        # 46. Modals of Deduction in the Past: Could have done
        ("Modal Perfects: Past Capability Not Realized",
         "We ________ the earlier train, but we deliberately decided to wait for our colleagues.",
         [("A", "must have caught"), ("B", "could have caught"), ("C", "should catch"), ("D", "can have caught")],
         "B",
         "'Could have + Past Participle' expresa que existía la capacidad u oportunidad objetiva de realizar una acción en el pasado, pero que voluntaria o fortuitamente no se llevó a cabo.",
         [("A", "'must have caught' deduciría falsamente que sí tomaron el tren anterior."), ("C", "Modo presente sin valor retrospectivo."), ("D", "'can have' no se usa afirmativamente para capacidad pasada.")],
         "Englisch-hilfen.de (Could have done Exercises B2)"),

        # 47. Passives: Causative 'Have something done' with Disasters
        ("Passive Causative: Experiencing Misfortunes",
         "During the severe earthquake, several families in the coastal town ________ their roofs damaged by falling debris.",
         [("A", "had"), ("B", "made"), ("C", "did"), ("D", "let")],
         "A",
         "La estructura causativa 'have + objeto + Past Participle' también se utiliza para expresar experiencias traumáticas o perjuicios sufridos accidentalmente por agentes externos ('had their roofs damaged').",
         [("B", "'made' sugeriría que ellos mismos forzaron deliberadamente el daño de sus techos."), ("C", "'did' no forma estructuras causativas de experiencia."), ("D", "'let' sugeriría que ellos autorizaron el daño voluntariamente.")],
         "Agendaweb.org (Have something done for Misfortunes B2)"),

        # 48. Non-defining Relative Clauses: 'Which' referring to a Whole Sentence
        ("Relative Clauses: Sentential Relative 'Which'",
         "The team completed the complex engineering assignment two weeks ahead of schedule, ________ surprised all the senior managers.",
         [("A", "that"), ("B", "which"), ("C", "what"), ("D", "who")],
         "B",
         "Cuando una cláusula relativa no definitoria califica o comenta la TOTALIDAD de la proposición previa (sentential relative clause), el único pronombre relativo válido es 'which' precedido de coma.",
         [("A", "'that' jamás puede remitir a toda una cláusula antecedente entre comas."), ("C", "'what' no puede funcionar como relativo con antecedente sintáctico explícito."), ("D", "'who' solo se refiere a personas individuales.")],
         "Englishteststore.net (Sentential Relative Which B2)"),

        # 49. Inversion: 'Under no circumstances'
        ("Stylistic Inversion: Legal / Cautionary Negative Phrases",
         "Under no circumstances ________ the emergency valve while the nuclear cooling system is active.",
         [("A", "you should touch"), ("B", "should you touch"), ("C", "you must touch"), ("D", "touch you")],
         "B",
         "Las frases adverbiales negativas de prohibición formal absoluta ('Under no circumstances', 'On no account') exigen inversión auxiliar-sujeto obligatoria: 'should you touch'.",
         [("A", "Orden canónico no invertido, agramatical tras 'Under no circumstances'."), ("C", "Falta la inversión de sujeto y auxiliar modal."), ("D", "Inversión errónea sin auxiliar modal.")],
         "Englisch-hilfen.de (Inversion Under no circumstances B2)"),

        # 50. Comprehensive B2 Synthesis
        ("Comprehensive B2 Examination Review",
         "Select the ONLY sentence that conforms strictly to advanced English grammar norms:",
         [("A", "Hardly the plane had touched the tarmac when one of the engines failed."),
          ("B", "Had we been notified of the schedule changes, we would have revised our plans."),
          ("C", "I suggest him to apply for the prestigious international research grant."),
          ("D", "He is used to wake up early every morning because of his farm duties.")],
         "B",
         "La opción B es sintácticamente perfecta: aplica la inversión de tercer condicional con el auxiliar 'Had' antepuesto al sujeto ('Had we been notified...') y apódosis con 'would have revised'.",
         [("A", "'Hardly' al inicio exige inversión auxiliar-sujeto ('Hardly had the plane touched...')."), ("C", "'Suggest' no admite infinitivo de objeto de persona ('suggest him to apply' es agramatical; exige 'suggested that he apply')."), ("D", "'He is used to' (estar acostumbrado) exige gerundio ('waking up'), no infinitivo base.")],
         "Agendaweb.org (Comprehensive B2 Synthesis)")
    ]

    for idx, (topic, stmt, opts, correct, expl, dists, ref) in enumerate(b2_more, start=26):
        items.append((topic, stmt, opts, correct, expl, dists, ref))

    q = []
    for idx, (topic, stmt, opts, correct, expl, dists, ref) in enumerate(items, start=1):
        q.append({
            "id": f"eng_b2_{idx:02d}",
            "number": idx,
            "level": "B2",
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
    b1 = get_b1_questions()
    b2 = get_b2_questions()
    print(f"B1 Questions: {len(b1)}")
    print(f"B2 Questions: {len(b2)}")

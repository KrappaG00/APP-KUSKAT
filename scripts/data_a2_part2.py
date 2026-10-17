# -*- coding: utf-8 -*-
"""
APP-KUSKAT • English Lessons Bank: Level A2 (Part 2: Lessons 11 to 20)
Each class has >= 500 words of rigorous pedagogical and linguistic content.
"""
from lesson_utils import make_lesson

def get_a2_part2():
    lessons = []

    # -------------------------------------------------------------------------
    # Clase 11: Futuro con WILL: Decisiones Espontáneas, Predicciones y Promesas
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_11",
        "Clase 11: Futuro con WILL: Decisiones Espontáneas, Predicciones y Promesas",
        "A2",
        "Verbos Modales & Futuro",
        "El auxiliar modal will proyecta acciones futuras que surgen como decisiones espontáneas instantáneas en el momento de hablar, promesas formales, ofrecimientos voluntarios o predicciones subjetivas sin evidencia física inmediata.",
        "Afirmativo: Sujeto + WILL ('ll) + Verbo en forma base desnuda + Complemento: I will help you / She will call later. Negativo: Sujeto + will not (WON'T) + Verbo en forma base desnuda. Pregunta: Will + Sujeto + Verbo en forma base + Complemento? Respuestas cortas: Yes, I will / No, I won't.",
        "El verbo modal auxiliar 'WILL' es uno de los operadores de futuridad más versátiles y fundamentales de la lengua inglesa. A diferencia de 'be going to', que requiere un plan premeditado previo o una señal física visible en el presente, 'WILL' opera en un plano cognitivo y comunicativo completamente distinto. Su primer uso prototípico radica en las decisiones espontáneas adoptadas súbitamente en el preciso instante en que se habla (on-the-spot decisions): cuando un camarero pregunta qué deseamos comer, decimos 'I will have the soup' (decisión instantánea), o al sonar el timbre decimos 'I'll get it!' (ofrecimiento voluntario de acción inmediata). Su segundo uso abarca la formulación de promesas, votos de fidelidad y compromisos personales solemnes ('I promise I will never lie to you', 'We will deliver the shipment on time'). Su tercer uso se concentra en las ofertas y ofrecimientos de asistencia solidaria ('Those bags look heavy; I will carry them for you'). Finalmente, 'will' se emplea para emitir predicciones subjetivas, creencias y conjeturas abstractas sobre el porvenir que no cuentan con evidencias físicas palpables en el entorno inmediato, acompañándose habitualmente de verbos epistémicos como 'I think', 'I believe', 'I hope', 'I doubt', o de adverbios de probabilidad como 'probably' y 'maybe' ('I think scientists will discover a cure for cancer in the future'). En el plano morfosintáctico, 'will' es un modal invariable que no añade '-s' con He, She o It, no requiere auxiliares do/does para negar ni interrogar, rige infinitivo desnudo sin 'to', se contrae coloquialmente como ''ll' y genera la contracción negativa irregular 'won't' (/woʊnt/ en US, /wəʊnt/ en UK). En inglés británico tradicional se utilizaba 'SHALL' para la primera persona (I/We shall), reservándose hoy en día principalmente para ofrecimientos formales en preguntas: 'Shall I open the window?' o 'Shall we dance?'.",
        [
            "Invariabilidad absoluta: Will es invariable con todas las personas gramaticales: I will, you will, he will, she will, it will, we will, they will.",
            "Régimen de Infinitivo Desnudo (Bare Infinitive): Will va seguido directamente del verbo base sin 'to': 'I will go' (correcto), 'I will to go' (inadmisible).",
            "Decisiones espontáneas en el acto (On-the-spot decisions): Se utiliza cuando la resolución se toma al momento de hablar: 'The phone is ringing. I'll answer it!'.",
            "Promesas y compromisos (Promises): Se utiliza tras 'I promise': 'I will return your money on Friday, I promise'.",
            "Ofrecimientos voluntarios (Offers): Para brindar ayuda de inmediato: 'Don't worry, I will help you carry those boxes'.",
            "Predicciones subjetivas con I THINK / I BELIEVE: Se emplea para conjeturas abstractas: 'I think the weather will be pleasant tomorrow'.",
            "Contracción afirmativa ('LL) y negativa (WON'T): I'll, you'll, he'll, she'll, it'll, we'll, they'll. Negación: will not -> won't.",
            "Uso formal de SHALL en preguntas de ofrecimiento (UK): En British English culto, 'Shall I...?' y 'Shall we...?' se usan para ofrecer ayuda o hacer sugerencias: 'Shall I carry your coat?' / 'Shall we go now?'."
        ],
        [
            "Don't worry about the heavy research equipment; I will help you load the boxes into the delivery van. (No te preocupes por el equipo pesado de investigación; te ayudaré a cargar las cajas en la camioneta de reparto).",
            "I think that renewable solar technology will completely replace fossil fuels in electrical generation by the year 2050. (Creo que la tecnología solar renovable reemplazará completamente a los combustibles fósiles en la generación eléctrica para el año 2050).",
            "I promise that I will email you the updated financial analysis as soon as our department completes the quarterly review. (Prometo que te enviaré por correo electrónico el análisis financiero actualizado tan pronto como nuestro departamento complete la revisión trimestral).",
            "Will you be able to attend the international software conference in Chicago next month? Yes, I will; our company approved my registration. (¿Podrás asistir a la conferencia internacional de software en Chicago el próximo mes? Sí; nuestra empresa aprobó mi inscripción)."
        ],
        [
            "The headmaster will announce the winners of the academic excellence scholarship at the commencement ceremony tomorrow morning. (El director anunciará a los ganadores de la beca de excelencia académica en la ceremonia de graduación mañana por la mañana).",
            "Shall I brew a fresh pot of Earl Grey tea for our visiting university colleagues while they wait in the lounge? (¿Preparo una tetera fresca de té Earl Grey para nuestros colegas universitarios visitantes mientras esperan en la sala?).",
            "I won't disclose your confidential research findings to anyone until the patent application is officially registered. (No revelaré tus hallazgos de investigación confidenciales a nadie hasta que la solicitud de patente esté registrada oficialmente).",
            "We believe that the new high-speed rail network will bring substantial economic prosperity to regional communities across northern Britain. (Creemos que la nueva red ferroviaria de alta velocidad traerá una prosperidad económica sustancial a las comunidades regionales en todo el norte de Gran Bretaña)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Are you ready to order lunch, Sarah? The waiter is coming over to take our order.", "translation": "¿Estás lista para ordenar el almuerzo, Sarah? El camarero se acerca para tomar nuestra orden."},
            {"speaker": "Sarah (UK)", "text": "I think I will have the roasted vegetable tart and a sparkling mineral water, please.", "translation": "Creo que pediré la tarta de verduras asadas y un agua mineral con gas, por favor."},
            {"speaker": "Austin (US)", "text": "That sounds delicious! I will have the grilled salmon with asparagus. It looks incredible.", "translation": "¡Eso suena delicioso! Yo pediré el salmón a la parrilla con espárragos. Se ve increíble."},
            {"speaker": "Sarah (UK)", "text": "Oh dear! I just realized that I left my purse at the office desk. I won't be able to pay for my meal.", "translation": "¡Oh cielos! Me acabo de dar cuenta de que dejé mi bolso en el escritorio de la oficina. No podré pagar mi comida."},
            {"speaker": "Austin (US)", "text": "Don't worry about it at all! I will pay for both of our lunches today. You can treat me next time.", "translation": "¡No te preocupes por eso en absoluto! Pagaré los almuerzos de ambos hoy. Puedes invitarme la próxima vez."},
            {"speaker": "Sarah (UK)", "text": "That is exceptionally kind of you, Austin. I promise I will buy your coffee tomorrow morning.", "translation": "Eso es excepcionalmente amable de tu parte, Austin. Prometo que compraré tu café mañana por la mañana."}
        ],
        [
            "Usar 'will' para planes previamente agendados: decir 'Tomorrow I will meet my doctor' (si ya está en la agenda, debe ser 'I am meeting / I am going to meet my doctor').",
            "Colocar 'to' tras will: decir 'I will to help you'. Will rige infinitivo desnudo: 'I will help you'.",
            "Añadir 's' en tercera persona singular: decir 'He wills come'. Los modales son invariables: 'He will come'.",
            "Escribir la negación como 'willn't': la forma contraída correcta es 'won't'.",
            "Usar do/does con will: formular 'Do you will come?'. Se invierte directamente: 'Will you come?'."
        ],
        [
            "La Prueba del Momento Bombilla: Si la idea acaba de encenderse como una bombilla en tu cabeza en este instante (decisión espontánea, favor, respuesta al teléfono) -> usa WILL ('I'll do it!').",
            "La Pareja Inseparable: 'I promise' siempre camina de la mano con 'WILL' ('I promise I will call you').",
            "Diferenciación Rápida: BE GOING TO = Plan previo o evidencia visible en los ojos; WILL = Decisión espontánea, promesa o conjetura abstracta en la mente."
        ],
        "https://www.englisch-hilfen.de/en/grammar/will_future.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 12: Sustantivos Contables e Incontables (Countable vs. Uncountable)
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_12",
        "Clase 12: Sustantivos Contables e Incontables (Countable vs. Uncountable)",
        "A2",
        "Morfología Nominal",
        "Los sustantivos en inglés se dividen según su naturaleza ontológica en entidades discretas cuantificables individualmente (contables) o sustancias continuas indivisibles y conceptos abstractos (incontables).",
        "Sustantivo Contable: Admite forma singular y plural (a book / two books; an apple / many apples). Sustantivo Incontable: Carece de plural y prohíbe el uso de a/an; se cuantifica mediante unidades partitivas (water -> a glass of water; bread -> a slice of bread; information -> a piece of information).",
        "La distinción entre sustantivos contables (countable nouns) e incontables (uncountable o mass nouns) constituye uno de los pilares estructurales más determinantes de la gramática inglesa, afectando directamente la selección de artículos, determinantes, cuantificadores y la concordancia verbal. Los sustantivos contables representan objetos, personas o conceptos que existen como entidades discretas, separadas, delimitadas e individualizables; por consiguiente, pueden enumerarse con números cardinales ('one car, two cars, three cars'), adoptan morfología de singular y plural ('a student' -> 'students'), y exigen el artículo 'a' o 'an' cuando aparecen en singular. En contraste radical, los sustantivos incontables representan materias continuas indiferenciadas, líquidos, gases, polvos, minerales, masas amorfas o conceptos abstractos que no pueden subdividirse ni contarse como unidades individuales sin destruirse o disolverse ('water', 'milk', 'sugar', 'sand', 'air', 'gold', 'money', 'happiness', 'peace'). Por ende, los sustantivos incontables presentan tres restricciones gramaticales categóricas: primero, JAMÁS admiten forma plural (decir 'waters', 'informations' o 'furnitures' es agramatical en este sentido); segundo, PROHÍBEN rotundamente los artículos indefinidos 'a' y 'an' (decir 'an information' o 'a bread' es incorrecto); y tercero, rigen SIEMPRE concordancia verbal en singular ('The news is interesting', 'The furniture was expensive'). Una dificultad crítica para los hispanohablantes radica en que muchos sustantivos que son perfectamente contables en español son estrictamente incontables en inglés: 'advice' (consejo/consejos), 'information' (información/informaciones), 'furniture' (mueble/muebles), 'luggage / baggage' (equipaje/maletas), 'bread' (pan), 'toast' (tostada/tostadas), 'news' (noticia/noticias) y 'traffic' (tráfico). Para individualizar un sustantivo incontable, el inglés recurre a los partitivos clasificadores: 'a piece of advice', 'a slice of bread', 'an item of furniture'.",
        [
            "Sustantivos contables: Tienen singular y plural ('a chair' -> 'three chairs'). Pueden contarse directamente con números: 'one doctor', 'five hospitals'.",
            "Sustantivos incontables: No tienen plural y no usan 'a/an': water, coffee, bread, money, time, music, weather, homework, research.",
            "Los 8 Incontables Engañosos para Hispanohablantes: 1) Advice (consejo), 2) Information (información), 3) Furniture (mueble), 4) Luggage/Baggage (equipaje), 5) News (noticia - termina en 's' pero es singular), 6) Bread (pan), 7) Homework (tarea), 8) Traffic (tráfico).",
            "Concordancia verbal con NEWS: 'News' es estrictamente incontable y singular: 'The news IS very encouraging today' (nunca 'The news are').",
            "Fórmulas de partitivos individuales (Partitives): Para contar un elemento incontable se usan partitivos: 'a piece of advice' (un consejo), 'a piece of furniture' (un mueble), 'a slice of bread' (una rebanada de pan), 'a bottle of water' (una botella de agua), 'a cup of tea' (una taza de té).",
            "Sustantivos con doble valor (Dual Nouns): Ciertos sustantivos cambian de sentido según sean contables o incontables: 'glass' (incontable: vidrio material; contable: un vaso de vidrio); 'paper' (incontable: papel material; contable: un periódico o artículo académico); 'iron' (incontable: hierro metal; contable: una plancha de ropa); 'coffee' (incontable: líquido general; contable coloquial: una taza de café).",
            "Regla de Cuantificación: Contables usan MANY, FEW, A FEW. Incontables usan MUCH, LITTLE, A LITTLE. Ambos admiten A LOT OF, SOME, ANY.",
            "Dinero y Tiempo son incontables: Las palabras genéricas 'money' y 'time' son incontables ('I don't have much money'); las unidades monetarias y cronológicas individuales sí son contables ('five dollars', 'three hours')."
        ],
        [
            "The university professor provided me with valuable advice and crucial scientific information regarding my doctoral research project. (El profesor universitario me proporcionó consejos valiosos e información científica crucial respecto a mi proyecto de investigación doctoral).",
            "We bought several pieces of modern wooden furniture and two new reading lamps for our renovated apartment in Boston. (Compramos varios muebles modernos de madera y dos nuevas lámparas de lectura para nuestro departamento renovado en Boston).",
            "How much luggage are passengers permitted to check in without incurring additional international baggage fees? (¿Cuánto equipaje se les permite a los pasajeros registrar sin incurrir en tarifas adicionales de equipaje internacional?).",
            "The morning news broadcast on the radio was extremely informative regarding the new economic regulations. (La transmisión de noticias de la mañana en la radio fue sumamente informativa respecto a las nuevas regulaciones económicas)."
        ],
        [
            "She ordered a slice of freshly baked sourdough bread and a cup of traditional English tea at the local bakery. (Ella pidió una rebanada de pan de masa madre recién horneado y una taza de té inglés tradicional en la panadería local).",
            "The laboratory technicians require specialized protective equipment to handle hazardous chemical liquids safely. (Los técnicos de laboratorio requieren equipo de protección especializado para manipular líquidos químicos peligrosos de forma segura).",
            "There was so much traffic along the central motorway that our coach was delayed by more than forty-five minutes. (Había tanto tráfico a lo largo de la autopista central que nuestro autobús se retrasó más de cuarenta y cinco minutos).",
            "Could you please give me a piece of paper so that I can write down the emergency contact telephone numbers? (¿Podrías por favor darme un trozo de papel para que pueda anotar los números de teléfono de contacto de emergencia?)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Hey Jessica, do you have any information about the final examination schedule for our physics class?", "translation": "Hola Jessica, ¿tienes alguna información sobre el cronograma de exámenes finales para nuestra clase de física?"},
            {"speaker": "Jessica (UK)", "text": "Yes, our tutor gave us some very helpful advice yesterday. The timetable is published on the university portal.", "translation": "Sí, nuestro tutor nos dio algunos consejos muy útiles ayer. El horario está publicado en el portal universitario."},
            {"speaker": "Austin (US)", "text": "That is great! I need to buy some new stationery supplies before the tests begin next week.", "translation": "¡Eso es genial! Necesito comprar algunos artículos de papelería nuevos antes de que comiencen las pruebas la próxima semana."},
            {"speaker": "Jessica (UK)", "text": "Let's visit the campus bookshop. They sell notebooks, pens, and high-quality drawing paper at student discounts.", "translation": "Visitemos la librería del campus. Venden cuadernos, bolígrafos y papel de dibujo de alta calidad con descuentos para estudiantes."},
            {"speaker": "Austin (US)", "text": "Awesome. How much money do you think we will need for all the required course materials?", "translation": "Genial. ¿Cuánto dinero crees que necesitaremos para todos los materiales requeridos del curso?"},
            {"speaker": "Jessica (UK)", "text": "Twenty pounds should be more than enough to cover everything we need for the semester.", "translation": "Veinte libras deberían ser más que suficientes para cubrir todo lo que necesitamos para el semestre."}
        ],
        [
            "Pluralizar sustantivos incontables: decir 'informations', 'advices' o 'furnitures'. En inglés son siempre singulares: 'information', 'advice', 'furniture'.",
            "Usar 'a/an' con incontables: decir 'an advice' o 'a bread'. Debe usarse un partitivo o quantifier: 'a piece of advice', 'some bread'.",
            "Concordar 'news' con verbo plural: decir 'The news are bad'. 'News' es incontable singular: 'The news is bad'.",
            "Usar 'many' con sustantivos incontables: decir 'many homework' o 'many traffic'. Debe usarse 'much' o 'a lot of': 'much homework', 'a lot of traffic'.",
            "Confundir 'money' con monedas: decir 'I have three moneys'. Se dice 'I have a lot of money' o 'I have three dollars'."
        ],
        [
            "La Prueba de la Botella y el Cuchillo: Si puedes cortar el objeto en dos y cada parte sigue llamándose exactamente igual (agua dividida sigue siendo agua, pan cortado sigue siendo pan) -> es INCONTABLE.",
            "El Salva-Vidas 'A PIECE OF': Cuando dudes sobre cómo decir 'un consejo' o 'un mueble', usa la fórmula mágica: 'a piece of advice', 'a piece of furniture', 'a piece of information'.",
            "Mnemotecnia para NEWS: Recuerda que 'NEWS' proviene de los cuatro puntos cardinales: North, East, West, South. Lleva una 'S' al final pero es una sola noticia singular informativa."
        ],
        "https://agendaweb.org/grammar/countable-uncountable-exercises.html"
    ))

    # -------------------------------------------------------------------------
    # Clase 13: Cuantificadores: SOME y ANY en Contextos Diversos
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_13",
        "Clase 13: Cuantificadores: SOME y ANY en Contextos Diversos",
        "A2",
        "Determinantes & Cuantificadores",
        "Los cuantificadores indeterminados some y any expresan cantidades imprecisas de sustantivos contables plurales o incontables, distinguiéndose primordialmente por la polaridad sintáctica afirmativa, negativa o pragmática de la cláusula.",
        "Regla general de SOME: Cláusulas afirmativas (There are some books / I have some water) y preguntas de ofrecimiento o petición amable (Would you like some tea? / Can I have some water?). Regla general de ANY: Cláusulas negativas con not/n't (I don't have any money / There aren't any questions) y preguntas generales abiertas de existencia (Do you have any brothers? / Is there any milk?).",
        "El uso de los cuantificadores 'SOME' y 'ANY' es una de las áreas clásicas de la gramática inglesa donde la polaridad sintáctica se cruza de manera fascinante con la pragmática conversacional. Ambos términos traducen nociones afines al español como 'algo de', 'un poco de', 'algunos', 'algunas', 'ningún' o 'ninguna', pero su distribución en inglés no depende del género del sustantivo, sino del tipo de oración y de la expectativa psicológica del hablante. La regla básica elemental que todo aprendiz memoriza prescribe que 'SOME' se emplea en oraciones declarativas afirmativas con sustantivos plurales o incontables ('I bought some apples', 'There is some milk in the fridge'), mientras que 'ANY' domina en oraciones declarativas negativas acompañando a una partícula de negación previa ('I don't have any money', 'There aren't any chairs') y en preguntas cerradas generales donde se desconoce por completo la existencia del elemento consultado ('Do you have any pets?'). No obstante, el dominio auténtico de nivel A2 exige trascender esta regla básica y comprender las dos excepciones pragmáticas fundamentales: primera excepción: 'SOME' se utiliza sistemáticamente en preguntas cuando la intención comunicativa no es indagar de manera neutra, sino formular un ofrecimiento hospitalario o realizar una petición cortés de algo esperando una respuesta afirmativa ('Would you like some coffee?', 'Can you lend me some money?'). Segunda excepción: 'ANY' se utiliza en oraciones afirmativas con el significado enfático y categórico de 'cualquiera' o 'el que sea', denotando que la elección particular es irrelevante ('You can take any bus from this stop; they all go to the city centre'; 'Call me any time you want').",
        [
            "SOME en oraciones afirmativas: Con sustantivos plurales contables ('some students') y con sustantivos incontables ('some sugar').",
            "ANY en oraciones negativas: Acompaña a la negación not/n't: 'We don't have ANY fresh fruit left in the kitchen'.",
            "ANY en preguntas neutras generales: Para averiguar si algo existe sin presuponer la respuesta: 'Do you have ANY questions about the syllabus?', 'Is there ANY milk?'.",
            "SOME en preguntas de ofrecimiento de cortesía (Offers): Cuando se ofrece hospitalidad: 'Would you like SOME coffee?', 'Would you like SOME biscuits?'.",
            "SOME en peticiones de favor (Requests): Cuando se solicita algo amablemente esperando un 'sí': 'Can I have SOME water, please?', 'Could you lend me SOME pens?'.",
            "ANY en oraciones afirmativas con sentido de 'CUALQUIERA': Expresa libertad absoluta de elección: 'You can choose ANY book you like from the library shelf'.",
            "ANY tras palabras de polaridad negativa implícita: Se utiliza ANY tras adverbios o preposiciones negativas como 'hardly', 'barely', 'scarcely' y 'without': 'He left WITHOUT ANY money', 'There is HARDLY ANY milk left'.",
            "Compuestos de SOME y ANY: Las mismas reglas rigen para pronombres compuestos: someone / somebody / something / somewhere (afirmativo/ofertas) vs. anyone / anybody / anything / anywhere (negativo/preguntas/cualquiera)."
        ],
        [
            "There are some highly qualified international researchers working on the vaccine development program at the university. (Hay algunos investigadores internacionales altamente calificados trabajando en el programa de desarrollo de vacunas en la universidad).",
            "Would you like some fresh orange juice or a cup of hot coffee while you wait for your academic advisor? (¿Le gustaría algo de jugo de naranja fresco o una taza de café caliente mientras espera a su consejero académico?).",
            "We didn't find any significant errors in the financial data after reviewing the spreadsheets for two hours. (No encontramos ningún error significativo en los datos financieros después de revisar las hojas de cálculo durante dos horas).",
            "You can download any of these scientific research articles for free through the university digital library portal. (Puedes descargar cualquiera de estos artículos de investigación científica de forma gratuita a través del portal de la biblioteca digital universitaria)."
        ],
        [
            "She bought some lovely handmade leather shoes and a silk scarf in the boutique near the railway station. (Ella compró unos encantadores zapatos de cuero hechos a mano y una bufanda de seda en la tienda cerca de la estación de trenes).",
            "Are there any direct trains running from London Euston to Manchester Piccadilly late on Sunday evening? (¿Hay algún tren directo que funcione de Londres Euston a Manchester Piccadilly tarde el domingo por la tarde-noche?).",
            "Could you please lend me some money so that I can pay for my prescription medication at the pharmacy? (¿Podrías por favor prestarme algo de dinero para que pueda pagar mi medicamento recetado en la farmacia?).",
            "He completed the entire four-mile marathon course without any physical discomfort or dehydration. (Él completó todo el recorrido del maratón de cuatro millas sin ninguna molestia física ni deshidratación)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Hey Jessica, are you going to the grocery store this afternoon? Do we need any supplies for our apartment?", "translation": "Hola Jessica, ¿vas a ir a la tienda de comestibles esta tarde? ¿Necesitamos suministros para nuestro departamento?"},
            {"speaker": "Jessica (UK)", "text": "Yes, I am heading there now. We don't have any milk left in the fridge, and we need some fresh eggs.", "translation": "Sí, me dirijo hacia allá ahora. No nos queda nada de leche en el refrigerador, y necesitamos algunos huevos frescos."},
            {"speaker": "Austin (US)", "text": "Can you also buy some ground coffee? The brand doesn't matter; any medium roast will be fine.", "translation": "¿Puedes también comprar algo de café molido? La marca no importa; cualquier tueste medio estará bien."},
            {"speaker": "Jessica (UK)", "text": "Certainly. Would you like some biscuits as well? The bakery section usually has delicious chocolate ones on sale.", "translation": "Ciertamente. ¿Te gustaría algunas galletas también? La sección de panadería suele tener deliciosas galletas de chocolate en oferta."},
            {"speaker": "Austin (US)", "text": "Yes, please! That would be awesome. Here is some cash to help pay for the groceries.", "translation": "¡Sí, por favor! Eso sería genial. Aquí tienes algo de efectivo para ayudar a pagar los comestibles."},
            {"speaker": "Jessica (UK)", "text": "Thank you! I won't be long at the shops.", "translation": "¡Gracias! No tardaré mucho en las tiendas."}
        ],
        [
            "Usar 'any' en oraciones afirmativas ordinarias: decir 'I have any friends in London'. Para afirmaciones habituales debe usarse 'some': 'I have some friends in London'.",
            "Usar 'some' en negaciones con not: decir 'I don't have some money'. La negación exige 'any': 'I don't have any money'.",
            "Usar 'any' al ofrecer comida amablemente: decir 'Would you like any tea?'. Al ser un ofrecimiento hospitalario cortés, debe usarse 'some': 'Would you like some tea?'.",
            "Doble negación con 'no' y 'any': decir 'I don't have no friends'. Debe ser 'I don't have any friends' o 'I have no friends'.",
            "Traducir literalmente 'alguno' en preguntas sin auxiliar: olvidar que en inglés la pregunta general requiere ANY ('Do you have any ideas?')."
        ],
        [
            "El Semáforo de SOME y ANY: Luz Verde (Afirmativo + Ofertas cordiales) = SOME. Luz Roja (Negativo con not) y Luz Amarilla (Preguntas abiertas de duda) = ANY.",
            "La Regla del Camarero Amable: Imagina que eres un camarero distinguido: cuando ofreces algo delicioso a tus comensales ('Would you like...?'), siempre sirves un plato con 'SOME' para que te digan que sí.",
            "El Comodín 'Cualquiera': Recuerda que en oraciones afirmativas, 'ANY' es el comodín de la baraja: significa 'el que tú quieras, me da igual' ('take ANY bus', 'call ANY time')."
        ],
        "https://www.englisch-hilfen.de/en/grammar/some_any.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 14: Cuantificadores: MUCH, MANY, A LOT OF, FEW, LITTLE
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_14",
        "Clase 14: Cuantificadores: MUCH, MANY, A LOT OF, FEW, LITTLE",
        "A2",
        "Cuantificadores de Cantidad",
        "Los cuantificadores determinan el volumen, grado o cantidad de sustantivos contables e incontables, distinguiendo entre abundancia y escasez, así como entre juicios positivos o restrictivos.",
        "Gran cantidad: MANY + Sustantivos contables plurales (many cars, many questions). MUCH + Sustantivos incontables (much water, much time - preferido en negaciones y preguntas). A LOT OF / LOTS OF + Ambos tipos en oraciones afirmativas. Pequeña cantidad: A FEW (contable: algunos, suficiente) vs. FEW (contable: casi ninguno, insuficiente). A LITTLE (incontable: un poco de, suficiente) vs. LITTLE (incontable: casi nada, insuficiente).",
        "La cuantificación precisa de magnitudes en la lengua inglesa opera mediante un sistema binario riguroso gobernado por la distinción entre sustantivos contables e incontables, complementado por sutilezas pragmáticas sobre la percepción optimista o pesimista del hablante. En la esfera de la abundancia o gran cantidad ('mucho / muchos'), el idioma establece una clara división estilística y gramatical: 'MANY' modifica exclusivamente a sustantivos contables plurales ('many books', 'many students', 'many opportunities') y se utiliza con absoluta naturalidad en afirmaciones, negaciones y preguntas. En contrapartida, 'MUCH' cuantifica únicamente a sustantivos incontables continuos ('much time', 'much money', 'much patience'); sin embargo, en el habla moderna y en la prosa estándar, 'much' se reserva casi exclusivamente para oraciones negativas ('I don't have much money') y preguntas interrogativas ('Do you have much homework?'), considerándose poco natural y arcaico en oraciones afirmativas corrientes (un angloparlante nativo rara vez dice 'I have much money'). Para las oraciones afirmativas de gran cantidad, el inglés prefiere universalmente el cuantificador comodín y flexible 'A LOT OF' o 'LOTS OF', el cual funciona indistintamente con sustantivos contables plurales e incontables ('I have a lot of friends', 'I have a lot of time'). En la esfera opuesta de la escasez o pequeña cantidad ('poco / pocos'), surge una de las distinciones más sofisticadas del nivel A2: la presencia o ausencia del artículo 'A'. Con sustantivos contables, 'A FEW' transmite una perspectiva positiva de suficiencia ('I have a few friends' = tengo algunos amigos, los suficientes para ser feliz), mientras que 'FEW' sin artículo transmite una connotación negativa de escasez severa ('I have few friends' = tengo muy pocos amigos, me siento solo). De forma idéntica con sustantivos incontables, 'A LITTLE' denota posesión positiva moderada ('I have a little money' = tengo un poco de dinero, puedo invitarte un café), mientras que 'LITTLE' desnudo denota penuria ('I have little money' = tengo casi nada de dinero, no me alcanza para nada).",
        [
            "MANY: Solo con contables plurales en todo tipo de oraciones: many books, many cities, many people.",
            "MUCH: Solo con incontables en oraciones NEGATIVAS y PREGUNTAS: 'I don't have much time', 'How much money do you need?'.",
            "A LOT OF / LOTS OF: Comodín universal para oraciones AFIRMATIVAS con contables plurales e incontables: 'We have a lot of books', 'She has a lot of patience'.",
            "A FEW (Contable - Positivo): Significa 'algunos / unos pocos', suficiente para el propósito: 'I have a few days off, so we can travel'.",
            "FEW (Contable - Negativo): Significa 'muy pocos / casi ninguno', denota escasez: 'He has few friends and feels lonely'.",
            "A LITTLE (Incontable - Positivo): Significa 'un poco de', suficiente para continuar: 'I have a little milk, enough for two coffees'.",
            "LITTLE (Incontable - Negativo): Significa 'casi nada / insuficiente': 'There is little hope of finding survivors'.",
            "Preguntas canónicas de cantidad: HOW MANY + contable plural? ('How many languages do you speak?'); HOW MUCH + incontable? ('How much does this laptop cost?')."
        ],
        [
            "The engineering faculty has a lot of modern research laboratories and many distinguished professors on its staff. (La facultad de ingeniería tiene muchos laboratorios modernos de investigación y muchos profesores distinguidos en su personal).",
            "We don't have much time before our international flight departs from terminal three, so let's hurry through airport security. (No tenemos mucho tiempo antes de que nuestro vuelo internacional salga de la terminal tres, así que apresurémonos a través de la seguridad del aeropuerto).",
            "Fortunately, I have a few close colleagues who are willing to assist me with the statistical data analysis. (Afortunadamente, tengo unos pocos colegas cercanos que están dispuestos a ayudarme con el análisis de datos estadísticos).",
            "There were very few students attending the advanced mathematics lecture yesterday due to the severe snowstorm. (Hubo muy pocos estudiantes asistiendo a la conferencia avanzada de matemáticas ayer debido a la severa tormenta de nieve)."
        ],
        [
            "The university library in Oxford houses a lot of ancient historical manuscripts and many rare first-edition volumes. (La biblioteca universitaria en Oxford alberga una gran cantidad de antiguos manuscritos históricos y muchos volúmenes raros de primera edición).",
            "He has a little money saved in his current bank account, which should be enough to cover his rent this month. (Él tiene un poco de dinero ahorrado en su cuenta bancaria corriente, lo que debería ser suficiente para cubrir su alquiler este mes).",
            "Unfortunately, there was little interest among the pupils in joining the newly formed classical poetry society. (Desafortunadamente, hubo poco interés entre los alumnos en unirse a la recién formada sociedad de poesía clásica).",
            "How many academic credits do undergraduate students need to complete before graduating from the degree programme? (¿Cuántos créditos académicos necesitan completar los estudiantes de pregrado antes de graduarse del programa de titulación?)."
        ],
        [
            {"speaker": "Austin (US)", "text": "How is your new apartment in Boston, Chloe? Do you have a lot of furniture yet?", "translation": "¿Cómo está tu nuevo departamento en Boston, Chloe? ¿Tienes muchos muebles ya?"},
            {"speaker": "Chloe (UK)", "text": "Not yet. I only have a few chairs and a small wooden dining table, but it is quite comfortable.", "translation": "Todavía no. Solo tengo unas pocas sillas y una pequeña mesa de comedor de madera, pero es bastante cómodo."},
            {"speaker": "Austin (US)", "text": "Do you have much storage space for your books and winter coats in the closets?", "translation": "¿Tienes mucho espacio de almacenamiento para tus libros y abrigos de invierno en los armarios?"},
            {"speaker": "Chloe (UK)", "text": "There is very little closet space, unfortunately. But I bought a few storage boxes to keep things organized.", "translation": "Hay muy poco espacio en el armario, desafortunadamente. Pero compré unas pocas cajas de almacenamiento para mantener las cosas organizadas."},
            {"speaker": "Austin (US)", "text": "That is smart. Let me know if you need any help moving your heavy luggage this weekend.", "translation": "Eso es inteligente. Hazme saber si necesitas ayuda para mover tu equipaje pesado este fin de semana."},
            {"speaker": "Chloe (UK)", "text": "Thank you so much! I have a little free time on Saturday afternoon if you are available.", "translation": "¡Muchas gracias! Tengo un poco de tiempo libre el sábado por la tarde si estás disponible."}
        ],
        [
            "Usar 'much' en oraciones afirmativas simples: decir 'I have much friends' o 'I have much money'. En afirmativo lo natural es 'a lot of friends' / 'a lot of money'.",
            "Usar 'many' con sustantivos incontables: decir 'many water' o 'many homework'. Debe ser 'much water' / 'a lot of homework'.",
            "Confundir 'few' con 'a few': decir 'I have few friends' cuando se quiere decir alegremente que se tienen algunos amigos. 'Few' sin artículo suena triste y desolador.",
            "Confundir 'little' con 'a little': decir 'There is little milk' cuando hay suficiente para un café. Debe ser 'a little milk'.",
            "Usar 'how much' con sustantivos contables: decir 'How much books did you buy?'. Con contables plurales se usa 'How many books'."
        ],
        [
            "La Regla del Vaso Medio Lleno (El Milagro de la Letra A): La letra 'A' es mágica: cuando está presente ('a few', 'a little'), el vaso está medio lleno (positivo y suficiente). Cuando la letra 'A' desaparece ('few', 'little'), el vaso está casi vacío (negativo y escaso).",
            "Asociación de la M y la C: [M]any va con [C]ontables (M-C). [M]uch va con [I]ncontables (M-I).",
            "El Salva-Vidas A LOT OF: En oraciones afirmativas, olvídate de sufrir eligiendo entre much y many; 'a lot of' funciona a la perfección con todo."
        ],
        "https://www.englisch-hilfen.de/en/grammar/much_many.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 15: Verbos Modales de Obligación: MUST vs. HAVE TO
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_15",
        "Clase 15: Verbos Modales de Obligación: MUST vs. HAVE TO",
        "A2",
        "Verbos Modales de Deber",
        "Los verbos modales de obligación comunican imposiciones normativas, deberes morales o necesidades ineludibles, diferenciando rigurosamente entre la obligación interna del hablante (must) y la regla institucional externa (have to).",
        "Obligación Interna / Decisión Personal: Sujeto + MUST + Verbo en forma base: I must study harder / You must see this movie. Obligación Externa / Normativa Institucional: Sujeto + HAVE TO / HAS TO + Verbo base: She has to wear a uniform / We have to pay taxes. Prohibición Categórica: MUSTN'T + Verbo base (You mustn't smoke here). Ausencia Total de Obligación (Opcionalidad): DON'T HAVE TO / DOESN'T HAVE TO (You don't have to come if you are tired).",
        "El ámbito de la modalidad deóntica (la expresión del deber, la necesidad y la prohibición) adquiere su máxima claridad pedagógica en la distinción semántica y funcional entre 'MUST' y 'HAVE TO'. En español solemos traducir ambas estructuras de forma idéntica con el verbo 'tener que' o 'deber' ('tengo que estudiar', 'debo usar uniforme'), ocultando una sutil pero crucial diferencia pragmática de la cultura anglófona. 'MUST' es un auténtico verbo modal defectivo que expresa una obligación interna subjetiva, originada en la propia conciencia moral, los deseos o la autoridad personal del hablante ('I must call my mother tonight; I haven't spoken to her in a week'; 'You must read this book, it's brilliant'). Por el contrario, 'HAVE TO' no es un modal puro, sino un semimodal conjugable que expresa una obligación externa objetiva, impuesta por leyes civiles, normas de tráfico, reglamentos escolares o circunstancias institucionales ajenas a la voluntad del individuo ('In Britain, you have to drive on the left side of the road'; 'Doctors have to work long shifts'). Sin embargo, donde esta distinción se vuelve absolutamente crítica y determinante es en sus formas negativas: 'MUSTN'T' (must not) significa PROHIBICIÓN CATEGÓRICA E ILEGALIDAD estricta (no debes hacerlo bajo ninguna circunstancia, está penado o prohibido: 'You mustn't smoke in the hospital'). En marcado contraste diametral, 'DON'T HAVE TO' o 'DOESN'T HAVE TO' significa AUSENCIA DE OBLIGACIÓN U OPCIONALIDAD (no es necesario que lo hagas, no tienes por qué hacerlo, pero si quieres puedes hacerlo: 'Tomorrow is Sunday, so I don't have to wake up early'). Confundir 'mustn't' con 'don't have to' es uno de los errores semánticos más graves de los estudiantes en exámenes de certificación internacional.",
        [
            "MUST (Obligación interna del hablante): La necesidad surge de la propia convicción personal o consejo enfático: 'I must clean my room today', 'You must taste this cake'.",
            "HAVE TO / HAS TO (Obligación externa impuesta): La imposición procede de leyes, jefes, normativas o reglamentos: 'Employees have to wear protective helmets on the construction site'.",
            "Concordancia de HAVE TO en tercera persona: He, She, It usan HAS TO: 'She has to submit her thesis tomorrow'.",
            "MUSTN'T = PROHIBICIÓN ABSOLUTA: Está terminantemente prohibido por norma, ley o peligro: 'You mustn't park here' (te multarán), 'You mustn't touch that live wire' (es mortal).",
            "DON'T / DOESN'T HAVE TO = FALTA DE OBLIGACIÓN (Opcional): No es necesario; eres libre de elegir: 'You don't have to wear a suit to the dinner' (puedes vestir informal si lo prefieres).",
            "Morfología de MUST: Es un modal defectivo: no añade -s en tercera persona, carece de pasado propio (para decir 'tuve que' se usa HAD TO) y no usa auxiliares do/does.",
            "Preguntas con HAVE TO: Exigen auxiliares DO o DOES: 'Do you have to work on weekends?', 'Does he have to take an entrance exam?'.",
            "Reemplazo temporal en pasado y futuro: 'Must' no existe en pasado ni en futuro. Para el pasado se usa obligatoriamente 'HAD TO' ('Yesterday I had to work late'); para el futuro se usa 'WILL HAVE TO' ('Next year I will have to find a job')."
        ],
        [
            "All laboratory researchers must wear safety goggles and protective white coats before entering the chemical testing facility. (Todos los investigadores de laboratorio deben usar gafas de seguridad y batas blancas protectoras antes de ingresar a la instalación de pruebas químicas).",
            "In the United States, citizens have to file their annual federal income tax returns with the government by mid-April. (En los Estados Unidos, los ciudadanos tienen que presentar sus declaraciones anuales de impuestos federales sobre la renta ante el gobierno para mediados de abril).",
            "You mustn't use your mobile telephone during the national university entrance examination or your test will be disqualified. (No debes usar tu teléfono móvil durante el examen nacional de admisión universitaria o tu examen será descalificado).",
            "You don't have to buy a physical ticket at the station because you can conveniently tap your contactless credit card at the transit gates. (No tienes que comprar un boleto físico en la estación porque puedes tocar convenientemente tu tarjeta de crédito sin contacto en las puertas de tránsito)."
        ],
        [
            "Motorists in Great Britain have to drive on the left-hand side of the road and must adhere strictly to municipal speed limits. (Los automovilistas en Gran Bretaña tienen que conducir por el lado izquierdo de la carretera y deben adherirse estrictamente a los límites de velocidad municipales).",
            "I must remember to post this birthday card to my grandmother before the local high street post office closes at five o'clock. (Debo acordarme de enviar esta tarjeta de cumpleaños a mi abuela antes de que la oficina de correos local de la calle principal cierre a las cinco en punto).",
            "Visitors mustn't feed the wild deer in Richmond Park because human food can cause severe harm to their digestive systems. (Los visitantes no deben alimentar a los ciervos salvajes en Richmond Park porque la comida humana puede causar graves daños a sus sistemas digestivos).",
            "University students don't have to attend the optional revision seminar on Saturday, but it is highly recommended by tutors. (Los estudiantes universitarios no tienen que asistir al seminario opcional de repaso el sábado, pero es altamente recomendado por los tutores)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Do we have to submit our physics laboratory reports in printed format, or can we upload them online?", "translation": "¿Tenemos que entregar nuestros informes de laboratorio de física en formato impreso, o podemos subirlos en línea?"},
            {"speaker": "Jessica (UK)", "text": "Our professor said we don't have to print them out. Uploading the digital document to the portal is completely acceptable.", "translation": "Nuestro profesor dijo que no tenemos que imprimirlos. Subir el documento digital al portal es completamente aceptable."},
            {"speaker": "Austin (US)", "text": "That is a huge relief! But remember, we mustn't miss the midnight submission deadline under any circumstances.", "translation": "¡Eso es un gran alivio! Pero recuerda, no debemos perder la fecha límite de entrega de medianoche bajo ninguna circunstancia."},
            {"speaker": "Jessica (UK)", "text": "Absolutely. Late submissions receive an automatic penalty, so I must finish my data analysis before dinner.", "translation": "Absolutamente. Las entregas tardías reciben una penalización automática, así que debo terminar mi análisis de datos antes de la cena."},
            {"speaker": "Austin (US)", "text": "I will review my conclusion sections right away. We definitely have to achieve a high grade on this coursework.", "translation": "Revisaré mis secciones de conclusión de inmediato. Definitivamente tenemos que lograr una calificación alta en este curso."},
            {"speaker": "Jessica (UK)", "text": "Indeed! Diligent work now will ensure our academic success at the end of the semester.", "translation": "¡En efecto! El trabajo diligente ahora asegurará nuestro éxito académico al final del semestre."}
        ],
        [
            "Confundir 'mustn't' con 'don't have to': decir 'You mustn't come if you are tired' (parece que le prohíbes venir). Para indicar opcionalidad debe decirse 'You don't have to come'.",
            "Usar 'must' en pasado: decir 'Yesterday I must work late'. Must no tiene pasado; debe usarse HAD TO: 'Yesterday I had to work late'.",
            "Añadir 'to' tras must: decir 'I must to study'. Must es un modal y rige infinitivo desnudo: 'I must study'.",
            "Olvidar usar 'has to' con tercera persona: decir 'She have to leave'. Con He, She, It se usa 'has to': 'She has to leave'.",
            "Negar 'have to' sin auxiliar do: decir 'You haven't to go'. La negación exige auxiliar: 'You don't have to go'."
        ],
        [
            "El Semáforo de la Obligación: MUSTN'T es Luz Roja Tajante (¡Peligro, prohibido, cárcel o multa!). DON'T HAVE TO es Luz Verde (¡Eres libre de elegir, no es obligatorio!).",
            "Regla del Espejo Pasado: Si necesitas decir 'tuve que' en pasado, borra 'must' de tu mente y escribe siempre 'HAD TO'.",
            "Mnemotecnia Interna vs. Externa: [M]ust viene de [M]i propia conciencia moral interior. [H]ave to viene de la [H]ojalatería de las leyes y normas del mundo exterior."
        ],
        "https://www.englisch-hilfen.de/en/grammar/must_have_to.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 16: Verbos Modales de Consejo: SHOULD y OUGHT TO
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_16",
        "Clase 16: Verbos Modales de Sugerencia: SHOULD y OUGHT TO",
        "A2",
        "Verbos Modales de Consejo",
        "Los verbos modales should y ought to comunican consejos cordiales, recomendaciones morales, pautas de prudencia y expectativas razonables, sugiriendo la mejor línea de acción sin imponer obligación forzosa.",
        "Recomendación con SHOULD: Sujeto + SHOULD + Verbo en forma base desnuda: You should visit a doctor / We should study tonight. Recomendación con OUGHT TO: Sujeto + OUGHT TO + Verbo en forma base desnuda: You ought to apologize / He ought to drive more carefully. Consejo Negativo: SHOULDN'T (should not) + Verbo base: You shouldn't stay up so late. Pregunta de consejo: Should + Sujeto + Verbo base?: Should I call him?",
        "Dentro de la jerarquía de los verbos modales ingleses, mientras que 'must' y 'have to' imponen mandatos inexorables e ineludibles, 'SHOULD' y 'OUGHT TO' descienden en la escala de presión social para situarse en el terreno de la sugerencia afectuosa, la recomendación benevolente y el consejo prudencial (advice and recommendations). Su valor semántico central equivale al condicional 'deberías' o al presente aconsejador 'conviene que' del español ('You should sleep eight hours' = deberías dormir ocho horas). El hablante utiliza 'should' para expresar lo que considera correcto, deseable, beneficioso o moralmente apropiado para su interlocutor, dejando intacto el libre albedrío de este último para acatar o desoír la recomendación sin temor a sanciones punitivas. En el plano morfológico, 'SHOULD' es un modal puro: es totalmente invariable para todas las personas (I should, you should, he should), carece de la partícula 'to' en su complementación verbal ('You should eat', jamás 'You should to eat'), niega directamente añadiendo 'not' en la contracción habitual 'shouldn't' (/ˈʃʊd.ənt/), y se invierte al inicio para consultar por consejos u opiniones ('What should I do?'). Su sinónimo formal 'OUGHT TO' (/ˈɔːt.tuː/) posee un significado prácticamente idéntico, pero con una distinción estructural determinante: incluye intrínsecamente la partícula 'TO' en su forma base ('You ought to respect your elders'). 'Ought to' suele evocar una carga de deber moral o cívico más arraigada que 'should' y se emplea primordialmente en oraciones afirmativas en registros formales y cultos, siendo muy poco común en oraciones negativas o interrogativas en el habla moderna ('oughtn't to' se percibe como sumamente arcaico). Asimismo, 'should' se utiliza para expresar expectativas lógicas y razonables de que un evento ocurra según lo planificado ('The train should arrive in ten minutes').",
        [
            "Invariabilidad de SHOULD: Idéntico para todas las personas gramaticales: I, you, he, she, it, we, they.",
            "Régimen de Infinitivo Desnudo de SHOULD: Se construye directamente con el verbo base sin 'to': 'You should exercise more' (correcto), 'You should to exercise' (incorrecto).",
            "Régimen con TO de OUGHT TO: A diferencia de should, ought exige obligatoriamente la partícula 'to': 'You ought to apologize' (correcto), 'You ought apologize' (incorrecto).",
            "Contracción negativa SHOULDN'T: Es la forma preferida para aconsejar no hacer algo perjudicial: 'You shouldn't drink so much caffeine before bedtime'.",
            "Preguntas solicitando consejo: [SHOULD + SUJETO + VERBO BASE]?: 'Should I accept the job offer in New York?', 'Where should we go for dinner?'.",
            "Expresión de expectativa lógica razonable: Se usa should para indicar que algo probablemente sucederá según lo previsto: 'The flight should land at 6:00 PM if there are no delays'.",
            "Locución de consejo subjetivo 'I THINK YOU SHOULD...': Para suavizar el consejo se antepone 'I think': 'I think you should take an umbrella with you'.",
            "Fonética silenciosa de la L en SHOULD: La letra 'L' en 'should' (/ʃʊd/) y 'shouldn't' (/ˈʃʊd.ənt/) es completamente muda y jamás se pronuncia."
        ],
        [
            "You should consult with an academic advisor before deciding which advanced engineering courses to select for next semester. (Deberías consultar con un asesor académico antes de decidir qué cursos avanzados de ingeniería seleccionar para el próximo semestre).",
            "He has been coughing persistently for three days, so he ought to make an appointment with his family physician. (Él ha estado tosiendo persistentemente durante tres días, por lo que debería programar una cita con su médico de cabecera).",
            "You shouldn't stay up studying all night before your final examination because adequate sleep is essential for memory retention. (No deberías quedarte despierto estudiando toda la noche antes de tu examen final porque el sueño adecuado es esencial para la retención de la memoria).",
            "What kind of technological equipment should our international research team purchase with the newly awarded government grant? (¿Qué tipo de equipo tecnológico debería comprar nuestro equipo de investigación internacional con la subvención gubernamental recién otorgada?)."
        ],
        [
            "Citizens ought to take greater personal responsibility for environmental sustainability by recycling plastic and reducing energy waste. (Los ciudadanos deberían asumir una mayor responsabilidad personal por la sostenibilidad ambiental reciclando plástico y reduciendo el desperdicio de energía).",
            "The morning train from Manchester should arrive at London King's Cross platform promptly at twenty past ten. (El tren matutino de Manchester debería llegar al andén de Londres King's Cross puntualmente a las diez y veinte).",
            "You should visit the British Museum while you are staying in London; the ancient classical artefacts are absolutely extraordinary. (Deberías visitar el Museo Británico mientras estés en Londres; los antiguos artefactos clásicos son absolutamente extraordinarios).",
            "Pupils shouldn't leave their personal belongings unattended in the library reading room during the lunch break. (Los alumnos no deberían dejar sus pertenencias personales desatendidas en la sala de lectura de la biblioteca durante la pausa del almuerzo)."
        ],
        [
            {"speaker": "Austin (US)", "text": "I feel completely exhausted today, Chloe. I have had a severe headache since early this morning.", "translation": "Me siento completamente agotado hoy, Chloe. He tenido un fuerte dolor de cabeza desde temprano esta mañana."},
            {"speaker": "Chloe (UK)", "text": "You really look unwell, Austin. You should drink some warm water and take a short break from looking at computer screens.", "translation": "Realmente no te ves bien, Austin. Deberías beber un poco de agua tibia y tomar un breve descanso de mirar pantallas de computadora."},
            {"speaker": "Austin (US)", "text": "Do you think I should go to the campus medical clinic and see a healthcare nurse?", "translation": "¿Crees que debería ir a la clínica médica del campus y ver a una enfermera de salud?"},
            {"speaker": "Chloe (UK)", "text": "Yes, definitely. You ought to have your blood pressure checked, and you shouldn't drive if you feel dizzy.", "translation": "Sí, definitivamente. Deberías hacerte revisar la presión arterial, y no deberías conducir si te sientes mareado."},
            {"speaker": "Austin (US)", "text": "That is very sensible advice. Should I email our laboratory supervisor to explain why I am absent?", "translation": "Ese es un consejo muy sensato. ¿Debería enviarle un correo a nuestro supervisor de laboratorio para explicar por qué estoy ausente?"},
            {"speaker": "Chloe (UK)", "text": "Yes, I will let him know as well. Take care of yourself and rest for the remainder of the afternoon.", "translation": "Sí, yo se lo haré saber también. Cuídate y descansa por el resto de la tarde."}
        ],
        [
            "Poner 'to' después de should: decir 'You should to study harder'. Should rige infinitivo desnudo sin to: 'You should study harder'.",
            "Omitir 'to' con ought: decir 'You ought study harder'. Ought exige obligatoriamente to: 'You ought to study harder'.",
            "Pronunciar la letra 'L' en should: decir /ʃʊld/. La 'L' es totalmente muda; suena exactamente /ʃʊd/.",
            "Usar must en lugar de should para dar consejos amables: decir 'You must drink some water' puede sonar agresivo o demandante si solo pretendes aconsejar amablemente ('You should drink some water').",
            "Añadir 's' en tercera persona singular: decir 'He shoulds sleep more'. Los modales son invariables: 'He should sleep more'."
        ],
        [
            "La Prueba de la Amabilidad: Imagina a un amigo cariñoso aconsejándote con una taza de té en la mano: te dice suavemente 'SHOULD' (deberías). Si fuera un policía de tránsito con una multa, te diría 'MUST' o 'HAVE TO'.",
            "Regla del Pegamento de OUGHT TO: Recuerda que 'OUGHT' siempre lleva la palabra 'TO' pegada a su espalda como una mochila escolar inseparable ('ought to go', 'ought to help').",
            "Mnemotecnia Auditiva: 'Should' rima perfectamente con 'good' y 'wood'. ¡Sin sonido de L en absoluto!"
        ],
        "https://www.englisch-hilfen.de/en/grammar/should.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 17: Infinitivo de Propósito vs. FOR + Sustantivo
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_17",
        "Clase 17: Infinitivo de Propósito (TO + BASE) vs. FOR + Sustantivo",
        "A2",
        "Sintaxis & Propósito",
        "La manifestación del propósito, la meta o la teleología de una acción se estructura mediante el infinitivo de propósito (to + verbo base), contrastando tajantemente con la preposición for seguida exclusivamente de sustantivos o gerundios de función.",
        "Propósito con Verbo de Acción: Sujeto + Verbo + TO + Verbo en forma base desnuda: I went to the store TO buy milk / She studies hard TO pass the exam. Propósito con Sustantivo: Sujeto + Verbo + FOR + Sustantivo: I went to the store FOR milk / We stopped FOR lunch. Función genérica de un instrumento: Sustantivo + is used FOR + Verbo-ING: A thermometer is used for measuring temperature.",
        "La expresión de la finalidad y el propósito teleológico en la lengua inglesa constituye un clásico campo de minas gramatical para los hispanohablantes debido a la interferencia lingüística directa con la preposición española 'para'. En nuestro idioma nativo utilizamos indistintamente la preposición 'para' tanto cuando introducimos un verbo infinitivo de acción ('fui a la tienda para comprar pan'), como cuando introducimos un objeto o sustantivo directo ('fui a la tienda para pan'). Trasladar esta pauta al inglés e intentar traducir 'para + verbo' literalmente como 'for + infinitivo' (decir 'I went to the store for to buy milk' o 'for buy milk') es una de las faltas más notorias y condenadas de la sintaxis anglófona. La regla de oro fundamental del inglés establece que cuando se explica el MOTIVO o LA INTENCIÓN que impulsa a una persona a realizar una acción mediante un verbo, el idioma exige obligatoriamente el infinitivo precedido de la partícula 'TO' (the infinitive of purpose): 'I went to the university TO attend a lecture' (fui a la universidad para asistir a una clase); 'She saved money TO buy a car' (ahorró dinero para comprar un auto). Para otorgar un registro más enfático, formal o académico a este propósito se emplean las locuciones 'in order to + verbo base' o 'so as to + verbo base' ('He studied diligently IN ORDER TO secure the scholarship'). Por otro lado, la preposición 'FOR' solo es legítima cuando introduce directamente un sustantivo o sintagma nominal ('I went to the store FOR some bread', 'Let's meet FOR a coffee'). Asimismo, 'FOR + gerundio (-ing)' se reserva exclusivamente para describir la función permanente o la finalidad técnica inherente de un instrumento u objeto inanimado ('This knife is used FOR cutting bread', 'A camera is FOR taking photographs'), pero jamás para expresar la intención personal del sujeto humano en una acción concreta.",
        [
            "Infinitivo de Propósito (TO + Verbo Base): Expresa la meta o intención personal de una acción: 'I called Carlos TO invite him to the party'.",
            "Prohibición absoluta de FOR + Infinitivo: Está terminantemente prohibido decir 'for to buy' o 'for buy' en inglés estándar.",
            "FOR + Sustantivo: Se emplea cuando el propósito es una cosa, bebida o evento nominal: 'We went to the cafe FOR breakfast', 'She asked FOR help'.",
            "Formas de propósito formal y enfático: IN ORDER TO + Verbo base / SO AS TO + Verbo base: 'He arrived early in order to prepare the presentation slides'.",
            "Propósito negativo (Para no hacer algo): IN ORDER NOT TO / SO AS NOT TO + Verbo base: 'She walked quietly in order not to wake the sleeping baby'.",
            "FOR + Gerundio (-ING) para función de herramientas: Expresa el uso técnico general para el que fue diseñado un objeto: 'An oven is used FOR baking bread', 'Microscopes are used FOR magnifying small cells'.",
            "Cláusula de propósito con SO THAT: Si intervienen dos sujetos distintos, se utiliza SO THAT + Sujeto + Modal: 'I left early so that my brother could use the car'.",
            "Preguntas de propósito con WHY: A la pregunta 'Why did you go to the library?', se responde directamente con el infinitivo: 'To study for my exam'."
        ],
        [
            "The international students gathered in the central auditorium to listen to the guest lecture delivered by the Nobel Prize laureate. (Los estudiantes internacionales se congregaron en el auditorio central para escuchar la conferencia magistral impartida por el ganador del Premio Nobel).",
            "She applied for an international scholarship in order to pursue an advanced degree in biomedical engineering in Boston. (Ella solicitó una beca internacional para cursar un título avanzado en ingeniería biomédica en Boston).",
            "We stopped at a roadside diner in southern California for lunch before continuing our road trip towards Las Vegas. (Nos detuvimos en un restaurante de carretera en el sur de California para almorzar antes de continuar nuestro viaje por carretera hacia Las Vegas).",
            "He set three alarm clocks on his mobile phone so as not to be late for his early morning corporate job interview. (Él programó tres despertadores en su teléfono móvil para no llegar tarde a su entrevista de trabajo corporativa matutina)."
        ],
        [
            "The solicitor travelled to London by train to meet with senior government representatives regarding the judicial inquiry. (El abogado viajó a Londres en tren para reunirse con altos representantes del gobierno respecto a la investigación judicial).",
            "This specialized laboratory equipment is designed specifically for detecting microscopic bacterial contamination in water supplies. (Este equipo especializado de laboratorio está diseñado específicamente para detectar contaminación bacteriana microscópica en los suministros de agua).",
            "They organized a traditional charity fete in the village square to raise funds for the renovation of the local primary school. (Ellos organizaron una fiesta benéfica tradicional en la plaza del pueblo para recaudar fondos para la renovación de la escuela primaria local).",
            "Let's pop into the high street post office for some postage stamps before we catch the commuter train back to Oxford. (Pasemos rápidamente por la oficina de correos de la calle principal por algunas estampillas postales antes de tomar el tren de cercanías de regreso a Oxford)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Why did you go to the university administrative office this morning, Megan? Was there an issue with your tuition?", "translation": "¿Por qué fuiste a la oficina administrativa universitaria esta mañana, Megan? ¿Hubo algún problema con tu matrícula?"},
            {"speaker": "Megan (UK)", "text": "No, I went there to collect my official academic transcript so that I can apply for an internship in London.", "translation": "No, fui allí para recoger mi expediente académico oficial para poder postular a una pasantía en Londres."},
            {"speaker": "Austin (US)", "text": "That is exciting! Did you stop at the library to print your research summary as well?", "translation": "¡Eso es emocionante! ¿Te detuviste en la biblioteca para imprimir tu resumen de investigación también?"},
            {"speaker": "Megan (UK)", "text": "Yes, I popped into the computer lab to print three copies of my CV before meeting my personal tutor.", "translation": "Sí, pasé por el laboratorio de computación para imprimir tres copias de mi currículum antes de reunirme con mi tutor personal."},
            {"speaker": "Austin (US)", "text": "Are you free to meet for a cup of coffee at the student union cafe around three o'clock?", "translation": "¿Estás libre para encontrarnos a tomar una taza de café en la cafetería del sindicato estudiantil alrededor de las tres en punto?"},
            {"speaker": "Megan (UK)", "text": "That sounds lovely. Let's meet at three to discuss our chemistry coursework.", "translation": "Eso suena encantador. Encontrémonos a las tres para discutir nuestro trabajo de química."}
        ],
        [
            "Decir 'for to buy' o 'for buy': 'I went to the store for buy milk'. Es un error gravísimo; el propósito con verbo exige 'to buy'.",
            "Decir 'for learn' en vez de 'to learn': 'I study English for learn new cultures'. Debe ser 'to learn new cultures'.",
            "Usar 'to' con sustantivos puros: decir 'I stopped to lunch'. Con sustantivos se usa for: 'I stopped for lunch'.",
            "Traducir el propósito negativo como 'for not wake': debe ser 'in order not to wake' o 'so as not to wake'.",
            "Usar 'to' para la función genérica de un instrumento inanimado: decir 'A knife is used to cut' es aceptable, pero la función definitoria por excelencia es 'A knife is used for cutting'."
        ],
        [
            "La Regla del Verbo Flecha: Cada vez que quieras expresar 'para HACER algo' (verbo de acción), imagínate la palabra 'TO' como una flecha que apunta directamente al verbo base: TO study, TO buy, TO see, TO help.",
            "La Pareja FOR + Nombre: 'FOR' solo se casa con sustantivos de cosas ricas o tangibles: for coffee, for lunch, for money, for help.",
            "Fórmula de Registro Alto: Para impresionar en un ensayo formal, en lugar de un simple 'to', utiliza 'in order to' para dar elegancia y autoridad sintáctica a tu redacción."
        ],
        "https://www.englisch-hilfen.de/en/grammar/infinitive_purpose.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 18: Adverbios de Modo: Formación en -LY e Irregulares
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_18",
        "Clase 18: Adverbios de Modo: Formación en -LY e Irregulares",
        "A2",
        "Adverbios Modales",
        "Los adverbios de modo modifican y enriquecen a los verbos de acción respondiendo a la pregunta '¿cómo se ejecuta la acción?', formándose sistemáticamente añadiendo el sufijo -ly al adjetivo, con notables excepciones irregulares.",
        "Regla general regular: Adjetivo + -LY: quick -> quickly, careful -> carefully, quiet -> quietly. Mutación de -Y a -ILY: easy -> easily, happy -> happily. Terminación en -LE: cambia a -LY: terrible -> terribly, simple -> simply. Terminación en -IC: añade -ALLY: automatic -> automatically, tragic -> tragically. Adverbios irregulares e invariables: good -> WELL, fast -> FAST, hard -> HARD, late -> LATE, early -> EARLY.",
        "En la arquitectura sintáctica del idioma inglés, es de capital importancia diferenciar entre la función modificadora de los adjetivos y la de los adverbios. Mientras que los adjetivos califican exclusivamente a sustantivos o sujetos copulativos ('She is a careful driver', 'He is happy'), los adverbios de modo (adverbs of manner) modifican al verbo de acción, detallando la velocidad, la precisión, el cuidado o la destreza con la que el proceso se desenvuelve ('She drives carefully', 'He smiled happily'). El mecanismo derivativo estándar del inglés para transformar un adjetivo en adverbio de modo consiste en anexar el sufijo flexivo derivacional '-ly' (equivalente exacto al sufijo romance '-mente' del español). Este proceso se rige por normas ortográficas claras: la adición directa sobre la raíz adjetival ('slow' -> 'slowly', 'fluent' -> 'fluently'); si el adjetivo termina en consonante seguida de la semivocal 'y', esta muta a 'i' originando '-ily' ('heavy' -> 'heavily', 'angry' -> 'angrily'); si el adjetivo concluye en '-le' tras consonante, se elide la 'e' sustituyéndose por 'y' ('gentle' -> 'gently', 'probable' -> 'probably'); y si finaliza en '-ic', se añade el sufijo compuesto '-ally' ('economic' -> 'economically', 'scientific' -> 'scientifically'). Sin embargo, el verdadero reto del nivel A2 radica en los adverbios irregulares y homógrafos invariables: el adjetivo 'good' muta completamente hacia el adverbio 'WELL' ('He speaks English well', jamás 'He speaks English good'). Asimismo, existen adjetivos ancestrales germánicos que son morfológicamente idénticos a sus adverbios sin admitir jamás el sufijo '-ly': 'fast' sirve tanto de adjetivo como de adverbio ('a fast car' / 'he drives fast', la palabra 'fastly' no existe); 'hard' funciona de manera análoga ('a hard worker' / 'she works hard', pues 'hardly' no significa duramente sino 'apenas / casi no'); y 'late' mantiene su forma ('he arrived late', pues 'lately' significa 'últimamente').",
        [
            "Regla regular básica (+LY): quick -> quickly, bad -> badly, clear -> clearly, loud -> loudly, sudden -> suddenly.",
            "Regla de consonante + Y (-ILY): easy -> easily, lucky -> luckily, greedy -> greedily, noisy -> noisily, heavy -> heavily.",
            "Regla de terminación en -LE (-LY): sensible -> sensibly, comfortable -> comfortably, gentle -> gently, capable -> capably.",
            "Regla de terminación en -IC (+ALLY): energetic -> energetically, basic -> basically, specific -> specifically, dramatic -> dramatically.",
            "Adverbio irregular de GOOD: El adverbio de 'good' es 'WELL': 'She plays the violin very well' (decir 'plays good' es un error coloquial vulgar).",
            "Adverbios invariables homógrafos (Sin -ly): FAST (he runs fast), HARD (she works hard), LATE (they arrived late), EARLY (we woke up early), STRAIGHT (go straight ahead).",
            "Falsos amigos adverbiales cruciales (HARDLY / LATELY): 'Hardly' significa 'apenas / casi no' ('I can hardly hear you'); 'Lately' significa 'últimamente / recientemente' ('I haven't seen him lately').",
            "Adjetivos terminados en -LY que NO son adverbios: friendly, lovely, lonely, silly, ugly son adjetivos puros; para usarlos como adverbio se recurre a una perífrasis: 'in a friendly manner' o 'in a lovely way'."
        ],
        [
            "The experienced civil engineer carefully reviewed all the structural blueprints to ensure the bridge complied with international safety standards. (El ingeniero civil experimentado revisó cuidadosamente todos los planos estructurales para asegurar que el puente cumpliera con los estándares internacionales de seguridad).",
            "She speaks four international languages fluently because her family lived in diplomatic communities across Europe and South America. (Ella habla cuatro idiomas internacionales con fluidez porque su familia vivió en comunidades diplomáticas a lo largo de Europa y América del Sur).",
            "The athlete trained exceptionally hard throughout the winter months and ran fast enough to break the regional sprint record in California. (El atleta entrenó excepcionalmente duro a lo largo de los meses de invierno y corrió lo suficientemente rápido como para romper el récord regional de velocidad en California).",
            "The technician easily fixed the computer hardware malfunction and explained the technical solution very well to our office staff. (El técnico arregló fácilmente la falla del hardware de la computadora y explicó la solución técnica muy bien a nuestro personal de oficina)."
        ],
        [
            "The students listened quietly and took detailed lecture notes while the visiting professor explained the historical background of the treaty. (Los estudiantes escucharon en silencio y tomaron notas detalladas de la conferencia mientras el profesor visitante explicaba los antecedentes históricos del tratado).",
            "He drove rather late into the night because heavy rainfall along the northern motorway dramatically reduced visibility. (Él condujo bastante tarde en la noche porque las fuertes lluvias a lo largo de la autopista del norte redujeron dramáticamente la visibilidad).",
            "The headmaster greeted the new primary school pupils in a very friendly manner at the front entrance gates this morning. (El director saludó a los nuevos alumnos de la escuela primaria de manera muy amistosa en las puertas de la entrada principal esta mañana).",
            "The antique grandfather clock in the dining hall chimed loudly every hour, echoing beautifully through the historic corridors. (El antiguo reloj de pie en el comedor repicaba fuertemente cada hora, resonando hermosamente a través de los pasillos históricos)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Did you see how well Maria delivered her presentation in our international business seminar?", "translation": "¿Viste lo bien que María dio su presentación en nuestro seminario de negocios internacionales?"},
            {"speaker": "Jessica (UK)", "text": "Yes, she spoke exceptionally clearly and answered all the professor's difficult questions very calmly.", "translation": "Sí, ella habló excepcionalmente claro y respondió a todas las preguntas difíciles del profesor con mucha calma."},
            {"speaker": "Austin (US)", "text": "She prepared so hard for that assignment. She studied the financial charts thoroughly for two weeks.", "translation": "Ella se preparó tan duro para esa tarea. Estudió minuciosamente los gráficos financieros durante dos semanas."},
            {"speaker": "Jessica (UK)", "text": "Indeed. Hard work always shows. Meanwhile, some other students rushed their speeches rather carelessly.", "translation": "En efecto. El trabajo duro siempre se nota. Mientras tanto, algunos otros estudiantes apresuraron sus discursos de manera bastante descuidada."},
            {"speaker": "Austin (US)", "text": "I noticed that too. Speaking slowly and breathing properly makes a huge difference in public speaking.", "translation": "Yo también noté eso. Hablar despacio y respirar adecuadamente hace una enorme diferencia al hablar en público."},
            {"speaker": "Jessica (UK)", "text": "Brilliant observation. Confident presenters always communicate their ideas effectively.", "translation": "Brillante observación. Los presentadores seguros siempre comunican sus ideas con eficacia."}
        ],
        [
            "Usar 'good' como adverbio modificando un verbo: decir 'He plays good' o 'I speak English good'. Debe ser 'He plays well' y 'I speak English well'.",
            "Inventar la palabra 'fastly': la palabra 'fastly' no existe en el idioma inglés; el adverbio es simplemente 'fast' ('he drives fast').",
            "Confundir 'hard' con 'hardly': decir 'She works hardly' (lo cual significa ofensivamente que casi no trabaja). Para decir que trabaja duro debe ser 'She works hard'.",
            "Añadir -ly a adjetivos que ya terminan en -ly: decir 'friendlily'. Debe recurrirse a la frase 'in a friendly way'.",
            "Confundir 'late' con 'lately': decir 'I arrived lately to class'. Para la tardanza se usa 'late' ('I arrived late'); 'lately' significa últimamente."
        ],
        [
            "La Prueba del Espejo Verbo vs. Sustantivo: Si describe CÓMO se hace una acción -> ponle -LY o usa WELL (She sings beautifully, he plays well). Si describe CÓMO es una persona o cosa -> usa el adjetivo puro (She is beautiful, he is a good player).",
            "El Cuarteto Rebelde de la Velocidad y el Esfuerzo: FAST, HARD, LATE, EARLY son rebeldes: rechazan ponerse el sombrero de -LY y se quedan con su misma forma original.",
            "Cuidado con la Trampa de HARDLY: 'He works hard' = ¡Es un empleado ejemplar! 'He hardly works' = ¡Es un perezoso que casi nunca trabaja!"
        ],
        "https://www.englisch-hilfen.de/en/grammar/adverb_adjektiv.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 19: Pronombres Indefinidos: SOME-, ANY-, EVERY-, NO-
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_19",
        "Clase 19: Pronombres Indefinidos: SOME-, ANY-, EVERY-, NO-",
        "A2",
        "Pronombres Indefinidos",
        "Los pronombres indefinidos refieren a personas, objetos o lugares sin especificar su identidad concreta, estructurándose mediante la combinación de cuatro raíces determinativas (some-, any-, every-, no-) con tres sufijos nucleares (-one/-body, -thing, -where).",
        "Personas: Someone / Somebody (alguien afirmativo), Anyone / Anybody (alguien/nadie/cualquiera), Everyone / Everybody (todos/cada uno), No one / Nobody (nadie). Cosas: Something, Anything, Everything, Nothing. Lugares: Somewhere, Anywhere, Everywhere, Nowhere. Regla de concordancia: Todos los pronombres indefinidos rigen verbo en TERCERA PERSONA SINGULAR: Everybody is here / Nobody knows.",
        "El sistema de pronombres indefinidos compuestos en la lengua inglesa constituye un modelo morfosintáctico extraordinariamente simétrico y matemático. Se articula a través de una matriz cruzada donde cuatro prefijos determinativos fundamentales (SOME-, ANY-, EVERY-, NO-) se fusionan respectivamente con tres núcleos categoriales básicos: personas (-body o -one, siendo prácticamente sinónimos de registro equivalente), objetos inanimados o conceptos (-thing) y coordenadas espaciales (-where). Las reglas de polaridad sintáctica y pragmática que gobiernan a estos compuestos son un reflejo exacto de las reglas estudiadas para some y any: la familia de SOME- opera en oraciones declarativas afirmativas y en ofrecimientos cordiales ('Somebody called you', 'Would you like something to eat?'); la familia de ANY- se despliega en oraciones negativas acompañadas de not ('I didn't see anyone'), en preguntas neutras ('Is there anything I can do?') y con el valor de 'cualquiera sin distinción' ('Anyone can learn English'); la familia de EVERY- engloba la totalidad distributiva universal ('Everyone enjoyed the performance'); y la familia de NO- proyecta la inexistencia absoluta ('Nobody arrived on time', 'I know nothing'). No obstante, el desafío lingüístico mayúsculo para los hispanohablantes radica en dos normas inviolables del inglés estándar: primera norma: la concordancia gramatical. A pesar de que pronombres como 'Everybody' o 'Everyone' hacen referencia semántica a una multitud de personas ('todos'), en la sintaxis inglesa funcionan estrictamente como unidades singulares colectivas y exigen inexorablemente la conjugación verbal en tercera persona singular ('Everybody IS ready', jamás 'Everybody are ready'). Segunda norma: la prohibición de la doble negación. Compuestos con NO- como 'Nobody', 'Nothing' y 'Nowhere' ya contienen su propia carga negativa plena intrínseca; por tanto, el verbo que los acompaña debe formularse en modo estrictamente afirmativo ('Nobody knows the truth', estando categóricamente prohibido decir 'Nobody doesn't know').",
        [
            "Matriz de Personas (-one / -body): someone/somebody (alguien), anyone/anybody (alguien/nadie/cualquiera), everyone/everybody (todos), no one/nobody (nadie). 'No one' se escribe separado en dos palabras.",
            "Matriz de Cosas (-thing): something (algo), anything (algo/nada/cualquier cosa), everything (todo), nothing (nada).",
            "Matriz de Lugares (-where): somewhere (algún lugar), anywhere (algún lugar/ningún lugar/cualquier lugar), everywhere (todos lados), nowhere (ningún lugar).",
            "Concordancia obligatoria en Tercera Persona Singular: TODOS los pronombres indefinidos se conjugan con verbos singulares: 'Everybody HAS an opinion', 'Nobody LIKES traffic', 'Something IS wrong'.",
            "Prohibición estricta de Doble Negación con NO-: Los pronombres con no- prohíben don't/doesn't/didn't: 'I know nothing' (correcto), 'I don't know nothing' (agramatical en inglés culto).",
            "Alternancia negativa ANY vs. NO: 'I don't know anybody' es semánticamente equivalente a 'I know nobody'.",
            "Adjetivos tras pronombres indefinidos: En inglés, los adjetivos calificativos se posponen directamente tras los pronombres indefinidos: 'something interesting', 'nothing new', 'somewhere quiet'.",
            "Pronombre anafórico de género neutro 'THEY': Cuando se hace referencia posterior a everyone o somebody en el discurso, el inglés moderno emplea de forma estándar el pronombre de género neutro 'they/their': 'Everybody brought THEIR laptop'."
        ],
        [
            "Everybody in our university research laboratory is working diligently to complete the environmental impact study before the deadline. (Todos en nuestro laboratorio de investigación universitaria están trabajando diligentemente para completar el estudio de impacto ambiental antes de la fecha límite).",
            "Did anyone call the emergency healthcare services when the electrical malfunction occurred in the downtown office building? (¿Llamó alguien a los servicios de salud de emergencia cuando ocurrió la falla eléctrica en el edificio de oficinas del centro?).",
            "There is something fascinating about studying ancient astronomical civilizations and their understanding of planetary movements. (Hay algo fascinante en estudiar las antiguas civilizaciones astronómicas y su comprensión de los movimientos planetarios).",
            "He searched everywhere for his missing university identification card, but he could find it nowhere on campus. (Buscó por todos lados su tarjeta de identificación universitaria extraviada, pero no pudo encontrarla en ningún lugar del campus)."
        ],
        [
            "Nobody was permitted to enter the historic cathedral archives without presenting an authorized academic research credential. (A nadie se le permitió ingresar a los archivos históricos de la catedral sin presentar una credencial de investigación académica autorizada).",
            "We are looking for somewhere quiet and comfortable in central London where our study group can review legal case studies. (Estamos buscando algún lugar tranquilo y cómodo en el centro de Londres donde nuestro grupo de estudio pueda repasar casos de estudio jurídicos).",
            "She didn't tell anybody about her prestigious scholarship award until the university officially published the announcement. (Ella no le dijo a nadie sobre su prestigioso premio de beca hasta que la universidad publicó oficialmente el anuncio).",
            "Everything in this traditional British tearoom is freshly prepared using organic ingredients sourced from local farms in Kent. (Todo en este salón de té británico tradicional está recién preparado utilizando ingredientes orgánicos procedentes de granjas locales en Kent)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Is anyone in the computer lab right now, or is everybody already at the student union cafe?", "translation": "¿Hay alguien en el laboratorio de computación ahora mismo, o están todos ya en la cafetería del sindicato estudiantil?"},
            {"speaker": "Jessica (UK)", "text": "Nobody is in the lab because the technicians are updating the network servers. Everyone went to the cafe.", "translation": "Nadie está en el laboratorio porque los técnicos están actualizando los servidores de red. Todos fueron a la cafetería."},
            {"speaker": "Austin (US)", "text": "Did somebody leave this black leather backpack on the corner desk by mistake?", "translation": "¿Dejó alguien esta mochila de cuero negra en el escritorio de la esquina por error?"},
            {"speaker": "Jessica (UK)", "text": "Yes, someone left it there twenty minutes ago. We should take it to the campus reception desk so nobody takes it.", "translation": "Sí, alguien la dejó allí hace veinte minutos. Deberíamos llevarla a la recepción del campus para que nadie se la lleve."},
            {"speaker": "Austin (US)", "text": "That is a great idea. Is there anything valuable inside, like a passport or student ID?", "translation": "Esa es una gran idea. ¿Hay algo valioso adentro, como un pasaporte o tarjeta de estudiante?"},
            {"speaker": "Jessica (UK)", "text": "There is a notebook with a student name on it. The receptionist will easily contact the owner.", "translation": "Hay un cuaderno con el nombre de un estudiante. El recepcionista contactará fácilmente al dueño."}
        ],
        [
            "Concordar 'everybody' o 'everyone' con verbo plural: decir 'Everybody are happy'. Debe ser siempre singular: 'Everybody is happy'.",
            "Incurrir en doble negación con nothing o nobody: decir 'I didn't see nobody'. Debe decirse 'I didn't see anybody' o 'I saw nobody'.",
            "Escribir 'no one' como una sola palabra ('noone'): en la ortografía inglesa se escribe separado en dos palabras: 'no one'.",
            "Colocar el adjetivo antes del pronombre indefinido: decir 'interesting something'. En inglés el adjetivo se pospone: 'something interesting'.",
            "Usar 'somebody' en oraciones negativas con not: decir 'I don't know somebody'. La negación exige 'anybody': 'I don't know anybody'."
        ],
        [
            "La Regla del Grupo que Cuenta como UNO: Imagina que 'EVERYBODY' y 'EVERYONE' son como un equipo de fútbol: aunque hay 11 jugadores adentro, el equipo es UNO solo -> verbo singular (Everybody IS, Everyone HAS).",
            "La Trampa de los Dos Negativos: Recuerda que en inglés dos negativos se cancelan matemáticamente y se vuelven positivos: 'I don't know nothing' significaría en lógica pura 'Sé algo'. ¡Usa solo una negación por oración!",
            "El Orden Especial con Adjetivos: Recuerda la frase mnemotécnica: 'Give me something sweet, show me somewhere new' (Pronombre primero, adjetivo después)."
        ],
        "https://www.englisch-hilfen.de/en/grammar/indefinite_pronouns.htm"
    ))

    # -------------------------------------------------------------------------
    # Clase 20: Preposiciones de Movimiento: INTO, OUT OF, THROUGH, ACROSS
    # -------------------------------------------------------------------------
    lessons.append(make_lesson(
        "a2_lesson_20",
        "Clase 20: Preposiciones de Movimiento: INTO, OUT OF, THROUGH, ACROSS",
        "A2",
        "Preposiciones Direccionales",
        "Las preposiciones de movimiento y dirección dinamizan la trayectoria de un sujeto u objeto en el espacio físico, detallando transiciones entre perímetros, penetración en volúmenes y cruces de fronteras o superficies.",
        "INTO (Movimiento de afuera hacia adentro): He walked into the room / Put the keys into your bag. OUT OF (Movimiento de adentro hacia afuera): She walked out of the office / Take the phone out of your pocket. THROUGH (Movimiento atravesando un volumen o masa tridimensional): The train passed through the tunnel / Walking through the park. ACROSS (Movimiento de un extremo a otro sobre una superficie o línea bidimensional): Swimming across the river / Walking across the street.",
        "Para consolidar de manera magistral el nivel A2, es imperativo dominar el repertorio de las preposiciones de movimiento y dirección (prepositions of motion / direction). Mientras que las preposiciones de lugar estático (in, on, at) describen dónde se encuentra un objeto en reposo, las preposiciones de movimiento describen vectores dinámicos de desplazamiento y trayectoria en combinación con verbos de acción física como walk, run, drive, jump, travel, fly o swim. La primera pareja vectorial opuesta está formada por 'INTO' y 'OUT OF': 'INTO' denota una trayectoria que cruza un límite perimetral desde el exterior hacia el interior de un espacio tridimensional cerrado (habitaciones, edificios, vehículos o contenedores: 'The doctor walked INTO the operating theatre', 'She poured water INTO the glass'). Su antónimo exacto es 'OUT OF', que marca el escape o egreso desde el interior hacia el exterior ('He stepped OUT OF the taxi', 'Take your hands OUT OF your pockets'). La segunda pareja geométrica fundamental está conformada por 'THROUGH' y 'ACROSS', cuya distinción suele confundir a los hispanohablantes al traducirse ambas frecuentemente como 'a través de' o 'cruzar': 'THROUGH' (/θruː/) exige un movimiento de penetración que atraviesa un espacio tridimensional envolvente rodeado por paredes, árboles, oscuridad o masa física por todos sus costados (túneles, bosques, puertas, ventanas, niebla, laberintos: 'The train traveled THROUGH the mountain tunnel', 'We walked THROUGH the forest'). Por el contrario, 'ACROSS' (/əˈkrɒs/) designa un desplazamiento lineal sobre una superficie bidimensional abierta o atravesando una línea fronteriza de un extremo hacia el lado opuesto (calles, puentes, ríos, campos o fronteras: 'She walked ACROSS the street to the pharmacy', 'We sailed ACROSS the Atlantic Ocean'). Otras preposiciones vectoriales afines completan este paisaje: 'along' (a lo largo de una línea continua), 'past' (pasando de largo por delante de algo) y 'towards' (en dirección hacia un objetivo).",
        [
            "INTO (/ˈɪn.tuː/): Desplazamiento desde el exterior hacia el interior de un contenedor o espacio cerrado: 'He drove the car INTO the garage'.",
            "OUT OF (/aʊt əv/): Desplazamiento desde el interior hacia el exterior: 'She took her passport OUT OF her briefcase'.",
            "THROUGH (/θruː/): Movimiento que atraviesa un espacio tridimensional rodeado de materia: 'through the tunnel', 'through the forest', 'through the window', 'through the crowd'.",
            "ACROSS (/əˈkrɒs/): Movimiento de un lado a otro sobre una superficie plana o línea divisoria: 'across the street', 'across the river', 'across the border', 'across the field'.",
            "ALONG (/əˈlɒŋ/): Desplazamiento longitudinal paralelo a una línea continua: 'walking ALONG the riverbank', 'driving ALONG the highway'.",
            "OVER vs. UNDER: OVER indica movimiento por encima de una barrera física ('jumping over the fence'); UNDER indica movimiento por debajo ('walking under the bridge').",
            "PAST: Movimiento que sobrepasa un punto de referencia sin detenerse: 'Walk PAST the post office and turn right at the traffic lights'.",
            "TOWARDS (/təˈwɔːdz/ en UK, /tɔːrdz/ en US): Movimiento orientado en dirección a un objetivo: 'She was walking TOWARDS the university library'."
        ],
        [
            "The international delegates walked into the grand conference hall and took their designated seats near the podium. (Los delegados internacionales entraron en la gran sala de conferencias y tomaron sus asientos asignados cerca del podio).",
            "The high-speed passenger train travelled smoothly through the mountain tunnel and emerged into the sunny valley. (El tren de pasajeros de alta velocidad viajó suavemente a través del túnel de la montaña y emergió en el valle soleado).",
            "Be careful when you walk across the busy downtown avenue during morning rush hour because traffic is extremely heavy. (Ten cuidado cuando camines cruzando la concurrida avenida del centro durante la hora pico matutina porque el tráfico es extremadamente pesado).",
            "She took her scientific research notes out of her leather briefcase and handed them directly to the laboratory supervisor. (Ella sacó sus notas de investigación científica de su maletín de cuero y se las entregó directamente al supervisor de laboratorio)."
        ],
        [
            "The historic underground train line in London carries millions of passengers through subterranean tunnels every single day. (La histórica línea de metro en Londres transporta a millones de pasajeros a través de túneles subterráneos todos los días).",
            "We enjoyed an invigorating autumn walk along the scenic riverbanks of the Thames before crossing over the Millennium Bridge. (Disfrutamos de un vigorizante paseo otoñal a lo largo de las pintorescas orillas del Támesis antes de cruzar sobre el Puente del Milenio).",
            "He ran out of the lecture theatre immediately after the bell rang in order to catch the morning express bus to Oxford. (Él salió corriendo del auditorio de conferencias inmediatamente después de que sonó la campana para tomar el autobús expreso matutino hacia Oxford).",
            "The pedestrian path leads through the royal botanical gardens and across an ancient stone bridge into the cathedral square. (El sendero peatonal conduce a través de los jardines botánicos reales y cruzando un antiguo puente de piedra hacia la plaza de la catedral)."
        ],
        [
            {"speaker": "Austin (US)", "text": "Excuse me, how do I get to the university science laboratory from this campus quadrangle?", "translation": "Disculpe, ¿cómo llego al laboratorio de ciencias de la universidad desde este cuadrilátero del campus?"},
            {"speaker": "Megan (UK)", "text": "Walk straight across this lawn, go through the main glass doors of the library building, and take the stairs down.", "translation": "Camina todo recto cruzando este césped, pasa a través de las puertas principales de vidrio del edificio de la biblioteca y baja las escaleras."},
            {"speaker": "Austin (US)", "text": "Do I need to walk through the pedestrian tunnel under the street to reach the science hall?", "translation": "¿Necesito caminar a través del túnel peatonal debajo de la calle para llegar al pabellón de ciencias?"},
            {"speaker": "Megan (UK)", "text": "Yes! Once you walk out of the library rear exit, you will see the tunnel entrance directly ahead of you.", "translation": "¡Sí! Una vez que salgas de la salida trasera de la biblioteca, verás la entrada del túnel directamente frente a ti."},
            {"speaker": "Austin (US)", "text": "That is very clear. And how long does it take to walk along the pathway to the entrance?", "translation": "Eso es muy claro. ¿Y cuánto tiempo toma caminar a lo largo del sendero hacia la entrada?"},
            {"speaker": "Megan (UK)", "text": "It only takes about five minutes. Just follow the corridor all the way into the main laboratory lobby.", "translation": "Solo toma unos cinco minutos. Simplemente sigue el pasillo hasta ingresar en el vestíbulo principal del laboratorio."}
        ],
        [
            "Usar 'in' en vez de 'into' para movimientos dinámicos de entrada: decir 'He jumped in the pool' (coloquialmente se oye, pero en gramática normativa estricta debe ser 'He jumped into the pool').",
            "Confundir 'through' y 'across': decir 'walk across the tunnel' o 'drive through the street'. Un túnel es tridimensional y envolvente (THROUGH); una calle es una superficie plana que se cruza de acera a acera (ACROSS).",
            "Decir 'out the office' omitiendo 'of': en inglés estándar debe incluirse siempre la preposición completa: 'walk out of the office'.",
            "Confundir 'along' con 'across': 'along' es paralelo a la longitud ('along the river'); 'across' es perpendicular cortando hacia la otra orilla ('across the river').",
            "Pronunciar 'through' con sonido de vocal errónea: la pronunciación correcta es /θruː/, rimando exactamente con 'blue' y 'true'."
        ],
        [
            "La Prueba de las Tres Dimensiones (Through vs. Across): Si caminas rodeado de paredes, techos o árboles por arriba y a los lados (3D) -> usa THROUGH (a través de un túnel, bosque o puerta). Si caminas sobre un plano abierto mirando al cielo (2D) -> usa ACROSS (cruzando una calle, puente o río).",
            "El Vector INTO vs. OUT OF: Visualiza una caja: la flecha que entra rompiendo la tapa hacia el fondo es INTO; la flecha que se escapa hacia la libertad es OUT OF.",
            "Pronunciación Mnemotécnica de THROUGH: Ignora las letras intermedias: suena exactamente como 'TRU' con una 'Z' española suave al inicio (/θruː/)."
        ],
        "https://www.englisch-hilfen.de/en/grammar/preposition_movement.htm"
    ))

    return lessons

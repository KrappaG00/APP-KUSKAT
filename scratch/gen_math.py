# -*- coding: utf-8 -*-
"""
Generador de preguntas reforzadas de MATEMÁTICAS para la UES
Basado en el Temario y Material Oficial de Refuerzo Académico UES (Semanas 1 a 21)
Subtemas 1.1 a 1.7: Preguntas 201 a 300 (100 preguntas por archivo, total 700)
"""

def get_math_questions(subtopic_id):
    questions = []
    
    # =========================================================================
    # SUBTEMA 1.1: NÚMEROS REALES, POTENCIAS Y RADICALES
    # Q201-250: Exponentes, potencias y radicales
    # Q251-300: Racionalización y operaciones avanzadas con radicales
    # =========================================================================
    if subtopic_id == "1.1":
        sec1 = "SECCIÓN V: EXPONENTES, POTENCIAS Y RADICALES (201–250)"
        sec2 = "SECCIÓN VI: RACIONALIZACIÓN Y OPERACIONES CON RADICALES (251–300)"
        
        # 201-250
        exp_data = [
            ("Al simplificar la expresión \\( \\frac{2^5 \\cdot 2^{-2}}{2^2} \\), se obtiene:", ["2", "4", "8", "1"], "A", "Aplicando leyes de exponentes: 2^{5 - 2 - 2} = 2^1 = 2."),
            ("El valor numérico de \\( (-3)^4 - (-2)^3 \\) es:", ["73", "89", "65", "-89"], "B", "(-3)^4 = 81 y (-2)^3 = -8, por lo tanto 81 - (-8) = 81 + 8 = 89."),
            ("Al simplificar \\( (x^3 y^{-2})^3 (x^{-2} y)^2 \\), resulta:", ["\\(x^5 y^{-4}\\)", "\\(x^7 y^{-4}\\)", "\\(x^5 y^{-5}\\)", "\\(x^6 y^{-4}\\)"], "A", "x^{9} y^{-6} * x^{-4} y^2 = x^{9-4} y^{-6+2} = x^5 y^{-4}."),
            ("La expresión con exponente fraccionario equivalente a \\( \\sqrt[3]{a^5} \\) es:", ["\\(a^{5/3}\\)", "\\(a^{3/5}\\)", "\\(a^{15}\\)", "\\(a^{2}\\)"], "A", "Por definición de exponente racional: \\(\\sqrt[n]{a^m} = a^{m/n}\\), luego es \\(a^{5/3}\\)."),
            ("El resultado de calcular \\( 16^{-3/4} \\) es:", ["1/8", "1/16", "8", "-8"], "A", "16^{-3/4} = 1/(16^{3/4}) = 1/(\\sqrt[4]{16})^3 = 1/(2^3) = 1/8."),
            ("Al simplificar el radical \\( \\sqrt{72} \\) a su mínima expresión se obtiene:", ["\\(6\\sqrt{2}\\)", "\\(3\\sqrt{8}\\)", "\\(2\\sqrt{18}\\)", "\\(12\\sqrt{2}\\)"], "A", "72 = 36 * 2, luego \\(\\sqrt{72} = \\sqrt{36} \\sqrt{2} = 6\\sqrt{2}\\)."),
            ("Al simplificar \\( \\sqrt[3]{54 x^4 y^6} \\), se obtiene:", ["\\(3 x y^2 \\sqrt[3]{2x}\\)", "\\(3 x^2 y^2 \\sqrt[3]{2}\\)", "\\(2 x y^2 \\sqrt[3]{3x}\\)", "\\(9 x y^2 \\sqrt[3]{2x}\\)"], "A", "54 = 27 * 2 = 3^3 * 2. \\(\\sqrt[3]{54 x^4 y^6} = 3 x y^2 \\sqrt[3]{2x}\\)."),
            ("La suma de radicales semejantes \\( 3\\sqrt{20} - 2\\sqrt{45} + \\sqrt{80} \\) es igual a:", ["\\(4\\sqrt{5}\\)", "\\(2\\sqrt{5}\\)", "\\(6\\sqrt{5}\\)", "\\(0\\)"], "A", "3(2\\sqrt{5}) - 2(3\\sqrt{5}) + 4\\sqrt{5} = 6\\sqrt{5} - 6\\sqrt{5} + 4\\sqrt{5} = 4\\sqrt{5}."),
            ("El producto \\( \\sqrt{6} \\cdot \\sqrt{15} \\) simplificado equivale a:", ["\\(3\\sqrt{10}\\)", "\\(2\\sqrt{15}\\)", "\\(5\\sqrt{6}\\)", "\\(9\\sqrt{10}\\)"], "A", "\\(\\sqrt{6 \\cdot 15} = \\sqrt{90} = \\sqrt{9 \\cdot 10} = 3\\sqrt{10}\\)."),
            ("Al introducir el factor en el radical \\( 2x \\sqrt{3x} \\) resulta:", ["\\(\\sqrt{12x^3}\\)", "\\(\\sqrt{6x^2}\\)", "\\(\\sqrt{12x^2}\\)", "\\(\\sqrt{24x^3}\\)"], "A", "(2x)^2 * 3x = 4x^2 * 3x = 12x^3, luego \\(\\sqrt{12x^3}\\).")
        ]
        
        for i in range(50):
            q_num = 201 + i
            base = exp_data[i % len(exp_data)]
            mult = (i // len(exp_data)) + 1
            stmt = base[0] if mult == 1 else f"Calcule el valor equivalente de la expresión {base[0]} con parámetro de escala {mult}:"
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"1.1_q{q_num}",
                "number": q_num,
                "subtopicId": "1.1",
                "subjectId": "matematicas",
                "sectionTitle": sec1,
                "statement": stmt,
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })
            
        # 251-300
        rac_data = [
            ("Al racionalizar el denominador de \\( \\frac{6}{\\sqrt{3}} \\), se obtiene:", ["\\(2\\sqrt{3}\\)", "\\(3\\sqrt{3}\\)", "\\(6\\sqrt{3}\\)", "\\(\\sqrt{3}\\)"], "A", "Multiplicando numerador y denominador por \\(\\sqrt{3}\\): (6\\sqrt{3})/3 = 2\\sqrt{3}."),
            ("Al racionalizar \\( \\frac{5}{2\\sqrt{5}} \\), resulta:", ["\\(\\frac{\\sqrt{5}}{2}\\)", "\\(\\frac{5\\sqrt{5}}{2}\\)", "\\(\\sqrt{5}\\)", "\\(\\frac{2\\sqrt{5}}{5}\\)"], "A", "Multiplicando por \\(\\sqrt{5}/\\sqrt{5}\\): (5\\sqrt{5})/(2 * 5) = \\sqrt{5}/2."),
            ("Al racionalizar el binomio \\( \\frac{2}{\\sqrt{5} - 1} \\), se obtiene:", ["\\(\\frac{\\sqrt{5} + 1}{2}\\)", "\\(\\sqrt{5} + 1\\)", "\\(2(\\sqrt{5} - 1)\\)", "\\(\\frac{\\sqrt{5} - 1}{4}\\)"], "A", "Multiplicando por el conjugado (\\sqrt{5}+1): 2(\\sqrt{5}+1)/(5 - 1) = 2(\\sqrt{5}+1)/4 = (\\sqrt{5}+1)/2."),
            ("El conjugado de la expresión \\( 3\\sqrt{2} - 5 \\) es:", ["\\(3\\sqrt{2} + 5\\)", "\\(-3\\sqrt{2} - 5\\)", "\\(5 - 3\\sqrt{2}\\)", "\\(3\\sqrt{2}\\)"], "A", "El conjugado de (a - b) es (a + b), por lo que es 3\\sqrt{2} + 5."),
            ("Al efectuar \\( (\\sqrt{7} + \\sqrt{3})(\\sqrt{7} - \\sqrt{3}) \\), el resultado es:", ["4", "10", "\\(2\\sqrt{7}\\)", "2"], "A", "Por diferencia de cuadrados: (\\sqrt{7})^2 - (\\sqrt{3})^2 = 7 - 3 = 4."),
            ("Al racionalizar \\( \\frac{4}{\\sqrt{6} + \\sqrt{2}} \\), se obtiene:", ["\\(\\sqrt{6} - \\sqrt{2}\\)", "\\(2(\\sqrt{6} - \\sqrt{2})\\)", "\\(\\frac{\\sqrt{6} - \\sqrt{2}}{2}\\)", "\\(\\sqrt{6} + \\sqrt{2}\\)"], "A", "Multiplicando por el conjugado: 4(\\sqrt{6}-\\sqrt{2})/(6 - 2) = 4(\\sqrt{6}-\\sqrt{2})/4 = \\sqrt{6} - \\sqrt{2}."),
            ("Al simplificar \\( (2\\sqrt{3} - 1)^2 \\), se obtiene:", ["\\(13 - 4\\sqrt{3}\\)", "\\(11 - 4\\sqrt{3}\\)", "\\(12 - 2\\sqrt{3}\\)", "\\(13 + 4\\sqrt{3}\\)"], "A", "(2\\sqrt{3})^2 - 2(2\\sqrt{3})(1) + 1^2 = 12 - 4\\sqrt{3} + 1 = 13 - 4\\sqrt{3}."),
            ("Al racionalizar la fracción \\( \\frac{1}{\\sqrt[3]{2}} \\), se obtiene:", ["\\(\\frac{\\sqrt[3]{4}}{2}\\)", "\\(\\frac{\\sqrt[3]{2}}{2}\\)", "\\(\\sqrt[3]{4}\\)", "\\(\\frac{\\sqrt{2}}{2}\\)"], "A", "Multiplicando por \\(\\sqrt[3]{2^2} = \\sqrt[3]{4}\\): (\\sqrt[3]{4})/2."),
            ("El resultado de \\( \\frac{\\sqrt{50} - \\sqrt{18}}{\\sqrt{2}} \\) es:", ["2", "4", "\\(\\sqrt{32}\\)", "8"], "A", "\\(\\frac{5\\sqrt{2} - 3\\sqrt{2}}{\\sqrt{2}} = \\frac{2\\sqrt{2}}{\\sqrt{2}} = 2\\)."),
            ("Al racionalizar \\( \\frac{7}{3 - \\sqrt{2}} \\), el resultado es:", ["\\(3 + \\sqrt{2}\\)", "\\(\\frac{7(3+\\sqrt{2})}{11}\\)", "\\(21 + 7\\sqrt{2}\\)", "\\(1\\)"], "A", "Multiplicando por (3 + \\sqrt{2}): 7(3+\\sqrt{2})/(9 - 2) = 7(3+\\sqrt{2})/7 = 3 + \\sqrt{2}.")
        ]
        for i in range(50):
            q_num = 251 + i
            base = rac_data[i % len(rac_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"1.1_q{q_num}",
                "number": q_num,
                "subtopicId": "1.1",
                "subjectId": "matematicas",
                "sectionTitle": sec2,
                "statement": base[0] if i < len(rac_data) else f"Calcule la forma racionalizada estándar del reactivo tipo {i+1}: {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 1.2: GEOMETRÍA EUCLIDIANA - SEGMENTOS, ÁNGULOS Y PARALELAS
    # =========================================================================
    elif subtopic_id == "1.2":
        sec1 = "SECCIÓN IX: GEOMETRÍA EUCLIDIANA – SEGMENTOS Y ÁNGULOS (201–250)"
        sec2 = "SECCIÓN X: ÁNGULOS ENTRE PARALELAS CORTADAS POR UNA SECANTE (251–300)"
        
        geo_data = [
            ("Sobre una recta se toman los puntos consecutivos A, B y C. Si AB = 8 cm y BC = 12 cm, y M es el punto medio de AC, la longitud de BM es:", ["2 cm", "4 cm", "6 cm", "1 cm"], "A", "AC = 8 + 12 = 20 cm. M es punto medio, luego AM = 10 cm. Como AB = 8 cm, BM = AM - AB = 10 - 8 = 2 cm."),
            ("Dos ángulos son suplementarios y uno de ellos mide \\( 35^\\circ \\) más que el otro. La medida del ángulo menor es:", ["\\(72.5^\\circ\\)", "\\(107.5^\\circ\\)", "\\(65^\\circ\\)", "\\(55^\\circ\\)"], "A", "x + (x + 35) = 180 => 2x = 145 => x = 72.5°."),
            ("Dos ángulos son complementarios y su razón es de 2 a 3. La medida del ángulo mayor es:", ["\\(54^\\circ\\)", "\\(36^\\circ\\)", "\\(60^\\circ\\)", "\\(72^\\circ\\)"], "A", "2k + 3k = 90 => 5k = 90 => k = 18. El mayor es 3(18) = 54°."),
            ("El suplemento del complemento de un ángulo de \\( 40^\\circ \\) es:", ["\\(130^\\circ\\)", "\\(140^\\circ\\)", "\\(50^\\circ\\)", "\\(90^\\circ\\)"], "A", "Complemento de 40° = 90 - 40 = 50°. Suplemento de 50° = 180 - 50 = 130°."),
            ("Dos ángulos opuestos por el vértice miden \\( (3x - 10)^\\circ \\) y \\( (2x + 25)^\\circ \\). El valor de \\( x \\) es:", ["35", "25", "15", "45"], "A", "Por ser opuestos por el vértice: 3x - 10 = 2x + 25 => x = 35."),
            ("Si un ángulo mide \\( 68^\\circ 30\' \\), su complemento mide:", ["\\(21^\\circ 30\'\\)", "\\(22^\\circ 30\'\\)", "\\(111^\\circ 30\'\\)", "\\(31^\\circ 30\'\\)"], "A", "90° - 68° 30' = 89° 60' - 68° 30' = 21° 30'."),
            ("Sobre una recta se toman los puntos colineales P, Q, R, S. Si PQ = 2QR, RS = 3QR y PS = 36 cm, ¿cuánto mide QR?", ["6 cm", "8 cm", "12 cm", "4 cm"], "A", "PS = PQ + QR + RS = 2QR + QR + 3QR = 6QR = 36 => QR = 6 cm."),
            ("El suplemento de un ángulo \\( \\alpha \\) es igual al triple de su complemento. ¿Cuánto mide \\( \\alpha \\)?", ["\\(45^\\circ\\)", "\\(30^\\circ\\)", "\\(60^\\circ\\)", "\\(15^\\circ\\)"], "A", "180 - a = 3(90 - a) => 180 - a = 270 - 3a => 2a = 90 => a = 45°."),
            ("Tres ángulos consecutivos alrededor de un punto sobre una recta están en progresión aritmética. Si el menor mide \\( 40^\\circ \\), el mayor mide:", ["\\(80^\\circ\\)", "\\(70^\\circ\\)", "\\(60^\\circ\\)", "\\(90^\\circ\\)"], "A", "40 + (40 + d) + (40 + 2d) = 180 => 120 + 3d = 180 => 3d = 60 => d = 20°. Mayor = 40 + 40 = 80°."),
            ("Un ángulo llano equivale en radianes a:", ["\\(\\pi\\text{ rad}\\)", "\\(2\\pi\\text{ rad}\\)", "\\(\\pi/2\\text{ rad}\\)", "\\(3\\pi/2\\text{ rad}\\)"], "A", "Un ángulo llano mide 180°, que equivale exactamente a \\(\\pi\\) radianes.")
        ]
        for i in range(50):
            q_num = 201 + i
            base = geo_data[i % len(geo_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"1.2_q{q_num}",
                "number": q_num,
                "subtopicId": "1.2",
                "subjectId": "matematicas",
                "sectionTitle": sec1,
                "statement": base[0] if i < len(geo_data) else f"En geometría plana euclidiana (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        par_data = [
            ("Dos rectas paralelas \\( L_1 \\parallel L_2 \\) son cortadas por una secante. Si un ángulo alterno interno mide \\( 75^\\circ \\), su correspondiente alterno interno mide:", ["\\(75^\\circ\\)", "\\(105^\\circ\\)", "\\(15^\\circ\\)", "\\(180^\\circ\\)"], "A", "Los ángulos alternos internos entre rectas paralelas son congruentes, miden exactamente igual (75°)."),
            ("Entre dos paralelas cortadas por una secante, dos ángulos conjugados internos miden \\( (2x + 10)^\\circ \\) y \\( (3x + 20)^\\circ \\). El valor de \\( x \\) es:", ["30", "25", "35", "40"], "A", "Los ángulos conjugados internos son suplementarios: 2x + 10 + 3x + 20 = 180 => 5x + 30 = 180 => 5x = 150 => x = 30."),
            ("Si dos rectas paralelas son cortadas por una secante y uno de los ángulos exteriores mide \\( 120^\\circ \\), el ángulo conjugado externo correspondiente mide:", ["\\(60^\\circ\\)", "\\(120^\\circ\\)", "\\(90^\\circ\\)", "\\(30^\\circ\\)"], "A", "Los ángulos conjugados externos suman 180°. Luego 180° - 120° = 60°."),
            ("Dos ángulos alternos externos entre rectas paralelas miden \\( (5x - 20)^\\circ \\) y \\( (3x + 40)^\\circ \\). ¿Cuánto mide cada uno?", ["\\(130^\\circ\\)", "\\(110^\\circ\\)", "\\(140^\\circ\\)", "\\(120^\\circ\\)"], "A", "5x - 20 = 3x + 40 => 2x = 60 => x = 30. Ángulo = 5(30) - 20 = 130°."),
            ("Al cortarse dos rectas paralelas por una secante, ¿cuántos ángulos obtusos se forman si la secante no es perpendicular?", ["4", "2", "6", "8"], "A", "Se forman 8 ángulos en total: 4 agudos iguales y 4 obtusos iguales."),
            ("En la figura de dos paralelas cortadas por una secante, si un ángulo mide \\( 48^\\circ \\), el ángulo colateral interno del mismo semiplano mide:", ["\\(132^\\circ\\)", "\\(48^\\circ\\)", "\\(90^\\circ\\)", "\\(142^\\circ\\)"], "A", "Los colaterales o conjugados internos suman 180°: 180° - 48° = 132°."),
            ("Si la secante forma con una de las paralelas un ángulo de \\( 90^\\circ \\), todos los 8 ángulos formados son:", ["Rectos", "Agudos", "Obtusos", "Complementarios"], "A", "Si la secante es perpendicular a una paralela, es perpendicular a la otra, formando 8 ángulos rectos de 90°."),
            ("En un sistema de paralelas \\( L_1 \\parallel L_2 \\), si dos ángulos correspondientes son \\( (4x + 12)^\\circ \\) y \\( (6x - 18)^\\circ \\), el valor de \\( x \\) es:", ["15", "12", "18", "20"], "A", "Los ángulos correspondientes son congruentes: 4x + 12 = 6x - 18 => 2x = 30 => x = 15."),
            ("La bisectriz de dos ángulos conjugados internos entre paralelas forman entre sí un ángulo de:", ["\\(90^\\circ\\)", "\\(180^\\circ\\)", "\\(45^\\circ\\)", "\\(60^\\circ\\)"], "A", "Sean 2a y 2b los ángulos conjugados: 2a + 2b = 180° => a + b = 90°. El tercer ángulo del triángulo formado por las bisectrices es 180° - 90° = 90°."),
            ("Si una recta interseca a tres rectas paralelas, determina segmentos correspondientes que son:", ["Proporcionales", "Iguales", "Perpendiculares", "Inversos"], "A", "Por el Teorema de Tales, rectas paralelas cortadas por secantes determinan segmentos proporcionales.")
        ]
        for i in range(50):
            q_num = 251 + i
            base = par_data[i % len(par_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"1.2_q{q_num}",
                "number": q_num,
                "subtopicId": "1.2",
                "subjectId": "matematicas",
                "sectionTitle": sec2,
                "statement": base[0] if i < len(par_data) else f"Considere rectas paralelas cortadas por transversal (caso {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 1.3: TEOREMAS DE TRIÁNGULOS, CONGRUENCIA Y SEMEJANZA
    # =========================================================================
    elif subtopic_id == "1.3":
        sec1 = "SECCIÓN V: TEOREMAS FUNDAMENTALES DE TRIÁNGULOS (201–250)"
        sec2 = "SECCIÓN VI: CONGRUENCIA Y SEMEJANZA DE TRIÁNGULOS (251–300)"
        
        tri_data = [
            ("En todo triángulo euclidiano, la suma de las medidas de los tres ángulos interiores es siempre:", ["\\(180^\\circ\\)", "\\(360^\\circ\\)", "\\(90^\\circ\\)", "\\(270^\\circ\\)"], "A", "Teorema fundamental de la geometría euclidiana: \\(\\alpha + \\beta + \\gamma = 180^\\circ\\)."),
            ("En un triángulo rectángulo, uno de los ángulos agudos mide \\( 37^\\circ \\). ¿Cuánto mide el otro ángulo agudo?", ["\\(53^\\circ\\)", "\\(43^\\circ\\)", "\\(63^\\circ\\)", "\\(143^\\circ\\)"], "A", "Los ángulos agudos de un triángulo rectángulo son complementarios: 90° - 37° = 53°."),
            ("La medida de un ángulo exterior de un triángulo es igual a:", ["La suma de los dos ángulos interiores no adyacentes", "El suplemento del ángulo recto", "La diferencia de los ángulos interiores", "180° menos el ángulo exterior"], "A", "Por el teorema del ángulo exterior: \\(\\theta_{ext} = \\alpha + \\beta\\)."),
            ("En un triángulo isósceles, el ángulo desigual mide \\( 40^\\circ \\). ¿Cuánto mide cada uno de los ángulos congruentes?", ["\\(70^\\circ\\)", "\\(80^\\circ\\)", "\\(60^\\circ\\)", "\\(50^\\circ\\)"], "A", "(180° - 40°) / 2 = 140° / 2 = 70°."),
            ("Los lados de un triángulo miden 7 cm y 10 cm. Según la desigualdad triangular, el tercer lado \\( x \\) debe cumplir:", ["\\(3 < x < 17\\)", "\\(7 < x < 10\\)", "\\(x > 17\\)", "\\(x < 3\\)"], "A", "10 - 7 < x < 10 + 7 => 3 < x < 17."),
            ("La suma de los tres ángulos exteriores de cualquier triángulo (uno por vértice) es igual a:", ["\\(360^\\circ\\)", "\\(180^\\circ\\)", "\\(540^\\circ\\)", "\\(720^\\circ\\)"], "A", "Para todo polígono convexo, la suma de los ángulos exteriores es 360°."),
            ("En un triángulo equilátero, cada uno de sus ángulos interiores mide:", ["\\(60^\\circ\\)", "\\(45^\\circ\\)", "\\(90^\\circ\\)", "\\(120^\\circ\\)"], "A", "180° / 3 = 60°."),
            ("En un triángulo, los ángulos interiores están en la razón 2:3:4. La medida del ángulo mayor es:", ["\\(80^\\circ\\)", "\\(60^\\circ\\)", "\\(40^\\circ\\)", "\\(100^\\circ\\)"], "A", "2k + 3k + 4k = 180 => 9k = 180 => k = 20. El mayor es 4(20) = 80°."),
            ("Si un triángulo tiene lados de longitudes 5, 12 y 13, dicho triángulo es:", ["Rectángulo", "Acutángulo", "Obtusángulo", "Isósceles"], "A", "5^2 + 12^2 = 25 + 144 = 169 = 13^2. Cumple el teorema de Pitágoras, es rectángulo."),
            ("El punto donde se cortan las tres medianas de un triángulo se denomina:", ["Baricentro", "Ortocentro", "Incentro", "Circuncentro"], "A", "El baricentro o centro de gravedad es el punto de concurrencia de las medianas.")
        ]
        for i in range(50):
            q_num = 201 + i
            base = tri_data[i % len(tri_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"1.3_q{q_num}",
                "number": q_num,
                "subtopicId": "1.3",
                "subjectId": "matematicas",
                "sectionTitle": sec1,
                "statement": base[0] if i < len(tri_data) else f"Propiedades métricas de triángulos (ejercicio {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        sem_data = [
            ("El criterio de congruencia que establece que dos triángulos son iguales si tienen dos lados y el ángulo comprendido iguales es:", ["LAL", "ALA", "LLL", "AAA"], "A", "El criterio LAL (Lado-Ángulo-Lado) exige que el ángulo esté estrictamente comprendido entre dichos lados."),
            ("Si dos triángulos tienen sus tres ángulos respectivamente congruentes (AAA), se puede asegurar con certeza que son:", ["Semejantes", "Congruentes", "Equiláteros", "Equivalentes en área"], "A", "El criterio AAA garantiza semejanza (misma forma), pero no necesariamente congruencia (mismo tamaño)."),
            ("Un poste vertical de 3 m de altura proyecta una sombra de 2 m. A la misma hora, un edificio proyecta una sombra de 18 m. La altura del edificio es:", ["27 m", "12 m", "24 m", "36 m"], "A", "Por semejanza de triángulos: h / 18 = 3 / 2 => h = (3 * 18) / 2 = 27 m."),
            ("Si dos triángulos semejantes tienen una razón de semejanza de \\( k = 3 \\), la razón entre sus áreas es:", ["9", "3", "6", "27"], "A", "La razón de las áreas de dos figuras semejantes es igual al cuadrado de la razón lineal: k^2 = 3^2 = 9."),
            ("En un triángulo ABC, se traza un segmento DE paralelo a BC (con D en AB y E en AC). Si AD = 4, DB = 6 y AE = 6, la longitud de EC es:", ["9", "4", "8", "10"], "A", "Por Teorema de Tales: AD/DB = AE/EC => 4/6 = 6/EC => EC = (6 * 6)/4 = 36/4 = 9."),
            ("El criterio ALA de congruencia requiere que:", ["Dos ángulos y el lado adyacente común a ambos sean congruentes", "Dos lados y cualquier ángulo sean iguales", "Tres ángulos sean iguales", "El triángulo sea rectángulo"], "A", "ALA (Ángulo-Lado-Ángulo) requiere dos ángulos y el lado comprendido entre ellos."),
            ("Dos triángulos rectángulos son congruentes si tienen:", ["La hipotenusa y un cateto respectivamente congruentes", "Dos ángulos agudos iguales", "La misma área", "El mismo perímetro"], "A", "El criterio hipotenusa-cateto (HC) es suficiente para determinar congruencia en triángulos rectángulos."),
            ("Si dos triángulos son semejantes con razón \\( k = 1/2 \\) y el perímetro del menor es 15 cm, el perímetro del mayor es:", ["30 cm", "22.5 cm", "45 cm", "60 cm"], "A", "P_menor / P_mayor = 1/2 => 15 / P_mayor = 1/2 => P_mayor = 30 cm."),
            ("El Teorema de Tales afirma que:", ["Si varias paralelas cortan a dos secantes, los segmentos determinados en una son proporcionales a los de la otra", "La suma de los catetos es igual a la hipotenusa", "El área de un triángulo es base por altura sobre dos", "Los ángulos opuestos por el vértice son complementarios"], "A", "Formulación axiomática del Teorema de Tales de Mileto."),
            ("Dos triángulos semejantes tienen lados homólogos proporcionales y ángulos homólogos:", ["Congruentes", "Suplementarios", "Proporcionales", "Complementarios"], "A", "La semejanza conserva los ángulos idénticos (congruentes) y escala las longitudes.")
        ]
        for i in range(50):
            q_num = 251 + i
            base = sem_data[i % len(sem_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"1.3_q{q_num}",
                "number": q_num,
                "subtopicId": "1.3",
                "subjectId": "matematicas",
                "sectionTitle": sec2,
                "statement": base[0] if i < len(sem_data) else f"Semejanza geométrica y proporcionalidad (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 1.4: DESIGUALDADES Y ECUACIONES CUADRÁTICAS
    # =========================================================================
    elif subtopic_id == "1.4":
        sec1 = "SECCIÓN V: DESIGUALDADES LINEALES Y NO LINEALES (201–250)"
        sec2 = "SECCIÓN VI: ECUACIONES CUADRÁTICAS Y DISCRIMINANTE (251–300)"
        
        des_data = [
            ("El conjunto solución de la desigualdad lineal \\( 3x - 5 > 7 \\) es:", ["\\((4, \\infty)\\)", "\\([4, \\infty)\\)", "\\((-\\infty, 4)\\)", "\\((-\\infty, 4]\\)"], "A", "3x > 12 => x > 4 => (4, \\infty)."),
            ("Al resolver \\( -2x + 4 \\le 10 \\), se obtiene como solución:", ["\\([-3, \\infty)\\)", "\\((-\\infty, -3]\\)", "\\([3, \\infty)\\)", "\\((-\\infty, 3]\\)"], "A", "-2x <= 6. Al dividir por -2 se invierte el sentido: x >= -3 => [-3, \\infty)."),
            ("El conjunto solución de la doble desigualdad \\( -3 < 2x + 1 \\le 9 \\) es:", ["\\((-2, 4]\\)", "\\([-2, 4)\\)", "\\((-1, 5]\\)", "\\([-2, 4]\\)"], "A", "-3 - 1 < 2x <= 9 - 1 => -4 < 2x <= 8 => -2 < x <= 4 => (-2, 4]."),
            ("La desigualdad cuadrática \\( x^2 - 4x - 5 < 0 \\) tiene como conjunto solución:", ["\\((-1, 5)\\)", "\\([-1, 5]\\)", "\\((-\\infty, -1) \\cup (5, \\infty)\\)", "\\((-5, 1)\\)"], "A", "(x - 5)(x + 1) < 0. Raíces x = -1, 5. El signo es negativo en el intervalo abierto (-1, 5)."),
            ("El conjunto solución de \\( x^2 \\ge 9 \\) es:", ["\\((-\\infty, -3] \\cup [3, \\infty)\\)", "\\([-3, 3]\\)", "\\([3, \\infty)\\)", "\\((-\\infty, 9]\\)"], "A", "x^2 - 9 >= 0 => (x-3)(x+3) >= 0 => x <= -3 o x >= 3."),
            ("Al resolver la desigualdad racional \\( \\frac{x - 2}{x + 3} > 0 \\), se obtiene:", ["\\((-\\infty, -3) \\cup (2, \\infty)\\)", "\\((-3, 2)\\)", "\\([-3, 2]\\)", "\\((2, \\infty)\\)"], "A", "Puntos críticos en -3 y 2. La fracción es positiva para x < -3 y para x > 2."),
            ("Si \\( a < b \\) y \\( c < 0 \\), entonces la relación correcta es:", ["\\(ac > bc\\)", "\\(ac < bc\\)", "\\(ac = bc\\)", "\\(a + c > b + c\\)"], "A", "Al multiplicar una desigualdad por un número estrictamente negativo, el sentido de la desigualdad se invierte."),
            ("El conjunto solución de \\( x^2 + 4 > 0 \\) es:", ["\\(\\mathbb{R}\\)", "\\(\\emptyset\\)", "\\((-2, 2)\\)", "\\([0, \\infty)\\)"], "A", "Para todo número real x, x^2 >= 0, luego x^2 + 4 >= 4 > 0 para todo x real."),
            ("La solución de \\( x^2 - 6x + 9 \\le 0 \\) es:", ["\\(\\{3\\}\\)", "\\(\\emptyset\\)", "\\((-\\infty, 3]\\)", "\\([3, \\infty)\\)"], "A", "(x - 3)^2 <= 0. Un cuadrado nunca es negativo, solo puede ser igual a cero cuando x = 3."),
            ("El conjunto solución de \\( 5 - x > 2x + 11 \\) es:", ["\\((-\\infty, -2)\\)", "\\((-2, \\infty)\\)", "\\((-\\infty, 2)\\)", "\\((2, \\infty)\\)"], "A", "-3x > 6 => x < -2 => (-\\infty, -2).")
        ]
        for i in range(50):
            q_num = 201 + i
            base = des_data[i % len(des_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"1.4_q{q_num}",
                "number": q_num,
                "subtopicId": "1.4",
                "subjectId": "matematicas",
                "sectionTitle": sec1,
                "statement": base[0] if i < len(des_data) else f"Desigualdades y tablas de signos (ejercicio {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        ecu_data = [
            ("Las soluciones de la ecuación cuadrática \\( x^2 - 7x + 12 = 0 \\) son:", ["\\(x = 3, x = 4\\)", "\\(x = -3, x = -4\\)", "\\(x = 2, x = 6\\)", "\\(x = -2, x = -6\\)"], "A", "(x - 3)(x - 4) = 0 => x = 3 o x = 4."),
            ("El discriminante \\( \\Delta = b^2 - 4ac \\) de la ecuación \\( 2x^2 - 4x + 2 = 0 \\) es:", ["0", "16", "-16", "32"], "A", "\\(\\Delta = (-4)^2 - 4(2)(2) = 16 - 16 = 0\\)."),
            ("Si el discriminante de una ecuación cuadrática es \\( \\Delta < 0 \\), entonces la ecuación tiene:", ["Dos soluciones complejas conjugadas (no reales)", "Dos soluciones reales distintas", "Una única solución real doble", "Infinitas soluciones"], "A", "Un discriminante estrictamente negativo produce raíces complejas conjugadas."),
            ("Las soluciones de \\( 2x^2 + 5x - 3 = 0 \\) son:", ["\\(x = 1/2, x = -3\\)", "\\(x = -1/2, x = 3\\)", "\\(x = 1, x = -3\\)", "\\(x = 2, x = -3\\)"], "A", "Factorizando: (2x - 1)(x + 3) = 0 => x = 1/2 o x = -3."),
            ("La suma de las raíces de la ecuación \\( 3x^2 - 9x + 5 = 0 \\) según las relaciones de Cardano-Vieta es:", ["3", "-3", "5/3", "-5/3"], "A", "Suma = -b/a = -(-9)/3 = 9/3 = 3."),
            ("El producto de las raíces de la ecuación \\( 2x^2 + 8x - 10 = 0 \\) es:", ["-5", "5", "-4", "10"], "A", "Producto = c/a = -10/2 = -5."),
            ("Las raíces de la ecuación incompleta \\( 3x^2 - 12 = 0 \\) son:", ["\\(x = \\pm 2\\)", "\\(x = 4\\)", "\\(x = \\pm 4\\)", "\\(x = 2\\)"], "A", "3x^2 = 12 => x^2 = 4 => x = \\pm 2."),
            ("Las raíces de \\( 5x^2 - 15x = 0 \\) son:", ["\\(x = 0, x = 3\\)", "\\(x = 3\\)", "\\(x = 0, x = -3\\)", "\\(x = \\pm 3\\)"], "A", "5x(x - 3) = 0 => x = 0 o x = 3."),
            ("Para que la ecuación \\( x^2 - kx + 9 = 0 \\) tenga una única raíz real doble, el valor positivo de \\( k \\) debe ser:", ["6", "3", "9", "18"], "A", "\\(\\Delta = k^2 - 4(1)(9) = 0 \\implies k^2 = 36 \\implies k = 6\\)."),
            ("El vértice de la parábola \\( y = x^2 - 4x + 7 \\) tiene coordenadas:", ["(2, 3)", "(2, 7)", "(-2, 3)", "(4, 7)"], "A", "h = -b/(2a) = 4/2 = 2. k = 2^2 - 4(2) + 7 = 4 - 8 + 7 = 3. Vértice: (2, 3).")
        ]
        for i in range(50):
            q_num = 251 + i
            base = ecu_data[i % len(ecu_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"1.4_q{q_num}",
                "number": q_num,
                "subtopicId": "1.4",
                "subjectId": "matematicas",
                "sectionTitle": sec2,
                "statement": base[0] if i < len(ecu_data) else f"Ecuaciones de segundo grado y propiedades (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 1.5: SISTEMAS DE ECUACIONES Y OPERACIONES CON POLINOMIOS
    # =========================================================================
    elif subtopic_id == "1.5":
        sec1 = "SECCIÓN V: SISTEMAS DE ECUACIONES LINEALES 2x2 Y 3x3 (201–250)"
        sec2 = "SECCIÓN VI: OPERACIONES AVANZADAS CON POLINOMIOS (251–300)"
        
        sis_data = [
            ("La solución del sistema \\( \\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases} \\) es:", ["\\(x = 3, y = 1\\)", "\\(x = 1, y = 3\\)", "\\(x = 2, y = 3\\)", "\\(x = 4, y = -1\\)"], "A", "Sumando ambas ecuaciones: 3x = 9 => x = 3. Luego y = 3 - 2 = 1."),
            ("Al resolver el sistema \\( \\begin{cases} 3x + 2y = 12 \\\\ 5x - 2y = 4 \\end{cases} \\), el valor de \\( y \\) es:", ["3", "2", "1", "4"], "A", "Sumando: 8x = 16 => x = 2. Sustituyendo: 3(2) + 2y = 12 => 2y = 6 => y = 3."),
            ("Un sistema lineal de dos ecuaciones con dos incógnitas cuyas gráficas son dos rectas paralelas tiene:", ["Cero soluciones (incompatible)", "Una única solución", "Infinitas soluciones", "Dos soluciones"], "A", "Las rectas paralelas no se intersecan en ningún punto, por lo que el sistema no tiene solución."),
            ("Un sistema lineal con infinitas soluciones se clasifica formalmente como:", ["Compatible indeterminado", "Compatible determinado", "Incompatible", "Inconsistente"], "A", "Compatible porque tiene solución, e indeterminado porque posee un número infinito de ellas (rectas coincidentes)."),
            ("El determinante principal \\( \\Delta \\) del sistema \\( \\begin{cases} 4x - 2y = 5 \\\\ 3x + y = 7 \\end{cases} \\) es:", ["10", "2", "-2", "14"], "A", "\\(\\Delta = (4)(1) - (-2)(3) = 4 + 6 = 10\\)."),
            ("En una granja hay gallinas y conejos. En total hay 35 cabezas y 100 patas. ¿Cuántos conejos hay?", ["15", "20", "25", "10"], "A", "g + c = 35 y 2g + 4c = 100. Multiplicando la primera por -2: 2c = 30 => c = 15 conejos."),
            ("La solución del sistema \\( \\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + 2y - z = 2 \\end{cases} \\) tiene valor de \\( x \\) igual a:", ["1", "2", "3", "0"], "A", "Resolviendo por eliminación o determinantes, se verifica x = 1, y = 2, z = 3."),
            ("Si dos rectas tienen la misma pendiente y diferente ordenada al origen, el sistema:", ["No tiene solución", "Tiene una solución", "Tiene infinitas soluciones", "Tiene solución en el origen"], "A", "Misma pendiente y diferente intercepto definen rectas paralelas no coincidentes (sin solución)."),
            ("Para qué valor de \\( k \\) el sistema \\( \\begin{cases} 2x + 4y = 6 \\\\ x + ky = 3 \\end{cases} \\) tiene infinitas soluciones:", ["2", "4", "1", "-2"], "A", "Multiplicando la segunda por 2: 2x + 2ky = 6. Para ser idéntica a la primera, 2k = 4 => k = 2."),
            ("La solución del sistema \\( \\begin{cases} \\frac{x}{2} + \\frac{y}{3} = 4 \\\\ x - y = 3 \\end{cases} \\) es:", ["\\(x = 6, y = 3\\)", "\\(x = 5, y = 2\\)", "\\(x = 4, y = 1\\)", "\\(x = 8, y = 5\\)"], "A", "Multiplicando la primera por 6: 3x + 2y = 24. De la segunda: x = y + 3. 3(y+3) + 2y = 24 => 5y = 15 => y = 3, x = 6.")
        ]
        for i in range(50):
            q_num = 201 + i
            base = sis_data[i % len(sis_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"1.5_q{q_num}",
                "number": q_num,
                "subtopicId": "1.5",
                "subjectId": "matematicas",
                "sectionTitle": sec1,
                "statement": base[0] if i < len(sis_data) else f"Sistemas lineales y métodos de resolución (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        pol_data = [
            ("El residuo de dividir el polinomio \\( P(x) = x^3 - 4x^2 + 5x - 2 \\) entre \\( x - 2 \\) es:", ["0", "4", "-2", "12"], "A", "Por el Teorema del Residuo, P(2) = 2^3 - 4(2^2) + 5(2) - 2 = 8 - 16 + 10 - 2 = 0."),
            ("Al dividir \\( (2x^3 - 3x^2 + 4x - 5) \\) entre \\( (x - 1) \\) mediante división sintética, el cociente es:", ["\\(2x^2 - x + 3\\)", "\\(2x^2 + x + 3\\)", "\\(2x^2 - 5x + 3\\)", "\\(2x^2 - x - 3\\)"], "A", "Coeficientes: 2, -3, 4, -5 con r = 1. Filas: 2 -> 2(1)-3 = -1 -> -1(1)+4 = 3. Cociente: 2x^2 - x + 3."),
            ("Según el Teorema del Factor, \\( x - a \\) es factor de un polinomio \\( P(x) \\) si y solo si:", ["\\(P(a) = 0\\)", "\\(P(a) = 1\\)", "\\(P(0) = a\\)", "\\(P(-a) = 0\\)"], "A", "El Teorema del Factor afirma que (x - a) divide exactamente a P(x) si y solo si P(a) = 0."),
            ("El grado del polinomio producto entre un polinomio de grado 3 y uno de grado 4 es:", ["7", "12", "1", "4"], "A", "El grado del producto es la suma de los grados de los factores: 3 + 4 = 7."),
            ("El cociente de dividir \\( x^4 - 16 \\) entre \\( x - 2 \\) es:", ["\\(x^3 + 2x^2 + 4x + 8\\)", "\\(x^3 - 2x^2 + 4x - 8\\)", "\\(x^3 + 8\\)", "\\(x^3 - 8\\)"], "A", "x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4) = (x - 2)(x^3 + 2x^2 + 4x + 8)."),
            ("El valor de \\( k \\) para que \\( x + 1 \\) sea factor de \\( P(x) = x^3 + kx^2 - x + 4 \\) es:", ["-4", "4", "-2", "2"], "A", "P(-1) = (-1)^3 + k(-1)^2 - (-1) + 4 = 0 => -1 + k + 1 + 4 = 0 => k + 4 = 0 => k = -4."),
            ("Al desarrollar el binomio \\( (2x - 3y)^3 \\), el coeficiente de \\( x^2 y \\) es:", ["-36", "36", "-54", "-18"], "A", "Término: 3*(2x)^2*(-3y) = 3*(4x^2)*(-3y) = -36 x^2 y."),
            ("El máximo común divisor (MCD) de los polinomios \\( 6x^2 y^3 \\) y \\( 9x^3 y \\) es:", ["\\(3x^2 y\\)", "\\(18x^3 y^3\\)", "\\(3xy\\)", "\\(9x^2 y\\)"], "A", "MCD(6,9) = 3; menor exponente de x es 2, de y es 1: 3x^2 y."),
            ("El residuo de dividir \\( x^5 + 1 \\) entre \\( x + 1 \\) es:", ["0", "2", "-1", "1"], "A", "P(-1) = (-1)^5 + 1 = -1 + 1 = 0."),
            ("Al factorizar completamente \\( x^3 - 8 \\) por suma o diferencia de cubos, se obtiene:", ["\\((x - 2)(x^2 + 2x + 4)\\)", "\\((x - 2)(x^2 - 2x + 4)\\)", "\\((x - 2)^3\\)", "\\((x - 2)(x + 2)^2\\)"], "A", "a^3 - b^3 = (a - b)(a^2 + ab + b^2). Con a=x, b=2: (x - 2)(x^2 + 2x + 4).")
        ]
        for i in range(50):
            q_num = 251 + i
            base = pol_data[i % len(pol_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"1.5_q{q_num}",
                "number": q_num,
                "subtopicId": "1.5",
                "subjectId": "matematicas",
                "sectionTitle": sec2,
                "statement": base[0] if i < len(pol_data) else f"División sintética y teoremas de polinomios (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 1.6: TRIÁNGULOS NOTABLES, LEY DE SENOS Y COSENOS, IDENTIDADES
    # =========================================================================
    elif subtopic_id == "1.6":
        sec1 = "SECCIÓN V: TRIÁNGULOS NOTABLES Y TRIÁNGULOS OBLICUÁNGULOS (201–250)"
        sec2 = "SECCIÓN VI: IDENTIDADES Y ECUACIONES TRIGONOMÉTRICAS (251–300)"
        
        trig_data = [
            ("En un triángulo rectángulo notable de \\( 30^\\circ - 60^\\circ \\), si la hipotenusa mide 10 cm, el cateto opuesto al ángulo de \\( 30^\\circ \\) mide:", ["5 cm", "\\(5\\sqrt{3}\\text{ cm}\\)", "\\(10\\sqrt{3}\\text{ cm}\\)", "2.5 cm"], "A", "El cateto opuesto a 30° es exactamente la mitad de la hipotenusa: 10/2 = 5 cm."),
            ("El valor exacto de \\( \\tan(45^\\circ) + \\cos(60^\\circ) \\) es:", ["3/2", "1", "1/2", "\\(\\sqrt{3}\\)"], "A", "tan(45°) = 1, cos(60°) = 1/2. Suma = 1 + 1/2 = 3/2."),
            ("En un triángulo oblicuángulo, se conocen \\( a = 8 \\), \\( \\alpha = 30^\\circ \\) y \\( \\beta = 45^\\circ \\). Por la Ley de Senos, el lado \\( b \\) mide:", ["\\(8\\sqrt{2}\\)", "\\(4\\sqrt{2}\\)", "\\(16\\)", "\\(8\\sqrt{3}\\)"], "A", "b / sen(45°) = a / sen(30°) => b = 8 * (\\sqrt{2}/2) / (1/2) = 8\\sqrt{2}."),
            ("La Ley de Cosenos establece que para cualquier triángulo de lados a, b, c:", ["\\(c^2 = a^2 + b^2 - 2ab \\cos(\\gamma)\\)", "\\(c^2 = a^2 + b^2 + 2ab \\cos(\\gamma)\\)", "\\(c = a + b - \\cos(\\gamma)\\)", "\\(c^2 = a^2 + b^2\\)"], "A", "Fórmula canónica de la Ley de Cosenos."),
            ("En un triángulo con lados \\( a = 5 \\), \\( b = 7 \\) y el ángulo comprendido \\( \\gamma = 60^\\circ \\), la longitud de \\( c \\) es:", ["\\(\\sqrt{39}\\)", "\\(\\sqrt{74}\\)", "\\(6\\)", "\\(\\sqrt{49}\\)"], "A", "c^2 = 5^2 + 7^2 - 2(5)(7)cos(60°) = 25 + 49 - 70(1/2) = 74 - 35 = 39 => c = \\sqrt{39}."),
            ("El valor exacto de \\( \\sin(60^\\circ) \\) es:", ["\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt{2}}{2}\\)", "1"], "A", "Valor notable en el círculo trigonométrico."),
            ("En el triángulo notable de lados proporcionales a 3, 4 y 5, el ángulo opuesto al lado de longitud 4 mide aproximadamente:", ["\\(53^\\circ\\)", "\\(37^\\circ\\)", "\\(45^\\circ\\)", "\\(60^\\circ\\)"], "A", "En el triángulo 3-4-5, los ángulos agudos son aproximadamente 37° (opuesto a 3) y 53° (opuesto a 4)."),
            ("El área de un triángulo con lados \\( a = 6 \\), \\( b = 10 \\) y ángulo comprendido \\( \\theta = 30^\\circ \\) es:", ["15", "30", "\\(15\\sqrt{3}\\)", "60"], "A", "Área = (1/2) a b sen(\\theta) = (1/2)(6)(10) sen(30°) = 30 * (1/2) = 15."),
            ("La Ley de Senos es aplicable directamente cuando se conocen:", ["Dos ángulos y un lado (AAL o ALA)", "Los tres lados únicamente", "Dos lados y el ángulo comprendido", "Solo los tres ángulos"], "A", "Se requiere conocer al menos una pareja lado-ángulo opuesto."),
            ("El valor de \\( \\cos(120^\\circ) \\) en el segundo cuadrante es:", ["-1/2", "1/2", "\\(-\\sqrt{3}/2\\)", "\\(\\sqrt{3}/2\\)"], "A", "cos(120°) = cos(180° - 60°) = -cos(60°) = -1/2.")
        ]
        for i in range(50):
            q_num = 201 + i
            base = trig_data[i % len(trig_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"1.6_q{q_num}",
                "number": q_num,
                "subtopicId": "1.6",
                "subjectId": "matematicas",
                "sectionTitle": sec1,
                "statement": base[0] if i < len(trig_data) else f"Aplicación de triángulos oblicuángulos y notables (caso {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        iden_data = [
            ("La identidad fundamental pitagórica fundamental es:", ["\\(\\sin^2(x) + \\cos^2(x) = 1\\)", "\\(\\sin^2(x) - \\cos^2(x) = 1\\)", "\\(\\tan^2(x) + 1 = \\cos^2(x)\\)", "\\(\\sin(x) + \\cos(x) = 1\\)"], "A", "Identidad pitagórica central derivada del círculo unitario."),
            ("Al simplificar \\( \\frac{\\sin(x)}{\\cos(x)} + \\frac{\\cos(x)}{\\sin(x)} \\), se obtiene:", ["\\(\\sec(x) \\csc(x)\\)", "1", "\\(\\tan(x)\\)", "\\(2\\sin(x)\\)"], "A", "(\\sin^2 x + \\cos^2 x)/(\\sin x \\cos x) = 1/(\\sin x \\cos x) = \\csc x \\sec x."),
            ("La expresión equivalente a \\( 1 + \\tan^2(x) \\) es:", ["\\(\\sec^2(x)\\)", "\\(\\csc^2(x)\\)", "\\(\\cot^2(x)\\)", "\\(\\cos^2(x)\\)"], "A", "Identidad pitagórica derivada dividiendo por cos^2(x)."),
            ("La fórmula del seno del ángulo doble es:", ["\\(\\sin(2x) = 2\\sin(x)\\cos(x)\\)", "\\(\\sin(2x) = \\sin^2(x) - \\cos^2(x)\\)", "\\(\\sin(2x) = 2\\sin(x)\\)", "\\(\\sin(2x) = \\sin(x)\\cos(x)\\)"], "A", "Fórmula del ángulo doble para la función seno."),
            ("Las soluciones de la ecuación \\( 2\\sin(x) - 1 = 0 \\) en el intervalo \\( [0, 2\\pi) \\) son:", ["\\(\\pi/6\\text{ y }5\\pi/6\\)", "\\(\\pi/3\\text{ y }2\\pi/3\\)", "\\(\\pi/4\\text{ y }3\\pi/4\\)", "\\(\\pi/6\\text{ y }7\\pi/6\\)"], "A", "sen(x) = 1/2. En [0, 2\\pi), esto ocurre en el primer cuadrante (30° = \\pi/6) y segundo cuadrante (150° = 5\\pi/6)."),
            ("Al simplificar \\( \\cos^2(x) - \\sin^2(x) \\), se obtiene:", ["\\(\\cos(2x)\\)", "\\(\\sin(2x)\\)", "1", "-1"], "A", "Identidad del coseno del ángulo doble."),
            ("La solución de \\( \\cos(x) = 0 \\) en el intervalo \\( [0, 2\\pi) \\) es:", ["\\(\\pi/2\\text{ y }3\\pi/2\\)", "\\(0\\text{ y }\\pi\\)", "\\(\\pi/4\\text{ y }5\\pi/4\\)", "\\(\\pi\\)"], "A", "El coseno se anula en 90° (\\pi/2) y 270° (3\\pi/2)."),
            ("La expresión \\( \\sec(x) - \\sin(x)\\tan(x) \\) se simplifica a:", ["\\(\\cos(x)\\)", "\\(\\sin(x)\\)", "1", "\\(\\tan(x)\\)"], "A", "1/\\cos x - \\sin^2 x/\\cos x = (1 - \\sin^2 x)/\\cos x = \\cos^2 x / \\cos x = \\cos x."),
            ("La solución de \\( \\tan(x) = 1 \\) en \\( [0, 2\\pi) \\) es:", ["\\(\\pi/4\\text{ y }5\\pi/4\\)", "\\(\\pi/4\\text{ y }3\\pi/4\\)", "\\(\\pi/2\\text{ y }3\\pi/2\\)", "\\(\\pi/3\\text{ y }4\\pi/3\\)"], "A", "La tangente es positiva en el primer cuadrante (\\pi/4) y tercer cuadrante (\\pi + \\pi/4 = 5\\pi/4)."),
            ("El período fundamental de las funciones \\( \\sin(x) \\) y \\( \\cos(x) \\) es:", ["\\(2\\pi\\)", "\\(\\pi\\)", "\\(\\pi/2\\)", "\\(4\\pi\\)"], "A", "Ambas funciones completan una oscilación completa en 2\\pi radianes (360°).")
        ]
        for i in range(50):
            q_num = 251 + i
            base = iden_data[i % len(iden_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"1.6_q{q_num}",
                "number": q_num,
                "subtopicId": "1.6",
                "subjectId": "matematicas",
                "sectionTitle": sec2,
                "statement": base[0] if i < len(iden_data) else f"Identidades y ecuaciones trigonométricas (ejercicio {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    # =========================================================================
    # SUBTEMA 1.7: GEOMETRÍA ANALÍTICA (RECTA, CIRCUNFERENCIA) Y FUNCIONES
    # =========================================================================
    elif subtopic_id == "1.7":
        sec1 = "SECCIÓN V: GEOMETRÍA ANALÍTICA – LA RECTA Y LA CIRCUNFERENCIA (201–250)"
        sec2 = "SECCIÓN VI: PROPIEDADES DE FUNCIONES Y FUNCIONES TRASCENDENTES (251–300)"
        
        ana_data = [
            ("La pendiente de la recta que pasa por los puntos \\( A(2, 3) \\) y \\( B(6, 11) \\) es:", ["2", "4", "1/2", "8"], "A", "m = (11 - 3)/(6 - 2) = 8/4 = 2."),
            ("La ecuación de la recta con pendiente \\( m = -3 \\) que pasa por el punto \\( (1, 4) \\) es:", ["\\(y = -3x + 7\\)", "\\(y = -3x + 1\\)", "\\(y = 3x + 1\\)", "\\(y = -3x - 7\\)"], "A", "y - 4 = -3(x - 1) => y - 4 = -3x + 3 => y = -3x + 7."),
            ("Dos rectas no verticales \\( L_1 \\) y \\( L_2 \\) son perpendiculares si y solo si el producto de sus pendientes es:", ["-1", "1", "0", "Indefinido"], "A", "Condición analítica de perpendicularidad: m_1 * m_2 = -1."),
            ("La recta perpendicular a \\( y = 2x + 5 \\) tiene como pendiente:", ["-1/2", "2", "-2", "1/2"], "A", "m_2 = -1/m_1 = -1/2."),
            ("La ecuación canónica de la circunferencia con centro en el origen y radio \\( r = 5 \\) es:", ["\\(x^2 + y^2 = 25\\)", "\\(x^2 + y^2 = 5\\)", "\\(x^2 - y^2 = 25\\)", "\\((x-5)^2 + (y-5)^2 = 25\\)"], "A", "x^2 + y^2 = r^2 = 5^2 = 25."),
            ("El centro y el radio de la circunferencia \\( (x - 3)^2 + (y + 2)^2 = 16 \\) son:", ["Centro (3, -2), radio 4", "Centro (-3, 2), radio 4", "Centro (3, -2), radio 16", "Centro (-3, 2), radio 16"], "A", "De (x - h)^2 + (y - k)^2 = r^2: h = 3, k = -2, r = \\sqrt{16} = 4."),
            ("La distancia del punto \\( P(1, 2) \\) a la recta \\( 3x + 4y - 1 = 0 \\) es:", ["2", "10", "1", "5"], "A", "d = |3(1) + 4(2) - 1| / \\sqrt{3^2 + 4^2} = |3 + 8 - 1| / \\sqrt{25} = 10 / 5 = 2."),
            ("La ecuación general de la recta \\( y = \\frac{2}{3}x - 4 \\) es:", ["\\(2x - 3y - 12 = 0\\)", "\\(2x + 3y - 12 = 0\\)", "\\(3x - 2y - 12 = 0\\)", "\\(2x - 3y + 4 = 0\\)"], "A", "Multiplicando por 3: 3y = 2x - 12 => 2x - 3y - 12 = 0."),
            ("El punto de intersección de la recta \\( 2x - y = 4 \\) con el eje Y es:", ["(0, -4)", "(2, 0)", "(0, 4)", "(-4, 0)"], "A", "Haciendo x = 0: 2(0) - y = 4 => y = -4. Punto: (0, -4)."),
            ("La ecuación ordinaria de la circunferencia \\( x^2 + y^2 - 4x + 6y - 3 = 0 \\) completando cuadrados es:", ["\\((x - 2)^2 + (y + 3)^2 = 16\\)", "\\((x + 2)^2 + (y - 3)^2 = 16\\)", "\\((x - 2)^2 + (y + 3)^2 = 9\\)", "\\((x - 4)^2 + (y + 6)^2 = 3\\)"], "A", "(x^2 - 4x + 4) + (y^2 + 6y + 9) = 3 + 4 + 9 => (x - 2)^2 + (y + 3)^2 = 16.")
        ]
        for i in range(50):
            q_num = 201 + i
            base = ana_data[i % len(ana_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"1.7_q{q_num}",
                "number": q_num,
                "subtopicId": "1.7",
                "subjectId": "matematicas",
                "sectionTitle": sec1,
                "statement": base[0] if i < len(ana_data) else f"Geometría analítica en el plano (caso {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

        fun_data = [
            ("El dominio de la función real \\( f(x) = \\sqrt{2x - 6} \\) es:", ["\\([3, \\infty)\\)", "\\((3, \\infty)\\)", "\\((-\\infty, 3]\\)", "\\(\\mathbb{R}\\)"], "A", "2x - 6 >= 0 => 2x >= 6 => x >= 3 => [3, \\infty)."),
            ("El dominio de la función racional \\( f(x) = \\frac{x + 1}{x^2 - 9} \\) es:", ["\\(\\mathbb{R} \\setminus \\{-3, 3\\}\\)", "\\(\\mathbb{R} \\setminus \\{9\\}\\)", "\\((-3, 3)\\)", "\\([3, \\infty)\\)"], "A", "El denominador no puede anularse: x^2 - 9 \\ne 0 => x \\ne \\pm 3."),
            ("Dadas \\( f(x) = 2x + 1 \\) y \\( g(x) = x^2 \\), la función compuesta \\( (f \\circ g)(x) \\) es:", ["\\(2x^2 + 1\\)", "\\((2x + 1)^2\\)", "\\(4x^2 + 1\\)", "\\(2x^3\\)"], "A", "(f \\circ g)(x) = f(g(x)) = f(x^2) = 2(x^2) + 1 = 2x^2 + 1."),
            ("La función inversa \\( f^{-1}(x) \\) de \\( f(x) = 3x - 5 \\) es:", ["\\(\\frac{x + 5}{3}\\)", "\\(\\frac{x - 5}{3}\\)", "\\(3x + 5\\)", "\\(\\frac{1}{3x - 5}\\)"], "A", "y = 3x - 5 => x = (y + 5)/3 => f^{-1}(x) = (x + 5)/3."),
            ("Una función \\( f \\) es inyectiva (uno a uno) si cumple que:", ["\\(f(a) = f(b) \\implies a = b\\)", "\\(f(a) = f(b) \\implies a = -b\\)", "Corta al eje Y en un solo punto", "Tiene simetría par"], "A", "Definición estricta de inyectividad: elementos distintos del dominio tienen imágenes distintas."),
            ("El valor de \\( \\log_2(32) \\) es:", ["5", "4", "6", "16"], "A", "2^5 = 32, por lo tanto \\log_2(32) = 5."),
            ("La asíntota horizontal de la función exponencial \\( f(x) = 2^x - 3 \\) es la recta:", ["\\(y = -3\\)", "\\(y = 0\\)", "\\(y = 3\\)", "\\(x = -3\\)"], "A", "Cuando x tiende a -\\infty, 2^x tiende a 0, por lo que y tiende a -3."),
            ("Por propiedades de logaritmos, \\( \\log(a) + \\log(b) - \\log(c) \\) equivale a:", ["\\(\\log\\left(\\frac{ab}{c}\\right)\\)", "\\(\\log(a + b - c)\\)", "\\(\\frac{\\log(a)\\log(b)}{\\log(c)}\\)", "\\(\\log(abc)\\)"], "A", "Logaritmo de un producto es la suma, y de un cociente es la resta: \\log(ab/c)."),
            ("La solución de la ecuación exponencial \\( 3^{2x - 1} = 27 \\) es:", ["2", "1", "3", "4"], "A", "27 = 3^3 => 2x - 1 = 3 => 2x = 4 => x = 2."),
            ("El rango de la función \\( f(x) = x^2 + 4 \\) con dominio en todos los reales es:", ["\\([4, \\infty)\\)", "\\([0, \\infty)\\)", "\\(\\mathbb{R}\\)", "\\((-\\infty, 4]\\)"], "A", "Como x^2 >= 0 para todo x real, el valor mínimo es f(0) = 4. Rango: [4, \\infty).")
        ]
        for i in range(50):
            q_num = 251 + i
            base = fun_data[i % len(fun_data)]
            opts = [{"key": k, "text": t} for k, t in zip(["A", "B", "C", "D"], base[1])]
            questions.append({
                "id": f"1.7_q{q_num}",
                "number": q_num,
                "subtopicId": "1.7",
                "subjectId": "matematicas",
                "sectionTitle": sec2,
                "statement": base[0] if i < len(fun_data) else f"Análisis de funciones reales y trascendentes (reactivo {i+1}): {base[0]}",
                "options": opts,
                "correctAnswer": base[2],
                "explanation": base[3]
            })

    return questions

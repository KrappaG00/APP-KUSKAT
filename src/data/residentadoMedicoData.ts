/**
 * BANCO DE PREGUNTAS Y CASOS CLÍNICOS PARA EL EXAMEN DE RESIDENTADO MÉDICO (ENAR)
 * EL SALVADOR — Consejo para la Enseñanza y Aprendizaje Académico de las Prácticas Clínicas
 * Especialidades Troncales: Medicina Interna, Cirugía General, Pediatría, Ginecología y Obstetricia, y Salud Pública
 * Conforme a Guías Clínicas Oficiales del Ministerio de Salud (MINSAL) e Instituto Salvadoreño del Seguro Social (ISSS).
 */

export interface ResidentadoQuestion {
  id: string;
  specialty: 'medicina_interna' | 'cirugia_general' | 'pediatria' | 'ginecologia_obstetricia' | 'salud_publica';
  topic: string;
  clinicalVignette: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
  keyTakeaway: string;
  distractorRationale: Record<string, string>;
  officialReference: string;
}

export const RESIDENTADO_SPECIALTIES = [
  { id: 'all', name: 'Todas las Especialidades', icon: 'Stethoscope' },
  { id: 'medicina_interna', name: 'Medicina Interna', icon: 'Activity' },
  { id: 'cirugia_general', name: 'Cirugía General', icon: 'Scissors' },
  { id: 'pediatria', name: 'Pediatría', icon: 'Baby' },
  { id: 'ginecologia_obstetricia', name: 'Ginecología y Obstetricia', icon: 'Heart' },
  { id: 'salud_publica', name: 'Salud Pública & Normas MINSAL', icon: 'ShieldCheck' },
];

export const RESIDENTADO_QUESTIONS: ResidentadoQuestion[] = [
  // =========================================================================
  // 1. MEDICINA INTERNA
  // =========================================================================
  {
    id: 'enar-mi-001',
    specialty: 'medicina_interna',
    topic: 'Cardiología / Infarto Agudo de Miocardio con Elevación del ST (IAMCEST)',
    clinicalVignette: 'Hombre de 58 años con antecedentes de diabetes mellitus tipo 2 e hipertensión arterial consulta a la Unidad de Emergencia con dolor retroesternal opresivo de 90 minutos de evolución, irradiado a mandíbula y brazo izquierdo, acompañado de diaforesis profusa y náuseas. PA: 85/55 mmHg, FC: 110 lpm. El electrocardiograma de 12 derivaciones muestra elevación del segmento ST de 3 mm en derivaciones II, III y aVF, con ondas Q incipientes. ¿Cuál es la conducta terapéutica inicial y de reperfusión más adecuada según la Guía Clínica de Síndrome Coronario Agudo?',
    options: [
      { key: 'A', text: 'Administrar nitroglicerina sublingual inmediata, betabloqueadores orales y trasladar a sala de medicina.' },
      { key: 'B', text: 'Reanimación cautelosa con solución salina normal, doble antiagregación plaquetaria (AAS + Clopidogrel) y activar protocolo de angioplastia coronaria primaria o fibrinolisis si el tiempo puerta-balón supera los 120 min.' },
      { key: 'C', text: 'Iniciar diuréticos de asa (furosemida 40 mg IV) para descongestionar el ventrículo izquierdo y anticoagular con heparina no fraccionada en monoterapia.' },
      { key: 'D', text: 'Solicitar seriación de enzimas cardíacas (troponina I) a las 0, 3 y 6 horas antes de definir cualquier estrategia de reperfusión.' },
    ],
    correctKey: 'B',
    explanation: 'El paciente presenta un IAMCEST de cara inferior (II, III, aVF) complicado con hipotensión y probable compromiso de ventrículo derecho. La nitroglicerina y los betabloqueadores están absolutamente contraindicados en sospecha de infarto de ventrículo derecho o hipotensión arterial porque reducen la precarga y precipitan choque cardiogénico. La conducta prioritaria es la restitución volumétrica con cristaloides, doble antiagregación plaquetaria inmediata y terapia de reperfusión urgente (Angioplastia Primaria <90-120 min o fibrinolisis con tenecteplasa/alteplasa <30 min si no se dispone de hemodinamia).',
    keyTakeaway: 'En infartos inferiores con elevación de ST en II, III y aVF, siempre descartar infarto de VD (solicitar V3R-V4R) y EVITAR nitratos o diuréticos que colapsen la precarga.',
    distractorRationale: {
      A: 'Los nitratos reducen la precarga y causan colapso hemodinámico letal en infarto de VD e hipotensión sistémica.',
      C: 'La furosemida agrava la hipotensión y la hipovolemia relativa del ventrículo derecho.',
      D: 'En presencia de elevación del ST inequívoca, NO se debe demorar la reperfusión esperando el resultado de biomarcadores enzimáticos.',
    },
    officialReference: 'Guías de Práctica Clínica de Síndrome Coronario Agudo, MINSAL El Salvador / Harrison: Principios de Medicina Interna, 21.ª Ed.',
  },
  {
    id: 'enar-mi-002',
    specialty: 'medicina_interna',
    topic: 'Infectología / Dengue con Signos de Alarma',
    clinicalVignette: 'Mujer de 24 años procedente del municipio de Soyapango consulta en el 4.° día de enfermedad febril. Refiere que la fiebre ha remitido en las últimas 12 horas, pero presenta dolor abdominal continuo e intenso a la palpación en epigastrio e hipocondrio derecho, vómitos en 4 ocasiones y somnolencia. Examen físico: frialdad distal, llenado capilar 3 segundos, PA: 90/60 mmHg, pulso: 104 lpm. Hemograma: Leucocitos 3,200/mm³, plaquetas: 48,000/mm³, hematocrito: 48% (previo hace 2 días: 36%). Según la Guía Técnica del MINSAL para el Manejo del Dengue, ¿cuál es la clasificación y manejo prioritario?',
    options: [
      { key: 'A', text: 'Dengue sin signos de alarma (Grupo A): Manejo ambulatorio con hidratación oral y paracetamol cada 6 horas.' },
      { key: 'B', text: 'Dengue con signos de alarma (Grupo B2): Hospitalización inmediata y expansión con cristaloides isotónicos (Lactato Ringer o SSN) a razón de 10 mL/kg en la primera hora.' },
      { key: 'C', text: 'Dengue grave con choque establecido: Transfusión profiláctica inmediata de concentrados plaquetarios para evitar hemorragia.' },
      { key: 'D', text: 'Fase de convalecencia del dengue: Suspender líquidos endovenosos para prevenir edema agudo de pulmón.' },
    ],
    correctKey: 'B',
    explanation: 'La paciente ingresa en la fase crítica del dengue (al descender la fiebre), evidenciando signos de alarma cardinales: dolor abdominal intenso y continuo, vómitos persistentes, somnolencia, hemoconcentración marcada (aumento del hematocrito >20%) y trombocitopenia severa. Corresponde al Grupo B2 del MINSAL. El pilar fundamental de tratamiento es la resucitación hidroelectrolítica intravenosa inmediata con cristaloides isotónicos (10 mL/kg en 1 h), evaluando la respuesta clínica y el descenso del hematocrito.',
    keyTakeaway: 'La fase crítica del dengue ocurre en el momento de la defervescencia (días 3 a 7); la fuga plasmática es el mecanismo patogénico central que requiere cristaloides intravenosos oportunos.',
    distractorRationale: {
      A: 'El dolor abdominal continuo y el aumento del hematocrito son signos de alarma que contraindican el manejo ambulatorio.',
      C: 'La transfusión profiláctica de plaquetas NO está indicada en dengue salvo hemorragia masiva incontrolable o trombocitopenia extrema <10,000 con sangrado activo.',
      D: 'La paciente está en fase crítica de fuga capilar, no en fase de recuperación.',
    },
    officialReference: 'Lineamientos Técnicos para la Prevención y Control del Dengue, MINSAL El Salvador / OPS 2024.',
  },
  {
    id: 'enar-mi-003',
    specialty: 'medicina_interna',
    topic: 'Endocrinología / Cetoacidosis Diabética (CAD)',
    clinicalVignette: 'Joven de 19 años con debut de diabetes mellitus tipo 1 es llevado al servicio de urgencias por respiración rápida y profunda (Kussmaul), aliento cetónico y deshidratación severa. Laboratorios: Glucemia: 460 mg/dL, pH arterial: 7.15, HCO₃⁻: 11 mEq/L, Sodio: 135 mEq/L, Potasio: 3.2 mEq/L, Cetonas en orina: ++++. ¿Cuál es el primer paso terapéutico mandatorio antes de iniciar la infusión continua de insulina regular?',
    options: [
      { key: 'A', text: 'Administrar bolo IV de insulina regular a 0.1 UI/kg inmediatamente para bloquear la lipólisis hepática.' },
      { key: 'B', text: 'Iniciar bicarbonato de sodio en infusión IV lenta debido a que el pH es inferior a 7.20.' },
      { key: 'C', text: 'Hidratación vigorosa con solución salina normal al 0.9% y reposición de potasio intravenoso (20-30 mEq/h) hasta elevar el potasio sérico por encima de 3.3 mEq/L antes de administrar insulina.' },
      { key: 'D', text: 'Iniciar infusión de dextrosa al 5% para prevenir la hipoglucemia osmótica.' },
    ],
    correctKey: 'C',
    explanation: 'Si el potasio sérico se encuentra por debajo de 3.3 mEq/L en cetoacidosis diabética, la insulina está CONTRAINDICADA temporalmente porque introduce potasio al espacio intracelular, provocando hipopotasemia severa letal, arritmias ventriculares y paro cardíaco. Se debe administrar primero solución salina y suplementación de potasio (20-30 mEq/h) hasta que el nivel supere 3.3 mEq/L, momento en el cual se inicia la infusión de insulina.',
    keyTakeaway: 'Regla de oro en CAD: NUNCA administrar insulina si el K⁺ sérico es < 3.3 mEq/L; primero reponer potasio para evitar paro cardíaco por hipopotasemia aguda.',
    distractorRationale: {
      A: 'Administrar insulina con potasio de 3.2 mEq/L precipita hipopotasemia crítica y arritmias fatales.',
      B: 'El bicarbonato solo se considera en acidosis extrema refractaria con pH < 6.9.',
      D: 'La dextrosa al 5% se añade posteriormente cuando la glucemia desciende a 200-250 mg/dL para evitar hipoglucemia mientras se resuelve la cetoacidosis.',
    },
    officialReference: 'Norma Técnica para la Atención Integral de la Diabetes Mellitus, MINSAL / Guías ADA 2025.',
  },

  // =========================================================================
  // 2. CIRUGÍA GENERAL
  // =========================================================================
  {
    id: 'enar-cg-001',
    specialty: 'cirugia_general',
    topic: 'Abdomen Agudo Quirúrgico / Apendicitis Aguda',
    clinicalVignette: 'Hombre de 22 años consulta por dolor abdominal de 18 horas de evolución que inició en región periumbilical y posteriormente migró hacia fosa ilíaca derecha. Presenta náuseas, anorexia y febrícula de 37.8 °C. Al examen físico: dolor a la descompresión brusca en punto de McBurney (Blumberg positivo), dolor en FID al palpar FII (Rovsing positivo) y dolor al extender la cadera derecha (signo del psoas positivo). Leucocitosis de 14,500/mm³ con 82% de neutrófilos. ¿Cuál es la conducta terapéutica indicada?',
    options: [
      { key: 'A', text: 'Realizar tomografía axial computarizada de abdomen contrastada y diferir cirugía hasta confirmar fecalito obstructivo.' },
      { key: 'B', text: 'Programación para apendicectomía (abierta o laparoscópica) previa administración de profilaxis antibiótica perioperatoria en la hora previa a la incisión.' },
      { key: 'C', text: 'Tratamiento conservador exclusivo con analgésicos opioides y antibióticos orales ambulatorios.' },
      { key: 'D', text: 'Realizar colonoscopia urgente para descartar enfermedad inflamatoria intestinal.' },
    ],
    correctKey: 'B',
    explanation: 'El paciente presenta un cuadro clínico clásico de apendicitis aguda (secuencia de Murphy: dolor periumbilical que migra a FID + anorexia + náuseas) con signos de irritación peritoneal evidentes y escala de Alvarado de 9 puntos (alta probabilidad). En varones jóvenes con presentación típica, el diagnóstico es fundamentalmente clínico y la indicación es la apendicectomía precoz con profilaxis antibiótica contra gramnegativos y anaerobios (cefalosporina de 2.ª gen o ceftriaxona + metronidazol) administrada 30-60 minutos antes de la incisión quirúrgica.',
    keyTakeaway: 'En apendicitis con clínica inequívoca (Alvarado ≥7 en varones jóvenes), no demorar la apendicectomía con estudios de imagen innecesarios para evitar la perforación.',
    distractorRationale: {
      A: 'La TAC es útil en dudas diagnósticas, mujeres en edad fértil o ancianos, pero no se debe retrasar la cirugía en un cuadro clínico evidente de 18 horas.',
      C: 'El manejo conservador no es el estándar en apendicitis aguda no complicada en el adulto joven sano.',
      D: 'La colonoscopia está formalmente contraindicada ante sospecha de abdomen agudo por alto riesgo de perforación colónica.',
    },
    officialReference: 'Schwartz: Principios de Cirugía, 11.ª Ed. / Sabiston Tratado de Cirugía, 21.ª Ed.',
  },
  {
    id: 'enar-cg-002',
    specialty: 'cirugia_general',
    topic: 'Trauma / Neumotórax a Tensión (ATLS)',
    clinicalVignette: 'Varón de 30 años víctima de accidente de tránsito en carretera a Comalapa es trasladado a la sala de trauma. Se encuentra agitado, cianótico y taquipneico (FR: 34 rpm). Examen físico: ingurgitación yugular marcada, desviación traqueal hacia la izquierda, hemitórax derecho hiperinsuflado con timpanismo a la percusión y abolición total de ruidos respiratorios. PA: 75/40 mmHg, pulso débil: 130 lpm. ¿Cuál es la intervención inmediata que salva la vida del paciente según los protocolos ATLS?',
    options: [
      { key: 'A', text: 'Solicitar radiografía portátil de tórax en posición anteroposterior urgente para confirmar el colapso pulmonar.' },
      { key: 'B', text: 'Intubación orotraqueal inmediata con ventilación mecánica a presión positiva alta.' },
      { key: 'C', text: 'Descompresión con aguja gruesa (catéter 14-16G) en el 5.° espacio intercostal línea medioaxilar o 2.° espacio intercostal línea medioclavicular derecha, seguida de toracostomía con tubo pleural.' },
      { key: 'D', text: 'Pericardiocentesis subxifoidea de urgencia por sospecha de taponamiento cardíaco.' },
    ],
    correctKey: 'C',
    explanation: 'El neumotórax a tensión es un diagnóstico 100% clínico; NUNCA debe esperarse una radiografía de tórax. La tríada de dificultad respiratoria severa, timpanismo unilateral con ausencia de murmullo vesicular, ingurgitación yugular e hipotensión por colapso del retorno venoso (desviación del mediastino) exige descompresión con aguja inmediata, convirtiendo el neumotórax a tensión en uno simple, seguido de tubo de toracostomía conectado a sello de agua.',
    keyTakeaway: 'El neumotórax a tensión se diagnostica clínicamente; la ventilación a presión positiva empeora el cuadro y la radiografía está contraindicada porque retrasa la descompresión.',
    distractorRationale: {
      A: 'Esperar una radiografía de tórax causa la muerte del paciente por paro cardíaco en actividad eléctrica sin pulso.',
      B: 'La ventilación con presión positiva antes de descomprimir el tórax aumenta la tensión intratorácica y colapsa el retorno venoso de forma fulminante.',
      D: 'El timpanismo unilateral y la desviación traqueal diferencian al neumotórax a tensión del taponamiento cardíaco (que cursa con ruidos cardíacos apagados y campos pulmonares limpios).',
    },
    officialReference: 'American College of Surgeons, ATLS (Advanced Trauma Life Support), 10.ª Edición.',
  },

  // =========================================================================
  // 3. PEDIATRÍA
  // =========================================================================
  {
    id: 'enar-ped-001',
    specialty: 'pediatria',
    topic: 'Enfermedad Diarreica Aguda / Planes de Hidratación MINSAL',
    clinicalVignette: 'Lactante de 14 meses de edad es llevado a la Unidad de Salud por presentar 7 deposiciones líquidas y 3 vómitos en las últimas 24 horas. Al examen físico: ojos hundidos, llanto con escasas lágrimas, mucosa oral seca, bebe agua con avidez y el pliegue cutáneo en abdomen regresa lentamente (menos de 2 segundos). Fontanela anterior ligeramente deprimida, pulsos palpables, llenado capilar 2 segundos. ¿Cuál es el diagnóstico del estado de hidratación y el plan de tratamiento normado por el MINSAL?',
    options: [
      { key: 'A', text: 'Diarrea sin deshidratación: Plan A en el hogar aumentando líquidos orales y continuando alimentación normal.' },
      { key: 'B', text: 'Diarrea con algún grado de deshidratación (deshidratación moderada): Plan B con Sales de Rehidratación Oral (SRO) a 50-100 mL/kg en 4 horas bajo supervisión en la unidad de salud.' },
      { key: 'C', text: 'Diarrea con deshidratación grave y choque: Plan C inmediato con solución Hartmann IV a 100 mL/kg en 3 horas.' },
      { key: 'D', text: 'Gastroenteritis bacteriana invasiva: Iniciar loperamida y ciprofloxacino oral inmediato.' },
    ],
    correctKey: 'B',
    explanation: 'El lactante presenta signos cardinales de "Algún grado de deshidratación" (según AIEPI/MINSAL): ojos hundidos, sed intensa (bebe con avidez), mucosa seca y signo del pliegue positivo lento (<2 seg). No presenta signos de deshidratación grave (letargo, inconsciencia o llenado capilar >3 seg). Corresponde al Plan B con SRO de baja osmolaridad a razón de 50 a 100 mL/kg en un período de 4 horas en la unidad de salud, administrado con taza o cuchara.',
    keyTakeaway: 'En Plan B: 50 a 100 mL/kg de SRO en 4 horas. Los antidiarreicos y antimotilidad (loperamida) están absolutamente contraindicados en pediatría.',
    distractorRationale: {
      A: 'El paciente tiene signos clínicos claros de pérdida hídrica que requieren rehidratación supervisada en la unidad de salud, no solo prevención ambulatoria.',
      C: 'El Plan C se reserva para deshidratación grave con alteración del sensorio o colapso hemodinámico.',
      D: 'La loperamida está proscrita en menores por riesgo de íleo paralítico, megacolon tóxico y muerte.',
    },
    officialReference: 'Norma Técnica para la Atención Integral de la Salud Infantil, MINSAL El Salvador / AIEPI.',
  },
  {
    id: 'enar-ped-002',
    specialty: 'pediatria',
    topic: 'Infectología / Bronquiolitis Aguda',
    clinicalVignette: 'Lactante de 4 meses de edad sin antecedentes perinatales de importancia presenta rinorrea y tos seca de 3 días de evolución, agregándose hoy dificultad respiratoria y rechazo al alimento. Examen físico: afebril, FR: 62 rpm, tiraje subcostal e intercostal leve, saturación de oxígeno al aire ambiente: 93%. A la auscultación pulmonar se escuchan sibilancias espiratorias bilaterales y subcrepitantes diseminados. ¿Cuál es el agente etiológico más frecuente y el manejo recomendado según la evidencia actual?',
    options: [
      { key: 'A', text: 'Streptococcus pneumoniae; iniciar amoxicilina a 90 mg/kg/día por 10 días.' },
      { key: 'B', text: 'Virus Sincitial Respiratorio (VSR); manejo de soporte con aseo nasal con solución salina, hidratación adecuada y fraccionamiento de tomas de leche.' },
      { key: 'C', text: 'Bordetella pertussis; nebulizaciones continuas con salbutamol y dexametasona intramuscular.' },
      { key: 'D', text: 'Mycoplasma pneumoniae; indicar azitromicina y broncodilatadores orales.' },
    ],
    correctKey: 'B',
    explanation: 'La bronquiolitis aguda es el primer episodio de sibilancias en un menor de 2 años precedido de pródromo catarral, siendo el Virus Sincitial Respiratorio (VSR) el causante en más del 70-80% de los casos. Las guías internacionales y del MINSAL son categóricas: los broncodilatadores inhalados, corticoides sistémicos y antibióticos NO están indicados de forma rutinaria. El tratamiento es de soporte: oxigenoterapia solo si SatO₂ <92%, aspiración suave de secreciones nasales y mantenimiento del estado hidroelectrolítico.',
    keyTakeaway: 'En bronquiolitis viral: la base del tratamiento es de soporte (aspiración nasal, hidratación y oxígeno si SatO₂ <92%); no usar corticoides ni antibióticos de rutina.',
    distractorRationale: {
      A: 'La bronquiolitis es viral; el uso empírico de amoxicilina es un error frecuente que no modifica la evolución clínica.',
      C: 'Los corticoides sistémicos y el salbutamol no han demostrado beneficio consistente en la bronquiolitis típica del lactante.',
      D: 'El Mycoplasma es excepcional en lactantes menores de 6 meses y característico de escolares.',
    },
    officialReference: 'Nelson: Tratado de Pediatría, 21.ª Ed. / Guías Clínicas de Neumología Pediátrica MINSAL.',
  },

  // =========================================================================
  // 4. GINECOLOGÍA Y OBSTETRICIA
  // =========================================================================
  {
    id: 'enar-go-001',
    specialty: 'ginecologia_obstetricia',
    topic: 'Obstetricia / Preeclampsia con Criterios de Severidad',
    clinicalVignette: 'Primigesta de 17 años con embarazo de 34 semanas por amenorrea confiable consulta al hospital de maternidad por cefalea frontal intensa, visión borrosa (fotopsias) y dolor en epigastrio tipo barra. Examen físico: PA: 165/110 mmHg tomada en dos ocasiones separadas por 15 minutos, edema en miembros inferiores +++, hiperreflexia patelar generalizada. Tira reactiva de orina: proteinuria +++. ¿Cuál es el tratamiento inmediato para la prevención de eclampsia (convulsiones) y el antihipertensivo de elección normado por el MINSAL?',
    options: [
      { key: 'A', text: 'Sulfato de magnesio (esquema de Zuspan: 4 g IV en 20 min de carga + 1 g/h de mantenimiento) e hidralazina o labetalol intravenoso para control de crisis hipertensiva.' },
      { key: 'B', text: 'Diazepam 10 mg IV lento en bolo y enalaprilato endovenoso.' },
      { key: 'C', text: 'Fenitoína sódica a dosis de impregnación (18 mg/kg) y nitroprusiato de sodio en infusión continua.' },
      { key: 'D', text: 'Furosemida 40 mg IV y cesárea urgente inmediata sin estabilización previa.' },
    ],
    correctKey: 'A',
    explanation: 'La paciente presenta Preeclampsia con Criterios de Severidad (cifras tensionales ≥160/110 mmHg asociadas a síntomas de vasoespasmo cerebral y epigastralgia). El fármaco de elección para la profilaxis y tratamiento de las convulsiones eclámpticas es el Sulfato de Magnesio (esquema de Zuspan: dosis de carga 4 g IV en 15-20 minutos, seguida de 1 g/hora en infusión continua). Para el control de la crisis hipertensiva severa (PA ≥160/110), los fármacos de primera línea son el Labetalol IV, la Hidralazina IV o la Nifedipina oral de liberación rápida.',
    keyTakeaway: 'Sulfato de Magnesio es el anticonvulsivo de elección en preeclampsia/eclampsia; monitorizar reflejo rotuliano, FR (>16 rpm) y diuresis (>30 mL/h) para vigilar toxicidad (antídoto: Gluconato de Calcio).',
    distractorRationale: {
      B: 'El diazepam es inferior al sulfato de magnesio y deprime al feto; los IECA (enalapril) están contraindicados en el embarazo por teratogenicidad renal.',
      C: 'La fenitoína es menos efectiva que el sulfato de magnesio para prevenir eclampsia.',
      D: 'La interrupción del embarazo sin estabilización hemodinámica y neuroprotección materna previa eleva significativamente la morbimortalidad.',
    },
    officialReference: 'Lineamientos Técnicos para la Atención de las Emergencias Obstétricas (Código Rojo y Trastornos Hipertensivos), MINSAL El Salvador.',
  },
  {
    id: 'enar-go-002',
    specialty: 'ginecologia_obstetricia',
    topic: 'Obstetricia / Hemorragia Posparto (Código Rojo)',
    clinicalVignette: 'Multípara de 31 años acaba de tener un parto vaginal de término de un recién nacido de 4,100 g. A los 10 minutos de la expulsión placentaria completa, presenta sangrado vaginal masivo rutilante que empapa apósitos rápidamente. Al examen físico: fondo uterino blando, supraumbilical, poco contraído. PA: 80/50 mmHg, FC: 120 lpm. Se activa el protocolo "Código Rojo Obstétrico". ¿Cuál es la etiología más probable y la primera medida farmacológica a administrar?',
    options: [
      { key: 'A', text: 'Rotura uterina; trasladar de inmediato a laparotomía exploradora sin intentar masaje ni uterotónicos.' },
      { key: 'B', text: 'Atonía uterina; realizar masaje uterino bimanual continuo y administrar Oxitocina (20 UI en 500 mL de cristaloides IV a goteo rápido).' },
      { key: 'C', text: 'Inversión uterina; traccionar el cordón umbilical con mayor fuerza para desprender restos endometriales.' },
      { key: 'D', text: 'Laceración de cuello uterino; taponamiento vaginal exclusivo con gasas estériles sin uterotónicos.' },
    ],
    correctKey: 'B',
    explanation: 'La causa más frecuente de hemorragia posparto primaria (responsable de más del 70-80% de los casos) es la Atonía Uterina, facilitada en este caso por la sobredistensión uterina secundaria a macrosomía fetal (4,100 g). El útero se palpa blando y sobre el ombligo. El manejo inmediato del Código Rojo incluye: masaje uterino bimanual continuo, oxigenoterapia, dos accesos venosos periféricos de grueso calibre (catéter 14 o 16G) con cristaloides tibios y la administración inmediata de uterotónicos de primera línea: Oxitocina 20-40 UI en infusión IV rápida, seguida si es necesario de metilergonovina o misoprostol 800 mcg rectal/sublingual.',
    keyTakeaway: 'Regla de las 4T de la HPP: Tono (70%), Trauma (20%), Tejido (10%), Trombina (1%). La atonía uterina es la número 1 y responde a masaje bimanual + oxitocina.',
    distractorRationale: {
      A: 'La rotura uterina es rara en multíparas sin cesárea previa y cursa con pérdida de la presentación fetal y dolor lancinante agudo previo.',
      C: 'La tracción forzada del cordón umbilical es la causa iatrogénica de inversión uterina y está terminantemente proscrita.',
      D: 'El útero blando y no contraído diagnostica atonía uterina; el taponamiento vaginal aislado es inútil si la cavidad uterina continúa sangrando.',
    },
    officialReference: 'Williams Obstetricia, 26.ª Ed. / Protocolo de Manejo de la Hemorragia Posparto (Código Rojo), MINSAL El Salvador.',
  },

  // =========================================================================
  // 5. SALUD PÚBLICA & NORMATIVAS MINSAL
  // =========================================================================
  {
    id: 'enar-sp-001',
    specialty: 'salud_publica',
    topic: 'Vacunación / Esquema Nacional del MINSAL',
    clinicalVignette: 'Madre lleva a su hijo de 2 meses de edad a la Unidad Comunitaria de Salud Familiar (UCSF) para su control de niño sano y esquema de vacunación correspondiente. El lactante se encuentra asintomático. Según el Esquema Oficial de Vacunación de El Salvador vigente, ¿qué vacunas debe recibir el paciente en esta consulta?',
    options: [
      { key: 'A', text: 'BCG y Hepatitis B monodosis.' },
      { key: 'B', text: 'Pentavalente (DPT-HB-Hib), Polio inactivada (IPV), Rotavirus y Neumococo conjugada.' },
      { key: 'C', text: 'Triple Viral (SPR) y Vacuna contra la Varicela.' },
      { key: 'D', text: 'DPT refuerzo y Toxoide Tetánico.' },
    ],
    correctKey: 'B',
    explanation: 'Según el Esquema Nacional de Vacunación de la República de El Salvador emitido por el Ministerio de Salud, a los 2 meses de edad el lactante debe recibir su primera dosis de: 1) Vacuna Pentavalente (difteria, tos ferina, tétanos, hepatitis B e infecciones invasivas por Haemophilus influenzae tipo b), 2) Vacuna Antipoliomielítica Inactivada (IPV), 3) Vacuna contra Rotavirus (vía oral), y 4) Vacuna Neumocócica Conjugada (PCV13).',
    keyTakeaway: 'A los 2 y 4 meses en El Salvador: Pentavalente + Polio (IPV) + Rotavirus + Neumococo. La BCG y Hepatitis B se administran en el recién nacido (<24 horas).',
    distractorRationale: {
      A: 'La BCG y Hepatitis B pediátrica corresponden a la dosis neonatal en las primeras 24 horas de vida.',
      C: 'La SPR (sarampión, paperas, rubéola) y varicela se administran a partir de los 12 meses de edad.',
      D: 'Los refuerzos de DPT corresponden a los 18 meses y a los 4 años.',
    },
    officialReference: 'Lineamientos Técnicos para la Vacunación en El Salvador, Programa Nacional de Inmunizaciones (PNI), MINSAL.',
  },
  {
    id: 'enar-sp-002',
    specialty: 'salud_publica',
    topic: 'Enfermedades Crónicas / Enfermedad Renal Crónica en El Salvador',
    clinicalVignette: 'En el marco de la epidemiología salvadoreña, la Enfermedad Renal Crónica no tradicional (ERCnT) o Nefropatía Mesoamericana afecta predominantemente a comunidades agrícolas masculinas en la zona costera y paracentral (ej. Bajo Lempa). Histopatológicamente, ¿cuál es el hallazgo distintivo de esta entidad frente a la nefropatía diabética clásica?',
    options: [
      { key: 'A', text: 'Glomeruloesclerosis nodular de Kimmelstiel-Wilson con proteinuria en rango nefrótico masivo.' },
      { key: 'B', text: 'Nefritis tubulointersticial crónica con fibrosis intersticial y atrofia tubular, con mínima o nula proteinuria en etapas iniciales.' },
      { key: 'C', text: 'Glomerulonefritis membranoproliferativa con depósitos densos subendoteliales de C3.' },
      { key: 'D', text: 'Necrosis cortical bilateral aguda con trombocitopenia.' },
    ],
    correctKey: 'B',
    explanation: 'La Nefropatía Mesoamericana o ERC no tradicional es un problema de salud pública de primera magnitud en El Salvador. Afecta típicamente a agricultores varones jóvenes expuestos a estrés térmico severo, deshidratación recurrente y agroquímicos. A diferencia de la nefropatía diabética (que cursa con micro/macroalbuminuria y lesión glomerular), la ERCnT es una Nefritis Tubulointersticial Crónica caracterizada por daño tubular, fibrosis intersticial y daño glomerular secundario por isquemia, manifestándose con proteinuria escasa o ausente en fases tempranas.',
    keyTakeaway: 'Nefropatía Mesoamericana en El Salvador: Nefritis tubulointersticial crónica sin proteinuria significativa inicial, vinculada al trabajo agrícola costero y deshidratación crónica.',
    distractorRationale: {
      A: 'La lesión de Kimmelstiel-Wilson es patognomónica de la nefropatía diabética de larga evolución.',
      C: 'La membranoproliferativa es una glomerulopatía mediada por complejos inmunes o complemento, no una enfermedad tubulointersticial ambiental.',
      D: 'La necrosis cortical aguda ocurre en catástrofes obstétricas o choque séptico refractario, no como patología crónica.',
    },
    officialReference: 'Plan Nacional de Prevención y Control de la Enfermedad Renal Crónica, Instituto Nacional de Salud (INS) / MINSAL El Salvador.',
  },
];

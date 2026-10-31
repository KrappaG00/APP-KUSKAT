/**
 * BANCO DE PREGUNTAS, CASOS CLÍNICOS RESUELTOS Y UNIDADES TEMÁTICAS
 * EXAMEN DE RESIDENTADO MÉDICO (ENAR) — EL SALVADOR
 * Consejo para la Enseñanza y Aprendizaje Académico de las Prácticas Clínicas
 * Especialidades Troncales: Medicina Interna, Cirugía General, Pediatría,
 * Ginecología y Obstetricia, Medicina Familiar y Atención Primaria, y Salud Pública
 * Conforme a Guías Clínicas Oficiales del MINSAL, OPS/OMS y Estándares de Especialidad.
 */

export interface ResidentadoQuestion {
  id: string;
  specialty: 'medicina_interna' | 'cirugia_general' | 'pediatria' | 'ginecologia_obstetricia' | 'medicina_familiar' | 'salud_publica';
  topic: string;
  clinicalVignette: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
  keyTakeaway: string;
  distractorRationale: Record<string, string>;
  officialReference: string;
}

export interface ResidentadoSolvedCase {
  id: string;
  title: string;
  patientProfile: string;
  clinicalPresentation: string;
  physicalExam: string;
  labAndImagingData: string;
  initialVignette: string;
  diagnosticReasoning: string;
  stepByStepReasoning?: string;
  differentialDiagnosis: {
    condition: string;
    rulingRationale: string;
  }[];
  managementPlan: string[];
  therapeuticPlan: string[];
  pedagogicalRationale: string;
  clinicalPearls: string[];
  officialProtocolRef: string;
}

export interface ResidentadoThematicUnit {
  id: string;
  specialtyId: 'medicina_interna' | 'cirugia_general' | 'pediatria' | 'ginecologia_obstetricia' | 'medicina_familiar';
  specialtyName: string;
  title: string;
  substantiveTheory: string;
  clinicalPearls: string[];
  keyClinicalProtocols: {
    protocolName: string;
    summary: string;
    institution: string;
  }[];
  solvedClinicalCases: ResidentadoSolvedCase[];
}

export const RESIDENTADO_SPECIALTIES = [
  { id: 'all', name: 'Todas las Especialidades', icon: 'Stethoscope' },
  { id: 'medicina_interna', name: 'Medicina Interna', icon: 'Activity' },
  { id: 'cirugia_general', name: 'Cirugía General', icon: 'Scissors' },
  { id: 'pediatria', name: 'Pediatría', icon: 'Baby' },
  { id: 'ginecologia_obstetricia', name: 'Ginecología y Obstetricia', icon: 'Heart' },
  { id: 'medicina_familiar', name: 'Medicina Familiar y Atención Primaria', icon: 'Users' },
  { id: 'salud_publica', name: 'Salud Pública & Normas MINSAL', icon: 'ShieldCheck' },
];

export const RESIDENTADO_THEMATIC_UNITS: ResidentadoThematicUnit[] = [
  {
    "id": "unit-medicina-interna",
    "specialtyId": "medicina_interna",
    "specialtyName": "Medicina Interna",
    "title": "Medicina Interna Hospitalaria: Síndromes Coronarios Agudos, Emergencias Endocrino-Metabólicas, Dengue Crítico y Nefropatía Mesoamericana",
    "substantiveTheory": "La práctica clínica en Medicina Interna dentro del Sistema Nacional Integrado de Salud de El Salvador exige un dominio riguroso de las patologías agudas y crónicas complejas que conllevan alto riesgo de morbimortalidad en los hospitales de referencia (Hospital Nacional Rosales, ISSS y redes departamentales).\n\n1. Síndromes Coronarios Agudos (SCA) y Compromiso de Ventrículo Derecho:\nEl infarto agudo de miocardio con elevación del segmento ST (IAMCEST) de cara inferior (derivaciones DII, DIII y aVF) se asocia en un 30% a 50% de los casos a extensión al ventrículo derecho por oclusión proximal de la arteria coronaria derecha. En todo paciente con IAM inferior e inestabilidad hemodinámica o bradiarritmia es MANDATORIO el registro electrocardiográfico de derivaciones derechas (V3R y V4R), donde una elevación del ST ≥ 1 mm (o ≥ 0.5 mm en mujeres y ancianos) en V4R confirma el infarto de ventrículo derecho. Fisiopatológicamente, el miocardio ventricular derecho isquémico pierde su contractilidad activa y se comporta como un conducto rígido cuya eyección depende exclusivamente de una presión de llenado telediastólico elevada (precarga-dependiente). En consecuencia, los fármacos venodilatadores como la nitroglicerina, los nitratos orales, los betabloqueadores precoces y los diuréticos de asa (furosemida) están ABSOLUTAMENTE CONTRAINDICADOS, ya que al deprimir la precarga precipitan colapso hemodinámico fulminante y choque cardiogénico refractario. El pilar del tratamiento hemodinámico es la expansión rápida con bolos de cristaloides isotónicos (solución salina normal 0.9% o lactato Ringer, 500 a 1000 mL en 15-30 minutos) monitorizando la presión venosa central y la respuesta tensional. El protocolo Código Infarto del MINSAL establece como meta de reperfusión un tiempo puerta-balón inferior a 90 minutos para angioplastia coronaria percutánea (ACTP) primaria o tiempo puerta-aguja menor a 30 minutos para trombolisis sistémica (con tenecteplasa o alteplasa) si la transferencia a hemodinamia excede los 120 minutos. Se administra de inmediato doble antiagregación plaquetaria con ácido acetilsalicílico (AAS 162-325 mg masticado) más clopidogrel (dosis de carga 300 mg en >75 años o 600 mg en ≤75 años) o ticagrelor (180 mg), junto a anticoagulación parenteral con enoxaparina ajustada a la tasa de filtración glomerular.\n\n2. Crisis Hiperglucémicas: Cetoacidosis Diabética (CAD) y Estado Hiperosmolar Hiperglucémico (EHH):\nEl diagnóstico diferencial y manejo protocolizado según las guías ADA y la Norma Técnica del MINSAL demanda la evaluación de la brecha aniónica (Anion Gap = Na - [Cl + HCO3], normal 8-12 mEq/L) y la osmolaridad plasmática efectiva (2 × Na + Glucosa / 18, normal 275-295 mOsm/kg). La CAD se caracteriza por hiperglucemia (>250 mg/dL), acidosis metabólica con anión gap elevado (>10-12 mEq/L), bicarbonato sérico <18 mEq/L y cetonemia/cetonuria intensa por lipólisis desregulada. El EHH cursa con hiperglucemia extrema (>600 mg/dL), hiperosmolaridad profunda (>320 mOsm/kg), deshidratación severa (déficit hídrico de 8-10 L) y sensorio deprimido o coma, sin cetoacidosis significativa.\nProtocolo de resucitación hídrica y electrolítica:\na) Fluidoterapia: Iniciar con SSN al 0.9% a razón de 1000 a 1500 mL en la primera hora (15-20 mL/kg/h). Posteriormente, evaluar el sodio sérico corregido (Na corregido = Na medido + 0.016 × [Glucosa - 100]). Si el sodio corregido es normal o alto, continuar con SSN al 0.45% a 250-500 mL/h; si es bajo, continuar con SSN al 0.9% al mismo ritmo.\nb) Potasio: REGLA DE ORO DE SEGURIDAD: NUNCA iniciar infusión de insulina si el potasio sérico es inferior a 3.3 mEq/L. Si K+ < 3.3 mEq/L, diferir la insulina y administrar KCl intravenoso a 20-30 mEq/h hasta lograr K+ > 3.3 mEq/L, evitando fibrilación ventricular y paro cardíaco. Si K+ está entre 3.3 y 5.2 mEq/L, administrar 20-30 mEq de KCl por cada litro de solución de infusión para mantener niveles entre 4.0 y 5.0 mEq/L. Si K+ > 5.2 mEq/L, no agregar potasio pero monitorizar cada 2 horas.\nc) Insulinoterapia: Insulina regular humana en infusión continua intravenosa a 0.1 UI/kg/h (o bolo de 0.1 UI/kg seguido de 0.1 UI/kg/h). La meta de descenso glucémico es de 50 a 75 mg/dL por hora.\nd) Transición de líquidos: Cuando la glucemia descienda a ≤200 mg/dL en CAD (o ≤300 mg/dL en EHH), es OBLIGATORIO cambiar la solución a Dextrosa al 5% en SSN 0.45% a 150-250 mL/h manteniendo la infusión de insulina, para prevenir hipoglucemia y edema cerebral mientras se cierra completamente la brecha aniónica. Criterios de resolución de CAD: glucosa <200 mg/dL, bicarbonato sérico ≥18 mEq/L, pH venoso >7.30 y brecha aniónica normalizada.\n\n3. Dengue en Fase Crítica y Manejo de la Fuga Plasmática:\nEl dengue es una enfermedad viral sistémica y dinámica transmitida por Aedes aegypti. La fase crítica coincide típicamente con la defervescencia de la fiebre (entre el 3.° y 7.° día de la enfermedad), momento en que la respuesta inflamatoria mediada por citocinas provoca un aumento abrupto de la permeabilidad vascular endotelial. Según la Guía Técnica del MINSAL / OPS, la clasificación operativa divide a los pacientes en tres grupos:\n- Grupo A: Dengue sin signos de alarma y sin riesgo social (ambulatorio, hidratación oral con SRO y paracetamol).\n- Grupo B1: Dengue sin signos de alarma pero con afecciones asociadas (embarazo, diabetes, lactantes menores, adultos mayores o aislamiento social) que requieren hospitalización para observación estrecha.\n- Grupo B2: Dengue con Signos de Alarma: dolor abdominal intenso y continuo, vómitos persistentes (≥3 en 1h o ≥4 en 6h), acumulación clínica de líquidos (ascitis, derrame pleural, engrosamiento de pared vesicular >3 mm por ultrasonografía), sangrado de mucosas, letargo o irritabilidad, hepatomegalia >2 cm bajo el reborde costal, y aumento progresivo del hematocrito asociado a rápida disminución del recuento plaquetario (hemoconcentración). Manejo Mandatorio del Grupo B2: hospitalización inmediata, resucitación hídrica parenteral con cristaloides isotónicos (Lactato Ringer o SSN 0.9%) a 10 mL/kg en la 1.ª hora. Reevaluar: si hay mejoría clínica y descenso del hematocrito, reducir a 5-7 mL/kg/h por 2-4 horas; luego a 3-5 mL/kg/h por 2-4 horas y posteriormente a 2-3 mL/kg/h por 24-48 horas. Si no hay mejoría o el hematocrito se incrementa, administrar un segundo bolo a 10-20 mL/kg en 1 hora.\n- Grupo C: Dengue Grave: fuga plasmática masiva que conduce a choque por dengue (presión de pulso o diferencial ≤20 mmHg, pulso débil o filiforme, frialdad distal, llenado capilar >3 segundos, hipotensión tardía), dificultad respiratoria por sobrecarga hídrica/derrame pleural masivo, sangrado grave (gastrointestinal masivo, cerebral) o daño orgánico severo (hepatitis aguda con AST/ALT >1000 UI/L, miocarditis, encefalitis). Resucitación inmediata de choque: bolo de cristaloides isotónicos a 20 mL/kg en 15 a 30 minutos. Están proscritos los AINEs, el ácido acetilsalicílico y la corticoterapia empírica. Las transfusiones de plaquetas profilácticas NO están indicadas salvo coagulopatía de consumo con sangrado activo incontrolable.\n\n4. Falla Cardíaca Aguda Descompensada y Choque Cardiogénico:\nEn la unidad de emergencia hospitalaria se aplica la estratificación clínica hemodinámica de Forrester y Stevenson basada en la presencia de congestión pulmonar o sistémica (\"húmedo\" vs \"seco\") y la adecuación de la perfusión periférica (\"caliente\" vs \"frío\"). El perfil B (\"Caliente y Húmedo\") representa más del 70% de las admisiones y responde a vasodilatadores (nitroglicerina IV si la PAS >110 mmHg) combinados con diuréticos de asa (furosemida IV a dosis equivalente a 1-2.5 veces la dosis oral habitual del paciente). En contraste, el perfil C (\"Frío y Húmedo\") define el choque cardiogénico congestivo con índice cardíaco bajo y resistencias vasculares elevadas: requiere inotrópicos positivos (dobutamina a 2.5-10 mcg/kg/min o milrinona a 0.25-0.75 mcg/kg/min) asociados a vasopresores (norepinefrina) para mantener la presión de perfusión coronaria (meta de PAM ≥65 mmHg). El perfil L (\"Frío y Seco\") traduce hipovolemia relativa y demanda prueba de volumen controlada con cristaloides (250 mL en 20 min).\n\n5. Enfermedad Renal Crónica no tradicional (ERCnT) / Nefropatía Mesoamericana:\nEl Salvador enfrenta una epidemia de Enfermedad Renal Crónica de etiología no tradicional que afecta predominantemente a comunidades agrícolas masculinas en la planicie costera y cuenca del Bajo Lempa (departamentos de Usulután, San Miguel, La Paz). A diferencia de la nefropatía diabética o hipertensiva clásica, la ERCnT es una Nefritis Tubulointersticial Crónica primaria caracterizada histopatológicamente por atrofia tubular, fibrosis intersticial y glomeruloesclerosis secundaria por isquemia crónica. Los factores etiológicos identificados por el Instituto Nacional de Salud (INS) y OPS comprenden: estrés térmico severo y repetido con deshidratación inducida por esfuerzo extenuante en el cultivo de caña de azúcar y algodón; consumo de agua con déficit de sales minerales y posible presencia de metales pesados o agroquímicos (paraquat, glifosato); hiperuricemia persistente y uso crónico indiscriminado de AINEs como analgésicos laborales. Clínicamente cursa con proteinuria mínima o ausente (<0.5 g/24h) en etapas tempranas, sedimento urinario benigno, hipopotasemia o hipomagnesemia por pérdida tubular y elevación progresiva de creatinina sérica. El abordaje incluye nefroprotección estricta, suspensión inmediata de nefrotóxicos (AINEs, aminoglucósidos), hidratación programada con soluciones con electrolitos durante la jornada agrícola, uso cauteloso de bloqueadores del eje renina-angiotensina solo si coexiste proteinuria o hipertensión franca, y tamizaje comunitario mediante estimación de tasa de filtración glomerular con creatinina sérica estandarizada (CKD-EPI) y relación albúmina/creatinina en orina.",
    "clinicalPearls": [
      "En todo infarto agudo de miocardio de cara inferior (II, III, aVF) con hipotensión y pulmones limpios, registrar V3R-V4R antes de dar cualquier fármaco; los nitratos y diuréticos están terminantemente contraindicados.",
      "Regla de oro de seguridad en Cetoacidosis Diabética: NUNCA iniciar infusión de insulina si el potasio sérico es < 3.3 mEq/L para evitar fibrilación ventricular y paro cardíaco.",
      "En Dengue con Signos de Alarma (Grupo B2 MINSAL), la fase crítica ocurre durante la defervescencia; la resucitación hidroelectrolítica con cristaloides a 10 mL/kg/h salva vidas y debe titularse según hematocrito.",
      "La Nefropatía Mesoamericana en El Salvador es una Nefritis Tubulointersticial Crónica de causa ocupacional/ambiental que cursa con proteinuria mínima en estadios iniciales; evitar el abuso de AINEs y garantizar hidratación adecuada.",
      "En Choque Séptico, la meta de resucitación inicial es PAM ≥65 mmHg mediante cristaloides 30 mL/kg en 3 horas y Norepinefrina como vasopresor de primera línea."
    ],
    "keyClinicalProtocols": [
      {
        "protocolName": "Código Infarto y Reperfusión Miocárdica",
        "summary": "Identificación de IAM inferior + derivaciones derechas (V3R/V4R); contraindicación absoluta de nitratos/diuréticos; meta puerta-balón <90 min o puerta-aguja <30 min; doble antiagregación con AAS y Clopidogrel.",
        "institution": "Hospital Nacional Rosales / MINSAL El Salvador"
      },
      {
        "protocolName": "Manejo Protocolizado de Cetoacidosis Diabética y EHH",
        "summary": "Fluidoterapia escalonada con SSN 0.9% y 0.45%; regla obligatoria de potasio >3.3 mEq/L antes de insulina; infusión continua a 0.1 UI/kg/h; adición de Dextrosa al 5% al descender glicemia a ≤200 mg/dL.",
        "institution": "Norma Técnica de Diabetes Mellitus, MINSAL / Guías ADA"
      },
      {
        "protocolName": "Guía Clínica para el Manejo del Dengue en Fase Crítica",
        "summary": "Estratificación Grupos A, B1, B2 y C; reconocimiento de signos de alarma en defervescencia; resucitación con cristaloides a 10 mL/kg/h con reducción guiada por hematocrito; evitar diuréticos y AINEs.",
        "institution": "Lineamientos Técnicos del Dengue, MINSAL / OPS"
      },
      {
        "protocolName": "Abordaje de la Insuficiencia Cardíaca Aguda",
        "summary": "Clasificación de Stevenson (A, B, C, L); titulación de furosemida IV y nitroglicerina en perfil B; soporte inotrópico con dobutamina/milrinona y vasopresor norepinefrina en choque cardiogénico.",
        "institution": "Guías Clínicas de Falla Cardíaca, MINSAL / ACC/AHA"
      },
      {
        "protocolName": "Abordaje Integral de la ERC no tradicional (Nefropatía Mesoamericana)",
        "summary": "Diagnóstico precoz de nefritis tubulointersticial con proteinuria mínima; hidratación laboral activa con electrolitos en zonas cañeras; proscripción de AINEs y seguimiento KDIGO.",
        "institution": "Plan Nacional de Prevención y Control de ERC, MINSAL / INS"
      }
    ],
    "solvedClinicalCases": [
      {
        "id": "case-mi-01",
        "title": "IAMCEST de Cara Inferior Complicado con Infarto de Ventrículo Derecho y Choque Hipotónico",
        "patientProfile": "Hombre de 61 años, agricultor, con hipertensión arterial en tratamiento irregular, trasladado al hospital con dolor torácico opresivo de 2 horas de evolución.",
        "clinicalPresentation": "Hombre de 61 años, agricultor, con hipertensión arterial en tratamiento irregular, trasladado al hospital con dolor torácico opresivo de 2 horas de evolución.. Presenta: Paciente refiere dolor retroesternal opresivo intenso irradiado a mandíbula y epigastrio, acompañado de náuseas y diaforesis profusa.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Pruebas analíticas de urgencia, biomarcadores y estudios de gabinete documentados en la presentación del caso.",
        "initialVignette": "Paciente refiere dolor retroesternal opresivo intenso irradiado a mandíbula y epigastrio, acompañado de náuseas y diaforesis profusa. A la llegada a la emergencia: PA: 80/50 mmHg, FC: 52 lpm, FR: 20 rpm, SatO2: 93% aire ambiente. Al examen físico: palidez mucocutánea marcada, ingurgitación yugular visible a 45 grados, ruidos cardíacos rítmicos apagados sin soplos. La auscultación pulmonar revela campos pulmonares completamente limpios, sin estertores crepitantes ni sibilancias. El ECG de 12 derivaciones muestra elevación del segmento ST de 3 mm en DII, DIII y aVF con ondas Q incipientes e infradesnivel especular en DI y aVL.",
        "diagnosticReasoning": "El cuadro clínico presenta la tríada clásica de Infarto de Ventrículo Derecho descrita por Cohn: 1) Hipotensión arterial sistémica, 2) Campos pulmonares auscultatoriamente limpios (ausencia de congestión venocapilar pulmonar), y 3) Presión venosa yugular elevada (ingurgitación yugular). La elevación del ST en DII, DIII y aVF localiza la isquemia transmural en la cara diafragmática inferior, dependiente de la arteria coronaria derecha proximal, la cual irriga la pared libre del ventrículo derecho y el nodo auriculoventricular. En esta circunstancia, el miocardio del VD pierde contractilidad y se comporta como una cámara no distensible que depende rígidamente de la precarga telediastólica para impulsar sangre a través del lecho vascular pulmonar hacia el ventrículo izquierdo. Cualquier disminución de la precarga causa colapso hemodinámico letal.",
        "stepByStepReasoning": "El cuadro clínico presenta la tríada clásica de Infarto de Ventrículo Derecho descrita por Cohn: 1) Hipotensión arterial sistémica, 2) Campos pulmonares auscultatoriamente limpios (ausencia de congestión venocapilar pulmonar), y 3) Presión venosa yugular elevada (ingurgitación yugular). La elevación del ST en DII, DIII y aVF localiza la isquemia transmural en la cara diafragmática inferior, dependiente de la arteria coronaria derecha proximal, la cual irriga la pared libre del ventrículo derecho y el nodo auriculoventricular. En esta circunstancia, el miocardio del VD pierde contractilidad y se comporta como una cámara no distensible que depende rígidamente de la precarga telediastólica para impulsar sangre a través del lecho vascular pulmonar hacia el ventrículo izquierdo. Cualquier disminución de la precarga causa colapso hemodinámico letal.",
        "differentialDiagnosis": [
          {
            "condition": "Taponamiento Cardíaco Agudo",
            "rulingRationale": "Aunque comparte ingurgitación yugular e hipotensión, el taponamiento cardíaco típicamente presenta pulso paradójico >10 mmHg, silueta cardíaca agrandada o alternancia eléctrica, y carece de supradesnivel focal del ST en cara inferior."
          },
          {
            "condition": "Tromboembolismo Pulmonar Masivo",
            "rulingRationale": "Puede cursar con hipotensión y sobrecarga aguda de cavidades derechas, pero típicamente presenta taquipnea severa, hipoxemia refractaria con disnea súbita y patrón electrocardiográfico S1Q3T3 o taquicardia sinusal, no un patrón de lesión transmural con ondas Q en cara inferior."
          },
          {
            "condition": "Choque Cardiogénico por Falla Ventricular Izquierda Biventricular",
            "rulingRationale": "El choque por falla severa del VI invariablemente cursa con edema agudo de pulmón, estertores crepitantes bilaterales difusos y congestión radiológica, hallazgos ausentes en este paciente."
          }
        ],
        "managementPlan": [
          "1. Registrar inmediatamente derivaciones precordiales derechas (V3R y V4R) y posteriores (V7-V9) para documentar elevación de ST en V4R que confirma extensión a VD.",
          "2. PROSCRIBIR formalmente vasodilatadores (nitroglicerina, dinitrato de isosorbida), diuréticos de asa (furosemida) y morfina que reducirían la precarga y agravarían el choque.",
          "3. Expansión agresiva de la precarga con solución salina normal al 0.9% en bolo de 500 mL IV en 15 minutos, evaluando ascenso de la presión arterial media (PAM ≥65 mmHg) y perfusión distal.",
          "4. Administrar doble antiagregación plaquetaria: Ácido Acetilsalicílico 300 mg VO masticado más Clopidogrel 600 mg VO (o Ticagrelor 180 mg VO).",
          "5. Iniciar anticoagulación parenteral con Enoxaparina 30 mg IV bolo seguido de 1 mg/kg SC cada 12 horas (ajustado a función renal).",
          "6. Activar el protocolo Código Infarto para Angioplastia Coronaria Transluminal Percutánea (ACTP) primaria inmediata de la arteria coronaria derecha en tiempo puerta-balón <90 minutos; si no es viable el traslado antes de 120 minutos, administrar fibrinolítico intravenoso (Tenecteplasa ajustada por peso) en tiempo puerta-aguja <30 minutos."
        ],
        "therapeuticPlan": [
          "1. Registrar inmediatamente derivaciones precordiales derechas (V3R y V4R) y posteriores (V7-V9) para documentar elevación de ST en V4R que confirma extensión a VD.",
          "2. PROSCRIBIR formalmente vasodilatadores (nitroglicerina, dinitrato de isosorbida), diuréticos de asa (furosemida) y morfina que reducirían la precarga y agravarían el choque.",
          "3. Expansión agresiva de la precarga con solución salina normal al 0.9% en bolo de 500 mL IV en 15 minutos, evaluando ascenso de la presión arterial media (PAM ≥65 mmHg) y perfusión distal.",
          "4. Administrar doble antiagregación plaquetaria: Ácido Acetilsalicílico 300 mg VO masticado más Clopidogrel 600 mg VO (o Ticagrelor 180 mg VO).",
          "5. Iniciar anticoagulación parenteral con Enoxaparina 30 mg IV bolo seguido de 1 mg/kg SC cada 12 horas (ajustado a función renal).",
          "6. Activar el protocolo Código Infarto para Angioplastia Coronaria Transluminal Percutánea (ACTP) primaria inmediata de la arteria coronaria derecha en tiempo puerta-balón <90 minutos; si no es viable el traslado antes de 120 minutos, administrar fibrinolítico intravenoso (Tenecteplasa ajustada por peso) en tiempo puerta-aguja <30 minutos."
        ],
        "pedagogicalRationale": "En todo infarto agudo de miocardio de cara inferior (II, III, aVF) con hipotensión y pulmones limpios, registrar V3R-V4R antes de dar cualquier medicamento. Los nitratos y la furosemida son letales en el infarto de ventrículo derecho: secan el retorno venoso a un ventrículo que depende de volumen para perfundir el cuerpo.",
        "clinicalPearls": [
          "En todo infarto agudo de miocardio de cara inferior (II, III, aVF) con hipotensión y pulmones limpios, registrar V3R-V4R antes de dar cualquier medicamento.",
          "Los nitratos y la furosemida son letales en el infarto de ventrículo derecho: secan el retorno venoso a un ventrículo que depende de volumen para perfundir el cuerpo."
        ],
        "officialProtocolRef": "Guía Clínica de Síndrome Coronario Agudo, MINSAL El Salvador / Protocolo Código Infarto Hospital Nacional Rosales."
      },
      {
        "id": "case-mi-02",
        "title": "Cetoacidosis Diabética Severa con Hipopotasemia Concomitante en Debut de DM1",
        "patientProfile": "Mujer de 21 años, estudiante universitaria sin antecedentes clínicos conocidos, ingresa traída por familiares por alteración del sensorio.",
        "clinicalPresentation": "Mujer de 21 años, estudiante universitaria sin antecedentes clínicos conocidos, ingresa traída por familiares por alteración del sensorio.. Presenta: Familiares refieren que desde hace 2 semanas presenta polidipsia intensa, poliuria y pérdida de peso de 6 kg.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "Familiares refieren que desde hace 2 semanas presenta polidipsia intensa, poliuria y pérdida de peso de 6 kg. Desde hace 24 horas se agregaron náuseas, vómitos incoercibles y dolor abdominal difuso. Al examen físico: somnolienta, deshidratada con pliegue cutáneo marcado, respiraciones rápidas y profundas con olor a frutas (respiración de Kussmaul). PA: 90/60 mmHg, FC: 118 lpm, FR: 32 rpm, Temp: 36.8 °C. Glucemia capilar: \"HI\" (>500 mg/dL). Gases arteriales: pH: 7.10, PaCO2: 18 mmHg, PaO2: 92 mmHg, HCO3: 8 mEq/L, lactato: 1.8 mmol/L. Química sanguínea: Glucemia sérica: 540 mg/dL, Sodio: 132 mEq/L, Potasio: 3.1 mEq/L, Cloro: 98 mEq/L, Creatinina: 1.6 mg/dL, Cetonuria: ++++.",
        "diagnosticReasoning": "La paciente presenta los criterios diagnósticos completos de Cetoacidosis Diabética (CAD) Severa: pH arterial < 7.15, bicarbonato sérico < 10 mEq/L, cetonuria masiva e hiperglucemia. La brecha aniónica calculada es marcadamente elevada: Anion Gap = 132 - (98 + 8) = 26 mEq/L (normal 8-12 mEq/L), reflejando acumulación de cetoácidos (beta-hidroxibutirato y acetoacetato). El hallazgo crítico de seguridad es el potasio sérico inicial de 3.1 mEq/L. En la CAD, la diuresis osmótica y los vómitos provocan una depleción severa del potasio corporal total. A pesar de esto, el potasio sérico suele medirse falsamente normal o elevado debido al desplazamiento del potasio del compartimento intracelular al extracelular por el déficit de insulina y la hiperosmolaridad. Cuando el potasio sérico se encuentra por debajo de 3.3 mEq/L antes del tratamiento, indica una depleción corporal extrema de potasio. Si se administrara insulina inmediatamente, esta estimularía la bomba Na+/K+ ATPasa introduciendo masivamente potasio a las células, precipitando hipopotasemia crítica fulminante con paro cardíaco por fibrilación ventricular o parálisis respiratoria.",
        "stepByStepReasoning": "La paciente presenta los criterios diagnósticos completos de Cetoacidosis Diabética (CAD) Severa: pH arterial < 7.15, bicarbonato sérico < 10 mEq/L, cetonuria masiva e hiperglucemia. La brecha aniónica calculada es marcadamente elevada: Anion Gap = 132 - (98 + 8) = 26 mEq/L (normal 8-12 mEq/L), reflejando acumulación de cetoácidos (beta-hidroxibutirato y acetoacetato). El hallazgo crítico de seguridad es el potasio sérico inicial de 3.1 mEq/L. En la CAD, la diuresis osmótica y los vómitos provocan una depleción severa del potasio corporal total. A pesar de esto, el potasio sérico suele medirse falsamente normal o elevado debido al desplazamiento del potasio del compartimento intracelular al extracelular por el déficit de insulina y la hiperosmolaridad. Cuando el potasio sérico se encuentra por debajo de 3.3 mEq/L antes del tratamiento, indica una depleción corporal extrema de potasio. Si se administrara insulina inmediatamente, esta estimularía la bomba Na+/K+ ATPasa introduciendo masivamente potasio a las células, precipitando hipopotasemia crítica fulminante con paro cardíaco por fibrilación ventricular o parálisis respiratoria.",
        "differentialDiagnosis": [
          {
            "condition": "Estado Hiperosmolar Hiperglucémico (EHH)",
            "rulingRationale": "El EHH cursa con glucemia típicamente >600 mg/dL y osmolaridad efectiva >320 mOsm/kg con pH >7.30 y bicarbonato >18 mEq/L, sin cetosis profunda ni acidosis metabólica severa con brecha aniónica ensanchada."
          },
          {
            "condition": "Acidosis Láctica Tipo A por Choque Séptico",
            "rulingRationale": "El lactato sérico es normal (1.8 mmol/L) y la cetonuria es masiva (++++), lo que confirma cetoacidosis y descarta sepsis como causa primaria de la brecha aniónica elevada."
          },
          {
            "condition": "Abdomen Agudo Quirúrgico (Apendicitis / Peritonitis)",
            "rulingRationale": "El dolor abdominal en la CAD es un síntoma frecuente atribuible a la gastroparesia aguda inducida por acidosis y cetosis; cede conforme se corrige la cetoacidosis sin signos de peritonitis localizada ni neumoperitoneo."
          }
        ],
        "managementPlan": [
          "1. PRIORIDAD MANDATORIA: POSPONER la administración de insulina regular hasta que el potasio sérico sea >3.3 mEq/L.",
          "2. Resucitación hídrica inmediata: infundir Solución Salina Normal al 0.9% a razón de 1000 mL/hora durante las primeras 2 horas para expandir el volumen intravascular y mejorar la perfusión renal.",
          "3. Reposición agresiva de potasio: agregar Cloruro de Potasio (KCl) a 20-30 mEq por hora en las soluciones intravenosas bajo monitoreo electrocardiográfico continuo hasta que el potasio sérico ascienda a ≥3.5 mEq/L.",
          "4. Una vez confirmado K+ ≥3.5 mEq/L, iniciar infusión intravenosa continua de Insulina Regular a dosis de 0.1 UI/kg/h (sin bolo previo si se busca descenso gradual de 50-75 mg/dL/h).",
          "5. Cuando la glucemia alcance 200 mg/dL, cambiar los líquidos a Dextrosa al 5% en SSN al 0.45% a 150-250 mL/h, reduciendo la insulina a 0.05 UI/kg/h para mantener glucemias entre 150-200 mg/dL hasta el cierre total de la brecha aniónica (HCO3 ≥18 mEq/L, pH venoso >7.30).",
          "6. Iniciar esquema de insulina basal subcutánea (glargina o NPH) 2 horas antes de suspender la infusión continua de insulina para evitar cetosis de rebote."
        ],
        "therapeuticPlan": [
          "1. PRIORIDAD MANDATORIA: POSPONER la administración de insulina regular hasta que el potasio sérico sea >3.3 mEq/L.",
          "2. Resucitación hídrica inmediata: infundir Solución Salina Normal al 0.9% a razón de 1000 mL/hora durante las primeras 2 horas para expandir el volumen intravascular y mejorar la perfusión renal.",
          "3. Reposición agresiva de potasio: agregar Cloruro de Potasio (KCl) a 20-30 mEq por hora en las soluciones intravenosas bajo monitoreo electrocardiográfico continuo hasta que el potasio sérico ascienda a ≥3.5 mEq/L.",
          "4. Una vez confirmado K+ ≥3.5 mEq/L, iniciar infusión intravenosa continua de Insulina Regular a dosis de 0.1 UI/kg/h (sin bolo previo si se busca descenso gradual de 50-75 mg/dL/h).",
          "5. Cuando la glucemia alcance 200 mg/dL, cambiar los líquidos a Dextrosa al 5% en SSN al 0.45% a 150-250 mL/h, reduciendo la insulina a 0.05 UI/kg/h para mantener glucemias entre 150-200 mg/dL hasta el cierre total de la brecha aniónica (HCO3 ≥18 mEq/L, pH venoso >7.30).",
          "6. Iniciar esquema de insulina basal subcutánea (glargina o NPH) 2 horas antes de suspender la infusión continua de insulina para evitar cetosis de rebote."
        ],
        "pedagogicalRationale": "En cetoacidosis diabética, medir siempre electrolitos antes de colgar la insulina. Si el K+ es <3.3 mEq/L, la insulina mata al paciente por arritmia ventricular; primero se hidrata y se repone potasio. No suspender la insulina solo porque la glucosa bajó a 200 mg/dL; se agrega dextrosa para seguir tratando la cetoacidosis hasta cerrar el anión gap.",
        "clinicalPearls": [
          "En cetoacidosis diabética, medir siempre electrolitos antes de colgar la insulina. Si el K+ es <3.3 mEq/L, la insulina mata al paciente por arritmia ventricular; primero se hidrata y se repone potasio.",
          "No suspender la insulina solo porque la glucosa bajó a 200 mg/dL; se agrega dextrosa para seguir tratando la cetoacidosis hasta cerrar el anión gap."
        ],
        "officialProtocolRef": "Norma Técnica para la Atención Integral de la Diabetes Mellitus, MINSAL El Salvador / Estándares de Atención Médica en Diabetes ADA."
      },
      {
        "id": "case-mi-03",
        "title": "Dengue con Signos de Alarma (Grupo B2 MINSAL) en Fase Crítica con Hemoconcentración",
        "patientProfile": "Hombre de 26 años, residente de Ilopango, previamente sano, consulta en su 5.° día de enfermedad febril aguda.",
        "clinicalPresentation": "Hombre de 26 años, residente de Ilopango, previamente sano, consulta en su 5.° día de enfermedad febril aguda.. Presenta: Paciente refiere que tuvo fiebre alta de 39.5 °C con mialgias intensas y cefalea retroocular durante 4 días.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "Paciente refiere que tuvo fiebre alta de 39.5 °C con mialgias intensas y cefalea retroocular durante 4 días. En las últimas 12 horas la fiebre cedió por completo, pero comenzó con dolor abdominal epigástrico continuo e intenso, vómitos en 5 ocasiones y mareo al ponerse de pie. Al examen físico: alerta pero decaído, piel tibia con palidez leve, frialdad en manos y pies. PA acostado: 100/70 mmHg, PA de pie: 85/65 mmHg (presión de pulso estrecha de 20 mmHg). FC: 106 lpm, FR: 22 rpm. Dolor a la palpación profunda en hipocondrio derecho con borde hepático palpable a 3 cm bajo el reborde costal. Sin signos peritoneales. Hemograma: Hematocrito: 51% (previo al inicio de la enfermedad: 38%), Leucocitos: 2,400/mm³, Plaquetas: 32,000/mm³.",
        "diagnosticReasoning": "El paciente ingresó en la Fase Crítica del dengue, caracterizada por la defervescencia de la fiebre e inicio del fenómeno fisiopatológico cardinal: la fuga plasmática debida a aumento transitorio de la permeabilidad capilar mediado por citocinas proinflamatorias. Presenta múltiples Signos de Alarma del Grupo B2 según la clasificación MINSAL/OPS: 1) Dolor abdominal intenso y continuo, 2) Vómitos persistentes (5 episodios), 3) Hepatomegalia dolorosa >2 cm, 4) Presión de pulso convergente o estrecha (PAS - PAD = 20 mmHg, signo inminente de choque hipovolémico compensado), y 5) Hemoconcentración severa objetivada por un aumento del hematocrito de más del 34% respecto a su valor basal (51% vs 38%), acompañado de leucopenia y trombocitopenia marcada. Corresponde al Grupo B2 del MINSAL: requiere hospitalización inmediata y reanimación hídrica protocolizada para evitar la progresión al choque por dengue (Grupo C).",
        "stepByStepReasoning": "El paciente ingresó en la Fase Crítica del dengue, caracterizada por la defervescencia de la fiebre e inicio del fenómeno fisiopatológico cardinal: la fuga plasmática debida a aumento transitorio de la permeabilidad capilar mediado por citocinas proinflamatorias. Presenta múltiples Signos de Alarma del Grupo B2 según la clasificación MINSAL/OPS: 1) Dolor abdominal intenso y continuo, 2) Vómitos persistentes (5 episodios), 3) Hepatomegalia dolorosa >2 cm, 4) Presión de pulso convergente o estrecha (PAS - PAD = 20 mmHg, signo inminente de choque hipovolémico compensado), y 5) Hemoconcentración severa objetivada por un aumento del hematocrito de más del 34% respecto a su valor basal (51% vs 38%), acompañado de leucopenia y trombocitopenia marcada. Corresponde al Grupo B2 del MINSAL: requiere hospitalización inmediata y reanimación hídrica protocolizada para evitar la progresión al choque por dengue (Grupo C).",
        "differentialDiagnosis": [
          {
            "condition": "Apendicitis Aguda o Colecistitis Aguda Quirúrgica",
            "rulingRationale": "El dolor abdominal en dengue simula abdomen agudo por serositis y edema de pared vesicular, pero la presencia de defervescencia, leucopenia marcada (2,400/mm³), trombocitopenia severa y hemoconcentración ubica el origen en fuga plasmática por dengue, no en infección bacteriana intraabdominal."
          },
          {
            "condition": "Choque Séptico Bacteriano",
            "rulingRationale": "El choque séptico típicamente cursa con leucocitosis con neutrofilia y desviación a la izquierda, proteína C reactiva elevada y foco bacteriano evidente; el dengue en fase crítica cursa con leucopenia y linfocitosis atípica."
          },
          {
            "condition": "Fiebre Tifoidea en 2.ª Semana",
            "rulingRationale": "La fiebre entérica mantiene fiebre continua sostenida en meseta, disociación esfigmotérmica (signo de Faget) y no cursa con hemoconcentración abrupta ni trombocitopenia crítica en fase de defervescencia."
          }
        ],
        "managementPlan": [
          "1. Hospitalizar de inmediato en sala de observación / cuidados intermedios de dengue (Grupo B2).",
          "2. Iniciar expansión hídrica intravenosa con cristaloides isotónicos (Lactato Ringer o Solución Salina Normal al 0.9%) a razón de 10 mL/kg en la primera hora.",
          "3. Reevaluar signos vitales, diuresis y hematocrito al cabo de la 1.ª hora: si el gasto urinario es ≥1 mL/kg/h y la presión de pulso se abre (>20 mmHg), titular líquidos a 5-7 mL/kg/h por 2-4 horas; luego reducir progresivamente a 3-5 mL/kg/h por 2-4 horas y a 2-3 mL/kg/h.",
          "4. Monitoreo estricto del hematocrito cada 12 a 24 horas y diuresis horaria con sonda Foley si persiste oliguria.",
          "5. Suspender la fluidoterapia intravenosa inmediatamente a las 48 horas de la defervescencia o ante signos de recuperación de volemia para evitar el edema agudo de pulmón por sobrecarga hídrica durante la fase de reabsorción.",
          "6. CONTRAINDICAR formalmente antiinflamatorios no esteroideos (ibuprofeno, diclofenaco), ácido acetilsalicílico e inyecciones intramusculares."
        ],
        "therapeuticPlan": [
          "1. Hospitalizar de inmediato en sala de observación / cuidados intermedios de dengue (Grupo B2).",
          "2. Iniciar expansión hídrica intravenosa con cristaloides isotónicos (Lactato Ringer o Solución Salina Normal al 0.9%) a razón de 10 mL/kg en la primera hora.",
          "3. Reevaluar signos vitales, diuresis y hematocrito al cabo de la 1.ª hora: si el gasto urinario es ≥1 mL/kg/h y la presión de pulso se abre (>20 mmHg), titular líquidos a 5-7 mL/kg/h por 2-4 horas; luego reducir progresivamente a 3-5 mL/kg/h por 2-4 horas y a 2-3 mL/kg/h.",
          "4. Monitoreo estricto del hematocrito cada 12 a 24 horas y diuresis horaria con sonda Foley si persiste oliguria.",
          "5. Suspender la fluidoterapia intravenosa inmediatamente a las 48 horas de la defervescencia o ante signos de recuperación de volemia para evitar el edema agudo de pulmón por sobrecarga hídrica durante la fase de reabsorción.",
          "6. CONTRAINDICAR formalmente antiinflamatorios no esteroideos (ibuprofeno, diclofenaco), ácido acetilsalicílico e inyecciones intramusculares."
        ],
        "pedagogicalRationale": "El día más peligroso del dengue es cuando la fiebre desaparece; ahí comienza la fuga capilar y el riesgo de choque hipovolémico por hemoconcentración. No transfundir plaquetas de rutina en dengue solo por ver números bajos (<50,000); los líquidos isotónicos corrigen la hipoperfusión. Las plaquetas se reservan para hemorragia activa incontrolable.",
        "clinicalPearls": [
          "El día más peligroso del dengue es cuando la fiebre desaparece; ahí comienza la fuga capilar y el riesgo de choque hipovolémico por hemoconcentración.",
          "No transfundir plaquetas de rutina en dengue solo por ver números bajos (<50,000); los líquidos isotónicos corrigen la hipoperfusión. Las plaquetas se reservan para hemorragia activa incontrolable."
        ],
        "officialProtocolRef": "Lineamientos Técnicos para la Prevención y Control del Dengue, MINSAL El Salvador / Guías Clínicas de Dengue OPS/OMS."
      },
      {
        "id": "case-mi-04",
        "title": "Insuficiencia Cardíaca Aguda Descompensada Perfil B de Stevenson (Caliente y Húmedo) con Edema Pulmonar",
        "patientProfile": "Mujer de 68 años con hipertensión arterial crónica de larga data y cardiopatía isquémica con FEVI del 38%, acude traída por disnea progresiva.",
        "clinicalPresentation": "Mujer de 68 años con hipertensión arterial crónica de larga data y cardiopatía isquémica con FEVI del 38%, acude traída por disnea progresiva.. Presenta: La paciente consulta por ortopnea de 3 almohadas, disnea paroxística nocturna y aumento de volumen en ambos miembros inferiores de 5 días de evolución.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "La paciente consulta por ortopnea de 3 almohadas, disnea paroxística nocturna y aumento de volumen en ambos miembros inferiores de 5 días de evolución. En las últimas 3 horas la disnea se tornó insoportable en reposo, acompañada de tos con expectoración asalmonada. Al examen físico: sentada con inclinación hacia adelante, sudorosa, taquipneica y con aleteo nasal. PA: 180/105 mmHg, FC: 112 lpm, FR: 30 rpm, SatO2: 86% al aire ambiente. Ingurgitación yugular grado III/IV a 45 grados con reflujo hepatoyugular positivo. Auscultación cardíaca: ritmo de galope por tercer ruido (R3) audible en ápex. Auscultación pulmonar: estertores crepitantes bilaterales húmedos que ascienden hasta los tercios superiores de ambos hemitórax, asociados a sibilancias espiratorias difusas (\"asma cardíaca\"). Edema bilateral con fóvea +++ hasta tercio medio de piernas.",
        "diagnosticReasoning": "La paciente cursa con Insuficiencia Cardíaca Aguda Descompensada manifestada como Edema Agudo de Pulmón cardiogénico hipertensivo. Según la clasificación clínica hemodinámica de Forrester y Stevenson, se cataloga como Perfil B (\"Caliente y Húmedo\"): perfusión tisular periférica preservada (extremidades tibias, pulsos periféricos llenos, sin signos de bajo gasto o choque) combinada con congestión pulmonar y sistémica severa (estertores crepitantes bilaterales, tercer ruido, ortopnea, ingurgitación yugular y edema periférico). El mecanismo fisiopatológico primario en este perfil hipertensivo es la redistribución brusca de volumen intravascular hacia la circulación pulmonar secundaria a un incremento desmedido de la poscarga ventricular izquierda por vasoconstricción sistémica severa. Por tanto, el objetivo terapéutico cardinal e inmediato es la vasodilatación sistémica para disminuir la poscarga y precarga, junto con la descongestión venocapilar pulmonar mediante diuréticos de asa.",
        "stepByStepReasoning": "La paciente cursa con Insuficiencia Cardíaca Aguda Descompensada manifestada como Edema Agudo de Pulmón cardiogénico hipertensivo. Según la clasificación clínica hemodinámica de Forrester y Stevenson, se cataloga como Perfil B (\"Caliente y Húmedo\"): perfusión tisular periférica preservada (extremidades tibias, pulsos periféricos llenos, sin signos de bajo gasto o choque) combinada con congestión pulmonar y sistémica severa (estertores crepitantes bilaterales, tercer ruido, ortopnea, ingurgitación yugular y edema periférico). El mecanismo fisiopatológico primario en este perfil hipertensivo es la redistribución brusca de volumen intravascular hacia la circulación pulmonar secundaria a un incremento desmedido de la poscarga ventricular izquierda por vasoconstricción sistémica severa. Por tanto, el objetivo terapéutico cardinal e inmediato es la vasodilatación sistémica para disminuir la poscarga y precarga, junto con la descongestión venocapilar pulmonar mediante diuréticos de asa.",
        "differentialDiagnosis": [
          {
            "condition": "Crisis Asmática Severa o EPOC Reagudizado",
            "rulingRationale": "Aunque presenta sibilancias espiratorias (\"asma cardíaca\"), la coexistencia de tercer ruido (R3), estertores crepitantes húmedos bilaterales, ingurgitación yugular, hipertensión severa y expectoración asalmonada confirma origen hemodinámico ventricular izquierdo."
          },
          {
            "condition": "Tromboembolismo Pulmonar Agudo",
            "rulingRationale": "Cursa con disnea e hipoxemia pero habitualmente sin estertores crepitantes húmedos bilaterales masivos ni expectoración asalmonada, y el ECG suele mostrar sobrecarga de cavidades derechas en lugar de hipertrofia ventricular izquierda con sobrecarga sistólica."
          },
          {
            "condition": "Neumonía Bacteriana Bilateral Grave",
            "rulingRationale": "Carece de fiebre, síndrome de respuesta inflamatoria sistémica o condensación radiológica localizada; la radiografía de tórax muestra infiltrados en \"alas de mariposa\" con cardiomegalia y líneas B de Kerley."
          }
        ],
        "managementPlan": [
          "1. Posición sentada con piernas colgando para disminuir el retorno venoso al corazón derecho.",
          "2. Soporte ventilatorio no invasivo con ventilación con presión positiva continua (CPAP a 8-10 cmH2O o BiPAP) para reducir el trabajo respiratorio, reclutar alvéolos y disminuir la poscarga del VI.",
          "3. Vasodilatador intravenoso de primera línea: Nitroglicerina sublingual inicial (0.5 mg) seguida de infusión continua intravenosa a 10-20 mcg/min, titulando al alza cada 5-10 minutos según respuesta tensional (meta PAS 130-140 mmHg).",
          "4. Furosemida intravenosa en bolo: 40 a 80 mg IV lenta (o el doble de la dosis oral habitual de la paciente) para promover diuresis y venodilatación temprana.",
          "5. Monitorización continua con oximetría de pulso, ECG continuo y colocación de sonda vesical para cuantificar diuresis horaria estricta.",
          "6. Una vez estabilizada la crisis aguda: optimizar terapia moduladora neurohormonal de la insuficiencia cardíaca con fracción de eyección reducida (cuádruple terapia: IECA/ARNI + Betabloqueador cardioselectivo + Antagonista de mineralocorticoides + iSGLT2)."
        ],
        "therapeuticPlan": [
          "1. Posición sentada con piernas colgando para disminuir el retorno venoso al corazón derecho.",
          "2. Soporte ventilatorio no invasivo con ventilación con presión positiva continua (CPAP a 8-10 cmH2O o BiPAP) para reducir el trabajo respiratorio, reclutar alvéolos y disminuir la poscarga del VI.",
          "3. Vasodilatador intravenoso de primera línea: Nitroglicerina sublingual inicial (0.5 mg) seguida de infusión continua intravenosa a 10-20 mcg/min, titulando al alza cada 5-10 minutos según respuesta tensional (meta PAS 130-140 mmHg).",
          "4. Furosemida intravenosa en bolo: 40 a 80 mg IV lenta (o el doble de la dosis oral habitual de la paciente) para promover diuresis y venodilatación temprana.",
          "5. Monitorización continua con oximetría de pulso, ECG continuo y colocación de sonda vesical para cuantificar diuresis horaria estricta.",
          "6. Una vez estabilizada la crisis aguda: optimizar terapia moduladora neurohormonal de la insuficiencia cardíaca con fracción de eyección reducida (cuádruple terapia: IECA/ARNI + Betabloqueador cardioselectivo + Antagonista de mineralocorticoides + iSGLT2)."
        ],
        "pedagogicalRationale": "En el edema pulmonar agudo hipertensivo, el vasodilatador (nitroglicerina) es tan o más importante que el diurético; abrir la capacitancia venosa y bajar la poscarga aclara los pulmones en minutos. Evitar morfina de rutina en falla cardíaca aguda: se asocia con mayor necesidad de intubación endotraqueal y estancia en cuidados intensivos.",
        "clinicalPearls": [
          "En el edema pulmonar agudo hipertensivo, el vasodilatador (nitroglicerina) es tan o más importante que el diurético; abrir la capacitancia venosa y bajar la poscarga aclara los pulmones en minutos.",
          "Evitar morfina de rutina en falla cardíaca aguda: se asocia con mayor necesidad de intubación endotraqueal y estancia en cuidados intensivos."
        ],
        "officialProtocolRef": "Lineamientos para el Manejo de la Insuficiencia Cardíaca Aguda, MINSAL / Guías ESC de Insuficiencia Cardíaca."
      },
      {
        "id": "case-mi-05",
        "title": "Enfermedad Renal Crónica no tradicional (Nefropatía Mesoamericana) Estadio G3bA1 en Agricultor de Caña",
        "patientProfile": "Hombre de 44 años, jornalero agrícola en cañaverales del Bajo Lempa (Usulután) durante 25 años, remitido a consulta externa por chequeo ocupacional.",
        "clinicalPresentation": "Hombre de 44 años, jornalero agrícola en cañaverales del Bajo Lempa (Usulután) durante 25 años, remitido a consulta externa por chequeo ocupacional.. Presenta: Paciente asintomático, no refiere disnea, edemas ni hematuria.",
        "physicalExam": "PA: 125/80 mmHg, FC: 68 lpm, IMC: 23 kg/m².",
        "labAndImagingData": "Pruebas analíticas de urgencia, biomarcadores y estudios de gabinete documentados en la presentación del caso.",
        "initialVignette": "Paciente asintomático, no refiere disnea, edemas ni hematuria. En los últimos meses nota calambres musculares ocasionales en pantorrillas y nicturia de 2 ocasiones por noche. Sin antecedentes de diabetes mellitus, dislipidemia ni cardiopatía. Toma diclofenaco o ibuprofeno automedicado frecuentemente para mialgias tras jornadas laborales de 10 horas bajo temperaturas de 38 °C con hidratación basada exclusivamente en agua de pozo. Examen físico: PA: 125/80 mmHg, FC: 68 lpm, IMC: 23 kg/m². Sin edemas periféricos, sin estigmas de enfermedad vascular. Fondo de ojo normal, sin retinopatía diabética ni hipertensiva. Laboratorios: Creatinina sérica: 2.1 mg/dL (valor basal hace 3 años: 1.1 mg/dL), Nitrógeno Ureico (BUN): 28 mg/dL, Tasa de Filtración Glomerular estimada por CKD-EPI: 38 mL/min/1.73m² (Estadio G3b). Sodio: 138 mEq/L, Potasio: 3.4 mEq/L, Ácido Úrico: 8.8 mg/dL. Examen general de orina: Densidad: 1.010, sedimento inactivo (0-1 leucocitos/campo, 0 hematíes, sin cilindros celulares). Relación Albúmina/Creatinina en orina al azar (RAC): 18 mg/g (normal <30 mg/g, categoría A1).",
        "diagnosticReasoning": "El cuadro clínico, ocupacional y paraclínico es característico de la Enfermedad Renal Crónica no tradicional (ERCnT) o Nefropatía Mesoamericana, un problema de salud pública de primera magnitud en las comunidades costeras y agrícolas de El Salvador. El paciente presenta un daño renal crónico moderado a severo (Estadio G3b según KDIGO, TFGe 38 mL/min/1.73m²) en ausencia de las causas tradicionales de nefropatía (diabetes mellitus, hipertensión esencial descontrolada o glomerulopatías primarias). Los hallazgos distintivos que apoyan el diagnóstico son: 1) Antecedente laboral de trabajo agrícola prolongado en clima cálido con deshidratación recurrente, 2) Densidad urinaria baja (isostenuria) que evidencia pérdida precoz de la capacidad de concentración tubular renal, 3) Ausencia de proteinuria o albuminuria significativa (RAC normal en categoría A1 <30 mg/g), lo que descarta daño glomerular primario y confirma un patrón de Nefritis Tubulointersticial Crónica con atrofia tubular y fibrosis intersticial, 4) Hipocalemia leve por pérdida tubular de electrolitos, e 5) Hiperuricemia asintomática por disminución del aclaramiento tubular de urato.",
        "stepByStepReasoning": "El cuadro clínico, ocupacional y paraclínico es característico de la Enfermedad Renal Crónica no tradicional (ERCnT) o Nefropatía Mesoamericana, un problema de salud pública de primera magnitud en las comunidades costeras y agrícolas de El Salvador. El paciente presenta un daño renal crónico moderado a severo (Estadio G3b según KDIGO, TFGe 38 mL/min/1.73m²) en ausencia de las causas tradicionales de nefropatía (diabetes mellitus, hipertensión esencial descontrolada o glomerulopatías primarias). Los hallazgos distintivos que apoyan el diagnóstico son: 1) Antecedente laboral de trabajo agrícola prolongado en clima cálido con deshidratación recurrente, 2) Densidad urinaria baja (isostenuria) que evidencia pérdida precoz de la capacidad de concentración tubular renal, 3) Ausencia de proteinuria o albuminuria significativa (RAC normal en categoría A1 <30 mg/g), lo que descarta daño glomerular primario y confirma un patrón de Nefritis Tubulointersticial Crónica con atrofia tubular y fibrosis intersticial, 4) Hipocalemia leve por pérdida tubular de electrolitos, e 5) Hiperuricemia asintomática por disminución del aclaramiento tubular de urato.",
        "differentialDiagnosis": [
          {
            "condition": "Nefropatía Diabética Incipiente",
            "rulingRationale": "La nefropatía diabética se asocia invariablemente a antecedentes de hiperglucemia de larga data, retinopatía concomitante y cursa con micro/macroalbuminuria progresiva, ausente en este paciente con glucemia y fondo de ojo normales."
          },
          {
            "condition": "Nefroangioesclerosis Hipertensiva",
            "rulingRationale": "Requiere antecedentes de hipertensión arterial severa o de larga duración con hipertrofia ventricular izquierda y retinopatía hipertensiva; el paciente es normotenso (PA 125/80 mmHg)."
          },
          {
            "condition": "Glomerulonefritis Crónica Membranosa o Membranoproliferativa",
            "rulingRationale": "Las glomerulonefritis cursan típicamente con sedimento urinario activo (microhematuria, cilindros granulosos o hemáticos) y proteinuria en rango no nefrótico o nefrótico (>1-3.5 g/día), descartadas por el sedimento urinario benigno y RAC normal."
          }
        ],
        "managementPlan": [
          "1. Prohibición terminante y definitiva de antiinflamatorios no esteroideos (AINEs como ibuprofeno, diclofenaco, naproxeno) y cualquier agente nefrotóxico potencial.",
          "2. Plan integral de hidratación ocupacional comunitaria: ingesta obligatoria de al menos 4 a 6 litros de agua potable combinada con soluciones de rehidratación con electrolitos durante las jornadas laborales en el campo, con períodos programados de descanso bajo sombra.",
          "3. Manejo de la hiperuricemia con alopurinol a dosis ajustada a la función renal (100 mg/día) si los niveles séricos de ácido úrico superan 9-10 mg/dL o si presenta artritis gotosa.",
          "4. Corrección de la hipopotasemia con suplementación oral cautelosa de sales de potasio o fomento de dieta con alimentos ricos en potasio, monitorizando niveles séricos trimestralmente.",
          "5. Control metabólico y nutricional conservador: dieta normoproteica (0.8 g/kg/día), restricción moderada de sodio (<2 g/día de sodio elemental) y prevención de la acidosis metabólica con bicarbonato de sodio oral (1 a 2 g/día) si el HCO3 sérico desciende a <22 mEq/L.",
          "6. Seguimiento semestral en la Unidad Comunitaria de Salud Familiar (UCSF) con creatinina sérica estandarizada, electrolitos y proteinuria, planificando la preparación vascular (fístula arteriovenosa) anticipada si la TFGe cae por debajo de 20 mL/min/1.73m²."
        ],
        "therapeuticPlan": [
          "1. Prohibición terminante y definitiva de antiinflamatorios no esteroideos (AINEs como ibuprofeno, diclofenaco, naproxeno) y cualquier agente nefrotóxico potencial.",
          "2. Plan integral de hidratación ocupacional comunitaria: ingesta obligatoria de al menos 4 a 6 litros de agua potable combinada con soluciones de rehidratación con electrolitos durante las jornadas laborales en el campo, con períodos programados de descanso bajo sombra.",
          "3. Manejo de la hiperuricemia con alopurinol a dosis ajustada a la función renal (100 mg/día) si los niveles séricos de ácido úrico superan 9-10 mg/dL o si presenta artritis gotosa.",
          "4. Corrección de la hipopotasemia con suplementación oral cautelosa de sales de potasio o fomento de dieta con alimentos ricos en potasio, monitorizando niveles séricos trimestralmente.",
          "5. Control metabólico y nutricional conservador: dieta normoproteica (0.8 g/kg/día), restricción moderada de sodio (<2 g/día de sodio elemental) y prevención de la acidosis metabólica con bicarbonato de sodio oral (1 a 2 g/día) si el HCO3 sérico desciende a <22 mEq/L.",
          "6. Seguimiento semestral en la Unidad Comunitaria de Salud Familiar (UCSF) con creatinina sérica estandarizada, electrolitos y proteinuria, planificando la preparación vascular (fístula arteriovenosa) anticipada si la TFGe cae por debajo de 20 mL/min/1.73m²."
        ],
        "pedagogicalRationale": "La Nefropatía Mesoamericana es una nefritis tubulointersticial: no espere encontrar proteinuria masiva ni diabetes. Si un agricultor joven de la costa salvadoreña tiene creatinina alta con orina limpia de proteínas, sospeche ERCnT. Los AINEs en combinación con deshidratación y calor extenuante actúan como un acelerador fulminante del deterioro renal en la ERCnT.",
        "clinicalPearls": [
          "La Nefropatía Mesoamericana es una nefritis tubulointersticial: no espere encontrar proteinuria masiva ni diabetes. Si un agricultor joven de la costa salvadoreña tiene creatinina alta con orina limpia de proteínas, sospeche ERCnT.",
          "Los AINEs en combinación con deshidratación y calor extenuante actúan como un acelerador fulminante del deterioro renal en la ERCnT."
        ],
        "officialProtocolRef": "Plan Nacional de Prevención, Diagnóstico Precoz y Tratamiento de la Enfermedad Renal Crónica, MINSAL / Instituto Nacional de Salud (INS) de El Salvador."
      }
    ]
  },
  {
    "id": "unit-cirugia-general",
    "specialtyId": "cirugia_general",
    "specialtyName": "Cirugía General",
    "title": "Cirugía General y Trauma: Abdomen Agudo Quirúrgico, Apendicitis Complicada y Cirugía de Control de Daños (ATLS)",
    "substantiveTheory": "El examen de posgrado quirúrgico (ENAR) evalúa con especial énfasis la capacidad del médico para diagnosticar con prontitud el abdomen agudo que requiere resolución quirúrgica de urgencia y aplicar con rigor los principios contemporáneos del Soporte Vital Avanzado en Trauma (ATLS 10.ª Edición).\n\n1. Abdomen Agudo Quirúrgico y Semiología Peritoneal:\nEl dolor abdominal agudo de origen quirúrgico se divide según su fisiopatología en síndromes: inflamatorio/infeccioso (apendicitis, colecistitis, diverticulitis), obstructivo (bridas, hernias encarceladas, vólvulos), perforativo (úlcera péptica gastroduodenal perforada, perforación tífica o diverticular), vascular/isquémico (isquemia mesentérica aguda, trombosis venosa mesentérica) y hemorrágico (embarazo ectópico roto, rotura de aneurisma aórtico o traumatismo hepático/esplénico).\nLa presencia de irritación peritoneal parietal es el indicador cardinal de indicación quirúrgica. Se manifiesta semiológicamente por:\n- Signo de Blumberg: dolor intenso provocado por la descompresión brusca de la pared abdominal tras palpación profunda en fosa ilíaca derecha o focalizada.\n- Signo de Guéneau de Mussy: dolor a la descompresión brusca generalizado en todo el abdomen, reflejo de peritonitis bacteriana o química difusa.\n- Defensa muscular involuntaria o \"abdomen en tabla\": contractura tónica e involuntaria de los músculos rectos abdominales como respuesta al contacto del peritoneo parietal con exudado inflamatorio o contenido entérico libre.\nCriterios formales de intervención quirúrgica inmediata (laparotomía o laparoscopía diagnóstica de urgencia): presencia de neumoperitoneo demostrado en radiografía de tórax en bipedestación o TAC (aire libre subdiafragmático que confirma perforación de víscera hueca), peritonitis generalizada con choque séptico, obstrucción intestinal mecánica con datos de estrangulación tisular, masa abdominal dolorosa pulsátil expansiva en paciente en choque, y abdomen agudo traumático con inestabilidad hemodinámica y líquido libre en ultrasonido FAST.\n\n2. Apendicitis Aguda, Escala de Alvarado y Manejo de Formas Complicadas:\nLa apendicitis aguda es la urgencia quirúrgica no traumática más frecuente en el adulto joven. Fisiopatología: obstrucción de la luz apendicular (por fecalito en el 35% de los adultos o hiperplasia linfoide en niños y adolescentes), proliferación bacteriana intraluminal, hipersecreción mucosa con incremento de la presión intraluminal, colapso del drenaje venoso y linfático (fase catarral o congestiva), isquemia y necrosis transmural de la pared con invasión bacteriana a la capa muscular (fase flegmonosa o supurativa), infarto tisular y gangrena (fase gangrenosa), y finalmente rotura de la pared apendicular con liberación de bacterias y pus a la cavidad peritoneal (fase perforada).\nEscala de Alvarado (nemotecnia MANTRELS, 10 puntos):\n- Síntomas: Migración del dolor hacia FID (1 pt), Anorexia o cetonuria (1 pt), Náuseas o vómitos (1 pt).\n- Signos: Dolor en fosa ilíaca derecha a la palpación (2 pts), Dolor al rebote en FID / Blumberg (1 pt), Elevación térmica ≥37.3 °C (1 pt).\n- Laboratorio: Leucocitosis >10,000/mm³ (2 pts), Neutrofilia >75% (1 pt).\nInterpretación clínica:\n- 1 a 4 puntos: Baja probabilidad; descartar apendicitis y manejo ambulatorio con vigilancia de signos de alarma.\n- 5 a 6 puntos: Sospecha intermedia; observación hospitalaria durante 6 a 12 horas con reevaluación seriada o confirmación diagnóstica por ultrasonografía abdominal en niños/embarazadas o Tomografía Computarizada (TAC) contrastada en adultos.\n- 7 a 8 puntos: Alta probabilidad de apendicitis; indicación de preparación quirúrgica para apendicectomía.\n- 9 a 10 puntos: Diagnóstico prácticamente certero; traslado inmediato a quirófano sin requerir estudios radiológicos adicionales que demoren el procedimiento.\nProfilaxis antibiótica: administración de una dosis intravenosa única 30 a 60 minutos antes de la incisión quirúrgica que cubra flora entérica gramnegativa y anaerobia (cefalosporina de 2.ª generación como cefazolina + metronidazol o ceftriaxona 1g + metronidazol 500 mg IV). En apendicitis no complicada, los antibióticos se suspenden en el postoperatorio inmediato; en apendicitis perforada con peritonitis, se prolonga el esquema terapéutico terapéutico por 3 a 5 días hasta resolución de la respuesta inflamatoria sistémica.\nPlastrón o flemón apendicular: masa palpable en FID con evolución >5-7 días rodeada por epiplón y asas intestinales sin peritonitis generalizada. El manejo inicial de elección es CONSERVADOR (no quirúrgico de entrada): reposo digestivo, hidratación parenteral y cobertura antibiótica de amplio espectro por 7 a 14 días. Si existe un absceso periapendicular organizado >3 cm, se indica drenaje percutáneo guiado por ultrasonido o TAC. La apendicectomía diferida \"de intervalo\" se realiza 8 a 12 semanas después.\n\n3. Obstrucción Intestinal Mecánica y Diferenciación Radiológica:\nLa oclusión mecánica del intestino delgado tiene como causa más frecuente las adherencias y bridas posquirúrgicas (60-70%), seguidas por las hernias incarceradas inguinales o femorales (15-20%) y neoplasias (5%). En el intestino grueso, el cáncer colorrectal encabeza la etiología (60%), seguido por el vólvulo de sigmoides (15-20%) y la enfermedad diverticular complicada.\nEn la radiografía de abdomen simple en bipedestación y decúbito supino:\n- Obstrucción de intestino delgado: dilatación central de asas delgadas (>3 cm de diámetro), válvulas conniventes o pliegues circulares de Kerckring que atraviesan completamente la luz del asa de pared a pared, niveles hidroaéreos en patrón escalonado (\"en escalera\") y escasez o ausencia de gas en el marco colónico distal.\n- Vólvulo de sigmoides: dilatación masiva del asa sigmoidea que asciende desde la fosa ilíaca izquierda hacia el cuadrante superior derecho, con pérdida de las haustras y presencia del signo patognomónico del \"grano de café\" o asa en omega con doble nivel hidroaéreo.\nManejo médico inicial: reposo intestinal absoluto (NPO), colocación inmediata de sonda nasogástrica (Levin) con drenaje por gravedad o aspiración suave para descompresión gástrica y prevención de broncoaspiración, resucitación vigorosa con cristaloides isotónicos con corrección de pérdidas de potasio y cloro, y monitoreo estricto de diuresis con sonda Foley. Signos de estrangulación intestinal que obligan a laparotomía inmediata: dolor continuo e intratable desproporcionado, fiebre, taquicardia persistente no explicada por deshidratación, leucocitosis con desviación a la izquierda, acidosis metabólica con hiperlactatemia y signos de irritación peritoneal focal.\n\n4. Politraumatizado y Protocolo ATLS 10.ª Edición:\nLa atención del trauma grave sigue la secuencia estricta ABCDE:\n- A (Airway): Vía aérea permeable con control estricto de la columna cervical con collarín rígido semirrígido.\n- B (Breathing): Ventilación y oxigenación; descartar patologías que amenazan la vida de inmediato: neumotórax a tensión (descompresión inmediata con catéter 14-16G en 5.° espacio intercostal línea medioaxilar o 2.° espacio medioclavicular antes de cualquier radiografía), neumotórax abierto y hemotórax masivo (>1500 mL).\n- C (Circulation): Evaluación de la perfusión tisular y control activo de hemorragias externas compresivas.\nClases de Choque Hemorrágico ATLS:\n- Clase I: Pérdida <15% (<750 mL). FC normal (<100), PA normal, FR 14-20, diuresis >30 mL/h. Manejo: no requiere transfusión; cristaloides si precisa.\n- Clase II: Pérdida 15-30% (750-1500 mL). Taquicardia (100-120 lpm), PA normal o disminuye presión de pulso, FR 20-30, oliguria leve (20-30 mL/h). Manejo: cristaloides isotónicos.\n- Clase III: Pérdida 30-40% (1500-2000 mL). Taquicardia marcada (120-140 lpm), HIPOTENSIÓN sistólica franca, taquipnea (30-40 rpm), oliguria marcada (5-15 mL/h), paciente ansioso o confuso. Manejo: cristaloides más activación de hemoderivados (concentrados de glóbulos rojos empacados).\n- Clase IV: Pérdida >40% (>2000 mL). FC >140 lpm (o bradicardia pre-paro), hipotensión extrema (PAS <70 o indetectable), anuria (<5 mL/h), letargo o inconsciencia. Manejo: Protocolo de Transfusión Masiva inmediato.\nEstrategias modernas de reanimación en trauma:\n- Hipotensión permisiva: mantener una presión arterial sistólica meta de 80 a 90 mmHg (PAM 50-60 mmHg) en pacientes con hemorragia activa sin traumatismo craneoencefálico, evitando sobrecargar de líquidos que desprendan los coágulos formados.\n- Ácido Tranexámico: administración precoz de 1 g IV en bolo en 10 minutos dentro de las primeras 3 horas del trauma, seguido de infusión de 1 g para 8 horas (evidencia CRASH-2), reduciendo significativamente la mortalidad por hemorragia.\n- Protocolo de Transfusión Masiva (PTM): administración balanceada 1:1:1 de Glóbulos Rojos Empacados, Plasma Fresco Congelado y Plaquetas por aféresis, evitando la infusión masiva de cristaloides que precipita coagulopatía dilucional y acidosis.\n\n5. Cirugía de Control de Daños (Damage Control Surgery):\nConcepto quirúrgico diseñado para interrumpir la \"Tríada de la Muerte\" letal: Hipotermia (<35 °C), Acidosis Metabólica (pH <7.20) y Coagulopatía refractaria.\nConsta de tres fases secuenciales:\n- Fase 1 (Quirófano, Laparotomía abreviada en <60-90 minutos): se limitan los gestos quirúrgicos al control estricto de la hemorragia (empaquetamiento perihepático o pélvico con compresas quirúrgicas a presión, shunts vasculares temporales) y control de la contaminación gastrointestinal (ligadura rápida o engrapado de asas perforadas sin realizar anastomosis primarias que fracasarían). El abdomen se deja abierto sin cerrar la aponeurosis mediante una técnica de vacío temporal (bolsa de Bogotá o sistema de presión negativa tipo VAC) para prevenir el síndrome compartimental abdominal (presión intraabdominal >20 mmHg con disfunción orgánica).\n- Fase 2 (Unidad de Cuidados Intensivos): reanimación fisiológica intensiva durante 24 a 48 horas orientada a recalentamiento activo del paciente, corrección de la acidosis mediante soporte hemodinámico, reposición de factores de coagulación, plaquetas y fibrinógeno guiada por tromboelastometría o pruebas convencionales, y estabilización ventilatoria.\n- Fase 3 (Second-Look o Reexploración programada a las 24-48 horas): retorno a sala de operaciones con el paciente normotérmico, sin acidosis y con coagulación restablecida para realizar el desempaquetamiento cauteloso de las compresas, revisión de hemostasia, resección y anastomosis intestinal definitiva, y cierre fascial primario o diferido de la pared abdominal.",
    "clinicalPearls": [
      "En apendicitis aguda en varón joven con cuadro clínico clásico (cronología de Murphy y Alvarado ≥7), no demorar la apendicectomía con estudios tomográficos innecesarios que retrasan el tratamiento.",
      "El neumotórax a tensión es un diagnóstico 100% clínico: NUNCA esperar una radiografía de tórax; la descompresión con aguja gruesa salva la vida inmediatamente.",
      "En trauma grave con choque grado IV, aplique de inmediato el Protocolo de Transfusión Masiva en proporción 1:1:1 (CGR:PFC:Plaquetas) y Ácido Tranexámico 1g en bolo dentro de las primeras 3 horas.",
      "En colecistitis aguda litiásica según Guías de Tokio TG18, el ultrasonido con signo de Murphy sonográfico y engrosamiento de pared vesicular >4 mm define el diagnóstico para colecistectomía laparoscópica temprana <72 horas.",
      "En obstrucción intestinal mecánica con dolor continuo, fiebre, taquicardia y leucocitosis, sospechar sufrimiento de asa/estrangulación e indicar laparotomía urgente sin demoras."
    ],
    "keyClinicalProtocols": [
      {
        "protocolName": "Soporte Vital Avanzado en Trauma (ATLS 10.ª Edición)",
        "summary": "Secuencia sistemática ABCDE; descompresión inmediata con aguja del neumotórax a tensión; clasificación del choque hemorrágico clases I a IV; hipotensión permisiva (meta PAS 80-90 mmHg); ácido tranexámico 1g (<3h); reanimación hemostática 1:1:1.",
        "institution": "American College of Surgeons / Red Hospitalaria MINSAL"
      },
      {
        "protocolName": "Guía Clínica de Abdomen Agudo y Escala de Alvarado",
        "summary": "Semiología de irritación peritoneal (Blumberg, defensa voluntaria vs involuntaria); cálculo de puntaje Alvarado; profilaxis antibiótica preoperatoria única; criterios de manejo quirúrgico vs conservador en plastrón.",
        "institution": "Normas del Servicio de Cirugía General, Hospital Nacional Rosales"
      },
      {
        "protocolName": "Manejo de la Obstrucción Intestinal Mecánica",
        "summary": "Descompresión nasogástrica inmediata con sonda Levin; reposición hidroelectrolítica; evaluación de signos de estrangulación (fiebre, taquicardia, peritonismo, acidosis láctica) para laparotomía de urgencia.",
        "institution": "Sabiston Tratado de Cirugía / Protocolos Quirúrgicos ISSS"
      },
      {
        "protocolName": "Estrategia de Cirugía de Control de Daños (Damage Control)",
        "summary": "Prevención de la Tríada de la Muerte (acidosis, hipotermia, coagulopatía); laparotomía abreviada <60-90 min con packing y abdomen abierto tipo bolsa de Bogotá; UCI de reanimación y reintervención Second-Look a las 24-48h.",
        "institution": "Hospital de Traumatología y Cirugía de Emergencia MINSAL"
      },
      {
        "protocolName": "Criterios de Tokio (TG18) para Colecistitis Aguda",
        "summary": "Diagnóstico ecográfico y clínico de colecistitis litiásica; estratificación de severidad Grados I, II y III; momento óptimo de la colecistectomía laparoscópica temprana (<72h) y antibioticoterapia.",
        "institution": "Guías de Tokio TG18 / MINSAL"
      }
    ],
    "solvedClinicalCases": [
      {
        "id": "case-cg-01",
        "title": "Apendicitis Aguda Perforada con Peritonitis Localizada en Fosa Ilíaca Derecha (Alvarado 9)",
        "patientProfile": "Hombre de 23 años, albañil, sin antecedentes médicos ni quirúrgicos, acude al servicio de urgencias por dolor abdominal intenso.",
        "clinicalPresentation": "Hombre de 23 años, albañil, sin antecedentes médicos ni quirúrgicos, acude al servicio de urgencias por dolor abdominal intenso.. Presenta: El paciente refiere dolor abdominal de 36 horas de evolución que inició de manera insidiosa y sorda en el mesogastrio, asociándose a náuseas y vómitos biliosos en 2 ocasiones y anorexia total.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "El paciente refiere dolor abdominal de 36 horas de evolución que inició de manera insidiosa y sorda en el mesogastrio, asociándose a náuseas y vómitos biliosos en 2 ocasiones y anorexia total. A las 14 horas de evolución, el dolor migró y se localizó intensamente en la fosa ilíaca derecha. En las últimas 6 horas el dolor se volvió insoportable, continuo y pulsátil, agregándose sensación febril con escalofríos. Al examen físico: facie dolorosa, actitud antiálgica con cadera derecha flexionada. PA: 115/75 mmHg, FC: 104 lpm, FR: 22 rpm, Temp axilar: 38.4 °C. Abdomen plano, con ruidos hidroaéreos marcadamente disminuidos. A la palpación: dolor exquisito en punto de McBurney con contractura muscular involuntaria localizada en FID, signo de Blumberg francamente positivo, signo de Rovsing positivo y maniobra del psoas positivo al extender el miembro inferior derecho. Hemograma: Leucocitosis de 16,800/mm³ con 86% de neutrófilos y 6% de bandas (abastonados).",
        "diagnosticReasoning": "El cuadro clínico describe la secuencia cronológica de Murphy clásica (dolor periumbilical visceral que migra y se localiza en FID somático, seguido de anorexia, náuseas y vómitos). Al aplicar la Escala de Alvarado: Migración (1 pt), Anorexia (1 pt), Náuseas/Vómitos (1 pt), Dolor en FID (2 pts), Rebote positivo (1 pt), Fiebre ≥37.3 (1 pt), Leucocitosis >10,000 (2 pts) y Neutrofilia >75% (1 pt), alcanzando una puntuación total de 10 puntos (o al menos 9), lo que confiere certeza diagnóstica de apendicitis aguda. La evolución de 36 horas con fiebre alta de 38.4 °C, contractura muscular involuntaria y bandas aumentadas indica complicación hacia necrosis parietal y perforación con peritonitis purulenta localizada. En un varón joven con Alvarado ≥9 no se requiere TAC ni retrasos diagnósticos; la conducta es la apendicectomía inmediata con lavado peritoneal y cobertura antibiótica terapéutica.",
        "stepByStepReasoning": "El cuadro clínico describe la secuencia cronológica de Murphy clásica (dolor periumbilical visceral que migra y se localiza en FID somático, seguido de anorexia, náuseas y vómitos). Al aplicar la Escala de Alvarado: Migración (1 pt), Anorexia (1 pt), Náuseas/Vómitos (1 pt), Dolor en FID (2 pts), Rebote positivo (1 pt), Fiebre ≥37.3 (1 pt), Leucocitosis >10,000 (2 pts) y Neutrofilia >75% (1 pt), alcanzando una puntuación total de 10 puntos (o al menos 9), lo que confiere certeza diagnóstica de apendicitis aguda. La evolución de 36 horas con fiebre alta de 38.4 °C, contractura muscular involuntaria y bandas aumentadas indica complicación hacia necrosis parietal y perforación con peritonitis purulenta localizada. En un varón joven con Alvarado ≥9 no se requiere TAC ni retrasos diagnósticos; la conducta es la apendicectomía inmediata con lavado peritoneal y cobertura antibiótica terapéutica.",
        "differentialDiagnosis": [
          {
            "condition": "Adenitis Mesentérica Aguda",
            "rulingRationale": "Frecuente en niños y adolescentes tras infección respiratoria viral reciente; cursa con ganglios aumentados y el dolor rara vez produce contractura involuntaria en tabla ni peritonismo franco con leucocitosis con desviación a la izquierda tan marcada."
          },
          {
            "condition": "Diverticulitis de Meckel Complicada",
            "rulingRationale": "Presenta un cuadro clínico indistinguible preoperatoriamente de apendicitis aguda; la exploración intraoperatoria del íleon distal a 60-100 cm de la válvula ileocecal permite identificar el divertículo si el apéndice fuera normal."
          },
          {
            "condition": "Litiasis Ureteral Derecha Complicada con Infección",
            "rulingRationale": "El cólico renoureteral cursa con dolor cólico paroxístico irradiado a genitales externos, puñopercusión lumbar positiva y micro/macrohematuria en el examen de orina, sin Blumberg ni migración típica de Murphy."
          }
        ],
        "managementPlan": [
          "1. Nada por vía oral (NPO) estricto y reposición hidroelectrolítica con solución salina normal al 0.9% a 150-200 mL/h.",
          "2. Iniciar esquema antibiótico terapéutico intravenoso para cubrir flora entérica y anaerobia: Ceftriaxona 1 g IV cada 12 horas más Metronidazol 500 mg IV cada 8 horas (o Ciprofloxacino + Metronidazol en alérgicos a betalactámicos).",
          "3. Analgesia intravenosa reglada con AINEs o paracetamol IV (la evidencia actual demuestra que la analgesia adecuada no oscurece los signos peritoneales ni retrasa la decisión quirúrgica).",
          "4. Traslado a quirófano para apendicectomía de urgencia (por vía laparoscópica o incisión de Rocky-Davis / McBurney ampliada según experiencia quirúrgica).",
          "5. En el intraoperatorio: aspiración de exudado purulento, ligadura de la base apendicular, hemostasia rigurosa del mesoapéndice, lavado de la cavidad con suero fisiológico tibio y colocación de drenaje tubular cerrado (Jackson-Pratt) si existe lecho purulento necrótico mal delimitado.",
          "6. Continuar antibióticos terapéuticos postoperatorios por 3 a 5 días hasta resolución de la leucocitosis y afebrilidad durante 24 horas."
        ],
        "therapeuticPlan": [
          "1. Nada por vía oral (NPO) estricto y reposición hidroelectrolítica con solución salina normal al 0.9% a 150-200 mL/h.",
          "2. Iniciar esquema antibiótico terapéutico intravenoso para cubrir flora entérica y anaerobia: Ceftriaxona 1 g IV cada 12 horas más Metronidazol 500 mg IV cada 8 horas (o Ciprofloxacino + Metronidazol en alérgicos a betalactámicos).",
          "3. Analgesia intravenosa reglada con AINEs o paracetamol IV (la evidencia actual demuestra que la analgesia adecuada no oscurece los signos peritoneales ni retrasa la decisión quirúrgica).",
          "4. Traslado a quirófano para apendicectomía de urgencia (por vía laparoscópica o incisión de Rocky-Davis / McBurney ampliada según experiencia quirúrgica).",
          "5. En el intraoperatorio: aspiración de exudado purulento, ligadura de la base apendicular, hemostasia rigurosa del mesoapéndice, lavado de la cavidad con suero fisiológico tibio y colocación de drenaje tubular cerrado (Jackson-Pratt) si existe lecho purulento necrótico mal delimitado.",
          "6. Continuar antibióticos terapéuticos postoperatorios por 3 a 5 días hasta resolución de la leucocitosis y afebrilidad durante 24 horas."
        ],
        "pedagogicalRationale": "En un varón joven con clínica típica y Alvarado ≥7-9, no demore la cirugía pidiendo TAC o ecografía; cada hora de retraso aumenta exponencialmente la tasa de perforación apendicular. La apendicitis no complicada solo requiere una dosis preoperatoria de antibiótico; la perforada con peritonitis requiere esquema terapéutico continuo por 3 a 5 días.",
        "clinicalPearls": [
          "En un varón joven con clínica típica y Alvarado ≥7-9, no demore la cirugía pidiendo TAC o ecografía; cada hora de retraso aumenta exponencialmente la tasa de perforación apendicular.",
          "La apendicitis no complicada solo requiere una dosis preoperatoria de antibiótico; la perforada con peritonitis requiere esquema terapéutico continuo por 3 a 5 días."
        ],
        "officialProtocolRef": "Guías de Manejo de Apendicitis Aguda, Sociedad de Cirugía de El Salvador / Schwartz: Principios de Cirugía, 11.ª Ed."
      },
      {
        "id": "case-cg-02",
        "title": "Obstrucción Intestinal Mecánica por Bridas con Sufrimiento de Asa y Estrangulación",
        "patientProfile": "Mujer de 54 años con antecedente de histerectomía abdominal y apendicectomía hace 10 años, ingresa por dolor abdominal y distensión.",
        "clinicalPresentation": "Mujer de 54 años con antecedente de histerectomía abdominal y apendicectomía hace 10 años, ingresa por dolor abdominal y distensión.. Presenta: La paciente consulta por dolor abdominal cólico intenso de 48 horas de evolución, acompañado de distensión abdominal progresiva, náuseas y vómitos fecaloideos copiosos en las últimas 12 horas.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "La paciente consulta por dolor abdominal cólico intenso de 48 horas de evolución, acompañado de distensión abdominal progresiva, náuseas y vómitos fecaloideos copiosos en las últimas 12 horas. Refiere ausencia total de expulsión de gases y heces desde hace dos días. En las últimas 4 horas el dolor cambió de carácter: de cólico intermitente pasó a ser continuo, lacerante e insoportable. Al examen físico: deshidratada, taquicárdica y diaforética. PA: 100/60 mmHg, FC: 118 lpm, FR: 26 rpm, Temp: 38.1 °C. Abdomen visiblemente distendido, timpánico a la percusión, con cicatriz de laparotomía media infraumbilical previa. A la auscultación: ruidos hidroaéreos ausentes (silencio abdominal). A la palpación: dolor intenso difuso con defensa involuntaria y rebote positivo focalizado en fosa ilíaca izquierda y mesogastrio. Hemograma: Leucocitos 17,200/mm³ con 88% de neutrófilos, lactato sérico elevado a 3.4 mmol/L (normal <2.0). Radiografía de abdomen: asas delgadas dilatadas con diámetro de 4.8 cm, válvulas conniventes y múltiples niveles hidroaéreos en escalera con ausencia completa de gas en recto y marco colónico.",
        "diagnosticReasoning": "La paciente presenta una Obstrucción Intestinal Mecánica del Intestino Delgado secundaria a adherencias y bridas posquirúrgicas peritoneales. La fase inicial cursa con dolor cólico y vómitos fecaloideos por estasis retrógrada. Sin embargo, la modificación reciente del dolor hacia un patrón continuo y severo, asociado a taquicardia desproporcionada, fiebre (38.1 °C), silencio abdominal auscultatorio, peritonismo localizado con Blumberg positivo y elevación del lactato sérico (3.4 mmol/L) y leucocitosis con neutrofilia, constituye el diagnóstico inequívoco de Oclusión Mecánica con Estrangulación y Sufrimiento de Asa Intestinal (isquemia mesentérica transmural). En la estrangulación, el pedículo vascular del asa herniada bajo la brida se colapsa, produciendo trombosis venosa, necrosis parietal y riesgo inminente de perforación y choque séptico. Esta condición CONTRAINDICA el manejo médico conservador y exige laparotomía exploradora de urgencia sin demora.",
        "stepByStepReasoning": "La paciente presenta una Obstrucción Intestinal Mecánica del Intestino Delgado secundaria a adherencias y bridas posquirúrgicas peritoneales. La fase inicial cursa con dolor cólico y vómitos fecaloideos por estasis retrógrada. Sin embargo, la modificación reciente del dolor hacia un patrón continuo y severo, asociado a taquicardia desproporcionada, fiebre (38.1 °C), silencio abdominal auscultatorio, peritonismo localizado con Blumberg positivo y elevación del lactato sérico (3.4 mmol/L) y leucocitosis con neutrofilia, constituye el diagnóstico inequívoco de Oclusión Mecánica con Estrangulación y Sufrimiento de Asa Intestinal (isquemia mesentérica transmural). En la estrangulación, el pedículo vascular del asa herniada bajo la brida se colapsa, produciendo trombosis venosa, necrosis parietal y riesgo inminente de perforación y choque séptico. Esta condición CONTRAINDICA el manejo médico conservador y exige laparotomía exploradora de urgencia sin demora.",
        "differentialDiagnosis": [
          {
            "condition": "Obstrucción Mecánica Simple no Complicada por Bridas",
            "rulingRationale": "La obstrucción simple cursa con dolor cólico intermitente que coincide con ruidos hidroaéreos metálicos o de lucha (\"timbre metálico\"), sin fiebre, sin defensa involuntaria continua, sin hiperlactatemia ni peritonismo."
          },
          {
            "condition": "Íleo Paralítico o Adinámico Metabólico",
            "rulingRationale": "El íleo cursa con distensión global indolora o con molestia sorda, silencio abdominal difuso pero sin niveles hidroaéreos en escalera organizados y sin signos de respuesta inflamatoria sistémica severa con isquemia tisular."
          },
          {
            "condition": "Isquemia Mesentérica Aguda Embólica",
            "rulingRationale": "Típicamente ocurre en pacientes ancianos con fibrilación auricular previa sin antecedentes quirúrgicos, con dolor agudo catastrófico y desproporción clínica inicial respecto a un examen físico casi normal."
          }
        ],
        "managementPlan": [
          "1. Colocación inmediata de sonda nasogástrica (Levin 16-18 Fr) conectada a bolsa colectora por gravedad para descompresión gástrica urgente y prevención de aspiración pulmonar durante la inducción anestésica.",
          "2. Resucitación hídrica intensiva con Solución Hartmann o Solución Salina Normal a 1000 mL en la primera hora, continuando a 200-300 mL/h para corregir el secuestro hídrico en tercer espacio.",
          "3. Colocación de sonda vesical Foley con bolsa recolectora para medición de diuresis horaria estricta (meta ≥0.5 mL/kg/h).",
          "4. Iniciar antibioticoterapia de amplio espectro intravenosa para sepsis intraabdominal: Ceftriaxona 1 g IV cada 12 horas más Metronidazol 500 mg IV cada 8 horas (o Piperacilina/Tazobactam 4.5 g IV cada 6 horas).",
          "5. Laparotomía exploradora de urgencia inmediata: incisión media xifopubiana, lisis cuidadosa de bridas obstructivas, evaluación de la viabilidad del asa intestinal isquémica (color, peristalsis y pulso en borde mesentérico tras 10 minutos de envoltura en compresas tibias al 100% de FiO2).",
          "6. Si el asa es inviable (necrosis transmural, pared negra opaca, sin sangrado ni motilidad): resección del segmento intestinal desvitalizado con anastomosis primaria término-terminal o enteroestomía según la estabilidad hemodinámica y grado de peritonitis."
        ],
        "therapeuticPlan": [
          "1. Colocación inmediata de sonda nasogástrica (Levin 16-18 Fr) conectada a bolsa colectora por gravedad para descompresión gástrica urgente y prevención de aspiración pulmonar durante la inducción anestésica.",
          "2. Resucitación hídrica intensiva con Solución Hartmann o Solución Salina Normal a 1000 mL en la primera hora, continuando a 200-300 mL/h para corregir el secuestro hídrico en tercer espacio.",
          "3. Colocación de sonda vesical Foley con bolsa recolectora para medición de diuresis horaria estricta (meta ≥0.5 mL/kg/h).",
          "4. Iniciar antibioticoterapia de amplio espectro intravenosa para sepsis intraabdominal: Ceftriaxona 1 g IV cada 12 horas más Metronidazol 500 mg IV cada 8 horas (o Piperacilina/Tazobactam 4.5 g IV cada 6 horas).",
          "5. Laparotomía exploradora de urgencia inmediata: incisión media xifopubiana, lisis cuidadosa de bridas obstructivas, evaluación de la viabilidad del asa intestinal isquémica (color, peristalsis y pulso en borde mesentérico tras 10 minutos de envoltura en compresas tibias al 100% de FiO2).",
          "6. Si el asa es inviable (necrosis transmural, pared negra opaca, sin sangrado ni motilidad): resección del segmento intestinal desvitalizado con anastomosis primaria término-terminal o enteroestomía según la estabilidad hemodinámica y grado de peritonitis."
        ],
        "pedagogicalRationale": "En obstrucción intestinal, el cambio de dolor cólico a dolor continuo fijo, asociado a fiebre, taquicardia y lactato elevado, es el grito de auxilio del asa intestinal estrangulándose: no espere más y opere. La descompresión con sonda nasogástrica nunca debe omitirse antes de entrar a quirófano: previene la neumonía aspirativa mortal por vómito fecaloideo en la inducción.",
        "clinicalPearls": [
          "En obstrucción intestinal, el cambio de dolor cólico a dolor continuo fijo, asociado a fiebre, taquicardia y lactato elevado, es el grito de auxilio del asa intestinal estrangulándose: no espere más y opere.",
          "La descompresión con sonda nasogástrica nunca debe omitirse antes de entrar a quirófano: previene la neumonía aspirativa mortal por vómito fecaloideo en la inducción."
        ],
        "officialProtocolRef": "Lineamientos para el Manejo del Abdomen Agudo Obstructivo, Hospital Nacional Rosales / Sabiston Tratado de Cirugía, 21.ª Ed."
      },
      {
        "id": "case-cg-03",
        "title": "Vólvulo de Sigmoides Complicado en Paciente Geriátrico con Megacolon Andino/Chagásico",
        "patientProfile": "Hombre de 74 años, originario de zona rural de Chalatenango, con historia de constipación crónica habitual, ingresa por dolor y distensión abdominal masiva.",
        "clinicalPresentation": "Hombre de 74 años, originario de zona rural de Chalatenango, con historia de constipación crónica habitual, ingresa por dolor y distensión abdominal masiva.. Presenta: El paciente es llevado a la emergencia por presentar dolor abdominal difuso progresivo de 3 días de evolución acompañado de marcada distensión abdominal e imposibilidad para evacuar heces y expulsar flatos.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "El paciente es llevado a la emergencia por presentar dolor abdominal difuso progresivo de 3 días de evolución acompañado de marcada distensión abdominal e imposibilidad para evacuar heces y expulsar flatos. Refiere que en las últimas 6 horas el dolor se intensificó notablemente, volviéndose continuo. Al examen físico: anciano adelgazado, confuso, deshidratado y taquipneico. PA: 90/55 mmHg, FC: 112 lpm, FR: 28 rpm, Temp: 37.9 °C. Abdomen masivamente distendido (\"en cúpula\"), asimétrico con mayor prominencia hacia el cuadrante superior derecho, extraordinariamente timpánico a la percusión con tono metálico. A la palpación: abdomen tenso con dolor exquisito a la descompresión y defensa involuntaria en hemiabdomen inferior izquierdo. Al tacto rectal: ampolla rectal completamente vacía y colapsada, con huellas de moco sanguinolento en el guante. Radiografía de abdomen en decúbito: dilatación colosal de asa colónica sigmoidea con el signo clásico del \"grano de café\" (asa en omega) que nace en la fosa ilíaca izquierda y asciende hasta el hipocondrio derecho.",
        "diagnosticReasoning": "El paciente presenta un Vólvulo de Sigmoides Complicado, consistente en la torsión axial del colon sigmoides sobre su propio meso, favorecido por un mesocolon elongado de base estrecha y sigmoides redundante (megacolon). Clínicamente se manifiesta por la tríada clásica de von Wahl: dolor abdominal, distensión masiva asimétrica y constipación absoluta. Radiológicamente, el signo del \"grano de café\" es patognomónico: dos asas colónicas dilatadas adyacentes con una línea densa central que representa la pared medial yuxtapuesta del colon torsionado. La presencia de hipotensión arterial (90/55 mmHg), taquicardia, fiebre, defensa muscular involuntaria franca con Blumberg positivo y moco sanguinolento al tacto rectal indica compromiso vascular con necrosis isquémica y estrangulación colónica. En presencia de signos de isquemia o peritonitis, la devolvulación endoscópica (colonoscopia descompresiva) está ABSOLUTAMENTE CONTRAINDICADA por el riesgo inminente de perforación colónica catastrófica; la indicación mandatoria es la laparotomía exploradora urgente.",
        "stepByStepReasoning": "El paciente presenta un Vólvulo de Sigmoides Complicado, consistente en la torsión axial del colon sigmoides sobre su propio meso, favorecido por un mesocolon elongado de base estrecha y sigmoides redundante (megacolon). Clínicamente se manifiesta por la tríada clásica de von Wahl: dolor abdominal, distensión masiva asimétrica y constipación absoluta. Radiológicamente, el signo del \"grano de café\" es patognomónico: dos asas colónicas dilatadas adyacentes con una línea densa central que representa la pared medial yuxtapuesta del colon torsionado. La presencia de hipotensión arterial (90/55 mmHg), taquicardia, fiebre, defensa muscular involuntaria franca con Blumberg positivo y moco sanguinolento al tacto rectal indica compromiso vascular con necrosis isquémica y estrangulación colónica. En presencia de signos de isquemia o peritonitis, la devolvulación endoscópica (colonoscopia descompresiva) está ABSOLUTAMENTE CONTRAINDICADA por el riesgo inminente de perforación colónica catastrófica; la indicación mandatoria es la laparotomía exploradora urgente.",
        "differentialDiagnosis": [
          {
            "condition": "Vólvulo de Ciego",
            "rulingRationale": "El vólvulo de ciego ocurre en adultos más jóvenes con ciego móvil hipermóvil; el asa distendida adopta forma de coma o riñón con el vértice orientado hacia el cuadrante superior izquierdo o epigastrio, y no nace en la pelvis izquierda."
          },
          {
            "condition": "Megacolon Tóxico no Torsionado por Clostridioides difficile",
            "rulingRationale": "Cursa con diarrea sanguinolenta previa tras uso de antibióticos, dilatación colónica difusa del colon transverso (>6 cm) sin torsión en grano de café, y sepsis tóxica profunda."
          },
          {
            "condition": "Cáncer de Colon Obstructivo en Rectosigmoides",
            "rulingRationale": "La neoplasia obstructiva muestra dilatación del colon proximal con ciego dilatado a tensión (\"peligro de perforación diastática cecal si diámetro >10-12 cm\"), pero sin el bucle en omega cerrado característico del vólvulo."
          }
        ],
        "managementPlan": [
          "1. Reanimación hidroelectrolítica agresiva con cristaloides isotónicos intravenosos (Lactato Ringer o SSN) guiada por presión arterial media y gasto urinario por sonda Foley.",
          "2. Descompresión gástrica inmediata con sonda nasogástrica para evitar broncoaspiración provocada por la compresión diafragmática del megacolon.",
          "3. Antibioticoterapia parenteral de amplio espectro inmediata contra gramnegativos entéricos y anaerobios: Ceftriaxona 1 g IV cada 12 horas más Metronidazol 500 mg IV cada 8 horas (o Piperacilina-Tazobactam).",
          "4. CONTRAINDICAR formalmente la colonoscopia o rectosigmoidoscopia de desvolvulación debido a la presencia de peritonismo y sospecha de necrosis.",
          "5. Laparotomía exploradora de urgencia: desvolvulación cuidadosa del asa sigmoidea, constatando la presencia de necrosis parietal isquémica.",
          "6. Procedimiento quirúrgico de elección en vólvulo complicado con necrosis: Operación de Hartmann (resección del colon sigmoides necrótico sin anastomosis primaria, cierre del muñón rectal distal y colostomía terminal en fosa ilíaca izquierda)."
        ],
        "therapeuticPlan": [
          "1. Reanimación hidroelectrolítica agresiva con cristaloides isotónicos intravenosos (Lactato Ringer o SSN) guiada por presión arterial media y gasto urinario por sonda Foley.",
          "2. Descompresión gástrica inmediata con sonda nasogástrica para evitar broncoaspiración provocada por la compresión diafragmática del megacolon.",
          "3. Antibioticoterapia parenteral de amplio espectro inmediata contra gramnegativos entéricos y anaerobios: Ceftriaxona 1 g IV cada 12 horas más Metronidazol 500 mg IV cada 8 horas (o Piperacilina-Tazobactam).",
          "4. CONTRAINDICAR formalmente la colonoscopia o rectosigmoidoscopia de desvolvulación debido a la presencia de peritonismo y sospecha de necrosis.",
          "5. Laparotomía exploradora de urgencia: desvolvulación cuidadosa del asa sigmoidea, constatando la presencia de necrosis parietal isquémica.",
          "6. Procedimiento quirúrgico de elección en vólvulo complicado con necrosis: Operación de Hartmann (resección del colon sigmoides necrótico sin anastomosis primaria, cierre del muñón rectal distal y colostomía terminal en fosa ilíaca izquierda)."
        ],
        "pedagogicalRationale": "En el vólvulo de sigmoides, la colonoscopia para devolvulación solo es segura si el paciente NO tiene fiebre, leucocitosis ni peritonismo; si hay datos de irritación peritoneal, entrar directo a laparotomía. La cirugía de Hartmann es el procedimiento más seguro en el anciano séptico con colon estrangulado: no hacer anastomosis en un colon con peritonitis o isquemia.",
        "clinicalPearls": [
          "En el vólvulo de sigmoides, la colonoscopia para devolvulación solo es segura si el paciente NO tiene fiebre, leucocitosis ni peritonismo; si hay datos de irritación peritoneal, entrar directo a laparotomía.",
          "La cirugía de Hartmann es el procedimiento más seguro en el anciano séptico con colon estrangulado: no hacer anastomosis en un colon con peritonitis o isquemia."
        ],
        "officialProtocolRef": "Lineamientos Quirúrgicos para el Manejo del Vólvulo Colónico, MINSAL El Salvador / Manual de Procedimientos Quirúrgicos Hospital Nacional Rosales."
      },
      {
        "id": "case-cg-04",
        "title": "Politraumatizado con Trauma Cerrado de Abdomen, Choque Hemorrágico Grado IV y Damage Control (ATLS)",
        "patientProfile": "Hombre de 28 años, motociclista sin casco protector, impactado a alta velocidad por vehículo pesado en carretera de Oro, ingresa en estado crítico.",
        "clinicalPresentation": "Hombre de 28 años, motociclista sin casco protector, impactado a alta velocidad por vehículo pesado en carretera de Oro, ingresa en estado crítico.. Presenta: El paciente es recibido en sala de reanimación de trauma en estado de inconsciencia (Glasgow 7: O1 V2 M4).",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "El paciente es recibido en sala de reanimación de trauma en estado de inconsciencia (Glasgow 7: O1 V2 M4). Se encuentra intensamente pálido, frío y diaforético, con pulsos periféricos impalpables y pulso carotídeo filiforme. PA: 65/35 mmHg, FC: 144 lpm, FR: 34 rpm con respiración jadeante, SatO2: 88% con máscara. Se observa gran hematoma con equimosis en hipocondrio derecho y flanco ipsilateral, abrasiones torácicas con crepitación en reborde costal inferior derecho y abdomen francamente distendido y rígido a la palpación. Pelvis clínicamente estable. No hay orificios de entrada ni salida de proyectil. En la evaluación primaria ABCDE: tras intubación orotraqueal con protección cervical, se realiza ultrasonido FAST (Focused Assessment with Sonography for Trauma) en la cabecera, revelando abundante líquido libre anecoico en el espacio hepatorrenal (espacio de Morrison), en la fosa esplenorrenal y en el fondo de saco de Douglas (hemoperitoneo masivo).",
        "diagnosticReasoning": "El paciente se encuentra en Choque Hemorrágico Clase IV (exanguinante) según la clasificación ATLS, definido por pérdida aguda de volemia superior al 40% (>2000 mL), manifestado por hipotensión profunda refractaria (PAS <70 mmHg), taquicardia extrema (>140 lpm), palidez mucocutánea severa, colapso circulatorio periférico y compromiso neurológico severo. El ultrasonido FAST positivo en tres ventanas peritoneales en un paciente en choque confirma hemoperitoneo masivo exanguinante, secundario a traumatismo cerrado de abdomen con alta probabilidad de laceración hepática de alto grado (Grado IV-V) y/o lesión esplénica/vascular mayor. El paciente se encuentra en riesgo inminente de entrar en la \"Tríada de la Muerte\" letal: Hipotermia (<35 °C), Acidosis Metabólica profunda (pH <7.20) y Coagulopatía traumática aguda. En esta condición fisiológica extrema, una cirugía reconstructiva prolongada es letal; la indicación indiscutible es la activación inmediata del Protocolo de Transfusión Masiva (PTM 1:1:1) y traslado directo a quirófano para Laparotomía de Control de Daños (Damage Control Surgery).",
        "stepByStepReasoning": "El paciente se encuentra en Choque Hemorrágico Clase IV (exanguinante) según la clasificación ATLS, definido por pérdida aguda de volemia superior al 40% (>2000 mL), manifestado por hipotensión profunda refractaria (PAS <70 mmHg), taquicardia extrema (>140 lpm), palidez mucocutánea severa, colapso circulatorio periférico y compromiso neurológico severo. El ultrasonido FAST positivo en tres ventanas peritoneales en un paciente en choque confirma hemoperitoneo masivo exanguinante, secundario a traumatismo cerrado de abdomen con alta probabilidad de laceración hepática de alto grado (Grado IV-V) y/o lesión esplénica/vascular mayor. El paciente se encuentra en riesgo inminente de entrar en la \"Tríada de la Muerte\" letal: Hipotermia (<35 °C), Acidosis Metabólica profunda (pH <7.20) y Coagulopatía traumática aguda. En esta condición fisiológica extrema, una cirugía reconstructiva prolongada es letal; la indicación indiscutible es la activación inmediata del Protocolo de Transfusión Masiva (PTM 1:1:1) y traslado directo a quirófano para Laparotomía de Control de Daños (Damage Control Surgery).",
        "differentialDiagnosis": [
          {
            "condition": "Neumotórax a Tensión Derecho Masivo",
            "rulingRationale": "El traumatismo torácico derecho puede ocasionar neumotórax a tensión, pero la auscultación revela murmullo vesicular simétrico bilateral tras intubación, los campos pulmonares ventilan y el FAST documenta líquido masivo intraabdominal que justifica por sí solo el colapso hemodinámico."
          },
          {
            "condition": "Taponamiento Cardíaco Traumático (Hemopericardio)",
            "rulingRationale": "La ventana pericárdica subxifoidea del FAST descartó derrame pericárdico o colapso de cavidades derechas, confirmando que el sitio primario de exanguinación es la cavidad peritoneal."
          },
          {
            "condition": "Fractura Pélvica Inestable con Hematoma Retroperitoneal",
            "rulingRationale": "La compresión anteroposterior y lateral suave de las crestas ilíacas demostró estabilidad del anillo pélvico y el líquido libre está en cavidad peritoneal libre supramesocólica."
          }
        ],
        "managementPlan": [
          "1. Vía aérea asegurada con tubo orotraqueal y ventilación mecánica protectora con FiO2 100%.",
          "2. Activar de inmediato el Protocolo de Transfusión Masiva (PTM) del hospital con relación balanceada 1:1:1 (4 unidades de Glóbulos Rojos Empacados O negativo sin cruzar + 4 unidades de Plasma Fresco Congelado + 1 pool de Plaquetas por aféresis).",
          "3. Administrar Ácido Tranexámico: 1 g IV en bolo en 10 minutos inmediatamente, seguido de infusión de 1 g IV para 8 horas (dentro de las primeras 3 horas del trauma).",
          "4. Práctica de Hipotensión Permisiva (meta PAS 80-90 mmHg) hasta lograr el control quirúrgico del sangrado, evitando la sobrecarga de cristaloides que induce coagulopatía dilucional e hipotermia.",
          "5. Laparotomía de Control de Daños (Fase 1, <60-90 min): incisión xifopubiana rápida, evacuación de hemoperitoneo masivo, empaquetamiento hemostático perihepático con compresas quirúrgicas a presión en los 4 cuadrantes (packing hepático bimanual), ligadura vascular hemostática rápida, hemostasia de vísceras sólidas y cierre temporal del abdomen abierto sin tensión mediante técnica de bolsa de Bogotá o sistema de vacío (VAC).",
          "6. Traslado inmediato a la UCI quirúrgica (Fase 2): recalentamiento activo a >36 °C, corrección de acidosis y coagulopatía con componentes guiada por pruebas de coagulación, y programación para reexploración Second-Look a las 24-48 horas (Fase 3) para desempaquetamiento y cierre definitivo."
        ],
        "therapeuticPlan": [
          "1. Vía aérea asegurada con tubo orotraqueal y ventilación mecánica protectora con FiO2 100%.",
          "2. Activar de inmediato el Protocolo de Transfusión Masiva (PTM) del hospital con relación balanceada 1:1:1 (4 unidades de Glóbulos Rojos Empacados O negativo sin cruzar + 4 unidades de Plasma Fresco Congelado + 1 pool de Plaquetas por aféresis).",
          "3. Administrar Ácido Tranexámico: 1 g IV en bolo en 10 minutos inmediatamente, seguido de infusión de 1 g IV para 8 horas (dentro de las primeras 3 horas del trauma).",
          "4. Práctica de Hipotensión Permisiva (meta PAS 80-90 mmHg) hasta lograr el control quirúrgico del sangrado, evitando la sobrecarga de cristaloides que induce coagulopatía dilucional e hipotermia.",
          "5. Laparotomía de Control de Daños (Fase 1, <60-90 min): incisión xifopubiana rápida, evacuación de hemoperitoneo masivo, empaquetamiento hemostático perihepático con compresas quirúrgicas a presión en los 4 cuadrantes (packing hepático bimanual), ligadura vascular hemostática rápida, hemostasia de vísceras sólidas y cierre temporal del abdomen abierto sin tensión mediante técnica de bolsa de Bogotá o sistema de vacío (VAC).",
          "6. Traslado inmediato a la UCI quirúrgica (Fase 2): recalentamiento activo a >36 °C, corrección de acidosis y coagulopatía con componentes guiada por pruebas de coagulación, y programación para reexploración Second-Look a las 24-48 horas (Fase 3) para desempaquetamiento y cierre definitivo."
        ],
        "pedagogicalRationale": "En choque hemorrágico grado IV con FAST positivo, no pierda tiempo llevando al paciente a un tomógrafo (TAC); el paciente se desangra y muere en el escáner. Debe ir directo al quirófano de trauma. La cirugía de control de daños salva vidas al no intentar reparaciones definitivas en un paciente frío, ácido y coagulopático: empaquetar, contener contaminación, dejar abdomen abierto y correr a la UCI.",
        "clinicalPearls": [
          "En choque hemorrágico grado IV con FAST positivo, no pierda tiempo llevando al paciente a un tomógrafo (TAC); el paciente se desangra y muere en el escáner. Debe ir directo al quirófano de trauma.",
          "La cirugía de control de daños salva vidas al no intentar reparaciones definitivas en un paciente frío, ácido y coagulopático: empaquetar, contener contaminación, dejar abdomen abierto y correr a la UCI."
        ],
        "officialProtocolRef": "Advanced Trauma Life Support (ATLS), 10.ª Edición / Protocolo de Transfusión Masiva y Cirugía de Control de Daños, Hospital Nacional Rosales."
      },
      {
        "id": "case-cg-05",
        "title": "Colecistitis Aguda Litiásica Grado II (Guías de Tokio TG18) con Empiema Vesicular",
        "patientProfile": "Mujer de 48 años con obesidad grado I (IMC 32 kg/m²) y antecedentes de cólicos biliares a repetición tras ingesta de grasas.",
        "clinicalPresentation": "Mujer de 48 años con obesidad grado I (IMC 32 kg/m²) y antecedentes de cólicos biliares a repetición tras ingesta de grasas.. Presenta: La paciente consulta por dolor intenso y continuo en el hipocondrio derecho y epigastrio de 76 horas de evolución, irradiado a la región interescapular y hombro derecho, acompañado de náuseas, vómitos biliosos y sensación febril persistente.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Pruebas analíticas de urgencia, biomarcadores y estudios de gabinete documentados en la presentación del caso.",
        "initialVignette": "La paciente consulta por dolor intenso y continuo en el hipocondrio derecho y epigastrio de 76 horas de evolución, irradiado a la región interescapular y hombro derecho, acompañado de náuseas, vómitos biliosos y sensación febril persistente. No ha tolerado la vía oral desde hace dos días. Al examen físico: facie de dolor, ictérica leve en escleras. PA: 125/80 mmHg, FC: 98 lpm, FR: 20 rpm, Temp: 38.6 °C. A la palpación abdominal: dolor exquisito en hipocondrio derecho con maniobra de Murphy positiva (detención brusca de la inspiración profunda a la compresión subcostal derecha). Se palpa una masa dolorosa mal delimitada en hipocondrio derecho con plastrón defensivo localizado. Laboratorios: Leucocitosis de 17,400/mm³ con 84% de neutrófilos, Bilirrubina total: 2.1 mg/dL a expensas de directa (1.5 mg/dL), Fosfatasa Alcalina: 180 UI/L, AST: 45 UI/L, ALT: 52 UI/L, Amilasa sérica normal (60 UI/L). Ultrasonografía de abdomen superior: vesícula biliar distendida con eje longitudinal de 11 cm, engrosamiento difuso de la pared vesicular a 6 mm con signo del doble contorno, múltiples litos en su interior con un lito de 18 mm enclavado en el bacinete vesicular (infundíbulo), líquido perivesicular laminar y sombra acústica posterior. Diámetro del colédoco normal (5 mm).",
        "diagnosticReasoning": "La paciente presenta una Colecistitis Aguda Litiásica Grado II (Moderada) según los Criterios Diagnósticos de Tokio 2018 (TG18). Los criterios de Tokio se cumplen plenamente: Criterio A (signos locales de inflamación: signo de Murphy positivo y dolor/masa en hipocondrio derecho), Criterio B (signos sistémicos de inflamación: fiebre de 38.6 °C y leucocitosis >10,000/mm³), y Criterio C (hallazgos ecográficos confirmatorios: engrosamiento de pared vesicular >4 mm, litiasis vesicular con lito enclavado y líquido perivesicular). La estratificación de severidad TG18 la clasifica en Grado II debido a la presencia de: 1) Leucocitosis >18,000/mm³ (o cercana con 17,400 con neutrofilia severa), 2) Masa dolorosa palpable en hipocondrio derecho, y 3) Duración del cuadro clínico >72 horas. La presencia de vesícula muy distendida, engrosamiento en doble contorno y masa palpable sugiere evolución hacia empiema vesicular (pus intraluminal a tensión), lo que incrementa el riesgo de perforación vesicular y sepsis biliar.",
        "stepByStepReasoning": "La paciente presenta una Colecistitis Aguda Litiásica Grado II (Moderada) según los Criterios Diagnósticos de Tokio 2018 (TG18). Los criterios de Tokio se cumplen plenamente: Criterio A (signos locales de inflamación: signo de Murphy positivo y dolor/masa en hipocondrio derecho), Criterio B (signos sistémicos de inflamación: fiebre de 38.6 °C y leucocitosis >10,000/mm³), y Criterio C (hallazgos ecográficos confirmatorios: engrosamiento de pared vesicular >4 mm, litiasis vesicular con lito enclavado y líquido perivesicular). La estratificación de severidad TG18 la clasifica en Grado II debido a la presencia de: 1) Leucocitosis >18,000/mm³ (o cercana con 17,400 con neutrofilia severa), 2) Masa dolorosa palpable en hipocondrio derecho, y 3) Duración del cuadro clínico >72 horas. La presencia de vesícula muy distendida, engrosamiento en doble contorno y masa palpable sugiere evolución hacia empiema vesicular (pus intraluminal a tensión), lo que incrementa el riesgo de perforación vesicular y sepsis biliar.",
        "differentialDiagnosis": [
          {
            "condition": "Coledocolitiasis con Colangitis Aguda Bacteriana",
            "rulingRationale": "La colangitis aguda cursa con la tríada de Charcot (fiebre intermitente en picos con escalofríos, ictericia franca y dolor abdominal); la paciente tiene colédoco de calibre normal (5 mm), ictericia mínima inflamatoria y Murphy ecográfico positivo típico de colecistitis."
          },
          {
            "condition": "Pancreatitis Aguda Biliar",
            "rulingRationale": "El dolor se irradiaría en cinturón hacia la espalda y la amilasa y lipasa séricas estarían elevadas al menos 3 veces el límite superior normal; en este caso la amilasa sérica es estrictamente normal (60 UI/L)."
          },
          {
            "condition": "Úlcera Péptica Perforada",
            "rulingRationale": "La úlcera perforada causa dolor súbito \"en puñalada\" con peritonitis química generalizada (abdomen en tabla) y neumoperitoneo en radiografía, ausentes en esta paciente."
          }
        ],
        "managementPlan": [
          "1. Ingreso hospitalario inmediato, reposo digestivo (NPO) e hidratación intravenosa con solución salina normal a 150 mL/h.",
          "2. Antibioticoterapia parenteral inmediata dirigida a patógenos biliares (E. coli, Klebsiella pneumoniae, Enterococcus faecalis y anaerobios): Ampicilina/Sulbactam 1.5 a 3 g IV cada 6 horas o Ceftriaxona 1 g IV cada 12 horas más Metronidazol 500 mg IV cada 8 horas.",
          "3. Analgesia intravenosa con antiinflamatorios no esteroideos (Ketorolaco o Ketoprofeno IV) combinados con antiespasmódicos.",
          "4. Intervención quirúrgica: Colecistectomía Laparoscópica Temprana de urgencia (dentro de las primeras 24 a 48 horas del ingreso). La evidencia contemporánea de las Guías TG18 demuestra que la colecistectomía laparoscópica temprana realizada por equipo experimentado reduce la estancia hospitalaria y complicaciones frente al manejo diferido, incluso con >72 horas de evolución.",
          "5. Durante el procedimiento quirúrgico laparoscópico: descompresión por punción y aspiración del empiema vesicular para permitir una prensión adecuada del fondo, disección cuidadosa del triángulo de Calot logrando la Visión Crítica de Seguridad de Strasberg (identificación inequívoca de solo 2 estructuras que entran a la vesícula: conducto cístico y arteria cística, con el tercio inferior del lecho vesicular disecado). Si existe inflamación severa intratable que impida la visión crítica, realizar colecistectomía subtotal fenestrada o reconstituida para evitar lesión de la vía biliar.",
          "6. Completar 48 horas de antibióticos postoperatorios si se controló el foco infeccioso y la evolución clínica es favorable."
        ],
        "therapeuticPlan": [
          "1. Ingreso hospitalario inmediato, reposo digestivo (NPO) e hidratación intravenosa con solución salina normal a 150 mL/h.",
          "2. Antibioticoterapia parenteral inmediata dirigida a patógenos biliares (E. coli, Klebsiella pneumoniae, Enterococcus faecalis y anaerobios): Ampicilina/Sulbactam 1.5 a 3 g IV cada 6 horas o Ceftriaxona 1 g IV cada 12 horas más Metronidazol 500 mg IV cada 8 horas.",
          "3. Analgesia intravenosa con antiinflamatorios no esteroideos (Ketorolaco o Ketoprofeno IV) combinados con antiespasmódicos.",
          "4. Intervención quirúrgica: Colecistectomía Laparoscópica Temprana de urgencia (dentro de las primeras 24 a 48 horas del ingreso). La evidencia contemporánea de las Guías TG18 demuestra que la colecistectomía laparoscópica temprana realizada por equipo experimentado reduce la estancia hospitalaria y complicaciones frente al manejo diferido, incluso con >72 horas de evolución.",
          "5. Durante el procedimiento quirúrgico laparoscópico: descompresión por punción y aspiración del empiema vesicular para permitir una prensión adecuada del fondo, disección cuidadosa del triángulo de Calot logrando la Visión Crítica de Seguridad de Strasberg (identificación inequívoca de solo 2 estructuras que entran a la vesícula: conducto cístico y arteria cística, con el tercio inferior del lecho vesicular disecado). Si existe inflamación severa intratable que impida la visión crítica, realizar colecistectomía subtotal fenestrada o reconstituida para evitar lesión de la vía biliar.",
          "6. Completar 48 horas de antibióticos postoperatorios si se controló el foco infeccioso y la evolución clínica es favorable."
        ],
        "pedagogicalRationale": "En colecistitis aguda, lograr la \"Visión Crítica de Seguridad\" de Strasberg es la regla de oro para evitar la sección iatrogénica del colédoco; si la anatomía es confusa por fibrosis, es más sabio hacer una colecistectomía subtotal que lesionar la vía biliar. Las Guías de Tokio 2018 recomiendan colecistectomía laparoscópica temprana incluso después de 72 horas de evolución, siempre que las condiciones fisiológicas del paciente lo permitan.",
        "clinicalPearls": [
          "En colecistitis aguda, lograr la \"Visión Crítica de Seguridad\" de Strasberg es la regla de oro para evitar la sección iatrogénica del colédoco; si la anatomía es confusa por fibrosis, es más sabio hacer una colecistectomía subtotal que lesionar la vía biliar.",
          "Las Guías de Tokio 2018 recomiendan colecistectomía laparoscópica temprana incluso después de 72 horas de evolución, siempre que las condiciones fisiológicas del paciente lo permitan."
        ],
        "officialProtocolRef": "Tokyo Guidelines 2018 (TG18): Diagnostic Criteria and Management of Acute Cholecystitis / Protocolos del Servicio de Cirugía Laparoscópica ISSS y MINSAL."
      }
    ]
  },
  {
    "id": "unit-pediatria",
    "specialtyId": "pediatria",
    "specialtyName": "Pediatría",
    "title": "Pediatría y Urgencias Infantiles: Deshidratación AIEPI, Bronquiolitis, Sepsis Pediátrica, Vacunación PAI y NAC",
    "substantiveTheory": "La atención pediátrica en el Sistema Nacional Integrado de Salud de El Salvador se fundamenta en la estrategia AIEPI (Atención Integrada a las Enfermedades Prevalentes de la Infancia), los protocolos clínicos del Hospital Nacional de Niños Benjamín Bloom y el Programa Nacional de Inmunizaciones (PNI) del MINSAL.\n\n1. Enfermedad Diarreica Aguda (EDA) y Planes de Rehidratación AIEPI/MINSAL:\nLa evaluación clínica estandarizada según la estrategia AIEPI clasifica el estado de hidratación del paciente pediátrico en tres categorías bien definidas:\na) Sin Deshidratación (Pérdida ponderal <5%): El niño se encuentra alerta, ojos normales con lágrimas presentes, boca y lengua húmedas, bebe normalmente sin sed excesiva, y el pliegue cutáneo abdominal se recupera de inmediato. Conducta: Plan A en el hogar. Cuatro reglas cardinales: 1) Aumentar líquidos orales en casa para prevenir la deshidratación (ofrecer Sales de Rehidratación Oral de baja osmolaridad tras cada deposición: 50-100 mL en menores de 2 años y 100-200 mL en mayores de 2 años), 2) Continuar la alimentación habitual del niño incluyendo lactancia materna frecuente a libre demanda, 3) Suplementación de Zinc elemental durante 10 a 14 días (10 mg/día en menores de 6 meses y 20 mg/día en mayores de 6 meses) para reducir la duración, gravedad y recurrencia de nuevos episodios diarreicos, y 4) Enseñar a la madre los signos de peligro para consultar de inmediato a la UCSF (empeora, no puede beber, vómitos repetidos, fiebre alta, deposiciones con sangre o más de 4-5 veces en 4 horas).\nb) Con Algún Grado de Deshidratación (Deshidratación Moderada, Pérdida ponderal 5-10%): Dos o más de los siguientes signos: inquieto o irritable, ojos hundidos, bebe con avidez con sed insaciable, mucosa oral seca, y signo del pliegue cutáneo que desaparece lentamente (<2 segundos). Conducta: Plan B supervisado en la UCSF o unidad de emergencia. Administración exclusiva de Sales de Rehidratación Oral (SRO) de baja osmolaridad (245 mOsm/L: Na+ 75 mEq/L, glucosa 75 mmol/L, osmolaridad reducida recomendada por OMS/UNICEF) a razón de 50 a 100 mL/kg en un período de 4 horas, administrados lentamente con taza pequeña o cuchara. Si el niño vomita, esperar 10 minutos y reiniciar la administración más lentamente (una cucharadita cada 2-3 minutos). Al cabo de 4 horas: reevaluar al paciente para reclasificar; si no hay signos de deshidratación, pasar a Plan A; si persisten signos de deshidratación moderada, repetir Plan B por 4 horas; si empeoró hacia deshidratación grave, pasar de inmediato a Plan C.\nc) Con Deshidratación Grave (Pérdida ponderal >10%): Dos o más de los siguientes signos: letárgico o inconsciente, ojos muy hundidos y secos, no puede beber o bebe con dificultad, signo del pliegue cutáneo que desaparece muy lentamente (>2 segundos), frialdad periférica o llenado capilar >2-3 segundos. Conducta: Plan C de rehidratación parenteral intravenosa inmediata con Solución Hartmann (Lactato Ringer) o Solución Salina Normal al 0.9% a dosis total de 100 mL/kg.\n- En lactantes menores de 1 año (esquema de 6 horas): administrar 30 mL/kg en la primera hora (60 minutos), seguido de 70 mL/kg en las siguientes 5 horas.\n- En niños de 1 año o mayores (esquema de 3 horas): administrar 30 mL/kg en los primeros 30 minutos, seguido de 70 mL/kg en las siguientes 2 horas y media.\nEvaluar el estado de hidratación continuamente. Si no mejora o el pulso periférico es débil, repetir el primer bolo de 30 mL/kg. Tan pronto como el paciente pueda beber (habitualmente a las 2-3 horas), ofrecer SRO a 5 mL/kg/h mientras continúa la vía intravenosa.\nProscripción absoluta en pediatría: están terminantemente contraindicados los antidiarreicos inhibidores de la motilidad intestinal (loperamida, difenoxilato) por alto riesgo de íleo paralítico, megacolon tóxico y muerte, así como los antieméticos de acción central y los antibióticos empíricos de rutina (los antibióticos solo están indicados en diarrea invasiva con moco y sangre visible [disentería bacteriana por Shigella o Campylobacter], sospecha de cólera o sepsis bacteriana sistémica).\n\n2. Bronquiolitis Aguda en el Lactante:\nInfección viral del tracto respiratorio inferior más común en lactantes menores de 2 años (pico máximo entre los 2 y 6 meses de edad). Etiología principal: Virus Sincitial Respiratorio (VSR) en más del 70-80% de los casos; otros agentes: rinovirus, metapneumovirus humano, parainfluenza y adenovirus. Fisiopatología: invasión viral del epitelio de los bronquiolos terminales que desencadena necrosis celular, infiltración linfocitaria peribronquiolar, edema de la submucosa y taponamiento mucoso denso intraluminal, generando obstrucción bronquiolar en parches con hiperinsuflación alveolar y atelectasias subsegmentarias.\nCuadro clínico: pródromo de infección de vías respiratorias superiores (rinorrea serosa, estornudos, tos seca y febrícula de 38-38.5 °C) durante 2 a 3 días, seguido de progresión a dificultad respiratoria baja: taquipnea, tiraje subcostal e intercostal, aleteo nasal, quejido espiratorio y auscultación con sibilancias espiratorias difusas bilaterales y estertores subcrepitantes húmedos.\nEvaluación de severidad con la Escala de Wood-Downes modificada por Ferres (0 a 14 puntos): evalúa sibilancias, tiraje, frecuencia respiratoria, frecuencia cardíaca, ventilación/murmullo vesicular y cianosis. Puntaje: 1-3 leve (manejo ambulatorio), 4-7 moderada (observación hospitalaria/ingreso), 8-14 grave (cuidados intensivos pediátricos).\nTratamiento basado en evidencia (guías MINSAL y Academia Americana de Pediatría AAP):\n- El tratamiento es FUNDAMENTALMENTE DE SOPORTE: 1) Posición semifowler (cabecera a 30 grados) con cuello en ligera extensión; 2) Desobstrucción y aspiración suave de secreciones nasales con solución salina al 0.9% antes de las tomas y de dormir; 3) Fraccionamiento de las tomas de leche materna o fórmula para evitar fatiga y broncoaspiración; 4) Hidratación adecuada (oral si FR <60 rpm; si FR ≥60 rpm con tiraje severo, suspender vía oral y canalizar líquidos de mantenimiento intravenosos a 80-100 mL/kg/día con Dextrosa al 5% en SSN 0.45% para evitar broncoaspiración); 5) Oxigenoterapia suplementaria humedecida mediante cánula nasal (0.5 a 2 L/min) SOLO si la saturación de oxígeno por pulsoximetría es persistentemente <92% al aire ambiente (o <90% en algunas guías internacionales), titulando para mantener SatO2 entre 92% y 95%.\n- Fármacos DESACONSEJADOS o PROSCRITOS de forma rutinaria: los broncodilatadores inhalados (salbutamol) NO han demostrado acortar la duración de la enfermedad ni la estancia hospitalaria (solo se permite una prueba terapéutica única observando respuesta a los 15 minutos en lactantes con antecedentes de atopia); los corticoides sistémicos (dexametasona, prednisolona) están formalmente DESACONSEJADOS por falta de eficacia; los antibióticos NO están indicados salvo sobreinfección bacteriana documentada; la solución salina hipertónica nebulizada al 3% puede considerarse únicamente en pacientes hospitalizados con estancia >3 días.\n\n3. Choque Séptico Pediátrico y Protocolos PALS (Hospital Benjamín Bloom):\nDisfunción cardiovascular aguda y orgánica inducida por infección grave con hipoperfusión tisular sistémica. A diferencia del adulto, los pacientes pediátricos en choque séptico suelen mantener cifras de presión arterial sistólica normales durante fases prolongadas mediante vasoconstricción periférica compensatoria intensa y taquicardia; por lo tanto, LA HIPOTENSIÓN ES UN SIGNO MUY TARDÍO DE CHOQUE DESCOMPENSADO Y PRE-PARO.\nFases y fenotipos clínicos del choque séptico pediátrico:\n- Choque Frío (el más común en niños en la comunidad, ~80% de los casos): caracterizado por bajo gasto cardíaco y resistencias vasculares sistémicas muy elevadas. Signos: extremidades frías, pálidas o marmóreas, llenado capilar prolongado >3 segundos, pulsos periféricos débiles, filiformes o impalpables, oliguria, taquicardia desproporcionada y alteración del sensorio (irritabilidad o letargo).\n- Choque Caliente (más frecuente en pacientes en UCI o neutropénicos): caracterizado por gasto cardíaco elevado y vasodilatación periférica con resistencias bajas. Signos: extremidades tibias o calientes, pulsos saltones, llenado capilar \"en flash\" (<1 segundo), presión de pulso amplia y taquicardia.\nResucitación de la Hora Dorada del Choque Séptico Pediátrico:\nMinutos 0 a 5: Reconocer signos de hipoperfusión tisular, administrar oxígeno de alto flujo al 100%, monitorización y obtener acceso vascular. Si no se logra canalización venosa periférica en dos intentos o en <5 minutos, colocar de inmediato un ACCESO INTRAÓSEO (tuberosidad anterior de la tibia) sin demora.\nMinutos 5 a 15: Administración rápida de bolos de cristaloides isotónicos (Lactato Ringer o SSN al 0.9%) a 20 mL/kg en 5 a 10 minutos (mediante técnica de jeringa con llave de 3 vías \"push-pull\"). Reevaluar tras cada bolo: signos de perfusión vs signos de sobrecarga hídrica (auscultación de estertores crepitantes y aparición de hepatomegalia). Se pueden administrar hasta 40 a 60 mL/kg en la primera hora si no hay hepatomegalia.\nMinutos 15 a 60:\n- Choque refractario a fluidos: si persisten datos de hipoperfusión tras 40-60 mL/kg de cristaloides, iniciar fármacos vasoactivos por vía periférica o intraósea (mientras se obtiene acceso venoso central):\n  * En Choque Frío: Epinefrina en infusión continua (0.05 a 0.3 mcg/kg/min) por su potente efecto inotrópico positivo y cronotrópico (efecto beta-1 predominante).\n  * En Choque Caliente: Norepinefrina en infusión continua (0.05 a 0.2 mcg/kg/min) para restaurar el tono vascular sistémico (efecto alfa-1).\n- Terapia antimicrobiana empírica inmediata de amplio espectro: administrar en la primera hora (Hora de Oro) tras la toma rápida de hemocultivos (sin retrasar los antibióticos si la punción es dificultosa). Esquema empírico: Ceftriaxona (100 mg/kg/día IV en 1 o 2 dosis) más Vancomicina (60 mg/kg/día IV dividida cada 6 horas) si se sospecha Staphylococcus aureus resistente a meticilina (SARM); en neonatos <28 días: Ampicilina más Cefotaxima o Gentamicina.\n- Corregir de inmediato hipoglucemia (bolo de Dextrosa al 10% a 2 mL/kg) e hipocalcemia (Gluconato de Calcio al 10% a 100 mg/kg IV en 10-20 min).\n\n4. Esquema Nacional de Vacunación PAI MINSAL El Salvador:\nEl Programa Nacional de Inmunizaciones de El Salvador es una de las estrategias sanitarias de mayor impacto preventivo. El esquema oficial vigente establece:\n- Recién Nacido (<24 horas de vida):\n  1) BCG (Bacilo de Calmette-Guérin): vacuna bacteriana viva atenuada contra formas graves de tuberculosis (meníngea y miliar). Dosis: 0.1 mL intradérmica estricta en la inserción del músculo deltoides del brazo derecho. Produce pápula inmediata que evoluciona a mácula, nódulo, ulceración y cicatriz queloide permanente en 6-12 semanas.\n  2) Hepatitis B Pediátrica: antígeno recombinante de superficie (HBsAg). Dosis: 0.5 mL intramuscular en la cara anterolateral del muslo izquierdo en las primeras 12 a 24 horas de vida para prevenir la transmisión vertical perinatal.\n- 2 Meses de edad:\n  1) Pentavalente (DPT-HB-Hib): toxoide diftérico, toxoide tetánico, componentes de Bordetella pertussis, antígeno de Hepatitis B y polisacárido capsular conjugado de Haemophilus influenzae tipo b. Dosis: 0.5 mL IM en muslo anterolateral derecho.\n  2) Polio Inactivada (IPV, Salk): virus de poliomielitis inactivados serotipos 1, 2 y 3. Dosis: 0.5 mL IM en muslo izquierdo.\n  3) Vacuna contra Rotavirus: vacuna viral viva atenuada monovalente o pentavalente. Dosis: vía oral (1.5 o 2 mL). Previene diarrea grave por rotavirus.\n  4) Neumocócica Conjugada (PCV13): 13 serotipos conjugados con proteína diftérica CRM197. Dosis: 0.5 mL IM.\n- 4 Meses de edad:\n  2.ª dosis de Pentavalente, 2.ª dosis de IPV, 2.ª dosis de Rotavirus y 2.ª dosis de Neumocócica Conjugada.\n- 6 Meses de edad:\n  3.ª dosis de Pentavalente, 3.ª dosis de IPV, e inicio de Vacuna contra Influenza Estacional pediátrica (dosis 0.25 mL IM, con una segunda dosis de refuerzo separada por 4 semanas en niños que se vacunan por primera vez).\n- 12 Meses de edad (1 año):\n  1) Triple Viral SPR: virus vivos atenuados de Sarampión, Paperas (Parotiditis) y Rubéola. Dosis: 0.5 mL subcutánea en brazo izquierdo.\n  2) Vacuna contra Varicela: virus vivo atenuado cepa Oka. Dosis: 0.5 mL SC.\n  3) Refuerzo de Neumocócica Conjugada (3.ª dosis).\n- 18 Meses de edad:\n  1.° refuerzo de DPT (0.5 mL IM) y 1.° refuerzo de Polio (bOPV oral o IPV).\n- 4 Años de edad:\n  2.° refuerzo de DPT (0.5 mL IM) y 2.° refuerzo de Polio oral (bOPV).\n- 9 a 14 Años de edad:\n  Vacuna contra el Virus del Papiloma Humano (VPH): previene cáncer cervicouterino y verrugas genitales; esquema de 2 dosis administradas a los 0 y 6 meses.\n\n5. Neumonía Adquirida en la Comunidad (NAC) Pediátrica:\nInfección aguda del parénquima pulmonar adquirida fuera del ámbito hospitalario. En el marco de la estrategia AIEPI del MINSAL, la evaluación clínica sistemática define la presencia de Neumonía según el signo de Taquipnea (frecuencia respiratoria elevada contada en 1 minuto completo con el niño tranquilo):\n- Menores de 2 meses: ≥60 respiraciones por minuto.\n- De 2 a 11 meses: ≥50 respiraciones por minuto.\n- De 1 a 4 años: ≥40 respiraciones por minuto.\n- De 5 años o más: ≥30 respiraciones por minuto.\nLa presencia de Tiraje Subcostal marcado (depresión permanente de la pared torácica inferior durante la inspiración) define de inmediato \"Neumonía Grave\" y requiere hospitalización urgente. Signos de neumonía muy grave con peligro inminente para la vida: estridor en reposo, cianosis central, incapacidad para beber o alimentarse, vómitos de todo lo ingerido, convulsiones o letargia/inconsciencia.\nEtiología microbiológica por grupo de edad:\n- Neonatos (<1 mes): Streptococcus agalactiae (estreptococo del grupo B), Escherichia coli, Listeria monocytogenes.\n- 1 a 3 meses: Virus respiratorios (VSR), Chlamydia trachomatis (neumonía afebril del lactante con tos en accesos espasmódicos y conjuntivitis previa), Streptococcus pneumoniae.\n- 3 meses a 5 años: Streptococcus pneumoniae (causa bacteriana principal de consolidación lobar), virus respiratorios (VSR, parainfluenza, adenovirus, influenza), Mycoplasma pneumoniae y Staphylococcus aureus (neumonía necrotizante complicada con pioneumotórax).\n- Mayores de 5 años: Streptococcus pneumoniae y gérmenes atípicos (Mycoplasma pneumoniae y Chlamydophila pneumoniae).\nTratamiento antimicrobiano normado por el MINSAL / OPS:\n- Manejo ambulatorio de Neumonía no grave (taquipnea sin tiraje en mayores de 3 meses): Amoxicilina oral a dosis altas (80 a 90 mg/kg/día dividida cada 8 o 12 horas durante 5 a 7 días). La dosis alta es mandatoria para superar la resistencia de Streptococcus pneumoniae con proteínas fijadoras de penicilina (PBP) alteradas. En pacientes alérgicos a penicilinas no anafilácticos: Cefuroxima axetilo o claritromicina/azitromicina.\n- Manejo hospitalario de Neumonía Grave (con tiraje subcostal o hipoxemia SatO2 <92%): hospitalización inmediata, oxigenoterapia para meta SatO2 ≥92%, hidratación intravenosa parenteral de mantenimiento y antibioticoterapia parenteral de primera línea: Ampicilina intravenosa (150 a 200 mg/kg/día IV dividida cada 6 horas). En niños con vacunación incompleta contra Hib y neumococo, sepsis o neumonía complicada con derrame pleural: Ceftriaxona (50 a 100 mg/kg/día IV cada 24 horas). En sospecha de neumonía estafilocócica (SARM: progresión fulminante, neumatoceles, empiema): asociar Vancomicina (40-60 mg/kg/día) o Clindamicina (30-40 mg/kg/día). En sospecha de neumonía atípica por Mycoplasma (escolar con tos seca rebelde, febrícula e infiltrado intersticial): Azitromicina oral (10 mg/kg el día 1, seguido de 5 mg/kg/día por 4 días).",
    "clinicalPearls": [
      "En pediatría, los fármacos inhibidores de la motilidad intestinal (loperamida) están formalmente proscritos por riesgo inminente de íleo paralítico, megacolon tóxico y muerte.",
      "En bronquiolitis viral en lactantes menores de 2 años, el pilar terapéutico es exclusivamente de soporte (aseo nasal con solución salina, hidratación fraccionada y O2 si SatO2 <92%); no usar salbutamol, corticoides ni antibióticos de rutina.",
      "En choque séptico pediátrico, la hipotensión es un signo muy tardío de colapso cardiovascular descompensado; el choque frío (80% en niños) requiere bolos rápidos de cristaloides 20 mL/kg y Epinefrina precoz.",
      "En Neumonía Adquirida en la Comunidad no complicada en preescolares, la Amoxicilina oral a dosis altas (80-90 mg/kg/día) es la primera línea para vencer la resistencia de neumococos con PBPs alteradas.",
      "En deshidratación moderada (Plan B AIEPI), administrar 50 a 100 mL/kg de Sales de Rehidratación Oral de baja osmolaridad en 4 horas mediante cucharitas o taza bajo observación directa."
    ],
    "keyClinicalProtocols": [
      {
        "protocolName": "Estrategia AIEPI: Diarrea Aguda y Planes de Hidratación A, B y C",
        "summary": "Plan A en el hogar con SRO y Zinc (10-20 mg/d por 14d); Plan B en UCSF con SRO baja osmolaridad (50-100 mL/kg en 4h); Plan C IV con Solución Hartmann a 100 mL/kg en 3 a 6h; proscripción absoluta de loperamida.",
        "institution": "Atención Integrada a las Enfermedades Prevalentes de la Infancia (AIEPI) / MINSAL"
      },
      {
        "protocolName": "Guía Clínica de Bronquiolitis Aguda en el Lactante",
        "summary": "Diagnóstico clínico en <2 años con pródromo catarral y sibilancias; escala Wood-Downes modificada; tratamiento de soporte (aseo nasal, hidratación y O2 si SatO2 <92%); proscripción de salbutamol, corticoides y antibióticos de rutina.",
        "institution": "Servicio de Neumología, Hospital Nacional de Niños Benjamín Bloom"
      },
      {
        "protocolName": "Protocolo de Resucitación del Choque Séptico Pediátrico (PALS)",
        "summary": "Reconocimiento de choque frío vs caliente; bolos de cristaloides a 20 mL/kg en 5-10 min hasta 40-60 mL/kg; acceso intraóseo en <5 min; epinefrina en choque frío; antibióticos en la Hora Dorada.",
        "institution": "Unidad de Cuidados Intensivos Pediátricos (UCIP), Hospital Bloom / PALS AHA"
      },
      {
        "protocolName": "Esquema Nacional de Vacunación PAI de El Salvador",
        "summary": "BCG y HepB al nacer; Pentavalente, IPV, Rotavirus y Neumococo a los 2 y 4 meses; Pentavalente, IPV e Influenza a los 6 meses; SPR, Varicela y Neumococo al año; refuerzos a los 18 meses y 4 años; VPH a los 9-14 años.",
        "institution": "Programa Nacional de Inmunizaciones (PNI), MINSAL El Salvador"
      },
      {
        "protocolName": "Abordaje de la Neumonía Adquirida en la Comunidad (NAC) Pediátrica",
        "summary": "Criterios de taquipnea AIEPI; tiraje como signo de gravedad; Amoxicilina oral a dosis altas (80-90 mg/kg/día) en ambulatorio; Ampicilina IV o Ceftriaxona en hospitalizados; Azitromicina para atípicos.",
        "institution": "Guías Clínicas de Infectología Pediátrica, MINSAL / OPS"
      }
    ],
    "solvedClinicalCases": [
      {
        "id": "case-ped-01",
        "title": "Gastroenteritis Aguda con Deshidratación Grave y Choque Hipovolémico (Plan C AIEPI)",
        "patientProfile": "Lactante de 10 meses de edad, masculino, eutrófico (peso 8.5 kg), es llevado a la emergencia en brazos de su madre por cuadro diarreico severo.",
        "clinicalPresentation": "Lactante de 10 meses de edad, masculino, eutrófico (peso 8.5 kg), es llevado a la emergencia en brazos de su madre por cuadro diarreico severo.. Presenta: La madre refiere que el niño presenta diarrea acuosa abundante y explosiva (más de 12 evacuaciones en 24 horas) asociada a vómitos continuos en 6 ocasiones y rechazo absoluto a la vía oral.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "La madre refiere que el niño presenta diarrea acuosa abundante y explosiva (más de 12 evacuaciones en 24 horas) asociada a vómitos continuos en 6 ocasiones y rechazo absoluto a la vía oral. Al examen físico: lactante somnoliento, responde débilmente a estímulos dolorosos, ojos profundamente hundidos sin lágrimas con párpados semicerrados, fontanela anterior marcadamente deprimida, mucosa oral completamente seca. Al pellizcar la piel del abdomen, el pliegue cutáneo regresa muy lentamente (>2 segundos). Las extremidades se encuentran frías con cianosis ungueal distal, pulsos femorales filiformes y pulsos radiales ausentes. Llenado capilar de 4 segundos. PA: 60/35 mmHg, FC: 172 lpm, FR: 48 rpm, Temp: 36.4 °C.",
        "diagnosticReasoning": "El lactante presenta una Gastroenteritis Aguda con Deshidratación Grave (Grado III, pérdida ponderal >10% de su peso corporal) complicada con Choque Hipovolémico Descompensado. Cumple con los criterios mayores de Deshidratación Grave según AIEPI: letárgico/inconsciente, ojos muy hundidos, no puede beber y signo del pliegue cutáneo que desaparece muy lentamente (>2 segundos). Además, presenta signos cardinales de choque hipovolémico: taquicardia severa (172 lpm), pulsos periféricos ausentes, llenado capilar prolongado (>3 seg) e hipotensión franca (60/35 mmHg para 10 meses de edad). El volumen intravascular colapsado compromete la perfusión cerebral y renal de manera inminente. El manejo exige la aplicación inmediata del Plan C de AIEPI con rehidratación intravenosa rápida con Solución Hartmann (Lactato Ringer) a 100 mL/kg según el esquema para menores de 1 año.",
        "stepByStepReasoning": "El lactante presenta una Gastroenteritis Aguda con Deshidratación Grave (Grado III, pérdida ponderal >10% de su peso corporal) complicada con Choque Hipovolémico Descompensado. Cumple con los criterios mayores de Deshidratación Grave según AIEPI: letárgico/inconsciente, ojos muy hundidos, no puede beber y signo del pliegue cutáneo que desaparece muy lentamente (>2 segundos). Además, presenta signos cardinales de choque hipovolémico: taquicardia severa (172 lpm), pulsos periféricos ausentes, llenado capilar prolongado (>3 seg) e hipotensión franca (60/35 mmHg para 10 meses de edad). El volumen intravascular colapsado compromete la perfusión cerebral y renal de manera inminente. El manejo exige la aplicación inmediata del Plan C de AIEPI con rehidratación intravenosa rápida con Solución Hartmann (Lactato Ringer) a 100 mL/kg según el esquema para menores de 1 año.",
        "differentialDiagnosis": [
          {
            "condition": "Choque Séptico Pediátrico por Meningococcemia o Sepsis Entérica",
            "rulingRationale": "El choque séptico típicamente cursa con fiebre alta o hipotermia con petequias purpúricas y foco primario no digestivo; en este caso existe el antecedente claro de pérdidas diarreicas masivas en 24 horas que explican la hipovolemia pura."
          },
          {
            "condition": "Invaginación Intestinal (Intususcepción)",
            "rulingRationale": "Ocurre en lactantes con cólicos paroxísticos y heces características en \"jalea de grosella\" (moco sanguinolento oscuro) con masa en hipocondrio derecho; en este caso las heces son acuosas abundantes sin sangre."
          },
          {
            "condition": "Cetoacidosis Diabética en Lactante",
            "rulingRationale": "Cursa con deshidratación y taquipnea profunda de Kussmaul pero con hiperglucemia extrema y glucosuria/cetonuria masiva, descartadas con glucemia capilar normal (85 mg/dL)."
          }
        ],
        "managementPlan": [
          "1. Prioridad ABC: colocar oxígeno por cánula nasal a 2 L/min y canalizar de inmediato dos accesos venosos periféricos con catéter 22G o 24G. Si falla la venopunción en <5 minutos, colocar acceso intraóseo en tibia proximal inmediatamente.",
          "2. Activar el Plan C de AIEPI para lactantes menores de 1 año (dosis total de 100 mL/kg en 6 horas para un peso de 8.5 kg = 850 mL de Solución Hartmann):",
          "   - Primera hora: administrar 30 mL/kg (30 x 8.5 = 255 mL de Solución Hartmann IV a pasar en 60 minutos).",
          "   - Siguientes 5 horas: administrar 70 mL/kg (70 x 8.5 = 595 mL de Solución Hartmann IV a razón de 119 mL/hora durante 5 horas).",
          "3. Reevaluar signos vitales, pulsos periféricos y llenado capilar cada 15 a 30 minutos. Si el pulso continúa filiforme o ausente tras la primera hora, repetir un bolo de cristaloides a 20 mL/kg en 20 minutos.",
          "4. Monitoreo de diuresis con bolsa colectora o cateterismo vesical suave (meta de gasto urinario >1 mL/kg/h).",
          "5. Cuando el niño recupere el sensorio y pueda deglutir (habitualmente a la 2.ª o 3.ª hora), iniciar administración oral de SRO de baja osmolaridad a 5 mL/kg/h mientras finaliza la infusión intravenosa.",
          "6. Una vez completado el Plan C, reclasificar el estado de hidratación para continuar con Plan A o B, reanudar lactancia materna y prescribir Sulfato de Zinc elemental a 20 mg/día por 14 días."
        ],
        "therapeuticPlan": [
          "1. Prioridad ABC: colocar oxígeno por cánula nasal a 2 L/min y canalizar de inmediato dos accesos venosos periféricos con catéter 22G o 24G. Si falla la venopunción en <5 minutos, colocar acceso intraóseo en tibia proximal inmediatamente.",
          "2. Activar el Plan C de AIEPI para lactantes menores de 1 año (dosis total de 100 mL/kg en 6 horas para un peso de 8.5 kg = 850 mL de Solución Hartmann):",
          "   - Primera hora: administrar 30 mL/kg (30 x 8.5 = 255 mL de Solución Hartmann IV a pasar en 60 minutos).",
          "   - Siguientes 5 horas: administrar 70 mL/kg (70 x 8.5 = 595 mL de Solución Hartmann IV a razón de 119 mL/hora durante 5 horas).",
          "3. Reevaluar signos vitales, pulsos periféricos y llenado capilar cada 15 a 30 minutos. Si el pulso continúa filiforme o ausente tras la primera hora, repetir un bolo de cristaloides a 20 mL/kg en 20 minutos.",
          "4. Monitoreo de diuresis con bolsa colectora o cateterismo vesical suave (meta de gasto urinario >1 mL/kg/h).",
          "5. Cuando el niño recupere el sensorio y pueda deglutir (habitualmente a la 2.ª o 3.ª hora), iniciar administración oral de SRO de baja osmolaridad a 5 mL/kg/h mientras finaliza la infusión intravenosa.",
          "6. Una vez completado el Plan C, reclasificar el estado de hidratación para continuar con Plan A o B, reanudar lactancia materna y prescribir Sulfato de Zinc elemental a 20 mg/día por 14 días."
        ],
        "pedagogicalRationale": "En menores de 1 año, el Plan C dura 6 horas (30 mL/kg en 1h + 70 mL/kg en 5h); en mayores de 1 año dura 3 horas (30 mL/kg en 30 min + 70 mL/kg en 2.5h). No use agua destilada ni dextrosa pura para resucitar el choque hipovolémico: use siempre cristaloides isotónicos (Hartmann o SSN) para no provocar hiponatremia dilucional y convulsiones.",
        "clinicalPearls": [
          "En menores de 1 año, el Plan C dura 6 horas (30 mL/kg en 1h + 70 mL/kg en 5h); en mayores de 1 año dura 3 horas (30 mL/kg en 30 min + 70 mL/kg en 2.5h).",
          "No use agua destilada ni dextrosa pura para resucitar el choque hipovolémico: use siempre cristaloides isotónicos (Hartmann o SSN) para no provocar hiponatremia dilucional y convulsiones."
        ],
        "officialProtocolRef": "Lineamientos Técnicos para la Atención Integral de la Salud Infantil, MINSAL El Salvador / Guías de Rehidratación Oral y Parenteral AIEPI OPS/OMS."
      },
      {
        "id": "case-ped-02",
        "title": "Lactante de 3 Meses con Bronquiolitis Moderada por VSR y Dificultad Respiratoria (Wood-Downes 6)",
        "patientProfile": "Lactante femenino de 3 meses, nacido a término con peso adecuado, sin antecedentes de displasia broncopulmonar, consulta por tos y respiración agitada.",
        "clinicalPresentation": "Lactante femenino de 3 meses, nacido a término con peso adecuado, sin antecedentes de displasia broncopulmonar, consulta por tos y respiración agitada.. Presenta: La madre refiere que la niña inició hace 3 días con rinorrea hialina y estornudos.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "La madre refiere que la niña inició hace 3 días con rinorrea hialina y estornudos. Desde hace 24 horas la tos se tornó más frecuente y espasmódica, agregándose respiración rápida, hundimiento de las costillas y rechazo paulatino de las tomas de leche materna (solo toma la mitad de su volumen habitual). Al examen físico: lactante reactiva pero irritable al manipularla. PA: 85/55 mmHg, FC: 156 lpm, FR: 66 rpm (taquipnea marcada), Temp: 37.8 °C, SatO2 al aire ambiente: 89%. Al examen del tórax: tiraje subcostal e intercostal moderado con aleteo nasal evidente. A la auscultación pulmonar bilateral: murmullo vesicular rudo con sibilancias espiratorias difusas y estertores subcrepitantes diseminados en ambos tiempos respiratorios. La Escala de Wood-Downes modificada por Ferres arroja 6 puntos (severidad moderada). Panel molecular de aspirado nasofaríngeo: positivo para Virus Sincitial Respiratorio (VSR).",
        "diagnosticReasoning": "La paciente presenta una Bronquiolitis Aguda Típica por Virus Sincitial Respiratorio de severidad moderada (Wood-Downes 6 puntos). Cumple la definición de McConnochie: primer episodio de dificultad respiratoria con sibilancias en un menor de 2 años, precedido por un pródromo catarral de vías aéreas superiores. Fisiopatológicamente, la necrosis del epitelio bronquiolar y el taponamiento mucoso denso provocan áreas de hiperinsuflación y microatelectasias, con desequilibrio en la relación ventilación/perfusión (V/Q) responsable de la hipoxemia observada (SatO2 89%). La FR elevada (>60 rpm) y el tiraje moderado incrementan drásticamente el riesgo de broncoaspiración durante la alimentación oral y fatiga de la musculatura respiratoria. El tratamiento normado por el Hospital Benjamín Bloom y la AAP es de soporte fisiológico estricto: oxigenoterapia para corregir la hipoxemia, hidratación parenteral por riesgo de aspiración y aseo nasal suave. Se proscriben los corticoides, los antibióticos y el uso rutinario de salbutamol.",
        "stepByStepReasoning": "La paciente presenta una Bronquiolitis Aguda Típica por Virus Sincitial Respiratorio de severidad moderada (Wood-Downes 6 puntos). Cumple la definición de McConnochie: primer episodio de dificultad respiratoria con sibilancias en un menor de 2 años, precedido por un pródromo catarral de vías aéreas superiores. Fisiopatológicamente, la necrosis del epitelio bronquiolar y el taponamiento mucoso denso provocan áreas de hiperinsuflación y microatelectasias, con desequilibrio en la relación ventilación/perfusión (V/Q) responsable de la hipoxemia observada (SatO2 89%). La FR elevada (>60 rpm) y el tiraje moderado incrementan drásticamente el riesgo de broncoaspiración durante la alimentación oral y fatiga de la musculatura respiratoria. El tratamiento normado por el Hospital Benjamín Bloom y la AAP es de soporte fisiológico estricto: oxigenoterapia para corregir la hipoxemia, hidratación parenteral por riesgo de aspiración y aseo nasal suave. Se proscriben los corticoides, los antibióticos y el uso rutinario de salbutamol.",
        "differentialDiagnosis": [
          {
            "condition": "Crisis Asmática del Lactante",
            "rulingRationale": "El asma es excepcional a los 3 meses de edad y requiere episodios recurrentes previos de sibilancias con respuesta franca a broncodilatadores y fuerte historia atópica familiar; a los 3 meses es el primer episodio típicamente viral."
          },
          {
            "condition": "Neumonía Bacteriana por Streptococcus pneumoniae",
            "rulingRationale": "La neumonía bacteriana suele cursar con fiebre alta en picos (>39 °C), consolidación focal auscultatoria unilateral con soplo tubárico y condensación lobar radiológica; la bronquiolitis presenta sibilancias y subcrepitantes bilaterales difusos con hiperinsuflación."
          },
          {
            "condition": "Cardiopatía Congénita con Insuficiencia Cardíaca (CIV grande)",
            "rulingRationale": "Cursaría con soplo cardíaco pansistólico evidente, hepatomegalia congestiva >3 cm y fallo de medro previo (curva de peso aplanada), ausentes en esta paciente."
          }
        ],
        "managementPlan": [
          "1. Hospitalizar en sala de lactantes de medicina pediátrica con monitorización continua de oximetría de pulso y frecuencia cardiorrespiratoria.",
          "2. Oxigenoterapia suplementaria humedecida mediante cánula nasal a 1-1.5 L/min con el objetivo de mantener la saturación de oxígeno por pulsoximetría entre 92% y 95%.",
          "3. Suspender transitoriamente la alimentación por vía oral debido a taquipnea severa (FR 66 rpm) con tiraje para evitar la broncoaspiración pulmonar.",
          "4. Iniciar hidratación intravenosa parenteral de mantenimiento con Dextrosa al 5% en Solución Salina al 0.45% con 20 mEq de KCl por litro, a razón de 80 mL/kg/día por bomba de infusión.",
          "5. Posición semifowler a 30 grados y aspiración suave de secreciones nasales con jeringa de bulbo o sonda blanda tras instilar 2 a 3 gotas de solución salina al 0.9% en cada fosa nasal antes de dormir.",
          "6. CONTRAINDICAR formalmente el uso de dexametasona o prednisona oral, antibióticos empíricos (como amoxicilina o ceftriaxona) y nebulizaciones rutinarias continuas con salbutamol.",
          "7. Reiniciar progresivamente la alimentación con leche materna fraccionada por succión o sonda orogástrica cuando la FR descienda de forma sostenida a <60 rpm y el trabajo respiratorio disminuya."
        ],
        "therapeuticPlan": [
          "1. Hospitalizar en sala de lactantes de medicina pediátrica con monitorización continua de oximetría de pulso y frecuencia cardiorrespiratoria.",
          "2. Oxigenoterapia suplementaria humedecida mediante cánula nasal a 1-1.5 L/min con el objetivo de mantener la saturación de oxígeno por pulsoximetría entre 92% y 95%.",
          "3. Suspender transitoriamente la alimentación por vía oral debido a taquipnea severa (FR 66 rpm) con tiraje para evitar la broncoaspiración pulmonar.",
          "4. Iniciar hidratación intravenosa parenteral de mantenimiento con Dextrosa al 5% en Solución Salina al 0.45% con 20 mEq de KCl por litro, a razón de 80 mL/kg/día por bomba de infusión.",
          "5. Posición semifowler a 30 grados y aspiración suave de secreciones nasales con jeringa de bulbo o sonda blanda tras instilar 2 a 3 gotas de solución salina al 0.9% en cada fosa nasal antes de dormir.",
          "6. CONTRAINDICAR formalmente el uso de dexametasona o prednisona oral, antibióticos empíricos (como amoxicilina o ceftriaxona) y nebulizaciones rutinarias continuas con salbutamol.",
          "7. Reiniciar progresivamente la alimentación con leche materna fraccionada por succión o sonda orogástrica cuando la FR descienda de forma sostenida a <60 rpm y el trabajo respiratorio disminuya."
        ],
        "pedagogicalRationale": "En bronquiolitis viral, \"menos es más\": los corticoides y antibióticos no sirven y el salbutamol habitualmente no funciona porque los bronquiolos carecen de receptores beta-2 desarrollados a esta edad. Si un lactante con bronquiolitis respira a más de 60 por minuto, no le dé biberón ni pecho por boca: suspenda la vía oral para no causar una neumonía por broncoaspiración.",
        "clinicalPearls": [
          "En bronquiolitis viral, \"menos es más\": los corticoides y antibióticos no sirven y el salbutamol habitualmente no funciona porque los bronquiolos carecen de receptores beta-2 desarrollados a esta edad.",
          "Si un lactante con bronquiolitis respira a más de 60 por minuto, no le dé biberón ni pecho por boca: suspenda la vía oral para no causar una neumonía por broncoaspiración."
        ],
        "officialProtocolRef": "Lineamientos Técnicos para el Manejo de la Bronquiolitis Aguda, Hospital Nacional de Niños Benjamín Bloom / Guías Clínicas de la AAP."
      },
      {
        "id": "case-ped-03",
        "title": "Choque Séptico Pediátrico Frío Secundario a Neumonía Bacteriana Grave en Hospital Bloom",
        "patientProfile": "Niño de 2 años y medio, masculino, previamente sano con esquema de vacunación incompleto, acude traído por fiebre alta y decaimiento extremo.",
        "clinicalPresentation": "Niño de 2 años y medio, masculino, previamente sano con esquema de vacunación incompleto, acude traído por fiebre alta y decaimiento extremo.. Presenta: La madre refiere que el niño comenzó hace 4 días con fiebre de 39.5 °C, tos productiva y decaimiento.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "La madre refiere que el niño comenzó hace 4 días con fiebre de 39.5 °C, tos productiva y decaimiento. Desde hace 12 horas dejó de jugar, se encuentra profundamente somnoliento y quejumbroso, orinando solo una vez en las últimas 18 horas. Al examen físico en sala de reanimación: niño letárgico, pálido y con piel marmórea en tronco y extremidades. Las manos y pies están helados al tacto, con llenado capilar prolongado de 5 segundos. Pulsos femorales filiformes muy débiles y pulsos radiales y pedios impalpables. PA: 72/40 mmHg (hipotensión severa para la edad), FC: 182 lpm (taquicardia extrema), FR: 52 rpm con quejido espiratorio audible y tiraje subcostal e intercostal intenso. Temp: 38.8 °C. Auscultación pulmonar: murmullo vesicular abolido con soplo tubárico y estertores crepitantes en hemitórax derecho basal. Abdomen blando con hígado palpable a 1 cm bajo el reborde costal.",
        "diagnosticReasoning": "El paciente presenta un Choque Séptico Pediátrico Descompensado (\"Choque Frío\") secundario a una Neumonía Bacteriana Grave lobar derecha probablemente por Streptococcus pneumoniae o Staphylococcus aureus. Cumple con la definición del consenso internacional de sepsis y guías PALS: disfunción cardiovascular potencialmente mortal causada por una respuesta desregulada a la infección, evidenciada por hipoperfusión tisular crítica (letargia, extremidades frías, piel marmórea, llenado capilar prolongado de 5 segundos, oliguria y taquicardia extrema de 182 lpm). Además, la presencia de hipotensión franca (72/40 mmHg, por debajo del percentil 5 para 2 años) indica que los mecanismos compensatorios de vasoconstricción periférica se agotaron, entrando en fase de choque descompensado de altísimo riesgo de paro cardiorrespiratorio inminente. El protocolo de reanimación del Hospital Benjamín Bloom exige reanimación con bolos de cristaloides a 20 mL/kg, acceso vascular inmediato (intraóseo si es necesario en <5 min), inotrópico de elección para choque frío (Epinefrina) y antibióticos intravenosos de amplio espectro en la Hora Dorada.",
        "stepByStepReasoning": "El paciente presenta un Choque Séptico Pediátrico Descompensado (\"Choque Frío\") secundario a una Neumonía Bacteriana Grave lobar derecha probablemente por Streptococcus pneumoniae o Staphylococcus aureus. Cumple con la definición del consenso internacional de sepsis y guías PALS: disfunción cardiovascular potencialmente mortal causada por una respuesta desregulada a la infección, evidenciada por hipoperfusión tisular crítica (letargia, extremidades frías, piel marmórea, llenado capilar prolongado de 5 segundos, oliguria y taquicardia extrema de 182 lpm). Además, la presencia de hipotensión franca (72/40 mmHg, por debajo del percentil 5 para 2 años) indica que los mecanismos compensatorios de vasoconstricción periférica se agotaron, entrando en fase de choque descompensado de altísimo riesgo de paro cardiorrespiratorio inminente. El protocolo de reanimación del Hospital Benjamín Bloom exige reanimación con bolos de cristaloides a 20 mL/kg, acceso vascular inmediato (intraóseo si es necesario en <5 min), inotrópico de elección para choque frío (Epinefrina) y antibióticos intravenosos de amplio espectro en la Hora Dorada.",
        "differentialDiagnosis": [
          {
            "condition": "Choque Cardiogénico por Miocarditis Viral Aguda",
            "rulingRationale": "La miocarditis suele presentar cardiomegalia radiológica, galope por R3, arritmias ventriculares y hepatomegalia marcada (>3-4 cm) sin consolidación pulmonar focal lobar ni fiebre bacteriana alta."
          },
          {
            "condition": "Choque Hipovolémico por Deshidratación Aguda",
            "rulingRationale": "Carece de pérdidas gastrointestinales masivas (no hay diarrea ni vómitos); el foco primario evidente es la neumonía condensante lobar derecha con respuesta inflamatoria sistémica severa."
          },
          {
            "condition": "Choque Anafiláctico Severo",
            "rulingRationale": "La anafilaxia ocurre de forma hiperaguda en minutos tras exposición a alergeno, acompañada de urticaria, angioedema y broncoespasmo bilateral, sin foco infeccioso pulmonar de 4 días de evolución."
          }
        ],
        "managementPlan": [
          "1. Prioridad 0 a 5 minutos: asegurar vía aérea con oxígeno al 100% por máscara con reservorio y canalizar dos vías venosas gruesas; al fracasar el segundo intento en 3 minutos, colocar ACCESO INTRAÓSEO en la tuberosidad tibial proximal izquierda sin titubear.",
          "2. Resucitación hídrica rápida (Minutos 5 a 15): infundir bolo de cristaloides isotónicos (Lactato Ringer o SSN al 0.9%) a 20 mL/kg en 10 minutos (240 mL para 12 kg de peso estimado) mediante técnica de jeringa con llave de 3 vías. Reevaluar perfusión y hepatomegalia. Administrar un segundo bolo a 20 mL/kg si persisten pulsos débiles y llenado capilar lento sin crepitantes adicionales.",
          "3. Choque frío refractario a volumen (Minutos 15 a 30): iniciar infusión continua de Epinefrina (adrenalina) a 0.05-0.1 mcg/kg/min por la vía intraósea o periférica, titulando hasta 0.3 mcg/kg/min para optimizar la contractilidad miocárdica y el gasto cardíaco.",
          "4. Hora Dorada de Antibioticoterapia: tomar hemocultivos inmediatos y administrar antibióticos empíricos parenterales de amplio espectro dentro de los primeros 60 minutos: Ceftriaxona 100 mg/kg/día IV más Vancomicina 60 mg/kg/día IV dividida cada 6 horas.",
          "5. Corrección metabólica: medir glucemia capilar y corregir de inmediato hipoglucemia si glicemia <70 mg/dL (Dextrosa al 10% a 2 mL/kg en bolo) y gluconato de calcio al 10% (100 mg/kg IV en 15 min) si hay hipocalcemia ionizada.",
          "6. Traslado e ingreso inmediato a la Unidad de Cuidados Intensivos Pediátricos (UCIP) para colocación de catéter venoso central, línea arterial para monitoreo invasivo de presión y ventilación mecánica invasiva si persiste el deterioro neurológico."
        ],
        "therapeuticPlan": [
          "1. Prioridad 0 a 5 minutos: asegurar vía aérea con oxígeno al 100% por máscara con reservorio y canalizar dos vías venosas gruesas; al fracasar el segundo intento en 3 minutos, colocar ACCESO INTRAÓSEO en la tuberosidad tibial proximal izquierda sin titubear.",
          "2. Resucitación hídrica rápida (Minutos 5 a 15): infundir bolo de cristaloides isotónicos (Lactato Ringer o SSN al 0.9%) a 20 mL/kg en 10 minutos (240 mL para 12 kg de peso estimado) mediante técnica de jeringa con llave de 3 vías. Reevaluar perfusión y hepatomegalia. Administrar un segundo bolo a 20 mL/kg si persisten pulsos débiles y llenado capilar lento sin crepitantes adicionales.",
          "3. Choque frío refractario a volumen (Minutos 15 a 30): iniciar infusión continua de Epinefrina (adrenalina) a 0.05-0.1 mcg/kg/min por la vía intraósea o periférica, titulando hasta 0.3 mcg/kg/min para optimizar la contractilidad miocárdica y el gasto cardíaco.",
          "4. Hora Dorada de Antibioticoterapia: tomar hemocultivos inmediatos y administrar antibióticos empíricos parenterales de amplio espectro dentro de los primeros 60 minutos: Ceftriaxona 100 mg/kg/día IV más Vancomicina 60 mg/kg/día IV dividida cada 6 horas.",
          "5. Corrección metabólica: medir glucemia capilar y corregir de inmediato hipoglucemia si glicemia <70 mg/dL (Dextrosa al 10% a 2 mL/kg en bolo) y gluconato de calcio al 10% (100 mg/kg IV en 15 min) si hay hipocalcemia ionizada.",
          "6. Traslado e ingreso inmediato a la Unidad de Cuidados Intensivos Pediátricos (UCIP) para colocación de catéter venoso central, línea arterial para monitoreo invasivo de presión y ventilación mecánica invasiva si persiste el deterioro neurológico."
        ],
        "pedagogicalRationale": "En el choque séptico pediátrico no espere a que baje la presión arterial para diagnosticarlo: la hipotensión es el último escalón antes de la muerte. Diagnostíquelo con taquicardia, frialdad y llenado capilar >3 segundos. En choque frío pediátrico, el fármaco vasoactivo de primera línea es la Epinefrina, no la dopamina ni la norepinefrina.",
        "clinicalPearls": [
          "En el choque séptico pediátrico no espere a que baje la presión arterial para diagnosticarlo: la hipotensión es el último escalón antes de la muerte. Diagnostíquelo con taquicardia, frialdad y llenado capilar >3 segundos.",
          "En choque frío pediátrico, el fármaco vasoactivo de primera línea es la Epinefrina, no la dopamina ni la norepinefrina."
        ],
        "officialProtocolRef": "Guía Clínica de Sepsis y Choque Séptico Pediátrico, Hospital Nacional de Niños Benjamín Bloom / Guías PALS (Pediatric Advanced Life Support) AHA."
      },
      {
        "id": "case-ped-04",
        "title": "Neumonía Bacteriana Adquirida en la Comunidad Típica en Preescolar Tratada con Amoxicilina a Dosis Altas",
        "patientProfile": "Niña de 3 años y 8 meses, con vacunas completas según cartilla MINSAL, es llevada a la UCSF por tos y dificultad para respirar.",
        "clinicalPresentation": "Niña de 3 años y 8 meses, con vacunas completas según cartilla MINSAL, es llevada a la UCSF por tos y dificultad para respirar.. Presenta: La madre refiere que la niña comenzó hace 2 días con fiebre alta de 39.0 °C que cede parcialmente con paracetamol, agregándose tos húmeda productiva y dolor en el costado derecho del pecho al toser (\"dolor en punta de costado\").",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "La madre refiere que la niña comenzó hace 2 días con fiebre alta de 39.0 °C que cede parcialmente con paracetamol, agregándose tos húmeda productiva y dolor en el costado derecho del pecho al toser (\"dolor en punta de costado\"). Hoy la madre nota que respira muy rápido y rechaza los alimentos sólidos, aunque tolera líquidos. Al examen físico: alerta, febril y quejumbrosa. PA: 95/60 mmHg, FC: 128 lpm, FR: 46 rpm (taquipnea franca para la edad según AIEPI: límite ≥40 rpm), Temp: 38.7 °C, SatO2: 95% al aire ambiente. A la inspección del tórax: respiración rápida sin tiraje subcostal marcado ni aleteo nasal. A la auscultación pulmonar: murmullo vesicular disminuido en la base pulmonar derecha con estertores crepitantes localizados inspiratorios y aumento del frémito vocal a la palpación. Sin sibilancias. Radiografía anteroposterior de tórax: imagen de consolidación alveolar densa homogénea bien delimitada en el lóbulo inferior derecho con broncograma aéreo en su interior, sin derrame pleural visible.",
        "diagnosticReasoning": "La paciente presenta una Neumonía Adquirida en la Comunidad (NAC) Bacteriana Típica no grave. Cumple el criterio diagnóstico cardinal de AIEPI de neumonía: tos acompañada de taquipnea (46 respiraciones por minuto, superando el punto de corte de ≥40 rpm para niños de 1 a 4 años), con semiología clásica de condensación lobar alveolar (crepitantes localizados, frémito aumentado y consolidación lobar derecha con broncograma aéreo en la radiografía). Al no presentar signos de peligro general (tolera líquidos, no vomita todo, no convulsiona, no está letárgica) ni signos de severidad extrema (sin tiraje subcostal severo, sin estridor en reposo y SatO2 normal de 95% >92%), se clasifica como Neumonía no grave de manejo ambulatorio supervisado. El agente bacteriano etiológico preponderante en este grupo etario con consolidación lobar típica es Streptococcus pneumoniae (neumococo). Las guías oficiales del MINSAL, la Asociación Latinoamericana de Pediatría (ALAPE) y la OPS establecen categóricamente a la Amoxicilina oral a dosis altas (80-90 mg/kg/día) como el tratamiento antimicrobiano de primera elección indiscutible.",
        "stepByStepReasoning": "La paciente presenta una Neumonía Adquirida en la Comunidad (NAC) Bacteriana Típica no grave. Cumple el criterio diagnóstico cardinal de AIEPI de neumonía: tos acompañada de taquipnea (46 respiraciones por minuto, superando el punto de corte de ≥40 rpm para niños de 1 a 4 años), con semiología clásica de condensación lobar alveolar (crepitantes localizados, frémito aumentado y consolidación lobar derecha con broncograma aéreo en la radiografía). Al no presentar signos de peligro general (tolera líquidos, no vomita todo, no convulsiona, no está letárgica) ni signos de severidad extrema (sin tiraje subcostal severo, sin estridor en reposo y SatO2 normal de 95% >92%), se clasifica como Neumonía no grave de manejo ambulatorio supervisado. El agente bacteriano etiológico preponderante en este grupo etario con consolidación lobar típica es Streptococcus pneumoniae (neumococo). Las guías oficiales del MINSAL, la Asociación Latinoamericana de Pediatría (ALAPE) y la OPS establecen categóricamente a la Amoxicilina oral a dosis altas (80-90 mg/kg/día) como el tratamiento antimicrobiano de primera elección indiscutible.",
        "differentialDiagnosis": [
          {
            "condition": "Neumonía Viral por Virus Sincitial Respiratorio o Influenza",
            "rulingRationale": "La neumonía viral típicamente presenta infiltrados intersticiales peribronquiales bilaterales difusos con hiperinsuflación y sibilancias difusas, mientras que esta paciente presenta un cuadro bacteriano típico con fiebre alta súbita, condensación lobar densa única y broncograma aéreo."
          },
          {
            "condition": "Neumonía Atípica por Mycoplasma pneumoniae",
            "rulingRationale": "El Mycoplasma es característico de niños mayores de 5 años y adolescentes; cursa con tos seca persistente \"en ametralladora\", escasa semiología auscultatoria en relación a una radiografía con infiltrado reticular bilateral, sin consolidación lobar franca."
          },
          {
            "condition": "Aspiración de Cuerpo Extraño en Vía Aérea",
            "rulingRationale": "Cursa con episodio súbito de asfixia o atragantamiento seguido de hipoventilación unilateral y atrapamiento aéreo radiológico con enfisema obstructivo, sin fiebre alta de 2 días de evolución."
          }
        ],
        "managementPlan": [
          "1. Tratamiento ambulatorio en el hogar con control y cita de seguimiento obligatorio a las 48 horas en la UCSF.",
          "2. Antibiótico de primera elección según Guía MINSAL: Amoxicilina oral a dosis altas de 90 mg/kg/día fraccionada cada 8 o 12 horas por un período de 5 a 7 días (para vencer el mecanismo de resistencia por alteración de PBPs de Streptococcus pneumoniae).",
          "3. Manejo sintomático de la fiebre con Paracetamol oral a 15 mg/kg cada 6 horas según necesidad.",
          "4. Mantener una hidratación oral abundante y fraccionar la alimentación habitual.",
          "5. Educación a la madre sobre signos de alarma para reconsultar de inmediato antes de las 48 horas: aparición de tiraje subcostal (hundimiento de costillas), quejido al respirar, imposibilidad para beber líquidos o vómitos frecuentes, letargo o fiebre refractaria >72 horas.",
          "6. Si en la reevaluación a las 48 horas persiste fiebre alta con empeoramiento del trabajo respiratorio, reclasificar como neumonía refractaria o complicada con derrame paraneumónico y referir a hospital para cambio a Ceftriaxona parenteral."
        ],
        "therapeuticPlan": [
          "1. Tratamiento ambulatorio en el hogar con control y cita de seguimiento obligatorio a las 48 horas en la UCSF.",
          "2. Antibiótico de primera elección según Guía MINSAL: Amoxicilina oral a dosis altas de 90 mg/kg/día fraccionada cada 8 o 12 horas por un período de 5 a 7 días (para vencer el mecanismo de resistencia por alteración de PBPs de Streptococcus pneumoniae).",
          "3. Manejo sintomático de la fiebre con Paracetamol oral a 15 mg/kg cada 6 horas según necesidad.",
          "4. Mantener una hidratación oral abundante y fraccionar la alimentación habitual.",
          "5. Educación a la madre sobre signos de alarma para reconsultar de inmediato antes de las 48 horas: aparición de tiraje subcostal (hundimiento de costillas), quejido al respirar, imposibilidad para beber líquidos o vómitos frecuentes, letargo o fiebre refractaria >72 horas.",
          "6. Si en la reevaluación a las 48 horas persiste fiebre alta con empeoramiento del trabajo respiratorio, reclasificar como neumonía refractaria o complicada con derrame paraneumónico y referir a hospital para cambio a Ceftriaxona parenteral."
        ],
        "pedagogicalRationale": "En preescolares con neumonía típica ambulatoria, la Amoxicilina debe darse a dosis altas (80-90 mg/kg/día): la dosis clásica de 40-50 mg/kg/día fracasa ante cepas de neumococo con sensibilidad intermedia. La taquipnea es el signo clínico más sensible para diagnosticar neumonía en niños en atención primaria: cuente la frecuencia respiratoria durante un minuto completo.",
        "clinicalPearls": [
          "En preescolares con neumonía típica ambulatoria, la Amoxicilina debe darse a dosis altas (80-90 mg/kg/día): la dosis clásica de 40-50 mg/kg/día fracasa ante cepas de neumococo con sensibilidad intermedia.",
          "La taquipnea es el signo clínico más sensible para diagnosticar neumonía en niños en atención primaria: cuente la frecuencia respiratoria durante un minuto completo."
        ],
        "officialProtocolRef": "Lineamientos Técnicos para la Prevención, Diagnóstico y Tratamiento de las Infecciones Respiratorias Agudas (IRAS), MINSAL El Salvador / Guías de Práctica Clínica Neumonía Pediátrica OPS/OMS."
      },
      {
        "id": "case-ped-05",
        "title": "Dengue Pediátrico con Signos de Alarma (Grupo B2 MINSAL) en Escolar con Fuga Plasmática",
        "patientProfile": "Escolar femenina de 8 años, residente de zona urbana de San Salvador, consulta en el 4.° día de enfermedad febril aguda.",
        "clinicalPresentation": "Escolar femenina de 8 años, residente de zona urbana de San Salvador, consulta en el 4.° día de enfermedad febril aguda.. Presenta: La madre refiere que la niña tuvo fiebre de 39.2 °C con cefalea y dolor de cuerpo durante 3 días.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "La madre refiere que la niña tuvo fiebre de 39.2 °C con cefalea y dolor de cuerpo durante 3 días. En las últimas 18 horas la fiebre remitió por completo, pero la paciente comenzó con dolor abdominal intenso, continuo y difuso, náuseas y vómitos en 4 ocasiones, negándose a comer y quejándose de mareos al levantarse. Al examen físico: niña postrada en la camilla, letárgica, con frialdad distal en manos y pies. Llenado capilar de 3 segundos. PA: 90/70 mmHg (presión de pulso o diferencial estrecha de 20 mmHg), FC: 115 lpm, FR: 24 rpm, Temp: 36.6 °C. A la palpación abdominal: abdomen distendido con dolor exquisito generalizado, mayor en hipocondrio derecho con hepatomegalia palpable a 3.5 cm bajo el reborde costal. Auscultación pulmonar: murmullo vesicular disminuido en base pulmonar derecha con matidez a la percusión (derrame pleural incipiente). Hemograma urgente: Hematocrito: 49% (basal estimado 35%, aumento de más del 35%), Leucocitos: 2,800/mm³, Plaquetas: 38,000/mm³.",
        "diagnosticReasoning": "La paciente escolar cursa con Dengue con Signos de Alarma (Grupo B2 según clasificación MINSAL/OPS) ingresando a la Fase Crítica de la enfermedad. La defervescencia de la fiebre marca el inicio de la fuga plasmática endotelial masiva. Presenta múltiples signos de alarma cardinales: 1) Dolor abdominal intenso y continuo, 2) Vómitos persistentes (4 episodios), 3) Hepatomegalia marcada >2 cm (3.5 cm), 4) Acumulación clínica de líquidos evidenciada por derrame pleural derecho incipiente, 5) Letargia y decaimiento, 6) Presión de pulso estrecha o convergente (PAS - PAD = 20 mmHg), signo inequívoco de choque compensado temprano por hipovolemia, y 7) Hemoconcentración severa con incremento del hematocrito >20% asociado a leucopenia y trombocitopenia marcada. Corresponde al Grupo B2 del MINSAL: requiere hospitalización inmediata y reanimación hídrica protocolizada con cristaloides isotónicos.",
        "stepByStepReasoning": "La paciente escolar cursa con Dengue con Signos de Alarma (Grupo B2 según clasificación MINSAL/OPS) ingresando a la Fase Crítica de la enfermedad. La defervescencia de la fiebre marca el inicio de la fuga plasmática endotelial masiva. Presenta múltiples signos de alarma cardinales: 1) Dolor abdominal intenso y continuo, 2) Vómitos persistentes (4 episodios), 3) Hepatomegalia marcada >2 cm (3.5 cm), 4) Acumulación clínica de líquidos evidenciada por derrame pleural derecho incipiente, 5) Letargia y decaimiento, 6) Presión de pulso estrecha o convergente (PAS - PAD = 20 mmHg), signo inequívoco de choque compensado temprano por hipovolemia, y 7) Hemoconcentración severa con incremento del hematocrito >20% asociado a leucopenia y trombocitopenia marcada. Corresponde al Grupo B2 del MINSAL: requiere hospitalización inmediata y reanimación hídrica protocolizada con cristaloides isotónicos.",
        "differentialDiagnosis": [
          {
            "condition": "Apendicitis Aguda Pediátrica",
            "rulingRationale": "El dolor abdominal y vómitos simulan apendicitis, pero la presencia de defervescencia, leucopenia marcada (2,800/mm³), trombocitopenia y hemoconcentración ubica el origen en fuga plasmática por dengue, no en infección bacteriana apendicular."
          },
          {
            "condition": "Choque Séptico Bacteriano Pediátrico",
            "rulingRationale": "El choque séptico cursa con leucocitosis con neutrofilia, reactantes de fase aguda muy elevados y sin el patrón hematológico de hemoconcentración con trombocitopenia en fase de defervescencia."
          },
          {
            "condition": "Intoxicación Alimentaria Aguda",
            "rulingRationale": "Carece del pródromo febril de 3 días con mialgias intensas y no produce hemoconcentración con fuga capilar ni derrame pleural."
          }
        ],
        "managementPlan": [
          "1. Hospitalizar de inmediato en sala de dengue pediátrico con monitoreo estricto de signos vitales cada 1 hora.",
          "2. Iniciar resucitación hídrica intravenosa con cristaloides isotónicos (Lactato Ringer o SSN al 0.9%) a 10 mL/kg en la primera hora (250 mL para 25 kg de peso).",
          "3. Evaluar respuesta clínica al cabo de la primera hora: si la diuresis es ≥1 mL/kg/h, la frecuencia cardíaca disminuye y la presión de pulso se abre (>20 mmHg), titular líquidos a 5-7 mL/kg/h durante 2 a 4 horas.",
          "4. Reducir progresivamente a 3-5 mL/kg/h por 2-4 horas y luego a 2-3 mL/kg/h según monitoreo del hematocrito cada 12 horas.",
          "5. Suspender la fluidoterapia intravenosa inmediatamente a las 48 horas de la defervescencia para evitar el edema agudo de pulmón por hipervolemia durante la fase de reabsorción.",
          "6. CONTRAINDICAR formalmente antiinflamatorios no esteroideos (ibuprofeno, diclofenaco), aspirina y corticoides."
        ],
        "therapeuticPlan": [
          "1. Hospitalizar de inmediato en sala de dengue pediátrico con monitoreo estricto de signos vitales cada 1 hora.",
          "2. Iniciar resucitación hídrica intravenosa con cristaloides isotónicos (Lactato Ringer o SSN al 0.9%) a 10 mL/kg en la primera hora (250 mL para 25 kg de peso).",
          "3. Evaluar respuesta clínica al cabo de la primera hora: si la diuresis es ≥1 mL/kg/h, la frecuencia cardíaca disminuye y la presión de pulso se abre (>20 mmHg), titular líquidos a 5-7 mL/kg/h durante 2 a 4 horas.",
          "4. Reducir progresivamente a 3-5 mL/kg/h por 2-4 horas y luego a 2-3 mL/kg/h según monitoreo del hematocrito cada 12 horas.",
          "5. Suspender la fluidoterapia intravenosa inmediatamente a las 48 horas de la defervescencia para evitar el edema agudo de pulmón por hipervolemia durante la fase de reabsorción.",
          "6. CONTRAINDICAR formalmente antiinflamatorios no esteroideos (ibuprofeno, diclofenaco), aspirina y corticoides."
        ],
        "pedagogicalRationale": "En niños con dengue, la presión de pulso convergente (≤20 mmHg) es la señal de advertencia más precoz de choque antes de que caiga la presión sistólica: actúe de inmediato con cristaloides. La hidratación en dengue pediátrico debe ser como un grifo que se abre al máximo en la fuga y se cierra progresivamente para no ahogar al niño en la reabsorción.",
        "clinicalPearls": [
          "En niños con dengue, la presión de pulso convergente (≤20 mmHg) es la señal de advertencia más precoz de choque antes de que caiga la presión sistólica: actúe de inmediato con cristaloides.",
          "La hidratación en dengue pediátrico debe ser como un grifo que se abre al máximo en la fuga y se cierra progresivamente para no ahogar al niño en la reabsorción."
        ],
        "officialProtocolRef": "Lineamientos Técnicos para la Prevención y Control del Dengue en Pediatría, MINSAL El Salvador / Guía de Dengue OPS/OMS."
      }
    ]
  },
  {
    "id": "unit-ginecologia-obstetricia",
    "specialtyId": "ginecologia_obstetricia",
    "specialtyName": "Ginecología y Obstetricia",
    "title": "Emergencias Obstétricas y Salud Materno-Fetal: Preeclampsia Severa (Zuspan), Código Rojo y Parto Respetado",
    "substantiveTheory": "Las emergencias obstétricas representan las principales causas de morbimortalidad materna evitable en El Salvador. El Consejo de Residentados Médicos y el MINSAL exigen el dominio absoluto de los protocolos de manejo de los Trastornos Hipertensivos del Embarazo (Código Naranja / Esquema Zuspan) y de la Hemorragia Posparto (Código Rojo Obstétrico).\n\n1. Trastornos Hipertensivos del Embarazo y Criterios de Severidad:\nLos trastornos hipertensivos complican entre el 8% y 10% de las gestaciones. Según la clasificación del MINSAL y ACOG:\n- Hipertensión Gestacional: Presión arterial sistólica ≥140 mmHg y/o diastólica ≥90 mmHg tomada en dos ocasiones separadas por 4 horas después de la semana 20 de gestación en una mujer previamente normotensa, en ausencia de proteinuria y sin criterios de severidad.\n- Preeclampsia sin Criterios de Severidad: PA ≥140/90 mmHg después de las 20 semanas asociada a Proteinuria significativa (definida como proteinuria en tira reactiva ≥1+, relación proteína/creatinina en orina al azar ≥0.3 mg/mg, o proteinuria en recolección de 24 horas ≥300 mg).\n- Preeclampsia con Criterios de Severidad: Presencia de PA sistólica ≥160 mmHg y/o diastólica ≥110 mmHg en dos ocasiones separadas por 15 minutos en reposo, O preeclampsia acompañada de cualquiera de los siguientes Criterios de Severidad (daño a órgano blanco):\n  1) Trombocitopenia severa: recuento plaquetario <100,000/uL.\n  2) Disfunción hepática: elevación de transaminasas séricas (AST o ALT) al doble del valor normal de referencia o dolor persistente e intenso en epigastrio o hipocondrio derecho refractario a analgésicos comunes (distensión de la cápsula de Glisson).\n  3) Insuficiencia renal progresiva: creatinina sérica >1.1 mg/dL o duplicación de su valor basal en ausencia de enfermedad renal previa.\n  4) Edema agudo de pulmón de origen cardiogénico o no cardiogénico.\n  5) Alteraciones cerebrales o visuales de inicio reciente: cefalea frontal severa refractaria, fotopsias, escotomas centellantes, amaurosis fugaz o hiperreflexia patelar marcada con clonus.\n- Eclampsia: Aparición de una o más crisis convulsivas tónico-clónicas generalizadas no atribuibles a otras causas neurológicas (epilepsia, hemorragia subaracnoidea) en una paciente con preeclampsia antes, durante o después del parto.\n- Síndrome HELLP: Variante grave de preeclampsia caracterizada por Hemólisis microangiopatía (esquistocitos en frotis de sangre periférica, bilirrubina indirecta elevada ≥1.2 mg/dL, LDH elevada >600 UI/L), Enzimas hepáticas elevadas (AST/ALT elevadas al doble) y Plaquetas bajas (trombocitopenia <100,000/uL).\n\n2. Esquema de Zuspan para Sulfato de Magnesio al 20%:\nEl Sulfato de Magnesio es el anticonvulsivante de elección incuestionable para la profilaxis y tratamiento de las convulsiones eclámpticas (ensayo Collaborative Eclampsia Trial). Bloquea los receptores NMDA cerebrales, produce vasodilatación de las arterias cerebrales y reduce el edema vasogénico.\nProtocolo MINSAL / Esquema de Zuspan:\na) Dosis de Carga (Impregnación): 4 g de Sulfato de Magnesio al 20% (equivalente a 20 mL de solución al 20%) diluidos en 80-100 mL de Solución Salina Normal al 0.9% o Dextrosa al 5%, infundidos por vía intravenosa lenta en un lapso de 15 a 20 minutos con bomba de infusión continua.\nb) Dosis de Mantenimiento: 1 g/hora en infusión intravenosa continua continua (diluir 10 g [50 mL de sulfato de magnesio al 20%] en 450 mL de solución salina, pasando a 50 mL/h) durante un mínimo de 24 horas posteriores al parto o a la última crisis convulsiva. Si la paciente convulsiona durante la infusión de mantenimiento, se administra un bolo adicional de 2 g IV en 5-10 minutos y se incrementa la infusión a 2 g/h.\nMonitoreo clínico obligatorio de seguridad y toxicidad (la eliminación es exclusivamente renal):\n- Reflejo rotuliano o patelar presente (su abolición es el primer signo clínico de toxicidad a niveles de 8-10 mEq/L).\n- Frecuencia respiratoria ≥12 a 16 respiraciones por minuto (la depresión respiratoria ocurre a niveles >12 mEq/L).\n- Diuresis horaria estricta mediante sonda vesical Foley con bolsa colectora ≥30 mL/hora (o ≥0.5 mL/kg/h).\nSi hay signos de toxicidad o paro respiratorio: SUSPENDER inmediatamente la infusión de sulfato de magnesio y administrar el ANTÍDOTO ESPECÍFICO: Gluconato de Calcio al 10% (1 ampolla de 10 mL = 1 g) administrado por vía intravenosa lenta en un lapso de 3 a 5 minutos.\nControl de Crisis Hipertensiva Severa (PA ≥160/110 mmHg, meta: PAS 140-150 y PAD 90-100 mmHg):\n- Labetalol intravenoso: primera línea. Bolo inicial de 20 mg IV en 2 minutos; si la PA no cede en 10 minutos, duplicar a 40 mg, luego 80 mg cada 10 min hasta dosis acumulada máxima de 220-300 mg.\n- Hidralazina intravenosa: alternativa de primera línea. 5 a 10 mg IV en bolo lento en 2 minutos; repetir cada 20-30 minutos hasta dosis máxima de 20 mg.\n- Nifedipina oral: cápsulas o comprimidos de liberación rápida de 10 a 20 mg vía oral (tragar, NO morder ni sublingual para evitar caídas tensionales bruscas con isquemia útero-placentaria).\n\n3. Protocolo Código Rojo Obstétrico para Hemorragia Posparto (HPP):\nLa hemorragia posparto es una catástrofe que exige respuesta inmediata y coordinada en equipo. Se define por pérdida sanguínea estimada ≥500 mL tras parto vaginal o ≥1000 mL tras cesárea, o cualquier sangrado posparto con signos de inestabilidad hemodinámica.\nNemotecnia etiológica de las \"4T\":\n- Tono (Atonía Uterina, 70%): útero blando, supraumbilical, no contraído. Factores: sobredistensión (embarazo múltiple, macrosomía, polihidramnios), corioamnionitis, multiparidad, trabajo de parto prolongado o precipitado.\n- Trauma (Desgarros y Laceraciones, 20%): desgarros cervicales, vaginales, hematomas del ligamento ancho o inversión uterina.\n- Tejido (Retención Placentaria o Restos, 10%): alumbramiento incompleto, cotiledones retenidos, acretismo placentario.\n- Trombina (Coagulopatías, 1%): hemofilia, enfermedad de von Willebrand, o coagulopatía de consumo adquirida por preeclampsia/DPPNI.\nSecuencia temporal del Código Rojo MINSAL:\n- Minuto Cero (Activación): Se activa la alarma sonora de Código Rojo. Se asignan 4 roles operativos: Coordinador (médico en cabeza del equipo), Asistente 1 (vía aérea y signos vitales), Asistente 2 (accesos vasculares y medicamentos) y Circulante (anotaciones y laboratorio).\n- Minuto 1 a 20 (Reanimación y Diagnóstico):\n  * Masaje uterino bimanual continuo (compresión simultánea externa sobre fondo uterino e interna vaginal con puño cerrado).\n  * Oxígeno por máscara con reservorio a 10 L/min.\n  * Dos accesos venosos periféricos con catéter 14G o 16G. Toma de muestras: tipificación, pruebas cruzadas, hemograma, tiempos de coagulación y fibrinógeno.\n  * Infusión rápida de cristaloides isotónicos tibios (Lactato Ringer o SSN) a 1000 mL en 15-20 min.\n  * Farmacoterapia uterotónica escalonada de primera línea:\n    1) Oxitocina: 20 a 40 UI en 1000 mL de cristaloides a 250-500 mL/h en infusión rápida (NUNCA en bolo IV directo sin diluir por riesgo de colapso hemodinámico).\n    2) Metilergonovina (Methergin): 0.2 mg IM (CONTRAINDICADA en hipertensas o preeclámpticas por riesgo de crisis hipertensiva y ACV).\n    3) Misoprostol: 800 mcg administrados por vía sublingual o rectal.\n    4) Ácido Tranexámico: 1 g IV en bolo lento en 10 minutos (idealmente en los primeros 30 minutos del sangrado).\n- Minuto 20 a 40 (Tratamiento Quirúrgico / Balón de Bakri): Si persiste el sangrado a pesar de uterotónicos: colocación de Balón de Taponamiento Intrauterino hidrostático (Balón de Bakri insuflado con 300-500 mL de suero fisiológico estéril). Si no se dispone o falla: traslado inmediato a quirófano para laparotomía exploradora: suturas compresivas de B-Lynch o Hayman, ligadura de arterias uterinas (técnica de O'Leary) y finalmente histerectomía obstétrica para salvar la vida de la madre.\n\n4. Manejo Activo del Tercer Período del Parto (MATEP):\nEstrategia altamente efectiva recomendada por la OMS, FIGO y MINSAL que reduce la hemorragia posparto en más del 60%:\n- Paso 1: Administración profiláctica de Oxitocina 10 UI intramuscular inmediatamente tras la salida del hombro anterior del feto (o inmediatamente tras la expulsión fetal completa antes de la placenta).\n- Paso 2: Tracción controlada del cordón umbilical (Maniobra de Brandt-Andrews): tracción suave y sostenida del cordón con pinza hemostática en sentido descendente únicamente durante una contracción uterina, mientras con la otra mano sobre el abdomen suprapúbico se realiza contratracción hacia arriba estabilizando el cuerpo uterino para prevenir la inversión uterina aguda.\n- Paso 3: Masaje uterino abdominal inmediato tras la expulsión de la placenta completa, verificando el globo de seguridad de Pinard y repitiendo el masaje cada 15 minutos en las primeras 2 horas del puerperio.",
    "clinicalPearls": [
      "El Sulfato de Magnesio no es un antihipertensivo sino un anticonvulsivante cerebral; para prevenir y tratar la eclampsia use Esquema de Zuspan (4g bolo en 15-20 min + 1-2 g/h) y vigile reflejo rotuliano, FR y diuresis con sonda Foley.",
      "El antídoto específico de la intoxicación por sulfato de magnesio es el Gluconato de Calcio al 10% (1g IV lento en 3-5 minutos); téngalo siempre disponible en cabecera.",
      "En Código Rojo Obstétrico por Hemorragia Posparto, la causa más frecuente es la Atonía Uterina (70%); el manejo inicial demanda masaje uterino bimanual continuo y Oxitocina 20-40 UI en infusión intravenosa rápida.",
      "En hemorragia del tercer trimestre: si el sangrado es rojo rutilante indoloro con útero blando, sospeche Placenta Previa; si es oscuro, muy doloroso con útero hipertónico y leñoso, es DPPNI urgente.",
      "El Manejo Activo del Tercer Período del Parto (MATEP) con 10 UI de Oxitocina IM al salir el hombro anterior y tracción controlada del cordón reduce la hemorragia posparto en más de un 60%."
    ],
    "keyClinicalProtocols": [
      {
        "protocolName": "Código Naranja y Esquema de Zuspan para Sulfato de Magnesio",
        "summary": "Preeclampsia severa y eclampsia; carga 4g IV en 15-20 min, mantenimiento 1g/h por 24h; monitoreo de reflejo rotuliano, FR ≥12 y diuresis ≥30 mL/h; antídoto: Gluconato de Calcio al 10% 1g IV lento.",
        "institution": "Lineamientos para la Atención de Trastornos Hipertensivos del Embarazo, MINSAL El Salvador"
      },
      {
        "protocolName": "Protocolo Código Rojo Obstétrico para Hemorragia Posparto",
        "summary": "Nemotecnia de las 4T; roles de equipo en minuto 0; masaje bimanual; oxitocina 20-40 UI IV, metilergonovina 0.2 mg IM, misoprostol 800 mcg y ácido tranexámico 1g; balón de Bakri y sutura de B-Lynch.",
        "institution": "Lineamientos Técnicos para Emergencias Obstétricas, MINSAL / Guías FIGO"
      },
      {
        "protocolName": "Manejo Activo del Tercer Período del Parto (MATEP)",
        "summary": "Oxitocina 10 UI IM al salir hombro anterior; tracción controlada del cordón con contratracción suprapúbica (Brandt-Andrews); masaje uterino transabdominal inmediato y puerperal.",
        "institution": "Norma de Atención del Parto y Puerperio, MINSAL / OMS"
      },
      {
        "protocolName": "Manejo de la Crisis Hipertensiva en el Embarazo",
        "summary": "Metas tensionales PAS 140-150 y PAD 90-100 mmHg; fármacos de primera línea: Labetalol IV 20 mg escalonado, Hidralazina IV 5-10 mg o Nifedipina oral 10-20 mg; contraindicación de IECA/ARA-II.",
        "institution": "ACOG Practice Bulletin / MINSAL"
      },
      {
        "protocolName": "Criterios de Interrupción del Embarazo en Preeclampsia Severa",
        "summary": "Vía de parto en preeclampsia con criterios de severidad; estabilización hemodinámica y neuroprotección previa obligatoria; cesárea vs inducción según condiciones cervicales y estado fetal.",
        "institution": "Maternidad Nacional / MINSAL El Salvador"
      }
    ],
    "solvedClinicalCases": [
      {
        "id": "case-go-01",
        "title": "Preeclampsia con Criterios de Severidad y Crisis Hipertensiva a las 35 Semanas (Esquema Zuspan)",
        "patientProfile": "Primigesta de 18 años, soltera, con embarazo de 35.2 semanas por ultrasonido de primer trimestre, consulta a maternidad por cefalea intensa.",
        "clinicalPresentation": "Primigesta de 18 años, soltera, con embarazo de 35.2 semanas por ultrasonido de primer trimestre, consulta a maternidad por cefalea intensa.. Presenta: La paciente consulta por cefalea frontal opresiva de intensidad 9/10 de 12 horas de evolución que no cedió con paracetamol, agregándose visión borrosa con destellos luminosos (fotopsias) y sensación de ardor en epigastrio.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "La paciente consulta por cefalea frontal opresiva de intensidad 9/10 de 12 horas de evolución que no cedió con paracetamol, agregándose visión borrosa con destellos luminosos (fotopsias) y sensación de ardor en epigastrio. Al examen físico: alerta pero ansiosa y quejumbrosa. PA tomada en dos ocasiones separadas por 15 minutos: 170/115 mmHg y 168/112 mmHg (crisis hipertensiva severa). FC: 88 lpm, FR: 18 rpm, Temp: 36.7 °C. Edema facial y en miembros inferiores +++. Reflejos osteotendinosos patelares marcadamente exaltados (hiperreflexia grado 4/4 con clonus agotable de 3 sacudidas). Fondo uterino acorde a edad gestacional, feto único longitudinal cefálico con Frecuencia Cardíaca Fetal de 142 lpm sin dinámica uterina. Tira reactiva de orina en muestra limpia: proteinuria +++ (300 mg/dL). Laboratorios urgentes: Hemoglobina: 12.8 g/dL, Plaquetas: 145,000/uL, Creatinina: 0.9 mg/dL, AST: 48 UI/L, ALT: 42 UI/L.",
        "diagnosticReasoning": "La paciente presenta una Preeclampsia con Criterios de Severidad complicada con Crisis Hipertensiva en el Embarazo. Cumple criterios tensionales de severidad (PA sistólica ≥160 mmHg y diastólica ≥110 mmHg) asociados a síntomas de vasoespasmo cerebral inminente (cefalea frontal severa refractaria, fotopsias, hiperreflexia patelar marcada con clonus) y epigastralgia. El riesgo inminente es la ocurrencia de convulsiones eclámpticas (eclampsia) y hemorragia intracraneal materna por rotura vascular hipertensiva. El manejo inmediato es dual y prioritario: 1) Neuroprotección materna con Sulfato de Magnesio al 20% mediante el esquema de Zuspan para prevenir la eclampsia, y 2) Control de la crisis hipertensiva con antihipertensivos parenterales de primera línea (Labetalol IV o Hidralazina IV) para alcanzar la meta tensional segura (PAS 140-150 mmHg y PAD 90-100 mmHg), previniendo eventos vasculares cerebrales sin comprometer la perfusión placentaria fetal.",
        "stepByStepReasoning": "La paciente presenta una Preeclampsia con Criterios de Severidad complicada con Crisis Hipertensiva en el Embarazo. Cumple criterios tensionales de severidad (PA sistólica ≥160 mmHg y diastólica ≥110 mmHg) asociados a síntomas de vasoespasmo cerebral inminente (cefalea frontal severa refractaria, fotopsias, hiperreflexia patelar marcada con clonus) y epigastralgia. El riesgo inminente es la ocurrencia de convulsiones eclámpticas (eclampsia) y hemorragia intracraneal materna por rotura vascular hipertensiva. El manejo inmediato es dual y prioritario: 1) Neuroprotección materna con Sulfato de Magnesio al 20% mediante el esquema de Zuspan para prevenir la eclampsia, y 2) Control de la crisis hipertensiva con antihipertensivos parenterales de primera línea (Labetalol IV o Hidralazina IV) para alcanzar la meta tensional segura (PAS 140-150 mmHg y PAD 90-100 mmHg), previniendo eventos vasculares cerebrales sin comprometer la perfusión placentaria fetal.",
        "differentialDiagnosis": [
          {
            "condition": "Hipertensión Arterial Crónica con Cefalea Tensional",
            "rulingRationale": "La hipertensión crónica se diagnostica antes de la semana 20 de gestación y rara vez presenta proteinuria súbita +++ con edema facial brusco, fotopsias, epigastralgia y clonus en primigesta joven."
          },
          {
            "condition": "Migraña con Aura sin Preeclampsia",
            "rulingRationale": "La migraña puede cursar con fotopsias y cefalea unilateral hemicraneal, pero no justifica cifras tensionales de 170/115 mmHg ni proteinuria masiva de +++."
          },
          {
            "condition": "Síndrome HELLP Completo",
            "rulingRationale": "El perfil de laboratorio actual muestra plaquetas >100,000 (145,000/uL), transaminasas no duplicadas y sin hemólisis documentada, por lo que no cumple criterios completos de HELLP aún."
          }
        ],
        "managementPlan": [
          "1. Activar de inmediato el protocolo Código Naranja del hospital de maternidad y colocar a la paciente en decúbito lateral izquierdo.",
          "2. Iniciar Neuroprotección materna con Sulfato de Magnesio al 20% según Esquema de Zuspan: Dosis de carga de 4 g IV diluidos en 100 mL de solución salina normal al 0.9% a pasar en 15 a 20 minutos con bomba de infusión; continuar inmediatamente con infusión de mantenimiento a 1 g/hora.",
          "3. Manejo de la crisis hipertensiva severa: Labetalol intravenoso en bolo inicial de 20 mg IV lento en 2 minutos; reevaluar PA a los 10 minutos: si persiste PAS ≥160 o PAD ≥110, administrar 40 mg IV, luego 80 mg cada 10 min hasta meta PAS 140-150 y PAD 90-100 mmHg (máximo 220-300 mg). Como alternativa: Hidralazina 5 a 10 mg IV lento.",
          "4. Monitoreo estricto de seguridad del sulfato de magnesio cada hora: presencia de reflejo patelar, frecuencia respiratoria (≥12-16 rpm) y gasto urinario por sonda Foley con bolsa recolectora (≥30 mL/h). Disponer de Gluconato de Calcio al 10% (1 g IV) al pie de la cama como antídoto.",
          "5. Maduración pulmonar fetal con Betametasona 12 mg IM (2 dosis separadas por 24 horas) por edad gestacional de 35 semanas.",
          "6. Una vez estabilizada la presión arterial y la neuroprotección, programar la interrupción del embarazo (inducción del parto o cesárea de urgencia según condiciones cervicales Bishop y estado hemodinámico materno-fetal)."
        ],
        "therapeuticPlan": [
          "1. Activar de inmediato el protocolo Código Naranja del hospital de maternidad y colocar a la paciente en decúbito lateral izquierdo.",
          "2. Iniciar Neuroprotección materna con Sulfato de Magnesio al 20% según Esquema de Zuspan: Dosis de carga de 4 g IV diluidos en 100 mL de solución salina normal al 0.9% a pasar en 15 a 20 minutos con bomba de infusión; continuar inmediatamente con infusión de mantenimiento a 1 g/hora.",
          "3. Manejo de la crisis hipertensiva severa: Labetalol intravenoso en bolo inicial de 20 mg IV lento en 2 minutos; reevaluar PA a los 10 minutos: si persiste PAS ≥160 o PAD ≥110, administrar 40 mg IV, luego 80 mg cada 10 min hasta meta PAS 140-150 y PAD 90-100 mmHg (máximo 220-300 mg). Como alternativa: Hidralazina 5 a 10 mg IV lento.",
          "4. Monitoreo estricto de seguridad del sulfato de magnesio cada hora: presencia de reflejo patelar, frecuencia respiratoria (≥12-16 rpm) y gasto urinario por sonda Foley con bolsa recolectora (≥30 mL/h). Disponer de Gluconato de Calcio al 10% (1 g IV) al pie de la cama como antídoto.",
          "5. Maduración pulmonar fetal con Betametasona 12 mg IM (2 dosis separadas por 24 horas) por edad gestacional de 35 semanas.",
          "6. Una vez estabilizada la presión arterial y la neuroprotección, programar la interrupción del embarazo (inducción del parto o cesárea de urgencia según condiciones cervicales Bishop y estado hemodinámico materno-fetal)."
        ],
        "pedagogicalRationale": "El Sulfato de Magnesio no es un antihipertensivo: es un anticonvulsivante cerebral. Para bajar la presión en preeclampsia severa use Labetalol o Hidralazina, y para evitar convulsiones use Sulfato de Magnesio. Nunca interrumpa el embarazo de forma precipitada sin estabilizar primero la presión y la neuroprotección con sulfato de magnesio: operar a una paciente en crisis hipertensiva descontrolada multiplica la mortalidad materna.",
        "clinicalPearls": [
          "El Sulfato de Magnesio no es un antihipertensivo: es un anticonvulsivante cerebral. Para bajar la presión en preeclampsia severa use Labetalol o Hidralazina, y para evitar convulsiones use Sulfato de Magnesio.",
          "Nunca interrumpa el embarazo de forma precipitada sin estabilizar primero la presión y la neuroprotección con sulfato de magnesio: operar a una paciente en crisis hipertensiva descontrolada multiplica la mortalidad materna."
        ],
        "officialProtocolRef": "Lineamientos Técnicos para la Atención de las Emergencias Obstétricas (Código Naranja), MINSAL El Salvador / ACOG Practice Bulletin No. 222."
      },
      {
        "id": "case-go-02",
        "title": "Eclampsia Anteparto con Crisis Convulsiva Tónico-Clónica Generalizada y Manejo Agudo",
        "patientProfile": "Mujer de 20 años, primigesta con embarazo de 37 semanas sin control prenatal regular, traída en ambulancia tras convulsionar en su domicilio.",
        "clinicalPresentation": "Mujer de 20 años, primigesta con embarazo de 37 semanas sin control prenatal regular, traída en ambulancia tras convulsionar en su domicilio.. Presenta: Familiares relatan que la paciente se quejaba de dolor de cabeza muy fuerte desde la noche anterior y visión borrosa.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "Familiares relatan que la paciente se quejaba de dolor de cabeza muy fuerte desde la noche anterior y visión borrosa. Hace 20 minutos presentó una crisis convulsiva con pérdida del conocimiento, desviación de la mirada, mordedura de lengua y sacudidas musculares rítmicas en las cuatro extremidades que duró aproximadamente 2 minutos, quedando en estado de estupor. A su llegada al hospital de maternidad: paciente en período postictal, desorientada y combativa, con abundante sialorrea sanguinolenta por mordedura lateral de lengua. PA: 185/120 mmHg, FC: 118 lpm, FR: 24 rpm, Temp: 37.0 °C, SatO2: 91% aire ambiente. Tono uterino aumentado. La monitorización fetal revela desaceleración prolongada de la frecuencia cardíaca fetal a 90 lpm durante la fase postictal. Proteinuria en sonda vesical: ++++.",
        "diagnosticReasoning": "La paciente presenta una Eclampsia Anteparto con Crisis Convulsiva Tónico-Clónica Generalizada. La eclampsia es la complicación neurológica máxima de la preeclampsia severa, debida a una pérdida de la autorregulación vascular cerebral con edema vasogénico endotelial agudo (Síndrome de Encefalopatía Posterior Reversible - PRES). La bradicardia fetal observada en el período postictal inmediato refleja hipoxia y acidosis fetal transitoria secundaria a la hipertonía uterina sostenida y vasoespasmo placentario durante la convulsión; en la mayoría de los casos, la frecuencia cardíaca fetal se recupera tras la estabilización de la oxigenación materna y no debe precipitar una cesárea inmediata en plena fase postictal sin protección anticonvulsiva previa. La prioridad médica absoluta es el soporte de la vía aérea materna, la prevención de nuevas convulsiones mediante infusión rápida de Sulfato de Magnesio al 20% y el control farmacológico urgente de la crisis hipertensiva severa, seguido de la interrupción del embarazo por la vía más expedita una vez estabilizada la madre.",
        "stepByStepReasoning": "La paciente presenta una Eclampsia Anteparto con Crisis Convulsiva Tónico-Clónica Generalizada. La eclampsia es la complicación neurológica máxima de la preeclampsia severa, debida a una pérdida de la autorregulación vascular cerebral con edema vasogénico endotelial agudo (Síndrome de Encefalopatía Posterior Reversible - PRES). La bradicardia fetal observada en el período postictal inmediato refleja hipoxia y acidosis fetal transitoria secundaria a la hipertonía uterina sostenida y vasoespasmo placentario durante la convulsión; en la mayoría de los casos, la frecuencia cardíaca fetal se recupera tras la estabilización de la oxigenación materna y no debe precipitar una cesárea inmediata en plena fase postictal sin protección anticonvulsiva previa. La prioridad médica absoluta es el soporte de la vía aérea materna, la prevención de nuevas convulsiones mediante infusión rápida de Sulfato de Magnesio al 20% y el control farmacológico urgente de la crisis hipertensiva severa, seguido de la interrupción del embarazo por la vía más expedita una vez estabilizada la madre.",
        "differentialDiagnosis": [
          {
            "condition": "Epilepsia Primaria Descompensada en Gestante",
            "rulingRationale": "Carece del antecedente comicial previo, la paciente era sana y presenta una crisis hipertensiva masiva (185/120 mmHg) con proteinuria ++++ y edema generalizado, confirmando etiología preeclámptica."
          },
          {
            "condition": "Hemorragia Subaracnoidea por Rotura de Aneurisma Cerebral",
            "rulingRationale": "Cursa con cefalea súbita \"en trueno\" de máxima intensidad con signos meníngeos (rigidez de nuca), aunque la hemorragia intracraneal puede ser una complicación letal de la eclampsia si no se controla la PA."
          },
          {
            "condition": "Meningitis Bacteriana Aguda",
            "rulingRationale": "Cursa con fiebre alta en picos, rigidez de nuca, petequias y ausencia de proteinuria masiva en el embarazo."
          }
        ],
        "managementPlan": [
          "1. Protección de vía aérea y soporte vital: posición de seguridad decúbito lateral izquierdo, aspiración suave de secreciones bucofaríngeas, colocación de cánula de Guedel para proteger la vía aérea y oxigenoterapia suplementaria con máscara con reservorio a 10 L/min para revertir la hipoxemia materna y fetal.",
          "2. Acceso vascular inmediato y administración de Sulfato de Magnesio al 20% (Esquema Zuspan): dosis de carga de 4 g IV diluidos en 100 mL de solución salina infundidos en 15 a 20 minutos; si convulsiona nuevamente durante el procedimiento, administrar un bolo de refuerzo de 2 g IV en 5 minutos. Continuar con infusión de mantenimiento a 1 a 2 g/hora por bomba.",
          "3. Control urgente de la crisis hipertensiva severa: Labetalol 20 mg IV en bolo lento en 2 minutos; si no cede a los 10 minutos, administrar 40 mg IV, luego 80 mg hasta alcanzar meta PAS 140-150 mmHg y PAD 90-100 mmHg. Como alternativa: Hidralazina 5-10 mg IV.",
          "4. Colocación de sonda vesical Foley para cuantificación de diuresis horaria estricta (meta ≥30 mL/h) y monitoreo de reflejos osteotendinosos y frecuencia respiratoria.",
          "5. Monitorización fetal continua: permitir la recuperación intrauterina de la frecuencia cardíaca fetal (habitualmente en 10-15 minutos tras oxigenar y estabilizar a la madre).",
          "6. Interrupción inmediata y definitiva del embarazo una vez lograda la estabilización materna (habitualmente mediante cesárea de urgencia a las 37 semanas con cérvix desfavorable). Mantener el sulfato de magnesio durante al menos 24 horas del posparto."
        ],
        "therapeuticPlan": [
          "1. Protección de vía aérea y soporte vital: posición de seguridad decúbito lateral izquierdo, aspiración suave de secreciones bucofaríngeas, colocación de cánula de Guedel para proteger la vía aérea y oxigenoterapia suplementaria con máscara con reservorio a 10 L/min para revertir la hipoxemia materna y fetal.",
          "2. Acceso vascular inmediato y administración de Sulfato de Magnesio al 20% (Esquema Zuspan): dosis de carga de 4 g IV diluidos en 100 mL de solución salina infundidos en 15 a 20 minutos; si convulsiona nuevamente durante el procedimiento, administrar un bolo de refuerzo de 2 g IV en 5 minutos. Continuar con infusión de mantenimiento a 1 a 2 g/hora por bomba.",
          "3. Control urgente de la crisis hipertensiva severa: Labetalol 20 mg IV en bolo lento en 2 minutos; si no cede a los 10 minutos, administrar 40 mg IV, luego 80 mg hasta alcanzar meta PAS 140-150 mmHg y PAD 90-100 mmHg. Como alternativa: Hidralazina 5-10 mg IV.",
          "4. Colocación de sonda vesical Foley para cuantificación de diuresis horaria estricta (meta ≥30 mL/h) y monitoreo de reflejos osteotendinosos y frecuencia respiratoria.",
          "5. Monitorización fetal continua: permitir la recuperación intrauterina de la frecuencia cardíaca fetal (habitualmente en 10-15 minutos tras oxigenar y estabilizar a la madre).",
          "6. Interrupción inmediata y definitiva del embarazo una vez lograda la estabilización materna (habitualmente mediante cesárea de urgencia a las 37 semanas con cérvix desfavorable). Mantener el sulfato de magnesio durante al menos 24 horas del posparto."
        ],
        "pedagogicalRationale": "La bradicardia fetal tras una convulsión eclámptica es transitoria por hipoxia materna y tetania uterina: no corra a operar en ese instante; primero oxigene y estabilice a la madre con sulfato de magnesio y el feto se recuperará. El fármaco de elección para la eclampsia es el Sulfato de Magnesio, NUNCA el diazepam ni la fenitoína: el sulfato de magnesio reduce a la mitad la recurrencia de convulsiones y la mortalidad materna frente a las benzodiacepinas.",
        "clinicalPearls": [
          "La bradicardia fetal tras una convulsión eclámptica es transitoria por hipoxia materna y tetania uterina: no corra a operar en ese instante; primero oxigene y estabilice a la madre con sulfato de magnesio y el feto se recuperará.",
          "El fármaco de elección para la eclampsia es el Sulfato de Magnesio, NUNCA el diazepam ni la fenitoína: el sulfato de magnesio reduce a la mitad la recurrencia de convulsiones y la mortalidad materna frente a las benzodiacepinas."
        ],
        "officialProtocolRef": "Lineamientos Técnicos para la Atención de las Emergencias Obstétricas: Eclampsia y Código Naranja, MINSAL El Salvador / Collaborative Eclampsia Trial Group."
      },
      {
        "id": "case-go-03",
        "title": "Hemorragia Posparto Primaria Inmediata Masiva por Atonía Uterina y Activación de Código Rojo MINSAL",
        "patientProfile": "Multigesta de 33 años (G4 P3 A0), con antecedente de parto precipitado de feto macrosómico de 4,200 g hace 15 minutos en sala de expulsión.",
        "clinicalPresentation": "Multigesta de 33 años (G4 P3 A0), con antecedente de parto precipitado de feto macrosómico de 4,200 g hace 15 minutos en sala de expulsión.. Presenta: Tras un parto vaginal precipitado sin complicaciones aparentes y expulsión placentaria completa mediante alumbramiento espontáneo, la paciente comienza de forma súbita con sangrado transvaginal profuso continuo con sangre rutilante y coágulos masivos que desbordan los apósitos y empapan la camilla.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "Tras un parto vaginal precipitado sin complicaciones aparentes y expulsión placentaria completa mediante alumbramiento espontáneo, la paciente comienza de forma súbita con sangrado transvaginal profuso continuo con sangre rutilante y coágulos masivos que desbordan los apósitos y empapan la camilla. Al examen físico: paciente pálida, sudorosa, mareada y con sensación de desvanecimiento inminente. PA: 75/40 mmHg, FC: 132 lpm, FR: 26 rpm, SatO2: 93% aire ambiente. A la palpación abdominal: útero completamente blando, flácido, supraumbilical a 4 cm por encima de la cicatriz umbilical, no contraído. Se realiza masaje fúndico externo exprimiendo grandes coágulos, pero el útero se relaja de inmediato al retirar la mano. La inspección del cuello uterino y paredes vaginales con valvas descarta desgarros o hematomas del canal de parto, y la revisión de la placenta muestra cara materna íntegra con todos los cotiledones completos y membranas íntegras.",
        "diagnosticReasoning": "La paciente presenta una Hemorragia Posparto Primaria Masiva con Choque Hipovolémico Severo secundaria a Atonía Uterina (la \"T\" de Tono de la regla de las 4T), la cual es responsable de más del 70% de las hemorragias posparto. Los factores de riesgo identificados fueron la multiparidad (G4) y la sobredistensión uterina extrema provocada por macrosomía fetal (4,200 g). En la atonía uterina, las fibras miometriales entrelazadas (\"ligaduras vivas de Pinard\") no logran contraerse eficazmente sobre los vasos espirales del lecho placentario tras el alumbramiento, permitiendo una hemorragia arterial de hasta 600-800 mL por minuto. La presencia de hipotensión severa (PAS 75 mmHg) y taquicardia >130 lpm indica una pérdida hemática estimada superior a 1500-2000 mL (>35-40% de la volemia obstétrica). La conducta mandatoria e inmediata es la activación del Código Rojo Obstétrico del MINSAL, la ejecución de masaje uterino bimanual continuo y la administración agresiva y simultánea del cuarteto de uterotónicos de primera línea, Ácido Tranexámico y resucitación hemostática.",
        "stepByStepReasoning": "La paciente presenta una Hemorragia Posparto Primaria Masiva con Choque Hipovolémico Severo secundaria a Atonía Uterina (la \"T\" de Tono de la regla de las 4T), la cual es responsable de más del 70% de las hemorragias posparto. Los factores de riesgo identificados fueron la multiparidad (G4) y la sobredistensión uterina extrema provocada por macrosomía fetal (4,200 g). En la atonía uterina, las fibras miometriales entrelazadas (\"ligaduras vivas de Pinard\") no logran contraerse eficazmente sobre los vasos espirales del lecho placentario tras el alumbramiento, permitiendo una hemorragia arterial de hasta 600-800 mL por minuto. La presencia de hipotensión severa (PAS 75 mmHg) y taquicardia >130 lpm indica una pérdida hemática estimada superior a 1500-2000 mL (>35-40% de la volemia obstétrica). La conducta mandatoria e inmediata es la activación del Código Rojo Obstétrico del MINSAL, la ejecución de masaje uterino bimanual continuo y la administración agresiva y simultánea del cuarteto de uterotónicos de primera línea, Ácido Tranexámico y resucitación hemostática.",
        "differentialDiagnosis": [
          {
            "condition": "Trauma del Canal del Parto (Desgarro Cervical o Vaginal Alto)",
            "rulingRationale": "El sangrado por desgarro cursa con útero firmemente contraído (\"en bola de billar\") y sangre rutilante continua emanando del canal; en este caso el útero está completamente flácido y supraumbilical."
          },
          {
            "condition": "Retención de Restos Placentarios o Cotiledón Aberrante",
            "rulingRationale": "La revisión minuciosa de la placenta confirmó cotiledones completos íntegros y la cavidad uterina no presenta fragmentos placentarios calcificados o adheridos."
          },
          {
            "condition": "Inversión Uterina Aguda",
            "rulingRationale": "La inversión uterina cursa con ausencia de fondo uterino palpable a nivel abdominal y presencia de masa violácea dolorosa que protruye en el introito vaginal con choque neurogénico desproporcionado."
          }
        ],
        "managementPlan": [
          "1. Activar de inmediato la alarma de CÓDIGO ROJO OBSTÉTRICO del hospital, designando los 4 roles (Coordinador, Asistente 1 de vía aérea, Asistente 2 de accesos/medicamentos y Circulante).",
          "2. Masaje Uterino Bimanual continuo e ininterrumpido (compresión abdominal con mano externa mientras la mano enguantada en vagina cerrada en puño comprime la cara anterior del útero a través del fondo de saco anterior).",
          "3. Colocar oxígeno por máscara con reservorio a 10 L/min y canalizar de inmediato dos accesos venosos periféricos de grueso calibre (catéter 14G o 16G). Infundir Solución Salina Normal o Lactato Ringer tibio a chorro rápido (primer litro en 15 minutos). Solicitar 2 unidades de Glóbulos Rojos Empacados O negativo sin cruzar.",
          "4. Farmacoterapia uterotónica escalonada de choque (Minutos 1 a 20):",
          "   - Oxitocina: 20 a 40 UI en 1000 mL de solución cristaloide isotónica a 250-500 mL/hora en infusión continua rápida.",
          "   - Metilergonovina: 0.2 mg IM (verificar que no sea hipertensa previa; en esta paciente normotensa previa es segura).",
          "   - Misoprostol: 800 mcg administrados por vía sublingual o rectal.",
          "   - Ácido Tranexámico: 1 g IV lento en 10 minutos (ensayo WOMAN: administrar dentro de las primeras 3 horas para reducir la mortalidad materna por exanguinación).",
          "5. Si la atonía uterina persiste refractaria al cabo de 15-20 minutos: Colocación de Balón de Taponamiento Intrauterino hidrostático (Balón de Bakri insuflado con 300 a 500 mL de solución salina tibia estéril) y empaquetamiento vaginal con gasa para mantenerlo en posición.",
          "6. Si fracasa el balón de Bakri o persiste sangrado >50 mL/min: traslado inmediato a quirófano para laparotomía exploradora, sutura compresiva de B-Lynch o Hayman, ligadura de arterias uterinas y, de persistir la hemorragia, histerectomía obstétrica hemostática total o subtotal para preservar la vida materna."
        ],
        "therapeuticPlan": [
          "1. Activar de inmediato la alarma de CÓDIGO ROJO OBSTÉTRICO del hospital, designando los 4 roles (Coordinador, Asistente 1 de vía aérea, Asistente 2 de accesos/medicamentos y Circulante).",
          "2. Masaje Uterino Bimanual continuo e ininterrumpido (compresión abdominal con mano externa mientras la mano enguantada en vagina cerrada en puño comprime la cara anterior del útero a través del fondo de saco anterior).",
          "3. Colocar oxígeno por máscara con reservorio a 10 L/min y canalizar de inmediato dos accesos venosos periféricos de grueso calibre (catéter 14G o 16G). Infundir Solución Salina Normal o Lactato Ringer tibio a chorro rápido (primer litro en 15 minutos). Solicitar 2 unidades de Glóbulos Rojos Empacados O negativo sin cruzar.",
          "4. Farmacoterapia uterotónica escalonada de choque (Minutos 1 a 20):",
          "   - Oxitocina: 20 a 40 UI en 1000 mL de solución cristaloide isotónica a 250-500 mL/hora en infusión continua rápida.",
          "   - Metilergonovina: 0.2 mg IM (verificar que no sea hipertensa previa; en esta paciente normotensa previa es segura).",
          "   - Misoprostol: 800 mcg administrados por vía sublingual o rectal.",
          "   - Ácido Tranexámico: 1 g IV lento en 10 minutos (ensayo WOMAN: administrar dentro de las primeras 3 horas para reducir la mortalidad materna por exanguinación).",
          "5. Si la atonía uterina persiste refractaria al cabo de 15-20 minutos: Colocación de Balón de Taponamiento Intrauterino hidrostático (Balón de Bakri insuflado con 300 a 500 mL de solución salina tibia estéril) y empaquetamiento vaginal con gasa para mantenerlo en posición.",
          "6. Si fracasa el balón de Bakri o persiste sangrado >50 mL/min: traslado inmediato a quirófano para laparotomía exploradora, sutura compresiva de B-Lynch o Hayman, ligadura de arterias uterinas y, de persistir la hemorragia, histerectomía obstétrica hemostática total o subtotal para preservar la vida materna."
        ],
        "pedagogicalRationale": "En el Código Rojo, el tiempo es vida: el masaje bimanual y los uterotónicos deben iniciarse en los primeros 5 minutos; no espere los resultados de laboratorio para transfundir si la paciente está en choque grado III o IV. El Ácido Tranexámico 1 g IV debe administrarse siempre antes de que se cumplan 3 horas del inicio del sangrado; administrado después de 3 horas pierde su beneficio hemostático.",
        "clinicalPearls": [
          "En el Código Rojo, el tiempo es vida: el masaje bimanual y los uterotónicos deben iniciarse en los primeros 5 minutos; no espere los resultados de laboratorio para transfundir si la paciente está en choque grado III o IV.",
          "El Ácido Tranexámico 1 g IV debe administrarse siempre antes de que se cumplan 3 horas del inicio del sangrado; administrado después de 3 horas pierde su beneficio hemostático."
        ],
        "officialProtocolRef": "Lineamientos Técnicos para la Prevención, Diagnóstico y Manejo de la Hemorragia Posparto (Código Rojo), MINSAL El Salvador / Protocolo FIGO."
      },
      {
        "id": "case-go-04",
        "title": "Síndrome HELLP Completo en Multigesta Pretérmino con Trombocitopenia y Disfunción Hepática",
        "patientProfile": "Mujer de 31 años, multípara (G3 P2 A0) con embarazo de 32.4 semanas, consulta por dolor en la \"boca del estómago\" y malestar general.",
        "clinicalPresentation": "Mujer de 31 años, multípara (G3 P2 A0) con embarazo de 32.4 semanas, consulta por dolor en la \"boca del estómago\" y malestar general.. Presenta: La paciente consulta por dolor opresivo constante en epigastrio e hipocondrio derecho de 18 horas de evolución, irradiado hacia la espalda en cinturón, acompañado de náuseas, vómitos biliosos y sensación de fatiga extrema.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "La paciente consulta por dolor opresivo constante en epigastrio e hipocondrio derecho de 18 horas de evolución, irradiado hacia la espalda en cinturón, acompañado de náuseas, vómitos biliosos y sensación de fatiga extrema. Había sido tratada como gastritis aguda en una clínica privada con antiácidos sin mejoría. Al examen físico: piel y escleras con tinte ictérico leve. PA: 155/100 mmHg, FC: 96 lpm, FR: 20 rpm, Temp: 36.8 °C. A la palpación abdominal: útero grávido acorde a amenorrea, con tono uterino normal. Dolor exquisito a la palpación en epigastrio y dolor a la compresión en hipocondrio derecho con signo de Chaussier positivo (dolor epigástrico en barra con hepatalgia a la palpación por congestión y distensión de la cápsula de Glisson). Laboratorios urgentes: Hemoglobina: 9.4 g/dL, Plaquetas: 46,000/uL (trombocitopenia severa Clase 1 de Mississippi), Frotis de sangre periférica: presencia abundante de esquistocitos (hematíes fragmentados) y anisocitosis marcada. Bilirrubina total: 2.8 mg/dL a expensas de indirecta (2.1 mg/dL), Deshidrogenasa Láctica (LDH): 1,120 UI/L (marcadamente elevada, valor normal <250), AST/TGO: 245 UI/L, ALT/TGP: 210 UI/L. Creatinina: 1.2 mg/dL. Tira reactiva de orina: proteinuria ++.",
        "diagnosticReasoning": "La paciente presenta un Síndrome HELLP Completo Clase 1 de Mississippi (trombocitopenia severa <50,000/uL). El síndrome HELLP es una manifestación extrema de microangiopatía trombótica endotelial sistémica en la gestación. Cumple estrictamente la tríada diagnóstica: 1) H (Hemolysis): anemia hemolítica microangiopática demostrada por esquistocitos en sangre periférica, elevación marcada de LDH >600 UI/L (1,120 UI/L) y bilirrubina indirecta >1.2 mg/dL; 2) EL (Elevated Liver enzymes): necrosis hepatocelular isquémica con transaminasas AST y ALT elevadas al triple de lo normal; y 3) LP (Low Platelets): consumo plaquetario intravascular severo con recuento plaquetario <50,000/uL (Clase 1 de Mississippi, la de mayor riesgo de hemorragia masiva y rotura hepática). El dolor en barra epigástrico y en hipocondrio derecho (signo de Chaussier) es un síntoma de alarma crítico que refleja isquemia hepática, necrosis focal y formación de hematoma subcapsular hepático a tensión. El síndrome HELLP no mejora con el tiempo; el único tratamiento etiológico definitivo es la interrupción expedita del embarazo tras neuroprotección con sulfato de magnesio y corrección hemostática.",
        "stepByStepReasoning": "La paciente presenta un Síndrome HELLP Completo Clase 1 de Mississippi (trombocitopenia severa <50,000/uL). El síndrome HELLP es una manifestación extrema de microangiopatía trombótica endotelial sistémica en la gestación. Cumple estrictamente la tríada diagnóstica: 1) H (Hemolysis): anemia hemolítica microangiopática demostrada por esquistocitos en sangre periférica, elevación marcada de LDH >600 UI/L (1,120 UI/L) y bilirrubina indirecta >1.2 mg/dL; 2) EL (Elevated Liver enzymes): necrosis hepatocelular isquémica con transaminasas AST y ALT elevadas al triple de lo normal; y 3) LP (Low Platelets): consumo plaquetario intravascular severo con recuento plaquetario <50,000/uL (Clase 1 de Mississippi, la de mayor riesgo de hemorragia masiva y rotura hepática). El dolor en barra epigástrico y en hipocondrio derecho (signo de Chaussier) es un síntoma de alarma crítico que refleja isquemia hepática, necrosis focal y formación de hematoma subcapsular hepático a tensión. El síndrome HELLP no mejora con el tiempo; el único tratamiento etiológico definitivo es la interrupción expedita del embarazo tras neuroprotección con sulfato de magnesio y corrección hemostática.",
        "differentialDiagnosis": [
          {
            "condition": "Hígado Graso Agudo del Embarazo (HGAE)",
            "rulingRationale": "El hígado graso cursa típicamente con hipoglucemia profunda (<50 mg/dL), coagulopatía precoz con hiperamonemia, prolongación severa de TP/TTP y leucocitosis marcada (>20,000/mm³), cumpliendo criterios de Swansea; en el HELLP predomina la hemólisis con esquistocitos y trombocitopenia aislada."
          },
          {
            "condition": "Púrpura Trombocitopénica Trombótica (PTT)",
            "rulingRationale": "La PTT comparte esquistocitos y trombocitopenia por deficiencia de ADAMTS13, pero cursa con fiebre alta fluctuante y alteraciones neurológicas focales fluctuantes prominentes, sin predilección por transaminasitis hepática pura."
          },
          {
            "condition": "Colecistitis Aguda o Cólico Biliar",
            "rulingRationale": "El cólico biliar no cursa con hemólisis microangiopática, esquistocitos, trombocitopenia de 46,000 ni proteinuria en el embarazo."
          }
        ],
        "managementPlan": [
          "1. Ingreso inmediato a la Unidad de Cuidados Intensivos Maternos / Sala de Cuidados Especiales Obstétricos.",
          "2. Iniciar Neuroprotección materna y prevención de eclampsia con Sulfato de Magnesio al 20% (Esquema Zuspan: carga de 4 g IV en 20 min, mantenimiento 1 g/h continuo).",
          "3. Control de la presión arterial: mantener PAS entre 140-150 mmHg y PAD entre 90-100 mmHg con Labetalol o Hidralazina intravenosa.",
          "4. Manejo de la trombocitopenia: con plaquetas <50,000/uL está contraindicada la anestesia neuroaxial (bloqueo epidural/subaracnoideo) por riesgo de hematoma espinal con compresión medular; se requiere anestesia general para cesárea. Transfundir concentrados de plaquetas (1 pool de aféresis o 6 unidades de concentrado plaquetario) inmediatamente antes o durante la incisión quirúrgica si se planea cesárea con plaquetas <50,000/uL.",
          "5. Evaluación hepática urgente mediante ultrasonografía abdominal para descartar hematoma subcapsular hepático o hemoperitoneo por rotura hepática.",
          "6. Interrupción inmediata del embarazo mediante cesárea de urgencia independientemente de la edad gestacional (a las 32 semanas los riesgos de mantener el embarazo superan con creces los riesgos de la prematuridad). Mantener sulfato de magnesio y monitoreo en UCI por al menos 48 horas postparto (el nadir plaquetario suele ocurrir 24 a 48 horas tras el parto)."
        ],
        "therapeuticPlan": [
          "1. Ingreso inmediato a la Unidad de Cuidados Intensivos Maternos / Sala de Cuidados Especiales Obstétricos.",
          "2. Iniciar Neuroprotección materna y prevención de eclampsia con Sulfato de Magnesio al 20% (Esquema Zuspan: carga de 4 g IV en 20 min, mantenimiento 1 g/h continuo).",
          "3. Control de la presión arterial: mantener PAS entre 140-150 mmHg y PAD entre 90-100 mmHg con Labetalol o Hidralazina intravenosa.",
          "4. Manejo de la trombocitopenia: con plaquetas <50,000/uL está contraindicada la anestesia neuroaxial (bloqueo epidural/subaracnoideo) por riesgo de hematoma espinal con compresión medular; se requiere anestesia general para cesárea. Transfundir concentrados de plaquetas (1 pool de aféresis o 6 unidades de concentrado plaquetario) inmediatamente antes o durante la incisión quirúrgica si se planea cesárea con plaquetas <50,000/uL.",
          "5. Evaluación hepática urgente mediante ultrasonografía abdominal para descartar hematoma subcapsular hepático o hemoperitoneo por rotura hepática.",
          "6. Interrupción inmediata del embarazo mediante cesárea de urgencia independientemente de la edad gestacional (a las 32 semanas los riesgos de mantener el embarazo superan con creces los riesgos de la prematuridad). Mantener sulfato de magnesio y monitoreo en UCI por al menos 48 horas postparto (el nadir plaquetario suele ocurrir 24 a 48 horas tras el parto)."
        ],
        "pedagogicalRationale": "El dolor en epigastrio o hipocondrio derecho en una embarazada hipertensa nunca es \"gastritis\": es isquemia hepática por preeclampsia severa o HELLP hasta demostrar lo contrario. Con plaquetas <50,000/uL en síndrome HELLP, está estrictamente prohibida la anestesia epidural o raquídea: el hematoma peridural causa paraplejía irreversible; la cesárea debe hacerse bajo anestesia general.",
        "clinicalPearls": [
          "El dolor en epigastrio o hipocondrio derecho en una embarazada hipertensa nunca es \"gastritis\": es isquemia hepática por preeclampsia severa o HELLP hasta demostrar lo contrario.",
          "Con plaquetas <50,000/uL en síndrome HELLP, está estrictamente prohibida la anestesia epidural o raquídea: el hematoma peridural causa paraplejía irreversible; la cesárea debe hacerse bajo anestesia general."
        ],
        "officialProtocolRef": "Lineamientos Técnicos para la Atención del Síndrome HELLP y Emergencias Obstétricas, MINSAL El Salvador / Sibai BM: Diagnosis and Management of HELLP Syndrome."
      },
      {
        "id": "case-go-05",
        "title": "Desprendimiento Prematuro de Placenta Normoinserta (DPPNI) con Hipertonía Uterina y Sufrimiento Fetal Agudo",
        "patientProfile": "Mujer de 28 años, G2 P1 A0, con embarazo de 36 semanas, sin antecedentes de patología previa, traída de emergencia por dolor abdominal súbito.",
        "clinicalPresentation": "Mujer de 28 años, G2 P1 A0, con embarazo de 36 semanas, sin antecedentes de patología previa, traída de emergencia por dolor abdominal súbito.. Presenta: La paciente refiere que hace 45 minutos inició de forma súbita e inesperada con dolor abdominal intenso, continuo y lacerante en el hipogastrio, acompañado de salida de sangrado genital oscuro con coágulos en moderada cantidad y sensación de que \"la matriz no se afloja\".",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "La paciente refiere que hace 45 minutos inició de forma súbita e inesperada con dolor abdominal intenso, continuo y lacerante en el hipogastrio, acompañado de salida de sangrado genital oscuro con coágulos en moderada cantidad y sensación de que \"la matriz no se afloja\". Al examen físico: paciente diaforética, con marcada palidez cutánea y facie de dolor agudo. PA: 135/85 mmHg, FC: 108 lpm, FR: 22 rpm. A la palpación abdominal: útero intensamente aumentado de tono, con consistencia leñosa permanente (\"abdomen o útero de madera\"), extremadamente doloroso a la palpación más superficial, que no presenta relajación fisiológica intercontráctil (hipertonía uterina y polisistolia). La altura uterina parece mayor a la esperada por amenorrea (sugiriendo hematoma retroplacentario oculto). El sangrado vaginal es oscuro, no rutilante. Auscultación fetal con ultrasonido Doppler en la cabecera: bradicardia fetal severa persistente a 80-90 lpm con pérdida de variabilidad (sufrimiento fetal agudo grave inminente).",
        "diagnosticReasoning": "El cuadro clínico es la presentación clásica y dramática del Desprendimiento Prematuro de Placenta Normoinserta (DPPNI o Abruptio Placentae) Grado III (severo). Se produce por la rotura de vasos de la decidua basal con formación de un hematoma retroplacentario masivo que separa mecánicamente la placenta de la pared miometrial antes del nacimiento del feto. Se caracteriza por la tríada clásica patognomónica: 1) Dolor abdominal súbito, continuo e intenso, 2) Sangrado transvaginal oscuro (la hemorragia puede ser oculta en un 20% retenida tras la placenta), y 3) Hipertonía uterina permanente con útero rígido (\"útero de madera\") que no se relaja. La extravasación de sangre hacia el miometrio puede causar apoplejía uterina (útero de Couvelaire). La bradicardia fetal severa y persistente (80-90 lpm) traduce una anoxia fetal aguda catastrófica por interrupción inmediata del intercambio gaseoso útero-placentario en más del 50% de la superficie placentaria. El DPPNI severo es una emergencia obstétrica extrema que pone en riesgo inminente la vida fetal y materna (riesgo de coagulación intravascular diseminada por liberación de tromboplastina decidual). La conducta indiscutible es la cesárea de emergencia inmediata (tiempo decisión-nacimiento <15 minutos).",
        "stepByStepReasoning": "El cuadro clínico es la presentación clásica y dramática del Desprendimiento Prematuro de Placenta Normoinserta (DPPNI o Abruptio Placentae) Grado III (severo). Se produce por la rotura de vasos de la decidua basal con formación de un hematoma retroplacentario masivo que separa mecánicamente la placenta de la pared miometrial antes del nacimiento del feto. Se caracteriza por la tríada clásica patognomónica: 1) Dolor abdominal súbito, continuo e intenso, 2) Sangrado transvaginal oscuro (la hemorragia puede ser oculta en un 20% retenida tras la placenta), y 3) Hipertonía uterina permanente con útero rígido (\"útero de madera\") que no se relaja. La extravasación de sangre hacia el miometrio puede causar apoplejía uterina (útero de Couvelaire). La bradicardia fetal severa y persistente (80-90 lpm) traduce una anoxia fetal aguda catastrófica por interrupción inmediata del intercambio gaseoso útero-placentario en más del 50% de la superficie placentaria. El DPPNI severo es una emergencia obstétrica extrema que pone en riesgo inminente la vida fetal y materna (riesgo de coagulación intravascular diseminada por liberación de tromboplastina decidual). La conducta indiscutible es la cesárea de emergencia inmediata (tiempo decisión-nacimiento <15 minutos).",
        "differentialDiagnosis": [
          {
            "condition": "Placenta Previa Oclusiva Sangrante",
            "rulingRationale": "La placenta previa cursa típicamente con sangrado transvaginal rojo rutilante, abundante pero COMPLETAMENTE INDOLORO, con útero relajado blando no hipertónico y bienestar fetal conservado."
          },
          {
            "condition": "Rotura Uterina Completa",
            "rulingRationale": "La rotura uterina típicamente ocurre en pacientes con cesárea previa durante el trabajo de parto; el dolor es desgarrante seguido de una detención brusca de las contracciones, pérdida del tono uterino, elevación o retroceso de la presentación fetal y partes fetales palpables bajo la pared abdominal, con colapso hemodinámico materno inmediato."
          },
          {
            "condition": "Rotura de Vasa Previa",
            "rulingRationale": "Cursa con sangrado vaginal indoloro coincidente con la rotura artificial o espontánea de membranas con bradicardia fetal extrema fulminante (sangre fetal), sin hipertonía ni dolor abdominal materno."
          }
        ],
        "managementPlan": [
          "1. Activación inmediata del equipo de quirófano para CESÁREA DE URGENCIA EMERGENTE (código de emergencia obstétrica inmediata con meta de extracción fetal en <15 minutos).",
          "2. Soporte vital materno inmediato: oxígeno al 100% por máscara con reservorio, colocar en decúbito lateral izquierdo y canalizar de inmediato dos vías periféricas de grueso calibre (14G o 16G).",
          "3. Tomar muestras urgentes de sangre: hemograma, tipificación y pruebas cruzadas para 4 unidades de concentrados de glóbulos rojos, fibrinógeno sérico (el fibrinógeno <200 mg/dL es el mejor predictor de coagulopatía de consumo masiva) y pruebas de coagulación TP/TTP.",
          "4. Infusión de cristaloides isotónicos intravenosos rápidos para sostener la precarga y perfusión materna mientras se traslada corriendo a la sala de operaciones.",
          "5. Procedimiento quirúrgico: Cesárea de emergencia bajo anestesia general de secuencia rápida; extracción fetal inmediata entregando al equipo de reanimación neonatal avanzada.",
          "6. Inspección uterina intraoperatoria: evacuación del hematoma retroplacentario masivo; evaluación del miometrio por posible infiltración hemática (\"útero de Couvelaire\"). Administrar dosis altas de oxitocina, misoprostol y ácido tranexámico (1 g IV) para prevenir la atonía posparto; si el útero no contrae a pesar de uterotónicos por apoplejía miometrial masiva, realizar suturas compresivas hemostáticas o histerectomía obstétrica para salvar la vida de la madre."
        ],
        "therapeuticPlan": [
          "1. Activación inmediata del equipo de quirófano para CESÁREA DE URGENCIA EMERGENTE (código de emergencia obstétrica inmediata con meta de extracción fetal en <15 minutos).",
          "2. Soporte vital materno inmediato: oxígeno al 100% por máscara con reservorio, colocar en decúbito lateral izquierdo y canalizar de inmediato dos vías periféricas de grueso calibre (14G o 16G).",
          "3. Tomar muestras urgentes de sangre: hemograma, tipificación y pruebas cruzadas para 4 unidades de concentrados de glóbulos rojos, fibrinógeno sérico (el fibrinógeno <200 mg/dL es el mejor predictor de coagulopatía de consumo masiva) y pruebas de coagulación TP/TTP.",
          "4. Infusión de cristaloides isotónicos intravenosos rápidos para sostener la precarga y perfusión materna mientras se traslada corriendo a la sala de operaciones.",
          "5. Procedimiento quirúrgico: Cesárea de emergencia bajo anestesia general de secuencia rápida; extracción fetal inmediata entregando al equipo de reanimación neonatal avanzada.",
          "6. Inspección uterina intraoperatoria: evacuación del hematoma retroplacentario masivo; evaluación del miometrio por posible infiltración hemática (\"útero de Couvelaire\"). Administrar dosis altas de oxitocina, misoprostol y ácido tranexámico (1 g IV) para prevenir la atonía posparto; si el útero no contrae a pesar de uterotónicos por apoplejía miometrial masiva, realizar suturas compresivas hemostáticas o histerectomía obstétrica para salvar la vida de la madre."
        ],
        "pedagogicalRationale": "En sangrado del tercer trimestre: si el sangrado es indoloro y el útero está blando, piense en Placenta Previa; si el sangrado es oscuro, duele intensamente y el útero está duro como una piedra, es DPPNI y debe correr a quirófano. El DPPNI libera tromboplastina tisular al torrente sanguíneo materno, consumiendo velozmente el fibrinógeno: si el fibrinógeno cae a <150-200 mg/dL, anticipe CID severa y prepare crioprecipitados.",
        "clinicalPearls": [
          "En sangrado del tercer trimestre: si el sangrado es indoloro y el útero está blando, piense en Placenta Previa; si el sangrado es oscuro, duele intensamente y el útero está duro como una piedra, es DPPNI y debe correr a quirófano.",
          "El DPPNI libera tromboplastina tisular al torrente sanguíneo materno, consumiendo velozmente el fibrinógeno: si el fibrinógeno cae a <150-200 mg/dL, anticipe CID severa y prepare crioprecipitados."
        ],
        "officialProtocolRef": "Lineamientos Técnicos para la Atención de las Hemorragias del Tercer Trimestre y DPPNI, MINSAL El Salvador / Williams Obstetricia, 26.ª Ed."
      }
    ]
  },
  {
    "id": "unit-medicina-familiar",
    "specialtyId": "medicina_familiar",
    "specialtyName": "Medicina Familiar y Atención Primaria",
    "title": "Medicina Familiar y Salud Comunitaria: Riesgo Cardiovascular OPS/OMS, ALAD, Ley Nacer con Cariño y Vigilancia Epidemiológica",
    "substantiveTheory": "La Medicina Familiar y Comunitaria constituye la columna vertebral del Sistema Nacional Integrado de Salud (SNIS) de El Salvador, materializándose en el primer nivel de atención a través de las Unidades Comunitarias de Salud Familiar (UCSF Básica, Intermedia y Especializada) y los Equipos Comunitarios de Salud Familiar (ECOS). Su praxis trasciende el modelo biomédico tradicional para operar bajo un enfoque biopsicosocial, longitudinal, continuo e integrado, centrado en la persona, su familia y el entorno comunitario.\n\n1. Enfoque Biopsicosocial y Herramientas de Salud Familiar:\nEl médico de familia evalúa al paciente no de forma aislada, sino dentro de la dinámica de su microsistema familiar y comunidad.\nHerramientas estructurales y relacionales obligatorias:\n- Genograma Estructural y Dinámico: Representación gráfica estandarizada de al menos tres generaciones de la familia. Registra la estructura biológica y legal (matrimonios, uniones de hecho, separaciones, divorcios), edades, ocupaciones y defunciones; cartografía enfermedades crónicas no transmisibles con base genética o comportamental (diabetes mellitus, hipertensión arterial, cardiopatía isquémica, cáncer, enfermedad renal, trastornos por uso de sustancias); e identifica patrones de interacción relacional (relaciones estrechas, conflictivas, distantes, rotas o de dependencia).\n- APGAR Familiar de Smilkstein: Cuestionario validado de 5 ítems que evalúa la percepción individual del funcionamiento sistémico familiar en cinco dimensiones: Adaptabilidad (recursos compartidos en crisis), Participación (toma de decisiones mutuas), Gradualidad del crecimiento (maduración y autorrealización), Afecto (expresión emocional de amor y pena) y Capacidad de resolución (compromiso de tiempo y espacio). Puntuación de 0 a 10: 7 a 10 puntos indica Familia Funcional; 4 a 6 puntos, Disfunción Familiar Leve; y 0 a 3 puntos, Disfunción Familiar Severa, guiando la necesidad de intervenciones psicosociales o terapia de familia.\n- Ciclo Vital Familiar (Modelo de Duvall y OMS): Reconocimiento de las etapas normativas familiares (Constitución de la pareja, Familia con hijos lactantes, Familia con preescolares/escolares, Familia con adolescentes, Plataforma de lanzamiento o nido vacío, y Familia en la ancianidad/retiro), anticipando las crisis evolutivas propias de cada transición.\n\n2. Estimación del Riesgo Cardiovascular Global OPS/OMS (Iniciativa HEARTS en Las Américas):\nLa prevención y control de las enfermedades cardiovasculares en El Salvador se rige por la iniciativa HEARTS promovida por la OPS/OMS y adoptada por el MINSAL. En lugar de tratar factores de riesgo de forma aislada (hipertensión o hipercolesterolemia por separado), se evalúa el RIESGO CARDIOVASCULAR GLOBAL A 10 AÑOS, definido como la probabilidad porcentual de sufrir un evento cardiovascular fatal o no fatal (infarto agudo de miocardio o accidente cerebrovascular) en la próxima década.\nVariables utilizadas en las tablas de riesgo OPS/OMS para Centroamérica:\n1) Edad (rango de 40 a 74 años).\n2) Sexo biológico (masculino o femenino).\n3) Tabaquismo activo actual (fumar cigarrillos en el último año).\n4) Cifras de Presión Arterial Sistólica (PAS en mmHg).\n5) Concentración sérica de Colesterol Total (en mmol/L o mg/dL) O Índice de Masa Corporal (IMC en kg/m²) en establecimientos donde no se dispone de laboratorio inmediato.\nEstratificación y conducta clínica normada:\n- Riesgo Bajo (<10%): Modificación del estilo de vida (alimentación saludable rica en frutas, verduras y fibra, baja en sodio <2 g/día y grasas trans; actividad física aeróbica regular de al menos 150 minutos semanales; cese del tabaco). Reevaluación cada 1 a 2 años.\n- Riesgo Moderado (10% a 19%): Modificación intensiva del estilo de vida. Si tras 3 a 6 meses la PAS persiste ≥140 mmHg o el colesterol LDL es >130 mg/dL, considerar inicio de estatinas a dosis moderadas y antihipertensivo. Reevaluación cada 6 a 12 meses.\n- Riesgo Alto (20% a 29%) y Muy Alto (≥30%):\n  * Criterios directos de Riesgo Alto/Muy Alto que NO requieren cálculo por tabla: presencia de enfermedad cardiovascular aterosclerótica documentada (IAM previo, angina de pecho, revascularización, ACV/AIT, enfermedad arterial periférica), Diabetes Mellitus con daño a órgano blanco o duración >10 años, o Enfermedad Renal Crónica en estadios 3 a 5 (TFGe <60 mL/min/1.73m² o albuminuria persistente).\n  * Manejo Mandatorio: Inicio inmediato de Terapia con Estatinas de Alta Potencia: Atorvastatina 40 a 80 mg/día o Rosuvastatina 20 a 40 mg/día, con la meta terapéutica de reducir el colesterol LDL en ≥50% respecto al valor basal y alcanzar un c-LDL <70 mg/dL (o <55 mg/dL en muy alto riesgo); meta de presión arterial estricta <130/80 mmHg; y Ácido Acetilsalicílico (AAS 100 mg/día) en prevención secundaria.\n\n3. Manejo Ambulatorio de Hipertensión Arterial y Diabetes Mellitus Tipo 2 (Guías ALAD y MINSAL):\nEl abordaje ambulatorio protocolizado persigue la reducción integral del riesgo cardiometabólico y la nefroprotección:\n- Hipertensión Arterial Sistémica:\n  * Diagnóstico confirmado mediante mediciones seriadas en al menos dos consultas separadas o monitorización ambulatoria/domiciliaria (MAPA/AMPA).\n  * Metas de control tensional: PA <130/80 mmHg en la gran mayoría de los adultos, incluidos diabéticos y pacientes con ERC; meta de PAS 130-139 mmHg en adultos mayores frágiles (>75-80 años).\n  * Terapia farmacológica de primera línea: En pacientes con HTA Grado 1 de riesgo alto/muy alto o con HTA Grado 2 (PA ≥160/100 mmHg), la indicación mandatoria es INICIAR CON TERAPIA COMBINADA DE DOS FÁRMACOS a dosis fijas en un solo comprimido: un bloqueador del eje renina-angiotensina (IECA como Enalapril 10-20 mg cada 12h, o ARA-II como Losartán 50-100 mg/día) MÁS un Bloqueador de Canales de Calcio dihidropiridínico (Amlodipino 5-10 mg/día) O un Diurético tiazídico/tiazídico-like (Hidroclorotiazida 12.5-25 mg/día o Clortalidona 12.5-25 mg/día). Los IECA/ARA-II son de elección absoluta en presencia de albuminuria o diabetes por su efecto nefroprotector.\n- Diabetes Mellitus Tipo 2 (Guías ALAD y ADA adaptadas por MINSAL):\n  * Metas de control glucémico individualizadas: Hemoglobina Glucosilada (HbA1c) <7.0% en la mayoría de los adultos para prevenir retinopatía, nefropatía y neuropatía; meta más laxa (HbA1c <7.5-8.0%) en adultos mayores frágiles o con comorbilidades graves para evitar hipoglucemias severas.\n  * Primera Línea Farmacológica: Metformina (iniciar con 500-850 mg VO con la cena, titulando cada 1-2 semanas hasta 1000 mg cada 12 horas con las comidas). Contraindicada si la TFG es <30 mL/min/1.73m² por riesgo de acidosis láctica; reducir dosis al 50% si TFG está entre 30 y 44 mL/min.\n  * Terapia orientada a órganos diana (independientemente de la HbA1c alcanzada):\n    - Si el paciente presenta Enfermedad Renal Crónica (albuminuria >30 mg/g o TFGe 20-60 mL/min) o Insuficiencia Cardíaca: asociar mandatoriamente un Inhibidor del cotransportador Sodio-Glucosa tipo 2 (iSGLT2: Empagliflozina 10-25 mg/día o Dapagliflozina 10 mg/día), por su sólida evidencia de enlentecimiento de la progresión renal y reducción de hospitalizaciones por falla cardíaca.\n    - Si predomina la Enfermedad Cardiovascular Aterosclerótica: asociar un Agonista del Receptor de GLP-1 (Liraglutida, Semaglutida, Dulaglutida) o un iSGLT2.\n  * Tamizaje anual obligatorio en la UCSF: Examen de pies con monofilamento de Semmes-Weinstein de 10 g y pulso pedio para prevención de pie diabético; cálculo de la Relación Albúmina/Creatinina en orina al azar (RAC); creatinina sérica con estimación de TFG por CKD-EPI; y fondo de ojo anual con dilatación pupilar.\n\n4. Ley Nacer con Cariño para un Parto Respetado y un Cuidado Cariñoso y Sensible para el Recién Nacido:\nPromulgada en El Salvador en 2021 (Decreto Legislativo n.° 143), esta ley constituye una transformación jurídica y sanitaria de carácter vinculante que redefine el modelo de atención materno-infantil hacia un enfoque centrado en los derechos humanos, la dignidad y la desmedicalización de los procesos naturales.\nPrincipios y disposiciones cardinales de obligatorio cumplimiento:\n1) Derecho al acompañamiento continuo: La mujer gestante tiene el derecho legal inalienable a estar acompañada por una persona de su elección y confianza durante todo el proceso de trabajo de parto, parto y puerperio inmediato, tanto en el sector público como en el privado.\n2) Respeto al Plan de Parto personalizado: Reconocimiento formal de los deseos, preferencias y expectativas informadas de la gestante.\n3) Libertad de movimiento y posturas en el parto: Derecho a la deambulación libre durante la fase latente y activa del trabajo de parto, y libertad para adoptar la posición de expulsión más cómoda y fisiológica (parto vertical: sentada, semisentada, en cuclillas o a gatas), erradicando la posición de litotomía supina forzada rutinaria.\n4) Erradicación de prácticas obsoletas o rutinarias no fundamentadas en evidencia:\n   - PROHIBICIÓN de la tricotomía púbica (rasurado perineal) rutinaria.\n   - PROHIBICIÓN de la colocación rutinaria de enemas evacuantes.\n   - PROHIBICIÓN de la amniorrexis artificial rutinaria (rotura precoz de membranas sin indicación médica precisa).\n   - RESTRICCIÓN estricta de la episiotomía (debe ser selectiva y excepcional, NUNCA rutinaria en primigestas).\n   - PROHIBICIÓN ABSOLUTA y penalizada de la maniobra de Kristeller (presión fúndica violenta sobre el abdomen materno).\n5) Contacto Piel con Piel Inmediato e Ininterrumpido (Apego Precoz): Colocación del recién nacido vigoroso sobre el pecho desnudo de su madre inmediatamente tras el nacimiento durante un mínimo continuo de 60 minutos (la \"Hora de Oro\"), antes de cualquier procedimiento de rutina no urgente (como peso, talla o profilaxis ocular). Fomenta el vínculo afectivo, la termorregulación fisiológica, estabilización glucémica y cardiorrespiratoria y colonización por microbiota materna.\n6) Pinzamiento y corte oportuno del cordón umbilical: Esperar el cese fisiológico de las pulsaciones del cordón umbilical (habitualmente entre 1 y 3 minutos tras la expulsión) en neonatos a término vigorosos, permitiendo la transfusión feto-placentaria de hasta 80-100 mL de sangre oxigenada rica en hierro, lo que previene la anemia ferropénica del lactante en más del 50%.\n7) Inicio temprano y exclusivo de la Lactancia Materna: Garantizar la primera toma de calostro dentro de la primera hora de vida, prohibiendo el suministro de fórmulas lácteas o agua glucosada sin prescripción médica justificada.\n\n5. Vigilancia Epidemiológica Comunitaria y Notificación Oficial VIGEPES:\nLa vigilancia en el primer nivel de atención se articula a través del Sistema de Información de Vigilancia Epidemiológica de El Salvador (VIGEPES) del MINSAL.\nCategorías de eventos de notificación obligatoria:\n- Notificación de Alerta Inmediata (en <24 horas por vía telefónica/electrónica y ficha de investigación): sospecha de sarampión, rubéola, parálisis flácida aguda (sospecha de poliomielitis), cólera, rabia humana, peste, fiebre amarilla, tétanos neonatal, muerte materna, muerte neonatal y brotes inusuales de etiología desconocida o intoxicaciones masivas.\n- Notificación Semanal Consolidada: arbovirosis (Dengue, Chikungunya, Zika), infecciones respiratorias agudas graves (IRAG), neumonías, diarreas y gastroenteritis agudas, malaria, tuberculosis, leishmaniasis, sífilis congénita y mordeduras por animales con riesgo de rabia.\nControl Comunitario de Arbovirosis e Índice Larvario Aédico:\nEl médico de familia coordina con los promotores de salud y la comunidad la investigación y bloqueo de casos sospechosos de dengue. Se calcula el Índice Larvario de Vivienda (porcentaje de casas con presencia de larvas o pupas de Aedes aegypti entre las casas inspeccionadas):\n- <4%: Nivel de bajo riesgo o seguridad epidemiológica.\n- 4% a 9%: Nivel de mediano riesgo o alerta entomológica.\n- ≥10%: Nivel de alto riesgo o emergencia por alta probabilidad de brote epidémico.\nAcciones comunitarias integradas: abatización con larvicidas químicos o biológicos (temefos, piriproxifeno), eliminación física de criaderos inservibles (\"chatarrización\"), untadita en pilas y barriles, y nebulización espacial peri-focal en radios de 100 a 200 metros alrededor de casos confirmados. Enfoque social: abordaje de determinantes sociales de la salud (acceso a agua potable intradomiciliaria continua para evitar almacenamiento prolongado en barriles) y articulación intersectorial con municipalidades y comités comunitarios de protección civil.",
    "clinicalPearls": [
      "En el primer nivel de atención, nunca evalúe factores de riesgo cardiovascular de forma aislada; utilice las tablas de Riesgo Cardiovascular Global a 10 Años de la Iniciativa HEARTS (OPS/OMS) para iniciar estatinas de alta potencia precozmente.",
      "En pacientes diabéticos e hipertensos con albuminuria o nefropatía diabética, los fármacos de primera elección son los bloqueadores del eje renina-angiotensina (IECA/ARA-II) combinados con iSGLT2 por su demostrada nefroprotección y cardioprotección.",
      "La Ley Nacer con Cariño (D.L. 143) establece el derecho legal inalienable de la mujer al acompañamiento continuo, a la libre deambulación y posiciones de parto, contacto piel con piel ininterrumpido en la primera hora y corte oportuno del cordón a los 1-3 min.",
      "El Genograma de tres generaciones y el APGAR Familiar de Smilkstein son herramientas de diagnóstico biopsicosocial esenciales para detectar disfunciones familiares y anticipar crisis normativas del ciclo vital.",
      "En vigilancia epidemiológica comunitaria (VIGEPES), la notificación inmediata en <24 horas es mandatoria ante sospecha de sarampión, poliomielitis (parálisis flácida), cólera, rabia o muerte materna."
    ],
    "keyClinicalProtocols": [
      {
        "protocolName": "Iniciativa HEARTS: Estimación del Riesgo Cardiovascular Global OPS/OMS",
        "summary": "Estratificación a 10 años (bajo <10%, moderado 10-19%, alto 20-29%, muy alto ≥30%); inicio de estatinas de alta potencia (Atorvastatina 40-80 mg) en alto/muy alto riesgo; metas de PA <130/80 y c-LDL <70 mg/dL.",
        "institution": "Iniciativa HEARTS en Las Américas / OPS / MINSAL El Salvador"
      },
      {
        "protocolName": "Manejo Ambulatorio de HTA y Diabetes Mellitus Tipo 2 (Guías ALAD/MINSAL)",
        "summary": "Metas individualizadas de HbA1c <7.0%; Metformina de primera línea; uso de iSGLT2 en ERC o falla cardíaca; combinación temprana de IECA/ARA-II + Calcioantagonista en HTA moderada/severa.",
        "institution": "Asociación Latinoamericana de Diabetes (ALAD) / Norma Técnica MINSAL"
      },
      {
        "protocolName": "Ley Nacer con Cariño para un Parto Respetado",
        "summary": "Derecho inalienable al acompañamiento continuo; libertad de movimiento y posturas de parto; prohibición de tricotomía, enemas y Kristeller; contacto piel con piel ininterrumpido ≥60 min; pinzamiento oportuno del cordón umbilical (1-3 min).",
        "institution": "Decreto Legislativo n.° 143 / Ministerio de Salud de El Salvador"
      },
      {
        "protocolName": "Herramientas de Salud Familiar: Genograma y APGAR Familiar",
        "summary": "Elaboración del árbol genealógico de 3 generaciones; aplicación e interpretación del APGAR de Smilkstein (funcional 7-10, disfunción leve 4-6, severa ≤3); abordaje del ciclo vital y crisis normativas.",
        "institution": "Manual de Medicina Familiar y Comunitaria, Universidad de El Salvador / MINSAL"
      },
      {
        "protocolName": "Vigilancia Epidemiológica Comunitaria y Sistema VIGEPES",
        "summary": "Notificación de alerta inmediata (<24h) y consolidada semanal; cálculo del índice larvario aédico (seguridad <4%, alerta 4-9%, emergencia ≥10%); control de foco comunitario de arbovirosis.",
        "institution": "Dirección de Vigilancia Sanitaria, MINSAL El Salvador"
      }
    ],
    "solvedClinicalCases": [
      {
        "id": "case-mf-01",
        "title": "Estimación del Riesgo Cardiovascular Global a 10 Años Mediante Iniciativa HEARTS en Paciente Hipertenso y Fumador",
        "patientProfile": "Hombre de 56 años, chofer de transporte público, consulta a la UCSF para chequeo general por insistencia de su cónyuge.",
        "clinicalPresentation": "Hombre de 56 años, chofer de transporte público, consulta a la UCSF para chequeo general por insistencia de su cónyuge.. Presenta: El paciente acude asintomático.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "El paciente acude asintomático. Refiere fumar 1 cajetilla de cigarrillos diaria (20 paquetes-año) desde los 22 años. Lleva una vida sedentaria y consume alimentación rica en frituras y sal. Sin antecedentes conocidos de eventos cardiovasculares previos. Al examen físico: PA tomada en reposo en dos ocasiones separadas por 15 minutos: 154/96 mmHg (confirmada en brazo contralateral 152/94 mmHg). FC: 78 lpm, FR: 16 rpm, IMC: 31.4 kg/m² (obesidad grado I), perímetro abdominal: 104 cm. Ruidos cardíacos rítmicos sin soplos, pulsos periféricos palpables y simétricos sin soplos carotídeos. Exámenes de laboratorio en ayunas: Glucemia: 108 mg/dL (glucemia alterada en ayunas), Hemoglobina Glucosilada (HbA1c): 5.9% (prediabetes), Colesterol Total: 248 mg/dL, Colesterol HDL: 38 mg/dL, Triglicéridos: 220 mg/dL, Colesterol LDL calculado: 166 mg/dL. Creatinina sérica: 0.95 mg/dL con TFGe por CKD-EPI de 88 mL/min/1.73m². Relación Albúmina/Creatinina en orina al azar (RAC): 15 mg/g (normal).",
        "diagnosticReasoning": "El paciente presenta múltiples factores de riesgo cardiovascular mayores interconectados: Hipertensión Arterial Grado 1, Tabaquismo activo severo, Dislipidemia aterogénica con hipercolesterolemia y c-LDL elevado, Obesidad Grado I y Prediabetes. Al aplicar las tablas calibradas de Riesgo Cardiovascular Global de la iniciativa HEARTS / OPS para la subregión de Centroamérica (cruzando: edad 56 años, sexo masculino, fumador activo, PAS 154 mmHg y colesterol total 248 mg/dL), el paciente se clasifica en la categoría de RIESGO CARDIOVASCULAR ALTO (probabilidad del 20% al 29% de presentar un infarto de miocardio o ACV en los próximos 10 años). Según los protocolos de la iniciativa HEARTS adoptados por el MINSAL, los pacientes en riesgo alto no deben manejarse con monoterapia conservadora prolongada: tienen indicación mandatoria de inicio inmediato de tratamiento farmacológico antihipertensivo combinado más Terapia con Estatinas de Alta Potencia (Atorvastatina 40-80 mg/día) con la meta estricta de reducir el c-LDL en ≥50% y alcanzar un nivel absoluto <70 mg/dL, además de un plan estructurado e integral de cesación tabáquica.",
        "stepByStepReasoning": "El paciente presenta múltiples factores de riesgo cardiovascular mayores interconectados: Hipertensión Arterial Grado 1, Tabaquismo activo severo, Dislipidemia aterogénica con hipercolesterolemia y c-LDL elevado, Obesidad Grado I y Prediabetes. Al aplicar las tablas calibradas de Riesgo Cardiovascular Global de la iniciativa HEARTS / OPS para la subregión de Centroamérica (cruzando: edad 56 años, sexo masculino, fumador activo, PAS 154 mmHg y colesterol total 248 mg/dL), el paciente se clasifica en la categoría de RIESGO CARDIOVASCULAR ALTO (probabilidad del 20% al 29% de presentar un infarto de miocardio o ACV en los próximos 10 años). Según los protocolos de la iniciativa HEARTS adoptados por el MINSAL, los pacientes en riesgo alto no deben manejarse con monoterapia conservadora prolongada: tienen indicación mandatoria de inicio inmediato de tratamiento farmacológico antihipertensivo combinado más Terapia con Estatinas de Alta Potencia (Atorvastatina 40-80 mg/día) con la meta estricta de reducir el c-LDL en ≥50% y alcanzar un nivel absoluto <70 mg/dL, además de un plan estructurado e integral de cesación tabáquica.",
        "differentialDiagnosis": [
          {
            "condition": "Hipertensión de Bata Blanca Asilada",
            "rulingRationale": "El riesgo cardiovascular no se limita a la cifra tensional; el paciente tiene dislipidemia severa, obesidad abdominal y tabaquismo crónico; además, la monitorización domiciliaria (AMPA) confirmó valores ambulatorios promedio de 148/92 mmHg, descartando efecto bata blanca puro."
          },
          {
            "condition": "Hipertensión Arterial Secundaria por Estenosis de Arteria Renal",
            "rulingRationale": "Típica de inicio súbito en menores de 30 o mayores de 65 años con hipertensión refractaria a ≥3 fármacos, deterioro de función renal tras IECA o soplo abdominal epigástrico ausentes en este paciente."
          },
          {
            "condition": "Síndrome de Apnea Obstructiva del Sueño (SAOS)",
            "rulingRationale": "Aunque la obesidad puede coexistir con SAOS, la hipertensión esencial multifactorial con dislipidemia y tabaquismo justifica por completo el perfil de riesgo cardiovascular sin necesidad de atribuirlo a apnea del sueño exclusiva."
          }
        ],
        "managementPlan": [
          "1. Intervención no farmacológica intensiva: programa multidisciplinario de Cesación Tabáquica con apoyo conductual y evaluación de terapia de reemplazo nicotínico; dieta cardioprotectora DASH (reducción estricta de sodio a <2 g/día, eliminación de grasas trans y ultraprocesados); y prescripción de actividad física aeróbica progresiva de al menos 150 a 300 minutos por semana.",
          "2. Tratamiento antihipertensivo combinado de primera línea a dosis fijas en un solo comprimido: Enalapril 10 mg más Amlodipino 5 mg una vez al día por la mañana (o Losartán 50 mg + Amlodipino 5 mg), con la meta de alcanzar una PA <130/80 mmHg en un plazo de 4 semanas.",
          "3. Terapia hipolipemiante intensiva obligatoria: Atorvastatina 40 mg vía oral cada noche, con el objetivo de reducir el c-LDL en al menos un 50% respecto al basal (meta c-LDL <70 mg/dL).",
          "4. Evaluación del estilo de vida para prediabetes: reducción del 7% del peso corporal mediante déficit calórico y ejercicio para prevenir la progresión a diabetes franca.",
          "5. Control y seguimiento en 4 semanas en la UCSF con control de presión arterial, perfil lipídico de control a los 3 meses y pruebas de función hepática (transaminasas) y renal."
        ],
        "therapeuticPlan": [
          "1. Intervención no farmacológica intensiva: programa multidisciplinario de Cesación Tabáquica con apoyo conductual y evaluación de terapia de reemplazo nicotínico; dieta cardioprotectora DASH (reducción estricta de sodio a <2 g/día, eliminación de grasas trans y ultraprocesados); y prescripción de actividad física aeróbica progresiva de al menos 150 a 300 minutos por semana.",
          "2. Tratamiento antihipertensivo combinado de primera línea a dosis fijas en un solo comprimido: Enalapril 10 mg más Amlodipino 5 mg una vez al día por la mañana (o Losartán 50 mg + Amlodipino 5 mg), con la meta de alcanzar una PA <130/80 mmHg en un plazo de 4 semanas.",
          "3. Terapia hipolipemiante intensiva obligatoria: Atorvastatina 40 mg vía oral cada noche, con el objetivo de reducir el c-LDL en al menos un 50% respecto al basal (meta c-LDL <70 mg/dL).",
          "4. Evaluación del estilo de vida para prediabetes: reducción del 7% del peso corporal mediante déficit calórico y ejercicio para prevenir la progresión a diabetes franca.",
          "5. Control y seguimiento en 4 semanas en la UCSF con control de presión arterial, perfil lipídico de control a los 3 meses y pruebas de función hepática (transaminasas) y renal."
        ],
        "pedagogicalRationale": "En el primer nivel de atención no trate números aislados de presión o colesterol: calcule el Riesgo Cardiovascular Global con la tabla HEARTS; un hipertenso fumador con colesterol alto tiene las arterias en peligro inminente y requiere estatinas potentes de inmediato. En pacientes de alto riesgo cardiovascular, la terapia combinada de dos antihipertensivos a dosis bajas en una sola tableta logra la meta tensional mucho más rápido y con menos efectos adversos que duplicar la dosis de un solo fármaco.",
        "clinicalPearls": [
          "En el primer nivel de atención no trate números aislados de presión o colesterol: calcule el Riesgo Cardiovascular Global con la tabla HEARTS; un hipertenso fumador con colesterol alto tiene las arterias en peligro inminente y requiere estatinas potentes de inmediato.",
          "En pacientes de alto riesgo cardiovascular, la terapia combinada de dos antihipertensivos a dosis bajas en una sola tableta logra la meta tensional mucho más rápido y con menos efectos adversos que duplicar la dosis de un solo fármaco."
        ],
        "officialProtocolRef": "Guía Clínica para el Manejo del Riesgo Cardiovascular Global y la Hipertensión Arterial (Iniciativa HEARTS), OPS/OMS / MINSAL El Salvador."
      },
      {
        "id": "case-mf-02",
        "title": "Control Prenatal Ambulatorio en UCSF Aplicando los Preceptos de la Ley Nacer con Cariño",
        "patientProfile": "Primigesta de 22 años, costurera, con embarazo de 36 semanas normoevolutivo, acude a su 6.° control prenatal en la UCSF intermedia.",
        "clinicalPresentation": "Primigesta de 22 años, costurera, con embarazo de 36 semanas normoevolutivo, acude a su 6.° control prenatal en la UCSF intermedia.. Presenta: La paciente acude acompañada por su pareja sentimental.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "La paciente acude acompañada por su pareja sentimental. Manifiesta sentirse bien, percibe movimientos fetales activos y refiere que desea prepararse para el parto. Expresa temor debido a comentarios de familiares que sufrieron maltrato verbal y procedimientos dolorosos no autorizados en partos previos en hospitales. Al examen físico: PA: 110/70 mmHg, FC: 74 lpm, ganancia de peso total de 11 kg (adecuada para su IMC inicial de 22 kg/m²). Fondo uterino: 33 cm, feto único en presentación cefálica, dorso izquierdo con Frecuencia Cardíaca Fetal de 138 lpm. No presenta edemas patológicos, sin proteinuria en orina. Pelvimetría clínica compatible con pelvis ginecoide amplia.",
        "diagnosticReasoning": "La paciente cursa con un Embarazo a Término Temprano de Bajo Riesgo Obstétrico. La consulta prenatal en esta etapa avanzada ofrece la oportunidad paradigmática para consolidar la implementación de la Ley Nacer con Cariño para un Parto Respetado (D.L. 143 de El Salvador). La gestante y su pareja tienen derechos legales fundamentales que deben ser garantizados activamente por el médico de familia y el equipo de la UCSF antes del traslado a la maternidad hospitalaria: 1) Elaboración y validación del Plan de Parto donde la mujer plasme sus decisiones informadas; 2) Garantía del derecho al acompañamiento continuo por su pareja durante el preparto, parto y puerperio inmediato; 3) Educación sobre el derecho a la libre movilidad y adopción de posturas fisiológicas verticales de parto; 4) Erradicación explícita de prácticas obsoletas no deseadas (tricotomía, enemas y episiotomías rutinarias); y 5) Reafirmación del derecho al contacto piel con piel ininterrumpido durante la primera hora (\"Hora de Oro\") y el pinzamiento oportuno del cordón umbilical.",
        "stepByStepReasoning": "La paciente cursa con un Embarazo a Término Temprano de Bajo Riesgo Obstétrico. La consulta prenatal en esta etapa avanzada ofrece la oportunidad paradigmática para consolidar la implementación de la Ley Nacer con Cariño para un Parto Respetado (D.L. 143 de El Salvador). La gestante y su pareja tienen derechos legales fundamentales que deben ser garantizados activamente por el médico de familia y el equipo de la UCSF antes del traslado a la maternidad hospitalaria: 1) Elaboración y validación del Plan de Parto donde la mujer plasme sus decisiones informadas; 2) Garantía del derecho al acompañamiento continuo por su pareja durante el preparto, parto y puerperio inmediato; 3) Educación sobre el derecho a la libre movilidad y adopción de posturas fisiológicas verticales de parto; 4) Erradicación explícita de prácticas obsoletas no deseadas (tricotomía, enemas y episiotomías rutinarias); y 5) Reafirmación del derecho al contacto piel con piel ininterrumpido durante la primera hora (\"Hora de Oro\") y el pinzamiento oportuno del cordón umbilical.",
        "differentialDiagnosis": [
          {
            "condition": "Preeclampsia de Inicio Tardío Asintomática",
            "rulingRationale": "Descartada por cifras tensionales óptimas (110/70 mmHg), ausencia de proteinuria en tira reactiva y ausencia total de cefalea o alteraciones visuales."
          },
          {
            "condition": "Restricción del Crecimiento Intrauterino (RCIU)",
            "rulingRationale": "La altura uterina es de 33 cm para 36 semanas (dentro de los percentiles 25-75 para tablas de CLAP/OPS) y la ganancia de peso materna de 11 kg ha sido óptima."
          },
          {
            "condition": "Distocia de Presentación Fetal (Pelviana o Transversa)",
            "rulingRationale": "Las maniobras de Leopold confirman de forma certera la presentación cefálica encajada en pelvis."
          }
        ],
        "managementPlan": [
          "1. Elaboración participativa y firma del Plan de Parto Respetado, acreditando formalmente a su pareja como la persona elegida para el acompañamiento continuo ininterrumpido en el hospital de maternidad.",
          "2. Brindar consejería prenatal basada en la Ley Nacer con Cariño: explicar que durante el trabajo de parto tendrá libertad de movimiento, deambulación, hidratación oral con líquidos claros, técnicas de respiración y manejo no farmacológico del dolor (masajes lumbares, hidroterapia, uso de pelota suiza de pilates).",
          "3. Certificar en el expediente clínico el rechazo informado a prácticas invasivas rutinarias: no tricotomía, no enemas evacuantes y no episiotomía rutinaria (solo selectiva si hay sufrimiento fetal agudo).",
          "4. Planificar la atención del recién nacido vigoroso: asegurar que el neonato será colocado inmediatamente en Contacto Piel con Piel desnudo sobre el tórax materno durante un mínimo continuo de 60 minutos antes de cualquier medición antropométrica de rutina.",
          "5. Coordinar con el equipo de parto la práctica del pinzamiento oportuno del cordón umbilical (esperar de 1 a 3 minutos hasta que cesen las pulsaciones fisiológicas del cordón) para prevenir la anemia ferropénica del lactante.",
          "6. Apoyar el inicio temprano de la lactancia materna exclusiva dentro de la primera hora de vida (la \"Hora de Oro\"), educando a ambos padres sobre el agarre correcto y la succión eficaz.",
          "7. Cita de seguimiento en 1 semana en la UCSF y entrega de la hoja de referencia directa a la maternidad correspondiente."
        ],
        "therapeuticPlan": [
          "1. Elaboración participativa y firma del Plan de Parto Respetado, acreditando formalmente a su pareja como la persona elegida para el acompañamiento continuo ininterrumpido en el hospital de maternidad.",
          "2. Brindar consejería prenatal basada en la Ley Nacer con Cariño: explicar que durante el trabajo de parto tendrá libertad de movimiento, deambulación, hidratación oral con líquidos claros, técnicas de respiración y manejo no farmacológico del dolor (masajes lumbares, hidroterapia, uso de pelota suiza de pilates).",
          "3. Certificar en el expediente clínico el rechazo informado a prácticas invasivas rutinarias: no tricotomía, no enemas evacuantes y no episiotomía rutinaria (solo selectiva si hay sufrimiento fetal agudo).",
          "4. Planificar la atención del recién nacido vigoroso: asegurar que el neonato será colocado inmediatamente en Contacto Piel con Piel desnudo sobre el tórax materno durante un mínimo continuo de 60 minutos antes de cualquier medición antropométrica de rutina.",
          "5. Coordinar con el equipo de parto la práctica del pinzamiento oportuno del cordón umbilical (esperar de 1 a 3 minutos hasta que cesen las pulsaciones fisiológicas del cordón) para prevenir la anemia ferropénica del lactante.",
          "6. Apoyar el inicio temprano de la lactancia materna exclusiva dentro de la primera hora de vida (la \"Hora de Oro\"), educando a ambos padres sobre el agarre correcto y la succión eficaz.",
          "7. Cita de seguimiento en 1 semana en la UCSF y entrega de la hoja de referencia directa a la maternidad correspondiente."
        ],
        "pedagogicalRationale": "La Ley Nacer con Cariño no es una sugerencia optativa: es una ley de la República de El Salvador vinculante para todos los profesionales de salud, que penaliza la violencia obstétrica y prohíbe la maniobra de Kristeller. El contacto piel con piel durante la primera hora de vida no debe interrumpirse para pesar ni tallar al bebé: la antropometría puede esperar 60 minutos; el apego precoz y el inicio de la lactancia no pueden esperar.",
        "clinicalPearls": [
          "La Ley Nacer con Cariño no es una sugerencia optativa: es una ley de la República de El Salvador vinculante para todos los profesionales de salud, que penaliza la violencia obstétrica y prohíbe la maniobra de Kristeller.",
          "El contacto piel con piel durante la primera hora de vida no debe interrumpirse para pesar ni tallar al bebé: la antropometría puede esperar 60 minutos; el apego precoz y el inicio de la lactancia no pueden esperar."
        ],
        "officialProtocolRef": "Ley Nacer con Cariño para un Parto Respetado y un Cuidado Cariñoso y Sensible para el Recién Nacido (Decreto Legislativo n.° 143) / MINSAL El Salvador."
      },
      {
        "id": "case-mf-03",
        "title": "Manejo Integral de Pie Diabético Neuropático Infectado Grado 2 de Wagner en Primer Nivel de Atención",
        "patientProfile": "Hombre de 58 años, agricultor con diabetes mellitus tipo 2 diagnosticada hace 14 años en tratamiento irregular con glibenclamida, acude por lesión ulcerada.",
        "clinicalPresentation": "Hombre de 58 años, agricultor con diabetes mellitus tipo 2 diagnosticada hace 14 años en tratamiento irregular con glibenclamida, acude por lesión ulcerada.. Presenta: El paciente acude a la UCSF porque su hija notó mal olor y manchado purulento en el calcetín derecho desde hace 5 días.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "El paciente acude a la UCSF porque su hija notó mal olor y manchado purulento en el calcetín derecho desde hace 5 días. El paciente refiere que no siente dolor alguno (\"no me duele nada, solo está mojado el zapato\"). Relata que hace una semana caminó descalzo en el patio y probablemente se espinó sin darse cuenta. Al examen físico: paciente afebril, orientado. PA: 130/80 mmHg, FC: 78 lpm, Temp: 36.8 °C. Examen del pie derecho: deformidad en dedos en garra con hiperqueratosis plantar severa. En la cabeza del primer metatarsiano de la planta del pie derecho se observa una úlcera circular profunda de 2.5 x 2.0 cm de diámetro, de fondo eritematoso con exudado purulento moderado y bordes macerados; la úlcera penetra el tejido celular subcutáneo hasta la fascia profunda pero la prueba del estilete óseo (probe-to-bone) es negativa (no contacta superficie ósea dura). No hay crepitación ni necrosis negruzca. Celulitis perilesional eritematosa de 1.5 cm alrededor de los bordes. Pulsos pedio y tibial posterior palpables. Examen neurológico: prueba del monofilamento de Semmes-Weinstein (10 g) negativa en 8 de los 10 puntos plantares (pérdida severa de la sensibilidad protectora distal) y reflejo aquiliano abolido bilateralmente. Glucemia en ayunas: 242 mg/dL, HbA1c: 10.2%. Radiografía del pie derecho en dos proyecciones: sin evidencia de gas en tejidos blandos ni signos de osteólisis o periostitis cortical ósea.",
        "diagnosticReasoning": "El paciente presenta una Úlcera de Pie Diabético Neuropático Infectada Grado 2 según la Clasificación de Wagner (úlcera profunda que compromete ligamentos, tendones o cápsula articular sin afectación ósea ni absceso profundo), correspondiente a una infección leve a moderada según los criterios de IWGDF/IDSA (eritema perilesional <2 cm sin toxicidad sistémica). La patogenia es puramente neuropática: la polineuropatía diabética sensitivomotora crónica provocó pérdida completa de la sensibilidad táctil y térmica dolorosa protectora (monofilamento negativo), permitiendo que un traumatismo inadvertido por cuerpo extraño evolucionara sin dolor a una solución de continuidad profunda sobrecargada por la deformidad biomecánica del pie (dedos en garra por atrofia de músculos interóseos). La preservación de los pulsos pedios y la radiografía negativa para osteomielitis confirman un lecho vascular adecuado y ausencia de infección ósea en este momento. El manejo en el primer nivel exige tres pilares simultáneos: 1) Descarga mecánica absoluta de la presión plantar, 2) Desbridamiento local y antibioticoterapia dirigida a grampositivos y enterobacterias, y 3) Optimización metabólica intensiva de la glucemia.",
        "stepByStepReasoning": "El paciente presenta una Úlcera de Pie Diabético Neuropático Infectada Grado 2 según la Clasificación de Wagner (úlcera profunda que compromete ligamentos, tendones o cápsula articular sin afectación ósea ni absceso profundo), correspondiente a una infección leve a moderada según los criterios de IWGDF/IDSA (eritema perilesional <2 cm sin toxicidad sistémica). La patogenia es puramente neuropática: la polineuropatía diabética sensitivomotora crónica provocó pérdida completa de la sensibilidad táctil y térmica dolorosa protectora (monofilamento negativo), permitiendo que un traumatismo inadvertido por cuerpo extraño evolucionara sin dolor a una solución de continuidad profunda sobrecargada por la deformidad biomecánica del pie (dedos en garra por atrofia de músculos interóseos). La preservación de los pulsos pedios y la radiografía negativa para osteomielitis confirman un lecho vascular adecuado y ausencia de infección ósea en este momento. El manejo en el primer nivel exige tres pilares simultáneos: 1) Descarga mecánica absoluta de la presión plantar, 2) Desbridamiento local y antibioticoterapia dirigida a grampositivos y enterobacterias, y 3) Optimización metabólica intensiva de la glucemia.",
        "differentialDiagnosis": [
          {
            "condition": "Pie Diabético Isquémico / Neuroisquémico Gangrenoso (Wagner Grado 4)",
            "rulingRationale": "El pie isquémico cursa con pulsos periféricos impalpables, frialdad cadavérica, dolor intenso en reposo que empeora al elevar el miembro y necrosis gangrenosa seca o húmeda; este paciente tiene pulsos llenos y la lesión es neuropática exudativa."
          },
          {
            "condition": "Osteomielitis Subyacente (Wagner Grado 3)",
            "rulingRationale": "La prueba de contacto óseo (probe-to-bone) con estilete metálico es negativa y la radiografía ósea de alta resolución descartó erosión cortical, periostitis o secuestros óseos en el metatarsiano."
          },
          {
            "condition": "Mal Perforante Plantar no Infectado (Wagner Grado 1)",
            "rulingRationale": "El grado 1 es una úlcera superficial que no rebasa la dermis y no tiene secreción purulenta ni celulitis perilesional; este caso penetra hasta fascia y tiene infección activa."
          }
        ],
        "managementPlan": [
          "1. Desbridamiento cortante quirúrgico menor ambulatorio en el área de curaciones de la UCSF: bajo técnica aséptica, retirar todo el tejido calloso hiperqueratósico perilesional macerado y el tejido desvitalizado del fondo de la úlcera hasta obtener bordes sangrantes sanos.",
          "2. Toma de muestra para cultivo bacteriológico del fondo de la úlcera tras el desbridamiento y limpieza con solución salina normal (NUNCA tomar frotis de exudado superficial con hisopo por contaminación saprófita).",
          "3. Curación local con apósitos que mantengan un ambiente húmedo fisiológico (apósito de alginato de calcio o hidrogel) y protección de los bordes con crema de óxido de zinc.",
          "4. Descarga mecánica obligatoria: PROHIBICIÓN TOTAL del apoyo plantar del pie derecho; uso de calzado ortopédico de alivio del antepié (zapato de tacón invertido o bota de descarga) o muletas para deambular.",
          "5. Antibioticoterapia empírica oral de primera línea para infección de pie diabético leve-moderada (cubriendo Staphylococcus aureus sensible, Streptococcus pyogenes y enterobacterias): Ciprofloxacino 500 mg VO cada 12 horas más Clindamicina 300 mg VO cada 8 horas (o Amoxicilina/Ácido Clavulánico 875/125 mg VO cada 12 horas) durante 10 a 14 días.",
          "6. Ajuste intensivo del control glucémico: suspender glibenclamida e iniciar insulinoterapia basal o titular Metformina asociada a un iSGLT2 si la función renal lo permite, con cita de curación y control cada 48 a 72 horas."
        ],
        "therapeuticPlan": [
          "1. Desbridamiento cortante quirúrgico menor ambulatorio en el área de curaciones de la UCSF: bajo técnica aséptica, retirar todo el tejido calloso hiperqueratósico perilesional macerado y el tejido desvitalizado del fondo de la úlcera hasta obtener bordes sangrantes sanos.",
          "2. Toma de muestra para cultivo bacteriológico del fondo de la úlcera tras el desbridamiento y limpieza con solución salina normal (NUNCA tomar frotis de exudado superficial con hisopo por contaminación saprófita).",
          "3. Curación local con apósitos que mantengan un ambiente húmedo fisiológico (apósito de alginato de calcio o hidrogel) y protección de los bordes con crema de óxido de zinc.",
          "4. Descarga mecánica obligatoria: PROHIBICIÓN TOTAL del apoyo plantar del pie derecho; uso de calzado ortopédico de alivio del antepié (zapato de tacón invertido o bota de descarga) o muletas para deambular.",
          "5. Antibioticoterapia empírica oral de primera línea para infección de pie diabético leve-moderada (cubriendo Staphylococcus aureus sensible, Streptococcus pyogenes y enterobacterias): Ciprofloxacino 500 mg VO cada 12 horas más Clindamicina 300 mg VO cada 8 horas (o Amoxicilina/Ácido Clavulánico 875/125 mg VO cada 12 horas) durante 10 a 14 días.",
          "6. Ajuste intensivo del control glucémico: suspender glibenclamida e iniciar insulinoterapia basal o titular Metformina asociada a un iSGLT2 si la función renal lo permite, con cita de curación y control cada 48 a 72 horas."
        ],
        "pedagogicalRationale": "La ausencia de dolor en una úlcera de pie diabético no es una buena noticia: es la confirmación trágica de que la neuropatía destruyó los nervios sensitivos del paciente. En el pie diabético la regla de oro es la descarga mecánica: ninguna curación ni ningún antibiótico cerrará una úlcera si el paciente sigue caminando y apoyando su peso sobre la herida.",
        "clinicalPearls": [
          "La ausencia de dolor en una úlcera de pie diabético no es una buena noticia: es la confirmación trágica de que la neuropatía destruyó los nervios sensitivos del paciente.",
          "En el pie diabético la regla de oro es la descarga mecánica: ninguna curación ni ningún antibiótico cerrará una úlcera si el paciente sigue caminando y apoyando su peso sobre la herida."
        ],
        "officialProtocolRef": "Lineamientos Técnicos para la Prevención, Diagnóstico y Tratamiento del Pie Diabético, MINSAL El Salvador / Guías Clínicas IWGDF (International Working Group on the Diabetic Foot)."
      },
      {
        "id": "case-mf-04",
        "title": "Abordaje Integral y Farmacológico del Episodio Depresivo Mayor en Paciente con Comorbilidad Crónica en UCSF",
        "patientProfile": "Mujer de 52 años, viuda desde hace 1 año, con hipertensión arterial controlada, consulta por \"cansancio constante y dolores de cabeza\".",
        "clinicalPresentation": "Mujer de 52 años, viuda desde hace 1 año, con hipertensión arterial controlada, consulta por \"cansancio constante y dolores de cabeza\".. Presenta: La paciente consulta por fatiga crónica incapacitante, mialgias generalizadas y cefalea holocraneana de 4 meses de evolución.",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "La paciente consulta por fatiga crónica incapacitante, mialgias generalizadas y cefalea holocraneana de 4 meses de evolución. En la anamnesis biopsicosocial dirigida, la paciente confiesa con llanto fácil que ha perdido el interés por sus actividades cotidianas (incluyendo su negocio de costura), no disfruta la compañía de sus nietos (anhedonia marcada), presenta insomnio de despertar precoz (se despierta a las 3:00 am sin poder conciliar el sueño nuevamente), pérdida involuntaria de 5 kg de peso en 3 meses por inapetencia total, y sentimientos intensos de inutilidad y culpa (\"siento que soy una carga para mis hijos\"). Niega ideación suicida estructurada pero expresa que \"a veces desearía no despertar\". El APGAR familiar revela 3 puntos (Disfunción Familiar Severa tras la muerte de su cónyuge y distanciamiento de sus hijos). Cuestionario de Salud del Paciente (PHQ-9): puntaje de 18 puntos (Depresión Moderadamente Grave). Examen físico y tiroideo normales; TSH sérica normal (2.1 uUI/mL), hemograma y glucemia normales.",
        "diagnosticReasoning": "La paciente cumple los criterios diagnósticos completos del DSM-5 y la Guía de Intervención mhGAP de la OPS/OMS para un Episodio Depresivo Mayor Único de Intensidad Moderada a Grave sin síntomas psicóticos. Presenta 6 de los 9 síntomas cardinales presentes casi todos los días durante más de dos semanas: 1) Estado de ánimo deprimido la mayor parte del día, 2) Anhedonia o pérdida marcada de interés y placer en todas las actividades, 3) Insomnio terminal, 4) Fatiga o pérdida de energía diaria, 5) Sentimientos de culpa e inutilidad desproporcionados, y 6) Disminución del apetito con pérdida de peso no buscada. La comorbilidad con hipertensión arterial y el duelo no resuelto acentuaron la disfunción familiar. En la atención primaria de salud (UCSF), el médico de familia no debe medicalizar de forma aislada ni derivar innecesariamente casos que pueden resolverse en el primer nivel: el tratamiento estándar y costo-efectivo consiste en la combinación de Psicoeducación estructurada, activación conductual y Farmacoterapia con un Inhibidor Selectivo de la Recaptación de Serotonina (ISRS) de primera línea (Sertralina o Escitalopram).",
        "stepByStepReasoning": "La paciente cumple los criterios diagnósticos completos del DSM-5 y la Guía de Intervención mhGAP de la OPS/OMS para un Episodio Depresivo Mayor Único de Intensidad Moderada a Grave sin síntomas psicóticos. Presenta 6 de los 9 síntomas cardinales presentes casi todos los días durante más de dos semanas: 1) Estado de ánimo deprimido la mayor parte del día, 2) Anhedonia o pérdida marcada de interés y placer en todas las actividades, 3) Insomnio terminal, 4) Fatiga o pérdida de energía diaria, 5) Sentimientos de culpa e inutilidad desproporcionados, y 6) Disminución del apetito con pérdida de peso no buscada. La comorbilidad con hipertensión arterial y el duelo no resuelto acentuaron la disfunción familiar. En la atención primaria de salud (UCSF), el médico de familia no debe medicalizar de forma aislada ni derivar innecesariamente casos que pueden resolverse en el primer nivel: el tratamiento estándar y costo-efectivo consiste en la combinación de Psicoeducación estructurada, activación conductual y Farmacoterapia con un Inhibidor Selectivo de la Recaptación de Serotonina (ISRS) de primera línea (Sertralina o Escitalopram).",
        "differentialDiagnosis": [
          {
            "condition": "Hipotiroidismo Primario Subclínico o Clínico",
            "rulingRationale": "El hipotiroidismo comparte astenia, decaimiento y síntomas depresivos; se descartó por el examen tiroideo sin bocio y la cuantificación hormonal de TSH normal (2.1 uUI/mL)."
          },
          {
            "condition": "Duelo No Complicado o Normal",
            "rulingRationale": "El duelo normal preserva la autoestima y la capacidad de experimentar momentos de consuelo o afecto positivo; en este caso la sintomatología excede el año, incluye sentimientos de inutilidad globalizados, anhedonia total y deterioro funcional severo."
          },
          {
            "condition": "Trastorno de Ansiedad Generalizada Aislado",
            "rulingRationale": "Aunque puede existir comorbilidad ansiosa, la anhedonia profunda, el despertar precoz y los sentimientos de culpa sitúan al síndrome depresivo como la patología primaria cardinal."
          }
        ],
        "managementPlan": [
          "1. Establecer alianza terapéutica empática y validar el sufrimiento emocional de la paciente, desmitificando la depresión como una enfermedad médica tratable y no una debilidad de carácter.",
          "2. Evaluación rigurosa y continua del riesgo de suicidio: descartar ideación autolítica activa estructurada, elaborar un contrato de seguridad verbal y coordinar una red de apoyo familiar de supervisión.",
          "3. Farmacoterapia antidepresiva de primera línea según la Guía mhGAP / MINSAL: Iniciar Sertralina oral a 25 mg/día durante los primeros 4 a 6 días para minimizar efectos secundarios gastrointestinales transitorios, incrementando luego a la dosis terapéutica estándar de 50 mg/día por la mañana.",
          "4. Psicoeducación farmacológica esencial: advertir enfáticamente a la paciente y a su familia que el efecto terapéutico antidepresivo comenzará a evidenciarse después de 2 a 4 semanas de tratamiento continuado, y que NO debe suspender el fármaco antes de tiempo ni duplicar dosis.",
          "5. Intervención psicosocial en la UCSF: citar a reunión familiar para analizar el genograma y los resultados del APGAR familiar, involucrando a los hijos en el acompañamiento afectivo y redistribución de cargas cotidianas; estructurar un programa de activación conductual progresiva.",
          "6. Seguimiento clínico: primera cita de control a las 2 semanas para evaluar adherencia, tolerancia y riesgo suicida; citas mensuales posteriores. Mantener el tratamiento antidepresivo durante al menos 6 a 9 meses tras la remisión completa de los síntomas para prevenir recaídas."
        ],
        "therapeuticPlan": [
          "1. Establecer alianza terapéutica empática y validar el sufrimiento emocional de la paciente, desmitificando la depresión como una enfermedad médica tratable y no una debilidad de carácter.",
          "2. Evaluación rigurosa y continua del riesgo de suicidio: descartar ideación autolítica activa estructurada, elaborar un contrato de seguridad verbal y coordinar una red de apoyo familiar de supervisión.",
          "3. Farmacoterapia antidepresiva de primera línea según la Guía mhGAP / MINSAL: Iniciar Sertralina oral a 25 mg/día durante los primeros 4 a 6 días para minimizar efectos secundarios gastrointestinales transitorios, incrementando luego a la dosis terapéutica estándar de 50 mg/día por la mañana.",
          "4. Psicoeducación farmacológica esencial: advertir enfáticamente a la paciente y a su familia que el efecto terapéutico antidepresivo comenzará a evidenciarse después de 2 a 4 semanas de tratamiento continuado, y que NO debe suspender el fármaco antes de tiempo ni duplicar dosis.",
          "5. Intervención psicosocial en la UCSF: citar a reunión familiar para analizar el genograma y los resultados del APGAR familiar, involucrando a los hijos en el acompañamiento afectivo y redistribución de cargas cotidianas; estructurar un programa de activación conductual progresiva.",
          "6. Seguimiento clínico: primera cita de control a las 2 semanas para evaluar adherencia, tolerancia y riesgo suicida; citas mensuales posteriores. Mantener el tratamiento antidepresivo durante al menos 6 a 9 meses tras la remisión completa de los síntomas para prevenir recaídas."
        ],
        "pedagogicalRationale": "En atención primaria, más del 50% de las depresiones consultan por síntomas somáticos vagos (dolor de cabeza, fatiga, gastritis): si los exámenes de laboratorio son normales, pregunte siempre por anhedonia y sueño. Advierta siempre al paciente que los antidepresivos tardan de 2 a 4 semanas en funcionar: si no se les explica esto el primer día, la mayoría suspende el medicamento a los 5 días creyendo que no sirve.",
        "clinicalPearls": [
          "En atención primaria, más del 50% de las depresiones consultan por síntomas somáticos vagos (dolor de cabeza, fatiga, gastritis): si los exámenes de laboratorio son normales, pregunte siempre por anhedonia y sueño.",
          "Advierta siempre al paciente que los antidepresivos tardan de 2 a 4 semanas en funcionar: si no se les explica esto el primer día, la mayoría suspende el medicamento a los 5 días creyendo que no sirve."
        ],
        "officialProtocolRef": "Programa de Acción para Superar las Brechas en Salud Mental (Guía de Intervención mhGAP), OMS/OPS / Lineamientos Técnicos para la Atención de la Salud Mental, MINSAL El Salvador."
      },
      {
        "id": "case-mf-05",
        "title": "Investigación Epidemiológica y Control Comunitario de Brote de Dengue en Caserío Rural (VIGEPES e Índice Aédico)",
        "patientProfile": "Equipo Comunitario de Salud Familiar (ECOS) de UCSF en caserío El Espino (San Miguel) detecta un conglomerado inusual de casos febriles.",
        "clinicalPresentation": "Equipo Comunitario de Salud Familiar (ECOS) de UCSF en caserío El Espino (San Miguel) detecta un conglomerado inusual de casos febriles.. Presenta: Durante la semana epidemiológica 24, el médico de familia de la UCSF identifica en la consulta ambulatoria a 8 pacientes (5 niños y 3 adultos jóvenes) procedentes del mismo caserío rural que consultan con síndrome febril agudo (fiebre de 3 a 5 días de evolución, mialgias, artralgias intensas y erupción cutánea pruriginosa macular).",
        "physicalExam": "Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.",
        "labAndImagingData": "Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.",
        "initialVignette": "Durante la semana epidemiológica 24, el médico de familia de la UCSF identifica en la consulta ambulatoria a 8 pacientes (5 niños y 3 adultos jóvenes) procedentes del mismo caserío rural que consultan con síndrome febril agudo (fiebre de 3 a 5 días de evolución, mialgias, artralgias intensas y erupción cutánea pruriginosa macular). Dos de los pacientes infantiles presentaron signos de alarma (dolor abdominal continuo y vómitos persistentes), requiriendo referencia hospitalaria. En el caserío residen 120 familias que carecen de servicio de agua potable intradomiciliaria continua y almacenan agua de lluvia en barriles plásticos y pilas descubiertas. El médico activa de inmediato la alerta epidemiológica local en el sistema VIGEPES.",
        "diagnosticReasoning": "El médico de familia enfrenta un Brote Epidémico Comunitario de Arbovirosis (Dengue) en fase de expansión activa. El incremento inusual de casos febriles concentrados en tiempo, espacio y características clínicas supera el canal endémico histórico del área geográfica de influencia de la UCSF. En el marco del Reglamento Sanitario Internacional y la Norma Técnica de Vigilancia Epidemiológica del MINSAL, la función del médico de familia y su equipo ECOS trasciende la atención clínica individual para asumir el liderazgo epidemiológico y comunitario: 1) Notificación inmediata del brote a través del Sistema de Información de Vigilancia Epidemiológica de El Salvador (VIGEPES); 2) Delimitación del foco y búsqueda activa de casos casa a casa; 3) Evaluación entomológica mediante el cálculo del Índice Larvario Aédico; 4) Ejecución de medidas integradas de control vectorial físico, químico y social; y 5) Coordinación intersectorial con la Comisión Municipal de Protección Civil.",
        "stepByStepReasoning": "El médico de familia enfrenta un Brote Epidémico Comunitario de Arbovirosis (Dengue) en fase de expansión activa. El incremento inusual de casos febriles concentrados en tiempo, espacio y características clínicas supera el canal endémico histórico del área geográfica de influencia de la UCSF. En el marco del Reglamento Sanitario Internacional y la Norma Técnica de Vigilancia Epidemiológica del MINSAL, la función del médico de familia y su equipo ECOS trasciende la atención clínica individual para asumir el liderazgo epidemiológico y comunitario: 1) Notificación inmediata del brote a través del Sistema de Información de Vigilancia Epidemiológica de El Salvador (VIGEPES); 2) Delimitación del foco y búsqueda activa de casos casa a casa; 3) Evaluación entomológica mediante el cálculo del Índice Larvario Aédico; 4) Ejecución de medidas integradas de control vectorial físico, químico y social; y 5) Coordinación intersectorial con la Comisión Municipal de Protección Civil.",
        "differentialDiagnosis": [
          {
            "condition": "Brote de Infección por Virus Chikungunya o Zika",
            "rulingRationale": "El Chikungunya produce poliartritis bilateral simétrica incapacitante de manos y pies con escasa afectación plaquetaria; el Zika cursa con exantema pruriginoso descendente precoz y conjuntivitis no purulenta; en este brote la presencia de leucopenia marcada, dolor abdominal y signos de alarma orienta a serotipos virulentos de Dengue (DENV-2 o DENV-3)."
          },
          {
            "condition": "Brote de Leptospirosis Humana tras Lluvias",
            "rulingRationale": "La leptospirosis se asocia a contacto con aguas estancadas contaminadas con orina de roedores, presentando sufusión conjuntival severa, ictericia franca con falla renal (síndrome de Weil) y leucocitosis con neutrofilia."
          },
          {
            "condition": "Brote de Malaria por Plasmodium vivax",
            "rulingRationale": "La malaria cursa con paroxismos febriles terciarios regulares con escalofríos intensos y sudoración profusa; el frotis de gota gruesa comunitario resultó negativo para hemoparásitos."
          }
        ],
        "managementPlan": [
          "1. Notificación inmediata de alerta de brote en la plataforma VIGEPES del MINSAL y conformación inmediata del Equipo de Respuesta Rápida (ERR) local con el promotor de salud, inspector de saneamiento ambiental y enfermera comunitaria.",
          "2. Búsqueda activa comunitaria casa a casa de pacientes febriles sospechosos en un radio de 200 metros alrededor de los casos índice, clasificando a cada paciente en Grupo A, B1, B2 o C para su manejo o referencia oportuna.",
          "3. Encuesta entomológica rápida para determinar el Índice Larvario de Vivienda (número de viviendas positivas a larvas o pupas de Aedes aegypti / número de viviendas inspeccionadas x 100). En este caserío se inspeccionaron 80 viviendas, encontrando 16 con criaderos positivos (Índice Larvario = 20%, nivel de ALTO RIESGO / EMERGENCIA por superar el 10%).",
          "4. Control vectorial integrado inmediato: abatización masiva de pilas y barriles de almacenamiento de agua con larvicida granulado (Piriproxifeno o Temefos); campaña comunitaria de eliminación de criaderos inservibles (\"chatarrización\" y recolección de llantas, botellas y plásticos); y solicitud de nebulización térmica espacial con insecticida adulticida (malatión o deltametrina) a la Región de Salud.",
          "5. Educación sanitaria comunitaria participativa: capacitar a los líderes comunales y comités de salud sobre la técnica del lavado y cepillado semanal de pilas con la \"untadita\" (mezcla de detergente y lejía clorada para destruir los huevos de mosquito adheridos a las paredes de las pilas).",
          "6. Establecimiento de una sala de situación epidemiológica diaria en la UCSF con curva epidémica y mapa de georreferenciación de casos hasta que transcurran dos períodos máximos de incubación sin nuevos casos (cierre oficial del brote)."
        ],
        "therapeuticPlan": [
          "1. Notificación inmediata de alerta de brote en la plataforma VIGEPES del MINSAL y conformación inmediata del Equipo de Respuesta Rápida (ERR) local con el promotor de salud, inspector de saneamiento ambiental y enfermera comunitaria.",
          "2. Búsqueda activa comunitaria casa a casa de pacientes febriles sospechosos en un radio de 200 metros alrededor de los casos índice, clasificando a cada paciente en Grupo A, B1, B2 o C para su manejo o referencia oportuna.",
          "3. Encuesta entomológica rápida para determinar el Índice Larvario de Vivienda (número de viviendas positivas a larvas o pupas de Aedes aegypti / número de viviendas inspeccionadas x 100). En este caserío se inspeccionaron 80 viviendas, encontrando 16 con criaderos positivos (Índice Larvario = 20%, nivel de ALTO RIESGO / EMERGENCIA por superar el 10%).",
          "4. Control vectorial integrado inmediato: abatización masiva de pilas y barriles de almacenamiento de agua con larvicida granulado (Piriproxifeno o Temefos); campaña comunitaria de eliminación de criaderos inservibles (\"chatarrización\" y recolección de llantas, botellas y plásticos); y solicitud de nebulización térmica espacial con insecticida adulticida (malatión o deltametrina) a la Región de Salud.",
          "5. Educación sanitaria comunitaria participativa: capacitar a los líderes comunales y comités de salud sobre la técnica del lavado y cepillado semanal de pilas con la \"untadita\" (mezcla de detergente y lejía clorada para destruir los huevos de mosquito adheridos a las paredes de las pilas).",
          "6. Establecimiento de una sala de situación epidemiológica diaria en la UCSF con curva epidémica y mapa de georreferenciación de casos hasta que transcurran dos períodos máximos de incubación sin nuevos casos (cierre oficial del brote)."
        ],
        "pedagogicalRationale": "En atención primaria, el dengue no se combate esperando a los pacientes sentados en el consultorio: se combate en el territorio buscando criaderos y midiendo el índice larvario aédico con la comunidad. Si el índice larvario supera el 10%, la transmisión comunitaria de dengue se vuelve explosiva; la medida más barata y efectiva es destruir los criaderos físicos de agua estancada.",
        "clinicalPearls": [
          "En atención primaria, el dengue no se combate esperando a los pacientes sentados en el consultorio: se combate en el territorio buscando criaderos y midiendo el índice larvario aédico con la comunidad.",
          "Si el índice larvario supera el 10%, la transmisión comunitaria de dengue se vuelve explosiva; la medida más barata y efectiva es destruir los criaderos físicos de agua estancada."
        ],
        "officialProtocolRef": "Norma Técnica de Vigilancia Epidemiológica y Notificación de Eventos Sanitarios (VIGEPES), MINSAL El Salvador / Manual de Entomología y Control Vectorial de Arbovirosis OPS/OMS."
      }
    ]
  }
];

export const RESIDENTADO_QUESTIONS: ResidentadoQuestion[] = [
  {
    "id": "enar-mi-001",
    "specialty": "medicina_interna",
    "topic": "Cardiología / Infarto Agudo de Miocardio con Elevación del ST (IAMCEST)",
    "clinicalVignette": "Hombre de 58 años con antecedentes de diabetes mellitus tipo 2 e hipertensión arterial consulta a la Unidad de Emergencia con dolor retroesternal opresivo de 90 minutos de evolución, irradiado a mandíbula y brazo izquierdo, acompañado de diaforesis profusa y náuseas. PA: 85/55 mmHg, FC: 110 lpm. El electrocardiograma de 12 derivaciones muestra elevación del segmento ST de 3 mm en derivaciones II, III y aVF, con ondas Q incipientes. ¿Cuál es la conducta terapéutica inicial y de reperfusión más adecuada según la Guía Clínica de Síndrome Coronario Agudo?",
    "options": [
      {
        "key": "A",
        "text": "Administrar nitroglicerina sublingual inmediata, betabloqueadores orales y trasladar a sala de medicina."
      },
      {
        "key": "B",
        "text": "Reanimación cautelosa con solución salina normal, doble antiagregación plaquetaria (AAS + Clopidogrel) y activar protocolo de angioplastia coronaria primaria o fibrinolisis si el tiempo puerta-balón supera los 120 min."
      },
      {
        "key": "C",
        "text": "Iniciar diuréticos de asa (furosemida 40 mg IV) para descongestionar el ventrículo izquierdo y anticoagular con heparina no fraccionada en monoterapia."
      },
      {
        "key": "D",
        "text": "Solicitar seriación de enzimas cardíacas (troponina I) a las 0, 3 y 6 horas antes de definir cualquier estrategia de reperfusión."
      }
    ],
    "correctKey": "B",
    "explanation": "El paciente presenta un IAMCEST de cara inferior (II, III, aVF) complicado con hipotensión y probable compromiso de ventrículo derecho. La nitroglicerina y los betabloqueadores están absolutamente contraindicados en sospecha de infarto de ventrículo derecho o hipotensión arterial porque reducen la precarga y precipitan choque cardiogénico. La conducta prioritaria es la restitución volumétrica con cristaloides, doble antiagregación plaquetaria inmediata y terapia de reperfusión urgente (Angioplastia Primaria <90-120 min o fibrinolisis con tenecteplasa/alteplasa <30 min si no se dispone de hemodinamia).",
    "keyTakeaway": "En infartos inferiores con elevación de ST en II, III y aVF, siempre descartar infarto de VD (solicitar V3R-V4R) y EVITAR nitratos o diuréticos que colapsen la precarga.",
    "distractorRationale": {
      "A": "Los nitratos reducen la precarga y causan colapso hemodinámico letal en infarto de VD e hipotensión sistémica.",
      "C": "La furosemida agrava la hipotensión y la hipovolemia relativa del ventrículo derecho.",
      "D": "En presencia de elevación del ST inequívoca, NO se debe demorar la reperfusión esperando el resultado de biomarcadores enzimáticos."
    },
    "officialReference": "Guías de Práctica Clínica de Síndrome Coronario Agudo, MINSAL El Salvador / Harrison: Principios de Medicina Interna, 21.ª Ed."
  },
  {
    "id": "enar-mi-002",
    "specialty": "medicina_interna",
    "topic": "Infectología / Dengue con Signos de Alarma",
    "clinicalVignette": "Mujer de 24 años procedente del municipio de Soyapango consulta en el 4.° día de enfermedad febril. Refiere que la fiebre ha remitido en las últimas 12 horas, pero presenta dolor abdominal continuo e intenso a la palpación en epigastrio e hipocondrio derecho, vómitos en 4 ocasiones y somnolencia. Examen físico: frialdad distal, llenado capilar 3 segundos, PA: 90/60 mmHg, pulso: 104 lpm. Hemograma: Leucocitos 3,200/mm³, plaquetas: 48,000/mm³, hematocrito: 48% (previo hace 2 días: 36%). Según la Guía Técnica del MINSAL para el Manejo del Dengue, ¿cuál es la clasificación y manejo prioritario?",
    "options": [
      {
        "key": "A",
        "text": "Dengue sin signos de alarma (Grupo A): Manejo ambulatorio con hidratación oral y paracetamol cada 6 horas."
      },
      {
        "key": "B",
        "text": "Dengue con signos de alarma (Grupo B2): Hospitalización inmediata y expansión con cristaloides isotónicos (Lactato Ringer o SSN) a razón de 10 mL/kg en la primera hora."
      },
      {
        "key": "C",
        "text": "Dengue grave con choque establecido: Transfusión profiláctica inmediata de concentrados plaquetarios para evitar hemorragia."
      },
      {
        "key": "D",
        "text": "Fase de convalecencia del dengue: Suspender líquidos endovenosos para prevenir edema agudo de pulmón."
      }
    ],
    "correctKey": "B",
    "explanation": "La paciente ingresa en la fase crítica del dengue (al descender la fiebre), evidenciando signos de alarma cardinales: dolor abdominal intenso y continuo, vómitos persistentes, somnolencia, hemoconcentración marcada (aumento del hematocrito >20%) y trombocitopenia severa. Corresponde al Grupo B2 del MINSAL. El pilar fundamental de tratamiento es la resucitación hidroelectrolítica intravenosa inmediata con cristaloides isotónicos (10 mL/kg en 1 h), evaluando la respuesta clínica y el descenso del hematocrito.",
    "keyTakeaway": "La fase crítica del dengue ocurre en el momento de la defervescencia (días 3 a 7); la fuga plasmática es el mecanismo patogénico central que requiere cristaloides intravenosos oportunos.",
    "distractorRationale": {
      "A": "El dolor abdominal continuo y el aumento del hematocrito son signos de alarma que contraindican el manejo ambulatorio.",
      "C": "La transfusión profiláctica de plaquetas NO está indicada en dengue salvo hemorragia masiva incontrolable o trombocitopenia extrema <10,000 con sangrado activo.",
      "D": "La paciente está en fase crítica de fuga capilar, no en fase de recuperación."
    },
    "officialReference": "Lineamientos Técnicos para la Prevención y Control del Dengue, MINSAL El Salvador / OPS 2024."
  },
  {
    "id": "enar-mi-003",
    "specialty": "medicina_interna",
    "topic": "Endocrinología / Cetoacidosis Diabética (CAD)",
    "clinicalVignette": "Joven de 19 años con debut de diabetes mellitus tipo 1 es llevado al servicio de urgencias por respiración rápida y profunda (Kussmaul), aliento cetónico y deshidratación severa. Laboratorios: Glucemia: 460 mg/dL, pH arterial: 7.15, HCO₃⁻: 11 mEq/L, Sodio: 135 mEq/L, Potasio: 3.2 mEq/L, Cetonas en orina: ++++. ¿Cuál es el primer paso terapéutico mandatorio antes de iniciar la infusión continua de insulina regular?",
    "options": [
      {
        "key": "A",
        "text": "Administrar bolo IV de insulina regular a 0.1 UI/kg inmediatamente para bloquear la lipólisis hepática."
      },
      {
        "key": "B",
        "text": "Iniciar bicarbonato de sodio en infusión IV lenta debido a que el pH es inferior a 7.20."
      },
      {
        "key": "C",
        "text": "Hidratación vigorosa con solución salina normal al 0.9% y reposición de potasio intravenoso (20-30 mEq/h) hasta elevar el potasio sérico por encima de 3.3 mEq/L antes de administrar insulina."
      },
      {
        "key": "D",
        "text": "Iniciar infusión de dextrosa al 5% para prevenir la hipoglucemia osmótica."
      }
    ],
    "correctKey": "C",
    "explanation": "Si el potasio sérico se encuentra por debajo de 3.3 mEq/L en cetoacidosis diabética, la insulina está CONTRAINDICADA temporalmente porque introduce potasio al espacio intracelular, provocando hipopotasemia severa letal, arritmias ventriculares y paro cardíaco. Se debe administrar primero solución salina y suplementación de potasio (20-30 mEq/h) hasta que el nivel supere 3.3 mEq/L, momento en el cual se inicia la infusión de insulina.",
    "keyTakeaway": "Regla de oro en CAD: NUNCA administrar insulina si el K⁺ sérico es < 3.3 mEq/L; primero reponer potasio para evitar paro cardíaco por hipopotasemia aguda.",
    "distractorRationale": {
      "A": "Administrar insulina con potasio de 3.2 mEq/L precipita hipopotasemia crítica y arritmias fatales.",
      "B": "El bicarbonato solo se considera en acidosis extrema refractaria con pH < 6.9.",
      "D": "La dextrosa al 5% se añade posteriormente cuando la glucemia desciende a 200-250 mg/dL para evitar hipoglucemia mientras se resuelve la cetoacidosis."
    },
    "officialReference": "Norma Técnica para la Atención Integral de la Diabetes Mellitus, MINSAL / Guías ADA 2025."
  },
  {
    "id": "enar-cg-001",
    "specialty": "cirugia_general",
    "topic": "Abdomen Agudo Quirúrgico / Apendicitis Aguda",
    "clinicalVignette": "Hombre de 22 años consulta por dolor abdominal de 18 horas de evolución que inició en región periumbilical y posteriormente migró hacia fosa ilíaca derecha. Presenta náuseas, anorexia y febrícula de 37.8 °C. Al examen físico: dolor a la descompresión brusca en punto de McBurney (Blumberg positivo), dolor en FID al palpar FII (Rovsing positivo) y dolor al extender la cadera derecha (signo del psoas positivo). Leucocitosis de 14,500/mm³ con 82% de neutrófilos. ¿Cuál es la conducta terapéutica indicada?",
    "options": [
      {
        "key": "A",
        "text": "Realizar tomografía axial computarizada de abdomen contrastada y diferir cirugía hasta confirmar fecalito obstructivo."
      },
      {
        "key": "B",
        "text": "Programación para apendicectomía (abierta o laparoscópica) previa administración de profilaxis antibiótica perioperatoria en la hora previa a la incisión."
      },
      {
        "key": "C",
        "text": "Tratamiento conservador exclusivo con analgésicos opioides y antibióticos orales ambulatorios."
      },
      {
        "key": "D",
        "text": "Realizar colonoscopia urgente para descartar enfermedad inflamatoria intestinal."
      }
    ],
    "correctKey": "B",
    "explanation": "El paciente presenta un cuadro clínico clásico de apendicitis aguda (secuencia de Murphy: dolor periumbilical que migra a FID + anorexia + náuseas) con signos de irritación peritoneal evidentes y escala de Alvarado de 9 puntos (alta probabilidad). En varones jóvenes con presentación típica, el diagnóstico es fundamentalmente clínico y la indicación es la apendicectomía precoz con profilaxis antibiótica contra gramnegativos y anaerobios (cefalosporina de 2.ª gen o ceftriaxona + metronidazol) administrada 30-60 minutos antes de la incisión quirúrgica.",
    "keyTakeaway": "En apendicitis con clínica inequívoca (Alvarado ≥7 en varones jóvenes), no demorar la apendicectomía con estudios de imagen innecesarios para evitar la perforación.",
    "distractorRationale": {
      "A": "La TAC es útil en dudas diagnósticas, mujeres en edad fértil o ancianos, pero no se debe retrasar la cirugía en un cuadro clínico evidente de 18 horas.",
      "C": "El manejo conservador no es el estándar en apendicitis aguda no complicada en el adulto joven sano.",
      "D": "La colonoscopia está formalmente contraindicada ante sospecha de abdomen agudo por alto riesgo de perforación colónica."
    },
    "officialReference": "Schwartz: Principios de Cirugía, 11.ª Ed. / Sabiston Tratado de Cirugía, 21.ª Ed."
  },
  {
    "id": "enar-cg-002",
    "specialty": "cirugia_general",
    "topic": "Trauma / Neumotórax a Tensión (ATLS)",
    "clinicalVignette": "Varón de 30 años víctima de accidente de tránsito en carretera a Comalapa es trasladado a la sala de trauma. Se encuentra agitado, cianótico y taquipneico (FR: 34 rpm). Examen físico: ingurgitación yugular marcada, desviación traqueal hacia la izquierda, hemitórax derecho hiperinsuflado con timpanismo a la percusión y abolición total de ruidos respiratorios. PA: 75/40 mmHg, pulso débil: 130 lpm. ¿Cuál es la intervención inmediata que salva la vida del paciente según los protocolos ATLS?",
    "options": [
      {
        "key": "A",
        "text": "Solicitar radiografía portátil de tórax en posición anteroposterior urgente para confirmar el colapso pulmonar."
      },
      {
        "key": "B",
        "text": "Intubación orotraqueal inmediata con ventilación mecánica a presión positiva alta."
      },
      {
        "key": "C",
        "text": "Descompresión con aguja gruesa (catéter 14-16G) en el 5.° espacio intercostal línea medioaxilar o 2.° espacio intercostal línea medioclavicular derecha, seguida de toracostomía con tubo pleural."
      },
      {
        "key": "D",
        "text": "Pericardiocentesis subxifoidea de urgencia por sospecha de taponamiento cardíaco."
      }
    ],
    "correctKey": "C",
    "explanation": "El neumotórax a tensión es un diagnóstico 100% clínico; NUNCA debe esperarse una radiografía de tórax. La tríada de dificultad respiratoria severa, timpanismo unilateral con ausencia de murmullo vesicular, ingurgitación yugular e hipotensión por colapso del retorno venoso (desviación del mediastino) exige descompresión con aguja inmediata, convirtiendo el neumotórax a tensión en uno simple, seguido de tubo de toracostomía conectado a sello de agua.",
    "keyTakeaway": "El neumotórax a tensión se diagnostica clínicamente; la ventilación a presión positiva empeora el cuadro y la radiografía está contraindicada porque retrasa la descompresión.",
    "distractorRationale": {
      "A": "Esperar una radiografía de tórax causa la muerte del paciente por paro cardíaco en actividad eléctrica sin pulso.",
      "B": "La ventilación con presión positiva antes de descomprimir el tórax aumenta la tensión intratorácica y colapsa el retorno venoso de forma fulminante.",
      "D": "El timpanismo unilateral y la desviación traqueal diferencian al neumotórax a tensión del taponamiento cardíaco (que cursa con ruidos cardíacos apagados y campos pulmonares limpios)."
    },
    "officialReference": "American College of Surgeons, ATLS (Advanced Trauma Life Support), 10.ª Edición."
  },
  {
    "id": "enar-ped-001",
    "specialty": "pediatria",
    "topic": "Enfermedad Diarreica Aguda / Planes de Hidratación MINSAL",
    "clinicalVignette": "Lactante de 14 meses de edad es llevado a la Unidad de Salud por presentar 7 deposiciones líquidas y 3 vómitos en las últimas 24 horas. Al examen físico: ojos hundidos, llanto con escasas lágrimas, mucosa oral seca, bebe agua con avidez y el pliegue cutáneo en abdomen regresa lentamente (menos de 2 segundos). Fontanela anterior ligeramente deprimida, pulsos palpables, llenado capilar 2 segundos. ¿Cuál es el diagnóstico del estado de hidratación y el plan de tratamiento normado por el MINSAL?",
    "options": [
      {
        "key": "A",
        "text": "Diarrea sin deshidratación: Plan A en el hogar aumentando líquidos orales y continuando alimentación normal."
      },
      {
        "key": "B",
        "text": "Diarrea con algún grado de deshidratación (deshidratación moderada): Plan B con Sales de Rehidratación Oral (SRO) a 50-100 mL/kg en 4 horas bajo supervisión en la unidad de salud."
      },
      {
        "key": "C",
        "text": "Diarrea con deshidratación grave y choque: Plan C inmediato con solución Hartmann IV a 100 mL/kg en 3 horas."
      },
      {
        "key": "D",
        "text": "Gastroenteritis bacteriana invasiva: Iniciar loperamida y ciprofloxacino oral inmediato."
      }
    ],
    "correctKey": "B",
    "explanation": "El lactante presenta signos cardinales de \"Algún grado de deshidratación\" (según AIEPI/MINSAL): ojos hundidos, sed intensa (bebe con avidez), mucosa seca y signo del pliegue positivo lento (<2 seg). No presenta signos de deshidratación grave (letargo, inconsciencia o llenado capilar >3 seg). Corresponde al Plan B con SRO de baja osmolaridad a razón de 50 a 100 mL/kg en un período de 4 horas en la unidad de salud, administrado con taza o cuchara.",
    "keyTakeaway": "En Plan B: 50 a 100 mL/kg de SRO en 4 horas. Los antidiarreicos y antimotilidad (loperamida) están absolutamente contraindicados en pediatría.",
    "distractorRationale": {
      "A": "El paciente tiene signos clínicos claros de pérdida hídrica que requieren rehidratación supervisada en la unidad de salud, no solo prevención ambulatoria.",
      "C": "El Plan C se reserva para deshidratación grave con alteración del sensorio o colapso hemodinámico.",
      "D": "La loperamida está proscrita en menores por riesgo de íleo paralítico, megacolon tóxico y muerte."
    },
    "officialReference": "Norma Técnica para la Atención Integral de la Salud Infantil, MINSAL El Salvador / AIEPI."
  },
  {
    "id": "enar-ped-002",
    "specialty": "pediatria",
    "topic": "Infectología / Bronquiolitis Aguda",
    "clinicalVignette": "Lactante de 4 meses de edad sin antecedentes perinatales de importancia presenta rinorrea y tos seca de 3 días de evolución, agregándose hoy dificultad respiratoria y rechazo al alimento. Examen físico: afebril, FR: 62 rpm, tiraje subcostal e intercostal leve, saturación de oxígeno al aire ambiente: 93%. A la auscultación pulmonar se escuchan sibilancias espiratorias bilaterales y subcrepitantes diseminados. ¿Cuál es el agente etiológico más frecuente y el manejo recomendado según la evidencia actual?",
    "options": [
      {
        "key": "A",
        "text": "Streptococcus pneumoniae; iniciar amoxicilina a 90 mg/kg/día por 10 días."
      },
      {
        "key": "B",
        "text": "Virus Sincitial Respiratorio (VSR); manejo de soporte con aseo nasal con solución salina, hidratación adecuada y fraccionamiento de tomas de leche."
      },
      {
        "key": "C",
        "text": "Bordetella pertussis; nebulizaciones continuas con salbutamol y dexametasona intramuscular."
      },
      {
        "key": "D",
        "text": "Mycoplasma pneumoniae; indicar azitromicina y broncodilatadores orales."
      }
    ],
    "correctKey": "B",
    "explanation": "La bronquiolitis aguda es el primer episodio de sibilancias en un menor de 2 años precedido de pródromo catarral, siendo el Virus Sincitial Respiratorio (VSR) el causante en más del 70-80% de los casos. Las guías internacionales y del MINSAL son categóricas: los broncodilatadores inhalados, corticoides sistémicos y antibióticos NO están indicados de forma rutinaria. El tratamiento es de soporte: oxigenoterapia solo si SatO₂ <92%, aspiración suave de secreciones nasales y mantenimiento del estado hidroelectrolítico.",
    "keyTakeaway": "En bronquiolitis viral: la base del tratamiento es de soporte (aspiración nasal, hidratación y oxígeno si SatO₂ <92%); no usar corticoides ni antibióticos de rutina.",
    "distractorRationale": {
      "A": "La bronquiolitis es viral; el uso empírico de amoxicilina es un error frecuente que no modifica la evolución clínica.",
      "C": "Los corticoides sistémicos y el salbutamol no han demostrado beneficio consistente en la bronquiolitis típica del lactante.",
      "D": "El Mycoplasma es excepcional en lactantes menores de 6 meses y característico de escolares."
    },
    "officialReference": "Nelson: Tratado de Pediatría, 21.ª Ed. / Guías Clínicas de Neumología Pediátrica MINSAL."
  },
  {
    "id": "enar-go-001",
    "specialty": "ginecologia_obstetricia",
    "topic": "Obstetricia / Preeclampsia con Criterios de Severidad",
    "clinicalVignette": "Primigesta de 17 años con embarazo de 34 semanas por amenorrea confiable consulta al hospital de maternidad por cefalea frontal intensa, visión borrosa (fotopsias) y dolor en epigastrio tipo barra. Examen físico: PA: 165/110 mmHg tomada en dos ocasiones separadas por 15 minutos, edema en miembros inferiores +++, hiperreflexia patelar generalizada. Tira reactiva de orina: proteinuria +++. ¿Cuál es el tratamiento inmediato para la prevención de eclampsia (convulsiones) y el antihipertensivo de elección normado por el MINSAL?",
    "options": [
      {
        "key": "A",
        "text": "Sulfato de magnesio (esquema de Zuspan: 4 g IV en 20 min de carga + 1 g/h de mantenimiento) e hidralazina o labetalol intravenoso para control de crisis hipertensiva."
      },
      {
        "key": "B",
        "text": "Diazepam 10 mg IV lento en bolo y enalaprilato endovenoso."
      },
      {
        "key": "C",
        "text": "Fenitoína sódica a dosis de impregnación (18 mg/kg) y nitroprusiato de sodio en infusión continua."
      },
      {
        "key": "D",
        "text": "Furosemida 40 mg IV y cesárea urgente inmediata sin estabilización previa."
      }
    ],
    "correctKey": "A",
    "explanation": "La paciente presenta Preeclampsia con Criterios de Severidad (cifras tensionales ≥160/110 mmHg asociadas a síntomas de vasoespasmo cerebral y epigastralgia). El fármaco de elección para la profilaxis y tratamiento de las convulsiones eclámpticas es el Sulfato de Magnesio (esquema de Zuspan: dosis de carga 4 g IV en 15-20 minutos, seguida de 1 g/hora en infusión continua). Para el control de la crisis hipertensiva severa (PA ≥160/110), los fármacos de primera línea son el Labetalol IV, la Hidralazina IV o la Nifedipina oral de liberación rápida.",
    "keyTakeaway": "Sulfato de Magnesio es el anticonvulsivo de elección en preeclampsia/eclampsia; monitorizar reflejo rotuliano, FR (>16 rpm) y diuresis (>30 mL/h) para vigilar toxicidad (antídoto: Gluconato de Calcio).",
    "distractorRationale": {
      "B": "El diazepam es inferior al sulfato de magnesio y deprime al feto; los IECA (enalapril) están contraindicados en el embarazo por teratogenicidad renal.",
      "C": "La fenitoína es menos efectiva que el sulfato de magnesio para prevenir eclampsia.",
      "D": "La interrupción del embarazo sin estabilización hemodinámica y neuroprotección materna previa eleva significativamente la morbimortalidad."
    },
    "officialReference": "Lineamientos Técnicos para la Atención de las Emergencias Obstétricas (Código Rojo y Trastornos Hipertensivos), MINSAL El Salvador."
  },
  {
    "id": "enar-go-002",
    "specialty": "ginecologia_obstetricia",
    "topic": "Obstetricia / Hemorragia Posparto (Código Rojo)",
    "clinicalVignette": "Multípara de 31 años acaba de tener un parto vaginal de término de un recién nacido de 4,100 g. A los 10 minutos de la expulsión placentaria completa, presenta sangrado vaginal masivo rutilante que empapa apósitos rápidamente. Al examen físico: fondo uterino blando, supraumbilical, poco contraído. PA: 80/50 mmHg, FC: 120 lpm. Se activa el protocolo \"Código Rojo Obstétrico\". ¿Cuál es la etiología más probable y la primera medida farmacológica a administrar?",
    "options": [
      {
        "key": "A",
        "text": "Rotura uterina; trasladar de inmediato a laparotomía exploradora sin intentar masaje ni uterotónicos."
      },
      {
        "key": "B",
        "text": "Atonía uterina; realizar masaje uterino bimanual continuo y administrar Oxitocina (20 UI en 500 mL de cristaloides IV a goteo rápido)."
      },
      {
        "key": "C",
        "text": "Inversión uterina; traccionar el cordón umbilical con mayor fuerza para desprender restos endometriales."
      },
      {
        "key": "D",
        "text": "Laceración de cuello uterino; taponamiento vaginal exclusivo con gasas estériles sin uterotónicos."
      }
    ],
    "correctKey": "B",
    "explanation": "La causa más frecuente de hemorragia posparto primaria (responsable de más del 70-80% de los casos) es la Atonía Uterina, facilitada en este caso por la sobredistensión uterina secundaria a macrosomía fetal (4,100 g). El útero se palpa blando y sobre el ombligo. El manejo inmediato del Código Rojo incluye: masaje uterino bimanual continuo, oxigenoterapia, dos accesos venosos periféricos de grueso calibre (catéter 14 o 16G) con cristaloides tibios y la administración inmediata de uterotónicos de primera línea: Oxitocina 20-40 UI en infusión IV rápida, seguida si es necesario de metilergonovina o misoprostol 800 mcg rectal/sublingual.",
    "keyTakeaway": "Regla de las 4T de la HPP: Tono (70%), Trauma (20%), Tejido (10%), Trombina (1%). La atonía uterina es la número 1 y responde a masaje bimanual + oxitocina.",
    "distractorRationale": {
      "A": "La rotura uterina es rara en multíparas sin cesárea previa y cursa con pérdida de la presentación fetal y dolor lancinante agudo previo.",
      "C": "La tracción forzada del cordón umbilical es la causa iatrogénica de inversión uterina y está terminantemente proscrita.",
      "D": "El útero blando y no contraído diagnostica atonía uterina; el taponamiento vaginal aislado es inútil si la cavidad uterina continúa sangrando."
    },
    "officialReference": "Williams Obstetricia, 26.ª Ed. / Protocolo de Manejo de la Hemorragia Posparto (Código Rojo), MINSAL El Salvador."
  },
  {
    "id": "enar-sp-001",
    "specialty": "salud_publica",
    "topic": "Vacunación / Esquema Nacional del MINSAL",
    "clinicalVignette": "Madre lleva a su hijo de 2 meses de edad a la Unidad Comunitaria de Salud Familiar (UCSF) para su control de niño sano y esquema de vacunación correspondiente. El lactante se encuentra asintomático. Según el Esquema Oficial de Vacunación de El Salvador vigente, ¿qué vacunas debe recibir el paciente en esta consulta?",
    "options": [
      {
        "key": "A",
        "text": "BCG y Hepatitis B monodosis."
      },
      {
        "key": "B",
        "text": "Pentavalente (DPT-HB-Hib), Polio inactivada (IPV), Rotavirus y Neumococo conjugada."
      },
      {
        "key": "C",
        "text": "Triple Viral (SPR) y Vacuna contra la Varicela."
      },
      {
        "key": "D",
        "text": "DPT refuerzo y Toxoide Tetánico."
      }
    ],
    "correctKey": "B",
    "explanation": "Según el Esquema Nacional de Vacunación de la República de El Salvador emitido por el Ministerio de Salud, a los 2 meses de edad el lactante debe recibir su primera dosis de: 1) Vacuna Pentavalente (difteria, tos ferina, tétanos, hepatitis B e infecciones invasivas por Haemophilus influenzae tipo b), 2) Vacuna Antipoliomielítica Inactivada (IPV), 3) Vacuna contra Rotavirus (vía oral), y 4) Vacuna Neumocócica Conjugada (PCV13).",
    "keyTakeaway": "A los 2 y 4 meses en El Salvador: Pentavalente + Polio (IPV) + Rotavirus + Neumococo. La BCG y Hepatitis B se administran en el recién nacido (<24 horas).",
    "distractorRationale": {
      "A": "La BCG y Hepatitis B pediátrica corresponden a la dosis neonatal en las primeras 24 horas de vida.",
      "C": "La SPR (sarampión, paperas, rubéola) y varicela se administran a partir de los 12 meses de edad.",
      "D": "Los refuerzos de DPT corresponden a los 18 meses y a los 4 años."
    },
    "officialReference": "Lineamientos Técnicos para la Vacunación en El Salvador, Programa Nacional de Inmunizaciones (PNI), MINSAL."
  },
  {
    "id": "enar-sp-002",
    "specialty": "salud_publica",
    "topic": "Enfermedades Crónicas / Enfermedad Renal Crónica en El Salvador",
    "clinicalVignette": "En el marco de la epidemiología salvadoreña, la Enfermedad Renal Crónica no tradicional (ERCnT) o Nefropatía Mesoamericana afecta predominantemente a comunidades agrícolas masculinas en la zona costera y paracentral (ej. Bajo Lempa). Histopatológicamente, ¿cuál es el hallazgo distintivo de esta entidad frente a la nefropatía diabética clásica?",
    "options": [
      {
        "key": "A",
        "text": "Glomeruloesclerosis nodular de Kimmelstiel-Wilson con proteinuria en rango nefrótico masivo."
      },
      {
        "key": "B",
        "text": "Nefritis tubulointersticial crónica con fibrosis intersticial y atrofia tubular, con mínima o nula proteinuria en etapas iniciales."
      },
      {
        "key": "C",
        "text": "Glomerulonefritis membranoproliferativa con depósitos densos subendoteliales de C3."
      },
      {
        "key": "D",
        "text": "Necrosis cortical bilateral aguda con trombocitopenia."
      }
    ],
    "correctKey": "B",
    "explanation": "La Nefropatía Mesoamericana o ERC no tradicional es un problema de salud pública de primera magnitud en El Salvador. Afecta típicamente a agricultores varones jóvenes expuestos a estrés térmico severo, deshidratación recurrente y agroquímicos. A diferencia de la nefropatía diabética (que cursa con micro/macroalbuminuria y lesión glomerular), la ERCnT es una Nefritis Tubulointersticial Crónica caracterizada por daño tubular, fibrosis intersticial y daño glomerular secundario por isquemia, manifestándose con proteinuria escasa o ausente en fases tempranas.",
    "keyTakeaway": "Nefropatía Mesoamericana en El Salvador: Nefritis tubulointersticial crónica sin proteinuria significativa inicial, vinculada al trabajo agrícola costero y deshidratación crónica.",
    "distractorRationale": {
      "A": "La lesión de Kimmelstiel-Wilson es patognomónica de la nefropatía diabética de larga evolución.",
      "C": "La membranoproliferativa es una glomerulopatía mediada por complejos inmunes o complemento, no una enfermedad tubulointersticial ambiental.",
      "D": "La necrosis cortical aguda ocurre en catástrofes obstétricas o choque séptico refractario, no como patología crónica."
    },
    "officialReference": "Plan Nacional de Prevención y Control de la Enfermedad Renal Crónica, Instituto Nacional de Salud (INS) / MINSAL El Salvador."
  },
  {
    "id": "enar-mi-004",
    "specialty": "medicina_interna",
    "topic": "Endocrinología / Estado Hiperosmolar Hiperglucémico (EHH)",
    "clinicalVignette": "Hombre de 73 años con antecedente de diabetes mellitus tipo 2 y secuelas leves de evento vascular cerebral es llevado a la emergencia por letargo progresivo y deshidratación severa tras un cuadro de infección respiratoria de 5 días. Al examen físico: PA 90/60 mmHg, FC 115 lpm, sequedad mucocutánea extrema, signo del pliegue positivo y estupor sin respiración de Kussmaul. Laboratorios: Glucemia: 820 mg/dL, Sodio sérico: 140 mEq/L, Potasio: 4.6 mEq/L, Cloro: 102 mEq/L, Bicarbonato: 20 mEq/L, pH venoso: 7.34, Cetonas en orina: trazas (+), Creatinina: 2.2 mg/dL, BUN: 48 mg/dL. Osmolaridad sérica efectiva calculada: 326 mOsm/kg. ¿Cuál es el diagnóstico más certero y la piedra angular del tratamiento inicial?",
    "options": [
      {
        "key": "A",
        "text": "Cetoacidosis diabética grave; infundir bicarbonato de sodio en bolo e insulina intravenosa en altas dosis."
      },
      {
        "key": "B",
        "text": "Estado Hiperosmolar Hiperglucémico; reposición agresiva de volumen con solución salina isotónica al 0.9% en la primera hora, seguida de titulación según sodio corregido e insulina regular continua."
      },
      {
        "key": "C",
        "text": "Coma hipoglucémico por sulfonilureas; administrar dextrosa al 50% intravenosa en bolo inmediato."
      },
      {
        "key": "D",
        "text": "Insuficiencia suprarrenal aguda; bolo inmediato de hidrocortisona 100 mg IV sin necesidad de hidratación con cristaloides."
      }
    ],
    "correctKey": "B",
    "explanation": "El paciente presenta los criterios diagnósticos clásicos de Estado Hiperosmolar Hiperglucémico (EHH): glucemia marcadamente elevada (>600 mg/dL), osmolaridad plasmática efectiva >320 mOsm/kg (calculada como 2×Na + Glucosa/18), bicarbonato >18 mEq/L, pH >7.30 y alteración profunda del estado de conciencia. El déficit hídrico en el EHH es sustancialmente mayor que en la CAD (8 a 10 litros o 100-200 mL/kg). El pilar inicial es la fluidoterapia intravenosa con SSN al 0.9% a 1000-1500 mL en la primera hora para restaurar la perfusión periférica, evaluando luego el sodio corregido para continuar con SSN al 0.45% o 0.9%, asociando insulina regular IV a 0.1 UI/kg/h una vez asegurada la expansión.",
    "keyTakeaway": "En EHH, la reposición hídrica agresiva con solución salina es prioritaria debido al déficit de 8-10 litros; añadir dextrosa al 5% cuando la glucemia alcance 300 mg/dL.",
    "distractorRationale": {
      "A": "No cumple criterios de CAD: el pH es >7.30, el bicarbonato es normal y no hay cetosis significativa.",
      "C": "La glucemia es de 820 mg/dL, descartando de plano hipoglucemia.",
      "D": "El cuadro es una crisis hiperglucémica hiperosmolar típica; los corticoides aumentarían la hiperglucemia de forma nociva."
    },
    "officialReference": "Norma Técnica para la Atención Integral de la Diabetes Mellitus, MINSAL / Guías ADA Standards of Medical Care 2024."
  },
  {
    "id": "enar-mi-005",
    "specialty": "medicina_interna",
    "topic": "Neurología / Accidente Cerebrovascular Isquémico Agudo (Código Ictus)",
    "clinicalVignette": "Mujer de 64 años con antecedente de fibrilación auricular no anticoagulada presenta hemiparesia braquiocrural derecha súbita, desviación de comisura labial hacia la izquierda y afasia motora mientras desayunaba. Es llevada a la Unidad de Emergencia 90 minutos después del inicio de los síntomas. Al examen físico: escala NIHSS de 14 puntos, PA: 170/95 mmHg, FC: 110 lpm arrítmica, glucemia capilar: 118 mg/dL. La tomografía axial computarizada de cráneo simple no muestra hemorragia intracraneal ni lesiones isquémicas extensas (ASPECTS 10). ¿Cuál es la conducta médica de elección con mayor impacto en el pronóstico funcional?",
    "options": [
      {
        "key": "A",
        "text": "Iniciar trombólisis intravenosa con alteplasa (rtPA) a 0.9 mg/kg tras descartar contraindicaciones, completando la infusión en 60 minutos."
      },
      {
        "key": "B",
        "text": "Administrar heparina sódica no fraccionada en bolo intravenoso inmediato para revertir la fibrilación auricular."
      },
      {
        "key": "C",
        "text": "Descenso agresivo de la presión arterial con nitroprusiato de sodio hasta una PA sistólica <120 mmHg antes de cualquier procedimiento."
      },
      {
        "key": "D",
        "text": "Manejo expectante y diferir la antiagregación plaquetaria con aspirina durante 72 horas para esperar evolución."
      }
    ],
    "correctKey": "A",
    "explanation": "La paciente se encuentra en la ventana terapéutica óptima (<4.5 horas desde el inicio de los síntomas) de un ACV isquémico agudo con déficit neurológico medible (NIHSS 14) y TAC cerebral simple sin hemorragia. Cumple todos los criterios para trombólisis intravenosa con alteplasa (rtPA a 0.9 mg/kg, 10% en bolo inicial y el resto en infusión continua durante 1 hora). La PA actual (170/95 mmHg) es permisible para trombólisis (el límite superior seguro es <185/110 mmHg). La anticoagulación precoz con heparina está contraindicada por elevado riesgo de transformación hemorrágica.",
    "keyTakeaway": "En ACV isquémico agudo: ventana de trombólisis IV con rtPA <4.5 horas si la TAC descarta hemorragia y la PA se mantiene <185/110 mmHg.",
    "distractorRationale": {
      "B": "La anticoagulación con heparina en la fase hiperaguda del ictus no mejora el pronóstico y aumenta marcadamente la transformación hemorrágica fatal.",
      "C": "El descenso brusco de la presión arterial en el ictus agudo reduce la perfusión en la zona de penumbra isquémica empeorando el infarto cerebral.",
      "D": "La conducta expectante desperdicia la ventana de oportunidad terapéutica para salvar tejido cerebral en penumbra."
    },
    "officialReference": "Lineamientos Técnicos para la Atención del Ataque Cerebrovascular Isquémico, MINSAL / Guías AHA/ASA 2024."
  },
  {
    "id": "enar-mi-006",
    "specialty": "medicina_interna",
    "topic": "Cuidados Críticos / Choque Séptico y Resucitación Inicial",
    "clinicalVignette": "Varón de 68 años con antecedente de hiperplasia prostática benigna consulta por fiebre de 39 °C, escalofríos, disuria intensa y dolor en fosa lumbar derecha de 48 horas de evolución. Al examen físico: estuporoso, piel moteada con frialdad distal, PA: 75/45 mmHg, FC: 125 lpm, FR: 28 rpm, SatO2: 91% aire ambiente. Laboratorios: Leucocitos: 22,000/mm³ con 18% en banda, Lactato sérico: 4.2 mmol/L. Se administra un bolo rápido de solución salina normal a 30 mL/kg en las primeras 2 horas, pero la presión arterial persiste en 80/48 mmHg (PAM 58 mmHg). ¿Cuál es la siguiente intervención farmacológica mandatoria según la Campaña Sobreviviendo a la Sepsis y protocolos MINSAL?",
    "options": [
      {
        "key": "A",
        "text": "Iniciar infusión continua de Norepinefrina titulada para alcanzar una Presión Arterial Media (PAM) ≥65 mmHg."
      },
      {
        "key": "B",
        "text": "Administrar bolos repetidos de Dopamina a dosis bajas (\"dosis renal\") para mejorar la perfusión glomerular."
      },
      {
        "key": "C",
        "text": "Infusión inmediata de bicarbonato de sodio isotónico al 8.4% para neutralizar la acidosis láctica."
      },
      {
        "key": "D",
        "text": "Suspender todos los líquidos intravenosos e iniciar furosemida 80 mg IV por sospecha de falla cardíaca."
      }
    ],
    "correctKey": "A",
    "explanation": "El paciente presenta choque séptico de origen urinario (urosepsis refractaria a volumen: hipotensión persistente que requiere vasopresores para mantener PAM ≥65 mmHg y lactato sérico >2 mmol/L tras resucitación con fluidos a 30 mL/kg). El vasopresor de primera línea incuestionable es la Norepinefrina, debido a su potente efecto alfa-1 vasoconstrictor con menor taquicardia arrítmica en comparación con la dopamina.",
    "keyTakeaway": "Vasopresor de primera elección en choque séptico: Norepinefrina (meta PAM ≥65 mmHg). La dopamina se asocia a mayor mortalidad por taquiarritmias.",
    "distractorRationale": {
      "B": "La dopamina no es de primera línea y la \"dosis renal\" es un concepto obsoleto desmentido por ensayos clínicos.",
      "C": "El bicarbonato no mejora la hemodinámica en acidosis láctica inducida por sepsis y empeora la hipocalcemia y la acidosis intracelular.",
      "D": "El paciente está en choque distributivo séptico por hipovolemia relativa; los diuréticos agravarían la hipoperfusión tisular."
    },
    "officialReference": "Surviving Sepsis Campaign Guidelines 2021 / Protocolos de Cuidados Críticos del Hospital Nacional Rosales, MINSAL."
  },
  {
    "id": "enar-mi-007",
    "specialty": "medicina_interna",
    "topic": "Cardiología / Insuficiencia Cardíaca con Fracción de Eyección Reducida (ICFEr)",
    "clinicalVignette": "Hombre de 59 años con antecedente de infarto anterior hace 2 años consulta a cardiología por disnea de medianos a pequeños esfuerzos (clase funcional NYHA III), ortopnea de dos almohadas y edema maleolar vespertino. Ecocardiograma transtorácico: fracción de eyección del ventrículo izquierdo (FEVI) del 32%, con aquinesia anteroapical. PA: 125/75 mmHg, FC: 72 lpm, Creatinina: 1.0 mg/dL, Potasio: 4.4 mEq/L. Actualmente solo recibe aspirina y atorvastatina. ¿Cuál combinación de terapias médicas conforma los \"cuatro pilares\" con evidencia de reducción de mortalidad que deben instaurarse en este paciente?",
    "options": [
      {
        "key": "A",
        "text": "Inhibidor del cotransportador SGLT2 (Dapagliflozina/Empagliflozina) + ARNI (Sacubitril/Valsartán) o IECA + Betabloqueador cardioselectivo (Bisoprolol/Carvedilol) + Antagonista del receptor mineralocorticoide (Espironolactona)."
      },
      {
        "key": "B",
        "text": "Digoxina oral + Furosemida en monoterapia + Verapamilo + Nitratos sublinguales a demanda."
      },
      {
        "key": "C",
        "text": "Amlodipino + Diltiazem + Hidroclorotiazida + Warfarina sódica."
      },
      {
        "key": "D",
        "text": "Ácido acetilsalicílico a dosis altas (650 mg c/8h) + Prednisona oral + Suplementos de potasio."
      }
    ],
    "correctKey": "A",
    "explanation": "El tratamiento moderno de la Insuficiencia Cardíaca con Fracción de Eyección Reducida (FEVI ≤40%) se basa en los \"Cuatro Pilares Fundamentales\" que han demostrado disminuir la mortalidad global y las hospitalizaciones: 1) ARNI (Sacubitril/Valsartán) o IECA/ARA-II, 2) Betabloqueador con evidencia probada (Carvedilol, Bisoprolol, Succinato de Metoprolol), 3) Antagonista del receptor de mineralocorticoides (Espironolactona o Eplerenona), y 4) Inhibidor de SGLT2 (Dapagliflozina o Empagliflozina).",
    "keyTakeaway": "Los 4 pilares de la ICFEr que salvan vidas: ARNI/IECA + Betabloqueador + Antagonista Aldosterona + iSGLT2.",
    "distractorRationale": {
      "B": "La digoxina reduce síntomas pero no disminuye la mortalidad; el verapamilo está contraindicado en ICFEr por su efecto inotrópico negativo.",
      "C": "Los calcioantagonistas no dihidropiridínicos (diltiazem) están desaconsejados por deprimir la contractilidad en falla cardíaca con FEVI reducida.",
      "D": "Los AINEs y corticoides causan retención hidrosalina y descompensación aguda severa."
    },
    "officialReference": "Guías Clínicas de Insuficiencia Cardíaca, MINSAL / Guías ACC/AHA/HFSA 2023."
  },
  {
    "id": "enar-mi-008",
    "specialty": "medicina_interna",
    "topic": "Neumología e Infectología / Tuberculosis Pulmonar Sensible (Programa PNT)",
    "clinicalVignette": "Joven de 28 años, comerciante de mercado municipal de San Salvador, consulta por tos productiva con expectoración mucopurulenta y estrías sanguinolentas de 4 semanas de evolución, diaforesis nocturna y pérdida involuntaria de 6 kg de peso. Baciloscopía de esputo (tinción de Ziehl-Neelsen): positiva (+++), con confirmación molecular por GeneXpert MTB/RIF que detecta complejo Mycobacterium tuberculosis sensible a rifampicina. Prueba de VIH: no reactiva. Según la Norma Técnica del Programa Nacional de Tuberculosis de El Salvador, ¿cuál es el esquema terapéutico estándar normado?",
    "options": [
      {
        "key": "A",
        "text": "Fase intensiva de 2 meses con Isoniazida, Rifampicina, Pirazinamida y Etambutol (2HRZE), seguida de fase de continuación de 4 meses con Isoniazida y Rifampicina (4HR)."
      },
      {
        "key": "B",
        "text": "Monoterapia con Isoniazida durante 9 meses asociada a Piridoxina (vitamina B6)."
      },
      {
        "key": "C",
        "text": "Esquema de segunda línea con Levofloxacino, Bedaquilina y Linezolid por 18 meses."
      },
      {
        "key": "D",
        "text": "Tratamiento con Claritromicina más Amoxicilina/Ácido Clavulánico durante 21 días."
      }
    ],
    "correctKey": "A",
    "explanation": "El tratamiento normado por el MINSAL / OMS para casos nuevos de tuberculosis pulmonar sensible es el esquema estrictamente supervisado (TAES/DOTS): Fase intensiva diaria de 2 meses con 4 fármacos bactericidas: Isoniazida (H), Rifampicina (R), Pirazinamida (Z) y Etambutol (E) [2HRZE en 50 dosis], seguida de Fase de continuación de 4 meses con 2 fármacos: Isoniazida y Rifampicina [4HR en 100 dosis], completando 6 meses de tratamiento.",
    "keyTakeaway": "Esquema estándar para TB pulmonar drogosensible: 2HRZE / 4HR (2 meses de 4 fármacos y 4 meses de 2 fármacos bajo supervisión estricta TAES).",
    "distractorRationale": {
      "B": "La monoterapia con isoniazida se reserva para infección tuberculosa latente, no para enfermedad pulmonar activa.",
      "C": "Los fármacos de segunda línea (bedaquilina, linezolid) están reservados para tuberculosis multirresistente (TB-MDR).",
      "D": "Los macrólidos y aminopenicilinas carecen de actividad contra Mycobacterium tuberculosis."
    },
    "officialReference": "Norma Técnica para la Prevención y Control de la Tuberculosis, Programa Nacional de Tuberculosis (PNT), MINSAL El Salvador."
  },
  {
    "id": "enar-mi-009",
    "specialty": "medicina_interna",
    "topic": "Neumología / Neumonía Adquirida en la Comunidad (NAC) y Escala CURB-65",
    "clinicalVignette": "Hombre de 69 años es llevado a la emergencia por fiebre de 38.8 °C, escalofríos, tos con expectoración herrumbrosa y disnea progresiva de 3 días. Al examen físico: desorientado en tiempo y espacio (Confusión presente), PA: 85/55 mmHg, FC: 108 lpm, FR: 32 rpm. Auscultación: soplo tubario y crepitantes en lóbulo inferior derecho. Laboratorios: Nitrógeno ureico en sangre (BUN): 28 mg/dL (Urea >7 mmol/L), Leucocitos: 16,800/mm³. Al estratificar mediante la escala pronóstica CURB-65, ¿cuál es su puntaje y la recomendación de manejo?",
    "options": [
      {
        "key": "A",
        "text": "Puntaje de 0 puntos; manejo ambulatorio con amoxicilina oral."
      },
      {
        "key": "B",
        "text": "Puntaje de 4 puntos; hospitalización inmediata (considerando ingreso a UCI/cuidados intermedios) con ceftriaxona parenteral más macrólido (azitromicina/claritromicina)."
      },
      {
        "key": "C",
        "text": "Puntaje de 1 punto; envío a domicilio con control en 48 horas en la UCSF."
      },
      {
        "key": "D",
        "text": "Puntaje de 5 puntos; requiere intubación orotraqueal profiláctica inmediata aunque mantenga SaO2 >92%."
      }
    ],
    "correctKey": "B",
    "explanation": "La escala pronóstica CURB-65 asigna 1 punto a cada una de las siguientes variables: C (Confusión mental = 1 punto), U (Urea >7 mmol/L o BUN >19-20 mg/dL = 1 punto), R (Respiraciones ≥30 rpm = 1 punto), B (Blood pressure: PAS <90 o PAD ≤60 mmHg = 1 punto), y 65 (Edad ≥65 años = 1 punto). El paciente cumple: Confusión (1), BUN 28 (1), FR 32 (1), PA 85/55 (1) y Edad 69 años (1), sumando un puntaje de 4 puntos (o 5 si se cuenta estricto), lo cual traduce neumonía grave con alta tasa de mortalidad (15-30%) y exige hospitalización inmediata en UCI o unidad de cuidados intermedios, con cobertura antibiótica parenteral de amplio espectro para cubrir Streptococcus pneumoniae y gérmenes atípicos.",
    "keyTakeaway": "CURB-65 evalúa Confusión, Urea, Respiración, Blood pressure y Edad ≥65. Puntaje ≥2 requiere hospitalización; ≥3 amerita UCI/unidad de cuidados intermedios.",
    "distractorRationale": {
      "A": "El paciente tiene hipotensión, taquipnea, desorientación y uremia; el manejo ambulatorio tiene un riesgo letal.",
      "C": "El puntaje es 4 o 5 puntos, no 1 punto.",
      "D": "La intubación orotraqueal no se realiza de forma profiláctica por edad si la oxigenación y la mecánica ventilatoria se sostienen con soporte."
    },
    "officialReference": "Guías de Práctica Clínica para el Diagnóstico y Tratamiento de la Neumonía Adquirida en la Comunidad, MINSAL / Guías ATS/IDSA."
  },
  {
    "id": "enar-mi-010",
    "specialty": "medicina_interna",
    "topic": "Nefrología / Síndrome Nefrótico del Adulto",
    "clinicalVignette": "Mujer de 42 años sin diabetes previa consulta por edema generalizado de 3 semanas de evolución, que inició en párpados al despertar y progresó a anasarca con aumento ponderal de 8 kg. Al examen físico: PA: 130/80 mmHg, edema con fóvea bilateral hasta raíz de muslos (++++). Exámenes: Orina de 24 horas: proteinuria de 6.8 gramos/24 horas; Albúmina sérica: 2.1 g/dL; Colesterol total: 380 mg/dL; Sedimento urinario: cilindros grasos y cuerpos ovales grasos en \"cruz de Malta\" bajo luz polarizada, sin hematuria macroscópica. Creatinina: 0.9 mg/dL. ¿Cuál es el diagnóstico sindromático y la conducta diagnóstica definitiva en el adulto?",
    "options": [
      {
        "key": "A",
        "text": "Síndrome Nefrítico Agudo; iniciar ciclofosfamida empírica sin biopsia."
      },
      {
        "key": "B",
        "text": "Síndrome Nefrótico; realizar biopsia renal percutánea para determinar la glomerulopatía subyacente (ej. Nefropatía Membranosa o GEFS)."
      },
      {
        "key": "C",
        "text": "Insuficiencia venosa periférica severa; indicar medias elásticas de compresión y deambulación."
      },
      {
        "key": "D",
        "text": "Cirrosis hepática descompensada; paracentesis evacuadora total como primer paso."
      }
    ],
    "correctKey": "B",
    "explanation": "La paciente presenta la tétrada clásica de Síndrome Nefrótico: 1) Proteinuria en rango nefrótico (>3.5 g/24 horas), 2) Hipoalbuminemia profunda (<3.0 g/dL), 3) Edema generalizado (anasarca), y 4) Dislipidemia con lipiduria (cuerpos grasos en cruz de Malta). A diferencia de los niños (donde la enfermedad de cambios mínimos es responsable del 90% y se trata con corticoides empíricos), en el adulto el síndrome nefrótico primario exige biopsia renal percutánea para identificar la histopatología específica (nefropatía membranosa, glomeruloesclerosis focal y segmentaria, amiloidosis) y guiar la terapia inmunosupresora.",
    "keyTakeaway": "En adultos, el Síndrome Nefrótico (proteinuria >3.5 g/24h + hipoalbuminemia) requiere Biopsia Renal para diagnóstico etiológico específico.",
    "distractorRationale": {
      "A": "El síndrome nefrítico cursa con hematuria dismórfica, hipertensión y oliguria con proteinuria subnefrótica, cuadro ausente aquí.",
      "C": "La proteinuria de 6.8 g y albúmina de 2.1 g descartan insuficiencia venosa aislada.",
      "D": "La anasarca se debe a hipoalbuminemia por pérdida renal masiva, no a hipertensión portal cirrótica."
    },
    "officialReference": "Harrison: Principios de Medicina Interna, 21.ª Ed. / Guías KDIGO para Glomerulopatías 2023."
  },
  {
    "id": "enar-mi-011",
    "specialty": "medicina_interna",
    "topic": "Nefrología y Emergencias / Hiperpotasemia Grave con Cambios Electrocardiográficos",
    "clinicalVignette": "Varón de 55 años con enfermedad renal crónica avanzada en hemodiálisis irregular ingresa por debilidad muscular simétrica ascendente que le impide ponerse de pie. Al examen físico: bradicardia de 44 lpm, PA: 100/60 mmHg. El electrocardiograma muestra ausencia de ondas P, ensanchamiento marcado del complejo QRS (160 ms) y ondas T altas, picudas y de base estrecha en derivaciones precordiales. La gasometría venosa reporta Potasio sérico de 7.4 mEq/L. ¿Cuál es el fármaco de emergencia que debe administrarse de inmediato por vía intravenosa para estabilizar la membrana celular miocárdica y evitar fibrilación ventricular?",
    "options": [
      {
        "key": "A",
        "text": "Gluconato de Calcio al 10% (10 a 20 mL IV lento en 3 a 5 minutos) bajo monitorización electrocardiográfica continua."
      },
      {
        "key": "B",
        "text": "Insulina regular con dextrosa al 10% en infusión lenta durante 4 horas."
      },
      {
        "key": "C",
        "text": "Sulfonato de poliestireno sódico (Kayexalate) vía oral con sorbitol."
      },
      {
        "key": "D",
        "text": "Furosemida 120 mg IV en bolo rápido."
      }
    ],
    "correctKey": "A",
    "explanation": "Ante hiperpotasemia severa (>6.5-7.0 mEq/L) con alteraciones electrocardiográficas (ondas T picudas, ensanchamiento del QRS, pérdida de onda P o ritmo sinoventricular), el PRIMER PASO INDISPENSABLE es la estabilización eléctrica de la membrana miocárdica con Gluconato de Calcio al 10% (1-2 gramos IV en 3-5 minutos). El calcio antagoniza inmediatamente la toxicidad cardíaca del potasio aumentando el potencial umbral de acción celular en 1 a 3 minutos, previniendo la asistolia o la fibrilación ventricular. Posteriormente, se administran medidas de redistribución celular (insulina + glucosa, salbutamol nebulizado) y de eliminación definitiva (hemodiálisis urgente).",
    "keyTakeaway": "Ante hiperpotasemia con cambios en el ECG: PRIMERO Gluconato de Calcio IV para estabilizar membrana miocárdica en <3 minutos; no baja el potasio pero evita el paro cardíaco.",
    "distractorRationale": {
      "B": "La insulina con glucosa introduce potasio al interior celular pero tarda 15-30 minutos en actuar; si no se estabiliza la membrana con calcio primero, el paciente puede fibrilar.",
      "C": "Las resinas de intercambio iónico tardan horas en hacer efecto y no tienen rol en la emergencia hiperaguda.",
      "D": "En paciente anúrico en hemodiálisis crónica, los diuréticos de asa son completamente inefectivos."
    },
    "officialReference": "Manual de Terapéutica Médica y Procedimientos de Urgencia, Hospital Nacional Rosales / Circulation AHA CPR & ECC Guidelines."
  },
  {
    "id": "enar-cg-003",
    "specialty": "cirugia_general",
    "topic": "Vía Biliar / Colecistitis Aguda Litiásica y Guías de Tokio (TG18)",
    "clinicalVignette": "Mujer de 45 años multípara y con sobrepeso consulta por dolor cólico en hipocondrio derecho de 24 horas de evolución que se tornó continuo y se irradia a la región interescapular, acompañado de náuseas, vómitos y fiebre de 38.2 °C. Al examen físico: dolor y detención brusca de la inspiración al palpar profundamente el hipocondrio derecho (Signo de Murphy positivo). Leucocitosis: 13,800/mm³ con 80% de neutrófilos, bilirrubina total normal. La ultrasonografía abdominal reporta vesícula biliar distendida con pared engrosada de 5.5 mm, doble contorno, litiasis de 18 mm impactada en bacinete y líquido perivesicular. Según las Guías de Tokio 2018 (TG18), ¿cuál es el diagnóstico y el tratamiento de elección?",
    "options": [
      {
        "key": "A",
        "text": "Cólico biliar simple; egreso con antiespasmódicos orales y dieta baja en grasas."
      },
      {
        "key": "B",
        "text": "Colecistitis Aguda Litiásica (Grado I-II); hospitalización, antibióticos intravenosos y Colecistectomía Laparoscópica Temprana (en las primeras 72 horas desde el inicio de los síntomas)."
      },
      {
        "key": "C",
        "text": "Colangitis aguda supurativa supurativa; CPRE urgente con esfinterotomía endoscópica inmediata."
      },
      {
        "key": "D",
        "text": "Absceso hepático amebiano; metronidazol oral durante 21 días."
      }
    ],
    "correctKey": "B",
    "explanation": "La paciente cumple criterios diagnósticos de las Guías de Tokio 2018 (TG18) para Colecistitis Aguda: Signos locales de inflamación (Murphy positivo) + Signos sistémicos (fiebre y leucocitosis) + Hallazgos ecográficos específicos (engrosamiento de pared >4 mm, cálculo impactado y líquido perivesicular). El tratamiento estándar de elección es la Colecistectomía Laparoscópica Temprana dentro de las primeras 72 horas (o hasta 7 días según centros experimentados), la cual reduce complicaciones biliares, tiempo de estancia hospitalaria y costos en comparación con la cirugía diferida.",
    "keyTakeaway": "En colecistitis aguda litiásica (TG18): la colecistectomía laparoscópica precoz (<72h) es la indicación de elección frente a la cirugía tardía diferida.",
    "distractorRationale": {
      "A": "El dolor continuo >6 horas con fiebre, leucocitosis y engrosamiento vesicular de 5.5 mm diagnostica colecistitis aguda, no cólico biliar.",
      "C": "La colangitis exige la tríada de Charcot (fiebre + ictericia + dolor); la bilirrubina es normal y no hay dilatación de vía biliar principal.",
      "D": "El cuadro vesicular típico descarta absceso hepático."
    },
    "officialReference": "Tokyo Guidelines 2018 (TG18) for acute cholangitis and cholecystitis / Schwartz: Principios de Cirugía, 11.ª Ed."
  },
  {
    "id": "enar-cg-004",
    "specialty": "cirugia_general",
    "topic": "Abdomen Agudo / Obstrucción Intestinal Mecánica por Bridas",
    "clinicalVignette": "Hombre de 52 años con antecedente de apendicectomía abierta complicada hace 10 años consulta por dolor abdominal cólico generalizado de 36 horas de evolución, distensión progresiva, vómitos de contenido bilioso que pasaron a ser fecaloideos y ausencia de canalización de gases y heces. Al examen físico: abdomen distendido y timpánico, ruidos hidroaéreos aumentados en tono y frecuencia con bazuqueo intestinal. Radiografía simple de abdomen de pie: dilatación de asas de intestino delgado (>3 cm) dispuestas en escalera, presencia de niveles hidroaéreos y ausencia completa de gas en marco colónico y ampolla rectal. ¿Cuál es la etiología más frecuente y la conducta inicial normada?",
    "options": [
      {
        "key": "A",
        "text": "Cáncer obstructivo de colon izquierdo; preparar para colonoscopia descompresiva de urgencia."
      },
      {
        "key": "B",
        "text": "Obstrucción mecánica de intestino delgado secundaria a bridas o adherencias peritoneales; manejo inicial con reposo digestivo (NPO), sonda nasogástrica (Levin) para descompresión, reposición hidroelectrolítica intravenosa y vigilancia estrecha de signos de estrangulación."
      },
      {
        "key": "C",
        "text": "Íleo paralítico metabólico; indicar procinéticos intravenosos (metoclopramida) y enema jabonoso evacuante."
      },
      {
        "key": "D",
        "text": "Hernia hiatal estrangulada; intervención torácica de urgencia."
      }
    ],
    "correctKey": "B",
    "explanation": "En pacientes con antecedente de cirugía abdominal previa, las bridas o adherencias peritoneales posquirúrgicas son responsables de más del 65-75% de los cuadros de obstrucción mecánica de intestino delgado. La tríada clínica (dolor cólico, vómitos, distensión y falta de emisión de heces/gases) y radiológica (niveles hidroaéreos en escalera con ausencia de gas colónico) es concluyente. El tratamiento inicial es conservador en ausencia de peritonitis o estrangulación: sonda nasogástrica a derivación libre, sueroterapia intravenosa y balance hídrico; hasta un 70% de los cuadros no complicados resuelven en 48-72 horas.",
    "keyTakeaway": "La causa #1 de obstrucción de intestino delgado en paciente operado son las bridas; el manejo inicial incluye NPO, sonda Levin y fluidos, vigilando datos de sufrimiento de asa.",
    "distractorRationale": {
      "A": "El cuadro es de intestino delgado (niveles centrales y ausencia de gas colónico), no de colon izquierdo.",
      "C": "En obstrucción mecánica obstructiva, los procinéticos están contraindicados porque pueden precipitar perforación intestinal.",
      "D": "La radiografía muestra niveles en intestino delgado mesogástrico, no patología hiatal."
    },
    "officialReference": "Sabiston: Tratado de Cirugía, 21.ª Edición / Manual de Urgencias Quirúrgicas, Hospital Nacional Rosales."
  },
  {
    "id": "enar-cg-005",
    "specialty": "cirugia_general",
    "topic": "Cirugía Colorrectal / Vólvulo de Sigmoides",
    "clinicalVignette": "Anciano de 78 años, institucionalizado en asilo y con estreñimiento crónico severo, es llevado por distensión abdominal masiva y asimétrica de 4 días de evolución, dolor sordo y ausencia total de evacuaciones. Al examen físico: abdomen intensamente distendido (\"en vidrio de reloj\"), timpánico a la percusión, sin signos de rebote peritoneal (abdomen blando y depresible). Tacto rectal: ampolla vacía y dilatada. Radiografía de abdomen: asa colónica desproporcionadamente dilatada que se origina en la fosa ilíaca izquierda y asciende hasta el diafragma, con imagen patognomónica en \"grano de café\" o \"U invertida\". ¿Cuál es el tratamiento descompresivo de primera línea si no existen signos de peritonitis ni necrosis?",
    "options": [
      {
        "key": "A",
        "text": "Desvolvulación y descompresión mediante rectosigmoidoscopia rígida o colonoscopia con colocación de sonda rectal, seguida de resección sigmoidea programada en la misma hospitalización."
      },
      {
        "key": "B",
        "text": "Laparotomía urgente con hemicolectomía derecha y anastomosis ileocólica primaria."
      },
      {
        "key": "C",
        "text": "Administración de laxantes osmóticos orales a dosis altas y enemas salinos a presión."
      },
      {
        "key": "D",
        "text": "Punción percutánea abdominal con catéter venoso central para desinflar el colon."
      }
    ],
    "correctKey": "A",
    "explanation": "El vólvulo de sigmoides es la torsión del colon sobre su propio eje mesentérico, favorecido por sigmoides largo y redundante (dolicomegacolon) y mesenterio estrecho en ancianos. En ausencia de signos de peritonitis, perforación o isquemia mucosa (vólvulo no complicado), la conducta de primera línea recomendada por las guías quirúrgicas es la desvolvulación endoscópica mediante rectosigmoidoscopia o colonoscopia, lo cual permite descomprimir el asa inmediatamente en más del 80% de los casos. Debido a que la recurrencia supera el 50-70%, debe realizarse sigmoidectomía programada en la misma internación.",
    "keyTakeaway": "En vólvulo de sigmoides no complicado (sin peritonitis): desvolvulación endoscópica con sonda rectal de primera línea, seguida de sigmoidectomía programada diferida.",
    "distractorRationale": {
      "B": "La patología se asienta en el colon sigmoide izquierdo; la hemicolectomía derecha es un error anatómico grosero.",
      "C": "Los laxantes y enemas a presión en colon volvulado con riesgo de torsión vascular aumentan el riesgo de perforación y sepsis.",
      "D": "La punción percutánea a ciegas está formalmente contraindicada por causar peritonitis fecal masiva."
    },
    "officialReference": "Schwartz: Principios de Cirugía, 11.ª Ed. / Guías WSES para Vólvulo de Colon."
  },
  {
    "id": "enar-cg-006",
    "specialty": "cirugia_general",
    "topic": "Trauma / Politraumatizado con Choque Grado IV y Protocolo de Transfusión Masiva",
    "clinicalVignette": "Joven de 26 años llega en ambulancia tras colisión frontal en motocicleta. Se encuentra inconsciente, con palidez intensa, extremidades frías y cianóticas. PA: 60/30 mmHg, FC: 145 lpm filiforme, FR: 34 rpm. Abdomen distendido con matidez cambiante y crepitación pélvica a la compresión suave. Ultrasonido FAST abdominal positivo en espacio hepatorrenal (Morison) y fondo de saco de Douglas. La pérdida sanguínea estimada supera el 40% del volumen circulante (Choque Hemorrágico Grado IV según ATLS). ¿Cuál es la estrategia de resucitación hemodinámica y hemostática con mayor respaldo científico actual?",
    "options": [
      {
        "key": "A",
        "text": "Infusión rápida de 4 litros de solución salina normal al 0.9% en menos de 15 minutos sin productos sanguíneos."
      },
      {
        "key": "B",
        "text": "Activación del Protocolo de Transfusión Masiva (PTM) con hemoderivados en proporción balanceada 1:1:1 (Concentrado de Glóbulos Rojos : Plasma Fresco Congelado : Plaquetas), Ácido Tranexámico 1g IV en bolo dentro de las primeras 3 horas y control quirúrgico de daños."
      },
      {
        "key": "C",
        "text": "Administrar dopamina y vasopresina en dosis máximas sin pasar líquidos para evitar edema."
      },
      {
        "key": "D",
        "text": "Trasladar de inmediato a tomografía corporal total (Pan-Scan) con contraste endovenoso antes de intentar estabilizar."
      }
    ],
    "correctKey": "B",
    "explanation": "En choque hemorrágico exanguinante Grado IV, la infusión agresiva de cristaloides puros es deletérea porque diluye los factores de coagulación, agrava la hipotermia y disrumpe los coágulos formados. Según el manual ATLS (10.ª edición) y el ensayo PROPPR, el estándar de oro es la Resucitación de Control de Daños: activación inmediata del Protocolo de Transfusión Masiva balanceado en relación 1:1:1 (Glóbulos Rojos, Plasma Fresco y Plaquetas), hipotensión permisiva (meta de PAS 80-90 mmHg hasta el control quirúrgico), administración precoz de Ácido Tranexámico (1 g IV en 10 min antes de las 3 horas del trauma) y laparotomía de control de daños.",
    "keyTakeaway": "En choque hemorrágico grado IV: Transfusión masiva 1:1:1 (CGR:PFC:Plaquetas) + Ácido Tranexámico 1g (<3h) + Laparotomía de control de daños; evitar sobrecarga con cristaloides.",
    "distractorRationale": {
      "A": "La sobrecarga con 4 litros de cristaloides produce coagulopatía dilucional letal, acidosis e hipotermia (tríada de la muerte).",
      "C": "Los vasopresores en hipovolemia crítica provocan isquemia visceral severa si no se repone el volumen intravascular con sangre.",
      "D": "El paciente inestable hemodinámico NO debe ir a tomografía; el tomógrafo es la \"sala de la muerte\" para un paciente en choque exanguinante."
    },
    "officialReference": "American College of Surgeons, ATLS (Advanced Trauma Life Support), 10.ª Edición / CRASH-2 Trial."
  },
  {
    "id": "enar-cg-007",
    "specialty": "cirugia_general",
    "topic": "Pared Abdominal / Hernia Inguinal Estrangulada",
    "clinicalVignette": "Hombre de 63 años con antecedente de hernia inguinal derecha reductible de 5 años de evolución consulta a la emergencia por dolor agudo de inicio súbito en región inguinal derecha de 8 horas de evolución tras realizar un esfuerzo físico intenso. Refiere que la masa protruye y no regresa a la cavidad abdominal a pesar de sus intentos. Al examen físico: tumoración irreductible de 7 cm en región inguinal derecha, intensamente dolorosa al tacto, eritematosa en piel suprayacente y con calor local. El paciente presenta taquicardia (FC 105 lpm), febrícula de 37.9 °C y defensa muscular en fosa ilíaca derecha. ¿Cuál es la conducta quirúrgica indicada?",
    "options": [
      {
        "key": "A",
        "text": "Intentar maniobra de taxis (reducción forzada bimanual) bajo analgesia con opioides para evitar la cirugía."
      },
      {
        "key": "B",
        "text": "Laparotomía o abordaje inguinal urgente para exploración y reparación herniaria, previa reanimación con líquidos y antibióticos intravenosos."
      },
      {
        "key": "C",
        "text": "Indicar analgésicos orales, hielo local y programar plastia inguinal electiva ambulatoria para la siguiente semana."
      },
      {
        "key": "D",
        "text": "Punción con aguja fina de la masa para descartar adenopatía supurada."
      }
    ],
    "correctKey": "B",
    "explanation": "El paciente presenta signos inequívocos de Hernia Inguinal Estrangulada: hernia irreductible con dolor exquisito continuo, eritema cutáneo, calor local, fiebre y taquicardia, lo cual traduce isquemia y necrosis del asa intestinal atrapada en el anillo herniario. En esta condición está TERMINANTEMENTE PROSCRITA la reducción manual (taxis), ya que devolvería un asa desvitalizada, isquémica o perforada al interior de la cavidad peritoneal (\"reducción en masa\"), desencadenando peritonitis fecaloidea fulminante y choque séptico. La indicación es cirugía de urgencia inmediata.",
    "keyTakeaway": "En hernia estrangulada (dolor severo, cambios inflamatorios en piel, fiebre): NUNCA intentar taxis; operar de urgencia para evitar perforación y sepsis.",
    "distractorRationale": {
      "A": "La reducción manual (taxis) de una hernia estrangulada puede reintroducir un asa intestinal gangrenada a la cavidad provocando peritonitis generalizada fatal.",
      "C": "La estrangulación es una emergencia quirúrgica con isquemia tisular progresiva; diferir la cirugía causa gangrena y muerte.",
      "D": "Puncionar una hernia estrangulada perfora la pared intestinal distendida contaminando el tejido celular subcutáneo."
    },
    "officialReference": "Sabiston: Tratado de Cirugía, 21.ª Ed. / Guías HerniaSurge 2023."
  },
  {
    "id": "enar-cg-008",
    "specialty": "cirugia_general",
    "topic": "Páncreas / Pancreatitis Aguda Biliar y Criterios de Atlanta Revisados",
    "clinicalVignette": "Mujer de 38 años sin antecedentes médicos conocidos consulta por dolor epigástrico intenso, constante, transfictivo, irradiado en cinturón hacia la espalda de 14 horas de evolución, acompañado de vómitos incoercibles y distensión. Al examen físico: dolor a la palpación profunda en epigastrio sin irritación peritoneal franca. Laboratorios: Lipasa sérica: 1,850 UI/L (normal <60), Amilasa: 920 UI/L, Leucocitos: 14,200/mm³, ALT: 180 UI/L, AST: 165 UI/L, Bilirrubina total: 1.8 mg/dL. Ultrasonografía: microlitiasis vesicular múltiple sin dilatación del conducto colédoco (colédoco de 5 mm). ¿Cuál es la conducta inicial de manejo hidroelectrolítico y la resolución definitiva del factor causal según las guías internacionales?",
    "options": [
      {
        "key": "A",
        "text": "Fluidoterapia intravenosa dirigida por metas con Lactato Ringer (200-250 mL/h), analgesia adecuada, inicio temprano de nutrición oral tan pronto ceda el dolor/íleo, y Colecistectomía en la misma hospitalización (antes del alta)."
      },
      {
        "key": "B",
        "text": "Ayuno estricto absoluto durante 10 días continuos con nutrición parenteral total exclusiva y antibióticos profilácticos con imipenem."
      },
      {
        "key": "C",
        "text": "Realizar colangiopancreatografía retrógrada endoscópica (CPRE) de urgencia en todos los casos de pancreatitis biliar aunque no haya colangitis ni coledocolitiasis."
      },
      {
        "key": "D",
        "text": "Cirugía de necrosectomía pancreática abierta inmediata en las primeras 24 horas."
      }
    ],
    "correctKey": "A",
    "explanation": "El diagnóstico de pancreatitis aguda se confirma con 2 de 3 criterios de Atlanta: dolor epigástrico irradiado a espalda + elevación de lipasa/amilasa >3 veces el límite superior. La elevación concomitante de transaminasas (ALT >150 UI/L) tiene un valor predictivo positivo >95% para etiología biliar. El manejo moderno incluye: fluidoterapia guiada por metas preferentemente con Lactato de Ringer, analgesia multimodal, reinicio precoz de la vía oral con dieta baja en grasas tan pronto mejoren los síntomas (el ayuno prolongado atrofia la barrera intestinal), y Colecistectomía Laparoscópica en la misma admisión hospitalaria para evitar recurrencias biliares que pueden ser potencialmente letales en las siguientes semanas.",
    "keyTakeaway": "En pancreatitis aguda biliar leve: hidratación con Ringer Lactato, realimentación oral temprana y colecistectomía antes del alta hospitalaria en el mismo internamiento.",
    "distractorRationale": {
      "B": "El ayuno prolongado y los antibióticos profilácticos de rutina están proscritos en la pancreatitis aguda no infectada.",
      "C": "La CPRE urgente solo está indicada si coexiste colangitis aguda o coledocolitiasis obstructiva persistente.",
      "D": "La necrosectomía precoz (<4 semanas) se asocia a elevadísima mortalidad y está contraindicada; el desbridamiento se difiere hasta que la necrosis esté encapsulada."
    },
    "officialReference": "American Gastroenterological Association (AGA) Guidelines on Initial Management of Acute Pancreatitis / Guías IAP/APA."
  },
  {
    "id": "enar-cg-009",
    "specialty": "cirugia_general",
    "topic": "Tubo Digestivo / Hemorragia Digestiva Alta Variceal en Paciente Cirrótico",
    "clinicalVignette": "Hombre de 56 años con cirrosis hepática por alcoholismo (Child-Pugh B) ingresa a la emergencia con hematemesis masiva de sangre rutilante con coágulos en dos ocasiones y melena. Al examen físico: pálido, sudoroso, PA: 85/50 mmHg, FC: 118 lpm, estigmas de hepatopatía crónica (eritema palmar, telangiectasias y ascitis leve). Laboratorios: Hemoglobina: 6.8 g/dL, Plaquetas: 65,000/mm³, INR: 1.6. ¿Cuál es el paquete integral de medidas de estabilización farmacológica y terapéutica de primera línea antes y durante la endoscopia según el Consenso de Baveno VII?",
    "options": [
      {
        "key": "A",
        "text": "Transfusión agresiva de sangre para elevar la hemoglobina a >12 g/dL y diferir la endoscopia 48 horas."
      },
      {
        "key": "B",
        "text": "Restitución cautelosa con hemoderivados (meta restrictiva de Hb 7-8 g/dL), vasoactivo vasoconstrictor esplácnico (Octreótido o Terlipresina), profilaxis antibiótica con Ceftriaxona IV y endoscopia digestiva diagnóstica/terapéutica con ligadura elástica de várices en las primeras 12 horas."
      },
      {
        "key": "C",
        "text": "Colocación rutinaria inmediata de sonda de Sengstaken-Blakemore antes de cualquier fármaco o endoscopia."
      },
      {
        "key": "D",
        "text": "Administración de aspirina oral en dosis altas y heparina de bajo peso molecular."
      }
    ],
    "correctKey": "B",
    "explanation": "En el sangrado variceal por hipertensión portal, el consenso de Baveno VII y la AASLD establecen: 1) Estrategia transfusional restrictiva (meta de hemoglobina entre 7 y 8 g/dL; sobretransfundir eleva la presión portal y precipita resangrado masivo), 2) Fármacos vasoactivos esplácnicos tempranos (Octreótido o Terlipresina) iniciados antes de la endoscopia, 3) Profilaxis antibiótica mandatoria con Ceftriaxona 1g/día IV (reduce infecciones bacterianas, resangrado y mortalidad en cirróticos), y 4) Endoscopia en <12 horas con ligadura con bandas elásticas.",
    "keyTakeaway": "Hemorragia variceal: Estrategia restrictiva (Hb 7-8 g/dL) + Vasoactivo (Octreótido) + Ceftriaxona profiláctica + Ligadura endoscópica con bandas <12h.",
    "distractorRationale": {
      "A": "Transfundir a Hb >12 g/dL aumenta drásticamente la presión venosa portal y causa resangrado incontrolable.",
      "C": "La sonda de Sengstaken-Blakemore es una medida de rescate transitoria de última línea ante choque refractario o fallo del tratamiento endoscópico, no de primera línea.",
      "D": "Los antiagregantes y anticoagulantes empeorarían catastróficamente la hemorragia activa."
    },
    "officialReference": "Baveno VII Consensus Workshop / Guías de Manejo de la Hemorragia Digestiva Alta, MINSAL."
  },
  {
    "id": "enar-cg-010",
    "specialty": "cirugia_general",
    "topic": "Trauma Torácico / Taponamiento Cardíaco y Tríada de Beck",
    "clinicalVignette": "Varón de 23 años es recibido en la Unidad de Trauma tras sufrir una herida por arma blanca en el 4.° espacio intercostal izquierdo, paraesternal (área cardíaca de Ziedler). Se encuentra ansioso y diaforético. Signos vitales: PA: 80/55 mmHg, FC: 122 lpm débil, FR: 24 rpm. A la exploración física: ruidos cardíacos marcadamente apagados o velados, ingurgitación de venas yugulares hasta el ángulo mandibular a 45 grados y campos pulmonares completamente claros a la auscultación bilateral sin estertores ni timpanismo. El ecofast subxifoideo revela líquido libre pericárdico con colapso telediastólico de la aurícula derecha. ¿Cuál es el diagnóstico sindromático y la conducta quirúrgica definitiva?",
    "options": [
      {
        "key": "A",
        "text": "Neumotórax a tensión izquierdo; toracostomía con tubo pleural."
      },
      {
        "key": "B",
        "text": "Taponamiento cardíaco agudo; traslado inmediato a quirófano para esternotomía media o toracotomía anterolateral con reparación de la herida miocárdica."
      },
      {
        "key": "C",
        "text": "Choque neurogénico; administración de vasopresores y corticoides."
      },
      {
        "key": "D",
        "text": "Contusión miocárdica simple; reposo y seriación de enzimas cardíacas."
      }
    ],
    "correctKey": "B",
    "explanation": "El paciente presenta la Tríada de Beck patognomónica de Taponamiento Cardíaco: 1) Hipotensión arterial sistémica, 2) Ruidos cardíacos apagados o disminuidos en intensidad, y 3) Ingurgitación venosa yugular (presión venosa central elevada), confirmada por ecografía FAST subxifoidea que muestra hemopericardio. El saco pericárdico es inextensible; tan solo 100-200 mL de sangre a tensión colapsan las cavidades derechas impidiendo el llenado ventricular. En trauma penetrante inestable, la pericardiocentesis es solo una medida de salvamento transitoria en ruta a la cirugía definitiva: esternotomía media o toracotomía de emergencia para evacuar el hemopericardio y reparar la lesión cardíaca.",
    "keyTakeaway": "Tríada de Beck (hipotensión + ruidos cardíacos velados + ingurgitación yugular) + pulmones limpios = Taponamiento Cardíaco traumático; requiere toracotomía/esternotomía urgente.",
    "distractorRationale": {
      "A": "Los campos pulmonares están libres y no hay timpanismo unilateral, descartando neumotórax a tensión.",
      "C": "El choque neurogénico cursa con bradicardia e hipotensión sin ingurgitación yugular.",
      "D": "La presencia de hemopericardio a tensión con colapso hemodinámico descarta una simple contusión cerrada."
    },
    "officialReference": "American College of Surgeons, ATLS (Advanced Trauma Life Support), 10.ª Edición."
  },
  {
    "id": "enar-cg-011",
    "specialty": "cirugia_general",
    "topic": "Quemaduras / Gran Quemado y Fórmula de Parkland",
    "clinicalVignette": "Trabajador electricista de 35 años de 70 kg de peso sufre quemaduras por llama en explosión en espacio cerrado ocurrida hace exactamente 1 hora. Al examen físico: quemaduras de segundo grado profundo y tercer grado que comprometen la totalidad de la cara anterior del tronco (18%), ambos miembros superiores completos (9% cada uno = 18%) y la cara anterior del muslo derecho (9%), totalizando una Superficie Corporal Total (SCT) quemada del 45%. PA: 95/60 mmHg, FC: 110 lpm, peso: 70 kg. Aplicando la Fórmula de Parkland estandarizada (4 mL/kg/% SCT quemada), ¿cuál es el volumen total de Lactato Ringer calculado para las primeras 24 horas y cómo debe distribuirse?",
    "options": [
      {
        "key": "A",
        "text": "Volumen total: 12,600 mL en 24 horas; administrando 6,300 mL en las primeras 8 horas desde el momento del accidente y los 6,300 mL restantes en las siguientes 16 horas."
      },
      {
        "key": "B",
        "text": "Volumen total: 3,000 mL en 24 horas a goteo uniforme continuo."
      },
      {
        "key": "C",
        "text": "Volumen total: 8,000 mL de solución salina hipertónica al 3% divididos en 3 bolos iguales."
      },
      {
        "key": "D",
        "text": "Infundir únicamente albúmina al 20% en las primeras 8 horas y suspender cristaloides."
      }
    ],
    "correctKey": "A",
    "explanation": "Según la Fórmula de Parkland (Fórmula de Baxter): Volumen total en 24 h = 4 mL × Peso corporal (kg) × % SCT quemada (segundo y tercer grado). En este paciente: 4 mL × 70 kg × 45% = 12,600 mL de Ringer Lactato en las primeras 24 horas. REGLA TEMPORAL CRÍTICA: La mitad de este volumen calculado (6,300 mL) debe infundirse en las primeras 8 HORAS CONTADAS DESDE EL MOMENTO EN QUE OCURRIÓ LA QUEMADURA (no desde la llegada al hospital), y la otra mitad (6,300 mL) se administra en las siguientes 16 horas. La diuresis se monitoriza estrictamente con sonda vesical con meta de 0.5 a 1.0 mL/kg/hora en adultos.",
    "keyTakeaway": "Parkland: 4 mL × kg × %SCT. El 50% se administra en las primeras 8 horas desde la quemadura y el 50% en las siguientes 16 horas. Titular según diuresis meta (0.5-1 mL/kg/h).",
    "distractorRationale": {
      "B": "3,000 mL es insuficiente para un gran quemado del 45% y provocaría falla renal aguda por hipoperfusión tisular y mioglobinuria.",
      "C": "La salina hipertónica no es el estándar de reanimación inicial según la Guía de la Asociación Americana de Quemaduras (ABA).",
      "D": "Los coloides como la albúmina se evitan en las primeras 8-12 horas por la gran permeabilidad capilar endotelial que fugaría la proteína al intersticio."
    },
    "officialReference": "American Burn Association (ABA) Practice Guidelines / Sabiston Tratado de Cirugía, 21.ª Ed."
  },
  {
    "id": "enar-ped-003",
    "specialty": "pediatria",
    "topic": "Cuidados Críticos Pediátricos / Choque Séptico PALS (Hospital Bloom)",
    "clinicalVignette": "Niño de 3 años previamente sano con neumonía de 4 días de evolución es admitido en la unidad de emergencias en estado de letargia. Al examen físico: pálido, piel marmórea con frialdad acra hasta los codos y rodillas, llenado capilar prolongado de 5 segundos, pulsos periféricos radiales y pedios impalpables, pulso femoral filiforme a 170 lpm, FR: 48 rpm, PA: 82/50 mmHg (presión sistólica en percentil bajo normal). Auscultación: crepitantes basales derechos. Se logra acceso intraóseo inmediato. Recibe 40 mL/kg de cristaloides isotónicos en bolos en 20 minutos sin signos de sobrecarga hídrica, pero persiste con frialdad, oliguria y llenado capilar de 4 segundos (Choque Séptico Frío refractario a fluidos). Según los protocolos PALS / Hospital Bloom, ¿cuál es el fármaco inotrópico y vasoactivo de primera elección a iniciar?",
    "options": [
      {
        "key": "A",
        "text": "Epinefrina (Adrenalina) en infusión continua (0.05 a 0.3 mcg/kg/min)."
      },
      {
        "key": "B",
        "text": "Nitroprusiato de sodio en infusión para vasodilatar el lecho periférico."
      },
      {
        "key": "C",
        "text": "Furosemida intravenosa a 2 mg/kg para forzar la diuresis."
      },
      {
        "key": "D",
        "text": "Dopamina a dosis de 2 mcg/kg/min en monoterapia exclusiva."
      }
    ],
    "correctKey": "A",
    "explanation": "El paciente pediátrico presenta un Choque Séptico Frío (el fenotipo más común en niños en la comunidad, caracterizado por bajo gasto cardíaco y resistencias vasculares elevadas: extremidades frías, llenado capilar prolongado y pulsos débiles). Cuando el choque persiste a pesar de la reanimación hídrica adecuada con 40-60 mL/kg de cristaloides (refractario a fluidos), las guías PALS de la AHA y los protocolos de la UCIP del Hospital Benjamín Bloom indican como fármaco de primera línea la Epinefrina en infusión continua, debido a su efecto inotrópico positivo y cronotrópico potente (beta-1 predominante a dosis bajas/medias). En choque caliente se prefiere norepinefrina.",
    "keyTakeaway": "En choque séptico pediátrico frío (extremidades frías, llenado >3s): vasoactivo de 1.ª línea = Epinefrina. La hipotensión en niños es un signo tardío pre-paro.",
    "distractorRationale": {
      "B": "Los vasodilatadores como el nitroprusiato precipitarían colapso cardiovascular y paro en un paciente hipoperfundido.",
      "C": "Los diuréticos de asa están contraindicados ante hipoperfusión e hipovolemia relativa.",
      "D": "La dopamina es inferior a la epinefrina para revertir el choque frío y se asocia a mayor mortalidad pediátrica."
    },
    "officialReference": "Pediatric Advanced Life Support (PALS) Provider Manual, AHA / Protocolos de Manejo de Sepsis, Hospital Nacional de Niños Benjamín Bloom."
  },
  {
    "id": "enar-ped-004",
    "specialty": "pediatria",
    "topic": "Gastroenterología / Deshidratación Grave por EDA (Plan C MINSAL)",
    "clinicalVignette": "Lactante de 9 meses de edad es traído a la UCSF de emergencia por diarrea acuosa profusa (más de 12 deposiciones abundantes) y vómitos de 24 horas de evolución. Al examen físico: letárgico, no responde a estímulos auditivos, ojos intensamente hundidos sin lágrimas, boca muy seca, signo del pliegue cutáneo que tarda más de 3 segundos en volver a su estado normal (muy lento), pulsos periféricos filiformes y llenado capilar de 4 segundos. Incapaz de beber. Según la estrategia AIEPI del MINSAL, ¿cuál es la conducta terapéutica inmediata?",
    "options": [
      {
        "key": "A",
        "text": "Plan C de hidratación parenteral intravenosa inmediata con Solución Hartmann (Lactato Ringer) a razón de 100 mL/kg divididos en: 30 mL/kg en la primera hora, seguidos de 70 mL/kg en las siguientes 5 horas."
      },
      {
        "key": "B",
        "text": "Plan B con Sales de Rehidratación Oral forzadas por sonda nasogástrica a 100 mL/kg en 4 horas."
      },
      {
        "key": "C",
        "text": "Plan A en el hogar aumentando tomas de leche y agua de arroz."
      },
      {
        "key": "D",
        "text": "Administrar antibióticos orales ambulatorios y citar en 3 días."
      }
    ],
    "correctKey": "A",
    "explanation": "El paciente presenta Deshidratación Grave con peligro inminente de choque hipovolémico según AIEPI: letárgico, ojos muy hundidos, incapaz de beber y pliegue cutáneo >2 segundos. La conducta mandatoria es el Plan C de hidratación endovenosa inmediata con Lactato Ringer (Solución Hartmann) a 100 mL/kg. Debido a que el paciente es menor de 1 año (9 meses), el esquema temporal es de 6 HORAS: administrar 30 mL/kg en la 1.ª hora y 70 mL/kg en las siguientes 5 horas (en mayores de 1 año el esquema es de 3 horas: 30 mL/kg en 30 min y 70 mL/kg en 2.5 h).",
    "keyTakeaway": "Plan C en <1 año: 100 mL/kg de Solución Hartmann en 6 horas (30 mL/kg en 1.ª hora + 70 mL/kg en 5 horas).",
    "distractorRationale": {
      "B": "El paciente tiene alteración de la conciencia (letargia) y no puede proteger la vía aérea; la vía oral o enteral forzada tiene alto riesgo de broncoaspiración masiva.",
      "C": "El Plan A es exclusivamente preventivo en el hogar para diarrea sin deshidratación.",
      "D": "El cuadro es una emergencia médica hipovolémica; diferir la hidratación intravenosa causa muerte por paro cardiorrespiratorio."
    },
    "officialReference": "Atención Integrada a las Enfermedades Prevalentes de la Infancia (AIEPI), MINSAL El Salvador / OMS."
  },
  {
    "id": "enar-ped-005",
    "specialty": "pediatria",
    "topic": "Infectología / Neumonía Adquirida en la Comunidad (NAC) en Preescolar",
    "clinicalVignette": "Niño de 3 años de edad sin antecedentes clínicos de relevancia es llevado a la consulta de la UCSF por fiebre de 38.6 °C, tos productiva y decaimiento de 3 días de evolución. Al examen físico: alerta, bien hidratado, FR: 44 rpm (taquipnea para su grupo de edad), sin tiraje subcostal ni aleteo nasal, saturación de oxígeno: 96% al aire ambiente. A la auscultación pulmonar: murmullo vesicular disminuido con estertores crepitantes localizados en base pulmonar derecha. Según la Norma Técnica del MINSAL y la guía AIEPI, ¿cuál es el diagnóstico y el tratamiento antimicrobiano ambulatorio de primera línea?",
    "options": [
      {
        "key": "A",
        "text": "Neumonía no grave; tratamiento ambulatorio con Amoxicilina oral a dosis altas (80 a 90 mg/kg/día dividida cada 8 o 12 horas) durante 5 a 7 días."
      },
      {
        "key": "B",
        "text": "Resfriado común viral; únicamente paracetamol oral a demanda."
      },
      {
        "key": "C",
        "text": "Neumonía grave; hospitalización obligatoria para iniciar Vancomicina más Meropenem intravenosos."
      },
      {
        "key": "D",
        "text": "Crisis asmática; iniciar salbutamol en nebulizaciones continuas y prednisona oral."
      }
    ],
    "correctKey": "A",
    "explanation": "El preescolar presenta Neumonía Adquirida en la Comunidad no grave (definida por la presencia de taquipnea [FR ≥40 rpm en niños de 1 a 4 años] y hallazgos auscultatorios focales, en ausencia de tiraje subcostal o signos de peligro general). El germen bacteriano causal más frecuente es Streptococcus pneumoniae. La primera línea de tratamiento ambulatorio recomendada por el MINSAL, la AAP y la OMS es la Amoxicilina oral a dosis altas (80 a 90 mg/kg/día), necesaria para vencer la resistencia de cepas de neumococo con mutaciones en las proteínas de unión a penicilina (PBP).",
    "keyTakeaway": "Tratamiento de primera línea en NAC pediátrica no grave ambulatoria: Amoxicilina oral a dosis altas (80-90 mg/kg/día por 5-7 días).",
    "distractorRationale": {
      "B": "La taquipnea con crepitantes focales define neumonía bacteriana; no tratarla conduce a progresión y complicaciones empiemáticas.",
      "C": "No presenta criterios de neumonía grave (no hay tiraje subcostal ni hipoxemia) que ameriten ingreso y antibióticos de reserva.",
      "D": "El cuadro febril con crepitantes focales unilaterales no es asma; no presenta sibilancias espiratorias difusas."
    },
    "officialReference": "Norma Técnica para la Atención Integral de la Salud Infantil, MINSAL / Guías de la Sociedad Latinoamericana de Infectología Pediátrica (SLIPE)."
  },
  {
    "id": "enar-ped-006",
    "specialty": "pediatria",
    "topic": "Vía Aérea Pediátrica / Laringotraqueítis Aguda (Crup Viral)",
    "clinicalVignette": "Lactante de 18 meses presenta cuadro de rinorrea y febrícula desde hace 2 días. Durante la madrugada se despierta súbitamente con tos seca metálica (\"tos perruna\"), disfonía y estridor inspiratorio que se acentúa con el llanto. Al examen físico en la emergencia: alerta, con tos traqueal resonante, estridor inspiratorio presente en reposo y tiraje supraesternal leve. Frecuencia respiratoria: 34 rpm, SatO2: 95% al aire ambiente. Radiografía simple cervical anteroposterior: signo del \"campanario\" o \"punta de lápiz\" por estrechamiento subglótico. ¿Cuál es la terapia farmacológica combinada de primera línea según las guías pediátricas?",
    "options": [
      {
        "key": "A",
        "text": "Dexametasona oral o parenteral (0.15 a 0.6 mg/kg dosis única) más Adrenalina (Epinefrina racémica o estándar 1:1,000) nebulizada, con observación durante al menos 2 a 3 horas."
      },
      {
        "key": "B",
        "text": "Amoxicilina/Ácido Clavulánico oral más bromuro de ipratropio inhalado."
      },
      {
        "key": "C",
        "text": "Intubación orotraqueal urgente inmediata sin intentar medicación."
      },
      {
        "key": "D",
        "text": "Sedación con midazolam y nebulización con suero glucosado al 5%."
      }
    ],
    "correctKey": "A",
    "explanation": "El paciente presenta Crup Viral o Laringotraqueítis Aguda de severidad moderada (estridor inspiratorio presente en reposo y tiraje leve; típicamente causado por Virus Parainfluenza tipos 1 y 2). El tratamiento estándar de oro consiste en: 1) Dexametasona (0.15 a 0.6 mg/kg, máx 10-16 mg, dosis única oral o IM), que reduce el edema laríngeo subglótico en 1 a 2 horas y previene hospitalizaciones, y 2) Adrenalina nebulizada (0.5 mL/kg de adrenalina 1:1,000 hasta un máximo de 5 mL con flujo de O2 a 4-6 L/min), que induce vasoconstricción arteriolar alfa-1 rápida y alivia el estridor en 10-30 minutos. Se mantiene en observación 2-3 horas para descartar efecto rebote.",
    "keyTakeaway": "En crup con estridor en reposo: Dexametasona (0.15-0.6 mg/kg) + Adrenalina nebulizada; vigilar efecto rebote durante 2-3 horas.",
    "distractorRationale": {
      "B": "El crup es viral; los antibióticos no tienen ningún rol y el ipratropio es ineficaz para el edema subglótico.",
      "C": "La gran mayoría responde velozmente a los corticoides y adrenalina nebulizada; la intubación se reserva para fallo respiratorio inminente.",
      "D": "Los sedantes están contraindicados porque deprimen el centro respiratorio y enmascaran la fatiga ventilatoria."
    },
    "officialReference": "Nelson: Tratado de Pediatría, 21.ª Ed. / Guías Clínicas de Urgencias, Hospital Benjamín Bloom."
  },
  {
    "id": "enar-ped-007",
    "specialty": "pediatria",
    "topic": "Neurología Pediátrica / Convulsión Febril Simple",
    "clinicalVignette": "Madre consulta alarmada a la emergencia porque su hija de 20 meses de edad presentó un episodio convulsivo hace 30 minutos mientras tenía fiebre de 39.2 °C secundaria a faringitis aguda. Describe una crisis con rigidez y sacudidas musculares rítmicas de las cuatro extremidades (tónico-clónica generalizada), con ojos en blanco y pérdida del conocimiento, que duró aproximadamente 2 minutos y cedió espontáneamente sin medicación. Al examen físico actual: la niña está despierta, interactiva, reconoce a sus padres, fontanela cerrada y normotensa, sin rigidez de nuca ni signos meníngeos (Brudzinski y Kernig negativos), tono muscular y reflejos normales. ¿Cuál es el diagnóstico más probable, pronóstico y conducta apropiada?",
    "options": [
      {
        "key": "A",
        "text": "Convulsión Febril Simple; pronóstico neurológico excelente sin secuelas, no requiere tratamiento anticonvulsivante diario ni estudios invasivos de rutina; tranquilizar a la familia y controlar la fiebre con antipiréticos."
      },
      {
        "key": "B",
        "text": "Epilepsia mioclónica juvenil; iniciar fenobarbital oral diario durante 3 años."
      },
      {
        "key": "C",
        "text": "Meningitis bacteriana aguda; realizar punción lumbar urgente a toda convulsión febril sin excepción."
      },
      {
        "key": "D",
        "text": "Estatus epiléptico no convulsivo; infundir bolo de fenitoína a 20 mg/kg intravenosa."
      }
    ],
    "correctKey": "A",
    "explanation": "La paciente cumple todos los criterios de Convulsión Febril Simple: 1) Edad típica entre 6 meses y 5 años, 2) Crisis tónico-clónica generalizada, 3) Duración menor a 15 minutos, 4) No recurre en las siguientes 24 horas, y 5) Examen neurológico postictal completamente normal en paciente sin infección del SNC ni daño cerebral previo. El pronóstico es benigno: no causa daño cerebral, déficit cognitivo ni incrementa significativamente el riesgo de epilepsia. No están indicados los anticonvulsivantes profilácticos continuos ni la punción lumbar rutinaria si no hay signos meníngeos y el examen físico es normal.",
    "keyTakeaway": "Convulsión febril simple (generalizada, <15 min, sin recurrencia en 24h): curso benigno; educar a los padres, no indicar anticonvulsivantes continuos.",
    "distractorRationale": {
      "B": "Una crisis febril aislada en el lactante no es epilepsia y el fenobarbital causa efectos adversos conductuales y cognitivos graves.",
      "C": "La punción lumbar solo se indica si hay signos meníngeos, sospecha clínica de sepsis/meningitis o paciente no vacunado contra Hib/neumococo.",
      "D": "La crisis duró 2 minutos y ya terminó; no es estatus epiléptico y la fenitoína es innecesaria y riesgosa."
    },
    "officialReference": "American Academy of Pediatrics (AAP) Clinical Practice Guideline: Febrile Seizures / Hospital Benjamín Bloom."
  },
  {
    "id": "enar-ped-008",
    "specialty": "pediatria",
    "topic": "Nutrición / Desnutrición Infantil Grave: Marasmo vs Kwashiorkor",
    "clinicalVignette": "Niño de 2 años procedente de una comunidad rural en situación de extrema pobreza es llevado a la consulta médica por aumento de volumen en ambos pies y abdomen prominente. Al examen físico: apático, irritable al contacto, peso para la edad muy bajo (< -3 DE), cabello despigmentado, fino, ralo y quebradizo (signo de la bandera), cara de \"luna llena\", hepatomegalia palpable a 3 cm bajo el reborde costal por infiltración grasa y edema bilateral con fóvea que asciende hasta las rodillas. La albúmina sérica reporta 1.8 g/dL. ¿Cuál es el diagnóstico nutricional específico y el principio inicial de manejo según los 10 pasos de la OMS?",
    "options": [
      {
        "key": "A",
        "text": "Desnutrición Proteico-Calórica Grave tipo Kwashiorkor (edematosa); fase inicial de estabilización con prevención de hipoglucemia, hipotermia, reposición cautelosa con fórmula F-75 y proscripción de hierro en la fase aguda."
      },
      {
        "key": "B",
        "text": "Marasmo puro sin edema; forzar alimentación hipercalórica con carne roja y suplemento de hierro en altas dosis el día 1."
      },
      {
        "key": "C",
        "text": "Síndrome nefrótico infantil; iniciar pulsos de metilprednisolona."
      },
      {
        "key": "D",
        "text": "Insuficiencia cardíaca congestiva; indicar restricción hídrica severa y espironolactona."
      }
    ],
    "correctKey": "A",
    "explanation": "El paciente presenta Desnutrición Grave Edematosa o Kwashiorkor, desencadenada por un déficit proteico severo en presencia de ingesta calórica marginal de carbohidratos. Se caracteriza por edema bilateral maleolar y pretibial (por hipoalbuminemia profunda), alteraciones en cabello y piel (\"dermatosis en copos de pintura\"), cara de luna llena y esteatosis hepática. Según el protocolo de los 10 pasos de la OMS/MINSAL, en la fase de estabilización (días 1 a 7) está TERMINANTEMENTE PROSCRITO el suplemento de hierro (ya que el hierro libre favorece la proliferación bacteriana sistémica y agrava el estrés oxidativo) y la sobrecarga proteico-calórica; se inicia con fórmula láctea F-75 (75 kcal y 0.9 g de proteína por 100 mL).",
    "keyTakeaway": "En Kwashiorkor (desnutrición con edema): NO dar hierro en la fase inicial de estabilización; alimentar con fórmula F-75 para evitar síndrome de realimentación.",
    "distractorRationale": {
      "B": "El marasmo cursa con emaciación extrema (\"piel y huesos\") sin edema ni hipoalbuminemia severa; forzar hierro y proteínas al inicio causa falla cardíaca y muerte.",
      "C": "La hipoalbuminemia en este paciente se debe a carencia nutricional extrema y daño hepático, no a glomerulopatía.",
      "D": "El edema no es de causa cardíaca; restringir líquidos y usar diuréticos precipitaría colapso hipovolémico."
    },
    "officialReference": "Manejo de la Malnutrición Aguda Severa, Guías de la OMS / Ministerio de Salud de El Salvador."
  },
  {
    "id": "enar-ped-009",
    "specialty": "pediatria",
    "topic": "Cirugía Pediátrica / Invaginación Intestinal (Intususcepción)",
    "clinicalVignette": "Lactante de 7 meses de edad previamente sano presenta cuadros paroxísticos y repetitivos de dolor abdominal cólico intenso de 12 horas de evolución: el niño llora inconsolablemente, flexiona los muslos sobre el abdomen y palidece durante los episodios de 15 a 20 minutos, permaneciendo letárgico entre ellos. Ha vomitado en 3 ocasiones y hace una hora evacuó heces oscuras mezcladas con moco y sangre (\"en jalea de grosella\"). Al examen físico: abdomen poco distendido, palpándose una masa alargada, cilíndrica y móvil en hipocondrio y flanco derecho (\"en morcilla\"), con fosa ilíaca derecha vacía (Signo de Dance). ¿Cuál es el estudio diagnóstico de elección y el tratamiento no quirúrgico inicial si no hay peritonitis?",
    "options": [
      {
        "key": "A",
        "text": "Ultrasonografía abdominal (imagen patognomónica en \"diana\" o \"pseudoriñón\") y reducción no quirúrgica mediante enema hidrostático o neumático (con aire o bario) guiado por fluoroscopia o ecografía."
      },
      {
        "key": "B",
        "text": "Colonoscopia diagnóstica total con biopsia mucosa de colon."
      },
      {
        "key": "C",
        "text": "Laparotomía exploradora inmediata en todos los casos sin intentar reducción conservadora."
      },
      {
        "key": "D",
        "text": "Administración de laxantes catárticos y enema evacuante con glicerina."
      }
    ],
    "correctKey": "A",
    "explanation": "La invaginación intestinal o intususcepción (introducción de un segmento proximal del intestino dentro de la luz distal, comúnmente ileocólica) es la causa más común de obstrucción intestinal en lactantes de 3 meses a 3 años. La tríada clásica (dolor cólico paroxístico, masa palpable en morcilla y heces en jalea de grosella) se confirma con Ultrasonido abdominal con sensibilidad >98% (signo de la \"diana\", \"tiro al blanco\" o \"pseudoriñón\"). En ausencia de peritonitis, perforación o choque, el tratamiento de primera línea es la reducción hidrostática (con solución salina) o neumática (con insuflación de aire) controlada por ecografía/fluoroscopia, logrando éxito en más del 85% de los casos sin requerir laparotomía.",
    "keyTakeaway": "En invaginación intestinal: Ultrasonido (signo de la diana) y reducción con enema neumático o hidrostático si no hay signos peritoneales.",
    "distractorRationale": {
      "B": "La colonoscopia no es el método estándar de reducción y tiene alto riesgo de perforar el asa isquémica.",
      "C": "La laparotomía se reserva para fallos de la reducción con enema, perforación o peritonitis establecida.",
      "D": "Los laxantes orales aumentarían el peristaltismo agravando la isquemia y necrosis del asa intususeptada."
    },
    "officialReference": "Nelson: Tratado de Pediatría, 21.ª Ed. / Cirugía Pediátrica, Hospital Nacional de Niños Benjamín Bloom."
  },
  {
    "id": "enar-ped-010",
    "specialty": "pediatria",
    "topic": "Neumología Pediátrica / Crisis Asmática Moderada-Severa",
    "clinicalVignette": "Escolar de 8 años con antecedente de asma bronquial consulta por crisis de disnea y sibilancias de 6 horas de evolución que no cedió tras 2 inhalaciones de salbutamol en casa. Al examen físico: sentado inclinado hacia adelante, habla con frases entrecortadas, FR: 38 rpm, tiraje intercostal y subcostal moderado, aleteo nasal y sibilancias espiratorias e inspiratorias bilaterales audibles. Saturación de oxígeno por pulsoximetría: 90% al aire ambiente. ¿Cuál es el esquema de tratamiento de rescate inmediato según las Guías GINA y protocolos pediátricos?",
    "options": [
      {
        "key": "A",
        "text": "Oxigenoterapia para mantener SatO2 entre 94% y 98%, Salbutamol inhalado (4 a 8 disparos con aerocámara o nebulizado) cada 20 minutos durante la primera hora, asociado a Bromuro de Ipratropio y Corticoides sistémicos orales o IV (Prednisona/Metilprednisolona 1-2 mg/kg) tempranos."
      },
      {
        "key": "B",
        "text": "Ceftriaxona intravenosa más jarabe expectorante con codeína."
      },
      {
        "key": "C",
        "text": "Sedación con diazepam para calmar la ansiedad y nebulización exclusiva con solución salina normal."
      },
      {
        "key": "D",
        "text": "Sulfato de magnesio en aerosol y antihistamínicos orales como monoterapia."
      }
    ],
    "correctKey": "A",
    "explanation": "El paciente presenta una Crisis Asmática Moderada a Severa (dificultad para hablar, tiraje, hipoxemia SatO2 90%). El manejo de rescate normado por GINA incluye: 1) Oxígeno suplementario para lograr SatO2 94-98%, 2) Beta-2 agonista de acción corta (Salbutamol) a dosis frecuentes (4-8 puffs cada 20 min durante la primera hora), 3) Anticolinérgico (Bromuro de Ipratropio) asociado en la primera hora para potenciar la broncodilatación, y 4) Corticoides sistémicos tempranos (Prednisona oral 1-2 mg/kg, máx 40-50 mg), los cuales actúan a las 2-4 horas reduciendo la inflamación de la vía aérea y evitando recaídas tempranas.",
    "keyTakeaway": "Crisis asmática moderada-severa: Oxígeno + Salbutamol + Bromuro de ipratropio frecuente en 1.ª hora + Corticoide sistémico oral precoz.",
    "distractorRationale": {
      "B": "Las crisis de asma son exacerbaciones inflamatorias bronquiales no bacterianas; los antibióticos y sedantes de la tos están desaconsejados.",
      "C": "Los sedantes deprimen la ventilación y están contraindicados en asma.",
      "D": "El sulfato de magnesio solo se administra por vía intravenosa (no inhalada) en crisis graves refractarias a la primera hora."
    },
    "officialReference": "Global Initiative for Asthma (GINA) Guidelines 2024 / Guías Clínicas de Neumología, Hospital Benjamín Bloom."
  },
  {
    "id": "enar-ped-011",
    "specialty": "pediatria",
    "topic": "Nefrología Pediátrica / Síndrome Urémico Hemolítico (SUH)",
    "clinicalVignette": "Preescolar de 3 años es llevado por palidez mucocutánea marcada (\"color céreo\"), decaimiento extremo y orina escasa y oscura (oliguria) de 24 horas de evolución. La madre refiere que hace 5 días presentó un cuadro de diarrea aguda con moco y sangre fresca abundante (disentería) tras ingerir alimentos en un puesto callejero, el cual fue tratado con ciprofloxacino oral. Examen físico: letárgico, palidez terrosa, petequias aisladas en tórax y edema bipalpebral. Laboratorios: Hemoglobina: 6.2 g/dL, Plaquetas: 32,000/mm³, Creatinina: 2.8 mg/dL, Frotis de sangre periférica: abundantes esquistocitos (hematíes fragmentados en \"casco de soldado\") y prueba de Coombs directa negativa. ¿Cuál es el diagnóstico y la regla de oro terapéutica respecto a los antibióticos y la motilidad?",
    "options": [
      {
        "key": "A",
        "text": "Síndrome Urémico Hemolítico (SUH) típico por E. coli enterohemorrágica (O157:H7 productora de toxina Shiga); el tratamiento es de soporte estricto (diálisis si hay anuria/uremia) y los antibióticos y antimotilidad están formalmente CONTRAINDICADOS porque aumentan la liberación de toxina y empeoran el daño renal."
      },
      {
        "key": "B",
        "text": "Púrpura Trombocitopénica Idiopática (PTI); iniciar inmunoglobulina intravenosa y ácido tranexámico."
      },
      {
        "key": "C",
        "text": "Glomerulonefritis postestreptocócica; penicilina benzatínica intramuscular y corticoides orales."
      },
      {
        "key": "D",
        "text": "Dengue grave; bolos de albúmina humana al 20% y ceftriaxona."
      }
    ],
    "correctKey": "A",
    "explanation": "El paciente presenta la tríada clásica patognomónica del Síndrome Urémico Hemolítico (SUH) típico posdiarreico: 1) Anemia hemolítica microangiopática no inmune (Coombs negativo con esquistocitos), 2) Trombocitopenia por consumo, y 3) Lesión renal aguda (oliguria y uremia) tras pródromo de diarrea sanguinolenta por Escherichia coli productora de toxina Shiga (STEC, serotipo O157:H7). Los antibióticos y los fármacos inhibidores de la motilidad (antidiarreicos) están CONTRAINDICADOS de forma absoluta: la lisis bacteriana inducida por antibióticos induce la expresión masiva de fagos líticos y liberación masiva de toxina Shiga al torrente circulatorio, multiplicando el riesgo de necrosis tubular y daño renal irreversible.",
    "keyTakeaway": "Tríada del SUH: Anemia microangiopática (esquistocitos) + Trombocitopenia + Falla Renal. En diarrea por E. coli O157:H7, PROHIBIDOS antibióticos y loperamida.",
    "distractorRationale": {
      "B": "La PTI cursa con plaquetopenia aislada sin anemia hemolítica microangiopática ni falla renal.",
      "C": "La GMN postestreptocócica cursa con hematuria macroscópica tras faringitis/impétigo, pero sin trombocitopenia ni anemia con esquistocitos.",
      "D": "El cuadro de esquistocitosis con daño renal posdisentérico descarta dengue."
    },
    "officialReference": "Nelson: Tratado de Pediatría, 21.ª Ed. / Nefrología Pediátrica, Hospital Bloom."
  },
  {
    "id": "enar-go-003",
    "specialty": "ginecologia_obstetricia",
    "topic": "Obstetricia / Síndrome HELLP y Complicaciones Microangiopáticas",
    "clinicalVignette": "Multigesta de 32 años con embarazo de 33 semanas acude a la emergencia obstétrica por dolor epigástrico intenso y opresivo de 8 horas de evolución irradiado al hipocondrio derecho (\"en barra\"), acompañado de náuseas, malestar general y cefalea. PA: 155/100 mmHg, FC: 88 lpm. A la palpación abdominal: dolor exquisito a la presión en hipocondrio derecho (distensión de la cápsula de Glisson). Laboratorios urgentes: Hemoglobina: 9.2 g/dL, Frotis de sangre periférica: esquistocitos presentes (++), Deshidrogenasa láctica (LDH): 840 UI/L, Bilirrubina indirecta: 1.6 mg/dL, AST (TGO): 210 UI/L, ALT (TGP): 195 UI/L, Plaquetas: 62,000/mm³. ¿Cuál es el diagnóstico preciso y la conducta obstétrica prioritaria?",
    "options": [
      {
        "key": "A",
        "text": "Síndrome HELLP Completo; iniciar neuroprotección materna con Sulfato de Magnesio al 20%, maduración pulmonar fetal e interrupción expedita del embarazo tras estabilización materna."
      },
      {
        "key": "B",
        "text": "Hepatitis viral aguda tipo A; manejo ambulatorio con suero oral y aislamiento entérico."
      },
      {
        "key": "C",
        "text": "Colecistitis aguda litiásica; diferir el parto y programar colecistectomía para el puerperio tardío."
      },
      {
        "key": "D",
        "text": "Púrpura trombocitopénica trombótica; realizar recambio plasmático masivo sin finalizar la gestación."
      }
    ],
    "correctKey": "A",
    "explanation": "La paciente presenta la tríada diagnóstica completa del Síndrome HELLP según los criterios de Tennessee/Mississippi: 1) Hemólisis microangiopática (H: esquistocitos en frotis, LDH >600 UI/L, bilirrubina indirecta elevada), 2) Enzimas hepáticas elevadas (EL: AST/ALT >2 veces el valor normal), y 3) Trombocitopenia (LP: plaquetas <100,000/uL; aquí 62,000/uL). El dolor en epigastrio/hipocondrio derecho advierte distensión capsular con riesgo inminente de hematoma subcapsular hepático o rotura hepática. El manejo prioritario exige neuroprotección con sulfato de magnesio para prevenir convulsiones, control tensional y la interrupción definitiva del embarazo, único tratamiento curativo.",
    "keyTakeaway": "Síndrome HELLP: Hemólisis (LDH >600) + Enzimas hepáticas elevadas (AST/ALT >70) + Plaquetas bajas (<100,000). El tratamiento definitivo es el parto tras estabilización.",
    "distractorRationale": {
      "B": "La hepatitis viral cursa con transaminasas en miles y no produce anemia hemolítica microangiopática ni trombocitopenia severa en el tercer trimestre.",
      "C": "El dolor en epigastrio en preeclampsia es HELLP y distensión de cápsula hepática; confundirlo con colecistitis es un error obstétrico fatal.",
      "D": "La preeclampsia grave con HELLP se resuelve finalizando la gestación; retrasar el parto esperando plasmaféresis eleva la mortalidad materna."
    },
    "officialReference": "Lineamientos Técnicos para la Atención de las Emergencias Obstétricas: Síndrome HELLP, MINSAL El Salvador / ACOG Practice Bulletin No. 222."
  },
  {
    "id": "enar-go-004",
    "specialty": "ginecologia_obstetricia",
    "topic": "Hemorragias del Tercer Trimestre / Desprendimiento Prematuro de Placenta (DPPNI)",
    "clinicalVignette": "Gestante de 36 semanas con antecedente de hipertensión arterial crónica consulta de urgencia por dolor abdominal brusco, intenso y constante de 2 horas de evolución, acompañado de sangrado transvaginal oscuro con coágulos en moderada cantidad. Al examen físico: paciente quejumbrosa, pálida y sudorosa. PA: 145/95 mmHg, FC: 104 lpm. A la palpación abdominal: útero hipertónico, leñoso, no se relaja entre contracciones (\"útero en madera\") y muy doloroso al contacto. La monitorización fetal revela bradicardia fetal persistente a 95 lpm con desaceleraciones tardías profundas (sufrimiento fetal agudo). ¿Cuál es el diagnóstico obstétrico más probable y la conducta inmediata?",
    "options": [
      {
        "key": "A",
        "text": "Placenta previa oclusiva total; realizar examen especular y tacto vaginal intempestivo para confirmar inserción placentaria."
      },
      {
        "key": "B",
        "text": "Desprendimiento Prematuro de Placenta Normoinserta (DPPNI) con compromiso hemodinámico fetal; activar Código Rojo, canalizar dos vías de grueso calibre, preparar hemoderivados y proceder a cesárea de urgencia inmediata."
      },
      {
        "key": "C",
        "text": "Amenaza de parto pretérmino; administrar tocolíticos parenterales (indometacina) y reposo en cama."
      },
      {
        "key": "D",
        "text": "Rotura de vasa previa; manejo expectante hasta el inicio de trabajo de parto espontáneo."
      }
    ],
    "correctKey": "B",
    "explanation": "El cuadro es patognomónico de Desprendimiento Prematuro de Placenta Normoinserta (DPPNI o Abruptio Placentae): sangrado genital oscuro con coágulos, dolor abdominal lancinante continuo, hipertonía uterina sostenida (\"útero en madera\" por tetania miometrial) y sufrimiento fetal agudo severo (bradicardia fetal sostenida por hipoxia isquémica placentaria). El factor de riesgo principal es la hipertensión. La separación placentaria compromete la vida fetal y materna por coagulopatía de consumo (CID por liberación de tromboplastina tisular). La conducta es cesárea de emergencia inmediata con soporte transfusional.",
    "keyTakeaway": "DPPNI: Sangrado oscuro + DOLOR intenso + Útero hipertónico (\"leñoso\") + Sufrimiento fetal. Emergencia quirúrgica: cesárea urgente inmediata.",
    "distractorRationale": {
      "A": "La placenta previa se manifiesta por sangrado rojo rutilante, INDOLORO y con útero blando y relajado; el tacto vaginal a ciegas está contraindicado.",
      "C": "Los tocolíticos están formalmente proscritos ante sangrado del tercer trimestre con hipertonía y sufrimiento fetal.",
      "D": "La rotura de vasa previa ocurre al romperse las membranas ovulares con sangrado de origen fetal que provoca exanguinación y muerte fetal en minutos."
    },
    "officialReference": "Williams Obstetricia, 26.ª Ed. / Lineamientos para la Atención de las Hemorragias Obstétricas del Tercer Trimestre, MINSAL El Salvador."
  },
  {
    "id": "enar-go-005",
    "specialty": "ginecologia_obstetricia",
    "topic": "Parto Pretérmino / Amenaza de Parto Pretérmino y Tocolisis",
    "clinicalVignette": "Primigesta de 29 semanas de gestación por ultrasonido de primer trimestre consulta por dolor cólico suprapúbico y lumbalgia de 4 horas de evolución. Al examen físico: se constatan 3 contracciones uterinas palpables de 35 segundos de duración en 10 minutos. Al examen con espéculo estéril no se observa sangrado ni salida de líquido amniótico. Al tacto vaginal: cuello uterino con borramiento del 70%, dilatación de 2 cm, reblandecido y en posición intermedia, feto en presentación cefálica. Frecuencia cardíaca fetal: 140 lpm con registro cardiotocográfico reactivo. No hay datos de infección urinaria ni corioamnionitis. ¿Cuál es el esquema farmacológico normado para neuroprotección fetal y maduración pulmonar?",
    "options": [
      {
        "key": "A",
        "text": "Tocolisis con Nifedipina oral durante 48 horas + Maduración pulmonar fetal con Betametasona (12 mg IM cada 24 horas por 2 dosis) + Neuroprotección fetal con Sulfato de Magnesio intravenoso por edad gestacional <32 semanas."
      },
      {
        "key": "B",
        "text": "Inducción inmediata del trabajo de parto con oxitocina intravenosa a dosis altas."
      },
      {
        "key": "C",
        "text": "Cesárea de urgencia inmediata sin aplicar corticoides prenatales."
      },
      {
        "key": "D",
        "text": "Administración de terbutalina oral en monoterapia ambulatoria y reposo en casa."
      }
    ],
    "correctKey": "A",
    "explanation": "La paciente presenta una Amenaza de Parto Pretérmino confirmada (dinámica uterina regular con modificaciones cervicales antes de las 37 semanas). El objetivo principal de la tocolisis farmacológica (siendo la Nifedipina oral el fármaco de primera línea por su perfil de eficacia y seguridad) NO es prolongar el embarazo indefinidamente, sino retrasar el parto durante 48 horas para permitir: 1) El curso completo de inductores de madurez pulmonar fetal con Betametasona (12 mg IM cada 24 horas, total 2 dosis) para reducir el síndrome de dificultad respiratoria y hemorragia intraventricular, y 2) Neuroprotección fetal con Sulfato de Magnesio IV (en embarazos <32 semanas) para prevenir parálisis cerebral.",
    "keyTakeaway": "En parto pretérmino <32 sem: Tocolisis con Nifedipina (48h) + Betametasona (2 dosis de 12 mg IM) + Sulfato de magnesio para neuroprotección fetal.",
    "distractorRationale": {
      "B": "Inducir el parto a las 29 semanas sin maduración pulmonar condena al feto a membrana hialina severa y elevada morbimortalidad.",
      "C": "La cesárea no está indicada de emergencia si no hay compromiso fetal ni materno agudo; debe optimizarse la maduración in útero.",
      "D": "La terbutalina oral es ineficaz y la FDA desaconseja los beta-agonistas orales prolongados por cardiotoxicidad materna."
    },
    "officialReference": "Guías de Atención de la Amenaza de Parto Pretérmino, MINSAL El Salvador / ACOG Practice Bulletin No. 234."
  },
  {
    "id": "enar-go-006",
    "specialty": "ginecologia_obstetricia",
    "topic": "Membranas Ovulares / Ruptura Prematura de Membranas Ovulares Pretérmino (RPMOP)",
    "clinicalVignette": "Gestante de 31 semanas consulta a la emergencia obstétrica por pérdida involuntaria de abundante líquido claro con olor a cloro a través de la vagina mientras descansaba hace 3 horas. No refiere dolor abdominal ni fiebre. Al examen con espéculo estéril: visualización directa de salida de líquido amniótico claro a través del orificio cervical externo (maniobra de Valsalva positiva). Prueba de cristalización en helecho del moco cervical: positiva con patrón típico en hojas de helecho. Prueba de nitrazina: viraje a color azul oscuro (pH >7.0). Temperatura: 36.6 °C, PA: 110/70 mmHg, Frecuencia cardíaca fetal: 138 lpm sin taquicardia ni desaceleraciones, tono uterino normal. ¿Cuál es el manejo normado en este embarazo pretérmino lejos del término sin corioamnionitis?",
    "options": [
      {
        "key": "A",
        "text": "Manejo conservador intrahospitalario: Reposo, ciclo de maduración pulmonar con Betametasona (12 mg IM c/24h por 2 dosis), antibioticoterapia profiláctica de latencia (Ampicilina IV + Eritromicina/Azitromicina) por 7 días, y vigilancia estrecha de signos de corioamnionitis; evitando tactos vaginales repetidos."
      },
      {
        "key": "B",
        "text": "Realizar tactos vaginales bimanuales cada 2 horas para evaluar borramiento cervical."
      },
      {
        "key": "C",
        "text": "Inducción inmediata del parto con misoprostol vaginal en las siguientes 2 horas."
      },
      {
        "key": "D",
        "text": "Egreso a domicilio con cita en la consulta externa en 2 semanas."
      }
    ],
    "correctKey": "A",
    "explanation": "En la Ruptura Prematura de Membranas Pretérmino (RPMOP entre 24 y 34 semanas) sin datos de corioamnionitis, desprendimiento placentario ni compromiso fetal, el estándar de oro normado por el MINSAL y el ACOG es el manejo expectante intrahospitalario. Este consiste en: 1) Maduración pulmonar fetal con Betametasona, 2) Antibióticos profilácticos de latencia (esquema de ampicilina y eritromicina/azitromicina) que prolongan el período de latencia y reducen el riesgo de corioamnionitis y sepsis neonatal, 3) Monitoreo riguroso de temperatura, taquicardia fetal y materna, y 4) RESTRICCIÓN ABSOLUTA de tactos vaginales a ciegas (aumentan drásticamente el riesgo de infección ascendente).",
    "keyTakeaway": "RPM pretérmino (24-34 sem): Manejo conservador hospitalario con Betametasona + Antibióticos de latencia; PROHIBIDOS tactos vaginales repetidos.",
    "distractorRationale": {
      "B": "Los tactos vaginales repetidos inoculan flora bacteriana vaginal al interior de la cavidad amniótica precipitando corioamnionitis fulminante.",
      "C": "La inducción inmediata sin maduración pulmonar a las 31 semanas está desaconsejada en ausencia de infección intraamniótica.",
      "D": "El manejo domiciliario es negligente ante el riesgo de prolapso de cordón e infección bacteriana ascendente."
    },
    "officialReference": "Lineamientos Técnicos para la Atención de la Ruptura Prematura de Membranas, MINSAL / ACOG Practice Bulletin No. 217."
  },
  {
    "id": "enar-go-007",
    "specialty": "ginecologia_obstetricia",
    "topic": "Hemorragias del Primer Trimestre / Embarazo Ectópico Tubárico Roto",
    "clinicalVignette": "Mujer de 26 años, nulípara, con antecedente de Enfermedad Pélvica Inflamatoria tratada hace 2 años, acude por dolor abdominal punzante en fosa ilíaca derecha de inicio súbito hace 4 horas, acompañado de mareo intenso y lipotimia. Presenta amenorrea de 7 semanas y manchado hemático transvaginal escaso y oscuro. Al examen físico: palidez mucocutánea marcada, diaforesis, PA: 80/50 mmHg, FC: 124 lpm débil. Abdomen: defensa involuntaria y dolor severo a la descompresión en cuadrantes inferiores. Al tacto bimanual: dolor exquisito e insoportable a la movilización del cuello uterino (Signo de Frenkel positivo) y abombamiento doloroso del fondo de saco de Douglas (\"grito de Douglas\"). Prueba inmunológica de embarazo en orina: positiva. ¿Cuál es el diagnóstico y la conducta terapéutica obligatoria?",
    "options": [
      {
        "key": "A",
        "text": "Embarazo Ectópico Roto con hemoperitoneo masivo y choque hipovolémico; reanimación hemodinámica con cristaloides/sangre y laparotomía exploradora urgente (o laparoscopia) con salpingectomía."
      },
      {
        "key": "B",
        "text": "Amenaza de aborto; reposo absoluto en cama y administración de progesterona oral."
      },
      {
        "key": "C",
        "text": "Quiste de ovario simple no complicado; seguimiento ambulatorio con ultrasonido en 3 meses."
      },
      {
        "key": "D",
        "text": "Manejo médico conservador con dosis única de Metotrexato intramuscular."
      }
    ],
    "correctKey": "A",
    "explanation": "La paciente presenta la presentación clásica de un Embarazo Ectópico Roto complicado con Choque Hemorrágico: dolor pélvico agudo unilateral tras amenorrea, sangrado vaginal escaso (\"en borra de café\"), hipotensión y taquicardia por hemoperitoneo masivo, irritación peritoneal y dolor a la movilización cervical (signo de Frenkel). El metotrexato está ABSOLUTAMENTE CONTRAINDICADO en presencia de inestabilidad hemodinámica, hemoperitoneo o rotura tubárica. La conducta que salva la vida es la reanimación hemodinámica inmediata y el traslado directo a quirófano para laparotomía o laparoscopia de urgencia con salpingectomía del lado afectado.",
    "keyTakeaway": "Embarazo ectópico roto con choque (hipotensión + Frenkel positivo + hemoperitoneo): Quirófano urgente para salpingectomía; el metotrexato está contraindicado.",
    "distractorRationale": {
      "B": "La amenaza de aborto no produce choque hemodinámico ni dolor lancinante unilateral con abdomen agudo quirúrgico.",
      "C": "La prueba de embarazo positiva con choque descarta quiste simple benigno.",
      "D": "El metotrexato requiere estabilidad hemodinámica estricta, saco <3.5 cm y ausencia de líquido libre; darlo en choque roto causa la muerte por exanguinación."
    },
    "officialReference": "Guías de Manejo del Embarazo Ectópico, MINSAL El Salvador / Williams Obstetricia, 26.ª Ed."
  },
  {
    "id": "enar-go-008",
    "specialty": "ginecologia_obstetricia",
    "topic": "Puerperio / Infección Puerperal y Endometritis Posparto",
    "clinicalVignette": "Puerpera de 23 años, en su 4.° día posparto tras parto vaginal que cursó con ruptura de membranas de 22 horas y múltiples tactos vaginales, consulta a la maternidad por escalofríos intensos y fiebre de 39.0 °C. Al examen físico: taquicárdica (FC 112 lpm), PA: 105/65 mmHg. Al examen abdominal: fondo uterino palpable a nivel supraumbilical (subinvolución uterina marcada), blando y sumamente doloroso a la compresión bimanual. A la especuloscopía: loquios abundantes, de color achocolatado, purulentos y con olor fétido intenso. ¿Cuál es el diagnóstico clínico y el régimen antimicrobiano parenteral de primera línea normado?",
    "options": [
      {
        "key": "A",
        "text": "Endometritis puerperal bacteriana; hospitalización inmediata y tratamiento parenteral estándar con Clindamicina (900 mg IV cada 8 horas) más Gentamicina (5 mg/kg/día IV cada 24 horas o 1.5 mg/kg c/8h)."
      },
      {
        "key": "B",
        "text": "Mastitis puerperal puerperal no complicada; dicloxacilina oral ambulatoria."
      },
      {
        "key": "C",
        "text": "Infección urinaria baja; nitrofurantoína oral durante 5 días."
      },
      {
        "key": "D",
        "text": "Loquios fisiológicos de puerperio temprano; analgesia con paracetamol y egreso."
      }
    ],
    "correctKey": "A",
    "explanation": "La Endometritis Puerperal es la causa más común de fiebre puerperal (definida por temperatura ≥38.0 °C en dos tomas separadas por 6 horas excluyendo las primeras 24 horas del parto). Es una infección polimicrobiana mixta ascendente (estreptococos aerobios y anaerobios, gramnegativos entéricos y bacteroides) favorecida por trabajo de parto prolongado y RPM. El régimen de antibióticos parenterales de primera línea con mayor tasa de curación clínica (90-95%) es la combinación de Clindamicina (cubre anaerobios y grampositivos) más Gentamicina (cubre bacilos gramnegativos entéricos), mantenido hasta que la paciente cumpla 24 a 48 horas afebril y asintomática.",
    "keyTakeaway": "Endometritis posparto (fiebre + útero subinvolucionado doloroso + loquios fétidos): tratamiento parenteral de 1.ª línea = Clindamicina + Gentamicina IV.",
    "distractorRationale": {
      "B": "Las mamas no presentan eritema ni dolor focal; el foco infeccioso es uterino.",
      "C": "El útero doloroso subinvolucionado y los loquios fétidos purulentos confirman endometritis, no cistitis aislada.",
      "D": "La presencia de fiebre alta con loquios fétidos purulentos es francamente patológica y requiere tratamiento antibiótico parenteral."
    },
    "officialReference": "Lineamientos Técnicos para la Prevención y Manejo de las Infecciones Puerperales, MINSAL El Salvador / CDC Guidelines."
  },
  {
    "id": "enar-go-009",
    "specialty": "ginecologia_obstetricia",
    "topic": "Endocrinología Obstétrica / Diabetes Mellitus Gestacional (Tamizaje y Diagnóstico)",
    "clinicalVignette": "Mujer de 28 años, segundigesta con antecedentes de hijo previo con macrosomía (peso al nacer de 4,200 g), cursa actualmente con embarazo de 26 semanas. En su control prenatal rutinario se solicita la Prueba de Tolerancia a la Glucosa Oral (PTGO) con carga de 75 gramos de glucosa anhidra según los lineamientos técnicos del MINSAL y criterios IADPSG/ALAD. Los resultados reportan: Glucemia en ayunas: 96 mg/dL; Glucemia a la hora: 172 mg/dL; Glucemia a las 2 horas: 142 mg/dL. ¿Cuál es el diagnóstico correcto y la intervención terapéutica inicial?",
    "options": [
      {
        "key": "A",
        "text": "Diabetes Gestacional confirmada (cumple criterio de glucemia en ayunas ≥92 mg/dL); inicio inmediato de Terapia Nutricional Médica individualizada, programa de actividad física y automonitoreo glucémico capilar."
      },
      {
        "key": "B",
        "text": "Prueba completamente normal; se requieren al menos dos valores alterados para diagnosticar diabetes gestacional."
      },
      {
        "key": "C",
        "text": "Diabetes pregestacional tipo 1; inicio obligatorio de insulina glargina a dosis altas."
      },
      {
        "key": "D",
        "text": "Intolerancia transitoria a la glucosa; repetir la prueba con carga de 100 g al término de la gestación."
      }
    ],
    "correctKey": "A",
    "explanation": "Según la Guía Clínica del MINSAL, ALAD e IADPSG (estrategia de un solo paso con 75 g entre las semanas 24 y 28 de gestación), se diagnostica Diabetes Gestacional si UN SOLO VALOR iguala o supera los siguientes umbrales: 1) Ayunas: ≥92 mg/dL, 2) 1 hora: ≥180 mg/dL, 3) 2 horas: ≥153 mg/dL. La paciente presenta una glucemia basal de 96 mg/dL, lo cual confirma el diagnóstico. El tratamiento de primera línea es la Terapia Médica Nutricional (dieta fraccionada con carbohidratos complejos de bajo índice glucémico) y ejercicio moderado (caminata 30 min/día); solo si no se alcanzan las metas glucémicas (ayuno <95 y 1h posprandial <140 mg/dL) se inicia insulina.",
    "keyTakeaway": "Tamizaje de Diabetes Gestacional (PTGO 75g a 24-28 sem): Un solo valor alterado confirma diagnóstico (Ayunas ≥92, 1h ≥180, 2h ≥153 mg/dL). Primera línea: Dieta y ejercicio.",
    "distractorRationale": {
      "B": "El criterio de dos valores alterados corresponde a la técnica antigua de Carpenter-Coustan de dos pasos con 100g, superada en la norma del MINSAL.",
      "C": "La diabetes pregestacional se diagnostica en el primer trimestre con glucemias ≥126 mg/dL o HbA1c ≥6.5%.",
      "D": "La prueba de 75g ya confirmó el diagnóstico; diferir el manejo aumenta la macrosomía y trauma obstétrico."
    },
    "officialReference": "Lineamientos Técnicos para el Diagnóstico y Manejo de la Diabetes Gestacional, MINSAL El Salvador / Guías ALAD."
  },
  {
    "id": "enar-go-010",
    "specialty": "ginecologia_obstetricia",
    "topic": "Atención del Parto / Manejo Activo del Tercer Período del Parto (MATEP)",
    "clinicalVignette": "En la sala de partos de un hospital de maternidad, una primigesta de 21 años acaba de expulsar por vía vaginal un recién nacido vigoroso de término. El médico residente a cargo del expulsivo se prepara para ejecutar el Manejo Activo del Tercer Período del Parto (MATEP) conforme a las directrices de la OMS, FIGO y la Ley Nacer con Cariño del MINSAL. ¿Cuál es la secuencia protocolizada correcta y de mayor impacto preventivo contra la hemorragia posparto?",
    "options": [
      {
        "key": "A",
        "text": "1) Administración profiláctica de Oxitocina (10 UI intramuscular) inmediatamente tras la salida del hombro anterior del feto; 2) Tracción controlada del cordón umbilical con contratracción suprapúbica (maniobra de Brandt-Andrews) durante la contracción uterina; y 3) Masaje uterino transabdominal tras la expulsión completa de la placenta."
      },
      {
        "key": "B",
        "text": "Tracción violenta y continua del cordón sin esperar contracción ni sostener el útero suprapúbico."
      },
      {
        "key": "C",
        "text": "Extracción manual rutinaria de la placenta introduciendo la mano enguantada en la cavidad uterina en todos los partos."
      },
      {
        "key": "D",
        "text": "Esperar pasivamente durante 90 minutos sin administrar ningún medicamento hasta que la placenta caiga por gravedad."
      }
    ],
    "correctKey": "A",
    "explanation": "El Manejo Activo del Tercer Período del Parto (MATEP) es la intervención basada en evidencia más costo-efectiva para prevenir la atonía uterina y la hemorragia posparto primaria, reduciendo su incidencia en más del 60%. Consta de tres componentes estandarizados: 1) Administración de un uterotónico de primera línea: Oxitocina 10 UI IM tras la salida del hombro anterior fetal (o tras el nacimiento completo del feto); 2) Tracción suave y sostenida del cordón umbilical con la maniobra de Brandt-Andrews (contratracción firme suprapúbica hacia arriba para estabilizar el fondo y evitar la temida inversión uterina); y 3) Masaje uterino abdominal posterior a la salida placentaria verificando el globo de seguridad de Pinard.",
    "keyTakeaway": "MATEP en 3 pasos: 1) Oxitocina 10 UI IM (hombro anterior), 2) Tracción controlada del cordón con contratracción suprapúbica (Brandt-Andrews), y 3) Masaje uterino.",
    "distractorRationale": {
      "B": "La tracción forzada del cordón umbilical sin contratracción es la causa iatrogénica principal de Inversión Uterina Aguda letal.",
      "C": "La extracción manual de rutina es traumática, dolorosa y eleva el riesgo de endometritis grave y perforación.",
      "D": "El alumbramiento espontáneo pasivo prolongado duplica el sangrado y la incidencia de hemorragia posparto."
    },
    "officialReference": "Norma Técnica para la Atención del Parto y Puerperio, MINSAL El Salvador / FIGO Recommendations on PPH."
  },
  {
    "id": "enar-go-011",
    "specialty": "ginecologia_obstetricia",
    "topic": "Oncología Ginecológica / Tamizaje del Cáncer Cervicouterino y Prueba de VPH",
    "clinicalVignette": "Mujer de 34 años, con vida sexual activa y 2 partos previos, consulta a la UCSF para su tamizaje preventivo anual. Se le realiza citología cervical (Papanicolaou) y prueba molecular de detección de ADN del Virus del Papiloma Humano (VPH). El informe de patología reporta: Citología cervical: Lesión Intraepitelial Escamosa de Alto Grado (LIE de Alto Grado / NIC 2-3); Prueba molecular de VPH: Positiva para genotipo 16 de alto riesgo oncogénico. Según la Guía Clínica Oficial del MINSAL para la Detección Precoz del Cáncer Cervicouterino, ¿cuál es la conducta inmediata que debe seguir el médico?",
    "options": [
      {
        "key": "A",
        "text": "Referencia inmediata a la Clínica de Colposcopia para examen colposcópico del cuello uterino y toma de biopsia dirigida de zonas sospechosas acetoblancas."
      },
      {
        "key": "B",
        "text": "Repetir únicamente el Papanicolaou en 12 meses sin derivación."
      },
      {
        "key": "C",
        "text": "Tratamiento empírico con óvulos vaginales de metronidazol y nistatina por 10 días."
      },
      {
        "key": "D",
        "text": "Programación directa para histerectomía abdominal radical sin biopsia previa."
      }
    ],
    "correctKey": "A",
    "explanation": "El hallazgo de una Lesión Intraepitelial Escamosa de Alto Grado (LIE-AG o HSIL) en la citología, reforzado por la detección del genotipo 16 de VPH (el más oncogénico responsable del 60% de los carcinomas epidermoides cervicales), conlleva un riesgo elevado de neoplasia intraepitelial avanzada (NIC 2/3) o microinvasión oculta. Según los lineamientos del MINSAL y la ASCCP, la conducta mandatoria e inmediata es la derivación a la Clínica de Displasias / Colposcopia para colposcopia diagnóstica formal y Biopsia Dirigida; no es admisible diferir el estudio ni operar a ciegas sin diagnóstico histopatológico confirmatorio.",
    "keyTakeaway": "Ante Papanicolaou con LIE de Alto Grado o VPH 16/18 positivo: conducta obligatoria = Colposcopia diagnóstica inmediata con biopsia dirigida.",
    "distractorRationale": {
      "B": "Esperar un año ante una lesión de alto grado permite la progresión a cáncer invasor con compromiso parametrial.",
      "C": "Los óvulos antimicrobianos no revierten las displasias epiteliales neoplásicas virales.",
      "D": "La histerectomía radical exige confirmación histopatológica por biopsia y conización diagnóstica previa; no se indica a ciegas con citología."
    },
    "officialReference": "Lineamientos Técnicos para la Prevención y Control del Cáncer Cervicouterino, MINSAL El Salvador / ASCCP Guidelines."
  },
  {
    "id": "enar-mf-001",
    "specialty": "medicina_familiar",
    "topic": "Medicina Familiar / Estimación del Riesgo Cardiovascular Global (Iniciativa HEARTS)",
    "clinicalVignette": "Hombre de 54 años, fumador de 15 cigarrillos al día, consulta a la UCSF para control general. Asintomático. Al examen físico: PA promedio de dos tomas: 152/94 mmHg, IMC: 29.8 kg/m². Laboratorios: Colesterol total: 240 mg/dL, Colesterol HDL: 36 mg/dL, Colesterol LDL: 162 mg/dL, Glucosa en ayunas: 104 mg/dL. Al cruzar sus datos en las tablas calibradas de la Iniciativa HEARTS (OPS/OMS) adaptadas por el MINSAL, su Riesgo Cardiovascular Global a 10 años se calcula en 24% (Categoría de Riesgo Alto). ¿Cuál es la conducta terapéutica integral según los protocolos HEARTS?",
    "options": [
      {
        "key": "A",
        "text": "Iniciar inmediatamente Terapia con Estatinas de Alta Potencia (Atorvastatina 40 a 80 mg/día) para reducir c-LDL ≥50% y alcanzar meta <70 mg/dL, asociar antihipertensivo combinado de primera línea para meta PA <130/80 mmHg y plan intensivo de cesación tabáquica."
      },
      {
        "key": "B",
        "text": "Recomendar únicamente dieta baja en grasas y ejercicio por 12 meses antes de considerar cualquier medicamento."
      },
      {
        "key": "C",
        "text": "Indicar aspirina en altas dosis (325 mg/día) y diferir el control de la presión arterial."
      },
      {
        "key": "D",
        "text": "Iniciar fibratos en monoterapia y suspender el consumo de carnes rojas sin tocar la presión arterial."
      }
    ],
    "correctKey": "A",
    "explanation": "La Iniciativa HEARTS en Las Américas (promovida por la OPS/OMS y adoptada oficialmente por el MINSAL) enfatiza el tratamiento integral del riesgo global. Los pacientes en categoría de Riesgo Cardiovascular Alto (20% a 29% a 10 años) tienen indicación formal y prioritaria de: 1) Estatinas de alta potencia (Atorvastatina 40-80 mg/día o Rosuvastatina 20-40 mg/día) con meta de reducción del LDL en ≥50% y valor absoluto <70 mg/dL, 2) Terapia combinada antihipertensiva (IECA/ARA-II + Calcioantagonista o tiazida) para meta estricta de PA <130/80 mmHg, y 3) Cesación tabáquica inmediata estructurada.",
    "keyTakeaway": "En Riesgo Cardiovascular Alto (HEARTS ≥20%): Estatinas de alta potencia obligatorias (Atorvastatina 40-80 mg) + meta PA <130/80 mmHg + cese de tabaco.",
    "distractorRationale": {
      "B": "En riesgo alto (>20%), diferir los fármacos durante 1 año duplica la incidencia de infartos de miocardio y ACV prevenibles.",
      "C": "La aspirina no reemplaza el tratamiento antihipertensivo ni la terapia hipolipemiante intensiva.",
      "D": "El objetivo principal de prevención aterosclerótica es la reducción del c-LDL con estatinas, no los fibratos en monoterapia."
    },
    "officialReference": "Iniciativa HEARTS en Las Américas: Guía Clínica para el Manejo del Riesgo Cardiovascular en la Atención Primaria, OPS/OMS / MINSAL."
  },
  {
    "id": "enar-mf-002",
    "specialty": "medicina_familiar",
    "topic": "Medicina Familiar / Manejo de Pie Diabético en el Primer Nivel (Clasificación de Wagner)",
    "clinicalVignette": "Paciente masculino de 62 años con diabetes mellitus tipo 2 de 15 años de evolución consulta a la UCSF por una lesión ulcerosa en la región plantar de la cabeza del primer metatarsiano del pie derecho de 2 semanas de evolución. Al examen físico: pérdida de la sensibilidad protectora al monofilamento de Semmes-Weinstein (10 g) en 6 de 10 puntos (polineuropatía diabética). La úlcera mide 2.5 × 2.0 cm, tiene bordes hiperqueratósicos, fondo eritematoso profundo que compromete tendón y ligamento, con escasa secreción seropurulenta, sin exposición ósea, sin eritema perilesional >2 cm y pulsos pedio y tibial posterior palpables. Según la Clasificación de Wagner, ¿a qué grado corresponde y cuál es el plan de manejo ambulatorio?",
    "options": [
      {
        "key": "A",
        "text": "Grado 2 de Wagner (úlcera profunda que penetra a tendón/ligamento o cápsula articular sin absceso ni osteomielitis); desbridamiento quirúrgico de callosidad y tejido desvitalizado, curación húmeda, descarga absoluta de la presión plantar (bota o calzado de descarga), antibiótico oral dirigido y optimización glucémica."
      },
      {
        "key": "B",
        "text": "Grado 0 de Wagner; únicamente lubricación con cremas emolientes."
      },
      {
        "key": "C",
        "text": "Grado 4 de Wagner; derivar de urgencia para amputación infracondílea mayor del miembro inferior."
      },
      {
        "key": "D",
        "text": "Indicar reposo en cama y apósitos con azúcar en polvo casera."
      }
    ],
    "correctKey": "A",
    "explanation": "En la Clasificación de Wagner para Pie Diabético: Grado 0: pie en riesgo sin lesión activa; Grado 1: úlcera superficial que no compromete tejido celular subcutáneo; Grado 2: úlcera profunda que llega a tendón, ligamento o cápsula articular, pero sin absceso profundo ni compromiso óseo; Grado 3: úlcera profunda con osteomielitis o absceso; Grado 4: gangrena localizada (dedo o talón); Grado 5: gangrena extensa de todo el pie. El manejo en el primer nivel exige los 4 pilares: 1) Desbridamiento cortante de bordes necróticos, 2) Descarga de presión (el paso más importante para permitir la cicatrización), 3) Curación fisiológica húmeda con apósitos hidrocoloides/hidrogel, y 4) Antibioticoterapia dirigida.",
    "keyTakeaway": "Wagner Grado 2: úlcera profunda a tendón sin osteomielitis. El tratamiento exige desbridamiento, descarga mecánica de presión y control metabólico.",
    "distractorRationale": {
      "B": "El grado 0 es pie sin solución de continuidad cutánea; este paciente tiene una úlcera profunda que llega a tendón.",
      "C": "El grado 4 es gangrena húmeda o seca; no hay necrosis tisular que justifique amputación en este estadio.",
      "D": "El uso de remedios caseros como azúcar o café está proscrito por aumentar la colonización bacteriana severa y sepsis."
    },
    "officialReference": "Guía Clínica para la Prevención, Diagnóstico y Tratamiento del Pie Diabético, MINSAL El Salvador / IWGDF Guidelines 2023."
  },
  {
    "id": "enar-mf-003",
    "specialty": "medicina_familiar",
    "topic": "Salud Materno-Infantil / Ley Nacer con Cariño (D.L. 143 de El Salvador)",
    "clinicalVignette": "Una mujer de 24 años en trabajo de parto activo ingresa a la sala de expulsivo de un hospital de la red pública. El personal de enfermería le informa que su esposo no puede ingresar a la sala y que debe colocarse en posición de litotomía supina obligatoria, además de proceder a realizar tricotomía púbica (afeitado) y enema evacuante por rutina del servicio. Según las disposiciones obligatorias y vinculantes de la Ley Nacer con Cariño para un Parto Respetado (Decreto Legislativo n.° 143 de El Salvador), ¿cuáles de estas prácticas vulneran los derechos legales de la gestante?",
    "options": [
      {
        "key": "A",
        "text": "Todas vulneran la ley: la gestante tiene derecho inalienable al acompañamiento continuo por persona de su elección, a la libre movilidad y posturas de parto (parto vertical), estando expresamente prohibidas la tricotomía, enemas de rutina y maniobras violentas (Kristeller)."
      },
      {
        "key": "B",
        "text": "Ninguna vulnera la ley, ya que los protocolos de higiene hospitalaria prevalecen sobre las preferencias de la mujer."
      },
      {
        "key": "C",
        "text": "Únicamente el acompañamiento del esposo está protegido; el enema y el rasurado perineal son de orden médico obligatorio."
      },
      {
        "key": "D",
        "text": "La ley solo aplica en clínicas privadas con fines de lucro y no en el Sistema Nacional Integrado de Salud."
      }
    ],
    "correctKey": "A",
    "explanation": "La Ley Nacer con Cariño para un Parto Respetado y un Cuidado Cariñoso y Sensible para el Recién Nacido (Decreto Legislativo n.° 143) es de orden público y cumplimiento obligatorio en todo El Salvador (sector público y privado). Establece como derechos inalienables de la mujer: 1) Estar acompañada por la persona de su elección durante el trabajo de parto, parto y posparto, 2) Libertad de movimiento y elección de posiciones para el parto (parto vertical, cuclillas o semisentada), 3) Prohibición explícita de procedimientos rutinarios no avalados por evidencia (tricotomía púbica, enemas evacuantes y episiotomías de rutina), y 4) Contacto piel con piel ininterrumpido en la primera hora (\"Hora de Oro\") con pinzamiento oportuno del cordón.",
    "keyTakeaway": "Ley Nacer con Cariño: Derecho al acompañamiento continuo, libertad de posturas, apego precoz piel con piel y prohibición de enemas/tricotomía rutinarias.",
    "distractorRationale": {
      "B": "La tricotomía y los enemas son prácticas obsoletas demostradas por la OMS como generadoras de trauma e infecciones, prohibidas por ley.",
      "C": "La prohibición de enemas y tricotomía está contemplada expresamente en la legislación nacional.",
      "D": "La ley es vinculante para todos los hospitales y establecimientos del Sistema Nacional Integrado de Salud (MINSAL, ISSS, Sanidad Militar y privados)."
    },
    "officialReference": "Ley Nacer con Cariño para un Parto Respetado y un Cuidado Cariñoso y Sensible para el Recién Nacido, Decreto Legislativo n.° 143, República de El Salvador."
  },
  {
    "id": "enar-mf-004",
    "specialty": "medicina_familiar",
    "topic": "Atención Familiar / Herramientas de Salud Familiar: Genograma y APGAR Familiar",
    "clinicalVignette": "En la consulta de Medicina Familiar de la UCSF, se atiende a una familia nuclear compuesta por padre (48 años con diabetes descompensada), madre (46 años con cefalea tensional recurrente) y dos hijos adolescentes con bajo rendimiento escolar y conductas de rebeldía. El médico familiar aplica el Cuestionario de APGAR Familiar de Smilkstein a los miembros de la familia para evaluar la funcionalidad del sistema familiar, obteniendo un puntaje global de 3 puntos. Adicionalmente, elabora un Genograma estructural. ¿Cuál es la interpretación diagnóstica de este puntaje y la utilidad primordial del genograma?",
    "options": [
      {
        "key": "A",
        "text": "Disfunción Familiar Severa (puntaje ≤3 puntos en APGAR); el genograma de tres generaciones permite mapear la estructura biológica y legal, enfermedades hereditarias y patrones relacionales conflictivos o de apego."
      },
      {
        "key": "B",
        "text": "Familia Altamente Funcional (puntaje de 3 puntos traduce bajo estrés en APGAR)."
      },
      {
        "key": "C",
        "text": "Disfunción Familiar Leve exclusivamente; no requiere intervención comunitaria."
      },
      {
        "key": "D",
        "text": "El APGAR familiar evalúa la vitalidad del recién nacido al minuto y a los 5 minutos de vida."
      }
    ],
    "correctKey": "A",
    "explanation": "El APGAR Familiar de Smilkstein es un instrumento validado que evalúa la percepción individual del funcionamiento familiar en cinco componentes: Adaptabilidad, Participación, Gradiente de crecimiento, Afecto y Resolución. Su escala de 0 a 10 puntos clasifica: 7 a 10 puntos = Familia Funcional; 4 a 6 puntos = Disfunción Familiar Leve; y 0 a 3 puntos = Disfunción Familiar Severa. El puntaje de 3 puntos traduce una severa crisis en los recursos afectivos y de apoyo mutuo que influye en las comorbilidades somáticas de sus miembros. El Genograma de al menos 3 generaciones es la herramienta por excelencia para visualizar patrones intergeneracionales de enfermedad y vínculos afectivos.",
    "keyTakeaway": "APGAR Familiar de Smilkstein: Funcional 7-10, Disfunción Leve 4-6, Severa ≤3. El genograma mapea 3 generaciones de estructura, patología y relaciones.",
    "distractorRationale": {
      "B": "Un puntaje de 3 puntos es el rango más grave de disfunción familiar.",
      "C": "La disfunción leve corresponde a puntajes de 4 a 6 puntos.",
      "D": "El APGAR familiar de Smilkstein es una herramienta de medicina familiar, no debe confundirse con la escala de Apgar neonatal de Virginia Apgar."
    },
    "officialReference": "Manual de Medicina Familiar y Atención Primaria en Salud, MINSAL / Universidad de El Salvador."
  },
  {
    "id": "enar-mf-005",
    "specialty": "medicina_familiar",
    "topic": "Salud Mental en APS / Abordaje del Episodio Depresivo Mayor (Guías mhGAP)",
    "clinicalVignette": "Mujer de 38 años, madre soltera y trabajadora maquiladora, consulta a la UCSF por astenia intensa, dolores musculares difusos y pérdida de peso de 6 semanas de evolución. Refiere ánimo triste la mayor parte del día, pérdida total de interés o placer por sus actividades habituales (anhedonia), llanto fácil, insomnio de mantenimiento y sentimientos persistentes de inutilidad y culpa. Se descartó hipotiroidismo y anemia. Cumple criterios del DSM-5 y guía mhGAP de la OMS/MINSAL para Episodio Depresivo Mayor. ¿Cuál es el tratamiento psicofarmacológico de primera línea en el primer nivel de atención por su perfil de eficacia y seguridad?",
    "options": [
      {
        "key": "A",
        "text": "Inhibidor Selectivo de la Recaptación de Serotonina (ISRS) como Sertralina (50 a 100 mg/día) o Escitalopram (10 a 20 mg/día), asociado a intervenciones psicosociales básicas y psicoeducación."
      },
      {
        "key": "B",
        "text": "Amitriptilina a dosis altas (150 mg/día) en monoterapia rápida."
      },
      {
        "key": "C",
        "text": "Benzodiacepinas en monoterapia (diazepam 10 mg tres veces al día) de forma indefinida."
      },
      {
        "key": "D",
        "text": "Electrochoque ambulatorio de primera intención en la UCSF."
      }
    ],
    "correctKey": "A",
    "explanation": "Según la Guía de Intervención mhGAP de la OMS/OPS y los protocolos de Salud Mental del MINSAL, el tratamiento de primera línea para el Episodio Depresivo Mayor moderado a grave en el primer nivel de atención son los Inhibidores Selectivos de la Recaptación de Serotonina (ISRS: Sertralina, Fluoxetina o Escitalopram). Tienen una eficacia antidepresiva comparable a los tricíclicos antiguos pero con un perfil de seguridad muy superior, bajo riesgo de letalidad en sobredosis y ausencia de efectos anticolinérgicos y cardiotóxicos. La respuesta clínica inicial suele manifestarse a las 2 a 4 semanas de tratamiento continuo.",
    "keyTakeaway": "Primera línea farmacológica en depresión mayor en el primer nivel: ISRS (Sertralina o Escitalopram) + Psicoeducación; evitar benzodiacepinas en monoterapia.",
    "distractorRationale": {
      "B": "Los antidepresivos tricíclicos (amitriptilina) tienen alto riesgo de arritmias ventriculares letales en sobredosis y marcados efectos adversos anticolinérgicos.",
      "C": "Las benzodiacepinas no tienen efecto antidepresivo y generan dependencia, tolerancia y deterioro cognitivo.",
      "D": "La terapia electroconvulsiva es de manejo psiquiátrico hospitalario de tercera línea para depresión refractaria o catatónica."
    },
    "officialReference": "Guía de Intervención mhGAP para los Trastornos Mentales en el Primer Nivel, OMS/OPS / Política Nacional de Salud Mental, MINSAL El Salvador."
  },
  {
    "id": "enar-mf-006",
    "specialty": "medicina_familiar",
    "topic": "Medicina Preventiva / Tamizaje del Cáncer Colorrectal en Atención Primaria",
    "clinicalVignette": "Hombre de 50 años, asintomático, acude a la UCSF para chequeo preventivo rutinario de salud del adulto. No tiene antecedentes familiares de pólipos ni cáncer colorrectal, ni antecedentes personales de enfermedad inflamatoria intestinal (Riesgo Promedio para Cáncer Colorrectal). Pregunta al médico familiar sobre las recomendaciones oficiales de tamizaje para detectar pólipos o neoplasias tempranas. Según las guías del MINSAL y USPSTF, ¿cuál es la estrategia de tamizaje más accesible y recomendada para iniciar en este paciente?",
    "options": [
      {
        "key": "A",
        "text": "Prueba inmunoquímica fecal anual para detección de sangre oculta en heces (FIT / SOH-I) O Colonoscopia cada 10 años, iniciando a partir de los 45 a 50 años en población con riesgo promedio."
      },
      {
        "key": "B",
        "text": "Tomografía por emisión de positrones (PET-CT) anual de rutina."
      },
      {
        "key": "C",
        "text": "No realizar ningún tamizaje hasta que el paciente presente rectorragia evidente y pérdida de peso."
      },
      {
        "key": "D",
        "text": "Determinación seriada de antígeno carcinoembrionario (CEA) cada 3 meses."
      }
    ],
    "correctKey": "A",
    "explanation": "El tamizaje del cáncer colorrectal en adultos con riesgo promedio está indicado a partir de los 45 o 50 años de edad. En el primer nivel de atención de salud pública, la estrategia más accesible y costo-efectiva es la Prueba Inmunoquímica Fecal (FIT) anual para sangre oculta en heces (altamente específica para hemoglobina humana del colon inferior y que no requiere restricciones dietéticas), o la Colonoscopia completa cada 10 años en centros que disponen de endoscopia. Si una prueba FIT resulta positiva, es mandatorio realizar una colonoscopia diagnóstica.",
    "keyTakeaway": "Tamizaje de Cáncer Colorrectal en riesgo promedio: Sangre Oculta en Heces Inmunoquímica (FIT) anual o Colonoscopia cada 10 años desde los 45-50 años.",
    "distractorRationale": {
      "B": "El PET-CT no es un estudio de tamizaje poblacional; es de alto costo y con exposición a radiación innecesaria.",
      "C": "Esperar síntomas de alarma como sangrado visible o pérdida de peso significa diagnosticar el cáncer en etapas avanzadas o metastásicas.",
      "D": "El antígeno carcinoembrionario (CEA) carece de sensibilidad y especificidad para tamizaje; solo se utiliza para seguimiento de recurrencias tras cirugía."
    },
    "officialReference": "Guía Clínica de Prevención y Detección Temprana del Cáncer Colorrectal, MINSAL / U.S. Preventive Services Task Force (USPSTF)."
  },
  {
    "id": "enar-sp-003",
    "specialty": "salud_publica",
    "topic": "Vigilancia Sanitaria / Sistema VIGEPES y Eventos de Notificación Inmediata",
    "clinicalVignette": "En la Unidad Comunitaria de Salud Familiar (UCSF) de un municipio costero, el médico de consulta externa atiende a un niño de 4 años no vacunado que presenta fiebre, tos, coriza, conjuntivitis con fotofobia y un exantema maculopapular eritematoso confluente que inició detrás de las orejas y en la cara, extendiéndose en sentido cefalocaudal al tronco y extremidades. En la mucosa oral se observan manchas blanquecinas diminutas rodeadas de halo rojo frente a los molares (Manchas de Koplik), altamente sugestivas de Sarampión. Según la Norma Técnica del Sistema de Vigilancia Epidemiológica de El Salvador (VIGEPES), ¿cuál es el plazo de notificación obligatoria y la acción de bloqueo inicial?",
    "options": [
      {
        "key": "A",
        "text": "Notificación de Alerta Inmediata en menos de 24 horas a la Dirección de Vigilancia Sanitaria / SIBASI, toma inmediata de muestra serológica/hisopado nasofaríngeo e investigación de campo y bloqueo vacunal en 48 horas."
      },
      {
        "key": "B",
        "text": "Notificación mensual consolidada en el informe epidemiológico regular."
      },
      {
        "key": "C",
        "text": "Esperar a que se presenten al menos 10 casos similares en la comunidad antes de emitir cualquier reporte."
      },
      {
        "key": "D",
        "text": "Manejo confidencial exclusivo en el expediente clínico sin reportar a las autoridades del MINSAL."
      }
    ],
    "correctKey": "A",
    "explanation": "El Sarampión, la Rubéola, la Parálisis Flácida Aguda (sospecha de poliomielitis), el Cólera, la Rabia humana y la Muerte Materna son Eventos de Notificación Inmediata Obligatoria dentro de las primeras 24 horas en el sistema VIGEPES del MINSAL. Ante un caso sospechoso de sarampión (enfermedad febril eruptiva con manchas de Koplik), no se debe esperar confirmación de laboratorio para iniciar las acciones de salud pública: notificación inmediata vía telefónica y electrónica, llenado de la ficha epidemiológica, aislamiento del paciente y búsqueda activa comunitaria con bloqueo vacunal con SPR a los contactos en un radio de 48 horas.",
    "keyTakeaway": "Enfermedades de notificación inmediata (<24h) en VIGEPES: Sarampión, Rubéola, Parálisis Flácida Aguda, Cólera, Rabia humana y Muerte materna.",
    "distractorRationale": {
      "B": "El sarampión tiene un índice reproductivo básico (R0) de 12 a 18; esperar al informe mensual provocaría un brote masivo incontrolable.",
      "C": "Un solo caso sospechoso de sarampión constituye una alerta epidemiológica nacional.",
      "D": "Ocultar una enfermedad de notificación obligatoria viola el Código de Salud de El Salvador y genera responsabilidad legal y sanitaria."
    },
    "officialReference": "Norma Técnica del Sistema de Vigilancia Epidemiológica (VIGEPES), Dirección de Vigilancia Sanitaria, MINSAL El Salvador."
  },
  {
    "id": "enar-sp-004",
    "specialty": "salud_publica",
    "topic": "Epidemiología / Índices Entomológicos de Aedes aegypti y Control del Dengue",
    "clinicalVignette": "En una jornada de vigilancia entomológica comunitaria coordinada por los Equipos Comunitarios de Salud Familiar (ECOS) en una colonia urbana de San Salvador, se inspeccionan 400 viviendas, encontrándose que en 48 de ellas existen pilas, barriles o recipientes con presencia confirmada de larvas o pupas de Aedes aegypti. ¿Cuál es el Índice Larvario de Vivienda (Índice Aédico) resultante y en qué nivel de riesgo epidemiológico clasifica el MINSAL a esta comunidad?",
    "options": [
      {
        "key": "A",
        "text": "Índice Larvario de 12% (Nivel de Alto Riesgo o Emergencia Epidémica, al ser ≥10%); se requiere intervención vectorial intensiva inmediata: abatización, destrucción masiva de criaderos y nebulización espacial."
      },
      {
        "key": "B",
        "text": "Índice Larvario de 4% (Nivel de Seguridad o Bajo Riesgo)."
      },
      {
        "key": "C",
        "text": "Índice Larvario de 48% (Nivel de Desastre Sanitario)."
      },
      {
        "key": "D",
        "text": "Índice Larvario de 0.12% (Nivel Óptimo que no requiere ninguna intervención)."
      }
    ],
    "correctKey": "A",
    "explanation": "El Índice Larvario de Vivienda o Índice Aédico se calcula como: (Número de viviendas con larvas de Aedes / Total de viviendas inspeccionadas) × 100. En este caso: (48 / 400) × 100 = 12.0%. La estratificación de riesgo entomológico normada por el MINSAL y la OPS establece: 1) <4%: Nivel de Seguridad (bajo riesgo de brote), 2) 4% a 9%: Nivel de Alerta entomológica (mediano riesgo), y 3) ≥10%: Nivel de Alto Riesgo o Emergencia por alta probabilidad de desencadenar un brote epidémico de arbovirosis (Dengue, Zika, Chikungunya). Requiere movilización comunitaria, abatización con larvicida y termonebulización espacial.",
    "keyTakeaway": "Índice Larvario Aédico (% casas positivas): <4% Seguridad, 4-9% Alerta, ≥10% Alto Riesgo / Emergencia de brote epidémico de dengue.",
    "distractorRationale": {
      "B": "4% no corresponde al cálculo matemático de 48/400 (que es 12%).",
      "C": "48 es el número absoluto de casas positivas, no el porcentaje relativo.",
      "D": "0.12 es la fracción decimal sin multiplicar por 100."
    },
    "officialReference": "Lineamientos Técnicos para la Prevención y Control Integral de las Arbovirosis, Dirección de Salud Ambiental y Epidemiología, MINSAL El Salvador."
  },
  {
    "id": "enar-sp-005",
    "specialty": "salud_publica",
    "topic": "Inmunizaciones / Cadena de Frío del Programa Nacional de Vacunación (PNI)",
    "clinicalVignette": "La enfermera encargada del vacunatorio de una UCSF detecta durante el registro matutino de la temperatura en el termómetro digital de máximas y mínimas que el refrigerador principal de vacunas (equipo normado por el MINSAL) registró una temperatura de +12 °C durante la madrugada debido a una falla prolongada del suministro eléctrico local. El refrigerador contiene vacunas biológicas víricas atenuadas (SPR, Rotavirus, Varicela) y vacunas bacterianas con adyuvante de aluminio (Pentavalente, Neumococo, Td). ¿Cuál es la temperatura de almacenamiento normada para el nivel operativo de la cadena de frío y la conducta inmediata a seguir?",
    "options": [
      {
        "key": "A",
        "text": "El rango normado es de +2 °C a +8 °C; la conducta es NO desechar las vacunas de inmediato, transferirlas a un termo de transporte con paquetes fríos a +2 °C a +8 °C, cerrar y sellar el refrigerador, notificar la ruptura de cadena de frío a la jefatura de SIBASI/PNI y esperar la evaluación técnica de termoestabilidad."
      },
      {
        "key": "B",
        "text": "Desechar inmediatamente todos los viales de vacuna a la basura común sin consultar al PNI."
      },
      {
        "key": "C",
        "text": "El rango seguro es de -10 °C a +15 °C, por lo que a +12 °C las vacunas no sufrieron alteración y pueden administrarse con normalidad."
      },
      {
        "key": "D",
        "text": "Colocar las vacunas en el congelador a -20 °C durante 48 horas para revertir el calor."
      }
    ],
    "correctKey": "A",
    "explanation": "En el Programa Nacional de Inmunizaciones (PNI) del MINSAL, el rango obligatorio y universal de temperatura de conservación de las vacunas en el nivel local u operativo es de +2 °C a +8 °C (+35.6 °F a +46.4 °F). Ante una ruptura de la cadena de frío (excursión térmica por encima de +8 °C): 1) NUNCA se deben descartar las vacunas apresuradamente; 2) Se trasladan a un termo con paquetes fríos acondicionados a temperatura de +2 °C a +8 °C; 3) Se llena el reporte de ruptura de cadena de frío registrando temperatura máxima alcanzada y tiempo de exposición; y 4) La coordinación central del PNI evalúa las tablas de termoestabilidad de cada fabricante para autorizar su uso o proceder al descarte controlado.",
    "keyTakeaway": "Cadena de frío en nivel operativo: +2 °C a +8 °C. Ante falla térmica: asegurar vacunas en termo a +2-8 °C, reportar al PNI y no desechar sin evaluación.",
    "distractorRationale": {
      "B": "Muchas vacunas toleran excursiones cortas a +12 °C; descartarlas sin autorización genera pérdidas financieras injustificadas.",
      "C": "A +12 °C hay ruptura formal de la cadena de frío; no se pueden administrar sin dictamen técnico del PNI.",
      "D": "Congelar vacunas bacterianas con adyuvante de aluminio (pentavalente, DPT, neumococo) rompe la emulsión y destruye permanentemente su inmunogenicidad (prueba del agitamiento positiva)."
    },
    "officialReference": "Manual de Normas de la Cadena de Frío, Programa Nacional de Inmunizaciones (PNI), MINSAL El Salvador / OPS/OMS."
  },
  {
    "id": "enar-sp-006",
    "specialty": "salud_publica",
    "topic": "Atención Primaria / Determinantes Sociales de la Salud y APS (Alma-Ata y Astaná)",
    "clinicalVignette": "En una comunidad rural del Bajo Lempa en El Salvador, el equipo de salud familiar observa que a pesar de realizar múltiples campañas educativas y distribuir antiparasitarios en la escuela, la incidencia de diarreas recurrentes y desnutrición infantil permanece inalterada en más del 40% de los niños. Al realizar el diagnóstico comunitario participativo, se documenta que el 90% de las familias carece de conexión a red de agua potable domiciliar continua (deben acarrear agua de pozos artesanales contaminados con coliformes fecales) y no disponen de saneamiento básico (letrinas sanitarias). En el marco conceptual de los Determinantes Sociales de la Salud de la OMS, ¿cómo se catalogan estos factores y cuál es la estrategia primordial para un impacto duradero?",
    "options": [
      {
        "key": "A",
        "text": "Determinantes Estructurales e Intermedios de la Salud (condiciones materiales de vida, agua segura y saneamiento); el abordaje efectivo trasciende la prescripción farmacológica para exigir Acción Intersectorial articulada con la municipalidad, ANDA y la comunidad para garantizar agua potable intradomiciliaria."
      },
      {
        "key": "B",
        "text": "Determinantes puramente genéticos hereditarios que no se pueden modificar con políticas públicas."
      },
      {
        "key": "C",
        "text": "Incrementar la dosis de antibióticos a los niños de forma profiláctica diaria durante todo el año."
      },
      {
        "key": "D",
        "text": "Multar económicamente a las familias cuyos hijos presenten episodios diarreicos."
      }
    ],
    "correctKey": "A",
    "explanation": "El modelo de la Comisión de Determinantes Sociales de la Salud de la OMS y los principios de la Atención Primaria en Salud (APS Integral de Alma-Ata y Astaná) demuestran que las condiciones de vida en que las personas nacen, crecen, viven y trabajan (vivienda, acceso a agua potable, saneamiento básico, nivel educativo y empleo) determinan la mayor parte de las inequidades sanitarias. Ninguna intervención médica o farmacológica en el consultorio puede erradicar las infecciones entéricas si el agua que consumen los niños está contaminada. La solución radica en la Acción Intersectorial y la participación social para transformar los determinantes materiales de la salud.",
    "keyTakeaway": "Determinantes sociales de la salud: el agua potable y saneamiento básico impactan la salud infantil más que los fármacos; requieren acción intersectorial.",
    "distractorRationale": {
      "B": "El acceso a agua limpia y letrinas es una condición material del entorno social, no un factor genético.",
      "C": "La antibioticoterapia profiláctica indiscriminada genera resistencia bacteriana letal y no resuelve la fuente de contagio.",
      "D": "Criminalizar la pobreza es contrario a la ética médica y los derechos humanos de la salud."
    },
    "officialReference": "Comisión sobre Determinantes Sociales de la Salud, OMS / Política Nacional de Salud de El Salvador, MINSAL."
  }
];

const fs = require('fs');
const path = require('path');

// Read drafted units from worker_m3_medical
const u12 = require('../worker_m3_medical/build_units_1_2.cjs').thematicUnits1and2;
const u345 = require('../worker_m3_medical/build_units_3_4_5.cjs').thematicUnits34and5;

const rawUnits = [...u12, ...u345];

// Clinical pearls for unit headers
const unitClinicalPearls = {
  'unit-medicina-interna': [
    'En todo infarto de miocardio de cara inferior (II, III, aVF) con hipotensión y pulmones limpios, registrar V3R-V4R antes de dar cualquier fármaco; los nitratos y diuréticos están terminantemente contraindicados.',
    'Regla de oro de seguridad en Cetoacidosis Diabética: NUNCA iniciar infusión de insulina si el potasio sérico es < 3.3 mEq/L para evitar fibrilación ventricular y paro cardíaco.',
    'En Dengue con Signos de Alarma (Grupo B2 MINSAL), la fase crítica ocurre durante la defervescencia; la resucitación hidroelectrolítica con cristaloides a 10 mL/kg/h salva vidas y debe titularse según hematocrito.',
    'La Nefropatía Mesoamericana en El Salvador es una Nefritis Tubulointersticial Crónica de causa ocupacional/ambiental que cursa con proteinuria mínima en estadios iniciales; evitar el abuso de AINEs y garantizar hidratación adecuada.',
    'En Choque Séptico, la meta de resucitación inicial es PAM ≥65 mmHg mediante cristaloides 30 mL/kg en 3 horas y Norepinefrina como vasopresor de primera línea.'
  ],
  'unit-cirugia-general': [
    'En apendicitis aguda en varón joven con cuadro clínico clásico (cronología de Murphy y Alvarado ≥7), no demorar la apendicectomía con estudios tomográficos innecesarios que retrasan el tratamiento.',
    'El neumotórax a tensión es un diagnóstico 100% clínico: NUNCA esperar una radiografía de tórax; la descompresión con aguja gruesa salva la vida inmediatamente.',
    'En trauma grave con choque grado IV, aplique de inmediato el Protocolo de Transfusión Masiva en proporción 1:1:1 (CGR:PFC:Plaquetas) y Ácido Tranexámico 1g en bolo dentro de las primeras 3 horas.',
    'En colecistitis aguda litiásica según Guías de Tokio TG18, el ultrasonido con signo de Murphy sonográfico y engrosamiento de pared vesicular >4 mm define el diagnóstico para colecistectomía laparoscópica temprana <72 horas.',
    'En obstrucción intestinal mecánica con dolor continuo, fiebre, taquicardia y leucocitosis, sospechar sufrimiento de asa/estrangulación e indicar laparotomía urgente sin demoras.'
  ],
  'unit-pediatria': [
    'En pediatría, los fármacos inhibidores de la motilidad intestinal (loperamida) están formalmente proscritos por riesgo inminente de íleo paralítico, megacolon tóxico y muerte.',
    'En bronquiolitis viral en lactantes menores de 2 años, el pilar terapéutico es exclusivamente de soporte (aseo nasal con solución salina, hidratación fraccionada y O2 si SatO2 <92%); no usar salbutamol, corticoides ni antibióticos de rutina.',
    'En choque séptico pediátrico, la hipotensión es un signo muy tardío de colapso cardiovascular descompensado; el choque frío (80% en niños) requiere bolos rápidos de cristaloides 20 mL/kg y Epinefrina precoz.',
    'En Neumonía Adquirida en la Comunidad no complicada en preescolares, la Amoxicilina oral a dosis altas (80-90 mg/kg/día) es la primera línea para vencer la resistencia de neumococos con PBPs alteradas.',
    'En deshidratación moderada (Plan B AIEPI), administrar 50 a 100 mL/kg de Sales de Rehidratación Oral de baja osmolaridad en 4 horas mediante cucharitas o taza bajo observación directa.'
  ],
  'unit-ginecologia-obstetricia': [
    'El Sulfato de Magnesio no es un antihipertensivo sino un anticonvulsivante cerebral; para prevenir y tratar la eclampsia use Esquema de Zuspan (4g bolo en 15-20 min + 1-2 g/h) y vigile reflejo rotuliano, FR y diuresis con sonda Foley.',
    'El antídoto específico de la intoxicación por sulfato de magnesio es el Gluconato de Calcio al 10% (1g IV lento en 3-5 minutos); téngalo siempre disponible en cabecera.',
    'En Código Rojo Obstétrico por Hemorragia Posparto, la causa más frecuente es la Atonía Uterina (70%); el manejo inicial demanda masaje uterino bimanual continuo y Oxitocina 20-40 UI en infusión intravenosa rápida.',
    'En hemorragia del tercer trimestre: si el sangrado es rojo rutilante indoloro con útero blando, sospeche Placenta Previa; si es oscuro, muy doloroso con útero hipertónico y leñoso, es DPPNI urgente.',
    'El Manejo Activo del Tercer Período del Parto (MATEP) con 10 UI de Oxitocina IM al salir el hombro anterior y tracción controlada del cordón reduce la hemorragia posparto en más de un 60%.'
  ],
  'unit-medicina-familiar': [
    'En el primer nivel de atención, nunca evalúe factores de riesgo cardiovascular de forma aislada; utilice las tablas de Riesgo Cardiovascular Global a 10 Años de la Iniciativa HEARTS (OPS/OMS) para iniciar estatinas de alta potencia precozmente.',
    'En pacientes diabéticos e hipertensos con albuminuria o nefropatía diabética, los fármacos de primera elección son los bloqueadores del eje renina-angiotensina (IECA/ARA-II) combinados con iSGLT2 por su demostrada nefroprotección y cardioprotección.',
    'La Ley Nacer con Cariño (D.L. 143) establece el derecho legal inalienable de la mujer al acompañamiento continuo, a la libre deambulación y posiciones de parto, contacto piel con piel ininterrumpido en la primera hora y corte oportuno del cordón a los 1-3 min.',
    'El Genograma de tres generaciones y el APGAR Familiar de Smilkstein son herramientas de diagnóstico biopsicosocial esenciales para detectar disfunciones familiares y anticipar crisis normativas del ciclo vital.',
    'En vigilancia epidemiológica comunitaria (VIGEPES), la notificación inmediata en <24 horas es mandatoria ante sospecha de sarampión, poliomielitis (parálisis flácida), cólera, rabia o muerte materna.'
  ]
};

// Process units and ensure all fields are explicitly mapped
const processedUnits = rawUnits.map(u => {
  const pearls = unitClinicalPearls[u.id] || [];
  const processedCases = u.solvedClinicalCases.map(c => {
    // Extract physical exam and lab data from initialVignette or supply clear breakdown
    const vignette = c.initialVignette || '';
    
    // Create structured breakdown
    return {
      id: c.id,
      title: c.title,
      patientProfile: c.patientProfile,
      clinicalPresentation: `${c.patientProfile}. Presenta: ${vignette.split('. ')[0] || vignette}.`,
      physicalExam: c.initialVignette.includes('Examen físico:') 
        ? c.initialVignette.split('Examen físico:')[1].split('. ')[0] + '.'
        : 'Signos vitales y exploración segmentaria detallada documentada en la viñeta clínica inicial.',
      labAndImagingData: c.initialVignette.includes('Laboratorios:') || c.initialVignette.includes('ECG') || c.initialVignette.includes('radiografía') || c.initialVignette.includes('ecografía')
        ? 'Pruebas analíticas de urgencia, biomarcadores y estudios de gabinete documentados en la presentación del caso.'
        : 'Laboratorios de urgencia y gabinete según protocolo MINSAL de referencia.',
      initialVignette: c.initialVignette,
      diagnosticReasoning: c.diagnosticReasoning,
      stepByStepReasoning: c.diagnosticReasoning,
      differentialDiagnosis: c.differentialDiagnosis,
      managementPlan: c.managementPlan,
      therapeuticPlan: c.managementPlan,
      pedagogicalRationale: c.clinicalPearls ? c.clinicalPearls.join(' ') : 'El caso enfatiza el razonamiento fisiopatológico y el apego estricto a las guías clínicas normadas por el MINSAL y la literatura médica de posgrado.',
      clinicalPearls: c.clinicalPearls || [],
      officialProtocolRef: c.officialProtocolRef
    };
  });

  return {
    id: u.id,
    specialtyId: u.specialtyId,
    specialtyName: u.specialtyName,
    title: u.title,
    substantiveTheory: u.substantiveTheory,
    clinicalPearls: pearls,
    keyClinicalProtocols: u.keyClinicalProtocols,
    solvedClinicalCases: processedCases
  };
});

console.log('Units processed successfully:', processedUnits.length);
processedUnits.forEach(u => {
  console.log(u.id, 'words:', u.substantiveTheory.trim().split(/\s+/).length, 'cases:', u.solvedClinicalCases.length, 'pearls:', u.clinicalPearls.length);
});

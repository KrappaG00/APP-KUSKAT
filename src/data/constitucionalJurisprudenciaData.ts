/**
 * CASOTECA Y JURISPRUDENCIA VIVA DE LA SALA DE LO CONSTITUCIONAL
 * Corte Suprema de Justicia (CSJ) · República de El Salvador
 * Sentencias paradigmáticas y Taller de Demanda de Amparo y Hábeas Corpus.
 */

export interface ConstitutionalRulingCase {
  id: string;
  refNumber: string;
  year: number;
  rulingType: 'Inconstitucionalidad' | 'Amparo' | 'Hábeas Corpus' | 'Controversia';
  title: string;
  constitutionalArticles: string[];
  factsSummary: string;
  ratioDecidendi: string;
  practicalImpact: string;
  legalQuiz: {
    question: string;
    options: { key: string; text: string }[];
    correctKey: string;
    explanation: string;
  };
}

export interface AmparoStepGuide {
  stepNumber: number;
  title: string;
  legalRequirement: string;
  practicalGuidance: string;
  commonMistakes: string;
  modelSnippet: string;
}

export const CONSTITUTIONAL_CASES: ConstitutionalRulingCase[] = [
  {
    id: 'sc-inc-044-2013',
    refNumber: 'Inc. 44-2013 / 145-2013',
    year: 2016,
    rulingType: 'Inconstitucionalidad',
    title: 'Inconstitucionalidad de la Ley de Amnistía General de 1993',
    constitutionalArticles: ['Art. 1', 'Art. 2', 'Art. 144', 'Art. 244 Cn.'],
    factsSummary: 'Diversas organizaciones de derechos humanos demandaron la inconstitucionalidad de la Ley de Amnistía General para la Consolidación de la Paz (1993), la cual impedía la investigación judicial y sanción de violaciones graves a los derechos humanos y crímenes de guerra cometidos durante el conflicto armado salvadoreño.',
    ratioDecidendi: 'La Sala determinó que la amnistía absoluta para crímenes de lesa humanidad y crímenes de guerra es contraria al derecho fundamental de acceso a la justicia, la tutela judicial efectiva y el derecho a la verdad (Art. 2 Cn.). Asimismo, viola la jerarquía de los tratados internacionales de derechos humanos (Art. 144 Cn.) y el principio de responsabilidad de los funcionarios (Art. 244 Cn.). Las atrocidades masivas son imprescriptibles e inamnistiables.',
    practicalImpact: 'Habilitó la reapertura de procesos penales emblemáticos como la masacre de El Mozote y lugares aledaños, el caso de los sacerdotes Jesuitas de la UCA y el magnicidio de San Óscar Arnulfo Romero.',
    legalQuiz: {
      question: '¿Cuál es el núcleo dogmático por el cual la Sala de lo Constitucional expulsó del ordenamiento la amnistía absoluta para crímenes de guerra?',
      options: [
        { key: 'A', text: 'Porque no fue aprobada por las dos terceras partes de los diputados de la Asamblea Legislativa.' },
        { key: 'B', text: 'Porque el derecho de acceso a la justicia, la verdad y la tutela efectiva (Art. 2 y 144 Cn.) prevalecen sobre cualquier ley secundaria, siendo los crímenes de lesa humanidad inamnistiables.' },
        { key: 'C', text: 'Porque el Presidente de la República vetó la ley por inconveniente en el año 1993.' },
        { key: 'D', text: 'Porque la amnistía solo puede aplicarse a delitos de tránsito y faltas menores.' },
      ],
      correctKey: 'B',
      explanation: 'El derecho a la protección jurisdiccional y el deber estatal de investigar violaciones graves a los derechos humanos son inderogables conforme a la jurisprudencia interamericana y el Art. 2 y 144 Cn.',
    },
  },
  {
    id: 'sc-hc-179-2011',
    refNumber: 'H.C. 179-2011',
    year: 2012,
    rulingType: 'Hábeas Corpus',
    title: 'Límites Temporales de la Detención Provisional y Motivación Judicial',
    constitutionalArticles: ['Art. 11', 'Art. 12', 'Art. 13 Cn.'],
    factsSummary: 'Un procesado permaneció en detención provisional por más de 36 meses sin que se celebrara la vista pública ni se justificara formalmente la prolongación de la medida cautelar privativa de libertad.',
    ratioDecidendi: 'La detención provisional es una medida cautelar de carácter excepcional que jamás puede operar como una pena anticipada. La inercia judicial o la sobrecarga de trabajo del tribunal no constituyen justificación constitucionalmente válida para superar los plazos máximos legales (Art. 8 PrPn). El exceso de detención provisional lesiona frontalmente el derecho a la libertad física (Art. 11 Cn.) y el principio de presunción de inocencia (Art. 12 Cn.).',
    practicalImpact: 'Fijó el criterio vinculante de que al vencer el plazo máximo de detención provisional sin sentencia, el juzgador debe cesar la prisión preventiva e imponer medidas cautelares alternas no privativas de libertad.',
    legalQuiz: {
      question: '¿Qué naturaleza jurídica asigna la Sala de lo Constitucional a la detención provisional?',
      options: [
        { key: 'A', text: 'Una sanción punitiva anticipada para garantizar el escarmiento social.' },
        { key: 'B', text: 'Una medida cautelar excepcional y estrictamente instrumental que requiere motivación y límite temporal para no vulnerar el Art. 11 Cn.' },
        { key: 'C', text: 'Un acto administrativo discrecional del fiscal que no admite revisión judicial.' },
        { key: 'D', text: 'Un mecanismo de seguridad ciudadana que puede extenderse indefinidamente hasta lograr una confesión.' },
      ],
      correctKey: 'B',
      explanation: 'La prisión preventiva es puramente cautelar (asegurar la presencia del imputado en el juicio y evitar entorpecimiento); su prolongación indebida desnaturaliza la garantía constitucional.',
    },
  },
  {
    id: 'sc-inc-004-2012',
    refNumber: 'Inc. 4-2012',
    year: 2014,
    rulingType: 'Inconstitucionalidad',
    title: 'Principio de Reserva de Ley y Legalidad de la Administración Pública',
    constitutionalArticles: ['Art. 86', 'Art. 131 Ord. 6°', 'Art. 231 Cn.'],
    factsSummary: 'El Órgano Ejecutivo emitió un decreto reglamentario que tipificaba nuevas infracciones administrativas y fijaba tarifas y tasas no contempladas en la ley formal aprobada por la Asamblea Legislativa.',
    ratioDecidendi: 'Conforme al Art. 86 inc. 3° de la Constitución, los funcionarios públicos no tienen más facultades que las que expresamente les da la ley. La tipificación de conductas sancionatorias y la creación de cargas patrimoniales (tasas o impuestos) están sujetas al principio de estricta RESERVA DE LEY formal. Los reglamentos ejecutivos solo pueden desarrollar o facilitar la aplicación de la ley, pero nunca innovar o crear faltas por vía de potestad reglamentaria autónoma.',
    practicalImpact: 'Estableció el límite infranqueable entre la potestad legislativa de la Asamblea y la potestad reglamentaria del Presidente de la República y sus Ministerios.',
    legalQuiz: {
      question: '¿Puede un reglamento ministerial tipificar una nueva multa o sanción no contemplada en una ley formal?',
      options: [
        { key: 'A', text: 'Sí, siempre que cuente con el visto bueno del Consejo de Ministros.' },
        { key: 'B', text: 'No, porque el Art. 86 Cn. y el principio de reserva de ley prohíben taxativamente la creación de sanciones por vía reglamentaria.' },
        { key: 'C', text: 'Sí, en casos de emergencia económica o sanitaria sin necesidad de ley.' },
        { key: 'D', text: 'Únicamente si la multa no supera los mil dólares de los Estados Unidos.' },
      ],
      correctKey: 'B',
      explanation: 'La reserva de ley en materia punitiva y sancionadora (nulla poena sine lege) exige que la descripción de la falta y la sanción emanen exclusivamente del parlamento.',
    },
  },
  {
    id: 'sc-amp-408-2015',
    refNumber: 'Amp. 408-2015',
    year: 2017,
    rulingType: 'Amparo',
    title: 'Derecho a la Salud y Tutela Judicial Efectiva del Mínimo Vital',
    constitutionalArticles: ['Art. 2', 'Art. 65 Cn.'],
    factsSummary: 'Pacientes con insuficiencia renal crónica y enfermedades oncológicas interpusieron demanda de amparo contra el Ministerio de Salud y el ISSS por desabastecimiento crónico de medicamentos vitales e insumos para hemodiálisis.',
    ratioDecidendi: 'La salud es un bien público y un derecho fundamental intrínsecamente vinculado al derecho a la vida y la integridad física (Art. 2 y 65 Cn.). La inacción o negligencia administrativa del Estado en proveer tratamientos médicos continuos a pacientes en riesgo inminente de muerte constituye una omisión inconstitucional lesiva de derechos fundamentales, ordenando la medida cautelar positiva de abastecimiento médico inmediato.',
    practicalImpact: 'Consagró el amparo como herramienta procesal inmediata para garantizar el acceso ininterrumpido a medicamentos y terapias médicas en el sistema público nacional.',
    legalQuiz: {
      question: '¿Qué medida cautelar procedió en el amparo por desabastecimiento de medicamentos oncológicos?',
      options: [
        { key: 'A', text: 'El archivo definitivo del expediente por tratarse de un problema presupuestario.' },
        { key: 'B', text: 'Medida cautelar positiva de orden de suministro e inmunización médica inmediata para preservar la vida de los demandantes.' },
        { key: 'C', text: 'El traslado obligatorio de los pacientes a clínicas privadas a costa suya.' },
        { key: 'D', text: 'Una multa económica contra los médicos tratantes del hospital.' },
      ],
      correctKey: 'B',
      explanation: 'Las medidas cautelares en el amparo pueden ser suspensivas o restitutorias/positivas cuando la inacción estatal pone en peligro directo la subsistencia biológica del ciudadano.',
    },
  },
  {
    id: 'sc-inc-021-2020',
    refNumber: 'Inc. 21-2020 / Inc. 63-2020',
    year: 2020,
    rulingType: 'Inconstitucionalidad',
    title: 'Inconstitucionalidad de Decretos Ejecutivos de Emergencia sin Habilitación Legislativa',
    constitutionalArticles: ['Art. 86', 'Art. 131 Ord. 5°', 'Art. 164', 'Art. 29 Cn.'],
    factsSummary: 'Durante la emergencia sanitaria por la pandemia de COVID-19, el Presidente de la República y el Ministro de Salud emitieron sendos decretos ejecutivos (como los Decretos Ejecutivos N° 19, 21, 26 y 29 en el ramo de salud) que imponían confinamientos domiciliares obligatorios, retenciones de personas y limitaciones a la libre circulación, sin la existencia de una ley formal previa emitida por la Asamblea Legislativa ni régimen de excepción conforme al Art. 29 Cn.',
    ratioDecidendi: 'La Sala de lo Constitucional reiteró que la suspensión o restricción generalizada de derechos fundamentales (como la libertad física y de circulación) es competencia privativa y exclusiva de la Asamblea Legislativa mediante la declaratoria de régimen de excepción (Art. 29 y 131 Ord. 5° Cn.). El Órgano Ejecutivo no puede atribuirse potestades legislativas extraordinarias por vía de reglamento o decreto ejecutivo (Art. 86 y 164 Cn.), aun bajo emergencias sanitarias. Toda limitación de derechos fundamentales exige reserva de ley formal y control parlamentario continuo.',
    practicalImpact: 'Fijó el estándar infranqueable de separación de poderes en estados de emergencia, prohibiendo el confinamiento punitivo en centros de contención por decreto ejecutivo unilateral sin base legal formal previa y garantizando el control judicial de constitucionalidad de todo acto de poder.',
    legalQuiz: {
      question: '¿Bajo qué fundamento dogmático declaró la Sala de lo Constitucional la invalidez de los decretos ejecutivos que restringían la libertad de circulación durante la pandemia?',
      options: [
        { key: 'A', text: 'Porque los decretos fueron firmados en día feriado sin publicación en prensa escrita.' },
        { key: 'B', text: 'Porque la restricción o suspensión de derechos fundamentales exige reserva de ley formal emitida por el parlamento (Art. 29 y 131 Ord. 5° Cn.), no pudiendo el Ejecutivo autoatribuirse potestades restrictivas de libertad por vía de decreto administrativo.' },
        { key: 'C', text: 'Porque el Ministerio de Salud carece de personería jurídica en el derecho administrativo salvadoreño.' },
        { key: 'D', text: 'Porque los tratados de la OMS prohíben cualquier medida preventiva en puertos y fronteras.' },
      ],
      correctKey: 'B',
      explanation: 'La suspensión y restricción general de derechos constitucionales fundamentales es materia estrictamente reservada a la ley formal aprobada por la Asamblea Legislativa; ningún decreto reglamentario o ejecutivo puede cercenar la libertad ambulatoria sin habilitación parlamentaria.',
    },
  },
  {
    id: 'sc-hc-119-2014',
    refNumber: 'H.C. 119-2014',
    year: 2016,
    rulingType: 'Hábeas Corpus',
    title: 'Hábeas Corpus Correctivo contra Hacinamiento Carcelario y Condiciones Inhumanas',
    constitutionalArticles: ['Art. 2', 'Art. 11', 'Art. 27 Cn.'],
    factsSummary: 'Personas privadas de libertad en bartolinas policiales y centros penitenciarios de detención temporal promovieron proceso constitucional de Hábeas Corpus denunciando condiciones de hacinamiento crítico que superaban el 300% de la capacidad física instalada, falta de ventilación, insalubridad extrema y deficiencia en la atención médica básica.',
    ratioDecidendi: 'La Sala reconoció la procedencia del HÁBEAS CORPUS CORRECTIVO para tutelar la dignidad humana, la vida y la integridad física y moral de los reclusos (Arts. 2 y 11 Cn.), declarando un ESTADO DE COSAS INCONSTITUCIONAL en el sistema penitenciario y bartolinas de la PNC. Conforme al Art. 27 inc. 3° Cn., los centros penales tienen una finalidad eminentemente reeducativa y de reinserción social; mantener a personas en hacinamiento inhumano desnaturaliza la privación de libertad convirtiéndola en un trato cruel, inhumano o degradante prohibido por el ordenamiento constitucional.',
    practicalImpact: 'Ordenó al Ministerio de Justicia y Seguridad Pública y a la Dirección General de Centros Penales la elaboración de un plan progresivo de descongestionamiento penitenciario, cese del uso prolongado de bartolinas policiales para detenciones definitivas y la provisión obligatoria de condiciones mínimas de habitabilidad, agua potable y salud.',
    legalQuiz: {
      question: '¿Cuál es la función tutelar específica del Hábeas Corpus Correctivo frente a la privación legal de libertad?',
      options: [
        { key: 'A', text: 'Ordenar de inmediato la anulación automática de los fallos condenatorios dictados por los tribunales de sentencia.' },
        { key: 'B', text: 'Proteger la integridad personal y dignidad del interno corrigiendo las condiciones inhumanas, tratos crueles, degradantes o hacinamiento en los lugares de detención, aun cuando la privación de libertad sea legítima.' },
        { key: 'C', text: 'Fijar los montos de fianza económica que los imputados deben pagar a la Dirección General de Centros Penales.' },
        { key: 'D', text: 'Trasladar la administración de los penales a las municipalidades donde se ubican las cárceles.' },
      ],
      correctKey: 'B',
      explanation: 'El hábeas corpus correctivo no cuestiona la legalidad formal de la orden de detención o condena, sino el modo, lugar y condiciones materiales en que la persona privada de libertad cumple la medida, impidiendo que degenere en tratos crueles o degradantes.',
    },
  },
  {
    id: 'sc-amp-713-2015',
    refNumber: 'Amp. 713-2015',
    year: 2018,
    rulingType: 'Amparo',
    title: 'Acceso a la Información Pública, Máxima Publicidad y Transparencia Patrimonial (LAIP)',
    constitutionalArticles: ['Art. 6', 'Art. 85', 'Art. 86 Cn.'],
    factsSummary: 'Un ciudadano solicitó a la Sección de Probidad de la Corte Suprema de Justicia información pública oficiosa sobre las declaraciones juradas de patrimonio de exfuncionarios públicos y las auditorías de incremento patrimonial no justificado. La autoridad demandada reservó de forma generalizada los expedientes alegando derecho a la intimidad personal y protección de datos crediticios.',
    ratioDecidendi: 'La Sala determinó que el derecho de acceso a la información pública es una vertiente nuclear de la libertad de expresión y manifestación del pensamiento (Art. 6 Cn.) y una garantía instrumental consustancial al sistema republicano y democrático de gobierno (Art. 85 Cn.). En el marco de la función pública, rige el principio de MÁXIMA PUBLICIDAD. La información sobre la evolución patrimonial de los funcionarios en el ejercicio de cargos estatales es de alto interés general para prevenir la corrupción y el enriquecimiento ilícito; las reservas de información son excepcionales, tasadas legalmente y deben superar un estricto test de proporcionalidad y daño.',
    practicalImpact: 'Consolidó la fuerza vinculante de las resoluciones del Instituto de Acceso a la Información Pública (IAIP) y sentó precedente para la apertura y escrutinio ciudadano de auditorías patrimoniales a expresidentes y altos dignatarios.',
    legalQuiz: {
      question: '¿Qué principio constitucional rige la publicidad de los fondos y patrimonio de los funcionarios del Estado según la jurisprudencia de la Sala de lo Constitucional?',
      options: [
        { key: 'A', text: 'Principio de reserva absoluta de actuaciones patrimoniales por secreto bancario perpetuo.' },
        { key: 'B', text: 'Principio de máxima publicidad y transparencia (Art. 6 y 85 Cn.), debiendo justificarse cualquier reserva mediante estricto test de daño y temporalidad legalmente tasada.' },
        { key: 'C', text: 'Principio de discrecionalidad absoluta del oficial de información para negar datos sin fundamentación.' },
        { key: 'D', text: 'Publicidad diferida únicamente tras cumplirse cincuenta años de haber dejado el cargo público.' },
      ],
      correctKey: 'B',
      explanation: 'En un Estado democrático de Derecho, la información en poder de las instituciones públicas pertenece a los ciudadanos, rigiendo la máxima publicidad como regla general y la reserva como excepción debidamente motivada y restringida.',
    },
  },
  {
    id: 'sc-inc-028-2015',
    refNumber: 'Inc. 28-2015',
    year: 2017,
    rulingType: 'Inconstitucionalidad',
    title: 'Reserva de Ley Tributaria y Distinción entre Tasas Municipales e Impuestos Encubiertos',
    constitutionalArticles: ['Art. 131 Ord. 6°', 'Art. 204 Ord. 1°', 'Art. 231 Cn.'],
    factsSummary: 'Diversos contribuyentes impugnaron ordenanzas municipales que establecían "tasas" sobre el tendido de postes y cables de telecomunicaciones y electricidad, fijando montos desproporcionados calculados sobre los ingresos brutos de las empresas y sin demostrar la prestación efectiva de una contraprestación o servicio público divisible.',
    ratioDecidendi: 'La Sala delimitó las especies del género tributario a la luz de los Arts. 131 Ord. 6°, 204 Ord. 1° y 231 Cn. Los municipios tienen potestad para crear TASAS por servicios de naturaleza administrativa o jurídica efectivamente prestados u ofrecidos a los vecinos, existiendo una relación sinalagmática o contraprestación individualizada. Cuando el tributo municipal grava una actividad sin contraprestación directa divisible o se calcula sobre la capacidad contributiva global del sujeto (ej. ingresos o activos), muta en un IMPUESTO encubierto. Dado que la creación de impuestos es facultad exclusiva de la Asamblea Legislativa (Art. 131 Ord. 6° Cn.), las ordenanzas que instituyen impuestos bajo el ropaje de tasas son radicalmente inconstitucionales por violación a la reserva de ley tributaria.',
    practicalImpact: 'Expulsó del ordenamiento jurídico decenas de ordenanzas municipales arbitrarias y obligó a las municipalidades a fundamentar técnicamente los costos de sus servicios para fijar tasas legalmente válidas.',
    legalQuiz: {
      question: '¿Cuál es el elemento sustancial que distingue a una tasa municipal de un impuesto según la Sala de lo Constitucional?',
      options: [
        { key: 'A', text: 'El color del recibo emitido por la tesorería municipal.' },
        { key: 'B', text: 'La existencia de una contraprestación efectiva, directa y divisible prestada por la administración al sujeto pasivo (servicio público), ausente en los impuestos que gravan la capacidad económica sin servicio individual.' },
        { key: 'C', text: 'Que las tasas solo pueden pagarse en efectivo y los impuestos en cheque bancario.' },
        { key: 'D', text: 'Que los municipios pueden crear impuestos libremente si son aprobados por el concejo municipal por mayoría calificada.' },
      ],
      correctKey: 'B',
      explanation: 'La tasa requiere una contraprestación específica o beneficio directo y medible otorgado al contribuyente; de no existir dicha contraprestación, el gravamen es un impuesto cuya creación está reservada con exclusividad a la Asamblea Legislativa.',
    },
  },
  {
    id: 'sc-inc-006-2016',
    refNumber: 'Inc. 6-2016',
    year: 2017,
    rulingType: 'Inconstitucionalidad',
    title: 'Inconstitucionalidad Formal por Vicio en la Deliberación Democrática y Abuso de Dispensa de Trámite',
    constitutionalArticles: ['Art. 125', 'Art. 135', 'Art. 142 Cn.'],
    factsSummary: 'Ciudadanos promovieron proceso de inconstitucionalidad contra una reforma sustancial a la Ley del Sistema de Ahorro para Pensiones aprobada en sesión plenaria de la Asamblea Legislativa mediante el mecanismo de dispensa de trámite, sin dictamen de comisión legislativa, sin estudio técnico previo y sin conceder tiempo razonable a los diputados para conocer el proyecto de ley antes de su votación.',
    ratioDecidendi: 'La Sala determinó que el principio de deliberación democrática y el procedimiento de formación de ley (Arts. 135 y sigs. Cn.) no son meros formalismos rituales, sino garantías sustanciales de la democracia representativa y del debate plural (Art. 85 y 125 Cn.). La dispensa de trámite es un mecanismo de uso excepcional que exige la acreditación fáctica de una urgencia objetiva impostergable. La aprobación precipitada de proyectos de ley complejos sin lectura, sin estudio previo y sin debate parlamentario genuino priva a los legisladores de la posibilidad real de deliberar y contradice frontalmente la Constitución, viciando de inconstitucionalidad formal el decreto legislativo respectivo.',
    practicalImpact: 'Erigió el estándar constitucional de la debida deliberación democrática, invalidando reformas trascendentales aprobadas con dispensa de trámite injustificada y protegiendo el derecho de las minorías parlamentarias y de la ciudadanía a un proceso legislativo transparente.',
    legalQuiz: {
      question: '¿Por qué la Sala de lo Constitucional declaró que el abuso de la dispensa de trámite genera vicio formal de inconstitucionalidad?',
      options: [
        { key: 'A', text: 'Porque toda ley debe ser consultada previamente con la Corte de Cuentas de la República.' },
        { key: 'B', text: 'Porque vulnera el principio de deliberación democrática y el derecho a un debate parlamentario informado y pluralista consagrado en los Arts. 125 y 135 Cn., al no justificarse la urgencia objetiva.' },
        { key: 'C', text: 'Porque los diputados suplentes no pueden votar leyes de contenido previsional o financiero.' },
        { key: 'D', text: 'Porque la Constitución prohíbe que el pleno legislativo sesione en horas de la noche.' },
      ],
      correctKey: 'B',
      explanation: 'El procedimiento legislativo exige discusión pública, conocimiento material previo del texto a votar y debate real; la dispensa de trámite injustificada suprime la deliberación democrática y vicia el acto legislativo de inconstitucionalidad formal.',
    },
  },
  {
    id: 'sc-amp-068-2011',
    refNumber: 'Amp. 68-2011',
    year: 2013,
    rulingType: 'Amparo',
    title: 'Estabilidad Laboral Reforzada y Fuero de Maternidad de la Mujer Trabajadora',
    constitutionalArticles: ['Art. 1', 'Art. 2', 'Art. 32', 'Art. 38 Ord. 11° Cn.'],
    factsSummary: 'Una empleada pública contratada bajo la modalidad de servicios profesionales eventuales fue cesada de su puesto de trabajo al expirar el plazo de su contrato por decisión unilateral de la autoridad nominadora, a pesar de encontrarse en estado avanzado de gravidez y haber notificado oportunamente su condición médica a la jefatura de personal.',
    ratioDecidendi: 'La Sala sentó jurisprudencia vinculante al proclamar que el fuero de maternidad consagrado en el Art. 38 Ord. 11° Cn., en concordancia con la protección a la familia y la maternidad (Art. 32 Cn.), goza de carácter preferente y tutela universal a toda mujer trabajadora, sin importar si su vínculo laboral es de ley de salarios, régimen de contrato o servicios profesionales temporales. La terminación del contrato durante el embarazo o el descanso post-natal sin previa autorización judicial por causa justa legalmente comprobada constituye un despido arbitrario y lesiona el derecho fundamental a la estabilidad laboral reforzada y la seguridad social de la madre y del hijo recién nacido.',
    practicalImpact: 'Garantizó que las instituciones del Estado y el sector privado no puedan eludir el fuero de maternidad mediante la simulación de contratos temporales o no renovación fraudulenta, ordenando reinstalos o el pago íntegro de salarios caídos y prestaciones hasta finalizar el período de lactancia.',
    legalQuiz: {
      question: '¿Cuál es el alcance constitucional de la estabilidad laboral reforzada por maternidad (fuero de maternidad) según la jurisprudencia de la Sala?',
      options: [
        { key: 'A', text: 'Aplica únicamente a las empleadas con plaza presupuestaria definitiva por Ley de Salarios, excluyendo contratos temporales.' },
        { key: 'B', text: 'Es una garantía universal derivada de los Arts. 32 y 38 Ord. 11° Cn. que protege a toda mujer embarazada frente al despido arbitrario o no renovación de contrato, sin importar la naturaleza formal de su vinculación laboral.' },
        { key: 'C', text: 'Permite al empleador cesar a la trabajadora siempre que pague una indemnización simple de quince días de salario.' },
        { key: 'D', text: 'Requiere que la trabajadora renuncie voluntariamente a las prestaciones del Instituto Salvadoreño del Seguro Social.' },
      ],
      correctKey: 'B',
      explanation: 'La protección a la maternidad es un derecho fundamental irrenunciable que trasciende la tipología contractual; cualquier desvinculación unilateral durante la gravidez o lactancia sin causal justa comprobada judicialmente constituye una violación constitucional.',
    },
  },
];

export const AMPARO_STEP_GUIDE: AmparoStepGuide[] = [
  {
    stepNumber: 1,
    title: '1. Acreditación de Legitimación Activa y Agravio Personal',
    legalRequirement: 'Art. 12 y 14 de la Ley de Procedimientos Constitucionales (LPrCn)',
    practicalGuidance: 'El demandante debe demostrar un interés legítimo, actual y directo. El amparo no es una acción popular; quien demanda debe ser la persona natural o jurídica cuyos derechos fundamentales han sido concretamente lesionados por el acto de autoridad.',
    commonMistakes: 'Presentar la demanda en nombre de la sociedad civil o de un colectivo sin ostentar poder judicial específico o representación legal acreditada.',
    modelSnippet: 'Comparezco en mi calidad de ciudadano salvadoreño, mayor de edad, con Documento Único de Identidad número [...], manifestando que sufro un agravio personal, directo y actual en mi derecho constitucional a [...].',
  },
  {
    stepNumber: 2,
    title: '2. Identificación Precisa de la Autoridad Demandada y Carácter del Acto',
    legalRequirement: 'Art. 14 Ord. 2° LPrCn',
    practicalGuidance: 'Debe individualizarse con exactitud el funcionario, entidad o autoridad pública (o particular en relaciones de supra-subordinación) que dictó, ejecutó o amenazó con ejecutar el acto u omisión impugnada.',
    commonMistakes: 'Demandar de forma genérica al "Gobierno de El Salvador" o a "la institución" en lugar de identificar el cargo del funcionario titular (ej. "Director General de...", "Ministro de...").',
    modelSnippet: 'Señalo como autoridad demandada al señor MINISTRO DE SALUD, en su calidad de titular del ramo, y a la DIRECCIÓN DEL HOSPITAL NACIONAL ROSALES.',
  },
  {
    stepNumber: 3,
    title: '3. Agotamiento Previo de Recursos Ordinarios (Carácter Subsidiario)',
    legalRequirement: 'Art. 12 inc. 3° LPrCn',
    practicalGuidance: 'El amparo es una vía procesal extraordinaria y subsidiaria. Debe comprobarse que se interpusieron y resolvieron todos los recursos ordinarios de apelación, revocatoria o revisión contemplados en la ley de la materia, salvo excepciones de daño irreparable.',
    commonMistakes: 'Acudir al amparo como si fuera una segunda instancia judicial común sin haber apelado ante la Cámara o tribunal superior ordinario.',
    modelSnippet: 'Consta en autos que contra la resolución administrativa se interpuso el Recurso de Apelación en tiempo y forma, el cual fue desestimado mediante resolución de fecha [...], quedando agotada la vía ordinaria.',
  },
  {
    stepNumber: 4,
    title: '4. Delimitación del Derecho Constitucional Conculcado',
    legalRequirement: 'Art. 14 Ord. 3° LPrCn y Jurisprudencia de la Sala',
    practicalGuidance: 'Debe vincularse el relato fáctico con un precepto constitucional taxativo (ej. Art. 11 debido proceso, Art. 2 derecho a la propiedad, Art. 65 salud). No basta alegar injusticia; debe demostrarse el vicio de constitucionalidad del acto.',
    commonMistakes: 'Confundir asuntos de mera legalidad ordinaria (interpretación de un contrato o cálculo de una multa común) con vulneración directa de normas constitucionales.',
    modelSnippet: 'El acto reclamado vulnera flagrantemente el DERECHO DE AUDIENCIA Y DEFENSA consagrado en el Artículo 11 de la Constitución, al habérseme sancionado sin previa notificación de cargos ni oportunidad de prueba.',
  },
  {
    stepNumber: 5,
    title: '5. Solicitud Fundamentada de Medida Cautelar',
    legalRequirement: 'Arts. 19 y 20 LPrCn',
    practicalGuidance: 'Para evitar que el acto impugnado cause un daño de imposible o difícil reparación durante la tramitación del juicio, debe solicitarse la suspensión del acto reclamado justificando la apariencia de buen derecho (fumus boni iuris) y el peligro en la demora (periculum in mora).',
    commonMistakes: 'Omitir la petición de medida cautelar o no justificar el daño irreparable que provocaría la ejecución del acto mientras la Sala emite sentencia.',
    modelSnippet: 'PIDO: Se decrete MEDIDA CAUTELAR DE SUSPENSIÓN PROVISIONAL de los efectos del acto reclamado, ordenando a la autoridad demandada abstenerse de ejecutar el desalojo mientras se tramite el presente proceso.',
  },
];

// ============================================================================
// MODELOS Y CORPUS CONSTITUCIONAL Y RAMAS DEL DERECHO SALVADOREÑO
// ============================================================================

export interface LawArticleEntry {
  articleRef: string;
  literalText: string;
  simplifiedText: string;
  analyticalCommentary: string;
}

export interface ConstitutionalBranchSolvedCase {
  id: string;
  caseNumber: number;
  title: string;
  factualContext: string;
  constitutionalIssue: string;
  legalBasis: string;
  ratioDecidendi: string;
  proceduralOutcome: string;
}

export interface LawBranch {
  id: string;
  name: string;
  type: 'publico' | 'privado';
  icon: string;
  badgeColor: string;
  summary: string;
  doctrinalBasis: string;
  substantiveAnalysis: string;
  entries: LawArticleEntry[];
  solvedCases: ConstitutionalBranchSolvedCase[];
}

export interface ProceduralStepGuide {
  stepNumber: number;
  title: string;
  legalRequirement: string;
  practicalGuidance: string;
  commonMistakes: string;
  modelSnippet: string;
}

export interface ProceduralWorkshopStage {
  stageName: string;
  description: string;
  forensicModelSnippet: string;
  courtResolution: string;
}

export interface ProceduralWorkshopCase {
  id: string;
  title: string;
  procedureType: 'Amparo' | 'Hábeas Corpus' | 'Inconstitucionalidad';
  constitutionalSubject: string;
  proceduralStages: ProceduralWorkshopStage[];
  keyPrecedentCSJ: string;
}

// ============================================================================
// TALLERES PROCESALES CONSTITUCIONALES: HÁBEAS CORPUS E INCONSTITUCIONALIDAD
// ============================================================================

export const HABEAS_CORPUS_STEP_GUIDE: ProceduralStepGuide[] = [
  {
    stepNumber: 1,
    title: '1. Identificación de la Modalidad de Hábeas Corpus y Legitimación Universal',
    legalRequirement: 'Art. 11 de la Constitución y Arts. 38 al 42 de la Ley de Procedimientos Constitucionales (LPC)',
    practicalGuidance: 'El Hábeas Corpus en El Salvador no exige procuración obligatoria ni formalidades sacramentales; puede ser solicitado por la propia persona detenida o por cualquier ciudadano en su favor por cualquier medio (verbal, escrito o telemático). Debe precisarse la modalidad: Reparador (contra privación física arbitraria consumada), Preventivo (ante amenaza inminente e ilegítima de detención), Correctivo (contra tratos inhumanos, crueles o degradantes durante detención legítima) o Contra Particulares.',
    commonMistakes: 'Exigir poder notarial o representación de abogado para promover el hábeas corpus, desconociendo el carácter antiformalista de la acción constitucional de libertad.',
    modelSnippet: 'Comparezco ante la Honorable Sala de lo Constitucional en mi calidad de ciudadano salvadoreño a interponer SOLICITUD DE HÁBEAS CORPUS CORRECTIVO en favor de [...], quien se encuentra recluido en las bartolinas policiales de [...] bajo condiciones de hacinamiento e insalubridad extrema.',
  },
  {
    stepNumber: 2,
    title: '2. Nombramiento Inmediato e Intimación del Juez Ejecutor',
    legalRequirement: 'Arts. 43 al 48 de la Ley de Procedimientos Constitucionales',
    practicalGuidance: 'Al admitirse la solicitud, la Sala o Cámara de Segunda Instancia nombra de inmediato a un JUEZ EJECUTOR (abogado o ciudadano idóneo) para que se apersone físicamente ante la autoridad aprehensora o recinto penitenciario, intime al funcionario demandado y verifique en el acto el estado físico, legal y de salud del favorecido.',
    commonMistakes: 'Dilatar la aceptación o traslado del juez ejecutor. La LPC confiere al ejecutor la facultad de ordenar la libertad inmediata si la detención carece de orden escrita de autoridad competente.',
    modelSnippet: 'PIDO: Se designe inmediatamente Juez Ejecutor para que se traslade a las bartolinas de [...], intime a la autoridad responsable y certifique el estado de salud e integridad física del favorecido.',
  },
  {
    stepNumber: 3,
    title: '3. Rendición del Informe de la Autoridad Demandada y Dictamen del Ejecutor',
    legalRequirement: 'Arts. 50 al 57 de la Ley de Procedimientos Constitucionales',
    practicalGuidance: 'La autoridad aprehensora o penitenciaria tiene la obligación perentoria de justificar la causa legal de la privación de libertad y exhibir el mandamiento judicial correspondiente. El Juez Ejecutor rinde informe detallado a la Sala sobre la legalidad material y las condiciones de encierro observadas.',
    commonMistakes: 'Omitir la confrontación del informe policial con las constancias médicas y libros de registro de ingresos del centro de detención.',
    modelSnippet: 'Consta en el acta del Juez Ejecutor que el favorecido se encuentra recluido sin auto de detención provisional dictado por juez competente y superando el plazo de setenta y dos horas del Art. 13 Cn.',
  },
  {
    stepNumber: 4,
    title: '4. Resolución Constitucional Definitiva y Restitución del Derecho',
    legalRequirement: 'Arts. 60 al 72 de la Ley de Procedimientos Constitucionales',
    practicalGuidance: 'Si la Sala o tribunal de alzada comprueba la vulneración constitucional, declara con lugar el Hábeas Corpus y ordena la inmediata restitución de la libertad física o el cese urgente de los tratos degradantes, conminando a la autoridad infractora bajo apercibimiento de responsabilidad penal por desobediencia.',
    commonMistakes: 'Limitarse a archivar el expediente si la persona fue trasladada; la Sala mantiene competencia para tutelar la integridad física aun tras traslados penitenciarios.',
    modelSnippet: 'FALLO: Declárase que ha lugar al Hábeas Corpus en favor de [...] y ordénase a la autoridad demandada el cese inmediato del aislamiento injustificado y la provisión de atención médica de urgencia.',
  },
];

export const INCONSTITUCIONALIDAD_STEP_GUIDE: ProceduralStepGuide[] = [
  {
    stepNumber: 1,
    title: '1. Acción Popular Ciudadana y Legitimación Activa (Art. 183 Cn.)',
    legalRequirement: 'Art. 183 de la Constitución de la República y Arts. 2 y 6 de la Ley de Procedimientos Constitucionales',
    practicalGuidance: 'El proceso de inconstitucionalidad en El Salvador se rige por el principio de ACCIÓN POPULAR: cualquier ciudadano salvadoreño en el ejercicio de sus derechos políticos tiene legitimación activa para demandar la inconstitucionalidad de leyes, decretos y reglamentos sin necesidad de acreditar un agravio personal o directo.',
    commonMistakes: 'Presentar la demanda en nombre de personas jurídicas extranjeras o personas que no acrediten su condición de ciudadanos salvadoreños mediante copia de DUI.',
    modelSnippet: 'Comparezco ante esta Sala en mi calidad de ciudadano salvadoreño, titular del Documento Único de Identidad número [...], en ejercicio de la acción popular consagrada en el Art. 183 de la Constitución.',
  },
  {
    stepNumber: 2,
    title: '2. Delimitación Precisa del Objeto de Control y Parámetro de Constitucionalidad',
    legalRequirement: 'Art. 6 N° 2 y 3 de la Ley de Procedimientos Constitucionales',
    practicalGuidance: 'Debe individualizarse de forma inequívoca el OBJETO DE CONTROL (ley formal, decreto legislativo, decreto ejecutivo o reglamento impugnado) y confrontarlo con el PARÁMETRO DE CONSTITUCIONALIDAD (artículos específicos de la Constitución que se estiman vulnerados).',
    commonMistakes: 'Impugnar actos administrativos individuales o resoluciones judiciales concretas en lugar de disposiciones generales y abstractas (el amparo es la vía para actos concretos, la inconstitucionalidad es para normas generales).',
    modelSnippet: 'Señalo como OBJETO DE CONTROL el Art. 15 del Decreto Legislativo N° [...] y como PARÁMETRO DE CONSTITUCIONALIDAD los Arts. 11, 86 y 246 de la Constitución de la República.',
  },
  {
    stepNumber: 3,
    title: '3. Construcción del Juicio de Confrontación Normativa y Motivación Dogmática',
    legalRequirement: 'Art. 6 N° 3 LPrCn y Jurisprudencia de la Sala de lo Constitucional',
    practicalGuidance: 'El demandante debe fundamentar razonadamente el contraste normativo: explicar cómo y por qué el texto legal contradice el mandato constitucional, ya sea por vicio de forma (violación al procedimiento de formación de ley) o por vicio de fondo (violación a derechos sustantivos o principios constitucionales).',
    commonMistakes: 'Formular quejas de inconveniencia política o desacuerdo ideológico en lugar de un contraste técnico-jurídico entre enunciados normativos.',
    modelSnippet: 'La disposición impugnada viola el principio de reserva de ley tributaria (Art. 231 Cn.) al autorizar al Ministerio de Hacienda a fijar tarifas tributarias discrecionales sin aprobación legislativa formal previa.',
  },
  {
    stepNumber: 4,
    title: '4. Efectos Erga Omnes, Sentencias Manipulativas y Modulación Temporal',
    legalRequirement: 'Arts. 10 y 11 LPrCn y Art. 174 Cn.',
    practicalGuidance: 'La sentencia estimatoria de inconstitucionalidad tiene EFECTOS GENERALES Y OBLIGATORIOS (erga omnes), expulsando la norma del ordenamiento jurídico salvadoreño. La Sala puede dictar sentencias interpretativas, aditivas o sustitutivas, y modular en el tiempo los efectos para evitar vacíos normativos traumáticos.',
    commonMistakes: 'Pretender que la inconstitucionalidad resuelva disputas monetarias privadas entre particulares en lugar de la expulsión normativa general.',
    modelSnippet: 'PIDO: Se declare la INCONSTITUCIONALIDAD con efectos erga omnes del precepto demandado y se ordene la publicación de la sentencia en el Diario Oficial para su expulsión del ordenamiento.',
  },
];

export const AMPARO_RESOLVED_WORKSHOP_CASE: ProceduralWorkshopCase = {
  id: 'workshop-amparo-01',
  title: 'Taller de Amparo Resuelto: Destitución Arbitraria de Empleada Embarazada',
  procedureType: 'Amparo',
  constitutionalSubject: 'Violación al Fuero de Maternidad y Debido Proceso (Arts. 11, 32 y 38 Ord. 11° Cn.)',
  proceduralStages: [
    {
      stageName: 'Fase 1: Demanda Inicial y Acreditación de Agravio Personal',
      description: 'La demandante promueve juicio de amparo contra el Titular del Ministerio por haber emitido acuerdo de no renovación contractual a pesar de encontrarse en su séptimo mes de embarazo y haber presentado constancia médica oficial del ISSS.',
      forensicModelSnippet: 'Vengo a demandar en Juicio de Amparo al señor MINISTRO DE OBRAS PÚBLICAS por emitir el Acuerdo N° 402 en el que cesa mis labores por supuesta expiración de plazo contractual, lesionando mi derecho fundamental a la estabilidad laboral reforzada consagrado en el Art. 38 Ord. 11° Cn.',
      courtResolution: 'Auto de Admisión: La Sala admite la demanda de amparo por existir apariencia de buen derecho (fumus boni iuris) y ordena la suspensión provisional del acto reclamado como medida cautelar.',
    },
    {
      stageName: 'Fase 2: Medida Cautelar Positiva y Reinstalación Preventiva',
      description: 'La Sala emite medida cautelar ordenando que la trabajadora sea restituida provisionalmente en sus funciones o continúe devengando su salario y prestaciones médicas en el ISSS mientras se tramita el proceso.',
      forensicModelSnippet: 'SOLICITUD: Se decrete medida cautelar positiva ordenando al demandado abstenerse de separar a la trabajadora del sistema de cotizaciones del ISSS a fin de salvaguardar la vida y salud del nonato.',
      courtResolution: 'Medida Cautelar Decretada: Ordénase a la autoridad demandada reinstalar provisionalmente a la peticionaria o garantizar el pago ininterrumpido de sus estipendios y cobertura obstétrica.',
    },
    {
      stageName: 'Fase 3: Informe de la Autoridad Demandada y Traslado a la Fiscalía',
      description: 'El Ministro demandado rinde informe justificativo alegando que el contrato era por servicios profesionales con plazo determinado. La FGR emite dictamen concluyendo que el fuero de maternidad protege a toda trabajadora independientemente de la modalidad contractual.',
      forensicModelSnippet: 'INFORME MINISTERIAL: Se expone que la relación no era de ley de salarios sino contractual eventual, operando la terminación ordinaria por vencimiento del plazo convenido.',
      courtResolution: 'Traslado Fiscal: La Fiscalía General de la República dictamina que la terminación unilateral por vencimiento de plazo durante el embarazo constituye fraude de ley y despido arbitrario.',
    },
    {
      stageName: 'Fase 4: Sentencia Definitiva y Condena Reparatoria Integral',
      description: 'La Sala de lo Constitucional declara con lugar el amparo, declara nulo el acto de destitución y ordena la reparación patrimonial integral por los salarios caídos y daño moral.',
      forensicModelSnippet: 'PETICIÓN DE SENTENCIA: Se declare la violación constitucional, la nulidad del acuerdo de destitución y se habilite la vía civil indemnizatoria conforme al Art. 245 Cn.',
      courtResolution: 'SENTENCIA ESTIMATORIA: Declárase la vulneración a los Arts. 11 y 38 Ord. 11° Cn. Se ordena el pago inmediato de todos los salarios no devengados y prestaciones hasta culminar el descanso de maternidad.',
    },
  ],
  keyPrecedentCSJ: 'Sentencia de Amparo Ref. 68-2011 (Sala de lo Constitucional): "La estabilidad reforzada por maternidad es universal e irrenunciable, prevaleciendo sobre cualquier estipulación de contrato temporal o servicios profesionales".',
};

export const HABEAS_CORPUS_RESOLVED_WORKSHOP_CASE: ProceduralWorkshopCase = {
  id: 'workshop-hc-01',
  title: 'Taller de Hábeas Corpus Resuelto: Prolongación Excesiva de Prisión Preventiva',
  procedureType: 'Hábeas Corpus',
  constitutionalSubject: 'Violación al Límite Temporal de la Detención Provisional y Libertad Física (Arts. 11 y 13 Cn.)',
  proceduralStages: [
    {
      stageName: 'Fase 1: Solicitud Antiformalista de Hábeas Corpus',
      description: 'El familiar de un procesado presenta memorial manuscrito exponiendo que el imputado lleva 38 meses en detención provisional sin que se haya instalado la vista pública por reprogramaciones continuas del tribunal de sentencia.',
      forensicModelSnippet: 'Comparezco a solicitar HÁBEAS CORPUS en favor de mi hijo [...], quien guarda prisión en el Penal de Izalco desde hace más de tres años sin haber sido llevado a juicio, violando el plazo máximo del Art. 8 PrPn y Art. 11 Cn.',
      courtResolution: 'Auto de Admisión y Nombramiento: La Sala admite a trámite la solicitud y designa como Juez Ejecutor al Licenciado [...], ordenándole apersonarse en veinticuatro horas.',
    },
    {
      stageName: 'Fase 2: Diligenciamiento e Intimación del Juez Ejecutor',
      description: 'El Juez Ejecutor se constituye en el Tribunal de Sentencia y en el Centro Penal, revisa el expediente judicial y constata que la detención superó el límite máximo legal sin que exista prórroga motivada.',
      forensicModelSnippet: 'ACTA DEL JUEZ EJECUTOR: Verifiqué materialmente que la orden de detención provisional fue emitida el 15 de enero de 2021 y a la fecha han transcurrido 38 meses sin auto fundado de ampliación cautelar.',
      courtResolution: 'Informe del Ejecutor: Se concluye que la dilación obedece a inercia del tribunal y no a maniobras dilatorias de la defensa, configurando exceso de detención provisional.',
    },
    {
      stageName: 'Fase 3: Informe Justificativo del Tribunal de Sentencia',
      description: 'El juez presidente del tribunal de sentencia rinde informe alegando sobrecarga laboral y saturación de la agenda de audiencias como justificación de la tardanza.',
      forensicModelSnippet: 'INFORME JUDICIAL: El tribunal justifica las suspensiones en la falta de traslado de imputados por la Dirección General de Centros Penales y la congestión de vistas públicas prioritarias.',
      courtResolution: 'Criterio Sala CSJ: La sobrecarga de trabajo y deficiencias logísticas del Estado son inoponibles a las garantías constitucionales del procesado.',
    },
    {
      stageName: 'Fase 4: Sentencia Estimatoria y Cese de la Prisión Preventiva',
      description: 'La Sala declara con lugar el Hábeas Corpus y ordena al Tribunal de Sentencia hacer cesar inmediatamente la privación de libertad e imponer medidas alternas a la prisión.',
      forensicModelSnippet: 'FALLO SALA: Ha lugar al Hábeas Corpus por vulneración a la libertad física. Se ordena al tribunal de la causa decretar la inmediata libertad del favorecido bajo medidas cautelares no privativas de libertad.',
      courtResolution: 'EJECUCIÓN INMEDIATA: El favorecido queda en libertad bajo fianza juratoria y presentación periódica ante el juzgado, restableciendo la supremacía del Art. 11 Cn.',
    },
  ],
  keyPrecedentCSJ: 'Sentencia de Hábeas Corpus Ref. 179-2011 (Sala de lo Constitucional): "La inercia judicial o la mora procesal no justifican la prolongación automática de la prisión preventiva más allá de los plazos legales".',
};

export const INCONSTITUCIONALIDAD_RESOLVED_WORKSHOP_CASE: ProceduralWorkshopCase = {
  id: 'workshop-inc-01',
  title: 'Taller de Inconstitucionalidad Resuelto: Vicio de Deliberación Democrática y Dispensa de Trámite',
  procedureType: 'Inconstitucionalidad',
  constitutionalSubject: 'Inconstitucionalidad Formal por Vulneración al Proceso Legislativo y Debate Plural (Arts. 125, 131 y 135 Cn.)',
  proceduralStages: [
    {
      stageName: 'Fase 1: Demanda Ciudadana en Acción Popular',
      description: 'Un colectivo de abogados y estudiantes presenta demanda de inconstitucionalidad contra un decreto legislativo que creó una contribución especial patrimonial aprobado en sesión plenaria con dispensa de trámite sin dictamen técnico ni debate previo.',
      forensicModelSnippet: 'Promovemos demanda de inconstitucionalidad en ejercicio de la acción popular (Art. 183 Cn.) contra el Decreto Legislativo N° 815 por infracción directa a los Arts. 125 y 135 Cn., al haberse suprimido de forma injustificada el debate parlamentario democrático.',
      courtResolution: 'Auto de Admisión: La Sala admite a trámite la demanda por vicio de forma en la formación de la ley y confiere traslado a la Asamblea Legislativa y al Fiscal General de la República.',
    },
    {
      stageName: 'Fase 2: Informe de la Asamblea Legislativa y Justificación de Urgencia',
      description: 'La Asamblea Legislativa rinde informe alegando que la dispensa de trámite es una facultad discrecional soberana del pleno consagrada en su Reglamento Interior.',
      forensicModelSnippet: 'INFORME ASAMBLEA: Se argumenta que el Art. 76 del Reglamento Interior de la Asamblea faculta la dispensa de trámite por mayoría calificada cuando el pleno determine que existe urgencia.',
      courtResolution: 'Criterio Constitucional: La urgencia no puede ser un acto de mera voluntad política; debe fundamentarse en datos fácticos objetivos y comprobables que justifiquen omitir el estudio de comisión.',
    },
    {
      stageName: 'Fase 3: Dictamen de la Fiscalía General de la República',
      description: 'La FGR emite opinión señalando que el principio de representación democrática exige que los diputados de todas las fracciones conozcan el texto que votarán para garantizar la deliberación informada.',
      forensicModelSnippet: 'DICTAMEN FISCAL: Se constata en la bitácora de la sesión plenaria que el proyecto de ley no fue leído en el pleno ni repartido con antelación, impidiendo el debate racional entre mayorías y minorías.',
      courtResolution: 'Conclusión Fiscal: El decreto adolece de un vicio formal insubsanable que vulnera la soberanía popular emanada del pueblo (Art. 86 y 125 Cn.).',
    },
    {
      stageName: 'Fase 4: Sentencia Definitiva con Efectos Erga Omnes',
      description: 'La Sala de lo Constitucional pronuncia sentencia definitiva declarando inconstitucional en su totalidad el decreto legislativo y ordenando su expulsión inmediata del ordenamiento jurídico.',
      forensicModelSnippet: 'FALLO CONSTITUCIONAL: Declárase inconstitucional, de un modo general y obligatorio, el Decreto Legislativo N° 815 por vulnerar el procedimiento formal de formación de la ley consagrado en el Art. 135 Cn.',
      courtResolution: 'EFECTOS ERGA OMNES: El decreto queda expulsado del sistema legal, ordenándose la publicación íntegra de la sentencia en el Diario Oficial para su cumplimiento general.',
    },
  ],
  keyPrecedentCSJ: 'Sentencia de Inconstitucionalidad Ref. 6-2016 (Sala de lo Constitucional): "El principio de deliberación democrática exige debate público y estudio técnico previo; la dispensa de trámite injustificada vicia de inconstitucionalidad formal el acto legislativo".',
};

// ============================================================================
// CORPUS AMPLIADO: 10 RAMAS DEL DERECHO CON SUSTENTO DOCTRINAL Y 50 CASOS RESUELTOS
// ============================================================================

export const CONSTITUTION_LAW_BRANCHES: LawBranch[] = [
  // ==========================================
  // 1. DERECHO CONSTITUCIONAL
  // ==========================================
  {
    id: 'constitucional',
    name: 'Derecho Constitucional',
    type: 'publico',
    icon: '🏛️',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
    summary: 'Rama fundamental del ordenamiento jurídico salvadoreño que consagra la supremacía normativa, la arquitectura republicana del poder público, el sistema de frenos y contrapesos y la tutela irreductible de la dignidad humana.',
    doctrinalBasis: 'Doctrina de supremacía constitucional (Kelsen), principio pro-persona, separación funcional de poderes de Montesquieu, cláusulas pétreas irreformables (Art. 248 Cn.) y control de convencionalidad vinculante.',
    substantiveAnalysis: `El Derecho Constitucional en la República de El Salvador tiene su núcleo dogmático e institucional en la Constitución de 1983. Conforme a la reiterada jurisprudencia de la Sala de lo Constitucional de la Corte Suprema de Justicia, la Carta Magna no es un mero catálogo de aspiraciones políticas o declaraciones retóricas, sino una norma jurídica directamente aplicable y vinculante para gobernantes y gobernados (fuerza normativa directa de la Constitución).

El diseño constitucional salvadoreño se estructura sobre dos pilares indisolubles: la parte dogmática y la parte orgánica. En la vertiente dogmática, el Art. 1 erige el principio pro-persona como la norma fundante y cláusula pétrea axiológica: el Estado está al servicio del ser humano y no a la inversa, protegiendo la vida desde el instante de la concepción. Esta primacía de la dignidad humana irradia a todo el catálogo de derechos fundamentales (libertad, igualdad, debido proceso, propiedad, salud y trabajo).

En la vertiente orgánica, el Art. 86 Cn. consagra el principio de legalidad estatal restrictiva: los funcionarios públicos son delegados del pueblo y no tienen más facultades que las que expresamente les confiere la ley formal escrita. A diferencia del ciudadano libre, que puede realizar todo aquello que la ley no prohíba (Art. 8 Cn.), el funcionario público solo puede actuar cuando existe habilitación legal expresa y previa. La división de poderes entre los Órganos Legislativo, Ejecutivo y Judicial es indelegable, aunque colaboran armónicamente entre sí.

El control de constitucionalidad en El Salvador opera a través de un modelo dual o mixto sumamente sofisticado:
1. Control Difuso o Concreto (Art. 185 Cn.): Faculta y obliga a todo juez o tribunal de la República, en cualquier materia o instancia, a inaplicar de oficio o a petición de parte cualquier ley secundaria o reglamento que contradiga la Constitución, remitiendo la resolución inaplicatoria a la Sala de lo Constitucional para su confirmación o revocatoria.
2. Control Concentrado o Abstracto (Arts. 174 y 183 Cn.): Atribuido con exclusividad a la Sala de lo Constitucional de la Corte Suprema de Justicia para declarar la invalidez de leyes con efectos erga omnes a través de los procesos de Inconstitucionalidad, Amparo y Hábeas Corpus.
3. Bloque de Constitucionalidad y Control de Convencionalidad (Art. 144 Cn.): En virtud del principio monista moderado consagrado en el Art. 144 de la Constitución, los tratados internacionales de derechos humanos ratificados por El Salvador ostentan jerarquía supralegal superior a cualquier ley secundaria ordinaria. Conforme a la doctrina vinculante de la Sala de lo Constitucional, los derechos y garantías consagrados en la Convención Americana sobre Derechos Humanos (Pacto de San José) forman parte del bloque de constitucionalidad, obligando a los jueces ordinarios a ejercer de oficio el control de convencionalidad difuso frente a leyes internas incompatibles.
4. Principios Hermenéuticos Constitucionales: La interpretación de la Carta Magna salvadoreña se rige por los cánones de unidad de la Constitución, concordancia práctica (armonización de bienes jurídicos constitucionales en tensión sin anular ninguno de ellos), eficacia integradora y el principio pro-libertate o favor constitutionis.
5. Cláusulas Pétreas y Límites Materiales a la Reforma (Art. 248 inc. 4° Cn.): El ordenamiento salvadoreño distingue con nitidez entre el poder constituyente originario y el poder constituyente derivado o reformador. El Art. 248 inc. 4° prohíbe de forma taxativa e inderogable modificar la forma republicana, democrática y representativa de gobierno, el territorio de la República y el principio de alternabilidad en el ejercicio de la Presidencia de la República.
6. Régimen de Excepción y Garantías Inderogables (Arts. 29 a 31 Cn.): En situaciones de extrema anomalía institucional (guerra, rebelión, catástrofe pública o graves perturbaciones al orden público), la Asamblea Legislativa puede suspender de forma temporal ciertas libertades (entrada y salida del territorio, libertad de expresión, asociación e inviolabilidad de correspondencia), pero jamás podrá suspenderse el derecho a la vida, la integridad física, la prohibición de tortura ni la garantía judicial del proceso de Hábeas Corpus para verificar la legalidad material de la privación de libertad.`,
    entries: [
      {
        articleRef: 'Art. 1 de la Constitución de la República',
        literalText: 'El Salvador reconoce a la persona humana como el origen y el fin de la actividad del Estado, al cual está organizado para la consecución de la justicia, de la seguridad jurídica y del bien común. Asimismo reconoce como persona humana a todo ser humano desde el instante de la concepción.',
        simplifiedText: 'El Estado y todas sus instituciones existen para servir y proteger a la persona humana, no al revés. La vida, la dignidad y el bienestar de cada salvadoreño están en el centro de todas las leyes desde el momento de la concepción.',
        analyticalCommentary: 'Constituye la cláusula pétrea axiológica y la norma fundante de todo el sistema legal salvadoreño. La Sala de lo Constitucional ha reiterado que cualquier ley, decreto o acto gubernamental que instrumentalice al ser humano o vulnere su dignidad inherente adolece de inconstitucionalidad insubsanable.',
      },
      {
        articleRef: 'Art. 86 de la Constitución de la República',
        literalText: 'El poder público emana del pueblo. Los órganos del Gobierno lo ejercerán independientemente dentro de las respectivas atribuciones y estipulaciones que establecen esta Constitución y las leyes. Las atribuciones de los órganos del Gobierno son indelegables, pero éstos colaborarán entre sí en el ejercicio de las funciones públicas. Los funcionarios del Gobierno son delegados del pueblo y no tienen más facultades que las que expresamente les da la ley.',
        simplifiedText: 'Principio de Legalidad: Ningún funcionario público puede hacer lo que se le antoje. Solo pueden hacer estrictamente lo que la ley escrita les autoriza de manera expresa. Por el contrario, los ciudadanos son libres de hacer todo lo que la ley no prohíba.',
        analyticalCommentary: 'Pilar angular del Estado Constitucional de Derecho contra la arbitrariedad y el absolutismo. La regla de clausura estatal es restrictiva: lo no atribuido por ley a la autoridad pública le está vedado categóricamente.',
      },
      {
        articleRef: 'Art. 246 de la Constitución de la República',
        literalText: 'Los principios, derechos y obligaciones establecidos por esta Constitución no pueden ser alterados por las leyes que regulen su ejercicio. La Constitución prevalecerá sobre todas las leyes y reglamentos. El interés público tiene primacía sobre el interés privado.',
        simplifiedText: 'Supremacía Constitucional: La Constitución es la ley suprema de El Salvador (la cima de la pirámide de Kelsen). Ningún código, reglamento, ordenanza municipal o decreto presidencial puede contradecirla ni recortar los derechos que ella garantiza.',
        analyticalCommentary: 'Consagra el principio de jerarquía normativa. Toda ley secundaria incompatible con la Constitución es nula de pleno derecho e inaplicable por los jueces mediante el control difuso de constitucionalidad (Art. 185 Cn.).',
      },
    ],
    solvedCases: [
      {
        id: 'case-const-01',
        caseNumber: 1,
        title: 'Control Difuso de Constitucionalidad en Juicio de Inquilinato',
        factualContext: 'Un juzgado de paz tramitaba un proceso de desalojo de vivienda donde una ley secundaria exigía que el inquilino consignara en efectivo el valor total de un año de cánones adelantados para tener derecho a ser escuchado y apelar la sentencia.',
        constitutionalIssue: '¿Vulnera el derecho de acceso a la justicia y doble instancia (Arts. 2 y 11 Cn.) el requisito de depósito pecuniario desproporcionado?',
        legalBasis: 'Arts. 2, 11 y 185 de la Constitución de la República; Art. 511 CPCM.',
        ratioDecidendi: 'El acceso a la protección jurisdiccional no puede supeditarse a cargas económicas exorbitantes que anulen el derecho de defensa de las personas de escasos recursos. El juez de paz ejerció legítimamente el control difuso inaplicando la norma por inconstitucional.',
        proceduralOutcome: 'La Sala de lo Constitucional confirmó la inaplicabilidad y ordenó a la Asamblea Legislativa reformar la disposición procesal expulsando la fianza previa obligatoria.',
      },
      {
        id: 'case-const-02',
        caseNumber: 2,
        title: 'Inconstitucionalidad de Decreto de Veto Presidencial por Controversia',
        factualContext: 'La Asamblea Legislativa superó el veto presidencial por inconstitucionalidad interpuesto por el Ejecutivo contra una ley que asignaba fondos a las municipalidades, remitiendo el decreto a la Sala en proceso de controversia constitucional.',
        constitutionalIssue: '¿Tiene el Ejecutivo competencia para vetar por inconstitucionalidad una ley de asignación presupuestaria general aprobada con mayoría calificada?',
        legalBasis: 'Arts. 137, 138 y 174 Cn.',
        ratioDecidendi: 'La Sala determinó que la Asamblea posee potestad exclusiva de asignación presupuestaria siempre que respete el equilibrio fiscal (Art. 226 Cn.), declarando que el veto era infundado.',
        proceduralOutcome: 'El Presidente de la República quedó conminado a sancionar y publicar la ley en el Diario Oficial dentro del término improrrogable de quince días.',
      },
      {
        id: 'case-const-03',
        caseNumber: 3,
        title: 'Omisión Legislativa en Regulación del Voto en el Exterior Municipal',
        factualContext: 'Ciudadanos salvadoreños residentes en Estados Unidos promovieron inconstitucionalidad por omisión debido a la falta de emisión de la ley secundaria que permitiera votar para alcaldes y concejos municipales.',
        constitutionalIssue: '¿Constituye la inacción del legislador una omisión inconstitucional lesiva del derecho fundamental al sufragio activo (Art. 72 Cn.)?',
        legalBasis: 'Arts. 72 Ord. 1°, 73 y 183 de la Constitución.',
        ratioDecidendi: 'La inercia legislativa prolongada que impide el ejercicio efectivo de un derecho político consagrado en la Constitución constituye una omisión legislativa inconstitucional de carácter vinculante.',
        proceduralOutcome: 'La Sala fijó un plazo perentorio a la Asamblea Legislativa para legislar el mecanismo de voto postal o electrónico en el exterior para los comicios municipales.',
      },
      {
        id: 'case-const-04',
        caseNumber: 4,
        title: 'Límites Constitucionales a las Cláusulas Pétreas Electorales',
        factualContext: 'Se controvirtió la interpretación del Art. 248 inc. 4° Cn. respecto a la alternabilidad en el ejercicio de la Presidencia de la República y la prohibición de reforma constitucional sobre la forma de gobierno.',
        constitutionalIssue: '¿Cuáles son los alcances inderogables de las cláusulas pétreas frente al poder constituyente derivado?',
        legalBasis: 'Arts. 85, 88, 154 y 248 inc. 4° Cn.',
        ratioDecidendi: 'Las cláusulas pétreas son límites materiales infranqueables al poder de reforma constitucional; garantizan la identidad democrática y republicana del Estado y no pueden ser alteradas por el parlamento.',
        proceduralOutcome: 'Se reafirmó la supremacía de las cláusulas intangibles frente a cualquier intento de enmienda legislativa ordinaria.',
      },
      {
        id: 'case-const-05',
        caseNumber: 5,
        title: 'Tutela del Derecho a la Verdad en Crímenes de Guerra Históricos',
        factualContext: 'Familiares de víctimas demandaron la apertura de archivos históricos militares para el esclarecimiento judicial de masacres cometidas en el conflicto armado.',
        constitutionalIssue: '¿Prevalece el derecho a la verdad y acceso a la información judicial sobre el secreto de Estado militar en atrocidades masivas?',
        legalBasis: 'Arts. 1, 2, 6, 144 y 244 Cn.',
        ratioDecidendi: 'El secreto militar o de seguridad nacional es inoponible ante investigaciones judiciales de crímenes de lesa humanidad y graves violaciones al Derecho Internacional Humanitario.',
        proceduralOutcome: 'Se ordenó al Ministerio de la Defensa Nacional permitir la inspección judicial directa de los planes operativos militares por el juez de instrucción competente.',
      },
    ],
  },

  // ==========================================
  // 2. DERECHO PENAL
  // ==========================================
  {
    id: 'penal',
    name: 'Derecho Penal',
    type: 'publico',
    icon: '⚖️',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-200',
    summary: 'Conjunto de normas sustantivas que definen los delitos, faltas, penas y medidas de seguridad, fundamentadas en el principio estricto de legalidad y la exclusiva protección de bienes jurídicos.',
    doctrinalBasis: 'Principio de legalidad penal estricto (nullum crimen, nulla poena sine lege praevia), principio de culpabilidad personal, lesividad (Art. 3 Pn) e interdicción de responsabilidad objetiva.',
    substantiveAnalysis: `El Derecho Penal sustantivo salvadoreño (regulado primordialmente en el Código Penal, D.L. 1030, y leyes penales especiales) encuentra sus barreras infranqueables de contención en las garantías consagradas en la Constitución de la República. El ius puniendi del Estado no es una potestad omnímoda ni arbitraria; está estrictamente sometido al principio de legalidad formal y estricta reserva de ley (Arts. 15 Cn. y 1 Pn): no hay delito ni pena sin ley previa escrita, estricta y cierta. Queda proscrita la analogía perjudicial y la retroactividad de la ley penal, salvo cuando sea favorable al imputado (principio de lex mitior, Art. 21 Cn. y 14 Pn).

Principios rectores del sistema penal salvadoreño:
1. Principio de Culpabilidad (Art. 4 Pn): La pena no puede superar la medida de la culpabilidad del autor. Se prohíbe taxativamente la responsabilidad objetiva; nadie puede ser sancionado penalmente por el simple resultado fortuito o sin la concurrencia probada de dolo (conocimiento y voluntad de realizar el tipo) o culpa (inobservancia del deber objetivo de cuidado).
2. Principio de Lesividad o Exclusiva Protección de Bienes Jurídicos (Art. 3 Pn): El derecho penal solo interviene cuando una conducta exteriorizada lesiona o pone efectivamente en peligro concreto un bien jurídico fundamental (la vida, la libertad, el patrimonio, la salud pública). Se descarta el derecho penal de autor o moralizante; solo se juzgan actos y hechos materiales.
3. Principio de Proporcionalidad y Humanidad de las Penas (Art. 27 Cn.): La Constitución salvadoreña prohíbe de forma taxativa las penas de muerte (salvo traición militar en guerra extranjera), la prisión perpetua y las penas crueles, infamantes o degradantes. Conforme al Art. 27 inc. 3° Cn., las instituciones penitenciarias tienen una finalidad eminentemente preventiva, educativa y de reinserción social de los condenados.
4. Teoría Estratificada del Delito y Causas de Justificación: En la dogmática penal salvadoreña, el delito es una acción u omisión humana típica, antijurídica y culpable. La antijuridicidad se excluye mediante causas de justificación legítimas (Art. 27 Pn): legítima defensa (concurrencia de agresión ilegítima, necesidad racional del medio empleado y falta de provocación suficiente), estado de necesidad justificante (salvaguarda de un bien mayor sacrificando uno menor) y cumplimiento de un deber legal o ejercicio legítimo de un derecho.
5. Formas de Autoría y Participación Criminal (Arts. 32 a 37 Pn): El ordenamiento penal sanciona de modo diferenciado la autoría directa (quien realiza por sí el verbo típico rector), la coautoría (quienes ejecutan conjuntamente el hecho con condominio funcional y plan acordado), la autoría mediata (quien se sirve de otro como instrumento inculpable o inimputable), la instigación (quien determina directamente a otro a delinquir) y la complicidad necesaria o no necesaria (quien presta auxilio previo o concomitante).
6. Causas de Inculpabilidad e Inimputabilidad (Arts. 27 y 28 Pn): Se excluye la culpabilidad cuando el agente actúa bajo miedo insuperable de un mal igual o mayor, error de prohibición invencible (creencia fundada e insuperable de que la conducta es lícita) o inimputabilidad por minoría de edad o enajenación mental sobrevenida, correspondiendo en este último caso medidas de seguridad curativas que jamás podrán superar la duración máxima de la pena de prisión prevista para el delito.
7. Concurso de Delitos y Sustitutivos Penales (Arts. 40 a 43 y 77 Pn): Se regula el concurso ideal (un solo hecho comete varios delitos, sancionándose con la pena del más grave aumentada hasta en una tercera parte) y el concurso real (múltiples acciones independientes originan varios delitos, acumulándose materialmente las penas). Como alternativas a la prisión corta, el Art. 77 Pn faculta la suspensión condicional de la ejecución de la pena para condenas que no superen los tres años de privación de libertad cuando el pronóstico social del condenado sea favorable.`,
    entries: [
      {
        articleRef: 'Art. 12 de la Constitución de la República',
        literalText: 'Toda persona a quien se impute un delito, se presumirá inocente mientras no se pruebe su culpabilidad conforme a la ley y en juicio público, en el que se le aseguren todas las garantías necesarias para su defensa. La persona detenida debe ser informada de manera inmediata y comprensible de sus derechos y de las razones de su detención.',
        simplifiedText: 'Presunción de Inocencia: Toda persona es inocente ante la ley hasta que un juez dicte una sentencia condenatoria firme basada en pruebas legales. Nadie tiene que demostrar que es inocente; es la Fiscalía la obligada a demostrar la culpabilidad más allá de toda duda razonable.',
        analyticalCommentary: 'Garantía judicial cardinal derivada de los pactos internacionales de derechos humanos (Art. 8 CADH). Impone la carga de la prueba íntegra al ente acusador e impide tratar al procesado como culpable de antemano.',
      },
      {
        articleRef: 'Art. 15 de la Constitución de la República',
        literalText: 'Nadie puede ser juzgado sino conforme a leyes promulgadas con anterioridad al hecho de que se trate, y por los tribunales que previamente haya establecido la ley.',
        simplifiedText: 'Principio de Legalidad Penal e Irretroactividad: Para que un acto sea castigado como delito, debe haber estado escrito y prohibido en el Código Penal antes de que ocurriera el hecho. No se pueden inventar delitos ni tribunales especiales después de sucedido un acontecimiento.',
        analyticalCommentary: 'Garantía del Juez Natural y prohibición de retroactividad penal perjudicial. Protege al ciudadano frente a la persecución política retrospectiva o la creación ad-hoc de comisiones juzgadoras extraordinarias.',
      },
      {
        articleRef: 'Art. 27 de la Constitución de la República',
        literalText: 'Sólo podrá imponerse la pena de muerte en los casos previstos por las leyes militares durante el estado de guerra internacional. Se prohíbe la prisión por deudas, las penas perpetuas, las infamantes, las proscriptivas y toda especie de tormento. El Estado organizará los centros penitenciarios con el objeto de corregir a los delincuentes, educarlos y formarles hábitos de trabajo, procurando su readaptación y la prevención de los delitos.',
        simplifiedText: 'Límites a las Penas y Fin Readaptador: Se prohíben las torturas, las cadenas perpetuas y las cárceles por deudas de dinero. Las prisiones deben reeducar y resocializar a los internos mediante el trabajo y el estudio, no destruirlos.',
        analyticalCommentary: 'Fija los estándares humanitarios de la sanción penal. La Sala de lo Constitucional declaró en base a este artículo el Estado de Cosas Inconstitucional por hacinamiento severo en recintos de detención.',
      },
    ],
    solvedCases: [
      {
        id: 'case-pen-01',
        caseNumber: 1,
        title: 'Exclusión Penal por Responsabilidad Objetiva en Accidente Fortuito',
        factualContext: 'Un conductor de autobús transitaba a velocidad reglamentaria cuando un peatón en estado de ebriedad se lanzó intempestivamente bajo las llantas traseras en una curva a oscuras.',
        constitutionalIssue: '¿Puede condenarse al conductor por homicidio culposo si no violó ninguna norma de tránsito?',
        legalBasis: 'Art. 4 del Código Penal; Art. 12 Cn.',
        ratioDecidendi: 'El Art. 4 Pn prohíbe terminantemente la responsabilidad por el simple resultado. Al no existir infracción al deber objetivo de cuidado, la muerte devino de la autopuesta en peligro exclusiva de la víctima.',
        proceduralOutcome: 'Sentencia absolutoria definitiva por atipicidad de la conducta culposa.',
      },
      {
        id: 'case-pen-02',
        caseNumber: 2,
        title: 'Inaplicabilidad de Tipo Penal Abierto por Falta de Taxatividad',
        factualContext: 'Se procesaba a un comerciante bajo una ordenanza que sancionaba "actos que atenten contra la tranquilidad colectiva" con penas restrictivas de libertad.',
        constitutionalIssue: '¿Vulnera el mandato de certeza y taxatividad penal (Art. 15 Cn.) un tipo penal impreciso y abierto?',
        legalBasis: 'Art. 15 Cn.; Art. 1 Código Penal.',
        ratioDecidendi: 'El principio de legalidad exige lex certa: la ley penal debe describir con absoluta claridad y precisión la conducta sancionada para que el ciudadano conozca qué está prohibido.',
        proceduralOutcome: 'El juzgador inaplicó el precepto por inconstitucional y dictó sobreseimiento definitivo.',
      },
      {
        id: 'case-pen-03',
        caseNumber: 3,
        title: 'Retroactividad Penal Favorable (Lex Mitior) en Delito Patrimonial',
        factualContext: 'Un reo cumplía condena de ocho años por apropiación indebida cuando la Asamblea aprobó una reforma penal reduciendo la pena máxima a cuatro años.',
        constitutionalIssue: '¿Debe aplicarse de oficio la rebaja de pena a quien ya tiene sentencia firme?',
        legalBasis: 'Art. 21 Cn.; Art. 14 inc. 2° Pn.',
        ratioDecidendi: 'La retroactividad de la ley penal más favorable es un derecho fundamental que beneficia incluso a los condenados con sentencia firme ejecutoriada.',
        proceduralOutcome: 'El Juzgado de Vigilancia Penitenciaria modificó el cómputo de la pena y ordenó la libertad por cumplimiento de condena.',
      },
      {
        id: 'case-pen-04',
        caseNumber: 4,
        title: 'Eximente de Miedo Insuperable en Coacción Extorsiva Pandilleril',
        factualContext: 'Una tendera fue obligada bajo amenaza de muerte inminente contra sus hijos a guardar un paquete con dinero producto de extorsión durante veinticuatro horas.',
        constitutionalIssue: '¿Es penalmente reprochable la conducta realizada bajo amenaza letal irresistible?',
        legalBasis: 'Art. 27 N° 4 del Código Penal (Miedo Insuperable).',
        ratioDecidendi: 'El miedo insuperable anula la exigibilidad de otra conducta: el ordenamiento jurídico no puede exigir conductas heroicas a personas bajo coacción violenta extrema.',
        proceduralOutcome: 'Absolución por concurrencia de causa de inculpabilidad.',
      },
      {
        id: 'case-pen-05',
        caseNumber: 5,
        title: 'Límite Temporal a Medidas de Seguridad de Internamiento Psiquiátrico',
        factualContext: 'Una persona declarada inimputable por esquizofrenia permaneció internada en el hospital psiquiátrico por más de veinte años por un delito cuya pena máxima era de tres años.',
        constitutionalIssue: '¿Pueden las medidas de seguridad extenderse de por vida vulnerando el Art. 27 Cn.?',
        legalBasis: 'Arts. 27 y 11 Cn.; Art. 94 Código Penal.',
        ratioDecidendi: 'Las medidas de seguridad jamás pueden superar el tiempo máximo de la pena privativa de libertad aplicable al delito, debiendo sustituirse por tratamiento ambulatorio familiar.',
        proceduralOutcome: 'Orden judicial de egreso hospitalario y entrega al cuidado de su red familiar tutelar.',
      },
    ],
  },

  // ==========================================
  // 3. DERECHO PROCESAL (CIVIL, MERCANTIL Y PENAL)
  // ==========================================
  {
    id: 'procesal',
    name: 'Derecho Procesal (Civil, Mercantil y Penal)',
    type: 'publico',
    icon: '📜',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-200',
    summary: 'Conjunto de principios y normas formales que disciplinan la tutela judicial efectiva, el debido proceso, la inmediación probatoria y la ejecución forzosa ante los tribunales salvadoreños.',
    doctrinalBasis: 'Garantía del debido proceso legal (due process of law), contradicción, igualdad de armas, congruencia judicial y prohibición del doble juzgamiento (non bis in idem).',
    substantiveAnalysis: `El Derecho Procesal constituye el vehículo instrumental a través del cual cobran vida y eficacia los derechos materiales tutelados por el ordenamiento jurídico. En El Salvador, la codificación procesal moderna se consolida a través de dos grandes cuerpos normativos: el Código Procesal Civil y Mercantil (CPCM, D.L. 711) y el Código Procesal Penal (PrPn, D.L. 733). Ambos ordenamientos abandonaron el vetusto sistema escriturario, inquisitivo y secreto del siglo XIX para abrazar el modelo por audiencias orales, presidido por los principios rectores de inmediación, concentración, contradicción, publicidad y celeridad procesal.

El núcleo constitucional de la materia procesal reside en el Art. 11 de la Constitución: ninguna persona puede ser privada de su vida, libertad, propiedad o posesión sin haber sido previamente oída y vencida en juicio justo con arreglo a las leyes preexistentes. De este mandato supremo derivan las siguientes garantías esenciales:
1. Derecho a la Tutela Judicial Efectiva (Art. 2 y 11 Cn.): Acceso libre a los tribunales sin obstáculos formalistas injustificados (pro actione), derecho a obtener una resolución de fondo motivada en derecho y derecho a la ejecución efectiva de lo juzgado.
2. Garantía del Emplazamiento Personal: El emplazamiento es el acto procesal de mayor trascendencia en el litigio civil y mercantil. Notificar en dirección errónea o simular notificación edictal vicia el proceso de nulidad absoluta insubsanable.
3. Principio de Motivación de las Resoluciones Judiciales (Art. 216 CPCM y Art. 144 PrPn): Los jueces deben exteriorizar con claridad las razones fácticas y jurídicas que sustentan su fallo. Las fundamentaciones lacónicas, dogmáticas o estereotipadas violan la seguridad jurídica.
4. Regla de Exclusión de la Prueba Ilícita: Toda prueba obtenida directa o indirectamente con vulneración a derechos fundamentales consagrados en la Constitución es radicalmente nula y debe ser expulsada del acervo probatorio (doctrina de los frutos del árbol envenenado).
5. Principios Dispositivo, de Aportación y Oralidad por Audiencias (Arts. 7, 8 y 10 CPCM): Las partes procesales ostentan la exclusiva carga de iniciar el proceso, fijar los hechos controvertidos y aportar las pruebas correspondientes, sin que el juzgador pueda fallar más allá de lo pedido (principio de congruencia procesal, Art. 218 CPCM). El proceso común civil y mercantil se articula en torno a dos audiencias públicas: la Audiencia Preparatoria (donde se sanean los defectos procesales, se fija el objeto del debate y se admiten las pruebas) y la Audiencia Probatoria (destinada a la práctica oral concentrada de la prueba documental, testimonial y pericial).
6. Régimen General de Medidas Cautelares (Arts. 431 a 456 CPCM): Instrumento procesal preventivo para asegurar la efectividad de la futura sentencia frente al riesgo de insolvencia o mora procesal. Su concesión judicial exige inexcusablemente tres presupuestos: apariencia de buen derecho (fumus boni iuris), peligro en la demora (periculum in mora) y la prestación de caución suficiente por el peticionario para responder por eventuales daños y perjuicios si la demanda fuere desestimada.
7. Valoración de la Prueba Conforme a la Sana Crítica y Sistema Recursivo: El sistema probatorio salvadoreño adopta la sana crítica como regla general de valoración (Art. 416 CPCM), vinculando al juzgador a las leyes de la lógica formal (identidad, no contradicción, razón suficiente), los conocimientos científicos afianzados y las máximas de la experiencia común. Asimismo, se consagra un sistema recursivo escalonado que garantiza el derecho al recurso mediante la Revocatoria (ante el mismo juez), la Apelación (ante las Cámaras de Segunda Instancia) y el Recurso de Casación (ante la Sala de lo Civil o Sala de lo Penal de la CSJ por infracción de ley o vicios procesales in procedendo).`,
    entries: [
      {
        articleRef: 'Art. 11 de la Constitución de la República',
        literalText: 'Ninguna persona puede ser privada del derecho a la vida, a la libertad, a la propiedad y posesión, ni de cualquier otro de sus derechos sin ser previamente oída y vencida en juicio con arreglo a las leyes; ni puede ser enjuiciada dos veces por la misma causa.',
        simplifiedText: 'Garantía del Debido Proceso y Non Bis In Idem: Nadie puede perder su libertad, su casa o sus derechos sin haber tenido un juicio justo donde pueda defenderse, presentar pruebas y ser escuchado por un juez. Además, una vez absuelto o condenado en sentencia definitiva, no te pueden volver a juzgar por el mismo hecho.',
        analyticalCommentary: 'Núcleo irreductible de la seguridad jurídica individual. Su quebrantamiento faculta la interposición inmediata de la acción constitucional de Hábeas Corpus (ante detención arbitraria) o Juicio de Amparo (ante despojo patrimonial).',
      },
      {
        articleRef: 'Art. 172 de la Constitución de la República',
        literalText: 'La Corte Suprema de Justicia, las Cámaras de Segunda Instancia y los demás tribunales que establezcan las leyes secundarias, integran el Órgano Judicial. Corresponde exclusivamente a este Órgano la potestad de juzgar y hacer ejecutar lo juzgado en materias constitucional, civil, penal, mercantil, laboral, agraria y de lo contencioso-administrativo, así como en las otras que determine la ley. Los magistrados y jueces, en lo referente al ejercicio de la función jurisdiccional, son independientes y están sometidos exclusivamente a la Constitución y a las leyes.',
        simplifiedText: 'Exclusividad e Independencia Judicial: Solo los jueces del Órgano Judicial pueden impartir justicia y hacer cumplir las sentencias. Ningún presidente, militar, ministro o alcalde puede juzgar ni desobedecer lo que mande un juez. Los jueces son independientes y solo obedecen a la ley.',
        analyticalCommentary: 'Monopolio jurisdiccional e independencia judicial externa e interna. La Sala de lo Constitucional ha declarado la invalidez de cualquier comisión o ente administrativo que usurpe facultades de juzgamiento.',
      },
      {
        articleRef: 'Art. 182 Ord. 5° de la Constitución de la República',
        literalText: 'Son atribuciones de la Corte Suprema de Justicia: Vigilar que se administre pronta y cumplida justicia, para lo cual adoptará las medidas que estime necesarias.',
        simplifiedText: 'Pronta y Cumplida Justicia: La justicia que tarda no es justicia. La Corte Suprema debe supervisar a todos los tribunales del país para evitar la mora judicial, los atrasos injustificados y garantizar que los juicios se resuelvan en plazos razonables.',
        analyticalCommentary: 'Garantía del plazo razonable procesal. La Sala de lo Penal y la Sala de lo Civil han admitido recursos extraordinarios cuando los tribunales retardan indebidamente la emisión de sentencias.',
      },
    ],
    solvedCases: [
      {
        id: 'case-proc-01',
        caseNumber: 1,
        title: 'Nulidad Absoluta por Defecto Insubsanable de Emplazamiento',
        factualContext: 'Una demandante consignó la dirección de un inmueble desocupado para emplazar a su deudor, logrando sentencia estimatoria en rebeldía y orden de embargo sin que el demandado supiera del litigio.',
        constitutionalIssue: '¿Genera indefensión absoluta la notificación ficticia del emplazamiento procesal (Art. 181 CPCM)?',
        legalBasis: 'Arts. 11 Cn.; Arts. 181 y 232 literal c) CPCM.',
        ratioDecidendi: 'El emplazamiento es la base del contradictorio. La falta de notificación real en la residencia conocida del demandado lesiona el derecho de audiencia y acarrea la nulidad de todo lo actuado.',
        proceduralOutcome: 'Declaratoria de nulidad insubsanable desde el auto de emplazamiento y archivo provisional del embargo.',
      },
      {
        id: 'case-proc-02',
        caseNumber: 2,
        title: 'Exclusión de Prueba Ilícita por Violación de Telecomunicaciones',
        factualContext: 'En un juicio mercantil, la parte actora pretendió incorporar como prueba reina una grabación magnetofónica de una conversación telefónica privada obtenida sin autorización judicial.',
        constitutionalIssue: '¿Puede admitirse una prueba ilícita violatoria del secreto de las telecomunicaciones (Art. 24 Cn.)?',
        legalBasis: 'Art. 24 Cn.; Art. 316 CPCM; Art. 175 PrPn.',
        ratioDecidendi: 'La prueba obtenida con violación directa de garantías constitucionales adolece de nulidad radical y debe ser expulsada del debate sin importar su relevancia fáctica.',
        proceduralOutcome: 'Auto de exclusión probatoria definitiva y amonestación procesal a la parte proponente.',
      },
      {
        id: 'case-proc-03',
        caseNumber: 3,
        title: 'Eficacia de Cosa Juzgada Material frente a Nueva Demanda Simulada',
        factualContext: 'Un demandante que perdió un juicio civil declarativo de dominio por falta de pruebas interpuso una nueva demanda cambiando el nombre de la acción pero con idénticas partes, objeto y causa.',
        constitutionalIssue: '¿Opera la excepción perentoria de cosa juzgada para impedir el doble juzgamiento (Art. 11 Cn.)?',
        legalBasis: 'Art. 11 Cn.; Arts. 230 y 231 CPCM.',
        ratioDecidendi: 'La triple identidad (sujetos, objeto litigioso y causa de pedir) activa la eficacia negativa de la cosa juzgada impidiendo que un litigio resuelto sea reabierto bajo otro ropaje.',
        proceduralOutcome: 'Sentencia que declara ha lugar la excepción perentoria de cosa juzgada y condena en costas por temeridad.',
      },
      {
        id: 'case-proc-04',
        caseNumber: 4,
        title: 'Anulación de Fallo Judicial por Falta de Motivación Fáctica',
        factualContext: 'Una Cámara de Segunda Instancia confirmó una condena millonaria limitándose a copiar párrafos abstractos del código sin valorar las pruebas periciales de descargo.',
        constitutionalIssue: '¿Vulnera el derecho a la tutela efectiva la motivación judicial estereotipada y aparente (Art. 216 CPCM)?',
        legalBasis: 'Arts. 2 y 11 Cn.; Art. 216 CPCM.',
        ratioDecidendi: 'La motivación es una exigencia republicana que permite el control de la arbitrariedad; una sentencia sin análisis individualizado de las pruebas desfiladas es nula de pleno derecho.',
        proceduralOutcome: 'La Sala de lo Civil casó la sentencia y ordenó dictar un nuevo pronunciamiento debidamente motivado.',
      },
      {
        id: 'case-proc-05',
        caseNumber: 5,
        title: 'Revocatoria de Embargo Preventivo por Falta de Peligro en la Demora',
        factualContext: 'Una empresa acreedora solicitó el congelamiento de todas las cuentas bancarias de su competidor sin acreditar insolvencia inminente ni prestar la fianza legal exigida.',
        constitutionalIssue: '¿Cuáles son los presupuestos constitucionales de procedencia de las medidas cautelares patrimoniales?',
        legalBasis: 'Art. 2 Cn.; Arts. 431, 433 y 451 CPCM.',
        ratioDecidendi: 'Las medidas cautelares requieren la acreditación rigurosa y concurrente del periculum in mora (peligro en la demora) y el fumus boni iuris (apariencia de buen derecho), más la caución necesaria.',
        proceduralOutcome: 'Revocatoria inmediata del embargo preventivo y levantamiento de la restricción bancaria.',
      },
    ],
  },

  // ==========================================
  // 4. DERECHO ADMINISTRATIVO
  // ==========================================
  {
    id: 'administrativo',
    name: 'Derecho Administrativo',
    type: 'publico',
    icon: '🏢',
    badgeColor: 'bg-cyan-100 text-cyan-900 border-cyan-200',
    summary: 'Regula la organización, potestades, actos administrativos, procedimientos, contratación pública y régimen sancionador de la Administración Pública, tutelando los derechos de los administrados.',
    doctrinalBasis: 'Principio de legalidad administrativa positiva, Ley de Procedimientos Administrativos (LPA), Ley de la Jurisdicción Contencioso Administrativa (LJCA) y responsabilidad patrimonial del funcionario.',
    substantiveAnalysis: `El Derecho Administrativo salvadoreño experimentó una profunda modernización dogmática con la entrada en vigor de la Ley de Procedimientos Administrativos (LPA, D.L. 856 de 2018) y la Ley de la Jurisdicción Contencioso Administrativa (LJCA, D.L. 760 de 2017). Estas normas unificaron el régimen procedimental de todos los ministerios, instituciones autónomas y municipalidades, desterrando la dispersión normativa caótica y sometiendo a la burocracia estatal al paradigma constitucional del Estado de Derecho.

Principios rectores de la función administrativa en El Salvador:
1. Legalidad Positiva y Vinculación Positiva (Art. 86 Cn. y Art. 3 LPA): La administración pública solo puede actuar cuando una norma con rango de ley le atribuye competencia previa y expresa. Todo acto administrativo que carezca de habilitación legal o que se dicte excediendo las atribuciones es nulo de pleno derecho (Art. 36 LPA).
2. Derecho al Debido Procedimiento y Audiencia Previa: Antes de emitir cualquier acto desfavorable o sancionatorio que afecte derechos subjetivos o intereses legítimos de los particulares, la autoridad está obligada a conceder audiencia previa para que el administrado conozca los cargos, presente pruebas y formule alegatos (Art. 11 Cn. y Art. 4 LPA).
3. Potestad Sancionadora y Caducidad del Procedimiento (Arts. 139 a 147 LPA): La facultad punitiva de la administración está sujeta a los principios de tipicidad, irretroactividad, culpabilidad, proporcionalidad y non bis in idem. Asimismo, el legislador salvadoreño instituyó en el Art. 147 LPA la CADUCIDAD DEL PROCEDIMIENTO SANCIONADOR: si el procedimiento se paraliza o no se resuelve en el plazo máximo de seis meses, opera la caducidad automática de pleno derecho y el archivo forzoso de las actuaciones.
4. El Silencio Administrativo (Arts. 113 a 115 LPA): La falta de respuesta en plazo genera por regla general el silencio negativo (habilitando el recurso contencioso), pero en casos legalmente previstos genera el SILENCIO POSITIVO, adquiriendo el ciudadano el derecho solicitado mediante la certificación de acto presunto.
5. Responsabilidad Patrimonial del Servidor Público (Art. 245 Cn. y Arts. 56 a 62 LPA): Los funcionarios responden personalmente con su propio patrimonio por los daños causados por dolo o culpa grave al violar derechos constitucionales; el Estado responde de forma subsidiaria.
6. Elementos Estructurales de Validez del Acto Administrativo (Art. 21 LPA): Para desplegar presunción de legalidad y ejecutividad material, el acto administrativo debe reunir de forma concurrente cinco elementos esenciales: competencia del órgano emisor, presupuesto de hecho fáctico objetivo, objeto lícito y posible, causa o motivo legítimo, y estricta observancia del fin de interés público y procedimiento debido.
7. Régimen Dual de Invalidez: Nulidad Absoluta vs. Anulabilidad (Arts. 36 y 37 LPA): La nulidad de pleno derecho es insanable, imprescriptible y declarable de oficio ante actos dictados por órganos manifiestamente incompetentes, prescindiendo totalmente del procedimiento o constitutivos de delito; mientras que la anulabilidad rige para infracciones menores subsanables por convalidación formal.
8. Sistema de Recursos Administrativos y Control Judicial Contencioso (Arts. 131 a 138 LPA y LJCA): El administrado puede interponer el recurso facultativo de reconsideración ante el mismo emisor o el recurso jerárquico de apelación ante el superior orgánico para agotar la vía gubernativa previa, quedando habilitada la demanda contencioso administrativa ante los Juzgados, Cámaras y Sala de lo Contencioso Administrativo de la CSJ para la declaración de ilegalidad del acto y restablecimiento patrimonial.`,
    entries: [
      {
        articleRef: 'Art. 245 de la Constitución de la República',
        literalText: 'Los funcionarios y empleados públicos responderán personalmente y el Estado subsidiariamente, por los daños materiales o morales que causaren a consecuencia de la violación a los derechos consagrados en esta Constitución.',
        simplifiedText: 'Responsabilidad de Funcionarios Públicos: Si un funcionario público (alcalde, policía, ministro) vulnera los derechos constitucionales de una persona y le ocasiona daños, debe responder pagando con su propio dinero y patrimonio personal; y si no le alcanza, responde el Estado de forma subsidiaria.',
        analyticalCommentary: 'Consagra la responsabilidad civil directa de los servidores públicos por arbitrariedad institucional, rompiendo con el dogma decimonónico de la inmunidad soberana de la administración.',
      },
      {
        articleRef: 'Art. 86 de la Constitución de la República',
        literalText: 'El poder público emana del pueblo. Los órganos del Gobierno lo ejercerán independientemente dentro de las respectivas atribuciones y estipulaciones que establecen esta Constitución y las leyes. Las atribuciones de los órganos del Gobierno son indelegables, pero éstos colaborarán entre sí en el ejercicio de las funciones públicas. Los funcionarios del Gobierno son delegados del pueblo y no tienen más facultades que las que expresamente les da la ley.',
        simplifiedText: 'Principio de Legalidad Administrativa: Ninguna autoridad estatal puede inventarse facultades ni trámites que no estén expresamente contemplados en una ley formal emitida por la Asamblea Legislativa.',
        analyticalCommentary: 'Límite infranqueable a la discrecionalidad administrativa. La Sala de lo Contencioso Administrativo declara la nulidad de pleno derecho de todo acto administrativo dictado sin competencia legal.',
      },
      {
        articleRef: 'Art. 18 de la Constitución de la República',
        literalText: 'Toda persona tiene derecho a dirigir sus peticiones por escrito, de manera decorosa, a las autoridades legalmente establecidas; a que se le resuelvan, y a que se le haga saber lo resuelto.',
        simplifiedText: 'Derecho de Petición y Pronta Respuesta: Tienes el derecho de solicitar información, permisos o trámites a cualquier entidad del gobierno y las autoridades están obligadas a contestarte por escrito en un plazo razonable con una decisión fundamentada.',
        analyticalCommentary: 'Garantía cardinal del administrado frente a la inercia burocrática. El incumplimiento del deber de resolver habilita el amparo constitucional y el reclamo por silencio administrativo.',
      },
    ],
    solvedCases: [
      {
        id: 'case-admin-01',
        caseNumber: 1,
        title: 'Caducidad Automática de Procedimiento Sancionador por Inactividad',
        factualContext: 'Una superintendencia inició procedimiento sancionador contra una distribuidora de energía pero tardó dieciocho meses en resolver sin dictar actos de trámite.',
        constitutionalIssue: '¿Opera la caducidad del procedimiento sancionador transcurridos seis meses conforme al Art. 147 de la LPA?',
        legalBasis: 'Art. 147 Ley de Procedimientos Administrativos; Art. 11 Cn.',
        ratioDecidendi: 'La caducidad sancionadora opera de pleno derecho por ministerio de ley para poner fin a la incertidumbre del administrado frente a la inacción del Estado.',
        proceduralOutcome: 'Declaratoria de caducidad y archivo forzoso de la multa propuesta.',
      },
      {
        id: 'case-admin-02',
        caseNumber: 2,
        title: 'Certificación de Silencio Positivo en Concesión de Permiso de Obra',
        factualContext: 'Un ciudadano solicitó licencia de construcción ambiental; la ley especial confería silencio positivo tras treinta días hábiles y el ministerio no emitió pronunciamiento alguno.',
        constitutionalIssue: '¿Nace un derecho adquirido vinculante mediante la figura del silencio administrativo positivo?',
        legalBasis: 'Arts. 113, 114 y 115 LPA; Art. 86 Cn.',
        ratioDecidendi: 'El silencio positivo opera como un acto administrativo presunto plenamente eficaz e irrevocable de oficio por la administración sin juicio previo de lesividad.',
        proceduralOutcome: 'Expedición obligatoria de la certificación de acto presunto favorable para inicio de obras.',
      },
      {
        id: 'case-admin-03',
        caseNumber: 3,
        title: 'Nulidad de Pleno Derecho por Omisión de Audiencia Previa',
        factualContext: 'Un alcalde municipal clausuró de forma definitiva un centro educativo privado mediante acuerdo unilateral sin previa notificación de cargos ni plazo probatorio.',
        constitutionalIssue: '¿Adolece de nulidad insubsanable el acto dictado prescindiendo totalmente del procedimiento legalmente establecido?',
        legalBasis: 'Art. 36 literal d) LPA; Art. 11 Cn.',
        ratioDecidendi: 'Prescindir absolutamente del trámite de audiencia previa lesiona la garantía de defensa e invalida el acto administrativo con efectos retroactivos de nulidad absoluta.',
        proceduralOutcome: 'Sentencia del Juzgado de lo Contencioso Administrativo ordenando la reapertura inmediata del colegio.',
      },
      {
        id: 'case-admin-04',
        caseNumber: 4,
        title: 'Condena de Responsabilidad Patrimonial Directa a Funcionario Municipal',
        factualContext: 'Un jefe de catastro municipal destruyó maquinaria agrícola privada por disputas personales invocando falsamente una ordenanza de ordenamiento urbano.',
        constitutionalIssue: '¿Debe responder el funcionario con su propio patrimonio por daños causados con culpa grave (Art. 245 Cn.)?',
        legalBasis: 'Art. 245 Cn.; Arts. 56 y 58 LPA.',
        ratioDecidendi: 'El Art. 245 Cn. consagra la responsabilidad personal y directa del funcionario infractor cuando actúa con dolo o negligencia manifiesta en ejercicio de su cargo.',
        proceduralOutcome: 'Condena judicial al funcionario a pagar cuarenta mil dólares de su propio patrimonio por daños y perjuicios.',
      },
      {
        id: 'case-admin-05',
        caseNumber: 5,
        title: 'Improcedencia de Revocación de Oficio de Acto Favorable Firme',
        factualContext: 'Una institución autónoma revocó unilateralmente una pensión de jubilación legalmente otorgada tres años atrás alegando un supuesto error de cálculo interno.',
        constitutionalIssue: '¿Puede la administración anular por sí misma actos que confieren derechos subjetivos firmes?',
        legalBasis: 'Arts. 119 y 120 LPA; Art. 2 Cn.',
        ratioDecidendi: 'Los actos administrativos favorables y firmes no pueden ser revocados unilateralmente; la administración debe promover el proceso contencioso de lesividad ante los tribunales.',
        proceduralOutcome: 'Restablecimiento inmediato del goce de la pensión y condena en reintegro de pagos retenidos.',
      },
    ],
  },

  // ==========================================
  // 5. DERECHO TRIBUTARIO Y FINANCIERO
  // ==========================================
  {
    id: 'tributario',
    name: 'Derecho Tributario y Financiero',
    type: 'publico',
    icon: '💰',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    summary: 'Regula los ingresos del Estado (impuestos, tasas y contribuciones especiales), la potestad tributaria formal, el gasto público y los derechos y garantías de los contribuyentes.',
    doctrinalBasis: 'Principio de reserva de ley tributaria (nullum tributum sine lege), capacidad económica contributiva, igualdad fiscal, prohibición de no confiscatoriedad y generalidad.',
    substantiveAnalysis: `El Derecho Tributario salvadoreño (compilado en el Código Tributario, D.L. 230, leyes tributarias especiales y la Ley General Tributaria Municipal) encuentra su piedra angular dogmática en el principio universal de RESERVA DE LEY TRIBUTARIA consagrado en el Art. 231 en concordancia con el Art. 131 Ord. 6° de la Constitución de la República: no pueden imponerse tributos sino en virtud de una ley formal y para el servicio público del Estado. Ningún presidente, ministro ni concejo municipal puede instituir exacciones pecuniarias por vía reglamentaria o decreto administrativo unilateral.

Especies del Género Tributario en El Salvador:
1. Impuestos: Tributo cuya obligación tiene como hecho generador una situación independiente de toda actividad estatal relativa al contribuyente; grava la capacidad económica contributiva (como el Impuesto sobre la Renta o el IVA). Su creación está reservada con exclusividad privativa a la Asamblea Legislativa (Art. 131 Ord. 6° Cn.).
2. Tasas: Gravamen cuyo hecho generador consiste en la prestación efectiva o potencial de un servicio público administrativo o jurídico, individualizado, divisible y directo al sujeto pasivo (por ejemplo, recolección de basura o expedición de solvencias municipales). Los municipios pueden crear tasas conforme al Art. 204 Ord. 1° Cn., siempre que exista contraprestación real y mensurable.
3. Contribuciones Especiales: Tributo cuyo hecho generador es la obtención de un beneficio económico particular por el contribuyente derivado de la realización de obras públicas o actividades estatales de interés social colectivo.

Garantías Constitucionales y Régimen Sustantivo del Contribuyente:
- Principio de Capacidad Económica y No Confiscatoriedad: Los tributos deben estructurarse de forma proporcional y progresiva en función de la verdadera aptitud financiera del sujeto pasivo, sin que ningún gravamen pueda absorber una cuota sustancial del patrimonio o de la renta neta que anule de facto el derecho de propiedad garantizado por los Arts. 2 y 103 de la Constitución.
- Estructura de la Obligación Tributaria (Arts. 16 a 41 Código Tributario): La obligación tributaria es de derecho público y nace ipso iure al configurarse el hecho generador legalmente previsto, vinculando al sujeto activo (el Estado o Municipio acreedor) con el sujeto pasivo (contribuyente titular del hecho imponible o responsable por deuda ajena en calidad de agente de retención o percepción).
- Modos de Extinción y Prescripción Fiscal (Arts. 74 a 85 Código Tributario): La obligación tributaria se extingue por pago efectivo, compensación con saldos favorables líquidos, confusión, remisión por decreto legislativo general y prescripción de la acción de cobro ejecutivo de tres o diez años.
- Procedimiento de Fiscalización y Liquidación Oficiosa (Arts. 173 a 199 Código Tributario): La administración tributaria (Dirección General de Impuestos Internos DGII) ejerce facultades de auditoría contable; tras la emisión del informe de fiscalización, se confiere audiencia previa para desvirtuar las objeciones antes de dictar la resolución liquidatoria de impuestos y multas, la cual es recurrible en apelación ante el Tribunal de Apelaciones de los Impuestos Internos y de Aduanas (TAIIA).
- Caducidad de Facultades de Determinación (Art. 175 Código Tributario): La potestad estatal para fiscalizar y liquidar oficiosamente impuestos caduca en tres años contados desde el vencimiento del plazo para declarar, extinguiendo definitivamente la competencia de la autoridad tributaria.`,
    entries: [
      {
        articleRef: 'Art. 231 de la Constitución de la República',
        literalText: 'No pueden imponerse contribuciones sino en virtud de una ley y para el servicio público. Es facultad exclusiva de la Asamblea Legislativa decretar impuestos, tasas y demás contribuciones sobre toda clase de bienes, servicios e ingresos.',
        simplifiedText: 'Reserva de Ley Tributaria: Ningún presidente ni ministerio puede inventarse un impuesto por decreto. Todo impuesto nuevo (como el IVA o la Renta) tiene que ser debatido y aprobado obligatoriamente por los diputados en la Asamblea Legislativa mediante una ley formal.',
        analyticalCommentary: 'Garantía histórica universal ("no taxation without representation"). Impide la extracción fiscal discrecional por parte del Órgano Ejecutivo y exige justificación en el interés social colectivo.',
      },
      {
        articleRef: 'Art. 131 Ord. 6° de la Constitución de la República',
        literalText: 'Corresponde a la Asamblea Legislativa: Decretar impuestos, tasas y demás contribuciones sobre toda clase de bienes, servicios e ingresos, de una manera equitativa; y en caso de invasión legalmente declarada, o de guerra, decretar empréstitos forzosos en la misma forma.',
        simplifiedText: 'Equidad en los Impuestos: La Asamblea Legislativa debe cobrar impuestos de forma justa y equitativa: quien gana más debe contribuir más al Estado para financiar escuelas, hospitales y carreteras.',
        analyticalCommentary: 'Consagra el principio de justicia y equidad tributaria proporcional a la capacidad económica real del ciudadano contribuyente.',
      },
      {
        articleRef: 'Art. 204 Ord. 1° de la Constitución de la República',
        literalText: 'La autonomía de los Municipios comprende: Crear, modificar y suprimir tasas y contribuciones públicas para la realización de obras determinadas dentro de los límites que una ley general establezca.',
        simplifiedText: 'Tasas Municipales y Contraprestación: Las alcaldías solo pueden cobrar tasas municipales si demuestran que le dan al vecino un servicio directo a cambio (como el alumbrado de su calle o la recolección de su basura). No pueden inventar impuestos disfrazados de tasas.',
        analyticalCommentary: 'Límite sustantivo al poder tributario municipal. La Sala de lo Constitucional ha expulsado decenas de ordenanzas que cobraban tasas calculadas sobre las ventas o activos de empresas sin servicio medible.',
      },
    ],
    solvedCases: [
      {
        id: 'case-trib-01',
        caseNumber: 1,
        title: 'Inconstitucionalidad de Tasa Municipal sobre Activos Brutos de Empresas',
        factualContext: 'Un concejo municipal emitió una ordenanza imponiendo una supuesta "tasa por inspección de establecimientos" calculada sobre el total de activos de las empresas comerciales.',
        constitutionalIssue: '¿Constituye un impuesto encubierto violatorio del Art. 131 Ord. 6° Cn. una tasa que grava la capacidad económica global?',
        legalBasis: 'Arts. 131 Ord. 6°, 204 Ord. 1° y 231 Cn.',
        ratioDecidendi: 'La tasa requiere una contraprestación directa e individualizada. Gravar los activos brutos muta el tributo en un impuesto, potestad privativa de la Asamblea Legislativa.',
        proceduralOutcome: 'Expulsión de la ordenanza con efectos erga omnes e inexigibilidad del cobro.',
      },
      {
        id: 'case-trib-02',
        caseNumber: 2,
        title: 'Caducidad de la Facultad Fiscalizadora de la Dirección General de Impuestos',
        factualContext: 'La DGII notificó orden de fiscalización sobre el ejercicio fiscal de cinco años atrás a un contribuyente que presentó su declaración de renta en el plazo legal ordinario.',
        constitutionalIssue: '¿Opera la caducidad tributaria de tres años consagrada en el Art. 175 del Código Tributario?',
        legalBasis: 'Art. 175 Código Tributario; Art. 2 Cn.',
        ratioDecidendi: 'La caducidad extingue de pleno derecho la potestad de la administración para tasar impuestos tras el vencimiento de los plazos legales, protegiendo la seguridad jurídica.',
        proceduralOutcome: 'Revocatoria de la tasación oficiosa por operar la caducidad administrativa.',
      },
      {
        id: 'case-trib-03',
        caseNumber: 3,
        title: 'Violación al Principio de No Confiscatoriedad en Retención de IVA',
        factualContext: 'Una empresa exportadora acumuló un crédito fiscal de IVA por más de medio millón de dólares y el Fisco retuvo la devolución por tres años sin fundamento legal.',
        constitutionalIssue: '¿Genera afectación confiscatoria al capital de trabajo la retención indebida de saldos a favor?',
        legalBasis: 'Art. 2 y 103 Cn.; Ley de IVA.',
        ratioDecidendi: 'La retención arbitraria y prolongada de fondos legítimos del contribuyente vulnera el derecho a la propiedad privada y atenta contra el orden económico de mercado.',
        proceduralOutcome: 'Amparo estimatorio ordenando el reintegro inmediato con intereses legales de mora.',
      },
      {
        id: 'case-trib-04',
        caseNumber: 4,
        title: 'Deducción Legítima de Costos y Gastos en Impuesto sobre la Renta',
        factualContext: 'La DGII rechazó la deducción de gastos operativos de transporte y logística demostrados documentalmente alegando que eran "prescindibles" para el negocio.',
        constitutionalIssue: '¿Puede la autoridad tributaria sustituir el criterio gerencial del comerciante para negar deducciones reales (Art. 29 LISR)?',
        legalBasis: 'Arts. 28 y 29 Ley de Impuesto sobre la Renta; Art. 86 Cn.',
        ratioDecidendi: 'Todo costo o gasto necesario, devengado y debidamente comprobado para la generación de renta gravada es deducible de conformidad con la ley fiscal.',
        proceduralOutcome: 'Sentencia del Tribunal de Apelaciones de los Impuestos Internos revocando la glosa fiscal.',
      },
      {
        id: 'case-trib-05',
        caseNumber: 5,
        title: 'Anulación de Multa Tributaria por Vulneración al Non Bis In Idem',
        factualContext: 'Un contribuyente fue sancionado penalmente por defraudación al fisco y simultáneamente la DGII le impuso una multa administrativa del cien por ciento por el mismo hecho.',
        constitutionalIssue: '¿Se vulnera el principio de non bis in idem al imponer doble sanción penal y administrativa por idéntica conducta?',
        legalBasis: 'Art. 11 Cn.; Art. 162 Código Tributario.',
        ratioDecidendi: 'La concurrencia de identidad de sujeto, hecho y fundamento punitivo prohíbe la acumulación de penas judiciales y multas administrativas por el mismo desvalor fáctico.',
        proceduralOutcome: 'Expulsión de la sanción pecuniaria administrativa en acatamiento de la primacía penal.',
      },
    ],
  },

  // ==========================================
  // 6. DERECHO INTERNACIONAL PÚBLICO
  // ==========================================
  {
    id: 'internacional-publico',
    name: 'Derecho Internacional Público',
    type: 'publico',
    icon: '🌐',
    badgeColor: 'bg-teal-100 text-teal-900 border-teal-200',
    summary: 'Rige las relaciones jurídicas entre Estados soberanos y organismos internacionales, consagrando la supremacía de los tratados sobre las leyes secundarias y el control de convencionalidad.',
    doctrinalBasis: 'Doctrina monista con primacía constitucional, Art. 144 de la Constitución salvadoreña, Convención de Viena sobre el Derecho de los Tratados y jurisprudencia vinculante de la Corte IDH.',
    substantiveAnalysis: `El Derecho Internacional Público en El Salvador posee una jerarquía y eficacia jurídica privilegiada en virtud de lo dispuesto en el Art. 144 de la Constitución de 1983: "Los tratados internacionales celebrados por El Salvador con otros estados o con organismos internacionales, constituyen leyes de la República al entrar en vigencia... La ley no podrá modificar o derogar lo acordado en un tratado vigente para El Salvador. En caso de conflicto entre el tratado y la ley, prevalecerá el tratado".

Esta disposición consagra una fórmula monista moderada en el derecho salvadoreño:
1. Pirámide Jerárquica Normativa: La Constitución de la República se sitúa en la cúspide suprema de todo el ordenamiento jurídico (Art. 246 Cn.); los Tratados Internacionales válidamente ratificados ocupan el segundo estrato jerárquico, gozando de primacía absoluta sobre todas las leyes secundarias, decretos ejecutivos y ordenanzas municipales ordinarias.
2. Control de Convencionalidad ex officio: Siguiendo la doctrina vinculante de la Corte Interamericana de Derechos Humanos (Corte IDH) y la jurisprudencia de la Sala de lo Constitucional, todos los jueces y autoridades judiciales salvadoreñas están obligados a ejercer de oficio el control de convencionalidad, confrontando las normas internas con el Pacto de San José (Convención Americana sobre Derechos Humanos) y la jurisprudencia de la Corte IDH. Si una ley secundaria viola un tratado de derechos humanos, debe ser inaplicada directamente.
3. Normas de Ius Cogens: Los principios imperativos de derecho internacional general (prohibición de la tortura, crímenes de guerra, desaparición forzada y esclavitud) tienen fuerza vinculante inderogable y carácter inamnistiable en el foro doméstico.
4. Procedimiento de Celebración y Ratificación (Arts. 145 y 168 Ord. 4° Cn.): Corresponde al Presidente de la República negociar y firmar los tratados internacionales, y a la Asamblea Legislativa ratificarlos formalmente mediante decreto legislativo para que adquieran vigencia interna. No pueden ratificarse tratados que restrinjan o lesionen preceptos constitucionales (Art. 145 Cn.).
5. Fuentes Autónomas del Derecho Internacional: Conforme al Art. 38 del Estatuto de la Corte Internacional de Justicia (CIJ), forman parte del derecho aplicable en El Salvador no solo los convenios multilaterales y bilaterales, sino la costumbre internacional (práctica estatal constante respaldada por la convicción de obligatoriedad jurídica u opinio iuris) y los principios generales del derecho reconocidos por las naciones civilizadas.
6. El Sistema de la Integración Centroamericana (SICA): El Protocolo de Tegucigalpa (1991) instituye el marco institucional regional del SICA con la Corte Centroamericana de Justicia (CCJ) como órgano jurisdiccional supranacional. En materia aduanera y arancelaria, el Código Aduanero Uniforme Centroamericano (CAUCA) y su reglamento (RECAUCA) rigen con aplicación directa y preferente sobre la normativa fiscal interna de los países miembros.
7. Derecho Internacional Humanitario (DIH): El Salvador es Estado parte de los cuatro Convenios de Ginebra de 1949 y sus Protocolos Adicionales I y II de 1977. La Sala de lo Constitucional en la paradigmática sentencia Inc. 44-2013 determinó que el Art. 3 común a los Convenios de Ginebra tuteló a la población civil durante el conflicto armado interno, tornando imprescriptibles e inamnistiables las violaciones graves cometidas contra los derechos humanos.
8. Inmunidad Diplomática y Soberanía Jurisdiccional: Conforme a las Convenciones de Viena sobre Relaciones Diplomáticas (1961) y Consulares (1963), los agentes diplomáticos extranjeros gozan de inmunidad de jurisdicción penal y civil por actos oficiales de Estado (iure imperii), garantizándose la inviolabilidad de las sedes de las misiones diplomáticas y archivos consulares en territorio salvadoreño.`,
    entries: [
      {
        articleRef: 'Art. 144 de la Constitución de la República',
        literalText: 'Los tratados internacionales celebrados por El Salvador con otros estados o con organismos internacionales, constituyen leyes de la República al entrar en vigencia, conforme a las estipulaciones del mismo tratado y de esta Constitución. La ley no podrá modificar o derogar lo acordado en un tratado vigente para El Salvador. En caso de conflicto entre el tratado y la ley, prevalecerá el tratado.',
        simplifiedText: 'Primacía de los Tratados Internacionales: Cuando El Salvador firma y ratifica un tratado internacional (como la Convención de Derechos Humanos o tratados de comercio), este tratado tiene mayor fuerza y peso legal que las leyes ordinarias del país. Si una ley contradice a un tratado, manda y se aplica el tratado internacional.',
        analyticalCommentary: 'Garantía de jerarquía supralegal de los tratados. Ninguna asamblea legislativa puede anular compromisos internacionales mediante la aprobación de una ley secundaria ordinaria.',
      },
      {
        articleRef: 'Art. 145 de la Constitución de la República',
        literalText: 'No se podrán ratificar los tratados en que se restrinjan o afecten de alguna manera las disposiciones constitucionales, a menos que la ratificación se haga con las reservas correspondientes, en cuyo caso las disposiciones reservadas no entrarán en vigor para El Salvador.',
        simplifiedText: 'Supremacía Constitucional frente a Tratados: El Salvador no puede firmar tratados que violen la Constitución. Si un artículo del tratado contradice la Constitución, debe hacerse una reserva para que ese artículo no aplique en el país.',
        analyticalCommentary: 'Preserva la supremacía de la Constitución sobre los tratados (control previo de constitucionalidad de tratados antes de su ratificación definitiva).',
      },
      {
        articleRef: 'Art. 146 de la Constitución de la República',
        literalText: 'No podrán celebrarse o ratificarse tratados ni otorgarse concesiones en que de alguna manera se altere la forma de gobierno o se menoscaben o disminuyan la integridad del territorio, la soberanía e independencia de la República o los derechos y garantías fundamentales de la persona humana.',
        simplifiedText: 'Defensa de la Soberanía y Derechos Humanos: Prohibición absoluta de ceder territorio, perder la independencia o firmar acuerdos internacionales que recorten los derechos fundamentales del pueblo salvadoreño.',
        analyticalCommentary: 'Cláusula de salvaguarda soberana que blinda la integridad territorial y los derechos humanos universales frente a convenios lesivos.',
      },
    ],
    solvedCases: [
      {
        id: 'case-int-01',
        caseNumber: 1,
        title: 'Control de Convencionalidad e Inaplicabilidad de Prescripción en Crímenes Graves',
        factualContext: 'Un tribunal de sentencia pretendía sobreseer una causa penal por masacre de civiles invocando la prescripción de quince años del Código Penal de 1973.',
        constitutionalIssue: '¿Prevalece el derecho internacional consuetudinario y la Convención Americana sobre la prescripción penal interna?',
        legalBasis: 'Art. 144 Cn.; Art. 1.1 y 2 CADH; Ius Cogens.',
        ratioDecidendi: 'Los crímenes de lesa humanidad son imprescriptibles e inamnistiables en el derecho internacional; en caso de conflicto con el código penal interno, prevalece el tratado internacional.',
        proceduralOutcome: 'Rechazo del sobreseimiento y orden de prosecución del proceso penal hasta sentencia.',
      },
      {
        id: 'case-int-02',
        caseNumber: 2,
        title: 'Aplicación Directa del Convenio 87 de la OIT sobre Libertad Sindical',
        factualContext: 'Una institución autónoma estatal negó la personería a un sindicato de empleados públicos alegando que una ley secundaria excluía al sector público.',
        constitutionalIssue: '¿Debe aplicarse con preferencia el Convenio 87 de la OIT ratificado por El Salvador sobre la exclusión legal ordinaria?',
        legalBasis: 'Art. 144 y 47 Cn.; Convenio 87 de la Organización Internacional del Trabajo (OIT).',
        ratioDecidendi: 'El Convenio 87 de la OIT consagra la libertad de sindicalización universal de los servidores públicos y prevalece sobre cualquier ley secundaria interna restrictiva.',
        proceduralOutcome: 'Amparo estimatorio ordenando la inscripción y entrega inmediata de personería jurídica sindical.',
      },
      {
        id: 'case-int-03',
        caseNumber: 3,
        title: 'Rechazo de Extradición Pasiva por Riesgo Fundado de Tortura (Non-Refoulement)',
        factualContext: 'Un Estado extranjero requirió la extradición de un ciudadano salvadoreño donde existían informes verificados de tratos crueles, torturas y riesgo de ejecución sumaria sin debido proceso.',
        constitutionalIssue: '¿Opera el principio consuetudinario de no devolución (non-refoulement) tutelado en tratados de derechos humanos?',
        legalBasis: 'Art. 144 Cn.; Art. 3 Convención contra la Tortura de Naciones Unidas.',
        ratioDecidendi: 'El principio de non-refoulement es norma imperativa de ius cogens: ningún Estado puede extraditar o expulsar a una persona a un territorio donde su vida o integridad física corra peligro inminente.',
        proceduralOutcome: 'Corte Plena de la CSJ deniega la solicitud de extradición pasiva por motivos humanitarios.',
      },
      {
        id: 'case-int-04',
        caseNumber: 4,
        title: 'Inconstitucionalidad de Tratado de Inversiones con Arbitraje Arbitrario',
        factualContext: 'Se negoció un tratado comercial que sometía controversias territoriales y ambientales salvadoreñas a tribunales privados sin recurso judicial ante la Corte Suprema.',
        constitutionalIssue: '¿Vulnera la soberanía territorial y el monopolio judicial del Art. 172 Cn. la renuncia a la jurisdicción nacional?',
        legalBasis: 'Arts. 145, 146 y 172 Cn.',
        ratioDecidendi: 'Los tratados no pueden renunciar a la soberanía judicial nacional ni conferir a tribunales extranjeros atribuciones exclusivas que correspondan a los jueces salvadoreños.',
        proceduralOutcome: 'Dictamen de inconstitucionalidad previa impidiendo la ratificación sin reservas expresas.',
      },
      {
        id: 'case-int-05',
        caseNumber: 5,
        title: 'Ejecutoriedad Interna de Sentencia de Reparación de la Corte IDH',
        factualContext: 'El Estado salvadoreño demoró el pago de indemnizaciones ordenadas a favor de víctimas en sentencia definitiva emitida por la Corte Interamericana de Derechos Humanos.',
        constitutionalIssue: '¿Tienen las sentencias de la Corte IDH fuerza ejecutiva directa en el ordenamiento salvadoreño (Art. 68.1 CADH)?',
        legalBasis: 'Art. 144 Cn.; Art. 68.1 Convención Americana sobre Derechos Humanos.',
        ratioDecidendi: 'Las sentencias de la Corte IDH son de cumplimiento obligatorio e incondicional para todos los órganos del Estado, equiparándose a una orden judicial ejecutoriada.',
        proceduralOutcome: 'Orden judicial de incorporación de los fondos de indemnización en el Presupuesto General del Estado.',
      },
    ],
  },

  // ==========================================
  // 7. DERECHO CIVIL
  // ==========================================
  {
    id: 'civil',
    name: 'Derecho Civil',
    type: 'privado',
    icon: '🏡',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    summary: 'Columna vertebral del derecho privado salvadoreño que disciplina las personas, la familia patrimonial, los bienes y derechos reales, las obligaciones contractuales y la sucesión por causa de muerte.',
    doctrinalBasis: 'Código Civil de El Salvador de 1860 (Andrés Bello), autonomía de la voluntad privada (pacta sunt servanda), función social de la propiedad y teoría del título y modo.',
    substantiveAnalysis: `El Derecho Civil constituye el tronco común de todo el derecho privado en la República de El Salvador. Nuestro Código Civil, promulgado en 1860 bajo la inspiración directa de la obra monumental de Don Andrés Bello, sigue proveyendo la estructura conceptual básica para las relaciones entre particulares, modulada hoy por los principios constitucionales de justicia social y seguridad jurídica.

Instituciones fundamentales del Derecho Civil salvadoreño:
1. La Propiedad Privada y su Función Social (Art. 103 Cn. y Art. 568 C.C.): El derecho de dominio sobre bienes muebles e inmuebles comprende el uso, goce y libre disposición, reconociéndose y garantizándose por el Estado. No obstante, la Constitución impone el principio de la función social de la propiedad: el derecho de dominio no es absoluto ni puede ejercerse en perjuicio de la colectividad. La expropiación forzosa solo procede por causa de utilidad pública o interés social legalmente comprobada y previa justa indemnización (Art. 106 Cn.).
2. Teoría del Título y el Modo: En el derecho patrimonial salvadoreño no basta con celebrar un contrato (título traslaticio como la compraventa o donación); para que nazca el derecho real de dominio se requiere la concurrencia del modo de adquirir, que en materia inmobiliaria se consuma mediante la TRADICIÓN (inscripción en el Registro de la Propiedad Raíz e Hipotecas del Centro Nacional de Registros CNR, Art. 667 C.C.).
3. Autonomía de la Voluntad y Principio Pacta Sunt Servanda (Art. 1416 C.C.): Todo contrato legalmente celebrado es una ley para los contratantes y no puede ser invalidado sino por consentimiento mutuo o por causas legales (vicios del consentimiento: error, fuerza o dolo). Sus límites infranqueables son el orden público, la moral y la ley prohibitiva.
4. Responsabilidad Civil Extracontractual (Arts. 2065 a 2085 C.C.): Toda persona que comete un delito, cuasidelito o acto culposo que causa daño patrimonial o moral a otra está obligada a la reparación integral del perjuicio.
5. Derecho Sucesorio (Arts. 952 a 1264 C.C.): Sucesión testamentaria (testamento abierto y cerrado ante notario) y sucesión intestada abintestato basada en los órdenes de parentesco legal.
6. Clasificación de los Bienes y Derechos Reales (Arts. 560 a 580 C.C.): El ordenamiento civil clasifica los bienes en corporales (muebles e inmuebles por naturaleza, adhesión o destinación) e incorporales. Los derechos reales comprenden de manera taxativa el dominio, la herencia, el usufructo, el uso, la habitación, las servidumbres prediales activas, y los derechos reales de garantía como la hipoteca inmobiliaria y la prenda o garantía mobiliaria, oponibles erga omnes frente a cualquier tercero.
7. Modos de Adquirir el Dominio y Prescripción Adquisitiva (Arts. 587 y 2231 a 2259 C.C.): Junto a la tradición, la accesión y la ocupación, la prescripción adquisitiva o usucapión permite la consolidación de la propiedad mediante la posesión material continua. La prescripción ordinaria exige justo título y buena fe durante diez años; mientras que la prescripción extraordinaria opera a los treinta años de posesión material pacífica e ininterrumpida sin necesidad de título alguno.
8. Régimen de Nulidades y Sanciones Civiles (Arts. 1551 a 1568 C.C.): Se consagra la nulidad absoluta de pleno derecho para actos con objeto o causa ilícita o por omisión de formalidades sacramentales ad solemnitatem, la cual es de orden público, insanable salvo por el paso de treinta años y declarable de oficio por el juez; diferenciándose de la nulidad relativa o rescisión por vicios del consentimiento (error, fuerza o dolo), subsanable por ratificación de partes y prescriptible en cuatro años.`,
    entries: [
      {
        articleRef: 'Art. 2 de la Constitución de la República',
        literalText: 'Toda persona tiene derecho a la vida, a la integridad física y moral, a la libertad, a la seguridad, al trabajo, a la propiedad y posesión, y a ser protegida en la conservación y defensa de los mismos.',
        simplifiedText: 'Derecho a la Propiedad y Posesión: Tienes el derecho fundamental a ser dueño de tus bienes, a tener tu terreno, tu casa y tus pertenencias protegidas por el Estado contra robos, desalojos ilegales o despojos arbitrarios.',
        analyticalCommentary: 'Garantía constitucional del patrimonio individual y familiar. Protege tanto el dominio formal inscrito como la posesión material quieta y pacífica de los ciudadanos.',
      },
      {
        articleRef: 'Art. 103 de la Constitución de la República',
        literalText: 'Se reconoce y garantiza el derecho a la propiedad privada en función social. Se reconoce asimismo la propiedad intelectual y artística, por el tiempo y en la forma determinados por la ley.',
        simplifiedText: 'Propiedad en Función Social: La ley reconoce que puedes tener propiedades privadas, pero su uso debe respetar el bien común de la sociedad (por ejemplo, respetar el medio ambiente y no perjudicar a tus vecinos).',
        analyticalCommentary: 'Supera el individualismo decimonónico absoluto; la propiedad privada tiene deberes y responsabilidades sociales ante la comunidad nacional.',
      },
      {
        articleRef: 'Art. 106 de la Constitución de la República',
        literalText: 'La expropiación procederá por causas de utilidad pública o de interés social, legalmente comprobadas, y previa una justa indemnización. Cuando la expropiación sea motivada por causas provenientes de guerra, de calamidad pública o cuando tenga por objeto el aprovisionamiento de agua o de energía eléctrica, o la construcción de viviendas o de carreteras, caminos o vías públicas de cualquier clase, la indemnización podrá no ser previa.',
        simplifiedText: 'Reglas de la Expropiación: Si el gobierno necesita una parte de tu terreno para construir una carretera o un hospital de interés público, tiene la obligación legal de pagarte una justa indemnización económica por su valor real antes de ocuparlo.',
        analyticalCommentary: 'Garantía indemnizatoria frente al despojo estatal. La Sala de lo Constitucional ampara a los propietarios cuando el Estado ocupa terrenos por "vías de hecho" sin juicio expropiatorio formal ni pago.',
      },
    ],
    solvedCases: [
      {
        id: 'case-civ-01',
        caseNumber: 1,
        title: 'Amparo contra Expropiación de Hecho sin Pago de Indemnización Previa',
        factualContext: 'El Ministerio de Obras Públicas ocupó con maquinaria pesada tres mil metros cuadrados de un inmueble privado para ampliar una autopista sin iniciar juicio expropiatorio ni pagar indemnización.',
        constitutionalIssue: '¿Constituye una vía de hecho inconstitucional la ocupación estatal de propiedad privada sin procedimiento previo (Art. 106 Cn.)?',
        legalBasis: 'Arts. 2 y 106 de la Constitución; Ley de Expropiación.',
        ratioDecidendi: 'La expropiación exige causal comprobada y pago indemnizatorio previo. La ocupación fáctica sin procedimiento formal vulnera el derecho de propiedad.',
        proceduralOutcome: 'Amparo concedido ordenando el pago inmediato del justo precio pericial más daños y perjuicios.',
      },
      {
        id: 'case-civ-02',
        caseNumber: 2,
        title: 'Acción Reivindicatoria de Dominio frente a Poseedor sin Título',
        factualContext: 'Un propietario con escritura debidamente inscrita en el Registro de la Propiedad demandó a un ocupante que invadió el predio rústico alegando una supuesta promesa verbal de venta.',
        constitutionalIssue: '¿Cuáles son los requisitos de procedencia de la acción reivindicatoria de dominio (Art. 891 C.C.)?',
        legalBasis: 'Art. 2 Cn.; Arts. 891, 892 y 895 Código Civil.',
        ratioDecidendi: 'La acción de dominio exige acreditar la titularidad inscrita del actor, la posesión material injustificada del demandado y la exacta singularización del inmueble.',
        proceduralOutcome: 'Sentencia estimatoria ordenando la restitución material del inmueble en el plazo de quince días.',
      },
      {
        id: 'case-civ-03',
        caseNumber: 3,
        title: 'Nulidad Absoluta de Contrato de Donación por Simulación y Causa Ilícita',
        factualContext: 'Un deudor demandado en juicio ejecutivo transfirió simuladamente todas sus casas a su hermano mediante donación irrevocable gratuita para declararse insolvente.',
        constitutionalIssue: '¿Adolece de nulidad absoluta el contrato celebrado con fraude de acreedores y simulación ilícita?',
        legalBasis: 'Arts. 1316, 1338 y 1552 Código Civil.',
        ratioDecidendi: 'La simulación fraudulenta en perjuicio de terceros adolece de causa ilícita y acarrea la nulidad absoluta de la escritura, restituyendo los bienes al patrimonio del deudor.',
        proceduralOutcome: 'Sentencia que declara nula la donación y cancela la inscripción registral a favor del hermano.',
      },
      {
        id: 'case-civ-04',
        caseNumber: 4,
        title: 'Condena en Responsabilidad Civil Extracontractual por Ruina de Edificio',
        factualContext: 'La pared perimetral de una bodega en abandono colapsó por falta de mantenimiento durante una tormenta ordinaria, destruyendo tres vehículos estacionados.',
        constitutionalIssue: '¿Debe el propietario responder por los daños ocasionados por la ruina de su edificio por omisión de reparaciones (Art. 2077 C.C.)?',
        legalBasis: 'Art. 2 Cn.; Arts. 2067 y 2077 Código Civil.',
        ratioDecidendi: 'El dueño de un edificio es directamente responsable de los daños que sobrevengan por su ruina cuando esta acaece por haber omitido las reparaciones necesarias.',
        proceduralOutcome: 'Condena al dueño de la bodega al pago de veinticinco mil dólares por la destrucción de los vehículos.',
      },
      {
        id: 'case-civ-05',
        caseNumber: 5,
        title: 'Conflicto entre Título No Inscrito y Tercero de Buena Fe Registral',
        factualContext: 'Un comprador adquirió un terreno mediante escritura pública pero no la inscribió en el CNR. Dos años después, el vendedor vendió el mismo inmueble a un tercero que sí lo inscribió.',
        constitutionalIssue: '¿Quién prevalece: el primer comprador con documento privado/matriz anterior o el segundo con inscripción registral previa?',
        legalBasis: 'Arts. 680, 683 y 692 Código Civil; Ley de Reestructuración del CNR.',
        ratioDecidendi: 'En el sistema registral salvadoreño rige el principio de fe pública registral y prioridad (prior in tempore, potior in iure): los títulos no inscritos no perjudican a terceros adquirentes de buena fe.',
        proceduralOutcome: 'Sentencia confirmando el dominio del segundo comprador que inscribió su título en el Registro.',
      },
    ],
  },

  // ==========================================
  // 8. DERECHO MERCANTIL
  // ==========================================
  {
    id: 'mercantil',
    name: 'Derecho Mercantil',
    type: 'privado',
    icon: '🤝',
    badgeColor: 'bg-orange-100 text-orange-900 border-orange-200',
    summary: 'Disciplina la actividad de los comerciantes, las sociedades de capital (S.A. de C.V.), los actos de comercio masivos, los títulos valores y el derecho concursal salvadoreño.',
    doctrinalBasis: 'Código de Comercio salvadoreño de 1970, libertad económica de mercado (Art. 102 Cn.), interdicción de monopolios (Art. 110 Cn.) y tutela de la libre concurrencia.',
    substantiveAnalysis: `El Derecho Mercantil salvadoreño (regulado primordialmente en el Código de Comercio de 1970, D.L. 671, y leyes mercantiles accesorias como la Ley de Competencia y la Ley de Bancos) disciplina el régimen de los actos masivos de comercio, la organización de los comerciantes sociales e individuales y la dinámica del crédito empresarial.

Marco constitucional económico:
1. Libertad Económica e Iniciativa Privada (Art. 102 Cn.): Se garantiza la libertad económica en lo que no se oponga al interés social. El Estado promueve la libre concurrencia y protege la iniciativa empresarial como motor del desarrollo nacional.
2. Prohibición Absoluta de Monopolios y Prácticas Restrictivas (Art. 110 Cn.): La Constitución salvadoreña prohíbe terminantemente los monopolios y las prácticas monopólicas comerciales. La Ley de Competencia sanciona las colusiones de precios, el reparto de mercados y el abuso de posición dominante entre empresas.
3. Límites a la Usura y Tutela de los Deudores (Art. 101 Cn. y Ley Contra la Usura): El orden económico responde a principios de justicia social. Se prohíben los intereses usurarios o anatocismos desproporcionados en operaciones de crédito bancario o mercantil.

Régimen Societario y Gobierno Corporativo:
- Clasificación de Sociedades Mercantiles (Arts. 18 a 305 C.Com.): El Código de Comercio distingue las sociedades de personas (Nombre Colectivo, Comandita Simple y Responsabilidad Limitada S. de R.L.) y las sociedades de capitales (Sociedad Anónima S.A., Comandita por Acciones y la moderna Sociedad por Acciones Simplificada S.A.S. introducida por la reforma de 2024 para agilizar el emprendimiento unipersonal con registro mercantil digital acelerado).
- Órganos de Gobierno en la Sociedad Anónima: La Junta General de Accionistas como máxima autoridad soberana de decisión ordinaria y extraordinaria; la administración societaria unipersonal (Administrador Único) o colegiada (Junta Directiva) con estricto deber fiduciario de diligencia y lealtad; y la vigilancia fiscal y contable obligatoria depositada en el Auditor Externo nombrado anualmente.

Títulos Valores, Contratación Mercantil y Tutela Cambiaria:
- Títulos Valores (Arts. 623 a 781 C.Com.): Documentos necesarios para ejercitar el derecho literal y autónomo que en ellos se consigna (letra de cambio, pagaré, cheque). Se rigen por los principios estrictos de incorporación, literalidad, autonomía y legitimación activa, facilitando su cobro judicial mediante el Juicio Ejecutivo Mercantil con embargo preventivo inmediato (Arts. 457 y sigs. CPCM).
- Negocios Bancarios y Contratos Mercantiles Modernos: Regulación de contratos de apertura de crédito, cuenta corriente, depósito bancario, fideicomiso mercantil (creación de patrimonio autónomo fiduciario inembargable afecto a un fin lícito, Arts. 1233 a 1262 C.Com.) y arrendamiento financiero o leasing.
- Protección al Consumidor y Cláusulas Abusivas: La Ley de Protección al Consumidor declara nulas de pleno derecho las cláusulas contractuales abusivas impuestas unilateralmente en contratos de adhesión masa por proveedores financieros o comerciales.
- Matrícula de Comercio y Publicidad Registral CNR (Arts. 411 a 422 C.Com.): Todo comerciante individual o social está legalmente obligado a matricular su empresa y establecimientos mercantiles en el Registro de Comercio del Centro Nacional de Registros (CNR), depositando anualmente sus balances financieros auditados para asegurar la oponibilidad frente a terceros y la transparencia del tráfico crediticio.
- Derecho Concursal y Procedimiento de Quiebra (Arts. 498 a 622 C.Com.): Ante el estado de cesación de pagos o insolvencia patrimonial definitiva de una empresa mercantil, el ordenamiento regula el régimen de concurso y quiebra judicial para liquidar ordenadamente la masa de bienes y salvaguardar los derechos de los acreedores laborales, fiscales y bancarios privilegiados.`,
    entries: [
      {
        articleRef: 'Art. 102 de la Constitución de la República',
        literalText: 'Se garantiza la libertad económica, en lo que no se oponga al interés social. El Estado fomentará y protegerá la iniciativa privada dentro de las condiciones necesarias para acrecentar la riqueza nacional y para asegurar los beneficios de ésta al mayor número de los habitantes del país.',
        simplifiedText: 'Libertad Económica y de Empresa: Todo salvadoreño tiene derecho a abrir su propio negocio, emprender, comerciar y generar riqueza en un marco de libre competencia que respete el bienestar del pueblo.',
        analyticalCommentary: 'Garantía del modelo de economía social de mercado contra estatizaciones indebidas o regulaciones asfixiantes.',
      },
      {
        articleRef: 'Art. 110 de la Constitución de la República',
        literalText: 'No podrá autorizarse ningún monopolio sino a favor del Estado o de los Municipios, cuando el interés social lo haga imprescindible. Se prohíben las prácticas monopolísticas. El Estado podrá tomar a su cargo los servicios públicos cuando los intereses de la comunidad así lo exijan.',
        simplifiedText: 'Prohibición de Monopolios: Está prohibido que una sola empresa o un grupo cerrado se adueñe de todo un mercado comercial para fijar precios caros a la fuerza sin que nadie pueda competirles.',
        analyticalCommentary: 'Base constitucional de la Superintendencia de Competencia para sancionar cárteles empresariales y acuerdos colusorios de fijación de precios.',
      },
      {
        articleRef: 'Art. 101 de la Constitución de la República',
        literalText: 'El orden económico debe responder esencialmente a principios de justicia social, que tiendan a asegurar a todos los habitantes del país una existencia digna del ser humano. El Estado promoverá el desarrollo económico y social mediante el incremento de la producción, la productividad y la racional utilización de los recursos.',
        simplifiedText: 'Justicia Social en la Economía: Los negocios y la actividad comercial deben operar respetando la dignidad de las personas y permitiendo que todos los ciudadanos tengan una vida digna.',
        analyticalCommentary: 'Impone límites ético-sociales a la especulación financiera y sustenta la validez de la Ley Contra la Usura en el crédito bancario.',
      },
    ],
    solvedCases: [
      {
        id: 'case-merc-01',
        caseNumber: 1,
        title: 'Sanción por Práctica Monopólica Colusoria de Reparto de Mercado',
        factualContext: 'Tres distribuidoras mayoristas de medicamentos acordaron en reuniones privadas repartirse los departamentos del país y fijar un margen de ganancia mínimo del cuarenta por ciento.',
        constitutionalIssue: '¿Vulnera el Art. 110 Cn. y la Ley de Competencia el acuerdo colusorio restrictivo de mercado?',
        legalBasis: 'Art. 110 Cn.; Arts. 25 y 26 Ley de Competencia.',
        ratioDecidendi: 'Los acuerdos horizontales entre competidores para fijar precios o repartirse clientes son prácticas monopolísticas per se ilícitas que anulan la libre concurrencia.',
        proceduralOutcome: 'Multa de un millón de dólares impuesta por la Superintendencia de Competencia a cada infractora.',
      },
      {
        id: 'case-merc-02',
        caseNumber: 2,
        title: 'Ejecutividad del Pagaré y Desestimación de Excepción Extracartular',
        factualContext: 'Un deudor demandado en juicio ejecutivo mercantil con base en un pagaré protestado pretendió oponer que la mercancía recibida no era de la calidad prometida.',
        constitutionalIssue: '¿Afectan los vicios del contrato subyacente la ejecutividad de un título valor abstracto (Art. 623 C.Com.)?',
        legalBasis: 'Art. 2 Cn.; Arts. 623 y 634 Código de Comercio; Art. 457 CPCM.',
        ratioDecidendi: 'El principio de autonomía y literalidad del título valor independiza la obligación cambiaria del negocio jurídico causal subyacente frente al tenedor legítimo.',
        proceduralOutcome: 'Sentencia de remate ordenando el embargo y pago íntegro del capital e intereses consignados.',
      },
      {
        id: 'case-merc-03',
        caseNumber: 3,
        title: 'Acción Social de Responsabilidad contra Administrador Societario',
        factualContext: 'Un administrador único de una sociedad anónima transfirió activos de la empresa a una sociedad propia a precio vil sin autorización de la Junta General.',
        constitutionalIssue: '¿Responde el administrador de sociedad anónima por los daños causados por conflicto de interés (Art. 273 C.Com.)?',
        legalBasis: 'Arts. 267 y 273 Código de Comercio.',
        ratioDecidendi: 'Los administradores tienen deber fiduciario de lealtad y diligencia; responderán solidariamente frente a la sociedad por actos lesivos contrarios a la ley.',
        proceduralOutcome: 'Condena judicial al administrador al reintegro patrimonial y remoción inmediata del cargo.',
      },
      {
        id: 'case-merc-04',
        caseNumber: 4,
        title: 'Nulidad de Cláusula de Intereses Abusivos bajo la Ley Contra la Usura',
        factualContext: 'Una casa de préstamos mercantiles estipuló un interés efectivo anual del ochenta y cinco por ciento, superando la tasa máxima legal publicada por el Banco Central de Reserva.',
        constitutionalIssue: '¿Adolece de nulidad por ilicitud la tasa de interés que rebasa el techo legal de la usura?',
        legalBasis: 'Art. 101 Cn.; Arts. 6 y 7 Ley Contra la Usura; Art. 1968 C.C.',
        ratioDecidendi: 'La tasa que excede el límite máximo fijado por el BCR constituye usura sancionada con nulidad del exceso y reestructuración judicial al interés legal.',
        proceduralOutcome: 'Recálculo judicial de la deuda al interés legal vigente y condena en devolución de cobros indebidos.',
      },
      {
        id: 'case-merc-05',
        caseNumber: 5,
        title: 'Amparo contra Cancelación Arbitraria de Registro de Marca Comercial',
        factualContext: 'El Registro de la Propiedad Intelectual canceló el registro de una marca comercial notoria de café sin emplazar previamente a su titular salvadoreño.',
        constitutionalIssue: '¿Constituye la marca comercial un derecho de propiedad tutelado por el Art. 103 de la Constitución?',
        legalBasis: 'Arts. 11 y 103 Cn.; Ley de Marcas y Otros Signos Distintivos.',
        ratioDecidendi: 'La propiedad marcaria es un derecho patrimonial protegido constitucionalmente; su despojo o cancelación sin procedimiento contradictorio previo es nula.',
        proceduralOutcome: 'Amparo estimatorio ordenando el restablecimiento inmediato de la vigencia registral de la marca.',
      },
    ],
  },

  // ==========================================
  // 9. DERECHO LABORAL Y SEGURIDAD SOCIAL
  // ==========================================
  {
    id: 'laboral',
    name: 'Derecho Laboral y Seguridad Social',
    type: 'privado',
    icon: '👷',
    badgeColor: 'bg-yellow-100 text-yellow-900 border-yellow-200',
    summary: 'Tutela la dignidad de los trabajadores, las condiciones mínimas irrenunciables, el fuero sindical y de maternidad, la estabilidad laboral y la seguridad social previsional en El Salvador.',
    doctrinalBasis: 'Principio protector pro-operario (Art. 37 Cn.), irrenunciabilidad de derechos laborales (Art. 52 Cn.), Código de Trabajo de El Salvador (D.L. 241) y convenios de la OIT.',
    substantiveAnalysis: `El Derecho del Trabajo en El Salvador goza de una profunda consagración y blindaje en el Título II, Capítulo II, Sección Segunda de la Constitución de la República de 1983 (Arts. 37 al 52 Cn.). El principio supremo rector está plasmado en el Art. 37 Cn.: "El trabajo es una función social, goza de la protección del Estado y no se considera artículo de comercio". Esta declaración dogmática despoja a la fuerza laboral humana de la condición de mera mercancía económica de oferta y demanda, subordinando las relaciones obrero-patronales a la dignidad y justicia distributiva.

Principios cardinales del Derecho Laboral salvadoreño:
1. Principio Protector o Pro-Operario (Art. 14 Código de Trabajo): Ante la duda razonable en la interpretación o alcance de las disposiciones legales o contractuales, los jueces y autoridades de trabajo están obligados a aplicar la norma más favorable al trabajador (in dubio pro operario).
2. Principio de Irrenunciabilidad de Derechos (Art. 52 Cn.): Los derechos consagrados en favor de los trabajadores por la Constitución, los códigos laborales y los convenios internacionales son irrenunciables. Cualquier renuncia, finiquito simulado o transacción que reduzca los mínimos legales es nula de pleno derecho.
3. Estabilidad Laboral Reforzada (Fueros Especiales):
- Fuero de Maternidad (Art. 38 Ord. 11° Cn.): Prohibición absoluta de despedir a la mujer trabajadora durante el estado de embarazo y hasta que concluya el descanso post-natal (dieciséis semanas) y período de lactancia. La Sala de lo Constitucional ha determinado de forma vinculante que esta tutela cubre a toda mujer trabajadora, sin importar si está bajo contrato temporal, servicios eventuales o ley de salarios.
- Fuero Sindical (Art. 47 inc. 4° Cn.): Los directivos sindicales no pueden ser despedidos, suspendidos disciplinariamente ni trasladados de puesto sin previa autorización judicial por causal legalmente comprobada.
4. Indemnización por Despido Injustificado (Art. 38 Ord. 11° Cn. y Art. 58 C.Tr.): Cuando el empleador despide sin justa causa comprobada, está obligado al pago inmediato de la indemnización legal equivalente a un salario básico de treinta días por cada año de servicio continuo y proporcional por fracciones.
5. Seguridad Social Universal (Art. 50 Cn.): El régimen de seguridad social administrado por el ISSS y el sistema de pensiones garantiza la cobertura médica integral, subsidios por incapacidad, maternidad, invalidez, vejez y sobrevivencia.
6. Estructura Jurídica del Contrato Individual y Presunciones Legales (Arts. 17 a 26 C.Tr.): El contrato de trabajo existe desde que una persona se obliga a prestar a otra un servicio subordinado a cambio de una retribución salarial. Conforme al Art. 20 C.Tr., la ley presume la existencia del contrato individual por el solo hecho de prestarse servicios continuos por más de dos días consecutivos, arrojando la carga de la prueba al patrono.
7. Régimen de Jornadas, Horas Extraordinarias y Vacaciones (Arts. 161 a 189 C.Tr.): La jornada laboral diurna ordinaria no puede exceder de ocho horas diarias ni de cuarenta y cuatro semanales; y la nocturna de siete horas diarias ni treinta y nueve semanales. Las horas laboradas fuera de la jornada ordinaria devengan recargo legal obligatorio del cien por ciento; y todo trabajador con un año de servicio continuo tiene derecho a quince días de vacación anual pagada con un recargo adicional del treinta por ciento de su salario ordinario.
8. Derecho Colectivo, Sindicalización y Negociación de Contratos Colectivos (Arts. 204 a 552 C.Tr.): La Constitución salvadoreña reconoce la libertad de sindicalización para empleados privados y del sector público (tras la ratificación de los Convenios 87 y 98 de la OIT), confiriendo personería jurídica a las asociaciones profesionales y garantizando la negociación del Contrato Colectivo de Trabajo y el ejercicio legítimo del derecho de huelga pacífica.`,
    entries: [
      {
        articleRef: 'Art. 37 de la Constitución de la República',
        literalText: 'El trabajo es una función social, goza de la protección del Estado, y no se considera artículo de comercio. El Estado empleará todos los recursos que estén a su alcance para proporcionar ocupación al trabajador, manual o intelectual, y para asegurar a él y a su familia las condiciones económicas de una existencia digna.',
        simplifiedText: 'El Trabajo es una Función Social: El trabajador no es una máquina ni una mercancía que se pueda usar y desechar. El gobierno debe proteger los empleos y asegurar salarios justos para que las familias salvadoreñas vivan con dignidad.',
        analyticalCommentary: 'Proclama humanista fundamental del derecho social salvadoreño que fundamenta la intervención del Estado en las relaciones laborales privadas.',
      },
      {
        articleRef: 'Art. 38 de la Constitución de la República',
        literalText: 'El trabajo estará regulado por un Código que tendrá por objeto principal armonizar las relaciones entre el patrono y los trabajadores, estableciendo sus derechos y obligaciones. Estará fundamentado en principios generales que tiendan al mejoramiento de las condiciones de vida de los trabajadores, e incluirá especialmente los derechos siguientes: 1° Jornada ordinaria máxima de 8 horas; 2° Salario mínimo; 6° Indemnización por despido injustificado; 11° Fuero de maternidad y descanso pre y post-natal remunerado.',
        simplifiedText: 'Derechos Mínimos Obligatorios del Trabajador: Jornada máxima de ocho horas al día, pago de horas extras, salario mínimo digno, vacaciones pagadas, aguinaldo, indemnización por despido sin justa causa y protección absoluta al embarazo de la mujer trabajadora.',
        analyticalCommentary: 'Catálogo de derechos mínimos irrenunciables. Ningún contrato de trabajo puede fijar condiciones inferiores a las establecidas en este precepto constitucional.',
      },
      {
        articleRef: 'Art. 47 de la Constitución de la República',
        literalText: 'Los patronos y trabajadores privados, sin distinción de nacionalidad, sexo, raza, credo o ideas políticas y cualquiera que sea su actividad o la naturaleza del trabajo que realicen, tienen el derecho de asociarse libremente para la defensa de sus respectivos intereses, formando asociaciones profesionales o sindicatos. Los miembros de las directivas sindicales no podrán ser despedidos, suspendidos disciplinariamente, trasladados o desmejorados en sus condiciones de trabajo, sino por justa causa calificada previamente por la autoridad competente.',
        simplifiedText: 'Libertad Sindical y Fuero Sindical: Los trabajadores tienen el derecho de organizarse en sindicatos para defender sus derechos. Los líderes sindicales no pueden ser despedidos ni cambiados de puesto sin un permiso previo de un juez laboral.',
        analyticalCommentary: 'Garantía del fuero sindical que impide la persecución patronal contra los dirigentes gremiales en el ejercicio de la negociación colectiva.',
      },
    ],
    solvedCases: [
      {
        id: 'case-lab-01',
        caseNumber: 1,
        title: 'Amparo por Despido de Empleada Embarazada en Contrato Temporal',
        factualContext: 'Una enfermera contratada por servicios eventuales de seis meses fue cesada al vencer el plazo de su contrato cuando se encontraba en el sexto mes de embarazo.',
        constitutionalIssue: '¿Protege el fuero de maternidad (Art. 38 Ord. 11° Cn.) a trabajadoras bajo contratos de plazo determinado?',
        legalBasis: 'Arts. 32 y 38 Ord. 11° Cn.; Art. 113 Código de Trabajo.',
        ratioDecidendi: 'El fuero de maternidad es una garantía de orden público universal que trasciende la tipología del contrato; la no renovación unilateral en gravidez equivale a un despido nulo.',
        proceduralOutcome: 'Sentencia de amparo ordenando el pago de todos los salarios caídos y cobertura de salud en el ISSS hasta terminar la lactancia.',
      },
      {
        id: 'case-lab-02',
        caseNumber: 2,
        title: 'Aplicación de la Presunción Legal de Despido Injustificado (Art. 414 C.Tr.)',
        factualContext: 'Un mesero demandó a su empleador por despido verbal; el patrono no compareció a la audiencia conciliatoria ni contestó la demanda en el término legal.',
        constitutionalIssue: '¿Opera la presunción de despido de hecho cuando el patrono incurre en rebeldía procesal?',
        legalBasis: 'Art. 38 Cn.; Art. 414 Código de Trabajo.',
        ratioDecidendi: 'La incomparecencia patronal injustificada a la conciliación activa la presunción de certeza del despido y de las condiciones laborales alegadas por el trabajador.',
        proceduralOutcome: 'Condena judicial al pago inmediato de indemnización completa, vacación proporcional y aguinaldo.',
      },
      {
        id: 'case-lab-03',
        caseNumber: 3,
        title: 'Reinstalación Inmediata de Dirigente Sindical Despedido sin Juicio Previo',
        factualContext: 'Una fábrica textil despidió de hecho al secretario general de su sindicato alegando reestructuración interna sin solicitar autorización previa ante el juzgado laboral.',
        constitutionalIssue: '¿Es nulo de pleno derecho el despido de un directivo sindical sin juicio de destitución previo (Art. 47 Cn.)?',
        legalBasis: 'Art. 47 Cn.; Arts. 248 y 464 Código de Trabajo.',
        ratioDecidendi: 'El fuero sindical prohíbe el despido directo; la falta de autorización judicial previa calificada vicia el acto de nulidad absoluta y obliga a la reinstalación inmediata.',
        proceduralOutcome: 'Orden judicial de reinstalo inmediato en el mismo puesto de trabajo y pago de salarios no percibidos.',
      },
      {
        id: 'case-lab-04',
        caseNumber: 4,
        title: 'Condena al Pago de Horas Extraordinarias Nocturnas y Recargos de Ley',
        factualContext: 'Un vigilante de seguridad privada laboraba turnos continuos de doce horas nocturnas de seis de la tarde a seis de la mañana sin pago de horas extraordinarias ni recargo nocturno.',
        constitutionalIssue: '¿Cuáles son los límites legales de la jornada ordinaria nocturna y sus recargos (Art. 161 C.Tr.)?',
        legalBasis: 'Art. 38 Ord. 1° Cn.; Arts. 161, 168 y 169 Código de Trabajo.',
        ratioDecidendi: 'La jornada nocturna máxima es de siete horas; el trabajo prestado en exceso constituye horas extraordinarias con recargo legal obligatorio del cien por ciento.',
        proceduralOutcome: 'Condena al pago de diez mil dólares en concepto de horas extras nocturnas acumuladas.',
      },
      {
        id: 'case-lab-05',
        caseNumber: 5,
        title: 'Desconocimiento de Simulación Patronal Mediante Empresa Fachada',
        factualContext: 'Una cadena de restaurantes despidió a cincuenta trabajadores alegando que la sociedad empleadora quebró, mientras continuaba operando bajo otra sociedad con los mismos dueños.',
        constitutionalIssue: '¿Procede el levantamiento del velo corporativo para tutelar los créditos laborales (Art. 6 C.Tr.)?',
        legalBasis: 'Arts. 37 y 38 Cn.; Art. 6 Código de Trabajo (Sustitución Patronal).',
        ratioDecidendi: 'La simulación de sociedades no exime de responsabilidad patronal; rige el principio de primacía de la realidad y solidaridad económica entre las empresas del mismo grupo.',
        proceduralOutcome: 'Condena solidaria a ambas sociedades al pago total de las indemnizaciones por despido.',
      },
    ],
  },

  // ==========================================
  // 10. DERECHO DE FAMILIA Y NIÑEZ
  // ==========================================
  {
    id: 'familia',
    name: 'Derecho de Familia y Niñez',
    type: 'privado',
    icon: '👨‍👩‍👧‍👦',
    badgeColor: 'bg-pink-100 text-pink-900 border-pink-200',
    summary: 'Ordenamiento social y humano que regula el matrimonio, el régimen patrimonial, la filiación, los alimentos, la protección integral de la niñez y la erradicación de la violencia intrafamiliar.',
    doctrinalBasis: 'Protección integral a la familia (Art. 32 Cn.), Principio del Interés Superior de la Niña, Niño y Adolescente (Art. 34 Cn. y Ley Crecer Juntos) y Código de Familia de 1994.',
    substantiveAnalysis: `El Derecho de Familia y de la Niñez en la República de El Salvador es una rama jurídica con profunda densidad axiológica y de orden público preferente (Arts. 32 al 36 de la Constitución de 1983). El Art. 32 Cn. proclama categóricamente que "La familia es la base fundamental de la sociedad y tendrá la protección del Estado, quien dictará la legislación necesaria y creará las organizaciones y servicios para su integración, bienestar y desarrollo social, cultural y económico".

Ejes dogmáticos rectores del sistema de familia salvadoreño:
1. El Principio del Interés Superior de la Niña, Niño y Adolescente (Art. 34 Cn., Art. 3 CDN y Ley Crecer Juntos): Es una norma de ponderación obligatoria e inexcusable para todo juez, funcionario o particular. En cualquier conflicto entre los intereses de los adultos y los derechos fundamentales de un menor (a la vida, a la salud, a vivir con su familia, a la educación, al esparcimiento y a no ser separado arbitrariamente), prevalecen en todo momento y circunstancia los derechos de la niñez.
2. Igualdad de los Cónyuges y Régimen Patrimonial del Matrimonio: El matrimonio se funda en la igualdad de derechos y deberes entre el hombre y la mujer (Art. 36 inc. 2° Cn.). El Código de Familia (D.L. 677 de 1993) ofrece tres regímenes patrimoniales: Separación de Bienes, Comunidad Diferida (régimen supletorio por defecto donde los bienes adquiridos a título oneroso durante el matrimonio se dividen por mitad al disolverse) y Participación en las Ganancias.
3. Igualdad Absoluta de los Hijos (Art. 36 inc. 1° Cn.): Todos los hijos, nacidos dentro o fuera del matrimonio o adoptivos, gozan de idénticos derechos ante la ley. Se prohíbe de manera taxativa consignar cualquier calificación sobre la naturaleza de la filiación en las actas del Registro del Estado Familiar.
4. Obligación Alimenticia y Protección Reforzada (Arts. 247 a 270 C.Fam.): Los alimentos comprenden sustento, habitación, vestido, educación y recreación, calculándose de forma proporcional a los ingresos del alimentante y a las necesidades del alimentario. La cuota alimenticia goza de preferencia frente a cualquier otra deuda patrimonial ordinaria y su retención puede ordenarse por planilla directa del salario.
5. Violencia Intrafamiliar: Los jueces de familia y de paz están facultados para dictar medidas de protección inmediatas e inaudita parte (expulsión del agresor del hogar, prohibición de acercamiento y embargo de bienes para cuota alimenticia provisional).
6. Principios Procesales Rectores en los Tribunales de Familia (Ley Procesal de Familia, D.L. 133): El procedimiento en materia de familia es eminentemente oral, concentrado, público y oficioso en materia probatoria, desahogándose en dos comparecencias judiciales decisivas: la Audiencia Preliminar (con fase conciliatoria obligatoria, fijación de medidas cautelares urgentes y delimitación de pretensiones) y la Audiencia de Sentencia (desfile probatorio testimonial, documental y dictamen pericial sociofamiliar elaborado por el Equipo Multidisciplinario de trabajadores sociales y psicólogos).
7. Tutela de la Autoridad Parental y Protección Integral bajo la Ley Crecer Juntos (Arts. 206 a 246 C.Fam. y D.L. 431): La autoridad parental es el conjunto de potestades y deberes legales irrenunciables confiados a ambos progenitores para la crianza, educación, salud, representación judicial y administración de bienes de los hijos menores; pudiendo suspenderse o perderse judicialmente por maltrato físico o psicológico comprobado, abandono afectivo o material, o explotación económica, prohibiéndose de forma categórica el castigo corporal o trato humillante como pauta disciplinaria familiar.
8. La Unión No Matrimonial y los Derechos Sucesorios y Alimentos entre Convivientes (Arts. 118 a 126 C.Fam.): El reconocimiento judicial de la unión no matrimonial de hecho entre un hombre y una mujer sin impedimento legal de matrimonio que han convivido por más de tres años ininterrumpidos genera efectos patrimoniales plenos equiparables a la comunidad de bienes, derecho preferente de alimentos y vocación hereditaria intestada de primer orden concurrente con los hijos en sede sucesoria civil.`,
    entries: [
      {
        articleRef: 'Art. 32 de la Constitución de la República',
        literalText: 'La familia es la base fundamental de la sociedad y tendrá la protección del Estado, el cual dictará la legislación necesaria y creará las organizaciones y servicios para su integración, bienestar y desarrollo social, cultural y económico. El fundamento legal de la familia es el matrimonio y descansa en la igualdad jurídica de los cónyuges. El Estado fomentará el matrimonio; pero la falta de éste no afectará el goce de los derechos que se establezcan en favor de la familia.',
        simplifiedText: 'Protección a la Familia: La familia es el corazón de la sociedad salvadoreña. El Estado protege tanto a las familias unidas por matrimonio como a las uniones no matrimoniales, garantizando igualdad absoluta entre hombres y mujeres.',
        analyticalCommentary: 'Reconoce la pluralidad de modelos familiares y garantiza la protección estatal universal sin discriminación por origen conyugal.',
      },
      {
        articleRef: 'Art. 34 de la Constitución de la República',
        literalText: 'Todo menor tiene derecho a vivir en condiciones familiares y ambientales que le permitan su desarrollo integral, para lo cual tendrá la protección del Estado. La ley determinará los deberes del Estado y creará las instituciones para la protección de la maternidad y de la infancia.',
        simplifiedText: 'Interés Superior de la Niñez: Todos los niños, niñas y adolescentes tienen derecho a crecer en un hogar con amor, salud, comida y educación. La ley y los jueces siempre deben decidir lo que sea mejor para el niño.',
        analyticalCommentary: 'Base constitucional del principio del Interés Superior del Niño consagrado en la Ley Crecer Juntos y la Convención sobre los Derechos del Niño.',
      },
      {
        articleRef: 'Art. 36 de la Constitución de la República',
        literalText: 'Los hijos nacidos dentro o fuera de matrimonio y los adoptivos, tienen iguales derechos frente a sus padres. Es deber de éstos darles protección, asistencia, educación y seguridad. No se consignará en las actas del Registro Civil ninguna calificación sobre la naturaleza de la filiación, ni se expresará en las partidas de nacimiento el estado civil de los padres. Toda persona tiene derecho a tener un nombre que la identifique. La ley secundaria regulará esta materia. La ley determinará asimismo las formas de investigar y establecer la paternidad.',
        simplifiedText: 'Igualdad de los Hijos e Investigación de Paternidad: No existen hijos "legítimos" ni "ilegítimos"; todos los hijos tienen exactamente los mismos derechos a heredar y recibir alimentos de sus padres. Nadie puede ser discriminado por la partida de nacimiento.',
        analyticalCommentary: 'Prohibición absoluta de estigmas registrales sobre el nacimiento e imprescriptibilidad de la acción para investigar la paternidad biológica.',
      },
    ],
    solvedCases: [
      {
        id: 'case-fam-01',
        caseNumber: 1,
        title: 'Filiación Paternofilial Judicial Forzosa por Prueba Científica de ADN',
        factualContext: 'Una madre demandó el reconocimiento de paternidad de su hijo; el demandado se negó reiteradamente a comparecer a la toma de muestra pericial en el Instituto de Medicina Legal.',
        constitutionalIssue: '¿Genera presunción legal de paternidad la negativa injustificada a someterse a la prueba de ADN (Art. 140 C.Fam.)?',
        legalBasis: 'Art. 36 Cn.; Arts. 139 y 140 Código de Familia.',
        ratioDecidendi: 'El derecho a la identidad biológica del menor prevalece sobre la renuencia del presunto padre; la negativa injustificada a la prueba genética establece la paternidad por presunción legal.',
        proceduralOutcome: 'Sentencia declarando la paternidad forzosa, orden de asiento de apellido en el Registro y fijación de alimentos.',
      },
      {
        id: 'case-fam-02',
        caseNumber: 2,
        title: 'Modificación de Cuidado Personal por Interés Superior de la Niña',
        factualContext: 'Un padre solicitó el cuidado personal de su hija de diez años demostrando que la progenitora la exponía a situaciones de violencia física en un entorno de drogadicción.',
        constitutionalIssue: '¿Cuándo procede modificar el cuidado personal a la luz del Interés Superior de la Niña (Art. 34 Cn.)?',
        legalBasis: 'Art. 34 Cn.; Arts. 216 Código de Familia; Ley Crecer Juntos.',
        ratioDecidendi: 'El interés superior del niño exige colocar a la menor en el entorno familiar que garantice su estabilidad emocional, integridad física y desarrollo armónico.',
        proceduralOutcome: 'Sentencia otorgando el cuidado personal definitivo al padre con régimen de visitas supervisado para la madre.',
      },
      {
        id: 'case-fam-03',
        caseNumber: 3,
        title: 'Fijación de Cuota Alimenticia con Retención Directa por Planilla',
        factualContext: 'Un demandado por alimentos que percibía altos ingresos ocultaba su dinero en efectivo para evitar transferir la pensión alimenticia de sus dos hijos en edad escolar.',
        constitutionalIssue: '¿Cuáles son las medidas cautelares eficaces para asegurar el cumplimiento forzoso de la cuota alimenticia?',
        legalBasis: 'Arts. 247, 254 y 263 Código de Familia; Art. 34 Cn.',
        ratioDecidendi: 'Los alimentos son de orden público vital. El juez de familia puede ordenar la retención directa por orden patronal de hasta el cincuenta por ciento del salario líquido.',
        proceduralOutcome: 'Oficio de retención patronal inmediata por planilla y restricción migratoria de salida del país por mora.',
      },
      {
        id: 'case-fam-04',
        caseNumber: 4,
        title: 'Disolución de Matrimonio y Liquidación de Comunidad Diferida',
        factualContext: 'Una pareja contrajo matrimonio bajo el régimen supletorio de comunidad diferida. Durante el matrimonio adquirieron tres casas a nombre exclusivo del esposo con préstamos mancomunados.',
        constitutionalIssue: '¿Cómo se liquidan los bienes adquiridos a título oneroso bajo el régimen de comunidad diferida (Art. 62 C.Fam.)?',
        legalBasis: 'Art. 32 Cn.; Arts. 62 al 83 Código de Familia.',
        ratioDecidendi: 'En la comunidad diferida, todos los bienes adquiridos a título oneroso durante el vínculo matrimonial se presumen gananciales y deben dividirse por mitades equivalentes.',
        proceduralOutcome: 'Sentencia de divorcio decretando la adjudicación del cincuenta por ciento del valor neto de los inmuebles a favor de la cónyuge.',
      },
      {
        id: 'case-fam-05',
        caseNumber: 5,
        title: 'Restitución Internacional de Menor en Aplicación del Convenio de La Haya',
        factualContext: 'Un progenitor trasladó ilícitamente a su hijo menor desde España hacia El Salvador sin autorización del otro padre titular de la patria potestad compartida.',
        constitutionalIssue: '¿Procede la restitución inmediata del menor retenido ilícitamente bajo el Convenio de La Haya de 1980?',
        legalBasis: 'Art. 144 Cn.; Convenio de La Haya sobre Sustracción Internacional de Menores; Ley Crecer Juntos.',
        ratioDecidendi: 'La sustracción ilícita vulnera el derecho del niño a mantener relación continua con ambos padres y la competencia de los jueces de su residencia habitual.',
        proceduralOutcome: 'Sentencia ordenando la restitución internacional inmediata del menor a su país de residencia habitual en España.',
      },
    ],
  },
];


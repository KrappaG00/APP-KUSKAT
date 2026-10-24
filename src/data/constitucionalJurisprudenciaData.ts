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

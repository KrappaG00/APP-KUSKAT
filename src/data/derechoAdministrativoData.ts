/**
 * BANCO OFICIAL DE DERECHO ADMINISTRATIVO (LPA) Y FIRMA ELECTRÓNICA (MINEC)
 * Plataforma KUSKAT · República de El Salvador
 *
 * Marco Normativo:
 * - Ley de Procedimientos Administrativos (LPA - Decreto Legislativo N° 856).
 * - Ley de la Jurisdicción Contencioso Administrativa (LJCA - Decreto Legislativo N° 760).
 * - Ley de Firma Electrónica (Decreto Legislativo N° 1008) y su Reglamento.
 */

export interface AdminLawQuestion {
  id: string;
  category: 'procedimiento-comun' | 'silencio-administrativo' | 'recursos-administrativos' | 'potestad-sancionadora' | 'firma-electronica';
  categoryLabel: string;
  area: string;
  statement: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  legalBasis: string;
  distractorRationale: {
    A?: string;
    B?: string;
    C?: string;
    D?: string;
  };
}

export interface LpaProcedureStep {
  id: string;
  stageNumber: number;
  stageName: string;
  maxDuration: string;
  description: string;
  keyRules: string[];
  legalArticle: string;
}

export const ADMIN_LAW_SECTORS = [
  {
    id: 'all',
    name: 'Todos los Temas',
    icon: '⚖️',
  },
  {
    id: 'procedimiento-comun',
    name: 'Procedimiento Común & Plazos LPA',
    icon: '🏛️',
  },
  {
    id: 'silencio-administrativo',
    name: 'Silencio Administrativo (Negativo vs Positivo)',
    icon: '⏳',
  },
  {
    id: 'recursos-administrativos',
    name: 'Recursos (Reconsideración & Apelación)',
    icon: '📜',
  },
  {
    id: 'potestad-sancionadora',
    name: 'Potestad Sancionadora & Garantías',
    icon: '🛡️',
  },
  {
    id: 'firma-electronica',
    name: 'Firma Electrónica Certificada (MINEC)',
    icon: '🔏',
  },
];

export const LPA_PROCEDURE_FLOW: LpaProcedureStep[] = [
  {
    id: 'lpa-step-1',
    stageNumber: 1,
    stageName: 'Iniciación del Procedimiento',
    maxDuration: 'Inmediata o 10 días para subsanación',
    description: 'El procedimiento administrativo común puede iniciarse de oficio (por acuerdo superior, petición motivada de otro órgano o denuncia) o a solicitud de persona interesada.',
    keyRules: [
      'La solicitud debe contener: identificación del administrado (DUI/NIT), hechos claros, petición concreta y medio electrónico o físico para notificaciones.',
      'Si la solicitud adolece de defectos, la administración concede un plazo perentorio de 10 días hábiles para subsanar bajo apercibimiento de archivo (Art. 72 LPA).',
      'Principio de impulso de oficio: una vez iniciado, la administración está obligada a tramitarlo sin necesidad de ruegos del administrado.',
    ],
    legalArticle: 'LPA Arts. 64 a 70',
  },
  {
    id: 'lpa-step-2',
    stageNumber: 2,
    stageName: 'Ordenación e Instrucción (Aportación de Pruebas)',
    maxDuration: '20 días hábiles para período probatorio',
    description: 'Fase donde se determinan, verifican y comprueban los hechos en virtud de los cuales deba pronunciarse la resolución final.',
    keyRules: [
      'Admisión de todos los medios probatorios reconocidos en el derecho común compatibles con la naturaleza administrativa.',
      'Dictámenes e informes: por regla general son facultativos y no vinculantes, salvo disposición legal expresa en contrario (Art. 82 LPA).',
      'Trámite de Audiencia Obligatorio: antes de redactar la propuesta de resolución, se otorga audiencia a los interesados por un plazo de 5 a 10 días hábiles para formular alegatos y presentar documentos (Art. 86 LPA).',
    ],
    legalArticle: 'LPA Arts. 71 a 87',
  },
  {
    id: 'lpa-step-3',
    stageNumber: 3,
    stageName: 'Terminación y Resolución Expresa',
    maxDuration: 'Máximo 9 meses en primera instancia',
    description: 'Pone fin al procedimiento mediante resolución expresa, desistimiento, renuncia al derecho o caducidad por inactividad del administrado.',
    keyRules: [
      'La resolución debe ser motivada en hechos y fundamentos de derecho; no se admiten fórmulas estereotipadas (Art. 89 LPA).',
      'Plazo general máximo de tramitación y notificación: 9 meses contados desde la fecha de iniciación, salvo que una ley especial establezca un plazo menor.',
      'Si transcurre el plazo legal sin resolución, opera la figura del Silencio Administrativo.',
    ],
    legalArticle: 'LPA Arts. 88 a 93',
  },
  {
    id: 'lpa-step-4',
    stageNumber: 4,
    stageName: 'Vía Recursiva Administrativa',
    maxDuration: '10 días (Reconsideración) / 15 días (Apelación)',
    description: 'Mecanismos de impugnación ordinarios para revisar la legalidad y oportunidad de los actos administrativos definitivos.',
    keyRules: [
      'Recurso de Reconsideración: potestativo, se interpone en 10 días hábiles ante el mismo funcionario que dictó el acto; plazo de resolución de 1 mes (Art. 132 LPA).',
      'Recurso de Apelación: preceptivo para agotar la vía cuando existe superior jerárquico, se interpone en 15 días hábiles; plazo de resolución de 1 mes (Art. 134 LPA).',
      'El agotamiento de la vía administrativa deja expedita la acción contencioso-administrativa ante los tribunales de la LJCA.',
    ],
    legalArticle: 'LPA Arts. 129 a 135',
  },
];

export const ADMIN_LAW_QUESTIONS: AdminLawQuestion[] = [
  {
    "id": "lpa-01",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Plazo Máximo General de Resolución en Primera Instancia",
    "statement": "De acuerdo con el Artículo 89 de la Ley de Procedimientos Administrativos (LPA), ¿cuál es el plazo máximo supletorio general con el que cuenta la administración pública para resolver y notificar la resolución definitiva en un procedimiento de primera instancia, cuando la ley especial no fije uno distinto?",
    "options": {
      "A": "Nueve meses contados a partir de la iniciación del procedimiento.",
      "B": "Treinta días hábiles improrrogables.",
      "C": "Cinco años calendario.",
      "D": "Tres meses sin posibilidad de suspensión."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 89 inciso 1° de la LPA consagra que el plazo máximo para resolver y notificar la resolución en los procedimientos administrativos será de nueve meses contados desde la fecha de su iniciación, salvo que una ley formal especial establezca expresamente un plazo menor.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 89 inc. 1°.",
    "distractorRationale": {
      "A": "Correcto. El plazo general máximo en primera instancia de la LPA es de nueve meses.",
      "B": "30 días hábiles corresponde a ciertos plazos de informes o trámites breves, no a la duración general del procedimiento común.",
      "C": "Cinco años es el plazo supletorio de prescripción de ciertas acciones patrimoniales, no del procedimiento administrativo.",
      "D": "Tres meses es el plazo de inactividad que da lugar a la caducidad del procedimiento por culpa del interesado (Art. 93 LPA), no el plazo general de resolución."
    }
  },
  {
    "id": "lpa-02",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Garantía del Trámite de Audiencia Previa",
    "statement": "En la fase de instrucción del procedimiento administrativo común, ¿en qué momento procesal y con qué plazo mínimo debe otorgarse el trámite de audiencia al administrado antes de que se dicte la resolución definitiva?",
    "options": {
      "A": "Inmediatamente antes de redactar la propuesta de resolución, por un plazo no menor de cinco ni mayor de diez días hábiles.",
      "B": "Únicamente después de haber sido ejecutada la sanción en contra del ciudadano.",
      "C": "Dentro de las 24 horas siguientes a la presentación de la solicitud inicial.",
      "D": "Es un trámite enteramente discrecional que la administración puede omitir libremente para ahorrar tiempo."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 86 de la LPA establece que, instruido el procedimiento e inmediatamente antes de redactar la propuesta de resolución, se pondrá de manifiesto a los interesados por un plazo no menor de cinco días ni mayor de diez días hábiles para que formulen alegatos y presenten los documentos y justificaciones que estimen pertinentes. Su omisión genera nulidad absoluta por indefensión.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 86.",
    "distractorRationale": {
      "A": "Correcto. El plazo preceptivo de audiencia previa es de 5 a 10 días hábiles.",
      "B": "Garantizar la audiencia después de ejecutar la sanción vulnera flagrantemente el debido proceso y el derecho de defensa (Art. 11 Cn.).",
      "C": "Al inicio no se ha sustanciado la prueba ni los informes técnicos.",
      "D": "No es discrecional; es una formalidad esencial cuya inobservancia causa nulidad insubsanable."
    }
  },
  {
    "id": "lpa-03",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Plazo de Subsanación de Solicitudes Defectuosas",
    "statement": "Si un escrito o solicitud presentado por un administrado no reúne los requisitos exigidos por el Artículo 71 de la LPA, ¿qué actuación debe realizar la autoridad administrativa receptora?",
    "options": {
      "A": "Prevenir al interesado para que en un plazo perentorio de diez días hábiles subsane la falta, bajo apercibimiento de archivar su solicitud sin más trámite.",
      "B": "Rechazar de plano y destruir la solicitud sin notificar al interesado.",
      "C": "Interponer una denuncia penal contra el solicitante por presentación defectuosa.",
      "D": "Resolver favorablemente presumiendo que los datos faltantes son verdaderos."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 72 de la LPA estipula que si la solicitud de iniciación no reúne los requisitos exigidos, se requerirá al solicitante para que en el plazo de diez días hábiles subsane la falta o acompañe los documentos preceptivos, con indicación de que si así no lo hiciere, se declarará el desistimiento de su petición y se archivará.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 72.",
    "distractorRationale": {
      "A": "Correcto. La ley concede 10 días hábiles de prevención antes de declarar el desistimiento.",
      "B": "El rechazo in límine sin dar oportunidad de subsanación vulnera el derecho a la petición y respuesta (Art. 18 Cn.).",
      "C": "Un defecto formal no constituye infracción ni delito penal.",
      "D": "La administración no puede suplir unilateralmente omisiones sustanciales de la parte solicitante."
    }
  },
  {
    "id": "lpa-04",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Principio de Legalidad y Vinculación Positiva",
    "statement": "En el marco del Artículo 3 de la LPA y el Artículo 86 de la Constitución de la República, ¿cómo se define el principio de legalidad administrativa que vincula a todos los funcionarios públicos salvadoreños?",
    "options": {
      "A": "Vinculación positiva: la administración pública solo puede actuar cuando una norma previa y expresa le atribuya potestades para ello.",
      "B": "Vinculación negativa: los funcionarios pueden realizar cualquier acto que no esté expresamente prohibido por una ley penal.",
      "C": "Autonomía de la voluntad: los servidores públicos gozan de la misma libertad contractual y dispositiva que los particulares.",
      "D": "Soberanía burocrática: las circulares internas prevalecen sobre los tratados internacionales y las leyes formales."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 3 de la LPA consagra el principio de legalidad como vinculación positiva: las autoridades deben actuar con apego a la Constitución y a las leyes, dentro de las facultades que les estén expresamente atribuidas, en armonía con el Art. 86 inc. 3° Cn. ('los funcionarios del gobierno son delegados del pueblo y no tienen más facultades que las que expresamente les da la ley').",
    "legalBasis": "Ley de Procedimientos Administrativos Art. 3 Ord. 1° y Art. 86 Cn.",
    "distractorRationale": {
      "A": "Correcto. La vinculación positiva es la regla infranqueable del derecho público salvadoreño.",
      "B": "La vinculación negativa ('lo que no está prohibido está permitido') rige para los particulares (Art. 8 Cn.), no para funcionarios.",
      "C": "Los funcionarios no disponen de autonomía de la voluntad privada en el ejercicio de funciones públicas.",
      "D": "La jerarquía normativa constitucional supedita las circulares internas a las leyes y a la Constitución."
    }
  },
  {
    "id": "lpa-05",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Principio de Verdad Material",
    "statement": "De conformidad con el principio de verdad material regulado en el Artículo 3 numeral 11 de la LPA, ¿cuál es la obligación que asume el instructor administrativo durante el procedimiento?",
    "options": {
      "A": "Verificar plenamente los hechos reales y objetivos que sirven de motivo a sus decisiones, sin limitarse a las pruebas formales aportadas por las partes.",
      "B": "Atenerse únicamente a las declaraciones juradas del interesado sin investigar antecedentes.",
      "C": "Aceptar como verdad jurídica indiscutible lo expresado en noticias periodísticas y redes sociales.",
      "D": "Declarar confeso al administrado ante cualquier contradicción menor en sus escritos."
    },
    "correctAnswer": "A",
    "explanation": "El principio de verdad material (Art. 3 Ord. 11° LPA) impone a la autoridad la carga de verificar plenamente los hechos fácticos que fundamentan sus actos, disponiendo de oficio las medidas probatorias necesarias, distinguiéndose de la verdad meramente formal del proceso civil dispositivo.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 3 Ord. 11°.",
    "distractorRationale": {
      "A": "Correcto. La verdad material exige investigar los hechos reales más allá del expediente formal.",
      "B": "Limitarse a la declaración sin constatación vulnera el deber de instrucción de oficio.",
      "C": "Las noticias o redes sociales no constituyen por sí solas medios probatorios idóneos y objetivos.",
      "D": "El antiformalismo y la verdad material prohíben ficciones sancionatorias automáticas."
    }
  },
  {
    "id": "lpa-06",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Principio Antiformalista o Pro Actione",
    "statement": "Según el principio de antiformalismo establecido en el Artículo 3 numeral 8 de la LPA, ¿cómo debe proceder la administración frente a defectos no sustanciales en los escritos de los administrados?",
    "options": {
      "A": "Debe facilitar el acceso y permitir la subsanación de errores formales, evitando que formalismos innecesarios obstaculicen una decisión sobre el fondo.",
      "B": "Debe rechazar ipso facto cualquier escrito que contenga una sola falta de ortografía o mecanografía.",
      "C": "Debe exigir autenticación notarial para toda presentación física sin excepción alguna.",
      "D": "Debe imponer una multa pecuniaria al administrado por cada error en la redacción."
    },
    "correctAnswer": "A",
    "explanation": "El principio de antiformalismo o pro actione (Art. 3 Ord. 8° LPA) ordena que los requisitos formales deben interpretarse de manera que no entorpezcan innecesariamente el ejercicio de los derechos de los administrados, propiciando siempre la subsanación antes de cualquier rechazo.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 3 Ord. 8°.",
    "distractorRationale": {
      "A": "Correcto. El antiformalismo busca privilegiar la resolución de fondo sobre rigideces accesorias.",
      "B": "El rechazo in limine por fallas menores quebranta el derecho a la petición y tutela efectiva.",
      "C": "La exigencia general de autenticación notarial está prohibida por la LPA salvo ley especial expresa.",
      "D": "No existe sanción pecuniaria por deficiencias de estilo o redacción en peticiones ciudadanas."
    }
  },
  {
    "id": "lpa-07",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Principio de Confianza Legítima",
    "statement": "¿Qué tutela jurídica otorga el principio de buena fe y confianza legítima (Art. 3 numeral 6 LPA) a los administrados en sus relaciones con las instituciones públicas?",
    "options": {
      "A": "Protege las expectativas razonables y estables del ciudadano frente a cambios de criterio intempestivos o retroactivos no debidamente motivados.",
      "B": "Otorga inmunidad patrimonial absoluta a las empresas frente a futuras reformas tributarias.",
      "C": "Impide que la administración pública revoque actos nulos de pleno derecho.",
      "D": "Exime al administrado de cumplir con los requisitos reglamentarios posteriores."
    },
    "correctAnswer": "A",
    "explanation": "El principio de buena fe y confianza legítima (Art. 3 Ord. 6° LPA) prohíbe que la administración altere arbitraria y repentinamente sus criterios reiterados o conductas generadoras de expectativas fundadas en los administrados, exigiendo motivación reforzada y régimen de transición.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 3 Ord. 6°.",
    "distractorRationale": {
      "A": "Correcto. La confianza legítima resguarda la previsibilidad y coherencia de las actuaciones estatales.",
      "B": "No congela el ordenamiento jurídico ni crea fueros tributarios inmutables.",
      "C": "La nulidad absoluta no genera derechos adquiridos ni puede convalidarse por confianza legítima.",
      "D": "No releva del cumplimiento de deberes legales sobrevinientes de interés público."
    }
  },
  {
    "id": "lpa-08",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Improrrogabilidad de la Competencia Administrativa",
    "statement": "El Artículo 24 de la LPA dispone que la competencia administrativa es irrenunciable e improrrogable. ¿Cuál es la única circunstancia en que las facultades de un órgano pueden ser ejercidas por otro ente o funcionario?",
    "options": {
      "A": "Únicamente en los casos de delegación, avocación, suplencia o encomienda de gestión expresamente autorizados por la ley.",
      "B": "Mediante acuerdo verbal privado entre los dos titulares de los despachos.",
      "C": "Siempre que el administrado lo solicite voluntariamente por escrito para agilizar su trámite.",
      "D": "Cuando el funcionario superior desee deslindar toda responsabilidad penal o civil en un subalterno."
    },
    "correctAnswer": "A",
    "explanation": "El Art. 24 LPA consagra que la competencia es irrenunciable y se ejercerá precisamente por los órganos que la tengan atribuida como propia, salvo los casos de delegación, avocación, suplencia o sustitución previstos expresamente en las leyes.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 24.",
    "distractorRationale": {
      "A": "Correcto. La competencia es de orden público y solo muta mediante los mecanismos taxativos de ley.",
      "B": "Los acuerdos informales carecen de valor jurídico y generan incompetencia manifiesta.",
      "C": "El administrado no tiene facultad de prorrogar o disponer de competencias de orden público.",
      "D": "La delegación no extingue la responsabilidad del órgano delegante por falta de vigilancia."
    }
  },
  {
    "id": "lpa-09",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Límites Formales de la Delegación de Competencias",
    "statement": "Según el Artículo 27 de la LPA, ¿cuál de las siguientes materias queda taxativamente excluida de la posibilidad de delegación interorgánica?",
    "options": {
      "A": "La adopción de disposiciones de carácter general o reglamentos, y la resolución de recursos en los órganos que hayan dictado los actos recurridos.",
      "B": "La expedición de constancias de tiempo de servicio a empleados públicos.",
      "C": "La recepción de correspondencia ciudadana en ventanilla única.",
      "D": "La emisión de solvencias municipales corrientes de aseo y alumbrado."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 27 de la LPA prohíbe delegar: a) las atribuciones relativas a las relaciones con la Presidencia o la Asamblea; b) la adopción de reglamentos; c) la resolución de recursos cuando se trate del órgano que dictó el acto impugnado; y d) las competencias atribuidas en razón de una mayoría cualificada.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 27.",
    "distractorRationale": {
      "A": "Correcto. La potestad reglamentaria y la resolución de recursos en el mismo órgano son indelegables.",
      "B": "Las constancias de servicio son actos reglados certificatorios perfectamente delegables.",
      "C": "La recepción documental corresponde a tareas materiales auxiliares de trámite ordinario.",
      "D": "Las solvencias tributarias regladas son actos de gestión ordinaria plenamente delegables."
    }
  },
  {
    "id": "lpa-10",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Avocación de Competencias",
    "statement": "De conformidad con el Artículo 29 de la LPA, ¿en qué consiste la figura de la avocación y cuáles son sus requisitos de procedencia?",
    "options": {
      "A": "La facultad de un órgano jerárquicamente superior para atraer hacia sí el conocimiento de un asunto cuya resolución correspondería a un subordinado, mediante acuerdo motivado por razones técnicas, económicas o de interés público.",
      "B": "La renuncia definitiva del funcionario titular a su cargo público para dedicarse a la actividad privada.",
      "C": "La transferencia permanente de una dirección general hacia un ministerio distinto.",
      "D": "El nombramiento de árbitros privados para resolver litigios laborales en el Estado."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 29 de la LPA establece que los órganos superiores podrán avocar para sí el conocimiento de uno o varios asuntos cuya resolución corresponda ordinariamente a sus órganos jerárquicamente dependientes, cuando circunstancias de índole técnica, económica, social o jurídica lo hagan conveniente.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 29.",
    "distractorRationale": {
      "A": "Correcto. La avocación es la atracción excepcional de un asunto por el superior jerárquico.",
      "B": "La renuncia es una causal de cesación del servicio, no un instituto de competencia.",
      "C": "El traslado institucional permanente exige reforma legal de la estructura orgánica.",
      "D": "La avocación no tiene relación con el arbitraje privado."
    }
  },
  {
    "id": "lpa-11",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Encomienda de Gestión",
    "statement": "Cuando un órgano administrativo encomienda la realización de actividades de carácter material o técnico a otro órgano de la misma o distinta administración (Art. 30 LPA), ¿cuál es el efecto jurídico respecto a la competencia?",
    "options": {
      "A": "La encomienda de gestión no supone cesión de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, conservando el encomendante la responsabilidad de dictar los actos jurídicos.",
      "B": "El órgano encomendado se convierte en el titular perpetuo de la potestad decisoria de fondo.",
      "C": "Queda extinguida la personalidad jurídica del ministerio encomendante.",
      "D": "Se privatiza la función pública y se rige íntegramente por el Código de Comercio."
    },
    "correctAnswer": "A",
    "explanation": "El Art. 30 inc. 2° LPA aclara que la encomienda de gestión no supone cesión de titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del órgano encomendante dictar cuantos actos jurídicos den soporte o en los que se integre la actividad material objeto de encomienda.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 30.",
    "distractorRationale": {
      "A": "Correcto. La encomienda solo transfiere la ejecución material o técnica, no la potestad resolutiva.",
      "B": "La titularidad no se transfiere en absoluto.",
      "C": "No altera la personalidad jurídica de los órganos ni de las instituciones.",
      "D": "Sigue siendo derecho público y no implica privatización mercantil."
    }
  },
  {
    "id": "lpa-12",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Deber de Abstención del Funcionario",
    "statement": "Conforme al Artículo 52 de la LPA, ¿cuál de las siguientes situaciones constituye causal obligatoria de abstención para que una autoridad o funcionario no intervenga en el procedimiento administrativo?",
    "options": {
      "A": "Tener parentesco de consanguinidad dentro del cuarto grado o de afinidad dentro del segundo con cualquiera de los interesados o sus representantes.",
      "B": "Ser del mismo departamento de nacimiento que el administrado.",
      "C": "Profesar la misma religión o haber estudiado en la misma universidad que el solicitante.",
      "D": "Tener una antigüedad laboral en la institución mayor a diez años."
    },
    "correctAnswer": "A",
    "explanation": "El Art. 52 num. 2° LPA prescribe como causal de abstención tener parentesco de consanguinidad dentro del cuarto grado o de afinidad dentro del segundo con cualquiera de los interesados, con los administradores de entidades interesadas o con sus asesores y representantes.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 52 num. 2°.",
    "distractorRationale": {
      "A": "Correcto. El parentesco en 4° grado de consanguinidad o 2° de afinidad es causal taxativa de abstención.",
      "B": "El lugar de nacimiento no constituye causal legal de pérdida de imparcialidad.",
      "C": "La afiliación religiosa o universidad común no están tipificadas como impedimentos objetivos.",
      "D": "La antigüedad en el cargo no inhabilita al funcionario."
    }
  },
  {
    "id": "lpa-13",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Trámite de Recusación por el Interesado",
    "statement": "Si un funcionario incurso en causal del Artículo 52 de la LPA no se abstiene voluntariamente, el interesado puede recusarlo (Art. 53 LPA). ¿Qué trámite inmediato debe seguir la autoridad recusada?",
    "options": {
      "A": "Manifestar al día siguiente a su superior jerárquico si se da o no la causal alegada, resolviendo el superior dentro de los tres días hábiles siguientes.",
      "B": "Archivar la solicitud del administrado y sancionarlo con arresto por desacato.",
      "C": "Remitir el expediente a la Sala de lo Penal de la Corte Suprema de Justicia.",
      "D": "Ignorar la recusación y dictar sentencia definitiva inmediatamente sin dar explicaciones."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 54 de la LPA dispone que el recusado manifestará en el día siguiente si concurre o no en él la causa alegada. El superior resolverá en el plazo de tres días hábiles, ordenando la sustitución si estima procedente la recusación.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 54.",
    "distractorRationale": {
      "A": "Correcto. El informe en 1 día y la resolución del superior en 3 días hábiles garantizan celeridad.",
      "B": "Recusar en base a la ley es un derecho procesal legítimo, jamás un desacato.",
      "C": "La recusación administrativa se resuelve en la vía gubernativa, no en sede penal ordinaria.",
      "D": "Ignorar la recusación contamina el acto de vicio de nulidad absoluta por falta de imparcialidad."
    }
  },
  {
    "id": "lpa-14",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Concepto Jurídico de Interesado",
    "statement": "¿Quiénes ostentan la condición de interesados en el procedimiento administrativo según el Artículo 45 de la LPA?",
    "options": {
      "A": "Quienes lo promuevan como titulares de derechos o intereses legítimos, y aquellos que, sin haber iniciado el procedimiento, tengan derechos o intereses que puedan verse afectados por la decisión.",
      "B": "Exclusivamente los ciudadanos salvadoreños inscritos en el padrón electoral que paguen impuestos directos.",
      "C": "Cualquier habitante del planeta sin necesidad de acreditar interés alguno en el asunto concreto.",
      "D": "Únicamente los apoderados con título de abogado y notario colegiado."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 45 de la LPA define la condición de interesado a favor de: a) quienes lo promuevan como titulares de derechos o intereses legítimos individuales o colectivos; y b) los que, sin haber iniciado el procedimiento, tengan derechos o intereses legítimos que puedan resultar afectados por la resolución que se adopte.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 45.",
    "distractorRationale": {
      "A": "Correcto. La legitimación abarca tanto a promotores como a terceros potencialmente afectados.",
      "B": "Los extranjeros y menores de edad también pueden tener condición de interesados.",
      "C": "Se requiere vínculo de interés legítimo o afectación, no simple curiosidad popular abstracta salvo acción pública.",
      "D": "El interesado no requiere comparecer con abogado para peticionar en sede administrativa común."
    }
  },
  {
    "id": "lpa-15",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Pluralidad de Interesados y Representación Común",
    "statement": "Cuando en una solicitud, escrito o comunicación figuren varios interesados con pretensiones idénticas (Art. 48 LPA), ¿cómo se gestionan las notificaciones y actuaciones con la administración?",
    "options": {
      "A": "Las actuaciones se entenderán con el representante expresamente designado, o en su defecto, con el que figure en primer término.",
      "B": "La administración debe desestimar la petición obligando a que cada persona abra un juicio individual.",
      "C": "Debe notificarse únicamente al ciudadano de mayor edad del grupo.",
      "D": "La administración queda liberada de toda obligación de notificar."
    },
    "correctAnswer": "A",
    "explanation": "El Art. 48 LPA estipula que cuando en una sola solicitud figuren varios interesados, las actuaciones a que dé lugar se efectuarán con el representante o el interesado que expresamente hayan señalado, y, en su defecto, con el que figure en primer término.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 48.",
    "distractorRationale": {
      "A": "Correcto. El representante designado o el primer firmante canaliza las actuaciones colectivas.",
      "B": "La acumulación subjetiva inicial está permitida y fomenta la economía procedimental.",
      "C": "La edad no es criterio de prelación procedimental.",
      "D": "La falta de notificación genera indefensión y nulidad del trámite."
    }
  },
  {
    "id": "lpa-16",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Medidas Cautelares o Provisionales",
    "statement": "De acuerdo con el Artículo 73 de la LPA, ¿bajo qué presupuestos sustantivos y con qué límites puede el órgano competente acordar medidas provisionales o cautelares?",
    "options": {
      "A": "Para asegurar la eficacia de la resolución final si existen elementos de juicio suficientes (apariencia de buen derecho y peligro en la demora), sin que causen perjuicios irreparables a los interesados.",
      "B": "Como sanción anticipada para que el administrado pague la multa antes de defenderse.",
      "C": "Únicamente a solicitud de la Sala de lo Constitucional.",
      "D": "Siempre que la administración desee congelar las cuentas bancarias de los opositores políticos."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 73 de la LPA autoriza al órgano competente a adoptar medidas provisionales motivadas para asegurar la eficacia de la resolución que pudiera recaer, observando los principios de proporcionalidad, efectividad y menor onerosidad, y respetando el fumus boni iuris y el periculum in mora sin causar perjuicios irreparables.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 73.",
    "distractorRationale": {
      "A": "Correcto. Las cautelares protegen la eficacia de la decisión final bajo criterios de estricta proporcionalidad.",
      "B": "Las cautelares jamás pueden tener naturaleza ni finalidad sancionatoria punitiva.",
      "C": "La administración instructora ordinaria tiene competencia cautelar propia.",
      "D": "Los fines políticos constituyen desviación de poder sancionada con nulidad absoluta."
    }
  },
  {
    "id": "lpa-17",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Acumulación de Expedientes Administrativos",
    "statement": "El Artículo 74 de la LPA faculta la acumulación de expedientes. ¿Qué condición esencial debe cumplirse para que proceda la acumulación y qué recurso cabe contra dicho acuerdo?",
    "options": {
      "A": "Que los procedimientos guarden una íntima conexión fáctica o jurídica; contra el acuerdo de acumulación no procederá recurso alguno.",
      "B": "Que los administrados sean parientes entre sí; contra el acuerdo cabe apelación ante la CSJ.",
      "C": "Solo procede si el valor económico de cada expediente es inferior a mil dólares.",
      "D": "Que todos los expedientes hayan caducado previamente."
    },
    "correctAnswer": "A",
    "explanation": "El Art. 74 LPA establece que el órgano que tramite un procedimiento podrá acordar su acumulación a otros con los que guarde íntima conexión. Contra el acuerdo de acumulación no procederá recurso alguno, al ser un acto de mero trámite organizativo.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 74.",
    "distractorRationale": {
      "A": "Correcto. Conexión de materias e irrecurribilidad del acuerdo interlocutorio.",
      "B": "El parentesco es irrelevante; lo vinculante es el objeto y la causa procesal.",
      "C": "La cuantía económica no limita la facultad de acumulación de causas.",
      "D": "No se pueden acumular expedientes extintos o caducados."
    }
  },
  {
    "id": "lpa-18",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Tramitación de Urgencia",
    "statement": "Cuando razones de interés público debidamente motivadas exijan la tramitación de urgencia del procedimiento administrativo (Art. 75 LPA), ¿qué impacto produce esta declaratoria en los plazos legales?",
    "options": {
      "A": "Se reducirán a la mitad los plazos establecidos para el procedimiento ordinario, salvo los relativos a la presentación de solicitudes y recursos.",
      "B": "Se suspenden todos los plazos por un año para descanso del personal.",
      "C": "Se suprimen todas las garantías de audiencia y defensa del administrado.",
      "D": "Los plazos se triplican para que los peritos tengan mayor holgura técnica."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 75 de la LPA prescribe que cuando razones de interés público lo aconsejen, se podrá acordar la tramitación de urgencia, reduciéndose a la mitad los plazos establecidos para el procedimiento ordinario, salvo los relativos a la presentación de solicitudes y recursos, los cuales se mantienen intactos.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 75.",
    "distractorRationale": {
      "A": "Correcto. Reducción a la mitad protegiendo los plazos de solicitudes y recursos de los ciudadanos.",
      "B": "La urgencia busca acelerar la tramitación, no suspenderla.",
      "C": "Las garantías del debido proceso y derecho de defensa son innegociables e inderogables.",
      "D": "Triplicar plazos sería contradictorio con la naturaleza perentoria de la urgencia."
    }
  },
  {
    "id": "lpa-19",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Carga de la Prueba en el Procedimiento Administrativo",
    "statement": "¿Cómo se distribuye la carga probatoria en el procedimiento administrativo común conforme al Artículo 77 de la LPA?",
    "options": {
      "A": "Corresponde la carga de la prueba a quien invoque o formule afirmaciones de hecho que fundamenten su pretensión, sin perjuicio del impulso e investigación de oficio de la administración.",
      "B": "El ciudadano siempre se presume culpable de cualquier hecho imputado y debe probar su inocencia.",
      "C": "La administración no tiene potestad para recabar pruebas por cuenta propia.",
      "D": "La prueba documental extranjera no requiere trámite de apostilla ni traducción."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 77 de la LPA sigue la regla procesal común: corresponde probar los hechos a quien los alega en apoyo de su pretensión, complementado por el principio de impulsión oficial donde la administración debe recabar los elementos necesarios para dictar una resolución fundada en la verdad material.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 77.",
    "distractorRationale": {
      "A": "Correcto. Distribución mixta: carga del alegante combinada con impulso de oficio hacia la verdad material.",
      "B": "La presunción de culpabilidad atenta contra el principio constitucional de inocencia (Art. 12 Cn.).",
      "C": "La administración está obligada al impulso oficioso de la instrucción.",
      "D": "Documentos foráneos se rigen por la Convención de La Haya (Apostilla) o legalización diplomática consular."
    }
  },
  {
    "id": "lpa-20",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Duración del Período de Prueba",
    "statement": "Cuando la administración acuerde la apertura a prueba en el procedimiento común por existir discrepancia en hechos relevantes (Art. 79 LPA), ¿cuál es el plazo ordinario de dicho período probatorio?",
    "options": {
      "A": "Un plazo de veinte días hábiles.",
      "B": "Tres días calendario continuos.",
      "C": "Seis meses prorrogables a dos años.",
      "D": "Veinticuatro horas improrrogables."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 79 de la LPA dispone que el período de prueba se abrirá por un plazo de veinte días hábiles cuando la administración no tenga por ciertos los hechos alegados por los interesados o la naturaleza del procedimiento lo exija.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 79.",
    "distractorRationale": {
      "A": "Correcto. El período de prueba legal ordinario de la LPA es de 20 días hábiles.",
      "B": "Tres días es un plazo muy breve e insuficiente para la sustanciación de testimonios o peritajes.",
      "C": "Seis meses excede desmedidamente la lógica de los plazos comunes en sede gubernativa.",
      "D": "Veinticuatro horas solo se concibe en términos de flagrancia policial, no en prueba administrativa."
    }
  },
  {
    "id": "lpa-21",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Naturaleza de Dictámenes e Informes Técnicos",
    "statement": "De conformidad con el Artículo 82 de la LPA, ¿cuál es la regla general sobre el carácter y fuerza vinculante de los informes solicitados a otros órganos o unidades?",
    "options": {
      "A": "Los informes y dictámenes serán facultativos y no vinculantes, salvo que una ley disponga expresamente lo contrario.",
      "B": "Todos los informes son obligatorios y vinculantes bajo pena de destitución del instructor.",
      "C": "El instructor debe acatar ciegamente el criterio del perito sin hacer juicio de valor.",
      "D": "Los informes técnicos privados tienen mayor rango legal que los dictámenes de instituciones del Estado."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 82 de la LPA consagra como regla general que los informes serán facultativos (la autoridad decide si los pide o no) y no vinculantes (la autoridad puede apartarse fundamentando su criterio), salvo disposición legal expresa que establezca preceptividad o carácter vinculante.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 82.",
    "distractorRationale": {
      "A": "Correcto. Regla supletoria: facultativos y no vinculantes salvo ley especial.",
      "B": "Hacerlos todos vinculantes despojaría al órgano competente de su potestad constitucional decisoria.",
      "C": "La autoridad administrativa valora los informes conforme a las reglas de la sana crítica.",
      "D": "No existe preeminencia abstracta de peritos privados sobre órganos técnicos estatales."
    }
  },
  {
    "id": "lpa-22",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Consecuencia de la Falta de Trámite de Audiencia",
    "statement": "¿Qué vicio de invalidez acarrea la emisión de una resolución final desfavorable sin haber conferido previamente el trámite de audiencia del Artículo 86 de la LPA?",
    "options": {
      "A": "Nulidad de pleno derecho o absoluta, por haberse dictado con omisión total y absoluta del procedimiento legalmente establecido y con indefensión.",
      "B": "Mera irregularidad no invalidante subsanable con un saludo de cortesía.",
      "C": "Válido y eficaz de pleno derecho.",
      "D": "Caducidad de la personalidad jurídica del administrado afectado."
    },
    "correctAnswer": "A",
    "explanation": "Conforme al Artículo 36 literal d) de la LPA y la jurisprudencia de la Sala de lo Contencioso Administrativo, la omisión del trámite esencial de audiencia previa consagrado en el Art. 86 LPA constituye un vicio insubsanable de nulidad de pleno derecho por vulneración frontal del derecho de audiencia y defensa (Art. 11 Cn.).",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 36 lit. d) y Art. 86.",
    "distractorRationale": {
      "A": "Correcto. La indefensión estructural acarrea nulidad absoluta insubsanable.",
      "B": "La audiencia previa es un elemento esencial del debido proceso, no un mero trámite de cortesía.",
      "C": "No puede ser válido un acto que viola derechos fundamentales constitucionales.",
      "D": "La persona jurídica administrada conserva intacta su personalidad y capacidad para accionar en justicia."
    }
  },
  {
    "id": "lpa-23",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Requisitos de Motivación del Acto Administrativo",
    "statement": "El Artículo 89 de la LPA exige que las resoluciones administrativas sean motivadas. ¿Qué estándares mínimos debe cumplir dicha motivación para tener validez jurídica?",
    "options": {
      "A": "Debe contener una sucinta referencia de hechos probados y los fundamentos jurídicos pertinentes, quedando expresamente prohibidas las fórmulas abstractas o estereotipadas.",
      "B": "Basta con colocar un sello oficial que diga 'APROBADO' o 'DENEGADO' sin explicar ninguna razón.",
      "C": "Consignar únicamente que se resuelve de esa forma 'por órdenes superiores directas'.",
      "D": "Copiar íntegramente el texto de la Constitución sin analizar el caso concreto."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 89 inc. 2° de la LPA establece que la resolución contendrá la decisión debidamente motivada, con relación sucinta pero suficiente de los hechos comprobados y los fundamentos de derecho aplicables, proscribiendo fórmulas genéricas vacías de razonamiento fáctico.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 89 inc. 2°.",
    "distractorRationale": {
      "A": "Correcto. La motivación exige razonamiento fáctico-jurídico individualizado sin fórmulas estereotipadas.",
      "B": "El simple sello denegatorio arbitrario viola el deber de motivación (Art. 18 Cn.).",
      "C": "Invocar 'órdenes superiores' no legitima un acto carente de sustento legal.",
      "D": "La cita genérica sin subsunción del caso no satisface la motivación exigida por el derecho administrativo."
    }
  },
  {
    "id": "lpa-24",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Desistimiento y Renuncia del Administrado",
    "statement": "De acuerdo con los Artículos 91 y 92 de la LPA, ¿cuál es la diferencia sustantiva entre el desistimiento de la solicitud y la renuncia de derechos en el procedimiento?",
    "options": {
      "A": "El desistimiento pone fin al trámite actual pero permite replantear la solicitud en el futuro; la renuncia extingue el derecho sustantivo mismo y no puede volver a ejercerse, siempre que no esté prohibida por el orden público.",
      "B": "El desistimiento es sancionado penalmente, mientras que la renuncia es obligatoria para todos los jubilados.",
      "C": "Ambas figuras son exactamente idénticas sin ninguna diferencia procesal ni sustantiva.",
      "D": "El desistimiento solo puede ser realizado por la administración pública de oficio."
    },
    "correctAnswer": "A",
    "explanation": "El Art. 91 LPA regula el desistimiento, el cual recae sobre el procedimiento o solicitud concreta iniciada, dejando intacto el derecho material para deducirlo después; en cambio, el Art. 92 LPA trata la renuncia sobre el derecho subjetivo sustancial, la cual extingue el derecho mismo, admisible solo si no contraría el interés general ni el orden público.",
    "legalBasis": "Ley de Procedimientos Administrativos, Arts. 91 y 92.",
    "distractorRationale": {
      "A": "Correcto. Desistimiento es procedimental adquirente; renuncia es sustantiva y abdica del derecho.",
      "B": "Desistir de un trámite es un acto legal voluntario que no genera sanción penal.",
      "C": "Tienen efectos materiales y procesales profundamente distintos.",
      "D": "El desistimiento es un acto privativo de la parte interesada, no de la administración."
    }
  },
  {
    "id": "lpa-25",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Caducidad de la Instancia por Inactividad del Interesado",
    "statement": "En los procedimientos iniciados a solicitud del interesado, si el trámite se paraliza por causa imputable al administrado (Art. 93 LPA), ¿cuál es el procedimiento previo y el plazo para declarar la caducidad?",
    "options": {
      "A": "La administración advertirá que transcurridos tres meses de inactividad se producirá la caducidad del procedimiento y se ordenará el archivo.",
      "B": "La caducidad opera automáticamente a los cinco días sin necesidad de advertencia previa.",
      "C": "El expediente nunca puede caducar aunque el administrado desaparezca por veinte años.",
      "D": "Se subasta públicamente el patrimonio del interesado en abandono."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 93 de la LPA estipula que si el procedimiento se paraliza por culpa del administrado, se le advertirá que pasados tres meses se producirá la caducidad del mismo, archívese las actuaciones salvo que el asunto entrañe interés público o sea conveniente sustanciarlo para el esclarecimiento de los hechos.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 93.",
    "distractorRationale": {
      "A": "Correcto. Exige advertencia previa expresa y transcurso de 3 meses de paralización culposa.",
      "B": "No opera de pleno derecho en 5 días; el plazo de ley es de 3 meses con notificación preventiva.",
      "C": "Los expedientes no pueden permanecer eternamente abiertos por seguridad jurídica.",
      "D": "La caducidad solo concluye la instancia administrativa sin afectar bienes en remate."
    }
  },
  {
    "id": "lpa-26",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Plazo para Notificar Actos Administrativos",
    "statement": "Conforme al Artículo 97 de la LPA, ¿en qué plazo debe cursarse la notificación formal de cualquier acto administrativo definitivo a los interesados?",
    "options": {
      "A": "Dentro del plazo de cinco días hábiles a partir de la fecha en que el acto haya sido dictado.",
      "B": "En el plazo improrrogable de sesenta días hábiles.",
      "C": "En el término de un año fiscal.",
      "D": "No existe plazo; la administración puede notificar cuando lo estime conveniente en el quinquenio."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 97 inciso 2° de la LPA ordena de manera imperativa que toda notificación deberá ser cursada dentro del plazo de cinco días hábiles contados a partir del día siguiente a aquel en que el acto haya sido dictado.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 97 inc. 2°.",
    "distractorRationale": {
      "A": "Correcto. El plazo legal perentorio para notificar es de 5 días hábiles.",
      "B": "60 días hábiles corresponde al plazo de interposición de la demanda contencioso administrativa (LJCA).",
      "C": "Un año es manifiestamente dilatorio y violaría el principio de celeridad (Art. 3 LPA).",
      "D": "La falta de plazo generaría arbitrariedad e incertidumbre jurídica al ciudadano."
    }
  },
  {
    "id": "lpa-27",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Notificación por Medio Técnico o Electrónico",
    "statement": "¿Qué requisito exige el Artículo 99 de la LPA para que la administración pública pueda válidamente practicar notificaciones mediante correo electrónico u otros medios telemáticos?",
    "options": {
      "A": "Que el administrado haya manifestado expresamente su consentimiento o señalado dicho medio técnico para recibir notificaciones en su solicitud.",
      "B": "Basta con que el funcionario instructor busque un correo aleatorio en internet o redes sociales.",
      "C": "Está prohibido en El Salvador notificar por vía electrónica bajo cualquier concepto.",
      "D": "Que el administrado publique su contraseña de correo en el Diario Oficial."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 99 de la LPA permite las notificaciones por medios electrónicos siempre que el interesado lo haya aceptado o solicitado expresamente como medio de comunicación preferente o que una ley formal especial establezca la obligatoriedad de comunicarse telemáticamente con la administración.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 99.",
    "distractorRationale": {
      "A": "Correcto. El señalamiento expreso del medio telemático es requisito de validez garantista.",
      "B": "Buscar direcciones electrónicas arbitrarias causa indefensión absoluta.",
      "C": "La LPA y la Ley de Firma Electrónica fomentan activamente la tramitación electrónica legítima.",
      "D": "La privacidad y seguridad impiden revelar contraseñas personales."
    }
  },
  {
    "id": "lpa-28",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Notificación por Tablero o Edicto",
    "statement": "El Artículo 102 de la LPA regula la notificación por edicto en el Diario Oficial y diarios de circulación. ¿En qué supuesto fáctico exclusivo autoriza la ley acudir a esta forma supletoria de notificación?",
    "options": {
      "A": "Cuando los interesados en el procedimiento sean personas inciertas o fuere ignorado el lugar de notificación tras agotar las diligencias razonables de localización.",
      "B": "Siempre que la administración desee ahorrar combustible en el envío de notificadores.",
      "C": "En todos los casos donde el administrado resida a más de tres kilómetros de la alcaldía.",
      "D": "Cuando el acto contenga multas menores a diez dólares."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 102 de la LPA restringe la notificación mediante publicación a los casos en que los interesados sean desconocidos, se ignore el lugar donde deben ser notificados o intentada la notificación personal esta no hubiera podido practicarse tras las indagaciones oportunas.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 102.",
    "distractorRationale": {
      "A": "Correcto. La publicación edictal es de última ratio ante personas inciertas o paradero inubicable.",
      "B": "La comodidad o ahorro logístico no justifica privar al administrado de la notificación personal.",
      "C": "La distancia territorial no autoriza omitir los medios directos de notificación postal o personal.",
      "D": "La cuantía de la sanción no exime del debido emplazamiento personal."
    }
  },
  {
    "id": "lpa-29",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Causales de Nulidad de Pleno Derecho",
    "statement": "De acuerdo con el Artículo 36 de la LPA, ¿cuál de los siguientes actos administrativos adolece de nulidad de pleno derecho o nulidad absoluta e insubsanable?",
    "options": {
      "A": "Los dictados por órgano manifiestamente incompetente por razón de la materia o del territorio, o los que lesionen derechos fundamentales reconocidos en la Constitución.",
      "B": "Aquel que contiene un simple error aritmético en el cálculo de centavos de una factura.",
      "C": "El redactado con tipografía de imprenta diferente a la acostumbrada en el despacho.",
      "D": "El dictado en día hábil por un funcionario con credencial vigente."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 36 de la LPA establece taxativamente las causales de nulidad de pleno derecho: los que lesionen derechos y libertades susceptibles de amparo constitucional; los dictados por órgano manifiestamente incompetente por razón de la materia o del territorio; y los que prescindan total y absolutamente del procedimiento legal establecido.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 36 lits. a) y b).",
    "distractorRationale": {
      "A": "Correcto. Incompetencia manifiesta y vulneración de derechos fundamentales son nulidades de pleno derecho.",
      "B": "Los errores materiales o aritméticos se rectifican en cualquier momento sin anular el acto (Art. 39 LPA).",
      "C": "La tipografía o formato es una formalidad inocua que no afecta la validez jurídica.",
      "D": "Cumple plenamente con los requisitos subjetivos y temporales de validez."
    }
  },
  {
    "id": "lpa-30",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Anulabilidad y Convalidación",
    "statement": "A diferencia de la nulidad de pleno derecho, ¿qué características jurídicas definen a los actos anulables según los Artículos 37 y 38 de la LPA?",
    "options": {
      "A": "Adolecen de cualquier infracción al ordenamiento jurídico que no constituya nulidad de pleno derecho; pueden ser convalidados subsanando los vicios de que adolezcan si la infracción no es de orden público.",
      "B": "Son imprescriptibles y ninguna autoridad puede salvar sus efectos bajo pena de cárcel.",
      "C": "No surten ningún efecto jurídico inicial y deben ser destruidos de inmediato.",
      "D": "Solo pueden ser declarados por el Presidente de la República en cadena nacional."
    },
    "correctAnswer": "A",
    "explanation": "El Art. 37 LPA fija la anulabilidad para cualquier infracción al ordenamiento jurídico distinta de las del Art. 36. El Art. 38 LPA permite la convalidación de los actos anulables por el órgano competente, subsanando el defecto (como la falta de autorización previa o incompetencia jerárquica corregida por el superior).",
    "legalBasis": "Ley de Procedimientos Administrativos, Arts. 37 y 38.",
    "distractorRationale": {
      "A": "Correcto. La anulabilidad admite convalidación formal si no vulnera el orden público esencial.",
      "B": "La imprescriptibilidad es propia de la nulidad de pleno derecho, no de la anulabilidad relativa.",
      "C": "Los actos anulables gozan de presunción de validez y eficacia mientras no sean anulados formalmente.",
      "D": "La anulación y convalidación corresponde a la autoridad administrativa o a los jueces contenciosos."
    }
  },
  {
    "id": "lpa-31",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Rectificación de Errores Materiales o Aritméticos",
    "statement": "Si en una resolución administrativa firme se advierte un error aritmético evidente en la sumatoria de cantidades pecuniarias (Art. 39 LPA), ¿qué potestad tiene la administración?",
    "options": {
      "A": "Rectificar en cualquier momento, de oficio o a instancia de los interesados, los errores materiales, de hecho o aritméticos existentes en sus actos.",
      "B": "Debe obligatoriamente iniciar un juicio de lesividad ante la Cámara de lo Contencioso Administrativo.",
      "C": "El error es inmodificable y el Estado debe pagar la suma errónea de por vida.",
      "D": "El acto queda automáticamente nulo y se debe reiniciar el trámite desde cero."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 39 de la LPA faculta a las administraciones públicas a rectificar en cualquier momento, de oficio o a instancia de parte interesada, los errores puramente materiales, fácticos o aritméticos, sin alterar la sustancia de la decisión jurídica de fondo.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 39.",
    "distractorRationale": {
      "A": "Correcto. La rectificación de errores materiales es expedita y puede hacerse en cualquier momento.",
      "B": "El juicio de lesividad se reserva para revocar actos declarativos de derechos que sean anulables (LJCA).",
      "C": "Los errores de cálculo no generan derechos adquiridos inalterables contra el erario público.",
      "D": "El error material no desvirtúa la validez del acto administrativo originario."
    }
  },
  {
    "id": "lpa-32",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Ejecutoriedad del Acto Administrativo",
    "statement": "El Artículo 104 de la LPA establece el principio de ejecutoriedad de los actos administrativos. ¿A partir de qué momento adquieren eficacia obligatoria y fuerza ejecutiva frente a los particulares?",
    "options": {
      "A": "Desde que son formalmente notificados a los interesados o desde la fecha que en ellos se indique, gozando de presunción de legalidad y exigibilidad inmediata salvo suspensión legal.",
      "B": "Únicamente después de haber sido ratificados por la Asamblea Legislativa.",
      "C": "Tres años después de haber sido archivados.",
      "D": "Solo si el administrado firma voluntariamente una carta de aceptación complacida."
    },
    "correctAnswer": "A",
    "explanation": "Conforme al Artículo 104 de la LPA, los actos administrativos serán inmediatamente ejecutivos una vez notificados conforme a la ley, presumiéndose válidos y dotados de la autotutela ejecutiva de la administración para compeler a su cumplimiento sin auxilio judicial previo.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 104.",
    "distractorRationale": {
      "A": "Correcto. La notificación formal activa la eficacia inmediata y la autotutela ejecutiva del acto.",
      "B": "Los actos administrativos no requieren convalidación legislativa salvo tratados o empréstitos.",
      "C": "El archivo es posterior a la ejecución, no condición previa suspensiva.",
      "D": "La eficacia del acto administrativo es unilateral e imperativa, independiente del beneplácito del administrado."
    }
  },
  {
    "id": "lpa-33",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Medios de Ejecución Forzosa",
    "statement": "Conforme al Artículo 106 de la LPA, ¿cuál de los siguientes NO es un medio legal de ejecución forzosa que la administración pública salvadoreña puede emplear directamente?",
    "options": {
      "A": "Pena privativa de libertad corporal dictada directamente por el director administrativo sin intervención de juez.",
      "B": "Apremio sobre el patrimonio.",
      "C": "Ejecución subsidiaria por cuenta del obligado.",
      "D": "Multa coercitiva reiterada en lapsos determinados."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 106 de la LPA establece taxativamente los medios de ejecución forzosa: apremio patrimonial, ejecución subsidiaria, multa coercitiva y compulsión sobre las personas en los límites autorizados. La privación de libertad punitiva es monopolio jurisdiccional exclusivo de los jueces penales (Arts. 11, 13 y 172 Cn.), jamás de la administración en ejecución forzosa.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 106 y Art. 11 Cn.",
    "distractorRationale": {
      "A": "Correcto. La administración jamás puede imponer penas de prisión o privación de libertad personal.",
      "B": "El apremio patrimonial es el medio típico para deudas líquidas en dinero.",
      "C": "La ejecución subsidiaria procede para actos no personalísimos que puede realizar un tercero a costa del obligado.",
      "D": "La multa coercitiva compele al cumplimiento paulatino de obligaciones de hacer o no hacer."
    }
  },
  {
    "id": "lpa-34",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Apremio sobre el Patrimonio",
    "statement": "Cuando un acto administrativo imponga el pago de una cantidad líquida de dinero y el deudor no pague en el plazo voluntario concedido (Art. 107 LPA), ¿cómo procede la administración para su cobro?",
    "options": {
      "A": "Seguirá el procedimiento de apremio sobre el patrimonio, sirviendo de título ejecutivo la certificación del acto administrativo firme que fije la deuda.",
      "B": "Se declara automáticamente en quiebra forzosa al deudor y se arresta a sus descendientes.",
      "C": "La deuda prescribe al tercer día de impago y no puede cobrarse jamás.",
      "D": "El funcionario debe pagar la deuda de su propio salario personal."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 107 de la LPA estipula que si el acto impone una obligación dineraria líquida, se procederá por la vía de apremio sobre el patrimonio; la certificación de la resolución firme emitida por la autoridad competente presta mérito ejecutivo suficiente para el embargo y cobro coactivo.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 107.",
    "distractorRationale": {
      "A": "Correcto. La certificación de adeudo firme tiene fuerza ejecutiva plena para el cobro coactivo patrimonial.",
      "B": "No hay prisión por deudas en El Salvador (Art. 27 Cn.) ni responsabilidad penal familiar heredable.",
      "C": "Las deudas tributarias y administrativas gozan de plazos legales de prescripción de varios años.",
      "D": "La obligación recae sobre el deudor administrado, no sobre el servidor público requirente."
    }
  },
  {
    "id": "lpa-35",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Ejecución Subsidiaria de Obligaciones no Personalísimas",
    "statement": "¿En qué consiste la ejecución subsidiaria regulada en el Artículo 108 de la LPA?",
    "options": {
      "A": "Cuando se trate de actos que por no ser personalísimos puedan ser realizados por sujeto distinto del obligado, la administración los ejecutará por sí o mediante un tercero, a costa del administrado requerido.",
      "B": "Consiste en demandar a los abuelos del infractor para que cumplan con la obligación.",
      "C": "Es la condonación total y automática de la infracción sin costo para nadie.",
      "D": "Es la venta forzosa de los bienes de la alcaldía para reparar casas privadas."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 108 de la LPA define la ejecución subsidiaria: ante obligaciones de hacer que no sean personalísimas (ejemplo: demoler un muro en peligro o limpiar un predio insalubre), la administración puede realizarlas directamente o por medio de terceros, liquidando los gastos y daños para exigir su reembolso al infractor moroso.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 108.",
    "distractorRationale": {
      "A": "Correcto. La administración sustituye la ejecución fáctica material y traslada los costos al obligado.",
      "B": "La responsabilidad administrativa no se extiende a parientes ajenos al hecho generador.",
      "C": "La ejecución subsidiaria cobra los costos; jamás condona de oficio.",
      "D": "El erario municipal se resarce mediante cobro coactivo contra el obligado causante."
    }
  },
  {
    "id": "lpa-36",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Multas Coercitivas Reiteradas",
    "statement": "De conformidad con el Artículo 109 de la LPA, ¿cuál es la finalidad jurídica de las multas coercitivas y cómo se diferencian de las sanciones administrativas pecuniarias?",
    "options": {
      "A": "Son medios de apremio para forzar el cumplimiento paulatino de una obligación impuesta, y son independientes y compatibles con las multas que puedan imponerse en concepto de sanción penal o administrativa.",
      "B": "Son sanciones disciplinarias que sustituyen de inmediato a la pena de cárcel.",
      "C": "Tienen por objeto confiscar los bienes de empresas privadas para traspasarlos al Estado.",
      "D": "Solo pueden aplicarse a menores de edad en centros educativos."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 109 de la LPA precisa que las multas coercitivas son reiteradas por lapsos determinados para doblegar la resistencia del administrado renuente a cumplir un mandato de hacer o deshacer. No tienen carácter punitivo retributivo, por lo que no violan el non bis in idem y son plenamente compatibles con las sanciones infractoras.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 109.",
    "distractorRationale": {
      "A": "Correcto. La multa coercitiva es medio de ejecución indirecta, no sanción retributiva punitiva.",
      "B": "No sustituyen penas carcelarias penales.",
      "C": "La confiscación está prohibida terminantemente por el Art. 106 de la Constitución salvadoreña.",
      "D": "Se aplican a cualquier administrado (personas naturales o jurídicas) obligado por un acto firme."
    }
  },
  {
    "id": "lpa-37",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Compulsión Directa sobre las Personas",
    "statement": "El Artículo 110 de la LPA admite excepcionalmente la compulsión sobre las personas como medio de ejecución. ¿Bajo qué condiciones taxativas puede ejercerse la fuerza física legítima del Estado?",
    "options": {
      "A": "Solo en los casos en que la ley formal lo autorice expresamente, dentro del respeto debido a la dignidad humana y a los derechos fundamentales consagrados en la Constitución.",
      "B": "Queda a discreción de cualquier policía utilizar la fuerza letal sin necesidad de ley previa.",
      "C": "Solo procede contra personas que adeuden tasas municipales de menos de cinco dólares.",
      "D": "En cualquier momento que un ciudadano critique una decisión municipal en redes sociales."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 110 de la LPA restringe la compulsión directa sobre las personas (ejemplo: desalojo forzoso de un inmueble en riesgo inminente de derrumbe o aislamiento sanitario por epidemia grave) a la estricta reserva de ley formal habilitante y con pleno respeto a la dignidad e integridad física de las personas.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 110.",
    "distractorRationale": {
      "A": "Correcto. Reserva de ley y respeto a la dignidad y derechos fundamentales.",
      "B": "La discrecionalidad policial desmedida viola el principio de legalidad y uso proporcional de la fuerza.",
      "C": "Las deudas tributarias menores se ejecutan por embargo patrimonial, jamás por compulsión física.",
      "D": "La libertad de expresión pacífica está amparada por el Art. 6 de la Constitución."
    }
  },
  {
    "id": "lpa-38",
    "category": "procedimiento-comun",
    "categoryLabel": "Procedimiento Común & Plazos LPA",
    "area": "Suspensión del Cómputo de Plazos del Procedimiento",
    "statement": "Según el Artículo 90 de la LPA, ¿en cuál de los siguientes supuestos se suspende formalmente el cómputo del plazo legal máximo para resolver y notificar un procedimiento administrativo?",
    "options": {
      "A": "Cuando deba requerirse a cualquier interesado para la subsanación de deficiencias o aportación de documentos necesarios, por el tiempo que medie entre la notificación y su efectivo cumplimiento.",
      "B": "Siempre que el personal de la institución celebre el convivio navideño de fin de año.",
      "C": "Cuando el titular del ministerio viaje al extranjero en visita de turismo personal.",
      "D": "Cada vez que llueva con intensidad moderada en la ciudad capital."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 90 literal a) de la LPA establece como causal objetiva de suspensión del plazo máximo para resolver el requerimiento al interesado para la subsanación de deficiencias o aportación de elementos probatorios preceptivos, por el tiempo que transcurra entre la notificación y su cumplimiento o el vencimiento del plazo concedido.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 90 lit. a).",
    "distractorRationale": {
      "A": "Correcto. La prevención de subsanación congela justificadamente el cómputo del plazo de resolución.",
      "B": "Actividades recreativas internas no constituyen causal legal de suspensión de plazos ciudadanos.",
      "C": "Los viajes de funcionarios no detienen los términos procedimentales de orden público.",
      "D": "El clima no suspende plazos salvo declaratoria formal de estado de emergencia o calamidad."
    }
  },
  {
    "id": "lpa-39",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Regla General del Silencio Administrativo en El Salvador",
    "statement": "Conforme al Artículo 114 de la LPA, ¿cuál es la regla general que opera ante la inactividad de la administración cuando transcurre el plazo legal máximo sin que se haya notificado una resolución expresa?",
    "options": {
      "A": "El expediente se extingue y el administrado pierde el derecho a demandar para siempre.",
      "B": "Opera el silencio administrativo positivo aprobando automáticamente cualquier pretensión.",
      "C": "Opera el silencio administrativo con efecto desestimatorio o negativo, habilitando al interesado para interponer recursos o acudir a la jurisdicción contencioso-administrativa.",
      "D": "El funcionario emisor queda automáticamente destituido de su cargo público."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 114 de la LPA consagra como regla general el Silencio Administrativo Negativo. Vencido el plazo legal sin resolución expresa, el administrado podrá considerar desestimada su solicitud por silencio administrativo a los solos efectos de interponer los recursos administrativos procedentes o la demanda contencioso-administrativa ante los tribunales correspondientes.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 114.",
    "distractorRationale": {
      "A": "El administrado no pierde su derecho; al contrario, se abre la vía judicial contenciosa.",
      "B": "El silencio positivo es estrictamente excepcional y requiere previsión de ley formal expresa.",
      "C": "Correcto. La regla general salvadoreña es el silencio negativo como ficción garantista de acceso a la justicia.",
      "D": "La responsabilidad administrativa disciplinaria del funcionario requiere procedimiento específico."
    }
  },
  {
    "id": "lpa-40",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Límites Infranqueables del Silencio Positivo",
    "statement": "El Artículo 113 de la LPA regula las excepciones donde opera el silencio administrativo positivo (estimatorio). ¿En cuál de las siguientes materias prohíbe terminantemente la ley que se produzca silencio positivo?",
    "options": {
      "A": "En peticiones de acceso a información oficiosa pública.",
      "B": "En solicitudes de permisos para eventos deportivos privados en estadios.",
      "C": "En trámites de solicitud de solvencia municipal comercial.",
      "D": "En asuntos relativos al dominio público, recursos naturales, medio ambiente, salud pública o seguridad ciudadana."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 113 inciso 3° de la LPA prohíbe categóricamente que opere el silencio positivo en materias que afecten el patrimonio o bienes del dominio público, el medio ambiente, la salud pública, la seguridad ciudadana o cuando la estimación de la solicitud implique la transferencia de facultades relativas al servicio público.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 113 inc. 3°.",
    "distractorRationale": {
      "A": "En acceso a información rige la Ley de Acceso a la Información Pública (LAIP).",
      "B": "Eventos privados pueden encajar en regímenes reglados de licencias si la ley especial lo faculta.",
      "C": "Solvencias y certificados formales son susceptibles de silencio positivo reglado.",
      "D": "Correcto. Son materias de orden público tuteladas donde jamás puede configurarse silencio estimatorio."
    }
  },
  {
    "id": "lpa-41",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Naturaleza Jurídica del Silencio Negativo",
    "statement": "¿Qué naturaleza jurídica atribuye la doctrina salvadoreña y la Sala de lo Contencioso Administrativo a la figura del silencio administrativo desestimatorio?",
    "options": {
      "A": "Es una resolución sancionatoria en firme contra la conducta del ciudadano.",
      "B": "Es una ficción procesal y garantía instrumental creada por la ley a favor del administrado para vencer el bloqueo institucional y permitir el acceso a la vía judicial o recursiva.",
      "C": "Es una confesión ficta donde la administración admite que vulneró los derechos del administrado.",
      "D": "Es una renuncia tácita del Estado a cobrar tributos en ese ejercicio fiscal."
    },
    "correctAnswer": "B",
    "explanation": "El silencio negativo no es un acto administrativo real ni una manifestación de voluntad administrativa, sino una mera ficción jurídica que la ley otorga al solicitante para habilitarlo procesalmente a deducir los recursos pertinentes o acudir a los tribunales contenciosos.",
    "legalBasis": "Ley de Procedimientos Administrativos Art. 114 y Jurisprudencia Sala de lo Contencioso Administrativo.",
    "distractorRationale": {
      "A": "No es una sanción contra el ciudadano; protege al ciudadano de la inactividad estatal.",
      "B": "Correcto. Es una ficción procesal que habilita el acceso a la tutela jurisdiccional efectiva.",
      "C": "No implica allanamiento ni confesión de la administración pública.",
      "D": "No tiene efectos de condonación tributaria ni liberatoria de deudas."
    }
  },
  {
    "id": "lpa-42",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Obligación Perpetua de Resolver Expresamente",
    "statement": "Una vez configurado el silencio administrativo desestimatorio por el vencimiento del plazo legal, ¿qué deber conserva la administración según el Artículo 114 inciso final de la LPA?",
    "options": {
      "A": "Debe archivar físicamente el expediente y destruir las pruebas recabadas.",
      "B": "Queda legalmente prohibida de emitir resolución posterior bajo apercibimiento de desacato.",
      "C": "Permanece obligada a dictar resolución expresa sobre la solicitud planteada, sin que esté vinculada en modo alguno por el sentido negativo del silencio previo.",
      "D": "Solo puede resolver si el administrado renuncia a su acción judicial."
    },
    "correctAnswer": "C",
    "explanation": "El Art. 114 inc. final LPA estipula que la producción del silencio negativo no exime a la administración de su deber insoslayable de dictar resolución expresa motivada. Además, al dictar dicha resolución tardía, la autoridad no está atada al silencio y puede resolver estimando total o parcialmente la petición si en derecho procede.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 114 inc. final.",
    "distractorRationale": {
      "A": "Destruir el expediente constituiría un delito de supresión de documento público.",
      "B": "La ley no prohíbe resolver; al contrario, impone el deber inexcusable de hacerlo.",
      "C": "Correcto. El deber de resolver persiste y la administración puede dictar acto favorable tardío.",
      "D": "El derecho a la tutela administrativa no puede condicionarse a la renuncia procesal."
    }
  },
  {
    "id": "lpa-43",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Efectos Preclusivos del Silencio Positivo",
    "statement": "En los casos excepcionales en que la ley especial autorice expresamente el silencio administrativo positivo, ¿qué límites tiene la administración pública si decide dictar una resolución expresa de forma posterior?",
    "options": {
      "A": "La resolución expresa posterior solo podrá dictarse en sentido confirmatorio de la estimación producida por el silencio.",
      "B": "Puede revocar libremente el silencio positivo y denegar la solicitud en cualquier momento.",
      "C": "Puede cobrar el doble de tasas administrativas por haber resuelto tarde.",
      "D": "Debe solicitar permiso a un juez de paz para pronunciarse."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 113 inc. 2° de la LPA consagra que el silencio positivo tiene la consideración de verdadero acto administrativo finalizador del procedimiento. Por ello, la resolución expresa posterior a la producción del acto presunto positivo solo podrá dictarse de ser confirmatoria del mismo.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 113 inc. 2°.",
    "distractorRationale": {
      "A": "Correcto. El silencio positivo crea derechos subjetivos y solo puede ser confirmado posteriormente.",
      "B": "Denegar con posterioridad violaría la cosa juzgada formal y la doctrina de los actos propios (Art. 3 LPA).",
      "C": "La morosidad de la institución jamás habilita a cobrar mayores tasas pecuniarias.",
      "D": "La sede administrativa no requiere autorización judicial para dictar actos confirmatorios."
    }
  },
  {
    "id": "lpa-44",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Requisitos para la Eficacia del Silencio Positivo",
    "statement": "De conformidad con el Artículo 113 de la LPA, ¿qué requisito formal sine qua non se requiere para que opere el silencio administrativo con carácter estimatorio?",
    "options": {
      "A": "Que hayan transcurrido 24 horas desde la entrega de la solicitud.",
      "B": "Que un reglamento ejecutivo interno del ministro así lo sugiera en un memorando.",
      "C": "Que el administrado haya contratado un notario para hacer una llamada telefónica.",
      "D": "Que una ley formal en sentido estricto así lo establezca expresamente para ese procedimiento específico."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 113 inciso 1° de la LPA instituye la estricta reserva de ley formal: el silencio administrativo tendrá carácter estimatorio o positivo únicamente cuando una ley en sentido formal y material así lo establezca de manera inequívoca.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 113 inc. 1°.",
    "distractorRationale": {
      "A": "24 horas es un término irrisorio que no concuerda con ningún procedimiento de la LPA.",
      "B": "Un reglamento o circular carece de rango normativo para alterar la regla general del silencio legal.",
      "C": "Las actuaciones notariales privadas no pueden crear efectos simulatorios no previstos en la ley.",
      "D": "Correcto. Se exige mandato expreso de ley formal aprobada por la Asamblea Legislativa."
    }
  },
  {
    "id": "lpa-45",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Certificación Acreditativa del Silencio Positivo",
    "statement": "Para hacer valer los efectos de un acto presunto derivado del silencio administrativo positivo ante terceros o registros públicos, ¿qué documento puede exigir el administrado según el Artículo 115 de la LPA?",
    "options": {
      "A": "Una constancia del Ministerio de la Defensa Nacional.",
      "B": "Una sentencia de la Corte Interamericana de Derechos Humanos.",
      "C": "Un certificado emitido por el órgano competente que acredite la producción del silencio administrativo, el cual debe expedirse en el plazo perentorio de cinco días hábiles.",
      "D": "Una publicación en tres redes sociales de amplia cobertura."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 115 de la LPA faculta al administrado a solicitar un certificado acreditativo del silencio producido, debiendo la autoridad expedirlo en el plazo de cinco días hábiles contados desde su petición formal. Dicho certificado sirve de título idóneo para hacer valer los derechos correspondientes.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 115.",
    "distractorRationale": {
      "A": "El ministerio militar no tiene competencia en procedimientos administrativos comunes civiles.",
      "B": "Los tribunales internacionales conocen de litigios interestatales o violaciones de derechos humanos, no de certificados ordinarios.",
      "C": "Correcto. El certificado de silencio debe ser emitido en 5 días hábiles para acreditar la estimación.",
      "D": "Las redes sociales no otorgan fe pública documental ni certeza registral legal."
    }
  },
  {
    "id": "lpa-46",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Nulidad de Concesiones por Silencio Positivo Ilícito",
    "statement": "Si por error se pretendiera alegar la adquisición de derechos de explotación minera o concesión de aguas públicas mediante silencio positivo (Art. 36 lit. f LPA), ¿cuál es la validez de dicho acto presunto?",
    "options": {
      "A": "Adolece de nulidad de pleno derecho, pues los actos expresos o presuntos contrarios al ordenamiento jurídico por los que se adquieren facultades o derechos careciendo de los requisitos esenciales son nulos de pleno derecho.",
      "B": "Es plenamente válido e irrevocable por haber operado el silencio.",
      "C": "Se convierte en propiedad privada absoluta del administrado sin pagar regalías.",
      "D": "Es convalidable si el administrado dona un vehículo al ministerio correspondiente."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 36 literal f) de la LPA sanciona con nulidad de pleno derecho los actos presuntos por los que se adquieran facultades o derechos cuando se carezca de los requisitos esenciales para su adquisición, o cuando recaigan sobre bienes de dominio público protegidos por el Art. 113 inc. 3° LPA.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 36 lit. f) y Art. 113 inc. 3°.",
    "distractorRationale": {
      "A": "Correcto. Los actos presuntos que violan prohibiciones esenciales son nulos de pleno derecho.",
      "B": "El orden público ambiental y de bienes comunes no puede vulnerarse mediante ficciones presuntas.",
      "C": "El agua y los minerales son bienes nacionales de uso público o del Estado (Art. 103 Cn.).",
      "D": "La donación de dádivas no sanea actos nulos y podría tipificar el delito de cohecho."
    }
  },
  {
    "id": "lpa-47",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo en Procedimientos Iniciados de Oficio",
    "statement": "En los procedimientos iniciados de oficio por la administración que puedan producir efectos desfavorables o sancionadores (Art. 94 LPA), ¿qué efecto produce el vencimiento del plazo máximo legal sin que se dicte resolución?",
    "options": {
      "A": "El procedimiento continúa abierto indefinidamente hasta que el infractor cumpla cien años.",
      "B": "Opera el silencio positivo y se condona toda deuda existente.",
      "C": "Se presume culpable al investigado y se remite el caso al juzgado militar.",
      "D": "Se produce la caducidad y perención del procedimiento, debiendo acordarse el archivo inmediato de las actuaciones."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 94 de la LPA dispone que en los procedimientos iniciados de oficio que puedan derivar en el reconocimiento de infracciones o imposición de sanciones, o en general actos de gravamen, el vencimiento del plazo máximo legal sin que se haya dictado y notificado resolución expresa producirá la caducidad del procedimiento, ordenándose su archivo.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 94.",
    "distractorRationale": {
      "A": "La falta de límite temporal infringiría flagrantemente el principio de seguridad jurídica.",
      "B": "No hay silencio positivo en facultades sancionadoras de oficio.",
      "C": "La presunción de culpabilidad y tribunales militares para civiles están prohibidos (Art. 172 Cn.).",
      "D": "Correcto. En procedimientos de gravamen iniciados de oficio opera la caducidad o perención extintiva."
    }
  },
  {
    "id": "lpa-48",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo en Procedimientos Oficiosos Favorables",
    "statement": "Cuando un procedimiento es iniciado de oficio por la administración para el eventual otorgamiento de un beneficio o derecho al administrado (Art. 114 inc. 3° LPA) y vence el plazo sin resolver, ¿cuál es el sentido del silencio?",
    "options": {
      "A": "Se les otorga automáticamente un millón de dólares de indemnización.",
      "B": "Los interesados que hubieren comparecido podrán entender desestimadas sus pretensiones por silencio administrativo negativo.",
      "C": "El funcionario es arrestado por tres días en las bartolinas policiales.",
      "D": "Se subroga de oficio el Defensor del Consumidor en lugar de los interesados."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 114 inciso 3° de la LPA aclara que en los procedimientos iniciados de oficio de los que pudiera derivarse el reconocimiento o constitución de derechos u otras situaciones jurídicas individualizadas favorables, el transcurso del plazo habilitará a los interesados a considerarlos desestimados por silencio negativo.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 114 inc. 3°.",
    "distractorRationale": {
      "A": "Las indemnizaciones requieren acreditación de daño real y procedimiento de responsabilidad patrimonial.",
      "B": "Correcto. El silencio negativo opera también en oficiosos potencialmente favorables no resueltos.",
      "C": "La privación de libertad de funcionarios requiere falta disciplinaria o delito tipificado.",
      "D": "La Defensoría del Consumidor solo interviene en materias de su ley especial de protección al consumidor."
    }
  },
  {
    "id": "lpa-49",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo en Recurso de Reconsideración",
    "statement": "Conforme al Artículo 132 de la LPA, ¿en qué plazo debe resolverse el recurso de reconsideración y qué consecuencia legal se genera si la autoridad no notifica la decisión dentro de dicho plazo?",
    "options": {
      "A": "Debe resolverse en el plazo de un mes; transcurrido dicho término sin resolución expresa, se entenderá desestimado por silencio administrativo negativo.",
      "B": "Debe resolverse en tres años; al vencer se entiende estimado en todo lo pedido.",
      "C": "El plazo es de veinticuatro horas bajo pena de cese del ministro.",
      "D": "No existe plazo para resolver recursos en la administración salvadoreña."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 132 inciso final de la LPA fija en un mes el plazo máximo para resolver y notificar el recurso de reconsideración. Transcurrido dicho plazo sin que se hubiere notificado resolución expresa, el recurso se entenderá desestimado por silencio administrativo, quedando habilitada la apelación o la vía judicial.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 132 inc. final.",
    "distractorRationale": {
      "A": "Correcto. Plazo de 1 mes y silencio administrativo desestimatorio.",
      "B": "Tres años desnaturalizaría la celeridad procesal y el silencio positivo en recursos es excepcionalísimo.",
      "C": "Veinticuatro horas no permite la adecuada valoración técnica y jurídica del recurso.",
      "D": "La LPA impone plazos estrictos y perentorios para la resolución de todos los recursos."
    }
  },
  {
    "id": "lpa-50",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo en Recurso de Apelación",
    "statement": "De acuerdo con el Artículo 134 de la LPA, ¿cuál es el plazo que tiene el superior jerárquico para resolver la apelación y qué efecto produce su falta de pronunciamiento?",
    "options": {
      "A": "El plazo es de quince días y produce la nulidad absoluta de todo el ministerio.",
      "B": "El plazo máximo para resolver y notificar la apelación es de un mes; su vencimiento sin resolución expresa desestima el recurso por silencio negativo y agota la vía administrativa.",
      "C": "El plazo es de cinco años y transfiere la causa al Consejo de Ministros.",
      "D": "No produce ningún efecto y el ciudadano no puede acudir a demandar a los tribunales."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 134 inciso final de la LPA determina que el plazo máximo para resolver la apelación será de un mes. Transcurrido dicho plazo sin resolución expresa, se entenderá desestimada la apelación por silencio administrativo negativo, considerándose agotada la vía administrativa a tenor del Art. 131 lit. c) LPA.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 134 inc. final y Art. 131 lit. c).",
    "distractorRationale": {
      "A": "Quince días es el plazo para interponer la apelación, no para resolverla por el superior.",
      "B": "Correcto. El plazo es de 1 mes, se produce silencio negativo y se agota la vía para ir a la LJCA.",
      "C": "Cinco años es desproporcionado e irrazonable.",
      "D": "El agotamiento por silencio es precisamente la llave para interponer la demanda contenciosa."
    }
  },
  {
    "id": "lpa-51",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Cómputo de Plazo para Demanda Contenciosa tras Silencio",
    "statement": "Según la jurisprudencia consolidada de la Sala de lo Contencioso Administrativo de la CSJ y el Artículo 25 de la LJCA, ¿cómo se computa el plazo de 60 días hábiles para demandar cuando se ha configurado silencio administrativo negativo?",
    "options": {
      "A": "El administrado solo tiene tres horas para presentar la demanda en el tribunal.",
      "B": "El plazo de caducidad de 60 días precluye inexorablemente y el administrado pierde el derecho a demandar si no acudió el día exacto de vencimiento del silencio.",
      "C": "Al ser una ficción protectora, no corre plazo de caducidad en contra del administrado mientras la administración mantenga su inactividad e incumplimiento del deber de resolver expresamente.",
      "D": "No se puede demandar jamás judicialmente frente a un silencio administrativo."
    },
    "correctAnswer": "C",
    "explanation": "La jurisprudencia de la Sala de lo Contencioso Administrativo de la CSJ ha interpretado pro actione que frente al silencio administrativo negativo, mientras la administración no cumpla con su deber constitucional de dictar resolución expresa motivada, el plazo de caducidad para acudir al tribunal contencioso no precluye en perjuicio del administrado.",
    "legalBasis": "LJCA Art. 25 y Jurisprudencia Sala de lo Contencioso Administrativo CSJ.",
    "distractorRationale": {
      "A": "Tres horas es procesalmente inviable e irreal.",
      "B": "Hacer caducar el plazo premiaría la desidia administrativa y castigaría injustamente al ciudadano.",
      "C": "Correcto. El silencio negativo no computa caducidad preclusiva contra el administrado por inactividad estatal.",
      "D": "La LJCA autoriza expresamente la impugnación de actos presuntos por silencio (Art. 3 lit. c LJCA)."
    }
  },
  {
    "id": "lpa-52",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Responsabilidad Patrimonial por Omisión de Resolver",
    "statement": "Si la inactividad culpable de la administración al no resolver en tiempo causa daños patrimoniales directos, ciertos y evaluables económicamente al solicitante (Art. 116 LPA), ¿qué derecho asiste al administrado?",
    "options": {
      "A": "Destituir unilateralmente al ministro mediante acta notarial privada.",
      "B": "Tomar posesión física por la fuerza de las oficinas de la institución.",
      "C": "Dejar de pagar impuestos generales por el resto de su vida sin necesidad de resolución.",
      "D": "Exigir la indemnización por responsabilidad patrimonial directa de la administración pública conforme a los Artículos 55 y siguientes de la LPA."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 116 de la LPA reconoce expresamente que la falta de resolución en plazo podrá dar lugar a la exigencia de responsabilidad patrimonial de la administración pública por los daños y perjuicios que de la inactividad o dilación indebida se deriven, conforme al régimen general de responsabilidad del Estado.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 116 y Arts. 55-63.",
    "distractorRationale": {
      "A": "Los particulares no tienen potestad para cesar funcionarios públicos.",
      "B": "Las vías de hecho o toma de instalaciones constituyen ilícitos sancionados penalmente.",
      "C": "No existe compensación tributaria unilateral sin procedimiento formal reglado.",
      "D": "Correcto. La dilación lesiva imputable habilita la acción indemnizatoria por responsabilidad patrimonial."
    }
  },
  {
    "id": "lpa-53",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo y Servicios Públicos Esenciales",
    "statement": "¿Por qué el Artículo 113 inciso 3° de la LPA veda tajantemente el silencio positivo en peticiones que impliquen la prestación de servicios públicos o el ejercicio de potestades de policía administrativa?",
    "options": {
      "A": "Porque los servicios públicos solo pueden ser prestados por organizaciones religiosas sin fines de lucro.",
      "B": "Porque son funciones esenciales inherentes a la soberanía del Estado que tutelan el interés general y no pueden transferirse o licenciarse por omisión burocrática.",
      "C": "Para obligar a que todos los servicios públicos sean concesionados a corporaciones extranjeras.",
      "D": "Porque el Código Civil salvadoreño prohíbe que el Estado tenga empleados públicos."
    },
    "correctAnswer": "B",
    "explanation": "El legislador blindó los servicios públicos y facultades de orden público frente al silencio positivo porque una aprobación presunta descontrolada podría generar caos sanitario, desabastecimiento o riesgos graves para la colectividad, vulnerando los fines del Estado (Art. 1 Cn.).",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 113 inc. 3° y Art. 1 Cn.",
    "distractorRationale": {
      "A": "La laicidad estatal y la prestación pública de servicios no dependen de credos confesionales.",
      "B": "Correcto. La tutela del interés general y la soberanía estatal impiden transferir potestades por inacción.",
      "C": "No existe mandato legal de privatización forzosa en la LPA.",
      "D": "El Código Civil y la Constitución regulan ampliamente la función pública y sus servidores."
    }
  },
  {
    "id": "lpa-54",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Valor del Certificado de Silencio frente al Registro de la Propiedad",
    "statement": "Cuando un ciudadano obtiene válidamente una autorización por silencio administrativo positivo de acuerdo a una ley formal y solicita su inscripción en el Registro de la Propiedad Raíz e Hipotecas del CNR:",
    "options": {
      "A": "El CNR está obligado a transferir la titularidad del inmueble al director del registro.",
      "B": "El registrador debe rechazar automáticamente todo documento que provenga de silencio administrativo.",
      "C": "El registrador debe calificar la legalidad del certificado de silencio emitido por la autoridad o constatar el transcurso del plazo legal, procediendo a su inscripción si reúne los requisitos de fondo.",
      "D": "Solo puede inscribirse si se acompaña de una sentencia de la Sala de lo Civil."
    },
    "correctAnswer": "C",
    "explanation": "El acto presunto positivo produce efectos frente a todas las personas y autoridades. El CNR, dentro del principio registral de legalidad, califica la concurrencia de los presupuestos del silencio positivo y el certificado acreditativo oficial para inscribir el derecho derivado del acto presunto estimatorio.",
    "legalBasis": "Ley de Procedimientos Administrativos Art. 113 y Reglamento del Registro de la Propiedad Raíz.",
    "distractorRationale": {
      "A": "El registrador no puede adjudicarse bienes privados calificados.",
      "B": "El registrador no puede denegar a priori un título que la ley dota de eficacia plena.",
      "C": "Correcto. El certificado de silencio legítimo es título inscribible sujeto a calificación registral.",
      "D": "No requiere juicio civil declarativo previo cuando la ley administrativa formal ampara el acto."
    }
  },
  {
    "id": "lpa-55",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo y Acceso a la Información (LAIP)",
    "statement": "En el marco de la Ley de Acceso a la Información Pública (LAIP), ¿cuál es el régimen de silencio administrativo ante la falta de respuesta de un Oficial de Información en el plazo legal de 10 días hábiles?",
    "options": {
      "A": "Se entiende denegada la solicitud por silencio administrativo negativo, quedando expedito el recurso de apelación ante el Instituto de Acceso a la Información Pública (IAIP).",
      "B": "Se presume entregada la información y el solicitante puede entrar a la fuerza a sustraer los documentos.",
      "C": "El funcionario es enviado inmediatamente a detención provisional sin juicio.",
      "D": "El caso concluye y el ciudadano debe esperar cinco años para volver a pedir información."
    },
    "correctAnswer": "A",
    "explanation": "La Ley de Acceso a la Información Pública (LAIP) establece que la falta de respuesta del Oficial de Información dentro del plazo legal habilita al solicitante a considerar denegada la información por silencio negativo, facultándolo para interponer el recurso de apelación ante el IAIP dentro de los cinco días hábiles siguientes.",
    "legalBasis": "Ley de Acceso a la Información Pública, Arts. 71 y 82.",
    "distractorRationale": {
      "A": "Correcto. Silencio negativo que habilita el recurso de alzada ante el IAIP.",
      "B": "Las vías de hecho y sustracción violenta de archivos oficiales son constitutivas de delito.",
      "C": "La sanción penal o administrativa a funcionarios exige debido proceso sancionador.",
      "D": "La tutela de la transparencia permite impugnar de inmediato sin esperas dilatorias."
    }
  },
  {
    "id": "lpa-56",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Suspensión del Plazo de Silencio por Informes Preceptivos",
    "statement": "De acuerdo con el Artículo 90 literal b) de la LPA, si para resolver es indispensable solicitar un informe técnico preceptivo a otra institución, ¿cuál es el plazo máximo de suspensión del cómputo para resolver?",
    "options": {
      "A": "No se suspende nunca y la administración debe adivinar los datos técnicos.",
      "B": "La suspensión puede durar hasta diez años continuos.",
      "C": "Solo se suspende por veinticuatro horas exactas.",
      "D": "El plazo de suspensión no podrá exceder en ningún caso de tres meses."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 90 literal b) de la LPA estipula que cuando deba obtenerse un informe preceptivo de un órgano o entidad distinta, el plazo se suspenderá por el tiempo que medie entre la petición y su recepción, el cual no podrá exceder en ningún caso de tres meses, garantizando que el expediente no quede congelado indefinidamente.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 90 lit. b).",
    "distractorRationale": {
      "A": "La ley prevé la suspensión precisamente para evitar resoluciones infundadas o adivinaciones.",
      "B": "Diez años vulneraría de raíz el principio de celeridad procedimental y seguridad jurídica.",
      "C": "24 horas es insuficiente para la evacuación técnica de informes complejos.",
      "D": "Correcto. El tope legal infranqueable para la suspensión por informes técnicos es de 3 meses."
    }
  },
  {
    "id": "lpa-57",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo en Procedimientos Tributarios Municipales",
    "statement": "En materia tributaria municipal, si un contribuyente presenta una petición o reclamo de exención o cobro indebido y la alcaldía no resuelve en el plazo legal (Art. 123 Ley General Tributaria Municipal):",
    "options": {
      "A": "El contribuyente pasa a ser dueño del palacio municipal de la localidad.",
      "B": "Se le condonan todas las deudas tributarias pasadas, presentes y futuras.",
      "C": "Opera la denegación tácita o silencio negativo, habilitando al contribuyente a interponer el recurso de apelación ante el Concejo Municipal respectivo.",
      "D": "El alcalde queda inhabilitado automáticamente para ejercer cargos públicos."
    },
    "correctAnswer": "C",
    "explanation": "La Ley General Tributaria Municipal (LGTM) consagra la regla del silencio negativo: la falta de resolución expresa de las peticiones o reclamos tributarios habilita al interesado a tener por desestimada la pretensión e interponer la apelación ante el Concejo Municipal dentro del término de ley.",
    "legalBasis": "Ley General Tributaria Municipal, Art. 123.",
    "distractorRationale": {
      "A": "Los bienes municipales son de uso público o ejidales inalienables por esta vía.",
      "B": "La condonación de tributos exige decreto legislativo o acuerdo expreso conforme a ley.",
      "C": "Correcto. Silencio negativo en tributos locales habilitante del recurso ante el Concejo.",
      "D": "La inhabilitación de funcionarios electos requiere sentencia judicial previa."
    }
  },
  {
    "id": "lpa-58",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Efectos del Silencio Administrativo frente al Amparo Constitucional",
    "statement": "Según la jurisprudencia de la Sala de lo Constitucional de la CSJ, si una autoridad no responde una petición ciudadana oportuna, ¿cuándo se configura la violación al derecho de petición y respuesta (Art. 18 Cn.)?",
    "options": {
      "A": "Cuando la administración no emite una resolución motivada congruente en un plazo razonable legal, sin que la simple existencia del silencio administrativo descarte la vulneración al derecho fundamental a una respuesta pronta.",
      "B": "Únicamente si el administrado fue amenazado de muerte físicamente en la ventanilla.",
      "C": "Nunca, porque el silencio administrativo negativo suple plenamente cualquier necesidad de respuesta constitucional.",
      "D": "Solo si la solicitud fue redactada en verso y con sello dorado."
    },
    "correctAnswer": "A",
    "explanation": "La Sala de lo Constitucional ha reiterado que el derecho de petición (Art. 18 Cn.) exige una respuesta material y motivada por escrito. La figura del silencio administrativo es un remedio procesal infraconstitucional que no subsana la vulneración al derecho fundamental de obtener una respuesta expresa dentro de un plazo razonable.",
    "legalBasis": "Constitución de la República Art. 18 y Jurisprudencia Sala de lo Constitucional CSJ.",
    "distractorRationale": {
      "A": "Correcto. El silencio negativo procesal no exime a la administración de su deber constitucional de responder oportunamente.",
      "B": "Las amenazas configuran delitos penales, pero la inactividad omisiva basta para violar el Art. 18 Cn.",
      "C": "La ficción del silencio no colma el contenido sustantivo del derecho a obtener respuesta razonada.",
      "D": "Los formalismos extravagantes no son condición de ejercicio de los derechos fundamentales."
    }
  },
  {
    "id": "lpa-59",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo en Contratación Pública",
    "statement": "En el marco de la Ley de Compras Públicas de El Salvador, ¿qué ocurre si la autoridad contratante no se pronuncia dentro del plazo legal sobre una solicitud de prórroga contractual motivada en caso fortuito o fuerza mayor?",
    "options": {
      "A": "Se revoca de pleno derecho la personería jurídica de la empresa constructora.",
      "B": "Se considera otorgada por tiempo indefinido de cien años sin supervisión.",
      "C": "El contratista queda exonerado de entregar la obra y se le paga el 100% del valor total.",
      "D": "Se considera denegada por silencio negativo, debiendo el contratista continuar la ejecución o interponer los recursos de impugnación pertinentes para evitar sanciones por mora."
    },
    "correctAnswer": "D",
    "explanation": "En las contrataciones públicas rige el principio de estricto apego a las bases y salvaguarda de los fondos del Estado. Ante la falta de respuesta oportuna opera el silencio negativo, lo cual compele al contratista a tomar las providencias legales o recurrir, pues la inactividad no genera prórroga tácita automática.",
    "legalBasis": "Ley de Compras Públicas de El Salvador y Ley de Procedimientos Administrativos Art. 114.",
    "distractorRationale": {
      "A": "La personería jurídica de la contratista no se extingue por denegación de una prórroga.",
      "B": "Las prórrogas tácitas infinitas lesionarían gravemente el interés público y el erario fiscal.",
      "C": "El pago sin contraprestación de obra entregada configuraría peculado o malversación.",
      "D": "Correcto. El silencio negativo opera en compras públicas protegiendo el interés patrimonial del Estado."
    }
  },
  {
    "id": "lpa-60",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo y Desistimiento Tácito",
    "statement": "Si la administración formula una prevención al solicitante conforme al Art. 72 LPA para que subsane deficiencias en 10 días y el interesado guarda absoluto silencio sin presentar nada:",
    "options": {
      "A": "Opera el silencio positivo a favor del solicitante como premio a su silencio.",
      "B": "Se declarará el desistimiento de la solicitud mediante resolución expresa y se ordenará el archivo del expediente.",
      "C": "Se condena al interesado a realizar trabajos forzados en obras viales.",
      "D": "La administración debe contratar peritos privados para hacerle el trámite al ciudadano."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 72 de la LPA establece con meridiana claridad que si el solicitante prevenido no subsana la deficiencia o no presenta los documentos preceptivos en el plazo perentorio de 10 días hábiles, la administración declarará formalmente el desistimiento de su solicitud y archivará el expediente.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 72.",
    "distractorRationale": {
      "A": "La inactividad omisiva del solicitante no genera silencio positivo bajo ninguna circunstancia.",
      "B": "Correcto. El silencio del administrado ante la prevención legal acarrea la declaratoria de desistimiento.",
      "C": "Los trabajos forzados están prohibidos por el Art. 5 de la Constitución salvadoreña.",
      "D": "La administración no sustituye la carga procesal de parte ni gasta fondos en subsanar omisiones del interesado."
    }
  },
  {
    "id": "lpa-61",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo y Pruebas no Practicadas por Culpa de la Administración",
    "statement": "¿Qué sucede si el plazo de 9 meses del procedimiento administrativo común vence sin dictarse resolución debido a que la propia institución descuidó evacuar las pruebas que había admitido formalmente?",
    "options": {
      "A": "Opera igualmente el silencio administrativo negativo habilitando la vía recursiva o judicial, sin perjuicio de la responsabilidad del funcionario instructor por dilación indebida.",
      "B": "El administrado es sancionado por la lentitud de los empleados públicos.",
      "C": "Se borran automáticamente todos los registros del expediente electrónico.",
      "D": "El proceso se traslada de oficio a la jurisdicción de la policía de tránsito."
    },
    "correctAnswer": "A",
    "explanation": "El transcurso objetivo del plazo máximo de tramitación sin notificación de resolución expresa activa la figura del silencio administrativo negativo para desbloquear al ciudadano, naciendo además la responsabilidad disciplinaria y patrimonial del servidor público por negligencia en la sustanciación probatoria.",
    "legalBasis": "Ley de Procedimientos Administrativos, Arts. 89, 114 y 116.",
    "distractorRationale": {
      "A": "Correcto. El silencio negativo opera objetivamente y se deduce responsabilidad del instructor negligente.",
      "B": "El administrado no puede ser penalizado por deficiencias imputables al aparato institucional.",
      "C": "Los expedientes conservan plena validez probatoria histórica y judicial.",
      "D": "La policía de tránsito carece de jurisdicción para tramitar procedimientos administrativos generales."
    }
  },
  {
    "id": "lpa-62",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo y Modificación de Actos Previos",
    "statement": "¿Puede un acto administrativo firme que negó una autorización ser revocado o modificado mediante la interposición extemporánea de un escrito sobre el cual la administración guarde silencio?",
    "options": {
      "A": "Sí, el silencio administrativo borra toda la cosa juzgada anterior y reactiva el debate.",
      "B": "No, porque el silencio negativo frente a un escrito extemporáneo no reabre plazos ya caducados ni altera la firmeza del acto administrativo previo.",
      "C": "Sí, siempre que el interesado pague una fianza bancaria.",
      "D": "Depende del humor del ministro al revisar la bandeja de entrada."
    },
    "correctAnswer": "B",
    "explanation": "La jurisprudencia contenciosa y constitucional es tajante: la formulación de peticiones reiterativas o recursos fuera de plazo legal sobre materias ya resueltas con firmeza no reabre la vía administrativa; el silencio administrativo que recaiga sobre tales solicitudes no hace renacer plazos de impugnación fenecidos.",
    "legalBasis": "Jurisprudencia reiterada de la Sala de lo Contencioso Administrativo CSJ.",
    "distractorRationale": {
      "A": "La seguridad jurídica y la cosa juzgada formal impiden la reapertura indefinida de controversias.",
      "B": "Correcto. El silencio no puede vulnerar la firmeza ni revivir plazos procesales fenecidos.",
      "C": "Las fianzas no tienen virtud procesal para convalidar la extemporaneidad de recursos.",
      "D": "La función pública se rige por el principio de legalidad objetiva, no por estados de ánimo."
    }
  },
  {
    "id": "lpa-63",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Plazo para Solicitar el Certificado de Silencio",
    "statement": "Conforme al Artículo 115 de la LPA, ¿en qué momento procesal puede el interesado solicitar la expedición del certificado acreditativo del silencio administrativo?",
    "options": {
      "A": "Solamente si han transcurrido más de veinticinco años calendario.",
      "B": "Únicamente en los primeros diez minutos siguientes a la presentación de la solicitud inicial.",
      "C": "En cualquier momento a partir del día siguiente a aquel en que hubiere expirado el plazo máximo legal para dictar y notificar la resolución expresa.",
      "D": "Exclusivamente antes de que venza el plazo para resolver."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 115 inciso 1° de la LPA dispone que el certificado de silencio podrá solicitarse por el interesado una vez transcurrido el plazo máximo para resolver sin que se hubiese dictado resolución, momento en el cual ya se ha configurado legalmente la ficción del silencio administrativo.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 115 inc. 1°.",
    "distractorRationale": {
      "A": "25 años es un plazo arbitrario ajeno a cualquier término del derecho administrativo salvadoreño.",
      "B": "Al inicio del trámite no existe silencio ni vencimiento de plazo alguno.",
      "C": "Correcto. El certificado procede a partir del día inmediato siguiente al vencimiento del plazo resolutorio.",
      "D": "Antes de que venza el plazo la administración se encuentra dentro del término legal ordinario de tramitación."
    }
  },
  {
    "id": "lpa-64",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo y Consulta Previa no Vinculante",
    "statement": "Si un particular plantea una simple consulta genérica no vinculante a un ministerio sobre la interpretación abstracta de una ley y la autoridad no contesta:",
    "options": {
      "A": "Se declara nula la Constitución de la República.",
      "B": "Se presume que la ley queda automáticamente derogada en favor del particular.",
      "C": "El particular adquiere la titularidad del ministerio correspondiente.",
      "D": "No se produce un acto administrativo presunto impugnable en la jurisdicción contenciosa, ya que las consultas no constituyen procedimientos con pretensión de acto definitivo de gravamen o reconocimiento."
    },
    "correctAnswer": "D",
    "explanation": "Las consultas meramente informativas o interpretaciones abstractas no crean, modifican ni extinguen situaciones jurídicas subjetivas. Su falta de contestación no configura un acto administrativo presunto recurrible ante los tribunales de la LJCA, sin perjuicio de la queja disciplinaria por infracción a la LAIP o Art. 18 Cn.",
    "legalBasis": "Ley de Procedimientos Administrativos Art. 114 y LJCA Art. 3.",
    "distractorRationale": {
      "A": "La supremacía constitucional permanece inalterable frente a la omisión de evacuar consultas.",
      "B": "La derogación de leyes es atribución constitucional indelegable de la Asamblea Legislativa (Art. 131 Cn.).",
      "C": "Los despachos ministeriales son cargos de designación presidencial exclusiva.",
      "D": "Correcto. Las consultas abstractas no generan actos presuntos susceptibles de impugnación contenciosa ordinaria."
    }
  },
  {
    "id": "lpa-65",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo en Procedimientos Colectivos",
    "statement": "En un procedimiento administrativo iniciado conjuntamente por una comunidad de vecinos para la reparación de un camino comunal, si transcurren los 9 meses sin resolución:",
    "options": {
      "A": "Se produce silencio positivo solo para el primer vecino de la lista y negativo para los demás.",
      "B": "El silencio negativo se produce unitariamente para todos los peticionarios, habilitando al representante común o a cualquiera de ellos a interponer el recurso procedente.",
      "C": "El camino pasa a ser propiedad privada del alcalde municipal.",
      "D": "Se declara extinguida la personería de la asociación comunal."
    },
    "correctAnswer": "B",
    "explanation": "De conformidad con los Artículos 48 y 114 de la LPA, en los procedimientos con pluralidad de interesados con pretensión colectiva o conexa, el transcurso del plazo opera de forma homogénea, pudiendo el representante común o cualquier interesado legitimado deducir los recursos ordinarios de ley.",
    "legalBasis": "Ley de Procedimientos Administrativos, Arts. 48 y 114.",
    "distractorRationale": {
      "A": "La decisión presunta no puede discriminar arbitrariamente entre cointeresados con la misma pretensión.",
      "B": "Correcto. El silencio opera de manera unitaria permitiendo la impugnación por el representante o interesados.",
      "C": "Las vías de uso público comunal mantienen su afectación de dominio público inalterable.",
      "D": "La personalidad de las asociaciones comunales se rige por su ley de constitución y registro."
    }
  },
  {
    "id": "lpa-66",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Contenido del Certificado de Silencio Emitido por la Autoridad",
    "statement": "Conforme al Artículo 115 de la LPA, ¿qué datos esenciales debe hacer constar el funcionario al expedir el certificado de silencio administrativo?",
    "options": {
      "A": "Una disculpa formal prometiendo un premio en efectivo al ciudadano.",
      "B": "Únicamente la huella digital del funcionario y su fotografía personal en color.",
      "C": "La fecha de presentación de la solicitud, el objeto de la misma, el plazo legal aplicable para resolver, la falta de notificación en dicho plazo y el sentido legal del silencio producido.",
      "D": "El valor del Producto Interno Bruto del país en el último trimestre."
    },
    "correctAnswer": "C",
    "explanation": "El certificado acreditativo regulado en el Art. 115 LPA debe contener los elementos de comprobación fáctica del trámite: fecha de ingreso, pretensión deducida, plazo aplicable, verificación de la omisión de notificación y el sentido desestimatorio o estimatorio que legalmente corresponda.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 115.",
    "distractorRationale": {
      "A": "La disculpa no es un requisito formal de acreditación jurídica.",
      "B": "Los datos biográficos del funcionario no constituyen el núcleo probatorio del certificado.",
      "C": "Correcto. Individualiza con exactitud la solicitud, los plazos y el sentido legal del silencio producido.",
      "D": "El PIB es un indicador macroeconómico completamente impertinente."
    }
  },
  {
    "id": "lpa-67",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Negativo y Agotamiento de la Vía en Órganos sin Superior",
    "statement": "Si un administrado presenta una solicitud ante un Ministro de Estado (quien no tiene superior jerárquico administrativo) y transcurren los nueve meses sin notificación de resolución expresa (Art. 131 LPA):",
    "options": {
      "A": "Opera el silencio administrativo negativo, considerándose agotada la vía administrativa y quedando habilitado para demandar de inmediato ante los tribunales de la LJCA.",
      "B": "Debe interponer obligatoriamente recurso de apelación ante el Presidente de la República.",
      "C": "Pierde todo derecho de acudir a la vía judicial por no existir superior jerárquico.",
      "D": "Debe reiniciar el procedimiento presentando la misma solicitud ante un Juzgado de Paz."
    },
    "correctAnswer": "A",
    "explanation": "Al no existir superior jerárquico sobre el Ministro (salvo en los casos donde la ley prevea recurso ante el Consejo de Ministros), el silencio negativo agota formalmente la vía administrativa conforme al Art. 131 de la LPA, quedando expedita la vía jurisdiccional contenciosa (Art. 24 LJCA).",
    "legalBasis": "Ley de Procedimientos Administrativos Art. 131 y LJCA Art. 24.",
    "distractorRationale": {
      "A": "Correcto. El silencio negativo ante máxima autoridad agota la vía y abre de inmediato la demanda en la LJCA.",
      "B": "Los ministros dirigen sus despachos y sus actos agotan la vía gubernativa ordinaria.",
      "C": "La inexistencia de superior no bloquea el acceso a la justicia judicial.",
      "D": "Los juzgados de paz no tienen competencia para sustituir procedimientos ministeriales."
    }
  },
  {
    "id": "lpa-68",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo y Pretensiones Patrimoniales Líquidas",
    "statement": "¿Qué sucede si un proveedor del Estado solicita el pago de facturas devengadas y la institución pública no emite el acuerdo de pago ni contesta en el plazo máximo de ley?",
    "options": {
      "A": "Se remite el expediente a la policía de hacienda para cerrar la empresa contratista.",
      "B": "La deuda se extingue y el contratista no puede cobrar ni un solo centavo.",
      "C": "El proveedor adquiere en propiedad los camiones del ministerio.",
      "D": "Opera el silencio administrativo negativo que agota la vía o habilita los recursos de ley, permitiendo al proveedor demandar el cumplimiento contractual y pago coactivo en sede judicial contenciosa."
    },
    "correctAnswer": "D",
    "explanation": "La falta de respuesta a un reclamo económico de pago configura silencio administrativo negativo, permitiendo al contratista acudir a la Jurisdicción Contencioso Administrativa para reclamar el pago de la cantidad líquida insoluta más intereses moratorios por enriquecimiento sin causa del Estado.",
    "legalBasis": "Ley de Procedimientos Administrativos Art. 114 y LJCA Art. 10.",
    "distractorRationale": {
      "A": "El cobro legítimo de prestaciones debidas jamás puede motivar represalias de clausura.",
      "B": "Las deudas legítimas del Estado no se extinguen por su propia morosidad de pago.",
      "C": "El cobro requiere sentencia judicial ejecutiva, no apropiación de hecho de bienes muebles del Estado.",
      "D": "Correcto. El silencio negativo abre la vía judicial contenciosa para exigir el pago forzoso del contrato."
    }
  },
  {
    "id": "lpa-69",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo y Vía de Hecho Administrativa",
    "statement": "Si la administración ejecuta materialmente una demolición o clausura de un local sin haber tramitado procedimiento previo ni dictado resolución expresa:",
    "options": {
      "A": "Es un acto soberano e inapelable que ninguna corte judicial puede revisar.",
      "B": "Se considera un silencio administrativo positivo a favor de la municipalidad.",
      "C": "Se configura una vía de hecho administrativa susceptible de impugnación directa ante los juzgados de lo contencioso administrativo conforme al Artículo 9 de la LJCA.",
      "D": "Se presume que el ciudadano otorgó consentimiento verbal para la destrucción de su patrimonio."
    },
    "correctAnswer": "C",
    "explanation": "La ejecución material de actuaciones desprovistas de cobertura jurídica o sin resolución previa constituye una 'vía de hecho' (Art. 9 LJCA). Frente a la vía de hecho no se requiere esperar plazos de silencio; el administrado puede accionar directamente en tutela judicial contenciosa.",
    "legalBasis": "Ley de la Jurisdicción Contencioso Administrativa, Art. 9.",
    "distractorRationale": {
      "A": "Todos los actos y actuaciones materiales del Estado están sujetos a control judicial de legalidad.",
      "B": "La vía de hecho es una agresión antijurídica material, no un silencio positivo.",
      "C": "Correcto. La actuación material sin acto formal constituye vía de hecho impugnable de inmediato.",
      "D": "El consentimiento nunca se presume cuando se destruye propiedad privada sin procedimiento."
    }
  },
  {
    "id": "lpa-70",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo y Pluralidad de Peticiones en un Solo Escrito",
    "statement": "Cuando un ciudadano formula dos peticiones distintas en un mismo escrito (ej. rectificación de registro y expedición de solvencia) y la autoridad solo resuelve expresamente una de ellas guardando silencio sobre la otra:",
    "options": {
      "A": "Opera el silencio administrativo desestimatorio únicamente respecto de la petición que no fue resuelta en el plazo legal, manteniendo plena eficacia la resolución dictada sobre la otra.",
      "B": "Se anula automáticamente todo el expediente y la respuesta expresa queda sin valor.",
      "C": "Se presume aprobada la petición omitida por compensación matemática.",
      "D": "La administración queda exenta de resolver sobre la petición omitida por considerarse accesoria."
    },
    "correctAnswer": "A",
    "explanation": "En virtud del principio de divisibilidad de pretensiones, la resolución expresa parcial pone fin al procedimiento solo respecto a lo resuelto. Sobre la petición omitida opera de manera independiente el silencio administrativo negativo al vencer el plazo legal, habilitando la impugnación parcial.",
    "legalBasis": "Ley de Procedimientos Administrativos, Arts. 89 y 114.",
    "distractorRationale": {
      "A": "Correcto. El silencio negativo opera sobre la petición desatendida sin invalidar el acto expreso dictado.",
      "B": "La validez del acto dictado se preserva conforme al principio de conservación de actos válidos.",
      "C": "No existe compensación tácita aprobatoria en derecho administrativo.",
      "D": "El deber de congruencia impone resolver todas las cuestiones planteadas por el interesado."
    }
  },
  {
    "id": "lpa-71",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo y Cambio Sobreviniente de Normativa",
    "statement": "Si durante el transcurso del plazo de un procedimiento administrativo común se aprueba una nueva ley que reduce los plazos de tramitación pero no contiene régimen transitorio expreso:",
    "options": {
      "A": "Todos los procedimientos se dan por aprobados por silencio positivo automático.",
      "B": "Se cancelan todos los trámites iniciados y se destruyen los expedientes.",
      "C": "El administrado debe pagar una tasa de regularización legislativa.",
      "D": "Los procedimientos iniciados con anterioridad se regirán por la normativa vigente en la fecha de su iniciación, de conformidad con el principio de seguridad jurídica y no retroactividad."
    },
    "correctAnswer": "D",
    "explanation": "El principio de irretroactividad de las leyes (Art. 21 Cn.) y las reglas comunes de derecho transitorio disponen que los procedimientos en trámite continúan rigiéndose por la ley bajo la cual fueron formalmente iniciados hasta su conclusión definitiva, salvo norma procesal expresa de orden público más favorable.",
    "legalBasis": "Constitución de la República Art. 21 y Principios Generales del Derecho Administrativo.",
    "distractorRationale": {
      "A": "El cambio legislativo no muta de oficio el silencio negativo a positivo.",
      "B": "La derogación de expedientes en trámite violaría el derecho a la seguridad jurídica.",
      "C": "No se pueden imponer cobros retroactivos no contemplados en la ley previa.",
      "D": "Correcto. Los procedimientos en curso mantienen las reglas temporales vigentes al momento de su inicio."
    }
  },
  {
    "id": "lpa-72",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo y Notificación Defectuosa de la Resolución",
    "statement": "Si la administración dicta la resolución final expresa antes de vencer los nueve meses, pero omite notificarla legalmente al administrado o la notifica en un lugar equivocado:",
    "options": {
      "A": "El acto surte plenos efectos porque lo importante es que el funcionario lo firmó en su despacho.",
      "B": "La resolución no surte efectos frente al administrado, configurándose el silencio administrativo negativo al vencer el plazo legal de notificación para efectos de impugnación.",
      "C": "El administrado pierde el derecho a recurrir por no haber adivinado la resolución.",
      "D": "El cartero es condenado a diez años de prisión sin audiencia."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 103 de la LPA dispone que las notificaciones defectuosas surtirán efecto únicamente a partir de la fecha en que el interesado se dé por enterado. Mientras tanto, frente al administrado no existe notificación válida; si transcurre el plazo legal de resolución y notificación (Art. 89 LPA), opera el silencio negativo garantista.",
    "legalBasis": "Ley de Procedimientos Administrativos, Arts. 89, 97 y 103.",
    "distractorRationale": {
      "A": "La eficacia del acto administrativo depende de su notificación formal, no de la firma íntima del emisor.",
      "B": "Correcto. El acto no notificado válidamente es ineficaz y habilita el silencio frente al vencimiento del plazo.",
      "C": "El administrado no tiene la carga de adivinar decisiones no comunicadas con apego a la ley.",
      "D": "Las fallas en la notificación se corrigen procesalmente y no con penas penales inmediatas."
    }
  },
  {
    "id": "lpa-73",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo e Inmunidad de la Administración en Vía Arbitral",
    "statement": "¿Puede configurarse silencio administrativo positivo en un trámite administrativo cuando el contrato de origen contenga una cláusula de sometimiento a arbitraje internacional?",
    "options": {
      "A": "El silencio administrativo se rige estrictamente por la ley formal administrativa (LPA), siendo inadmisible el silencio positivo salvo disposición legal expresa, con independencia de las estipulaciones contractuales arbitrales.",
      "B": "Sí, el árbitro internacional tiene facultad de crear silencio positivo en cualquier momento.",
      "C": "El arbitraje extingue de inmediato la aplicación de la LPA en todo el territorio salvadoreño.",
      "D": "La administración pública salvadoreña está exenta de cumplir las leyes de procedimiento ante tribunales arbitrales."
    },
    "correctAnswer": "A",
    "explanation": "El régimen del silencio administrativo es materia de derecho público indisponible y de reserva de ley formal (Art. 113 LPA). Ni los árbitros ni las partes pueden pactar convencionalmente la producción de silencio positivo fuera de las hipótesis tasadas por la ley.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 113.",
    "distractorRationale": {
      "A": "Correcto. El silencio administrativo es materia reglada de orden público inderogable por pacto arbitral.",
      "B": "Los árbitros carecen de potestad legislativa para crear ficciones de silencio sustantivo no contempladas en la ley.",
      "C": "La LPA rige con carácter común y supletorio para toda la actividad administrativa del país.",
      "D": "El Estado y sus entidades están plenamente sujetos al principio de legalidad (Art. 86 Cn.)."
    }
  },
  {
    "id": "lpa-74",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo y Plazo Razonable del Trámite Breve",
    "statement": "Si una ley especial formal fija un plazo de veinte días hábiles para resolver una solicitud de licencia de conducir y la autoridad no notifica decisión:",
    "options": {
      "A": "Debe esperarse obligatoriamente nueve meses porque la LPA deroga todas las leyes especiales favorables.",
      "B": "El silencio administrativo se configura al vencimiento de los veinte días hábiles de la ley especial, sin necesidad de esperar el plazo supletorio general de nueve meses de la LPA.",
      "C": "Se cancela el derecho del ciudadano a conducir vehículos de motor de por vida.",
      "D": "El interesado debe comprar un caballo para transportarse."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 89 de la LPA establece que el plazo supletorio de 9 meses rige 'salvo que una ley formal especial establezca expresamente un plazo menor'. Por tanto, primando el principio de especialidad, el silencio administrativo se configura al vencer el plazo especial de 20 días hábiles.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 89 inc. 1° y Art. 162.",
    "distractorRationale": {
      "A": "La LPA opera como régimen común y supletorio sin anular plazos especiales más breves y favorables.",
      "B": "Correcto. Prevalece el plazo menor fijado por la ley especial formal.",
      "C": "La omisión del ente emisor no genera sanciones ni privaciones de derechos al solicitante.",
      "D": "El ciudadano mantiene expedita la tutela legal y el derecho a peticionar oportunamente."
    }
  },
  {
    "id": "lpa-75",
    "category": "silencio-administrativo",
    "categoryLabel": "Silencio Administrativo (Negativo vs Positivo)",
    "area": "Silencio Administrativo y Caducidad de la Acción Judicial",
    "statement": "Cuando un administrado opta voluntariamente por esperar la resolución expresa tardía en lugar de demandar de inmediato ante el silencio negativo:",
    "options": {
      "A": "Se presume que renunció al derecho y consintió tácitamente la denegatoria.",
      "B": "Pierde irrevocablemente el derecho a demandar porque debió hacerlo el día que operó el silencio.",
      "C": "Su derecho a demandar ante la jurisdicción contenciosa renace plenamente cuando la administración le notifique la resolución expresa tardía desfavorable, computándose a partir de entonces los 60 días hábiles de la LJCA.",
      "D": "Debe pagar una multa judicial por haber sido paciente con la administración."
    },
    "correctAnswer": "C",
    "explanation": "La Sala de lo Contencioso Administrativo ha fijado como doctrina invariable que la espera de la resolución expresa no perjudica al administrado; una vez notificada la resolución expresa tardía que desestima su pretensión, nace un nuevo acto impugnable y el plazo de 60 días de la LJCA se computa a partir del día siguiente a dicha notificación formal.",
    "legalBasis": "LJCA Art. 25 y Jurisprudencia de la Sala de lo Contencioso Administrativo CSJ.",
    "distractorRationale": {
      "A": "La renuncia de derechos exige manifestación expresa y jamás se presume.",
      "B": "El silencio negativo es una opción facultativa del ciudadano, no una trampa preclusiva obligatoria.",
      "C": "Correcto. La notificación de la resolución expresa tardía abre un nuevo plazo ordinario de 60 días hábiles.",
      "D": "No existe sanción procesal por esperar la respuesta expresa garantizada por el Art. 18 Cn."
    }
  },
  {
    "id": "lpa-76",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Plazos de Interposición del Recurso de Reconsideración",
    "statement": "¿Ante qué autoridad y en qué plazo legal debe interponerse el Recurso de Reconsideración según el Artículo 132 de la LPA?",
    "options": {
      "A": "Ante el Tribunal de Ética Gubernamental en el plazo de cinco días hábiles.",
      "B": "Ante la Sala de lo Constitucional de la CSJ en el plazo de veinticuatro horas.",
      "C": "Ante el Presidente de la República en un plazo improrrogable de dos años.",
      "D": "Ante el mismo órgano que dictó el acto impugnado, dentro del plazo de diez días hábiles contados a partir del día siguiente a su notificación."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 132 de la LPA dispone que el recurso de reconsideración tiene carácter potestativo y deberá interponerse ante el mismo órgano que dictó el acto administrativo dentro del plazo de diez días hábiles contados desde el día siguiente a su notificación formal.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 132.",
    "distractorRationale": {
      "A": "El TEG sanciona faltas éticas, no recursos de legalidad de procedimientos comunes.",
      "B": "La Sala de lo Constitucional conoce de amparos e inconstitucionalidades, no de reconsideraciones ordinarias.",
      "C": "El Presidente solo conoce apelaciones de sus ministros o entes subordinados directos.",
      "D": "Correcto. Plazo de 10 días hábiles ante el mismo órgano emisor."
    }
  },
  {
    "id": "lpa-77",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Plazo y Requisito del Recurso de Apelación",
    "statement": "De acuerdo con el Artículo 134 de la LPA, ¿cuál es el plazo de interposición del Recurso de Apelación jerárquico y qué efecto produce su resolución respecto a la vía administrativa?",
    "options": {
      "A": "Se interpone en tres días hábiles y su resolución es apelable indefinidamente.",
      "B": "Se interpone en quince días hábiles ante el superior jerárquico y su resolución agota formalmente la vía administrativa.",
      "C": "Se interpone en seis meses y no admite acudir a los tribunales judiciales contenciosos.",
      "D": "No existe plazo; puede interponerse verbalmente en cualquier momento de la vida del administrado."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 134 de la LPA establece que el recurso de apelación se interpondrá ante el superior jerárquico en el plazo de quince días hábiles. La resolución de la apelación agota la vía administrativa (Art. 131 inc. final LPA), dejando abierta la posibilidad de interponer la demanda contencioso-administrativa (Art. 24 LJCA).",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 134.",
    "distractorRationale": {
      "A": "Tres días hábiles no coincide con la LPA; además no hay apelaciones infinitas.",
      "B": "Correcto. Plazo de 15 días hábiles y agota la vía administrativa.",
      "C": "Seis meses excede el plazo perentorio legal.",
      "D": "Los recursos administrativos exigen formalidad escrita o electrónica y plazos estrictos de caducidad."
    }
  },
  {
    "id": "lpa-78",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Actos Recurribles en Vía Administrativa",
    "statement": "Conforme al Artículo 129 de la LPA, ¿cuáles son los actos administrativos susceptibles de impugnación mediante recursos ordinarios?",
    "options": {
      "A": "Exclusivamente las circulares internas de bienvenida para empleados de nuevo ingreso.",
      "B": "Cualquier decreto legislativo emitido por la Asamblea Legislativa.",
      "C": "Los actos definitivos que ponen fin al procedimiento y los actos de trámite cualificados que deciden directa o indirectamente el fondo, determinen la imposibilidad de continuar o produzcan indefensión o perjuicio irreparable.",
      "D": "Únicamente las providencias verbales de los porteros de las oficinas públicas."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 129 de la LPA delimita el objeto del recurso a los actos definitivos y a los actos de trámite cualificados (aquellos que impiden continuar, deciden el fondo o causan indefensión o daño irreparable), excluyendo los actos de mero trámite ordinario.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 129.",
    "distractorRationale": {
      "A": "Las circulares internas de bienvenida son informativas no vinculantes de gravamen.",
      "B": "Los decretos legislativos se impugnan por inconstitucionalidad ante la Sala de lo Constitucional.",
      "C": "Correcto. Actos definitivos y actos de trámite cualificados son los únicos recurribles.",
      "D": "Las comunicaciones de conserjería carecen de naturaleza de acto administrativo formal."
    }
  },
  {
    "id": "lpa-79",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Inadmisibilidad de Recursos contra Actos de Mero Trámite",
    "statement": "Si un administrado pretende interponer recurso de apelación contra una providencia que únicamente ordena agregar un informe pericial al expediente (Art. 129 inc. 2° LPA):",
    "options": {
      "A": "El recurso debe ser declarado inadmisible por tratarse de un acto de mero trámite no cualificado, cuya alegación podrá formularse al recurrir contra la resolución definitiva.",
      "B": "Debe suspenderse el procedimiento por dos años para que el juzgado contencioso decida.",
      "C": "El recurso debe ser estimado de inmediato ordenando la destitución del perito.",
      "D": "Se remite el expediente al Tribunal Supremo Electoral."
    },
    "correctAnswer": "A",
    "explanation": "Los actos de mero impulso o agregación documental no son recurribles de forma autónoma. La oposición a tales actos debe hacerse valer por los interesados para su consideración en la resolución que ponga fin al procedimiento o en el recurso que, en su caso, se interponga contra la misma.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 129 inc. 2°.",
    "distractorRationale": {
      "A": "Correcto. Los actos de mero trámite no son impugnables independientemente para evitar dilaciones.",
      "B": "No cabe intervención de tribunales judiciales frente a actos no cualificados en trámite.",
      "C": "No procede estimación de recursos formalmente inadmisibles.",
      "D": "El TSE solo tiene competencia electoral y de partidos políticos (Art. 208 Cn.)."
    }
  },
  {
    "id": "lpa-80",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Carácter Potestativo de la Reconsideración",
    "statement": "¿Qué consecuencia procesal tiene para el administrado decidir NO interponer el recurso de reconsideración y acudir directamente al superior jerárquico o al juzgado?",
    "options": {
      "A": "Se considera que admitió los cargos y se ejecuta la sanción de inmediato.",
      "B": "Pierde automáticamente todo derecho a defenderse y se le declara en rebeldía perpetua.",
      "C": "Debe pagar una penalización del 20% del valor de su reclamo al Fondo General de la Nación.",
      "D": "Al ser potestativo (Art. 132 LPA), el administrado puede prescindir válidamente de él e interponer directamente el recurso de apelación ante el superior, sin que ello le cause perjuicio ni preclusión."
    },
    "correctAnswer": "D",
    "explanation": "El carácter potestativo u optativo del recurso de reconsideración (Art. 132 LPA) implica que su interposición no es obligatoria para agotar la vía administrativa ni requisito previo para interponer la apelación o la demanda contenciosa (si el órgano no tiene superior).",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 132.",
    "distractorRationale": {
      "A": "No constituye aceptación tácita de los fundamentos del acto administrativo.",
      "B": "No genera rebeldía ni pérdida de facultades recursivas superiores.",
      "C": "No existen multas procesales por ejercer la libertad recursiva.",
      "D": "Correcto. Por ser potestativo, puede obviarse sin detrimento procesal alguno."
    }
  },
  {
    "id": "lpa-81",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Efectos de la Interposición de la Reconsideración sobre la Apelación",
    "statement": "Si el interesado decide voluntariamente interponer el recurso de reconsideración (Art. 132 LPA), ¿en qué momento puede interponer el recurso de apelación?",
    "options": {
      "A": "Queda permanentemente privado de acudir al recurso de apelación para siempre.",
      "B": "Puede interponer la apelación simultáneamente el mismo día ante el superior jerárquico.",
      "C": "No podrá interponer el recurso de apelación hasta que la reconsideración sea expresamente resuelta o se haya producido su desestimación presunta por silencio administrativo negativo.",
      "D": "Solo puede apelar si el Presidente de la República le concede una gracia especial."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 132 de la LPA establece que interpuesto el recurso de reconsideración, no se podrá interponer recurso de apelación en tanto no recaiga resolución expresa o se haya desestimado presuntamente la reconsideración por el transcurso de un mes.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 132.",
    "distractorRationale": {
      "A": "La desestimación de la reconsideración abre de inmediato el plazo para apelar ante el superior.",
      "B": "La interposición simultánea duplicaría innecesariamente el pronunciamiento institucional.",
      "C": "Correcto. La coexistencia simultánea de ambos recursos está vedada; debe esperarse el fallo o el silencio.",
      "D": "La apelación es un recurso legal ordinario que no depende de indultos presidenciales."
    }
  },
  {
    "id": "lpa-82",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Órgano ante el que se Presenta la Apelación",
    "statement": "De conformidad con el Artículo 134 inciso 2° de la LPA, ¿ante qué autoridad puede presentarse el escrito del recurso de apelación y qué deber asume el receptor?",
    "options": {
      "A": "Podrá interponerse ante el órgano que dictó el acto impugnado o ante el competente para resolverlo; si se presenta ante el primero, este lo remitirá al superior con el expediente en el plazo de tres días hábiles.",
      "B": "Únicamente en persona ante el despacho del Fiscal General de la República.",
      "C": "Solo puede presentarse en la Embajada de El Salvador en Washington D.C.",
      "D": "Se presenta ante un juez de familia en audiencia pública oral."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 134 inc. 2° de la LPA brinda la facilidad de presentar la apelación ante el órgano a quo o ante el superior ad quem. Si se presenta ante el órgano emisor, este debe remitirlo junto con el expediente administrativo íntegro al superior dentro de los tres días hábiles siguientes.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 134 inc. 2°.",
    "distractorRationale": {
      "A": "Correcto. Puede presentarse ante el a quo o ad quem; el a quo tiene 3 días para elevarlo.",
      "B": "La FGR no es la sede de radicación de recursos administrativos comunes.",
      "C": "Las sedes diplomáticas atienden funciones consulares en el exterior, no trámites ordinarios de apelación interna.",
      "D": "Los jueces de familia carecen de competencia en la vía gubernativa administrativa."
    }
  },
  {
    "id": "lpa-83",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Supuestos de Agotamiento de la Vía Administrativa",
    "statement": "El Artículo 131 de la LPA enumera los actos que agotan la vía administrativa. ¿Cuál de los siguientes supuestos agota plenamente la vía para acudir a la sede judicial contenciosa?",
    "options": {
      "A": "La simple notificación de inicio de una investigación preliminar.",
      "B": "Cualquier acuerdo de mero trámite dictado por una secretaria receptora.",
      "C": "La presentación de la solicitud inicial en la ventanilla de recepción.",
      "D": "La resolución del recurso de apelación, o los actos dictados por órganos que carecen de superior jerárquico salvo disposición legal en contrario."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 131 de la LPA prescribe taxativamente que ponen fin a la vía administrativa: a) las resoluciones de los recursos de apelación; b) las resoluciones de los órganos administrativos que carezcan de superior jerárquico; c) el silencio desestimatorio en apelación; y d) los demás actos cuando una ley formal así lo establezca.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 131.",
    "distractorRationale": {
      "A": "Las investigaciones previas son actos de trámite preliminares no definitivos.",
      "B": "Los actos de mero trámite no agotan la vía y no son recurribles de manera autónoma.",
      "C": "La solicitud inicial da apertura al procedimiento, distando mucho de poner fin a la vía.",
      "D": "Correcto. La apelación resuelta o el acto de máxima autoridad sin superior agotan la vía gubernativa."
    }
  },
  {
    "id": "lpa-84",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Requisito Previo de Agotamiento en la LJCA",
    "statement": "De acuerdo con el Artículo 24 de la Ley de la Jurisdicción Contencioso Administrativa (LJCA), ¿cuál es la consecuencia procesal de interponer una demanda judicial contenciosa sin haber agotado preceptivamente la vía administrativa?",
    "options": {
      "A": "El tribunal dicta sentencia condenatoria contra el Estado de manera automática.",
      "B": "La demanda será declarada improponible por falta de presupuesto procesal esencial de admisibilidad.",
      "C": "El demandante es enviado a prisión por cinco años sin fianza.",
      "D": "El juez contencioso se convierte en ministro del ramo correspondiente."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 24 de la LJCA impone como presupuesto procesal insoslayable el correcto agotamiento de la vía administrativa. Su omisión (por ejemplo, demandar un acto de primer grado cuando procedía recurso de apelación preceptivo ante el superior) genera la improponibilidad de la demanda (Art. 35 LJCA).",
    "legalBasis": "Ley de la Jurisdicción Contencioso Administrativa, Arts. 24 y 35.",
    "distractorRationale": {
      "A": "No puede haber condena en un proceso donde falta un presupuesto procesal básico.",
      "B": "Correcto. La falta de agotamiento de la vía administrativa acarrea la improponibilidad de la demanda.",
      "C": "Los defectos procesales de la demanda no constituyen delitos penales.",
      "D": "La función jurisdiccional es estrictamente judicial e incompatible con la titularidad ministerial."
    }
  },
  {
    "id": "lpa-85",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Prohibición de Reformatio in Peius",
    "statement": "El Artículo 130 inciso 3° de la LPA consagra la prohibición de la reformatio in peius. ¿Qué límite impone esta garantía a la autoridad que resuelve un recurso administrativo?",
    "options": {
      "A": "El órgano que resuelva el recurso no podrá en ningún caso agravar la situación inicial del recurrente, debiendo limitarse a estimar, desestimar o anular el acto impugnado.",
      "B": "La autoridad puede duplicar la sanción económica para castigar al ciudadano por haber recurrido.",
      "C": "Se autoriza a confiscar la vivienda del administrado si sus argumentos resultan débiles.",
      "D": "La autoridad queda facultada para condenar a los abogados del recurrente al pago de multas penales."
    },
    "correctAnswer": "A",
    "explanation": "El principio de prohibición de la reformatio in peius (Art. 130 inc. 3° LPA) garantiza que el ejercicio de los recursos no se convierta en una trampa punitiva. El órgano decisor del recurso no puede empeorar la posición jurídica del recurrente en relación con el acto original recurrido.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 130 inc. 3°.",
    "distractorRationale": {
      "A": "Correcto. La interposición del recurso jamás puede agravar la condición del administrado apelante.",
      "B": "Agravar la sanción como castigo por recurrir violaría flagrantemente el derecho a la defensa y recursos.",
      "C": "La confiscación está prohibida por el Art. 106 de la Constitución salvadoreña.",
      "D": "No existe sanción punitiva contra letrados por articular medios impugnativos de ley."
    }
  },
  {
    "id": "lpa-86",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Regla General de Ejecutoriedad del Acto Recurrido",
    "statement": "Conforme al Artículo 136 de la LPA, ¿cuál es la regla general sobre la eficacia y ejecución del acto administrativo cuando este es recurrido en vía administrativa?",
    "options": {
      "A": "La interposición suspende automáticamente todos los efectos del acto de pleno derecho sin excepción.",
      "B": "La interposición de cualquier recurso administrativo no suspenderá la ejecución del acto impugnado, salvo que una disposición legal establezca lo contrario o se decrete medida cautelar de suspensión.",
      "C": "El acto se extingue para siempre y la administración debe pedir disculpas públicas.",
      "D": "El administrado adquiere el derecho de ejecutar por la fuerza al funcionario emisor."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 136 inciso 1° de la LPA consagra la regla de la ejecutoriedad inmediata: la interposición de recursos no paraliza per se la eficacia del acto administrativo, presumiéndose válido mientras no sea formalmente suspendido o anulado conforme a derecho.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 136 inc. 1°.",
    "distractorRationale": {
      "A": "La suspensión automática paralizaría la gestión pública y la satisfacción del interés general.",
      "B": "Correcto. La regla general es la no suspensión automática; la suspensión exige resolución expresa motivada.",
      "C": "El recurso no extingue el acto; solo abre su revisión en sede jerárquica.",
      "D": "Las vías de hecho contra funcionarios públicos están sancionadas por el Código Penal."
    }
  },
  {
    "id": "lpa-87",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Presupuestos para la Suspensión del Acto en Vía de Recurso",
    "statement": "¿Bajo qué presupuestos y valoraciones puede el órgano competente para resolver el recurso suspender la ejecución del acto administrativo impugnado (Art. 136 inc. 2° LPA)?",
    "options": {
      "A": "Siempre que la sanción no exceda de un dólar estadounidense.",
      "B": "Únicamente si el recurrente es pariente del ministro en grado cercano.",
      "C": "Cuando la ejecución pudiera causar perjuicios de imposible o difícil reparación, o cuando la impugnación se fundamente en alguna de las causas de nulidad de pleno derecho del Artículo 36 de la LPA.",
      "D": "Cuando el expediente esté empastado en cuero color negro."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 136 inciso 2° de la LPA faculta a suspender cautelarmente la ejecución del acto recurrido cuando concurra periculum in mora (daños irreparables o de difícil reparación) o fumus boni iuris cualificado (alegación verosímil de una causa de nulidad de pleno derecho), previa ponderación del interés público.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 136 inc. 2°.",
    "distractorRationale": {
      "A": "La cuantía mínima no determina la gravedad del perjuicio que justifica suspender.",
      "B": "El parentesco es causal de abstención y recusación, no de concesión de medidas de gracia.",
      "C": "Correcto. Daño irreparable y apariencia de nulidad de pleno derecho fundamentan la suspensión cautelar.",
      "D": "Las características materiales del empastado carecen de relevancia sustantiva."
    }
  },
  {
    "id": "lpa-88",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Silencio en la Solicitud de Suspensión Cautelar",
    "statement": "Si el recurrente solicita expresamente en su recurso la suspensión cautelar de la ejecución del acto y transcurre un mes sin que la autoridad se pronuncie sobre dicha medida (Art. 136 inc. 3° LPA):",
    "options": {
      "A": "El recurrente es multado por insistir en medidas cautelares.",
      "B": "Se entenderá denegada y se ejecutará el acto inmediatamente con auxilio de la fuerza pública.",
      "C": "Se archiva todo el expediente principal sin más trámite.",
      "D": "La ejecución del acto administrativo se entenderá suspendida por ministerio de ley (silencio positivo cautelar)."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 136 inciso 3° de la LPA introduce una excepción trascendental: la solicitud de suspensión se entenderá estimada por silencio administrativo si transcurrido un mes desde que la solicitud tuvo entrada en el registro de la autoridad competente para resolverla, esta no ha dictado y notificado resolución expresa al respecto.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 136 inc. 3°.",
    "distractorRationale": {
      "A": "Peticionar medidas precautorias es un derecho procesal no pasible de sanción.",
      "B": "La ley salvadoreña confiere deliberadamente efecto suspensorio estimatorio como garantía ciudadana.",
      "C": "El fondo del recurso continúa sustanciándose con independencia de la medida cautelar.",
      "D": "Correcto. Opera el silencio positivo cautelar: transcurrido 1 mes sin resolución, el acto queda suspendido."
    }
  },
  {
    "id": "lpa-89",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Exigencia de Caución para la Suspensión",
    "statement": "De conformidad con el Artículo 136 inciso 4° de la LPA, ¿puede la administración condicionar la efectividad de la suspensión cautelar de un acto a la prestación de una fianza o garantía?",
    "options": {
      "A": "No, está terminantemente prohibido exigir garantías patrimoniales al Estado.",
      "B": "Sí, al acordar la suspensión se podrán adoptar las medidas cautelares necesarias para asegurar la protección del interés público o de terceros, incluida la exigencia de caución suficiente.",
      "C": "Solo si la caución se paga en lingotes de oro físico en la ventanilla única.",
      "D": "Únicamente si el administrado es un menor de doce años."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 136 inc. 4° de la LPA permite que la suspensión se supedite a la prestación de caución suficiente para responder de los posibles daños y perjuicios que pudieran ocasionarse al interés público o a terceros por la paralización de la ejecución del acto impugnado.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 136 inc. 4°.",
    "distractorRationale": {
      "A": "La fianza protege al erario público y a terceros frente a pretensiones infundadas.",
      "B": "Correcto. La autoridad puede exigir caución idónea para precautelar intereses colectivos lesionables.",
      "C": "Las cauciones admiten pólizas de fianza bancaria o aseguradora conforme a las normas mercantiles.",
      "D": "Las cauciones recaen comúnmente sobre personas capaces titulares de actividades gravadas."
    }
  },
  {
    "id": "lpa-90",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Naturaleza del Recurso Extraordinario de Revisión",
    "statement": "El Artículo 137 de la LPA regula el Recurso Extraordinario de Revisión. ¿Cuál es su naturaleza jurídica y contra qué actos procede?",
    "options": {
      "A": "Es una demanda laboral de reenganche de personal público cesante.",
      "B": "Es un recurso ordinario que procede contra cualquier trámite preliminar no definitivo.",
      "C": "Es un medio de impugnación extraordinario y excepcional que procede únicamente contra actos firmes en vía administrativa, fundamentado en causales taxativas de falsedad o error objetivo evidente.",
      "D": "Es una solicitud de amnistía general aprobada por el Consejo de Ministros."
    },
    "correctAnswer": "C",
    "explanation": "El Recurso Extraordinario de Revisión (Art. 137 LPA) rompe de forma muy restrictiva la santidad de la cosa juzgada administrativa sobre actos firmes, permitiendo su revisión únicamente ante causales taxativas graves como error evidente en documentos, documentos nuevos decisivos o sentencias penales condenatorias.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 137.",
    "distractorRationale": {
      "A": "Los reclamos laborales se ventilan bajo la Ley de Servicio Civil o tribunales competentes.",
      "B": "No es un recurso ordinario ni procede contra actos que aún admitan apelación ordinaria.",
      "C": "Correcto. Procede únicamente contra actos firmes y bajo causales cerradas tasadas de ley.",
      "D": "No tiene carácter de perdón político ni de amnistía general."
    }
  },
  {
    "id": "lpa-91",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Causal de Revisión por Documentos Esenciales Sobrevinientes",
    "statement": "De acuerdo con el Artículo 137 literal b) de la LPA, ¿en qué plazo debe interponerse el Recurso Extraordinario de Revisión cuando aparezcan documentos de valor esencial para la resolución del asunto ignorados o de imposible aportación previa?",
    "options": {
      "A": "Dentro del plazo de tres meses contados a partir del momento en que se tuvo conocimiento de los documentos o desde que se pudieron obtener.",
      "B": "En el término de diez años calendario contados desde la independencia nacional.",
      "C": "En las primeras dos horas siguientes al descubrimiento del documento.",
      "D": "No hay plazo; puede interponerse por los herederos en el siglo siguiente."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 137 inciso 2° de la LPA fija que el recurso extraordinario de revisión en los casos de documentos esenciales nuevos o sentencias penales sobrevinientes deberá interponerse dentro del plazo de tres meses a contar desde el conocimiento de los documentos o desde que la sentencia judicial quedó firme.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 137 inc. 2°.",
    "distractorRationale": {
      "A": "Correcto. Plazo perentorio de 3 meses desde el conocimiento objetivo del nuevo documento esencial.",
      "B": "Diez años desestabilizaría de forma absoluta la seguridad jurídica de las resoluciones firmes.",
      "C": "Dos horas es un plazo inviable materialmente para preparar un recurso extraordinario formal.",
      "D": "Los plazos de caducidad impiden el ejercicio hereditario intemporal de acciones revisoras."
    }
  },
  {
    "id": "lpa-92",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Causal de Revisión por Sentencia Penal Condenatoria Firme",
    "statement": "Conforme al Artículo 137 literal d) de la LPA, ¿en qué circunstancia procede el recurso de revisión cuando un acto administrativo se dictó como consecuencia de una conducta delictiva?",
    "options": {
      "A": "Solo si la Policía Nacional Civil lo solicita en una conferencia de prensa matutina.",
      "B": "Basta con que un ciudadano publique una acusación de corrupción en una red social.",
      "C": "Siempre que el funcionario instructor pertenezca a un partido político opositor.",
      "D": "Cuando en la resolución hayan influido esencialmente prevaricación, cohecho, violencia, maquinación fraudulenta u otra conducta punible declarada en sentencia penal firme."
    },
    "correctAnswer": "D",
    "explanation": "El Art. 137 lit. d) LPA exige sentencia judicial penal ejecutoriada que declare formalmente que en la adopción del acto administrativo incidió prevaricato, cohecho, extorsión u otra conducta delictiva, garantizando que la verdad judicial destruya la aparente legitimidad del acto firme viciado.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 137 lit. d).",
    "distractorRationale": {
      "A": "Las conferencias de prensa carecen de valor jurisdiccional de sentencia penal ejecutoriada.",
      "B": "Las redes sociales no reemplazan la función jurisdiccional ni destruyen la firmeza de un acto.",
      "C": "La filiación política no constituye causal legal revisora de actos administrativos.",
      "D": "Correcto. Requiere sentencia penal firme que acredite la prevaricación o delito determinante del acto."
    }
  },
  {
    "id": "lpa-93",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Plazo de Resolución del Recurso Extraordinario de Revisión",
    "statement": "Conforme al Artículo 137 inciso final de la LPA, ¿cuál es el plazo máximo que tiene la autoridad para resolver y notificar el Recurso Extraordinario de Revisión y qué opera ante su omisión?",
    "options": {
      "A": "Debe resolverse en cinco días hábiles o se restituye el dinero inmediatamente.",
      "B": "El plazo es de veinticuatro meses y opera el silencio positivo aprobatorio.",
      "C": "El plazo máximo es de tres meses; transcurrido dicho término sin resolución expresa, el recurso se entenderá desestimado por silencio administrativo negativo.",
      "D": "No existe plazo legal y la autoridad puede archivarlo sin dictar resolución."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 137 inciso final de la LPA dispone que el órgano competente para resolver el recurso de revisión deberá dictar y notificar la resolución en el plazo de tres meses. Transcurrido dicho plazo sin que se dicte resolución, se entenderá desestimado por silencio negativo.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 137 inc. final.",
    "distractorRationale": {
      "A": "Cinco días es insuficiente para la compulsa y examen de sentencias penales o pruebas complejas.",
      "B": "Veinticuatro meses es dilatorio y el silencio en recursos firmes jamás es positivo supletorio.",
      "C": "Correcto. Plazo de 3 meses para resolver la revisión y desestimación por silencio administrativo negativo.",
      "D": "La autoridad siempre tiene el deber legal de resolver expresamente las impugnaciones."
    }
  },
  {
    "id": "lpa-94",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Requisitos Formales del Escrito de Interposición de Recursos",
    "statement": "El Artículo 130 de la LPA enumera los requisitos mínimos del escrito de interposición de cualquier recurso administrativo. ¿Cuál de los siguientes es un requisito indispensable?",
    "options": {
      "A": "Identificación del recurrente, el acto que se recurre y la razón de su impugnación con los hechos y fundamentos de derecho, lugar o medio para notificaciones, órgano al que se dirige y firma.",
      "B": "Acompañar un billete de lotería nacional no premiado.",
      "C": "Certificación de no poseer antecedentes policiales ni judiciales de los últimos cincuenta años.",
      "D": "Declaración jurada de que el recurrente jamás ha criticado a un funcionario público."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 130 de la LPA establece los requisitos del recurso: generales del recurrente, identificación clara del acto recurrido, expresión de los motivos de inconformidad (fácticos y jurídicos), señalamiento de lugar o medio técnico para notificaciones y la firma del solicitante o representante.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 130.",
    "distractorRationale": {
      "A": "Correcto. Los requisitos formales garantizan la delimitación del objeto y la congruencia decisoria.",
      "B": "Los juegos de azar no tienen relación alguna con el ejercicio de acciones procesales.",
      "C": "Los antecedentes penales o policiales no son exigibles para litigar en sede administrativa.",
      "D": "La libertad de expresión pacífica y el derecho a peticionar están garantizados por la Constitución."
    }
  },
  {
    "id": "lpa-95",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Plazo de Prevención para Subsanar el Recurso",
    "statement": "Si el escrito de interposición de un recurso de apelación adolece de defectos u omisiones formales no sustanciales (Art. 130 inc. 2° LPA), ¿qué debe hacer la autoridad receptora?",
    "options": {
      "A": "Subsanar de oficio las peticiones agregando argumentos inventados por el instructor.",
      "B": "Rechazar in límine el recurso sin permitir enmienda alguna.",
      "C": "Remitir al ciudadano al Juzgado de lo Penal por presentación negligente.",
      "D": "Prevenir al recurrente para que en un plazo perentorio de cinco días hábiles subsane los defectos advertidos, bajo apercibimiento de declarar la inadmisibilidad del recurso."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 130 inciso 2° de la LPA dispone que si el recurso no reúne los requisitos exigidos, se requerirá al recurrente para que en un plazo de cinco días hábiles subsane las deficiencias observadas, con indicación de que si no lo hiciere, se declarará la inadmisibilidad del recurso.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 130 inc. 2°.",
    "distractorRationale": {
      "A": "La autoridad no puede inventar unilateralmente agravios o pretensiones de las partes.",
      "B": "El rechazo plano sin prevención vulnera el principio antiformalista pro actione (Art. 3 LPA).",
      "C": "Las fallas procesales formales no constituyen ilícitos penales.",
      "D": "Correcto. Concesión de 5 días hábiles para subsanar bajo apercibimiento de inadmisibilidad."
    }
  },
  {
    "id": "lpa-96",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Error en la Calificación del Recurso por el Administrado",
    "statement": "Si un administrado titula erróneamente su escrito como 'Recurso de Revocatoria' en lugar de 'Recurso de Apelación', pero de su contenido se deduce claramente su voluntad de impugnar ante el superior (Art. 130 inc. 4° LPA):",
    "options": {
      "A": "El recurso debe ser desechado de plano por carecer de rigor taxonómico procesal.",
      "B": "El error en la calificación del recurso no será obstáculo para su tramitación, siempre que se deduzca su verdadero carácter, debiendo la autoridad tramitarlo por el cauce que legalmente corresponda.",
      "C": "El administrado pierde de inmediato el derecho sustantivo debatido.",
      "D": "Se sanciona al abogado patrocinante con suspensión de su matrícula profesional."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 130 inciso final de la LPA consagra la máxima iura novit curia y el principio antiformalista: el error en la denominación o calificación jurídica del recurso por parte del interesado no impedirá su tramitación idónea, siempre que del escrito se infiera con claridad su voluntad impugnativa.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 130 inc. 4°.",
    "distractorRationale": {
      "A": "Rechazar por el simple rótulo vulneraría el principio pro actione y la tutela efectiva.",
      "B": "Correcto. La autoridad debe reconducir el recurso al trámite legal pertinente atendiendo a la verdadera intención.",
      "C": "Los derechos sustanciales no sucumben ante imprecisiones semánticas no sustanciales.",
      "D": "No existe sanción disciplinaria por errores de denominación recursiva."
    }
  },
  {
    "id": "lpa-97",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Audiencia a Terceros Interesados en Vía de Recurso",
    "statement": "Si de la estimación de un recurso de apelación pudieran derivarse perjuicios para otros interesados que obtuvieron un beneficio en el acto originario (Art. 135 LPA):",
    "options": {
      "A": "Se les dará audiencia previa por un plazo de cinco a diez días hábiles para que formulen los alegatos que estimen oportunos antes de resolver.",
      "B": "Se resuelve en secreto sin notificarles para evitar discusiones acaloradas.",
      "C": "Se cancela el procedimiento y se declara vacante el beneficio.",
      "D": "Debe citarse a un plebiscito municipal popular."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 135 de la LPA ordena que cuando en el recurso aparezcan interesados distintos del recurrente con derechos que pudieran verse afectados por la revocación o anulación del acto, se les conferirá traslado por un plazo no menor de cinco ni mayor de diez días hábiles para alegar lo que a su derecho convenga.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 135.",
    "distractorRationale": {
      "A": "Correcto. Audiencia obligatoria de 5 a 10 días a terceros interesados para evitar indefensión.",
      "B": "La tramitación clandestina atenta de forma irremediable contra el debido proceso (Art. 11 Cn.).",
      "C": "La existencia de conflicto no autoriza suprimir derechos sin previo procedimiento.",
      "D": "Los litigios administrativos individuales o conexos no se deciden por votación plebiscitaria."
    }
  },
  {
    "id": "lpa-98",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Nulidad de Actos en Trámite de Recurso",
    "statement": "Si al conocer de un recurso de apelación, el superior jerárquico constata que el acto de primera instancia fue dictado con omisión absoluta del trámite de prueba admitido legalmente:",
    "options": {
      "A": "Confirmará la resolución para no retrasar las estadísticas del ministerio.",
      "B": "Declarará la nulidad de lo actuado a partir del vicio y retrotraerá el procedimiento al momento oportuno para que se practique la prueba omitida.",
      "C": "Condenará al apelante a pagar las costas procesales del expediente.",
      "D": "Destruirá el expediente y negará haber conocido del asunto."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 133 de la LPA faculta al órgano revisor a resolver anulando el acto por defectos de tramitación esenciales que causen indefensión, mandando a reponer las actuaciones al estado procesal en que se cometió la falta para subsanar el vicio con plenitud de garantías.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 133.",
    "distractorRationale": {
      "A": "Las metas estadísticas internas no pueden anteponerse a la legalidad y debido proceso.",
      "B": "Correcto. La declaratoria de nulidad por indefensión retrotrae las actuaciones al estado de reponer la prueba.",
      "C": "En el procedimiento administrativo común rige la regla de gratuidad sin condena en costas (Art. 4 LPA).",
      "D": "Ocultar actuaciones públicas configura infracción disciplinaria gravísima y delito formal."
    }
  },
  {
    "id": "lpa-99",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Efectos de la Interposición Extemporánea de Recursos",
    "statement": "¿Qué resolución debe dictar la administración si un recurso de apelación es presentado en el día hábil número dieciséis posterior a la notificación (Art. 130 inc. 1° LPA)?",
    "options": {
      "A": "Imponer al recurrente quince días de arresto inconmutable.",
      "B": "Admitirlo obligatoriamente bajo el principio de que los plazos nunca precluyen para el ciudadano.",
      "C": "Declarar la inadmisibilidad del recurso por extemporáneo, adquiriendo el acto administrativo firmeza e inmutabilidad en sede administrativa.",
      "D": "Consultar a la Sala de lo Penal de la CSJ mediante suplicatorio."
    },
    "correctAnswer": "C",
    "explanation": "Los plazos procesales en el derecho público son de estricto orden público y perentorios. Presentar el recurso de apelación fuera del plazo legal de quince días hábiles acarrea forzosamente su declaratoria de inadmisibilidad por extemporaneidad, adquiriendo el acto fuerza de cosa decidida o firmeza.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 130 y Art. 134.",
    "distractorRationale": {
      "A": "La extemporaneidad solo acarrea la inadmisión formal del recurso, jamás privación de libertad.",
      "B": "Los plazos precluyen objetivamente para salvaguardar la seguridad jurídica de terceros y del Estado.",
      "C": "Correcto. La presentación fuera de plazo extingue la vía de recurso por firmeza del acto.",
      "D": "La Sala de lo Penal no conoce de plazos administrativos supletorios en apelaciones civiles."
    }
  },
  {
    "id": "lpa-100",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Revocación de Actos Favorables en Sede Administrativa",
    "statement": "Si la administración descubre que dictó un acto administrativo declarativo de derechos a favor de un particular que adolece de un vicio de mera anulabilidad (Art. 119 LPA y LJCA):",
    "options": {
      "A": "Debe pagarle una indemnización perpetua al beneficiario del acto defectuoso.",
      "B": "Puede dictar un acuerdo secreto anulándolo y decomisando los bienes del particular.",
      "C": "Puede anularlo verbalmente sin necesidad de justificación alguna.",
      "D": "No puede revocarlo por sí misma; debe previamente declararlo lesivo al interés público e interponer la demanda de lesividad ante la Jurisdicción Contencioso Administrativa."
    },
    "correctAnswer": "D",
    "explanation": "El principio de intangibilidad de los actos declarativos de derechos (Art. 119 LPA y Arts. 7 y 26 LJCA) prohíbe que la administración revoque por sí y ante sí actos favorables válidos o anulables. Para revocarlos debe seguir el 'juicio de lesividad': declarar la lesividad al interés público en acuerdo formal y demandar judicialmente su anulación ante el tribunal contencioso.",
    "legalBasis": "Ley de Procedimientos Administrativos Art. 119 y LJCA Arts. 7 y 26.",
    "distractorRationale": {
      "A": "La lesividad persigue salvaguardar el erario, no compensar enriquecimientos sin causa ilícitos.",
      "B": "La revocación unilateral de actos favorables viola la doctrina de los actos propios y seguridad jurídica.",
      "C": "Los actos administrativos se rigen por la formalidad escrita y la motivación razonada.",
      "D": "Correcto. El juicio de lesividad previo es la única vía para anular actos favorables anulables."
    }
  },
  {
    "id": "lpa-101",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Revisión de Oficio de Actos Nulos de Pleno Derecho",
    "statement": "A diferencia de los actos anulables, ¿cómo procede la administración frente a sus propios actos que adolecen de causales de nulidad de pleno derecho del Artículo 36 de la LPA (Art. 118 LPA)?",
    "options": {
      "A": "Debe esperar obligatoriamente cincuenta años a que prescriba la acción.",
      "B": "Podrá declarar de oficio la nulidad de pleno derecho de sus propios actos en cualquier momento, previo dictamen favorable o audiencia de los interesados, al ser la nulidad absoluta insanable e imprescriptible.",
      "C": "Solo puede hacerlo si el particular infractor le entrega una renuncia por escrito.",
      "D": "Está imposibilitada de revisar sus propios actos nulos bajo ninguna vía."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 118 de la LPA faculta a las administraciones públicas para declarar de oficio, en cualquier momento e iniciativa propia, la nulidad de los actos dictados por ellas que adolezcan de vicios de nulidad de pleno derecho (Art. 36 LPA), previa sustanciación de procedimiento con audiencia de los interesados.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 118.",
    "distractorRationale": {
      "A": "La nulidad de pleno derecho no se convalida con el paso del tiempo; es imprescriptible.",
      "B": "Correcto. La revisión de oficio de nulidades absolutas puede ejercerse en cualquier tiempo con audiencia de partes.",
      "C": "La nulidad de orden público no depende del consentimiento ni renuncia de los particulares.",
      "D": "La autotutela administrativa autoriza expulsar del ordenamiento actos radicalmente nulos."
    }
  },
  {
    "id": "lpa-102",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Revocación de Actos de Gravamen o Desfavorables",
    "statement": "Según el Artículo 120 de la LPA, ¿puede la administración revocar sus actos administrativos desfavorables o de gravamen (como sanciones o prohibiciones impuestas)?",
    "options": {
      "A": "Solo si el infractor paga una suma triple a una cuenta bancaria privada.",
      "B": "No, las sanciones son eternas e inmutables y ningún funcionario puede levantarlas jamás.",
      "C": "Sí, las administraciones podrán revocar en cualquier momento sus actos desfavorables o de gravamen, siempre que tal revocación no constituya exención no permitida por la ley, ni sea contraria al ordenamiento jurídico.",
      "D": "Únicamente si la Asamblea Legislativa aprueba una reforma a la Constitución."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 120 de la LPA permite la revocación de actos desfavorables o restrictivos de derechos (actus contrarius favorable) en cualquier momento por razones de oportunidad o legalidad, siempre que no entrañe dispensa ilegal o lesione el interés público o derechos de terceros.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 120.",
    "distractorRationale": {
      "A": "Los cobros a cuentas privadas configuran graves delitos de concusión y corrupción.",
      "B": "El principio de legalidad permite corregir o levantar gravámenes cuando cesan los motivos.",
      "C": "Correcto. Los actos desfavorables pueden revocarse en beneficio del administrado con respeto a la ley.",
      "D": "La revocación en vía administrativa no requiere enmienda del texto constitucional."
    }
  },
  {
    "id": "lpa-103",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Indemnización en Procedimientos de Revisión de Oficio",
    "statement": "Si al declarar de oficio la nulidad de un acto administrativo conforme al Artículo 118 de la LPA se comprueba que un tercero actuó de buena fe y sufrió daños y perjuicios reales:",
    "options": {
      "A": "El órgano que declare la nulidad podrá determinar en la misma resolución la indemnización procedente que deba reconocérsele en concepto de responsabilidad patrimonial de la administración.",
      "B": "El tercero debe asumir las pérdidas económicas sin derecho a ningún reclamo frente al Estado.",
      "C": "Se condena al tercero a prisión por haber confiado en la administración pública.",
      "D": "Se ordena que el titular del ministerio le entregue su vivienda personal."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 118 inciso final de la LPA dispone que al declarar la nulidad de un acto, la administración podrá establecer las indemnizaciones que procedan a favor de los interesados que hubieren actuado de buena fe, haciendo efectiva de oficio la responsabilidad patrimonial del Estado.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 118 inc. final y Art. 55.",
    "distractorRationale": {
      "A": "Correcto. La declaratoria oficiosa de nulidad puede fijar simultáneamente la indemnización al tercero de buena fe.",
      "B": "El principio de responsabilidad estatal tutela al ciudadano frente a la lesión antijurídica (Art. 2 Cn.).",
      "C": "La buena fe no puede ser penada bajo el ordenamiento constitucional.",
      "D": "La indemnización corre a cargo del presupuesto institucional, no del patrimonio privado del funcionario salvo dolo."
    }
  },
  {
    "id": "lpa-104",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Plazo para Demandar en la LJCA tras Agotamiento Expreso",
    "statement": "De conformidad con el Artículo 25 literal a) de la LJCA, ¿cuál es el plazo que tiene el administrado para interponer la demanda contencioso administrativa una vez notificada la resolución del recurso de apelación que agotó la vía?",
    "options": {
      "A": "Veinticuatro horas improrrogables.",
      "B": "Tres días calendario continuos.",
      "C": "Cinco años fiscales prorrogables.",
      "D": "Sesenta días hábiles contados a partir del día siguiente a aquel en que se notificó la resolución del recurso de apelación."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 25 literal a) de la LJCA fija el plazo general de caducidad para el ejercicio de la acción contencioso administrativa en sesenta días hábiles, contados desde el día siguiente a la notificación del acto definitivo que agota formalmente la vía administrativa.",
    "legalBasis": "Ley de la Jurisdicción Contencioso Administrativa, Art. 25 lit. a).",
    "distractorRationale": {
      "A": "Veinticuatro horas es un término sumarísimo de hábeas corpus, no de juicio contencioso administrativo.",
      "B": "Tres días calendario es manifiestamente insuficiente para preparar una demanda especializada con apoderado.",
      "C": "Cinco años corresponde a términos de prescripción liberatoria de obligaciones civiles patrimoniales.",
      "D": "Correcto. El plazo legal perentorio de demanda contenciosa es de 60 días hábiles."
    }
  },
  {
    "id": "lpa-105",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Impugnación de Actos de Sociedades Estatales o Mixtas",
    "statement": "¿Son impugnables mediante la LPA y la LJCA los actos y decisiones unilaterales de autoridad emitidos por empresas públicas o sociedades con participación estatal mayoritaria cuando ejerzan potestades administrativas delegadas?",
    "options": {
      "A": "Solo si la sociedad anónima cotiza en la Bolsa de Valores de Nueva York.",
      "B": "No, por ser sociedades anónimas están totalmente exentas de cumplir con la Constitución y los derechos humanos.",
      "C": "Sí, cuando ejerzan por delegación legal atribuciones y potestades públicas de naturaleza administrativa, sus actos quedan sujetos a la LPA y al control de la Jurisdicción Contencioso Administrativa.",
      "D": "Únicamente si todos los accionistas son ciudadanos mayores de ochenta años."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 2 de la LPA y el Artículo 2 de la LJCA someten a su ámbito subjetivo y objetivo a las entidades creadas por el Estado o sociedades de economía mixta cuando ejerzan potestades de derecho público o presten servicios públicos regulados mediante actos de autoridad.",
    "legalBasis": "Ley de Procedimientos Administrativos Art. 2 y LJCA Art. 2.",
    "distractorRationale": {
      "A": "La cotización en bolsas foráneas no influye en la competencia de la jurisdicción salvadoreña.",
      "B": "La forma societaria no constituye un escudo para sustraerse al imperio del derecho público y de los derechos fundamentales.",
      "C": "Correcto. El ejercicio de potestades administrativas por entes paraestatales atrae el control de legalidad LPA/LJCA.",
      "D": "La composición de edad del accionariado es jurídicamente irrelevante."
    }
  },
  {
    "id": "lpa-106",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Efecto de la Interposición de Amparo Constitucional en los Recursos",
    "statement": "Si un ciudadano interpone un proceso de Amparo ante la Sala de lo Constitucional de la CSJ sin haber hecho uso de los recursos ordinarios de apelación previstos en la LPA:",
    "options": {
      "A": "La demanda de amparo será declarada improcedente por falta de agotamiento de los recursos ordinarios (principio de subsidiariedad del amparo, Art. 12 Ley de Procedimientos Constitucionales).",
      "B": "La Sala de lo Constitucional sustituye de inmediato al ministro emisor del acto.",
      "C": "El juicio de amparo anula automáticamente todas las leyes de la República.",
      "D": "El recurrente es exonerado de por vida de presentar declaraciones de renta."
    },
    "correctAnswer": "A",
    "explanation": "El proceso de amparo constitucional salvadoreño es de naturaleza subsidiaria y extraordinaria (Art. 12 LPC y jurisprudencia uniforme). La omisión injustificada de interponer los recursos ordinarios procedentes y eficaces contemplados en la ley (como la apelación LPA) acarrea la improcedencia liminar del amparo.",
    "legalBasis": "Ley de Procedimientos Constitucionales Art. 12 y Jurisprudencia Sala de lo Constitucional CSJ.",
    "distractorRationale": {
      "A": "Correcto. El amparo exige agotar los recursos ordinarios ordinarios idóneos para remediar la vulneración.",
      "B": "La jurisdicción constitucional no ejerce funciones ejecutivas de administración activa directa.",
      "C": "El amparo solo tiene efectos subjetivos inter partes, no derogatorios erga omnes de leyes.",
      "D": "Las obligaciones tributarias sustantivas permanecen intactas y no se dispensan en sede constitucional."
    }
  },
  {
    "id": "lpa-107",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Recursos contra Disposiciones de Carácter General (Reglamentos)",
    "statement": "Conforme al Artículo 129 inciso 3° de la LPA, ¿proceden los recursos administrativos ordinarios de reconsideración o apelación directamente contra los reglamentos o disposiciones de carácter general?",
    "options": {
      "A": "Los reglamentos son intocables y ninguna corte del mundo puede anularlos.",
      "B": "Sí, cualquier ciudadano puede interponer reconsideración ante el Presidente para que cambie el reglamento.",
      "C": "Proceden siempre que se acompañe de una fianza de un millón de colones.",
      "D": "No cabrá recurso en vía administrativa contra las disposiciones de carácter general; su impugnación se realizará mediante los mecanismos judiciales de control abstracto ante la Sala de lo Constitucional o demanda contenciosa conforme a la LJCA."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 129 inciso 3° de la LPA dispone expresamente que contra las disposiciones administrativas de carácter general no cabrá recurso en vía administrativa. Los reglamentos se impugnan por vía de inconstitucionalidad o en sede contencioso administrativa (impugnación directa o indirecta según Arts. 3 y 8 LJCA).",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 129 inc. 3° y LJCA Art. 8.",
    "distractorRationale": {
      "A": "Los reglamentos subordinados son objeto pleno de control judicial de legalidad y constitucionalidad.",
      "B": "La vía gubernativa no está diseñada para tramitar recursos subjetivos contra normas generales abstractas.",
      "C": "El acceso a la justicia de normas no está sujeto a compra de fianzas prohibitivas.",
      "D": "Correcto. Los reglamentos no admiten recursos administrativos ordinarios; el control es puramente jurisdiccional."
    }
  },
  {
    "id": "lpa-108",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Desistimiento del Recurso Administrativo",
    "statement": "Si el recurrente presenta un escrito desistiendo del recurso de apelación que había interpuesto ante el superior jerárquico (Art. 91 LPA):",
    "options": {
      "A": "El superior debe obligatoriamente dictar sentencia condenatoria contra el apelante.",
      "B": "El superior aceptará de plano el desistimiento y declarará concluido el procedimiento recursivo, adquiriendo el acto recurrido firmeza inmediata, salvo que hubiere terceros interesados personados que insten su continuación.",
      "C": "Se presume que el acto original era nulo y se suspenden todos sus efectos.",
      "D": "El recurrente es obligado a pagar el salario mensual del tribunal superior."
    },
    "correctAnswer": "B",
    "explanation": "De conformidad con los Artículos 91 y 130 de la LPA, el desistimiento del recurso pone fin a la vía impugnativa, haciendo que el acto original alcance firmeza, a menos que existan terceros cointeresados personados que soliciten formalmente la resolución del fondo de la apelación.",
    "legalBasis": "Ley de Procedimientos Administrativos, Arts. 91 y 130.",
    "distractorRationale": {
      "A": "El desistimiento es un acto dispositivo no punible penal ni administrativamente.",
      "B": "Correcto. El desistimiento pone fin al recurso y da firmeza al acto salvo oposición legítima de terceros.",
      "C": "El desistimiento convalida la firmeza del acto originario, no su nulidad.",
      "D": "Los tribunales y autoridades se financian con fondos públicos de la Ley de Presupuesto general."
    }
  },
  {
    "id": "lpa-109",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Efectos del Recurso sobre Terceros que no Recurrieron",
    "statement": "Cuando en un procedimiento sancionador colectivo con varios sancionados uno solo de ellos interpone recurso de apelación y obtiene la revocación total del acto por haberse comprobado la inexistencia de la infracción:",
    "options": {
      "A": "Los efectos estimatorios de la resolución del recurso se extenderán favorablemente a los demás sancionados que se encuentren en idéntica situación jurídica, siempre que no les resulte perjudicial.",
      "B": "La resolución favorable solo favorece a quien pagó el recurso y los demás deben sufrir la sanción ilegal.",
      "C": "Los demás sancionados deben pagar una indemnización compensatoria al recurrente.",
      "D": "El recurso carece de valor jurídico si no lo firmaron unánimemente el 100% de los afectados."
    },
    "correctAnswer": "A",
    "explanation": "En aplicación del principio de igualdad sustantiva (Art. 3 Cn.) y congruencia de los actos administrativos, la revocación de un acto por inexistencia probada del hecho o atipicidad material beneficia en sus efectos favorables a todos los coimputados en idéntica situación fáctica y jurídica.",
    "legalBasis": "Principios Generales del Derecho Administrativo y Art. 3 de la Constitución.",
    "distractorRationale": {
      "A": "Correcto. La revocación por inexistencia del hecho se proyecta a todos los cointeresados en igual situación.",
      "B": "Mantener una sanción por un hecho declarado judicialmente inexistente constituiría una arbitrariedad insostenible.",
      "C": "No existe deber legal de compensación patrimonial entre administrados coimputados.",
      "D": "Cada administrado goza de legitimación activa individual autónoma para impugnar resoluciones."
    }
  },
  {
    "id": "lpa-110",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Nulidad de Notificaciones de Recursos y Reparación",
    "statement": "Si la resolución que desestima un recurso de apelación se notifica con omisión de expresar si contra ella procede demanda ante la LJCA, el plazo para interponerla y el tribunal competente (Art. 98 LPA):",
    "options": {
      "A": "El interesado pierde inmediatamente el derecho de demandar ante los tribunales judiciales.",
      "B": "La notificación es defectuosa y no produce la preclusión del plazo para demandar, computándose este únicamente a partir de que el interesado realice actuaciones que supongan el conocimiento del contenido íntegro del acto.",
      "C": "El acto administrativo se convierte en una ley constitucional irrevisable.",
      "D": "Se anula automáticamente el nombramiento del juez contencioso administrativo."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 98 de la LPA exige que toda notificación contenga el texto íntegro de la resolución con indicación de si pone fin o no a la vía administrativa, la expresión de los recursos que procedan, el órgano ante el que hubieran de presentarse y el plazo para interponerlos. Su omisión hace defectuosa la notificación e impide que corran plazos de caducidad en perjuicio del administrado (Art. 103 LPA).",
    "legalBasis": "Ley de Procedimientos Administrativos, Arts. 98 y 103.",
    "distractorRationale": {
      "A": "El defecto imputable a la administración no puede perjudicar al justiciable.",
      "B": "Correcto. La notificación sin indicación de recursos y plazos es defectuosa y no precluye la acción judicial.",
      "C": "Un acto administrativo no puede transformarse en disposición constitucional.",
      "D": "Los nombramientos judiciales son privativos del Consejo Nacional de la Judicatura y CSJ."
    }
  },
  {
    "id": "lpa-111",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Cómputo de Plazos en Días Hábiles en la LPA",
    "statement": "Conforme al Artículo 146 de la LPA y reglas generales de plazos, ¿cómo se computan los plazos señalados por días en el procedimiento administrativo salvadoreño?",
    "options": {
      "A": "Solo se cuentan los días en que haya luna llena visible en San Salvador.",
      "B": "Se computan como días corridos o continuos de reloj incluyendo festividades de medianoche.",
      "C": "Se entienden siempre referidos a días hábiles, excluyéndose del cómputo los sábados, domingos y los días declarados legalmente inhábiles o de asueto oficial.",
      "D": "Se cuentan únicamente tres horas por cada jornada matutina."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 146 de la LPA y la doctrina común de plazos consagran la regla supletoria básica: siempre que los plazos se señalen por días en el procedimiento administrativo, se entenderá que estos son hábiles, quedando excluidos los sábados, domingos y días de asueto legal remunerado.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 146 y Art. 145 CPCM.",
    "distractorRationale": {
      "A": "Los fenómenos astronómicos carecen de toda incidencia en el calendario judicial o administrativo.",
      "B": "Los días corridos o calendario solo rigen si una ley formal especial así lo prescribe expresamente.",
      "C": "Correcto. La regla supletoria uniforme de la LPA computa estrictamente días hábiles.",
      "D": "La jornada legal computa el día entero hasta la última hora hábil del despacho."
    }
  },
  {
    "id": "lpa-112",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Competencia de los Juzgados y Cámaras Contencioso Administrativas",
    "statement": "Con la entrada en vigencia de la actual LJCA (Decreto Legislativo N° 760), ¿cómo está estructurada la jurisdicción judicial que revisa los recursos administrativos agotados?",
    "options": {
      "A": "Por tribunales militares dependientes del Estado Mayor Conjunto.",
      "B": "Un juzgado único centralizado en la Alcaldía Mayor de San Salvador.",
      "C": "Exclusivamente por comités de vecinos nombrados por sorteo en cada barrio.",
      "D": "Estructurada en dos instancias judiciales especializadas ordinarias: Juzgados de lo Contencioso Administrativo (1ª instancia) y Cámaras de lo Contencioso Administrativo (2ª instancia), con sede de casación en la Sala de lo Contencioso Administrativo de la CSJ."
    },
    "correctAnswer": "D",
    "explanation": "La LJCA vigente democratizó y descentralizó el acceso a la justicia administrativa, creando juzgados de primera instancia en las tres zonas del país (central, occidental y oriental), cámaras de segunda instancia para las apelaciones judiciales, y reservando a la Sala de lo Contencioso Administrativo el conocimiento de la casación y de juicios contra altas autoridades del Estado.",
    "legalBasis": "Ley de la Jurisdicción Contencioso Administrativa, Arts. 11 a 15.",
    "distractorRationale": {
      "A": "La jurisdicción militar está estrictamente limitada a delitos puramente militares (Art. 216 Cn.).",
      "B": "La justicia contenciosa es del Órgano Judicial, no de alcaldías municipales.",
      "C": "No existe juicio por jurado vecinal lego en litigios contencioso administrativos.",
      "D": "Correcto. Estructura piramidal judicial: Juzgados de 1ª instancia, Cámaras de apelación y Sala en casación."
    }
  },
  {
    "id": "lpa-113",
    "category": "recursos-administrativos",
    "categoryLabel": "Recursos (Reconsideración & Apelación)",
    "area": "Suspensión de Efectos en Sede Judicial Contenciosa",
    "statement": "Cuando se interpone la demanda contencioso administrativa ante el Juzgado de lo Contencioso Administrativo tras agotar los recursos de la LPA, ¿puede el juez judicial decretar la suspensión de los efectos del acto?",
    "options": {
      "A": "No, los jueces judiciales tienen prohibido intervenir en decisiones de la administración pública.",
      "B": "Sí, el juzgador judicial puede decretar la medida cautelar de suspensión prejudicial o judicial del acto administrativo conforme a los Artículos 19 a 23 de la LJCA, garantizando la eficacia de la eventual sentencia estimatoria.",
      "C": "Solo si la administración demandada consiente expresamente en ser suspendida.",
      "D": "Únicamente en litigios sobre animales domésticos."
    },
    "correctAnswer": "B",
    "explanation": "Los Artículos 19 al 23 de la LJCA regulan de forma amplia la tutela cautelar judicial: los jueces contenciosos administrativos están plenamente facultados para dictar medidas cautelares positivas o de suspensión de efectos del acto impugnado para evitar que el fallo final quede ilusorio, ponderando el daño irreparable y la apariencia de buen derecho.",
    "legalBasis": "Ley de la Jurisdicción Contencioso Administrativa, Arts. 19 al 23.",
    "distractorRationale": {
      "A": "La potestad de juzgar y hacer ejecutar lo juzgado corresponde con exclusividad al Órgano Judicial (Art. 172 Cn.).",
      "B": "Correcto. La tutela cautelar judicial contenciosa es un derecho constitucional a la efectividad de la justicia.",
      "C": "La medida judicial es imperativa y no se somete a la complacencia de la administración demandada.",
      "D": "Abarca todas las materias del derecho administrativo económico, ambiental, sancionador, tributario y funcionarial."
    }
  },
  {
    "id": "lpa-114",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Principio de Separación Orgánica Instructora y Sancionadora",
    "statement": "En el procedimiento administrativo sancionador salvadoreño regulado por el Artículo 141 de la LPA, ¿cuál es la garantía estructural obligatoria para salvaguardar la imparcialidad del juzgador?",
    "options": {
      "A": "Que el procedimiento se resuelva en secreto sin informar al imputado de las pruebas recabadas.",
      "B": "Que el denunciante sea el mismo funcionario que dicte y ejecute la sanción.",
      "C": "La separación orgánica estricta entre la fase instructora (que investiga e imputa cargos) y la fase sancionadora (que decide e impone la sanción), encomendadas a unidades o funcionarios distintos.",
      "D": "Que las sanciones pecuniarias se cobren antes de iniciar la investigación."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 141 de la LPA instituye la separación entre la fase instructora y la sancionadora: 'En ningún caso podrá encomendarse la instrucción y la resolución del procedimiento sancionador a la misma unidad o funcionario'. Esta separación garantiza que el funcionario que decide no tenga prejuicios derivados de la labor de investigación acusatoria.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 141 inc. 2°.",
    "distractorRationale": {
      "A": "Los procedimientos inquisitivos secretos están terminantemente prohibidos por la Constitución.",
      "B": "Ser juez y parte vulnera el principio acusatorio y el debido proceso.",
      "C": "Correcto. La separación entre unidad instructora y decisora es garantía esencial de imparcialidad.",
      "D": "Cobrar antes de investigar viola la presunción de inocencia (Art. 12 Cn.)."
    }
  },
  {
    "id": "lpa-115",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Plazos de Prescripción de Infracciones Administrativas",
    "statement": "Salvo que una ley especial establezca plazos distintos, ¿cuáles son los plazos supletorios de prescripción de las infracciones administrativas contemplados en el Artículo 143 de la LPA?",
    "options": {
      "A": "Leves en un año, graves en dos años y muy graves en tres años.",
      "B": "Todas las infracciones prescriben a los quince días de cometidas.",
      "C": "Las infracciones administrativas no prescriben jamás bajo ninguna circunstancia.",
      "D": "Diez años para infracciones leves y veinte años para infracciones graves."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 143 de la LPA fija que, en defecto de norma especial, las infracciones muy graves prescribirán a los tres años, las graves a los dos años y las leves al año, contados a partir del día en que la infracción se hubiere cometido.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 143.",
    "distractorRationale": {
      "A": "Correcto. La escala de prescripción supletoria es 1 año (leve), 2 años (grave) y 3 años (muy grave).",
      "B": "Quince días es insuficiente para la potestad fiscalizadora del Estado.",
      "C": "La imprescriptibilidad general atentaría contra la seguridad jurídica (Art. 1 Cn.).",
      "D": "Diez y veinte años corresponden a penas de prisión del Código Penal, no a infracciones administrativas."
    }
  },
  {
    "id": "lpa-116",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Principio de Legalidad y Reserva de Ley Formal Punitiva",
    "statement": "El Artículo 138 de la LPA consagra el principio de legalidad sancionadora. ¿Qué norma jurídica es la única habilitada constitucionalmente para tipificar infracciones e imponer sanciones administrativas?",
    "options": {
      "A": "El estatuto interno de un sindicato laboral privado.",
      "B": "Cualquier memorando interno de un jefe de departamento municipal.",
      "C": "Una circular verbal emitida por un oficial de seguridad de una institución autónoma.",
      "D": "Únicamente la ley en sentido formal emitida por la Asamblea Legislativa, sin que los reglamentos ejecutivos puedan crear infracciones no previstas en la ley."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 138 de la LPA consagra el principio de reserva de ley: el ejercicio de la potestad sancionadora requiere cobertura en norma con rango de ley formal. Las disposiciones reglamentarias podrán únicamente especificar o graduar las infracciones o sanciones previamente tipificadas por la ley formal sin constituir nuevas conductas punibles.",
    "legalBasis": "Ley de Procedimientos Administrativos Art. 138 y Art. 86 Cn.",
    "distractorRationale": {
      "A": "Los estatutos sindicales rigen a sus afiliados en materia interna, no imponen sanciones públicas estatales.",
      "B": "Los memorandos carecen de rango legislativo para vulnerar derechos patrimoniales o libertades.",
      "C": "Las circulares no pueden generar ilícitos punibles conforme al principio de legalidad penal y administrativa.",
      "D": "Correcto. Reserva absoluta de ley formal para crear tipos infractores y sanciones."
    }
  },
  {
    "id": "lpa-117",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Principio de Tipicidad y Prohibición de Analogía",
    "statement": "De conformidad con el Artículo 139 de la LPA, ¿cómo debe proceder la administración frente a una conducta reprochable que no encaja de forma exacta en ninguna infracción tipificada en la ley?",
    "options": {
      "A": "Debe aplicar la sanción de un delito penal de homicidio por analogía de gravedad.",
      "B": "Debe inventar una sanción basándose en el sentido común del instructor.",
      "C": "No puede sancionar; queda terminantemente prohibida la aplicación analógica o extensiva de normas sancionadoras in malam partem.",
      "D": "Puede imponer una sanción si el presunto infractor resulta antipático al público."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 139 de la LPA impone el principio de tipicidad: constituyen infracciones administrativas únicamente las conductas expresamente descritas como tales en las leyes. Queda terminantemente proscrita la analogía in malam partem o la interpretación extensiva de preceptos sancionadores en perjuicio del administrado.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 139.",
    "distractorRationale": {
      "A": "Las penas privativas de libertad de homicidio son materia penal exclusiva de jueces penales.",
      "B": "El arbitrio subjetivo está proscrito por el principio de vinculación positiva a la ley.",
      "C": "Correcto. Nullum crimen, nulla poena sine lege praevia et stricta: prohibida la analogía punitiva.",
      "D": "Las percepciones morales o de simpatía no constituyen fundamento de tipicidad jurídica."
    }
  },
  {
    "id": "lpa-118",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Principio de Irretroactividad y Retroactividad de la Ley Más Favorable",
    "statement": "Según el Artículo 140 de la LPA y el Artículo 21 de la Constitución salvadoreña, ¿en qué único caso pueden aplicarse disposiciones sancionadoras administrativas de manera retroactiva?",
    "options": {
      "A": "Únicamente en cuanto favorezcan al presunto infractor o sancionado, tanto en lo que se refiere a la tipificación de la infracción como a la cuantía de la sanción o al plazo de prescripción.",
      "B": "Siempre que el nuevo ministro decida aumentar las multas para recaudar mayores ingresos fiscales.",
      "C": "Únicamente si la infracción fue cometida en día domingo.",
      "D": "Cuando el infractor no posea bienes inscritos en el Registro de Comercio."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 140 de la LPA instituye la retroactividad de la norma sancionadora más favorable (lex mitior): las disposiciones sancionadoras producirán efecto retroactivo exclusivamente cuando beneficien al imputado o sancionado, extinguiendo la infracción, atenuando la sanción o reduciendo el plazo de prescripción.",
    "legalBasis": "Ley de Procedimientos Administrativos Art. 140 y Constitución Art. 21.",
    "distractorRationale": {
      "A": "Correcto. La retroactividad benigna es un mandato garantista constitucional y administrativo insoslayable.",
      "B": "La retroactividad desfavorable está prohibida taxativamente por el Art. 21 de la Constitución.",
      "C": "El día de comisión no autoriza vulnerar el principio de legalidad e irretroactividad.",
      "D": "La insolvencia patrimonial no altera las reglas temporales de aplicación de normas punitivas."
    }
  },
  {
    "id": "lpa-119",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Principio de Culpabilidad y Proscripción de Responsabilidad Objetiva",
    "statement": "El Artículo 142 de la LPA proscribe tajantemente la responsabilidad objetiva pura en el derecho administrativo sancionador. ¿Qué elemento subjetivo indispensable debe acreditarse para imponer una sanción?",
    "options": {
      "A": "La pertenencia a una determinada clase social o económica.",
      "B": "El simple resultado material lesivo sin importar que haya mediado fuerza mayor o caso fortuito.",
      "C": "La sospecha subjetiva de los vecinos del vecindario.",
      "D": "La existencia necesaria de dolo (intención deliberada) o culpa (negligencia, impericia o descuido inexcusable) imputable a la persona natural o jurídica investigada."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 142 de la LPA estipula que solo podrán ser sancionadas por hechos constitutivos de infracción administrativa las personas que resulten responsables de los mismos a título de dolo o culpa. La responsabilidad objetiva pura (sin culpa) es incompatible con el Estado de Derecho garantista.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 142.",
    "distractorRationale": {
      "A": "La discriminación socioeconómica viola frontalmente el principio de igualdad (Art. 3 Cn.).",
      "B": "Castigar el mero resultado sin dolo ni negligencia infringe el Art. 12 de la Constitución.",
      "C": "Las sospechas vecinales no constituyen prueba del elemento subjetivo de culpabilidad.",
      "D": "Correcto. El principio de culpabilidad exige imputación objetiva y dolo o negligencia acreditada."
    }
  },
  {
    "id": "lpa-120",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Excluyentes de Responsabilidad Sancionadora",
    "statement": "Conforme al Artículo 142 inciso 2° de la LPA, ¿cuál de las siguientes circunstancias constituye una eximente completa de responsabilidad que impide sancionar administrativamente al imputado?",
    "options": {
      "A": "El desconocimiento de que las multas debían pagarse en moneda de curso legal.",
      "B": "El caso fortuito, la fuerza mayor plenamente acreditada y el error invencible de hecho o de derecho.",
      "C": "Tener prisa para llegar a un compromiso social recreativo.",
      "D": "Haber consumido bebidas alcohólicas voluntariamente antes de cometer la falta."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 142 inciso 2° de la LPA consagra las causas de justificación e inculpabilidad clásicas: están exentos de responsabilidad sancionadora quienes hayan actuado amparados por caso fortuito, fuerza mayor insuperable o error invencible de prohibición debidamente probado.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 142 inc. 2°.",
    "distractorRationale": {
      "A": "El error de derecho vencible o la ignorancia culpable de la ley no exime de su cumplimiento (Art. 8 C.C.).",
      "B": "Correcto. Fuerza mayor, caso fortuito y error invencible excluyen la culpabilidad del hecho.",
      "C": "La prisa personal no justifica la transgresión de deberes legales de orden público.",
      "D": "La embriaguez voluntaria no exime de responsabilidad y puede constituir una agravante."
    }
  },
  {
    "id": "lpa-121",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Principio de Proporcionalidad en la Graduación de Sanciones",
    "statement": "El Artículo 144 de la LPA enumera los criterios de proporcionalidad para determinar la gravedad y cuantía de la sanción administrativa. ¿Cuál de los siguientes criterios debe ponderarse obligatoriamente?",
    "options": {
      "A": "El grado de intencionalidad, la reincidencia, la gravedad del daño causado al interés público o a terceros y el beneficio económico ilícito obtenido por la comisión de la infracción.",
      "B": "La afiliación política del cónyuge del infractor.",
      "C": "La marca del automóvil en que el ciudadano se transportó a la audiencia.",
      "D": "El número de seguidores que tenga el administrado en plataformas digitales."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 144 de la LPA exige que la sanción guarde estricta proporción con la gravedad del hecho, valorando: intencionalidad, reiteración, reincidencia (infracciones firmes en 1 año), gravedad del perjuicio ocasionado y el provecho o lucro económico derivado de la infracción.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 144.",
    "distractorRationale": {
      "A": "Correcto. Intencionalidad, reincidencia, daño y beneficio ilícito son los baremos de proporcionalidad.",
      "B": "Criterios familiares o ideológicos vulnerarían la neutralidad y la imparcialidad.",
      "C": "El vehículo utilizado es impertinente salvo que haya sido el instrumento material de la infracción.",
      "D": "La popularidad en redes sociales no forma parte del análisis jurídico punitivo objetivo."
    }
  },
  {
    "id": "lpa-122",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Concepto Legal de Reincidencia Administrativa",
    "statement": "De acuerdo con el Artículo 144 literal d) de la LPA, ¿cuándo se configura técnicamente la agravante de reincidencia en el derecho sancionador salvadoreño?",
    "options": {
      "A": "Cuando el ciudadano comete cualquier infracción distinta en un lapso de cincuenta años.",
      "B": "Cuando el infractor cometa una nueva infracción de la misma naturaleza dentro del término de un año contado a partir de la fecha en que adquirió firmeza la sanción anterior.",
      "C": "Cuando el administrado protesta verbalmente contra una multa.",
      "D": "Solo si el infractor tiene antecedentes de condena penal en juicio con jurado."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 144 literal d) de la LPA define la reincidencia como la comisión de más de una infracción de la misma naturaleza en el término de un año, siempre que la resolución sancionadora precedente haya alcanzado firmeza formal en vía administrativa.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 144 lit. d).",
    "distractorRationale": {
      "A": "Cincuenta años excede por completo la memoria punitiva y plazos de cancelación de antecedentes.",
      "B": "Correcto. Misma naturaleza, firmeza del acto previo y ocurrencia en el lapso de un año.",
      "C": "La protesta pacífica es ejercicio de la libertad de expresión, no reincidencia infractora.",
      "D": "La reincidencia administrativa se nutre de antecedentes administrativos firmes, no penales ajenos."
    }
  },
  {
    "id": "lpa-123",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Principio de Non Bis in Idem Material",
    "statement": "¿Qué garantía sustantiva reconoce el Artículo 145 de la LPA a través de la vertiente material del principio de Non bis in idem?",
    "options": {
      "A": "Que las multas administrativas se pagan dos veces: una en el banco y otra en la alcaldía.",
      "B": "Que todo ciudadano debe ser juzgado y sancionado dos veces obligatoriamente por cada falta.",
      "C": "No podrán sancionarse los hechos que hayan sido sancionados penal o administrativamente, en los casos en que se aprecie la triple identidad de sujeto, hecho y fundamento.",
      "D": "Que la administración puede cambiar de criterio y reabrir el caso cuando quiera."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 145 inc. 1° de la LPA consagra el principio de Non bis in idem material: prohíbe imponer una doble sanción (sea en vía penal o administrativa acumulada) cuando exista identidad de sujeto imputado, hechos fácticos constitutivos y fundamento jurídico tutelado.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 145 inc. 1° y Art. 11 Cn.",
    "distractorRationale": {
      "A": "No existe duplicidad de cobros legítima bajo la legislación tributaria o sancionatoria.",
      "B": "Sancionar dos veces quebrantaría de raíz el principio universal de seguridad jurídica.",
      "C": "Correcto. Prohibición de doble castigo ante identidad de sujeto, hecho y fundamento.",
      "D": "La reapertura arbitraria viola la firmeza de la cosa juzgada y el non bis in idem."
    }
  },
  {
    "id": "lpa-124",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Vertiente Procesal del Non Bis in Idem y Prevalencia Penal",
    "statement": "Si durante la instrucción de un procedimiento administrativo sancionador se advierten indicios de que los hechos investigados pudieran constituir delito tipificado en el Código Penal (Art. 145 inc. 2° LPA):",
    "options": {
      "A": "La administración acelera el cobro de la multa para ganarle a la Fiscalía.",
      "B": "El instructor debe dictar una pena de diez años de prisión de forma sumaria.",
      "C": "Se archiva todo y no se informa a nadie para que el hecho quede impune.",
      "D": "El órgano instructor suspenderá el procedimiento administrativo sancionador y pondrá los hechos en conocimiento de la Fiscalía General de la República (FGR), estando a lo que resulte del proceso penal."
    },
    "correctAnswer": "D",
    "explanation": "El orden jurisdiccional penal tiene preferencia sobre la potestad sancionadora administrativa (Art. 145 inc. 2° LPA). Si la autoridad administrativa constata posible delito, debe suspender su trámite y remitir testimonio a la FGR. Además, los hechos declarados probados por sentencia penal firme vincularán obligatoriamente a la administración.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 145 incs. 2° y 3°.",
    "distractorRationale": {
      "A": "La celeridad económica no puede sobreponerse a la primacía de la persecución penal del Estado.",
      "B": "La administración no tiene competencia penal para dictar penas carcelarias (Art. 172 Cn.).",
      "C": "Ocultar indicios delictivos configuraría omisión de aviso o encubrimiento de funcionario.",
      "D": "Correcto. Suspensión obligatoria y remisión a la FGR por prevalencia de la jurisdicción penal."
    }
  },
  {
    "id": "lpa-125",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Vinculación a los Hechos Probados en Sentencia Penal",
    "statement": "Conforme al Artículo 145 inciso final de la LPA, si un juzgado penal dicta sentencia absolutoria declarando que los hechos imputados 'no existieron materialmente':",
    "options": {
      "A": "La administración puede ignorar libremente la sentencia penal y aplicar la sanción administrativa máxima.",
      "B": "Dicha declaración vincula inexcusablemente a la administración pública, la cual no podrá sancionar administrativamente al administrado basándose en esos mismos hechos fácticos declarados inexistentes.",
      "C": "El funcionario instructor puede apelar la sentencia penal en representación de la víctima.",
      "D": "El imputado debe pagar una fianza de desagravio al ministerio acusador."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 145 inciso final de la LPA prescribe con fuerza imperativa que la resolución judicial penal que declare probada o inexistente la realidad de los hechos investigados vinculará de manera plena a las autoridades administrativas respecto de los procedimientos sancionadores que sustancien.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 145 inc. final.",
    "distractorRationale": {
      "A": "Ignorar la sentencia penal vulneraría la unidad del ordenamiento jurídico y el non bis in idem.",
      "B": "Correcto. Los hechos declarados inexistentes en sede penal vinculan a la administración pública.",
      "C": "La apelación penal es privativa de las partes procesales penales y la FGR (Art. 193 Cn.).",
      "D": "No existe el desagravio patrimonial hacia la administración frente a una absolución penal."
    }
  },
  {
    "id": "lpa-126",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Acuerdo de Iniciación y Pliego de Cargos",
    "statement": "El procedimiento administrativo sancionador se iniciará siempre de oficio (Art. 146 LPA). ¿Cuál es el contenido esencial obligatorio del acuerdo formal de iniciación o pliego de cargos?",
    "options": {
      "A": "Una invitación formal para una cena de camaradería burocrática.",
      "B": "Únicamente la fecha de nacimiento del funcionario acusador.",
      "C": "Identificación de la persona o entidad presuntamente responsable, los hechos imputados, las infracciones que tales hechos puedan constituir, las posibles sanciones aplicables y el órgano instructor competente.",
      "D": "La orden irrevocable de decomiso definitivo de todos los bienes de la empresa sin darle audiencia."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 146 de la LPA exige que el acuerdo de incoación contenga los cargos de manera individualizada: la persona investigada, los hechos fácticos concretos, la calificación jurídica de la presunta infracción, las sanciones posibles y la designación del instructor, garantizando que el administrado conozca de qué se le acusa.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 146.",
    "distractorRationale": {
      "A": "El procedimiento sancionador es una manifestación del ius puniendi, no una reunión social.",
      "B": "Los datos privados del acusador no constituyen el contenido de imputación de cargos.",
      "C": "Correcto. El acuerdo delimita la imputación concreta para habilitar el ejercicio efectivo del derecho de defensa.",
      "D": "El decomiso definitivo previo sin audiencia violaría la garantía de presunción de inocencia."
    }
  },
  {
    "id": "lpa-127",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Plazo para Contestar el Pliego de Cargos",
    "statement": "De conformidad con el Artículo 146 inciso 2° de la LPA, ¿cuál es el plazo que se concede al presunto infractor tras la notificación del pliego de cargos para formular descargos y proponer pruebas?",
    "options": {
      "A": "Un plazo perentorio de diez días hábiles.",
      "B": "Dos horas continuas sin derecho a consulta de documentos.",
      "C": "Seis meses calendario prorrogables indefinidamente.",
      "D": "No se concede plazo; la sanción se impone en el mismo acto de notificación."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 146 inciso 2° de la LPA dispone que notificado el acuerdo de iniciación con el pliego de cargos, se otorgará al presunto responsable un plazo de diez días hábiles para que comparezca, conteste los hechos formulando las alegaciones de descargo que estime convenientes y proponga los medios probatorios de que intente valerse.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 146 inc. 2°.",
    "distractorRationale": {
      "A": "Correcto. El plazo legal garantista para contestar descargos y ofrecer pruebas es de 10 días hábiles.",
      "B": "Dos horas vulneraría gravemente el derecho constitucional a preparar una defensa idónea.",
      "C": "Seis meses excedería la necesidad de tramitación expedita de los procedimientos punitivos.",
      "D": "Imponer sanciones sin plazo de descargo constituye una violación grosera del debido proceso."
    }
  },
  {
    "id": "lpa-128",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Garantía de Presunción de Inocencia",
    "statement": "Conforme al Artículo 147 de la LPA, ¿cómo se materializa la presunción de inocencia en el procedimiento administrativo sancionador salvadoreño?",
    "options": {
      "A": "La administración no tiene obligación de aportar pruebas si el funcionario afirma haber visto el hecho.",
      "B": "El investigado se presume culpable desde el inicio y debe pagar para limpiar su nombre.",
      "C": "Basta una denuncia anónima para tener por acreditados los hechos sin requerir más pruebas.",
      "D": "Los procedimientos sancionadores respetarán la presunción de no existencia de responsabilidad administrativa mientras no se demuestre lo contrario, recayendo la carga de la prueba exclusivamente en la administración."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 147 de la LPA traslada con todo su vigor el principio de presunción de inocencia (Art. 12 Cn.) a la sede administrativa. La carga de desvirtuar dicha presunción aportando prueba de cargo lícita, idónea y suficiente recae enteramente en la administración acusadora.",
    "legalBasis": "Ley de Procedimientos Administrativos Art. 147 y Art. 12 Cn.",
    "distractorRationale": {
      "A": "El testimonio del funcionario está sujeto a valoración racional y no goza de infalibilidad dogmática.",
      "B": "Invertir la presunción imponiendo culpabilidad a priori destruye el Estado constitucional de derecho.",
      "C": "La denuncia anónima puede originar investigación previa, pero jamás constituye por sí sola prueba de cargo.",
      "D": "Correcto. Presunción de inocencia y carga de la prueba a cargo exclusivo del ente instructor."
    }
  },
  {
    "id": "lpa-129",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Derecho a no Autoincriminarse",
    "statement": "El Artículo 146 inciso 3° de la LPA consagra los derechos de defensa del investigado. ¿Qué potestad tiene el imputado frente a los requerimientos de declaración personal en el procedimiento sancionador?",
    "options": {
      "A": "Debe contestar afirmativamente todo lo que pregunte el instructor policial.",
      "B": "Obligación de someterse al detector de mentiras (polígrafo) bajo apercibimiento de desacato.",
      "C": "Derecho a no declarar contra sí mismo, a no confesarse culpable y a guardar silencio, sin que de ello pueda deducirse por sí sola una presunción de culpabilidad.",
      "D": "Pierde todos sus derechos civiles si se niega a firmar una confesión."
    },
    "correctAnswer": "C",
    "explanation": "En armonía con el Artículo 12 de la Constitución, el administrado investigado en sede sancionadora goza del derecho al silencio y de la garantía contra la autoincriminación involuntaria. Su negativa a declarar o confesarse culpable no puede ser utilizada por la autoridad como indicio automático de culpabilidad.",
    "legalBasis": "Ley de Procedimientos Administrativos Art. 146 inc. 3° y Art. 12 Cn.",
    "distractorRationale": {
      "A": "No existe deber legal de ratificar imputaciones que el administrado rechaza.",
      "B": "El polígrafo obligatorio vulnera la dignidad humana y el derecho a no autoincriminarse.",
      "C": "Correcto. Derecho a guardar silencio y a no autoincriminarse sin deducción de culpabilidad.",
      "D": "El ejercicio legítimo de un derecho fundamental jamás acarrea la pérdida de la capacidad civil."
    }
  },
  {
    "id": "lpa-130",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Medidas Provisionales en Materia Sancionadora",
    "statement": "De conformidad con el Artículo 148 de la LPA, ¿qué límites infranqueables rigen la adopción de medidas provisionales o cautelares durante la instrucción del expediente sancionador?",
    "options": {
      "A": "No podrán adoptarse medidas provisionales que puedan causar perjuicios de difícil o imposible reparación a los interesados o que impliquen violación de derechos amparados por las leyes.",
      "B": "Pueden adoptarse medidas de clausura definitiva del negocio como escarmiento ejemplar antes del fallo.",
      "C": "Se autoriza el arresto domiciliario perpetuo del investigado.",
      "D": "No existe ningún límite; la administración puede confiscar los bienes de la empresa."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 148 de la LPA impone estrictos límites de proporcionalidad y menor onerosidad a las medidas cautelares sancionadoras (como clausuras temporales o suspensiones de actividades): no pueden constituir sanciones anticipadas ni generar daños irreversibles o irreparables a la esfera jurídica del imputado.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 148.",
    "distractorRationale": {
      "A": "Correcto. Prohibición de medidas desproporcionadas o causantes de daños irreparables irreversibles.",
      "B": "La clausura definitiva es una sanción de fondo que solo puede ordenarse en la resolución final firme.",
      "C": "El arresto o privación de libertad es materia privativa de la jurisdicción penal.",
      "D": "La confiscación está terminantemente proscrita por el Art. 106 de la Constitución salvadoreña."
    }
  },
  {
    "id": "lpa-131",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Propuesta de Resolución y Audiencia Final",
    "statement": "Una vez concluida la instrucción del procedimiento sancionador (Art. 149 LPA), ¿qué documento debe elaborar el órgano instructor y qué trámite debe cumplir antes de elevarlo al órgano decisor?",
    "options": {
      "A": "Debe consultar al alcalde municipal en sesión secreta.",
      "B": "Debe dictar inmediatamente la sentencia de multa y ordenar su embargo en veinticuatro horas.",
      "C": "Debe destruir las pruebas de descargo que presentó el imputado.",
      "D": "Formulará una propuesta de resolución motivada fijando los hechos, la calificación jurídica y la sanción propuesta, notificándola al interesado para que en un plazo de cinco a diez días hábiles formule alegatos finales."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 149 de la LPA regula la propuesta de resolución: el instructor resume la prueba de cargo y descargo, califica la falta y propone la sanción, poniéndola de manifiesto al imputado por un plazo no menor de 5 ni mayor de 10 días hábiles para sus alegaciones finales antes de remitir el expediente al órgano sancionador.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 149.",
    "distractorRationale": {
      "A": "La resolución se rige por las reglas objetivas del expediente, no por acuerdos secretos.",
      "B": "El órgano instructor carece de competencia sancionadora directa por el principio de separación orgánica.",
      "C": "Ocultar pruebas de descargo vulnera el derecho de defensa y causa nulidad de pleno derecho.",
      "D": "Correcto. Propuesta motivada y trámite obligatorio de alegaciones finales de 5 a 10 días hábiles."
    }
  },
  {
    "id": "lpa-132",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Principio de Congruencia de la Resolución Sancionadora",
    "statement": "Según el Artículo 150 de la LPA, ¿puede el órgano competente para sancionar imponer una multa por hechos que no fueron contemplados en el pliego de cargos ni en la propuesta de resolución?",
    "options": {
      "A": "Sí, el sancionador puede agregar cualquier hecho nuevo que se le ocurra al momento de redactar la resolución.",
      "B": "No, en la resolución sancionadora no se podrán aceptar hechos distintos de los determinados en el curso del procedimiento, salvaguardando la congruencia y el derecho de defensa.",
      "C": "Sí, siempre que los hechos nuevos hayan sido denunciados en una llamada telefónica.",
      "D": "Queda a la libre discreción judicial sin ningún límite formal."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 150 de la LPA exige rigurosa congruencia entre la acusación y la resolución final: la autoridad no puede fundamentar la sanción en hechos fácticos nuevos sobre los cuales el administrado no tuvo oportunidad procesal previa de defenderse y aportar pruebas de descargo.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 150.",
    "distractorRationale": {
      "A": "Incorporar hechos sorpresivos en la resolución causa indefensión material absoluta.",
      "B": "Correcto. El principio de congruencia impide sancionar sobre hechos fácticos no imputados previamente.",
      "C": "Las denuncias informales no suplen el pliego de cargos ni la instrucción probatoria contradictoria.",
      "D": "La potestad sancionadora es reglada y sometida al principio de legalidad (Art. 86 Cn.)."
    }
  },
  {
    "id": "lpa-133",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Ejecutividad de las Sanciones Administrativas",
    "statement": "De conformidad con el Artículo 151 de la LPA, ¿en qué momento exacto adquiere fuerza ejecutiva y exigibilidad coactiva una resolución administrativa sancionadora?",
    "options": {
      "A": "Únicamente cuando la resolución sancionadora adquiera firmeza en la vía administrativa (al haberse resuelto la apelación o vencido el plazo legal para interponerla sin que se haya recurrido).",
      "B": "Inmediatamente desde que se firma en primera instancia, aunque esté pendiente el recurso de apelación.",
      "C": "Diez años después de haber sido publicada en redes sociales.",
      "D": "Solo si el infractor voluntariamente autoriza el cobro de la multa."
    },
    "correctAnswer": "A",
    "explanation": "A diferencia de los actos administrativos generales, las resoluciones sancionadoras no son ejecutivas de inmediato si son recurridas. El Artículo 151 de la LPA establece taxativamente que las sanciones administrativas solo serán ejecutivas cuando hayan adquirido firmeza en la vía administrativa ordinaria.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 151.",
    "distractorRationale": {
      "A": "Correcto. La ejecutoriedad de la sanción está en suspenso hasta que el acto adquiera firmeza en vía administrativa.",
      "B": "Cobrar o ejecutar una sanción antes de resolver la apelación violaría la presunción de inocencia y el Art. 151 LPA.",
      "C": "El plazo de diez años no guarda consonancia con los términos legales de firmeza y ejecución.",
      "D": "La ejecución coactiva opera sin necesidad de consentimiento una vez alcanzada la firmeza de ley."
    }
  },
  {
    "id": "lpa-134",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Cómputo del Plazo de Prescripción de Infracciones",
    "statement": "El Artículo 143 de la LPA fija las reglas de inicio del cómputo de la prescripción de las infracciones. ¿A partir de qué momento exacto comienza a correr el plazo?",
    "options": {
      "A": "Desde el día del nacimiento del funcionario que detectó la falta.",
      "B": "A partir del día en que la infracción se hubiere cometido formalmente, o en las infracciones continuadas o permanentes, desde que cese la conducta infractora.",
      "C": "Desde que la institución agote su presupuesto de operaciones anual.",
      "D": "Únicamente a partir de que el infractor admita voluntariamente los hechos en escritura pública."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 143 de la LPA consagra la regla común objetiva: el plazo de prescripción de las infracciones comenzará a contarse desde el día en que la infracción se hubiere consumado, y en las continuadas (que se prolongan en el tiempo), a partir del día en que cese la conducta ilícita.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 143.",
    "distractorRationale": {
      "A": "La fecha de nacimiento del funcionario es un elemento biográfico completamente inconexo.",
      "B": "Correcto. Corre desde la consumación o desde el cese en conductas continuadas permanentes.",
      "C": "El presupuesto de la entidad no tiene relación con el cómputo de la extinción de ilícitos.",
      "D": "La prescripción opera por el simple transcurso objetivo del tiempo legal, no por confesión."
    }
  },
  {
    "id": "lpa-135",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Interrupción del Plazo de Prescripción de la Infracción",
    "statement": "Según el Artículo 143 inciso 2° de la LPA, ¿qué actuación formal tiene la virtud de interrumpir el plazo de prescripción de una infracción administrativa?",
    "options": {
      "A": "La simple visita de inspección de rutina de un técnico sin levantar acta de cargos.",
      "B": "Cualquier rumor publicado en un medio de comunicación digital.",
      "C": "La iniciación del procedimiento sancionador debidamente notificada al presunto responsable, reanudándose el cómputo si el expediente permanece paralizado durante más de un mes por causa no imputable al infractor.",
      "D": "La solicitud verbal de un diputado en una entrevista matutina."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 143 inciso 2° de la LPA dispone que la prescripción se interrumpirá por la iniciación, con conocimiento formal del interesado, del procedimiento sancionador. No obstante, si el expediente se paraliza durante más de un mes por causa no imputable al presunto responsable, se reanudará el cómputo de la prescripción.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 143 inc. 2°.",
    "distractorRationale": {
      "A": "Las visitas ordinarias informativas no constituyen apertura formal de expediente sancionador contradictorio.",
      "B": "Los rumores o notas de prensa no tienen la aptitud procesal de acto formal interruptivo.",
      "C": "Correcto. Interrupción por inicio formal notificado y reanudación si se paraliza por más de un mes sin culpa del imputado.",
      "D": "Declaraciones políticas en medios carecen de potestad instructora vinculante."
    }
  },
  {
    "id": "lpa-136",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Prescripción de las Sanciones Administrativas Firmes",
    "statement": "Una vez impuesta una sanción mediante resolución firme que pone fin a la vía administrativa, ¿cuáles son los plazos supletorios para que opere la prescripción de la sanción (Art. 143 inc. 3° LPA)?",
    "options": {
      "A": "Veinticinco años para cualquier tipo de multa sin distinción.",
      "B": "Todas las sanciones prescriben a los cinco días de dictadas.",
      "C": "Las sanciones firmes nunca prescriben y pueden cobrarse a los descendientes de por vida.",
      "D": "Prescribirán al año las sanciones impuestas por infracciones leves, a los dos años las impuestas por infracciones graves y a los tres años las de infracciones muy graves, contados desde la firmeza de la resolución."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 143 inciso 3° de la LPA fija que las sanciones prescriben en los mismos plazos supletorios que las infracciones: un año para las leves, dos años para las graves y tres años para las muy graves, computados a partir del día siguiente a aquel en que adquiera firmeza la resolución sancionadora.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 143 inc. 3°.",
    "distractorRationale": {
      "A": "Veinticinco años corresponde a plazos extraordinarios de usucapión agraria, no a sanciones administrativas.",
      "B": "Cinco días es un plazo muy breve que impediría la gestión de cobranza ordinaria.",
      "C": "La imprescriptibilidad general de sanciones atentaría contra la seguridad jurídica y el Art. 1 Cn.",
      "D": "Correcto. Escala uniforme de 1, 2 y 3 años contados a partir de la firmeza del acto sancionador."
    }
  },
  {
    "id": "lpa-137",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Caducidad del Procedimiento Sancionador por Inactividad",
    "statement": "¿Qué diferencia sustancial existe entre la prescripción de la infracción y la caducidad del procedimiento sancionador regulada en el Artículo 94 de la LPA?",
    "options": {
      "A": "Son exactamente idénticas y el juez las usa como sinónimos indistintos.",
      "B": "La prescripción extingue la responsabilidad sustantiva por el transcurso del tiempo desde el hecho; la caducidad extingue el procedimiento formal por haberse vencido el plazo máximo de tramitación sin dictar resolución.",
      "C": "La caducidad se aplica solo a menores de edad y la prescripción a empresas transnacionales.",
      "D": "La prescripción solo opera en el derecho canónico y la caducidad en el derecho mercantil."
    },
    "correctAnswer": "B",
    "explanation": "La prescripción es una institución material que extingue el derecho sustantivo del Estado a perseguir o sancionar la falta por el paso del tiempo. La caducidad o perención es una sanción procesal adjetiva por la inactividad de la administración dentro del expediente que supera el plazo legal de tramitación, ordenando su archivo forzoso.",
    "legalBasis": "Ley de Procedimientos Administrativos, Arts. 94 y 143.",
    "distractorRationale": {
      "A": "Confundir ambas figuras denota grave imprecisión conceptual en el derecho administrativo.",
      "B": "Correcto. Prescripción extingue el derecho sustantivo de castigo; caducidad extingue la instancia procedimental.",
      "C": "Ambas figuras aplican a personas naturales y jurídicas sin distinción de edad ni tamaño empresarial.",
      "D": "Ambas son instituciones centrales plenamente integradas en el derecho administrativo contemporáneo."
    }
  },
  {
    "id": "lpa-138",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Responsabilidad de Personas Jurídicas en Materia Sancionadora",
    "statement": "Conforme al Artículo 142 de la LPA, ¿cómo se determina la responsabilidad sancionadora de las personas jurídicas (sociedades mercantiles, fundaciones, asociaciones)?",
    "options": {
      "A": "Solo responden si el 100% de los accionistas votó unánimemente a favor de cometer el ilícito.",
      "B": "Las personas jurídicas gozan de inmunidad penal y administrativa absoluta por carecer de cuerpo físico.",
      "C": "Las personas jurídicas son directamente responsables administrativamente por las infracciones cometidas por sus órganos, directores, empleados o dependientes en el ejercicio de sus funciones, sin perjuicio de la responsabilidad individual concurrente.",
      "D": "Se encarcela automáticamente al contador general de la compañía por tres años."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 142 de la LPA reconoce la capacidad de infracción y responsabilidad administrativa directa de las personas jurídicas por actos cometidos por sus representantes o dependientes bajo su control o beneficio, aplicándoseles sanciones pecuniarias, clausuras o cancelaciones de autorizaciones.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 142.",
    "distractorRationale": {
      "A": "No se requiere unanimidad asamblearia; basta la actuación de administradores o dependientes bajo su tutela.",
      "B": "La doctrina y la LPA superaron la vieja máxima societas delinquere non potest en sede administrativa.",
      "C": "Correcto. Responsabilidad directa de la persona jurídica por actuaciones de sus dependientes u órganos.",
      "D": "La administración no impone penas de cárcel ni traslada culpas mecánicas al personal contable."
    }
  },
  {
    "id": "lpa-139",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Atenuante por Subsanación Voluntaria y Reparación Espontánea",
    "statement": "Si un administrado investigado subsana espontáneamente la irregularidad y repara íntegramente los daños causados al interés público o a terceros antes de que se dicte la resolución sancionadora definitiva:",
    "options": {
      "A": "Constituye una circunstancia atenuante que la autoridad debe valorar obligatoriamente para graduar y reducir la cuantía o severidad de la sanción a imponer.",
      "B": "La autoridad debe duplicar la sanción por admitir implícitamente el hecho.",
      "C": "El administrado es arrestado inmediatamente sin derecho a fianza.",
      "D": "La reparación carece de todo valor jurídico en el derecho salvadoreño."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 144 de la LPA y los principios generales de graduación de sanciones reconocen la reparación espontánea o subsanación voluntaria del perjuicio como criterio atenuante relevante, propiciando que el administrado rectifique su conducta y minimice el impacto lesivo sobre la colectividad.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 144.",
    "distractorRationale": {
      "A": "Correcto. La subsanación y reparación espontánea operan como atenuantes obligatorias en la graduación.",
      "B": "Penalizar la reparación voluntaria desincentivaría el pronto restablecimiento de la legalidad.",
      "C": "La reparación de daños no constituye delito que amerite arrestos en sede administrativa.",
      "D": "El derecho fomenta activamente la reparación integral de los perjuicios ocasionados."
    }
  },
  {
    "id": "lpa-140",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Nulidad por Violación de la Separación Orgánica",
    "statement": "Si un mismo funcionario municipal actúa simultáneamente como instructor investigando los hechos, formula el pliego de cargos y posteriormente dicta por sí mismo la resolución sancionadora de multa:",
    "options": {
      "A": "La resolución se convalida automáticamente si el alcalde la sella en papel de lino.",
      "B": "El procedimiento es ejemplarmente eficiente y merece una condecoración al mérito cívico.",
      "C": "El administrado sancionado pierde el derecho de acudir a los tribunales de la LJCA.",
      "D": "El procedimiento y la sanción resultante adolecen de nulidad de pleno derecho por vulneración de la garantía legal y constitucional de separación de funciones orgánicas y falta de imparcialidad objetiva (Art. 36 lit. g y 141 LPA)."
    },
    "correctAnswer": "D",
    "explanation": "La concentración de la instrucción y de la potestad decisoria en un mismo funcionario o unidad atenta directamente contra la separación orgánica exigida por el Art. 141 inc. 2° LPA, lo cual engendra un vicio de nulidad de pleno derecho por vulneración estructural de las garantías del debido proceso acusatorio (Art. 36 lit. g LPA y Art. 11 Cn.).",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 36 lit. g) y Art. 141 inc. 2°.",
    "distractorRationale": {
      "A": "Los vicios que vulneran garantías constitucionales básicas son inconvalidables e insubsanables.",
      "B": "La concentración inquisitiva de funciones viola el debido proceso y no constituye mérito legítimo.",
      "C": "El administrado conserva intacta la potestad de demandar la nulidad absoluta ante la LJCA.",
      "D": "Correcto. Ser juez y parte vulnera la separación funcional acarreando nulidad de pleno derecho."
    }
  },
  {
    "id": "lpa-141",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Prohibición de Privación de Libertad en Sede Administrativa",
    "statement": "En atención al Artículo 11 y Artículo 13 de la Constitución de la República de El Salvador, ¿puede la administración pública imponer penas de arresto corporal o prisión como sanción administrativa directa?",
    "options": {
      "A": "Sí, siempre que el arresto se cumpla en las oficinas de la empresa sancionada.",
      "B": "Sí, cualquier director general puede ordenar encarcelar a quien cometa una infracción de tránsito.",
      "C": "No, está terminantemente prohibido; las sanciones administrativas son de carácter pecuniario, inhabilitante o restitutivo, siendo el monopolio de las penas privativas de libertad una potestad jurisdiccional exclusiva de los jueces penales.",
      "D": "Solo si el infractor adeuda impuestos por más de cinco dólares."
    },
    "correctAnswer": "C",
    "explanation": "La Constitución salvadoreña proscribe que la administración civil imponga penas que directa o subsidiariamente impliquen privación de libertad personal corporal (Arts. 11, 13 y 172 Cn.). La potestad punitiva privativa de libertad es monopolio jurisdiccional exclusivo de los jueces del orden penal mediante el debido proceso penal.",
    "legalBasis": "Constitución de la República, Arts. 11, 13 y 172.",
    "distractorRationale": {
      "A": "El confinamiento o encierro forzoso sin orden judicial es un delito de privación de libertad.",
      "B": "Las autoridades administrativas civiles carecen en absoluto de competencia carcelaria privativa.",
      "C": "Correcto. La administración jamás puede imponer penas de prisión o privación de libertad personal.",
      "D": "No existe la prisión por deudas tributarias en el orden constitucional salvadoreño (Art. 27 Cn.)."
    }
  },
  {
    "id": "lpa-142",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Garantía de Acceso al Expediente en Fase de Instrucción",
    "statement": "Conforme al Artículo 146 de la LPA y principio de contradicción, ¿qué derecho asiste al presunto responsable desde el momento en que se le notifica la iniciación del procedimiento sancionador?",
    "options": {
      "A": "Conocer el estado de la tramitación y acceder libremente a todos los documentos y pruebas obrantes en el expediente administrativo, obteniendo copias a su costa.",
      "B": "El expediente debe mantenerse bajo estricto secreto de Estado hasta dictar la sanción.",
      "C": "Solo puede ver el expediente si presenta autorización firmada por dos diputados de la Asamblea.",
      "D": "Solo se le permite ver la carátula exterior del fólder pero no su contenido interno."
    },
    "correctAnswer": "A",
    "explanation": "El derecho de defensa exige el acceso pleno e irrestricto al expediente administrativo desde la apertura del procedimiento sancionador (Art. 146 LPA). Negar la compulsa de los documentos o de las pruebas recabadas genera indefensión insubsanable y vicia de nulidad de pleno derecho las actuaciones.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 146.",
    "distractorRationale": {
      "A": "Correcto. El acceso integral al expediente es presupuesto material ineludible del derecho de defensa.",
      "B": "El secretismo procesal en expedientes sancionadores atenta contra el principio de contradicción y tutela efectiva.",
      "C": "No se requiere intermediación parlamentaria para ejercer derechos procesales reglados.",
      "D": "La exhibición cosmética o parcial priva al ciudadano de contrastar los cargos y medios probatorios."
    }
  },
  {
    "id": "lpa-143",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Requisitos de Imparcialidad del Instructor",
    "statement": "Si durante la tramitación de un expediente sancionador se descubre que el funcionario instructor designado es compadre y socio comercial del denunciante de la infracción:",
    "options": {
      "A": "Se nombra al denunciante como secretario de actuaciones del caso.",
      "B": "El procedimiento continúa con normalidad porque la amistad y los negocios comerciales son virtudes humanas.",
      "C": "El investigado debe pedir disculpas al instructor y declararse confeso.",
      "D": "El instructor está obligado legalmente a abstenerse (Art. 52 LPA) y, si no lo hace, el investigado puede recusarlo de inmediato por comprometer gravemente su imparcialidad objetiva."
    },
    "correctAnswer": "D",
    "explanation": "El interés personal directo, la relación asociativa comercial o el vínculo afectivo estrecho con la parte denunciante constituyen causas objetivas taxativas de abstención y recusación conforme al Artículo 52 de la LPA, indispensables para resguardar la imparcialidad del instructor en la fase punitiva.",
    "legalBasis": "Ley de Procedimientos Administrativos, Arts. 52 y 53.",
    "distractorRationale": {
      "A": "Incorporar al denunciante a la estructura instructora agravaría aún más el vicio de nulidad absoluta.",
      "B": "Las relaciones societarias con una de las partes destruyen la garantía de ecuanimidad e independencia.",
      "C": "El justiciable tiene derecho a un instructor imparcial y no a someterse a componendas sesgadas.",
      "D": "Correcto. Causal evidente de pérdida de imparcialidad que obliga a la abstención o autoriza la recusación."
    }
  },
  {
    "id": "lpa-144",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Prohibición de Beneficio Económico Derivado de la Infracción",
    "statement": "En aplicación del principio de proporcionalidad (Art. 144 inc. final LPA), ¿qué pauta legal debe garantizar la administración al fijar las sanciones pecuniarias a empresas infractoras?",
    "options": {
      "A": "Que la multa nunca sobrepase un dólar para no desanimar a los infractores.",
      "B": "Que la comisión de la infracción no resulte más beneficiosa económicamente para el infractor que el cumplimiento de las normas infringidas, asegurando un efecto verdaderamente disuasorio.",
      "C": "Que la empresa infractora reciba una subvención estatal para compensar el pago de la multa.",
      "D": "Que la multa se cobre a los clientes de la empresa en un recargo directo en factura."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 144 de la LPA y la teoría económica del derecho sancionador disponen que la sanción debe neutralizar el beneficio económico ilícito obtenido por la conducta infractora; de lo contrario, el pago de la multa se convertiría en un mero costo operativo rentable para infringir la ley de manera reiterada.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 144.",
    "distractorRationale": {
      "A": "Multas insignificantes desmantelarían el efecto preventivo general de las normas sancionatorias.",
      "B": "Correcto. Principio de disuasión económica: el ilícito jamás debe ser rentable para el infractor.",
      "C": "Subvencionar el pago de multas constituiría malversación y fomento directo de la impunidad.",
      "D": "El traslado mecánico de la sanción a los usuarios vulneraría los derechos del consumidor y la culpabilidad."
    }
  },
  {
    "id": "lpa-145",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Inadmisibilidad de Pruebas Ilícitas en el Procedimiento Punitivo",
    "statement": "¿Qué validez jurídica tienen en el procedimiento sancionador salvadoreño las pruebas obtenidas con vulneración directa o indirecta de derechos fundamentales (Art. 11 LPA y Art. 316 CPCM)?",
    "options": {
      "A": "Carecen de todo valor probatorio y no podrán ser utilizadas para fundamentar cargo o sanción alguna, debiendo ser expulsadas formalmente del expediente bajo la doctrina del fruto del árbol envenenado.",
      "B": "Son plenamente válidas porque en materia sancionadora el fin justifica los medios.",
      "C": "Tienen valor de plena prueba fehaciente si el instructor prestó juramento.",
      "D": "Pueden usarse siempre que se publiquen en un diario de circulación nacional."
    },
    "correctAnswer": "A",
    "explanation": "La ilicitud probatoria por quebranto de derechos fundamentales (como allanamientos ilegales, interceptación ilícita de comunicaciones o coacción física) genera la exclusión total de la prueba y de todas sus derivadas directas en virtud de la regla de exclusión constitucional y el Art. 316 CPCM supletorio.",
    "legalBasis": "Constitución de la República Art. 11, LPA Art. 11 y CPCM Art. 316.",
    "distractorRationale": {
      "A": "Correcto. La prueba ilícita es radicalmente nula y carece de toda eficacia acreditativa.",
      "B": "El Estado constitucional de derecho repudia el principio maquiavélico en el ejercicio del ius puniendi.",
      "C": "El juramento del funcionario no purga la violación de garantías y derechos fundamentales.",
      "D": "La difusión pública de pruebas ilícitas agrava la vulneración a la intimidad y debido proceso."
    }
  },
  {
    "id": "lpa-146",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Requisitos del Acta Notarial de Inspección como Prueba de Cargo",
    "statement": "Cuando un inspector administrativo levanta un acta in situ sobre hechos que presencia directamente (Art. 84 LPA), ¿qué valor probatorio le reconoce la ley?",
    "options": {
      "A": "Constituyen una sentencia condenatoria inapelable que no admite ninguna prueba en contrario.",
      "B": "Gozan de presunción de veracidad respecto de los hechos constatados objetivamente por el inspector de forma directa, sin perjuicio de las pruebas que en defensa de sus derechos puedan aportar los administrados.",
      "C": "No tienen ningún valor y deben ser descartadas automáticamente por el instructor.",
      "D": "Solo tienen valor si el acta fue escrita con pluma de ave y tinta de oro."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 84 de la LPA reconoce a las actas de inspección formalizadas por funcionarios a los que se reconoce la condición de autoridad pública presunción iuris tantum de veracidad sobre los hechos constatados personalmente, admitiéndose siempre prueba en contrario por parte del administrado.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 84.",
    "distractorRationale": {
      "A": "No tienen valor de verdad absoluta incontrovertible; admiten contradicción y descargo probatorio.",
      "B": "Correcto. Presunción iuris tantum de veracidad de hechos directamente presenciados, sujeta a prueba en contrario.",
      "C": "Descartarlas de oficio dejaría inoperante la labor inspectora legítima del Estado.",
      "D": "Las formalidades arcaicas no guardan consonancia con las actas modernas de inspección oficial."
    }
  },
  {
    "id": "lpa-147",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Caducidad de la Acción Sancionadora frente a Pluralidad de Imputados",
    "statement": "Si en un procedimiento sancionador tramitado contra tres personas conjuntas el plazo legal vence sin dictarse resolución, produciéndose la caducidad (Art. 94 LPA):",
    "options": {
      "A": "El expediente se transfiere al Tribunal del Servicio Civil.",
      "B": "La caducidad solo favorece a uno de ellos y a los otros dos se les impone la sanción máxima.",
      "C": "La caducidad opera extinguiendo el expediente respecto de todos los imputados, debiendo ordenarse el archivo general de las actuaciones.",
      "D": "Los tres imputados deben ser arrestados por cinco días."
    },
    "correctAnswer": "C",
    "explanation": "La caducidad del procedimiento sancionador es un fenómeno de extinción procesal de la relación adjetiva por transcurso fatal del plazo máximo legal sin sentencia administrativa. Su producción archiva el expediente íntegro respecto de todos los coimputados del trámite fenecido.",
    "legalBasis": "Ley de Procedimientos Administrativos, Art. 94.",
    "distractorRationale": {
      "A": "El Tribunal de Servicio Civil rige para empleados públicos en régimen de carrera, no expedientes comunes caducos.",
      "B": "La extinción procesal objetiva no admite aplicaciones discriminatorias selectivas.",
      "C": "Correcto. La caducidad archiva el expediente y extingue el trámite de forma colectiva y unitaria.",
      "D": "La caducidad no engendra consecuencias punitivas ni privativas de libertad."
    }
  },
  {
    "id": "lpa-148",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Posibilidad de Reinicio de Procedimiento tras Caducidad",
    "statement": "Si un procedimiento sancionador caduca conforme al Artículo 94 de la LPA y se archiva, ¿puede la administración pública volver a iniciar un nuevo procedimiento por los mismos hechos?",
    "options": {
      "A": "Solo si la nueva solicitud es autorizada por un juez de paz de tránsito.",
      "B": "No, la caducidad extingue para siempre cualquier posibilidad de sancionar, aunque el plazo de prescripción no haya vencido.",
      "C": "Sí, pero únicamente si el administrado lo solicita por escrito.",
      "D": "Sí, siempre y cuando la infracción sustantiva no haya prescrito legalmente conforme a los plazos del Artículo 143 de la LPA."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 94 inc. final de la LPA precisa que la caducidad produce el archivo del procedimiento fenecido, pero no extingue por sí misma la infracción sustantiva; por tanto, la administración puede incoar un nuevo procedimiento sancionador por los mismos hechos, siempre que la infracción no haya prescrito con arreglo a la ley.",
    "legalBasis": "Ley de Procedimientos Administrativos, Arts. 94 y 143.",
    "distractorRationale": {
      "A": "Los jueces de paz no intervienen como aduana habilitante para la apertura de trámites de la LPA.",
      "B": "La caducidad extingue el expediente adjetivo, no la acción de fondo que depende de la prescripción.",
      "C": "El reinicio sancionador es oficioso de la administración y no requiere ruegos del imputado.",
      "D": "Correcto. Puede reiniciarse un nuevo expediente si la acción sustantiva no ha sido alcanzada por la prescripción."
    }
  },
  {
    "id": "lpa-149",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Destino de los Fondos de las Multas Administrativas",
    "statement": "Salvo que una ley formal especial destine fondos a una entidad autónoma concreta, ¿dónde deben ingresar los fondos recaudados en concepto de sanciones de multas administrativas del Estado?",
    "options": {
      "A": "A la cuenta bancaria personal del ministro o del funcionario instructor del caso.",
      "B": "Al Fondo General de la Nación administrado por el Ministerio de Hacienda, prohibiéndose terminantemente que se destinen como incentivos o bonificaciones económicas directas para los funcionarios sancionadores.",
      "C": "A una caja chica no registrada para comprar bocadillos de oficina.",
      "D": "A una cuenta en paraísos fiscales fuera del control de la Corte de Cuentas de la República."
    },
    "correctAnswer": "B",
    "explanation": "El principio de caja única del Estado (Art. 224 Cn.) y la Ley Orgánica de Administración Financiera del Estado (AFI) exigen que los ingresos por multas ingresen al Fondo General de la Nación. Asignar las multas como sobresueldos a los instructores generaría un perverso incentivo de persecución confiscatoria incompatible con la imparcialidad.",
    "legalBasis": "Constitución de la República Art. 224 y Ley AFI.",
    "distractorRationale": {
      "A": "Depositar multas públicas en cuentas privadas constituiría el grave delito de peculado (Art. 325 C.Pn.).",
      "B": "Correcto. Caja única del Estado y prohibición de que las multas sirvan de bonos a los sancionadores.",
      "C": "El manejo de fondos públicos al margen del tesoro público viola la Ley de la Corte de Cuentas.",
      "D": "Las cuentas opacas en paraísos fiscales están prohibidas y sujetas a persecución por lavado de dinero."
    }
  },
  {
    "id": "lpa-150",
    "category": "potestad-sancionadora",
    "categoryLabel": "Potestad Sancionadora & Garantías",
    "area": "Suspensión de Sanciones en Vía Contencioso Administrativa",
    "statement": "Cuando una empresa interpone una demanda ante la Jurisdicción Contencioso Administrativa contra una resolución que impuso una multa de un millón de dólares confirmada en apelación:",
    "options": {
      "A": "La demanda judicial extingue la personalidad jurídica de la empresa de inmediato.",
      "B": "El tribunal está legalmente obligado a exigir que la empresa pague el 100% de la multa antes de admitirle la demanda ('solve et repete').",
      "C": "El juzgado contencioso puede decretar la medida cautelar de suspensión de la ejecución de la multa (Art. 19 LJCA) para evitar la quiebra o daño irreparable de la empresa mientras se juzga la legalidad del acto, previa ponderación y fianza si procede.",
      "D": "Se decreta la intervención militar de la compañía durante todo el proceso."
    },
    "correctAnswer": "C",
    "explanation": "El principio constitucional de tutela judicial efectiva y la jurisprudencia de la Sala de lo Constitucional declararon inconstitucional la vieja regla del solve et repete (pagar antes de demandar). Conforme a los Arts. 19 y 20 LJCA, el juez puede suspender la exigibilidad de la sanción pecuniaria para impedir daños de imposible o difícil reparación.",
    "legalBasis": "Ley de la Jurisdicción Contencioso Administrativa Arts. 19 y 20 y Jurisprudencia Constitucional.",
    "distractorRationale": {
      "A": "La interposición de demandas judiciales no afecta la capacidad ni existencia de personas jurídicas.",
      "B": "El principio solve et repete fue expulsado del ordenamiento salvadoreño por vulnerar el acceso a la justicia.",
      "C": "Correcto. El juez contencioso puede decretar la suspensión cautelar de la multa evitando el perjuicio irreparable.",
      "D": "Las controversias contencioso mercantiles se resuelven en sede judicial civil sin intervención castrense."
    }
  },
  {
    "id": "lpa-151",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Equivalencia Funcional de la Firma Electrónica Certificada",
    "statement": "De acuerdo con el Artículo 12 de la Ley de Firma Electrónica (Decreto Leg. N° 1008), ¿cuál es el valor legal y probatorio de la Firma Electrónica Certificada (FEC) frente a la firma manuscrita u hológrafa?",
    "options": {
      "A": "Posee idéntica validez jurídica, valor probatorio y eficacia que la firma manuscrita, gozando de presunción legal de autoría e integridad.",
      "B": "Solo tiene valor como simple indicio que debe ser ratificado obligatoriamente por dos testigos presenciales.",
      "C": "Carece de validez legal en El Salvador a menos que se imprima en papel sellado y se autentique por notario.",
      "D": "Solo es válida para transacciones de menos de diez dólares estadounidenses."
    },
    "correctAnswer": "A",
    "explanation": "El principio de equivalencia funcional consagrado en el Artículo 12 de la Ley de Firma Electrónica establece que la Firma Electrónica Certificada tendrá el mismo valor y eficacia jurídica que la firma autógrafa o manuscrita con relación a los datos consignados en forma electrónica, y se admitirá como prueba fehaciente en juicio.",
    "legalBasis": "Ley de Firma Electrónica de El Salvador, Art. 12.",
    "distractorRationale": {
      "A": "Correcto. La equivalencia funcional y la presunción de integridad son pilares de la FEC.",
      "B": "Esa debilidad probatoria corresponde a la firma electrónica simple, no a la certificada.",
      "C": "Imprimir el documento digital desnaturaliza su valor electrónico originario y rompe la cadena criptográfica.",
      "D": "No existe límite de cuantía para la validez de la firma electrónica certificada."
    }
  },
  {
    "id": "lpa-152",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Inversión de la Carga de la Prueba y Principio de No Repudio",
    "statement": "Cuando un documento electrónico ha sido suscrito mediante Firma Electrónica Certificada emitida por un Proveedor de Servicios de Certificación (PSC) acreditado por el MINEC, ¿sobre quién recae la carga de la prueba en un litigio si se alega su falsedad?",
    "options": {
      "A": "Se declara nulo el documento de forma inmediata sin admitir prueba en contrario.",
      "B": "Sobre quien presenta el documento, quien debe demostrar nuevamente cómo funciona la criptografía.",
      "C": "Sobre el Ministerio de Economía, que debe pagar peritos en todos los juicios del país.",
      "D": "Sobre la parte que impugne o desconozca la firma o el documento, quien deberá probar pericialmente que existió alteración o usurpación."
    },
    "correctAnswer": "D",
    "explanation": "Al estar amparada por un certificado digital vigente emitido por un PSC autorizado y generado por un dispositivo seguro de creación de firma (QSCD), opera la presunción legal de autoría e integridad (Principio de No Repudio). Por tanto, la carga de la prueba se invierte: quien alegue que no firmó o que el mensaje fue alterado debe demostrarlo fehacientemente en juicio.",
    "legalBasis": "Ley de Firma Electrónica, Arts. 13 y 14.",
    "distractorRationale": {
      "A": "El documento es plenamente válido mientras no sea destruida su presunción en sentencia.",
      "B": "El titular de la firma se beneficia de la presunción legal y no necesita revalidar el algoritmo.",
      "C": "El MINEC es ente regulador/acreditador, no perito universal en juicios particulares.",
      "D": "Correcto. La presunción legal invierte la carga probatoria hacia el impugnante."
    }
  },
  {
    "id": "lpa-153",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Unidad Reguladora Acreditadora en El Salvador",
    "statement": "¿Qué entidad gubernamental ejerce las funciones de autoridad acreditadora y supervisora de los Proveedores de Servicios de Certificación (PSC) en El Salvador según la Ley de Firma Electrónica?",
    "options": {
      "A": "El Instituto Salvadoreño del Seguro Social (ISSS).",
      "B": "La Dirección General de Migración y Extranjería.",
      "C": "La Unidad de Firma Electrónica del Ministerio de Economía (MINEC).",
      "D": "La Junta Directiva del Banco Central de Reserva exclusivamente."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 24 de la Ley de Firma Electrónica designa al Ministerio de Economía (MINEC), a través de su Unidad de Firma Electrónica, como la autoridad competente encargada de acreditar, supervisar, sancionar y fiscalizar a los Proveedores de Servicios de Certificación (PSC) públicos y privados.",
    "legalBasis": "Ley de Firma Electrónica, Art. 24.",
    "distractorRationale": {
      "A": "El ISSS provee servicios de salud previsional, ajeno a la acreditación criptográfica de firmas.",
      "B": "Migración gestiona pasaportes y fronteras, no infraestructura de clave pública.",
      "C": "Correcto. La Unidad de Firma Electrónica del MINEC es el ente regulador y fiscalizador oficial.",
      "D": "El BCR participa en el sistema financiero de pagos pero no acredita a los PSCs generales."
    }
  },
  {
    "id": "lpa-154",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Diferencia entre Firma Electrónica Simple y Certificada",
    "statement": "¿Cuál es la distinción técnica y jurídica fundamental entre una Firma Electrónica Simple y una Firma Electrónica Certificada (FEC)?",
    "options": {
      "A": "La simple asocia datos electrónicos sin respaldo de certificado cualificado de PSC acreditado; la certificada exige un certificado electrónico emitido por un PSC acreditado y un dispositivo seguro de creación de firma.",
      "B": "La simple solo sirve para personas zurdas y la certificada para personas diestras.",
      "C": "La certificada exige que el documento se imprima en pergamino antes de firmarse digitalmente.",
      "D": "No existe ninguna diferencia; son términos idénticos en la ley."
    },
    "correctAnswer": "A",
    "explanation": "Los Artículos 5 y 6 de la LFE distinguen la firma electrónica simple (cualquier dato en formato electrónico que sirva como medio de identificación) de la Firma Electrónica Certificada, que requiere un dispositivo seguro de creación (QSCD), algoritmos criptográficos asimétricos y el respaldo de un certificado válido emitido por un PSC debidamente acreditado.",
    "legalBasis": "Ley de Firma Electrónica, Arts. 5 y 6.",
    "distractorRationale": {
      "A": "Correcto. La FEC exige respaldo de certificado emitido por PSC acreditado y dispositivo seguro.",
      "B": "La lateralidad manual no tiene ninguna relevancia criptográfica ni jurídica.",
      "C": "La impresión en soporte físico desnaturaliza el entorno electrónico nativo.",
      "D": "Poseen profundas diferencias de seguridad, estructura criptográfica y eficacia procesal probatoria."
    }
  },
  {
    "id": "lpa-155",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Criptografía Asimétrica y Par de Claves",
    "statement": "En la arquitectura tecnológica de la Firma Electrónica Certificada, ¿cómo funciona el par de claves criptográficas asimétricas?",
    "options": {
      "A": "Las dos claves son secuencias numéricas idénticas que se intercambian por mensaje de texto no cifrado.",
      "B": "Ambas claves deben publicarse diariamente en el periódico de mayor circulación.",
      "C": "La clave privada es administrada por la policía y la clave pública por el alcalde municipal.",
      "D": "La clave privada se mantiene en estricta reserva bajo control exclusivo del firmante para generar la firma, y la clave pública se distribuye libremente para verificar la autoría e integridad del mensaje."
    },
    "correctAnswer": "D",
    "explanation": "El estándar de infraestructura de clave pública (PKI) y el Art. 5 LFE se fundamentan en algoritmos asimétricos: la clave privada sirve para cifrar el hash del documento (firmar) bajo custodia inviolable del titular; la clave pública, contenida en el certificado digital, permite a cualquier receptor descifrar y comprobar que el documento no fue alterado.",
    "legalBasis": "Ley de Firma Electrónica Art. 5 y Estándares PKI X.509.",
    "distractorRationale": {
      "A": "Si fueran idénticas sería criptografía simétrica, la cual no permite el no repudio asimétrico.",
      "B": "Publicar la clave privada comprometería irremediablemente la seguridad y permitiría la suplantación.",
      "C": "La custodia de la clave privada es personalísima del titular en su dispositivo seguro.",
      "D": "Correcto. Par asimétrico: clave privada secreta del firmante y clave pública abierta de verificación."
    }
  },
  {
    "id": "lpa-156",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Dispositivo Seguro de Creación de Firma (QSCD)",
    "statement": "¿Qué requisitos técnicos debe reunir un Dispositivo Seguro de Creación de Firma Electrónica conforme al Reglamento de la LFE?",
    "options": {
      "A": "Ser un lápiz óptico de plástico convencional comprado en cualquier librería escolar.",
      "B": "Garantizar razonablemente que los datos de creación de firma (clave privada) no puedan derivarse de la clave pública, que sean confidenciales y estén protegidos contra falsificaciones bajo estándares FIPS 140-2 o Common Criteria.",
      "C": "Cualquier disco compacto regrabable sin contraseña ni mecanismo de cifrado.",
      "D": "Un teléfono móvil sin pantalla táctil ni conexión a internet."
    },
    "correctAnswer": "B",
    "explanation": "El Reglamento de la LFE exige que los dispositivos seguros de creación de firma (tokens criptográficos o módulos HSM) cumplan con certificaciones de seguridad internacional (FIPS 140-2 Nivel 3 o Common Criteria EAL4+) que aseguren que la clave privada nunca sale del chip en texto plano y no puede ser duplicada.",
    "legalBasis": "Reglamento de la Ley de Firma Electrónica y Art. 10 LFE.",
    "distractorRationale": {
      "A": "Los lápices ópticos pasivos no generan llaves criptográficas ni contienen chips de seguridad.",
      "B": "Correcto. Exige estándares internacionales FIPS o Common Criteria para impedir la extracción de la clave.",
      "C": "Los CDs comunes no poseen microprocesadores criptográficos seguros de generación de pares.",
      "D": "Un teléfono analógico antiguo no puede ejecutar algoritmos criptográficos modernos de firma."
    }
  },
  {
    "id": "lpa-157",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Requisitos de Acreditación de los PSCs ante MINEC",
    "statement": "Para que una empresa privada pueda operar legalmente como Proveedor de Servicios de Certificación (PSC) en El Salvador, ¿qué garantía patrimonial exige la ley (Art. 28 LFE)?",
    "options": {
      "A": "Constituir y mantener vigente una póliza de seguro de responsabilidad civil o fianza bancaria suficiente para responder por los daños y perjuicios derivados del incumplimiento de sus deberes legales.",
      "B": "Donar el 50% de sus acciones mercantiles al partido político de turno.",
      "C": "Tener más de doscientos años de existencia mercantil ininterrumpida.",
      "D": "Garantizar que nunca expedirá certificados a personas extranjeras."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 28 literal c) de la Ley de Firma Electrónica obliga a los PSCs a contratar y mantener una garantía o seguro de responsabilidad civil suficiente para garantizar el resarcimiento de los eventuales daños y perjuicios que puedan causar a usuarios y terceros por negligencia o fallas en sus servicios de certificación.",
    "legalBasis": "Ley de Firma Electrónica, Art. 28 lit. c).",
    "distractorRationale": {
      "A": "Correcto. La póliza o garantía asegura la solvencia indemnizatoria frente a posibles fallas técnicas.",
      "B": "Las exigencias patrimoniales son estrictamente legales y técnicas, no prebendas partidarias.",
      "C": "La exigencia de doscientos años es absurda en el ámbito de tecnologías digitales modernas.",
      "D": "Los extranjeros residentes o no residentes pueden adquirir válidamente certificados electrónicos."
    }
  },
  {
    "id": "lpa-158",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Presunción Legal de Integridad del Documento Firmado",
    "statement": "¿Qué alcance probatorio tiene la presunción legal de integridad consagrada en el Artículo 13 de la Ley de Firma Electrónica?",
    "options": {
      "A": "Se presume que el contenido del documento fue redactado por un ángel de la guarda.",
      "B": "Se presume que el documento electrónico no ha sufrido ninguna alteración, modificación o manipulación desde el instante exacto en que fue firmado con la FEC.",
      "C": "Impide que los jueces puedan leer el texto del contrato en pantalla digital.",
      "D": "Garantiza que el documento jamás podrá ser borrado de ningún disco duro."
    },
    "correctAnswer": "B",
    "explanation": "El Art. 13 de la LFE consagra que la FEC dota al mensaje de datos de la presunción legal de integridad: la concordancia del valor hash criptográfico verifica que el contenido no ha variado ni en un solo bit desde su firma. Quien afirme alteración debe probar la ruptura de la función criptográfica unidireccional.",
    "legalBasis": "Ley de Firma Electrónica, Art. 13.",
    "distractorRationale": {
      "A": "Las figuras teológicas carecen de cabida en el rigor procesal de la ciencia criptográfica legal.",
      "B": "Correcto. Presunción de inalterabilidad del mensaje de datos desde el momento de la firma.",
      "C": "La presunción dota de certeza al texto para que el juez lo valore con plena eficacia probatoria.",
      "D": "No impide el borrado material de archivos locales, sino su alteración inadvertida."
    }
  },
  {
    "id": "lpa-159",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Contenido Preceptivo del Certificado Electrónico",
    "statement": "Conforme al Artículo 19 de la Ley de Firma Electrónica, ¿cuál de los siguientes datos es mención obligatoria que debe contener un certificado electrónico expedido por un PSC?",
    "options": {
      "A": "El saldo bancario actualizado al centavo de todas las cuentas del ciudadano.",
      "B": "El tipo de sangre y el historial médico completo del titular de la firma.",
      "C": "Identificación del titular, datos de verificación de firma (clave pública), período de validez, código identificador del certificado y firma electrónica avanzada del PSC emisor.",
      "D": "La fotografía del cónyuge y de los hijos menores de edad del titular."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 19 de la LFE establece el contenido formal del certificado: indicación de ser certificado electrónico, datos de identidad del titular y emisor, clave pública correspondiente a la clave privada del titular, número de serie único, vigencia temporal, límites de uso y la firma digital del PSC acreditado.",
    "legalBasis": "Ley de Firma Electrónica, Art. 19.",
    "distractorRationale": {
      "A": "El secreto bancario prohíbe incorporar saldos financieros en certificados digitales públicos.",
      "B": "Los datos de salud están protegidos por el derecho a la intimidad y son ajenos al certificado general.",
      "C": "Correcto. Identidad, clave pública, serie, vigencia y firma del PSC componen el certificado.",
      "D": "Los datos familiares de menores violarían la Ley Crecer Juntos y la protección de datos personales."
    }
  },
  {
    "id": "lpa-160",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Causales de Revocación del Certificado Electrónico",
    "statement": "De acuerdo con el Artículo 21 de la LFE, ¿en cuál de los siguientes casos debe el PSC revocar de forma inmediata el certificado electrónico antes de su expiración ordinaria?",
    "options": {
      "A": "Cada vez que cambie la estación del año de invierno a verano.",
      "B": "Cuando el titular cambie de corte de cabello o color de ropa habitual.",
      "C": "Siempre que el titular critique una decisión económica del gobierno en internet.",
      "D": "A solicitud expresa del titular, por pérdida o compromiso de la clave privada, por muerte del titular o por disolución de la persona jurídica representada."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 21 de la LFE regula las causales taxativas de revocación: petición del titular, pérdida de control o extravío del dispositivo seguro, fallecimiento de la persona natural, extinción de la persona jurídica, o cuando se compruebe que el certificado fue emitido con base en documentos falsos.",
    "legalBasis": "Ley de Firma Electrónica, Art. 21.",
    "distractorRationale": {
      "A": "Las estaciones climáticas no guardan relación con la vigencia temporal técnica de los certificados.",
      "B": "Aspectos estéticos o personales carecen de toda repercusión sobre la vigencia del certificado digital.",
      "C": "La libertad de expresión es un derecho fundamental amparado por la Constitución (Art. 6 Cn.).",
      "D": "Correcto. Solicitud del titular, compromiso de la clave o muerte/extinción causan revocación inmediata."
    }
  },
  {
    "id": "lpa-161",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Lista de Certificados Revocados (CRL) y Protocolo OCSP",
    "statement": "¿Qué mecanismo técnico emplean los sistemas de información en El Salvador para verificar en tiempo real si un certificado digital se encuentra activo o revocado?",
    "options": {
      "A": "El envío de una carta certificada por correo postal tradicional que tarda tres meses.",
      "B": "La consulta automatizada a la Lista de Certificados Revocados (CRL) publicada por el PSC o mediante el Protocolo de Estado de Certificados en Línea (OCSP).",
      "C": "La publicación de carteles de papel pegados en las esquinas de los juzgados.",
      "D": "Una llamada telefónica obligatoria al ministro de hacienda en cada transacción."
    },
    "correctAnswer": "B",
    "explanation": "La verificación técnica de validez de una firma se realiza en milisegundos mediante la consulta a la CRL (Certificate Revocation List) o vía el protocolo estándar OCSP (Online Certificate Status Protocol) que el PSC acreditado mantiene disponible 24/7 en servidores de alta disponibilidad.",
    "legalBasis": "Reglamento de la Ley de Firma Electrónica y Estándar RFC 6960 (OCSP).",
    "distractorRationale": {
      "A": "El correo postal manual no permite la verificación inmediata indispensable en el tráfico electrónico.",
      "B": "Correcto. Las CRLs y el protocolo OCSP permiten la comprobación instantánea del estado del certificado.",
      "C": "Los avisos físicos en postes son obsoletos e incompatibles con el entorno digital en línea.",
      "D": "Las llamadas telefónicas no proveen validación criptográfica algorítmica automatizada."
    }
  },
  {
    "id": "lpa-162",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Sellado de Tiempo Electrónico (Time-Stamping)",
    "statement": "¿Qué seguridad jurídica aporta la incorporación de un Sello de Tiempo Electrónico cualificado (Time-Stamp) emitido por una Autoridad de Sellado de Tiempo (TSA)?",
    "options": {
      "A": "Elimina la obligación de pagar impuestos aduanales en las importaciones electrónicas.",
      "B": "Permite que los documentos electrónicos no envejezcan y se mantengan legibles por mil millones de años.",
      "C": "Acredita con certeza fehaciente que una serie de datos electrónicos existían en un momento temporal determinado y que no han sido alterados desde entonces, fijando fecha y hora cierta legal.",
      "D": "Sustituye la necesidad de que los otorgantes expresen su consentimiento en el contrato."
    },
    "correctAnswer": "C",
    "explanation": "El sellado de tiempo electrónico vincula un hash de datos con una marca temporal sincronizada con una fuente horaria oficial de alta precisión (como el reloj atómico del CNR o patrón nacional), otorgando fecha y hora cierta inalterable con pleno valor probatorio en juicio conforme al CPCM y LFE.",
    "legalBasis": "Ley de Firma Electrónica y Estándar RFC 3161 (TSA).",
    "distractorRationale": {
      "A": "Las obligaciones tributarias no se extinguen por la aplicación de sellos de tiempo digitales.",
      "B": "El sellado de tiempo no es un tratamiento físico de preservación cósmica indefinida.",
      "C": "Correcto. Confiere fecha y hora cierta legal inalterable a los documentos y firmas electrónicas.",
      "D": "El consentimiento de los otorgantes es el alma del negocio jurídico y jamás puede ser suplido."
    }
  },
  {
    "id": "lpa-163",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Valor Probatorio de la Firma Electrónica Simple (Art. 8 LFE)",
    "statement": "A diferencia de la FEC, ¿cuál es el valor probatorio que el Artículo 8 de la LFE y el CPCM otorgan a un documento suscrito mediante Firma Electrónica Simple?",
    "options": {
      "A": "Tendrá valor de principio de prueba por escrito y su eficacia dependerá de la valoración judicial y del reconocimiento o ratificación pericial que se realice en el proceso.",
      "B": "Carece de toda existencia jurídica y se sanciona penalmente su uso como fraude.",
      "C": "Equivale automáticamente a una escritura pública matriz de notario en todos los casos.",
      "D": "Gozará de inmunidad procesal absoluta sin admitir ninguna prueba de tacha en juicio."
    },
    "correctAnswer": "A",
    "explanation": "El Art. 8 de la LFE establece que la firma electrónica simple no produce por sí misma la inversión de la carga probatoria ni la equivalencia funcional plena de la firma autógrafa; su fuerza convictiva se valora como principio de prueba por escrito sujeto a las reglas de la sana crítica judicial y al cotejo pericial informático.",
    "legalBasis": "Ley de Firma Electrónica, Art. 8 y CPCM Art. 343.",
    "distractorRationale": {
      "A": "Correcto. La firma simple opera como principio de prueba por escrito sujeto a valoración y peritaje.",
      "B": "El uso de firma simple no es ilícito penal; se usa cotidianamente en correos y transacciones menores.",
      "C": "No equivale a escritura matriz notarial; la solemnidad notarial exige formalidades estrictas.",
      "D": "No goza de presunción legal de integridad ni invierte la carga probatoria."
    }
  },
  {
    "id": "lpa-164",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Deberes de Custodia del Titular de Firma Electrónica",
    "statement": "Conforme al Artículo 15 de la Ley de Firma Electrónica, ¿cuál es el deber esencial de diligencia que asume el titular de una Firma Electrónica Certificada?",
    "options": {
      "A": "Prestar su token criptográfico a amigos o vecinos durante los fines de semana.",
      "B": "Entregar su clave secreta y contraseña a cualquier empleado de la oficina para que le ayude a firmar.",
      "C": "Escribir su clave privada con plumón permanente en la pared de la oficina pública.",
      "D": "Custodiar diligentemente sus datos de creación de firma (clave privada y PIN), mantener el control exclusivo de su dispositivo seguro y solicitar inmediatamente la revocación ante cualquier sospecha de pérdida o compromiso."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 15 de la LFE impone al titular la obligación indelegable de ejercer la custodia debida sobre su dispositivo seguro y datos de creación de firma. Si el titular actúa con negligencia compartiendo sus claves o demorando la revocación, responderá civilmente por los daños derivados del uso indebido de su firma.",
    "legalBasis": "Ley de Firma Electrónica, Art. 15.",
    "distractorRationale": {
      "A": "Prestar el token quebranta el carácter personalísimo de la firma y acarrea responsabilidad civil.",
      "B": "Compartir claves personales constituye una gravísima negligencia que destruye el no repudio legítimo.",
      "C": "Exhibir claves privadas vulnera de raíz toda la seguridad criptográfica del sistema.",
      "D": "Correcto. Custodia exclusiva, secreto de clave y deber de solicitar revocación inmediata ante riesgos."
    }
  },
  {
    "id": "lpa-165",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Responsabilidad Solidaria del PSC por Certificados Negligentes",
    "statement": "De acuerdo con el Artículo 23 de la LFE, si un PSC acreditado emite un certificado electrónico sin haber verificado fehacientemente la identidad real del solicitante y ello causa perjuicio a un tercero:",
    "options": {
      "A": "Se condena a prisión perpetua al recepcionista que entregó el formulario.",
      "B": "El PSC no asume ninguna responsabilidad porque internet no tiene fronteras.",
      "C": "El PSC incurre en responsabilidad patrimonial objetiva o por negligencia grave y responderá por los daños y perjuicios causados hasta el límite fijado en su póliza de seguro.",
      "D": "La persona suplantada debe pagar una indemnización al PSC emisor."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 23 de la LFE hace responsable al Proveedor de Servicios de Certificación por los daños causados a cualquier persona debido a la inexactitud de los datos que consten en el certificado o por no haber comprobado fehacientemente la identidad personal del titular con base en documentos de identidad auténticos.",
    "legalBasis": "Ley de Firma Electrónica, Art. 23.",
    "distractorRationale": {
      "A": "La responsabilidad civil de la empresa de certificación no se transforma automáticamente en penas perpetuas al recepcionista.",
      "B": "Los prestadores de servicios de fe pública digital están sometidos a estricto régimen de responsabilidad civil.",
      "C": "Correcto. El PSC responde patrimonialmente por emitir certificados con identidades defectuosas o falsas.",
      "D": "La víctima de suplantación es el sujeto pasivo perjudicado, jamás el deudor frente a la entidad negligente."
    }
  },
  {
    "id": "lpa-166",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Uso de Firma Electrónica en Facturación Electrónica (DGI / Hacienda)",
    "statement": "En el Sistema de Transmisión Electrónica de Documentos Tributarios (DTE) implementado por el Ministerio de Hacienda en El Salvador, ¿qué rol desempeña la firma electrónica?",
    "options": {
      "A": "Garantiza la autenticidad, autoría e integridad de las facturas electrónicas y créditos fiscales emitidos por los contribuyentes, permitiendo el sellado de recepción por la Administración Tributaria.",
      "B": "Solo sirve para que las impresoras láser funcionen con menor consumo eléctrico.",
      "C": "Exonera al emisor de declarar el Impuesto a la Transferencia de Bienes Muebles y a la Prestación de Servicios (IVA).",
      "D": "Permite cobrar un 50% extra de sobreprecio a los clientes que paguen en efectivo."
    },
    "correctAnswer": "A",
    "explanation": "El Código Tributario salvadoreño y las directrices de la DGI sobre Facturación Electrónica integran la firma electrónica (certificada o de emisor) en los Documentos Tributarios Electrónicos (DTE), otorgando validez jurídica plena a las facturas digitales y asegurando su trazabilidad e integridad ante el fisco.",
    "legalBasis": "Código Tributario salvadoreño y Ley de Firma Electrónica.",
    "distractorRationale": {
      "A": "Correcto. La firma electrónica en DTEs autentica la emisión e integridad del comprobante fiscal.",
      "B": "No incide en el consumo de energía eléctrica de la maquinaria de hardware.",
      "C": "La digitalización tributaria moderniza el soporte formal pero no exime del pago de tributos de ley.",
      "D": "El precio y tasas tributarias se rigen por la ley y no autorizan sobreprecios abusivos."
    }
  },
  {
    "id": "lpa-167",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Firma Electrónica en Compras Públicas (COMPRASAL)",
    "statement": "En el portal COMPRASAL regulado por la Ley de Compras Públicas de El Salvador, ¿cuál es la exigencia sobre la presentación de ofertas y firma de contratos administrativos?",
    "options": {
      "A": "La firma electrónica está vetada para empresas salvadoreñas y reservada a extranjeros.",
      "B": "Se prohíbe el uso de computadoras en todas las licitaciones públicas del Estado.",
      "C": "Los proveedores deben presentar sus ofertas exclusivamente en pergamino manuscrito con tinta china.",
      "D": "Las ofertas, adendas y contratos del Estado se tramitan y formalizan en formato digital suscritos mediante Firma Electrónica Certificada, gozando de plena validez vinculante."
    },
    "correctAnswer": "D",
    "explanation": "La Ley de Compras Públicas de El Salvador mandató la digitalización integral de las compras del Estado a través de la plataforma COMPRASAL, exigiendo el uso de la Firma Electrónica Certificada para la suscripción de ofertas, resoluciones de adjudicación y contratos administrativos.",
    "legalBasis": "Ley de Compras Públicas y Ley de Firma Electrónica.",
    "distractorRationale": {
      "A": "La ley promueve la equidad y permite el uso de FEC tanto a personas naturales como a sociedades nacionales.",
      "B": "La digitalización tecnológica es el eje estructural y mandated de las compras modernas del Estado.",
      "C": "El formato físico en pergamino está en desuso frente a la eficiencia del documento digital.",
      "D": "Correcto. COMPRASAL opera con expediente electrónico y formalización mediante Firma Electrónica Certificada."
    }
  },
  {
    "id": "lpa-168",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Excepciones Legales al Uso de la Firma Electrónica",
    "statement": "Conforme a los límites del derecho civil y de familia en El Salvador, ¿en cuál de los siguientes actos NO es admisible el otorgamiento mediante simple documento electrónico particular firmado con FEC?",
    "options": {
      "A": "En la firma de contratos mercantiles de suministro de bienes de oficina.",
      "B": "En los testamentos solemnes y en los actos jurídicos solemnes relativos al derecho de familia (como la celebración del matrimonio o reconocimiento de hijos), que exigen solemnidades físicas indelegables.",
      "C": "En la presentación de solicitudes de información pública ante la UAIP.",
      "D": "En la suscripción de acuerdos de confidencialidad entre empresas de software."
    },
    "correctAnswer": "B",
    "explanation": "El ordenamiento jurídico reserva ciertas formalidades ad solemnitatem indelegables al soporte presencial y notarial directo: los testamentos solemnes (Arts. 1009 y sigs. C.C.) y los actos constitutivos del estado familiar se rigen por formalidades sacramentales presenciales no susceptibles de sustitución por documento privado digital simple.",
    "legalBasis": "Código Civil de El Salvador y Ley de Notariado.",
    "distractorRationale": {
      "A": "Los contratos mercantiles ordinarios admiten ampliamente la firma electrónica con plena eficacia.",
      "B": "Correcto. Actos de familia personalísimos y testamentos solemnes exigen formalidad presencial especial.",
      "C": "Las peticiones ante el IAIP y UAIPs se tramitan fluidamente en formato electrónico telemático.",
      "D": "Los acuerdos de confidencialidad (NDAs) son contratos privados típicos plenamente firmables con FEC."
    }
  },
  {
    "id": "lpa-169",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Auditorías Periódicas de Seguridad a los PSCs por el MINEC",
    "statement": "Conforme al Reglamento de la LFE, ¿con qué frecuencia mínima deben los Proveedores de Servicios de Certificación acreditar auditorías externas de seguridad y sistemas?",
    "options": {
      "A": "Al menos una vez al año, practicadas por entidades auditoras independientes y acreditadas en normas ISO/IEC 27001 y estándares WebTrust o ETSI.",
      "B": "Una vez cada cincuenta años sin necesidad de peritos especializados.",
      "C": "Nunca, porque los PSCs gozan de fe pública infalible de por vida.",
      "D": "Solo si ocurre un incendio físico en el servidor de la empresa."
    },
    "correctAnswer": "A",
    "explanation": "La Unidad de Firma Electrónica del MINEC somete a los PSCs acreditados a auditorías de cumplimiento anuales obligatorias sobre seguridad lógica, criptográfica, física y de procesos, verificando la vigencia de certificaciones internacionales de buenas prácticas (ISO 27001, WebTrust for CA).",
    "legalBasis": "Reglamento de la Ley de Firma Electrónica de El Salvador.",
    "distractorRationale": {
      "A": "Correcto. Auditorías anuales independientes bajo normas internacionales ISO 27001 y WebTrust.",
      "B": "Cincuenta años dejaría obsoleta cualquier tecnología y comprometería la seguridad nacional.",
      "C": "No existe infalibilidad tecnológica perpetua; la seguridad requiere supervisión continua.",
      "D": "Los incidentes físicos se reportan de inmediato, pero la auditoría es periódica obligatoria preventiva."
    }
  },
  {
    "id": "lpa-170",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Cese de Actividades de un PSC y Custodia de Registros",
    "statement": "Si un Proveedor de Servicios de Certificación decide cesar definitivamente en sus operaciones comerciales (Art. 32 LFE), ¿qué destino deben tener sus registros y certificados emitidos?",
    "options": {
      "A": "Debe formatear y destruir todos los discos duros para que nadie pueda comprobar los documentos pasados.",
      "B": "Debe notificar con al menos tres meses de antelación al MINEC y a sus usuarios, transfiriendo sus registros a otro PSC acreditado o depositándolos bajo custodia de la Unidad de Firma Electrónica del MINEC.",
      "C": "Debe vender las bases de datos personales al mejor postor en una subasta privada.",
      "D": "Los certificados se convierten automáticamente en títulos valores de deuda soberana."
    },
    "correctAnswer": "B",
    "explanation": "El Artículo 32 de la LFE establece un riguroso protocolo de salida: el PSC saliente debe avisar con anticipación para que los usuarios tomen previsiones y traspasar la base histórica de certificados y CRLs al MINEC o a otro PSC acreditado, garantizando que los documentos firmados en el pasado puedan seguir siendo validados en juicio durante su vigencia legal.",
    "legalBasis": "Ley de Firma Electrónica, Art. 32.",
    "distractorRationale": {
      "A": "Destruir los registros privaría a la ciudadanía de la prueba de sus contratos firmados históricamente.",
      "B": "Correcto. Aviso anticipado de 3 meses y transferencia de custodia histórica al MINEC u otro PSC.",
      "C": "La comercialización de datos personales es una gravísima infracción que viola la privacidad ciudadana.",
      "D": "Los certificados digitales son instrumentos técnicos de fe pública, no títulos cambiarios de crédito."
    }
  },
  {
    "id": "lpa-171",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Firma Electrónica de Personas Jurídicas o Firma de Entidad",
    "statement": "¿Cómo se instrumenta legalmente la Firma Electrónica Certificada de una sociedad anónima o institución bancaria en El Salvador?",
    "options": {
      "A": "Cualquier socio minoritario puede firmar sin necesidad de acreditar facultades de representación.",
      "B": "Se expide a nombre del edificio corporativo donde funciona la sucursal bancaria.",
      "C": "Se expide a favor de la persona jurídica a través de su representante legal debidamente facultado en la escritura de constitución o poder, vinculando jurídicamente a la entidad con las actuaciones suscritas.",
      "D": "Las sociedades mercantiles están prohibidas de usar firmas electrónicas en Centroamérica."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 16 de la LFE reconoce la emisión de certificados de firma a favor de personas jurídicas mediante sus apoderados o representantes legales legítimos, comprobándose fehacientemente ante el PSC el nombramiento inscrito en el Registro de Comercio (CNR) para legitimar la capacidad vinculante societaria.",
    "legalBasis": "Ley de Firma Electrónica, Art. 16 y Código de Comercio.",
    "distractorRationale": {
      "A": "La representación exige poder suficiente; los socios minoritarios no vinculan a la sociedad sin mandato.",
      "B": "Los bienes inmuebles carecen de personalidad jurídica y no pueden ser titulares de firmas.",
      "C": "Correcto. La persona jurídica actúa mediante su representante legal o apoderado legitimado ante el CNR.",
      "D": "Las empresas mercantiles son los principales usuarios y dinamizadores del comercio digital en la región."
    }
  },
  {
    "id": "lpa-172",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Certificados de Representación con Límites de Cuantía",
    "statement": "Conforme al Artículo 19 de la LFE, ¿puede un certificado de Firma Electrónica Certificada incorporar límites específicos a las facultades o cuantía monetaria de los actos que puede autorizar el firmante?",
    "options": {
      "A": "Está prohibido incorporar cualquier tipo de limitación en la estructura del certificado digital.",
      "B": "No, la firma electrónica certificada es siempre de cuantía infinita e ilimitada.",
      "C": "Solo si el firmante solicita un permiso especial ante un Juzgado de Menores.",
      "D": "Sí, el certificado puede consignar límites de uso respecto del alcance de la representación o cuantía máxima permitida, surtiendo plenos efectos oponibles frente a terceros que verifiquen el certificado."
    },
    "correctAnswer": "D",
    "explanation": "El estándar digital X.509 y el Art. 19 de la LFE permiten explícitamente parametrizar restricciones de cuantía máxima o de materia en las extensiones del certificado electrónico, protegiendo a la empresa en caso de que un apoderado intente suscribir transacciones que excedan sus poderes societarios registrados.",
    "legalBasis": "Ley de Firma Electrónica, Art. 19 inc. 2°.",
    "distractorRationale": {
      "A": "Las restricciones son elementos estándar contemplados en el formato internacional de certificados.",
      "B": "La infinidad de cuantía comprometería el control interno corporativo y la gestión de riesgos.",
      "C": "Los juzgados de menores tutelan derechos de la niñez, no el alcance de poderes mercantiles corporativos.",
      "D": "Correcto. La ley faculta incorporar límites expresos de facultades y cuantía oponibles a terceros."
    }
  },
  {
    "id": "lpa-173",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Preservación a Largo Plazo de Documentos Electrónicos (LTV)",
    "statement": "En el archivo y custodia digital a largo plazo de contratos electrónicos (Long-Term Validation o LTV), ¿qué técnica garantiza que un documento firmado siga siendo demostrable tras el vencimiento del certificado original?",
    "options": {
      "A": "Guardar el documento en un diskette magnético de 3.5 pulgadas colocado dentro de una caja fuerte de plomo.",
      "B": "El resellado de tiempo periódico y la incorporación de las respuestas OCSP y CRLs históricas en el propio contenedor del archivo (PAdES-LTV o XAdES-A) antes del vencimiento de los algoritmos.",
      "C": "Imprimir el archivo en papel químico y volver a escanearlo cada seis meses.",
      "D": "Eliminar la firma electrónica original para que el archivo ocupe menos espacio en el disco duro."
    },
    "correctAnswer": "B",
    "explanation": "La preservación de largo plazo (LTV) incorpora al documento firmado toda la cadena de confianza: el certificado del firmante, la CRL o respuesta OCSP emitida en el momento del firmado y un sello de tiempo cualificado. Si el certificado expira después, el sello de tiempo prueba que la firma era válida y vigente cuando se plasmó.",
    "legalBasis": "Estándares ETSI EN 319 142 (PAdES) y Ley de Firma Electrónica.",
    "distractorRationale": {
      "A": "Los diskettes magnéticos sufren degradación de datos en pocos años y son tecnológicamente obsoletos.",
      "B": "Correcto. LTV (PAdES/XAdES) resella con marcas temporales y preserva evidencias de validación histórica.",
      "C": "Escanear documentos impresos rompe la firma digital criptográfica original y degrada el valor probatorio.",
      "D": "Eliminar la firma digital destruye irremediablemente la integridad y la autenticidad del documento."
    }
  },
  {
    "id": "lpa-174",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Algoritmos Criptográficos Hash Seguros (SHA-256)",
    "statement": "¿Por qué el estándar técnico adoptado por el MINEC exige el uso de funciones hash robustas como SHA-256 o SHA-3 en lugar de algoritmos antiguos como MD5 o SHA-1?",
    "options": {
      "A": "Solo porque SHA-256 tiene un nombre que suena más moderno en inglés.",
      "B": "Porque SHA-256 es una marca comercial de la cual el ministerio recibe comisiones de venta.",
      "C": "Porque los algoritmos obsoletos presentan vulnerabilidad crítica a colisiones (dos documentos distintos con idéntico hash), lo que permitiría forjar y falsificar documentos firmados.",
      "D": "Porque MD5 consume el doble de papel que SHA-256 al imprimirse."
    },
    "correctAnswer": "C",
    "explanation": "La seguridad de la firma digital descansa en la resistencia de la función hash a colisiones. MD5 y SHA-1 fueron rotos criptográficamente por la comunidad científica, siendo mandatorio el uso de la familia SHA-2 (SHA-256, SHA-384, SHA-512) o SHA-3 para garantizar matemáticamente la unicidad del resumen digital.",
    "legalBasis": "Directrices Técnicas del MINEC y Estándares NIST.",
    "distractorRationale": {
      "A": "Los estándares técnicos se fundan en robustez matemática demostrada y no en modas de nomenclatura.",
      "B": "SHA-256 es un estándar criptográfico público abierto no sujeto a regalías ni derechos de venta.",
      "C": "Correcto. Resistencia a colisiones criptográficas para impedir la forja de documentos con igual hash.",
      "D": "Los hashes criptográficos operan en código binario digital independiente del consumo de papel físico."
    }
  },
  {
    "id": "lpa-175",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Reconocimiento Transfronterizo de Firmas Extranjeras",
    "statement": "De acuerdo con el Artículo 35 de la Ley de Firma Electrónica, ¿bajo qué presupuesto legal un certificado electrónico emitido por un PSC extranjero tiene plena validez jurídica en El Salvador?",
    "options": {
      "A": "Mediante acuerdo de reciprocidad internacional o si el certificado es revalidado o respaldado por un PSC acreditado ante el MINEC que asuma la responsabilidad de su homologación.",
      "B": "Cualquier certificado extranjero es nulo ipso jure y su uso constituye traición a la patria.",
      "C": "Solo si el titular del certificado viaja personalmente en avión a San Salvador a firmar en una libreta.",
      "D": "Siempre que el país emisor tenga costa marítima en el Océano Pacífico."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 35 de la LFE adopta el principio de homologación y reciprocidad: los certificados extranjeros gozarán de idéntico valor si cumplen con estándares equivalentes y son avalados por un PSC local acreditado, o en virtud de convenios y tratados internacionales suscritos por la República de El Salvador.",
    "legalBasis": "Ley de Firma Electrónica, Art. 35.",
    "distractorRationale": {
      "A": "Correcto. Acuerdos de reciprocidad internacional o reconocimiento por homologación mediante un PSC local.",
      "B": "La cooperación transfronteriza y el comercio digital global reconocen la eficacia de firmas foráneas homologadas.",
      "C": "El entorno telemático digital persigue precisamente evitar desplazamientos físicos innecesarios.",
      "D": "La ubicación geográfica marina es un criterio enteramente impertinente en la normativa técnica."
    }
  },
  {
    "id": "lpa-176",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Función Notarial y Cotejo de Documentos Electrónicos",
    "statement": "¿Qué potestad confiere el derecho salvadoreño a los notarios respecto de la certificación de documentos físicos emanados de archivos electrónicos con Firma Electrónica Certificada?",
    "options": {
      "A": "Está prohibido que los notarios intervengan en cualquier acto que use tecnología digital.",
      "B": "El notario debe cobrar una tasa del cincuenta por ciento del valor del contrato como honorario forzoso.",
      "C": "El notario está autorizado a borrar la firma digital y colocar únicamente su huella de pie.",
      "D": "El notario puede dar fe de que la reproducción física o testimonio en papel concuerda fielmente con el documento electrónico original firmado con FEC que ha verificado en el sistema informático."
    },
    "correctAnswer": "D",
    "explanation": "En virtud de la fe pública notarial y el Art. 30 de la Ley de Notariado en armonía con la LFE, el notario puede verificar en pantalla la autenticidad y vigencia de la FEC de un documento digital y expedir certificación notarial de concordancia sobre su reproducción impresa en papel, haciendo constar la verificación de validez efectuada.",
    "legalBasis": "Ley de Notariado y Ley de Firma Electrónica.",
    "distractorRationale": {
      "A": "El notario salvadoreño integra activamente los avances tecnológicos dentro del marco de su fe pública.",
      "B": "Los honorarios notariales se pactan conforme a la libre contratación sin imposición forzosa del 50%.",
      "C": "La función notarial se ejerce con la firma y sello oficial registrado en CSJ, no huellas podales.",
      "D": "Correcto. El notario puede cotejar y expedir testimonio o certificación de concordancia fáctica digital."
    }
  },
  {
    "id": "lpa-177",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Notificaciones Judiciales Telemáticas y Casillero Virtual",
    "statement": "En los tribunales de la República de El Salvador que implementan el casillero electrónico de notificaciones judiciales (Arts. 170 y 171 CPCM):",
    "options": {
      "A": "Requieren que el secretario judicial visite la casa del abogado a dejar un telegrama de papel.",
      "B": "Solo tienen valor de sugerencia moral sin fuerza obligatoria procesal.",
      "C": "Las resoluciones judiciales firmadas electrónicamente por los jueces remitidas a los casilleros telemáticos autorizados de las partes surten plenos efectos de notificación legal emplazatoria.",
      "D": "Se consideran nulas si el abogado defensor no responde con un mensaje de texto de agradecimiento."
    },
    "correctAnswer": "C",
    "explanation": "El Código Procesal Civil y Mercantil (Arts. 170 a 178) y la Ley de Firma Electrónica habilitan el sistema de notificaciones electrónicas judiciales en casillero oficial, computándose los plazos a partir de la constancia electrónica de recepción en el sistema informático judicial.",
    "legalBasis": "Código Procesal Civil y Mercantil, Arts. 170 y 171.",
    "distractorRationale": {
      "A": "El casillero digital suple legalmente la necesidad de la entrega física en papel cuando ha sido fijado.",
      "B": "Las resoluciones judiciales son actos de potestad jurisdiccional con plena fuerza vinculante.",
      "C": "Correcto. Las resoluciones firmadas digitalmente y notificadas por casillero virtual tienen plena eficacia legal.",
      "D": "La notificación procesal es un acto unilateral y no depende de fórmulas de cortesía o agradecimiento."
    }
  },
  {
    "id": "lpa-178",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Régimen Sancionador a los PSCs por Infracciones Graves",
    "statement": "Conforme al Artículo 42 de la Ley de Firma Electrónica, ¿cuál de las siguientes conductas constituye una infracción grave imputable a un Proveedor de Servicios de Certificación?",
    "options": {
      "A": "Suspender la prestación de sus servicios sin previa comunicación al MINEC o no mantener operativos los servicios de consulta de vigencia (CRL/OCSP) por fallas no justificadas.",
      "B": "Cobrar precios más bajos que los de la competencia en el mercado libre.",
      "C": "Contratar empleados salvadoreños graduados de universidades públicas.",
      "D": "Tener una página web institucional con diseño responsivo para teléfonos inteligentes."
    },
    "correctAnswer": "A",
    "explanation": "El régimen de infracciones de la LFE sanciona como falta grave a los PSCs que descuiden la disponibilidad continua de los mecanismos de consulta y revocación de certificados o interrumpan el servicio sin cumplir el plazo de aviso formal obligatorio al MINEC, arriesgando la seguridad del tráfico mercantil.",
    "legalBasis": "Ley de Firma Electrónica, Art. 42.",
    "distractorRationale": {
      "A": "Correcto. Desatender los servicios de consulta de vigencia o cesar sin aviso configura infracción grave.",
      "B": "La libre competencia y fijación de precios está amparada por la Ley de Competencia y el mercado.",
      "C": "La contratación de profesionales locales es una práctica deseable y conforme a las leyes laborales.",
      "D": "El diseño web accesible y moderno es una buena práctica técnica y de usabilidad ciudadana."
    }
  },
  {
    "id": "lpa-179",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Sanción de Cancelación Definitiva de Acreditación a un PSC",
    "statement": "¿Qué causal legal autoriza al Ministerio de Economía (MINEC) a cancelar definitivamente la acreditación oficial de un Proveedor de Servicios de Certificación (Art. 43 LFE)?",
    "options": {
      "A": "Que la empresa no invite al ministro al festejo de su aniversario corporativo.",
      "B": "Que el director del PSC pierda una partida de ajedrez contra un funcionario del ministerio.",
      "C": "Que las oficinas de la empresa estén pintadas de color amarillo o verde claro.",
      "D": "La comisión reiterada de infracciones muy graves, el falseamiento de datos para obtener la acreditación o la insolvencia que determine la pérdida de la garantía patrimonial obligatoria."
    },
    "correctAnswer": "D",
    "explanation": "El Artículo 43 de la LFE contempla la revocación de la acreditación como máxima sanción administrativa ante faltas muy graves reiteradas, quiebra no cubierta por seguro, falsedad en auditorías o cuando se ponga en riesgo crítico la confianza en la infraestructura nacional de firma electrónica.",
    "legalBasis": "Ley de Firma Electrónica, Art. 43.",
    "distractorRationale": {
      "A": "Las invitaciones sociales no forman parte de las obligaciones jurídicas regladas de los PSCs.",
      "B": "Juegos o competencias recreativas son ajenos al régimen sancionador administrativo objetivo.",
      "C": "Los colores de pintura de oficinas forman parte de la libertad de empresa y propiedad privada.",
      "D": "Correcto. Faltas muy graves reiteradas, falsedad en la acreditación o pérdida de solvencia y fianza."
    }
  },
  {
    "id": "lpa-180",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Firma en la Nube y Firma Remota (Remote Signing)",
    "statement": "En los sistemas modernos de Firma Electrónica Remota o en la Nube autorizados por los estándares internacionales del MINEC:",
    "options": {
      "A": "La clave privada se comparte libremente en carpetas públicas de Google Drive sin clave.",
      "B": "Los datos de creación de firma (clave privada) se custodian en un Hardware Security Module (HSM) centralizado de alta seguridad del PSC, requiriendo autenticación multifactor (MFA) del usuario para autorizar la firma.",
      "C": "Se permite que cualquier empleado bancario firme en nombre de los clientes sin que ellos se enteren.",
      "D": "El titular debe enviar su firma en una postal de correo antes de que la nube la procese."
    },
    "correctAnswer": "B",
    "explanation": "La firma en la nube (Remote Signing) implementa estándares ETSI TS 119 432 donde la clave privada se resguarda en un HSM nivel FIPS 140-2 Nivel 3. El usuario, mediante biometría o token OTP (autenticación multifactor), ejerce el control exclusivo de la activación del módulo para estampar la firma sin portar token USB físico.",
    "legalBasis": "Estándares ETSI de Firma Remota y Regulaciones del MINEC.",
    "distractorRationale": {
      "A": "Almacenar claves privadas en carpetas públicas compartidas violaría la confidencialidad criptográfica.",
      "B": "Correcto. Clave privada resguardada en HSM bajo control exclusivo del titular mediante autenticación multifactor.",
      "C": "El titular es el único con potestad de activar la firma; la suplantación bancaria constituye delito.",
      "D": "La firma remota opera por canales telemáticos cifrados en tiempo real sin soporte físico postal."
    }
  },
  {
    "id": "lpa-181",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Autenticidad de Documentos Digitales en Formato PDF (PAdES)",
    "statement": "Al examinar un documento contractual en formato PDF suscrito con Firma Electrónica Certificada salvadoreña mediante software lector estándar (Adobe Reader o similar):",
    "options": {
      "A": "El software verifica la cadena de confianza hasta la Autoridad Raíz acreditada del MINEC, mostrando si la firma es válida, si el documento no fue modificado y la hora legal del estampado.",
      "B": "El software cambia automáticamente todas las palabras del contrato al idioma latín antiguo.",
      "C": "Se formatea de inmediato el disco duro del usuario que abre el documento.",
      "D": "El archivo se autodestruye en treinta segundos como en las películas de espías."
    },
    "correctAnswer": "A",
    "explanation": "El estándar PAdES (PDF Advanced Electronic Signatures) permite la validación visual y criptográfica en lectores estándar: el panel de firma comprueba la firma matemática, la integridad del archivo y enlaza con la Lista de Confianza (TSL) acreditada del MINEC, validando que el certificado emisor goza de reconocimiento oficial.",
    "legalBasis": "Estándar ETSI EN 319 142 y Ley de Firma Electrónica.",
    "distractorRationale": {
      "A": "Correcto. Comprueba la cadena de certificación oficial, la validez del certificado y la inalterabilidad.",
      "B": "El formato PAdES preserva el contenido íntegro y la tipografía original en el idioma en que fue suscrito.",
      "C": "Los lectores estándar de PDF respetan la integridad del sistema operativo del ordenador.",
      "D": "Los documentos electrónicos válidos están diseñados para su archivo permanente, no para autodestruirse."
    }
  },
  {
    "id": "lpa-182",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Interoperabilidad en la Administración Pública Salvadoreña",
    "statement": "El uso de la Firma Electrónica Certificada en los ministerios e instituciones autónomas del Estado tiene como finalidad primordial:",
    "options": {
      "A": "Duplicar el gasto en impresoras y archiveros metálicos en todos los despachos.",
      "B": "Fomentar la interoperabilidad gubernamental, la eliminación gradual del papel físico (gobierno sin papel), la celeridad procedimental y la transparencia administrativa con plena seguridad jurídica.",
      "C": "Obligar a los ciudadanos a comprar estampillas de correos de papel en cada trámite.",
      "D": "Suspender la atención al público por tiempo indeterminado."
    },
    "correctAnswer": "B",
    "explanation": "La modernización del Estado salvadoreño y la LPA promueven la transformación digital: el empleo de la firma electrónica certificada en expedientes administrativos agiliza trámites, reduce costos de almacenamiento físico, garantiza trazabilidad y acerca los servicios públicos al ciudadano con disponibilidad 24/7.",
    "legalBasis": "Ley de Procedimientos Administrativos Art. 3 y Ley de Firma Electrónica.",
    "distractorRationale": {
      "A": "La digitalización persigue reducir radicalmente el gasto en papel, tóner y bodegas de archivo.",
      "B": "Correcto. Interoperabilidad, reducción de papel, transparencia, celeridad y tutela jurídica efectiva.",
      "C": "Las estampillas de papel quedan superadas por aranceles electrónicos y pasarelas de pago virtual.",
      "D": "Mejora sustancialmente la disponibilidad y accesibilidad del servicio público para toda la sociedad."
    }
  },
  {
    "id": "lpa-183",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Firma de Actas y Acuerdos de Concejos Municipales",
    "statement": "¿Pueden los miembros de un Concejo Municipal autorizar acuerdos y actas de sesión ordinaria mediante Firma Electrónica Certificada?",
    "options": {
      "A": "Solo si los regidores votan unánimemente por renunciar a sus sueldos mensuales.",
      "B": "No, la ley municipal prohíbe que los alcaldes utilicen tecnología electrónica.",
      "C": "Sí, los acuerdos municipales suscritos mediante FEC por los miembros legalmente facultados poseen plena validez formal y ejecutividad, incorporándose válidamente en el libro electrónico municipal.",
      "D": "Únicamente si el acta se asienta primero en una piedra tallada con cincel."
    },
    "correctAnswer": "C",
    "explanation": "El Código Municipal y la Ley de Firma Electrónica habilitan a las municipalidades para digitalizar sus procedimientos internos y acuerdos de concejo, teniendo la firma certificada de los alcaldes y secretarios municipales la misma fuerza fehaciente que sus firmas manuscritas tradicionales.",
    "legalBasis": "Código Municipal y Ley de Firma Electrónica Art. 12.",
    "distractorRationale": {
      "A": "La retribución salarial o dietas de los regidores es independiente de la modalidad técnica de suscripción de actas.",
      "B": "Las normas de modernización pública amparan la adopción tecnológica en todas las alcaldías del país.",
      "C": "Correcto. Plena validez y eficacia de acuerdos municipales suscritos telemáticamente con FEC.",
      "D": "Los soportes líticos arcaicos no forman parte de los medios de registro administrativo contemporáneo."
    }
  },
  {
    "id": "lpa-184",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Peritaje Informático Forense sobre Documentos Firmados",
    "statement": "En caso de controversia judicial donde se impugne la integridad de un documento digital con firma electrónica:",
    "options": {
      "A": "Se queman los discos duros de ambas partes en una hoguera judicial.",
      "B": "El juez debe decidir quién tiene la razón lanzando una moneda al aire.",
      "C": "Se declara ganador del juicio a la parte que tenga más parientes en la corte.",
      "D": "El juez ordenará la realización de un peritaje informático forense para examinar la cadena criptográfica, la función hash, la validez del certificado al momento de la firma y los registros de auditoría del PSC."
    },
    "correctAnswer": "D",
    "explanation": "Conforme al CPCM (Arts. 375 y sigs.) y la LFE, la prueba pericial informática es el medio idóneo para dilucidar aspectos tecnológicos complejos: peritos en ciberseguridad y criptografía analizan metadatos, firmas digitales y registros del PSC para dictaminar con rigor científico sobre la autoría e integridad.",
    "legalBasis": "Código Procesal Civil y Mercantil, Arts. 375-388 y Ley de Firma Electrónica.",
    "distractorRationale": {
      "A": "La destrucción de medios probatorios materiales configuraría el delito grave de supresión documental.",
      "B": "El azar o lanzamiento de monedas quebrantaría la garantía de debida motivación judicial (Art. 172 Cn.).",
      "C": "La imparcialidad judicial proscribe cualquier sesgo de parentesco o favoritismo particular.",
      "D": "Correcto. Dictamen pericial informático sobre cadena criptográfica, hash y registros de seguridad."
    }
  },
  {
    "id": "lpa-185",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Uso de Firma Electrónica en el Sistema Bancario y Contratos de Crédito",
    "statement": "Cuando una institución bancaria supervisada por la SSF formaliza contratos de apertura de crédito o tarjetas mediante Firma Electrónica Certificada con sus cuentahabientes:",
    "options": {
      "A": "El contrato carece de valor y el cliente queda exento de pagar el préstamo bancario.",
      "B": "El contrato electrónico presta mérito ejecutivo pleno y fuerza vinculante para el cobro judicial de saldos deudores sin requerir ratificación notarial previa de firmas físicas.",
      "C": "El banco está obligado a regalar todo el dinero prestado sin cobrar intereses.",
      "D": "Se anula la autorización de operación del banco por parte de la SSF."
    },
    "correctAnswer": "B",
    "explanation": "La Ley de Firma Electrónica y la Ley de Bancos amparan la contratación financiera digital. La firma electrónica certificada en pagarés electrónicos o mutuos bancarios otorga mérito ejecutivo (Art. 12 LFE y Art. 457 CPCM), facilitando el cobro en sede judicial mercantil sin necesidad de acta notarial previa de autenticación.",
    "legalBasis": "Ley de Firma Electrónica Art. 12 y Ley de Bancos.",
    "distractorRationale": {
      "A": "La obligación crediticia subsiste plenamente y es exigible conforme al derecho mercantil.",
      "B": "Correcto. El contrato digital con FEC posee fuerza ejecutiva y eficacia vinculante directa en juicio.",
      "C": "El mutuo financiero exige el reintegro del capital más los intereses pactados según ley.",
      "D": "La SSF promueve y fiscaliza la inclusión financiera y la digitalización bancaria segura."
    }
  },
  {
    "id": "lpa-186",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Firma Electrónica y Secreto de las Comunicaciones (Art. 24 Cn.)",
    "statement": "¿Cómo se concilia la infraestructura de Firma Electrónica Certificada con la inviolabilidad de las comunicaciones privadas garantizada por el Artículo 24 de la Constitución?",
    "options": {
      "A": "Los ciudadanos deben enviar una copia de todas sus claves privadas al cuartel policial central.",
      "B": "El gobierno tiene derecho de leer todos los correos electrónicos y mensajes de WhatsApp sin orden judicial.",
      "C": "El PSC y las autoridades tienen prohibido acceder o almacenar la clave privada del usuario, garantizando el secreto inviolable del contenido de los mensajes cifrados que solo el titular y el destinatario pueden conocer.",
      "D": "Se prohíbe el uso de algoritmos de cifrado matemático a los ciudadanos comunes."
    },
    "correctAnswer": "C",
    "explanation": "La arquitectura PKI de la LFE garantiza la privacidad: el PSC únicamente certifica la identidad asociada a una clave pública; la clave privada permanece siempre en control reservado del usuario. Cualquier interferencia estatal en el contenido de comunicaciones electrónicas exige orden judicial previa motivada de interceptación (Art. 24 Cn.).",
    "legalBasis": "Constitución de la República Art. 24 y Ley de Firma Electrónica Art. 15.",
    "distractorRationale": {
      "A": "Obligar a entregar llaves privadas destruiría la privacidad y violaría garantías ciudadanas.",
      "B": "La interceptación de comunicaciones sin autorización judicial escrita viola el Art. 24 de la Constitución.",
      "C": "Correcto. La clave privada se mantiene bajo custodia exclusiva del titular sin acceso por parte del PSC ni del Estado.",
      "D": "El cifrado es una herramienta legítima de seguridad informática amparada por la ley."
    }
  },
  {
    "id": "lpa-187",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Certificados de Servidor Seguro (SSL/TLS) y su Acreditación",
    "statement": "Además de la firma personal, ¿qué otro tipo de certificados digitales regula y supervisa el marco de servicios de certificación digital para garantizar conexiones seguras en sitios web del Estado?",
    "options": {
      "A": "Los certificados de servidor seguro (SSL/TLS) para autenticación de sitios web y canales cifrados, garantizando que el ciudadano navega en el portal oficial auténtico y no en un sitio apócrifo de phishing.",
      "B": "Certificados de conducir bicicletas de montaña en carreteras federales.",
      "C": "Pólizas de seguro funerario de emergencia.",
      "D": "Permisos de caza de animales silvestres en parques nacionales."
    },
    "correctAnswer": "A",
    "explanation": "Los PSCs pueden emitir certificados de sede electrónica y de servidor SSL/TLS acreditados. Estos certificados permiten el cifrado de datos en tránsito (protocolo HTTPS) e identifican indubitadamente a las dependencias gubernamentales ante los usuarios, combatiendo la ciberdelincuencia y la suplantación de portales del Estado.",
    "legalBasis": "Reglamento de la Ley de Firma Electrónica y Normas Técnicas MINEC.",
    "distractorRationale": {
      "A": "Correcto. Los certificados SSL/TLS garantizan la autenticidad del portal web y el cifrado de canales HTTPS.",
      "B": "Las licencias de tránsito se rigen por la Ley de Transporte Terrestre del VMT.",
      "C": "Los servicios funerarios pertenecen al sector asegurador y de previsión social.",
      "D": "La caza y vida silvestre está regulada por el Ministerio de Medio Ambiente (MARN)."
    }
  },
  {
    "id": "lpa-188",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Uso de Firma Electrónica en Recetas Médicas Digitales",
    "statement": "En el ámbito de la salud y farmacia salvadoreña, ¿qué validez posee la receta médica electrónica emitida por un profesional facultado y suscrita con Firma Electrónica Certificada?",
    "options": {
      "A": "Requiere que el médico viaje físicamente a la farmacia a dictar verbalmente la prescripción.",
      "B": "Está terminantemente prohibida y el farmacéutico debe llamar a la policía para detener al paciente.",
      "C": "Solo sirve para comprar caramelos y golosinas sin registro médico.",
      "D": "Posee plena validez legal para la dispensación de medicamentos en farmacias y hospitales, garantizando la identidad del médico prescriptor y evitando la adulteración de dosis o medicamentos controlados."
    },
    "correctAnswer": "D",
    "explanation": "La digitalización del sistema de salud y las normativas del Consejo Superior de Salud Pública (CSSP) y Dirección Nacional de Medicamentos (DNM) reconocen la receta médica electrónica con FEC, permitiendo una trazabilidad segura de fármacos controlados y eliminando falsificaciones de sellos y firmas autógrafas en papel.",
    "legalBasis": "Ley de Firma Electrónica, Código de Salud y Regulaciones DNM/CSSP.",
    "distractorRationale": {
      "A": "El sistema telemático evita desplazamientos engorrosos de profesionales y pacientes.",
      "B": "La receta digital es una herramienta avalada que optimiza la atención de pacientes crónicos y ambulatorios.",
      "C": "Se aplica prioritariamente a medicamentos éticos y controlados sujetos a fiscalización médica.",
      "D": "Correcto. Plena validez de recetas electrónicas suscritas con FEC para dispensación segura y trazable."
    }
  },
  {
    "id": "lpa-189",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Prohibición de Monopolios en los Servicios de Certificación",
    "statement": "De conformidad con el Artículo 110 de la Constitución y el régimen de la LFE, ¿puede el Estado salvadoreño otorgar la exclusividad o monopolio de los servicios de certificación de firma a una sola empresa privada?",
    "options": {
      "A": "Los monopolios son obligatorios por mandato del Código de Comercio.",
      "B": "Sí, el Estado debe entregar el monopolio de las firmas a un familiar cercano del regulador.",
      "C": "No, la ley fomenta la libre concurrencia y competencia en el mercado de servicios de certificación, pudiendo acreditarse cualquier entidad pública o privada que cumpla los requisitos técnicos y patrimoniales.",
      "D": "Solo se permite que opere una empresa por cada siglo calendario."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 110 de la Constitución salvadoreña prohíbe taxativamente las prácticas monopolísticas. La LFE y su reglamento instituyen un régimen abierto y no discriminatorio de acreditación donde múltiples empresas locales o foráneas pueden competir en igualdad de condiciones bajo la supervisión objetiva del MINEC.",
    "legalBasis": "Constitución de la República Art. 110 y Ley de Firma Electrónica Art. 24.",
    "distractorRationale": {
      "A": "El Código de Comercio y la Ley de Competencia sancionan las conductas anticompetitivas y monopolios.",
      "B": "El nepotismo y los privilegios monopólicos son contrarios a la Constitución y constitutivos de delito.",
      "C": "Correcto. Prohibición de monopolios y garantía de libre concurrencia en la prestación de servicios PKI.",
      "D": "La multiplicidad de oferentes mejora los precios y la calidad técnica para los consumidores."
    }
  },
  {
    "id": "lpa-190",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Responsabilidad Disciplinaria de Funcionarios por no Aceptar FEC",
    "statement": "Si un funcionario de una ventanilla pública se niega injustificadamente a recibir un documento firmado válidamente con Firma Electrónica Certificada exigiendo soporte en papel:",
    "options": {
      "A": "Incurre en infracción disciplinaria por inobservancia de la Ley de Firma Electrónica y de la Ley de Procedimientos Administrativos, pudiendo el ciudadano interponer queja formal ante su superior jerárquico.",
      "B": "El funcionario recibe un ascenso laboral inmediato por cuidar el papel del Estado.",
      "C": "El ciudadano pierde el derecho de seguir viviendo en El Salvador.",
      "D": "Se declara en quiebra toda la administración pública salvadoreña."
    },
    "correctAnswer": "A",
    "explanation": "El principio de no discriminación de medios y equivalencia funcional (Art. 12 LFE y Art. 6 LPA) prohíbe que los servidores públicos rechacen trámites por el solo hecho de presentarse en soporte electrónico firmado con FEC. Dicho rechazo arbitrario acarrea responsabilidad administrativa y queja disciplinaria por obstrucción al servicio público.",
    "legalBasis": "Ley de Procedimientos Administrativos Art. 3 y Ley de Firma Electrónica Art. 12.",
    "distractorRationale": {
      "A": "Correcto. Incurre en falta disciplinaria por vulnerar el deber de admitir medios electrónicos reglados.",
      "B": "Obstaculizar la modernización del Estado no constituye mérito ni causal de ascenso.",
      "C": "Los derechos civiles y la nacionalidad están protegidos por la Constitución (Arts. 5 y 90 Cn.).",
      "D": "La responsabilidad disciplinaria es individual del servidor infractor y no afecta la continuidad estatal."
    }
  },
  {
    "id": "lpa-191",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Cadena de Confianza y Autoridad Raíz Nacional",
    "statement": "En la cúspide de la jerarquía de certificación digital en El Salvador (PKI nacional), ¿qué entidad opera la Autoridad Certificadora Raíz (Root CA)?",
    "options": {
      "A": "Un club de ajedrez comunitario.",
      "B": "Una empresa de telefonía celular móvil elegida por sorteo anual.",
      "C": "La embajada de un país de Europa oriental.",
      "D": "La Unidad de Firma Electrónica del Ministerio de Economía (MINEC), que emite los certificados a los PSCs acreditados subordinados."
    },
    "correctAnswer": "D",
    "explanation": "La arquitectura PKI salvadoreña sigue el modelo jerárquico: la Autoridad de Certificación Raíz de la República de El Salvador es operada directamente por el MINEC. Desde esa raíz nacional se emiten los certificados intermedios a los PSCs autorizados, quienes a su vez emiten los certificados finales a los ciudadanos y empresas.",
    "legalBasis": "Reglamento de la Ley de Firma Electrónica y Estructura PKI Nacional.",
    "distractorRationale": {
      "A": "Las organizaciones recreativas carecen de competencia técnica y legal para operar la raíz de certificación.",
      "B": "Las empresas de telecomunicaciones son proveedores de red, no la autoridad raíz soberana del Estado.",
      "C": "La soberanía digital estatal no se delega en representaciones diplomáticas extranjeras.",
      "D": "Correcto. El MINEC opera la Root CA nacional garantizando la soberanía criptográfica y la jerarquía de confianza."
    }
  },
  {
    "id": "lpa-192",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Firma Electrónica en Expedientes Judiciales Electrónicos",
    "statement": "En el marco del Expediente Judicial Electrónico que moderniza los tribunales salvadoreños:",
    "options": {
      "A": "Las sentencias judiciales pierden obligatoriedad y se convierten en simples recomendaciones amistosas.",
      "B": "Las sentencias, autos y decretos suscritos por los jueces mediante Firma Electrónica Certificada gozan de la misma fe pública judicial y autenticidad que las firmas físicas en papel, permitiendo su consulta remota por las partes.",
      "C": "Los jueces deben pagar una multa cada vez que dicten una sentencia electrónica.",
      "D": "Las sentencias electrónicas caducan automáticamente a los tres días de dictadas."
    },
    "correctAnswer": "B",
    "explanation": "La implementación del expediente judicial digital avalada por la Corte Suprema de Justicia confiere fe pública originaria a los actos procesales suscritos por los jueces y secretarios de actuaciones con su FEC oficial, garantizando la inmutabilidad de los fallos judiciales y su consulta telemática segura.",
    "legalBasis": "Ley Orgánica Judicial y Ley de Firma Electrónica.",
    "distractorRationale": {
      "A": "La potestad de juzgar y ejecutar lo juzgado (Art. 172 Cn.) mantiene plena imperatividad en formato digital.",
      "B": "Correcto. Las resoluciones judiciales suscritas con FEC tienen idéntica fe pública judicial y autenticidad.",
      "C": "Los funcionarios judiciales ejercen potestades constitucionales indebidas de tributos o multas por innovar.",
      "D": "La firmeza y ejecutoria judicial se rigen por los plazos comunes procesales del CPCM."
    }
  },
  {
    "id": "lpa-193",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Firma Electrónica y Protección de Datos Personales",
    "statement": "En la emisión y gestión de certificados electrónicos, ¿qué límites impone el marco normativo a los PSCs respecto del tratamiento de los datos personales de los solicitantes?",
    "options": {
      "A": "Los PSCs únicamente pueden recopilar los datos estrictamente necesarios para la expedición del certificado y no pueden utilizarlos para fines comerciales ajenos ni transferirlos sin consentimiento previo del titular.",
      "B": "Los PSCs pueden publicar el número de tarjeta de crédito del titular en internet.",
      "C": "Los PSCs están obligados a vender los datos personales a agencias de publicidad no deseadas.",
      "D": "No existe ninguna norma de protección de datos en el entorno digital de El Salvador."
    },
    "correctAnswer": "A",
    "explanation": "El Artículo 27 de la LFE consagra la protección de datos: el PSC solo recabará los datos personales indispensables para la verificación de identidad y emisión del certificado, debiendo guardar estricto secreto profesional y no pudiendo destinarlos a fines mercadotécnicos ni cederlos a terceros sin consentimiento informado.",
    "legalBasis": "Ley de Firma Electrónica Art. 27 y Art. 2 Cn.",
    "distractorRationale": {
      "A": "Correcto. Principio de minimización de datos, finalidad estricta y deber de confidencialidad y no cesión.",
      "B": "Publicar datos bancarios violaría el derecho constitucional a la intimidad y seguridad patrimonial.",
      "C": "La comercialización inconsulta de bases de datos de clientes está terminantemente prohibida por la ley.",
      "D": "La Constitución y la LFE tutelan activamente el derecho a la autodeterminación informativa."
    }
  },
  {
    "id": "lpa-194",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Notificación Inmediata en Caso de Vulneración de Seguridad",
    "statement": "Si un PSC acreditado sufre un incidente de seguridad grave o intrusión informática que comprometa la integridad de sus sistemas de certificación (Art. 30 LFE):",
    "options": {
      "A": "Debe ocultar el incidente durante varios años para que no bajen sus ventas.",
      "B": "Debe notificar inmediatamente al MINEC y a los titulares de certificados afectados, adoptando medidas de contingencia inmediatas para mitigar riesgos y revocar certificados comprometidos.",
      "C": "Debe desconectar todas las computadoras y huir del territorio nacional.",
      "D": "Se condena a la víctima a pagar los costos del ataque informático."
    },
    "correctAnswer": "B",
    "explanation": "El deber de diligencia y transparencia de los PSCs exige que ante cualquier compromiso o riesgo de sus claves maestras o sistemas de emisión, se alerte de inmediato al regulador (MINEC) y a los usuarios para proceder a la revocación masiva y preservación de la seguridad jurídica en las transacciones.",
    "legalBasis": "Ley de Firma Electrónica, Art. 30.",
    "distractorRationale": {
      "A": "Ocultar incidentes de ciberseguridad constituye falta gravísima sujeta a revocación de la acreditación.",
      "B": "Correcto. Obligación de notificación inmediata al MINEC y a los titulares afectados con plan de mitigación.",
      "C": "La fuga o abandono institucional agrava la responsabilidad penal y civil de los administradores societarios.",
      "D": "Las víctimas del ataque cibernético tienen derecho a ser indemnizadas, jamás a ser castigadas."
    }
  },
  {
    "id": "lpa-195",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Uso de Firma Electrónica en Asambleas de Accionistas Virtuales",
    "statement": "Conforme a las reformas al Código de Comercio salvadoreño, ¿pueden los accionistas de una sociedad anónima asistir a la asamblea por medios telemáticos y firmar el acta con FEC?",
    "options": {
      "A": "Solo si los accionistas demuestran haber nacido en el mismo siglo.",
      "B": "No, las asambleas de accionistas solo son válidas si todos los socios están físicamente en la misma habitación.",
      "C": "Sí, es plenamente válido celebrar asambleas generales ordinarias y extraordinarias por videoconferencia y asentar los acuerdos en actas suscritas mediante Firma Electrónica Certificada por el presidente y secretario.",
      "D": "Está prohibido que las sociedades anónimas celebren acuerdos a distancia."
    },
    "correctAnswer": "C",
    "explanation": "Las reformas mercantiles y el Código de Comercio de El Salvador admiten las asambleas a distancia mediante plataformas de videoconferencia que garanticen la identidad, deliberación e interactividad, formalizándose el libro de actas con la firma electrónica de los directivos designados con plena validez registral en el CNR.",
    "legalBasis": "Código de Comercio y Ley de Firma Electrónica.",
    "distractorRationale": {
      "A": "La diferencia generacional de edad de los socios es enteramente irrelevante en el derecho corporativo.",
      "B": "La presencia física rígida ha sido superada por la regulación mercantil salvadoreña moderna.",
      "C": "Correcto. Validez plena de asambleas virtuales y actas societarias suscritas con Firma Electrónica Certificada.",
      "D": "La deliberación y votación remota está expresamente legalizada en favor del dinamismo comercial."
    }
  },
  {
    "id": "lpa-196",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Prueba de No Repudio y su Mecanismo Criptográfico",
    "statement": "¿Cómo garantiza matemáticamente la Firma Electrónica Certificada el principio de No Repudio en el tráfico mercantil salvadoreño?",
    "options": {
      "A": "A través del pago de una fianza en efectivo en un juzgado municipal.",
      "B": "Mediante una cláusula contractual donde el firmante renuncia a todos sus derechos humanos.",
      "C": "Porque el firmante graba un mensaje de voz cantando el texto del contrato.",
      "D": "Mediante el descifrado del hash del documento utilizando la clave pública del firmante; si el resumen coincide, solo pudo ser generado por quien poseía la clave privada correspondiente."
    },
    "correctAnswer": "D",
    "explanation": "El no repudio es una propiedad criptográfica matemática: debido a la biyección de las llaves asimétricas, si la clave pública descifra exitosamente el sello generado sobre el hash del documento, se acredita indubitadamente que dicho sello solo pudo ser generado con la clave privada única y secreta del titular (Art. 13 LFE).",
    "legalBasis": "Ley de Firma Electrónica Art. 13 y Teoría de la Criptografía Asimétrica.",
    "distractorRationale": {
      "A": "La fianza pecuniaria es una garantía de crédito, ajena a la demostración de autoría documental.",
      "B": "Los derechos humanos son inalienables e irrenunciables conforme al Art. 1 de la Constitución.",
      "C": "Las grabaciones vocales artísticas no proveen enlace criptográfico matemático determinista con el documento.",
      "D": "Correcto. La correlación matemática de las claves asimétricas impide al titular negar legítimamente su autoría."
    }
  },
  {
    "id": "lpa-197",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Certificados Digitales para Servidores Públicos",
    "statement": "Cuando el Estado salvadoreño provee certificados de Firma Electrónica Certificada a sus ministros, jueces y directores generales para el ejercicio de sus cargos:",
    "options": {
      "A": "El funcionario puede usar la firma oficial para hipotecar el palacio de gobierno a su favor.",
      "B": "El certificado consigna la identidad del funcionario y el cargo público que ostenta, facultándolo para suscribir válidamente resoluciones y actos administrativos oficiales vinculantes.",
      "C": "El certificado convierte al funcionario en dueño personal de los edificios públicos del ministerio.",
      "D": "Solo puede firmar trámites en días feriados no laborables."
    },
    "correctAnswer": "B",
    "explanation": "Los certificados de servidor público o de cargo oficial identifican la calidad funcional con que actúa la persona natural. Al suscribir actos en ejercicio de sus competencias públicas, los efectos jurídicos se imputan directamente a la institución estatal a la que pertenece el órgano emisor.",
    "legalBasis": "Ley de Procedimientos Administrativos y Ley de Firma Electrónica.",
    "distractorRationale": {
      "A": "Los bienes públicos son inalienables e inembargables y no pueden gravarse para beneficio personal.",
      "B": "Correcto. El certificado de servidor público vincula al titular con el cargo y la entidad que representa.",
      "C": "La titularidad de los inmuebles estatales pertenece a la República de El Salvador, no al funcionario.",
      "D": "Los actos administrativos se dictan y notifican en días y horas hábiles reglados por la LPA."
    }
  },
  {
    "id": "lpa-198",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Admisibilidad de Documentos Electrónicos Extranjeros en Juicio",
    "statement": "Si un litigante presenta en un proceso civil o mercantil salvadoreño un contrato electrónico firmado en el extranjero con firma digital certificada conforme a las leyes del país de origen (Art. 343 CPCM):",
    "options": {
      "A": "Se impone una multa al litigante por no haber viajado a imprimirlo en papel sellado.",
      "B": "El juez debe rechazar y destruir el documento por haber sido redactado fuera de El Salvador.",
      "C": "El juez admitirá el documento electrónico valorándolo conforme a las reglas de reciprocidad, tratados internacionales o mediante peritaje de homologación de estándares técnicos seguros.",
      "D": "El documento se presume automáticamente falso sin admitir peritaje alguno."
    },
    "correctAnswer": "C",
    "explanation": "El Artículo 343 del CPCM consagra la libertad de medios probatorios tecnológicos y su admisibilidad. Conforme a la Ley de Firma Electrónica y las normas de derecho internacional privado, los documentos foráneos digitales son plenamente admisibles en juicio, sujetos a calificación de autenticidad pericial o diplomática.",
    "legalBasis": "Código Procesal Civil y Mercantil Art. 343 y Ley de Firma Electrónica Art. 35.",
    "distractorRationale": {
      "A": "El papel sellado fue derogado en el sistema tributario y mercantil moderno salvadoreño.",
      "B": "Rechazar pruebas lícitas extranjeras violaría el derecho a la protección jurisdiccional y debido proceso.",
      "C": "Correcto. Plena admisibilidad procesal como medio probatorio sujeto a homologación o peritaje de estándares.",
      "D": "La falsedad no se presume; debe ser articulada y probada pericialmente en el contradictorio."
    }
  },
  {
    "id": "lpa-199",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Integración de la Firma Electrónica con la Ley Crecer Juntos",
    "statement": "En el marco del Sistema Nacional de Registro del Estado Familiar y la Ley Crecer Juntos, ¿qué ventaja aporta la firma electrónica certificada en la emisión de partidas de nacimiento?",
    "options": {
      "A": "Permite la emisión telemática de certificaciones de partidas de nacimiento con firma y sello digital verificable en línea mediante código QR, evitando falsificaciones y desplazamientos a alcaldías distantes.",
      "B": "Exige que los recién nacidos firmen su propia partida antes de cumplir un mes de vida.",
      "C": "Elimina la obligación de registrar a los niños en el Registro del Estado Familiar.",
      "D": "Obliga a que todos los certificados se impriman en papel de oro laminado."
    },
    "correctAnswer": "A",
    "explanation": "La digitalización del Registro del Estado Familiar impulsada en El Salvador permite a los alcaldes y registradores del estado familiar expedir certificaciones digitales auténticas con firma electrónica y sellos QR de validación web, garantizando el derecho a la identidad oportuna de la niñez (Ley Crecer Juntos) con total seguridad documental.",
    "legalBasis": "Ley Crecer Juntos, Ley Transitoria del Registro del Estado Familiar y Ley de Firma Electrónica.",
    "distractorRationale": {
      "A": "Correcto. Certificaciones con firma electrónica y QR verificable, agilizando el derecho a la identidad.",
      "B": "Los recién nacidos son legalmente incapaces y son inscritos por sus padres o representantes legales.",
      "C": "La inscripción en el estado familiar es un deber legal ineludible que tutela la nacionalidad e identidad.",
      "D": "Los soportes físicos lujosos son innecesarios frente a la inalterabilidad criptográfica digital."
    }
  },
  {
    "id": "lpa-200",
    "category": "firma-electronica",
    "categoryLabel": "Firma Electrónica Certificada (MINEC)",
    "area": "Perspectiva Evolutiva y Modernización Digital del Estado Salvadoreño",
    "statement": "¿Cuál es el impacto institucional de la consolidación conjunta de la Ley de Procedimientos Administrativos (LPA) y la Ley de Firma Electrónica (LFE) en la República de El Salvador?",
    "options": {
      "A": "Prohíbe a los ciudadanos acudir personalmente a las instituciones del Estado.",
      "B": "Promueve el regreso obligatorio a los expedientes cosidos con hilo y archivados en sótanos húmedos.",
      "C": "Elimina la Constitución de la República para sustituirla por un software privado cerrado.",
      "D": "Establece un ecosistema jurídico moderno que garantiza la seguridad jurídica, la celeridad, el debido proceso y la desburocratización plena mediante trámites telemáticos accesibles y auditables para toda la ciudadanía."
    },
    "correctAnswer": "D",
    "explanation": "La articulación armónica entre la LPA (garantías del procedimiento, plazos y antiformalismo) y la LFE (validez probatoria de documentos y firmas digitales) consolida la gobernanza digital salvadoreña, erradicando la lentitud burocrática del papel y garantizando un Estado moderno al servicio de la persona humana (Art. 1 Cn.).",
    "legalBasis": "Ley de Procedimientos Administrativos y Ley de Firma Electrónica de El Salvador.",
    "distractorRationale": {
      "A": "El gobierno digital complementa la atención presencial para brindar múltiples canales de acceso al ciudadano.",
      "B": "El archivo manual decimonónico está siendo reemplazado por la gestión documental digital segura.",
      "C": "La supremacía constitucional permanece como cúspide inalterable del Estado democrático de derecho.",
      "D": "Correcto. Ecosistema de gobierno digital eficiente, transparente, desburocratizado y con plenas garantías legales."
    }
  }
];

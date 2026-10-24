/**
 * BANCO DE REACTIVOS DE ALTA COMPLEJIDAD: EXAMEN DE SUFICIENCIA NOTARIAL
 * Corte Suprema de Justicia (CSJ) · República de El Salvador
 * 
 * Cobertura temática integral (200 reactivos):
 * 1. Notarial Puro (Ley de Notariado Arts. 9, 32, escrituras matrices, testimonios, libro de protocolo, actas, firma a ruego, testigos de conocimiento, clausura y entrega de protocolo) - 40 reactivos
 * 2. Jurisdicción Voluntaria (LENJVOD: aceptación de herencia, remedición de inmuebles con citación a colindantes, partición extrajudicial, títulos supletorios, oposición legítima Art. 2) - 40 reactivos
 * 3. Sucesiones C.C. (testamentos solemnes abiertos y cerrados Arts. 1009-1017, asignaciones forzosas, legítimas rigorosas, cuarta de mejoras, derecho de acrecer, desheredamiento, beneficio de inventario) - 40 reactivos
 * 4. Contratos y Obligaciones Civiles (compraventa, venta de cosa ajena Art. 1619, tracto sucesivo, hipotecas, promesas de venta, nulidades absolutas y relativas, rescisión, poderes y cláusulas especiales Arts. 69 y 72 CPCM) - 40 reactivos
 * 5. Mercantil y Sociedades C.Com. (constitución y modificación S.A. de C.V., S.A.S., aumentos y reducciones de capital, libros corporativos, títulos valores, letras de cambio, pagarés) - 40 reactivos
 */

export interface NotaryQuestion {
  id: string;
  topic: string;
  legalBasis: string;
  statement: string;
  options: { key: string; text: string }[];
  correctKey: string;
  explanation: string;
  csjPrecedent?: string;
  category?: 'notarial-puro' | 'lenjvod' | 'sucesiones' | 'contratos' | 'mercantil';
}

export const NOTARY_EXAM_QUESTIONS: NotaryQuestion[] = [
  {
    "id": "not-01",
    "category": "notarial-puro",
    "topic": "Identificación de Comparecientes sin DUI",
    "legalBasis": "Art. 32 numeral 5° Ley de Notariado (LN)",
    "statement": "Si un compareciente salvadoreño se presenta ante el notario manifestando haber extraviado su Documento Único de Identidad (DUI), ¿mediante qué mecanismo legal válido puede el notario proceder al otorgamiento de la escritura matriz?",
    "options": [
      {
        "key": "A",
        "text": "Por el conocimiento personal directo del notario o por medio de dos testigos de conocimiento que conozcan al compareciente y porten su respectivo documento de identidad."
      },
      {
        "key": "B",
        "text": "Únicamente presentando su partida de nacimiento original reciente."
      },
      {
        "key": "C",
        "text": "Mediante declaración jurada simple firmada ante la presencia de un agente de policía."
      },
      {
        "key": "D",
        "text": "Bajo ningún concepto; la ley prohíbe taxativamente otorgar instrumentos sin DUI físico vigente."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 32 Ord. 5° de la Ley de Notariado establece que el notario debe dar fe de conocer a los comparecientes, y en caso de no conocerlos, los identificará mediante sus documentos de identidad personal o por medio de dos testigos de su conocimiento (testigos instrumentales de identidad).",
    "csjPrecedent": "Línea jurisprudencial reiterada de la Sección de Notariado de la CSJ: los testigos de conocimiento asumen responsabilidad civil solidaria sobre la identidad del otorgante."
  },
  {
    "id": "not-02",
    "category": "notarial-puro",
    "topic": "Prohibición Expresa de Autorización de Instrumentos a Favor de Familiares",
    "legalBasis": "Art. 9 Ley de Notariado",
    "statement": "¿Puede un notario salvadoreño autorizar una escritura pública de donación entre vivos en la que su cónyuge o sus hijos sean los donatarios?",
    "options": [
      {
        "key": "A",
        "text": "Sí, siempre que no existan cargas económicas para el Estado."
      },
      {
        "key": "B",
        "text": "No, está terminantemente prohibido autorizar instrumentos que contengan disposiciones a favor del cónyuge, ascendientes, descendientes o hermanos del notario; el instrumento adolece de nulidad absoluta."
      },
      {
        "key": "C",
        "text": "Sí, siempre que comparezcan dos testigos instrumentales adicionales."
      },
      {
        "key": "D",
        "text": "Sí, previa autorización expresa por escrito de la Sección de Notariado de la CSJ."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 9 de la Ley de Notariado prohíbe de forma absoluta al notario autorizar instrumentos en que resulten beneficiados él mismo, su cónyuge, sus ascendientes, descendientes o parientes dentro del cuarto grado de consanguinidad o segundo de afinidad. Dicha infracción genera nulidad de pleno derecho y sanción disciplinaria.",
    "csjPrecedent": "Corte Plena CSJ: la vulneración del Art. 9 LN constituye causal de suspensión del ejercicio notarial por atentar contra la fe pública e imparcialidad delegada por el Estado."
  },
  {
    "id": "not-03",
    "category": "notarial-puro",
    "topic": "Custodia, Cierre y Entrega del Libro de Protocolo",
    "legalBasis": "Arts. 21 al 26 Ley de Notariado",
    "statement": "Al vencerse el año calendario de vigencia del Libro de Protocolo, ¿cuál es el plazo legal que tiene el notario para cerrar el libro y entregarlo a la Sección de Notariado de la CSJ o Juzgado de Primera Instancia?",
    "options": [
      {
        "key": "A",
        "text": "Sesenta días hábiles si no hubo escrituras suspendidas."
      },
      {
        "key": "B",
        "text": "Quince días hábiles posteriores a la fecha de vencimiento."
      },
      {
        "key": "C",
        "text": "Treinta días siguientes a la expiración del año de vigencia."
      },
      {
        "key": "D",
        "text": "No existe plazo fijo siempre que se rinda informe anual por correo electrónico."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 24 de la Ley de Notariado estipula que el notario debe clausurar su libro mediante razón formal de cierre y remitirlo dentro de los treinta días siguientes a la Sección de Notariado de la CSJ o al Juzgado competente para su debida revisión y resguardo permanente.",
    "csjPrecedent": "Sección de Notariado CSJ: La retención indebida del libro de protocolo fenecido más allá del plazo legal de 30 días amerita apertura de informativo disciplinario sancionable con multa e inhabilitación temporal."
  },
  {
    "id": "not-04",
    "category": "notarial-puro",
    "topic": "Protocolización de Resoluciones Judiciales",
    "legalBasis": "Arts. 55 al 58 Ley de Notariado",
    "statement": "Cuando un notario salvadoreño es requerido para protocolizar una resolución judicial ejecutoriada (por ejemplo, adjudicación en pago o partición judicial), ¿cuál es el alcance legal de la fe pública notarial y el efecto de dicha protocolización?",
    "options": [
      {
        "key": "A",
        "text": "La protocolización convierte la sentencia judicial en un contrato mercantil privado entre las partes litigantes."
      },
      {
        "key": "B",
        "text": "La protocolización sanea y convalida de pleno derecho cualquier nulidad o defecto procesal previo del juzgado emisor."
      },
      {
        "key": "C",
        "text": "El notario debe modificar los términos resolutivos si considera que vulneran la Ley de Notariado."
      },
      {
        "key": "D",
        "text": "El notario transcribe literalmente la certificación judicial sin que su inserción en el protocolo subsane nulidades procesales de fondo ni altere la naturaleza del mandato judicial original."
      }
    ],
    "correctKey": "D",
    "explanation": "Conforme a los Arts. 55 a 58 de la Ley de Notariado, la protocolización reproduce e incorpora al protocolo un documento público o resolución judicial previa. El notario da fe de la autenticidad de la transcripción instrumental, pero no tiene potestad para subsanar nulidades jurisdiccionales de fondo de la resolución.",
    "csjPrecedent": "Sala de lo Civil CSJ Ref. 210-CAC-2016: La protocolización notarial no posee efectos convalidantes ni novatorios sobre resoluciones judiciales dictadas con quebrantamiento de las garantías procesales."
  },
  {
    "id": "not-05",
    "category": "notarial-puro",
    "topic": "Inhabilidades Legales para ser Testigo Instrumental",
    "legalBasis": "Art. 31 Ley de Notariado",
    "statement": "Conforme al régimen de solemnidades notariales en El Salvador, ¿cuál de las siguientes personas se encuentra expresamente inhabilitada por ley para fungir como testigo instrumental en una escritura matriz?",
    "options": [
      {
        "key": "A",
        "text": "Cualquier persona mayor de edad domiciliada en un municipio distinto al del notario."
      },
      {
        "key": "B",
        "text": "Los parientes del notario o de los otorgantes dentro del cuarto grado de consanguinidad o segundo de afinidad, y los dependientes económicos del notario."
      },
      {
        "key": "C",
        "text": "Los extranjeros residentes en El Salvador que posean carné de residencia vigente y conozcan el idioma castellano."
      },
      {
        "key": "D",
        "text": "Los profesionales universitarios con título inscrito en el Ministerio de Educación."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 31 de la Ley de Notariado inhabilita expresamente para ser testigos instrumentales a los parientes del notario o de los otorgantes dentro del cuarto grado de consanguinidad o segundo de afinidad, a los dependientes o empleados a sueldo del notario, a los ciegos, sordos y a quienes no sepan firmar.",
    "csjPrecedent": "Corte Plena CSJ: La concurrencia de un testigo instrumental inhábil por parentesco prohibido con el notario acarrea la nulidad absoluta de la escritura matriz conforme a los Arts. 31 y 32 LN."
  },
  {
    "id": "not-06",
    "category": "notarial-puro",
    "topic": "Firma a Ruego y Estampación de Huella Dactilar",
    "legalBasis": "Art. 32 numeral 12° Ley de Notariado",
    "statement": "Cuando un otorgante manifiesta ante el notario que no sabe o no puede firmar por impedimento físico, ¿cuál es el procedimiento formal que exige la ley para perfeccionar válidamente la conclusión del instrumento matriz?",
    "options": [
      {
        "key": "A",
        "text": "Se omiten firmas y huellas, bastando la declaración verbal de dos vecinos presenciales."
      },
      {
        "key": "B",
        "text": "El notario firma en su nombre sin requerir intervención de terceros ni estampado de huella."
      },
      {
        "key": "C",
        "text": "El otorgante estampará la huella digital de su pulgar derecho (u otro que se especifique) y firmará a su ruego otra persona mayor de edad que sepa escribir, expresando el notario la causa de la imposibilidad."
      },
      {
        "key": "D",
        "text": "El notario debe remitir obligatoriamente el protocolo al Juzgado de Paz para que el juez firme en lugar del otorgante."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 32 Ord. 12° de la Ley de Notariado establece que si el otorgante no supiere o no pudiere firmar, estampará la huella digital del pulgar derecho y firmará a su ruego una persona mayor de edad hábil, haciendo constar el notario la causa de la imposibilidad en la cláusula de conclusión.",
    "csjPrecedent": "Sala de lo Civil CSJ Ref. 302-CAC-2015: La omisión conjunta de la huella digital y de la firma a ruego cuando el otorgante no firma invalida el acto negocial de nulidad absoluta insanable."
  },
  {
    "id": "not-07",
    "category": "notarial-puro",
    "topic": "Otorgamiento de Instrumento en Idioma Extranjero",
    "legalBasis": "Art. 1013 Código Civil y Art. 32 numeral 6° Ley de Notariado",
    "statement": "Si comparece ante notario una persona que no comprende ni habla el idioma castellano para celebrar un acto solemne, ¿qué requisito formal prescribe la legislación salvadoreña bajo pena de nulidad?",
    "options": [
      {
        "key": "A",
        "text": "Deberán concurrir obligatoriamente dos intérpretes nombrados al efecto, quienes traducirán recíprocamente el acto y firmarán la escritura matriz, garantizando la perfecta manifestación de voluntad."
      },
      {
        "key": "B",
        "text": "El notario traduce verbalmente las cláusulas sin necesidad de nombrar peritos ni dejar constancia en la matriz."
      },
      {
        "key": "C",
        "text": "El instrumento debe asentarse en el libro de protocolo directamente en el idioma extranjero de origen."
      },
      {
        "key": "D",
        "text": "El otorgamiento ante notario salvadoreño está prohibido, debiendo acudir exclusivamente al consulado respectivo."
      }
    ],
    "correctKey": "A",
    "explanation": "El Código Civil (Art. 1013) y la Ley de Notariado exigen la intervención de dos intérpretes designados cuando el otorgante no comprenda el castellano, a efecto de verter con exactitud su voluntad dispositiva y firmar el instrumento solemne.",
    "csjPrecedent": "Sala de lo Civil CSJ: La autorización de instrumentos en que un compareciente desconoce el idioma oficial sin auxilio formal de intérpretes vicia el acto de nulidad absoluta por ausencia de consentimiento informado."
  },
  {
    "id": "not-08",
    "category": "notarial-puro",
    "topic": "Escrituras Matrices Suspendidas en el Libro de Protocolo",
    "legalBasis": "Arts. 27 y 28 Ley de Notariado",
    "statement": "Si una escritura matriz principiada en el libro de protocolo no llega a perfeccionarse por arrepentimiento o ausencia de firmas de los otorgantes, ¿cuál es el procedimiento formal solemne que debe observar el notario?",
    "options": [
      {
        "key": "A",
        "text": "Utilizar corrector químico en los renglones avanzados para reescribir otro acto sobre el mismo folio."
      },
      {
        "key": "B",
        "text": "Extraer las hojas del libro de protocolo y destruirlas para mantener correlatividad en blanco."
      },
      {
        "key": "C",
        "text": "Tachar diagonalmente las planas con tinta negra sin estampar firma notarial."
      },
      {
        "key": "D",
        "text": "Estampar al pie de lo escrito la razón de 'SUSPENDIDA', expresando sumariamente el motivo que originó la suspensión, fechándola y autorizándola con su firma completa."
      }
    ],
    "correctKey": "D",
    "explanation": "Los Arts. 27 y 28 de la Ley de Notariado mandan que cuando un instrumento no se concluya, el notario pondrá al pie la palabra 'SUSPENDIDA', expresará la causal de la suspensión y lo firmará formalmente, quedando prohibido inutilizar o arrancar hojas del protocolo.",
    "csjPrecedent": "Sección de Notariado CSJ: La falta de razón formal de suspensión firmada en una matriz inconclusa es sancionada disciplinariamente con multa e investigación de autenticidad documental."
  },
  {
    "id": "not-09",
    "category": "notarial-puro",
    "topic": "Salvedad de Enmiendas, Testaduras y Entrerrenglonaduras",
    "legalBasis": "Art. 32 numeral 11° Ley de Notariado",
    "statement": "Si en el texto de una escritura pública asentada en el protocolo se comete un error de mecanografía o digitación, ¿cuál es el requisito formal indispensable para que la enmienda o entrerrenglonadura posea pleno valor jurídico?",
    "options": [
      {
        "key": "A",
        "text": "Aplicar corrector líquido blanco y sellar con el sello notarial cada renglón."
      },
      {
        "key": "B",
        "text": "Colocar notas aclaratorias en papel adhesivo adherido a la hoja del protocolo."
      },
      {
        "key": "C",
        "text": "Salvar íntegramente al final del instrumento, exactamente antes de las firmas de los comparecientes y del notario, las palabras testadas, entrerrenglonadas o enmendadas, expresando con claridad si valen o no valen."
      },
      {
        "key": "D",
        "text": "Basta con salvar las palabras al momento de expedir el primer testimonio o testimonio de ley."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 32 Ord. 11° de la Ley de Notariado exige salvar al final de la escritura, precisamente antes de las firmas de los otorgantes, todo lo testado, enmendado o entrerrenglonado, declarando si vale o no; lo no salvado en esa forma se tendrá como no puesto y carecerá de eficacia.",
    "csjPrecedent": "Sala de lo Civil CSJ: Las correcciones o entrerrenglonaduras que no figuren salvadas antes de las firmas se tienen por no puestas de pleno derecho, pudiendo acarrear la ineficacia de cláusulas esenciales."
  },
  {
    "id": "not-10",
    "category": "notarial-puro",
    "topic": "Régimen Disciplinario Notarial y Responsabilidad por Alquiler de Protocolo",
    "legalBasis": "Arts. 62 al 67 Ley de Notariado y Ley Orgánica Judicial",
    "statement": "¿Qué sanción legal y disciplinaria impone la Corte Plena de la Corte Suprema de Justicia al notario que entrega sus hojas de protocolo selladas y firmadas en blanco para que terceros elaboren instrumentos fuera de su presencia y control personal ('alquiler o préstamo de protocolo')?",
    "options": [
      {
        "key": "A",
        "text": "La suspensión por tiempo indeterminado o inhabilitación definitiva para el ejercicio de la abogacía y del notariado, sin perjuicio de la correspondiente persecución penal por falsedad documental."
      },
      {
        "key": "B",
        "text": "Una simple amonestación privada escrita sin suspensión de la función notarial."
      },
      {
        "key": "C",
        "text": "Una multa administrativa de diez colones sin anotación en el expediente profesional."
      },
      {
        "key": "D",
        "text": "La conmutación obligatoria por tres meses de servicio voluntario en la Procuraduría General."
      }
    ],
    "correctKey": "A",
    "explanation": "La función notarial es una delegación de fe pública personalísima del Estado salvadoreño. El arrendamiento, préstamo de protocolo o firma en blanco constituye falta gravísima contra la fe pública sancionada por Corte Plena con suspensión indefinida o inhabilitación definitiva del ejercicio profesional conforme a la Ley de Notariado.",
    "csjPrecedent": "Corte Plena CSJ: Jurisprudencia disciplinaria constante: La entrega de protocolo a tramitadores quebranta irremediablemente la confianza pública y acarrea la inhabilitación profesional definitiva y vista penal a la FGR."
  },
  {
    "id": "not-11",
    "category": "notarial-puro",
    "topic": "Fe Pública Notarial y Delegación Estatal",
    "legalBasis": "Art. 1 Ley de Notariado",
    "statement": "En el ordenamiento salvadoreño, ¿cuál es la naturaleza jurídica de la fe pública notarial atribuida a los abogados autorizados como notarios?",
    "options": [
      {
        "key": "A",
        "text": "Es una función pública delegada por el Estado a través de la Corte Suprema de Justicia, de carácter personal e indelegable, que confiere autenticidad plena y fuerza probatoria a los hechos y actos que autoriza."
      },
      {
        "key": "B",
        "text": "Es un oficio comercial puramente mercantil equiparable a una correduría privada de comercio."
      },
      {
        "key": "C",
        "text": "Es una franquicia corporativa internacional administrada por colegios profesionales no estatales."
      },
      {
        "key": "D",
        "text": "Es una potestad judicial que permite a los notarios dictar órdenes de arresto civil."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 1 de la Ley de Notariado define el notariado como una función pública. El notario es un delegado del Estado que da fe de los actos y contratos que ante él se celebran, gozando sus instrumentos de presunción de veracidad y ejecutoriedad.",
    "csjPrecedent": "Corte Plena CSJ: La fe pública notarial no es una prerrogativa personal del profesional, sino un mandato constitucional de certeza pública depositado por la sociedad en el notario."
  },
  {
    "id": "not-12",
    "category": "notarial-puro",
    "topic": "Incompatibilidad del Notariado con Cargos Judiciales",
    "legalBasis": "Art. 4 numeral 1° Ley de Notariado",
    "statement": "¿Pueden los magistrados y jueces del Órgano Judicial ejercer simultáneamente la función notarial en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "Sí, siempre que autoricen escrituras únicamente los días sábados y domingos."
      },
      {
        "key": "B",
        "text": "No, están terminantemente inhabilitados para ejercer el notariado mientras permanezcan en el desempeño de cargos judiciales remunerados."
      },
      {
        "key": "C",
        "text": "Sí, pero solo para otorgar poderes judiciales a favor de sus familiares."
      },
      {
        "key": "D",
        "text": "Sí, con autorización previa del Ministerio de Justicia."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 4 Ord. 1° de la Ley de Notariado establece incompatibilidad absoluta entre la función notarial y el ejercicio de la judicatura, a fin de preservar la estricta independencia judicial y evitar colisiones de intereses entre el juzgador y el fedatario.",
    "csjPrecedent": "Corte Plena CSJ: El ejercicio simultáneo de la judicatura y el notariado acarrea la nulidad de los instrumentos y sanción de inhabilitación profesional."
  },
  {
    "id": "not-13",
    "category": "notarial-puro",
    "topic": "Apertura del Libro de Protocolo",
    "legalBasis": "Art. 18 Ley de Notariado",
    "statement": "¿Qué formalidad solemne debe cumplirse en la primera plana del Libro de Protocolo antes de comenzar a asentar instrumentos públicos?",
    "options": [
      {
        "key": "A",
        "text": "Debe publicarse un anuncio publicitario en el Diario Oficial convocando a clientes."
      },
      {
        "key": "B",
        "text": "Debe llevarse a bendecir a una iglesia parroquial de la localidad."
      },
      {
        "key": "C",
        "text": "El notario debe asentar la razón de apertura indicando el número de libro, los folios que contiene, el año de vigencia y autorizarla con su firma completa y sello oficial."
      },
      {
        "key": "D",
        "text": "Basta con comenzar a escribir la primera escritura sin mediar ninguna razón introductoria."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 18 LN ordena que en la primera hoja útil del libro de protocolo, el notario estampará una razón de apertura en la que exprese el número del libro que le corresponde, la cantidad de hojas que comprende y la fecha, sellándola y firmándola debidamente.",
    "csjPrecedent": "Sección de Notariado CSJ: La omisión de la razón formal de apertura constituye falta a las solemnidades del protocolo sujeta a prevención y sanción disciplinaria."
  },
  {
    "id": "not-14",
    "category": "notarial-puro",
    "topic": "Consignación de Fechas y Cantidades en Letras",
    "legalBasis": "Art. 32 numeral 4° Ley de Notariado",
    "statement": "En el texto de las escrituras matrices asentadas en el libro de protocolo, ¿cómo deben consignarse obligatoriamente las fechas, números y cantidades pecuniarias?",
    "options": [
      {
        "key": "A",
        "text": "Queda a la libre elección discrecional del mecanógrafo del despacho."
      },
      {
        "key": "B",
        "text": "Deben escribirse exclusivamente en números arábigos y en tinta roja."
      },
      {
        "key": "C",
        "text": "Pueden redactarse mediante códigos de barras o jeroglíficos modernos."
      },
      {
        "key": "D",
        "text": "Deberán escribirse enteramente en letras, quedando terminantemente prohibido el empleo de abreviaturas, cifras o números aritméticos, salvo citas de leyes o decretos."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 32 Ord. 4° LN prohíbe el uso de abreviaturas y exige que las fechas y cantidades se expresen íntegramente en letras para evitar adulteraciones materiales o intercalaciones numéricas maliciosas en el protocolo.",
    "csjPrecedent": "Sala de lo Civil CSJ: La consignación de cifras monetarias sustanciales únicamente en números infringe las solemnidades del Art. 32 LN y expone el acto a litigios de autenticidad."
  },
  {
    "id": "not-15",
    "category": "notarial-puro",
    "topic": "Testigos de Conocimiento vs Testigos Instrumentales",
    "legalBasis": "Arts. 31 y 32 Ley de Notariado",
    "statement": "¿Cuál es la diferencia jurídica funcional entre los testigos instrumentales y los testigos de conocimiento en el otorgamiento de instrumentos públicos?",
    "options": [
      {
        "key": "A",
        "text": "Los instrumentales tocan instrumentos musicales y los de conocimiento deben tener título de doctorado."
      },
      {
        "key": "B",
        "text": "Los testigos instrumentales presencian el otorgamiento y lectura solemne del acto; los testigos de conocimiento comparecen exclusivamente a identificar al otorgante que el notario no conoce personalmente y que carece de DUI."
      },
      {
        "key": "C",
        "text": "No existe ninguna diferencia; la ley utiliza ambos términos de forma idéntica e intercambiable."
      },
      {
        "key": "D",
        "text": "Los testigos de conocimiento son siempre agentes policiales en servicio activo."
      }
    ],
    "correctKey": "B",
    "explanation": "La Ley de Notariado distingue claramente: los testigos de conocimiento (Art. 32 Ord. 5° LN) suplen la falta de documento de identidad garantizando la individualización del compareciente; los instrumentales (Art. 31 LN) atestiguan la celebración íntegra y solemnidades del acto.",
    "csjPrecedent": "Corte Plena CSJ: La confusión entre testigos instrumentales y de conocimiento vulnera las solemnidades legales esenciales de la fe notarial."
  },
  {
    "id": "not-16",
    "category": "notarial-puro",
    "topic": "Expedición del Primer Testimonio",
    "legalBasis": "Arts. 43 y 44 Ley de Notariado",
    "statement": "¿Quiénes tienen derecho legal a que el notario les expida el testimonio (primer testimonio) de una escritura de compraventa autorizada en su protocolo?",
    "options": [
      {
        "key": "A",
        "text": "Únicamente el presidente de la Corte de Cuentas de la República."
      },
      {
        "key": "B",
        "text": "Cualquier habitante del municipio sin necesidad de justificar interés alguno."
      },
      {
        "key": "C",
        "text": "El adquirente del bien o derecho y cualquier persona a cuyo favor resulte alguna obligación exigible emanada del instrumento."
      },
      {
        "key": "D",
        "text": "Exclusivamente los acreedores quirografarios del notario autorizante."
      }
    ],
    "correctKey": "C",
    "explanation": "Los Arts. 43 y 44 LN disponen que el notario expedirá testimonio a los otorgantes y a las partes a cuyo favor se hayan contraído obligaciones o derechos susceptibles de exigibilidad e inscripción registral.",
    "csjPrecedent": "Sala de lo Civil CSJ: El notario está obligado a librar oportunamente el testimonio a la parte compradora para viabilizar la tradición registral del derecho en el CNR."
  },
  {
    "id": "not-17",
    "category": "notarial-puro",
    "topic": "Testimonios Posteriores o Segundas Copias con Decreto Judicial",
    "legalBasis": "Art. 43 Ley de Notariado",
    "statement": "Si una escritura pública contiene una obligación de dar o de hacer exigible (como un mutuo hipotecario con saldo insoluto) y el acreedor solicita un segundo testimonio por extravío del primero:",
    "options": [
      {
        "key": "A",
        "text": "El notario no puede expedir libremente el nuevo testimonio sin previo decreto judicial dictado por el Juez de Primera Instancia con citación de la parte obligada."
      },
      {
        "key": "B",
        "text": "El notario expide cuantas copias quiera siempre que le paguen honorarios dobles."
      },
      {
        "key": "C",
        "text": "Se cancela la deuda automáticamente al haberse extraviado el primer testimonio."
      },
      {
        "key": "D",
        "text": "El acreedor debe presentar denuncia penal contra el deudor por hurto documental."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 43 inc. 2° LN prohíbe expedir segundo testimonio de escrituras que contengan obligaciones pendientes de dar o hacer sin mandato judicial previo, a fin de evitar que circulen simultáneamente dos títulos ejecutivos idénticos para cobrar una misma obligación.",
    "csjPrecedent": "Sala de lo Civil CSJ: La expedición de un segundo testimonio ejecutivo sin decreto judicial vicia de nulidad el título y acarrea sanción disciplinaria al notario autorizante."
  },
  {
    "id": "not-18",
    "category": "notarial-puro",
    "topic": "Régimen de Actas Notariales",
    "legalBasis": "Arts. 49 al 54 Ley de Notariado",
    "statement": "¿En qué clase de soporte y bajo qué reglas deben extenderse las actas notariales en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "Deben grabarse exclusivamente en cintas de casete magnetofónico."
      },
      {
        "key": "B",
        "text": "Deben asentarse obligatoriamente en el libro de protocolo entre dos escrituras matrices."
      },
      {
        "key": "C",
        "text": "Solo pueden extenderse en formularios impresos por la Dirección General de Correos."
      },
      {
        "key": "D",
        "text": "Se asientan en hojas sueltas de papel simple, haciendo constar los hechos que el notario presencia o realiza a instancia de parte, fechándolas, autorizándolas con su firma y sello oficial."
      }
    ],
    "correctKey": "D",
    "explanation": "Conforme a los Arts. 49 y 50 LN, las actas notariales se extienden fuera de protocolo en hojas de papel común, documentando hechos materiales, notificaciones, protestos, fe de existencia o requerimientos presenciados por el notario.",
    "csjPrecedent": "Sala de lo Civil CSJ: El acta notarial no es una escritura matriz; incorporar contratos bilaterales traslativos de dominio en actas notariales fuera de protocolo genera nulidad absoluta."
  },
  {
    "id": "not-19",
    "category": "notarial-puro",
    "topic": "Prohibición de Destruir u Ocultar Hojas de Protocolo",
    "legalBasis": "Arts. 27 y 64 Ley de Notariado",
    "statement": "Si un notario arranca deliberadamente una hoja del libro de protocolo por haberse equivocado en el texto:",
    "options": [
      {
        "key": "A",
        "text": "Solo requiere pegar la hoja rota con cinta adhesiva transparente."
      },
      {
        "key": "B",
        "text": "Es un procedimiento normal de corrección autorizado por la costumbre notarial salvadoreña."
      },
      {
        "key": "C",
        "text": "Incurre en falta gravísima sancionable disciplinariamente por la CSJ y en la comisión del delito de infidelidad en la custodia de documentos o destrucción de registros públicos."
      },
      {
        "key": "D",
        "text": "El notario queda exento de responsabilidad si compra hojas nuevas en la librería."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 27 LN prohíbe tajantemente arrancar, inutilizar o alterar los folios sellados del protocolo legalizado. Toda anomalía debe salvarse o suspenderse formalmente; la extracción de hojas constituye una grave violación a la fe pública sancionada penal y administrativamente.",
    "csjPrecedent": "Corte Plena CSJ: La falta de folios correlativos en un protocolo devuelto acarrea la suspensión inmediata del notario y la apertura de causa penal ante la FGR."
  },
  {
    "id": "not-20",
    "category": "notarial-puro",
    "topic": "Obligación de Advertencias Registrales y Tributarias",
    "legalBasis": "Arts. 37 y 46 Ley de Notariado",
    "statement": "Al autorizar una escritura de transferencia de bienes raíces, ¿cuál es el deber formal del notario respecto a los impuestos y solvencias fiscales?",
    "options": [
      {
        "key": "A",
        "text": "Advertir a los otorgantes sobre el pago del Impuesto sobre Transferencia de Bienes Raíces, la necesidad de solvencias municipales y el plazo legal para presentar el testimonio al Registro de la Propiedad."
      },
      {
        "key": "B",
        "text": "Pagar él mismo de su propio peculio los impuestos de los contratantes."
      },
      {
        "key": "C",
        "text": "Exonerar a las partes de tributos mediante un decreto notarial privado."
      },
      {
        "key": "D",
        "text": "Retener los pasaportes de los comparecientes hasta que demuestren solvencia total."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 37 LN y la Ley del Impuesto sobre Transferencia de Bienes Raíces imponen al notario el deber de advertir expresamente a los otorgantes sobre los tributos devengados y las consecuencias registrales de la falta de presentación oportuna al CNR.",
    "csjPrecedent": "Sala de lo Civil CSJ: Las advertencias notariales son formalidades preceptivas que aseguran el tracto sucesivo y la legalidad fiscal del negocio jurídico inmobiliario."
  },
  {
    "id": "not-21",
    "category": "notarial-puro",
    "topic": "Depósito del Protocolo por Ausencia del País",
    "legalBasis": "Art. 23 Ley de Notariado",
    "statement": "Si un notario salvadoreño planea ausentarse del territorio de la República por un período mayor a tres meses:",
    "options": [
      {
        "key": "A",
        "text": "Debe depositar previamente su Libro de Protocolo en la Sección de Notariado de la CSJ o en el Juzgado de Primera Instancia respectivo."
      },
      {
        "key": "B",
        "text": "Puede llevarse el libro de protocolo en su equipaje de mano al extranjero."
      },
      {
        "key": "C",
        "text": "Debe dejar el protocolo encargado a un vecino de confianza en su colonia."
      },
      {
        "key": "D",
        "text": "Puede enterrar el protocolo en el patio de su casa hasta que regrese."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 23 LN exige que si la ausencia del notario excederá de tres meses, deberá entregar formalmente su libro de protocolo en depósito a la Sección de Notariado para garantizar su resguardo e integridad pública durante el viaje.",
    "csjPrecedent": "Sección de Notariado CSJ: La salida del país por tiempo prolongado sin depositar el protocolo amerita apertura de informativo disciplinario."
  },
  {
    "id": "not-22",
    "category": "notarial-puro",
    "topic": "Numeración de Escrituras y Prohibición de En Blanco",
    "legalBasis": "Art. 32 numeral 1° Ley de Notariado",
    "statement": "¿Cómo debe llevarse la correlatividad de los instrumentos en el libro de protocolo?",
    "options": [
      {
        "key": "A",
        "text": "El notario puede elegir números aleatorios para cada escritura."
      },
      {
        "key": "B",
        "text": "Las escrituras matrices se numerarán correlativamente comenzando por el número uno en cada libro, debiendo principiar cada instrumento inmediatamente a continuación del anterior sin dejar espacios en blanco."
      },
      {
        "key": "C",
        "text": "Se permite dejar varias hojas en blanco entre escrituras para llenarlas meses después."
      },
      {
        "key": "D",
        "text": "Debe numerarse únicamente en números romanos y letras griegas."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 32 Ord. 1° LN exige estricta numeración correlativa y continuidad física: cada instrumento debe iniciarse inmediatamente después de la conclusión y firmas del anterior, prohibiendo dejar claros o folios en blanco.",
    "csjPrecedent": "Corte Plena CSJ: Dejar folios o espacios en blanco en el protocolo constituye falta gravísima que facilita falsificaciones y amerita suspensión profesional."
  },
  {
    "id": "not-23",
    "category": "notarial-puro",
    "topic": "Firma del Notario en el Protocolo",
    "legalBasis": "Art. 32 numeral 12° Ley de Notariado",
    "statement": "¿Cuál es el efecto jurídico si una escritura matriz es firmada por todos los otorgantes pero el notario omite estampar su propia firma antes de devolver el protocolo?",
    "options": [
      {
        "key": "A",
        "text": "El registrador del CNR está autorizado a falsificar la firma del notario para salvar el acto."
      },
      {
        "key": "B",
        "text": "Se presume que el notario firmó espiritualmente de forma tácita."
      },
      {
        "key": "C",
        "text": "El instrumento es jurídicamente imperfecto e ineficaz, no produce efectos de documento público y el notario incurre en grave responsabilidad disciplinaria por negligencia."
      },
      {
        "key": "D",
        "text": "El acto se convierte en una ley general de la República."
      }
    ],
    "correctKey": "C",
    "explanation": "La firma y sello del notario autorizante constituyen la expresión sustantiva de la fe pública del Estado; sin ellos, el acto no nace como instrumento público y carece de eficacia legal frente a terceros.",
    "csjPrecedent": "Sala de lo Civil CSJ: La falta de firma del notario en la matriz impide la expedición válida de testimonios y deja el acto en estado de nulidad absoluta."
  },
  {
    "id": "not-24",
    "category": "notarial-puro",
    "topic": "Notarios Militares y Cónsules en el Extranjero",
    "legalBasis": "Arts. 6 y 7 Ley de Notariado",
    "statement": "¿Qué funcionarios diplomáticos salvadoreños están autorizados por ley para ejercer funciones notariales en el exterior?",
    "options": [
      {
        "key": "A",
        "text": "Los agregados culturales ad honórem sin nombramiento oficial del Ministerio de Relaciones Exteriores."
      },
      {
        "key": "B",
        "text": "Cualquier ciudadano salvadoreño que resida fuera del país por más de un año."
      },
      {
        "key": "C",
        "text": "Únicamente los capitanes de barcos mercantes en alta mar."
      },
      {
        "key": "D",
        "text": "Los Cónsules Generales, Cónsules y Vicecónsules de carrera de la República, y los Jefes de Misión Diplomática acreditados en el extranjero."
      }
    ],
    "correctKey": "D",
    "explanation": "Conforme a los Arts. 6 y 7 LN y la Ley Orgánica del Servicio Consular, los funcionarios consulares y diplomáticos salvadoreños están investidos de fe pública notarial para autorizar actos y contratos en sus respectivas circunscripciones que deban surtir efectos en El Salvador.",
    "csjPrecedent": "Sala de lo Civil CSJ: Los instrumentos otorgados ante cónsules salvadoreños en el extranjero surten plenos efectos en el país sin necesidad de trámite de apostilla."
  },
  {
    "id": "not-25",
    "category": "notarial-puro",
    "topic": "Revisión Anual del Protocolo por la Sección de Notariado",
    "legalBasis": "Arts. 24 y 26 Ley de Notariado",
    "statement": "Al entregarse el libro de protocolo fenecido, ¿qué examen técnico realiza la Sección de Notariado de la CSJ?",
    "options": [
      {
        "key": "A",
        "text": "Se limita a destruir el libro en una trituradora industrial de papel."
      },
      {
        "key": "B",
        "text": "Examina si las escrituras están completas, si las matrices suspendidas tienen la razón firmada, si los folios coinciden y si se cumplieron las formalidades del Art. 32 LN, emitiendo informe aprobatorio o pliego de reparos."
      },
      {
        "key": "C",
        "text": "Solo verifica el color del empaste exterior del libro sin abrir las páginas."
      },
      {
        "key": "D",
        "text": "Envía el libro al archivo del Ministerio de Agricultura y Ganadería."
      }
    ],
    "correctKey": "B",
    "explanation": "La Sección de Notariado realiza una minuciosa inspección de legalidad formal de cada una de las planas y escrituras del libro devuelto, formulando prevenciones si encuentra borrones no salvados, falta de firmas o escrituras mutiladas.",
    "csjPrecedent": "Sección de Notariado CSJ: La solventación oportuna de los reparos del protocolo es condición obligatoria para la entrega del siguiente libro."
  },
  {
    "id": "not-26",
    "category": "notarial-puro",
    "topic": "Uso Obligatorio del Idioma Castellano en el Protocolo",
    "legalBasis": "Art. 32 numeral 2° Ley de Notariado",
    "statement": "¿En qué idioma deben redactarse preceptivamente todos los instrumentos públicos en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "En latín clásico tradicional por ser el origen del derecho romano."
      },
      {
        "key": "B",
        "text": "En cualquier lengua extranjera siempre que el notario hable dicho idioma."
      },
      {
        "key": "C",
        "text": "En idioma castellano, debiendo traducirse previamente por intérpretes idóneos cualquier minuta o documento en lengua extranjera que deba protocolizarse o insertarse."
      },
      {
        "key": "D",
        "text": "En lenguaje técnico binario de programación informática."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 32 Ord. 2° LN y el Art. 62 Cn. consagran el castellano como idioma oficial de la República; asentar escrituras matrices en idioma distinto sin traducción oficial genera la nulidad absoluta del instrumento público.",
    "csjPrecedent": "Corte Plena CSJ: El quebrantamiento del uso oficial del idioma castellano en el protocolo vicia de nulidad insubsanable el acto solemne."
  },
  {
    "id": "not-27",
    "category": "notarial-puro",
    "topic": "Prohibición de Actos a Favor de Empleados del Notario",
    "legalBasis": "Art. 9 Ley de Notariado",
    "statement": "¿Puede un notario autorizar una donación otorgada por un tercero a favor del secretario o dependiente que trabaja a sueldo en su despacho legal?",
    "options": [
      {
        "key": "A",
        "text": "No, está prohibido autorizar instrumentos que contengan disposiciones o beneficios a favor de los dependientes o empleados a sueldo del mismo notario."
      },
      {
        "key": "B",
        "text": "Sí, no existe ninguna limitación respecto a los empleados de oficina."
      },
      {
        "key": "C",
        "text": "Sí, siempre que el secretario tenga una antigüedad laboral mayor a diez años."
      },
      {
        "key": "D",
        "text": "Solo si el notario le descuenta el valor de la donación de su sueldo."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 9 LN extiende la prohibición y nulidad de los actos a favor de los dependientes o empleados del notario para evitar presiones o captaciones indebidas de voluntad a través del personal del despacho fedatario.",
    "csjPrecedent": "Corte Plena CSJ: La autorización de actos dispositivos en beneficio de dependientes del notario acarrea nulidad de pleno derecho e investigación disciplinaria."
  },
  {
    "id": "not-28",
    "category": "notarial-puro",
    "topic": "Protocolización de Documentos Privados sin Resolución Judicial",
    "legalBasis": "Art. 56 Ley de Notariado",
    "statement": "Cuando las partes solicitan voluntariamente al notario la protocolización de un documento privado (por ejemplo, un plano o contrato privado de arrendamiento):",
    "options": [
      {
        "key": "A",
        "text": "Se eliminan todas las deudas tributarias derivadas del arrendamiento."
      },
      {
        "key": "B",
        "text": "El documento privado se convierte mágicamente en un tratado internacional vinculante."
      },
      {
        "key": "C",
        "text": "El notario sanea de pleno derecho cualquier causa de ilicitud penal previa del documento."
      },
      {
        "key": "D",
        "text": "El notario asienta la escritura matriz insertando literalmente el documento o agregándolo al legajo de anexos, dando fe de su existencia pero sin que la protocolización convierta el acto privado en escritura pública originaria."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 56 LN permite la protocolización a solicitud de parte interesada. El acto confiere fecha cierta y garantía de preservación física en el protocolo, pero no transmuta la naturaleza privada originaria del acto ni subsana defectos intrínsecos de fondo.",
    "csjPrecedent": "Sala de lo Civil CSJ: La protocolización de un documento privado le otorga fecha cierta pero no sustituye las solemnidades legales ad solemnitatem requeridas para actos solemnes."
  },
  {
    "id": "not-29",
    "category": "notarial-puro",
    "topic": "Notario como Sujeto Obligado ante la UIF (Ley contra el Lavado de Dinero)",
    "legalBasis": "Art. 2 Ley contra el Lavado de Dinero y de Activos (LCLDA)",
    "statement": "En el marco de la prevención del lavado de dinero en El Salvador, ¿qué deberes legales asume el notario al autorizar compraventas de inmuebles de alto valor?",
    "options": [
      {
        "key": "A",
        "text": "Garantizar que el comprador no pague ningún tributo al Ministerio de Hacienda."
      },
      {
        "key": "B",
        "text": "Guardar silencio cómplice y cobrar una comisión en efectivo del 10% del monto lavado."
      },
      {
        "key": "C",
        "text": "Aplicar medidas de debida diligencia, identificar al Beneficiario Final, verificar el origen lícito de los fondos y reportar transacciones sospechosas a la Unidad de Investigación Financiera (UIF) de la FGR."
      },
      {
        "key": "D",
        "text": "Ocultar los nombres reales de los otorgantes bajo seudónimos artísticos."
      }
    ],
    "correctKey": "C",
    "explanation": "Los notarios salvadoreños son sujetos obligados designados por el Art. 2 de la LCLDA y el Instructivo UIF, debiendo cumplir con el formulario de debida diligencia e identificación de clientes en operaciones inmobiliarias y corporativas superiores a los umbrales de ley.",
    "csjPrecedent": "Sala de lo Penal y Sala de lo Constitucional CSJ: El secreto profesional no ampara la complicidad en el lavado de activos ni exime del cumplimiento de los deberes de prevención legal ante la UIF."
  },
  {
    "id": "not-30",
    "category": "notarial-puro",
    "topic": "Responsabilidad Notarial por Defectos en el Tracto Registral",
    "legalBasis": "Art. 46 Ley de Notariado",
    "statement": "Si un notario autoriza una escritura de hipoteca sin advertir a las partes que el inmueble se encuentra embargado o con anotación preventiva inscrita a favor de un tercero:",
    "options": [
      {
        "key": "A",
        "text": "Incurre en responsabilidad civil profesional por los daños y perjuicios económicos causados al acreedor hipotecario perjudicado por su negligencia omisiva."
      },
      {
        "key": "B",
        "text": "El notario adquiere la propiedad del inmueble embargado de forma automática."
      },
      {
        "key": "C",
        "text": "El juez de paz debe encarcelar al registrador del CNR de turno."
      },
      {
        "key": "D",
        "text": "El embargo se cancela de pleno derecho por haber comparecido el notario."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 46 LN y la jurisprudencia civil exigen que el notario examine los antecedentes registrales o advierta de forma expresa a los otorgantes sobre gravámenes preexistentes. Su omisión culpable genera deber de resarcimiento indemnizatorio por responsabilidad profesional.",
    "csjPrecedent": "Sala de lo Civil CSJ: El notario responde civilmente por los perjuicios patrimoniales derivados de autorizar gravámenes sin realizar las advertencias sobre cargas registrales precedentes."
  },
  {
    "id": "not-31",
    "category": "notarial-puro",
    "topic": "Firma del Testigo que Sabe Firmar por el que no Sabe",
    "legalBasis": "Art. 32 numeral 12° Ley de Notariado",
    "statement": "Si en una escritura comparece un otorgante que no sabe firmar y uno de los testigos instrumentales sabe firmar, ¿puede ese mismo testigo instrumental firmar a ruego por el otorgante analfabeto?",
    "options": [
      {
        "key": "A",
        "text": "Sí, una persona que ya funge como testigo hábil puede firmar a ruego del compareciente que no sabe o no puede firmar, haciéndose constar dicha circunstancia en la conclusión."
      },
      {
        "key": "B",
        "text": "No, la ley exige que el que firma a ruego sea un enemigo jurado del otorgante."
      },
      {
        "key": "C",
        "text": "Solo si el testigo es ciego y firma en alfabeto Braille."
      },
      {
        "key": "D",
        "text": "Debe firmar obligatoriamente un diputado de la Asamblea Legislativa."
      }
    ],
    "correctKey": "A",
    "explanation": "La práctica y normativa notarial admiten que el testigo instrumental mayor de edad y hábil suscriba a ruego del compareciente imposibilitado de firmar, estampando además este último su huella digital del pulgar derecho en la matriz.",
    "csjPrecedent": "Sección de Notariado CSJ: La concurrencia de la condición de testigo y firmante a ruego es válida siempre que conste claramente expresada en la cláusula de conclusión notarial."
  },
  {
    "id": "not-32",
    "category": "notarial-puro",
    "topic": "Sellos Notariales Registrados en la CSJ",
    "legalBasis": "Art. 13 Ley de Notariado",
    "statement": "¿Qué características obligatorias debe tener el sello oficial que utiliza el notario en todos sus testimonios y actas?",
    "options": [
      {
        "key": "A",
        "text": "Puede tener forma de estrella con la fotografía del perro del notario."
      },
      {
        "key": "B",
        "text": "Debe ser circular, llevar en el centro el Escudo de Armas de El Salvador y en la circunferencia el nombre completo del notario y la leyenda 'NOTARIO - REPÚBLICA DE EL SALVADOR', debidamente registrado en la CSJ."
      },
      {
        "key": "C",
        "text": "Es un sello libre que cada notario inventa con dibujos artísticos propios sin registro."
      },
      {
        "key": "D",
        "text": "No se exige sello si el notario usa pluma con tinta dorada."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 13 LN reglamenta el sello notarial: circular, con el escudo nacional y datos del profesional, debiendo registrarse la muestra oficial en la Secretaría General de la CSJ y en la Sección de Notariado antes de iniciar funciones.",
    "csjPrecedent": "Corte Plena CSJ: El uso de sellos notariales no registrados o adulterados acarrea la ineficacia de las actuaciones y sanción disciplinaria por usurpación de distintivos oficiales."
  },
  {
    "id": "not-33",
    "category": "notarial-puro",
    "topic": "Pérdida o Destrucción Accidental del Libro de Protocolo",
    "legalBasis": "Arts. 59 al 61 Ley de Notariado",
    "statement": "Si el libro de protocolo se destruye o extravía accidentalmente por caso fortuito (ej. terremoto o inundación comprobada):",
    "options": [
      {
        "key": "A",
        "text": "Se declara nulo todo lo que el notario haya firmado a lo largo de su vida."
      },
      {
        "key": "B",
        "text": "El notario debe comprar hojas en una papelería y reescribir de memoria las escrituras sin avisar a nadie."
      },
      {
        "key": "C",
        "text": "El notario debe dar aviso inmediato a la Sección de Notariado y promover el procedimiento judicial sumario de reposición de protocolo ante el Juez de Primera Instancia competente."
      },
      {
        "key": "D",
        "text": "El notario es inhabilitado de inmediato sin concederle audiencia."
      }
    ],
    "correctKey": "C",
    "explanation": "Los Arts. 59 a 61 LN regulan el procedimiento de reposición de protocolo: ante pérdida fortuita, se abre informativo con citación de otorgantes y cotejo de testimonios inscritos en el CNR para reconstruir legalmente el libro matriz destruido.",
    "csjPrecedent": "Sección de Notariado CSJ: El aviso oportuno y la sustanciación diligente del informativo de reposición excluyen la responsabilidad disciplinaria del notario."
  },
  {
    "id": "not-34",
    "category": "notarial-puro",
    "topic": "Prohibición de Ejercer el Notariado en Asuntos Propios",
    "legalBasis": "Art. 9 Ley de Notariado",
    "statement": "¿Puede un notario salvadoreño autorizar la escritura matriz en la que él mismo comparezca vendiendo un inmueble de su propiedad personal a un comprador particular?",
    "options": [
      {
        "key": "A",
        "text": "Solo si la venta es por un precio menor a cien dólares."
      },
      {
        "key": "B",
        "text": "Sí, el notario puede autorizar todos sus propios contratos para ahorrar honorarios."
      },
      {
        "key": "C",
        "text": "Sí, siempre que comparezca su cónyuge como testigo de conocimiento."
      },
      {
        "key": "D",
        "text": "No, el notario jamás puede autorizar instrumentos en que figure como otorgante o en que tenga interés directo; debe comparecer ante otro notario legalmente facultado."
      }
    ],
    "correctKey": "D",
    "explanation": "El principio fundamental de imparcialidad del Art. 9 LN impide terminantemente que el notario sea a la vez otorgante y fedatario de su propio acto; de hacerlo, la escritura matriz adolece de nulidad absoluta y el notario es suspendido en el ejercicio profesional.",
    "csjPrecedent": "Corte Plena CSJ: La autorización de actos con interés personal directo quebranta de raíz la fe pública delegada y vicia de nulidad insubsanable el instrumento."
  },
  {
    "id": "not-35",
    "category": "notarial-puro",
    "topic": "Entrega de Protocolo por Fallecimiento del Notario",
    "legalBasis": "Art. 25 Ley de Notariado",
    "statement": "Al ocurrir el fallecimiento de un notario en ejercicio, ¿qué obligación recae sobre sus herederos, cónyuge o administradores de sus bienes?",
    "options": [
      {
        "key": "A",
        "text": "Pueden subastar el libro de protocolo en una venta de garaje familiar."
      },
      {
        "key": "B",
        "text": "Deben entregar el libro de protocolo que se encontrare en su poder dentro de los quince días siguientes a la Sección de Notariado de la CSJ o al Juzgado de Primera Instancia más cercano."
      },
      {
        "key": "C",
        "text": "Los herederos pueden continuar autorizando escrituras usando el sello del fallecido."
      },
      {
        "key": "D",
        "text": "Deben quemar el libro en una ceremonia privada de despedida."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 25 LN manda que los parientes o encargados de la custodia de bienes del notario fallecido entreguen el protocolo dentro del plazo de 15 días a la autoridad judicial o a la Sección de Notariado para su resguardo definitivo en el Archivo General de Protocolos de la CSJ.",
    "csjPrecedent": "Sección de Notariado CSJ: La retención indebida de protocolos de notarios fallecidos por particulares faculta al juez a ordenar el allanamiento y secuestro judicial inmediato del libro."
  },
  {
    "id": "not-36",
    "category": "notarial-puro",
    "topic": "Efecto de la Falta de Lectura en Voz Alta",
    "legalBasis": "Art. 32 numeral 9° Ley de Notariado",
    "statement": "¿Qué consecuencia acarrea la omisión de la lectura íntegra de la escritura matriz en voz alta a los otorgantes antes de recoger sus firmas?",
    "options": [
      {
        "key": "A",
        "text": "El instrumento se convalida si los comparecientes afirman haber leído el texto por WhatsApp."
      },
      {
        "key": "B",
        "text": "Es un trámite opcional que los notarios pueden obviar si tienen prisa."
      },
      {
        "key": "C",
        "text": "Vicia el instrumento con defecto formal que puede originar la nulidad del acto por vicio en el consentimiento, respondiendo el notario por los perjuicios causados."
      },
      {
        "key": "D",
        "text": "Se exonera a las partes del pago de la tasa registral de inscripción."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 32 Ord. 9° LN ordena al notario dar fe de haber leído en altas y claras voces el instrumento íntegramente a los comparecientes. La lectura solemne asegura que las partes comprendan cabalmente el alcance de sus obligaciones antes de obligarse con su firma.",
    "csjPrecedent": "Sala de lo Civil CSJ: La falta de lectura íntegra en un solo acto compromete la validez del otorgamiento y la responsabilidad del fedatario por vicios del consentimiento."
  },
  {
    "id": "not-37",
    "category": "notarial-puro",
    "topic": "Prohibición de Emplear Tinta que no sea Negra o Indeble",
    "legalBasis": "Art. 17 Ley de Notariado",
    "statement": "¿Qué exigencias materiales impone la ley notarial respecto de la tinta y legibilidad en el asentamiento de matrices en el protocolo?",
    "options": [
      {
        "key": "A",
        "text": "Deberá usarse tinta negra fija e indeleble o impresión mecánica o digital nítida y uniforme, que garantice la conservación permanente y legibilidad del texto en el tiempo."
      },
      {
        "key": "B",
        "text": "Se puede escribir con lápiz de grafito borrable para corregir errores después."
      },
      {
        "key": "C",
        "text": "Se autoriza el uso de tintas fluorescentes de colores variados en cada renglón."
      },
      {
        "key": "D",
        "text": "Puede utilizarse tinta invisible revelable únicamente con luz ultravioleta."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 17 LN exige que las escrituras se asienten con tinta negra indeleble y caracteres claros que resistan el paso de las décadas en los archivos nacionales, prohibiendo tintas efímeras o borrables que faciliten fraudes documentales.",
    "csjPrecedent": "Sección de Notariado CSJ: El empleo de tintas degradables o de deficiente fijación química amerita pliego de reparos y exigencia de preservación a costa del notario."
  },
  {
    "id": "not-38",
    "category": "notarial-puro",
    "topic": "Razón de Clausura del Protocolo",
    "legalBasis": "Art. 21 Ley de Notariado",
    "statement": "Al concluir el año de vigencia o agotarse las hojas legalizadas del libro, ¿qué debe contener la razón de cierre extendida por el notario?",
    "options": [
      {
        "key": "A",
        "text": "Se deja en blanco para que la firme el empleado de ventanilla que reciba el libro."
      },
      {
        "key": "B",
        "text": "Basta con trazar dos líneas diagonales sobre la última página en blanco."
      },
      {
        "key": "C",
        "text": "Debe contener una lista de todos los juicios penales tramitados en el país."
      },
      {
        "key": "D",
        "text": "Hará constar el número de escrituras otorgadas, las suspendidas si las hubiere, el número de folios utilizados y la fecha de clausura, autorizándola con su firma y sello."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 21 LN detalla el contenido preciso de la razón de cierre: recuento exacto de instrumentos concluidos, escrituras suspendidas con sus números, folios escritos e inutilizados y la firma de cierre del notario.",
    "csjPrecedent": "Sección de Notariado CSJ: La incongruencia numérica en la razón de cierre entre escrituras autorizadas y folios genera reparo formal y paralización de entrega de nuevo protocolo."
  },
  {
    "id": "not-39",
    "category": "notarial-puro",
    "topic": "Firma del Testimonio por el Notario",
    "legalBasis": "Art. 44 Ley de Notariado",
    "statement": "¿Cómo se formaliza legalmente la expedición de un testimonio o copia fidedigna de una escritura matriz?",
    "options": [
      {
        "key": "A",
        "text": "Se envía un mensaje de texto por teléfono celular diciendo 'el testimonio está listo'."
      },
      {
        "key": "B",
        "text": "Basta con entregar una fotocopia simple sin firma ni sello notarial."
      },
      {
        "key": "C",
        "text": "El notario extiende la transcripción íntegra o copia fotostática confrontada de la matriz, agregando una razón final en que exprese para quién se expide, el número de hojas y la fecha, firmándola y sellándola en cada una de sus hojas."
      },
      {
        "key": "D",
        "text": "Debe enviarse a visar por el gobernador departamental en audiencia solemne."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 44 LN exige que el testimonio contenga la razón formal de expedición, señalando el otorgante a quien se libra y firmando y sellando el notario al pie y al margen de cada una de las hojas que componen el testimonio de ley.",
    "csjPrecedent": "Sala de lo Civil CSJ: La falta de firma o sello notarial en cualquiera de las hojas del testimonio impide su inscripción registral en el CNR y desvirtúa su eficacia probatoria pública."
  },
  {
    "id": "not-40",
    "category": "notarial-puro",
    "topic": "Inhabilitación Notarial por Conducta Viciosa o Inmoral",
    "legalBasis": "Art. 62 Ley de Notariado y Ley Orgánica Judicial",
    "statement": "¿Qué potestad disciplinaria conserva la Corte Plena de la CSJ sobre los notarios autorizados en relación con su conducta moral y profesional?",
    "options": [
      {
        "key": "A",
        "text": "Puede suspender o inhabilitar en el ejercicio de la función notarial al profesional que observe conducta notoriamente inmoral, viciosa, o que haya sido condenado por delitos dolosos que afecten la fe pública o la probidad."
      },
      {
        "key": "B",
        "text": "Ninguna, una vez otorgado el título de notario este es irrevocable de por vida sin importar los crímenes que cometa."
      },
      {
        "key": "C",
        "text": "Solo puede imponerle una llamada de atención si el notario no saluda a los magistrados."
      },
      {
        "key": "D",
        "text": "La CSJ solo tiene potestad sobre los abogados que sean empleados de la corte."
      }
    ],
    "correctKey": "A",
    "explanation": "Los Arts. 62 y sigs. LN y Art. 51 LOJ confieren a la Corte Plena de la CSJ el poder de policía disciplinaria sobre notarios y abogados, pudiendo suspenderlos temporal o definitivamente por mala conducta notoria, embriaguez habitual, estafas o falsedad documental comprobada.",
    "csjPrecedent": "Corte Plena CSJ: La honorabilidad y la solvencia moral son requisitos de mantenimiento continuo en el ejercicio de la fe pública; su pérdida comprobada amerita la inhabilitación profesional."
  },
  {
    "id": "not-41",
    "category": "lenjvod",
    "topic": "Principio de Oposición y Cese de Competencia Notarial",
    "legalBasis": "Art. 2 inciso 2° LENJVOD",
    "statement": "Si durante la tramitación de cualquier diligencia de jurisdicción voluntaria ante notario (ej. aceptación de herencia, remedición o desalojo) surge oposición formal fundada de parte interesada, ¿qué orden procesal imperativa debe cumplir el notario?",
    "options": [
      {
        "key": "A",
        "text": "Suspender inmediatamente las diligencias notariales, cesar en su conocimiento y remitir el expediente original al Juez de Primera Instancia competente."
      },
      {
        "key": "B",
        "text": "Continuar el trámite y dictar sentencia notarial condenando en costas al opositor."
      },
      {
        "key": "C",
        "text": "Rechazar la oposición in limine si el opositor no acompaña fianza en efectivo."
      },
      {
        "key": "D",
        "text": "Convocar a las partes a un arbitraje privado obligatorio administrado por la Cámara de Comercio."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 2 inc. 2° de la LENJVOD establece que si se suscitare contención u oposición de persona legítima, cesará la competencia del notario y éste remitirá las actuaciones al juez competente para que conozca en juicio contencioso.",
    "csjPrecedent": "Corte Plena CSJ: La continuación de diligencias notariales mediando oposición formal legítima de terceros constituye usurpación de funciones jurisdiccionales privativas de los jueces ordinarios."
  },
  {
    "id": "not-42",
    "category": "lenjvod",
    "topic": "Aceptación de Herencia en Sede Notarial y Declaratoria Interina",
    "legalBasis": "Arts. 18 al 21 LENJVOD",
    "statement": "Durante las diligencias notariales de aceptación de herencia, una vez agregadas las certificaciones de defunción y partidas respectivas, ¿qué resolución debe emitir el notario antes de proceder a la declaración definitiva de herederos?",
    "options": [
      {
        "key": "A",
        "text": "Emitir inmediatamente la hijuela de partición material de los inmuebles."
      },
      {
        "key": "B",
        "text": "Declarar herederos interinos, conferir la administración y representación interina de la sucesión con beneficio de inventario y librar edictos para su publicación en el Diario Oficial y periódicos."
      },
      {
        "key": "C",
        "text": "Remitir inmediatamente el protocolo a la Corte de Cuentas de la República."
      },
      {
        "key": "D",
        "text": "Solicitar autorización previa al Concejo Municipal del domicilio del causante."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 19 de la LENJVOD ordena al notario declarar herederos interinos a los solicitantes, discernirles la administración interina de la masa hereditaria y ordenar la publicación de los tres edictos de ley en el Diario Oficial y en un diario de circulación nacional para emplazar a terceros con igual o mejor derecho.",
    "csjPrecedent": "Jurisprudencia de la Sala de lo Civil CSJ: La omisión de cualquiera de las publicaciones de los edictos de ley vicia de nulidad insubsanable la posterior protocolización de la declaratoria definitiva."
  },
  {
    "id": "not-43",
    "category": "lenjvod",
    "topic": "Diligencias Notariales de Remedición de Inmuebles y Citación a Colindantes",
    "legalBasis": "Art. 15 LENJVOD",
    "statement": "En las diligencias notariales de remedición de un inmueble rústico o urbano, ¿con cuánta anticipación mínima debe el notario citar formalmente a los colindantes antes de realizar la mensura e inspección pericial del terreno?",
    "options": [
      {
        "key": "A",
        "text": "Con quince días calendario mediante publicación en tres periódicos de circulación nacional."
      },
      {
        "key": "B",
        "text": "Con al menos veinticuatro horas mediante mensaje telegráfico o digital."
      },
      {
        "key": "C",
        "text": "Por lo menos con tres días de anticipación a la fecha fijada para la operación técnica de mensura en el terreno."
      },
      {
        "key": "D",
        "text": "No existe obligación legal de citar a los colindantes si el interesado declara bajo juramento no conocerlos."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 15 inc. 2° de la LENJVOD ordena taxativamente al notario citar a los colindantes del inmueble a remedir por lo menos con tres días de anticipación a la fecha señalada para la inspección y mensura técnica del terreno, garantizando su derecho de audiencia.",
    "csjPrecedent": "Sala de lo Civil CSJ Ref. 132-CAC-2017: La omisión de citar legalmente a todos los colindantes con la antelación de tres días invalida de nulidad absoluta las diligencias de remedición y su posterior protocolización registral."
  },
  {
    "id": "not-44",
    "category": "lenjvod",
    "topic": "Publicación de Edictos en la Aceptación de Herencia",
    "legalBasis": "Art. 19 LENJVOD",
    "statement": "¿Cuál es el número preceptivo de publicaciones de edictos y en qué medios deben realizarse durante las diligencias notariales de aceptación de herencia?",
    "options": [
      {
        "key": "A",
        "text": "Solo se publican carteles pegados en la puerta de la iglesia parroquial."
      },
      {
        "key": "B",
        "text": "Una sola publicación en una red social del despacho notarial."
      },
      {
        "key": "C",
        "text": "Diez publicaciones en la gaceta judicial del tribunal de paz."
      },
      {
        "key": "D",
        "text": "Tres edictos publicados en el Diario Oficial y tres publicaciones en un diario de circulación nacional de la República."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 19 inc. 2° LENJVOD estipula con rigor que se librarán edictos que se publicarán tres veces en el Diario Oficial y tres veces en un diario de circulación nacional, concediendo el plazo de quince días para comparecer a quienes se crean con igual o mejor derecho.",
    "csjPrecedent": "Sala de lo Civil CSJ: La falta de concordancia o la ausencia de publicación de los tres edictos en el Diario Oficial destruye la publicidad registral y vicia de nulidad absoluta la declaratoria definitiva."
  },
  {
    "id": "not-45",
    "category": "lenjvod",
    "topic": "Cómputo del Plazo tras la Última Publicación de Edictos",
    "legalBasis": "Art. 20 LENJVOD",
    "statement": "¿A partir de qué momento exacto se cuentan los quince días hábiles para emitir la declaratoria definitiva de herederos en la LENJVOD?",
    "options": [
      {
        "key": "A",
        "text": "Desde el día en que falleció el causante en el hospital."
      },
      {
        "key": "B",
        "text": "A partir del día siguiente al de la última publicación del edicto en el Diario Oficial."
      },
      {
        "key": "C",
        "text": "Desde que el solicitante contrató al abogado notario."
      },
      {
        "key": "D",
        "text": "A partir de la primera publicación en el periódico comercial."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 20 LENJVOD determina que transcurridos quince días después de la última publicación del edicto en el Diario Oficial sin haber mediado oposición legítima, el notario procederá a dictar la resolución definitiva declarando herederos a los aceptantes.",
    "csjPrecedent": "Sala de lo Civil CSJ: Dictar la declaratoria definitiva antes de expirar el plazo de 15 días posteriores a la tercera publicación del Diario Oficial causa la nulidad absoluta de la resolución por vulnerar el emplazamiento de terceros."
  },
  {
    "id": "not-46",
    "category": "lenjvod",
    "topic": "Informe Previo a la Corte Suprema de Justicia en Diligencias de Herencia",
    "legalBasis": "Art. 19 inciso final LENJVOD",
    "statement": "Antes de pronunciar la declaratoria definitiva de herederos, ¿qué informe obligatorio debe solicitar el notario a la CSJ?",
    "options": [
      {
        "key": "A",
        "text": "Constancia del Ministerio de la Defensa sobre el servicio militar del causante."
      },
      {
        "key": "B",
        "text": "Informe a la Sala de lo Penal sobre antecedentes de los difuntos."
      },
      {
        "key": "C",
        "text": "Informe a la Secretaría de la Corte Suprema de Justicia para verificar si se han promovido diligencias judiciales de aceptación de la misma herencia o si se ha declarado yacente."
      },
      {
        "key": "D",
        "text": "Autorización del Tribunal Supremo Electoral sobre el padrón de votantes."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 19 inc. final LENJVOD manda al notario librar oficio a la Secretaría General de la CSJ para cerciorarse de que no existe duplicidad de expedientes judiciales o notariales sobre la misma sucesión, evitando sentencias contradictorias.",
    "csjPrecedent": "Corte Plena CSJ: La omisión de recabar el informe de la CSJ sobre existencia de otras diligencias acarrea responsabilidad disciplinaria e invalidez del título hereditario."
  },
  {
    "id": "not-47",
    "category": "lenjvod",
    "topic": "Protocolización de la Declaratoria Definitiva de Herederos",
    "legalBasis": "Art. 21 LENJVOD",
    "statement": "Una vez dictada la resolución final que declara definitivamente herederos a los solicitantes, ¿qué formalidad debe cumplir el notario en su protocolo?",
    "options": [
      {
        "key": "A",
        "text": "Protocolizar íntegramente la resolución definitiva de herederos en su libro de protocolo y expedir el correspondiente testimonio para su inscripción en el Registro de la Propiedad Raíz e Hipotecas del CNR."
      },
      {
        "key": "B",
        "text": "Entregar una fotocopia simple sin protocolizar al solicitante."
      },
      {
        "key": "C",
        "text": "Enviar la resolución por correo electrónico no cifrado al alcalde."
      },
      {
        "key": "D",
        "text": "Archivar el expediente en su oficina sin expedir testimonio a los herederos."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 21 LENJVOD dispone que dictada la declaratoria definitiva, el notario la protocolizará en su libro de protocolo y expedirá el testimonio respectivo, el cual servirá de título legítimo de dominio hereditario inscribible en el CNR.",
    "csjPrecedent": "Sala de lo Civil CSJ: La protocolización notarial es el vehículo formal solemne que confiere eficacia registral traslativa a la adjudicación de la herencia en sede voluntaria."
  },
  {
    "id": "not-48",
    "category": "lenjvod",
    "topic": "Declaratoria de Herencia Yacente en Sede Notarial",
    "legalBasis": "Arts. 20 al 22 LENJVOD y Art. 1164 Código Civil",
    "statement": "Si transcurren los quince días posteriores a los edictos sin que nadie se presente a aceptar la herencia o si los llamados la repudian formalmente:",
    "options": [
      {
        "key": "A",
        "text": "Se declaran extinguidas las propiedades raíces del causante."
      },
      {
        "key": "B",
        "text": "El notario se adjudica automáticamente los bienes del difunto en propiedad personal."
      },
      {
        "key": "C",
        "text": "Los bienes pasan de inmediato a ser propiedad del primer vecino que los invada."
      },
      {
        "key": "D",
        "text": "El notario declarará yacente la herencia, librará nuevos edictos y remitirá las diligencias al Juez de Primera Instancia para el nombramiento del curador de la herencia yacente."
      }
    ],
    "correctKey": "D",
    "explanation": "Conforme a los Arts. 20 y 21 LENJVOD y Art. 1164 C.C., si no comparece ningún interesado con derecho o se repudia la asignación, la herencia se declara yacente, pasando la competencia al juez para designar curador dativo que defienda la masa frente a los acreedores.",
    "csjPrecedent": "Sala de lo Civil CSJ: El notario no puede nombrar curador de la herencia yacente por ser atribución privativa del juez ordinario tras la remisión del expediente notarial."
  },
  {
    "id": "not-49",
    "category": "lenjvod",
    "topic": "Remedición de Inmuebles con Cabida Real Diferente",
    "legalBasis": "Art. 15 LENJVOD",
    "statement": "¿En qué supuestos fácticos procede promover las diligencias notariales de remedición de inmuebles del Artículo 15 de la LENJVOD?",
    "options": [
      {
        "key": "A",
        "text": "Para crear títulos supletorios sobre terrenos pertenecientes al Estado o reservas forestales."
      },
      {
        "key": "B",
        "text": "Únicamente para despojar por la fuerza a un colindante de una porción de terreno disputada."
      },
      {
        "key": "C",
        "text": "Cuando por error de mensura o cambio topográfico, la cabida real dentro de los linderos legítimos del inmueble resulte mayor o menor que la que consta consignada en el antecedente inscrito en el CNR."
      },
      {
        "key": "D",
        "text": "Solo cuando el propietario desee construir una piscina en su inmueble."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 15 LENJVOD autoriza la remedición cuando dentro de linderos ciertos e indiscutidos exista discrepancia métrica entre la realidad superficial del terreno y la medida teórica registrada, sin que ello pueda encubrir una usurpación contenciosa de predios colindantes.",
    "csjPrecedent": "Sala de lo Civil CSJ: La remedición notarial es de naturaleza voluntaria y no contenciosa; si la operación invade mojones ajenos o colindantes se oponen legítimamente, cesa de pleno derecho la competencia notarial."
  },
  {
    "id": "not-50",
    "category": "lenjvod",
    "topic": "Nombramiento y Juramentación de Perito en la Remedición",
    "legalBasis": "Art. 15 inciso 1° LENJVOD",
    "statement": "¿Qué profesional técnico debe nombrar y juramentar el notario para realizar la operación de mensura en la remedición de un inmueble?",
    "options": [
      {
        "key": "A",
        "text": "Un ingeniero civil, topógrafo o agrimensor idóneo y capacitado, a quien el notario tomará juramento legal de cumplir fiel y lealmente su cometido antes de iniciar la inspección."
      },
      {
        "key": "B",
        "text": "Cualquier albañil que sepa utilizar una cinta métrica común."
      },
      {
        "key": "C",
        "text": "El hijo del solicitante sin importar su profesión u oficio."
      },
      {
        "key": "D",
        "text": "El notario realiza por sí mismo la medición técnica con pasos en el terreno."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 15 inc. 1° LENJVOD exige que la mensura pericial sea ejecutada por perito idóneo (ingeniero o topógrafo colegiado) que sea nombrado y juramentado previamente por el notario en acta formal previa a la operación de campo.",
    "csjPrecedent": "Sala de lo Civil CSJ: La falta de nombramiento y juramentación formal del perito antes de la operación técnica vicia de nulidad insubsanable las diligencias de remedición."
  },
  {
    "id": "not-51",
    "category": "lenjvod",
    "topic": "Aprobación del Plano por el Catastro del CNR en la Remedición",
    "legalBasis": "Art. 15 LENJVOD y Ley de Catastro",
    "statement": "Antes de protocolizar la resolución final de remedición de un inmueble, ¿qué requisito técnico registral perentorio debe cumplirse?",
    "options": [
      {
        "key": "A",
        "text": "Que el plano y la memoria descriptiva elaborados por el perito cuenten con la revisión y aprobación técnica de la Oficina de Mantenimiento Catastral del Centro Nacional de Registros (CNR)."
      },
      {
        "key": "B",
        "text": "Que el plano sea firmado por el ministro de relaciones exteriores."
      },
      {
        "key": "C",
        "text": "Que los vecinos del municipio firmen una carta de apoyo solidario."
      },
      {
        "key": "D",
        "text": "No se requiere plano si el propietario afirma que el terreno está cercado."
      }
    ],
    "correctKey": "A",
    "explanation": "La normativa catastral y el Art. 15 LENJVOD exigen la aprobación catastral del plano de remedición expedida por el CNR, asegurando que las coordenadas geodésicas y la nueva cabida concuerden con la base catastral nacional antes de la protocolización.",
    "csjPrecedent": "Criterio Vinculante Registral CNR: Ningún testimonio de protocolización de remedición puede inscribirse sin la previa visación y aprobación técnica del Catastro Oficial."
  },
  {
    "id": "not-52",
    "category": "lenjvod",
    "topic": "Partición Notarial Extrajudicial entre Coherederos",
    "legalBasis": "Art. 17 LENJVOD y Art. 1196 Código Civil",
    "statement": "Para que los coherederos o comuneros de un bien indiviso puedan otorgar válidamente la partición material de bienes en sede notarial sin acudir a juicio:",
    "options": [
      {
        "key": "A",
        "text": "Basta con que la mayoría simple del 51% esté de acuerdo aunque los demás se opongan."
      },
      {
        "key": "B",
        "text": "Todos los coasignatarios o comuneros deben ser plenamente capaces y estar unánimemente de acuerdo en la división y adjudicación de las hijuelas."
      },
      {
        "key": "C",
        "text": "Se puede realizar aunque alguno de los herederos sea un menor de edad no emancipado sin autorización judicial."
      },
      {
        "key": "D",
        "text": "El notario decide unilateralmente a quién le quita la tierra y a quién se la regala."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 17 LENJVOD y Art. 1196 C.C. permiten la partición extrajudicial amigable ante notario bajo dos condiciones insoslayables: que no existan comuneros incapaces (o medie autorización judicial previa) y que exista unanimidad absoluta en la distribución de bienes.",
    "csjPrecedent": "Sala de lo Civil CSJ: La falta de unanimidad de todos los comuneros en la partición notarial acarrea la nulidad de pleno derecho del instrumento por incompetencia de jurisdicción voluntaria."
  },
  {
    "id": "not-53",
    "category": "lenjvod",
    "topic": "Títulos Supletorios y Ámbito de Competencia Notarial",
    "legalBasis": "Art. 16 LENJVOD frente a Art. 699 Código Civil",
    "statement": "¿Puede un notario tramitar y otorgar un título supletorio sobre un inmueble rústico de vocación agrícola carente de antecedente inscrito?",
    "options": [
      {
        "key": "A",
        "text": "Sí, siempre que el notario sea dueño de una finca agrícola vecina."
      },
      {
        "key": "B",
        "text": "Sí, los notarios pueden titular cualquier inmueble rústico del país sin intervención judicial."
      },
      {
        "key": "C",
        "text": "No, la titulación supletoria de predios rústicos está reservada con exclusividad al Juez de Primera Instancia civil competente conforme al Art. 699 C.C.; el notario solo puede titular predios urbanos bajo el régimen especial de la LENJVOD."
      },
      {
        "key": "D",
        "text": "Solo si el inmueble tiene una plantación de café de exportación."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 16 LENJVOD autoriza al notario únicamente para seguir diligencias de titulación de predios urbanos que reúnan los límites legales, permaneciendo la titulación supletoria de bienes raíces rústicos en la competencia judicial exclusiva de los jueces de primera instancia (Art. 699 C.C.).",
    "csjPrecedent": "Corte Plena CSJ: La titulación notarial de predios rústicos constituye una usurpación de funciones judiciales sancionada con nulidad absoluta del título e inhabilitación del notario."
  },
  {
    "id": "not-54",
    "category": "lenjvod",
    "topic": "Diligencias de Título de Propiedad de Predio Urbano",
    "legalBasis": "Art. 16 LENJVOD",
    "statement": "En las diligencias notariales para titular un predio urbano según el Art. 16 de la LENJVOD, ¿qué período de posesión quieta, pacífica e ininterrumpida debe probarse?",
    "options": [
      {
        "key": "A",
        "text": "No se exige posesión previa si el solicitante paga el valor del inmueble a la alcaldía."
      },
      {
        "key": "B",
        "text": "Haber vivido en la casa durante las últimas cuarenta y ocho horas."
      },
      {
        "key": "C",
        "text": "Veinticinco años ininterrumpidos en presencia de diez testigos."
      },
      {
        "key": "D",
        "text": "Posesión quieta, pacífica, pública y no interrumpida por más de diez años por parte del solicitante o sus antecesores a título de dueño."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 16 LENJVOD exige comprobar la posesión material civil por un plazo continuo mayor de diez años, acreditada mediante inspección personal del notario y la deposición concordante de al menos tres testigos vecinos de buena reputación.",
    "csjPrecedent": "Sala de lo Civil CSJ: La falta de acreditación fehaciente del lapso posesorio de diez años invalida el título urbano supletorio otorgado en sede notarial."
  },
  {
    "id": "not-55",
    "category": "lenjvod",
    "topic": "Deslinde Voluntario y Fijación de Mojones en Sede Notarial",
    "legalBasis": "Art. 14 LENJVOD y Art. 843 Código Civil",
    "statement": "Cuando dos propietarios de predios contiguos desean fijar pacíficamente de común acuerdo la línea divisoria y mojones de sus inmuebles (Art. 14 LENJVOD):",
    "options": [
      {
        "key": "A",
        "text": "Deben iniciar obligatoriamente una demanda contenciosa de deslinde forzoso ante el tribunal."
      },
      {
        "key": "B",
        "text": "Pueden solicitar al notario que practique la inspección con intervención de perito idóneo, fijando los mojones y levantando acta notarial que se protocolizará en su libro."
      },
      {
        "key": "C",
        "text": "El deslinde pacífico entre vecinos está prohibido en la legislación salvadoreña."
      },
      {
        "key": "D",
        "text": "El notario debe derribar todos los muros divisorios de ambos inmuebles."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 14 LENJVOD faculta el deslinde amigable ante notario con citación y conformidad de los colindantes. Se practica mensura y se fijan los linderos en el terreno, levantándose acta de conformidad que protocolizada servirá de base registral.",
    "csjPrecedent": "Sala de lo Civil CSJ: El deslinde notarial voluntario consolida la delimitación material siempre que no exista controversia fáctica sobre la propiedad de las franjas linderas."
  },
  {
    "id": "not-56",
    "category": "lenjvod",
    "topic": "Adecuación de Nombre o Identidad Personal en Sede Notarial",
    "legalBasis": "Art. 23 LENJVOD y Ley del Nombre de la Persona Natural",
    "statement": "Si una persona salvadoreña ha sido conocida en su vida social, bancaria y familiar con nombres o apellidos distintos o incompletos a los de su partida de nacimiento original:",
    "options": [
      {
        "key": "A",
        "text": "El notario debe ordenar la destrucción de su partida de nacimiento original."
      },
      {
        "key": "B",
        "text": "Debe cambiarse de nacionalidad y renunciar a la ciudadanía salvadoreña."
      },
      {
        "key": "C",
        "text": "Puede otorgar ante notario una escritura de adecuación de nombre o diligencias de identidad personal para establecer que los diferentes nombres corresponden a una misma e idéntica persona."
      },
      {
        "key": "D",
        "text": "Debe ser arrestado por suplantación de identidad sin derecho a defensa."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 23 LENJVOD y la Ley del Nombre de la Persona Natural autorizan al notario para asentar la escritura o acta de identidad personal en la que, con auxilio de dos testigos idóneos, se establece que diversas identidades corresponden a la misma persona, marginándose la partida en el Registro del Estado Familiar.",
    "csjPrecedent": "Sala de lo Civil CSJ: La escritura notarial de identidad no altera la filiación biológica ni el nombre legal principal, sino que ampara jurídicamente los nombres con que el titular ha actuado públicamente."
  },
  {
    "id": "not-57",
    "category": "lenjvod",
    "topic": "Tradición de Legado de Cosa Cierta en Sede Notarial",
    "legalBasis": "Art. 22 LENJVOD y Arts. 1074 y sigs. Código Civil",
    "statement": "Cuando en un testamento el causante legó un inmueble específico a favor de un legatario y los herederos universales ya aceptaron la herencia:",
    "options": [
      {
        "key": "A",
        "text": "Los herederos universales o el albacea con facultades pueden otorgar ante notario la escritura matriz de entrega y tradición de legado a favor del legatario para que este inscriba su dominio en el CNR."
      },
      {
        "key": "B",
        "text": "El legatario toma posesión física inmediata por la fuerza sin necesidad de escritura pública."
      },
      {
        "key": "C",
        "text": "El legado se anula automáticamente y pasa a ser propiedad de la alcaldía municipal."
      },
      {
        "key": "D",
        "text": "El notario adquiere el inmueble en copropiedad con el legatario."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 22 LENJVOD y el Código Civil regulan la entrega del legado: para que el legatario adquiera el dominio registral de la cosa singular legada, debe otorgarse escritura matriz de tradición de legado por los herederos o albacea legalmente investidos.",
    "csjPrecedent": "Sala de lo Civil CSJ: La sola institución testamentaria de un legado no hace tradición de dominio registral; se requiere el instrumento notarial de entrega y tradición de legado debidamente inscrito."
  },
  {
    "id": "not-58",
    "category": "lenjvod",
    "topic": "Notificación Notarial de Cesión de Créditos",
    "legalBasis": "Art. 24 LENJVOD y Arts. 1691 y 1692 Código Civil",
    "statement": "Para que la cesión de un crédito personal o hipotecario surta plenos efectos contra el deudor y terceros:",
    "options": [
      {
        "key": "A",
        "text": "El deudor queda exonerado de pagar la deuda al haber sido cedido el crédito."
      },
      {
        "key": "B",
        "text": "Basta con enviarle un mensaje anónimo por correo postal ordinario."
      },
      {
        "key": "C",
        "text": "No se requiere notificarle nada si el acreedor original cambió de número telefónico."
      },
      {
        "key": "D",
        "text": "Debe ser notificada al deudor por medio de un notario que le exhiba el título y le entregue copia certificada de la cesión, o constar la aceptación expresa del deudor."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 24 LENJVOD en concordancia con los Arts. 1691 y 1692 C.C. faculta al notario para practicar la notificación formal de la cesión de créditos mediante acta notarial de requerimiento, quedando el deudor obligado únicamente a favor del nuevo cesionario a partir de dicha notificación.",
    "csjPrecedent": "Sala de lo Civil CSJ: La notificación notarial de la cesión de créditos es condición legal de oponibilidad; el pago realizado por el deudor al cedente antes de la notificación notarial es plenamente válido."
  },
  {
    "id": "not-59",
    "category": "lenjvod",
    "topic": "Aceptación de Herencia con Beneficio de Inventario",
    "legalBasis": "Art. 18 LENJVOD y Art. 1169 Código Civil",
    "statement": "En las diligencias notariales de aceptación de herencia, ¿cuál es el alcance de declarar a los herederos con 'beneficio de inventario'?",
    "options": [
      {
        "key": "A",
        "text": "Se condonan todas las deudas del difunto con los bancos del sistema."
      },
      {
        "key": "B",
        "text": "Los herederos deben pagar las deudas del causante con sus propios salarios y casas personales sin límite."
      },
      {
        "key": "C",
        "text": "Los herederos aceptantes no responden de las deudas y cargas hereditarias más allá del valor total de los bienes que heredan, separándose los patrimonios."
      },
      {
        "key": "D",
        "text": "Los herederos adquieren inmunidad penal frente a cualquier delito del difunto."
      }
    ],
    "correctKey": "C",
    "explanation": "El beneficio de inventario (Art. 18 LENJVOD y Art. 1169 C.C.) es una institución protectora que limita la responsabilidad patrimonial del heredero ultra vires hereditatis: las deudas de la sucesión se pagan exclusivamente con el activo hereditario relicto sin contaminar el patrimonio privado personal del heredero.",
    "csjPrecedent": "Sala de lo Civil CSJ: La declaratoria de herederos interinos o definitivos se entiende concedida por ley con beneficio de inventario, protegiendo a los asignatarios de deudas que superen el acervo."
  },
  {
    "id": "not-60",
    "category": "lenjvod",
    "topic": "Remisión del Expediente Concluido a la Sección de Notariado",
    "legalBasis": "Art. 25 LENJVOD",
    "statement": "Una vez terminadas las diligencias de jurisdicción voluntaria ante notario y protocolizada la resolución final:",
    "options": [
      {
        "key": "A",
        "text": "El notario debe remitir el expediente original completo de las actuaciones a la Sección de Notariado de la CSJ para su custodia y archivo permanente dentro de los plazos de ley."
      },
      {
        "key": "B",
        "text": "El notario puede destruir todos los papeles del expediente en su casa."
      },
      {
        "key": "C",
        "text": "Debe devolver las pruebas originales a los testigos para que las guarden de recuerdo."
      },
      {
        "key": "D",
        "text": "El expediente se entrega a la policía municipal de tránsito."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 25 LENJVOD manda que fenecidas las diligencias y expedido el testimonio de ley, el notario remitirá el expediente original a la Sección de Notariado de la Corte Suprema de Justicia para su debida foliatura, custodia e incorporación al archivo público judicial.",
    "csjPrecedent": "Sección de Notariado CSJ: La omisión de remitir los expedientes terminados de jurisdicción voluntaria acarrea apertura de informativo y negativa de expedición de nuevo protocolo."
  },
  {
    "id": "not-61",
    "category": "lenjvod",
    "topic": "Citación a Colindantes Fallecidos en la Remedición",
    "legalBasis": "Art. 15 LENJVOD y Código Procesal Civil y Mercantil",
    "statement": "Si al intentar citar a un colindante para la remedición notarial de un inmueble se constata que este falleció y no hay declaratoria de herederos inscrita:",
    "options": [
      {
        "key": "A",
        "text": "Deberá citarse a sus herederos presuntos o conocidos en el inmueble colindante, o en su defecto promoverse la declaratoria de curador de la herencia yacente para salvaguardar el derecho de defensa de la colindancia."
      },
      {
        "key": "B",
        "text": "El notario puede omitir la citación y medir el terreno sin avisarle a nadie."
      },
      {
        "key": "C",
        "text": "Se anexa el terreno del vecino muerto al inmueble a remedir de forma automática."
      },
      {
        "key": "D",
        "text": "El perito topógrafo decide unilateralmente derribar la casa del colindante fallecido."
      }
    ],
    "correctKey": "A",
    "explanation": "El derecho de audiencia del colindante (Art. 15 LENJVOD y Art. 11 Cn.) es una garantía de orden público. Si el colindante falleció, debe citarse a quienes ejerzan la posesión o a sus sucesores legítimos; la omisión maliciosa o negligente de la citación acarrea la nulidad insubsanable de la remedición.",
    "csjPrecedent": "Sala de lo Civil CSJ: Medir un inmueble sin garantizar la citación válida de la sucesión del colindante fallecido vicia las diligencias de nulidad absoluta por indefensión."
  },
  {
    "id": "not-62",
    "category": "lenjvod",
    "topic": "Intervención de la Procuraduría General de la República (PGR)",
    "legalBasis": "Art. 19 LENJVOD y Ley Orgánica de la PGR",
    "statement": "En las diligencias notariales de aceptación de herencia, si entre los asignatarios presuntos existen menores de edad o incapaces:",
    "options": [
      {
        "key": "A",
        "text": "El notario puede desheredar a los menores de edad para acelerar el trámite."
      },
      {
        "key": "B",
        "text": "El notario debe dar audiencia y notificar formalmente al Procurador General de la República o a su auxiliar designado para que represente y tutele los derechos de los menores."
      },
      {
        "key": "C",
        "text": "Se declara caducada la herencia en beneficio del Fondo Social para la Vivienda."
      },
      {
        "key": "D",
        "text": "Los menores de edad quedan obligados a comparecer y firmar en la oficina notarial sin apoderado."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 19 LENJVOD y la Ley de la PGR imponen la intervención preceptiva del Ministerio Público (Procuraduría) cuando en las diligencias de sucesión o voluntarias figuren menores de edad, incapaces o ausentes, garantizando que no se lesionen sus legítimas ni sus derechos sucesorios.",
    "csjPrecedent": "Sala de lo Civil CSJ: La falta de citación o audiencia al Procurador General de la República mediando intereses de menores acarrea la nulidad de pleno derecho de las diligencias de sucesión."
  },
  {
    "id": "not-63",
    "category": "lenjvod",
    "topic": "Diligencias de Mensura y Título en Copropiedad",
    "legalBasis": "Art. 15 LENJVOD",
    "statement": "Si un inmueble pertenece proindiviso a varios copropietarios y solo uno de ellos desea promover la remedición notarial de la totalidad del predio:",
    "options": [
      {
        "key": "A",
        "text": "El copropietario que pague al perito topógrafo se convierte en dueño exclusivo."
      },
      {
        "key": "B",
        "text": "Cualquier copropietario minoritario puede remedir y adjudicarse el 100% de la tierra."
      },
      {
        "key": "C",
        "text": "Deben comparecer o autorizar expresamente todos los copropietarios unánimemente, o en su defecto conferir poder especial al promotor; uno solo de los comuneros no puede remedir unilateralmente la masa común sin mandato."
      },
      {
        "key": "D",
        "text": "La copropiedad se extingue automáticamente al clavar el primer jalón de agrimensura."
      }
    ],
    "correctKey": "C",
    "explanation": "El régimen de copropiedad y la LENJVOD exigen la concurrencia de la totalidad de los condueños para actos de disposición o delimitación perimetral de la cosa común indivisa, a fin de evitar que un comunero altere las dimensiones registradas en perjuicio de los demás cotitulares.",
    "csjPrecedent": "Sala de lo Civil CSJ: La solicitud de remedición de un inmueble en proindivisión promovida por un solo copropietario sin representación de los demás adolece de defecto insubsanable de legitimación activa."
  },
  {
    "id": "not-64",
    "category": "lenjvod",
    "topic": "Suspensión Inmediata ante Demanda Judicial Contenciosa Previa",
    "legalBasis": "Art. 2 LENJVOD",
    "statement": "Si un notario inicia diligencias de herencia y al día siguiente es notificado de que existe un juicio contencioso previo sobre la misma herencia en el Juzgado de Primera Instancia:",
    "options": [
      {
        "key": "A",
        "text": "Se condena al juez de primera instancia a pagar daños y perjuicios al notario."
      },
      {
        "key": "B",
        "text": "Debe acelerar las publicaciones de edictos para dictar la declaratoria antes que el juez."
      },
      {
        "key": "C",
        "text": "El notario puede anular la demanda del juzgado mediante acta notarial privada."
      },
      {
        "key": "D",
        "text": "Debe abstenerse de inmediato de continuar las diligencias notariales y remitir el expediente original al juzgado para que se acumule a la causa contenciosa."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 2 LENJVOD y el principio de prejudicialidad jurisdiccional ordenan el cese inmediato de la función notarial cuando existe litigio o controversia radicada en el juzgado ordinario, prevaleciendo con exclusividad la autoridad de los jueces naturales de la República.",
    "csjPrecedent": "Corte Plena CSJ: La tramitación paralela notarial de asuntos sometidos a controversia judicial contenciosa constituye falta gravísima contra la administración de justicia."
  },
  {
    "id": "not-65",
    "category": "lenjvod",
    "topic": "Comprobación del Estado Familiar en Diligencias Notariales",
    "legalBasis": "Arts. 18 y 19 LENJVOD y Ley del Registro del Estado Familiar",
    "statement": "¿Mediante qué medios probatorios legales debe el notario comprobar inexcusablemente el parentesco y la vocación sucesoria de los solicitantes en una herencia intestada?",
    "options": [
      {
        "key": "A",
        "text": "Mediante cartas informales firmadas por vecinos de la colonia."
      },
      {
        "key": "B",
        "text": "Únicamente mediante las certificaciones de partidas de nacimiento, defunción y matrimonio originales expedidas por los Registradores del Estado Familiar de las municipalidades respectivas."
      },
      {
        "key": "C",
        "text": "Por fotografías familiares donde los comparecientes salgan abrazados con el difunto."
      },
      {
        "key": "D",
        "text": "Basta con una promesa verbal sin necesidad de aportar ningún documento."
      }
    ],
    "correctKey": "B",
    "explanation": "Conforme a la Ley del Registro del Estado Familiar y la LENJVOD, el estado familiar de hijo, cónyuge o padre solo se acredita fehacientemente en juicio y ante notario mediante las partidas de registro del estado civil debidamente asentadas y legalmente certificadas.",
    "csjPrecedent": "Sala de lo Civil CSJ: La declaratoria de herederos sustentada en fotocopias simples o sin las partidas de registro del estado familiar correspondientes adolece de nulidad absoluta."
  },
  {
    "id": "not-66",
    "category": "lenjvod",
    "topic": "Inscripción de la Declaratoria en el Registro de la Propiedad",
    "legalBasis": "Art. 21 LENJVOD y Art. 680 Código Civil",
    "statement": "¿Qué efecto jurídico produce la inscripción del testimonio de la protocolización de la declaratoria de herederos en el Registro de la Propiedad Raíz e Hipotecas del CNR?",
    "options": [
      {
        "key": "A",
        "text": "Convierte los inmuebles urbanos en terrenos de dominio público militar."
      },
      {
        "key": "B",
        "text": "Cancela todas las hipotecas que gravaban los inmuebles sin necesidad de pagarlas."
      },
      {
        "key": "C",
        "text": "Transfiere registralmente la propiedad de los bienes inmuebles del causante a favor de los herederos declarados, confiriéndoles tracto sucesivo para poder disponer legalmente de ellos frente a terceros."
      },
      {
        "key": "D",
        "text": "Exonera a los herederos de pagar el impuesto de transferencia de por vida."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 21 LENJVOD y Art. 680 C.C. establecen que la inscripción de la declaratoria definitiva confiere legitimación registral y tracto sucesivo formal a los herederos, permitiéndoles otorgar ventas, hipotecas o particiones sobre los inmuebles relictos.",
    "csjPrecedent": "Sala de lo Civil CSJ: Sin la previa inscripción del testimonio de la declaratoria de herederos en el CNR, los herederos carecen de tracto registral para hacer tradición válida de los inmuebles hereditarios."
  },
  {
    "id": "not-67",
    "category": "lenjvod",
    "topic": "Diligencias Notariales de Notificación de Revocación de Poder",
    "legalBasis": "Art. 24 LENJVOD y Art. 1923 Código Civil",
    "statement": "Cuando un poderdante otorga escritura de revocatoria de un poder general judicial o administrativo y requiere al notario para notificar al ex apoderado:",
    "options": [
      {
        "key": "A",
        "text": "El notario practica la notificación personal al mandatario revocado mediante acta notarial, haciéndole saber que ha cesado en sus facultades para que no siga actuando a nombre del poderdante."
      },
      {
        "key": "B",
        "text": "El notario debe decomisar el teléfono celular del apoderado por la fuerza pública."
      },
      {
        "key": "C",
        "text": "La revocación solo surte efectos si el apoderado revocado la acepta con entusiasmo."
      },
      {
        "key": "D",
        "text": "El ex apoderado adquiere la titularidad de los bienes del poderdante en compensación."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 24 LENJVOD en relación con el Art. 1923 C.C. permite notificar por acta notarial la revocación del mandato. La notificación hace oponible la cesación de facultades al mandatario y a terceros de buena fe, impidiendo actos de extralimitación jurídica.",
    "csjPrecedent": "Sala de lo Civil CSJ: Los actos celebrados por el apoderado con posterioridad a la notificación notarial de la revocación del mandato son nulos e inoponibles al poderdante."
  },
  {
    "id": "not-68",
    "category": "lenjvod",
    "topic": "Cobro de Honorarios en Diligencias de Jurisdicción Voluntaria",
    "legalBasis": "Art. 67 Ley de Notariado y Arancel Judicial",
    "statement": "¿Cómo se determinan los honorarios profesionales del notario en la tramitación de diligencias de jurisdicción voluntaria (LENJVOD)?",
    "options": [
      {
        "key": "A",
        "text": "Las diligencias de jurisdicción voluntaria son obligatoriamente gratuitas y el notario no puede cobrar nada."
      },
      {
        "key": "B",
        "text": "El Estado fija un salario mensual forzoso de cincuenta dólares para todos los notarios del país."
      },
      {
        "key": "C",
        "text": "El notario está legalmente obligado a cobrar el 90% del valor total de la herencia."
      },
      {
        "key": "D",
        "text": "Por libre contratación y pacto expreso entre el notario y el interesado, pudiendo aplicarse supletoriamente las tarifas del Arancel Judicial en defecto de convención escrita."
      }
    ],
    "correctKey": "D",
    "explanation": "En el ejercicio notarial libre rige la libertad de contratación de honorarios profesionales. En defecto de pacto expreso escrito entre cliente y notario, se aplican las reglas supletorias tasadas en la Ley de Arancel Judicial salvadoreña.",
    "csjPrecedent": "Corte Plena CSJ: La fijación de honorarios notariales se rige por la libre convención, prohibiéndose cobros abusivos o retención indebida de testimonios e hijuelas por honorarios no liquidados."
  },
  {
    "id": "not-69",
    "category": "lenjvod",
    "topic": "Adición de Nombre o Supresión de Apellido de Casada",
    "legalBasis": "Art. 23 LENJVOD y Ley del Nombre de la Persona Natural",
    "statement": "Si una mujer divorciada desea formalizar la supresión de su apellido de casada para usar exclusivamente sus apellidos de soltera:",
    "options": [
      {
        "key": "A",
        "text": "Está legalmente obligada a conservar el apellido de su ex cónyuge hasta la muerte."
      },
      {
        "key": "B",
        "text": "Debe solicitar un decreto legislativo aprobado con mayoría calificada en la Asamblea."
      },
      {
        "key": "C",
        "text": "Puede comparecer ante notario en escritura pública o acta notarial de conformidad con la Ley del Nombre y LENJVOD para marginar su partida de nacimiento en el Registro del Estado Familiar."
      },
      {
        "key": "D",
        "text": "Debe pagar una multa de diez mil dólares al tribunal de familia."
      }
    ],
    "correctKey": "C",
    "explanation": "La Ley del Nombre de la Persona Natural y la LENJVOD permiten a la mujer divorciada formalizar en sede notarial el cese de uso del apellido de casada, librándose la providencia correspondiente para su marginación en el asiento registral familiar.",
    "csjPrecedent": "Sala de lo Civil CSJ: La mujer tiene derecho inalienable a la restitución de sus apellidos originarios tras la disolución del vínculo matrimonial, operando la vía notarial de forma expedita."
  },
  {
    "id": "not-70",
    "category": "lenjvod",
    "topic": "Nulidad Absoluta de la Remedición sin Citación de Colindantes",
    "legalBasis": "Art. 15 LENJVOD y Art. 1552 Código Civil",
    "statement": "¿Qué sanción legal acarrea una escritura de protocolización de remedición inscrita en el CNR si se demuestra judicialmente que uno de los colindantes nunca fue citado ni notificado de la mensura?",
    "options": [
      {
        "key": "A",
        "text": "Nulidad absoluta e insubsanable de las diligencias y de la inscripción registral, ordenándose la cancelación de la matrícula por haberse vulnerado el derecho de audiencia y defensa."
      },
      {
        "key": "B",
        "text": "Mera irregularidad formal que se subsana pagándole un refresco al colindante omitido."
      },
      {
        "key": "C",
        "text": "El colindante pierde su derecho y debe desalojar su propiedad inmediatamente."
      },
      {
        "key": "D",
        "text": "Se declara válido el acto porque el plano ya tenía sello del catastro."
      }
    ],
    "correctKey": "A",
    "explanation": "La jurisprudencia uniforme de la Sala de lo Civil CSJ ha reiterado que la falta de citación formal de cualquiera de los colindantes en la remedición de inmuebles quebranta una solemnidad esencial de validez (Art. 15 LENJVOD y Art. 11 Cn.), engendrando la nulidad absoluta del instrumento y la cancelación registral.",
    "csjPrecedent": "Sala de lo Civil CSJ Ref. 84-CAC-2016: La omisión de citación al colindante constituye vicio insubsanable de nulidad absoluta que acarrea la cancelación del asiento de la remedición en el Registro de la Propiedad."
  },
  {
    "id": "not-71",
    "category": "lenjvod",
    "topic": "Certificación Notarial de Personería Jurídica",
    "legalBasis": "Art. 30 Ley de Notariado",
    "statement": "Al autorizar un acto donde comparece el representante legal de una sociedad anónima o corporación, ¿qué deber impone la ley notarial salvadoreña?",
    "options": [
      {
        "key": "A",
        "text": "El notario debe dar fe de haber tenido a la vista los documentos auténticos que legitiman la personería del compareciente (escritura de constitución, estatutos, credencial inscrita en el CNR o poder con cláusula suficiente), relacionándolos fielmente en el texto."
      },
      {
        "key": "B",
        "text": "Basta con que el compareciente afirme verbalmente ser el dueño de la empresa."
      },
      {
        "key": "C",
        "text": "El notario no tiene obligación de revisar escrituras si el otorgante viste traje formal."
      },
      {
        "key": "D",
        "text": "Debe solicitar autorización previa al presidente del Banco Central de Reserva."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 30 LN y Art. 32 Ord. 5° LN exigen dar fe de la legitimación de la personería con que actúa el compareciente, debiendo el notario examinar y relacionar minuciosamente los títulos de representación vigentes e inscritos en el Registro de Comercio.",
    "csjPrecedent": "Sala de lo Civil CSJ: La omisión de relacionar fehacientemente los documentos habilitantes de la personería jurídica vicia el acto por defecto de representación sustantiva."
  },
  {
    "id": "not-72",
    "category": "lenjvod",
    "topic": "Oposición sin Fundamento y Mala Fe en Jurisdicción Voluntaria",
    "legalBasis": "Art. 2 LENJVOD y Art. 13 CPCM",
    "statement": "Si durante una diligencia notarial de remedición un vecino formula oposición verbal maliciosa sin presentar ningún título de dominio ni alegar agravio fáctico:",
    "options": [
      {
        "key": "A",
        "text": "El notario puede encarcelar al vecino de inmediato por oponerse a su autoridad."
      },
      {
        "key": "B",
        "text": "El notario debe suspender las diligencias y remitir el expediente al juez de primera instancia, siendo el juzgador judicial quien determine la legitimidad de la oposición y condene en costas por temeridad si procede."
      },
      {
        "key": "C",
        "text": "El notario puede ignorar la ley y continuar midiendo a la fuerza con seguridad privada."
      },
      {
        "key": "D",
        "text": "El notario cobra una multa de un millón de colones al opositor."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 2 inc. 2° LENJVOD no otorga al notario potestad jurisdiccional para juzgar o desestimar de plano la oposición por infundada. La sola interposición de oposición legítima de parte interesada activa el cese forzoso y traslada la potestad decisoria al juez de primera instancia.",
    "csjPrecedent": "Corte Plena CSJ: La valoración de la procedencia de una oposición no corresponde al notario; calificarla de infundada para continuar las diligencias acarrea usurpación de funciones judiciales."
  },
  {
    "id": "not-73",
    "category": "lenjvod",
    "topic": "Identificación de Inmuebles en Diligencias de Jurisdicción Voluntaria",
    "legalBasis": "Art. 15 LENJVOD y Art. 32 numeral 7° Ley de Notariado",
    "statement": "¿Cómo debe describirse el inmueble objeto de diligencias de remedición o título supletorio en las actas y resoluciones notariales?",
    "options": [
      {
        "key": "A",
        "text": "Solo se requiere poner el precio estimado en dólares del inmueble."
      },
      {
        "key": "B",
        "text": "Basta con decir que el terreno está ubicado 'cerca de un árbol de mango y un río'."
      },
      {
        "key": "C",
        "text": "Con indicación exacta de su situación geográfica, naturaleza rústica o urbana, municipio y departamento, matrícula registral, linderos específicos con sus medidas y rumbos, y colindantes actuales."
      },
      {
        "key": "D",
        "text": "No se requiere describir el terreno si el perito tiene un croquis en su teléfono móvil."
      }
    ],
    "correctKey": "C",
    "explanation": "La certeza territorial inmobiliaria exige que todo instrumento notarial describa minuciosamente el predio por su situación, naturaleza, rumbos, distancias y colindantes (Art. 32 Ord. 7° LN), evitando superposiciones o indeterminaciones registrales.",
    "csjPrecedent": "Criterio Registral CNR y Sala de lo Civil CSJ: La descripción imprecisa o contradictoria de los linderos en diligencias voluntarias impide la inscripción registral en el Registro de la Propiedad."
  },
  {
    "id": "not-74",
    "category": "lenjvod",
    "topic": "Diligencias de Apertura de Testamento Cerrado ante Notario",
    "legalBasis": "Art. 1017 Código Civil y Art. 17 LENJVOD",
    "statement": "¿Puede un notario salvadoreño proceder por sí mismo a abrir la cubierta lacrada de un testamento cerrado sin intervención del Juez de Primera Instancia?",
    "options": [
      {
        "key": "A",
        "text": "Solo si el testamento fue otorgado en noche de luna llena."
      },
      {
        "key": "B",
        "text": "Sí, cualquier notario puede cortar el sobre con tijeras en su despacho privado."
      },
      {
        "key": "C",
        "text": "Sí, siempre que los herederos firmen una carta de exoneración de culpa."
      },
      {
        "key": "D",
        "text": "No, la apertura y protocolización del testamento cerrado es un acto reservado a la sede judicial conforme a las solemnidades del Código Civil y CPCM, con comparecencia de los testigos que firmaron la carátula."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 1017 C.C. y la normativa procesal disponen que la apertura del testamento cerrado requiere trámite judicial ante el Juez de Primera Instancia civil, quien convoca a los cinco testigos de la carátula para reconocer sus firmas y la integridad de los sellos antes de abrir el pliego.",
    "csjPrecedent": "Sala de lo Civil CSJ: La apertura extrajudicial privada de un testamento cerrado por notario constituye quebrantamiento de formalidades esenciales sancionado con nulidad insubsanable de la disposición."
  },
  {
    "id": "not-75",
    "category": "lenjvod",
    "topic": "Revisión de Oficio de Diligencias de Jurisdicción Voluntaria por la CSJ",
    "legalBasis": "Art. 62 Ley de Notariado y Art. 25 LENJVOD",
    "statement": "Cuando la Sección de Notariado de la CSJ revisa los expedientes fenecidos de aceptación de herencia o remedición depositados por el notario:",
    "options": [
      {
        "key": "A",
        "text": "Se limita a poner un sello decorativo sin leer el contenido de las actuaciones."
      },
      {
        "key": "B",
        "text": "Fiscaliza el cumplimiento estricto de las publicaciones de edictos, citaciones de colindantes, partidas y solvencias, pudiendo abrir informativo disciplinario si constata omisiones graves."
      },
      {
        "key": "C",
        "text": "Quema los expedientes para liberar espacio en los estantes del sótano judicial."
      },
      {
        "key": "D",
        "text": "Regala los terrenos remedidos a los empleados del tribunal."
      }
    ],
    "correctKey": "B",
    "explanation": "La Sección de Notariado ejerce el control técnico y disciplinario permanente sobre la fe pública delegada, verificando que las diligencias de jurisdicción voluntaria cumplan cabalmente las formalidades legales bajo pena de reparos disciplinarios.",
    "csjPrecedent": "Corte Plena CSJ: La fiscalización de expedientes de jurisdicción voluntaria por la Sección de Notariado tutela la legalidad del tráfico inmobiliario y la fe pública de la República."
  },
  {
    "id": "not-76",
    "category": "lenjvod",
    "topic": "Diligencias de Consignación Notarial de Pagos",
    "legalBasis": "Art. 1461 Código Civil y LENJVOD",
    "statement": "Si un deudor pretende pagar el saldo de su obligación y el acreedor se rehúsa injustificadamente a recibir el dinero y extender finiquito:",
    "options": [
      {
        "key": "A",
        "text": "El notario debe decomisar la vivienda del acreedor y entregársela al deudor."
      },
      {
        "key": "B",
        "text": "El deudor puede quedarse con el dinero y dar por extinguida la deuda de inmediato."
      },
      {
        "key": "C",
        "text": "El deudor puede requerir al notario para que practique oferta formal de pago al acreedor mediante acta notarial, sirviendo de base previa para la consignación judicial en caso de renuencia."
      },
      {
        "key": "D",
        "text": "La deuda se triplica en perjuicio del deudor por haber intentado pagar."
      }
    ],
    "correctKey": "C",
    "explanation": "El ofrecimiento notarial de pago por acta formal (Art. 1461 C.C.) deja constancia fehaciente de la voluntad de cumplimiento del deudor y de la negativa injustificada del acreedor, enervando los efectos de la mora y abriendo la vía de pago por consignación.",
    "csjPrecedent": "Sala de lo Civil CSJ: La oferta formal notarial de pago enerva los intereses moratorios y acredita la renuencia ilegítima del acreedor en el proceso judicial posterior."
  },
  {
    "id": "not-77",
    "category": "lenjvod",
    "topic": "Prohibición de Jurisdicción Voluntaria en Asuntos de Adopción",
    "legalBasis": "Ley Crecer Juntos y Código de Familia",
    "statement": "¿Pueden tramitarse diligencias de adopción de menores de edad ante notario salvadoreño bajo la LENJVOD?",
    "options": [
      {
        "key": "A",
        "text": "No, la adopción de niñas, niños y adolescentes es una materia estrictamente judicial y de orden público reservada a los Juzgados de Familia especializados, rigiéndose por la Ley Crecer Juntos."
      },
      {
        "key": "B",
        "text": "Sí, los notarios pueden formalizar adopciones mediante una simple acta notarial privada."
      },
      {
        "key": "C",
        "text": "Sí, siempre que los padres biológicos firmen una renuncia en papel simple."
      },
      {
        "key": "D",
        "text": "Solo si el adoptante paga una fianza bancaria a favor del notario autorizante."
      }
    ],
    "correctKey": "A",
    "explanation": "El derecho de la niñez y adolescencia (Ley Crecer Juntos y Código de Familia) reserva de forma absoluta y privativa la adopción a la sede jurisdiccional de los tribunales de familia con intervención de la Procuraduría General y OPA, prohibiendo cualquier trámite notarial directo.",
    "csjPrecedent": "Sala de lo Constitucional y Sala de lo Civil CSJ: La adopción ante notario es inexistente y nula de pleno derecho, constituyendo grave vulneración al interés superior de la niñez."
  },
  {
    "id": "not-78",
    "category": "lenjvod",
    "topic": "Testimonio de Aceptación de Herencia para Traspaso de Vehículos",
    "legalBasis": "Art. 21 LENJVOD y Ley de Transporte Terrestre",
    "statement": "Para traspasar la matrícula y tarjeta de circulación de vehículos automotores que pertenecían al causante a nombre de los herederos en el Registro de Tránsito (SERTRACEN):",
    "options": [
      {
        "key": "A",
        "text": "Los vehículos del causante se desguazan de forma obligatoria por la policía."
      },
      {
        "key": "B",
        "text": "Basta con encender el motor del vehículo con la llave original en la ventanilla de SERTRACEN."
      },
      {
        "key": "C",
        "text": "Se requiere una carta firmada por un diputado de la Asamblea Legislativa."
      },
      {
        "key": "D",
        "text": "Debe presentarse el testimonio de la protocolización de la declaratoria definitiva de herederos debidamente legalizado por el notario, acreditando la titularidad sucesoria sobre el parque vehicular."
      }
    ],
    "correctKey": "D",
    "explanation": "El testimonio de la resolución definitiva de herederos protocolizada en el libro de protocolo es el título formal que acredita el traspaso de dominio por causa de muerte sobre bienes muebles e inmuebles registrables ante el Registro de Tránsito de SERTRACEN.",
    "csjPrecedent": "Criterio SERTRACEN y Sala de lo Civil CSJ: La transmisión del dominio de vehículos automotores mortis causa exige la presentación del testimonio notarial de herencia debidamente protocolizado."
  },
  {
    "id": "not-79",
    "category": "lenjvod",
    "topic": "Garantía de Audiencia a Terceros con Igual o Mejor Derecho",
    "legalBasis": "Art. 19 LENJVOD y Art. 11 Constitución",
    "statement": "Si durante el plazo de los edictos se presenta al despacho notarial un hijo del causante que no fue incluido en la solicitud inicial presentando su partida de nacimiento original:",
    "options": [
      {
        "key": "A",
        "text": "Debe destruir la partida de nacimiento del nuevo hijo para no retrasar el trámite."
      },
      {
        "key": "B",
        "text": "El notario debe expulsarlo de su oficina y amenazarlo con llamar a la policía."
      },
      {
        "key": "C",
        "text": "El notario debe admitir su comparecencia, incorporarlo a las diligencias con igual derecho si no hay oposición, o suspender y remitir al juzgado de primera instancia si surge contención."
      },
      {
        "key": "D",
        "text": "Debe cobrarle el triple de honorarios para dejarlo participar en la herencia."
      }
    ],
    "correctKey": "C",
    "explanation": "El objeto medular de los edictos de ley es permitir que comparezcan terceros con igual o mejor derecho sucesorio (Art. 19 LENJVOD). El notario debe garantizar el principio de igualdad y audiencia; excluir maliciosamente a un coheredero acreditado genera nulidad absoluta de la declaratoria.",
    "csjPrecedent": "Sala de lo Civil CSJ: La declaratoria de herederos pronunciada preteriendo con dolo o negligencia a un asignatario forzoso conocido acarrea la nulidad de la resolución y acción de petición de herencia."
  },
  {
    "id": "not-80",
    "category": "lenjvod",
    "topic": "Conclusión Formal de las Diligencias de Jurisdicción Voluntaria",
    "legalBasis": "Art. 25 LENJVOD",
    "statement": "¿Cuál es el acto formal que cierra definitivamente la competencia del notario en un expediente de jurisdicción voluntaria fenecido?",
    "options": [
      {
        "key": "A",
        "text": "La expedición de los testimonios correspondientes a los interesados y la razón de remisión y entrega formal del expediente original a la Sección de Notariado de la CSJ."
      },
      {
        "key": "B",
        "text": "El cobro del último cheque de honorarios en la agencia bancaria."
      },
      {
        "key": "C",
        "text": "La celebración de una fiesta en el despacho notarial con música en vivo."
      },
      {
        "key": "D",
        "text": "La publicación de un mensaje en redes sociales declarando concluido el trámite."
      }
    ],
    "correctKey": "A",
    "explanation": "La función notarial en jurisdicción voluntaria culmina con la expedición del testimonio de ley que dota de título ejecutorio e inscribible a las partes y la entrega formal del legajo de actuaciones originales a la Sección de Notariado de la CSJ para su archivo perpetuo.",
    "csjPrecedent": "Sección de Notariado CSJ: Las diligencias notariales solo se tienen por legalmente concluidas cuando constan archivadas en la Sección de Notariado con su correspondiente informe de revisión final."
  },
  {
    "id": "not-81",
    "category": "sucesiones",
    "topic": "Otorgamiento de Testamento Abierto y Solemnidades",
    "legalBasis": "Art. 40 y sigs. Ley de Notariado y Art. 1009 Código Civil",
    "statement": "En el otorgamiento de un testamento solemne abierto ante notario salvadoreño, ¿cuántos testigos idóneos exige la ley para la validez del acto?",
    "options": [
      {
        "key": "A",
        "text": "Tres testigos idóneos que sepan leer y escribir, y que no tengan inhabilidad legal ni parentesco prohibido con el testador o el notario."
      },
      {
        "key": "B",
        "text": "Dos testigos instrumentales de cualquier parentesco."
      },
      {
        "key": "C",
        "text": "Cinco testigos si el testamento se otorga de noche."
      },
      {
        "key": "D",
        "text": "No se requieren testigos si el testador sabe firmar y presenta su DUI."
      }
    ],
    "correctKey": "A",
    "explanation": "El testamento solemne abierto en El Salvador exige la presencia ininterrumpida de tres testigos idóneos que reúnan los requisitos legales del Código Civil y Ley de Notariado, leyéndose en voz alta por el notario en un solo acto sin interrupción.",
    "csjPrecedent": "Sentencia Sala de lo Civil CSJ Ref. 184-CAC-2018: la interrupción temporal de los testigos durante la lectura del testamento vicia de nulidad absoluta el instrumento por quebranto de la unidad de acto."
  },
  {
    "id": "not-82",
    "category": "sucesiones",
    "topic": "Testamento Otorgado por Persona Ciega (Solemnidad Especial)",
    "legalBasis": "Art. 1010 Código Civil",
    "statement": "Al otorgar testamento abierto una persona ciega en El Salvador, ¿cuál es el requisito formal extraordinario que exige la ley civil bajo pena de nulidad insubsanable?",
    "options": [
      {
        "key": "A",
        "text": "Que comparezca obligatoriamente un médico oftalmólogo como perito."
      },
      {
        "key": "B",
        "text": "El testamento deberá ser leído dos veces en voz alta: la primera por el notario y la segunda por el testigo que el testador elija libremente."
      },
      {
        "key": "C",
        "text": "Que se grabe en video digital ante dos agentes fiscales."
      },
      {
        "key": "D",
        "text": "Solo puede otorgarse mediante testamento cerrado ante 5 testigos."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 1010 del Código Civil exige para el testamento del ciego una doble lectura íntegra en voz alta: primero por el notario y la segunda por el testigo designado por el testador, debiéndose dejar constancia expresa en el instrumento de haberse cumplido dicha formalidad.",
    "csjPrecedent": "Sala de lo Civil CSJ Ref. 94-CAC-2015: la omisión de la doble lectura en el testamento del invidente causa la nulidad absoluta ipso jure del testamento."
  },
  {
    "id": "not-83",
    "category": "sucesiones",
    "topic": "Testamento Solemne Cerrado y Formalidades de la Cubierta",
    "legalBasis": "Arts. 1015, 1016 y 1017 Código Civil",
    "statement": "En el otorgamiento de un testamento solemne cerrado ante notario en El Salvador, ¿cuántos testigos idóneos exige la ley para la validez del acto y qué personas están expresamente impedidas de otorgarlo?",
    "options": [
      {
        "key": "A",
        "text": "Se otorga ante dos testigos y un perito calígrafo de la Policía Técnica."
      },
      {
        "key": "B",
        "text": "Se otorga ante tres testigos idóneos y cualquier persona capaz puede otorgarlo sin excepción."
      },
      {
        "key": "C",
        "text": "Debe otorgarse ante el notario y cinco testigos idóneos, no pudiendo otorgar testamento cerrado quien no sepa leer y escribir (analfabeto)."
      },
      {
        "key": "D",
        "text": "Exige siete testigos si el testador es extranjero o no posee bienes raíces."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 1015 del Código Civil dispone que el testamento cerrado se otorgará ante un notario y cinco testigos. Conforme al Art. 1016 C.C., el que no sepa leer y escribir no puede otorgar testamento cerrado, debiendo en la cubierta extenderse el acta notarial suscrita por el testador, los cinco testigos y el notario.",
    "csjPrecedent": "Sala de lo Civil CSJ: El quebranto del número de cinco testigos o el otorgamiento de testamento cerrado por persona que no sabe leer y escribir genera la nulidad absoluta insanable de la disposición testamentaria."
  },
  {
    "id": "not-84",
    "category": "sucesiones",
    "topic": "Delación y Apertura de la Sucesión",
    "legalBasis": "Art. 956 Código Civil",
    "statement": "¿En qué momento procesal exacto se abre la sucesión hereditaria y se produce la delación de las asignaciones conforme al Código Civil?",
    "options": [
      {
        "key": "A",
        "text": "Únicamente cuando el notario entrega el testimonio de la hijuela inscrita."
      },
      {
        "key": "B",
        "text": "Cuando los herederos publican el primer edicto en el Diario Oficial."
      },
      {
        "key": "C",
        "text": "Cinco años después del sepelio en el cementerio."
      },
      {
        "key": "D",
        "text": "En el instante mismo de la muerte natural del causante, abriéndose en su último domicilio, momento en el cual la ley hace el llamamiento a los herederos para aceptar o repudiar."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 956 C.C. consagra que la sucesión de una persona se abre al momento de su muerte en su último domicilio. La delación de una asignación es el actual llamamiento de la ley a aceptarla o repudiarla, operando ipso jure al fallecimiento del causante.",
    "csjPrecedent": "Sala de lo Civil CSJ: La determinación exacta del momento de la delación es esencial para calificar la capacidad y dignidad de los asignatarios al momento de abrirse la sucesión."
  },
  {
    "id": "not-85",
    "category": "sucesiones",
    "topic": "Causales Taxativas de Indignidad Sucesoria",
    "legalBasis": "Art. 969 Código Civil",
    "statement": "Conforme al Artículo 969 del Código Civil, ¿cuál de las siguientes personas queda privada legalmente de heredar por causa de indignidad?",
    "options": [
      {
        "key": "A",
        "text": "El hijo que contrajo matrimonio religioso sin pedir permiso a sus padres."
      },
      {
        "key": "B",
        "text": "El que ha cometido el crimen de homicidio en la persona del difunto, o ha intervenido en este crimen por obra o consejo, o la dejó perecer pudiendo salvarla."
      },
      {
        "key": "C",
        "text": "Cualquier pariente que profese una religión distinta a la del causante."
      },
      {
        "key": "D",
        "text": "El heredero que no asista al funeral por encontrarse trabajando fuera del país."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 969 C.C. enumera las causas de indignidad para suceder: el homicidio o auxilio en la muerte del causante, el atentado grave contra la vida o bienes del testador o sus parientes cercanos, y la falta de auxilio en estado de demencia o desamparo.",
    "csjPrecedent": "Sala de lo Civil CSJ: La indignidad requiere declaratoria judicial contradictoria, privando al asignatario indigno de la delación de los bienes de la sucesión."
  },
  {
    "id": "not-86",
    "category": "sucesiones",
    "topic": "Purga de la Indignidad por Posesión Hereditaria",
    "legalBasis": "Art. 977 Código Civil",
    "statement": "Si un asignatario incurso en causal de indignidad entra en posesión de los bienes hereditarios y no se promueve demanda en su contra:",
    "options": [
      {
        "key": "A",
        "text": "El indigno pierde la vida mediante orden de confiscación inmediata."
      },
      {
        "key": "B",
        "text": "La indignidad es eterna y pasa a sus descendientes hasta la décima generación."
      },
      {
        "key": "C",
        "text": "La indignidad se purga y extingue por la posesión legal de la herencia durante diez años."
      },
      {
        "key": "D",
        "text": "La indignidad se perdona pagando una fianza al juez de paz."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 977 C.C. establece que la indignidad se purga en diez años de posesión de la herencia o legado, consolidándose el dominio y operando la prescripción de la acción de los demás coherederos.",
    "csjPrecedent": "Sala de lo Civil CSJ: Transcurridos diez años de posesión ininterrumpida sin sentencia judicial de indignidad, la acción de exclusión caduca por prescripción extintiva de orden civil."
  },
  {
    "id": "not-87",
    "category": "sucesiones",
    "topic": "Derecho de Representación en la Sucesión Intestada",
    "legalBasis": "Art. 984 Código Civil",
    "statement": "En la sucesión intestada, ¿en qué consiste la figura jurídica del derecho de representación regulada por el Artículo 984 del Código Civil?",
    "options": [
      {
        "key": "A",
        "text": "Es una ficción legal en que se supone que una persona tiene el lugar y por consiguiente el grado de parentesco y los derechos hereditarios que tendría su padre o madre, si ésta no quisiere o no pudiere suceder."
      },
      {
        "key": "B",
        "text": "Es el poder judicial que se otorga a un abogado para que cobre los saldos bancarios del causante."
      },
      {
        "key": "C",
        "text": "Es el nombramiento de un albacea para vender los muebles del difunto."
      },
      {
        "key": "D",
        "text": "Es el derecho de los acreedores de embargar los bienes de la viuda."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 984 C.C. instituye la representación como una ficción de la ley en virtud de la cual los descendientes ocupan el lugar de su progenitor premuerto, indigno o repudiante, heredando por estirpes y no por cabezas.",
    "csjPrecedent": "Sala de lo Civil CSJ: En la sucesión intestada salvadoreña, la representación opera exclusivamente en la línea descendiente de los hijos del causante y en la descendencia de los hermanos."
  },
  {
    "id": "not-88",
    "category": "sucesiones",
    "topic": "Derecho de Transmisión Sucesoria",
    "legalBasis": "Art. 958 Código Civil",
    "statement": "¿Qué diferencia estructural existe entre el derecho de transmisión (Art. 958 C.C.) y el derecho de representación (Art. 984 C.C.)?",
    "options": [
      {
        "key": "A",
        "text": "La transmisión requiere fianza bancaria y la representación autorización municipal."
      },
      {
        "key": "B",
        "text": "La transmisión solo aplica a animales domésticos y la representación a personas humanas."
      },
      {
        "key": "C",
        "text": "Son dos nombres exactamente idénticos para la misma regla procesal de notariado."
      },
      {
        "key": "D",
        "text": "En la transmisión, el heredero sobrevive al causante y fallece después de deferida la herencia sin haber alcanzado a aceptar o repudiar, transmitiendo esa facultad a sus propios herederos; en la representación, el asignatario premurió, es incapaz o indigno."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 958 C.C. regula el derecho de transmisión (ius transmissionis): el llamado posmuere sin manifestar voluntad, pasando el ius delationis a sus sucesores universales. En cambio, la representación opera ante la falta anterior del asignatario de primer grado.",
    "csjPrecedent": "Sala de lo Civil CSJ: Para ejercer el derecho de transmisión es condición sine qua non aceptar primero la herencia del transmitente para poder aceptar la herencia del primer causante transmitida."
  },
  {
    "id": "not-89",
    "category": "sucesiones",
    "topic": "Estructura de las Asignaciones Forzosas",
    "legalBasis": "Art. 1192 Código Civil",
    "statement": "Conforme al Artículo 1192 del Código Civil de El Salvador, ¿cuáles son las asignaciones forzosas que el testador está obligado por ley a respetar en su testamento?",
    "options": [
      {
        "key": "A",
        "text": "Los legados dejados a los testigos instrumentales del testamento."
      },
      {
        "key": "B",
        "text": "Las donaciones a favor de corporaciones mercantiles extranjeras."
      },
      {
        "key": "C",
        "text": "Los alimentos que se deben por ley a ciertas personas, las legítimas rigorosas y la cuarta de mejoras."
      },
      {
        "key": "D",
        "text": "El pago de suscripciones periódicas de clubes deportivos."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 1192 C.C. define las asignaciones forzosas como aquellas que el testador está obligado a hacer, y que se suplen cuando no las ha hecho, aun con perjuicio de sus disposiciones testamentarias expresas.",
    "csjPrecedent": "Sala de lo Civil CSJ: La libertad testamentaria en El Salvador no es absoluta; está restringida por el sistema tutelar forzoso de la mitad legitimaria, alimentos legales y cuarta de mejoras."
  },
  {
    "id": "not-90",
    "category": "sucesiones",
    "topic": "Distribución Legal de la Masa Hereditaria",
    "legalBasis": "Arts. 1195 y 1196 Código Civil",
    "statement": "¿Cómo se distribuye cuantitativamente el patrimonio hereditario en el régimen sucesorio salvadoreño cuando existen legitimarios e hijos?",
    "options": [
      {
        "key": "A",
        "text": "El cincuenta por ciento (50%) constituye la mitad legitimaria forzosa, el veinticinco por ciento (25%) la cuarta de mejoras y el veinticinco por ciento (25%) restante la cuarta de libre disposición."
      },
      {
        "key": "B",
        "text": "El cien por ciento es de libre disposición y el testador puede despojar a todos sus hijos sin causa legal."
      },
      {
        "key": "C",
        "text": "Se divide en tres partes iguales del 33.33% sin asignaciones forzosas de ningún tipo."
      },
      {
        "key": "D",
        "text": "El Estado se apropia obligatoriamente del ochenta por ciento en concepto de arancel fiscal."
      }
    ],
    "correctKey": "A",
    "explanation": "El Código Civil salvadoreño divide la masa líquida en cuatro cuartas: dos cuartas (50%) forman la mitad legitimaria para los legitimarios por partes iguales; una cuarta (25%) es para mejorar a uno o varios descendientes; y la última cuarta (25%) es de libre disposición absoluta.",
    "csjPrecedent": "Sala de lo Civil CSJ: Las disposiciones testamentarias que vulneren la mitad legitimaria o la cuarta de mejoras son inoficiosas y quedan sujetas a la acción de reforma de testamento."
  },
  {
    "id": "not-91",
    "category": "sucesiones",
    "topic": "Beneficiarios Legales de la Cuarta de Mejoras",
    "legalBasis": "Art. 1195 Código Civil",
    "statement": "¿A favor de quiénes puede el testador disponer válidamente de la cuarta de mejoras en su testamento?",
    "options": [
      {
        "key": "A",
        "text": "Exclusivamente a favor de uno o más de sus descendientes legítimos o naturales (hijos, nietos o bisnietos), a su libre arbitrio."
      },
      {
        "key": "B",
        "text": "A favor de cualquier amigo particular o institución bancaria privada."
      },
      {
        "key": "C",
        "text": "Únicamente a favor de los empleados de la alcaldía municipal."
      },
      {
        "key": "D",
        "text": "Solo a favor del notario autorizante del testamento abierto."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 1195 C.C. restringe el destino de la cuarta de mejoras: el testador puede elegir libremente distribuir esta porción entre uno o varios descendientes de cualquier grado, con exclusión de extraños o de ascendientes.",
    "csjPrecedent": "Sala de lo Civil CSJ: La asignación de la cuarta de mejoras a favor de personas extrañas que no sean descendientes del testador es nula y acrece a la masa legitimaria forzosa."
  },
  {
    "id": "not-92",
    "category": "sucesiones",
    "topic": "Acción de Reforma de Testamento",
    "legalBasis": "Arts. 1219 y 1220 Código Civil",
    "statement": "Si el testador en su testamento omite a un hijo legitimario o desconoce la porción que por ley le corresponde en la mitad legitimaria:",
    "options": [
      {
        "key": "A",
        "text": "El hijo pierde todo derecho y queda en la indigencia sin recurso legal."
      },
      {
        "key": "B",
        "text": "El legitimario preterido tiene derecho a ejercer la Acción de Reforma de Testamento para que se integre su legítima rigorosa en el plazo de cuatro años."
      },
      {
        "key": "C",
        "text": "El testamento se quema de inmediato por orden de la policía de hacienda."
      },
      {
        "key": "D",
        "text": "El albacea debe comprarle un vehículo al hijo omitido para compensarlo."
      }
    ],
    "correctKey": "B",
    "explanation": "Los Arts. 1219 a 1227 C.C. conceden la acción de reforma de testamento a los legitimarios a quienes el testador no haya dejado lo que por ley les corresponde, disponiendo del plazo de prescripción de cuatro años desde que tuvieron conocimiento del testamento para demandar su restitución.",
    "csjPrecedent": "Sala de lo Civil CSJ: La preterición testamentaria no anula per se todo el testamento, sino que habilita la acción de reforma para reajustar las cuotas a las asignaciones forzosas de ley."
  },
  {
    "id": "not-93",
    "category": "sucesiones",
    "topic": "Desheredamiento y Causales Legales",
    "legalBasis": "Arts. 1207 al 1210 Código Civil",
    "statement": "¿Qué requisitos sustantivos exige el Código Civil para que el desheredamiento de un legitimario sea válido y eficaz?",
    "options": [
      {
        "key": "A",
        "text": "El desheredamiento opera de pleno derecho si el hijo no estudió una carrera universitaria."
      },
      {
        "key": "B",
        "text": "Basta con una carta privada no firmada donde el causante exprese que su hijo es desagradecido."
      },
      {
        "key": "C",
        "text": "Debe constar expresamente en una cláusula testamentaria, fundarse en una causa legal taxativa prevista en el Código Civil y haber sido probada judicialmente en vida del testador o por los interesados tras su muerte."
      },
      {
        "key": "D",
        "text": "Se puede desheredar verbalmente en presencia de dos agentes de seguridad privada."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 1207 C.C. define el desheredamiento como una disposición testamentaria en que se ordena que un legitimario sea privado de todo o parte de su legítima por causas legales expresas (injuria atroz, falta de socorro, violencia), exigiendo prueba judicial de los hechos.",
    "csjPrecedent": "Sala de lo Civil CSJ: El desheredamiento sin expresión de causa legal o sin prueba fáctica acreditada judicialmente es ineficaz y el legitimario conserva su derecho a la legítima forzosa."
  },
  {
    "id": "not-94",
    "category": "sucesiones",
    "topic": "Testamento del Sordo que Sabe Leer y Escribir",
    "legalBasis": "Art. 1011 Código Civil",
    "statement": "Al otorgar testamento abierto una persona sorda que sabe leer y escribir (Art. 1011 C.C.):",
    "options": [
      {
        "key": "A",
        "text": "Solo puede otorgarse mediante poder otorgado a un procurador militar."
      },
      {
        "key": "B",
        "text": "El testamento del sordo está absolutamente prohibido bajo pena de cárcel."
      },
      {
        "key": "C",
        "text": "Debe intervenir un médico especialista en audiología que firme como notario."
      },
      {
        "key": "D",
        "text": "El testador deberá leer él mismo su testamento en voz alta ante el notario y los tres testigos; si no supiere o no pudiere hacerlo, se aplicarán las reglas especiales de intérpretes."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 1011 C.C. establece que si el testador fuere sordo, leerá él mismo su testamento; y si no sabe o no puede leerlo en voz alta, se procederá con auxilio de intérpretes de señas juramentados ante los testigos y el fedatario.",
    "csjPrecedent": "Sala de lo Civil CSJ: Las solemnidades especiales para discapacitados sensoriales garantizan la perfecta formación del consentimiento y su quebranto vicia el testamento de nulidad absoluta."
  },
  {
    "id": "not-95",
    "category": "sucesiones",
    "topic": "Derecho de Acrecer entre Coasignatarios",
    "legalBasis": "Arts. 1123 al 1128 Código Civil",
    "statement": "¿En qué circunstancia opera el derecho de acrecer regulado en el Artículo 1123 del Código Civil?",
    "options": [
      {
        "key": "A",
        "text": "Cuando el patrimonio del causante aumenta por haber ganado la lotería después de muerto."
      },
      {
        "key": "B",
        "text": "Cuando en el testamento se designa a dos o más asignatarios conjuntamente sobre un mismo objeto o cuota sin determinación de partes, y uno de ellos falta por premoriencia, incapacidad o repudio, su porción acrece a la de los otros."
      },
      {
        "key": "C",
        "text": "Cuando el notario decide cobrar honorarios extras a los asignatarios."
      },
      {
        "key": "D",
        "text": "Solo opera en las sucesiones intestadas donde no existen bienes raíces."
      }
    ],
    "correctKey": "B",
    "explanation": "El derecho de acrecer (Art. 1123 C.C.) es la facultad que tiene el coasignatario instituido conjuntamente sobre una misma cosa para incorporar la porción del colegatario o coheredero que faltare sin sustituto, impidiendo que la cuota revierta a la sucesión abintestato.",
    "csjPrecedent": "Sala de lo Civil CSJ: El derecho de acrecer exige la conjunción de asignatarios en una misma disposición testamentaria sin fijación de cuotas materiales independientes."
  },
  {
    "id": "not-96",
    "category": "sucesiones",
    "topic": "Sustitución Vulgar en el Testamento",
    "legalBasis": "Arts. 1133 al 1136 Código Civil",
    "statement": "¿En qué consiste la sustitución vulgar en una disposición testamentaria salvadoreña?",
    "options": [
      {
        "key": "A",
        "text": "En sustituir las escrituras del protocolo por minutas privadas de papel periódico."
      },
      {
        "key": "B",
        "text": "En emplear lenguaje soez y vulgar en la redacción de las cláusulas notariales."
      },
      {
        "key": "C",
        "text": "En nombrar en el testamento a un segundo asignatario para que ocupe el lugar del primer asignatario instituido, en caso de que este último no quiera o no pueda aceptar la herencia o legado."
      },
      {
        "key": "D",
        "text": "En obligar a que el heredero adopte el apellido del notario autorizante."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 1133 C.C. define la sustitución vulgar como el llamamiento subsidiario que hace el testador previendo la eventualidad de que el asignatario inicial falte por muerte previa, incapacidad o repudiación voluntaria.",
    "csjPrecedent": "Sala de lo Civil CSJ: La sustitución vulgar es una legítima manifestación de la autonomía de la voluntad testamentaria que prevalece sobre el derecho de acrecer ordinario."
  },
  {
    "id": "not-97",
    "category": "sucesiones",
    "topic": "Aceptación Expresa vs Aceptación Tácita de Herencia",
    "legalBasis": "Art. 1152 Código Civil",
    "statement": "Conforme al Artículo 1152 del Código Civil, ¿cuándo se configura la aceptación tácita de la herencia por parte de un llamado a suceder?",
    "options": [
      {
        "key": "A",
        "text": "Cuando el heredero ejecuta un acto que supone necesariamente su intención de aceptar y que no hubiere tenido derecho de realizar sino en su calidad de heredero (acto de heredero, como vender un inmueble relicto)."
      },
      {
        "key": "B",
        "text": "Cuando el asignatario guarda absoluto silencio durante veinticuatro horas continuas."
      },
      {
        "key": "C",
        "text": "Cuando el interesado asiste al entierro del difunto con vestimenta de luto."
      },
      {
        "key": "D",
        "text": "Solo cuando presenta una solicitud escrita ante el Ministerio de Relaciones Exteriores."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 1152 C.C. distingue la aceptación expresa (en instrumento público o privado o en diligencias judiciales) de la tácita, que se deduce concluyentemente de actos dispositivos que solo competen al dueño y señor de la herencia (pro herede gestio).",
    "csjPrecedent": "Sala de lo Civil CSJ: Los simples actos de custodia o administración meramente conservatoria de bienes relictos no configuran aceptación tácita de la herencia."
  },
  {
    "id": "not-98",
    "category": "sucesiones",
    "topic": "Repudio Expreso de la Herencia ante Notario",
    "legalBasis": "Arts. 1149 y 1150 Código Civil",
    "statement": "¿Qué formalidad solemne exige la ley civil para que el repudio de una asignación hereditaria sea plenamente válido e irrevocable?",
    "options": [
      {
        "key": "A",
        "text": "El repudio no existe en El Salvador; toda persona está forzada a heredar siempre."
      },
      {
        "key": "B",
        "text": "Basta con manifestar el repudio en una charla informal durante una comida familiar."
      },
      {
        "key": "C",
        "text": "Puede repudiarse por medio de un mensaje de voz en una red social no cifrada."
      },
      {
        "key": "D",
        "text": "Debe constar de manera expresa en escritura pública matriz otorgada ante notario o mediante manifestación auténtica dirigida al juez competente."
      }
    ],
    "correctKey": "D",
    "explanation": "El repudio de la herencia es un acto solemne e irrevocable que abdica del llamamiento hereditario. Para su plena eficacia frente a coherederos y acreedores debe otorgarse en escritura pública matriz o en acta procesal expresa ante la autoridad competente.",
    "csjPrecedent": "Sala de lo Civil CSJ: El repudio de una herencia exige escritura matriz solemne; las manifestaciones verbales o documentos privados simples carecen de valor abdicativo."
  },
  {
    "id": "not-99",
    "category": "sucesiones",
    "topic": "Aceptación de Herencia Provocada por Acreedores del Heredero",
    "legalBasis": "Art. 1155 Código Civil",
    "statement": "Si un heredero insolvente repudia voluntariamente una herencia valiosa con la intención deliberada de defraudar y perjudicar a sus propios acreedores:",
    "options": [
      {
        "key": "A",
        "text": "Se condena al deudor repudiante a prisión perpetua sin fórmula de juicio."
      },
      {
        "key": "B",
        "text": "Los acreedores deben renunciar a sus créditos y declararse en quiebra forzosa."
      },
      {
        "key": "C",
        "text": "Los acreedores del repudiante pueden solicitar autorización judicial para aceptar la herencia en nombre de su deudor hasta la concurrencia del monto de sus créditos insolutos."
      },
      {
        "key": "D",
        "text": "La herencia pasa automáticamente a ser propiedad de la alcaldía municipal."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 1155 C.C. consagra la acción pauliana o revocatoria en sede sucesoria: los acreedores perjudicados por el repudio fraudulento pueden ser autorizados por el juez para aceptar la herencia por el deudor; pagadas las deudas, el sobrante no aprovecha al deudor sino a los herederos sustitutos.",
    "csjPrecedent": "Sala de lo Civil CSJ: La autorización judicial a los acreedores para aceptar en lugar del heredero repudiante rescinde los efectos del repudio en la medida exacta de los créditos insolutos."
  },
  {
    "id": "not-100",
    "category": "sucesiones",
    "topic": "Albaceas o Ejecutores Testamentarios",
    "legalBasis": "Arts. 1184 al 1188 Código Civil",
    "statement": "¿Cuál es el rol jurídico del albacea testamentario nombrado por el causante en su testamento abierto?",
    "options": [
      {
        "key": "A",
        "text": "Es el mandatario póstumo encargado de velar por la seguridad de los bienes hereditarios, cumplir las disposiciones testamentarias, pagar los legados y deudas, y representar a la testamentaría."
      },
      {
        "key": "B",
        "text": "Es un policía que custodia los ataúdes en los cementerios públicos."
      },
      {
        "key": "C",
        "text": "Es una persona obligada a comprar todos los bienes del causante a mitad de precio."
      },
      {
        "key": "D",
        "text": "Es un cargo puramente honorífico sin ninguna facultad civil ni administrativa."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 1184 C.C. define a los ejecutores testamentarios o albaceas como las personas a quienes el testador confía el encargo de hacer ejecutar sus disposiciones de última voluntad con facultades de administración conservatoria y pago de legados.",
    "csjPrecedent": "Sala de lo Civil CSJ: El albacea no puede disponer arbitrariamente de los inmuebles de la sucesión sin autorización judicial previa o consentimiento unánime de los herederos."
  },
  {
    "id": "not-101",
    "category": "sucesiones",
    "topic": "Prohibición al Albacea de Adquirir Bienes de la Testamentaría",
    "legalBasis": "Art. 1190 Código Civil y Art. 1600 Código Civil",
    "statement": "¿Puede el albacea testamentario comprar para sí mismo los bienes raíces muebles o inmuebles que forman parte de la masa hereditaria que administra?",
    "options": [
      {
        "key": "A",
        "text": "No, está terminantemente prohibido al albacea comprar por sí o por interpuesta persona los bienes cuya administración se le ha encomendado, bajo sanción de nulidad absoluta."
      },
      {
        "key": "B",
        "text": "Sí, el albacea tiene derecho preferente para comprar todo con un 50% de descuento."
      },
      {
        "key": "C",
        "text": "Sí, siempre que pague en efectivo en presencia de dos testigos."
      },
      {
        "key": "D",
        "text": "Solo si los bienes están en estado de abandono total."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 1600 C.C. en armonía con las reglas del albaceazgo prohíbe de forma absoluta que los mandatarios y albaceas compren los bienes que administran, para evitar conflictos de interés y expolio del patrimonio hereditario en detrimento de los herederos.",
    "csjPrecedent": "Sala de lo Civil CSJ: La compraventa celebrada entre la testamentaría y su propio albacea adolece de nulidad absoluta insanable por vulneración del orden público de protección."
  },
  {
    "id": "not-102",
    "category": "sucesiones",
    "topic": "Beneficio de Separación de Patrimonios",
    "legalBasis": "Arts. 1258 al 1264 Código Civil",
    "statement": "¿Qué tutela jurídica otorga el beneficio de separación a los acreedores del difunto (Art. 1258 C.C.)?",
    "options": [
      {
        "key": "A",
        "text": "Obliga a que todos los herederos se divorcien de sus respectivos cónyuges."
      },
      {
        "key": "B",
        "text": "Impide que los bienes de la sucesión se confundan con los bienes personales del heredero, a fin de que los acreedores hereditarios y testamentarios se paguen preferentemente sobre el activo del causante frente a los acreedores personales del heredero."
      },
      {
        "key": "C",
        "text": "Permite al heredero quedarse con todos los bienes sin pagar ninguna deuda."
      },
      {
        "key": "D",
        "text": "Transfiere los activos hereditarios a una cuenta bancaria anónima en el extranjero."
      }
    ],
    "correctKey": "B",
    "explanation": "El beneficio de separación (Art. 1258 C.C.) protege a los acreedores de la persona fallecida: evita que las deudas personales de un heredero insolvente consuman los bienes que dejó el causante antes de que se cobren las deudas propias de la masa hereditaria.",
    "csjPrecedent": "Sala de lo Civil CSJ: El beneficio de separación segrega las masas patrimoniales para otorgar prelación de cobro a los acreedores de la causahabiencia sobre los acreedores del heredero."
  },
  {
    "id": "not-103",
    "category": "sucesiones",
    "topic": "Fideicomiso Testamentario",
    "legalBasis": "Art. 1060 Código Civil y Ley de Bancos",
    "statement": "En el ordenamiento salvadoreño, ¿puede un causante instituir un fideicomiso mortis causa en su testamento?",
    "options": [
      {
        "key": "A",
        "text": "Solo si el fiduciario es un menor de doce años no emancipado."
      },
      {
        "key": "B",
        "text": "No, el fideicomiso testamentario está prohibido y se castiga con prisión."
      },
      {
        "key": "C",
        "text": "Sí, el testador puede constituir en testamento un fideicomiso designando como fiduciario a una institución bancaria autorizada, para administrar bienes a favor de beneficiarios con estricto apego a las normas de asignaciones forzosas."
      },
      {
        "key": "D",
        "text": "Únicamente si los bienes del fideicomiso consisten exclusivamente en criptoactivos no regulados."
      }
    ],
    "correctKey": "C",
    "explanation": "La Ley de Bancos y el Código Civil admiten la constitución de fideicomisos testamentarios mediante escritura matriz de testamento o protocolización de resoluciones, encomendando la administración patrimonial a entidades fiduciarias bancarias reguladas por la SSF.",
    "csjPrecedent": "Sala de lo Civil CSJ: El fideicomiso testamentario es plenamente válido siempre que respete los límites sustanciales de las asignaciones forzosas y la mitad legitimaria legal."
  },
  {
    "id": "not-104",
    "category": "sucesiones",
    "topic": "Acción de Petición de Herencia y Plazo de Prescripción",
    "legalBasis": "Arts. 1186 al 1191 Código Civil",
    "statement": "¿Cuál es el plazo ordinario de prescripción de la acción de petición de herencia que corresponde al verdadero heredero para reclamar la masa contra el heredero aparente que la posee?",
    "options": [
      {
        "key": "A",
        "text": "La acción no prescribe jamás en mil millones de años."
      },
      {
        "key": "B",
        "text": "Tres meses improrrogables contados desde la muerte del difunto."
      },
      {
        "key": "C",
        "text": "Veinticuatro horas continuas tras el sepelio."
      },
      {
        "key": "D",
        "text": "Treinta años como regla general extraordinaria, reduciéndose a diez años en el caso del heredero aparente o putativo que haya obtenido la declaratoria con beneficio de inventario y posesión efectiva de buena fe."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 1191 C.C. fija la prescripción de la acción de petición de herencia en treinta años de conformidad con la prescripción adquisitiva extraordinaria, pero el heredero putativo amparado por decreto judicial o notarial de herederos prescribe en diez años de posesión legítima.",
    "csjPrecedent": "Sala de lo Civil CSJ: La acción de petición de herencia persigue la restitución de la universalidad jurídica de la herencia frente a quien la detenta indebidamente a título de heredero."
  },
  {
    "id": "not-105",
    "category": "sucesiones",
    "topic": "Nulidad del Testamento por Fuerza o Coacción Moral",
    "legalBasis": "Art. 1002 Código Civil",
    "statement": "Si se demuestra fehacientemente que el testamento solemne fue otorgado por el causante mediando fuerza física o amenazas graves contra su vida o la de sus familiares:",
    "options": [
      {
        "key": "A",
        "text": "El testamento es plenamente válido porque lo escrito con tinta nunca puede borrarse."
      },
      {
        "key": "B",
        "text": "El testamento es nulo en todas sus partes de pleno derecho, no pudiendo convalidarse por confirmación posterior si la fuerza vició de raíz la libre voluntad testamentaria."
      },
      {
        "key": "C",
        "text": "Se declara válido el 50% del testamento y el otro 50% se sortea públicamente."
      },
      {
        "key": "D",
        "text": "El notario adquiere la facultad de reescribir el testamento a su propio criterio."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 1002 C.C. prescribe con fuerza terminante que el testamento en que de cualquier modo haya intervenido la fuerza es nulo en todas sus partes, siendo la libertad de disposición testamentaria el núcleo sustantivo del acto solemne.",
    "csjPrecedent": "Sala de lo Civil CSJ: La violencia física o intimidación moral ejercida sobre el testador engendra la nulidad absoluta de la totalidad de las disposiciones testamentarias."
  },
  {
    "id": "not-106",
    "category": "sucesiones",
    "topic": "Inhabilidad del Notario para ser Asignatario en el Testamento",
    "legalBasis": "Art. 1022 Código Civil y Art. 9 Ley de Notariado",
    "statement": "¿Qué validez tiene una disposición testamentaria en la que el testador deja una casa de habitación como legado a favor del mismo notario que autorizó el testamento abierto?",
    "options": [
      {
        "key": "A",
        "text": "El notario debe compartir la casa con el alcalde del municipio."
      },
      {
        "key": "B",
        "text": "Es plenamente válida y el notario puede tomar posesión inmediata del inmueble."
      },
      {
        "key": "C",
        "text": "La disposición es nula de pleno derecho e ineficaz, no pudiendo el notario autorizante, su cónyuge o parientes cercanos ser herederos ni legatarios en el instrumento que autoriza."
      },
      {
        "key": "D",
        "text": "Se convalida si el notario autoriza la escritura cobrando la mitad de honorarios."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 1022 C.C. y Art. 9 LN prohíben de forma absoluta las asignaciones testamentarias a favor del notario autorizante, de su cónyuge o de sus parientes en cuarto grado de consanguinidad o segundo de afinidad, acarreando la nulidad de pleno derecho de la cláusula.",
    "csjPrecedent": "Corte Plena CSJ: La institución testamentaria a favor del notario autorizante atenta contra la fe pública e imparcialidad, generando nulidad absoluta y sanción de suspensión del ejercicio profesional."
  },
  {
    "id": "not-107",
    "category": "sucesiones",
    "topic": "Testamentos Solemnes Otorgados en País Extranjero",
    "legalBasis": "Arts. 1021 al 1024 Código Civil",
    "statement": "¿Bajo qué condiciones es válido en El Salvador un testamento solemne otorgado en el extranjero conforme a las leyes del país foráneo de otorgamiento?",
    "options": [
      {
        "key": "A",
        "text": "Es válido si se otorgó por escrito, cumpliendo con las solemnidades del lugar de otorgamiento (lex locus regit actum) y se prueba la autenticidad formal del instrumento conforme a las reglas de legalización consular o apostilla."
      },
      {
        "key": "B",
        "text": "Los testamentos hechos en el extranjero están terminantemente prohibidos en El Salvador."
      },
      {
        "key": "C",
        "text": "Solo son válidos si el testador viaja a El Salvador en un plazo de veinticuatro horas tras morir."
      },
      {
        "key": "D",
        "text": "Deben ser ratificados unánimemente por el pleno de la Asamblea Legislativa."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 1021 C.C. reconoce plena validez al testamento solemne otorgado en país extranjero de conformidad con las leyes de dicho Estado, exigiendo la acreditación escrita de su autenticidad para su protocolización y ejecución de bienes en territorio salvadoreño.",
    "csjPrecedent": "Sala de lo Civil CSJ: El principio locus regit actum ampara la eficacia de los testamentos formalizados en el exterior que cumplan con la legislación del país emisor y su legalización de ley."
  },
  {
    "id": "not-108",
    "category": "sucesiones",
    "topic": "Asignaciones a Título Universal vs Asignaciones a Título Singular",
    "legalBasis": "Arts. 952 y 1074 Código Civil",
    "statement": "¿Cuál es la distinción jurídica sustantiva entre la institución de heredero universal y la institución de legatario a título singular?",
    "options": [
      {
        "key": "A",
        "text": "No existe ninguna diferencia; son dos vocablos idénticos en el derecho de bienes."
      },
      {
        "key": "B",
        "text": "Los herederos universales son siempre militares y los legatarios civiles."
      },
      {
        "key": "C",
        "text": "El heredero no recibe ningún bien y el legatario se queda con todo el dinero en efectivo."
      },
      {
        "key": "D",
        "text": "El heredero universal sucede al causante en todos sus derechos y obligaciones transmisibles o en una cuota de ellos, y responde de las deudas hereditarias; el legatario sucede en uno o más cuerpos ciertos o especies indeterminadas y no responde de las deudas salvo subsidio."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 952 C.C. define los títulos sucesorios: universal (herencia en la totalidad o cuota ideal del patrimonio con responsabilidad por cargas) y singular (legado de bienes determinados sin responsabilidad personal directa de deudas generales de la masa).",
    "csjPrecedent": "Sala de lo Civil CSJ: La calificación de heredero o legatario depende del contenido objetivo de la asignación y no de las palabras equívocas empleadas por el testador en su disposición."
  },
  {
    "id": "not-109",
    "category": "sucesiones",
    "topic": "Revocación del Testamento y Libertad de Revocar",
    "legalBasis": "Arts. 998 y 1213 Código Civil",
    "statement": "¿Puede un testador salvadoreño renunciar en su testamento a la facultad de revocarlo en el futuro o comprometerse a no otorgar un nuevo testamento?",
    "options": [
      {
        "key": "A",
        "text": "Solo si el testador paga una póliza de seguro de no revocación ante el CNR."
      },
      {
        "key": "B",
        "text": "Sí, el primer testamento firmado es definitivo e irrevocable de por vida."
      },
      {
        "key": "C",
        "text": "No, la facultad de revocar el testamento es de orden público e irrenunciable; toda cláusula que prohíba o restrinja la revocabilidad futura se tiene por no puesta y carece de eficacia legal."
      },
      {
        "key": "D",
        "text": "El testamento solo puede ser revocado por orden escrita del Presidente de la República."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 998 C.C. consagra la esencial revocabilidad del testamento como acto de última voluntad hasta el último instante de vida del testador. Cualquier cláusula ad cautelam o renuncia a revocarlo es nula ipso jure y carece de valor jurídico vinculante.",
    "csjPrecedent": "Sala de lo Civil CSJ: La libertad de revocar las disposiciones testamentarias es un derecho personalísimo absoluto que no puede ser condicionado ni cercenado por pactos convencionales previos."
  },
  {
    "id": "not-110",
    "category": "sucesiones",
    "topic": "Partición Judicial de la Herencia ante Desacuerdo",
    "legalBasis": "Art. 1196 Código Civil y Código Procesal Civil y Mercantil",
    "statement": "Si los coherederos declarados definitivamente no logran un acuerdo unánime para dividirse los bienes relictos de la sucesión de forma extrajudicial:",
    "options": [
      {
        "key": "A",
        "text": "Cualquiera de los comuneros tiene el derecho imprescriptible de solicitar la partición judicial de bienes ante el Juez de Primera Instancia civil competente, mediante juicio de partición con nombramiento de partidor."
      },
      {
        "key": "B",
        "text": "Los bienes deben ser destruidos físicamente por la policía municipal."
      },
      {
        "key": "C",
        "text": "La herencia pasa automáticamente a ser propiedad del heredero más joven."
      },
      {
        "key": "D",
        "text": "El notario que los declaró herederos se convierte en el dueño exclusivo de todos los terrenos."
      }
    ],
    "correctKey": "A",
    "explanation": "Nadie está obligado a permanecer en la indivisión (Art. 1196 C.C.). La falta de unanimidad para una partición notarial amigable abre de inmediato el juicio de partición judicial ante los tribunales civiles para inventariar, tasar y adjudicar o subastar los bienes de la comunidad.",
    "csjPrecedent": "Sala de lo Civil CSJ: La acción de partición de la masa hereditaria es imprescriptible mientras subsista el estado de indivisión entre los coherederos comuneros."
  },
  {
    "id": "not-111",
    "category": "sucesiones",
    "topic": "Capacidad para Testar y Edad Mínima",
    "legalBasis": "Art. 1005 Código Civil",
    "statement": "De conformidad con el Artículo 1005 del Código Civil, ¿cuál es la edad mínima que debe tener una persona para otorgar válidamente un testamento en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "Haber cumplido dieciocho años de edad, careciendo de capacidad para testar los menores impúberes y menores adultos salvo habilitación de edad o emancipación conforme a las reformas civiles."
      },
      {
        "key": "B",
        "text": "Tener al menos noventa años cumplidos en presencia de diez médicos."
      },
      {
        "key": "C",
        "text": "Cualquier recién nacido de tres días puede testar válidamente."
      },
      {
        "key": "D",
        "text": "Solo los ciudadanos mayores de cincuenta años con propiedades en la capital."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 1005 C.C. enumera a los inhábiles para testar: el impúber, el que se hallare bajo interdicción por demencia, el que actualmente no estuviere en su sano juicio por ebriedad u otra causa, y todo el que de palabra o por escrito no pudiere expresar su voluntad claramente.",
    "csjPrecedent": "Sala de lo Civil CSJ: La capacidad mental y volitiva para testar se califica en el momento exacto del otorgamiento del instrumento solemne ante notario."
  },
  {
    "id": "not-112",
    "category": "sucesiones",
    "topic": "Testamentos Privilegiados o Menos Solemnes",
    "legalBasis": "Arts. 1024 al 1034 Código Civil",
    "statement": "¿Cuáles son los testamentos privilegiados o menos solemnes reconocidos taxativamente en el Código Civil de El Salvador para circunstancias de extrema gravedad?",
    "options": [
      {
        "key": "A",
        "text": "El testamento redactado en servilletas de papel en restaurantes comerciales."
      },
      {
        "key": "B",
        "text": "El testamento militar en tiempo de guerra y el testamento marítimo a bordo de buques en alta mar."
      },
      {
        "key": "C",
        "text": "El testamento otorgado verbalmente ante conductores de autobuses colectivos."
      },
      {
        "key": "D",
        "text": "El testamento grabado en mensajes de texto por telefonía celular móvil."
      }
    ],
    "correctKey": "B",
    "explanation": "El Código Civil regula los testamentos privilegiados (militar y marítimo) como excepciones de estricta interpretación ante peligro inminente de muerte en campañas bélicas o navegación marítima, caducando a los 90 días si el testador sobrevive.",
    "csjPrecedent": "Sala de lo Civil CSJ: Los testamentos privilegiados están sometidos a caducidad legal perentoria si el otorgante sobrevive a las circunstancias extraordinarias que motivaron la dispensa de solemnidades comunes."
  },
  {
    "id": "not-113",
    "category": "sucesiones",
    "topic": "Incapacidad del Eclesiástico Confesor",
    "legalBasis": "Art. 1023 Código Civil",
    "statement": "¿Puede un sacerdote o ministro de culto que hubiere confesado o asistido espiritualmente al causante durante su última enfermedad ser heredero o legatario en su testamento?",
    "options": [
      {
        "key": "A",
        "text": "Solo si el sacerdote es hermano de sangre del causante."
      },
      {
        "key": "B",
        "text": "Sí, los eclesiásticos tienen derecho preferente para adjudicarse todos los bienes del causante."
      },
      {
        "key": "C",
        "text": "No, por testamento otorgado durante la última enfermedad no puede recibir asignación alguna el eclesiástico que hubiere confesado al difunto durante la misma enfermedad, ni la orden o comunidad a que pertenezca."
      },
      {
        "key": "D",
        "text": "Únicamente si la herencia consiste en monedas de plata antigua."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 1023 C.C. inhabilita al confesor o ministro religioso de la última enfermedad para evitar captaciones indebidas de la voluntad mortis causa ante la vulnerabilidad espiritual del moribundo, salvando únicamente las asignaciones a favor de parientes legítimos.",
    "csjPrecedent": "Sala de lo Civil CSJ: La interdicción de suceder del confesor en la última enfermedad es una incapacidad de orden público que vicia de nulidad de pleno derecho la disposición testamentaria."
  },
  {
    "id": "not-114",
    "category": "sucesiones",
    "topic": "Obligación de Alimentos Forzosos como Carga Hereditaria",
    "legalBasis": "Art. 1193 Código Civil y Código de Familia",
    "statement": "Si el causante estaba judicial o legalmente obligado a pagar alimentos a un hijo menor de edad o cónyuge y fallece:",
    "options": [
      {
        "key": "A",
        "text": "El alimentario menor de edad es obligado a pagar las deudas bancarias del padre difunto."
      },
      {
        "key": "B",
        "text": "La obligación alimentaria se extingue para siempre y los hijos menores quedan en abandono legal."
      },
      {
        "key": "C",
        "text": "Los alimentos deben ser pagados por los vecinos del barrio donde residía el difunto."
      },
      {
        "key": "D",
        "text": "La pensión alimenticia forzosa constituye una asignación forzosa que grava toda la masa hereditaria y debe ser satisfecha prioritariamente con los bienes relictos antes de pagar legados o adjudicar remanentes."
      }
    ],
    "correctKey": "D",
    "explanation": "Los alimentos que se deben por ley constituyen la primera asignación forzosa conforme al Art. 1192 C.C. Los herederos deben reservar la porción patrimonial suficiente para continuar suministrando la cuota de alimentos a los acreedores alimentarios del de cuius.",
    "csjPrecedent": "Sala de lo Civil CSJ: La deuda alimentaria forzosa grava el activo de la sucesión y no puede ser desconocida por disposiciones testamentarias de libre disposición."
  },
  {
    "id": "not-115",
    "category": "sucesiones",
    "topic": "Nulidad de Cláusulas Captatorias en Testamentos",
    "legalBasis": "Art. 1039 Código Civil",
    "statement": "¿Qué validez reconoce la legislación salvadoreña a las disposiciones captatorias en que el testador asigna bienes a una persona a condición de que esta le deje parte de sus bienes en su propio testamento?",
    "options": [
      {
        "key": "A",
        "text": "Son plenamente válidas como contratos mercantiles sinalagmáticos obligatorios."
      },
      {
        "key": "B",
        "text": "Las disposiciones captatorias son nulas de pleno derecho en el ordenamiento civil salvadoreño por atentar contra la espontaneidad y libertad de la última voluntad."
      },
      {
        "key": "C",
        "text": "Son válidas siempre que se firmen ante un banco internacional."
      },
      {
        "key": "D",
        "text": "Se convalidan si las dos personas fallecen el mismo día y a la misma hora."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 1039 C.C. proscribe de forma tajante las cláusulas captatorias (hacer depender mi disposición testamentaria de que tú me favorezcas en tu testamento), sancionando con nulidad absoluta tales pactos sucesorios por quebrantar la libertad testamentaria.",
    "csjPrecedent": "Sala de lo Civil CSJ: El pacto de sucesión recíproca captatoria es nulo de pleno derecho por vulnerar la naturaleza unilateral y libre del testamento solemne."
  },
  {
    "id": "not-116",
    "category": "sucesiones",
    "topic": "Aceptación Expresa de Herencia ante Notario",
    "legalBasis": "Art. 18 LENJVOD",
    "statement": "Cuando un heredero comparece ante notario a iniciar las diligencias de jurisdicción voluntaria manifestando que acepta la herencia diferida a su favor:",
    "options": [
      {
        "key": "A",
        "text": "El interesado debe depositar el 100% del valor de los bienes en una fianza municipal."
      },
      {
        "key": "B",
        "text": "El notario debe rechazar al solicitante y obligarlo a repudiar la herencia."
      },
      {
        "key": "C",
        "text": "El notario asienta la solicitud donde consta la aceptación expresa del llamamiento hereditario con beneficio de inventario, dando formal apertura a las diligencias de la sucesión."
      },
      {
        "key": "D",
        "text": "Se cancelan automáticamente todos los juicios pendientes en los juzgados del país."
      }
    ],
    "correctKey": "C",
    "explanation": "La solicitud notarial de aceptación de herencia formulada con las formalidades del Art. 18 LENJVOD constituye la manifestación solemne y expresa de aceptación que activa el procedimiento sucesorio voluntario y el discernimiento de la administración interina.",
    "csjPrecedent": "Sala de lo Civil CSJ: La presentación de la solicitud notarial de herencia configura aceptación expresa válida del derecho hereditario."
  },
  {
    "id": "not-117",
    "category": "sucesiones",
    "topic": "Herederos Abintestato y Órdenes de Sucesión",
    "legalBasis": "Arts. 988 y sigs. Código Civil",
    "statement": "En la sucesión intestada en El Salvador, ¿cuál es el primer orden de llamamiento legal para heredar con exclusión de los órdenes posteriores?",
    "options": [
      {
        "key": "A",
        "text": "Los hijos del causante, personalmente o representados por su descendencia, y el cónyuge sobreviviente (o conviviente declarado)."
      },
      {
        "key": "B",
        "text": "Los tíos y primos lejanos residentes en el extranjero."
      },
      {
        "key": "C",
        "text": "La Universidad de El Salvador con exclusión de los hijos biológicos."
      },
      {
        "key": "D",
        "text": "Los acreedores bancarios del difunto."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 988 C.C. fija los órdenes sucesorios: el primer orden lo integran los hijos y el cónyuge sobreviviente en partes iguales. A falta de hijos, concurren los padres y el cónyuge en el segundo orden de llamamiento legal.",
    "csjPrecedent": "Sala de lo Civil CSJ: La concurrencia de hijos legítimos o reconocidos excluye de pleno derecho a los colaterales y demás parientes lejanos en la sucesión abintestato."
  },
  {
    "id": "not-118",
    "category": "sucesiones",
    "topic": "Sucesión a Favor de la Universidad de El Salvador y Hospitales",
    "legalBasis": "Art. 988 numeral 6° Código Civil",
    "statement": "En defecto de todos los parientes consanguíneos hasta el cuarto grado y del cónyuge sobreviviente, ¿a quién llama la ley a suceder abintestato en último término?",
    "options": [
      {
        "key": "A",
        "text": "Los bienes se queman y no pasan a ninguna institución."
      },
      {
        "key": "B",
        "text": "Al Banco Central de Reserva para el pago de la deuda externa soberana."
      },
      {
        "key": "C",
        "text": "Al primer particular extranjero que solicite los bienes en una ventanilla consular."
      },
      {
        "key": "D",
        "text": "A la Universidad de El Salvador y a los hospitales públicos reconocidos por el Estado."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 988 Ord. 6° C.C. instituye como último sucesor abintestato a la Universidad de El Salvador y a los centros hospitalarios de asistencia pública del país, impidiendo que los bienes queden vacantes y revirtiéndolos a la educación y salud del Estado.",
    "csjPrecedent": "Sala de lo Civil CSJ: A falta absoluta de causahabientes con vocación familiar, la herencia se discierne legítimamente a favor de la Universidad de El Salvador y hospitales públicos."
  },
  {
    "id": "not-119",
    "category": "sucesiones",
    "topic": "Partición Notarial con Bienes de Menores previa Autorización",
    "legalBasis": "Art. 17 LENJVOD y Código Procesal Civil y Mercantil",
    "statement": "Si en la masa hereditaria a partirse extrajudicialmente ante notario existen bienes en que tienen derecho menores de edad:",
    "options": [
      {
        "key": "A",
        "text": "Los menores de edad quedan excluidos automáticamente del reparto de inmuebles."
      },
      {
        "key": "B",
        "text": "El notario puede autorizarla libremente si el padre del menor promete cuidarlo bien."
      },
      {
        "key": "C",
        "text": "Solo podrá otorgarse la partición notarial si se cuenta previamente con la autorización judicial expresa del Juez de Familia competente y con dictamen favorable de la Procuraduría General de la República."
      },
      {
        "key": "D",
        "text": "Basta con que el menor firme con una cruz en presencia de dos testigos amigos."
      }
    ],
    "correctKey": "C",
    "explanation": "La protección patrimonial de menores e incapaces exige autorización judicial previa con causa de utilidad manifiesta para actos de partición y enajenación de sus cuotas indivisas (Arts. 17 LENJVOD y Código de Familia), salvaguardando sus hijuelas.",
    "csjPrecedent": "Sala de lo Civil CSJ: La partición extrajudicial notarial que afecte inmuebles de menores de edad sin previa autorización judicial de familia adolece de nulidad absoluta insanable."
  },
  {
    "id": "not-120",
    "category": "sucesiones",
    "topic": "Responsabilidad Notarial en la Autorización de Testamentos Nulos",
    "legalBasis": "Arts. 32 y 62 Ley de Notariado y Art. 1009 Código Civil",
    "statement": "Si un notario autoriza un testamento solemne abierto con solo dos testigos instrumentales (en vez de los tres exigidos por ley), acarreando la nulidad del testamento:",
    "options": [
      {
        "key": "A",
        "text": "El notario incurre en grave negligencia profesional, responderá civilmente de todos los daños y perjuicios económicos causados a los herederos perjudicados y será sancionado disciplinariamente por la CSJ."
      },
      {
        "key": "B",
        "text": "El notario adquiere la propiedad del 50% de la masa hereditaria por su trabajo."
      },
      {
        "key": "C",
        "text": "La CSJ le otorga una medalla al mérito notarial por haber ahorrado testigos."
      },
      {
        "key": "D",
        "text": "Los perjudicados deben pagarle honorarios dobles al notario por el error cometido."
      }
    ],
    "correctKey": "A",
    "explanation": "El quebrantamiento del número preceptivo de tres testigos idóneos vicia el testamento solemne abierto de nulidad absoluta insubsanable. Dicha omisión inexcusable genera responsabilidad civil directa del fedatario por culpa profesional grave y sanción disciplinaria de suspensión en Corte Plena.",
    "csjPrecedent": "Corte Plena CSJ: La autorización de testamentos solemnes con inobservancia de solemnidades imperativas acarrea la suspensión en el ejercicio de la función notarial y condena en daños y perjuicios."
  },
  {
    "id": "not-121",
    "category": "contratos",
    "topic": "Poder General Judicial y Facultades Especiales",
    "legalBasis": "Art. 69 Código Procesal Civil y Mercantil (CPCM)",
    "statement": "Para que un apoderado general judicial pueda válidamente transigir, desistir de la pretensión o allanarse en un proceso judicial en El Salvador, ¿qué requisito debe contener el poder otorgado ante notario?",
    "options": [
      {
        "key": "A",
        "text": "Debe contener facultades especiales expresamente conferidas e individualizadas en el cuerpo del instrumento notarial."
      },
      {
        "key": "B",
        "text": "Basta con otorgar un poder general judicial estándar sin cláusula especial."
      },
      {
        "key": "C",
        "text": "Requiere ratificación ante el Ministerio de Relaciones Exteriores."
      },
      {
        "key": "D",
        "text": "Solo puede ser otorgado ante un juez de primera instancia, no ante notario."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 69 inc. 2.° del CPCM exige poder especial o cláusula especial expresa e individualizada para realizar actos de disposición procesal como transigir, desistir, someterse a arbitraje o renunciar a recursos.",
    "csjPrecedent": "Sala de lo Civil CSJ: La concesión genérica de facultades no habilita al apoderado para allanarse o transigir sin cláusula especial taxativamente redactada."
  },
  {
    "id": "not-122",
    "category": "contratos",
    "topic": "Sustitución y Delegación de Facultades en Poderes Judiciales",
    "legalBasis": "Art. 72 CPCM y Art. 1891 Código Civil",
    "statement": "¿Puede un apoderado general judicial en El Salvador delegar o sustituir válidamente su poder a favor de un colega abogado si en la escritura matriz original no se le confirió expresamente la facultad de sustitución?",
    "options": [
      {
        "key": "A",
        "text": "Sí, porque la facultad de sustituir se presume legalmente concedida en todo mandato judicial."
      },
      {
        "key": "B",
        "text": "No; el apoderado solo puede sustituir sus facultades si está facultado de manera expresa en el instrumento de poder matriz otorgado ante notario."
      },
      {
        "key": "C",
        "text": "Sí, siempre que el sustituto pertenezca a la misma firma o despacho legal."
      },
      {
        "key": "D",
        "text": "Sí, bastando una simple notificación escrita enviada al juzgado sin escritura de sustitución."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 72 del Código Procesal Civil y Mercantil dispone de forma perentoria que el apoderado solo podrá sustituir sus facultades si el poderdante le hubiese facultado expresamente para ello en el poder original; la sustitución sin habilitación expresa carece de eficacia legal.",
    "csjPrecedent": "Sala de lo Civil CSJ Ref. 88-CAC-2019: La comparecencia en juicio de un abogado sustituto cuyo poder matriz no contemplaba facultad de sustitución engendra defecto insubsanable de postulación procesal."
  },
  {
    "id": "not-123",
    "category": "contratos",
    "topic": "Venta de Cosa Ajena y Responsabilidad Notarial en el Tracto Sucesivo",
    "legalBasis": "Art. 1619 Código Civil y Art. 46 Ley de Notariado",
    "statement": "Al autorizar una escritura de compraventa sobre un bien raíz donde el vendedor no posee antecedente inscrito a su favor en el Registro de la Propiedad Raíz e Hipotecas, ¿cuál es la validez sustantiva del contrato y la prevención legal obligatoria del notario?",
    "options": [
      {
        "key": "A",
        "text": "El notario se subroga de oficio en las obligaciones económicas del vendedor frente al adquirente."
      },
      {
        "key": "B",
        "text": "La venta de cosa ajena es jurídicamente nula de pleno derecho e inexistente en el derecho salvadoreño."
      },
      {
        "key": "C",
        "text": "La venta de cosa ajena es civilmente válida entre las partes, pero el notario está legalmente obligado a advertir a los otorgantes que la tradición registral no surtirá efectos mientras no se restablezca el tracto sucesivo antecedente."
      },
      {
        "key": "D",
        "text": "El Registro de la Propiedad está obligado a inscribir la transferencia dispensando la titulación previa."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 1619 C.C. prescribe que la venta de cosa ajena vale sin perjuicio de los derechos del verdadero dueño, y el Art. 46 LN ordena al notario advertir expresamente a los comparecientes de la falta de inscripción registral antecedente y las consecuencias de la interrupción del tracto sucesivo.",
    "csjPrecedent": "Sala de lo Civil CSJ: El notario que autoriza compraventas sin realizar las advertencias registrales perentorias sobre falta de inscripción incurre en responsabilidad profesional por daños causados."
  },
  {
    "id": "not-124",
    "category": "contratos",
    "topic": "Solemnidad en la Compraventa de Bienes Inmuebles",
    "legalBasis": "Art. 1605 Código Civil",
    "statement": "¿Bajo qué forma solemne debe otorgarse la venta de bienes raíces en El Salvador para su perfeccionamiento y validez legal?",
    "options": [
      {
        "key": "A",
        "text": "Se perfecciona por el simple consentimiento verbal de las partes sin ningún escrito."
      },
      {
        "key": "B",
        "text": "Basta con un documento privado con firmas autenticadas ante un alcalde municipal."
      },
      {
        "key": "C",
        "text": "Es suficiente con un recibo de pago simple extendido en servilleta de papel."
      },
      {
        "key": "D",
        "text": "Debe otorgarse por escritura pública matriz asentada en el libro de protocolo de un notario debidamente facultado."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 1605 inc. 2° C.C. establece que la venta de bienes raíces, servidumbres y de una sucesión hereditaria no se reputan perfectas ante la ley mientras no se haya otorgado en escritura pública solemne.",
    "csjPrecedent": "Sala de lo Civil CSJ: El otorgamiento de escritura pública es una solemnidad ad solemnitatem esencial; su omisión acarrea la inexistencia jurídica del contrato de compraventa inmobiliaria."
  },
  {
    "id": "not-125",
    "category": "contratos",
    "topic": "Requisitos de Eficacia del Contrato de Promesa de Venta",
    "legalBasis": "Art. 1425 Código Civil",
    "statement": "Conforme al Artículo 1425 del Código Civil, ¿cuál de los siguientes requisitos es indispensable para que la promesa de celebrar un contrato produzca obligación de hacer coercible?",
    "options": [
      {
        "key": "A",
        "text": "Que se firme en presencia de tres magistrados de la Corte Suprema de Justicia."
      },
      {
        "key": "B",
        "text": "Que la promesa conste por escrito, que el contrato prometido no sea de aquellos que las leyes declaran ineficaces, que contenga un plazo o condición que fije la época de su celebración y que se especifique de tal manera que solo falte la tradición o solemnidades legales."
      },
      {
        "key": "C",
        "text": "Que se pague el cien por ciento del precio de la compraventa al momento de la promesa."
      },
      {
        "key": "D",
        "text": "Que el inmueble no tenga ninguna medición catastral previa."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 1425 C.C. enumera taxativamente los cuatro requisitos copulativos de validez de la promesa de contrato: escrito formal, licitud sustantiva del contrato prometido, fijación de plazo o condición suspensiva y especificación perfecta del negocio.",
    "csjPrecedent": "Sala de lo Civil CSJ: La omisión de cualquiera de los cuatro requisitos del Art. 1425 C.C. hace que la promesa no produzca obligación alguna de celebrar el contrato prometido."
  },
  {
    "id": "not-126",
    "category": "contratos",
    "topic": "Hipoteca y su Carácter Registral Constitutivo",
    "legalBasis": "Arts. 2157 y 2160 Código Civil",
    "statement": "¿Qué naturaleza y solemnidad jurídica reviste la constitución de una hipoteca sobre bienes inmuebles en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "Se constituye automáticamente por el simple atraso en el pago de una factura de servicios públicos."
      },
      {
        "key": "B",
        "text": "Puede constituirse mediante declaración verbal privada ante dos amigos del acreedor."
      },
      {
        "key": "C",
        "text": "La hipoteca deberá otorgarse por escritura pública solemne y no surtirá ningún efecto oponible contra terceros si no se inscribe formalmente en el Registro de la Propiedad Raíz e Hipotecas del CNR."
      },
      {
        "key": "D",
        "text": "La inscripción registral es un trámite opcional sin trascendencia para los acreedores."
      }
    ],
    "correctKey": "C",
    "explanation": "Los Arts. 2157 y 2160 C.C. disponen que la hipoteca es un derecho real que exige doble solemnidad: escritura pública matriz para su otorgamiento y registro público constitutivo en el CNR para tener eficacia real frente a terceros.",
    "csjPrecedent": "Sala de lo Civil CSJ: La hipoteca no inscrita en el Registro de la Propiedad carece de rango de derecho real preferente y solo confiere acción personal ordinaria no privilegiada."
  },
  {
    "id": "not-127",
    "category": "contratos",
    "topic": "Pacto de Retroventa y Plazo Máximo Legal",
    "legalBasis": "Arts. 1679 al 1683 Código Civil",
    "statement": "En el contrato de compraventa con pacto de retroventa, ¿cuál es el plazo máximo legal perentorio que las partes pueden estipular para que el vendedor recobre la cosa vendida?",
    "options": [
      {
        "key": "A",
        "text": "El tiempo en que se intente la acción de retroventa no podrá pasar de cuatro años contados desde la fecha del contrato."
      },
      {
        "key": "B",
        "text": "Un plazo indefinido de cien años sin prescripción."
      },
      {
        "key": "C",
        "text": "Tres días hábiles posteriores a la entrega de las llaves."
      },
      {
        "key": "D",
        "text": "Veinticinco años prorrogables por acuerdo verbal."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 1683 C.C. fija en cuatro años el tope máximo legal improrrogable para el ejercicio del derecho de rescate en la retroventa. Cualquier estipulación convencional que fije un plazo mayor queda automáticamente reducida por ministerio de ley al plazo legal de cuatro años.",
    "csjPrecedent": "Sala de lo Civil CSJ: El plazo de cuatro años del pacto de retroventa es de caducidad preclusiva estricta, extinguiéndose el derecho de rescate si no se ejerce y consigna en dicho término."
  },
  {
    "id": "not-128",
    "category": "contratos",
    "topic": "Rescisión por Lesión Enorme en la Compraventa Inmobiliaria",
    "legalBasis": "Arts. 1689 al 1698 Código Civil",
    "statement": "¿Cuándo sufre lesión enorme el vendedor en una compraventa de bienes raíces conforme al Artículo 1689 del Código Civil?",
    "options": [
      {
        "key": "A",
        "text": "Solo si el vendedor demuestra haber sido hipnotizado por el notario autorizante."
      },
      {
        "key": "B",
        "text": "Cuando el comprador no le da las gracias por escrito al concluir el acto."
      },
      {
        "key": "C",
        "text": "Siempre que el inmueble baje de precio en el mercado diez años después."
      },
      {
        "key": "D",
        "text": "Cuando el precio que recibe es inferior a la mitad del justo precio de la cosa que vende en la fecha del contrato."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 1689 C.C. define la lesión enorme: el vendedor sufre lesión enorme cuando el precio que recibe es menor que la mitad del justo valor; y el comprador cuando el justo precio de la cosa es inferior a la mitad del precio que pagó por ella (ultra dimidium).",
    "csjPrecedent": "Sala de lo Civil CSJ: La acción rescisoria por lesión enorme en la venta de inmuebles prescribe en cuatro años contados desde la fecha del contrato y exige peritaje tasatorio a la fecha de venta."
  },
  {
    "id": "not-129",
    "category": "contratos",
    "topic": "Nulidad Absoluta: Titularidad y Declaratoria de Oficio",
    "legalBasis": "Arts. 1551 al 1553 Código Civil",
    "statement": "¿Cuáles son las características procesales fundamentales de la Nulidad Absoluta civil reguladas en el Artículo 1553 del Código Civil?",
    "options": [
      {
        "key": "A",
        "text": "Se sanea automáticamente si las partes firman una enmienda en servilleta de papel."
      },
      {
        "key": "B",
        "text": "Solo puede ser alegada por el deudor en los primeros tres días del juicio."
      },
      {
        "key": "C",
        "text": "Puede y debe ser declarada de oficio por el juez cuando aparece de manifiesto en el acto o contrato; puede alegarse por todo el que tenga interés en ello y por el Ministerio Público, y no puede sanearse por la ratificación de las partes."
      },
      {
        "key": "D",
        "text": "La nulidad absoluta no puede ser declarada por ningún juez judicial de la República."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 1553 C.C. consagra que la nulidad absoluta responde al orden público tutelar: el juez tiene el deber inexcusable de declararla ex officio si consta en autos, la fiscalía puede pedirla y es insusceptible de ratificación convalidante privada, requiriendo 30 años de prescripción extraordinaria.",
    "csjPrecedent": "Sala de lo Civil CSJ: La nulidad absoluta originada por ilicitud de objeto o causa, o por omisión de solemnidades esenciales, no admite saneamiento por novación ni confirmación voluntaria de partes."
  },
  {
    "id": "not-130",
    "category": "contratos",
    "topic": "Nulidad Relativa y Saneamiento por Ratificación",
    "legalBasis": "Arts. 1552 y 1554 Código Civil",
    "statement": "A diferencia de la nulidad absoluta, ¿qué vicios originan Nulidad Relativa y cómo puede sanearse (Art. 1554 C.C.)?",
    "options": [
      {
        "key": "A",
        "text": "Cualquiera otra especie de vicio distinto de los que acarrean nulidad absoluta (como vicios del consentimiento o incapacidad relativa); solo puede alegarse a pedimento de parte interesada y se sanea por el transcurso de cuatro años o por ratificación de las partes."
      },
      {
        "key": "B",
        "text": "El objeto ilícito y la causa criminal en el contrato."
      },
      {
        "key": "C",
        "text": "La falta total y absoluta de escritura pública en la venta de una finca rústica."
      },
      {
        "key": "D",
        "text": "Los crímenes de guerra cometidos en el extranjero."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 1552 C.C. reserva la nulidad relativa a los vicios de protección particular (error, fuerza moral relativa, dolo, omisión de formalidades no solemnes). Se sanea por la ratificación expresa o tácita del perjudicado o por el transcurso del plazo de rescisión de cuatro años (Art. 1562 C.C.).",
    "csjPrecedent": "Sala de lo Civil CSJ: La nulidad relativa no puede ser declarada de oficio por los jueces; requiere instancia y legitimación activa exclusiva de la persona en cuyo beneficio la han establecido las leyes."
  },
  {
    "id": "not-131",
    "category": "contratos",
    "topic": "Pacto Comisorio Calificado en la Compraventa",
    "legalBasis": "Art. 1675 Código Civil",
    "statement": "Cuando en una escritura de compraventa se estipula expresamente el pacto comisorio calificado con la cláusula de que por no pagarse el precio al tiempo convenido 'se resolverá ipso facto el contrato':",
    "options": [
      {
        "key": "A",
        "text": "El comprador podrá, sin embargo, hacer subsistir el contrato pagando el precio a más tardar en las veinticuatro horas subsiguientes a la notificación judicial de la demanda."
      },
      {
        "key": "B",
        "text": "El contrato queda rescindido al segundo exacto sin necesidad de demandar judicialmente."
      },
      {
        "key": "C",
        "text": "El comprador es arrestado de inmediato por estafa comercial."
      },
      {
        "key": "D",
        "text": "El vendedor adquiere el derecho de derribar la casa comprada por el deudor."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 1675 C.C. concede al comprador una garantía de rescate perentoria: no obstante la estipulación de resolución de pleno derecho (ipso facto), el deudor puede purgar la mora y mantener el contrato consignando el precio insoluto dentro de las 24 horas siguientes al emplazamiento judicial de la demanda.",
    "csjPrecedent": "Sala de lo Civil CSJ: El plazo de veinticuatro horas del pacto comisorio calificado es fatal y legal perentorio; el pago realizado dentro de ese lapso enerva la resolución contractual."
  },
  {
    "id": "not-132",
    "category": "contratos",
    "topic": "Condición Resolutoria Tácita en Contratos Bilaterales",
    "legalBasis": "Art. 1360 Código Civil",
    "statement": "En todos los contratos bilaterales va envuelta la condición resolutoria tácita conforme al Artículo 1360 del Código Civil. ¿Qué derecho asiste al contratante diligente que ha cumplido sus obligaciones frente al contratante moroso?",
    "options": [
      {
        "key": "A",
        "text": "Obligación forzosa de perdonar la deuda y pagarle los gastos de hotel al incumplidor."
      },
      {
        "key": "B",
        "text": "Pedir a su arbitrio la resolución del contrato o su cumplimiento forzoso, con indemnización de perjuicios en ambos casos."
      },
      {
        "key": "C",
        "text": "El contrato se transfiere de inmediato a la propiedad de la municipalidad."
      },
      {
        "key": "D",
        "text": "No puede reclamar nada si el contrato no se firmó ante tres notarios simultáneos."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 1360 C.C. consagra el remedio sinalagmático fundamental: la parte cumplidora tiene la opción alternativa e indemnizatoria de demandar el cumplimiento específico o la resolución del vínculo obligacional más el resarcimiento integral del daño emergente y lucro cesante.",
    "csjPrecedent": "Sala de lo Civil CSJ: Para que proceda la resolución por condición resolutoria tácita, el demandante debe probar fehacientemente haber cumplido o haberse allanado a cumplir sus propias prestaciones contractuales."
  },
  {
    "id": "not-133",
    "category": "contratos",
    "topic": "Hipoteca Abierta Bancaria y sus Límites",
    "legalBasis": "Ley de Bancos y Código Civil",
    "statement": "Al autorizar una escritura de Hipoteca Abierta otorgada a favor de una institución bancaria para garantizar créditos presentes y futuros:",
    "options": [
      {
        "key": "A",
        "text": "El deudor hipotecario transfiere el dominio absoluto de su inmueble al banco de inmediato."
      },
      {
        "key": "B",
        "text": "La hipoteca abierta garantiza sumas infinitas e ilimitadas por toda la eternidad sin monto."
      },
      {
        "key": "C",
        "text": "Debe fijarse un límite máximo de responsabilidad hipotecaria en dinero y un plazo determinado de vigencia de la garantía, respondiendo el gravamen únicamente hasta dicho monto e intervalo temporal pactado."
      },
      {
        "key": "D",
        "text": "Está prohibida la constitución de hipotecas abiertas en la República de El Salvador."
      }
    ],
    "correctKey": "C",
    "explanation": "La Ley de Bancos y la jurisprudencia civil exigen que la hipoteca abierta cumpla con el principio registral de especialidad: debe fijarse un monto dinerario tope máximo y un plazo legal determinado para la concesión de créditos cubiertos, protegiendo al deudor y a terceros acreedores posteriores.",
    "csjPrecedent": "Sala de lo Civil CSJ: La hipoteca abierta que carezca de plazo de vigencia o límite máximo de cuantía garantizada quebranta el principio de especialidad registral inmobiliaria."
  },
  {
    "id": "not-134",
    "category": "contratos",
    "topic": "Obligación de Saneamiento por Evicción",
    "legalBasis": "Arts. 1639 al 1658 Código Civil",
    "statement": "¿En qué consiste el saneamiento de la evicción que el vendedor debe al comprador en un contrato de compraventa civil?",
    "options": [
      {
        "key": "A",
        "text": "En perdonar el precio de venta si el comprador tiene dificultades financieras."
      },
      {
        "key": "B",
        "text": "En pintar de color blanco las paredes de la casa antes de entregarla."
      },
      {
        "key": "C",
        "text": "En obligar a los vecinos a firmar una carta de bienvenida al nuevo adquirente."
      },
      {
        "key": "D",
        "text": "El vendedor está obligado a amparar al comprador en el dominio y posesión pacífica de la cosa vendida, y a indemnizarle el valor del bien y perjuicios si el comprador es privado del todo o parte de ella por sentencia judicial firme por causa anterior a la venta."
      }
    ],
    "correctKey": "D",
    "explanation": "La evicción protege al comprador frente al despojo jurídico por sentencia judicial firme en virtud de un mejor derecho de un tercero anterior a la enajenación. El saneamiento obliga al vendedor a asumir la defensa en juicio y a restituir el precio tasado más frutos y costas.",
    "csjPrecedent": "Sala de lo Civil CSJ: La acción de saneamiento por evicción exige que el comprador cite oportunamente de saneamiento al vendedor en el juicio reivindicatorio antes de la contestación de la demanda."
  },
  {
    "id": "not-135",
    "category": "contratos",
    "topic": "Vicios Redhibitorios u Ocultos en la Compraventa",
    "legalBasis": "Arts. 1659 al 1670 Código Civil",
    "statement": "¿Qué requisitos deben concurrir para que un defecto material de la cosa vendida configure un vicio redhibitorio que faculte la rescisión del contrato o la rebaja del precio?",
    "options": [
      {
        "key": "A",
        "text": "Que el comprador se arrepienta de la compra porque no le gustó el color del cielo."
      },
      {
        "key": "B",
        "text": "Haber existido al tiempo de la venta, ser de tal gravedad que la cosa no sirva para su uso natural o solo sirva imperfectamente, y no haber sido manifestados por el vendedor ni ser fácilmente conocidos por el comprador en razón de su profesión."
      },
      {
        "key": "C",
        "text": "Que el defecto se produzca diez años después por falta de mantenimiento del adquirente."
      },
      {
        "key": "D",
        "text": "Basta con que el comprador manifieste desagrado verbal sin prueba técnica pericial."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 1659 C.C. define los vicios redhibitorios: defectos materiales ocultos graves preexistentes al contrato que hacen inútil la cosa para su destino o disminuyen de tal modo su uso que el comprador no la habría comprado o habría pagado mucho menos por ella (actio redhibitoria o quanti minoris).",
    "csjPrecedent": "Sala de lo Civil CSJ: La acción redhibitoria prescribe en seis meses para bienes muebles y en un año para bienes inmuebles contados desde la entrega material de la cosa."
  },
  {
    "id": "not-136",
    "category": "contratos",
    "topic": "Donación entre Vivos de Bienes Inmuebles y Aceptación",
    "legalBasis": "Arts. 1279 y 1290 Código Civil",
    "statement": "¿Qué formalidad sustancial ad solemnitatem exige el Código Civil para que la donación irrevocable entre vivos de bienes inmuebles surta efectos jurídicos?",
    "options": [
      {
        "key": "A",
        "text": "Basta con una carta privada dirigida al párroco del municipio."
      },
      {
        "key": "B",
        "text": "Puede otorgarse mediante entrega de mano a mano de las llaves del inmueble sin papeles."
      },
      {
        "key": "C",
        "text": "Debe otorgarse por escritura pública matriz ante notario, y la aceptación del donatario debe constar en la misma escritura o en otra separada debidamente notificada en vida del donante."
      },
      {
        "key": "D",
        "text": "Se requiere únicamente la firma de un agente policial como testigo de honor."
      }
    ],
    "correctKey": "C",
    "explanation": "Los Arts. 1279 y 1290 C.C. imponen la solemnidad de escritura pública para la donación inmobiliaria y para su aceptación. Si la aceptación se otorga por instrumento separado, debe ser formalmente notificada al donante en vida de este para que el contrato se perfeccione.",
    "csjPrecedent": "Sala de lo Civil CSJ: La donación de inmuebles sin escritura matriz o cuya aceptación no fue notificada en vida del donante adolece de nulidad absoluta insanable."
  },
  {
    "id": "not-137",
    "category": "contratos",
    "topic": "Servidumbres Prediales Voluntarias y su Constitución",
    "legalBasis": "Arts. 822 al 840 Código Civil",
    "statement": "Para constituir válidamente una servidumbre voluntaria de tránsito o acueducto entre dos predios pertenecientes a distintos dueños que sea oponible a terceros adquirentes:",
    "options": [
      {
        "key": "A",
        "text": "Debe otorgarse en escritura pública solemne por los propietarios del predio dominante y del predio sirviente e inscribirse en el Registro de la Propiedad Raíz en las matrículas de ambos inmuebles."
      },
      {
        "key": "B",
        "text": "Basta con que el dueño del predio dominante pase caminando por el terreno vecino una vez al mes."
      },
      {
        "key": "C",
        "text": "Se constituye mediante una llamada telefónica amistosa entre ambos vecinos."
      },
      {
        "key": "D",
        "text": "Está prohibido constituir servidumbres voluntarias en el derecho civil salvadoreño."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 822 C.C. define la servidumbre predial como un gravamen impuesto sobre un predio en utilidad de otro predio. Su constitución voluntaria exige escritura matriz de las partes y su doble asiento registral como gravamen en el sirviente y como derecho real accesorio en el dominante.",
    "csjPrecedent": "Sala de lo Civil CSJ: Las servidumbres continuas y aparentes pueden adquirirse por prescripción de 30 años, pero las discontinuas (como la de tránsito) solo pueden adquirirse por título solemne formal inscrito."
  },
  {
    "id": "not-138",
    "category": "contratos",
    "topic": "Mutuo con Garantía Hipotecaria y Prohibición de Usura",
    "legalBasis": "Art. 1954 Código Civil y Ley contra la Usura",
    "statement": "Al autorizar una escritura pública de mutuo con garantía hipotecaria entre particulares, ¿qué límite legal debe vigilar el notario respecto de la tasa de interés pactada?",
    "options": [
      {
        "key": "A",
        "text": "No existe límite de tasas de interés en El Salvador para prestamistas no bancarios."
      },
      {
        "key": "B",
        "text": "El prestamista puede cobrar libremente una tasa del cien por ciento de interés mensual compuesto."
      },
      {
        "key": "C",
        "text": "El notario debe duplicar los intereses para cobrar un porcentaje a su favor."
      },
      {
        "key": "D",
        "text": "Que la tasa de interés efectiva estipulada no supere la Tasa Máxima Legal publicada periódicamente por el Banco Central de Reserva (BCR) conforme a la Ley contra la Usura, bajo pena de ilicitud penal y civil."
      }
    ],
    "correctKey": "D",
    "explanation": "La Ley contra la Usura sanciona el cobro de intereses que excedan las tasas máximas fijadas por el BCR para cada segmento crediticio. El notario que documenta tasas usurarias violando la ley expone la cláusula a nulidad y se arriesga a sanciones disciplinarias y penales por coautoría.",
    "csjPrecedent": "Sala de lo Penal y Sala de lo Civil CSJ: Las cláusulas de interés que exceden las tasas máximas legales de la Ley contra la Usura adolecen de objeto ilícito y nulidad absoluta respecto del exceso pactado."
  },
  {
    "id": "not-139",
    "category": "contratos",
    "topic": "Prohibición del Anatocismo (Intereses sobre Intereses)",
    "legalBasis": "Art. 1967 Código Civil y Art. 963 Código de Comercio",
    "statement": "¿Qué validez tiene en los contratos civiles salvadoreños la estipulación de 'anatocismo' (capitalización automática de intereses moratorios no pagados para que devenguen nuevos intereses)?",
    "options": [
      {
        "key": "A",
        "text": "Se presume pactado en todos los préstamos de más de diez dólares."
      },
      {
        "key": "B",
        "text": "Es plenamente válido y obligatorio en todos los contratos de mutuo civil."
      },
      {
        "key": "C",
        "text": "Está terminantemente prohibido el pacto de pagar intereses sobre intereses en materia civil (Art. 1967 C.C.), sancionándose dicha estipulación con nulidad absoluta de la cláusula de capitalización."
      },
      {
        "key": "D",
        "text": "Solo se prohíbe si el deudor es un militar activo."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 1967 C.C. prohíbe de forma terminante el anatocismo en sede civil: 'Se prohíbe estipular intereses de intereses'. Los intereses atrasados no pueden producir nuevos réditos contra el deudor civil, salvaguardando el equilibrio patrimonial de las partes.",
    "csjPrecedent": "Sala de lo Civil CSJ: La capitalización de intereses en contratos civiles contraviene norma prohibitiva expresa de orden público y vicia de nulidad de pleno derecho la cláusula anatocista."
  },
  {
    "id": "not-140",
    "category": "contratos",
    "topic": "Dación en Pago y su Formalización Notarial",
    "legalBasis": "Arts. 1438 y 1605 Código Civil",
    "statement": "Cuando un deudor conviene con su acreedor en extinguir una obligación dineraria entregándole en propiedad un bien inmueble ('dación en pago'):",
    "options": [
      {
        "key": "A",
        "text": "Debe otorgarse por escritura pública matriz de dación en pago traslativa de dominio e inscribirse en el Registro de la Propiedad Raíz para cancelar la obligación y el gravamen antecedente."
      },
      {
        "key": "B",
        "text": "Basta con entregar las llaves de la casa en la puerta del juzgado de paz."
      },
      {
        "key": "C",
        "text": "La dación en pago es nula porque los contratos solo pueden pagarse con billetes de dólar físico."
      },
      {
        "key": "D",
        "text": "El deudor conserva la propiedad de la casa y el acreedor solo puede mirarla desde la calle."
      }
    ],
    "correctKey": "A",
    "explanation": "La dación en pago (datio in solutum) es una modalidad de pago por sustitución de prestación consentida por el acreedor. Cuando involucra bienes raíces, se somete a las solemnidades de la compraventa: escritura pública matriz inscribible en el CNR.",
    "csjPrecedent": "Sala de lo Civil CSJ: La dación en pago de bienes inmuebles extingue la obligación por satisfacción real del acreedor y transfiere el dominio registral con plenitud de efectos traslativos."
  },
  {
    "id": "not-141",
    "category": "contratos",
    "topic": "Extralimitación de Facultades del Mandatario",
    "legalBasis": "Arts. 1888 y 1918 Código Civil",
    "statement": "Si un apoderado general administrativo cuyo poder no contiene facultad expresa de vender otorga ante notario la compraventa de una finca de su poderdante:",
    "options": [
      {
        "key": "A",
        "text": "El contrato es inoponible y nulo relativamente respecto del poderdante por carencia de facultades dispositivas, respondiendo el mandatario frente al tercero con quien contrató si no le dio suficiente conocimiento de sus poderes."
      },
      {
        "key": "B",
        "text": "El poderdante pierde el inmueble de forma forzosa por haber otorgado cualquier poder."
      },
      {
        "key": "C",
        "text": "El notario autorizante adquiere la propiedad del inmueble en compensación."
      },
      {
        "key": "D",
        "text": "El acto se convalida automáticamente si el comprador paga en monedas de oro."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 1918 C.C. dispone que el mandatario que se extralimita en sus facultades es responsable ante terceros si no les exhibió sus poderes y no vincula al mandante, salvo que este último ratifique de forma expresa el acto dispositivo realizado sin poder suficiente.",
    "csjPrecedent": "Sala de lo Civil CSJ: La enajenación de inmuebles por apoderado sin poder especial expreso para vender constituye defecto sustantivo de inoponibilidad y nulidad que impide la inscripción registral válida."
  },
  {
    "id": "not-142",
    "category": "contratos",
    "topic": "Poder Especial para Contraer Matrimonio",
    "legalBasis": "Art. 30 Código de Familia",
    "statement": "¿Bajo qué requisitos formales puede otorgarse un poder ante notario para que un mandatario comparezca a contraer matrimonio a nombre del poderdante ausente?",
    "options": [
      {
        "key": "A",
        "text": "Basta con una carta simple enviada por correo electrónico común."
      },
      {
        "key": "B",
        "text": "Debe otorgarse en escritura pública solemne especial con designación de la persona determinada con quien ha de celebrarse el matrimonio y consignación de las circunstancias de identidad indispensables."
      },
      {
        "key": "C",
        "text": "Cualquier poder general judicial sirve para casarse en nombre de otro sin cláusula especial."
      },
      {
        "key": "D",
        "text": "Está prohibido contraer matrimonio por poder en la República de El Salvador."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 30 del Código de Familia autoriza el matrimonio por poder: el mandato debe constar en escritura pública solemne y contener el nombre y generales de la persona con quien se ha de contraer nupcias, siendo un poder especialísimo e indelegable.",
    "csjPrecedent": "Sala de lo Civil CSJ: El matrimonio celebrado por apoderado cuyo poder omitió identificar individualmente al cónyuge contrayente adolece de nulidad por falta de consentimiento matrimonial válido."
  },
  {
    "id": "not-143",
    "category": "contratos",
    "topic": "Fianza Civil y Beneficio de Excusión",
    "legalBasis": "Arts. 2086 y 2107 Código Civil",
    "statement": "¿En qué consiste el Beneficio de Excusión que asiste al fiador simple civil conforme al Artículo 2107 del Código Civil?",
    "options": [
      {
        "key": "A",
        "text": "En la exoneración total de la fianza si el acreedor es una persona de mayor edad."
      },
      {
        "key": "B",
        "text": "En el derecho del fiador de quedarse con todas las pertenencias del deudor de forma sumaria."
      },
      {
        "key": "C",
        "text": "En la facultad de exigir que el acreedor persiga y agote previamente el cobro coactivo sobre los bienes del deudor principal antes de proceder ejecutivamente contra el patrimonio del fiador."
      },
      {
        "key": "D",
        "text": "En obligar a que el acreedor le pague un salario mensual al fiador por ser su amigo."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 2107 C.C. consagra el beneficio de excusión: el fiador simple no puede ser compelido al pago mientras el acreedor no haya realizado embargo y persecución de los bienes del deudor principal afianzado, salvo renuncia expresa o fianza solidaria.",
    "csjPrecedent": "Sala de lo Civil CSJ: El beneficio de excusión debe ser opuesto por el fiador en la contestación de la demanda señalando bienes realizables del deudor principal sitos en el territorio nacional."
  },
  {
    "id": "not-144",
    "category": "contratos",
    "topic": "Anticresis sobre Inmuebles y sus Solemnidades",
    "legalBasis": "Arts. 2181 al 2191 Código Civil",
    "statement": "En el contrato de anticresis civil regulado por el Artículo 2181 del Código Civil:",
    "options": [
      {
        "key": "A",
        "text": "Solo puede celebrarse verbalmente en días festivos oficiales."
      },
      {
        "key": "B",
        "text": "El deudor regala la casa al acreedor sin obligación de devolverla jamás."
      },
      {
        "key": "C",
        "text": "El acreedor está autorizado a destruir la vivienda para sembrar maíz."
      },
      {
        "key": "D",
        "text": "Se entrega un inmueble al acreedor para que se pague con sus frutos y rentas, debiendo otorgarse por escritura pública solemne e inscribirse en el CNR para ser oponible a terceros."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 2181 C.C. define la anticresis como un contrato por el que se entrega al acreedor una finca raíz para que se pague con sus frutos. Para oponerse a futuros adquirentes e hipotecarios, debe formalizarse en escritura matriz e inscribirse en el Registro de la Propiedad Raíz.",
    "csjPrecedent": "Sala de lo Civil CSJ: La anticresis no otorga derecho real sobre el inmueble si no consta otorgada en escritura pública inscrita en el registro inmobiliario correspondiente."
  },
  {
    "id": "not-145",
    "category": "contratos",
    "topic": "Tracto Sucesivo y Fe Pública Registral Inmobiliaria",
    "legalBasis": "Ley de Reestructuración del Registro de la Propiedad Raíz y Art. 680 Código Civil",
    "statement": "¿Cómo protege el principio de Fe Pública Registral al tercero de buena fe que adquiere un inmueble confiando en los asientos del CNR?",
    "options": [
      {
        "key": "A",
        "text": "El Registro indemniza con un millón de dólares a cualquier comprador que se queje."
      },
      {
        "key": "B",
        "text": "El tercero que adquiere a título oneroso confiando en lo que consta en el Registro de la Propiedad no podrá ser perjudicado por causas de nulidad o resoluciones no inscritas ni advertidas en los asientos registrales previos."
      },
      {
        "key": "C",
        "text": "El comprador adquiere la propiedad del palacio municipal de la ciudad."
      },
      {
        "key": "D",
        "text": "Los asientos registrales no tienen ningún valor legal frente a escrituras privadas escondidas."
      }
    ],
    "correctKey": "B",
    "explanation": "El principio de fe pública registral protege la seguridad jurídica del tráfico inmobiliario: lo que no está inscrito no perjudica al tercero de buena fe a título oneroso que contrata sobre la base de la titularidad registral legítima vigente en el CNR.",
    "csjPrecedent": "Sala de lo Civil CSJ: El adquirente de buena fe a título oneroso amparado por los asientos del Registro de la Propiedad está protegido contra reclamaciones fundadas en vicios o gravámenes extrarregistrales no publicitados."
  },
  {
    "id": "not-146",
    "category": "contratos",
    "topic": "Contrato de Arrendamiento con Plazo Mayor a Tres Años",
    "legalBasis": "Art. 686 numeral 2° Código Civil",
    "statement": "¿Por qué es preceptivo que los contratos de arrendamiento sobre bienes inmuebles pactados por un plazo mayor de tres años o con anticipos de renta se otorguen en escritura pública e inscriban en el CNR?",
    "options": [
      {
        "key": "A",
        "text": "Para que el arrendante no tenga que pagar impuestos municipales."
      },
      {
        "key": "B",
        "text": "Para que el inquilino pase a ser el dueño legítimo de la casa arrendada."
      },
      {
        "key": "C",
        "text": "Para ser oponibles frente a futuros terceros adquirentes del inmueble, quienes estarán legalmente obligados a respetar el plazo del arrendamiento pactado si consta debidamente inscrito."
      },
      {
        "key": "D",
        "text": "Porque los contratos de menos de tres años son delitos penales."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 686 Ord. 2° C.C. ordena la inscripción de los contratos de arrendamiento que excedan de tres años o en que se anticipen rentas por más de dicho lapso; su inscripción en el CNR asegura que si el dueño vende el inmueble, el nuevo adquirente deba respetar forzosamente el plazo arrendaticio.",
    "csjPrecedent": "Sala de lo Civil CSJ: El arrendamiento no inscrito no vincula al nuevo comprador del inmueble, quien puede desalojar al inquilino mediando aviso legal oportuno."
  },
  {
    "id": "not-147",
    "category": "contratos",
    "topic": "Transacción Notarial de Litigios Pendientes o Eventuales",
    "legalBasis": "Arts. 2192 al 2205 Código Civil",
    "statement": "¿Qué requisitos sustantivos y solemnidades exige la ley civil para formalizar un contrato de transacción extrajudicial sobre litigios pendientes o eventuales ante notario?",
    "options": [
      {
        "key": "A",
        "text": "Debe constar en escritura pública matriz o acta notarial cuando involucre derechos reales o materias complejas, implicando concesiones recíprocas entre las partes con capacidad dispositiva sobre el objeto litigioso."
      },
      {
        "key": "B",
        "text": "Basta con una promesa verbal sellada con un apretón de manos en una cantina."
      },
      {
        "key": "C",
        "text": "Solo puede transigirse sobre delitos penales de homicidio para evitar el juicio criminal."
      },
      {
        "key": "D",
        "text": "La transacción transfiere la personalidad jurídica de ambas partes al notario autorizante."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 2192 C.C. define la transacción como un contrato en que las partes terminan extrajudicialmente un litigio pendiente o precaven un litigio eventual haciéndose recíprocas concesiones. Produce entre las partes la eficacia y autoridad de cosa juzgada material.",
    "csjPrecedent": "Sala de lo Civil CSJ: La transacción válidamente otorgada en escritura matriz produce el efecto de cosa juzgada sustancial e impide la reapertura judicial de las pretensiones transigidas."
  },
  {
    "id": "not-148",
    "category": "contratos",
    "topic": "Novación Objetiva de Obligaciones",
    "legalBasis": "Arts. 1498 al 1521 Código Civil",
    "statement": "¿En qué consiste la novación objetiva por cambio de objeto o de causa y cuál es su efecto formal respecto de las hipotecas accesorias que garantizaban la deuda primitiva?",
    "options": [
      {
        "key": "A",
        "text": "La novación solo puede ser otorgada por personas menores de catorce años."
      },
      {
        "key": "B",
        "text": "La novación duplica automáticamente todas las deudas y multas anteriores."
      },
      {
        "key": "C",
        "text": "Las hipotecas se trasladan de pleno derecho sobre la vivienda de los testigos instrumentales."
      },
      {
        "key": "D",
        "text": "Consiste en sustituir la obligación primitiva por una nueva obligación extinguiendo la primera; las hipotecas y prendas accesorias de la obligación extinguida no pasan a la nueva obligación salvo reserva expresa consentida por el dueño del bien."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 1498 C.C. define la novación como la sustitución de una nueva obligación a otra anterior, la cual queda extinguida. Por el principio de accesoriedad, las garantías reales primitivas se extinguen ipso facto con la obligación principal novada, salvo pacto expreso de reserva hipotecaria (Art. 1515 C.C.).",
    "csjPrecedent": "Sala de lo Civil CSJ: La extinción de la obligación primigenia por novación extingue las hipotecas accesorias preexistentes, a menos que el deudor y el constituyente consientan formalmente en la reserva de rango."
  },
  {
    "id": "not-149",
    "category": "contratos",
    "topic": "Poder Especial para Donar Bienes",
    "legalBasis": "Art. 1888 Código Civil y Art. 1290 Código Civil",
    "statement": "Si un poderdante desea que un apoderado otorgue una donación entre vivos de una finca de su propiedad a favor de una fundación benéfica:",
    "options": [
      {
        "key": "A",
        "text": "El mandatario puede donar la finca a favor de su propio hijo menor de edad."
      },
      {
        "key": "B",
        "text": "Basta con un poder general judicial estándar sin cláusula especial de donación."
      },
      {
        "key": "C",
        "text": "El poder debe ser especialísimo, designando con exactitud el bien singular a donarse y el nombre individualizado del donatario beneficiario, careciendo de valor un poder con facultades de donar genéricas e indeterminadas."
      },
      {
        "key": "D",
        "text": "La donación por apoderado está prohibida en todo el continente americano."
      }
    ],
    "correctKey": "C",
    "explanation": "La gratuidad de la donación exige manifestación de voluntad inequívoca. El poder para donar debe ser especial e individualizado, especificando el bien exacto y la persona del donatario para impedir que el mandatario dilapide el patrimonio del mandante.",
    "csjPrecedent": "Sala de lo Civil CSJ: La donación de inmuebles por apoderado facultado de forma genérica o sin designación del donatario adolece de nulidad absoluta por falta de consentimiento de la liberalidad."
  },
  {
    "id": "not-150",
    "category": "contratos",
    "topic": "Cesión de Derechos Litigiosos en Sede Notarial",
    "legalBasis": "Arts. 1699 al 1702 Código Civil",
    "statement": "¿En qué momento procesal se considera litigioso un derecho para poder ser cedido ante notario conforme al Artículo 1699 del Código Civil?",
    "options": [
      {
        "key": "A",
        "text": "Desde que se notifica judicialmente la demanda a la parte demandada, requiriendo que la cesión conste por instrumento público o privado incorporado formalmente a los autos del proceso."
      },
      {
        "key": "B",
        "text": "Desde el momento en que dos personas discuten verbalmente en una parada de autobús."
      },
      {
        "key": "C",
        "text": "Únicamente después de haber sido dictada la sentencia definitiva ejecutoriada."
      },
      {
        "key": "D",
        "text": "Nunca, porque los pleitos judiciales son intransferibles e inalienables en El Salvador."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 1699 C.C. precisa que un derecho se tiene por litigioso desde que se notifica formalmente la demanda de fondo en el juzgado, habilitándose el derecho de rescate litigioso a favor del deudor demandado para librarse pagando al cesionario lo que este realmente pagó por el crédito cedido.",
    "csjPrecedent": "Sala de lo Civil CSJ: La cesión de derechos litigiosos opera a partir de la traba formal de la litis con el emplazamiento judicial, rigiéndose por las normas especiales del Código Civil."
  },
  {
    "id": "not-151",
    "category": "contratos",
    "topic": "Pacto de Reserva de Dominio en Bienes Inmuebles",
    "legalBasis": "Art. 1629 Código Civil",
    "statement": "¿Qué regla imperativa establece el Código Civil salvadoreño respecto de la cláusula de 'no transferir el dominio sino en virtud de la paga del precio' (reserva de dominio) en la venta de bienes raíces?",
    "options": [
      {
        "key": "A",
        "text": "La cláusula de no transferirse el dominio sino en virtud del pago del precio no producirá otro efecto que el de la demanda alternativa de resolución o cumplimiento con indemnización, transfiriéndose la propiedad con la tradición solemne inscrita."
      },
      {
        "key": "B",
        "text": "La reserva de dominio impide que el comprador habite la casa hasta que pague el último centavo."
      },
      {
        "key": "C",
        "text": "El comprador pasa a ser inquilino precario del vendedor sin derechos civiles."
      },
      {
        "key": "D",
        "text": "La reserva de dominio es obligatoria en todas las compraventas inmobiliarias del país."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 1629 C.C. consagra que en materia de bienes raíces, la cláusula de reserva de dominio no retiene la propiedad si se ha realizado la tradición solemne de escritura e inscripción; el vendedor conserva únicamente la acción resolutoria o de cobro forzoso del saldo insoluto.",
    "csjPrecedent": "Sala de lo Civil CSJ: La tradición solemne inscrita transfiere el dominio real sobre inmuebles con independencia de la cláusula de no enajenar o reserva de dominio estipulada en la matriz."
  },
  {
    "id": "not-152",
    "category": "contratos",
    "topic": "Rescisión de Compraventa por Error en la Calidad Esencial",
    "legalBasis": "Art. 1324 Código Civil",
    "statement": "Si un comprador adquiere un terreno rústico ante notario creyendo de buena fe que cuenta con pozo de agua potable inscrito y aptitud para cultivo, pero el vendedor ocultó dolosamente que se trata de un salitral estéril e inundable:",
    "options": [
      {
        "key": "A",
        "text": "El comprador pierde el dinero y debe construir un canal interoceánico en el salitral."
      },
      {
        "key": "B",
        "text": "El comprador puede demandar la rescisión del contrato por error sustancial o dolo en la calidad esencial del objeto, que vició su consentimiento al tiempo de celebrar la escritura."
      },
      {
        "key": "C",
        "text": "El notario debe ser condenado a trabajar la tierra con arado manual."
      },
      {
        "key": "D",
        "text": "El contrato es inimpugnable porque las escrituras notariales son intocables."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 1324 C.C. estipula que el error de hecho vicia el consentimiento cuando recae sobre la sustancia o calidad esencial del objeto sobre el que versa el acto. El dolo o error inducido acarrea la nulidad relativa y rescisión con resarcimiento de daños y perjuicios.",
    "csjPrecedent": "Sala de lo Civil CSJ: El error sustancial sobre las cualidades esenciales del bien raíz objeto de compraventa engendra nulidad relativa y habilita la acción rescisoria judicial correspondiente."
  },
  {
    "id": "not-153",
    "category": "contratos",
    "topic": "Poder para Celebrar Contratos consigo Mismo (Auto-Contratación)",
    "legalBasis": "Art. 1904 Código Civil y Código de Comercio",
    "statement": "¿Puede un apoderado general comprar para sí mismo los bienes raíces de su poderdante o vender sus propios bienes al mandante en ejercicio de su mandato?",
    "options": [
      {
        "key": "A",
        "text": "Basta con que el apoderado firme con la mano izquierda como apoderado y con la derecha como comprador."
      },
      {
        "key": "B",
        "text": "Sí, el mandatario tiene libertad absoluta para venderse todo el patrimonio del mandante a precio simbólico."
      },
      {
        "key": "C",
        "text": "No puede comprar para sí lo que el poderdante le ha ordenado vender, ni vender de lo suyo al poderdante lo que este le ha ordenado comprar, salvo aprobación y autorización expresa de este en el instrumento de poder."
      },
      {
        "key": "D",
        "text": "La auto-contratación está permitida sin ninguna restricción legal ni control."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 1904 C.C. proscribe la auto-contratación o contrato consigo mismo por evidente conflicto de intereses: el mandatario no puede adquirir para su propio patrimonio los bienes encargados en venta sin autorización expresa y formal del poderdante en el mandato matriz.",
    "csjPrecedent": "Sala de lo Civil CSJ: La auto-contratación realizada por apoderado sin autorización expresa previa del mandante es nula relativamente por infracción de norma prohibitiva protectora."
  },
  {
    "id": "not-154",
    "category": "contratos",
    "topic": "Resolución de Compraventa e Impacto sobre Terceros Poseedores",
    "legalBasis": "Arts. 1361 y 1362 Código Civil",
    "statement": "Si se declara judicialmente la resolución de una escritura de compraventa de un bien inmueble por falta de pago del precio pactado:",
    "options": [
      {
        "key": "A",
        "text": "La resolución cancela automáticamente la propiedad de todas las casas del vecindario."
      },
      {
        "key": "B",
        "text": "El vendedor puede desalojar a la fuerza a cualquier tercero sin orden judicial."
      },
      {
        "key": "C",
        "text": "Todos los terceros poseedores deben ser fusilados de forma sumaria."
      },
      {
        "key": "D",
        "text": "No habrá derecho contra terceros poseedores sino cuando la condición resolutoria o el pacto comisorio constaba debidamente inscrito en el título de propiedad en el Registro de la Propiedad Raíz (Art. 1362 C.C.)."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 1362 C.C. tutela la fe pública registral: la resolución judicial del contrato solo afecta a terceros que adquirieron derechos sobre el inmueble si la condición constaba inscrita en el registro inmobiliario; si la condición no constaba en el asiento registral, el tercero de buena fe es inatacable.",
    "csjPrecedent": "Sala de lo Civil CSJ: La acción reivindicatoria contra terceros poseedores fundada en resolución contractual exige que el gravamen o condición resolutoria haya sido oportunamente publicitado en el CNR."
  },
  {
    "id": "not-155",
    "category": "contratos",
    "topic": "Comodato Precario y Desalojo de Inmuebles",
    "legalBasis": "Arts. 1932 al 1953 Código Civil",
    "statement": "Cuando una persona permite gratuitamente y por mera tolerancia a un pariente o amigo habitar un inmueble de su propiedad sin contrato previo ni fijación de plazo ('comodato precario'):",
    "options": [
      {
        "key": "A",
        "text": "El ocupante precario se convierte en propietario automático al transcurrir un mes de habitarla."
      },
      {
        "key": "B",
        "text": "El comodante puede recobrar la posesión y exigir la restitución del inmueble en cualquier momento a su arbitrio, bastando el requerimiento formal para que cese la tenencia precaria."
      },
      {
        "key": "C",
        "text": "El comodante debe pagar una indemnización de cien mil dólares al habitante precario."
      },
      {
        "key": "D",
        "text": "La casa pasa a ser propiedad de la policía nacional civil."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 1952 C.C. define el comodato precario: no se presta la cosa para un servicio particular ni se fija tiempo para su restitución, o se goza de la cosa ajena por mera tolerancia del dueño. El dueño conserva el derecho inmanente de pedir la devolución de su bien en cualquier instante.",
    "csjPrecedent": "Sala de lo Civil CSJ: En el comodato precario, el propietario acreditado con título inscrito puede reclamar la restitución del inmueble mediante el proceso común declarativo de desalojo por tenencia precaria."
  },
  {
    "id": "not-156",
    "category": "contratos",
    "topic": "Efecto de la Simulación Ilícita en Contratos Notariales",
    "legalBasis": "Art. 1551 Código Civil y Jurisprudencia Civil",
    "statement": "Si dos otorgantes simulan celebrar una escritura de compraventa con pacto de retroventa para encubrir un préstamo de dinero con intereses usurarios que despoja al deudor de su vivienda:",
    "options": [
      {
        "key": "A",
        "text": "El prestamista usurero adquiere la inmunidad civil absoluta del acto."
      },
      {
        "key": "B",
        "text": "El contrato es intocable porque fue firmado en protocolo notarial sellado."
      },
      {
        "key": "C",
        "text": "La compraventa simulada adolece de causa ilícita y nulidad absoluta, pudiendo la víctima demandar la declaratoria de simulación contractual y nulidad para que aflore la verdadera naturaleza del préstamo con restitución del bien."
      },
      {
        "key": "D",
        "text": "El notario está autorizado a quemar la escritura para no dar explicaciones."
      }
    ],
    "correctKey": "C",
    "explanation": "La simulación relativa ilícita que encubre usura o despojo patrimonial con causa ilícita acarrea la nulidad de pleno derecho del negocio disimulado simulado (Arts. 1316 y 1551 C.C.), protegiendo el ordenamiento la prevalencia de la verdad material sobre las apariencias formales de protocolo.",
    "csjPrecedent": "Sala de lo Civil CSJ Ref. 110-CAC-2017: Acreditada pericial y testimonial mente la simulación relativa de compraventa con retroventa que oculta mutuo usurario, procede declarar la nulidad absoluta del negocio aparente y la restitución del inmueble."
  },
  {
    "id": "not-157",
    "category": "contratos",
    "topic": "Cancelación de Hipotecas por Pago Total",
    "legalBasis": "Arts. 743 y 2180 Código Civil",
    "statement": "Al extinguirse la deuda principal mediante el pago íntegro del crédito garantizado, ¿qué instrumento solemne debe autorizar el acreedor hipotecario ante notario?",
    "options": [
      {
        "key": "A",
        "text": "Escritura pública matriz de cancelación de hipoteca extendiendo formal finiquito y otorgando testimonio para su marginación y cancelación en el Registro de la Propiedad Raíz del CNR."
      },
      {
        "key": "B",
        "text": "Basta con romper el primer testimonio en pedazos en la oficina del banco."
      },
      {
        "key": "C",
        "text": "Se envía un correo electrónico al registrador diciendo 'la deuda ya está pagada'."
      },
      {
        "key": "D",
        "text": "El deudor debe esperar cincuenta años a que el gravamen se borre solo."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 2180 C.C. y la Ley de Procedimientos Registrales exigen que la extinción registral de la hipoteca se instrumente mediante escritura pública de cancelación otorgada por el acreedor, librándose el testimonio de ley para la cancelación de la hipoteca en la matrícula del inmueble.",
    "csjPrecedent": "Criterio Registral CNR y Sala de lo Civil CSJ: La cancelación registral de gravámenes hipotecarios requiere titulación auténtica en escritura pública con finiquito expreso otorgado por el titular del crédito."
  },
  {
    "id": "not-158",
    "category": "contratos",
    "topic": "Prohibición de Enajenar en Cláusulas Contractuales",
    "legalBasis": "Art. 736 Código Civil",
    "statement": "¿Qué validez reconoce la legislación civil salvadoreña a las cláusulas testamentarias o contractuales que prohíben de forma absoluta y perpetua al adquirente enajenar o vender el inmueble transferido?",
    "options": [
      {
        "key": "A",
        "text": "Se sanciona al comprador con prisión si intenta vender el terreno."
      },
      {
        "key": "B",
        "text": "Es plenamente válida y el inmueble jamás podrá ser vendido en mil años."
      },
      {
        "key": "C",
        "text": "El inmueble se transfiere de inmediato a la Iglesia Católica."
      },
      {
        "key": "D",
        "text": "La cláusula de no enajenar perpetua o por tiempo indeterminado se tiene por no puesta y es ineficaz, al atentar contra la libre circulación de la riqueza y el derecho de propiedad constitucional (Art. 736 C.C.)."
      }
    ],
    "correctKey": "D",
    "explanation": "El principio liberal y constitucional de libre circulación de los bienes raíces proscribe la inalienabilidad voluntaria perpetua. El Art. 736 C.C. y la doctrina civil salvadoreña tienen por no puestas las prohibiciones absolutas de enajenar, salvo las afectaciones temporales de bien de familia o prohibiciones legales expresas.",
    "csjPrecedent": "Sala de lo Civil CSJ: Las cláusulas contractuales que prohíben de modo absoluto enajenar bienes inmuebles infringen el régimen de libre disponibilidad del dominio y carecen de eficacia registral."
  },
  {
    "id": "not-159",
    "category": "contratos",
    "topic": "Mutuo entre Cónyuges y Capitulaciones Matrimoniales",
    "legalBasis": "Art. 1600 Código Civil y Código de Familia",
    "statement": "Conforme al derecho civil y de familia salvadoreño, ¿pueden dos cónyuges celebrar válidamente entre sí contratos de mutuo con garantía hipotecaria sobre inmuebles bajo régimen de separación de bienes?",
    "options": [
      {
        "key": "A",
        "text": "Solo si el contrato es firmado en presencia del obispo de la diócesis."
      },
      {
        "key": "B",
        "text": "No, los esposos tienen prohibido prestarse dinero entre sí bajo pena de divorcio forzoso."
      },
      {
        "key": "C",
        "text": "Sí, bajo el régimen patrimonial de separación de bienes cada cónyuge conserva la libre administración y disposición de su patrimonio, pudiendo celebrar contratos válidos entre sí que no contravengan la ley."
      },
      {
        "key": "D",
        "text": "Los bienes de ambos pasan automáticamente a ser propiedad del primer hijo que nazca."
      }
    ],
    "correctKey": "C",
    "explanation": "El Código de Familia superó las antiguas incapacidades contractuales entre cónyuges bajo regímenes de separación patrimonial: cada cónyuge mantiene su capacidad civil negocial intacta para contratar, comprar, prestar y garantizar obligaciones crediticias legítimas entre sí.",
    "csjPrecedent": "Sala de lo Civil CSJ: La autonomía patrimonial en el régimen de separación de bienes permite la celebración de contratos bilaterales válidos entre cónyuges sin afectación del estado familiar."
  },
  {
    "id": "not-160",
    "category": "contratos",
    "topic": "Responsabilidad Notarial por Omisión de Cláusula de Conclusión",
    "legalBasis": "Art. 32 numeral 12° Ley de Notariado y Art. 1552 Código Civil",
    "statement": "Si una escritura pública matriz de mutuo hipotecario de quinientos mil dólares concluye sin dar fe de haber sido leída a los otorgantes ni consignar si ratifican su contenido antes de las firmas:",
    "options": [
      {
        "key": "A",
        "text": "Incurre en omisión de solemnidad formal esencial que expone el instrumento a nulidad absoluta y al notario a suspensión profesional e indemnización de daños y perjuicios."
      },
      {
        "key": "B",
        "text": "Es una formalidad irrelevante que no afecta la validez del título ejecutivo."
      },
      {
        "key": "C",
        "text": "El banco acreedor se apropia de la casa sin necesidad de demandar en juicio."
      },
      {
        "key": "D",
        "text": "Se condena al deudor al pago del triple de los intereses pactados."
      }
    ],
    "correctKey": "A",
    "explanation": "La cláusula de conclusión notarial (Art. 32 Ord. 12° LN) es la coronación sacramental de la fe pública: la dación de fe de lectura íntegra, ratificación, otorgamiento y firma es requisito ad solemnitatem esencial cuya omisión invalida el instrumento público y acarrea responsabilidad directa al notario.",
    "csjPrecedent": "Corte Plena CSJ: La autorización de escrituras matrices con omisión total o parcial de la cláusula solemne de conclusión del Art. 32 LN constituye falta gravísima contra la fe pública sancionable con suspensión."
  },
  {
    "id": "not-161",
    "category": "mercantil",
    "topic": "Constitución de Sociedades Mercantiles (S.A. de C.V.)",
    "legalBasis": "Arts. 22, 192 y 195 Código de Comercio",
    "statement": "Al autorizar la escritura matriz de constitución de una Sociedad Anónima de Capital Variable (S.A. de C.V.), ¿qué formalidad esencial sobre el capital social fundacional debe comprobar fehacientemente y consignar el notario?",
    "options": [
      {
        "key": "A",
        "text": "Dar fe de haber tenido a la vista el cheque certificado o de caja a favor de la sociedad en formación por el monto del capital mínimo pagado (mínimo de $2,000 USD de capital social con al menos el 5% efectivamente desembolsado), relacionando sus datos en la matriz."
      },
      {
        "key": "B",
        "text": "Dar fe de que los accionistas pagarán el capital mediante pagarés comerciales a la orden con vencimiento a cinco años."
      },
      {
        "key": "C",
        "text": "Consignar que el capital puede ser fijado en cualquier monto inferior a cien dólares sin cheque bancario."
      },
      {
        "key": "D",
        "text": "Hacer constar únicamente una declaración jurada simple de solvencia económica emitida por un contador independiente."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 195 del Código de Comercio y los criterios del Registro de Comercio del CNR exigen que el capital social fundacional mínimo sea de dos mil dólares, pagándose al menos el 5% en efectivo al constituirse, exigiendo al notario dar fe de tener a la vista el cheque certificado o cheque de caja bancario respectivo e incorporarlo en el texto de la escritura.",
    "csjPrecedent": "Criterio Registral Vinculante CNR y Sala de lo Civil CSJ: La omisión de relacionar el título de pago efectivo o cheque certificado del capital fundacional impide la inscripción registral y evidencia negligencia formal del notario autorizante."
  },
  {
    "id": "not-162",
    "category": "mercantil",
    "topic": "Sociedad por Acciones Simplificada (S.A.S.) y Régimen Especial",
    "legalBasis": "Reformas al Código de Comercio y Ley de Sociedades por Acciones Simplificadas",
    "statement": "Con las reformas mercantiles que crearon la Sociedad por Acciones Simplificada (S.A.S.) en El Salvador, ¿cuál es la principal flexibilización en su constitución?",
    "options": [
      {
        "key": "A",
        "text": "Exige obligatoriamente quinientos accionistas fundadores y diez millones de dólares en efectivo."
      },
      {
        "key": "B",
        "text": "Puede constituirse por una sola persona (unipersonal) o varias personas naturales o jurídicas mediante documento privado con certificación notarial de firmas o en escritura pública, sin exigir el capital mínimo fundacional de dos mil dólares."
      },
      {
        "key": "C",
        "text": "Solo puede ser constituida por extranjeros que no residan en Centroamérica."
      },
      {
        "key": "D",
        "text": "Está prohibida la realización de actos de comercio por medio de una S.A.S."
      }
    ],
    "correctKey": "B",
    "explanation": "La Ley de Sociedades por Acciones Simplificadas modernizó el régimen societario salvadoreño: permite la S.A.S. unipersonal o pluripersonal, se formaliza por documento privado autenticado o escritura matriz y no impone el capital mínimo rígido de $2,000 USD, agilizando el emprendimiento formal.",
    "csjPrecedent": "Criterio Registral CNR: Las Sociedades por Acciones Simplificadas (S.A.S.) se inscriben en el Registro de Comercio mediante documento privado autenticado notarialmente o instrumento público."
  },
  {
    "id": "not-163",
    "category": "mercantil",
    "topic": "Régimen de Capital Variable en Sociedades Anónimas",
    "legalBasis": "Arts. 306 al 317 Código de Comercio",
    "statement": "¿Cómo opera la modalidad de Capital Variable (S.A. de C.V.) según el Artículo 306 del Código de Comercio?",
    "options": [
      {
        "key": "A",
        "text": "La sociedad no tiene capital fijo ni bienes y no responde por sus deudas comerciales."
      },
      {
        "key": "B",
        "text": "El capital social cambia de valor cada hora según el precio internacional del petróleo."
      },
      {
        "key": "C",
        "text": "El capital social es susceptible de aumento por aportaciones posteriores o admisión de nuevos socios y de disminución por retiro o reembolso de aportaciones, sin necesidad de reformar la escritura de constitución ni otorgar nueva escritura matriz, dentro de los límites estatutarios."
      },
      {
        "key": "D",
        "text": "El capital variable solo puede pagarse en billetes de lotería premiados."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 306 C.Com. define las sociedades de capital variable: permiten aumentos y reducciones de capital en la parte variable mediante simples acuerdos de Junta General de Accionistas asentados en el Libro respectivo, sin la solemnidad ni costo de otorgar escrituras públicas de modificación ni publicaciones registrales engorrosas.",
    "csjPrecedent": "Sala de lo Civil CSJ: En las sociedades de capital variable, los aumentos dentro del límite variable no requieren reforma de pacto social en escritura pública para surtir plenos efectos corporativos internos."
  },
  {
    "id": "not-164",
    "category": "mercantil",
    "topic": "Aumento de Capital Social Fijo y Protección de Acreedores",
    "legalBasis": "Arts. 176 y 182 Código de Comercio",
    "statement": "Cuando una Sociedad Anónima acuerda modificar su escritura de constitución aumentando o disminuyendo su Capital Social Fijo:",
    "options": [
      {
        "key": "A",
        "text": "El notario puede decidir unilateralmente el nuevo capital sin consultar a los socios."
      },
      {
        "key": "B",
        "text": "Basta con publicar una nota en la cartelera de avisos del comedor de la empresa."
      },
      {
        "key": "C",
        "text": "Se puede hacer verbalmente sin necesidad de asamblea ni libros corporativos."
      },
      {
        "key": "D",
        "text": "El acuerdo de Junta General Extraordinaria de Accionistas debe formalizarse en escritura pública matriz otorgada ante notario e inscribirse en el Registro de Comercio, previa publicación de edictos protectores para acreedores en caso de reducción."
      }
    ],
    "correctKey": "D",
    "explanation": "La alteración del capital social mínimo fijo altera la garantía patrimonial frente a terceros acreedores. Conforme a los Arts. 176 y 182 C.Com., requiere Junta General Extraordinaria, escritura matriz de modificación de pacto social y publicaciones de ley antes de su inscripción en el CNR.",
    "csjPrecedent": "Criterio Registral CNR y Sala de lo Civil CSJ: La disminución del capital social fijo sin las publicaciones de ley en el Diario Oficial vulnera el derecho de oposición de los acreedores mercantiles."
  },
  {
    "id": "not-165",
    "category": "mercantil",
    "topic": "Derecho de Suscripción Preferente de los Accionistas",
    "legalBasis": "Art. 176 Código de Comercio",
    "statement": "En los aumentos de capital social por aportación en efectivo en una Sociedad Anónima, ¿qué derecho consagra la ley a favor de los accionistas preexistentes?",
    "options": [
      {
        "key": "A",
        "text": "La obligación forzosa de donar todas sus acciones viejas al presidente de la directiva."
      },
      {
        "key": "B",
        "text": "El derecho de suscripción preferente para suscribir y pagar las nuevas acciones en proporción directa al número de acciones que ya posean en la sociedad, dentro del plazo estatutario o legal de quince días."
      },
      {
        "key": "C",
        "text": "El derecho de exigir que el Estado pague el valor de las nuevas acciones."
      },
      {
        "key": "D",
        "text": "Los accionistas viejos quedan expulsados de la sociedad de forma automática."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 176 C.Com. tutela el derecho de preferencia o de suscripción preferente: evita que los socios fundadores sean diluidos arbitrariamente en su cuota de participación y control corporativo al aumentarse el capital, garantizándoles la primera opción de suscripción.",
    "csjPrecedent": "Sala de lo Civil CSJ: La emisión y colocación de nuevas acciones omitiendo el derecho de suscripción preferente de los socios accionistas adolece de nulidad por vulneración de derechos de socio indisponibles."
  },
  {
    "id": "not-166",
    "category": "mercantil",
    "topic": "Libros Corporativos Obligatorios en Sociedades de Capital",
    "legalBasis": "Art. 40 y Art. 150 Código de Comercio",
    "statement": "¿Cuáles son los libros de control corporativo que toda Sociedad Anónima está obligada a llevar debidamente legalizados en El Salvador?",
    "options": [
      {
        "key": "A",
        "text": "Solo se exige un cuaderno escolar rayado sin ninguna formalidad ni legalización."
      },
      {
        "key": "B",
        "text": "Un libro de cuentos infantiles y un recetario de cocina industrial."
      },
      {
        "key": "C",
        "text": "Libro de Actas de Juntas Generales, Libro de Actas de Junta Directiva (o Administración Única), Libro de Registro de Accionistas y Libro de Aumentos y Disminuciones de Capital."
      },
      {
        "key": "D",
        "text": "Las sociedades mercantiles no están obligadas a llevar ningún libro corporativo."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 40 y Art. 150 C.Com. mandan que toda sociedad de capital lleve con rigor sus libros corporativos legalizados por contador público autorizado o notario: Actas de Asamblea, Registro de Accionistas nominativos y Registro de Variaciones de Capital.",
    "csjPrecedent": "Criterio Registral CNR y Sala de lo Civil CSJ: Los acuerdos de accionistas y la titularidad de acciones solo se prueban legítimamente mediante las certificaciones de los asientos de los libros corporativos de ley."
  },
  {
    "id": "not-167",
    "category": "mercantil",
    "topic": "Títulos Valores y Principio de Literalidad",
    "legalBasis": "Arts. 623 al 634 Código de Comercio",
    "statement": "¿Qué alcance tiene el principio cambiario de 'Literalidad' consagrado en el Artículo 634 del Código de Comercio sobre los títulos valores?",
    "options": [
      {
        "key": "A",
        "text": "El tenor literal del documento determina de forma exclusiva y concluyente el alcance, medida, modalidades y exigibilidad de los derechos y obligaciones incorporados en el título."
      },
      {
        "key": "B",
        "text": "El acreedor puede cobrar verbalmente el triple de lo que dice el texto escrito."
      },
      {
        "key": "C",
        "text": "El documento solo tiene valor si fue escrito en letras góticas medievales."
      },
      {
        "key": "D",
        "text": "El texto del título valor puede ser alterado en cualquier momento por el deudor sin firma."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 634 C.Com. instituye la literalidad cambiaria: la obligación cambiaria se rige estricta y únicamente por lo que consta en el texto del papel; lo que no figura escrito en el título valor no existe en el mundo cambiario frente a tenedores de buena fe.",
    "csjPrecedent": "Sala de lo Civil CSJ: El principio de literalidad veda al juzgador incorporar pactos extracartulares no reflejados en el tenor literal del pagaré o letra de cambio base de la ejecución."
  },
  {
    "id": "not-168",
    "category": "mercantil",
    "topic": "Principio de Autonomía Cambiaria y Protección del Endosatario",
    "legalBasis": "Art. 639 Código de Comercio",
    "statement": "De conformidad con el principio de autonomía cambiaria, ¿qué excepciones personales puede el deudor de un pagaré oponente contra el endosatario de buena fe en cobro ejecutivo?",
    "options": [
      {
        "key": "A",
        "text": "El deudor puede exigir que el juicio ejecutivo se traslade a un tribunal militar."
      },
      {
        "key": "B",
        "text": "Puede oponer cualquier problema personal que haya tenido con el abuelo del demandante."
      },
      {
        "key": "C",
        "text": "Puede negarse a pagar afirmando que perdió el empleo sin necesidad de justificación legal."
      },
      {
        "key": "D",
        "text": "Solo puede oponer las excepciones personales que tenga directamente contra el tenedor demandante, pero no puede oponer las excepciones personales que tenía contra el endosante anterior o beneficiario primitivo."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 639 C.Com. consagra la inoponibilidad de excepciones personales a terceros de buena fe: cada endosatario adquiere un derecho originario y autónomo, desconectado de las relaciones causales que dieron origen al título entre el librador y el primer tomador.",
    "csjPrecedent": "Sala de lo Civil CSJ Ref. 215-CAC-2016: En virtud del principio de autonomía cambiaria, el deudor cambiario no puede alegar contra el endosatario de buena fe el incumplimiento causal del contrato subyacente."
  },
  {
    "id": "not-169",
    "category": "mercantil",
    "topic": "Requisitos Esenciales de la Letra de Cambio",
    "legalBasis": "Art. 702 Código de Comercio",
    "statement": "Conforme al Artículo 702 del Código de Comercio, ¿cuál de los siguientes es un requisito indispensable de la Letra de Cambio bajo pena de ineficacia cambiaria?",
    "options": [
      {
        "key": "A",
        "text": "La orden condicional de pagar únicamente si llueve en el mes de mayo."
      },
      {
        "key": "B",
        "text": "La fotografía en color del presidente de la República."
      },
      {
        "key": "C",
        "text": "La orden incondicional al librado de pagar una suma determinada de dinero, la denominación de letra de cambio inserta en el texto y la firma del librador."
      },
      {
        "key": "D",
        "text": "Un pagaré no requiere firma si tiene el nombre del acreedor escrito a máquina."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 702 C.Com. enumera los requisitos sacramentales de la letra de cambio: mención de ser letra de cambio, fecha y lugar de emisión, orden pura y simple de pagar dinero líquido, nombre del librado, lugar y época de pago, nombre del beneficiario y firma del librador.",
    "csjPrecedent": "Sala de lo Civil CSJ: La omisión de la orden incondicional de pago o de la firma del librador priva al documento de su naturaleza de título valor ejecutivo cambial."
  },
  {
    "id": "not-170",
    "category": "mercantil",
    "topic": "Protesto Notarial de la Letra de Cambio por Falta de Aceptación o Pago",
    "legalBasis": "Arts. 752 al 765 Código de Comercio",
    "statement": "¿Qué formalidad solemne debe realizar el notario al levantar el acta de protesto de una letra de cambio por falta de pago (Art. 752 C.Com.)?",
    "options": [
      {
        "key": "A",
        "text": "Debe presentarse en el lugar y dirección señalados para el pago dentro de los dos días hábiles siguientes al vencimiento, requerir el pago al librado y levantar acta notarial haciendo constar las razones de la negativa."
      },
      {
        "key": "B",
        "text": "Publicar una fotografía del deudor en postes de luz pública acusándolo de moroso."
      },
      {
        "key": "C",
        "text": "Destruir la letra de cambio en presencia de dos agentes de tránsito."
      },
      {
        "key": "D",
        "text": "Cobrar la letra al cónyuge del deudor sin importar que estén casados bajo separación."
      }
    ],
    "correctKey": "A",
    "explanation": "El protesto notarial (Arts. 752 y sigs. C.Com.) es el acto auténtico indispensable para conservar las acciones cambiarias de regreso contra los endosantes y avalistas. El notario requiere formalmente al obligado y levanta el acta correspondiente en el plazo perentorio de ley.",
    "csjPrecedent": "Sala de lo Civil CSJ: La falta de protesto notarial oportuno en los títulos que no contienen la cláusula 'sin protesto' acarrea la caducidad fatal de la acción cambiaria de regreso."
  },
  {
    "id": "not-171",
    "category": "mercantil",
    "topic": "Pagaré Mercantil y Estipulación de Intereses",
    "legalBasis": "Arts. 788 al 792 Código de Comercio",
    "statement": "En la suscripción de un Pagaré comercial regulado por el Artículo 788 del Código de Comercio:",
    "options": [
      {
        "key": "A",
        "text": "El suscriptor formula una promesa incondicional de pagar una suma determinada de dinero al beneficiario, pudiendo estipularse válidamente intereses compensatorios y moratorios con apego a las tasas legales."
      },
      {
        "key": "B",
        "text": "El suscriptor solo promete hacer una donación voluntaria si le sobra dinero al fin de año."
      },
      {
        "key": "C",
        "text": "El pagaré carece de fuerza ejecutiva y requiere ser ratificado ante diez notarios."
      },
      {
        "key": "D",
        "text": "El acreedor adquiere la potestad de encarcelar al suscriptor sin juicio judicial."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 788 C.Com. define el pagaré como una promesa incondicional de pago directo. A diferencia de la letra de cambio entre particulares, en el pagaré se pueden pactar cláusulas de intereses corrientes y moratorios expresos en el texto cartular.",
    "csjPrecedent": "Sala de lo Civil CSJ: El pagaré con vencimiento a día fijo o a la vista presta mérito ejecutivo directo y autónomo conforme al Art. 457 del Código Procesal Civil y Mercantil."
  },
  {
    "id": "not-172",
    "category": "mercantil",
    "topic": "Aval Cambial y Responsabilidad Solidaria",
    "legalBasis": "Arts. 725 al 731 Código de Comercio",
    "statement": "¿Qué responsabilidad jurídica asume la persona que estampa su firma con la cláusula 'por aval' en un título valor conforme al Artículo 725 del Código de Comercio?",
    "options": [
      {
        "key": "A",
        "text": "Solo responde si el deudor principal fallece y no deja ningún bien mueble."
      },
      {
        "key": "B",
        "text": "Queda obligado cambiariamente de forma solidaria e incondicional en los mismos términos y con la misma eficacia que la persona por quien prestó el aval, aun cuando la obligación garantizada sea nula por causa que no sea defecto de forma."
      },
      {
        "key": "C",
        "text": "Su obligación es puramente moral de cortesía y no puede ser demandado judicialmente."
      },
      {
        "key": "D",
        "text": "El avalista puede exigir que primero se venda la ropa del deudor principal antes de cobrarle a él."
      }
    ],
    "correctKey": "B",
    "explanation": "El aval (Art. 725 C.Com.) es una garantía cambiaria autónoma y de estricta solidaridad. El avalista no goza del beneficio de excusión propio de la fianza civil ordinaria y su obligación subsiste con plena fuerza ejecutiva aunque la obligación del avalado resulte nula de fondo.",
    "csjPrecedent": "Sala de lo Civil CSJ: El avalista cambiario es deudor directo y solidario; el acreedor puede demandarlo ejecutivamente de forma inmediata sin necesidad de perseguir previamente al librador o suscriptor."
  },
  {
    "id": "not-173",
    "category": "mercantil",
    "topic": "Endoso en Propiedad vs Endoso en Procuración y en Garantía",
    "legalBasis": "Arts. 656 al 667 Código de Comercio",
    "statement": "¿Cuál es el efecto jurídico del 'Endoso en Procuración' o al cobro según el Artículo 662 del Código de Comercio?",
    "options": [
      {
        "key": "A",
        "text": "Extingue la deuda del suscriptor de forma automática."
      },
      {
        "key": "B",
        "text": "Transfiere el 100% del dominio de los fondos al abogado para que se quede con todo el dinero."
      },
      {
        "key": "C",
        "text": "No transfiere la propiedad del título valor, pero faculta al endosatario como mandatario para presentar el documento para su aceptación o cobro, para protestarlo y para ejercer judicialmente las acciones ejecutivas correspondientes."
      },
      {
        "key": "D",
        "text": "El endosatario se convierte en avalista de todos los endosantes pasados."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 662 C.Com. regula el endoso en procuración: es un mandato cambiario que legitima activamente al abogado o tenedor para cobrar judicial o extrajudicialmente el importe del título en nombre y cuenta del beneficiario legítimo titular.",
    "csjPrecedent": "Sala de lo Civil CSJ: El endosatario en procuración no es dueño del crédito cambiario; los deudores pueden oponerle las excepciones personales que tengan contra el endosante mandante."
  },
  {
    "id": "not-174",
    "category": "mercantil",
    "topic": "Prenda Mercantil sin Desplazamiento",
    "legalBasis": "Arts. 1150 al 1160 Código de Comercio",
    "statement": "Al autorizar una escritura pública de Prenda Mercantil sin Desplazamiento sobre maquinaria industrial o cosechas agrícolas futuras:",
    "options": [
      {
        "key": "A",
        "text": "La prenda sin desplazamiento solo puede celebrarse mediante un mensaje verbal no registrado."
      },
      {
        "key": "B",
        "text": "El acreedor debe llevarse la maquinaria físicamente a su casa de inmediato."
      },
      {
        "key": "C",
        "text": "El deudor pierde la posesión de la fábrica y no puede seguir operando."
      },
      {
        "key": "D",
        "text": "El deudor conserva la posesión material y custodia de los bienes pignorados para su explotación económica, debiendo inscribirse el testimonio en el Registro de Comercio del CNR para la constitución del derecho real de garantía."
      }
    ],
    "correctKey": "D",
    "explanation": "La prenda mercantil sin desplazamiento (Arts. 1150 y sigs. C.Com.) permite garantizar créditos dejando las máquinas o cosechas en manos del deudor como depositario mercantil, exigiendo solemnidad de escritura pública e inscripción en el Registro de Comercio.",
    "csjPrecedent": "Criterio Registral CNR y Sala de lo Civil CSJ: La prenda mercantil sin desplazamiento adquiere eficacia real y oponibilidad a terceros mediante su inscripción constitutiva en el Registro de Comercio."
  },
  {
    "id": "not-175",
    "category": "mercantil",
    "topic": "Cheque sin Fondos y Delito de Fraude Cambiario",
    "legalBasis": "Arts. 793 al 838 Código de Comercio y Art. 243 Código Penal",
    "statement": "Si un librador emite un cheque comercial a la orden de un proveedor y al ser presentado para su cobro en el banco dentro del plazo legal es rechazado por falta de fondos disponibles:",
    "options": [
      {
        "key": "A",
        "text": "El banco está legalmente obligado a regalar el dinero de su propio capital al beneficiario."
      },
      {
        "key": "B",
        "text": "El banco o el notario levanta constancia de protesto por falta de fondos, sirviendo de base para la acción cambiaria ejecutiva y para la vista penal por el delito de libramiento indebido de cheque conforme al Código Penal."
      },
      {
        "key": "C",
        "text": "El cheque sin fondos se considera pagado de pleno derecho y se cancela la deuda."
      },
      {
        "key": "D",
        "text": "El beneficiario es multado por haber confiado en el librador del cheque."
      }
    ],
    "correctKey": "B",
    "explanation": "El rechazo bancario de un cheque por insuficiencia de provisión de fondos dentro del término legal de presentación faculta el ejercicio de la vía ejecutiva mercantil y tipifica el ilícito penal de libramiento indebido de cheque (Art. 243 C.Pn.) ante la Fiscalía General.",
    "csjPrecedent": "Sala de lo Penal CSJ: El libramiento de cheque sin fondos o con cuenta cancelada constituye un ilícito contra el orden socioeconómico que lesiona la fe pública cambiaria mercantil."
  },
  {
    "id": "not-176",
    "category": "mercantil",
    "topic": "Gobierno Corporativo: Junta Directiva vs Administrador Único",
    "legalBasis": "Arts. 254 al 265 Código de Comercio",
    "statement": "En la constitución de una Sociedad Anónima salvadoreña, ¿cómo puede organizarse legalmente la administración de la sociedad según el pacto social?",
    "options": [
      {
        "key": "A",
        "text": "Solo puede ser administrada por un tribunal militar compuesto por cinco generales."
      },
      {
        "key": "B",
        "text": "Debe ser administrada obligatoriamente por el alcalde de la ciudad capital."
      },
      {
        "key": "C",
        "text": "Puede confiarse a un Administrador Único y su respectivo Suplente, o a una Junta Directiva compuesta por varios directores propietarios y suplentes, ejerciendo la representación judicial y extrajudicial quien designen los estatutos."
      },
      {
        "key": "D",
        "text": "Está prohibido nombrar Administrador Único en las sociedades salvadoreñas."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 254 C.Com. otorga libertad estructurada a los accionistas para elegir entre el sistema colegiado de Junta Directiva o el sistema unipersonal de Administrador Único, inscribiéndose las credenciales de elección en el Registro de Comercio para legitimar la personería.",
    "csjPrecedent": "Criterio Registral CNR y Sala de lo Civil CSJ: La representación legal de la sociedad anónima se acredita fehacientemente con la certificación de la credencial de elección inscrita en el Registro de Comercio."
  },
  {
    "id": "not-177",
    "category": "mercantil",
    "topic": "Auditor Externo y Auditor Fiscal Obligatorio",
    "legalBasis": "Arts. 289 al 305 Código de Comercio y Código Tributario",
    "statement": "¿Qué órgano de fiscalización técnica independiente debe nombrar anualmente la Junta General de Accionistas de toda Sociedad Anónima?",
    "options": [
      {
        "key": "A",
        "text": "Nombrar un Auditor Externo independiente debidamente autorizado por el Consejo de Vigilancia de la Profesión de Contaduría Pública y Auditoría (CVPCPA), y Auditor Fiscal conforme al Código Tributario."
      },
      {
        "key": "B",
        "text": "Nombrar al cónyuge del gerente general para que le apruebe todas las cuentas familiares."
      },
      {
        "key": "C",
        "text": "Las sociedades anónimas tienen prohibido someterse a auditorías contables."
      },
      {
        "key": "D",
        "text": "El auditor debe ser un estudiante de secundaria sin autorización profesional."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 289 C.Com. y los Arts. 131 y sigs. del Código Tributario obligan a las sociedades mercantiles a designar auditores externos autorizados por el CVPCPA para fiscalizar las operaciones contables, dictaminar estados financieros y rendir informe fiscal a la DGII.",
    "csjPrecedent": "Corte Plena CSJ: La designación de auditor externo inscrito es un requisito de orden público mercantil y tributario indispensable para la validez de los balances societarios inscritos en el CNR."
  },
  {
    "id": "not-178",
    "category": "mercantil",
    "topic": "Depósito y Registro de Balances Anuales en el CNR",
    "legalBasis": "Arts. 411 al 419 Código de Comercio",
    "statement": "¿Qué obligación mercantil anual tienen las sociedades comerciales salvadoreñas respecto a sus estados financieros al cierre de cada ejercicio económico?",
    "options": [
      {
        "key": "A",
        "text": "No existe obligación de registrar balances en la República de El Salvador."
      },
      {
        "key": "B",
        "text": "Quemar los balances para mantener el secreto comercial frente a los acreedores."
      },
      {
        "key": "C",
        "text": "Enviar los balances únicamente a un canal de televisión privado para que los lean en vivo."
      },
      {
        "key": "D",
        "text": "Depositar sus balances generales, estados de resultados y dictamen del auditor externo en el Registro de Comercio del CNR dentro de los primeros meses del año para su debido registro y publicidad mercantil."
      }
    ],
    "correctKey": "D",
    "explanation": "Los Arts. 411 y sigs. C.Com. ordenan a las sociedades depositar anualmente sus balances auditados en el Registro de Comercio del CNR; su depósito legal renueva la matrícula de comercio y confiere publicidad fehaciente de solvencia frente a terceros y bancos.",
    "csjPrecedent": "Criterio Registral CNR: La falta de depósito de balances anuales acarrea la denegatoria de renovación de matrícula de comercio y la imposición de multas mercantiles y tributarias."
  },
  {
    "id": "not-179",
    "category": "mercantil",
    "topic": "Fusión de Sociedades Mercantiles por Absorción",
    "legalBasis": "Arts. 318 al 326 Código de Comercio",
    "statement": "Cuando dos sociedades mercantiles acuerdan fusionarse mediante la absorción de una por otra:",
    "options": [
      {
        "key": "A",
        "text": "La sociedad absorbente está obligada a despedir a todos los trabajadores sin indemnización."
      },
      {
        "key": "B",
        "text": "Se extinguen todas las deudas de la sociedad absorbida sin que nadie responda por ellas."
      },
      {
        "key": "C",
        "text": "El acuerdo de fusión debe formalizarse en escritura pública matriz previa publicación de edictos de ley en el Diario Oficial, asumiendo la sociedad absorbente todos los derechos y obligaciones de la sociedad disuelta de pleno derecho."
      },
      {
        "key": "D",
        "text": "Los acuerdos de fusión se celebran verbalmente sin intervención notarial."
      }
    ],
    "correctKey": "C",
    "explanation": "La fusión de sociedades (Arts. 318 y sigs. C.Com.) es una operación de concentración corporativa solemne: requiere asambleas extraordinarias, balances de fusión, publicaciones de edictos para el derecho de oposición de acreedores y escritura pública matriz inscrita en el CNR.",
    "csjPrecedent": "Sala de lo Civil CSJ: La fusión por absorción opera la transmisión universal del patrimonio social a favor de la sociedad absorbente, subrogándose esta por ministerio de ley en todas las relaciones activas y pasivas."
  },
  {
    "id": "not-180",
    "category": "mercantil",
    "topic": "Disolución y Liquidación de Sociedades Mercantiles",
    "legalBasis": "Arts. 327 al 342 Código de Comercio",
    "statement": "Al acordarse la disolución voluntaria de una sociedad mercantil, ¿cuál es el estado jurídico en que entra la entidad hasta la conclusión final de sus negocios?",
    "options": [
      {
        "key": "A",
        "text": "La sociedad conservará su personalidad jurídica únicamente para los efectos de su liquidación, debiendo agregar a su denominación social las palabras 'en liquidación' y nombrarse liquidadores oficiales."
      },
      {
        "key": "B",
        "text": "La sociedad desaparece al instante y los acreedores no pueden cobrar ninguna deuda."
      },
      {
        "key": "C",
        "text": "Los bienes de la empresa pasan a ser propiedad privada de los liquidadores sin rendir cuentas."
      },
      {
        "key": "D",
        "text": "Se encarcela de inmediato a todos los accionistas por el hecho de haber cerrado la empresa."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 327 y Art. 331 C.Com. disponen que la sociedad disuelta conserva su personalidad jurídica exclusivamente para liquidar deudas, cobrar créditos y repartir el remanente a los socios, actuando los liquidadores bajo estricta responsabilidad patrimonial.",
    "csjPrecedent": "Criterio Registral CNR y Sala de lo Civil CSJ: El nombramiento de liquidadores y la disolución societaria deben formalizarse en escritura matriz e inscribirse en el Registro de Comercio para ser oponibles frente a terceros."
  },
  {
    "id": "not-181",
    "category": "mercantil",
    "topic": "Acciones Nominativas y Prohibición de Acciones al Portador",
    "legalBasis": "Art. 129 Código de Comercio y Reformas Mercantiles",
    "statement": "En el régimen mercantil contemporáneo de El Salvador y estándares internacionales de transparencia financiera:",
    "options": [
      {
        "key": "A",
        "text": "Todas las acciones en las sociedades de capital deben ser estrictamente nominativas, figurando el nombre del titular en el texto del título y en el Libro de Registro de Accionistas, prohibiéndose terminantemente las acciones al portador."
      },
      {
        "key": "B",
        "text": "Las acciones deben ser al portador para que nadie sepa quiénes son los dueños de las empresas."
      },
      {
        "key": "C",
        "text": "Las acciones son títulos de deuda pública del Ministerio de Hacienda."
      },
      {
        "key": "D",
        "text": "Cualquier persona puede emitir acciones en papel periódico sin registro societario."
      }
    ],
    "correctKey": "A",
    "explanation": "Las reformas al Código de Comercio y las exigencias de GAFI/UIF erradicaron las acciones al portador del sistema societario salvadoreño: todas las acciones son nominativas y su transmisión se perfecciona mediante endoso y registro obligatorio en el Libro de Accionistas.",
    "csjPrecedent": "Sala de lo Constitucional y Sala de lo Civil CSJ: La nominatividad obligatoria de las acciones garantiza la identificación transparente del beneficiario final y la prevención del blanqueo de capitales."
  },
  {
    "id": "not-182",
    "category": "mercantil",
    "topic": "Transmisión de Acciones Nominativas por Endoso y Asiento",
    "legalBasis": "Arts. 154 al 158 Código de Comercio",
    "statement": "¿Cómo se perfecciona la transferencia de propiedad de acciones nominativas de una Sociedad Anónima frente a la sociedad y frente a terceros?",
    "options": [
      {
        "key": "A",
        "text": "Basta con que el comprador le dé la mano al vendedor en un restaurante."
      },
      {
        "key": "B",
        "text": "Mediante el endoso del título de las acciones expedido por el cedente y su posterior inscripción o asiento formal en el Libro de Registro de Accionistas llevado por la sociedad."
      },
      {
        "key": "C",
        "text": "Se requiere una ley formal de la Asamblea Legislativa para cada transferencia de una acción."
      },
      {
        "key": "D",
        "text": "Las acciones nominativas son inalienables y no se pueden vender jamás."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 154 C.Com. dispone que la propiedad de las acciones nominativas se transfiere por endoso y se completa con el registro en el Libro de Accionistas de la sociedad; solo se reconoce como accionista legítimo frente a la empresa y terceros a quien aparezca inscrito en dicho libro corporativo.",
    "csjPrecedent": "Sala de lo Civil CSJ: La falta de asiento de la transferencia en el Libro de Registro de Accionistas impide al adquirente ejercer los derechos de socio y el voto en las asambleas societarias."
  },
  {
    "id": "not-183",
    "category": "mercantil",
    "topic": "Inhabilidad para ser Administrador de Sociedad Anónima",
    "legalBasis": "Art. 264 Código de Comercio",
    "statement": "Conforme al Artículo 264 del Código de Comercio, ¿quiénes se encuentran expresamente inhabilitados para ejercer cargos de administración en sociedades mercantiles?",
    "options": [
      {
        "key": "A",
        "text": "Los graduados universitarios de facultades de ingeniería o medicina."
      },
      {
        "key": "B",
        "text": "Cualquier ciudadano que tenga más de treinta años de edad."
      },
      {
        "key": "C",
        "text": "Los que no pueden ejercer el comercio, los quebrados que no hayan sido rehabilitados y los condenados por delitos contra la propiedad o falsedad documental."
      },
      {
        "key": "D",
        "text": "Las personas que no tengan cuentas bancarias en el extranjero."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 264 C.Com. veda el acceso a la administración corporativa a personas declaradas en quiebra no rehabilitada, interdictos para el comercio y personas con antecedentes penales por estafas, quiebras fraudulentas o delitos contra el patrimonio.",
    "csjPrecedent": "Criterio Registral CNR: El Registro de Comercio denegará la inscripción de credenciales de junta directiva o administrador único cuando recaiga sobre personas con inhabilidad legal mercantil comprobada."
  },
  {
    "id": "not-184",
    "category": "mercantil",
    "topic": "Quórum de Asambleas Ordinarias y Extraordinarias",
    "legalBasis": "Arts. 228 al 240 Código de Comercio",
    "statement": "¿Cuál es el quórum legal mínimo ordinario exigido por la ley para la válida instalación en primera convocatoria de una Junta General Extraordinaria de Accionistas?",
    "options": [
      {
        "key": "A",
        "text": "No se exige quórum si el presidente de la junta es el dueño de la oficina."
      },
      {
        "key": "B",
        "text": "La presencia de un solo accionista sin importar el porcentaje que represente."
      },
      {
        "key": "C",
        "text": "El 100% obligatorio de todos los habitantes del municipio."
      },
      {
        "key": "D",
        "text": "La presencia de accionistas que representen por lo menos las tres cuartas partes (75%) de todas las acciones que componen el capital social."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 240 C.Com. establece un quórum reforzado para asambleas extraordinarias en primera convocatoria: se requiere al menos el 75% del capital social para deliberar sobre modificaciones de pacto social, aumentos de capital, fusiones o disoluciones.",
    "csjPrecedent": "Sala de lo Civil CSJ: Las asambleas extraordinarias celebradas en primera convocatoria sin el quórum legal o estatutario del 75% del capital adolecen de nulidad absoluta en todos sus acuerdos."
  },
  {
    "id": "not-185",
    "category": "mercantil",
    "topic": "Nulidad de Acuerdos de Asamblea Contrarios a la Ley",
    "legalBasis": "Arts. 245 al 253 Código de Comercio",
    "statement": "¿Qué acción legal asiste a los accionistas disidentes o ausentes frente a un acuerdo de Junta General que vulnere normas imperativas del Código de Comercio?",
    "options": [
      {
        "key": "A",
        "text": "Prender fuego a las instalaciones de la empresa."
      },
      {
        "key": "B",
        "text": "Demandar la nulidad o impugnación de los acuerdos asamblearios ante el Juzgado de lo Civil y Mercantil competente en el plazo perentorio de ley."
      },
      {
        "key": "C",
        "text": "Retener por la fuerza a los directivos en una bodega sin comida."
      },
      {
        "key": "D",
        "text": "Los acuerdos de asamblea son irrevocables y ninguna corte puede anularlos."
      }
    ],
    "correctKey": "B",
    "explanation": "Los Arts. 245 y sigs. C.Com. regulan el juicio de impugnación de acuerdos societarios: los socios que votaron en contra o estuvieron ausentes pueden demandar la anulación de acuerdos violatorios de la ley o estatutos dentro de los plazos de caducidad fijados por la ley.",
    "csjPrecedent": "Sala de lo Civil CSJ: La acción de impugnación de acuerdos asamblearios tutela a los accionistas minoritarios frente a abusos de la mayoría contrarios al marco legal mercantil."
  },
  {
    "id": "not-186",
    "category": "mercantil",
    "topic": "Pagaré con Cláusula de Vencimientos Sucesivos",
    "legalBasis": "Art. 792 Código de Comercio y Art. 706 Código de Comercio",
    "statement": "Cuando en un pagaré mercantil se pacta el pago en cuotas periódicas mensuales con cláusula de que la falta de pago de una sola cuota 'hará exigible la totalidad del saldo insoluto':",
    "options": [
      {
        "key": "A",
        "text": "El acreedor adquiere el derecho de quedarse con los hijos del deudor."
      },
      {
        "key": "B",
        "text": "La cláusula es nula de pleno derecho y el deudor queda exonerado de pagar el resto del préstamo."
      },
      {
        "key": "C",
        "text": "Es una cláusula de aceleración cambiaria plenamente válida y eficaz, permitiendo al acreedor demandar ejecutivamente el cobro de la totalidad del capital adeudado más intereses al producirse la mora de una cuota."
      },
      {
        "key": "D",
        "text": "Solo puede cobrarse si el deudor otorga un nuevo pagaré por cada cuota vencida."
      }
    ],
    "correctKey": "C",
    "explanation": "La cláusula de caducidad de plazo o aceleración en pagarés mercantiles es plenamente reconocida por la doctrina y jurisprudencia salvadoreña: la mora en una cuota autoriza a declarar vencido anticipadamente el plazo total y demandar el saldo íntegro en juicio ejecutivo.",
    "csjPrecedent": "Sala de lo Civil CSJ Ref. 305-CAC-2015: La cláusula de aceleración en títulos valores con pagos sucesivos opera legítimamente al incurrir en mora el suscriptor, habilitando la ejecución del saldo global insoluto."
  },
  {
    "id": "not-187",
    "category": "mercantil",
    "topic": "Títulos Valores en Blanco y Acuerdo de Llenado",
    "legalBasis": "Art. 627 Código de Comercio",
    "statement": "Si se suscribe un título valor al que le faltan algunos requisitos esenciales y se pactan instrucciones previas para su llenado posterior:",
    "options": [
      {
        "key": "A",
        "text": "El título podrá ser completado por el legítimo tenedor conforme a los acuerdos celebrados entre las partes antes de su presentación para el cobro en juicio."
      },
      {
        "key": "B",
        "text": "El documento es inexistente y se castiga penalmente con prisión a quien lo reciba."
      },
      {
        "key": "C",
        "text": "El acreedor puede inventar cualquier cifra millonaria sin respetar las instrucciones pactadas."
      },
      {
        "key": "D",
        "text": "El deudor queda legalmente liberado de pagar cualquier suma de por vida."
      }
    ],
    "correctKey": "A",
    "explanation": "El Art. 627 C.Com. admite la creación de títulos con espacios en blanco o incompletos siempre que exista firma y pacto de llenado: el tenedor debe completarlo conforme a las instrucciones convenidas antes de su presentación ejecutiva ante el tribunal.",
    "csjPrecedent": "Sala de lo Civil CSJ: El llenado abusivo o fraudulento de un pagaré en blanco en contravención del pacto de integración puede ser alegado como excepción de falsedad material o abuso de firma en blanco."
  },
  {
    "id": "not-188",
    "category": "mercantil",
    "topic": "Cheque Certificado por el Banco Librado",
    "legalBasis": "Arts. 819 al 822 Código de Comercio",
    "statement": "¿Qué efecto jurídico produce la certificación estampada por el banco en un cheque bancario ('Cheque Certificado')?",
    "options": [
      {
        "key": "A",
        "text": "El cheque se transforma en una acción de la Bolsa de Valores."
      },
      {
        "key": "B",
        "text": "El cheque no puede ser cobrado jamás en efectivo y solo sirve para exhibirlo en un museo."
      },
      {
        "key": "C",
        "text": "El titular de la cuenta queda exento de pagar comisiones de por vida."
      },
      {
        "key": "D",
        "text": "El banco retiene de inmediato con cargo a la cuenta del librador los fondos necesarios para el pago, asumiendo la entidad bancaria la obligación incondicional y directa de pagar el cheque a su presentación."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 819 C.Com. define el cheque certificado: la certificación bancaria garantiza la existencia y reserva exclusiva de fondos suficientes, asumiendo el banco la responsabilidad cambiaria directa de pago frente a cualquier tenedor del título durante su plazo legal.",
    "csjPrecedent": "Sala de lo Civil CSJ: El cheque certificado posee una garantía reforzada de cobro bancario directo que impide al librador revocarlo o retirar los fondos mientras permanezca vigente el plazo de presentación."
  },
  {
    "id": "not-189",
    "category": "mercantil",
    "topic": "Cheque de Caja o de Gerencia",
    "legalBasis": "Art. 823 Código de Comercio",
    "statement": "¿Quién es el librador y el librado en un 'Cheque de Caja' o de gerencia emitido en el sistema financiero salvadoreño?",
    "options": [
      {
        "key": "A",
        "text": "Es una orden emitida por la policía municipal de hacienda."
      },
      {
        "key": "B",
        "text": "Es emitido por cualquier cliente particular que no tenga cuenta bancaria."
      },
      {
        "key": "C",
        "text": "El propio banco emite el cheque a cargo de sus propias dependencias o sucursales, actuando la entidad financiera como librador y librado a la vez, garantizando el pago con su propio patrimonio bancario."
      },
      {
        "key": "D",
        "text": "Solo puede ser emitido por empresas que estén en quiebra fraudulenta."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 823 C.Com. regula el cheque de caja: los bancos libran estos cheques contra sus propias tesorerías a favor de personas determinadas, gozando de altísima credibilidad en el comercio inmobiliario y vehicular por su respaldo bancario directo.",
    "csjPrecedent": "Criterio Vinculante Registral CNR y Sala de lo Civil CSJ: El cheque de caja bancario es el medio idóneo exigido por la ley mercantil para comprobar el desembolso efectivo del capital fundacional de sociedades."
  },
  {
    "id": "not-190",
    "category": "mercantil",
    "topic": "Matrícula de Empresa y Establecimiento Mercantil",
    "legalBasis": "Arts. 411 al 415 Código de Comercio",
    "statement": "¿Qué naturaleza y función tiene la Matrícula de Comercio que expide el Registro de Comercio del CNR a las empresas salvadoreñas?",
    "options": [
      {
        "key": "A",
        "text": "Es la constancia registral obligatoria que acredita la existencia legal de la empresa mercantil y de sus establecimientos comerciales, siendo requisito indispensable para operar formalmente y ejercer acciones mercantiles."
      },
      {
        "key": "B",
        "text": "Es una licencia que permite conducir tractores en vías públicas."
      },
      {
        "key": "C",
        "text": "Es una condecoración militar que otorga el Ministerio de la Defensa."
      },
      {
        "key": "D",
        "text": "Es un certificado de vacunación veterinaria para animales de carga."
      }
    ],
    "correctKey": "A",
    "explanation": "Los Arts. 411 y sigs. C.Com. imponen la matrícula de comercio anual como registro formal obligatorio de las empresas y sus sucursales, sin la cual las sociedades mercantiles no pueden renovar licencias, litigar válidamente en sede ejecutiva ni inscribir pactos sociales.",
    "csjPrecedent": "Sala de lo Civil CSJ: La falta de matrícula de comercio vigente inhabilita a la sociedad mercantil para deducir válidamente pretensiones derivadas de su actividad comercial."
  },
  {
    "id": "not-191",
    "category": "mercantil",
    "topic": "Exclusión de Socio en Sociedades Mercantiles",
    "legalBasis": "Arts. 58 y 59 Código de Comercio",
    "statement": "¿Por qué causas legales puede la Junta General de Accionistas acordar la exclusión formal de un socio en una sociedad salvadoreña?",
    "options": [
      {
        "key": "A",
        "text": "Por uso indebido de la firma social o del patrimonio de la empresa para negocios propios, comisión de actos fraudulentos contra la sociedad o grave incumplimiento de sus deberes estatutarios."
      },
      {
        "key": "B",
        "text": "Porque el socio no saluda cortésmente a los directivos en la asamblea."
      },
      {
        "key": "C",
        "text": "Por profesar una religión minoritaria no compartida por la directiva."
      },
      {
        "key": "D",
        "text": "Solo si el socio se niega a regalar sus acciones a la gerencia general."
      }
    ],
    "correctKey": "A",
    "explanation": "Los Arts. 58 y 59 C.Com. autorizan la exclusión justificada del socio por causales taxativas de deslealtad: actos fraudulentos, uso de la razón social para negocios ajenos, quiebra del socio o inobservancia grave de las obligaciones societarias pactadas.",
    "csjPrecedent": "Sala de lo Civil CSJ: El acuerdo de exclusión de un socio exige procedimiento con garantía de audiencia y justificación probatoria fehaciente de la causal legal mercantil imputada."
  },
  {
    "id": "not-192",
    "category": "mercantil",
    "topic": "Acción Cambiaria Directa vs Acción Cambiaria de Regreso",
    "legalBasis": "Arts. 766 al 776 Código de Comercio",
    "statement": "¿Contra quiénes se ejercita la Acción Cambiaria Directa y en qué plazo de prescripción opera en una Letra de Cambio (Art. 766 C.Com.)?",
    "options": [
      {
        "key": "A",
        "text": "Se ejercita únicamente contra el cartero municipal y prescribe a las veinticuatro horas."
      },
      {
        "key": "B",
        "text": "Se ejercita directamente contra el aceptante o sus avalistas y prescribe en tres años contados a partir de la fecha del vencimiento de la letra de cambio."
      },
      {
        "key": "C",
        "text": "Prescribe a los cincuenta años sin necesidad de título."
      },
      {
        "key": "D",
        "text": "Solo puede ejercitarse si el demandado consiente voluntariamente en pagar la deuda."
      }
    ],
    "correctKey": "B",
    "explanation": "El Art. 766 y Art. 776 C.Com. distinguen: la acción cambiaria directa se dirige contra el obligado principal (aceptante en letra o suscriptor en pagaré) y sus avalistas, prescribiendo en tres años; la de regreso se dirige contra endosantes y librador, prescribiendo en un año.",
    "csjPrecedent": "Sala de lo Civil CSJ: La acción cambiaria directa contra el suscriptor del pagaré o aceptante de la letra de cambio goza de un plazo de prescripción extintiva de tres años desde su vencimiento."
  },
  {
    "id": "not-193",
    "category": "mercantil",
    "topic": "Fianza Mercantil Solidaria",
    "legalBasis": "Arts. 1539 al 1545 Código de Comercio",
    "statement": "A diferencia de la fianza civil ordinaria, ¿qué característica fundamental define a la Fianza Mercantil regulada por el Artículo 1540 del Código de Comercio?",
    "options": [
      {
        "key": "A",
        "text": "El fiador mercantil solo paga si el deudor se escapa a otro continente en barco."
      },
      {
        "key": "B",
        "text": "El fiador mercantil nunca responde con sus bienes personales bajo ningún concepto."
      },
      {
        "key": "C",
        "text": "La fianza mercantil es siempre solidaria por ministerio de ley, y el fiador mercantil no goza del beneficio de excusión ni de división patrimonial frente al acreedor."
      },
      {
        "key": "D",
        "text": "La fianza mercantil exige que el fiador sea un banco internacional europeo."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 1540 C.Com. establece que el fiador mercantil responde solidariamente con el deudor principal sin necesidad de pacto expreso; por tanto, no puede oponer el beneficio de excusión civil y puede ser demandado de forma directa y conjunta con el deudor afianzado.",
    "csjPrecedent": "Sala de lo Civil CSJ: En la fianza mercantil no opera el beneficio de excusión por mandato legal expreso de solidaridad legal mercantil."
  },
  {
    "id": "not-194",
    "category": "mercantil",
    "topic": "Modificación de Pacto Social y Quórum en Segunda Convocatoria",
    "legalBasis": "Arts. 240 y 241 Código de Comercio",
    "statement": "Si una Junta General Extraordinaria de Accionistas convocada para reformar los estatutos de la sociedad no logra el quórum del 75% en primera convocatoria:",
    "options": [
      {
        "key": "A",
        "text": "Se requiere una orden escrita firmada por el ministro de economía para volver a convocar."
      },
      {
        "key": "B",
        "text": "La sociedad queda automáticamente disuelta y sus bienes se subastan en remate."
      },
      {
        "key": "C",
        "text": "Los directores son arrestados por no haber llamado a tiempo a los socios."
      },
      {
        "key": "D",
        "text": "Se celebrará en segunda convocatoria con los accionistas que asistan, representen cualquiera que sea el porcentaje de capital, requiriendo para resolver el voto favorable de la mayoría de las acciones presentes o representadas."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 241 C.Com. facilita el funcionamiento societario: en segunda convocatoria para asambleas extraordinarias, el quórum se instala válidamente con el número de accionistas presentes que comparezcan, decidiendo por mayoría de votos de las acciones presentes.",
    "csjPrecedent": "Sala de lo Civil CSJ: Los acuerdos de reforma de pacto social adoptados en asamblea extraordinaria en segunda convocatoria son válidos siempre que la citación se haya publicado con apego a la ley."
  },
  {
    "id": "not-195",
    "category": "mercantil",
    "topic": "Títulos de Acciones y su Contenido Mínimo",
    "legalBasis": "Arts. 136 y 137 Código de Comercio",
    "statement": "¿Qué menciones formales obligatorias deben contener los certificados provisionales y títulos definitivos de acciones expedidos por una Sociedad Anónima?",
    "options": [
      {
        "key": "A",
        "text": "El horóscopo del gerente general y su número de la suerte en la lotería."
      },
      {
        "key": "B",
        "text": "Denominación, domicilio y duración de la sociedad, fecha de la escritura de constitución y datos de inscripción en el CNR, valor nominal de la acción, número de serie, nombre del accionista titular y firmas de los administradores facultados."
      },
      {
        "key": "C",
        "text": "La lista completa de todos los clientes de la empresa en el último año."
      },
      {
        "key": "D",
        "text": "No se exige ningún dato si el papel tiene un marco con filigrana dorada."
      }
    ],
    "correctKey": "B",
    "explanation": "Los Arts. 136 y 137 C.Com. fijan los requisitos formales de los títulos de acciones: datos de registro social, importe de capital, clase de acción, valor nominal, nombre del socio y firmas autorizadas de los directivos, certificando la propiedad societaria.",
    "csjPrecedent": "Criterio Registral CNR y Sala de lo Civil CSJ: La expedición de títulos de acciones que omitan las menciones del Art. 137 C.Com. acarrea irregularidad formal e ineficacia de los títulos como instrumentos cambiarios corporativos."
  },
  {
    "id": "not-196",
    "category": "mercantil",
    "topic": "Contrato de Comisión Mercantil",
    "legalBasis": "Arts. 1066 al 1097 Código de Comercio",
    "statement": "En el contrato de comisión mercantil regulado por el Artículo 1066 del Código de Comercio:",
    "options": [
      {
        "key": "A",
        "text": "La comisión es una donación gratuita sin ninguna obligación económica recíproca."
      },
      {
        "key": "B",
        "text": "El comisionista se queda con todo el dinero de las ventas sin informar al comitente."
      },
      {
        "key": "C",
        "text": "El comisionista desempeña actos de comercio por cuenta de otra persona llamada comitente, actuando a nombre propio o bajo la razón social del comitente, teniendo derecho a retribución y deber de rendición de cuentas."
      },
      {
        "key": "D",
        "text": "Está prohibido cobrar comisión por vender mercancías en El Salvador."
      }
    ],
    "correctKey": "C",
    "explanation": "El Art. 1066 C.Com. regula el mandato mercantil por comisión: el comisionista se encarga de realizar operaciones de comercio encomendadas con estricta lealtad, secreto profesional y rendición de cuentas, teniendo derecho de retención sobre las mercancías por sus gastos y honorarios.",
    "csjPrecedent": "Sala de lo Civil CSJ: El comisionista mercantil responde por culpa o negligencia en el desempeño de los negocios encomendados si se aparta de las instrucciones precisas del comitente."
  },
  {
    "id": "not-197",
    "category": "mercantil",
    "topic": "Depósito Mercantil en Almacenes Generales de Depósito",
    "legalBasis": "Arts. 1098 al 1115 Código de Comercio",
    "statement": "¿Qué títulos valores emiten los Almacenes Generales de Depósito autorizados al recibir mercaderías o productos en custodia?",
    "options": [
      {
        "key": "A",
        "text": "Certificados de Depósito que acreditan la propiedad de las mercancías y Bonos de Prenda que incorporan la constitución de un crédito prendario sobre las mismas mercaderías depositadas."
      },
      {
        "key": "B",
        "text": "Billetes de tren de carga y boletos de avión comercial."
      },
      {
        "key": "C",
        "text": "Tarjetas de presentación personal de los estibadores de aduana."
      },
      {
        "key": "D",
        "text": "No pueden emitir ningún documento bajo pena de clausura del almacén."
      }
    ],
    "correctKey": "A",
    "explanation": "Los Almacenes Generales de Depósito (Arts. 1098 y sigs. C.Com.) emiten Certificados de Depósito (traslativos de la propiedad de las mercancías amparadas) y Bonos de Prenda (títulos ejecutivos de crédito pignoraticio que pueden negociarse independientemente).",
    "csjPrecedent": "Sala de lo Civil CSJ: El bono de prenda anexo al certificado de depósito es un título valor ejecutivo que confiere privilegio de cobro preferente sobre las mercaderías depositadas en los almacenes."
  },
  {
    "id": "not-198",
    "category": "mercantil",
    "topic": "Prescripción de la Acción Cambiaria de Regreso",
    "legalBasis": "Art. 777 Código de Comercio",
    "statement": "¿En qué plazo prescribe la acción cambiaria de regreso que tiene el último tenedor de una Letra de Cambio contra los endosantes y el librador (Art. 777 C.Com.)?",
    "options": [
      {
        "key": "A",
        "text": "La acción de regreso no prescribe jamás y puede cobrarse en cualquier siglo."
      },
      {
        "key": "B",
        "text": "En treinta años conforme a la usucapión agraria del Código Civil."
      },
      {
        "key": "C",
        "text": "A las doce horas exactas de haberse presentado la letra en el banco."
      },
      {
        "key": "D",
        "text": "En un año contado a partir de la fecha del protesto notarial levantado en tiempo o de la fecha del vencimiento si el título tenía la cláusula 'sin protesto'."
      }
    ],
    "correctKey": "D",
    "explanation": "El Art. 777 C.Com. fija un plazo más breve para la acción cambiaria de regreso: un año desde la fecha del protesto oportuno o del vencimiento formal, garantizando que las cadenas de endoso no permanezcan indefinidamente abiertas en el tráfico mercantil.",
    "csjPrecedent": "Sala de lo Civil CSJ: La acción cambiaria de regreso contra los endosantes prescribe fatalmente en un año si no se ejerce judicialmente en dicho intervalo temporal."
  },
  {
    "id": "not-199",
    "category": "mercantil",
    "topic": "Contrato de Agencia y Distribución Mercantil",
    "legalBasis": "Arts. 392 al 399 Código de Comercio",
    "statement": "Conforme a las reformas al Código de Comercio salvadoreño sobre contratos de agencia y distribución exclusiva:",
    "options": [
      {
        "key": "A",
        "text": "El distribuidor pasa a ser dueño de todas las fábricas extranjeras del principal."
      },
      {
        "key": "B",
        "text": "El principal puede cancelar el contrato en cualquier momento sin pagar ninguna indemnización al distribuidor local."
      },
      {
        "key": "C",
        "text": "Si el principal da por terminado o revoca unilateralmente el contrato de distribución sin causa justa comprobada, está obligado legalmente a indemnizar al distribuidor por los daños, clientela generada e inversiones no amortizadas."
      },
      {
        "key": "D",
        "text": "Se sanciona al distribuidor local con multa por haber vendido productos de marca."
      }
    ],
    "correctKey": "C",
    "explanation": "Los Arts. 392 y sigs. C.Com. tutelan al agente o distribuidor nacional frente a rescisiones unilaterales intempestivas del principal extranjero, consagrando indemnizaciones tasadas por pérdida de clientela, gastos de publicidad e inventarios existentes si no media justa causa probada.",
    "csjPrecedent": "Sala de lo Civil CSJ: La terminación unilateral arbitraria del contrato de distribución mercantil engendra la obligación indemnizatoria fijada por las normas imperativas del Código de Comercio."
  },
  {
    "id": "not-200",
    "category": "mercantil",
    "topic": "Responsabilidad Notarial en Instrumentos Mercantiles",
    "legalBasis": "Art. 62 Ley de Notariado y Código de Comercio",
    "statement": "¿Cuál es el deber deontológico y de legalidad sustantiva que asume el notario al autorizar escrituras de constitución de sociedades, aumentos de capital y fusiones corporativas?",
    "options": [
      {
        "key": "A",
        "text": "Garantizar la estricta legalidad de las cláusulas estatutarias, verificar la autenticidad y solvencia de los aportes dinerarios o títulos valores de pago y dar fe de la legitimación de las personerías de los otorgantes."
      },
      {
        "key": "B",
        "text": "Cobrar la mayor cantidad posible de dinero sin leer el texto de la escritura matriz."
      },
      {
        "key": "C",
        "text": "Insertar cláusulas secretas contrarias a la Constitución para evadir impuestos fiscales."
      },
      {
        "key": "D",
        "text": "Firmar en blanco las planas del protocolo y dejar que los comerciantes las llenen en su casa."
      }
    ],
    "correctKey": "A",
    "explanation": "La función notarial en el ámbito corporativo y mercantil es un pilar de la seguridad jurídica económica de El Salvador. El notario ejerce un control preventivo de legalidad que asegura que los pactos sociales cumplan las normas de orden público del Código de Comercio antes de su inscripción formal en el CNR.",
    "csjPrecedent": "Corte Plena CSJ: El notario es el primer guardián de la legalidad societaria y registral; autorizar estatutos contrarios al Código de Comercio o simular pagos de capital constituye falta disciplinaria grave sancionable con suspensión."
  }
];

/**
 * COMPENDIO INTEGRAL DE CÓDIGOS Y LEYES VIGENTES DE EL SALVADOR (2024–2026)
 * Agrupado en 8 Familias Jurídicas con Decretos Legislativos, Últimas Reformas Verificadas,
 * Síntesis Doctrinaria, Artículos Clave y Fuentes Oficiales del Estado Salvadoreño.
 */

export type SalvadoranLawFamilyId =
  | 'constitucional-electoral-municipal'
  | 'penal-procesal-seguridad'
  | 'familia-ninez-genero-registro'
  | 'civil-procesal-notarial'
  | 'mercantil-financiero-tecnologia'
  | 'laboral-seguridad-social'
  | 'administrativo-tributario-aduanero'
  | 'ambiental-sanitario-energetico-transporte';

export interface SalvadoranLawFamilyMeta {
  id: SalvadoranLawFamilyId;
  name: string;
  shortName: string;
  description: string;
  icon: string;
}

export interface SalvadoranLawEntry {
  id: string;
  familyId: SalvadoranLawFamilyId;
  title: string;
  shortCode: string;
  decree: string;
  lastReform: string;
  status: 'Vigente' | 'Reformada 2024–2026';
  synthesis: string;
  keyArticles: string[];
  officialSource: string;
}

export const SALVADORAN_LAW_FAMILIES: SalvadoranLawFamilyMeta[] = [
  {
    id: 'constitucional-electoral-municipal',
    name: '1. Constitucional, Electoral y Municipal',
    shortName: 'Constitucional & Municipal',
    description:
      'Norma suprema, justicia constitucional, sistema electoral de 60 diputados, reestructuración de 44 municipios y 262 distritos, transparencia y control gubernamental.',
    icon: 'Landmark',
  },
  {
    id: 'penal-procesal-seguridad',
    name: '2. Penal, Procesal Penal y Seguridad',
    shortName: 'Penal & Seguridad',
    description:
      'Poder punitivo del Estado, reformas D.L. 537/2026 (prisión perpetua Art. 45 CP) y D.L. 534/2026, Cero Tolerancia Art. 147-E CP, crimen organizado, ciberdelitos y extinción de dominio.',
    icon: 'Gavel',
  },
  {
    id: 'familia-ninez-genero-registro',
    name: '3. Familia, Niñez, Género y Registro',
    shortName: 'Familia & Niñez',
    description:
      'Relaciones familiares, Ley Crecer Juntos (CONAPINA y CAPI Art. 137), Ley Nacer con Cariño, protección integral contra violencia de género e intrafamiliar y estado familiar.',
    icon: 'Shield',
  },
  {
    id: 'civil-procesal-notarial',
    name: '4. Civil, Procesal Civil y Mercantil y Notarial',
    shortName: 'Civil & Notarial',
    description:
      'Derecho común patrimonial y sucesorio, proceso oral por audiencias (CPCM), fe pública notarial y jurisdicción voluntaria ante notario.',
    icon: 'Scale',
  },
  {
    id: 'mercantil-financiero-tecnologia',
    name: '5. Mercantil, Financiero, Consumidor y Tecnología',
    shortName: 'Mercantil & Tech',
    description:
      'Sociedades (S.A.S. Capítulo VIII-Bis D.L. 905 y prórroga 2027), Propiedad Intelectual ISPI (D.L. 66/2024), Ciberseguridad (D.L. 143/2024), Datos Personales (D.L. 144/2024), LEAD y UIF-FGR.',
    icon: 'Briefcase',
  },
  {
    id: 'laboral-seguridad-social',
    name: '6. Laboral y Seguridad Social',
    shortName: 'Laboral & Previsión',
    description:
      'Relaciones individuales y colectivas de trabajo, Carrera Docente, prevención de riesgos ocupacionales (LGPRLT), ISSS y Sistema Integral de Pensiones.',
    icon: 'Users',
  },
  {
    id: 'administrativo-tributario-aduanero',
    name: '7. Administrativo, Tributario y Aduanero',
    shortName: 'Administrativo & Fiscal',
    description:
      'Procedimiento administrativo (LPA), jurisdicción contenciosa (LJCA), COMPRASAL, Código Tributario, ISR, IVA y normativa aduanera regional CAUCA/RECAUCA.',
    icon: 'FileText',
  },
  {
    id: 'ambiental-sanitario-energetico-transporte',
    name: '8. Ambiental, Sanitario, Energético y Transporte',
    shortName: 'Ambiental, Salud & Vial',
    description:
      'Protección ambiental, recursos hídricos, Código de Salud, Superintendencia de Regulación Sanitaria (SRS), Electricidad (D.L. 843 SIGET) y Transporte Terrestre (D.L. 185/2025).',
    icon: 'Leaf',
  },
];

export const SALVADORAN_LAWS_COMPENDIUM: SalvadoranLawEntry[] = [
  // =========================================================================
  // 1. CONSTITUCIONAL, ELECTORAL Y MUNICIPAL
  // =========================================================================
  {
    id: 'law-cn-1983',
    familyId: 'constitucional-electoral-municipal',
    title: 'Constitución de la República de El Salvador',
    shortCode: 'Cn.',
    decree: 'Decreto Constituyente N.° 38 de 1983 (D.O. N.° 234, Tomo 281)',
    lastReform: 'Reforma Art. 248 (D.L. N.° 197/2025) y reforma previa Art. 27',
    status: 'Reformada 2024–2026',
    synthesis:
      'Norma suprema y fundamento del ordenamiento jurídico salvadoreño. Consagra la persona humana como origen y fin del Estado (Art. 1), el catálogo de derechos fundamentales, la separación de órganos del Gobierno y la justicia constitucional. La reforma al Art. 248 (D.L. 197/2025) habilitó un mecanismo ágil de ratificación legislativa de reformas constitucionales dentro de la misma legislatura con mayoría calificada, y las reformas previas al Art. 27 actualizaron el régimen de penas máximas y prisión perpetua para delitos graves.',
    keyArticles: [
      'Art. 1 y 2 Cn. (Persona humana y derechos fundamentales)',
      'Art. 11 y 12 Cn. (Debido proceso, presunción de inocencia y Hábeas Corpus)',
      'Art. 27 Cn. (Régimen punitivo y penas máximas)',
      'Art. 86 Cn. (Principio de legalidad de los funcionarios públicos)',
      'Art. 174 y 183 Cn. (Sala de lo Constitucional CSJ)',
      'Art. 246 y 248 Cn. (Supremacía y procedimiento de reforma constitucional)',
    ],
    officialSource: 'Asamblea Legislativa / Corte Suprema de Justicia (CSJ)',
  },
  {
    id: 'law-lprcn',
    familyId: 'constitucional-electoral-municipal',
    title: 'Ley de Procedimientos Constitucionales',
    shortCode: 'L.Pr.Cn.',
    decree: 'Decreto Legislativo N.° 2996 de 1960',
    lastReform: 'Vigencia integrada con jurisprudencia de la Sala de lo Constitucional (CSJ)',
    status: 'Vigente',
    synthesis:
      'Regula la tramitación procesal de los tres procesos constitucionales que garantizan la supremacía de la Constitución y los derechos fundamentales ante la Sala de lo Constitucional de la CSJ: el proceso de Inconstitucionalidad en acción popular, el proceso de Amparo contra actos u omisiones de autoridad o particulares con poder de imperio, y la Exhibición Personal o Hábeas Corpus.',
    keyArticles: [
      'Arts. 6–11 (Demanda y sentencia de Inconstitucionalidad)',
      'Arts. 12–37 (Proceso de Amparo, medida cautelar y sobreseimiento)',
      'Arts. 38–76 (Exhibición Personal / Hábeas Corpus clásico, preventivo y correctivo)',
    ],
    officialSource: 'Corte Suprema de Justicia (Sala de lo Constitucional)',
  },
  {
    id: 'law-ce',
    familyId: 'constitucional-electoral-municipal',
    title: 'Código Electoral',
    shortCode: 'C.E.',
    decree: 'Decreto Legislativo N.° 413 de 2013',
    lastReform: 'Reforma 2023–2025 (reducción a 60 diputados de la Asamblea Legislativa y voto en el exterior)',
    status: 'Reformada 2024–2026',
    synthesis:
      'Regula el ejercicio del sufragio activo y pasivo, la organización del Tribunal Supremo Electoral (TSE), los partidos políticos, las circunscripciones departamentales y el escrutinio. Incorpora la reducción de la Asamblea Legislativa de 84 a 60 diputados propietarios con fórmula D’Hondt y el voto electrónico remoto y presencial en el extranjero.',
    keyArticles: [
      'Art. 10–13 (Integración de 60 diputaciones a la Asamblea Legislativa)',
      'Arts. 57–80 (Organización y atribuciones del TSE)',
      'Arts. 214–220 (Escrutinio final y asignación de escaños)',
    ],
    officialSource: 'Asamblea Legislativa / Diario Oficial',
  },
  {
    id: 'law-cm',
    familyId: 'constitucional-electoral-municipal',
    title: 'Código Municipal',
    shortCode: 'C.M.',
    decree: 'Decreto Legislativo N.° 274 de 1986',
    lastReform: 'Armonizado con la Ley Especial para la Reestructuración Municipal (2023–2025)',
    status: 'Reformada 2024–2026',
    synthesis:
      'Desarrolla la autonomía económica, técnica y administrativa del municipio prevista en el Art. 203 Cn. Define las competencias del Concejo Municipal y del Alcalde, la potestad normativa mediante ordenanzas, la prestación de servicios públicos locales, el régimen tributario municipal y los mecanismos de participación ciudadana.',
    keyArticles: [
      'Art. 2–4 (Autonomía y competencias municipales)',
      'Arts. 24–35 (Concejo Municipal y Alcalde)',
      'Arts. 126–137 (Régimen sancionatorio administrativo municipal)',
    ],
    officialSource: 'Asamblea Legislativa de El Salvador',
  },
  {
    id: 'law-lerm',
    familyId: 'constitucional-electoral-municipal',
    title: 'Ley Especial para la Reestructuración Municipal',
    shortCode: 'LERM',
    decree: 'Decreto Legislativo N.° 762 de 2023 (vigencia operativa mayo 2024)',
    lastReform: 'Vigente en el período municipal 2024–2027',
    status: 'Reformada 2024–2026',
    synthesis:
      'Reorganizó la división político-administrativa local de El Salvador, reduciendo los 262 antiguos municipios a 44 municipios integrados por 262 distritos administrativos. Preserva la identidad histórica, las partidas del Registro del Estado Familiar y la atención territorial mediante oficinas distritales bajo una administración municipal unificada.',
    keyArticles: [
      'Art. 1–3 (Creación de 44 municipios y conversión de 262 distritos)',
      'Art. 4–7 (Sucesión de bienes, personal y registros distritales)',
    ],
    officialSource: 'Asamblea Legislativa / Diario Oficial',
  },
  {
    id: 'law-laip',
    familyId: 'constitucional-electoral-municipal',
    title: 'Ley de Acceso a la Información Pública',
    shortCode: 'LAIP',
    decree: 'Decreto Legislativo N.° 534 de 2010',
    lastReform: 'Armonizada con la Ley para la Protección de Datos Personales (D.L. 144/2024)',
    status: 'Reformada 2024–2026',
    synthesis:
      'Garantiza el derecho humano de acceso a la información pública en poder de los entes obligados del Estado, bajo el principio de máxima publicidad y transparencia oficiosa. Regula las Oficialías de Información, los límites de información reservada y confidencial, y las competencias del Instituto de Acceso a la Información Pública (IAIP).',
    keyArticles: [
      'Art. 4 (Principios rectores: máxima publicidad y gratuidad)',
      'Art. 10 (Información oficiosa obligatoria)',
      'Arts. 19–24 (Información reservada y confidencial)',
    ],
    officialSource: 'Asamblea Legislativa / Diario Oficial',
  },
  {
    id: 'law-leg',
    familyId: 'constitucional-electoral-municipal',
    title: 'Ley de Ética Gubernamental',
    shortCode: 'LEG',
    decree: 'Decreto Legislativo N.° 873 de 2011',
    lastReform: 'Vigente con régimen sancionatorio del TEG',
    status: 'Vigente',
    synthesis:
      'Establece el marco normativo de probidad, transparencia, imparcialidad e incompatibilidades aplicable a todo servidor público y funcionario del Estado, municipalidades y autónomas. Tipifica prohibiciones éticas (nepotismo, conflicto de interés, uso indebido de bienes públicos) y el procedimiento sancionador ante el Tribunal de Ética Gubernamental (TEG).',
    keyArticles: [
      'Art. 4 (Principios de la ética pública)',
      'Arts. 5–7 (Deberes y prohibiciones éticas)',
      'Arts. 42–49 (Sanciones de multa e inhabilitación)',
    ],
    officialSource: 'Asamblea Legislativa / Diario Oficial',
  },
  {
    id: 'law-ccr',
    familyId: 'constitucional-electoral-municipal',
    title: 'Ley de la Corte de Cuentas de la República',
    shortCode: 'LCCR',
    decree: 'Decreto Legislativo N.° 438 de 1995',
    lastReform: 'Vigente (control gubernamental y juicio de cuentas)',
    status: 'Vigente',
    synthesis:
      'Regula el organismo constitucional independiente encargado de la fiscalización técnica de la Hacienda Pública y la ejecución del Presupuesto General del Estado (Art. 195 Cn.). Norma la auditoría gubernamental, el examen de cuentas y el juicio de cuentas para determinar responsabilidad administrativa o patrimonial.',
    keyArticles: [
      'Arts. 1–5 (Competencia fiscalizadora sobre fondos públicos)',
      'Arts. 54–78 (Juicio de cuentas y responsabilidad patrimonial)',
    ],
    officialSource: 'Asamblea Legislativa / Corte de Cuentas de la República',
  },

  // =========================================================================
  // 2. PENAL, PROCESAL PENAL Y SEGURIDAD
  // =========================================================================
  {
    id: 'law-cp',
    familyId: 'penal-procesal-seguridad',
    title: 'Código Penal de El Salvador',
    shortCode: 'C.P.',
    decree: 'Decreto Legislativo N.° 1030 de 1997',
    lastReform: 'D.L. N.° 537/2026 (Prisión perpetua Art. 45) y reforma Art. 147-E (Cero Tolerancia, dic. 2024)',
    status: 'Reformada 2024–2026',
    synthesis:
      'Codifica los principios de legalidad penal, culpabilidad y proporcionalidad, el catálogo de penas y los tipos penales contra la vida, integridad, patrimonio, seguridad colectiva y administración pública. La reforma mediante D.L. N.° 537/2026 incorporó la pena de prisión perpetua en el Art. 45 CP para crímenes de extrema gravedad, mientras la reforma al Art. 147-E instauró la Cero Tolerancia al alcohol al volante con penas de 2 a 5 años (particulares) y 5 a 10 años (transporte colectivo o carga).',
    keyArticles: [
      'Art. 1 y 4 (Principio de legalidad y responsabilidad penal)',
      'Art. 45 (Penas principales, incluyendo prisión perpetua D.L. 537/2026)',
      'Art. 128–129 (Homicidio simple y agravado)',
      'Art. 147-E (Conducción Peligrosa bajo Cero Tolerancia)',
    ],
    officialSource: 'Asamblea Legislativa / Corte Suprema de Justicia (CSJ)',
  },
  {
    id: 'law-cpp',
    familyId: 'penal-procesal-seguridad',
    title: 'Código Procesal Penal',
    shortCode: 'C.Pr.Pn.',
    decree: 'Decreto Legislativo N.° 733 de 2008',
    lastReform: 'D.L. N.° 534/2026 (Imprescriptibilidad y actualización procedimental)',
    status: 'Reformada 2024–2026',
    synthesis:
      'Establece el proceso penal acusatorio adversarial, la dirección funcional de la investigación por la Fiscalía General de la República (FGR), los derechos del imputado y de la víctima, el régimen de medidas cautelares, la prueba lícita y la cadena de custodia. La reforma D.L. N.° 534/2026 amplió supuestos de imprescriptibilidad de la acción penal y agilizó trámites procesales en delitos graves.',
    keyArticles: [
      'Arts. 1–16 (Garantías procesales y juicio previo)',
      'Art. 32–34 (Prescripción e imprescriptibilidad de la acción penal, D.L. 534/2026)',
      'Art. 38 (Límites legales a la conciliación penal)',
      'Arts. 250–252 (Cadena de custodia y prueba pericial)',
    ],
    officialSource: 'Asamblea Legislativa / Corte Suprema de Justicia (CSJ)',
  },
  {
    id: 'law-lpj',
    familyId: 'penal-procesal-seguridad',
    title: 'Ley Penal Juvenil',
    shortCode: 'LPJ',
    decree: 'Decreto Legislativo N.° 863 de 1994',
    lastReform: 'Reformas 2022–2025 sobre responsabilidad penal juvenil en delitos graves y pandillas',
    status: 'Reformada 2024–2026',
    synthesis:
      'Regula la responsabilidad penal especial aplicable a personas mayores de 12 y menores de 18 años a quienes se atribuya la comisión de un hecho tipificado como delito. Establece medidas socioeducativas y de internamiento en centros especializados, ajustadas tras las reformas para ilícitos de criminalidad organizada.',
    keyArticles: [
      'Art. 2 y 3 (Ámbito de aplicación etario y garantías)',
      'Art. 8–15 (Medidas aplicables e internamiento)',
    ],
    officialSource: 'Asamblea Legislativa / Corte Suprema de Justicia (CSJ)',
  },
  {
    id: 'law-lpen',
    familyId: 'penal-procesal-seguridad',
    title: 'Ley Penitenciaria',
    shortCode: 'L.Pen.',
    decree: 'Decreto Legislativo N.° 1027 de 1997',
    lastReform: 'Reformas vigentes sobre régimen disciplinario y control de centros penales',
    status: 'Vigente',
    synthesis:
      'Norma la ejecución de las penas privativas de libertad y de la detención provisional bajo el control de los Jueces de Vigilancia Penitenciaria y de Ejecución de la Pena. Regula los derechos y deberes de las personas privadas de libertad, la clasificación penitenciaria y la progresividad en el tratamiento.',
    keyArticles: [
      'Art. 2 y 3 (Finalidad de readaptación y legalidad ejecutiva)',
      'Arts. 35–42 (Competencia del Juez de Vigilancia Penitenciaria)',
    ],
    officialSource: 'Asamblea Legislativa / Corte Suprema de Justicia (CSJ)',
  },
  {
    id: 'law-lcco',
    familyId: 'penal-procesal-seguridad',
    title: 'Ley Contra el Crimen Organizado',
    shortCode: 'LCCO',
    decree: 'Decreto Legislativo N.° 190 de 2006',
    lastReform: 'Reformas 2022–2025 (Tribunales Especializados Contra el Crimen Organizado y agrupación de procesos)',
    status: 'Reformada 2024–2026',
    synthesis:
      'Define la competencia especial para investigar y juzgar estructuras de criminalidad organizada, agrupaciones ilícitas y delitos complejos. Incorpora tribunales especializados contra el crimen organizado, técnicas especiales de investigación, reserva de identidad de testigos y agrupación procesal por estructura.',
    keyArticles: [
      'Art. 1–2 (Concepto de crimen organizado y competencia)',
      'Arts. 5–17 (Técnicas especiales de investigación y prueba)',
    ],
    officialSource: 'Asamblea Legislativa / CSJ',
  },
  {
    id: 'law-lecat',
    familyId: 'penal-procesal-seguridad',
    title: 'Ley Especial contra Actos de Terrorismo',
    shortCode: 'LECAT',
    decree: 'Decreto Legislativo N.° 108 de 2006',
    lastReform: 'Reformas vigentes en materia de organizaciones terroristas y financiamiento',
    status: 'Vigente',
    synthesis:
      'Tipifica y sanciona los actos de terrorismo, la pertenencia o colaboración con organizaciones terroristas, el financiamiento del terrorismo y el empleo de armas o explosivos para infundir temor en la población o subvertir el orden constitucional.',
    keyArticles: [
      'Arts. 4–13 (Organizaciones terroristas y actos conexos)',
      'Arts. 29–31 (Financiamiento al terrorismo y decomiso)',
    ],
    officialSource: 'Asamblea Legislativa / FGR',
  },
  {
    id: 'law-ledic',
    familyId: 'penal-procesal-seguridad',
    title: 'Ley Especial contra los Delitos Informáticos y Conexos',
    shortCode: 'LEDIC',
    decree: 'Decreto Legislativo N.° 260 de 2016',
    lastReform: 'Armonizada con la Ley de Ciberseguridad (D.L. 143/2024)',
    status: 'Reformada 2024–2026',
    synthesis:
      'Protege los bienes jurídicos vinculados a los sistemas de información, datos electrónicos, identidad digital y comercio electrónico. Tipifica el acceso indebido, sabotaje informático, estafa informática, suplantación de identidad, grooming y pornografía infantil en entornos digitales.',
    keyArticles: [
      'Arts. 4–12 (Acceso indebido, daño informático y fraude)',
      'Arts. 22–32 (Delitos informáticos contra la intimidad y niñez)',
    ],
    officialSource: 'Asamblea Legislativa / FGR / PNC',
  },
  {
    id: 'law-leed',
    familyId: 'penal-procesal-seguridad',
    title: 'Ley Especial de Extinción de Dominio y de la Administración de los Bienes de Origen o Destinación Ilícita',
    shortCode: 'LEED',
    decree: 'Decreto Legislativo N.° 534 de 2013',
    lastReform: 'Vigente (jurisdicción autónoma real sobre patrimonios ilícitos)',
    status: 'Vigente',
    synthesis:
      'Instituye la acción constitucional y patrimonial de extinción de dominio, de naturaleza jurisdiccional, real y autónoma del proceso penal, dirigida a declarar a favor del Estado la pérdida de propiedad sobre bienes de origen ilícito o destinados a actividades delictivas, administrados por el CONAB.',
    keyArticles: [
      'Arts. 5–7 (Autonomía de la acción e imprescriptibilidad)',
      'Arts. 14–36 (Procedimiento ante Juzgado Especializado de Extinción de Dominio)',
    ],
    officialSource: 'Asamblea Legislativa / CSJ / FGR',
  },
  {
    id: 'law-lrard',
    familyId: 'penal-procesal-seguridad',
    title: 'Ley Reguladora de las Actividades Relativas a las Drogas',
    shortCode: 'LRARD',
    decree: 'Decreto Legislativo N.° 153 de 2003',
    lastReform: 'Vigente con fiscalización de precursores químicos por SRS y PNC',
    status: 'Vigente',
    synthesis:
      'Regula el control lícito de estupefacientes, psicotrópicos y precursores químicos para fines médicos o científicos, y tipifica los delitos de narcotráfico (posesión y tenencia, tráfico ilícito, facilitación de medios y siembra/cultivo).',
    keyArticles: [
      'Arts. 33–36 (Tráfico ilícito, posesión y tenencia)',
      'Arts. 66–71 (Decomiso y destrucción de sustancias)',
    ],
    officialSource: 'Asamblea Legislativa / SRS / PNC',
  },

  // =========================================================================
  // 3. FAMILIA, NIÑEZ, GÉNERO Y REGISTRO
  // =========================================================================
  {
    id: 'law-cf',
    familyId: 'familia-ninez-genero-registro',
    title: 'Código de Familia',
    shortCode: 'C.F.',
    decree: 'Decreto Legislativo N.° 677 de 1993',
    lastReform: 'Armonizado con Ley Crecer Juntos (D.L. 431) y prohibición absoluta del matrimonio infantil',
    status: 'Reformada 2024–2026',
    synthesis:
      'Regula la institución jurídica de la familia, el matrimonio, la unión no matrimonial, los regímenes patrimoniales, el divorcio, la filiación, la autoridad parental, los alimentos y la tutela. Consagra la igualdad jurídica de los cónyuges y de todos los hijos, así como el interés superior de niñas, niños y adolescentes.',
    keyArticles: [
      'Arts. 11–45 (Matrimonio, impedimentos y regímenes patrimoniales)',
      'Arts. 105–117 (Divorcio y sus causales)',
      'Arts. 206–271 (Autoridad parental y obligación alimenticia)',
    ],
    officialSource: 'Asamblea Legislativa / Corte Suprema de Justicia (CSJ)',
  },
  {
    id: 'law-lpf',
    familyId: 'familia-ninez-genero-registro',
    title: 'Ley Procesal de Familia',
    shortCode: 'L.Pr.F.',
    decree: 'Decreto Legislativo N.° 133 de 1994',
    lastReform: 'Vigente (oralidad, inmediación y protección cautelar familiar)',
    status: 'Vigente',
    synthesis:
      'Instrumenta los procesos jurisdiccionales ante los Juzgados y Cámaras de Familia bajo los principios de oralidad, inmediación, concentración y protección de los miembros vulnerables del grupo familiar. Regula las medidas de protección cautelar, audiencia preliminar, audiencia de sentencia y ejecución de cuotas alimenticias.',
    keyArticles: [
      'Arts. 3–7 (Principios rectores del proceso de familia)',
      'Arts. 75–80 (Medidas cautelares y de protección)',
      'Arts. 102–123 (Audiencia preliminar y de sentencia)',
    ],
    officialSource: 'Asamblea Legislativa / CSJ',
  },
  {
    id: 'law-lcj',
    familyId: 'familia-ninez-genero-registro',
    title: 'Ley Crecer Juntos para la Protección Integral de la Primera Infancia, Niñez y Adolescencia',
    shortCode: 'LCJ',
    decree: 'Decreto Legislativo N.° 431 de 2022',
    lastReform: 'Reformas 2024–2025 (incl. Art. 137 sobre Centros de Atención a la Primera Infancia - CAPI)',
    status: 'Reformada 2024–2026',
    synthesis:
      'Sustituyó a la antigua LEPINA y creó el Sistema Nacional de Protección Integral bajo rectoría del Consejo Nacional de la Primera Infancia, Niñez y Adolescencia (CONAPINA). Garantiza el desarrollo integral desde la gestación hasta los 18 años, regula los Centros de Atención a la Primera Infancia (CAPI, Art. 137) y establece el deber inexcusable de denuncia ante vulneración de derechos.',
    keyArticles: [
      'Arts. 1–12 (Interés superior y rol primario de la familia)',
      'Art. 137 y sigs. (Regulación y autorización de CAPI)',
      'Arts. 150–180 (CONAPINA, Juntas de Protección y medidas)',
    ],
    officialSource: 'Asamblea Legislativa / CONAPINA',
  },
  {
    id: 'law-ncc',
    familyId: 'familia-ninez-genero-registro',
    title: 'Ley Nacer con Cariño para un Parto Respetado y un Cuidado Cariñoso y Sensible para el Recién Nacido',
    shortCode: 'LNCC',
    decree: 'Decreto Legislativo N.° 143 de 2021',
    lastReform: 'Vigente en todo el Sistema Nacional Integrado de Salud (MINSAL / ISSS)',
    status: 'Vigente',
    synthesis:
      'Establece el estándar obligatorio de atención humanizada, digna y basada en evidencia científica para la mujer embarazada, el parto, el puerperio y la persona recién nacida. Reconoce el derecho al acompañamiento continuo, al contacto piel con piel inmediato y a la lactancia materna temprana.',
    keyArticles: [
      'Arts. 5–11 (Derechos de la mujer gestante y del recién nacido)',
      'Arts. 12–18 (Obligaciones del personal de salud y centros hospitalarios)',
    ],
    officialSource: 'Asamblea Legislativa / MINSAL',
  },
  {
    id: 'law-leiv',
    familyId: 'familia-ninez-genero-registro',
    title: 'Ley Especial Integral para una Vida Libre de Violencia para las Mujeres',
    shortCode: 'LEIV',
    decree: 'Decreto Legislativo N.° 520 de 2010',
    lastReform: 'Vigente con Tribunales Especializados para una Vida Libre de Violencia y Discriminación para las Mujeres',
    status: 'Vigente',
    synthesis:
      'Reconoce el derecho de las mujeres a una vida libre de violencia en los ámbitos público y privado. Tipifica formas específicas de violencia (feminicida, física, psicológica, patrimonial, simbólica, obstétrica y laboral), prohíbe la conciliación en delitos de violencia contra la mujer y asigna competencia a tribunales especializados.',
    keyArticles: [
      'Arts. 8–10 (Tipos y modalidades de violencia)',
      'Arts. 45–55 (Delitos especializados: feminicidio y expresiones de violencia)',
    ],
    officialSource: 'Asamblea Legislativa / CSJ / FGR',
  },
  {
    id: 'law-lcvi',
    familyId: 'familia-ninez-genero-registro',
    title: 'Ley Contra la Violencia Intrafamiliar',
    shortCode: 'LCVI',
    decree: 'Decreto Legislativo N.° 902 de 1996',
    lastReform: 'Vigente (medidas inmediatas de protección en Juzgados de Paz y Familia)',
    status: 'Vigente',
    synthesis:
      'Establece los mecanismos preventivos, sancionatorios y de protección inmediata para erradicar la violencia intrafamiliar en cualquiera de sus manifestaciones. Faculta a los Juzgados de Paz y de Familia para dictar órdenes de alejamiento, exclusión del hogar y auxilio policial inmediato.',
    keyArticles: [
      'Art. 3 (Concepto y formas de violencia intrafamiliar)',
      'Art. 7 (Catálogo de medidas de protección inmediatas)',
    ],
    officialSource: 'Asamblea Legislativa / CSJ / PNC',
  },
  {
    id: 'law-lea',
    familyId: 'familia-ninez-genero-registro',
    title: 'Ley Especial de Adopciones',
    shortCode: 'LEA',
    decree: 'Decreto Legislativo N.° 282 de 2016',
    lastReform: 'Armonizada con CONAPINA y Ley Crecer Juntos',
    status: 'Vigente',
    synthesis:
      'Regula la adopción como institución de protección familiar permanente e irrevocable que confiere al adoptado la calidad de hijo pleno. Establece el procedimiento administrativo previo ante la Oficina para Adopciones (OPA) y la fase judicial ante el Juez Especializado de Niñez o Familia.',
    keyArticles: [
      'Arts. 1–10 (Naturaleza irrevocable y principio de subsidiariedad)',
      'Arts. 20–65 (Requisitos de adoptantes y procedimiento administrativo-judicial)',
    ],
    officialSource: 'Asamblea Legislativa / CONAPINA / CSJ',
  },
  {
    id: 'law-lnpn',
    familyId: 'familia-ninez-genero-registro',
    title: 'Ley del Nombre de la Persona Natural',
    shortCode: 'LNPN',
    decree: 'Decreto Legislativo N.° 450 de 1990',
    lastReform: 'Vigente en el Registro del Estado Familiar',
    status: 'Vigente',
    synthesis:
      'Regula el derecho fundamental y atributo de la personalidad consistente en el nombre propio y los apellidos de toda persona natural en El Salvador, su asignación por filiación matrimonial, extramatrimonial o adoptiva, así como los supuestos taxativos de cambio o adecuación.',
    keyArticles: [
      'Arts. 1–15 (Formación del nombre propio y apellidos)',
      'Arts. 23–25 (Cambio de nombre por vía judicial o notarial)',
    ],
    officialSource: 'Asamblea Legislativa / RNPN',
  },
  {
    id: 'law-ltref',
    familyId: 'familia-ninez-genero-registro',
    title: 'Ley Transitoria del Registro del Estado Familiar y de los Regímenes Patrimoniales del Matrimonio',
    shortCode: 'LTREF',
    decree: 'Decreto Legislativo N.° 496 de 1995',
    lastReform: 'Armonizada con la reestructuración de 44 municipios y 262 distritos',
    status: 'Reformada 2024–2026',
    synthesis:
      'Norma los asientos de nacimiento, matrimonio, divorcio, defunción y regímenes patrimoniales en los Registros del Estado Familiar municipales y distritales, así como las rectificaciones, reposiciones y anotaciones marginales por vía judicial o notarial.',
    keyArticles: [
      'Arts. 1–19 (Organización del Registro del Estado Familiar)',
      'Arts. 17–22 (Rectificación y reposición de partidas)',
    ],
    officialSource: 'Asamblea Legislativa / RNPN',
  },

  // =========================================================================
  // 4. CIVIL, PROCESAL CIVIL Y MERCANTIL Y NOTARIAL
  // =========================================================================
  {
    id: 'law-cc',
    familyId: 'civil-procesal-notarial',
    title: 'Código Civil de El Salvador',
    shortCode: 'C.C.',
    decree: 'Decreto Ejecutivo de 23 de agosto de 1859 (vigencia 1860)',
    lastReform: 'Vigente en obligaciones, contratos, bienes reales y sucesiones',
    status: 'Vigente',
    synthesis:
      'Cuerpo normativo fundamental del derecho privado común salvadoreño. Regula las personas naturales y jurídicas, los bienes, el dominio y demás derechos reales (usufructo, servidumbres, hipoteca), las sucesiones por causa de muerte (testada e intestada), y la teoría general de las obligaciones y contratos civiles.',
    keyArticles: [
      'Arts. 560–744 (Bienes, dominio, posesión y prescripción adquisitiva)',
      'Arts. 952–1214 (Sucesión por causa de muerte y testamentos)',
      'Arts. 1308–1596 (Fuentes de obligaciones, validez y nulidades)',
    ],
    officialSource: 'Asamblea Legislativa / Corte Suprema de Justicia (CSJ)',
  },
  {
    id: 'law-cpcm',
    familyId: 'civil-procesal-notarial',
    title: 'Código Procesal Civil y Mercantil',
    shortCode: 'CPCM',
    decree: 'Decreto Legislativo N.° 712 de 2008',
    lastReform: 'Vigente con notificaciones electrónicas (SNE CSJ) y procesos orales',
    status: 'Vigente',
    synthesis:
      'Sustituyó el antiguo procedimiento escrito por un modelo procesal oral por audiencias regido por los principios de dispositivo, aportación, inmediación y publicidad. Regula los procesos declarativos (común y abreviado), procesos especiales (ejecutivo, posesorio, inquilinato, monitorio), recursos y ejecución forzosa.',
    keyArticles: [
      'Arts. 1–19 (Principios procesales y tutela judicial efectiva)',
      'Arts. 239–430 (Proceso común y proceso abreviado)',
      'Arts. 457–470 (Proceso ejecutivo y títulos ejecutivos)',
    ],
    officialSource: 'Asamblea Legislativa / Corte Suprema de Justicia (CSJ)',
  },
  {
    id: 'law-ln',
    familyId: 'civil-procesal-notarial',
    title: 'Ley de Notariado',
    shortCode: 'L.N.',
    decree: 'Decreto Legislativo N.° 218 de 1962',
    lastReform: 'Vigente bajo vigilancia de la Sección del Notariado de la CSJ',
    status: 'Vigente',
    synthesis:
      'Regula la función pública notarial delegada por el Estado al profesional autorizado por la Corte Suprema de Justicia para dar fe de los actos, contratos y declaraciones que ante él se otorguen. Establece el régimen del Protocolo, escritura matriz, actas notariales, testimonios, auténticas de firmas y responsabilidad disciplinaria.',
    keyArticles: [
      'Arts. 1–5 (Naturaleza de la función pública notarial)',
      'Arts. 16–49 (Protocolo, escritura matriz y testimonios)',
      'Arts. 50–54 (Actas notariales y legalización de firmas)',
    ],
    officialSource: 'Corte Suprema de Justicia (Sección del Notariado)',
  },
  {
    id: 'law-lenjv',
    familyId: 'civil-procesal-notarial',
    title: 'Ley del Ejercicio Notarial de la Jurisdicción Voluntaria y de Otras Diligencias',
    shortCode: 'LENJVOD',
    decree: 'Decreto Legislativo N.° 1073 de 1982',
    lastReform: 'Vigente en diligencias de aceptación de herencia, identidad y deslinde',
    status: 'Vigente',
    synthesis:
      'Faculta a los notarios salvadoreños para tramitar asuntos no contenciosos de jurisdicción voluntaria, descongestionando la sede judicial cuando existe acuerdo pleno y capacidad de los interesados (aceptación de herencia, remedición de inmuebles, establecimiento subsidiario de estado familiar, identidad personal y traducción de documentos).',
    keyArticles: [
      'Arts. 1–5 (Competencia notarial y exclusión por contención o incapaces)',
      'Arts. 15–21 (Aceptación de herencia y remedición de inmuebles ante notario)',
    ],
    officialSource: 'Asamblea Legislativa / Corte Suprema de Justicia (CSJ)',
  },
  {
    id: 'law-lrprh',
    familyId: 'civil-procesal-notarial',
    title: 'Ley de Reestructuración del Registro de la Propiedad Raíz e Hipotecas',
    shortCode: 'LRPRH',
    decree: 'Decreto Legislativo N.° 292 de 1986 (y Reglamento)',
    lastReform: 'Vigente bajo administración del Centro Nacional de Registros (CNR)',
    status: 'Vigente',
    synthesis:
      'Organiza el sistema registral inmobiliario bajo la técnica del folio real y los principios de prioridad, tracto sucesivo, rogación, especialidad y fe pública registral, garantizando la seguridad jurídica del tráfico inmobiliario y de las garantías hipotecarias en El Salvador.',
    keyArticles: [
      'Arts. 1–10 (Folio real y principios registrales)',
      'Arts. 40–52 (Calificación registral, observación e inscripción)',
    ],
    officialSource: 'Centro Nacional de Registros (CNR)',
  },

  // =========================================================================
  // 5. MERCANTIL, FINANCIERO, CONSUMIDOR Y TECNOLOGÍA
  // =========================================================================
  {
    id: 'law-ccom',
    familyId: 'mercantil-financiero-tecnologia',
    title: 'Código de Comercio',
    shortCode: 'C.Com.',
    decree: 'Decreto Legislativo N.° 671 de 1970',
    lastReform: 'D.L. N.° 905 (Capítulo VIII-Bis S.A.S., Arts. 305-A y sigs.) y prórroga gratuidad arancelaria al 31 dic. 2027',
    status: 'Reformada 2024–2026',
    synthesis:
      'Regula los comerciantes individuales y sociales, la empresa mercantil, los títulos valores (letra de cambio, pagaré, cheque) y los contratos mercantiles. Mediante el D.L. N.° 905 se incorporó el Capítulo VIII-Bis (Arts. 305-A y sigs.) que crea la Sociedad por Acciones Simplificada (S.A.S.): constituible desde un solo accionista mediante formularios especiales del Registro de Comercio (CNR) sin necesidad de escritura pública, con capital mínimo de $1.00 USD y gratuidad arancelaria prorrogada hasta el 31 de diciembre de 2027.',
    keyArticles: [
      'Arts. 17–305 (Sociedades mercantiles tradicionales)',
      'Arts. 305-A y sigs. (Sociedades por Acciones Simplificadas S.A.S., D.L. 905)',
      'Arts. 623–838 (Títulos valores y protesto)',
    ],
    officialSource: 'Asamblea Legislativa / Centro Nacional de Registros (CNR)',
  },
  {
    id: 'law-lrc',
    familyId: 'mercantil-financiero-tecnologia',
    title: 'Ley de Registro de Comercio',
    shortCode: 'LRC',
    decree: 'Decreto Legislativo N.° 271 de 1973',
    lastReform: 'Armonizada con inscripción digital de S.A.S. y matrícula de empresa en línea',
    status: 'Reformada 2024–2026',
    synthesis:
      'Regula la publicidad formal y material de los comerciantes, matrículas de empresa, establecimientos, pactos sociales, credenciales, poderes mercantiles y balances financieros ante el Registro de Comercio del CNR.',
    keyArticles: [
      'Arts. 1–13 (Organización y actos sujetos a inscripción)',
      'Arts. 63–72 (Aranceles y exenciones vigentes para S.A.S. hasta 2027)',
    ],
    officialSource: 'Centro Nacional de Registros (CNR)',
  },
  {
    id: 'law-lpi-2024',
    familyId: 'mercantil-financiero-tecnologia',
    title: 'Ley de Propiedad Intelectual (Creación del ISPI)',
    shortCode: 'LPI',
    decree: 'Decreto Legislativo N.° 66/2024',
    lastReform: 'Aprobada en 2024 (unifica propiedad industrial y derechos de autor en el ISPI)',
    status: 'Reformada 2024–2026',
    synthesis:
      'Moderniza de forma integral el régimen de propiedad intelectual en El Salvador, sustituyendo leyes dispersas anteriores y creando el Instituto Salvadoreño de la Propiedad Intelectual (ISPI) adscrito al CNR. Protege marcas, patentes, modelos de utilidad, diseños industriales, indicaciones geográficas, derechos de autor y derechos conexos en entornos físicos y digitales.',
    keyArticles: [
      'Creación y competencias del Instituto Salvadoreño de la Propiedad Intelectual (ISPI)',
      'Registro simplificado y protección de marcas, patentes y secretos empresariales',
      'Tutela de derechos de autor, software y obras digitales',
    ],
    officialSource: 'Asamblea Legislativa / CNR (ISPI)',
  },
  {
    id: 'law-lcs-2024',
    familyId: 'mercantil-financiero-tecnologia',
    title: 'Ley de Ciberseguridad y Seguridad de la Información',
    shortCode: 'LCSI',
    decree: 'Decreto Legislativo N.° 143/2024',
    lastReform: 'Promulgada en noviembre de 2024',
    status: 'Reformada 2024–2026',
    synthesis:
      'Establece el marco nacional de gobernanza en ciberseguridad, protección de infraestructuras críticas de información del Estado y operadores esenciales, gestión de incidentes cibernéticos y creación de la Agencia de Ciberseguridad del Estado (ACE) para prevenir, detectar y responder ante ciberataques.',
    keyArticles: [
      'Creación de la Agencia de Ciberseguridad del Estado (ACE)',
      'Clasificación de infraestructuras críticas y reporte obligatorio de incidentes',
      'Deberes de prevención y resiliencia tecnológica en entidades públicas y privadas',
    ],
    officialSource: 'Asamblea Legislativa / Diario Oficial',
  },
  {
    id: 'law-lpdp-2024',
    familyId: 'mercantil-financiero-tecnologia',
    title: 'Ley para la Protección de Datos Personales',
    shortCode: 'LPDP',
    decree: 'Decreto Legislativo N.° 144/2024',
    lastReform: 'Promulgada en noviembre de 2024',
    status: 'Reformada 2024–2026',
    synthesis:
      'Consagra la protección integral de los datos personales en posesión de sujetos obligados públicos y privados. Reconoce los derechos ARCO-P (Acceso, Rectificación, Cancelación, Oposición y Portabilidad), el principio de consentimiento informado, la protección reforzada de datos sensibles y el régimen sancionatorio administrativo.',
    keyArticles: [
      'Principios de licitud, finalidad, proporcionalidad y seguridad del dato',
      'Derechos de los titulares (ARCO-P) y consentimiento expreso',
      'Régimen de transferencia internacional de datos y sanciones',
    ],
    officialSource: 'Asamblea Legislativa / Diario Oficial',
  },
  {
    id: 'law-lfe',
    familyId: 'mercantil-financiero-tecnologia',
    title: 'Ley de Firma Electrónica',
    shortCode: 'LFE',
    decree: 'Decreto Legislativo N.° 133 de 2015',
    lastReform: 'Vigente (equivalencia funcional y validez probatoria digital)',
    status: 'Vigente',
    synthesis:
      'Otorga equivalencia funcional y pleno valor jurídico y probatorio a la firma electrónica simple y a la firma electrónica certificada, equiparando esta última a la firma autógrafa en documentos públicos y privados cuando es emitida por un proveedor acreditado ante el Ministerio de Economía.',
    keyArticles: [
      'Arts. 3–6 (Principio de equivalencia funcional y neutralidad tecnológica)',
      'Arts. 18–27 (Firma electrónica certificada y valor probatorio)',
    ],
    officialSource: 'Asamblea Legislativa / Ministerio de Economía',
  },
  {
    id: 'law-lce',
    familyId: 'mercantil-financiero-tecnologia',
    title: 'Ley de Comercio Electrónico',
    shortCode: 'LCE',
    decree: 'Decreto Legislativo N.° 450 de 2019',
    lastReform: 'Vigente (contratación electrónica y factura/comprobantes digitales)',
    status: 'Vigente',
    synthesis:
      'Regula las relaciones contractuales celebradas por medios electrónicos entre proveedores y usuarios o entre comerciantes, garantizando la validez de la oferta y aceptación digital, los deberes de información previa en plataformas y la protección de transacciones en línea.',
    keyArticles: [
      'Arts. 1–7 (Ámbito de aplicación y validez de contratos electrónicos)',
      'Arts. 14–20 (Obligaciones de proveedores digitales y confirmación de compra)',
    ],
    officialSource: 'Asamblea Legislativa / Defensoría del Consumidor',
  },
  {
    id: 'law-lpc',
    familyId: 'mercantil-financiero-tecnologia',
    title: 'Ley de Protección al Consumidor',
    shortCode: 'LPC',
    decree: 'Decreto Legislativo N.° 776 de 2005',
    lastReform: 'Vigente con facultades sancionatorias de la Defensoría del Consumidor',
    status: 'Vigente',
    synthesis:
      'Protege los derechos e intereses legítimos de los consumidores frente a prácticas abusivas, cláusulas leoninas en contratos de adhesión, publicidad engañosa, cobros indebidos y productos defectuosos, bajo tutela del Tribunal Sancionador de la Defensoría del Consumidor.',
    keyArticles: [
      'Art. 4 (Derechos básicos de los consumidores)',
      'Art. 17 (Nulidad de cláusulas abusivas)',
      'Arts. 42–49 (Infracciones leves, graves y muy graves)',
    ],
    officialSource: 'Asamblea Legislativa / Defensoría del Consumidor',
  },
  {
    id: 'law-lc',
    familyId: 'mercantil-financiero-tecnologia',
    title: 'Ley de Competencia',
    shortCode: 'LC',
    decree: 'Decreto Legislativo N.° 528 de 2004',
    lastReform: 'Vigente bajo supervisión de la Superintendencia de Competencia',
    status: 'Vigente',
    synthesis:
      'Promueve, protege y garantiza la competencia económica mediante la prohibición y sanción de acuerdos anticompetitivos entre competidores (cárteles), prácticas verticales restrictivas, abuso de posición dominante y control previo de concentraciones económicas.',
    keyArticles: [
      'Art. 25 (Prácticas anticompetitivas absolutas entre competidores)',
      'Art. 30 (Abuso de posición dominante)',
      'Arts. 31–36 (Control de concentraciones económicas)',
    ],
    officialSource: 'Asamblea Legislativa / Superintendencia de Competencia',
  },
  {
    id: 'law-lcu',
    familyId: 'mercantil-financiero-tecnologia',
    title: 'Ley Contra la Usura',
    shortCode: 'LCU',
    decree: 'Decreto Legislativo N.° 221 de 2012',
    lastReform: 'Vigente con tasas máximas legales semestrales publicadas por el BCR',
    status: 'Vigente',
    synthesis:
      'Prohíbe y sanciona el cobro de tasas de interés efectivas que excedan los techos máximos legales calculados y publicados semestralmente por el Banco Central de Reserva (BCR) por segmento crediticio, protegiendo a deudores frente a prácticas usurarias formales e informales.',
    keyArticles: [
      'Arts. 5–7 (Cálculo de tasas máximas legales por el BCR)',
      'Arts. 11–13 (Sanciones y devolución de intereses cobrados en exceso)',
    ],
    officialSource: 'Asamblea Legislativa / Banco Central de Reserva (BCR) / SSF',
  },
  {
    id: 'law-lead',
    familyId: 'mercantil-financiero-tecnologia',
    title: 'Ley de Emisión de Activos Digitales',
    shortCode: 'LEAD',
    decree: 'Decreto Legislativo N.° 643 de 2023',
    lastReform: 'Vigente bajo regulación de la Comisión Nacional de Activos Digitales (CNAD)',
    status: 'Vigente',
    synthesis:
      'Establece el marco jurídico para la emisión, oferta pública, transferencia y custodia de activos digitales (tokens y valores tokenizados) distintos de la moneda de curso legal, creando la Comisión Nacional de Activos Digitales (CNAD) como ente supervisor.',
    keyArticles: [
      'Arts. 1–6 (Definición de activos digitales y exclusiones)',
      'Arts. 7–25 (CNAD, emisores y proveedores de servicios de activos digitales)',
    ],
    officialSource: 'Asamblea Legislativa / CNAD / SSF',
  },
  {
    id: 'law-lbtc',
    familyId: 'mercantil-financiero-tecnologia',
    title: 'Ley Bitcoin',
    shortCode: 'L.BTC',
    decree: 'Decreto Legislativo N.° 57 de 2021',
    lastReform: 'Reformas de enero de 2025 (aceptación voluntaria por privados y adecuación fiscal)',
    status: 'Reformada 2024–2026',
    synthesis:
      'Regula la circulación del bitcoin en El Salvador. Con las reformas aprobadas en enero de 2025, la aceptación de bitcoin como medio de pago por parte de los agentes económicos privados pasó a ser estrictamente voluntaria y las obligaciones tributarias se liquidan en dólares de los Estados Unidos.',
    keyArticles: [
      'Art. 1–4 (Naturaleza y voluntariedad de aceptación privada en reforma 2025)',
      'Art. 7–12 (Regulación de proveedores ante BCR y SSF)',
    ],
    officialSource: 'Asamblea Legislativa / BCR / SSF',
  },
  {
    id: 'law-lclda',
    familyId: 'mercantil-financiero-tecnologia',
    title: 'Ley Contra el Lavado de Dinero y de Activos',
    shortCode: 'LCLDA',
    decree: 'Decreto Legislativo N.° 498 de 1998',
    lastReform: 'Vigente bajo rectoría de la UIF-FGR y supervisión de la SSF',
    status: 'Vigente',
    synthesis:
      'Previene, detecta, sanciona y erradica el lavado de dinero y de activos. Impone a los sujetos obligados (bancos, notarías, inmobiliarias, proveedores de activos digitales) deberes de debida diligencia del cliente, reporte de operaciones sospechosas (ROS) y reporte de transacciones en efectivo ante la Unidad de Investigación Financiera (UIF-FGR).',
    keyArticles: [
      'Arts. 2 y 9 (Sujetos obligados y reporte de operaciones sospechosas a la UIF-FGR)',
      'Arts. 4–7 (Tipo penal de lavado de dinero y casos especiales)',
    ],
    officialSource: 'Unidad de Investigación Financiera (UIF - FGR) / SSF',
  },

  // =========================================================================
  // 6. LABORAL Y SEGURIDAD SOCIAL
  // =========================================================================
  {
    id: 'law-ct',
    familyId: 'laboral-seguridad-social',
    title: 'Código de Trabajo',
    shortCode: 'C.T.',
    decree: 'Decreto Legislativo N.° 15 de 1972',
    lastReform: 'Reformas vigentes en licencias parentales, protección laboral y salarios mínimos',
    status: 'Vigente',
    synthesis:
      'Armoniza las relaciones entre patronos y trabajadores bajo los principios de irrenunciabilidad de derechos laborales, estabilidad en el empleo e in dubio pro operario. Regula el contrato individual de trabajo, jornadas, descansos, vacaciones, aguinaldo, indemnización por despido injusto, sindicatos, contratación colectiva y el proceso laboral.',
    keyArticles: [
      'Arts. 17–25 (Contrato individual de trabajo y presunción laboral)',
      'Arts. 58–60 (Indemnización por despido sin causa justa)',
      'Arts. 161–203 (Jornadas, horas extras, vacaciones y aguinaldo)',
    ],
    officialSource: 'Asamblea Legislativa / MTPS / CSJ',
  },
  {
    id: 'law-lcd',
    familyId: 'laboral-seguridad-social',
    title: 'Ley de la Carrera Docente',
    shortCode: 'LCD',
    decree: 'Decreto Legislativo N.° 665 de 1996',
    lastReform: 'Vigente bajo rectoría del Ministerio de Educación, Ciencia y Tecnología (MINED)',
    status: 'Vigente',
    synthesis:
      'Regula las relaciones del Estado y de la comunidad educativa con los educadores al servicio del sector público, garantizando la profesionalización docente, el escalafón magisterial, los traslados, las licencias y el régimen disciplinario ante las Juntas y el Tribunal de la Carrera Docente.',
    keyArticles: [
      'Arts. 1–13 (Ingreso a la carrera y escalafón docente)',
      'Arts. 53–67 (Faltas, sanciones y procedimiento ante Juntas de la Carrera Docente)',
    ],
    officialSource: 'Ministerio de Educación, Ciencia y Tecnología (MINED)',
  },
  {
    id: 'law-lgprlt',
    familyId: 'laboral-seguridad-social',
    title: 'Ley General de Prevención de Riesgos en los Lugares de Trabajo',
    shortCode: 'LGPRLT',
    decree: 'Decreto Legislativo N.° 254 de 2010',
    lastReform: 'Vigente junto con su Reglamento General (D.E. N.° 86)',
    status: 'Vigente',
    synthesis:
      'Establece los requisitos de seguridad y salud ocupacional que deben cumplirse en todo centro de trabajo público o privado. Exige la conformación de Comités de Seguridad y Salud Ocupacional, programas de gestión de prevención, uso obligatorio de equipo de protección personal (EPP) y protocolos para trabajos de alto riesgo.',
    keyArticles: [
      'Arts. 8–18 (Comités y Programa de Gestión de Prevención de Riesgos)',
      'Arts. 38–55 (Condiciones de seguridad, higiene y ergonomía)',
    ],
    officialSource: 'Ministerio de Trabajo y Previsión Social (MTPS)',
  },
  {
    id: 'law-liss',
    familyId: 'laboral-seguridad-social',
    title: 'Ley del Seguro Social',
    shortCode: 'LISS',
    decree: 'Decreto Legislativo N.° 1263 de 1953',
    lastReform: 'Vigente bajo administración del Instituto Salvadoreño del Seguro Social (ISSS)',
    status: 'Vigente',
    synthesis:
      'Instituye el régimen obligatorio de seguridad social en salud, maternidad y riesgos profesionales (accidentes de trabajo y enfermedades profesionales) administrado por el ISSS, estableciendo la obligación patronal de inscripción y cotización oportuna.',
    keyArticles: [
      'Arts. 1–4 (Cobertura de enfermedad, accidente y maternidad)',
      'Arts. 29–34 (Financiamiento tripartito y mora patronal)',
    ],
    officialSource: 'Instituto Salvadoreño del Seguro Social (ISSS)',
  },
  {
    id: 'law-lisp',
    familyId: 'laboral-seguridad-social',
    title: 'Ley Integral del Sistema de Pensiones',
    shortCode: 'LISP',
    decree: 'Decreto Legislativo N.° 614 de 2022',
    lastReform: 'Vigente con creación del Instituto Salvadoreño de Pensiones (ISP)',
    status: 'Vigente',
    synthesis:
      'Reestructuró el sistema previsional salvadoreño reemplazando la antigua Ley SAP. Creó el Instituto Salvadoreño de Pensiones (ISP) como ente rector, estableció el cálculo de pensiones por vejez, invalidez y sobrevivencia, aumentó la tasa de cotización patronal y prohibió los retiros anticipados de saldos individuales.',
    keyArticles: [
      'Arts. 1–16 (Afiliación, cotizaciones del 16% y cuenta individual)',
      'Arts. 75–96 (Requisitos de pensión por vejez: 60 años hombres / 55 mujeres y 25 años cotizados)',
    ],
    officialSource: 'Asamblea Legislativa / SSF / ISP',
  },

  // =========================================================================
  // 7. ADMINISTRATIVO, TRIBUTARIO Y ADUANERO
  // =========================================================================
  {
    id: 'law-lpa',
    familyId: 'administrativo-tributario-aduanero',
    title: 'Ley de Procedimientos Administrativos',
    shortCode: 'LPA',
    decree: 'Decreto Legislativo N.° 856 de 2017',
    lastReform: 'Vigente en toda la Administración Pública central, autónoma y municipal',
    status: 'Vigente',
    synthesis:
      'Unifica el régimen jurídico de los actos administrativos, los derechos de los ciudadanos frente a la Administración, el silencio administrativo positivo y negativo, la invalidez del acto administrativo (nulidad absoluta y relativa), la potestad sancionadora y los recursos administrativos de reconsideración y apelación.',
    keyArticles: [
      'Arts. 3–16 (Principios de buena administración y derechos del administrado)',
      'Arts. 21–38 (Elementos, eficacia y nulidad del acto administrativo)',
      'Arts. 123–138 (Recursos administrativos y agotamiento de la vía)',
    ],
    officialSource: 'Asamblea Legislativa / Diario Oficial',
  },
  {
    id: 'law-ljca',
    familyId: 'administrativo-tributario-aduanero',
    title: 'Ley de la Jurisdicción Contencioso Administrativa',
    shortCode: 'LJCA',
    decree: 'Decreto Legislativo N.° 760 de 2017',
    lastReform: 'Vigente ante Juzgados, Cámaras y Sala de lo Contencioso Administrativo CSJ',
    status: 'Vigente',
    synthesis:
      'Organiza el control jurisdiccional especializado sobre la legalidad de la actuación u omisión de la Administración Pública, incluyendo actos expresos, presuntos, contratos administrativos, responsabilidad patrimonial directa del Estado y vías de hecho.',
    keyArticles: [
      'Arts. 1–12 (Objeto de la jurisdicción y competencia por cuantía/materia)',
      'Arts. 24–34 (Agotamiento de la vía administrativa y plazo de 60 días hábiles)',
    ],
    officialSource: 'Corte Suprema de Justicia (Sala de lo Contencioso Administrativo)',
  },
  {
    id: 'law-lcp',
    familyId: 'administrativo-tributario-aduanero',
    title: 'Ley de Compras Públicas',
    shortCode: 'LCP',
    decree: 'Decreto Legislativo N.° 652 de 2023',
    lastReform: 'Vigente bajo rectoría de la DINAC y plataforma COMPRASAL',
    status: 'Vigente',
    synthesis:
      'Sustituyó a la antigua LACAP para modernizar y agilizar las contrataciones de obras, bienes y servicios del Estado, municipalidades e instituciones autónomas. Crea la Dirección Nacional de Compras Públicas (DINAC) y regula la licitación competitiva, comparación de precios, contratación directa y subasta inversa electrónica en COMPRASAL.',
    keyArticles: [
      'Arts. 1–10 (Principios de eficiencia, transparencia y DINAC)',
      'Arts. 38–60 (Modalidades de contratación en COMPRASAL)',
    ],
    officialSource: 'Asamblea Legislativa / DINAC (COMPRASAL)',
  },
  {
    id: 'law-ctrib',
    familyId: 'administrativo-tributario-aduanero',
    title: 'Código Tributario',
    shortCode: 'C.Trib.',
    decree: 'Decreto Legislativo N.° 230 de 2000',
    lastReform: 'Reformas 2023–2025 sobre Facturación Electrónica (DTE) y fiscalización digital',
    status: 'Reformada 2024–2026',
    synthesis:
      'Contiene los principios generales, normas de fiscalización, deberes formales de los contribuyentes, Documentos Tributarios Electrónicos (DTE), caducidad, infracciones y sanciones aplicables a los tributos internos administrados por el Ministerio de Hacienda.',
    keyArticles: [
      'Arts. 1–15 (Principio de reserva de ley tributaria y obligación tributaria)',
      'Arts. 107–119 (Emisión de Documentos Tributarios Electrónicos - DTE)',
      'Arts. 173–192 (Facultades de fiscalización y liquidación oficiosa)',
    ],
    officialSource: 'Asamblea Legislativa / Ministerio de Hacienda',
  },
  {
    id: 'law-lisr',
    familyId: 'administrativo-tributario-aduanero',
    title: 'Ley de Impuesto sobre la Renta',
    shortCode: 'LISR',
    decree: 'Decreto Legislativo N.° 134 de 1991',
    lastReform: 'Reforma 2024 sobre exclusión de rentas por remesas familiares e inversiones del exterior',
    status: 'Reformada 2024–2026',
    synthesis:
      'Grava los ingresos obtenidos por personas naturales y jurídicas domiciliadas o no en El Salvador. Incluye las reformas recientes de 2024 que declaran exentas del Impuesto sobre la Renta las remesas familiares y los ingresos provenientes de inversiones o transferencias de capital del exterior para fomentar la atracción de capitales.',
    keyArticles: [
      'Arts. 1–4 (Hecho generador, rentas gravadas y rentas no gravadas/exentas)',
      'Arts. 28–37 (Deducciones permitidas y tasas corporativas del 25% y 30%)',
    ],
    officialSource: 'Asamblea Legislativa / Ministerio de Hacienda',
  },
  {
    id: 'law-liva',
    familyId: 'administrativo-tributario-aduanero',
    title: 'Ley de Impuesto a la Transferencia de Bienes Muebles y a la Prestación de Servicios',
    shortCode: 'LIVA',
    decree: 'Decreto Legislativo N.° 296 de 1992',
    lastReform: 'Vigente con tasa general del 13% y DTE electrónico',
    status: 'Vigente',
    synthesis:
      'Regula el impuesto indirecto al consumo (IVA) con tasa general del 13% y tasa 0% para exportaciones de bienes y servicios. Establece la mecánica de débito fiscal y crédito fiscal, las retenciones y percepciones tributarias y las exenciones taxativas.',
    keyArticles: [
      'Arts. 4–17 (Hechos generadores: transferencia, importación y servicios)',
      'Arts. 54–65 (Tasa del 13%, débito y crédito fiscal)',
    ],
    officialSource: 'Asamblea Legislativa / Ministerio de Hacienda',
  },
  {
    id: 'law-cauca',
    familyId: 'administrativo-tributario-aduanero',
    title: 'Código Aduanero Uniforme Centroamericano y su Reglamento (CAUCA / RECAUCA)',
    shortCode: 'CAUCA / RECAUCA',
    decree: 'Resolución COMIECO N.° 223-2008 / 224-2008 (SICA / SIECA)',
    lastReform: 'Vigente como derecho comunitario regional centroamericano',
    status: 'Vigente',
    synthesis:
      'Instrumento jurídico regional de jerarquía superior a la ley secundaria (Art. 144 Cn.) que regula la potestad aduanera, los regímenes aduaneros (importación definitiva, exportación, tránsito, depósito, perfeccionamiento activo), la valoración aduanera OMC y los auxiliares de la función pública aduanera.',
    keyArticles: [
      'Arts. 1–14 CAUCA (Potestad aduanera y servicio aduanero)',
      'Arts. 89–108 CAUCA (Regímenes aduaneros definitivos, temporales y liberatorios)',
    ],
    officialSource: 'SIECA / SICA / Dirección General de Aduanas (Ministerio de Hacienda)',
  },
  {
    id: 'law-lepsia',
    familyId: 'administrativo-tributario-aduanero',
    title: 'Ley Especial para Sancionar Infracciones Aduaneras',
    shortCode: 'LEPSIA',
    decree: 'Decreto Legislativo N.° 551 de 2001',
    lastReform: 'Vigente (tipificación de infracciones administrativas, tributarias y delitos aduaneros)',
    status: 'Vigente',
    synthesis:
      'Tipifica las infracciones aduaneras administrativas y tributarias sancionadas por la Dirección General de Aduanas, así como los delitos de contrabando de mercaderías y defraudación de la renta de aduanas perseguidos en sede penal por la FGR.',
    keyArticles: [
      'Arts. 5–14 (Infracciones administrativas y tributarias aduaneras)',
      'Arts. 15–24 (Delito de contrabando de mercaderías y defraudación)',
    ],
    officialSource: 'Asamblea Legislativa / Ministerio de Hacienda / FGR',
  },
  {
    id: 'law-lsa',
    familyId: 'administrativo-tributario-aduanero',
    title: 'Ley de Simplificación Aduanera',
    shortCode: 'LSA',
    decree: 'Decreto Legislativo N.° 529 de 1999',
    lastReform: 'Vigente con transmisión electrónica anticipada y selectividad de riesgo',
    status: 'Vigente',
    synthesis:
      'Moderniza y agiliza el despacho aduanero mediante el uso de sistemas informáticos de autodeterminación tributaria, selectividad aleatoria automatizada (verde, amarillo, rojo) y verificación inmediata o a posteriori de las declaraciones de mercancías.',
    keyArticles: [
      'Arts. 3–11 (Autodeterminación, transmisión electrónica y selectividad)',
      'Arts. 14–18 (Verificación posterior al despacho)',
    ],
    officialSource: 'Asamblea Legislativa / Dirección General de Aduanas',
  },

  // =========================================================================
  // 8. AMBIENTAL, SANITARIO, ENERGÉTICO Y TRANSPORTE
  // =========================================================================
  {
    id: 'law-lma',
    familyId: 'ambiental-sanitario-energetico-transporte',
    title: 'Ley del Medio Ambiente',
    shortCode: 'LMA',
    decree: 'Decreto Legislativo N.° 233 de 1998',
    lastReform: 'Vigente bajo rectoría del MARN y Juzgados Ambientales de la CSJ',
    status: 'Vigente',
    synthesis:
      'Desarrolla el mandato constitucional de protección, conservación y restauración del medio ambiente y los recursos naturales (Art. 117 Cn.). Regula la Evaluación de Impacto Ambiental (EIA), los permisos ambientales, la gestión de sustancias y desechos peligrosos, y la responsabilidad civil y administrativa por daño ambiental.',
    keyArticles: [
      'Arts. 18–29 (Sistema de Evaluación Ambiental y permisos del MARN)',
      'Arts. 85–103 (Responsabilidad por daño ambiental y Tribunales Ambientales)',
    ],
    officialSource: 'Ministerio de Medio Ambiente y Recursos Naturales (MARN) / CSJ',
  },
  {
    id: 'law-lgrh',
    familyId: 'ambiental-sanitario-energetico-transporte',
    title: 'Ley General de Recursos Hídricos',
    shortCode: 'LGRH',
    decree: 'Decreto Legislativo N.° 253 de 2021',
    lastReform: 'Vigente bajo rectoría de la Autoridad Salvadoreña del Agua (ASA)',
    status: 'Vigente',
    synthesis:
      'Declara el agua como bien nacional de uso público y reconoce el derecho humano al agua y al saneamiento. Crea la Autoridad Salvadoreña del Agua (ASA) para administrar el uso, aprovechamiento, permisos de extracción, cánones hídricos y protección de cuencas hidrográficas.',
    keyArticles: [
      'Arts. 1–10 (Derecho humano al agua y dominio público hídrico)',
      'Arts. 11–35 (Autoridad Salvadoreña del Agua - ASA y autorizaciones)',
    ],
    officialSource: 'Asamblea Legislativa / Autoridad Salvadoreña del Agua (ASA)',
  },
  {
    id: 'law-csalud',
    familyId: 'ambiental-sanitario-energetico-transporte',
    title: 'Código de Salud',
    shortCode: 'C.Salud',
    decree: 'Decreto Legislativo N.° 955 de 1988',
    lastReform: 'Armonizado con la Superintendencia de Regulación Sanitaria (SRS)',
    status: 'Reformada 2024–2026',
    synthesis:
      'Regula la salud como bien público (Art. 65 Cn.), las atribuciones del Ministerio de Salud (MINSAL), la organización del Consejo Superior de Salud Pública (CSSP) y sus Juntas de Vigilancia (JVPM, JVPO, JVPE, JVPQF, JVPPS), la deontología profesional, el secreto médico y la vigilancia epidemiológica.',
    keyArticles: [
      'Arts. 1–15 (Rectoría del MINSAL y Consejo Superior de Salud Pública)',
      'Arts. 32–59 (Juntas de Vigilancia y habilitación profesional)',
      'Arts. 136–138 (Notificación epidemiológica obligatoria)',
    ],
    officialSource: 'MINSAL / Consejo Superior de Salud Pública (CSSP)',
  },
  {
    id: 'law-lrs',
    familyId: 'ambiental-sanitario-energetico-transporte',
    title: 'Ley de Regulación Sanitaria (Superintendencia de Regulación Sanitaria - SRS)',
    shortCode: 'LRS / SRS',
    decree: 'Decreto Legislativo N.° 1018 de 2024',
    lastReform: 'Creada en 2024 (absorbe las competencias de la antigua DNM y regula alimentos, medicamentos y dispositivos)',
    status: 'Reformada 2024–2026',
    synthesis:
      'Crea la Superintendencia de Regulación Sanitaria (SRS) como autoridad única técnica y sancionatoria encargada de regular, autorizar y vigilar medicamentos, productos farmacéuticos, cosméticos, alimentos, bebidas, dispositivos médicos, insumos agropecuarios y sustancias controladas, sustituyendo a la extinta DNM.',
    keyArticles: [
      'Creación de la Superintendencia de Regulación Sanitaria (SRS) y absorción de la DNM',
      'Registro sanitario, farmacovigilancia, tecnovigilancia y control de precios de medicamentos',
      'Régimen de inspecciones, cuarentena de lotes y sanciones sanitarias',
    ],
    officialSource: 'Superintendencia de Regulación Sanitaria (SRS)',
  },
  {
    id: 'law-lge',
    familyId: 'ambiental-sanitario-energetico-transporte',
    title: 'Ley General de Electricidad',
    shortCode: 'LGE',
    decree: 'Decreto Legislativo N.° 843 de 1996',
    lastReform: 'Vigente bajo supervisión técnica y tarifaria de la SIGET',
    status: 'Vigente',
    synthesis:
      'Norma las actividades de generación, transmisión, distribución y comercialización de energía eléctrica en El Salvador, bajo la regulación, fiscalización y fijación de pliegos tarifarios de la Superintendencia General de Electricidad y Telecomunicaciones (SIGET), garantizando la seguridad técnica de instalaciones y redes.',
    keyArticles: [
      'Arts. 1–10 (Actividades reguladas y competencias de la SIGET)',
      'Arts. 66–82 (Régimen tarifario y calidad del servicio eléctrico)',
    ],
    officialSource: 'SIGET / Asamblea Legislativa',
  },
  {
    id: 'law-ltttsv',
    familyId: 'ambiental-sanitario-energetico-transporte',
    title: 'Ley de Transporte Terrestre, Tránsito y Seguridad Vial',
    shortCode: 'LTTTSV',
    decree: 'Decreto Legislativo N.° 477 de 1995',
    lastReform: 'Reformas dic. 2024 (Cero Tolerancia) y D.L. N.° 185/2025 (fotomultas y multas $50/$100/$150)',
    status: 'Reformada 2024–2026',
    synthesis:
      'Regula la circulación vehicular, licencias de conducir, transporte público y de carga, y seguridad vial bajo rectoría del Viceministerio de Transporte (VMT) y la PNC-DTT. Las reformas de diciembre de 2024 y el D.L. N.° 185/2025 eliminaron los umbrales de tolerancia alcohólica (instaurando Cero Tolerancia junto al Art. 147-E CP), actualizaron las multas a $50 leves, $100 graves y $150 muy graves, e implementaron la fiscalización electrónica mediante fotomultas.',
    keyArticles: [
      'Art. 64–66 (Obligaciones del conductor y prohibición absoluta de alcohol)',
      'Art. 117–118 (Multas actualizadas de $50, $100 y $150 y suspensión de licencia)',
      'D.L. N.° 185/2025 (Fiscalización electrónica automatizada y notificación digital)',
    ],
    officialSource: 'Viceministerio de Transporte (VMT) / PNC / Asamblea Legislativa',
  },
  {
    id: 'law-fonat',
    familyId: 'ambiental-sanitario-energetico-transporte',
    title: 'Ley Especial para la Atención a las Víctimas de Accidentes de Tránsito (FONAT)',
    shortCode: 'Ley FONAT',
    decree: 'Decreto Legislativo N.° 187 de 2012',
    lastReform: 'Vigente (prestaciones económicas por fallecimiento y discapacidad permanente)',
    status: 'Vigente',
    synthesis:
      'Crea el Fondo para la Atención a las Víctimas de Accidentes de Tránsito (FONAT) con el objeto de otorgar compensación económica solidaria e independiente de la culpabilidad penal a las víctimas con discapacidad permanente o a los beneficiarios legales de personas fallecidas en siniestros viales.',
    keyArticles: [
      'Arts. 15–21 (Prestaciones económicas por fallecimiento y discapacidad)',
      'Arts. 22–28 (Requisitos documentales y plazos de solicitud)',
    ],
    officialSource: 'FONAT / VMT / Asamblea Legislativa',
  },
];

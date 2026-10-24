import React, { useState, useMemo } from 'react';
import {
  Scale,
  BookOpen,
  Shield,
  Landmark,
  FileText,
  Search,
  Filter,
  Users,
  Briefcase,
  Globe2,
  Heart,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Award,
  HelpCircle,
  Gavel,
  BadgeCheck,
  Copy,
  Check,
  AlertTriangle,
} from 'lucide-react';
import {
  CONSTITUTIONAL_CASES,
  AMPARO_STEP_GUIDE,
} from '../data/constitucionalJurisprudenciaData';
import { AudioSpeechButton } from './AudioSpeechButton';

export interface LawArticleEntry {
  articleRef: string;
  literalText: string;
  simplifiedText: string;
  analyticalCommentary: string;
}

export interface LawBranch {
  id: string;
  name: string;
  type: 'publico' | 'privado';
  icon: string;
  badgeColor: string;
  summary: string;
  doctrinalBasis: string;
  entries: LawArticleEntry[];
}

export const CONSTITUTION_LAW_BRANCHES: LawBranch[] = [
  // ==========================================
  // DERECHO PÚBLICO
  // ==========================================
  {
    id: 'constitucional',
    name: 'Derecho Constitucional',
    type: 'publico',
    icon: '🏛️',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
    summary: 'Rama fundamental del ordenamiento jurídico que organiza la estructura del Estado, los límites del poder y los derechos fundamentales de los ciudadanos.',
    doctrinalBasis: 'Doctrina de supremacía constitucional, separación de poderes de Montesquieu y principio pro-persona consagrado en el Art. 1 de la Constitución salvadoreña de 1983.',
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
        simplifiedText: 'Principio de Legalidad: Ningún presidente, ministro, diputado, alcalde o policía puede hacer lo que se le antoje. Solo pueden hacer estrictamente lo que la ley escrita les autoriza de manera expresa. Por el contrario, los ciudadanos son libres de hacer todo lo que la ley no prohíba.',
        analyticalCommentary: 'Pilar angular del Estado Constitucional de Derecho contra la arbitrariedad y el absolutismo. La regla de clausura estatal es restrictiva: lo no atribuido por ley a la autoridad pública le está vedado categóricamente.',
      },
      {
        articleRef: 'Art. 246 de la Constitución de la República',
        literalText: 'Los principios, derechos y obligaciones establecidos por esta Constitución no pueden ser alterados por las leyes que regulen su ejercicio. La Constitución prevalecerá sobre todas las leyes y reglamentos. El interés público tiene primacía sobre el interés privado.',
        simplifiedText: 'Supremacía Constitucional: La Constitución es la ley suprema de El Salvador (la cima de la pirámide de Kelsen). Ningún código, reglamento, ordenanza municipal o decreto presidencial puede contradecirla ni recortar los derechos que ella garantiza.',
        analyticalCommentary: 'Consagra el principio de jerarquía normativa. Toda ley secundaria incompatible con la Constitución es nula de pleno derecho e inaplicable por los jueces mediante el control difuso de constitucionalidad (Art. 185 Cn.).',
      },
    ],
  },
  {
    id: 'penal',
    name: 'Derecho Penal',
    type: 'publico',
    icon: '⚖️',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-200',
    summary: 'Conjunto de normas que definen los delitos, las penas y las medidas de seguridad para proteger los bienes jurídicos tutelados (la vida, la libertad, la propiedad).',
    doctrinalBasis: 'Principio de legalidad penal estricto (nullum crimen, nulla poena sine lege praevia), presunción de inocencia y dignidad humana penitenciaria.',
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
    ],
  },
  {
    id: 'procesal',
    name: 'Derecho Procesal (Civil, Mercantil y Penal)',
    type: 'publico',
    icon: '📜',
    badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-200',
    summary: 'Regula los procedimientos y pasos formales que deben seguirse ante los tribunales de justicia para resolver controversias y garantizar el debido proceso.',
    doctrinalBasis: 'Derecho a la tutela judicial efectiva, contradicción, igualdad procesal de las partes y prohibición del doble juzgamiento (non bis in idem).',
    entries: [
      {
        articleRef: 'Art. 11 de la Constitución de la República',
        literalText: 'Ninguna persona puede ser privada del derecho a la vida, a la libertad, a la propiedad y posesión, ni de cualquier otro de sus derechos sin ser previamente oída y vencida en juicio con arreglo a las leyes; ni puede ser enjuiciada dos veces por la misma causa.',
        simplifiedText: 'Garantía del Debido Proceso y Non Bis In Idem: Nadie puede perder su libertad, su casa o sus derechos sin haber tenido un juicio justo donde pueda defenderse, presentar pruebas y ser escuchado por un juez. Además, una vez absuelto o condenado en sentencia definitiva, no te pueden volver a juzgar por el mismo hecho.',
        analyticalCommentary: 'Núcleo irreductible de la seguridad jurídica individual. Su quebrantamiento faculta la interposición inmediata de la acción constitucional de Hábeas Corpus (ante detención arbitraria) o Juicio de Amparo (ante despojo patrimonial).',
      },
    ],
  },
  {
    id: 'administrativo',
    name: 'Derecho Administrativo',
    type: 'publico',
    icon: '🏢',
    badgeColor: 'bg-cyan-100 text-cyan-900 border-cyan-200',
    summary: 'Regula la organización, funcionamiento, servicios públicos y actos de la Administración Pública (ministerios, autónomas, municipalidades) en su relación con los administrados.',
    doctrinalBasis: 'Ley de Procedimientos Administrativos (LPA), Ley de la Jurisdicción Contencioso Administrativa y responsabilidad patrimonial del funcionario público.',
    entries: [
      {
        articleRef: 'Art. 245 de la Constitución de la República',
        literalText: 'Los funcionarios y empleados públicos responderán personalmente y el Estado subsidiariamente, por los daños materiales o morales que causaren a consecuencia de la violación a los derechos consagrados en esta Constitución.',
        simplifiedText: 'Responsabilidad de Funcionarios Públicos: Si un funcionario público (alcalde, policía, ministro) vulnera los derechos constitucionales de una persona y le ocasiona daños, debe responder pagando con su propio dinero y patrimonio personal; y si no le alcanza, responde el Estado de forma subsidiaria.',
        analyticalCommentary: 'Consagra la responsabilidad civil directa de los servidores públicos por arbitrariedad institucional, rompiendo con el dogma decimonónico de la inmunidad soberana de la administración.',
      },
    ],
  },
  {
    id: 'tributario',
    name: 'Derecho Tributario y Financiero',
    type: 'publico',
    icon: '💰',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    summary: 'Regula los ingresos públicos (impuestos, tasas, contribuciones especiales), el presupuesto general de la nación y el gasto público del Estado.',
    doctrinalBasis: 'Principio de reserva de ley tributaria, capacidad económica contributiva, prohibición de doble tributación y no confiscatoriedad.',
    entries: [
      {
        articleRef: 'Art. 231 y Art. 131 Ord. 6° de la Constitución de la República',
        literalText: 'No pueden imponerse contribuciones sino en virtud de una ley y para el servicio público. Es facultad exclusiva de la Asamblea Legislativa decretar impuestos, tasas y demás contribuciones sobre toda clase de bienes, servicios e ingresos.',
        simplifiedText: 'Reserva de Ley Tributaria: Ningún presidente ni ministerio puede inventarse un impuesto por decreto. Todo impuesto nuevo (como el IVA o la Renta) tiene que ser debatido y aprobado obligatoriamente por los diputados en la Asamblea Legislativa mediante una ley formal.',
        analyticalCommentary: 'Garantía histórica universal ("no taxation without representation"). Impide la extracción fiscal discrecional por parte del Órgano Ejecutivo y exige justificación en el interés social colectivo.',
      },
    ],
  },
  {
    id: 'internacional-publico',
    name: 'Derecho Internacional Público',
    type: 'publico',
    icon: '🌐',
    badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
    summary: 'Rige las relaciones jurídicas entre Estados soberanos, organismos multilaterales (ONU, OEA, SICA) y tratados internacionales suscritos por El Salvador.',
    doctrinalBasis: 'Convención de Viena sobre el Derecho de los Tratados, principio pacta sunt servanda y jerarquía supralegal de los tratados vigentes en El Salvador.',
    entries: [
      {
        articleRef: 'Art. 144 de la Constitución de la República',
        literalText: 'Los tratados internacionales celebrados por El Salvador con otros estados o con organismos internacionales, constituyen leyes de la República al entrar en vigencia, conforme a las disposiciones del mismo tratado y de esta Constitución. La ley no podrá modificar o derogar lo acordado en un tratado vigente para El Salvador. En caso de conflicto entre el tratado y la ley, prevalecerá el tratado.',
        simplifiedText: 'Prevalencia del Tratado sobre la Ley Común: Cuando El Salvador firma y ratifica un tratado internacional (como el tratado de libre comercio o convenios de derechos humanos), este tratado tiene mayor jerarquía que las leyes comunes secundarias; si una ley local se opone al tratado, manda el tratado internacional.',
        analyticalCommentary: 'Establece el monismo moderado en el ordenamiento salvadoreño: los tratados se incorporan al derecho interno con rango supralegal (por encima de códigos y leyes secundarias), aunque subordinados siempre a la Constitución.',
      },
    ],
  },

  // ==========================================
  // DERECHO PRIVADO Y SOCIAL
  // ==========================================
  {
    id: 'civil',
    name: 'Derecho Civil',
    type: 'privado',
    icon: '🏠',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    summary: 'Tronco común del derecho privado que rige los atributos de la personalidad, los bienes, la propiedad privada, las obligaciones, contratos y las sucesiones por causa de muerte.',
    doctrinalBasis: 'Código Civil de El Salvador (redactado por el ilustre humanista Andrés Bello), principio de autonomía de la voluntad privada y función social de la propiedad.',
    entries: [
      {
        articleRef: 'Art. 2 y Art. 103 de la Constitución de la República',
        literalText: 'Toda persona tiene derecho a la vida, a la integridad física y moral, a la libertad, a la seguridad, al trabajo, a la propiedad y posesión, y a ser protegida en la conservación y defensa de los mismos. Se reconoce y garantiza el derecho a la propiedad privada en función social.',
        simplifiedText: 'Derecho a la Propiedad y Autonomía Privada: Cada salvadoreño tiene derecho a comprar, ser dueño y disfrutar de sus bienes (casas, terrenos, vehículos) con respaldo de la ley. La propiedad privada es respetada, debiendo cumplir también una función social de convivencia pacífica.',
        analyticalCommentary: 'Garantiza la libre disposición patrimonial y la seguridad en el tráfico inmobiliario registral (CNR). La expropiación forzosa solo procede por causa legalmente comprobada de utilidad pública o interés social con previa indemnización justa (Art. 106 Cn.).',
      },
    ],
  },
  {
    id: 'mercantil',
    name: 'Derecho Mercantil y Comercial',
    type: 'privado',
    icon: '📈',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    summary: 'Regula los actos de comercio, los comerciantes individuales y sociales (sociedades S.A. de C.V., S.A.S.), títulos valores (cheques, pagarés) y contratos comerciales.',
    doctrinalBasis: 'Código de Comercio de El Salvador, libertad de empresa y libre competencia económica sin monopolios abusivos.',
    entries: [
      {
        articleRef: 'Art. 102 y Art. 110 de la Constitución de la República',
        literalText: 'Se garantiza la libertad económica, en lo que no se oponga al interés social. El Estado fomentará y protegerá la iniciativa privada dentro de las condiciones necesarias para acrecentar la riqueza nacional. No podrá autorizarse ningún monopolio sino a favor del Estado o de los Municipios, cuando el interés social lo haga imprescindible.',
        simplifiedText: 'Libertad de Empresa y Prohibición de Monopolios: Cualquier ciudadano puede emprender, fundar negocios y comerciar libremente. Se prohíbe que una sola empresa privada acapare todo el mercado para fijar precios abusivos en perjuicio de las familias consumidoras.',
        analyticalCommentary: 'Fundamento constitucional del modelo de economía social de mercado. Tutelado por la Ley de Competencia y la Defensoría del Consumidor para sancionar cárteles y acuerdos colusorios de fijación de precios.',
      },
    ],
  },
  {
    id: 'laboral',
    name: 'Derecho Laboral y Seguridad Social',
    type: 'privado',
    icon: '👷',
    badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
    summary: 'Protege las relaciones jurídicas entre trabajadores y empleadores, garantizando condiciones dignas, salario justo, jornada máxima y estabilidad en el empleo.',
    doctrinalBasis: 'Código de Trabajo de El Salvador, principio in dubio pro operario, irrenunciabilidad de derechos laborales e instituciones del ISSS.',
    entries: [
      {
        articleRef: 'Art. 37 y Art. 38 de la Constitución de la República',
        literalText: 'El trabajo es una función social, goza de la protección del Estado, y no se considera artículo de comercio. Todo trabajador tiene derecho a devengar un salario mínimo que se fijará periódicamente para atender las necesidades normales de su hogar; la jornada ordinaria diurna efectiva de trabajo no excederá de ocho horas, y la semana laboral de cuarenta y cuatro horas; descanso semanal remunerado y vacación anual pagada.',
        simplifiedText: 'Derechos Laborales Básicos: El trabajo humano no es una mercancía que se pueda explotar. Todo trabajador tiene derecho garantizado por ley a un salario mínimo, a no trabajar más de 8 horas diarias sin pago de horas extra, a un día de descanso a la semana y a vacaciones pagadas.',
        analyticalCommentary: 'Reconocimiento del Derecho Laboral como derecho social protector de la parte económicamente vulnerable. Los derechos consagrados en la Constitución y Código de Trabajo son irrenunciables: cualquier renuncia forzada firmada en papel es nula de pleno derecho.',
      },
    ],
  },
  {
    id: 'familia',
    name: 'Derecho de Familia y Niñez',
    type: 'privado',
    icon: '👨‍👩‍👧‍👦',
    badgeColor: 'bg-pink-100 text-pink-900 border-pink-200',
    summary: 'Rige las relaciones matrimoniales, la unión no matrimonial, la filiación, alimentos, tutela y la protección integral de la infancia y adolescencia.',
    doctrinalBasis: 'Código de Familia, Ley Crecer Juntos para la Primera Infancia, Niñez y Adolescencia, y principio del interés superior de la niñez.',
    entries: [
      {
        articleRef: 'Art. 32 y Art. 36 de la Constitución de la República',
        literalText: 'La familia es la base fundamental de la sociedad y tendrá la protección del Estado. Los hijos nacidos dentro o fuera de matrimonio y los adoptivos, tienen los mismos derechos frente a sus padres. Se prohíbe toda calificación sobre la naturaleza de la filiación.',
        simplifiedText: 'Igualdad Absoluta de Todos los Hijos y Protección Familiar: No existen diferencias legales entre hijos nacidos en matrimonio o fuera de él. Todos los hijos tienen exactamente los mismos derechos a recibir alimentación, educación, salud y herencia de sus padres.',
        analyticalCommentary: 'Eliminó las arcaicas e injustas distinciones coloniales de "hijos legítimos o ilegítimos". Vinculado a la Ley Crecer Juntos, prioriza la corresponsabilidad parental y la protección reforzada de los menores de edad ante los juzgados de familia.',
      },
    ],
  },
];

export const ConstitutionLawView: React.FC = () => {
  const [subTab, setSubTab] = useState<'corpus' | 'casoteca'>('corpus');
  const [filterType, setFilterType] = useState<'all' | 'publico' | 'privado'>('all');
  const [selectedBranchId, setSelectedBranchId] = useState<string>('constitucional');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedArticleKey, setExpandedArticleKey] = useState<string | null>('constitucional-0');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const handleCopySnippet = (snippet: string, stepNum: number) => {
    navigator.clipboard.writeText(snippet);
    setCopiedStep(stepNum);
    setTimeout(() => setCopiedStep(null), 2500);
  };

  const handleQuizOption = (caseId: string, optKey: string) => {
    setQuizAnswers((prev) => ({ ...prev, [caseId]: optKey }));
  };

  const selectedBranch = CONSTITUTION_LAW_BRANCHES.find((b) => b.id === selectedBranchId) || CONSTITUTION_LAW_BRANCHES[0];

  const filteredBranches = CONSTITUTION_LAW_BRANCHES.filter((b) => {
    if (filterType !== 'all' && b.type !== filterType) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchInBranch = b.name.toLowerCase().includes(q) || b.summary.toLowerCase().includes(q);
      const matchInEntries = b.entries.some(
        (e) =>
          e.articleRef.toLowerCase().includes(q) ||
          e.simplifiedText.toLowerCase().includes(q) ||
          e.literalText.toLowerCase().includes(q)
      );
      return matchInBranch || matchInEntries;
    }
    return true;
  });

  return (
    <div className="space-y-6 font-sans-ui text-[#111625]">
      {/* Encabezado Principal Soberano */}
      <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-2xl p-6 sm:p-8 text-white shadow-corporate-elevated relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C59B27] text-xs font-bold border border-[#C59B27]/30 font-mono-exam uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Constitución de El Salvador 1983 • Corpus Jurídico Nacional</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-editorial text-[#FAF9F5]">
            Constitución, Ramas del Derecho y Casoteca Constitucional CSJ
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Explora de manera sistemática y rigurosa el ordenamiento jurídico salvadoreño: artículos constitucionales explicados en 3 niveles, casoteca viva de sentencias paradigmáticas de la Sala de lo Constitucional y taller procesal de demandas de amparo.
          </p>

          {/* Selector de Pestaña Principal: Corpus vs Casoteca */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setSubTab('corpus')}
              className={`px-4 py-2 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer flex items-center gap-2 ${
                subTab === 'corpus'
                  ? 'bg-[#C59B27] text-[#0B1B3D] font-black shadow-corporate-subtle'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Corpus Constitucional y Ramas del Derecho</span>
            </button>

            <button
              type="button"
              onClick={() => setSubTab('casoteca')}
              className={`px-4 py-2 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer flex items-center gap-2 ${
                subTab === 'casoteca'
                  ? 'bg-[#C59B27] text-[#0B1B3D] font-black shadow-corporate-subtle'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <Landmark className="w-4 h-4" />
              <span>Casoteca Jurisprudencial CSJ & Taller de Amparo</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* PESTAÑA 1: CORPUS CONSTITUCIONAL Y RAMAS DEL DERECHO                */}
      {/* ==================================================================== */}
      {subTab === 'corpus' && (
        <div className="space-y-6 animate-fade-in">
          {/* Barra de Filtros y Búsqueda */}
          <div className="bg-[#FAF9F5] rounded-2xl border border-[#E5E3D8] p-4 sm:p-5 shadow-corporate-card space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="relative flex-1 min-w-[220px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar por artículo, término jurídico o explicación..."
                  className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#E5E3D8] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#0B1B3D] font-medium"
                />
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <button
                  type="button"
                  onClick={() => setFilterType('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer ${
                    filterType === 'all'
                      ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-xs'
                      : 'bg-white text-slate-700 border border-[#E5E3D8] hover:bg-slate-100'
                  }`}
                >
                  Todas ({CONSTITUTION_LAW_BRANCHES.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType('publico')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer ${
                    filterType === 'publico'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-[#E5E3D8] hover:bg-slate-100'
                  }`}
                >
                  Derecho Público
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType('privado')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer ${
                    filterType === 'privado'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white text-slate-700 border border-[#E5E3D8] hover:bg-slate-100'
                  }`}
                >
                  Derecho Privado
                </button>
              </div>
            </div>

            {/* Acceso Rápido por Número de Artículo */}
            <div className="pt-2 border-t border-[#E5E3D8] flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[11px] font-mono-exam text-slate-500 font-bold uppercase shrink-0">Artículos Clave:</span>
              {['Art. 1', 'Art. 11', 'Art. 12', 'Art. 15', 'Art. 86', 'Art. 245', 'Art. 246', 'Art. 22', 'Art. 37', 'Art. 102'].map((artTag) => (
                <button
                  key={artTag}
                  type="button"
                  onClick={() => setSearchQuery(artTag)}
                  className="text-[11px] font-mono-exam font-semibold px-2 py-0.5 rounded bg-white text-slate-700 hover:bg-[#F2F1EA] border border-[#E5E3D8] shrink-0 transition-colors cursor-pointer"
                >
                  {artTag}
                </button>
              ))}
            </div>

            {/* Selector Horizontal de Ramas */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none touch-scroll pt-1 border-t border-[#E5E3D8]">
              {filteredBranches.map((branch) => {
                const isSelected = selectedBranchId === branch.id;
                return (
                  <button
                    key={branch.id}
                    type="button"
                    onClick={() => {
                      setSelectedBranchId(branch.id);
                      setExpandedArticleKey(`${branch.id}-0`);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 font-mono-exam ${
                      isSelected
                        ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-xs'
                        : 'bg-white text-slate-700 border border-[#E5E3D8] hover:bg-[#F2F1EA]'
                    }`}
                  >
                    <span>{branch.icon}</span>
                    <span>{branch.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ficha Completa de la Rama Jurídica Seleccionada */}
          <div className="bg-white rounded-2xl border border-[#E5E3D8] p-6 sm:p-8 shadow-corporate-card space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5E3D8]">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedBranch.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold font-editorial text-[#0B1B3D]">{selectedBranch.name}</h3>
                    <span className={`text-[10px] font-mono-exam font-bold px-2 py-0.5 rounded border ${selectedBranch.badgeColor}`}>
                      {selectedBranch.type === 'publico' ? 'Derecho Público' : 'Derecho Privado'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 max-w-2xl">{selectedBranch.summary}</p>
                </div>
              </div>
              <span className="text-xs font-mono-exam font-bold bg-[#FAF9F5] text-slate-700 px-3 py-1 rounded-xl border border-[#E5E3D8] self-start sm:self-auto">
                {selectedBranch.entries.length} Artículos Analizados
              </span>
            </div>

            {/* Fundamento Doctrinal */}
            <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E3D8] text-xs text-slate-700 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold uppercase tracking-wider text-[10px] text-slate-500 font-mono-exam block">
                  Fundamento Doctrinal y Filosófico:
                </span>
                <AudioSpeechButton
                  id={`doctrina-${selectedBranch.id}`}
                  textToSpeak={selectedBranch.doctrinalBasis}
                  label="Escuchar Fundamento"
                />
              </div>
              <p className="leading-relaxed italic pt-1">{selectedBranch.doctrinalBasis}</p>
            </div>

            {/* Lista de Artículos con sus 3 Niveles y Audio Speech */}
            <div className="space-y-5">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 flex items-center gap-2 font-mono-exam">
                <BookOpen className="w-4 h-4 text-[#0B1B3D]" />
                <span>Artículos Constitucionales (Texto Literal, Versión Simplificada y Análisis Comentado):</span>
              </h4>

              <div className="space-y-4">
                {selectedBranch.entries.map((entry, idx) => {
                  const uniqueKey = `${selectedBranch.id}-${idx}`;
                  const isExpanded = expandedArticleKey === uniqueKey || selectedBranch.entries.length === 1;

                  return (
                    <div key={idx} className="bg-[#FAF9F5] rounded-xl border border-[#E5E3D8] overflow-hidden shadow-2xs">
                      <button
                        type="button"
                        onClick={() => setExpandedArticleKey(isExpanded ? null : uniqueKey)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left hover:bg-[#F2F1EA] transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-[#0B1B3D] text-[#C59B27] font-bold font-mono-exam text-xs flex items-center justify-center shrink-0">
                            §{idx + 1}
                          </div>
                          <div>
                            <h5 className="font-bold text-sm sm:text-base text-[#0B1B3D]">{entry.articleRef}</h5>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{entry.simplifiedText}</p>
                          </div>
                        </div>

                        <div className="w-7 h-7 rounded-full bg-white border border-[#E5E3D8] flex items-center justify-center text-slate-600 shrink-0">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-4 sm:p-6 pt-0 border-t border-[#E5E3D8] space-y-4 text-xs sm:text-sm">
                          {/* 1. Versión Literal Oficial */}
                          <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] space-y-2 shadow-2xs">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-[10.5px] uppercase tracking-wider text-slate-500 font-mono-exam block">
                                1. Texto Literal Oficial de la Constitución:
                              </span>
                              <AudioSpeechButton
                                id={`lit-${uniqueKey}`}
                                textToSpeak={`${entry.articleRef}. ${entry.literalText}`}
                                label="Escuchar Texto Literal"
                              />
                            </div>
                            <p className="text-[#0B1B3D] leading-relaxed font-serif text-xs italic bg-[#FAF9F5] p-3 rounded-lg border border-[#E5E3D8]">
                              &quot;{entry.literalText}&quot;
                            </p>
                          </div>

                          {/* 2. Versión Simplificada (Lenguaje Ciudadano) */}
                          <div className="bg-[#EBF7EE] p-4 rounded-xl border border-[#C3E6CB] space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5 font-bold text-[#1E7E34] text-xs uppercase tracking-wider font-mono-exam">
                                <BadgeCheck className="w-4 h-4 text-[#1E7E34]" />
                                <span>2. Versión Simplificada (Lenguaje Ciudadano Sencillo):</span>
                              </div>
                              <AudioSpeechButton
                                id={`simp-${uniqueKey}`}
                                textToSpeak={entry.simplifiedText}
                                label="Escuchar Simplificada"
                              />
                            </div>
                            <p className="text-[#135024] leading-relaxed font-medium pl-1 text-xs sm:text-sm">
                              {entry.simplifiedText}
                            </p>
                          </div>

                          {/* 3. Versión Explicada y Comentario Doctrinal */}
                          <div className="bg-[#EBF0FA] p-4 rounded-xl border border-[#D0DCF2] space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] text-xs uppercase tracking-wider font-mono-exam">
                                <Gavel className="w-4 h-4 text-[#0B1B3D]" />
                                <span>3. Versión Explicada (Análisis Doctrinal y Jurisprudencia):</span>
                              </div>
                              <AudioSpeechButton
                                id={`comm-${uniqueKey}`}
                                textToSpeak={entry.analyticalCommentary}
                                label="Escuchar Análisis"
                              />
                            </div>
                            <p className="text-[#1A2E5A] leading-relaxed pl-1 text-xs sm:text-sm">
                              {entry.analyticalCommentary}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sección de Garantías Constitucionales y Procesos de Tutela (CSJ) */}
          <div className="bg-[#FAF9F5] rounded-2xl border border-[#E5E3D8] p-6 sm:p-8 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E5E3D8]">
              <div className="flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-[#C59B27]" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D] font-editorial">
                    Garantías Constitucionales y Procesos de Tutela (CSJ)
                  </h3>
                  <p className="text-xs text-slate-600">
                    Mecanismos procesales de defensa de la Constitución y protección de los derechos fundamentales ante la Sala de lo Constitucional.
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono-exam font-bold bg-[#EBF0FA] text-[#0B1B3D] px-2.5 py-1 rounded border border-[#D0DCF2] shrink-0 self-start sm:self-auto">
                Ley de Procedimientos Constitucionales
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[#0B1B3D] font-mono-exam flex items-center gap-1.5">
                    <Gavel className="w-3.5 h-3.5 text-blue-600" />
                    1. Proceso de Hábeas Corpus (Exhibición Personal)
                  </span>
                  <span className="text-[10px] font-mono-exam font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-200">
                    Art. 11 Cn.
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Objeto:</strong> Tutela inmediata de la libertad física e integridad personal frente a detenciones arbitrarias, incomunicaciones o plazos excedidos de detención provisional sin auto de prisión formal.
                </p>
                <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <strong className="text-slate-800">Criterio Jurisprudencial Sala:</strong> Puede solicitarse por cualquier ciudadano sin necesidad de procurador ni formalismo escrito, incluso vía telegrama o comparecencia directa.
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[#0B1B3D] font-mono-exam flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-amber-600" />
                    2. Juicio de Amparo Constitucional
                  </span>
                  <span className="text-[10px] font-mono-exam font-bold bg-amber-50 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
                    Art. 247 Cn.
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Objeto:</strong> Protección extraordinaria frente a cualquier acto u omisión de autoridad o particulares que vulnere derechos constitucionales que no sean la libertad física (propiedad, debido proceso, audiencia, salud, trabajo).
                </p>
                <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <strong className="text-slate-800">Criterio Jurisprudencial Sala:</strong> Requiere el previo agotamiento de los recursos ordinarios de la vía judicial o administrativa (principio de definitividad).
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[#0B1B3D] font-mono-exam flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5 text-indigo-600" />
                    3. Proceso de Inconstitucionalidad
                  </span>
                  <span className="text-[10px] font-mono-exam font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200">
                    Art. 174 & 183 Cn.
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Objeto:</strong> Control abstracto y concentrado de la constitucionalidad de leyes, decretos legislativos y reglamentos emitidos por el Órgano Ejecutivo u ordenanzas municipales.
                </p>
                <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <strong className="text-slate-800">Criterio Jurisprudencial Sala:</strong> Las sentencias de inconstitucionalidad expulsan la norma del ordenamiento jurídico con efectos generales vinculantes (erga omnes).
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-[#0B1B3D] font-mono-exam flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                    4. Control Difuso e Inaplicabilidad Judicial
                  </span>
                  <span className="text-[10px] font-mono-exam font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                    Art. 185 Cn.
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <strong>Objeto:</strong> Potestad y obligación de todo juez o tribunal ordinario de la República de inaplicar cualquier disposición legal secundaria contraria a la Carta Magna en el caso concreto sometido a su conocimiento.
                </p>
                <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <strong className="text-slate-800">Criterio Jurisprudencial Sala:</strong> El juez debe remitir inmediatamente su auto de inaplicabilidad a la Sala de lo Constitucional para su confirmación o revocación definitiva.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 2: CASOTECA JURISPRUDENCIAL Y TALLER DE AMPARO (CSJ)         */}
      {/* ==================================================================== */}
      {subTab === 'casoteca' && (
        <div className="space-y-8 animate-fade-in">
          {/* SECCIÓN A: CASOTECA DE SENTENCIAS PARADIGMÁTICAS CSJ */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#E5E3D8]">
              <div>
                <h3 className="text-xl font-bold font-editorial text-[#0B1B3D] flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-[#C59B27]" />
                  Casoteca de Sentencias Paradigmáticas (Sala de lo Constitucional)
                </h3>
                <p className="text-xs text-slate-600">
                  Doctrina viva y jurisprudencia obligatoria vinculante que ha marcado hitos históricos en el derecho salvadoreño.
                </p>
              </div>
              <span className="text-xs font-mono-exam font-bold bg-[#FAF9F5] text-slate-700 px-3 py-1 rounded-lg border border-[#E5E3D8] shrink-0 self-start sm:self-auto">
                {CONSTITUTIONAL_CASES.length} Sentencias de Hito
              </span>
            </div>

            <div className="space-y-6">
              {CONSTITUTIONAL_CASES.map((rulingCase, cIdx) => {
                const selectedQuizOpt = quizAnswers[rulingCase.id];
                const isQuizAnswered = !!selectedQuizOpt;
                const isQuizCorrect = selectedQuizOpt === rulingCase.legalQuiz.correctKey;

                return (
                  <div
                    key={rulingCase.id}
                    className="bg-white rounded-2xl border border-[#E5E3D8] shadow-corporate-card p-6 sm:p-7 space-y-5"
                  >
                    {/* Encabezado de la Sentencia */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E3D8] pb-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono-exam font-bold text-xs bg-[#0B1B3D] text-[#C59B27] px-2.5 py-0.5 rounded border border-[#1A2E5A]">
                            {rulingCase.refNumber}
                          </span>
                          <span className="font-mono-exam text-xs font-semibold bg-[#FAF9F5] text-slate-700 px-2 py-0.5 rounded border border-[#E5E3D8]">
                            Año {rulingCase.year}
                          </span>
                          <span className={`text-[11px] font-mono-exam font-bold px-2 py-0.5 rounded border ${
                            rulingCase.rulingType === 'Inconstitucionalidad'
                              ? 'bg-rose-50 text-rose-800 border-rose-200'
                              : rulingCase.rulingType === 'Hábeas Corpus'
                              ? 'bg-blue-50 text-blue-800 border-blue-200'
                              : 'bg-amber-50 text-amber-800 border-amber-200'
                          }`}>
                            {rulingCase.rulingType}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold font-editorial text-[#0B1B3D] pt-1">
                          {rulingCase.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-1 flex-wrap shrink-0">
                        {rulingCase.constitutionalArticles.map((art) => (
                          <span
                            key={art}
                            className="font-mono-exam text-[10px] font-semibold bg-[#EBF0FA] text-[#0B1B3D] px-2 py-0.5 rounded border border-[#D0DCF2]"
                          >
                            {art}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Resumen Fáctico & Ratio Decidendi */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                      <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E3D8] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono-exam font-bold text-[10.5px] uppercase tracking-wider text-slate-500">
                            Antecedentes Fácticos:
                          </span>
                          <AudioSpeechButton
                            id={`case-facts-${rulingCase.id}`}
                            textToSpeak={rulingCase.factsSummary}
                            label="Escuchar Antecedentes"
                          />
                        </div>
                        <p className="text-slate-700 leading-relaxed text-xs">
                          {rulingCase.factsSummary}
                        </p>
                      </div>

                      <div className="bg-[#EBF0FA] p-4 rounded-xl border border-[#D0DCF2] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-mono-exam font-bold text-[10.5px] uppercase tracking-wider text-[#0B1B3D]">
                            Ratio Decidendi (Criterio Vinculante de la Sala):
                          </span>
                          <AudioSpeechButton
                            id={`case-ratio-${rulingCase.id}`}
                            textToSpeak={rulingCase.ratioDecidendi}
                            label="Escuchar Ratio"
                          />
                        </div>
                        <p className="text-[#1A2E5A] leading-relaxed text-xs font-medium">
                          {rulingCase.ratioDecidendi}
                        </p>
                      </div>
                    </div>

                    {/* Impacto Práctico */}
                    <div className="bg-[#EBF7EE] p-3.5 rounded-xl border border-[#C3E6CB] text-xs space-y-1">
                      <span className="font-mono-exam font-bold text-[10.5px] uppercase tracking-wider text-[#1E7E34] block">
                        Impacto Práctico e Institucional en El Salvador:
                      </span>
                      <p className="text-[#135024] leading-relaxed">
                        {rulingCase.practicalImpact}
                      </p>
                    </div>

                    {/* Mini-Quiz Dogmático Interactivo */}
                    <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E3D8] space-y-3">
                      <div className="flex items-center gap-2">
                        <Gavel className="w-4 h-4 text-[#C59B27]" />
                        <span className="font-mono-exam font-bold text-xs text-[#0B1B3D] uppercase tracking-wider">
                          Evaluación Doctrinal de la Sentencia:
                        </span>
                      </div>

                      <p className="text-xs font-semibold text-slate-800">
                        {rulingCase.legalQuiz.question}
                      </p>

                      <div className="grid grid-cols-1 gap-2 pt-1">
                        {rulingCase.legalQuiz.options.map((opt) => {
                          const isSelected = selectedQuizOpt === opt.key;
                          const isOptionCorrect = opt.key === rulingCase.legalQuiz.correctKey;

                          let btnClasses = 'bg-white hover:bg-slate-50 text-slate-700 border-[#E5E3D8]';
                          if (isQuizAnswered) {
                            if (isOptionCorrect) {
                              btnClasses = 'bg-[#EBF7EE] border-[#1E7E34] text-[#1E7E34] font-bold';
                            } else if (isSelected && !isOptionCorrect) {
                              btnClasses = 'bg-[#FDF2F2] border-[#E02424] text-[#E02424] font-bold';
                            }
                          }

                          return (
                            <button
                              key={opt.key}
                              type="button"
                              onClick={() => handleQuizOption(rulingCase.id, opt.key)}
                              className={`p-3 rounded-lg border text-left text-xs transition-all cursor-pointer flex items-center justify-between gap-3 ${btnClasses}`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="w-6 h-6 rounded-md bg-[#FAF9F5] border border-[#E5E3D8] font-mono-exam font-bold flex items-center justify-center shrink-0">
                                  {opt.key}
                                </span>
                                <span>{opt.text}</span>
                              </div>
                              {isQuizAnswered && isOptionCorrect && (
                                <BadgeCheck className="w-4 h-4 text-[#1E7E34] shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {isQuizAnswered && (
                        <div className={`p-3 rounded-lg border text-xs space-y-1 animate-fade-in ${
                          isQuizCorrect
                            ? 'bg-[#EBF7EE] border-[#C3E6CB] text-[#1E7E34]'
                            : 'bg-amber-50 border-amber-200 text-amber-900'
                        }`}>
                          <span className="font-mono-exam font-bold block">
                            {isQuizCorrect ? '¡Criterio Correcto!' : 'Fundamento Doctrinal:'}
                          </span>
                          <p className="leading-relaxed">
                            {rulingCase.legalQuiz.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECCIÓN B: TALLER DE DEMANDA DE AMPARO (LPrCn) */}
          <div className="space-y-4 pt-4 border-t border-[#E5E3D8]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#E5E3D8]">
              <div>
                <h3 className="text-xl font-bold font-editorial text-[#0B1B3D] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#C59B27]" />
                  Taller de Estructuración y Redacción de la Demanda de Amparo
                </h3>
                <p className="text-xs text-slate-600">
                  Guía técnica conforme a los requisitos formales de la Ley de Procedimientos Constitucionales (LPrCn) y jurisprudencia de admisibilidad de la Sala.
                </p>
              </div>
              <span className="text-xs font-mono-exam font-bold bg-[#EBF0FA] text-[#0B1B3D] px-3 py-1 rounded-lg border border-[#D0DCF2] shrink-0 self-start sm:self-auto">
                5 Fases Procesales
              </span>
            </div>

            <div className="space-y-5">
              {AMPARO_STEP_GUIDE.map((step) => {
                const isCopied = copiedStep === step.stepNumber;

                return (
                  <div
                    key={step.stepNumber}
                    className="bg-white rounded-2xl border border-[#E5E3D8] shadow-corporate-card p-6 space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E3D8] pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#0B1B3D] text-[#C59B27] font-bold font-mono-exam text-sm flex items-center justify-center shrink-0">
                          {step.stepNumber}
                        </div>
                        <h4 className="font-bold text-base text-[#0B1B3D] font-editorial">
                          {step.title}
                        </h4>
                      </div>
                      <span className="font-mono-exam text-xs font-bold bg-[#FAF9F5] text-slate-700 px-2.5 py-1 rounded border border-[#E5E3D8] self-start sm:self-auto">
                        {step.legalRequirement}
                      </span>
                    </div>

                    {/* Guía Práctica y Audio */}
                    <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E3D8] space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-mono-exam font-bold text-[10.5px] uppercase tracking-wider text-slate-500">
                          Orientación Forense y Requisitos de Admisibilidad:
                        </span>
                        <AudioSpeechButton
                          id={`amparo-step-${step.stepNumber}`}
                          textToSpeak={`${step.title}. ${step.practicalGuidance}`}
                          label="Escuchar Orientación"
                        />
                      </div>
                      <p className="text-slate-800 leading-relaxed text-xs">
                        {step.practicalGuidance}
                      </p>
                    </div>

                    {/* Errores Comunes de Inadmisibilidad */}
                    <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200 text-xs space-y-1">
                      <div className="flex items-center gap-1.5 font-mono-exam font-bold text-amber-900 text-[11px] uppercase tracking-wider">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        <span>Vicio Común que Provoca Prevención o Inadmisibilidad:</span>
                      </div>
                      <p className="text-amber-950 leading-relaxed pl-5">
                        {step.commonMistakes}
                      </p>
                    </div>

                    {/* Modelo Forense de Redacción */}
                    <div className="bg-[#0B1B3D] p-4 rounded-xl border border-[#1A2E5A] text-[#FAF9F5] space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono-exam font-bold text-[10.5px] uppercase tracking-wider text-[#C59B27]">
                          Cláusula Forense Modelo:
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCopySnippet(step.modelSnippet, step.stepNumber)}
                          className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-[#FAF9F5] font-mono-exam text-xs font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer border border-white/20"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-300">¡Copiado!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-[#C59B27]" />
                              <span>Copiar Cláusula</span>
                            </>
                          )}
                        </button>
                      </div>

                      <pre className="font-mono-exam text-xs text-slate-200 bg-[#07132B] p-3 rounded-lg border border-[#1E3A70] whitespace-pre-wrap leading-relaxed">
                        {step.modelSnippet}
                      </pre>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConstitutionLawView;

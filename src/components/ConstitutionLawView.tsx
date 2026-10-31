import React, { useState, useMemo } from 'react';
import {
  Scale,
  BookOpen,
  Shield,
  Landmark,
  FileText,
  Search,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Award,
  Gavel,
  BadgeCheck,
  Copy,
  Check,
  AlertTriangle,
  FolderOpen,
  Layers,
  HelpCircle,
} from 'lucide-react';
import {
  CONSTITUTIONAL_CASES,
  AMPARO_STEP_GUIDE,
  AMPARO_RESOLVED_WORKSHOP_CASE,
  HABEAS_CORPUS_STEP_GUIDE,
  HABEAS_CORPUS_RESOLVED_WORKSHOP_CASE,
  INCONSTITUCIONALIDAD_STEP_GUIDE,
  INCONSTITUCIONALIDAD_RESOLVED_WORKSHOP_CASE,
  CONSTITUTION_LAW_BRANCHES,
  LawBranch,
  LawArticleEntry,
  ConstitutionalBranchSolvedCase,
  ProceduralStepGuide,
  ProceduralWorkshopCase,
} from '../data/constitucionalJurisprudenciaData';
import { AudioSpeechButton } from './AudioSpeechButton';

// Re-export types for backward compatibility
export type { LawBranch, LawArticleEntry, ConstitutionalBranchSolvedCase };
export { CONSTITUTION_LAW_BRANCHES };

export const ConstitutionLawView: React.FC = () => {
  // Navigation Tabs: 'branches' | 'casoteca' | 'talleres'
  const [subTab, setSubTab] = useState<'branches' | 'casoteca' | 'talleres'>('branches');

  // Workshop Sub-Tab
  const [workshopTab, setWorkshopTab] = useState<'amparo' | 'habeas-corpus' | 'inconstitucionalidad'>('amparo');

  // Branch Selection & Filtering
  const [selectedBranchId, setSelectedBranchId] = useState<string>('constitucional');
  const [filterType, setFilterType] = useState<'all' | 'publico' | 'privado'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedArticleKey, setExpandedArticleKey] = useState<string | null>('constitucional-0');
  const [expandedBranchCaseId, setExpandedBranchCaseId] = useState<string | null>('case-const-01');

  // Quiz State for Casoteca
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  // Copy State for Workshops
  const [copiedSnippetIndex, setCopiedSnippetIndex] = useState<number | null>(null);

  // Filtered Branches
  const filteredBranches = useMemo(() => {
    return CONSTITUTION_LAW_BRANCHES.filter((branch) => {
      const matchesType = filterType === 'all' || branch.type === filterType;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesType;

      const matchesName = branch.name.toLowerCase().includes(q);
      const matchesSummary = branch.summary.toLowerCase().includes(q);
      const matchesDoctrinal = branch.doctrinalBasis.toLowerCase().includes(q);
      const matchesArticles = branch.entries.some(
        (entry) =>
          entry.articleRef.toLowerCase().includes(q) ||
          entry.literalText.toLowerCase().includes(q) ||
          entry.simplifiedText.toLowerCase().includes(q) ||
          entry.analyticalCommentary.toLowerCase().includes(q)
      );
      const matchesCases = branch.solvedCases.some(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.factualContext.toLowerCase().includes(q) ||
          c.ratioDecidendi.toLowerCase().includes(q)
      );

      return matchesType && (matchesName || matchesSummary || matchesDoctrinal || matchesArticles || matchesCases);
    });
  }, [filterType, searchQuery]);

  const selectedBranch: LawBranch = useMemo(() => {
    return (
      CONSTITUTION_LAW_BRANCHES.find((b) => b.id === selectedBranchId) ||
      CONSTITUTION_LAW_BRANCHES[0]
    );
  }, [selectedBranchId]);

  const handleQuizOption = (caseId: string, optionKey: string) => {
    if (quizAnswers[caseId]) return;
    setQuizAnswers((prev) => ({ ...prev, [caseId]: optionKey }));
  };

  const handleCopySnippet = (snippet: string, index: number) => {
    navigator.clipboard.writeText(snippet);
    setCopiedSnippetIndex(index);
    setTimeout(() => setCopiedSnippetIndex(null), 2500);
  };

  // Active Workshop Data
  const currentWorkshopData: {
    title: string;
    description: string;
    steps: ProceduralStepGuide[];
    solvedCase: ProceduralWorkshopCase;
  } = useMemo(() => {
    if (workshopTab === 'habeas-corpus') {
      return {
        title: 'Taller Procesal de Hábeas Corpus (Exhibición Personal)',
        description: 'Mecanismo de libertad física e integridad personal (Art. 11 Cn. y Ley de Procedimientos Constitucionales).',
        steps: HABEAS_CORPUS_STEP_GUIDE,
        solvedCase: HABEAS_CORPUS_RESOLVED_WORKSHOP_CASE,
      };
    }
    if (workshopTab === 'inconstitucionalidad') {
      return {
        title: 'Taller de Demanda de Inconstitucionalidad en Acción Popular',
        description: 'Control concentrado y abstracto con efectos generales vinculantes erga omnes (Arts. 174 y 183 Cn.).',
        steps: INCONSTITUCIONALIDAD_STEP_GUIDE,
        solvedCase: INCONSTITUCIONALIDAD_RESOLVED_WORKSHOP_CASE,
      };
    }
    return {
      title: 'Taller de Estructuración y Redacción de la Demanda de Amparo',
      description: 'Protección extraordinaria frente a actos u omisiones lesivas de derechos constitucionales no corporales.',
      steps: AMPARO_STEP_GUIDE,
      solvedCase: AMPARO_RESOLVED_WORKSHOP_CASE,
    };
  }, [workshopTab]);

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-in p-2 sm:p-4">
      {/* Header Institucional */}
      <div className="bg-[#0B1B3D] rounded-2xl p-6 sm:p-8 text-[#FAF9F5] shadow-corporate border border-[#1E3A70] relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-linear-to-l from-[#C59B27]/15 to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono-exam uppercase tracking-wider text-[#C59B27]">
            <Landmark className="w-4 h-4 text-[#C59B27]" />
            <span>Sala de lo Constitucional · Corte Suprema de Justicia (CSJ)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-editorial font-bold tracking-tight text-white">
            Casoteca Constitucional, Corpus de Ramas & Talleres Procesales
          </h2>

          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-4xl">
            Repositorio dogmático y jurisprudencial de El Salvador. Explora las <strong>10 Ramas del Derecho</strong> con más de 7,000 palabras de análisis y <strong>50 Casos Reales Resueltos Paso a Paso</strong>, estudia las <strong>10 Sentencias Paradigmáticas de la CSJ</strong> con evaluación interactiva, o domina los <strong>Talleres Procesales Constitucionales</strong> (Amparo, Hábeas Corpus e Inconstitucionalidad).
          </p>

          {/* Navegación Principal de Sub-Pestañas */}
          <div className="pt-3 flex items-center gap-2 flex-wrap text-xs font-mono-exam">
            <button
              onClick={() => setSubTab('branches')}
              className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                subTab === 'branches'
                  ? 'bg-[#C59B27] text-[#07132B] border-[#C59B27] shadow-md'
                  : 'bg-[#07132B] text-[#CBD5E1] border-[#1E3A70] hover:bg-[#132A5C]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>10 Ramas del Derecho & 50 Casos Resueltos</span>
            </button>

            <button
              onClick={() => setSubTab('casoteca')}
              className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                subTab === 'casoteca'
                  ? 'bg-[#C59B27] text-[#07132B] border-[#C59B27] shadow-md'
                  : 'bg-[#07132B] text-[#CBD5E1] border-[#1E3A70] hover:bg-[#132A5C]'
              }`}
            >
              <Gavel className="w-4 h-4" />
              <span>Casoteca CSJ (10 Sentencias Emblemáticas)</span>
            </button>

            <button
              onClick={() => setSubTab('talleres')}
              className={`px-4 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                subTab === 'talleres'
                  ? 'bg-[#C59B27] text-[#07132B] border-[#C59B27] shadow-md'
                  : 'bg-[#07132B] text-[#CBD5E1] border-[#1E3A70] hover:bg-[#132A5C]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Talleres Procesales (Amparo, Hábeas Corpus, Inconstitucionalidad)</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* PESTAÑA 1: 10 RAMAS DEL DERECHO CON 50 CASOS RESUELTOS               */}
      {/* ==================================================================== */}
      {subTab === 'branches' && (
        <div className="space-y-6 animate-fade-in">
          {/* Barra de Filtros y Búsqueda */}
          <div className="bg-white rounded-2xl border border-[#E5E3D8] p-4 sm:p-5 shadow-corporate-subtle space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="relative flex-1 min-w-[220px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar por artículo, término o caso resuelto..."
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
                  Derecho Público (6)
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
                  Derecho Privado (4)
                </button>
              </div>
            </div>

            {/* Selector Horizontal de Ramas */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-[#E5E3D8]">
              {filteredBranches.map((branch) => {
                const isSelected = selectedBranchId === branch.id;
                return (
                  <button
                    key={branch.id}
                    type="button"
                    onClick={() => {
                      setSelectedBranchId(branch.id);
                      setExpandedArticleKey(`${branch.id}-0`);
                      setExpandedBranchCaseId(branch.solvedCases[0]?.id || null);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 font-mono-exam ${
                      isSelected
                        ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-xs'
                        : 'bg-white text-slate-700 border border-[#E5E3D8] hover:bg-[#F2F1EA]'
                    }`}
                  >
                    <span>{branch.icon}</span>
                    <span>{branch.name}</span>
                    <span className="text-[10px] bg-[#C59B27]/20 text-[#C59B27] px-1 rounded ml-0.5">
                      5
                    </span>
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
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold font-editorial text-[#0B1B3D]">
                      {selectedBranch.name}
                    </h3>
                    <span className={`text-[10px] font-mono-exam font-bold px-2 py-0.5 rounded border ${selectedBranch.badgeColor}`}>
                      {selectedBranch.type === 'publico' ? 'Derecho Público' : 'Derecho Privado'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
                    {selectedBranch.summary}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                <span className="text-xs font-mono-exam font-bold bg-[#FAF9F5] text-slate-700 px-3 py-1 rounded-xl border border-[#E5E3D8]">
                  {selectedBranch.entries.length} Artículos
                </span>
                <span className="text-xs font-mono-exam font-bold bg-[#0B1B3D] text-[#C59B27] px-3 py-1 rounded-xl border border-[#1E3A70]">
                  5 Casos Resueltos
                </span>
              </div>
            </div>

            {/* Fundamento Doctrinal y Filosófico */}
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
              <p className="leading-relaxed italic pt-1 text-slate-800">{selectedBranch.doctrinalBasis}</p>
            </div>

            {/* Análisis Dogmático Sustantivo (>= 500 palabras) */}
            <div className="space-y-2">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 flex items-center gap-2 font-mono-exam">
                <FileText className="w-4 h-4 text-[#C59B27]" />
                <span>Análisis Dogmático Constitucional & Jurisprudencia de El Salvador:</span>
              </h4>
              <div className="p-5 rounded-xl bg-[#FAF9F5] border border-[#EAE8DD] text-xs sm:text-sm text-[#334155] leading-relaxed whitespace-pre-line font-sans-ui">
                {selectedBranch.substantiveAnalysis}
              </div>
            </div>

            {/* Lista de Artículos Constitucionales (3 Niveles de Lectura) */}
            <div className="space-y-4">
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 flex items-center gap-2 font-mono-exam">
                <BookOpen className="w-4 h-4 text-[#0B1B3D]" />
                <span>Artículos Constitucionales Clave (Literal, Simplificado y Comentario):</span>
              </h4>

              <div className="space-y-3">
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
                          <div className="w-8 h-8 rounded-lg bg-[#0B1B3D] text-[#C59B27] font-bold font-mono-exam text-xs flex items-center justify-center shrink-0">
                            §{idx + 1}
                          </div>
                          <div>
                            <h5 className="font-bold text-sm text-[#0B1B3D]">{entry.articleRef}</h5>
                            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{entry.simplifiedText}</p>
                          </div>
                        </div>

                        <div className="w-7 h-7 rounded-full bg-white border border-[#E5E3D8] flex items-center justify-center text-slate-600 shrink-0">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="p-4 sm:p-6 pt-0 border-t border-[#E5E3D8] space-y-4 text-xs sm:text-sm animate-fade-in">
                          {/* 1. Literal */}
                          <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] space-y-2">
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
                              "{entry.literalText}"
                            </p>
                          </div>

                          {/* 2. Simplificado */}
                          <div className="bg-[#EBF7EE] p-4 rounded-xl border border-[#C3E6CB] space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5 font-bold text-[#1E7E34] text-xs uppercase tracking-wider font-mono-exam">
                                <BadgeCheck className="w-4 h-4 text-[#1E7E34]" />
                                <span>2. Versión Simplificada (Lenguaje Ciudadano):</span>
                              </div>
                              <AudioSpeechButton
                                id={`simp-${uniqueKey}`}
                                textToSpeak={entry.simplifiedText}
                                label="Escuchar Simplificada"
                              />
                            </div>
                            <p className="text-[#135024] leading-relaxed font-medium pl-1 text-xs">
                              {entry.simplifiedText}
                            </p>
                          </div>

                          {/* 3. Análisis Comentado */}
                          <div className="bg-[#EBF0FA] p-4 rounded-xl border border-[#D0DCF2] space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D] text-xs uppercase tracking-wider font-mono-exam">
                                <Gavel className="w-4 h-4 text-[#0B1B3D]" />
                                <span>3. Análisis Doctrinal y Jurisprudencia Aplicada:</span>
                              </div>
                              <AudioSpeechButton
                                id={`comm-${uniqueKey}`}
                                textToSpeak={entry.analyticalCommentary}
                                label="Escuchar Análisis"
                              />
                            </div>
                            <p className="text-[#1A2E5A] leading-relaxed pl-1 text-xs">
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

            {/* SECCIÓN DE 5 CASOS PRÁCTICOS RESUELTOS PASO A PASO */}
            <div className="space-y-4 pt-4 border-t border-[#EAE8DD]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#0B1B3D] flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#C59B27]" />
                    Casos Prácticos Resueltos Paso a Paso ({selectedBranch.name})
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Litigios hipotéticos y precedentes jurisprudenciales resueltos con fundamento normativo y ratio decidendi.
                  </p>
                </div>
                <span className="text-xs font-mono-exam font-bold text-[#0B1B3D] bg-[#FAF9F5] px-3 py-1 rounded-md border border-[#E5E3D8]">
                  5 Casos de Estudio
                </span>
              </div>

              <div className="space-y-3">
                {selectedBranch.solvedCases.map((branchCase) => {
                  const isCaseExpanded = expandedBranchCaseId === branchCase.id;

                  return (
                    <div
                      key={branchCase.id}
                      className="rounded-xl border border-[#E5E3D8] bg-white overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedBranchCaseId(isCaseExpanded ? null : branchCase.id)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-[#FAF9F5] transition-colors cursor-pointer"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono-exam text-xs font-bold text-[#0B1B3D] bg-[#0B1B3D]/10 px-2 py-0.5 rounded">
                              Caso #{branchCase.caseNumber}
                            </span>
                            <span className="text-xs font-mono-exam text-[#C59B27] font-semibold">
                              {branchCase.legalBasis}
                            </span>
                          </div>
                          <h5 className="font-editorial text-base font-bold text-[#0B1B3D]">
                            {branchCase.title}
                          </h5>
                          <span className="text-xs text-slate-600 line-clamp-1">
                            {branchCase.constitutionalIssue}
                          </span>
                        </div>
                        <div className="shrink-0 text-[#C59B27]">
                          {isCaseExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </button>

                      {isCaseExpanded && (
                        <div className="p-5 border-t border-[#EAE8DD] bg-[#FAF9F5]/50 space-y-4 text-xs animate-fade-in">
                          {/* 1. Contexto Fáctico */}
                          <div className="bg-white p-3.5 rounded-lg border border-[#E5E3D8] space-y-1">
                            <span className="font-mono-exam font-bold text-[#0B1B3D] block text-[11px]">
                              SITUACIÓN FÁCTICA Y ANTECEDENTES:
                            </span>
                            <p className="text-[#334155] leading-relaxed">
                              {branchCase.factualContext}
                            </p>
                          </div>

                          {/* 2. Controversia Constitucional */}
                          <div className="bg-[#EBF0FA] p-3.5 rounded-lg border border-[#D0DCF2] space-y-1 text-[#1A2E5A]">
                            <span className="font-mono-exam font-bold block text-[11px]">
                              CONTROVERSIA CONSTITUCIONAL / PROBLEMA JURÍDICO:
                            </span>
                            <p className="leading-relaxed font-medium">
                              {branchCase.constitutionalIssue}
                            </p>
                          </div>

                          {/* 3. Ratio Decidendi */}
                          <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#C59B27]/40 space-y-1">
                            <span className="font-mono-exam font-bold text-[#9E472A] block text-[11px]">
                              RATIO DECIDENDI (CRITERIO DOGMÁTICO VINCULANTE):
                            </span>
                            <p className="text-[#334155] leading-relaxed italic">
                              "{branchCase.ratioDecidendi}"
                            </p>
                          </div>

                          {/* 4. Consecuencia Procesal / Fallo */}
                          <div className="bg-[#EBF7EE] p-3.5 rounded-lg border border-[#C3E6CB] text-[#1E7E34] space-y-1">
                            <span className="font-mono-exam font-bold text-[11px] block flex items-center gap-1.5">
                              <BadgeCheck className="w-4 h-4" />
                              RESOLUCIÓN JUDICIAL & IMPACTO PRÁCTICO:
                            </span>
                            <p className="text-xs text-[#064E3B] font-sans-ui">
                              {branchCase.proceduralOutcome}
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
        </div>
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 2: CASOTECA CSJ (10 SENTENCIAS EMBLEMÁTICAS INTACTAS)         */}
      {/* ==================================================================== */}
      {subTab === 'casoteca' && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#E5E3D8]">
            <div>
              <h3 className="text-xl font-bold font-editorial text-[#0B1B3D] flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#C59B27]" />
                Casoteca de Sentencias Paradigmáticas (Sala de lo Constitucional CSJ)
              </h3>
              <p className="text-xs text-slate-600">
                10 fallos históricos vinculantes con antecedentes fácticos, ratio decidendi, impacto institucional y mini-quiz evaluativo.
              </p>
            </div>
            <span className="text-xs font-mono-exam font-bold bg-[#FAF9F5] text-slate-700 px-3 py-1 rounded-lg border border-[#E5E3D8] shrink-0 self-start sm:self-auto">
              {CONSTITUTIONAL_CASES.length} Sentencias
            </span>
          </div>

          <div className="space-y-6">
            {CONSTITUTIONAL_CASES.map((rulingCase) => {
              const selectedQuizOpt = quizAnswers[rulingCase.id];
              const isQuizAnswered = !!selectedQuizOpt;
              const isQuizCorrect = selectedQuizOpt === rulingCase.legalQuiz.correctKey;

              return (
                <div
                  key={rulingCase.id}
                  className="bg-white rounded-2xl border border-[#E5E3D8] shadow-corporate-card p-6 sm:p-7 space-y-5"
                >
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
                          Ratio Decidendi (Criterio Vinculante CSJ):
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

                  {/* Mini-Quiz Dogmático */}
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
      )}

      {/* ==================================================================== */}
      {/* PESTAÑA 3: TALLERES PROCESALES CONSTITUCIONALES                       */}
      {/* ==================================================================== */}
      {subTab === 'talleres' && (
        <div className="space-y-6 animate-fade-in">
          {/* Selector de Taller */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono-exam text-xs">
            <button
              onClick={() => setWorkshopTab('amparo')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer space-y-1.5 ${
                workshopTab === 'amparo'
                  ? 'bg-white border-[#C59B27] shadow-md ring-2 ring-[#C59B27]/30'
                  : 'bg-[#FAF9F5] hover:bg-white border-[#E5E3D8] text-[#475569]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0B1B3D]">1. Juicio de Amparo</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#0B1B3D] text-[#C59B27] font-bold">
                  5 Pasos
                </span>
              </div>
              <p className="text-[11px] text-[#64748B] line-clamp-2">
                Tutela de derechos fundamentales no corporales (Arts. 12-37 LPC).
              </p>
            </button>

            <button
              onClick={() => setWorkshopTab('habeas-corpus')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer space-y-1.5 ${
                workshopTab === 'habeas-corpus'
                  ? 'bg-white border-[#C59B27] shadow-md ring-2 ring-[#C59B27]/30'
                  : 'bg-[#FAF9F5] hover:bg-white border-[#E5E3D8] text-[#475569]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0B1B3D]">2. Hábeas Corpus</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#0B1B3D] text-[#C59B27] font-bold">
                  4 Pasos
                </span>
              </div>
              <p className="text-[11px] text-[#64748B] line-clamp-2">
                Exhibición personal y tutela de libertad física (Art. 11 Cn. y LPC).
              </p>
            </button>

            <button
              onClick={() => setWorkshopTab('inconstitucionalidad')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer space-y-1.5 ${
                workshopTab === 'inconstitucionalidad'
                  ? 'bg-white border-[#C59B27] shadow-md ring-2 ring-[#C59B27]/30'
                  : 'bg-[#FAF9F5] hover:bg-white border-[#E5E3D8] text-[#475569]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#0B1B3D]">3. Inconstitucionalidad</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#0B1B3D] text-[#C59B27] font-bold">
                  4 Pasos
                </span>
              </div>
              <p className="text-[11px] text-[#64748B] line-clamp-2">
                Acción popular ciudadana con efectos erga omnes (Art. 183 Cn.).
              </p>
            </button>
          </div>

          {/* Guía Procesal Paso a Paso */}
          <div className="bg-white rounded-2xl border border-[#E5E3D8] p-6 sm:p-8 shadow-corporate-card space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E5E3D8] pb-4">
              <div>
                <h3 className="text-xl font-bold font-editorial text-[#0B1B3D] flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#C59B27]" />
                  {currentWorkshopData.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  {currentWorkshopData.description}
                </p>
              </div>
              <span className="text-xs font-mono-exam font-bold bg-[#FAF9F5] text-slate-700 px-3 py-1 rounded-lg border border-[#E5E3D8] shrink-0 self-start sm:self-auto">
                {currentWorkshopData.steps.length} Fases Procesales
              </span>
            </div>

            <div className="space-y-5">
              {currentWorkshopData.steps.map((step) => {
                const isCopied = copiedSnippetIndex === step.stepNumber;

                return (
                  <div
                    key={step.stepNumber}
                    className="bg-white rounded-2xl border border-[#E5E3D8] shadow-xs p-5 sm:p-6 space-y-4"
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

                    <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E3D8] space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-mono-exam font-bold text-[10.5px] uppercase tracking-wider text-slate-500">
                          Orientación Forense y Requisitos:
                        </span>
                        <AudioSpeechButton
                          id={`workshop-step-${workshopTab}-${step.stepNumber}`}
                          textToSpeak={`${step.title}. ${step.practicalGuidance}`}
                          label="Escuchar Orientación"
                        />
                      </div>
                      <p className="text-slate-800 leading-relaxed text-xs">
                        {step.practicalGuidance}
                      </p>
                    </div>

                    <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200 text-xs space-y-1">
                      <div className="flex items-center gap-1.5 font-mono-exam font-bold text-amber-900 text-[11px] uppercase tracking-wider">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        <span>Vicio Común que Provoca Inadmisibilidad o Rechazo:</span>
                      </div>
                      <p className="text-amber-950 leading-relaxed pl-5">
                        {step.commonMistakes}
                      </p>
                    </div>

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

            {/* Caso Práctico Resuelto de Inicio a Fin en el Taller */}
            <div className="space-y-4 pt-6 border-t border-[#EAE8DD]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h4 className="font-editorial text-lg sm:text-xl font-bold text-[#0B1B3D] flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#C59B27]" />
                    Expediente Modelo Resuelto de Principio a Fin
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    {currentWorkshopData.solvedCase.title}
                  </p>
                </div>
                <span className="text-xs font-mono-exam font-bold bg-[#0B1B3D] text-[#C59B27] px-3 py-1 rounded-md border border-[#1E3A70]">
                  Caso Completo Resuelto
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-[#E5E3D8] space-y-1 text-xs">
                <span className="font-mono-exam font-bold text-[#0B1B3D] block">OBJETO LITIGIOSO:</span>
                <p className="text-[#334155]">{currentWorkshopData.solvedCase.constitutionalSubject}</p>
              </div>

              <div className="space-y-3">
                {currentWorkshopData.solvedCase.proceduralStages.map((stage, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl border border-[#E5E3D8] bg-white space-y-3 shadow-2xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-editorial text-sm font-bold text-[#0B1B3D] flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4 text-[#1E7E34]" />
                        {stage.stageName}
                      </span>
                    </div>

                    <p className="text-xs text-[#475569] leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="bg-[#0B1B3D] p-3 rounded-lg text-slate-200 text-xs font-mono-exam border border-[#1E3A70]">
                      <span className="text-[#C59B27] text-[10px] block font-bold mb-1">MEMORIAL PROCESAL:</span>
                      <p className="italic">"{stage.forensicModelSnippet}"</p>
                    </div>

                    <div className="bg-[#EBF7EE] p-3 rounded-lg border border-[#C3E6CB] text-xs text-[#1E7E34]">
                      <span className="font-mono-exam font-bold block text-[10px] uppercase">
                        RESOLUCIÓN JUDICIAL:
                      </span>
                      <p className="text-[#064E3B] font-medium">{stage.courtResolution}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#0B1B3D]/5 border border-[#0B1B3D]/20 text-xs text-[#0B1B3D] space-y-1">
                <span className="font-mono-exam font-bold text-[11px] block">
                  PRECEDENTE VINCULANTE CSJ APLICABLE:
                </span>
                <p className="italic text-[#334155]">
                  {currentWorkshopData.solvedCase.keyPrecedentCSJ}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConstitutionLawView;

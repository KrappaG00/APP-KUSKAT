import React, { useState } from 'react';
import {
  Trophy,
  Lightbulb,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Award,
  Layers,
  BookOpen,
  Brain,
  Check,
  FolderOpen,
  QrCode,
  Atom,
  GraduationCap,
  BookmarkCheck,
  FileCheck2,
  Cpu,
} from 'lucide-react';
import {
  OLYMPIC_DISCIPLINES,
  OLYMPIC_PROBLEMS_DATA,
  OLYMPIC_THEMATIC_UNITS,
  OlympicProblem,
  OlympicThematicUnit,
} from '../data/jovenesTalentoData';
import { KaTeXMath } from '../utils/mathRenderer';
import { logQuestionError } from '../services/errorLogService';
import { issueCertificate, AcademicCertificate } from '../services/certificateService';
import { CertificateModal } from './CertificateModal';
import { AudioSpeechButton } from './AudioSpeechButton';

interface JovenesTalentoViewProps {
  onOpenErrorNotebook?: () => void;
  showToast?: (msg: string) => void;
}

export const JovenesTalentoView: React.FC<JovenesTalentoViewProps> = ({
  onOpenErrorNotebook,
  showToast,
}) => {
  const [activeTab, setActiveTab] = useState<'theory' | 'drills'>('theory');
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [unlockedHints, setUnlockedHints] = useState<Record<string, number>>({});
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [issuedCert, setIssuedCert] = useState<AcademicCertificate | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState<boolean>(false);
  const [expandedExamples, setExpandedExamples] = useState<Record<string, boolean>>({
    'onm-teoria-numeros-ex-1': true,
    'onm-combinatoria-palomar-ex-1': true,
    'onf-rotacion-momento-ex-1': true,
    'onq-termodinamica-gibbs-ex-1': true,
    'onb-genetica-grafos-dp-ex-1': true,
  });

  const filteredThematicUnits =
    selectedDiscipline === 'all'
      ? OLYMPIC_THEMATIC_UNITS
      : OLYMPIC_THEMATIC_UNITS.filter((u) => u.discipline === selectedDiscipline);

  const filteredProblems =
    selectedDiscipline === 'all'
      ? OLYMPIC_PROBLEMS_DATA
      : OLYMPIC_PROBLEMS_DATA.filter((p) => p.discipline === selectedDiscipline);

  const handleUnlockHint = (problemId: string, level: number) => {
    setUnlockedHints((prev) => ({
      ...prev,
      [problemId]: Math.max(prev[problemId] || 0, level),
    }));
  };

  const handleToggleSolution = (problemId: string) => {
    setShowSolution((prev) => ({
      ...prev,
      [problemId]: !prev[problemId],
    }));
  };

  const handleToggleExample = (exampleKey: string) => {
    setExpandedExamples((prev) => ({
      ...prev,
      [exampleKey]: !prev[exampleKey],
    }));
  };

  const handleSelectAnswer = (p: OlympicProblem, optKey: 'A' | 'B' | 'C' | 'D') => {
    setUserAnswers((prev) => ({ ...prev, [p.id]: optKey }));

    if (optKey !== p.correctAnswer) {
      logQuestionError({
        questionId: p.id,
        questionText: `[${p.disciplineLabel} - ${p.stage}] ${p.statement}`,
        categoryKey: `Jóvenes Talento • ${p.disciplineLabel}`,
        selectedAnswer: optKey,
        correctAnswer: p.correctAnswer,
        options: p.options,
        explanation: p.detailedSolution,
      });
    }
  };

  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.entries(userAnswers).filter(
    ([id, ans]) => ans === OLYMPIC_PROBLEMS_DATA.find((p) => p.id === id)?.correctAnswer
  ).length;

  const handleGenerateCertificate = async () => {
    const cert = await issueCertificate({
      studentName: 'Estudiante Olímpico de Alto Rendimiento',
      studentId: 'PJT-UES-' + Math.floor(10000 + Math.random() * 90000),
      moduleKey: `PJT_${selectedDiscipline.toUpperCase()}`,
      moduleTitle: 'Programa Jóvenes Talento: Entrenamiento Olímpico Nacional (MINED - UES)',
      institutionAuthority: 'Facultad de Ciencias Naturales y Matemática · UES & MINED',
      score: `${correctCount} / ${filteredProblems.length}`,
      numericScore: (correctCount / Math.max(filteredProblems.length, 1)) * 10,
      passingScoreRequired: '70%',
    });
    setIssuedCert(cert);
    setIsCertModalOpen(true);
    if (showToast) showToast('¡Diploma de mérito olímpico emitido con código QR!');
  };

  return (
    <div className="space-y-6 animate-fade-in font-sans-ui text-[#111625]">
      {/* Encabezado Corporativo Soberano */}
      <div className="bg-[#0B1B3D] border border-[#1A2E5A] rounded-2xl p-6 sm:p-8 text-white shadow-corporate-elevated relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C59B27] text-xs font-bold border border-[#C59B27]/30 font-mono-exam uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Programa Jóvenes Talento • MINED & Universidad de El Salvador (UES)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-editorial text-[#FAF9F5]">
            Academia de Alto Rendimiento Científico Olímpico
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Preparación científica de alto nivel para las Olimpiadas Nacionales de Matemática (ONM), Física (ONF), Química (ONQ), Biología (ONB) y Computación (OSI). Fundamentación teórica rigurosa de al menos 500 palabras por disciplina, <strong>25 demostraciones y problemas resueltos paso a paso</strong>, y reactivos interactivos con deducción guiada.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono-exam">
            <div className="bg-[#07132B] px-3 py-1.5 rounded-lg border border-[#C59B27]/30 text-[#C59B27] flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>5 Disciplinas • 25 Demostraciones Resueltas</span>
            </div>
            <div className="bg-[#07132B] px-3 py-1.5 rounded-lg border border-[#1E3A70] text-[#94A3B8] flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#C59B27]" />
              <span>Academia Sabatina UES · Formato Olímpico</span>
            </div>
          </div>
        </div>
      </div>

      {/* Control Segmentado: Unidades Didácticas vs. Banco de Problemas */}
      <div className="bg-white p-2 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setActiveTab('theory')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'theory'
                ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-xs'
                : 'bg-[#FAF9F5] text-[#475569] hover:bg-[#F2F1EA]'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#C59B27]" />
            <span>Unidades Teóricas & Demostraciones ({filteredThematicUnits.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('drills')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'drills'
                ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-xs'
                : 'bg-[#FAF9F5] text-[#475569] hover:bg-[#F2F1EA]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#C59B27]" />
            <span>Banco de Problemas Interactivos ({filteredProblems.length})</span>
          </button>
        </div>

        {activeTab === 'drills' && answeredCount > 0 && (
          <div className="flex items-center gap-2 text-xs font-mono-exam">
            <span className="text-[#64748B]">Aciertos:</span>
            <span className="font-bold text-[#0B1B3D] bg-emerald-50 px-2 py-1 rounded border border-emerald-200 text-emerald-800">
              {correctCount} / {filteredProblems.length}
            </span>
          </div>
        )}
      </div>

      {/* Selector de Disciplinas Olímpicas */}
      <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#E5E3D8] shadow-corporate-card flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {OLYMPIC_DISCIPLINES.map((d) => (
          <button
            key={d.id}
            type="button"
            onClick={() => setSelectedDiscipline(d.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono-exam transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
              selectedDiscipline === d.id
                ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
                : 'bg-white text-[#475569] border border-[#E5E3D8] hover:bg-[#F2F1EA]'
            }`}
          >
            <span>{d.icon}</span>
            <span>{d.name}</span>
          </button>
        ))}
      </div>

      {/* ===================================================================== */}
      {/* PESTAÑA 1: UNIDADES TEMÁTICAS DIDÁCTICAS & DEMOSTRACIONES RIGUROSAS   */}
      {/* ===================================================================== */}
      {activeTab === 'theory' && (
        <div className="space-y-8 animate-fade-in">
          {filteredThematicUnits.map((unit, uIdx) => (
            <div
              key={unit.id}
              className="bg-white rounded-2xl border border-[#E5E3D8] shadow-corporate-card p-6 sm:p-8 space-y-6"
            >
              {/* Encabezado de la Unidad */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E3D8] pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono-exam font-bold text-xs bg-[#0B1B3D] text-[#C59B27] px-2.5 py-0.5 rounded border border-[#1A2E5A]">
                      Unidad {uIdx + 1} • {unit.disciplineLabel}
                    </span>
                    <span className="font-mono-exam text-xs font-semibold bg-[#FAF9F5] text-slate-700 px-2 py-0.5 rounded border border-[#E5E3D8]">
                      {unit.stage}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-editorial text-[#0B1B3D] pt-1">
                    {unit.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <AudioSpeechButton
                    id={`unit-audio-${unit.id}`}
                    textToSpeak={`${unit.title}. ${unit.substantiveTheory.substring(0, 300)}`}
                    label="Escuchar Teoría"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDiscipline(unit.discipline);
                      setActiveTab('drills');
                    }}
                    className="px-3 py-1.5 bg-[#FAF9F5] hover:bg-[#F2F1EA] text-[#0B1B3D] font-mono-exam text-xs font-bold rounded-lg border border-[#E5E3D8] inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Brain className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>Practicar Reactivos</span>
                  </button>
                </div>
              </div>

              {/* Corpus Teórico Sustantivo (>= 500 palabras) */}
              <div className="bg-[#FAF9F5] rounded-xl border border-[#E5E3D8] p-5 sm:p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono-exam font-bold text-[#0B1B3D] uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-[#C59B27]" />
                  <span>Fundamentación Teórica Conceptual & Formalismo Matemático:</span>
                </div>
                <div className="text-xs sm:text-sm text-[#334155] leading-relaxed whitespace-pre-line font-sans-ui">
                  <KaTeXMath text={unit.substantiveTheory} />
                </div>
              </div>

              {/* Teoremas Clave de la Unidad */}
              <div className="space-y-3">
                <h4 className="font-mono-exam text-xs font-bold uppercase tracking-wider text-[#0B1B3D] flex items-center gap-2">
                  <BookmarkCheck className="w-4 h-4 text-[#C59B27]" />
                  <span>Teoremas e Identidades Cardinales:</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {unit.keyTheorems.map((thm, tIdx) => (
                    <div
                      key={tIdx}
                      className="bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-2xs space-y-2 flex flex-col justify-between"
                    >
                      <div className="space-y-1.5">
                        <span className="font-mono-exam font-bold text-xs text-[#0B1B3D] block">
                          {thm.name}
                        </span>
                        <div className="bg-[#FAF9F5] p-2 rounded border border-[#EAE8DD] text-xs font-mono-exam text-[#0B1B3D]">
                          <KaTeXMath text={thm.statement} />
                        </div>
                      </div>
                      <p className="text-[11px] text-[#64748B] leading-snug pt-1 border-t border-[#F2F1EA]">
                        <strong>Utilidad Olímpica:</strong> {thm.importance}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bloque de 5 Ejemplos Resueltos Paso a Paso */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between border-b border-[#E5E3D8] pb-2">
                  <h4 className="font-mono-exam text-xs font-bold uppercase tracking-wider text-[#0B1B3D] flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-emerald-600" />
                    <span>5 Demostraciones & Problemas Resueltos Paso a Paso:</span>
                  </h4>
                  <span className="font-mono-exam text-xs text-[#64748B]">
                    {unit.solvedExamples.length} problemas demostrados
                  </span>
                </div>

                <div className="space-y-3">
                  {unit.solvedExamples.map((ex) => {
                    const exKey = `${unit.id}-ex-${ex.number}`;
                    const isOpen = expandedExamples[exKey] || false;

                    return (
                      <div
                        key={ex.number}
                        className="bg-white rounded-xl border border-[#E5E3D8] overflow-hidden transition-all shadow-2xs"
                      >
                        <button
                          type="button"
                          onClick={() => handleToggleExample(exKey)}
                          className="w-full text-left p-4 bg-[#FAF9F5] hover:bg-[#F2F1EA] flex items-center justify-between gap-3 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-6 h-6 rounded-md bg-[#0B1B3D] text-[#C59B27] flex items-center justify-center font-mono-exam font-bold text-xs shrink-0">
                              #{ex.number}
                            </span>
                            <span className="font-bold text-xs sm:text-sm text-[#0B1B3D]">
                              {ex.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono-exam text-[#64748B]">
                              {isOpen ? 'Ocultar Solución' : 'Ver Demostración'}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="w-4 h-4 text-[#0B1B3D]" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-[#0B1B3D]" />
                            )}
                          </div>
                        </button>

                        {isOpen && (
                          <div className="p-5 space-y-4 border-t border-[#E5E3D8] bg-white animate-fade-in text-xs sm:text-sm">
                            {/* Enunciado del Problema */}
                            <div className="space-y-1">
                              <span className="font-mono-exam text-xs font-bold text-[#0B1B3D] block">
                                Enunciado del Problema / Teorema:
                              </span>
                              <div className="bg-[#FAF9F5] p-3.5 rounded-lg border border-[#E5E3D8] text-[#1E293B] leading-relaxed">
                                <KaTeXMath text={ex.problemStatement} />
                              </div>
                            </div>

                            {/* Demostración Paso a Paso */}
                            <div className="space-y-1.5">
                              <span className="font-mono-exam text-xs font-bold text-[#1E7E34] block flex items-center gap-1.5">
                                <Award className="w-3.5 h-3.5 text-[#1E7E34]" />
                                Demostración Formal Paso a Paso:
                              </span>
                              <div className="bg-emerald-50/40 p-4 rounded-xl border border-emerald-200 text-[#1E3A1E] leading-relaxed whitespace-pre-line font-mono-exam text-xs">
                                <KaTeXMath text={ex.stepByStepProof} />
                              </div>
                            </div>

                            {/* Insight Pedagógico */}
                            <div className="bg-amber-50/80 p-3.5 rounded-lg border border-amber-200 text-xs space-y-1">
                              <strong className="font-mono-exam text-amber-950 block">
                                💡 Visión Pedagógica Olímpica (MINED - UES):
                              </strong>
                              <p className="text-amber-900 leading-relaxed">
                                <KaTeXMath text={ex.pedagogicInsight} />
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
          ))}
        </div>
      )}

      {/* ===================================================================== */}
      {/* PESTAÑA 2: BANCO DE PROBLEMAS INTERACTIVOS CON PISTAS PROGRESIVAS     */}
      {/* ===================================================================== */}
      {activeTab === 'drills' && (
        <div className="space-y-6 animate-fade-in">
          {/* Barra de Progreso y Acciones */}
          {answeredCount > 0 && (
            <div className="bg-white p-4 rounded-xl border border-[#E5E3D8] shadow-corporate-subtle flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-exam">
              <div className="flex items-center gap-3">
                <span className="text-[#64748B]">Progreso:</span>
                <span className="font-bold text-[#0B1B3D]">
                  {correctCount} de {filteredProblems.length} resueltos con éxito
                </span>
              </div>

              <div className="flex items-center gap-2">
                {correctCount >= Math.ceil(filteredProblems.length * 0.7) && (
                  <button
                    type="button"
                    onClick={handleGenerateCertificate}
                    className="px-4 py-1.5 bg-[#C59B27] hover:bg-[#B38A22] text-[#0B1B3D] font-black rounded-lg border border-[#A67F1E] inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <QrCode className="w-3.5 h-3.5" />
                    <span>Emitir Diploma Olímpico</span>
                  </button>
                )}

                {onOpenErrorNotebook && (
                  <button
                    type="button"
                    onClick={onOpenErrorNotebook}
                    className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-lg inline-flex items-center gap-1 cursor-pointer"
                  >
                    <FolderOpen className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>Cuaderno de Errores FSRS</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Listado de Problemas Interactivos */}
          <div className="space-y-6">
            {filteredProblems.map((prob, idx) => {
              const unlocked = unlockedHints[prob.id] || 0;
              const isSolutionOpen = showSolution[prob.id] || false;
              const userAns = userAnswers[prob.id];
              const isAnswered = !!userAns;
              const isCorrect = userAns === prob.correctAnswer;

              return (
                <div
                  key={prob.id}
                  className="bg-white rounded-2xl border border-[#E5E3D8] shadow-corporate-card p-6 sm:p-7 space-y-5"
                >
                  {/* Encabezado del Problema */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E5E3D8] pb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono-exam font-bold text-xs bg-[#0B1B3D] text-[#C59B27] px-2.5 py-0.5 rounded border border-[#1A2E5A]">
                        Problema #{idx + 1} • {prob.disciplineLabel}
                      </span>
                      <span className="font-mono-exam text-xs font-semibold bg-[#FAF9F5] text-slate-700 px-2 py-0.5 rounded border border-[#E5E3D8]">
                        {prob.stage}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AudioSpeechButton
                        id={`olympic-audio-${prob.id}`}
                        textToSpeak={prob.statement}
                        label="Escuchar Problema"
                      />
                      <span className="text-[11px] font-mono-exam text-[#64748B]">
                        {prob.topic}
                      </span>
                    </div>
                  </div>

                  {/* Enunciado Matemático / Científico */}
                  <div className="text-sm font-medium text-[#111625] leading-relaxed bg-[#FAF9F5] p-4 rounded-xl border border-[#E5E3D8]">
                    <KaTeXMath text={prob.statement} />
                  </div>

                  {/* Sistema de Pistas Escalonadas */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono-exam">
                      <span className="font-bold text-[#0B1B3D] flex items-center gap-1.5">
                        <Lightbulb className="w-4 h-4 text-[#C59B27]" />
                        Sistema de Pistas de Deducción (Sin Spoilers):
                      </span>
                      <span className="text-[#64748B]">
                        {unlocked} de {prob.hints.length} pistas reveladas
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      {prob.hints.map((hint) => {
                        const isUnlocked = unlocked >= hint.level;
                        return (
                          <button
                            key={hint.level}
                            type="button"
                            onClick={() => handleUnlockHint(prob.id, hint.level)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono-exam font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                              isUnlocked
                                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                : 'bg-white text-slate-600 border border-[#E5E3D8] hover:bg-[#FAF9F5]'
                            }`}
                          >
                            <Lightbulb className={`w-3.5 h-3.5 ${isUnlocked ? 'text-[#C59B27]' : 'text-slate-400'}`} />
                            <span>Pista {hint.level} {isUnlocked ? '(Revelada)' : '(Desbloquear)'}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Contenido de Pistas Desbloqueadas */}
                    {unlocked > 0 && (
                      <div className="space-y-2 pt-2 animate-fade-in">
                        {prob.hints.slice(0, unlocked).map((h) => (
                          <div
                            key={h.level}
                            className="bg-amber-50/70 p-3 rounded-lg border border-amber-200 text-xs space-y-1"
                          >
                            <strong className="text-amber-950 font-mono-exam block">
                              💡 {h.title}:
                            </strong>
                            <p className="text-amber-900 leading-relaxed">
                              <KaTeXMath text={h.text} />
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Opciones de Evaluación */}
                  <div className="space-y-2 pt-1">
                    <span className="font-mono-exam text-xs font-bold text-[#0B1B3D] block">
                      Selecciona la Respuesta o Conclusión Teórica Correcta:
                    </span>

                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(prob.options).map(([key, text]) => {
                        const isSelected = userAns === key;
                        const isOptionCorrect = key === prob.correctAnswer;

                        let optClass = 'bg-white border-[#E5E3D8] hover:border-[#0B1B3D] text-[#1E293B]';
                        if (isAnswered) {
                          if (isOptionCorrect) {
                            optClass = 'bg-[#EBF7EE] border-[#1E7E34] text-[#1E7E34] font-bold';
                          } else if (isSelected && !isOptionCorrect) {
                            optClass = 'bg-rose-50 border-rose-500 text-rose-800 line-through';
                          }
                        }

                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => handleSelectAnswer(prob, key as any)}
                            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${optClass}`}
                          >
                            <span className="w-6 h-6 rounded-md bg-[#FAF9F5] border border-[#E5E3D8] flex items-center justify-center font-mono-exam font-bold text-xs shrink-0 text-[#0B1B3D]">
                              {key}
                            </span>
                            <span className="flex-1">
                              <KaTeXMath text={text} />
                            </span>
                            {isAnswered && isOptionCorrect && (
                              <Check className="w-4 h-4 text-[#1E7E34] shrink-0 mt-0.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Desglose de Distractores si respondió */}
                  {isAnswered && (
                    <div className="pt-2 space-y-2 text-xs">
                      <button
                        type="button"
                        onClick={() => handleToggleSolution(prob.id)}
                        className="px-4 py-2 bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] font-mono-exam text-xs font-bold rounded-lg border border-[#1A2E5A] inline-flex items-center gap-2 cursor-pointer transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-[#C59B27]" />
                        <span>{isSolutionOpen ? 'Ocultar Demostración Rigurosa' : 'Ver Demostración Rigurosa Paso a Paso'}</span>
                        {isSolutionOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      {isSolutionOpen && (
                        <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#E5E3D8] space-y-3 animate-fade-in">
                          <div className="flex items-center gap-1.5 font-bold font-mono-exam text-[#0B1B3D]">
                            <Award className="w-4 h-4 text-[#C59B27]" />
                            <span>Demostración y Solución Formal:</span>
                          </div>
                          <div className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                            <KaTeXMath text={prob.detailedSolution} />
                          </div>

                          {/* Análisis de Opciones Erróneas */}
                          <div className="pt-2 border-t border-[#E5E3D8] space-y-1 text-[11px]">
                            <span className="font-mono-exam font-bold text-[#9E472A] uppercase block">
                              Por qué fallan los otros distractores:
                            </span>
                            {Object.entries(prob.distractorRationale).map(([k, reason]) => (
                              <div key={k} className="flex items-start gap-1.5 text-slate-700">
                                <strong className="font-mono-exam text-[#9E472A]">({k}):</strong>
                                <span>{reason}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Modal de Certificación Oficial */}
      {issuedCert && (
        <CertificateModal
          isOpen={isCertModalOpen}
          onClose={() => setIsCertModalOpen(false)}
          certificate={issuedCert}
        />
      )}
    </div>
  );
};

export default JovenesTalentoView;

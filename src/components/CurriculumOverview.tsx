import React from 'react';
import { ExamCategory, SubjectMeta } from '../types';
import {
  CheckCircle2,
  BookOpen,
  ArrowRight,
  Layers,
  Sparkles,
  Calculator,
  Feather,
  Globe,
  Atom,
  Check,
  Shield,
  Landmark,
  TrendingUp,
  ShieldCheck,
  Scale,
  BarChart3,
  Laptop,
} from 'lucide-react';

interface CurriculumOverviewProps {
  category: ExamCategory;
  subjects: SubjectMeta[];
  onSelectSubtopic: (subjectId: string, subtopicId: string) => void;
  onOpenLatex: () => void;
}

export const CurriculumOverview: React.FC<CurriculumOverviewProps> = ({
  category,
  subjects,
  onSelectSubtopic,
  onOpenLatex,
}) => {
  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calculator':
        return <Calculator className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Feather':
        return <Feather className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'Atom':
        return <Atom className="w-5 h-5" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Scale':
        return <Scale className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const totalQuestions = subjects.reduce((acc, s) => acc + s.totalQuestions, 0);
  const totalSubtopics = subjects.reduce((acc, s) => acc + s.totalSubtopics, 0);

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className={`rounded-2xl sm:rounded-3xl p-5 sm:p-10 text-white shadow-xl relative overflow-hidden ${
        category === 'ANSP'
          ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950'
          : 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900'
      }`}>
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
            {category === 'ANSP' ? <Shield className="w-3.5 h-3.5 text-blue-400" /> : <Sparkles className="w-3.5 h-3.5 text-blue-400" />}
            <span>Temario {category} • 100% Integrado en Opción Múltiple</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
            {category === 'ANSP'
              ? 'Temario Oficial ANSP 2025 (Prueba Cultural)'
              : 'Estructura Maestro de Admisión UES (7,500 Preguntas)'}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {category === 'ANSP'
              ? '250 preguntas del cuestionario oficial transformadas al formato estándar de opción múltiple (A-D) con clave y justificación en las 10 materias.'
              : 'Las 5 materias académicas consolidadas con opciones completas (A-F), respuestas clave y justificaciones paso a paso.'}
          </p>

          <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs font-medium">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>{subjects.length} Asignaturas Oficiales</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl border border-white/10">
              <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
              <span>{totalSubtopics} Unidades / Secciones</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl border border-white/10">
              <span className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
              <span>{totalQuestions.toLocaleString()} Preguntas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Subjects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {subjects.map((subj) => (
          <div
            key={subj.id}
            className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-2xl bg-gradient-to-tr ${subj.color} text-white flex items-center justify-center shadow-md`}>
                    {getSubjectIcon(subj.icon)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400">Materia {subj.number}</span>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${subj.badgeBg} ${subj.badgeText}`}>
                        {subj.codeRange}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900">
                      {subj.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Listo</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                {subj.description}
              </p>

              {/* Subtopics List */}
              {subj.subtopics.length > 0 && (
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Secciones temáticas ({subj.subtopics.length}):
                  </div>
                  {subj.subtopics.map((st) => (
                    <button
                      key={st.id}
                      onClick={() => onSelectSubtopic(subj.id, st.id)}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/70 hover:border-blue-200 text-left transition-all text-xs cursor-pointer group"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono font-bold text-slate-900 bg-white border border-slate-200 px-2 py-0.5 rounded-md shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          {st.code}
                        </span>
                        <span className="font-semibold text-slate-700 group-hover:text-blue-900 transition-colors truncate max-w-[200px] sm:max-w-xs">
                          {st.title}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-slate-400 group-hover:text-blue-600">
                        <span className="font-mono text-[11px] font-medium text-slate-500">
                          {st.questionCount} Q
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Total en esta materia:</span>
              <strong className="text-slate-900 font-bold">{subj.totalQuestions.toLocaleString()} preguntas</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

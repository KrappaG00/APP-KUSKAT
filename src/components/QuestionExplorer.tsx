import React, { useState, useEffect, useMemo } from 'react';
import { ExamCategory, Question, SubjectMeta, SubtopicMeta } from '../types';
import { fetchSubtopicQuestions, generateLatexForQuestions } from '../services/bancoService';
import { QuestionCard } from './QuestionCard';
import {
  Search,
  Filter,
  Download,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  FileCode,
  Sparkles,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';

interface QuestionExplorerProps {
  category: ExamCategory;
  currentSubject: SubjectMeta;
  activeSubtopicId: string;
  onSelectSubtopic: (id: string) => void;
  onDownloadTex: (fileName: string, content: string) => void;
}

const QUESTIONS_PER_PAGE = 20;

export const QuestionExplorer: React.FC<QuestionExplorerProps> = ({
  category,
  currentSubject,
  activeSubtopicId,
  onSelectSubtopic,
  onDownloadTex,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Active subtopic meta
  const currentSubtopic = useMemo(() => {
    return (
      currentSubject.subtopics.find((s) => s.id === activeSubtopicId) ||
      currentSubject.subtopics[0]
    );
  }, [currentSubject, activeSubtopicId]);

  // Load questions when subtopic or subject changes
  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setSelectedSection('all');
    setCurrentPage(1);

    const fetchId = category === 'ANSP' ? currentSubject.id : currentSubtopic.id;

    fetchSubtopicQuestions(category, fetchId)
      .then((data) => {
        if (isMounted) {
          setQuestions(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error fetching questions:', err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [category, currentSubject.id, currentSubtopic?.id]);

  // Extract unique sections
  const availableSections = useMemo(() => {
    const set = new Set<string>();
    questions.forEach((q) => {
      if (q.sectionTitle) set.add(q.sectionTitle);
    });
    return Array.from(set);
  }, [questions]);

  // Filter questions based on search query, section or subtopic
  const filteredQuestions = useMemo(() => {
    let list = questions;

    if (category === 'ANSP' && currentSubtopic && currentSubject.subtopics.length > 1) {
      if (activeSubtopicId && activeSubtopicId !== currentSubject.id) {
        list = list.filter((q) => q.sectionTitle === currentSubtopic.title);
      }
    }

    if (selectedSection !== 'all') {
      list = list.filter((q) => q.sectionTitle === selectedSection);
    }

    if (searchQuery.trim()) {
      const qLower = searchQuery.toLowerCase().trim();
      list = list.filter((q) => {
        const matchNum = q.number.toString().includes(qLower);
        const matchStmt = q.statement.toLowerCase().includes(qLower);
        const matchOpts = q.options.some((opt) => opt.text.toLowerCase().includes(qLower));
        const matchExpl = q.explanation.toLowerCase().includes(qLower);
        return matchNum || matchStmt || matchOpts || matchExpl;
      });
    }

    return list;
  }, [category, questions, currentSubtopic, currentSubject, activeSubtopicId, selectedSection, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredQuestions.length / QUESTIONS_PER_PAGE) || 1;
  const paginatedQuestions = useMemo(() => {
    const start = (currentPage - 1) * QUESTIONS_PER_PAGE;
    return filteredQuestions.slice(start, start + QUESTIONS_PER_PAGE);
  }, [filteredQuestions, currentPage]);

  const handleDownloadSubtopicLatex = () => {
    const title = currentSubtopic ? currentSubtopic.title : currentSubject.name;
    const code = currentSubtopic ? currentSubtopic.code : currentSubject.codeRange;
    const tex = generateLatexForQuestions(title, code, questions, true);
    onDownloadTex(`banco_${category}_${code.replace(/[\.\s]/g, '_')}.tex`, tex);
  };

  return (
    <div className="space-y-6">
      {/* Subject Header & Subtopic Selector Bar */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 sm:mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className={`text-[11px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full ${currentSubject.badgeBg} ${currentSubject.badgeText}`}>
                {category} • Materia {currentSubject.number}
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                {currentSubject.codeRange} • {currentSubject.totalQuestions} preguntas
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {currentSubject.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
              {currentSubject.description}
            </p>
          </div>

          <button
            onClick={handleDownloadSubtopicLatex}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer shrink-0 w-full sm:w-auto"
            title="Descargar estas preguntas en formato LaTeX (.tex)"
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span>Exportar Materia .tex</span>
          </button>
        </div>

        {/* Subtopics Tabs */}
        {currentSubject.subtopics.length > 1 && (
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none touch-scroll pt-2 border-t border-slate-100">
            {currentSubject.subtopics.map((sub) => {
              const isSelected = sub.id === currentSubtopic?.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => onSelectSubtopic(sub.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200/80'
                  }`}
                >
                  <span className="font-mono text-[11px]">{sub.code}</span>
                  <span className="truncate max-w-[120px] sm:max-w-[200px] font-medium">{sub.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md font-mono ${
                    isSelected ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {sub.questionCount}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-xs flex flex-col sm:flex-row gap-2.5 sm:gap-3 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full sm:w-72 lg:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar por palabra, número, fórmula..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
          />
        </div>

        {/* Section Filter Dropdown */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {availableSections.length > 0 && (
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400 shrink-0 hidden sm:block" />
              <select
                value={selectedSection}
                onChange={(e) => {
                  setSelectedSection(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full sm:w-60 md:w-64 p-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 truncate"
              >
                <option value="all">Todas las Secciones ({questions.length} preguntas)</option>
                {availableSections.map((sec, idx) => (
                  <option key={idx} value={sec}>
                    {sec}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="text-xs text-slate-500 font-medium whitespace-nowrap pl-2 border-l border-slate-200 hidden md:block">
            Mostrando <strong>{filteredQuestions.length}</strong> de {questions.length}
          </div>
        </div>
      </div>

      {/* Questions List */}
      {loading ? (
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-3">
          <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs sm:text-sm font-semibold text-slate-600">
            Cargando preguntas de {currentSubject.name}...
          </p>
        </div>
      ) : filteredQuestions.length === 0 ? (
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-2">
          <p className="text-base font-bold text-slate-800">No se encontraron preguntas</p>
          <p className="text-xs text-slate-500">
            Intenta con otro término de búsqueda o limpia los filtros.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedSection('all');
            }}
            className="mt-3 px-3.5 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg cursor-pointer"
          >
            Restablecer Filtros
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {paginatedQuestions.map((q) => (
            <QuestionCard key={q.id} question={q} subtopicTitle={currentSubject.name} />
          ))}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-xs flex items-center justify-between gap-2 mt-6">
              <button
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage((p) => Math.max(1, p - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors shrink-0"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Anterior</span>
              </button>

              <div className="text-xs font-medium text-slate-600 text-center px-1">
                <span className="sm:hidden">
                  Pág. <strong className="text-slate-900">{currentPage}</strong> / {totalPages} ({filteredQuestions.length} Q)
                </span>
                <span className="hidden sm:inline">
                  Página <strong className="text-slate-900">{currentPage}</strong> de{' '}
                  <strong className="text-slate-900">{totalPages}</strong> (Preguntas{' '}
                  {(currentPage - 1) * QUESTIONS_PER_PAGE + 1}–
                  {Math.min(currentPage * QUESTIONS_PER_PAGE, filteredQuestions.length)})
                </span>
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => {
                  setCurrentPage((p) => Math.min(totalPages, p + 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors shrink-0"
              >
                <span className="hidden sm:inline">Siguiente</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

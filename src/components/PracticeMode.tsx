import React, { useState, useEffect, useMemo } from 'react';
import {
  Award,
  Clock,
  RotateCcw,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Sparkles,
  Play,
  Layers,
  Shield,
  GraduationCap,
  FolderTree,
  Check,
  Copy,
  Info,
  FileCode,
  Flame,
  HelpCircle,
  SlidersHorizontal,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Target,
} from 'lucide-react';
import { Institution, Question, SubjectMeta, SubtopicMeta, PedagogicalLevel } from '../types';
import {
  fetchUnifiedCurriculum,
  fetchDynamicQuizPool,
  fetchSubtopicQuestions,
  getSimilarQuestion,
} from '../services/bancoService';
import { MathText } from './CategoryHierarchyViewer';

interface PracticeModeProps {
  initialQuestions?: Question[] | null;
  initialTitle?: string | null;
  onExportLatex?: (questions: Question[], title: string) => void;
  onBackToCategories?: () => void;
  showToast: (msg: string) => void;
}

export const PracticeMode: React.FC<PracticeModeProps> = ({
  initialQuestions,
  initialTitle,
  onExportLatex,
  onBackToCategories,
  showToast,
}) => {
  // Malla curricular para el configurador
  const [subjects, setSubjects] = useState<SubjectMeta[]>([]);
  const [loadingCurriculum, setLoadingCurriculum] = useState<boolean>(true);

  // Filtros del configurador de tests
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | Institution>('ALL');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('ALL');
  const [selectedSubtopicId, setSelectedSubtopicId] = useState<string>('ALL');
  const [selectedSectionTitle, setSelectedSectionTitle] = useState<string>('ALL');
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | PedagogicalLevel>('ALL');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [timerMode, setTimerMode] = useState<'none' | '1m' | '1.5m'>('1m');
  const [tutorMode, setTutorMode] = useState<boolean>(false);

  // Estados de remediación pedagógica en el solucionario
  const [activeRemediationIdx, setActiveRemediationIdx] = useState<number | null>(null);
  const [remediationQuestion, setRemediationQuestion] = useState<Question | null>(null);
  const [remediationUserAns, setRemediationUserAns] = useState<string | null>(null);
  const [remediationSolved, setRemediationSolved] = useState<boolean>(false);

  // Estados del examen en progreso
  const [quizActive, setQuizActive] = useState<boolean>(false);
  const [loadingPool, setLoadingPool] = useState<boolean>(false);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [quizTitle, setQuizTitle] = useState<string>('Simulacro Personalizado');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [markedQuestions, setMarkedQuestions] = useState<Record<number, boolean>>({});
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);
  const [totalExamSeconds, setTotalExamSeconds] = useState<number>(0);

  // Carga de currículo al montar
  useEffect(() => {
    let isMounted = true;
    fetchUnifiedCurriculum()
      .then((data) => {
        if (isMounted) {
          setSubjects(data.allSubjects);
          setLoadingCurriculum(false);
        }
      })
      .catch((err) => {
        console.warn('Error cargando currículo en PracticeMode:', err);
        if (isMounted) setLoadingCurriculum(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Si se reciben preguntas iniciales (ej. desde Categorías), configurar examen inmediatamente
  useEffect(() => {
    if (initialQuestions && initialQuestions.length > 0) {
      setQuizQuestions(initialQuestions);
      setQuizTitle(initialTitle || 'Prueba desde Selección de Categoría');
      setUserAnswers({});
      setMarkedQuestions({});
      setCurrentIndex(0);
      setQuizFinished(false);

      const secs = initialQuestions.length * 60;
      setSecondsRemaining(secs);
      setTotalExamSeconds(secs);
      setQuizActive(true);
    }
  }, [initialQuestions, initialTitle]);

  // Temporizador de cuenta regresiva
  useEffect(() => {
    if (!quizActive || quizFinished || timerMode === 'none') return;

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setQuizFinished(true);
          showToast('¡Tiempo concluido! El examen se ha entregado automáticamente.');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizActive, quizFinished, timerMode]);

  // Materias filtradas por la categoría seleccionada
  const filteredSubjects = useMemo(() => {
    if (selectedCategory === 'ALL') return subjects;
    return subjects.filter((s) => s.institution === selectedCategory);
  }, [subjects, selectedCategory]);

  // Materia activa seleccionada
  const activeSubject = useMemo(() => {
    if (selectedSubjectId === 'ALL') return null;
    return subjects.find((s) => s.id === selectedSubjectId) || null;
  }, [subjects, selectedSubjectId]);

  // Subtemas disponibles de la materia seleccionada
  const availableSubtopics = useMemo(() => {
    if (!activeSubject) return [];
    return activeSubject.subtopics;
  }, [activeSubject]);

  // Subtema activo seleccionado
  const activeSubtopic = useMemo(() => {
    if (selectedSubtopicId === 'ALL' || !activeSubject) return null;
    return activeSubject.subtopics.find((st) => st.id === selectedSubtopicId) || null;
  }, [activeSubject, selectedSubtopicId]);

  // Iniciar el examen con preguntas generadas desde todo el banco
  const handleStartGeneratedQuiz = async () => {
    setLoadingPool(true);
    try {
      const pool = await fetchDynamicQuizPool({
        category: selectedCategory,
        subjectId: selectedSubjectId,
        subtopicId: selectedSubtopicId,
        sectionTitle: selectedSectionTitle !== 'ALL' ? selectedSectionTitle : undefined,
        level: selectedLevel !== 'ALL' ? selectedLevel : undefined,
        count: questionCount,
      });

      if (pool.length === 0) {
        showToast('No se encontraron preguntas con los filtros seleccionados.');
        setLoadingPool(false);
        return;
      }

      let title = 'Simulacro General';
      if (activeSubtopic) {
        title = `Test: ${activeSubtopic.title}`;
      } else if (activeSubject) {
        title = `Simulacro: ${activeSubject.name}`;
      } else if (selectedCategory === 'UES') {
        title = 'Simulacro Oficial Admisión UES';
      } else if (selectedCategory === 'ANSP') {
        title = 'Simulador de Prueba Cultural ANSP';
      } else {
        title = 'Simulacro Integral Mixto (UES & ANSP)';
      }

      if (selectedLevel !== 'ALL') {
        const levelName =
          selectedLevel === 'basico' ? 'Básico' : selectedLevel === 'intermedio' ? 'Intermedio' : 'Admisión';
        title += ` • Nivel ${levelName}`;
      }

      let timePerQ = 60;
      if (timerMode === '1.5m') timePerQ = 90;
      const totalSecs = timerMode === 'none' ? 0 : pool.length * timePerQ;

      setQuizQuestions(pool);
      setQuizTitle(title);
      setUserAnswers({});
      setMarkedQuestions({});
      setCurrentIndex(0);
      setQuizFinished(false);
      setSecondsRemaining(totalSecs);
      setTotalExamSeconds(totalSecs);
      setActiveRemediationIdx(null);
      setRemediationQuestion(null);
      setQuizActive(true);
      showToast(`¡Examen iniciado con ${pool.length} reactivos!`);
    } catch (err) {
      console.error('Error iniciando quiz:', err);
      showToast('Error al preparar el banco de reactivos.');
    } finally {
      setLoadingPool(false);
    }
  };

  // Seleccionar opción
  const handleSelectOption = (key: string) => {
    if (quizFinished) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: key,
    }));
  };

  // Alternar marcado para revisión
  const toggleMarkQuestion = (idx: number) => {
    setMarkedQuestions((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  // Finalizar examen con confirmación si hay pendientes
  const handleFinishQuiz = () => {
    const answeredCount = Object.keys(userAnswers).length;
    const unanswered = quizQuestions.length - answeredCount;

    if (unanswered > 0) {
      const confirmSubmit = window.confirm(
        `Tienes ${unanswered} reactivo(s) sin contestar de ${quizQuestions.length}. ¿Deseas finalizar y calificar la prueba ahora?`
      );
      if (!confirmSubmit) return;
    }

    setQuizFinished(true);
    showToast('Examen calificado exitosamente.');
  };

  // Alternar reactivo similar para remediación
  const handleToggleRemediation = async (targetQ: Question, idx: number) => {
    if (activeRemediationIdx === idx) {
      setActiveRemediationIdx(null);
      setRemediationQuestion(null);
      setRemediationUserAns(null);
      setRemediationSolved(false);
      return;
    }

    // 1. Buscar en el pool del quiz actual
    let similar = getSimilarQuestion(targetQ, quizQuestions);

    // 2. Si no hay similar en el quiz actual, cargar del subtema
    if (!similar && targetQ.subtopicId) {
      try {
        const subQ = await fetchSubtopicQuestions(targetQ.institution, targetQ.subtopicId);
        similar = getSimilarQuestion(targetQ, subQ);
      } catch {
        // Fallback silencioso
      }
    }

    if (similar) {
      setActiveRemediationIdx(idx);
      setRemediationQuestion(similar);
      setRemediationUserAns(null);
      setRemediationSolved(false);
    } else {
      showToast('No se encontró otro reactivo equivalente en este subtema para practicar.');
    }
  };

  const handlePickRemediationOption = (key: string) => {
    setRemediationUserAns(key);
    setRemediationSolved(true);
  };

  // Reiniciar con las mismas preguntas
  const handleRetrySameQuiz = () => {
    setUserAnswers({});
    setMarkedQuestions({});
    setCurrentIndex(0);
    setQuizFinished(false);
    setSecondsRemaining(totalExamSeconds);
    setActiveRemediationIdx(null);
    setRemediationQuestion(null);
    showToast('Examen reiniciado para nueva evaluación.');
  };

  // Reiniciar y volver a configuración
  const handleNewTestConfig = () => {
    setQuizActive(false);
    setQuizFinished(false);
    setUserAnswers({});
    setMarkedQuestions({});
    setActiveRemediationIdx(null);
    setRemediationQuestion(null);
  };

  // Cálculos de Desempeño
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = useMemo(() => {
    return quizQuestions.reduce((acc, q, idx) => {
      return userAnswers[idx] === q.correctAnswer ? acc + 1 : acc;
    }, 0);
  }, [quizQuestions, userAnswers]);

  const incorrectCount = answeredCount - correctCount;
  const unansweredCount = quizQuestions.length - answeredCount;

  // Calificación oficial salvadoreña (Escala de 0.0 a 10.0)
  const finalGrade = useMemo(() => {
    if (!quizQuestions.length) return '0.0';
    const grade = (correctCount / quizQuestions.length) * 10;
    return grade.toFixed(1);
  }, [correctCount, quizQuestions.length]);

  const percentage = Math.round((correctCount / (quizQuestions.length || 1)) * 100);

  // Formato mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Desglose por materia para los resultados
  const subjectBreakdown = useMemo(() => {
    const map = new Map<string, { total: number; correct: number }>();
    quizQuestions.forEach((q, idx) => {
      const sName = q.subject || 'General';
      if (!map.has(sName)) map.set(sName, { total: 0, correct: 0 });
      const item = map.get(sName)!;
      item.total++;
      if (userAnswers[idx] === q.correctAnswer) item.correct++;
    });
    return Array.from(map.entries()).map(([name, data]) => ({
      name,
      ...data,
      pct: Math.round((data.correct / data.total) * 100),
    }));
  }, [quizQuestions, userAnswers]);

  // ==========================================================================
  // PANTALLA 1: CONFIGURADOR DEL SIMULADOR BASADO EN CATEGORÍAS
  // ==========================================================================
  if (!quizActive) {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-xs space-y-6">
          {/* Cabecera */}
          <div className="text-center space-y-2.5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-center mx-auto shadow-md shadow-amber-500/20">
              <Award className="w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Simulador Maestro de Tests KUSKAT
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
              Genera exámenes de evaluación aleatorios sobre el banco maestro de <strong className="text-slate-800">7,750 preguntas</strong>.
              Configura por tipo institucional, materia académica, unidad temática o sección.
            </p>
          </div>

          <div className="space-y-5 pt-2 border-t border-slate-100">
            {/* ============================================================ */}
            {/* 1. SELECTOR DE CATEGORÍA / TIPO INSTITUCIONAL */}
            {/* ============================================================ */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                1. Ámbito de Evaluación (Tipo):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('ALL');
                    setSelectedSubjectId('ALL');
                    setSelectedSubtopicId('ALL');
                    setSelectedSectionTitle('ALL');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedCategory === 'ALL'
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-[10px] font-mono opacity-70">7,750 Q</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-xs block">Integral Mixto</span>
                    <span className="text-[10px] opacity-75">UES & ANSP Combinado</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('UES');
                    setSelectedSubjectId('ALL');
                    setSelectedSubtopicId('ALL');
                    setSelectedSectionTitle('ALL');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedCategory === 'UES'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <GraduationCap className="w-4 h-4 text-blue-200" />
                    <span className="text-[10px] font-mono opacity-80">7,500 Q</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-xs block">Admisión UES</span>
                    <span className="text-[10px] opacity-75">5 Materias Académicas</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('ANSP');
                    setSelectedSubjectId('ALL');
                    setSelectedSubtopicId('ALL');
                    setSelectedSectionTitle('ALL');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedCategory === 'ANSP'
                      ? 'bg-indigo-700 text-white border-indigo-700 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Shield className="w-4 h-4 text-indigo-200" />
                    <span className="text-[10px] font-mono opacity-80">250 Q</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-xs block">Academia ANSP</span>
                    <span className="text-[10px] opacity-75">10 Materias de Temario</span>
                  </div>
                </button>
              </div>
            </div>

            {/* ============================================================ */}
            {/* 2. SELECTOR DE MATERIA */}
            {/* ============================================================ */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Materia Académica:
                </label>
                {selectedSubjectId !== 'ALL' && (
                  <button
                    onClick={() => {
                      setSelectedSubjectId('ALL');
                      setSelectedSubtopicId('ALL');
                      setSelectedSectionTitle('ALL');
                    }}
                    className="text-[11px] font-semibold text-blue-600 hover:underline cursor-pointer"
                  >
                    Evaluar todas las materias
                  </button>
                )}
              </div>

              <select
                value={selectedSubjectId}
                onChange={(e) => {
                  setSelectedSubjectId(e.target.value);
                  setSelectedSubtopicId('ALL');
                  setSelectedSectionTitle('ALL');
                }}
                className="w-full p-3 border border-slate-200 rounded-xl text-xs sm:text-sm bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="ALL">
                  🌟 Todas las Materias (Evaluación Global • {selectedCategory === 'ALL' ? '7,750' : selectedCategory === 'UES' ? '7,500' : '250'} reactivos)
                </option>
                {filteredSubjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    [{s.institution || 'UES'}] {s.name} ({s.totalQuestions} preguntas disponibles)
                  </option>
                ))}
              </select>
            </div>

            {/* ============================================================ */}
            {/* 3. SELECTOR DE TEMA / UNIDAD */}
            {/* ============================================================ */}
            {activeSubject && availableSubtopics.length > 0 && (
              <div className="space-y-1.5 animate-fade-in">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  3. Tema / Unidad ({activeSubject.name}):
                </label>
                <select
                  value={selectedSubtopicId}
                  onChange={(e) => {
                    setSelectedSubtopicId(e.target.value);
                    setSelectedSectionTitle('ALL');
                  }}
                  className="w-full p-3 border border-slate-200 rounded-xl text-xs sm:text-sm bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="ALL">Todos los temas de esta asignatura</option>
                  {availableSubtopics.map((st) => (
                    <option key={st.id} value={st.id}>
                      {st.code} {st.title} ({st.questionCount} reactivos)
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* ============================================================ */}
            {/* 4. CANTIDAD DE PREGUNTAS */}
            {/* ============================================================ */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                4. Cantidad de Reactivos para el Test:
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[5, 10, 20, 30, 50, 100].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setQuestionCount(num)}
                    className={`py-2.5 px-2 text-xs font-bold rounded-xl border transition-all cursor-pointer text-center ${
                      questionCount === num
                        ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{num}</span>
                    <span className="block text-[9px] font-normal opacity-70">
                      {num === 5 ? 'Express' : num === 50 ? 'Real UES' : 'reactivos'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* ============================================================ */}
            {/* 5. NIVEL DE PROGRESIÓN PEDAGÓGICA */}
            {/* ============================================================ */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                5. Nivel de Progresión Pedagógica:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedLevel('ALL')}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedLevel === 'ALL'
                      ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="font-bold text-xs block">Todos los Niveles</span>
                  <span className="text-[10px] opacity-75">Equilibrado</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLevel('basico')}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedLevel === 'basico'
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                      : 'bg-emerald-50/50 border-emerald-200 text-emerald-900 hover:bg-emerald-100/60'
                  }`}
                >
                  <span className="font-bold text-xs block">🌱 Básico</span>
                  <span className="text-[10px] opacity-75">Conceptos y Reglas</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLevel('intermedio')}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedLevel === 'intermedio'
                      ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                      : 'bg-blue-50/50 border-blue-200 text-blue-900 hover:bg-blue-100/60'
                  }`}
                >
                  <span className="font-bold text-xs block">⚡ Intermedio</span>
                  <span className="text-[10px] opacity-75">Procedimientos</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLevel('admision')}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedLevel === 'admision'
                      ? 'bg-purple-600 border-purple-600 text-white shadow-xs'
                      : 'bg-purple-50/50 border-purple-200 text-purple-900 hover:bg-purple-100/60'
                  }`}
                >
                  <span className="font-bold text-xs block">🎯 Admisión</span>
                  <span className="text-[10px] opacity-75">Simulación Real UES</span>
                </button>
              </div>
            </div>

            {/* ============================================================ */}
            {/* 6. CONFIGURACIÓN DE TIEMPO Y MODO DE PRÁCTICA */}
            {/* ============================================================ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {/* Temporizador */}
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Temporizador de Evaluación:</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 text-[11px] font-semibold">
                  <button
                    type="button"
                    onClick={() => setTimerMode('none')}
                    className={`py-1.5 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                      timerMode === 'none'
                        ? 'bg-white border-blue-600 text-blue-900 shadow-2xs font-bold'
                        : 'bg-slate-100 border-transparent text-slate-600 hover:bg-white'
                    }`}
                  >
                    Sin límite
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimerMode('1m')}
                    className={`py-1.5 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                      timerMode === '1m'
                        ? 'bg-white border-blue-600 text-blue-900 shadow-2xs font-bold'
                        : 'bg-slate-100 border-transparent text-slate-600 hover:bg-white'
                    }`}
                  >
                    1 min / Q
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimerMode('1.5m')}
                    className={`py-1.5 px-2 rounded-lg border text-center transition-all cursor-pointer ${
                      timerMode === '1.5m'
                        ? 'bg-white border-blue-600 text-blue-900 shadow-2xs font-bold'
                        : 'bg-slate-100 border-transparent text-slate-600 hover:bg-white'
                    }`}
                  >
                    1.5 min / Q
                  </button>
                </div>
              </div>

              {/* Modo Tutor / Inmediato */}
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Modo Tutor (Inmediato):</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={tutorMode}
                    onChange={(e) => setTutorMode(e.target.checked)}
                    className="w-4 h-4 text-blue-600 rounded cursor-pointer"
                  />
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {tutorMode
                    ? 'Muestra la solución y justificación KaTeX al contestar cada pregunta.'
                    : 'Modo simulación formal: la clave y soluciones se entregan al finalizar.'}
                </p>
              </div>
            </div>

            {/* Botón de Inicio */}
            <button
              onClick={handleStartGeneratedQuiz}
              disabled={loadingPool}
              className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold rounded-2xl shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer disabled:opacity-60"
            >
              {loadingPool ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Extrayendo reactivos de la base de 7,750 preguntas...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Comenzar Simulador ({questionCount} Reactivos)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // PANTALLA 2: EXAMEN EN CURSO (IN-PROGRESS)
  // ==========================================================================
  if (!quizFinished) {
    const currentQ = quizQuestions[currentIndex];
    const isAnswered = userAnswers[currentIndex] !== undefined;
    const isMarked = markedQuestions[currentIndex] || false;
    const isTimeUrgent = timerMode !== 'none' && secondsRemaining <= 120;

    return (
      <div className="max-w-3xl mx-auto space-y-5 animate-fade-in">
        {/* Barra de Estado y Progreso */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800">
                Pregunta {currentIndex + 1} de {quizQuestions.length}
              </span>
              <span className="text-xs font-semibold text-slate-500 hidden sm:inline truncate max-w-xs">
                {quizTitle}
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              {timerMode !== 'none' && (
                <div
                  className={`flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-xl border transition-all ${
                    isTimeUrgent
                      ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse'
                      : 'bg-amber-50 text-amber-800 border-amber-200'
                  }`}
                  title="Tiempo restante"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>{formatTime(secondsRemaining)}</span>
                </div>
              )}

              <button
                onClick={handleFinishQuiz}
                className="px-3.5 py-1.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Entregar Test
              </button>
            </div>
          </div>

          {/* Barra de Progreso */}
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${Math.round(((currentIndex + 1) / quizQuestions.length) * 100)}%` }}
            />
          </div>
        </div>

        {/* Tarjeta de la Pregunta Activa */}
        {currentQ && (
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            {/* Metadatos y Marcado */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs gap-2">
              <div className="flex items-center gap-2 flex-wrap text-slate-600">
                <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-md">
                  [{currentQ.institution}] {currentQ.subject}
                </span>
                <span className="hidden sm:inline">• {currentQ.topic}</span>
                {currentQ.level && (
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      currentQ.level === 'basico'
                        ? 'bg-emerald-100 text-emerald-800'
                        : currentQ.level === 'intermedio'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {currentQ.level === 'basico'
                      ? 'Nivel Básico'
                      : currentQ.level === 'intermedio'
                      ? 'Intermedio'
                      : 'Admisión'}
                  </span>
                )}
              </div>

              <button
                onClick={() => toggleMarkQuestion(currentIndex)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  isMarked
                    ? 'bg-amber-100 text-amber-800 font-bold'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100'
                }`}
                title="Marcar pregunta para revisar luego"
              >
                <Bookmark className={`w-3.5 h-3.5 ${isMarked ? 'fill-amber-600 text-amber-600' : ''}`} />
                <span>{isMarked ? 'Marcada' : 'Marcar'}</span>
              </button>
            </div>

            {/* Enunciado con KaTeX */}
            <div className="text-slate-900 text-base sm:text-lg leading-relaxed">
              <MathText text={currentQ.statement} />
            </div>

            {/* Opciones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {currentQ.options.map((opt) => {
                const isSelected = userAnswers[currentIndex] === opt.key;
                const isRight = currentQ.correctAnswer === opt.key;

                let optClass = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';

                // Si está en Modo Tutor y ya respondió esta pregunta
                if (tutorMode && isAnswered) {
                  if (isRight) {
                    optClass = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
                  } else if (isSelected) {
                    optClass = 'bg-rose-50 border-rose-400 text-rose-950';
                  } else {
                    optClass = 'bg-slate-50/50 border-slate-200 text-slate-400 opacity-60';
                  }
                } else if (isSelected) {
                  optClass = 'bg-blue-50 border-blue-600 text-blue-950 font-medium ring-2 ring-blue-500/20';
                }

                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(opt.key)}
                    className={`p-3.5 rounded-xl border text-sm text-left transition-all flex items-start gap-3 cursor-pointer min-h-[44px] ${optClass}`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                        tutorMode && isAnswered && isRight
                          ? 'bg-emerald-600 text-white'
                          : isSelected
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border border-slate-300 text-slate-700'
                      }`}
                    >
                      {opt.key}
                    </span>
                    <div className="flex-1 break-words pt-0.5 leading-snug">
                      <MathText text={opt.text} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Retroalimentación inmediata en Modo Tutor */}
            {tutorMode && isAnswered && (
              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 text-xs sm:text-sm text-slate-700 space-y-1.5 animate-fade-in">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <span>Clave Correcta:</span>
                  <span className="px-2 py-0.5 bg-blue-600 text-white rounded text-xs font-mono">
                    {currentQ.correctAnswer}
                  </span>
                  {userAnswers[currentIndex] === currentQ.correctAnswer ? (
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> ¡Excelente acierto!
                    </span>
                  ) : (
                    <span className="text-rose-600 font-bold">Respuesta incorrecta</span>
                  )}
                </div>
                <div className="leading-relaxed">
                  <strong className="text-slate-900">Justificación: </strong>
                  <MathText text={currentQ.explanation} />
                </div>
              </div>
            )}

            {/* Navegación Anterior / Siguiente */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-3">
              <button
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
                className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl disabled:opacity-40 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Anterior</span>
              </button>

              <div className="text-xs text-slate-400 font-medium">
                {answeredCount} de {quizQuestions.length} respondidas
              </div>

              {currentIndex < quizQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex((i) => Math.min(quizQuestions.length - 1, i + 1))}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs cursor-pointer"
                >
                  <span>Siguiente</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinishQuiz}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs cursor-pointer"
                >
                  <span>Entregar Examen</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Matriz de Salto Rápido a Preguntas */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Navegador de Reactivos:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {quizQuestions.map((_, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnsweredItem = userAnswers[idx] !== undefined;
                  const isMarkedItem = markedQuestions[idx];

                  let pillClass = 'bg-slate-100 text-slate-600 hover:bg-slate-200';
                  if (isCurrent) {
                    pillClass = 'bg-blue-600 text-white ring-2 ring-blue-300 font-bold';
                  } else if (isAnsweredItem) {
                    pillClass = 'bg-slate-800 text-white font-semibold';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-7 h-7 rounded-lg text-xs font-mono transition-all cursor-pointer relative ${pillClass}`}
                    >
                      {idx + 1}
                      {isMarkedItem && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 absolute top-0.5 right-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ==========================================================================
  // PANTALLA 3: RESULTADOS DEL EXAMEN Y SOLUCIONARIO PEDAGÓGICO
  // ==========================================================================
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      {/* Tarjeta de Calificación y Desempeño */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-9 shadow-xs space-y-6 text-center">
        <div
          className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto shadow-lg ${
            percentage >= 70
              ? 'bg-gradient-to-tr from-emerald-500 to-teal-600 text-white shadow-emerald-500/20'
              : 'bg-gradient-to-tr from-rose-500 to-red-600 text-white shadow-rose-500/20'
          }`}
        >
          <Award className="w-10 h-10" />
        </div>

        <div className="space-y-1">
          <span
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
              percentage >= 70
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-rose-100 text-rose-800'
            }`}
          >
            {percentage >= 70 ? '🎉 Examen Aprobado' : '⚠️ Resultado por Mejorar'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight pt-1">
            {quizTitle}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            {percentage >= 70
              ? 'Has demostrado dominio sobre las preguntas evaluadas de este simulacro.'
              : 'Revisa las justificaciones y refuerza los temas en el Menú de Categorías.'}
          </p>
        </div>

        {/* Panel de Métricas */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-100 text-left">
          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Calificación (0–10)</span>
            <span
              className={`text-2xl font-black ${
                percentage >= 70 ? 'text-emerald-600' : 'text-rose-600'
              }`}
            >
              {finalGrade}
            </span>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Porcentaje</span>
            <span className="text-2xl font-black text-slate-900">{percentage}%</span>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Aciertos</span>
            <span className="text-2xl font-black text-emerald-600">
              {correctCount} / {quizQuestions.length}
            </span>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            <span className="text-[10px] text-slate-400 font-bold uppercase block">Fallos / Vacías</span>
            <span className="text-2xl font-black text-rose-600">
              {incorrectCount + unansweredCount}
            </span>
          </div>
        </div>

        {/* Desglose por Materia */}
        {subjectBreakdown.length > 1 && (
          <div className="text-left space-y-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Desempeño por Materia:
            </span>
            <div className="space-y-2">
              {subjectBreakdown.map((sb) => (
                <div key={sb.name} className="flex items-center justify-between text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                  <span className="font-semibold text-slate-800">{sb.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500 font-mono">
                      {sb.correct} de {sb.total}
                    </span>
                    <span
                      className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                        sb.pct >= 70
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {sb.pct}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Botones de Acción */}
        <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
          <button
            onClick={handleRetrySameQuiz}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Repetir Mismo Test</span>
          </button>

          <button
            onClick={handleNewTestConfig}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Configurar Nuevo Test</span>
          </button>

          {onExportLatex && (
            <button
              onClick={() => onExportLatex(quizQuestions, `Solucionario: ${quizTitle}`)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Exportar Solucionario LaTeX</span>
            </button>
          )}
        </div>
      </div>

      {/* Solucionario Comentado Detallado */}
      <div className="space-y-4">
        <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
          <Info className="w-4 h-4 text-blue-600" />
          <span>Solucionario y Revisión Reactivo por Reactivo ({quizQuestions.length})</span>
        </h4>

        {quizQuestions.map((q, idx) => {
          const userAns = userAnswers[idx];
          const isRight = userAns === q.correctAnswer;
          const isBlank = userAns === undefined;

          return (
            <div
              key={q.id || idx}
              className={`bg-white rounded-2xl border p-5 sm:p-6 shadow-2xs space-y-3 ${
                isRight
                  ? 'border-emerald-200 bg-emerald-50/15'
                  : isBlank
                  ? 'border-amber-200 bg-amber-50/15'
                  : 'border-rose-200 bg-rose-50/15'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-mono font-bold flex items-center justify-center text-[11px]">
                    #{idx + 1}
                  </span>
                  <span className="font-bold text-slate-800">
                    [{q.institution}] {q.subject}
                  </span>
                  {q.level && (
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        q.level === 'basico'
                          ? 'bg-emerald-100 text-emerald-800'
                          : q.level === 'intermedio'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {q.level}
                    </span>
                  )}
                </div>

                <span
                  className={`font-bold px-2.5 py-0.5 rounded-full text-xs ${
                    isRight
                      ? 'bg-emerald-100 text-emerald-800'
                      : isBlank
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-rose-100 text-rose-800'
                  }`}
                >
                  {isRight ? '✓ Acierto' : isBlank ? '○ Sin Responder' : '✕ Fallo'}
                </span>
              </div>

              {/* Enunciado */}
              <div className="text-slate-900 text-sm sm:text-base leading-relaxed">
                <MathText text={q.statement} />
              </div>

              {/* Opciones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {q.options.map((opt) => {
                  const isUserPick = userAns === opt.key;
                  const isCorrectPick = q.correctAnswer === opt.key;

                  let optClass = 'bg-slate-50 border-slate-200 text-slate-700';
                  if (isCorrectPick) {
                    optClass = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                  } else if (isUserPick) {
                    optClass = 'bg-rose-50 border-rose-400 text-rose-950 line-through';
                  }

                  return (
                    <div
                      key={opt.key}
                      className={`p-2.5 rounded-xl border flex items-start gap-2.5 ${optClass}`}
                    >
                      <span className="font-mono font-bold">{opt.key})</span>
                      <div className="flex-1">
                        <MathText text={opt.text} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Justificación Pedagógica */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                <span className="font-bold text-slate-900 block">Explicación Oficial:</span>
                <div className="leading-relaxed">
                  <MathText text={q.explanation} />
                </div>
              </div>

              {/* Remediación Inmediata de Errores */}
              {!isRight && (
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => handleToggleRemediation(q, idx)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 border border-amber-300 shadow-2xs transition-all cursor-pointer"
                  >
                    <Target className="w-3.5 h-3.5 text-amber-700" />
                    <span>
                      {activeRemediationIdx === idx
                        ? 'Ocultar reactivo similar'
                        : 'Practicar reactivo similar'}
                    </span>
                  </button>

                  {activeRemediationIdx === idx && remediationQuestion && (
                    <div className="mt-3 p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-300 space-y-3 animate-fade-in text-left">
                      <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                        <div className="flex items-center gap-1.5 font-bold text-amber-950">
                          <Sparkles className="w-4 h-4 text-amber-600" />
                          <span>Reactivo de Remediación Inmediata</span>
                        </div>
                        <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-amber-200 text-amber-800">
                          {remediationQuestion.id} • {remediationQuestion.level || 'nivel equivalente'}
                        </span>
                      </div>

                      <div className="text-slate-900 text-sm font-medium leading-relaxed">
                        <MathText text={remediationQuestion.statement} />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {remediationQuestion.options.map((rOpt) => {
                          const isPicked = remediationUserAns === rOpt.key;
                          const isCorrect = remediationQuestion.correctAnswer === rOpt.key;
                          let rClass = 'bg-white border-amber-200 text-slate-800 hover:bg-amber-100/50';

                          if (remediationSolved) {
                            if (isCorrect) {
                              rClass = 'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                            } else if (isPicked) {
                              rClass = 'bg-rose-100 border-rose-400 text-rose-950';
                            } else {
                              rClass = 'bg-white/60 border-slate-200 text-slate-400 opacity-60';
                            }
                          }

                          return (
                            <button
                              key={rOpt.key}
                              type="button"
                              onClick={() => handlePickRemediationOption(rOpt.key)}
                              className={`p-2.5 rounded-xl border text-left transition-all flex items-start gap-2.5 cursor-pointer ${rClass}`}
                            >
                              <span className="font-mono font-bold">{rOpt.key})</span>
                              <div className="flex-1">
                                <MathText text={rOpt.text} />
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {remediationSolved && (
                        <div className="p-3 bg-white rounded-xl border border-amber-200 text-xs space-y-1 animate-fade-in">
                          <div className="font-bold flex items-center gap-1.5">
                            {remediationUserAns === remediationQuestion.correctAnswer ? (
                              <span className="text-emerald-700 flex items-center gap-1 font-bold">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                ¡Excelente! Has superado el reactivo de refuerzo.
                              </span>
                            ) : (
                              <span className="text-rose-700 flex items-center gap-1 font-bold">
                                <XCircle className="w-4 h-4 text-rose-600" />
                                Respuesta incorrecta. Revisa la justificación:
                              </span>
                            )}
                          </div>
                          <div className="text-slate-600 leading-relaxed">
                            <strong className="text-slate-800">Justificación: </strong>
                            <MathText text={remediationQuestion.explanation} />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

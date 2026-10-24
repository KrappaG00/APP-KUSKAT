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
  BookOpen,
  Sprout,
  Printer,
  ShieldCheck,
  Globe,
  Scale,
  Brain,
} from 'lucide-react';
import { Institution, Question, SubjectMeta, SubtopicMeta, PedagogicalLevel, EvaluationMode } from '../types';
import {
  fetchUnifiedCurriculum,
  fetchDynamicQuizPool,
  fetchSubtopicQuestions,
  getSimilarQuestion,
} from '../services/bancoService';
import { MathText, renderMathToString, escapeHtml } from '../utils/mathRenderer';
import { convertToTrueFalse, TrueFalseItem } from '../utils/trueFalseHelper';
import { LeaderboardSection } from './LeaderboardSection';
import { AdBanner } from './AdBanner';
import { saveExamResult } from '../services/statsService';
import { logQuestionError } from '../services/errorLogService';
import { SmartErrorNotebookModal } from './SmartErrorNotebookModal';
import { getCurrentUser } from '../services/authService';

interface PracticeModeProps {
  initialQuestions?: Question[] | null;
  initialTitle?: string | null;
  initialCategory?: 'ALL' | Institution;
  initialLanguageFilter?: 'ALL' | 'ingles' | 'nahuat' | 'lenca' | 'kakawira' | 'german' | 'arabic' | 'mandarin';
  onExportLatex?: (questions: Question[], title: string) => void;
  onBackToCategories?: () => void;
  onOpenAccountModal?: () => void;
  onQuizActiveChange?: (isActive: boolean) => void;
  showToast: (msg: string) => void;
}

export const PracticeMode: React.FC<PracticeModeProps> = ({
  initialQuestions,
  initialTitle,
  initialCategory,
  initialLanguageFilter,
  onExportLatex,
  onBackToCategories,
  onOpenAccountModal,
  onQuizActiveChange,
  showToast,
}) => {
<<<<<<< Updated upstream
=======
  const { translateQuestion, t } = useLanguage();
>>>>>>> Stashed changes
  // Malla curricular para el configurador
  const [subjects, setSubjects] = useState<SubjectMeta[]>([]);
  const [loadingCurriculum, setLoadingCurriculum] = useState<boolean>(true);

  // Filtros del configurador de tests
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | Institution>(initialCategory || 'ALL');
  const [selectedLanguageFilter, setSelectedLanguageFilter] = useState<'ALL' | 'ingles' | 'nahuat' | 'lenca' | 'kakawira' | 'german' | 'arabic' | 'mandarin'>(initialLanguageFilter || 'ALL');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('ALL');
  const [selectedSubtopicId, setSelectedSubtopicId] = useState<string>('ALL');
  const [selectedSectionTitle, setSelectedSectionTitle] = useState<string>('ALL');
  const [selectedLevel, setSelectedLevel] = useState<'ALL' | PedagogicalLevel>('ALL');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [timerMode, setTimerMode] = useState<'none' | '1m' | '1.5m'>('1m');
  const [tutorMode, setTutorMode] = useState<boolean>(false);
  const [evaluationMode, setEvaluationMode] = useState<EvaluationMode>('multiple_choice');

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
  const [isErrorNotebookOpen, setIsErrorNotebookOpen] = useState<boolean>(false);

  // Notificar al componente superior si hay un examen en progreso
  useEffect(() => {
    onQuizActiveChange?.(quizActive && !quizFinished);
  }, [quizActive, quizFinished, onQuizActiveChange]);

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

  // Cada vez que se cambie de pantalla en el simulador (configurador, examen, resultados) o de reactivo, aparece en la parte de arriba
  useEffect(() => {
    const scrollToTop = () => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
      } catch {
        window.scrollTo(0, 0);
      }
    };

    scrollToTop();
    const rafId = requestAnimationFrame(scrollToTop);
    return () => cancelAnimationFrame(rafId);
  }, [quizActive, quizFinished, currentIndex]);

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

  // Materias filtradas por la categoría seleccionada y filtro de idioma si aplica
  const filteredSubjects = useMemo(() => {
    let list = subjects;
    if (selectedCategory !== 'ALL') {
      list = list.filter((s) => s.institution === selectedCategory);
    }
    if (selectedCategory === 'INGLES' && selectedLanguageFilter !== 'ALL') {
      list = list.filter((s) => s.id.startsWith(`${selectedLanguageFilter}_`));
    }
    return list;
  }, [subjects, selectedCategory, selectedLanguageFilter]);

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
        languageId: selectedCategory === 'INGLES' ? selectedLanguageFilter : undefined,
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
      } else if (selectedCategory === 'AVANZO') {
        title = 'Simulacro Prueba Nacional AVANZO 2025';
      } else if (selectedCategory === 'ANSP') {
        title = 'Simulador de Prueba Cultural ANSP';
      } else if (selectedCategory === 'ASD') {
        title = 'Simulador Academia Sabatina Departamental (ASD)';
      } else if (selectedCategory === 'ENA') {
        title = 'Simulador de Admisión ENA 2027';
      } else if (selectedCategory === 'ESCALAFON') {
        title = 'Simulador de Ascenso al Nivel 1 del Escalafón Docente';
      } else if (selectedCategory === 'INGLES') {
        const langNames: Record<string, string> = {
          ingles: 'Inglés Internacional',
          nahuat: 'Náhuat Pipil',
          lenca: 'Lenca Potón',
          kakawira: 'Kakawira (Cacaopera)',
          german: 'Alemán (Deutsch)',
          arabic: 'Árabe (Al-\'Arabiyya)',
          mandarin: 'Mandarín (Pǔtōnghuà)',
        };
        const langTitle = selectedLanguageFilter !== 'ALL' ? langNames[selectedLanguageFilter] || 'Idiomas' : 'Escuela de Idiomas (7 Lenguas)';
        title = `Simulador de ${langTitle} • MCER / CEFR`;
      } else {
        title = 'Simulacro Integral Mixto (UES, ESCALAFÓN, AVANZO, ASD, ENA, ANSP & IDIOMAS)';
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

    // Registrar automáticamente errores en el Cuaderno Inteligente
    let loggedCount = 0;
    quizQuestions.forEach((q, idx) => {
      const userAns = userAnswers[idx];
      if (userAns !== q.correctAnswer) {
        const optionsMap: Record<string, string> = {};
        q.options.forEach((opt) => {
          optionsMap[opt.key] = opt.text;
        });
        logQuestionError({
          questionId: q.id,
          questionText: q.statement,
          categoryKey: q.institution ? `${q.institution} • ${q.subject || ''}` : 'Simulador General',
          selectedAnswer: userAns || '(Sin contestar)',
          correctAnswer: q.correctAnswer,
          options: optionsMap,
          explanation: q.explanation || 'Explicación oficial no provista.',
        });
        loggedCount++;
      }
    });

    setQuizFinished(true);
    if (loggedCount > 0) {
      showToast(`Examen calificado. Se registraron ${loggedCount} reactivo(s) en tu Cuaderno de Errores para remediación.`);
    } else {
      showToast('¡Felicidades! Examen perfecto, 100% de aciertos.');
    }
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
      if (evaluationMode === 'true_false') {
        const tf = convertToTrueFalse(q);
        const expected = tf.isTrue ? 'VERDADERO' : 'FALSO';
        return userAnswers[idx] === expected ? acc + 1 : acc;
      }
      return userAnswers[idx] === q.correctAnswer ? acc + 1 : acc;
    }, 0);
  }, [quizQuestions, userAnswers, evaluationMode]);

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
      const isCorrect =
        evaluationMode === 'true_false'
          ? userAnswers[idx] === (convertToTrueFalse(q).isTrue ? 'VERDADERO' : 'FALSO')
          : userAnswers[idx] === q.correctAnswer;
      if (isCorrect) item.correct++;
    });
    return Array.from(map.entries()).map(([name, data]) => ({
      name,
      ...data,
      pct: Math.round((data.correct / data.total) * 100),
    }));
  }, [quizQuestions, userAnswers, evaluationMode]);

  // Auto-guardado de resultados de exámenes en formato texto para historial de usuario y tabla Top 10
  useEffect(() => {
    if (quizFinished && quizQuestions.length > 0) {
      const user = getCurrentUser();
      const institution = quizQuestions[0]?.institution || 'UES';
      saveExamResult({
        userId: user ? user.id : 'invitado',
        userDisplayName: user ? user.username : 'Estudiante KUSKAT',
        institution: institution,
        quizTitle: quizTitle || `Simulacro Oficial ${institution}`,
        totalQuestions: quizQuestions.length,
        correctAnswers: correctCount,
        incorrectAnswers: incorrectCount,
        unanswered: unansweredCount,
        percentage: percentage,
        grade: finalGrade,
        timeSpentSeconds: totalExamSeconds - secondsRemaining,
        breakdown: subjectBreakdown
      });
    }
  }, [quizFinished]);

  // Generador e Impresor de Reporte PDF (100% en memoria en el cliente, cero guardado en nube ni archivos temporales)
  const handlePrintPdfReport = () => {
    try {
      const printIframe = document.createElement('iframe');
      printIframe.setAttribute('title', 'Reporte de Evaluación KUSKAT');
      printIframe.style.position = 'fixed';
      printIframe.style.right = '0';
      printIframe.style.bottom = '0';
      printIframe.style.width = '0';
      printIframe.style.height = '0';
      printIframe.style.border = '0';
      printIframe.style.opacity = '0';
      printIframe.style.pointerEvents = 'none';
      document.body.appendChild(printIframe);

      const iframeDoc = printIframe.contentWindow?.document;
      if (!iframeDoc) {
        showToast('No se pudo abrir el servicio de impresión.');
        return;
      }

      const now = new Date();
      const formattedDate = now.toLocaleDateString('es-SV', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const formattedTime = now.toLocaleTimeString('es-SV', {
        hour: '2-digit',
        minute: '2-digit',
      });

      const institutionName = quizQuestions[0]?.institution || 'KUSKAT';

      let html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>KUSKAT - Reporte de Resultados - ${escapeHtml(quizTitle)}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <style>
    @page {
      size: A4 portrait;
      margin: 1.5cm 1.2cm;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      margin: 0;
      padding: 0;
      font-size: 10pt;
      line-height: 1.45;
    }
    .header {
      border-bottom: 2.5px solid #1e3a8a;
      padding-bottom: 12px;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .header-logo {
      width: 48px;
      height: 48px;
      object-fit: contain;
    }
    .header-titles h1 {
      margin: 0;
      font-size: 16pt;
      font-weight: 800;
      color: #1e3a8a;
      letter-spacing: -0.5px;
    }
    .header-titles p {
      margin: 2px 0 0;
      font-size: 8.5pt;
      color: #64748b;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .header-right {
      text-align: right;
      font-size: 8pt;
      color: #475569;
    }
    .summary-card {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      padding: 14px 16px;
      margin-bottom: 16px;
    }
    .status-badge {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 9999px;
      font-size: 8.5pt;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .badge-approved { background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; }
    .badge-failed { background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; }
    .exam-title {
      font-size: 13pt;
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 10px;
    }
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
    .metric-box {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 8px 10px;
      text-align: center;
    }
    .metric-label {
      font-size: 7pt;
      text-transform: uppercase;
      color: #64748b;
      font-weight: 700;
      letter-spacing: 0.5px;
      display: block;
    }
    .metric-value {
      font-size: 14pt;
      font-weight: 800;
      margin-top: 2px;
      display: block;
    }
    .text-emerald { color: #059669; }
    .text-rose { color: #dc2626; }
    .breakdown-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      font-size: 8.5pt;
    }
    .breakdown-table th, .breakdown-table td {
      border: 1px solid #e2e8f0;
      padding: 5px 8px;
      text-align: left;
    }
    .breakdown-table th {
      background: #f1f5f9;
      font-weight: 700;
      color: #334155;
    }
    .section-title {
      font-size: 11pt;
      font-weight: 800;
      color: #1e3a8a;
      margin: 18px 0 10px;
      padding-bottom: 4px;
      border-bottom: 1.5px solid #cbd5e1;
    }
    .question-card {
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      padding: 10px 12px;
      margin-bottom: 10px;
      page-break-inside: avoid;
    }
    .q-correct { border-left: 4px solid #059669; background: #fafdfb; }
    .q-incorrect { border-left: 4px solid #dc2626; background: #fffdfd; }
    .q-blank { border-left: 4px solid #d97706; background: #fffdfa; }
    .q-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
      font-size: 8pt;
      font-weight: 700;
    }
    .q-statement {
      font-weight: 600;
      margin-bottom: 6px;
      font-size: 9pt;
      color: #1e293b;
    }
    .q-options {
      margin: 4px 0 6px;
      padding-left: 14px;
      font-size: 8.5pt;
    }
    .q-opt {
      margin-bottom: 2px;
    }
    .opt-correct { color: #065f46; font-weight: 700; }
    .opt-wrong { color: #991b1b; font-weight: 700; text-decoration: line-through; }
    .q-explanation {
      margin-top: 6px;
      padding: 6px 8px;
      background: #f8fafc;
      border-radius: 4px;
      font-size: 8pt;
      color: #475569;
      border: 1px solid #edf2f7;
    }
    .footer {
      margin-top: 24px;
      padding-top: 8px;
      border-top: 1px solid #e2e8f0;
      font-size: 7.5pt;
      color: #94a3b8;
      text-align: center;
      page-break-inside: avoid;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="header-left">
      <img src="${window.location.origin}/kuskat_logo.png" alt="KUSKAT" class="header-logo" onerror="this.style.display='none'">
      <div class="header-titles">
        <h1>KUSKAT</h1>
        <p>Reporte Oficial de Evaluación • ${escapeHtml(institutionName)}</p>
      </div>
    </div>
    <div class="header-right">
      <div><strong>Fecha:</strong> ${formattedDate}</div>
      <div><strong>Hora:</strong> ${formattedTime}</div>
      <div><strong>Plataforma:</strong> KUSKAT By Yeferson E. Perez</div>
    </div>
  </div>

  <div class="summary-card">
    <span class="status-badge ${percentage >= 70 ? 'badge-approved' : 'badge-failed'}">
      ${percentage >= 70 ? '✓ Examen Aprobado' : '⚠ Resultado por Mejorar'}
    </span>
    <h2 class="exam-title">${escapeHtml(quizTitle)}</h2>

    <div class="metrics-grid">
      <div class="metric-box">
        <span class="metric-label">Calificación (0-10)</span>
        <span class="metric-value ${percentage >= 70 ? 'text-emerald' : 'text-rose'}">${finalGrade}</span>
      </div>
      <div class="metric-box">
        <span class="metric-label">Porcentaje</span>
        <span class="metric-value">${percentage}%</span>
      </div>
      <div class="metric-box">
        <span class="metric-label">Aciertos</span>
        <span class="metric-value text-emerald">${correctCount} / ${quizQuestions.length}</span>
      </div>
      <div class="metric-box">
        <span class="metric-label">Fallos / Vacías</span>
        <span class="metric-value text-rose">${incorrectCount + unansweredCount}</span>
      </div>
    </div>`;

      if (subjectBreakdown.length > 1) {
        html += `
    <table class="breakdown-table">
      <thead>
        <tr>
          <th>Materia / Componente</th>
          <th>Aciertos</th>
          <th>Total</th>
          <th>Efectividad</th>
        </tr>
      </thead>
      <tbody>
        ${subjectBreakdown
          .map(
            (sb) => `
        <tr>
          <td><strong>${escapeHtml(sb.name)}</strong></td>
          <td>${sb.correct}</td>
          <td>${sb.total}</td>
          <td><strong style="color: ${sb.pct >= 70 ? '#059669' : '#dc2626'}">${sb.pct}%</strong></td>
        </tr>`
          )
          .join('')}
      </tbody>
    </table>`;
      }

      html += `
  </div>

  <div class="section-title">
    <span>Solucionario Oficial y Revisión Ítem por Ítem</span>
    <span style="font-size: 8.5pt; font-weight: 600; color: #64748b;">${quizQuestions.length} reactivos evaluados</span>
  </div>`;

      quizQuestions.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        const isRight = userAns === q.correctAnswer;
        const isBlank = userAns === undefined;

        html += `
  <div class="question-card ${isRight ? 'q-correct' : isBlank ? 'q-blank' : 'q-incorrect'}">
    <div class="q-header">
      <span>Reactivo #${idx + 1} • [${escapeHtml(q.institution)}] ${escapeHtml(q.subject)}</span>
      <span style="color: ${isRight ? '#059669' : isBlank ? '#d97706' : '#dc2626'}">
        ${isRight ? '✓ Correcto (+1.0)' : isBlank ? '○ No Respondida (0.0)' : `✗ Incorrecto (Clave: ${q.correctAnswer})`}
      </span>
    </div>
    <div class="q-statement">${renderMathToString(q.statement)}</div>
    <div class="q-options">`;

        q.options.forEach((opt) => {
          const isUserPick = userAns === opt.key;
          const isActualCorrect = q.correctAnswer === opt.key;

          let optClass = '';
          if (isActualCorrect) {
            optClass = 'opt-correct';
          }
          if (isUserPick && !isRight) {
            optClass = 'opt-wrong';
          }

          html += `
      <div class="q-opt ${optClass}">
        <strong>${opt.key})</strong> ${renderMathToString(opt.text)}
        ${isUserPick ? `<em>(Tu respuesta${isRight ? ' correcta' : ''})</em>` : ''}
      </div>`;
        });

        html += `
    </div>`;

        if (q.explanation) {
          html += `
    <div class="q-explanation">
      <strong>Justificación Oficial:</strong> ${renderMathToString(q.explanation)}
    </div>`;
        }

        html += `
  </div>`;
      });

      html += `
  <div class="footer">
    <p>Reporte generado 100% de manera local en el dispositivo del estudiante. Cero almacenamiento en la nube ni archivos temporales persistentes.</p>
    <p>KUSKAT • Plataforma de Preparación Académica de Alto Rendimiento • El Salvador</p>
  </div>
</body>
</html>`;

      iframeDoc.open();
      iframeDoc.write(html);
      iframeDoc.close();

      showToast('Abriendo ventana de impresión / exportación PDF...');

      setTimeout(() => {
        printIframe.contentWindow?.focus();
        printIframe.contentWindow?.print();

        // Eliminación total del iframe temporal en memoria
        setTimeout(() => {
          if (document.body.contains(printIframe)) {
            document.body.removeChild(printIframe);
          }
        }, 1500);
      }, 350);
    } catch (err) {
      console.error('Error al imprimir reporte:', err);
      showToast('Error al preparar el documento para impresión.');
    }
  };

  // ==========================================================================
  // PANTALLA 1: CONFIGURADOR DEL SIMULADOR BASADO EN CATEGORÍAS
  // ==========================================================================
  if (!quizActive) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 1 Anuncio Arriba del Simulador */}
        <AdBanner variant="light" positionLabel="Simulador • 1 Arriba" slotId="4241045160_s_top" />

        <div className="bg-white border border-[#E5E3D8] rounded-xl p-6 sm:p-9 shadow-corporate-card space-y-6">
          {/* Cabecera */}
          <div className="text-center space-y-2.5 font-sans-ui">
            <div className="w-14 h-14 rounded-lg bg-[#0B1B3D] border border-[#C59B27]/40 text-[#C59B27] flex items-center justify-center mx-auto shadow-corporate-subtle">
              <Award className="w-7 h-7 text-[#C59B27]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#111625] tracking-tight">
              Simulador Maestro de Tests KUSKAT
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] max-w-lg mx-auto leading-relaxed">
              Genera exámenes de evaluación aleatorios sobre el banco maestro de <strong className="text-[#0B1B3D] font-bold">34,440 preguntas</strong>.
              Configura por tipo institucional, materia académica, unidad temática o sección.
            </p>
          </div>

          <div className="space-y-5 pt-2 border-t border-[#E5E3D8]">
            {/* ============================================================ */}
            {/* 1. SELECTOR DE CATEGORÍA / TIPO INSTITUCIONAL */}
            {/* ============================================================ */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                1. Ámbito de Evaluación (Tipo):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('ALL');
                    setSelectedLanguageFilter('ALL');
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
                    <span className="text-[10px] font-mono opacity-70">34,440 Q</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-xs block">Integral Mixto</span>
                    <span className="text-[10px] opacity-75">Todas las Áreas</span>
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
                    setSelectedCategory('AVANZO');
                    setSelectedSubjectId('ALL');
                    setSelectedSubtopicId('ALL');
                    setSelectedSectionTitle('ALL');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedCategory === 'AVANZO'
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <BookOpen className="w-4 h-4 text-amber-200" />
                    <span className="text-[10px] font-mono opacity-80">3,000 Q</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-xs block">Prueba AVANZO</span>
                    <span className="text-[10px] opacity-75">Bachillerato 2025</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('ASD');
                    setSelectedSubjectId('ALL');
                    setSelectedSubtopicId('ALL');
                    setSelectedSectionTitle('ALL');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedCategory === 'ASD'
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Award className="w-4 h-4 text-emerald-200" />
                    <span className="text-[10px] font-mono opacity-80">2,190 Q</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-xs block">Jóvenes Talento</span>
                    <span className="text-[10px] opacity-75">5.°, 6.° y 7.° Grado</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('ENA');
                    setSelectedSubjectId('ALL');
                    setSelectedSubtopicId('ALL');
                    setSelectedSectionTitle('ALL');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedCategory === 'ENA'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Sprout className="w-4 h-4 text-emerald-200" />
                    <span className="text-[10px] font-mono opacity-80">1,400 Q</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-xs block">Admisión ENA</span>
                    <span className="text-[10px] opacity-75">Agronomía 2027</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('ESCALAFON');
                    setSelectedSubjectId('ALL');
                    setSelectedSubtopicId('ALL');
                    setSelectedSectionTitle('ALL');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedCategory === 'ESCALAFON'
                      ? 'bg-purple-800 text-white border-purple-800 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Award className="w-4 h-4 text-purple-200" />
                    <span className="text-[10px] font-mono opacity-80">3,300 Q</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-xs block">Escalafón Docente</span>
                    <span className="text-[10px] opacity-75">Nivel 1 (MINED 2026)</span>
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

                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('INGLES');
                    setSelectedLanguageFilter('ALL');
                    setSelectedSubjectId('ALL');
                    setSelectedSubtopicId('ALL');
                    setSelectedSectionTitle('ALL');
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    selectedCategory === 'INGLES'
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Globe className="w-4 h-4 text-emerald-200" />
                    <span className="text-[10px] font-mono opacity-80">16,800 Q</span>
                  </div>
                  <div className="pt-2">
                    <span className="font-bold text-xs block">Escuela de Idiomas</span>
                    <span className="text-[10px] opacity-75">7 Lenguas • 16,800 Q</span>
                  </div>
                </button>
              </div>

              {/* Sub-menú Interactivo de Selección de Idioma si la categoría es INGLES */}
              {selectedCategory === 'INGLES' && (
                <div className="mt-3.5 p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-2xl animate-fade-in space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <label className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-emerald-700" />
                      <span>Seleccionar Idioma Específico o Evaluar Todas las Lenguas:</span>
                    </label>
                    <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {selectedLanguageFilter === 'ALL' ? '7 Lenguas (16,800 Q)' : '2,400 Q (Niveles A1 a C2)'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                    {[
                      { id: 'ALL', name: 'Todos los Idiomas', flag: '🌐', count: '16,800 Q' },
                      { id: 'ingles', name: 'Inglés (US & UK)', flag: '🇬🇧', count: '2,400 Q' },
                      { id: 'nahuat', name: 'Náhuat Pipil', flag: '🇸🇻', count: '2,400 Q' },
                      { id: 'lenca', name: 'Lenca Potón', flag: '🇸🇻', count: '2,400 Q' },
                      { id: 'kakawira', name: 'Kakawira', flag: '🇸🇻', count: '2,400 Q' },
                      { id: 'german', name: 'Alemán (DACH)', flag: '🇩🇪', count: '2,400 Q' },
                      { id: 'arabic', name: 'Árabe (Fus\'ha)', flag: '🇸🇦', count: '2,400 Q' },
                      { id: 'mandarin', name: 'Mandarín', flag: '🇨🇳', count: '2,400 Q' },
                    ].map((lang) => {
                      const isSel = selectedLanguageFilter === lang.id;
                      return (
                        <button
                          key={lang.id}
                          type="button"
                          onClick={() => {
                            setSelectedLanguageFilter(lang.id as any);
                            setSelectedSubjectId('ALL');
                            setSelectedSubtopicId('ALL');
                            setSelectedSectionTitle('ALL');
                          }}
                          className={`p-2.5 rounded-xl text-left transition-all cursor-pointer border flex flex-col justify-between ${
                            isSel
                              ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                              : 'bg-white text-slate-700 border-emerald-200/60 hover:bg-emerald-100/60'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-sm">{lang.flag}</span>
                            <span className="text-[9px] font-mono opacity-80">{lang.count}</span>
                          </div>
                          <span className="font-bold text-[11px] mt-1.5 block truncate">{lang.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* ============================================================ */}
            {/* 2. SELECTOR DE MATERIA */}
            {/* ============================================================ */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  2. Materia Académica / Nivel MCER:
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
                  🌟 Todas las Materias (Evaluación Global • {selectedCategory === 'ALL' ? '34,440' : selectedCategory === 'UES' ? '7,500' : selectedCategory === 'AVANZO' ? '3,000' : selectedCategory === 'ASD' ? '2,190' : selectedCategory === 'ENA' ? '1,400' : selectedCategory === 'ESCALAFON' ? '3,300' : selectedCategory === 'INGLES' ? (selectedLanguageFilter === 'ALL' ? '16,800' : '2,400') : '250'} reactivos)
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
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2">
                {[5, 10, 20, 30, 50, 100, 200, 400].map((num) => (
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
                      {num === 5 ? 'Express' : num === 50 ? 'Real UES' : num === 200 ? 'Extenso' : num === 400 ? 'Completo ⭐' : 'reactivos'}
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

              {/* Modalidad de Evaluación: Opción Múltiple vs Verdadero o Falso */}
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    <span>Modalidad de Evaluación:</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                    {evaluationMode === 'true_false' ? '⚖️ V / F' : '🎯 A-D'}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                  <button
                    type="button"
                    onClick={() => setEvaluationMode('multiple_choice')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      evaluationMode === 'multiple_choice'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>🎯 Opción Múltiple</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setEvaluationMode('true_false')}
                    className={`py-2 px-3 rounded-xl border text-center transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      evaluationMode === 'true_false'
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>⚖️ Verdadero o Falso</span>
                  </button>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {evaluationMode === 'true_false'
                    ? 'Cada reactivo genera una afirmación determinística para evaluar si es VERDADERA o FALSA.'
                    : 'Modo estándar oficial con 4 a 6 opciones de respuesta (A, B, C, D).'}
                </p>
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
              className="w-full py-4 bg-[#0B1B3D] hover:bg-[#132A5C] text-[#FAF9F5] font-bold rounded-lg border border-[#1A2E5A] shadow-corporate-card transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer disabled:opacity-60 font-sans-ui"
            >
              {loadingPool ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#C59B27] border-t-transparent rounded-full animate-spin" />
                  <span className="font-mono-exam text-xs sm:text-sm">Extrayendo reactivos de la base de 34,440 preguntas...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-[#C59B27] text-[#C59B27]" />
                  <span className="tracking-wide">{t('simulator.startExam')} ({questionCount})</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Anuncio 1 / 5 Abajo del Simulador */}
        <AdBanner variant="light" positionLabel="Simulador • 1/5 Inferior" slotId="4241045160_s_b1" />

        {/* Tabla de Estadísticas y Top 10 KUSKAT */}
        <div className="space-y-4">
          <LeaderboardSection onOpenAccountModal={onOpenAccountModal} />
        </div>

        {/* Anuncio 2 / 5 Abajo del Simulador */}
        <AdBanner variant="light" positionLabel="Simulador • 2/5 Inferior" slotId="4241045160_s_b2" />

        {/* Panel Informativo: Reglas del Sistema de Evaluación KUSKAT */}
        <div className="bg-white border border-[#E5E3D8] rounded-xl p-5 sm:p-6 shadow-corporate-subtle space-y-3 font-sans-ui">
          <div className="flex items-center gap-2 font-bold text-[#111625] text-sm">
            <ShieldCheck className="w-4 h-4 text-[#0B1B3D]" />
            <span className="font-editorial font-bold">Reglamento y Metodología del Simulador Maestro KUSKAT</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
            <div className="p-3.5 bg-[#FAF9F5] rounded-lg border border-[#E5E3D8] space-y-1">
              <span className="font-mono-exam font-bold text-[#1E7E34] text-xs block">Acierto Oficial (+1.0 pt)</span>
              <p className="text-[#475569] leading-relaxed">
                Cada pregunta respondida correctamente suma +1 punto a tu historial y ranking oficial.
              </p>
            </div>
            <div className="p-3.5 bg-[#FAF9F5] rounded-lg border border-[#E5E3D8] space-y-1">
              <span className="font-mono-exam font-bold text-[#9E472A] text-xs block">Penalización por Error (-2.0 pts)</span>
              <p className="text-[#475569] leading-relaxed">
                Cada respuesta errónea descuenta -2 puntos. El límite mínimo acumulable es 0 puntos.
              </p>
            </div>
            <div className="p-3.5 bg-[#FAF9F5] rounded-lg border border-[#E5E3D8] space-y-1">
              <span className="font-mono-exam font-bold text-[#0B1B3D] text-xs block">Ciclos de Baremo Institucional</span>
              <p className="text-[#475569] leading-relaxed">
                Ranking Diario, Mensual, Trimestral, Semestral y Anual. El ciclo anual se reinicia el 31 de diciembre.
              </p>
            </div>
          </div>
        </div>

        {/* Anuncios 3, 4 y 5 Abajo del Simulador */}
        <div className="space-y-3">
          <AdBanner variant="light" positionLabel="Simulador • 3/5 Inferior" slotId="4241045160_s_b3" />
          <AdBanner variant="light" positionLabel="Simulador • 4/5 Inferior" slotId="4241045160_s_b4" />
          <AdBanner variant="light" positionLabel="Simulador • 5/5 Inferior" slotId="4241045160_s_b5" />
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
        {/* 1 Anuncio Arriba del Simulador */}
        <AdBanner
          variant="light"
          positionLabel="Simulador Examen • 1 Arriba"
          slotId="4241045160_se_top"
        />

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

            {/* Selector de Modo de Evaluación: Opción Múltiple vs Verdadero/Falso */}
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setEvaluationMode('multiple_choice')}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                  evaluationMode === 'multiple_choice'
                    ? 'bg-white text-blue-900 shadow-2xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Evaluar con selección múltiple (A-D)"
              >
                Opción Múltiple
              </button>
              <button
                type="button"
                onClick={() => setEvaluationMode('true_false')}
                className={`px-2.5 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  evaluationMode === 'true_false'
                    ? 'bg-white text-indigo-900 shadow-2xs font-extrabold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Evaluar proposición en modalidad Verdadero o Falso"
              >
                <Scale className="w-3 h-3 text-indigo-600" />
                <span>Verdadero / Falso</span>
              </button>
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
                {t('simulator.submitExam')}
              </button>
            </div>
          </div>

          {/* Barra de Progreso */}
          <div className="w-full bg-[#E5E3D8] rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-[#0B1B3D] h-full rounded-full transition-all duration-300"
              style={{ width: `${Math.round(((currentIndex + 1) / quizQuestions.length) * 100)}%` }}
            />
          </div>
        </div>

        {/* Tarjeta de la Pregunta Activa (Diseño de Cuadernillo Oficial de Admisión) */}
        {currentQ && (
          <div className="bg-white border border-[#E5E3D8] rounded-xl p-6 sm:p-8 shadow-corporate-card space-y-6 font-sans-ui">
            {/* Metadatos y Marcado */}
            <div className="flex items-center justify-between border-b border-[#EAE8DD] pb-3 text-xs gap-2">
              <div className="flex items-center gap-2 flex-wrap text-[#5C6578]">
                <span className="font-mono font-bold text-[#0B1B3D] bg-[#F4F3ED] px-2 py-0.5 rounded border border-[#E2E0D5]">
                  [{currentQ.institution}] {currentQ.subject}
                </span>
                <span className="hidden sm:inline text-[#718096]">• {currentQ.topic}</span>
                {currentQ.level && (
                  <span
                    className={`text-[9.5px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider border ${
                      currentQ.level === 'basico'
                        ? 'bg-[#EBF7EE] text-[#1A7338] border-[#CCEBD4]'
                        : currentQ.level === 'intermedio'
                        ? 'bg-[#EBF3FC] text-[#1A5699] border-[#CCE0F7]'
                        : 'bg-[#F5EDFC] text-[#692999] border-[#E4CEF7]'
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
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors cursor-pointer border ${
                  isMarked
                    ? 'bg-[#FEF7EC] text-[#946200] border-[#F8DCAB] font-bold'
                    : 'bg-[#FAF9F5] text-[#5C6578] border-[#E5E3D8] hover:bg-white hover:text-[#0B1B3D]'
                }`}
                title="Marcar pregunta para revisar luego"
              >
                <Bookmark className={`w-3.5 h-3.5 ${isMarked ? 'fill-[#C59B27] text-[#C59B27]' : ''}`} />
                <span>{isMarked ? t('simulator.marked') : t('simulator.markReview')}</span>
              </button>
            </div>

            {/* Enunciado con KaTeX */}
<<<<<<< Updated upstream
            <div className="text-slate-900 text-base sm:text-lg leading-relaxed">
              <MathText text={currentQ.statement} />
=======
            <div className="text-[#111625] text-base sm:text-lg leading-relaxed font-normal">
              <MathText text={translateQuestion(currentQ).statement} />
>>>>>>> Stashed changes
            </div>

            {/* Opciones de Evaluación (Opción Múltiple vs Verdadero o Falso) */}
            {evaluationMode === 'true_false' ? (
              (() => {
                const tf = convertToTrueFalse(currentQ);
                const userPick = userAnswers[currentIndex];
                const expected = tf.isTrue ? 'VERDADERO' : 'FALSO';

                return (
                  <div className="space-y-4 pt-1">
                    {/* Caja de Proposición destacada con KaTeX */}
                    <div className="p-4 sm:p-5 rounded-lg bg-[#FAF9F5] border border-[#E5E3D8] space-y-2.5">
                      <div className="flex items-center justify-between gap-2 flex-wrap text-xs">
                        <span className="font-bold text-[#0B1B3D] uppercase tracking-wider font-mono flex items-center gap-1.5">
                          <Scale className="w-4 h-4 text-[#0B1B3D]" />
                          Proposición para Evaluar:
                        </span>
                        <span className="text-[11px] font-medium text-[#5C6578] bg-white px-2.5 py-0.5 rounded border border-[#E2E0D5]">
                          Determina si el siguiente enunciado es Verdadero o Falso
                        </span>
                      </div>
                      <div className="text-[#111625] text-base sm:text-lg font-medium leading-relaxed bg-white p-4 rounded-md border border-[#E5E3D8] shadow-corporate-subtle">
                        <MathText text={tf.presentedOptionText} />
                      </div>
                    </div>

                    {/* Botones de Selección Verdadero / Falso */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {/* Botón VERDADERO */}
                      {(() => {
                        const isPicked = userPick === 'VERDADERO';
                        const isRight = expected === 'VERDADERO';
                        let btnClass = 'bg-white border-[#E5E3D8] text-[#111625] hover:border-[#0B1B3D] hover:bg-[#FAF9F5]';

                        if (tutorMode && isAnswered) {
                          if (isRight) {
                            btnClass = 'bg-[#EBF7EE] border-[#1A7338] text-[#0E4F24] font-bold';
                          } else if (isPicked) {
                            btnClass = 'bg-[#FCE8E6] border-[#C5221F] text-[#8C1515]';
                          } else {
                            btnClass = 'bg-[#FAF9F5] border-[#E5E3D8] text-[#8F99AD] opacity-60';
                          }
                        } else if (isPicked) {
                          btnClass = 'bg-[#F8F7F2] border-[#0B1B3D] text-[#0B1B3D] font-bold ring-1 ring-[#0B1B3D]';
                        }

                        return (
                          <button
                            type="button"
                            onClick={() => handleSelectOption('VERDADERO')}
                            className={`p-3.5 rounded-lg border text-left transition-all flex items-center gap-3 cursor-pointer min-h-[52px] shadow-corporate-subtle ${btnClass}`}
                          >
                            <span
                              className={`w-7 h-7 rounded font-mono font-bold flex items-center justify-center shrink-0 text-xs border ${
                                isPicked
                                  ? 'bg-[#0B1B3D] text-white border-[#0B1B3D]'
                                  : 'bg-[#FAF9F5] text-[#1A7338] border-[#CCEBD4]'
                              }`}
                            >
                              ✓
                            </span>
                            <div className="flex-1">
                              <span className="block text-sm font-bold">
                                VERDADERO
                              </span>
                              <span className="text-[11px] text-[#5C6578]">
                                La proposición es académicamente válida
                              </span>
                            </div>
                          </button>
                        );
                      })()}

                      {/* Botón FALSO */}
                      {(() => {
                        const isPicked = userPick === 'FALSO';
                        const isRight = expected === 'FALSO';
                        let btnClass = 'bg-white border-[#E5E3D8] text-[#111625] hover:border-[#0B1B3D] hover:bg-[#FAF9F5]';

                        if (tutorMode && isAnswered) {
                          if (isRight) {
                            btnClass = 'bg-[#EBF7EE] border-[#1A7338] text-[#0E4F24] font-bold';
                          } else if (isPicked) {
                            btnClass = 'bg-[#FCE8E6] border-[#C5221F] text-[#8C1515]';
                          } else {
                            btnClass = 'bg-[#FAF9F5] border-[#E5E3D8] text-[#8F99AD] opacity-60';
                          }
                        } else if (isPicked) {
                          btnClass = 'bg-[#F8F7F2] border-[#0B1B3D] text-[#0B1B3D] font-bold ring-1 ring-[#0B1B3D]';
                        }

                        return (
                          <button
                            type="button"
                            onClick={() => handleSelectOption('FALSO')}
                            className={`p-3.5 rounded-lg border text-left transition-all flex items-center gap-3 cursor-pointer min-h-[52px] shadow-corporate-subtle ${btnClass}`}
                          >
                            <span
                              className={`w-7 h-7 rounded font-mono font-bold flex items-center justify-center shrink-0 text-xs border ${
                                isPicked
                                  ? 'bg-[#0B1B3D] text-white border-[#0B1B3D]'
                                  : 'bg-[#FAF9F5] text-[#C5221F] border-[#FAD2CF]'
                              }`}
                            >
                              ✕
                            </span>
                            <div className="flex-1">
                              <span className="block text-sm font-bold">
                                FALSO
                              </span>
                              <span className="text-[11px] text-[#5C6578]">
                                La proposición es refutable o incorrecta
                              </span>
                            </div>
                          </button>
                        );
                      })()}
                    </div>
                  </div>
                );
              })()
            ) : (
              /* Opciones estándar A-D formato Examen de Estado */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {currentQ.options.map((opt) => {
                  const isSelected = userAnswers[currentIndex] === opt.key;
                  const isRight = currentQ.correctAnswer === opt.key;

                  let optClass = 'bg-white border-[#E5E3D8] text-[#111625] hover:border-[#0B1B3D]/70 hover:bg-[#FAF9F5]';

                  // Si está en Modo Tutor y ya respondió esta pregunta
                  if (tutorMode && isAnswered) {
                    if (isRight) {
                      optClass = 'bg-[#EBF7EE] border-[#1A7338] text-[#0E4F24] font-semibold';
                    } else if (isSelected) {
                      optClass = 'bg-[#FCE8E6] border-[#C5221F] text-[#8C1515]';
                    } else {
                      optClass = 'bg-[#FAF9F5] border-[#E5E3D8] text-[#8F99AD] opacity-60';
                    }
                  } else if (isSelected) {
                    optClass = 'bg-[#F8F7F2] border-[#0B1B3D] text-[#0B1B3D] font-medium ring-1 ring-[#0B1B3D]';
                  }

                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelectOption(opt.key)}
                      className={`p-3.5 rounded-lg border text-sm text-left transition-all flex items-start gap-3 cursor-pointer min-h-[48px] shadow-corporate-subtle ${optClass}`}
                    >
                      <span
                        className={`w-7 h-7 rounded font-mono text-xs font-bold flex items-center justify-center shrink-0 border ${
                          tutorMode && isAnswered && isRight
                            ? 'bg-[#1A7338] text-white border-[#1A7338]'
                            : isSelected
                            ? 'bg-[#0B1B3D] text-white border-[#0B1B3D]'
                            : 'bg-[#FAF9F5] border-[#D5D3C8] text-[#0B1B3D]'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <div className="flex-1 break-words pt-0.5 leading-relaxed text-[13.5px]">
                        <MathText text={opt.text} />
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Retroalimentación inmediata en Modo Tutor */}
            {tutorMode && isAnswered && (
              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-100 text-xs sm:text-sm text-slate-700 space-y-1.5 animate-fade-in">
                {evaluationMode === 'true_false' ? (
                  (() => {
                    const tf = convertToTrueFalse(currentQ);
                    const expected = tf.isTrue ? 'VERDADERO' : 'FALSO';
                    const isSuccess = userAnswers[currentIndex] === expected;
                    return (
                      <>
                        <div className="flex items-center gap-2 font-bold text-blue-950 flex-wrap">
                          <span>Evaluación Oficial:</span>
                          <span
                            className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold text-white ${
                              tf.isTrue ? 'bg-emerald-600' : 'bg-rose-600'
                            }`}
                          >
                            {expected}
                          </span>
                          {isSuccess ? (
                            <span className="text-emerald-600 font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-4 h-4" /> ¡Excelente acierto!
                            </span>
                          ) : (
                            <span className="text-rose-600 font-bold">Respuesta incorrecta</span>
                          )}
                        </div>
                        <div className="leading-relaxed">
                          <strong className="text-slate-900">Justificación Pedagógica: </strong>
                          <MathText text={tf.explanation} />
                        </div>
                      </>
                    );
                  })()
                ) : (
                  <>
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
                  </>
                )}
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
                <span>{t('simulator.prevQuestion')}</span>
              </button>

              <div className="text-xs text-slate-400 font-medium">
                {answeredCount} de {quizQuestions.length} respondidas
              </div>

              {currentIndex < quizQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentIndex((i) => Math.min(quizQuestions.length - 1, i + 1))}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs cursor-pointer"
                >
                  <span>{t('simulator.nextQuestion')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleFinishQuiz}
                  className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs cursor-pointer"
                >
                  <span>{t('simulator.submitExam')}</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Matriz de Salto Rápido a Preguntas */}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Navegador de Reactivos:
              </span>
              <div className="max-h-36 sm:max-h-44 overflow-y-auto touch-scroll p-2 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex items-center gap-1.5 flex-wrap">
                {quizQuestions.map((_, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnsweredItem = userAnswers[idx] !== undefined;
                  const isMarkedItem = markedQuestions[idx];

                  let pillClass = 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200';
                  if (isCurrent) {
                    pillClass = 'bg-blue-600 text-white ring-2 ring-blue-300 font-bold border-blue-600';
                  } else if (isAnsweredItem) {
                    pillClass = 'bg-slate-800 text-white font-semibold border-slate-800';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-7 h-7 rounded-lg text-xs font-mono transition-all cursor-pointer relative shadow-2xs ${pillClass}`}
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

        {/* 5 Anuncios Abajo del Simulador */}
        <div className="space-y-3 pt-2">
          <AdBanner
            variant="light"
            positionLabel="Simulador Examen • 1/5 Inferior"
            slotId="4241045160_se_b1"
          />
          <AdBanner
            variant="light"
            positionLabel="Simulador Examen • 2/5 Inferior"
            slotId="4241045160_se_b2"
          />
          <AdBanner
            variant="light"
            positionLabel="Simulador Examen • 3/5 Inferior"
            slotId="4241045160_se_b3"
          />
          <AdBanner
            variant="light"
            positionLabel="Simulador Examen • 4/5 Inferior"
            slotId="4241045160_se_b4"
          />
          <AdBanner
            variant="light"
            positionLabel="Simulador Examen • 5/5 Inferior"
            slotId="4241045160_se_b5"
          />
        </div>
      </div>
    );
  }

  // ==========================================================================
  // PANTALLA 3: RESULTADOS DEL EXAMEN Y SOLUCIONARIO PEDAGÓGICO
  // ==========================================================================
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
      {/* 1 Anuncio Arriba de Resultados */}
      <AdBanner
        variant="light"
        positionLabel="Simulador Resultados • 1 Arriba"
        slotId="4241045160_sr_top"
      />

      {/* Boleta Oficial de Rendimiento Académico KUSKAT */}
      <div className="bg-white border border-[#E5E3D8] rounded-xl p-6 sm:p-9 shadow-corporate-card space-y-6 text-center font-sans-ui">
        {/* Encabezado Oficial con Folio Institucional */}
        <div className="flex items-center justify-between border-b border-[#EAE8DD] pb-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-[#0B1B3D] text-[#C59B27] flex items-center justify-center font-editorial font-bold text-xl border border-[#1A2E5A] shadow-corporate-subtle shrink-0">
              K
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-[#5C6578] font-mono block">
                República de El Salvador · Sistema KUSKAT
              </span>
              <h2 className="text-base sm:text-lg font-bold text-[#0B1B3D] tracking-tight font-editorial">
                Boleta Oficial de Rendimiento Académico
              </h2>
            </div>
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-[10px] font-mono text-[#5C6578] uppercase block">Folio de Prueba</span>
            <span className="text-xs font-mono font-bold text-[#0B1B3D]">
              KSK-{Math.abs(quizQuestions.length * 1024 + Math.round(percentage)).toString(16).toUpperCase()}
            </span>
          </div>
        </div>

        <div className="space-y-1.5 pt-1">
          <div className="inline-flex items-center gap-2">
            {percentage >= 70 ? (
              <span className="text-[#137333] bg-[#E6F4EA] border border-[#CEEAD6] px-3 py-0.5 rounded text-xs font-mono font-bold uppercase tracking-wider">
                Condición: Aprobado Satisfactorio
              </span>
            ) : (
              <span className="text-[#C5221F] bg-[#FCE8E6] border border-[#FAD2CF] px-3 py-0.5 rounded text-xs font-mono font-bold uppercase tracking-wider">
                Condición: Requiere Nivelación
              </span>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0B1B3D] tracking-tight pt-1 font-editorial">
            {quizTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#5C6578] max-w-xl mx-auto">
            {percentage >= 70
              ? 'El sustentante ha demostrado dominio solvente en las competencias de esta prueba estandarizada.'
              : 'Se sugiere revisar el solucionario justificado y reforzar los ejes temáticos en el Menú de Categorías.'}
          </p>
        </div>

        {/* Panel de Métricas Tabulares */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-left">
          <div className="bg-[#FAF9F5] p-3.5 rounded-lg border border-[#E5E3D8]">
            <span className="text-[10px] text-[#5C6578] font-bold uppercase tracking-wider block font-mono">Calificación (0–10)</span>
            <span
              className={`text-2xl font-black font-mono ${
                percentage >= 70 ? 'text-[#0B1B3D]' : 'text-[#C5221F]'
              }`}
            >
              {finalGrade}
            </span>
          </div>

          <div className="bg-[#FAF9F5] p-3.5 rounded-lg border border-[#E5E3D8]">
            <span className="text-[10px] text-[#5C6578] font-bold uppercase tracking-wider block font-mono">Dominio (%)</span>
            <span className="text-2xl font-black text-[#0B1B3D] font-mono">{percentage}%</span>
          </div>

          <div className="bg-[#FAF9F5] p-3.5 rounded-lg border border-[#E5E3D8]">
            <span className="text-[10px] text-[#5C6578] font-bold uppercase tracking-wider block font-mono">{t('simulator.correct')}</span>
            <span className="text-2xl font-black text-[#137333] font-mono">
              {correctCount} / {quizQuestions.length}
            </span>
          </div>

          <div className="bg-[#FAF9F5] p-3.5 rounded-lg border border-[#E5E3D8]">
            <span className="text-[10px] text-[#5C6578] font-bold uppercase tracking-wider block font-mono">{t('simulator.incorrect')}</span>
            <span className="text-2xl font-black text-[#C5221F] font-mono">
              {incorrectCount + unansweredCount}
            </span>
          </div>
        </div>

        {/* Desglose por Materia */}
        {subjectBreakdown.length > 1 && (
          <div className="text-left space-y-2 pt-2 border-t border-[#EAE8DD]">
            <span className="text-xs font-bold text-[#0B1B3D] uppercase tracking-wider block font-mono">
              Desglose Oficial por Asignatura:
            </span>
            <div className="space-y-1.5">
              {subjectBreakdown.map((sb) => (
                <div key={sb.name} className="flex items-center justify-between text-xs bg-[#FAF9F5] p-2.5 rounded-lg border border-[#E5E3D8]">
                  <span className="font-semibold text-[#111625]">{sb.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[#5C6578] font-mono">
                      {sb.correct} / {sb.total}
                    </span>
                    <span
                      className={`font-mono font-bold px-2 py-0.5 rounded text-[11px] border ${
                        sb.pct >= 70
                          ? 'bg-[#E6F4EA] text-[#137333] border-[#CEEAD6]'
                          : 'bg-[#FCE8E6] text-[#C5221F] border-[#FAD2CF]'
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
        <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-center items-center gap-2.5 sm:gap-3 pt-2">
          {incorrectCount + unansweredCount > 0 && (
            <button
              onClick={() => setIsErrorNotebookOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FAF9F5] hover:bg-[#F2F1EA] text-[#0B1B3D] font-bold text-xs rounded-lg border border-[#C59B27] shadow-corporate-subtle transition-colors cursor-pointer min-h-[42px]"
              title="Abrir el Cuaderno Inteligente de Errores y practicar la remediación"
            >
              <Brain className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Abrir Cuaderno de Errores ({incorrectCount + unansweredCount})</span>
            </button>
          )}

          <button
            onClick={handleRetrySameQuiz}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-[#FAF9F5] text-[#0B1B3D] font-bold text-xs rounded-lg border border-[#E5E3D8] shadow-corporate-subtle transition-colors cursor-pointer min-h-[42px]"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#5C6578]" />
            <span>{t('simulator.retryExam')}</span>
          </button>

          <button
            onClick={handleNewTestConfig}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0B1B3D] hover:bg-[#132A5C] text-white font-bold text-xs rounded-lg shadow-corporate-subtle transition-colors cursor-pointer min-h-[42px]"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>{t('simulator.newConfiguration')}</span>
          </button>

          <button
            onClick={handlePrintPdfReport}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#137333] hover:bg-[#0E5C28] text-white font-bold text-xs rounded-lg shadow-corporate-subtle transition-colors cursor-pointer min-h-[42px]"
            title="Imprimir o Guardar en PDF la boleta oficial y solucionario"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir / Exportar a PDF</span>
          </button>

          {onExportLatex && (
            <button
              onClick={() => onExportLatex(quizQuestions, `Solucionario: ${quizTitle}`)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors cursor-pointer min-h-[44px]"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Exportar Solucionario LaTeX</span>
            </button>
          )}

          {onBackToCategories && (
            <button
              onClick={() => {
                handleNewTestConfig();
                onBackToCategories();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer min-h-[44px]"
              title="Salir del resultado y volver al menú limpiando datos en memoria"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Salir al Menú</span>
            </button>
          )}
        </div>

        {/* Garantía de Privacidad y Cero Almacenamiento en Nube */}
        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-100">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Generación 100% local en tu dispositivo • Cero archivos temporales ni guardado en la nube</span>
        </div>
      </div>

      {/* Solucionario Comentado Detallado */}
      <div className="space-y-4">
        <h4 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider flex items-center gap-2">
          <Info className="w-4 h-4 text-blue-600" />
          <span>Solucionario y Revisión Reactivo por Reactivo ({quizQuestions.length})</span>
        </h4>

        {quizQuestions.map((q, idx) => {
          const tf = convertToTrueFalse(q);
          const expectedAns =
            evaluationMode === 'true_false'
              ? tf.isTrue
                ? 'VERDADERO'
                : 'FALSO'
              : q.correctAnswer;
          const userAns = userAnswers[idx];
          const isRight = userAns === expectedAns;
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

              {/* Opciones o Proposición V/F */}
              {evaluationMode === 'true_false' ? (
                <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200 space-y-2 text-xs">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-indigo-600" />
                      Proposición Evaluada:
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">Tu respuesta:</span>
                      <span
                        className={`font-mono font-bold px-2 py-0.5 rounded text-[11px] ${
                          userAns === 'VERDADERO'
                            ? 'bg-emerald-100 text-emerald-800'
                            : userAns === 'FALSO'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {userAns || 'Sin responder'}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500">Correcto:</span>
                      <span
                        className={`font-mono font-bold px-2 py-0.5 rounded text-[11px] ${
                          expectedAns === 'VERDADERO'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-600 text-white'
                        }`}
                      >
                        {expectedAns}
                      </span>
                    </div>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-slate-900 font-medium">
                    <MathText text={tf.presentedOptionText} />
                  </div>
                </div>
              ) : (
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
              )}

              {/* Justificación Pedagógica */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                <span className="font-bold text-slate-900 block">Explicación Oficial:</span>
                <div className="leading-relaxed">
                  <MathText text={evaluationMode === 'true_false' ? tf.explanation : q.explanation} />
                </div>
              </div>

              {/* Remediación Inmediata de Errores */}
              {!isRight && (
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => handleToggleRemediation(q, idx)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0B1B3D] bg-[#F4F3ED] hover:bg-[#EAE8DD] border border-[#E5E3D8] shadow-corporate-subtle transition-all cursor-pointer font-mono-exam"
                  >
                    <Target className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>
                      {activeRemediationIdx === idx
                        ? 'Ocultar reactivo similar'
                        : 'Practicar reactivo similar'}
                    </span>
                  </button>

                  {activeRemediationIdx === idx && remediationQuestion && (
                    <div className="mt-3 p-4 bg-[#FAF9F5] rounded-xl border border-[#C59B27] space-y-3 animate-fade-in text-left shadow-corporate-subtle font-sans-ui">
                      <div className="flex items-center justify-between text-xs flex-wrap gap-2">
                        <div className="flex items-center gap-1.5 font-bold text-[#0B1B3D]">
                          <Target className="w-4 h-4 text-[#9E472A]" />
                          <span className="font-editorial text-sm font-bold">Reactivo de Nivelación & Refuerzo Académico</span>
                        </div>
                        <span className="text-[10px] font-mono-exam bg-white px-2 py-0.5 rounded border border-[#E5E3D8] text-[#475569]">
                          {remediationQuestion.id} • {remediationQuestion.level || 'nivel equivalente'}
                        </span>
                      </div>

                      <div className="text-slate-900 text-sm font-medium leading-relaxed">
                        <MathText text={remediationQuestion.statement} />
                      </div>

                      {/* Modalidad de Selección para Remediación */}
                      {evaluationMode === 'true_false' ? (
                        (() => {
                          const rTf = convertToTrueFalse(remediationQuestion);
                          const rExpected = rTf.isTrue ? 'VERDADERO' : 'FALSO';

                          return (
                            <div className="space-y-3">
                              <div className="p-3 bg-white rounded-xl border border-amber-200 text-xs space-y-1">
                                <span className="font-bold text-amber-900 block">Proposición a Evaluar:</span>
                                <div className="text-slate-900 font-medium">
                                  <MathText text={rTf.presentedOptionText} />
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {(['VERDADERO', 'FALSO'] as const).map((rChoice) => {
                                  const isPicked = remediationUserAns === rChoice;
                                  const isCorrectChoice = rExpected === rChoice;
                                  let rClass =
                                    'bg-white border-amber-200 text-slate-800 hover:bg-amber-100/50';

                                  if (remediationSolved) {
                                    if (isCorrectChoice) {
                                      rClass =
                                        'bg-emerald-100 border-emerald-500 text-emerald-950 font-bold';
                                    } else if (isPicked) {
                                      rClass = 'bg-rose-100 border-rose-400 text-rose-950';
                                    } else {
                                      rClass =
                                        'bg-white/60 border-slate-200 text-slate-400 opacity-60';
                                    }
                                  }

                                  return (
                                    <button
                                      key={rChoice}
                                      type="button"
                                      onClick={() => handlePickRemediationOption(rChoice)}
                                      className={`p-3 rounded-xl border text-center font-bold text-xs cursor-pointer transition-all ${rClass}`}
                                    >
                                      {rChoice}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })()
                      ) : (
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
                      )}

                      {remediationSolved && (
                        <div className="p-3 bg-white rounded-xl border border-amber-200 text-xs space-y-1 animate-fade-in">
                          <div className="font-bold flex items-center gap-1.5">
                            {(() => {
                              const rExpected =
                                evaluationMode === 'true_false'
                                  ? convertToTrueFalse(remediationQuestion).isTrue
                                    ? 'VERDADERO'
                                    : 'FALSO'
                                  : remediationQuestion.correctAnswer;
                              return remediationUserAns === rExpected ? (
                                <span className="text-emerald-700 flex items-center gap-1 font-bold">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  ¡Excelente! Has superado el reactivo de refuerzo.
                                </span>
                              ) : (
                                <span className="text-rose-700 flex items-center gap-1 font-bold">
                                  <XCircle className="w-4 h-4 text-rose-600" />
                                  Respuesta incorrecta. Revisa la justificación:
                                </span>
                              );
                            })()}
                          </div>
                          <div className="text-slate-600 leading-relaxed">
                            <strong className="text-slate-800">Justificación: </strong>
                            <MathText
                              text={
                                evaluationMode === 'true_false'
                                  ? convertToTrueFalse(remediationQuestion).explanation
                                  : remediationQuestion.explanation
                              }
                            />
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

      {/* Tabla de Estadísticas y Top 10 KUSKAT */}
      <LeaderboardSection onOpenAccountModal={onOpenAccountModal} />

      {/* 5 Anuncios Abajo de Resultados */}
      <div className="space-y-3 pt-2">
        <AdBanner
          variant="light"
          positionLabel="Simulador Resultados • 1/5 Inferior"
          slotId="4241045160_sr_b1"
        />
        <AdBanner
          variant="light"
          positionLabel="Simulador Resultados • 2/5 Inferior"
          slotId="4241045160_sr_b2"
        />
        <AdBanner
          variant="light"
          positionLabel="Simulador Resultados • 3/5 Inferior"
          slotId="4241045160_sr_b3"
        />
        <AdBanner
          variant="light"
          positionLabel="Simulador Resultados • 4/5 Inferior"
          slotId="4241045160_sr_b4"
        />
        <AdBanner
          variant="light"
          positionLabel="Simulador Resultados • 5/5 Inferior"
          slotId="4241045160_sr_b5"
        />
      </div>

      {/* Modal del Cuaderno Inteligente de Errores */}
      <SmartErrorNotebookModal
        isOpen={isErrorNotebookOpen}
        onClose={() => setIsErrorNotebookOpen(false)}
      />
    </div>
  );
};

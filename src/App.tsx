import React, { useState, useMemo, useEffect } from 'react';
import katex from 'katex';
import {
  BookOpen,
  Award,
  FileCode,
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Clock,
  Download,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  GraduationCap,
  Shield,
  MessageCircle,
  Instagram,
  UserCheck,
  School,
  X,
  Play,
  ArrowLeft,
  ArrowRight,
  Info,
  Rocket,
  Layers,
  FolderTree,
  HelpCircle,
  Scale,
  Languages,
  Globe,
} from 'lucide-react';
import {
  Institution,
  Question,
  QUESTIONS_DATA,
  SUBJECTS_BY_INSTITUTION,
  generateLatexDocument,
} from './data';
import { AccountModal } from './components/AccountModal';
import { LegalModal, LegalTab } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';
import { AdBanner } from './components/AdBanner';
import { getCurrentUser } from './services/authService';
import { User } from './types/auth';

// Componentes con carga diferida (lazy loading) para acelerar el inicio
const CategoryHierarchyViewer = React.lazy(() =>
  import('./components/CategoryHierarchyViewer').then((m) => ({ default: m.CategoryHierarchyViewer }))
);
const PracticeMode = React.lazy(() =>
  import('./components/PracticeMode').then((m) => ({ default: m.PracticeMode }))
);
const OnboardingTutorial = React.lazy(() =>
  import('./components/OnboardingTutorial').then((m) => ({ default: m.OnboardingTutorial }))
);
const MotionSitesPortal = React.lazy(() =>
  import('./components/motionsites/MotionSitesPortal').then((m) => ({ default: m.MotionSitesPortal }))
);
const LanguagesView = React.lazy(() => import('./components/LanguagesView'));

// ============================================================================
// COMPONENTE PARA RENDERIZAR MATEMÁTICAS CON KATEX ($...$ y $$...$$)
// ============================================================================
interface KaTeXMathProps {
  text: string;
  className?: string;
}

export const KaTeXMath: React.FC<KaTeXMathProps> = ({ text, className = '' }) => {
  const renderedHtml = useMemo(() => {
    if (!text) return '';

    // Normaliza símbolos de grados y potencias al lenguaje humano natural
    let processed = text
      .replace(/(\d+)\s*\^\\?\{?circ\}?/g, '$1°')
      .replace(/\\circ\b/g, '°')
      .replace(/\\u0007pprox/g, '\\approx')
      .replace(/\\u000bec/g, '\\vec')
      .replace(/\bcm\^2\b/g, 'cm²')
      .replace(/\bm\^2\b/g, 'm²')
      .replace(/\bkm\^2\b/g, 'km²');

    // Auto-detecta si el texto completo es una fórmula matemática sin delimitadores
    const hasDelimiters = processed.includes('$') || processed.includes('\\(') || processed.includes('\\[');
    if (!hasDelimiters && /^\s*[-+]?\\(?:frac|sqrt|pi|emptyset|mathbb|theta|infty|pm|times|approx|alpha|beta|lambda|Delta|leq|geq|neq)/.test(processed)) {
      try {
        return katex.renderToString(processed.trim(), {
          displayMode: false,
          throwOnError: false,
          output: 'htmlAndMathml',
        });
      } catch {
        // En caso de error, continúa con el parseo por fragmentos
      }
    }

    // Regex para fragmentos matemáticos: $$...$$, $...$, \[...\], \(...\)
    const regex = /(\$\$[\s\S]*?\$\$)|(\$[^\$\n]+?\$)|(\\\[[\s\S]*?\\\])|(\\\([\s\S]*?\\\\?\))/g;
    const parts: string[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(processed)) !== null) {
      if (match.index > lastIndex) {
        parts.push(escapeHtml(processed.slice(lastIndex, match.index)));
      }

      const rawMatch = match[0];
      let mathCode = '';
      let isBlock = false;

      if (rawMatch.startsWith('$$') && rawMatch.endsWith('$$')) {
        mathCode = rawMatch.slice(2, -2).trim();
        isBlock = true;
      } else if (rawMatch.startsWith('$') && rawMatch.endsWith('$')) {
        mathCode = rawMatch.slice(1, -1).trim();
        isBlock = false;
      } else if (rawMatch.startsWith('\\[') && rawMatch.endsWith('\\]')) {
        mathCode = rawMatch.slice(2, -2).trim();
        isBlock = true;
      } else if (rawMatch.startsWith('\\(')) {
        mathCode = rawMatch.slice(2).replace(/\\*\)$/, '').trim();
        isBlock = false;
      }

      try {
        const html = katex.renderToString(mathCode, {
          displayMode: isBlock,
          throwOnError: false,
          output: 'htmlAndMathml',
        });
        parts.push(html);
      } catch {
        parts.push(escapeHtml(rawMatch));
      }

      lastIndex = match.index + rawMatch.length;
    }

    if (lastIndex < processed.length) {
      parts.push(escapeHtml(processed.slice(lastIndex)));
    }

    return parts.join('');
  }, [text]);

  return (
    <span
      className={`inline-block max-w-full overflow-x-auto align-middle scrollbar-none touch-scroll ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ============================================================================
export default function App() {
  const [activeTab, setActiveTab] = useState<'motionsites3d' | 'categories' | 'practice' | 'latex' | 'languages'>(() => {
    try {
      if (typeof window !== 'undefined' && window.location.search) {
        const param = new URLSearchParams(window.location.search).get('tab');
        if (param === 'categories' || param === 'practice' || param === 'latex' || param === 'languages' || param === 'motionsites3d') {
          return param;
        }
      }
    } catch {
      // fallback
    }
    return 'motionsites3d';
  });
  const [isDevModalOpen, setIsDevModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Estados de Cuentas Nativas, Exámenes y Marco Legal
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAccountModalOpen, setIsAccountModalOpen] = useState<boolean>(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState<boolean>(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTab>('terms');

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, []);

  // Desactiva la restauración automática del scroll para garantizar inicio arriba
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Cada vez que se dirija a otra página o pestaña, siempre aparece en la parte de arriba
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
    const timerId = setTimeout(scrollToTop, 50);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
    };
  }, [activeTab]);

  const handleOpenLegalModal = (tab: LegalTab = 'terms') => {
    setLegalModalTab(tab);
    setIsLegalModalOpen(true);
  };

  // Estado del Tutorial de Bienvenida Opcional
  const [isTutorialOpen, setIsTutorialOpen] = useState<boolean>(() => {
    try {
      const neverShow = localStorage.getItem('kuskat_tutorial_never_show') === 'true';
      const sessionDismissed = sessionStorage.getItem('kuskat_tutorial_dismissed_session') === 'true';
      return !neverShow && !sessionDismissed;
    } catch {
      return false;
    }
  });

  const handleCloseTutorial = (dontShowAgain: boolean) => {
    try {
      if (dontShowAgain) {
        localStorage.setItem('kuskat_tutorial_never_show', 'true');
      }
      sessionStorage.setItem('kuskat_tutorial_dismissed_session', 'true');
    } catch (e) {
      console.warn('Storage unavailable:', e);
    }
    setIsTutorialOpen(false);
  };

  // Preguntas seleccionadas para enviar al simulador (desde Categorías)
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);

  // Estado para el exportador LaTeX
  const [latexScope, setLatexScope] = useState<'ALL' | 'UES' | 'ESCALAFON' | 'AVANZO' | 'ASD' | 'ENA' | 'ANSP' | 'INGLES' | 'custom'>('ALL');
  const [latexCustomQuestions, setLatexCustomQuestions] = useState<Question[] | null>(null);
  const [latexCustomTitle, setLatexCustomTitle] = useState<string | null>(null);
  const [copiedLatex, setCopiedLatex] = useState<boolean>(false);

  // Muestra notificaciones flotantes (toast)
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Generación de código LaTeX en tiempo real
  const currentLatexCode = useMemo(() => {
    let targetQuestions = QUESTIONS_DATA;
    let docTitle = 'Compilación Completa Kuskat (UES, ESCALAFÓN, AVANZO, ASD, ENA, ANSP & IDIOMAS)';

    if (latexScope === 'custom' && latexCustomQuestions && latexCustomQuestions.length > 0) {
      targetQuestions = latexCustomQuestions;
      docTitle = latexCustomTitle || 'Compilación Personalizada de Categoría';
    } else if (latexScope === 'UES') {
      targetQuestions = QUESTIONS_DATA.filter((q) => q.institution === 'UES');
      docTitle = 'Admisión Universitaria UES';
    } else if (latexScope === 'ESCALAFON') {
      targetQuestions = QUESTIONS_DATA.filter((q) => q.institution === 'ESCALAFON');
      docTitle = 'Ascenso al Nivel Uno del Escalafón Docente 2026';
    } else if (latexScope === 'AVANZO') {
      targetQuestions = QUESTIONS_DATA.filter((q) => q.institution === 'AVANZO');
      docTitle = 'Prueba Nacional AVANZO 2025';
    } else if (latexScope === 'ASD') {
      targetQuestions = QUESTIONS_DATA.filter((q) => q.institution === 'ASD');
      docTitle = 'Academia Sabatina Departamental (ASD)';
    } else if (latexScope === 'ENA') {
      targetQuestions = QUESTIONS_DATA.filter((q) => q.institution === 'ENA');
      docTitle = 'Escuela Nacional de Agricultura "Roberto Quiñónez" (ENA)';
    } else if (latexScope === 'ANSP') {
      targetQuestions = QUESTIONS_DATA.filter((q) => q.institution === 'ANSP');
      docTitle = 'Academia Nacional de Seguridad Pública (ANSP)';
    } else if (latexScope === 'INGLES') {
      targetQuestions = QUESTIONS_DATA.filter((q) => q.institution === 'INGLES');
      docTitle = 'Compendio de Idiomas • Inglés Internacional (A1-C2)';
    }

    return generateLatexDocument(targetQuestions, docTitle);
  }, [latexScope, latexCustomQuestions, latexCustomTitle]);

  // Copia el documento LaTeX al portapapeles
  const handleCopyLatex = () => {
    navigator.clipboard.writeText(currentLatexCode);
    setCopiedLatex(true);
    showToast('¡Código LaTeX copiado al portapapeles!');
    setTimeout(() => setCopiedLatex(false), 2500);
  };

  // Descarga el archivo .tex en el navegador
  const handleDownloadLatex = () => {
    const blob = new Blob([currentLatexCode], { type: 'text/x-tex;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `banco_preguntas_kuskat_${latexScope.toLowerCase()}.tex`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('Descargando archivo .tex...');
  };

  // Renderizado del Portal 3D Estilo MotionSites (Dark Mode)
  if (activeTab === 'motionsites3d') {
    return (
      <React.Suspense
        fallback={
          <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 font-caslon">
            <div className="w-14 h-14 rounded-2xl bg-white p-2 shadow-md border border-slate-200 flex items-center justify-center mb-3 animate-pulse">
              <img src="/kuskat_logo.png" alt="Logo KUSKAT" className="w-full h-full object-contain" />
            </div>
            <p className="text-sm font-semibold text-slate-700 tracking-editorial">Iniciando KUSKAT...</p>
          </div>
        }
      >
        <MotionSitesPortal
          onEnterSimulator={() => {
            setQuizQuestions([]);
            setActiveTab('practice');
          }}
          onOpenCategories={() => {
            setActiveTab('categories');
          }}
        />
      </React.Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-caslon text-slate-800">
      {/* ==================================================================== */}
      {/* 1. CINTILLO SUPERIOR DE INFORMACIÓN Y CONTACTO */}
      {/* ==================================================================== */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white text-[10px] sm:text-xs py-2 px-3 sm:px-6 lg:px-8 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center sm:justify-start">
            <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30 text-[9px] sm:text-[10px] uppercase tracking-wider animate-pulse shrink-0">
              En Desarrollo
            </span>
            <span className="font-medium text-slate-200">
              Trabajando en material de medicina. Los anuncios que contiene la pagina es un pequeño aporte economico a mis estudios universitarios.
            </span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 text-slate-300 font-medium text-[10px] sm:text-xs shrink-0">
            <a
              href="https://wa.me/50376574463?text=Hola%20KUSKAT,%20estoy%20estudiando%20desde%20tu%20app%20de%20estudio%20:)"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
              title="WhatsApp KUSKAT: +503 7657 4463"
            >
              <span className="text-emerald-400 font-bold">WhatsApp KUSKAT:</span>
              <span className="font-mono">+503 7657 4463</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <a
              href="https://instagram.com/Kuskat.es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 flex items-center gap-1 transition-colors"
              title="Instagram: @Kuskat.es"
            >
              <span className="text-pink-400 font-bold">Instagram:</span>
              <span>@Kuskat.es</span>
            </a>
            <span className="text-slate-600 hidden md:inline">•</span>
            <button
              onClick={() => handleOpenLegalModal('terms')}
              className="hidden md:flex hover:text-blue-300 items-center gap-1 transition-colors cursor-pointer text-slate-300"
              title="Marco legal, privacidad y normativas salvadoreñas"
            >
              <Scale className="w-3.5 h-3.5 text-blue-400" />
              <span>Legal y Privacidad</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. ENCABEZADO PRINCIPAL (HEADER) */}
      {/* ==================================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Logo y Nombre del Proyecto */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1 shrink-0 overflow-hidden">
              <img
                src="/kuskat_logo.png"
                alt="Logo KUSKAT"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-montenegrin">
                  KUSKAT
                </h1>
                <span className="text-[10px] sm:text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                  Banco Maestro
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                Preparación para la aprobacion de examenes de Centro America
              </p>
            </div>
          </div>

          {/* Navegación y Perfil del Desarrollador */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {/* Botón de Ficha del Desarrollador */}
            <button
              onClick={() => setIsDevModalOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all cursor-pointer shadow-2xs group"
              title="Ver biografía y datos de contacto de Yeferson E. Perez"
            >
              <div className="w-5 h-5 rounded-full overflow-hidden border border-amber-400 shrink-0">
                <img
                  src="/yeferson_perez.jpg"
                  alt="Yeferson E. Perez"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  onError={(e) => {
                    // Fallback si la imagen aún no está en public
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="hidden sm:inline">Creador:</span>
              <span className="font-bold text-slate-900">Yeferson E. Perez</span>
            </button>

            {/* Botón de Tutorial / Guía Inicial */}
            <button
              onClick={() => setIsTutorialOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-blue-200 bg-blue-50/80 hover:bg-blue-100 text-blue-900 text-xs font-bold transition-all cursor-pointer shadow-2xs"
              title="Abrir tutorial y guía interactiva de KUSKAT"
            >
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden sm:inline">Guía</span>
              <span>Tutorial</span>
            </button>

            {/* Vistas Principales (Tabs) */}
            <nav className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600 flex-wrap">
              <button
                onClick={() => setActiveTab('motionsites3d')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  (activeTab as string) === 'motionsites3d'
                    ? 'bg-slate-900 text-[#F8DCCB] shadow-xs font-bold'
                    : 'text-indigo-900 bg-indigo-50/80 hover:bg-indigo-100 font-bold border border-indigo-200/60'
                }`}
                title="Entrar al sitio web 3D interactivo estilo MotionSites con mapa de El Salvador"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                <span>Portal 3D</span>
              </button>
              <button
                onClick={() => setActiveTab('categories')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'categories'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
              >
                <FolderTree className="w-3.5 h-3.5 text-blue-600" />
                <span>Categorías</span>
              </button>
              <button
                onClick={() => {
                  setQuizQuestions([]);
                  setActiveTab('practice');
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'practice'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>Simulador</span>
              </button>
              <button
                onClick={() => setActiveTab('latex')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'latex'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>LaTeX</span>
              </button>
              <button
                onClick={() => setActiveTab('languages')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'languages'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
                title="Aprender Idiomas: Inglés Americano vs. Británico (A1 a C2)"
              >
                <Languages className="w-3.5 h-3.5 text-emerald-600" />
                <span>Idiomas</span>
              </button>
            </nav>

            {/* Botón de Cuenta / Iniciar Sesión */}
            <button
              onClick={() => setIsAccountModalOpen(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                currentUser
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                  : 'border-blue-300 bg-blue-50 text-blue-900 hover:bg-blue-100'
              }`}
              title={currentUser ? `Cuenta activa: ${currentUser.username} • Ver exámenes realizados` : 'Iniciar sesión o registrar cuenta nativa'}
            >
              <UserCheck className="w-3.5 h-3.5 text-blue-600" />
              {currentUser ? (
                <span className="flex items-center gap-1.5">
                  <span className="truncate max-w-[100px]">{currentUser.username}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </span>
              ) : (
                <span>Cuenta</span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ==================================================================== */}
      {/* 3. CONTENIDO PRINCIPAL SEGÚN PESTAÑA ACTIVA */}
      {/* ==================================================================== */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-6 pb-24 md:pb-12">
        {/* ================================================================== */}
        {/* VISTA 0: MENÚ JERÁRQUICO POR SECCIÓN, TEMA, MATERIA Y TIPO */}
        {/* ================================================================== */}
        {activeTab === 'categories' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <img src="/kuskat_logo.png" alt="KUSKAT" className="w-6 h-6 object-contain" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Explorador de Categorías...</p>
              </div>
            }
          >
            <CategoryHierarchyViewer
              onStartPracticeWithQuestions={(questions) => {
                setQuizQuestions(questions);
                setActiveTab('practice');
                showToast(`Simulador iniciado con ${questions.length} preguntas de la sección.`);
              }}
              onExportLatexWithQuestions={(questions, title) => {
                setLatexCustomQuestions(questions);
                setLatexCustomTitle(title);
                setLatexScope('custom');
                setActiveTab('latex');
                showToast(`Exportador LaTeX preparado para: ${title}`);
              }}
              showToast={showToast}
            />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 2: SIMULADOR DE EXAMEN AVANZADO & BANCO UNIFICADO */}
        {/* ================================================================== */}
        {activeTab === 'practice' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <img src="/kuskat_logo.png" alt="KUSKAT" className="w-6 h-6 object-contain" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Simulador de Examen...</p>
              </div>
            }
          >
            <PracticeMode
              initialQuestions={quizQuestions.length > 0 ? quizQuestions : null}
              initialTitle={
                quizQuestions.length > 0
                  ? `Simulacro Personalizado (${quizQuestions.length} reactivos)`
                  : null
              }
              onExportLatex={(questions, title) => {
                setLatexCustomQuestions(questions);
                setLatexCustomTitle(title);
                setLatexScope('custom');
                setActiveTab('latex');
                showToast(`Exportador LaTeX preparado para: ${title}`);
              }}
              onBackToCategories={() => setActiveTab('categories')}
              onOpenAccountModal={() => setIsAccountModalOpen(true)}
              showToast={showToast}
            />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 3: EXPORTADOR A LATEX */}
        {/* ================================================================== */}
        {activeTab === 'latex' && (
          <div className="space-y-6">
            {/* Anuncio 1 / 5 (LaTeX) */}
            <AdBanner variant="light" positionLabel="LaTeX • 1/5 Superior" slotId="4241045160_l1" />

            <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Exportador de Documentos LaTeX
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Genera código fuente estándar compilable en Overleaf o TeX Live con clave y solucionario.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopyLatex}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
                  >
                    {copiedLatex ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedLatex ? '¡Copiado!' : 'Copiar .tex'}</span>
                  </button>

                  <button
                    onClick={handleDownloadLatex}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar .tex</span>
                  </button>
                </div>
              </div>

              {/* Selector de Alcance */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-3 flex-wrap">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Alcance:</span>
                <div className="inline-flex items-center p-1 bg-slate-100 rounded-xl text-xs font-bold flex-wrap gap-1">
                  {latexCustomQuestions && (
                    <button
                      onClick={() => setLatexScope('custom')}
                      className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                        latexScope === 'custom' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      {latexCustomTitle || 'Selección de Categoría'} ({latexCustomQuestions.length})
                    </button>
                  )}
                  <button
                    onClick={() => setLatexScope('ALL')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      latexScope === 'ALL' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Todo el Banco ({QUESTIONS_DATA.length})
                  </button>
                  <button
                    onClick={() => setLatexScope('UES')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      latexScope === 'UES' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    UES
                  </button>
                  <button
                    onClick={() => setLatexScope('ESCALAFON')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      latexScope === 'ESCALAFON' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Escalafón
                  </button>
                  <button
                    onClick={() => setLatexScope('AVANZO')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      latexScope === 'AVANZO' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    AVANZO
                  </button>
                  <button
                    onClick={() => setLatexScope('ASD')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      latexScope === 'ASD' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    ASD
                  </button>
                  <button
                    onClick={() => setLatexScope('ENA')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      latexScope === 'ENA' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    ENA
                  </button>
                  <button
                    onClick={() => setLatexScope('ANSP')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                      latexScope === 'ANSP' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    ANSP
                  </button>
                </div>
              </div>
            </div>

            {/* Anuncio 2 / 5 (LaTeX) */}
            <AdBanner variant="light" positionLabel="LaTeX • 2/5 Alcance" slotId="4241045160_l2" />

            {/* Visor de Código LaTeX */}
            <div className="bg-slate-950 rounded-3xl border border-slate-800 p-5 shadow-xl text-slate-200 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3 font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  <span className="pl-2 font-bold text-slate-300">documento_kuskat.tex</span>
                </div>
                <span>{currentLatexCode.split('\n').length} líneas</span>
              </div>

              <pre className="font-mono text-xs leading-relaxed overflow-x-auto touch-scroll text-emerald-400 max-h-[500px]">
                <code>{currentLatexCode}</code>
              </pre>
            </div>

            {/* Anuncio 3 / 5 (LaTeX) */}
            <AdBanner variant="light" positionLabel="LaTeX • 3/5 Intermedio" slotId="4241045160_l3" />

            {/* Guía Rápida de Compilación */}
            <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Instrucciones de Compilación del Documento LaTeX</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 block">1. En Overleaf</span>
                  <p className="text-slate-500 leading-relaxed">
                    Crea un proyecto en blanco, reemplaza el contenido de main.tex por el código copiado y presiona Recompile (Ctrl + Enter).
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 block">2. En TeX Live / MiKTeX</span>
                  <p className="text-slate-500 leading-relaxed">
                    Descarga el archivo .tex y compila con el motor pdflatex o xelatex para obtener el documento tipográfico listo para imprimir.
                  </p>
                </div>
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 block">3. Paquetes Incluidos</span>
                  <p className="text-slate-500 leading-relaxed">
                    Incluye amsmath, amssymb, geometry, babel con soporte en español y solucionario con justificaciones pedagógicas completas.
                  </p>
                </div>
              </div>
            </div>

            {/* Anuncio 4 / 5 (LaTeX) */}
            <AdBanner variant="light" positionLabel="LaTeX • 4/5 Código" slotId="4241045160_l4" />

            {/* Panel de Resumen Técnico */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-4 sm:p-5 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Documento estandarizado bajo normas tipográficas de la comunidad matemática y científica.</span>
              </div>
              <span className="font-mono text-[11px] text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shrink-0">
                UTF-8 • TeX Live 2026 Compatible
              </span>
            </div>

            {/* Anuncio 5 / 5 (LaTeX) */}
            <AdBanner variant="light" positionLabel="LaTeX • 5/5 Inferior" slotId="4241045160_l5" />
          </div>
        )}

        {/* ================================================================== */}
        {/* VISTA 4: IDIOMAS (INGLÉS US vs UK - MCER/CEFR A1 A C2)            */}
        {/* ================================================================== */}
        {activeTab === 'languages' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Escuela de Idiomas Kuskat...</p>
              </div>
            }
          >
            <LanguagesView
              onEnterSimulatorWithCategory={() => {
                setQuizQuestions([]);
                setActiveTab('practice');
              }}
            />
          </React.Suspense>
        )}
      </main>

      {/* ==================================================================== */}
      {/* 4. BARRA DE NAVEGACIÓN INFERIOR PARA MÓVILES (PWA STYLE) */}
      {/* ==================================================================== */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-2 py-1.5 pb-[calc(0.375rem+env(safe-area-inset-bottom,0px))] flex items-center justify-around shadow-xl">
        <button
          onClick={() => setActiveTab('motionsites3d')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
            (activeTab as string) === 'motionsites3d' ? 'text-blue-700 font-extrabold' : 'text-slate-500'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Portal 3D</span>
        </button>

        <button
          onClick={() => setActiveTab('categories')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
            activeTab === 'categories' ? 'text-blue-600 font-extrabold' : 'text-slate-500'
          }`}
        >
          <FolderTree className="w-4 h-4" />
          <span>Categorías</span>
        </button>

        <button
          onClick={() => {
            setQuizQuestions([]);
            setActiveTab('practice');
          }}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
            activeTab === 'practice' ? 'text-amber-600 font-extrabold' : 'text-slate-500'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Simulador</span>
        </button>

        <button
          onClick={() => setActiveTab('latex')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
            activeTab === 'latex' ? 'text-slate-900 font-extrabold' : 'text-slate-500'
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span>LaTeX</span>
        </button>

        <button
          onClick={() => setActiveTab('languages')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
            activeTab === 'languages' ? 'text-emerald-600 font-extrabold' : 'text-slate-500'
          }`}
        >
          <Languages className="w-4 h-4 text-emerald-600" />
          <span>Idiomas</span>
        </button>

        <button
          onClick={() => setIsAccountModalOpen(true)}
          className={`flex flex-col items-center gap-0.5 py-1 px-1.5 rounded-xl text-[10px] font-bold cursor-pointer ${
            currentUser ? 'text-emerald-700 font-extrabold' : 'text-slate-500'
          }`}
          title="Ver mi cuenta y exámenes realizados"
        >
          <UserCheck className="w-4 h-4 text-blue-600" />
          <span>{currentUser ? 'Perfil' : 'Cuenta'}</span>
        </button>

        <button
          onClick={() => setIsTutorialOpen(true)}
          className="flex flex-col items-center gap-0.5 py-1 px-1.5 rounded-xl text-[10px] font-bold text-blue-700 cursor-pointer"
          title="Ver tutorial de bienvenida"
        >
          <HelpCircle className="w-4 h-4 text-blue-600" />
          <span>Tutorial</span>
        </button>

        <button
          onClick={() => setIsDevModalOpen(true)}
          className="flex flex-col items-center gap-0.5 py-1 px-1.5 rounded-xl text-[10px] font-bold text-slate-500 cursor-pointer"
        >
          <div className="w-4 h-4 rounded-full overflow-hidden border border-amber-400 shrink-0">
            <img src="/yeferson_perez.jpg" alt="Creador" className="w-full h-full object-cover" />
          </div>
          <span>Creador</span>
        </button>
      </nav>

      {/* ==================================================================== */}
      {/* 4.5 TUTORIAL DE BIENVENIDA O GUÍA INTERACTIVA (OPCIONAL) */}
      {/* ==================================================================== */}
      {isTutorialOpen && (
        <React.Suspense fallback={null}>
          <OnboardingTutorial
            isOpen={isTutorialOpen}
            onClose={handleCloseTutorial}
          />
        </React.Suspense>
      )}

      {/* ==================================================================== */}
      {/* 5. MODAL DEL DESARROLLADOR & CREADOR (YEFERSON E. PEREZ) */}
      {/* ==================================================================== */}
      {isDevModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsDevModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-lg w-full max-h-[92vh] flex flex-col overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsDevModalOpen(false)}
              className="absolute top-3.5 right-3.5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer z-10"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabecera del Modal */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-5 sm:p-7 text-white text-center relative overflow-hidden shrink-0">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-lg mb-3 shrink-0">
                  <img
                    src="/yeferson_perez.jpg"
                    alt="Yeferson E. Perez"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold border border-amber-400/30 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Desarrollador & Creador</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  Yeferson E. Perez
                </h3>
                <p className="text-xs text-slate-300 font-medium">
                  Fundador & Desarrollador del Proyecto KUSKAT
                </p>
              </div>
            </div>

            {/* Cuerpo del Modal */}
            <div className="p-5 sm:p-7 space-y-4 text-slate-700 overflow-y-auto touch-scroll flex-1 text-xs sm:text-sm">
              {/* Información y Biografía Académica */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/40 p-4 rounded-2xl border border-slate-200 space-y-2.5">
                <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-xs flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-blue-600" />
                  <span>Perfil Académico & Biografía</span>
                </h4>

                <div className="space-y-2">
                  <div className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-200/80">
                    <GraduationCap className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-slate-800 font-medium">
                      <strong>Estudiante de Ciencias Computacionales y Ciencias Médicas, proximamente :).</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-200/80">
                    <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-slate-800 font-medium">
                      <strong>Exalumno de Jóvenes Talento - ASD Morazán.</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-slate-200/80">
                    <School className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-slate-800 font-medium">
                      <strong>Educación media cursada en CECEM.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Canales de Contacto */}
              <div className="space-y-2.5">
                <h4 className="font-bold text-slate-500 uppercase tracking-wider text-xs">
                  Canales Oficiales de Comunicación:
                </h4>

                {/* WhatsApp KUSKAT */}
                <a
                  href="https://wa.me/50376574463?text=Hola%20KUSKAT,%20estoy%20estudiando%20desde%20tu%20app%20de%20estudio%20:)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-950 font-semibold transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-bold">WhatsApp KUSKAT (Negocio)</span>
                      <span className="text-xs text-emerald-800 font-mono">+503 7657 4463</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold bg-white text-emerald-700 px-2.5 py-1 rounded-xl shadow-2xs border border-emerald-200">
                    Estudiantes
                  </span>
                </a>

                {/* WhatsApp Personal */}
                <a
                  href="https://wa.me/50379439901?text=Hola%20Yeferson%20Perez,%20paso%20a%20saludar,%20estoy%20en%20la%20app%20de%20estudio%20:)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-950 font-semibold transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-bold">WhatsApp Personal (Yeferson)</span>
                      <span className="text-xs text-blue-800 font-mono">+503 7943 9901</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold bg-white text-blue-700 px-2.5 py-1 rounded-xl shadow-2xs border border-blue-200">
                    Saludar
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/Kuskat.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-pink-50 hover:bg-pink-100 border border-pink-200 text-slate-900 font-semibold transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white flex items-center justify-center">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-bold">Instagram Oficial</span>
                      <span className="text-xs text-pink-700 font-medium">@Kuskat.es</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold bg-white text-pink-700 px-2.5 py-1 rounded-xl shadow-2xs border border-pink-200">
                    Seguir
                  </span>
                </a>
              </div>
            </div>

            {/* Pie del Modal */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 text-center text-xs text-slate-500">
              <span>KUSKAT © 2026 • Todos los derechos reservados</span>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 6. TOAST DE NOTIFICACIÓN FLOTANTE */}
      {/* ==================================================================== */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-6 right-3 sm:right-6 z-50 bg-slate-900 text-white text-xs sm:text-sm px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-2.5 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ==================================================================== */}
      {/* 7. PIE DE PÁGINA (FOOTER) */}
      {/* ==================================================================== */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-10 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-100">
            {/* Columna 1: Marca KUSKAT */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-xs">
                  <img
                    src="/kuskat_logo.png"
                    alt="Logo KUSKAT"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg font-black text-slate-900 tracking-tight font-montenegrin">KUSKAT</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plataforma integral de simulación y bancos de preguntas para aspirantes universitarios (UES) y de la Academia Nacional de Seguridad Pública (ANSP).
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-800 font-semibold border border-blue-200 text-[11px]">
                <Rocket className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Trabajando en material de medicina. Los anuncios que contiene la pagina es un pequeño aporte economico a mis estudios universitarios.</span>
              </div>
            </div>

            {/* Columna 2: Creador y Biografía */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Desarrollador & Creador</span>
              </h4>
              <div
                onClick={() => setIsDevModalOpen(true)}
                className="p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 cursor-pointer transition-colors group space-y-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl overflow-hidden border-2 border-amber-400 shrink-0 shadow-xs">
                    <img
                      src="/yeferson_perez.jpg"
                      alt="Yeferson E. Perez"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      Yeferson E. Perez
                    </p>
                    <p className="text-[11px] text-slate-500">Fundador del Proyecto KUSKAT</p>
                  </div>
                </div>

                <div className="space-y-1 text-[11px] text-slate-600 border-t border-slate-200/70 pt-2">
                  <p className="font-medium text-slate-800">• Estudiante de Ciencias Computacionales y Ciencias Médicas, proximamente :).</p>
                  <p>• Exalumno de Jóvenes Talento - ASD Morazán.</p>
                  <p>• Educación media cursada en CECEM.</p>
                </div>
              </div>
            </div>

            {/* Columna 3: Contacto */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Canales de Comunicación
              </h4>
              <div className="space-y-2">
                <a
                  href="https://wa.me/50376574463?text=Hola%20KUSKAT,%20estoy%20estudiando%20desde%20tu%20app%20de%20estudio%20:)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 transition-colors font-medium border border-transparent hover:border-emerald-200"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="text-[11px]">
                    <span className="block font-semibold">WhatsApp KUSKAT (Negocio):</span>
                    <strong className="font-mono text-slate-900">+503 7657 4463</strong>
                  </div>
                </a>

                <a
                  href="https://wa.me/50379439901?text=Hola%20Yeferson%20Perez,%20paso%20a%20saludar,%20estoy%20en%20la%20app%20de%20estudio%20:)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-800 transition-colors font-medium border border-transparent hover:border-blue-200"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="text-[11px]">
                    <span className="block font-semibold">WhatsApp Personal (Yeferson):</span>
                    <strong className="font-mono text-slate-900">+503 7943 9901</strong>
                  </div>
                </a>

                <a
                  href="https://instagram.com/Kuskat.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-pink-50 text-slate-700 hover:text-pink-800 transition-colors font-medium border border-transparent hover:border-pink-200"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="text-[11px]">
                    <span className="block font-semibold">Instagram Oficial:</span>
                    <strong className="text-slate-900">@Kuskat.es</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Enlaces a Políticas y Marco Legal */}
          <div className="pt-4 pb-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-slate-500 border-t border-slate-100">
            <span className="font-semibold text-slate-700">Políticas & Marco Normativo:</span>
            <button
              onClick={() => handleOpenLegalModal('terms')}
              className="hover:text-blue-600 transition-colors cursor-pointer underline"
            >
              1. Términos y Condiciones
            </button>
            <span>•</span>
            <button
              onClick={() => handleOpenLegalModal('privacy')}
              className="hover:text-blue-600 transition-colors cursor-pointer underline"
            >
              2. Política de Privacidad
            </button>
            <span>•</span>
            <button
              onClick={() => handleOpenLegalModal('cookies')}
              className="hover:text-blue-600 transition-colors cursor-pointer underline"
            >
              3. Cookies
            </button>
            <span>•</span>
            <button
              onClick={() => handleOpenLegalModal('refund')}
              className="hover:text-blue-600 transition-colors cursor-pointer underline"
            >
              4. Reembolsos
            </button>
            <span>•</span>
            <button
              onClick={() => handleOpenLegalModal('copyright')}
              className="hover:text-blue-600 transition-colors cursor-pointer underline"
            >
              5. Derechos de Imágenes
            </button>
            <span>•</span>
            <button
              onClick={() => handleOpenLegalModal('laws')}
              className="hover:text-blue-600 transition-colors cursor-pointer underline"
            >
              6. Leyes de El Salvador
            </button>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400 text-[11px] border-t border-slate-200/60">
            <div className="flex items-center gap-3 flex-wrap">
              <p>KUSKAT © 2026 • Todos los derechos reservados • Desarrollado por Yeferson E. Perez</p>
              <span>•</span>
              <button
                onClick={() => setIsTutorialOpen(true)}
                className="text-blue-600 hover:text-blue-800 underline font-bold cursor-pointer"
              >
                Ver tutorial nuevamente
              </button>
            </div>
            <p className="font-mono">v2.3.0 • El Salvador</p>
          </div>
        </div>
      </footer>

      {/* ==================================================================== */}
      {/* 8. MODAL DE CUENTA (INICIAR SESIÓN, CREAR CUENTA, EXÁMENES REALIZADOS) */}
      {/* ==================================================================== */}
      <AccountModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
        onOpenLegalModal={handleOpenLegalModal}
        onUserChanged={setCurrentUser}
      />

      {/* ==================================================================== */}
      {/* 9. MODAL DE MARCO LEGAL Y POLÍTICAS DE PRIVACIDAD */}
      {/* ==================================================================== */}
      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        initialTab={legalModalTab}
      />

      {/* ==================================================================== */}
      {/* 10. BANNER DE CONSENTIMIENTO DE COOKIES */}
      {/* ==================================================================== */}
      <CookieBanner onOpenLegalModal={handleOpenLegalModal} />
    </div>
  );
}

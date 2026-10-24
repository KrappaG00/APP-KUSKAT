import React, { useState, useMemo, useEffect } from 'react';
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
  Activity,
  Sun,
  FileText,
  Brain,
  Compass,
  Stethoscope,
} from 'lucide-react';
import {
  Institution,
  Question,
  QUESTIONS_DATA,
  SUBJECTS_BY_INSTITUTION,
  generateLatexDocument,
  generateOmrSheetLatex,
} from './data';
import type { LegalTab } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';
import { AdBanner } from './components/AdBanner';
import { LateralAdRails } from './components/LateralAdRails';
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
const AccountModal = React.lazy(() =>
  import('./components/AccountModal').then((m) => ({ default: m.AccountModal }))
);
const LegalModal = React.lazy(() =>
  import('./components/LegalModal').then((m) => ({ default: m.LegalModal }))
);
const CentralAmericaMap = React.lazy(() => import('./components/CentralAmericaMap'));
const PatrioticHistoryView = React.lazy(() => import('./components/PatrioticHistoryView'));
const DriverLicenseView = React.lazy(() => import('./components/DriverLicenseView'));
const AcademicReinforcementView = React.lazy(() => import('./components/AcademicReinforcementView'));
const TechnicalCoursesView = React.lazy(() => import('./components/TechnicalCoursesView'));
const NotaryExamView = React.lazy(() => import('./components/NotaryExamView'));
const ConstitutionLawView = React.lazy(() => import('./components/ConstitutionLawView'));
const ResidentadoMedicoView = React.lazy(() => import('./components/ResidentadoMedicoView'));
const CsspHealthView = React.lazy(() => import('./components/CsspHealthView'));
const AnspAscensoView = React.lazy(() => import('./components/AnspAscensoView'));
const OralLitigationSimulatorView = React.lazy(() => import('./components/OralLitigationSimulatorView'));
const InteractiveFormulaLab = React.lazy(() => import('./components/InteractiveFormulaLab'));
const OnePageCheatSheetsView = React.lazy(() =>
  import('./components/OnePageCheatSheetsView').then((m) => ({ default: m.OnePageCheatSheetsView }))
);
const JovenesTalentoView = React.lazy(() =>
  import('./components/JovenesTalentoView').then((m) => ({ default: m.JovenesTalentoView }))
);
const ComplianceFinancialView = React.lazy(() =>
  import('./components/ComplianceFinancialView').then((m) => ({ default: m.ComplianceFinancialView }))
);
const SigetSolarView = React.lazy(() =>
  import('./components/SigetSolarView').then((m) => ({ default: m.SigetSolarView }))
);
const DerechoAdministrativoView = React.lazy(() =>
  import('./components/DerechoAdministrativoView').then((m) => ({ default: m.DerechoAdministrativoView }))
);
const SaludPrimariaView = React.lazy(() =>
  import('./components/SaludPrimariaView').then((m) => ({ default: m.SaludPrimariaView }))
);
const IngenieriaCienciasView = React.lazy(() =>
  import('./components/IngenieriaCienciasView').then((m) => ({ default: m.IngenieriaCienciasView }))
);
const FlashcardModal = React.lazy(() => import('./components/FlashcardModal'));
const SmartErrorNotebookModal = React.lazy(() => import('./components/SmartErrorNotebookModal'));

import { KaTeXMath, escapeHtml } from './utils/mathRenderer';
export { KaTeXMath };

<<<<<<< Updated upstream


// ============================================================================
export default function App() {
  const [activeTab, setActiveTab] = useState<'motionsites3d' | 'categories' | 'practice' | 'latex' | 'languages'>(() => {
=======
const ALL_VALID_TABS: AppPageTab[] = [
  'motionsites3d',
  'central-america',
  'patriotic-history',
  'driver-license',
  'academic-reinforcement',
  'technical-courses',
  'notary-exam',
  'ansp-ascenso',
  'constitution',
  'residentado-medico',
  'cssp-health',
  'oral-litigation',
  'formula-lab',
  'one-page-sheets',
  'jovenes-talento',
  'compliance-financial',
  'siget-solar',
  'derecho-administrativo',
  'salud-primaria',
  'ingenieria-ciencias',
  'categories',
  'practice',
  'languages',
  'latex',
];

const TAB_URL_ALIASES: Record<string, AppPageTab> = {
  refuerzo: 'academic-reinforcement',
  simulator: 'practice',
  'cursos-tecnicos': 'technical-courses',
  medicina: 'residentado-medico',
  notariado: 'notary-exam',
  cssp: 'cssp-health',
  'compliance-aml': 'compliance-financial',
  lenguas: 'languages',
};

const TAB_SEO_TITLES: Record<AppPageTab, string> = {
  motionsites3d: 'KUSKAT | Plataforma Salvadoreña de Excelencia Académica y Científica (kuskates.com)',
  'academic-reinforcement': 'Refuerzo Curricular Oficial MINED-ESMATE (1° Grado a Bachillerato) | KUSKAT',
  practice: 'Simulador Oficial de Exámenes (UES, AVANZO, Escalafón, ANSP, ENA) | KUSKAT',
  categories: 'Categorías y Bancos de Preguntas Oficiales de El Salvador | KUSKAT',
  'technical-courses': 'Cursos Técnicos Vocacionales INCAF (400 Horas • Normativa Salvadoreña) | KUSKAT',
  languages: 'Escuela de Idiomas y Rescate Ancestral (Náhuat, Lenca, Kakawira, Inglés) | KUSKAT',
  'residentado-medico': 'Residentado Médico ENAR y Casos Clínicos Hospitalarios | KUSKAT',
  'notary-exam': 'Examen de Suficiencia Notarial CSJ El Salvador | KUSKAT',
  'derecho-administrativo': 'Derecho Administrativo (LPA) y Firma Electrónica | KUSKAT',
  'ingenieria-ciencias': 'Métodos Cuantitativos y Ciencias de Ingeniería | KUSKAT',
  'salud-primaria': 'Atención Primaria MINSAL y Farmacovigilancia DNM | KUSKAT',
  'cssp-health': 'Juntas de Vigilancia del Consejo Superior de Salud Pública (CSSP) | KUSKAT',
  'ansp-ascenso': 'Simulador de Ascenso Policial ANSP El Salvador | KUSKAT',
  'compliance-financial': 'Cumplimiento Financiero AML (UIF/FGR) y Seguros SSF | KUSKAT',
  constitution: 'Casoteca Constitucional y Jurisprudencia CSJ | KUSKAT',
  'oral-litigation': 'Simulador de Litigación Oral y Audiencias | KUSKAT',
  'siget-solar': 'Normativa Eléctrica SIGET y Sistemas Fotovoltaicos | KUSKAT',
  'jovenes-talento': 'Programa Jóvenes Talento y Olimpiadas Científicas | KUSKAT',
  'formula-lab': 'Laboratorio Interactivo de Fórmulas Científicas | KUSKAT',
  'one-page-sheets': 'Hojas Mnemotécnicas de 1 Página y Fórmulas | KUSKAT',
  'driver-license': 'Simulador de Examen de Conducir VMT El Salvador | KUSKAT',
  'patriotic-history': 'Historia Patria y Cultura de El Salvador | KUSKAT',
  'central-america': 'Atlas Interactivo de Centroamérica | KUSKAT',
  latex: 'Generador Tipográfico LaTeX y Hojas OMR | KUSKAT',
};

function resolveTabFromParam(rawParam: string | null): AppPageTab | null {
  if (!rawParam) return null;
  const cleaned = rawParam.trim().toLowerCase();
  if (ALL_VALID_TABS.includes(cleaned as AppPageTab)) {
    return cleaned as AppPageTab;
  }
  return TAB_URL_ALIASES[cleaned] || null;
}

// ============================================================================
export default function App() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<AppPageTab>(() => {
>>>>>>> Stashed changes
    try {
      if (typeof window !== 'undefined' && window.location.search) {
        const param = new URLSearchParams(window.location.search).get('tab');
        const resolved = resolveTabFromParam(param);
        if (resolved) {
          return resolved;
        }
      }
    } catch {
      // fallback
    }
    return 'motionsites3d';
  });
  const [isDevModalOpen, setIsDevModalOpen] = useState<boolean>(false);
  const [isFlashcardsModalOpen, setIsFlashcardsModalOpen] = useState<boolean>(false);
  const [isSmartErrorNotebookOpen, setIsSmartErrorNotebookOpen] = useState<boolean>(false);
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
  // y sincroniza el <title> y <link rel="canonical"> con https://kuskates.com
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

    try {
      if (typeof document !== 'undefined') {
        document.title = TAB_SEO_TITLES[activeTab] || TAB_SEO_TITLES.motionsites3d;
        const canonicalEl = document.querySelector('link[rel="canonical"]');
        if (canonicalEl) {
          const canonicalHref =
            activeTab === 'motionsites3d'
              ? 'https://kuskates.com/'
              : `https://kuskates.com/?tab=${activeTab}`;
          canonicalEl.setAttribute('href', canonicalHref);
        }
      }
    } catch {
      // ignore in non-DOM test environments
    }

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
    };
  }, [activeTab]);

  const [isExamRunning, setIsExamRunning] = useState<boolean>(false);

  const handleSelectTab = (tab: AppPageTab) => {
    if (isExamRunning && tab !== activeTab) {
      const confirmLeave = window.confirm(
        'Tienes una evaluación activa en el simulador. Si cambias de sección perderás el progreso no guardado. ¿Deseas salir?'
      );
      if (!confirmLeave) return;
      setIsExamRunning(false);
    }
    if (tab === 'practice') {
      setQuizQuestions([]);
    }
    setActiveTab(tab);
    try {
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.set('tab', tab);
        window.history.pushState({ tab }, '', url.toString());
      }
    } catch {
      // fallback
    }
  };

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const rawParam = new URLSearchParams(window.location.search).get('tab');
      const tabFromUrl = resolveTabFromParam(rawParam) || 'motionsites3d';
      const targetTab = (e.state?.tab && resolveTabFromParam(e.state.tab)) || tabFromUrl;
      if (ALL_VALID_TABS.includes(targetTab)) {
        if (isExamRunning) {
          const confirmLeave = window.confirm(
            'Tienes una evaluación activa en el simulador. Si regresas perderás tu progreso no guardado. ¿Deseas salir?'
          );
          if (!confirmLeave) {
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set('tab', activeTab);
            window.history.pushState({ tab: activeTab }, '', currentUrl.toString());
            return;
          }
          setIsExamRunning(false);
        }
        setActiveTab(targetTab);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isExamRunning, activeTab]);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isExamRunning) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isExamRunning]);

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
  const [practiceInitialCategory, setPracticeInitialCategory] = useState<'ALL' | Institution | undefined>(undefined);
  const [practiceInitialLanguage, setPracticeInitialLanguage] = useState<'ALL' | 'ingles' | 'nahuat' | 'lenca' | 'kakawira' | 'german' | 'arabic' | 'mandarin' | undefined>(undefined);

  // Estado para el exportador LaTeX
  const [latexScope, setLatexScope] = useState<'ALL' | 'UES' | 'ESCALAFON' | 'AVANZO' | 'ASD' | 'ENA' | 'ANSP' | 'INGLES' | 'custom' | 'OMR_50' | 'OMR_100'>('ALL');
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

    if (latexScope === 'OMR_50') {
      return generateOmrSheetLatex(50, 'Evaluación Institucional KUSKAT (50 Ítems)');
    }
    if (latexScope === 'OMR_100') {
      return generateOmrSheetLatex(100, 'Evaluación Institucional KUSKAT (100 Ítems)');
    }

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
            handleSelectTab('practice');
          }}
          onOpenCategories={() => {
<<<<<<< Updated upstream
            setActiveTab('categories');
          }}
=======
            handleSelectTab('categories');
          }}
          onSelectTab={handleSelectTab}
          onOpenAccountModal={() => setIsAccountModalOpen(true)}
          onOpenTutorial={() => setIsTutorialOpen(true)}
          onOpenDevModal={() => setIsDevModalOpen(true)}
          onOpenLegalModal={handleOpenLegalModal}
          currentUser={currentUser}
>>>>>>> Stashed changes
        />
      </React.Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-caslon text-slate-800 overflow-x-clip">
      {/* ==================================================================== */}
      {/* 1. CINTILLO SUPERIOR DE INFORMACIÓN Y CONTACTO */}
      {/* ==================================================================== */}
<<<<<<< Updated upstream
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
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo y Nombre del Proyecto */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1 shrink-0 overflow-hidden">
              <img
                src="/kuskat_logo.png"
                alt="Logo KUSKAT"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h1 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight font-montenegrin truncate">
                  KUSKAT
                </h1>
                <span className="text-[9px] sm:text-xs font-bold text-blue-700 bg-blue-50 px-1.5 sm:px-2 py-0.5 rounded-md border border-blue-200 shrink-0">
                  Banco Maestro
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate hidden xs:block sm:block">
                Preparación para la aprobación de exámenes de Centroamérica
              </p>
            </div>
          </div>

          {/* Navegación y Perfil: versión escritorio completa */}
          <div className="hidden md:flex items-center gap-2 flex-wrap justify-end shrink-0">
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
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
              <span className="hidden lg:inline">Creador:</span>
              <span className="font-bold text-slate-900">Yeferson E. Perez</span>
            </button>

            {/* Botón de Tutorial / Guía Inicial */}
            <button
              onClick={() => setIsTutorialOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-blue-200 bg-blue-50/80 hover:bg-blue-100 text-blue-900 text-xs font-bold transition-all cursor-pointer shadow-2xs"
              title="Abrir tutorial y guía interactiva de KUSKAT"
            >
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden lg:inline">Guía</span>
              <span>Tutorial</span>
            </button>

            {/* Vistas Principales (Tabs) */}
            <nav className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600">
              <button
                onClick={() => setActiveTab('motionsites3d')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  (activeTab as string) === 'motionsites3d'
                    ? 'bg-slate-900 text-[#F8DCCB] shadow-xs font-bold'
                    : 'text-indigo-900 bg-indigo-50/80 hover:bg-indigo-100 font-bold border border-indigo-200/60'
                }`}
                title="Entrar al portal 3D interactivo con mapa de El Salvador"
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
                title="Aprender Idiomas: 7 Lenguas (A1 a C2)"
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

          {/* Navegación móvil rápida en cabecera: botón cuenta + tutorial */}
          <div className="flex md:hidden items-center gap-1.5 shrink-0">
            <button
              onClick={() => setIsTutorialOpen(true)}
              className="p-2 rounded-xl border border-blue-200 bg-blue-50 text-blue-900 text-xs font-bold cursor-pointer"
              title="Abrir tutorial"
              aria-label="Tutorial"
            >
              <HelpCircle className="w-4 h-4 text-blue-600" />
            </button>
            <button
              onClick={() => setIsAccountModalOpen(true)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-bold cursor-pointer ${
                currentUser
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                  : 'border-blue-300 bg-blue-50 text-blue-900'
              }`}
              title={currentUser ? currentUser.username : 'Cuenta'}
            >
              <UserCheck className="w-4 h-4 text-blue-600" />
              <span className="truncate max-w-[70px] text-[11px]">
                {currentUser ? currentUser.username : 'Cuenta'}
              </span>
            </button>
          </div>
        </div>
      </header>
=======
      <HeaderNavbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenAccountModal={() => setIsAccountModalOpen(true)}
        onOpenTutorial={() => setIsTutorialOpen(true)}
        onOpenDevModal={() => setIsDevModalOpen(true)}
        onOpenLegalModal={handleOpenLegalModal}
        onOpenFlashcards={() => setIsFlashcardsModalOpen(true)}
        onOpenErrorNotebook={() => setIsSmartErrorNotebookOpen(true)}
        currentUser={currentUser}
      />
>>>>>>> Stashed changes

      {/* ==================================================================== */}
      {/* 3. CONTENIDO PRINCIPAL SEGÚN PESTAÑA ACTIVA */}
      {/* ==================================================================== */}
      <main className="flex-1 w-full mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 py-4 sm:py-6 pb-12">
        <LateralAdRails activeTab={activeTab}>
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
                handleSelectTab('practice');
                showToast(`Simulador iniciado con ${questions.length} preguntas de la sección.`);
              }}
              onExportLatexWithQuestions={(questions, title) => {
                setLatexCustomQuestions(questions);
                setLatexCustomTitle(title);
                setLatexScope('custom');
                handleSelectTab('latex');
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
              initialCategory={practiceInitialCategory}
              initialLanguageFilter={practiceInitialLanguage}
              initialTitle={
                quizQuestions.length > 0
                  ? `Simulacro Personalizado (${quizQuestions.length} reactivos)`
                  : null
              }
              onExportLatex={(questions, title) => {
                setLatexCustomQuestions(questions);
                setLatexCustomTitle(title);
                setLatexScope('custom');
                handleSelectTab('latex');
                showToast(`Exportador LaTeX preparado para: ${title}`);
              }}
              onBackToCategories={() => handleSelectTab('categories')}
              onOpenAccountModal={() => setIsAccountModalOpen(true)}
              onQuizActiveChange={setIsExamRunning}
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
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider shrink-0">Alcance:</span>
                <div className="flex items-center p-1 bg-slate-100 rounded-xl text-xs font-bold overflow-x-auto scrollbar-none touch-scroll max-w-full gap-1">
                  {latexCustomQuestions && (
                    <button
                      onClick={() => setLatexScope('custom')}
                      className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                        latexScope === 'custom' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      {latexCustomTitle || 'Selección de Categoría'} ({latexCustomQuestions.length})
                    </button>
                  )}
                  <button
                    onClick={() => setLatexScope('ALL')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                      latexScope === 'ALL' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Todo el Banco ({QUESTIONS_DATA.length})
                  </button>
                  <button
                    onClick={() => setLatexScope('UES')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                      latexScope === 'UES' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    UES
                  </button>
                  <button
                    onClick={() => setLatexScope('ESCALAFON')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                      latexScope === 'ESCALAFON' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    Escalafón
                  </button>
                  <button
                    onClick={() => setLatexScope('AVANZO')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                      latexScope === 'AVANZO' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    AVANZO
                  </button>
                  <button
                    onClick={() => setLatexScope('ASD')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                      latexScope === 'ASD' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    ASD
                  </button>
                  <button
                    onClick={() => setLatexScope('ENA')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                      latexScope === 'ENA' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    ENA
                  </button>
                  <button
                    onClick={() => setLatexScope('ANSP')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 ${
                      latexScope === 'ANSP' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                    }`}
                  >
                    ANSP
                  </button>
                  <button
                    onClick={() => setLatexScope('OMR_50')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 font-bold flex items-center gap-1 ${
                      latexScope === 'OMR_50' ? 'bg-[#C59B27] text-[#0B1B3D] shadow-xs' : 'text-amber-700 bg-amber-50 hover:bg-amber-100'
                    }`}
                  >
                    <span>Hoja OMR (50 ítems)</span>
                  </button>
                  <button
                    onClick={() => setLatexScope('OMR_100')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer shrink-0 font-bold flex items-center gap-1 ${
                      latexScope === 'OMR_100' ? 'bg-[#C59B27] text-[#0B1B3D] shadow-xs' : 'text-amber-700 bg-amber-50 hover:bg-amber-100'
                    }`}
                  >
                    <span>Hoja OMR (100 ítems)</span>
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
              onEnterSimulatorWithCategory={(cat, langId) => {
                setQuizQuestions([]);
                setPracticeInitialCategory(cat);
                if (langId) {
                  const mapped = langId === 'english' ? 'ingles' : langId;
                  setPracticeInitialLanguage(mapped as any);
                }
                handleSelectTab('practice');
                showToast(`Iniciando Simulador Global de Idiomas...`);
              }}
            />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 5: MAPA INTERACTIVO DE CENTROAMÉRICA & EL SALVADOR          */}
        {/* ================================================================== */}
        {activeTab === 'central-america' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Mapa de Centroamérica...</p>
              </div>
            }
          >
            <CentralAmericaMap />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 6: SÍMBOLOS PATRIOS E HISTORIAL DE PRESIDENTES DE EL SALVADOR */}
        {/* ================================================================== */}
        {activeTab === 'patriotic-history' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Símbolos Patrios e Historia...</p>
              </div>
            }
          >
            <PatrioticHistoryView />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 7: LICENCIAS DE CONDUCIR (TEÓRICO Y PSICOLÓGICO)             */}
        {/* ================================================================== */}
        {activeTab === 'driver-license' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Módulo de Licencias de Conducir...</p>
              </div>
            }
          >
            <DriverLicenseView />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 8: REFUERZO ACADÉMICO (1° A 9° GRADO Y 1°-2° BACHILLERATO)   */}
        {/* ================================================================== */}
        {activeTab === 'academic-reinforcement' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Refuerzo Académico Escolar...</p>
              </div>
            }
          >
            <AcademicReinforcementView />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 9: CURSOS TÉCNICOS Y OFICIOS PRÁCTICOS                      */}
        {/* ================================================================== */}
        {activeTab === 'technical-courses' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Cursos Técnicos y Oficios...</p>
              </div>
            }
          >
            <TechnicalCoursesView />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 10: PREPARACIÓN PARA EL EXAMEN DE NOTARIO CSJ               */}
        {/* ================================================================== */}
        {activeTab === 'notary-exam' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Examen de Notariado...</p>
              </div>
            }
          >
            <NotaryExamView />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA: ASCENSOS POLICIALES ANSP / PNC                              */}
        {/* ================================================================== */}
        {activeTab === 'ansp-ascenso' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Shield className="w-6 h-6 text-[#C59B27]" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Módulo de Ascensos Policiales ANSP...</p>
              </div>
            }
          >
            <AnspAscensoView
              onOpenErrorNotebook={() => setIsSmartErrorNotebookOpen(true)}
              showToast={showToast}
            />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 11: CONSTITUCIÓN Y DERECHO PÚBLICO / PRIVADO                 */}
        {/* ================================================================== */}
        {activeTab === 'constitution' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Constitución y Derecho...</p>
              </div>
            }
          >
            <ConstitutionLawView />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 12: RESIDENTADO MÉDICO ENAR (POSGRADO & ESPECIALIDADES)     */}
        {/* ================================================================== */}
        {activeTab === 'residentado-medico' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <BookOpen className="w-6 h-6 text-[#C59B27]" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Residentado Médico ENAR...</p>
              </div>
            }
          >
            <ResidentadoMedicoView
              onOpenFlashcards={() => setIsFlashcardsModalOpen(true)}
              onOpenErrorNotebook={() => setIsSmartErrorNotebookOpen(true)}
              showToast={showToast}
            />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 13: HABILITACIÓN EN SALUD CSSP (5 JUNTAS DE VIGILANCIA)     */}
        {/* ================================================================== */}
        {activeTab === 'cssp-health' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Activity className="w-6 h-6 text-[#1E7E34]" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Habilitación en Salud CSSP...</p>
              </div>
            }
          >
            <CsspHealthView
              onOpenErrorNotebook={() => setIsSmartErrorNotebookOpen(true)}
              showToast={showToast}
            />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 14: LITIGACIÓN ORAL PENAL & SIMULADOR DE OBJECIONES (PRPN)   */}
        {/* ================================================================== */}
        {activeTab === 'oral-litigation' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Scale className="w-6 h-6 text-[#9E472A]" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Taller de Litigación Oral...</p>
              </div>
            }
          >
            <OralLitigationSimulatorView
              onOpenErrorNotebook={() => setIsSmartErrorNotebookOpen(true)}
              showToast={showToast}
            />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 15: LABORATORIO DE FÓRMULAS INTERACTIVO                    */}
        {/* ================================================================== */}
        {activeTab === 'formula-lab' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-600 flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Laboratorio de Fórmulas Interactivo...</p>
              </div>
            }
          >
            <InteractiveFormulaLab />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 16: HOJAS MNEMOTÉCNICAS (1 PÁG. LATEX)                      */}
        {/* ================================================================== */}
        {activeTab === 'one-page-sheets' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <FileText className="w-6 h-6 text-[#C59B27]" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Hojas Mnemotécnicas (1 Pág. LaTeX)...</p>
              </div>
            }
          >
            <OnePageCheatSheetsView showToast={showToast} />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 17: PROGRAMA JÓVENES TALENTO UES / MINED                     */}
        {/* ================================================================== */}
        {activeTab === 'jovenes-talento' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Brain className="w-6 h-6 text-[#C59B27]" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Jóvenes Talento UES / MINED...</p>
              </div>
            }
          >
            <JovenesTalentoView
              onOpenErrorNotebook={() => setIsSmartErrorNotebookOpen(true)}
              showToast={showToast}
            />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 18: CUMPLIMIENTO AML & SEGUROS MERCANTILES (SSF / UIF)       */}
        {/* ================================================================== */}
        {activeTab === 'compliance-financial' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Shield className="w-6 h-6 text-[#C59B27]" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Cumplimiento AML & Seguros SSF...</p>
              </div>
            }
          >
            <ComplianceFinancialView
              onOpenErrorNotebook={() => setIsSmartErrorNotebookOpen(true)}
              showToast={showToast}
            />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 19: ENERGÍA SOLAR FOTOVOLTAICA & ELECTRICIDAD SIGET         */}
        {/* ================================================================== */}
        {activeTab === 'siget-solar' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Sun className="w-6 h-6 text-[#C59B27]" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Energía Solar & Electricidad SIGET...</p>
              </div>
            }
          >
            <SigetSolarView
              onOpenErrorNotebook={() => setIsSmartErrorNotebookOpen(true)}
              showToast={showToast}
            />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 20: DERECHO ADMINISTRATIVO (LPA) & FIRMA ELECTRÓNICA         */}
        {/* ================================================================== */}
        {activeTab === 'derecho-administrativo' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Scale className="w-6 h-6 text-[#C59B27]" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Derecho Administrativo (LPA)...</p>
              </div>
            }
          >
            <DerechoAdministrativoView
              onOpenErrorNotebook={() => setIsSmartErrorNotebookOpen(true)}
              showToast={showToast}
            />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 21: ATENCIÓN PRIMARIA & FARMACOVIGILANCIA MINSAL/SRS        */}
        {/* ================================================================== */}
        {activeTab === 'salud-primaria' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Stethoscope className="w-6 h-6 text-[#1E7E34]" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Atención Primaria & Farmacovigilancia...</p>
              </div>
            }
          >
            <SaludPrimariaView
              onOpenErrorNotebook={() => setIsSmartErrorNotebookOpen(true)}
              showToast={showToast}
            />
          </React.Suspense>
        )}

        {/* ================================================================== */}
        {/* VISTA 22: CIENCIAS DE INGENIERÍA & MÉTODOS CUANTITATIVOS          */}
        {/* ================================================================== */}
        {activeTab === 'ingenieria-ciencias' && (
          <React.Suspense
            fallback={
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] flex items-center justify-center mx-auto mb-3 animate-pulse">
                  <Compass className="w-6 h-6 text-[#C59B27]" />
                </div>
                <p className="font-caslon text-sm font-semibold text-slate-700">Cargando Ciencias de Ingeniería & Métodos Cuantitativos...</p>
              </div>
            }
          >
            <IngenieriaCienciasView
              onOpenErrorNotebook={() => setIsSmartErrorNotebookOpen(true)}
              showToast={showToast}
            />
          </React.Suspense>
        )}
        </LateralAdRails>
      </main>

      {/* ==================================================================== */}
<<<<<<< Updated upstream
      {/* 4. BARRA DE NAVEGACIÓN INFERIOR PARA MÓVILES (PWA STYLE) */}
      {/* ==================================================================== */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-1.5 py-1 pb-[calc(0.4rem+env(safe-area-inset-bottom,0px))] flex items-center justify-between overflow-x-auto scrollbar-none touch-scroll shadow-xl gap-1">
        <button
          onClick={() => setActiveTab('motionsites3d')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl text-[9.5px] font-bold transition-all cursor-pointer shrink-0 min-w-[50px] ${
            (activeTab as string) === 'motionsites3d' ? 'text-blue-700 font-extrabold bg-blue-50/80' : 'text-slate-500'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="truncate">Portal 3D</span>
        </button>

        <button
          onClick={() => setActiveTab('categories')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl text-[9.5px] font-bold transition-all cursor-pointer shrink-0 min-w-[50px] ${
            activeTab === 'categories' ? 'text-blue-600 font-extrabold bg-blue-50/80' : 'text-slate-500'
          }`}
        >
          <FolderTree className="w-4 h-4" />
          <span className="truncate">Categorías</span>
        </button>

        <button
          onClick={() => {
            setQuizQuestions([]);
            setActiveTab('practice');
          }}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl text-[9.5px] font-bold transition-all cursor-pointer shrink-0 min-w-[50px] ${
            activeTab === 'practice' ? 'text-amber-600 font-extrabold bg-amber-50/80' : 'text-slate-500'
          }`}
        >
          <Award className="w-4 h-4" />
          <span className="truncate">Simulador</span>
        </button>

        <button
          onClick={() => setActiveTab('languages')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl text-[9.5px] font-bold transition-all cursor-pointer shrink-0 min-w-[50px] ${
            activeTab === 'languages' ? 'text-emerald-600 font-extrabold bg-emerald-50/80' : 'text-slate-500'
          }`}
        >
          <Languages className="w-4 h-4 text-emerald-600" />
          <span className="truncate">Idiomas</span>
        </button>

        <button
          onClick={() => setActiveTab('latex')}
          className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-xl text-[9.5px] font-bold transition-all cursor-pointer shrink-0 min-w-[48px] ${
            activeTab === 'latex' ? 'text-slate-900 font-extrabold bg-slate-100' : 'text-slate-500'
          }`}
        >
          <FileCode className="w-4 h-4" />
          <span className="truncate">LaTeX</span>
        </button>

        <button
          onClick={() => setIsAccountModalOpen(true)}
          className={`flex flex-col items-center gap-0.5 py-1 px-1.5 rounded-xl text-[9.5px] font-bold cursor-pointer shrink-0 min-w-[48px] ${
            currentUser ? 'text-emerald-700 font-extrabold' : 'text-slate-500'
          }`}
          title="Ver mi cuenta y exámenes realizados"
        >
          <UserCheck className="w-4 h-4 text-blue-600" />
          <span className="truncate">{currentUser ? 'Perfil' : 'Cuenta'}</span>
        </button>

        <button
          onClick={() => setIsTutorialOpen(true)}
          className="flex flex-col items-center gap-0.5 py-1 px-1.5 rounded-xl text-[9.5px] font-bold text-blue-700 cursor-pointer shrink-0 min-w-[48px]"
          title="Ver tutorial de bienvenida"
        >
          <HelpCircle className="w-4 h-4 text-blue-600" />
          <span className="truncate">Tutorial</span>
        </button>

        <button
          onClick={() => setIsDevModalOpen(true)}
          className="flex flex-col items-center gap-0.5 py-1 px-1.5 rounded-xl text-[9.5px] font-bold text-slate-500 cursor-pointer shrink-0 min-w-[48px]"
        >
          <div className="w-4 h-4 rounded-full overflow-hidden border border-amber-400 shrink-0">
            <img src="/yeferson_perez.jpg" alt="Creador" className="w-full h-full object-cover" />
          </div>
          <span className="truncate">Creador</span>
        </button>
      </nav>

      {/* ==================================================================== */}
=======
>>>>>>> Stashed changes
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
                {/* WhatsApp Negocio KUSKAT */}
                <a
                  href="https://wa.me/50376574463?text=Hola%20KUSKAT,%20estoy%20estudiando%20desde%20tu%20app%20de%20estudio%20:)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-950 transition-all text-xs sm:text-sm font-semibold group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block font-bold">WhatsApp KUSKAT (Oficial)</span>
                      <span className="text-xs text-emerald-800 font-mono font-medium">+503 7657 4463</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold bg-white text-emerald-700 px-2.5 py-1 rounded-xl shadow-2xs border border-emerald-200 shrink-0">
                    Estudiantes
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
                    <span className="block font-semibold">WhatsApp KUSKAT (Oficial):</span>
                    <strong className="font-mono text-slate-900">+503 7657 4463</strong>
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
      {isAccountModalOpen && (
        <React.Suspense fallback={null}>
          <AccountModal
            isOpen={isAccountModalOpen}
            onClose={() => setIsAccountModalOpen(false)}
            onOpenLegalModal={handleOpenLegalModal}
            onUserChanged={setCurrentUser}
          />
        </React.Suspense>
      )}

      {/* ==================================================================== */}
      {/* 9. MODAL DE MARCO LEGAL Y POLÍTICAS DE PRIVACIDAD */}
      {/* ==================================================================== */}
      {isLegalModalOpen && (
        <React.Suspense fallback={null}>
          <LegalModal
            isOpen={isLegalModalOpen}
            onClose={() => setIsLegalModalOpen(false)}
            initialTab={legalModalTab}
          />
        </React.Suspense>
      )}

      {/* ==================================================================== */}
      {/* 9.5 FLASHCARDS NEMOTÉCNICAS INTELIGENTES (FSRS v4.5) */}
      {/* ==================================================================== */}
      {isFlashcardsModalOpen && (
        <React.Suspense fallback={null}>
          <FlashcardModal
            isOpen={isFlashcardsModalOpen}
            onClose={() => setIsFlashcardsModalOpen(false)}
          />
        </React.Suspense>
      )}

      {/* ==================================================================== */}
      {/* 9.6 CUADERNO INTELIGENTE DE ERRORES Y REMEDIACIÓN DELIBERADA FSRS    */}
      {/* ==================================================================== */}
      {isSmartErrorNotebookOpen && (
        <React.Suspense fallback={null}>
          <SmartErrorNotebookModal
            isOpen={isSmartErrorNotebookOpen}
            onClose={() => setIsSmartErrorNotebookOpen(false)}
          />
        </React.Suspense>
      )}

      {/* ==================================================================== */}
      {/* 10. BANNER DE CONSENTIMIENTO DE COOKIES */}
      {/* ==================================================================== */}
      <CookieBanner onOpenLegalModal={handleOpenLegalModal} />
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  FolderTree,
  Award,
  Languages,
  FileCode,
  UserCheck,
  HelpCircle,
  Scale,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Layers,
  Grid,
  Box,
  Globe2,
  Car,
  GraduationCap,
  Wrench,
  Gavel,
  Flag,
  Stethoscope,
  Activity,
  FlaskConical,
  Brain,
  WifiOff,
  Shield,
  Sun,
  FileText,
  Compass,
} from 'lucide-react';
import { useTranslation } from '../i18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import { User } from '../types/auth';
import type { LegalTab } from './LegalModal';
import { addConnectivityListener } from '../services/offlineDb';

export type AppPageTab =
  | 'motionsites3d'
  | 'central-america'
  | 'patriotic-history'
  | 'driver-license'
  | 'academic-reinforcement'
  | 'technical-courses'
  | 'notary-exam'
  | 'ansp-ascenso'
  | 'constitution'
  | 'residentado-medico'
  | 'cssp-health'
  | 'oral-litigation'
  | 'formula-lab'
  | 'one-page-sheets'
  | 'jovenes-talento'
  | 'compliance-financial'
  | 'siget-solar'
  | 'derecho-administrativo'
  | 'salud-primaria'
  | 'ingenieria-ciencias'
  | 'categories'
  | 'practice'
  | 'languages'
  | 'latex';

export interface HeaderNavbarProps {
  activeTab: AppPageTab;
  onSelectTab: (tab: AppPageTab) => void;
  onOpenAccountModal: () => void;
  onOpenTutorial: () => void;
  onOpenDevModal: () => void;
  onOpenLegalModal: (tab?: LegalTab) => void;
  onOpenFlashcards?: () => void;
  onOpenErrorNotebook?: () => void;
  currentUser: User | null;
  is2DAccessibleMode?: boolean;
  onToggle2DAccessible?: () => void;
}

export interface NavItem {
  id: AppPageTab | string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badge: string;
  badgeColor: string;
  action: () => void;
  isActive: boolean;
}

export interface NavPillar {
  id: string;
  label: string;
  shortLabel: string;
  icon: React.ReactNode;
  items: NavItem[];
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenAccountModal,
  onOpenTutorial,
  onOpenDevModal,
  onOpenLegalModal,
  onOpenFlashcards,
  onOpenErrorNotebook,
  currentUser,
  is2DAccessibleMode,
  onToggle2DAccessible,
}) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeMobilePillarId, setActiveMobilePillarId] = useState<string>('admision');
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState<boolean>(() =>
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  const navContainerRef = useRef<HTMLDivElement>(null);

  // Listener de conectividad IndexedDB offline-first
  useEffect(() => {
    const unsubscribe = addConnectivityListener((online) => {
      setIsOnline(online);
    });
    return () => unsubscribe();
  }, []);

  // Cerrar cualquier dropdown al hacer clic fuera o presionar Escape
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setOpenDropdownId(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdownId(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Helper para navegar y cerrar menús
  const navigateTo = (tab: AppPageTab) => {
    onSelectTab(tab);
    setOpenDropdownId(null);
    setIsMobileMenuOpen(false);
  };

  // ==========================================================================
  // ESTRUCTURA TAXONÓMICA: 5 PILARES ACADÉMICOS DE KUSKAT
  // ==========================================================================
  const PILLARS: NavPillar[] = [
    // ------------------------------------------------------------------------
    // PILAR 1: Admisión & Pruebas Nacionales
    // ------------------------------------------------------------------------
    {
      id: 'admision',
      label: 'Admisión & Pruebas',
      shortLabel: 'Admisión',
      icon: <GraduationCap className="w-3.5 h-3.5" />,
      items: [
        {
          id: 'categories',
          title: t('nav.categories'),
          subtitle: 'Malla curricular jerárquica y teoría académica oficial',
          icon: <FolderTree className="w-4 h-4 text-[#0B1B3D]" />,
          badge: 'Malla & Teoría',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('categories'),
          isActive: activeTab === 'categories',
        },
        {
          id: 'practice',
          title: t('nav.simulator'),
          subtitle: 'Simulador hasta 400 reactivos (UES, AVANZO, ASD, ENA, Docente)',
          icon: <Award className="w-4 h-4 text-[#9E472A]" />,
          badge: 'Examen & V/F',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('practice'),
          isActive: activeTab === 'practice',
        },
        {
          id: 'academic-reinforcement',
          title: 'Refuerzo Académico',
          subtitle: 'Acompañamiento curricular de 1° a 9° grado y bachillerato',
          icon: <GraduationCap className="w-4 h-4 text-[#0B1B3D]" />,
          badge: '1° Básico a Bach.',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('academic-reinforcement'),
          isActive: activeTab === 'academic-reinforcement',
        },
        {
          id: 'jovenes-talento',
          title: 'Jóvenes Talento UES / MINED',
          subtitle: 'Olimpiadas Nacionales ONM (Matemática, Física, Química, Biología)',
          icon: <Brain className="w-4 h-4 text-[#C59B27]" />,
          badge: 'Olimpiadas ONM',
          badgeColor: 'bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]',
          action: () => navigateTo('jovenes-talento'),
          isActive: activeTab === 'jovenes-talento',
        },
        {
          id: 'motionsites3d',
          title: t('nav.portal3d'),
          subtitle: 'Portal interactivo 3D y 2D de los 14 departamentos salvadoreños',
          icon: <Sparkles className="w-4 h-4 text-[#C59B27]" />,
          badge: '3D / 2D',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('motionsites3d'),
          isActive: activeTab === 'motionsites3d',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // PILAR 2: Habilitación Profesional & Leyes
    // ------------------------------------------------------------------------
    {
      id: 'leyes-salud',
      label: 'Habilitación & Leyes',
      shortLabel: 'Leyes & Salud',
      icon: <Scale className="w-3.5 h-3.5" />,
      items: [
        {
          id: 'notary-exam',
          title: 'Examen de Notario (CSJ)',
          subtitle: 'Suficiencia notarial ante la Corte Suprema de Justicia',
          icon: <Gavel className="w-4 h-4 text-[#0B1B3D]" />,
          badge: 'CSJ Notariado',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('notary-exam'),
          isActive: activeTab === 'notary-exam',
        },
        {
          id: 'residentado-medico',
          title: 'Residentado Médico ENAR',
          subtitle: 'Simulador de Posgrado Clínico (Medicina Interna, Cirugía, Pediatría, Gineco)',
          icon: <Stethoscope className="w-4 h-4 text-[#0B1B3D]" />,
          badge: 'Posgrado ENAR',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('residentado-medico'),
          isActive: activeTab === 'residentado-medico',
        },
        {
          id: 'cssp-health',
          title: 'Habilitación en Salud CSSP',
          subtitle: 'Simulador oficial para las 5 Juntas de Vigilancia (Médica, Odonto, Enf., Farm., Psico)',
          icon: <Activity className="w-4 h-4 text-[#1E7E34]" />,
          badge: '5 Juntas CSSP',
          badgeColor: 'bg-[#EBF7EE] text-[#1E7E34] border-[#C3E6CB]',
          action: () => navigateTo('cssp-health'),
          isActive: activeTab === 'cssp-health',
        },
        {
          id: 'ansp-ascenso',
          title: 'Ascensos PNC / ANSP',
          subtitle: 'Concurso de oposición para Cabos, Sargentos y Oficiales (Carrera Policial)',
          icon: <Shield className="w-4 h-4 text-[#0B1B3D]" />,
          badge: 'Cabo, Sarg., Ofic.',
          badgeColor: 'bg-[#EBF0FA] text-[#0B1B3D] border-[#D0DCF2]',
          action: () => navigateTo('ansp-ascenso'),
          isActive: activeTab === 'ansp-ascenso',
        },
        {
          id: 'derecho-administrativo',
          title: 'Derecho Administrativo (LPA) & Firma',
          subtitle: 'Procedimiento común, plazos perentorios, silencio administrativo y firma digital',
          icon: <Scale className="w-4 h-4 text-[#0B1B3D]" />,
          badge: 'LPA & MINEC',
          badgeColor: 'bg-[#EBF0FA] text-[#0B1B3D] border-[#D0DCF2]',
          action: () => navigateTo('derecho-administrativo'),
          isActive: activeTab === 'derecho-administrativo',
        },
        {
          id: 'constitution',
          title: 'Constitución y Ramas del Derecho',
          subtitle: 'Derecho Público y Privado con artículos literales, simplificados y comentados',
          icon: <Scale className="w-4 h-4 text-[#0B1B3D]" />,
          badge: 'Público & Privado',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('constitution'),
          isActive: activeTab === 'constitution',
        },
        {
          id: 'oral-litigation',
          title: 'Litigación Oral & Objeciones',
          subtitle: 'Simulador interactivo en sala de audiencias (Arts. 209-212 PrPn)',
          icon: <Gavel className="w-4 h-4 text-[#9E472A]" />,
          badge: 'Arts. 209-212 PrPn',
          badgeColor: 'bg-[#FDF2E9] text-[#9E472A] border-[#FADBD8]',
          action: () => navigateTo('oral-litigation'),
          isActive: activeTab === 'oral-litigation',
        },
        {
          id: 'compliance-financial',
          title: 'Cumplimiento AML & Seguros SSF',
          subtitle: 'Prevención de lavado de activos (UIF/FGR) e intermediación de seguros (SSF)',
          icon: <Shield className="w-4 h-4 text-[#0B1B3D]" />,
          badge: 'SSF / UIF-FGR',
          badgeColor: 'bg-[#EBF0FA] text-[#0B1B3D] border-[#D0DCF2]',
          action: () => navigateTo('compliance-financial'),
          isActive: activeTab === 'compliance-financial',
        },
        {
          id: 'salud-primaria',
          title: 'Atención Primaria & Farmacovigilancia',
          subtitle: 'Guías de Dengue, HTA, Diabetes Tipo 2 y Farmacovigilancia SRS/DNM',
          icon: <Stethoscope className="w-4 h-4 text-[#0B1B3D]" />,
          badge: 'MINSAL / SRS',
          badgeColor: 'bg-[#EBF7EE] text-[#1E7E34] border-[#C3E6CB]',
          action: () => navigateTo('salud-primaria'),
          isActive: activeTab === 'salud-primaria',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // PILAR 3: Formación Técnica & Ciencias
    // ------------------------------------------------------------------------
    {
      id: 'tecnica-ciencias',
      label: 'Técnica & Ciencias',
      shortLabel: 'Técnica',
      icon: <Wrench className="w-3.5 h-3.5" />,
      items: [
        {
          id: 'technical-courses',
          title: '10 Cursos Técnicos Vocacionales',
          subtitle: '400 horas teóricas (40h c/u): Electricidad, Soldadura, Cocina, Fontanería, Motos',
          icon: <Wrench className="w-4 h-4 text-[#9E472A]" />,
          badge: '10 Oficios 400h',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('technical-courses'),
          isActive: activeTab === 'technical-courses',
        },
        {
          id: 'siget-solar',
          title: 'Energía Solar & Electricidad SIGET',
          subtitle: 'Normativa NTCOGD (Acuerdo 343-E), NEC 690, anti-isla y categorías electricistas',
          icon: <Sun className="w-4 h-4 text-[#C59B27]" />,
          badge: 'SIGET / CNE',
          badgeColor: 'bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]',
          action: () => navigateTo('siget-solar'),
          isActive: activeTab === 'siget-solar',
        },
        {
          id: 'ingenieria-ciencias',
          title: 'Ciencias de Ingeniería & Cuantitativas',
          subtitle: 'Álgebra Lineal matricial, Trigonometría, Cónicas y Estática/Dinámica con KaTeX',
          icon: <Compass className="w-4 h-4 text-[#0B1B3D]" />,
          badge: 'Matemática & Física',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('ingenieria-ciencias'),
          isActive: activeTab === 'ingenieria-ciencias',
        },
        {
          id: 'formula-lab',
          title: 'Laboratorio de Fórmulas Interactivo',
          subtitle: 'Simulaciones numéricas de Poiseuille, pH, cinemática y farmacocinética',
          icon: <FlaskConical className="w-4 h-4 text-[#9E472A]" />,
          badge: 'Simulación Lab',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('formula-lab'),
          isActive: activeTab === 'formula-lab',
        },
        {
          id: 'driver-license',
          title: 'Licencias de Conducir (VMT)',
          subtitle: 'Examen Teórico (VMT/SERTRACEN) y Psicológico de manejo defensivo',
          icon: <Car className="w-4 h-4 text-[#0B1B3D]" />,
          badge: 'VMT / Tránsito',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('driver-license'),
          isActive: activeTab === 'driver-license',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // PILAR 4: Idiomas & Cultura Cívica
    // ------------------------------------------------------------------------
    {
      id: 'idiomas-civica',
      label: 'Idiomas & Cívica',
      shortLabel: 'Idiomas',
      icon: <Languages className="w-3.5 h-3.5" />,
      items: [
        {
          id: 'languages',
          title: t('nav.languages'),
          subtitle: 'Escuela de Idiomas Kuskat: 7 lenguas, 840 clases y corpus MCER A1-C2',
          icon: <Languages className="w-4 h-4 text-[#1E3A8A]" />,
          badge: '7 Lenguas MCER',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('languages'),
          isActive: activeTab === 'languages',
        },
        {
          id: 'patriotic-history',
          title: 'Símbolos Patrios e Historia',
          subtitle: 'Símbolos nacionales de El Salvador e historial objetivo de presidentes',
          icon: <Flag className="w-4 h-4 text-[#0B1B3D]" />,
          badge: 'Cívica & Historia',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('patriotic-history'),
          isActive: activeTab === 'patriotic-history',
        },
        {
          id: 'central-america',
          title: 'Mapa de Centroamérica',
          subtitle: 'Geopolítica de las 7 naciones del istmo y división departamental',
          icon: <Globe2 className="w-4 h-4 text-[#0B1B3D]" />,
          badge: '7 Naciones',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('central-america'),
          isActive: activeTab === 'central-america',
        },
      ],
    },

    // ------------------------------------------------------------------------
    // PILAR 5: Herramientas & OMR
    // ------------------------------------------------------------------------
    {
      id: 'herramientas',
      label: 'Herramientas & OMR',
      shortLabel: 'Herramientas',
      icon: <FileCode className="w-3.5 h-3.5" />,
      items: [
        {
          id: 'latex',
          title: t('nav.latex'),
          subtitle: 'Exportador TeX profesional y Hojas de Respuestas OMR (50/100 burbujas)',
          icon: <FileCode className="w-4 h-4 text-[#1E293B]" />,
          badge: 'LaTeX / OMR',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('latex'),
          isActive: activeTab === 'latex',
        },
        {
          id: 'one-page-sheets',
          title: 'Hojas Mnemotécnicas (1 Pág. LaTeX)',
          subtitle: 'Fichas ejecutivas compilables de 1 sola página US Letter para repaso rápido',
          icon: <FileText className="w-4 h-4 text-[#0B1B3D]" />,
          badge: '1 Pág. LaTeX',
          badgeColor: 'bg-[#F4F3ED] text-[#1E293B] border-[#E2E0D5]',
          action: () => navigateTo('one-page-sheets'),
          isActive: activeTab === 'one-page-sheets',
        },
        {
          id: 'flashcards',
          title: 'Flashcards Nemotécnicas (FSRS v4.5)',
          subtitle: 'Repetición espaciada inteligente con mazos de Medicina, Leyes y Fórmulas',
          icon: <Brain className="w-4 h-4 text-[#C59B27]" />,
          badge: 'FSRS v4.5',
          badgeColor: 'bg-[#FBF4E8] text-[#946200] border-[#F2DEB6]',
          action: () => {
            if (onOpenFlashcards) onOpenFlashcards();
            setOpenDropdownId(null);
            setIsMobileMenuOpen(false);
          },
          isActive: false,
        },
        {
          id: 'error-notebook',
          title: 'Cuaderno Inteligente de Errores',
          subtitle: 'Remediación deliberada de preguntas falladas hasta lograr maestría',
          icon: <FolderTree className="w-4 h-4 text-[#0B1B3D]" />,
          badge: 'FSRS Remediación',
          badgeColor: 'bg-[#FAF9F5] text-[#0B1B3D] border-[#C59B27]/40',
          action: () => {
            if (onOpenErrorNotebook) onOpenErrorNotebook();
            setOpenDropdownId(null);
            setIsMobileMenuOpen(false);
          },
          isActive: false,
        },
      ],
    },
  ];

  // Helper para determinar si un pilar contiene la pestaña actualmente activa
  const isPillarActive = (pillar: NavPillar) => {
    return pillar.items.some((item) => item.isActive);
  };

  const toggleDropdown = (pillarId: string) => {
    setOpenDropdownId((prev) => (prev === pillarId ? null : pillarId));
  };

  return (
    <>
      {/* ==================================================================== */}
      {/* 1. CINTILLO SUPERIOR INFORMATIVO INSTITUCIONAL */}
      {/* ==================================================================== */}
      <div className="bg-[#0B1B3D] text-[#E2E8F0] text-[10px] sm:text-xs py-1.5 px-3 sm:px-6 lg:px-8 border-b border-[#1A2E5A] font-sans-ui">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center sm:justify-start">
            <span className="px-2.5 py-0.5 rounded bg-[#132A5C] text-[#C59B27] font-bold border border-[#C59B27]/30 text-[9px] sm:text-[10px] uppercase tracking-wider shrink-0 font-mono">
              Plataforma Oficial
            </span>
            <span className="font-medium text-[#CBD5E1]">
              KUSKAT: Sistema Académico Intercultural y Banco Maestro de Evaluación.
            </span>
            {!isOnline && (
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 text-[9px] uppercase tracking-wider shrink-0 font-mono flex items-center gap-1">
                <WifiOff className="w-3 h-3 text-amber-400" />
                <span>Offline DB Activo</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 text-[#94A3B8] font-medium text-[10px] sm:text-xs shrink-0">
            <a
              href="https://wa.me/50376574463?text=Hola%20KUSKAT,%20estoy%20estudiando%20desde%20tu%20app%20de%20estudio%20:)"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
              title="WhatsApp KUSKAT: +503 7657 4463"
            >
              <span className="text-[#34D399] font-bold font-mono">WhatsApp:</span>
              <span className="font-mono text-[#F1F5F9]">+503 7657 4463</span>
            </a>
            <span className="text-[#334155] hidden sm:inline">•</span>
            <a
              href="https://instagram.com/Kuskat.es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F472B6] flex items-center gap-1 transition-colors"
              title="Instagram: @Kuskat.es"
            >
              <span className="text-[#F472B6] font-bold">Instagram:</span>
              <span className="text-[#F1F5F9]">@Kuskat.es</span>
            </a>
            <span className="text-[#334155] hidden md:inline">•</span>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hidden md:flex hover:text-[#93C5FD] items-center gap-1 transition-colors cursor-pointer text-[#94A3B8]"
              title="Marco legal, privacidad y normativas salvadoreñas"
            >
              <Scale className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Legal y Privacidad</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 2. ENCABEZADO PRINCIPAL INSTITUCIONAL (Z-INDEX 40)                   */}
      {/* ==================================================================== */}
      <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-[#E5E3D8] shadow-corporate-subtle font-sans-ui">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo y Nombre del Proyecto */}
          <div
            onClick={() => navigateTo('motionsites3d')}
            className="flex items-center gap-2 sm:gap-3 min-w-0 cursor-pointer select-none group shrink-0"
            title="Ir al Portal 3D Principal"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FAF9F5] border border-[#E5E3D8] shadow-corporate-subtle flex items-center justify-center p-1.5 shrink-0 overflow-hidden group-hover:border-[#0B1B3D] transition-colors">
              <img
                src="/kuskat_logo.png"
                alt="Logo KUSKAT"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-xl sm:text-2xl font-black text-[#0B1B3D] tracking-tight font-editorial truncate group-hover:text-[#132A5C] transition-colors">
                  KUSKAT
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-[#0B1B3D] bg-[#F4F3ED] px-1.5 sm:px-2 py-0.5 rounded border border-[#E2E0D5] shrink-0 font-mono uppercase tracking-wider">
                  Académico
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-[#5C6578] font-medium truncate hidden 2xl:block">
                {t('app.subtitle')}
              </p>
            </div>
          </div>

          {/* ================================================================ */}
          {/* NAVEGACIÓN EN ESCRITORIO / LAPTOP: 5 PILARES ACADÉMICOS (Z-50)   */}
          {/* ================================================================ */}
          <div
            ref={navContainerRef}
            className="hidden lg:flex items-center gap-1.5 xl:gap-2 min-w-0"
          >
            <nav
              aria-label="Navegación principal por pilares académicos"
              className="flex items-center bg-[#F2F1EA] p-1 rounded-xl text-xs font-semibold text-[#4A5568] gap-1 border border-[#E5E3D8]"
            >
              {PILLARS.map((pillar, pillarIndex) => {
                const isPillarCurrent = isPillarActive(pillar);
                const isDropdownOpen = openDropdownId === pillar.id;

                // Alineación direccional inteligente: los pilares de la derecha abren hacia la izquierda (right-0)
                // para que jamás sobresalgan del lateral de la página
                const dropdownAlignmentClass =
                  pillarIndex === 0 || pillarIndex === 1
                    ? 'left-0'
                    : pillarIndex === 2
                    ? 'left-1/2 -translate-x-1/2'
                    : 'right-0';

                return (
                  <div key={pillar.id} className="relative">
                    <button
                      type="button"
                      onClick={() => toggleDropdown(pillar.id)}
                      className={`flex items-center gap-1 px-2 xl:px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        isPillarCurrent
                          ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
                          : isDropdownOpen
                          ? 'bg-white text-[#0B1B3D] shadow-xs'
                          : 'text-[#2D3748] hover:text-[#0B1B3D] hover:bg-white/70'
                      }`}
                      aria-expanded={isDropdownOpen}
                      aria-haspopup="true"
                      title={pillar.label}
                    >
                      <span>{pillar.icon}</span>
                      <span className="hidden xl:inline">{pillar.label}</span>
                      <span className="inline xl:hidden">{pillar.shortLabel}</span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform ${
                          isDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Menú Desplegable Inteligente con Anclaje Inward y Límite Responsivo (Z-INDEX 50) */}
                    {isDropdownOpen && (
                      <div
                        className={`absolute ${dropdownAlignmentClass} mt-2 w-80 xl:w-88 max-w-[calc(100vw-2rem)] rounded-2xl bg-white border border-[#E5E3D8] shadow-corporate-elevated p-2.5 z-50 space-y-1 animate-fade-in max-h-[75vh] overflow-y-auto touch-scroll`}
                      >
                        <div className="px-3 py-2 border-b border-[#EAE8DD] flex items-center justify-between">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B1B3D] flex items-center gap-1.5">
                            {pillar.icon}
                            <span>{pillar.label}</span>
                          </span>
                          <span className="text-[9.5px] font-mono font-bold bg-[#F4F3ED] text-[#0B1B3D] px-2 py-0.5 rounded border border-[#E2E0D5]">
                            {pillar.items.length} módulos
                          </span>
                        </div>

                        <div className="space-y-1 pt-1">
                          {pillar.items.map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={item.action}
                              className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                                item.isActive
                                  ? 'bg-[#F4F3ED] border-[#0B1B3D] text-[#0B1B3D] font-bold shadow-corporate-subtle'
                                  : 'bg-white border-transparent hover:bg-[#FAF9F5] hover:border-[#E5E3D8] text-[#2D3748]'
                              }`}
                            >
                              <div className="w-7 h-7 rounded-lg bg-[#FAF9F5] border border-[#E5E3D8] flex items-center justify-center shrink-0 mt-0.5">
                                {item.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-xs font-bold truncate text-[#0B1B3D]">
                                    {item.title}
                                  </span>
                                  <span
                                    className={`text-[8.5px] font-bold font-mono px-1.5 py-0.5 rounded border shrink-0 ${item.badgeColor}`}
                                  >
                                    {item.badge}
                                  </span>
                                </div>
                                <p className="text-[10px] text-[#5C6578] font-normal line-clamp-1 leading-snug pt-0.5">
                                  {item.subtitle}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Alternar 2D/3D si aplica (sólo en pestaña de portal) */}
            {onToggle2DAccessible && activeTab === 'motionsites3d' && (
              <button
                type="button"
                onClick={onToggle2DAccessible}
                className="flex items-center gap-1 px-2 py-1.5 rounded-lg border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-all cursor-pointer shadow-2xs"
                title="Alternar entre mapa interactivo 3D y vista accesible 2D"
              >
                {is2DAccessibleMode ? (
                  <>
                    <Box className="w-3.5 h-3.5 text-amber-700" />
                    <span>3D</span>
                  </>
                ) : (
                  <>
                    <Grid className="w-3.5 h-3.5 text-amber-700" />
                    <span>2D</span>
                  </>
                )}
              </button>
            )}

            {/* Selector de Idioma Intercultural */}
            <LanguageSwitcher variant="compact" />

            {/* Botón de Cuenta */}
            <button
              type="button"
              onClick={onOpenAccountModal}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                currentUser
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                  : 'border-[#0B1B3D]/30 bg-[#FAF9F5] text-[#0B1B3D] hover:bg-[#F2F1EA]'
              }`}
              title={currentUser ? `Cuenta activa: ${currentUser.username}` : 'Iniciar sesión o ver notas'}
            >
              <UserCheck className="w-3.5 h-3.5 text-blue-600" />
              {currentUser ? (
                <span className="flex items-center gap-1">
                  <span className="truncate max-w-[80px]">{currentUser.username}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </span>
              ) : (
                <span>{t('nav.account')}</span>
              )}
            </button>
          </div>

          {/* ================================================================ */}
          {/* CABECERA MÓVIL Y TABLET (< lg)                                   */}
          {/* ================================================================ */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            {/* Alternar 2D/3D si aplica en móvil */}
            {onToggle2DAccessible && activeTab === 'motionsites3d' && (
              <button
                type="button"
                onClick={onToggle2DAccessible}
                className="p-2 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 text-xs font-bold cursor-pointer"
                title="Alternar 2D / 3D"
              >
                {is2DAccessibleMode ? <Box className="w-4 h-4" /> : <Grid className="w-4 h-4" />}
              </button>
            )}

            <LanguageSwitcher variant="compact" />

            <button
              type="button"
              onClick={onOpenAccountModal}
              className={`p-2 rounded-xl border text-xs font-bold cursor-pointer transition-colors ${
                currentUser
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                  : 'border-slate-300 bg-slate-50 text-slate-800'
              }`}
              title={currentUser ? currentUser.username : t('nav.account')}
              aria-label={t('nav.account')}
            >
              <UserCheck className="w-4 h-4 text-blue-600" />
            </button>

            {/* Botón de Menú Móvil */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0B1B3D] text-white font-bold text-xs cursor-pointer shadow-corporate-subtle focus-visible:outline-none"
              aria-label="Abrir menú de navegación"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <>
                  <X className="w-4 h-4 text-amber-400" />
                  <span>Cerrar</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 text-amber-400" />
                  <span>Menú</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ================================================================== */}
        {/* CAJÓN DESPLEGABLE MÓVIL / TABLET CON 5 PILARES (Z-INDEX 60)         */}
        {/* ================================================================== */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop para cerrar al tocar fuera */}
            <div
              className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <div className="lg:hidden relative z-60 border-t border-[#E5E3D8] bg-white/98 backdrop-blur-xl p-3 sm:p-4 shadow-corporate-elevated animate-fade-in max-h-[82vh] overflow-y-auto touch-scroll space-y-3">
              {/* Selector de Pestañas de Pilares en Móvil */}
              <div className="flex items-center gap-1 overflow-x-auto touch-scroll pb-2 border-b border-[#EAE8DD]">
                {PILLARS.map((pillar) => {
                  const isSelected = activeMobilePillarId === pillar.id;
                  const isPillarCurrent = isPillarActive(pillar);

                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      onClick={() => setActiveMobilePillarId(pillar.id)}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#0B1B3D] text-[#FAF9F5] shadow-corporate-subtle'
                          : isPillarCurrent
                          ? 'bg-[#F4F3ED] text-[#0B1B3D] border border-[#0B1B3D]/30'
                          : 'bg-[#FAF9F5] text-[#4A5568] hover:bg-[#F2F1EA]'
                      }`}
                    >
                      <span>{pillar.icon}</span>
                      <span>{pillar.shortLabel}</span>
                    </button>
                  );
                })}
              </div>

              {/* Lista de Módulos del Pilar Seleccionado */}
              {(() => {
                const currentPillar =
                  PILLARS.find((p) => p.id === activeMobilePillarId) || PILLARS[0];

                return (
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between px-1 pb-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0B1B3D] flex items-center gap-1.5">
                        {currentPillar.icon}
                        <span>{currentPillar.label}</span>
                      </span>
                      <span className="text-[10px] font-mono font-bold bg-[#F4F3ED] text-[#0B1B3D] px-2 py-0.5 rounded border border-[#E2E0D5]">
                        {currentPillar.items.length} opciones
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentPillar.items.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={item.action}
                          className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 min-h-[54px] ${
                            item.isActive
                              ? 'bg-[#F4F3ED] border-[#0B1B3D] text-[#0B1B3D] font-bold shadow-corporate-subtle'
                              : 'bg-[#FAF9F5] border-[#E5E3D8] text-[#2D3748] hover:bg-white'
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E3D8] flex items-center justify-center shrink-0 mt-0.5 shadow-corporate-subtle">
                            {item.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-bold truncate text-[#0B1B3D]">
                                {item.title}
                              </span>
                              <span
                                className={`text-[8.5px] font-bold font-mono px-1.5 py-0.5 rounded border shrink-0 ${item.badgeColor}`}
                              >
                                {item.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#5C6578] font-normal line-clamp-1 leading-snug pt-0.5">
                              {item.subtitle}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Accesos rápidos de contacto y legal en el menú móvil */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                <button
                  type="button"
                  onClick={() => {
                    onOpenTutorial();
                    setIsMobileMenuOpen(false);
                  }}
                  className="inline-flex items-center gap-1.5 text-blue-700 font-bold hover:underline cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Ver Guía Tutorial</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onOpenLegalModal('terms');
                    setIsMobileMenuOpen(false);
                  }}
                  className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  <Scale className="w-3.5 h-3.5 text-slate-500" />
                  <span>Marco Legal</span>
                </button>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

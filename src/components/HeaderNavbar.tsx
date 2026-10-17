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
  Layers,
  MessageCircle,
  Instagram,
  ExternalLink,
  BookOpen,
  Grid,
  Box,
} from 'lucide-react';
import { useTranslation } from '../i18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import { User } from '../types/auth';
import type { LegalTab } from './LegalModal';

export type AppPageTab = 'motionsites3d' | 'categories' | 'practice' | 'latex' | 'languages';

export interface HeaderNavbarProps {
  activeTab: AppPageTab;
  onSelectTab: (tab: AppPageTab) => void;
  onOpenAccountModal: () => void;
  onOpenTutorial: () => void;
  onOpenDevModal: () => void;
  onOpenLegalModal: (tab?: LegalTab) => void;
  currentUser: User | null;
  /**
   * Opcional: si estamos en la vista 3D y queremos permitir alternar a vista 2D accesible desde la barra
   */
  is2DAccessibleMode?: boolean;
  onToggle2DAccessible?: () => void;
}

export const HeaderNavbar: React.FC<HeaderNavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenAccountModal,
  onOpenTutorial,
  onOpenDevModal,
  onOpenLegalModal,
  currentUser,
  is2DAccessibleMode,
  onToggle2DAccessible,
}) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar dropdown al hacer clic fuera o presionar Escape
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsPagesDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPagesDropdownOpen(false);
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

  // Lista exhaustiva de todas las páginas y módulos de APP-KUSKAT
  const ALL_PAGES = [
    {
      id: 'motionsites3d',
      title: t('nav.portal3d'),
      subtitle: 'Mapa 3D interactivo y alternativa 2D accesible de los 14 departamentos de El Salvador',
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
      badge: '3D / 2D',
      badgeColor: 'bg-indigo-100 text-indigo-900 border-indigo-200',
      action: () => {
        onSelectTab('motionsites3d');
        setIsMobileMenuOpen(false);
        setIsPagesDropdownOpen(false);
      },
      isActive: activeTab === 'motionsites3d',
    },
    {
      id: 'categories',
      title: t('nav.categories'),
      subtitle: 'Malla curricular jerárquica, teoría oficial APA 7.ª Edición y Modo Aprender Español',
      icon: <FolderTree className="w-4 h-4 text-blue-600" />,
      badge: 'Malla & Teoría',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
      action: () => {
        onSelectTab('categories');
        setIsMobileMenuOpen(false);
        setIsPagesDropdownOpen(false);
      },
      isActive: activeTab === 'categories',
    },
    {
      id: 'practice',
      title: t('nav.simulator'),
      subtitle: 'Simulador hasta 400 preguntas, evaluación V/F u Opción Múltiple y remediación inmediata',
      icon: <Award className="w-4 h-4 text-amber-500" />,
      badge: 'Examen & V/F',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
      action: () => {
        onSelectTab('practice');
        setIsMobileMenuOpen(false);
        setIsPagesDropdownOpen(false);
      },
      isActive: activeTab === 'practice',
    },
    {
      id: 'languages',
      title: t('nav.languages'),
      subtitle: 'Escuela de Idiomas Kuskat: 7 lenguas, 840 clases, 16,800 reactivos y corpus MCER A1-C2',
      icon: <Languages className="w-4 h-4 text-emerald-600" />,
      badge: '7 Lenguas MCER',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      action: () => {
        onSelectTab('languages');
        setIsMobileMenuOpen(false);
        setIsPagesDropdownOpen(false);
      },
      isActive: activeTab === 'languages',
    },
    {
      id: 'latex',
      title: t('nav.latex'),
      subtitle: 'Exportador y compilador TeX profesional para exámenes impresos y Overleaf',
      icon: <FileCode className="w-4 h-4 text-slate-700" />,
      badge: 'Exportador',
      badgeColor: 'bg-slate-200 text-slate-800 border-slate-300',
      action: () => {
        onSelectTab('latex');
        setIsMobileMenuOpen(false);
        setIsPagesDropdownOpen(false);
      },
      isActive: activeTab === 'latex',
    },
    {
      id: 'account',
      title: t('nav.account'),
      subtitle: 'Cuentas nativas seguras, historial completo de exámenes y ranking nacional KUSKAT',
      icon: <UserCheck className="w-4 h-4 text-blue-600" />,
      badge: currentUser ? currentUser.username : 'Perfil & Notas',
      badgeColor: currentUser ? 'bg-emerald-100 text-emerald-900 border-emerald-200' : 'bg-blue-100 text-blue-900 border-blue-200',
      action: () => {
        onOpenAccountModal();
        setIsMobileMenuOpen(false);
        setIsPagesDropdownOpen(false);
      },
      isActive: false,
    },
    {
      id: 'tutorial',
      title: t('nav.tutorial'),
      subtitle: 'Guía tutorial interactiva en 6 pasos para dominar todas las herramientas del proyecto',
      icon: <HelpCircle className="w-4 h-4 text-blue-600" />,
      badge: 'Guía 6 Pasos',
      badgeColor: 'bg-purple-100 text-purple-900 border-purple-200',
      action: () => {
        onOpenTutorial();
        setIsMobileMenuOpen(false);
        setIsPagesDropdownOpen(false);
      },
      isActive: false,
    },
    {
      id: 'creator',
      title: `${t('nav.creator')}: Yeferson E. Perez`,
      subtitle: 'Información biográfica, propósito educativo, canales directos y redes del creador',
      icon: (
        <div className="w-4 h-4 rounded-full overflow-hidden border border-amber-400 shrink-0">
          <img src="/yeferson_perez.jpg" alt="Yeferson E. Perez" className="w-full h-full object-cover" />
        </div>
      ),
      badge: 'Creador',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
      action: () => {
        onOpenDevModal();
        setIsMobileMenuOpen(false);
        setIsPagesDropdownOpen(false);
      },
      isActive: false,
    },
    {
      id: 'legal',
      title: 'Marco Legal & Privacidad',
      subtitle: 'Términos de servicio, política de privacidad y cumplimiento normativo de El Salvador',
      icon: <Scale className="w-4 h-4 text-blue-600" />,
      badge: 'Leyes El Salvador',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      action: () => {
        onOpenLegalModal('terms');
        setIsMobileMenuOpen(false);
        setIsPagesDropdownOpen(false);
      },
      isActive: false,
    },
  ];

  return (
    <>
      {/* ==================================================================== */}
      {/* 1. CINTILLO SUPERIOR INFORMATIVO */}
      {/* ==================================================================== */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 text-white text-[10px] sm:text-xs py-1.5 px-3 sm:px-6 lg:px-8 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center sm:justify-start">
            <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30 text-[9px] sm:text-[10px] uppercase tracking-wider animate-pulse shrink-0">
              En Desarrollo
            </span>
            <span className="font-medium text-slate-200">
              Trabajando en material de medicina. Los anuncios que contiene la página es un pequeño aporte a mis estudios universitarios.
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
              <span className="text-emerald-400 font-bold">WhatsApp:</span>
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
              onClick={() => onOpenLegalModal('terms')}
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
      {/* 2. ENCABEZADO PRINCIPAL (HEADER CON MENÚ COMPLETO DE PÁGINAS) */}
      {/* ==================================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo y Nombre del Proyecto */}
          <div
            onClick={() => onSelectTab('motionsites3d')}
            className="flex items-center gap-2 sm:gap-3 min-w-0 cursor-pointer select-none group"
            title="Ir al Portal 3D Principal"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center p-1 shrink-0 overflow-hidden group-hover:border-blue-400 transition-colors">
              <img
                src="/kuskat_logo.png"
                alt="Logo KUSKAT"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight font-montenegrin truncate group-hover:text-blue-700 transition-colors">
                  KUSKAT
                </span>
                <span className="text-[9px] sm:text-xs font-bold text-blue-700 bg-blue-50 px-1.5 sm:px-2 py-0.5 rounded-md border border-blue-200 shrink-0">
                  Banco Maestro
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate hidden xs:block sm:block font-caslon">
                {t('app.subtitle')}
              </p>
            </div>
          </div>

          {/* Menú de Páginas Completo (Versión Escritorio) */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap justify-end shrink-0">
            {/* Pestañas Principales */}
            <nav
              aria-label="Navegación principal de páginas"
              className="flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600 gap-0.5"
            >
              <button
                type="button"
                onClick={() => onSelectTab('motionsites3d')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'motionsites3d'
                    ? 'bg-slate-900 text-[#F8DCCB] shadow-xs font-bold'
                    : 'text-indigo-900 bg-indigo-50/70 hover:bg-indigo-100 font-bold border border-indigo-200/50'
                }`}
                title="Entrar al portal 3D interactivo con mapa de El Salvador"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                <span>{t('nav.portal3d')}</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectTab('categories')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'categories'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
                title="Malla Curricular Jerárquica y Teoría Oficial"
              >
                <FolderTree className="w-3.5 h-3.5 text-blue-600" />
                <span>{t('nav.categories')}</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectTab('practice')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'practice'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
                title="Simulador de Examen (Opción Múltiple y Verdadero/Falso)"
              >
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>{t('nav.simulator')}</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectTab('languages')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'languages'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
                title="Escuela de Idiomas Kuskat: 7 Lenguas MCER A1 a C2"
              >
                <Languages className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t('nav.languages')}</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectTab('latex')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'latex'
                    ? 'bg-white text-slate-900 shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
                title="Compilador y Exportador LaTeX"
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>{t('nav.latex')}</span>
              </button>
            </nav>

            {/* Menú Desplegable "Todas las Páginas" */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsPagesDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-blue-200 bg-blue-50/70 hover:bg-blue-100 text-blue-950 text-xs font-bold transition-all cursor-pointer shadow-2xs"
                title="Desplegar menú con todas las páginas y secciones del proyecto"
                aria-expanded={isPagesDropdownOpen}
                aria-haspopup="true"
              >
                <Layers className="w-3.5 h-3.5 text-blue-700" />
                <span>Todas las Páginas</span>
                <ChevronDown className={`w-3 h-3 text-blue-700 transition-transform ${isPagesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isPagesDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white border border-slate-200 shadow-2xl p-3 z-50 space-y-1.5 animate-fade-in">
                  <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 font-mono">
                      Menú de Páginas ({ALL_PAGES.length})
                    </span>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                      Navegación Total
                    </span>
                  </div>

                  <div className="max-h-96 overflow-y-auto space-y-1 touch-scroll pr-1">
                    {ALL_PAGES.map((page) => (
                      <button
                        key={page.id}
                        type="button"
                        onClick={page.action}
                        className={`w-full text-left p-2.5 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                          page.isActive
                            ? 'bg-blue-50 border-blue-500 text-blue-950 font-bold shadow-xs'
                            : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200 text-slate-700'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                          {page.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-extrabold truncate text-slate-900">
                              {page.title}
                            </span>
                            <span className={`text-[9px] font-bold font-mono px-1.5 py-0.5 rounded border shrink-0 ${page.badgeColor}`}>
                              {page.badge}
                            </span>
                          </div>
                          <p className="text-[10.5px] text-slate-500 font-normal line-clamp-1 leading-snug">
                            {page.subtitle}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Alternar 2D/3D si aplica */}
            {onToggle2DAccessible && (
              <button
                type="button"
                onClick={onToggle2DAccessible}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold transition-all cursor-pointer shadow-2xs"
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
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                currentUser
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                  : 'border-blue-300 bg-blue-50 text-blue-900 hover:bg-blue-100'
              }`}
              title={currentUser ? `Cuenta activa: ${currentUser.username}` : 'Iniciar sesión o ver notas'}
            >
              <UserCheck className="w-3.5 h-3.5 text-blue-600" />
              {currentUser ? (
                <span className="flex items-center gap-1.5">
                  <span className="truncate max-w-[90px]">{currentUser.username}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </span>
              ) : (
                <span>{t('nav.account')}</span>
              )}
            </button>
          </div>

          {/* Menú de Cabecera para Tablets y Móviles */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            {/* Selector de idioma compacto en móvil */}
            <LanguageSwitcher variant="compact" />

            {/* Botón de Cuenta en móvil */}
            <button
              type="button"
              onClick={onOpenAccountModal}
              className={`p-2 rounded-xl border text-xs font-bold cursor-pointer transition-colors ${
                currentUser
                  ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                  : 'border-blue-300 bg-blue-50 text-blue-900'
              }`}
              title={currentUser ? currentUser.username : t('nav.account')}
              aria-label={t('nav.account')}
            >
              <UserCheck className="w-4 h-4 text-blue-600" />
            </button>

            {/* Botón de Menú de Páginas (Abre el cajón completo en el encabezado) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-900 text-white font-bold text-xs cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              aria-label="Abrir menú de páginas del encabezado"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <>
                  <X className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Cerrar</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 text-amber-400" />
                  <span className="font-caslon">Menú</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ================================================================== */}
        {/* CAJÓN DESPLEGABLE EN EL ENCABEZADO CON TODAS LAS PÁGINAS (MÓVIL / TABLET) */}
        {/* ================================================================== */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl p-4 space-y-4 shadow-2xl animate-fade-in max-h-[80vh] overflow-y-auto touch-scroll">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Menú de Páginas KUSKAT</span>
              </span>
              <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                {ALL_PAGES.length} Páginas Disponibles
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ALL_PAGES.map((page) => (
                <button
                  key={page.id}
                  type="button"
                  onClick={page.action}
                  className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 min-h-[52px] ${
                    page.isActive
                      ? 'bg-blue-50 border-blue-600 text-blue-950 font-bold shadow-xs ring-1 ring-blue-500/20'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    {page.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-extrabold truncate text-slate-900">
                        {page.title}
                      </span>
                      <span className={`text-[8.5px] font-bold font-mono px-1.5 py-0.5 rounded border shrink-0 ${page.badgeColor}`}>
                        {page.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-normal line-clamp-1 leading-snug pt-0.5">
                      {page.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Accesos rápidos de contacto y legal en el menú del encabezado */}
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
        )}
      </header>
    </>
  );
};

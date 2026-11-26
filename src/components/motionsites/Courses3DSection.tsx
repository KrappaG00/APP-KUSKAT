import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  BookOpen,
  Brain,
  Scale,
  Stethoscope,
  Shield,
  FlaskConical,
  Car,
  Globe2,
  Search,
  Filter,
  Sparkles,
  CheckCircle2,
  Bookmark,
  Award,
  Sprout,
  ClipboardCheck,
} from 'lucide-react';
import { Institution } from '../../data';
import { AppPageTab } from '../HeaderNavbar';

export type PillarCategory =
  | 'all'
  | 'admision-educacion'
  | 'profesional-vial'
  | 'idiomas'
  | 'ciencias';

export type PortalNavigationTarget =
  | { tab: 'categories'; institution: Institution }
  | { tab: 'practice'; institution: Institution }
  | { tab: 'jovenes-talento'; jovenesTalentoTab: 'theory' | 'drills' }
  | { tab: 'ansp-ascenso'; anspExamMode: boolean }
  | { tab: 'academic-reinforcement'; academicMode: 'study' | 'test' }
  | { tab: 'notary-exam'; notaryTab: 'study-units' | 'jurisprudence' | 'interactive-study' | 'simulator' }
  | { tab: 'residentado-medico'; residentadoTab: 'thematic_units' | 'solved_cases' | 'simulator' | 'branching_cases' }
  | { tab: 'driver-license'; driverSubTab: 'study' | 'cases' | 'signs' | 'quiz' }
  | {
      tab: 'languages';
      languageId: string;
      languageMainTab: 'theory' | 'basics' | 'vocabulary10k' | 'verbs' | 'comparative' | 'exam' | 'references';
    }
  | { tab: 'formula-lab'; formulaLabMode: 'lab' | 'test' };

export interface ProjectAreaItem {
  id: string;
  title: string;
  pillar: PillarCategory;
  institutionAuthority: string;
  metricBadge: string;
  featureTag: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  accentBorder: string;
  studyTarget: PortalNavigationTarget;
  testTarget: PortalNavigationTarget;
  studyTab: AppPageTab;
  testTab: AppPageTab;
}

export interface Courses3DSectionProps {
  onNavigateArea?: (target: PortalNavigationTarget) => void;
}

export const AREAS_CATALOG: ProjectAreaItem[] = [
  // ========================================================================
  // PILAR 1: ADMISIÓN Y EDUCACIÓN (6 ÁREAS)
  // ========================================================================
  {
    id: 'area-ues',
    title: 'UES',
    pillar: 'admision-educacion',
    institutionAuthority: 'Universidad de El Salvador (UES)',
    metricBadge: '7,500 Reactivos Oficiales',
    featureTag: 'Fase I & Fase II • 25 Subtemas',
    description:
      'Preparación integral para el Examen de Admisión de la Universidad de El Salvador en Matemática, Ciencias Naturales, Estudios Sociales y Lenguaje y Literatura con solucionarios en KaTeX.',
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    gradient: 'from-blue-700 via-indigo-700 to-blue-800',
    accentBorder: 'border-blue-500/30',
    studyTarget: { tab: 'categories', institution: 'UES' },
    testTarget: { tab: 'practice', institution: 'UES' },
    studyTab: 'categories',
    testTab: 'practice',
  },
  {
    id: 'area-avanzo',
    title: 'AVANZO',
    pillar: 'admision-educacion',
    institutionAuthority: 'MINED • Prueba Nacional',
    metricBadge: '3,000 Reactivos Oficiales',
    featureTag: '5 Áreas de Bachillerato',
    description:
      'Banco estructurado y simulador cronometrado para la Prueba Nacional AVANZO de Educación Media en Matemática, Lenguaje, Ciencias Naturales, Estudios Sociales e Inglés.',
    icon: <BookOpen className="w-5 h-5 text-white" />,
    gradient: 'from-indigo-700 via-purple-700 to-indigo-800',
    accentBorder: 'border-indigo-500/30',
    studyTarget: { tab: 'categories', institution: 'AVANZO' },
    testTarget: { tab: 'practice', institution: 'AVANZO' },
    studyTab: 'categories',
    testTab: 'practice',
  },
  {
    id: 'area-mined',
    title: 'MINED',
    pillar: 'admision-educacion',
    institutionAuthority: 'MINED • ESMATE & ESLENGUA',
    metricBadge: '97 Unidades • 112 Lecciones',
    featureTag: '1.° Grado a 2.° Bachillerato',
    description:
      'Refuerzo escolar oficial del Ministerio de Educación con libros de texto, teoría sustantiva, 560 casos prácticos resueltos paso a paso y simuladores por unidad.',
    icon: <BookOpen className="w-5 h-5 text-white" />,
    gradient: 'from-sky-700 via-blue-700 to-indigo-800',
    accentBorder: 'border-sky-500/30',
    studyTarget: { tab: 'academic-reinforcement', academicMode: 'study' },
    testTarget: { tab: 'academic-reinforcement', academicMode: 'test' },
    studyTab: 'academic-reinforcement',
    testTab: 'academic-reinforcement',
  },
  {
    id: 'area-ena',
    title: 'ENA',
    pillar: 'admision-educacion',
    institutionAuthority: 'Escuela Nacional de Agricultura',
    metricBadge: '1,400 Reactivos Oficiales',
    featureTag: '4 Asignaturas Agropecuarias',
    description:
      'Entrenamiento especializado para el examen de admisión de la ENA en Ciencias Agrícolas, Biología, Matemática y Lenguaje técnico orientado al sector agropecuario.',
    icon: <Sprout className="w-5 h-5 text-white" />,
    gradient: 'from-emerald-700 via-teal-700 to-emerald-800',
    accentBorder: 'border-emerald-500/30',
    studyTarget: { tab: 'categories', institution: 'ENA' },
    testTarget: { tab: 'practice', institution: 'ENA' },
    studyTab: 'categories',
    testTab: 'practice',
  },
  {
    id: 'area-escalafon',
    title: 'ESCALAFON',
    pillar: 'admision-educacion',
    institutionAuthority: 'MINED • Escalafón Magisterial',
    metricBadge: '3,300 Reactivos Oficiales',
    featureTag: '11 Especialidades Docentes',
    description:
      'Preparación oficial para la evaluación del Escalafón Docente Nivel 1 del MINED: didáctica, legislación educativa salvadoreña y especialidades curriculares de aula.',
    icon: <Award className="w-5 h-5 text-white" />,
    gradient: 'from-teal-700 via-cyan-800 to-slate-900',
    accentBorder: 'border-teal-500/30',
    studyTarget: { tab: 'categories', institution: 'ESCALAFON' },
    testTarget: { tab: 'practice', institution: 'ESCALAFON' },
    studyTab: 'categories',
    testTab: 'practice',
  },
  {
    id: 'area-asd-mined',
    title: 'ASD MINED',
    pillar: 'admision-educacion',
    institutionAuthority: 'MINED • UES ASD • Olimpiadas',
    metricBadge: '2,190 Reactivos Olímpicos',
    featureTag: 'Academias Sabatinas Departamentales',
    description:
      'Programa ASD MINED para Academias Sabatinas Departamentales y olimpiadas científicas en Matemática, Física, Química, Biología e Informática con demostraciones formales.',
    icon: <Brain className="w-5 h-5 text-white" />,
    gradient: 'from-amber-600 via-orange-600 to-amber-700',
    accentBorder: 'border-amber-500/30',
    studyTarget: { tab: 'jovenes-talento', jovenesTalentoTab: 'theory' },
    testTarget: { tab: 'practice', institution: 'ASD' },
    studyTab: 'jovenes-talento',
    testTab: 'practice',
  },

  // ========================================================================
  // PILAR 2: PROFESIONAL Y VIAL (5 ÁREAS)
  // ========================================================================
  {
    id: 'area-ansp',
    title: 'ANSP',
    pillar: 'profesional-vial',
    institutionAuthority: 'Academia Nacional de Seguridad Pública',
    metricBadge: '250 Reactivos Culturales',
    featureTag: 'Ingreso Nivel Básico PNC',
    description:
      'Banco oficial de preparación para la prueba cultural y de conocimientos generales de ingreso a la Academia Nacional de Seguridad Pública (ANSP).',
    icon: <Shield className="w-5 h-5 text-white" />,
    gradient: 'from-slate-800 via-blue-900 to-slate-900',
    accentBorder: 'border-blue-500/30',
    studyTarget: { tab: 'categories', institution: 'ANSP' },
    testTarget: { tab: 'practice', institution: 'ANSP' },
    studyTab: 'categories',
    testTab: 'practice',
  },
  {
    id: 'area-ascensos-pnc',
    title: 'ASCENSOS PNC',
    pillar: 'profesional-vial',
    institutionAuthority: 'PNC • ANSP • Tribunal de Ascensos',
    metricBadge: 'Cabos, Sargentos y Oficiales',
    featureTag: 'Ley Orgánica PNC & PrPn',
    description:
      'Concursos de ascenso policial de la PNC conforme a la Ley de la Carrera Policial, Derechos Humanos, Código Procesal Penal, criminalística y protocolos tácticos.',
    icon: <Shield className="w-5 h-5 text-white" />,
    gradient: 'from-slate-900 via-blue-950 to-slate-900',
    accentBorder: 'border-blue-500/30',
    studyTarget: { tab: 'ansp-ascenso', anspExamMode: false },
    testTarget: { tab: 'ansp-ascenso', anspExamMode: true },
    studyTab: 'ansp-ascenso',
    testTab: 'ansp-ascenso',
  },
  {
    id: 'area-notariado-csj',
    title: 'NOTARIADO CSJ',
    pillar: 'profesional-vial',
    institutionAuthority: 'Corte Suprema de Justicia (CSJ)',
    metricBadge: '200 Casos Prácticos Oficiales',
    featureTag: 'Ley del Notariado & Sala Civil',
    description:
      'Habilitación de la función notarial ante la CSJ: escrituras matrices, actas, testamentos, LENJVOD, nulidades civiles, jurisprudencia y vademécum de plazos.',
    icon: <Scale className="w-5 h-5 text-white" />,
    gradient: 'from-slate-800 via-slate-900 to-blue-950',
    accentBorder: 'border-slate-500/30',
    studyTarget: { tab: 'notary-exam', notaryTab: 'study-units' },
    testTarget: { tab: 'notary-exam', notaryTab: 'simulator' },
    studyTab: 'notary-exam',
    testTab: 'notary-exam',
  },
  {
    id: 'area-enar',
    title: 'ENAR',
    pillar: 'profesional-vial',
    institutionAuthority: 'MINSAL • UES Posgrados Médicos',
    metricBadge: '6 Especialidades Troncales',
    featureTag: 'Casos Clínicos & Simulador',
    description:
      'Examen Nacional de Aspirantes a Residentados Médicos (ENAR) en Medicina Interna, Cirugía, Pediatría, Gineco-Obstetricia, Psiquiatría y Anestesiología.',
    icon: <Stethoscope className="w-5 h-5 text-white" />,
    gradient: 'from-blue-900 via-teal-900 to-slate-900',
    accentBorder: 'border-teal-500/30',
    studyTarget: { tab: 'residentado-medico', residentadoTab: 'thematic_units' },
    testTarget: { tab: 'residentado-medico', residentadoTab: 'simulator' },
    studyTab: 'residentado-medico',
    testTab: 'residentado-medico',
  },
  {
    id: 'area-vmt',
    title: 'VMT',
    pillar: 'profesional-vial',
    institutionAuthority: 'Viceministerio de Transporte (VMT)',
    metricBadge: 'Teórico & Señales Viales',
    featureTag: 'Reglamento de Tránsito',
    description:
      'Preparación oficial para licencias de conducir Particular, Liviana, Pesada y Motocicleta: unidades normativas, señales de tránsito y simulador teórico VMT.',
    icon: <Car className="w-5 h-5 text-white" />,
    gradient: 'from-blue-800 via-sky-800 to-slate-900',
    accentBorder: 'border-sky-500/30',
    studyTarget: { tab: 'driver-license', driverSubTab: 'study' },
    testTarget: { tab: 'driver-license', driverSubTab: 'quiz' },
    studyTab: 'driver-license',
    testTab: 'driver-license',
  },

  // ========================================================================
  // PILAR 3: IDIOMAS (7 ÁREAS)
  // ========================================================================
  {
    id: 'area-ingles',
    title: 'INGLES',
    pillar: 'idiomas',
    institutionAuthority: 'MCER / CEFR • US & UK',
    metricBadge: '120 Clases • 2,400 Reactivos',
    featureTag: 'Niveles A1 - C2 • Comparativo',
    description:
      'Programa completo de Inglés Americano (US) y Británico (UK) alineado al MCER (A1 a C2) con gramática, verbos, vocabulario y simulador de 2,400 preguntas.',
    icon: <Globe2 className="w-5 h-5 text-white" />,
    gradient: 'from-blue-700 via-indigo-800 to-slate-900',
    accentBorder: 'border-blue-500/30',
    studyTarget: { tab: 'languages', languageId: 'english', languageMainTab: 'theory' },
    testTarget: { tab: 'languages', languageId: 'english', languageMainTab: 'exam' },
    studyTab: 'languages',
    testTab: 'languages',
  },
  {
    id: 'area-aleman',
    title: 'ALEMÁN',
    pillar: 'idiomas',
    institutionAuthority: 'MCER • Goethe-Institut & DACH',
    metricBadge: '120 Clases • 2,400 Reactivos',
    featureTag: 'Niveles A1 - C2 • Hochdeutsch',
    description:
      'Formación estructurada en Alemán estándar (Hochdeutsch) con declinaciones, sintaxis V2, variantes DACH y banco evaluativo de 2,400 reactivos por nivel.',
    icon: <Globe2 className="w-5 h-5 text-white" />,
    gradient: 'from-amber-700 via-red-900 to-slate-900',
    accentBorder: 'border-amber-500/30',
    studyTarget: { tab: 'languages', languageId: 'german', languageMainTab: 'theory' },
    testTarget: { tab: 'languages', languageId: 'german', languageMainTab: 'exam' },
    studyTab: 'languages',
    testTab: 'languages',
  },
  {
    id: 'area-arabe',
    title: 'ÁRABE',
    pillar: 'idiomas',
    institutionAuthority: 'ALECSO • Fus’ha & Levantino',
    metricBadge: '120 Clases • 2,400 Reactivos',
    featureTag: 'Caligrafía & Raíces Triconsonánticas',
    description:
      'Estudio del Árabe Estándar Moderno (Fus’ha) y contraste con el dialecto palestino-levantino de El Salvador, incluyendo alifato y examen de 2,400 preguntas.',
    icon: <Globe2 className="w-5 h-5 text-white" />,
    gradient: 'from-emerald-800 via-teal-900 to-slate-900',
    accentBorder: 'border-emerald-500/30',
    studyTarget: { tab: 'languages', languageId: 'arabic', languageMainTab: 'theory' },
    testTarget: { tab: 'languages', languageId: 'arabic', languageMainTab: 'exam' },
    studyTab: 'languages',
    testTab: 'languages',
  },
  {
    id: 'area-mandarin',
    title: 'MANDARIN',
    pillar: 'idiomas',
    institutionAuthority: 'HSK 3.0 • Pǔtōnghuà',
    metricBadge: '120 Clases • 2,400 Reactivos',
    featureTag: 'Pinyin, Tonos & Caracteres Hanzi',
    description:
      'Curso progresivo de Chino Mandarín estándar (HSK 1 a HSK 6) con sistema tonal, clasificadores de medida, escritura Hanzi y simulador completo de evaluación.',
    icon: <Globe2 className="w-5 h-5 text-white" />,
    gradient: 'from-rose-800 via-red-900 to-slate-900',
    accentBorder: 'border-rose-500/30',
    studyTarget: { tab: 'languages', languageId: 'mandarin', languageMainTab: 'theory' },
    testTarget: { tab: 'languages', languageId: 'mandarin', languageMainTab: 'exam' },
    studyTab: 'languages',
    testTab: 'languages',
  },
  {
    id: 'area-nahuat',
    title: 'NÁHUAT',
    pillar: 'idiomas',
    institutionAuthority: 'MINED • Lengua Originaria Pipil',
    metricBadge: '120 Clases • 2,400 Reactivos',
    featureTag: 'Witzapan & Cuisnahuat (A1 - C2)',
    description:
      'Preservación y enseñanza sistemática del Náhuat Pipil de El Salvador con norma ortográfica unificada, morfología aglutinante, verbos y banco evaluativo.',
    icon: <Globe2 className="w-5 h-5 text-white" />,
    gradient: 'from-teal-700 via-emerald-800 to-slate-900',
    accentBorder: 'border-teal-500/30',
    studyTarget: { tab: 'languages', languageId: 'nahuat', languageMainTab: 'theory' },
    testTarget: { tab: 'languages', languageId: 'nahuat', languageMainTab: 'exam' },
    studyTab: 'languages',
    testTab: 'languages',
  },
  {
    id: 'area-lenca',
    title: 'LENCA',
    pillar: 'idiomas',
    institutionAuthority: 'Patrimonio Lingüístico • Morazán',
    metricBadge: '120 Clases • 2,400 Reactivos',
    featureTag: 'Potón de Guatajiagua & Chilanga',
    description:
      'Módulo de revitalización del Lenca Potón del oriente salvadoreño: estructura SOV, léxico cultural del barro negro, gramática comparada y examen por niveles.',
    icon: <Globe2 className="w-5 h-5 text-white" />,
    gradient: 'from-cyan-800 via-blue-900 to-slate-900',
    accentBorder: 'border-cyan-500/30',
    studyTarget: { tab: 'languages', languageId: 'lenca', languageMainTab: 'theory' },
    testTarget: { tab: 'languages', languageId: 'lenca', languageMainTab: 'exam' },
    studyTab: 'languages',
    testTab: 'languages',
  },
  {
    id: 'area-kakawira',
    title: 'KAKAWIRA',
    pillar: 'idiomas',
    institutionAuthority: 'Familia Misumalpa • Cacaopera',
    metricBadge: '120 Clases • 2,400 Reactivos',
    featureTag: 'Cacaopera Tradicional (Morazán)',
    description:
      'Formación lingüística en Kakawira (Cacaopera) de la familia Misumalpa: fonología, toponimia sagrada, tradición oral de Morazán y simulador de 2,400 reactivos.',
    icon: <Globe2 className="w-5 h-5 text-white" />,
    gradient: 'from-indigo-800 via-violet-900 to-slate-900',
    accentBorder: 'border-indigo-500/30',
    studyTarget: { tab: 'languages', languageId: 'kakawira', languageMainTab: 'theory' },
    testTarget: { tab: 'languages', languageId: 'kakawira', languageMainTab: 'exam' },
    studyTab: 'languages',
    testTab: 'languages',
  },

  // ========================================================================
  // PILAR 4: CIENCIAS (1 ÁREA)
  // ========================================================================
  {
    id: 'area-laboratorio-formulas',
    title: 'LABORATORIO DE FORMULAS',
    pillar: 'ciencias',
    institutionAuthority: 'MINED • MINSAL • OPS/OMS',
    metricBadge: '4 Simuladores + Test KaTeX',
    featureTag: 'Poiseuille, pH, Cinética & Física',
    description:
      'Entorno cuantitativo interactivo con sliders dinámicos para Ley de Poiseuille, Henderson-Hasselbalch, farmacocinética y tiro parabólico, más Test de Fórmulas.',
    icon: <FlaskConical className="w-5 h-5 text-white" />,
    gradient: 'from-violet-800 via-purple-900 to-slate-900',
    accentBorder: 'border-violet-500/30',
    studyTarget: { tab: 'formula-lab', formulaLabMode: 'lab' },
    testTarget: { tab: 'formula-lab', formulaLabMode: 'test' },
    studyTab: 'formula-lab',
    testTab: 'formula-lab',
  },
];

export const Courses3DSection: React.FC<Courses3DSectionProps> = ({ onNavigateArea }) => {
  const [activePillar, setActivePillar] = useState<PillarCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filtrado reactivo por pilar y por término de búsqueda
  const filteredAreas = useMemo(() => {
    return AREAS_CATALOG.filter((area) => {
      const matchesPillar = activePillar === 'all' || area.pillar === activePillar;
      if (!matchesPillar) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        area.title.toLowerCase().includes(q) ||
        area.description.toLowerCase().includes(q) ||
        area.institutionAuthority.toLowerCase().includes(q) ||
        area.metricBadge.toLowerCase().includes(q) ||
        area.featureTag.toLowerCase().includes(q)
      );
    });
  }, [activePillar, searchQuery]);

  const PILLAR_TABS: { id: PillarCategory; label: string; count: number }[] = [
    { id: 'all', label: `Todas (${AREAS_CATALOG.length})`, count: AREAS_CATALOG.length },
    {
      id: 'admision-educacion',
      label: 'Admisión y Educación',
      count: AREAS_CATALOG.filter((a) => a.pillar === 'admision-educacion').length,
    },
    {
      id: 'profesional-vial',
      label: 'Profesional y Vial',
      count: AREAS_CATALOG.filter((a) => a.pillar === 'profesional-vial').length,
    },
    {
      id: 'idiomas',
      label: 'Idiomas',
      count: AREAS_CATALOG.filter((a) => a.pillar === 'idiomas').length,
    },
    {
      id: 'ciencias',
      label: 'Ciencias',
      count: AREAS_CATALOG.filter((a) => a.pillar === 'ciencias').length,
    },
  ];

  const handleAction = (target: PortalNavigationTarget) => {
    if (onNavigateArea) {
      onNavigateArea(target);
    }
  };

  return (
    <section
      id="catalogo-areas-kuskat"
      className="py-10 sm:py-16 bg-slate-50 relative overflow-hidden border-b border-slate-200"
      aria-label="Catálogo Maestro de Áreas de Estudio y Evaluación de KUSKAT"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-12">
        {/* Encabezado Principal de la Sección */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Catálogo Académico & Evaluativo Integral</span>
          </div>

          <h2 className="font-montenegrin text-2xl sm:text-4xl lg:text-5xl text-slate-900 font-black tracking-tight leading-tight">
            Áreas de Estudio y Evaluación de KUSKAT
          </h2>

          <p className="font-caslon text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Explora las <strong>19 áreas especializadas</strong> del portal. Cada tarjeta ofrece acceso directo para{' '}
            <strong>Estudiar</strong> la teoría y malla curricular o para <strong>Hacer el Test</strong> de forma inmediata.
          </p>
        </div>

        {/* Barra de Filtros por Pilares y Búsqueda en Vivo */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-5 shadow-corporate-subtle space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            {/* Buscador en Vivo */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por área (ej. UES, AVANZO, ASD MINED, ENAR, VMT, Náhuat, Fórmulas)..."
                className="w-full pl-10 pr-8 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                aria-label="Buscar área de estudio"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
                  title="Limpiar búsqueda"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Contador de Resultados */}
            <div className="flex items-center justify-between lg:justify-end gap-2 text-xs font-bold text-slate-500 shrink-0">
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200/80 text-slate-700">
                Mostrando {filteredAreas.length} de {AREAS_CATALOG.length} Áreas
              </span>
            </div>
          </div>

          {/* Botones de Filtro por Pilar */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none pb-1 pt-1 -mx-1 px-1 touch-scroll">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 pl-1 shrink-0">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>Pilares:</span>
            </span>
            {PILLAR_TABS.map((p) => {
              const isActive = activePillar === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePillar(p.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/80'
                  }`}
                >
                  <span>{p.label}</span>
                  {p.id !== 'all' && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {p.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 border border-blue-200 text-[#0B1B3D] text-xs font-medium">
            <span aria-hidden="true">🇸🇻</span>
            <span>
              <strong>Alcance por país:</strong> Todo lo que no es de <strong>Idiomas</strong> (Admisión, Educación, Profesional, Vial y Ciencias) pertenece a <strong>El Salvador</strong>.
            </span>
          </div>
        </div>

        {/* Cuadrícula de las 19 Tarjetas */}
        {filteredAreas.length === 0 ? (
          <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-10 text-center space-y-3">
            <Bookmark className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-montenegrin text-lg font-bold text-slate-700">
              No se encontraron áreas con "{searchQuery}"
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Intenta con otro término o selecciona "Todas (19)" en el selector superior para ver el catálogo completo.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActivePillar('all');
              }}
              className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredAreas.map((area) => (
              <div
                key={area.id}
                className={`group relative rounded-2xl bg-white border border-slate-200/90 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl shadow-xs flex flex-col justify-between ${area.accentBorder}`}
              >
                {/* Cabecera con degradado visual representativo */}
                <div className={`bg-gradient-to-r ${area.gradient} p-4 sm:p-5 text-white relative`}>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="p-2 rounded-xl bg-white/15 backdrop-blur-xs border border-white/20 shadow-2xs shrink-0">
                      {area.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-white tracking-wider uppercase bg-black/25 px-2.5 py-1 rounded-full border border-white/20 shadow-2xs truncate max-w-[170px] sm:max-w-none shrink-0">
                      {area.metricBadge}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/85 block mb-1 truncate">
                    {area.pillar !== 'idiomas' ? `🇸🇻 El Salvador • ${area.institutionAuthority}` : area.institutionAuthority}
                  </span>

                  <h3 className="font-montenegrin text-lg sm:text-xl text-white font-black tracking-tight leading-snug break-words">
                    {area.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-white/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-medium truncate">{area.featureTag}</span>
                  </div>
                </div>

                {/* Cuerpo descriptivo sustantivo */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <p className="font-caslon text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Dos botones de acceso directo: Estudiar y Hacer el Test (responsive desde 320px) */}
                <div className="p-4 pt-0 grid grid-cols-1 min-[340px]:grid-cols-2 gap-2">
                  <a
                    href={`/?tab=${area.studyTab}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleAction(area.studyTarget);
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-blue-700 text-white font-caslon text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    aria-label={`Estudiar ${area.title}`}
                  >
                    <BookOpen className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Estudiar</span>
                  </a>
                  <a
                    href={`/?tab=${area.testTab}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleAction(area.testTarget);
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-caslon text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    aria-label={`Hacer el Test de ${area.title}`}
                  >
                    <ClipboardCheck className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>Hacer el Test</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

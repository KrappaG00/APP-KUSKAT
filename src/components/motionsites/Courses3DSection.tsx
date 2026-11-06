import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  Layers,
  BookOpen,
  Brain,
  Scale,
  Stethoscope,
  Activity,
  Shield,
  FileText,
  Gavel,
  HeartPulse,
  Wrench,
  Sun,
  Compass,
  FlaskConical,
  Car,
  Globe2,
  Flag,
  Grid,
  Search,
  ArrowRight,
  Filter,
  Sparkles,
  CheckCircle2,
  Bookmark,
} from 'lucide-react';
import { Institution } from '../../data';
import { AppPageTab } from '../HeaderNavbar';

export type PillarCategory =
  | 'all'
  | 'admision'
  | 'legal-health'
  | 'tech-science'
  | 'languages-civic'
  | 'tools';

export interface ProjectAreaItem {
  id: string;
  tabId: AppPageTab;
  title: string;
  pillar: PillarCategory;
  institutionAuthority: string;
  metricBadge: string;
  featureTag: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  accentBorder: string;
  institution?: Institution;
}

export interface Courses3DSectionProps {
  onEnroll?: (institution: Institution) => void;
  onSelectTab: (tab: AppPageTab) => void;
}

export const Courses3DSection: React.FC<Courses3DSectionProps> = ({ onEnroll, onSelectTab }) => {
  const [activePillar, setActivePillar] = useState<PillarCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const AREAS_CATALOG: ProjectAreaItem[] = [
    // ------------------------------------------------------------------------
    // PILAR 1: ADMISIÓN & PRUEBAS NACIONALES (4 MÓDULOS)
    // ------------------------------------------------------------------------
    {
      id: 'practice-simulator',
      tabId: 'practice',
      title: 'Simulador Maestro de Admisión',
      pillar: 'admision',
      institutionAuthority: 'UES • MINED • ENA',
      metricBadge: '17,640 Base • 41,080 Total',
      featureTag: 'Cronómetro Real & Solucionario',
      description:
        'Simulador oficial de exámenes para ingreso universitario UES (Fase I y II), Escalafón Docente Magisterial, Prueba Nacional AVANZO y Escuela Nacional de Agricultura (ENA), con retroalimentación inmediata y justificaciones en KaTeX.',
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      gradient: 'from-blue-700 via-indigo-700 to-blue-800',
      accentBorder: 'border-blue-500/30',
      institution: 'UES',
    },
    {
      id: 'categories-explorer',
      tabId: 'categories',
      title: 'Malla Curricular & Categorías',
      pillar: 'admision',
      institutionAuthority: 'MINED • UES • CSJ',
      metricBadge: '18 Categorías Jerárquicas',
      featureTag: 'Doctrina APA 7.ª & Casoteca',
      description:
        'Explorador temático estructurado por institución y materia. Cada unidad cuenta con desarrollo teórico sustantivo de más de 500 palabras, citas en formato APA 7.ª Edición y casuística aplicada para fundamentar cada respuesta.',
      icon: <Layers className="w-5 h-5 text-white" />,
      gradient: 'from-indigo-700 via-purple-700 to-indigo-800',
      accentBorder: 'border-indigo-500/30',
    },
    {
      id: 'academic-reinforcement',
      tabId: 'academic-reinforcement',
      title: 'Refuerzo Escolar MINED-ESMATE',
      pillar: 'admision',
      institutionAuthority: 'MINED • ESMATE • El Salvador',
      metricBadge: '97 Unidades • 112 Lecciones',
      featureTag: '560 Casos Prácticos Resueltos',
      description:
        'Currículo nacional de Matemática y Ciencias Naturales desde 1.° Grado de Básica hasta 2.° año de Bachillerato. Cada lección profundiza conceptos clave con glosario técnico y 5 problemas demostrados paso a paso con fórmulas.',
      icon: <BookOpen className="w-5 h-5 text-white" />,
      gradient: 'from-sky-700 via-blue-700 to-indigo-800',
      accentBorder: 'border-sky-500/30',
    },
    {
      id: 'jovenes-talento',
      tabId: 'jovenes-talento',
      title: 'Programa Jóvenes Talento & Olimpiadas',
      pillar: 'admision',
      institutionAuthority: 'MINED • UES ASD • ONM',
      metricBadge: '2,190 Problemas Desafiantes',
      featureTag: 'Formato Olímpico Demostrativo',
      description:
        'Entrenamiento científico de élite para las Academias Sabatinas Departamentales (ASD) y competencias olímpicas en Matemática, Física, Química, Biología e Informática, con metodologías de demostración matemática y rigor formal.',
      icon: <Brain className="w-5 h-5 text-white" />,
      gradient: 'from-amber-600 via-orange-600 to-amber-700',
      accentBorder: 'border-amber-500/30',
      institution: 'ASD',
    },

    // ------------------------------------------------------------------------
    // PILAR 2: HABILITACIÓN PROFESIONAL & LEYES (9 MÓDULOS)
    // ------------------------------------------------------------------------
    {
      id: 'notary-exam',
      tabId: 'notary-exam',
      title: 'Examen de Suficiencia Notarial CSJ',
      pillar: 'legal-health',
      institutionAuthority: 'Corte Suprema de Justicia (CSJ)',
      metricBadge: '200 Casos Prácticos Oficiales',
      featureTag: 'Jurisprudencia Sala de lo Civil',
      description:
        'Preparación integral para la habilitación de la función notarial en El Salvador: escrituras matrices, poderes especiales, actas notariales, nulidades del Código Civil, doctrina registral y vademécum de plazos de la Ley del Notariado.',
      icon: <Scale className="w-5 h-5 text-white" />,
      gradient: 'from-slate-800 via-slate-900 to-blue-950',
      accentBorder: 'border-slate-500/30',
    },
    {
      id: 'residentado-medico',
      tabId: 'residentado-medico',
      title: 'Residentado Médico ENAR',
      pillar: 'legal-health',
      institutionAuthority: 'MINSAL • UES Posgrados Médicos',
      metricBadge: '6 Especialidades Troncales',
      featureTag: 'Casos Clínicos & Flashcards',
      description:
        'Examen Nacional de Aspirantes a Residentados Médicos (ENAR) en Medicina Interna, Cirugía General, Pediatría, Gineco-Obstetricia, Psiquiatría y Anestesiología, con diagnósticos diferenciales y vademécum farmacológico.',
      icon: <Stethoscope className="w-5 h-5 text-white" />,
      gradient: 'from-blue-900 via-teal-900 to-slate-900',
      accentBorder: 'border-teal-500/30',
    },
    {
      id: 'cssp-health',
      tabId: 'cssp-health',
      title: 'Profesiones de la Salud CSSP',
      pillar: 'legal-health',
      institutionAuthority: 'Consejo Superior de Salud Pública',
      metricBadge: '7 Juntas de Vigilancia',
      featureTag: 'Código de Salud & Deontología',
      description:
        'Habilitación deontológica y técnico-jurídica para las Juntas de Vigilancia Médica, Odontológica, Químico-Farmacéutica, Enfermería, Psicología, Laboratorio Clínico y Veterinaria, bajo el Código de Salud y su régimen disciplinario.',
      icon: <Activity className="w-5 h-5 text-white" />,
      gradient: 'from-emerald-800 via-teal-800 to-slate-900',
      accentBorder: 'border-emerald-500/30',
    },
    {
      id: 'ansp-ascenso',
      tabId: 'ansp-ascenso',
      title: 'Ascensos Policiales PNC / ANSP',
      pillar: 'legal-health',
      institutionAuthority: 'PNC • ANSP • Tribunal de Ascensos',
      metricBadge: 'Cabos, Sargentos y Oficiales',
      featureTag: 'Ley Orgánica PNC & PrPn',
      description:
        'Preparación para los concursos de ascenso de la Policía Nacional Civil conforme a la Ley de la Carrera Policial, Derechos Humanos, legislación penal salvadoreña, criminalística forense y protocolos de intervención táctica.',
      icon: <Shield className="w-5 h-5 text-white" />,
      gradient: 'from-slate-900 via-blue-950 to-slate-900',
      accentBorder: 'border-blue-500/30',
      institution: 'ANSP',
    },
    {
      id: 'derecho-administrativo',
      tabId: 'derecho-administrativo',
      title: 'Derecho Administrativo LPA & Firma Digital',
      pillar: 'legal-health',
      institutionAuthority: 'LPA • MINEC • Sala Contencioso',
      metricBadge: 'Ley de Procedimientos Administrativos',
      featureTag: 'Silencio Administrativo & Plazos',
      description:
        'Especialización práctica en la LPA: actos administrativos regulares e irregulares, cómputo de plazos procesales en días hábiles, recursos de reconsideración y apelación, régimen sancionador y validez probatoria de la firma electrónica.',
      icon: <FileText className="w-5 h-5 text-white" />,
      gradient: 'from-blue-800 via-indigo-900 to-slate-900',
      accentBorder: 'border-indigo-500/30',
    },
    {
      id: 'constitution',
      tabId: 'constitution',
      title: 'Constitución y Ramas del Derecho',
      pillar: 'legal-health',
      institutionAuthority: 'CSJ • Sala de lo Constitucional',
      metricBadge: '274 Artículos Comentados',
      featureTag: 'Garantías y Amparo Constitucional',
      description:
        'Doctrina integral de la Carta Magna de 1983: derechos fundamentales, hábeas corpus, hábeas data, procesos de amparo e inconstitucionalidad, división de poderes del Estado salvadoreño y principios rectores del Derecho Civil y Mercantil.',
      icon: <Scale className="w-5 h-5 text-white" />,
      gradient: 'from-blue-900 via-slate-900 to-indigo-950',
      accentBorder: 'border-blue-500/30',
    },
    {
      id: 'oral-litigation',
      tabId: 'oral-litigation',
      title: 'Litigación Oral Penal & Objeciones',
      pillar: 'legal-health',
      institutionAuthority: 'Código Procesal Penal (PrPn)',
      metricBadge: 'Arts. 209-212 PrPn en Acción',
      featureTag: 'Simulador en Sala de Audiencias',
      description:
        'Taller interactivo de técnicas de litigación en vista pública penal: formulación de teoría del caso, interrogatorio directo, contrainterrogatorio y simulador cronometrado de objeciones a preguntas capciosas, sugestivas e impertinentes.',
      icon: <Gavel className="w-5 h-5 text-white" />,
      gradient: 'from-rose-900 via-red-950 to-slate-900',
      accentBorder: 'border-rose-500/30',
    },
    {
      id: 'compliance-financial',
      tabId: 'compliance-financial',
      title: 'Cumplimiento AML & Seguros SSF',
      pillar: 'legal-health',
      institutionAuthority: 'UIF-FGR • SSF • BCR',
      metricBadge: 'LCLDA & Supervisión Financiera',
      featureTag: 'Prevención AML/CFT & Pólizas',
      description:
        'Marco normativo salvadoreño contra el lavado de dinero y activos: debida diligencia ampliada de clientes, reporte de operaciones sospechosas (ROS), funciones del Oficial de Cumplimiento e intermediación de seguros supervisada por la SSF.',
      icon: <Shield className="w-5 h-5 text-white" />,
      gradient: 'from-cyan-900 via-blue-900 to-slate-900',
      accentBorder: 'border-cyan-500/30',
    },
    {
      id: 'salud-primaria',
      tabId: 'salud-primaria',
      title: 'Atención Primaria & Farmacovigilancia',
      pillar: 'legal-health',
      institutionAuthority: 'MINSAL • SRS / DNM • OPS',
      metricBadge: 'Guías Clínicas & Algoritmo Naranjo',
      featureTag: 'Dengue, HTA, DM2 & Vacunación',
      description:
        'Guías clínicas nacionales del MINSAL para el primer nivel de atención: detección y manejo de Dengue, Diabetes Mellitus Tipo 2 e Hipertensión, esquemas de vacunación regular y algoritmo de imputabilidad de RAM de la Superintendencia Sanitaria.',
      icon: <HeartPulse className="w-5 h-5 text-white" />,
      gradient: 'from-teal-900 via-emerald-900 to-slate-900',
      accentBorder: 'border-emerald-500/30',
    },

    // ------------------------------------------------------------------------
    // PILAR 3: FORMACIÓN TÉCNICA & CIENCIAS (5 MÓDULOS)
    // ------------------------------------------------------------------------
    {
      id: 'technical-courses',
      tabId: 'technical-courses',
      title: '10 Cursos Técnicos Vocacionales INCAF',
      pillar: 'tech-science',
      institutionAuthority: 'INCAF (Ex-INSAFORP) • 400h',
      metricBadge: '10 Especialidades Técnicas',
      featureTag: 'Talleres Prácticos & Tareas',
      description:
        'Capacitación técnica en áreas de alta demanda industrial: Electricidad Residencial e Industrial, Mecánica Automotriz, Soldadura por Arco Eléctrico (Norma AWS), Refrigeración HVAC, Fontanería, Gastronomía y Seguridad Ocupacional.',
      icon: <Wrench className="w-5 h-5 text-white" />,
      gradient: 'from-amber-700 via-orange-800 to-slate-900',
      accentBorder: 'border-amber-500/30',
    },
    {
      id: 'siget-solar',
      tabId: 'siget-solar',
      title: 'Energía Solar & Electricidad SIGET',
      pillar: 'tech-science',
      institutionAuthority: 'SIGET • CNE • NEC 690',
      metricBadge: 'NTCOGD Acuerdo 343-E',
      featureTag: 'Generación Distribuida & Red',
      description:
        'Normativa salvadoreña de conexión de centrales fotovoltaicas a la red de distribución eléctrica: cálculo de caída de tensión, protecciones anti-isla, inversores interactivos, diagramas unifilares y certificación de electricistas.',
      icon: <Sun className="w-5 h-5 text-white" />,
      gradient: 'from-yellow-700 via-amber-800 to-slate-900',
      accentBorder: 'border-yellow-500/30',
    },
    {
      id: 'ingenieria-ciencias',
      tabId: 'ingenieria-ciencias',
      title: 'Ciencias de Ingeniería & Cuantitativas',
      pillar: 'tech-science',
      institutionAuthority: 'UES Facultades de Ingeniería',
      metricBadge: 'Modelado Matemático KaTeX',
      featureTag: 'Álgebra Matricial & Estática',
      description:
        'Fundamentos matemáticos y físicos para ingenierías: Álgebra Lineal aplicada, Geometría Analítica, Trigonometría, Estática de cuerpos rígidos y Dinámica newtoniana con demostraciones completas renderizadas con KaTeX.',
      icon: <Compass className="w-5 h-5 text-white" />,
      gradient: 'from-indigo-800 via-blue-900 to-slate-900',
      accentBorder: 'border-indigo-500/30',
    },
    {
      id: 'formula-lab',
      tabId: 'formula-lab',
      title: 'Laboratorio Interactivo de Fórmulas',
      pillar: 'tech-science',
      institutionAuthority: 'Física • Química • Medicina',
      metricBadge: 'Simuladores con Sliders Dinámicos',
      featureTag: 'Cálculo de Variables en Tiempo Real',
      description:
        'Entorno de experimentación cuantitativa: Ley de Poiseuille (resistencia vascular y flujo laminar), Ecuación de Henderson-Hasselbalch (equilibrio ácido-base), Cinemática de tiro parabólico y Circuitos Eléctricos con Ley de Ohm.',
      icon: <FlaskConical className="w-5 h-5 text-white" />,
      gradient: 'from-violet-800 via-purple-900 to-slate-900',
      accentBorder: 'border-violet-500/30',
    },
    {
      id: 'driver-license',
      tabId: 'driver-license',
      title: 'Licencias de Conducir VMT',
      pillar: 'tech-science',
      institutionAuthority: 'Viceministerio de Transporte (VMT)',
      metricBadge: 'Examen Teórico & Psicológico',
      featureTag: 'Reglamento de Tránsito & Señales',
      description:
        'Preparación oficial para aspirantes a licencias de conducir Particular, Liviana, Pesada o Motocicleta: simulador del examen teórico VMT, catálogo interactivo de señales de tránsito y módulo de evaluación psicológica vial.',
      icon: <Car className="w-5 h-5 text-white" />,
      gradient: 'from-blue-800 via-sky-800 to-slate-900',
      accentBorder: 'border-sky-500/30',
    },

    // ------------------------------------------------------------------------
    // PILAR 4: IDIOMAS & CULTURA CÍVICA (3 MÓDULOS)
    // ------------------------------------------------------------------------
    {
      id: 'languages-school',
      tabId: 'languages',
      title: 'Escuela de Idiomas Kuskat',
      pillar: 'languages-civic',
      institutionAuthority: 'MCER / CEFR • Lenguas Originarias',
      metricBadge: '7 Lenguas • 840 Clases',
      featureTag: 'Audio Nativo & Gramática Progresiva',
      description:
        'Formación lingüística integral: preservación de lenguas ancestrales salvadoreñas (Náhuat Pipil, Lenca Potón, Kakawira Cacaopera), e idiomas globales de alta demanda (Inglés US/UK niveles A1-C2, Alemán, Mandarín estándar y Árabe).',
      icon: <Globe2 className="w-5 h-5 text-white" />,
      gradient: 'from-emerald-700 via-teal-800 to-slate-900',
      accentBorder: 'border-teal-500/30',
    },
    {
      id: 'patriotic-history',
      tabId: 'patriotic-history',
      title: 'Símbolos Patrios e Historia de El Salvador',
      pillar: 'languages-civic',
      institutionAuthority: 'Ministerio de Cultura • Archivo Nacional',
      metricBadge: 'Símbolos & Mandatos Presidenciales',
      featureTag: 'Historia Constitucional Salvadoreña',
      description:
        'Compendio cívico e histórico de la nación: significado, leyes y protocolo de los Símbolos Patrios salvadoreños, y registro cronológico documentado de todos los presidentes de la República desde la Independencia de 1821 hasta la actualidad.',
      icon: <Flag className="w-5 h-5 text-white" />,
      gradient: 'from-blue-700 via-indigo-800 to-slate-900',
      accentBorder: 'border-blue-500/30',
    },
    {
      id: 'central-america',
      tabId: 'central-america',
      title: 'Atlas Geopolítico de Centroamérica',
      pillar: 'languages-civic',
      institutionAuthority: 'SICA • SIECA • CEPAL',
      metricBadge: '7 Naciones del Istmo',
      featureTag: 'Cartografía & Datos Socioeconómicos',
      description:
        'Explorador interactivo de los países del Sistema de la Integración Centroamericana (SICA): geografía física, división departamental y provincial, estadísticas macroeconómicas, tratados comerciales y dinámica geopolítica regional.',
      icon: <Layers className="w-5 h-5 text-white" />,
      gradient: 'from-cyan-800 via-blue-900 to-slate-900',
      accentBorder: 'border-cyan-500/30',
    },

    // ------------------------------------------------------------------------
    // PILAR 5: HERRAMIENTAS DE SÍNTESIS & OMR (2 MÓDULOS)
    // ------------------------------------------------------------------------
    {
      id: 'one-page-sheets',
      tabId: 'one-page-sheets',
      title: 'Hojas Mnemotécnicas de 1 Página',
      pillar: 'tools',
      institutionAuthority: 'Síntesis Académica KUSKAT',
      metricBadge: 'Cheat Sheets de Alta Densidad',
      featureTag: 'Repaso Rápido Pre-Examen',
      description:
        'Hojas de referencia rápida ultra-densas para repaso exprés: vademécum de plazos notariales y procesales, fórmulas matemáticas y físicas fundamentales, criterios clínicos diagnósticos y cuadros sinópticos de alta retención mnémica.',
      icon: <FileText className="w-5 h-5 text-white" />,
      gradient: 'from-amber-700 via-slate-800 to-slate-900',
      accentBorder: 'border-amber-500/30',
    },
    {
      id: 'latex-export',
      tabId: 'latex',
      title: 'Exportador LaTeX & Hojas OMR',
      pillar: 'tools',
      institutionAuthority: 'Tipografía Científica TeX / OMR',
      metricBadge: 'Plantillas OMR (50 y 100 reactivos)',
      featureTag: 'Código .tex Listo para Compilar',
      description:
        'Herramienta de composición tipográfica para exportar cualquier banco o examen en código fuente LaTeX estándar compatible con Overleaf y TeX Live, además de plantillas OMR calibradas con cuadrícula para evaluación óptica masiva.',
      icon: <Grid className="w-5 h-5 text-white" />,
      gradient: 'from-slate-800 via-indigo-950 to-slate-950',
      accentBorder: 'border-slate-500/30',
    },
  ];

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
    { id: 'all', label: 'Todas las Áreas', count: AREAS_CATALOG.length },
    {
      id: 'admision',
      label: 'Admisión & Escolar',
      count: AREAS_CATALOG.filter((a) => a.pillar === 'admision').length,
    },
    {
      id: 'legal-health',
      label: 'Leyes & Salud',
      count: AREAS_CATALOG.filter((a) => a.pillar === 'legal-health').length,
    },
    {
      id: 'tech-science',
      label: 'Técnica & Ciencias',
      count: AREAS_CATALOG.filter((a) => a.pillar === 'tech-science').length,
    },
    {
      id: 'languages-civic',
      label: 'Idiomas & Cívica',
      count: AREAS_CATALOG.filter((a) => a.pillar === 'languages-civic').length,
    },
    {
      id: 'tools',
      label: 'Herramientas',
      count: AREAS_CATALOG.filter((a) => a.pillar === 'tools').length,
    },
  ];

  const handleCardClick = (area: ProjectAreaItem) => {
    if (area.institution && onEnroll) {
      onEnroll(area.institution);
    }
    onSelectTab(area.tabId);
  };

  return (
    <section
      id="catalogo-areas-kuskat"
      className="py-10 sm:py-16 bg-slate-50 relative overflow-hidden border-b border-slate-200"
      aria-label="Catálogo Maestro de Áreas de Estudio y Evaluación de KUSKAT"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-12">
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
            Explora las <strong>23 áreas especializadas</strong> del proyecto. Cada módulo incluye bancos verificados,
            marcos normativos oficiales salvadoreños, fundamentación teórica rigurosa y su respectivo acceso directo.
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
                placeholder="Buscar por área, materia, ley o temática (ej. Notariado, ESMATE, LPA, Fórmulas, Inglés)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                aria-label="Buscar área de estudio"
              />
              {searchQuery && (
                <button
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
                  onClick={() => setActivePillar(p.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1.5 border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/80'
                  }`}
                >
                  <span>{p.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {p.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cuadrícula de las 23 Tarjetas */}
        {filteredAreas.length === 0 ? (
          <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-12 text-center space-y-3">
            <Bookmark className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-montenegrin text-lg font-bold text-slate-700">
              No se encontraron áreas con "{searchQuery}"
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Intenta con otro término o selecciona "Todas las Áreas" en el selector superior para ver el catálogo completo.
            </p>
            <button
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
                  <div className="flex items-center justify-between gap-2.5 mb-2.5">
                    <div className="p-2 rounded-xl bg-white/15 backdrop-blur-xs border border-white/20 shadow-2xs shrink-0">
                      {area.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-white tracking-wider uppercase bg-black/25 px-2.5 py-1 rounded-full border border-white/20 shadow-2xs truncate max-w-[160px] sm:max-w-none shrink-0">
                      {area.metricBadge}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/80 block mb-1 truncate">
                    {area.institutionAuthority}
                  </span>

                  <h3 className="font-montenegrin text-base sm:text-xl text-white font-black tracking-tight leading-snug break-words">
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

                {/* Botón de ACCESO DIRECTO con llamada clara y acción garantizada */}
                <div className="p-4 pt-0">
                  <button
                    onClick={() => handleCardClick(area)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-caslon text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md flex items-center justify-center gap-2 cursor-pointer group-hover:bg-blue-600"
                    aria-label={`Acceso Directo a ${area.title}`}
                  >
                    <span>Acceso Directo</span>
                    <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

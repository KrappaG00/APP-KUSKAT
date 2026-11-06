import React, { useEffect, useState, useMemo } from 'react';
import {
  BarChart3,
  PieChart,
  Award,
  Layers,
  GraduationCap,
  Sparkles,
  BookOpen,
  Scale,
  Shield,
  Sprout,
  CheckCircle2,
  Globe2,
} from 'lucide-react';

interface DatasetStat {
  id: string;
  name: string;
  shortName: string;
  fullName: string;
  value: number;
  percentage: number;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ReactNode;
  badge: string;
}

export const StatsAndCharts3D: React.FC = () => {
  // Selector de alcance: Ecosistema Completo (41,080) vs. Banco Base Admisión (17,640)
  const [activeScope, setActiveScope] = useState<'ecosystem' | 'base'>('ecosystem');
  const [activeChartType, setActiveChartType] = useState<'both' | 'bars' | 'donut'>('both');
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Contadores animados
  const [counts, setCounts] = useState({
    reactivosTotal: 0,
    reactivosBase: 0,
    departamentos: 0,
    especialidades: 0,
    modulos: 0,
  });

  useEffect(() => {
    let frame = 0;
    const totalFrames = 45;
    const interval = setInterval(() => {
      frame++;
      const progress = Math.min(frame / totalFrames, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        reactivosTotal: Math.floor(ease * 41080),
        reactivosBase: Math.floor(ease * 17640),
        departamentos: Math.floor(ease * 14),
        especialidades: Math.floor(ease * 62),
        modulos: Math.floor(ease * 23),
      });

      if (frame >= totalFrames) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, []);

  // 1. Datos del Ecosistema Integral KUSKAT (Gran Total: 41,080 reactivos)
  const ECOSYSTEM_DATA: DatasetStat[] = [
    {
      id: 'admision-base',
      name: 'Banco Base Admisión',
      shortName: 'Admisión Base',
      fullName: 'Pruebas Nacionales (UES, Escalafón, AVANZO, ASD, ENA, ANSP)',
      value: 17640,
      percentage: 42.9,
      color: '#2563EB',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      icon: <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />,
      badge: '6 Convocatorias Oficiales',
    },
    {
      id: 'idiomas',
      name: 'Escuela de Idiomas',
      shortName: '7 Idiomas',
      fullName: '7 Lenguas MCER A1-C2 (Inglés, Náhuat, Lenca, Kakawira, Alemán, Mandarín, Árabe)',
      value: 16800,
      percentage: 40.9,
      color: '#059669',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      icon: <Globe2 className="w-4 h-4 text-emerald-600 shrink-0" />,
      badge: '2,400 reactivos por idioma',
    },
    {
      id: 'esmate',
      name: 'Refuerzo Escolar ESMATE',
      shortName: 'ESMATE Escolar',
      fullName: 'Currículo MINED-ESMATE (1.° Grado a 2.° Bachillerato)',
      value: 4850,
      percentage: 11.8,
      color: '#4F46E5',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      icon: <BookOpen className="w-4 h-4 text-indigo-600 shrink-0" />,
      badge: '97 Unidades • 112 Lecciones',
    },
    {
      id: 'especialidades',
      name: 'Leyes, Salud & Técnica',
      shortName: 'Leyes & Salud',
      fullName: 'Notariado CSJ, Residentado ENAR, CSSP, LPA, AML, INCAF, SIGET, VMT',
      value: 1790,
      percentage: 4.4,
      color: '#D97706',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      icon: <Scale className="w-4 h-4 text-amber-600 shrink-0" />,
      badge: '15 Módulos Especializados',
    },
  ];

  // 2. Datos del Banco Base de Admisión Tradicional (Total: 17,640 reactivos)
  const BASE_BANK_DATA: DatasetStat[] = [
    {
      id: 'ues',
      name: 'UES (Admisión)',
      shortName: 'UES',
      fullName: 'Universidad de El Salvador (Fase I & II)',
      value: 7500,
      percentage: 42.5,
      color: '#2563EB',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      icon: <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />,
      badge: '25 Subtemas de Examen',
    },
    {
      id: 'escalafon',
      name: 'Escalafón Docente',
      shortName: 'Escalafón',
      fullName: 'Escalafón Magisterial MINED Nivel 1',
      value: 3300,
      percentage: 18.7,
      color: '#059669',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      icon: <Award className="w-4 h-4 text-emerald-600 shrink-0" />,
      badge: '11 Especialidades de Aula',
    },
    {
      id: 'avanzo',
      name: 'Prueba AVANZO',
      shortName: 'AVANZO',
      fullName: 'Prueba Nacional Bachillerato MINED',
      value: 3000,
      percentage: 17.0,
      color: '#4F46E5',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      icon: <BookOpen className="w-4 h-4 text-indigo-600 shrink-0" />,
      badge: '5 Áreas de Evaluación',
    },
    {
      id: 'asd',
      name: 'Jóvenes Talento',
      shortName: 'ASD Talento',
      fullName: 'Academia Sabatina Departamental ASD',
      value: 2190,
      percentage: 12.4,
      color: '#D97706',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      icon: <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />,
      badge: '5.°, 6.° y 7.° Grado Olímpico',
    },
    {
      id: 'ena',
      name: 'Admisión ENA',
      shortName: 'ENA Agrícola',
      fullName: 'Escuela Nacional de Agricultura',
      value: 1400,
      percentage: 7.9,
      color: '#0284C7',
      bgColor: 'bg-sky-50',
      borderColor: 'border-sky-200',
      icon: <Sprout className="w-4 h-4 text-sky-600 shrink-0" />,
      badge: 'Técnico Agropecuario 2027',
    },
    {
      id: 'ansp',
      name: 'Academia ANSP',
      shortName: 'ANSP / PNC',
      fullName: 'Prueba Cultural Nivel Básico PNC',
      value: 250,
      percentage: 1.4,
      color: '#7C3AED',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      icon: <Shield className="w-4 h-4 text-purple-600 shrink-0" />,
      badge: 'Convocatoria Oficial PNC',
    },
  ];

  const currentDataset = activeScope === 'ecosystem' ? ECOSYSTEM_DATA : BASE_BANK_DATA;
  const currentTotal = activeScope === 'ecosystem' ? 41080 : 17640;

  // Cálculo SVG Donut
  const donutSlices = useMemo(() => {
    let currentAngle = -Math.PI / 2;
    const cx = 110;
    const cy = 110;
    const outerR = 90;
    const innerR = 56;

    return currentDataset.map((item) => {
      const sliceAngle = (item.value / currentTotal) * Math.PI * 2;
      const startAngle = currentAngle;
      const endAngle = currentAngle + sliceAngle;
      currentAngle = endAngle;

      const x1 = cx + outerR * Math.cos(startAngle);
      const y1 = cy + outerR * Math.sin(startAngle);
      const x2 = cx + outerR * Math.cos(endAngle);
      const y2 = cy + outerR * Math.sin(endAngle);

      const x3 = cx + innerR * Math.cos(endAngle);
      const y3 = cy + innerR * Math.sin(endAngle);
      const x4 = cx + innerR * Math.cos(startAngle);
      const y4 = cy + innerR * Math.sin(startAngle);

      const largeArc = sliceAngle > Math.PI ? 1 : 0;

      const pathData = `
        M ${x1} ${y1}
        A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2} ${y2}
        L ${x3} ${y3}
        A ${innerR} ${innerR} 0 ${largeArc} 0 ${x4} ${y4}
        Z
      `;

      return {
        ...item,
        pathData,
      };
    });
  }, [currentDataset, currentTotal]);

  const maxBarValue = Math.max(...currentDataset.map((d) => d.value));

  return (
    <section
      id="estadisticas-kuskat"
      className="py-12 sm:py-20 bg-white relative overflow-hidden border-b border-slate-200"
      aria-label="Logros, Cobertura y Estadísticas Curriculares de KUSKAT"
    >
      {/* Marca de agua sutil */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none overflow-hidden">
        <span className="font-montenegrin text-[20vw] text-slate-900 font-black leading-none">
          KUSKAT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-12">
        {/* Encabezado Principal */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[11px] sm:text-xs font-caslon tracking-micro uppercase shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Métricas de Cobertura Curricular</span>
          </div>

          <h2 className="font-montenegrin text-2xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight font-black">
            Logros, Cobertura y Estadísticas
          </h2>

          <p className="font-caslon text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed px-1">
            Auditoría rigurosa y verificada en todas las asignaturas, temarios normativos y módulos de evaluación en El Salvador.
          </p>
        </div>

        {/* 4 Contadores Animados Responsivos (Sin desbordamiento ni choque de alturas) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5">
          {/* 1. Reactivos Totales */}
          <div className="p-3 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-center relative overflow-hidden flex flex-col justify-between min-h-[110px] sm:min-h-[130px] shadow-2xs hover:border-blue-300 transition-colors">
            <span className="font-caslon text-[9px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 line-clamp-2 min-h-[24px] sm:min-h-[28px] flex items-center justify-center px-1">
              Reactivos Verificados
            </span>
            <div className="font-montenegrin text-lg sm:text-2xl lg:text-3xl text-blue-700 tracking-tight font-black my-0.5 truncate">
              {activeScope === 'ecosystem'
                ? counts.reactivosTotal.toLocaleString()
                : counts.reactivosBase.toLocaleString()}
            </div>
            <span className="font-caslon text-[9px] sm:text-xs text-slate-500 block truncate px-1">
              {activeScope === 'ecosystem'
                ? '41,080 Total (17,640 Base)'
                : 'Con solucionarios KaTeX'}
            </span>
          </div>

          {/* 2. Cobertura Departamental */}
          <div className="p-3 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-center relative overflow-hidden flex flex-col justify-between min-h-[110px] sm:min-h-[130px] shadow-2xs hover:border-indigo-300 transition-colors">
            <span className="font-caslon text-[9px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 line-clamp-2 min-h-[24px] sm:min-h-[28px] flex items-center justify-center px-1">
              Departamentos
            </span>
            <div className="font-montenegrin text-lg sm:text-2xl lg:text-3xl text-indigo-700 tracking-tight font-black my-0.5 truncate">
              {counts.departamentos} de 14
            </div>
            <span className="font-caslon text-[9px] sm:text-xs text-slate-500 block truncate px-1">
              Cobertura total nacional
            </span>
          </div>

          {/* 3. Especialidades Curriculares */}
          <div className="p-3 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-center relative overflow-hidden flex flex-col justify-between min-h-[110px] sm:min-h-[130px] shadow-2xs hover:border-emerald-300 transition-colors">
            <span className="font-caslon text-[9px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 line-clamp-2 min-h-[24px] sm:min-h-[28px] flex items-center justify-center px-1">
              Especialidades Curriculares
            </span>
            <div className="font-montenegrin text-lg sm:text-2xl lg:text-3xl text-emerald-700 tracking-tight font-black my-0.5 truncate">
              {counts.especialidades} Áreas
            </div>
            <span className="font-caslon text-[9px] sm:text-xs text-slate-500 block truncate px-1">
              Temarios oficiales del MINED & UES
            </span>
          </div>

          {/* 4. Convocatorias Oficiales */}
          <div className="p-3 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 text-center relative overflow-hidden flex flex-col justify-between min-h-[110px] sm:min-h-[130px] shadow-2xs hover:border-amber-300 transition-colors">
            <span className="font-caslon text-[9px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 line-clamp-2 min-h-[24px] sm:min-h-[28px] flex items-center justify-center px-1">
              Convocatorias Oficiales
            </span>
            <div className="font-montenegrin text-lg sm:text-2xl lg:text-3xl text-amber-700 tracking-tight font-black my-0.5 truncate">
              6 Ámbitos
            </div>
            <span className="font-caslon text-[9px] sm:text-xs text-slate-500 block truncate px-1">
              UES, Escalafón, AVANZO, ASD, ENA, ANSP
            </span>
          </div>
        </div>

        {/* ================================================================== */}
        {/* PANEL BIDIMENSIONAL 2D RESPONSIVO (SIN DESBORDAMIENTOS)            */}
        {/* ================================================================== */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-4 sm:p-6 lg:p-8 relative overflow-hidden shadow-corporate-subtle space-y-6">
          {/* Cabecera y Controles: 100% Adaptables a Móviles (320px+) */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="space-y-1 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
                <span>Visualización Bidimensional 2D</span>
              </div>
              <h3 className="font-montenegrin text-lg sm:text-2xl text-slate-900 tracking-tight font-black leading-snug">
                {activeScope === 'ecosystem'
                  ? 'Distribución Global de Reactivos (41,080)'
                  : 'Distribución del Banco Base de Admisión (17,640)'}
              </h3>
              <p className="font-caslon text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeScope === 'ecosystem'
                  ? 'Desglose integral: Pruebas de Admisión, Escuela de Idiomas, ESMATE y Especialidades.'
                  : 'Desglose proporcional de las 6 convocatorias tradicionales de admisión nacional.'}
              </p>

              {/* Leyenda Institucional (Fiel a la Guía Visual) */}
              <div className="flex items-center gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-600 font-caslon">
                  <span className="w-2.5 h-2.5 rounded-xs bg-blue-600 shrink-0" />
                  <span>Azul Institucional</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-600 font-caslon">
                  <span className="w-2.5 h-2.5 rounded-xs bg-emerald-600 shrink-0" />
                  <span>Verde Éxito</span>
                </span>
              </div>
            </div>

            {/* Selector de Alcance y Vistas (En móviles se acomoda sin chocar) */}
            <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              {/* Segmented Control de Alcance */}
              <div className="grid grid-cols-2 sm:flex items-center p-1 bg-white rounded-xl border border-slate-200 shadow-2xs text-xs font-bold w-full sm:w-auto">
                <button
                  onClick={() => setActiveScope('ecosystem')}
                  className={`py-1.5 px-2.5 sm:px-3 rounded-lg transition-all cursor-pointer text-center truncate ${
                    activeScope === 'ecosystem'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Ecosistema (41,080)
                </button>
                <button
                  onClick={() => setActiveScope('base')}
                  className={`py-1.5 px-2.5 sm:px-3 rounded-lg transition-all cursor-pointer text-center truncate ${
                    activeScope === 'base'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Banco Base (17,640)
                </button>
              </div>

              {/* Botones de Tipo de Gráfico (Segmented responsive para móviles) */}
              <div className="grid grid-cols-3 sm:flex items-center justify-center p-1 bg-white rounded-xl border border-slate-200 shadow-2xs text-xs font-bold w-full sm:w-auto">
                <button
                  onClick={() => setActiveChartType('both')}
                  className={`py-1.5 px-2 sm:px-2.5 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
                    activeChartType === 'both' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Vista Completa"
                  aria-label="Vista Completa"
                >
                  <Layers className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[11px] sm:text-xs">Ambos</span>
                </button>
                <button
                  onClick={() => setActiveChartType('bars')}
                  className={`py-1.5 px-2 sm:px-2.5 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
                    activeChartType === 'bars' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Solo Barras"
                  aria-label="Solo Barras"
                >
                  <BarChart3 className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[11px] sm:text-xs">Barras</span>
                </button>
                <button
                  onClick={() => setActiveChartType('donut')}
                  className={`py-1.5 px-2 sm:px-2.5 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1 ${
                    activeChartType === 'donut' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title="Solo Donut"
                  aria-label="Solo Donut"
                >
                  <PieChart className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[11px] sm:text-xs">Donut</span>
                </button>
              </div>
            </div>
          </div>

          {/* Gráficos 2D: Donut SVG + Barras Proporcionales */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-1">
            {/* 1. Donut SVG 2D */}
            {(activeChartType === 'both' || activeChartType === 'donut') && (
              <div
                className={`flex flex-col items-center justify-center p-4 sm:p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs ${
                  activeChartType === 'donut' ? 'lg:col-span-12' : 'lg:col-span-5'
                }`}
              >
                <div className="relative w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] mx-auto">
                  <svg
                    viewBox="0 0 220 220"
                    className="w-full h-full transform transition-transform duration-300 drop-shadow-xs"
                    aria-label="Gráfico circular de distribución de reactivos"
                  >
                    {donutSlices.map((slice) => {
                      const isHovered = hoveredCategory === slice.id;
                      return (
                        <path
                          key={slice.id}
                          d={slice.pathData}
                          fill={slice.color}
                          className="transition-all duration-200 cursor-pointer hover:opacity-90"
                          style={{
                            transformOrigin: '110px 110px',
                            transform: isHovered ? 'scale(1.04)' : 'scale(1)',
                            filter: isHovered ? 'drop-shadow(0 3px 6px rgba(0,0,0,0.25))' : 'none',
                          }}
                          onMouseEnter={() => setHoveredCategory(slice.id)}
                          onMouseLeave={() => setHoveredCategory(null)}
                        >
                          <title>{`${slice.name}: ${slice.value.toLocaleString()} reactivos (${slice.percentage}%)`}</title>
                        </path>
                      );
                    })}
                  </svg>

                  {/* Centro del Donut */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono truncate max-w-[100px]">
                      {activeScope === 'ecosystem' ? 'Total KUSKAT' : 'Total Base'}
                    </span>
                    <span className="font-montenegrin text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 leading-none mt-0.5">
                      {currentTotal.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium mt-0.5">
                      Reactivos
                    </span>
                  </div>
                </div>

                <span className="text-[11px] sm:text-xs text-slate-500 mt-3 text-center font-caslon leading-snug">
                  Toca o pasa el cursor sobre cada sector para ver el detalle.
                </span>
              </div>
            )}

            {/* 2. Barras Proporcionales 2D */}
            {(activeChartType === 'both' || activeChartType === 'bars') && (
              <div
                className={`space-y-3.5 p-3.5 sm:p-6 bg-white rounded-2xl border border-slate-200/80 shadow-2xs ${
                  activeChartType === 'bars' ? 'lg:col-span-12' : 'lg:col-span-7'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 pb-2 border-b border-slate-100">
                  <span className="truncate pr-2">Módulo / Convocatoria</span>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-right">Reactivos</span>
                    <span className="w-12 text-right">Porcentaje</span>
                  </div>
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  {currentDataset.map((item) => {
                    const isHovered = hoveredCategory === item.id;
                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => setHoveredCategory(item.id)}
                        onMouseLeave={() => setHoveredCategory(null)}
                        className={`p-2 sm:p-2.5 rounded-xl transition-all duration-150 cursor-pointer border ${
                          isHovered
                            ? 'bg-slate-50 border-slate-300 shadow-2xs'
                            : 'border-transparent hover:bg-slate-50/70'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 text-xs sm:text-sm mb-1.5">
                          {/* Nombre del Módulo (Truncado inteligente para que no choque con los números) */}
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <div className="p-1 rounded-lg bg-slate-100 shrink-0">
                              {item.icon}
                            </div>
                            <span className="font-bold text-slate-800 truncate block text-xs sm:text-sm">
                              {item.name}
                            </span>
                          </div>

                          {/* Cifras de Reactivos y Porcentaje */}
                          <div className="flex items-center gap-2 sm:gap-3 shrink-0 text-xs font-mono font-bold">
                            <span className="text-slate-700 text-right min-w-[50px]">
                              {item.value.toLocaleString()}
                            </span>
                            <span
                              className="w-11 text-right text-[11px] sm:text-xs font-bold px-1.5 py-0.5 rounded-md shrink-0"
                              style={{
                                backgroundColor: `${item.color}18`,
                                color: item.color,
                              }}
                            >
                              {item.percentage}%
                            </span>
                          </div>
                        </div>

                        {/* Barra horizontal 2D */}
                        <div className="w-full h-2.5 sm:h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
                          <div
                            className="h-full rounded-full transition-all duration-500 ease-out"
                            style={{
                              width: `${(item.value / maxBarValue) * 100}%`,
                              backgroundColor: item.color,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Tarjetas informativas inferiores (Grid responsive adaptado para no chocar) */}
          <div
            className={`grid gap-2 sm:gap-3 pt-3 border-t border-slate-200 font-caslon text-center ${
              activeScope === 'ecosystem'
                ? 'grid-cols-2 lg:grid-cols-4'
                : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-6'
            }`}
          >
            {currentDataset.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCategory(item.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`p-2.5 sm:p-3 rounded-xl bg-white border transition-all duration-150 min-w-0 ${
                  hoveredCategory === item.id
                    ? `${item.borderColor} shadow-xs scale-[1.02]`
                    : 'border-slate-200/80 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[11px] sm:text-xs text-slate-600 truncate font-semibold block">
                    {item.shortName}
                  </span>
                </div>
                <strong className="text-xs sm:text-sm block font-bold truncate" style={{ color: item.color }}>
                  {item.value.toLocaleString()}
                </strong>
                <span className="text-[10px] text-slate-400 font-mono block truncate">
                  {item.percentage}% del banco
                </span>
              </div>
            ))}
          </div>

          {/* Banner de Enlace al Catálogo de 23 Áreas */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 shadow-sm">
            <div className="flex items-center gap-3 text-center sm:text-left min-w-0 flex-1">
              <div className="p-2 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 shrink-0">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="min-w-0">
                <h4 className="font-montenegrin text-xs sm:text-base font-bold text-white tracking-wide truncate">
                  Ecosistema Académico Completo de KUSKAT
                </h4>
                <p className="text-[11px] sm:text-xs text-blue-100/90 leading-relaxed mt-0.5">
                  El proyecto consolida <strong>41,080 reactivos</strong> distribuidos en 23 módulos de estudio: 17,640 base de admisión, 16,800 de idiomas, 4,850 de ESMATE y 1,790 en habilitaciones de Derecho, Salud y Técnica.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <a
                href="#catalogo-areas-kuskat"
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 bg-white text-blue-900 hover:bg-blue-50 text-xs font-bold rounded-xl transition-colors shadow-xs"
              >
                Ver 23 Áreas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

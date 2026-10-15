import React from 'react';
import { DepartmentData } from './data/departmentsData';
import { BookOpen, GraduationCap, School, Award, MapPin, X, Sparkles } from 'lucide-react';

interface DepartmentSidePanelProps {
  department: DepartmentData | null;
  onClose: () => void;
  onExploreContent: (dept: DepartmentData) => void;
}

export const DepartmentSidePanel: React.FC<DepartmentSidePanelProps> = ({
  department,
  onClose,
  onExploreContent,
}) => {
  if (!department) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-slate-900/40 backdrop-blur-xs perspective-1000 transition-all duration-300">
      {/* Fondo clicable para cerrar */}
      <div className="flex-1 cursor-pointer" onClick={onClose} />

      {/* Panel lateral con la misma paleta institucional que las demás páginas (Blanco / Slate / Azul) */}
      <aside
        className="relative w-full max-w-full sm:max-w-md lg:max-w-lg h-full bg-white border-l border-slate-200 shadow-2xl flex flex-col z-20 overflow-y-auto transform-style-3d animate-panel-3d"
        style={{
          animation: 'sidePanelRotateY 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        {/* Cabecera del Panel */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-4 sm:py-5 border-b border-slate-200 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse shrink-0" />
              <span className="font-caslon text-xs text-blue-700 font-semibold tracking-micro uppercase truncate">
                {department.region} • El Salvador
              </span>
            </div>
            <h3 className="font-montenegrin text-2xl sm:text-3xl text-slate-900 tracking-wide truncate">
              {department.name}
            </h3>
            <p className="font-caslon text-xs sm:text-sm text-slate-500 tracking-editorial mt-0.5">
              Cabecera: <strong className="text-slate-800">{department.capital}</strong>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
            title="Cerrar panel lateral"
            aria-label="Cerrar panel lateral"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contenido Educativo */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 flex-1 bg-slate-50/50 font-caslon">
          {/* Banner de Perfil Departamental */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-950 p-4 sm:p-5 text-white shadow-md">
            {/* Íconos flotantes */}
            <div className="absolute top-2 right-3 pointer-events-none text-blue-200/40 animate-float-slow">
              <GraduationCap className="w-10 sm:w-12 h-10 sm:h-12" />
            </div>
            <div
              className="absolute -bottom-2 right-12 pointer-events-none text-indigo-200/30 animate-float-slow"
              style={{ animationDelay: '1.5s' }}
            >
              <BookOpen className="w-8 sm:w-9 h-8 sm:h-9" />
            </div>

            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[11px] sm:text-xs font-semibold tracking-micro uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Perfil Territorial KUSKAT
            </span>
            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed tracking-editorial relative z-10 pr-6 sm:pr-10">
              {department.description}
            </p>
          </div>

          {/* Tarjetas de Datos Educativos en la paleta institucional */}
          <div className="space-y-3">
            <h4 className="font-montenegrin text-xs sm:text-sm text-slate-900 tracking-wide uppercase">
              Indicadores de Preparación Académica
            </h4>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {/* Centros Escolares */}
              <div className="p-3 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 mb-1 sm:mb-2">
                  <span className="text-[11px] sm:text-xs font-medium">Escuelas</span>
                  <School className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                </div>
                <div className="font-montenegrin text-lg sm:text-2xl text-slate-900">
                  {department.schoolsCount.toLocaleString()}
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1">
                  Públicos y Privados
                </span>
              </div>

              {/* Estudiantes */}
              <div className="p-3 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 mb-1 sm:mb-2">
                  <span className="text-[11px] sm:text-xs font-medium">Estudiantes</span>
                  <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-600" />
                </div>
                <div className="font-montenegrin text-lg sm:text-2xl text-indigo-700">
                  {department.studentsCount.toLocaleString()}
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1">
                  Censo estudiantil
                </span>
              </div>

              {/* Municipios / Distritos */}
              <div className="p-3 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 mb-1 sm:mb-2">
                  <span className="text-[11px] sm:text-xs font-medium">Municipios</span>
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                </div>
                <div className="font-montenegrin text-lg sm:text-2xl text-emerald-700">
                  {department.municipalitiesCount}
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1">
                  Distritos integrados
                </span>
              </div>

              {/* Categoría Preferente */}
              <div className="p-3 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-slate-500 mb-1 sm:mb-2">
                  <span className="text-[11px] sm:text-xs font-medium">Mayor Demanda</span>
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 line-clamp-1">
                  {department.bestCategory.split(' ')[0]}
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1 line-clamp-1">
                  {department.bestCategory}
                </span>
              </div>
            </div>
          </div>

          {/* Área Académica de Mayor Desempeño */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-[11px] sm:text-xs text-slate-500 tracking-micro uppercase block mb-1">
              Competencia Clave en el Territorio
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0" />
              <span className="text-xs sm:text-base font-semibold text-blue-900">
                {department.featuredSubject}
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-600 mt-1.5 sm:mt-2">
              Los estudiantes de este departamento registran alto interés en resolución de problemas y razonamiento lógico dentro de esta área curricular.
            </p>
          </div>
        </div>

        {/* Footer del Panel con el Botón "Ver más" en la paleta azul institucional */}
        <div className="sticky bottom-0 bg-white p-4 sm:p-6 border-t border-slate-200">
          <button
            onClick={() => onExploreContent(department)}
            className="w-full relative py-3 sm:py-3.5 px-4 sm:px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-caslon text-xs sm:text-sm font-bold tracking-micro uppercase transition-all duration-300 animate-ripple flex items-center justify-center gap-2 sm:gap-3 shadow-md hover:shadow-lg cursor-pointer min-h-[48px]"
          >
            <span className="truncate">Ver reactivos de {department.name}</span>
            <span className="text-base sm:text-lg">➔</span>
          </button>
        </div>
      </aside>

      <style>{`
        @keyframes sidePanelRotateY {
          from {
            transform: perspective(1000px) rotateY(40deg) translateX(100%);
            opacity: 0;
          }
          to {
            transform: perspective(1000px) rotateY(0deg) translateX(0%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

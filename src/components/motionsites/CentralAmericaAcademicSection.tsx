import React from 'react';
import { Globe2, ArrowRight, Clock, CheckCircle2, Sparkles } from 'lucide-react';

export interface CentralAmericaAcademicCountry {
  id: string;
  name: string;
  flagEmoji: string;
  capital: string;
  status: 'active' | 'coming-soon';
  description: string;
}

export const CENTRAL_AMERICA_ACADEMIC_COUNTRIES: CentralAmericaAcademicCountry[] = [
  {
    id: 'el-salvador',
    name: 'El Salvador',
    flagEmoji: '🇸🇻',
    capital: 'San Salvador',
    status: 'active',
    description:
      'Portal académico completo: 19 áreas de estudio, 17,640 reactivos base, Admisión UES, AVANZO, MINED-ESMATE, CSJ, MINSAL, VMT y lenguas originarias.',
  },
  {
    id: 'guatemala',
    name: 'Guatemala',
    flagEmoji: '🇬🇹',
    capital: 'Ciudad de Guatemala',
    status: 'coming-soon',
    description: 'Módulos de admisión USAC, currículo nacional y ciencias aplicadas.',
  },
  {
    id: 'belice',
    name: 'Belice',
    flagEmoji: '🇧🇿',
    capital: 'Belmopán',
    status: 'coming-soon',
    description: 'Refuerzo bilingüe en matemáticas, ciencias e inglés académico.',
  },
  {
    id: 'honduras',
    name: 'Honduras',
    flagEmoji: '🇭🇳',
    capital: 'Tegucigalpa',
    status: 'coming-soon',
    description: 'Preparación PAA-UNAH y bancos de estudio de educación media.',
  },
  {
    id: 'nicaragua',
    name: 'Nicaragua',
    flagEmoji: '🇳🇮',
    capital: 'Managua',
    status: 'coming-soon',
    description: 'Guías universitarias, ciencias básicas y evaluación diagnóstica.',
  },
  {
    id: 'costa-rica',
    name: 'Costa Rica',
    flagEmoji: '🇨🇷',
    capital: 'San José',
    status: 'coming-soon',
    description: 'Razonamiento lógico-matemático y pruebas de admisión universitaria.',
  },
  {
    id: 'panama',
    name: 'Panamá',
    flagEmoji: '🇵🇦',
    capital: 'Ciudad de Panamá',
    status: 'coming-soon',
    description: 'Refuerzo académico en ciencias exactas, tecnología e idiomas.',
  },
];

export interface CentralAmericaAcademicSectionProps {
  onSelectElSalvador: () => void;
}

export const CentralAmericaAcademicSection: React.FC<CentralAmericaAcademicSectionProps> = ({
  onSelectElSalvador,
}) => {
  return (
    <section
      id="refuerzo-academico-america-central"
      aria-label="Refuerzo Académico América Central"
      className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 min-w-0"
    >
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-corporate-subtle p-4 sm:p-8 space-y-6">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
            <Globe2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
            <span>Cobertura Regional Centroamericana</span>
          </div>
          <h2 className="font-montenegrin text-2xl sm:text-3xl font-black text-[#0B1B3D] tracking-tight break-words">
            Refuerzo Académico América Central
          </h2>
          <p className="font-caslon text-xs sm:text-sm text-slate-600 leading-relaxed">
            Todo el contenido académico, simuladores y bancos de estudio desarrollados hasta el
            momento se encuentran activos en la categoría <strong>El Salvador</strong>. Las demás
            naciones centroamericanas se integrarán progresivamente.
          </p>
        </div>

        {/* Grilla de los 7 Países de América Central */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CENTRAL_AMERICA_ACADEMIC_COUNTRIES.map((country) => {
            const isActive = country.status === 'active';
            if (isActive) {
              return (
                <div
                  key={country.id}
                  className="sm:col-span-2 lg:col-span-2 xl:col-span-2 rounded-2xl border-2 border-[#0B1B3D] bg-gradient-to-br from-[#0B1B3D] via-[#132957] to-[#0B1B3D] text-white p-5 sm:p-6 flex flex-col justify-between gap-4 shadow-md min-w-0"
                >
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 text-lg sm:text-xl font-black font-montenegrin">
                        <span aria-hidden="true" className="text-2xl">
                          {country.flagEmoji}
                        </span>
                        <span>{country.name}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/40 text-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>Activo • Disponible</span>
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#C59B27] uppercase tracking-wider">
                      Capital: {country.capital}
                    </p>
                    <p className="font-caslon text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {country.description}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={onSelectElSalvador}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#C59B27] hover:bg-amber-500 text-[#0B1B3D] font-bold text-xs sm:text-sm shadow-sm transition-colors cursor-pointer w-full sm:w-auto"
                    >
                      <Sparkles className="w-4 h-4 shrink-0" />
                      <span>Ingresar a El Salvador (Portal Académico)</span>
                      <ArrowRight className="w-4 h-4 shrink-0" />
                    </button>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={country.id}
                aria-disabled="true"
                className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5 flex flex-col justify-between gap-3 opacity-85 min-w-0"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="inline-flex items-center gap-2 font-editorial text-base font-bold text-[#0B1B3D]">
                      <span aria-hidden="true" className="text-xl">
                        {country.flagEmoji}
                      </span>
                      <span>{country.name}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-bold shrink-0">
                      <Clock className="w-3 h-3 shrink-0" />
                      <span>Próximamente</span>
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-500">Capital: {country.capital}</p>
                  <p className="font-caslon text-xs text-slate-600 leading-relaxed">
                    {country.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/70 text-[11px] font-semibold text-slate-400">
                  Próximamente disponible
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

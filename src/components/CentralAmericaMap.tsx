import React, { useState } from 'react';
import {
  MapPin,
  Compass,
  Globe2,
  Info,
  ChevronRight,
  Sparkles,
  Users,
  Coins,
  Landmark,
  Layers,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  BookOpen,
} from 'lucide-react';

export interface CentralAmericaCountry {
  id: string;
  name: string;
  capital: string;
  areaKm2: number;
  population: string;
  currency: string;
  flagEmoji: string;
  color: string;
  hoverColor: string;
  accentBorder: string;
  summary: string;
  highlights: string[];
  svgPath: string;
  centerText: { x: number; y: number };
  universityGuide: {
    mainUniversity: string;
    acronym: string;
    founded: number;
    admissionSystem: string;
    focusAreas: string[];
  };
}

export const CENTRAL_AMERICA_COUNTRIES: CentralAmericaCountry[] = [
  {
    id: 'guatemala',
    name: 'Guatemala',
    capital: 'Ciudad de Guatemala',
    areaKm2: 108889,
    population: '18.2 Millones',
    currency: 'Quetzal (GTQ)',
    flagEmoji: '🇬🇹',
    color: '#0284c7', // Sky 600
    hoverColor: '#0369a1',
    accentBorder: '#38bdf8',
    summary: 'Corazón del mundo maya, la mayor economía y población del istmo centroamericano. Destaca por el lago Atitlán, Antigua Guatemala y Tikal.',
    highlights: ['Cuna Maya y arqueología de Petén', 'Mayor PIB de Centroamérica', '22 idiomas mayas oficiales reconocidos', 'Volcanes activos (Fuego, Pacaya)'],
    // Coordenadas SVG estilizadas y precisas para Guatemala
    svgPath: 'M 140,80 L 230,75 L 245,130 L 260,150 L 240,195 L 225,230 L 195,240 L 165,225 L 140,210 L 120,160 Z',
    centerText: { x: 180, y: 155 },
    universityGuide: {
      mainUniversity: 'Universidad de San Carlos de Guatemala',
      acronym: 'USAC',
      founded: 1676,
      admissionSystem: 'Prueba de Orientación Vocacional, Prueba de Conocimientos Básicos (PCB) y Pruebas Específicas por facultad.',
      focusAreas: ['Ciencias Médicas', 'Ingeniería', 'Ciencias Jurídicas y Sociales', 'Humanidades y Agronomía'],
    },
  },
  {
    id: 'belize',
    name: 'Belice',
    capital: 'Belmopán',
    areaKm2: 22966,
    population: '410,000 Hab.',
    currency: 'Dólar Beliceño (BZD)',
    flagEmoji: '🇧🇿',
    color: '#0d9488', // Teal 600
    hoverColor: '#0f766e',
    accentBorder: '#2dd4bf',
    summary: 'Única nación de Centroamérica con el inglés como idioma oficial y vínculos históricos con la Mancomunidad de Naciones (Commonwealth).',
    highlights: ['Gran Agujero Azul (Great Blue Hole)', 'Segunda barrera arrecifal más grande del mundo', 'Ecosistemas vírgenes de selva y manglar', 'Cultura Garífuna y Maya'],
    // Coordenadas SVG para Belice
    svgPath: 'M 230,75 L 280,70 L 285,140 L 245,130 Z',
    centerText: { x: 255, y: 105 },
    universityGuide: {
      mainUniversity: 'University of Belize',
      acronym: 'UB',
      founded: 2000,
      admissionSystem: 'Evaluación ATLIB (Association of Tertiary Level Institutions in Belize) y exámenes CXC CSEC / CAPE.',
      focusAreas: ['Ciencias Ambientales y Arrecifes', 'Enfermería y Salud Primaria', 'Educación', 'Administración de Negocios'],
    },
  },
  {
    id: 'el-salvador',
    name: 'El Salvador',
    capital: 'San Salvador',
    areaKm2: 21041,
    population: '6.3 Millones',
    currency: 'Dólar USD ($) & Bitcoin',
    flagEmoji: '🇸🇻',
    color: '#2563eb', // Blue 600 (Kuskat Brand)
    hoverColor: '#1d4ed8',
    accentBorder: '#fbbf24', // Dorado KUSKAT
    summary: 'Sede central de KUSKAT. El Pulgarcito de América: la mayor densidad demográfica continental, 14 departamentos, volcanes majestuosos y costas en el Pacífico.',
    highlights: ['14 Departamentos y riqueza pipil/náhuat', 'Ruta de las Flores y cordillera volcánica', 'Surf City y desarrollo tecnológico KUSKAT', 'Mayor densidad poblacional continental'],
    // Coordenadas SVG para El Salvador (costa pacífico sur de Guatemala y Honduras)
    svgPath: 'M 195,240 L 225,230 L 290,245 L 315,280 L 260,290 L 210,275 Z',
    centerText: { x: 250, y: 265 },
    universityGuide: {
      mainUniversity: 'Universidad de El Salvador',
      acronym: 'UES',
      founded: 1841,
      admissionSystem: 'Prueba General de Ingreso Universitario (Fase I y Fase II) y Examen Nacional de Aspirantes a Residencias Médicas (ENAR).',
      focusAreas: ['Medicina y Odontología', 'Jurisprudencia y Ciencias Sociales', 'Ingeniería y Arquitectura', 'Ciencias Económicas'],
    },
  },
  {
    id: 'honduras',
    name: 'Honduras',
    capital: 'Tegucigalpa M.D.C.',
    areaKm2: 112492,
    population: '10.5 Millones',
    currency: 'Lempira (HNL)',
    flagEmoji: '🇭🇳',
    color: '#0891b2', // Cyan 600
    hoverColor: '#0e7490',
    accentBorder: '#67e8f9',
    summary: 'Nación montañosa bioceánica con extensas costas en el Caribe y el Golfo de Fonseca. Hogar de las Ruinas de Copán y las Islas de la Bahía.',
    highlights: ['Ruinas de Copán (Acrópolis Maya)', 'Reserva de la Biósfera de Río Plátano', 'Islas de la Bahía (Roatán, Utila)', 'Producción cafetalera de alta montaña'],
    // Coordenadas SVG para Honduras
    svgPath: 'M 245,130 L 350,140 L 440,180 L 410,240 L 340,240 L 290,245 L 240,195 Z',
    centerText: { x: 340, y: 190 },
    universityGuide: {
      mainUniversity: 'Universidad Nacional Autónoma de Honduras',
      acronym: 'UNAH',
      founded: 1847,
      admissionSystem: 'Prueba de Aptitud Académica (PAA del College Board) y Prueba de Conocimientos de las Ciencias Naturales y de la Salud (PCCNS).',
      focusAreas: ['Ciencias Médicas y Microbiología', 'Ingenierías Eléctrica y Civil', 'Ciencias Jurídicas', 'Economía y Finanzas'],
    },
  },
  {
    id: 'nicaragua',
    name: 'Nicaragua',
    capital: 'Managua',
    areaKm2: 130373,
    population: '6.9 Millones',
    currency: 'Córdoba (NIO)',
    flagEmoji: '🇳🇮',
    color: '#4f46e5', // Indigo 600
    hoverColor: '#4338ca',
    accentBorder: '#818cf8',
    summary: 'Tierra de lagos y volcanes, el país más extenso del istmo centroamericano. Alberga el Lago Cocibolca (con tiburones de agua dulce) y Granada colonial.',
    highlights: ['Mayor extensión territorial (130,373 km²)', 'Gran Lago de Nicaragua (Cocibolca)', 'Ciudades patrimoniales de León y Granada', 'Isla de Ometepe y volcán Concepción'],
    // Coordenadas SVG para Nicaragua
    svgPath: 'M 340,240 L 410,240 L 470,250 L 485,320 L 430,355 L 360,330 L 315,280 Z',
    centerText: { x: 400, y: 290 },
    universityGuide: {
      mainUniversity: 'Universidad Nacional Autónoma de Nicaragua',
      acronym: 'UNAN',
      founded: 1812,
      admissionSystem: 'Test de Habilidades y Razonamiento Cuantitativo / Verbal para carreras con cupo limitado.',
      focusAreas: ['Ciencias de la Salud', 'Educación y Pedagogía', 'Tecnología y Sistemas', 'Biotecnología Agropecuaria'],
    },
  },
  {
    id: 'costa-rica',
    name: 'Costa Rica',
    capital: 'San José',
    areaKm2: 51100,
    population: '5.2 Millones',
    currency: 'Colón Costarricense (CRC)',
    flagEmoji: '🇨🇷',
    color: '#059669', // Emerald 600
    hoverColor: '#047857',
    accentBorder: '#34d399',
    summary: 'Líder mundial en ecoturismo, biodiversidad y energías limpias. Sin ejército desde 1948, con más del 25% de su territorio protegido en parques nacionales.',
    highlights: ['Más del 5% de la biodiversidad del planeta', 'Sin ejército permanente desde 1948', '99% de matriz eléctrica con fuentes renovables', 'Pura Vida y reservas biológicas de Monteverde'],
    // Coordenadas SVG para Costa Rica
    svgPath: 'M 430,355 L 485,320 L 540,370 L 565,420 L 515,440 L 460,400 Z',
    centerText: { x: 505, y: 385 },
    universityGuide: {
      mainUniversity: 'Universidad de Costa Rica',
      acronym: 'UCR',
      founded: 1843,
      admissionSystem: 'Prueba de Aptitud Académica (PAA UCR/TEC, escala de 200 a 800 puntos percentilares).',
      focusAreas: ['Salud, Medicina y Farmacia', 'Ingeniería de Software & Computación', 'Biotecnología y Conservación', 'Ciencias Sociales'],
    },
  },
  {
    id: 'panama',
    name: 'Panamá',
    capital: 'Ciudad de Panamá',
    areaKm2: 75417,
    population: '4.4 Millones',
    currency: 'Balboa (PAB) & Dólar USD',
    flagEmoji: '🇵🇦',
    color: '#7c3aed', // Violet 600
    hoverColor: '#6d28d9',
    accentBorder: '#a78bfa',
    summary: 'Puente del mundo y corazón del comercio global. Conecta el océano Atlántico y el Pacífico a través del Canal de Panamá y un centro financiero de clase mundial.',
    highlights: ['Canal interoceánico de Panamá', 'Hub aéreo de las Américas (Tocumen)', 'Mayor centro bancario y logístico regional', 'Archipiélagos de San Blas y Bocas del Toro'],
    // Coordenadas SVG para Panamá
    svgPath: 'M 565,420 L 630,410 L 710,430 L 760,470 L 720,490 L 640,460 L 575,445 Z',
    centerText: { x: 670, y: 445 },
    universityGuide: {
      mainUniversity: 'Universidad de Panamá',
      acronym: 'UP',
      founded: 1935,
      admissionSystem: 'Fase I (Prueba Psicológica), Fase II (Prueba de Conocimientos Generales) y Fase III (Prueba de Capacidades Específicas).',
      focusAreas: ['Medicina y Ciencias Clínicas', 'Logística y Comercio Marítimo Internacional', 'Ingeniería Civil y Portuaria', 'Derecho'],
    },
  },
];

// Los 14 Departamentos de El Salvador para deep-dive regional
export const SALVADOR_DEPARTMENTS = [
  { id: 'AH', name: 'Ahuachapán', cabecera: 'Ahuachapán', region: 'Occidental', symbol: '☕ Los Ausoles & Café' },
  { id: 'SA', name: 'Santa Ana', cabecera: 'Santa Ana', region: 'Occidental', symbol: '🌋 Volcán Ilamatepec & Catedral' },
  { id: 'SO', name: 'Sonsonate', cabecera: 'Sonsonate', region: 'Occidental', symbol: '🌊 Cuna Náhuat & Puerto de Acajutla' },
  { id: 'CH', name: 'Chalatenango', cabecera: 'Chalatenango', region: 'Central', symbol: '🌲 Cerro El Pital (2,730 msnm)' },
  { id: 'LL', name: 'La Libertad', cabecera: 'Santa Tecla', region: 'Central', symbol: '🏄 Surf City, El Tunco & Puerto' },
  { id: 'SS', name: 'San Salvador', cabecera: 'San Salvador', region: 'Central', symbol: '🏛️ Capital Política & Volcán Boquerón' },
  { id: 'CU', name: 'Cuscatlán', cabecera: 'Cojutepeque', region: 'Paracentral', symbol: '🥖 Tradición de Embutidos & Suchitoto' },
  { id: 'LP', name: 'La Paz', cabecera: 'Zacatecoluca', region: 'Paracentral', symbol: '✈️ Aeropuerto Int. San Óscar Romero' },
  { id: 'CA', name: 'Cabañas', cabecera: 'Sensuntepeque', region: 'Paracentral', symbol: '🏺 Alfarería de Ilobasco & Presa 5 Nov.' },
  { id: 'SV', name: 'San Vicente', cabecera: 'San Vicente', region: 'Paracentral', symbol: '🌋 Volcán Chinchontepec & Dulces' },
  { id: 'US', name: 'Usulután', cabecera: 'Usulután', region: 'Oriental', symbol: '🌊 Bahía de Jiquilisco & Volcán' },
  { id: 'SM', name: 'San Miguel', cabecera: 'San Miguel', region: 'Oriental', symbol: '🎉 Carnaval & Volcán Chaparrastique' },
  { id: 'MO', name: 'Morazán', cabecera: 'San Francisco Gotera', region: 'Oriental', symbol: '🌿 Cuna Lenca/Kakawira & El Mozote' },
  { id: 'LU', name: 'La Unión', cabecera: 'La Unión', region: 'Oriental', symbol: '⚓ Golfo de Fonseca & Puerto Cutuco' },
];

export const CentralAmericaMap: React.FC = () => {
  const [selectedCountryId, setSelectedCountryId] = useState<string>('el-salvador');
  const [hoveredCountryId, setHoveredCountryId] = useState<string | null>(null);
  const [showDepartmentsView, setShowDepartmentsView] = useState<boolean>(false);

  const activeCountry = CENTRAL_AMERICA_COUNTRIES.find((c) => c.id === selectedCountryId) || CENTRAL_AMERICA_COUNTRIES[2];
  const hoveredCountry = hoveredCountryId ? CENTRAL_AMERICA_COUNTRIES.find((c) => c.id === hoveredCountryId) : null;

  return (
    <div className="space-y-6">
      {/* Encabezado del Mapa */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Geopolítica Regional • Istmo Centroamericano</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-montenegrin">
            Mapa Interactivo de Centroamérica
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Explora las 7 naciones del istmo centroamericano: su extensión territorial, demografía, moneda,
            hitos históricos y la integración regional (SICA). Haz clic en cualquier país para inspeccionar su ficha técnica.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setShowDepartmentsView(false)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                !showDepartmentsView
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Mapa Regional (7 Naciones)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedCountryId('el-salvador');
                setShowDepartmentsView(true);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                showDepartmentsView
                  ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                  : 'bg-white/10 text-amber-300 hover:bg-white/20 border border-amber-400/30'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Foco en El Salvador (14 Departamentos)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Contenedor Principal: SVG del Mapa + Panel Inspector */}
      {!showDepartmentsView ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Columna SVG: Mapa Vectorial Interactivo */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 flex-wrap gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 font-mono">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Haz clic en un país para ver detalles:</span>
              </span>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                Seleccionado: {activeCountry.name} {activeCountry.flagEmoji}
              </span>
            </div>

            {/* Lienzo SVG Responsivo */}
            <div className="relative w-full aspect-[16/10] bg-gradient-to-b from-sky-50/60 via-slate-50/80 to-blue-50/40 rounded-2xl border border-slate-200/80 overflow-hidden flex items-center justify-center p-2">
              {/* Rosa de los vientos de fondo */}
              <div className="absolute top-3 right-4 opacity-15 pointer-events-none text-slate-900 font-mono text-[10px] flex flex-col items-center">
                <span>▲ N</span>
                <Compass className="w-10 h-10 mt-0.5" />
              </div>

              {/* Océanos rotulados */}
              <div className="absolute top-4 left-6 text-[10px] sm:text-xs font-serif italic text-sky-400 pointer-events-none select-none tracking-widest uppercase">
                Mar Caribe / Atlántico
              </div>
              <div className="absolute bottom-4 left-10 text-[10px] sm:text-xs font-serif italic text-blue-400 pointer-events-none select-none tracking-widest uppercase">
                Océano Pacífico
              </div>

              <svg
                viewBox="80 40 730 480"
                className="w-full h-full drop-shadow-sm select-none"
                aria-label="Mapa interactivo de Centroamérica"
              >
                {/* Rutas SVG de cada país */}
                {CENTRAL_AMERICA_COUNTRIES.map((country) => {
                  const isSelected = selectedCountryId === country.id;
                  const isHovered = hoveredCountryId === country.id;
                  const isElSalvador = country.id === 'el-salvador';

                  return (
                    <g
                      key={country.id}
                      onClick={() => setSelectedCountryId(country.id)}
                      onMouseEnter={() => setHoveredCountryId(country.id)}
                      onMouseLeave={() => setHoveredCountryId(null)}
                      className="cursor-pointer transition-transform duration-200"
                    >
                      <path
                        d={country.svgPath}
                        fill={isHovered ? country.hoverColor : isSelected ? country.color : `${country.color}cc`}
                        stroke={isSelected ? '#ffffff' : country.accentBorder}
                        strokeWidth={isSelected ? (isElSalvador ? '4' : '3') : '1.5'}
                        strokeLinejoin="round"
                        className="transition-all duration-300 hover:filter hover:brightness-110"
                      />
                      {/* Texto del Nombre del País */}
                      <text
                        x={country.centerText.x}
                        y={country.centerText.y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="font-bold pointer-events-none select-none"
                        fill="#ffffff"
                        fontSize={country.id === 'el-salvador' ? '13' : '12'}
                        style={{
                          textShadow: '0 1px 3px rgba(0,0,0,0.8), 0 0 1px rgba(0,0,0,0.9)',
                          fontWeight: isSelected ? '900' : '700',
                        }}
                      >
                        {country.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Píldoras Rápidas de los 7 Países */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 pt-1">
              {CENTRAL_AMERICA_COUNTRIES.map((country) => {
                const isSelected = selectedCountryId === country.id;
                return (
                  <button
                    key={country.id}
                    type="button"
                    onClick={() => setSelectedCountryId(country.id)}
                    className={`p-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <span className="text-base">{country.flagEmoji}</span>
                    <span className="text-[11px] font-bold truncate max-w-full mt-0.5">{country.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Columna Lateral: Ficha Técnica de la Nación Seleccionada */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-3xl">{activeCountry.flagEmoji}</span>
                <div>
                  <h3 className="text-xl font-black text-slate-900">{activeCountry.name}</h3>
                  <p className="text-xs text-slate-500 font-medium">Capital: {activeCountry.capital}</p>
                </div>
              </div>
              {activeCountry.id === 'el-salvador' && (
                <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full border border-amber-300">
                  Cuna KUSKAT
                </span>
              )}
            </div>

            <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
              {activeCountry.summary}
            </p>

            {/* Métricas Principales */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[10px] uppercase mb-1">
                  <Landmark className="w-3.5 h-3.5 text-blue-600" />
                  <span>Superficie</span>
                </div>
                <span className="font-bold text-slate-900 font-mono">
                  {activeCountry.areaKm2.toLocaleString()} km²
                </span>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[10px] uppercase mb-1">
                  <Users className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Población</span>
                </div>
                <span className="font-bold text-slate-900 font-mono">{activeCountry.population}</span>
              </div>

              <div className="col-span-2 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[10px] uppercase mb-1">
                  <Coins className="w-3.5 h-3.5 text-amber-600" />
                  <span>Moneda Oficial</span>
                </div>
                <span className="font-bold text-slate-900 font-mono">{activeCountry.currency}</span>
              </div>
            </div>

            {/* Puntos Destacados */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Aspectos Clave y Geografía:</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {activeCountry.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white p-2 rounded-xl border border-slate-200/60 shadow-2xs">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guía Universitaria Superior Regional (SICA) */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5 font-mono">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                  <span>Educación Superior SICA:</span>
                </h4>
                <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-800 px-2 py-0.5 rounded border border-blue-200">
                  {activeCountry.universityGuide.acronym} • Fund. {activeCountry.universityGuide.founded}
                </span>
              </div>

              <div className="bg-[#FAF9F5] p-3 rounded-xl border border-[#E5E3D8] space-y-2 text-xs">
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                    Universidad Nacional Emblemática:
                  </span>
                  <strong className="text-slate-900 font-bold text-xs">
                    {activeCountry.universityGuide.mainUniversity} ({activeCountry.universityGuide.acronym})
                  </strong>
                </div>

                <div className="text-[11px] text-slate-700 leading-relaxed bg-white/80 p-2 rounded-lg border border-[#E5E3D8]">
                  <strong className="text-slate-900 font-semibold block mb-0.5">Sistema de Admisión:</strong>
                  {activeCountry.universityGuide.admissionSystem}
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Áreas de Especialización Clave:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {activeCountry.universityGuide.focusAreas.map((area, aIdx) => (
                      <span
                        key={aIdx}
                        className="text-[10.5px] font-medium bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-700 shadow-2xs"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Si es El Salvador, ofrecer botón para explorar los 14 departamentos */}
            {activeCountry.id === 'el-salvador' && (
              <button
                type="button"
                onClick={() => setShowDepartmentsView(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <span>Ver los 14 Departamentos de El Salvador</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Vista Detallada de los 14 Departamentos de El Salvador */
        <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇸🇻</span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-montenegrin">
                  División Político-Administrativa: 14 Departamentos
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                El Salvador se organiza en 14 departamentos agrupados en tres zonas geográficas tradicionales:
                Occidental (3), Central y Paracentral (7), y Oriental (4).
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowDepartmentsView(false)}
              className="self-start sm:self-auto px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
            >
              ← Volver al Mapa de Centroamérica
            </button>
          </div>

          {/* Grid de los 14 Departamentos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
            {SALVADOR_DEPARTMENTS.map((dept, idx) => (
              <div
                key={dept.id}
                className="bg-slate-50 hover:bg-white rounded-2xl p-4 border border-slate-200 hover:border-blue-300 transition-all shadow-2xs hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                      {dept.id} • #{idx + 1}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Zona {dept.region}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-sm text-slate-900">{dept.name}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Cabecera Departamental: <strong className="text-slate-800">{dept.cabecera}</strong>
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-200/80 text-[11px] text-slate-700 font-medium">
                  {dept.symbol}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CentralAmericaMap;

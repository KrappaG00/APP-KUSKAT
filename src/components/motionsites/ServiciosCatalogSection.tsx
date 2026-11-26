import React from 'react';
import {
  Scissors,
  Sparkles,
  Clock,
  MessageCircle,
  Instagram,
  Share2,
  Globe,
  Palette,
  PlusCircle,
  GraduationCap,
  ShieldCheck,
  Briefcase,
  CheckCircle2,
} from 'lucide-react';
import {
  BEAUTY_SECTION,
  DIGITAL_CATALOG,
  OFFICIAL_WHATSAPP_DISPLAY,
  OFFICIAL_WHATSAPP_URL,
} from './data/servicesCatalog';

export const ServiciosCatalogSection: React.FC = () => {
  const buildQuoteUrl = (subject: string) =>
    `${OFFICIAL_WHATSAPP_URL}?text=${encodeURIComponent(
      `Hola KUSKAT, me interesa solicitar información sobre: ${subject}`
    )}`;

  return (
    <section
      id="area-de-servicios"
      aria-label="Área de Servicios KUSKAT"
      className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-8 space-y-8 min-w-0"
    >
      {/* Encabezado Principal: Área de Servicios */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B3D] text-[#C59B27] text-xs font-bold tracking-wide border border-[#C59B27]/40 shadow-xs">
          <Briefcase className="w-3.5 h-3.5 shrink-0" />
          <span>Área de Servicios KUSKAT</span>
        </div>
        <h1 className="font-montenegrin text-2xl sm:text-4xl font-black text-[#0B1B3D] tracking-tight break-words">
          Área de Servicios — Belleza &amp; Soluciones Digitales
        </h1>
        <p className="font-caslon text-sm sm:text-base text-slate-600 leading-relaxed">
          Servicios profesionales de <strong>Kuskat Academia y Salón</strong> en primer lugar y el{' '}
          <strong>Catálogo de Servicios Digitales de KUSKAT S.A.S. de C.V.</strong> para hacer
          crecer tu imagen y tu negocio.
        </p>
      </div>

      {/* ================================================================== */}
      {/* 1. PRIMERO: ÁREA DE BELLEZA — KUSKAT ACADEMIA Y SALÓN (SECCIÓN 1)  */}
      {/* ================================================================== */}
      <article
        id="servicios-belleza"
        aria-label="Área de Belleza: Kuskat Academia y Salón"
        className="bg-white rounded-3xl border-2 border-[#C59B27]/40 shadow-corporate-subtle p-4 sm:p-8 space-y-6 min-w-0"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-200">
          <div className="space-y-1 min-w-0">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-[#9E472A]">
              <Scissors className="w-3.5 h-3.5 shrink-0" />
              <span>Área de Belleza • Prioridad 1</span>
            </div>
            <h2 className="font-montenegrin text-xl sm:text-2xl lg:text-3xl font-black text-[#0B1B3D] break-words">
              {BEAUTY_SECTION.sectionTag}
            </h2>
            <p className="font-caslon text-xs sm:text-sm text-slate-600">
              {BEAUTY_SECTION.subtitle}
            </p>
          </div>
          <span className="self-start sm:self-center inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0B1B3D] text-white text-xs font-bold shadow-xs shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>{BEAUTY_SECTION.badge}</span>
          </span>
        </div>

        {/* Tabla/Grilla Responsiva de los 8 Servicios de Belleza */}
        <div className="overflow-hidden rounded-2xl border border-[#0B1B3D]/20">
          <div className="hidden md:grid md:grid-cols-4 bg-[#0B1B3D] text-white text-xs font-bold uppercase tracking-wider">
            <div className="px-4 py-3 border-r border-white/15">Servicio</div>
            <div className="px-4 py-3 border-r border-white/15 text-right">Precio</div>
            <div className="px-4 py-3 border-r border-white/15">Servicio</div>
            <div className="px-4 py-3 text-right">Precio</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:gap-px bg-slate-200">
            {BEAUTY_SECTION.services.map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between gap-3 bg-white px-4 py-3.5 hover:bg-[#FAF9F5] transition-colors min-w-0"
              >
                <span className="font-caslon text-sm font-semibold text-[#0B1B3D] break-words">
                  {service.name}
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#0B1B3D] bg-[#FAF9F5] border border-[#C59B27]/40 px-2.5 py-1 rounded-lg shrink-0 whitespace-nowrap">
                  {service.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Promocional Full Spa Capilar */}
        <div className="bg-[#0B1B3D] text-white rounded-2xl p-4 sm:p-5 text-center space-y-1.5 shadow-sm">
          <p className="text-xs sm:text-sm font-extrabold tracking-wide text-[#C59B27] uppercase">
            {BEAUTY_SECTION.promoBanner.title}: {BEAUTY_SECTION.promoBanner.treatments.join(', ')}
          </p>
          <p className="text-sm sm:text-base font-bold text-white">
            {BEAUTY_SECTION.promoBanner.individualPrice} |{' '}
            <span className="text-[#FDE68A]">{BEAUTY_SECTION.promoBanner.comboPrice}</span>
          </p>
        </div>

        {/* Horarios y Canales de Reserva */}
        <div className="bg-[#FAF9F5] rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
          <div className="space-y-1.5 min-w-0">
            <p className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-semibold text-[#0B1B3D] flex-wrap">
              <Clock className="w-4 h-4 text-[#C59B27] shrink-0" />
              <span>
                <strong>{BEAUTY_SECTION.hoursLabel}</strong> {BEAUTY_SECTION.hoursText}
              </span>
            </p>
            <p className="text-xs sm:text-sm text-slate-700 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1">
              <span className="font-semibold text-[#0B1B3D]">
                {BEAUTY_SECTION.contact.whatsappText} ({OFFICIAL_WHATSAPP_DISPLAY})
              </span>
              <span aria-hidden="true" className="text-slate-300">
                |
              </span>
              <a
                href={BEAUTY_SECTION.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-pink-700 hover:underline font-semibold"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram: {BEAUTY_SECTION.contact.instagramDisplay}</span>
              </a>
              <span aria-hidden="true" className="text-slate-300">
                |
              </span>
              <a
                href={BEAUTY_SECTION.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-700 hover:underline font-semibold"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Facebook: {BEAUTY_SECTION.contact.facebookDisplay}</span>
              </a>
            </p>
          </div>

          <a
            href={BEAUTY_SECTION.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors shrink-0 w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Reservar Cita ({OFFICIAL_WHATSAPP_DISPLAY})</span>
          </a>
        </div>
      </article>

      {/* ================================================================== */}
      {/* 2. CATÁLOGO DE SERVICIOS DIGITALES — KUSKAT S.A.S. de C.V.         */}
      {/* ================================================================== */}
      <article
        id="servicios-digitales"
        aria-label="Catálogo de Servicios Digitales KUSKAT S.A.S. de C.V."
        className="bg-white rounded-3xl border border-slate-200/90 shadow-corporate-subtle p-4 sm:p-8 space-y-8 min-w-0"
      >
        {/* Encabezado del Catálogo Digital */}
        <div className="border-b-2 border-[#0B1B3D] pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="space-y-1 min-w-0">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B1B3D]">
              {DIGITAL_CATALOG.company}
            </p>
            <h2 className="font-montenegrin text-xl sm:text-3xl font-black text-[#0B1B3D] tracking-tight break-words">
              {DIGITAL_CATALOG.title}
            </h2>
            <p className="font-caslon text-sm text-slate-600">{DIGITAL_CATALOG.subtitle}</p>
          </div>
          <a
            href={buildQuoteUrl('Catálogo de Servicios Digitales KUSKAT S.A.S. de C.V.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#0B1B3D] hover:bg-slate-800 text-white text-xs font-bold transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#C59B27]" />
            <span>Cotizar por WhatsApp ({OFFICIAL_WHATSAPP_DISPLAY})</span>
          </a>
        </div>

        {/* CONDICIONES GENERALES */}
        <div className="rounded-2xl border-2 border-[#0B1B3D]/20 bg-[#FAF9F5] p-4 sm:p-5 space-y-2.5">
          <h3 className="font-montenegrin text-sm sm:text-base font-black text-[#0B1B3D] flex items-center gap-2 uppercase tracking-wide">
            <ShieldCheck className="w-4 h-4 text-[#C59B27] shrink-0" />
            <span>{DIGITAL_CATALOG.generalConditionsTitle}</span>
          </h3>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-caslon">
            {DIGITAL_CATALOG.generalConditions.map((cond, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0B1B3D] shrink-0 mt-0.5" />
                <span>{cond}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SECCIÓN 1: Redes Sociales y Presencia */}
        <div className="space-y-4">
          <h3 className="font-montenegrin text-lg sm:text-xl font-black text-[#0B1B3D] border-b border-slate-200 pb-2 flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#0B1B3D] shrink-0" />
            <span>{DIGITAL_CATALOG.section1.title}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DIGITAL_CATALOG.section1.plans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 flex flex-col justify-between gap-3 hover:border-[#0B1B3D]/40 transition-colors min-w-0"
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-editorial text-base font-bold text-[#0B1B3D] break-words">
                      {plan.name}
                    </h4>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#0B1B3D] text-white shrink-0">
                      {plan.price}
                    </span>
                  </div>
                  <p className="font-caslon text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {plan.description}
                  </p>
                </div>
                <a
                  href={buildQuoteUrl(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0B1B3D] hover:text-blue-700 inline-flex items-center gap-1.5 pt-2 border-t border-slate-200/80"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Solicitar {plan.name}</span>
                </a>
              </div>
            ))}
          </div>
          <p className="font-caslon italic text-xs text-slate-500">
            {DIGITAL_CATALOG.section1.footnote}
          </p>
        </div>

        {/* SECCIÓN 2: Mantenimiento Web */}
        <div className="space-y-4">
          <h3 className="font-montenegrin text-lg sm:text-xl font-black text-[#0B1B3D] border-b border-slate-200 pb-2 flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#0B1B3D] shrink-0" />
            <span>{DIGITAL_CATALOG.section2.title}</span>
          </h3>
          <div className="rounded-2xl bg-[#0B1B3D] text-white px-4 py-3 text-xs sm:text-sm font-semibold text-center leading-relaxed">
            {DIGITAL_CATALOG.section2.highlightBanner}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DIGITAL_CATALOG.section2.plans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col justify-between gap-3 hover:border-[#0B1B3D]/40 transition-colors min-w-0 shadow-2xs"
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-editorial text-base font-bold text-[#0B1B3D] break-words">
                      {plan.name}
                    </h4>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#FAF9F5] border border-[#C59B27]/50 text-[#0B1B3D] shrink-0">
                      {plan.price}
                    </span>
                  </div>
                  <p className="font-caslon text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {plan.description}
                  </p>
                </div>
                <a
                  href={buildQuoteUrl(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0B1B3D] hover:text-blue-700 inline-flex items-center gap-1.5 pt-2 border-t border-slate-100"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Cotizar {plan.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* SECCIÓN 3: Diseño y Marca Personal */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
            <h3 className="font-montenegrin text-lg sm:text-xl font-black text-[#0B1B3D] flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#0B1B3D] shrink-0" />
              <span>{DIGITAL_CATALOG.section3.title}</span>
            </h3>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-[#0B1B3D] text-xs font-bold border border-slate-200">
              {DIGITAL_CATALOG.section3.badge}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DIGITAL_CATALOG.section3.plans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 flex flex-col justify-between gap-2.5 min-w-0"
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-editorial text-sm sm:text-base font-bold text-[#0B1B3D] break-words">
                      {plan.name}
                    </h4>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-[#0B1B3D] text-white shrink-0">
                      {plan.price}
                    </span>
                  </div>
                  <p className="font-caslon text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {plan.description}
                  </p>
                </div>
                <a
                  href={buildQuoteUrl(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0B1B3D] hover:text-blue-700 inline-flex items-center gap-1 pt-2 border-t border-slate-200/70"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Solicitar</span>
                </a>
              </div>
            ))}
          </div>
          <p className="font-caslon italic text-xs text-slate-500">
            {DIGITAL_CATALOG.section3.footnote}
          </p>
        </div>

        {/* SECCIÓN 4: Servicios Adicionales (Add-ons) */}
        <div className="space-y-4">
          <h3 className="font-montenegrin text-lg sm:text-xl font-black text-[#0B1B3D] border-b border-slate-200 pb-2 flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-[#0B1B3D] shrink-0" />
            <span>{DIGITAL_CATALOG.section4.title}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-200">
              {DIGITAL_CATALOG.section4.leftItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 px-4 py-3 bg-white text-xs sm:text-sm"
                >
                  <span className="font-caslon font-semibold text-[#0B1B3D]">{item.name}:</span>
                  <span className="font-mono font-bold text-[#0B1B3D] shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-200">
              {DIGITAL_CATALOG.section4.rightItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 px-4 py-3 bg-white text-xs sm:text-sm"
                >
                  <span className="font-caslon font-semibold text-[#0B1B3D]">{item.name}:</span>
                  <span className="font-mono font-bold text-[#0B1B3D] shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECCIÓN 5: Talleres y Cursos */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2">
            <h3 className="font-montenegrin text-lg sm:text-xl font-black text-[#0B1B3D] flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#0B1B3D] shrink-0" />
              <span>{DIGITAL_CATALOG.section5.title}</span>
            </h3>
            <span className="px-3.5 py-1 rounded-full bg-[#0B1B3D] text-white text-xs font-bold">
              {DIGITAL_CATALOG.section5.badge}
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DIGITAL_CATALOG.section5.plans.map((plan) => (
              <div
                key={plan.id}
                className="rounded-2xl border border-slate-200 bg-[#FAF9F5] p-4 flex flex-col justify-between gap-3 min-w-0"
              >
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-editorial text-base font-bold text-[#0B1B3D] break-words">
                      {plan.name}
                    </h4>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#0B1B3D] text-[#C59B27] shrink-0">
                      {plan.price}
                    </span>
                  </div>
                  <p className="font-caslon text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {plan.description}
                  </p>
                </div>
                <a
                  href={buildQuoteUrl(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0B1B3D] hover:text-blue-700 inline-flex items-center gap-1.5 pt-2 border-t border-slate-200/80"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Inscribirme por WhatsApp</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

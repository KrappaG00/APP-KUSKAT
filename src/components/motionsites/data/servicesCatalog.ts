export interface BeautyServiceItem {
  id: string;
  name: string;
  price: string;
}

export interface BeautyPromoBanner {
  title: string;
  treatments: string[];
  individualPrice: string;
  comboPrice: string;
}

export interface DigitalServicePlan {
  id: string;
  name: string;
  price: string;
  description: string;
}

export interface AddonServiceItem {
  id: string;
  name: string;
  price: string;
}

export const OFFICIAL_WHATSAPP_DISPLAY = '+503 7657 4463';
export const OFFICIAL_WHATSAPP_SHORT = '7657-4463';
export const OFFICIAL_WHATSAPP_URL = 'https://wa.me/50376574463';

export const BEAUTY_SECTION = {
  sectionTag: 'SECCIÓN 6: Kuskat Academia y Salón',
  areaTitle: 'Área de Belleza — Kuskat Academia y Salón',
  badge: 'Servicios y Promociones',
  subtitle: 'Estilismo profesional, tratamientos capilares y atención personalizada.',
  services: [
    { id: 'tintes', name: 'Tintes', price: 'desde $25' },
    { id: 'alisados', name: 'Alisados', price: 'desde $30' },
    { id: 'mechas-balayage', name: 'Mechas y Balayage', price: 'desde $50' },
    { id: 'lavado-planchado', name: 'Lavado y Planchado', price: 'desde $15' },
    { id: 'maquillaje-ondas', name: 'Maquillaje y Ondas', price: 'desde $35' },
    {
      id: 'combo-lavado-corte',
      name: 'Combo: Lavado + Corte + Planchado o Pistoleado',
      price: 'desde $20',
    },
    {
      id: 'cabello-rizado',
      name: 'Cabello Rizado: Tratamiento, Lavado y Corte',
      price: 'desde $20',
    },
    { id: 'corte-hombre', name: 'Corte para Hombre', price: 'desde $3' },
  ] as BeautyServiceItem[],
  promoBanner: {
    title: 'TRATAMIENTOS CAPILARES',
    treatments: ['Anticaspa', 'Anticaída', 'Antifrizz'],
    individualPrice: 'Cada uno $15',
    comboPrice: '¡Los tres por $30 Full Spa Capilar!',
  } as BeautyPromoBanner,
  hoursLabel: 'Horarios:',
  hoursText: 'Lunes a Viernes 8:00 a.m. - 10:00 p.m. | Sábado y Domingo 9:00 a.m. - 5:00 p.m.',
  contact: {
    whatsappText: `Reserva tu cita al WhatsApp: ${OFFICIAL_WHATSAPP_SHORT}`,
    whatsappFull: OFFICIAL_WHATSAPP_DISPLAY,
    whatsappUrl: `${OFFICIAL_WHATSAPP_URL}?text=${encodeURIComponent(
      'Hola KUSKAT Academia y Salón, deseo reservar una cita de belleza.'
    )}`,
    instagramHandle: '@kuskat.es',
    instagramDisplay: 'kuskat.es',
    instagramUrl: 'https://www.instagram.com/kuskat.es/',
    facebookDisplay: 'Kuskat',
    facebookUrl: 'https://www.facebook.com/Kuskat.es/',
  },
};

export const DIGITAL_CATALOG = {
  company: 'KUSKAT S.A.S. de C.V.',
  title: 'CATÁLOGO DE SERVICIOS DIGITALES',
  subtitle: 'Soluciones accesibles para hacer crecer tu negocio.',
  generalConditionsTitle: 'CONDICIONES GENERALES',
  generalConditions: [
    'Todos los planes mensuales requieren un contrato de prueba mínima de 18 meses.',
    'Si decides continuar después de la prueba, el contrato de renovación es por un mínimo de 10 años.',
    'Los planes de Mantenimiento Web requieren un Pago de Inicio único de $89 para comenzar a trabajar (la mensualidad se paga aparte).',
  ],
  section1: {
    title: 'SECCIÓN 1: Redes Sociales y Presencia',
    plans: [
      {
        id: 'presencia-semilla',
        name: 'Presencia Semilla',
        price: '$39/mes',
        description:
          'Para el negocio que quiere estar activo (2 publicaciones, 3 historias, respuesta a mensajes 1 día/semana)',
      },
      {
        id: 'whatsapp-semilla',
        name: 'WhatsApp Semilla',
        price: '$19/mes + $15 de instalación',
        description:
          'Para negocios con muchos mensajes (Configuración de WhatsApp Business, catálogo de 5 productos, menú automático)',
      },
      {
        id: 'community-manager-semilla',
        name: 'Community Manager Semilla',
        price: '$49/mes',
        description:
          'Para presencia constante (4 publicaciones, 4 historias, 1 video corto, atención 2 días/semana)',
      },
      {
        id: 'crecimiento-semilla',
        name: 'Crecimiento Semilla',
        price: '$99/mes',
        description:
          'Para vender más (5 publicaciones, 6 historias, 1 video, 1 campaña de publicidad en Facebook/Instagram al mes)',
      },
      {
        id: 'integral-semilla',
        name: 'Integral Semilla',
        price: '$119/mes',
        description:
          'Para delegar casi todo (6 publicaciones, 8 historias, 1 video, gestión de WhatsApp y 1 campaña de publicidad)',
      },
    ] as DigitalServicePlan[],
    footnote:
      '*La pauta publicitaria (publicidad), dominios y hostings se pagan aparte directamente a Facebook/Google.',
  },
  section2: {
    title: 'SECCIÓN 2: Mantenimiento Web',
    highlightBanner:
      'Para negocios que quieren mantener su página web segura y rápida. ¡ESTOS PLANES SÍ INCLUYEN EL DOMINIO Y EL HOSTING! (Requiere pago de inicio único de $89)',
    plans: [
      {
        id: 'plan-presencia',
        name: 'Plan Presencia',
        price: '$65/mes',
        description: 'Respaldos, seguridad, SSL y monitoreo',
      },
      {
        id: 'plan-esencial',
        name: 'Plan Esencial',
        price: '$199/mes',
        description: 'Lo anterior + ajustes pequeños de textos o fotos',
      },
      {
        id: 'plan-estandar',
        name: 'Plan Estándar',
        price: '$349/mes',
        description: 'Cambios menores + revisión técnica + soporte',
      },
      {
        id: 'plan-crecimiento',
        name: 'Plan Crecimiento',
        price: '$599/mes',
        description: 'Actualización de contenido + Optimización en Google (SEO) + reportes',
      },
      {
        id: 'plan-premium',
        name: 'Plan Premium',
        price: '$899/mes',
        description: 'Soporte prioritario + informes ejecutivos + mejoras continuas',
      },
      {
        id: 'plan-elite',
        name: 'Plan Elite',
        price: '$1,299/mes',
        description: 'Integraciones personalizadas + tienda en línea + optimización de ventas',
      },
    ] as DigitalServicePlan[],
  },
  section3: {
    title: 'SECCIÓN 3: Diseño y Marca Personal',
    badge: '(Pago Único)',
    plans: [
      {
        id: 'logo-semilla',
        name: 'Logo Semilla',
        price: '$39',
        description: 'Diseño de logo (2 propuestas y 2 ajustes)',
      },
      {
        id: 'manual-marca-semilla',
        name: 'Manual de Marca Semilla',
        price: '$59',
        description: 'Documento con los colores, letras y uso correcto de tu logo',
      },
      {
        id: 'paquete-marca-semilla',
        name: 'Paquete Marca Semilla',
        price: '$79',
        description: 'Logo + Manual de Marca',
      },
      {
        id: 'web-semilla',
        name: 'Web Semilla',
        price: '$89',
        description: 'Página web de una pantalla con botón de WhatsApp',
      },
    ] as DigitalServicePlan[],
    footnote: '*No incluye dominio ni hosting.',
  },
  section4: {
    title: 'SECCIÓN 4: Servicios Adicionales (Add-ons)',
    leftItems: [
      { id: 'publicacion-adicional', name: 'Publicación adicional', price: '$4' },
      { id: 'video-corto-adicional', name: 'Video corto adicional', price: '$9' },
      { id: 'sesion-fotos', name: 'Sesión de fotos', price: '$30' },
      { id: 'config-campana', name: 'Config. de campaña de publicidad', price: '$20' },
    ] as AddonServiceItem[],
    rightItems: [
      { id: 'chatbot', name: 'Respuestas automáticas (Chatbot)', price: '$50' },
      { id: 'capacitacion', name: 'Capacitación', price: '$12/hora' },
      { id: 'trabajo-hora', name: 'Trabajo por hora', price: '$7/hora' },
    ] as AddonServiceItem[],
  },
  section5: {
    title: 'SECCIÓN 5: Talleres y Cursos',
    badge: 'Sin contratos de permanencia',
    plans: [
      {
        id: 'kit-inicio-digital',
        name: 'Kit de Inicio Digital',
        price: '$25 pago único',
        description: 'Plantillas, guías y tutorial',
      },
      {
        id: 'taller-grupal',
        name: 'Taller Grupal',
        price: '$12 por negocio',
        description: '2 horas prácticas para configurar redes y WhatsApp',
      },
      {
        id: 'membresia-plantillas',
        name: 'Membresía de Plantillas',
        price: '$17/mes',
        description: 'Plantillas nuevas cada mes y sesión grupal',
      },
    ] as DigitalServicePlan[],
  },
};

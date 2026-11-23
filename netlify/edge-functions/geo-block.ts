// Netlify Edge Function: geo-block.ts
// Acceso global abierto para usuarios, revisores humanos y rastreadores de Google AdSense (sin HTTP 403).
// Además, enruta peticiones HTML con ?tab=<ruta> hacia su versión pre-renderizada estática en /routes/<tab>.html
// para entregar canonical único, metadatos SEO y contenido editorial sustantivo antes de hidratar React.

interface NetlifyContext {
  geo?: {
    country?: {
      code?: string;
      name?: string;
    };
  };
  next: () => Promise<Response>;
  rewrite: (url: string) => Promise<Response>;
}

export const GOOGLE_BOT_REGEX =
  /(Googlebot|Mediapartners-Google|AdsBot-Google|Google-Adwords|FeedFetcher-Google)/i;

export const PRERENDERED_TABS = new Set([
  'academic-reinforcement',
  'practice',
  'categories',
  'driver-license',
  'patriotic-history',
  'languages',
  'technical-courses',
  'residentado-medico',
  'notary-exam',
  'derecho-administrativo',
  'ingenieria-ciencias',
  'salud-primaria',
  'cssp-health',
  'ansp-ascenso',
  'compliance-financial',
  'constitution',
  'oral-litigation',
  'siget-solar',
  'jovenes-talento',
  'formula-lab',
  'one-page-sheets',
  'central-america',
  'latex',
]);

export const TAB_URL_ALIASES: Record<string, string> = {
  refuerzo: 'academic-reinforcement',
  simulator: 'practice',
  'cursos-tecnicos': 'technical-courses',
  medicina: 'residentado-medico',
  notariado: 'notary-exam',
  cssp: 'cssp-health',
  'compliance-aml': 'compliance-financial',
  lenguas: 'languages',
};

const STATIC_FILE_EXTENSIONS = [
  '.png', '.jpg', '.jpeg', '.svg', '.ico', '.webp',
  '.css', '.js', '.woff', '.woff2', '.ttf', '.json', '.txt', '.xml', '.html',
];

export function resolvePrerenderedTab(rawParam: string | null): string | null {
  if (!rawParam) return null;
  const cleaned = rawParam.trim().toLowerCase();
  if (PRERENDERED_TABS.has(cleaned)) return cleaned;
  return TAB_URL_ALIASES[cleaned] || null;
}

export default async function geoBlockHandler(request: Request, context: NetlifyContext) {
  const url = new URL(request.url);

  // 1. Permitir siempre archivos estáticos y páginas HTML independientes
  if (
    url.pathname === '/robots.txt' ||
    url.pathname === '/sitemap.xml' ||
    url.pathname === '/ads.txt' ||
    STATIC_FILE_EXTENSIONS.some((ext) => url.pathname.endsWith(ext))
  ) {
    return context.next();
  }

  // 2. Servir HTML pre-renderizado por ruta cuando se solicita /?tab=<ruta>
  if (request.method === 'GET' && url.pathname === '/' && url.searchParams.has('tab')) {
    const resolvedTab = resolvePrerenderedTab(url.searchParams.get('tab'));
    const accept = request.headers.get('accept') || '';
    const userAgent = request.headers.get('user-agent') || '';
    const wantsHtml = accept.includes('text/html') || accept === '' || accept.includes('*/*') || GOOGLE_BOT_REGEX.test(userAgent);

    if (resolvedTab && wantsHtml) {
      try {
        return await context.rewrite(`/routes/${resolvedTab}.html`);
      } catch {
        return context.next();
      }
    }
  }

  // 3. Acceso global abierto sin bloqueos HTTP 403
  return context.next();
}

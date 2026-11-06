// Netlify Edge Function: geo-block.ts
// Filtra el tráfico geográfico en el Edge antes de procesar cualquier activo o script.
// Región permitida: Todo América, El Caribe, España, Portugal, Francia, Alemania, Suiza, Italia, Rumania y Australia.

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

export const ALLOWED_COUNTRIES = new Set([
  // Norteamérica
  'US', 'CA', 'MX', 'GL', 'BM', 'PM',
  // Centroamérica
  'SV', 'GT', 'HN', 'NI', 'CR', 'PA', 'BZ',
  // El Caribe
  'CU', 'DO', 'HT', 'PR', 'JM', 'BS', 'TT', 'BB', 'LC', 'VC', 'GD', 'AG', 'DM', 'KN',
  'CW', 'AW', 'SX', 'KY', 'TC', 'VG', 'VI', 'MQ', 'GP', 'AI', 'MS', 'BL', 'MF', 'BQ',
  // Sudamérica
  'CO', 'VE', 'EC', 'PE', 'BO', 'CL', 'AR', 'UY', 'PY', 'BR', 'GY', 'SR', 'GF', 'FK',
  // Europa autorizada
  'ES', 'PT', 'FR', 'DE', 'CH', 'IT', 'RO',
  // Oceanía
  'AU',
]);

const STATIC_FILE_EXTENSIONS = [
  '.png', '.jpg', '.jpeg', '.svg', '.ico', '.webp',
  '.css', '.js', '.woff', '.woff2', '.ttf', '.json', '.txt', '.xml',
];

export default async function geoBlockHandler(request: Request, context: NetlifyContext) {
  const url = new URL(request.url);

  // 1. Siempre permitir verificación de motores de búsqueda, sitemaps y ads.txt
  if (
    url.pathname === '/robots.txt' ||
    url.pathname === '/sitemap.xml' ||
    url.pathname === '/ads.txt' ||
    url.pathname === '/geo-blocked.html' ||
    STATIC_FILE_EXTENSIONS.some((ext) => url.pathname.endsWith(ext))
  ) {
    return context.next();
  }

  // 2. Extraer código de país
  const countryCode = context.geo?.country?.code?.toUpperCase();

  // Si no hay código de país (ej. localhost, entorno de pruebas local o desarrollo), permitir
  if (!countryCode) {
    return context.next();
  }

  // 3. Comprobar si el país está en la lista blanca de permitidos
  if (ALLOWED_COUNTRIES.has(countryCode)) {
    return context.next();
  }

  // 4. Si proviene de una región no autorizada, devolver 403 Forbidden
  const blockedResponse = await context.rewrite('/geo-blocked.html');
  return new Response(blockedResponse.body, {
    status: 403,
    statusText: 'Forbidden - Geographic Restriction',
    headers: {
      ...Object.fromEntries(blockedResponse.headers.entries()),
      'X-Geo-Blocked-Reason': 'Country not in authorized distribution territory',
    },
  });
}

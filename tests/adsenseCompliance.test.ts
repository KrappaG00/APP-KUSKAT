import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Auditoría Completa de Cumplimiento Google AdSense, E-E-A-T y Acceso Global', () => {
  const rootDir = process.cwd();

  it('1. Existen las 4 páginas HTML independientes E-E-A-T sin anuncios ni teléfono privado', () => {
    const pages = ['privacidad.html', 'terminos.html', 'sobre-nosotros.html', 'contacto.html'];
    const privatePhone = ['7943', '9901'].join(' ');

    for (const page of pages) {
      const filePath = path.join(rootDir, 'public', page);
      expect(fs.existsSync(filePath), `Falta public/${page}`).toBe(true);
      const html = fs.readFileSync(filePath, 'utf-8');

      // Cero anuncios en páginas legales/institucionales
      expect(html).not.toContain('adsbygoogle');
      expect(html).not.toContain('ca-pub-');

      // Cero número privado
      expect(html).not.toContain(privatePhone);

      // Tipografía Tinos y enlace de retorno
      expect(html).toContain('Tinos');
      expect(html).toContain('href="/"');

      // Contenido sustantivo (>= 150 palabras visibles)
      const textOnly = html
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .trim();
      const words = textOnly.split(/\s+/).filter((w) => w.length > 1);
      expect(words.length, `public/${page} debe tener contenido sustantivo`).toBeGreaterThanOrEqual(150);
    }

    const contactoHtml = fs.readFileSync(path.join(rootDir, 'public', 'contacto.html'), 'utf-8');
    expect(contactoHtml).toContain('+503 7657 4463');
    expect(contactoHtml).toContain('@Kuskat.es');
  });

  it('2. public/sitemap.xml incluye las 4 URLs E-E-A-T', () => {
    const sitemap = fs.readFileSync(path.join(rootDir, 'public', 'sitemap.xml'), 'utf-8');
    expect(sitemap).toContain('https://kuskates.com/privacidad.html');
    expect(sitemap).toContain('https://kuskates.com/terminos.html');
    expect(sitemap).toContain('https://kuskates.com/sobre-nosotros.html');
    expect(sitemap).toContain('https://kuskates.com/contacto.html');
  });

  it('3. public/ads.txt contiene únicamente pub-4241045160320459', () => {
    const adsTxt = fs.readFileSync(path.join(rootDir, 'public', 'ads.txt'), 'utf-8').trim();
    expect(adsTxt).toBe('google.com, pub-4241045160320459, DIRECT, f08c47fec0942fa0');
    expect(adsTxt).not.toContain('pub-5120531548842494');
  });

  it('4. index.html ejecuta Consent Mode v2 antes de GTM y AdSense con región EEE/UK/CH', () => {
    const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
    const consentIdx = html.indexOf("gtag('consent', 'default'");
    const gtmIdx = html.indexOf('googletagmanager.com/gtm.js');
    const adsenseIdx = html.indexOf('pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');

    expect(consentIdx).toBeGreaterThan(-1);
    expect(gtmIdx).toBeGreaterThan(consentIdx);
    expect(adsenseIdx).toBeGreaterThan(gtmIdx);

    // Región EEE/UK/CH explícita
    expect(html).toContain("'region': ['AT'");
    expect(html).toContain("'ES'");
    expect(html).toContain("'GB'");
    expect(html).toContain("'CH'");
  });

  it('5. MotionSitesPortal.tsx mantiene 0 anuncios, guía editorial >600 palabras, tono institucional y enlaces <a href>', () => {
    const portalCode = fs.readFileSync(
      path.join(rootDir, 'src', 'components', 'motionsites', 'MotionSitesPortal.tsx'),
      'utf-8'
    );

    // 0 anuncios en Portal de Inicio
    expect(portalCode.match(/<AdBanner\b/g)).toBeNull();

    // Sin nota informal
    expect(portalCode).not.toContain('pequeño aporte economico a mis estudios universitarios');

    // Enlaces reales <a href> hacia páginas E-E-A-T y simulador
    expect(portalCode).toContain('href="/privacidad.html"');
    expect(portalCode).toContain('href="/terminos.html"');
    expect(portalCode).toContain('href="/sobre-nosotros.html"');
    expect(portalCode).toContain('href="/contacto.html"');
    expect(portalCode).toContain('href="/?tab=practice"');

    // Guía académica >600 palabras en el Portal de Inicio
    const guideStart = portalCode.indexOf('GUÍA ACADÉMICA OFICIAL');
    const guideEnd = portalCode.indexOf('7. PIE DE PÁGINA');
    expect(guideStart).toBeGreaterThan(-1);
    expect(guideEnd).toBeGreaterThan(guideStart);

    const guideSection = portalCode
      .slice(guideStart, guideEnd)
      .replace(/<[^>]+>/g, ' ')
      .replace(/\{[^}]*\}/g, ' ');
    const guideWords = guideSection.split(/\s+/).filter((w) => w.length > 1);
    expect(guideWords.length).toBeGreaterThan(600);
  });

  it('6. CallToActionFinal3D y CookieBanner usan hipervínculos reales <a href>', () => {
    const ctaCode = fs.readFileSync(
      path.join(rootDir, 'src', 'components', 'motionsites', 'CallToActionFinal3D.tsx'),
      'utf-8'
    );
    expect(ctaCode).toContain('<a');
    expect(ctaCode).toContain('href="/?tab=practice"');

    const cookieCode = fs.readFileSync(
      path.join(rootDir, 'src', 'components', 'CookieBanner.tsx'),
      'utf-8'
    );
    expect(cookieCode).toContain('<a');
    expect(cookieCode).toContain('href="/privacidad.html#cookies"');
  });

  it('7. package.json y scripts/prerender-routes.mjs están configurados para pre-renderizar rutas en build', () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf-8'));
    expect(pkg.scripts.build).toBe('vite build && node scripts/prerender-routes.mjs');
    expect(fs.existsSync(path.join(rootDir, 'scripts', 'prerender-routes.mjs'))).toBe(true);
  });
});

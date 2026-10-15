import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Integración de Google AdSense (Configuración y Política no invasiva)', () => {
  const rootDir = process.cwd();
  const indexHtmlPath = path.join(rootDir, 'index.html');
  const appTsxPath = path.join(rootDir, 'src', 'App.tsx');
  const adBannerPath = path.join(rootDir, 'src', 'components', 'AdBanner.tsx');

  it('index.html incluye la etiqueta de script oficial de Google AdSense con el publisher del usuario', () => {
    const html = fs.readFileSync(indexHtmlPath, 'utf-8');
    expect(html).toContain('pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
    expect(html).toContain('ca-pub-4241045160320459');
    expect(html).toContain('crossorigin="anonymous"');
  });

  it('AdBanner.tsx utiliza el data-ad-client oficial ca-pub-4241045160320459', () => {
    const code = fs.readFileSync(adBannerPath, 'utf-8');
    expect(code).toContain('ca-pub-4241045160320459');
    expect(code).toContain('adsbygoogle');
    expect(code).toContain('Publicidad');
  });

  it('App.tsx contiene exactamente 1 apartado publicitario situado exclusivamente al pie de página (footer)', () => {
    const appCode = fs.readFileSync(appTsxPath, 'utf-8');
    // Contamos las instancias de <AdBanner
    const matches = appCode.match(/<AdBanner\b/g);
    expect(matches).not.toBeNull();
    expect(matches!.length).toBe(1);

    // Verificamos que se encuentre en el pie de página (<footer>) y no dentro de <main>
    const mainSection = appCode.split('<main')[1]?.split('</main>')[0] || '';
    expect(mainSection).not.toContain('<AdBanner');

    const footerSection = appCode.split('<footer')[1]?.split('</footer>')[0] || '';
    expect(footerSection).toContain('<AdBanner');
  });
});

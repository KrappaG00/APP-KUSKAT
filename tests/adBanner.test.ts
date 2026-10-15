import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Verificación de Ausencia Total de Anuncios y Scripts Publicitarios', () => {
  const rootDir = process.cwd();
  const indexHtmlPath = path.join(rootDir, 'index.html');
  const appTsxPath = path.join(rootDir, 'src', 'App.tsx');
  const adBannerPath = path.join(rootDir, 'src', 'components', 'AdBanner.tsx');

  it('index.html no incluye scripts de Google AdSense ni dominios de publicidad', () => {
    const html = fs.readFileSync(indexHtmlPath, 'utf-8');
    expect(html).not.toContain('pagead2.googlesyndication.com');
    expect(html).not.toContain('adsbygoogle');
    expect(html).not.toContain('ca-pub-');
  });

  it('src/components/AdBanner.tsx no existe en el proyecto', () => {
    expect(fs.existsSync(adBannerPath)).toBe(false);
  });

  it('App.tsx no contiene componentes ni llamadas publicitarias', () => {
    const appCode = fs.readFileSync(appTsxPath, 'utf-8');
    expect(appCode).not.toContain('<AdBanner');
    expect(appCode).not.toContain('AdBanner');
    expect(appCode).not.toContain('adsbygoogle');
  });
});

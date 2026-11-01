import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Verificación de Integración de Google AdSense y Regla de 2 a 3 Anuncios por Página', () => {
  const rootDir = process.cwd();
  const indexHtmlPath = path.join(rootDir, 'index.html');
  const adBannerPath = path.join(rootDir, 'src', 'components', 'AdBanner.tsx');
  const appTsxPath = path.join(rootDir, 'src', 'App.tsx');
  const portalPath = path.join(rootDir, 'src', 'components', 'motionsites', 'MotionSitesPortal.tsx');
  const categoriesPath = path.join(rootDir, 'src', 'components', 'CategoryHierarchyViewer.tsx');
  const practicePath = path.join(rootDir, 'src', 'components', 'PracticeMode.tsx');

  it('index.html incluye el script oficial de Google AdSense con client ca-pub-4241045160320459', () => {
    expect(fs.existsSync(indexHtmlPath)).toBe(true);
    const html = fs.readFileSync(indexHtmlPath, 'utf-8');
    expect(html).toContain('pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
    expect(html).toContain('ca-pub-4241045160320459');
  });

  it('src/components/AdBanner.tsx existe y define un componente horizontal no invasivo con el texto requerido', () => {
    expect(fs.existsSync(adBannerPath)).toBe(true);
    const code = fs.readFileSync(adBannerPath, 'utf-8');
    expect(code).toContain('ca-pub-4241045160320459');
    expect(code).toContain('adsbygoogle');
    expect(code).toContain('data-ad-format="horizontal"');
    expect(code).toContain('ANUNCIO PATROCINADO POR GOOGLE ADS');
  });

  it('Página 1 (Portal 3D): cumple con la regla de 2 a 3 anuncios (exactamente 3 anuncios)', () => {
    expect(fs.existsSync(portalPath)).toBe(true);
    const code = fs.readFileSync(portalPath, 'utf-8');
    const matches = code.match(/<AdBanner\b/g);
    expect(matches).not.toBeNull();
    expect(matches!.length).toBeGreaterThanOrEqual(2);
    expect(matches!.length).toBeLessThanOrEqual(3);
    expect(matches!.length).toBe(3);
  });

  it('Página 2 (Categorías): cumple con la regla de 2 a 3 anuncios (exactamente 3 anuncios)', () => {
    expect(fs.existsSync(categoriesPath)).toBe(true);
    const code = fs.readFileSync(categoriesPath, 'utf-8');
    const matches = code.match(/<AdBanner\b/g);
    expect(matches).not.toBeNull();
    expect(matches!.length).toBeGreaterThanOrEqual(2);
    expect(matches!.length).toBeLessThanOrEqual(3);
    expect(matches!.length).toBe(3);
  });

  it('Página 3 (Simulador): contiene entre 2 y 3 anuncios según la pantalla (1 arriba y 1-2 abajo)', () => {
    expect(fs.existsSync(practicePath)).toBe(true);
    const code = fs.readFileSync(practicePath, 'utf-8');
    // Verificación de la pantalla de examen activo
    expect(code).toContain('4241045160_se_top');
    expect(code).toContain('Simulador Examen • 1 Arriba');
    // Verificación de la pantalla de configuración inicial
    expect(code).toContain('4241045160_s_top');
    expect(code).toContain('4241045160_s_b1');
    expect(code).toContain('4241045160_s_b2');
    // Verificación de la pantalla de resultados
    expect(code).toContain('4241045160_sr_top');
    expect(code).toContain('4241045160_sr_b1');
    expect(code).toContain('4241045160_sr_b2');
  });

  it('Página 4 (LaTeX): cumple con la regla de 2 a 3 anuncios (exactamente 3 anuncios)', () => {
    expect(fs.existsSync(appTsxPath)).toBe(true);
    const code = fs.readFileSync(appTsxPath, 'utf-8');
    // Contar anuncios en la sección de LaTeX
    const latexSection = code.substring(
      code.indexOf("activeTab === 'latex'"),
      code.indexOf("activeTab === 'languages'")
    );
    const matches = latexSection.match(/<AdBanner\b/g);
    expect(matches).not.toBeNull();
    expect(matches!.length).toBeGreaterThanOrEqual(2);
    expect(matches!.length).toBeLessThanOrEqual(3);
    expect(matches!.length).toBe(3);
  });

  it('Todas las demás páginas independientes están cubiertas con StandalonePageWrapper (2 anuncios por página)', () => {
    expect(fs.existsSync(appTsxPath)).toBe(true);
    const code = fs.readFileSync(appTsxPath, 'utf-8');
    expect(code).toContain('StandalonePageWrapper');
    expect(code).toContain('1/2 Superior');
    expect(code).toContain('2/2 Inferior');
    expect(code).toContain('<StandalonePageWrapper tab="notary-exam">');
    expect(code).toContain('<StandalonePageWrapper tab="driver-license">');
    expect(code).toContain('<StandalonePageWrapper tab="academic-reinforcement">');
    expect(code).toContain('<StandalonePageWrapper tab="technical-courses">');
  });
});

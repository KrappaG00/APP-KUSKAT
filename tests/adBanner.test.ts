import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Verificación de Integración de Google AdSense y 5 Anuncios por Página', () => {
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

  it('Página 1 (Portal 3D): contiene exactamente 5 anuncios AdBanner horizontales', () => {
    expect(fs.existsSync(portalPath)).toBe(true);
    const code = fs.readFileSync(portalPath, 'utf-8');
    const matches = code.match(/<AdBanner\b/g);
    expect(matches).not.toBeNull();
    expect(matches!.length).toBe(5);
  });

  it('Página 2 (Categorías): contiene exactamente 5 anuncios AdBanner horizontales', () => {
    expect(fs.existsSync(categoriesPath)).toBe(true);
    const code = fs.readFileSync(categoriesPath, 'utf-8');
    const matches = code.match(/<AdBanner\b/g);
    expect(matches).not.toBeNull();
    expect(matches!.length).toBe(5);
  });

  it('Página 3 (Simulador): contiene 1 anuncio arriba y 5 anuncios abajo del simulador', () => {
    expect(fs.existsSync(practicePath)).toBe(true);
    const code = fs.readFileSync(practicePath, 'utf-8');
    // Verificación de la pantalla de examen activo (solicitud explícita del usuario)
    expect(code).toContain('4241045160_se_top');
    expect(code).toContain('Simulador Examen • 1 Arriba');
    expect(code).toContain('4241045160_se_b1');
    expect(code).toContain('4241045160_se_b2');
    expect(code).toContain('4241045160_se_b3');
    expect(code).toContain('4241045160_se_b4');
    expect(code).toContain('4241045160_se_b5');
    // Verificación de la pantalla de configuración inicial
    expect(code).toContain('4241045160_s_top');
    expect(code).toContain('4241045160_s_b1');
    expect(code).toContain('4241045160_s_b5');
  });

  it('Página 4 (LaTeX): contiene exactamente 5 anuncios AdBanner horizontales', () => {
    expect(fs.existsSync(appTsxPath)).toBe(true);
    const code = fs.readFileSync(appTsxPath, 'utf-8');
    const matches = code.match(/<AdBanner\b/g);
    expect(matches).not.toBeNull();
    expect(matches!.length).toBe(5);
  });
});

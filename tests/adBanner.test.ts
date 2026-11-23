import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { AdBanner, countSubstantiveWords } from '../src/components/AdBanner';

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

  it('Página 1 (Portal de Inicio): no contiene ningún anuncio (solicitud expresa del usuario: 0 anuncios)', () => {
    expect(fs.existsSync(portalPath)).toBe(true);
    const code = fs.readFileSync(portalPath, 'utf-8');
    const matches = code.match(/<AdBanner\b/g);
    expect(matches).toBeNull();
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

  it('Página 3 (Simulador): contiene máximo 2 anuncios por pantalla (1 arriba y 1 abajo después del reglamento)', () => {
    expect(fs.existsSync(practicePath)).toBe(true);
    const code = fs.readFileSync(practicePath, 'utf-8');
    // Verificación de la pantalla de examen activo
    expect(code).toContain('4241045160_se_top');
    expect(code).toContain('Simulador Examen • 1 Arriba');
    // Verificación de la pantalla de configuración inicial (máximo 2 anuncios)
    expect(code).toContain('4241045160_s_top');
    expect(code).toContain('4241045160_s_b1');
    expect(code).not.toContain('4241045160_s_b2');
    // Verificación de la pantalla de resultados
    expect(code).toContain('4241045160_sr_top');
    expect(code).toContain('4241045160_sr_b1');
  });

  it('Página 4 (LaTeX): vista utilitaria pura sin banners publicitarios', () => {
    expect(fs.existsSync(appTsxPath)).toBe(true);
    const code = fs.readFileSync(appTsxPath, 'utf-8');
    const latexSection = code.substring(
      code.indexOf("activeTab === 'latex'"),
      code.indexOf("activeTab === 'languages'")
    );
    const matches = latexSection.match(/<AdBanner\b/g);
    expect(matches).toBeNull();

    const latexViewCode = fs.readFileSync(
      path.join(rootDir, 'src', 'components', 'LatexExportView.tsx'),
      'utf-8'
    );
    expect(latexViewCode.match(/<AdBanner\b/g)).toBeNull();
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

  it('AdBanner omite data-ad-slot para IDs no numéricos (evitando TagError en adsbygoogle.js) y lo incluye para cadenas numéricas de 10 dígitos o _test', () => {
    // 1. Slot ID alfanumérico no numérico (ej. "4241045160_s_top") -> NO debe incluir data-ad-slot
    const htmlAlpha = renderToStaticMarkup(
      React.createElement(AdBanner, {
        slotId: '4241045160_s_top',
        hasPublisherContent: true,
      })
    );
    expect(htmlAlpha).toContain('class="adsbygoogle"');
    expect(htmlAlpha).toContain('data-ad-client="ca-pub-4241045160320459"');
    expect(htmlAlpha).not.toContain('data-ad-slot=');

    // 1b. Prefijo del Publisher ID ("4241045160") -> NO debe tratarse como data-ad-slot real
    const htmlPubPrefix = renderToStaticMarkup(
      React.createElement(AdBanner, {
        slotId: '4241045160',
        hasPublisherContent: true,
      })
    );
    expect(htmlPubPrefix).not.toContain('data-ad-slot=');

    // 2. Slot ID numérico oficial de 10 dígitos (ej. "1234567890") -> SÍ debe incluir data-ad-slot="1234567890"
    const htmlNumeric = renderToStaticMarkup(
      React.createElement(AdBanner, {
        slotId: '1234567890',
        hasPublisherContent: true,
      })
    );
    expect(htmlNumeric).toContain('data-ad-slot="1234567890"');

    // 3. Slot ID de test con sufijo _test (ej. "banner_unit_test") -> SÍ debe incluir data-ad-slot
    const htmlTest = renderToStaticMarkup(
      React.createElement(AdBanner, {
        slotId: 'banner_unit_test',
        hasPublisherContent: true,
      })
    );
    expect(htmlTest).toContain('data-ad-slot="banner_unit_test"');
  });

  it('InteractiveFormulaLab cuenta con marco teórico sustantivo >500 palabras y cita exclusivamente instituciones oficiales autorizadas', () => {
    const labPath = path.join(rootDir, 'src', 'components', 'InteractiveFormulaLab.tsx');
    expect(fs.existsSync(labPath)).toBe(true);
    const code = fs.readFileSync(labPath, 'utf-8');

    // Extraer sección del marco teórico
    const start = code.indexOf('MARCO TEÓRICO');
    const end = code.indexOf('Selector de Pestañas');
    expect(start).toBeGreaterThan(-1);
    expect(end).toBeGreaterThan(start);

    const section = code.substring(start, end);
    const substantiveWords = countSubstantiveWords(section);

    expect(substantiveWords).toBeGreaterThan(500);
    expect(code).toContain('MINSAL');
    expect(code).toContain('MINED');
    expect(code).toContain('OPS/OMS');
  });
});

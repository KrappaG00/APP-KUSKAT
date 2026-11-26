import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'node:fs';
import path from 'node:path';
import { LanguageProvider } from '../src/i18n';
import { ServiciosCatalogSection } from '../src/components/motionsites/ServiciosCatalogSection';
import {
  CentralAmericaAcademicSection,
  CENTRAL_AMERICA_ACADEMIC_COUNTRIES,
} from '../src/components/motionsites/CentralAmericaAcademicSection';
import { PortalInicioView } from '../src/components/motionsites/PortalInicioView';
import { BEAUTY_SECTION, DIGITAL_CATALOG } from '../src/components/motionsites/data/servicesCatalog';

describe('Portal de Inicio — Área de Servicios, América Central y KUSKAT Académico Gratuito', () => {
  const rootDir = process.cwd();

  it('1. ServiciosCatalogSection renderiza el Área de Belleza (Kuskat Academia y Salón) PRIMERO, antes del Catálogo Digital', () => {
    const html = renderToStaticMarkup(React.createElement(ServiciosCatalogSection));

    const beautyIdx = html.indexOf('SECCIÓN 1: Kuskat Academia y Salón');
    const digitalIdx = html.indexOf('CATÁLOGO DE SERVICIOS DIGITALES');

    expect(beautyIdx).toBeGreaterThan(-1);
    expect(digitalIdx).toBeGreaterThan(-1);
    expect(beautyIdx).toBeLessThan(digitalIdx);

    // Verificar los 8 servicios de belleza + precios
    expect(BEAUTY_SECTION.services).toHaveLength(8);
    for (const s of BEAUTY_SECTION.services) {
      expect(html).toContain(s.name);
      expect(html).toContain(s.price);
    }

    // Verificar banner Full Spa Capilar, horarios y canales oficiales
    expect(html).toContain('TRATAMIENTOS CAPILARES');
    expect(html).toContain('¡Los tres por $30 Full Spa Capilar!');
    expect(html).toContain('Lunes a Viernes 8:00 a.m. - 10:00 p.m.');
    expect(html).toContain('+503 7657 4463');
    expect(html).toContain('https://wa.me/50376574463');
    expect(html).toContain('kuskat.es');
    expect(html).toContain('Kuskat');
  });

  it('2. ServiciosCatalogSection incluye Condiciones Generales y las Secciones 1 a 5 de KUSKAT S.A.S. de C.V.', () => {
    const html = renderToStaticMarkup(React.createElement(ServiciosCatalogSection));

    expect(html).toContain('KUSKAT S.A.S. de C.V.');
    expect(html).toContain('CONDICIONES GENERALES');
    for (const cond of DIGITAL_CATALOG.generalConditions) {
      expect(html).toContain(cond);
    }

    expect(html).toContain('SECCIÓN 1: Redes Sociales y Presencia');
    expect(html).toContain('SECCIÓN 2: Mantenimiento Web');
    expect(html).toContain('SECCIÓN 3: Diseño y Marca Personal');
    expect(html).toContain('SECCIÓN 4: Servicios Adicionales (Add-ons)');
    expect(html).toContain('SECCIÓN 5: Talleres y Cursos');
    expect(html).toContain('Presencia Semilla');
    expect(html).toContain('Plan Elite');
    expect(html).toContain('Web Semilla');
    expect(html).toContain('Respuestas automáticas (Chatbot)');
    expect(html).toContain('Kit de Inicio Digital');
  });

  it('3. CentralAmericaAcademicSection muestra los 7 países: El Salvador activo y 6 con Próximamente', () => {
    expect(CENTRAL_AMERICA_ACADEMIC_COUNTRIES).toHaveLength(7);
    const html = renderToStaticMarkup(
      React.createElement(CentralAmericaAcademicSection, { onSelectElSalvador: () => {} })
    );

    expect(html).toContain('Refuerzo Académico América Central');
    for (const country of ['Guatemala', 'Belice', 'El Salvador', 'Honduras', 'Nicaragua', 'Costa Rica', 'Panamá']) {
      expect(html).toContain(country);
    }
    expect(html).toContain('Activo • Disponible');
    const comingSoonMatches = html.match(/Próximamente disponible/g) ?? [];
    expect(comingSoonMatches).toHaveLength(6);
  });

  it('4. PortalInicioView integra Servicios, América Central, KUSKAT Académico Gratuito (19 áreas) y 0 anuncios', () => {
    const html = renderToStaticMarkup(
      React.createElement(
        LanguageProvider,
        null,
        React.createElement(PortalInicioView, {
          onEnterSimulator: () => {},
          onOpenCategories: () => {},
          onSelectTab: () => {},
        })
      )
    );

    const servicesIdx = html.indexOf('area-de-servicios');
    const centralIdx = html.indexOf('refuerzo-academico-america-central');
    const academicIdx = html.indexOf('kuskat-academico-gratuito');

    expect(servicesIdx).toBeGreaterThan(-1);
    expect(centralIdx).toBeGreaterThan(servicesIdx);
    expect(academicIdx).toBeGreaterThan(centralIdx);

    // 19 áreas en KUSKAT Académico Gratuito
    const studyMatches = html.match(/<span>Estudiar<\/span>/g) ?? [];
    const testMatches = html.match(/<span>Hacer el Test<\/span>/g) ?? [];
    expect(studyMatches).toHaveLength(19);
    expect(testMatches).toHaveLength(19);

    // Fundador y pie institucional
    expect(html).toContain('Yeferson E. Perez');
    expect(html).toContain('/privacidad.html');
    expect(html).toContain('/terminos.html');
    expect(html).toContain('/sobre-nosotros.html');
    expect(html).toContain('/contacto.html');
    expect(html).toContain('+503 7657 4463');

    // 0 anuncios en Portal de Inicio
    expect(html).not.toContain('adsbygoogle');
    expect(html).not.toContain('data-ad-slot');

    const portalSource = fs.readFileSync(
      path.join(rootDir, 'src', 'components', 'motionsites', 'PortalInicioView.tsx'),
      'utf-8'
    );
    expect(portalSource.match(/<AdBanner\b/g)).toBeNull();
  });

  it('5. App.tsx envuelve el-salvador-portal en StandalonePageWrapper (2 anuncios) y mantiene 0 anuncios en motionsites3d', () => {
    const appCode = fs.readFileSync(path.join(rootDir, 'src', 'App.tsx'), 'utf-8');
    expect(appCode).toContain('<PortalInicioView');
    expect(appCode).toContain('<StandalonePageWrapper tab="el-salvador-portal">');
    expect(appCode).toContain('<MotionSitesPortal');
    expect(appCode).toContain('hideHeader');
    const motionSitesCode = fs.readFileSync(
      path.join(rootDir, 'src', 'components', 'motionsites', 'MotionSitesPortal.tsx'),
      'utf-8'
    );
    expect(motionSitesCode).not.toContain('<footer');
    expect(appCode).toContain("if (tab === 'motionsites3d' || tab === 'latex') return 0;");
  });

  it('6. Cero ocurrencias del número privado 7943 9901 en los archivos nuevos y modificados', () => {
    const forbidden = ['7943', '9901'].join(' ');
    const filesToCheck = [
      path.join(rootDir, 'src', 'components', 'motionsites', 'data', 'servicesCatalog.ts'),
      path.join(rootDir, 'src', 'components', 'motionsites', 'ServiciosCatalogSection.tsx'),
      path.join(rootDir, 'src', 'components', 'motionsites', 'CentralAmericaAcademicSection.tsx'),
      path.join(rootDir, 'src', 'components', 'motionsites', 'PortalInicioView.tsx'),
      path.join(rootDir, 'src', 'components', 'motionsites', 'MotionSitesPortal.tsx'),
      path.join(rootDir, 'src', 'components', 'HeaderNavbar.tsx'),
      path.join(rootDir, 'src', 'App.tsx'),
    ];
    for (const file of filesToCheck) {
      const content = fs.readFileSync(file, 'utf-8');
      expect(content).not.toContain(forbidden);
      expect(content).not.toContain('79439901');
      expect(content).not.toContain('7943-9901');
    }
  });

  it('7. Courses3DSection aclara que todo lo que no es de Idiomas pertenece a El Salvador', async () => {
    const { Courses3DSection } = await import('../src/components/motionsites/Courses3DSection');
    const html = renderToStaticMarkup(React.createElement(Courses3DSection, { onNavigateArea: () => {} }));
    expect(html).toContain('Todo lo que no es de');
    expect(html).toContain('pertenece a');
    expect(html).toContain('🇸🇻 El Salvador • Universidad de El Salvador (UES)');
    expect(html).not.toContain('🇸🇻 El Salvador • Idioma');
  });
});

import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Suite de Arquitectura de Layout, Navegación en 5 Pilares y Anuncios Laterales', () => {
  const rootDir = process.cwd();
  const headerNavbarPath = path.join(rootDir, 'src', 'components', 'HeaderNavbar.tsx');
  const lateralAdRailsPath = path.join(rootDir, 'src', 'components', 'LateralAdRails.tsx');
  const appTsxPath = path.join(rootDir, 'src', 'App.tsx');
  const categoryViewerPath = path.join(rootDir, 'src', 'components', 'CategoryHierarchyViewer.tsx');

  it('1. LateralAdRails existe y cumple con la excepción estricta de no mostrar rieles laterales en categories', () => {
    expect(fs.existsSync(lateralAdRailsPath)).toBe(true);
    const code = fs.readFileSync(lateralAdRailsPath, 'utf-8');

    // Regla de negocio solicitada por el usuario
    expect(code).toContain("const isCategoriesPage = activeTab === 'categories';");
    expect(code).toContain('if (isCategoriesPage) {');
    expect(code).toContain('return (');
    expect(code).toContain('{children}');

    // Verificación de slots y AdSense oficial en los rieles laterales
    expect(code).toContain('ca-pub-4241045160320459');
    expect(code).toContain('ANUNCIO PATROCINADO POR GOOGLE ADS');
    expect(code).toContain('4241045160_rail_l');
    expect(code).toContain('4241045160_rail_r');
    expect(code).toContain('hidden xl:flex');
    expect(code).toContain('sticky top-28');
  });

  it('2. App.tsx integra LateralAdRails y overflow-x-clip en el contenedor exterior', () => {
    expect(fs.existsSync(appTsxPath)).toBe(true);
    const code = fs.readFileSync(appTsxPath, 'utf-8');

    // Importación y uso
    expect(code).toContain("import { LateralAdRails } from './components/LateralAdRails';");
    expect(code).toContain('<LateralAdRails activeTab={activeTab}>');
    expect(code).toContain('</LateralAdRails>');

    // Prevención de scroll horizontal
    expect(code).toContain('overflow-x-clip');
  });

  it('3. HeaderNavbar implementa los 5 Pilares Académicos sin colisiones de menús', () => {
    expect(fs.existsSync(headerNavbarPath)).toBe(true);
    const code = fs.readFileSync(headerNavbarPath, 'utf-8');

    // Los 5 pilares temáticos
    expect(code).toContain("id: 'admision'");
    expect(code).toContain("label: 'Admisión & Pruebas'");

    expect(code).toContain("id: 'leyes-salud'");
    expect(code).toContain("label: 'Habilitación & Leyes'");

    expect(code).toContain("id: 'tecnica-ciencias'");
    expect(code).toContain("label: 'Técnica & Ciencias'");

    expect(code).toContain("id: 'idiomas-civica'");
    expect(code).toContain("label: 'Idiomas & Cívica'");

    expect(code).toContain("id: 'herramientas'");
    expect(code).toContain("label: 'Herramientas & OMR'");
  });

  it('4. Los 24 módulos/páginas principales están completamente mapeados en los 5 pilares', () => {
    const code = fs.readFileSync(headerNavbarPath, 'utf-8');

    const expectedTabs = [
      'categories',
      'practice',
      'academic-reinforcement',
      'jovenes-talento',
      'motionsites3d',
      'notary-exam',
      'residentado-medico',
      'cssp-health',
      'ansp-ascenso',
      'derecho-administrativo',
      'constitution',
      'oral-litigation',
      'compliance-financial',
      'salud-primaria',
      'technical-courses',
      'siget-solar',
      'ingenieria-ciencias',
      'formula-lab',
      'driver-license',
      'languages',
      'patriotic-history',
      'central-america',
      'latex',
      'one-page-sheets',
    ];

    for (const tab of expectedTabs) {
      expect(code).toContain(`navigateTo('${tab}')`);
    }
  });

  it('5. Jerarquía estricta de z-index para prevenir solapamientos de menús y modales', () => {
    const headerCode = fs.readFileSync(headerNavbarPath, 'utf-8');
    const categoryCode = fs.readFileSync(categoryViewerPath, 'utf-8');

    // Encabezado persistente
    expect(headerCode).toContain('sticky top-0 z-40');

    // Menús desplegables en PC (z-50)
    expect(headerCode).toContain('z-50 space-y-1 animate-fade-in');

    // Cajón móvil (z-60) con backdrop (z-50)
    expect(headerCode).toContain('fixed inset-0 z-50 bg-slate-900/60');
    expect(headerCode).toContain('relative z-60');

    // En CategoryHierarchyViewer no debe existir sticky top-16 que choque con el header
    expect(categoryCode).not.toContain('sticky top-16 z-30');
    expect(categoryCode).toContain('sticky top-20 sm:top-24 z-20');
  });

  it('6. Preserva el canal oficial de WhatsApp y redes oficiales de KUSKAT en HeaderNavbar', () => {
    const code = fs.readFileSync(headerNavbarPath, 'utf-8');

    expect(code).toContain('+503 7657 4463');
    expect(code).toContain('https://wa.me/50376574463');
    expect(code).toContain('@Kuskat.es');
    expect(code).not.toContain(['7943', '9901'].join(' '));
  });

  it('7. Desplegables de la derecha usan alineación inward (right-0) y max-w para no salirse lateralmente', () => {
    const code = fs.readFileSync(headerNavbarPath, 'utf-8');

    // Comprobar la lógica de alineación direccional
    expect(code).toContain("dropdownAlignmentClass =");
    expect(code).toContain("pillarIndex === 0 || pillarIndex === 1");
    expect(code).toContain("'left-0'");
    expect(code).toContain("'right-0'");

    // Comprobar la salvaguarda de ancho máximo relativo al viewport
    expect(code).toContain("max-w-[calc(100vw-2rem)]");
  });

  it('8. HeaderNavbar usa etiquetas compactas responsivas en pantallas de 1024px a 1280px', () => {
    const code = fs.readFileSync(headerNavbarPath, 'utf-8');

    // Botones responsivos con shortLabel en pantallas menores a xl
    expect(code).toContain('hidden xl:inline');
    expect(code).toContain('inline xl:hidden');
    expect(code).toContain('{pillar.shortLabel}');

    // Subtítulo del logo oculto en pantallas estándar para ahorrar espacio
    expect(code).toContain('hidden 2xl:block');
  });

  it('9. LateralAdRails cuenta con protección de desbordamiento horizontal max-w-full overflow-hidden', () => {
    const code = fs.readFileSync(lateralAdRailsPath, 'utf-8');

    expect(code).toContain('max-w-full overflow-hidden');
  });
});

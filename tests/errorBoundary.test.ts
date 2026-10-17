import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Protección Anti-Pantalla Blanca y ErrorBoundary', () => {
  const rootDir = process.cwd();
  const mainTsxPath = path.join(rootDir, 'src', 'main.tsx');
  const errorBoundaryPath = path.join(rootDir, 'src', 'components', 'ErrorBoundary.tsx');
  const portalPath = path.join(rootDir, 'src', 'components', 'motionsites', 'MotionSitesPortal.tsx');
  const loaderPath = path.join(rootDir, 'src', 'components', 'motionsites', 'ParticleLoader.tsx');
  const mapPath = path.join(rootDir, 'src', 'components', 'motionsites', 'ElSalvadorMap3D.tsx');
  const appTsxPath = path.join(rootDir, 'src', 'App.tsx');

  it('src/main.tsx envuelve la raíz de la aplicación con <ErrorBoundary>', () => {
    expect(fs.existsSync(mainTsxPath)).toBe(true);
    const content = fs.readFileSync(mainTsxPath, 'utf-8');
    expect(content).toContain('import { ErrorBoundary } from \'./components/ErrorBoundary\';');
    expect(content).toContain('<ErrorBoundary>');
    expect(content).toContain('</ErrorBoundary>');
  });

  it('src/components/ErrorBoundary.tsx provee interfaz de rescate y botones de recuperación', () => {
    expect(fs.existsSync(errorBoundaryPath)).toBe(true);
    const content = fs.readFileSync(errorBoundaryPath, 'utf-8');
    expect(content).toContain('componentDidCatch');
    expect(content).toContain('getDerivedStateFromError');
    expect(content).toContain('Recargar');
    expect(content).toContain('Ir al Simulador');
    expect(content).toContain('Categorías');
    expect(content).toContain('Trabajando en material de medicina. Los anuncios que contiene la pagina es un pequeño aporte economico a mis estudios universitarios.');
  });

  it('MotionSitesPortal tiene importado useEffect y define isTransitioning', () => {
    expect(fs.existsSync(portalPath)).toBe(true);
    const content = fs.readFileSync(portalPath, 'utf-8');
    expect(content).toMatch(/import\s+React,\s*\{\s*useState,\s*useEffect\s*\}\s*from\s*'react';/);
    expect(content).toContain('const [isTransitioning, setIsTransitioning] = useState<boolean>(false);');
  });

  it('ParticleLoader contiene guardias try-catch para WebGL', () => {
    expect(fs.existsSync(loaderPath)).toBe(true);
    const content = fs.readFileSync(loaderPath, 'utf-8');
    expect(content).toContain('try {');
    expect(content).toContain('new THREE.WebGLRenderer');
    expect(content).toContain('catch (e)');
  });

  it('ElSalvadorMap3D contiene guardias try-catch para WebGL y fallback 2D interactivo', () => {
    expect(fs.existsSync(mapPath)).toBe(true);
    const content = fs.readFileSync(mapPath, 'utf-8');
    expect(content).toContain('hasWebGlError');
    expect(content).toContain('new THREE.WebGLRenderer');
    expect(content).toContain('DEPARTMENTS_DATA.map');
  });

  it('App.tsx admite inicialización de pestaña mediante query parameter ?tab=', () => {
    expect(fs.existsSync(appTsxPath)).toBe(true);
    const content = fs.readFileSync(appTsxPath, 'utf-8');
    expect(content).toContain('URLSearchParams(window.location.search).get(\'tab\')');
  });
});

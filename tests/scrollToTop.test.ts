import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Verificación de Scroll to Top al cambiar de página o vista', () => {
  const rootDir = process.cwd();
  const appTsxPath = path.join(rootDir, 'src', 'App.tsx');
  const practicePath = path.join(rootDir, 'src', 'components', 'PracticeMode.tsx');
  const categoriesPath = path.join(rootDir, 'src', 'components', 'CategoryHierarchyViewer.tsx');
  const portalPath = path.join(rootDir, 'src', 'components', 'motionsites', 'MotionSitesPortal.tsx');

  it('App.tsx implementa scroll a la parte de arriba al cambiar de activeTab', () => {
    const code = fs.readFileSync(appTsxPath, 'utf-8');
    expect(code).toContain('window.scrollTo');
    expect(code).toContain('[activeTab]');
    expect(code).toContain('scrollRestoration');
  });

  it('PracticeMode.tsx implementa scroll a la parte de arriba al cambiar de fase del simulador o reactivo', () => {
    const code = fs.readFileSync(practicePath, 'utf-8');
    expect(code).toContain('window.scrollTo');
    expect(code).toContain('[quizActive, quizFinished, currentIndex]');
  });

  it('CategoryHierarchyViewer.tsx implementa scroll a la parte de arriba al seleccionar otra categoría/materia', () => {
    const code = fs.readFileSync(categoriesPath, 'utf-8');
    expect(code).toContain('window.scrollTo');
    expect(code).toContain('[selectedInst, selectedSubjectId, selectedSubtopicId]');
  });

  it('MotionSitesPortal.tsx implementa scroll a la parte de arriba al montar o transicionar al simulador', () => {
    const code = fs.readFileSync(portalPath, 'utf-8');
    expect(code).toContain('window.scrollTo');
    expect(code).toContain('triggerStudyTransition');
  });
});

import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'node:fs';
import path from 'node:path';
import katex from 'katex';

import { Courses3DSection, AREAS_CATALOG } from '../src/components/motionsites/Courses3DSection';
import { MotionSitesPortal } from '../src/components/motionsites/MotionSitesPortal';
import { InteractiveFormulaLab, FORMULA_LAB_QUESTIONS } from '../src/components/InteractiveFormulaLab';
import { NotaryExamView } from '../src/components/NotaryExamView';
import { ResidentadoMedicoView } from '../src/components/ResidentadoMedicoView';
import { DriverLicenseView } from '../src/components/DriverLicenseView';
import { AnspAscensoView } from '../src/components/AnspAscensoView';
import { JovenesTalentoView } from '../src/components/JovenesTalentoView';
import { AcademicReinforcementView } from '../src/components/AcademicReinforcementView';
import LanguagesView from '../src/components/LanguagesView';
import { CategoryHierarchyViewer } from '../src/components/CategoryHierarchyViewer';

const EXPECTED_19_AREAS = [
  'UES',
  'AVANZO',
  'ANSP',
  'ASCENSOS PNC',
  'MINED',
  'ENA',
  'ESCALAFON',
  'ASD MINED',
  'NOTARIADO CSJ',
  'ENAR',
  'VMT',
  'INGLES',
  'ALEMÁN',
  'ÁRABE',
  'MANDARIN',
  'NÁHUAT',
  'LENCA',
  'KAKAWIRA',
  'LABORATORIO DE FORMULAS',
];

describe('Rediseño del Portal de Inicio (19 Áreas Exactas + Estudiar / Hacer el Test + ASD MINED)', () => {
  const rootDir = process.cwd();

  it('1. AREAS_CATALOG contiene exactamente las 19 áreas solicitadas sin áreas extra', () => {
    expect(AREAS_CATALOG).toHaveLength(19);
    const actualTitles = AREAS_CATALOG.map((a) => a.title);
    for (const expected of EXPECTED_19_AREAS) {
      expect(actualTitles).toContain(expected);
    }
    expect(new Set(actualTitles).size).toBe(19);
  });

  it('2. Renderizado SSR de Courses3DSection muestra las 19 áreas y 19 botones de Estudiar + 19 de Hacer el Test', () => {
    const html = renderToString(React.createElement(Courses3DSection, { onNavigateArea: () => {} }));

    for (const area of EXPECTED_19_AREAS) {
      expect(html).toContain(area);
    }

    const estudiarMatches = html.match(/<span>Estudiar<\/span>/g) || [];
    const testMatches = html.match(/<span>Hacer el Test<\/span>/g) || [];
    expect(estudiarMatches.length).toBe(19);
    expect(testMatches.length).toBe(19);
    expect(html).toContain('ASD MINED');
    expect(html).not.toContain('Jóvenes Talento');
  });

  it('3. Renombrado a ASD MINED en HeaderNavbar, StatsAndCharts3D, MotionSitesPortal, CallToActionFinal3D y App.tsx', () => {
    const headerCode = fs.readFileSync(path.join(rootDir, 'src/components/HeaderNavbar.tsx'), 'utf-8');
    const statsCode = fs.readFileSync(path.join(rootDir, 'src/components/motionsites/StatsAndCharts3D.tsx'), 'utf-8');
    const portalCode = fs.readFileSync(path.join(rootDir, 'src/components/motionsites/MotionSitesPortal.tsx'), 'utf-8');
    const ctaCode = fs.readFileSync(path.join(rootDir, 'src/components/motionsites/CallToActionFinal3D.tsx'), 'utf-8');
    const appCode = fs.readFileSync(path.join(rootDir, 'src/App.tsx'), 'utf-8');

    expect(headerCode).toContain("title: 'ASD MINED'");
    expect(headerCode).toContain("navigateTo('jovenes-talento')");
    expect(headerCode).not.toContain('Jóvenes Talento UES / MINED');

    expect(statsCode).toContain("name: 'ASD MINED'");
    expect(portalCode).not.toContain('<footer');
    expect(ctaCode).toContain('y ASD MINED.');
    expect(appCode).toContain('ASD MINED | Programa de Olimpiadas Científicas | KUSKAT');
    expect(appCode).toContain('Cargando ASD MINED...');
    expect(appCode).toContain('handleNavigateFromPortal');
  });

  it('4. InteractiveFormulaLab soporta initialMode="test" con >= 10 preguntas únicas, KaTeX válido y distractorRationale único', () => {
    expect(FORMULA_LAB_QUESTIONS.length).toBeGreaterThanOrEqual(10);

    const ids = new Set(FORMULA_LAB_QUESTIONS.map((q) => q.id));
    const statements = new Set(FORMULA_LAB_QUESTIONS.map((q) => q.statement));
    expect(ids.size).toBe(FORMULA_LAB_QUESTIONS.length);
    expect(statements.size).toBe(FORMULA_LAB_QUESTIONS.length);

    for (const q of FORMULA_LAB_QUESTIONS) {
      expect(['A', 'B', 'C', 'D']).toContain(q.correctAnswer);
      expect(q.source).toMatch(/MINED|MINSAL|OPS\/OMS|UES/);
      const optionValues = ['A', 'B', 'C', 'D'].map((k) => q.options[k as 'A' | 'B' | 'C' | 'D']);
      expect(new Set(optionValues).size).toBe(4);
      const rationaleValues = ['A', 'B', 'C', 'D'].map((k) => q.distractorRationale[k as 'A' | 'B' | 'C' | 'D']);
      expect(new Set(rationaleValues).size).toBe(4);
      for (const r of rationaleValues) {
        expect(r.trim().length).toBeGreaterThan(15);
      }

      // Verificar que toda expresión $...$ en enunciado, opciones y explicación compile en KaTeX sin errores
      const textsToCheck = [q.statement, q.explanation, ...optionValues, ...rationaleValues];
      for (const txt of textsToCheck) {
        const matches = txt.match(/\$([^$]+)\$/g) || [];
        for (const m of matches) {
          const expr = m.slice(1, -1);
          const rendered = katex.renderToString(expr, { throwOnError: true });
          expect(rendered).not.toContain('katex-error');
        }
      }
    }

    const htmlTest = renderToString(React.createElement(InteractiveFormulaLab, { initialMode: 'test' }));
    expect(htmlTest).toContain('Test de Fórmulas Biofísicas, Químicas y Cinemáticas');
    expect(htmlTest).toContain('Ley de Hagen-Poiseuille');
    expect(htmlTest).toContain('Estado Estacionario Farmacocinético');

    const htmlLab = renderToString(React.createElement(InteractiveFormulaLab, { initialMode: 'lab' }));
    expect(htmlLab).toContain('Marco Teórico y Doctrina Cuantitativa Oficial');
  });

  it('5. Vistas destino aceptan sus props iniciales y renderizan en SSR sin errores', () => {
    const notarySimHtml = renderToString(React.createElement(NotaryExamView, { initialTab: 'simulator' }));
    expect(notarySimHtml).toContain('Simulacro');

    const residentadoSimHtml = renderToString(
      React.createElement(ResidentadoMedicoView, { initialTabMode: 'simulator' })
    );
    expect(residentadoSimHtml).toContain('ENAR');

    const vmtQuizHtml = renderToString(React.createElement(DriverLicenseView, { initialSubTab: 'quiz' }));
    expect(vmtQuizHtml).toContain('VMT');

    const anspExamHtml = renderToString(React.createElement(AnspAscensoView, { initialExamMode: true }));
    expect(anspExamHtml).toContain('ANSP');

    const asdTheoryHtml = renderToString(React.createElement(JovenesTalentoView, { initialTab: 'theory' }));
    expect(asdTheoryHtml.length).toBeGreaterThan(200);

    const minedTestHtml = renderToString(React.createElement(AcademicReinforcementView, { initialMode: 'test' }));
    expect(minedTestHtml).toContain('Calificar y Ver Resultados');

    const nahuatExamHtml = renderToString(
      React.createElement(LanguagesView, { initialLanguageId: 'nahuat', initialMainTab: 'exam' })
    );
    expect(nahuatExamHtml).toContain('Náhuat');

    const germanTheoryHtml = renderToString(
      React.createElement(LanguagesView, { initialLanguageId: 'german', initialMainTab: 'theory' })
    );
    expect(germanTheoryHtml).toContain('Alemán');

    const uesCatHtml = renderToString(
      React.createElement(CategoryHierarchyViewer, { initialInst: 'UES', showToast: () => {} })
    );
    expect(uesCatHtml).toContain('UES');
  });

  it('6. Verifica la agrupación por pilares (6+5+7+1=19), rutas studyTarget/testTarget de las 19 áreas y 0 anuncios en Portal de Inicio', () => {
    const byTitle = new Map(AREAS_CATALOG.map((a) => [a.title, a]));

    expect(AREAS_CATALOG.filter((a) => a.pillar === 'admision-educacion')).toHaveLength(6);
    expect(AREAS_CATALOG.filter((a) => a.pillar === 'profesional-vial')).toHaveLength(5);
    expect(AREAS_CATALOG.filter((a) => a.pillar === 'idiomas')).toHaveLength(7);
    expect(AREAS_CATALOG.filter((a) => a.pillar === 'ciencias')).toHaveLength(1);

    for (const inst of ['UES', 'AVANZO', 'ANSP', 'ENA', 'ESCALAFON'] as const) {
      expect(byTitle.get(inst)?.studyTarget).toEqual({ tab: 'categories', institution: inst });
      expect(byTitle.get(inst)?.testTarget).toEqual({ tab: 'practice', institution: inst });
    }

    expect(byTitle.get('ASD MINED')?.studyTarget).toEqual({ tab: 'jovenes-talento', jovenesTalentoTab: 'theory' });
    expect(byTitle.get('ASD MINED')?.testTarget).toEqual({ tab: 'practice', institution: 'ASD' });

    expect(byTitle.get('ASCENSOS PNC')?.studyTarget).toEqual({ tab: 'ansp-ascenso', anspExamMode: false });
    expect(byTitle.get('ASCENSOS PNC')?.testTarget).toEqual({ tab: 'ansp-ascenso', anspExamMode: true });

    expect(byTitle.get('MINED')?.studyTarget).toEqual({ tab: 'academic-reinforcement', academicMode: 'study' });
    expect(byTitle.get('MINED')?.testTarget).toEqual({ tab: 'academic-reinforcement', academicMode: 'test' });

    expect(byTitle.get('NOTARIADO CSJ')?.studyTarget).toEqual({ tab: 'notary-exam', notaryTab: 'study-units' });
    expect(byTitle.get('NOTARIADO CSJ')?.testTarget).toEqual({ tab: 'notary-exam', notaryTab: 'simulator' });

    expect(byTitle.get('ENAR')?.studyTarget).toEqual({ tab: 'residentado-medico', residentadoTab: 'thematic_units' });
    expect(byTitle.get('ENAR')?.testTarget).toEqual({ tab: 'residentado-medico', residentadoTab: 'simulator' });

    expect(byTitle.get('VMT')?.studyTarget).toEqual({ tab: 'driver-license', driverSubTab: 'study' });
    expect(byTitle.get('VMT')?.testTarget).toEqual({ tab: 'driver-license', driverSubTab: 'quiz' });

    const langPairs: [string, string][] = [
      ['INGLES', 'english'],
      ['ALEMÁN', 'german'],
      ['ÁRABE', 'arabic'],
      ['MANDARIN', 'mandarin'],
      ['NÁHUAT', 'nahuat'],
      ['LENCA', 'lenca'],
      ['KAKAWIRA', 'kakawira'],
    ];
    for (const [title, languageId] of langPairs) {
      expect(byTitle.get(title)?.studyTarget).toEqual({ tab: 'languages', languageId, languageMainTab: 'theory' });
      expect(byTitle.get(title)?.testTarget).toEqual({ tab: 'languages', languageId, languageMainTab: 'exam' });
    }

    expect(byTitle.get('LABORATORIO DE FORMULAS')?.studyTarget).toEqual({ tab: 'formula-lab', formulaLabMode: 'lab' });
    expect(byTitle.get('LABORATORIO DE FORMULAS')?.testTarget).toEqual({ tab: 'formula-lab', formulaLabMode: 'test' });

    const portalHtml = renderToString(
      React.createElement(MotionSitesPortal, {
        onEnterSimulator: () => {},
        onOpenCategories: () => {},
      })
    );
    expect(portalHtml).not.toContain('adsbygoogle');
    expect(portalHtml).not.toContain('data-ad-slot');
  });
});

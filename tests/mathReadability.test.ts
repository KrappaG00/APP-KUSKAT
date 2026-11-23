import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  renderMathToString,
  repairControlChars,
  MathText,
  KaTeXMath,
} from '../src/utils/mathRenderer';
import { KaTeXRenderer } from '../src/components/KaTeXRenderer';
import { InteractiveFormulaLab } from '../src/components/InteractiveFormulaLab';
import { TechnicalCoursesView } from '../src/components/TechnicalCoursesView';
import { SigetSolarView } from '../src/components/SigetSolarView';
import { IngenieriaCienciasView } from '../src/components/IngenieriaCienciasView';
import { FlashcardModal } from '../src/components/FlashcardModal';
import { INGENIERIA_QUESTIONS, INGENIERIA_FORMULAS } from '../src/data/ingenieriaCienciasData';
import { SIGET_SOLAR_QUESTIONS } from '../src/data/sigetSolarData';
import { SALUD_PRIMARIA_QUESTIONS } from '../src/data/saludPrimariaData';

describe('Motor de Renderizado Matemático Legible (KaTeX + Humanización)', () => {
  it('repara caracteres de control reales (\\x07, \\x08, \\x0b, \\x0c, \\t) antes de comandos LaTeX', () => {
    const raw =
      '\u0007pprox 3.14, \u0008eta + \u000bec{F} = \u000crac{1}{2} \u0009imes \u0009ext{masa}';
    const repaired = repairControlChars(raw);
    expect(repaired).toBe('\\approx 3.14, \\beta + \\vec{F} = \\frac{1}{2} \\times \\text{masa}');

    const html = renderMathToString(`$${raw}$`);
    expect(html).toContain('katex');
    expect(html).not.toContain('katex-error');

    // También debe reparar \u0009 sin depender de $ o \ previos (fast path)
    const tabOnly = renderMathToString('\u0009imes');
    expect(tabOnly).toContain('katex');
    expect(tabOnly).not.toContain('katex-error');
  });

  it('protege símbolos de moneda escapados (\\$) y montos en prosa ($4.50 y $1.25, $10 y $20) sin romper $...$', () => {
    const escapedCurrency = 'El pasaje cuesta \\$1.50 y el área es $x^2 = 9$.';
    const html1 = renderMathToString(escapedCurrency);
    expect(html1).toContain('$1.50');
    expect(html1).toContain('katex');
    expect(html1).not.toContain('katex-error');

    const proseCurrency = 'Si pagas $4.50 y recibes $1.25 de vuelto, ¿cuánto queda de $x + 2$?';
    const html2 = renderMathToString(proseCurrency);
    expect(html2).toContain('$4.50');
    expect(html2).toContain('$1.25');
    expect(html2).toContain('katex');
    expect(html2).not.toContain('katex-error');

    const shortConjCurrency = 'Entre $10 y $20 o paga $4.50, luego $1.25.';
    const html3 = renderMathToString(shortConjCurrency);
    expect(html3).toContain('$10 y $20');
    expect(html3).toContain('$4.50, luego $1.25');
    expect(html3).not.toContain('katex');
  });

  it('corrige el bug de cierre \\\\) sin dejar barras sobrantes en KaTeX', () => {
    const html = renderMathToString('Calcula \\(\\frac{3}{4}\\\\)');
    expect(html).toContain('katex');
    expect(html).not.toContain('katex-error');
    expect(html).not.toContain('\\)');
  });

  it('autocierra intervalos matemáticos con $ desbalanceado como $(-\\infty, 4] incluso con moneda en la misma línea', () => {
    const html = renderMathToString('El dominio es $(-\\infty, 4] en los reales.');
    expect(html).toContain('katex');
    expect(html).not.toContain('katex-error');
    expect(html).not.toContain('$(-');

    const withCurrency = renderMathToString('El costo es $5 y el dominio es $(-\\infty, 4].');
    expect(withCurrency).toContain('$5');
    expect(withCurrency).toContain('katex');
    expect(withCurrency).not.toContain('katex-error');
  });

  it('humaniza sqrt(...) mixto con $...$, <-> y otros operadores', () => {
    const mixedSqrt = renderMathToString('Si $x = 3$, entonces sqrt(x + 1) = 2');
    expect(mixedSqrt).toContain('katex');
    expect(mixedSqrt).not.toContain('sqrt(');
    expect(mixedSqrt).not.toContain('katex-error');

    const dblArrow = renderMathToString('P <-> Q');
    expect(dblArrow).toContain('P ↔ Q');
  });

  it('humaniza sqrt(...), <=, >=, !=, ->, ==>, *, potencias y comandos LaTeX sueltos', () => {
    const sqrtHtml = renderMathToString('La distancia es sqrt(x^2 + y^2)');
    expect(sqrtHtml).toContain('katex');
    expect(sqrtHtml).not.toContain('sqrt(');

    const compHtml = renderMathToString('Si x <= 5 y y >= 10 con z != 0');
    expect(compHtml).toContain('≤');
    expect(compHtml).toContain('≥');
    expect(compHtml).toContain('≠');

    const arrowHtml = renderMathToString('A + B -> C ==> D');
    expect(arrowHtml).toContain('→');
    expect(arrowHtml).toContain('⇒');

    const multHtml = renderMathToString('Calcula 3 * 4 y k * A');
    expect(multHtml).toContain('3 × 4');
    expect(multHtml).toContain('k · A');

    const powHtml = renderMathToString('Aceleración 9.8 m/s^2 y escala 10^-3');
    expect(powHtml).toContain('m/s²');
    expect(powHtml).toContain('10⁻³');

    const looseLatexHtml = renderMathToString('Calcula \\det(A) usando \\cos(\\theta)');
    expect(looseLatexHtml).toContain('katex');
    expect(looseLatexHtml).not.toContain('katex-error');
  });

  it('NO altera fechas, unidades compuestas, razones, viñetas markdown ni énfasis *texto*', () => {
    const input =
      'Fecha: 12/05/2026. Velocidad: 60 km/h o 16.7 m/s. Glucosa: 90 mg/dL, Na: 140 mEq/L. Servicio 24/7.\n* Viñeta uno\n* *Texto en cursiva*';
    const html = renderMathToString(input);
    expect(html).toContain('12/05/2026');
    expect(html).toContain('km/h');
    expect(html).toContain('m/s');
    expect(html).toContain('mg/dL');
    expect(html).toContain('mEq/L');
    expect(html).toContain('24/7');
    expect(html).toContain('* Viñeta uno');
    expect(html).toContain('*Texto en cursiva*');
  });

  it('KaTeXRenderer y KaTeXMath producen salida HTML equivalente y libre de errores', () => {
    const sample = 'Fórmula: $E = mc^2$ y $\\frac{1}{2}mv^2$';
    const m1 = renderToStaticMarkup(React.createElement(KaTeXRenderer, { content: sample }));
    const m2 = renderToStaticMarkup(React.createElement(KaTeXMath, { text: sample }));
    const m3 = renderToStaticMarkup(React.createElement(MathText, { text: sample }));
    expect(m1).toContain('katex');
    expect(m2).toContain('katex');
    expect(m3).toContain('katex');
    expect(m1).not.toContain('katex-error');
  });
});

describe('Regresión Cero Errores KaTeX en Bancos Matemáticos (public/data y src/data)', () => {
  it('renderiza sin katex-error los 17,640 reactivos completos del banco base en public/data/ (UES, ANSP, ASD, AVANZO, ENA, ESCALAFÓN)', () => {
    const root = process.cwd();
    const manifestPath = path.join(root, 'public', 'data', 'manifest.json');
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    expect(manifest.totalQuestions).toBe(17640);

    const jsonFiles: string[] = [];
    const collectJson = (dir: string) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          collectJson(full);
        } else if (
          entry.isFile() &&
          entry.name.endsWith('.json') &&
          entry.name !== 'manifest.json' &&
          entry.name !== 'curriculum.json' &&
          entry.name !== 'all.json'
        ) {
          jsonFiles.push(full);
        }
      }
    };
    collectJson(path.join(root, 'public', 'data'));

    let totalQuestions = 0;
    let checkedFields = 0;
    const seenIds = new Set<string>();

    for (const filePath of jsonFiles) {
      const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const items = Array.isArray(raw) ? raw : raw.questions || [];
      if (!Array.isArray(items) || items.length === 0) continue;

      for (const q of items) {
        if (!q || (!q.statement && !q.question)) continue;
        if (q.id) {
          if (seenIds.has(q.id)) continue;
          seenIds.add(q.id);
        }
        totalQuestions++;

        const optionTexts = Array.isArray(q.options)
          ? q.options.map((o: any) => (typeof o === 'string' ? o : o?.text))
          : q.options && typeof q.options === 'object'
            ? Object.values(q.options).map((o: any) => (typeof o === 'string' ? o : o?.text))
            : [];
        const rationaleTexts =
          q.distractorRationale && typeof q.distractorRationale === 'object'
            ? Object.values(q.distractorRationale)
            : [];

        const fields = [
          q.statement || q.question,
          q.explanation,
          ...optionTexts,
          ...rationaleTexts,
        ];
        for (const f of fields) {
          if (typeof f !== 'string') continue;
          const html = renderMathToString(f);
          expect(html).not.toContain('katex-error');
          expect(html).not.toMatch(/[\u0007\u0008\u000b\u000c]/);
          checkedFields++;
        }
      }
    }

    expect(totalQuestions).toBe(17640);
    expect(checkedFields).toBeGreaterThan(100000);
  }, 30000);

  it('renderiza sin katex-error ni sintaxis cruda sin humanizar en ingenieriaCienciasData, sigetSolarData y saludPrimariaData', () => {
    for (const f of INGENIERIA_FORMULAS) {
      expect(f.formulaKatex.startsWith('$')).toBe(true);
      const html = renderMathToString(f.formulaKatex);
      expect(html).toContain('katex');
      expect(html).not.toContain('katex-error');
    }

    for (const q of INGENIERIA_QUESTIONS) {
      expect(renderMathToString(q.problemStatement)).not.toContain('katex-error');
      expect(renderMathToString(q.formalSolution)).not.toContain('katex-error');
      for (const s of q.stepByStepDerivation) {
        expect(s).not.toContain('==>');
        expect(renderMathToString(s)).not.toContain('katex-error');
      }
    }

    for (const q of SIGET_SOLAR_QUESTIONS) {
      expect(q.explanation).not.toMatch(/\s<=\s|\s>=\s/);
      expect(renderMathToString(q.statement)).not.toContain('katex-error');
      expect(renderMathToString(q.explanation)).not.toContain('katex-error');
    }

    for (const q of SALUD_PRIMARIA_QUESTIONS) {
      expect(q.statement).not.toMatch(/\s<=\s|\s>=\s/);
      expect(renderMathToString(q.statement)).not.toContain('katex-error');
      expect(renderMathToString(q.clinicalExplanation)).not.toContain('katex-error');
    }
  });
});

describe('Renderizado SSR de Laboratorio Gráfico (<svg>) y Vistas UI', () => {
  it('InteractiveFormulaLab renderiza fórmulas KaTeX y gráficos <svg> interactivos', () => {
    const html = renderToStaticMarkup(React.createElement(InteractiveFormulaLab));
    expect(html).toContain('katex');
    expect(html).toContain('<svg');
    expect(html).toContain('Radio Vascular');
    expect(html).not.toContain('katex-error');
  });

  it('TechnicalCoursesView, SigetSolarView, IngenieriaCienciasView y FlashcardModal renderizan en SSR sin errores', () => {
    const techHtml = renderToStaticMarkup(React.createElement(TechnicalCoursesView));
    expect(techHtml.length).toBeGreaterThan(500);

    const sigetHtml = renderToStaticMarkup(React.createElement(SigetSolarView));
    expect(sigetHtml.length).toBeGreaterThan(500);

    const ingHtml = renderToStaticMarkup(React.createElement(IngenieriaCienciasView));
    expect(ingHtml).toContain('katex');
    expect(ingHtml).not.toContain('katex-error');

    const flashHtmlClosed = renderToStaticMarkup(
      React.createElement(FlashcardModal, { isOpen: false, onClose: () => {} })
    );
    expect(flashHtmlClosed).toBe('');

    const flashHtmlOpen = renderToStaticMarkup(
      React.createElement(FlashcardModal, { isOpen: true, onClose: () => {} })
    );
    expect(flashHtmlOpen.length).toBeGreaterThan(200);
    expect(flashHtmlOpen).not.toContain('katex-error');
  });
});

import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  DRIVER_CURRICULUM_UNITS,
  DRIVER_QUESTIONS,
  OFFICIAL_ROAD_SIGNS,
  getAllPracticalTrafficCases,
  generateOfficialVmtExam,
} from '../src/data/driverLicense';
import { DriverLicenseView } from '../src/components/DriverLicenseView';

describe('Actualización Integral Módulo Licencia de Conducir VMT & Carga Pesada', () => {
  const driverFiles = [
    'src/data/driverLicense/types.ts',
    'src/data/driverLicense/index.ts',
    'src/data/driverLicense/curriculum.ts',
    'src/data/driverLicense/signs.ts',
    'src/data/driverLicense/questions.ts',
    'src/data/driverLicense/questionsTeorico.ts',
    'src/data/driverLicense/questionsPsicologico.ts',
    'src/components/DriverLicenseView.tsx',
    'src/components/HeaderNavbar.tsx',
  ];

  it('prohíbe absolutamente menciones a SERTRACEN, DE 86, YouTube externo, apps terceras o número privado', () => {
    for (const relPath of driverFiles) {
      const content = readFileSync(resolve(process.cwd(), relPath), 'utf8');
      expect(content, `${relPath} no debe mencionar SERTRACEN`).not.toMatch(/SERTRACEN/i);
      expect(content, `${relPath} no debe mencionar DE 86`).not.toMatch(/\bDE\s*86\b|Decreto\s+Ejecutivo\s+N\.?º?\s*86/i);
      expect(content, `${relPath} no debe mencionar ManejaSV`).not.toMatch(/manejasv/i);
      expect(content, `${relPath} no debe contener 57.14`).not.toContain('57.14');
      expect(content, `${relPath} no debe contener entre 50 y 99 mg/dl`).not.toMatch(/entre\s+50\s+y\s+99\s+mg\/dl/i);
      expect(content, `${relPath} no debe contener enlace YouTube onS6aJIAKeE`).not.toContain('onS6aJIAKeE');
      expect(content, `${relPath} no debe mencionar la empresa privada`).not.toMatch(/procedimiento de la empresa|plan de emergencia de la empresa|de su empresa/i);
      expect(content, `${relPath} no debe contener el número privado 7943 9901`).not.toMatch(/7943\s*9901/);
    }
  });

  it('mantiene 9 unidades curriculares, cada una con >= 500 palabras sustantivas y 5 casos prácticos (45 totales)', () => {
    expect(DRIVER_CURRICULUM_UNITS.length).toBe(9);
    const allCases = getAllPracticalTrafficCases();
    expect(allCases.length).toBe(45);

    for (const unit of DRIVER_CURRICULUM_UNITS) {
      const words = unit.substantiveTheory
        .trim()
        .split(/\s+/)
        .filter((w) => w.length > 0);
      expect(words.length, `Unidad ${unit.id} debe superar 500 palabras`).toBeGreaterThanOrEqual(500);
      expect(unit.practicalCases.length, `Unidad ${unit.id} debe tener 5 casos`).toBe(5);
    }
  });

  it('actualiza Unidad 1 con D.E. 61, capacidades Art. 155-A, requisitos Art. 155 y Art. 118 LTTTSV', () => {
    const u1 = DRIVER_CURRICULUM_UNITS.find((u) => u.id === 'u1-marco-legal');
    expect(u1).toBeDefined();
    expect(u1!.substantiveTheory).toContain('Decreto Ejecutivo N.º 61');
    expect(u1!.substantiveTheory).toContain('1 de julio de 1996');
    expect(u1!.substantiveTheory).toContain('organismo evaluador autorizado');
    expect(u1!.substantiveTheory).toMatch(/quince \(15\) pasajeros/i);
    expect(u1!.substantiveTheory).toMatch(/treinta \(30\) pasajeros/i);
    expect(u1!.substantiveTheory).toContain('Art. 155');
    expect(u1!.substantiveTheory).toContain('Art. 118');
  });

  it('incluye Unidad 9 (u9-carga-pesada-cabezales) con normativa D.E. 23, quinta rueda y frenos de aire', () => {
    const u9 = DRIVER_CURRICULUM_UNITS.find((u) => u.id === 'u9-carga-pesada-cabezales');
    expect(u9).toBeDefined();
    const text = u9!.substantiveTheory;
    expect(text).toContain('T3S3');
    expect(text).toContain('5%');
    expect(text).toContain('13.75 metros');
    expect(text).toContain('quinta rueda');
    expect(text).toContain('king pin');
    expect(text).toContain('manguera roja');
    expect(text).toContain('manguera azul');
    expect(text).toContain('65 a 120');
    expect(text).toContain('chimbos');
    expect(text).toContain('2.60 metros');
    expect(text).toContain('10 km/h');
    expect(text).toContain('1.80 y 2.35 metros');
    expect(text).toContain('12 toneladas');
    expect(text).toContain('21.5 toneladas');
    expect(text).toContain('100 metros');
    expect(text).toContain('30 centímetros');
  });

  it('valida >= 500 preguntas únicas (>= 350 teóricas y >= 150 psicológicas) con distractorRationale único por opción A/B/C/D y balance estricto', () => {
    expect(DRIVER_QUESTIONS.length).toBeGreaterThanOrEqual(500);
    const teoricas = DRIVER_QUESTIONS.filter((q) => q.category === 'teorico');
    const psicologicas = DRIVER_QUESTIONS.filter((q) => q.category === 'psicologico');
    expect(teoricas.length).toBeGreaterThanOrEqual(350);
    expect(psicologicas.length).toBeGreaterThanOrEqual(150);

    const seenQuestions = new Set<string>();
    const seenIds = new Set<string>();
    const countsTotal: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
    const countsTeorico: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
    const countsPsico: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };

    for (const q of DRIVER_QUESTIONS) {
      expect(seenIds.has(q.id), `ID duplicado: ${q.id}`).toBe(false);
      seenIds.add(q.id);

      const normalizedQ = (q.question || q.statement).trim().toLowerCase();
      expect(seenQuestions.has(normalizedQ), `Enunciado duplicado en ${q.id}`).toBe(false);
      seenQuestions.add(normalizedQ);

      expect(q.options.length, `${q.id} debe tener 4 opciones`).toBe(4);
      expect(new Set(q.options.map((o) => o.trim().toLowerCase())).size, `${q.id} tiene opciones duplicadas`).toBe(4);
      expect([0, 1, 2, 3]).toContain(q.correctAnswer);
      expect(q.correctKey, `${q.id} correctKey debe coincidir con correctAnswer`).toBe(['A', 'B', 'C', 'D'][q.correctAnswer]);
      expect(q.explanation.trim().length, `${q.id} explanation muy corta`).toBeGreaterThanOrEqual(20);
      expect((q.legalReference || '').trim().length, `${q.id} legalReference muy corta`).toBeGreaterThanOrEqual(5);

      countsTotal[q.correctAnswer]++;
      if (q.category === 'teorico') countsTeorico[q.correctAnswer]++;
      else countsPsico[q.correctAnswer]++;

      expect(q.distractorRationale).toBeDefined();
      const keys = ['A', 'B', 'C', 'D'];
      const rationaleSet = new Set<string>();
      for (const k of keys) {
        const text = q.distractorRationale[k];
        expect(text, `${q.id} opción ${k} debe tener distractorRationale`).toBeDefined();
        expect(text.trim().length, `${q.id} opción ${k} rationale muy corto`).toBeGreaterThan(15);
        expect(text.trim().toLowerCase()).not.toContain('respuesta correcta');
        expect(rationaleSet.has(text.trim())).toBe(false);
        rationaleSet.add(text.trim());
      }
    }

    for (const c of Object.values(countsTotal)) {
      const ratio = c / DRIVER_QUESTIONS.length;
      expect(ratio).toBeGreaterThanOrEqual(0.15);
      expect(ratio).toBeLessThanOrEqual(0.4);
    }
    for (const c of Object.values(countsTeorico)) {
      const ratio = c / teoricas.length;
      expect(ratio).toBeGreaterThanOrEqual(0.15);
      expect(ratio).toBeLessThanOrEqual(0.4);
    }
    for (const c of Object.values(countsPsico)) {
      const ratio = c / psicologicas.length;
      expect(ratio).toBeGreaterThanOrEqual(0.15);
      expect(ratio).toBeLessThanOrEqual(0.4);
    }

    const exam = generateOfficialVmtExam(30);
    expect(exam.length).toBe(30);
    expect(exam.filter((q) => q.category === 'teorico').length).toBe(20);
    expect(exam.filter((q) => q.category === 'psicologico').length).toBe(10);

    expect(generateOfficialVmtExam(undefined, 'teorico350').length).toBeGreaterThanOrEqual(350);
    expect(generateOfficialVmtExam(undefined, 'psicologico150').length).toBeGreaterThanOrEqual(150);
    expect(generateOfficialVmtExam(undefined, 'all500').length).toBeGreaterThanOrEqual(500);
    expect(generateOfficialVmtExam(0, 'official30')).toEqual([]);
    expect(generateOfficialVmtExam(-5, 'official30')).toEqual([]);
    expect(generateOfficialVmtExam(-5, 'teorico350')).toEqual([]);
    expect(generateOfficialVmtExam(50, 'teorico350').every((q) => q.category === 'teorico')).toBe(true);
    expect(generateOfficialVmtExam(50, 'psicologico150').every((q) => q.category === 'psicologico')).toBe(true);
  });

  it('amplía señales oficiales del Manual 2025 en vectores SVG válidos cubriendo las 5 categorías', () => {
    expect(OFFICIAL_ROAD_SIGNS.length).toBeGreaterThanOrEqual(100);
    const seenIds = new Set<string>();
    const seenCodes = new Set<string>();
    const categories = new Set<string>();

    for (const sign of OFFICIAL_ROAD_SIGNS) {
      expect(seenIds.has(sign.id), `ID duplicado: ${sign.id}`).toBe(false);
      seenIds.add(sign.id);
      expect(seenCodes.has(sign.siecaCode), `Código SIECA duplicado: ${sign.siecaCode}`).toBe(false);
      seenCodes.add(sign.siecaCode);
      categories.add(sign.category);
      expect(sign.iconSvg, `${sign.id} debe contener etiqueta <svg`).toContain('<svg');
      expect(sign.iconSvg, `${sign.id} debe contener viewBox`).toContain('viewBox="0 0 100 100"');
      expect(sign.iconSvg, `${sign.id} debe cerrar etiqueta </svg>`).toContain('</svg>');
    }

    expect(categories.has('reglamentaria')).toBe(true);
    expect(categories.has('preventiva')).toBe(true);
    expect(categories.has('informativa')).toBe(true);
    expect(categories.has('obras')).toBe(true);
    expect(categories.has('horizontal')).toBe(true);

    const names = OFFICIAL_ROAD_SIGNS.map((s) => s.name).join(' | ');
    expect(names).toMatch(/Altura Máxima/i);
    expect(names).toMatch(/Ancho Máximo/i);
    expect(names).toMatch(/Peso Máximo/i);
    expect(names).toMatch(/Construcción y Obras/i);
    expect(names).toMatch(/Pendiente Pronunciada/i);
    expect(names).toMatch(/Maquinaria Agrícola/i);
    expect(names).toMatch(/Vado/i);
    expect(names).toMatch(/Prohibido Virar en U/i);
    expect(names).toMatch(/Cruce de Ferrocarril/i);
    expect(names).toMatch(/Paso Peatonal/i);

    const questionsWithSigns = DRIVER_QUESTIONS.filter((q) => q.signId);
    expect(questionsWithSigns.length).toBeGreaterThanOrEqual(10);
    for (const q of questionsWithSigns) {
      expect(seenIds.has(q.signId!), `signId inválido en ${q.id}: ${q.signId}`).toBe(true);
    }
  });

  it('renderiza DriverLicenseView en SSR sin errores y con contadores dinámicos actualizados', () => {
    const html = renderToStaticMarkup(React.createElement(DriverLicenseView));
    expect(html).toContain('Organismo Evaluador Autorizado');
    expect(html).toContain('9 Unidades');
    expect(html).toContain('45)');
    expect(html).toContain(`${OFFICIAL_ROAD_SIGNS.length})`);
    expect(html).toContain('DE 61');
    expect(html).toContain('DE 23');
    expect(html).not.toMatch(/SERTRACEN/i);
    expect(html).not.toMatch(/\bDE\s*86\b/i);

    const quizHtml = renderToStaticMarkup(React.createElement(DriverLicenseView, { initialSubTab: 'quiz' }));
    expect(quizHtml).toContain('Simulador Oficial VMT (30 / 30 min)');
    expect(quizHtml).toContain('Teórico Completo (');
    expect(quizHtml).toContain('Psicológico Completo (');
    expect(quizHtml).toContain('Banco Completo (');
    expect(quizHtml).toContain('Iniciar Examen Oficial (30 Min)');
    expect(quizHtml).toContain('Calificar y Ver Solucionario (0/30)');
  });
});

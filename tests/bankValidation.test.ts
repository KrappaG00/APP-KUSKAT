import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Banco Maestro de Preguntas (Validación de Integridad)', () => {
  const rootDir = process.cwd();
  const manifestPath = path.join(rootDir, 'public', 'data', 'manifest.json');
  const questionsDir = path.join(rootDir, 'public', 'data', 'questions');
  const anspDir = path.join(rootDir, 'public', 'data', 'ansp', 'questions');

  it('el manifiesto existe y declara el total de 17,640 preguntas oficiales', () => {
    expect(fs.existsSync(manifestPath)).toBe(true);
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    expect(manifest.totalQuestions).toBe(17640);
    expect(manifest.institutions.UES.totalQuestions).toBe(7500);
    expect(manifest.institutions.ESCALAFON.totalQuestions).toBe(3300);
    expect(manifest.institutions.AVANZO.totalQuestions).toBe(3000);
    expect(manifest.institutions.ASD.totalQuestions).toBe(2190);
    expect(manifest.institutions.ENA.totalQuestions).toBe(1400);
    expect(manifest.institutions.ANSP.totalQuestions).toBe(250);
  });

  it('todos los archivos UES (25 subtemas) tienen exactamente 300 preguntas válidas', () => {
    const files = fs.readdirSync(questionsDir).filter((f) => f.endsWith('.json'));
    expect(files.length).toBe(25);

    let totalUes = 0;
    const globalIds = new Set<string>();

    for (const file of files) {
      const fullPath = path.join(questionsDir, file);
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      expect(Array.isArray(content)).toBe(true);
      expect(content.length).toBe(300);
      totalUes += content.length;

      content.forEach((q: any) => {
        // ID único
        expect(q.id).toBeDefined();
        expect(typeof q.id).toBe('string');
        expect(globalIds.has(q.id)).toBe(false);
        globalIds.add(q.id);

        // Enunciado no vacío
        expect(q.statement).toBeDefined();
        expect(typeof q.statement).toBe('string');
        expect(q.statement.trim().length).toBeGreaterThan(0);

        // Opciones válidas (al menos 2 opciones, típicamente A, B, C, D)
        expect(Array.isArray(q.options)).toBe(true);
        expect(q.options.length).toBeGreaterThanOrEqual(2);

        // Clave de respuesta correcta existe en las opciones
        const keys = q.options.map((o: any) => o.key);
        expect(q.correctAnswer).toBeDefined();
        expect(keys).toContain(q.correctAnswer);

        // Cada opción tiene texto no vacío
        q.options.forEach((opt: any) => {
          expect(opt.key).toBeDefined();
          expect(typeof opt.text).toBe('string');
          expect(opt.text.trim().length).toBeGreaterThan(0);
        });

        // Delimitadores matemáticos balanceados (KaTeX $ y $$)
        const dollarMatches = q.statement.match(/(?<!\\)\$/g);
        if (dollarMatches) {
          expect(dollarMatches.length % 2).toBe(0);
        }
      });
    }

    expect(totalUes).toBe(7500);
    expect(globalIds.size).toBe(7500);
  }, 30000);

  it('todos los archivos ANSP (10 materias) contienen preguntas con clave y opciones válidas', () => {
    const files = fs.readdirSync(anspDir).filter((f) => f.endsWith('.json') && f !== 'all.json');
    expect(files.length).toBe(10);

    let totalAnsp = 0;
    const globalAnspIds = new Set<string>();

    for (const file of files) {
      const fullPath = path.join(anspDir, file);
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      expect(Array.isArray(content)).toBe(true);
      totalAnsp += content.length;

      content.forEach((q: any) => {
        expect(q.id).toBeDefined();
        expect(globalAnspIds.has(q.id)).toBe(false);
        globalAnspIds.add(q.id);

        expect(q.statement).toBeDefined();
        expect(q.statement.trim().length).toBeGreaterThan(0);

        expect(Array.isArray(q.options)).toBe(true);
        expect(q.options.length).toBeGreaterThanOrEqual(2);

        const keys = q.options.map((o: any) => o.key);
        expect(keys).toContain(q.correctAnswer);
      });
    }

    expect(totalAnsp).toBe(250);
  });

  it('todos los archivos ASD (6 subtemas en 3 grados) tienen exactamente 365 preguntas válidas (total 2,190)', () => {
    const asdDir = path.join(rootDir, 'public', 'data', 'asd', 'questions');
    const files = fs.readdirSync(asdDir).filter((f) => f.endsWith('.json') && f !== 'all.json');
    expect(files.length).toBe(6);

    let totalAsd = 0;
    const globalAsdIds = new Set<string>();

    for (const file of files) {
      const fullPath = path.join(asdDir, file);
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      expect(Array.isArray(content)).toBe(true);
      expect(content.length).toBe(365);
      totalAsd += content.length;

      content.forEach((q: any) => {
        expect(q.id).toBeDefined();
        expect(globalAsdIds.has(q.id)).toBe(false);
        globalAsdIds.add(q.id);

        expect(q.institution).toBe('ASD');
        expect(q.statement).toBeDefined();
        expect(q.statement.trim().length).toBeGreaterThan(0);

        expect(Array.isArray(q.options)).toBe(true);
        expect(q.options.length).toBe(4);

        const keys = q.options.map((o: any) => o.key);
        expect(keys).toContain(q.correctAnswer);
      });
    }

    expect(totalAsd).toBe(2190);
    expect(globalAsdIds.size).toBe(2190);

    // Validar archivo consolidado all.json
    const allFile = path.join(asdDir, 'all.json');
    expect(fs.existsSync(allFile)).toBe(true);
    const allContent = JSON.parse(fs.readFileSync(allFile, 'utf-8'));
    expect(allContent.length).toBe(2190);
  });

  it('todos los archivos AVANZO (5 asignaturas) tienen exactamente 600 preguntas válidas (total 3,000)', () => {
    const avanzoDir = path.join(rootDir, 'public', 'data', 'avanzo', 'questions');
    const files = fs.readdirSync(avanzoDir).filter((f) => f.endsWith('.json') && f !== 'all.json');
    expect(files.length).toBe(5);

    let totalAvanzo = 0;
    const globalAvanzoIds = new Set<string>();

    for (const file of files) {
      const fullPath = path.join(avanzoDir, file);
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      expect(Array.isArray(content)).toBe(true);
      expect(content.length).toBe(600);
      totalAvanzo += content.length;

      content.forEach((q: any) => {
        expect(q.id).toBeDefined();
        expect(globalAvanzoIds.has(q.id)).toBe(false);
        globalAvanzoIds.add(q.id);

        expect(q.institution).toBe('AVANZO');
        expect(q.statement).toBeDefined();
        expect(q.statement.trim().length).toBeGreaterThan(0);

        expect(Array.isArray(q.options)).toBe(true);
        expect(q.options.length).toBe(4);

        const keys = q.options.map((o: any) => o.key);
        expect(keys).toContain(q.correctAnswer);
      });
    }

    expect(totalAvanzo).toBe(3000);
    expect(globalAvanzoIds.size).toBe(3000);

    // Validar archivo consolidado all.json
    const allFile = path.join(avanzoDir, 'all.json');
    expect(fs.existsSync(allFile)).toBe(true);
    const allContent = JSON.parse(fs.readFileSync(allFile, 'utf-8'));
    expect(allContent.length).toBe(3000);
  });

  it('todos los archivos ENA (4 asignaturas) tienen exactamente 350 preguntas válidas (total 1,400)', () => {
    const enaDir = path.join(rootDir, 'public', 'data', 'ena', 'questions');
    const files = fs.readdirSync(enaDir).filter((f) => f.endsWith('.json') && f !== 'all.json');
    expect(files.length).toBe(4);

    let totalEna = 0;
    const globalEnaIds = new Set<string>();

    for (const file of files) {
      const fullPath = path.join(enaDir, file);
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      expect(Array.isArray(content)).toBe(true);
      expect(content.length).toBe(350);
      totalEna += content.length;

      content.forEach((q: any) => {
        expect(q.id).toBeDefined();
        expect(globalEnaIds.has(q.id)).toBe(false);
        globalEnaIds.add(q.id);

        expect(q.institution).toBe('ENA');
        expect(q.statement).toBeDefined();
        expect(q.statement.trim().length).toBeGreaterThan(0);

        expect(Array.isArray(q.options)).toBe(true);
        expect(q.options.length).toBe(4);

        const keys = q.options.map((o: any) => o.key);
        expect(keys).toContain(q.correctAnswer);
      });
    }

    expect(totalEna).toBe(1400);
    expect(globalEnaIds.size).toBe(1400);

    // Validar archivo consolidado all.json
    const allFile = path.join(enaDir, 'all.json');
    expect(fs.existsSync(allFile)).toBe(true);
    const allContent = JSON.parse(fs.readFileSync(allFile, 'utf-8'));
    expect(allContent.length).toBe(1400);
  });

  it('todos los archivos ESCALAFÓN DOCENTE (11 especialidades) tienen exactamente 300 preguntas válidas (total 3,300)', () => {
    const escalafonDir = path.join(rootDir, 'public', 'data', 'escalafon', 'questions');
    const files = fs.readdirSync(escalafonDir).filter((f) => f.endsWith('.json') && f !== 'all.json');
    expect(files.length).toBe(11);

    let totalEscalafon = 0;
    const globalEscalafonIds = new Set<string>();

    for (const file of files) {
      const fullPath = path.join(escalafonDir, file);
      const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
      expect(Array.isArray(content)).toBe(true);
      expect(content.length).toBe(300);
      totalEscalafon += content.length;

      content.forEach((q: any) => {
        expect(q.id).toBeDefined();
        expect(globalEscalafonIds.has(q.id)).toBe(false);
        globalEscalafonIds.add(q.id);

        expect(q.institution).toBe('ESCALAFON');
        expect(q.statement).toBeDefined();
        expect(q.statement.trim().length).toBeGreaterThan(0);

        expect(Array.isArray(q.options)).toBe(true);
        expect(q.options.length).toBe(4);

        const keys = q.options.map((o: any) => o.key);
        expect(keys).toContain(q.correctAnswer);
      });
    }

    expect(totalEscalafon).toBe(3300);
    expect(globalEscalafonIds.size).toBe(3300);

    // Validar archivo consolidado all.json
    const allFile = path.join(escalafonDir, 'all.json');
    expect(fs.existsSync(allFile)).toBe(true);
    const allContent = JSON.parse(fs.readFileSync(allFile, 'utf-8'));
    expect(allContent.length).toBe(3300);
  });
});

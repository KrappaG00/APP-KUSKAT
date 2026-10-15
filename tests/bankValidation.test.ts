import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

describe('Banco Maestro de Preguntas (Validación de Integridad)', () => {
  const rootDir = process.cwd();
  const manifestPath = path.join(rootDir, 'public', 'data', 'manifest.json');
  const questionsDir = path.join(rootDir, 'public', 'data', 'questions');
  const anspDir = path.join(rootDir, 'public', 'data', 'ansp', 'questions');

  it('el manifiesto existe y declara el total de 7,750 preguntas oficiales', () => {
    expect(fs.existsSync(manifestPath)).toBe(true);
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
    expect(manifest.totalQuestions).toBe(7750);
    expect(manifest.institutions.UES.totalQuestions).toBe(7500);
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
});

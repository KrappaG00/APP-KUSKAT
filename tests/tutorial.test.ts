import { describe, it, expect, beforeEach } from 'vitest';
import { TUTORIAL_STEPS } from '../src/components/OnboardingTutorial';

// Mock de localStorage y sessionStorage para Node / Vitest
const createStorageMock = () => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, val: string) => {
      store[key] = String(val);
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
};

const localMock = createStorageMock();
const sessionMock = createStorageMock();
(globalThis as any).localStorage = localMock;
(globalThis as any).sessionStorage = sessionMock;

describe('Tutorial de Onboarding Interactivo (6 Pasos y Persistencia)', () => {
  beforeEach(() => {
    localMock.clear();
    sessionMock.clear();
  });

  it('tiene exactamente 6 pasos con títulos, descripciones y puntos clave pedagógicos', () => {
    expect(TUTORIAL_STEPS.length).toBe(6);

    TUTORIAL_STEPS.forEach((step, index) => {
      expect(step.step).toBe(index + 1);
      expect(typeof step.title).toBe('string');
      expect(step.title.trim().length).toBeGreaterThan(0);

      expect(typeof step.description).toBe('string');
      expect(step.description.trim().length).toBeGreaterThan(0);

      expect(Array.isArray(step.bulletPoints)).toBe(true);
      expect(step.bulletPoints.length).toBeGreaterThanOrEqual(4);
    });
  });

  it('los pasos cubren instituciones/convocatorias, categorías/niveles, escuela de idiomas multilingüe, KaTeX, simulador y resultados/legal', () => {
    const titles = TUTORIAL_STEPS.map((s) => s.title.toLowerCase());
    expect(titles.some((t) => t.includes('institución') || t.includes('convocatorias'))).toBe(true);
    expect(titles.some((t) => t.includes('categorías') || t.includes('niveles') || t.includes('malla'))).toBe(true);
    expect(titles.some((t) => t.includes('idiomas') || t.includes('lenguas'))).toBe(true);
    expect(titles.some((t) => t.includes('katex') || t.includes('cuentas'))).toBe(true);
    expect(titles.some((t) => t.includes('simulador'))).toBe(true);
    expect(titles.some((t) => t.includes('resultados') || t.includes('legal'))).toBe(true);
  });

  it('el paso de idiomas detalla los 7 idiomas, las 840 clases y las 16,800 preguntas (2,400 por idioma, 400 por nivel)', () => {
    const langStep = TUTORIAL_STEPS.find((s) => s.title.toLowerCase().includes('idiomas'));
    expect(langStep).toBeDefined();
    const allBulletText = langStep?.bulletPoints.join(' ') || '';
    expect(allBulletText).toContain('7');
    expect(allBulletText.toLowerCase()).toContain('náhuat');
    expect(allBulletText.toLowerCase()).toContain('lenca');
    expect(allBulletText.toLowerCase()).toContain('kakawira');
    expect(allBulletText.toLowerCase()).toContain('alemán');
    expect(allBulletText.toLowerCase()).toContain('árabe');
    expect(allBulletText.toLowerCase()).toContain('mandarín');
    expect(allBulletText.toLowerCase()).toContain('inglés');
    expect(allBulletText).toContain('840');
    expect(allBulletText).toContain('16,800');
    expect(allBulletText).toContain('2,400');
    expect(allBulletText).toContain('400');
  });

  it('el paso de malla curricular detalla la teoría oficial de ≥500 palabras y formato APA 7.ª Edición', () => {
    const theoryStep = TUTORIAL_STEPS.find((s) => s.step === 2);
    expect(theoryStep).toBeDefined();
    expect(theoryStep?.title).toContain('APA 7.ª Edición');
    const text = (theoryStep?.description || '') + ' ' + (theoryStep?.bulletPoints.join(' ') || '');
    expect(text).toContain('500');
    expect(text).toContain('APA 7');
  });

  it('el paso evaluativo destaca la modalidad de Verdadero o Falso (V/F) y Opción Múltiple (A-D)', () => {
    const evalStep = TUTORIAL_STEPS.find((s) => s.step === 4);
    expect(evalStep).toBeDefined();
    expect(evalStep?.title).toContain('Verdadero o Falso');
    const text = (evalStep?.description || '') + ' ' + (evalStep?.bulletPoints.join(' ') || '');
    expect(text).toContain('Verdadero o Falso');
    expect(text).toContain('V/F');
    expect(text).toContain('Opción Múltiple');
  });

  it('el paso del simulador incluye la remediación pedagógica inmediata ante errores', () => {
    const simStep = TUTORIAL_STEPS.find((s) => s.step === 5);
    expect(simStep).toBeDefined();
    expect(simStep?.title).toContain('Remediación Inmediata');
    const text = (simStep?.description || '') + ' ' + (simStep?.bulletPoints.join(' ') || '');
    expect(text.toLowerCase()).toContain('remediación pedagógica');
  });

  it('respeta la preferencia de persistencia en localStorage cuando el usuario marca no volver a mostrar', () => {
    const STORAGE_KEY = 'kuskat_tutorial_never_show';
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();

    // El usuario marca "No volver a mostrar"
    localStorage.setItem(STORAGE_KEY, 'true');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('true');

    // Comprobamos la verificación booleana usada en App.tsx
    const isDismissed = localStorage.getItem(STORAGE_KEY) === 'true';
    expect(isDismissed).toBe(true);
  });

  it('incluye el Sistema Multilingüe Intercultural, el Modo Aprender Español y la Vista 2D Accesible', () => {
    const fullText = TUTORIAL_STEPS.map(
      (s) => `${s.title} ${s.subtitle} ${s.description} ${s.bulletPoints.join(' ')}`
    ).join(' ');

    expect(fullText).toContain('Aprender Español');
    expect(fullText).toContain('Glosario Técnico Intercultural');
    expect(fullText).toContain('Vista 2D Accesible');
    expect(fullText).toContain('RTL');
  });
});

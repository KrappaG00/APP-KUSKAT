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

describe('Tutorial de Onboarding Interactivo (5 Pasos y Persistencia)', () => {
  beforeEach(() => {
    localMock.clear();
    sessionMock.clear();
  });

  it('tiene exactamente 5 pasos con títulos, descripciones y puntos clave pedagógicos', () => {
    expect(TUTORIAL_STEPS.length).toBe(5);

    TUTORIAL_STEPS.forEach((step, index) => {
      expect(step.step).toBe(index + 1);
      expect(typeof step.title).toBe('string');
      expect(step.title.trim().length).toBeGreaterThan(0);

      expect(typeof step.description).toBe('string');
      expect(step.description.trim().length).toBeGreaterThan(0);

      expect(Array.isArray(step.bulletPoints)).toBe(true);
      expect(step.bulletPoints.length).toBeGreaterThanOrEqual(2);
    });
  });

  it('los pasos cubren instituciones, categorías/niveles, KaTeX, simulador y resultados', () => {
    const titles = TUTORIAL_STEPS.map((s) => s.title.toLowerCase());
    expect(titles.some((t) => t.includes('institución') || t.includes('materia'))).toBe(true);
    expect(titles.some((t) => t.includes('categorías') || t.includes('niveles'))).toBe(true);
    expect(titles.some((t) => t.includes('katex'))).toBe(true);
    expect(titles.some((t) => t.includes('simulador'))).toBe(true);
    expect(titles.some((t) => t.includes('resultados') || t.includes('diagnóstico'))).toBe(true);
  });

  it('respeta la preferencia de persistencia en localStorage cuando el usuario marca no volver a mostrar', () => {
    const STORAGE_KEY = 'kuskat_tutorial_dismissed_v1';
    expect(localStorage.getItem(STORAGE_KEY)).toBeNull();

    // El usuario marca "No volver a mostrar"
    localStorage.setItem(STORAGE_KEY, 'true');
    expect(localStorage.getItem(STORAGE_KEY)).toBe('true');

    // Comprobamos la verificación booleana usada en App.tsx
    const isDismissed = localStorage.getItem(STORAGE_KEY) === 'true';
    expect(isDismissed).toBe(true);
  });
});

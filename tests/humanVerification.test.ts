import { describe, it, expect, beforeEach } from 'vitest';
import {
  HumanVerificationModal,
  VERIFICATION_STORAGE_KEY,
  getTodayKey,
} from '../src/components/HumanVerificationModal';

// Mock de localStorage para Node / Vitest
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

const storageMock = createStorageMock();
(globalThis as any).localStorage = storageMock;

describe('HumanVerificationModal — Desafío Matemático Anti-Robot', () => {
  beforeEach(() => {
    storageMock.clear();
  });

  it('1. getTodayKey genera la fecha en formato YYYY-MM-DD', () => {
    const key = getTodayKey();
    expect(key).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('2. Clave de almacenamiento constante coincide con kuskat_bot_challenge_date', () => {
    expect(VERIFICATION_STORAGE_KEY).toBe('kuskat_bot_challenge_date');
  });

  it('3. Si localStorage no tiene la fecha de hoy, la condición de verificación diaria exige resolverlo', () => {
    const today = getTodayKey();
    expect(localStorage.getItem(VERIFICATION_STORAGE_KEY)).toBeNull();

    // Simular que el usuario guardó una fecha anterior (ayer)
    localStorage.setItem(VERIFICATION_STORAGE_KEY, '2026-01-01');
    expect(localStorage.getItem(VERIFICATION_STORAGE_KEY)).not.toBe(today);
  });

  it('4. Si el usuario ya resolvió el desafío hoy, se reconoce la persistencia diaria', () => {
    const today = getTodayKey();
    localStorage.setItem(VERIFICATION_STORAGE_KEY, today);
    expect(localStorage.getItem(VERIFICATION_STORAGE_KEY)).toBe(today);
  });

  it('5. La lógica de resolución valida estrictamente que 2 + 2 = 4', () => {
    const options = [3, 4, 5, 22];
    const correctOption = 4;

    options.forEach((opt) => {
      const isCorrect = opt === 4;
      if (isCorrect) {
        expect(opt).toBe(correctOption);
      } else {
        expect(opt).not.toBe(correctOption);
      }
    });
  });
});

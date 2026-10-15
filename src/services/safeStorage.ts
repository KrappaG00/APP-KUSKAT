/**
 * Almacenamiento seguro compatible con navegador y entornos de testing (Node / Vitest).
 * Si localStorage no está disponible o lanza error (por ejemplo, en modo privado estricto o Node),
 * recurre de forma transparente a una memoria volátil en RAM.
 */
class SafeStorage {
  private memory = new Map<string, string>();

  getItem(key: string): string | null {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      try {
        return window.localStorage.getItem(key);
      } catch {
        return this.memory.get(key) ?? null;
      }
    }
    return this.memory.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      try {
        window.localStorage.setItem(key, value);
        return;
      } catch {
        // fallback a memoria
      }
    }
    this.memory.set(key, value);
  }

  removeItem(key: string): void {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      try {
        window.localStorage.removeItem(key);
      } catch {
        // fallback
      }
    }
    this.memory.delete(key);
  }

  clear(): void {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      try {
        window.localStorage.clear();
      } catch {
        // fallback
      }
    }
    this.memory.clear();
  }
}

export const safeStorage = new SafeStorage();

/**
 * KUSKAT OFFLINE-FIRST DATABASE ENGINE
 * IndexedDB storage engine enabling rural students in El Salvador (Morazán, Chalatenango, Cabañas, La Unión, etc.)
 * to study question banks, review flashcards, and run exams without active internet or data consumption.
 */

const DB_NAME = 'kuskat_offline_v1';
const DB_VERSION = 1;

export interface OfflineExamRecord {
  id: string;
  examTitle: string;
  category: string;
  scorePct: number;
  correctAnswers: number;
  totalQuestions: number;
  timestamp: string;
  synced: boolean;
}

export interface CachedModuleData {
  moduleId: string;
  title: string;
  version: string;
  data: any;
  cachedAt: string;
}

function openKuskatDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB no soportado en este entorno'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      // 1. Almacén de módulos y paquetes descargados para estudio offline
      if (!db.objectStoreNames.contains('cached_modules')) {
        db.createObjectStore('cached_modules', { keyPath: 'moduleId' });
      }

      // 2. Almacén de registros de exámenes realizados offline
      if (!db.objectStoreNames.contains('offline_exam_records')) {
        const examStore = db.createObjectStore('offline_exam_records', { keyPath: 'id' });
        examStore.createIndex('synced', 'synced', { unique: false });
        examStore.createIndex('timestamp', 'timestamp', { unique: false });
      }

      // 3. Cola de sincronización en segundo plano (Background Sync Queue)
      if (!db.objectStoreNames.contains('sync_queue')) {
        db.createObjectStore('sync_queue', { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Guarda un registro de examen realizado offline en IndexedDB
 */
export async function saveOfflineExamRecord(record: Omit<OfflineExamRecord, 'id' | 'synced'>): Promise<string> {
  const id = `off-exam-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const fullRecord: OfflineExamRecord = {
    ...record,
    id,
    synced: false,
  };

  try {
    const db = await openKuskatDB();
    const tx = db.transaction('offline_exam_records', 'readwrite');
    const store = tx.objectStore('offline_exam_records');
    store.put(fullRecord);

    // Añadir también a la cola de sincronización
    const syncTx = db.transaction('sync_queue', 'readwrite');
    const syncStore = syncTx.objectStore('sync_queue');
    syncStore.add({
      type: 'exam_record',
      recordId: id,
      payload: fullRecord,
      queuedAt: new Date().toISOString(),
    });

    return id;
  } catch (err) {
    console.warn('[OfflineDB] Fallback a localStorage para guardar registro de examen:', err);
    const existing = JSON.parse(localStorage.getItem('kuskat_offline_exams') || '[]');
    existing.push(fullRecord);
    localStorage.setItem('kuskat_offline_exams', JSON.stringify(existing));
    return id;
  }
}

/**
 * Obtiene todos los exámenes guardados localmente
 */
export async function getOfflineExamRecords(): Promise<OfflineExamRecord[]> {
  try {
    const db = await openKuskatDB();
    return new Promise((resolve) => {
      const tx = db.transaction('offline_exam_records', 'readonly');
      const store = tx.objectStore('offline_exam_records');
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
      request.onerror = () => resolve([]);
    });
  } catch {
    return JSON.parse(localStorage.getItem('kuskat_offline_exams') || '[]');
  }
}

/**
 * Guarda en caché local un módulo completo (ej. temario, preguntas, fichas)
 */
export async function cacheModuleOffline(moduleId: string, title: string, data: any): Promise<void> {
  const cacheEntry: CachedModuleData = {
    moduleId,
    title,
    version: '1.0.0',
    data,
    cachedAt: new Date().toISOString(),
  };

  try {
    const db = await openKuskatDB();
    const tx = db.transaction('cached_modules', 'readwrite');
    tx.objectStore('cached_modules').put(cacheEntry);
  } catch (err) {
    console.warn('[OfflineDB] No se pudo cachear en IndexedDB:', err);
  }
}

/**
 * Recupera un módulo almacenado en caché local cuando no hay conexión
 */
export async function getCachedModuleOffline(moduleId: string): Promise<any | null> {
  try {
    const db = await openKuskatDB();
    return new Promise((resolve) => {
      const tx = db.transaction('cached_modules', 'readonly');
      const request = tx.objectStore('cached_modules').get(moduleId);
      request.onsuccess = () => resolve(request.result ? request.result.data : null);
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

/**
 * Helper para verificar el estado de conexión a internet
 */
export function isOnline(): boolean {
  return typeof navigator !== 'undefined' ? navigator.onLine : true;
}

/**
 * Escucha cambios en la conectividad del dispositivo
 */
export function addConnectivityListener(onChange: (online: boolean) => void): () => void {
  if (typeof window === 'undefined') return () => {};

  const handleOnline = () => onChange(true);
  const handleOffline = () => onChange(false);

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
}

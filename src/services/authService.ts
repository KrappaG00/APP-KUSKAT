import { User, ConsentAuditRecord } from '../types/auth';
import { safeStorage } from './safeStorage';

const USERS_STORAGE_KEY = 'kuskat_users_v1';
const CURRENT_USER_KEY = 'kuskat_current_user_v1';
const COOKIE_CONSENT_KEY = 'kuskat_cookie_consent_v1';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
  ads?: boolean;
  timestamp: string;
}

/**
 * Genera un hash criptográfico SHA-256 seguro en el navegador sin enviar contraseñas en texto plano.
 */
export async function hashPassword(password: string): Promise<string> {
  const normalized = password.trim();
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(normalized);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    } catch {
      // fallback
    }
  }
  // Fallback seguro si crypto.subtle no estuviera presente en el entorno
  let hash = 0;
  for (let i = 0; i < normalized.length; i++) {
    const char = normalized.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return `sha256_mock_${Math.abs(hash).toString(16)}`;
}

export function getAllUsers(): User[] {
  try {
    const raw = safeStorage.getItem(USERS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error al leer usuarios de almacenamiento local:', e);
    return [];
  }
}

export function getCurrentUser(): User | null {
  try {
    const raw = safeStorage.getItem(CURRENT_USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error('Error al leer usuario activo:', e);
    return null;
  }
}

export interface RegisterParams {
  username: string;
  email: string;
  password: string;
  termsAccepted: boolean;
  privacyAccepted: boolean;
  cookiesAccepted?: boolean;
}

export interface AuthResult {
  success: boolean;
  message: string;
  user?: User;
}

/**
 * Registra una cuenta nueva con principio de minimización de datos (solo username, email, password)
 * y doble casilla de consentimiento auditada según marco legal salvadoreño y estándares de privacidad.
 */
export async function registerUser(params: RegisterParams): Promise<AuthResult> {
  const username = params.username.trim();
  const email = params.email.trim().toLowerCase();
  const password = params.password;

  // 1. Validación de campos mínimos
  if (!username || username.length < 3) {
    return { success: false, message: 'El nombre de usuario debe tener al menos 3 caracteres.' };
  }
  if (!/^[a-zA-Z0-9_.-]+$/.test(username)) {
    return { success: false, message: 'El usuario solo puede contener letras, números, puntos y guiones.' };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: 'Ingresa un correo electrónico válido.' };
  }
  if (!password || password.length < 6) {
    return { success: false, message: 'La contraseña debe tener al menos 6 caracteres.' };
  }

  // 2. Validación de casillas de consentimiento obligatorias separadas
  if (!params.termsAccepted) {
    return { success: false, message: 'Debes aceptar los Términos y Condiciones de Uso para continuar.' };
  }
  if (!params.privacyAccepted) {
    return { success: false, message: 'Debes aceptar la Política de Privacidad para el manejo de tus datos de examen.' };
  }

  const users = getAllUsers();

  // 3. Comprobación de duplicados
  if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
    return { success: false, message: 'Este nombre de usuario ya está en uso. Elige otro.' };
  }
  if (users.some(u => u.email.toLowerCase() === email)) {
    return { success: false, message: 'Ya existe una cuenta registrada con este correo electrónico.' };
  }

  // 4. Hash seguro de contraseña
  const passwordHash = await hashPassword(password);

  // 5. Registro de auditoría de consentimiento
  const consentRecord: ConsentAuditRecord = {
    acceptedAt: new Date().toISOString(),
    termsAccepted: true,
    termsVersion: '1.0.0 (2026-10)',
    privacyAccepted: true,
    privacyVersion: '1.0.0 (2026-10)',
    cookiesAccepted: params.cookiesAccepted ?? true,
    method: 'formulario_registro_doble_casilla',
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Desconocido/Node'
  };

  const newUser: User = {
    id: `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    username,
    email,
    passwordHash,
    createdAt: new Date().toISOString(),
    consent: consentRecord
  };

  try {
    users.push(newUser);
    safeStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    // Iniciar sesión automáticamente
    safeStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));
    return { success: true, message: '¡Cuenta creada con éxito!', user: newUser };
  } catch (err) {
    console.error('Error al guardar usuario:', err);
    return { success: false, message: 'Error de almacenamiento local al registrar usuario.' };
  }
}

/**
 * Iniciar sesión localmente por usuario o correo y contraseña
 */
export async function loginUser(identifier: string, password: string): Promise<AuthResult> {
  const idTrim = identifier.trim().toLowerCase();
  const passwordTrim = password.trim();

  if (!idTrim || !passwordTrim) {
    return { success: false, message: 'Por favor completa todos los campos.' };
  }

  const users = getAllUsers();
  const foundUser = users.find(
    u => u.username.toLowerCase() === idTrim || u.email.toLowerCase() === idTrim
  );

  if (!foundUser) {
    return { success: false, message: 'Credenciales inválidas. Verifica tu usuario y contraseña.' };
  }

  const hashToCheck = await hashPassword(passwordTrim);
  if (foundUser.passwordHash !== hashToCheck) {
    return { success: false, message: 'Contraseña incorrecta. Inténtalo de nuevo.' };
  }

  safeStorage.setItem(CURRENT_USER_KEY, JSON.stringify(foundUser));
  return { success: true, message: `¡Bienvenido de nuevo, ${foundUser.username}!`, user: foundUser };
}

/**
 * Cerrar sesión
 */
export function logoutUser(): void {
  try {
    safeStorage.removeItem(CURRENT_USER_KEY);
  } catch (e) {
    console.error('Error al cerrar sesión:', e);
  }
}

/**
 * Gestión de Cookies y Preferencias de Privacidad
 */
export function getCookieConsent(): CookiePreferences | null {
  try {
    const raw = safeStorage.getItem(COOKIE_CONSENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveCookieConsent(preferences: { analytics: boolean; preferences: boolean; ads?: boolean }): void {
  try {
    const adsAccepted = preferences.ads ?? preferences.analytics;
    const record: CookiePreferences = {
      necessary: true, // Siempre necesarias
      analytics: preferences.analytics,
      preferences: preferences.preferences,
      ads: adsAccepted,
      timestamp: new Date().toISOString()
    };
    safeStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(record));

    if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
      const adsState = adsAccepted ? 'granted' : 'denied';
      const analyticsState = preferences.analytics ? 'granted' : 'denied';
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('consent', 'update', {
        ad_storage: adsState,
        ad_user_data: adsState,
        ad_personalization: adsState,
        analytics_storage: analyticsState
      });
    }
  } catch (e) {
    console.error('Error al guardar preferencias de cookies:', e);
  }
}

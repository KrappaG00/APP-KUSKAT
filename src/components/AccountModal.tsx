import React, { useState, useEffect } from 'react';
import {
  X,
  User as UserIcon,
  LogIn,
  UserPlus,
  LogOut,
  Award,
  Calendar,
  CheckCircle2,
  XCircle,
  FileText,
  ShieldCheck,
  Download,
  AlertCircle,
  Clock,
  Sparkles,
  Printer
} from 'lucide-react';
import { User, ExamRecord } from '../types/auth';
import {
  getCurrentUser,
  loginUser,
  registerUser,
  logoutUser
} from '../services/authService';
import { getUserExams } from '../services/statsService';
import { exportQuizResultToPdf } from '../services/pdfService';
import { LegalTab } from './LegalModal';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLegalModal: (tab: LegalTab) => void;
  onUserChanged?: (user: User | null) => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  onOpenLegalModal,
  onUserChanged
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'profile' | 'exams'>('login');

  // Form states - Login
  const [loginIdentifier, setLoginIdentifier] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Form states - Register (Data minimization: only username, email, password)
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regPasswordConfirm, setRegPasswordConfirm] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [regError, setRegError] = useState('');
  const [regSuccess, setRegSuccess] = useState('');
  const [regLoading, setRegLoading] = useState(false);

  // Exam records for current user
  const [userExams, setUserExams] = useState<ExamRecord[]>([]);
  const [selectedExamDetail, setSelectedExamDetail] = useState<ExamRecord | null>(null);

  useEffect(() => {
    if (isOpen) {
      const user = getCurrentUser();
      setCurrentUser(user);
      if (user) {
        setActiveTab('exams');
        const exams = getUserExams(user.id);
        setUserExams(exams);
      } else {
        setActiveTab('login');
      }
    }
  }, [isOpen]);

  const refreshUserExams = (userId: string) => {
    const exams = getUserExams(userId);
    setUserExams(exams);
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setLoginLoading(true);

    try {
      const res = await loginUser(loginIdentifier, loginPassword);
      if (!res.success || !res.user) {
        setLoginError(res.message);
      } else {
        setCurrentUser(res.user);
        refreshUserExams(res.user.id);
        setActiveTab('exams');
        if (onUserChanged) onUserChanged(res.user);
      }
    } catch {
      setLoginError('Error de red al intentar iniciar sesión.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegError('');
    setRegSuccess('');

    if (regPassword !== regPasswordConfirm) {
      setRegError('Las contraseñas no coinciden. Por favor verifícalas.');
      return;
    }
    if (!termsAccepted) {
      setRegError('Debes aceptar los Términos y Condiciones de Uso marcando la casilla correspondiente.');
      return;
    }
    if (!privacyAccepted) {
      setRegError('Debes aceptar la Política de Privacidad marcando la casilla correspondiente.');
      return;
    }

    setRegLoading(true);
    try {
      const res = await registerUser({
        username: regUsername,
        email: regEmail,
        password: regPassword,
        termsAccepted,
        privacyAccepted
      });

      if (!res.success || !res.user) {
        setRegError(res.message);
      } else {
        setRegSuccess('¡Cuenta creada con éxito! Bienvenido a KUSKAT.');
        setCurrentUser(res.user);
        refreshUserExams(res.user.id);
        setActiveTab('exams');
        if (onUserChanged) onUserChanged(res.user);
      }
    } catch {
      setRegError('Error inesperado al crear la cuenta.');
    } finally {
      setRegLoading(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    setUserExams([]);
    setActiveTab('login');
    if (onUserChanged) onUserChanged(null);
  };

  const handleExportSinglePdf = (exam: ExamRecord) => {
    exportQuizResultToPdf({
      studentName: exam.userDisplayName,
      institution: exam.institution,
      quizTitle: exam.quizTitle,
      dateString: new Date(exam.timestamp).toLocaleDateString('es-SV', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      totalQuestions: exam.totalQuestions,
      correctAnswers: exam.correctAnswers,
      incorrectAnswers: exam.incorrectAnswers,
      unanswered: exam.unanswered,
      scorePercentage: exam.percentage,
      performanceLevel: exam.grade,
      breakdown: exam.breakdown || [
        {
          name: exam.quizTitle,
          correct: exam.correctAnswers,
          total: exam.totalQuestions,
          pct: exam.percentage
        }
      ]
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="account-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/95">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <UserIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 id="account-modal-title" className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
                {currentUser ? `Cuenta: ${currentUser.username}` : 'Centro de Cuentas KUSKAT'}
              </h2>
              <p className="text-xs text-slate-400">
                {currentUser
                  ? 'Gestiona tu perfil, tus registros de exámenes y tu progreso académico'
                  : 'Inicia sesión nativa o crea tu cuenta sin intermediarios externos'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar ventana de cuenta"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-5 py-2.5 border-b border-slate-800 bg-slate-950/60 text-xs font-semibold">
          {currentUser ? (
            <>
              <button
                onClick={() => setActiveTab('exams')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'exams'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <FileText className="w-4 h-4" />
                EXÁMENES REALIZADOS ({userExams.length})
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                  activeTab === 'profile'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <UserIcon className="w-4 h-4" />
                Mi Perfil y Consentimiento Legal
              </button>
              <div className="ml-auto">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-rose-400 hover:bg-rose-950/40 border border-rose-900/40 transition-colors text-xs"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Cerrar Sesión
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setActiveTab('login');
                  setLoginError('');
                }}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg transition-all ${
                  activeTab === 'login'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <LogIn className="w-4 h-4" />
                Iniciar Sesión
              </button>
              <button
                onClick={() => {
                  setActiveTab('register');
                  setRegError('');
                }}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg transition-all ${
                  activeTab === 'register'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <UserPlus className="w-4 h-4" />
                Crear Cuenta Nativa
              </button>
            </>
          )}
        </div>

        {/* Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 text-sm">
          {/* TAB: LOGIN */}
          {!currentUser && activeTab === 'login' && (
            <div className="max-w-md mx-auto py-2 space-y-5 animate-fade-in">
              <div className="text-center space-y-1">
                <h3 className="text-base font-bold text-white">Ingresa a tu cuenta de KUSKAT</h3>
                <p className="text-xs text-slate-400">
                  Accede a tus estadísticas, historial de simuladores y clasificación nacional.
                </p>
              </div>

              {loginError && (
                <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-800/60 text-rose-300 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{loginError}</span>
                </div>
              )}

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Usuario o Correo Electrónico
                  </label>
                  <input
                    type="text"
                    required
                    value={loginIdentifier}
                    onChange={e => setLoginIdentifier(e.target.value)}
                    placeholder="ej. juan_ues o juan@correo.com"
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={e => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <LogIn className="w-4 h-4" />
                  {loginLoading ? 'Iniciando sesión...' : 'Entrar a KUSKAT'}
                </button>
              </form>

              <div className="pt-2 text-center text-xs text-slate-400">
                ¿Aún no tienes una cuenta?{' '}
                <button
                  onClick={() => setActiveTab('register')}
                  className="text-blue-400 hover:underline font-semibold"
                >
                  Crear cuenta gratis
                </button>
              </div>
            </div>
          )}

          {/* TAB: REGISTER (Dual checkboxes + minimization) */}
          {!currentUser && activeTab === 'register' && (
            <div className="max-w-lg mx-auto py-2 space-y-4 animate-fade-in">
              <div className="text-center space-y-1">
                <h3 className="text-base font-bold text-white">Registro de Cuenta de Estudiante</h3>
                <p className="text-xs text-slate-400">
                  Sin intermediarios externos. Principio de minimización: solo tus datos esenciales.
                </p>
              </div>

              {regError && (
                <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-800/60 text-rose-300 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{regError}</span>
                </div>
              )}

              {regSuccess && (
                <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-800/60 text-emerald-300 text-xs flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{regSuccess}</span>
                </div>
              )}

              <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nombre de Usuario (Público para el Top)
                  </label>
                  <input
                    type="text"
                    required
                    minLength={3}
                    value={regUsername}
                    onChange={e => setRegUsername(e.target.value)}
                    placeholder="ej. estudiante_kuskat"
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Mínimo 3 caracteres alfanuméricos.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Correo Electrónico (Para recuperación e inicio de sesión)
                  </label>
                  <input
                    type="email"
                    required
                    value={regEmail}
                    onChange={e => setRegEmail(e.target.value)}
                    placeholder="estudiante@correo.com"
                    className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={regPassword}
                      onChange={e => setRegPassword(e.target.value)}
                      placeholder="Mínimo 6 caracteres"
                      className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Confirmar Contraseña
                    </label>
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={regPasswordConfirm}
                      onChange={e => setRegPasswordConfirm(e.target.value)}
                      placeholder="Repite la contraseña"
                      className="w-full px-3.5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* REQUISITO: Dos casillas separadas de consentimiento obligatorio */}
                <div className="pt-2 space-y-2.5 border-t border-slate-800">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Consentimiento Legal y Auditoría (Casillas Separadas Obligatorias)
                  </p>

                  <label className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/60 cursor-pointer hover:bg-slate-800/70 transition-colors">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={e => setTermsAccepted(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-blue-600 rounded border-slate-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="text-xs text-slate-300 leading-snug">
                      He leído y acepto los{' '}
                      <button
                        type="button"
                        onClick={e => {
                          e.preventDefault();
                          onOpenLegalModal('terms');
                        }}
                        className="text-blue-400 underline font-medium hover:text-blue-300"
                      >
                        Términos y Condiciones de Uso
                      </button>{' '}
                      de KUSKAT y las reglas del simulador (+1 acierto, -2 error, mín 0).
                    </span>
                  </label>

                  <label className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/60 cursor-pointer hover:bg-slate-800/70 transition-colors">
                    <input
                      type="checkbox"
                      checked={privacyAccepted}
                      onChange={e => setPrivacyAccepted(e.target.checked)}
                      className="mt-0.5 w-4 h-4 text-blue-600 rounded border-slate-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="text-xs text-slate-300 leading-snug">
                      Acepto la{' '}
                      <button
                        type="button"
                        onClick={e => {
                          e.preventDefault();
                          onOpenLegalModal('privacy');
                        }}
                        className="text-blue-400 underline font-medium hover:text-blue-300"
                      >
                        Política de Privacidad
                      </button>{' '}
                      y autorizo el almacenamiento de mis exámenes exclusivamente en formato texto plano/JSON sin imágenes en la nube.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={regLoading}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <UserPlus className="w-4 h-4" />
                  {regLoading ? 'Registrando...' : 'Completar Registro'}
                </button>
              </form>

              <div className="pt-1 text-center text-xs text-slate-400">
                ¿Ya tienes cuenta?{' '}
                <button
                  onClick={() => setActiveTab('login')}
                  className="text-blue-400 hover:underline font-semibold"
                >
                  Inicia sesión aquí
                </button>
              </div>
            </div>
          )}

          {/* TAB: EXÁMENES REALIZADOS */}
          {currentUser && activeTab === 'exams' && (
            <div className="space-y-4 animate-fade-in">
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <div>
                  <h3 className="font-bold text-white text-base flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-400" />
                    Historial de Exámenes Realizados
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Almacenamiento exclusivo en formato texto • Registros evaluativos de {currentUser.username}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <div className="px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800/60 text-blue-300">
                    Total exámenes: <strong className="text-white">{userExams.length}</strong>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-300">
                    Puntos acumulados:{' '}
                    <strong className="text-white">
                      {userExams.reduce((acc, curr) => acc + curr.scorePoints, 0)} pts
                    </strong>
                  </div>
                </div>
              </div>

              {userExams.length === 0 ? (
                <div className="py-12 text-center space-y-3 bg-slate-900/50 rounded-2xl border border-slate-800">
                  <div className="w-12 h-12 mx-auto rounded-full bg-slate-800 flex items-center justify-center text-slate-500">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-slate-300">Aún no has completado ningún examen</h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Ve al apartado "Simulador", selecciona tu institución y completa una prueba para registrar tus puntos (+1 por acierto, -2 por error) y figurar en el Top 10.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {userExams.map(exam => (
                    <div
                      key={exam.id}
                      className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 hover:border-blue-500/50 transition-all space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600/20 text-blue-400 border border-blue-500/30">
                            {exam.institution}
                          </span>
                          <h4 className="font-semibold text-white text-sm">{exam.quizTitle}</h4>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>
                            {new Date(exam.timestamp).toLocaleDateString('es-SV', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </span>
                        </div>
                      </div>

                      {/* Stat summary pills */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Puntaje KUSKAT</span>
                          <span className="font-bold text-amber-400 text-sm">
                            {exam.scorePoints} pts
                          </span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Aciertos (+1 c/u)</span>
                          <span className="font-bold text-emerald-400 text-sm">
                            {exam.correctAnswers} / {exam.totalQuestions}
                          </span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Errores (-2 c/u)</span>
                          <span className="font-bold text-rose-400 text-sm">
                            {exam.incorrectAnswers}
                          </span>
                        </div>
                        <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                          <span className="text-slate-400 block text-[11px]">Rendimiento</span>
                          <span className="font-bold text-blue-400 text-sm">
                            {exam.percentage}% ({exam.grade})
                          </span>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                          style={{ width: `${exam.percentage}%` }}
                        />
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-end gap-2 pt-1">
                        <button
                          onClick={() => handleExportSinglePdf(exam)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-medium transition-colors"
                        >
                          <Printer className="w-3.5 h-3.5" />
                          Imprimir / Exportar PDF
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB: PROFILE & CONSENT AUDIT */}
          {currentUser && activeTab === 'profile' && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {currentUser.username.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{currentUser.username}</h3>
                    <p className="text-xs text-slate-400">{currentUser.email}</p>
                    <p className="text-[11px] text-slate-500">
                      Miembro desde:{' '}
                      {new Date(currentUser.createdAt).toLocaleDateString('es-SV', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Registro de Auditoría de Consentimiento Legal */}
              <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/80 space-y-3">
                <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Registro de Auditoría de Consentimiento (Requisito Legal)
                </h4>
                <p className="text-xs text-slate-400">
                  Registro inmutable que certifica cuándo y bajo qué modalidad aceptaste las condiciones de uso y política de privacidad de KUSKAT:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Fecha y Hora ISO</span>
                    <span className="font-mono text-emerald-400 text-xs">
                      {currentUser.consent?.acceptedAt || currentUser.createdAt}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Método de Registro</span>
                    <span className="text-slate-200 font-medium">
                      {currentUser.consent?.method || 'Doble casilla separada verificada'}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Términos Aceptados</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Versión {currentUser.consent?.termsVersion || '1.0.0'}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">Privacidad Aceptada</span>
                    <span className="text-emerald-400 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Versión {currentUser.consent?.privacyVersion || '1.0.0'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Botón para ver políticas */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/30 border border-slate-800 text-xs text-slate-400">
                <span>¿Deseas revisar nuevamente los documentos legales?</span>
                <button
                  onClick={() => onOpenLegalModal('terms')}
                  className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors font-medium"
                >
                  Consultar Marco Legal
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-xs text-slate-400">
          <span>KUSKAT 2026 • Privacidad y Cuentas Nativas</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

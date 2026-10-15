import React, { useState } from 'react';
import {
  X,
  FileText,
  Shield,
  Cookie,
  CreditCard,
  Image,
  Scale,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export type LegalTab = 'terms' | 'privacy' | 'cookies' | 'refund' | 'copyright' | 'laws';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTab;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'terms'
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-900/90 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 id="legal-modal-title" className="text-lg font-bold text-white tracking-wide">
                Marco Legal y Políticas de KUSKAT
              </h2>
              <p className="text-xs text-slate-400">
                Cumplimiento normativo de la República de El Salvador • Versión 1.0 (Octubre 2026)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal legal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 px-4 py-2 border-b border-slate-800 bg-slate-950/50 overflow-x-auto text-xs font-medium no-scrollbar">
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'terms'
                ? 'bg-blue-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            1. Términos y Condiciones
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'privacy'
                ? 'bg-blue-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            2. Política de Privacidad
          </button>
          <button
            onClick={() => setActiveTab('cookies')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'cookies'
                ? 'bg-blue-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Cookie className="w-3.5 h-3.5" />
            3. Política de Cookies
          </button>
          <button
            onClick={() => setActiveTab('refund')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'refund'
                ? 'bg-blue-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            4. Política de Reembolso
          </button>
          <button
            onClick={() => setActiveTab('copyright')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'copyright'
                ? 'bg-blue-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Image className="w-3.5 h-3.5" />
            5. Derechos de Imágenes
          </button>
          <button
            onClick={() => setActiveTab('laws')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'laws'
                ? 'bg-blue-600 text-white shadow-sm font-semibold'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            6. Leyes Locales de El Salvador
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4 text-sm leading-relaxed text-slate-300">
          {activeTab === 'terms' && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 text-blue-200">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-400" />
                  1. Términos y Condiciones de Uso de la Plataforma KUSKAT
                </h3>
                <p className="text-xs text-blue-300/80 mt-1">
                  Última actualización: 15 de Octubre de 2026. Vigencia: Año lectivo 2026-2027.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-white">1.1. Objeto y Naturaleza de KUSKAT</h4>
                <p>
                  KUSKAT es una plataforma tecnológica educativa salvadoreña diseñada para la preparación académica, simulación diagnóstica y entrenamiento de estudiantes y docentes aspirantes a convocatorias oficiales en El Salvador: Universidad de El Salvador (UES), Escalafón Docente (MINED), Prueba AVANZO, Academia de Seguridad Pública (ASD), Escuela Nacional de Agricultura (ENA) y Academia Nacional de Seguridad Pública (ANSP).
                </p>

                <h4 className="font-semibold text-white">1.2. Creación y Uso de Cuentas Nativas</h4>
                <p>
                  Los usuarios pueden registrarse directamente en la plataforma sin requerir intermediarios externos (Google, Facebook o redes sociales). El usuario es el único responsable de la confidencialidad de sus credenciales. KUSKAT aplica el principio de <strong>minimización de datos</strong>, solicitando exclusivamente usuario, correo y contraseña cifrada con SHA-256.
                </p>

                <h4 className="font-semibold text-white">1.3. Reglas de Puntuación y Tabla de Estadísticas</h4>
                <p>
                  En la modalidad de simulador evaluativo oficial, el puntaje se calcula estrictamente bajo la regla oficial:
                </p>
                <div className="p-3 bg-slate-800/70 rounded-lg border border-slate-700 font-mono text-xs text-emerald-400">
                  Puntaje = Math.max(0, (Aciertos × 1) - (Errores × 2))
                </div>
                <p>
                  El tope mínimo es de 0 puntos (no se registran saldos negativos). La tabla estadística clasifica el rendimiento en periodos: diario, mensual, trimestral, semestral y anual. El ranking anual inicia el 1 de enero y se reinicia automáticamente cada 31 de diciembre.
                </p>

                <h4 className="font-semibold text-white">1.4. Prohibición de Conductas Ilícitas</h4>
                <p>
                  Queda estrictamente prohibido intentar vulnerar la plataforma mediante inyección de código, scraping no autorizado o adulteración de puntajes. KUSKAT se reserva el derecho de eliminar cuentas que infrinjan estas directrices de honestidad académica.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-200">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  2. Política de Privacidad y Protección de Datos Personales
                </h3>
                <p className="text-xs text-emerald-300/80 mt-1">
                  Conformidad con la Constitución de El Salvador y Principio de Minimización de Datos.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-white">2.1. Minimización Estricta de Datos Recopilados</h4>
                <p>
                  KUSKAT solo solicita y almacena los datos indispensables para el funcionamiento del servicio formativo:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                  <li><strong>Nombre de usuario:</strong> Alias público para clasificaciones y diplomas.</li>
                  <li><strong>Correo electrónico:</strong> Único canal de autenticación y soporte.</li>
                  <li><strong>Contraseña criptográfica:</strong> Almacenada exclusivamente mediante hash unidireccional SHA-256 generado localmente en el navegador. KUSKAT nunca almacena ni conoce contraseñas en texto claro.</li>
                </ul>

                <h4 className="font-semibold text-white">2.2. Almacenamiento Exclusivo en Formato de Texto</h4>
                <p>
                  De conformidad con las instrucciones de arquitectura, <strong>únicamente se guardan datos en formato de texto plano/JSON</strong> (registros de exámenes: respuestas correctas, incorrectas, puntajes calculados, desglose temático y marcas de tiempo).
                </p>
                <div className="p-3 bg-amber-950/30 border border-amber-800/40 rounded-lg text-amber-200 text-xs">
                  <strong>Garantía de Privacidad Multimedia:</strong> KUSKAT NO almacena imágenes, fotos, archivos de audio ni datos biométricos de los estudiantes en la nube ni en servidores del proyecto. La generación y descarga de reportes PDF se realiza 100% en el dispositivo del usuario sin persistir archivos temporales en la nube.
                </div>

                <h4 className="font-semibold text-white">2.3. Registro de Auditoría de Consentimiento</h4>
                <p>
                  Al momento de registrarse, el sistema guarda de forma inmutable un registro de auditoría con la fecha, hora exacta (ISO), versión de las políticas y método de confirmación con doble casilla explícita.
                </p>

                <h4 className="font-semibold text-white">2.4. Derechos del Titular (ARCO)</h4>
                <p>
                  Cualquier usuario puede ejercer su derecho de acceso, rectificación, cancelación y oposición (eliminación completa de su cuenta y exámenes) en cualquier momento desde el apartado "CUENTA".
                </p>
              </div>
            </div>
          )}

          {activeTab === 'cookies' && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-800/40 text-purple-200">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-purple-400" />
                  3. Política de Cookies y Almacenamiento Web
                </h3>
                <p className="text-xs text-purple-300/80 mt-1">
                  Información clara sobre almacenamiento local y cookies en KUSKAT.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-white">3.1. ¿Necesito consentimiento para usar cookies?</h4>
                <p>
                  <strong>Sí.</strong> Siguiendo las mejores prácticas internacionales de privacidad y el régimen salvadoreño de comercio electrónico y protección al consumidor (Defensoría del Consumidor de El Salvador), el usuario debe ser informado previamente y tener el control sobre qué datos técnicos se guardan en su navegador.
                </p>

                <h4 className="font-semibold text-white">3.2. Clasificación de Almacenamiento Utilizado en KUSKAT</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <p className="font-bold text-emerald-400">Cookies Técnicas Esenciales (Obligatorias)</p>
                    <p className="mt-1 text-slate-300">
                      Mantienen la sesión activa del estudiante, guardan las respuestas temporales del examen en curso para evitar pérdidas ante desconexión, y recuerdan el estado de colapso de las categorías.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                    <p className="font-bold text-blue-400">Cookies de Preferencias y Estadísticas (Opcionales)</p>
                    <p className="mt-1 text-slate-300">
                      Permiten recordar el tema visual (oscuro/claro) y analizar el rendimiento general del simulador para optimizar tiempos de carga. No se comparten con anunciantes ni redes de terceros.
                    </p>
                  </div>
                </div>

                <h4 className="font-semibold text-white">3.3. Cómo revocar o configurar el consentimiento</h4>
                <p>
                  Puedes modificar tus preferencias de cookies en cualquier instante desde el banner inferior de la página o limpiando el almacenamiento local de tu navegador en las opciones de privacidad.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'refund' && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/40 text-amber-200">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-amber-400" />
                  4. Política de Reembolso y Gratuidad Educativa
                </h3>
                <p className="text-xs text-amber-300/80 mt-1">
                  Transparencia económica, condiciones y garantías.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-white">4.1. Acceso Gratuito y Libre a la Plataforma</h4>
                <p>
                  La plataforma KUSKAT es un proyecto de impacto educativo 100% de libre acceso para la comunidad salvadoreña. No se cobran cuotas mensuales, inscripciones ni comisiones por rendir exámenes ni por consultar bancos de preguntas.
                </p>

                <h4 className="font-semibold text-white">4.2. Condiciones ante Futuros Servicios Premium o Donaciones</h4>
                <p>
                  En caso de implementarse en el futuro certificaciones especiales impresas o donaciones voluntarias de sostenimiento:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                  <li><strong>Derecho de desistimiento:</strong> El usuario tiene un plazo legal de hasta 8 días hábiles para solicitar el reembolso íntegro si el servicio no cumple con lo ofrecido, en apego al Art. 13-D de la Ley de Protección al Consumidor de El Salvador.</li>
                  <li><strong>Fallas técnicas comprobadas:</strong> Si por problemas de servidor un usuario no pudiera acceder a un contenido adquirido, se procederá al reembolso dentro de las 72 horas posteriores al reporte.</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'copyright' && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-cyan-200">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Image className="w-5 h-5 text-cyan-400" />
                  5. Verificación de Derechos de Autor, Imágenes y Marcas
                </h3>
                <p className="text-xs text-cyan-300/80 mt-1">
                  Auditoría completa de propiedad intelectual de los recursos visuales y nombres institucionales.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-white">5.1. Logotipo Oficial KUSKAT</h4>
                <p>
                  El logotipo original de KUSKAT (archivo <code className="text-cyan-400">logo-kuskat.png</code>) es propiedad exclusiva de su creador y desarrollador <strong>Yeferson E. Perez</strong>. Su uso dentro de la plataforma está plenamente autorizado y resguardado.
                </p>

                <h4 className="font-semibold text-white">5.2. Fotografía del Desarrollador</h4>
                <p>
                  La imagen utilizada en el apartado de créditos y perfil del desarrollador (<code className="text-cyan-400">foto_desarrollador.jpg</code>) corresponde al autor <strong>Yeferson E. Perez</strong>, quien ostenta los derechos morales y patrimoniales plenos para su divulgación con fines educativos.
                </p>

                <h4 className="font-semibold text-white">5.3. Iconografía y Renderizadores Matemáticos</h4>
                <p>
                  Todos los íconos de la interfaz provienen de la biblioteca <strong className="text-white">Lucide React</strong>, bajo licencia de código abierto ISC/MIT. Las fórmulas matemáticas son renderizadas con <strong className="text-white">KaTeX</strong>, software libre bajo licencia MIT.
                </p>

                <h4 className="font-semibold text-white">5.4. Uso Nominativo de Instituciones Salvadoreñas (Fair Use Educativo)</h4>
                <p>
                  Las siglas y nombres de instituciones públicas salvadoreñas (UES, MINED, AVANZO, ASD, ENA, ANSP) se mencionan con carácter estrictamente nominativo e informativo para orientar a los postulantes sobre el temario de estudio correspondiente. KUSKAT es una iniciativa educativa independiente y no ostenta afiliación, patrocinio ni representación gubernamental directa.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'laws' && (
            <div className="space-y-4 animate-fade-in">
              <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/40 text-rose-200">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Scale className="w-5 h-5 text-rose-400" />
                  6. Cumplimiento de Leyes Locales de la República de El Salvador
                </h3>
                <p className="text-xs text-rose-300/80 mt-1">
                  Alineación con la legislación salvadoreña vigente en materia educativa y digital.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                  <p className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Constitución de la República de El Salvador (Art. 53 y 54)
                  </p>
                  <p className="text-xs text-slate-300">
                    Establece el derecho a la educación, la cultura y la libre difusión del saber científico. KUSKAT promueve el acceso universal a herramientas de preparación académica para superar las brechas de ingreso universitario y profesional en el país.
                  </p>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                  <p className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Ley de Comercio Electrónico (D.L. N° 450)
                  </p>
                  <p className="text-xs text-slate-300">
                    Cumple con la obligación de informar claramente la identidad del proveedor, los términos del servicio digital, el consentimiento informado del usuario y los mecanismos de comunicación directa sin ambigüedades.
                  </p>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                  <p className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Ley Especial contra los Delitos Informáticos y Conexos (D.L. N° 260)
                  </p>
                  <p className="text-xs text-slate-300">
                    KUSKAT implementa controles técnicos para resguardar la integridad de los sistemas, protegiendo las credenciales mediante cifrado criptográfico y prohibiendo el acceso indebido o alteración fraudulenta de bancos de reactivos.
                  </p>
                </div>

                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 space-y-1">
                  <p className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Ley de la Carrera Docente y Ley Crecer Juntos
                  </p>
                  <p className="text-xs text-slate-300">
                    Los temarios orientados al Escalafón Docente y las pruebas AVANZO integran el estudio de los derechos de la niñez y adolescencia salvadoreña y las normativas curriculares oficiales aprobadas por el MINED.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Plataforma KUSKAT 2026 • San Salvador, El Salvador</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors shadow-sm"
          >
            Entendido y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

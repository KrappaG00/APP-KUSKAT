export interface PdfExportParams {
  studentName: string;
  institution: string;
  quizTitle: string;
  dateString?: string;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
  scorePercentage: number;
  performanceLevel: string;
  scorePoints?: number;
  breakdown?: { name: string; correct: number; total: number; pct: number }[];
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Genera e imprime el reporte PDF en memoria 100% en el navegador del cliente.
 * Garantiza que NO se guardan documentos, temporales ni archivos pesados en la nube del proyecto.
 */
export function exportQuizResultToPdf(params: PdfExportParams): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const printIframe = document.createElement('iframe');
    printIframe.setAttribute('title', 'Reporte de Evaluación KUSKAT');
    printIframe.style.position = 'fixed';
    printIframe.style.right = '0';
    printIframe.style.bottom = '0';
    printIframe.style.width = '0';
    printIframe.style.height = '0';
    printIframe.style.border = '0';
    printIframe.style.opacity = '0';
    printIframe.style.pointerEvents = 'none';
    document.body.appendChild(printIframe);

    const iframeDoc = printIframe.contentWindow?.document;
    if (!iframeDoc) {
      return false;
    }

    const now = new Date();
    const formattedDate = params.dateString || now.toLocaleDateString('es-SV', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const formattedTime = now.toLocaleTimeString('es-SV', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const isApproved = params.scorePercentage >= 70;
    const pointsCalc = params.scorePoints ?? Math.max(0, (params.correctAnswers * 1) - (params.incorrectAnswers * 2));

    const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>KUSKAT - Reporte Oficial de Resultados - ${escapeHtml(params.quizTitle)}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm 15mm;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      margin: 0;
      padding: 0;
      font-size: 9.5pt;
      line-height: 1.4;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #0f172a;
      padding-bottom: 12px;
      margin-bottom: 16px;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .header-logo {
      width: 44px;
      height: 44px;
      object-fit: contain;
    }
    .header-titles h1 {
      font-size: 16pt;
      font-weight: 900;
      margin: 0;
      letter-spacing: -0.5px;
      color: #0f172a;
    }
    .header-titles p {
      margin: 2px 0 0;
      font-size: 8pt;
      color: #64748b;
      font-weight: 500;
    }
    .header-right {
      text-align: right;
      font-size: 8pt;
      color: #475569;
    }
    .badge {
      display: inline-block;
      padding: 3px 8px;
      border-radius: 9999px;
      font-size: 7.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .badge-approved { background: #d1fae5; color: #065f46; border: 1px solid #a7f3d0; }
    .badge-failed { background: #fee2e2; color: #991b1b; border: 1px solid #fecaca; }
    .exam-title {
      font-size: 13pt;
      font-weight: 800;
      color: #0f172a;
      margin: 0 0 10px;
    }
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 8px;
      margin-bottom: 14px;
    }
    .metric-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 8px 6px;
      text-align: center;
    }
    .metric-label {
      font-size: 7pt;
      text-transform: uppercase;
      color: #64748b;
      font-weight: 700;
      letter-spacing: 0.5px;
      display: block;
    }
    .metric-value {
      font-size: 13pt;
      font-weight: 800;
      margin-top: 2px;
      display: block;
    }
    .text-emerald { color: #059669; }
    .text-rose { color: #dc2626; }
    .text-amber { color: #d97706; }
    .text-blue { color: #2563eb; }
    .breakdown-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 12px;
      font-size: 8.5pt;
    }
    .breakdown-table th, .breakdown-table td {
      border: 1px solid #e2e8f0;
      padding: 6px 10px;
      text-align: left;
    }
    .breakdown-table th {
      background: #f1f5f9;
      font-weight: 700;
      color: #334155;
    }
    .footer-note {
      margin-top: 24px;
      padding-top: 12px;
      border-top: 1px solid #e2e8f0;
      font-size: 7.5pt;
      color: #94a3b8;
      text-align: center;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="header-left">
      <img src="${window.location.origin}/kuskat_logo.png" alt="KUSKAT" class="header-logo" onerror="this.style.display='none'">
      <div class="header-titles">
        <h1>KUSKAT • BANCO MAESTRO</h1>
        <p>Plataforma de Simulación y Evaluación Diagnóstica • El Salvador</p>
      </div>
    </div>
    <div class="header-right">
      <strong>Institución:</strong> ${escapeHtml(params.institution)}<br>
      <strong>Estudiante:</strong> ${escapeHtml(params.studentName)}<br>
      <strong>Fecha:</strong> ${escapeHtml(formattedDate)}
    </div>
  </div>

  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
    <div>
      <h2 class="exam-title">${escapeHtml(params.quizTitle)}</h2>
      <p style="margin: 0; font-size: 8.5pt; color: #64748b;">
        Reporte Oficial emitido por la plataforma KUSKAT.
      </p>
    </div>
    <div>
      <span class="badge ${isApproved ? 'badge-approved' : 'badge-failed'}">
        ${isApproved ? 'APROBADO' : 'REPROBADO'} • ${escapeHtml(params.performanceLevel)}
      </span>
    </div>
  </div>

  <div class="metrics-grid">
    <div class="metric-box">
      <span class="metric-label">Puntos KUSKAT</span>
      <span class="metric-value text-amber">${pointsCalc} pts</span>
      <span style="font-size: 6.5pt; color: #64748b;">(+1 acierto, -2 error)</span>
    </div>
    <div class="metric-box">
      <span class="metric-label">Porcentaje</span>
      <span class="metric-value text-blue">${params.scorePercentage}%</span>
    </div>
    <div class="metric-box">
      <span class="metric-label">Aciertos (+1)</span>
      <span class="metric-value text-emerald">${params.correctAnswers} / ${params.totalQuestions}</span>
    </div>
    <div class="metric-box">
      <span class="metric-label">Errores (-2)</span>
      <span class="metric-value text-rose">${params.incorrectAnswers}</span>
    </div>
    <div class="metric-box">
      <span class="metric-label">Sin Contestar</span>
      <span class="metric-value" style="color: #64748b;">${params.unanswered}</span>
    </div>
  </div>

  ${params.breakdown && params.breakdown.length > 0 ? `
    <h3 style="font-size: 10pt; font-weight: 800; margin: 16px 0 6px; color: #1e293b;">
      Desglose de Desempeño por Asignatura / Unidad Temática
    </h3>
    <table class="breakdown-table">
      <thead>
        <tr>
          <th>Materia / Componente</th>
          <th style="text-align: center; width: 80px;">Aciertos</th>
          <th style="text-align: center; width: 80px;">Total</th>
          <th style="text-align: center; width: 100px;">Eficacia</th>
        </tr>
      </thead>
      <tbody>
        ${params.breakdown.map(b => `
          <tr>
            <td><strong>${escapeHtml(b.name)}</strong></td>
            <td style="text-align: center; color: #059669; font-weight: 700;">${b.correct}</td>
            <td style="text-align: center;">${b.total}</td>
            <td style="text-align: center; font-weight: 700; color: ${b.pct >= 70 ? '#059669' : '#dc2626'};">${b.pct}%</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  ` : ''}

  <div class="footer-note">
    Documento generado 100% en memoria en el dispositivo del estudiante. Por principios de privacidad y minimización de datos, KUSKAT no conserva copias de documentos ni imágenes en la nube del proyecto.<br>
    KUSKAT © 2026 • San Salvador, El Salvador • Creador: Yeferson E. Perez
  </div>
</body>
</html>`;

    iframeDoc.open();
    iframeDoc.write(html);
    iframeDoc.close();

    setTimeout(() => {
      printIframe.contentWindow?.focus();
      printIframe.contentWindow?.print();

      setTimeout(() => {
        if (printIframe.parentNode) {
          printIframe.parentNode.removeChild(printIframe);
        }
      }, 1500);
    }, 350);

    return true;
  } catch (err) {
    console.error('Error al exportar PDF:', err);
    return false;
  }
}

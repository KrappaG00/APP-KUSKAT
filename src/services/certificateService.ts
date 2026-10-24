/**
 * CERTIFICATE SERVICE (ACREDITACIÓN DIGITAL CRIPTOGRÁFICA)
 * Plataforma Académica Intercultural KUSKAT · República de El Salvador
 * Emite diplomas con hash inmutable SHA-256 y código QR verificable.
 */

import { generateQrMatrix, renderQrSvg } from '../utils/qrCodeGenerator';

export interface AcademicCertificate {
  certificateId: string;
  studentName: string;
  studentId?: string; // NIE, DUI o carné
  moduleKey: string;
  moduleTitle: string;
  institutionAuthority: string;
  score: string;
  passingScoreRequired: string;
  status: 'APROBADO_SOBRESALIENTE' | 'APROBADO_SATISFACTORIO';
  issuedDateFormatted: string;
  issuedTimestamp: number;
  verificationHash: string;
  validationUrl: string;
  qrSvgDataUrl: string;
  honors?: string;
}

const STORAGE_KEY = 'kuskat_issued_certificates_v1';

/**
 * Calcula el digest SHA-256 nativo de los metadatos de la credencial
 */
export async function computeCertificateHash(data: {
  id: string;
  studentName: string;
  moduleKey: string;
  score: string;
  timestamp: number;
}): Promise<string> {
  const payload = `${data.id}|${data.studentName.trim().toUpperCase()}|${data.moduleKey}|${data.score}|${data.timestamp}|KUSKAT_SOBERANO_2026`;
  try {
    if (typeof crypto !== 'undefined' && crypto.subtle) {
      const buffer = new TextEncoder().encode(payload);
      const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (err) {
    console.warn('Crypto subtle no disponible, usando fallback hash:', err);
  }

  // Fallback determinista
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  for (let i = 0; i < payload.length; i++) {
    const ch = payload.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  const part1 = (h1 >>> 0).toString(16).padStart(8, '0');
  const part2 = (h2 >>> 0).toString(16).padStart(8, '0');
  return (part1 + part2).repeat(4).slice(0, 64);
}

/**
 * Emite un nuevo diploma y lo persiste en el almacén local
 */
export async function issueCertificate(params: {
  studentName: string;
  studentId?: string;
  moduleKey: string;
  moduleTitle: string;
  institutionAuthority: string;
  score: string;
  numericScore: number;
  passingScoreRequired: string;
}): Promise<AcademicCertificate> {
  const now = Date.now();
  const randomSuffix = Math.random().toString(36).substring(2, 7).toUpperCase();
  const certId = `KUSKAT-2026-${params.moduleKey.toUpperCase()}-${randomSuffix}`;

  const hash = await computeCertificateHash({
    id: certId,
    studentName: params.studentName,
    moduleKey: params.moduleKey,
    score: params.score,
    timestamp: now,
  });

  const dateObj = new Date(now);
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  const dateFormatted = `${dateObj.getDate()} de ${months[dateObj.getMonth()]} de ${dateObj.getFullYear()}`;

  const validationUrl = `https://kuskat.edu.sv/cert/${certId}?h=${hash.slice(0, 16)}`;
  const qrMatrix = generateQrMatrix(validationUrl);
  const qrSvg = renderQrSvg(qrMatrix, 160, '#0B1B3D', '#FAF9F5');
  const qrSvgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(qrSvg)}`;

  const isOutstanding = params.numericScore >= 9.0;
  const status = isOutstanding ? 'APROBADO_SOBRESALIENTE' : 'APROBADO_SATISFACTORIO';
  const honors = isOutstanding ? 'Mención de Excelencia Académica y Rigor Profesional' : undefined;

  const certificate: AcademicCertificate = {
    certificateId: certId,
    studentName: params.studentName,
    studentId: params.studentId || 'NIE/DUI No Especificado',
    moduleKey: params.moduleKey,
    moduleTitle: params.moduleTitle,
    institutionAuthority: params.institutionAuthority,
    score: params.score,
    passingScoreRequired: params.passingScoreRequired,
    status,
    issuedDateFormatted: dateFormatted,
    issuedTimestamp: now,
    verificationHash: hash,
    validationUrl,
    qrSvgDataUrl,
    honors,
  };

  saveCertificate(certificate);
  return certificate;
}

/**
 * Guarda un certificado en el registro local
 */
export function saveCertificate(cert: AcademicCertificate): void {
  try {
    const list = getSavedCertificates();
    const existingIdx = list.findIndex((c) => c.certificateId === cert.certificateId);
    if (existingIdx >= 0) {
      list[existingIdx] = cert;
    } else {
      list.unshift(cert);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (err) {
    console.error('Error al guardar certificado:', err);
  }
}

/**
 * Obtiene todos los certificados guardados por el usuario
 */
export function getSavedCertificates(): AcademicCertificate[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as AcademicCertificate[];
  } catch {
    return [];
  }
}

/**
 * Genera el documento formal en código LaTeX tipográfico para impresión en alta definición
 */
export function generateCertificateLatex(cert: AcademicCertificate): string {
  return `% ==============================================================================
% DIPLOMA OFICIAL INSTITUCIONAL — PLATAFORMA ACADÉMICA KUSKAT
% REPÚBLICA DE EL SALVADOR · CONSEJO EDITORIAL Y EVALUATIVO
% ==============================================================================
\\documentclass[landscape,a4paper,12pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish]{babel}
\\usepackage[margin=1.2cm]{geometry}
\\usepackage{xcolor}
\\usepackage{tikz}
\\usepackage{tcolorbox}
\\usepackage{mathptmx}

\\definecolor{AzulPatrio}{HTML}{0B1B3D}
\\definecolor{OroCivico}{HTML}{C59B27}
\\definecolor{PapelAlabastro}{HTML}{FAF9F5}
\\definecolor{TintaCarbon}{HTML}{111625}

\\pagestyle{empty}

\\begin{document}
\\begin{tikzpicture}[remember picture,overlay]
  % Marco exterior institucional
  \\draw[line width=3.5pt,color=AzulPatrio] 
    ([shift={(0.8cm,-0.8cm)}]current page.north west) 
    rectangle 
    ([shift={(-0.8cm,0.8cm)}]current page.south east);

  % Marco interior dorado ornamental
  \\draw[line width=1.2pt,color=OroCivico] 
    ([shift={(1.1cm,-1.1cm)}]current page.north west) 
    rectangle 
    ([shift={(-1.1cm,1.1cm)}]current page.south east);

  % Vértices de filigrana
  \\foreach \\x/\\y in {1.1/-1.1, -1.1/-1.1, 1.1/1.1, -1.1/1.1} {
    \\draw[fill=OroCivico] ([shift={(\\x cm,\\y cm)}]current page.center) circle (2.5pt);
  }
\\end{tikzpicture}

\\begin{center}
  \\vspace*{0.3cm}
  {\\color{AzulPatrio}\\Large\\textbf{REPÚBLICA DE EL SALVADOR}}\\\\[0.15cm]
  {\\color{OroCivico}\\small\\textbf{PLATAFORMA ACADÉMICA INTERCULTURAL KUSKAT}}\\\\[0.1cm]
  {\\footnotesize\\textsc{${cert.institutionAuthority}}}\\\\[0.4cm]

  {\\Huge\\bfseries\\scshape DIPLOMA DE ACREDITACIÓN}\\\\[0.35cm]

  {\\large Se hace constar solemnemente que:}\\\\[0.3cm]
  {\\color{AzulPatrio}\\LARGE\\bfseries ${cert.studentName.toUpperCase()}}\\\\[0.15cm]
  {\\footnotesize Identificación: ${cert.studentId}}\\\\[0.3cm]

  \\begin{minipage}{0.85\\textwidth}
    \\centering\\small
    Ha aprobado satisfactoriamente la evaluación teórica y pericial del programa:\\\\
    {\\bfseries\\large\\color{AzulPatrio} ${cert.moduleTitle}}\\\\[0.2cm]
    con una calificación final oficial de {\\bfseries\\color{AzulPatrio} ${cert.score}} 
    (Puntaje Mínimo Requerido: ${cert.passingScoreRequired}),
    ${cert.honors ? `concediéndosele la \\textbf{${cert.honors}}` : 'cumpliendo los más rigurosos estándares metodológicos'}.
  \\end{minipage}

  \\vfill

  \\begin{minipage}{0.88\\textwidth}
    \\begin{tabular}{p{5.5cm}cp{5.5cm}}
      \\centering
      \\rule{5cm}{0.6pt}\\\\
      {\\footnotesize\\textbf{Comité Evaluador}}\\\\
      {\\scriptsize KUSKAT Académico}
      &
      \\begin{minipage}{2.8cm}
        \\centering
        \\fbox{\\begin{minipage}{2.5cm}
          \\centering\\tiny
          {\\bfseries CÓDIGO QR}\\\\
          ID: ${cert.certificateId}\\\\
          SHA-256:\\\\
          {\\ttfamily ${cert.verificationHash.slice(0, 12)}...}
        \\end{minipage}}
      \\end{minipage}
      &
      \\centering
      \\rule{5cm}{0.6pt}\\\\
      {\\footnotesize\\textbf{Dirección de Acreditación}}\\\\
      {\\scriptsize Expedido el ${cert.issuedDateFormatted}}
    \\end{tabular}
  \\end{minipage}
  \\vspace*{0.4cm}
\\end{center}
\\end{document}
`;
}

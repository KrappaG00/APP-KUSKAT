import { Institution } from './index';

export interface ConsentAuditRecord {
  acceptedAt: string; // Fecha y hora ISO del consentimiento
  termsAccepted: boolean;
  termsVersion: string;
  privacyAccepted: boolean;
  privacyVersion: string;
  cookiesAccepted: boolean;
  method: string; // ej. 'formulario_registro_doble_checkbox'
  userAgent: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string; // Hash seguro SHA-256 generado localmente
  createdAt: string;
  consent: ConsentAuditRecord;
  preferredLanguage?: string;
}

export interface ExamBreakdownItem {
  name: string;
  correct: number;
  total: number;
  pct: number;
}

export interface ExamRecord {
  id: string;
  userId: string;
  userDisplayName: string;
  institution: Institution;
  quizTitle: string;
  timestamp: string; // ISO string
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
  scorePoints: number; // +1 por acierto, -2 por error, tope mínimo 0
  percentage: number;
  grade: string;
  timeSpentSeconds: number;
  breakdown?: ExamBreakdownItem[];
}

export type LeaderboardTimeframe = 'diario' | 'mensual' | 'trimestral' | 'semestral' | 'anual';

export interface LeaderboardEntry {
  rank: number;
  userId?: string;
  username: string;
  institution: Institution;
  scorePoints: number;
  examsCount: number;
  correctTotal: number;
  incorrectTotal: number;
  lastExamDate: string;
  isCurrentUser?: boolean;
}

export interface TopOneSummary {
  institution: Institution;
  institutionLabel: string;
  entry: LeaderboardEntry | null;
}

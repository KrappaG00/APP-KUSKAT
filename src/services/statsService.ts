import { Institution } from '../types';
import {
  ExamRecord,
  LeaderboardEntry,
  LeaderboardTimeframe,
  TopOneSummary
} from '../types/auth';
import { safeStorage } from './safeStorage';

const EXAM_RECORDS_KEY = 'kuskat_exam_records_v1';

export const INSTITUTIONS_LIST: { id: Institution; name: string }[] = [
  { id: 'UES', name: 'Universidad de El Salvador (UES)' },
  { id: 'ESCALAFON', name: 'Escalafón Docente (MINED)' },
  { id: 'AVANZO', name: 'Prueba AVANZO' },
  { id: 'ASD', name: 'Academia de Seguridad Pública (ASD)' },
  { id: 'ENA', name: 'Escuela Nacional de Agricultura (ENA)' },
  { id: 'ANSP', name: 'Academia Nacional de Seguridad Pública (ANSP)' }
];

/**
 * Regla de puntaje oficial KUSKAT:
 * Por cada respuesta correcta: +1 punto.
 * Por cada respuesta equivocada: -2 puntos.
 * El tope más bajo es 0 (no se permiten puntajes negativos).
 */
export function calculateScorePoints(correct: number, incorrect: number): number {
  const points = (correct * 1) - (incorrect * 2);
  return Math.max(0, points);
}

/**
 * Obtiene los registros guardados en almacenamiento local (solo texto).
 */
export function getStoredExamRecords(): ExamRecord[] {
  try {
    const raw = safeStorage.getItem(EXAM_RECORDS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error al leer historial de exámenes:', e);
    return [];
  }
}

/**
 * Guarda el resultado de un examen completado.
 * Cumple con el requerimiento de guardar únicamente datos en formato de texto plano/JSON
 * sin imágenes ni archivos pesados en almacenamiento.
 */
export function saveExamResult(
  recordData: Omit<ExamRecord, 'id' | 'timestamp' | 'scorePoints'>
): ExamRecord {
  const scorePoints = calculateScorePoints(recordData.correctAnswers, recordData.incorrectAnswers);
  const newRecord: ExamRecord = {
    ...recordData,
    id: `exam_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    timestamp: new Date().toISOString(),
    scorePoints
  };

  try {
    const records = getStoredExamRecords();
    records.push(newRecord);
    safeStorage.setItem(EXAM_RECORDS_KEY, JSON.stringify(records));
  } catch (e) {
    console.error('Error al guardar registro de examen:', e);
  }

  return newRecord;
}

/**
 * Obtiene el historial de exámenes de un usuario específico.
 */
export function getUserExams(userId: string): ExamRecord[] {
  if (!userId) return [];
  const records = getStoredExamRecords();
  return records
    .filter(r => r.userId === userId)
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

/**
 * Determina si una fecha ISO cae dentro del rango de tiempo especificado.
 * El ciclo anual inicia el 1 de enero y se reinicia el 31 de diciembre a las 23:59:59.
 */
export function isDateInTimeframe(
  dateIso: string,
  timeframe: LeaderboardTimeframe,
  referenceDate = new Date()
): boolean {
  const date = new Date(dateIso);
  const now = referenceDate;

  switch (timeframe) {
    case 'diario': {
      return (
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth() &&
        date.getDate() === now.getDate()
      );
    }
    case 'mensual': {
      return (
        date.getFullYear() === now.getFullYear() &&
        date.getMonth() === now.getMonth()
      );
    }
    case 'trimestral': {
      if (date.getFullYear() !== now.getFullYear()) return false;
      const quarterDate = Math.floor(date.getMonth() / 3);
      const quarterNow = Math.floor(now.getMonth() / 3);
      return quarterDate === quarterNow;
    }
    case 'semestral': {
      if (date.getFullYear() !== now.getFullYear()) return false;
      const semesterDate = Math.floor(date.getMonth() / 6);
      const semesterNow = Math.floor(now.getMonth() / 6);
      return semesterDate === semesterNow;
    }
    case 'anual': {
      // Inicia el 1 de enero y se reinicia el 31 de diciembre
      return date.getFullYear() === now.getFullYear();
    }
    default:
      return true;
  }
}

/**
 * Datos semilla realistas de estudiantes salvadoreños para que la tabla de clasificación
 * esté viva y tenga referentes competitivos desde el primer uso.
 */
function getSeededMockRecords(referenceYear = new Date().getFullYear()): ExamRecord[] {
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();

  const mockUsers: { name: string; institution: Institution; correct: number; incorrect: number }[] = [
    // UES
    { name: 'Carlos Menjívar', institution: 'UES', correct: 185, incorrect: 12 },
    { name: 'Sofía Henríquez', institution: 'UES', correct: 172, incorrect: 15 },
    { name: 'Rodrigo Rivas', institution: 'UES', correct: 160, incorrect: 20 },
    { name: 'Valeria Escalante', institution: 'UES', correct: 155, incorrect: 24 },
    { name: 'Josué Alas', institution: 'UES', correct: 140, incorrect: 18 },
    { name: 'Gabriela Meléndez', institution: 'UES', correct: 135, incorrect: 22 },
    { name: 'Mauricio Quijada', institution: 'UES', correct: 128, incorrect: 25 },
    { name: 'Andrea Peñate', institution: 'UES', correct: 119, incorrect: 30 },
    { name: 'David Palacios', institution: 'UES', correct: 110, incorrect: 28 },
    { name: 'Fátima Guardado', institution: 'UES', correct: 98, incorrect: 31 },

    // ESCALAFÓN
    { name: 'Lic. Miriam Flores', institution: 'ESCALAFON', correct: 190, incorrect: 8 },
    { name: 'Prof. Nelson Lemus', institution: 'ESCALAFON', correct: 178, incorrect: 14 },
    { name: 'Licda. Karla Vásquez', institution: 'ESCALAFON', correct: 164, incorrect: 16 },
    { name: 'Prof. Gerardo Choto', institution: 'ESCALAFON', correct: 152, incorrect: 20 },
    { name: 'Licda. Elena Serrano', institution: 'ESCALAFON', correct: 143, incorrect: 19 },
    { name: 'Prof. Francisco Amaya', institution: 'ESCALAFON', correct: 135, incorrect: 26 },
    { name: 'Licda. Wendy Carballo', institution: 'ESCALAFON', correct: 126, incorrect: 22 },
    { name: 'Prof. Mario Quintanilla', institution: 'ESCALAFON', correct: 118, incorrect: 29 },
    { name: 'Licda. Carmen Zaldívar', institution: 'ESCALAFON', correct: 105, incorrect: 25 },
    { name: 'Prof. Edwin Barahona', institution: 'ESCALAFON', correct: 95, incorrect: 30 },

    // AVANZO
    { name: 'Kevin Orellana', institution: 'AVANZO', correct: 195, incorrect: 5 },
    { name: 'Camila Pineda', institution: 'AVANZO', correct: 180, incorrect: 10 },
    { name: 'Diego Arévalo', institution: 'AVANZO', correct: 165, incorrect: 18 },
    { name: 'Mariana Rosales', institution: 'AVANZO', correct: 150, incorrect: 15 },
    { name: 'Bryan Portillo', institution: 'AVANZO', correct: 142, incorrect: 22 },
    { name: 'Daniela Galdámez', institution: 'AVANZO', correct: 130, incorrect: 24 },
    { name: 'Javier Cisneros', institution: 'AVANZO', correct: 122, incorrect: 28 },
    { name: 'Lucía Bonilla', institution: 'AVANZO', correct: 114, incorrect: 20 },
    { name: 'Alejandro Recinos', institution: 'AVANZO', correct: 104, incorrect: 32 },
    { name: 'Stephanie Cornejo', institution: 'AVANZO', correct: 92, incorrect: 29 },

    // ASD
    { name: 'Alex Martínez', institution: 'ASD', correct: 175, incorrect: 10 },
    { name: 'Tatiana Guardado', institution: 'ASD', correct: 160, incorrect: 14 },
    { name: 'Samuel Villalta', institution: 'ASD', correct: 148, incorrect: 18 },
    { name: 'Kimberly Santos', institution: 'ASD', correct: 138, incorrect: 20 },
    { name: 'Héctor Cardoza', institution: 'ASD', correct: 125, incorrect: 22 },
    { name: 'Roxana Ayala', institution: 'ASD', correct: 115, incorrect: 25 },
    { name: 'Fernando Morán', institution: 'ASD', correct: 108, incorrect: 27 },
    { name: 'Yesenia Beltrán', institution: 'ASD', correct: 98, incorrect: 30 },
    { name: 'César Guevara', institution: 'ASD', correct: 90, incorrect: 28 },
    { name: 'Erika Monge', institution: 'ASD', correct: 82, incorrect: 35 },

    // ENA
    { name: 'Wilmer Alvarenga', institution: 'ENA', correct: 182, incorrect: 11 },
    { name: 'Adriana Marroquín', institution: 'ENA', correct: 168, incorrect: 15 },
    { name: 'Óscar Benítez', institution: 'ENA', correct: 156, incorrect: 19 },
    { name: 'Giselle Monterrosa', institution: 'ENA', correct: 142, incorrect: 21 },
    { name: 'Néstor Cañas', institution: 'ENA', correct: 131, incorrect: 24 },
    { name: 'Paola Iraheta', institution: 'ENA', correct: 120, incorrect: 26 },
    { name: 'Guillermo Funes', institution: 'ENA', correct: 112, incorrect: 28 },
    { name: 'Brenda Castaneda', institution: 'ENA', correct: 101, incorrect: 30 },
    { name: 'Hugo Valle', institution: 'ENA', correct: 91, incorrect: 32 },
    { name: 'Diana Regalado', institution: 'ENA', correct: 80, incorrect: 34 },

    // ANSP
    { name: 'Suboficial Jonathan Cruz', institution: 'ANSP', correct: 188, incorrect: 9 },
    { name: 'Agente Raquel Sigüenza', institution: 'ANSP', correct: 174, incorrect: 12 },
    { name: 'Agente Marlon Lovato', institution: 'ANSP', correct: 162, incorrect: 18 },
    { name: 'Agente Jennifer Rivas', institution: 'ANSP', correct: 150, incorrect: 21 },
    { name: 'Agente René Calderón', institution: 'ANSP', correct: 139, incorrect: 23 },
    { name: 'Agente Silvia Barillas', institution: 'ANSP', correct: 128, incorrect: 25 },
    { name: 'Agente Gilberto Ramos', institution: 'ANSP', correct: 116, incorrect: 27 },
    { name: 'Agente Claudia Umaña', institution: 'ANSP', correct: 105, incorrect: 29 },
    { name: 'Agente Walter Renderos', institution: 'ANSP', correct: 94, incorrect: 31 },
    { name: 'Agente Nancy Meza', institution: 'ANSP', correct: 84, incorrect: 33 }
  ];

  return mockUsers.map((u, i) => {
    const date = new Date(referenceYear, currentMonth, currentDay, 10, i * 3);
    const scorePoints = calculateScorePoints(u.correct, u.incorrect);
    return {
      id: `seed_exam_${i}`,
      userId: `seed_user_${i}`,
      userDisplayName: u.name,
      institution: u.institution,
      quizTitle: `Simulador Oficial ${u.institution}`,
      timestamp: date.toISOString(),
      totalQuestions: u.correct + u.incorrect,
      correctAnswers: u.correct,
      incorrectAnswers: u.incorrect,
      unanswered: 0,
      scorePoints,
      percentage: Math.round((u.correct / (u.correct + u.incorrect)) * 100),
      grade: u.correct >= (u.correct + u.incorrect) * 0.7 ? 'Excelente' : 'Aprobado',
      timeSpentSeconds: 1800
    };
  });
}

/**
 * Genera el Top 10 para una institución y período específico.
 * Se alimenta de los exámenes guardados localmente por usuarios reales + registros de referencia.
 */
export function getLeaderboard(
  institution: Institution,
  timeframe: LeaderboardTimeframe,
  currentUserId?: string
): LeaderboardEntry[] {
  const stored = getStoredExamRecords();
  const seeded = getSeededMockRecords();

  const allRecords = [...stored, ...seeded];

  // 1. Filtrar por institución y periodo
  const filtered = allRecords.filter(r => {
    return r.institution === institution && isDateInTimeframe(r.timestamp, timeframe);
  });

  // 2. Agrupar por usuario y sumar estadísticas
  const userMap = new Map<string, {
    username: string;
    scorePoints: number;
    examsCount: number;
    correctTotal: number;
    incorrectTotal: number;
    lastExamDate: string;
    isCurrentUser: boolean;
  }>();

  for (const rec of filtered) {
    const key = rec.userId || rec.userDisplayName;
    const existing = userMap.get(key);
    const isCurrent = currentUserId ? rec.userId === currentUserId : false;

    if (!existing) {
      userMap.set(key, {
        username: rec.userDisplayName,
        scorePoints: rec.scorePoints,
        examsCount: 1,
        correctTotal: rec.correctAnswers,
        incorrectTotal: rec.incorrectAnswers,
        lastExamDate: rec.timestamp,
        isCurrentUser: isCurrent
      });
    } else {
      existing.scorePoints += rec.scorePoints;
      existing.examsCount += 1;
      existing.correctTotal += rec.correctAnswers;
      existing.incorrectTotal += rec.incorrectAnswers;
      if (new Date(rec.timestamp) > new Date(existing.lastExamDate)) {
        existing.lastExamDate = rec.timestamp;
      }
      if (isCurrent) existing.isCurrentUser = true;
    }
  }

  // 3. Convertir a array, ordenar de mayor a menor puntaje
  const sorted = Array.from(userMap.entries())
    .map(([userId, data]) => ({
      userId,
      username: data.username,
      institution,
      scorePoints: data.scorePoints,
      examsCount: data.examsCount,
      correctTotal: data.correctTotal,
      incorrectTotal: data.incorrectTotal,
      lastExamDate: data.lastExamDate,
      isCurrentUser: data.isCurrentUser
    }))
    .sort((a, b) => {
      if (b.scorePoints !== a.scorePoints) {
        return b.scorePoints - a.scorePoints;
      }
      return b.correctTotal - a.correctTotal;
    });

  // 4. Asignar rangos 1..10 y retornar top 10
  return sorted.slice(0, 10).map((entry, index) => ({
    ...entry,
    rank: index + 1
  }));
}

/**
 * Obtiene el Top 1 de cada una de las 6 categorías (instituciones).
 * Requisito del usuario: Antes de interactuar con la tabla, mostrar el Top 1 de cada categoría.
 */
export function getTopOnePerInstitution(timeframe: LeaderboardTimeframe = 'anual'): TopOneSummary[] {
  return INSTITUTIONS_LIST.map(inst => {
    const topList = getLeaderboard(inst.id, timeframe);
    const topEntry = topList.length > 0 ? topList[0] : null;
    return {
      institution: inst.id,
      institutionLabel: inst.name,
      entry: topEntry
    };
  });
}

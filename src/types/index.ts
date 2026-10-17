export type ExamCategory = 'UES' | 'ANSP' | 'ASD' | 'AVANZO' | 'ENA' | 'ESCALAFON' | 'INGLES' | 'ALL';
export type Institution = 'UES' | 'ANSP' | 'ASD' | 'AVANZO' | 'ENA' | 'ESCALAFON' | 'INGLES';

export type PedagogicalLevel = 'basico' | 'intermedio' | 'admision';

export interface QuestionOption {
  key: string; // 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
  text: string;
}

export interface Question {
  id: string; // e.g. "1.1_q1" or "ansp_q1"
  number: number; // 1 to 300
  subtopicId?: string;
  subjectId?: string;
  sectionTitle?: string;
  statement: string;
  options: QuestionOption[];
  correctAnswer: string;
  explanation: string;
  institution: Institution;
  subject: string;
  topic: string;
  level?: PedagogicalLevel;
}

export interface SubtopicMeta {
  id: string;
  code: string;
  title: string;
  subjectId: string;
  questionCount: number;
  sections?: string[];
}

export interface SubjectMeta {
  id: string;
  number: number;
  name: string;
  codeRange: string;
  description: string;
  totalSubtopics: number;
  totalQuestions: number;
  color?: string;
  badgeBg?: string;
  badgeText?: string;
  borderColor?: string;
  icon?: string;
  institution?: Institution;
  subtopics: SubtopicMeta[];
}

export interface CurriculumData {
  title: string;
  description: string;
  totalQuestions: number;
  totalSubtopics: number;
  subjects: SubjectMeta[];
}

export interface CategorySelection {
  institution: 'ALL' | Institution;
  subjectId: string; // 'ALL' or specific subject id
  subtopicId: string; // 'ALL' or specific subtopic id
  sectionTitle: string; // 'ALL' or specific section title
}

export type FetchErrorType = 'network' | 'not_found' | 'invalid_data' | 'empty';

export interface FetchQuestionsResult {
  questions: Question[];
  status: 'success' | 'empty' | 'error';
  errorType?: FetchErrorType;
  errorMessage?: string;
  isFallback?: boolean;
}

export interface TutorialStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
  badge: string;
}

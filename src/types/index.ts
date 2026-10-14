export type ExamCategory = 'UES' | 'ANSP' | 'ALL';
export type Institution = 'UES' | 'ANSP';

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

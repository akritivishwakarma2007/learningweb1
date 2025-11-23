export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Language {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string; // URL or Lucide icon name mapping
}

export interface Topic {
  id: string;
  title: string;
  content: string; // Markdown supported
  codeExample: string;
  exercise: string;
}

export interface CourseData {
  introduction: string;
  topics: Topic[];
}

export interface ContentDatabase {
  [languageId: string]: {
    [level in SkillLevel]?: CourseData;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
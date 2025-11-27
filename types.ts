
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Language {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string; // URL or Lucide icon name mapping
}

export interface CodeExample {
  title: string;
  code: string;
}

export interface SubTopic {
  id: string;
  title: string;
  content: string; // Markdown supported
  codeExamples: CodeExample[];
  exercise: string;
}

export interface Topic {
  id: string;
  title: string;
  subTopics: SubTopic[];
}

export interface CourseData {
  introduction: string;
  topics: Topic[];
}

export type LanguageContent = {
  [level in SkillLevel]?: CourseData;
};

export interface ContentDatabase {
  [languageId: string]: LanguageContent;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

import { LanguageContent } from '../types';

export const rubyContent: LanguageContent = {
  Beginner: {
    introduction: "🟢 Level 1: Beginner. A programmer's best friend.",
    topics: [
      {
        id: 'rb-beg-intro',
        title: '1. Basics',
        subTopics: [
          {
            id: 'rb-b-1',
            title: 'Syntax',
            content: "Ruby is designed for developer happiness.",
            codeExamples: [{ title: "Hello World", code: `puts "Hello, Ruby!"` }],
            exercise: "Print your name."
          }
        ]
      }
    ]
  }
};
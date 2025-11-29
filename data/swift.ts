import { LanguageContent } from '../types';

export const swiftContent: LanguageContent = {
  Beginner: {
    introduction: "🟢 Level 1: Beginner. iOS Development.",
    topics: [
      {
        id: 'swift-beg-intro',
        title: '1. Basics',
        subTopics: [
          {
            id: 'swift-b-1',
            title: 'Variables',
            content: "Safe and fast.",
            codeExamples: [{ title: "Var & Let", code: `var name = "John"\nlet pi = 3.14` }],
            exercise: "Declare a constant and a variable."
          }
        ]
      }
    ]
  }
};
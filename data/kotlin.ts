import { LanguageContent } from '../types';

export const kotlinContent: LanguageContent = {
  Beginner: {
    introduction: "🟢 Level 1: Beginner. Modern Android dev.",
    topics: [
      {
        id: 'kt-beg-intro',
        title: '1. Basics',
        subTopics: [
          {
            id: 'kt-b-1',
            title: 'Main',
            content: "Concise syntax.",
            codeExamples: [{ title: "Hello", code: `fun main() {\n  println("Hello World")\n}` }],
            exercise: "Print a message."
          }
        ]
      }
    ]
  }
};
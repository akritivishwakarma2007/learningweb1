import { LanguageContent } from '../types';

export const cContent: LanguageContent = {
  Beginner: {
    introduction: "🟢 Level 1: Beginner. Low-level foundation.",
    topics: [
      {
        id: 'c-beg-intro',
        title: '1. Basics',
        subTopics: [
          {
            id: 'c-b-1',
            title: 'Main Function',
            content: "Every C program starts with main().",
            codeExamples: [{ title: "Hello World", code: `#include <stdio.h>\n\nint main() {\n  printf("Hello World");\n  return 0;\n}` }],
            exercise: "Compile and run a hello world program."
          }
        ]
      }
    ]
  }
};
import { LanguageContent } from '../types';

export const phpContent: LanguageContent = {
  Beginner: {
    introduction: "🟢 Level 1: Beginner. Server-side scripting.",
    topics: [
      {
        id: 'php-beg-intro',
        title: '1. Basics',
        subTopics: [
          {
            id: 'php-b-1',
            title: 'Syntax',
            content: "PHP code is executed on the server.",
            codeExamples: [{ title: "Hello World", code: `<?php\necho "Hello World!";\n?>` }],
            exercise: "Echo a string."
          }
        ]
      }
    ]
  }
};
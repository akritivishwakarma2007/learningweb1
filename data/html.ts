import { LanguageContent } from '../types';

export const htmlContent: LanguageContent = {
  Beginner: {
    introduction: "🟢 Level 1: Beginner. Structure your web pages.",
    topics: [
      {
        id: 'html-beg-basic',
        title: '1. Basic Structure',
        subTopics: [
          {
            id: 'html-b-1',
            title: 'Tags & Elements',
            content: "HTML uses tags like `<h1>`, `<p>`, `<div>` to define elements.",
            codeExamples: [{ title: "Basic Doc", code: `<!DOCTYPE html>\n<html>\n<body>\n  <h1>Hello</h1>\n</body>\n</html>` }],
            exercise: "Create a heading and a paragraph."
          }
        ]
      }
    ]
  }
};
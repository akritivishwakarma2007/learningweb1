import { LanguageContent } from '../types';

export const sqlContent: LanguageContent = {
  Beginner: {
    introduction: "🟢 Level 1: Beginner. Querying data.",
    topics: [
      {
        id: 'sql-beg-intro',
        title: '1. Basics',
        subTopics: [
          {
            id: 'sql-b-1',
            title: 'SELECT',
            content: "Retrieve data from a database.",
            codeExamples: [{ title: "Select All", code: `SELECT * FROM users;` }],
            exercise: "Select all columns from a 'products' table."
          }
        ]
      }
    ]
  }
};
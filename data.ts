import { ContentDatabase, Language } from './types';
import { pythonContent } from './data/python';
import { javascriptContent } from './data/javascript';
import { typescriptContent } from './data/typescript';
import { javaContent } from './data/java';
import { goContent } from './data/go';
import { cppContent } from './data/cpp';
import { cssContent } from './data/css';
import { htmlContent } from './data/html';
import { rubyContent } from './data/ruby';
import { phpContent } from './data/php';
import { cContent } from './data/c';
import { sqlContent } from './data/sql';
import { swiftContent } from './data/swift';
import { kotlinContent } from './data/kotlin';

export const LANGUAGES: Language[] = [
  {
    id: 'python',
    name: 'Python',
    description: 'A versatile language known for readability. Great for web dev, AI, and data science.',
    color: 'from-blue-500 to-yellow-400',
    icon: 'Python' 
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'The language of the web. Essential for front-end and modern back-end development.',
    color: 'from-yellow-400 to-yellow-600',
    icon: 'Javascript'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    description: 'JavaScript with syntax for types. Essential for large-scale application development.',
    color: 'from-blue-600 to-blue-400',
    icon: 'TypeScript'
  },
  {
    id: 'java',
    name: 'Java',
    description: 'A robust, object-oriented language used in enterprise backends and Android apps.',
    color: 'from-red-500 to-orange-500',
    icon: 'Java'
  },
  {
    id: 'go',
    name: 'Go',
    description: 'Google\'s open source language. Fast, statically typed, and great for cloud services.',
    color: 'from-cyan-500 to-blue-500',
    icon: 'Go'
  },
  {
    id: 'cpp',
    name: 'C++',
    description: 'High-performance language used in game dev, systems programming, and finance.',
    color: 'from-blue-600 to-blue-800',
    icon: 'Cpp'
  },
  {
    id: 'c',
    name: 'C',
    description: 'The mother of all languages. Low-level memory management and high performance.',
    color: 'from-slate-500 to-slate-700',
    icon: 'C'
  },
  {
    id: 'html',
    name: 'HTML / CSS',
    description: 'The building blocks of the web. Structure content and style it beautifully.',
    color: 'from-orange-500 to-blue-500',
    icon: 'HTML'
  },
  {
    id: 'ruby',
    name: 'Ruby',
    description: 'A dynamic, open source programming language with a focus on simplicity and productivity.',
    color: 'from-red-600 to-red-800',
    icon: 'Ruby'
  },
  {
    id: 'php',
    name: 'PHP',
    description: 'A popular general-purpose scripting language that is especially suited to web development.',
    color: 'from-indigo-400 to-indigo-600',
    icon: 'PHP'
  },
  {
    id: 'sql',
    name: 'SQL',
    description: 'Standard language for storing, manipulating and retrieving data in databases.',
    color: 'from-pink-500 to-rose-500',
    icon: 'SQL'
  },
  {
    id: 'plsql',
    name: 'PL/SQL',
    description: 'Oracle procedural extension for SQL.',
    color: 'from-red-500 to-orange-600',
    icon: 'PL/SQL'
  },
  {
    id: 'swift',
    name: 'Swift',
    description: 'Powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS.',
    color: 'from-orange-500 to-red-500',
    icon: 'Swift'
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    description: 'A modern programming language that makes developers happier. Official language for Android.',
    color: 'from-purple-500 to-violet-500',
    icon: 'Kotlin'
  }
];

export const CONTENT: ContentDatabase = {
  python: pythonContent,
  javascript: javascriptContent,
  typescript: typescriptContent,
  java: javaContent,
  go: goContent,
  cpp: cppContent,
  c: cContent,
  html: { ...htmlContent, ...cssContent }, // Merge HTML/CSS for the combined view if needed, or handle logic in App.tsx
  ruby: rubyContent,
  php: phpContent,
  sql: sqlContent,
  plsql: sqlContent, // Reusing SQL content for now as placeholder or if similar structure intended
  swift: swiftContent,
  kotlin: kotlinContent,
  css: cssContent // Keep standalone accessible if needed
};
import { ContentDatabase, Language } from './types';
import { pythonContent } from './data/python';
import { javascriptContent } from './data/javascript';
import { typescriptContent } from './data/typescript';
import { javaContent } from './data/java';
import { goContent } from './data/go';
import { cppContent } from './data/cpp';
import { cssContent } from './data/css';

// ==========================================
// CODE MASTERY AI CONTENT DATABASE
// ==========================================

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
    id: 'css',
    name: 'CSS',
    description: 'Style the web. Master selectors, layouts, and responsive design principles.',
    color: 'from-blue-400 to-indigo-500',
    icon: 'CSS'
  }
];

export const CONTENT: ContentDatabase = {
  python: pythonContent,
  javascript: javascriptContent,
  typescript: typescriptContent,
  java: javaContent,
  go: goContent,
  cpp: cppContent,
  css: cssContent
};
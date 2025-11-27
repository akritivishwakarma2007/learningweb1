
import { LanguageContent } from '../types';

export const typescriptContent: LanguageContent = {
  Beginner: {
    introduction: "JavaScript with Superpowers.",
    topics: [
      {
        id: 'ts-beg-base',
        title: '1. The Basics',
        subTopics: [
          {
            id: 'ts-b-1',
            title: 'Static Typing',
            content: "TypeScript adds static typing to JavaScript. This means you define what kind of data variables hold (number, string, boolean) *before* the code runs. This catches errors during development (compile-time) rather than when the user is running the app (runtime).",
            codeExamples: [{
                title: "Basic Types",
                code: `let username: string = "Alice";
let score: number = 100;
let isActive: boolean = true;
let tags: string[] = ["admin", "editor"];`
            }, {
                title: "Function Typing",
                code: `// Arguments and Return type are typed
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameters marked with ?
function greet(name: string, greeting?: string) {
    console.log(\`\${greeting || 'Hello'} \${name}\`);
}`
            }],
            exercise: "Create a function `formatPrice` that accepts a `number` and returns a `string` prefixed with '$'."
          },
          {
              id: 'ts-b-2',
              title: 'Interfaces & Types',
              content: "Interfaces define a **contract** for the shape of an object. If an object is supposed to be a 'User', it *must* have the properties defined in the User interface. This ensures consistency across your application.",
              codeExamples: [{
                  title: "Interface",
                  code: `interface User {
  id: number;
  name: string;
  readonly email: string; // Cannot be changed after creation
  phone?: string;         // Optional property
}

const u: User = { 
    id: 1, 
    name: "Bob", 
    email: "b@b.com" 
};`
              }, {
                  title: "Type Alias",
                  code: `// Type aliases can be used for primitives too
type Point = {
  x: number;
  y: number;
};

type ID = string | number;`
              }],
              exercise: "Define an interface `Book` with `title` (string), `pages` (number), and optional `isRead` (boolean). Create a valid object."
          }
        ]
      }
    ]
  },
  Intermediate: {
    introduction: "Generics and Advanced Types.",
    topics: [
      {
        id: 'ts-int-gen',
        title: '1. Generics',
        subTopics: [
          {
            id: 'ts-i-g-1',
            title: 'Generic Functions',
            content: "Generics allow you to create reusable components that work with a variety of types rather than a single one. Think of them as variables for types. They allow you to capture the type passed in, so you can use it later (e.g., as the return type).",
            codeExamples: [{
                title: "Identity Function",
                code: `// T captures the type of argument passed
function identity<T>(arg: T): T {
  return arg;
}

// Explicit type: T becomes string
let s = identity<string>("Hello");

// Type inference: T becomes number automatically
let n = identity(42);`
            }, {
                title: "Generic Interface",
                code: `interface Box<T> {
    contents: T;
}

const stringBox: Box<string> = { contents: "Toy" };
const intBox: Box<number> = { contents: 100 };`
            }],
            exercise: "Write a generic function `getLastElement<T>` that returns the last element of an array of type `T`."
          }
        ]
      },
      {
          id: 'ts-int-union',
          title: '2. Unions & Intersections',
          subTopics: [
              {
                  id: 'ts-i-u-1',
                  title: 'Union Types',
                  content: "Union types allow a variable to be one of several types. This is useful when a value isn't fully under your control (like user input) or can logically be multiple things (like an ID being a number or string).",
                  codeExamples: [{
                      title: "Simple Union",
                      code: `let id: string | number;
id = 101;   // OK
id = "ABC"; // OK
// id = true; // Error`
                  }, {
                      title: "Discriminated Union",
                      code: `interface Circle { kind: "circle"; radius: number; }
interface Square { kind: "square"; side: number; }

type Shape = Circle | Square;

function getArea(s: Shape) {
    // TypeScript knows 's' is Circle here if kind is 'circle'
    if (s.kind === "circle") {
        return Math.PI * s.radius ** 2;
    }
    return s.side * s.side;
}`
                  }],
                  exercise: "Create a function that accepts `string | number`. If it's a string, return its length; if it's a number, return the number squared."
              }
          ]
      }
    ]
  },
  Advanced: {
    introduction: "Mastering the type system.",
    topics: [
      {
        id: 'ts-adv-util',
        title: '1. Utility Types',
        subTopics: [
          {
            id: 'ts-a-u-1',
            title: 'Built-in Utilities',
            content: "TypeScript provides several utility types to facilitate common type transformations. These allow you to base types on other types without rewriting code.\n\n*   `Partial<T>`: Makes all properties optional.\n*   `Required<T>`: Makes all properties required.\n*   `Pick<T, K>`: Constructs a type by picking a set of properties `K` from `T`.",
            codeExamples: [{
                title: "Partial & Required",
                code: `interface Todo {
  title: string;
  desc: string;
}

// Useful for update functions where you might only update one field
function update(todo: Partial<Todo>) { ... }

// Forces all optional fields to be present
type CompleteTodo = Required<Partial<Todo>>`
            }, {
                title: "Record",
                code: `// Maps string keys to number values
const scores: Record<string, number> = {
    "Alice": 10,
    "Bob": 20
};`
            }],
            exercise: "Create an interface `Employee`. Use `Omit` to create a new type `Guest` that removes sensitive fields like `salary`."
          }
        ]
      }
    ]
  }
};

import { LanguageContent } from '../types';

export const typescriptContent: LanguageContent = {
  Beginner: {
    introduction: "🟢 Level 1: Beginner. Understand TypeScript syntax, compilation, and write basic strongly-typed code.",
    topics: [
      {
        id: 'ts-beg-intro',
        title: '1. Introduction',
        subTopics: [
          {
            id: 'ts-b-intro-1',
            title: 'What is TypeScript?',
            content: "TypeScript is a superset of JavaScript that adds static typing. It catches errors at compile-time rather than runtime, making code more robust and easier to maintain.\n\n*   **TSC**: The TypeScript Compiler transpiles `.ts` files to `.js`.\n*   **tsconfig.json**: Configuration file for the compiler.",
            codeExamples: [
              {
                title: "JavaScript vs TypeScript",
                code: `// JavaScript
function add(a, b) { return a + b; }

// TypeScript
function add(a: number, b: number): number {
    return a + b;
}`
              },
              {
                title: "Compile Command",
                code: `# Compile index.ts
tsc index.ts`
              }
            ],
            exercise: "Create a file `hello.ts` that logs a message, and compile it using `tsc`."
          }
        ]
      },
      {
        id: 'ts-beg-types',
        title: '2. Basic Types',
        subTopics: [
          {
            id: 'ts-b-types-1',
            title: 'Primitives & Special Types',
            content: "TypeScript supports standard JS types (`number`, `string`, `boolean`) and adds special ones like `any` (avoid if possible), `void` (no return), `undefined`, and `null`.\n\n*   **unknown**: Safer version of `any`, requires checking before use.\n*   **never**: Represents values that never occur (e.g., infinite loops, thrown errors).",
            codeExamples: [
              {
                title: "Primitives",
                code: `let score: number = 10;
let isUser: boolean = true;
let name: string = "Alice";`
              },
              {
                title: "Any vs Unknown",
                code: `let data: any = 10;
data.method(); // No Error (unsafe)

let safeData: unknown = 10;
// safeData.method(); // Error (safe)
if (typeof safeData === 'number') {
    console.log(safeData.toFixed(2));
}`
              }
            ],
            exercise: "Declare variables for `age` (number) and `isActive` (boolean). Try assigning a string to `age` and observe the error."
          }
        ]
      },
      {
        id: 'ts-beg-func',
        title: '3. Variables & Functions',
        subTopics: [
          {
            id: 'ts-b-func-1',
            title: 'Typed Functions',
            content: "Annotate function parameters and return types to ensure correct usage. \n\n*   **Optional Parameters**: Use `?`.\n*   **Default Parameters**: Assign a value in the signature.",
            codeExamples: [
              {
                title: "Function Typing",
                code: `function greet(name: string, msg: string = "Hi"): string {
    return \`\${msg}, \${name}\`;
}

// Arrow function
const add = (a: number, b: number): number => a + b;`
              },
              {
                title: "Optional Parameter",
                code: `function log(message: string, userId?: number) {
    console.log(message, userId || "Guest");
}`
              }
            ],
            exercise: "Write a function `calculateArea` that takes `width` and an optional `height`. If height is missing, assume it's a square."
          }
        ]
      },
      {
        id: 'ts-beg-arr',
        title: '4. Arrays & Tuples',
        subTopics: [
          {
            id: 'ts-b-arr-1',
            title: 'Typed Arrays',
            content: "Define arrays that only accept specific types using `type[]` or `Array<type>`.",
            codeExamples: [
              {
                title: "Array Syntax",
                code: `let scores: number[] = [10, 20, 30];
let names: Array<string> = ["Alice", "Bob"];`
              }
            ],
            exercise: "Create an array of strings representing colors. Try adding a number to it."
          },
          {
            id: 'ts-b-arr-2',
            title: 'Tuples',
            content: "A tuple is a fixed-length array where each element has a specific type.",
            codeExamples: [
              {
                title: "Tuple",
                code: `let user: [number, string];
user = [1, "Admin"]; // Correct
// user = ["Admin", 1]; // Error`
              }
            ],
            exercise: "Define a tuple that stores a coordinate `[x, y, z]` (all numbers)."
          }
        ]
      },
      {
        id: 'ts-beg-obj',
        title: '5. Objects',
        subTopics: [
          {
            id: 'ts-b-obj-1',
            title: 'Object Types & Aliases',
            content: "Define the shape of an object using inline types or the `type` keyword. Use `readonly` for immutable properties.",
            codeExamples: [
              {
                title: "Type Alias",
                code: `type User = {
    readonly id: number;
    username: string;
    email?: string; // Optional
};

const u: User = { id: 1, username: "dev" };
// u.id = 2; // Error: readonly`
              }
            ],
            exercise: "Create a `Car` type with `make`, `model`, and `year`. Create an object matching that type."
          },
          {
            id: 'ts-b-obj-2',
            title: 'Union & Intersection',
            content: "*   **Union (`|`)**: Value can be one of several types.\n*   **Intersection (`&`)**: Combines multiple types into one.",
            codeExamples: [
              {
                title: "Union",
                code: `let id: string | number;
id = 101;
id = "A-101";`
              },
              {
                title: "Intersection",
                code: `type Draggable = { drag: () => void };
type Resizable = { resize: () => void };
type UIElement = Draggable & Resizable;`
              }
            ],
            exercise: "Create a function that accepts `string | number` and returns a string description."
          }
        ]
      },
      {
        id: 'ts-beg-proj',
        title: '6. Beginner Projects',
        subTopics: [
          {
            id: 'ts-b-proj-1',
            title: 'Project 1: BMI Calculator',
            content: "Calculate Body Mass Index using basic types and functions.",
            codeExamples: [{title: "Logic", code: `const calculateBMI = (weight: number, height: number): number => weight / (height * height);`} ],
            exercise: "Add logic to categorize the result (Underweight, Normal, Overweight)."
          },
          {
            id: 'ts-b-proj-2',
            title: 'Project 2: Student Record Program',
            content: "Manage student data using Objects and Union Types.",
            codeExamples: [{title: "Type", code: `type Grade = 'A' | 'B' | 'C' | 'F';`} ],
            exercise: "Create a function that updates a student's grade."
          },
          {
            id: 'ts-b-proj-3',
            title: 'Project 3: Todo CLI App',
            content: "A simple task manager using Arrays and Tuples.",
            codeExamples: [{title: "Task Structure", code: `type Task = [number, string, boolean]; // [id, title, done]`} ],
            exercise: "Implement a function to toggle the 'done' status of a task."
          }
        ]
      }
    ]
  },
  Intermediate: {
    introduction: "🔵 Level 2: Intermediate. Use TypeScript in real-world apps & with modern JS features.",
    topics: [
      {
        id: 'ts-int-narrow',
        title: '1. Type Narrowing',
        subTopics: [
          {
            id: 'ts-i-nar-1',
            title: 'Type Guards',
            content: "Techniques to refine types within conditional blocks.\n*   `typeof`: For primitives.\n*   `instanceof`: For classes.\n*   `in`: For object properties.",
            codeExamples: [
              {
                title: "typeof Guard",
                code: `function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + value;
    }
    return padding + value; // TypeScript knows padding is string here
}`
              },
              {
                title: "in Operator",
                code: `type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) animal.swim();
    else animal.fly();
}`
              }
            ],
            exercise: "Write a function that accepts `Date | string` and returns a formatted date string."
          }
        ]
      },
      {
        id: 'ts-int-int',
        title: '2. Interfaces',
        subTopics: [
          {
            id: 'ts-i-int-1',
            title: 'Interfaces vs Types',
            content: "**Interfaces** describe the shape of objects and can be extended. **Types** are more flexible (unions, primitives). Use Interfaces for public APIs/Objects.",
            codeExamples: [
              {
                title: "Extending Interface",
                code: `interface Animal { name: string; }
interface Dog extends Animal { breed: string; }

const d: Dog = { name: "Rex", breed: "Pug" };`
              }
            ],
            exercise: "Define an interface `Shape` and extend it to create `Circle` and `Square` interfaces."
          }
        ]
      },
      {
        id: 'ts-int-class',
        title: '3. Classes & OOP',
        subTopics: [
          {
            id: 'ts-i-cls-1',
            title: 'Access Modifiers',
            content: "Control visibility of class members.\n*   `public`: Accessible everywhere (default).\n*   `private`: Only within class.\n*   `protected`: Within class and subclasses.",
            codeExamples: [
              {
                title: "Class Modifiers",
                code: `class BankAccount {
    private balance: number;
    constructor(init: number) { this.balance = init; }
    public deposit(amt: number) { this.balance += amt; }
}`
              }
            ],
            exercise: "Create an `Employee` class with a protected `salary` property accessed by a `Manager` subclass."
          }
        ]
      },
      {
        id: 'ts-int-gen',
        title: '4. Generics',
        subTopics: [
          {
            id: 'ts-i-gen-1',
            title: 'Generic Functions & Classes',
            content: "Reusable components that work with multiple types. `T` acts as a type variable.",
            codeExamples: [
              {
                title: "Generic Function",
                code: `function identity<T>(arg: T): T {
    return arg;
}
let n = identity<number>(5);
let s = identity<string>("Hi");`
              },
              {
                title: "Generic Interface",
                code: `interface Box<T> {
    contents: T;
}
let box: Box<string> = { contents: "Gift" };`
              }
            ],
            exercise: "Write a generic function `reverseArray<T>(items: T[]): T[]`."
          }
        ]
      },
      {
        id: 'ts-int-enum',
        title: '5. Enums',
        subTopics: [
          {
            id: 'ts-i-enum-1',
            title: 'Numeric & String Enums',
            content: "A set of named constants.",
            codeExamples: [
              {
                title: "Enum",
                code: `enum Direction { Up, Down, Left, Right }
// Up=0, Down=1...

enum Status {
    Success = "SUCCESS",
    Failure = "FAILURE"
}`
              }
            ],
            exercise: "Create an enum `Role` with 'Admin', 'User', 'Guest' and use it in a User interface."
          }
        ]
      },
      {
        id: 'ts-int-util',
        title: '6. Utility Types',
        subTopics: [
          {
            id: 'ts-i-util-1',
            title: 'Common Utilities',
            content: "Built-in helpers to transform types.\n*   `Partial<T>`: All optional.\n*   `Required<T>`: All required.\n*   `Pick<T, K>`: Select keys.\n*   `Omit<T, K>`: Exclude keys.",
            codeExamples: [
              {
                title: "Partial & Pick",
                code: `interface Todo { title: string; desc: string; }

function update(todo: Partial<Todo>) { ... }

type TodoPreview = Pick<Todo, "title">;`
              }
            ],
            exercise: "Use `Omit` to create a `UserWithoutPassword` type from a `User` interface."
          }
        ]
      },
      {
        id: 'ts-int-proj',
        title: '7. Intermediate Projects',
        subTopics: [
          {
            id: 'ts-i-proj-1',
            title: 'Project 1: Bank Management System',
            content: "Use Classes, Interfaces, and Generics to manage accounts.",
            codeExamples: [{title: "Account Interface", code: `interface IAccount { deposit(amount: number): void; }`} ],
            exercise: "Implement a `SavingsAccount` class that adds interest."
          },
          {
            id: 'ts-i-proj-2',
            title: 'Project 2: Product Inventory API',
            content: "Simulate an API using Modules and Utility Types.",
            codeExamples: [{title: "Inventory", code: `type Inventory = Record<string, number>;`} ],
            exercise: "Create functions to add and remove stock."
          },
          {
            id: 'ts-i-proj-3',
            title: 'Project 3: Movie Filter App',
            content: "Filter lists using Generics and Enums (Genre).",
            codeExamples: [{title: "Filter", code: `function filterByGenre<T extends Movie>(movies: T[], genre: Genre): T[]`} ],
            exercise: "Implement sorting by year."
          },
          {
            id: 'ts-i-proj-4',
            title: 'Project 4: Weather App (API)',
            content: "Fetch data and type the API response using Interfaces.",
            codeExamples: [{title: "API Response", code: `interface WeatherResponse { temp: number; desc: string; }`} ],
            exercise: "Handle API errors cleanly."
          }
        ]
      }
    ]
  },
  Advanced: {
    introduction: "🔴 Level 3: Advanced. Develop scalable real-world production projects.",
    topics: [
      {
        id: 'ts-adv-types',
        title: '1. Advanced Types',
        subTopics: [
          {
            id: 'ts-a-typ-1',
            title: 'Mapped & Conditional Types',
            content: "**Mapped Types**: Transform existing types.\n**Conditional**: Select types logic (`T extends U ? X : Y`).",
            codeExamples: [
              {
                title: "Mapped Type",
                code: `type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};`
              },
              {
                title: "Conditional Type",
                code: `type IsString<T> = T extends string ? true : false;
type A = IsString<"hello">; // true`
              }
            ],
            exercise: "Create a mapped type that makes all properties of an interface nullable."
          },
          {
            id: 'ts-a-typ-2',
            title: 'Keyof & Index Signatures',
            content: "Access property names and dynamic keys.",
            codeExamples: [
              {
                title: "keyof",
                code: `interface User { name: string; age: number; }
type UserKeys = keyof User; // "name" | "age"`
              },
              {
                title: "Index Signature",
                code: `interface StringArray {
    [index: number]: string;
}`
              }
            ],
            exercise: "Write a function `getProperty<T, K extends keyof T>(obj: T, key: K)`."
          }
        ]
      },
      {
        id: 'ts-adv-guards',
        title: '2. Type Guards',
        subTopics: [
          {
            id: 'ts-a-guard-1',
            title: 'User-Defined Type Guards',
            content: "Functions that return a type predicate (`arg is Type`).",
            codeExamples: [
              {
                title: "Type Predicate",
                code: `function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}`
              }
            ],
            exercise: "Create a type guard `isString` to check if a variable is a string."
          }
        ]
      },
      {
        id: 'ts-adv-dec',
        title: '3. Decorators',
        subTopics: [
          {
            id: 'ts-a-dec-1',
            title: 'Class & Method Decorators',
            content: "Metaprogramming features to annotate or modify classes and members.",
            codeExamples: [
              {
                title: "Logger Decorator",
                code: `function Log(target: any, key: string) {
    console.log(\`Property \${key} accessed\`);
}
class Test {
    @Log
    name: string;
}`
              }
            ],
            exercise: "Create a method decorator that logs the execution time of a method."
          }
        ]
      },
      {
        id: 'ts-adv-frame',
        title: '4. TS with Frameworks',
        subTopics: [
          {
            id: 'ts-a-react',
            title: 'React + TypeScript',
            content: "Typing Props, State, and Hooks.",
            codeExamples: [
              {
                title: "Typed Component",
                code: `interface Props { message: string; }
const Banner: React.FC<Props> = ({ message }) => <h1>{message}</h1>;`
              }
            ],
            exercise: "Create a React component with typed `useState` for a counter."
          },
          {
            id: 'ts-a-node',
            title: 'Node + Express',
            content: "Typing Request, Response, and Middleware.",
            codeExamples: [
              {
                title: "Express Route",
                code: `app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});`
              }
            ],
            exercise: "Create a middleware that adds a custom property to the `Request` type."
          }
        ]
      },
      {
        id: 'ts-adv-proj',
        title: '5. Advanced Projects',
        subTopics: [
          {
            id: 'ts-a-proj-1',
            title: 'Project 1: E-commerce REST API',
            content: "Node + Express + Prisma. Use strict typing for DTOs and DB models.",
            codeExamples: [{title: "Prisma Model", code: `model Product { id Int @id, name String }`} ],
            exercise: "Implement JWT authentication with typed payloads."
          },
          {
            id: 'ts-a-proj-2',
            title: 'Project 2: SaaS Subscription App',
            content: "React + TS. Complex state management with Redux Toolkit.",
            codeExamples: [{title: "Redux Slice", code: `createSlice({ name: 'user', initialState: ... })`} ],
            exercise: "Integrate Stripe types for payment processing."
          },
          {
            id: 'ts-a-proj-3',
            title: 'Project 3: Microservices App',
            content: "NestJS + Kafka. Use Decorators for modules and controllers.",
            codeExamples: [{title: "Nest Controller", code: `@Controller('cats') class CatsController { ... }`} ],
            exercise: "Create a DTO class with validation decorators."
          }
        ]
      }
    ]
  }
};
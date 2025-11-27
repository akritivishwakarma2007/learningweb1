import { LanguageContent } from '../types';

export const javascriptContent: LanguageContent = {
  Beginner: {
    introduction: "🟢 Level 1: Beginner. Understand core concepts, DOM manipulation, and write simple interactive programs.",
    topics: [
      {
        id: 'js-beg-intro',
        title: '1. Introduction',
        subTopics: [
          {
            id: 'js-b-intro-1',
            title: 'What is JavaScript?',
            content: "JavaScript (JS) is a lightweight, interpreted programming language primarily used for creating interactive web pages. Unlike Java, which is a standalone language, JS runs in the browser.\n\n*   **Frontend**: UI, animations, interactivity.\n*   **Backend**: Node.js (Server-side logic).",
            codeExamples: [
              {
                title: "Linking JS",
                code: `<script>
  console.log("Hello, World!");
</script>`
              }
            ],
            exercise: "Create an HTML file and link an external 'script.js' file that alerts 'Welcome!' when the page loads."
          }
        ]
      },
      {
        id: 'js-beg-basics',
        title: '2. Basics',
        subTopics: [
          {
            id: 'js-b-base-1',
            title: 'Variables',
            content: "Variables serve as containers for storing data values. Modern JavaScript (ES6+) provides three ways to declare variables: `var`, `let`, and `const`.\n\n*   `var`: Function-scoped, can be redeclared (Avoid using in modern code).\n*   `let`: Block-scoped, can be reassigned but not redeclared in the same scope.\n*   `const`: Block-scoped, cannot be reassigned (immutable reference).",
            codeExamples: [
              {
                title: "Variable Declaration",
                code: `// Best Practice
let name = "Alice";
const pi = 3.14;

// Legacy (Avoid)
var old = "legacy";`
              },
              {
                title: "Scoping Difference",
                code: `if (true) {
    let a = 10;
    var b = 20;
}
// console.log(a); // Error: a is not defined
console.log(b); // 20 (var leaks scope)`
              }
            ],
            exercise: "Declare a `const` for your birth year and a `let` for your current age. Try to reassign both and observe the error for the constant."
          },
          {
            id: 'js-b-base-2',
            title: 'Data Types',
            content: "JavaScript is dynamically typed. \n\n**Primitives** (Immutable):\n*   `string`: \"Hello\"\n*   `number`: 10, 3.14\n*   `boolean`: true, false\n*   `null`: Intentional absence of value\n*   `undefined`: Uninitialized variable\n*   `bigint`: Large integers\n*   `symbol`: Unique identifiers\n\n**Non-Primitives** (Mutable):\n*   `object` (includes arrays, functions)",
            codeExamples: [
              {
                title: "Types",
                code: `let isUser = true;      // boolean
let empty = null;       // null
let unknown;            // undefined
let big = 9007199254740991n; // bigint`
              },
              {
                title: "Checking Types",
                code: `console.log(typeof "text"); // "string"
console.log(typeof 100);    // "number"
console.log(typeof null);   // "object" (known JS bug)`
              }
            ],
            exercise: "Create variables for each primitive type and log their types using `typeof`."
          },
          {
            id: 'js-b-base-3',
            title: 'Operators',
            content: "Perform operations on variables.\n*   **Arithmetic**: `+`, `-`, `*`, `/`, `%` (remainder), `**` (exponent)\n*   **Comparison**: `==` (value), `===` (value & type), `!=`, `!==`\n*   **Logical**: `&&` (AND), `||` (OR), `!` (NOT)\n*   **Assignment**: `=`, `+=`, `-=`",
            codeExamples: [
              {
                title: "Strict vs Loose Equality",
                code: `console.log(5 == "5");  // true (type coercion)
console.log(5 === "5"); // false (recommended)`
              },
              {
                title: "Logical Operators",
                code: `const age = 20;
const hasID = true;

if (age > 18 && hasID) {
    console.log("Allowed entry");
}`
              }
            ],
            exercise: "Write an expression using the ternary operator `? :` to check if a number is even or odd."
          }
        ]
      },
      {
        id: 'js-beg-ctrl',
        title: '3. Control Statements',
        subTopics: [
          {
            id: 'js-b-ctrl-1',
            title: 'Conditionals (If/Else/Switch)',
            content: "Control the flow of execution based on conditions.",
            codeExamples: [
              {
                title: "If-Else",
                code: `let time = 20;
if (time < 12) {
    console.log("Good morning");
} else if (time < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}`
              },
              {
                title: "Switch",
                code: `const role = "admin";
switch(role) {
    case "admin": console.log("Full Access"); break;
    case "user": console.log("Read Access"); break;
    default: console.log("No Access");
}`
              }
            ],
            exercise: "Write a switch statement that prints the name of the day based on a number (1-7)."
          },
          {
            id: 'js-b-ctrl-2',
            title: 'Loops',
            content: "Repeat code blocks.\n*   `for`: Standard loop.\n*   `while`: Loop until condition false.\n*   `do-while`: Execute at least once.",
            codeExamples: [
              {
                title: "For Loop",
                code: `for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
}`
              },
              {
                title: "While Loop",
                code: `let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}`
              }
            ],
            exercise: "Use a `for` loop to verify if a number is prime."
          }
        ]
      },
      {
        id: 'js-beg-func',
        title: '4. Functions',
        subTopics: [
          {
            id: 'js-b-func-1',
            title: 'Function Types',
            content: "Functions are reusable blocks of code.\n1.  **Declaration**: Hoisted (can call before defining).\n2.  **Expression**: Not hoisted.\n3.  **Arrow**: Concise syntax, lexical `this`.",
            codeExamples: [
              {
                title: "Declaration vs Expression",
                code: `// Declaration
function add(a, b) { return a + b; }

// Expression
const subtract = function(a, b) { return a - b; };`
              },
              {
                title: "Arrow Function",
                code: `const multiply = (a, b) => a * b;
const square = n => n * n; // implicit return`
              }
            ],
            exercise: "Convert `function sayHi(name) { return 'Hi ' + name; }` into an arrow function."
          },
          {
            id: 'js-b-func-2',
            title: 'Callback Functions',
            content: "A callback is a function passed as an argument to another function, to be executed later.",
            codeExamples: [
              {
                title: "Basic Callback",
                code: `function process(name, callback) {
    console.log("Processing " + name);
    callback();
}

process("User", () => console.log("Done!"));`
              }
            ],
            exercise: "Write a function `calculate` that takes two numbers and a callback function (operation) to apply to them."
          }
        ]
      },
      {
        id: 'js-beg-arr',
        title: '5. Arrays & Objects',
        subTopics: [
          {
            id: 'js-b-arr-1',
            title: 'Array Methods',
            content: "Arrays store ordered lists. Key methods:\n*   `push/pop`: Add/remove end\n*   `shift/unshift`: Add/remove start\n*   `map`: Transform elements\n*   `filter`: Select elements\n*   `reduce`: Accumulate result",
            codeExamples: [
              {
                title: "Basic Methods",
                code: `let fruits = ["Apple"];
fruits.push("Banana"); // ["Apple", "Banana"]
fruits.shift();        // ["Banana"]`
              },
              {
                title: "Map & Filter",
                code: `const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2); // [2, 4, 6, 8]
const evens = nums.filter(n => n % 2 === 0); // [2, 4]`
              }
            ],
            exercise: "Given an array of prices, use `filter` to get prices > 50 and then `map` to format them with a '$' sign."
          },
          {
            id: 'js-b-arr-2',
            title: 'Objects',
            content: "Objects store data in key-value pairs.",
            codeExamples: [
              {
                title: "Object Literal",
                code: `const car = {
    brand: "Toyota",
    model: "Corolla",
    start: function() { console.log("Vroom"); }
};
console.log(car.brand); // Dot notation
console.log(car["model"]); // Bracket notation`
              },
              {
                title: "Looping Objects",
                code: `for (let key in car) {
    console.log(key, car[key]);
}`
              }
            ],
            exercise: "Create an object representing a 'Book' with properties `title`, `author` and a method `read()`."
          }
        ]
      },
      {
        id: 'js-beg-dom',
        title: '6. DOM Manipulation',
        subTopics: [
          {
            id: 'js-b-dom-1',
            title: 'Selecting & Changing Elements',
            content: "The DOM (Document Object Model) connects JS to HTML.\n*   `getElementById`, `querySelector`\n*   `innerHTML`, `textContent`, `style`",
            codeExamples: [
              {
                title: "Selection",
                code: `const title = document.getElementById("main-title");
const items = document.querySelectorAll(".item");`
              },
              {
                title: "Modification",
                code: `title.textContent = "New Title";
title.style.color = "blue";
title.classList.add("highlight");`
              }
            ],
            exercise: "Select all `<li>` elements on a page and change their text color to green."
          },
          {
            id: 'js-b-dom-2',
            title: 'Events',
            content: "React to user actions like clicks, typing, or hovering.",
            codeExamples: [
              {
                title: "Event Listener",
                code: `const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
    console.log("Clicked!", e.target);
});`
              }
            ],
            exercise: "Create an input field that logs the current value to the console whenever the user types (`keyup` event)."
          }
        ]
      },
      {
        id: 'js-beg-proj',
        title: '7. Beginner Projects',
        subTopics: [
          {
            id: 'js-b-proj-1',
            title: 'Project 1: Calculator',
            content: "Build a functional UI calculator. Use `eval()` carefully or build custom logic for arithmetic.",
            codeExamples: [{ title: "Logic Snippet", code: `function calculate(expression) { return new Function('return ' + expression)(); }` }],
            exercise: "Implement clear (C) and backspace functionality."
          },
          {
            id: 'js-b-proj-2',
            title: 'Project 2: To-Do List',
            content: "A list where you can add tasks, mark them done, and delete them. Uses DOM manipulation and Arrays.",
            codeExamples: [{ title: "Adding Task", code: `function addTask(text) {
  const li = document.createElement("li");
  li.innerText = text;
  document.getElementById("list").appendChild(li);
}` }],
            exercise: "Add a 'checked' style (strikethrough) when a task is clicked."
          },
          {
            id: 'js-b-proj-3',
            title: 'Project 3: Stopwatch',
            content: "Use `setInterval` to create a digital timer with Start, Stop, and Reset.",
            codeExamples: [{ title: "Timer Logic", code: `let seconds = 0;
let interval;
function start() {
    interval = setInterval(() => {
        seconds++;
        display.innerText = seconds;
    }, 1000);
}` }],
            exercise: "Format the time to show MM:SS format."
          },
          {
            id: 'js-b-proj-4',
            title: 'Project 4: Password Generator',
            content: "Generate random strings based on user-selected length.",
            codeExamples: [{ title: "Randomizer", code: `const chars = "abcdef...12345...";
const rand = Math.floor(Math.random() * chars.length);
password += chars[rand];` }],
            exercise: "Add checkboxes to include/exclude numbers and symbols."
          }
        ]
      }
    ]
  },
  Intermediate: {
    introduction: "🔵 Level 2: Intermediate. Learn modern JavaScript (ES6+) and build industry-level apps.",
    topics: [
      {
        id: 'js-int-es6',
        title: '1. ES6+ Features',
        subTopics: [
          {
            id: 'js-i-es6-1',
            title: 'Template Literals & Destructuring',
            content: "**Template Literals**: Multiline strings and interpolation.\n**Destructuring**: Unpacking arrays/objects into variables.",
            codeExamples: [
              {
                title: "Template Literals",
                code: `const name = "Bob";
const msg = \`Hello, \${name}!
Welcome back.\`;`
              },
              {
                title: "Destructuring",
                code: `const user = { id: 1, info: { age: 25 } };
const { info: { age } } = user; // age = 25

const [first, ...rest] = [10, 20, 30]; // first=10, rest=[20,30]`
              }
            ],
            exercise: "Use destructuring to swap two variables `a` and `b` without a temp variable."
          },
          {
            id: 'js-i-es6-2',
            title: 'Spread & Rest Operators',
            content: "`...` expands iterables (Spread) or collects arguments (Rest).",
            codeExamples: [
              {
                title: "Spread",
                code: `const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // Copy and expand
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 };`
              },
              {
                title: "Rest Parameters",
                code: `function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));`
              }
            ],
            exercise: "Write a function using Rest parameters that takes any number of arguments and returns the maximum value."
          },
          {
            id: 'js-i-es6-3',
            title: 'Default Parameters',
            content: "Set default values for function parameters to handle `undefined` inputs.",
            codeExamples: [
              {
                title: "Defaults",
                code: `function greet(name = "Guest") {
    console.log(\`Hello, \${name}\`);
}
greet(); // Hello, Guest`
              }
            ],
            exercise: "Create a function `calculateArea` that calculates the area of a rectangle, defaulting `height` to be the same as `width` (a square) if not provided."
          }
        ]
      },
      {
        id: 'js-int-classes',
        title: '2. Classes & Modules',
        subTopics: [
          {
            id: 'js-i-cls-1',
            title: 'Classes & Inheritance',
            content: "ES6 Classes provide a cleaner syntax for OOP. `extends` creates a subclass.",
            codeExamples: [
              {
                title: "Class Definition",
                code: `class Animal {
    constructor(name) { this.name = name; }
    speak() { console.log(this.name + " makes a noise."); }
}

class Dog extends Animal {
    speak() { console.log(this.name + " barks."); }
}
const d = new Dog("Rex");
d.speak();`
              }
            ],
            exercise: "Create a `Rectangle` class with a getter for `area`."
          },
          {
            id: 'js-i-cls-2',
            title: 'Modules (Import/Export)',
            content: "Split code into multiple files for better organization.",
            codeExamples: [
              {
                title: "Exporting",
                code: `// math.js
export const add = (a, b) => a + b;
export default function multiply(a, b) { return a * b; }`
              },
              {
                title: "Importing",
                code: `// main.js
import multiply, { add } from './math.js';
console.log(add(2, 3));`
              }
            ],
            exercise: "Create a utility module that exports string manipulation functions (capitalize, reverse) and import them in another file."
          }
        ]
      },
      {
        id: 'js-int-advfunc',
        title: '3. Advanced Functions',
        subTopics: [
          {
            id: 'js-i-af-1',
            title: 'Closures & IIFE',
            content: "**Closures**: Functions that remember their lexical scope.\n**IIFE**: Immediately Invoked Function Expressions run as soon as defined.",
            codeExamples: [
              {
                title: "Closure",
                code: `function outer() {
    let count = 0;
    return function inner() {
        count++;
        return count;
    }
}
const counter = outer();
console.log(counter()); // 1`
              },
              {
                title: "IIFE",
                code: `(function() {
    console.log("I run immediately!");
})();`
              }
            ],
            exercise: "Create a closure `secretMessage` that stores a string and only allows reading it via a returned function, but not modifying it."
          },
          {
            id: 'js-i-af-2',
            title: 'Call, Apply, Bind',
            content: "Methods to explicitly set the `this` context for a function.",
            codeExamples: [
              {
                title: "Using Bind",
                code: `const person = { name: "Alice" };
function greet(greeting) {
    console.log(\`\${greeting}, \${this.name}\`);
}
const greetAlice = greet.bind(person);
greetAlice("Hello");`
              }
            ],
            exercise: "Use `call` to invoke a function belonging to one object on a different object."
          },
          {
            id: 'js-i-af-3',
            title: 'Higher-Order Functions',
            content: "Functions that take other functions as arguments or return them.",
            codeExamples: [
              {
                title: "HOF",
                code: `function repeat(n, action) {
    for (let i = 0; i < n; i++) action(i);
}
repeat(3, console.log);`
              }
            ],
            exercise: "Write a function `filterArray` that takes an array and a test function, returning a new array with elements that pass the test."
          }
        ]
      },
      {
        id: 'js-int-async',
        title: '4. Asynchronous JavaScript',
        subTopics: [
          {
            id: 'js-i-async-1',
            title: 'Promises',
            content: "Represents eventual completion (or failure) of an async operation. States: Pending, Fulfilled, Rejected.",
            codeExamples: [
              {
                title: "Creating Promise",
                code: `const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
});

myPromise
  .then(val => console.log(val))
  .catch(err => console.error(err));`
              }
            ],
            exercise: "Create a promise that rejects if a random number > 0.5, otherwise resolves."
          },
          {
            id: 'js-i-async-2',
            title: 'Async / Await',
            content: "Syntactic sugar for Promises making async code look synchronous.",
            codeExamples: [
              {
                title: "Async Function",
                code: `async function fetchData() {
    try {
        let response = await fetch('https://api.example.com');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}`
              }
            ],
            exercise: "Rewrite a `.then()` chain using `async/await`."
          },
          {
            id: 'js-i-async-3',
            title: 'Event Loop',
            content: "Understanding how JS handles async operations via the Call Stack, Web APIs, and Task Queue.",
            codeExamples: [
              {
                title: "Execution Order",
                code: `console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
// Output: 1, 3, 2`
              }
            ],
            exercise: "Predict the output order of a code block containing synchronous logs, a `setTimeout`, and a `Promise.resolve().then()`."
          }
        ]
      },
      {
        id: 'js-int-api',
        title: '5. APIs & Storage',
        subTopics: [
          {
            id: 'js-i-api-1',
            title: 'Fetch API & HTTP Methods',
            content: "Make HTTP requests. Understand GET, POST, PUT, DELETE.",
            codeExamples: [
              {
                title: "GET Request",
                code: `fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json));`
              },
              {
                title: "POST Request",
                code: `fetch('https://api.com/users', {
    method: 'POST',
    body: JSON.stringify({ name: 'Bob' }),
    headers: { 'Content-Type': 'application/json' }
});`
              }
            ],
            exercise: "Fetch a list of users from a public API and display their names in the console."
          },
          {
            id: 'js-i-api-2',
            title: 'Local & Session Storage',
            content: "Save key-value pairs in the browser.\n*   **LocalStorage**: Persists forever.\n*   **SessionStorage**: Persists for the session.",
            codeExamples: [
              {
                title: "Storage Usage",
                code: `// Save
localStorage.setItem('username', 'Alice');

// Retrieve
const user = localStorage.getItem('username');

// Clear
localStorage.removeItem('username');`
              }
            ],
            exercise: "Build a form that saves the user's input to LocalStorage so it stays when they reload the page."
          }
        ]
      },
      {
        id: 'js-int-err',
        title: '6. Error Handling',
        subTopics: [
          {
            id: 'js-i-err-1',
            title: 'Custom Errors',
            content: "Extending the `Error` class to create application-specific errors.",
            codeExamples: [
              {
                title: "Custom Error Class",
                code: `class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
throw new ValidationError("Invalid input");`
              }
            ],
            exercise: "Write a function that throws a custom `NetworkError` if a fetch operation fails."
          }
        ]
      },
      {
        id: 'js-int-proj',
        title: '7. Intermediate Projects',
        subTopics: [
          {
            id: 'js-i-proj-1',
            title: 'Project 1: Weather App',
            content: "Fetch API + DOM. Display weather based on city input.",
            codeExamples: [{ title: "API Pattern", code: `async function getWeather(city) {
  const res = await fetch(\`https://api.weatherapi.com/v1/current.json?key=KEY&q=\${city}\`);
  const data = await res.json();
  display(data);
}` }],
            exercise: "Display temperature in both Celsius and Fahrenheit."
          },
          {
            id: 'js-i-proj-2',
            title: 'Project 2: Movie Search App',
            content: "Search movies (TMDB API), display posters, use Async/Await.",
            codeExamples: [{ title: "Grid Layout", code: `data.results.forEach(movie => {
  const div = document.createElement('div');
  div.innerHTML = \`<img src="\${imgUrl + movie.poster_path}"><h3>\${movie.title}</h3>\`;
  grid.appendChild(div);
})` }],
            exercise: "Implement a 'Details' view when a movie is clicked."
          },
          {
            id: 'js-i-proj-3',
            title: 'Project 3: Notes App',
            content: "Create, edit, delete notes. Persist in LocalStorage.",
            codeExamples: [{ title: "Sync Storage", code: `function save() { localStorage.setItem('notes', JSON.stringify(notes)); }
function load() { notes = JSON.parse(localStorage.getItem('notes') || '[]'); }` }],
            exercise: "Add markdown support to the notes."
          },
          {
            id: 'js-i-proj-4',
            title: 'Project 4: Expense Tracker',
            content: "Add income/expense, calculate total balance, filter history.",
            codeExamples: [{ title: "Calculation", code: `const total = transactions.reduce((acc, item) => acc + item.amount, 0);` }],
            exercise: "Visualize expenses using a simple chart or progress bars."
          }
        ]
      }
    ]
  },
  Advanced: {
    introduction: "🔴 Level 3: Advanced. Become job-ready & build full-stack applications with JavaScript.",
    topics: [
      {
        id: 'js-adv-oop',
        title: '1. Advanced OOP',
        subTopics: [
          {
            id: 'js-a-oop-1',
            title: 'Prototype Chain',
            content: "JavaScript is prototype-based. Objects inherit properties and methods directly from other objects via the prototype chain.",
            codeExamples: [
              {
                title: "Prototypes",
                code: `function Person(name) { this.name = name; }
Person.prototype.hello = function() { console.log(this.name); }

const p = new Person("Eve");
console.log(p.__proto__ === Person.prototype); // true`
              },
              {
                title: "Inheritance Chain",
                code: `const parent = { greet: () => "Hi" };
const child = Object.create(parent);
console.log(child.greet()); // "Hi" - found up the chain`
              }
            ],
            exercise: "Add a method `shuffle` to `Array.prototype` that shuffles array elements in place."
          },
          {
            id: 'js-a-oop-2',
            title: 'Deep "this"',
            content: "Understanding `this` context in global, object, arrow functions, and event listeners.",
            codeExamples: [
              {
                title: "Context Loss",
                code: `const obj = {
  name: "Me",
  speak() { setTimeout(function() { console.log(this.name); }, 100) } 
};
obj.speak(); // undefined (this is window/undefined)`
              },
              {
                title: "Context Fix",
                code: `// Use Arrow function
speak() { setTimeout(() => console.log(this.name), 100) }`
              }
            ],
            exercise: "Explain the value of `this` inside a click event listener vs an arrow function inside that listener."
          }
        ]
      },
      {
        id: 'js-adv-design',
        title: '2. Design Patterns',
        subTopics: [
          {
            id: 'js-a-dp-1',
            title: 'Module & Factory',
            content: "Structuring code for encapsulation and creation.",
            codeExamples: [
              {
                title: "Module Pattern",
                code: `const Bank = (() => {
    let balance = 0; // Private
    return {
        deposit(amt) { balance += amt; },
        get() { return balance; }
    };
})();`
              },
              {
                title: "Factory Pattern",
                code: `const createPC = (ram) => ({
    ram,
    boot() { console.log("Booting with " + ram); }
});`
              }
            ],
            exercise: "Implement a 'User' Factory that creates users with 'admin' or 'guest' privileges."
          },
          {
            id: 'js-a-dp-2',
            title: 'Observer & Singleton',
            content: "**Observer**: One-to-many dependency (Events). **Singleton**: Restrict class to one instance.",
            codeExamples: [
              {
                title: "Singleton",
                code: `const Singleton = {
    instance: null,
    getInstance() {
        if (!this.instance) this.instance = { id: Math.random() };
        return this.instance;
    }
};`
              }
            ],
            exercise: "Implement a simple Event Emitter (Observer pattern) with `on` and `emit` methods."
          }
        ]
      },
      {
        id: 'js-adv-browser',
        title: '3. Browser Internals',
        subTopics: [
          {
            id: 'js-a-bi-1',
            title: 'Event Loop Deep Dive',
            content: "Microtasks (Promises) vs Macrotasks (setTimeout). Render steps.",
            codeExamples: [
              {
                title: "Priority",
                code: `console.log(1);
setTimeout(() => console.log(2), 0); // Macro
Promise.resolve().then(() => console.log(3)); // Micro
console.log(4);
// Order: 1, 4, 3, 2`
              }
            ],
            exercise: "Create a loop that blocks the main thread and observe how it freezes the UI."
          }
        ]
      },
      {
        id: 'js-adv-ts',
        title: '4. TypeScript',
        subTopics: [
          {
            id: 'js-a-ts-1',
            title: 'Types, Interfaces, Generics',
            content: "Static typing for JS. Essential for scalable apps.",
            codeExamples: [
              {
                title: "Interface",
                code: `interface User {
    id: number;
    name: string;
    role?: 'admin' | 'user';
}`
              },
              {
                title: "Generics",
                code: `function identity<T>(arg: T): T {
    return arg;
}`
              }
            ],
            exercise: "Convert a JS function that takes two arguments and returns a boolean into TypeScript."
          }
        ]
      },
      {
        id: 'js-adv-react',
        title: '5. Frontend Frameworks (React)',
        subTopics: [
          {
            id: 'js-a-re-1',
            title: 'Components & State',
            content: "Component-based architecture. `useState`, `useEffect` hooks.",
            codeExamples: [
              {
                title: "React Component",
                code: `function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(c => c+1)}>{count}</button>;
}`
              }
            ],
            exercise: "Create a React component that fetches data from an API on mount (`useEffect`)."
          },
          {
            id: 'js-a-re-2',
            title: 'State Management',
            content: "Managing global state with Context API or Redux.",
            codeExamples: [
              {
                title: "Context API",
                code: `const ThemeContext = createContext('light');
const theme = useContext(ThemeContext);`
              }
            ],
            exercise: "Set up a simple Context to share a 'user' object across components."
          }
        ]
      },
      {
        id: 'js-adv-node',
        title: '6. Backend (Node.js)',
        subTopics: [
          {
            id: 'js-a-no-1',
            title: 'Express & REST APIs',
            content: "Building servers using Express. Middleware pattern.",
            codeExamples: [
              {
                title: "Express App",
                code: `const express = require('express');
const app = express();
app.use(express.json()); // Middleware

app.get('/api', (req, res) => res.json({ msg: 'Hi' }));
app.listen(3000);`
              }
            ],
            exercise: "Create a POST endpoint that accepts JSON data and saves it to an array."
          },
          {
            id: 'js-a-no-2',
            title: 'Auth & DB',
            content: "JWT (JSON Web Tokens) for stateless auth. Connecting to MongoDB.",
            codeExamples: [
              {
                title: "JWT Signing",
                code: `const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });`
              }
            ],
            exercise: "Create a middleware that verifies the JWT token from the request header."
          }
        ]
      },
      {
        id: 'js-adv-devops',
        title: '7. DevOps & Deployment',
        subTopics: [
          {
            id: 'js-a-dev-1',
            title: 'Git & CI/CD',
            content: "Version control and automated deployment pipelines.",
            codeExamples: [
              {
                title: "Git Commands",
                code: `git init
git add .
git commit -m "First commit"
git push origin main`
              }
            ],
            exercise: "Initialize a git repository and create a `.gitignore` file for `node_modules`."
          }
        ]
      },
      {
        id: 'js-adv-proj',
        title: '8. Advanced Projects',
        subTopics: [
          {
            id: 'js-a-proj-1',
            title: 'Project 1: E-commerce Website',
            content: "Full-Stack MERN (Mongo, Express, React, Node). Features: Product Listings, Cart, Stripe Payments, User Auth.",
            codeExamples: [{ title: "Redux State", code: `const cartSlice = createSlice({ name: 'cart', initialState: [], reducers: { addItem: ... } })` }],
            exercise: "Design the database schema for Orders and Products."
          },
          {
            id: 'js-a-proj-2',
            title: 'Project 2: Social Media App',
            content: "Real-time interactions using Socket.io. Features: Feed, Likes, Comments, Chat.",
            codeExamples: [{ title: "Socket Event", code: `io.on('connection', (socket) => { socket.on('sendMessage', (msg) => io.emit('message', msg)); });` }],
            exercise: "Implement image upload using Cloudinary or AWS S3."
          },
          {
            id: 'js-a-proj-3',
            title: 'Project 3: Blog CMS',
            content: "Content Management System. Features: Markdown editor, Admin Dashboard, RBAC (Role Based Access Control).",
            codeExamples: [{ title: "Auth Middleware", code: `if (req.user.role !== 'admin') return res.status(403).send('Access Denied');` }],
            exercise: "Create an admin panel to approve or delete comments."
          },
          {
            id: 'js-a-proj-4',
            title: 'Project 4: Food Delivery API',
            content: "Microservices Architecture. Services: Auth, Order, Restaurant, Delivery. Use RabbitMQ/Kafka for communication.",
            codeExamples: [{ title: "Service Communication", code: `channel.sendToQueue('orders', Buffer.from(JSON.stringify(orderData)));` }],
            exercise: "Create a separate service that listens for new orders and sends email notifications."
          }
        ]
      }
    ]
  }
};
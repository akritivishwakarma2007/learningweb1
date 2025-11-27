
import { LanguageContent } from '../types';

export const javascriptContent: LanguageContent = {
  Beginner: {
    introduction: "Start your web development journey.",
    topics: [
      {
        id: 'js-beg-basics',
        title: '1. Core Basics',
        subTopics: [
          {
            id: 'js-b-1',
            title: 'Variables & Data Types',
            content: "In JavaScript, variables are containers for storing data values. Modern JavaScript (ES6) introduced `let` and `const` to replace the function-scoped `var`.\n\n*   **`const`**: Use this by default. It declares a read-only named constant that cannot be reassigned.\n*   **`let`**: Use this when you know the variable's value will change (e.g., counters).\n*   **`var`**: Avoid using this in modern code. It is function-scoped and hoisted, which can lead to bugs.",
            codeExamples: [{
                title: "Declaration Types",
                code: `let name = "Alice";  // Reassignable
const age = 30;      // Immutable reference (cannot do age = 31)
var old = "Legacy";  // Function scoped (Avoid in modern code)`
            }, {
                title: "Template Literals",
                code: `const item = "Coffee";
const price = 5;

// Backticks (\`) allow embedded expressions using \${}
console.log(\`One \${item} costs $\${price}\`);`
            }],
            exercise: "Declare a `const` for the number of hours in a day. Try to change it and observe the error in the console."
          },
          {
            id: 'js-b-2',
            title: 'Functions',
            content: "Functions are blocks of reusable code. ES6 introduced **Arrow Functions**, which provide a concise syntax and lexically bind the `this` value (useful in callbacks).",
            codeExamples: [{
                title: "Function Declaration",
                code: `function add(a, b) {
  return a + b;
}`
            }, {
                title: "Arrow Functions",
                code: `// Concise syntax for simple returns
const multiply = (a, b) => a * b;

// Block syntax for complex logic
const greet = name => {
    const message = "Hi " + name;
    console.log(message);
};`
            }],
            exercise: "Write an arrow function called `subtract` that takes two numbers and returns their difference."
          }
        ]
      },
      {
          id: 'js-beg-arrays',
          title: '2. Arrays & Objects',
          subTopics: [
              {
                  id: 'js-b-a-1',
                  title: 'Array Methods',
                  content: "Arrays are high-level, list-like objects. Modern JavaScript provides powerful functional methods to manipulate arrays without writing manual loops.\n\n*   **`map()`**: Creates a new array by applying a function to every element.\n*   **`filter()`**: Creates a new array with all elements that pass the test.\n*   **`reduce()`**: Reduces the array to a single value (e.g., summing numbers).",
                  codeExamples: [{
                      title: "Map, Filter, Reduce",
                      code: `const nums = [1, 2, 3, 4];

// Transform: [2, 4, 6, 8]
const doubled = nums.map(n => n * 2);

// Filter: [2, 4]
const evens = nums.filter(n => n % 2 === 0);

// Accumulate: 10
const sum = nums.reduce((acc, curr) => acc + curr, 0);`
                  }, {
                      title: "Spread Operator",
                      code: `const parts = [1, 2];
// ... expands the array into individual elements
const whole = [0, ...parts, 3]; 
console.log(whole); // [0, 1, 2, 3]`
                  }],
                  exercise: "Given `[10, 20, 30, 40]`, use `map` to divide each number by 10, then use `filter` to keep only numbers greater than 2."
              }
          ]
      }
    ]
  },
  Intermediate: {
    introduction: "Deep dive into the DOM and Async.",
    topics: [
      {
        id: 'js-int-dom',
        title: '1. DOM Manipulation',
        subTopics: [
          {
            id: 'js-i-d-1',
            title: 'Selecting & Changing Elements',
            content: "The Document Object Model (DOM) is an interface that treats an HTML document as a tree structure. JavaScript can change all the HTML elements, attributes, and CSS styles in the page.\n\n*   `querySelector()`: Returns the first element that matches a CSS selector.\n*   `addEventListener()`: Attaches an event handler to an element without overwriting existing handlers.",
            codeExamples: [{
                title: "Query Selectors",
                code: `// Select by class
const btn = document.querySelector('.submit-btn');

// Select multiple elements
const allItems = document.querySelectorAll('li');

btn.textContent = "Processing...";
btn.style.backgroundColor = "blue";`
            }, {
                title: "Event Listeners",
                code: `document.getElementById('myBtn')
  .addEventListener('click', (e) => {
    // e is the event object
    console.log('Clicked element:', e.target);
    e.preventDefault(); // Stop default form submission
  });`
            }],
            exercise: "Write code to select an element with id `header` and change its text color to 'red' when clicked."
          }
        ]
      },
      {
        id: 'js-int-async',
        title: '2. Asynchronous JS',
        subTopics: [
          {
            id: 'js-i-a-1',
            title: 'Promises & Async/Await',
            content: "JavaScript is single-threaded. To perform time-consuming operations (like network requests) without freezing the UI, it uses asynchronous programming.\n\n*   **Promises**: Objects representing the eventual completion (or failure) of an async operation.\n*   **Async/Await**: Syntactic sugar built on top of Promises, making async code look and behave like synchronous code.",
            codeExamples: [{
                title: "Using Fetch (Promises)",
                code: `fetch('https://api.example.com/users')
  .then(response => response.json()) // Returns a promise
  .then(data => console.log(data))
  .catch(error => console.error(error));`
            }, {
                title: "Async/Await (Modern)",
                code: `async function getUser() {
  try {
      const res = await fetch('https://api.example.com/user');
      const data = await res.json();
      return data;
  } catch (err) {
      console.log("Error fetching user", err);
  }
}`
            }],
            exercise: "Create a function `wait` that returns a Promise resolving after 2 seconds. Use `await` to pause execution."
          }
        ]
      }
    ]
  },
  Advanced: {
    introduction: "Professional patterns and APIs.",
    topics: [
      {
        id: 'js-adv-es6',
        title: '1. Advanced ES6+',
        subTopics: [
          {
            id: 'js-a-e-1',
            title: 'Destructuring & Modules',
            content: "**Destructuring** is a special syntax that allows you to 'unpack' arrays or objects into a bunch of distinct variables. **Modules** allow you to split your code into separate files, making it easier to maintain and reuse.",
            codeExamples: [{
                title: "Object Destructuring",
                code: `const user = { 
  id: 1, 
  profile: { name: "Bob", role: "Admin" } 
};

// Extract 'id' and 'name' directly
const { id, profile: { name } } = user;

console.log(name); // Bob`
            }, {
                title: "ES Modules",
                code: `// math.js
export const add = (a, b) => a + b;
export default function subtract(a, b) { return a - b; }

// main.js
import subtract, { add } from './math.js';
console.log(add(2, 3));`
            }],
            exercise: "Given an array `[100, 200]`, use array destructuring to assign these values to variables `width` and `height`."
          }
        ]
      },
      {
          id: 'js-adv-proto',
          title: '2. Prototypes & Classes',
          subTopics: [
              {
                  id: 'js-a-p-1',
                  title: 'Prototypal Inheritance',
                  content: "JavaScript is prototype-based. Even when using the `class` keyword, it is just 'syntactic sugar' over the existing prototype-based inheritance. Classes allow you to define blueprints for creating objects with shared methods.",
                  codeExamples: [{
                      title: "Class Syntax",
                      code: `class Car {
  constructor(brand) {
    this.brand = brand;
  }
  
  drive() {
    return this.brand + " is driving";
  }
}

// Inheritance
class Tesla extends Car {
  drive() {
    return super.drive() + " silently";
  }
}

const myCar = new Tesla("Model S");
console.log(myCar.drive());`
                  }],
                  exercise: "Create a class `Animal` with a method `eat()`. Create a subclass `Dog` that overrides `eat()` to print 'Dog eating'."
              }
          ]
      }
    ]
  }
};

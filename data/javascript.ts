import { LanguageContent } from '../types';

export const javascriptContent: LanguageContent = {
  Beginner: {
    introduction: "Level 1: Beginner. Master JavaScript fundamentals, DOM manipulation, events, and build real interactive web apps from scratch. No prior knowledge needed.",
    topics: [
      {
        id: 'js-beg-intro',
        title: '1. Introduction & Setup',
        subTopics: [
          {
            id: 'js-b-intro-1',
            title: 'What is JavaScript?',
            content: "JavaScript is the only programming language that runs in every web browser. It makes websites interactive — from simple button clicks to complex apps like Gmail or Facebook.\n\n• Created in 1995 by Brendan Eich\n• Originally called 'Mocha', then 'LiveScript', finally 'JavaScript'\n• Runs on the client (browser) and server (Node.js)\n• One of the 3 core web technologies: HTML + CSS + JavaScript",
            codeExamples: [
              {
                title: "Your First JavaScript",
                code: `<script>
  console.log("Hello, World!");
  alert("Welcome to JavaScript!");
</script>`
              },
              {
                title: "External File (Recommended)",
                code: `<!-- index.html -->
<script src="script.js"></script>

<!-- script.js -->
console.log("Loaded from external file!");`
              }
            ],
            exercise: "Create an HTML file with a button. When clicked, show an alert saying 'Button Clicked!' using inline script first, then move it to external file."
          },
          {
            id: 'js-b-intro-2',
            title: 'Tools You Need',
            content: "Best free setup in 2025:\n\n1. VS Code (code editor)\n2. Live Server extension (instant preview)\n3. Chrome/Firefox browser\n\nPro Tip: Use F12 → Console tab to see errors and console.log() output.",
            codeExamples: [
              {
                title: "Console is Your Best Friend",
                code: `console.log("Debugging message");
console.warn("Warning!");
console.error("Something went wrong!");`
              }
            ],
            exercise: "Open any website, press F12, type alert('Hacked!') in console and press Enter. See what happens!"
          }
        ]
      },

      {
        id: 'js-beg-basics',
        title: '2. Variables & Data Types',
        subTopics: [
          {
            id: 'js-b-base-1',
            title: 'Variables (let, const, var)',
            content: "Variables store data. Modern JavaScript uses:\n\n• const → cannot be reassigned (use 90% of time)\n• let → can be reassigned\n• var → old way, avoid (has scope bugs)",
            codeExamples: [
              {
                title: "Good vs Bad Practice",
                code: `const name = "Rahul";     // Can't change
let age = 22;              // Can change
age = 23;                  // OK

// Don't use var
var city = "Delhi";        // Avoid!`
              },
              {
                title: "Block Scope Example",
                code: `if (true) {
    let x = 10;
    const y = 20;
    var z = 30;
}
// console.log(x); // Error!
// console.log(y); // Error!
console.log(z);    // 30 (var leaks!)`
              }
            ],
            exercise: "Create const for your name and birth year. Try to reassign them. See what error appears for const."
          },
          {
            id: 'js-b-base-2',
            title: '8 Primitive Data Types',
            content: "JavaScript has 8 basic types:\n\n1. string → text\n2. number → integers & decimals\n3. boolean → true/false\n4. undefined → not assigned\n5. null → intentionally empty\n6. bigint → very large numbers\n7. symbol → unique identifiers\n8. object → complex data (arrays, functions, etc.)",
            codeExamples: [
              {
                title: "All Primitive Types",
                code: `const name = "Priya";           // string
const score = 95.5;              // number
const isPassed = true;           // boolean
let job;                         // undefined
const empty = null;              // null
const huge = 123456789012345n;   // bigint
const id = Symbol("id");         // symbol

console.log(typeof score);       // "number"
console.log(typeof null);        // "object" (famous bug!)`
              }
            ],
            exercise: "Create one variable of each type and use typeof to check them."
          },
          {
            id: 'js-b-base-3',
            title: 'Operators',
            content: "Operators perform actions on values:\n\n• Arithmetic: +, -, *, /, %, ** (power)\n• Assignment: =, +=, -=, *=\n• Comparison: == (loose), === (strict), >, <, >=, <=\n• Logical: && (AND), || (OR), ! (NOT)",
            codeExamples: [
              {
                title: "Strict vs Loose Equality",
                code: `console.log(5 == "5");   // true (converts type)
console.log(5 === "5");  // false (recommended!)
console.log("hello" != "Hello"); // true (case sensitive)`
              },
              {
                title: "Logical Operators",
                code: `const age = 20;
const hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Can drive");
}

if (age < 13 || age > 60) {
    console.log("Special care needed");
}`
              },
              {
                title: "Ternary Operator",
                code: `const result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Adult`
              }
            ],
            exercise: "Write a ternary expression: if temperature > 30 → 'Hot', else → 'Cold'"
          }
        ]
      },

      {
        id: 'js-beg-ctrl',
        title: '3. Control Flow',
        subTopics: [
          {
            id: 'js-b-ctrl-1',
            title: 'if / else if / else',
            content: "Make decisions in code based on conditions.",
            codeExamples: [
              {
                title: "Grade System",
                code: `const marks = 88;

if (marks >= 90) {
    console.log("A+ Grade");
} else if (marks >= 80) {
    console.log("A Grade");
} else if (marks >= 70) {
    console.log("B Grade");
} else {
    console.log("Need improvement");
}`
              },
              {
                title: "Nested Conditions",
                code: `const isRaining = true;
const hasUmbrella = false;

if (isRaining) {
    if (hasUmbrella) {
        console.log("Go out safely");
    } else {
        console.log("Stay home!");
    }
}`
              }
            ],
            exercise: "Write a program that takes a number and prints 'Positive', 'Negative', or 'Zero'."
          },
          {
            id: 'js-b-ctrl-2',
            title: 'switch Statement',
            content: "Alternative to long if-else chains when comparing one value.",
            codeExamples: [
              {
                title: "Day Name from Number",
                code: `const day = 3;
let dayName;

switch (day) {
    case 1: dayName = "Monday"; break;
    case 2: dayName = "Tuesday"; break;
    case 3: dayName = "Wednesday"; break;
    case 4: dayName = "Thursday"; break;
    case 5: dayName = "Friday"; break;
    case 6: dayName = "Saturday"; break;
    case 7: dayName = "Sunday"; break;
    default: dayName = "Invalid day";
}

console.log("Today is " + dayName);`
              }
            ],
            exercise: "Create a switch that converts month number (1-12) to month name."
          },
          {
            id: 'js-b-ctrl-3',
            title: 'Loops (for, while, do-while)',
            content: "Repeat code multiple times.",
            codeExamples: [
              {
                title: "For Loop (Most Used)",
                code: `// Print 1 to 10
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;  // skip 5
    if (i === 8) break;     // stop at 8
    console.log(i);
}`
              },
              {
                title: "While Loop",
                code: `let count = 5;
while (count > 0) {
    console.log("Countdown: " + count);
    count--;
}`
              },
              {
                title: "Do-While (Runs at least once)",
                code: `let password;
do {
    password = prompt("Enter password:");
} while (password !== "1234");
alert("Access granted!");`
              }
            ],
            exercise: "Use a for loop to print multiplication table of 5 (5 × 1 = 5 ... 5 × 10 = 50)."
          }
        ]
      },

      {
        id: 'js-beg-func',
        title: '4. Functions',
        subTopics: [
          {
            id: 'js-b-func-1',
            title: 'Function Declaration & Expression',
            content: "Functions are reusable code blocks.",
            codeExamples: [
              {
                title: "Function Declaration (Hoisted)",
                code: `greet("Ram"); // Works even before declaration!

function greet(name) {
    console.log("Hello " + name);
}`
              },
              {
                title: "Function Expression (Not Hoisted)",
                code: `// greet("Shyam"); // Error!

const greet = function(name) {
    console.log("Hi " + name);
};`
              }
            ],
            exercise: "Write a function isEven(number) that returns true if number is even."
          },
          {
            id: 'js-b-func-2',
            title: 'Arrow Functions (ES6+)',
            content: "Modern, shorter syntax. Great for callbacks.",
            codeExamples: [
              {
                title: "Arrow Function Syntax",
                code: `// Regular
function add(a, b) { return a + b; }

// Arrow
const add = (a, b) => a + b;

// Single parameter
const square = x => x * x;

// No parameters
const sayHi = () => "Hello!";`
              }
            ],
            exercise: "Convert this function to arrow: function multiply(a, b) { return a * b; }"
          },
          {
            id: 'js-b-func-3',
            title: 'Parameters & Return',
            content: "Pass data into functions and get results back.",
            codeExamples: [
              {
                title: "Default Parameters",
                code: `function welcome(name = "Guest") {
    return "Welcome " + name + "!";
}

console.log(welcome());      // Welcome Guest!
console.log(welcome("Priya")); // Welcome Priya!`
              },
              {
                title: "Multiple Return Values",
                code: `function getUser() {
    return {
        name: "Arjun",
        age: 25,
        city: "Mumbai"
    };
}

const user = getUser();
console.log(user.name);`
              }
            ],
            exercise: "Write a function calculateArea(length, width = length) that returns area of rectangle (or square if only one value given)."
          }
        ]
      },

      {
        id: 'js-beg-arr',
        title: '5. Arrays',
        subTopics: [
          {
            id: 'js-b-arr-1',
            title: 'Creating & Basic Methods',
            content: "Arrays are ordered lists. Index starts from 0.",
            codeExamples: [
              {
                title: "Array Basics",
                code: `let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");     // add end
fruits.pop();              // remove last
fruits.unshift("Grape");   // add start
fruits.shift();            // remove first

console.log(fruits[1]);    // Banana
console.log(fruits.length); // 3`
              },
              {
                title: "Loop Through Array",
                code: `for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of (modern)
for (let fruit of fruits) {
    console.log(fruit);
}`
              }
            ],
            exercise: "Create an array of 5 colors. Add 2 more, remove first one, then print all."
          },
          {
            id: 'js-b-arr-2',
            title: 'Important Array Methods',
            content: "Must-know methods for real projects.",
            codeExamples: [
              {
                title: "map() - Transform",
                code: `const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2,4,6,8]`
              },
              {
                title: "filter() - Select",
                code: `const scores = [45, 88, 92, 34, 76];
const passed = scores.filter(s => s >= 50);
console.log(passed); // [88,92,76]`
              },
              {
                title: "find() & includes()",
                code: `const users = ["Ram", "Shyam", "Priya"];
console.log(users.includes("Ram"));     // true
console.log(users.find(u => u === "Ram")); // "Ram"`
              }
            ],
            exercise: "From array [10, 15, 20, 25, 30], use filter to get numbers > 18, then map to add 5 to each."
          }
        ]
      },

      {
        id: 'js-beg-obj',
        title: '6. Objects',
        subTopics: [
          {
            id: 'js-b-obj-1',
            title: 'Object Literal & Properties',
            content: "Objects store data in key-value pairs. Like real-world things.",
            codeExamples: [
              {
                title: "Creating Objects",
                code: `const student = {
    name: "Amit",
    age: 20,
    grade: "A",
    isPassed: true,
    greet: function() {
        console.log("Hi, I'm " + this.name);
    }
};

console.log(student.name);      // Amit
console.log(student["age"]);    // 20 (bracket notation)
student.city = "Delhi";         // add new property
student.age = 21;               // update`
              },
              {
                title: "this Keyword",
                code: `const car = {
    brand: "Toyota",
    start: function() {
        console.log(this.brand + " started!");
    }
};
car.start(); // Toyota started!`
              }
            ],
            exercise: "Create a 'phone' object with brand, model, price, and a method ring() that logs 'Ringing...'"
          }
        ]
      },

      {
        id: 'js-beg-dom',
        title: '7. DOM Manipulation',
        subTopics: [
          {
            id: 'js-b-dom-1',
            title: 'Selecting Elements',
            content: "DOM = Document Object Model. JS uses it to change HTML/CSS.",
            codeExamples: [
              {
                title: "Selection Methods",
                code: `// By ID
const title = document.getElementById("main-title");

// By class/tag
const items = document.querySelectorAll(".item");
const firstBtn = document.querySelector("button");

// Modern & powerful
const allParagraphs = document.querySelectorAll("p");`
              }
            ],
            exercise: "Select an element with id='output' and change its text to your name."
          },
          {
            id: 'js-b-dom-2',
            title: 'Changing Content & Style',
            content: "Update text, HTML, classes, and styles dynamically.",
            codeExamples: [
              {
                title: "Text & HTML",
                code: `title.textContent = "New Title";
title.innerHTML = "<em>Important!</em>";`

              },
              {
                title: "Style & Classes",
                code: `title.style.color = "red";
title.style.fontSize = "30px";
title.classList.add("highlight");
title.classList.remove("old");
title.classList.toggle("dark-mode");`
              },
              {
                title: "Create Elements",
                code: `const newLi = document.createElement("li");
newLi.textContent = "New Task";
document.getElementById("list").appendChild(newLi);`
              }
            ],
            exercise: "Create a button that adds a new <li> with text 'Hello' to a <ul> when clicked."
          },
          {
            id: 'js-b-dom-3',
            title: 'Events',
            content: "React to user actions: click, type, hover, submit, etc.",
            codeExamples: [
              {
                title: "Click Event",
                code: `document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
    this.style.backgroundColor = "green";
});`
              },
              {
                title: "Input & Key Events",
                code: `document.getElementById("nameInput").addEventListener("input", function(e) {
    console.log("Typing:", e.target.value);
});

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        console.log("Escape pressed!");
    }
});`
              },
              {
                title: "Form Submit",
                code: `document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop page reload
    console.log("Form submitted!");
});`
              }
            ],
            exercise: "Create an input that shows character count live as user types."
          }
        ]
      },

      {
        id: 'js-beg-proj',
        title: '8. Beginner Projects (Build These!)',
        subTopics: [
          {
            id: 'js-b-proj-1',
            title: 'Project 1: Interactive Calculator',
            content: "Full working calculator with buttons and display. Teaches DOM + events + logic.",
            codeExamples: [
              {
                title: "Minimal html code to run javascript ",
                code: `<!DOCTYPE html>
<html>
<head>
  <title>Calculator - JS Only</title>
  <style>
    input, button { font-size: 20px; padding: 10px; margin: 5px; }
    button { width: 60px; }
    #display { width: 280px; text-align: right; }
  </style>
</head>
<body>

  <h2>Simple Calculator</h2>
  <input type="text" id="display" value="0" readonly>
  <br><br>

  <button onclick="clearAll()">C</button>
  <button onclick="deleteLast()">←</button>
  <button onclick="addToDisplay('/')">/</button>
  <button onclick="addToDisplay('*')">×</button>
  <br>
  <button onclick="addToDisplay('7')">7</button>
  <button onclick="addToDisplay('8')">8</button>
  <button onclick="addToDisplay('9')">9</button>
  <button onclick="addToDisplay('-')">-</button>
  <br>
  <button onclick="addToDisplay('4')">4</button>
  <button onclick="addToDisplay('5')">5</button>
  <button onclick="addToDisplay('6')">6</button>
  <button onclick="addToDisplay('+')">+</button>
  <br>
  <button onclick="addToDisplay('1')">1</button>
  <button onclick="addToDisplay('2')">2</button>
  <button onclick="addToDisplay('3')">3</button>
  <button onclick="addToDisplay('=')" style="height: 60px;">=</button>
  <br>
  <button onclick="addToDisplay('0')" style="width: 130px;">0</button>
  <button onclick="addToDisplay('.')">.</button>
 <script src="script.js"></script>
</body>
</html>`

              },
               {
                title: "javascript code ",
                code: `
  <script>
    // Get the display
    const display = document.getElementById("display");

    // Add number/operator to display
    function addToDisplay(value) {
      // If user presses "=", calculate result
      if (value === "=") {
        calculate();
        return;
      }

      // If display is 0 or "Error", replace it
      if (display.value === "0" || display.value === "Error") {
        display.value = value;
      } else {
        display.value += value;
      }
    }

    // Clear everything
    function clearAll() {
      display.value = "0";
    }

    // Delete last character
    function deleteLast() {
      if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
      } else {
        display.value = "0";
      }
    }

    // Calculate the result
    function calculate() {
      try {
        // Replace × with * so eval understands
        let expression = display.value.replace(/×/g, "*");
        let result = eval(expression);

        // Show result (max 10 digits)
        display.value = result;
      } catch (error) {
        display.value = "Error";
      }
    }

    // Bonus: Keyboard support
    document.addEventListener("keydown", function(e) {
      if (e.key >= "0" && e.key <= "9") addToDisplay(e.key);
      if (e.key === ".") addToDisplay(".");
      if (e.key === "+") addToDisplay("+");
      if (e.key === "-") addToDisplay("-");
      if (e.key === "*") addToDisplay("×");
      if (e.key === "/") addToDisplay("/");
      if (e.key === "Enter" || e.key === "=") addToDisplay("=");
      if (e.key === "Backspace") deleteLast();
      if (e.key === "Escape") clearAll();
    });
  </script>`
              }
            ],
            exercise: "Add clear button and decimal point support."
          },
          {
            id: 'js-b-proj-2',
            title: 'Project 2: To-Do List',
            content: "Add, delete, and mark tasks as complete. Save to localStorage (bonus).",
            codeExamples: [
              {
                title: "Minimal html code to run javascript ",
                code: `<!DOCTYPE html>
<html>
<head>
  <title>To-Do List - Pure JS</title>
  <style>
    body { font-family: Arial; padding: 30px; background: #f4f4f4; }
    input { padding: 10px; width: 300px; font-size: 18px; }
    button { padding: 10px 15px; font-size: 18px; }
    ul { list-style: none; padding: 0; margin-top: 20px; }
    li { padding: 12px; background: white; margin: 8px 0; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
    .done { text-decoration: line-through; color: gray; }
    .delete { float: right; color: red; cursor: pointer; }
  </style>
</head>
<body>

  <h1>My To-Do List</h1>
  <input type="text" id="taskInput" placeholder="Enter a new task..." onkeypress="if(event.key==='Enter') addTask()">
  <button onclick="addTask()">Add Task</button>
  <button onclick="clearAll()">Clear All</button>

  <ul id="taskList"></ul>
 <script src="script.js"></script>
</body>
</html>`

              },
             {
  title: "JavaScript Code Only (Pure Logic)",
  code: `
// Get DOM elements
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

// Add new task
function addTask() {
  const text = input.value.trim();

  if (!text) {
    alert("Please enter a task!");
    return;
  }

  // Create new task item
  const li = document.createElement("li");
  li.innerHTML = \`
    \${text}
    <span class="delete" onclick="this.parentElement.remove()">Delete</span>
  \`;

  // Click task to toggle done (except delete button)
  li.onclick = function(e) {
    if (e.target.classList.contains("delete")) return;
    this.classList.toggle("done");
  };

  // Add to list
  list.appendChild(li);

  // Clear input and focus
  input.value = "";
  input.focus();
}

// Clear all tasks
function clearAll() {
  if (confirm("Delete all tasks?")) {
    list.innerHTML = "";
  }
}

// Optional: Press Enter to add task
// Add this to input: onkeypress="if(event.key==='Enter') addTask()"
`
}
            
            ],
            exercise: "Format time as HH:MM:SS with leading zeros."
          },
          {
            id: 'js-b-proj-4',
            title: 'Project 4: Random Password Generator',
            content: "Generate secure passwords with options for length and character types.",
            codeExamples: [
              {
                title: "Minimal Html code for javascript code",
                code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Generator</title>
  <style>
    body { font-family: Arial; text-align: center; padding: 40px; background: #f0f2f5; }
    .container { max-width: 500px; margin: 0 auto; background: white; padding: 30px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
    input[type="number"] { width: 80px; padding: 10px; font-size: 18px; }
    label { margin: 10px; font-size: 18px; }
    button { padding: 12px 24px; margin: 10px; font-size: 16px; cursor: pointer; }
    #password { font-size: 24px; margin: 20px; padding: 15px; background: #eee; border-radius: 8px; word-break: break-all; }
    .copy { background: #4CAF50; color: white; border: none; }
  </style>
</head>
<body>

  <div class="container">
    <h1>Random Password Generator</h1>

    <p>Length: <input type="number" id="length" value="16" min="4" max="50"></p>

    <p>
      <label><input type="checkbox" id="uppercase" checked> A-Z</label>
      <label><input type="checkbox" id="lowercase" checked> a-z</label>
      <label><input type="checkbox" id="numbers" checked> 0-9</label>
      <label><input type="checkbox" id="symbols" checked> !@#$%^&*</label>
    </p>

    <button onclick="generate()">Generate Password</button>
    <button class="copy" onclick="copyPassword()">Copy</button>

    <div id="password">Click "Generate" to create a password</div>
  </div>

  <!-- Link to external JS file -->
  <script src="script.js"></script>
</body>
</html>`
              },
              {
                title: "full javascript code for password logic",
                code: `function generate() {
  const length = parseInt(document.getElementById("length").value);
  const upper = document.getElementById("uppercase").checked;
  const lower = document.getElementById("lowercase").checked;
  const nums = document.getElementById("numbers").checked;
  const syms = document.getElementById("symbols").checked;

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let allChars = "";
  if (lower) allChars += lowerChars;
  if (upper) allChars += upperChars;
  if (nums)  allChars += numberChars;
  if (syms)  allChars += symbolChars;

  if (allChars === "") {
    alert("Please select at least one option!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("password").textContent = password;
}

function copyPassword() {
  const passwordText = document.getElementById("password").textContent;
  if (passwordText && passwordText !== "Click \"Generate\" to create a password") {
    navigator.clipboard.writeText(passwordText);
    alert("Password copied to clipboard!");
  }
}`
              }
            ],
            exercise: "Add checkboxes to include/exclude symbols and numbers."
          },
          {
            id: 'js-b-proj-5',
            title: 'Project 5: BMI Calculator',
            content: "Input height/weight → calculate BMI → show category (Underweight, Normal, etc.)",
            codeExamples: [
              {
                title: "BMI Formula",
                code: `function calculateBMI(weight, height) {
    return (weight / (height * height)).toFixed(2);
}

if (bmi < 18.5) category = "Underweight";
else if (bmi < 25) category = "Normal";
else if (bmi < 30) category = "Overweight";
else category = "Obese";`
              }
            ],
            exercise: "Add input validation and clear button."
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
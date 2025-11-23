import { ContentDatabase, Language } from './types';

// ==========================================
// HOW TO ADD MORE CONTENT
// ==========================================
// 1. To add a Language: Add an object to the `LANGUAGES` array.
// 2. To add Content: Add a key to the `CONTENT` object matching the language ID.
// 3. To add a Level: Inside the language object, add a key for 'Beginner', 'Intermediate', or 'Advanced'.
// 4. To add Topics: Add objects to the `topics` array within a level.

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
  }
];

export const CONTENT: ContentDatabase = {
  python: {
    Beginner: {
      introduction: "Welcome to Python! Python is a high-level, interpreted programming language known for its ease of learning and clean syntax.",
      topics: [
        {
          id: 'py-1',
          title: 'Variables & Data Types',
          content: "In Python, you don't need to declare variable types explicitly. The interpreter infers them.",
          codeExample: `name = "Alice"  # String
age = 25        # Integer
height = 5.9    # Float
is_student = True # Boolean

print(f"User {name} is {age} years old.")`,
          exercise: "Create variables for your favorite movie, release year, and rating. Print them in a sentence."
        },
        {
          id: 'py-2',
          title: 'Control Flow (If/Else)',
          content: "Python uses indentation (whitespace) to define blocks of code, unlike curly braces in other languages.",
          codeExample: `score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
else:
    print("Grade: C")`,
          exercise: "Write an if-statement that checks if a number is positive, negative, or zero."
        },
        {
          id: 'py-3',
          title: 'Loops (For & While)',
          content: "Loops allow you to repeat a block of code multiple times. `for` loops are used for iterating over sequences, while `while` loops run as long as a condition is true.",
          codeExample: `# For Loop
for i in range(5):
    print(f"Count: {i}")

# While Loop
count = 0
while count < 3:
    print("Hello!")
    count += 1`,
          exercise: "Write a loop that prints only the even numbers from 0 to 10."
        },
        // NEW TOPIC ADDED HERE
        {
          id: 'py-4',
          title: 'User Input',
          content: "You can ask the user for input using the `input()` function. Note that input always returns a string, so you may need to convert it.",
          codeExample: `# Basic Input
name = input("What is your name? ")
print(f"Hello, {name}!")

# Input with conversion
age_str = input("How old are you? ")
age = int(age_str) # Convert string to integer

print(f"Next year you will be {age + 1}.")`,
          exercise: "Ask the user for two numbers, add them together, and print the result."
        }
      ]
    },
    Intermediate: {
      introduction: "Ready to level up? Intermediate Python covers data structures, functions, and modules.",
      topics: [
        {
          id: 'py-int-1',
          title: 'Lists & Dictionaries',
          content: "Lists are ordered collections, while Dictionaries store key-value pairs. They are essential for handling data.",
          codeExample: `# List
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")

# Dictionary
person = {
    "name": "Alice",
    "city": "New York"
}
print(person["name"])`,
          exercise: "Create a list of 3 friends, then create a dictionary storing the phone number for one of them."
        },
        {
          id: 'py-int-2',
          title: 'Functions',
          content: "Functions are reusable blocks of code. Use `def` to define them.",
          codeExample: `def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

message = greet("Bob")
print(message)`,
          exercise: "Write a function `calculate_area(radius)` that returns the area of a circle."
        }
      ]
    }
  },
  javascript: {
    Beginner: {
      introduction: "JavaScript (JS) is the scripting language that enables you to create dynamically updating content, control multimedia, animate images, and much more.",
      topics: [
        {
          id: 'js-1',
          title: 'Variables (let vs const)',
          content: "Modern JS uses `let` for mutable variables and `const` for constants. Avoid using the older `var` keyword unless necessary.",
          // UPDATED: Added multiple examples here
          codeExample: `// 1. Using const (Cannot be reassigned)
const pi = 3.14;
// pi = 3.15; // Error!

// 2. Using let (Can be reassigned)
let count = 0;
count = count + 1;
console.log(count); // 1

// 3. Strings
const greeting = "Hello JS";
console.log(greeting);`,
          exercise: "Declare a constant for your birth year and a variable for your current age."
        },
        {
          id: 'js-2',
          title: 'Arrow Functions',
          content: "Arrow functions provide a concise syntax for writing function expressions.",
          codeExample: `const add = (a, b) => a + b;

console.log(add(5, 3)); // Output: 8`,
          exercise: "Convert `function multiply(x, y) { return x * y }` into an arrow function."
        },
        {
          id: 'js-3',
          title: 'Arrays',
          content: "Arrays are used to store multiple values in a single variable. You can access elements by their index (starting at 0).",
          codeExample: `const colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // Red

colors.push("Yellow"); // Adds to the end`,
          exercise: "Create an array of your top 3 favorite foods. Print the second one."
        },
        {
          id: 'js-4',
          title: 'Loops',
          content: "JavaScript supports various loops like `for`, `while`, and array methods like `forEach`.",
          codeExample: `// Standard For Loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}

// Array forEach
const items = ["A", "B", "C"];
items.forEach(item => console.log(item));`,
          exercise: "Write a loop that counts down from 10 to 1."
        }
      ]
    },
    Advanced: {
      introduction: "Advanced JavaScript focuses on asynchronous programming, closures, and modern ES6+ features.",
      topics: [
        {
          id: 'js-adv-1',
          title: 'Promises & Async/Await',
          content: "Handling asynchronous operations (like fetching data) is crucial in JS. Async/await makes this code look synchronous.",
          codeExample: `const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data", error);
  }
};`,
          exercise: "Write an async function that simulates waiting for 2 seconds (using setTimeout) and then logs 'Done'."
        },
        {
          id: 'js-adv-2',
          title: 'Destructuring',
          content: "Destructuring allows you to unpack values from arrays, or properties from objects, into distinct variables.",
          codeExample: `const user = { id: 1, name: 'John', role: 'Admin' };
const { name, role } = user;

console.log(name); // John`,
          exercise: "Given an array `const coords = [10, 20]`, use destructuring to extract x and y."
        }
      ]
    }
  },
  typescript: {
    Beginner: {
        introduction: "TypeScript builds on JavaScript by adding static type definitions. It saves you time by catching errors before you run the code.",
        topics: [
            {
                id: 'ts-1',
                title: 'Basic Types',
                content: "In TypeScript, you can explicitly define the type of a variable using a colon syntax.",
                codeExample: `let isDone: boolean = false;
let lines: number = 42;
let name: string = "Anders";

// name = 10; // Error: Type 'number' is not assignable to type 'string'.`,
                exercise: "Define three variables with explicit types: a boolean, a number, and a string."
            },
            {
                id: 'ts-2',
                title: 'Interfaces',
                content: "Interfaces are a powerful way to define the structure (shape) of an object.",
                codeExample: `interface User {
  id: number;
  username: string;
}

const user: User = {
  id: 1,
  username: "admin"
};`,
                exercise: "Create an interface 'Car' with properties 'make' (string) and 'year' (number), then create an object of that type."
            }
        ]
    }
  },
  java: {
    Beginner: {
        introduction: "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        topics: [
            {
                id: 'java-1',
                title: 'Hello World & Main',
                content: "Every Java application begins with a class definition and a `main` method.",
                codeExample: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
                exercise: "Write a program that prints your name and favorite hobby to the console."
            },
            {
                id: 'java-2',
                title: 'Variables & Primitives',
                content: "Java is statically typed. You must declare the variable type (int, double, boolean, char) before using it.",
                codeExample: `int myNum = 5;
float myFloatNum = 5.99f;
char myLetter = 'D';
boolean myBool = true;
String myText = "Hello";`,
                exercise: "Declare an integer variable for 'items' and a double for 'cost', then print the total cost."
            }
        ]
    },
    Intermediate: {
      introduction: "Intermediate Java focuses on Object-Oriented Programming (OOP) concepts like Inheritance and Polymorphism.",
      topics: [
        {
          id: 'java-int-1',
          title: 'Inheritance',
          content: "Inheritance allows one class to inherit attributes and methods from another.",
          codeExample: `class Vehicle {
  protected String brand = "Ford";
  public void honk() {
    System.out.println("Tuut, tuut!");
  }
}

class Car extends Vehicle {
  private String modelName = "Mustang";
  public static void main(String[] args) {
    Car myCar = new Car();
    myCar.honk();
    System.out.println(myCar.brand + " " + myCar.modelName);
  }
}`,
          exercise: "Create a class 'Animal' with a method 'sound()', and a subclass 'Dog' that overrides it to print 'Bark'."
        }
      ]
    }
  },
  go: {
    Beginner: {
        introduction: "Go (Golang) is an open source programming language that makes it easy to build simple, reliable, and efficient software.",
        topics: [
            {
                id: 'go-1',
                title: 'Hello World',
                content: "Go programs are organized into packages. The entry point is the `main` package.",
                codeExample: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
                exercise: "Modify the Hello World program to print 'Go is fun!' instead."
            },
            {
                id: 'go-2',
                title: 'Variables (Short Declaration)',
                content: "Inside functions, the `:=` short assignment statement can be used in place of a `var` declaration.",
                codeExample: `package main
import "fmt"

func main() {
    // Explicit
    var i int = 1
    
    // Short declaration (type inferred)
    k := 3 
    
    fmt.Println(i, k)
}`,
                exercise: "Use the short declaration operator to create a string variable named 'greeting'."
            }
        ]
    }
  }
};
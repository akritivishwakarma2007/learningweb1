
import { LanguageContent } from '../types';

export const javaContent: LanguageContent = {
  Beginner: {
    introduction: "Write once, run anywhere.",
    topics: [
      {
        id: 'java-beg-syn',
        title: '1. Syntax & Types',
        subTopics: [
          {
            id: 'java-b-1',
            title: 'Hello World & Structure',
            content: "Java is an Object-Oriented language. Every line of code must run inside a `class`. The `main` method is the entry point of any Java application. It is `static` so it can be called by the JVM without creating an object of the class.",
            codeExamples: [{
                title: "Main Class",
                code: `public class Main {
  public static void main(String[] args) {
      System.out.println("Hello World"); // Prints with new line
      System.out.print("Same line ");    // Prints without new line
      System.out.println("New line");
  }
}`
            }],
            exercise: "Write a complete Java class named `Greeting` that prints 'Java is fun' inside its main method."
          },
          {
            id: 'java-b-2',
            title: 'Variables & Primitives',
            content: "Java is statically typed. It has 8 primitive data types (`int`, `byte`, `short`, `long`, `float`, `double`, `boolean`, `char`) which store simple values directly. Non-primitive types (like `String`, Arrays, Classes) refer to objects.",
            codeExamples: [{
                title: "Primitives",
                code: `int myNum = 5;
double price = 19.99; // double is default for decimals
char grade = 'A';     // Single quotes for char
boolean isPassed = true;

// String is a Class, not a primitive
String message = "Welcome";`
            }, {
                title: "Casting",
                code: `// Widening (Automatic): int -> double
int myInt = 9;
double myDouble = myInt; 

// Narrowing (Manual): double -> int
double d = 9.78;
int i = (int) d; // 9 (Fractional part lost)`
            }],
            exercise: "Declare two integer variables `length` and `width`. Calculate the area and store it in a new variable. Print the result."
          }
        ]
      },
      {
          id: 'java-beg-ctrl',
          title: '2. Control Flow',
          subTopics: [
              {
                  id: 'java-b-c-1',
                  title: 'Loops and Conditions',
                  content: "Java control structures allow you to dictate the flow of execution. The `for-each` loop is a convenient way to iterate over arrays or collections without managing an index.",
                  codeExamples: [{
                      title: "Enhanced For-Loop",
                      code: `String[] cars = {"Volvo", "BMW", "Ford"};

// Read as: "For each string i in cars"
for (String i : cars) {
  System.out.println(i);
}`
                  }, {
                      title: "Switch Statement",
                      code: `int day = 4;
switch (day) {
  case 6:
    System.out.println("Saturday");
    break; // Break prevents fall-through
  case 7:
    System.out.println("Sunday");
    break;
  default:
    System.out.println("Weekday");
}`
                  }],
                  exercise: "Write a for-loop that calculates the sum of all numbers in an integer array `int[] numbers = {10, 20, 30}`."
              }
          ]
      }
    ]
  },
  Intermediate: {
    introduction: "Object Oriented Design.",
    topics: [
      {
        id: 'java-int-oop',
        title: '1. OOP Concepts',
        subTopics: [
          {
            id: 'java-i-o-1',
            title: 'Inheritance & Interfaces',
            content: "**Inheritance** (`extends`) lets one class acquire the properties (methods and fields) of another. **Interfaces** (`implements`) define a contract that a class must adhere to, providing a way to achieve abstraction and multiple inheritance of type.",
            codeExamples: [{
                title: "Extends (Inheritance)",
                code: `class Vehicle {
  protected String brand = "Ford";
  public void honk() { System.out.println("Tuut!"); }
}

class Car extends Vehicle {
  private String modelName = "Mustang";
  // Car has access to brand and honk()
}`
            }, {
                title: "Implements (Interface)",
                code: `interface Animal {
  public void animalSound(); // Abstract method
}

class Pig implements Animal {
  public void animalSound() {
    System.out.println("Wee wee");
  }
}`
            }],
            exercise: "Create an abstract class `BankAccount` with a method `deposit()`. Implement it in a `SavingsAccount` class."
          }
        ]
      },
      {
          id: 'java-int-col',
          title: '2. Collections Framework',
          subTopics: [
              {
                  id: 'java-i-c-1',
                  title: 'Lists & Maps',
                  content: "The Collections framework provides data structures for storing groups of objects. Unlike arrays, `ArrayList` can grow dynamically. `HashMap` stores data in Key-Value pairs, allowing for fast lookups.",
                  codeExamples: [{
                      title: "ArrayList",
                      code: `import java.util.ArrayList;

ArrayList<String> list = new ArrayList<>();
list.add("Alpha");
list.add("Beta");
list.remove(0); // Removes "Alpha"
System.out.println(list.size());`
                  }, {
                      title: "HashMap",
                      code: `import java.util.HashMap;

HashMap<String, String> capitals = new HashMap<>();
capitals.put("England", "London");
capitals.put("Germany", "Berlin");

System.out.println(capitals.get("England"));`
                  }],
                  exercise: "Create an ArrayList of Integers. Add numbers 1-5, then use a loop to remove all odd numbers."
              }
          ]
      }
    ]
  },
  Advanced: {
    introduction: "Enterprise level Java.",
    topics: [
      {
        id: 'java-adv-str',
        title: '1. Streams API',
        subTopics: [
          {
            id: 'java-a-s-1',
            title: 'Functional Operations',
            content: "Introduced in Java 8, Streams allow you to process sequences of elements (like collections) declaratively. You can chain operations like `filter`, `map`, and `reduce` to write clean, concise, and readable data processing code.",
            codeExamples: [{
                title: "Filter & Map",
                code: `import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

List<Integer> numbers = Arrays.asList(3, 2, 2, 3, 7, 3, 5);

// Get squares of distinct numbers
List<Integer> squaresList = numbers.stream()
    .distinct()        // Remove duplicates
    .map(i -> i * i)   // Square each number
    .collect(Collectors.toList()); // Convert back to list`
            }],
            exercise: "Given a list of names, use Streams to count how many names start with the letter 'J'."
          }
        ]
      },
      {
          id: 'java-adv-ex',
          title: '2. Exception Handling',
          subTopics: [
              {
                  id: 'java-a-e-1',
                  title: 'Try-Catch-Finally',
                  content: "Exceptions are events that disrupt the normal flow of the program. Java uses `try-catch` blocks to handle these errors gracefully. The `finally` block always executes, regardless of whether an exception occurred, making it perfect for cleanup (like closing files).",
                  codeExamples: [{
                      title: "Basic Handling",
                      code: `try {
  int[] myNumbers = {1, 2, 3};
  System.out.println(myNumbers[10]); // Index out of bounds
} catch (ArrayIndexOutOfBoundsException e) {
  System.out.println("Something went wrong.");
} finally {
  System.out.println("The 'try catch' is finished.");
}`
                  }],
                  exercise: "Write a try-catch block that attempts to divide by zero and catches the `ArithmeticException`."
              }
          ]
      }
    ]
  }
};

import { LanguageContent } from '../types';

export const javaContent: LanguageContent = {
  Beginner: {
    introduction: "🟢 Level 1: Beginner. Understand Java basics, OOP fundamentals, and write simple programs.",
    topics: [
      {
        id: 'java-beg-intro',
        title: '1. Introduction to Java',
        subTopics: [
          {
            id: 'java-b-intro-1',
            title: 'What is Java? (JDK, JRE, JVM)',
            content: "Java is a high-level, class-based, object-oriented programming language. It is platform-independent ('Write Once, Run Anywhere').\n\n*   **JDK (Java Development Kit)**: Tools to develop Java apps (compiler, debugger).\n*   **JRE (Java Runtime Environment)**: Libraries and JVM to run Java apps.\n*   **JVM (Java Virtual Machine)**: Executes the bytecode.",
            codeExamples: [
              {
                title: "Hello World",
                code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
              },
              {
                title: "Compilation Process",
                code: `// Save as Main.java
// Compile: javac Main.java  -> Creates Main.class (Bytecode)
// Run:     java Main        -> JVM executes bytecode`
              }
            ],
            exercise: "Install Java on your machine and run your first 'Hello World' program from the command line."
          }
        ]
      },
      {
        id: 'java-beg-basics',
        title: '2. Java Basics',
        subTopics: [
          {
            id: 'java-b-base-1',
            title: 'Variables & Data Types',
            content: "Java is statically typed. Variables must be declared with a type.\n*   **Primitive Types**: `int`, `double`, `char`, `boolean`, `byte`, `short`, `long`, `float`.\n*   **Non-Primitive**: `String`, Arrays, Classes.",
            codeExamples: [
              {
                title: "Primitives",
                code: `int age = 25;
double price = 19.99;
boolean isJavaFun = true;
char grade = 'A';`
              },
              {
                title: "Type Casting",
                code: `// Widening (Automatic)
int myInt = 9;
double myDouble = myInt; 

// Narrowing (Manual)
double pi = 3.14;
int p = (int) pi; // 3`
              }
            ],
            exercise: "Declare variables for your name (String), age (int), and height (double), then print them."
          },
          {
            id: 'java-b-base-2',
            title: 'Input / Output',
            content: "Use `System.out.println` for output and the `Scanner` class for input.",
            codeExamples: [
              {
                title: "Scanner Input",
                code: `import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter age: ");
        int age = sc.nextInt();
        System.out.println("Age: " + age);
    }
}`
              },
              {
                title: "Output Formatting",
                code: `String name = "John";
int score = 90;
// printf allows formatting like C
System.out.printf("Student %s scored %d marks.", name, score);`
              }
            ],
            exercise: "Write a program that takes two numbers as input and prints their sum."
          },
          {
            id: 'java-b-base-3',
            title: 'Operators',
            content: "Operators perform operations on variables and values.\n*   **Arithmetic**: `+`, `-`, `*`, `/`, `%`\n*   **Comparison**: `==`, `!=`, `>`, `<`, `>=`\n*   **Logical**: `&&` (AND), `||` (OR), `!` (NOT)",
            codeExamples: [
              {
                title: "Arithmetic",
                code: `int x = 10, y = 3;
System.out.println(x + y); // 13
System.out.println(x % y); // 1 (Remainder)`
              },
              {
                title: "Logical Logic",
                code: `boolean hasID = true;
boolean isAdult = true;
if (hasID && isAdult) {
    System.out.println("Allowed");
}`
              }
            ],
            exercise: "Check if a number entered by the user is divisible by both 3 and 5."
          }
        ]
      },
      {
        id: 'java-beg-ctrl',
        title: '3. Control Statements',
        subTopics: [
          {
            id: 'java-b-ctrl-1',
            title: 'If / Else / Switch',
            content: "Decision making structures.",
            codeExamples: [
              {
                title: "Nested If",
                code: `int age = 20;
int weight = 55;

if (age > 18) {
    if (weight > 50) {
        System.out.println("Eligible to donate blood");
    }
}`
              },
              {
                title: "Switch Case",
                code: `int day = 3;
switch(day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    default: System.out.println("Other day");
}`
              }
            ],
            exercise: "Use a switch statement to print the name of the month based on a number (1-12)."
          },
          {
            id: 'java-b-ctrl-2',
            title: 'Loops',
            content: "Execute a block of code repeatedly.\n*   `for`: When iterations are known.\n*   `while`: When iterations are unknown.\n*   `do-while`: Executes at least once.",
            codeExamples: [
              {
                title: "For Loop",
                code: `for (int i = 1; i <= 5; i++) {
    System.out.println("Count: " + i);
}`
              },
              {
                title: "While Loop",
                code: `int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}`
              }
            ],
            exercise: "Write a program to print the factorial of a number using a loop."
          }
        ]
      },
      {
        id: 'java-beg-arr',
        title: '4. Arrays & Strings',
        subTopics: [
          {
            id: 'java-b-arr-1',
            title: 'Arrays',
            content: "Arrays store multiple values of the same type in a single variable. They have a fixed size.",
            codeExamples: [
              {
                title: "Single Dimensional",
                code: `String[] cars = {"Volvo", "BMW", "Ford"};
System.out.println(cars[0]); // Volvo
cars[0] = "Opel"; // Modify`
              },
              {
                title: "Multi-Dimensional",
                code: `int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
System.out.println(myNumbers[1][2]); // 7`
              }
            ],
            exercise: "Create an array of integers and find the maximum value using a loop."
          },
          {
            id: 'java-b-arr-2',
            title: 'Strings & String Methods',
            content: "Strings in Java are objects. `String` is immutable. `StringBuilder` and `StringBuffer` are mutable.",
            codeExamples: [
              {
                title: "String Methods",
                code: `String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
System.out.println("Length: " + txt.length());
System.out.println(txt.toLowerCase());
System.out.println(txt.indexOf("DEF"));`
              },
              {
                title: "StringBuilder",
                code: `// Efficient for frequent modifications
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World"); // Modifies existing object
System.out.println(sb.toString());`
              }
            ],
            exercise: "Check if a string entered by the user is a palindrome (e.g., 'madam')."
          }
        ]
      },
      {
        id: 'java-beg-meth',
        title: '5. Methods (Functions)',
        subTopics: [
          {
            id: 'java-b-meth-1',
            title: 'Defining Methods',
            content: "Methods are blocks of code that run only when called. They can pass data (parameters) and return data.",
            codeExamples: [
              {
                title: "Basic Method",
                code: `static void myMethod(String fname) {
    System.out.println(fname + " Doe");
}

public static void main(String[] args) {
    myMethod("Liam");
}`
              },
              {
                title: "Return Values",
                code: `static int add(int x, int y) {
    return x + y;
}
System.out.println(add(5, 3));`
              }
            ],
            exercise: "Write a method `isPrime(int n)` that returns true if the number is prime."
          },
          {
            id: 'java-b-meth-2',
            title: 'Overloading & Recursion',
            content: "**Overloading**: Same method name, different parameters.\n**Recursion**: A method calling itself.",
            codeExamples: [
              {
                title: "Method Overloading",
                code: `static int plus(int x, int y) { return x + y; }
static double plus(double x, double y) { return x + y; }`
              },
              {
                title: "Recursion (Factorial)",
                code: `public static int factorial(int k) {
    if (k > 0) return k * factorial(k - 1);
    else return 1;
}`
              }
            ],
            exercise: "Implement a recursive method to print the Fibonacci series up to n terms."
          }
        ]
      },
      {
        id: 'java-beg-oop',
        title: '6. Basic OOP Concepts',
        subTopics: [
          {
            id: 'java-b-oop-1',
            title: 'Class & Object',
            content: "Everything in Java is associated with classes and objects. A Class is a blueprint; an Object is an instance.",
            codeExamples: [
              {
                title: "Class Definition",
                code: `public class Main {
    int x = 5;

    public static void main(String[] args) {
        Main myObj = new Main();
        System.out.println(myObj.x);
    }
}`
              },
              {
                title: "Multiple Objects",
                code: `public class Car {
    String color;
}
Car c1 = new Car(); c1.color = "Red";
Car c2 = new Car(); c2.color = "Blue";`
              }
            ],
            exercise: "Create a 'Dog' class with 'breed' and 'age'. Create two objects and set their attributes."
          },
          {
            id: 'java-b-oop-2',
            title: 'Constructors & Modifiers',
            content: "**Constructor**: Special method to initialize objects.\n**Access Modifiers**: `public`, `private`, `protected` control visibility.\n**`this`**: Refers to current object.\n**`static`**: Belongs to class, not instance.",
            codeExamples: [
              {
                title: "Constructor",
                code: `public class MyClass {
    int x;
    // Constructor
    public MyClass(int y) {
        this.x = y;
    }
}`
              },
              {
                title: "Static vs Public",
                code: `public class Example {
    static void staticMethod() { System.out.println("Class method"); }
    public void publicMethod() { System.out.println("Object method"); }
    
    public static void main(String[] args) {
        staticMethod(); // OK
        // publicMethod(); // Error
        new Example().publicMethod(); // OK
    }
}`
              }
            ],
            exercise: "Create a class `Rectangle` with a constructor taking length and width, and a method `area()`."
          }
        ]
      },
      {
        id: 'java-beg-proj',
        title: '7. Beginner Mini Projects',
        subTopics: [
          {
            id: 'java-b-proj-1',
            title: 'Project 1: Calculator',
            content: "Build a console-based calculator that can perform basic arithmetic operations (`+`, `-`, `*`, `/`). This project reinforces concepts like user input, `switch` cases, and arithmetic operators.",
            codeExamples: [
              {
                title: "Calculator Logic",
                code: `Scanner reader = new Scanner(System.in);
System.out.print("Enter two numbers: ");
double first = reader.nextDouble();
double second = reader.nextDouble();
System.out.print("Enter an operator (+, -, *, /): ");
char operator = reader.next().charAt(0);
double result;

switch(operator) {
    case '+': result = first + second; break;
    case '-': result = first - second; break;
    case '*': result = first * second; break;
    case '/': result = first / second; break;
    default: System.out.printf("Error! operator is not correct"); return;
}
System.out.printf("%.1f %c %.1f = %.1f", first, operator, second, result);`
              }
            ],
            exercise: "Enhance the calculator to support modulus (%) and power (^) operations using `Math.pow()`."
          },
          {
            id: 'java-b-proj-2',
            title: 'Project 2: Student Result System',
            content: "Create a system that manages student details. Define a `Student` class with fields for name, roll number, and marks. Include a method to calculate the average and display the grade.",
            codeExamples: [
              {
                title: "Student Class",
                code: `class Student {
    String name;
    int[] marks;

    Student(String name, int[] marks) {
        this.name = name;
        this.marks = marks;
    }

    double getAverage() {
        int sum = 0;
        for (int m : marks) sum += m;
        return (double) sum / marks.length;
    }
}`
              },
              {
                title: "Usage",
                code: `int[] marks = {85, 90, 78};
Student s1 = new Student("Alice", marks);
System.out.println("Average: " + s1.getAverage());`
              }
            ],
            exercise: "Add a method to the Student class to determine if the student passed or failed (pass mark = 40)."
          },
          {
            id: 'java-b-proj-3',
            title: 'Project 3: Number Guessing Game',
            content: "A game where the computer picks a random number, and the user has to guess it. The game gives hints like 'Too High' or 'Too Low'.",
            codeExamples: [
              {
                title: "Game Loop",
                code: `int secret = (int)(Math.random() * 100) + 1;
Scanner sc = new Scanner(System.in);
int guess = 0;

while (guess != secret) {
    System.out.print("Guess a number (1-100): ");
    guess = sc.nextInt();
    if (guess < secret) System.out.println("Too low!");
    else if (guess > secret) System.out.println("Too high!");
}
System.out.println("Correct! You win.");`
              }
            ],
            exercise: "Add a counter to track the number of attempts and limit the user to 5 tries."
          },
          {
            id: 'java-b-proj-4',
            title: 'Project 4: ATM Simulation',
            content: "Simulate a basic ATM. The user starts with a balance and can choose to Withdraw, Deposit, or Check Balance using a menu loop.",
            codeExamples: [
              {
                title: "ATM Logic",
                code: `int balance = 1000;
Scanner sc = new Scanner(System.in);
while(true) {
    System.out.println("1. Withdraw 2. Deposit 3. Check Balance 4. Exit");
    int choice = sc.nextInt();
    if (choice == 4) break;
    // Add if/switch logic for other choices
    if (choice == 2) {
        System.out.print("Amount: ");
        balance += sc.nextInt();
    }
}`
              }
            ],
            exercise: "Implement the Withdraw logic, ensuring the user cannot withdraw more than their current balance."
          }
        ]
      }
    ]
  },
  Intermediate: {
    introduction: "🔵 Level 2: Intermediate. Build professional Java applications & learn real coding skills.",
    topics: [
      {
        id: 'java-int-oop',
        title: '1. Advanced OOP',
        subTopics: [
          {
            id: 'java-i-oop-1',
            title: 'Inheritance & Polymorphism',
            content: "**Inheritance** (`extends`) lets one class acquire properties of another. **Polymorphism** (Overloading/Overriding) allows tasks to be performed in different ways.",
            codeExamples: [
              {
                title: "Inheritance",
                code: `class Animal {
    void eat() { System.out.println("eating..."); }
}
class Dog extends Animal {
    void bark() { System.out.println("barking..."); }
}`
              },
              {
                title: "Method Overriding",
                code: `class Bank {
    int getRate() { return 0; }
}
class SBI extends Bank {
    int getRate() { return 8; }
}
class ICICI extends Bank {
    int getRate() { return 7; }
}`
              }
            ],
            exercise: "Create a parent class `Employee` and child classes `Manager` and `Clerk` with different salary calculations."
          },
          {
            id: 'java-i-oop-2',
            title: 'Abstraction & Interfaces',
            content: "**Abstract Class**: Can have abstract (empty) and non-abstract methods. Cannot be instantiated.\n**Interface**: Fully abstract (until Java 8). Used for multiple inheritance.",
            codeExamples: [
              {
                title: "Abstract Class",
                code: `abstract class Bike {
    abstract void run();
}
class Honda extends Bike {
    void run() { System.out.println("Running safely"); }
}`
              },
              {
                title: "Interface",
                code: `interface Drawable {
    void draw();
}
class Circle implements Drawable {
    public void draw() { System.out.println("drawing circle"); }
}`
              }
            ],
            exercise: "Define an interface `Animal` with `eat()` and `sleep()` methods. Implement it in `Cat` and `Dog`."
          },
          {
            id: 'java-i-oop-3',
            title: 'Encapsulation',
            content: "Wrapping code and data together into a single unit. Use `private` fields and `public` getter/setter methods.",
            codeExamples: [
              {
                title: "Encapsulation",
                code: `public class Person {
    private String name; // restricted access

    // Getter
    public String getName() { return name; }

    // Setter
    public void setName(String newName) {
        this.name = newName;
    }
}`
              }
            ],
            exercise: "Create a fully encapsulated class `Account` with private `balance` and methods to modify it safely."
          }
        ]
      },
      {
        id: 'java-int-ex',
        title: '2. Exception Handling',
        subTopics: [
          {
            id: 'java-i-ex-1',
            title: 'Try, Catch, Finally',
            content: "Mechanism to handle runtime errors so normal flow can be maintained.",
            codeExamples: [
              {
                title: "Try-Catch",
                code: `try {
    int data = 100 / 0;
} catch (ArithmeticException e) {
    System.out.println(e);
} finally {
    System.out.println("Finally block is always executed");
}`
              },
              {
                title: "Throw & Throws",
                code: `void m() throws IOException {
    throw new IOException("device error");
}`
              }
            ],
            exercise: "Write a program to handle `ArrayIndexOutOfBoundsException`."
          }
        ]
      },
      {
        id: 'java-int-col',
        title: '3. Collections Framework',
        subTopics: [
          {
            id: 'java-i-col-1',
            title: 'List & Set',
            content: "Framework to store and manipulate groups of objects.\n*   **List (ArrayList, LinkedList)**: Ordered, allows duplicates.\n*   **Set (HashSet, TreeSet)**: Unordered, unique items.",
            codeExamples: [
              {
                title: "ArrayList",
                code: `import java.util.*;
ArrayList<String> list = new ArrayList<>();
list.add("Mango");
list.add("Apple");
Iterator itr = list.iterator();
while(itr.hasNext()) {
    System.out.println(itr.next());
}`
              },
              {
                title: "HashSet",
                code: `HashSet<String> set = new HashSet<>();
set.add("One");
set.add("Two");
set.add("One"); // Ignored
System.out.println(set);`
              }
            ],
            exercise: "Create an ArrayList of integers. Remove duplicates using a HashSet."
          },
          {
            id: 'java-i-col-2',
            title: 'Map (HashMap, TreeMap)',
            content: "Stores data in Key-Value pairs.",
            codeExamples: [
              {
                title: "HashMap",
                code: `HashMap<Integer, String> map = new HashMap<>();
map.put(1, "Mango");
map.put(2, "Apple");

for(Map.Entry m : map.entrySet()){
    System.out.println(m.getKey() + " " + m.getValue());
}`
              }
            ],
            exercise: "Count the frequency of words in a string using HashMap."
          }
        ]
      },
      {
        id: 'java-int-file',
        title: '4. File Handling',
        subTopics: [
          {
            id: 'java-i-file-1',
            title: 'Reading & Writing',
            content: "Java I/O (Input and Output) is used to process input and produce output. File handling is done via streams.",
            codeExamples: [
              {
                title: "FileWriter",
                code: `import java.io.FileWriter;
try {
    FileWriter myWriter = new FileWriter("filename.txt");
    myWriter.write("Files in Java might be tricky, but fun enough!");
    myWriter.close();
} catch (IOException e) { e.printStackTrace(); }`
              },
              {
                title: "BufferedReader",
                code: `FileReader fr = new FileReader("test.txt");    
BufferedReader br = new BufferedReader(fr);    
int i;    
while((i=br.read())!=-1) {  
    System.out.print((char)i);  
}  
br.close();`
              }
            ],
            exercise: "Write a program to copy content from one file to another."
          }
        ]
      },
      {
        id: 'java-int-gen',
        title: '5. Generics',
        subTopics: [
          {
            id: 'java-i-gen-1',
            title: 'Generic Classes & Methods',
            content: "Generics allow you to abstract over types. They provide compile-time safety.",
            codeExamples: [
              {
                title: "Generic Class",
                code: `class MyGen<T> {
    T obj;
    void add(T obj) { this.obj = obj; }
    T get() { return obj; }
}`
              },
              {
                title: "Generic Method",
                code: `public static <E> void printArray(E[] elements) {
    for (E element : elements) {
        System.out.print(element + " ");
    }
}`
              }
            ],
            exercise: "Create a Generic class that can store either a String or an Integer."
          }
        ]
      },
      {
        id: 'java-int-thrd',
        title: '6. Multithreading',
        subTopics: [
          {
            id: 'java-i-thrd-1',
            title: 'Threads & Synchronization',
            content: "Multithreading is a process of executing multiple threads simultaneously. Helps maximize CPU usage.",
            codeExamples: [
              {
                title: "Extending Thread",
                code: `class Multi extends Thread {
    public void run() {
        System.out.println("thread is running...");
    }
}
Multi t1 = new Multi();
t1.start();`
              },
              {
                title: "Runnable Interface",
                code: `class Multi3 implements Runnable {
    public void run() {
        System.out.println("thread running");
    }
}
Thread t1 = new Thread(new Multi3());
t1.start();`
              }
            ],
            exercise: "Create two threads, one printing even numbers and the other printing odd numbers up to 10."
          }
        ]
      },
      {
        id: 'java-int-java8',
        title: '7. Java 8+ Features',
        subTopics: [
          {
            id: 'java-i-j8-1',
            title: 'Lambdas & Streams',
            content: "**Lambdas**: Concise way to represent one method interface.\n**Streams**: Sequence of elements supporting sequential and parallel aggregate operations.",
            codeExamples: [
              {
                title: "Lambda Expression",
                code: `interface Sayable {
    public String say();
}
Sayable s = () -> {
    return "I have nothing to say.";
};
System.out.println(s.say());`
              },
              {
                title: "Stream API",
                code: `List<Integer> number = Arrays.asList(2,3,4,5);
List<Integer> square = number.stream()
    .map(x -> x*x)
    .collect(Collectors.toList());
System.out.println(square);`
              }
            ],
            exercise: "Use Streams to filter a list of names starting with 'A' and convert them to uppercase."
          }
        ]
      },
      {
        id: 'java-int-proj',
        title: '8. Intermediate Projects',
        subTopics: [
          {
            id: 'java-i-proj-1',
            title: 'Project 1: Library Management System',
            content: "Build a system to manage books. Use **Classes** for Books and Members, **Collections** (ArrayList) to store them, and **File Handling** to save the data so it persists after the program closes.",
            codeExamples: [
              {
                title: "Book Class",
                code: `class Book implements Serializable {
    int id;
    String name;
    boolean isIssued;
    // constructor...
}`
              },
              {
                title: "File Storage",
                code: `// Saving list to file
FileOutputStream fos = new FileOutputStream("library.dat");
ObjectOutputStream oos = new ObjectOutputStream(fos);
oos.writeObject(booksList);`
              }
            ],
            exercise: "Implement the 'Issue Book' feature: check if the book exists and is not already issued, then mark it as issued."
          },
          {
            id: 'java-i-proj-2',
            title: 'Project 2: Employee Payroll System',
            content: "Calculate salaries for different employee types. Use **Inheritance** (Base Employee class, derived FullTime/PartTime classes) and **Streams** to filter or sort employees by salary.",
            codeExamples: [
              {
                title: "Employee Hierarchy",
                code: `abstract class Employee {
    abstract double calculateSalary();
}

class FullTimeEmployee extends Employee {
    double calculateSalary() { return 50000; }
}`
              }
            ],
            exercise: "Add a feature to generate a payslip for a specific employee ID."
          },
          {
            id: 'java-i-proj-3',
            title: 'Project 3: Multi-threaded Chat App',
            content: "A console-based chat where multiple clients can talk. Use **Sockets** for networking and **Threads** to handle multiple client connections simultaneously.",
            codeExamples: [
              {
                title: "Server Socket",
                code: `ServerSocket ss = new ServerSocket(3333);
Socket s = ss.accept(); // Wait for client
DataInputStream din = new DataInputStream(s.getInputStream());
// Read in a loop...`
              }
            ],
            exercise: "Create a simple client that connects to localhost:3333 and sends a 'Hello' message."
          },
          {
            id: 'java-i-proj-4',
            title: 'Project 4: Quiz App with Analysis',
            content: "A quiz application. Store questions in a **Map**. Use **Streams** to calculate the score and analyze which topics the user failed in.",
            codeExamples: [
              {
                title: "Question Storage",
                code: `Map<String, String> quiz = new HashMap<>();
quiz.put("Capital of France?", "Paris");
// Loop through keys, ask user, compare with values`
              }
            ],
            exercise: "Add a timer feature using a separate Thread that stops the quiz after 60 seconds."
          }
        ]
      }
    ]
  },
  Advanced: {
    introduction: "🔴 Level 3: Advanced. Become a job-ready Java developer with Spring, Microservices, and System Design.",
    topics: [
      {
        id: 'java-adv-design',
        title: '1. Design Patterns',
        subTopics: [
          {
            id: 'java-a-dp-1',
            title: 'Creational Patterns',
            content: "Solutions to common problems in software design.\n**Singleton**: Single instance.\n**Factory**: Create objects without exposing logic.",
            codeExamples: [
              {
                title: "Singleton",
                code: `class Singleton {
    private static Singleton single_instance = null;
    private Singleton() {}
    public static Singleton getInstance() {
        if (single_instance == null)
            single_instance = new Singleton();
        return single_instance;
    }
}`
              },
              {
                title: "Factory Pattern",
                code: `// Factory generates objects based on input`
              }
            ],
            exercise: "Implement a Singleton class for a Database Connection object."
          },
          {
            id: 'java-a-dp-2',
            title: 'Behavioral & Structural',
            content: "**Observer**: One-to-many dependency.\n**MVC**: Model-View-Controller separation.",
            codeExamples: [
              {
                title: "Observer Concept",
                code: `// Subject maintains list of observers`
              }
            ],
            exercise: "Research and implement a basic Observer pattern example."
          }
        ]
      },
      {
        id: 'java-adv-jdbc',
        title: '2. JDBC (Database Connectivity)',
        subTopics: [
          {
            id: 'java-a-jdbc-1',
            title: 'Connecting & CRUD',
            content: "Java Database Connectivity API. Connects Java to SQL databases (MySQL, PostgreSQL).",
            codeExamples: [
              {
                title: "Connection",
                code: `Class.forName("com.mysql.jdbc.Driver");  
Connection con = DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/sonoo","root","root");`
              },
              {
                title: "Execute Query",
                code: `Statement stmt = con.createStatement();  
ResultSet rs = stmt.executeQuery("select * from emp");  
while(rs.next())  
    System.out.println(rs.getInt(1)+"  "+rs.getString(2));`
              }
            ],
            exercise: "Write a JDBC program to insert a new user record into a database table."
          }
        ]
      },
      {
        id: 'java-adv-spring',
        title: '3. Spring & Spring Boot',
        subTopics: [
          {
            id: 'java-a-sp-1',
            title: 'Core & Boot Basics',
            content: "Spring is a heavy-weight framework. **IoC** (Inversion of Control) and **DI** (Dependency Injection) are core. **Spring Boot** simplifies setup with Auto-configuration.",
            codeExamples: [
              {
                title: "Dependency Injection",
                code: `@Component
class Car {
    @Autowired
    private Engine engine;
}`
              },
              {
                title: "Spring Boot App",
                code: `@SpringBootApplication
public class MyappApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyappApplication.class, args);
    }
}`
              }
            ],
            exercise: "Create a simple Spring Boot application that prints 'Spring is running' on startup."
          },
          {
            id: 'java-a-sp-2',
            title: 'REST APIs (Spring MVC)',
            content: "Building web services. Methods: GET, POST, PUT, DELETE.",
            codeExamples: [
              {
                title: "Controller",
                code: `@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello World";
    }
}`
              }
            ],
            exercise: "Create a REST endpoint `/users` that returns a list of user names."
          }
        ]
      },
      {
        id: 'java-adv-jpa',
        title: '4. Spring Data JPA & Hibernate',
        subTopics: [
          {
            id: 'java-a-jpa-1',
            title: 'ORM & Repositories',
            content: "Object Relational Mapping. Hibernate maps Java Classes to DB Tables. JPA is the specification.",
            codeExamples: [
              {
                title: "Entity",
                code: `@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
}`
              },
              {
                title: "Repository",
                code: `public interface UserRepository extends JpaRepository<User, Long> {
    // Standard CRUD methods are free
}`
              }
            ],
            exercise: "Define an Entity `Product` and a repository to save it to an H2 database."
          }
        ]
      },
      {
        id: 'java-adv-micro',
        title: '5. Microservices',
        subTopics: [
          {
            id: 'java-a-micro-1',
            title: 'Architecture Basics',
            content: "Breaking a monolith into small, independent services. \n*   **Eureka**: Service Discovery.\n*   **API Gateway**: Entry point.",
            codeExamples: [
              {
                title: "Enable Discovery Client",
                code: `@EnableDiscoveryClient
@SpringBootApplication
public class ServiceApplication { ... }`
              }
            ],
            exercise: "Draw a diagram of how an API Gateway routes requests to different microservices."
          }
        ]
      },
      {
        id: 'java-adv-sec',
        title: '6. Security',
        subTopics: [
          {
            id: 'java-a-sec-1',
            title: 'Spring Security & JWT',
            content: "Securing apps using authentication and authorization. **JWT** (JSON Web Tokens) used for stateless auth.",
            codeExamples: [
              {
                title: "Security Config",
                code: `@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    // Configure HTTP security
}`
              }
            ],
            exercise: "Implement a basic login endpoint that generates a dummy JWT token."
          }
        ]
      },
      {
        id: 'java-adv-tools',
        title: '7. Build Tools & Testing',
        subTopics: [
          {
            id: 'java-a-tool-1',
            title: 'Maven, Docker & Testing',
            content: "**Maven/Gradle**: Dependency management. **Docker**: Containerization. **JUnit/Mockito**: Testing.",
            codeExamples: [
              {
                title: "JUnit Test",
                code: `@Test
void testAddition() {
    assertEquals(2, 1 + 1);
}`
              },
              {
                title: "Dockerfile",
                code: `FROM openjdk:11
COPY target/myapp.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]`
              }
            ],
            exercise: "Write a JUnit test case for a simple `Calculator` class."
          }
        ]
      },
      {
        id: 'java-adv-proj',
        title: '8. Advanced Projects',
        subTopics: [
          {
            id: 'java-a-proj-1',
            title: 'Project 1: Full Stack E-commerce App',
            content: "A complete shopping platform. Backend: **Spring Boot**. Frontend: **React/Angular**. Database: **MySQL**. Key features: User authentication, Product catalog, Cart management, and Order processing.",
            codeExamples: [
              {
                title: "Product Entity",
                code: `@Entity
class Product {
    @Id @GeneratedValue
    Long id;
    String name;
    Double price;
    // Getters and Setters
}`
              },
              {
                title: "Product Controller",
                code: `@GetMapping("/products")
public List<Product> getAllProducts() {
    return productService.findAll();
}`
              }
            ],
            exercise: "Design the API endpoints for 'Adding to Cart' and 'Checking out'."
          },
          {
            id: 'java-a-proj-2',
            title: 'Project 2: Online Banking System',
            content: "Secure banking app. Key tech: **Spring Security**, **JWT**, **Hibernate**. Features: Secure login, Fund transfer, Transaction history, and Balance check.",
            codeExamples: [
              {
                title: "Transaction Logic",
                code: `@Transactional
public void transfer(Long fromId, Long toId, Double amount) {
    Account from = repo.findById(fromId);
    Account to = repo.findById(toId);
    from.debit(amount);
    to.credit(amount);
    repo.saveAll(Arrays.asList(from, to));
}`
              }
            ],
            exercise: "Implement the logic to prevent a transfer if the sender has insufficient funds."
          },
          {
            id: 'java-a-proj-3',
            title: 'Project 3: Food Delivery API System',
            content: "Microservices architecture. Services: User Service, Restaurant Service, Order Service. Use **Eureka** for discovery and **Gateway** for routing.",
            codeExamples: [
              {
                title: "Order Service Client",
                code: `// Feign Client to call Restaurant Service
@FeignClient(name = "restaurant-service")
public interface RestaurantClient {
    @GetMapping("/menu/{id}")
    Menu getMenu(@PathVariable Long id);
}`
              }
            ],
            exercise: "Explain how the Order Service would communicate with the Payment Service asynchronously."
          },
          {
            id: 'java-a-proj-4',
            title: 'Project 4: Social Networking Platform',
            content: "Real-time interaction. Tech: **Spring Boot**, **WebSockets** (for chat/notifications), **CI/CD**. Features: Friend requests, Feed, Live Chat.",
            codeExamples: [
              {
                title: "WebSocket Config",
                code: `@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws").withSockJS();
    }
}`
              }
            ],
            exercise: "Create a WebSocket controller that broadcasts a message to all subscribed users."
          }
        ]
      }
    ]
  }
};
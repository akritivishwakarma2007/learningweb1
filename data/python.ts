import { LanguageContent } from '../types';

export const pythonContent: LanguageContent = {
  Beginner: {
    introduction: "🟢 Level 1: Beginner. Master the fundamentals: Syntax, Control Flow, Data Structures, and building real projects.",
    topics: [
      {
        id: 'py-beg-intro',
        title: '1. Introduction',
        subTopics: [
          {
            id: 'py-b-hello',
            title: 'Your First Program',
            content: "The tradition when learning any new programming language is to print 'Hello, World!' to the screen. In Python, this is incredibly simple. We use the `print()` function to send text (enclosed in quotes) to the console.",
            codeExamples: [
              {
                title: "Hello World",
                code: `print("Hello, World!")`
              }
            ],
            exercise: "Write a program that prints 'I am learning Python!' to the console."
          }
        ]
      },
      {
        id: 'py-beg-vars',
        title: '2. Variables & Syntax',
        subTopics: [
          {
            id: 'py-b-2-1',
            title: 'Variables',
            content: "Variables store data in memory. \n\n**Rules:**\n*   Can't start with a number\n*   Can't use spaces (use `_` snake_case)\n*   Case-sensitive (`Age` vs `age`)",
            codeExamples: [
              {
                title: "Valid Variable Names",
                code: `age = 20
user_name = "Alice"
is_student = True
_private_var = 10`
              },
              {
                title: "Invalid vs Valid",
                code: `# 1st_name = "Bob"  # Error: Starts with number
# user name = "Bob" # Error: Contains space

first_name = "Bob"  # Correct`
              }
            ],
            exercise: "Create three variables: `height` (float), `weight` (int), and `is_athlete` (boolean). Print them."
          },
          {
            id: 'py-b-2-2',
            title: 'Data Types',
            content: "Python has standard built-in data types.\n\n*   `int`: Whole number (10)\n*   `float`: Decimal (3.14)\n*   `str`: Text (\"Hello\")\n*   `bool`: Logic (True/False)\n*   `list`, `tuple`, `set`, `dict` (Collections)",
            codeExamples: [
              {
                title: "Common Types",
                code: `x = 10          # int
y = 3.14        # float
name = "Python" # str
active = False  # bool`
              },
              {
                title: "Checking Type",
                code: `print(type(10))       # <class 'int'>
print(type(3.14))     # <class 'float'>
print(type("Hello"))  # <class 'str'>`
              },
              {
                title: "Variable Reassignment",
                code: `score = 10
print(score) # 10

score = 20   # Update value
print(score) # 20

score = "Win" # Change type (Dynamic Typing)
print(score) # Win`
              },
              {
                title: "Multiple Assignment",
                code: `x, y, z = 1, 2, 3
print(x) # 1
print(y) # 2
print(z) # 3

a = b = c = 0 # Assign same value to all`
              }
            ],
            exercise: "Declare a variable for your age (int) and your name (str). Use `type()` to print their data types."
          },
          {
            id: 'py-b-2-3',
            title: 'Input & Output',
            content: "**Output**: Use `print()`.\n**Input**: Use `input()`. Note that `input()` always returns a string, so you must convert it using `int()` or `float()` if you need numbers.",
            codeExamples: [
              {
                title: "Basic I/O",
                code: `print("Welcome to Python!")
name = input("Enter your name: ")
print("Hello", name)`
              },
              {
                title: "Converting Input",
                code: `age_str = input("Enter age: ")
age = int(age_str) # Convert string to integer
print(f"Next year you will be {age + 1}")`
              }
            ],
            exercise: "Write a program that asks for two numbers, converts them to integers, and prints their sum."
          },
          {
            id: 'py-b-2-4',
            title: 'Comments',
            content: "Comments are used for explanation and are ignored by the computer.\n*   `#` for single-line\n*   `'''` or `\"\"\"` for multi-line",
            codeExamples: [
              {
                title: "Single-line",
                code: `# This is a comment
x = 5 # This is an inline comment`
              },
              {
                title: "Multi-line",
                code: `"""
This is a comment
that spans multiple
lines
"""
print("Code runs after comment")`
              }
            ],
            exercise: "Write a script that calculates the area of a rectangle, with comments explaining each step."
          }
        ]
      },
      {
        id: 'py-beg-ops',
        title: '3. Operators',
        subTopics: [
          {
            id: 'py-b-3-1',
            title: 'Arithmetic Operators',
            content: "Perform mathematical calculations.",
            codeExamples: [
              {
                title: "Basic Math",
                code: `a = 10
b = 3
print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.333...`
              },
              {
                title: "Advanced Math",
                code: `print(10 // 3) # 3 (Floor division)
print(10 % 3)  # 1 (Modulus/Remainder)
print(2 ** 3)  # 8 (Exponent)`
              }
            ],
            exercise: "Calculate the remainder of 100 divided by 7 using the modulus operator."
          },
          {
            id: 'py-b-3-2',
            title: 'Comparison Operators',
            content: "Compare values and return `True` or `False`.",
            codeExamples: [
              {
                title: "Equality",
                code: `x = 5
y = 10
print(x == y) # False
print(x != y) # True`
              },
              {
                title: "Relational",
                code: `print(10 > 5)  # True
print(10 < 5)  # False
print(5 >= 5)  # True
print(5 <= 4)  # False`
              }
            ],
            exercise: "Check if 50 is greater than 20 and print the result."
          },
          {
            id: 'py-b-3-3',
            title: 'Logical Operators',
            content: "Combine boolean expressions: `and`, `or`, `not`.",
            codeExamples: [
              {
                title: "And / Or",
                code: `age = 25
print(age > 18 and age < 30) # True
print(age < 18 or age > 60)  # False`
              },
              {
                title: "Not",
                code: `is_raining = True
print(not is_raining) # False`
              }
            ],
            exercise: "Write a condition that checks if a number is positive AND even."
          },
          {
            id: 'py-b-3-4',
            title: 'Assignment Operators',
            content: "Assign values and perform operations simultaneously.",
            codeExamples: [
              {
                title: "Increment",
                code: `x = 10
x += 1   # x = x + 1
print(x) # 11`
              },
              {
                title: "Multiply Assign",
                code: `y = 5
y *= 3   # y = y * 3
print(y) # 15`
              }
            ],
            exercise: "Initialize a variable `score` to 0. Add 10 to it using `+=`, then subtract 2 using `-=`."
          }
        ]
      },
      {
        id: 'py-beg-flow',
        title: '4. Control Flow',
        subTopics: [
          {
            id: 'py-b-4-1',
            title: 'If / Elif / Else',
            content: "Make decisions in code. Indentation is required.",
            codeExamples: [
              {
                title: "Basic If",
                code: `age = 18
if age >= 18:
    print("Adult")
else:
    print("Minor")`
              },
              {
                title: "Elif",
                code: `score = 75
if score >= 90:
    print("A")
elif score >= 70:
    print("B")
else:
    print("F")`
              }
            ],
            exercise: "Write a script that checks if a temperature is 'Hot' (>30), 'Warm' (>20), or 'Cold'."
          },
          {
            id: 'py-b-4-2',
            title: 'Nested Conditions',
            content: "You can put an `if` statement inside another `if` statement.",
            codeExamples: [
              {
                title: "Nested If",
                code: `age = 20
has_ticket = True

if age >= 18:
    if has_ticket:
        print("Enter")
    else:
        print("Buy ticket")
else:
    print("Too young")`
              },
              {
                title: "Alternative Logic",
                code: `age = 20
has_ticket = True

# Often cleaner to use logical operators
if age >= 18 and has_ticket:
    print("Enter")`
              }
            ],
            exercise: "Check if a number is positive. If it is, check if it is even or odd."
          },
          {
            id: 'py-b-4-3',
            title: 'Match Case (Python 3.10+)',
            content: "A cleaner alternative to many `elif` statements.",
            codeExamples: [
              {
                title: "Simple Match",
                code: `day = 1
match day:
    case 1: print("Monday")
    case 2: print("Tuesday")
    case _: print("Other day")`
              },
              {
                title: "Match with Or",
                code: `status = 404
match status:
    case 200: 
        print("OK")
    case 400 | 404: 
        print("Error")`
              }
            ],
            exercise: "Use `match case` to print the name of a color based on the input 'r', 'g', or 'b'."
          }
        ]
      },
      {
        id: 'py-beg-loops',
        title: '5. Loops',
        subTopics: [
          {
            id: 'py-b-5-1',
            title: 'For Loop',
            content: "Iterate over a sequence (list, string, range).",
            codeExamples: [
              {
                title: "Range Loop",
                code: `for i in range(5):
    print(i) # 0, 1, 2, 3, 4`
              },
              {
                title: "List Loop",
                code: `fruits = ["apple", "banana"]
for fruit in fruits:
    print(fruit)`
              }
            ],
            exercise: "Use a for loop to print the square of numbers from 1 to 5."
          },
          {
            id: 'py-b-5-2',
            title: 'While Loop',
            content: "Repeat as long as a condition is true.",
            codeExamples: [
              {
                title: "Counting",
                code: `count = 1
while count <= 3:
    print(count)
    count += 1`
              },
              {
                title: "User Input Loop",
                code: `msg = ""
while msg != "quit":
    msg = input("Type 'quit' to exit: ")
    print(msg)`
              }
            ],
            exercise: "Use a while loop to print numbers from 10 down to 1."
          },
          {
            id: 'py-b-5-3',
            title: 'Break & Continue',
            content: "**Break** exits the loop. **Continue** skips the rest of the current iteration.",
            codeExamples: [
              {
                title: "Break",
                code: `for i in range(10):
    if i == 5:
        break # Stops loop
    print(i)`
              },
              {
                title: "Continue",
                code: `for i in range(5):
    if i == 2:
        continue # Skips 2
    print(i)`
              }
            ],
            exercise: "Loop from 1 to 10. Stop (break) if the number is 8. Skip (continue) if it is 4."
          }
        ]
      },
      {
        id: 'py-beg-ds',
        title: '6. Data Structures',
        subTopics: [
          {
            id: 'py-b-6-1',
            title: 'Lists',
            content: "Ordered, changeable collection. Very important.",
            codeExamples: [
              {
                title: "Creation & Access",
                code: `fruits = ["apple", "banana", "orange"]
print(fruits[0]) # apple
fruits[1] = "mango" # change value`
              },
              {
                title: "List Methods",
                code: `nums = [1, 2, 3]
nums.append(4)    # Add to end
nums.remove(2)    # Remove value
nums.pop()        # Remove last
print(len(nums))  # Length`
              }
            ],
            exercise: "Create a list of 3 colors. Add a 4th color using `append` and print the final list."
          },
          {
            id: 'py-b-6-2',
            title: 'Tuples',
            content: "Like lists, but **read-only** (immutable).",
            codeExamples: [
              {
                title: "Tuple",
                code: `coords = (10, 20)
print(coords[0])
# coords[0] = 5 # Error! Cannot change`
              },
              {
                title: "Unpacking",
                code: `point = (3, 4)
x, y = point
print(x) # 3`
              }
            ],
            exercise: "Create a tuple `(1, 2, 3)` and try to change the first element (observe the error)."
          },
          {
            id: 'py-b-6-3',
            title: 'Sets',
            content: "Unordered collection of **unique** items.",
            codeExamples: [
              {
                title: "Creating Sets",
                code: `nums = {1, 2, 3, 3}
print(nums) # {1, 2, 3} (Duplicates removed)`
              },
              {
                title: "Add/Remove",
                code: `s = {1, 2}
s.add(3)
s.remove(1)
print(s)`
              }
            ],
            exercise: "Create a set from a list `[1, 2, 2, 3, 3, 3]` to remove duplicates and print it."
          },
          {
            id: 'py-b-6-4',
            title: 'Dictionaries',
            content: "Key-Value pairs. Keys must be unique.",
            codeExamples: [
              {
                title: "Dictionary",
                code: `student = {
    "name": "Alice",
    "age": 20
}
print(student["name"])`
              },
              {
                title: "Modify Dict",
                code: `car = {"brand": "Ford"}
car["model"] = "Mustang" # Add
car["brand"] = "BMW"     # Update
print(car)`
              }
            ],
            exercise: "Create a dictionary representing a `Person` with keys: name, city, job."
          }
        ]
      },
      {
        id: 'py-beg-func',
        title: '7. Functions',
        subTopics: [
          {
            id: 'py-b-7-1',
            title: 'Defining Functions',
            content: "Functions reuse code.",
            codeExamples: [
              {
                title: "Basic Function",
                code: `def greet():
    print("Hello!")

greet()`
              },
              {
                title: "Docstring",
                code: `def test():
    """This function does nothing"""
    pass`
              }
            ],
            exercise: "Write a function `say_bye()` that prints 'Goodbye!'."
          },
          {
            id: 'py-b-7-2',
            title: 'Arguments & Return',
            content: "Pass data in, send data out.",
            codeExamples: [
              {
                title: "Arguments",
                code: `def add(x, y):
    print(x + y)

add(5, 3)`
              },
              {
                title: "Return",
                code: `def square(n):
    return n * n

res = square(4)
print(res)`
              }
            ],
            exercise: "Write a function that takes a number and returns `True` if it is even, `False` otherwise."
          },
          {
            id: 'py-b-7-4',
            title: 'Default Parameters',
            content: "Make arguments optional.",
            codeExamples: [
              {
                title: "Default Args",
                code: `def greet(name="Guest"):
    print("Hello", name)

greet("Alice") # Hello Alice
greet()        # Hello Guest`
              },
              {
                title: "Multiple Defaults",
                code: `def power(num, exponent=2):
    return num ** exponent

print(power(3))    # 9
print(power(3, 3)) # 27`
              }
            ],
            exercise: "Write a function `introduce(name, country='USA')`."
          },
          {
            id: 'py-b-7-5',
            title: 'Variable Scope',
            content: "**Local**: Inside function. **Global**: Outside.",
            codeExamples: [
              {
                title: "Local Variable",
                code: `def my_func():
    x = 10 # Local
    print(x)

# print(x) # Error`
              },
              {
                title: "Global Variable",
                code: `x = 20 # Global

def show():
    print(x) # Access global

show()`
              }
            ],
            exercise: "Create a global variable `count`. Try to change it inside a function using the `global` keyword."
          }
        ]
      },
      {
        id: 'py-beg-err',
        title: '8. Error Handling',
        subTopics: [
          {
            id: 'py-b-8-1',
            title: 'Try / Except',
            content: "Catch errors so the program doesn't crash.",
            codeExamples: [
              {
                title: "Basic Catch",
                code: `try:
    print(x) # x is not defined
except:
    print("An error occurred")`
              },
              {
                title: "Specific Error",
                code: `try:
    num = int(input("Number: "))
except ValueError:
    print("Not a number!")`
              }
            ],
            exercise: "Write a program that asks for a number. Use try/except to handle the user typing 'abc'."
          },
          {
            id: 'py-b-8-2',
            title: 'Multiple Exceptions',
            content: "Handle different errors differently.",
            codeExamples: [
              {
                title: "Multiple Blocks",
                code: `try:
    val = 10 / int(input("Num: "))
except ValueError:
    print("Invalid input")
except ZeroDivisionError:
    print("Can't divide by zero")`
              },
              {
                title: "Catch as Variable",
                code: `try:
    x = 1 / 0
except Exception as e:
    print("Error:", e)`
              }
            ],
            exercise: "Handle both ZeroDivisionError and ValueError in a division program."
          },
          {
            id: 'py-b-8-3',
            title: 'Finally',
            content: "Code that runs regardless of error.",
            codeExamples: [
              {
                title: "Finally",
                code: `try:
    print("Open File")
    # Error might happen here
except:
    print("Error")
finally:
    print("Close File (Always runs)")`
              },
              {
                title: "Cleanup",
                code: `try:
    x = 1/0
except:
    pass
finally:
    print("Clean up")`
              }
            ],
            exercise: "Write a try/finally block that prints 'Done' at the end."
          }
        ]
      },
      {
        id: 'py-beg-file',
        title: '9. File Handling',
        subTopics: [
          {
            id: 'py-b-9-1',
            title: 'Reading Files',
            content: "Read data from text files.",
            codeExamples: [
              {
                title: "Read All",
                code: `f = open("demo.txt", "r")
print(f.read())
f.close()`
              },
              {
                title: "Read Line",
                code: `f = open("demo.txt", "r")
print(f.readline())
f.close()`
              }
            ],
            exercise: "Assuming 'data.txt' exists, write a script to read and print its first line."
          },
          {
            id: 'py-b-9-2',
            title: 'Writing Files',
            content: "Write data to files. 'w' overwrites, 'a' appends.",
            codeExamples: [
              {
                title: "Write (Overwrite)",
                code: `f = open("demo.txt", "w")
f.write("Hello World")
f.close()`
              },
              {
                title: "Append",
                code: `f = open("demo.txt", "a")
f.write("\\nNew Line")
f.close()`
              }
            ],
            exercise: "Write a script that creates 'test.txt' and writes your name into it."
          },
          {
            id: 'py-b-9-3',
            title: 'Using With',
            content: "Best practice. Automatically closes the file.",
            codeExamples: [
              {
                title: "With Open",
                code: `with open("demo.txt", "r") as f:
    content = f.read()
    print(content)
# File closed automatically here`
              },
              {
                title: "Write with With",
                code: `with open("demo.txt", "w") as f:
    f.write("Safe writing")`
              }
            ],
            exercise: "Rewrite the previous exercise using the `with` statement."
          }
        ]
      },
      {
        id: 'py-beg-proj',
        title: '10. Projects',
        subTopics: [
          {
            id: 'py-b-p-1',
            title: 'Project 1: Calculator',
            content: "Combine inputs, ifs, and math.",
            codeExamples: [
              {
                title: "Logic",
                code: `a = float(input("Num 1: "))
b = float(input("Num 2: "))
op = input("Op (+ - * /): ")

if op == "+": print(a + b)
elif op == "-": print(a - b)
elif op == "*": print(a * b)
elif op == "/": print(a / b)
else: print("Invalid")`
              },
              {
                title: "Enhancement",
                code: `if op == "/" and b == 0:
    print("Cannot divide by zero")`
              }
            ],
            exercise: "Add support for exponentiation (`**`) to the calculator."
          },
          {
            id: 'py-b-p-2',
            title: 'Project 2: Number Guessing',
            content: "Use random numbers and loops.",
            codeExamples: [
              {
                title: "Setup",
                code: `import random
secret = random.randint(1, 10)`
              },
              {
                title: "Game Loop",
                code: `while True:
    guess = int(input("Guess (1-10): "))
    if guess == secret:
        print("Win!")
        break
    else:
        print("Try again")`
              }
            ],
            exercise: "Modify the game to tell the user if their guess was 'Too High' or 'Too Low'."
          },
          {
            id: 'py-b-p-3',
            title: 'Project 3: To-Do List',
            content: "Use lists to store tasks.",
            codeExamples: [
              {
                title: "Add Task",
                code: `todo = []
task = input("Task: ")
todo.append(task)`
              },
              {
                title: "App Loop",
                code: `while True:
    cmd = input("add/view/exit: ")
    if cmd == "exit": break
    if cmd == "add":
        todo.append(input("Task: "))
    if cmd == "view":
        print(todo)`
              }
            ],
            exercise: "Add a 'clear' command that empties the entire list."
          },
          {
            id: 'py-b-p-4',
            title: 'Project 4: Password Generator',
            content: "Use string manipulation and random.",
            codeExamples: [
              {
                title: "Imports",
                code: `import random
import string`
              },
              {
                title: "Logic",
                code: `chars = string.ascii_letters + string.digits
pwd = ""
for i in range(8):
    pwd += random.choice(chars)
print(pwd)`
              }
            ],
            exercise: "Allow the user to specify the length of the password."
          },
          {
            id: 'py-b-p-5',
            title: 'Project 5: Contact Book',
            content: "Use a list of dictionaries.",
            codeExamples: [
              {
                title: "Data Structure",
                code: `contacts = [
  {"name": "Alice", "phone": "123"},
  {"name": "Bob", "phone": "456"}
]`
              },
              {
                title: "Search Logic",
                code: `search = input("Search Name: ")
for c in contacts:
    if c["name"] == search:
        print(c["phone"])`
              }
            ],
            exercise: "Write code to add a new contact dictionary to the list."
          }
        ]
      }
    ]
  },
  Intermediate: {
    introduction: "🔵 Level 2: Intermediate. Master functions, OOP, File Handling, APIs, and build real-world projects.",
    topics: [
      {
        id: 'py-int-adv-funcs',
        title: '1. Advanced Functions',
        subTopics: [
          {
            id: 'py-i-args',
            title: 'Flexible Arguments (*args, **kwargs)',
            content: "Functions become more powerful when they can accept a variable number of arguments.\n\n*   `*args`: Collects extra positional arguments into a tuple. Useful when you don't know how many parameters will be passed.\n*   `**kwargs`: Collects extra keyword arguments into a dictionary.",
            codeExamples: [
              {
                title: "Using *args",
                code: `def add_numbers(*args):
    # args is a tuple (1, 2, 3, 4)
    return sum(args)

print(add_numbers(1, 2, 3, 4))   # 10
print(add_numbers(10, 20))       # 30`
              },
              {
                title: "Using **kwargs",
                code: `def user_info(**kwargs):
    # kwargs is a dict {'name': 'Arjun', 'age': 22}
    for key, value in kwargs.items():
        print(f"{key}: {value}")

user_info(name="Arjun", age=22, city="Delhi")`
              }
            ],
            exercise: "Write a function `multiply_all(*args)` that multiplies all numbers passed to it and returns the result."
          },
          {
            id: 'py-i-lambda',
            title: 'Lambda & Functional Tools',
            content: "**Lambda Functions** are small, anonymous one-line functions defined with the `lambda` keyword.\n\nThey are often used with functional programming tools:\n*   `map()`: Applies a function to all items.\n*   `filter()`: Keeps items that meet a condition.\n*   `reduce()`: Reduces a sequence to a single value.",
            codeExamples: [
              {
                title: "Lambda Syntax",
                code: `square = lambda x: x * x
print(square(6))   # 36

add = lambda a, b: a + b
print(add(5, 3))   # 8`
              },
              {
                title: "Map, Filter, Reduce",
                code: `from functools import reduce

nums = [1, 2, 3, 4, 5]

# Map: Double items -> [2, 4, 6, 8, 10]
doubled = list(map(lambda x: x*2, nums))

# Filter: Keep > 2 -> [3, 4, 5]
big_nums = list(filter(lambda x: x > 2, nums))

# Reduce: Sum -> 15
total = reduce(lambda a, b: a + b, nums)

print(doubled, big_nums, total)`
              }
            ],
            exercise: "Use `filter` and a lambda to extract all even numbers from a list `[1, 5, 8, 10, 13]`."
          }
        ]
      },
      {
        id: 'py-int-comp',
        title: '2. Comprehensions',
        subTopics: [
          {
            id: 'py-i-comp-1',
            title: 'List & Dict Comprehensions',
            content: "Comprehensions provide a short, concise, and faster way to create lists and dictionaries based on existing iterables. They replace multi-line `for` loops used for populating lists.",
            codeExamples: [
              {
                title: "List Comprehension",
                code: `nums = [1, 2, 3, 4]

# Syntax: [expression for item in list]
squares = [x*x for x in nums]

print(squares) # [1, 4, 9, 16]`
              },
              {
                title: "Dictionary Comprehension",
                code: `students = ["Ram", "Mohan", "Priya"]

# Create dict mapping name to name length
marks = {name: len(name) for name in students}

print(marks) 
# {'Ram': 3, 'Mohan': 5, 'Priya': 5}`
              }
            ],
            exercise: "Use a list comprehension to create a list of numbers from 0 to 9 that are divisible by 2."
          }
        ]
      },
      {
        id: 'py-int-tuples-sets',
        title: '3. Tuples & Sets',
        subTopics: [
          {
            id: 'py-i-tuples',
            title: 'Tuples',
            content: "Tuples are like lists but **cannot be changed** (immutable) after creation. They are faster and used when data should not be modified.\n\nKey features:\n- Created with `()`\n- Immutable (safe)\n- Can be used as dictionary keys\n- Support unpacking",
            codeExamples: [
              {
                title: "Creating Tuples",
                code: `point = (10, 20)
colors = ("red", "green", "blue")

print(point[0])  # 10
# point[0] = 5   # Error! Cannot modify`
              },
              {
                title: "Tuple Unpacking",
                code: `x, y = (5, 10)
print(x)  # 5
print(y)  # 10

name, age, city = ("Alice", 25, "Delhi")
print(f"{name} is {age} from {city}")`
              }
            ],
            exercise: "Create a tuple of 3 subjects. Unpack them into variables and print: 'I study math, science, and english'"
          },
          {
            id: 'py-i-sets',
            title: 'Sets',
            content: "Sets store **unique items only**. Great for removing duplicates and fast membership testing.\n\nKey features:\n- No duplicates\n- Unordered\n- Fast `in` checks\n- Math operations: union, intersection, difference",
            codeExamples: [
              {
                title: "Creating Sets",
                code: `fruits = {"apple", "banana", "apple"}  # Duplicate ignored
print(fruits)  # {'apple', 'banana'}

nums = {1, 2, 3, 3, 4}
print(nums)    # {1, 2, 3, 4}`
              },
              {
                title: "Set Operations",
                code: `a = {1, 2, 3}
b = {3, 4, 5}

print(a | b)  # Union: {1, 2, 3, 4, 5}
print(a & b)  # Intersection: {3}
print(a - b)  # Difference: {1, 2}
print(a ^ b)  # Symmetric difference: {1, 2, 4, 5}`
              }
            ],
            exercise: "Take a list with duplicates `[1, 2, 2, 3, 3, 3]`, convert to set, then back to list to remove duplicates."
          }
        ]
      },
      {
        id: 'py-int-oop',
        title: '4. Object oriented programming',
        subTopics: [
          {
            id: 'py-i-oop-1',
            title: 'Classes & Objects',
            content: "OOP focuses on objects rather than functions. This is essential for large projects.\n\n*   **Class**: Blueprint/Template.\n*   **Object**: Instance of the class.\n*   **Constructor (`__init__`)**: Initializes the object.",
            codeExamples: [
              {
                title: "Defining a Class",
                code: `class Car:
    # Constructor
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def show_details(self):
        print(f"{self.brand} {self.model}")

# Create Object
my_car = Car("Toyota", "Corolla")
my_car.show_details()`
              },
              {
                title: "Class vs Instance Variables",
                code: `class Dog:
    species = "Mammal" # Class variable (shared)

    def __init__(self, name):
        self.name = name # Instance variable (unique)

d1 = Dog("Buddy")
d2 = Dog("Max")
print(d1.species) # Mammal`
              }
            ],
            exercise: "Create a `Student` class with `name` and `marks`. Add a method `has_passed()` that returns `True` if marks >= 40."
          },
          {
            id: 'py-i-oop-2',
            title: 'Inheritance & Polymorphism',
            content: "**Inheritance** allows a child class to use properties of a parent class. **Polymorphism** allows methods to behave differently based on the object calling them (method overriding).",
            codeExamples: [
              {
                title: "Inheritance",
                code: `class Animal:
    def sound(self):
        print("Animals make sound")

class Dog(Animal):  # Inherits from Animal
    # Polymorphism (Override)
    def sound(self):
        print("Bark")

class Cat(Animal):
    def sound(self):
        print("Meow")

d = Dog()
d.sound() # Bark`
              },
              {
                title: "Using super()",
                code: `class Person:
    def __init__(self, name):
        self.name = name

class Student(Person):
    def __init__(self, name, grade):
        super().__init__(name) # Call parent constructor
        self.grade = grade

s = Student("Alice", "A")
print(s.name, s.grade)`
              }
            ],
            exercise: "Create a class `Shape` with method `area()`. Create child classes `Rectangle` and `Circle` that override `area()`."
          },
          {
  id: 'py-i-oop-3',
  title: 'Encapsulation & Magic Methods',
  content: "Protect data with private variables (`__var`) and customize object behavior with magic methods (`__str__`, `__add__`).",
  codeExamples: [
    {
      title: "Encapsulation",
      code: `class Bank:
    def __init__(self):
        self.__balance = 0 # Private
    
    def deposit(self, amt):
        self.__balance += amt`
    },
    {
      title: "Magic Methods",
      code: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __str__(self):
        return f"({self.x}, {self.y})"
        
    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)`
    }
  ],
  exercise: "Create a class with a private variable. Try accessing it directly (error) and via a getter method."
}
        ]
      },
      {
        id: 'py-int-err',
        title: '5. Error Handling',
        subTopics: [
          {
            id: 'py-i-err-1',
            title: 'Try, Except, Finally & Raise',
            content: "Error handling prevents program crashes when unexpected events occur.\n\n*   `try`: Block of code to test for errors.\n*   `except`: Block to handle the error.\n*   `finally`: Executes regardless of the result.\n*   `raise`: Throw a custom error.",
            codeExamples: [
              {
                title: "Try/Except/Finally",
                code: `try:
    num = 5 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
finally:
    print("This will always run, useful for cleanup")`
              },
              {
                title: "Raising Errors",
                code: `def check_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
    print(f"Age is {age}")

try:
    check_age(-3)
except ValueError as e:
    print(e)`
              }
            ],
            exercise: "Write a function that accepts a list and an index. Use try/except to handle `IndexError` if the index is out of bounds."
          }
        ]
      },
      {
        id: 'py-int-mod',
        title: '6. Modules & Packages',
        subTopics: [
          {
            id: 'py-i-mod-1',
            title: 'Creating & Importing Modules',
            content: "Modules allow you to organize code into separate files for reuse. A module is simply a Python file (`.py`). A package is a directory of modules containing an `__init__.py`.",
            codeExamples: [
              {
                title: "Creating a Module",
                code: `# math_utils.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b`
              },
              {
                title: "Importing",
                code: `# main.py
import math_utils
# OR: from math_utils import add

result = math_utils.add(5, 7)
print(result)`
              }
            ],
            exercise: "Imagine you have a file `converter.py` with a function `km_to_miles(km)`. Write the code to import it and use it in `main.py`."
          }
        ]
      },
      {
        id: 'py-int-file',
        title: '7. File Handling',
        subTopics: [
          {
            id: 'py-i-file-1',
            title: 'Reading & Writing Files',
            content: "Python handles text, JSON, and CSV files easily.\n\n*   `open(filename, mode)`: 'r' (read), 'w' (write), 'a' (append).\n*   Using `with open(...)` is best practice as it automatically closes the file.",
            codeExamples: [
              {
                title: "Text Files",
                code: `// Write
with open("sample.txt", "w") as f:
    f.write("Hello Python")

// Read
with open("sample.txt", "r") as f:
    content = f.read()
    print(content)`
              }
            ],
            exercise: "Write a script that writes a list of 3 colors to 'colors.txt', each on a new line."
          },
          {
            id: 'py-i-json-full',
            title: 'Working with JSON',
            content: "JSON is the most common format for storing and exchanging data. Python has built-in support.",
            codeExamples: [
              {
                title: "Save & Load",
                code: `import json

# Save
students = [
    {"name": "Ram", "grade": "A"},
    {"name": "Priya", "grade": "B+"}
]

with open("students.json", "w") as f:
    json.dump(students, f, indent=2)

# Load
with open("students.json") as f:
    loaded = json.load(f)
    print(loaded[0]["name"])`
              }
            ],
            exercise: "Save a quiz with 3 questions (question, options, answer) to 'quiz.json'"
          },
          {
            id: 'py-i-csv-full',
            title: 'Working with CSV',
            content: "CSV files are used everywhere: Excel, Google Sheets, databases.",
            codeExamples: [
              {
                title: "Write & Read CSV",
                code: `import csv

# Write
data = [
    ["Name", "Age", "City"],
    ["Alice", 25, "Delhi"],
    ["Bob", 30, "Mumbai"]
]

with open("people.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerows(data)

# Read
with open("people.csv") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)`
              }
            ],
            exercise: "Create 'expenses.csv' with columns: date, item, amount"
          }
        ]
      },
      {
        id: 'py-int-api',
        title: '8. APIs & Networking',
        subTopics: [
          {
            id: 'py-i-api-1',
            title: 'Working with APIs',
            content: "APIs (Application Programming Interfaces) let your code talk to other software/servers to fetch real-time data (weather, crypto, etc.). The `requests` library is the standard for this.",
            codeExamples: [
              {
                title: "GET Request",
                code: `import requests

url = "https://api.github.com/users/octocat"
response = requests.get(url)

if response.status_code == 200:
    data = response.json() # Parse JSON
    print(f"User: {data['login']}")
    print(f"Company: {data['company']}")
else:
    print("Failed to fetch data")`
              },
              {
                title: "Handling Errors",
                code: `try:
    response = requests.get("https://fake-url.com")
    response.raise_for_status() # Raises error for 4xx/5xx
except requests.exceptions.RequestException as e:
    print(f"API Error: {e}")`
              }
            ],
            exercise: "Write a script using `requests` to fetch data from `https://jsonplaceholder.typicode.com/todos/1` and print the title."
          }
        ]
      },
      {
        id: 'py-int-venv',
        title: '9. Virtual Environments',
        subTopics: [
          {
            id: 'py-i-venv-1',
            title: 'Managing Dependencies',
            content: "Virtual environments isolate project dependencies so they don't conflict. This is professional best practice.",
            codeExamples: [
              {
                title: "Setup Commands",
                code: `# 1. Create venv
python -m venv myenv

# 2. Activate
# Windows:
myenv\\Scripts\\activate
# Mac/Linux:
source myenv/bin/activate

# 3. Install packages
pip install requests`
              },
              {
                title: "Requirements.txt",
                code: `# Save dependencies
pip freeze > requirements.txt

# Install from file
pip install -r requirements.txt`
              }
            ],
            exercise: "List the commands to create a virtual environment named 'project_env' and activate it on your OS."
          }
        ]
      },
      {
        id: 'py-int-proj',
        title: '10. Intermediate Projects',
        subTopics: [
          {
            id: 'py-i-proj-1',
            title: 'Real Project Ideas',
            content: "Apply your skills to build multi-page projects. Here are some structured ideas using modules, OOP, and APIs.",
            codeExamples: [
              {
                title: "Weather App Logic",
                code: `import requests

def get_weather(city):
    api_key = "YOUR_API_KEY"
    url = f"http://api.weatherapi.com/v1/current.json?key={api_key}&q={city}"
    data = requests.get(url).json()
    return data['current']['temp_c']

city = input("Enter city: ")
try:
    temp = get_weather(city)
    print(f"Current temp in {city} is {temp}°C")
except:
    print("Could not find city")`
              },
              {
                title: "Library Management (OOP)",
                code: `class Book:
    def __init__(self, title, author):
        self.title = title
        self.is_borrowed = False

    def borrow(self):
        if not self.is_borrowed:
            self.is_borrowed = True
            return True
        return False

library = [Book("1984", "Orwell"), Book("Hobbit", "Tolkien")]`
              }
            ],
            exercise: "Outline the classes and methods you would need to build a simple 'Quiz App' that loads questions from a JSON file."
          }
        ]
      }
    ]
  },
  Advanced: {
    introduction: "🟣 Level 3: Advanced. Scalable, Optimized, Production-Grade Code.",
    topics: [
      {
        id: 'py-adv-iter',
        title: '1. Iterators & Generators',
        subTopics: [
          {
            id: 'py-a-it-1',
            title: 'Memory Efficient Loops',
            content: "Generators save memory by generating values one-by-one instead of storing them all in memory at once. This is crucial for processing large datasets.",
            codeExamples: [
              {
                title: "Iterator",
                code: `nums = [1, 2, 3]
it = iter(nums)
print(next(it))  # 1
print(next(it))  # 2`
              },
              {
                title: "Generator Function",
                code: `def generate_numbers():
    for i in range(5):
        yield i   # 'yield' pauses function and returns value

for n in generate_numbers():
    print(n)`
              }
            ],
            exercise: "Create a generator `fibonacci(limit)` that yields Fibonacci numbers up to a given limit."
          }
        ]
      },
      {
        id: 'py-adv-dec',
        title: '2. Decorators',
        subTopics: [
          {
            id: 'py-a-dec-1',
            title: 'Modifying Functions',
            content: "Decorators allow you to modify or enhance functions without changing their code. They are widely used for logging, authentication, and rate-limiting.",
            codeExamples: [
              {
                title: "Basic Decorator",
                code: `def log(func):
    def wrapper():
        print("Function is starting...")
        func()
        print("Function ended.")
    return wrapper

@log
def say_hello():
    print("Hello World!")

say_hello()`
              },
              {
                title: "Decorator with Arguments",
                code: `def repeat(n):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(n):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hi {name}")

greet("Alice")`
              }
            ],
            exercise: "Write a `@timer` decorator that calculates and prints the execution time of a function."
          }
        ]
      },
      {
        id: 'py-adv-conc',
        title: '3. Multithreading & Multiprocessing',
        subTopics: [
          {
            id: 'py-a-conc-1',
            title: 'Parallel Execution',
            content: "**Multithreading** is for I/O-bound tasks (network, disk). **Multiprocessing** is for CPU-bound tasks (heavy calculations) to bypass the Global Interpreter Lock (GIL).",
            codeExamples: [
              {
                title: "Multithreading (I/O)",
                code: `import threading
import time

def task(name):
    time.sleep(1)
    print(f"Task {name} done")

t1 = threading.Thread(target=task, args=("A",))
t1.start()
t1.join() # Wait for completion`
              },
              {
                title: "Multiprocessing (CPU)",
                code: `from multiprocessing import Process

def calc_square(numbers):
    for n in numbers:
        print(f"Square: {n*n}")

if __name__ == "__main__":
    p = Process(target=calc_square, args=([1, 2, 3],))
    p.start()
    p.join()`
              }
            ],
            exercise: "Create two threads: one prints numbers 1-5, the other prints letters A-E. Run them concurrently."
          }
        ]
      },
      {
        id: 'py-adv-async',
        title: '4. Asynchronous Programming',
        subTopics: [
          {
            id: 'py-a-async-1',
            title: 'Async / Await',
            content: "Used for high-performance I/O operations (like fast APIs, real-time apps). `async` defines a coroutine, and `await` pauses execution until the task is done.",
            codeExamples: [
              {
                title: "Async Function",
                code: `import asyncio

async def fetch_data():
    print("Fetching...")
    await asyncio.sleep(2) # Simulates network delay
    print("Data received")

asyncio.run(fetch_data())`
              },
              {
                title: "Concurrent Tasks",
                code: `async def main():
    # Run multiple tasks at once
    await asyncio.gather(fetch_data(), fetch_data())

asyncio.run(main())`
              }
            ],
            exercise: "Write an async function that waits for 1 second and then prints 'Tick'. Run it 3 times concurrently."
          }
        ]
      },
      {
        id: 'py-adv-design',
        title: '5. Design Patterns',
        subTopics: [
          {
            id: 'py-a-dp-1',
            title: 'Singleton & Factory',
            content: "Design patterns are standard solutions to common problems.\n\n*   **Singleton**: Ensures a class has only one instance (e.g., Database connection).\n*   **Factory**: Creates objects dynamically without specifying the exact class.",
            codeExamples: [
              {
                title: "Singleton Pattern",
                code: `class Database:
    _instance = None
    def __new__(cls):
        if not cls._instance:
            cls._instance = super().__new__(cls)
        return cls._instance

db1 = Database()
db2 = Database()
print(db1 is db2) # True`
              },
              {
                title: "Factory Pattern",
                code: `class Dog:
    def speak(self): return "Woof"
class Cat:
    def speak(self): return "Meow"

def get_pet(pet_type):
    if pet_type == "dog": return Dog()
    elif pet_type == "cat": return Cat()

pet = get_pet("dog")
print(pet.speak())`
              }
            ],
            exercise: "Implement the Singleton pattern for a `Configuration` class that stores app settings."
          }
        ]
      },
      {
        id: 'py-adv-log',
        title: '6. Logging',
        subTopics: [
          {
            id: 'py-a-log-1',
            title: 'Professional Debugging',
            content: "Using `print()` is bad practice in production. Use the `logging` module to track events, errors, and status messages with timestamps and severity levels.",
            codeExamples: [
              {
                title: "Basic Logging",
                code: `import logging

logging.basicConfig(level=logging.INFO)

logging.debug("Debug info (hidden by default)")
logging.info("Server started")
logging.warning("Disk space low")
logging.error("Database connection failed")`
              },
              {
                title: "Logging to File",
                code: `logging.basicConfig(
    filename='app.log', 
    level=logging.ERROR,
    format='%(asctime)s - %(message)s'
)
logging.error("This goes to file")`
              }
            ],
            exercise: "Configure logging to write 'WARNING' and higher messages to a file named `warnings.log`."
          }
        ]
      },
      {
        id: 'py-adv-perf',
        title: '7. Optimization & Profiling',
        subTopics: [
          {
            id: 'py-a-perf-1',
            title: 'Time & Memory',
            content: "Profiling helps identifying slow code. Memory optimization involves using efficient data structures (like Generators or Slots).",
            codeExamples: [
              {
                title: "Timing Execution",
                code: `import time

start = time.time()
# Code to measure
sum(range(1000000))
end = time.time()

print(f"Execution Time: {end - start:.5f} sec")`
              },
              {
                title: "__slots__ for Memory",
                code: `class Point:
    # Restricts attributes to save memory
    __slots__ = ['x', 'y']
    def __init__(self, x, y):
        self.x = x
        self.y = y`
              }
            ],
            exercise: "Compare the execution time of creating a list of 1 million numbers vs. a generator expression."
          }
        ]
      },
      {
        id: 'py-adv-test',
        title: '8. Unit Testing',
        subTopics: [
          {
            id: 'py-a-test-1',
            title: 'Unittest Module',
            content: "Testing ensures your code doesn't break when you change it. `unittest` is Python's built-in testing framework.",
            codeExamples: [
              {
                title: "Basic Test",
                code: `import unittest

def add(a, b): return a + b

class TestMath(unittest.TestCase):
    def test_add(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)

if __name__ == '__main__':
    unittest.main()`
              }
            ],
            exercise: "Write a test case for a function `is_even(n)` that returns True if a number is even."
          }
        ]
      },
      {
        id: 'py-adv-pkg',
        title: '9. Package Publishing',
        subTopics: [
          {
            id: 'py-a-pkg-1',
            title: 'Creating a Pip Package',
            content: "Sharing your code with the world involves packaging it. The standard format is a wheel or source distribution uploaded to PyPI (Python Package Index). Key files include `setup.py` (or `pyproject.toml`).",
            codeExamples: [
              {
                title: "setup.py structure",
                code: `from setuptools import setup, find_packages

setup(
    name="my_package",
    version="0.1",
    packages=find_packages(),
    install_requires=[
        "requests",
    ],
)`
              },
              {
                title: "Build & Upload Commands",
                code: `# Install build tools
pip install build twine

# Build
python -m build

# Upload to PyPI
twine upload dist/*`
              }
            ],
            exercise: "Create a directory structure for a package named 'mathlib' containing an empty '__init__.py' and a 'setup.py'."
          }
        ]
      },
      {
        id: 'py-adv-db',
        title: '10. Database Integration',
        subTopics: [
          {
            id: 'py-a-db-1',
            title: 'SQL & NoSQL',
            content: "Backend apps typically require database connectivity. Python has libraries for almost every DB (SQLAlchemy, Psycopg2, PyMongo).",
            codeExamples: [
              {
                title: "SQLite (Built-in)",
                code: `import sqlite3

conn = sqlite3.connect('test.db')
cursor = conn.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS users (name TEXT)")
cursor.execute("INSERT INTO users VALUES ('Alice')")
conn.commit()

cursor.execute("SELECT * FROM users")
print(cursor.fetchall())
conn.close()`
              },
              {
                title: "MongoDB (PyMongo)",
                code: `from pymongo import MongoClient

# Requires MongoDB server running
# client = MongoClient("mongodb://localhost:27017")
# db = client["shop"]
# db.users.insert_one({"name": "Bob", "age": 30})`
              }
            ],
            exercise: "Write a script to create a SQLite table 'products' with columns 'id' and 'price', and insert one product."
          }
        ]
      },
      {
        id: 'py-adv-extra',
        title: '11. Expert Topics',
        subTopics: [
          {
            id: 'py-a-ex-1',
            title: 'Meta-programming',
            content: "Meta-programming involves writing code that manipulates code (e.g., creating classes dynamically or modifying them at runtime using metaclasses). This is powerful but should be used sparingly.",
            codeExamples: [
              {
                title: "Metaclass Example",
                code: `class Meta(type):
    def __new__(cls, name, bases, dct):
        print(f"Creating class {name}")
        return super().__new__(cls, name, bases, dct)

class MyClass(metaclass=Meta):
    pass
# Output: Creating class MyClass`
              }
            ],
            exercise: "Create a metaclass that automatically adds a `created_at` attribute to any class it creates."
          },
          {
            id: 'py-a-ex-2',
            title: 'Cython & Performance',
            content: "Cython is a superset of Python that compiles to C, offering significant performance improvements for computational heavy tasks.",
            codeExamples: [
              {
                title: "Cython Syntax",
                code: `# my_module.pyx
def say_hello():
    print("Hello from C-compiled Python!")

# This requires a build step with setup.py`
              }
            ],
            exercise: "Research how to compile a simple Python function using Cython and list the commands needed."
          },
          {
            id: 'py-a-ex-3',
            title: 'Memory Management',
            content: "Understanding Python's memory manager (PyMalloc) and Garbage Collector (GC) is crucial for optimizing long-running applications.",
            codeExamples: [
              {
                title: "Reference Counting",
                code: `import sys
a = []
b = a
print(sys.getrefcount(a)) # 3 (a, b, and argument to getrefcount)`
              }
            ],
            exercise: "Use the `gc` module to force a garbage collection cycle and print the number of unreachable objects found."
          },
          {
            id: 'py-a-ex-4',
            title: 'Concurrency Models',
            content: "Beyond threading and multiprocessing, modern Python uses `asyncio` for event loops and futures. Understanding the GIL (Global Interpreter Lock) impact is key.",
            codeExamples: [
              {
                title: "Event Loop",
                code: `import asyncio

async def main():
    print('Hello')
    await asyncio.sleep(1)
    print('World')

loop = asyncio.get_event_loop()
loop.run_until_complete(main())`
              }
            ],
            exercise: "Explain why the GIL limits CPU-bound multithreading in Python but not I/O-bound threading."
          }
        ]
      },
      {
        id: 'py-adv-proj',
        title: '12. Advanced Projects',
        subTopics: [
          {
            id: 'py-a-proj-1',
            title: 'Industry Standard Ideas',
            content: "These projects require combining multiple advanced concepts like threading, databases, and networking.",
            codeExamples: [
              {
                title: "Project Ideas List",
                code: `# 1. Automation Bot
# Use Selenium + Multithreading to scrape/automate sites.

# 2. Bank Backend System
# Use OOP + SQLite + Decorators (for logging transactions).

# 3. Stock Market Dashboard
# Use AsyncIO + Requests to fetch live data.

# 4. Web Scraper Engine
# Use Generators + CSV module to export data efficiently.`
              },
              {
                title: "Bank System Skeleton",
                code: `class Account:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        logging.info(f"{self.owner} deposited {amount}")

    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount`
              }
            ],
            exercise: "Design the class structure for a 'Library Management System' that includes `Book`, `Member`, and `Librarian` classes."
          }
        ]
      }
    ]
  }
};

import { LanguageContent } from '../types';

export const cppContent: LanguageContent = {
    Beginner: {
        introduction: "High performance foundation.",
        topics: [
            {
                id: 'cpp-beg-base',
                title: '1. Basics',
                subTopics: [
                    {
                        id: 'cpp-b-1',
                        title: 'Hello World & IO',
                        content: "C++ uses streams for Input/Output. `std::cout` (Character Output) writes to the console, and `std::cin` (Character Input) reads from the keyboard. The `<<` and `>>` operators direct the flow of data.",
                        codeExamples: [{
                            title: "IO Stream",
                            code: `#include <iostream>
using namespace std;

int main() {
    int x;
    cout << "Type a number: "; // Output
    cin >> x;                  // Input
    cout << "Your number is: " << x << endl;
    return 0;
}`
                        }],
                        exercise: "Write a program that asks for the user's name and age, then prints them back in a sentence."
                    },
                    {
                        id: 'cpp-b-2',
                        title: 'References & Pointers',
                        content: "C++ gives you direct control over memory. **Pointers** store the memory address of a variable. **References** are aliases for existing variables. Understanding these is crucial for efficient memory management.",
                        codeExamples: [{
                            title: "Reference",
                            code: `string food = "Pizza";
string &meal = food; // Reference to food

meal = "Burger";
// Changing 'meal' changes 'food' because they refer to the same memory
cout << food; // Outputs Burger`
                        }, {
                            title: "Pointer",
                            code: `int val = 5;
int* ptr = &val; // & operator gets the address

cout << ptr;  // Prints memory address (e.g., 0x7ffd...)
cout << *ptr; // Dereference: Prints value (5)`
                        }],
                        exercise: "Declare an integer variable `score`. Create a pointer `pScore` that points to it. Change the value of `score` using the pointer."
                    }
                ]
            }
        ]
    },
    Intermediate: {
        introduction: "Object Oriented Programming.",
        topics: [
            {
                id: 'cpp-int-oop',
                title: '1. Classes',
                subTopics: [
                    {
                        id: 'cpp-i-o-1',
                        title: 'Class Definition',
                        content: "Classes are the building blocks of OOP in C++. They bundle data and methods. Access specifiers (`public`, `private`) control visibility. The constructor is a special method called when an object is created.",
                        codeExamples: [{
                            title: "Basic Class",
                            code: `class Car {
  public:
    string brand;
    int year;
    
    // Constructor
    Car(string x, int y) {
      brand = x;
      year = y;
    }
    
    void honk() {
      cout << "Tuut!";
    }
};

int main() {
  // Create an object
  Car myCar("BMW", 1999);
  myCar.honk();
}`
                        }],
                        exercise: "Create a class `Dog` with a private property `age`. Create a public method `setAge(int a)` to modify it safely."
                    }
                ]
            }
        ]
    },
    Advanced: {
        introduction: "STL and Modern C++.",
        topics: [
            {
                id: 'cpp-adv-stl',
                title: '1. Standard Template Library',
                subTopics: [
                    {
                        id: 'cpp-a-s-1',
                        title: 'Vectors',
                        content: "The STL provides reusable algorithms and data structures. **Vectors** are dynamic arrays that resize themselves automatically when an element is inserted or deleted, making them more flexible than standard C-style arrays.",
                        codeExamples: [{
                            title: "Vector Usage",
                            code: `#include <vector>
#include <iostream>

int main() {
  std::vector<int> v = {1, 2, 3};
  v.push_back(4); // Add to end
  v.pop_back();   // Remove from end
  
  for(int i : v) {
      std::cout << i << " ";
  }
}`
                        }],
                        exercise: "Create a vector of integers. Use a loop to add the numbers 1 to 10 to it, then print the size of the vector."
                    },
                    {
                        id: 'cpp-a-s-2',
                        title: 'Maps',
                        content: "`std::map` is an associative container that stores elements in key-value pairs. It is usually implemented as a Red-Black Tree, so lookups are efficient (O(log n)).",
                        codeExamples: [{
                            title: "std::map",
                            code: `#include <map>
#include <iostream>

std::map<string, int> ages;
ages["Alice"] = 25;
ages["Bob"] = 30;

if (ages.count("Alice")) {
    cout << "Alice is " << ages["Alice"];
}`
                        }],
                        exercise: "Create a map that stores product names (string) and prices (double). Add 3 items and print the price of one of them."
                    }
                ]
            }
        ]
    }
};

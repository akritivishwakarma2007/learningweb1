
import { LanguageContent } from '../types';

export const goContent: LanguageContent = {
    Beginner: {
        introduction: "Simple, reliable, efficient.",
        topics: [
            {
                id: 'go-beg-core',
                title: '1. Core Concepts',
                subTopics: [
                    {
                        id: 'go-b-1',
                        title: 'Structure & Variables',
                        content: "Go programs are organized into packages. The `main` package is the entry point. Go is statically typed but supports type inference (using `:=`). Unused variables are considered compilation errors, enforcing clean code.",
                        codeExamples: [{
                            title: "Hello World",
                            code: `package main
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`
                        }, {
                            title: "Variables",
                            code: `var x int = 10
var y = 20     // Type inferred
z := 30        // Short declaration (func bodies only)

const Pi = 3.14`
                        }],
                        exercise: "Write a program that declares a constant `MaxSpeed` and prints it using `fmt.Println`."
                    },
                    {
                        id: 'go-b-2',
                        title: 'Control Structures',
                        content: "Go simplifies control structures. It has only one looping construct: `for`. It can be used as a traditional C-style for-loop, a while-loop, or an infinite loop.",
                        codeExamples: [{
                            title: "For Loop",
                            code: `for i := 0; i < 5; i++ {
    fmt.Println(i)
}`
                        }, {
                            title: "While-style Loop",
                            code: `sum := 1
for sum < 100 {
    sum += sum
}`
                        }, {
                            title: "If-Else",
                            code: `// You can execute a statement before the condition
if num := 9; num < 0 {
    fmt.Println(num, "is negative")
} else if num < 10 {
    fmt.Println(num, "is single digit")
} else {
    fmt.Println(num, "is multi digit")
}`
                        }],
                        exercise: "Use a for loop to print the countdown from 10 to 1, then print 'Liftoff!'."
                    }
                ]
            }
        ]
    },
    Intermediate: {
        introduction: "Structs, Interfaces and Pointers.",
        topics: [
            {
                id: 'go-int-struct',
                title: '1. Data Structures',
                subTopics: [
                    {
                        id: 'go-i-s-1',
                        title: 'Structs & Methods',
                        content: "Go is not Object-Oriented in the traditional sense (no classes). Instead, it uses **Structs** to define custom data types and allows you to define methods on those structs.",
                        codeExamples: [{
                            title: "Struct Definition",
                            code: `type Person struct {
    Name string
    Age  int
}

// Method defined on Person (Receiver)
func (p Person) Greet() {
    fmt.Println("Hi, I am", p.Name)
}

func main() {
    p := Person{Name: "Bob", Age: 25}
    p.Greet()
}`
                        }, {
                            title: "Pointers",
                            code: `// Pointers allow you to modify the original value
func updateAge(p *Person) {
    p.Age = 30 // Dereferencing is automatic
}

p := Person{Name: "Alice", Age: 20}
updateAge(&p) // Pass address`
                        }],
                        exercise: "Define a `Car` struct with `Make` and `Model`. Add a method `Drive()` that prints 'Vroom'."
                    },
                    {
                        id: 'go-i-s-2',
                        title: 'Maps and Slices',
                        content: "**Slices** are dynamic views into arrays and are more powerful/common than arrays. **Maps** are Go's built-in associative data type (hash tables). Both are reference types.",
                        codeExamples: [{
                            title: "Slices",
                            code: `primes := []int{2, 3, 5, 7, 11}
primes = append(primes, 13) // Automatically resizes
fmt.Println(primes[1:4])    // Slicing syntax: [3 5 7]`
                        }, {
                            title: "Maps",
                            code: `colors := make(map[string]string)
colors["red"] = "#ff0000"
colors["blue"] = "#0000ff"

delete(colors, "red") // Remove key`
                        }],
                        exercise: "Create a slice of strings containing 3 city names. Append a 4th city and print the entire slice."
                    }
                ]
            }
        ]
    },
    Advanced: {
        introduction: "Concurrency built-in.",
        topics: [
            {
                id: 'go-adv-conc',
                title: '1. Concurrency',
                subTopics: [
                    {
                        id: 'go-a-c-1',
                        title: 'Goroutines & Channels',
                        content: "Go's concurrency model is based on CSP (Communicating Sequential Processes). **Goroutines** are lightweight threads managed by the Go runtime. **Channels** are typed conduits that allow goroutines to communicate and synchronize execution.",
                        codeExamples: [{
                            title: "Goroutines",
                            code: `func say(s string) {
    for i := 0; i < 3; i++ {
        time.Sleep(100 * time.Millisecond)
        fmt.Println(s)
    }
}

func main() {
    // 'go' keyword starts a new goroutine
    go say("world")
    say("hello")
}`
                        }, {
                            title: "Channels",
                            code: `func sum(s []int, c chan int) {
    sum := 0
    for _, v := range s {
        sum += v
    }
    c <- sum // send sum to channel c
}

func main() {
    s := []int{7, 2, 8, -9, 4, 0}
    c := make(chan int)
    go sum(s[:len(s)/2], c)
    go sum(s[len(s)/2:], c)
    
    // Receive from c (blocks until data is ready)
    x, y := <-c, <-c 
    fmt.Println(x, y, x+y)
}`
                        }],
                        exercise: "Launch a goroutine that calculates the sum of 1 to 100 and sends the result to a channel. Print the result in main."
                    }
                ]
            }
        ]
    }
};

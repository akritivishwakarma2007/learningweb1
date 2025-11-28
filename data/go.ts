import { LanguageContent } from '../types';

export const goContent: LanguageContent = {
  Beginner: {
    introduction: "🟦 Level 1: Go Basics. Master syntax, pointers, collections, and building simple tools.",
    topics: [
      {
        id: 'go-beg-setup',
        title: '1. Install & Setup',
        subTopics: [
          {
            id: 'go-b-setup-1',
            title: 'Installation Process',
            content: "Steps to get Go running:\n1.  Download installer from `golang.org/dl`.\n2.  Run `go version` to verify.\n3.  **GOPATH**: The workspace directory containing source (`src`), compiled packages (`pkg`), and executables (`bin`).\n4.  **Go Modules**: The modern way to manage dependencies (replaces GOPATH for most uses).",
            codeExamples: [
              {
                title: "Verify Installation",
                code: `go version          # Check Go version
go env GOPATH       # Check default workspace`
              },
              {
                title: "Basic Commands",
                code: `go run main.go      # Compile and run
go build main.go    # Compile to executable
go fmt              # Format code
go mod init myapp   # Initialize module`
              }
            ],
            exercise: "Install Go and run a 'Hello World' program using `go run`."
          }
        ]
      },
      {
        id: 'go-beg-basics',
        title: '2. Go Basics',
        subTopics: [
          {
            id: 'go-b-base-1',
            title: 'Variables',
            content: "Go is statically typed. Variables can be declared explicitly or using short syntax. \n*   **Explicit**: `var name type`\n*   **Short**: `name := value` (inside functions only)\n*   **Zero Values**: Variables declared without value get a default (0, false, \"\", nil).",
            codeExamples: [
              {
                title: "Declaration Methods",
                code: `var age int = 25
var name = "John"   // Type inferred
salary := 50000.50  // Short declaration

// Multiple
var (
    id     int = 1001
    active bool = true
)`
              },
              {
                title: "Zero Values",
                code: `var i int     // 0
var f float64 // 0.0
var b bool    // false
var s string  // ""`
              }
            ],
            exercise: "Declare variables for your name, age, and height using different declaration styles."
          },
          {
            id: 'go-b-base-2',
            title: 'Constants',
            content: "Constants are immutable values known at compile time. `iota` is a special identifier for creating enumerated constants.",
            codeExamples: [
              {
                title: "Basic Constants",
                code: `const Pi = 3.14159
const AppName = "MyApp"`
              },
              {
                title: "Iota Enum",
                code: `const (
    Sunday = iota // 0
    Monday        // 1
    Tuesday       // 2
)`
              }
            ],
            exercise: "Create constants for the days of the week using `iota` starting from 1."
          }
        ]
      },
      {
        id: 'go-beg-ctrl',
        title: '3. Control Structures',
        subTopics: [
          {
            id: 'go-b-ctrl-1',
            title: 'Conditional Statements',
            content: "**If**: No parentheses around condition. Can include an init statement.\n**Switch**: Implicit break. Supports switching on values or expressions (tagless switch).",
            codeExamples: [
              {
                title: "If with Init",
                code: `if x := 10; x > 5 {
    fmt.Println("Big")
} else {
    fmt.Println("Small")
}`
              },
              {
                title: "Switch",
                code: `day := "Mon"
switch day {
case "Mon", "Tue":
    fmt.Println("Workday")
default:
    fmt.Println("Weekend")
}

// Tagless Switch
score := 85
switch {
case score >= 90: fmt.Println("A")
case score >= 80: fmt.Println("B")
}`
              }
            ],
            exercise: "Write a switch statement that categorizes a number as negative, zero, or positive."
          },
          {
            id: 'go-b-ctrl-2',
            title: 'Loops',
            content: "Go has only one loop keyword: `for`. It handles standard counting, while-style conditions, and infinite loops.",
            codeExamples: [
              {
                title: "Standard Loop",
                code: `for i := 1; i <= 5; i++ {
    fmt.Println(i)
}`
              },
              {
                title: "While-Style",
                code: `sum := 1
for sum < 100 {
    sum += sum
}`
              },
              {
                title: "Infinite & Break",
                code: `count := 0
for {
    count++
    if count == 3 { break }
}`
              }
            ],
            exercise: "Use a `for` loop to print all odd numbers between 1 and 20."
          }
        ]
      },
      {
        id: 'go-beg-func',
        title: '4. Functions',
        subTopics: [
          {
            id: 'go-b-func-1',
            title: 'Declaration & Returns',
            content: "Functions can accept parameters and return values. Go uniquely supports **Multiple Return Values**, often used for returning a result and an error.",
            codeExamples: [
              {
                title: "Basic & Multiple Return",
                code: `func add(a, b int) int {
    return a + b
}

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("zero division")
    }
    return a / b, nil
}`
              },
              {
                title: "Named Returns",
                code: `func rect(w, h int) (area, perim int) {
    area = w * h
    perim = 2 * (w + h)
    return // naked return
}`
              }
            ],
            exercise: "Write a function `stats` that takes two numbers and returns their sum, difference, and product."
          },
          {
            id: 'go-b-func-2',
            title: 'Parameters & Scope',
            content: "Arguments are passed by value (copied). Variables defined in functions are local.",
            codeExamples: [
              {
                title: "Pass by Value",
                code: `func increment(x int) {
    x++ // Only local copy changes
}

func main() {
    num := 10
    increment(num)
    fmt.Println(num) // Still 10
}`
              }
            ],
            exercise: "Demonstrate variable shadowing by declaring a variable with the same name inside a function block."
          }
        ]
      },
      {
        id: 'go-beg-coll',
        title: '5. Collections',
        subTopics: [
          {
            id: 'go-b-coll-1',
            title: 'Arrays',
            content: "Fixed-size sequence of elements. Size is part of the type.",
            codeExamples: [
              {
                title: "Array Usage",
                code: `var a [5]int
a[0] = 10
b := [3]int{1, 2, 3}

// Loop
for i := 0; i < len(b); i++ {
    fmt.Println(b[i])
}`
              }
            ],
            exercise: "Create an array of 5 strings and print them."
          },
          {
            id: 'go-b-coll-2',
            title: 'Slices',
            content: "Dynamic view of an array. Can grow and shrink. Uses `make` to create and `append` to add items.",
            codeExamples: [
              {
                title: "Slice Basics",
                code: `s := []int{1, 2, 3}
s = append(s, 4) // Resizes

// Slicing
part := s[1:3] // [2, 3]`
              },
              {
                title: "Make",
                code: `s := make([]int, 5, 10) // len 5, cap 10`
              }
            ],
            exercise: "Create a slice, append 3 items, and print a sub-slice of the first two items."
          },
          {
            id: 'go-b-coll-3',
            title: 'Maps',
            content: "Key-Value pairs (Hash Table). Unordered.",
            codeExamples: [
              {
                title: "Map Usage",
                code: `scores := make(map[string]int)
scores["Alice"] = 95
scores["Bob"] = 87

// Check key
if val, ok := scores["Bob"]; ok {
    fmt.Println("Bob:", val)
}

delete(scores, "Alice")`
              }
            ],
            exercise: "Create a map of capitals and iterate over it using `range`."
          }
        ]
      },
      {
        id: 'go-beg-ptr',
        title: '6. Pointers',
        subTopics: [
          {
            id: 'go-b-ptr-1',
            title: 'Basics & Dereferencing',
            content: "Pointers hold memory addresses. \n*   `&`: Get address.\n*   `*`: Get value at address.",
            codeExamples: [
              {
                title: "Basic Pointer",
                code: `x := 42
p := &x         // p is *int
fmt.Println(*p) // 42
*p = 100        // x becomes 100`
              }
            ],
            exercise: "Declare an integer and a pointer to it. Change the integer's value via the pointer."
          },
          {
            id: 'go-b-ptr-2',
            title: 'Pointers with Functions',
            content: "Pass pointers to functions to modify the original variable (Pass by Reference semantics).",
            codeExamples: [
              {
                title: "Modify Value",
                code: `func update(n *int) {
    *n = 50
}

func main() {
    val := 10
    update(&val)
    fmt.Println(val) // 50
}`
              },
              {
                title: "Swap",
                code: `func swap(a, b *int) {
    *a, *b = *b, *a
}`
              }
            ],
            exercise: "Write a function that takes a pointer to a string and appends ' World' to it."
          }
        ]
      },
      {
        id: 'go-beg-proj',
        title: '7. Beginner Projects',
        subTopics: [
          {
            id: 'go-b-proj-1',
            title: 'Project 1: Simple Calculator',
            content: "A console app to perform basic math operations.",
            codeExamples: [
              {
                title: "Calculator",
                code: `package main

import "fmt"

func main() {
	var a, b float64
	var operator string

	fmt.Print("Enter first number: ")
	fmt.Scan(&a)

	fmt.Print("Enter operator (+, -, *, /): ")
	fmt.Scan(&operator)

	fmt.Print("Enter second number: ")
	fmt.Scan(&b)

	switch operator {
	case "+":
		fmt.Printf("%.2f + %.2f = %.2f\n", a, b, a+b)
	case "-":
		fmt.Printf("%.2f - %.2f = %.2f\n", a, b, a-b)
	case "*":
		fmt.Printf("%.2f * %.2f = %.2f\n", a, b, a*b)
	case "/":
		if b == 0 {
			fmt.Println("Error: Division by zero")
		} else {
			fmt.Printf("%.2f / %.2f = %.2f\n", a, b, a/b)
		}
	default:
		fmt.Println("Error: Invalid operator. Please use +, -, *, or /")
	}
}`
              }
            ],
            exercise: "Add a loop to the calculator so it keeps asking for input until the user types 'exit'."
          },
          {
            id: 'go-b-proj-2',
            title: 'Project 2: Grade Manager',
            content: "Manage student grades using maps and slices.",
            codeExamples: [
              {
                title: "Logic",
                code: `package main

import "fmt"

func main() {
	// Create a map where key is student name (string) and value is slice of grades
	students := make(map[string][]float64)

	for {
		// Display menu options
		fmt.Println("\nStudent Grade Management")
		fmt.Println("1. Add grade for student")
		fmt.Println("2. Display all students and their grades")
		fmt.Println("3. Calculate average for a student")
		fmt.Println("4. Exit")

		var choice string
		fmt.Print("Enter your choice: ")
		fmt.Scan(&choice)

		switch choice {
		case "1":
			// Add a grade for a student
			var name string
			var grade float64

			fmt.Print("Enter student name: ")
			fmt.Scan(&name)
			fmt.Print("Enter grade: ")
			fmt.Scan(&grade)

			// Add the grade to the student's slice of grades
			students[name] = append(students[name], grade)
			fmt.Printf("Grade %.1f added for %s\n", grade, name)

		case "2":
			// Display all students and their grades
			if len(students) == 0 {
				fmt.Println("No student records available.")
			} else {
				fmt.Println("\nAll Student Grades:")
				for name, grades := range students {
					fmt.Printf("%s: ", name)
					// Print all grades for this student
					for i, g := range grades {
						if i > 0 {
							fmt.Print(", ")
						}
						fmt.Print(g)
					}
					fmt.Println()
				}
			}

		case "3":
			// Calculate and display average for a specific student
			var name string
			fmt.Print("Enter student name: ")
			fmt.Scan(&name)

			if grades, exists := students[name]; exists {
				// Calculate average
				var sum float64
				for _, g := range grades {
					sum += g
				}
				average := sum / float64(len(grades))

				fmt.Printf("%s's average grade: %.2f\n", name, average)
			} else {
				fmt.Println("Student not found.")
			}

		case "4":
			fmt.Println("Exiting program.")
			return

		default:
			fmt.Println("Invalid choice. Please select 1, 2, 3, or 4.")
		}
	}
}`
              }
            ],
            exercise: "Implement a menu system to Add Student, Add Grade, and View Average."
          }
        ]
      }
    ]
  },
  Intermediate: {
    introduction: "🟪 Level 2: Intermediate. Structs, Interfaces, Concurrency, and Modular Design.",
    topics: [
      {
        id: 'go-int-struct',
        title: '1. Structs & Methods',
        subTopics: [
          {
            id: 'go-i-struct-1',
            title: 'Structs & Embedding',
            content: "Structs are typed collections of fields. Go uses **Embedding** instead of inheritance. \n*   **Receiver**: Attaches a function to a struct, making it a method.",
            codeExamples: [
              {
                title: "Definition",
                code: `type Person struct {
    Name string
    Age  int
}`
              },
              {
                title: "Embedding",
                code: `type Employee struct {
    Person // Embedded (Promoted fields)
    ID     int
}
e := Employee{Person: Person{Name: "Bob"}, ID: 1}
fmt.Println(e.Name) // Access directly`
              },
              {
                title: "Anonymous Struct",
                code: `point := struct {
    X, Y int
}{10, 20}`
              }
            ],
            exercise: "Create a `Car` struct embedding an `Engine` struct with `Horsepower`."
          },
          {
            id: 'go-i-struct-2',
            title: 'Methods',
            content: "Functions attached to a type. \n*   **Value Receiver**: Receives a copy (read-only logic). \n*   **Pointer Receiver**: Receives reference (can modify struct).",
            codeExamples: [
              {
                title: "Value Receiver",
                code: `func (p Person) Greet() {
    fmt.Println("Hi", p.Name)
}`
              },
              {
                title: "Pointer Receiver",
                code: `func (p *Person) Grow() {
    p.Age++ // Mutates original
}`
              },
              {
                title: "Constructor Pattern",
                code: `func NewPerson(name string) *Person {
    return &Person{Name: name}
}`
              }
            ],
            exercise: "Add a `Scale` method to a `Circle` struct that doubles its radius (requires pointer receiver)."
          }
        ]
      },
      {
        id: 'go-int-intf',
        title: '2. Interfaces',
        subTopics: [
          {
            id: 'go-i-intf-1',
            title: 'Interfaces & Assertions',
            content: "Interfaces define behavior (method signatures). Implementation is **implicit** (no `implements` keyword). \n*   `interface{}`: Empty interface holds any type.\n*   **Type Assertion**: Extracting concrete type from interface.",
            codeExamples: [
              {
                title: "Declaration",
                code: `type Speaker interface {
    Speak() string
}`
              },
              {
                title: "Type Assertion",
                code: `var i interface{} = "hello"
s, ok := i.(string) // Check if string
if ok { fmt.Println(s) }`
              },
              {
                title: "Type Switch",
                code: `switch v := i.(type) {
case int: fmt.Println("Int", v)
case string: fmt.Println("String", v)
}`
              }
            ],
            exercise: "Create a `Shape` interface with `Area()`. Implement it for `Rect` and `Circle` structs."
          }
        ]
      },
      {
        id: 'go-int-err',
        title: '3. Error Handling',
        subTopics: [
          {
            id: 'go-i-err-1',
            title: 'Errors & Panic',
            content: "Go treats errors as values using the `error` interface, not exceptions. \n*   `panic`: Stops normal execution (like throw).\n*   `recover`: Regains control (like catch).",
            codeExamples: [
              {
                title: "Wrapping Errors",
                code: `if err != nil {
    return fmt.Errorf("failed to open: %w", err)
}`
              },
              {
                title: "Errors.Is/As",
                code: `if errors.Is(err, os.ErrNotExist) {
    fmt.Println("File missing")
}`
              },
              {
                title: "Panic/Recover",
                code: `defer func() {
    if r := recover(); r != nil {
        fmt.Println("Recovered:", r)
    }
}()
panic("boom")`
              }
            ],
            exercise: "Create a custom error struct `NetworkError` and check for it using `errors.As`."
          }
        ]
      },
      {
        id: 'go-int-conc',
        title: '4. Concurrency',
        subTopics: [
          {
            id: 'go-i-conc-1',
            title: 'Goroutines & WaitGroups',
            content: "**Goroutines**: Lightweight threads managed by Go runtime. Cheap to create.\n**WaitGroups**: Sync primitive to wait for a collection of goroutines to finish.\n**Mutex**: Protects shared data from race conditions.",
            codeExamples: [
              {
                title: "Goroutine",
                code: `go func() { fmt.Println("Async") }()`
              },
              {
                title: "WaitGroup",
                code: `var wg sync.WaitGroup
wg.Add(1)
go func() {
    defer wg.Done()
    // work
}()
wg.Wait()`
              },
              {
                title: "Mutex",
                code: `var mu sync.Mutex
mu.Lock()
counter++
mu.Unlock()`
              }
            ],
            exercise: "Run 10 goroutines that increment a shared counter. Use a Mutex to prevent race conditions."
          },
          {
            id: 'go-i-conc-2',
            title: 'Channels & Context',
            content: "**Channels**: Typed conduits to send/receive values between goroutines (avoid shared memory). \n**Context**: Carries deadlines, cancellation signals across API boundaries.",
            codeExamples: [
              {
                title: "Channels",
                code: `ch := make(chan int, 2) // Buffered
ch <- 1
val := <-ch
close(ch)`
              },
              {
                title: "Select Statement",
                code: `select {
case msg := <-ch: fmt.Println(msg)
case <-time.After(time.Second): fmt.Println("Timeout")
}`
              },
              {
                title: "Context Cancel",
                code: `ctx, cancel := context.WithCancel(context.Background())
go func() {
    <-ctx.Done() // Wait for cancel
    fmt.Println("Stopping")
}()
cancel() // Signal stop`
              }
            ],
            exercise: "Implement a worker pool pattern where 3 workers process jobs from a channel."
          }
        ]
      },
      {
        id: 'go-int-mod',
        title: '5. Packages & Modules',
        subTopics: [
          {
            id: 'go-i-mod-1',
            title: 'Modules & Imports',
            content: "Managing dependencies and organizing code. `go.mod` defines the module.",
            codeExamples: [
              {
                title: "Go Mod",
                code: `go mod init
go mod tidy // Downloads deps`
              },
              {
                title: "Imports",
                code: `import (
    "fmt"
    . "math" // Dot import (use directly)
    alias "net/http" // Alias
)`
              }
            ],
            exercise: "Create a multi-file project with a `utils` package imported in `main`."
          }
        ]
      },
      {
        id: 'go-int-test',
        title: '6. Testing',
        subTopics: [
          {
            id: 'go-i-test-1',
            title: 'Unit Tests & Benchmarks',
            content: "Go has a built-in `testing` package. \n*   Test files end in `_test.go`.\n*   Test functions start with `TestXxx`.\n*   Benchmarks start with `BenchmarkXxx`.",
            codeExamples: [
              {
                title: "Test Function",
                code: `func TestAdd(t *testing.T) {
    if Add(1, 2) != 3 {
        t.Error("Expected 3")
    }
}`
              },
              {
                title: "Table Driven Test",
                code: `tests := []struct{in, out int}{{1, 2}, {2, 4}}
for _, tt := range tests {
    // run test loop
}`
              },
              {
                title: "Benchmark",
                code: `func BenchmarkSort(b *testing.B) {
    for i := 0; i < b.N; i++ {
        sort.Ints(data)
    }
}`
              }
            ],
            exercise: "Write a table-driven test for a `Palindrome` function."
          }
        ]
      },
      {
        id: 'go-int-proj',
        title: '7. Intermediate Projects',
        subTopics: [
          {
            id: 'go-i-proj-1',
            title: 'Project 1: URL Shortener',
            content: "Map long URLs to short keys. Use a map for storage (or file). Serve via HTTP.",
            codeExamples: [{title: "Handler", code: `http.HandleFunc("/", redirect)`} ],
            exercise: "Add functionality to persist data to a JSON file on shutdown."
          },
          {
            id: 'go-i-proj-2',
            title: 'Project 2: Task Manager CLI',
            content: "CRUD operations on tasks via CLI arguments (`flag` package).",
            codeExamples: [{title: "Flags", code: `flag.String("add", "", "Add task")`} ],
            exercise: "Use `os.Args` and `flag` package to parse commands."
          },
          {
            id: 'go-i-proj-3',
            title: 'Project 3: REST API',
            content: "Native `net/http` API handling JSON request/response.",
            codeExamples: [{title: "JSON Response", code: `json.NewEncoder(w).Encode(data)`} ],
            exercise: "Implement GET and POST endpoints for a 'User' resource."
          },
          {
            id: 'go-i-proj-4',
            title: 'Project 4: Worker Pool',
            content: "Process jobs concurrently. A common Go pattern.",
            codeExamples: [{title: "Dispatcher", code: `go worker(jobChan, resultsChan)`} ],
            exercise: "Simulate processing image resizing jobs (mocked with sleep)."
          }
        ]
      }
    ]
  },
  Advanced: {
    introduction: "🟧 Level 3: Advanced. Internals, Microservices, Cloud Patterns, and High Performance.",
    topics: [
      {
        id: 'go-adv-conc',
        title: '1. Deep Concurrency',
        subTopics: [
          {
            id: 'go-a-conc-1',
            title: 'Patterns & Primitives',
            content: "Advanced concurrency patterns for robust systems.\n*   **Fan-In/Out**: Distributing and consolidating work.\n*   **Pipelines**: Chaining stages.\n*   **Atomics**: Lock-free operations.",
            codeExamples: [
              {
                title: "Fan-In",
                code: `func merge(cs ...<-chan int) <-chan int {
    var wg sync.WaitGroup
    out := make(chan int)
    // Start goroutine for each c in cs to send to out
    // Wait for all, then close out
    return out
}`
              },
              {
                title: "Atomic",
                code: `atomic.AddInt64(&ops, 1)
val := atomic.LoadInt64(&ops)`
              },
              {
                title: "Pipeline",
                code: `// Generator -> Filter -> Map -> Reduce`
              }
            ],
            exercise: "Implement a pipeline that reads lines from a file, filters lines containing 'error', and counts them."
          }
        ]
      },
      {
        id: 'go-adv-intern',
        title: '2. Go Internals',
        subTopics: [
          {
            id: 'go-a-int-1',
            title: 'Memory & GC',
            content: "Understanding low-level behavior.\n*   **Stack vs Heap**: Stack is fast, Heap is GC-managed.\n*   **Escape Analysis**: Compiler decides allocation.\n*   **GC**: Tri-color mark and sweep.",
            codeExamples: [
              {
                title: "Escape Analysis",
                code: `// go build -gcflags '-m'
func create() *int {
    x := 10 
    return &x // Escapes to heap (reference returned)
}`
              },
              {
                title: "Data Alignment",
                code: `type Bad struct {
    A bool   // 1 byte
    B int64  // 8 bytes (7 bytes padding added)
    C bool   // 1 byte
}`
              }
            ],
            exercise: "Optimize a struct layout to minimize memory padding."
          }
        ]
      },
      {
        id: 'go-adv-ref',
        title: '3. Interfaces & Reflection',
        subTopics: [
          {
            id: 'go-a-ref-1',
            title: 'Reflection & Tags',
            content: "Inspect types at runtime. Used by JSON/ORM libs.\n*   `reflect` package.\n*   **Struct Tags**: Metadata attached to fields.",
            codeExamples: [
              {
                title: "Reflection",
                code: `t := reflect.TypeOf(x)
v := reflect.ValueOf(x)
fmt.Println(t.Name(), v.Int())`
              },
              {
                title: "Struct Tags",
                code: `type User struct {
    Name string \`json:"name" xml:"n"\`
}`
              },
              {
                title: "Dynamic Call",
                code: `v.MethodByName("Run").Call(nil)`
              }
            ],
            exercise: "Write a function that prints all field names and values of any struct passed to it."
          }
        ]
      },
      {
        id: 'go-adv-tool',
        title: '4. Build Systems',
        subTopics: [
          {
            id: 'go-a-tool-1',
            title: 'Tooling Commands',
            content: "Mastering the Go CLI for production.\n*   `go build`: Compile.\n*   `go vet`: Lint.\n*   `go generate`: Code gen.\n*   `go fuzz`: Fuzz testing.",
            codeExamples: [
              {
                title: "Build Flags",
                code: `go build -ldflags="-s -w" . // Strip debug info`
              },
              {
                title: "Generate",
                code: `//go:generate stringer -type=Pill`
              },
              {
                title: "Fuzzing",
                code: `func FuzzParse(f *testing.F) {
    f.Fuzz(func(t *testing.T, data []byte) {
        Parse(data) // Should not crash
    })
}`
              }
            ],
            exercise: "Use `go generate` to auto-generate `String()` methods for an enum."
          }
        ]
      },
      {
        id: 'go-adv-net',
        title: '5. Networking',
        subTopics: [
          {
            id: 'go-a-net-1',
            title: 'TCP/UDP & Sockets',
            content: "Low-level networking with `net` package. Building custom protocols or high-perf servers.",
            codeExamples: [
              {
                title: "TCP Server",
                code: `ln, _ := net.Listen("tcp", ":8080")
for {
    conn, _ := ln.Accept()
    go handle(conn)
}`
              },
              {
                title: "UDP Client",
                code: `conn, _ := net.Dial("udp", "127.0.0.1:8080")
conn.Write([]byte("hello"))`
              }
            ],
            exercise: "Create a simple TCP chat server that broadcasts messages to all connected clients."
          }
        ]
      },
      {
        id: 'go-adv-web',
        title: '6. Web Development',
        subTopics: [
          {
            id: 'go-a-web-1',
            title: 'Frameworks & Middleware',
            content: "Standard lib is great, but frameworks like **Gin**, **Fiber**, or **Echo** add routing/middleware convenience.\n**Middleware**: Intercept requests (logging, auth).",
            codeExamples: [
              {
                title: "Middleware",
                code: `func logging(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        log.Println(r.URL)
        next.ServeHTTP(w, r)
    })
}`
              },
              {
                title: "Gin",
                code: `r := gin.Default()
r.GET("/ping", func(c *gin.Context) {
    c.JSON(200, gin.H{"msg": "pong"})
})`
              },
              {
                title: "JWT Auth",
                code: `token := jwt.NewWithClaims(...)
ss, err := token.SignedString(myKey)`
              }
            ],
            exercise: "Create a middleware that validates an 'Authorization' header token."
          }
        ]
      },
      {
        id: 'go-adv-micro',
        title: '7. Microservices',
        subTopics: [
          {
            id: 'go-a-micro-1',
            title: 'gRPC & Brokers',
            content: "**gRPC**: High performance RPC using Protobufs.\n**Message Queues**: Kafka/RabbitMQ for async communication.",
            codeExamples: [
              {
                title: "gRPC Proto",
                code: `service Greeter { 
    rpc SayHello (Request) returns (Reply) {} 
}`
              },
              {
                title: "Kafka Reader",
                code: `r := kafka.NewReader(kafka.ReaderConfig{
    Brokers: []string{"localhost:9092"},
    Topic:   "my-topic",
})`
              }
            ],
            exercise: "Create a gRPC server and client that exchange a simple message defined in a `.proto` file."
          }
        ]
      },
      {
        id: 'go-adv-db',
        title: '8. Databases',
        subTopics: [
          {
            id: 'go-a-db-1',
            title: 'SQL, GORM, Redis',
            content: "Interacting with data stores.\n*   `database/sql`: Standard interface.\n*   **GORM**: ORM for Go.\n*   **Redis**: In-memory caching.",
            codeExamples: [
              {
                title: "database/sql",
                code: `db.QueryRow("SELECT name FROM users WHERE id=?", 1)`
              },
              {
                title: "GORM",
                code: `db.Create(&Product{Code: "D42", Price: 100})`
              },
              {
                title: "Redis",
                code: `rdb.Set(ctx, "key", "value", 0).Err()`
              }
            ],
            exercise: "Write a program that checks Redis for a key, and if missing, fetches from DB and sets it in Redis."
          }
        ]
      },
      {
        id: 'go-adv-proj',
        title: '9. Advanced Projects',
        subTopics: [
          {
            id: 'go-a-proj-1',
            title: 'Project 1: High-Perf REST API',
            content: "Use Fiber (Fastest http framework) + GORM + Postgres.",
            codeExamples: [{title: "Fiber Setup", code: `app := fiber.New()`} ],
            exercise: "Benchmark your endpoints using `wrk` or `apache bench`."
          },
          {
            id: 'go-a-proj-2',
            title: 'Project 2: Chat Server',
            content: "WebSockets + Pub/Sub (Redis) to scale across multiple instances.",
            codeExamples: [{title: "Upgrader", code: `websocket.Upgrader{}`} ],
            exercise: "Support multiple chat rooms."
          },
          {
            id: 'go-a-proj-3',
            title: 'Project 3: gRPC Microservices',
            content: "Service A calls Service B using gRPC.",
            codeExamples: [{title: "Client", code: `pb.NewGreeterClient(conn)`} ],
            exercise: "Implement retry logic in the client."
          },
          {
            id: 'go-a-proj-4',
            title: 'Project 4: Job Scheduler',
            content: "Real-time scheduling with cron-like functionality.",
            codeExamples: [{title: "Ticker", code: `time.NewTicker(1 * time.Minute)`} ],
            exercise: "Persist job execution status to DB."
          },
          {
            id: 'go-a-proj-5',
            title: 'Project 5: Kafka Service',
            content: "Producer/Consumer architecture for processing logs.",
            codeExamples: [{title: "Reader", code: `kafka.NewReader(...)`} ],
            exercise: "Handle message processing failures (Dead Letter Queue)."
          }
        ]
      }
    ]
  }
};
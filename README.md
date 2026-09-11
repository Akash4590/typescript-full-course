TypeScript Practice

A dedicated repository for learning and practicing TypeScript from fundamentals to Object-Oriented Programming, interfaces, modules, DOM manipulation, and advanced type concepts.

This repository contains my daily TypeScript practice code and examples. I am continuously adding new concepts and improving my understanding through hands-on coding.

 Learning Goals

The main goal of this repository is to build a strong foundation in TypeScript and understand how it can be used to write safer, more maintainable, and scalable JavaScript applications.

---

📚 Topics Covered

 TypeScript Fundamentals

* Introduction to TypeScript
* TypeScript configuration (`tsconfig.json`)
* TypeScript with HTML
* TypeScript compilation
* Basic TypeScript syntax

 Data Types

* Number
* String
* Boolean
* Null
* Undefined
* BigInt
* Symbol

 Arrays & Tuples

* Arrays
* Typed Arrays
* Tuples
* Tuple types

 Objects & Special Types

* Object types
* `any`
* `unknown`
* `never`

 Function & Parameter Types

* Parameter types
* Return types
* Typed functions

 Advanced Type System

* Union Types
* Intersection Types
* Type Aliases
* `type` keyword
* Working with multiple types

Enums

* Enum basics
* Using enums with variables and objects

Object-Oriented Programming

* Classes
* Class properties and methods
* Inheritance
* Access Modifiers

  * `public`
  * `private`
  * `protected`
* Getters
* Setters

Interfaces

* Interface basics
* Interface properties
* Interfaces with classes
* Extending interfaces

 Modules

* Exporting modules
* Importing modules
* Working with multiple TypeScript files

 DOM Manipulation

* TypeScript with the DOM
* Selecting HTML elements
* Handling DOM elements with proper types
* Basic DOM interaction



 📁 Repository Structure

text
typescript-practice/
│
├── basics/
│   ├── datatypes
│   ├── variables
│   └── functions
│
├── arrays-tuples/
│
├── objects/
│
├── advanced-types/
│   ├── union
│   ├── intersection
│   ├── any
│   ├── unknown
│   └── never
│
├── enums/
│
├── classes/
│   ├── inheritance
│   ├── access-modifiers
│   └── getter-setter
│
├── interfaces/
│
├── modules/
│
├── dom/
│
├── index.html
├── tsconfig.json
└── README.md


 The folder structure may change as I continue adding and organizing new practice examples.



🛠️ Technologies

* TypeScript
* JavaScript
* HTML
* DOM API
* Node.js — for TypeScript development and compilation
  Git & GitHub

---

💻 Example

One of the concepts practiced in this repository is TypeScript classes with getters and setters:

typescript
class Employee {
    private _name: string = "Ali";
    private _email: string = "ali@gmail.com";

    get name(): string {
        return "MR. " + this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}


This repository contains many similar examples covering different TypeScript concepts.



 📈 Learning Progress

I am following a **hands-on learning approach** by writing code for each concept instead of only studying the theory.

Completed / Practiced

* [x] TypeScript fundamentals
* [x] Data types
* [x] Arrays & Tuples
* [x] Objects
* [x] `any`, `unknown`, `never`
* [x] Function parameter types
* [x] Union types
* [x] Intersection types
* [x] Type aliases
* [x] Enums
* [x] Classes
* [x] Inheritance
* [x] Access modifiers
* [x] Getters & Setters
* [x] Interfaces
* [x] Interfaces with classes
* [x] Modules
* [x] TypeScript with HTML
* [x] DOM manipulation

🚧 Currently

* Daily TypeScript practice
* Solving small coding exercises
* Revising TypeScript concepts
* Building small TypeScript examples
* Improving understanding of TypeScript with real projects

 🔜 Next Steps

* Generics
* Type narrowing
* Type guards
* Utility types
* Advanced interfaces
* Advanced OOP
* TypeScript with React
* TypeScript with Node.js
* TypeScript in full-stack applications


 🎯 Why I'm Learning TypeScript

I am learning TypeScript to strengthen my JavaScript development skills and write more reliable and maintainable applications.

My long-term goal is to use TypeScript in **full-stack web development and AI-powered applications**.


  Note

This is a learning and practice repository. The code is continuously updated as I learn new TypeScript concepts and practice them through small examples.

More concepts, exercises, and projects will be added over time.



👨‍💻 Author

Akash Khan

Learning, practicing, and building with TypeScript 🚀



⭐ If you're also learning TypeScript, feel free to explore the examples and practice along with me.

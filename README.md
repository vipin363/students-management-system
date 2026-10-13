# Student Management System

A modular Student Management System built using TypeScript, following Object-Oriented Programming (OOP), SOLID principles, and a layered architecture.

## Features

- Add a new student
- View all students
- Find a student by ID
- Update student details
- Delete a student
- Validate student data
- Prevent duplicate student IDs and email addresses
- Use interfaces for abstraction
- Apply Dependency Injection
- Separate application responsibilities into layers

## Technologies Used

- TypeScript
- Node.js
- tsx

## Project Architecture

- **Models:** Define Student, User, and Admin classes.
- **Interfaces:** Define contracts for repositories and services.
- **Repositories:** Handle student data storage and retrieval.
- **Services:** Implement business logic and validation.
- **Controllers:** Provide an interface for application operations.
- **Utils:** Contain reusable validation logic.

## Installation

Clone the repository and navigate to the project directory.

Install dependencies:

npm install

Run the application:

npm start

## Example Operations

```typescript
studentController.addStudent({
  id: 1,
  name: "Vipin",
  email: "vipin@example.com",
  age: 22,
});

console.log(studentController.getAllStudents());

console.log(studentController.getStudentById(1));

studentController.updateStudent({
  id: 1,
  age: 25,
});

studentController.deleteStudent(1);
```

## Learning Objectives

- TypeScript fundamentals and type safety
- Classes, inheritance, and abstraction
- Interfaces and type aliases
- DTOs (Data Transfer Objects)
- Repository and Service patterns
- Dependency Injection
- SOLID principles
- Separation of Concerns

## Future Improvements

- Persistent database integration
- REST API using Express.js
- Unit testing
- Improved error handling
- Student search and filtering

## Author

Developed as a TypeScript learning project.
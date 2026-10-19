
import { StudentRepository } from "./repositories/StudentRepository.js";
import { StudentService } from "./services/StudentService.js";
import { StudentController } from "./controllers/StudentController.js";

const studentRepository = new StudentRepository();
const studentService = new StudentService(studentRepository);
const studentController = new StudentController(studentService);

studentController.addStudent({
  id: 1,
  name: "Vipin",
  email: "vipin@example.com",
  age: 22,
});

studentController.addStudent({
   id: 2,
    name:"Rahul",
    email:"rahul@example.com",
    age:23,
});

console.log("All Students:");
console.log(studentController.getAllStudents());

console.log("Find Student:");
console.log(studentController.getStudentById(1));

console.log("\nUPDATE: Change Vipin's age");

console.log(
  studentController.updateStudent({
    id: 1,
    age: 25,
  })
);

console.log("Delete result:");
console.log(studentController.deleteStudent(2));

console.log("Students after deletion:");
console.log(studentController.getAllStudents());



import { Student } from "../models/Student.js";
import type { IStudentService } from "../interfaces/IStudentService.js";

export class StudentController {
    constructor(
        private readonly studentService: IStudentService ) {}

    addStudent(
        id: number,
        name: string,
        email: string,
        age: number
    ): void {
        this.studentService.addStudent(id, name, email, age);
        console.log("Student added successfully!");
    }

    getAllStudents(): Student[] {
        return this.studentService.getAllStudents();
    }

    getStudentById(id: number): Student | undefined {
        return this.studentService.getStudentById(id);
    }

    updateStudent(student: Student): boolean {
        return this.studentService.updateStudent(student);
    }

    deleteStudent(id: number): boolean {
        return this.studentService.deleteStudent(id);
    }
}


import { Student } from "../models/Student.js";
import type { IStudentRepository } from "../interfaces/IStudentRepository.js";
import type { IStudentService } from "../interfaces/IStudentService.js";

export class StudentService implements IStudentService {
    constructor(
        private readonly studentRepository: IStudentRepository
    ) {}

    addStudent(
        id: number,
        name: string,
        email: string,
        age: number
    ): void {
        const student = new Student(id, name, email, age);
        this.studentRepository.add(student);
    }

    getStudentById(id: number): Student | undefined {
        return this.studentRepository.findById(id);
    }

    getAllStudents(): Student[] {
        return this.studentRepository.findAll();
    }

    updateStudent(student: Student): boolean {
        return this.studentRepository.update(student);
    }

    deleteStudent(id: number): boolean {
        return this.studentRepository.delete(id);
    }
}

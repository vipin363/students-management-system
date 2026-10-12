
import type { Student } from "../models/Student.js";

export interface IStudentService {
    addStudent(
        id: number,
        name: string,
        email: string,
        age: number
    ): void;

    getStudentById(id: number): Student | undefined;
    getAllStudents(): Student[];
    updateStudent(student: Student): boolean;
    deleteStudent(id: number): boolean;
}

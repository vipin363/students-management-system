
import { Student } from "../models/Student.js";

export interface IStudentRepository {
    add(student: Student): void;
    findById(id: number): Student | undefined;
    findByEmail(email: string): Student | undefined;
    findAll(): Student[];
    update(student: Student): boolean;
    delete(id: number): boolean;
}

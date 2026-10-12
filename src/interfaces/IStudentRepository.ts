
import { Student } from "../models/Student.js";

export interface IStudentRepository {
    add(student: Student): void;
    findById(id: number): Student | undefined;
    findAll(): Student[];
    update(student: Student): boolean;
    delete(id: number): boolean;
}

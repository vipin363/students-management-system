
import { Student } from "../models/Student.js";
import type { IStudentRepository } from "../interfaces/IStudentRepository.js";

export class StudentRepository implements IStudentRepository {
    private students: Student[] = [];

    add(student: Student): void {
        this.students.push(student);
    }

    findById(id: number): Student | undefined {
        return this.students.find(student => student.id === id);
    }

     findByEmail(email: string): Student | undefined {
     return this.students.find(
        student => student.email.toLowerCase() === email.toLowerCase()
    );
}

    findAll(): Student[] {
        return [...this.students];
    }

    update(student: Student): boolean {
        const index = this.students.findIndex(
            item => item.id === student.id
        );

        if (index === -1) {
            return false;
        }

        this.students[index] = student;
        return true;
    }

    delete(id: number): boolean {
        const index = this.students.findIndex(
            student => student.id === id
        );

        if (index === -1) {
            return false;
        }

        this.students.splice(index, 1);
        return true;
    }
}





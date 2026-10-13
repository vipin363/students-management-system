import type { CreateStudentRequest } from "../interfaces/StudentDTO.js";

export class StudentValidator {
    static validate(data: CreateStudentRequest): void {
        if (!Number.isInteger(data.id) || data.id <= 0) {
            throw new Error("Student ID must be a positive integer");
        }

        if (data.name.trim().length < 2) {
            throw new Error("Name must contain at least 2 characters");
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            throw new Error("Invalid email address");
        }

        if (!Number.isInteger(data.age) || data.age < 5 || data.age > 100) {
            throw new Error("Age must be an integer between 5 and 100");
        }
    }

    
static validateUpdate(data: {
    name?: string;
    email?: string;
    age?: number;
}): void {
    if (data.name !== undefined && data.name.trim().length < 2) {
        throw new Error("Name must contain at least 2 characters");
    }

    if (
        data.email !== undefined &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
    ) {
        throw new Error("Invalid email address");
    }

    if (
        data.age !== undefined &&
        (!Number.isInteger(data.age) || data.age < 5 || data.age > 100)
    ) {
        throw new Error("Age must be an integer between 5 and 100");
    }
}

}



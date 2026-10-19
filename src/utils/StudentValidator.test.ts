
import { describe, it, expect } from "vitest";
import { StudentValidator } from "./StudentValidator.js";

describe("StudentValidator", () => {
    it("should accept valid student data", () => {
        const student = {
            id: 1,
            name: "Vipin",
            email: "vipin@example.com",
            age: 22,
        };

        expect(() => StudentValidator.validate(student)).not.toThrow();
    });

    it("should reject an invalid age", () => {
        const student = {
            id: 1,
            name: "Vipin",
            email: "vipin@example.com",
            age: 4,
        };

        expect(() => StudentValidator.validate(student))
            .toThrow("Age must be an integer between 5 and 100");
    });

    it("should reject an invalid email", () => {
        const student = {
            id: 1,
            name: "Vipin",
            email: "invalid-email",
            age: 22,
        };

        expect(() => StudentValidator.validate(student))
            .toThrow("Invalid email address");
    });

    it("should reject a short name", () => {
        const student = {
            id: 1,
            name: "V",
            email: "vipin@example.com",
            age: 22,
        };

        expect(() => StudentValidator.validate(student))
            .toThrow("Name must contain at least 2 characters");
    });
});

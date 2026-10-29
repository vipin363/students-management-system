
import { Student } from "../models/Student.js";
import type { IStudentRepository } from "../interfaces/IStudentRepository.js";
import type { IStudentService } from "../interfaces/IStudentService.js";
import { StudentValidator } from "../utils/StudentValidator.js";
import type {
  CreateStudentRequest,
  UpdateStudentRequest,
  StudentResponse,
} from "../interfaces/StudentDTO.js";

export class StudentService implements IStudentService {
    constructor(
        private readonly studentRepository: IStudentRepository
    ) {}


addStudent(data: CreateStudentRequest): StudentResponse {
  StudentValidator.validate(data);

  if (this.studentRepository.findById(data.id)) {
    throw new Error("Student ID already exists");
  }

  if (this.studentRepository.findByEmail(data.email)) {
    throw new Error("Email already exists");
  }

  const student = new Student(
    data.id,
    data.name,
    data.email,
    data.age
  );

  this.studentRepository.add(student);

  return this.toStudentResponse(student);
}



    
getStudentById(id: number): StudentResponse | undefined {
  const student = this.studentRepository.findById(id);

  if (!student) {
    return undefined;
  }

  return this.toStudentResponse(student);
}


    
getAllStudents(): StudentResponse[] {
  return this.studentRepository
    .findAll()
    .map((student) => this.toStudentResponse(student));
}


   

updateStudent(data: UpdateStudentRequest): StudentResponse {
  StudentValidator.validateUpdate(data);

  const existingStudent = this.studentRepository.findById(data.id);

  if (!existingStudent) {
    throw new Error("Student not found");
  }

  if (data.email !== undefined) {
    const emailOwner = this.studentRepository.findByEmail(data.email);

    if (emailOwner && emailOwner.id !== data.id) {
      throw new Error("Email already exists");
    }
  }

  const updatedStudent = new Student(
    existingStudent.id,
    data.name ?? existingStudent.name,
    data.email ?? existingStudent.email,
    data.age ?? existingStudent.age
  );

  this.studentRepository.update(updatedStudent);

  return this.toStudentResponse(updatedStudent);
}



    deleteStudent(id: number): boolean {
        return this.studentRepository.delete(id);
    }

    
private toStudentResponse(student: Student): StudentResponse {
  return {
    id: student.id,
    name: student.name,
    email: student.email,
    age: student.age,
  };
}

}

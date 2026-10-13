
import type { IStudentService } from "../interfaces/IStudentService.js";
import type {
  UpdateStudentRequest,
  StudentResponse,
  CreateStudentRequest,
} from "../interfaces/StudentDTO.js";

export class StudentController {
  constructor(
    private readonly studentService: IStudentService
  ) {}

  addStudent(data: CreateStudentRequest): StudentResponse {
    return this.studentService.addStudent(data);
  }

  getAllStudents(): StudentResponse[] {
    return this.studentService.getAllStudents();
  }

  getStudentById(id: number): StudentResponse | undefined {
    return this.studentService.getStudentById(id);
  }

  updateStudent(data: UpdateStudentRequest): StudentResponse {
    return this.studentService.updateStudent(data);
  }

  deleteStudent(id: number): boolean {
    return this.studentService.deleteStudent(id);
  }
}

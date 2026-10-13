
import type {
  CreateStudentRequest,
  UpdateStudentRequest,
  StudentResponse,
} from "./StudentDTO.js";

export interface IStudentService {
  addStudent(data: CreateStudentRequest): StudentResponse;

  getStudentById(id: number): StudentResponse | undefined;

  getAllStudents(): StudentResponse[];

  updateStudent(data: UpdateStudentRequest): StudentResponse;

  deleteStudent(id: number): boolean;
}

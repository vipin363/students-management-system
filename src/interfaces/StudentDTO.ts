
export interface CreateStudentRequest {
    id: number;
    name: string;
    email: string;
    age: number;
}


export type UpdateStudentRequest = {
    id: number;
} & Partial<
    Pick<CreateStudentRequest, "name" | "email" | "age">
>;


export interface StudentResponse {
    readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly age: number;
}

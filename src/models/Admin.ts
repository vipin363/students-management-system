
import { User } from "./User.js";

export class Admin extends User {
    constructor(
        id: number,
        name: string,
        email: string
    ) {
        super(id, name, email);
    }

    getRole(): string {
        return "Admin";
    }

    getPermissions(): string[] {
        return [
            "create-student",
            "view-all-students",
            "update-student",
            "delete-student"
        ];
    }
}

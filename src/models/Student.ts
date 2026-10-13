
import { User } from "./User.js";

export class Student extends User {
    constructor(
        id: number,
        name: string,
        email: string,
        private _age: number
    ) {
        super(id, name, email);
    }

    get age(): number {
        return this._age;
    }

    updateDetails(
        name: string,
        email: string,
        age: number
    ): void {
        this.updateProfile(name, email);

        this._age = age;
    }

    getRole(): string {
        return "Student";
    }

    getPermissions(): string[] {
        return ["view-own-profile", "update-own-profile"];
    }
}

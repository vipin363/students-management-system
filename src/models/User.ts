
export abstract class User {
    constructor(
        public readonly id: number,
        private _name: string,
        private _email: string
    ) {}

    get name(): string {
        return this._name;
    }

    get email(): string {
        return this._email;
    }

    updateProfile(name: string, email: string): void {
        this._name = name;
        this._email = email;
    }

    abstract getRole(): string;

    abstract getPermissions(): string[];
}

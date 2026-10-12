export class Student{
    constructor(
        public readonly id:number,
        private _name:string,
        private _email:string,
        private _age:number
    ){}
    get name():string{
        return this._name;
    }
    get email():string{
        return this._email;
    }
    get age():number{
        return this._age;
    }
    updateDetails(name: string,email: string,age: number): void {
          this._name = name;
          this._email = email;
          this._age = age;
}
}
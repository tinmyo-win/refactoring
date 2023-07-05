class Person {
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name; }
    get department() { return this._department; }
    set department(arg) { this._department = arg; }
}

class Department {
    get chargeCode() { return this._chargeCode; }
    set chargeCode(arg) { this._chargeCode = arg; }
    get manager() { return this._manager; }
    set manager(arg) { this._manager = arg; }
}

let aPerson = new Person("Mya Mya")
let aDepartment = new Department();
aDepartment.manager = "U Aung";

aPerson.department = aDepartment;

console.log("Mya Mya's manager " + aPerson.department.manager);
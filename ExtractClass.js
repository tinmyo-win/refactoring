class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get name() { return this._name; }
    set name(arg) { this._name = arg; }
    get telephoneNumber() { return this._telephoneNumber.toString }
    get officeAreaCode() { return this._telephoneNumber.areaCode; }
    set officeAreaCode(arg) { this._telephoneNumber.areaCode = arg; }
    get officeNumber() { return this._telephoneNumber.number; }
    set officeNumber(arg) { this._telephoneNumber.number = arg; }
}

class TelephoneNumber {
    get toString() { return `(${this.areaCode}) ${this.number}`; }
    get areaCode() { return this._areaCode; }
    set areaCode(arg) { this._areaCode = arg; }
    get number() { return this._number; }
    set number(arg) { this._number = arg; }
}

let person = new Person();
person.name = "Kyaw Kyaw"
person.officeAreaCode = "959"
person.officeNumber = '65346545'

console.log(person.name + " " + person.telephoneNumber)
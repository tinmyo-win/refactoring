class Person {
    constructor(name) {
        this._name = name;
        this._courses = [];
    }
    get name() { return this._name; }
    get courses() { return this._courses; }
    set courses(aList) { this._courses = aList; }

    addCourse(aCourse) {
        this._courses.push(aCourse);
    }
    removeCourse(aCourse, fnIfAbsent = () => { throw new RangeError(); }) {
        const index = this._courses.indexOf(aCourse);
        if (index === -1) fnIfAbsent();
        else this._courses.splice(index, 1);
    }
}

class Course {
    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
    }
    get name() { return this._name; }
    get isAdvanced() { return this._isAdvanced; }
}

let rsd = new Course("RockStar Developer", true);
let pwd = new Course("Professional Web Developer", false);

let courses = [pwd, rsd]

let aPerson = new Person("Mg Mg")
aPerson.courses = courses;

let numAdvancedCourses = aPerson.courses
    .filter(c => c.isAdvanced)
    .length
    ;

console.log("Number of advanced courses ", numAdvancedCourses)

aPerson.addCourse(new Course("New Course", false));
console.log("Total Course: ", aPerson.courses.length);


aPerson.removeCourse(rsd)
console.log("Total course after 1cours remove: " , aPerson.courses.length)


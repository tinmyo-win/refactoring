const people = [
    {
        id: 1,
        name: "Mg Mg",
        age: 23,
        salary: 200,
    },
    {
        id: 2,
        name: "Hla Hla",
        age: 20,
        salary: 180,
    },
    {
        id: 3,
        name: "Mya Mya",
        age: 18,
        salary: 240,
    },
]

function info(people) {

    function totalSalary() {
        return people.reduce((total, p) => total + p.salary, 0 )
    }

    function youngestAge() {
        return Math.min(...people.map(p => p.age));
    }

    return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;
}


console.log(info(people));

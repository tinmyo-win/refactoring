function inNewEngland(stateCode) {
    return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(stateCode);
}

const customers = [
    {
        name: "Tom",
        address: {
            state: "MA"
        }
    },
    {
        name: "Harry",
        address: {
            state: "CP"
        }
    },
]

const newEnglanders = customers.filter(c => inNewEngland(c.address.state));

console.log("Customers in newEngland ")
console.log(newEnglanders);
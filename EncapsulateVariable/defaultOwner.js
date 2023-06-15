let defaultOwnerData = {firstName: "Martin", lastName: "Fowler"};

function defaultOwner() { return defaultOwnerData};

function setDefaultOwner(arg) {
    defaultOwnerData.firstName = arg.firstName ? arg.firstName : "Unknown";
    defaultOwnerData.lastName = arg.lastName ? arg.lastName : "Unknown";
} 
function ownerTest() {
    console.log(defaultOwner());

    setDefaultOwner({ firstName: "test" })

    console.log(defaultOwner());
}

ownerTest();
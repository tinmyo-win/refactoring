function getRating(driver) {
    return (driver.numberOfLateDeliveries) ? 2 : 1;
}

// function moreThanFiveLateDeliveries(driver) {
//     return driver.numberOfLateDeliveries > 5;
// }

const driver = {
    numberOfLateDeliveries: 4,
}

console.log(getRating(driver));
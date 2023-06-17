let reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer() { return this._customer }
    get quantity() { return this._quantity; }
    get month() { return this._month; }
    get year() { return this._year; }

    get baseCharge() {
        return this.baseRate * this.quantity;
    }

    get baseRate() {
        return this.month + (2023 - this.year) * 12;
    }
}
function acquireReading() { return reading };

const rawReading = acquireReading();

const aReading = new Reading(rawReading);
const baseCharge = aReading.baseCharge;

console.log("Base Charge $" + baseCharge);

function taxThreshold(year) {
    return (2023 - year) * 5;
}

const taxableCharge = Math.max(0, aReading.baseCharge - taxThreshold(aReading.year));

console.log("taxable charge $ " + taxableCharge);

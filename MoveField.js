class Customer {
    constructor(name, discountRate) {
        this._name = name;
        // this._discountRate = discountRate;
        this._contract = new CustomerContract(dateToday());
        this._setDiscountRate(discountRate);
    }
    get discountRate() { return this._contract.discountRate }
    _setDiscountRate(aNumber) { this._contract.discountRate = aNumber; }
    becomePreferred() {
        this._setDiscountRate(this.discountRate.discountRate + 0.03)
        // other nice things
    }
    applyDiscount(amount) {
        return amount.subtract(amount.multiply(this.discountRate.discountRate));
    }
}

class CustomerContract {
    constructor(startDate, discountRate) {
        this._startDate = startDate;
        this._discountRate = discountRate;
    }

    get discountRate() { return this._discountRate }
    set discountRate(arg) { return this._discountRate = arg }
}

function dateToday() {
    return new Date().toLocaleDateString;
}

let customer = new Customer ("Mg Mg", 2.0)

console.log(customer._name , ' discount rate ', customer.discountRate , '%');
class Account {
    constructor(type) {
        this.type = type;
    }
    get bankCharge() {
        let result = 4.5;
        if (this._daysOverdrawn > 0) result += this.type.overdraftCharge(this);
        return result;
    }

    get daysOverdrawn() { return this._daysOverdrawn };
    set daysOverdrawn(arg) { this._daysOverdrawn = arg };
}

class AccountType {
    constructor(isPremium) {
        this.isPremium = isPremium;
    }
    overdraftCharge(account) {
        if (this.isPremium) {
            const baseCharge = 10;
            if (account.daysOverdrawn <= 7)
                return baseCharge;
            else
                return baseCharge + (account.daysOverdrawn - 7) * 0.85;
        }
        else
            return account.daysOverdrawn * 1.75;
    }
}

let isPremium = true

let account = new Account(new AccountType(isPremium));
account.daysOverdrawn = 23;

console.log(account.bankCharge);
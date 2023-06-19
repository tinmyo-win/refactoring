const customers = {
    "1920": {
        name: "martin",
        id: "1920",
        usages: {
            "2016": {
                "1": 50,
                "2": 55,
                // remaining months of the year
            },
            "2015": {
                "1": 70,
                "2": 63,
                // remaining months of the year
            }
        }
    },
}


class CustomerData {
    constructor(data) {
        this._data = data
    }

    usage(customerID, year, month) {
        return this._data[customerID].usages[year][month];
    }

    setUsage(customerID, year, month, amount) {
        this._data[customerID].usages[year][month] = amount;
    }
}

let customerData = new CustomerData(customers);

function getCustomerData() { return customerData }
function getRawDataOfCustomers() { return customerData._data };
function setRawDataOfCustomers(arg) { customerData = new CustomerData(arg) }

function setUsage(customerID, year, month, amount) {
    getRawDataOfCustomers()[customerID].usages[year][month] = amount;
}

let customerID = 1920;
let year = 2016;
let month = 2;

console.log(getRawDataOfCustomers()[customerID].usages[year][month]);

getCustomerData().setUsage(customerID, year, month, 78);

console.log(getCustomerData().usage(customerID,year, month));

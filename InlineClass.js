class TrackingInformation {
    get shippingCompany() { return this._shippingCompany; }
    set shippingCompany(arg) { this._shippingCompany = arg; }
    get trackingNumber() { return this._trackingNumber; }
    set trackingNumber(arg) { this._trackingNumber = arg; }
}

class Shipment {
    get trackingInfo() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;;
    }

    get shippingCompany() { return this._shippingCompany; }
    set shippingCompany(arg) { this._shippingCompany = arg; }

    get trackingNumber() { return this._trackingNumber; }
    set trackingNumber(arg) { this._trackingNumber = arg; }
}

let myShipment = new Shipment();

myShipment.trackingNumber = 12342
myShipment.shippingCompany = "Amazon"
console.log(myShipment.trackingInfo)
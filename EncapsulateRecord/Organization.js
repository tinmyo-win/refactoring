class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }
    get name() { return this._name; }
    set name(arg) { this._name = arg; }
    get country() { return this._country; }
    set country(arg) { this._country = arg; }
}

const organization = new Organization({ name: "Acme Gooseberries", country: "GB" });

function getOrganization() { return organization }

let result = `<h1>${getOrganization().name} </h1>`
console.log(result);

getOrganization().name = "Acem";

console.log(getOrganization().name);

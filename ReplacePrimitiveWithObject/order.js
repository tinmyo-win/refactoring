class Order {
    constructor(data) {
        this._priority = new Priority(data.priority);
    }

    get priority() { return this._priority }
    get priorityString() { return this._priority.toString() }
    set priority(aString) { this._priority = new Priority(aString) }
}

class Priority {
    constructor(value) {
        if (value instanceof Priority) return value;
        if (Priority.legalValues().includes(value))
            this._value = value;
        else
            throw new Error(`<${value}> is invalid for Priority`);
    }

    toString() { return this._value; }
    get _index() { return Priority.legalValues().findIndex(s => s === this._value); }

    static legalValues() { return ['low', 'normal', 'high', 'rush']; }

    equals(other) { return this._index === other._index; }
    higherThan(other) { return this._index > other._index; }
    lowerThan(other) { return this._index < other._index; }
}

let order1 = new Order({ id: 1, priority: "high" });
let order2 = new Order({ id: 2, priority: "rush" });
let order3 = new Order({ id: 3, priority: "normal" })

let orders = [order1, order2, order3];

highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority("normal")))
    .length;

console.log("highPriorityCount: ", highPriorityCount)

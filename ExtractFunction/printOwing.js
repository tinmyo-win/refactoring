function printOwing(invoice) {

    printBanner();

    const outstanding = calculateOutstanding(invoice);

    recordDueDate(invoice)

    printDetails(invoice, outstanding)
}

function recordDueDate(invoice) {
    // record due date
    let Clock = {};
    Clock.today = new Date();
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function calculateOutstanding(invoice) {
    let result = 0;

    for (const o of invoice.orders) {
        result += o.amount;
    }

    return result;
}

function printBanner() {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
}

function printDetails(invoice, outstanding) {
    //print details
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

const invoice = {
    customer: "Mg Mg",
    orders: [
        {
            id: 1,
            amount: 3
        },
        {
            id: 2,
            amount: 4
        },
        {
            id: 3,
            amount: 5
        },

    ]
}

printOwing(invoice)


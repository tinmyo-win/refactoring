function printOwing(invoice) {
    printBanner();
    let outstanding = calculateOutstanding();
    printDetails(outstanding);

    function printDetails(outstanding) {
        //print details
        console.log(`name: ${invoice.customer}`);
        console.log(`amount: ${outstanding}`);
    }
}

function calculateOutstanding() {
    return 300;
}

function printBanner() {
    console.log('Pirnt Banner');
}

printOwing({ customer: "Mg Mg" })


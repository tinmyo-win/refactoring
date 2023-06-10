function price(order) {
    return order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100);
}


const order = {
    quantity: 850,
    itemPrice: 30,
}

console.log("Total Price is ", price(order))

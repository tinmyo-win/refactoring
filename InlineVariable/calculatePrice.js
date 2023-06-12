function price(anOrder) {
    // let basePrice = anOrder.basePrice;
    return (anOrder.basePrice > 1000);
}

const anOrder = {
    basePrice: 3000
}

console.log(price(anOrder));
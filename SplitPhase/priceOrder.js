function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePriceData(product, quantity);
    
    return applyShipping(priceData, shippingMethod);
}

function calculatePriceData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;

    return { basePrice, quantity, discount }
}

function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;

    return priceData.basePrice - priceData.discount + shippingCost;
}

const product = {
    basePrice: 200,
    discountThreshold: 5,
    discountRate: 0.1,
}

const shippingMethod = {
    discountThreshold: 180,
    discountedFee: 20,
    feePerCase: 25,
}

const quantity = 50

console.log("Total Price is $", priceOrder(product, quantity, shippingMethod))
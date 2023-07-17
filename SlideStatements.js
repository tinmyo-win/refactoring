const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit; //should use after decalring not in far away
const order = retreiveOrder();
let charge;
// const chargePerUnit = pricingPlan.unit;


function retrievePricingPlan() {
    return {
        type: 'Premium',
        unit: 'Dollar'
    }
}

function retreiveOrder() {
    return {
        id: 123432,
        total_price: 234
    }
}

console.log("Plan Unit: " , chargePerUnit)
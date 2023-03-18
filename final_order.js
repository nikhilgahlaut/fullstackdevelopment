let totalCost = (cart) => {
    let total = 0;
    cart.forEach((item) => {
        total = total + (item.unitPrice * item.quantity);
        
    });
    return total;
}

let cart  = [{unitPrice : 20, quantity : 3}, {unitPrice : 25, quantity : 1},{unitPrice : 30, quantity : 5}];

const finalcost =  totalCost(cart);
console.log(finalcost);
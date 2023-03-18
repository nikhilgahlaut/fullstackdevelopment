const discountPercentage = (orginalPrice, discountedPrice) => {
    let discount = 0;
    let profit = orginalPrice - discountedPrice;
    discount =  (profit / orginalPrice) *100;
    discount = discount.toFixed(2);
    return discount;
}

const orginalPrice= 1040;
const discountedPrice = 800;

let discount = discountPercentage (orginalPrice, discountedPrice) ;
console.log(discount, "%");

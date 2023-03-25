function double(cart){
    let len = cart.length;
    let value = 0;
    for (let i = 0; i < len; i++) {
        value = cart[i] *2;    
        cart[i] = value;
    }
    console.log(cart);

}

let cart = [1,3,6,7,8,2];
double(cart);
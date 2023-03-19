const customer1 = {name:`nikhil` ,balance:1000};

function deposit(customer, amount) {
    customer.balance += amount;
    console.log(`${amount} is deposited in ${customer.name} account. The updated amount is ${customer.balance}`)
    
}
function withdraw(customer, amount) {
    if(amount > customer.balance)
    {
        console.log(`Insufficient balance.Only ${customer.balance} available for withdrawl`)
    }
    else{
        customer.balance -= amount;
        console.log(`${amount} is withdrawn from ${customer.name} account. The updated amount is ${customer.balance}`)
    }
    
}

deposit(customer1, 500);
withdraw(customer1, 1600);
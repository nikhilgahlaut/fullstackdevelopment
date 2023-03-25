const randomGenerator= ( () =>{
    let min =1;
    let max = 100;
    return Math.floor(Math.random()* (max-min + 1)) + min;
}) ();

console.log(randomGenerator);
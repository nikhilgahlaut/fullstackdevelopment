function calculateRent(day,carType){
    let rent = 0;
    switch (carType) {
        case "economy":
            rent = 4000 * day;
            console.log("the rent for",carType,"car", rent );
            break;
        case "midsize":
            rent = 10000 * day;
            console.log("the rent for",carType,"car", rent )
            break;
        case "luxury":
            rent = 20000 * day;
            console.log("the rent for",carType,"car", rent )
            break;
        default:
            console.log("invalid, sorry");
            break;
    }
}

let day = 3;

let carType = "luxury";

calculateRent(day, carType);
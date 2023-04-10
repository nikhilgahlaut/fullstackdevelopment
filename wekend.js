const day = "monday";

let dayuntilweekend;
switch (day){
    case "monday":
        console.log(`there is 5 days until weekend`);
        break;
    case "tuesday":
        console.log(`there is 4 days until weekend`);
        break;
    case "wednesday":
        console.log(`there is 3 days until weekend`);
        break;
    case "thrusday":
        console.log(`there is 2 days until weekend`);
        break;
    case "friday":
        console.log(`there is 1 days until weekend`);
        break;
    case "saturday":
    case "sunday":
        console.log(`there is 0 days until weekend`);
        break;
    default:
        dayuntilweekend = "invalid day";
        break
}
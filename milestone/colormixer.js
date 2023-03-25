 const color1 = "red";
 const color2 = "yellow";

switch (color1, color2) {
    case "red"  && "blue":
        console.log("purple");
        break;
    case "blue"  && "red":
        console.log("purple");
        break;
    case "red"  && "yellow":
        console.log("orange");
        break;
    case "yellow"  && "red":
        console.log("orange");
        break;
    case "yellow"  && "blue":
        console.log("green");
        break;
    case "blue"  && "yellow":
        console.log("green");
        break;
    default:
        console.log("wrong combo");
        break;
}

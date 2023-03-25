let num1 = 3;
let num2 = 10;
let str = "a";
let final = 0;

switch (str) {
    case '+':
        final = num1 + num2;
        console.log(final);
        break;
    case '-':
        final = num1 - num2;
        console.log(final);
        break;
    case '/':
        final = num1 / num2;
        console.log(final);
        break;       
    case '*':
        final = num1 * num2;
        console.log(final);
        break;
    default:
        console.log("invalid operator");
        break;
}
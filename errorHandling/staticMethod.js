//making a class named calculator
class calculator{
//making a static method add
    static add(num1,num2){
        return num1 + num2;
    }
}
//calling static method and printing it
//static meathod can be called directly we dont have to use NEW keyword
let result = calculator.add(3,6);
console.log(result);
class myCar{
    constructor(company1,model1,year1){
        this.company = company1;
        this.model = model1;
        this.year = year1;
    }
//creating a meathod
getDescription(){
    return `This is a ${this.year} ${this.company} ${this.model}`;

}}

let car = new myCar("skoda","octavia",2022)
// console.log(car)
console.log(car.getDescription());
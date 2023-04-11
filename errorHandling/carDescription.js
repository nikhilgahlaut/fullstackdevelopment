class myCar{
    constructor(company,model,year){
        this.company = company;
        this.model = model;
        this.year = year;
    }
//creating a meathod
getDescription(){
    return `This is a ${this.year} ${this.company} ${this.model}`;

}}

let car = new myCar("skoda","octavia",2022)
// console.log(car)
console.log(car.getDescription());
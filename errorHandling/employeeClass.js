class Salary{
    constructor(name= "test",position = "test",salary = "000"){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getSalary(){
        return `salary is ${this.salary}`;
    }

}

let employee1 = new Salary("nikhil","manager",50000);
console.log(employee1);
console.log(employee1.getSalary())
class getPerson{
    constructor(name = "unknown", age = "0"){
        this.name = name;
        this.age = age;
    }
    //meathod for displaying name and age
    getDetails(){
        return `Name:${this.name} Age :${this.age}`;
    }
};

const person1 = new getPerson("Mithun", 20);
console.log(person1.getDetails());
const person2 = new getPerson();
console.log(person2.getDetails());



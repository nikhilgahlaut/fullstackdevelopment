function getPerson(person){
    try {
        if(typeof person !== "object" || !person.name || !person.age){
            throw new Error(`Invalid parameter type`);
        }
        const {name, age} = person;
        return `Name:${name}, Age:${age}`
        
    } catch (error) {
        return error.message;
    }

};

let person = {name: `nikhil`, age: 23}
console.log(getPerson(person))
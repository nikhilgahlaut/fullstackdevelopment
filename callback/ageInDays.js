function ageInDays(person){
    let fullName = person.fname + " " + person.lname;
    let ageInDays = person.age * 365
    function logAgeIndays() {
        console.log(`The person's full name is ${fullName}, and their age in days is ${ageInDays}`) 
    }
    return logAgeIndays

}

let obj = {fname:"nikhil", lname : "gahlaut", age : 23}
const logAge = ageInDays(obj);
logAge();
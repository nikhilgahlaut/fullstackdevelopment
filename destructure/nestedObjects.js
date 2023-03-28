function nestedObjects(person){
    const {name,address:{street}} = person;
    return{name,street};

}

const person = {
    name: `Mithun`,age: 21, address:{street:`B8, Block B,Indrustial Area.`, city: `Sector 62,Noida`, state: `Uttar Pradesh`}
};
const result = nestedObjects(person);
console.log(result);
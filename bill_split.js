function billSplit(dishCost,all_dishes, person)
{
    let sum = 0;
    for( let key in dishCost)
    {
        if(all_dishes.includes(key))
        {
        sum = sum + dishCost[key];
        }
    }    
    let per_person = 0;
    per_person = sum / person;
    console.log("total bill :",sum);
    console.log( "bill per person :", per_person);

    
}


let dishCost = {chicken : 240, butter_chicken : 300 , roti:20, dal: 240};
let person = 6;

//all the dishes eat by all customers
let all_dishes = ["chicken", "dal"];


billSplit(dishCost,all_dishes, person);


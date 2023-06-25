const s = "test"; // 'e' , 'e' , 'e' , 't'
// let str = s.split("");
// console.log(firstUnique(s));
let str = s.split("");
for(let i = 0 ; i< str.length; i++)
{
    let count = 0;
    for(let j = i+1 ; j < str.length ; j++){
        if(str[i] === str[j])
        {
            count++;
        }
        
    }
if(count === 0){
    console.log(s[i]);
    break;
}
else
{
    console.log(-1)
}
}
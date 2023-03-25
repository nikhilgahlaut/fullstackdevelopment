let marks = ["1" , "2" , "3" , "4" ,"5"];
let max = 0;
for (let i = 0; i < marks.length; i++) {
    if(marks[i] > max)
    max = marks[i];
}
console.log("Highest marks :",max);


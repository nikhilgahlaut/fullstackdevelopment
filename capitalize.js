let name2 = "nnikhil";

 let first = name2.charAt(0);
// console.log(first);

// if (first === first.toUpperCase())
// {
//     console.log(name2);
// }
// else
// {
//     name2 = name2[0].toUpperCase() + name2.slice(1);
//     console.log(name2);
// }

// TERNARY
let name3 = name2.charAt(0) === first.toUpperCase() ? name2 : name2 = name2[0].toUpperCase() + name2.slice(1);

console.log(name3);

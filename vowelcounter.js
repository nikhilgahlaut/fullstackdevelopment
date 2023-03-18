let str = "nIkhIl";
var vcount = 0;
str = str.toLowerCase();
// const vowels = ['a','e','i','o','u'];
for (let i = 0; i < str.length; i++) {
    if (str[i] == "a" ||str[i] == "e" ||str[i] == "i" ||str[i] == "o" ||str[i] == "u") {
        vcount = vcount + 1;
    }
}
console.log(vcount);


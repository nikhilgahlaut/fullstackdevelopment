const old_pass = "nikhil";
const new_pass = "nikhi";
const comaperValue = old_pass.localeCompare(new_pass);

if ( comaperValue <= 0){
    console.log("Password Matched");
}
else{
    console.log("Passwoed didn't matched");
}
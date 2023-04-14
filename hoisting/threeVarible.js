function demoVariableHoisting(){
//    loging before declaring
    console.log(var1);
    console.log(var2);
    console.log(var3);

    let var1 = 1 ;
    var var2 = 2;
    const var3 = 3;

//loging after declaring
    console.log(var1);
    console.log(var2);
    console.log(var3);
}

console.log(demoVariableHoisting());

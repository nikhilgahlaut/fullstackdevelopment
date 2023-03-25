let arr = ["3","6","9","12","15"];

let len = arr.length;
for (let i = 0; i < len; i++) {
    if (arr[i] % 3 == 0) 
    {
        if (arr[i] % 2 == 0) {
            continue;
            
        }
        else{
            console.log(arr[i]);
        }
        
    }
    
}
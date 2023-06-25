function moveZeroes(nums){
    let pointer = 0;// pointer to keep track of the position to swap non-zero elements
    for(let i = 0 ; i< nums.length; i++){
        if(nums[i] !== 0){
            //swapping the pointer with non zero element
            [nums[pointer], nums[i]] = [nums[i], nums[pointer]]
            pointer ++;
        }    
    }
}



const nums = [1,1,0,3,12];
moveZeroes(nums);
console.log(nums);

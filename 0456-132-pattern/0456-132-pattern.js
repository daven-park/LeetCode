/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {    
    let minN = [];
    minN[0] = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        minN[i] = Math.min(minN[i - 1],nums[i]);
    }
    
    let stack = [];
    
    for(let j = nums.length-1; j >= 0; j--){
        if(nums[j] > minN[j]){ 
            while(stack.length > 0 && stack.at(-1) <= minN[j]){
                stack.pop();
            }
            if(nums[j] > stack.at(-1)){
                return true;
            }
            stack.push(nums[j]);
        }
    }
    return false;
};
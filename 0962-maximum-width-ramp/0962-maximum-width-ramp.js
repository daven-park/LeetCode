/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
     let stack = [0];
    let maxWidth = 0;

    for(let i = 1; i < nums.length - 1; i++){
        if(nums[i] < nums[stack[stack.length - 1]]){
            stack.push(i)
        }
    }
    
    for(let j = nums.length - 1; j > 0; j--){
        while(stack.length - 1 > -1 && nums[j] >= nums[stack[stack.length - 1]]){
            let width = j - stack.pop();
            maxWidth = Math.max(maxWidth, width);
        }
    }
    return maxWidth
};
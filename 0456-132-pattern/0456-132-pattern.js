/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    //Look at this first:  nums[i] < nums[k] < nums[j] 
    
  //First find min element until current i position of array
    let min_nums =[];
    min_nums[0]=nums[0];
    for(let i=1; i<nums.length; i++){
        min_nums[i]=Math.min(min_nums[i-1],nums[i]);
    }
    
    // now take a stack in this stack we will keep a track of elements which are 
    //grater than min_nums[i] but less than nums[i];
    
    let stack = [];
    for(let j=nums.length-1; j>=0; j--){
        //because if it even smaller than min value than avoid
        if(nums[j]>min_nums[j]){ 
            //Now checking if stack is not empty and element in stackTop is greator than min element or else pop it, here (nums[i]<nums[k]<....)
            while(stack.length>0 && stack.at(-1) <= min_nums[j]){
                stack.pop();
            }
            //Here check if that element is also smaller than nums[i]; here nums[i]<nums[k]<nums[k]
            if(nums[j]>stack.at(-1)){
                return true;
            }
            //otherwise keep push element in stack to search
            stack.push(nums[j]);
        }
    }
    return false;
};
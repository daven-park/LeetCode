/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let evenArr = [];
    let len = nums.length;
    
    for(let i = 0; i < len; i++){
        let cur = nums.shift();
        if(cur % 2 === 0){
            evenArr.push(cur);
        }else {
            nums.push(cur);
        }
    }

    return [...evenArr, ...nums];
};
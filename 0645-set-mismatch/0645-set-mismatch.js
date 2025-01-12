/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let len = nums.length;
    let sum = (len * (len + 1)) / 2;
    let temp = 0;
    let newArr = new Array(len).fill(0);

    for(let num of nums){
        if(newArr[num - 1] === num) temp = num;
        else {
            newArr[num - 1] = num;
            sum -= num;
        }
    }
    return [temp, sum];
};
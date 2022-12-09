/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let answer = [];
    
    const squre = num => num * num;


    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0) {
            answer.push(0);
            continue;
        }else {
            answer.push(squre(Math.abs(nums[i])));
        }
    }

    answer.sort((a, b) => a - b)

    return answer;
};
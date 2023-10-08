/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let answer = [];
    let stack = [];
    for(let i = 0; i < nums.length; i++){
        let next = nums[i]
        let flag = true;
        for(let j = stack.length - 1; j >= 0; j--){
            //top이랑 같은 수는 넘어간다.
            if(stack[j] === next) {
                stack[j] = next + 1;
                answer[j]++;
                flag = false;
                break;
            }
        }   
        if(flag){
            stack.push(next + 1);
            answer.push(1);
        }
    }
    return !answer.find(a => a < 3);
};
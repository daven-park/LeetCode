/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0;
    let res = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            res = Math.max(res, cnt);
            cnt = 0;
            continue;
        }
        cnt++;
    }
    res = Math.max(res, cnt);

    return res;
    
};
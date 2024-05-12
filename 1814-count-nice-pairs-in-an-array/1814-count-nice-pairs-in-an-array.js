/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
    if(nums.length === 1) return 0;

    let pairs = 0;
    let mod = 10 ** 9 + 7;
    let hash = {};

    const rev = (num) => {
        if(num < 10) return num;
        let reverse = 0;
        while(num){
            reverse = reverse * 10 + (num % 10);
            num = Math.floor(num / 10);
        }
        return reverse;
    }

    for(let i = 0; i < nums.length; i++){
        let diff = nums[i] - rev(nums[i]);
        if(diff in hash){
            pairs += hash[diff];
            hash[diff]++;
        } else {
            hash[diff] = 1; 
        }
    }

    return pairs % mod;
};
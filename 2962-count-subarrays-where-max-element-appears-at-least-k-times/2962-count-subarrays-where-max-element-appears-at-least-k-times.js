/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const maxN = Math.max(...nums);
    const mapN = new Map();
    const len = nums.length;
    let ans = 0;
    let s = 0, e = 0;
    while(e < len){
        mapN.set(nums[e], (mapN.get(nums[e]) || 0) + 1);
        while(mapN.get(maxN) >= k){
            ans += len - e;
            mapN.set(nums[s], mapN.get(nums[s]) - 1);
            s++;
        }
        e++;
    }
    
    // for(let start = 0; start < nums.length; start++){
    //     for(let end = start + 1; end < nums.length; end++){
    //         let temp = {};
    //         for(let k = start; k <= end; k++) {
    //             if(temp[nums[k]]) temp[nums[k]]++;
    //             else temp[nums[k]] = 1;
    //         }
    //         if(temp[max] >= k) {
    //            ans++;
    //         }
    //     }
    // }
    return ans;
};


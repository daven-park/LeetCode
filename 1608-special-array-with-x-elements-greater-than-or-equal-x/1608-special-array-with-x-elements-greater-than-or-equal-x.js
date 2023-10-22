/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a,b) => a - b);

    for(let i = 0; i <= nums[nums.length-1]; i++){
        let res = binarysearch(nums, i)
        if((nums.length - res) === i) return i
    }
    return -1;
};
const binarysearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] >= target){
            right = mid;
        }else{
            left = mid+1;
        }
    }
    return left 
}
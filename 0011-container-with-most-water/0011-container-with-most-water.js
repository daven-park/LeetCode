/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length;
    
    let maxWater = 0;
    let left = 0;
    let right = n - 1;
    while(left < right){
        let lowHeight = height[left]  > height[right] ? height[right] : height[left];
        let width = right - left;
        maxWater = Math.max(maxWater, lowHeight * width);
        if(height[left] <= height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxWater
};
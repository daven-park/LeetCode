/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    let ans = arr[0];
    let wins = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (ans > arr[i]){
            wins++;
        }else {
            wins = 1;
            ans = arr[i];
        }
        if (wins == k) break;
    }
    return ans;
};
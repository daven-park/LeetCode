/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let ans = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            ans.push([arr[i], arr[j]]);
        }
    }
    ans.sort((a, b) => (a[0] / a[1]) - (b[0] / b[1]));
    
    return [ans[k - 1][0], ans[k - 1][1]]
};

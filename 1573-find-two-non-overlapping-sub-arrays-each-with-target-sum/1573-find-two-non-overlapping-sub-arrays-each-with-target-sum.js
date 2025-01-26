/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    const MAX = Number.MAX_SAFE_INTEGER;
    const N = arr.length;
    const DP = new Array(N + 1).fill(MAX)

    let minLen = MAX;
    let sum = left = 0;

    for(let i = 1; i <= N; i++){
        sum += arr[i - 1];

        while(sum > target) {
            sum -= arr[left];
            left++
        }

        if(sum === target) {
            const len = i - left;
            const last = DP[left];

            minLen = Math.min(minLen, len + last);
            DP[i] = Math.min(len, DP[i - 1]);
        }else {
            DP[i] = DP[i - 1]
        }
    }
    return minLen >= MAX ? -1 : minLen
};
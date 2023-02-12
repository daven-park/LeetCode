/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    const arr = [];
    for(let i = 0; i < ages.length; i++){
        arr[i] = [ages[i], scores[i]];
    }
                  
    arr.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    
    let max = -1;
    for(let i = 0; i < arr.length; i++){
        arr[i][2] = arr[i][1];
        for(let j = i - 1; j >= 0; j--){
            if(arr[i][1] >= arr[j][1]){
                if(arr[i][1] + arr[j][2] > arr[i][2]) {
                    arr[i][2] = arr[i][1] + arr[j][2];
                }
            }
        }
        max = Math.max(max, arr[i][2]);
    }
    return max;
};
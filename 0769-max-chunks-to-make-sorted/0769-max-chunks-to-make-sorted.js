/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let max = []; 
    
    max[0] = arr[0];

    for (let i = 1; i < arr.length; i++) max[i] = Math.max(max[i-1], arr[i]);
    
    let res = 0;

    for (let i = 0; i < arr.length; i++) if (i === max[i]) res++;
    
    return res;
};
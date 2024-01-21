/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(n==1) return 1;
  
    const arr = new Array(n + 1).fill(0);
    
    for([i, j] of trust){
        arr[i] -= 1;
        arr[j] += 1;
    }
    
    for(let i = 0; i  < arr.length; i++){
        if(arr[i] == n - 1) return i;
    }
    return -1;
};
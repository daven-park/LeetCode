/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let minF = 0;
    let cnt = 0;
    
    for(let ch of s){
        if(ch === '1') cnt++;
        else minF++;
        minF = Math.min(minF, cnt);
    }
    return minF;
};
/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let minF = 0, counter = 0;
    for(let ch of s){
        if(ch === '1') counter++;
        else minF++;
        minF = Math.min(minF, counter);
    }
    return minF;
};
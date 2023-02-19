/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    const arr = s.split("0");
    const mod = Math.pow(10, 9) + 7;
    
    let sum = 0;
    for(let n of arr){
        sum += Math.floor((n.length * (n.length + 1)) / 2) % mod;
    }
    return sum;
};
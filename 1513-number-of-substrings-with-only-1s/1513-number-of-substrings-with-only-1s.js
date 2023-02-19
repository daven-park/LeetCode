/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    const arr = s.split("0");
    const mod = Math.pow(10, 9) + 7;
    
    let sum = 0;
    for(let n of arr){
        let N = n.length;
        sum += Math.floor((N * (N + 1)) / 2) % mod;   // n * (n + 1) / 2
    }
    return sum;
};
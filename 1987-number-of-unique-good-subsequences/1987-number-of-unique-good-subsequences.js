/**
 * @param {string} binary
 * @return {number}
 */
var numberOfUniqueGoodSubsequences = function(binary) {
    const MOD = Math.pow(10, 9) + 7;  
    let endZero = 0;
    let endOne = 0;
    let zero = 0;
    
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            endZero = (endZero + endOne) % MOD;
            zero = 1;
        } else {
            endOne = (endZero + endOne + 1) % MOD;
        }
    }
    return (endOne + (zero + endZero)) % MOD;
};
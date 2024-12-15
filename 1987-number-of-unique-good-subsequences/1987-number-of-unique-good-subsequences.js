/**
 * @param {string} binary
 * @return {number}
 */
var numberOfUniqueGoodSubsequences = function(binary) {
    const MOD = Math.pow(10, 9) + 7;  
    
    let endsWithZero = 0;
    let endsWithOne = 0;
    let hasZero = 0;
    
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') {
            endsWithZero = (endsWithZero + endsWithOne) % MOD;
            hasZero = 1;
        } else {
            endsWithOne = (endsWithZero + endsWithOne + 1) % MOD;
        }
    }
    return (endsWithOne + (hasZero + endsWithZero)) % MOD;
};
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    let a = 1, e = 1, i = 1, o = 1, u = 1, mod = 1000000007;
    while(n-- > 1) {
        let newA = a % mod;
        let newE = e % mod;
        let newI = i % mod;
        let newO = o % mod;
        let newU = u % mod;
        a = newE + newI + newU;
        e = newA + newI;
        i = newE + newO;
        o = newI;
        u = newI + newO;
    }
    return (a + e + i + o + u) % mod;
};

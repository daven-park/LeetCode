/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            if (s1[i] !== s2[i + 2] && s1[i] !== s2[i - 2]) return false; 
        }
    }
    return true;
};
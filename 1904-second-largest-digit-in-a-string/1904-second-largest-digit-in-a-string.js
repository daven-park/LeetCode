/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let digits = new Set();
    for (let char of s) {
        if (!isNaN(char) && char !== ' ') {
            digits.add(parseInt(char));
        }
    }

    if (digits.size < 2) return -1;

    let arr = Array.from(digits).sort((a, b) => b - a);
    
    return arr[1];
};
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let obj = {"b" : 0, "a" : 0, "l" : 0,"o" : 0, "n" : 0};
    
    for (const ch of text) if (ch in obj) obj[ch]++;
    
    const res = [obj['b'], obj['a'], obj['l'] / 2, obj['o'] / 2, obj['n']]

    return Math.floor(Math.min(...res))
};
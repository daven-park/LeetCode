/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(" ").filter(word => word !== '').reverse().join(" ").trim();
    
    return arr
    
};
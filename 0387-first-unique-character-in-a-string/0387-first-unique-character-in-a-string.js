/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let len = s.length;
    let obj = {};
    
    for(let n of s){
        obj[n] = (obj[n] || 0) + 1
    }
    for(let i = 0; i < len; i++){
        if(obj[s[i]] === 1) return i;
    }
    return -1;
};
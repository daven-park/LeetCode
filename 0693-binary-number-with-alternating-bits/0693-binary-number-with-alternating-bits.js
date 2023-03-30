/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    // 이진수 변환
    let bits = n.toString(2);
    
    let prev = bits[0];
    
    for(let i = 1; i < bits.length; i++){
        if(prev === bits[i]) return false;
        prev = bits[i]
    }
    return true;
};
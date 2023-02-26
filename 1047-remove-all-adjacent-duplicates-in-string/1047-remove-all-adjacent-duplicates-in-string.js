/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(S) {
    let result = [];
    
    for(let i = 0; i < S.length; i++){
        if(S[i] !== result[result.length - 1]) result.push(S[i]);
        else result.pop();
    }
    return result.join("");
};
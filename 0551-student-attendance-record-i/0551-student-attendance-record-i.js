/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    if(s.includes("LLL")) return false;
    
    let aCnt = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'A') aCnt++;
    }
    if(aCnt >= 2) return false;
    
    return true;
};
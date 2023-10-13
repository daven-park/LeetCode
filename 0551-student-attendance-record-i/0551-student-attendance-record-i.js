/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let temp = {};
    let answer = true;
    if(s.includes("LLL")) return false;
    for(let i = 0; i < s.length; i++){
        temp[s[i]] = temp[s[i]] ? temp[s[i]] + 1 : 1;
    }
    if(temp['A'] >= 2) answer = false;
    
    return answer;
};
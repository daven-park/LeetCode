/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let Map = {};
    let answer = [];
    
    (strs || []).forEach((str) => {
        let temp = str.split("").sort().join("");
        if(!Map[temp]) Map[temp] = [];
        
        Map[temp].push(str);
    })
    
    Object.keys(Map).forEach((key) => {
        answer.push(Map[key]);
    })
    
    return answer
    
};
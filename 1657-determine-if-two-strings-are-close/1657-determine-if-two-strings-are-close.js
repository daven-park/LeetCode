/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false;
    
    let word1Map = new Map();
    let word2Map = new Map();
    
    for(let i = 0; i < word1.length; i++){
        word1Map.set(word1[i], (word1Map.get(word1[i]) || 0) + 1);   
        word2Map.set(word2[i], (word2Map.get(word2[i]) || 0) + 1);    
    }
    
    if(Array.from(word1Map.keys()).sort().join(" ") !== Array.from(word2Map.keys()).sort().join(" ")){
        return false;
    }
    const counts1 = Array.from(word1Map.values()).sort();
    const counts2 = Array.from(word2Map.values()).sort();
    
    for (let i = 0; i < counts1.length; i++) {
        if (counts1[i] !== counts2[i]) {
            return false;
        }
    }

    return true;    
    
};
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const getString = (arr) => {
        let str = "";
        for(let i = 0; i < arr.length; i++){
            str += arr[i];
        }
        return str;
    }
    
    if(getString(word1) === getString(word2)) return true;
    return false;
};
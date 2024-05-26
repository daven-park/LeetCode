/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let word of words){
        let flag = true;
        for(let i = 0; i < word.length / 2; i++){
            if(word[i] !== word[word.length - i - 1]) flag = false;
        }
        if(flag) return word;
    }
    return "";
};
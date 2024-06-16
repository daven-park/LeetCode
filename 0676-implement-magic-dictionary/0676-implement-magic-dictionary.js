
var MagicDictionary = function() {
    this.obj = {};
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    for(let i = 0; i < dictionary.length; i++){
        if(!this.obj[dictionary[i].length]) this.obj[dictionary[i].length] = [];
        this.obj[dictionary[i].length].push(dictionary[i]);
    }
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    if(!this.obj[searchWord.length]) return false;
    return this.obj[searchWord.length].some(el => { //array.some 요소가 한번이라도 조건을 충족하면 true
        let cnt = 0;
        for(let i = 0; i < searchWord.length; i++){
            if(searchWord[i] !== el[i]) cnt++;
        }
        return cnt === 1;
    })
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
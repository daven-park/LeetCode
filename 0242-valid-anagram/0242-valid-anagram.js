/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
   let obj = {};
    let obj2 = {};
    for(let i = 0; i < s.length; i++){
        obj[s[i]] = (obj[s[i]] || 0) + 1;
    }
    for(let i = 0; i < t.length; i++){
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }
    
    for(let el in obj){
        if(obj[el] !== obj2[el]) return false;
    }
    return true
};
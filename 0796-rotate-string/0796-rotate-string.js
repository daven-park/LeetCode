/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false;
    
    let arr = s.split("");
    for(let i = 0; i < s.length; i++){
        arr.push(arr.shift());
        if(arr.join("") === goal) return true;
    }
    return false;
};
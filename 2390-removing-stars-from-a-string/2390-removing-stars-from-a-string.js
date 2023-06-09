/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === "*"){
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    }
    
    let str = "";
    for(let i = 0; i < stack.length; i++){
        str += stack[i];
    }
    return str
    
};
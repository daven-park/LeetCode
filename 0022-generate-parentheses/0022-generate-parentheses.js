/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let stack = [];
    let result = [];
    
    const getParents = (left, right) => {
    if(left === right && left === n){
        result.push(stack.join(""));
        return
    }
    
    if(left < n){
        stack.push("(");
        getParents(left + 1, right);
        stack.pop();
    }
    
    if(right < left){
        stack.push(")");
        getParents(left, right + 1);
        stack.pop();
    }   
}
    
    getParents(0, 0);
    
    return result;
};


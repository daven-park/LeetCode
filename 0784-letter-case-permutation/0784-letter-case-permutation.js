/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
     let res = []
    
    function dfs(i, str){
        if (i === s.length){
            res.push(str)
            return
        }
        if(!parseInt(s[i]) && parseInt(s[i]) !== 0){
            dfs(i + 1, str + s[i].toUpperCase())
            dfs(i + 1, str + s[i].toLowerCase())
        }else{
            dfs(i + 1, str + s[i])
        }
    }
    dfs(0, "")
    
    return res
};
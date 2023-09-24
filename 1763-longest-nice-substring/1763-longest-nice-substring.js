/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    if(s.length < 2) return "";
    
    const obj={};
    
    for(let i = 0; i < s.length; i++) obj[s[i]]=1
    
    for(let i = 0; i < s.length; i++){
        let element=s[i]
        if(obj[element.toUpperCase()] && obj[element.toLowerCase()]) continue;
        
        let left=s.substring(0,i);
        let right=s.substring(i + 1);

        let ans1 = longestNiceSubstring(left)
        let ans2 = longestNiceSubstring(right)

        
        return ans1.length >= ans2.length ? ans1 : ans2
    }
    return s
};
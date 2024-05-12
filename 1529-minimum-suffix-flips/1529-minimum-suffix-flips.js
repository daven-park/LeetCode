/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let cnt = 0;
    let num = "0";
    
    for(let i = 0; i < target.length; i++){
        let ch = target.charAt(i);
        if(ch !== num){
        num = num === "0" ? "1" : "0";
        cnt++; 
        }
    }
    return cnt;
};
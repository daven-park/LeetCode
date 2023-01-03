/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let delCnt = 0;
    
    for(let i = 0; i < strs[0].length; i++){
         for(let j = 0; j < strs.length - 1; j++){
             if(strs[j][i] > strs[j + 1][i]) {
                 delCnt++;
                 break;
             }
         }
        
    }
    return delCnt
};
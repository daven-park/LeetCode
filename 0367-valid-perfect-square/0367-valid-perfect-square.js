/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    let findNum = 0;
    while(num >= findNum){
        if(findNum * findNum === num) return true;
        else findNum++;
    }
    return false;
        
};
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    let sum = 0;
    for(let n of matchsticks) sum += n;
    
    
    if(matchsticks.length < 4 || sum % 4 !== 0) return false;
    
    matchsticks.sort((a, b) => b - a);
    
    let checked = new Array(4).fill(0);
    
    return solve(0);
    
    function solve(x){
        if(x === matchsticks.length){
            return checked[0] === checked[1] && checked[1] === checked[2] && checked[2] === checked[3];
        }
        
        for(let i = 0; i < 4; i++){
            if(checked[i] + matchsticks[x] > sum / 4) continue;
            
            checked[i] += matchsticks[x];
            if(solve(x + 1)) return true;
            checked[i] -= matchsticks[x];
        }
        return false;
    }
    
};
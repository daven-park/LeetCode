/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    // 내림차순 정렬
    piles.sort((a,b) => b - a);
    
    let alice = 0, bob = 0;
    
    while(piles.length > 0){
        alice += piles.shift();
        
        if(piles.length > 0){
            bob += piles.shift();
        }
    }
    
    return alice > bob;
};
/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    const [targetX, targetY] = target;
    const dist = Math.abs(targetX) + Math.abs(targetY);
    
    for (let i = 0; i < ghosts.length; i++) {
        const [ghostX, ghostY] = ghosts[i];
        const ghostDist = Math.abs(ghostX - targetX) + Math.abs(ghostY - targetY);
        
        if (ghostDist <= dist) return false;
    }
    
    return true;
};
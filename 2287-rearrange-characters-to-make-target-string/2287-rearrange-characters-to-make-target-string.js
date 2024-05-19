/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    
    let smap = {};
    let tmap = {};
    let max = Infinity;
    
    for(let el of s){
        smap[el] = (smap[el] || 0) + 1
    }

    for(let el of target){
        tmap[el] = (tmap[el] || 0) + 1
    }

    for(let el in tmap){
        if(!smap[el] || (smap[el] < tmap[el])){
            return 0
        }
        max = Math.min(max,Math.floor(smap[el]/tmap[el]))
    }

    return max;
    
};
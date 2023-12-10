/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const map = new Map();
    let output = [];

    for(const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }

    for(const c of order) {
        if(!map.has(c)) continue;
        
        let count = map.get(c);
        
        while(count--) output.push(c);
        
        map.delete(c);
    }
    
    for(let [char, count] of map.entries()) {
        while(count--) output.push(char)
    }
    return output.join('')
};
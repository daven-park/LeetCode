/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let map = {};
    for(let [start, end] of paths){
        if(!map[start]) map[start] = end;
    }
    for(let [start, end] of paths){
        if(!map[end]) return end;
    }
};
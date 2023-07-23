/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let hash = {};
    for(let item of tiles){
        hash[item] = hash[item] ? hash[item] + 1 : 1;
    }
    return dfs(hash);
};

const dfs = (hash) => {
    let sum = 0;
    for(let item in hash){
        if(hash[item] === 0) continue;
        sum++;
        hash[item]--;
        sum += dfs(hash);
        hash[item]++;
    }
    return sum;
}
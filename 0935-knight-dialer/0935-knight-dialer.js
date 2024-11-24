/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function(n) {
    const MOD = 10 ** 9 + 7;
    let map = [[4,6],[8,6],[7,9],[4,8],[0,3,9],[],[0,1,7],[2,6],[1,3],[2,4]];
    let cache = new Array(n).fill().map(() => new Array(10));
    const dfs = (idx, i) => {
        if(idx === n) return 1;
        if(cache[idx][i] !== undefined) return cache[idx][i];
        let paths = 0;
        for(let j = 0; j < map[i].length; j++){
            paths += dfs(idx+1, map[i][j]);
        }
        return cache[idx][i] = paths % MOD;
    }
    let sum = 0;
    for(let i = 0; i < 10; i++){
        sum = (sum + dfs(1, i)) % MOD;
    }
    return sum;
};
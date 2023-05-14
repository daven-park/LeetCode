/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    const dp = Array(stations.length + 1).fill(0);
    dp[0] = startFuel;

    for(let i = 0; i < stations.length; i++){
        for(let k = i; k >= 0; k--){
            if(dp[k] >= stations[i][0]){
                dp[k + 1] = Math.max(dp[k + 1], dp[k] + stations[i][1])
            }
        }
    }

    for(let i = 0; i < dp.length; i++){
        if(dp[i] >= target) return i;
    }

    return -1;
};
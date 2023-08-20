/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0, min = prices[0];
    for(let i = 1; i < prices.length; i++)   {
        min < prices[i] ?  max = Math.max(prices[i] - min, max) : min = prices[i];
    }
    return max;
};
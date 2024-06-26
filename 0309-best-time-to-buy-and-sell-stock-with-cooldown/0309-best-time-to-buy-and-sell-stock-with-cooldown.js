/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let pSell = 0;
    let sell = 0;
    let buy = -Infinity;

    for (let price of prices) {
        let pBuy = buy;
        buy = Math.max(buy, pSell - price);
        pSell = sell;
        sell = Math.max(sell, pBuy + price);
    }
    return sell;
};
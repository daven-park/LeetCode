/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        let temp = 0;
        const bin = i.toString(2);
        for (let j = 0; j < bin.length; j++) {
            temp += Number(bin[j]);
        }
        arr.push(temp);
    }
    return arr;
};
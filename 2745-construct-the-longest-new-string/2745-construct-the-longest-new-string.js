/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function(x, y, z) {
    if (x === y) return 4 * y + 2 * z;
    return 4 * Math.min(x, y) + 2 + 2 * z;
};
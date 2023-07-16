/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function(x, y, z) {
    if (x == y) {
            return 4 * y + 2 * z;
        }
        
        let min = Math.min(x, y);
        return 4 * min + 2 + 2 * z;
};
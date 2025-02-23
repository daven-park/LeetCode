/**
 * @param {string} s
 * @return {number}
 */
var sumScores = function(s) {
    const n = s.length;
    const Z = Array(n).fill(0);
    let left = 0, right = 0;

    for (let i = 1; i < n; ++i) {
        if (i <= right){
            Z[i] = Math.min(right - i + 1, Z[i - left]);
        }
        while (i + Z[i] < n && s[Z[i]] === s[i + Z[i]]){
            Z[i] += 1;
        }
        if (i + Z[i] - 1 > right) {
            left = i;
            right = i + Z[i] - 1;
        }
    }
    return s.length + Z.reduce((acc, x) => acc + x, 0);
};
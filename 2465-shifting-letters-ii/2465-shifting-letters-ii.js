/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    let ans = [];
    let shiftsDiff = new Array(s.length).fill(0);

    for (let [start, end, dir] of shifts) {
        let dirCnt = dir === 0 ? -1 : 1;
        shiftsDiff[start] += dirCnt;
        shiftsDiff[end + 1] -= dirCnt;
    }

    let move = 0;
    for (let i = 0; i < s.length; i++) {
        move += shiftsDiff[i]; 
        let ch = (s.charCodeAt(i) - 97 + move) % 26;
        ans.push(String.fromCharCode((ch + 26) % 26 + 97));
    }
    return ans.join('');
};
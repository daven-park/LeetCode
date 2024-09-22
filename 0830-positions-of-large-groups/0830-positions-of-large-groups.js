/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  let ans = [];
    for (let i = 0; i < s.length; i++) {
        let first = i;
        let cnt = 0;
        let end = 0;
        while (s[i] == s[i + 1]) {
            cnt++;
            end = i + 1;
            i++;
        }
        if (cnt >= 2) ans.push([first, end])
    }
    return ans
    
}
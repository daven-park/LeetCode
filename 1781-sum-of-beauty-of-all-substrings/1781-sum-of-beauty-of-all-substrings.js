/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        let map = new Map();
        for (let j = i; j < s.length; j++) {
            const cur = s[j]
            map.set(cur, (map.get(cur) || 0) + 1);

            let arr = Array.from(map.values())
            max = Math.max(...arr);
            min = Math.min(...arr);

            cnt += Math.max(0, max - min);
        }
    }
    return cnt
};
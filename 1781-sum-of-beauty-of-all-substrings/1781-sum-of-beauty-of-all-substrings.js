/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let map = new Map()

        for (let j = i; j < s.length; j++) {
            const current = s[j]
            map.set(current, (map.get(current) || 0) + 1);

            let arr = Array.from(map.values())
            max = Math.max(...arr);
            min = Math.min(...arr);

            count += Math.max(0, max - min);
        }
    }
    return count
};
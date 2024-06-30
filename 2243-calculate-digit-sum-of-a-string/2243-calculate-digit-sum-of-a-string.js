/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    while (s.length > k) {
        let temp = '';
        for (let i = 0; i < s.length; i += k) {
            let sub = s.slice(i, i + k);
            let sum = 0;
            for (const c of sub) sum += c - '0';

            temp += sum;
        }
        s = temp;
    }

    return s;
};
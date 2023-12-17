/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let hash = {};

    for (let i = 0; i < s1.length; i++) {
        hash[s1[i]] = (hash[s1[i]] || 0) + 1;
    }

    let left = 0;
    let right = s1.length - 1;

    outer:while (right < s2.length) {
        let hash2 = {};

        for (let i = left; i <= right; i++) {
            hash2[s2[i]] = ( hash2[s2[i]] || 0) + 1
        }

        for (const key in hash2) {
            if (hash2[key] !== hash[key]) {
                left++;
                right++;
                continue outer;
            }
        }
        return true;
    }
    return false;
};
/**
 * @param {number[][]} events
 * @return {number}
 */
const maxTwoEvents = (e) => {
    e.sort((a, b) => b[2] - a[2]);
    let max = e[0][2];
    let seen = {};

    for (let i = 0; i < e.length - 1; i++) {
        if (seen[e[i]]) continue;
        else seen[e[i]] = true;

        for (let j = i + 1; j < e.length; j++) {
            let [s1, e1, val1] = e[i];
            let [s2, e2, val2] = e[j];

            if (val1 + val2 <= max) break;
            if (s1 > e2 || e1 < s2) max = Math.max(max, val1 + val2);
        }
    }
    return max;
};
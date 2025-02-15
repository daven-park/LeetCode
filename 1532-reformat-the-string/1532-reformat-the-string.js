/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let max = [];
    let min = [];
    let res = "";

    max = s.match(/[0-9]/g) || [];
    min = s.match(/[a-z]/g) || [];
    if (min.length > max.length) {
        [min, max] = [max, min]
    }
    if (max.length - min.length <= 1) {
        for(let j = 0; j <= max.length; j++){
            if (max[j]) res += max[j];
            if (min[j]) res += min[j];
        }
    }
    return res;
};
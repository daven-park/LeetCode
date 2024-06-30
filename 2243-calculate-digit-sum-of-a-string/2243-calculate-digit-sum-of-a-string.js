/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    while(s.length > k){
        let x = 0;
        let sum = [0];
        for(let i = 0; i < s.length; i++){
            if(i % k == 0 && i != 0) sum[++x] = 0;
            sum[x] += parseInt(s[i]);
        }
        s = sum.join("");
    }
    return s;
};
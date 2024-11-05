/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = "aeiou";
    let cnt = 0;
    for(let i = 0; i < k; i++){
        if(vowels.indexOf(s[i]) !== -1) cnt++;
    }
    let ans = cnt;

    for(let i = k; i < s.length; i++){
        if(vowels.includes(s[i])) cnt++;
        if(vowels.includes(s[i - k])) cnt--;
        ans = Math.max(ans, cnt);
    }
    return ans;
};
/**
 * @param {string} s
 * @return {number}
 */
var balancedString = function(s) {
    let limit = s.length;
    let start = 0;
    let end = 0;
    let ans = limit;
    let need = 0;
    const count = {'Q' : 0, 'W' : 0, 'E' : 0, 'R' : 0};
    
    for(let i = 0; i < limit; i++) count[s[i]]++;

    for(let char in count){
        count[char] = count[char] - limit / 4;
        if(count[char] > 0) need++;
    }

    if(need === 0) return 0;

    while(end < limit) {
        count[s[end]]--;

        if(count[s[end]] === 0) need--;
        
        while(need === 0){
            ans = Math.min(ans, end - start + 1);
            count[s[start]]++;
            if(count[s[start++]] > 0) need++;
        }
        end++;
    }
    return ans
};
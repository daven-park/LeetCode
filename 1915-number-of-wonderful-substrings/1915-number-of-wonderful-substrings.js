/**
 * @param {string} word
 * @return {number}
 */
const asci = (c) => c.charCodeAt();

var wonderfulSubstrings = function(word) {
    let result = 0;
    let f = Array( 2 ** 10).fill(0);
    f[0] = 1;
    let cur = result = 0;
    for(const c of word){
        cur ^= 1 << asci(c) - 97;
        result += f[cur];
        for(let i = 0; i < 10; i++){
            result += f[cur ^  1 << i];
        }
        f[cur]++;
    }
    return result;

};



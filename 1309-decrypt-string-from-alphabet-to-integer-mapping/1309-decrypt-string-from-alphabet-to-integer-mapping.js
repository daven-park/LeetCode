/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let len = s.length;
    let str = '';
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let s0 = s.split('');
    
    for(let i = 0; i < len; i++){
        let k = 0;
        if(s0[i + 2] === '#'){
            k = Number(s0[i] + s0[i + 1]) - 1;
            i = i + 2;
        }else {
            k = Number(s0[i]) - 1;
        }
        
        str = str + alph[k];
    }
    return str;
};
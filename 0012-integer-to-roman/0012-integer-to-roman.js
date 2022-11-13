/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let symbol = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let value = [1000, 900,  500,  400, 100,  90,   50,  40,  10,   9,    5,    4,   1];
    let result = "";
    
    while(num !== 0) {
        for(let i = 0; i < symbol.length; i++){
            if(num >= value[i]){
                result += symbol[i];
                num -= value[i];
                break;
            }
        }
    }
    return result;
};
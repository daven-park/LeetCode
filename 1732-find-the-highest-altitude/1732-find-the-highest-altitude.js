/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altis = [0];
    let prev = 0;
    for(let i = 0; i < gain.length; i++){
        prev += gain[i];
        altis.push(prev);
    }
    return altis.sort((a, b) => a - b)[altis.length - 1]
};
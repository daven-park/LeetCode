/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let time = [];

    timePoints.sort();

    for(let s of timePoints) {
        let num = parseInt(s.substring(0,2)) * 60 + parseInt(s.substring(3));
        time.push(num);
    }
    time.push(24 * 60 + time[0]);

    let min = Infinity;

    for(let i = 1; i< time.length; i++){
        min = Math.min(min, time[i] - time[i - 1]);
    }
    return min;
};
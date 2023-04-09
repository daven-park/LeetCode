/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    
    intervals.sort((a,b) =>  a[0]-b[0]);

    let result = [intervals[0]]
    let left = 0;

    for(let i = 1; i < intervals.length; i++ ){
        let start = intervals[i][0];
        let end = intervals[i][1];

        if(start <= result[left][1]) {
            result[left][1] = Math.max(result[left][1], end)
        }else {
            result.push([start, end]);
            left++;
        }

    }
    return result;
};
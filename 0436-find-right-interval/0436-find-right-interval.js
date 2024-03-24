/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
    const len = intervals.length;
    const result = [];
    const intervalsIdx = intervals.map((interval, index) => [interval[0], index]);
    
    intervalsIdx.sort((a, b) => a[0] - b[0]);
    
    for (let i = 0; i < len; i++) {
        const current = intervals[i][1];
        let left = 0;
        let right = len - 1;
        let target = -1;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (intervalsIdx[mid][0] >= current) {
                target = intervalsIdx[mid][1];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        result.push(target);
    }
    return result;
};
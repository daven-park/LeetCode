/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    const minHeap = new MinPriorityQueue();
    
    intervals.sort((a,b) => a[0] - b[0]);
    minHeap.enqueue(0);
    
    intervals.forEach((interval) => {
        if(interval[0] > minHeap.front().element) {
            minHeap.dequeue();
        }
        minHeap.enqueue(interval[1]);
    });
    
    return minHeap.size();
};
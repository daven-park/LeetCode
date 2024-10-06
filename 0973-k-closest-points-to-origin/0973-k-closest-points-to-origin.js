/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const heap = [];

    for(const point of points) {
        let left = 0;
        let right = heap.length;

        while(left < right) {
            const mid = Math.floor((left + right) / 2);

            if(getDist(point) < getDist(heap[mid]))  right = mid;
            else left = mid + 1;
        }
        heap.splice(left, 0, point)
    }
    return heap.slice(0, k)
};

const getDist = (p) => {
    return p[0] * p[0] + p[1] * p[1]
}

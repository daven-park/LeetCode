/**
 * @param {number[][]} heights => h
 * @return {number}
 */
var minimumEffortPath = function(h) {
    const minHeap = new MinPriorityQueue({compare: (a,b) => a[0] - b[0]});
    const dist = new Array(h.length).fill().map(() => new Array(h[0].length).fill(Infinity))
    const dir = [[0,1],[1,0],[-1,0],[0,-1]]

    minHeap.enqueue([0,0,0])
    dist[0][0] = 0;

    while(minHeap.size() > 0)   {
        const [w, x, y] = minHeap.dequeue();
        
        if(w > dist[x][y]) continue;
        if(x == dist.length - 1 && y == dist[0].length - 1) return w;
        
        for( const [dx, dy] of dir )   {
            const nx = dx + x;
            const ny = dy + y;
            if(nx >= 0 && ny >= 0 && nx < h.length && ny < h[0].length) {
                const curr = Math.max(w, Math.abs(h[x][y] - h[nx][ny]));
                if(curr < dist[nx][ny])  {
                    dist[nx][ny] = curr
                    minHeap.enqueue([curr, nx, ny])
                }
            }
        }
    }
    return -1
};
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const graph = Array.from({ length: n }, () => []);
    
    for(let [start, end] of connections){
        graph[start].push([end, 1]);
        graph[end].push([start, 0]);
    }
    
    let visited = new Set();
    let ans = 0;
    
    const dfs = (node) => {
        visited.add(node);
        
        for(const [neighbor, needChange] of graph[node]){
            if(!visited.has(neighbor)){
                ans += needChange;
                dfs(neighbor);
            }
        }
    }
    
    dfs(0);
    return ans;
   
    
};
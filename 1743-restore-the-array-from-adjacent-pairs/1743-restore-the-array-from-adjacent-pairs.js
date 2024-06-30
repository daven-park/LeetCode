/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    const edges = {};
    const graph = {};

    for (const [v1, v2] of adjacentPairs) {
        graph[v1] = graph[v1] || [];
        graph[v2] = graph[v2] || [];
        
        graph[v1].push(String(v2));
        graph[v2].push(String(v1));
        
        edges[v1] = (edges[v1] || 0) + 1;
        edges[v2] = (edges[v2] || 0) + 1;
    }

    let curr = null;
    for (const [key, val] of Object.entries(edges)) {
        if (val !== 1) continue;
        curr = key;
        break;
    }
    
    const dfs = (ans, curr, parent, graph) => {
        ans.push(Number(curr));

        for (const next of graph[curr]) {
            if (next === parent) continue;
            dfs(ans, next, curr, graph);
        } 
    }

    const ans = [];
    dfs(ans, curr, null, graph);

    return ans;
};


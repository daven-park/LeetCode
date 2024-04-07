/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let provinces = 0;
    const vis = new Set();
    
    for(let i = 0; i < isConnected.length; i++){
        if(!vis.has(i))
        provinces++;
        vis.add(i);
        dfs(i, isConnected, vis);
    }
    
    return provinces;
};

const dfs = (city, isConnected, vis) => {
    for(let i = 0; i < isConnected[city].length; i++){
        if(!vis.has(i) && isConnected[city][i] === 1){
            vis.add(i);
            dfs(i, isConnected, vis);
        }
    }        
}
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
    let parents = Array.from({length: n}, (_, i) => i);
    let size = Array(n).fill(1); 

    const find = (parents, x) => {
        if(parents[x] === x) return x;

        return parents[x] = find(parents, parents[x]);
    }

    const union = (parents, x, y, size) => {
        x = find(parents, x);
        y = find(parents, y)

        if(size[x] < size[y]){
            parents[x] = y
            size[y]++;
        }else{
            parents[y] = x;
            size[x]++;
        }
    } 

    let extra = 0;
    for(let connect of connections){
        let u = connect[0];
        let v = connect[1];

        u = find(parents, u)
        v = find(parents, v);

        u === v ? extra++ : union(parents, u, v, size);
    }

    let connected = 0;
    parents.forEach((el, idx) => {
        if(el === idx) connected++;
    })
 
    let ans = connected - 1;
    if(extra >= ans) return ans;

    return -1;
};
class UnionFind {
    constructor() {
        this.parent = {};
    }

    makeSet(n) {
        for(let i = 1; i <= n; i++) this.parent[i] = i;
    }

    find(x) {
        return this.parent[x] === x ? x : this.find(this.parent[x]);
    }

    union(x, y) {
        const xRoot = this.find(x);
        const yRoot = this.find(y);

        this.parent[xRoot] = yRoot;
    }

}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const unionFind = new UnionFind();
    let last = null;

    unionFind.makeSet(edges.length);

    for(let i = 0; i < edges.length; i++) {
        const x = unionFind.find(edges[i][0]);
        const y = unionFind.find(edges[i][1]);
        
        x === y ? last = edges[i] : unionFind.union(x, y);
    }
    return last;
};
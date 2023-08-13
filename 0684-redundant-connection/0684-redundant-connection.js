class UnionFind {
    constructor() {
        this.parent = {};
    }

    makeSet(n) {
        for(let i = 1; i <= n; i++) {
            this.parent[i] = i;
        }
    }

    find(x) {
        if(this.parent[x] === x) {
            return x;
        }
        return this.find(this.parent[x]);
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
    
    const len = edges.length;
    let last = null;

    unionFind.makeSet(len);

    for(let i = 0; i < edges.length; i++) {

        const x = unionFind.find(edges[i][0]);
        const y = unionFind.find(edges[i][1]);

        // if(x === y) {
        //     last = edges[i];
        // } else {
        //     unionFind.union(x, y);
        // }
        
        x === y ? last = edges[i] : unionFind.union(x, y);
    }

    return last;
};
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const ans = [];
    const uf = new UnionFind();
    
    for(let i = 0; i < s1.length; i++){
        uf.unite(s1[i], s2[i]);
    }
    
    for(let i = 0; i < baseStr.length; i++){
        ans.push(uf.find(baseStr[i]));
    }
    
    return ans.join('');
};


class UnionFind {
    constructor() {
        this.parents = new Map();
    }
    
    find(n) {
        if(!this.parents.has(n)){
            this.parents.set(n, n);
        }else if(this.parents.get(n) !== n){
            this.parents.set(n, this.find(this.parents.get(n)));
        }
        return this.parents.get(n);
    }
    
    unite(a, b){
        const rootA = this.find(a);
        const rootB = this.find(b);
        
        if(rootA === rootB) return;
        
        const codeA = rootA.charCodeAt(0);
        const codeB = rootB.charCodeAt(0);
        
        if(codeA > codeB){
            this.parents.set(rootA, rootB);
        }else{
            this.parents.set(rootB, rootA);
        }
    }
}
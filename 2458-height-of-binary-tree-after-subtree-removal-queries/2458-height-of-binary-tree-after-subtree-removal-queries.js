/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function(root, queries) {
    if(!root) return [];

    let ans = {};
    let h = {};

    const maxHeight = (node) => {
        if(!node) return 0;

        if(h[node.val]) return h[node.val];

        h[node.val] = 1 + Math.max(maxHeight(node.left), maxHeight(node.right));

        return h[node.val];
    }

    const dfs = (node, depth, maxDepth) => {
        if(!node) return 0;

        ans[node.val] = maxDepth;

        dfs(node.left, depth + 1, Math.max(maxDepth, depth + maxHeight(node.right)));
        dfs(node.right, depth + 1, Math.max(maxDepth, depth + maxHeight(node.left)));

    }
    dfs(root, 0, 0);
    
    return queries.map(q => ans[q]);
}
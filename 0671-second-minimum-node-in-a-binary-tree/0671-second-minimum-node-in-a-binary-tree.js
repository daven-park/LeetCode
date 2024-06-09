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
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    if(!root) return -1;
    let fir = root.val; 
    let sec = Infinity;

    const dfs = (node) => {
        if(!node) return;

        if(fir < node.val && node.val < sec) sec = node.val;
        
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return sec === Infinity ? -1 : sec; 
};
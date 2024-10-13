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
var minCameraCover = function(root) {
    if (!root.left && !root.right) return 1;
    let cameras = 0;
    
    const dfs = (node) => {
        if (!node) return null;
        if (!node.left && !node.right) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);
        
        if (left === 0 || right === 0) {
            cameras++;
            return 2;
        }
        
        if ((left < 2 && right < 2) && node === root) return cameras++;
        else return Math.max(left, right) - 1;
    }
    dfs(root);
    return cameras;
};
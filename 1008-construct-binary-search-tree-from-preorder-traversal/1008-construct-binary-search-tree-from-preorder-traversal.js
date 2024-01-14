/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
     let recursive = (low, up) => {
        if (preorder[0] < low || preorder[0] > up) return null;
        if (preorder.length == 0) return null;
         
        let root = new TreeNode(preorder.shift());
         
        root.left = recursive(low, root.val);
        root.right = recursive(root.val, up);
         
        return root;
    }
    return recursive(-Infinity, Infinity);
};
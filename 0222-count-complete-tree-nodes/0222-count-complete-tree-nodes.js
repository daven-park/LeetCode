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
var countNodes = function(root) {
    let num = [0];
    
    const traversal = (root, num) => {
        if(!root) return;
        else num[0] = num[0] + 1;
    
        traversal(root.left, num);
        traversal(root.right, num);
    }
    traversal(root, num);
    
    return num[0];
};
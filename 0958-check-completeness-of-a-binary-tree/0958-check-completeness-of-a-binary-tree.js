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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    if (!root) return true;
    
    const queue = [root];
    
    let flag = false;

    while (queue.length > 0) {
        const node = queue.shift();

        if (node.left) {
            if (flag) return false;
            queue.push(node.left);
        }else {
            flag = true;
        }

        if (node.right) {
            if (flag) return false;
            queue.push(node.right);
        }else {
            flag = true;
        }
    }

    return true;
};
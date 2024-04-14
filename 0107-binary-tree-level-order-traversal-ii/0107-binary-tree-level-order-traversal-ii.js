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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return [];
    
    let queue = [root];
    let res = [];
    
    while (queue.length) {
        let size = queue.length;
        let currentLevel = [];
        
        for (let i = 0; i < size; i++) {
            let curr = queue.shift()
            currentLevel.push(curr.val)
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        res.push(currentLevel)
    }
    return res.reverse()
};
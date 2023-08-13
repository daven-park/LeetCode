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
 */
var FindElements = function(root) {
    this.set = new Set()
    
    const recover = (root, val) =>{
        this.set.add(val);
        if(root.left != null) recover(root.left, val * 2 + 1)
        if(root.right != null) recover(root.right, val * 2 + 2)
    }
    recover(root, 0)
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return this.set.has(target)
};

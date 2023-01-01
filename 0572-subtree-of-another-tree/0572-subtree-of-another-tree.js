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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if(subRoot === null) return true;
    if(root === null) return false;
    
    if(isSame(root, subRoot)) {
       return true
    };
    
    return (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));
};

const isSame = (root, subRoot) => {
    if(root === null && subRoot === null){
        return true;
    }
    
    if((root && subRoot === null) || (root === null && subRoot)) {
        return false;
    }
    
    if(root.val !== subRoot.val){
        return false;
    }
    return (isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right));
}
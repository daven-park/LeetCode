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
var goodNodes = function(root) {
    return countGoodNodes(root, root.val)
};

 const countGoodNodes = (node, maxSoFar) => {
    let numOfGoodNodes = 0;

    if(node !== null){
        if(node.val >= maxSoFar) {
            maxSoFar = node.val;
            numOfGoodNodes++;
        }

        numOfGoodNodes += countGoodNodes(node.left, maxSoFar);                       numOfGoodNodes += countGoodNodes(node.right, maxSoFar);

    }
    return numOfGoodNodes;
}
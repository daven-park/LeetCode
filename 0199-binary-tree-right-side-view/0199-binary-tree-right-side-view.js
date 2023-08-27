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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];

    const answer = [];
    const q = [];

    q.push(root)

    while(q.length > 0) {
        const size = q.length

        for(let i = 0; i < size; i++) {
            const node = q.splice(0, 1)[0]

            if (i === 0) answer.push(node.val)

            if (node.right) q.push(node.right)
            if (node.left) q.push(node.left)
        }
    }

    return answer
};
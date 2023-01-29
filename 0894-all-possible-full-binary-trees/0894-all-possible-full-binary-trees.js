/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    if(n % 2 === 0) return [];
    
    let dp = new Array();
    dp[1] = [new TreeNode(0)];
    
    for(let i = 3; i <= n; i += 2){
        let trees = [];
        
        for(let j = 1; j <= i - 2; j += 2){
            dp[j].forEach(left => {
                dp[i - 1 - j].forEach(right => {
                    trees.push(new TreeNode(0, left, right))
                })
            })
        }
        dp[i] = trees;
    }
    return dp[n];
    
};
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = [];
    let arr = [];
    
    const comb = (start) => {
        if(arr.length === k){
            ans.push([...arr]);
            return;
        }
        
        for(let i = start; i <= n; i++){
            arr.push(i);
            comb(i + 1);
            arr.pop();
        }
    }
    comb(1);
    return ans
};
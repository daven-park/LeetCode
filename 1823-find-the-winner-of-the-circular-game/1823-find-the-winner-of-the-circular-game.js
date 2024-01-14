/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let q = [];
    
    for(let i = 1; i <= n; i++) q.push(i);

    while(q.length > 1){
        let cnt = k - 1;
        
        while(cnt > 0){
            q.push(q.shift());
            cnt--;
        }
        
        q.shift();
    }
    
    return q.shift();
};
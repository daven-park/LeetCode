/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
   let start = 0, end = x, mid = 0;
    while(start < end){
        mid = parseInt((start + end) / 2 );
        console.log(mid)
        if(mid * mid === x) return mid;
        
        if(x < mid * mid) end = mid - 1;
        else start = mid + 1;
    }
    
    return x < end * end ? end - 1 : end;
};
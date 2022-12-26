/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;
    
  for(let i = 1; i <= x; i++){
      let root = Math.floor(i * i) 
      let next = Math.floor((i + 1) * (i + 1));
      if( root <= x && next > x) return i;
  }  
};
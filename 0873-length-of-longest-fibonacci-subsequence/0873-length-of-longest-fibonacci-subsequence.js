/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
  
    let map = new Map();

    for(let n of arr) map.set(n, true);
    
    arr.sort((a, b) => a - b);
    
    let len = 0;
    
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            let first = arr[i];
            let second = arr[j];
            let tempLen = 0;
            while(map.has(first + second)){
                tempLen++;
                let temp = first + second;
                first = second;
                second = temp;
            }
            len = Math.max(len, tempLen + 2);
        }
    }
    return len > 2 ? len : 0;
};

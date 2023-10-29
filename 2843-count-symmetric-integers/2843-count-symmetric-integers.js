/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let ans = 0;
    while(low <= high){
        let lowStr = String(low);
        let firstSum = 0;
        let secondSum = 0;
        
        if(lowStr.length % 2 !== 0){
            low++;
            continue;
        }
        
        for(let i = 0; i < lowStr.length; i++){
            if(i < Math.floor(lowStr.length / 2)){
                firstSum += Number(lowStr[i]) 
            }else{
                secondSum += Number(lowStr[i]);
            }
        }        
        if(firstSum === secondSum) ans++;
        
        low++;
    }
    
    return ans;
};
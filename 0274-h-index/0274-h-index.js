/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let ans = 0;
    citations.sort((a, b) => a - b);

    for(let i = 0; i < citations.length; i++){
        if(citations[i] >= citations.length - i){
            return citations.length - i
        }
    }
    return 0
};
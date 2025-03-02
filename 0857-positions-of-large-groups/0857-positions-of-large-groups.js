/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let ans = [];
    let j = 0;
    for(let i = 0; i < s.length; i++){
        // 다른 값이 오면 이전 값까지 길이 계산 후 추가할지 확인
        if(s[i] !== s[i + 1]){
            if(i - j + 1 >= 3) ans.push([j, i]);
            j = i + 1;
        }
    }
    return ans
};
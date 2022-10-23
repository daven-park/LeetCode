/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] === b[0] ? b[1] - a[1] :  a[0] - b[0]); // a와 c가 같다면 b와 d를 내림차순 정렬
    
    let answer = 0, cur = 0;
    
    for(let interval of intervals){
        if(cur < interval[1]){ // 정렬되어 b와 d의 범위가 내림차순이므로 가장 큰 끝점이 아니면 범위에 포함되는 것으로 카운트하지 않는다.
            cur = interval[1];
            answer++;
        }
    }
    
    return answer;
};
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */

var findTheDistanceValue = function(arr1, arr2, d) {
    let answer = 0;
    arr2 = arr2.sort((a,b) => a - b);
    for(let i = 0; i < arr1.length; i++){
       let left = 0, right = arr2.length - 1;
        let flag = true;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);
            let num = Math.abs(arr1[i] - arr2[mid]);
            if(num <= d){
                flag = false;
                break;
            }else if(arr2[mid] > arr1[i]){
                right = mid -1
            }else {
                left = mid + 1;
            }
        }
        if(flag) answer += 1;
    }
    return answer;
};
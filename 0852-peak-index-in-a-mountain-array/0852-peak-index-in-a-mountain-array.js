/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let left = 0, right = arr.length - 1;
    let mid = 0;
    while(left <= right){
        mid = Math.floor((left + right) / 2);
        if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]){
            return mid;
        }else if(arr[mid] < arr[mid + 1]){
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
};
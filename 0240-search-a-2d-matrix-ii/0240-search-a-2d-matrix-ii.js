/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i = 0; i <= matrix.length - 1; i++){
    if (matrix[i][0] <= target && matrix[i][matrix[i].length - 1] >= target){
        let left = 0, right = matrix[i].length - 1
            while(left <= right){
                let mid = left + right >> 1;
                if (matrix[i][mid] == target) return true;
                if (matrix[i][mid] > target) right = mid - 1;
                if (matrix[i][mid] < target) left = mid + 1;
            }
        } else if (matrix[i][0] > target) return false;
    } 
    return false;
};

 
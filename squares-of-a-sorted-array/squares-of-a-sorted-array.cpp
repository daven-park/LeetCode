class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        vector<int> newArr(nums.size());
        for(int i = 0; i < nums.size(); i++){
            int n = abs(nums[i]);
            newArr[i] = (n * n);
        }
        
        sort(newArr.begin(), newArr.end());
        
        return newArr;
    }
};
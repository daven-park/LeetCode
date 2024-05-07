class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        int len = word1.length() > word2.length() ? word1.length() : word2.length();
        vector<char> arr;
        string ans = "";
        for(int i = 0; i < len; i++){
            if(i < word1.length()){
                arr.push_back(word1[i]);            
            }
            
            if(i < word2.length()){
                arr.push_back(word2[i]);            
            }
        }
        
        for(int i = 0; i < arr.size(); i++){
            ans += arr[i];
        }
        return ans;
    }
};
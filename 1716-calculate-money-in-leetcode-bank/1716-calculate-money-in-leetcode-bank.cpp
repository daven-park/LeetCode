class Solution {
public:
    int totalMoney(int n) {
        int ans = 0;
        int cnt = 0;
        for(int i = 1; i <= n; i++){
            ans += cnt + 1;
            cnt++;
            // 월요일이 되면 처음 값 + 1로 다시 시작
            if(i % 7 == 0){
                cnt = i / 7;
            }
        }
        return ans;
    }
};
import java.util.*;

class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        List<Boolean> list = new ArrayList<Boolean>();
        int maxCandy = -1;
        for(int i = 0; i < candies.length; i++){
            if(maxCandy < candies[i]) maxCandy = candies[i];
        }
        
        for(int i = 0; i < candies.length; i++){
            if(candies[i] + extraCandies >= maxCandy){
                list.add(true);
            }else {
                list.add(false);
            }
        }
        
        return list;
    }
}
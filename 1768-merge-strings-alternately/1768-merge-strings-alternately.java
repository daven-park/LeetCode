class Solution {
    public String mergeAlternately(String word1, String word2) {
       String str = "";
        int len = 0;
        if(word1.length() < word2.length()){
            len = word2.length();
        }else {
            len = word1.length();
        }
        
        for(int i = 0; i < len; i++){
            if(word1.length() - 1 >= i){
                str += word1.charAt(i);            
            }
            if(word2.length() - 1 >= i){
                str += word2.charAt(i);            
            }
        }
        
        System.out.println(str);
        return str;
    }
}
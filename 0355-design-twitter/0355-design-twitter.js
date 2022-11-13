
var Twitter = function() {
    this.tweets = [];   // 게시물
    this.follows = {};  // 팔로우 관리
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
   this.tweets.push({user:userId, tweet:tweetId});
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let checkUsers = this.follows[userId];
    
    if(!checkUsers) checkUsers = [];    // 초기화
    
    checkUsers.push(userId);
    
    let result = [];
    
    for(let tweet of this.tweets){
        if(checkUsers.includes(tweet.user)) result.unshift(tweet.tweet);    // 현재 user가 팔로우하고 있는 user의 게시물 맨 앞줄에 추가
    }
    
    return result.length > 10 ? result.slice(0, 10) : result;   // 게시물 개수 10 제한
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.follows[followerId]) this.follows[followerId] = [followeeId];
    else this.follows[followerId].push(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(!this.follows[followerId]) return;
    this.follows[followerId] = this.follows[followerId].filter(id => id !== followeeId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
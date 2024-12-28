
var RecentCounter = function() {
    this.queue = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    // range = [t - 3000, t]
    this.queue.push(t);
    let arr = this.queue.filter((el) => el >= t - 3000 && el <= t)
    return arr.length
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
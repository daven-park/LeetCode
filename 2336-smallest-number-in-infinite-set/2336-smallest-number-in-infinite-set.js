
var SmallestInfiniteSet = function() {
    this.remove = new Set();
    this.smallestEl = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    while (this.remove.has(this.smallestEl)) {
        this.smallestEl++;
    }
    this.remove.add(this.smallestEl);
    return this.smallestEl++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (this.remove.has(num)) {
        this.remove.delete(num);
        this.smallestEl = Math.min(num, this.smallestEl);
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
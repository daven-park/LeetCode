
var RangeModule = function() {
    this.intervals = [];
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.addRange = function(left, right) {
    let newInterval = [left, right];
    let i = 0;
    
    while(i < this.intervals.length && this.intervals[i][1] < newInterval[0]) i++
    
    while(i < this.intervals.length && this.intervals[i][0] <= newInterval[1]){
        newInterval = [Math.min(newInterval[0], this.intervals[i][0]), Math.max(newInterval[1], this.intervals[i][1])];
        this.intervals.splice(i, 1);
    }
    this.intervals.splice(i, 0, newInterval);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {boolean}
 */
RangeModule.prototype.queryRange = function(left, right) {
    let low = 0;
    let high = this.intervals.length - 1;
    
    while(low <= high) {
        let mid = low + (Math.floor((high - low) / 2));
        if(this.intervals[mid][0] <= left && this.intervals[mid][1] >= right) {
            return true;
        } else if (this.intervals[mid][0] > left) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {void}
 */
RangeModule.prototype.removeRange = function(left, right) {
    let i = 0;
    
    while(i < this.intervals.length && this.intervals[i][1] < left) i++;
    
    if(i < this.intervals.length && this.intervals[i][0] < left) {
        let newIntervalBefore = [this.intervals[i][0], left];
        if(right < this.intervals[i][1]) {
            let newIntervalAfter = [right, this.intervals[i][1]];
            this.intervals.splice(i, 1, newIntervalBefore, newIntervalAfter);
            return;
        }
        this.intervals.splice(i, 1, newIntervalBefore);
        i++;
    }
    
    while(i < this.intervals.length && right >= this.intervals[i][1]) this.intervals.splice(i, 1);
    
    if(i < this.intervals.length && right > this.intervals[i][0]) {
        let newIntervalAfter = [right, this.intervals[i][1]];
        this.intervals.splice(i, 1, newIntervalAfter);
    }
};

/** 
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */
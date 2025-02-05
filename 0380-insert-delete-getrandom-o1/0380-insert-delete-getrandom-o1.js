
var RandomizedSet = function() {
    this.arr = [];
    this.map = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)){
        return false
    }else {
        this.arr.push(val)
        this.map.set(val, this.arr.length - 1)
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map.has(val)){
        let last = this.arr[this.arr.length - 1];
        let idx = this.map.get(val)

        this.arr[idx] = last;
        this.map.set(last, idx)

        this.map.delete(val)
        this.arr.pop()
        return true
    }else {
        return false
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIndex];  
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
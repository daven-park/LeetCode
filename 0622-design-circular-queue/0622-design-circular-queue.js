/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.rear = -1;
    this.front = 0;
    this.q = [];
    this.maxSize = k;
    this.curSize = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.curSize >= this.maxSize){
        return false;
    }
    this.rear = (this.rear + 1) % this.maxSize;
    this.q[this.rear] = value;
    this.curSize++;
    
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()){
        return false;
    }
    this.front = (this.front + 1) % this.maxSize;
    this.curSize--;
    return true;
    
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return  this.isEmpty() ? -1 : this.q[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.q[this.rear]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.curSize === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.curSize === this.maxSize;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
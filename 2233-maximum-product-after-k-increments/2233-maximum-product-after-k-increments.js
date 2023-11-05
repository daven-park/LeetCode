/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumProduct = function(nums, k) {
    if(nums.length === 1) return nums[0] + k
    
    const minHeap = new MinPriorityQueue({priority: el => el})
    for(const num of nums){
        minHeap.enqueue(num)
    }
    
    while(k > 0 && minHeap.size() > 0){
        let curr = minHeap.dequeue().element;
        const next = minHeap.front().element;
        const dif = next - curr + 1;
    
        if(k >= dif){
            curr += dif;
            k -= dif
        }else{
            curr += k;
            k = 0;
        }
        minHeap.enqueue(curr);
    }
    
    const incrementedNums =  minHeap.toArray()
    return incrementedNums.reduce((acc,curr) => acc*curr.element % 1000000007, 1)
};
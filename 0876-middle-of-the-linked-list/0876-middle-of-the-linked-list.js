/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let arr = [];
    let temp = head;
    while(temp){
        arr.push(temp.val);
        temp = temp.next;
    }
    
    let mid = Math.floor(arr.length / 2);
    
    for(let i = 0; i < mid; i++){
        head = head.next;
    }
    
    return head;
    
    
};
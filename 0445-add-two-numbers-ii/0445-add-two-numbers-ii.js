/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let s1 = [];
    let s2 = [];
    
    while (l1) { 
        s1.push(l1.val); 
        l1 = l1.next; 
    }
    while (l2) {
        s2.push(l2.val); 
        l2 = l2.next; 
    }
    
    let result = null;
    let carry = 0;
    while (s1.length || s2.length) {
        let sum = (s1.length === 0 ? 0 : s1.pop()) + (s2.length === 0 ? 0 : s2.pop()) + carry;
        carry = +(sum >= 10);
    
        result = new ListNode(sum % 10, result);
    }
    
    if (carry) result = new ListNode(1, result);
    
    return result;
};
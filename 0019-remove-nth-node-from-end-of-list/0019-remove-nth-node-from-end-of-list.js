/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = slow = head;
    
    while(n >= 1){
      fast = fast.next;
      n--;
    }
    if(fast === null){
        head = head.next;
    }else {
        while(fast.next!==null){  
            slow = slow.next;
            fast = fast.next;
        }   
        slow.next = slow.next.next;
    }
    return head;
};
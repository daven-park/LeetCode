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
var swapPairs = function(head) {
    let point = new ListNode(); 
    point = head;  
    while(head && head.next ){ 
        let temp = head.val;                              
        head.val = head.next.val;                     
        head = head.next;                               
        head.val = temp;                                
        head = head.next;                            
    }
    return point;       
};
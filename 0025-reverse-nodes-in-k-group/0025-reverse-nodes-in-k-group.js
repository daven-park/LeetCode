/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let cnt = 0;
    let node = head;
    while(node && cnt != k){
        node = node.next;
        cnt++;
    }
    
    if(cnt === k){
        node = reverseKGroup(node, k);
        while(cnt > 0) {
            let temp = head.next;
            head.next = node;
            node = head;
            head = temp;
            cnt--;
        }
        head = node;
    }
    return head;
};
/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
    let curr = head;
    let temp = [];
    
    while (curr) {
        if (curr.child) {
            if (curr.next) temp.push(curr.next);
            curr.next = curr.child;
            curr.child.prev = curr;
            curr.child = null;
        }
        if (!curr.next && temp.length) {
            let parent = temp.pop();
            curr.next = parent;
            parent.prev = curr;
        }
        curr = curr.next;
    }

    return head;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let listOfValues = [];
    lists.forEach(list => {
        while(list){
            listOfValues.push(list.val);
            list = list.next;
        }
    })
    
    listOfValues.sort((a, b) => a - b);
    
    let head  = new ListNode();
  
    let listNode = head ;
    
    listOfValues.map(x => {
        listNode.next = new ListNode(x, null);
        listNode = listNode.next;
    })
    
    return head.next;
};
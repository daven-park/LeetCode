/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let N = tickets.length;

    let i = 0;

    let count = 0;

    while (tickets[k] > 0) {
        let pos = i % N;
        if (tickets[pos]) {
            tickets[pos]--;
            count++;
        }  
        i++;
    }
    return count;
};
/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function(n, logs) {
    let bestTaskTime = 0;
    let id = 0;
    
    let prev = 0;
    for(task of logs) {
        let complete = task[1] - prev;
        if(complete > bestTaskTime){
            bestTaskTime = complete;
            id = task[0];
        }
        if(complete == bestTaskTime && task[0] < id){
            id = task[0];
        }
        prev = task[1];
    }
    return id;
};
/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function(tasks, space) {
    const map = [];
    let day = 0;

    for (const task of tasks) {
        if (map[task] > day) {
            day += map[task] - day;
        }
        day += 1;
        map[task] = day + space;
    }

    return day;
};
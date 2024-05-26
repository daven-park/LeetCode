/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
class Worker {
    constructor(quality , ratio){
        this.quality = quality;
        this.ratio = ratio;
    }
}

var mincostToHireWorkers = function(quality, wage, k) {
    let workers = []

    for(let i = 0 ; i < wage.length ; i++){ 
        workers.push(new Worker(quality[i] , parseFloat(wage[i] / quality[i])))
    }

    workers.sort((a,b) => a.ratio - b.ratio) 

    let totalQuality = 0;
    let takenWorkerQuality = [];
    let result = Infinity;

    for(let worker of workers){  
        totalQuality += worker.quality;
        takenWorkerQuality.push(worker.quality);

        if(takenWorkerQuality.length > k){
            takenWorkerQuality.sort((a,b) => b-a)
            totalQuality -= takenWorkerQuality.shift()
        }

        if(takenWorkerQuality.length === k){
            result = Math.min(result , totalQuality * worker.ratio)
        }
    }

    return result.toFixed(5)
};
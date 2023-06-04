/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init;
    let resetV = init;
    
    let obj = {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => count = resetV 
    }
    
    return obj;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    

    tokens.forEach(token => {
        if(/^[+\-*/]$/.test(token)){    // regex
            let sec = stack.pop();
            let fir = stack.pop();
            stack.push(calc(fir, sec, token));
        }else {
            stack.push(+token)
        }
    })
    return stack.pop();
};

const calc = (fir, sec, token) => {
    switch(token) {
        case '+' : return fir + sec;
        case '-' : return fir - sec;
        case '*' : return fir * sec;
        case '/' : return fir / sec | 0;
    }
}



/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let open = [];
    let star = [];

    let len = s.length;

    for(let i = 0; i < len; i++){
        if(s[i] === '(') open.push(i);
        else if(s[i] === '*') star.push(i);
        else{
            if(open.length !== 0) open.pop();
            else if(star.length !== 0) star.pop();
            else return false;
        }
    }

    while(open.length !== 0){
        if(star.length === 0) return false;
        else if(open[open.length - 1] < star[star.length - 1]){
            open.pop();
            star.pop();
        }
        else return false;
    }
    return true;
};
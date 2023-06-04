/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function(ideas) {
    let map = {};
    for(let idea of ideas){
        let first = idea.slice(0, 1);
        let char = idea.slice(1);
        if(!map[first]) map[first] = new Set();
        map[first].add(char);
    }
    
    let result = 0;
    let keys = Object.keys(map);
    for(let i = 0; i < keys.length; i++){
        for(let j = i + 1; j < keys.length; j++){
            let cnt = 0;
            let set1 = map[keys[i]];
            let set2 = map[keys[j]];
            for(let ch of set1){
                if(set2.has(ch)){
                    cnt++;
                }
            }
            result += 2 * (set1.size - cnt) * (set2.size - cnt);
        }
    }
    return result;
};
const stg = ' '
const num = 10

const repeatString = function(stg, num) {
    let result = "";
    if (num < 0) return 'ERROR'
    for (let i = 0; i < num; i++){
        result += stg
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;

const stg = 'goodbye'
const num = -1

const repeatString = function(stg, num) {
    let result = "";
    if (num < 0) return 'ERROR'
    for (let i = 0; i < num; i++){
        result += 'goodbye'
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;

const stg = 'hey'
const num = 3

const repeatString = function(stg, num) {
    let result = "";
    for (let i = 0; i < num; i++){
        result += stg;
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;

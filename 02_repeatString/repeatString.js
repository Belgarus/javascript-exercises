const stg = 'hello'
const num = 10

const repeatString = function(stg, num) {
    let result = "";
    for (let i = 0; i < num; i++){
        result += stg;
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;

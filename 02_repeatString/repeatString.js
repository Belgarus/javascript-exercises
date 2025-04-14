const stg = 'hey'
const num = 0

const repeatString = function(stg, num) {
    let result = "";
    for (let i = 0; i < num; i++){
        result += repeatString(stg);
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;

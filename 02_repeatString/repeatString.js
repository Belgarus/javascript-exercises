const stg = 'hey'
const num = Math.floor((Math.random()*1000)+1)

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

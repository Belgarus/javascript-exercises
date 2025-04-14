const stg = 'hey'
const num = 0

const repeatString = function() {
    for (; num > 3; num++){
        repeatString(stg);
    }
};

// Do not edit below this line
module.exports = repeatString;

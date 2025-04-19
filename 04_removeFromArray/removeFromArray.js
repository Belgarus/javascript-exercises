const removeFromArray = function() {
    let Array = [1, 2, 3, 4];
    let newArray = []
    for (let i = 0; i < Array.length; i++){
            if(i !== 1 && i !== 2){
                newArray.push(Array[i])
            }
    }
    return newArray;
};


console.log(removeFromArray())
// Do not edit below this line
module.exports = removeFromArray;

let str = "hello there";

const reverseString = function(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
};

// Ausgabe ins Terminal
console.log(reverseString(str));

// Do not edit below this line
module.exports = reverseString;


//This function repeats a string x number of times on the same line
//Returns error if x is less than 1
//Returns nothing if x is 0
const repeatString = function(string, num) {
    if (num == 0) {
        opString = "";
    } else if (num < 1) {
        opString = "ERROR";
    } else {
    var opString = string;
    for (i = 0; i < num - 1; i++) {
     opString += string;
    } }
return opString;
};

// Do not edit below this line
module.exports = repeatString;

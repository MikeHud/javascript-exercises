const sumAll = function(int1, int2) {
//sum of all integers between given range int1, int2
//check inputs are not negative
//find the highest value
//iterate through until it hits the limit
//return sum
let sum = 0;

if (int1 < 0 || int2 < 0) {
    return "ERROR";
} else if (int1 < int2) {
    for (i = int1; i <= int2; i++) {
        sum += i;
    }  
    return sum; 
} else if (int1 > int2) {
    for (i = int1; i >= int2; i--) {
        sum += i;
    }
    return sum; 
}
}
module.exports = sumAll;

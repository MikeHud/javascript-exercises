const leapYears = function(year) {

    // all years divisable by 4 = leap year
    // all years divisable by 400 but !100 = leap year

    if (year % 4 == 0) {

        if (year % 400 == 0 && year % 100 == 0) { //400 AND 100 = T
            return true;
        } else if (year % 100 == 0){ //100 = F
            return false;
        } else {
            return true; // 4 = T
        }
    } else {
        return false; 
    }
};

// Do not edit below this line
module.exports = leapYears;

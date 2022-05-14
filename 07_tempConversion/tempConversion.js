const ftoc = function(tempInF) {
let tempInC = ((tempInF - 32) * 5) / 9
return Math.round(tempInC * 10) / 10;
};

const ctof = function(tempInC) {
let tempInF = ((tempInC / 5) * 9) + 32;
return Math.round(tempInF * 10) /10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

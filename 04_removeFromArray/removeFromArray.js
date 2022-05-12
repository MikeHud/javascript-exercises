const removeFromArray = function() {

//find index of value to remove
//splice to remove that value by index
let index = arguments[0].indexOf(arguments[1]);
arguments[0].splice(index, 1);
return arguments[0];
};
removeFromArray([1, 2, 3, 4], 3)
module.exports = removeFromArray; 
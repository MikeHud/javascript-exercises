const removeFromArray = function() {

//loop through multiple time to delete multiple elements
for (let i = 1; i < arguments.length; i++) {
    console.log(arguments[i]);
    //find index of value to remove
    let index = arguments[0].indexOf(arguments[i]);
    //splice to remove that value by index but only if it's valid
        if (index !== -1) {
        arguments[0].splice(index, 1);
        }
    };
    return arguments[0];    
}
module.exports = removeFromArray; 

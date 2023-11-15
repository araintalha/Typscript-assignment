/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should
be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the
 message printed on it. Call the function.
*/
//delaring function
function make_shirt() {
    var shirtsize = 'Large';
    var message = 'Success is going from failure to failure without losing your enthusiasm';
    console.log("The size of the shirt is '".concat(shirtsize, "' and the message printed on it is '").concat(message, "'"));
}
;
make_shirt(); // calling function

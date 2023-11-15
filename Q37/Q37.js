/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
and a shirt of any size with a different message.
*/
//delaring function
function make_shirt() {
    var defaultsize = 'Large';
    var size = 'medium';
    var defaultmessage = 'I love Typescript.';
    var message = 'No pain No gain.';
    console.log("The size of the shirt is '".concat(defaultsize, "' and the message printed on it is '").concat(defaultmessage, "'"));
    console.log("The size of the shirt is '".concat(size, "' and the message printed on it is '").concat(defaultmessage, "'"));
    console.log("The size of the shirt is '".concat(size, "' and the message printed on it is '").concat(message, "'"));
}
;
make_shirt(); // calling function

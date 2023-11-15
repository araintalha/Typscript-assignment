/*Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet!
*/
var Animals = ['Dog', 'Cat', 'Horse'];
for (var _i = 0, Animals_1 = Animals; _i < Animals_1.length; _i++) {
    var string = Animals_1[_i];
    if (string == 'Dog') {
        console.log("'A ".concat(string, " would make a great pet'"));
    }
    else if (string == 'Cat') {
        console.log("'".concat(string, " can jump 5 times  their own height'"));
    }
    else {
        console.log("'".concat(string, " can sleep standing up'"));
    }
}
console.log("'Any of these animals would make a great pet");

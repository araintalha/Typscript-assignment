/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians()
with each array to show that you have one array of the original names and one array
with the Great added to each magician’s name.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to make magicians great
function makeGreat(magicians) {
    // Use map to create a new array with "the Great" added to each magician's name
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
// Function to show magicians
function showMagicians(magicians, title) {
    console.log(title);
    magicians.forEach(function (magician, index) {
        console.log("Magician ".concat(index + 1, ": ").concat(magician));
    });
    console.log('\n');
}
// Array of magician names
var magicianNames = ['Merlin', 'Houdini', 'David Copperfield', 'Penn and Teller'];
// Make a copy of the magicians array
var copiedMagicians = __spreadArray([], magicianNames, true);
// Make the copied magicians great
var greatMagicians = makeGreat(copiedMagicians);
// Display the original list
showMagicians(magicianNames, "Original Magicians:");
// Display the modified list
showMagicians(greatMagicians, "Magicians after making them great:");

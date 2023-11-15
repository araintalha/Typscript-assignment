/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great
to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/
// Function to make magicians great
function makeGreat(magicians) {
    // Use map to create a new array with "the Great" added to each magician's name
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
// Function to show magicians
function showMagicians(magicians) {
    magicians.forEach(function (magician, index) {
        console.log("Magician ".concat(index + 1, ": ").concat(magician));
    });
}
// Array of magician names
var magicianNames = ['Merlin', 'Houdini', 'David Copperfield', 'Penn and Teller'];
// Make the magicians great
var greatMagicians = makeGreat(magicianNames);
// Display the modified list
console.log("Original Magicians:");
showMagicians(magicianNames);
console.log("\nMagicians after making them great:");
showMagicians(greatMagicians);

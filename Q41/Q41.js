/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.
*/
// Function to show magicians
function showMagicians(magicians) {
    magicians.forEach(function (magician, index) {
        console.log("Magician ".concat(index + 1, ": ").concat(magician));
    });
}
// Array of magician names
var magicianNames = ['Merlin', 'Houdini', 'David Copperfield', 'Penn and Teller'];
// Call the function to show magicians
showMagicians(magicianNames);

/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.
*/

// Function to show magicians
function showMagicians(magicians: string[]): void {
    magicians.forEach((magician, index) => {
      console.log(`Magician ${index + 1}: ${magician}`);
    });
  }
  
  // Array of magician names
  const magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn and Teller'];
  
  // Call the function to show magicians
  showMagicians(magicianNames);
  
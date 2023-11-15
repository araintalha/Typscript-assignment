/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great
to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/
// Function to make magicians great
function makeGreat(magicians: string[]): string[] {
    // Use map to create a new array with "the Great" added to each magician's name
    const greatMagicians = magicians.map((magician) => `the Great ${magician}`);
    return greatMagicians;
  }
  
  // Function to show magicians
  function showMagicians(magicians: string[]): void {
    magicians.forEach((magician, index) => {
      console.log(`Magician ${index + 1}: ${magician}`);
    });
  }
  
  // Array of magician names
  const magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn and Teller'];
  
  // Make the magicians great
  const greatMagicians = makeGreat(magicianNames);
  
  // Display the modified list
  console.log("Original Magicians:");
  showMagicians(magicianNames);
  
  console.log("\nMagicians after making them great:");
  showMagicians(greatMagicians);
  
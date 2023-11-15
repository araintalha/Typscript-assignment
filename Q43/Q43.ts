/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() 
with each array to show that you have one array of the original names and one array
with the Great added to each magician’s name.
*/

// Function to make magicians great
function makeGreat(magicians: string[]): string[] {
    // Use map to create a new array with "the Great" added to each magician's name
    const greatMagicians = magicians.map((magician) => `the Great ${magician}`);
    return greatMagicians;
  }
  
  // Function to show magicians
  function showMagicians(magicians: string[], title: string): void {
    console.log(title);
    magicians.forEach((magician, index) => {
      console.log(`Magician ${index + 1}: ${magician}`);
    });
    console.log('\n');
  }
  
  // Array of magician names
  const magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Penn and Teller'];
  
  // Make a copy of the magicians array
  const copiedMagicians: string[] = [...magicianNames];
  
  // Make the copied magicians great
  const greatMagicians: string[] = makeGreat(copiedMagicians);
  
  // Display the original list
  showMagicians(magicianNames, "Original Magicians:");
  
  // Display the modified list
  showMagicians(greatMagicians, "Magicians after making them great:");
  
  
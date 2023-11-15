/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.
*/

// Function to make a sandwich
function makeSandwich(...toppings: string[]): void {
    console.log("Sandwich Summary:");
    if (toppings.length === 0) {
      console.log("No toppings. It's a plain sandwich!");
    } else {
      console.log("Toppings: " + toppings.join(', '));
    }
    console.log('\n');
  }
  
  // Call the function with different numbers of arguments
  makeSandwich('Ham', 'Cheese', 'Lettuce');
  makeSandwich('Turkey', 'Tomato');
  makeSandwich(); // Plain sandwich with no toppings
  
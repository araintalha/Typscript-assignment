/*More Conditional Tests: You don’t have to limit the number of tests you create to 10.
If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than,
 greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
// Tests for equality and inequality with strings
var fruit = 'apple';
// Test 1: Is fruit equal to 'apple'? I predict True.
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
// Test 2: Is fruit not equal to 'orange'? I predict True.
console.log("Is fruit != 'orange'? I predict True.");
console.log(fruit != 'orange');
// Tests using the lowercase function
var city = 'New York';
// Test 3: Is the lowercase of city equal to 'new york'? I predict True.
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');
// Numerical tests
var number1 = 42;
var number2 = 24;
// Test 4: Is number1 equal to number2? I predict False.
console.log("Is number1 == number2? I predict False.");
console.log(number1 == number2);
// Test 5: Is number1 greater than number2? I predict True.
console.log("Is number1 > number2? I predict True.");
console.log(number1 > number2);
// Test 6: Is number1 less than or equal to number2? I predict False.
console.log("Is number1 <= number2? I predict False.");
console.log(number1 <= number2);
// Tests using "and" and "or" operators
var sunny = true;
var warm = false;
// Test 7: Is it sunny and warm? I predict False.
console.log("Is it sunny && warm? I predict False.");
console.log(sunny && warm);
// Test 8: Is it sunny or warm? I predict True.
console.log("Is it sunny || warm? I predict True.");
console.log(sunny || warm);
// Test whether an item is in an array
var fruits = ['apple', 'orange', 'banana'];
// Test 9: Is 'grape' in the fruits array? I predict False.
console.log("Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape'));
// Test whether an item is not in an array
// Test 10: Is 'banana' not in the fruits array? I predict False.
console.log("Is 'banana' not in the fruits array? I predict False.");
console.log(!fruits.includes('banana'));

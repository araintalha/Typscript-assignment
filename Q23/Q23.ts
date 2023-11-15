/*Conditional Tests: Write a series of conditional tests.
Print a statement describing each test and your prediction for the results of each test.
Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

let car: string = 'subaru';

// Test 1: Is car equal to 'subaru'? I predict True.
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2: Is car not equal to 'honda'? I predict True.
console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');

// Test 3: Is car strictly equal to 'subaru'? I predict True.
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 4: Is car not strictly equal to 42? I predict True.
console.log("Is car !== 42? I predict True.");
console.log(car !== '42');

// Test 5: Is the length of car equal to 6? I predict False.
console.log("Is car.length == 6? I predict False.");
console.log(car.length == 6);

// Test 6: Is car greater than 'ford'? I predict True.
console.log("Is car > 'ford'? I predict True.");
console.log(car > 'ford');

// Test 7: Is car less than or equal to 'toyota'? I predict False.
console.log("Is car <= 'toyota'? I predict False.");
console.log(car <= 'toyota');

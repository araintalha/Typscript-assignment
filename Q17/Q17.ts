/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16.
  Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
  Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list.
  Print your list to make sure you actually have an empty list at the end of your program.
  */

  let list =['Ahmed','Ali','Hamza'];
console.warn(`Hi ${list[0]} I have arranged a dinner party at my place I would like to invite you, I hope you will come thanks.`);
console.warn(`Hi ${list[1]} I have arranged a dinner party at my place I would like to invite you,I hope you will come thanks.`);
console.warn(`Hi ${list[2]} I have arranged a dinner party at my place I would like to invite you, I hope you will come thanks.`);

console.log(`Because of some emergency ${list[1]} will not be able to join dinner party.`)
list =['Ahmed','Rehman','Hamza'];

console.warn(`Hi ${list[0]} I have arranged a dinner party at my place I would like to invite you,I hope you will come thanks.`);
console.warn(`Hi ${list[1]} I have arranged a dinner party at my place I would like to invite you,I hope you will come thanks.`);
console.warn(`Hi ${list[2]} I have arranged a dinner party at my place I would like to invite you,I hope you will come thanks.`);

console.warn('Hi people I have found a bigger dinner table so i am inviting some more friends');
list =['Asif','Ahmed','Imad','Hamza',("Babar")];

console.warn(`Hi ${list[0]} I have arranged a dinner party at my place I would like to invite you,I hope you will come thanks.`);
console.warn(`Hi ${list[1]} I have arranged a dinner party at my place I would like to invite you,I hope you will come thanks.`);
console.warn(`Hi ${list[2]} I have arranged a dinner party at my place I would like to invite you,I hope you will come thanks.`);
console.warn(`Hi ${list[3]} I have arranged a dinner party at my place I would like to invite you,I hope you will come thanks.`);
console.warn(`Hi ${list[4]} I have arranged a dinner party at my place I would like to invite you,I hope you will come thanks.`);

console.log(`I am so sorry guys I just found out that my new dinner table wont't arrive on time for the dinner and I have space for only 2 guests`);

console.log(`Iam sorry ${list[4]} i can not invite you on dinner`);
list.pop();

console.log(`Iam sorry ${list[3]} i can not invite you on dinner`);
list.pop();

console.log(`Iam sorry ${list[2]} i can not invite you on dinner`);
list.pop();

console.log(`Hi ${list[0]} You are still invited at dinner`)
console.log(`Hi ${list[1]} You are still invited at dinner`)

list.pop();
list.pop();
console.log(list);
/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14.
 Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/
var list = ['Ahmed', 'Ali', 'Hamza'];
console.warn("Hi ".concat(list[0], " I have arranged a dinner party at my place I would like to invite you, I hope you will come thanks."));
console.warn("Hi ".concat(list[1], " I have arranged a dinner party at my place I would like to invite you,I hope you will come thanks."));
console.warn("Hi ".concat(list[2], " I have arranged a dinner party at my place I would like to invite you, I hope you will come thanks."));
console.log("Because of some emergency ".concat(list[1], " will not be able to join dinner party."));
list[0] = 'Rehman';
console.warn("Hi ".concat(list[0], " I have arranged a dinner party at my place I would like to invite you, I hope you will come thanks."));
console.warn("Hi ".concat(list[1], " I have arranged a dinner party at my place I would like to invite you,I hope you will come thanks."));
console.warn("Hi ".concat(list[2], " I have arranged a dinner party at my place I would like to invite you, I hope you will come thanks."));

/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
var current_users = ['Hamza', 'Ali', 'Ahmed', 'Zia', 'Okasha'];
// adding Zia in new_users from current_users.
var new_users = ['Talha', 'Fahad', 'Umar', 'Zia', 'Hamza'];
for (var _i = 0, current_users_1 = current_users; _i < current_users_1.length; _i++) {
    var new_users_1 = current_users_1[_i];
    if (new_users_1 == 'Zia') {
        console.log("".concat(new_users_1, ",will need to enter a new username."));
    }
    else {
        console.log("The username ".concat(new_users_1, ", is available"));
    }
}
;

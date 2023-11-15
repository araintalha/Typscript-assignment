/*Hello Admin: Make a array of five or more usernames, including the name 'admin'.
 Imagine you are writing code that will print a greeting to each user after they log in to a website. 
 Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin,
 would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
// Array of usernames
let usernames = ['Hamza','Ali','Ahmed','Admin','Talha']

// Loop through the array and print greetings
for (let username of usernames) {
    // Check if the username is 'admin'
    if (username === 'Admin') {
        console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}


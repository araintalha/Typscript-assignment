/*Name Cases: Store a person’s name in a variable,
 and then print that person’s name in lowercase, uppercase, and titlecase.
 */
var person = 'Talha';
var Inlowercase = person.toLowerCase();
var InUppercase = person.toUpperCase();
var titlecasename = person.split('');
for (var i = 0; i < titlecasename.length; i++) {
    titlecasename[i] = titlecasename[i].charAt(0).toUpperCase() + titlecasename[i].slice(1).toLowerCase();
}
console.log(titlecasename.toString().replace(/,/g, ''));
console.log("Name in Lowercase:".concat(Inlowercase));
console.log("Name in Uppercase:".concat(InUppercase));

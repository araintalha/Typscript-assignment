/*Name Cases: Store a person’s name in a variable,
 and then print that person’s name in lowercase, uppercase, and titlecase.
 */

let person = 'Talha';
let Inlowercase = person.toLowerCase();
let InUppercase = person.toUpperCase();
let titlecasename = person.split('');
for(let i=0; i< titlecasename.length; i++){
    titlecasename[i] =titlecasename[i].charAt(0).toUpperCase() + titlecasename[i].slice(1).toLowerCase();
}
console.log(titlecasename.toString().replace(/,/g , ''));
console.log(`Name in Lowercase:${Inlowercase}`);
console.log(`Name in Uppercase:${InUppercase}`);
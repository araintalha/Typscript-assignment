/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
and a shirt of any size with a different message.
*/

//delaring function
function make_shirt(){
    let defaultsize = 'Large'
    let size = 'medium'
    let defaultmessage ='I love Typescript.'
    let message ='No pain No gain.'
    console.log(`The size of the shirt is '${defaultsize}' and the message printed on it is '${defaultmessage}'`)
    console.log(`The size of the shirt is '${size}' and the message printed on it is '${defaultmessage}'`)
    console.log(`The size of the shirt is '${size}' and the message printed on it is '${message}'`)
};

make_shirt();// calling function
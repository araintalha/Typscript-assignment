/*Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/

let Age ='1';

if( Age < '2'){
    console.log('The person is a baby')
};

Age ='3';
if(Age >= '2' && Age < '4') {
    console.log('The person is a toddler')

};

Age ='8';
if (Age >= '4'  && Age < '13'){
    console.log('The person is a kid')
};


Age ='18';
if (Age >= '13' && Age < '20'){
    console.log(`The person is a teenageer`)
};


Age = '50';
if (Age >= '20' && Age <'65'){
    console.log(`The person is an adult`)
}

Age = '75';
if(Age > '65'){
    console.log(`The person is an elder`)
};







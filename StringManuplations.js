const firstName = 'Abhishek';
const lastName = 'Sharma';
const greetings = "Hello ,"+firstName+" "+lastName+" How are you?";
console.log(greetings);

// BACK TICK

const greetings2 =  `Hello ,${firstName} ${lastName}, How are you?`;

console.log(greetings2);

const add = (a,b) => a+b;

const addResult =`Reuslt , ${add(345,567)} `; 
console.log(addResult);

const message = `
Hello ${firstName},
this is message for you,
the sum of 345 & 354 ${add(345,354)}
bye bye
`;

console.log(message)
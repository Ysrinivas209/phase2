//var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
//let: Declares variables with block scope, allowing updates but not re-declaration within the same block.
//const: Declares block-scoped variables that cannot be reassigned after their initial assignment.



let firstName ='Abhishek'
let lastName = 'Sharma'

console.log(firstName+' '+lastName);
let age=22;
let birthDate = new Date();

let person = {
firstName : 'Shivang',
lastName : 'Gupta'
}

console.log(person)

const department = 'Training';
//department = 'development';
console.log(department);


const customer = {
    firstName : 'Shivang',
    lastName : 'Gupta'
    }
console.log(customer)
const customer2 = {
    firstName : 'Abhishek',
    lastName : 'Ganguly'
    }

customer2.firstName = 'Anam'
customer2.lastName = 'Ansari'

console.log(customer2)

//customer2 = {}

let squareOfNumber = function(value)
{

return value*value;
}

console.log(squareOfNumber(25));

for (let index = 0; index <=10; index++) {
console.log(index);
}
//console.log(index);

var index2 =10;
for (index2 = 0; index2 <=10; index2++) {
    console.log(index2);
    }
console.log(index2);


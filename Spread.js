<<<<<<< HEAD
//SPREAD OPERATOR WITH ARRAY
const sum = (a, b) => a + b;
console.log(sum(345, 654));
const numbers = [2, 3, 4];
console.log(sum(numbers[0], numbers[1]));
console.log(sum(numbers));
console.log(sum(...numbers));

const morenumbers = [1, ...numbers]; //[ 1, 2, 3, 4 ]
console.log(morenumbers);
const othernumber = [4, 5];

const morenumbers2 = [...numbers, ...othernumber];

console.log(morenumbers2);
const [first, second, ...theremainingvlues] = morenumbers2;

console.log(theremainingvlues);

const CloneOfmorenumbers2 = [...morenumbers2];
console.log(CloneOfmorenumbers2);

// array2 = [1,2,3,4,5];

// let newArray  = array2; // shallow copy
// newArray[0] = array2[0];// deep copy

//SPREAD OPERATOR : OBJECT

const person = {
  firstName: "Aditya",
  lastName: "Vangaru",
};
const person2 = {
  name: person.firstName,
  age: 23,
};
console.log(person2); //{ name: 'Aditya', age: 23 }
const Address = {
  streetName: "M.G. Marg",
  City: "Delhi",
  PinCode: 110002,
  Country: "India",
};

const Customer = {
  ...person,
  age: 99,
  ...Address,
};
console.log(Customer);

const jsonReturn = () => {
  return { ...person, age: 99, ...Address };
};
console.log(jsonReturn());
console.log(JSON.stringify(jsonReturn()));
=======
//SPREAD OPERATOR WITH ARRAY
const sum = (a, b) => a + b;
console.log(sum(345, 654));
const numbers = [2, 3, 4];
console.log(sum(numbers[0], numbers[1]));
console.log(sum(numbers));
console.log(sum(...numbers));

const morenumbers = [1, ...numbers]; //[ 1, 2, 3, 4 ]
console.log(morenumbers);
const othernumber = [4, 5];

const morenumbers2 = [...numbers, ...othernumber];

console.log(morenumbers2);
const [first, second, ...theremainingvlues] = morenumbers2;

console.log(theremainingvlues);

const CloneOfmorenumbers2 = [...morenumbers2];
console.log(CloneOfmorenumbers2);

// array2 = [1,2,3,4,5];

// let newArray  = array2; // shallow copy
// newArray[0] = array2[0];// deep copy

//SPREAD OPERATOR : OBJECT

const person = {
  firstName: "Aditya",
  lastName: "Vangaru",
};
const person2 = {
  name: person.firstName,
  age: 23,
};
console.log(person2); //{ name: 'Aditya', age: 23 }
const Address = {
  streetName: "M.G. Marg",
  City: "Delhi",
  PinCode: 110002,
  Country: "India",
};

const Customer = {
  ...person,
  age: 99,
  ...Address,
};
console.log(Customer);

const jsonReturn = () => {
  return { ...person, age: 99, ...Address };
};
console.log(jsonReturn());
console.log(JSON.stringify(jsonReturn()));
>>>>>>> 76c4be755747aed2de1d59260d14cc4ec9a92740
console.log(JSON.parse(JSON.stringify(jsonReturn())));
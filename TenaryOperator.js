const age = 17;
let message;
if (age >= 18) {
  message = "You are major";
} else {
  message = "You are minor";
}
console.log(message);
//Ternary operator
message = (age >= 18) ? "You are major" : "You are minor";

console.log(message);

let a=10,b=20,c=30;

result = (a > b && a > c ) ? "A is greater" : (b > a && b > c) ? "B is greater" : "C is greater";

console.log(result);
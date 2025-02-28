//Arrow functions were introduced in ES6.

//Arrow functions allow us to write shorter function syntax:
let squareOfNumber = function(value)
{
return value* value;
}
console.log(squareOfNumber(25));
let squareOfNumber2 = (value) => value * value;
console.log(squareOfNumber2(625));

let printsomething = () =>console.log('i am print something');
printsomething();

let addition = (value1,value2) => value1+value2;

console.log(addition(234,456));
let addition2 = (value1,value2) =>
{
    console.log(value1+value2);

};
addition2(234,5443);
let Complexfunction = ()=> {
//this
//line1
//line2
array = [1,2,3,4,55,6,777];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
    
     }

};
Complexfunction();

const obj  = {
traditionalfuction  : function(){
    console.log("Traditional function",this)
},
arrowfunction : () => console.log("Arrow function",this)
};
console.log('This is environment',this);
obj.traditionalfuction();
obj.arrowfunction();



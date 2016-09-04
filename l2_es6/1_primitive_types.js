
const myString = 'myString'; //Use single quote
console.log(myString+' is a myString'); // => myString is a myString
console.log(typeof(myString)); // => string

const number1 = 3;
const number2 = 3.33;
console.log(number2 - number1); // => 0.33000000000000007
console.log(typeof(number1)); // => number
console.log(typeof(number2)); // => number

const boolean = true;
console.log(!boolean); // => false
console.log(typeof(boolean)); // => boolean

const empty = null;
let unknown;
console.log(unknown); // => undefined
console.log(empty == unknown); // => true
console.log(!!(empty)); // => false
console.log(!!(unknown)); // => false
console.log(typeof(empty)); // => object
console.log(typeof(unknown)); // => undefined

let number3 = number2; //work on its directly value
number3 = 10;
console.log(number2, number3); // => 3.33 10

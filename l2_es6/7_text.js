
//Declaration
const firstName = 'Kobkrit';
const lastName = 'Viriyayudhakorn';
const position = 'CEO of iApp Technology';

//Concatenation String
const fullName = firstName+' '+lastName;

//Newline
const fullNameWithPosition = fullName+'\n'+position;

console.log(fullName); // => Kobkrit Viriyayudhakorn
console.log(fullNameWithPosition); // => Kobkrit Viriyayudhakorn
                                   //    CEO of iApp Technology


//ES6: Template Strings
const fullName2 = `${firstName} ${lastName}`;
const fullNameWithPosition2 = `${fullName2}\n${position}`;
const fullNameWithPosition3 = `${fullName2}
${position}`;

console.log(fullName2); // => Kobkrit Viriyayudhakorn
console.log(fullNameWithPosition2); // => Kobkrit Viriyayudhakorn
                                    //    CEO of iApp Technology
console.log(fullNameWithPosition3); // => Kobkrit Viriyayudhakorn
                                    //    CEO of iApp Technology


//Convert Number to String
const PI = 3.1428;
console.log(`PI = ${PI.toFixed(2)}`); // => PI = 3.14
// Only 2 demical places

//Convert from String to Number
let sum = parseInt('3') + parseFloat('3.14');
console.log(sum); // => 6.140000000000001
console.log(sum.toFixed(2)); // => 6.14



// indexOf, lastIndexOf
console.log('this is an apple'.indexOf('this')); // => 0
console.log('this is an apple'.indexOf('is')); // => 2 (at this)
console.log('this is an apple'.indexOf('mac')); // => -1
console.log('this is an apple'.lastIndexOf('is')); // => 5 (at is)

// Search
console.log('this is an apple'.search(/a/)); // => 8

// Replace
console.log('this is an apple'.replace(/a/g,'b')); // => this is bn bpple

// Compare
console.log('ABC' === 'ABC'); //true
console.log('ABC' === 'abc'); //false
console.log('ABC' == 'ABC'); //true
console.log('ABC' == 'abc'); //false
console.log('ABC' != 'ABC'); //false
console.log('abc' < 'z'); //true



// charAt
console.log('this is an apple'.charAt(0)); // => t
console.log('this is an apple'.charAt(1)); // => h
console.log('this is an apple'[2]); // => i

// slice(), toLowerCase(), toUpperCase(), trim()
console.log('this is an apple'.slice(5, 8)); // => is
console.log('This is an apple'.toLowerCase()); // => this is an apple
console.log('this is an apple'.toUpperCase()); // => THIS IS AN APPLE
console.log('  this is an apple  '.trim()); // => this is an apple

//ES6: Text Includes.
console.log('this is an apple'.includes('apple')); // => true
console.log('this is an apple'.includes('mac')); // => false






//ES6: Text startsWith
console.log('this is an apple'.startsWith('this')); // => true
console.log('this is an apple'.startsWith('is')); // => false

//ES6: Text endsWith
console.log('this is an apple'.endsWith('apple')); // => true
console.log('this is an apple'.endsWith('an')); // => false

//ES6. Text repeats
console.log('x'.repeat(0)); // =>
console.log('x'.repeat(1)); // => x
console.log('x'.repeat(10)); // => xxxxxxxxxx

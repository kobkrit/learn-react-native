
//Object
const myObject = {a: 1, b: 2};
console.log(myObject['a']); // => 1
console.log(myObject); // => { a: 1, b: 2}
console.log(typeof(myObject)); // => object

//Array
const myArray = [1, 2];
console.log(myArray[0]); // => 1
console.log(myArray); // => [ 1, 2 ]
console.log(typeof(myArray)); // => object

//Function
const myFunction = function(){
  console.log("myFunction");
}
console.log(myFunction); // => [Function]
console.log(typeof(myFunction)); // => function

//Pass by Reference
const myArray2 = myArray;
myArray2[0] = 9;
console.log(myArray[0], myArray2[0]); // => 9, 9

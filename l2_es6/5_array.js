
//Declaration
let arr = [];
let arr1 = [1,2,3];
let arr2 = [1,2,'abc'];
console.log(typeof(arr2[1])); // => number
console.log(typeof(arr2[2])); // => string
console.log(arr2); // => object, Array are objects!
console.log(arr2.length); // => 3, use .length to get its size

//Update array and add array at index.
arr2[0] = 10;
console.log(arr2); // => [ 10, 2, 'abc' ]
arr2[3] = 11;
console.log(arr2); // => [ 10, 2, 'abc', 11 ]

// Length = Largest Index + 1
let longarr = [];
longarr.push(0);
longarr[10000] = 0;
// console.log(longarr); // => [ 0, undefined x 9999 ...  , 0]
console.log(longarr.length); // => 10001


//Delete element
let arr3 = [1, 2, 3, 4, 5];
delete arr3[2];
console.log(arr3); // => [1, 2, undefined, 4, 5]
console.log(arr3.length); // => 5

//How to actually remove its element? and insert it in between?
arr3.splice(2, 1); // splice({start index}, {amount of delete},
                   // {elements to insert ...});
console.log(arr3); // => [1,2,4,5]
arr3.splice(2, 1, 6, 7, 8);
console.log(arr3); // => [1,2,6,7,8,5]

//How to sub-array?
let arr4 = [1, 2, 3, 4, 5];
let arr5 = arr4.slice(1,3); // slice({start index},
                            // {end index (not inclusive)})
console.log(arr4); // => [1,2,4,5]
console.log(arr5); // => [2,3]



//Push element
let arr6 = [1, 2];
arr6.push(3);
arr6.push(null);
console.log(arr6); // => [1,2,3,null]

//Pop element
console.log(arr6.pop()); // => null
console.log(arr6); // => [1,2,3]

//Unshift element
arr6.unshift(0); // Push the first item of an array
console.log(arr6); // => [0,1,2,3]

//Shift element
arr6.shift(); // Remove the first item of an array
console.log(arr6); // => [1,2,3]



//How to recognize array
console.log(typeof([])); // => object
console.log(typeof({})); // => object
console.log(Array.isArray([])); // => true
console.log(Array.isArray({})); // => false

//Find element index in array
let arr7 = [1,2,3,4];
console.log(arr7.indexOf(2)); // => 1

//String is a kind of array
let str = 'Hello World!';
console.log(str.indexOf('H')); // => 0




//Loops
arr7.c = 999; //Assign element in array by accident...
for (let key in arr7){ //Don't use! Something it can have error occurs!
                       // If array is not pure.
  console.log(key, arr7[key]); //=> 0 1
                               //=> 1 2
                               //=> 2 3
                               //=> 3 4
                               //=> c 999
}

for (let key=0;key<arr7.length;key++){ //Safer!
  console.log(key, arr7[key]); //=> 0 1
                               //=> 1 2
                               //=> 2 3
                               //=> 3 4
}



//Sort
let arr8 = [2,3,1,4];
arr8.sort();
console.log(arr8); // => [1,2,3,4]

arr8.sort(function(a,b){return b-a});
console.log(arr8); // => [4,3,2,1]

//Reverse Array
let arr9 = [0,2,1,'y','a','b','z'];
arr9.sort();
console.log(arr9); // => [ 0, 1, 2, 'a', 'b', 'y', 'z' ]
arr9.reverse();
console.log(arr9); // => [ 'z', 'y', 'b', 'a', 2, 1, 0 ]



//Transform to String
console.log(arr9.join('|')); // => 'z|y|b|a|2|1|0'

//Transfrom String to Array
let str1 = "hello world! every body";
console.log(str1.split(" ")); // => [ 'hello', 'world!', 'every', 'body' ]

//2D, 3D Array...
let array2d = [[1,2,3],[4,5,6],[7,8,9]];
let array3d = [[[1,2,3],[4,5,6],[7,8,9]],[[0,0,0],[0,0,0],[0,0,0]]];
array2d[1] = [10,11,12];
array2d[1][1] = 13;
console.log(array2d); // => [ [ 1, 2, 3 ], [ 10, 13, 12 ], [ 7, 8, 9 ] ]




//ForEach: Iterate over the member in Array
array2d.forEach((item, key) => {
  console.log(item, key); // => [ 1, 2, 3 ] 0
                          //    [ 10, 13, 12 ] 1
                          //    [ 7, 8, 9 ] 2
});
array2d.forEach((item) => {
  console.log(item); // => [ 1, 2, 3 ]
                     //    [ 10, 13, 12 ]
                     //    [ 7, 8, 9 ]
});


//ES6: Array Spreads
let s1 = [1,2,3];
let s2 = [4,5,6];
let s3 = [...s1, ...s2];
let s4 = [...s2, 10, ...s1];
console.log(s3); // => [ 1, 2, 3, 4, 5, 6 ]
console.log(s4); // => [ 4, 5, 6, 10, 1, 2, 3 ]

//ES6: Array.from, Use for copy array, or convert array-like
//object into an array
console.log(Array.from(['a','b','c'])); // => ['a','b','c']
console.log(Array.from("abc")); // => ['a','b','c']

//ES6: Array.of, Create an array with given arguments as elements.
console.log(Array.of(1)); // => [1]
console.log(Array.of(1,2,3)); // => [1,2,3]
console.log(Array.of([1,2],3)); // => [[1,2],3]

//ES6: [].fill({input element}, {start index},
// {end index not inclusive}), Fill array with value
console.log(new Array(10).fill(1)); // => [1,1,1,1,1,1,1,1,1,1]
let arrFill = [1,2,3,4,5,6,7,8,9,10];
console.log(arrFill.fill('a',3,5)); // => [1,2,3,'a','a',6,7,8,9,10]

//ES6: [].find(condition function), return element of array that
//     match the condition
//     [].findIndex(condition function), return index of array that
//     match the condition
console.log([1,2,10,20,30].find(ele => ele>2)); // => 10
console.log([1,2,10,20,30].findIndex(ele => ele>2)); // => 2

//ES6: [].map, transfrom arrays
let source = [1,2,3,4,5];
console.log(source.map(x => x*x)); // => [ 1, 4, 9, 16, 25 ]
console.log(source.map(x => x+10)); // => [ 11, 12, 13, 14, 15 ]

//ES6: [].reduce, reduce arrays to values
source = [1,2,3,4,5];
let sum = source.reduce((memo, item, index) => {
  return memo+item
});
let product = source.reduce((memo, item, index) => memo*item);
let concat = source.reduce((memo, item, index) => ''+memo+item);
console.log(sum); // => 15
console.log(product); // => 120
console.log(concat); // => 12345

//ES6: [].filter, filter some element in arrays
source = [1,2,3,4,5];
console.log(source.filter(x => x>3)); // => [ 4, 5 ]


//ES6: Destructuring
let arr11 = [1,2,3,4,5];
let [a,b,c] = arr11;
console.log(arr11, a, b, c); // => [ 1, 2, 3, 4, 5 ] 1 2 3

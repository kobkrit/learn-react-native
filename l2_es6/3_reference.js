
const PI = 3.14;
PI = 3.15; // => Throw: Assignment to constant variable error!
const person = {}
person['a'] = 1; // OK!, Adding the key to object, don't change
                 // the reference of person variable.
if (true){
 const a = 2;
 let b = 3;
 var c = 4;
 console.log(a); // => 2
 console.log(b); // => 3
 console.log(c); // => 4
}
console.log(a); // => Throw: a is not defined.
console.log(b); // => Throw: b is not defined
console.log(c); // => 4

for (var i=0;i<3;i++){
  console.log(i); // => 0, 1, 2
}
console.log(i); // => 2 (Most of people don't want this behavior)

for (let l=0;l<3;l++){ //Always use let in for loop.
  console.log(l); // => 0, 1, 2
}
console.log(l); // => Throw: l is not defined.
